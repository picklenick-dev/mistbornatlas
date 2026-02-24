import React, { useMemo, useState, useRef, useEffect } from 'react';
import { Marker, Tooltip, Popup } from 'react-leaflet';
import L from 'leaflet';
import { usePopupPosition, DESCRIPTION_LIMIT } from '@/hooks';
import { useLanguage } from '@/context/LanguageContext';
import { getCityLandmarkTheme, MARKER_SIZE } from '@/utils/locationTheme';
import type { CityLandmark, CityId } from '@/types';

interface CityLandmarkMarkerProps {
	landmark: CityLandmark;
	cityId: CityId;
}

export const CityLandmarkMarker: React.FC<CityLandmarkMarkerProps> = ({ landmark, cityId }) => {
	const markerRef = useRef<L.Marker>(null);
	const [showFullDescription, setShowFullDescription] = useState(false);
	const { isPopupOpen, popupEventHandlers } = usePopupPosition();
	const { t } = useLanguage();
	const theme = getCityLandmarkTheme(landmark.type);
	const lmTrans = t.data.cityLandmarks[cityId]?.[landmark.id];
	const lmName = lmTrans?.name ?? landmark.name;
	const lmDescription = lmTrans?.description ?? landmark.description;

	useEffect(() => {
		const marker = markerRef.current;
		if (marker) {
			const el = marker.getElement();
			if (el) el.setAttribute('data-landmark-id', landmark.id);
		}
	});

	const icon = useMemo(() => {
		return L.divIcon({
			className: 'city-landmark-marker allomantic-marker',
			html: `
        <div class="city-landmark-icon allomantic-marker-inner" style="--landmark-color: ${theme.color};" data-dark-glyph="${!!theme.darkGlyph}"><img src="${theme.symbol}" alt="${theme.metal}"/></div>
      `,
			iconSize: [MARKER_SIZE, MARKER_SIZE],
			iconAnchor: [MARKER_SIZE / 2, MARKER_SIZE / 2],
			popupAnchor: [0, -MARKER_SIZE / 2],
		});
	}, [landmark.type, theme]);

	const needsTruncation = lmDescription.length > DESCRIPTION_LIMIT;
	const displayDescription =
		needsTruncation && !showFullDescription
			? lmDescription.slice(0, DESCRIPTION_LIMIT) + '...'
			: lmDescription;

	const position: L.LatLngExpression = [landmark.coords[1], landmark.coords[0]];

	return (
		<Marker ref={markerRef} position={position} icon={icon} eventHandlers={popupEventHandlers}>
			{!isPopupOpen && (
				<Tooltip direction="top" offset={[0, -14]} opacity={0.9}>
					{lmName}
				</Tooltip>
			)}
			<Popup
				maxWidth={300}
				autoPan={true}
				autoPanPaddingTopLeft={[20, 100]}
				autoPanPaddingBottomRight={[20, 20]}
			>
				<div className="popup-header">
					<span className="popup-type">
						{t.data.cityMarkerLabels[landmark.type] ?? theme.label}
					</span>
					<h3 className="popup-title">{lmName}</h3>
				</div>
				<div className="popup-content">
					<p className="popup-description">{displayDescription}</p>
					{needsTruncation && (
						<button
							onClick={() => setShowFullDescription(!showFullDescription)}
							className="popup-read-more"
						>
							{showFullDescription ? t.cityLandmark.showLess : t.cityLandmark.readMore}
						</button>
					)}
					<div className="popup-metadata">
						<div className="popup-meta-item">
							<span className="popup-meta-label">{t.cityLandmark.locationType}</span>
							<span className="popup-meta-value">
								{t.data.cityMarkerLabels[landmark.type] ?? theme.label}
							</span>
						</div>
					</div>
				</div>
			</Popup>
		</Marker>
	);
};

export default CityLandmarkMarker;
