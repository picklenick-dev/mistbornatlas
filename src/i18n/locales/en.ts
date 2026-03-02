import type { Translation } from '../types';
import { enData } from './en-data';

export const en: Translation = {
	meta: {
		title: 'Mistborn Interactive Map — Scadrial',
		description:
			'Interactive chrono-cartographic visualization of the Mistborn Original Trilogy by Brandon Sanderson. Track character movements across Scadrial.',
	},

	header: {
		title: 'MISTBORN ATLAS',
		help: 'Help',
		selectBook: 'Select book',
		selectMap: 'Select map view',
	},

	map: {
		worldMap: 'Final Empire (World)',
		cityMaps: 'City Maps',
	},

	books: {
		tfe: 'The Final Empire',
		woa: 'The Well of Ascension',
		hoa: 'The Hero of Ages',
	},

	timeline: {
		reset: 'Reset to start',
		previous: 'Previous chapter',
		play: 'Start playback',
		pause: 'Pause playback',
		next: 'Next chapter',
		chapter: 'Chapter',
		prologue: 'Prologue',
		epilogue: 'Epilogue',
		exploreCity: 'Explore',
		exitCity: 'Exit',
		cityPromptEnter: 'Enter City',
		cityPromptStay: 'Stay on World Map',
		cityPromptDesc:
			'Characters have entered a city. Would you like to follow them into the detailed city map, or continue on the world map?',
		exitCityPromptDesc:
			'Characters have left this city. Would you like to return to the world map to follow their journey, or stay in the city view?',
		cityPromptExitBtn: 'Return to World Map',
		paused: 'Paused',
		showTimeline: 'Show timeline',
		hideTimeline: 'Hide timeline',
		label: 'Timeline',
		returnToWorldMap: 'Return to world map',
	},

	characters: {
		title: 'Characters',
		showAll: 'Show All (Spoilers)',
		follow: 'Follow this character',
		following: 'Following this character',
		notYetIntroduced: 'Not yet introduced',
		hiddenPlaceholder: '???',
	},

	locations: {
		type: 'Location Type',
		dominance: 'Dominance',
		coordinates: 'Coordinates',
		exploreCity: 'Explore City',
		features: 'Features',
	},

	legend: {
		title: 'Legend',
		showLocations: 'Show Locations',
		characters: 'Characters',
		locations: 'Locations',
		openLegend: 'Open legend',
		closeLegend: 'Close legend',
		cityLandmarks: 'City Landmarks',
		explorableCity: 'Explorable City',
		other: 'Other',
		characterPosition: 'Character Position',
		travelPath: 'Travel Path',
	},

	infoPanel: {
		close: 'Close panel',
		locationType: 'Location Type',
		cityPosition: 'City Position',
	},

	characterMarker: {
		characterEvent: 'Character Event',
		earlier: '← Earlier',
		later: 'Later →',
		current: 'Current',
		chapterAbbr: 'Ch',
		showLess: 'Show less',
		readMore: 'Read more',
		chapter: 'Chapter',
		season: 'Season',
		year: 'Year',
		timelinePaused: '⏸ Timeline paused',
		continueTimeline: 'Continue Timeline',
		cityChoiceDesc: 'Enter city or stay on world map?',
		charactersEntered: 'Characters entered',
		enterCity: 'Enter City',
		stayOnMap: 'Stay on Map',
		partOf: 'Part {part}/{total}',
		revealSpoiler: 'Tap to reveal',
		readAlongNote: 'Read-along mode enabled',
	},

	characterPath: {
		journeyTooltip: "'s journey",
	},

	cityLandmark: {
		showLess: 'Show less',
		readMore: 'Read more',
		locationType: 'Location Type',
	},

	cityMap: {
		returnToWorldMap: 'Return to World Map',
		worldMap: 'World Map',
	},

	cityPrompt: {
		onWorldMap: 'on the world map.',
		worldMap: 'World Map',
		timelinePaused: '⏸ Timeline paused',
		enteredCity: 'entered',
		viewCityMap: 'View the city map?',
		enterCity: 'Enter City',
		dismiss: 'Dismiss',
		is: 'is',
		are: 'are',
		has: 'has',
		have: 'have',
	},

	controls: {
		openPanel: 'Open controls panel',
		label: 'Controls',
		title: 'Controls',
		closePanel: 'Close panel',
		secretHistoryTitle: "Include Secret History content (Kelsier's Cognitive Realm movements)",
		secretHistoryContent: 'Secret History Content',
		ashAndMist: 'Ash & Mist',
		cityLandmarksNote: 'City landmarks are always visible',
		readAlongMode: 'Read-along Mode',
		readAlongModeTitle: 'Hide movement descriptions until clicked — perfect for reading the book alongside the map',
		statusOn: 'ON',
		statusOff: 'OFF',
	},

	locationMarker: {
		showLess: 'Show less',
		readMore: 'Read more',
		dominance: 'Dominance',
		exploreCity: 'Explore City',
	},

	loading: {
		title: 'MISTBORN ATLAS',
		subtitle: 'Loading the world of ash and mist...',
	},

	common: {
		loading: 'Loading...',
		error: 'Error',
		back: 'Back',
		worldMap: 'World Map',
		returnToWorldMap: 'Return to World Map',
	},

	locationTypes: {
		capital: 'Capital',
		city: 'City',
		landmark: 'Landmark',
		mystical: 'Mystical Site',
		ashmount: 'Ashmount',
		mine: 'Mine',
		palace: 'Palace',
		keep: 'Keep',
		district: 'District',
		hideout: 'Hideout',
		stronghold: 'Stronghold',
		region: 'Region',
		plantation: 'Plantation',
		estate: 'Noble Estate',
		town: 'Settlement',
		village: 'Skaa Village',
		river: 'Waterway',
		industrial: 'Supply Post',
	},

	landmarkTypes: {
		gate: 'Gate',
		keep: 'Keep',
		palace: 'Palace',
		district: 'District',
		shop: 'Shop',
		safehouse: 'Safehouse',
		landmark: 'Landmark',
		canal: 'Canal',
		ministry: 'Ministry Canton',
		plaza: 'Plaza',
	},

	dominances: {
		Central: 'Central Dominance',
		Northern: 'Northern Dominance',
		Southern: 'Southern Dominance',
		Eastern: 'Eastern Dominance',
		Western: 'Western Dominance',
		Terris: 'Terris Dominance',
		None: 'Beyond Empire',
	},

	donation: {
		buttonLabel: 'Buy me a coffee',
		buttonLabelShort: 'Coffee',
		modalTitle: 'Support Mistborn Atlas',
		modalDesc:
			"Mistborn Atlas is a free, open-source fan project built and maintained in my spare time. Hosting, domain costs, and development all add up. If you're enjoying the app and want to help keep the mists flowing, a small donation goes a long way — but no pressure at all, the app will always be completely free!",
		modalButton: 'Buy me a coffee on Ko-fi',
		modalDismiss: 'Maybe later',
		modalDontAsk: "Don't show this again",
		close: 'Close',
	},

	headerExtra: {
		world: 'World',
		city: 'City',
		wipBadge: 'Work in Progress',
		wipTitle: 'What Lays Ahead',
		wipItem1: 'Re-reading the trilogy to verify every character movement on the timeline',
		wipItem2: 'Double-checking & verifying all location content for accuracy',
		wipItem3: 'Localization — multi-language support',
		wipItem4: 'More maps & Era 2 content (perhaps?)',
		supportKofi: 'Support on Ko-fi',
		mapLabel: 'Map:',
		selectLanguage: 'Select language',
	},

	about: {
		ariaLabel: 'About this page',
		title: 'About this page & attributions',
		buttonLabel: 'About',
		buttonSublabel: 'Info & Attributions',
		modalTitle: 'About This Page',
		close: 'Close',
		disclaimerTitle: 'Disclaimer',
		disclaimerBadge: 'UNOFFICIAL FAN PROJECT',
		disclaimerIntro:
			'This is an unofficial fan-made project and is not affiliated with, endorsed by, or connected to:',
		disclaimerBranderson: 'Brandon Sanderson',
		disclaimerDragonsteel: 'Dragonsteel Entertainment',
		disclaimerTor: 'Tor Books / Macmillan Publishers',
		disclaimerIsaac: 'Isaac Stewart',
		disclaimerOutro:
			'This project is created for educational and entertainment purposes only. All Mistborn content, including characters, locations, storylines, and artwork, are the property of their respective copyright holders.',
		mapAttributionTitle: 'Map Attribution',
		mapAttributionDesc:
			"The map used in this project is Isaac Stewart's official Final Empire map, sourced from the Coppermind Wiki.",
		mapArtist: 'Isaac Stewart',
		mapSource: 'Coppermind Wiki',
		mapOriginalWork: "Created for Brandon Sanderson's Mistborn series",
		mapNote:
			"Isaac Stewart is the official illustrator for many of Brandon Sanderson's works, including the maps and artwork for the Cosmere universe.",
		portraitsTitle: 'Character Portraits',
		portraitsDesc:
			'Character portrait artwork sourced from the Coppermind Wiki under CC BY-NC-ND 4.0.',
		portraitVinMistborn: 'Mistborn',
		portraitVinUrchin: 'Street Urchin',
		portraitKelsier: 'Kelsier',
		portraitSazed: 'Sazed',
		portraitElend: 'Elend',
		portraitMarshInquisitor: 'Inquisitor',
		portraitMarshKelsier: 'with Kelsier',
		portraitSpook: 'Spook',
		symbolsTitle: 'Allomantic Symbols',
		symbolsDesc:
			'Location marker glyphs use Allomantic metal symbols designed by Isaac Stewart, sourced from the Steel Alphabet page on the Coppermind Wiki.',
		symbolsArtist: 'Isaac Stewart',
		symbolsSource: 'Coppermind Wiki — Steel Alphabet',
		symbolsLicense: 'Used under fair use for this non-commercial fan project',
		symbolsUsed: 'Symbols used on the map:',
		symbolGold: 'Dominance Seat · Noble Keep · Noble Estate',
		symbolSteel: 'City · City Gate',
		symbolAtium: 'Ashmount · Palace',
		symbolTin: 'Landmark · Notable Site',
		symbolPewter: 'Fortress · Canal',
		symbolCopper: 'Safe Haven · Crew Safehouse',
		symbolIron: 'Prison Mine',
		symbolBronze: 'Supply Post · Canton',
		symbolLerasium: 'Sacred Site',
		symbolZinc: 'Settlement · District',
		symbolBrass: 'Skaa Village · Merchant · Plantation',
		symbolChromium: 'Waterway',
		symbolElectrum: 'Region · Square',
		specialThanksTitle: 'Special Thanks',
		specialThanksDesc:
			'Huge thank you to Reddit user u/participating and the r/readalong Cosmere read-along thread. Character movement data in this project was built in part using their chapter-by-chapter summaries, combined with my own notes. Used with permission.',
		specialThanksReddit: 'r/readalong Cosmere Wiki',
		copyrightTitle: 'Copyright Notice',
		copyrightTrademark: 'Mistborn is a registered trademark of Dragonsteel Entertainment, LLC',
		copyrightMap: 'Map artwork © Isaac Stewart',
		copyrightBook: 'Book content © Brandon Sanderson',
		closeButton: 'Close',
		artistLabel: 'Artist:',
		sourceLabel: 'Source:',
		originalWorkLabel: 'Original Work:',
		licenseLabel: 'License:',
		versionLabel: 'Version',
		roadmapTitle: 'Roadmap',
		roadmapCurrentTag: 'CURRENT',
		roadmapCurrent: 'The Final Empire',
		roadmap080: 'The Well of Ascension — timeline complete',
		roadmap090: 'The Hero of Ages — timeline complete',
		roadmap100: 'Secret History — timeline complete',
	},

	welcome: {
		title: 'Welcome to the Mistborn Interactive Map',
		description:
			'Are you currently reading the Mistborn trilogy? Enable Read-along Mode to explore the map without spoilers.',
		featureMovements: 'Character movements are shown on the map as you progress through each chapter',
		featureTitles: 'Movement titles are always visible so you know what happened',
		featureSummaries: 'Detailed summaries stay hidden until you tap to reveal them',
		enableButton: 'Enable Read-along Mode',
		skipButton: 'No thanks, show everything',
		hint: 'You can always toggle this in the Controls menu on the left.',
	},

	skipLinks: {
		nav: 'Skip to section',
		toHeader: 'Skip to header',
		toMap: 'Skip to map',
		toCharacterMenu: 'Skip to character menu',
		toTimeline: 'Skip to timeline',
		toAttribution: 'Skip to attribution',
	},

	data: enData,
};
