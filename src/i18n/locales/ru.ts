import type { Translation } from '../types';
import { ruData } from './ru-data';

export const ru: Translation = {
	meta: {
		title: 'Интерактивная карта «Рождённых туманом» — Скадриал',
		description:
			'Интерактивная хроно-картографическая визуализация оригинальной трилогии «Рождённые туманом» Брэндона Сандерсона. Отслеживайте передвижения персонажей по Скадриалу.',
	},

	header: {
		title: 'АТЛАС РОЖДЁННЫХ ТУМАНОМ',
		help: 'Помощь',
		selectBook: 'Выбрать книгу',
		selectMap: 'Выбрать вид карты',
	},

	map: {
		worldMap: 'Последняя Империя (Мир)',
		cityMaps: 'Карты городов',
	},

	books: {
		tfe: 'Пепел и сталь',
		woa: 'Источник Вознесения',
		hoa: 'Герой Веков',
	},

	timeline: {
		reset: 'В начало',
		previous: 'Предыдущая глава',
		play: 'Воспроизвести',
		pause: 'Пауза',
		next: 'Следующая глава',
		chapter: 'Глава',
		prologue: 'Пролог',
		epilogue: 'Эпилог',
		exploreCity: 'Исследовать',
		exitCity: 'Выйти',
		cityPromptEnter: 'Войти в город',
		cityPromptStay: 'Остаться на карте мира',
		cityPromptDesc:
			'Персонажи вошли в город. Хотите последовать за ними на детальную карту города или остаться на карте мира?',
		exitCityPromptDesc:
			'Персонажи покинули этот город. Хотите вернуться на карту мира, чтобы следить за их путешествием, или остаться на карте города?',
		cityPromptExitBtn: 'Вернуться на карту мира',
		paused: 'Пауза',
		showTimeline: 'Показать хронологию',
		hideTimeline: 'Скрыть хронологию',
		label: 'Хронология',
		returnToWorldMap: 'Вернуться на карту мира',
	},

	characters: {
		title: 'Персонажи',
		showAll: 'Показать всё (Спойлеры)',
		follow: 'Следить за персонажем',
		following: 'Следим за персонажем',
		notYetIntroduced: 'Ещё не появился',
		hiddenPlaceholder: '???',
	},

	locations: {
		type: 'Тип места',
		dominance: 'Доминион',
		coordinates: 'Координаты',
		exploreCity: 'Исследовать город',
		features: 'Особенности',
	},

	legend: {
		title: 'Легенда',
		showLocations: 'Показать места',
		characters: 'Персонажи',
		locations: 'Места',
		openLegend: 'Открыть легенду',
		closeLegend: 'Закрыть легенду',
		cityLandmarks: 'Достопримечательности города',
		explorableCity: 'Город для исследования',
		other: 'Прочее',
		characterPosition: 'Позиция персонажа',
		travelPath: 'Маршрут путешествия',
	},

	infoPanel: {
		close: 'Закрыть панель',
		locationType: 'Тип места',
		cityPosition: 'Позиция в городе',
	},

	characterMarker: {
		characterEvent: 'Событие персонажа',
		earlier: 'Ранее',
		later: 'Позже',
		current: 'Текущее',
		chapterAbbr: 'Гл',
		showLess: 'Свернуть',
		readMore: 'Подробнее',
		chapter: 'Глава',
		season: 'Время года',
		year: 'Год',
		timelinePaused: '⏸ Хронология приостановлена',
		continueTimeline: 'Продолжить хронологию',
		cityChoiceDesc: 'Войти в город или остаться на карте?',
		charactersEntered: 'Персонажи вошли в',
		enterCity: 'Войти в город',
		stayOnMap: 'Остаться на карте',
		partOf: 'Часть {part}/{total}',
		prevPart: 'Предыдущая часть',
		nextPart: 'Следующая часть',
		revealSpoiler: 'Нажмите, чтобы открыть',
		readAlongNote: 'Режим чтения включён',
	},

	characterPath: {
		journeyTooltip: ' — путешествие',
	},

	cityLandmark: {
		showLess: 'Свернуть',
		readMore: 'Подробнее',
		locationType: 'Тип места',
	},

	cityMap: {
		returnToWorldMap: 'Вернуться на карту мира',
		worldMap: 'Карта мира',
	},

	cityPrompt: {
		onWorldMap: 'на карте мира.',
		worldMap: 'Карта мира',
		timelinePaused: '⏸ Хронология приостановлена',
		enteredCity: '',
		viewCityMap: 'Посмотреть карту города?',
		enterCity: 'Войти в город',
		dismiss: 'Отклонить',
		is: '',
		are: '',
		has: 'входит в',
		have: 'входят в',
	},

	controls: {
		openPanel: 'Открыть панель управления',
		label: 'Управление',
		title: 'Управление',
		closePanel: 'Закрыть панель',
		secretHistoryTitle:
			'Включить содержание «Тайной истории» (перемещения Кельсера в Когнитивной сфере)',
		secretHistoryContent: 'Содержание Тайной истории',
		ashAndMist: 'Пепел и туман',
		cityLandmarksNote: 'Достопримечательности города всегда видны',
		readAlongMode: 'Режим чтения',
		readAlongModeTitle:
			'Скрывать описания перемещений до нажатия — идеально для чтения вместе с картой',
		statusOn: 'ВКЛ',
		statusOff: 'ВЫКЛ',
	},

	locationMarker: {
		showLess: 'Свернуть',
		readMore: 'Подробнее',
		dominance: 'Доминион',
		exploreCity: 'Исследовать город',
	},

	loading: {
		title: 'АТЛАС РОЖДЁННЫХ ТУМАНОМ',
		subtitle: 'Загружаем мир пепла и тумана...',
	},

	common: {
		loading: 'Загрузка...',
		error: 'Ошибка',
		back: 'Назад',
		worldMap: 'Карта мира',
		returnToWorldMap: 'Вернуться на карту мира',
	},

	locationTypes: {
		capital: 'Столица',
		city: 'Город',
		landmark: 'Достопримечательность',
		mystical: 'Священное место',
		ashmount: 'Пепельная гора',
		mine: 'Шахта',
		palace: 'Дворец',
		keep: 'Замок',
		district: 'Район',
		hideout: 'Укрытие',
		stronghold: 'Крепость',
		region: 'Регион',
		plantation: 'Плантация',
		estate: 'Дворянское поместье',
		town: 'Поселение',
		village: 'Деревня скаа',
		river: 'Водный путь',
		industrial: 'Пост снабжения',
	},

	landmarkTypes: {
		gate: 'Ворота',
		keep: 'Крепость',
		palace: 'Дворец',
		district: 'Район',
		shop: 'Лавка',
		safehouse: 'Укрытие',
		landmark: 'Достопримечательность',
		canal: 'Канал',
		ministry: 'Кантон',
		plaza: 'Площадь',
	},

	dominances: {
		Central: 'Центральный доминион',
		Northern: 'Северный доминион',
		Southern: 'Южный доминион',
		Eastern: 'Восточный доминион',
		Western: 'Западный доминион',
		Terris: 'Террисийский доминион',
		None: 'За пределами Империи',
	},

	donation: {
		buttonLabel: 'Угостите меня кофе',
		buttonLabelShort: 'Кофе',
		modalTitle: 'Поддержите Атлас Рождённых туманом',
		modalDesc:
			'Атлас Рождённых туманом — это бесплатный фан-проект с открытым исходным кодом, созданный и поддерживаемый в свободное время. Хостинг, домен и разработка — всё это стоит денег. Если вам нравится приложение и вы хотите помочь, небольшое пожертвование очень поможет — но без давления, приложение всегда будет полностью бесплатным!',
		modalButton: 'Угостить кофе на Ko-fi',
		modalDismiss: 'Может быть позже',
		modalDontAsk: 'Больше не показывать',
		close: 'Закрыть',
	},

	headerExtra: {
		world: 'Мир',
		city: 'Город',
		wipBadge: 'В разработке',
		wipTitle: 'Что впереди',
		wipItem1: 'Перечитать трилогию для проверки каждого передвижения персонажа на хронологии',
		wipItem2: 'Проверить все описания мест на точность',
		wipItem3: 'Локализация — многоязычная поддержка',
		wipItem4: 'Ещё карты и контент Эры 2 (возможно?)',
		supportKofi: 'Поддержать на Ko-fi',
		mapLabel: 'Карта:',
		selectLanguage: 'Выбрать язык',
	},

	about: {
		ariaLabel: 'О странице',
		title: 'О странице и атрибуции',
		buttonLabel: 'О проекте',
		buttonSublabel: 'Информация и атрибуции',
		modalTitle: 'О проекте',
		close: 'Закрыть',
		disclaimerTitle: 'Отказ от ответственности',
		disclaimerBadge: 'НЕОФИЦИАЛЬНЫЙ ФАН-ПРОЕКТ',
		disclaimerIntro: 'Это неофициальный фан-проект, не связанный с:',
		disclaimerBranderson: 'Brandon Sanderson',
		disclaimerDragonsteel: 'Dragonsteel Entertainment',
		disclaimerTor: 'Tor Books / Macmillan Publishers',
		disclaimerIsaac: 'Isaac Stewart',
		disclaimerOutro:
			'Проект создан исключительно в образовательных и развлекательных целях. Всё содержание «Рождённых туманом», включая персонажей, локации, сюжетные линии и произведения искусства, является собственностью соответствующих правообладателей.',
		mapAttributionTitle: 'Атрибуция карты',
		mapAttributionDesc:
			'Карта в проекте — официальная карта Последней Империи Айзека Стюарта из Coppermind Wiki.',
		mapArtist: 'Isaac Stewart',
		mapSource: 'Coppermind Wiki',
		mapOriginalWork: 'Создана для серии «Рождённые туманом» Брэндона Сандерсона',
		mapNote:
			'Айзек Стюарт — официальный иллюстратор многих работ Брэндона Сандерсона, включая карты и иллюстрации вселенной Космера.',
		portraitsTitle: 'Портреты персонажей',
		portraitsDesc: 'Портреты персонажей из Coppermind Wiki по лицензии CC BY-NC-ND 4.0.',
		portraitVinMistborn: 'Рожденная туманом',
		portraitVinUrchin: 'Уличная замарашка',
		portraitKelsier: 'Кельсер',
		portraitSazed: 'Сэйзед',
		portraitElend: 'Эленд',
		portraitMarshInquisitor: 'Инквизитор',
		portraitMarshKelsier: 'с Кельсером',
		portraitSpook: 'Призрак',
		symbolsTitle: 'Алломантические символы',
		symbolsDesc:
			'Глифы маркеров мест используют алломантические символы металлов, созданные Айзеком Стюартом, со страницы Стального алфавита на Coppermind Wiki.',
		symbolsArtist: 'Isaac Stewart',
		symbolsSource: 'Coppermind Wiki — Стальной алфавит',
		symbolsLicense: 'Добросовестное использование в данном некоммерческом фан-проекте',
		symbolsUsed: 'Символы, используемые на карте:',
		symbolGold: 'Столица доминиона · Дворянская крепость · Дворянское поместье',
		symbolSteel: 'Город · Городские ворота',
		symbolAtium: 'Пепельная гора · Дворец',
		symbolTin: 'Достопримечательность · Достопримечательность',
		symbolPewter: 'Крепость · Канал',
		symbolCopper: 'Убежище · Укрытие шайки',
		symbolIron: 'Тюремная шахта',
		symbolBronze: 'Пост снабжения · Кантон Министерства',
		symbolLerasium: 'Священное место',
		symbolZinc: 'Поселение · Район',
		symbolBrass: 'Деревня скаа · Торговец · Плантация',
		symbolChromium: 'Водный путь',
		symbolElectrum: 'Регион · Площадь',
		specialThanksTitle: 'Особая благодарность',
		specialThanksDesc:
			'Огромная благодарность пользователю Reddit u/participating и теме совместного чтения Космера на r/readalong. Данные о перемещениях персонажей в этом проекте частично основаны на их поглавных обзорах в сочетании с моими собственными заметками. Использовано с разрешения.',
		specialThanksReddit: 'r/readalong Cosmere Wiki',
		communityTranslationsTitle: 'Переводы сообщества',
		communityTranslationsDesc:
			'Данные переводов и локализованные карты предоставлены сообществом. Спасибо!',
		copyrightTitle: 'Уведомление об авторских правах',
		copyrightTrademark:
			'«Рождённые туманом» — зарегистрированная торговая марка Dragonsteel Entertainment, LLC',
		copyrightMap: 'Карта © Isaac Stewart',
		copyrightBook: 'Содержание книг © Brandon Sanderson',
		closeButton: 'Закрыть',
		artistLabel: 'Художник:',
		sourceLabel: 'Источник:',
		originalWorkLabel: 'Оригинальное произведение:',
		licenseLabel: 'Лицензия:',
		versionLabel: 'Версия',
		roadmapTitle: 'Дорожная карта',
		roadmapCurrentTag: 'ТЕКУЩИЙ',
		roadmapCompleteTag: 'ЗАВЕРШЕНО',
		roadmap070: 'Пепел и сталь — хронология завершена',
		roadmapCurrent: 'Пепел и сталь',
		roadmap080: 'Источник Вознесения — хронология завершена',
		roadmap090: 'Герой веков — хронология завершена',
		roadmap100: 'Тайная история — хронология завершена',
	},

	welcome: {
		title: 'Добро пожаловать на интерактивную карту Мистборна',
		description:
			'Сейчас читаете трилогию Мистборн? Включите режим чтения, чтобы исследовать карту без спойлеров.',
		featureMovements:
			'Перемещения персонажей отображаются на карте по мере прохождения каждой главы',
		featureTitles: 'Названия перемещений всегда видны, чтобы вы знали, что произошло',
		featureSummaries: 'Подробные описания скрыты, пока вы не нажмёте, чтобы их раскрыть',
		enableButton: 'Включить режим чтения',
		skipButton: 'Нет, показать всё',
		hint: 'Вы всегда можете изменить это в меню управления слева.',
	},

	skipLinks: {
		nav: 'Перейти к разделу',
		toHeader: 'Перейти к заголовку',
		toMap: 'Перейти к карте',
		toCharacterMenu: 'Перейти к меню персонажей',
		toTimeline: 'Перейти к хронологии',
		toAttribution: 'Перейти к атрибуции',
	},

	data: ruData,
};
