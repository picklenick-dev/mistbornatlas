import React, { useMemo } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { ISourceOptions } from '@tsparticles/engine';
import styles from './AtmosphereOverlay.module.scss';

interface AtmosphereOverlayProps {
	mapType?: 'world' | 'city';
}

export const AtmosphereOverlay: React.FC<AtmosphereOverlayProps> = React.memo(
	({ mapType = 'world' }) => {
		const [init, setInit] = React.useState(false);

		React.useEffect(() => {
			initParticlesEngine(async engine => {
				await loadSlim(engine);
			}).then(() => {
				setInit(true);
			});
		}, []);

		const ashConfig: ISourceOptions = useMemo(
			() => ({
				fpsLimit: 60,
				fullScreen: {
					enable: false,
				},
				particles: {
					number: {
						value: mapType === 'city' ? 120 : 200,
						density: {
							enable: true,
							width: 1920,
							height: 1080,
						},
					},
					color: {
						value: ['#3a3a3a', '#4a4a4a', '#5a5a5a', '#2a2a2a'],
					},
					shape: {
						type: ['circle', 'polygon'],
						polygon: {
							sides: 5,
						},
					},
					opacity: {
						value: { min: 0.5, max: 0.9 },
						animation: {
							enable: true,
							speed: 0.5,
							minimumValue: 0.3,
							sync: false,
						},
					},
					size: {
						value: { min: 2, max: 6 },
					},
					move: {
						enable: true,
						speed: { min: 1, max: 3 },
						direction: 'bottom',
						random: false,
						straight: false,
						outModes: {
							default: 'out',
							bottom: 'out',
							top: 'none',
						},
						attract: {
							enable: false,
						},
					},
					wobble: {
						enable: true,
						distance: 15,
						speed: { min: 5, max: 15 },
					},
				},
				detectRetina: true,
				interactivity: {
					detect_on: 'window',
					events: {
						onHover: {
							enable: true,
							mode: 'repulse',
							parallax: {
								enable: false,
							},
						},
						onClick: {
							enable: true,
							mode: 'repulse',
						},
					},
					modes: {
						repulse: {
							distance: 150,
							duration: 0.8,
							factor: 5,
							speed: 2,
							maxSpeed: 10,
						},
					},
				},
			}),
			[mapType]
		);

		const mistConfig: ISourceOptions = useMemo(
			() => ({
				fpsLimit: 30,
				fullScreen: {
					enable: false,
				},
				particles: {
					number: {
						value: mapType === 'city' ? 30 : 50,
						density: {
							enable: true,
							width: 1920,
							height: 1080,
						},
					},
					color: {
						value: ['#e8e8e8', '#f0f0f0', '#d8d8d8'],
					},
					shape: {
						type: 'circle',
					},
					opacity: {
						value: { min: 0.08, max: 0.15 },
						animation: {
							enable: true,
							speed: 0.3,
							minimumValue: 0.05,
							sync: false,
						},
					},
					size: {
						value: { min: 250, max: 400 },
					},
					move: {
						enable: true,
						speed: 0.5,
						direction: 'none',
						random: true,
						straight: false,
						outModes: {
							default: 'out',
						},
						path: {
							enable: true,
							options: {
								size: 5,
								draw: false,
								increment: 0.005,
							},
						},
					},
				},
				detectRetina: true,
				interactivity: {
					detect_on: 'window',
					events: {
						onHover: {
							enable: true,
							mode: 'repulse',
							parallax: {
								enable: false,
							},
						},
						onClick: {
							enable: true,
							mode: 'repulse',
						},
					},
					modes: {
						repulse: {
							distance: 250,
							duration: 1.2,
							factor: 8,
							speed: 3,
							maxSpeed: 15,
						},
					},
				},
			}),
			[mapType]
		);

		if (!init) {
			return null;
		}

		return (
			<div className={styles.atmosphereContainer}>
				{/* Mist layer behind ash */}
				<Particles id="mist-particles" className={styles.mistLayer} options={mistConfig} />
				{/* Ash layer in front */}
				<Particles id="ash-particles" className={styles.ashLayer} options={ashConfig} />
			</div>
		);
	}
);

AtmosphereOverlay.displayName = 'AtmosphereOverlay';

export default AtmosphereOverlay;
