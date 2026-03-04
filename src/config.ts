/**
 * Centralised application configuration.
 *
 * All tunable constants live here so they are easy to find and adjust.
 */

import type L from 'leaflet';
import type { BookId, CharacterId, MapView, CityId } from '@/types';
import type { LocationType, CityLandmarkType } from '@/types';
import type { LanguageCode } from '@/i18n/types';

// ── App Version ──────────────────────────────────────────────s─────────────────

export const APP_VERSION = '0.8.0';

// ── Timing ────────────────────────────────────────────────────────────────────

/** Milliseconds between chapter advances during auto-play */
export const PLAYBACK_INTERVAL = 2500;

/** Minimum time the loading screen is shown (ms) */
export const MIN_DISPLAY_MS = 1800;

/** Delay before opening popup when following a character (primary marker, ms) */
export const POPUP_FLY_TO_DELAY_PRIMARY = 300;

/** Delay before opening popup when following a character (secondary marker, ms) */
export const POPUP_FLY_TO_DELAY_SECONDARY = 450;

// ── World Map ─────────────────────────────────────────────────────────────────

export const MAP_IMAGE_URL = '/maps/map-final-empire.jpg';

export const MAP_BOUNDS: L.LatLngBoundsExpression = [
	[0, 0],
	[1555, 2048],
];

export const MAP_MAX_BOUNDS: L.LatLngBoundsExpression = [
	[-400, -400],
	[1955, 2448],
];

/** Map centre for first-time visitors (Luthadel focused) */
export const MAP_CENTER_FIRST_VISIT: L.LatLngExpression = [751, 1200];

/** Map centre for returning visitors */
export const MAP_CENTER_DEFAULT: L.LatLngExpression = [778, 1024];

export const MAP_ZOOM = 0;
export const MIN_ZOOM = -1;
export const MAX_ZOOM = 4;

// ── City Map ──────────────────────────────────────────────────────────────────

export const CITY_MAP_IMAGES: Record<string, string> = {
	luthadel: '/maps/luthadel.jpg',
	urteau: '/maps/urteau.jpg',
	fadrex: '/maps/fadrex.jpg',
};

export const CITY_MAP_BOUNDS: L.LatLngBoundsExpression = [
	[0, 0],
	[100, 100],
];

export const CITY_MAX_BOUNDS: L.LatLngBoundsExpression = [
	[-100, -100],
	[140, 140],
];

export const CITY_MAP_CENTER: L.LatLngExpression = [50, 50];
export const CITY_MAP_ZOOM = 1;
export const CITY_MIN_ZOOM = -1;
export const CITY_MAX_ZOOM = 6;

// ── Markers & Paths ───────────────────────────────────────────────────────────

/** Size of location/landmark markers (px) */
export const MARKER_SIZE = 28;

/** Character portrait icon dimensions [width, height] */
export const CHARACTER_ICON_SIZE: [number, number] = [44, 44];

/** Character icon anchor point [x, y] */
export const CHARACTER_ICON_ANCHOR: [number, number] = [22, 44];

/** Character popup anchor offset [x, y] */
export const CHARACTER_POPUP_ANCHOR: [number, number] = [0, -44];

/** Pixel offset between overlapping character paths */
export const PATH_OFFSET = 4;

/** Tooltip offset from marker [x, y] */
export const TOOLTIP_OFFSET: [number, number] = [0, -20];
export const TOOLTIP_OPACITY = 0.9;

export const POPUP_MAX_WIDTH = 300;
export const POPUP_AUTO_PAN_PADDING_TOP_LEFT: [number, number] = [20, 100];
export const POPUP_AUTO_PAN_PADDING_BOTTOM_RIGHT: [number, number] = [20, 20];

/** z-index offset for character markers */
export const MARKER_Z_INDEX_OFFSET = 1000;

// ── UI ────────────────────────────────────────────────────────────────────────

/** Max characters shown in popup descriptions before truncation */
export const DESCRIPTION_LIMIT = 200;

/** Number of ash particles on the loading screen */
export const ASH_COUNT = 60;

