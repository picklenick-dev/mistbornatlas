import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useMapContext } from '@/context/MapContext';
import {
	incrementVisitCount,
	incrementChaptersViewed,
	getDonationDismissed,
	setDonationDismissed,
	getLastPromptAt,
	setLastPromptAt,
} from '@/services';
import { CoffeeIcon, CloseIcon, HeartIcon } from '@/components/icons';
import { KOFI_URL, CHAPTERS_BETWEEN_PROMPTS } from '@/config';
import styles from './DonationModal.module.scss';

export const DonationModal: React.FC = () => {
	const { t } = useLanguage();
	const { currentChapter, currentBook } = useMapContext();
	const [isOpen, setIsOpen] = useState(false);
	const hasAutoPromptedThisSession = useRef(false);
	const prevChapterRef = useRef<string | null>(null);

	useEffect(() => {
		if (getDonationDismissed()) return;
		const count = incrementVisitCount();
		if (count === 3 && !hasAutoPromptedThisSession.current) {
			const timer = setTimeout(() => {
				hasAutoPromptedThisSession.current = true;
				setLastPromptAt();
				setIsOpen(true);
			}, 2000);
			return () => clearTimeout(timer);
		}
	}, []);

	useEffect(() => {
		const key = `${currentBook}-${currentChapter}`;
		if (prevChapterRef.current === null) {
			prevChapterRef.current = key;
			return;
		}
		if (key === prevChapterRef.current) return;
		prevChapterRef.current = key;

		const total = incrementChaptersViewed();

		if (
			!getDonationDismissed() &&
			!hasAutoPromptedThisSession.current &&
			total - getLastPromptAt() >= CHAPTERS_BETWEEN_PROMPTS
		) {
			hasAutoPromptedThisSession.current = true;
			setLastPromptAt();
			setTimeout(() => setIsOpen(true), 1500);
		}
	}, [currentChapter, currentBook]);

	const handleOpen = useCallback(() => setIsOpen(true), []);
	const handleClose = useCallback(() => setIsOpen(false), []);

	const handleDontAsk = useCallback(() => {
		setDonationDismissed();
		setIsOpen(false);
	}, []);

	const handleBackdropClick = useCallback(
		(e: React.MouseEvent) => {
			if (e.target === e.currentTarget) handleClose();
		},
		[handleClose]
	);

	return (
		<>
			<button
				className={styles.donateButton}
				onClick={handleOpen}
				aria-label={t.donation.buttonLabel}
				title={t.donation.buttonLabel}
			>
				<CoffeeIcon />
				<span className={styles.donateLabel}>{t.donation.buttonLabel}</span>
			</button>

			{isOpen && (
				<div className={styles.backdrop} onClick={handleBackdropClick}>
					<div className={styles.modal} role="dialog" aria-modal="true">
						<div className={styles.modalHeader}>
							<h2 className={styles.modalTitle}>{t.donation.modalTitle}</h2>
							<button
								className={styles.closeButton}
								onClick={handleClose}
								aria-label={t.donation.close}
							>
								<CloseIcon />
							</button>
						</div>

						<div className={styles.modalContent}>
							<CoffeeIcon className={styles.coffeeIcon} />
							<p className={styles.modalDesc}>{t.donation.modalDesc}</p>

							<a
								className={styles.kofiButton}
								href={KOFI_URL}
								target="_blank"
								rel="noopener noreferrer"
							>
								<HeartIcon />
								{t.donation.modalButton}
							</a>
						</div>

						<div className={styles.modalFooter}>
							<button className={styles.dontAskButton} onClick={handleDontAsk}>
								{t.donation.modalDontAsk}
							</button>
							<button className={styles.dismissButton} onClick={handleClose}>
								{t.donation.modalDismiss}
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default DonationModal;
