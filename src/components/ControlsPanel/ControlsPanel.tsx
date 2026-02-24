import React from 'react';
import { useMapContext } from '@/context/MapContext';
import { useLanguage } from '@/context/LanguageContext';
import { CharacterFilters } from '@/components/CharacterFilters';
import { HamburgerIcon, CloseIcon, EyeIcon, EyeOffIcon, EyeIrisIcon } from '@/components/icons';
import styles from './ControlsPanel.module.scss';

export const ControlsPanel: React.FC = () => {
	const {
		showLocations,
		setShowLocations,
		showAllCharacters,
		setShowAllCharacters,
		secretHistoryMode,
		setSecretHistoryMode,
		showAtmosphere,
		setShowAtmosphere,
		controlsPanelOpen,
		setControlsPanelOpen,
		mapView,
	} = useMapContext();
	const { t } = useLanguage();

	return (
		<>
			{/* Toggle tab visible when panel is closed */}
			<button
				className={`${styles.toggleTab} ${controlsPanelOpen ? styles.hidden : ''}`}
				onClick={() => setControlsPanelOpen(true)}
				aria-label={t.controls.openPanel}
			>
				<HamburgerIcon />
				<span className={styles.toggleTabLabel}>{t.controls.label}</span>
			</button>

			<aside
				id="character-panel"
				tabIndex={-1}
				className={`${styles.panel} ${controlsPanelOpen ? styles.open : styles.closed}`}
			>
				<div className={styles.header}>
					<h2 className={styles.title}>{t.controls.title}</h2>
					<button
						className={styles.closeButton}
						onClick={() => setControlsPanelOpen(false)}
						aria-label={t.controls.closePanel}
					>
						<CloseIcon />
					</button>
				</div>

				<div className={styles.content}>
					<section className={styles.section}>
						<h3 className={styles.sectionTitle}>{t.characters.title}</h3>
						<button
							className={`${styles.overrideButton} ${showAllCharacters ? styles.active : ''}`}
							onClick={() => setShowAllCharacters(!showAllCharacters)}
							title={t.characters.showAll}
						>
							{showAllCharacters ? <EyeIcon /> : <EyeOffIcon />}
							<span>{t.characters.showAll}</span>
						</button>
						{showAllCharacters && (
							<button
								className={`${styles.secretHistoryButton} ${secretHistoryMode ? styles.active : ''}`}
								onClick={() => setSecretHistoryMode(!secretHistoryMode)}
								title={t.controls.secretHistoryTitle}
							>
								<EyeIrisIcon />
								<span>{t.controls.secretHistoryContent}</span>
							</button>
						)}
						<CharacterFilters />
					</section>

					<section className={styles.section}>
						<h3 className={styles.sectionTitle}>{t.legend.title}</h3>
						<div className={styles.toggleRow}>
							<span className={styles.toggleLabel}>{t.controls.ashAndMist}</span>
							<button
								className={`${styles.toggle} ${showAtmosphere ? styles.active : ''}`}
								onClick={() => setShowAtmosphere(!showAtmosphere)}
								role="switch"
								aria-checked={showAtmosphere}
							/>
						</div>
						{mapView === 'world' && (
							<div className={styles.toggleRow}>
								<span className={styles.toggleLabel}>{t.legend.showLocations}</span>
								<button
									className={`${styles.toggle} ${showLocations ? styles.active : ''}`}
									onClick={() => setShowLocations(!showLocations)}
									role="switch"
									aria-checked={showLocations}
								/>
							</div>
						)}
						{mapView === 'city' && (
							<div className={styles.cityNote}>{t.controls.cityLandmarksNote}</div>
						)}
					</section>
				</div>
			</aside>
		</>
	);
};

export default ControlsPanel;
