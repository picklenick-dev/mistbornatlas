import React from 'react';
import { useMapContext } from '@/context/MapContext';
import { useLanguage } from '@/context/LanguageContext';
import { CloseIcon } from '@/components/icons';
import styles from './InfoPanel.module.scss';

export const InfoPanel: React.FC = () => {
	const { selectedItem, setSelectedItem } = useMapContext();
	const { t } = useLanguage();

	if (!selectedItem) return null;

	const handleClose = () => setSelectedItem(null);

	if (selectedItem.type === 'cityLandmark') {
		const { data, cityId } = selectedItem;

		return (
			<>
				<div className={styles.backdrop} onClick={handleClose} />
				<aside className={styles.panel}>
					<div className={styles.header}>
						<div>
							<span className={styles.type}>
								{t.landmarkTypes[data.type as keyof typeof t.landmarkTypes] || data.type} • {cityId}
							</span>
							<h2 className={styles.title}>{data.name}</h2>
						</div>
						<button
							className={styles.closeButton}
							onClick={handleClose}
							aria-label={t.infoPanel.close}
						>
							<CloseIcon />
						</button>
					</div>
					<div className={styles.content}>
						<p className={styles.description}>{data.description}</p>
						<div className={styles.metadata}>
							<div className={styles.metaItem}>
								<span className={styles.metaLabel}>{t.infoPanel.locationType}</span>
								<span className={styles.metaValue}>
									{t.landmarkTypes[data.type as keyof typeof t.landmarkTypes] || data.type}
								</span>
							</div>
							<div className={styles.metaItem}>
								<span className={styles.metaLabel}>{t.infoPanel.cityPosition}</span>
								<span className={styles.metaValue}>
									{data.coords[0].toFixed(0)}%, {data.coords[1].toFixed(0)}%
								</span>
							</div>
						</div>
					</div>
				</aside>
			</>
		);
	}

	return null;
};

export default InfoPanel;
