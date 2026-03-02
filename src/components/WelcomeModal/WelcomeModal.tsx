import React, { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useMapContext } from '@/context/MapContext';
import { WELCOME_SEEN_KEY } from '@/config';
import { BookOpenIcon, CloseIcon } from '@/components/icons';
import styles from './WelcomeModal.module.scss';

export const WelcomeModal: React.FC = () => {
	const { t } = useLanguage();
	const { setHideMovementSpoilers } = useMapContext();
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		try {
			if (!localStorage.getItem(WELCOME_SEEN_KEY)) {
				const timer = setTimeout(() => setIsOpen(true), 1200);
				return () => clearTimeout(timer);
			}
		} catch {
			// localStorage unavailable
		}
	}, []);

	const dismiss = useCallback(() => {
		try {
			localStorage.setItem(WELCOME_SEEN_KEY, '1');
		} catch {
			// silently fail
		}
		setIsOpen(false);
	}, []);

	const handleEnable = useCallback(() => {
		setHideMovementSpoilers(true);
		dismiss();
	}, [setHideMovementSpoilers, dismiss]);

	const handleSkip = useCallback(() => {
		setHideMovementSpoilers(false);
		dismiss();
	}, [setHideMovementSpoilers, dismiss]);

	const handleBackdropClick = useCallback(
		(e: React.MouseEvent) => {
			if (e.target === e.currentTarget) handleSkip();
		},
		[handleSkip]
	);

	if (!isOpen) return null;

	return (
		<div className={styles.backdrop} onClick={handleBackdropClick}>
			<div className={styles.modal} role="dialog" aria-modal="true">
				<div className={styles.header}>
					<h2 className={styles.title}>{t.welcome.title}</h2>
					<button
						className={styles.closeButton}
						onClick={handleSkip}
						aria-label={t.donation.close}
					>
						<CloseIcon />
					</button>
				</div>

				<div className={styles.content}>
					<div className={styles.iconWrapper}>
						<BookOpenIcon />
					</div>
					<p className={styles.description}>{t.welcome.description}</p>

					<ul className={styles.features}>
						<li>{t.welcome.featureMovements}</li>
						<li>{t.welcome.featureTitles}</li>
						<li>{t.welcome.featureSummaries}</li>
					</ul>

					<div className={styles.actions}>
						<button className={styles.enableButton} onClick={handleEnable}>
							<BookOpenIcon />
							{t.welcome.enableButton}
						</button>
						<button className={styles.skipButton} onClick={handleSkip}>
							{t.welcome.skipButton}
						</button>
					</div>
					<p className={styles.hint}>{t.welcome.hint}</p>
				</div>
			</div>
		</div>
	);
};

export default WelcomeModal;
