import React, { useCallback, useEffect, useState, Suspense, lazy } from 'react';
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
	CITY_MAP_IMAGES,
	CITY_MAP_BOUNDS,
	CITY_MAX_BOUNDS,
	CITY_MAP_CENTER,
	CITY_MAP_ZOOM,
	CITY_MIN_ZOOM,
	CITY_MAX_ZOOM,
} from '@/config';
import styles from './CityMapContainer.module.scss';

const AtmosphereOverlay = lazy(() =>
	import('@/components/AtmosphereOverlay').then(m => ({ default: m.AtmosphereOverlay }))
);

import 'leaflet/dist/leaflet.css';

const SetInitialView: React.FC = () => {
	const map = useMap();

	useEffect(() => {
		map.setView([50, 50], 2.5, { animate: false });
	}, [map]);

	return null;
};

export const CityMapContainer: React.FC = () => {
	const { activeCity, exitCity, controlsPanelOpen, showAtmosphere } = useMapContext();
	const { t } = useLanguage();
	const { characterPositions, characterPaths } = useMapData();
	const [isExiting, setIsExiting] = useState(false);

	const handleExit = useCallback(() => {
		setIsExiting(true);
	}, []);

	if (!activeCity) return null;

	const cityMap = getCityMapById(activeCity);
	if (!cityMap) return null;

	const mapImageUrl = CITY_MAP_IMAGES[activeCity];

	const cityCharacterPositions = characterPositions.filter(
		({ movement }) => movement?.cityId === activeCity && movement?.cityCoords
	);

	const cityCharacterIds = new Set(cityCharacterPositions.map(({ character }) => character.id));

	const cityCharacterPaths = characterPaths
		.filter(({ character }) => cityCharacterIds.has(character.id))
		.map(({ character, movements, offsetIndex, totalAtPath }) => ({
			character,
			movements: movements.filter(m => m.cityId === activeCity && m.cityCoords),
			offsetIndex,
			totalAtPath,
		}))
		.filter(({ movements }) => movements.length > 0);

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
				center={CITY_MAP_CENTER}
				zoom={CITY_MAP_ZOOM}
				minZoom={CITY_MIN_ZOOM}
				maxZoom={CITY_MAX_ZOOM}
				maxBounds={CITY_MAX_BOUNDS}
				maxBoundsViscosity={0.5}
				crs={L.CRS.Simple}
				zoomControl={true}
				attributionControl={false}
			>
				<SetInitialView />

				<ZoomTracker />

				<DebugOverlay mapType="city" />

				<ImageOverlay url={mapImageUrl} bounds={CITY_MAP_BOUNDS} />

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

				{cityMap.landmarks.map(landmark => (
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
