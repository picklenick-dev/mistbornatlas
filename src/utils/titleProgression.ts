import type { BookId, Character, CharacterId, Movement } from '@/types';
import type { DataCharacterTranslation } from '@/i18n/types';
import { BOOK_ORDER } from '@/data/characterConfig';

/**
 * Returns the right title for a character at the reader's current position,
 * respecting both book/chapter progression and Secret History mode.
 */
export function getCharacterTitle(
	character: Character,
	currentBook: BookId,
	currentChapter: number,
	secretHistoryMode: boolean = false,
	charTranslation?: DataCharacterTranslation
): string {
	const baseTitle = charTranslation?.title ?? character.title;

	if (!character.titleProgression) {
		return baseTitle;
	}

	// Use translated progression values when available, falling back to raw data
	const baseProg = charTranslation?.titleProgression ?? character.titleProgression;

	// Merge base titles with Secret History titles if enabled
	const secretProg = secretHistoryMode
		? (charTranslation?.secretHistoryTitles ?? character.secretHistoryTitles)
		: undefined;

	const progression = secretProg ? { ...baseProg, ...secretProg } : baseProg;
	const currentBookOrder = BOOK_ORDER[currentBook];

	// Find the most recent title that applies
	let applicableTitle = baseTitle;
	let latestMatchOrder = 0;
	let latestMatchChapter = 0;

	for (const key of Object.keys(progression)) {
		const [book, chapterStr] = key.split('-') as [BookId, string];
		const chapter = parseInt(chapterStr, 10);
		const keyBookOrder = BOOK_ORDER[book];

		const applies =
			keyBookOrder < currentBookOrder ||
			(keyBookOrder === currentBookOrder && chapter <= currentChapter);

		if (applies) {
			// Check if this is the "most recent" progression entry
			if (
				keyBookOrder > latestMatchOrder ||
				(keyBookOrder === latestMatchOrder && chapter > latestMatchChapter)
			) {
				latestMatchOrder = keyBookOrder;
				latestMatchChapter = chapter;
				applicableTitle = progression[key] ?? baseTitle;
			}
		}
	}

	return applicableTitle;
}

/**
 * Returns true if the character has made their debut at the current reading position.
 * Characters are hidden before debut to prevent spoilers.
 *
 * For per-book presence checking (e.g. Kelsier in WOA/HOA), use the
 * bookMovements-aware overload or combine with `isCharacterPresentInBook`.
 */
export function hasCharacterDebuted(
	character: Character,
	currentBook: BookId,
	currentChapter: number,
	bookMovements?: Record<CharacterId, Movement[]>,
	secretHistoryMode?: boolean
): boolean {
	// If bookMovements are provided, use per-book debut logic
	if (bookMovements !== undefined) {
		const debutChapter = getCharacterBookDebut(
			character,
			currentBook,
			bookMovements,
			secretHistoryMode ?? false
		);
		if (debutChapter === null) return false;
		return currentChapter >= debutChapter;
	}

	// Legacy fallback: global debut check (original behaviour)
	const currentBookOrder = BOOK_ORDER[currentBook];
	const debutBookOrder = BOOK_ORDER[character.debutBook];

	if (currentBookOrder > debutBookOrder) {
		return true;
	}

	if (currentBookOrder < debutBookOrder) {
		return false;
	}

	return currentChapter >= character.debutChapter;
}

/**
 * Returns true when a character has movement data in the given book.
 */
export function isCharacterPresentInBook(
	characterId: CharacterId,
	bookId: BookId,
	allMovements: Record<CharacterId, Movement[]>,
	secretHistoryMode: boolean
): boolean {
	const charMovements = allMovements[characterId];
	if (!charMovements) return false;

	return charMovements.some(
		m => m.book === bookId && (secretHistoryMode || !m.secretHistory)
	);
}

/**
 * Returns the first chapter a character appears in for a specific book,
 * or `null` if they have no movements in that book.
 *
 * For the character's original `debutBook`, the hand-curated `debutChapter`
 * from character data is used so narrative introductions stay accurate.
 */
export function getCharacterBookDebut(
	character: Character,
	bookId: BookId,
	allMovements: Record<CharacterId, Movement[]>,
	secretHistoryMode: boolean
): number | null {
	const charMovements = allMovements[character.id];
	if (!charMovements) return null;

	const bookMoves = charMovements.filter(
		m => m.book === bookId && (secretHistoryMode || !m.secretHistory)
	);
	if (bookMoves.length === 0) return null;

	if (bookId === character.debutBook) {
		return character.debutChapter;
	}

	return Math.min(...bookMoves.map(m => Math.floor(m.chapter)));
}
