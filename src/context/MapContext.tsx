import React, {
	createContext,
	useContext,
	useState,
	useCallback,
	useMemo,
	useEffect,
	useRef,
	type ReactNode,
} from 'react';
import type L from 'leaflet';
import type { BookId, CharacterId, SelectedItem, MapContextType, MapView, CityId } from '@/types';
import { books, characters } from '@/data';
import { loadAppState, saveBookState, type PersistedBookState } from '@/services';
import { HIDE_MOVEMENT_SPOILERS_KEY } from '@/config';
import { hasCharacterDebuted } from '@/utils/titleProgression';
import { isDebugMode } from '@/utils';
import { DEFAULT_BOOK } from '@/config';

/** Clamp a chapter to the valid range for a given book */
function clampChapter(chapter: number, bookId: BookId): number {
	const bookData = books.find(b => b.id === bookId);
	const min = bookData?.hasPrologue ? 0 : 1;
	const max = (bookData?.totalChapters || 38) + (bookData?.hasEpilogue ? 1 : 0);
	return Math.max(min, Math.min(chapter, max));
}

/** Build default book state (for books with no saved state) */
function defaultBookState(bookId: BookId): PersistedBookState {
	const bookData = books.find(b => b.id === bookId);
	return {
		currentChapter: bookData?.hasPrologue ? 0 : 1,
		visibleCharacters: ['kelsier'],
		followedCharacter: null,
		showLocations: true,
		showAllCharacters: false,
		showAtmosphere: true,
		mapView: 'world',
		activeCity: null,
	};
}

if (isDebugMode && typeof window !== 'undefined') {
	localStorage.clear();
}

const savedAppState = isDebugMode ? null : loadAppState();
const initialBook: BookId = savedAppState?.lastBook ?? DEFAULT_BOOK;
const initialBookState = savedAppState?.books[initialBook] ?? defaultBookState(initialBook);

const MapContext = createContext<MapContextType | undefined>(undefined);

interface MapProviderProps {
	children: ReactNode;
}

