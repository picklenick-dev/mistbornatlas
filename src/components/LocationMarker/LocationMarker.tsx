import React, { useRef, useState, useEffect } from 'react';
import { Marker, Popup, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import { useMapContext } from '@/context/MapContext';
import { useLanguage } from '@/context/LanguageContext';
import { getZoomableCities } from '@/data';
import { BOOK_COLORS } from '@/data/characterConfig';
import { usePopupPosition, DESCRIPTION_LIMIT } from '@/hooks';
import { getLocationTheme, MARKER_SIZE } from '@/utils/locationTheme';
import type { Location, CityId, BookId } from '@/types';

interface LocationMarkerProps {
	location: Location;
}

const zoomableCities = getZoomableCities();

const createLocationIcon = (
	type: string,
	isExplorable: boolean = false,
	bookColor?: string
): L.DivIcon => {
	const theme = getLocationTheme(type);
	const bookStyle = bookColor ? `--book-color: ${bookColor};` : '';
	const bookClass = bookColor ? ' book-scoped' : '';

	if (isExplorable) {
		return L.divIcon({
			className: `explorable-city-marker allomantic-marker${bookClass}`,
			iconSize: [44, 44],
			iconAnchor: [22, 22],
			popupAnchor: [0, -24],
			html: `<div class="explorable-city-icon" style="--marker-color: ${theme.color}; ${bookStyle}"><i class="fa-solid fa-magnifying-glass"></i></div>`,
		});
	}

	return L.divIcon({
		className: `allomantic-marker${bookClass}`,
		iconSize: [MARKER_SIZE, MARKER_SIZE],
		iconAnchor: [MARKER_SIZE / 2, MARKER_SIZE / 2],
		popupAnchor: [0, -MARKER_SIZE / 2],
		html: `<div class="allomantic-marker-inner" style="--marker-color: ${theme.color}; ${bookStyle}" data-dark-glyph="${!!theme.darkGlyph}"><img src="${theme.symbol}" alt="${theme.metal}"/></div>`,
	});
};

export const LocationMarker: React.FC<LocationMarkerProps> = ({ location }) => {
	const { enterCity, currentBook } = useMapContext();
	const { t } = useLanguage();
	const markerRef = useRef<L.Marker>(null);
	const [showFullDescription, setShowFullDescription] = useState(false);

	useEffect(() => {
		const marker = markerRef.current;
		if (marker) {
			const el = marker.getElement();
			if (el) el.setAttribute('data-location-id', location.id);
		}
	});

	const cityMapInfo = zoomableCities.find(c => c.locationId === location.id);
	const hasCityMap = !!cityMapInfo;

	const position: L.LatLngExpression = [location.coords[1], location.coords[0]];
	const { isPopupOpen, popupEventHandlers } = usePopupPosition();

	const locTrans = t.data.locations[location.id];
	const locName = locTrans?.name ?? location.name;
	const locDescription = locTrans?.description ?? location.description;
	const locPlacementNote = locTrans?.placementNote ?? location.placementNote;
	const needsTruncation = locDescription.length > DESCRIPTION_LIMIT;
	const displayDescription =
		needsTruncation && !showFullDescription
			? locDescription.slice(0, DESCRIPTION_LIMIT) + '...'
			: locDescription;

	const bookColor = location.books ? BOOK_COLORS[currentBook as BookId] : undefined;
	const icon = createLocationIcon(location.type, hasCityMap, bookColor);
	const theme = getLocationTheme(location.type);

	const handleEnterCity = (e: React.MouseEvent) => {
		e.stopPropagation();
		if (cityMapInfo) {
			enterCity(cityMapInfo.cityId as CityId);
		}
	};

	return (
		<Marker ref={markerRef} position={position} icon={icon} eventHandlers={popupEventHandlers}>
			{!isPopupOpen && (
				<Tooltip direction="top" offset={[0, -10]} opacity={0.9}>
					{locName}
				</Tooltip>
			)}
			<Popup
				maxWidth={300}
				autoPan={true}
				autoPanPaddingTopLeft={[20, 100]}
				autoPanPaddingBottomRight={[20, 20]}
			>
				<div className="popup-header">
					<span className="popup-type">{t.data.markerLabels[location.type] ?? theme.label}</span>
					<h3 className="popup-title">{locName}</h3>
				</div>
				<div className="popup-content">
					<p className="popup-description">{displayDescription}</p>
					{needsTruncation && (
						<button
							onClick={() => setShowFullDescription(!showFullDescription)}
							className="popup-read-more"
						>
							{showFullDescription ? t.locationMarker.showLess : t.locationMarker.readMore}
						</button>
					)}
					{locPlacementNote && <div className="popup-placement-note">{locPlacementNote}</div>}
					<div className="popup-metadata">
						<div className="popup-meta-item">
							<span className="popup-meta-label">{t.locationMarker.dominance}</span>
							<span className="popup-meta-value">
								{t.dominances[location.dominance as keyof typeof t.dominances] ??
									location.dominance}
							</span>
						</div>
					</div>
					{hasCityMap && (
						<button onClick={handleEnterCity} className="popup-explore-btn">
							<i className="fa-solid fa-magnifying-glass" aria-hidden="true" />
							<span>{t.locationMarker.exploreCity}</span>
						</button>
					)}
				</div>
			</Popup>
		</Marker>
	);
};

export default LocationMarker;
