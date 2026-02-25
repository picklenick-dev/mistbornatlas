import React from 'react';
import { Polyline, Tooltip, Pane } from 'react-leaflet';
import L from 'leaflet';
import { useLanguage } from '@/context/LanguageContext';
import { CHARACTER_COLORS } from '@/data/characterConfig';
import { PATH_OFFSET } from '@/config';
import type { Character, Movement } from '@/types';

interface CharacterPathProps {
	character: Character;
	movements: Movement[];
	useCityCoords?: boolean;
	offsetIndex?: number;
	totalAtPath?: number;
}

export const CharacterPath: React.FC<CharacterPathProps> = ({
	character,
	movements,
	useCityCoords = false,
	offsetIndex = 0,
	totalAtPath = 1,
}) => {
	const { t } = useLanguage();

	const validMovements = useCityCoords
		? movements.filter(m => m.cityCoords)
		: movements.filter(m => m.coords);

	if (validMovements.length < 2) return null;

	const color = CHARACTER_COLORS[character.id];

	let offset = 0;
	if (totalAtPath > 1) {
		const totalWidth = (totalAtPath - 1) * PATH_OFFSET;
		const startOffset = -totalWidth / 2;
		offset = startOffset + offsetIndex * PATH_OFFSET;
	}

	// Only render the last two segments to avoid clutter, but still show a bit of the path history in the tooltip
	const lastTwo = validMovements.slice(-2);
	const positions: L.LatLngExpression[] = lastTwo.map(m => {
		const coords = useCityCoords ? m.cityCoords! : m.coords;
		const x = coords[0] + (offset && !useCityCoords ? offset : 0);
		const y = coords[1];
		return [y, x];
	});

	return (
		<Pane name={`character-path-${character.id}`} style={{ zIndex: 650 }}>
			<Polyline
				positions={positions}
				pathOptions={{
					className: `character-path-outline ${character.id}`,
					color: '#000000',
					weight: 7,
					opacity: 0.8,
					lineCap: 'round',
					lineJoin: 'round',
				}}
			/>
			<Polyline
				positions={positions}
				pathOptions={{
					className: `character-path ${character.id}`,
					color,
					weight: 4,
					opacity: 1,
					dashArray: '12, 6',
					lineCap: 'round',
					lineJoin: 'round',
				}}
			>
				<Tooltip sticky>
					<span>
						{t.data.characters[character.id]?.name ?? character.name}
						{t.characterPath.journeyTooltip}
					</span>
				</Tooltip>
			</Polyline>
		</Pane>
	);
};

export default CharacterPath;
