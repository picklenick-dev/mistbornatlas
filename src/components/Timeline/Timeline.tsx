import React, { useMemo, useState, useEffect, useRef } from 'react';
import { useMapContext } from '@/context/MapContext';
import { useLanguage } from '@/context/LanguageContext';
import { useTimeline, useMapData } from '@/hooks';
import { isDebugMode } from '@/utils';
import { getCityMapById, books } from '@/data';
import { loadTimelineCollapsed, saveTimelineCollapsed } from '@/services/storage';
import {
	ChevronDownIcon,
	ResetIcon,
	SkipBackIcon,
	SkipForwardIcon,
	PlayIcon,
	PauseIcon,
	MapFoldIcon,
} from '@/components/icons';
import type { CityId } from '@/types';
import styles from './Timeline.module.scss';

export const Timeline: React.FC = () => {
	const {
		currentChapter,
		currentBook,
		mapView,
		exitCity,
		activeCity,
		setCitySuggestion: setContextCitySuggestion,
	} = useMapContext();
	const { t } = useLanguage();
	const timelineHook = useTimelineWithContext();
	const {
		play,
		pause,
		nextChapter,
		prevChapter,
		goToChapter,
		progress,
		minChapter,
		maxChapter,
		isPlaying,
	} = timelineHook;

	const [collapsed, setCollapsed] = useState(() => loadTimelineCollapsed());

	const toggleCollapsed = () => {
		setCollapsed(prev => {
			const next = !prev;
			saveTimelineCollapsed(next);
			return next;
		});
	};

	useEffect(() => {
		document.body.setAttribute('data-timeline-collapsed', collapsed ? '1' : '0');
		return () => document.body.removeAttribute('data-timeline-collapsed');
	}, [collapsed]);

	const reset = () => {
		setContextCitySuggestion(null);
		timelineHook.reset();
	};

	const activeCityMap = activeCity ? getCityMapById(activeCity) : null;
	const { characterPositions } = useMapData();

	const prevCityIdRef = useRef<CityId | null>(null);

	const citySuggestion = useMemo(() => {
		if (mapView === 'city') return null;

		const citiesWithCharacters = new Map<CityId, string[]>();

		characterPositions.forEach(({ character, movement }) => {
			// Only suggest cities for movements that have actually happened (not future spoiler placements)
			if (movement?.cityId && movement?.cityCoords && movement.chapter <= currentChapter) {
				const existing = citiesWithCharacters.get(movement.cityId) || [];
				existing.push(t.data.characters[character.id]?.name ?? character.name);
				citiesWithCharacters.set(movement.cityId, existing);
			}
		});

		if (citiesWithCharacters.size === 0) return null;

		let bestCity: CityId | null = null;
		let maxCount = 0;

		citiesWithCharacters.forEach((chars, cityId) => {
			if (chars.length > maxCount) {
				maxCount = chars.length;
				bestCity = cityId;
			}
		});

		if (!bestCity) return null;

		const cityMap = getCityMapById(bestCity);
		const characters = citiesWithCharacters.get(bestCity) || [];

		return {
			cityId: bestCity,
			cityName: t.data.cities[bestCity]?.name ?? cityMap?.name ?? bestCity,
			characters,
		};
	}, [characterPositions, mapView, currentChapter, t]);

	useEffect(() => {
		const currentCityId = citySuggestion?.cityId ?? null;
		const prevCityId = prevCityIdRef.current;

		if (currentCityId !== prevCityId) {
			if (!currentCityId) {
				setContextCitySuggestion(null);
			} else if (mapView === 'world' && citySuggestion) {
				setContextCitySuggestion({
					cityId: citySuggestion.cityId,
					cityName: citySuggestion.cityName,
				});
			}
			prevCityIdRef.current = currentCityId;
		}
	}, [citySuggestion?.cityId, mapView, setContextCitySuggestion]);

	const handlePlay = () => {
		if (isPlaying) {
			pause();
		} else {
			play();
		}
	};

	const currentBookData = books.find(b => b.id === currentBook);

	const getChapterLabel = (chapter: number) => {
		if (chapter === 0 && currentBookData?.hasPrologue) return t.timeline.prologue;
		if (currentBookData?.hasEpilogue && chapter === currentBookData.totalChapters + 1)
			return t.timeline.epilogue;
		return `${t.timeline.chapter} ${chapter}`;
	};

	const chapterTicks = useMemo(() => {
		const range = maxChapter - minChapter;
		if (range <= 0) return [];
		const ticks: number[] = [];
		for (let ch = minChapter; ch <= maxChapter; ch++) {
			ticks.push(((ch - minChapter) / range) * 100);
		}
		return ticks;
	}, [minChapter, maxChapter]);

	return (
		<div
			id="timeline-section"
			tabIndex={-1}
			className={`${styles.timeline} ${collapsed ? styles.collapsed : ''}`}
		>
			<button
				className={styles.toggleBar}
				onClick={toggleCollapsed}
				aria-label={collapsed ? t.timeline.showTimeline : t.timeline.hideTimeline}
			>
				<span className={styles.toggleLabel}>{t.timeline.label}</span>
				<span className={styles.toggleChapter}>{getChapterLabel(currentChapter)}</span>
				<ChevronDownIcon
					className={`${styles.toggleArrow} ${collapsed ? styles.toggleArrowFlipped : ''}`}
				/>
			</button>

			<div className={styles.timelineContent}>
				<div className={styles.controls}>
					<button
						className={styles.controlButton}
						onClick={reset}
						title={t.timeline.reset}
						aria-label={t.timeline.reset}
					>
						<ResetIcon />
					</button>

					<button
						className={styles.controlButton}
						onClick={prevChapter}
						title={t.timeline.previous}
						aria-label={t.timeline.previous}
					>
						<SkipBackIcon />
					</button>

					<button
						className={`${styles.controlButton} ${styles.playButton}`}
						onClick={handlePlay}
						title={isPlaying ? t.timeline.pause : t.timeline.play}
						aria-label={isPlaying ? t.timeline.pause : t.timeline.play}
					>
						{isPlaying ? <PauseIcon /> : <PlayIcon />}
					</button>

					<button
						className={styles.controlButton}
						onClick={nextChapter}
						title={t.timeline.next}
						aria-label={t.timeline.next}
					>
						<SkipForwardIcon />
					</button>
				</div>

				<div className={styles.sliderContainer}>
					<div
						className={styles.sliderTrack}
						style={{ '--progress': `${progress}%` } as React.CSSProperties}
					>
						<div className={styles.sliderTicks}>
							{chapterTicks.map((pos, i) => (
								<span key={i} className={styles.sliderTick} style={{ left: `${pos}%` }} />
							))}
						</div>
						<input
							type="range"
							className={styles.sliderInput}
							min={minChapter}
							max={maxChapter}
							value={currentChapter}
							onChange={e => {
								const newChapter = parseInt(e.target.value, 10);
								goToChapter(newChapter);
							}}
							aria-label="Chapter slider"
						/>
						<div className={styles.sliderThumb} />
					</div>
					<div className={styles.sliderLabels}>
						<span className={styles.currentChapterLabel}>{getChapterLabel(currentChapter)}</span>
					</div>
				</div>

				{mapView === 'city' && activeCityMap && !isDebugMode && (
					<button
						className={styles.returnToWorld}
						onClick={exitCity}
						title={t.timeline.returnToWorldMap}
					>
						<MapFoldIcon className={styles.returnToWorldIcon} />
						<span className={styles.returnToWorldText}>
							{t.timeline.exitCity}{' '}
							{activeCity
								? (t.data.cities[activeCity]?.name ?? activeCityMap.name)
								: activeCityMap.name}
						</span>
					</button>
				)}
			</div>
		</div>
	);
};

function useTimelineWithContext() {
	const { isPlaying } = useMapContext();
	const timeline = useTimeline();
	return { ...timeline, isPlaying };
}

export default Timeline;
