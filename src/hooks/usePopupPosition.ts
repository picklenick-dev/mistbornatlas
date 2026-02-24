import { useState, useCallback } from 'react';
import type L from 'leaflet';

export { DESCRIPTION_LIMIT } from '@/config';

export const usePopupPosition = () => {
	const [isPopupOpen, setIsPopupOpen] = useState(false);

	const handleOpen = useCallback((_e: L.LeafletEvent) => {
		setIsPopupOpen(true);
	}, []);

	const handleClose = useCallback(() => {
		setIsPopupOpen(false);
	}, []);

	return {
		isPopupOpen,
		popupEventHandlers: { popupopen: handleOpen, popupclose: handleClose },
	};
};
