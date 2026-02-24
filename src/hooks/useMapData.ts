import { useMemo } from 'react';
import { useMapContext } from '@/context/MapContext';
import { getMovementsForBook, getCharacterById } from '@/data';
import { hasCharacterDebuted } from '@/utils';
import { locations } from '@/data';
import type { Movement, Character, CharacterId } from '@/types';

export interface CharacterPosition {
	character: Character;
	movement: Movement | null;
	coords: [number, number] | null;
	displayCoords: [number, number] | null;
	displayCityCoords: [number, number] | null;
	positionIndex: number;
}

export interface UseMapDataReturn {
	visibleLocations: typeof locations;
	characterPositions: CharacterPosition[];
	characterPaths: {
		character: Character;
		movements: Movement[];
		offsetIndex: number;
		totalAtPath: number;
	}[];
}

export const useMapData = (): UseMapDataReturn => {
	const {
		currentBook,
		currentChapter,
		visibleCharacters,
		showLocations,
		showAllCharacters,
		secretHistoryMode,
	} = useMapContext();

	const bookMovements = useMemo(() => {
		const raw = getMovementsForBook(currentBook);
		if (secretHistoryMode) return raw;

		// Filter out Secret History movements, kelsier is moving around.. spiler for secret history!!
		const filtered: Record<CharacterId, Movement[]> = {} as Record<CharacterId, Movement[]>;
		for (const [charId, moves] of Object.entries(raw)) {
			const clean = moves.filter(m => !m.secretHistory);
			if (clean.length > 0) {
				filtered[charId as CharacterId] = clean;
			}
		}
		return filtered;
	}, [currentBook, secretHistoryMode]);

	const visibleLocations = useMemo(() => {
		if (!showLocations) return [];
		return locations;
	}, [showLocations]);

	const characterPositions = useMemo((): CharacterPosition[] => {
		const positions: CharacterPosition[] = [];

		visibleCharacters.forEach(charId => {
			// debugger;
			const character = getCharacterById(charId);
			if (!character) return;

			if (!showAllCharacters && !hasCharacterDebuted(character, currentBook, currentChapter)) {
				return;
			}

			const charMovements = bookMovements[charId] || [];

			// Find the highest base chapter <= currentChapter (sub-chapters like 10.2 belong to chapter 10)
			let maxBaseChapter = -1;
			for (const movement of charMovements) {
				const base = Math.floor(movement.chapter);
				if (base <= currentChapter && base > maxBaseChapter) {
					maxBaseChapter = base;
				}
			}

			// Collect ALL movements at that base chapter (supports multi-position via sub-chapters like 10, 10.2)
			let currentMovements: Movement[] = [];
			if (maxBaseChapter >= 0) {
				currentMovements = charMovements.filter(m => Math.floor(m.chapter) === maxBaseChapter);
			}

			if (currentMovements.length === 0 && showAllCharacters && charMovements.length > 0) {
				const earliest = charMovements.reduce(
					(e, m) => (!e || m.chapter < e.chapter ? m : e),
					null as Movement | null
				);
				if (earliest) currentMovements = [earliest];
			}

			currentMovements.forEach((mov, idx) => {
				positions.push({
					character,
					movement: mov,
					coords: mov.coords || null,
					displayCoords: mov.coords || null,
					displayCityCoords: mov.cityCoords || null,
					positionIndex: idx,
				});
			});
		});

		const spreadCollisions = (
			getCoords: (pos: CharacterPosition) => [number, number] | null | undefined,
			getKey: (pos: CharacterPosition, coords: [number, number]) => string,
			threshold: number,
			offsetDist: number,
			apply: (pos: CharacterPosition, offset: number, coords: [number, number]) => void
		) => {
			const groups = new Map<string, number[]>();
			positions.forEach((pos, index) => {
				const c = getCoords(pos);
				if (!c) return;
				const key = getKey(pos, [Math.round(c[0] / threshold), Math.round(c[1] / threshold)]);
				const g = groups.get(key) || [];
				g.push(index);
				groups.set(key, g);
			});
			groups.forEach(indices => {
				if (indices.length <= 1) return;
				const totalWidth = (indices.length - 1) * offsetDist;
				const start = -totalWidth / 2;
				indices.forEach((idx, i) => {
					const pos = positions[idx];
					const c = getCoords(pos);
					if (c) apply(pos, start + i * offsetDist, c);
				});
			});
		};

		spreadCollisions(
			p => p.coords,
			(_p, k) => `${k[0]},${k[1]}`,
			2,
			6,
			(pos, xOff, coords) => {
				pos.displayCoords = [coords[0] + xOff, coords[1]];
			}
		);

		spreadCollisions(
			p => p.movement?.cityCoords,
			(p, k) => `${p.movement?.cityId}-${k[0]},${k[1]}`,
			2,
			2,
			(pos, xOff, coords) => {
				pos.displayCityCoords = [coords[0] + xOff, coords[1]];
			}
		);

		return positions;
	}, [visibleCharacters, bookMovements, currentChapter, currentBook, showAllCharacters]);

	const characterPaths = useMemo(() => {
		const paths: {
			character: Character;
			movements: Movement[];
			offsetIndex: number;
			totalAtPath: number;
		}[] = [];

		visibleCharacters.forEach(charId => {
			const character = getCharacterById(charId);
			if (!character) return;

			// Check if character has debuted (unless override is enabled)
			if (!showAllCharacters && !hasCharacterDebuted(character, currentBook, currentChapter)) {
				return;
			}

			const charMovements = bookMovements[charId] || [];

			// Filter movements up to and including current chapter
			let pathMovements = charMovements
				.filter((m: Movement) => Math.floor(m.chapter) <= currentChapter)
				.sort((a: Movement, b: Movement) => a.chapter - b.chapter);

			if (pathMovements.length === 0 && showAllCharacters && charMovements.length > 0) {
				const earliest = charMovements.reduce(
					(e, m) => (!e || m.chapter < e.chapter ? m : e),
					null as Movement | null
				);
				if (earliest) pathMovements = [earliest];
			}

			if (pathMovements.length > 0) {
				paths.push({
					character,
					movements: pathMovements,
					offsetIndex: 0,
					totalAtPath: 1,
				});
			}
		});

		const pathSignatures = new Map<string, number[]>();

		paths.forEach((path, index) => {
			const signature = path.movements
				.filter(m => m.coords)
				.map(m => `${Math.round(m.coords[0] / 5)},${Math.round(m.coords[1] / 5)}`)
				.join('|');

			if (signature) {
				const group = pathSignatures.get(signature) || [];
				group.push(index);
				pathSignatures.set(signature, group);
			}
		});

		pathSignatures.forEach(indices => {
			if (indices.length <= 1) return;

			indices.forEach((index, i) => {
				paths[index].offsetIndex = i;
				paths[index].totalAtPath = indices.length;
			});
		});

		return paths;
	}, [visibleCharacters, bookMovements, currentChapter, currentBook, showAllCharacters]);

	return {
		visibleLocations,
		characterPositions,
		characterPaths,
	};
};
