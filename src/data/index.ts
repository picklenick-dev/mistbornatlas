import type {
	Book,
	Character,
	Location,
	Movement,
	RawMovement,
	CharacterId,
	CityMap,
	CityLandmark,
	CityId,
} from '@/types';

export {
	CHARACTER_COLORS,
	CHARACTER_IMAGES,
	BOOK_ORDER,
	BOOK_COLORS,
	KOFI_URL,
	getCharacterPortrait,
} from './characterConfig';

import booksData from './books.json';
import charactersData from './characters.json';
import locationsData from './locations.json';
import cityMapsData from './cityMaps.json';

import vinMovements from './movements/vin.json';
import kelsierMovements from './movements/kelsier.json';
import sazedMovements from './movements/sazed.json';
import elendMovements from './movements/elend.json';
import marshMovements from './movements/marsh.json';
import spookMovements from './movements/spook.json';

export const books = booksData as Book[];
export const characters = charactersData as Character[];
export const locations = locationsData as Location[];
export const cityMaps = cityMapsData as CityMap[];

const locationMap = new Map<string, Location>(locations.map(loc => [loc.id, loc]));

const cityMapById = new Map<CityId, CityMap>(cityMaps.map(city => [city.id, city]));

const getCityLandmark = (cityId: CityId, landmarkId: string): CityLandmark | undefined => {
	const city = cityMapById.get(cityId);
	return city?.landmarks.find(l => l.id === landmarkId);
};

const resolveMovement = (raw: RawMovement): Movement => {
	const location = raw.location ? locationMap.get(raw.location) : undefined;

	// Resolve base coords: location lookup, then locationCoords fallback, then Luthadel default
	let baseCoords: [number, number];
	if (location) {
		baseCoords = [...location.coords];
	} else if (raw.locationCoords) {
		baseCoords = [...raw.locationCoords];
	} else {
		if (raw.location) {
			console.warn(`Location "${raw.location}" not found in locations.json`);
		}
		baseCoords = [1274, 777];
	}

	const coords: [number, number] = raw.offset
		? [baseCoords[0] + raw.offset[0], baseCoords[1] + raw.offset[1]]
		: baseCoords;

	let cityId: CityId | undefined;
	let cityCoords: [number, number] | undefined;

	if (raw.cityId && raw.cityLandmark) {
		cityId = raw.cityId;
		const landmark = getCityLandmark(raw.cityId, raw.cityLandmark);
		if (landmark) {
			cityCoords = raw.cityOffset
				? [landmark.coords[0] + raw.cityOffset[0], landmark.coords[1] + raw.cityOffset[1]]
				: [...landmark.coords];
		}
	} else if (raw.cityId) {
		cityId = raw.cityId;
		const city = cityMapById.get(raw.cityId);
		const matchingLandmark = city?.landmarks.find(l => l.worldLocationId === raw.location);
		if (matchingLandmark) {
			cityCoords = raw.cityOffset
				? [
						matchingLandmark.coords[0] + raw.cityOffset[0],
						matchingLandmark.coords[1] + raw.cityOffset[1],
					]
				: [...matchingLandmark.coords];
		}
	}

	const cityLandmarkId = raw.cityLandmark;

	return {
		book: raw.book,
		chapter: raw.chapter,
		location: raw.location ?? '',
		coords,
		cityId,
		cityLandmarkId,
		cityCoords,
		title: raw.title,
		description: raw.description,
		season: raw.season,
		year: raw.year,
		secretHistory: raw.secretHistory,
	};
};

const resolveMovements = (rawMovements: RawMovement[]): Movement[] =>
	rawMovements.map(resolveMovement);

export const movements: Record<CharacterId, Movement[]> = {
	vin: resolveMovements(vinMovements as RawMovement[]),
	kelsier: resolveMovements(kelsierMovements as RawMovement[]),
	sazed: resolveMovements(sazedMovements as RawMovement[]),
	elend: resolveMovements(elendMovements as RawMovement[]),
	marsh: resolveMovements(marshMovements as RawMovement[]),
	spook: resolveMovements(spookMovements as RawMovement[]),
};

export const getBookById = (id: string): Book | undefined => books.find(b => b.id === id);

export const getCharacterById = (id: CharacterId): Character | undefined =>
	characters.find(c => c.id === id);

export const getLocationById = (id: string): Location | undefined => locationMap.get(id);

export const getCharacterMovements = (characterId: CharacterId): Movement[] =>
	movements[characterId] || [];

export const getMovementsForBook = (bookId: string): Record<CharacterId, Movement[]> => {
	const result: Record<CharacterId, Movement[]> = {} as Record<CharacterId, Movement[]>;

	for (const [charId, charMovements] of Object.entries(movements)) {
		const filtered = charMovements.filter(m => m.book === bookId);
		if (filtered.length > 0) {
			result[charId as CharacterId] = filtered;
		}
	}

	return result;
};

export const getCityMapById = (cityId: CityId): CityMap | undefined => cityMapById.get(cityId);

export const getZoomableCities = (): { locationId: string; cityId: CityId; name: string }[] => {
	return cityMaps
		.filter(city => city.worldLocationId)
		.map(city => ({
			locationId: city.worldLocationId!,
			cityId: city.id,
			name: city.name,
		}));
};
