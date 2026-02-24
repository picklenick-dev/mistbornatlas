import React, { useState } from 'react';
import { useMapEvents } from 'react-leaflet';
import { isDebugMode } from '@/utils';
import styles from './DebugOverlay.module.scss';

interface DebugOverlayProps {
	mapType?: 'world' | 'city';
}

export const DebugOverlay: React.FC<DebugOverlayProps> = ({ mapType = 'world' }) => {
	const [coords, setCoords] = useState<{ x: number; y: number } | null>(null);
	const [frozenCoords, setFrozenCoords] = useState<{ x: number; y: number } | null>(null);
	const [copied, setCopied] = useState(false);

	useMapEvents({
		mousemove: e => {
			if (!isDebugMode) return;

			if (frozenCoords === null) {
				const x = Math.round(e.latlng.lng * 10) / 10;
				const y = Math.round(e.latlng.lat * 10) / 10;

				setCoords({ x, y });
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
				const x = Math.round(e.latlng.lng * 10) / 10;
				const y = Math.round(e.latlng.lat * 10) / 10;
				setFrozenCoords({ x, y });
				setCoords({ x, y });
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
