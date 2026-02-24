import type { Translation } from '../types';
import { esData } from './es-data';

export const es: Translation = {
	meta: {
		title: 'Mapa interactivo de Nacidos de la Bruma — Scadrial',
		description:
			'Visualización crono-cartográfica interactiva de la trilogía original de Nacidos de la Bruma de Brandon Sanderson. Sigue los movimientos de los personajes por Scadrial.',
	},

	header: {
		title: 'ATLAS NACIDOS DE LA BRUMA',
		help: 'Ayuda',
		selectBook: 'Seleccionar libro',
		selectMap: 'Seleccionar vista de mapa',
	},

	map: {
		worldMap: 'El Imperio Final (Mundo)',
		cityMaps: 'Mapas de ciudades',
	},

	books: {
		tfe: 'El Imperio Final',
		woa: 'El Pozo de la Ascensión',
		hoa: 'El Héroe de las Eras',
	},

	timeline: {
		reset: 'Reiniciar al principio',
		previous: 'Capítulo anterior',
		play: 'Iniciar reproducción',
		pause: 'Pausar reproducción',
		next: 'Siguiente capítulo',
		chapter: 'Capítulo',
		prologue: 'Prólogo',
		epilogue: 'Epílogo',
		exploreCity: 'Explorar',
		exitCity: 'Salir',
		cityPromptEnter: 'Entrar en la ciudad',
		cityPromptStay: 'Quedarse en el mapa mundial',
		cityPromptDesc:
			'Los personajes han entrado en una ciudad. ¿Quieres seguirlos al mapa detallado de la ciudad o continuar en el mapa mundial?',
		exitCityPromptDesc:
			'Los personajes han abandonado esta ciudad. ¿Quieres volver al mapa mundial para seguir su viaje o quedarte en la vista de la ciudad?',
		cityPromptExitBtn: 'Volver al mapa mundial',
		paused: 'En pausa',
		showTimeline: 'Mostrar línea temporal',
		hideTimeline: 'Ocultar línea temporal',
		label: 'Línea temporal',
		returnToWorldMap: 'Volver al mapa mundial',
	},

	characters: {
		title: 'Personajes',
		showAll: 'Mostrar todo (Spoilers)',
		follow: 'Seguir a este personaje',
		following: 'Siguiendo a este personaje',
		notYetIntroduced: 'Aún no presentado',
		hiddenPlaceholder: '???',
	},

	locations: {
		type: 'Tipo de ubicación',
		dominance: 'Dominación',
		coordinates: 'Coordenadas',
		exploreCity: 'Explorar ciudad',
		features: 'Características',
	},

	legend: {
		title: 'Leyenda',
		showLocations: 'Mostrar ubicaciones',
		characters: 'Personajes',
		locations: 'Ubicaciones',
		openLegend: 'Abrir leyenda',
		closeLegend: 'Cerrar leyenda',
		cityLandmarks: 'Puntos de interés de la ciudad',
		explorableCity: 'Ciudad explorable',
		other: 'Otros',
		characterPosition: 'Posición del personaje',
		travelPath: 'Ruta de viaje',
	},

	infoPanel: {
		close: 'Cerrar panel',
		locationType: 'Tipo de ubicación',
		cityPosition: 'Posición en la ciudad',
	},

	characterMarker: {
		characterEvent: 'Evento del personaje',
		earlier: '← Anterior',
		later: 'Posterior →',
		current: 'Actual',
		chapterAbbr: 'Cap',
		showLess: 'Mostrar menos',
		readMore: 'Leer más',
		chapter: 'Capítulo',
		season: 'Estación',
		year: 'Año',
		timelinePaused: '⏸ Línea temporal en pausa',
		continueTimeline: 'Continuar línea temporal',
		cityChoiceDesc: '¿Entrar en la ciudad o quedarse en el mapa?',
		charactersEntered: 'Los personajes entraron en',
		enterCity: 'Entrar en la ciudad',
		stayOnMap: 'Quedarse en el mapa',
		partOf: 'Parte {part}/{total}',
	},

	characterPath: {
		journeyTooltip: ' — viaje',
	},

	cityLandmark: {
		showLess: 'Mostrar menos',
		readMore: 'Leer más',
		locationType: 'Tipo de ubicación',
	},

	cityMap: {
		returnToWorldMap: 'Volver al mapa mundial',
		worldMap: 'Mapa mundial',
	},

	cityPrompt: {
		onWorldMap: 'en el mapa mundial.',
		worldMap: 'Mapa mundial',
		timelinePaused: '⏸ Línea temporal en pausa',
		enteredCity: 'entrado en',
		viewCityMap: '¿Ver el mapa de la ciudad?',
		enterCity: 'Entrar en la ciudad',
		dismiss: 'Descartar',
		is: 'está',
		are: 'están',
		has: 'ha',
		have: 'han',
	},

	controls: {
		openPanel: 'Abrir panel de controles',
		label: 'Controles',
		title: 'Controles',
		closePanel: 'Cerrar panel',
		secretHistoryTitle:
			'Incluir contenido de Historia Secreta (movimientos de Kelsier en el Reino Cognitivo)',
		secretHistoryContent: 'Contenido de Historia Secreta',
		ashAndMist: 'Ceniza y Bruma',
		cityLandmarksNote: 'Los puntos de la ciudad siempre son visibles',
	},

	locationMarker: {
		showLess: 'Mostrar menos',
		readMore: 'Leer más',
		dominance: 'Dominación',
		exploreCity: 'Explorar ciudad',
	},

	loading: {
		title: 'ATLAS NACIDOS DE LA BRUMA',
		subtitle: 'Cargando el mundo de ceniza y bruma...',
	},

	common: {
		loading: 'Cargando...',
		error: 'Error',
		back: 'Atrás',
		worldMap: 'Mapa mundial',
		returnToWorldMap: 'Volver al mapa mundial',
	},

	locationTypes: {
		capital: 'Sede',
		city: 'Ciudad',
		landmark: 'Punto de interés',
		mystical: 'Lugar sagrado',
		ashmount: 'Monte de ceniza',
		mine: 'Mina',
		palace: 'Palacio',
		keep: 'Torreón',
		district: 'Distrito',
		hideout: 'Escondite',
		stronghold: 'Fortaleza',
		region: 'Región',
		plantation: 'Plantación',
		estate: 'Propiedad noble',
		town: 'Asentamiento',
		village: 'Aldea skaa',
		river: 'Canal/Río',
		industrial: 'Puesto de suministros',
	},

	landmarkTypes: {
		gate: 'Puerta',
		keep: 'Torreón',
		palace: 'Palacio',
		district: 'Barrio',
		shop: 'Tienda',
		safehouse: 'Refugio',
		landmark: 'Punto de interés',
		canal: 'Canal',
		ministry: 'Cantón',
		plaza: 'Plaza',
	},

	dominances: {
		Central: 'Dominación Central',
		Northern: 'Dominación del Norte',
		Southern: 'Dominación del Sur',
		Eastern: 'Dominación del Este',
		Western: 'Dominación del Oeste',
		Terris: 'Dominación de Terris',
		None: 'Más allá del Imperio',
	},

	donation: {
		buttonLabel: 'Invítame a un café',
		buttonLabelShort: 'Café',
		modalTitle: 'Apoya el Atlas de los Nacidos de la bruma',
		modalDesc:
			'El Atlas de los Nacidos de la bruma es un proyecto fan gratuito y de código abierto, construido y mantenido en mi tiempo libre. El alojamiento, los costes de dominio y el desarrollo se acumulan. Si disfrutas de la aplicación y quieres ayudar a mantener la bruma fluyendo, una pequeña donación ayuda mucho — ¡pero sin presión, la aplicación siempre será completamente gratuita!',
		modalButton: 'Invítame a un café en Ko-fi',
		modalDismiss: 'Quizás más tarde',
		modalDontAsk: 'No volver a mostrar',
		close: 'Cerrar',
	},

	headerExtra: {
		world: 'Mundo',
		city: 'Ciudad',
		wipBadge: 'En progreso',
		wipTitle: 'Lo que viene',
		wipItem1: 'Releer la trilogía para verificar cada movimiento de personaje en la línea temporal',
		wipItem2: 'Verificar y comprobar todo el contenido de ubicaciones',
		wipItem3: 'Localización — soporte multilingüe',
		wipItem4: 'Más mapas y contenido de Era 2 (¿quizás?)',
		supportKofi: 'Apoyar en Ko-fi',
		mapLabel: 'Mapa:',
		selectLanguage: 'Seleccionar idioma',
	},

	about: {
		ariaLabel: 'Acerca de esta página',
		title: 'Acerca de esta página y atribuciones',
		buttonLabel: 'Acerca de',
		buttonSublabel: 'Información y atribuciones',
		modalTitle: 'Acerca de esta página',
		close: 'Cerrar',
		disclaimerTitle: 'Aviso legal',
		disclaimerBadge: 'PROYECTO FAN NO OFICIAL',
		disclaimerIntro:
			'Este es un proyecto no oficial hecho por fans y no está afiliado, respaldado ni conectado con:',
		disclaimerBranderson: 'Brandon Sanderson',
		disclaimerDragonsteel: 'Dragonsteel Entertainment',
		disclaimerTor: 'Tor Books / Macmillan Publishers',
		disclaimerIsaac: 'Isaac Stewart',
		disclaimerOutro:
			'Este proyecto se ha creado únicamente con fines educativos y de entretenimiento. Todo el contenido de Nacidos de la bruma, incluidos los personajes, ubicaciones, tramas y obras de arte, son propiedad de sus respectivos titulares de derechos de autor.',
		mapAttributionTitle: 'Atribución del mapa',
		mapAttributionDesc:
			'El mapa utilizado en este proyecto es el mapa oficial del Imperio Final de Isaac Stewart, obtenido de Coppermind Wiki.',
		mapArtist: 'Isaac Stewart',
		mapSource: 'Coppermind Wiki',
		mapOriginalWork: 'Creado para la serie Nacidos de la bruma de Brandon Sanderson',
		mapNote:
			'Isaac Stewart es el ilustrador oficial de muchas obras de Brandon Sanderson, incluidos los mapas y obras de arte del universo Cosmere.',
		portraitsTitle: 'Retratos de personajes',
		portraitsDesc: 'Los retratos de personajes provienen de Coppermind Wiki bajo CC BY-NC-ND 4.0.',
		portraitVinMistborn: 'Nacida de la bruma',
		portraitVinUrchin: 'Golfilla callejera',
		portraitKelsier: 'Kelsier',
		portraitSazed: 'Sazed',
		portraitElend: 'Elend',
		portraitMarshInquisitor: 'Inquisidor',
		portraitMarshKelsier: 'con Kelsier',
		portraitSpook: 'Fantasma',
		symbolsTitle: 'Símbolos alománticos',
		symbolsDesc:
			'Los glifos de los marcadores de ubicación utilizan símbolos de metales alománticos diseñados por Isaac Stewart, obtenidos de la página del Alfabeto de Acero en Coppermind Wiki.',
		symbolsArtist: 'Isaac Stewart',
		symbolsSource: 'Coppermind Wiki — Alfabeto de Acero',
		symbolsLicense: 'Uso justo para este proyecto fan no comercial',
		symbolsUsed: 'Símbolos utilizados en el mapa:',
		symbolGold: 'Sede del Dominio · Torreón noble · Propiedad noble',
		symbolSteel: 'Ciudad · Puerta de la ciudad',
		symbolAtium: 'Monte de ceniza · Palacio',
		symbolTin: 'Punto de interés · Sitio notable',
		symbolPewter: 'Fortaleza · Canal',
		symbolCopper: 'Refugio seguro · Guarida de la banda',
		symbolIron: 'Mina-prisión',
		symbolBronze: 'Puesto de suministros · Cantón',
		symbolLerasium: 'Lugar sagrado',
		symbolZinc: 'Asentamiento · Barrio',
		symbolBrass: 'Aldea skaa · Comerciante · Plantación',
		symbolChromium: 'Canal/Río',
		symbolElectrum: 'Dominio · Plaza',
		copyrightTitle: 'Aviso de derechos de autor',
		copyrightTrademark:
			'Nacidos de la bruma es una marca registrada de Dragonsteel Entertainment, LLC',
		copyrightMap: 'Mapa © Isaac Stewart',
		copyrightBook: 'Contenido del libro © Brandon Sanderson',
		closeButton: 'Cerrar',
		artistLabel: 'Artista:',
		sourceLabel: 'Fuente:',
		originalWorkLabel: 'Obra original:',
		licenseLabel: 'Licencia:',
		versionLabel: 'Versión',
		roadmapTitle: 'Hoja de ruta',
		roadmapCurrentTag: 'ACTUAL',
		roadmapCurrent: 'El Imperio Final',
		roadmap080: 'El Pozo de la Ascensión — línea temporal completa',
		roadmap090: 'El Héroe de las Eras — línea temporal completa',
		roadmap100: 'Historia Secreta — línea temporal completa',
	},

	skipLinks: {
		nav: 'Saltar a la sección',
		toHeader: 'Saltar al encabezado',
		toMap: 'Saltar al mapa',
		toCharacterMenu: 'Saltar al menú de personajes',
		toTimeline: 'Saltar a la línea de tiempo',
		toAttribution: 'Saltar a la atribución',
	},

	data: esData,
};
