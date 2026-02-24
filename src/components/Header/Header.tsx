import React, { useState, useRef, useEffect } from 'react';
import { useMapContext } from '@/context/MapContext';
import { useLanguage } from '@/context/LanguageContext';
import { books, cityMaps, BOOK_COLORS, KOFI_URL } from '@/data';
import { languages } from '@/i18n';
import {
	LogoIcon,
	GlobeIcon,
	ChevronDownIcon,
	MapFoldIcon,
	BookOpenIcon,
	MapPinIcon,
	EarthIcon,
} from '@/components/icons';
import type { BookId, CityId } from '@/types';
import type { LanguageCode } from '@/i18n/types';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
	const { currentBook, setCurrentBook, mapView, activeCity, enterCity, exitCity } = useMapContext();
	const { language, setLanguage, t } = useLanguage();
	const [wipOpen, setWipOpen] = useState(false);
	const wipRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!wipOpen) return;
		const handleClick = (e: MouseEvent) => {
			if (wipRef.current && !wipRef.current.contains(e.target as Node)) {
				setWipOpen(false);
			}
		};
		document.addEventListener('mousedown', handleClick);
		return () => document.removeEventListener('mousedown', handleClick);
	}, [wipOpen]);

	const handleMapChange = (mapId: string) => {
		if (mapId === 'world') {
			exitCity();
		} else {
			enterCity(mapId as CityId);
		}
	};

	/*
		Just for mobile, so we can get short names...
	*/
	const getShortMapName = (): string => {
		if (mapView === 'world') return t.headerExtra.world;
		const city = cityMaps.find(c => c.id === activeCity);
		const translatedName = activeCity ? t.data.cities[activeCity]?.name : undefined;
		return (translatedName ?? city?.name ?? t.headerExtra.city).split(' ')[0];
	};

	return (
		<>
			<header id="site-header" tabIndex={-1} className={styles.header}>
				<div className={styles.logo}>
					<LogoIcon className={styles.logoIcon} />
					<span className={styles.title}>{t.header.title}</span>
				</div>

				<div className={styles.languageSelector}>
					<label
						htmlFor="language-select"
						className={styles.languageLabel}
						onClick={() => document.getElementById('language-select')?.focus()}
					>
						<GlobeIcon className={styles.languageIcon} />
						<span className={styles.selectedValue}>{language.toUpperCase()}</span>
					</label>
					<select
						id="language-select"
						value={language}
						onChange={e => setLanguage(e.target.value as LanguageCode)}
						className={styles.languageSelect}
						aria-label={t.headerExtra.selectLanguage}
					>
						{languages.map(lang => (
							<option key={lang.code} value={lang.code}>
								{lang.nativeName}
							</option>
						))}
					</select>
					<ChevronDownIcon className={styles.selectArrow} />
				</div>

				<div className={styles.mapSelector}>
					<label
						htmlFor="map-select"
						className={styles.mapLabel}
						onClick={() => document.getElementById('map-select')?.focus()}
					>
						<MapFoldIcon className={styles.mapIcon} />
						<span className={styles.mapLabelText}>{t.headerExtra.mapLabel}</span>
						<span className={styles.selectedValue}>{getShortMapName()}</span>
					</label>
					<select
						id="map-select"
						value={mapView === 'world' ? 'world' : activeCity || 'world'}
						onChange={e => handleMapChange(e.target.value)}
						className={styles.mapSelect}
						aria-label={t.header.selectMap}
					>
						<option value="world">{t.map.worldMap}</option>
						<optgroup label={t.map.cityMaps}>
							{cityMaps.map(city => (
								<option key={city.id} value={city.id}>
									{t.data.cities[city.id]?.name ?? city.name}
								</option>
							))}
						</optgroup>
					</select>
					<ChevronDownIcon className={styles.selectArrow} />
				</div>

				<nav className={styles.bookNav} aria-label={t.header.selectBook}>
					{/* Desktop */}
					<div className={styles.bookTabs}>
						{books.map(book => (
							<button
								key={book.id}
								className={`${styles.bookButton} ${currentBook === book.id ? styles.active : ''}`}
								style={{ '--book-color': BOOK_COLORS[book.id] } as React.CSSProperties}
								onClick={() => setCurrentBook(book.id)}
								aria-pressed={currentBook === book.id}
								aria-label={`Select ${t.books[book.id]}`}
							>
								{t.books[book.id]}
							</button>
						))}
					</div>

					{/* Mobile */}
					<div className={styles.bookDropdown}>
						<select
							value={currentBook}
							onChange={e => setCurrentBook(e.target.value as BookId)}
							className={styles.bookSelect}
							style={{ '--book-color': BOOK_COLORS[currentBook] } as React.CSSProperties}
							aria-label={t.header.selectBook}
						>
							{books.map(book => (
								<option key={book.id} value={book.id}>
									{t.books[book.id]}
								</option>
							))}
						</select>
						<ChevronDownIcon className={styles.selectArrow} />
					</div>
				</nav>
			</header>

			{/* WIP ribbon */}
			<div className={styles.wipRibbon} ref={wipRef}>
				<button
					className={styles.wipBadge}
					onClick={() => setWipOpen(o => !o)}
					aria-expanded={wipOpen}
				>
					<span className={styles.wipDot} />
					{t.headerExtra.wipBadge}
				</button>
				{wipOpen && (
					<div className={styles.wipPopover}>
						<h3 className={styles.wipTitle}>{t.headerExtra.wipTitle}</h3>
						<ul className={styles.wipList}>
							<li>
								<BookOpenIcon className={styles.wipIcon} />
								{t.headerExtra.wipItem1}
							</li>
							<li>
								<MapPinIcon className={styles.wipIcon} />
								{t.headerExtra.wipItem2}
							</li>
							<li>
								<EarthIcon className={styles.wipIcon} />
								{t.headerExtra.wipItem3}
							</li>
							<li>
								<MapFoldIcon className={styles.wipIcon} />
								{t.headerExtra.wipItem4}
							</li>
						</ul>
						<a
							className={styles.wipSupport}
							href={KOFI_URL}
							target="_blank"
							rel="noopener noreferrer"
						>
							{t.headerExtra.supportKofi}
						</a>
					</div>
				)}
			</div>
		</>
	);
};

export default Header;
