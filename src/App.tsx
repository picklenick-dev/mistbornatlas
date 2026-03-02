import React, { useState, useEffect, Suspense, lazy } from 'react';
import { MapProvider, useMapContext } from '@/context/MapContext';
import { HoverProvider } from '@/context/HoverContext';
import { useLanguage } from '@/context/LanguageContext';
import {
	LoadingScreen,
	Header,
	ControlsPanel,
	InfoPanel,
	Timeline,
	Legend,
	MapContainer,
	CityPrompt,
} from '@/components';
import styles from './App.module.scss';
import { MIN_DISPLAY_MS } from '@/config';

const CityMapContainer = lazy(() =>
	import('@/components/CityMapContainer').then(m => ({ default: m.CityMapContainer }))
);
const AboutModal = lazy(() =>
	import('@/components/AboutModal').then(m => ({ default: m.AboutModal }))
);
const DonationModal = lazy(() =>
	import('@/components/DonationModal').then(m => ({ default: m.DonationModal }))
);
const WelcomeModal = lazy(() =>
	import('@/components/WelcomeModal').then(m => ({ default: m.WelcomeModal }))
);

// Map view switcher component (needs to be inside MapProvider)
const MapViewSwitcher: React.FC = () => {
	const { mapView } = useMapContext();

	return mapView === 'city' ? (
		<Suspense fallback={null}>
			<CityMapContainer />
		</Suspense>
	) : (
		<MapContainer />
	);
};

const SkipLinks: React.FC = () => {
	const { t } = useLanguage();
	return (
		<nav className="skip-links" aria-label={t.skipLinks.nav}>
			<a className="skip-link" href="#site-header">
				{t.skipLinks.toHeader}
			</a>
			<a className="skip-link" href="#map-main">
				{t.skipLinks.toMap}
			</a>
			<a className="skip-link" href="#character-panel">
				{t.skipLinks.toCharacterMenu}
			</a>
			<a className="skip-link" href="#timeline-section">
				{t.skipLinks.toTimeline}
			</a>
			<a className="skip-link" href="#site-footer">
				{t.skipLinks.toAttribution}
			</a>
		</nav>
	);
};

const App: React.FC = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [revealed, setRevealed] = useState(false);

	useEffect(() => {
		// Ensure the loading screen is shown for at least a few seconds.

		const timer = setTimeout(() => {
			setIsLoading(false);
			// Trigger the map reveal animation one frame after the fade starts
			requestAnimationFrame(() => setRevealed(true));
		}, MIN_DISPLAY_MS);

		return () => clearTimeout(timer);
	}, []);

	return (
		<MapProvider>
			<HoverProvider>
				<div className={styles.app}>
					<SkipLinks />

					<LoadingScreen visible={isLoading} />

					<div className={`${styles.mapReveal} ${revealed ? styles.revealed : ''}`}>
						<Header />
						<main id="map-main" tabIndex={-1}>
							<MapViewSwitcher />
						</main>
						<ControlsPanel />
						<InfoPanel />
						<Legend />
						<Timeline />
						<CityPrompt />
						<footer id="site-footer" tabIndex={-1}>
							<Suspense fallback={null}>
								<AboutModal />
							</Suspense>
							<Suspense fallback={null}>
								<DonationModal />
							</Suspense>
							<Suspense fallback={null}>
								<WelcomeModal />
							</Suspense>
						</footer>
					</div>
				</div>
			</HoverProvider>
		</MapProvider>
	);
};

export default App;
