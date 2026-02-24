import type { Translation } from '../types';
import { svData } from './sv-data';

export const sv: Translation = {
	meta: {
		title: 'Interaktiv Mistborn-karta — Scadrial',
		description:
			'Interaktiv kronokartografisk visualisering av Brandon Sandersons ursprungliga Mistborn-trilogi. Följ karaktärernas rörelser genom Scadrial.',
	},

	header: {
		title: 'MISTBORN ATLAS',
		help: 'Hjälp',
		selectBook: 'Välj bok',
		selectMap: 'Välj kartvy',
	},

	map: {
		worldMap: 'Sista riket (Världen)',
		cityMaps: 'Stadskartor',
	},

	books: {
		tfe: 'Sista riket',
		woa: 'Uppstigningens brunn',
		hoa: 'Tidsåldrarnas hjälte',
	},

	timeline: {
		reset: 'Återställ till start',
		previous: 'Föregående kapitel',
		play: 'Starta uppspelning',
		pause: 'Pausa uppspelning',
		next: 'Nästa kapitel',
		chapter: 'Kapitel',
		prologue: 'Prolog',
		epilogue: 'Epilog',
		exploreCity: 'Utforska',
		exitCity: 'Lämna',
		cityPromptEnter: 'Gå in i staden',
		cityPromptStay: 'Stanna på världskartan',
		cityPromptDesc:
			'Karaktärerna har gått in i en stad. Vill du följa dem in på den detaljerade stadskartan, eller stanna kvar på världskartan?',
		exitCityPromptDesc:
			'Karaktärerna har lämnat denna stad. Vill du återvända till världskartan för att följa deras resa, eller stanna i stadsvyn?',
		cityPromptExitBtn: 'Återvänd till världskartan',
		paused: 'Pausad',
		showTimeline: 'Visa tidslinje',
		hideTimeline: 'Dölj tidslinje',
		label: 'Tidslinje',
		returnToWorldMap: 'Återvänd till världskartan',
	},

	characters: {
		title: 'Karaktärer',
		showAll: 'Visa alla (spoilers)',
		follow: 'Följ denna karaktär',
		following: 'Följer denna karaktär',
		notYetIntroduced: 'Ännu ej introducerad',
		hiddenPlaceholder: '???',
	},

	locations: {
		type: 'Platstyp',
		dominance: 'Dominans',
		coordinates: 'Koordinater',
		exploreCity: 'Utforska staden',
		features: 'Egenskaper',
	},

	legend: {
		title: 'Teckenförklaring',
		showLocations: 'Visa platser',
		characters: 'Karaktärer',
		locations: 'Platser',
		openLegend: 'Öppna teckenförklaring',
		closeLegend: 'Stäng teckenförklaring',
		cityLandmarks: 'Stadslandmärken',
		explorableCity: 'Utforskningsbar stad',
		other: 'Övrigt',
		characterPosition: 'Karaktärsposition',
		travelPath: 'Reseväg',
	},

	infoPanel: {
		close: 'Stäng panel',
		locationType: 'Platstyp',
		cityPosition: 'Position i staden',
	},

	characterMarker: {
		characterEvent: 'Karaktärshändelse',
		earlier: '← Tidigare',
		later: 'Senare →',
		current: 'Nuvarande',
		chapterAbbr: 'Kap',
		showLess: 'Visa mindre',
		readMore: 'Läs mer',
		chapter: 'Kapitel',
		season: 'Årstid',
		year: 'År',
		timelinePaused: '⏸ Tidslinje pausad',
		continueTimeline: 'Fortsätt tidslinje',
		cityChoiceDesc: 'Gå in i staden eller stanna på kartan?',
		charactersEntered: 'Karaktärerna gick in i',
		enterCity: 'Gå in i staden',
		stayOnMap: 'Stanna på kartan',
		partOf: 'Del {part}/{total}',
	},

	characterPath: {
		journeyTooltip: 's resa',
	},

	cityLandmark: {
		showLess: 'Visa mindre',
		readMore: 'Läs mer',
		locationType: 'Platstyp',
	},

	cityMap: {
		returnToWorldMap: 'Återvänd till världskartan',
		worldMap: 'Världskarta',
	},

	cityPrompt: {
		onWorldMap: 'på världskartan.',
		worldMap: 'Världskarta',
		timelinePaused: '⏸ Tidslinje pausad',
		enteredCity: 'gått in i',
		viewCityMap: 'Visa stadskartan?',
		enterCity: 'Gå in i staden',
		dismiss: 'Avfärda',
		is: 'är',
		are: 'är',
		has: 'har',
		have: 'har',
	},

	controls: {
		openPanel: 'Öppna kontrollpanel',
		label: 'Kontroller',
		title: 'Kontroller',
		closePanel: 'Stäng panel',
		secretHistoryTitle: 'Inkludera Secret History-innehåll (Kelsiers rörelser i Kognitiva riket)',
		secretHistoryContent: 'Secret History-innehåll',
		ashAndMist: 'Aska och dimma',
		cityLandmarksNote: 'Stadslandmärken visas alltid',
	},

	locationMarker: {
		showLess: 'Visa mindre',
		readMore: 'Läs mer',
		dominance: 'Dominans',
		exploreCity: 'Utforska staden',
	},

	loading: {
		title: 'MISTBORN ATLAS',
		subtitle: 'Laddar askans och dimmans värld...',
	},

	common: {
		loading: 'Laddar...',
		error: 'Fel',
		back: 'Tillbaka',
		worldMap: 'Världskarta',
		returnToWorldMap: 'Återvänd till världskartan',
	},

	locationTypes: {
		capital: 'Huvudstad',
		city: 'Stad',
		landmark: 'Landmärke',
		mystical: 'Helig plats',
		ashmount: 'Askberg',
		mine: 'Gruva',
		palace: 'Palats',
		keep: 'Borg',
		district: 'Distrikt',
		hideout: 'Gömställe',
		stronghold: 'Fästning',
		region: 'Region',
		plantation: 'Plantage',
		estate: 'Adelsgods',
		town: 'Samhälle',
		village: 'Skaa-by',
		river: 'Vattenväg',
		industrial: 'Förrådspost',
	},

	landmarkTypes: {
		gate: 'Port',
		keep: 'Borg',
		palace: 'Palats',
		district: 'Kvarter',
		shop: 'Handlare',
		safehouse: 'Gömställe',
		landmark: 'Landmärke',
		canal: 'Kanal',
		ministry: 'Kanton',
		plaza: 'Torg',
	},

	dominances: {
		Central: 'Centrala dominansen',
		Northern: 'Norra dominansen',
		Southern: 'Södra dominansen',
		Eastern: 'Östra dominansen',
		Western: 'Västra dominansen',
		Terris: 'Terrisdominansen',
		None: 'Utanför imperiet',
	},

	donation: {
		buttonLabel: 'Köp mig en kaffe',
		buttonLabelShort: 'Kaffe',
		modalTitle: 'Stöd Mistborn Atlas',
		modalDesc:
			'Mistborn Atlas är ett gratis fanprojekt med öppen källkod, byggt och underhållet på min fritid. Hosting, domänkostnader och utveckling kostar. Om du gillar appen och vill hjälpa till, gör en liten donation stor skillnad — men ingen press, appen förblir alltid helt gratis!',
		modalButton: 'Köp mig en kaffe på Ko-fi',
		modalDismiss: 'Kanske senare',
		modalDontAsk: 'Visa inte detta igen',
		close: 'Stäng',
	},

	headerExtra: {
		world: 'Världen',
		city: 'Staden',
		wipBadge: 'Pågående arbete',
		wipTitle: 'Vad som kommer',
		wipItem1: 'Omläsning av trilogin för att verifiera varje karaktärsrörelse på tidslinjen',
		wipItem2: 'Dubbelkontroll av allt platsmaterial för korrekthet',
		wipItem3: 'Lokalisering — flerspråksstöd',
		wipItem4: 'Fler kartor och Era 2-innehåll (kanske?)',
		supportKofi: 'Stöd på Ko-fi',
		mapLabel: 'Karta:',
		selectLanguage: 'Välj språk',
	},

	about: {
		ariaLabel: 'Om denna sida',
		title: 'Om denna sida och erkännanden',
		buttonLabel: 'Om',
		buttonSublabel: 'Info och erkännanden',
		modalTitle: 'Om denna sida',
		close: 'Stäng',
		disclaimerTitle: 'Friskrivning',
		disclaimerBadge: 'INOFFICIELLT FANPROJEKT',
		disclaimerIntro:
			'Detta är ett inofficiellt fanprojekt och är inte anslutet till, godkänt av eller kopplat till:',
		disclaimerBranderson: 'Brandon Sanderson',
		disclaimerDragonsteel: 'Dragonsteel Entertainment',
		disclaimerTor: 'Tor Books / Macmillan Publishers',
		disclaimerIsaac: 'Isaac Stewart',
		disclaimerOutro:
			'Detta projekt är skapat enbart i utbildnings- och underhållningssyfte. Allt Mistborn-innehåll, inklusive karaktärer, platser, handlingar och konstverk, tillhör respektive upphovsrättsinnehavare.',
		mapAttributionTitle: 'Karterkännande',
		mapAttributionDesc:
			'Kartan som används i detta projekt är Isaac Stewarts officiella karta över Sista riket, hämtad från Coppermind Wiki.',
		mapArtist: 'Isaac Stewart',
		mapSource: 'Coppermind Wiki',
		mapOriginalWork: 'Skapad för Brandon Sandersons Mistborn-serie',
		mapNote:
			'Isaac Stewart är den officiella illustratören för många av Brandon Sandersons verk, inklusive kartor och konstverk för Cosmere-universumet.',
		portraitsTitle: 'Karaktärsporträtt',
		portraitsDesc: 'Karaktärsporträtt från Coppermind Wiki under CC BY-NC-ND 4.0.',
		portraitVinMistborn: 'Dimfödd',
		portraitVinUrchin: 'Gatflicka',
		portraitKelsier: 'Kelsier',
		portraitSazed: 'Sazed',
		portraitElend: 'Elend',
		portraitMarshInquisitor: 'Inkvisitor',
		portraitMarshKelsier: 'med Kelsier',
		portraitSpook: 'Spook',
		symbolsTitle: 'Allomantiska symboler',
		symbolsDesc:
			'Platsmarkeringar använder allomantiska metallsymboler designade av Isaac Stewart, hämtade från Stålalfabetets sida på Coppermind Wiki.',
		symbolsArtist: 'Isaac Stewart',
		symbolsSource: 'Coppermind Wiki — Stålalfabetet',
		symbolsLicense: 'Används under fair use för detta icke-kommersiella fanprojekt',
		symbolsUsed: 'Symboler som används på kartan:',
		symbolGold: 'Dominansens säte · Adelsborg · Adelsgods',
		symbolSteel: 'Stad · Stadsport',
		symbolAtium: 'Askberg · Palats',
		symbolTin: 'Landmärke · Sevärdhet',
		symbolPewter: 'Fäste · Kanal',
		symbolCopper: 'Gömställe · Säker plats',
		symbolIron: 'Fängelsegruva',
		symbolBronze: 'Förrådspost · Ministerium',
		symbolLerasium: 'Helig plats',
		symbolZinc: 'Samhälle · Kvarter',
		symbolBrass: 'Skaa-by · Handlare · Plantage',
		symbolChromium: 'Vattenväg',
		symbolElectrum: 'Region · Torg',
		copyrightTitle: 'Upphovsrättsmeddelande',
		copyrightTrademark:
			'Mistborn är ett registrerat varumärke tillhörande Dragonsteel Entertainment, LLC',
		copyrightMap: 'Kartmaterial © Isaac Stewart',
		copyrightBook: 'Bokinnehåll © Brandon Sanderson',
		closeButton: 'Stäng',
		artistLabel: 'Konstnär:',
		sourceLabel: 'Källa:',
		originalWorkLabel: 'Originalverk:',
		licenseLabel: 'Licens:',
		versionLabel: 'Version',
		roadmapTitle: 'Färdplan',
		roadmapCurrentTag: 'NUVARANDE',
		roadmapCurrent: 'Det Sista Imperiet',
		roadmap080: 'Uppstigningens Brunn — tidslinje klar',
		roadmap090: 'Evighetens Hjälte — tidslinje klar',
		roadmap100: 'Hemlig Historia — tidslinje klar',
	},

	skipLinks: {
		nav: 'Hoppa till avsnitt',
		toHeader: 'Hoppa till sidhuvud',
		toMap: 'Hoppa till kartan',
		toCharacterMenu: 'Hoppa till karaktärsmenyn',
		toTimeline: 'Hoppa till tidslinjen',
		toAttribution: 'Hoppa till attribution',
	},

	data: svData,
};
