import type { CharacterId, BookId } from '@/types';
import { CHARACTER_COLORS, CHARACTER_IMAGES, BOOK_ORDER, BOOK_COLORS, KOFI_URL } from '@/config';

export { CHARACTER_COLORS, CHARACTER_IMAGES, BOOK_ORDER, BOOK_COLORS, KOFI_URL };

/** Resolve the correct portrait for a character based on timeline position */
export const getCharacterPortrait = (
	character: {
		id: CharacterId;
		portraitChanges?: { book: BookId; chapter: number; image: string }[];
	},
	currentBook: BookId,
	currentChapter: number,
	showAll: boolean
): string => {
	const base = CHARACTER_IMAGES[character.id];
	if (!character.portraitChanges?.length) return base;
	if (showAll) return character.portraitChanges[character.portraitChanges.length - 1].image;

	const currentOrder = BOOK_ORDER[currentBook];
	let resolved = base;
	for (const change of character.portraitChanges) {
		const changeOrder = BOOK_ORDER[change.book];
		if (
			changeOrder < currentOrder ||
			(changeOrder === currentOrder && change.chapter <= currentChapter)
		) {
			resolved = change.image;
		}
	}
	return resolved;
};
