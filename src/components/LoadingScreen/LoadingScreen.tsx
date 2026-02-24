import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ASH_COUNT } from '@/config';
import styles from './LoadingScreen.module.scss';

interface LoadingScreenProps {
	visible: boolean;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ visible }) => {
	const { t } = useLanguage();
	const [progress, setProgress] = useState(0);
	const rafRef = useRef<number | null>(null);
	const startRef = useRef<number>(0);

	useEffect(() => {
		if (!visible) return;
		startRef.current = performance.now();

		const duration = 1600; // ms
		const tick = (now: number) => {
			const elapsed = now - startRef.current;
			const t = Math.min(elapsed / duration, 1);

			const eased = 1 - Math.pow(1 - t, 3);
			setProgress(Math.round(eased * 100));
			if (t < 1) {
				rafRef.current = requestAnimationFrame(tick);
			}
		};
		rafRef.current = requestAnimationFrame(tick);

		return () => {
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
		};
	}, [visible]);

	return (
		<div className={`${styles.loadingScreen} ${!visible ? styles.hidden : ''}`}>
			<div className={styles.ashContainer} aria-hidden>
				{Array.from({ length: ASH_COUNT }).map((_, i) => (
					<span key={i} className={styles.ash} />
				))}
			</div>

			<div className={styles.mistContainer} aria-hidden>
				{Array.from({ length: 16 }).map((_, i) => (
					<div key={i} className={styles.mistParticle} />
				))}
			</div>

			<div className={styles.content}>
				<h1 className={styles.title}>{t.loading.title}</h1>
				<p className={styles.subtitle}>{t.books.tfe}</p>

				<div className={styles.progressTrack}>
					<div className={styles.progressFill} style={{ width: `${progress}%` }} />
					<div className={styles.progressGlow} style={{ left: `${progress}%` }} />
				</div>

				<p className={styles.loadingText}>{t.loading.subtitle}</p>
			</div>
		</div>
	);
};

export default LoadingScreen;