// ── Donation ──────────────────────────────────────────────────────────────────

/** Chapters between donation prompt re-appearances */
export const CHAPTERS_BETWEEN_PROMPTS = 125;

export const KOFI_URL = 'https://ko-fi.com/picklenickdev';

// ── Defaults ──────────────────────────────────────────────────────────────────

export const DEFAULT_BOOK: BookId = 'tfe';
export const DEFAULT_LANGUAGE: LanguageCode = 'en';

// ── Storage Keys ──────────────────────────────────────────────────────────────

export const STORAGE_KEY = 'mistborn-map-state';
export const DONATION_KEY = 'mistborn-donation';
export const CITY_PROMPT_SEEN_KEY = 'mistborn-city-prompt-seen';
export const TIMELINE_KEY = 'mistborn-timeline-collapsed';
export const HIDE_MOVEMENT_SPOILERS_KEY = 'mistborn-hide-movement-spoilers';
export const WELCOME_SEEN_KEY = 'mistborn-welcome-seen';

// ── Validation Lists ──────────────────────────────────────────────────────────

export const VALID_BOOKS: BookId[] = ['tfe', 'woa', 'hoa'];
export const VALID_CHARACTERS: CharacterId[] = [
	'vin',
	'kelsier',
	'sazed',
	'elend',
	'marsh',
	'spook',
];
export const VALID_MAP_VIEWS: MapView[] = ['world', 'city'];
export const VALID_CITIES: CityId[] = ['luthadel', 'urteau', 'fadrex'];

// ── Character Config ──────────────────────────────────────────────────────────

export const CHARACTER_COLORS: Record<CharacterId, string> = {
	vin: '#ff00ff',
	kelsier: '#00ffff',
	sazed: '#00ff00',
	elend: '#b366ff',
	marsh: '#ff3300',
	spook: '#ffff00',
};

export const CHARACTER_IMAGES: Record<CharacterId, string> = {
	vin: '/characters/vin_1.jpg',
	kelsier: '/characters/kelsier.jpg',
	sazed: '/characters/sazed.jpg',
	elend: '/characters/elend.jpg',
	marsh: '/characters/marsh_1.jpg',
	spook: '/characters/spook.png',
};

export const BOOK_ORDER: Record<BookId, number> = { tfe: 1, woa: 2, hoa: 3 };

export const BOOK_COLORS: Record<BookId, string> = {
	tfe: '#8b0000',
	woa: '#2f4f4f',
	hoa: '#4a0080',
};

// ── Portrait Attributions ─────────────────────────────────────────────────────

export interface PortraitAttribution {
	characterId: CharacterId;
	image: string;
	alt: string;
	/** Translation key suffix under t.about, e.g. 'portraitVinMistborn' */
	labelKey: string;
	artistName: string;
	artistUrl: string;
}

export const PORTRAIT_ATTRIBUTIONS: PortraitAttribution[] = [
	{
		characterId: 'vin',
		image: '/characters/vin.jpg',
		alt: 'Vin',
		labelKey: 'portraitVinMistborn',
		artistName: 'Miranda Meeks',
		artistUrl: 'https://miranda-meeks.tumblr.com/',
	},
	{
		characterId: 'vin',
		image: '/characters/vin_1.jpg',
		alt: 'Vin',
		labelKey: 'portraitVinUrchin',
		artistName: 'GisAlmeida',
		artistUrl: 'https://www.deviantart.com/gisalmeida',
	},
	{
		characterId: 'kelsier',
		image: '/characters/kelsier.jpg',
		alt: 'Kelsier',
		labelKey: 'portraitKelsier',
		artistName: 'Diego López',
		artistUrl: 'https://www.instagram.com/diegolopez_artist/',
	},
	{
		characterId: 'sazed',
		image: '/characters/sazed.jpg',
		alt: 'Sazed',
		labelKey: 'portraitSazed',
		artistName: 'Diego López',
		artistUrl: 'https://www.instagram.com/diegolopez_artist/',
	},
	{
		characterId: 'elend',
		image: '/characters/elend.jpg',
		alt: 'Elend',
		labelKey: 'portraitElend',
		artistName: 'Shayndlart',
		artistUrl: 'https://www.instagram.com/shayndl_art/',
	},
	{
		characterId: 'marsh',
		image: '/characters/marsh.png',
		alt: 'Marsh',
		labelKey: 'portraitMarshInquisitor',
		artistName: 'eyeronis',
		artistUrl: 'https://coppermind.net/wiki/Coppermind:Artists/eyeronis',
	},
	{
		characterId: 'marsh',
		image: '/characters/marsh_1.jpg',
		alt: 'Marsh with Kelsier',
		labelKey: 'portraitMarshKelsier',
		artistName: 'eyeronis',
		artistUrl: 'https://coppermind.net/wiki/Coppermind:Artists/eyeronis',
	},
	{
		characterId: 'spook',
		image: '/characters/spook.png',
		alt: 'Spook',
		labelKey: 'portraitSpook',
		artistName: 'Lazifyre',
		artistUrl: 'https://www.instagram.com/lazifyre/',
	},
];

