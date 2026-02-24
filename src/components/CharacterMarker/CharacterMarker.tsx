import React, { useEffect, useRef, useState } from 'react';
import { Marker, Popup, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import { useMapContext } from '@/context/MapContext';
import { useHoverContext } from '@/context/HoverContext';
import { useLanguage } from '@/context/LanguageContext';
import { getCharacterTitle, isLightColor } from '@/utils';
import { usePopupPosition } from '@/hooks';
import { getCharacterMovements } from '@/data';
import { CHARACTER_COLORS, getCharacterPortrait } from '@/data/characterConfig';
import {
	DESCRIPTION_LIMIT,
	CHARACTER_ICON_SIZE,
	CHARACTER_ICON_ANCHOR,
	CHARACTER_POPUP_ANCHOR,
	POPUP_FLY_TO_DELAY_PRIMARY,
	POPUP_FLY_TO_DELAY_SECONDARY,
	MARKER_Z_INDEX_OFFSET,
	TOOLTIP_OFFSET,
	TOOLTIP_OPACITY,
	POPUP_MAX_WIDTH,
	POPUP_AUTO_PAN_PADDING_TOP_LEFT,
	POPUP_AUTO_PAN_PADDING_BOTTOM_RIGHT,
} from '@/config';
import type { Character, Movement, CharacterId } from '@/types';
import styles from './CharacterMarker.module.scss';

// Detect touch-only devices — path highlighting uses popup open/close instead of mouseover
const isTouchDevice =
	typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

// Module-level registry of open multi-part popups so we can close non-siblings
const openMultiPartPopups = new Map<
	string,
	{ marker: L.Marker; characterId: string; baseChapter: number }
>();

/** Close every tracked multi-part popup that isn't a sibling of the given group. */
const closeNonSiblingPopups = (characterId: string, baseChapter: number) => {
	openMultiPartPopups.forEach((entry, key) => {
		if (entry.characterId !== characterId || entry.baseChapter !== baseChapter) {
			if (entry.marker.isPopupOpen()) entry.marker.closePopup();
			openMultiPartPopups.delete(key);
		}
	});
};

interface CharacterMarkerProps {
	character: Character;
	movement: Movement | null;
	useCityCoords?: boolean;
	displayCoords?: [number, number] | null; // Offset coords so the characeters dont overlap that much on the wordl map
	positionIndex?: number;
}

const createCharacterIcon = (characterId: CharacterId, imageSrc: string): L.DivIcon => {
	const color = CHARACTER_COLORS[characterId];

	return L.divIcon({
		className: `character-marker-icon ${characterId}`,
		iconSize: CHARACTER_ICON_SIZE,
		iconAnchor: CHARACTER_ICON_ANCHOR,
		popupAnchor: CHARACTER_POPUP_ANCHOR,
		html: `<div class="character-portrait-marker" data-image="${imageSrc.split('/').pop()}" style="border-color: ${color}; box-shadow: 0 0 10px ${color}, 0 0 20px ${color}40;">
      <img src="${imageSrc}" alt="${characterId}" draggable="false" />
    </div>`,
	});
};

export const CharacterMarker: React.FC<CharacterMarkerProps> = ({
	character,
	movement,
	useCityCoords = false,
	displayCoords,
	positionIndex = 0,
}) => {
	const {
		currentBook,
		currentChapter,
		followedCharacter,
		isPlaying,
		waitingForConfirmation,
		setWaitingForConfirmation,
		citySuggestion,
		setCitySuggestion,
		enterCity,
		mapView,
		showAllCharacters,
		secretHistoryMode,
		registerCharacterMarker,
	} = useMapContext();
	const { setHoveredCharacter } = useHoverContext();
	const { t } = useLanguage();
	const markerRef = useRef<L.Marker>(null);
	const [showFullDescription, setShowFullDescription] = useState(false);
	const [showCityChoice, setShowCityChoice] = useState(false);

	// Get all movements for this character up to current chapter
	const allMovements = getCharacterMovements(character.id)
		.filter(m => m.book === currentBook && Math.floor(m.chapter) <= currentChapter)
		.sort((a, b) => a.chapter - b.chapter);

	// Track which movement in history we're viewing, 0 = this marker's own movement
	const [historyIndex, setHistoryIndex] = useState(0);

	// Anchor history navigation to this marker's own movement
	const ownMovementIdx = movement
		? allMovements.findIndex(m => m.chapter === movement.chapter)
		: -1;
	const startIdx = ownMovementIdx >= 0 ? ownMovementIdx : allMovements.length - 1;
	const displayIdx = startIdx - historyIndex;

	// Get the movement to display
	const displayMovement =
		displayIdx >= 0 && displayIdx < allMovements.length ? allMovements[displayIdx] : movement;

	// Detect sub-chapter siblings (e.g. chapter 10 and 10.2 are linked parts)
	const baseChapter = movement ? Math.floor(movement.chapter) : -1;
	const siblingMovements = allMovements.filter(m => Math.floor(m.chapter) === baseChapter);
	const isMultiPart = siblingMovements.length > 1;
	const partNumber = isMultiPart
		? siblingMovements.findIndex(m => m.chapter === movement?.chapter) + 1
		: 0;
	const totalParts = siblingMovements.length;

	useEffect(() => {
		setHistoryIndex(0);
	}, [currentChapter]);

	// Register marker ref with context for sidebar popup control (primary position only)
	useEffect(() => {
		if (positionIndex !== 0) return;
		registerCharacterMarker(character.id, markerRef.current);
		return () => registerCharacterMarker(character.id, null);
	}, [character.id, registerCharacterMarker, positionIndex]);

	useEffect(() => {
		if (!markerRef.current) return;
		if (!isPlaying) return;
		if (followedCharacter !== character.id) return;

		// Small delay to let map update first (stagger secondary parts slightly later)
		const delay = positionIndex === 0 ? POPUP_FLY_TO_DELAY_PRIMARY : POPUP_FLY_TO_DELAY_SECONDARY;
		const timeoutId = setTimeout(() => {
			if (markerRef.current && !markerRef.current.isPopupOpen()) {
				markerRef.current.openPopup();
				// Only the primary marker pauses playback
				if (positionIndex === 0) {
					setWaitingForConfirmation(true);
				}
				// Reset city choice state and history
				setShowCityChoice(false);
				setHistoryIndex(0);
			}
		}, delay);

		return () => clearTimeout(timeoutId);
	}, [isPlaying, followedCharacter, character.id, currentChapter, setWaitingForConfirmation]);

	const { isPopupOpen, popupEventHandlers } = usePopupPosition();

	if (!movement) return null;

	const activeMovement = displayMovement || movement;

	let coords: [number, number] | undefined;

	if (useCityCoords && displayCoords) {
		coords = displayCoords;
	} else if (useCityCoords && movement.cityCoords) {
		coords = movement.cityCoords;
	} else if (displayCoords && displayCoords[0] !== undefined && displayCoords[1] !== undefined) {
		coords = displayCoords;
	} else if (movement.coords) {
		coords = movement.coords;
	}

	if (!coords) return null;

	const position: L.LatLngExpression = [coords[1], coords[0]];
	const characterImage = getCharacterPortrait(
		character,
		currentBook,
		currentChapter,
		showAllCharacters
	);
	const icon = createCharacterIcon(character.id, characterImage);
	const color = CHARACTER_COLORS[character.id];
	const charColorVars = {
		'--char-color': color,
		'--char-text-color': isLightColor(color) ? '#1a1a2e' : '#fff',
	} as React.CSSProperties;
	const charTrans = t.data.characters[character.id];
	const characterTitle = getCharacterTitle(
		character,
		currentBook,
		currentChapter,
		secretHistoryMode,
		charTrans
	);
	const movementKey = `${activeMovement.book}-${activeMovement.chapter}`;
	const movTrans = t.data.movements[character.id]?.[movementKey];
	const charName = charTrans?.name ?? character.name;

	// Path-highlight helpers (shared between desktop mouseover and mobile popup open/close)
	const applyHoverHighlight = () => {
		setHoveredCharacter(character.id);
		document.body.setAttribute('data-character-hovered', character.id);
		const visitedLocationIds = new Set(allMovements.map(m => m.location));
		const visitedLandmarkIds = new Set(allMovements.map(m => m.cityLandmarkId).filter(Boolean));
		visitedLocationIds.forEach(locId => {
			document.querySelectorAll(`[data-location-id="${locId}"]`).forEach(el => {
				el.setAttribute('data-character-visited', '');
			});
		});
		visitedLandmarkIds.forEach(lmId => {
			document.querySelectorAll(`[data-landmark-id="${lmId}"]`).forEach(el => {
				el.setAttribute('data-character-visited', '');
			});
		});
	};

	const clearHoverHighlight = () => {
		setHoveredCharacter(null);
		document.body.removeAttribute('data-character-hovered');
		document.querySelectorAll('[data-character-visited]').forEach(el => {
			el.removeAttribute('data-character-visited');
		});
	};

	// Format chapter display: show "10 · Part 2" for sub-chapters like 10.2
	const formatChapter = (chapter: number) => {
		const base = Math.floor(chapter);
		const siblings = allMovements.filter(m => Math.floor(m.chapter) === base);
		if (siblings.length > 1) {
			const partIdx = siblings.findIndex(m => m.chapter === chapter) + 1;
			const partLabel = t.characterMarker.partOf
				.replace('{part}', String(partIdx))
				.replace('{total}', String(siblings.length));
			return `${base} · ${partLabel}`;
		}
		return String(base);
	};

	const movDescription = movTrans?.description ?? activeMovement.description;
	const needsTruncation = movDescription.length > DESCRIPTION_LIMIT;
	const displayDescription =
		needsTruncation && !showFullDescription
			? movDescription.slice(0, DESCRIPTION_LIMIT) + '...'
			: movDescription;

	// History navigation
	const canGoBack = displayIdx > 0;
	const canGoForward = historyIndex > 0;
	const isViewingHistory = historyIndex > 0;

	// Show continue button for followed character during playback
	const showContinueButton =
		isPlaying &&
		waitingForConfirmation &&
		followedCharacter === character.id &&
		!showCityChoice &&
		!isViewingHistory;

	const handleContinue = (e: React.MouseEvent) => {
		e.stopPropagation();
		e.preventDefault();

		// Check if there's a city suggestion (character entered a city)
		if (citySuggestion && mapView === 'world') {
			setShowCityChoice(true);
		} else {
			setWaitingForConfirmation(false);
			// Keep the popup open - it will auto-open for the next chapter anyway
		}
	};

	const handleEnterCity = () => {
		if (citySuggestion) {
			enterCity(citySuggestion.cityId);
			setCitySuggestion(null);
			setShowCityChoice(false);
			setWaitingForConfirmation(false);
		}
	};

	const handleStayOnWorldMap = () => {
		setCitySuggestion(null);
		setShowCityChoice(false);
		setWaitingForConfirmation(false);
	};

	return (
		<Marker
			ref={markerRef}
			position={position}
			icon={icon}
			zIndexOffset={MARKER_Z_INDEX_OFFSET}
			eventHandlers={{
				popupopen: (e: L.LeafletEvent) => {
					popupEventHandlers.popupopen(e);
					// Close non-sibling multi-part popups, then register this one
					if (isMultiPart) {
						closeNonSiblingPopups(character.id, baseChapter);
						const key = `${character.id}-${movement!.chapter}`;
						openMultiPartPopups.set(key, {
							marker: markerRef.current!,
							characterId: character.id,
							baseChapter,
						});
					}
					// On touch devices, show path highlight when popup opens
					if (isTouchDevice) applyHoverHighlight();
				},
				popupclose: () => {
					popupEventHandlers.popupclose();
					// Unregister from multi-part tracking
					if (isMultiPart && movement) {
						openMultiPartPopups.delete(`${character.id}-${movement.chapter}`);
					}
					// On touch devices, clear path highlight when popup closes
					if (isTouchDevice) clearHoverHighlight();
				},
				mouseover: () => {
					// Desktop only — on touch devices path highlighting is tied to popup open/close
					if (!isTouchDevice) applyHoverHighlight();
				},
				mouseout: () => {
					if (!isTouchDevice) clearHoverHighlight();
				},
			}}
		>
			{!isPopupOpen && (
				<Tooltip direction="top" offset={TOOLTIP_OFFSET} opacity={TOOLTIP_OPACITY}>
					{charName}
				</Tooltip>
			)}
			<Popup
				maxWidth={POPUP_MAX_WIDTH}
				autoPan={true}
				autoPanPaddingTopLeft={POPUP_AUTO_PAN_PADDING_TOP_LEFT}
				autoPanPaddingBottomRight={POPUP_AUTO_PAN_PADDING_BOTTOM_RIGHT}
				autoClose={!isMultiPart}
				closeOnClick={!isMultiPart}
			>
				<div className="popup-header">
					<span className="popup-type">
						{t.characterMarker.characterEvent}
						{isMultiPart && (
							<span className={styles.partLabel}>
								{' · '}
								{t.characterMarker.partOf
									.replace('{part}', String(partNumber))
									.replace('{total}', String(totalParts))}
							</span>
						)}
					</span>
					<h3 className="popup-title">{movTrans?.title ?? activeMovement.title}</h3>
					{allMovements.length > 1 && (
						<div className={styles.historyNav}>
							<button
								onClick={e => {
									e.stopPropagation();
									setHistoryIndex(prev => Math.min(prev + 1, allMovements.length - 1));
								}}
								disabled={!canGoBack}
								className={styles.historyButton}
							>
								{t.characterMarker.earlier}
							</button>
							<span className={styles.historyCounter}>
								{isViewingHistory
									? `${t.characterMarker.chapterAbbr} ${formatChapter(activeMovement.chapter)}`
									: t.characterMarker.current}
								{allMovements.length > 1 &&
									` (${allMovements.length - historyIndex}/${allMovements.length})`}
							</span>
							{canGoForward && (
								<button
									onClick={e => {
										e.stopPropagation();
										setHistoryIndex(prev => Math.max(prev - 1, 0));
									}}
									className={styles.historyButton}
								>
									{t.characterMarker.later}
								</button>
							)}
						</div>
					)}
				</div>
				<div className="popup-content">
					<p className="popup-description">{displayDescription}</p>
					{needsTruncation && (
						<button
							onClick={() => setShowFullDescription(!showFullDescription)}
							className="popup-read-more"
						>
							{showFullDescription ? t.characterMarker.showLess : t.characterMarker.readMore}
						</button>
					)}
					<div className="popup-metadata">
						<div className="popup-meta-item">
							<span className="popup-meta-label">{t.characterMarker.chapter}</span>
							<span className="popup-meta-value">{formatChapter(activeMovement.chapter)}</span>
						</div>
						<div className="popup-meta-item">
							<span className="popup-meta-label">{t.characterMarker.season}</span>
							<span className="popup-meta-value">{movTrans?.season ?? activeMovement.season}</span>
						</div>
						<div className="popup-meta-item">
							<span className="popup-meta-label">{t.characterMarker.year}</span>
							<span className="popup-meta-value">{movTrans?.year ?? activeMovement.year}</span>
						</div>
					</div>
					<div
						className="popup-character-badge"
						style={{ '--char-color': color } as React.CSSProperties}
					>
						<div className="popup-character-dot" />
						<div className="popup-character-info">
							<span className="popup-character-name">{charName}</span>
							<span className="popup-character-title">{characterTitle}</span>
						</div>
					</div>
					{showContinueButton && (
						<div className={styles.continueSection}>
							<span className={styles.pausedLabel}>{t.characterMarker.timelinePaused}</span>
							<button
								onClick={handleContinue}
								className={`popup-continue-button ${styles.continueButton}`}
								style={charColorVars}
							>
								{t.characterMarker.continueTimeline}
							</button>
						</div>
					)}
					{showCityChoice && citySuggestion && (
						<div className={styles.cityChoice}>
							<p className={styles.cityChoiceText}>
								{t.characterMarker.charactersEntered}{' '}
								<strong>
									{t.data.cities[citySuggestion.cityId]?.name ?? citySuggestion.cityName}
								</strong>
								. {t.characterMarker.cityChoiceDesc}
							</p>
							<div className={styles.cityChoiceButtons}>
								<button
									onClick={handleEnterCity}
									className={styles.cityActionButton}
									style={charColorVars}
								>
									{t.characterMarker.enterCity}
								</button>
								<button onClick={handleStayOnWorldMap} className={styles.secondaryButton}>
									{t.characterMarker.stayOnMap}
								</button>
							</div>
						</div>
					)}
				</div>
			</Popup>
		</Marker>
	);
};

export default CharacterMarker;
