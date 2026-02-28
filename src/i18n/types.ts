// Supported languages
export type LanguageCode =
	| 'en' // English
	| 'zh' // Mandarin Chinese
	| 'es' // Spanish
	| 'fr' // French
	| 'ar' // Arabic
	| 'pt' // Portuguese
	| 'ru' // Russian
	| 'ja' // Japanese
	| 'sv' // Swedish
	| 'de' // German
	| 'pl'; // Polish
// | 'no' // Norwegian
// | 'da'; // Danish

export interface LanguageInfo {
	code: LanguageCode;
	name: string;
	nativeName: string;
}

export interface TranslationKeys {
	// Meta / SEO
	meta: {
		title: string;
		description: string;
	};

	// Header
	header: {
		title: string;
		help: string;
		selectBook: string;
		selectMap: string;
	};

	// Map selector
	map: {
		worldMap: string;
		cityMaps: string;
	};

	// Books
	books: {
		tfe: string;
		woa: string;
		hoa: string;
	};

	// Timeline
	timeline: {
		reset: string;
		previous: string;
		play: string;
		pause: string;
		next: string;
		chapter: string;
		prologue: string;
		epilogue: string;
		exploreCity: string;
		exitCity: string;
		cityPromptEnter: string;
		cityPromptStay: string;
		cityPromptDesc: string;
		exitCityPromptDesc: string;
		cityPromptExitBtn: string;
		paused: string;
		showTimeline: string;
		hideTimeline: string;
		label: string;
		returnToWorldMap: string;
	};

	// Character filters
	characters: {
		title: string;
		showAll: string;
		follow: string;
		following: string;
		notYetIntroduced: string;
		hiddenPlaceholder: string;
	};

	// Locations
	locations: {
		type: string;
		dominance: string;
		coordinates: string;
		exploreCity: string;
		features: string;
	};

	// Legend
	legend: {
		title: string;
		showLocations: string;
		characters: string;
		locations: string;
		openLegend: string;
		closeLegend: string;
		cityLandmarks: string;
		explorableCity: string;
		other: string;
		characterPosition: string;
		travelPath: string;
	};

	// Info panel
	infoPanel: {
		close: string;
		locationType: string;
		cityPosition: string;
	};

	// Character marker popup
	characterMarker: {
		characterEvent: string;
		earlier: string;
		later: string;
		current: string;
		chapterAbbr: string;
		showLess: string;
		readMore: string;
		chapter: string;
		season: string;
		year: string;
		timelinePaused: string;
		continueTimeline: string;
		cityChoiceDesc: string;
		charactersEntered: string;
		enterCity: string;
		stayOnMap: string;
		partOf: string;
		revealSpoiler: string;
		readAlongNote: string;
	};

	// Character path
	characterPath: {
		journeyTooltip: string;
	};

	// City landmark marker
	cityLandmark: {
		showLess: string;
		readMore: string;
		locationType: string;
	};

	// City map container
	cityMap: {
		returnToWorldMap: string;
		worldMap: string;
	};

	// City prompt
	cityPrompt: {
		onWorldMap: string;
		worldMap: string;
		timelinePaused: string;
		enteredCity: string;
		viewCityMap: string;
		enterCity: string;
		dismiss: string;
		is: string;
		are: string;
		has: string;
		have: string;
	};

	// Controls panel
	controls: {
		openPanel: string;
		label: string;
		title: string;
		closePanel: string;
		secretHistoryTitle: string;
		secretHistoryContent: string;
		ashAndMist: string;
		cityLandmarksNote: string;
		readAlongMode: string;
		readAlongModeTitle: string;
		statusOn: string;
		statusOff: string;
	};

	// Location marker popup
	locationMarker: {
		showLess: string;
		readMore: string;
		dominance: string;
		exploreCity: string;
	};

	// Loading
	loading: {
		title: string;
		subtitle: string;
	};

	// Common
	common: {
		loading: string;
		error: string;
		back: string;
		worldMap: string;
		returnToWorldMap: string;
	};

	// Location types
	locationTypes: {
		capital: string;
		city: string;
		landmark: string;
		mystical: string;
		ashmount: string;
		mine: string;
		palace: string;
		keep: string;
		district: string;
		hideout: string;
		stronghold: string;
		region: string;
		plantation: string;
		estate: string;
		town: string;
		village: string;
		river: string;
		industrial: string;
	};

	// City landmark types
	landmarkTypes: {
		gate: string;
		keep: string;
		palace: string;
		district: string;
		shop: string;
		safehouse: string;
		landmark: string;
		canal: string;
		ministry: string;
		plaza: string;
	};

	// Dominances
	dominances: {
		Central: string;
		Northern: string;
		Southern: string;
		Eastern: string;
		Western: string;
		Terris: string;
		None: string;
	};

