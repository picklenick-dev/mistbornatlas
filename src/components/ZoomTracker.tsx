import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

export const ZoomTracker: React.FC = () => {
	const map = useMap();
	useEffect(() => {
		const update = () => {
			map.getContainer().style.setProperty('--map-zoom', String(map.getZoom()));
		};
		update();
		map.on('zoomend', update);
		return () => {
			map.off('zoomend', update);
		};
	}, [map]);
	return null;
};
