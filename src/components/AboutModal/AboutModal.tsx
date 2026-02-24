import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { APP_VERSION, CHARACTER_COLORS, UNIQUE_SYMBOL_METALS, PORTRAIT_ATTRIBUTIONS } from '@/config';
import { InfoIcon, CloseIcon, WarningIcon } from '@/components/icons';
import styles from './AboutModal.module.scss';

export const AboutModal: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { t } = useLanguage();

	const handleOpen = () => setIsOpen(true);
	const handleClose = () => setIsOpen(false);

	const handleBackdropClick = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget) {
			handleClose();
		}
	};

	return (
		<>
			<button
				className={styles.aboutButton}
				onClick={handleOpen}
				aria-label={t.about.ariaLabel}
				title={t.about.title}
			>
				<InfoIcon />
				<span className={styles.aboutLabel}>{t.about.buttonLabel}</span>
				<span className={styles.aboutSublabel}>v{APP_VERSION}</span>
			</button>

			{isOpen && (
				<div className={styles.backdrop} onClick={handleBackdropClick}>
					<div className={styles.modal} role="dialog" aria-modal="true">
						<div className={styles.header}>
							<h2 className={styles.title}>
								{t.about.modalTitle}
								<span className={styles.versionBadge}>v{APP_VERSION}</span>
							</h2>
							<button
								className={styles.closeButton}
								onClick={handleClose}
								aria-label={t.about.close}
							>
								<CloseIcon />
							</button>
						</div>

						<div className={styles.content}>
							<section className={styles.section}>
								<h3 className={styles.sectionTitle}>
									<WarningIcon className={styles.warningIcon} />
									{t.about.disclaimerTitle}
								</h3>
								<div className={styles.disclaimer}>
									<p>
										<strong>{t.about.disclaimerBadge}</strong>
									</p>
									<p>{t.about.disclaimerIntro}</p>
									<ul>
										<li>{t.about.disclaimerBranderson}</li>
										<li>{t.about.disclaimerDragonsteel}</li>
										<li>{t.about.disclaimerTor}</li>
										<li>{t.about.disclaimerIsaac}</li>
									</ul>
									<p>{t.about.disclaimerOutro}</p>
								</div>
							</section>

							<section className={styles.section}>
								<h3 className={styles.sectionTitle}>{t.about.roadmapTitle}</h3>
								<ul className={styles.roadmapList}>
									<li className={styles.roadmapCurrent}>
										<strong>v0.7.0</strong> — {t.about.roadmapCurrent}
									</li>
									<li>
										<strong>v0.8.0</strong> — {t.about.roadmap080}
									</li>
									<li>
										<strong>v0.9.0</strong> — {t.about.roadmap090}
									</li>
									<li>
										<strong>v1.0.0</strong> — {t.about.roadmap100}
									</li>
								</ul>
							</section>

							<section className={styles.section}>
								<h3 className={styles.sectionTitle}>{t.about.mapAttributionTitle}</h3>
								<p>
									{t.about.mapAttributionDesc.split('Coppermind Wiki')[0]}
									<a
										href="https://coppermind.net/wiki/File:Final_Empire_Map.jpg"
										target="_blank"
										rel="noopener noreferrer"
									>
										Coppermind Wiki
									</a>
									.
								</p>
								<ul className={styles.attributionList}>
									<li>
										<strong>{t.about.artistLabel}</strong> {t.about.mapArtist}
									</li>
									<li>
										<strong>{t.about.sourceLabel}</strong> {t.about.mapSource}
									</li>
									<li>
										<strong>{t.about.originalWorkLabel}</strong> {t.about.mapOriginalWork}
									</li>
								</ul>
								<p className={styles.note}>{t.about.mapNote}</p>
							</section>

							<section className={styles.section}>
								<h3 className={styles.sectionTitle}>{t.about.portraitsTitle}</h3>
								<p>
									{t.about.portraitsDesc.split('Coppermind Wiki')[0]}
									<a href="https://coppermind.net" target="_blank" rel="noopener noreferrer">
										Coppermind Wiki
									</a>{' '}
									under
									<a
										href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
										target="_blank"
										rel="noopener noreferrer"
									>
										{' '}
										CC BY-NC-ND 4.0
									</a>
									.
								</p>
								<ul className={styles.portraitList}>
									{PORTRAIT_ATTRIBUTIONS.map((p, i) => (
										<li key={`${p.characterId}-${i}`}>
											<span
												className={styles.portraitIcon}
												style={{ borderColor: CHARACTER_COLORS[p.characterId] }}
											>
												<img src={p.image} alt={p.alt} />
											</span>
											<span>
												<strong>{(t.about as Record<string, string>)[p.labelKey] ?? p.alt}</strong>{' '}
												—{' '}
												<a href={p.artistUrl} target="_blank" rel="noopener noreferrer">
													{p.artistName}
												</a>
											</span>
										</li>
									))}
								</ul>
							</section>

							<section className={styles.section}>
								<h3 className={styles.sectionTitle}>{t.about.symbolsTitle}</h3>
								<p>
									{t.about.symbolsDesc.split('Isaac Stewart')[0]}
									<a
										href="https://coppermind.net/wiki/Isaac_Stewart"
										target="_blank"
										rel="noopener noreferrer"
									>
										Isaac Stewart
									</a>
									,{t.about.symbolsDesc.split('Isaac Stewart')[1]?.split('Steel Alphabet')[0]}
									<a
										href="https://coppermind.net/wiki/Steel_alphabet"
										target="_blank"
										rel="noopener noreferrer"
									>
										Steel Alphabet
									</a>
									{t.about.symbolsDesc.split('Steel Alphabet')[1]}
								</p>
								<ul className={styles.attributionList}>
									<li>
										<strong>{t.about.artistLabel}</strong> {t.about.symbolsArtist}
									</li>
									<li>
										<strong>{t.about.sourceLabel}</strong> {t.about.symbolsSource}
									</li>
									<li>
										<strong>{t.about.licenseLabel}</strong> {t.about.symbolsLicense}
									</li>
								</ul>
								<p className={styles.note}>{t.about.symbolsUsed}</p>
								<ul className={styles.portraitList}>
									{UNIQUE_SYMBOL_METALS.map(({ metal, color, darkGlyph }) => (
										<li key={metal}>
											<span
												className={styles.symbolIcon}
												style={{
													borderColor: color,
													background: color,
												}}
											>
												<img
													src={`/symbols/${metal}.svg`}
													alt={metal}
													style={{
														filter: darkGlyph ? 'none' : 'invert(1)',
														opacity: 0.95,
													}}
												/>
											</span>
											<span>
												<strong>{metal}</strong> —{' '}
												{(t.about as Record<string, string>)[`symbol${metal}`]}
											</span>
										</li>
									))}
								</ul>
							</section>

							<section className={styles.section}>
								<h3 className={styles.sectionTitle}>{t.about.copyrightTitle}</h3>
								<ul className={styles.copyrightList}>
									<li>
										<strong>Mistborn</strong> {t.about.copyrightTrademark.replace('Mistborn ', '')}
									</li>
									<li>{t.about.copyrightMap}</li>
									<li>{t.about.copyrightBook}</li>
								</ul>
							</section>
						</div>

						<div className={styles.footer}>
							<button className={styles.closeButtonAlt} onClick={handleClose}>
								{t.about.closeButton}
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default AboutModal;