// ── Location & Landmark Themes ────────────────────────────────────────────────

/** [metal, colour, label, darkGlyph?] */
export type ThemeTuple = [metal: string, color: string, label: string, darkGlyph?: boolean];

export const LOCATION_DEFS: Record<LocationType, ThemeTuple> = {
	capital: ['Gold', '#d4af37', 'Dominance Seat'],
	city: ['Steel', '#6b9ec7', 'City'],
	ashmount: ['Atium', '#9b4d6d', 'Ashmount'],
	landmark: ['Tin', '#c0cad4', 'Landmark', true],
	stronghold: ['Pewter', '#6a8060', 'Fortress'],
	hideout: ['Copper', '#c77f4e', 'Safe Haven'],
	mine: ['Iron', '#8a5050', 'Prison Mine'],
	mystical: ['Lerasium', '#e0d8f0', 'Sacred Site', true],
	town: ['Zinc', '#6aaa7a', 'Settlement'],
	village: ['Brass', '#b89060', 'Skaa Village'],
	river: ['Chromium', '#4a9a9a', 'Waterway'],
	industrial: ['Bronze', '#9a7050', 'Supply Post'],
	region: ['Electrum', '#8a8a60', 'Region'],
	keep: ['Gold', '#d4af37', 'Noble Keep'],
	palace: ['Atium', '#9b7ab8', 'Palace'],
	plantation: ['Brass', '#b89060', 'Plantation'],
	district: ['Zinc', '#6aaa7a', 'District'],
	estate: ['Gold', '#c4a030', 'Noble Estate'],
};

export const CITY_LANDMARK_DEFS: Record<CityLandmarkType, ThemeTuple> = {
	gate: ['Steel', '#7a8b9a', 'City Gate'],
	keep: ['Gold', '#d4af37', 'Noble Keep'],
	palace: ['Atium', '#9b7ab8', 'Palace'],
	district: ['Zinc', '#6a8a9a', 'District'],
	shop: ['Brass', '#a67c52', 'Merchant'],
	safehouse: ['Copper', '#c77f4e', 'Crew Safehouse'],
	landmark: ['Tin', '#b0b8c0', 'Notable Site', true],
	canal: ['Pewter', '#6b7b8d', 'Canal'],
	ministry: ['Bronze', '#8a7a6a', 'Canton'],
	plaza: ['Electrum', '#9a8a7a', 'Square'],
};

/** Unique metals used across location themes (for attribution / legend). */
export const UNIQUE_SYMBOL_METALS: { metal: string; color: string; darkGlyph: boolean }[] = (() => {
	const seen = new Set<string>();
	const result: { metal: string; color: string; darkGlyph: boolean }[] = [];
	for (const [, tuple] of Object.entries(LOCATION_DEFS)) {
		const [metal, color, , darkGlyph] = tuple;
		if (!seen.has(metal)) {
			seen.add(metal);
			result.push({ metal, color, darkGlyph: !!darkGlyph });
		}
	}
	return result;
})();
