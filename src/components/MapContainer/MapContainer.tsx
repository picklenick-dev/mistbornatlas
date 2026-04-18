import React, { Suspense, lazy } from 'react';
import { MapContainer as LeafletMapContainer, ImageOverlay } from 'react-leaflet';
import L from 'leaflet';
import { useMapData } from '@/hooks';
import { useMapContext } from '@/context/MapContext';
import { useLanguage } from '@/context/LanguageContext';
import { isDebugMode } from '@/utils';
import { LocationMarker } from '@/components/LocationMarker';
import { CharacterMarker } from '@/components/CharacterMarker';
import { CharacterPath } from '@/components/CharacterPath';
import { DebugOverlay } from '@/components/DebugOverlay';
import { ZoomTracker } from '@/components/ZoomTracker';
import {
	getLocalizedMapUrl,
	MAP_BOUNDS,
	MAP_MAX_BOUNDS,
	MAP_CENTER_FIRST_VISIT,
	MAP_CENTER_DEFAULT,
	MAP_ZOOM,
	MIN_ZOOM,
	MAX_ZOOM,
} from '@/config';
import styles from './MapContainer.module.scss';

const AtmosphereOverlay = lazy(() =>
	import('@/components/AtmosphereOverlay').then(m => ({ default: m.AtmosphereOverlay }))
);

import 'leaflet/dist/leaflet.css';

const isFirstVisit = typeof window !== 'undefined' && !localStorage.getItem('mistborn-map-state');

// Luthadel as focus
const MAP_CENTER: L.LatLngExpression = isFirstVisit ? MAP_CENTER_FIRST_VISIT : MAP_CENTER_DEFAULT;

export const MapContainer: React.FC = () => {
	const { visibleLocations, characterPositions, characterPaths } = useMapData();
	const { controlsPanelOpen, showAtmosphere, isEnteringCity, commitEnterCity } = useMapContext();
	const { language } = useLanguage();

	const mapImageUrl = getLocalizedMapUrl(language);

	return (
		<div
			className={`${styles.mapWrapper} ${isEnteringCity ? styles.zoomingIntoCity : ''}`}
			data-controls-open={controlsPanelOpen}
			data-dbg={isDebugMode}
			onAnimationEnd={e => {
				if (e.animationName.includes('worldZoomIntoCity')) commitEnterCity();
			}}
		>
			{showAtmosphere && (
				<Suspense fallback={null}>
					<AtmosphereOverlay mapType="world" />
				</Suspense>
			)}

			<LeafletMapContainer
				className={styles.map}
				center={MAP_CENTER}
				zoom={MAP_ZOOM}
				minZoom={MIN_ZOOM}
				maxZoom={MAX_ZOOM}
				maxBounds={MAP_MAX_BOUNDS}
				maxBoundsViscosity={0.5}
				crs={L.CRS.Simple}
				zoomControl={true}
				attributionControl={false}
			>
				<ImageOverlay url={mapImageUrl} bounds={MAP_BOUNDS} />

				<ZoomTracker />

				<DebugOverlay mapType="world" />

				{/* Rendered first so markers appear on top */}
				{characterPaths.map(({ character, movements, offsetIndex, totalAtPath }) => (
					<CharacterPath
						key={character.id}
						character={character}
						movements={movements}
						offsetIndex={offsetIndex}
						totalAtPath={totalAtPath}
					/>
				))}

				{visibleLocations.map(location => (
					<LocationMarker key={location.id} location={location} />
				))}

				{characterPositions.map(
					({ character, movement, coords, displayCoords, positionIndex }) =>
						coords && (
							<CharacterMarker
								key={`${character.id}-${positionIndex}`}
								character={character}
								movement={movement}
								displayCoords={displayCoords}
								positionIndex={positionIndex}
							/>
						)
				)}
			</LeafletMapContainer>
		</div>
	);
};

export default MapContainer;
