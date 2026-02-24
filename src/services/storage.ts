import type { BookId, CharacterId, MapView, CityId } from '@/types';
import {
	STORAGE_KEY,
	DONATION_KEY,
	CITY_PROMPT_SEEN_KEY,
	TIMELINE_KEY,
	VALID_BOOKS,
	VALID_CHARACTERS,
	VALID_MAP_VIEWS,
	VALID_CITIES,
} from '@/config';

// localStorage wrappers — swallow quota/private-browsing errors
function lsGet(key: string): string | null {
	try {
		return localStorage.getItem(key);
	} catch {
		return null;
	}
}
function lsSet(key: string, value: string): void {
	try {
		localStorage.setItem(key, value);
	} catch {
		/* quota / private browsing */
	}
}

export interface PersistedBookState {
	currentChapter: number;
	visibleCharacters: CharacterId[];
	followedCharacter: CharacterId | null;
	showLocations: boolean;
	showAllCharacters: boolean;
	showAtmosphere: boolean;
	mapView: MapView;
	activeCity: CityId | null;
}

export interface PersistedAppState {
	lastBook: BookId;
	books: Partial<Record<BookId, PersistedBookState>>;
}

function isValidBookState(obj: unknown): obj is PersistedBookState {
	if (!obj || typeof obj !== 'object') return false;
	const s = obj as Record<string, unknown>;

	if (typeof s.currentChapter !== 'number' || !Number.isFinite(s.currentChapter)) return false;
	if (!Array.isArray(s.visibleCharacters)) return false;
	if (!s.visibleCharacters.every((c: unknown) => VALID_CHARACTERS.includes(c as CharacterId)))
		return false;
	if (
		s.followedCharacter !== null &&
		!VALID_CHARACTERS.includes(s.followedCharacter as CharacterId)
	)
		return false;
	if (typeof s.showLocations !== 'boolean') return false;
	if (typeof s.showAllCharacters !== 'boolean') return false;
	if (typeof s.showAtmosphere !== 'boolean') s.showAtmosphere = true; // Default to true for existing saves
	if (!VALID_MAP_VIEWS.includes(s.mapView as MapView)) return false;
	if (s.activeCity !== null && !VALID_CITIES.includes(s.activeCity as CityId)) return false;

	return true;
}

export function loadAppState(): PersistedAppState | null {
	const raw = lsGet(STORAGE_KEY);
	if (!raw) return null;

	try {
		const parsed = JSON.parse(raw);
		if (!parsed || typeof parsed !== 'object') return null;
		if (!VALID_BOOKS.includes(parsed.lastBook)) return null;
		if (!parsed.books || typeof parsed.books !== 'object') return null;

		const validBooks: Partial<Record<BookId, PersistedBookState>> = {};
		for (const bookId of VALID_BOOKS) {
			if (parsed.books[bookId] && isValidBookState(parsed.books[bookId])) {
				validBooks[bookId] = parsed.books[bookId];
			}
		}

		return { lastBook: parsed.lastBook, books: validBooks };
	} catch {
		return null;
	}
}

export function saveAppState(state: PersistedAppState): void {
	lsSet(STORAGE_KEY, JSON.stringify(state));
}

export function saveBookState(
	bookId: BookId,
	bookState: PersistedBookState,
	lastBook?: BookId
): void {
	const existing = loadAppState();
	saveAppState({
		lastBook: lastBook ?? existing?.lastBook ?? bookId,
		books: { ...existing?.books, [bookId]: bookState },
	});
}

// Donation tracking

interface DonationData {
	visitCount: number;
	chaptersViewed: number;
	dismissed: boolean;
	lastPromptAt: number; // chaptersViewed when last prompted
}

function loadDonationData(): DonationData {
	const raw = lsGet(DONATION_KEY);
	if (!raw) return { visitCount: 0, chaptersViewed: 0, dismissed: false, lastPromptAt: 0 };
	try {
		const parsed = JSON.parse(raw);
		return {
			visitCount: typeof parsed.visitCount === 'number' ? parsed.visitCount : 0,
			chaptersViewed: typeof parsed.chaptersViewed === 'number' ? parsed.chaptersViewed : 0,
			dismissed: typeof parsed.dismissed === 'boolean' ? parsed.dismissed : false,
			lastPromptAt: typeof parsed.lastPromptAt === 'number' ? parsed.lastPromptAt : 0,
		};
	} catch {
		return { visitCount: 0, chaptersViewed: 0, dismissed: false, lastPromptAt: 0 };
	}
}

function saveDonationData(data: DonationData): void {
	lsSet(DONATION_KEY, JSON.stringify(data));
}

export function incrementVisitCount(): number {
	const data = loadDonationData();
	data.visitCount++;
	saveDonationData(data);
	return data.visitCount;
}

export function incrementChaptersViewed(): number {
	const data = loadDonationData();
	data.chaptersViewed++;
	saveDonationData(data);
	return data.chaptersViewed;
}

export function getDonationDismissed(): boolean {
	return loadDonationData().dismissed;
}

export function setDonationDismissed(): void {
	const data = loadDonationData();
	data.dismissed = true;
	saveDonationData(data);
}

export function getLastPromptAt(): number {
	return loadDonationData().lastPromptAt;
}

export function setLastPromptAt(): void {
	const data = loadDonationData();
	data.lastPromptAt = data.chaptersViewed;
	saveDonationData(data);
}

// City prompt tracking

export function hasCityPromptBeenSeen(): boolean {
	return lsGet(CITY_PROMPT_SEEN_KEY) === '1';
}

export function setCityPromptSeen(): void {
	lsSet(CITY_PROMPT_SEEN_KEY, '1');
}

// Timeline collapsed state

export function loadTimelineCollapsed(): boolean {
	return lsGet(TIMELINE_KEY) === '1';
}

export function saveTimelineCollapsed(collapsed: boolean): void {
	lsSet(TIMELINE_KEY, collapsed ? '1' : '0');
}
