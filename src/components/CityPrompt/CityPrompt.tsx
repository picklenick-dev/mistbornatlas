import React, { useMemo, useState, useEffect, useRef } from 'react';
import { useMapContext } from '@/context/MapContext';
import { useLanguage } from '@/context/LanguageContext';
import { useMapData } from '@/hooks';
import { hasCharacterDebuted } from '@/utils';
import { hasCityPromptBeenSeen, setCityPromptSeen } from '@/services/storage';
import styles from './CityPrompt.module.scss';

/**
 * Floating prompt that appears in two scenarios:
 * 1. On world map: when characters enter a city → offer to enter city
 * 2. In city view: when characters are on the world map → offer to return
 *
 * Hides when the CharacterMarker popup is handling it.
 */
export const CityPrompt: React.FC = () => {
	const {
		citySuggestion,
		setCitySuggestion,
		enterCity,
		exitCity,
		waitingForConfirmation,
		mapView,
		activeCity,
		currentBook,
		currentChapter,
		isPlaying,
		setIsPlaying,
	} = useMapContext();
	const { t } = useLanguage();
	const { characterPositions } = useMapData();

	const debutedPositions = useMemo(() => {
		return characterPositions.filter(({ character, movement }) => {
			if (!movement) return false;
			// Exclude spoiler-placed characters whose movement is in the future
			if (movement.chapter > currentChapter) return false;
			return hasCharacterDebuted(character, currentBook, currentChapter);
		});
	}, [characterPositions, currentBook, currentChapter]);

	const worldMapCharacters = useMemo(() => {
		if (mapView !== 'city' || !activeCity) return [];
		return debutedPositions
			.filter(({ movement }) => {
				if (!movement) return false;
				return movement.cityId !== activeCity;
			})
			.map(({ character }) => t.data.characters[character.id]?.name ?? character.name);
	}, [debutedPositions, mapView, activeCity, t]);

	const cityCharacters = useMemo(() => {
		if (!citySuggestion || mapView === 'city') return [];
		return debutedPositions
			.filter(({ movement }) => movement?.cityId === citySuggestion.cityId && movement?.cityCoords)
			.map(({ character }) => t.data.characters[character.id]?.name ?? character.name);
	}, [debutedPositions, citySuggestion, mapView, t]);

	const showWorldMapPrompt = mapView === 'city' && worldMapCharacters.length > 0;
	const showCityPrompt =
		citySuggestion && mapView !== 'city' && !waitingForConfirmation && cityCharacters.length > 0;

	const [firstTimePaused, setFirstTimePaused] = useState(false);
	const hasAppliedFirstPause = useRef(false);
	const isPlayingRef = useRef(isPlaying);
	isPlayingRef.current = isPlaying;

	useEffect(() => {
		if (showCityPrompt && !hasCityPromptBeenSeen() && !hasAppliedFirstPause.current) {
			hasAppliedFirstPause.current = true;
			if (isPlayingRef.current) {
				setIsPlaying(false);
				setFirstTimePaused(true);
			}
			setCityPromptSeen();
		}
	}, [showCityPrompt, setIsPlaying]);

	useEffect(() => {
		if (!showCityPrompt && firstTimePaused) {
			setFirstTimePaused(false);
		}
	}, [showCityPrompt, firstTimePaused]);

	if (!showWorldMapPrompt && !showCityPrompt) return null;

	if (showWorldMapPrompt) {
		return (
			<div className={styles.cityPrompt}>
				<span className={styles.message}>
					<strong>{worldMapCharacters.join(', ')}</strong>{' '}
					{worldMapCharacters.length === 1 ? t.cityPrompt.is : t.cityPrompt.are}{' '}
					{t.cityPrompt.onWorldMap}
				</span>
				<div className={styles.actions}>
					<button className={styles.enterButton} onClick={exitCity}>
						{t.cityPrompt.worldMap}
					</button>
				</div>
			</div>
		);
	}

	if (showCityPrompt && citySuggestion) {
		const handleEnterCity = () => {
			enterCity(citySuggestion.cityId);
			setCitySuggestion(null);
		};

		const handleDismiss = () => {
			setCitySuggestion(null);
		};

		return (
			<div className={styles.cityPrompt}>
				{firstTimePaused && (
					<span className={styles.pausedIndicator}>{t.cityPrompt.timelinePaused}</span>
				)}
				<span className={styles.message}>
					<strong>{cityCharacters.join(', ')}</strong>{' '}
					{cityCharacters.length === 1 ? t.cityPrompt.has : t.cityPrompt.have}{' '}
					{t.cityPrompt.enteredCity}{' '}
					<strong>{t.data.cities[citySuggestion.cityId]?.name ?? citySuggestion.cityName}</strong>.{' '}
					{t.cityPrompt.viewCityMap}
				</span>
				<div className={styles.actions}>
					<button className={styles.enterButton} onClick={handleEnterCity}>
						{t.cityPrompt.enterCity}
					</button>
					<button className={styles.dismissButton} onClick={handleDismiss}>
						{t.cityPrompt.dismiss}
					</button>
				</div>
			</div>
		);
	}

	return null;
};

export default CityPrompt;
