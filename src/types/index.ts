import type L from 'leaflet';

export type BookId = 'tfe' | 'woa' | 'hoa';

export interface Book {
	id: BookId;
	title: string;
	order: number;
	totalChapters: number;
	hasPrologue: boolean;
	hasEpilogue: boolean;
	year: string;
	color: string;
}

export type CharacterId = 'vin' | 'kelsier' | 'sazed' | 'elend' | 'marsh' | 'spook';

export interface TitleProgression {
	[key: string]: string | undefined; // e.g., "tfe-1": "Street Urchin", "woa-1": "Heir to the Survivor"
}

export interface SecretHistoryTitles {
	[key: string]: string | undefined; // Extra titles unlocked by Secret History mode
}

export interface PortraitChange {
	book: BookId;
	chapter: number;
	image: string;
}

export interface Character {
	id: CharacterId;
	name: string;
	title: string;
	titleProgression?: TitleProgression;
	secretHistoryTitles?: SecretHistoryTitles;
	portraitChanges?: PortraitChange[];
	debutBook: BookId;
	debutChapter: number;
	color: string;
	description: string;
	icon: string;
}

export type LocationType =
	| 'capital'
	| 'city'
	| 'landmark'
	| 'stronghold'
	| 'region'
	| 'hideout'
	| 'keep'
	| 'palace'
	| 'mystical'
	| 'ashmount'
	| 'plantation'
	| 'district'
	| 'estate'
	| 'mine'
	| 'town'
	| 'village'
	| 'river'
	| 'industrial';

export interface Location {
	id: string;
	name: string;
	type: LocationType;
	dominance: string;
	coords: [number, number];
	description: string;
	features?: string[];
	cityMapId?: CityId; // If this location has a detailed city map
	placementNote?: string; // Note about discrepancies between map placement and source material
	checked?: boolean; // Whether this location has been verified
}

// Detailed intra-city views
export type CityId = 'luthadel' | 'urteau' | 'fadrex';

export type CityLandmarkType =
	| 'gate'
	| 'keep'
	| 'palace'
	| 'district'
	| 'shop'
	| 'safehouse'
	| 'landmark'
	| 'canal'
	| 'ministry'
	| 'plaza';

export interface CityLandmark {
	id: string;
	name: string;
	type: CityLandmarkType;
	coords: [number, number]; // Relative coordinates within city (0-100 percentage)
	description: string;
	worldLocationId?: string; // Links back to world map location if applicable
}

export interface CityMap {
	id: CityId;
	name: string;
	worldLocationId: string; // Links to main location on world map
	mapImage?: string; // Optional city map image
	bounds: [[number, number], [number, number]]; // Leaflet bounds for city view
	landmarks: CityLandmark[];
	description: string;
}

export type Season =
	| 'Spring'
	| 'Summer'
	| 'Autumn'
	| 'Winter'
	| 'Early Spring'
	| 'Late Spring'
	| 'Early Summer'
	| 'Late Summer'
	| 'Early Autumn'
	| 'Mid Autumn'
	| 'Late Autumn'
	| 'Early Winter'
	| 'Late Winter';

// Raw movement data as stored in JSON files
export interface RawMovement {
	book: BookId;
	chapter: number;
	location: string;
	offset?: [number, number];
	cityId?: CityId;
	cityLandmark?: string;
	cityOffset?: [number, number];
	title: string;
	description: string;
	season: Season;
	year: string;
	secretHistory?: boolean; // If true, only shown when Secret History mode is enabled
}

// Resolved movement with computed coordinates
export interface Movement {
	book: BookId;
	chapter: number;
	location: string;
	coords: [number, number];
	// City-level positioning (resolved)
	cityId?: CityId;
	cityLandmarkId?: string;
	cityCoords?: [number, number];
	title: string;
	description: string;
	season: Season;
	year: string;
	secretHistory?: boolean; // If true, only shown when Secret History mode is enabled
}

export type DominanceId = 'central' | 'northern' | 'southern' | 'eastern' | 'western' | 'farmost';

export interface Dominance {
	id: DominanceId;
	name: string;
	color: string;
	description: string;
}

export type MapView = 'world' | 'city';

export interface SelectedLocation {
	type: 'location';
	data: Location;
}

export interface SelectedCityLandmark {
	type: 'cityLandmark';
	data: CityLandmark;
	cityId: CityId;
}

export interface SelectedCharacter {
	type: 'character';
	data: Character;
	movement: Movement;
}

export type SelectedItem = SelectedLocation | SelectedCityLandmark | SelectedCharacter;

// What gets passed through MapContext
export interface MapContextType {
	currentBook: BookId;
	setCurrentBook: (book: BookId) => void;
	currentChapter: number;
	setCurrentChapter: (chapter: number | ((prev: number) => number)) => void;
	visibleCharacters: Set<CharacterId>;
	toggleCharacter: (charId: CharacterId) => void;
	showLocations: boolean;
	setShowLocations: (show: boolean) => void;
	showAtmosphere: boolean;
	setShowAtmosphere: (show: boolean) => void;
	showAllCharacters: boolean;
	setShowAllCharacters: (show: boolean) => void;
	secretHistoryMode: boolean;
	setSecretHistoryMode: (enabled: boolean) => void;
	mapView: MapView;
	activeCity: CityId | null;
	enterCity: (cityId: CityId) => void;
	exitCity: () => void;
	isEnteringCity: boolean;
	commitEnterCity: () => void;
	isPlaying: boolean;
	setIsPlaying: (playing: boolean) => void;
	waitingForConfirmation: boolean;
	setWaitingForConfirmation: (waiting: boolean) => void;
	citySuggestion: { cityId: CityId; cityName: string } | null;
	setCitySuggestion: (suggestion: { cityId: CityId; cityName: string } | null) => void;
	followedCharacter: CharacterId | null;
	setFollowedCharacter: (charId: CharacterId | null) => void;
	selectedItem: SelectedItem | null;
	setSelectedItem: (item: SelectedItem | null) => void;

	// Character marker popup control
	registerCharacterMarker: (charId: CharacterId, marker: L.Marker | null) => void;
	openCharacterPopup: (charId: CharacterId) => void;

	// Controls panel state
	controlsPanelOpen: boolean;
	setControlsPanelOpen: (open: boolean) => void;
}

export interface LoadingScreenProps {
	visible: boolean;
}

export interface BookSelectorProps {
	books: Book[];
}

export interface CharacterFiltersProps {
	characters: Character[];
}

export interface LocationMarkerProps {
	location: Location;
}

export interface CharacterMarkerProps {
	character: Character;
	movement: Movement | null;
	useCityCoords?: boolean;
}

export interface CharacterPathProps {
	character: Character;
	movements: Movement[];
	useCityCoords?: boolean;
}

export interface DominanceRegionProps {
	dominance: Dominance;
	coords: [number, number][];
}
