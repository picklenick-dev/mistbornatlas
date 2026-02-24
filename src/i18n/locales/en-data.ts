/**
 * English data translations — auto-generated from JSON data files.
 *
 * For English, these values mirror the source JSON exactly.
 * Other language files (e.g. es-data.ts) would provide manually translated values.
 */
import type { DataTranslations } from '../types';

import booksData from '@/data/books.json';
import charactersData from '@/data/characters.json';
import locationsData from '@/data/locations.json';
import cityMapsData from '@/data/cityMaps.json';

import vinMovements from '@/data/movements/vin.json';
import kelsierMovements from '@/data/movements/kelsier.json';
import sazedMovements from '@/data/movements/sazed.json';
import elendMovements from '@/data/movements/elend.json';
import marshMovements from '@/data/movements/marsh.json';
import spookMovements from '@/data/movements/spook.json';

// Helpers

function toRecord<T, R>(
	items: T[],
	keyFn: (item: T) => string,
	valueFn: (item: T) => R
): Record<string, R> {
	const out: Record<string, R> = {};
	for (const item of items) out[keyFn(item)] = valueFn(item);
	return out;
}

function buildMovements(
	movements: {
		book: string;
		chapter: number;
		title: string;
		description: string;
		season: string;
		year: string;
	}[]
): Record<string, { title: string; description: string; season: string; year: string }> {
	const out: Record<string, { title: string; description: string; season: string; year: string }> =
		{};
	for (const m of movements) {
		out[`${m.book}-${m.chapter}`] = {
			title: m.title,
			description: m.description,
			season: m.season,
			year: m.year,
		};
	}
	return out;
}

// English data translations

export const enData: DataTranslations = {
	// Books
	books: toRecord(
		booksData,
		b => b.id,
		b => ({ title: b.title, year: b.year })
	),

	// Characters
	characters: toRecord(
		charactersData as unknown as {
			id: string;
			name: string;
			title: string;
			description: string;
			titleProgression?: Record<string, string>;
			secretHistoryTitles?: Record<string, string>;
		}[],
		c => c.id,
		c => ({
			name: c.name,
			title: c.title,
			description: c.description,
			titleProgression: c.titleProgression ?? {},
			...(c.secretHistoryTitles ? { secretHistoryTitles: c.secretHistoryTitles } : {}),
		})
	),

	// Locations
	locations: toRecord(
		locationsData as { id: string; name: string; description: string; placementNote?: string }[],
		l => l.id,
		l => ({
			name: l.name,
			description: l.description,
			...(l.placementNote ? { placementNote: l.placementNote } : {}),
		})
	),

	// Cities (top-level city map entries)
	cities: toRecord(
		cityMapsData as { id: string; name: string; description: string }[],
		c => c.id,
		c => ({ name: c.name, description: c.description })
	),

	// ── City landmarks (nested: cityId → landmarkId)
	cityLandmarks: (() => {
		const out: Record<string, Record<string, { name: string; description: string }>> = {};
		for (const city of cityMapsData as {
			id: string;
			landmarks: { id: string; name: string; description: string }[];
		}[]) {
			out[city.id] = {};
			for (const lm of city.landmarks) {
				out[city.id][lm.id] = { name: lm.name, description: lm.description };
			}
		}
		return out;
	})(),

	// ── Character movements (characterId → "book-chapter")
	movements: {
		vin: buildMovements(vinMovements as any[]),
		kelsier: buildMovements(kelsierMovements as any[]),
		sazed: buildMovements(sazedMovements as any[]),
		elend: buildMovements(elendMovements as any[]),
		marsh: buildMovements(marshMovements as any[]),
		spook: buildMovements(spookMovements as any[]),
	},

	// ── World-map marker labels (from LOCATION_THEMES)
	markerLabels: {
		capital: 'Dominance Seat',
		city: 'City',
		ashmount: 'Ashmount',
		landmark: 'Landmark',
		stronghold: 'Fortress',
		hideout: 'Safe Haven',
		mine: 'Prison Mine',
		mystical: 'Sacred Site',
		town: 'Settlement',
		village: 'Skaa Village',
		river: 'Waterway',
		industrial: 'Supply Post',
		region: 'Region',
		keep: 'Noble Keep',
		palace: 'Palace',
		plantation: 'Plantation',
		district: 'District',
		estate: 'Noble Estate',
	},

	// ── City landmark marker labels (from CITY_LANDMARK_THEMES)
	cityMarkerLabels: {
		gate: 'City Gate',
		keep: 'Noble Keep',
		palace: 'Palace',
		district: 'District',
		shop: 'Merchant',
		safehouse: 'Crew Safehouse',
		landmark: 'Notable Site',
		canal: 'Canal',
		ministry: 'Canton',
		plaza: 'Square',
	},
};
