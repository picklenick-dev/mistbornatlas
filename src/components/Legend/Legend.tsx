import React, { useState, useEffect } from 'react';
import { useMapContext } from '@/context/MapContext';
import { useLanguage } from '@/context/LanguageContext';
import { LOCATION_THEMES, CITY_LANDMARK_THEMES } from '@/utils/locationTheme';
import { InfoIcon, CloseIcon, MagnifyIcon, PersonIcon } from '@/components/icons';
import type { LocationType, CityLandmarkType } from '@/types';
import styles from './Legend.module.scss';

const WORLD_MAJOR: { type: LocationType }[] = [
	{ type: 'capital' },
	{ type: 'city' },
	{ type: 'ashmount' },
];

const WORLD_MINOR: { type: LocationType }[] = [
	{ type: 'landmark' },
	{ type: 'stronghold' },
	{ type: 'hideout' },
	{ type: 'mine' },
	{ type: 'town' },
	{ type: 'mystical' },
];

const CITY_ITEMS: { type: CityLandmarkType }[] = [
	{ type: 'gate' },
	{ type: 'keep' },
	{ type: 'palace' },
	{ type: 'district' },
	{ type: 'safehouse' },
	{ type: 'ministry' },
	{ type: 'landmark' },
	{ type: 'canal' },
	{ type: 'plaza' },
	{ type: 'shop' },
];

const GlyphSwatch: React.FC<{
	symbol: string;
	color: string;
	size?: number;
	darkGlyph?: boolean;
}> = ({ symbol, color, size, darkGlyph = false }) => (
	<div
		className={styles.glyphSwatch}
		style={
			{
				'--swatch-size': size ? `${size}px` : undefined,
				'--swatch-color': color,
			} as React.CSSProperties
		}
		data-dark-glyph={darkGlyph}
	>
		<img src={symbol} alt="" />
	</div>
);

export const Legend: React.FC = () => {
	const [isOpen, setIsOpen] = useState(() => {
		if (typeof window !== 'undefined') {
			return window.innerWidth >= 768;
		}
		return false;
	});

	const { mapView } = useMapContext();
	const { t } = useLanguage();

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 768) {
				setIsOpen(false);
			}
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<>
			<button
				className={`${styles.toggleTab} ${isOpen ? styles.hidden : ''}`}
				onClick={() => setIsOpen(true)}
				aria-label={t.legend.openLegend}
			>
				<InfoIcon />
				<span className={styles.toggleTabLabel}>{t.legend.title}</span>
			</button>

			<div className={`${styles.legend} ${isOpen ? styles.open : styles.closed}`}>
				<div className={styles.header}>
					<h3 className={styles.title}>{t.legend.title}</h3>
					<button
						className={styles.closeButton}
						onClick={() => setIsOpen(false)}
						aria-label={t.legend.closeLegend}
					>
						<CloseIcon />
					</button>
				</div>

				<div className={styles.section}>
					<div className={styles.sectionTitle}>
						{mapView === 'city' ? t.legend.cityLandmarks : t.legend.locations}
					</div>
					<div className={styles.itemList}>
						{mapView === 'city' ? (
							CITY_ITEMS.map(({ type }) => {
								const theme = CITY_LANDMARK_THEMES[type];
								return (
									<div key={type} className={styles.item}>
										<GlyphSwatch
											symbol={theme.symbol}
											color={theme.color}
											darkGlyph={theme.darkGlyph}
										/>
										<span>{t.landmarkTypes[type]}</span>
									</div>
								);
							})
						) : (
							<>
								<div className={styles.item}>
									<div className={styles.explorableSwatch}>
										<MagnifyIcon />
									</div>
									<span>{t.legend.explorableCity}</span>
								</div>

								{WORLD_MAJOR.map(({ type }) => {
									const theme = LOCATION_THEMES[type];
									return (
										<div key={type} className={styles.item}>
											<GlyphSwatch
												symbol={theme.symbol}
												color={theme.color}
												darkGlyph={theme.darkGlyph}
											/>
											<span>{t.locationTypes[type]}</span>
										</div>
									);
								})}
								<div className={styles.subSectionTitle}>{t.legend.other}</div>
								{WORLD_MINOR.map(({ type }) => {
									const theme = LOCATION_THEMES[type];
									return (
										<div key={type} className={styles.item}>
											<GlyphSwatch
												symbol={theme.symbol}
												color={theme.color}
												size={20}
												darkGlyph={theme.darkGlyph}
											/>
											<span>{t.locationTypes[type]}</span>
										</div>
									);
								})}
							</>
						)}
					</div>
				</div>

				<div className={styles.section}>
					<div className={styles.sectionTitle}>{t.legend.characters}</div>
					<div className={styles.itemList}>
						<div className={styles.item}>
							<div className={styles.portraitSwatch}>
								<PersonIcon />
							</div>
							<span>{t.legend.characterPosition}</span>
						</div>
						<div className={styles.item}>
							<div className={styles.dashedPath} />
							<span>{t.legend.travelPath}</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Legend;
