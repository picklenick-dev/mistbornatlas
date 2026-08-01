import React, { useCallback, useEffect, useMemo, useState, Suspense, lazy } from 'react';
import { MapContainer as LeafletMapContainer, ImageOverlay, useMap } from 'react-leaflet';
import L from 'leaflet';
import { useMapContext } from '@/context/MapContext';
import { useLanguage } from '@/context/LanguageContext';
import { useMapData } from '@/hooks';
import { isDebugMode } from '@/utils';
import { getCityMapById } from '@/data';
import { CityLandmarkMarker } from '@/components/CityLandmarkMarker';
import { CharacterMarker } from '@/components/CharacterMarker';
import { CharacterPath } from '@/components/CharacterPath';
import { DebugOverlay } from '@/components/DebugOverlay';
import { ZoomTracker } from '@/components/ZoomTracker';
import { MapFoldIcon } from '@/components/icons';
import {
	getLocalizedCityMapUrl,
	getCityMapBounds,
	getCityMaxBounds,
	getCityMapCenter,
	getCityCoordScale,
	CITY_MAP_ZOOM,
	CITY_MIN_ZOOM,
	CITY_MAX_ZOOM,
} from '@/config';
import type { CityId } from '@/types';
import styles from './CityMapContainer.module.scss';

const AtmosphereOverlay = lazy(() =>
	import('@/components/AtmosphereOverlay').then(m => ({ default: m.AtmosphereOverlay }))
);

import 'leaflet/dist/leaflet.css';

const SetInitialView: React.FC<{ cityId: CityId }> = ({ cityId }) => {
	const map = useMap();
	const center = getCityMapCenter(cityId);

	useEffect(() => {
		map.setView(center, 2.5, { animate: false });
	}, [map, center]);

	return null;
};

