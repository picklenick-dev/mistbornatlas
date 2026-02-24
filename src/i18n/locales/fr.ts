import type { Translation } from '../types';
import { frData } from './fr-data';

export const fr: Translation = {
	meta: {
		title: 'Carte interactive de Fils-des-Brumes — Scadrial',
		description:
			'Visualisation chrono-cartographique interactive de la trilogie originale de Fils-des-Brumes de Brandon Sanderson. Suivez les déplacements des personnages à travers Scadrial.',
	},

	header: {
		title: 'ATLAS DES FILS-DES-BRUMES',
		help: 'Aide',
		selectBook: 'Choisir un livre',
		selectMap: 'Choisir la vue de carte',
	},

	map: {
		worldMap: "L'Empire ultime (Monde)",
		cityMaps: 'Plans de villes',
	},

	books: {
		tfe: "L'Empire ultime",
		woa: "Le Puits de l'ascension",
		hoa: 'Le Héros des siècles',
	},

	timeline: {
		reset: 'Revenir au début',
		previous: 'Chapitre précédent',
		play: 'Lancer la lecture',
		pause: 'Mettre en pause',
		next: 'Chapitre suivant',
		chapter: 'Chapitre',
		prologue: 'Prologue',
		epilogue: 'Épilogue',
		exploreCity: 'Explorer',
		exitCity: 'Quitter',
		cityPromptEnter: 'Entrer dans la ville',
		cityPromptStay: 'Rester sur la carte du monde',
		cityPromptDesc:
			'Les personnages sont entrés dans une ville. Souhaitez-vous les suivre dans le plan détaillé ou continuer sur la carte du monde ?',
		exitCityPromptDesc:
			'Les personnages ont quitté cette ville. Souhaitez-vous retourner à la carte du monde pour suivre leur voyage, ou rester dans la vue de la ville ?',
		cityPromptExitBtn: 'Retourner à la carte du monde',
		paused: 'En pause',
		showTimeline: 'Afficher la chronologie',
		hideTimeline: 'Masquer la chronologie',
		label: 'Chronologie',
		returnToWorldMap: 'Retourner à la carte du monde',
	},

	characters: {
		title: 'Personnages',
		showAll: 'Tout afficher (Spoilers)',
		follow: 'Suivre ce personnage',
		following: 'En train de suivre ce personnage',
		notYetIntroduced: 'Pas encore présenté',
		hiddenPlaceholder: '???',
	},

	locations: {
		type: 'Type de lieu',
		dominance: 'Dominance',
		coordinates: 'Coordonnées',
		exploreCity: 'Explorer la ville',
		features: 'Caractéristiques',
	},

	legend: {
		title: 'Légende',
		showLocations: 'Afficher les lieux',
		characters: 'Personnages',
		locations: 'Lieux',
		openLegend: 'Ouvrir la légende',
		closeLegend: 'Fermer la légende',
		cityLandmarks: "Points d'intérêt de la ville",
		explorableCity: 'Ville explorable',
		other: 'Autre',
		characterPosition: 'Position du personnage',
		travelPath: 'Itinéraire de voyage',
	},

	infoPanel: {
		close: 'Fermer le panneau',
		locationType: 'Type de lieu',
		cityPosition: 'Position dans la ville',
	},

	characterMarker: {
		characterEvent: 'Événement du personnage',
		earlier: '← Plus tôt',
		later: 'Plus tard →',
		current: 'Actuel',
		chapterAbbr: 'Ch',
		showLess: 'Voir moins',
		readMore: 'Lire la suite',
		chapter: 'Chapitre',
		season: 'Saison',
		year: 'Année',
		timelinePaused: '⏸ Chronologie en pause',
		continueTimeline: 'Continuer la chronologie',
		cityChoiceDesc: 'Entrer dans la ville ou rester sur la carte ?',
		charactersEntered: 'Les personnages sont entrés à',
		enterCity: 'Entrer dans la ville',
		stayOnMap: 'Rester sur la carte',
		partOf: 'Partie {part}/{total}',
	},

	characterPath: {
		journeyTooltip: ' — voyage',
	},

	cityLandmark: {
		showLess: 'Voir moins',
		readMore: 'Lire la suite',
		locationType: 'Type de lieu',
	},

	cityMap: {
		returnToWorldMap: 'Retourner à la carte du monde',
		worldMap: 'Carte du monde',
	},

	cityPrompt: {
		onWorldMap: 'sur la carte du monde.',
		worldMap: 'Carte du monde',
		timelinePaused: '⏸ Chronologie en pause',
		enteredCity: '',
		viewCityMap: 'Voir le plan de la ville ?',
		enterCity: 'Entrer dans la ville',
		dismiss: 'Ignorer',
		is: 'est',
		are: 'sont',
		has: 'a rejoint',
		have: 'ont rejoint',
	},

	controls: {
		openPanel: 'Ouvrir le panneau de contrôle',
		label: 'Commandes',
		title: 'Commandes',
		closePanel: 'Fermer le panneau',
		secretHistoryTitle:
			"Inclure le contenu de l'Histoire Secrète (déplacements de Kelsier dans le Royaume Cognitif)",
		secretHistoryContent: "Contenu de l'Histoire Secrète",
		ashAndMist: 'Cendres et Brume',
		cityLandmarksNote: 'Les points de la ville sont toujours visibles',
	},

	locationMarker: {
		showLess: 'Voir moins',
		readMore: 'Lire la suite',
		dominance: 'Dominance',
		exploreCity: 'Explorer la ville',
	},

	loading: {
		title: 'ATLAS DES FILS-DES-BRUMES',
		subtitle: 'Chargement du monde de cendres et de brume...',
	},

	common: {
		loading: 'Chargement...',
		error: 'Erreur',
		back: 'Retour',
		worldMap: 'Carte du monde',
		returnToWorldMap: 'Retourner à la carte du monde',
	},

	locationTypes: {
		capital: 'Siège',
		city: 'Ville',
		landmark: 'Point remarquable',
		mystical: 'Lieu sacré',
		ashmount: 'Mont de cendres',
		mine: 'Mine',
		palace: 'Palais',
		keep: 'Manoir',
		district: 'Quartier',
		hideout: 'Cachette',
		stronghold: 'Forteresse',
		region: 'Région',
		plantation: 'Plantation',
		estate: 'Domaine noble',
		town: 'Bourgade',
		village: 'Village skaa',
		river: "Cours d'eau",
		industrial: 'Poste de ravitaillement',
	},

	landmarkTypes: {
		gate: 'Porte',
		keep: 'Manoir',
		palace: 'Palais',
		district: 'Quartier',
		shop: 'Boutique',
		safehouse: 'Planque',
		landmark: 'Point remarquable',
		canal: 'Canal',
		ministry: 'Canton',
		plaza: 'Place',
	},

	dominances: {
		Central: 'Dominance Centrale',
		Northern: 'Dominance du Nord',
		Southern: 'Dominance du Sud',
		Eastern: "Dominance de l'Est",
		Western: "Dominance de l'Ouest",
		Terris: 'Dominance de Terris',
		None: "Au-delà de l'Empire",
	},

	donation: {
		buttonLabel: 'Offrez-moi un café',
		buttonLabelShort: 'Café',
		modalTitle: "Soutenir l'Atlas des Fils-des-brumes",
		modalDesc:
			"L'Atlas des Fils-des-brumes est un projet fan gratuit et open-source, créé et maintenu sur mon temps libre. L'hébergement, le nom de domaine et le développement s'accumulent. Si vous appréciez l'application et souhaitez aider à maintenir les brumes, un petit don fait beaucoup — mais aucune obligation, l'application sera toujours entièrement gratuite !",
		modalButton: 'Offrez-moi un café sur Ko-fi',
		modalDismiss: 'Peut-être plus tard',
		modalDontAsk: 'Ne plus afficher',
		close: 'Fermer',
	},

	headerExtra: {
		world: 'Monde',
		city: 'Ville',
		wipBadge: 'En cours',
		wipTitle: 'Ce qui nous attend',
		wipItem1: 'Relire la trilogie pour vérifier chaque mouvement de personnage sur la chronologie',
		wipItem2: "Vérifier tout le contenu des lieux pour en assurer l'exactitude",
		wipItem3: 'Localisation — support multilingue',
		wipItem4: 'Rendre le projet open-source',
		wipItem5: 'Plus de cartes et contenu Ère 2 (peut-être ?)',
		supportKofi: 'Soutenir sur Ko-fi',
		mapLabel: 'Carte :',
		selectLanguage: 'Choisir la langue',
	},

	about: {
		ariaLabel: 'À propos de cette page',
		title: 'À propos de cette page et attributions',
		buttonLabel: 'À propos',
		buttonSublabel: 'Infos et attributions',
		modalTitle: 'À propos de cette page',
		close: 'Fermer',
		disclaimerTitle: 'Avertissement',
		disclaimerBadge: 'PROJET FAN NON OFFICIEL',
		disclaimerIntro:
			"Ceci est un projet fan non officiel qui n'est ni affilié, ni approuvé, ni lié à :",
		disclaimerBranderson: 'Brandon Sanderson',
		disclaimerDragonsteel: 'Dragonsteel Entertainment',
		disclaimerTor: 'Tor Books / Macmillan Publishers',
		disclaimerIsaac: 'Isaac Stewart',
		disclaimerOutro:
			'Ce projet est créé à des fins éducatives et de divertissement uniquement. Tout le contenu de Fils-des-brumes, y compris les personnages, lieux, intrigues et œuvres artistiques, sont la propriété de leurs détenteurs de droits respectifs.',
		mapAttributionTitle: 'Attribution de la carte',
		mapAttributionDesc:
			"La carte utilisée dans ce projet est la carte officielle de l'Empire ultime par Isaac Stewart, provenant du Coppermind Wiki.",
		mapArtist: 'Isaac Stewart',
		mapSource: 'Coppermind Wiki',
		mapOriginalWork: 'Créée pour la série Fils-des-brumes de Brandon Sanderson',
		mapNote:
			"Isaac Stewart est l'illustrateur officiel de nombreuses œuvres de Brandon Sanderson, y compris les cartes et illustrations de l'univers Cosmere.",
		portraitsTitle: 'Portraits de personnages',
		portraitsDesc:
			'Les portraits de personnages proviennent du Coppermind Wiki sous CC BY-NC-ND 4.0.',
		portraitVinMistborn: 'Fils-des-brumes',
		portraitVinUrchin: 'Gamine des rues',
		portraitKelsier: 'Kelsier',
		portraitSazed: 'Sazed',
		portraitElend: 'Elend',
		portraitMarshInquisitor: 'Inquisiteur',
		portraitMarshKelsier: 'avec Kelsier',
		portraitSpook: 'Spectre',
		symbolsTitle: 'Symboles allomantiques',
		symbolsDesc:
			"Les glyphes des marqueurs de lieu utilisent les symboles des métaux allomantiques conçus par Isaac Stewart, provenant de la page de l'Alphabet d'Acier sur Coppermind Wiki.",
		symbolsArtist: 'Isaac Stewart',
		symbolsSource: "Coppermind Wiki — Alphabet d'Acier",
		symbolsLicense: 'Utilisation équitable pour ce projet fan non commercial',
		symbolsUsed: 'Symboles utilisés sur la carte :',
		symbolGold: 'Siège de Dominance · Manoir noble · Domaine noble',
		symbolSteel: 'Ville · Porte de la ville',
		symbolAtium: 'Mont de cendres · Palais',
		symbolTin: 'Point remarquable · Lieu remarquable',
		symbolPewter: 'Forteresse · Canal',
		symbolCopper: "Refuge · Planque de l'équipe",
		symbolIron: 'Mine-prison',
		symbolBronze: 'Poste de ravitaillement · Canton',
		symbolLerasium: 'Lieu sacré',
		symbolZinc: 'Bourgade · Quartier',
		symbolBrass: 'Village skaa · Marchand · Plantation',
		symbolChromium: "Cours d'eau",
		symbolElectrum: 'Région · Place',
		copyrightTitle: "Avis de droit d'auteur",
		copyrightTrademark: 'Fils-des-brumes est une marque déposée de Dragonsteel Entertainment, LLC',
		copyrightMap: 'Carte © Isaac Stewart',
		copyrightBook: 'Contenu du livre © Brandon Sanderson',
		closeButton: 'Fermer',
		artistLabel: 'Artiste :',
		sourceLabel: 'Source :',
		originalWorkLabel: 'Œuvre originale :',
		licenseLabel: 'Licence :',
		versionLabel: 'Version',
		roadmapTitle: 'Feuille de route',
		roadmapCurrent: "L'Empire Ultime — chronologie complète",
		roadmap080: "Le Puits de l'Ascension — chronologie complète",
		roadmap090: 'Le Héros des Siècles — chronologie complète',
		roadmap100: 'Histoire Secrète — chronologie complète',
	},

	skipLinks: {
		nav: 'Aller à la section',
		toHeader: "Aller à l'en-tête",
		toMap: 'Aller à la carte',
		toCharacterMenu: 'Aller au menu des personnages',
		toTimeline: 'Aller à la chronologie',
		toAttribution: 'Aller aux attributions',
	},

	data: frData,
};
