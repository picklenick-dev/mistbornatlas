/**
 * Polish data translations.
 * Sources: Wydawnictwo MAG editions, translated by Aleksandra Jagiełowicz.
 * Key terminology verified against official print and canonical glossaries.
 */
import type { DataTranslations } from '../types';
import { enData } from './en-data';

export const plData: DataTranslations = {
	...enData,

	books: {
		tfe: { title: 'Z mgły zrodzony', year: '1021–1022 FE', confidence: 'verified' },
		woa: { title: 'Studnia wstąpienia', year: '1022–1024 FE', confidence: 'verified' },
		hoa: { title: 'Bohater wieków', year: '1024–1025 FE', confidence: 'verified' },
	},

	characters: {
		vin: {
			name: 'Vin',
			title: 'Zrodzona z Mgły',
			description:
				'Niezwykle utalentowana Zrodzona z Mgły, która z ulicznej złodziejki stała się osobą decydującą o losach całego świata.',
			confidence: 'verified',
			fieldConfidence: { description: 'verified' },
			titleProgression: {
				'tfe-1': 'Ulicznica', // Street urchin
				'tfe-9': 'Uczennica Zrodzonego z Mgły',
				'tfe-12': 'Lady Valette Renoux',
				'tfe-17': 'Zrodzona z Mgły',
				'tfe-38': 'Zabójczyni Ostatniego Imperatora',
				'woa-1': 'Dziedziczka Ocalałego', // Lady Heir
				'woa-47': 'Obrończyni Luthadelu',
				'hoa-1': 'Cesarzowa',
				'hoa-79': 'Naczynie Zachowania', // Preservation is "Zachowanie"
			},
			titleProgressionConfidence: {
				'tfe-1': 'verified',
				'tfe-9': 'verified',
				'tfe-12': 'verified',
				'tfe-17': 'verified',
				'tfe-38': 'verified',
				'woa-1': 'verified',
				'woa-47': 'verified',
				'hoa-1': 'verified',
				'hoa-79': 'verified',
			},
		},
		kelsier: {
			name: 'Kelsier',
			title: 'Ocalały', // The Survivor
			description:
				'Charyzmatyczny przywódca buntu skaa, znany z brawurowej ucieczki z Czeluści Hathsin.',
			confidence: 'verified',
			fieldConfidence: { description: 'verified' },
			titleProgression: {
				'tfe-0': 'Tajemniczy skaa',
				'tfe-1': 'Ocalały z Hathsin',
				'tfe-11': 'Przywódca bandy',
				'tfe-21': 'Niszczyciel Czeluści',
				'tfe-34': 'Męczennik Buntu',
			},
			titleProgressionConfidence: {
				'tfe-0': 'verified',
				'tfe-1': 'verified',
				'tfe-11': 'verified',
				'tfe-21': 'verified',
				'tfe-34': 'verified',
			},
			secretHistoryTitles: {
				'woa-1': 'Cień Kognitywny',
				'hoa-1': 'Champion Zachowania',
			},
		},
		sazed: {
			name: 'Sazed',
			title: 'Opiekun', // "Keeper" is canonically "Opiekun"
			description:
				'Terrisjanin pełniący rolę Opiekuna, który za pomocą feruchemii przechowuje wiedzę o zakazanych religiach.',
			confidence: 'verified',
			fieldConfidence: { description: 'verified' },
			titleProgression: {
				'tfe-9': 'Terriski zarządca', // Steward
				'tfe-22': 'Opiekun Religii',
				'woa-1': 'Uczony i Opiekun',
				'woa-12': 'Poszukiwacz Prawdy',
				'woa-52': 'Obrońca Luthadelu',
				'hoa-1': 'Ambasador Nowego Imperium',
				'hoa-50': 'Uczony w czasach kryzysu',
				'hoa-82': 'Bohater Wieków',
			},
			titleProgressionConfidence: {
				'tfe-9': 'verified',
				'tfe-22': 'verified',
				'woa-1': 'verified',
				'woa-12': 'verified',
				'woa-52': 'verified',
				'hoa-1': 'verified',
				'hoa-50': 'verified',
				'hoa-82': 'verified',
			},
		},
		elend: {
			name: 'Elend Venture',
			title: 'Cesarz', // Elend is specifically "Cesarz" to contrast with TLR's "Imperator"
			description:
				'Idealistyczny szlachcic, który po upadku Ostatniego Imperium staje przed trudnym zadaniem zjednoczenia ludzkości.',
			confidence: 'verified',
			fieldConfidence: { description: 'verified' },
			titleProgression: {
				'tfe-12': 'Szlachcic-filozof',
				'tfe-24': 'Zbuntowany arystokrata',
				'tfe-38': 'Nieoczekiwany przywódca',
				'woa-1': 'Król Centralnej Dominacji',
				'woa-35': 'Obalony król',
				'woa-58': 'Cesarz Zrodzony z Mgły',
				'hoa-1': 'Imperator Nowego Imperium', // Occasional use of Imperator in HoA context
				'hoa-54': 'Wojowniczy Cesarz',
			},
			titleProgressionConfidence: {
				'tfe-12': 'verified',
				'tfe-24': 'verified',
				'tfe-38': 'verified',
				'woa-1': 'verified',
				'woa-35': 'verified',
				'woa-58': 'verified',
				'hoa-1': 'verified',
				'hoa-54': 'verified',
			},
		},
		marsh: {
			name: 'Marsh',
			title: 'Stalowy Inkwizytor',
			description: 'Brat Kelsiera, który infiltruje Stalowy Zakon, płacąc za to najwyższą cenę.',
			confidence: 'verified',
			fieldConfidence: { description: 'verified' },
			titleProgression: {
				'tfe-7': 'Infiltrator rebelii',
				'tfe-27': 'Szpieg Stalowego Zakonu',
				'tfe-38': 'Stalowy Inkwizytor',
				'woa-4': 'Niechętny Inkwizytor',
				'woa-57': 'Pionek Zniszczenia',
				'hoa-0': 'Ręka Zniszczenia',
				'hoa-79': 'Stalowe Oczy', // Canonical translation of "Ironeyes"
			},
			titleProgressionConfidence: {
				'tfe-7': 'verified',
				'tfe-27': 'verified',
				'tfe-38': 'verified',
				'woa-4': 'verified',
				'woa-57': 'verified',
				'hoa-0': 'verified',
				'hoa-79': 'verified',
			},
		},
		spook: {
			name: 'Spook', // Most consistent in later editions; "Upiorek" was used in early chapters
			title: 'Cynooki', // Canonical term for Tineye
			description:
				'Najmłodszy członek załogi Kelsiera, który dzięki swojej determinacji wyrasta na prawdziwego lidera.',
			confidence: 'verified',
			fieldConfidence: { description: 'verified' },
			titleProgression: {
				'tfe-7': 'Młody Cynooki',
				'woa-1': 'Zwiadowca',
				'hoa-14': 'Infiltrator',
				'hoa-38': 'Cynomędrzec', // Tin Savant
				'hoa-58': 'Bohater Urteau',
				'hoa-83': 'Ocalały z Płomieni', // Survivor of the Flames
			},
			titleProgressionConfidence: {
				'tfe-7': 'verified',
				'woa-1': 'verified',
				'hoa-14': 'verified',
				'hoa-38': 'verified',
				'hoa-58': 'verified',
				'hoa-83': 'verified',
			},
		},
	},

	locations: {
		luthadel: {
			name: 'Luthadel',
			description:
				'Stolica Ostatniego Imperium i ośrodek władzy Ostatniego Imperatora przez tysiąc lat. Jedyne miasto z murami z kamienia.',
			confidence: 'verified',
		},
		'lake-luthadel': {
			name: 'Jezioro Luthadel',
			description: 'Zbiornik słodkowodny na wschód od stolicy, zanieczyszczony popiołem.',
			confidence: 'verified',
		},
		'pits-hathsin': {
			name: 'Doły Hathsin',
			description:
				'Perpendykularność przejawiająca się jako poszarpane szczeliny w ziemi, gdzie krystalizuje atium. Mapa jest zdefiniowana przez wąskie, ostre jak brzytwa pionowe szczeliny wnikające głęboko w skorupę. Więźniowie pełzali przez te klaustrofobiczne tunele w poszukiwaniu geod. Kelsier odkrył Jedenasty Metal (Malatium) w ukrytej komnacie głęboko w niezbadanej sieci szczelin, zanim zniszczył kryształy i zakończył produkcję atium.',
			safeDescription:
				'Brutalna kopalnia-więzienie na północny wschód od Luthadel, pełna wąskich, ostrych jak brzytwa pionowych szczelin sięgających głęboko w skorupę. Skazańcy pełzają przez te klaustrofobiczne pęknięcia w poszukiwaniu rzadkich geod atium, które tworzą się wewnątrz. Niewielu przeżywa tu długo.',
			confidence: 'verified',
		},
		fellise: {
			name: 'Fellise',
			description:
				'Szlacheckie letnisko na zachód od Luthadelu, gdzie ród Renoux posiadał posiadłość.',
			confidence: 'verified',
		},
		holstep: {
			name: 'Holstep',
			description:
				'Garnizonowe miasteczko na zachód od Luthadelu, punkt kontrolny szlaków handlowych i wojskowych.',
			confidence: 'verified',
		},
		'ashmount-tyrian': {
			name: 'Tyrian',
			description:
				'Podczas wzrostu Zniszczenia, Marsh był świadkiem masywnej erupcji lawy na jego zboczach po stworzeniu w pobliżu hematurgicznego kolca, a jego coraz gęstszy opad popiołu sygnalizował przyspieszający upadek świata.',
			safeDescription:
				'Najbliższa góra popiołowa Luthadelu, widoczna z murów miasta. Jej ciągłe erupcje pokrywają Centralną Dominację najgrubszymi warstwami popiołu, wymagając nieustannych ekip sprzątających.',
			confidence: 'verified',
		},
		urteau: {
			name: 'Urteau',
			description:
				'Słynne z "kanałowych ulic" — kanałów osuszonych przez Ostatniego Imperatora, by służyły jako zagłębione drogi. Twierdza Obywatela (Quelliona) podczas Upadku.',
			safeDescription: 'Stolica Dominacji Północnej i rodowa siedziba rodu Venture.',
			confidence: 'verified',
		},
		'ashmount-kalling': {
			name: 'Kalling',
			description: 'Główny wulkan Dominacji Północnej z ciemniejszym, bardziej żrącym popiołem.',
			confidence: 'verified',
		},
		'fadrex-city': {
			name: 'Fadrex',
			description:
				'Zyskało na znaczeniu po śmierci Ostatniego Imperatora. Polega na naturalnych formacjach skalnych (półkach "cremnolu") do obrony zamiast murów. Mieści jedną z tajnych Jaskiń Zaopatrzeniowych Ostatniego Imperatora.',
			safeDescription:
				'Główny węzeł handlowy w Dominacji Zachodniej, ufortyfikowany naturalnymi formacjami skalnymi.',
			confidence: 'verified',
		},
		tremredare: {
			name: 'Tremredare',
			description:
				'Dawna stolica Dominacji Zachodniej, porzucona po Upadku z powodu braku fortyfikacji.',
			confidence: 'verified',
		},
		'ashmount-morag': {
			name: 'Morag',
			description: 'Masywny wulkan dominujący zachodni horyzont imperium.',
			confidence: 'verified',
		},
		chardees: {
			name: 'Chardees',
			description: 'Rodowa siedziba rodu Hasting, ukryta w oficyjnej kartografii.',
			confidence: 'verified',
		},
		austrex: {
			name: 'Austrex',
			description: 'Stolica Dominacji Południowej i centrum spichlerza imperium.',
			confidence: 'verified',
		},
		vetitan: {
			name: 'Vetitan',
			description:
				'Zbudowane bezpośrednio nad jedną z Jaskiń Zaopatrzeniowych Ostatniego Imperatora. Architektura dostosowała się do intensywnego opadu popiołu poprzez podziemne rozbudowy i układ skoncentrowany na Ministerium. W czasach Bohatera Wieków miasto jest pochłaniane przez zaspy popiołu, a mieszkańcy żyją na wyższych piętrach, podczas gdy niższe wypełniają się popiołem.',
			safeDescription:
				'Miasto w Dominacji Północnej z architekturą dostosowaną do intensywnego opadu popiołu.',
			confidence: 'verified',
		},
		'ashmount-zerinah': {
			name: 'Zerinah',
			description:
				'Najdalej na południe wysunięta góra popiołowa, termiczny regulator półkuli południowej.',
			confidence: 'verified',
		},
		conventical: {
			name: 'Konwentykl Seran',
			description:
				'Strome spiralne schody prowadzą w głąb prawdy: Sala Sług (masowe groby), dormitoria Inkwizytorów i Komnata Hemalurgii z kamiennymi stołami, kanałami odwadniającymi i skarbcem kolców. W głębi Sazed odkrył inskrypcję Kwaana na stalowej płycie ukrytą w tajnej wnęce. To tutaj tworzy się Inkwizytorów.',
			safeDescription:
				'Pionowa forteca wykuta w ścianie klifu przy północnej granicy. Górne poziomy funkcjonują jako standardowa świątynia Ministerstwa (kaplica, pomieszczenia mieszkalne).',
			confidence: 'verified',
		},
		tathingdwen: {
			name: 'Tathingdwen',
			description: 'Stolica Dominacji Terris, położona w północnych górach.',
			confidence: 'verified',
		},
		'terris-mountains': {
			name: 'Góry Terris',
			description:
				'Lokalizacja oryginalnej Studni Wstąpienia zanim Ostatni Imperator zmienił geografię świata.',
			safeDescription: 'Surowy łańcuch górski, gdzie lud Terris został podbity.',
			confidence: 'verified',
		},
		'tincut-fastness': {
			name: 'Twierdza Tincut',
			description: 'Dokąd Synod i uchodźcy wycofali się podczas upadku Imperium.',
			safeDescription: 'Ukryta forteca w górach Terris.',
			confidence: 'probable',
		},
		'high-villages': {
			name: 'Wioski na wyżynach',
			description: 'Sieć ukrytych wiosek terrisiskich połączonych podziemnymi tunelami.',
			confidence: 'probable',
		},
		'imperial-canal': {
			name: 'Kanał Imperialny',
			description:
				'Sztuczna arteria wykopana w ziemi z rozkazu Ostatniego Imperatora, łącząca Tathingdwen z Luthadelem w celu wydobycia terrisańskich zasobów i wprowadzenia imperialnych żołnierzy. Infrastruktura, która łączyła imperium, stała się drogą jego zniszczenia, gdy armie kolosów użyły drogi kanału do ataku.',
			safeDescription:
				'Nie naturalna rzeka, lecz sztuczna arteria wykopana w ziemi z rozkazu Ostatniego Imperatora. Łączy Tathingdwen na północy bezpośrednio z Luthadelem, umożliwiając handel i transport przez imperium. Pomnik imperialnej inżynierii.',
			confidence: 'probable',
		},
		'kandra-homeland': {
			name: 'Ojczyzna Kandrów',
			description:
				'Głębokie jaskinie pod Dołami Hathsin, dom ludu kandra strzegącego największych tajemnic Ostatniego Imperatora, włącznie z Trustem.',
			safeDescription:
				'Ukryty podziemny kompleks pod Dołami Hathsin. Jego prawdziwa natura i przeznaczenie są nieznane światu zewnętrznemu.',
			confidence: 'verified',
		},
		'ashmount-torinost': {
			name: 'Torinost',
			description: 'Masywny szczyt na północ od Dominacji Zachodniej.',
			confidence: 'verified',
		},
		'ashmount-faleast': {
			name: 'Faleast',
			description:
				'Główny relief Dominacji Wschodniej, z bardziej żrącym popiołem z powodu krzemionki.',
			confidence: 'verified',
		},
		'ashmount-doriel': {
			name: 'Doriel',
			description: 'Góra popiołowa na południe od Luthadelu, blisko brzegu Morza Południowego.',
			confidence: 'verified',
		},
		'statlin-city': {
			name: 'Statlin',
			description:
				'Południowy punkt kotwiczny sieci Jaskiń Zaopatrzeniowych. Zawiera Jaskinię Zaopatrzeniową 2 z zapasami awaryjnymi.',
			safeDescription: 'Miasto w Dominacji Południowej.',
			confidence: 'probable',
		},
		'tresting-plantation': {
			name: 'Plantacja Trestinga',
			description: 'Plantacja skaa lorda Trestinga z setkami pracowników i garnizonem.',
			confidence: 'probable',
		},
		'lekal-city': {
			name: 'Miasto Lekal',
			description:
				'Miasto-twierdza rodu Lekal, gdzie całe miasto jest rozszerzeniem szlacheckiej posiadłości.',
			confidence: 'verified',
		},
		mantiz: {
			name: 'Mantiz',
			description:
				'Miasto na północy Dominacji Zachodniej z czterema wielkimi rezydencjami i ciężką akumulacją popiołu.',
			confidence: 'verified',
		},
		'channerel-river': {
			name: 'Rzeka Channerel',
			description: 'Główna droga wodna imperium, niezbędna dla handlu i transportu.',
			confidence: 'verified',
		},
		'burnlands-west': {
			name: 'Ziemie Spalone (Zachód)',
			description:
				'Niezdatna do zamieszkania pustynia na zachodnim krańcu imperium, zbyt blisko słońca.',
			confidence: 'verified',
		},
		'burnlands-east': {
			name: 'Ziemie Spalone (Wschód)',
			description: 'Niezdatna do zamieszkania pustynia na wschodnim krańcu imperium.',
			confidence: 'verified',
		},
		'arguois-caverns': {
			name: 'Jaskinie Arguois',
			description:
				'Używane przez armię rebeliancką Kelsiera jako ukryta baza, te jaskinie dały schronienie tysiącom żołnierzy skaa szkolących się do rewolucji.',
			safeDescription: 'Sieć wapiennych jaskiń w górach między Luthadelem a Dołami Hathsin.',
			confidence: 'verified',
		},
		garthwood: {
			name: 'Garthwood',
			description:
				'Osada w Dominacji Wschodniej, której okoliczne wioski były jednymi z pierwszych, które doświadczyły choroby mgły, która później rozprzestrzeniła się po imperium.',
			safeDescription:
				'Osada w Dominacji Wschodniej, gdzie Sazed podróżował, by uczyć wyzwolonych skaa o zakazanych religiach.',
			confidence: 'probable',
		},
		'straffs-camp': {
			name: 'Obóz Straffa',
			description: 'Obóz wojskowy Straffa Venture na północ od Luthadelu podczas oblężenia.',
			confidence: 'probable',
		},
		'koloss-camp': {
			name: 'Obóz Kolosów',
			description:
				'Obóz armii kolosów w pobliżu Luthadelu podczas oblężenia w 1024 roku. Katastrofalna próba Jastesa Lekala, by kupić lojalność kolosów drewnianymi monetami, doprowadziła do tego, że stworzenia przypuściły niszczycielski atak na miasto.',
			safeDescription:
				'Duży obóz sił kolosów w pobliżu Luthadelu, ich obecność stanowiła ciągłe zagrożenie podczas oblężenia.',
			confidence: 'probable',
		},
		longsfollow: {
			name: 'Longsfollow',
			description: 'Miasteczko w przełęczach górskich Dominacji Zachodniej.',
			confidence: 'probable',
		},
		chakatah: {
			name: 'Chakatah',
			description: 'Mała wioska górnicza w Dominacji Zachodniej.',
			confidence: 'probable',
		},
		'north-seran': {
			name: 'Północ Seran',
			description: 'Terytorium w pobliżu Konwentyklu Seran.',
			confidence: 'probable',
		},
		'river-seran': {
			name: 'Rzeka Seran',
			description:
				'Południowa droga wodna wykorzystywana przez Ministerium do transportu materiałów.',
			confidence: 'probable',
		},
		urbene: {
			name: 'Urbene',
			description: 'Punkt przeładunkowy Ministerium dla konwojów zbożowych do stolicy.',
			confidence: 'probable',
		},
		erlac: {
			name: 'Erlac',
			description: 'Garnizon na południowy zachód od Luthadelu patrolujący drogi do miasta.',
			confidence: 'probable',
		},
		'valtroux-city-central': {
			name: 'Valtroux',
			description:
				'Mieściło stałą armię 5.000 żołnierzy, którzy przechwycili i zmasakrowali armię rebeliancką Yedena w pobliżu miasta Holstep, demonstrując zdolność Ostatniego Imperatora do szybkiego projekcji siły militarnej.',
			safeDescription: 'Duże miasto garnizonowe położone na północny zachód od Luthadelu.',
			confidence: 'probable',
		},
		'haverfrex-cannery-central': {
			name: 'Haverfrex',
			description:
				'Służyło jako główny węzeł zaopatrzeniowy dla armii lorda Ashweathera Cetta podczas Oblężenia Luthadelu, zapewniając logistyczną wytrzymałość niezbędną do długoterminowej obecności wojskowej.',
			safeDescription:
				'Przemysłowy punkt przesiadkowy w Centralnej Dominacji znany z wielkoskalowej fabryki konserw.',
			confidence: 'probable',
		},
		'cetts-camp': {
			name: 'Obóz Cetta',
			description:
				'Obóz wojskowy lorda Ashweathera Cetta na północny zachód od Luthadelu podczas oblężenia.',
			confidence: 'probable',
		},
		'western-coast': {
			name: 'Zachodnie Wybrzeże',
			description:
				'Zachodnie wybrzeże Ostatniego Imperium, gdzie zamieszkane ziemie ustępują nieskończonemu szaremu oceanowi Królestwa Poznawczego. Kelsier dotarł do tego pustynnego brzegu po tygodniach biegu na zachód, by znaleźć Zniszczenie czekające na niego.',
			safeDescription:
				'Pustynny zachodni skraj Ostatniego Imperium, gdzie kontynent się kończy, a ocean zaczyna. Słabo zaludnione i rzadko odwiedzane, jego brzegi wyznaczają granicę znanego świata.',
			confidence: 'probable',
		},
		'ire-fortress': {
			name: 'Twierdza Ire',
			description:
				'Wysoka, świecąca forteca zbudowana przez Ire w Królestwie Poznawczym, daleko za zachodnią granicą Scadrialu. Wzniesiona z białego kamienia pulsującego wewnętrznym światłem, otoczona dziwnymi szklanopodobnymi drzewami i zasilana przewodem czystej Inwestytury. W jej skarbcach Ire strzegą kuli zdolnej przechwycić moc umierającego Odprysku.',
			safeDescription:
				'Tajemnicza forteca dostrzeżona w opowieściach o świecie poza śmiercią, której natura i przeznaczenie są nieznane żywym.',
			confidence: 'probable',
		},
	},

	cities: {
		luthadel: {
			name: 'Luthadel',
			description:
				'Stolica Ostatniego Imperium i centrum kulturalne pod rządami Ostatniego Imperatora. Jedyne miasto ze sztucznymi murami. Zbudowane w radialnej symetrii wokół Kredik Shaw, który wznosi się bezpośrednio nad Studnią Wstąpienia. Osiem bram nazwanych od allomantycznych metali.',
			confidence: 'verified',
		},
		urteau: {
			name: 'Urteau',
			description:
				'Największe miasto Dominacji Północnej i rodowa siedziba rodu Venture. Charakteryzuje się kanałowymi ulicami — szerokimi, osuszonymi kanałami służącymi jako drogi. Woda została odprowadzona do ukrytego podziemnego jeziora. Brak murów z dekretu Ostatniego Imperatora.',
			confidence: 'verified',
		},
		fadrex: {
			name: 'Fadrex',
			description:
				'Centrum handlowe Dominacji Zachodniej, umocnione naturalnymi formacjami skalnymi z cremnolu pełniącymi rolę murów. Kryje jedną z tajnych jaskiń zaopatrzeniowych Ostatniego Imperatora.',
			confidence: 'verified',
		},
	},

	cityLandmarks: {
		luthadel: {
			'kredik-shaw': {
				name: 'Kredik Shaw',
				description:
					'Pałac Ostatniego Imperatora, „Wzgórze Tysiąca Wież". Zbudowany bezpośrednio nad Studnią Wstąpienia.',
				confidence: 'verified',
			},
			'iron-gate': {
				name: 'Żelazna Brama',
				description: 'Brama północna, w kierunku Urteau i Dominacji Północnej.',
				confidence: 'verified',
			},
			'steel-gate': {
				name: 'Stalowa Brama',
				description: 'Brama północno-zachodnia, w kierunku Dołów Hathsin.',
				confidence: 'verified',
			},
			'pewter-gate': {
				name: 'Cynowa Brama',
				description: 'Brama północno-wschodnia Luthadelu.',
				confidence: 'verified',
			},
			'zinc-gate': {
				name: 'Cynkowa Brama',
				description: 'Brama południowo-wschodnia Luthadelu.',
				confidence: 'verified',
			},
			'brass-gate': {
				name: 'Mosiężna Brama',
				description: 'Brama południowa, w kierunku Fellise i Dominacji Południowej.',
				confidence: 'verified',
			},
			'copper-gate': {
				name: 'Miedziana Brama',
				description: 'Brama południowo-zachodnia, blisko dzielnicy przemysłowej.',
				confidence: 'verified',
			},
			'bronze-gate': {
				name: 'Brązowa Brama',
				description: 'Brama zachodnia, w kierunku rzeki Channerel.',
				confidence: 'verified',
			},
			'keep-venture': {
				name: 'Pałac Venture',
				description: 'Twierdza rodu Venture. Baza operacyjna Elenda i miejsce szlacheckich bali.',
				confidence: 'verified',
			},
			'keep-elariel': {
				name: 'Pałac Elariel',
				description: 'Siedziba rodu Elariel, jednego z Wielkich Rodów Luthadelu.',
				confidence: 'verified',
			},
			'keep-hasting': {
				name: 'Pałac Hasting',
				description: 'Blisko pałacu; padł wcześnie w wojnie rodów.',
				confidence: 'verified',
			},
			'clubs-shop': {
				name: 'Warsztat Clubsa',
				description: 'Stolarski warsztat służący jako baza operacyjna bandy Kelsiera.',
				confidence: 'verified',
			},
			'camons-safehouse': {
				name: 'Kryjówka Camona',
				description: 'Początkowa kryjówka w slumsach, gdzie Vin została zwerbowana przez Kelsiera.',
				confidence: 'verified',
			},
			'fountain-square': {
				name: 'Plac Fontanny',
				description:
					'Miejsce publicznych egzekucji i śmierci Kelsiera. Przemianowany na Plac Ocalałego.',
				confidence: 'verified',
			},
			'lake-luthadel': {
				name: 'Jezioro Luthadel',
				description: 'Duży zbiornik słodkowodny na wschód od murów.',
				confidence: 'verified',
			},
			'canton-of-finance': {
				name: 'Kanton Finansów',
				description: 'Główna siedziba Ministerium odpowiedzialna za finanse imperium.',
				confidence: 'verified',
			},
			'skaa-hovels': {
				name: 'Rudery skaa',
				description: 'Nędzne dzielnice skaa, w których działają gangi.',
				confidence: 'verified',
			},
			'well-of-ascension': {
				name: 'Studnia Wstąpienia',
				description: 'Ukryte źródło mocy pod Kredik Shaw, gdzie moc gromadzi się co 1024 lata.',
				confidence: 'verified',
			},
			'tin-gate-north': {
				name: 'Cynowa Brama (Północ)',
				description: 'Strefa bramy północno-wschodniej.',
				confidence: 'verified',
			},
			'assembly-hall': {
				name: 'Sala Zgromadzeń',
				description:
					'Budynek, w którym demokratyczny parlament Elenda obradował podczas oblężenia.',
				confidence: 'probable',
			},
			'keep-tekiel': {
				name: 'Pałac Tekiel',
				description: 'Twierdza rodu Tekiel, cel kampanii skrytobójczej Kelsiera.',
				confidence: 'verified',
			},
			'luthadel-garrison': {
				name: 'Garnizon Luthadelu',
				description: 'Plac ćwiczebny i koszary miasta.',
				confidence: 'probable',
			},
			'warehouse-district': {
				name: 'Dzielnica Magazynowa',
				description: 'Dzielnica przemysłowa przy kanałach, gdzie banda składowała broń.',
				confidence: 'probable',
			},
			'canton-inquisition': {
				name: 'Kanton Inkwizycji',
				description: 'Główna baza StaloInkwizytorów, przez wszystkich budzących lęk.',
				confidence: 'verified',
			},
			'canton-resource': {
				name: 'Kanton Zasobów',
				description: 'Centrum administracyjne gospodarki imperialnej.',
				confidence: 'verified',
			},
			'canton-orthodoxy': {
				name: 'Kanton Ortodoksji',
				description: 'Centrum religijne odpowiedzialne za czystość kultu Ostatniego Imperatora.',
				confidence: 'verified',
			},
			'keep-lekal': {
				name: 'Pałac Lekal',
				description: 'Jedna z wielkich rezydencji rodu Lekal z wieżami i witrażami.',
				confidence: 'verified',
			},
			'hotel-district': {
				name: 'Dzielnica Hotelowa',
				description: 'Ekskluzywna strefa dla szlachty odwiedzającej z zewnętrznych dominacji.',
				confidence: 'probable',
			},
			'commercial-district': {
				name: 'Dzielnica Handlowa',
				description: 'Centrum handlowe, w którym rody szlacheckie negocjowały kontrakty.',
				confidence: 'probable',
			},
			'industrial-district': {
				name: 'Dzielnica Przemysłowa',
				description: 'Strefa kuźni, młynów i warsztatów przy kanale.',
				confidence: 'probable',
			},
			'ahlstrom-square': {
				name: 'Plac Ahlstrom',
				description: 'Ważny plac publiczny w Luthadelu.',
				confidence: 'probable',
			},
			'south-bridge': {
				name: 'Most Południowy',
				description: 'Przeprawa na drogach wodnych miasta.',
				confidence: 'probable',
			},
			'the-twists': {
				name: 'Zawiłe Zaułki',
				description: 'Labiryntowa dzielnica slumsów, schronienie skaa i bandy Kelsiera.',
				confidence: 'probable',
			},
			sootwarrens: {
				name: 'Sadze',
				description: 'Jedna z najnędzniejszych dzielnic, pokryta popiołem.',
				confidence: 'probable',
			},
			'the-cracks': {
				name: 'Szczeliny',
				description: 'Zdewastowany sektor o dużej gęstości zaludnienia.',
				confidence: 'probable',
			},
			'aspen-row': {
				name: 'Ulica Topolowa',
				description: 'Ulica mieszkalna dla wykwalifikowanych robotników i szlacheckiej służby.',
				confidence: 'probable',
			},
			blockstreet: {
				name: 'Ulica Bloków',
				description: 'Gęsta dzielnica mieszkalna w szachownicowym układzie dla skaa.',
				confidence: 'probable',
			},
			'kenton-street': {
				name: 'Ulica Kenton',
				description:
					'Tętniąca życiem ulica handlowa w Luthadel, gdzie kupcy sprzedają wszystko — od artykułów gospodarstwa domowego po egzotyczne zwierzęta.',
				confidence: 'probable',
			},
		},
		urteau: {
			'ministry-canton': {
				name: 'Kanton Inkwizycji',
				description:
					'Siedziba Ministerium zbudowana nad trzecią jaskinią zaopatrzeniową z podziemnym jeziorem.',
				confidence: 'verified',
			},
			marketpit: {
				name: 'Dół Targowy',
				description: 'Najszersza z kanałowych ulic, główny bulwar i centralny targ.',
				confidence: 'verified',
			},
			'spooks-hideout': {
				name: 'Kryjówka Szpiega',
				description: '„Płonący Dom" używany przez drużynę Szpiega podczas powstania.',
				confidence: 'probable',
			},
			'citizens-estate': {
				name: 'Posiadłość Obywatela',
				description: 'Szlachecka posiadłość przejęta przez Quelliona jako siedziba władzy.',
				confidence: 'probable',
			},
			'luthadel-gate': {
				name: 'Brama Luthadelu',
				description: 'Południowe wejście do sieci kanałów, w kierunku Luthadelu.',
				confidence: 'probable',
			},
			'venture-estate': {
				name: 'Posiadłość Venture',
				description: 'Rodowa siedziba Venture w Urteau, opuszczona za rządów Quelliona.',
				confidence: 'probable',
			},
			'burning-district': {
				name: 'Płonąca Dzielnica',
				description:
					'Około jedna trzecia miasta zniszczona przez pożary podczas powstania Szpiega.',
				confidence: 'probable',
			},
			'skaa-slums': {
				name: 'Slumsy skaa',
				description: 'Biedne dzielnice, w których rewolucjoniści zbierają się w suchych kanałach.',
				confidence: 'probable',
			},
			'the-harrows': {
				name: 'Bruzdy',
				description: 'Labirynt wąskich, połączonych kanałów w południowej sekcji.',
				confidence: 'probable',
			},
			'west-docks': {
				name: 'Doki Zachodnie',
				description: 'Zachodni kraniec sieci kanałów do załadunku towarów.',
				confidence: 'probable',
			},
			'fedre-aqueduct': {
				name: 'Akwedukt Lorda Fedre',
				description: 'Monumentalna infrastruktura z czasów przed Upadkiem.',
				confidence: 'probable',
			},
			'white-streets': {
				name: 'Białe Ulice',
				description: 'Zamożna dzielnica, której bruk był skrupulatnie oczyszczany z popiołu.',
				confidence: 'probable',
			},
			'citizens-home': {
				name: 'Dom Obywatela',
				description: 'Główna siedziba Quelliona, skaa który przejął władzę.',
				confidence: 'probable',
			},
			'interchange-building': {
				name: 'Budynek Przeładunkowy',
				description: 'Centrum logistyczne do transferu towarów między poziomami.',
				confidence: 'probable',
			},
			'old-city-square': {
				name: 'Plac Starego Miasta',
				description:
					'Historyczne centrum Urteau, scena politycznych niepokojów za rządów Obywatela.',
				confidence: 'probable',
			},
			'canton-orthodoxy-urteau': {
				name: 'Kanton Ortodoksji',
				description: 'Zarządzał sprawami duchowymi i prawnymi Dominacji Północnej.',
				confidence: 'probable',
			},
		},
		fadrex: {
			'keep-orielle': {
				name: 'Pałac Orielle',
				description:
					'Główna rezydencja na wzniesieniu, używana przez obligatora Aradana Yomena jako pałac.',
				confidence: 'probable',
			},
			'storage-cache': {
				name: 'Jaskinia Zaopatrzeniowa',
				description: 'Tajne składy żywności i electrum ukryte w północnych skałach.',
				confidence: 'verified',
			},
			'cetts-base': {
				name: 'Baza Cetta',
				description: 'Umocniona siedziba Ashweathera Cetta przed wymarszonem na Luthadel.',
				confidence: 'probable',
			},
			'cremnol-wall-north': {
				name: 'Mur Cremnolowy Północny',
				description: 'Naturalna czerwono-pomarańczowa formacja skalna chroniąca miasto od północy.',
				confidence: 'verified',
			},
			'cremnol-wall-south': {
				name: 'Mur Cremnolowy Południowy',
				description: 'Formacja skalna stanowiąca barierę geologiczną od południa.',
				confidence: 'verified',
			},
			'yomens-palace': {
				name: 'Pałac Yomena',
				description: 'Siedziba administracyjna obligatora Aradana Yomena.',
				confidence: 'probable',
			},
			'main-gate': {
				name: 'Brama Główna',
				description: 'Główne wejście do miasta przez formacje geologiczne.',
				confidence: 'probable',
			},
			'conway-canal': {
				name: 'Kanał Conway',
				description: 'Jeden z głównych kanałów handlowych i transportowych.',
				confidence: 'probable',
			},
			'city-walls-east': {
				name: 'Mury Wschodnie',
				description: 'Wschodni obwód obronny z naturalnych skał.',
				confidence: 'probable',
			},
			'ash-mounds': {
				name: 'Kopce Popiołu',
				description: 'Pokryte popiołem równiny, na których obozowała armia oblężnicza Elenda.',
				confidence: 'probable',
			},
			'canton-resource-fadrex': {
				name: 'Kanton Zasobów',
				description: 'Kanton Ministerium używany przez Yomena jako więzienie dla Vin.',
				confidence: 'probable',
			},
			'informants-residence': {
				name: 'Rezydencja Informatora',
				description: 'Dom starego informatora znającego sekrety miasto.',
				confidence: 'probable',
			},
			'deep-wells': {
				name: 'Głębokie Studnie',
				description: 'Żywotne zasoby wodne w mieście bez większej rzeki.',
				confidence: 'probable',
			},
			'noble-quarter': {
				name: 'Dzielnica Szlachecka',
				description: 'Strefa mieszkalna wyższych sfer.',
				confidence: 'probable',
			},
		},
	},

	movements: {
		...enData.movements,
		kelsier: {
			...enData.movements.kelsier,
			'tfe-0': {
				title: 'Powrót Ocalałego',
				description:
					'Kelsier przybywa na plantację lorda Tristinga, gdzie szlachcic gości obligatora wysłanego przez lorda Venture w nadziei na partnerstwo handlowe. Tej nocy, gdy młodą skaa dziewczynę mają przyprowadzić do Tristinga, Kelsier interweniuje: zabija Tristinga oraz wszystkich jego obligatorów, nadzorców i żołnierzy i podpala posiadłość.',
			},
			'tfe-1': {
				title: 'Ukryty obserwator',
				description:
					'Kelsier obserwuje z cienia działalność gangu Camona, zauważając że Vin nieświadomie używa allomancji: uliczna sierota posiadająca moce Zrodzonej z Mgły.',
			},
			'tfe-3': {
				title: 'Rekrutacja Vin',
				description:
					'Vin próbuje uciec z kryjówki Camona, ale Ulef ją zdradza. Kelsier interweniuje i ratuje ją od pobicia przez Camona. Awansuje Mileva na lidera, zabiera trzy tysiące boksów jako zapłatę za zajęcie się obligatorem i inkwizytorem. Testuje Vin i potwierdza, że jest Zrodzona z Mgły.',
			},
			'tfe-5': {
				title: 'Kradzież atium',
				description:
					'Kelsier, Dockson i Vin wspinają się na dachy. Kelsier przygotowuje się i zanurza we mgle, szturmując twierdzę Venture by ukraść atium. Zdobywa sejf, ale musi walczyć z zabójcami mgły w drodze powrotnej. Ucieka z atium i finansuje bunt.',
			},
			'tfe-6': {
				title: 'Ekipa w komplecie',
				description:
					'W warsztacie stolarskim Clubsa Kelsier i ekipa opracowują plan obalenia Ostatniego Imperium. Marsh w końcu przybywa; wszyscy wychodzą, by bracia mogli porozmawiać na osobności. Vin wraca i podsłuchuje pod drzwiami.',
			},
			'tfe-7': {
				title: 'Trening uczennicy',
				description:
					'Kelsier zabiera Vin na pierwszy nocny trening i daje jej pelerynę z mgły. Uczy ją ośmiu podstawowych metali wzdłuż murów Luthadelu, blisko Stalowej Bramy.',
			},
			'tfe-8': {
				title: 'Przykrycie Renoux',
				description:
					'Kelsier zabiera Vin poza mury Luthadelu, gdzie napotykają mgłoducha. Sazed czeka z powozem na głównym trakcie i wiezie ich do Fellise. Po drodze Kelsier oferuje Vin trzy tysiące boksów i możliwość odejścia. Na posiadłości lorda Renoux tworzy Vin fałszywą tożsamość lady Valette.',
			},
			'tfe-10': {
				title: 'Planowanie rewolucji',
				description:
					'Po powrocie do Luthadelu Kelsier zwołuje spotkanie w sklepie Clubsa. Pyta Sazeda o religię posiadającą prawdziwą moc — Sazed opowiada mu o jaizmie — i o religię, która uważa eksterminację szlachty za świętą. Spotkanie przerywa, gdy jeden z żołnierzy Hammonda donosi, że Ministerstwo znalazło starą kryjówkę Camona.',
			},
			'tfe-10.2': {
				title: 'Zgromadzenie w magazynach',
				description:
					'Kelsier przemawia do robotników skaa na tajnym zgromadzeniu w dzielnicy magazynowej. Breeze i jego łagodziciele oraz podżegacze manipulują tłumem, wykorzystując legendę Ocalałego z Hathsin do rozpalania buntu.',
			},
			'tfe-11': {
				title: 'Masakra w kryjówce Camona',
				description:
					'Kelsier i ekipa badają zniszczoną kryjówkę. Potem Kelsier szuka Camona wśród żebraków i znajduje jego zwłoki wiszące na haku wbitym w usta, z rękami i nogami związanymi — ciało tortutowane. Ta metoda egzekucji jest zarezerwowana dla nadużywających allomancji. Vin udało się wyśledzić Kelsiera.',
			},
			'tfe-13': {
				title: 'Plany w Fellise',
				description:
					'Kelsier spotyka Vin i Sazeda na posiadłości lorda Renoux w Fellise, by omówić informacje z pierwszego balu Vin. Dowiaduje się, że ojciec Vin był na balu, po czym wraca przez mgłę do Luthadelu.',
			},
			'tfe-14': {
				title: 'Zwiad pałacowy',
				description:
					'Kelsier prowadzi Vin do Kredik Shaw, by zbadać budynek, który Ostatni Imperator odwiedza co trzy dni. Torują sobie drogę walką, ale trzech stalowych inkwizytorów ich okrąża. Kelsier zostaje oddzielony od Vin w chaosie. Vin ucieka ciężko ranna z tajemniczą skórzaną księgą.',
			},
			'tfe-15': {
				title: 'Po Kredik Shaw',
				description:
					'Ekipa kwestionuje decyzję Kelsiera o zabraniu Vin do Kredik Shaw. Sazed przynosi ją na rękach. Dockson jest wściekły z powodu ryzyka. Kelsier i Dockson zauważają skórzaną księgę; Sazed określa ją jako napisaną w khlennium, języku ojczyzny Ostatniego Imperatora sprzed Wstąpienia.',
			},
			'tfe-16': {
				title: 'Czuwanie przy Vin',
				description:
					'Kelsier zostaje w sklepie Clubsa czuwając przy Vin, gdy ta dochodzi do siebie po ranach z Kredik Shaw, obecny gdy w końcu się budzi.',
			},
			'tfe-17': {
				title: 'Spotkanie na posiadłości Renoux',
				description:
					'Kelsier podróżuje do Fellise z Breeze, Yedenem i Docksonem na spotkanie na posiadłości lorda Renoux w sprawie następnej fazy buntu.',
			},
			'tfe-19': {
				title: 'Rozpalanie wojny rodów',
				description:
					'Kelsier sieje chaos, podrzucając ciało lorda Charrsa Entrona do ogrodu twierdzy Tekielów. Potem idzie do dzielnicy sadzy spotkać się z Hoidem — informatorem przebranym za kontakt uliczny — i dowiaduje się, że lady Shan Elariel jest łagodzicielką.',
			},
			'tfe-19.2': {
				title: 'Spotkanie z lordem Straffem',
				description:
					'Kelsier udaje się na plac Allström przebrany za chorego i niepełnosprawnego żebraka skaa, by spotkać lorda Straffa Venture, głowę rodu Venture. Odkrywa, że plotki o Ocalałym z Hathsin się rozchodzą i mówi się o jedenastym metalu.',
			},
			'tfe-19.3': {
				title: 'Powrót do Renoux',
				description:
					'Kelsier wraca do dworu Renoux ścieżką ciernistą i wymienia informacje z Vin, Sazedem i Renoux. Robi Vin wykład o szlachcie, twierdząc że nie obchodzą ich skaa i że musi trzymać się z dala od Elenda.',
			},
			'tfe-20': {
				title: 'Nadzorowanie dostaw',
				description:
					'Kelsier na posiadłości Renoux w Fellise nadzoruje ładowanie broni i zapasów na wozy wysyłane do armii rebeliantów.',
			},
			'tfe-21': {
				title: 'Armia rebeliantów',
				description:
					'Kelsier czyta tłumaczenie dziennika Ostatniego Imperatora płynąc barką na północ kanałem. Konwój zatrzymuje się na śluzie w Holstep i Kelsier z rekrutami rusza do jaskiń, gdzie trenuje armia rebeliantów. Pokonuje wspomnienia Dołków Hathsin i wchodzi do kompleksu jaskiń Arguois, by obejrzeć armię, którą wytrenował Hammond. Podczas kolacji Kelsier manipuluje Bilgiem na przestrogę. Bilg i Demoux walczą; Kelsier pomaga Demoux allomancją.',
			},
			'tfe-23': {
				title: 'Śledzenie Vin',
				description:
					'Kelsier pojawia się w oknie wieży, gdzie Vin szpieguje grupę Elenda w twierdzy Hastingsów. Drwi z ich idealistycznych rozmów o zmienianiu świata. Rozchodzą się w różne strony.',
			},
			'tfe-24': {
				title: 'Spotkanie statusowe',
				description:
					'Kelsier przybywa do sklepu Clubsa, gdzie zebrała się większość ekipy. Omawia stan misji i dzieli nocnego drinka ze Spookiem, Hammondem i Clubsem. Prosi Hammonda o zbieranie informacji w garnizonie.',
			},
			'tfe-25': {
				title: 'Rozpaczliwa decyzja',
				description:
					'W sklepie Clubsa Kelsier dowiaduje się, że rebelia skaa zaatakowała garnizon Holstepu i że garnizon Luthadelu maszeruje na północ. Postanawia ostrzec armię rebeliantów i każe Vin połknąć pięć cynowych kulek na długi bieg na północ.',
			},
			'tfe-25.2': {
				title: 'Katastrofa Holstepu',
				description:
					'Kelsier i Vin biegną szesnaście godzin bez przerwy paląc cynę. Znajdują resztki armii rebeliantów oblężonej i wymordowanej przez garnizon Valtroux. Kelsier chce walczyć, ale Vin przekonuje go, że nie są niezwyciężeni. Docierają do jaskiń Arguois, gdzie dwa tysiące żołnierzy przeżyło dzięki Mennisowi.',
			},
			'tfe-26': {
				title: 'Zbieranie okruchów',
				description:
					'Ekipa wraca do sklepu Clubsa po dwutygodniowej podróży z jaskiń. Plan wygląda na totalną porażkę. Breeze oskarża Kelsiera o gonienie za chwałą. Kelsier przyznaje się do porażki, ale odmawia rezygnacji.',
			},
			'tfe-26.2': {
				title: 'Egzekucje',
				description:
					'Spook donosi o egzekucjach na placu Fontanny. Ekipa udaje się tam i przekupuje kogoś, by wejść na dach. Oglądają rzeź wielu ludzi skaa, krew spływającą do fontanny. Kelsier przekonuje ekipę by kontynuowali: „To jest nasz wróg. Nie ma odwrotu, nie ma cofnięcia."',
			},
			'tfe-27': {
				title: 'Nowa strategia',
				description:
					'Ekipa wraca do sklepu Clubsa, by zaplanować kolejne kroki: rozpętać wojnę między rodami szlacheckimi. Sazed przynosi list od Marsha wskazujący miejsce spotkania na Krętaczkach.',
			},
			'tfe-27.2': {
				title: 'Złoty metal',
				description:
					'Kelsier i Vin przychodzą do opuszczonego budynku na Krętaczkach kilka godzin przed spotkaniem z Marshem. Czekając, Kelsier opowiada o złocie — dziewiątym metalu allomantycznym, który pokazuje alternatywną wersję przeszłości. Wyjaśnia też ferochemię i daje Vin złoto do pierwszego spalenia. Marsh przybywa z tatuażem niższego obligatora z wydziału Inkwizycji, opisuje stacje łagodzenia w Luthadelu i ujawnia, że inkwizytorzy mogą umrzeć ze starości.',
			},
			'tfe-29': {
				title: 'Rada wojenna na Renoux',
				description:
					'Kelsier spotyka większość ekipy na posiadłości Renoux w Fellise, by zbadać szczegółową mapę obrony Luthadelu dostarczoną przez Marsha. Odkrywają, że gang Therona został niedawno zaatakowany przez Ministerstwo. Tej nocy, nie mogąc zasnąć, Kelsier prosi Sazeda o opowiedzenie kilku religii.',
			},
			'tfe-31': {
				title: 'Upomnienie uczennicy',
				description:
					'Kelsier i Vin wracają do sklepu Clubsa po tym, jak Vin zabiła lady Shan Elariel — pełnoprawną Zrodzoną z Mgły — w twierdzy Venture. Kelsier upomina Vin za lekkomyślną walkę, ale ona krzyczy, że szlachta i skaa nie różnią się, że Elend Venture to dobry człowiek warty ochrony.',
			},
			'tfe-32': {
				title: 'Znalezienie Marsha',
				description:
					'Kelsier i Vin znajdują ciało Marsha całkowicie pozbawione krwi — pustą skorupę. W sklepie Clubsa znajdują list od Marsha wyjaśniający, że inkwizytorzy prawdopodobnie go odnajdą.',
			},
			'tfe-32.2': {
				title: 'Zniszczenie Dołków',
				description:
					'Kelsier wraca do Dołków Hathsin — miejsca swoich największych cierpień. Zabija wszystkich strażników i wyciąga rękę do skaa imieniem Wallin, który wychodzi z jamy. Niszczy wszystkie kryształy atium, odcinając w jedną noc najcenniejszy zasób Ostatniego Imperatora.',
			},
			'tfe-33': {
				title: 'Awaryjne schronienie',
				description:
					'Kelsier wraca do wilgotnej zapasowej piwnicy koło sklepu Clubsa — tylko trzy izby. Ogłasza, że zniszczył całe atium w Dołkach Hathsin.',
			},
			'tfe-33.2': {
				title: 'Walka z inkwizytorem',
				description:
					'Wszyscy podążają za Kelsierem na plac Fontanny. Widzą Spooka i lorda Renoux w wozie egzekucyjnym. Kelsier walczy z inkwizytorem na placu — w pułapkę, o której niemal na pewno wiedział.',
			},
			'tfe-34': {
				title: 'Ostatnia walka Ocalałego',
				description:
					'Kelsier walczy z inkwizytorem na śmierć i życie na placu Fontanny — obaj palą atium. Jest mistrzem pchania i ciągnięcia, manewrując metalem w powietrzu z genialną biegłością. Zabija inkwizytora i skaa zaczynają skandować „Ocalały z Hathsin". Ostatni Imperator przybywa w czarnym powozie. Jeden z ludzi Hammonda dźga go włócznią — idzie dalej. Dwie włócznie — wciąż stoi. Ostatni Imperator uderza Kelsiera, wyciąga włócznię z własnego ciała i przebija nią Kelsiera. Ten umiera z uśmiechem, stając się męczennikiem, który rozpalił rewolucję.',
			},
			'tfe-35': {
				title: 'Po śmierci',
				description:
					'Ekipa widzi kandrę w ciele Kelsiera: ostateczny plan. Kelsier zostawił listy z instrukcjami. Jego śmierć rozpaliła rewolucję.',
			},
			'woa-1': {
				title: 'Cień Poznawczy',
				description:
					'Kelsier budzi się jako Cień Poznawczy w Studni Wstąpienia po śmierci. Hoid kradnie koralik lerasium. Leras uczy o trzech Sferach.',
			},
			'woa-5': {
				title: 'Obserwując świat',
				description:
					'Kelsier obserwuje świat poza swoim więzieniem. Zauważa, że Ruina zwraca uwagę na Vin.',
			},
			'woa-12': {
				title: 'Intrygi Ruiny',
				description:
					'Kelsier odkrywa, że Ruina zmienia terrisańską religię. Marsh porzuca Sazeda w Konwentyklu.',
			},
			'woa-26': {
				title: 'Obserwując oblężenie',
				description:
					'Kelsier widzi Vin demonstrującą przerażającą moc i Elenda obalonego przez Zgromadzenie.',
			},
			'woa-57': {
				title: 'Komnata Studni',
				description:
					'Vin i Elend schodzą do Studni. Marsh atakuje Sazeda. Kelsier rani Elenda, by zmotywować Vin.',
			},
			'woa-60': {
				title: 'Ruina uwolniona',
				description:
					'Vin uwalnia moc w Studni. Zachowanie prowadzi Vin, by dała Elendowi ostatni koralik lerasium.',
			},
			'hoa-0': {
				title: 'Żałoba Ocalałego',
				description:
					'Po bitwie z kolosami Kelsier podróżuje do Fortecy Venture. Dockson i Clubs zginęli.',
			},
			'hoa-3': {
				title: 'Khriss i Nazh',
				description:
					'Kelsier spotyka Khriss i Nazha nad Jeziorem Luthadel. Khriss uczy o szesnastu Odłamkach.',
			},
			'hoa-5': {
				title: 'Wizja boskości',
				description:
					'Zachowanie daje Kelsierowi wizję możliwych przyszłości. Vin ma szansę — jeśli pójdzie na zachód.',
			},
			'hoa-8': {
				title: 'Biegnąc na zachód',
				description:
					'Kelsier biegnie na zachód Kanałem Imperialnym. Miasta puste od mgielnej choroby.',
			},
			'hoa-12': {
				title: 'Wspomnienia Longsfollow',
				description:
					'W Longsfollow Kelsiera dopada zmęczenie i poczucie winy. Pyta, gdzie jest Mare.',
			},
			'hoa-15': {
				title: 'Samotna droga',
				description: 'Kelsier odkrywa, że może rozpalać ogień myślą. Obserwuje uchodźców skaa.',
			},
			'hoa-18': {
				title: 'Drwina Ruiny',
				description:
					'Kelsier dociera do zachodniego oceanu. Ati (Ruina) drwi z niego. Kelsier wyrusza przez ocean Poznawczy.',
			},
			'hoa-21': {
				title: 'Ocean myśli',
				description: 'Kelsier przemierza ocean Poznawczy. Widzi światło: forteca Ire.',
			},
			'hoa-24': {
				title: 'Forteca Ire',
				description:
					'Kelsier dociera do fortecy z białego kamienia. Ire — starożytni Elantryjczycy — strzegą kuli.',
			},
			'hoa-30': {
				title: 'Kradnąc kulę',
				description: 'Kelsier ściga Ire. Udaje Ruinę. Alonoe porzuca kulę ze strachu.',
			},
			'hoa-35': {
				title: 'Fadrex i Hoid',
				description: 'Zachowanie prowadzi Kelsiera do Fadrexu. Znajduje Vin i znów Hoida.',
			},
			'hoa-42': {
				title: 'Pionek Ruiny',
				description: 'Ruina blokuje Kelsierowi dostęp do Vin. Widzi kolosy atakujące armię Elenda.',
			},
			'hoa-50': {
				title: 'Niejasne ostrzeżenie',
				description: 'Kelsier próbuje przekazać Vin wiadomość: nie ufaj nikomu przebitemu metalem.',
			},
			'hoa-54': {
				title: 'Cień Ocalałego',
				description:
					'Kelsier przybywa do Urteau. Znajduje Spooka pod wpływem Ruiny — hemalurgiczny gwóźdź.',
			},
			'hoa-58': {
				title: 'Nadzieja dla Spooka',
				description: 'Kelsier szepcze "Nadzieja", aż Spook wyrywa hemalurgiczny gwóźdź.',
			},
			'hoa-62': {
				title: 'W półśnie',
				description:
					'Spook i Kelsier spotykają się na zielonej łące. Kelsier prosi o przekazanie wiadomości Vin.',
			},
			'hoa-68': {
				title: 'Przejmując Zachowanie',
				description:
					'Kelsier rozbija kulę Ire nożem Nazha i przejmuje moc Odłamka. Ruina się śmieje.',
			},
			'hoa-69': {
				title: 'Los posłańca',
				description: 'Kelsier widzi Goradela z ostrzeżeniem Spooka — ale Ruina wzywa Marsha.',
			},
			'hoa-78': {
				title: 'Oddając moc',
				description: 'Kelsier atakuje Ruinę, by odwrócić jego uwagę, gdy Marsh wyrywa kolczyk Vin.',
			},
			'hoa-80': {
				title: 'Naprawiając duszę',
				description: 'Kelsier odmawia ponownej śmierci. Jego dusza powoli się leczy.',
			},
			'hoa-81': {
				title: 'Strażnik Dołków',
				description:
					'Kelsier widzi finałową bitwę. Elend przebija szyję Marsha. Vin atakuje Ruinę.',
			},
			'hoa-82': {
				title: 'Poza',
				description: 'Elend i Vin pojawiają się w sferze Poznawczej. Sazed staje się Harmonią.',
			},
			'hoa-83': {
				title: 'Wybór Ocalałego',
				description:
					'Kelsier znów uwięziony w sferze Poznawczej. Sazed (Harmonia) odwiedza go. Kelsier zaczyna knuć.',
			},
			'hoa-83.2': {
				title: 'Knowania Ocalałego',
				description:
					'Kelsier przekonuje Spooka do eksperymentów hemalurgicznych — by znaleźć drogę powrotną.',
			},
		},
		vin: {
			...enData.movements.vin,
			'tfe-1': {
				title: 'Uliczna sierota',
				description:
					'Vin zostaje wezwana przed lidera gangu Camona, który traktuje ją brutalnie. Nieświadomie używa swojego szczęścia — formy allomantycznego łagodzenia — by go uspokoić. Camon przebiera się za lorda Jedue i przygotowuje oszustwo na Ministerstwo Stali. Vin używa szczęścia na obligatora, ojca Leida, by nie odrzucił żądań Camona.',
			},
			'tfe-2': {
				title: 'Oszustwo Ministerstwa',
				description:
					'Camon przebrany za lorda Jedue zabiera Vin do kancelarii finansowej, by oszukać Ministerstwo. Vin używa szczęścia na arcyojca, który wydaje trzy tysiące boksów Camonowi. Kelsier i Dockson w poczekalni wyczuwają allomantyczne impulsy Vin. Potem widzą stalowego inkwizytora śledzącego orszak Camona.',
			},
			'tfe-4': {
				title: 'Zwerbowana',
				description:
					'Kelsier przedstawia w warsztacie Clubsa plan obalenia Ostatniego Imperium. Ekipa się zgadza, tylko Clubs wychodzi i wraca. Kelsier ujawnia, że Vin jest Zrodzona z Mgły i pokazuje jedenasty metal.',
			},
			'tfe-7': {
				title: 'Trening Zrodzonej z Mgły',
				description:
					'Kelsier zabiera Vin na pierwszy nocny trening i daje jej pelerynę z mgły. Uczy ją ośmiu podstawowych metali — cyna, cyna stopowa, żelazo, stal, cynk, mosiądz, miedź i brąz — kończąc przy murach Luthadelu.',
			},
			'tfe-8': {
				title: 'Posiadłość Renoux',
				description:
					'Vin i Kelsier przeskakują mury Luthadelu nocą, a Vin po raz pierwszy spotyka mgłoducha. Sazed czeka z powozem na drodze i wiezie ich do Fellise. Kelsier oferuje Vin trzy tysiące boksów i możliwość odejścia. Bierze pieniądze, ale zostaje. Na posiadłości lorda Renoux zaproponowano, by grała lady Valette.',
			},
			'tfe-9': {
				title: 'Trening z Sazedem',
				description:
					'Vin i Kelsier sparują na posiadłości Renoux. Vin obcina włosy, Sazed sprawdza jej szlacheckie przebranie i opowiada o trelagizmie. Kelsier i Sazed omawiają postępy Vin na osobności; Kelsier ogłasza, że w weekend pójdą na bal w twierdzy Venture.',
			},
			'tfe-10': {
				title: 'Powrót do ekipy',
				description:
					'Vin wraca do Luthadelu z Fellise, by uczyć się o metalach od mgłowców ekipy, zaczynając od Breeze, który uczy ją łagodzenia. Hammond przybywa i dyskutuje o moralności obalania Imperium.',
			},
			'tfe-10.2': {
				title: 'Zgromadzenie w magazynach',
				description:
					'Vin uczestniczy w tajnym zgromadzeniu, gdzie Kelsier przemawia do robotników skaa. Potem Kelsier zwołuje spotkanie w sklepie Clubsa. Vin i Lestibournes rozmawiają o Marshu. Spotkanie kończy się, gdy żołnierz Hammonda donosi o odkryciu starej kryjówki Camona przez Ministerstwo.',
			},
			'tfe-11': {
				title: 'Masakra w kryjówce Camona',
				description:
					'Vin i ekipa badają zniszczoną kryjówkę; wszędzie trupy. Vin widzi Ulefa — ktoś gołymi rękami wyrwał mu klatkę piersiową. Sazed odmawia modlitwę religii katzi. Ciało Mileva jest przywiązane do krzesła, najwyraźniej torturowane.',
			},
			'tfe-12': {
				title: 'Pierwszy bal w twierdzy Venture',
				description:
					'Vin jedzie na swój pierwszy bal w twierdzy Venture z Sazedem jako woźnicą. Kelsier pojawia się po drodze, daje rady i znika we mgle. Vin zostaje przedstawiona jako lady Valette Renoux. Podczas kolacji dostrzega ojca po drugiej stronie sali. Odmawia tańca i wycofuje się na balkon na piętrze, gdzie po raz pierwszy rozmawia z Elendem Venture.',
			},
			'tfe-13': {
				title: 'Powrót do Fellise',
				description:
					'Sazed wypytuje Vin o jej kontakt z Elendem na posiadłości Renoux. Prawdziwa osobowość Vin zaczyna się ujawniać. Kelsier dowiaduje się, że ojciec Vin był na balu i wraca we mgle.',
			},
			'tfe-14': {
				title: 'Wewnątrz Kredik Shaw',
				description:
					'Kelsier zabiera Vin do Kredik Shaw i torują sobie drogę walką. Vin po raz pierwszy zabija. Trzech stalowych inkwizytorów ich okrąża. Vin chwyta skórzaną księgę do obrony. Pali atium i tymczasowo ucieka, ale inkwizytor wbija jej obsydianowy topór w bok. Ucieka z księgą, ale traci przytomność — coś odwraca uwagę ścigającego inkwizytora i obejmuje ją ochronnie. To nie był Kelsier.',
			},
			'tfe-15': {
				title: 'Raniona',
				description:
					'Ekipa kwestionuje decyzję Kelsiera. Sazed przynosi Vin na rękach. Podają jej cynę stopową by pomóc w gojeniu. Sazed operuje, a Hammond zanosi ją do pokoju na odpoczynek. Zauważają księgę; Sazed potwierdza, że jest napisana w khlennium.',
			},
			'tfe-16': {
				title: 'Rekonwalescencja w sklepie Clubsa',
				description:
					'Vin budzi się po dwóch tygodniach w sklepie Clubsa. Spook czuwał przy niej i opowiada, jak Kelsier nadał mu przezwisko. W rozmowie z Docksonem Vin uświadamia sobie, że z Sazedem jest coś bardzo niezwykłego.',
			},
			'tfe-16.2': {
				title: 'Powrót do Fellise',
				description:
					'Po kolejnych dniach odpoczynku Vin wraca na posiadłość Renoux w Fellise. Rozmawia z Sazedem, który wyjaśnia, czym są Strażnicy, i ujawnia, że wszyscy terriscy służący są kastraci.',
			},
			'tfe-17': {
				title: 'Ogród posiadłości Renoux',
				description:
					'Vin narzeka na cztery nudne tygodnie rekonwalescencji na posiadłości Renoux. Członkowie ekipy przybywają, by omówić nowinki. Vin przekonuje Kelsiera, by pozwolił jej pójść na kolejny bal. Później rozmawiają o Mare, motywacjach Kelsiera i „pęknięciu" — traumatycznym wydarzeniu, które budzi allomantyczne moce.',
			},
			'tfe-18': {
				title: 'Bal w twierdzy Elariel',
				description:
					'Vin idzie z Sazedem na bal w twierdzy Elariel. Elend siada przy jej stoliku i jak zwykle czyta. Chwali jej suknię, wprawiając ją w osłupienie. Tańczy z kilkoma szlachcicami i wypytuje o Elenda; słyszy o lady Shan Elariel. Zauważa, że Shan jest łagodzicielką. Wychodząc z balu Vin widzi strażnika podcinającego gardło młodego chłopca skaa-kucharza we mgle.',
			},
			'tfe-19': {
				title: 'Powrót do Fellise',
				description:
					'Kelsier wraca do dworu Renoux ścieżką ciernistą i spotyka się z Vin, Sazedem i Renoux. Robi Vin wykład o szlachcie, twierdząc że nie obchodzą ich skaa i że musi trzymać się z dala od Elenda Venture.',
			},
			'tfe-20': {
				title: 'Lekcje szukaczki',
				description:
					'Vin wraca z Luthadelu i widzi skrzynie z bronią przed dworem Renoux, gotowe dla rebeliantów. Marsh przybywa i uczy ją szukania — używania brązu do wykrywania innych allomantów — i dalszych szczegółów allomancji.',
			},
			'tfe-22': {
				title: 'Dziennik',
				description:
					'Vin czyta swoją kopię dziennika Ostatniego Imperatora na posiadłości Renoux, gdy pojawia się Spook. Mówi, że Dockson przyjechał po więcej broni, po czym czerwienieje, wręcza jej chustkę i ucieka. Sazed wyjaśnia później, że podarowanie chustki przez młodego mężczyznę wyraża poważne intencje zalotów. Czekając na Docksona, Vin rozmawia z Sazedem o Terrisach w dzienniku; Sazed ujawnia tajemnice ferochemii i założenie Strażników. Potem Vin rozmawia z Docksonem, który opowiada, jak lord Devinshae zabrał kobietę, którą kochał, i zabił ją następnego ranka.',
			},
			'tfe-23': {
				title: 'Bal w twierdzy Hastingsów',
				description:
					'Vin idzie na bal w twierdzy Hastingsów. Lady Shan prosi Vin, by następnym razem sprawdziła książki Elenda. Vin znajduje Elenda i pyta, czy był ze skaanką. Przyznaje, że ojciec zmusił go w wieku trzynastu lat, a kobieta została potem zabita. Elend daje jej chustkę. Po odejściu z przyjaciółmi Vin śledzi ich allomantycznie do wieży, gdzie dyskutują o porażkach Ostatniego Imperatora. Kelsier niespodziewanie się pojawia i drwi z ich pomysłów.',
			},
			'tfe-24': {
				title: 'Spotkanie ekipy',
				description:
					'Vin i Kelsier przybywają do sklepu Clubsa, gdzie zebrała się większość ekipy. Kelsier omawia stan misji, a Vin uświadamia sobie, jak bardzo lubi swoje nowe życie. Kelsier, Spook, Hammond i Clubs dzielą nocnego drinka.',
			},
			'tfe-24.2': {
				title: 'Wizyta w garnizonie',
				description:
					'Vin przebiera się za ulicznego chłopaka i idzie z Hammondem do garnizonu Luthadelu, by uczyć się o cynie stopowej. Hammond wyjaśnia, że wielu żołnierzy to zwykli ludzie skaa. Strażnik imieniem Sertts informuje ich, że garnizon jest mobilizowany — rebelia skaa zaatakowała garnizon Holstepu na północy.',
			},
			'tfe-25': {
				title: 'Pilne wiadomości',
				description:
					'W sklepie Clubsa Hammond przynosi wieść, że garnizon Luthadelu wyruszył do Holstepu. Kelsier każe Vin połknąć pięć cynowych kulek, by biec na północ i ostrzec armię rebeliantów.',
			},
			'tfe-25.2': {
				title: 'Cynowy bieg',
				description:
					'Vin i Kelsier biegną szesnaście godzin bez przerwy paląc cynę w desperackim biegu. Znajdują resztki armii rebeliantów oblężonej i wymordowanej przez garnizon Valtroux. Kelsier chce walczyć, Vin przekonuje go, że nie są niezwyciężeni. Docierają do jaskiń Arguois, gdzie dwa tysiące żołnierzy przeżyło dzięki Mennisowi.',
			},
			'tfe-26': {
				title: 'Regeneracja',
				description:
					'Vin leży wyczerpana w sklepie Clubsa. Powrót do Luthadelu trwał dwa tygodnie. Kelsier wpada; Breeze go oskarża. Kelsier przyznaje się do porażki, ale nie rezygnuje.',
			},
			'tfe-26.2': {
				title: 'Egzekucje',
				description:
					'Spook donosi o egzekucjach na placu Fontanny. Ekipa wchodzi na dachy. Vin wskazuje swojego ojca — obligatora imieniem Tevidian, lorda prelata, najwyższego rangą obligatora. Patrzą, jak kobiety i dzieci wyciągane z wozów więziennych są mordowane, a fontanna czerwieni się od krwi.',
			},
			'tfe-27': {
				title: 'Planowanie kolejnych kroków',
				description:
					'Ekipa wraca do sklepu Clubsa. Kelsier, Vin i reszta przerabiają plan rozpętania wojny rodów. Sazed przybywa z listem Marsha i instrukcjami spotkania.',
			},
			'tfe-27.2': {
				title: 'Spotkanie z Marshem',
				description:
					'Kelsier i Vin idą do opuszczonego budynku na Krętaczkach, by spotkać się z Marshem. Czekając, Kelsier opowiada o złocie. Marsh przybywa z tatuażem niższego obligatora z wydziału Inkwizycji. Ujawnia, że Ministerstwo rozmieszcza łagodzicieli w dzielnicach skaa pod stałym łagodzeniem, ukrytych przez dymiarzy. Potwierdza też, że inkwizytorzy mogą umrzeć ze starości.',
			},
			'tfe-28': {
				title: 'Bal w twierdzy Likal',
				description:
					'Vin uczestniczy w balu w twierdzy Likal i zaczyna rozsiewać plotki, by eskalować wojnę rodów. Elend pojawia się — mówi, że chce ją pocałować, ale Vin upiera się, że jej naprawdę nie zna. Podczas spaceru Elend ujawnia, że majątek Venture pochodzi wyłącznie z wydobycia atium w Dołkach Hathsin. Wspomina, że ród Tekiel został wymazany przez ród Hastings i próbuje przekonać Valette do opuszczenia Luthadelu.',
			},
			'tfe-29': {
				title: 'Ostatnie tłumaczenie',
				description:
					'Vin czyta ostatnie tłumaczenie dziennika przygotowane przez Sazeda na posiadłości Renoux i jest sfrustrowana, że nie ma więcej. Sazed wyjaśnia ferochemię bardziej szczegółowo, a Vin próbuje spalić jeden z jego cynowych umysłów. Później Kelsier dołącza do ekipy, by zbadać mapę Marsha. Odkrywają, że gang Therona został zaatakowany, a Vin podejrzewa, że inkwizytorzy nadal ją ścigają.',
			},
			'tfe-30': {
				title: 'Bal Venture',
				description:
					'Vin i Sazed idą na ostatni bal rodowy w twierdzy Venture. Panna Kliss okazuje się informatorem i próbuje szantażować ród Renoux. Za szafirowy naszyjnik Kliss zdradza Vin, że zabójcy Elariel spróbują dziś wieczorem zabić Elenda. Vin zmusza Kliss allomantycznie do wyznania wszystkiego. Rozbija witraż i ucieka. Na zewnątrz walczy z dwoma osiłkami, dwoma strzelcami monet i dwiema Zrodzonymi z Mgły — jedną z nich jest Shan Elariel. Vin oszukuje Shan, zmuszając ją do wyczerpania atium jako pierwsza, i zabija ją.',
			},
			'tfe-31': {
				title: 'Po pojedynku',
				description:
					'Vin wpada do kuchni Clubsa obandażowana i w strzępach. Kelsier upomina ją za ratowanie Elenda, ale Vin krzyczy, że skaa i szlachta się nie różnią — Elend jest dobry. Na dachu Vin mówi, że ród Venture zarządza Dołkami i dzieli się teorią, że inkwizytorzy widzą przez miedziany płaszcz. Kelsier testuje i potwierdza.',
			},
			'tfe-32': {
				title: 'Warta na dachu',
				description:
					'Vin i Spook pełnią wartę na dachu sklepu Clubsa. Spook uczy ją sztuczek z cyną: nie tylko wzmacniać zmysły, ale filtrować to, co ważne. Później Kelsier i Vin znajdują ciało Marsha — całkowicie pozbawione krwi. Znajdują list wyjaśniający, że inkwizytorzy prawdopodobnie go znajdą.',
			},
			'tfe-33': {
				title: 'Awaryjne schronienie',
				description:
					'Ekipa przenosi się do wilgotnej zapasowej piwnicy koło sklepu Clubsa — trzy izby. Kelsier ogłasza zniszczenie atium w Dołkach. Spook pełni wartę jako cynowy strażnik.',
			},
			'tfe-33.2': {
				title: 'Walka z inkwizytorem',
				description:
					'Wszyscy podążają za Kelsierem na plac Fontanny. Widzą Spooka i lorda Renoux w wozie egzekucyjnym. Kelsier walczy z inkwizytorem na placu. Elend widzi służących Renoux zamkniętych i woła Valette, ale nie może jej znaleźć.',
			},
			'tfe-34': {
				title: 'Śmierć Ocalałego',
				description:
					'Kelsier walczy z inkwizytorem w pełnoskalowej walce na placu Fontanny — obaj palą atium. Vin obserwuje z góry: Kelsier jest prawdziwym mistrzem pchania i ciągnięcia. Zabija inkwizytora, skaa skandują „Ocalały z Hathsin". Ostatni Imperator przybywa w czarnym powozie. Kelsier ginie. Vin zeskakuje i tuli go, gdy umiera.',
			},
			'tfe-35': {
				title: 'Dziedzictwo Ocalałego',
				description:
					'Vin wraca do awaryjnego schronienia. Wściekła, że Kelsier nie był szczery — planował umrzeć i ją zostawić. Sazed pociesza. Na zewnątrz skaa mówią o Władcy mgły. W pobliskim magazynie ekipa widzi kandrę w postaci Kelsiera. Kelsier zostawił listy z instrukcjami przejęcia miasta. List Vin mówi, że nie rozwiązał zagadki jedenastego metalu. Vin postanawia odkryć, co ukrywał Ostatni Imperator.',
			},
			'tfe-36': {
				title: 'Wewnątrz Kredik Shaw',
				description:
					'Vin cicho zmierza ku Kredik Shaw, zachęcając strażników na zewnątrz, by przyłączyli się do buntu. Wewnątrz zabija dwóch inkwizytorów. W następnej sali na krześle siedzi stary człowiek. Inkwizytor chwyta Vin za szyję — staruszek przemawia, a inkwizytorzy nazywają go Ostatnim Imperatorem. Ale Vin jest zdezorientowana: Imperator na placu Fontanny był młody. Pali jedenasty metal i widzi dwie widmowe postacie obok staruszka.',
			},
			'tfe-37': {
				title: 'Ratunek i odkrycie',
				description:
					'Inkwizytorzy zmuszają Vin do spalenia metalu, który znosi wszystkie inne metale. Zostaje zaprowadzona przed tron Ostatniego Imperatora — młoda wersja, zabójca Kelsiera. Jej ojciec Tevidian, najwyższy obligator, zostaje stracony przez inkwizytorów. Vin odkrywa, że Reen nigdy jej nie zdradził: zniósł tortury i powiedział inkwizytorom, że umarła z głodu. Sazed zostaje doprowadzony do jej celi i uwalnia ferokemiczną moc, wyłamując drzwi. Elend i sześciu żołnierzy szturmuje. Vin znajduje pelerynę i fiolkę z metalami. Elend wie już, że jest Zrodzona z Mgły. Vin bierze jego twarz w dłonie, całuje go i rusza zabić Ostatniego Imperatora.',
			},
			'tfe-38': {
				title: 'Pogromczyni Ostatniego Imperatora',
				description:
					'Vin skacze między iglicami Kredik Shaw w górę. Inkwizytor Kar chwyta ją za szyję, ale inny inkwizytor wyciąga metalowy gwóźdź z karku Kara, zabijając go natychmiast. To Marsh — żywy, z jedenastoma gwoździami w ciele. Zabił wszystkich innych inkwizytorów. Prawdziwe imię Ostatniego Imperatora to Rashek: zamordował Bohatera Wieków i zajął jego miejsce. Vin zrywa bransolety Imperatora. Bez ferokemicznej młodości staje się słabym starcem. Sazed pojawia się z fiolką metali. Vin wbija mu włócznię w serce. Tysiąc lat ucisku dobiega końca.',
			},
			'tfe-39': {
				title: 'Nowa era',
				description:
					'Sazed, Marsh i Vin stoją na dachu budynku koło dzielnicy skaa. Sazed wyjaśnia, że Ostatni Imperator był zarówno ferochemikiem, jak i allomantą — bransolety przechowywały jego młodość. Marsh opisuje swoje przeżycie i przemianę: jedenaście metalowych gwoździ — dwa przez oczy, osiem w klatce piersiowej, jeden w plecach. Opowiada też o kandrach — istotach wyewoluowanych z mgłoduchów — które teraz uznają Vin za swoją panią.',
			},
			'tfe-39.2': {
				title: 'Vin i Elend',
				description:
					'Vin potajemnie obserwuje Elenda z mgły. Wszyscy zaakceptowali go jako króla. Biegnie do niego i obejmują się.',
			},
			'woa-1': {
				title: 'Strażniczka miasta',
				description:
					'Vin patroluje mury Luthadelu co noc, gdy trzy armie gromadzą się wokół wyzwolonego miasta.',
			},
			'woa-2': {
				title: 'Zasadzka w mgle',
				description:
					'Vin wpada w zasadzkę ośmiu allomantyków. Tajemniczy Zrodzony z Mgły — Obserwator — interweniuje.',
			},
			'woa-3': {
				title: 'Mgłoduch',
				description: 'Vin spotyka mgłoducha. Ham donosi, że zabójcy przyszli od króla Cetta.',
			},
			'woa-5': {
				title: 'Odrodzenie OreSeura',
				description: 'Vin kupuje wilczura i daje go kandrze jako nowe ciało. Odkrywa duraluminium.',
			},
			'woa-6': {
				title: 'Trening na dziedzińcu',
				description: 'Vin trenuje z Hamem. Spook wraca z zadań zwiadowczych.',
			},
			'woa-8': {
				title: 'Ścigając Obserwatora',
				description: 'Vin ściga Obserwatora po dachach. Odkrywa niszczycielski efekt duraluminium.',
			},
			'woa-10': {
				title: 'Straż Zgromadzenia',
				description: 'Vin i Ham chronią Elenda w Zgromadzeniu. Druga armia przybywa pod Luthadel.',
			},
			'woa-11': {
				title: "Ratując Breeze'a",
				description:
					"Vin ratuje Breeze'a pchnięciem stali z duraluminium. Ekipa znajduje kości kandry.",
			},
			'woa-13': {
				title: 'Mgłoduch powraca',
				description: 'Vin zauważa, że mgła przychodzi wcześniej. Elend zwołuje radę wojenną.',
			},
			'woa-14': {
				title: 'Przybycie Tindwyl',
				description: 'Tindwyl uczy Elenda królewskości. Vin nie ufa stanowczej Terrisance.',
			},
			'woa-16': {
				title: 'Badając dziennik',
				description: 'Vin analizuje dziennik Alendiego szukając wzmianek o mgłoduchu i Głębi.',
			},
			'woa-17': {
				title: 'Pojedynek z Obserwatorem',
				description:
					"Vin konfrontuje Zane'a. Zaciekły pojedynek na pchnięcia stali w Fortecy Hastings.",
			},
			'woa-20': {
				title: 'Rada wojenna',
				description: 'Vin obserwuje dyskusję o strategii. Allrianne Cett przybywa.',
			},
			'woa-21': {
				title: 'Przybycie Allrianne',
				description: "Allrianne Cett przybywa do pałacu i obejmuje Breeze'a.",
			},
			'woa-22': {
				title: 'Napięcia polityczne',
				description: "Vin ściga Zane'a w mgle, oblężenie się zacieśnia.",
			},
			'woa-24': {
				title: 'Nocna straż',
				description: 'Vin stoi na straży przy balkonie Elenda. Zane ją znajduje.',
			},
			'woa-25': {
				title: 'Zakupy i potyczka',
				description: 'Tindwyl zabiera Vin na zakupy. Alarm — armia Straffa atakuje.',
			},
			'woa-26': {
				title: 'Negocjacje ze Straffem',
				description: 'Vin towarzyszy Elendowi do obozu Straffa, demonstrując przerażającą moc.',
			},
			'woa-27': {
				title: 'Blef',
				description:
					'Blef się udaje. Zgromadzenie zagłosowało o wotum nieufności — Elend nie jest już królem.',
			},
			'woa-28': {
				title: 'Powrót z negocjacji',
				description: "Vin wraca do Fortecy Venture, dręczona szeptami Zane'a.",
			},
			'woa-29': {
				title: 'Bezsenność i wgląd',
				description: 'Vin i OreSeur siedzą w nocnej mgle. Vin ma olśnienie o naturze Głębi.',
			},
			'woa-30': {
				title: 'Teoria Głębi',
				description: 'Vin czyta transkrypcje Sazeda i sugeruje, że mgła to Głębia.',
			},
			'woa-31': {
				title: 'Nominacja Penroda',
				description: 'Elend nominuje lorda Penroda na kanclerza. Rozpoczyna się wybór króla.',
			},
			'woa-33': {
				title: 'Sekrety kandry',
				description:
					'Vin zastanawia się, czy jest prawdziwą Bohaterką. OreSeur ujawnia religię kandry.',
			},
			'woa-34': {
				title: 'Zane na dachu',
				description: "Vin znajduje Zane'a na dachu. Paląc atium, atakuje. Kolosy są dzień drogi.",
			},
			'woa-35': {
				title: 'Kolacja z Cettem',
				description: 'Vin i Elend jedzą kolację z lordem Cettem. Cett oferuje jedzenie za atium.',
			},
			'woa-36': {
				title: 'Kościół Ocalałego',
				description:
					'Vin odkrywa, że Demoux prowadzi Kościół Ocalałego. Obiecuje zachować tajemnicę.',
			},
			'woa-38': {
				title: 'Wybory i zamach',
				description:
					'Elend ujawnia członkostwo w Kościele Ocalałego. Zamachowiec atakuje. Wybierają Penroda.',
			},
			'woa-40': {
				title: 'Rekonwalescencja',
				description: 'Vin budzi się w szpitalu z Elendem obok. Zane zostawia atium.',
			},
			'woa-43': {
				title: 'Atak na Cetta',
				description:
					'Vin i Zane atakują Fortecę Hastings. Vin dociera do Cetta, ale prosi o litość.',
			},
			'woa-44': {
				title: 'Kryjówka Camona',
				description: 'Vin ukrywa się w starej kryjówce Camona. Mówi, że muszą opuścić Luthadel.',
			},
			'woa-45': { title: 'Rada o miłości', description: 'Vin odwiedza Sazeda po radę o miłości.' },
			'woa-46': {
				title: 'Komnata Imperatora',
				description: 'Vin idzie do sekretnej komnaty w Kredik Shaw. Czuje pulsowanie Studni.',
			},
			'woa-47': {
				title: "Pojedynek z Zane'em",
				description:
					"Zane próbuje namówić Vin do odejścia. Wybiera zaufanie Elenda. Zabija Zane'a.",
			},
			'woa-49': {
				title: 'Ucieczka przez Cynową Bramę',
				description: 'Vin, Elend i Spook opuszczają Luthadel.',
			},
			'woa-50': {
				title: 'Zwijanie obozu',
				description: 'Spook wyczuwa coś w mgle — Vin rozpoznaje mgłoducha.',
			},
			'woa-51': {
				title: 'Jastes i prawda',
				description:
					'Vin przeszywa mgłoducha nad Elendem. Elend wykonuje egzekucję Jastesa. Spook ujawnia oszustwo.',
			},
			'woa-52': {
				title: 'Cynowy bieg',
				description: 'Vin biegnie samotnie z powrotem w desperackim cynowym biegu.',
			},
			'woa-53': {
				title: 'Vin ratuje Sazeda',
				description: 'Vin przybywa na czas i miażdży kolosy, ratując Sazeda.',
			},
			'woa-54': {
				title: 'Kontrolując kolosy',
				description:
					'Vin odkrywa, że może kontrolować kolosy przez słabość wbudowaną przez Imperatora.',
			},
			'woa-55': {
				title: 'Pokonując Straffa',
				description: 'Vin wylatuje z miasta, powala Straffa i jego oficerów.',
			},
			'woa-57': {
				title: 'Tajemne drzwi',
				description:
					'Vin prowadzi Hammonda i Spooka do Kredik Shaw. Otwiera ukryte allomantyczne drzwi.',
			},
			'woa-58': {
				title: 'Odkrycie Studni',
				description: 'Vin znajduje Studnię Wstąpienia. Mgłoduch przeszywa Elenda.',
			},
			'woa-59': {
				title: 'Uwalniając moc',
				description: 'Vin bierze moc Studni. Zwiedziona, uwalnia moc. "Jestem wolny!"',
			},
			'woa-60': {
				title: 'Na murach',
				description: 'Vin stoi z uzdrowionym Elendem. Wyznaje straszliwy błąd.',
			},
			'hoa-3': {
				title: 'Pierwsza skrytka',
				description: 'Vin otwiera skrytkę w Vetitanie, znajdując zapasy i płytkę Imperatora.',
			},
			'hoa-8': { title: 'Mgielna choroba', description: 'Vin obserwuje mgłę atakującą uchodźców.' },
			'hoa-10': {
				title: 'Ponowne spotkanie armii',
				description: 'Sazed, Breeze i inni doganiają armię Elenda.',
			},
			'hoa-12': { title: 'Rada wojenna', description: 'Elend pyta: "Co zrobiłby Kelsier?"' },
			'hoa-15': {
				title: 'Wróg w mgle',
				description: 'Vin nie czuje się już chroniona przez mgłę.',
			},
			'hoa-21': {
				title: 'Szesnaście procent',
				description: 'Vin każe przeliczyć dane — dokładnie szesnaście procent.',
			},
			'hoa-25': {
				title: 'Wyruszając na zwiad',
				description: 'Vin infiltruje Fadrex. Elend oferuje towarzystwo.',
			},
			'hoa-27': {
				title: 'Informator Slowswift',
				description: 'Vin odwiedza Slowswifta. Dziś bal, mimo oblężenia.',
			},
			'hoa-27.2': {
				title: 'Zwiad w Ministerstwie',
				description: 'Vin robi zwiad w Ministerstwie Zasobów.',
			},
			'hoa-28': {
				title: 'Zaufanie i śmiały plan',
				description: 'Vin proponuje wtargnąć na bal Yomena.',
			},
			'hoa-30': {
				title: 'Lady Patresen',
				description: 'Elend i Vin idą na bal. Vin konfrontuje lady Patresen.',
			},
			'hoa-37': {
				title: 'Tworząc kolosy',
				description: 'Vin odkrywa, że kolosy robi się z ludzi.',
			},
			'hoa-40': {
				title: 'Trzecia sztuka',
				description: 'Vin widzi układankę: Hemalurgia — trzecia metaliczna sztuka.',
			},
			'hoa-43': { title: 'Drugi bal', description: 'Vin wykrywa szpiegów i obezwładnia ich.' },
			'hoa-44': {
				title: 'Wewnątrz skrytki',
				description: 'Drzwi zamykają się. Ruina stoi przed nią z twarzą Reena.',
			},
			'hoa-45': {
				title: 'Twarz Ruiny',
				description: 'To Ruina. Mówi, że był z nią od dzieciństwa.',
			},
			'hoa-48': {
				title: 'Ostatnie słowa Imperatora',
				description: 'W ciemności Vin znajduje ostatnie wyznanie Imperatora.',
			},
			'hoa-50': {
				title: 'Zatrute wino',
				description: 'Telden Hasting oferuje zatrute wino. Vin pije i traci przytomność.',
			},
			'hoa-54': {
				title: 'Więzień Yomena',
				description: 'Vin budzi się w kajdanach. Yomen zwraca kolczyk.',
			},
			'hoa-57': {
				title: 'Natura Ruiny',
				description: 'Ruina uczy o entropii. Vin rozumie: szepty wzmacniające.',
			},
			'hoa-60': {
				title: 'W sądzie obligatorów',
				description: 'Vin przed Yomenem. Uwalnia się, ale on pali atium.',
			},
			'hoa-63': {
				title: 'Zrodzona z Mgły atium',
				description: 'Vin odkrywa: Yomen jest Widzącym. Marsh przybywa.',
			},
			'hoa-65': {
				title: 'Wyzwolenie',
				description: 'Vin kradnie fiolkę Marsha, usuwa kolczyk, wbija gwóźdź w czoło Marsha.',
			},
			'hoa-67': {
				title: 'Nadciągająca burza',
				description: 'Armia kolosów pod Fadrexem. Vin każe Elendowi jechać po atium.',
			},
			'hoa-67.2': {
				title: 'Wylot do Luthadelu',
				description: 'Vin leci na wschód, odciągając inkwizytorów od Elenda.',
			},
			'hoa-72': {
				title: 'Kolczyk',
				description: 'Marsh torturuje Vin. Zauważa kolczyk i wyrywa go. Głos Ruiny milknie.',
			},
			'hoa-73': {
				title: 'Wniebowstąpienie',
				description: 'Vin unicestwia inkwizytorów i Kredik Shaw.',
			},
			'hoa-76': {
				title: 'Witaj w boskości',
				description: 'Vin unosi się nad Luthadelem z mocą Zachowania.',
			},
			'hoa-79': { title: 'Ścigając Ruinę', description: 'Vin ściga Ruinę do Dołków Hathsin.' },
			'hoa-80': {
				title: 'Wiatrowy przewodnik',
				description: 'Vin szepcze imię Elenda na wietrze, prowadząc go.',
			},
			'hoa-81': {
				title: 'Obserwując bitwę',
				description:
					'Elend prowadzi Widzących. Jego miecz przebija szyję Marsha. Umiera z uśmiechem.',
			},
			'hoa-81.2': { title: 'Ostatni atak', description: 'Vin atakuje Ruinę. Atak zabija oboje.' },
			'hoa-83': {
				title: 'Pole odrodzenia',
				description: 'Ciało Vin na polu kwiatów — świat odtworzony przez Sazeda.',
			},
		},
		sazed: {
			...enData.movements.sazed,
			'tfe-9': {
				title: 'Terryski sługa',
				description:
					'Sazed przybywa na posiadłość lorda Renoux w Fellise jako nauczyciel i sługa Vin, ucząc ją etykiety, tańca i manier. Przedstawia jej trelagizm — piątą religię, którą proponuje — i przyznaje, że zna jeszcze 562.',
			},
			'tfe-10.2': {
				title: 'Zgromadzenie w magazynach',
				description:
					'Sazed uczestniczy w tajnym zgromadzeniu z Kelsierem i Vin, obserwując Ocalałego przemawiającego do robotników skaa.',
			},
			'tfe-12': {
				title: 'Strażnik na balu',
				description:
					'Sazed towarzyszy Vin jako sługa na pierwszy bal w twierdzy Venture, pilnując jej podczas infiltracji szlacheckiego towarzystwa.',
			},
			'tfe-13': {
				title: 'Odprawa w Fellise',
				description:
					'Sazed wraca na posiadłość Renoux w Fellise z Vin i Kelsierem, by omówić wyniki pierwszego balu Vin i zaplanować kolejne kroki.',
			},
			'tfe-15': {
				title: 'Ratowanie Vin',
				description:
					'Sazed przynosi Vin do sklepu Clubsa, ratuje ją i operuje rany z Kredik Shaw. Bada też księgę napisaną w khlennium.',
			},
			'tfe-16': {
				title: 'Powrót do Fellise',
				description:
					'Po ustabilizowaniu stanu Vin w sklepie Clubsa Sazed wraca na posiadłość Renoux w Fellise.',
			},
			'tfe-17': {
				title: 'Tłumaczenie księgi khlennijskiej',
				description:
					'W bibliotece na posiadłości Renoux w Fellise Sazed pracuje nad tłumaczeniem księgi khlennijskiej, którą Vin przyniosła z Kredik Shaw.',
			},
			'tfe-18': {
				title: 'Strażnik w Elariel',
				description:
					'Sazed towarzyszy Vin jako terryski sługa na bal w twierdzy Elariel, pilnując jej wśród szlacheckiego dworu.',
			},
			'tfe-19': {
				title: 'Wymiana informacji',
				description:
					'Sazed jest na dworze Renoux, gdy Kelsier wraca ścieżką ciernistą. Wymieniają informacje o rodach szlacheckich i postępach buntu, Kelsier upomina Vin za zbliżanie się do Elenda.',
			},
			'tfe-22': {
				title: 'Tajemnice ferochemii',
				description:
					'Na posiadłości Renoux Sazed rozmawia z Vin o Terrysach w dzienniku Ostatniego Imperatora. Ujawnia tajemnice ferochemii i wyjaśnia, jak Strażnicy zostali założeni po utracie terryskich religii. Z dziennika dowiaduje się też nowych faktów — że ziemia była kiedyś zielona i żyzna.',
			},
			'tfe-23': {
				title: 'Strażnik w Hastings',
				description:
					'Sazed towarzyszy Vin jako terryski sługa na bal w twierdzy Hastingsów, czekając gdy ona rozsyła plotki i rozmawia ze szlachtą.',
			},
			'tfe-27': {
				title: 'List od Marsha',
				description:
					'Sazed wraca do sklepu Clubsa z listem od Marsha zawierającym wieści i instrukcje spotkania. Przynosi też tłumaczenia dziennika Imperatora.',
			},
			'tfe-28': {
				title: 'Strażnik w Likal',
				description:
					'Sazed towarzyszy Vin jako terryski sługa na bal w twierdzy Likal, czekając gdy ona eskaluje wojnę rodów i rozmawia z Elendem.',
			},
			'tfe-29': {
				title: 'Lekcje ferochemii',
				description:
					'Na posiadłości Renoux Sazed daje Vin ostatnie tłumaczenie dziennika. Wyjaśnia ferochemię dokładniej, a Vin próbuje spalić jeden z jego cynowych umysłów. Później Sazed dołącza, gdy Kelsier studiuje szczegółową mapę Marsha. Tej nocy Kelsier prosi Sazeda o opowiedzenie kilku religii.',
			},
			'tfe-30': {
				title: 'Strażnik w Venture',
				description:
					'Sazed towarzyszy Vin na ostatni bal rodowy w twierdzy Venture. Goście zawierają sojusze, a lady Valette jest chłodno przyjmowana. Sazed opuszcza bal zanim Vin odkryje zamach na Elenda i walczy z Shan Elariel.',
			},
			'tfe-31': {
				title: 'Opatrywanie ran Vin',
				description:
					'Sazed opatruje rany Vin w sklepie Clubsa po tym, jak przybywa poraniona z walki z Shan Elariel i zabójcami Elariela. Słucha, gdy Vin relacjonuje wydarzenia wieczoru.',
			},
			'tfe-33': {
				title: 'Awaryjne schronienie',
				description:
					'Sazed jest z ekipą w zapasowej piwnicy koło sklepu Clubsa po tym, jak Kelsier zniszczył Dołki Hathsin. Vin rozmawia z Sazedem o jedenastym metalu. Gdy skaa prowadzeni na egzekucję na plac Fontanny i Spook pojawia się w wozie więziennym, Sazed zostaje w schronieniu podczas walki Kelsiera z inkwizytorem.',
			},
			'tfe-35': {
				title: 'Pocieszanie Vin',
				description:
					'Sazed jest przy Vin w awaryjnym schronieniu po śmierci Kelsiera. Oferuje pocieszające słowa, a Vin jest wściekła, że Kelsier ją zostawił. Zostaje, gdy ekipa idzie do magazynu zobaczyć kandrę w postaci Kelsiera.',
			},
			'tfe-37': {
				title: 'Uwolniony ferochemik',
				description:
					'Sazed zostaje doprowadzony do celi Vin w Kredik Shaw. Wydaje się kurczyć, a potem jego mięśnie pęcznieją do dwukrotnego rozmiaru — uwalnia zgromadzoną ferokemiczną moc i wyłamuje drzwi.',
			},
			'tfe-38': {
				title: 'Upadek Imperium',
				description:
					'Sazed pojawia się w ostatecznej konfrontacji w Kredik Shaw z fiolką metali dla Vin. Jest świadkiem upadku Ostatniego Imperatora — gdy Vin zrywa bransolety, gwałtownie się starzeje.',
			},
			'tfe-39': {
				title: 'Zrozumienie tyrana',
				description:
					'Sazed wyjaśnia, że Imperator był ferochemikiem i allomantą. Spekuluje o kastracji terrisańskich służących.',
			},
			'woa-7': {
				title: 'Powrót Marsha',
				description:
					'Sazed naucza wyzwolonych skaa. Marsh oferuje poprowadzić go do Konwentyklu Seran.',
			},
			'woa-9': {
				title: 'Podróż do Konwentyklu',
				description: 'Sazed i Marsh podróżują. Marsh staje się coraz dziwniejszy.',
			},
			'woa-12': {
				title: 'Odszyfrowując płyty',
				description: 'Sazed odkrywa ostrzeżenie Kwaana: proroctwa zostały zmienione.',
			},
			'woa-15': {
				title: 'Śmierć w mgle',
				description: 'Sazed znajduje wioski, gdzie ludzie zmarli w mgle.',
			},
			'woa-19': {
				title: 'Armia kolosów',
				description: 'Sazed napotyka armię kolosów. Zostaje pojmany.',
			},
			'woa-22': {
				title: 'Powrót do Luthadelu',
				description: 'Sazed przybywa z wieściami o zmienionych proroctwach.',
			},
			'woa-23': {
				title: 'Trzecia armia',
				description: 'Sazed raportuje o kolosach. Ostrzega, że mgła zabija.',
			},
			'woa-30': {
				title: 'Przepisywanie inskrypcji',
				description: 'Sazed przepisuje inskrypcje. Vin sugeruje, że mgła to Głębia.',
			},
			'woa-36': {
				title: 'Schronienie w magazynie',
				description: 'Sazed pociesza uchodźców w arsenale.',
			},
			'woa-37': {
				title: 'Debata o Głębi',
				description: 'Sazed i Tindwyl studiują biografię króla Wednegona.',
			},
			'woa-40': {
				title: 'Dyskusja o proroctwie',
				description: 'Sazed i Tindwyl porównują wersje proroctw.',
			},
			'woa-41': { title: 'Zmienione proroctwa', description: 'Elend prosi o radę.' },
			'woa-45': {
				title: 'Wydarte rogi',
				description: 'Tindwyl odkrywa wydarte rogi. Vin i Elend proszą o radę.',
			},
			'woa-46': {
				title: 'Plan ucieczki',
				description: 'Sazed potajemnie zbiera ekipę. Planują ewakuację przed bitwą.',
			},
			'woa-49': {
				title: 'Patrząc jak odchodzą',
				description: 'Sazed patrzy z murów, jak grupa Elenda ucieka.',
			},
			'woa-50': {
				title: 'Przygotowując się na najgorsze',
				description: 'Sazed napełnia metalowe umysły przed atakiem.',
			},
			'woa-51': { title: 'Kolosy atakują', description: 'Sazed obserwuje atak ze Stalowej Bramy.' },
			'woa-52': {
				title: 'Święty Pierwszy Świadek',
				description: 'Sazed broni Stalowej Bramy. Tłum go tak nazywa.',
			},
			'woa-53': {
				title: 'Obrona Stalowej Bramy',
				description: 'Sazed walczy. Cynowa Brama upadła.',
			},
			'woa-54': {
				title: 'Szukając Tindwyl',
				description: 'Sazed znajduje ciało Tindwyl i pogrąża się w żałobie.',
			},
			'woa-55': {
				title: 'Obejmując dowództwo',
				description: 'Vin powierza Sazedowi dowództwo nad miastem.',
			},
			'woa-57': {
				title: 'Walka z Marshem',
				description: 'Sazed to Święty Pierwszy Świadek. Marsh atakuje go.',
			},
			'woa-58': {
				title: 'Przetrwanie Inkwizytora',
				description: 'Marsh łamie żebra Sazeda, ale ten leczy się metalami.',
			},
			'woa-59': {
				title: 'Za późno przy Studni',
				description: 'Sazed dociera za późno — Vin już uwolniła moc.',
			},
			'woa-60': {
				title: 'Utrata wszelkiej wiary',
				description: 'Sazed wraca do Konwentyklu. Traci wiarę we wszystkie religie.',
			},
			'hoa-4': {
				title: 'Południowa dyplomacja',
				description: 'Sazed podróżuje z Breezem negocjować traktat.',
			},
			'hoa-8': { title: 'W drodze do armii', description: 'Sazed i Breeze jadą do armii Elenda.' },
			'hoa-10': {
				title: 'Ponowne spotkanie z armią',
				description: 'Sazed i inni doganiają armię.',
			},
			'hoa-12': { title: 'Rada wojenna', description: 'Sazed uczestniczy w radzie wojennej.' },
			'hoa-18': {
				title: 'Podróż na północ',
				description: 'Sazed, Breeze, Allrianne i Goradel jadą do Urteau.',
			},
			'hoa-18.2': {
				title: 'Wśród Terrisan',
				description: 'Sazed radzi starszyźnie w Dołkach Hathsin.',
			},
			'hoa-22': {
				title: 'Terrisańska anomalia',
				description: 'Żaden Terrisanin nie choruje na mgielną chorobę.',
			},
			'hoa-25': { title: 'Opuszczając Terrisan', description: 'Sazed rusza dalej na północ.' },
			'hoa-29': {
				title: 'Wezwany przez Obywatela',
				description: 'Sazed i inni przybywają do Urteau.',
			},
			'hoa-29.2': {
				title: 'Podziemne jezioro',
				description: 'Spook prowadzi grupę do skrytki Imperatora.',
			},
			'hoa-31': { title: 'Przekierowanie wody', description: 'Dyskutują, jak obalić Quelliona.' },
			'hoa-38': { title: 'Ocalały z płomieni', description: 'Sazed słyszy o Ocalałym z płomieni.' },
			'hoa-41': { title: 'Tożsamość Ocalałego', description: 'Sazed rozpoznaje Spooka.' },
			'hoa-46': {
				title: 'Trelagizm i zaufanie',
				description: 'Spook prosi o przywrócenie wody w kanałach.',
			},
			'hoa-49': {
				title: 'Inżynieria kanałów',
				description: 'Sazed bada, jak napełnić suche kanały.',
			},
			'hoa-53': {
				title: 'Obserwując wzrost Spooka',
				description: 'Sazed słyszy opowieści Spooka.',
			},
			'hoa-56': {
				title: 'Potrzeba wiary',
				description: 'Sazed uświadamia sobie, czego mu brakowało.',
			},
			'hoa-50': {
				title: 'Odkrycie jaskini',
				description: 'Sazed odkrywa mechanizm napełniania kanałów.',
			},
			'hoa-58': {
				title: 'Ratując Urteau',
				description: 'Sazed uczy Spooka obsługi urządzenia. Spook ratuje miasto.',
			},
			'hoa-59': { title: 'Brzemię Zwiastuna', description: 'TenSoon przybywa. Musi zobaczyć Vin.' },
			'hoa-62': {
				title: 'Zwiastun',
				description: 'Sazed czuwa przy Spooku. TenSoon ujawnia prawdę.',
			},
			'hoa-66': {
				title: 'Jadąc do domu',
				description: 'Sazed jedzie na TenSoonie do ojczyzny kandry.',
			},
			'hoa-68': {
				title: 'Niosący Świat',
				description: 'Pierwsze Pokolenie nazywa go Niosącym Świat.',
			},
			'hoa-71': { title: 'Powierzone', description: 'Sazed znajduje ogromną skrytkę atium.' },
			'hoa-75': { title: 'Przewrót', description: 'KanPaar dokonuje przewrotu. Sazed uwięziony.' },
			'hoa-78': { title: 'Uratowany przez TenSoona', description: 'TenSoon ratuje Sazeda.' },
			'hoa-79': {
				title: 'Decyzja się zaczyna',
				description: 'Ruina kontroluje kandry przez Błogosławieństwa.',
			},
			'hoa-80': {
				title: 'Broniąc Powierzonego',
				description: 'Sazed pieczętuje drzwi. Wchodzi Elend.',
			},
			'hoa-81': {
				title: 'Ciało boga',
				description: 'Atium to ciało Ruiny. Żołnierze powaleni mgłą są Widzącymi.',
			},
			'hoa-82': {
				title: 'Bohater Wieków',
				description: 'Sazed bierze oba Odłamki i staje się Harmonią.',
			},
			'hoa-83': {
				title: 'Harmonia',
				description: 'Sazed wznosi się jako Harmonia. Odtwarza świat.',
			},
		},
		elend: {
			...enData.movements.elend,
			'tfe-12': {
				title: 'Czytający szlachcic',
				description:
					'Elend Venture zauważa samotną Vin na balkonie podczas balu w swojej twierdzy i podchodzi. Irytuje ją, wyciągając „Próby wstawiennictwa" do czytania, podczas gdy reszta szlachty tańczy i konspiruje.',
			},
			'tfe-18': {
				title: 'Wieczór z Valette',
				description:
					'Elend uczestniczy w balu w twierdzy Elariel, siada jak zwykle przy Vin i czyta. Chwali jej suknię, wprawiając ją w osłupienie.',
			},
			'tfe-23': {
				title: 'Chustka',
				description:
					'Elend znajduje Vin na balu w twierdzy Hastingsów. Pyta, czy była ze skaanką. Przyznaje, że ojciec zmusił go w wieku trzynastu lat, a kobieta została zabita. Daje Vin chustkę jako znak poważnych zalotów. Po odejściu z przyjaciółmi wspinają się na wieżę, by dyskutować o porażkach Ostatniego Imperatora.',
			},
			'tfe-28': {
				title: 'Bal w twierdzy Likal',
				description:
					'Elend pojawia się przed Vin na balu w twierdzy Likal. Mówi, że chce ją pocałować, ale Vin twierdzi, że jej nie zna. Podczas spaceru ujawnia, że cały majątek Venture pochodzi z wydobycia atium w Dołkach — pełne zaufanie. Wspomina, że ród Tekiel został wymordowany przez Hastingsów i próbuje przekonać Valette do opuszczenia Luthadelu.',
			},
			'tfe-28.2': {
				title: 'Wezwanie ojca',
				description:
					'Elend wraca do twierdzy Venture próbując przemknąć obok pokoju ojca. Lord Straff Venture — cynowy mgłowiec, który niczego nie przegapi — woła go. Straff nakazuje kolację z Hastingsami. Później Jastes ujawnia, że śledził powóz Valette — dotarła do Fellise tylko z Terrysem, a Valette zniknęła. Elend uświadamia sobie, że ujawnił tajemnicę atium i proponuje ojcu układ: idzie na kolację w zamian za szpiegów pilnujących Valette.',
			},
			'tfe-30': {
				title: 'Bal Venture',
				description:
					'Elend je kolację z ojcem w twierdzy Venture podczas balu. Vin przyciąga jego uwagę i dochodzi do konfrontacji. Gdy Vin dowiaduje się o zamachu na Elenda, wybiega we mgłę. Noc kończy się chaosem, gdy Vin walczy z Shan i zabija ją. Elend wymyka się w zamęcie.',
			},
			'tfe-31': {
				title: 'Raporty szpiegów',
				description:
					'Elend i Jastes spotykają Felta, który raportuje wszystko, co szpiedzy Elenda odkryli o sklepie Clubsa i jego mieszkańcach. Następnie straż Venture prowadzi Elenda do ojca Straffa, który ujawnia, że Shan Elariel była Zrodzoną z Mgły wysłaną, by zabić Elenda.',
			},
			'tfe-33': {
				title: 'Wozy egzekucyjne',
				description:
					'Elend widzi służących Renoux zamkniętych w wozie egzekucyjnym na placu Fontanny. Woła Valette, ale nie może jej znaleźć w tłumie.',
			},
			'tfe-34': {
				title: 'Kelsier ratuje Elenda',
				description:
					'Elend dociera do klatki Renoux na placu Fontanny i pyta o Valette. Inkwizytor ląduje na klatce i zamierza go uderzyć toporem, gdy Kelsier atakuje inkwizytora, ratując mu życie. Kelsier krzyczy do Elenda, że Valette jest bezpieczna.',
			},
			'tfe-36': {
				title: 'Władza rodu Venture',
				description:
					'Ojciec Elenda informuje o wybuchu rebelii skaa i chce uciec z Luthadelu. Elend odmawia. Straff się zgadza — licząc, że Elend zginie — i przekazuje mu władzę nad rodem Venture. Elend nakazuje żołnierzom udać się do twierdzy Likal na wspólną obronę i bierze pięciu najlepszych żołnierzy na spotkanie z przywódcami skaa.',
			},
			'tfe-37': {
				title: 'Ratowanie Vin',
				description:
					'Elend oferuje złoto skaa, by zaprowadzili go do Docksona i informuje, że ród Venture nie będzie stawiać oporu rebelii — powinni współpracować. Elend i sześciu żołnierzy szturmuje Kredik Shaw, by uratować Vin. Tajemnica wychodzi na jaw — wie, że jest Zrodzona z Mgły. Vin bierze jego twarz w dłonie, całuje go i rusza zabić Ostatniego Imperatora.',
			},
			'tfe-38': {
				title: 'Król-filozof',
				description:
					'Po śmierci Ostatniego Imperatora Elend wyłania się jako jednoczący głos wzywający do porządku. Zaczyna spotkania z przywódcami skaa i szlachty, by opracować prawo nowego państwa.',
			},
			'tfe-39': {
				title: 'Nowy król',
				description: 'Elend Venture zostaje królem. Pisze nowe prawo. Vin i Elend obejmują się.',
			},
			'woa-1': {
				title: 'Król na murach',
				description: 'Elend patrzy na armię ojca. Rozpoczyna się oblężenie.',
			},
			'woa-3': { title: 'Pisząc prawa', description: 'Elend tworzy propozycje dla Zgromadzenia.' },
			'woa-5': { title: 'Król-uczeń', description: 'Elend zarządza logistyką z Docksonem.' },
			'woa-6': { title: 'Obserwując z balkonu', description: 'Elend patrzy na trening Vin.' },
			'woa-10': {
				title: 'Przemowa w Zgromadzeniu',
				description: 'Elend przemawia. Nadchodzi wieść o drugiej armii.',
			},
			'woa-11': {
				title: 'Zwiad na murach',
				description: 'Elend ze zwiadem. Znajdują kości kandry.',
			},
			'woa-13': { title: 'Zwołując radę', description: 'Elend zbiera radę wojenną.' },
			'woa-14': {
				title: 'Edukacja króla',
				description: 'Tindwyl uczy Elenda. On powoli się zmienia.',
			},
			'woa-20': { title: 'Strategia negocjacji', description: 'Allrianne Cett przybywa.' },
			'woa-21': { title: 'Gościnność dla Allrianne', description: 'Elend oferuje gościnność.' },
			'woa-22': { title: 'Walka z rządzeniem', description: 'Elend zmaga się z Zgromadzeniem.' },
			'woa-23': { title: 'Trzecia armia', description: 'Raport o dwudziestu tysiącach kolosów.' },
			'woa-26': {
				title: 'Negocjacje ze Straffem',
				description: 'Elend jedzie z Vin do obozu Straffa.',
			},
			'woa-27': {
				title: 'Blef i upadek',
				description: 'Blef się udaje. Zgromadzenie odwołało go.',
			},
			'woa-31': {
				title: 'Przemowa w Zgromadzeniu',
				description: 'Elend nominuje Penroda. Wybór króla.',
			},
			'woa-32': { title: 'Przyznając porażkę', description: 'Elend akceptuje polityczną porażkę.' },
			'woa-34': { title: 'Studiując strategię', description: "Vin znajduje Zane'a na dachu." },
			'woa-35': { title: 'Kolacja z Cettem', description: 'Cett oferuje jedzenie za atium.' },
			'woa-36': { title: 'Sekret Demoux', description: 'Demoux prowadzi Kościół Ocalałego.' },
			'woa-38': {
				title: 'Wybór króla',
				description: 'Elend w Kościele Ocalałego. Zamach. Penrod królem.',
			},
			'woa-39': { title: 'Zdetronizowany', description: 'Elend pracuje za kulisami.' },
			'woa-40': { title: 'Przy Vin', description: 'Elend przy szpitalnym łóżku Vin.' },
			'woa-41': { title: 'Szukając rady', description: 'Elend odwiedza Sazeda i Tindwyl.' },
			'woa-43': { title: 'Po ataku', description: 'Armia Cetta się wycofuje.' },
			'woa-44': { title: 'Opuszczając Luthadel', description: 'Vin mówi, że muszą iść na północ.' },
			'woa-45': { title: 'Rada o miłości', description: 'Elend i Vin szukają rady u Sazeda.' },
			'woa-49': {
				title: 'Ucieczka przez Cynową Bramę',
				description: 'Elend, Vin i Spook opuszczają Luthadel.',
			},
			'woa-50': { title: 'Obóz na północy', description: 'Spook wyczuwa pościg.' },
			'woa-51': {
				title: 'Jastes i sprawiedliwość',
				description: 'Elend wykonuje egzekucję Jastesa.',
			},
			'woa-52': { title: 'Jazda z powrotem', description: 'Elend pędzi z powrotem.' },
			'woa-54': {
				title: 'Dowodząc obroną',
				description: 'Elend organizuje obronę. Vin przybywa z kolosami.',
			},
			'woa-55': { title: 'Imperator Elend', description: 'Vin każe uznać Elenda imperatorem.' },
			'woa-57': {
				title: 'Zejście do Studni',
				description: 'Elend schodzi do groty. Mgłoduch go przeszywa.',
			},
			'woa-58': { title: 'Śmiertelnie ranny', description: 'Elend umiera. Vin wchodzi do Studni.' },
			'woa-59': {
				title: 'Przemieniony',
				description: 'Vin leczy Elenda lerasium — staje się Zrodzonym z Mgły.',
			},
			'woa-60': {
				title: 'Imperator Zrodzony z Mgły',
				description: 'Elend przysięga, że przetrwają razem.',
			},
			'hoa-1': {
				title: 'Imperator i generał',
				description: 'Elend prowadzi kampanię jednoczenia.',
			},
			'hoa-3': { title: 'Skrytka Vetitanu', description: 'Elend i Vin otwierają skrytkę.' },
			'hoa-5': { title: 'Marsz na Fadrex', description: 'Elend prowadzi armię.' },
			'hoa-8': { title: 'Odporność na mgłę', description: 'Elend: odporność wymaga ekspozycji.' },
			'hoa-10': { title: 'Zebranie ekipy', description: 'Sazed i inni dołączają.' },
			'hoa-12': { title: 'Rada wojenna', description: '"Co zrobiłby Kelsier?"' },
			'hoa-21': { title: 'Analiza danych', description: 'Vin znajduje szesnaście procent.' },
			'hoa-25': { title: 'Przybycie do Fadrexu', description: 'Elend oferuje towarzystwo Vin.' },
			'hoa-28': { title: 'Śmiały plan', description: 'Elend wspiera plan Vin.' },
			'hoa-30': { title: 'Bal w Fadrexie', description: 'Elend i Vin na balu.' },
			'hoa-35': { title: 'Oblężenie Fadrexu', description: 'Elend prowadzi oblężenie.' },
			'hoa-37': { title: 'Prawda o kolosach', description: 'Kolosy robione są z ludzi.' },
			'hoa-40': { title: 'Hemalurgia odkryta', description: 'Trzecia metaliczna sztuka.' },
			'hoa-43': { title: 'Drugi bal', description: 'Elend i Vin na balu w Ministerstwie.' },
			'hoa-55': { title: 'Troska o Vin', description: 'Elend się martwi o Vin.' },
			'hoa-62': { title: 'Ponowne spotkanie z Vin', description: 'Vin wraca z Fadrexu.' },
			'hoa-65': { title: 'Bieg do Luthadelu', description: 'Elend prowadzi armię.' },
			'hoa-67': { title: 'Wewnątrz Fadrexu', description: 'Armia kolosów na zewnątrz.' },
			'hoa-72': { title: 'Marsz do Dołków', description: 'Elend prowadzi armię.' },
			'hoa-73': { title: 'Obóz przy Dołkach', description: 'Setki tysięcy uchodźców.' },
			'hoa-76': { title: 'Przygotowania do bitwy', description: 'Elend przygotowuje armię.' },
			'hoa-79': { title: 'Ostatnia szarża', description: 'Elend przemawia do Widzących.' },
			'hoa-80': {
				title: 'W komnacie Powierzonego',
				description: 'Elend znajduje Sazeda broniącego atium.',
			},
			'hoa-81': {
				title: 'Ostatnia bitwa Elenda',
				description:
					'Elend prowadzi Widzących. Jego miecz przebija szyję Marsha. Umiera z uśmiechem.',
			},
		},
		marsh: {
			...enData.movements.marsh,
			'tfe-7': {
				title: 'Niechętny brat',
				description:
					'Marsh przybywa do sklepu Clubsa — starszy brat Kelsiera i sam przywódca rebeliantów. Niechętnie dołącza do planu ekipy.',
			},
			'tfe-10.2': {
				title: 'Zgromadzenie w magazynach',
				description:
					'Marsh uczestniczy w tajnym zgromadzeniu z ekipą, obserwując brata Kelsiera przemawiającego do robotników skaa.',
			},
			'tfe-20': {
				title: 'Nauczanie Vin',
				description:
					'Marsh przybywa na posiadłość Renoux w Fellise, by uczyć Vin szukania — używania brązu do wykrywania innych allomantów palących metale, identyfikacji typu i rozróżniania mgłowców od Zrodzonych z Mgły. Uczy ją też o miedzi i pracy dymiarzy.',
			},
			'tfe-27': {
				title: 'Infiltracja Ministerstwa',
				description:
					'Marsh spotyka Kelsiera i Vin w opuszczonym budynku na Krętaczkach z tatuażem niższego obligatora z wydziału Inkwizycji. Rzeczywiście zinfiltrował Ministerstwo. Ujawnia, że Ministerstwo rozmieszcza łagodzicieli w dzielnicach skaa pod stałym łagodzeniem, ukrytych przez dymiarzy. Potwierdza też, że inkwizytorzy mogą umrzeć ze starości.',
			},
			'tfe-30': {
				title: 'Zniknięcie',
				description:
					'Marsh milknie i kontakt się urywa, gdy znika w głębinach wydziału Inkwizycji. Ekipa obawia się najgorszego.',
			},
			'tfe-32': {
				title: 'Ciało',
				description:
					'Kelsier i Vin znajdują ciało Marsha całkowicie pozbawione krwi — pustą skorupę. List znaleziony później wyjaśnia, że inkwizytorzy prawdopodobnie go znajdą. Ekipa opłakuje stratę. Ale zmasakrowane ciało nie jest tym, czym się wydaje.',
			},
			'tfe-38': {
				title: 'Inkwizytor',
				description:
					'Marsh pojawia się podczas ostatniego szturmu na Kredik Shaw — żywy, przemieniony przez jedenaście metalowych gwoździ: dwa przez oczy, osiem w klatce piersiowej i jeden w plecach łączący je. Wyciąga gwóźdź z karku Kara, zabijając go natychmiast, i ujawnia, że zabił wszystkich innych inkwizytorów.',
			},
			'tfe-39': {
				title: 'Jedenaście gwoździ',
				description:
					'Marsh opowiada o przeżyciu i przemianie. Kandra grająca lorda Renoux uznaje Vin za panią.',
			},
			'woa-7': {
				title: 'Przewodnik do Konwentyklu',
				description: 'Marsh oferuje poprowadzić Sazeda do Konwentyklu Seran.',
			},
			'woa-9': { title: 'Podróż z Sazedem', description: 'Marsh staje się coraz dziwniejszy.' },
			'woa-12': { title: 'Porzucony', description: 'Marsh porzuca Sazeda w Konwentyklu.' },
			'woa-57': { title: 'Pionek Ruiny', description: 'Marsh atakuje Sazeda w Kredik Shaw.' },
			'woa-58': { title: 'Powalony', description: 'Hammond uderza Marsha w czaszkę.' },
			'hoa-0': {
				title: 'Tworząc inkwizytorów',
				description: 'Marsh tworzy nowych inkwizytorów w Tathingdwen.',
			},
			'hoa-6': { title: 'Dowodząc kolosami', description: 'Marsh dowodzi armiami Ruiny.' },
			'hoa-13': { title: 'Pionek Ruiny', description: 'Marsh decyduje udawać poddanie.' },
			'hoa-34': {
				title: 'Blisko góry Tyrian',
				description: 'Marsh tworzy hemalurgiczne gwoździe.',
			},
			'hoa-42': { title: 'Gwoździując Penroda', description: 'Marsh wbija gwóźdź w serce króla.' },
			'hoa-63': {
				title: 'Konfrontacja z Vin',
				description: 'Marsh znajduje Vin w Ministerstwie. Tylko siedem koralików atium.',
			},
			'hoa-65': {
				title: 'Żądając atium',
				description: 'Vin kradnie fiolkę Marsha i wbija mu gwóźdź w czoło.',
			},
			'hoa-69': {
				title: 'Los posłańca',
				description: 'Marsh zabija Goradela z ostrzeżeniem Spooka.',
			},
			'hoa-72': {
				title: 'Kolczyk',
				description: 'Marsh torturuje Vin. Wyrywa jej kolczyk. Głos Ruiny milknie.',
			},
			'hoa-73': {
				title: 'Niepokonany',
				description: 'Vin wyrywa gwóźdź z oka Marsha, ale nie zabija.',
			},
			'hoa-81': {
				title: 'Zabijając Elenda',
				description:
					'Marsh atakuje Elenda pod wpływem Ruiny. Gdy Vin niszczy Ruinę, kontrola znika.',
			},
		},
		spook: {
			...enData.movements.spook,
			'tfe-7': {
				title: 'Młody mgłowiec cyny',
				description:
					'Spook, młody siostrzeniec Clubsa, służy jako wartownik i posłaniec ekipy w warsztacie stolarskim, mówiąc gęstym wschodnim dialektem.',
			},
			'tfe-9': {
				title: 'Bieganie posłańca',
				description:
					'Spook przenosi wiadomości między sklepem Clubsa w Luthadelu a posiadłością Renoux w Fellise; jego wzmożone cyną zmysły czynią go doskonałym zwiadowcą.',
			},
			'tfe-16': {
				title: 'Czuwanie przy Vin',
				description:
					'Lestibournes czuwa przy rannej Vin w sklepie Clubsa, obecny gdy budzi się po ranach z wyprawy zwiadowczej do Kredik Shaw. Opowiada, jak Kelsier nadał mu nowe imię: Spook.',
			},
			'tfe-22': {
				title: 'Chustka',
				description:
					'Spook odwiedza posiadłość Renoux w Fellise i zastaje Vin czytającą dziennik Ostatniego Imperatora. Mówi, że Dockson przyjechał po broń, potem czerwieni się, wręcza jej chustkę i ucieka. Sazed później wyjaśnia, że podarowanie chustki przez młodego mężczyznę wyraża poważne intencje zalotów.',
			},
			'tfe-24': {
				title: 'Noc w sklepie Clubsa',
				description:
					'Spook dzieli nocnego drinka z Kelsierem, Hammondem i Clubsem w sklepie Clubsa, omawiając stan misji.',
			},
			'tfe-26': {
				title: 'Egzekucje',
				description:
					'Spook wpada do sklepu Clubsa z wieścią o egzekucjach na placu Fontanny. Towarzyszy ekipie na plac, gdzie są świadkami brutalnej publicznej egzekucji kobiet i dzieci skaa, krew spływa do fontanny.',
			},
			'tfe-32': {
				title: 'Warta na dachu',
				description:
					'Spook pełni wartę na dachu sklepu Clubsa z Vin, ucząc ją sztuczek z cyną. Wyjaśnia, że nie chodzi tylko o wzmacnianie zmysłów, ale o filtrowanie tego, co ważne, i niepozwalanie sobie na rozpraszanie resztą.',
			},
			'tfe-33': {
				title: 'Pojmany wartownik',
				description:
					'Gdy ekipa zmierza na plac Fontanny, Spooka widzą w wozie egzekucyjnym obok lorda Renoux — schwytanego przez Ministerstwo.',
			},
			'tfe-34': {
				title: 'Świadek poświęcenia',
				description:
					'Spook obserwuje z tłumu walkę i śmierć Kelsiera na placu Fontanny — wydarzenie, które naznaczy resztę jego życia. Poświęcenie Ocalałego zmienia rozumienie Spooka, co znaczy służyć sprawie.',
			},
			'tfe-38': {
				title: 'Rewolucja',
				description: 'Spook walczy u boku ekipy podczas rewolucji, koordynując powstanie skaa.',
			},
			'woa-6': { title: 'Rosnący zwiadowca', description: 'Spook wraca z zadań zwiadowczych.' },
			'woa-11': { title: 'Zebranie ekipy', description: 'Spook w Fortecy Venture.' },
			'woa-13': { title: 'Rada wojenna', description: 'Spook na radzie wojennej Elenda.' },
			'woa-20': { title: 'Przy radzie', description: 'Spook przy dyskusji o negocjacjach.' },
			'woa-23': { title: 'Powrót Sazeda', description: 'Spook obecny przy raporcie Sazeda.' },
			'woa-25': { title: 'Eskorta na zakupach', description: 'Spook towarzyszy Vin niechętnie.' },
			'woa-44': { title: 'Szukając Vin', description: 'Spook dołącza do Elenda i Hammonda.' },
			'woa-49': { title: 'Wygnani', description: 'Spook opuszcza Luthadel z Vin i Elendem.' },
			'woa-50': { title: 'Coś w mgle', description: 'Spook pierwszy wyczuwa pościg.' },
			'woa-51': {
				title: 'Pięciu prześladowców',
				description: 'Spook wykrywa pięciu ludzi. Ujawnia sekret Sazeda.',
			},
			'woa-52': { title: 'Jazda z powrotem', description: 'Spook pędzi z Elendem.' },
			'woa-56': {
				title: 'Terrisańscy uchodźcy',
				description: 'Przybycie Spooka rozprasza mgłoduchy.',
			},
			'woa-57': { title: 'W mieście', description: 'Spook wchodzi do Luthadelu z uchodźcami.' },
			'woa-58': { title: 'Grota', description: 'Spook schodzi do groty pod Kredik Shaw.' },
			'hoa-14': { title: 'Cynowe Oko', description: 'Dręczony winą Spook bezustannie pali cynę.' },
			'hoa-14.2': {
				title: 'Rada Obywatela',
				description: 'Spook obserwuje zgromadzenia Quelliona.',
			},
			'hoa-16': {
				title: 'Świadek okrucieństwa',
				description: 'Straż Quelliona pali szlachtę żywcem.',
			},
			'hoa-16.2': {
				title: 'Dźgnięty w tłumie',
				description: 'Spook rozmawia z Beldre. Zostaje przebity mieczem.',
			},
			'hoa-19': {
				title: 'Głos w płomieniach',
				description: 'Głos Kelsiera prowadzi Spooka do fiolki.',
			},
			'hoa-23': { title: 'Gorączkowe sny', description: 'Spook przeżywa na nowo dzień adopcji.' },
			'hoa-26': {
				title: 'Nocne plotki',
				description: 'Spook słyszy, że jest człowiekiem Kelsiera.',
			},
			'hoa-29': {
				title: 'Ukryte jezioro',
				description: 'Spook prowadzi Sazeda do podziemnego jeziora.',
			},
			'hoa-31': { title: 'Kwestia wiary', description: 'Spook pyta o religię wspierającą wiarę.' },
			'hoa-35': { title: 'Konfrontacja z Durnem', description: 'Spook przesłuchuje informatora.' },
			'hoa-38': { title: 'Tajne wyjście', description: 'Dziewięć czaszek z dziesięciu więźniów.' },
			'hoa-41': { title: 'Ocalały z płomieni', description: 'Spook ratuje dziewczynę z ognia.' },
			'hoa-46': { title: 'Ogród Beldre', description: 'Spook odmawia zabicia.' },
			'hoa-46.2': {
				title: 'Przywrócenie kanałów',
				description: 'Spook prosi Sazeda o przywrócenie wody.',
			},
			'hoa-49': { title: 'Błaganie Beldre', description: 'Beldre prosi: nie zabijaj brata.' },
			'hoa-53': { title: 'Obietnice i plany', description: 'Spook obiecuje uratować miasto.' },
			'hoa-53.2': { title: 'Obchód knajp', description: 'Spook zyskuje reputację.' },
			'hoa-56': { title: 'Ostateczny plan', description: 'Spook planuje zdemaskować Quelliona.' },
			'hoa-58': { title: 'Bohater Urteau', description: 'Spook wyrywa gwoździe i ratuje miasto.' },
			'hoa-62': { title: 'Cena zwycięstwa', description: 'Spook ciężko poparzony w szpitalu.' },
			'hoa-64': {
				title: 'Stalowa wiadomość',
				description: 'Spook graweruje ostrzeżenie na stali.',
			},
			'hoa-73': { title: 'Do grot', description: 'Spook każe się schronić w grotach.' },
			'hoa-83': {
				title: 'Nowy świat',
				description: 'Spook wychodzi na świat odtworzony przez Sazeda. Został Zrodzonym z Mgły.',
			},
		},
	},

	markerLabels: {
		capital: 'Siedziba Dominacji',
		city: 'Miasto',
		ashmount: 'Popiołowa Góra',
		landmark: 'Punkt orientacyjny',
		stronghold: 'Twierdza',
		hideout: 'Kryjówka',
		mine: 'Kopalnia-więzienie',
		mystical: 'Święte miejsce',
		town: 'Osada',
		village: 'Wioska skaa',
		river: 'Droga wodna',
		industrial: 'Posterunek zaopatrzenia',
		region: 'Region',
		keep: 'Szlachecka twierdza',
		palace: 'Pałac',
		plantation: 'Plantacja',
		district: 'Dzielnica',
		estate: 'Majątek szlachecki',
	},

	cityMarkerLabels: {
		gate: 'Brama miejska',
		keep: 'Szlachecka twierdza',
		palace: 'Pałac',
		district: 'Dzielnica',
		shop: 'Kupiec',
		safehouse: 'Kryjówka bandy',
		landmark: 'Ważne miejsce',
		canal: 'Kanał',
		ministry: 'Kanton',
		plaza: 'Plac',
	},

	// ── Chapter seasons (book → chapter → season/year)
	chapterSeasons: {
		tfe: {
			0: { season: 'Wiosna', year: '1021 FE' },
			1: { season: 'Wiosna', year: '1021 FE' },
			2: { season: 'Wiosna', year: '1021 FE' },
			3: { season: 'Wiosna', year: '1021 FE' },
			4: { season: 'Wiosna', year: '1021 FE' },
			5: { season: 'Wiosna', year: '1021 FE' },
			6: { season: 'Wiosna', year: '1021 FE' },
			7: { season: 'Późna wiosna', year: '1021 FE' },
			8: { season: 'Lato', year: '1021 FE' },
			9: { season: 'Lato', year: '1021 FE' },
			10: { season: 'Lato', year: '1021 FE' },
			11: { season: 'Lato', year: '1021 FE' },
			12: { season: 'Lato', year: '1021 FE' },
			13: { season: 'Lato', year: '1021 FE' },
			14: { season: 'Lato', year: '1021 FE' },
			15: { season: 'Lato', year: '1021 FE' },
			16: { season: 'Lato', year: '1021 FE' },
			17: { season: 'Lato', year: '1021 FE' },
			18: { season: 'Lato', year: '1021 FE' },
			19: { season: 'Późne lato', year: '1021 FE' },
			20: { season: 'Późne lato', year: '1021 FE' },
			21: { season: 'Jesień', year: '1021 FE' },
			22: { season: 'Jesień', year: '1021 FE' },
			23: { season: 'Jesień', year: '1021 FE' },
			24: { season: 'Jesień', year: '1021 FE' },
			25: { season: 'Późna jesień', year: '1021 FE' },
			26: { season: 'Późna jesień', year: '1021 FE' },
			27: { season: 'Zima', year: '1021 FE' },
			28: { season: 'Zima', year: '1021 FE' },
			29: { season: 'Zima', year: '1021 FE' },
			30: { season: 'Zima', year: '1021 FE' },
			31: { season: 'Zima', year: '1021 FE' },
			32: { season: 'Zima', year: '1022 FE' },
			33: { season: 'Wczesna wiosna', year: '1022 FE' },
			34: { season: 'Wczesna wiosna', year: '1022 FE' },
			35: { season: 'Wczesna wiosna', year: '1022 FE' },
			36: { season: 'Wczesna wiosna', year: '1022 FE' },
			37: { season: 'Wczesna wiosna', year: '1022 FE' },
			38: { season: 'Wczesna wiosna', year: '1022 FE' },
			39: { season: 'Wiosna', year: '1022 FE' },
		},
		woa: {
			1: { season: 'Jesień', year: '1023 FE' },
			2: { season: 'Jesień', year: '1023 FE' },
			3: { season: 'Jesień', year: '1023 FE' },
			4: { season: 'Jesień', year: '1023 FE' },
			5: { season: 'Jesień', year: '1023 FE' },
			6: { season: 'Jesień', year: '1023 FE' },
			7: { season: 'Późna jesień', year: '1023 FE' },
			8: { season: 'Jesień', year: '1023 FE' },
			9: { season: 'Późna jesień', year: '1023 FE' },
			10: { season: 'Jesień', year: '1023 FE' },
			11: { season: 'Wczesna zima', year: '1023 FE' },
			12: { season: 'Późna jesień', year: '1023 FE' },
			13: { season: 'Wczesna zima', year: '1023 FE' },
			14: { season: 'Wczesna zima', year: '1023 FE' },
			15: { season: 'Zima', year: '1023 FE' },
			16: { season: 'Zima', year: '1023 FE' },
			17: { season: 'Zima', year: '1023 FE' },
			19: { season: 'Zima', year: '1023 FE' },
			20: { season: 'Zima', year: '1023 FE' },
			21: { season: 'Zima', year: '1023 FE' },
			22: { season: 'Zima', year: '1023 FE' },
			23: { season: 'Zima', year: '1023 FE' },
			24: { season: 'Zima', year: '1023 FE' },
			25: { season: 'Zima', year: '1023 FE' },
			26: { season: 'Zima', year: '1023 FE' },
			27: { season: 'Zima', year: '1023 FE' },
			28: { season: 'Zima', year: '1024 FE' },
			29: { season: 'Zima', year: '1024 FE' },
			30: { season: 'Zima', year: '1024 FE' },
			31: { season: 'Zima', year: '1024 FE' },
			32: { season: 'Zima', year: '1024 FE' },
			33: { season: 'Zima', year: '1024 FE' },
			34: { season: 'Zima', year: '1024 FE' },
			35: { season: 'Zima', year: '1024 FE' },
			36: { season: 'Zima', year: '1024 FE' },
			37: { season: 'Zima', year: '1024 FE' },
			38: { season: 'Zima', year: '1024 FE' },
			40: { season: 'Późna zima', year: '1024 FE' },
			41: { season: 'Późna zima', year: '1024 FE' },
			42: { season: 'Późna zima', year: '1024 FE' },
			43: { season: 'Późna zima', year: '1024 FE' },
			44: { season: 'Późna zima', year: '1024 FE' },
			45: { season: 'Późna zima', year: '1024 FE' },
			46: { season: 'Późna zima', year: '1024 FE' },
			47: { season: 'Późna zima', year: '1024 FE' },
			49: { season: 'Późna zima', year: '1024 FE' },
			50: { season: 'Późna zima', year: '1024 FE' },
			51: { season: 'Późna zima', year: '1024 FE' },
			52: { season: 'Późna zima', year: '1024 FE' },
			53: { season: 'Późna zima', year: '1024 FE' },
			54: { season: 'Późna zima', year: '1024 FE' },
			55: { season: 'Późna zima', year: '1024 FE' },
			56: { season: 'Zima', year: '1024 FE' },
			57: { season: 'Zima', year: '1024 FE' },
			58: { season: 'Zima', year: '1024 FE' },
			59: { season: 'Zima', year: '1024 FE' },
			60: { season: 'Zima', year: '1024 FE' },
		},
		hoa: {
			0: { season: 'Wiosna', year: '1026 FE' },
			1: { season: 'Wiosna', year: '1026 FE' },
			3: { season: 'Wiosna', year: '1026 FE' },
			4: { season: 'Lato', year: '1026 FE' },
			5: { season: 'Lato', year: '1026 FE' },
			6: { season: 'Lato', year: '1026 FE' },
			8: { season: 'Lato', year: '1026 FE' },
			10: { season: 'Lato', year: '1026 FE' },
			12: { season: 'Lato', year: '1026 FE' },
			13: { season: 'Jesień', year: '1026 FE' },
			14: { season: 'Jesień', year: '1026 FE' },
			15: { season: 'Jesień', year: '1026 FE' },
			16: { season: 'Jesień', year: '1026 FE' },
			17: { season: 'Jesień', year: '1026 FE' },
			18: { season: 'Jesień', year: '1026 FE' },
			19: { season: 'Jesień', year: '1026 FE' },
			21: { season: 'Jesień', year: '1026 FE' },
			22: { season: 'Jesień', year: '1026 FE' },
			23: { season: 'Wczesna zima', year: '1026 FE' },
			24: { season: 'Zima', year: '1026 FE' },
			25: { season: 'Jesień', year: '1026 FE' },
			26: { season: 'Wczesna zima', year: '1026 FE' },
			27: { season: 'Jesień', year: '1026 FE' },
			28: { season: 'Jesień', year: '1026 FE' },
			29: { season: 'Wczesna zima', year: '1026 FE' },
			30: { season: 'Jesień', year: '1026 FE' },
			31: { season: 'Wczesna zima', year: '1026 FE' },
			34: { season: 'Zima', year: '1026 FE' },
			35: { season: 'Zima', year: '1026 FE' },
			36: { season: 'Zima', year: '1026 FE' },
			37: { season: 'Zima', year: '1026 FE' },
			38: { season: 'Zima', year: '1026 FE' },
			40: { season: 'Zima', year: '1026 FE' },
			41: { season: 'Zima', year: '1026 FE' },
			42: { season: 'Zima', year: '1026 FE' },
			43: { season: 'Zima', year: '1026 FE' },
			44: { season: 'Zima', year: '1026 FE' },
			45: { season: 'Zima', year: '1026 FE' },
			46: { season: 'Zima', year: '1026 FE' },
			47: { season: 'Zima', year: '1026 FE' },
			48: { season: 'Zima', year: '1026 FE' },
			49: { season: 'Zima', year: '1026 FE' },
			50: { season: 'Zima', year: '1026 FE' },
			51: { season: 'Zima', year: '1026 FE' },
			53: { season: 'Zima', year: '1026 FE' },
			54: { season: 'Późna zima', year: '1026 FE' },
			55: { season: 'Późna zima', year: '1026 FE' },
			56: { season: 'Zima', year: '1026 FE' },
			57: { season: 'Późna zima', year: '1026 FE' },
			58: { season: 'Wiosna', year: '1027 FE' },
			59: { season: 'Wiosna', year: '1027 FE' },
			60: { season: 'Późna zima', year: '1026 FE' },
			61: { season: 'Późna zima', year: '1026 FE' },
			62: { season: 'Lato', year: '1027 FE' },
			63: { season: 'Późna zima', year: '1026 FE' },
			64: { season: 'Lato', year: '1027 FE' },
			65: { season: 'Późna zima', year: '1026 FE' },
			66: { season: 'Lato', year: '1027 FE' },
			67: { season: 'Wiosna', year: '1027 FE' },
			68: { season: 'Wiosna', year: '1027 FE' },
			69: { season: 'Lato', year: '1027 FE' },
			70: { season: 'Wiosna', year: '1027 FE' },
			71: { season: 'Jesień', year: '1027 FE' },
			72: { season: 'Lato', year: '1027 FE' },
			73: { season: 'Lato', year: '1027 FE' },
			74: { season: 'Jesień', year: '1027 FE' },
			75: { season: 'Jesień', year: '1027 FE' },
			76: { season: 'Jesień', year: '1027 FE' },
			77: { season: 'Jesień', year: '1027 FE' },
			78: { season: 'Jesień', year: '1027 FE' },
			79: { season: 'Jesień', year: '1027 FE' },
			80: { season: 'Jesień', year: '1027 FE' },
			81: { season: 'Jesień', year: '1027 FE' },
			82: { season: 'Jesień', year: '1027 FE' },
			83: { season: 'Jesień', year: '1027 FE' },
			84: { season: 'Jesień', year: '1027 FE' },
		},
	},
};