export const CityMapContainer: React.FC = () => {
	const {
		activeCity,
		exitCity,
		controlsPanelOpen,
		showAtmosphere,
		currentBook,
		currentChapter,
		hideMovementSpoilers,
	} = useMapContext();
	const { t, language } = useLanguage();
	const { characterPositions, characterPaths } = useMapData();
	const [isExiting, setIsExiting] = useState(false);

	const handleExit = useCallback(() => {
		setIsExiting(true);
	}, []);

	if (!activeCity) return null;

	const cityMap = getCityMapById(activeCity);
	if (!cityMap) return null;

	const mapImageUrl = getLocalizedCityMapUrl(activeCity, language);
	const coordScale = getCityCoordScale(activeCity);

	/** Scale a data coordinate [x, y] to match the image's native aspect ratio. */
	const scaleCoords = useCallback(
		(coords: [number, number]): [number, number] => [
			coords[0] * coordScale[0],
			coords[1] * coordScale[1],
		],
		[coordScale]
	);

	// Filter landmarks by books (visibility). Book-level gates always respected;
	// chapter-level gates only enforced when read-along is ON.
	// Also scale landmark coordinates to match native image aspect ratio.
	const visibleLandmarks = useMemo(
		() =>
			cityMap.landmarks
				.filter(landmark => {
					if (!landmark.books) return true;
					return landmark.books.some(entry => {
						if (typeof entry === 'string') return entry === currentBook;
						if (entry.book !== currentBook) return false;
						if (!hideMovementSpoilers) return true;
						return currentChapter >= entry.chapter;
					});
				})
				.map(landmark => ({
					...landmark,
					coords: scaleCoords(landmark.coords),
				})),
		[cityMap.landmarks, currentBook, currentChapter, hideMovementSpoilers, scaleCoords]
	);

	const cityCharacterPositions = useMemo(
		() =>
			characterPositions
				.filter(
					({ movement }) => movement?.cityId === activeCity && movement?.cityCoords
				)
				.map(pos => ({
					...pos,
					movement: pos.movement
						? {
								...pos.movement,
								cityCoords: pos.movement.cityCoords
									? scaleCoords(pos.movement.cityCoords)
									: undefined,
							}
						: null,
					displayCityCoords: pos.displayCityCoords
						? scaleCoords(pos.displayCityCoords)
						: null,
				})),
		[characterPositions, activeCity, scaleCoords]
	);

	const cityCharacterIds = new Set(cityCharacterPositions.map(({ character }) => character.id));

	const cityCharacterPaths = useMemo(
		() =>
			characterPaths
				.filter(({ character }) => cityCharacterIds.has(character.id))
				.map(({ character, movements, offsetIndex, totalAtPath }) => ({
					character,
					movements: movements
						.filter(m => m.cityId === activeCity && m.cityCoords)
						.map(m => ({
							...m,
							cityCoords: m.cityCoords ? scaleCoords(m.cityCoords) : undefined,
						})),
					offsetIndex,
					totalAtPath,
				}))
				.filter(({ movements }) => movements.length > 0),
		[characterPaths, cityCharacterIds, activeCity, scaleCoords]
	);

	return (
		<div
			className={`${styles.cityMapWrapper} ${isExiting ? styles.cityZoomingOut : ''}`}
			data-controls-open={controlsPanelOpen}
			onAnimationEnd={e => {
				if (e.animationName.includes('cityZoomOut')) exitCity();
			}}
		>
			{showAtmosphere && (
				<Suspense fallback={null}>
					<AtmosphereOverlay mapType="city" />
				</Suspense>
			)}

			{/* Back button hidden in debug mode */}
			{!isDebugMode && (
				<button
					className={styles.backButton}
					onClick={handleExit}
					aria-label={t.cityMap.returnToWorldMap}
				>
					<span className={styles.backIcon}>←</span>
					<span className={styles.backText}>{t.cityMap.worldMap}</span>
				</button>
			)}

			<div className={styles.cityHeader}>
				<h2>{t.data.cities[activeCity]?.name ?? cityMap.name}</h2>
			</div>

			{!isDebugMode && (
				<button
					className={styles.centerReturnButton}
					onClick={handleExit}
					aria-label={t.cityMap.returnToWorldMap}
				>
					<MapFoldIcon className={styles.centerReturnIcon} />
					<span className={styles.centerReturnText}>{t.cityMap.returnToWorldMap}</span>
				</button>
			)}

			<LeafletMapContainer
				className={styles.cityMap}
				center={getCityMapCenter(activeCity)}
				zoom={CITY_MAP_ZOOM}
				minZoom={CITY_MIN_ZOOM}
				maxZoom={CITY_MAX_ZOOM}
				maxBounds={getCityMaxBounds(activeCity)}
				maxBoundsViscosity={0.5}
				crs={L.CRS.Simple}
				zoomControl={true}
				attributionControl={false}
			>
				<SetInitialView cityId={activeCity} />

				<ZoomTracker />

				<DebugOverlay mapType="city" />

				<ImageOverlay url={mapImageUrl} bounds={getCityMapBounds(activeCity)} />

				{cityCharacterPaths.map(({ character, movements, offsetIndex, totalAtPath }) => (
					<CharacterPath
						key={`city-path-${character.id}`}
						character={character}
						movements={movements}
						useCityCoords
						offsetIndex={offsetIndex}
						totalAtPath={totalAtPath}
					/>
				))}

				{visibleLandmarks.map(landmark => (
					<CityLandmarkMarker key={landmark.id} landmark={landmark} cityId={activeCity} />
				))}

				{cityCharacterPositions.map(({ character, movement, displayCityCoords, positionIndex }) => (
					<CharacterMarker
						key={`city-char-${character.id}-${positionIndex}`}
						character={character}
						movement={movement}
						useCityCoords
						displayCoords={displayCityCoords}
						positionIndex={positionIndex}
					/>
				))}
			</LeafletMapContainer>
		</div>
	);
};

export default CityMapContainer;
