import type { Translation } from '../types';
import { plData } from './pl-data';

export const pl: Translation = {
	meta: {
		title: 'Interaktywna mapa Mistborn — Scadrial',
		description:
			'Interaktywna wizualizacja chronokartograficzna oryginalnej trylogii Mistborn Brandona Sandersona. Śledź ruchy postaci po Scadrialu.',
	},

	header: {
		title: 'ATLAS MISTBORN',
		help: 'Pomoc',
		selectBook: 'Wybierz książkę',
		selectMap: 'Wybierz widok mapy',
	},

	map: {
		worldMap: 'Ostatnie Imperium (Świat)',
		cityMaps: 'Mapy miast',
	},

	books: {
		tfe: 'Z mgły zrodzony',
		woa: 'Studnia wstąpienia',
		hoa: 'Bohater wieków',
	},

	timeline: {
		reset: 'Wróć na początek',
		previous: 'Poprzedni rozdział',
		play: 'Rozpocznij odtwarzanie',
		pause: 'Wstrzymaj odtwarzanie',
		next: 'Następny rozdział',
		chapter: 'Rozdział',
		prologue: 'Prolog',
		epilogue: 'Epilog',
		exploreCity: 'Eksploruj',
		exitCity: 'Wyjdź',
		cityPromptEnter: 'Wejdź do miasta',
		cityPromptStay: 'Zostań na mapie świata',
		cityPromptDesc:
			'Postacie weszły do miasta. Czy chcesz podążyć za nimi na szczegółową mapę miasta, czy pozostać na mapie świata?',
		exitCityPromptDesc:
			'Postacie opuściły to miasto. Czy chcesz wrócić na mapę świata, by śledzić ich podróż, czy zostać w widoku miasta?',
		cityPromptExitBtn: 'Wróć na mapę świata',
		paused: 'Wstrzymane',
		showTimeline: 'Pokaż oś czasu',
		hideTimeline: 'Ukryj oś czasu',
		label: 'Oś czasu',
		returnToWorldMap: 'Wróć na mapę świata',
	},

	characters: {
		title: 'Postacie',
		showAll: 'Pokaż wszystkie (spojlery)',
		follow: 'Śledź tę postać',
		following: 'Śledzisz tę postać',
		notYetIntroduced: 'Jeszcze nie wprowadzona',
		hiddenPlaceholder: '???',
	},

	locations: {
		type: 'Typ lokacji',
		dominance: 'Dominacja',
		coordinates: 'Współrzędne',
		exploreCity: 'Eksploruj miasto',
		features: 'Cechy',
	},

	legend: {
		title: 'Legenda',
		showLocations: 'Pokaż lokacje',
		characters: 'Postacie',
		locations: 'Lokacje',
		openLegend: 'Otwórz legendę',
		closeLegend: 'Zamknij legendę',
		cityLandmarks: 'Zabytki miejskie',
		explorableCity: 'Miasto do eksploracji',
		other: 'Inne',
		characterPosition: 'Pozycja postaci',
		travelPath: 'Trasa podróży',
	},

	infoPanel: {
		close: 'Zamknij panel',
		locationType: 'Typ lokacji',
		cityPosition: 'Pozycja w mieście',
	},

	characterMarker: {
		characterEvent: 'Wydarzenie postaci',
		earlier: '← Wcześniej',
		later: 'Później →',
		current: 'Bieżące',
		chapterAbbr: 'Roz',
		showLess: 'Pokaż mniej',
		readMore: 'Czytaj więcej',
		chapter: 'Rozdział',
		season: 'Pora roku',
		year: 'Rok',
		timelinePaused: '⏸ Oś czasu wstrzymana',
		continueTimeline: 'Kontynuuj oś czasu',
		cityChoiceDesc: 'Wejść do miasta czy zostać na mapie?',
		charactersEntered: 'Postacie weszły do',
		enterCity: 'Wejdź do miasta',
		stayOnMap: 'Zostań na mapie',
		partOf: 'Część {part}/{total}',
		revealSpoiler: 'Dotknij, aby odsłonić',
		readAlongNote: 'Tryb czytania włączony',
	},

	characterPath: {
		journeyTooltip: ' — podróż',
	},

	cityLandmark: {
		showLess: 'Pokaż mniej',
		readMore: 'Czytaj więcej',
		locationType: 'Typ lokacji',
	},

	cityMap: {
		returnToWorldMap: 'Powrót na mapę świata',
		worldMap: 'Mapa świata',
	},

	cityPrompt: {
		onWorldMap: 'na mapie świata.',
		worldMap: 'Mapa świata',
		timelinePaused: '⏸ Oś czasu wstrzymana',
		enteredCity: '',
		viewCityMap: 'Wyświetlić mapę miasta?',
		enterCity: 'Wejdź do miasta',
		dismiss: 'Odrzuć',
		is: 'jest',
		are: 'są',
		has: 'wchodzi do',
		have: 'wchodzą do',
	},

	controls: {
		openPanel: 'Otwórz panel sterowania',
		label: 'Sterowanie',
		title: 'Sterowanie',
		closePanel: 'Zamknij panel',
		secretHistoryTitle: 'Dołącz treści Secret History (ruchy Kelsiera w Świecie Kognitywnym)',
		secretHistoryContent: 'Treści Secret History',
		ashAndMist: 'Popiół i mgła',
		cityLandmarksNote: 'Zabytki miejskie są zawsze widoczne',
		readAlongMode: 'Tryb czytania',
		readAlongModeTitle: 'Ukryj opisy ruchów do kliknięcia — idealne do czytania z mapą',
		statusOn: 'WŁ.',
		statusOff: 'WYŁ.',
	},

	locationMarker: {
		showLess: 'Pokaż mniej',
		readMore: 'Czytaj więcej',
		dominance: 'Dominacja',
		exploreCity: 'Eksploruj miasto',
	},

	loading: {
		title: 'ATLAS MISTBORN',
		subtitle: 'Ładowanie świata popiołu i mgły...',
	},

	common: {
		loading: 'Ładowanie...',
		error: 'Błąd',
		back: 'Wstecz',
		worldMap: 'Mapa świata',
		returnToWorldMap: 'Powrót na mapę świata',
	},

	locationTypes: {
		capital: 'Stolica',
		city: 'Miasto',
		landmark: 'Punkt orientacyjny',
		mystical: 'Święte miejsce',
		ashmount: 'Popiołowa Góra',
		mine: 'Kopalnia',
		palace: 'Pałac',
		keep: 'Zamek',
		district: 'Dzielnica',
		hideout: 'Kryjówka',
		stronghold: 'Twierdza',
		region: 'Region',
		plantation: 'Plantacja',
		estate: 'Majątek szlachecki',
		town: 'Osada',
		village: 'Wioska skaa',
		river: 'Droga wodna',
		industrial: 'Posterunek zaopatrzenia',
	},

	landmarkTypes: {
		gate: 'Brama',
		keep: 'Zamek',
		palace: 'Pałac',
		district: 'Dzielnica',
		shop: 'Sklep',
		safehouse: 'Kryjówka',
		landmark: 'Punkt orientacyjny',
		canal: 'Kanał',
		ministry: 'Kanton',
		plaza: 'Plac',
	},

	dominances: {
		Central: 'Dominacja Centralna',
		Northern: 'Dominacja Północna',
		Southern: 'Dominacja Południowa',
		Eastern: 'Dominacja Wschodnia',
		Western: 'Dominacja Zachodnia',
		Terris: 'Dominacja Terris',
		None: 'Poza Imperium',
	},

	donation: {
		buttonLabel: 'Kup mi kawę',
		buttonLabelShort: 'Kawa',
		modalTitle: 'Wesprzyj Atlas Mistborn',
		modalDesc:
			'Atlas Mistborn to darmowy, otwarto-źródłowy projekt fanowski, tworzony i utrzymywany w wolnym czasie. Hosting, domena i rozwój — to wszystko kosztuje. Jeśli podoba Ci się aplikacja i chcesz pomóc, nawet mała darowizna wiele znaczy — ale bez presji, aplikacja zawsze będzie całkowicie darmowa!',
		modalButton: 'Kup mi kawę na Ko-fi',
		modalDismiss: 'Może później',
		modalDontAsk: 'Nie pokazuj tego więcej',
		close: 'Zamknij',
	},

	headerExtra: {
		world: 'Świat',
		city: 'Miasto',
		wipBadge: 'W trakcie prac',
		wipTitle: 'Co nadchodzi',
		wipItem1: 'Ponowne czytanie trylogii w celu weryfikacji każdego ruchu postaci na osi czasu',
		wipItem2: 'Podwójna weryfikacja wszystkich treści lokacji pod kątem dokładności',
		wipItem3: 'Lokalizacja — obsługa wielu języków',
		wipItem4: 'Więcej map i treści z Ery 2 (może?)',
		supportKofi: 'Wesprzyj na Ko-fi',
		mapLabel: 'Mapa:',
		selectLanguage: 'Wybierz język',
	},

	about: {
		ariaLabel: 'O tej stronie',
		title: 'O tej stronie i źródła',
		buttonLabel: 'O stronie',
		buttonSublabel: 'Informacje i źródła',
		modalTitle: 'O tej stronie',
		close: 'Zamknij',
		disclaimerTitle: 'Zastrzeżenie',
		disclaimerBadge: 'NIEOFICJALNY PROJEKT FANOWSKI',
		disclaimerIntro:
			'To jest nieoficjalny projekt fanowski, niezwiązany, niezatwierdzony ani niepowiązany z:',
		disclaimerBranderson: 'Brandon Sanderson',
		disclaimerDragonsteel: 'Dragonsteel Entertainment',
		disclaimerTor: 'Tor Books / Macmillan Publishers',
		disclaimerIsaac: 'Isaac Stewart',
		disclaimerOutro:
			'Ten projekt został stworzony wyłącznie w celach edukacyjnych i rozrywkowych. Wszystkie treści Mistborn, w tym postacie, lokacje, fabuła i grafika, stanowią własność ich właścicieli praw autorskich.',
		mapAttributionTitle: 'Źródło mapy',
		mapAttributionDesc:
			'Mapa użyta w tym projekcie to oficjalna mapa Ostatniego Imperium autorstwa Isaaca Stewarta, pobrana z Coppermind Wiki.',
		mapArtist: 'Isaac Stewart',
		mapSource: 'Coppermind Wiki',
		mapOriginalWork: 'Stworzona na potrzeby serii Mistborn Brandona Sandersona',
		mapNote:
			'Isaac Stewart jest oficjalnym ilustratorem wielu dzieł Brandona Sandersona, w tym map i grafik dla uniwersum Cosmere.',
		portraitsTitle: 'Portrety postaci',
		portraitsDesc: 'Portrety postaci z Coppermind Wiki na licencji CC BY-NC-ND 4.0.',
		portraitVinMistborn: 'Zrodzona z Mgły',
		portraitVinUrchin: 'Ulicznica',
		portraitKelsier: 'Kelsier',
		portraitSazed: 'Sazed',
		portraitElend: 'Elend',
		portraitMarshInquisitor: 'Inkwizytor',
		portraitMarshKelsier: 'z Kelsierem',
		portraitSpook: 'Spook',
		symbolsTitle: 'Symbole allomantyczne',
		symbolsDesc:
			'Znaczniki lokacji używają allomantycznych symboli metali zaprojektowanych przez Isaaca Stewarta, ze strony Stalowego Alfabetu na Coppermind Wiki.',
		symbolsArtist: 'Isaac Stewart',
		symbolsSource: 'Coppermind Wiki — Stalowy Alfabet',
		symbolsLicense:
			'Użyte w ramach dozwolonego użytku dla tego niekomercyjnego projektu fanowskiego',
		symbolsUsed: 'Symbole użyte na mapie:',
		symbolGold: 'Siedziba Dominacji · Szlachecka twierdza · Majątek szlachecki',
		symbolSteel: 'Miasto · Brama miejska',
		symbolAtium: 'Popiołowa Góra · Pałac',
		symbolTin: 'Punkt orientacyjny · Ważne miejsce',
		symbolPewter: 'Twierdza · Kanał',
		symbolCopper: 'Kryjówka · Kryjówka bandy',
		symbolIron: 'Kopalnia-więzienie',
		symbolBronze: 'Posterunek zaopatrzenia · Kanton',
		symbolLerasium: 'Święte miejsce',
		symbolZinc: 'Osada · Dzielnica',
		symbolBrass: 'Wioska skaa · Kupiec · Plantacja',
		symbolChromium: 'Droga wodna',
		symbolElectrum: 'Region · Plac',
		specialThanksTitle: 'Szczególne podziękowania',
		specialThanksDesc:
			'Ogromne podziękowania dla użytkownika Reddit u/participating i wątku wspólnego czytania Cosmere na r/readalong. Dane o ruchu postaci w tym projekcie zostały częściowo opracowane na podstawie ich streszczeń rozdziałów, połączonych z moimi własnymi notatkami. Wykorzystano za zgodą.',
		specialThanksReddit: 'r/readalong Cosmere Wiki',
		copyrightTitle: 'Informacja o prawach autorskich',
		copyrightTrademark:
			'Mistborn jest zastrzeżonym znakiem towarowym Dragonsteel Entertainment, LLC',
		copyrightMap: 'Grafika mapy © Isaac Stewart',
		copyrightBook: 'Treść książek © Brandon Sanderson',
		closeButton: 'Zamknij',
		artistLabel: 'Artysta:',
		sourceLabel: 'Źródło:',
		originalWorkLabel: 'Oryginalne dzieło:',
		licenseLabel: 'Licencja:',
		versionLabel: 'Wersja',
		roadmapTitle: 'Plan rozwoju',
		roadmapCurrentTag: 'BIEŻĄCY',
		roadmapCurrent: 'Ostatnie Imperium',
		roadmap080: 'Studnia Wstąpienia — oś czasu ukończona',
		roadmap090: 'Bohater Wieków — oś czasu ukończona',
		roadmap100: 'Tajna Historia — oś czasu ukończona',
	},

	skipLinks: {
		nav: 'Przejdź do sekcji',
		toHeader: 'Przejdź do nagłówka',
		toMap: 'Przejdź do mapy',
		toCharacterMenu: 'Przejdź do menu postaci',
		toTimeline: 'Przejdź do osi czasu',
		toAttribution: 'Przejdź do atrybucji',
	},

	data: plData,
};
