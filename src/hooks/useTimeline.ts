import { useEffect, useRef, useCallback } from 'react';
import { useMapContext } from '@/context/MapContext';
import { books } from '@/data';
import { PLAYBACK_INTERVAL } from '@/config';

export interface UseTimelineReturn {
	play: () => void;
	pause: () => void;
	reset: () => void;
	nextChapter: () => void;
	prevChapter: () => void;
	goToChapter: (chapter: number) => void;
	progress: number;
	minChapter: number;
	maxChapter: number;
}

export const useTimeline = (): UseTimelineReturn => {
	const {
		currentBook,
		currentChapter,
		setCurrentChapter,
		isPlaying,
		setIsPlaying,
		waitingForConfirmation,
	} = useMapContext();

	const intervalRef = useRef<number | null>(null);

	// chapter range for current book, including prologue/epilogue
	const currentBookData = books.find(b => b.id === currentBook);
	const minChapter = currentBookData?.hasPrologue ? 0 : 1;
	const maxChapter =
		(currentBookData?.totalChapters || 38) + (currentBookData?.hasEpilogue ? 1 : 0);

	// 0–100% playback progress
	const range = maxChapter - minChapter;
	const progress = range > 0 ? ((currentChapter - minChapter) / range) * 100 : 0;

	const clearPlaybackInterval = useCallback(() => {
		if (intervalRef.current !== null) {
			window.clearInterval(intervalRef.current);
			intervalRef.current = null;
		}
	}, []);

	const play = useCallback(() => {
		if (currentChapter >= maxChapter) {
			setCurrentChapter(minChapter);
		}
		setIsPlaying(true);
	}, [currentChapter, maxChapter, minChapter, setCurrentChapter, setIsPlaying]);

	const pause = useCallback(() => {
		setIsPlaying(false);
	}, [setIsPlaying]);

	const reset = useCallback(() => {
		setIsPlaying(false);
		setCurrentChapter(minChapter);
	}, [minChapter, setCurrentChapter, setIsPlaying]);

	const nextChapter = useCallback(() => {
		setCurrentChapter((prev: number) => Math.min(prev + 1, maxChapter));
	}, [maxChapter, setCurrentChapter]);

	const prevChapter = useCallback(() => {
		setCurrentChapter((prev: number) => Math.max(prev - 1, minChapter));
	}, [minChapter, setCurrentChapter]);

	const goToChapter = useCallback(
		(chapter: number) => {
			setCurrentChapter(Math.max(minChapter, Math.min(chapter, maxChapter)));
		},
		[minChapter, maxChapter, setCurrentChapter]
	);

	// Handle playback interval
	useEffect(() => {
		if (isPlaying && !waitingForConfirmation) {
			intervalRef.current = window.setInterval(() => {
				setCurrentChapter((prev: number) => {
					if (prev >= maxChapter) {
						setIsPlaying(false);
						return prev;
					}
					return prev + 1;
				});
			}, PLAYBACK_INTERVAL);
		} else {
			clearPlaybackInterval();
		}

		return clearPlaybackInterval;
	}, [
		isPlaying,
		waitingForConfirmation,
		maxChapter,
		setCurrentChapter,
		setIsPlaying,
		clearPlaybackInterval,
	]);

	useEffect(() => {
		return clearPlaybackInterval;
	}, [clearPlaybackInterval]);

	return {
		play,
		pause,
		reset,
		nextChapter,
		prevChapter,
		goToChapter,
		progress,
		minChapter,
		maxChapter,
	};
};
