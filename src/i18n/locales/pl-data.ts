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
				'tfe-25': 'Zrodzona z Mgły',
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
				'tfe-25': 'verified',
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
				'tfe-13': 'Szpieg Stalowego Zakonu',
				'tfe-38': 'Stalowy Inkwizytor',
				'woa-4': 'Niechętny Inkwizytor',
				'woa-57': 'Pionek Zniszczenia',
				'hoa-0': 'Ręka Zniszczenia',
				'hoa-79': 'Stalowe Oczy', // Canonical translation of "Ironeyes"
			},
			titleProgressionConfidence: {
				'tfe-7': 'verified',
				'tfe-13': 'verified',
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
				'Kopalnie atium i ojczyzna kandrów. Kelsier był jedynym więźniem, który stamtąd uciekł.',
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
			description: 'Najbliższa góra popiołowa do Luthadelu, widoczna z murów miasta.',
			confidence: 'verified',
		},
		urteau: {
			name: 'Urteau',
			description:
				'Stolica Dominacji Północnej i rodowa siedziba rodu Venture. Słynne z kanałowych ulic — osuszonych kanałów.',
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
				'Centrum handlowe Dominacji Zachodniej, chronione przez naturalne formacje skalne z cremnolu.',
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
				'Miasto w Dominacji Północnej zbudowane nad jedną z jaskiń Ostatniego Imperatora. Zasypane popiołem.',
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
			description: 'Twierdza Inkwizytorów wykuta w klifie. Sazed odkrył tu inskrypcję Kwaana.',
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
				'Łańcuch górski, w którym Terrisanie byli zniewoleni. Pierwotna lokalizacja Studni Wstąpienia.',
			confidence: 'verified',
		},
		'tincut-fastness': {
			name: 'Twierdza Tincut',
			description: 'Ukryta forteca w górach Terris, gdzie schronił się Synod.',
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
				'Sztuczna droga wodna łącząca Tathingdwen z Luthadelem na potrzeby transportu zasobów.',
			confidence: 'probable',
		},
		'kandra-homeland': {
			name: 'Ojczyzna Kandrów',
			description:
				'Głębokie jaskinie pod Dołami Hathsin, gdzie kandrzy strzegą tajemnic Ostatniego Imperatora.',
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
			description: 'Południowy punkt kotwiczny sieci jaskiń Ostatniego Imperatora.',
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
			description: 'System jaskiń między Luthadelem a Dołami, baza treningowa armii rebeliantów.',
			confidence: 'verified',
		},
		garthwood: {
			name: 'Garthwood',
			description: 'Wioska, w której Sazed nauczał religii wyzwolonych skaa.',
			confidence: 'probable',
		},
		'straffs-camp': {
			name: 'Obóz Straffa',
			description: 'Obóz wojskowy Straffa Venture na północ od Luthadelu podczas oblężenia.',
			confidence: 'probable',
		},
		'koloss-camp': {
			name: 'Obóz Kolosów',
			description: 'Pozycja armii kolosów na południe od Luthadelu podczas oblężenia.',
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
			description: 'Garnizonowe miasto na północny zachód od Luthadelu ze stałą armią.',
			confidence: 'probable',
		},
		'haverfrex-cannery-central': {
			name: 'Haverfrex',
			description: 'Punkt przemysłowy w Dominacji Zachodniej, węzeł zaopatrzeniowy armii Cetta.',
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
			'tfe-0': { title: 'Powrót Ocalałego', description: 'Kelsier przybywa na plantację lorda Tristinga, gdzie szlachcic gości obligatora wysłanego przez lorda Venture w nadziei na partnerstwo handlowe. Tej nocy, gdy młodą skaa dziewczynę mają przyprowadzić do Tristinga, Kelsier interweniuje: zabija Tristinga oraz wszystkich jego obligatorów, nadzorców i żołnierzy i podpala posiadłość.', season: 'Wiosna', year: '1021 FE' },
			'tfe-1': { title: 'Ukryty obserwator', description: 'Kelsier obserwuje z cienia działalność gangu Camona, zauważając że Vin nieświadomie używa allomancji: uliczna sierota posiadająca moce Zrodzonej z Mgły.', season: 'Wiosna', year: '1021 FE' },
			'tfe-3': { title: 'Rekrutacja Vin', description: 'Vin próbuje uciec z kryjówki Camona, ale Ulef ją zdradza. Kelsier interweniuje i ratuje ją od pobicia przez Camona. Awansuje Mileva na lidera, zabiera trzy tysiące boksów jako zapłatę za zajęcie się obligatorem i inkwizytorem. Testuje Vin i potwierdza, że jest Zrodzona z Mgły.', season: 'Wiosna', year: '1021 FE' },
			'tfe-5': { title: 'Kradzież atium', description: 'Kelsier, Dockson i Vin wspinają się na dachy. Kelsier przygotowuje się i zanurza we mgle, szturmując twierdzę Venture by ukraść atium. Zdobywa sejf, ale musi walczyć z zabójcami mgły w drodze powrotnej. Ucieka z atium i finansuje bunt.', season: 'Wiosna', year: '1021 FE' },
			'tfe-6': { title: 'Ekipa w komplecie', description: 'W warsztacie stolarskim Clubsa Kelsier i ekipa opracowują plan obalenia Ostatniego Imperium. Marsh w końcu przybywa; wszyscy wychodzą, by bracia mogli porozmawiać na osobności. Vin wraca i podsłuchuje pod drzwiami.', season: 'Wiosna', year: '1021 FE' },
			'tfe-7': { title: 'Trening uczennicy', description: 'Kelsier zabiera Vin na pierwszy nocny trening i daje jej pelerynę z mgły. Uczy ją ośmiu podstawowych metali wzdłuż murów Luthadelu, blisko Stalowej Bramy.', season: 'Późna wiosna', year: '1021 FE' },
			'tfe-8': { title: 'Przykrycie Renoux', description: 'Kelsier zabiera Vin poza mury Luthadelu, gdzie napotykają mgłoducha. Sazed czeka z powozem na głównym trakcie i wiezie ich do Fellise. Po drodze Kelsier oferuje Vin trzy tysiące boksów i możliwość odejścia. Na posiadłości lorda Renoux tworzy Vin fałszywą tożsamość lady Valette.', season: 'Lato', year: '1021 FE' },
			'tfe-10': { title: 'Planowanie rewolucji', description: 'Po powrocie do Luthadelu Kelsier zwołuje spotkanie w sklepie Clubsa. Pyta Sazeda o religię posiadającą prawdziwą moc — Sazed opowiada mu o jaizmie — i o religię, która uważa eksterminację szlachty za świętą. Spotkanie przerywa, gdy jeden z żołnierzy Hammonda donosi, że Ministerstwo znalazło starą kryjówkę Camona.', season: 'Lato', year: '1021 FE' },
			'tfe-10.2': { title: 'Zgromadzenie w magazynach', description: 'Kelsier przemawia do robotników skaa na tajnym zgromadzeniu w dzielnicy magazynowej. Breeze i jego łagodziciele oraz podżegacze manipulują tłumem, wykorzystując legendę Ocalałego z Hathsin do rozpalania buntu.', season: 'Lato', year: '1021 FE' },
			'tfe-11': { title: 'Masakra w kryjówce Camona', description: 'Kelsier i ekipa badają zniszczoną kryjówkę. Potem Kelsier szuka Camona wśród żebraków i znajduje jego zwłoki wiszące na haku wbitym w usta, z rękami i nogami związanymi — ciało tortutowane. Ta metoda egzekucji jest zarezerwowana dla nadużywających allomancji. Vin udało się wyśledzić Kelsiera.', season: 'Lato', year: '1021 FE' },
			'tfe-13': { title: 'Plany w Fellise', description: 'Kelsier spotyka Vin i Sazeda na posiadłości lorda Renoux w Fellise, by omówić informacje z pierwszego balu Vin. Dowiaduje się, że ojciec Vin był na balu, po czym wraca przez mgłę do Luthadelu.', season: 'Lato', year: '1021 FE' },
			'tfe-14': { title: 'Zwiad pałacowy', description: 'Kelsier prowadzi Vin do Kredik Shaw, by zbadać budynek, który Ostatni Imperator odwiedza co trzy dni. Torują sobie drogę walką, ale trzech stalowych inkwizytorów ich okrąża. Kelsier zostaje oddzielony od Vin w chaosie. Vin ucieka ciężko ranna z tajemniczą skórzaną księgą.', season: 'Lato', year: '1021 FE' },
			'tfe-15': { title: 'Po Kredik Shaw', description: 'Ekipa kwestionuje decyzję Kelsiera o zabraniu Vin do Kredik Shaw. Sazed przynosi ją na rękach. Dockson jest wściekły z powodu ryzyka. Kelsier i Dockson zauważają skórzaną księgę; Sazed określa ją jako napisaną w khlennium, języku ojczyzny Ostatniego Imperatora sprzed Wstąpienia.', season: 'Lato', year: '1021 FE' },
			'tfe-16': { title: 'Czuwanie przy Vin', description: 'Kelsier zostaje w sklepie Clubsa czuwając przy Vin, gdy ta dochodzi do siebie po ranach z Kredik Shaw, obecny gdy w końcu się budzi.', season: 'Lato', year: '1021 FE' },
			'tfe-17': { title: 'Spotkanie na posiadłości Renoux', description: 'Kelsier podróżuje do Fellise z Breeze, Yedenem i Docksonem na spotkanie na posiadłości lorda Renoux w sprawie następnej fazy buntu.', season: 'Lato', year: '1021 FE' },
			'tfe-19': { title: 'Rozpalanie wojny rodów', description: 'Kelsier sieje chaos, podrzucając ciało lorda Charrsa Entrona do ogrodu twierdzy Tekielów. Potem idzie do dzielnicy sadzy spotkać się z Hoidem — informatorem przebranym za kontakt uliczny — i dowiaduje się, że lady Shan Elariel jest łagodzicielką.', season: 'Późne lato', year: '1021 FE' },
			'tfe-19.2': { title: 'Spotkanie z lordem Straffem', description: 'Kelsier udaje się na plac Allström przebrany za chorego i niepełnosprawnego żebraka skaa, by spotkać lorda Straffa Venture, głowę rodu Venture. Odkrywa, że plotki o Ocalałym z Hathsin się rozchodzą i mówi się o jedenastym metalu.', season: 'Późne lato', year: '1021 FE' },
			'tfe-19.3': { title: 'Powrót do Renoux', description: 'Kelsier wraca do dworu Renoux ścieżką ciernistą i wymienia informacje z Vin, Sazedem i Renoux. Robi Vin wykład o szlachcie, twierdząc że nie obchodzą ich skaa i że musi trzymać się z dala od Elenda.', season: 'Późne lato', year: '1021 FE' },
			'tfe-20': { title: 'Nadzorowanie dostaw', description: 'Kelsier na posiadłości Renoux w Fellise nadzoruje ładowanie broni i zapasów na wozy wysyłane do armii rebeliantów.', season: 'Późne lato', year: '1021 FE' },
			'tfe-21': { title: 'Armia rebeliantów', description: 'Kelsier czyta tłumaczenie dziennika Ostatniego Imperatora płynąc barką na północ kanałem. Konwój zatrzymuje się na śluzie w Holstep i Kelsier z rekrutami rusza do jaskiń, gdzie trenuje armia rebeliantów. Pokonuje wspomnienia Dołków Hathsin i wchodzi do kompleksu jaskiń Arguois, by obejrzeć armię, którą wytrenował Hammond. Podczas kolacji Kelsier manipuluje Bilgiem na przestrogę. Bilg i Demoux walczą; Kelsier pomaga Demoux allomancją.', season: 'Jesień', year: '1021 FE' },
			'tfe-23': { title: 'Śledzenie Vin', description: 'Kelsier pojawia się w oknie wieży, gdzie Vin szpieguje grupę Elenda w twierdzy Hastingsów. Drwi z ich idealistycznych rozmów o zmienianiu świata. Rozchodzą się w różne strony.', season: 'Jesień', year: '1021 FE' },
			'tfe-24': { title: 'Spotkanie statusowe', description: 'Kelsier przybywa do sklepu Clubsa, gdzie zebrała się większość ekipy. Omawia stan misji i dzieli nocnego drinka ze Spookiem, Hammondem i Clubsem. Prosi Hammonda o zbieranie informacji w garnizonie.', season: 'Jesień', year: '1021 FE' },
			'tfe-25': { title: 'Rozpaczliwa decyzja', description: 'W sklepie Clubsa Kelsier dowiaduje się, że rebelia skaa zaatakowała garnizon Holstepu i że garnizon Luthadelu maszeruje na północ. Postanawia ostrzec armię rebeliantów i każe Vin połknąć pięć cynowych kulek na długi bieg na północ.', season: 'Późna jesień', year: '1021 FE' },
			'tfe-25.2': { title: 'Katastrofa Holstepu', description: 'Kelsier i Vin biegną szesnaście godzin bez przerwy paląc cynę. Znajdują resztki armii rebeliantów oblężonej i wymordowanej przez garnizon Valtroux. Kelsier chce walczyć, ale Vin przekonuje go, że nie są niezwyciężeni. Docierają do jaskiń Arguois, gdzie dwa tysiące żołnierzy przeżyło dzięki Mennisowi.', season: 'Późna jesień', year: '1021 FE' },
			'tfe-26': { title: 'Zbieranie okruchów', description: 'Ekipa wraca do sklepu Clubsa po dwutygodniowej podróży z jaskiń. Plan wygląda na totalną porażkę. Breeze oskarża Kelsiera o gonienie za chwałą. Kelsier przyznaje się do porażki, ale odmawia rezygnacji.', season: 'Zima', year: '1021 FE' },
			'tfe-26.2': { title: 'Egzekucje', description: 'Spook donosi o egzekucjach na placu Fontanny. Ekipa udaje się tam i przekupuje kogoś, by wejść na dach. Oglądają rzeź wielu ludzi skaa, krew spływającą do fontanny. Kelsier przekonuje ekipę by kontynuowali: „To jest nasz wróg. Nie ma odwrotu, nie ma cofnięcia."', season: 'Zima', year: '1021 FE' },
			'tfe-27': { title: 'Nowa strategia', description: 'Ekipa wraca do sklepu Clubsa, by zaplanować kolejne kroki: rozpętać wojnę między rodami szlacheckimi. Sazed przynosi list od Marsha wskazujący miejsce spotkania na Krętaczkach.', season: 'Zima', year: '1021 FE' },
			'tfe-27.2': { title: 'Złoty metal', description: 'Kelsier i Vin przychodzą do opuszczonego budynku na Krętaczkach kilka godzin przed spotkaniem z Marshem. Czekając, Kelsier opowiada o złocie — dziewiątym metalu allomantycznym, który pokazuje alternatywną wersję przeszłości. Wyjaśnia też ferochemię i daje Vin złoto do pierwszego spalenia. Marsh przybywa z tatuażem niższego obligatora z wydziału Inkwizycji, opisuje stacje łagodzenia w Luthadelu i ujawnia, że inkwizytorzy mogą umrzeć ze starości.', season: 'Zima', year: '1021 FE' },
			'tfe-29': { title: 'Rada wojenna na Renoux', description: 'Kelsier spotyka większość ekipy na posiadłości Renoux w Fellise, by zbadać szczegółową mapę obrony Luthadelu dostarczoną przez Marsha. Odkrywają, że gang Therona został niedawno zaatakowany przez Ministerstwo. Tej nocy, nie mogąc zasnąć, Kelsier prosi Sazeda o opowiedzenie kilku religii.', season: 'Zima', year: '1021 FE' },
			'tfe-31': { title: 'Upomnienie uczennicy', description: 'Kelsier i Vin wracają do sklepu Clubsa po tym, jak Vin zabiła lady Shan Elariel — pełnoprawną Zrodzoną z Mgły — w twierdzy Venture. Kelsier upomina Vin za lekkomyślną walkę, ale ona krzyczy, że szlachta i skaa nie różnią się, że Elend Venture to dobry człowiek warty ochrony.', season: 'Zima', year: '1021 FE' },
			'tfe-32': { title: 'Znalezienie Marsha', description: 'Kelsier i Vin znajdują ciało Marsha całkowicie pozbawione krwi — pustą skorupę. W sklepie Clubsa znajdują list od Marsha wyjaśniający, że inkwizytorzy prawdopodobnie go odnajdą.', season: 'Zima', year: '1022 FE' },
			'tfe-32.2': { title: 'Zniszczenie Dołków', description: 'Kelsier wraca do Dołków Hathsin — miejsca swoich największych cierpień. Zabija wszystkich strażników i wyciąga rękę do skaa imieniem Wallin, który wychodzi z jamy. Niszczy wszystkie kryształy atium, odcinając w jedną noc najcenniejszy zasób Ostatniego Imperatora.', season: 'Zima', year: '1022 FE' },
			'tfe-33': { title: 'Awaryjne schronienie', description: 'Kelsier wraca do wilgotnej zapasowej piwnicy koło sklepu Clubsa — tylko trzy izby. Ogłasza, że zniszczył całe atium w Dołkach Hathsin.', season: 'Wczesna wiosna', year: '1022 FE' },
			'tfe-33.2': { title: 'Walka z inkwizytorem', description: 'Wszyscy podążają za Kelsierem na plac Fontanny. Widzą Spooka i lorda Renoux w wozie egzekucyjnym. Kelsier walczy z inkwizytorem na placu — w pułapkę, o której niemal na pewno wiedział.', season: 'Wczesna wiosna', year: '1022 FE' },
			'tfe-34': { title: 'Ostatnia walka Ocalałego', description: 'Kelsier walczy z inkwizytorem na śmierć i życie na placu Fontanny — obaj palą atium. Jest mistrzem pchania i ciągnięcia, manewrując metalem w powietrzu z genialną biegłością. Zabija inkwizytora i skaa zaczynają skandować „Ocalały z Hathsin". Ostatni Imperator przybywa w czarnym powozie. Jeden z ludzi Hammonda dźga go włócznią — idzie dalej. Dwie włócznie — wciąż stoi. Ostatni Imperator uderza Kelsiera, wyciąga włócznię z własnego ciała i przebija nią Kelsiera. Ten umiera z uśmiechem, stając się męczennikiem, który rozpalił rewolucję.', season: 'Wczesna wiosna', year: '1022 FE' },
			'tfe-35': { title: 'Po śmierci', description: 'W awaryjnym schronieniu koło sklepu Clubsa ekipa widzi kandrę — wcześniej lorda Renoux — w ciele i szkielecie Kelsiera: ostateczny plan. Kelsier zostawił listy każdemu członkowi z instrukcjami przejęcia miasta. Jego śmierć stała się iskrą, która rozpaliła rewolucję w całym Luthadelu.', season: 'Wczesna wiosna', year: '1022 FE' },
		},
		vin: {
			...enData.movements.vin,
			'tfe-1': { title: 'Uliczna sierota', description: 'Vin zostaje wezwana przed lidera gangu Camona, który traktuje ją brutalnie. Nieświadomie używa swojego szczęścia — formy allomantycznego łagodzenia — by go uspokoić. Camon przebiera się za lorda Jedue i przygotowuje oszustwo na Ministerstwo Stali. Vin używa szczęścia na obligatora, ojca Leida, by nie odrzucił żądań Camona.', season: 'Wiosna', year: '1021 FE' },
			'tfe-2': { title: 'Oszustwo Ministerstwa', description: 'Camon przebrany za lorda Jedue zabiera Vin do kancelarii finansowej, by oszukać Ministerstwo. Vin używa szczęścia na arcyojca, który wydaje trzy tysiące boksów Camonowi. Kelsier i Dockson w poczekalni wyczuwają allomantyczne impulsy Vin. Potem widzą stalowego inkwizytora śledzącego orszak Camona.', season: 'Wiosna', year: '1021 FE' },
			'tfe-4': { title: 'Zwerbowana', description: 'Kelsier przedstawia w warsztacie Clubsa plan obalenia Ostatniego Imperium. Ekipa się zgadza, tylko Clubs wychodzi i wraca. Kelsier ujawnia, że Vin jest Zrodzona z Mgły i pokazuje jedenasty metal.', season: 'Wiosna', year: '1021 FE' },
			'tfe-7': { title: 'Trening Zrodzonej z Mgły', description: 'Kelsier zabiera Vin na pierwszy nocny trening i daje jej pelerynę z mgły. Uczy ją ośmiu podstawowych metali — cyna, cyna stopowa, żelazo, stal, cynk, mosiądz, miedź i brąz — kończąc przy murach Luthadelu.', season: 'Późna wiosna', year: '1021 FE' },
			'tfe-8': { title: 'Posiadłość Renoux', description: 'Vin i Kelsier przeskakują mury Luthadelu nocą, a Vin po raz pierwszy spotyka mgłoducha. Sazed czeka z powozem na drodze i wiezie ich do Fellise. Kelsier oferuje Vin trzy tysiące boksów i możliwość odejścia. Bierze pieniądze, ale zostaje. Na posiadłości lorda Renoux zaproponowano, by grała lady Valette.', season: 'Lato', year: '1021 FE' },
			'tfe-9': { title: 'Trening z Sazedem', description: 'Vin i Kelsier sparują na posiadłości Renoux. Vin obcina włosy, Sazed sprawdza jej szlacheckie przebranie i opowiada o trelagizmie. Kelsier i Sazed omawiają postępy Vin na osobności; Kelsier ogłasza, że w weekend pójdą na bal w twierdzy Venture.', season: 'Lato', year: '1021 FE' },
			'tfe-10': { title: 'Powrót do ekipy', description: 'Vin wraca do Luthadelu z Fellise, by uczyć się o metalach od mgłowców ekipy, zaczynając od Breeze, który uczy ją łagodzenia. Hammond przybywa i dyskutuje o moralności obalania Imperium.', season: 'Lato', year: '1021 FE' },
			'tfe-10.2': { title: 'Zgromadzenie w magazynach', description: 'Vin uczestniczy w tajnym zgromadzeniu, gdzie Kelsier przemawia do robotników skaa. Potem Kelsier zwołuje spotkanie w sklepie Clubsa. Vin i Lestibournes rozmawiają o Marshu. Spotkanie kończy się, gdy żołnierz Hammonda donosi o odkryciu starej kryjówki Camona przez Ministerstwo.', season: 'Lato', year: '1021 FE' },
			'tfe-11': { title: 'Masakra w kryjówce Camona', description: 'Vin i ekipa badają zniszczoną kryjówkę; wszędzie trupy. Vin widzi Ulefa — ktoś gołymi rękami wyrwał mu klatkę piersiową. Sazed odmawia modlitwę religii katzi. Ciało Mileva jest przywiązane do krzesła, najwyraźniej torturowane.', season: 'Lato', year: '1021 FE' },
			'tfe-12': { title: 'Pierwszy bal w twierdzy Venture', description: 'Vin jedzie na swój pierwszy bal w twierdzy Venture z Sazedem jako woźnicą. Kelsier pojawia się po drodze, daje rady i znika we mgle. Vin zostaje przedstawiona jako lady Valette Renoux. Podczas kolacji dostrzega ojca po drugiej stronie sali. Odmawia tańca i wycofuje się na balkon na piętrze, gdzie po raz pierwszy rozmawia z Elendem Venture.', season: 'Lato', year: '1021 FE' },
			'tfe-13': { title: 'Powrót do Fellise', description: 'Sazed wypytuje Vin o jej kontakt z Elendem na posiadłości Renoux. Prawdziwa osobowość Vin zaczyna się ujawniać. Kelsier dowiaduje się, że ojciec Vin był na balu i wraca we mgle.', season: 'Lato', year: '1021 FE' },
			'tfe-14': { title: 'Wewnątrz Kredik Shaw', description: 'Kelsier zabiera Vin do Kredik Shaw i torują sobie drogę walką. Vin po raz pierwszy zabija. Trzech stalowych inkwizytorów ich okrąża. Vin chwyta skórzaną księgę do obrony. Pali atium i tymczasowo ucieka, ale inkwizytor wbija jej obsydianowy topór w bok. Ucieka z księgą, ale traci przytomność — coś odwraca uwagę ścigającego inkwizytora i obejmuje ją ochronnie. To nie był Kelsier.', season: 'Lato', year: '1021 FE' },
			'tfe-15': { title: 'Raniona', description: 'Ekipa kwestionuje decyzję Kelsiera. Sazed przynosi Vin na rękach. Podają jej cynę stopową by pomóc w gojeniu. Sazed operuje, a Hammond zanosi ją do pokoju na odpoczynek. Zauważają księgę; Sazed potwierdza, że jest napisana w khlennium.', season: 'Lato', year: '1021 FE' },
			'tfe-16': { title: 'Rekonwalescencja w sklepie Clubsa', description: 'Vin budzi się po dwóch tygodniach w sklepie Clubsa. Spook czuwał przy niej i opowiada, jak Kelsier nadał mu przezwisko. W rozmowie z Docksonem Vin uświadamia sobie, że z Sazedem jest coś bardzo niezwykłego.', season: 'Lato', year: '1021 FE' },
			'tfe-16.2': { title: 'Powrót do Fellise', description: 'Po kolejnych dniach odpoczynku Vin wraca na posiadłość Renoux w Fellise. Rozmawia z Sazedem, który wyjaśnia, czym są Strażnicy, i ujawnia, że wszyscy terriscy służący są kastraci.', season: 'Lato', year: '1021 FE' },
			'tfe-17': { title: 'Ogród posiadłości Renoux', description: 'Vin narzeka na cztery nudne tygodnie rekonwalescencji na posiadłości Renoux. Członkowie ekipy przybywają, by omówić nowinki. Vin przekonuje Kelsiera, by pozwolił jej pójść na kolejny bal. Później rozmawiają o Mare, motywacjach Kelsiera i „pęknięciu" — traumatycznym wydarzeniu, które budzi allomantyczne moce.', season: 'Lato', year: '1021 FE' },
			'tfe-18': { title: 'Bal w twierdzy Elariel', description: 'Vin idzie z Sazedem na bal w twierdzy Elariel. Elend siada przy jej stoliku i jak zwykle czyta. Chwali jej suknię, wprawiając ją w osłupienie. Tańczy z kilkoma szlachcicami i wypytuje o Elenda; słyszy o lady Shan Elariel. Zauważa, że Shan jest łagodzicielką. Wychodząc z balu Vin widzi strażnika podcinającego gardło młodego chłopca skaa-kucharza we mgle.', season: 'Lato', year: '1021 FE' },
			'tfe-19': { title: 'Powrót do Fellise', description: 'Kelsier wraca do dworu Renoux ścieżką ciernistą i spotyka się z Vin, Sazedem i Renoux. Robi Vin wykład o szlachcie, twierdząc że nie obchodzą ich skaa i że musi trzymać się z dala od Elenda Venture.', season: 'Późne lato', year: '1021 FE' },
			'tfe-20': { title: 'Lekcje szukaczki', description: 'Vin wraca z Luthadelu i widzi skrzynie z bronią przed dworem Renoux, gotowe dla rebeliantów. Marsh przybywa i uczy ją szukania — używania brązu do wykrywania innych allomantów — i dalszych szczegółów allomancji.', season: 'Późne lato', year: '1021 FE' },
			'tfe-22': { title: 'Dziennik', description: 'Vin czyta swoją kopię dziennika Ostatniego Imperatora na posiadłości Renoux, gdy pojawia się Spook. Mówi, że Dockson przyjechał po więcej broni, po czym czerwienieje, wręcza jej chustkę i ucieka. Sazed wyjaśnia później, że podarowanie chustki przez młodego mężczyznę wyraża poważne intencje zalotów. Czekając na Docksona, Vin rozmawia z Sazedem o Terrisach w dzienniku; Sazed ujawnia tajemnice ferochemii i założenie Strażników. Potem Vin rozmawia z Docksonem, który opowiada, jak lord Devinshae zabrał kobietę, którą kochał, i zabił ją następnego ranka.', season: 'Jesień', year: '1021 FE' },
			'tfe-23': { title: 'Bal w twierdzy Hastingsów', description: 'Vin idzie na bal w twierdzy Hastingsów. Lady Shan prosi Vin, by następnym razem sprawdziła książki Elenda. Vin znajduje Elenda i pyta, czy był ze skaanką. Przyznaje, że ojciec zmusił go w wieku trzynastu lat, a kobieta została potem zabita. Elend daje jej chustkę. Po odejściu z przyjaciółmi Vin śledzi ich allomantycznie do wieży, gdzie dyskutują o porażkach Ostatniego Imperatora. Kelsier niespodziewanie się pojawia i drwi z ich pomysłów.', season: 'Jesień', year: '1021 FE' },
			'tfe-24': { title: 'Spotkanie ekipy', description: 'Vin i Kelsier przybywają do sklepu Clubsa, gdzie zebrała się większość ekipy. Kelsier omawia stan misji, a Vin uświadamia sobie, jak bardzo lubi swoje nowe życie. Kelsier, Spook, Hammond i Clubs dzielą nocnego drinka.', season: 'Jesień', year: '1021 FE' },
			'tfe-24.2': { title: 'Wizyta w garnizonie', description: 'Vin przebiera się za ulicznego chłopaka i idzie z Hammondem do garnizonu Luthadelu, by uczyć się o cynie stopowej. Hammond wyjaśnia, że wielu żołnierzy to zwykli ludzie skaa. Strażnik imieniem Sertts informuje ich, że garnizon jest mobilizowany — rebelia skaa zaatakowała garnizon Holstepu na północy.', season: 'Jesień', year: '1021 FE' },
			'tfe-25': { title: 'Pilne wiadomości', description: 'W sklepie Clubsa Hammond przynosi wieść, że garnizon Luthadelu wyruszył do Holstepu. Kelsier każe Vin połknąć pięć cynowych kulek, by biec na północ i ostrzec armię rebeliantów.', season: 'Późna jesień', year: '1021 FE' },
			'tfe-25.2': { title: 'Cynowy bieg', description: 'Vin i Kelsier biegną szesnaście godzin bez przerwy paląc cynę w desperackim biegu. Znajdują resztki armii rebeliantów oblężonej i wymordowanej przez garnizon Valtroux. Kelsier chce walczyć, Vin przekonuje go, że nie są niezwyciężeni. Docierają do jaskiń Arguois, gdzie dwa tysiące żołnierzy przeżyło dzięki Mennisowi.', season: 'Późna jesień', year: '1021 FE' },
			'tfe-26': { title: 'Regeneracja', description: 'Vin leży wyczerpana w sklepie Clubsa. Powrót do Luthadelu trwał dwa tygodnie. Kelsier wpada; Breeze go oskarża. Kelsier przyznaje się do porażki, ale nie rezygnuje.', season: 'Późna jesień', year: '1021 FE' },
			'tfe-26.2': { title: 'Egzekucje', description: 'Spook donosi o egzekucjach na placu Fontanny. Ekipa wchodzi na dachy. Vin wskazuje swojego ojca — obligatora imieniem Tevidian, lorda prelata, najwyższego rangą obligatora. Patrzą, jak kobiety i dzieci wyciągane z wozów więziennych są mordowane, a fontanna czerwieni się od krwi.', season: 'Późna jesień', year: '1021 FE' },
			'tfe-27': { title: 'Planowanie kolejnych kroków', description: 'Ekipa wraca do sklepu Clubsa. Kelsier, Vin i reszta przerabiają plan rozpętania wojny rodów. Sazed przybywa z listem Marsha i instrukcjami spotkania.', season: 'Zima', year: '1021 FE' },
			'tfe-27.2': { title: 'Spotkanie z Marshem', description: 'Kelsier i Vin idą do opuszczonego budynku na Krętaczkach, by spotkać się z Marshem. Czekając, Kelsier opowiada o złocie. Marsh przybywa z tatuażem niższego obligatora z wydziału Inkwizycji. Ujawnia, że Ministerstwo rozmieszcza łagodzicieli w dzielnicach skaa pod stałym łagodzeniem, ukrytych przez dymiarzy. Potwierdza też, że inkwizytorzy mogą umrzeć ze starości.', season: 'Zima', year: '1021 FE' },
			'tfe-28': { title: 'Bal w twierdzy Likal', description: 'Vin uczestniczy w balu w twierdzy Likal i zaczyna rozsiewać plotki, by eskalować wojnę rodów. Elend pojawia się — mówi, że chce ją pocałować, ale Vin upiera się, że jej naprawdę nie zna. Podczas spaceru Elend ujawnia, że majątek Venture pochodzi wyłącznie z wydobycia atium w Dołkach Hathsin. Wspomina, że ród Tekiel został wymazany przez ród Hastings i próbuje przekonać Valette do opuszczenia Luthadelu.', season: 'Zima', year: '1021 FE' },
			'tfe-29': { title: 'Ostatnie tłumaczenie', description: 'Vin czyta ostatnie tłumaczenie dziennika przygotowane przez Sazeda na posiadłości Renoux i jest sfrustrowana, że nie ma więcej. Sazed wyjaśnia ferochemię bardziej szczegółowo, a Vin próbuje spalić jeden z jego cynowych umysłów. Później Kelsier dołącza do ekipy, by zbadać mapę Marsha. Odkrywają, że gang Therona został zaatakowany, a Vin podejrzewa, że inkwizytorzy nadal ją ścigają.', season: 'Zima', year: '1021 FE' },
			'tfe-30': { title: 'Bal Venture', description: 'Vin i Sazed idą na ostatni bal rodowy w twierdzy Venture. Panna Kliss okazuje się informatorem i próbuje szantażować ród Renoux. Za szafirowy naszyjnik Kliss zdradza Vin, że zabójcy Elariel spróbują dziś wieczorem zabić Elenda. Vin zmusza Kliss allomantycznie do wyznania wszystkiego. Rozbija witraż i ucieka. Na zewnątrz walczy z dwoma osiłkami, dwoma strzelcami monet i dwiema Zrodzonymi z Mgły — jedną z nich jest Shan Elariel. Vin oszukuje Shan, zmuszając ją do wyczerpania atium jako pierwsza, i zabija ją.', season: 'Zima', year: '1021 FE' },
			'tfe-31': { title: 'Po pojedynku', description: 'Vin wpada do kuchni Clubsa obandażowana i w strzępach. Kelsier upomina ją za ratowanie Elenda, ale Vin krzyczy, że skaa i szlachta się nie różnią — Elend jest dobry. Na dachu Vin mówi, że ród Venture zarządza Dołkami i dzieli się teorią, że inkwizytorzy widzą przez miedziany płaszcz. Kelsier testuje i potwierdza.', season: 'Zima', year: '1021 FE' },
			'tfe-32': { title: 'Warta na dachu', description: 'Vin i Spook pełnią wartę na dachu sklepu Clubsa. Spook uczy ją sztuczek z cyną: nie tylko wzmacniać zmysły, ale filtrować to, co ważne. Później Kelsier i Vin znajdują ciało Marsha — całkowicie pozbawione krwi. Znajdują list wyjaśniający, że inkwizytorzy prawdopodobnie go znajdą.', season: 'Zima', year: '1021 FE' },
			'tfe-33': { title: 'Awaryjne schronienie', description: 'Ekipa przenosi się do wilgotnej zapasowej piwnicy koło sklepu Clubsa — trzy izby. Kelsier ogłasza zniszczenie atium w Dołkach. Spook pełni wartę jako cynowy strażnik.', season: 'Wczesna wiosna', year: '1022 FE' },
			'tfe-33.2': { title: 'Walka z inkwizytorem', description: 'Wszyscy podążają za Kelsierem na plac Fontanny. Widzą Spooka i lorda Renoux w wozie egzekucyjnym. Kelsier walczy z inkwizytorem na placu. Elend widzi służących Renoux zamkniętych i woła Valette, ale nie może jej znaleźć.', season: 'Wczesna wiosna', year: '1022 FE' },
			'tfe-34': { title: 'Śmierć Ocalałego', description: 'Kelsier walczy z inkwizytorem w pełnoskalowej walce na placu Fontanny — obaj palą atium. Vin obserwuje z góry: Kelsier jest prawdziwym mistrzem pchania i ciągnięcia. Zabija inkwizytora, skaa skandują „Ocalały z Hathsin". Ostatni Imperator przybywa w czarnym powozie. Kelsier ginie. Vin zeskakuje i tuli go, gdy umiera.', season: 'Wczesna wiosna', year: '1022 FE' },
			'tfe-35': { title: 'Dziedzictwo Ocalałego', description: 'Vin wraca do awaryjnego schronienia. Wściekła, że Kelsier nie był szczery — planował umrzeć i ją zostawić. Sazed pociesza. Na zewnątrz skaa mówią o Władcy mgły. W pobliskim magazynie ekipa widzi kandrę w postaci Kelsiera. Kelsier zostawił listy z instrukcjami przejęcia miasta. List Vin mówi, że nie rozwiązał zagadki jedenastego metalu. Vin postanawia odkryć, co ukrywał Ostatni Imperator.', season: 'Wczesna wiosna', year: '1022 FE' },
			'tfe-36': { title: 'Wewnątrz Kredik Shaw', description: 'Vin cicho zmierza ku Kredik Shaw, zachęcając strażników na zewnątrz, by przyłączyli się do buntu. Wewnątrz zabija dwóch inkwizytorów. W następnej sali na krześle siedzi stary człowiek. Inkwizytor chwyta Vin za szyję — staruszek przemawia, a inkwizytorzy nazywają go Ostatnim Imperatorem. Ale Vin jest zdezorientowana: Imperator na placu Fontanny był młody. Pali jedenasty metal i widzi dwie widmowe postacie obok staruszka.', season: 'Wczesna wiosna', year: '1022 FE' },
			'tfe-37': { title: 'Ratunek i odkrycie', description: 'Inkwizytorzy zmuszają Vin do spalenia metalu, który znosi wszystkie inne metale. Zostaje zaprowadzona przed tron Ostatniego Imperatora — młoda wersja, zabójca Kelsiera. Jej ojciec Tevidian, najwyższy obligator, zostaje stracony przez inkwizytorów. Vin odkrywa, że Reen nigdy jej nie zdradził: zniósł tortury i powiedział inkwizytorom, że umarła z głodu. Sazed zostaje doprowadzony do jej celi i uwalnia ferokemiczną moc, wyłamując drzwi. Elend i sześciu żołnierzy szturmuje. Vin znajduje pelerynę i fiolkę z metalami. Elend wie już, że jest Zrodzona z Mgły. Vin bierze jego twarz w dłonie, całuje go i rusza zabić Ostatniego Imperatora.', season: 'Wczesna wiosna', year: '1022 FE' },
			'tfe-38': { title: 'Pogromczyni Ostatniego Imperatora', description: 'Vin skacze między iglicami Kredik Shaw w górę. Inkwizytor Kar chwyta ją za szyję, ale inny inkwizytor wyciąga metalowy gwóźdź z karku Kara, zabijając go natychmiast. To Marsh — żywy, z jedenastoma gwoździami w ciele. Zabił wszystkich innych inkwizytorów. Prawdziwe imię Ostatniego Imperatora to Rashek: zamordował Bohatera Wieków i zajął jego miejsce. Vin zrywa bransolety Imperatora. Bez ferokemicznej młodości staje się słabym starcem. Sazed pojawia się z fiolką metali. Vin wbija mu włócznię w serce. Tysiąc lat ucisku dobiega końca.', season: 'Wczesna wiosna', year: '1022 FE' },
			'tfe-39': { title: 'Nowa era', description: 'Sazed, Marsh i Vin stoją na dachu budynku koło dzielnicy skaa. Sazed wyjaśnia, że Ostatni Imperator był zarówno ferochemikiem, jak i allomantą — bransolety przechowywały jego młodość. Marsh opisuje swoje przeżycie i przemianę: jedenaście metalowych gwoździ — dwa przez oczy, osiem w klatce piersiowej, jeden w plecach. Opowiada też o kandrach — istotach wyewoluowanych z mgłoduchów — które teraz uznają Vin za swoją panią.', season: 'Wiosna', year: '1022 FE' },
			'tfe-39.2': { title: 'Vin i Elend', description: 'Vin potajemnie obserwuje Elenda z mgły przed twierdzą Venture. Jego spotkanie z przywódcami skaa i szlachty poszło dobrze — po wspaniałym przemówieniu, którego nawet Sazed bez swoich metali nie mógł w pełni zapamiętać, wszyscy zaakceptowali go jako króla. Elend pisze nowe prawo królestwa. Vin przypomina sobie, że Reen nigdy nie zdradził jej inkwizytorom: są ludzie, którzy naprawdę ją kochają. Z tym wspomnieniem biegnie do Elenda i obejmują się.', season: 'Wiosna', year: '1022 FE' },
		},
		sazed: {
			...enData.movements.sazed,
			'tfe-9': { title: 'Terryski sługa', description: 'Sazed przybywa na posiadłość lorda Renoux w Fellise jako nauczyciel i sługa Vin, ucząc ją etykiety, tańca i manier. Przedstawia jej trelagizm — piątą religię, którą proponuje — i przyznaje, że zna jeszcze 562.', season: 'Lato', year: '1021 FE' },
			'tfe-10.2': { title: 'Zgromadzenie w magazynach', description: 'Sazed uczestniczy w tajnym zgromadzeniu z Kelsierem i Vin, obserwując Ocalałego przemawiającego do robotników skaa.', season: 'Lato', year: '1021 FE' },
			'tfe-12': { title: 'Strażnik na balu', description: 'Sazed towarzyszy Vin jako sługa na pierwszy bal w twierdzy Venture, pilnując jej podczas infiltracji szlacheckiego towarzystwa.', season: 'Lato', year: '1021 FE' },
			'tfe-13': { title: 'Odprawa w Fellise', description: 'Sazed wraca na posiadłość Renoux w Fellise z Vin i Kelsierem, by omówić wyniki pierwszego balu Vin i zaplanować kolejne kroki.', season: 'Lato', year: '1021 FE' },
			'tfe-15': { title: 'Ratowanie Vin', description: 'Sazed przynosi Vin do sklepu Clubsa, ratuje ją i operuje rany z Kredik Shaw. Bada też księgę napisaną w khlennium.', season: 'Lato', year: '1021 FE' },
			'tfe-16': { title: 'Powrót do Fellise', description: 'Po ustabilizowaniu stanu Vin w sklepie Clubsa Sazed wraca na posiadłość Renoux w Fellise.', season: 'Lato', year: '1021 FE' },
			'tfe-17': { title: 'Tłumaczenie księgi khlennijskiej', description: 'W bibliotece na posiadłości Renoux w Fellise Sazed pracuje nad tłumaczeniem księgi khlennijskiej, którą Vin przyniosła z Kredik Shaw.', season: 'Lato', year: '1021 FE' },
			'tfe-18': { title: 'Strażnik w Elariel', description: 'Sazed towarzyszy Vin jako terryski sługa na bal w twierdzy Elariel, pilnując jej wśród szlacheckiego dworu.', season: 'Lato', year: '1021 FE' },
			'tfe-19': { title: 'Wymiana informacji', description: 'Sazed jest na dworze Renoux, gdy Kelsier wraca ścieżką ciernistą. Wymieniają informacje o rodach szlacheckich i postępach buntu, Kelsier upomina Vin za zbliżanie się do Elenda.', season: 'Późne lato', year: '1021 FE' },
			'tfe-22': { title: 'Tajemnice ferochemii', description: 'Na posiadłości Renoux Sazed rozmawia z Vin o Terrysach w dzienniku Ostatniego Imperatora. Ujawnia tajemnice ferochemii i wyjaśnia, jak Strażnicy zostali założeni po utracie terryskich religii. Z dziennika dowiaduje się też nowych faktów — że ziemia była kiedyś zielona i żyzna.', season: 'Jesień', year: '1021 FE' },
			'tfe-23': { title: 'Strażnik w Hastings', description: 'Sazed towarzyszy Vin jako terryski sługa na bal w twierdzy Hastingsów, czekając gdy ona rozsyła plotki i rozmawia ze szlachtą.', season: 'Jesień', year: '1021 FE' },
			'tfe-27': { title: 'List od Marsha', description: 'Sazed wraca do sklepu Clubsa z listem od Marsha zawierającym wieści i instrukcje spotkania. Przynosi też tłumaczenia dziennika Imperatora.', season: 'Zima', year: '1021 FE' },
			'tfe-28': { title: 'Strażnik w Likal', description: 'Sazed towarzyszy Vin jako terryski sługa na bal w twierdzy Likal, czekając gdy ona eskaluje wojnę rodów i rozmawia z Elendem.', season: 'Zima', year: '1021 FE' },
			'tfe-29': { title: 'Lekcje ferochemii', description: 'Na posiadłości Renoux Sazed daje Vin ostatnie tłumaczenie dziennika. Wyjaśnia ferochemię dokładniej, a Vin próbuje spalić jeden z jego cynowych umysłów. Później Sazed dołącza, gdy Kelsier studiuje szczegółową mapę Marsha. Tej nocy Kelsier prosi Sazeda o opowiedzenie kilku religii.', season: 'Zima', year: '1021 FE' },
			'tfe-30': { title: 'Strażnik w Venture', description: 'Sazed towarzyszy Vin na ostatni bal rodowy w twierdzy Venture. Goście zawierają sojusze, a lady Valette jest chłodno przyjmowana. Sazed opuszcza bal zanim Vin odkryje zamach na Elenda i walczy z Shan Elariel.', season: 'Zima', year: '1021 FE' },
			'tfe-31': { title: 'Opatrywanie ran Vin', description: 'Sazed opatruje rany Vin w sklepie Clubsa po tym, jak przybywa poraniona z walki z Shan Elariel i zabójcami Elariela. Słucha, gdy Vin relacjonuje wydarzenia wieczoru.', season: 'Zima', year: '1021 FE' },
			'tfe-33': { title: 'Awaryjne schronienie', description: 'Sazed jest z ekipą w zapasowej piwnicy koło sklepu Clubsa po tym, jak Kelsier zniszczył Dołki Hathsin. Vin rozmawia z Sazedem o jedenastym metalu. Gdy skaa prowadzeni na egzekucję na plac Fontanny i Spook pojawia się w wozie więziennym, Sazed zostaje w schronieniu podczas walki Kelsiera z inkwizytorem.', season: 'Wczesna wiosna', year: '1022 FE' },
			'tfe-35': { title: 'Pocieszanie Vin', description: 'Sazed jest przy Vin w awaryjnym schronieniu po śmierci Kelsiera. Oferuje pocieszające słowa, a Vin jest wściekła, że Kelsier ją zostawił. Zostaje, gdy ekipa idzie do magazynu zobaczyć kandrę w postaci Kelsiera.', season: 'Wczesna wiosna', year: '1022 FE' },
			'tfe-37': { title: 'Uwolniony ferochemik', description: 'Sazed zostaje doprowadzony do celi Vin w Kredik Shaw. Wydaje się kurczyć, a potem jego mięśnie pęcznieją do dwukrotnego rozmiaru — uwalnia zgromadzoną ferokemiczną moc i wyłamuje drzwi.', season: 'Wczesna wiosna', year: '1022 FE' },
			'tfe-38': { title: 'Upadek Imperium', description: 'Sazed pojawia się w ostatecznej konfrontacji w Kredik Shaw z fiolką metali dla Vin. Jest świadkiem upadku Ostatniego Imperatora — gdy Vin zrywa bransolety, gwałtownie się starzeje.', season: 'Wczesna wiosna', year: '1022 FE' },
			'tfe-39': { title: 'Zrozumienie tyrana', description: 'Sazed stoi z Vin i Marshem na dachu budynku koło dzielnicy skaa. Wyjaśnia, że Ostatni Imperator był zarówno ferochemikiem, jak i allomantą — bransolety przechowywały jego młodość. Spekuluje, że dlatego wszyscy terriscy służący byli kastrowani: Imperator bał się, że ktoś z krwią ferokemiczną i allomantyczną rzuci wyzwanie jego nieśmiertelności.', season: 'Wiosna', year: '1022 FE' },
		},
		elend: {
			...enData.movements.elend,
			'tfe-12': { title: 'Czytający szlachcic', description: 'Elend Venture zauważa samotną Vin na balkonie podczas balu w swojej twierdzy i podchodzi. Irytuje ją, wyciągając „Próby wstawiennictwa" do czytania, podczas gdy reszta szlachty tańczy i konspiruje.', season: 'Lato', year: '1021 FE' },
			'tfe-18': { title: 'Wieczór z Valette', description: 'Elend uczestniczy w balu w twierdzy Elariel, siada jak zwykle przy Vin i czyta. Chwali jej suknię, wprawiając ją w osłupienie.', season: 'Lato', year: '1021 FE' },
			'tfe-23': { title: 'Chustka', description: 'Elend znajduje Vin na balu w twierdzy Hastingsów. Pyta, czy była ze skaanką. Przyznaje, że ojciec zmusił go w wieku trzynastu lat, a kobieta została zabita. Daje Vin chustkę jako znak poważnych zalotów. Po odejściu z przyjaciółmi wspinają się na wieżę, by dyskutować o porażkach Ostatniego Imperatora.', season: 'Jesień', year: '1021 FE' },
			'tfe-28': { title: 'Bal w twierdzy Likal', description: 'Elend pojawia się przed Vin na balu w twierdzy Likal. Mówi, że chce ją pocałować, ale Vin twierdzi, że jej nie zna. Podczas spaceru ujawnia, że cały majątek Venture pochodzi z wydobycia atium w Dołkach — pełne zaufanie. Wspomina, że ród Tekiel został wymordowany przez Hastingsów i próbuje przekonać Valette do opuszczenia Luthadelu.', season: 'Zima', year: '1021 FE' },
			'tfe-28.2': { title: 'Wezwanie ojca', description: 'Elend wraca do twierdzy Venture próbując przemknąć obok pokoju ojca. Lord Straff Venture — cynowy mgłowiec, który niczego nie przegapi — woła go. Straff nakazuje kolację z Hastingsami. Później Jastes ujawnia, że śledził powóz Valette — dotarła do Fellise tylko z Terrysem, a Valette zniknęła. Elend uświadamia sobie, że ujawnił tajemnicę atium i proponuje ojcu układ: idzie na kolację w zamian za szpiegów pilnujących Valette.', season: 'Zima', year: '1021 FE' },
			'tfe-30': { title: 'Bal Venture', description: 'Elend je kolację z ojcem w twierdzy Venture podczas balu. Vin przyciąga jego uwagę i dochodzi do konfrontacji. Gdy Vin dowiaduje się o zamachu na Elenda, wybiega we mgłę. Noc kończy się chaosem, gdy Vin walczy z Shan i zabija ją. Elend wymyka się w zamęcie.', season: 'Zima', year: '1021 FE' },
			'tfe-31': { title: 'Raporty szpiegów', description: 'Elend i Jastes spotykają Felta, który raportuje wszystko, co szpiedzy Elenda odkryli o sklepie Clubsa i jego mieszkańcach. Następnie straż Venture prowadzi Elenda do ojca Straffa, który ujawnia, że Shan Elariel była Zrodzoną z Mgły wysłaną, by zabić Elenda.', season: 'Zima', year: '1021 FE' },
			'tfe-33': { title: 'Wozy egzekucyjne', description: 'Elend widzi służących Renoux zamkniętych w wozie egzekucyjnym na placu Fontanny. Woła Valette, ale nie może jej znaleźć w tłumie.', season: 'Wczesna wiosna', year: '1022 FE' },
			'tfe-34': { title: 'Kelsier ratuje Elenda', description: 'Elend dociera do klatki Renoux na placu Fontanny i pyta o Valette. Inkwizytor ląduje na klatce i zamierza go uderzyć toporem, gdy Kelsier atakuje inkwizytora, ratując mu życie. Kelsier krzyczy do Elenda, że Valette jest bezpieczna.', season: 'Wczesna wiosna', year: '1022 FE' },
			'tfe-36': { title: 'Władza rodu Venture', description: 'Ojciec Elenda informuje o wybuchu rebelii skaa i chce uciec z Luthadelu. Elend odmawia. Straff się zgadza — licząc, że Elend zginie — i przekazuje mu władzę nad rodem Venture. Elend nakazuje żołnierzom udać się do twierdzy Likal na wspólną obronę i bierze pięciu najlepszych żołnierzy na spotkanie z przywódcami skaa.', season: 'Wczesna wiosna', year: '1022 FE' },
			'tfe-37': { title: 'Ratowanie Vin', description: 'Elend oferuje złoto skaa, by zaprowadzili go do Docksona i informuje, że ród Venture nie będzie stawiać oporu rebelii — powinni współpracować. Elend i sześciu żołnierzy szturmuje Kredik Shaw, by uratować Vin. Tajemnica wychodzi na jaw — wie, że jest Zrodzona z Mgły. Vin bierze jego twarz w dłonie, całuje go i rusza zabić Ostatniego Imperatora.', season: 'Wczesna wiosna', year: '1022 FE' },
			'tfe-38': { title: 'Król-filozof', description: 'Po śmierci Ostatniego Imperatora Elend wyłania się jako jednoczący głos wzywający do porządku. Zaczyna spotkania z przywódcami skaa i szlachty, by opracować prawo nowego państwa.', season: 'Wczesna wiosna', year: '1022 FE' },
			'tfe-39': { title: 'Nowy król', description: 'Elend Venture zostaje zaakceptowany jako król Centralnej Dominacji po wspaniałym przemówieniu przed przywódcami skaa i szlachty. Siada w twierdzy Venture i pisze nowe prawo królestwa. Vin obserwuje go potajemnie przez okno z mgły, a potem biegnie do niego — i obejmują się.', season: 'Wiosna', year: '1022 FE' },
		},
		marsh: {
			...enData.movements.marsh,
			'tfe-7': { title: 'Niechętny brat', description: 'Marsh przybywa do sklepu Clubsa — starszy brat Kelsiera i sam przywódca rebeliantów. Niechętnie dołącza do planu ekipy.', season: 'Późna wiosna', year: '1021 FE' },
			'tfe-10.2': { title: 'Zgromadzenie w magazynach', description: 'Marsh uczestniczy w tajnym zgromadzeniu z ekipą, obserwując brata Kelsiera przemawiającego do robotników skaa.', season: 'Lato', year: '1021 FE' },
			'tfe-20': { title: 'Nauczanie Vin', description: 'Marsh przybywa na posiadłość Renoux w Fellise, by uczyć Vin szukania — używania brązu do wykrywania innych allomantów palących metale, identyfikacji typu i rozróżniania mgłowców od Zrodzonych z Mgły. Uczy ją też o miedzi i pracy dymiarzy.', season: 'Późne lato', year: '1021 FE' },
			'tfe-27': { title: 'Infiltracja Ministerstwa', description: 'Marsh spotyka Kelsiera i Vin w opuszczonym budynku na Krętaczkach z tatuażem niższego obligatora z wydziału Inkwizycji. Rzeczywiście zinfiltrował Ministerstwo. Ujawnia, że Ministerstwo rozmieszcza łagodzicieli w dzielnicach skaa pod stałym łagodzeniem, ukrytych przez dymiarzy. Potwierdza też, że inkwizytorzy mogą umrzeć ze starości.', season: 'Zima', year: '1021 FE' },
			'tfe-30': { title: 'Zniknięcie', description: 'Marsh milknie i kontakt się urywa, gdy znika w głębinach wydziału Inkwizycji. Ekipa obawia się najgorszego.', season: 'Zima', year: '1021 FE' },
			'tfe-32': { title: 'Ciało', description: 'Kelsier i Vin znajdują ciało Marsha całkowicie pozbawione krwi — pustą skorupę. List znaleziony później wyjaśnia, że inkwizytorzy prawdopodobnie go znajdą. Ekipa opłakuje stratę. Ale zmasakrowane ciało nie jest tym, czym się wydaje.', season: 'Zima', year: '1022 FE' },
			'tfe-38': { title: 'Inkwizytor', description: 'Marsh pojawia się podczas ostatniego szturmu na Kredik Shaw — żywy, przemieniony przez jedenaście metalowych gwoździ: dwa przez oczy, osiem w klatce piersiowej i jeden w plecach łączący je. Wyciąga gwóźdź z karku Kara, zabijając go natychmiast, i ujawnia, że zabił wszystkich innych inkwizytorów.', season: 'Wczesna wiosna', year: '1022 FE' },
			'tfe-39': { title: 'Jedenaście gwoździ', description: 'Marsh stoi z Sazedem i Vin na dachu budynku koło dzielnicy skaa. Opowiada o swoim przeżyciu i przemianie — jedenaście gwoździ, przerażający proces i jak to przetrwał. Mówi też o kandrach — istotach wyewoluowanych z mgłoduchów — które grając lorda Renoux teraz uznają Vin za swoją panią.', season: 'Wiosna', year: '1022 FE' },
		},
		spook: {
			...enData.movements.spook,
			'tfe-7': { title: 'Młody mgłowiec cyny', description: 'Spook, młody siostrzeniec Clubsa, służy jako wartownik i posłaniec ekipy w warsztacie stolarskim, mówiąc gęstym wschodnim dialektem.', season: 'Późna wiosna', year: '1021 FE' },
			'tfe-9': { title: 'Bieganie posłańca', description: 'Spook przenosi wiadomości między sklepem Clubsa w Luthadelu a posiadłością Renoux w Fellise; jego wzmożone cyną zmysły czynią go doskonałym zwiadowcą.', season: 'Lato', year: '1021 FE' },
			'tfe-16': { title: 'Czuwanie przy Vin', description: 'Lestibournes czuwa przy rannej Vin w sklepie Clubsa, obecny gdy budzi się po ranach z wyprawy zwiadowczej do Kredik Shaw. Opowiada, jak Kelsier nadał mu nowe imię: Spook.', season: 'Lato', year: '1021 FE' },
			'tfe-22': { title: 'Chustka', description: 'Spook odwiedza posiadłość Renoux w Fellise i zastaje Vin czytającą dziennik Ostatniego Imperatora. Mówi, że Dockson przyjechał po broń, potem czerwieni się, wręcza jej chustkę i ucieka. Sazed później wyjaśnia, że podarowanie chustki przez młodego mężczyznę wyraża poważne intencje zalotów.', season: 'Jesień', year: '1021 FE' },
			'tfe-24': { title: 'Noc w sklepie Clubsa', description: 'Spook dzieli nocnego drinka z Kelsierem, Hammondem i Clubsem w sklepie Clubsa, omawiając stan misji.', season: 'Jesień', year: '1021 FE' },
			'tfe-26': { title: 'Egzekucje', description: 'Spook wpada do sklepu Clubsa z wieścią o egzekucjach na placu Fontanny. Towarzyszy ekipie na plac, gdzie są świadkami brutalnej publicznej egzekucji kobiet i dzieci skaa, krew spływa do fontanny.', season: 'Późna jesień', year: '1021 FE' },
			'tfe-32': { title: 'Warta na dachu', description: 'Spook pełni wartę na dachu sklepu Clubsa z Vin, ucząc ją sztuczek z cyną. Wyjaśnia, że nie chodzi tylko o wzmacnianie zmysłów, ale o filtrowanie tego, co ważne, i niepozwalanie sobie na rozpraszanie resztą.', season: 'Zima', year: '1022 FE' },
			'tfe-33': { title: 'Pojmany wartownik', description: 'Gdy ekipa zmierza na plac Fontanny, Spooka widzą w wozie egzekucyjnym obok lorda Renoux — schwytanego przez Ministerstwo.', season: 'Wczesna wiosna', year: '1022 FE' },
			'tfe-34': { title: 'Świadek poświęcenia', description: 'Spook obserwuje z tłumu walkę i śmierć Kelsiera na placu Fontanny — wydarzenie, które naznaczy resztę jego życia. Poświęcenie Ocalałego zmienia rozumienie Spooka, co znaczy służyć sprawie.', season: 'Wczesna wiosna', year: '1022 FE' },
			'tfe-38': { title: 'Rewolucja', description: 'Spook walczy u boku ekipy podczas ostatecznej rewolucji, pomagając koordynować powstanie skaa na ulicach Luthadelu.', season: 'Wczesna wiosna', year: '1022 FE' },
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
};
