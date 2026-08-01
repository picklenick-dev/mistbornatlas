import React, { useState } from 'react';
import { useMapEvents } from 'react-leaflet';
import { isDebugMode } from '@/utils';
import { getCityCoordScale } from '@/config';
import type { CityId } from '@/types';
import styles from './DebugOverlay.module.scss';

interface DebugOverlayProps {
	mapType?: 'world' | 'city';
	cityId?: CityId;
}

export const DebugOverlay: React.FC<DebugOverlayProps> = ({ mapType = 'world', cityId }) => {
	const [coords, setCoords] = useState<{ x: number; y: number } | null>(null);
	const [frozenCoords, setFrozenCoords] = useState<{ x: number; y: number } | null>(null);
	const [copied, setCopied] = useState(false);

	/** Reverse-scale Leaflet coords back to the data's [0-100]² normalised space. */
	const toDataCoords = (lng: number, lat: number): { x: number; y: number } => {
		if (mapType === 'city' && cityId) {
			const [xScale, yScale] = getCityCoordScale(cityId);
			return {
				x: Math.round((lng / xScale) * 10) / 10,
				y: Math.round((lat / yScale) * 10) / 10,
			};
		}
		return {
			x: Math.round(lng * 10) / 10,
			y: Math.round(lat * 10) / 10,
		};
	};

	useMapEvents({
		mousemove: e => {
			if (!isDebugMode) return;

			if (frozenCoords === null) {
				setCoords(toDataCoords(e.latlng.lng, e.latlng.lat));
			}
		},
		mouseout: () => {
			if (isDebugMode && frozenCoords === null) {
				setCoords(null);
			}
		},
		click: e => {
			if (!isDebugMode) return;

			if (frozenCoords !== null) return;

			const mouseEvent = e.originalEvent as MouseEvent;

			if (mouseEvent.button === 0) {
				e.originalEvent.preventDefault();
				const dataCoords = toDataCoords(e.latlng.lng, e.latlng.lat);
				setFrozenCoords(dataCoords);
				setCoords(dataCoords);
			}
		},
		contextmenu: e => {
			if (!isDebugMode) return;

			e.originalEvent.preventDefault();
			setFrozenCoords(null);
		},
	});

	const copyToClipboard = (e: React.MouseEvent) => {
		e.stopPropagation();
		e.preventDefault();

		const coordsToCopy = frozenCoords !== null ? frozenCoords : coords;
		if (!coordsToCopy) return;

		const text = `[${coordsToCopy.x}, ${coordsToCopy.y}]`;
		navigator.clipboard.writeText(text).then(() => {
			setCopied(true);
			setFrozenCoords(null);
			setTimeout(() => setCopied(false), 1500);
		});
	};

	if (!isDebugMode) return null;

	const displayCoords = frozenCoords || coords;

	return (
		<>
			<style>{`
        .leaflet-container {
          cursor: crosshair !important;
        }
      `}</style>

			{/* Coordinate display */}
			{displayCoords && (
				<div
					className={styles.debugOverlay}
					onClick={e => e.stopPropagation()}
					onMouseDown={e => e.stopPropagation()}
					onContextMenu={e => e.stopPropagation()}
				>
					<div className={styles.debugTitle}>
						{mapType === 'city' ? 'City Map' : 'World Map'} Coordinates{' '}
						{frozenCoords && <span className={styles.frozenBadge}>FROZEN</span>}
					</div>
					<div className={styles.debugCoords}>
						<span className={styles.debugLabel}>X:</span>
						<span className={styles.debugValue}>{displayCoords.x}</span>
					</div>
					<div className={styles.debugCoords}>
						<span className={styles.debugLabel}>Y:</span>
						<span className={styles.debugValue}>{displayCoords.y}</span>
					</div>
					<div
						className={styles.debugFormat}
						onClick={copyToClipboard}
						onMouseDown={e => e.stopPropagation()}
						title="Click to copy"
					>
						{copied ? '✓ Copied!' : `[${displayCoords.x}, ${displayCoords.y}]`}
					</div>
					<div className={styles.debugHint}>
						{copied
							? 'Paste into locations.json'
							: frozenCoords
								? 'Right-click to unfreeze'
								: 'Left-click to freeze position'}
					</div>
				</div>
			)}
		</>
	);
};

export default DebugOverlay;
