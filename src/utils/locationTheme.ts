// Maps each location/landmark type to its Allomantic metal symbol, colour, and label.
// SVG assets: /symbols/{Metal}.svg — traced from Isaac Stewart's Allomantic Table (Coppermind).

import type { LocationType, CityLandmarkType } from '@/types';
import { LOCATION_DEFS, CITY_LANDMARK_DEFS, type ThemeTuple } from '@/config';

export { MARKER_SIZE, UNIQUE_SYMBOL_METALS } from '@/config';

export interface LocationTheme {
	metal: string;
	symbol: string;
	color: string;
	label: string;
	darkGlyph?: boolean;
}

export type CityLandmarkTheme = LocationTheme;

const toTheme = ([metal, color, label, darkGlyph]: ThemeTuple): LocationTheme => ({
	metal,
	symbol: `/symbols/${metal}.svg`,
	color,
	label,
	...(darkGlyph && { darkGlyph }),
});

export const LOCATION_THEMES: Record<LocationType, LocationTheme> = Object.fromEntries(
	Object.entries(LOCATION_DEFS).map(([k, v]) => [k, toTheme(v)])
) as Record<LocationType, LocationTheme>;

export const CITY_LANDMARK_THEMES: Record<CityLandmarkType, CityLandmarkTheme> = Object.fromEntries(
	Object.entries(CITY_LANDMARK_DEFS).map(([k, v]) => [k, toTheme(v)])
) as Record<CityLandmarkType, CityLandmarkTheme>;

export const getLocationTheme = (type: string): LocationTheme =>
	LOCATION_THEMES[type as LocationType] ?? LOCATION_THEMES.landmark;

export const getCityLandmarkTheme = (type: string): CityLandmarkTheme =>
	CITY_LANDMARK_THEMES[type as CityLandmarkType] ?? CITY_LANDMARK_THEMES.landmark;
