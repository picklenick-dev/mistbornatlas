import React from 'react';
import { useMapContext } from '@/context/MapContext';
import { useLanguage } from '@/context/LanguageContext';
import { characters, movements } from '@/data';
import { getCharacterTitle, hasCharacterDebuted, isCharacterPresentInBook } from '@/utils';
import { CHARACTER_COLORS, BOOK_ORDER, getCharacterPortrait } from '@/data/characterConfig';
import { EyeIcon } from '@/components/icons';
import type { CharacterId } from '@/types';
import styles from './CharacterFilters.module.scss';

export const CharacterFilters: React.FC = () => {
	const {
		visibleCharacters,
		toggleCharacter,
		currentBook,
		currentChapter,
		showAllCharacters,
		secretHistoryMode,
		followedCharacter,
		setFollowedCharacter,
		openCharacterPopup,
	} = useMapContext();
	const { t } = useLanguage();

	const handleFollowClick = (e: React.MouseEvent, charId: CharacterId) => {
		e.stopPropagation();
		const isStartingFollow = followedCharacter !== charId;
		setFollowedCharacter(isStartingFollow ? charId : null);
		// Open the character's popup only when starting to follow
		if (isStartingFollow) {
			openCharacterPopup(charId);
		}
	};

	return (
		<div className={styles.filterList}>
			{characters.map(character => {
				const isChecked = visibleCharacters.has(character.id);
				const color = CHARACTER_COLORS[character.id];
				const presentInBook = isCharacterPresentInBook(
					character.id,
					currentBook,
					movements,
					secretHistoryMode
				);
				const debuted = presentInBook
					? hasCharacterDebuted(
							character,
							currentBook,
							currentChapter,
							movements,
							secretHistoryMode
						)
					: false;
				const isAvailable = presentInBook && (debuted || showAllCharacters);
				const isFollowed = followedCharacter === character.id;
				const charTrans = t.data.characters[character.id];
				const charName = charTrans?.name ?? character.name;

				// Reader already knows this character if they debuted in a prior book
				const knownFromPriorBook =
					BOOK_ORDER[character.debutBook] < BOOK_ORDER[currentBook];

				const title = debuted
					? getCharacterTitle(character, currentBook, currentChapter, secretHistoryMode, charTrans)
					: knownFromPriorBook
						? getCharacterTitle(character, currentBook, 0, secretHistoryMode, charTrans)
						: showAllCharacters
							? t.characters.notYetIntroduced
							: t.characters.hiddenPlaceholder;

				// Show name & portrait for characters the reader already knows (from prior books
				// or debuted in this chapter), hide identity only for truly unseen characters.
				const showIdentity = isAvailable || knownFromPriorBook;

				return (
					<div
						key={character.id}
						className={`${styles.characterItem} ${!isAvailable ? styles.notDebuted : ''} ${!presentInBook ? styles.notInBook : ''}`}
						onClick={() => isAvailable && toggleCharacter(character.id)}
						role="checkbox"
						aria-checked={isChecked}
						aria-disabled={!isAvailable}
						tabIndex={isAvailable ? 0 : -1}
						onKeyDown={e => {
							if ((e.key === 'Enter' || e.key === ' ') && isAvailable) {
								e.preventDefault();
								toggleCharacter(character.id);
							}
						}}
					>
						<div
							className={`${styles.checkbox} ${isChecked && isAvailable ? styles.checked : ''}`}
							style={{ '--char-color': color } as React.CSSProperties}
						/>
						<span
							className={`${styles.portraitIcon} ${!showIdentity ? styles.portraitHidden : ''} ${!presentInBook ? styles.portraitDimmed : ''}`}
							style={{ borderColor: showIdentity ? color : undefined }}
						>
							{showIdentity ? (
								<img
									src={getCharacterPortrait(
										character,
										currentBook,
										currentChapter,
										showAllCharacters
									)}
									alt={charName}
								/>
							) : (
								<span className={styles.portraitPlaceholder}>?</span>
							)}
						</span>
						<div className={styles.characterInfo}>
							<span className={styles.characterName}>
							{showIdentity ? charName : t.characters.hiddenPlaceholder}
						</span>
						<span className={styles.characterTitle} title={showIdentity ? title : undefined}>
							{showIdentity ? title : t.characters.hiddenPlaceholder}
							</span>
						</div>
						<button
							className={`${styles.followButton} ${isFollowed ? styles.following : ''}`}
							onClick={e => isAvailable && handleFollowClick(e, character.id)}
							title={isFollowed ? t.characters.following : t.characters.follow}
							aria-label={
								isFollowed
									? `${t.characters.following} ${charName}`
									: `${t.characters.follow} ${charName}`
							}
							disabled={!isAvailable}
						>
							<EyeIcon />
						</button>
						<div
							className={styles.colorDot}
							style={{ '--char-color': color } as React.CSSProperties}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default CharacterFilters;