export const MapProvider: React.FC<MapProviderProps> = ({ children }) => {
	const [currentBook, setCurrentBookState] = useState<BookId>(initialBook);
	const [currentChapter, setCurrentChapterState] = useState<number>(
		clampChapter(initialBookState.currentChapter, initialBook)
	);

	const [visibleCharacters, setVisibleCharacters] = useState<Set<CharacterId>>(
		new Set(initialBookState.visibleCharacters)
	);
	const [showLocations, setShowLocations] = useState<boolean>(initialBookState.showLocations);
	const [showAtmosphere, setShowAtmosphere] = useState<boolean>(initialBookState.showAtmosphere);
	const [showAllCharacters, setShowAllCharacters] = useState<boolean>(
		initialBookState.showAllCharacters
	);

	const [secretHistoryMode, setSecretHistoryMode] = useState<boolean>(() => {
		try {
			return localStorage.getItem('mistborn-secret-history') === '1';
		} catch {
			return false;
		}
	});

	const [hideMovementSpoilers, setHideMovementSpoilers] = useState<boolean>(() => {
		try {
			const stored = localStorage.getItem(HIDE_MOVEMENT_SPOILERS_KEY);
			return stored === null ? false : stored === '1';
		} catch {
			return false;
		}
	});

	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const [waitingForConfirmation, setWaitingForConfirmation] = useState<boolean>(false);
	const [citySuggestion, setCitySuggestion] = useState<{ cityId: CityId; cityName: string } | null>(
		null
	);
	const [followedCharacter, setFollowedCharacter] = useState<CharacterId | null>(
		initialBookState.followedCharacter
	);
	const [selectedItem, setSelectedItem] = useState<SelectedItem | null>(null);
	const [controlsPanelOpen, setControlsPanelOpen] = useState<boolean>(() => {
		if (typeof window !== 'undefined') {
			return window.innerWidth >= 768;
		}
		return true;
	});

	const [mapView, setMapView] = useState<MapView>(initialBookState.mapView);
	const [activeCity, setActiveCity] = useState<CityId | null>(initialBookState.activeCity);
	const [isEnteringCity, setIsEnteringCity] = useState(false);
	const pendingCityRef = useRef<CityId | null>(null);

	// Character marker refs for opening popups from sidebar
	const characterMarkerRefs = useRef<Map<CharacterId, L.Marker>>(new Map());

	const registerCharacterMarker = useCallback((charId: CharacterId, marker: L.Marker | null) => {
		if (marker) {
			characterMarkerRefs.current.set(charId, marker);
		} else {
			characterMarkerRefs.current.delete(charId);
		}
	}, []);

	const openCharacterPopup = useCallback((charId: CharacterId) => {
		const marker = characterMarkerRefs.current.get(charId);
		if (marker) {
			marker.openPopup();
		}
	}, []);

	const enterCity = useCallback(
		(cityId: CityId) => {
			if (mapView === 'city') {
				setActiveCity(cityId);
				setSelectedItem(null);
			} else {
				pendingCityRef.current = cityId;
				setIsEnteringCity(true);
			}
		},
		[mapView]
	);

	const commitEnterCity = useCallback(() => {
		if (pendingCityRef.current) {
			setActiveCity(pendingCityRef.current);
			setMapView('city');
			setSelectedItem(null);
			pendingCityRef.current = null;
			setIsEnteringCity(false);
		}
	}, []);

	const exitCity = useCallback(() => {
		setActiveCity(null);
		setMapView('world');
		setSelectedItem(null);
	}, []);

	const getCurrentBookState = useCallback(
		(): PersistedBookState => ({
			currentChapter,
			visibleCharacters: Array.from(visibleCharacters),
			followedCharacter,
			showLocations,
			showAllCharacters,
			showAtmosphere,
			mapView,
			activeCity,
		}),
		[
			currentChapter,
			visibleCharacters,
			followedCharacter,
			showLocations,
			showAllCharacters,
			showAtmosphere,
			mapView,
			activeCity,
		]
	);

	const currentBookStateRef = useRef(getCurrentBookState());
	currentBookStateRef.current = getCurrentBookState();

	const setCurrentBook = useCallback(
		(book: BookId) => {
			if (!isDebugMode) {
				saveBookState(currentBook, currentBookStateRef.current, book);
			}

			const saved = isDebugMode ? null : loadAppState();
			const newBookState = saved?.books[book] ?? defaultBookState(book);

			setCurrentBookState(book);
			setCurrentChapterState(clampChapter(newBookState.currentChapter, book));
			setVisibleCharacters(new Set(newBookState.visibleCharacters));
			setFollowedCharacter(newBookState.followedCharacter);
			setShowLocations(newBookState.showLocations);
			setShowAllCharacters(newBookState.showAllCharacters);
			setMapView(newBookState.mapView);
			setActiveCity(newBookState.activeCity);
			setIsPlaying(false);
			setSelectedItem(null);
		},
		[currentBook]
	);

	useEffect(() => {
		try {
			localStorage.setItem('mistborn-secret-history', secretHistoryMode ? '1' : '0');
		} catch {
			// Silently fail
		}
	}, [secretHistoryMode]);

	useEffect(() => {
		try {
			localStorage.setItem(HIDE_MOVEMENT_SPOILERS_KEY, hideMovementSpoilers ? '1' : '0');
		} catch {
			// Silently fail
		}
	}, [hideMovementSpoilers]);

	const isInitialMount = useRef(true);
	useEffect(() => {
		if (isInitialMount.current) {
			isInitialMount.current = false;
			return;
		}
		if (!isDebugMode) {
			saveBookState(currentBook, getCurrentBookState(), currentBook);
		}
	}, [currentBook, getCurrentBookState]);

	const manuallyHidden = useRef<Set<CharacterId>>(new Set());

	useEffect(() => {
		characters.forEach(character => {
			const debuted = hasCharacterDebuted(character, currentBook, currentChapter);
			if (
				debuted &&
				!visibleCharacters.has(character.id) &&
				!manuallyHidden.current.has(character.id)
			) {
				setVisibleCharacters(prev => {
					const newSet = new Set(prev);
					newSet.add(character.id);
					return newSet;
				});
			}
		});
	}, [currentBook, currentChapter]);

	const setCurrentChapter = useCallback(
		(chapterOrFn: number | ((prev: number) => number)) => {
			setCurrentChapterState(prev => {
				const raw = typeof chapterOrFn === 'function' ? chapterOrFn(prev) : chapterOrFn;
				return clampChapter(raw, currentBook);
			});
		},
		[currentBook]
	);

	const toggleCharacter = useCallback((charId: CharacterId) => {
		setVisibleCharacters(prev => {
			const newSet = new Set(prev);
			if (newSet.has(charId)) {
				newSet.delete(charId);
				manuallyHidden.current.add(charId);
			} else {
				newSet.add(charId);
				manuallyHidden.current.delete(charId);
			}
			return newSet;
		});
	}, []);

	const contextValue = useMemo<MapContextType>(
		() => ({
			currentBook,
			setCurrentBook,
			currentChapter,
			setCurrentChapter,
			visibleCharacters,
			toggleCharacter,
			showLocations,
			setShowLocations,
			showAtmosphere,
			setShowAtmosphere,
			showAllCharacters,
			setShowAllCharacters,
			secretHistoryMode,
			setSecretHistoryMode,
			hideMovementSpoilers,
			setHideMovementSpoilers,
			mapView,
			activeCity,
			enterCity,
			exitCity,
			isEnteringCity,
			commitEnterCity,
			isPlaying,
			setIsPlaying,
			waitingForConfirmation,
			setWaitingForConfirmation,
			citySuggestion,
			setCitySuggestion,
			followedCharacter,
			setFollowedCharacter,
			selectedItem,
			setSelectedItem,
			registerCharacterMarker,
			openCharacterPopup,
			controlsPanelOpen,
			setControlsPanelOpen,
		}),
		[
			currentBook,
			setCurrentBook,
			currentChapter,
			setCurrentChapter,
			visibleCharacters,
			toggleCharacter,
			showLocations,
			showAtmosphere,
			showAllCharacters,
			secretHistoryMode,
			hideMovementSpoilers,
			mapView,
			activeCity,
			enterCity,
			exitCity,
			isEnteringCity,
			commitEnterCity,
			isPlaying,
			waitingForConfirmation,
			citySuggestion,
			followedCharacter,
			selectedItem,
			controlsPanelOpen,
		]
	);

	return <MapContext.Provider value={contextValue}>{children}</MapContext.Provider>;
};

export const useMapContext = (): MapContextType => {
	const context = useContext(MapContext);

	if (context === undefined) {
		throw new Error('useMapContext must be used within a MapProvider');
	}

	return context;
};

export { MapContext };