	// Donation
	donation: {
		buttonLabel: string;
		buttonLabelShort: string;
		modalTitle: string;
		modalDesc: string;
		modalButton: string;
		modalDismiss: string;
		modalDontAsk: string;
		close: string;
	};

	// Header extras
	headerExtra: {
		world: string;
		city: string;
		wipBadge: string;
		wipTitle: string;
		wipItem1: string;
		wipItem2: string;
		wipItem3: string;
		wipItem4: string;
		supportKofi: string;
		mapLabel: string;
		selectLanguage: string;
	};

	// About modal
	about: {
		ariaLabel: string;
		title: string;
		buttonLabel: string;
		buttonSublabel: string;
		modalTitle: string;
		close: string;
		disclaimerTitle: string;
		disclaimerBadge: string;
		disclaimerIntro: string;
		disclaimerBranderson: string;
		disclaimerDragonsteel: string;
		disclaimerTor: string;
		disclaimerIsaac: string;
		disclaimerOutro: string;
		mapAttributionTitle: string;
		mapAttributionDesc: string;
		mapArtist: string;
		mapSource: string;
		mapOriginalWork: string;
		mapNote: string;
		portraitsTitle: string;
		portraitsDesc: string;
		portraitVinMistborn: string;
		portraitVinUrchin: string;
		portraitKelsier: string;
		portraitSazed: string;
		portraitElend: string;
		portraitMarshInquisitor: string;
		portraitMarshKelsier: string;
		portraitSpook: string;
		symbolsTitle: string;
		symbolsDesc: string;
		symbolsArtist: string;
		symbolsSource: string;
		symbolsLicense: string;
		symbolsUsed: string;
		symbolGold: string;
		symbolSteel: string;
		symbolAtium: string;
		symbolTin: string;
		symbolPewter: string;
		symbolCopper: string;
		symbolIron: string;
		symbolBronze: string;
		symbolLerasium: string;
		symbolZinc: string;
		symbolBrass: string;
		symbolChromium: string;
		symbolElectrum: string;
		copyrightTitle: string;
		copyrightTrademark: string;
		copyrightMap: string;
		copyrightBook: string;
		closeButton: string;
		artistLabel: string;
		sourceLabel: string;
		originalWorkLabel: string;
		licenseLabel: string;
		versionLabel: string;
		roadmapTitle: string;
		roadmapCurrentTag: string;
		roadmapCurrent: string;
		roadmap080: string;
		roadmap090: string;
		roadmap100: string;
	};

	// Skip navigation links
	skipLinks: {
		nav: string;
		toHeader: string;
		toMap: string;
		toCharacterMenu: string;
		toTimeline: string;
		toAttribution: string;
	};

	// Data translations (proper nouns, narrative content from JSON data files)
	data: DataTranslations;
}

// Confidence levels for translation entries
// 'verified' = confirmed from official published translation
// 'probable' = from a reliable secondary source (wiki, fan forum) but not personally verified
// 'unconfirmed' = best guess / needs verification
export type TranslationConfidence = 'verified' | 'probable' | 'unconfirmed';

// Wrapper that adds optional confidence tracking to any translated value
export type Confident<T> = T & { confidence?: TranslationConfidence };

// Data translation sub-types (proper nouns, narrative content from JSON data files)
export interface DataCharacterTranslation {
	name: string;
	title: string;
	description: string;
	titleProgression: Record<string, string>;
	secretHistoryTitles?: Record<string, string>;
	confidence?: TranslationConfidence;
	/** Per-field confidence when fields have different confidence levels */
	fieldConfidence?: Partial<Record<'name' | 'title' | 'description', TranslationConfidence>>;
	titleProgressionConfidence?: Record<string, TranslationConfidence>;
}

export interface DataTranslations {
	books: Record<string, Confident<{ title: string; year: string }>>;
	characters: Record<string, DataCharacterTranslation>;
	locations: Record<
		string,
		Confident<{
			name: string;
			description: string;
			placementNote?: string;
		}>
	>;
	cities: Record<
		string,
		Confident<{
			name: string;
			description: string;
		}>
	>;
	cityLandmarks: Record<
		string,
		Record<
			string,
			Confident<{
				name: string;
				description: string;
			}>
		>
	>;

	movements: Record<
		string,
		Record<
			string,
			Confident<{
				title: string;
				description: string;
				season: string;
				year: string;
			}>
		>
	>;
	markerLabels: Record<string, string>;
	cityMarkerLabels: Record<string, string>;
	/** Overall confidence markers for marker labels */
	markerLabelsConfidence?: Record<string, TranslationConfidence>;
	cityMarkerLabelsConfidence?: Record<string, TranslationConfidence>;
}

export type Translation = TranslationKeys;
