/**
 * Polish data translations.
 * Sources: Wydawnictwo MAG editions, translated by Aleksandra Jagiełowicz.
 * Key terminology verified against official print and canonical glossaries.
 */
import type { DataTranslations } from '../types';

export const plData: DataTranslations = {
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
		vin: {
			'tfe-1': {
				title: 'Uliczna sierota',
				description:
					'Vin pracuje jako obserwatorka w złodziejskiej szajce Camona w slumsach Luthadelu, nieświadomie wykorzystując swoje allomantyczne zdolności, by subtelnie wpływać na otoczenie.',
				season: 'Wiosna',
				year: '1021 FE',
			},
			'tfe-2': {
				title: 'Oszustwo w Ministerstwie',
				description:
					'Vin towarzyszy szajce Camona podczas ryzykownego oszustwa w Kantonie Finansów, gdzie jej allomantyczne impulsy przyciągają uwagę Kelsiera.',
				season: 'Wiosna',
				year: '1021 FE',
			},
			'tfe-4': {
				title: 'Rekrutacja',
				description:
					'Po tym jak Kelsier ratuje Vin przed pobiciem przez Camona, zostaje zabrana do stolarni Clubsa — kwatery głównej szajki — i zapoznana z planem obalenia Ostatniego Imperatora.',
				season: 'Wiosna',
				year: '1021 FE',
			},
			'tfe-7': {
				title: 'Trening Urodzonej z Mgły',
				description:
					'Kelsier zabiera Vin pod mury miasta przy Stalowej Bramie na jej pierwszy prawdziwy trening Allomancji, ucząc ją spalania stali i żelaza wśród ciemnych dachów.',
				season: 'Późna wiosna',
				year: '1021 FE',
			},
			'tfe-8': {
				title: 'Posiadłość Renoux',
				description:
					'Vin podróżuje na zachód do Fellise, by rozpocząć swoją przykrywkę jako Lady Valette Renoux w wiejskiej posiadłości Lorda Renoux, przygotowując się do infiltracji szlacheckiego towarzystwa.',
				season: 'Lato',
				year: '1021 FE',
			},
			'tfe-9': {
				title: 'Nauka z Sazedem',
				description:
					'Pod okiem Sazeda w posiadłości Renoux Vin uczy się etykiety, tańca i zasad zachowania niezbędnych, by uchodzić za szlachciankę na wielkich balach.',
				season: 'Lato',
				year: '1021 FE',
			},
			'tfe-10': {
				title: 'Powrót do ekipy',
				description:
					'Vin wraca do Luthadelu z Fellise, dołączając ponownie do ekipy w warsztacie Clubsa. Kelsier zabiera ją na nocny bieg allomantyczny przez miasto, kontynuując jej trening.',
				season: 'Lato',
				year: '1021 FE',
			},
			'tfe-10.2': {
				title: 'Wiec w magazynie',
				description:
					'Vin uczestniczy w tajnym wiecu, na którym Kelsier głosi rewolucję zebranym robotnikom skaa w ukrytym magazynie.',
				season: 'Lato',
				year: '1021 FE',
			},
			'tfe-11': {
				title: 'Masakra w Kryjówce Camona',
				description:
					'Vin i ekipa odkrywają skutki brutalnego ataku na starą kryjówkę Camona — Ministerstwo zabiło wszystkich w środku w odwecie za oszustwo w Kantonie Finansów.',
				season: 'Lato',
				year: '1021 FE',
			},
			'tfe-13': {
				title: 'Pierwszy bal w Twierdzy Venture',
				description:
					"Vin uczestniczy w swoim pierwszym balu jako Lady Valette Renoux, wkraczając w lśniący świat szlachty. Spotyka Elenda Venture'a czytającego samotnie w kącie.",
				season: 'Lato',
				year: '1021 FE',
			},
			'tfe-14': {
				title: 'Rozpoznanie w Kredik Shaw',
				description:
					'Vin i Kelsier podejmują zuchwałą nocną rozpoznanie pałacu Ostatniego Imperatora, skacząc między Tysiącem Iglic, by zmapować jego obrony.',
				season: 'Lato',
				year: '1021 FE',
			},
			'tfe-16': {
				title: 'Bal w Twierdzy Elariel',
				description:
					'Vin uczestniczy w balu w domu Elariel, zbierając informacje o rodach szlacheckich i ich sojuszach, jednocześnie pogłębiając swoją przykrywkę.',
				season: 'Lato',
				year: '1021 FE',
			},
			'tfe-19': {
				title: 'Rosnąca bliskość',
				description:
					'Na kolejnym balu w Twierdzy Venture relacja Vin z Elendem pogłębia się mimo jej misji. Po balu tańczy na dachach.',
				season: 'Późne lato',
				year: '1021 FE',
			},
			'tfe-22': {
				title: 'Dziennik',
				description:
					'W stolarni Clubsa Vin studiuje starożytny dziennik Ostatniego Imperatora, znajdując niepokojące wzmianki o Głębi i proroctwie Bohatera Wieków.',
				season: 'Jesień',
				year: '1021 FE',
			},
			'tfe-25': {
				title: 'Bieg cynowy',
				description:
					'Gdy armia rebeliantów pod Holstepem zostaje zmasakrowana przez siły garnizonowe, Vin podejmuje desperacki bieg cynowy — spalając cynę nieprzerwanie przez wiele godzin — by pomóc ratować ocalałych.',
				season: 'Późna jesień',
				year: '1021 FE',
			},
			'tfe-26': {
				title: 'Regeneracja',
				description:
					'Vin wraca do stolarni Clubsa wyczerpana po biegu cynowym, odpoczywając, gdy szajka zbiera siły po katastrofalnej klęsce pod Holstepem.',
				season: 'Późna jesień',
				year: '1021 FE',
			},
			'tfe-30': {
				title: 'Eskalacja wojny domów',
				description:
					'Wojna domów nasila się, gdy rody szlacheckie zwracają się przeciwko sobie. Vin zdaje sobie sprawę, że manipulacja szajki działa, ale przemoc ją niepokoi.',
				season: 'Zima',
				year: '1021 FE',
			},
			'tfe-34': {
				title: 'Śmierć Ocalałego',
				description:
					'Vin bezradnie obserwuje z dachów, jak Kelsier walczy i ginie z rąk Ostatniego Imperatora na Placu Fontann, stając się po śmierci Ocalałym z Hathsin.',
				season: 'Wczesna wiosna',
				year: '1022 FE',
			},
			'tfe-36': {
				title: 'Szturm na pałac',
				description:
					'Na czele buntu skaa Vin przebija się przez Kredik Shaw, walcząc z Inkwizytorami i strażnikami, by dotrzeć do sali tronowej Ostatniego Imperatora.',
				season: 'Wczesna wiosna',
				year: '1022 FE',
			},
			'tfe-38': {
				title: 'Zabójczyni Ostatniego Imperatora',
				description:
					'Vin staje naprzeciwko Ostatniego Imperatora w jego sali tronowej, zrywając z niego jego metalumysły i zabijając nieśmiertelnego tyrana. Tysiąc lat ucisku dobiega końca.',
				season: 'Wczesna wiosna',
				year: '1022 FE',
			},
			'tfe-39': {
				title: 'Nowa era',
				description:
					'W następstwie rewolucji Vin stoi z Elendem w Twierdzy Venture, gdy zaczyna się nowa era. Mgły wciąż płyną, ale Ostatniego Imperatora już nie ma.',
				season: 'Wiosna',
				year: '1022 FE',
			},
			'woa-1': {
				title: 'Strażniczka miasta',
				description:
					'Vin patroluje mury Luthadelu każdej nocy, wypatrując zagrożeń, podczas gdy trzy armie powoli zbliżają się do nowo wyzwolonego miasta.',
				season: 'Jesień',
				year: '1023 FE',
			},
			'woa-3': {
				title: 'Duch mgieł',
				description:
					'Podczas nocnego patrolu Vin napotyka tajemniczą postać we mgłach — ducha, który zdaje się ją obserwować, wskazując na coś.',
				season: 'Jesień',
				year: '1023 FE',
			},
			'woa-8': {
				title: 'Obrończyni i partnerka',
				description:
					'Vin balansuje między podwójną rolą obrończyni i partnerki Elenda w pałacu, rozdarana między miłością do niego a obowiązkiem zapewnienia mu bezpieczeństwa.',
				season: 'Jesień',
				year: '1023 FE',
			},
			'woa-14': {
				title: 'Rada szajki',
				description:
					"Szajka spotyka się w stolarni Clubsa, by omówić strategię, podczas gdy armia Straffa Venture'a obozuje na północy, a siły Cetta zbliżają się z zachodu.",
				season: 'Wczesna zima',
				year: '1023 FE',
			},
			'woa-22': {
				title: 'Napięcia polityczne',
				description:
					"Gdy oblężenie się zacieśnia, Vin obserwuje, jak Elend zmaga się ze Zgromadzeniem i wymaganiami rządzenia, podczas gdy ona ściga Zane'a przez mgły.",
				season: 'Zima',
				year: '1023 FE',
			},
			'woa-26': {
				title: 'Rokowania ze Straffem',
				description:
					"Vin towarzyszy Elendowi do obozu wojennego Straffa Venture'a na północ od miasta, gdzie demonstruje swoją przerażającą moc, by zastraszyć niedoszłego zdobywcę.",
				season: 'Zima',
				year: '1023 FE',
			},
			'woa-28': {
				title: 'Powrót z rokowań',
				description:
					"Po napiętym spotkaniu w obozie Straffa, Vin wraca do Twierdzy Venture, prześladowana szeptami Zane'a i rosnącymi wątpliwościami co do swojej roli.",
				season: 'Zima',
				year: '1024 FE',
			},
			'woa-35': {
				title: 'Kryzys Zgromadzenia',
				description:
					'Vin obserwuje z galerii, jak Zgromadzenie głosuje za odsunięciem Elenda i zaproszeniem Lorda Penroda do rządzenia, niszcząc demokratyczny eksperyment.',
				season: 'Zima',
				year: '1024 FE',
			},
			'woa-43': {
				title: 'Rajd na Cetta',
				description:
					'Vin przeprowadza niszczycielski samotny atak na siły Cetta zakwaterowane w Twierdzy Hasting, wypędzając jego armię z miasta w pokazie potęgi Urodzonej z Mgły.',
				season: 'Późna zima',
				year: '1024 FE',
			},
			'woa-47': {
				title: 'Pojedynek z Zanem',
				description:
					'W pobliżu Twierdzy Hasting Vin stacza z Zanem Venture brutalny pojedynek Urodzonych z Mgły, ostatecznie zabijając go, by chronić tych, których kocha.',
				season: 'Późna zima',
				year: '1024 FE',
			},
			'woa-49': {
				title: 'Wygnanie',
				description:
					'Vin i Elend opuszczają Luthadel przez Cynową Bramę, wygnani przez nowy rząd Penroda, kierując się na północ ku Terris z niewielką eskortą.',
				season: 'Późna zima',
				year: '1024 FE',
			},
			'woa-50': {
				title: 'Exodus na północ',
				description:
					'Mała grupa podróżuje w stronę Terris, ale Vin wyczuwa coś, co ciągnie ją z powrotem — Studnia Wstąpienia nie znajduje się wcale w górach.',
				season: 'Późna zima',
				year: '1024 FE',
			},
			'woa-52': {
				title: 'Powrót do bitwy',
				description:
					'Vin podejmuje desperacki bieg cynowy z powrotem do Luthadelu, gdy kolosy przełamują mury, docierając na czas, by przejąć kontrolę nad stworzeniami i uratować miasto.',
				season: 'Późna zima',
				year: '1024 FE',
			},
			'woa-54': {
				title: 'Poszukiwanie Studni',
				description:
					'Z Luthadelem ocalonym, lecz poturbowanym, Vin przeszukuje podziemia Kredik Shaw w poszukiwaniu Studni Wstąpienia, podążając za wskazówkami ducha mgieł coraz głębiej pod ziemię.',
				season: 'Późna zima',
				year: '1024 FE',
			},
			'woa-58': {
				title: 'Odkrycie Studni',
				description:
					'Vin schodzi do starożytnych komnat pod Kredik Shaw i odkrywa Studnię Wstąpienia, której moc pulsuje nagromadzoną energią.',
				season: 'Zima',
				year: '1024 FE',
			},
			'woa-59': {
				title: 'Uwolniona moc',
				description:
					'Przy Studni Vin przyjmuje ogromną moc — a potem, zwiedziona manipulacją Zagłady na proroctwach, uwalnia ją. Coś strasznego wymyka się ze swego więzienia.',
				season: 'Zima',
				year: '1024 FE',
			},
			'hoa-1': {
				title: 'Kampania północna',
				description:
					'Vin i Elend prowadzą swoją armię do Vetitanu, miasta zasypanego narastającym opadem popiołu, by zabezpieczyć jedno z ukrytych składów zaopatrzenia Ostatniego Imperatora.',
				season: 'Wiosna',
				year: '1026 FE',
			},
			'hoa-3': {
				title: 'Pierwszy skład',
				description:
					'Vin otwiera podziemny skład w Vetitanie, znajdując żywność, zaopatrzenie i metalową płytę z tajemniczą wiadomością Ostatniego Imperatora o niebezpieczeństwie, które uwięził.',
				season: 'Wiosna',
				year: '1026 FE',
			},
			'hoa-8': {
				title: 'Podział sił',
				description:
					'Vin wraca do Luthadelu, gdzie armia się dzieli: Sazed i Breeze ruszają na północ do Urteau, podczas gdy Vin i Elend wyruszą na zachód do Fadrex.',
				season: 'Lato',
				year: '1026 FE',
			},
			'hoa-10': {
				title: 'Marsz na zachód',
				description:
					'Vin maszeruje na zachód z armią Elenda ku Fadrex, popiół opada coraz gęściej z każdym dniem, a świat wokół nich się rozpada.',
				season: 'Lato',
				year: '1026 FE',
			},
			'hoa-21': {
				title: 'Przybycie do Fadrex',
				description:
					'Armia dociera pod Fadrex i rozbija obóz oblężniczy na pokrytych popiołem równinach. Obligator Yomen odmawia poddania miasta i wydania składu.',
				season: 'Jesień',
				year: '1026 FE',
			},
			'hoa-28': {
				title: 'Szpieg na balu',
				description:
					'Vin infiltruje Fadrex przebrana za szlachciankę, uczestnicząc w jednym z bali Yomena w Twierdzy Orielle, by zdobyć informacje i szukać dyplomatycznego rozwiązania.',
				season: 'Jesień',
				year: '1026 FE',
			},
			'hoa-40': {
				title: 'Drugi bal',
				description:
					'Vin wraca na kolejny z bali Yomena, angażując go bezpośrednio w filozoficzną debatę o dziedzictwie Ostatniego Imperatora i narastającym opadzie popiołu.',
				season: 'Późna jesień',
				year: '1026 FE',
			},
			'hoa-47': {
				title: 'Schwytana',
				description:
					'Vin zostaje schwytana przez siły Yomena i uwięziona w Kantonie Zasobów, pozbawiona metali. Jest przetrzymywana w celi z zapasem atium, którego nie może dosięgnąć.',
				season: 'Zima',
				year: '1026 FE',
			},
			'hoa-51': {
				title: 'W więzieniu',
				description:
					'Uwięziona i odcięta od metali, Vin rozmyśla o wpływie Zagłady i naturze mocy, którą uwolniła przy Studni.',
				season: 'Zima',
				year: '1026 FE',
			},
			'hoa-54': {
				title: 'Ujawniony skład',
				description:
					'Vin odkrywa skład zaopatrzenia we Fadrex i jego kluczową zawartość — żywność, zapasy i wiadomość o prawdziwych przygotowaniach Ostatniego Imperatora.',
				season: 'Późna zima',
				year: '1026 FE',
			},
			'hoa-56': {
				title: 'Ucieczka z Fadrex',
				description:
					'Gdy kolosy atakują Fadrex, Vin ucieka z miasta, odciągając Inkwizytorów od Elenda i armii, by ich chronić.',
				season: 'Wczesna wiosna',
				year: '1027 FE',
			},
			'hoa-59': {
				title: 'Prowadząc pościg',
				description:
					'Vin leci na wschód ku Luthadelowi ze sforą Inkwizytorów w pogoni, celowo odciągając sługi Zagłady od Fadrex i Elenda.',
				season: 'Wiosna',
				year: '1027 FE',
			},
			'hoa-72': {
				title: 'Powrót do Luthadelu',
				description:
					'Vin przybywa do zdewastowanego Luthadelu i niszczy Kredik Shaw, zawalając pałac Ostatniego Imperatora w potężnym pokazie allomantycznej mocy.',
				season: 'Lato',
				year: '1027 FE',
			},
			'hoa-79': {
				title: 'Wstąpienie',
				description:
					'Vin czerpie z samych mgieł — ciała Przetrwania — wstępując jako naczynie boskiej mocy, by walczyć z Zagładą bezpośrednio.',
				season: 'Jesień',
				year: '1027 FE',
			},
			'hoa-81': {
				title: 'Ostatnia ofiara',
				description:
					'Vin poświęca się, by zniszczyć Zagładę, łącząc moc Przetrwania z własną siłą życiową, by unicestwić boga zniszczenia.',
				season: 'Jesień',
				year: '1027 FE',
			},
			'hoa-83': {
				title: 'Pole Odrodzenia',
				description:
					'Ciało Vin zostaje znalezione na polu kwiatów i zielonej trawy — pierwszych oznak odtworzonego przez Sazeda świata. Spoczywa w pokoju obok Elenda.',
				season: 'Jesień',
				year: '1027 FE',
			},
		},
		kelsier: {
			'tfe-0': {
				title: 'Powrót Ocalałego',
				description:
					'Kelsier przybywa na plantację Lorda Tresting w Południowym Dominium, zabijając okrutnego szlachcica — jego pierwszy cios wymierzony w szlachtę od ucieczki z Czeluści.',
				season: 'Wiosna',
				year: '1021 FE',
			},
			'tfe-1': {
				title: 'Ukryty obserwator',
				description:
					'Kelsier obserwuje z ukrycia działania szajki Camona, dostrzegając nieświadome użycie Allomancji przez Vin — uliczną sierotę z mocami Urodzonej z Mgły.',
				season: 'Wiosna',
				year: '1021 FE',
			},
			'tfe-3': {
				title: 'Rekrutacja Vin',
				description:
					'Kelsier ratuje Vin przed przemocą Camona i oferuje jej miejsce w swojej szajce, ujawniając prawdę o jej zdolnościach jako Urodzonej z Mgły.',
				season: 'Wiosna',
				year: '1021 FE',
			},
			'tfe-5': {
				title: 'Kradzież atium',
				description:
					'Kelsier włamuje się do skarbca Twierdzy Venture, by wykraść atium, finansując rebelię i jednocześnie testując obronę rodów szlacheckich.',
				season: 'Wiosna',
				year: '1021 FE',
			},
			'tfe-6': {
				title: 'Szajka w komplecie',
				description:
					"W stolarni Clubsa Kelsier gromadzi pełną szajkę — Hama, Breeze'a, Docksona, Clubsa i teraz Vin — i ujawnia swój plan obalenia Ostatniego Imperatora.",
				season: 'Wiosna',
				year: '1021 FE',
			},
			'tfe-7': {
				title: 'Nauka uczennicy',
				description:
					'Kelsier zabiera Vin pod mury miasta przy Stalowej Bramie na trening Allomancji, ucząc ją Pchania i Ciągnięcia metali podczas skoków między iglicami.',
				season: 'Późna wiosna',
				year: '1021 FE',
			},
			'tfe-8': {
				title: 'Przykrywka Renoux',
				description:
					'Kelsier eskortuje Vin do Fellise i posiadłości Lorda Renoux, ustanawiając jej fałszywą tożsamość jako Lady Valette na potrzeby infiltracji szlacheckiego towarzystwa.',
				season: 'Lato',
				year: '1021 FE',
			},
			'tfe-10': {
				title: 'Planowanie rewolucji',
				description:
					'Po powrocie do Luthadelu Kelsier spotyka się z ekipą w warsztacie Clubsa, by omówić postępy rebelii. Zabiera Vin na nocny bieg przez miasto, kontynuując jej trening allomantyczny.',
				season: 'Lato',
				year: '1021 FE',
			},
			'tfe-10.2': {
				title: 'Rebelia rośnie',
				description:
					'Kelsier prowadzi wiece w magazynach po slumsach Luthadelu, budując rebelię skaa poprzez swoją legendę jako Ocalały z Hathsin.',
				season: 'Lato',
				year: '1021 FE',
			},
			'tfe-11': {
				title: 'Masakra w Kryjówce Camona',
				description:
					'Kelsier i ekipa odkrywają, że Ministerstwo wymordowało wszystkich w starej kryjówce Camona w odwecie za oszustwo w Kantonie Finansów, umacniając ich determinację przeciwko Lordowi Władcy.',
				season: 'Lato',
				year: '1021 FE',
			},
			'tfe-14': {
				title: 'Rozpoznanie pałacu',
				description:
					'Kelsier i Vin penetrują nocą Kredik Shaw, mapując obronę pałacu i testując zdolności reakcji Inkwizytorów.',
				season: 'Lato',
				year: '1021 FE',
			},
			'tfe-18': {
				title: 'Operacje wojny domów',
				description:
					'Kelsier organizuje ataki między rodami szlacheckimi, skrytobójczo eliminując cele i podrzucając dowody, by podsycać wojnę domów osłabiającą szlachtę.',
				season: 'Późne lato',
				year: '1021 FE',
			},
			'tfe-21': {
				title: 'Armia rebeliantów',
				description:
					'Kelsier podróżuje do Jaskiń Arguois, by skontrolować rosnącą armię rebeliantów ukrytą w górach, szkolić żołnierzy, którzy nigdy nie trzymali broni.',
				season: 'Jesień',
				year: '1021 FE',
			},
			'tfe-25': {
				title: 'Katastrofa pod Holstepem',
				description:
					'Kelsier podejmuje bieg cynowy do Holstepu, gdy garnizon odkrywa i masakruje armię rebeliantów. Przybywa, by zastać zniszczenie, i musi uciekać na południe.',
				season: 'Późna jesień',
				year: '1021 FE',
			},
			'tfe-26': {
				title: 'Zbieranie sił',
				description:
					'W stolarni Clubsa Kelsier zbiera siły po katastrofie pod Holstepem, odmawiając porzucenia rewolucji, nawet gdy nadzieja wydaje się stracona.',
				season: 'Zima',
				year: '1021 FE',
			},
			'tfe-32': {
				title: 'Zniszczenie Czeluści',
				description:
					'Kelsier wraca do Czeluści Hathsin — miejsca swojego największego cierpienia — i niszczy kryształy atium, odcinając Ostatniego Imperatora od jego najcenniejszego zasobu.',
				season: 'Zima',
				year: '1022 FE',
			},
			'tfe-34': {
				title: 'Ostatni bój Ocalałego',
				description:
					'Kelsier staje naprzeciwko Ostatniego Imperatora na Placu Fontann, tocząc beznadziejną walkę. Umiera z uśmiechem, stając się męczennikiem, którego śmierć rozpala rewolucję.',
				season: 'Wczesna wiosna',
				year: '1022 FE',
			},
			'tfe-35': {
				title: 'Poza śmiercią',
				description:
					'Przez OreSeur, kandrę noszącą jego kości, ostatni plan Kelsiera się spełnia — jego śmierć była iskrą, która rozniecała rewolucję w całym Luthadelu.',
				season: 'Wczesna wiosna',
				year: '1022 FE',
			},
			'woa-1': {
				title: 'Za zasłoną',
				description:
					'Uwięziony w Sferze Poznawczej po śmierci, Kelsier istnieje jako Cień Poznawczy w pobliżu Studni Wstąpienia, obserwując przemiany Luthadelu pod rządami Elenda.',
				season: 'Jesień',
				year: '1023 FE',
			},
			'woa-59': {
				title: 'Świadek uwolnienia',
				description:
					'Kelsier bezradnie obserwuje ze Sfery Poznawczej, jak Vin przyjmuje moc przy Studni Wstąpienia i uwalnia ją, wypuszczając Zagładę z więzienia.',
				season: 'Zima',
				year: '1024 FE',
			},
			'sh-4.1': {
				title: 'Kognitywna podróż na zachód',
				description:
					'Istniejąc jako Cień Poznawczy, Kelsier przemierza ocean mgły w kierunku zachodnich Spalonych Ziem, szukając pomocy w twierdzy Ire.',
				season: 'Wiosna',
				year: '1025 FE',
			},
			'sh-6.1': {
				title: 'Ostrzeżenie w Fadrex',
				description:
					'Kelsier dociera do kognitywnego odbicia Miasta Fadrex, spotykając Hoida i próbując ostrzec Vin o jej hemalurgicznym kolcu.',
				season: 'Jesień',
				year: '1026 FE',
			},
			'hoa-1': {
				title: 'Ocalały trwa',
				description:
					'W Sferze Poznawczej Kelsier współpracuje z gasnącą mocą Przetrwania, szukając jakiegokolwiek sposobu, by pomóc Sferze Fizycznej oprzeć się rosnącemu wpływowi Zagłady.',
				season: 'Wiosna',
				year: '1026 FE',
			},
			'hoa-50': {
				title: 'Dzierżenie Przetrwania',
				description:
					'Gdy świadomość Przetrwania gaśnie, Kelsier przejmuje moc Odłamu — dzierżąc ją niedoskonale ze Sfery Poznawczej, kupując czas na ostateczny akt.',
				season: 'Wiosna',
				year: '1027 FE',
			},
			'hoa-81': {
				title: 'Przekazanie pochodni',
				description:
					'Vin przejmuje moc Przetrwania od Kelsiera, by zniszczyć Zagładę. Ocalały puszcza Odłam — jego rola została spełniona — lecz odmawia przejścia w Zaświaty.',
				season: 'Jesień',
				year: '1027 FE',
			},
			'hoa-83': {
				title: 'Ocalały żyje dalej',
				description:
					'Nawet gdy Harmonia odtwarza świat, Kelsier trwa w Sferze Poznawczej — Ocalały, który odmówił poddania się nawet śmierci.',
				season: 'Jesień',
				year: '1027 FE',
			},
		},
		sazed: {
			'tfe-9': {
				title: 'Terryjski szafarz',
				description:
					'Sazed przybywa do posiadłości Lorda Renoux w Fellise jako opiekun Vin, ucząc ją obyczajów szlachty, jednocześnie potajemnie zachowując starożytne religie.',
				season: 'Lato',
				year: '1021 FE',
			},
			'tfe-10.2': {
				title: 'Wiec w Magazynie',
				description:
					'Sazed uczestniczy w tajnym wiecu w dzielnicy magazynowej wraz z Kelsierem i Vin, obserwując jak Ocalały głosi rewolucję zebranym robotnikom skaa.',
				season: 'Lato',
				year: '1021 FE',
			},
			'tfe-13': {
				title: 'Strażnik na balu',
				description:
					'Sazed towarzyszy Vin na jej pierwszym balu jako jej szafarz, czuwając nad nią z kwater służby, podczas gdy ona infiltruje szlacheckie towarzystwo.',
				season: 'Lato',
				year: '1021 FE',
			},
			'tfe-22': {
				title: 'Praca uczonego',
				description:
					'Sazed uczy Vin między balami w posiadłości Renoux, dzieląc się swoją rozległą wiedzą o religiach i studiując wzorce Ostatniego Imperium.',
				season: 'Jesień',
				year: '1021 FE',
			},
			'tfe-34': {
				title: 'Świadek rewolucji',
				description:
					'Sazed jest w Luthadelu podczas rewolucji, obserwując, jak skaa powstają, a Kelsier ginie na Placu Fontann.',
				season: 'Wczesna wiosna',
				year: '1022 FE',
			},
			'tfe-38': {
				title: 'Upadek Imperium',
				description:
					'Sazed wspiera szajkę podczas szturmu na Kredik Shaw, wykorzystując swoją Feruchemię do walki ze strażnikami Ostatniego Imperatora.',
				season: 'Wczesna wiosna',
				year: '1022 FE',
			},
			'tfe-39': {
				title: 'Nowy początek',
				description:
					'W następstwie wydarzeń Sazed zaczyna studiować archiwa Kredik Shaw, szukając odpowiedzi na temat Głębi i proroctwa Bohatera Wieków.',
				season: 'Wiosna',
				year: '1022 FE',
			},
			'woa-4': {
				title: 'Wędrowny nauczyciel',
				description:
					'Sazed podróżuje po Wschodnim Dominium, odwiedzając wiejskie osady, by dzielić się tłumionymi religiami i wiedzą z nowo wyzwolonymi skaa.',
				season: 'Jesień',
				year: '1023 FE',
			},
			'woa-7': {
				title: 'Konwentykl Seran',
				description:
					'Prowadzony przez Marsha, Sazed odkrywa Konwentykl Seran — przerażającą twierdzę Inkwizytorów, gdzie znajduje stalową płytę z inskrypcją Kwaana.',
				season: 'Późna jesień',
				year: '1023 FE',
			},
			'woa-12': {
				title: 'Odczytanie płyty',
				description:
					'Sazed studiuje inskrypcję Kwaana w Konwentyklu, odkrywając desperackie ostrzeżenie terryjskiego Strażnika, że proroctwo Bohatera Wieków zostało zmienione.',
				season: 'Późna jesień',
				year: '1023 FE',
			},
			'woa-15': {
				title: 'Śmierć we mgłach',
				description:
					'Wracając na zachód przez Urbene, Sazed napotyka wioski, w których ludzie tajemniczo zmarli we mgłach — pierwsze oznaki choroby mgieł.',
				season: 'Zima',
				year: '1023 FE',
			},
			'woa-22': {
				title: 'Powrót do Luthadelu',
				description:
					'Sazed przybywa do Luthadelu z poważnymi wieściami o zmienionym proroctwie, śmierciach we mgłach i prawdziwym znaczeniu stalowej inskrypcji.',
				season: 'Zima',
				year: '1023 FE',
			},
			'woa-40': {
				title: 'Debata o proroctwie',
				description:
					'Sazed pracuje z Tindwyl w Twierdzy Venture, porównując oryginalną i zmienioną wersję proroctwa Bohatera Wieków, zbliżając się do niej.',
				season: 'Późna zima',
				year: '1024 FE',
			},
			'woa-52': {
				title: 'Obrona bramy',
				description:
					'Gdy kolosy przełamują mury Luthadelu, Sazed wykorzystuje Feruchemię, by samodzielnie utrzymać Cynową Bramę, spalając zgromadzone atrybuty w desperackiej obronie.',
				season: 'Późna zima',
				year: '1024 FE',
			},
			'woa-57': {
				title: 'Walka z Marshem',
				description:
					'Sazed walczy z kontrolowanym przez Zagładę Marshem w korytarzach Kredik Shaw, ledwo przeżywając atak Inkwizytora, podczas gdy Vin schodzi do Studni.',
				season: 'Zima',
				year: '1024 FE',
			},
			'woa-59': {
				title: 'Śmierć Tindwyl',
				description:
					'Sazed odkrywa, że Tindwyl zginęła podczas ataku kolosów. Zdruzgotany, zaczyna swój kryzys wiary, kwestionując każdą religię, którą nosi w sobie.',
				season: 'Zima',
				year: '1024 FE',
			},
			'hoa-4': {
				title: 'Dyplomacja na południu',
				description:
					"Sazed odwiedza Miasto Lekal z Breeze'em, by wynegocjować traktat, wykorzystując dyplomację, aby przyciągnąć południowego króla do rosnącej koalicji Elenda.",
				season: 'Lato',
				year: '1026 FE',
			},
			'hoa-8': {
				title: 'Wyruszenie na północ',
				description:
					'Sazed otrzymuje zadanie zabezpieczenia Urteau drogą dyplomatyczną, podczas gdy Elend zabiera armię na zachód. Wyrusza przez północną bramę.',
				season: 'Lato',
				year: '1026 FE',
			},
			'hoa-14': {
				title: 'Przybycie do Urteau',
				description:
					'Sazed przybywa do Urteau i zastaje je pod opresyjnymi rządami Obywatela Quelliona, zakładając placówkę dyplomatyczną w opuszczonej posiadłości Venture.',
				season: 'Jesień',
				year: '1026 FE',
			},
			'hoa-25': {
				title: 'Budowanie zaufania',
				description:
					'Sazed stara się zbudować zaufanie mieszkańców Urteau, jednocześnie studiując historię miasta i szukając podziemnego składu pod budynkiem Ministerstwa.',
				season: 'Wczesna zima',
				year: '1026 FE',
			},
			'hoa-40': {
				title: 'Śledztwo w Ministerstwie',
				description:
					'Sazed bada Kanton Ministerstwa, pracując nad dostępem do podziemnego składu, jednocześnie poruszając się wśród paranoicznego rządu Quelliona.',
				season: 'Zima',
				year: '1026 FE',
			},
			'hoa-50': {
				title: 'Odkrycie jaskini',
				description:
					'Sazed odkrywa mechanizm zalewania suchego systemu kanałów — Ostatni Imperator osuszył kanały, by ukryć wodę w podziemnym składzie.',
				season: 'Wczesna wiosna',
				year: '1027 FE',
			},
			'hoa-58': {
				title: 'Ocalenie Urteau',
				description:
					'Gdy pożary szaleją po mieście podczas rewolucji przeciw Quellionowi, Sazed uwalnia zgromadzoną wodę, zalewając kanały i ratując Urteau przed zniszczeniem.',
				season: 'Wiosna',
				year: '1027 FE',
			},
			'hoa-64': {
				title: 'Odbudowa',
				description:
					'Po odsunięciu Quelliona i ugaszeniu pożarów Sazed pomaga odbudowywać Urteau, rozdzielając zapasy ze składu i studiując wiadomość Ostatniego Imperatora.',
				season: 'Lato',
				year: '1027 FE',
			},
			'hoa-69': {
				title: 'Podróż do Hathsin',
				description:
					'Sazed podróżuje do Czeluści Hathsin, przyciągany zbiegiem wydarzeń. Jego studia nad religiami i inskrypcją Kwaana doprowadziły go do straszliwego odkrycia.',
				season: 'Jesień',
				year: '1027 FE',
			},
			'hoa-71': {
				title: 'Ostatnie zgromadzenie',
				description:
					'Sazed wraca do Luthadelu, gdy świat umiera wokół niego, popiół opada czarnymi kurtynami. Niesie ze sobą wiedzę o każdej religii i każdym proroctwie.',
				season: 'Jesień',
				year: '1027 FE',
			},
			'hoa-82': {
				title: 'Bohater Wieków',
				description:
					'Po zniszczeniu Vin i Zagłady Sazed uświadamia sobie, że to on jest Bohaterem Wieków. Przejmuje moc zarówno Przetrwania, jak i Zagłady przy Studni Wstąpienia.',
				season: 'Jesień',
				year: '1027 FE',
			},
			'hoa-83': {
				title: 'Harmonia',
				description:
					'Sazed wstępuje jako Harmonia, łącząc Zagładę i Przetrwanie. Odtwarza świat — przesuwa planetę, przywraca zieleń i naprawia tysiąc lat zniszczeń.',
				season: 'Jesień',
				year: '1027 FE',
			},
		},
		elend: {
			'tfe-12': {
				title: 'Czytający szlachcic',
				description:
					'Elend Venture zostaje przedstawiony na balu we własnej twierdzy, czytając samotnie, podczas gdy reszta szlachty tańczy i knuje wokół niego.',
				season: 'Lato',
				year: '1021 FE',
			},
			'tfe-13': {
				title: 'Spotkanie z Lady Valette',
				description:
					'Elend poznaje tajemniczą Lady Valette Renoux na balu, zaintrygowany jej niekonwencjonalnym zachowaniem i bystrym dowcipem.',
				season: 'Lato',
				year: '1021 FE',
			},
			'tfe-19': {
				title: 'Zaloty',
				description:
					'Zauroczenie Elenda Lady Valette rośnie, gdy dzielą rozmowy na balach, dyskutując o filozofii i niedostatkach szlachty.',
				season: 'Późne lato',
				year: '1021 FE',
			},
			'tfe-24': {
				title: 'Szlachecki konspirator',
				description:
					'Elend potajemnie organizuje umiarkowanych szlachciców sprzeciwiających się tyranii Ostatniego Imperatora, spotykając się w prywatnej bibliotece Twierdzy Venture.',
				season: 'Jesień',
				year: '1021 FE',
			},
			'tfe-34': {
				title: 'Rewolucja',
				description:
					'Elend jest świadkiem chaosu powstania skaa na Placu Fontann i występuje, by chronić zarówno szlachtę, jak i pospólstwo przed przemocą.',
				season: 'Wczesna wiosna',
				year: '1022 FE',
			},
			'tfe-38': {
				title: 'Niespodziewany przywódca',
				description:
					'W następstwie śmierci Ostatniego Imperatora Elend wyłania się jako jednoczący głos, wzywając do porządku, gdy imperium wali się wokół niego.',
				season: 'Wczesna wiosna',
				year: '1022 FE',
			},
			'tfe-39': {
				title: 'Nowy król',
				description:
					'Elend Venture zostaje ogłoszony Królem Centralnego Dominium, rozpoczynając trudne zadanie budowania demokratycznego rządu z ruin tyranii.',
				season: 'Wiosna',
				year: '1022 FE',
			},
			'woa-1': {
				title: 'Król Luthadelu',
				description:
					'Elend niestrudzenie pracuje w Twierdzy Venture nad ustanowieniem rządu konstytucyjnego, redagując prawa i budując Zgromadzenie, podczas gdy armie gromadzą się na zewnątrz.',
				season: 'Jesień',
				year: '1023 FE',
			},
			'woa-5': {
				title: 'Zgromadzenie',
				description:
					'Elend przemawia do Zgromadzenia, które sam stworzył, opowiadając się za zasadami demokracji, nawet gdy doradcy ostrzegają, że demokracja może nie przetrwać oblężenia.',
				season: 'Jesień',
				year: '1023 FE',
			},
			'woa-12': {
				title: 'Obserwacja oblężenia',
				description:
					'Elend obserwuje linie oblężenia z murów miasta, patrząc na armię swojego ojca Straffa na północy i siły Cetta zbliżające się z zachodu.',
				season: 'Wczesna zima',
				year: '1023 FE',
			},
			'woa-22': {
				title: 'Walka o demokrację',
				description:
					'Elend staje w obliczu rosnącej opozycji w Zgromadzeniu, gdy strach przed oblężeniem skłania wielu do szukania silniejszego przywódcy niż król-filozof.',
				season: 'Zima',
				year: '1023 FE',
			},
			'woa-26': {
				title: 'Rokowania z ojcem',
				description:
					"Elend jedzie do obozu Straffa Venture'a na rokowania, zabierając Vin jako ochronę. Spotkanie ujawnia pogardę Straffa dla jego idealistycznego syna.",
				season: 'Zima',
				year: '1023 FE',
			},
			'woa-28': {
				title: 'Dyplomatyczne zabiegi',
				description:
					'W Twierdzy Venture Elend próbuje rozgrywać trzy armie przeciw sobie — Straffa, Cetta i zbliżającą się hordę kolosów.',
				season: 'Zima',
				year: '1024 FE',
			},
			'woa-35': {
				title: 'Odsunięty',
				description:
					'Zgromadzenie głosuje za zastąpieniem Elenda Lordem Penrodem, wykorzystując klauzulę w demokratycznej konstytucji samego Elenda. Jego idealizm okazuje się jego zgubą.',
				season: 'Zima',
				year: '1024 FE',
			},
			'woa-42': {
				title: 'Misja do kolosów',
				description:
					'Elend opuszcza Luthadel tunelami, by negocjować z Jastesem Lekalem i jego armią kolosów — desperacki zakład o pozyskanie sojusznika.',
				season: 'Późna zima',
				year: '1024 FE',
			},
			'woa-46': {
				title: 'Powrót od kolosów',
				description:
					'Elend wraca z obozu kolosów po nieudanych negocjacjach — Jastes stracił kontrolę nad swoimi bestiami. Kolosy i tak zaatakują.',
				season: 'Późna zima',
				year: '1024 FE',
			},
			'woa-49': {
				title: 'Wygnanie z Luthadelu',
				description:
					'Elend opuszcza Luthadel z Vin przez Cynową Bramę, wygnany przez rząd Penroda, kierując się na północ ku Terris po pomoc Synodu Strażników.',
				season: 'Późna zima',
				year: '1024 FE',
			},
			'woa-50': {
				title: 'Podróż na północ',
				description:
					'Grupa Elenda podąża ku Terris, ale rosnący niepokój skłania ich do przemyślenia planów. Studnia Wstąpienia może nie być tam, gdzie sądzili.',
				season: 'Późna zima',
				year: '1024 FE',
			},
			'woa-52': {
				title: 'Bitwa',
				description:
					'Elend wraca, by zastać Luthadel pod atakiem kolosów, walcząc pośród chaosu, gdy mury zostają przełamane i miasto zagrożone upadkiem.',
				season: 'Późna zima',
				year: '1024 FE',
			},
			'woa-58': {
				title: 'Do Studni',
				description:
					'Elend schodzi pod Kredik Shaw z Vin, szukając Studni Wstąpienia, podczas gdy Marsh walczy z Sazedem nad nimi.',
				season: 'Zima',
				year: '1024 FE',
			},
			'woa-59': {
				title: 'Cesarz Urodzony z Mgły',
				description:
					'Dźgnięty i umierający przy Studni, Elend zostaje uratowany, gdy Vin wkłada mu do ust kulkę lerasium, przemieniając go w Urodzonego z Mgły.',
				season: 'Zima',
				year: '1024 FE',
			},
			'hoa-1': {
				title: 'Cesarz na wojnie',
				description:
					'Elend prowadzi swoje armie do Vetitanu, będąc teraz cesarzem Urodzonym z Mgły kierującym kampaniami wojskowymi w celu zabezpieczenia ukrytych składów Ostatniego Imperatora.',
				season: 'Wiosna',
				year: '1026 FE',
			},
			'hoa-3': {
				title: 'Zabezpieczenie składu',
				description:
					'Elend zabezpiecza podziemny skład w Vetitanie, znajdując żywność i metalową płytę z ostrzeżeniem o niebezpieczeństwie, które Rashek uwięził.',
				season: 'Wiosna',
				year: '1026 FE',
			},
			'hoa-8': {
				title: 'Strategiczny podział',
				description:
					'W Luthadelu Elend dzieli swoje siły: wysyłając Sazeda do dyplomatycznego zabezpieczenia Urteau, a sam maszeruje na zachód, by w razie potrzeby zdobyć Fadrex siłą.',
				season: 'Lato',
				year: '1026 FE',
			},
			'hoa-10': {
				title: 'Marsz na zachód',
				description:
					'Elend prowadzi swoją armię na zachód ku Fadrex, popiół opada coraz gęściej z każdym dniem. Podczas marszu trenuje swoje zdolności Urodzonego z Mgły.',
				season: 'Lato',
				year: '1026 FE',
			},
			'hoa-21': {
				title: 'Oblężenie Fadrex',
				description:
					'Armia Elenda dociera do Fadrex i rozbija linie oblężnicze na pokrytych popiołem równinach. Yomen odmawia negocjacji i poddania składu.',
				season: 'Jesień',
				year: '1026 FE',
			},
			'hoa-28': {
				title: 'Niechętny oblężnik',
				description:
					'Elend zmaga się ze swoją rolą zdobywcy, próbując dyplomacji, nawet gdy jego generałowie naciskają na szturm. Opad popiołu codziennie się pogarsza.',
				season: 'Jesień',
				year: '1026 FE',
			},
			'hoa-47': {
				title: 'Utrata Vin',
				description:
					'Gdy Vin zostaje schwytana we Fadrex, Elend staje przed niemożliwym wyborem między uratowaniem żony a ochroną dziesiątek tysięcy żołnierzy.',
				season: 'Zima',
				year: '1026 FE',
			},
			'hoa-54': {
				title: 'Wejście do Fadrex',
				description:
					'Atak kolosów wymusza tymczasowy sojusz z Yomenem. Elend wkracza do miasta i uzyskuje dostęp do składu, znajdując ostatnią wiadomość Ostatniego Imperatora.',
				season: 'Późna zima',
				year: '1026 FE',
			},
			'hoa-58': {
				title: 'Wymarsz do Hathsin',
				description:
					'Ze składem zabezpieczonym i Vin na wschodzie, Elend poznaje ostatnią prawdę: atium musi być w Czeluściach Hathsin. Prowadzi armię na południe.',
				season: 'Wczesna wiosna',
				year: '1027 FE',
			},
			'hoa-61': {
				title: 'Marsz do Czeluści',
				description:
					'Elend prowadzi swoją wyczerpaną armię do Czeluści Hathsin, pod którymi leży Ojczyzna Kandr. Armia Inkwizytorów Marsha podąża tuż za nimi.',
				season: 'Wiosna',
				year: '1027 FE',
			},
			'hoa-69': {
				title: 'Bitwa o Hathsin',
				description:
					'Elend spala ostatnie atium w desperackiej walce z Inkwizytorami i kolosami w Czeluściach, wiedząc, że gdy metal się skończy, czeka go śmierć.',
				season: 'Lato',
				year: '1027 FE',
			},
			'hoa-79': {
				title: 'Śmierć cesarza',
				description:
					'Elend ginie z rąk Marsha w ostatnich chwilach Bitwy o Hathsin, jego atium wyczerpane. Umiera, spaliwszy cały metal, którego szukała Zagłada.',
				season: 'Jesień',
				year: '1027 FE',
			},
			'hoa-83': {
				title: 'Zjednoczeni w śmierci',
				description:
					'Ciało Elenda zostaje znalezione obok Vin na polu kwiatów — pierwszym darze Sazeda dla odtworzonego świata — w spokoju po wszystkich zmaganiach.',
				season: 'Jesień',
				year: '1027 FE',
			},
		},
		marsh: {
			'tfe-7': {
				title: 'Niechętny brat',
				description:
					'Marsh przybywa do stolarni Clubsa, starszy brat Kelsiera i sam przywódca rebeliantów. Niechętnie dołącza do planu szajki.',
				season: 'Późna wiosna',
				year: '1021 FE',
			},
			'tfe-10.2': {
				title: 'Wiec w magazynie',
				description:
					'Marsh uczestniczy w tajnym wiecu w dzielnicy magazynowej z resztą ekipy, obserwując, jak jego brat Kelsier głosi rewolucję zebranym robotnikom skaa.',
				season: 'Lato',
				year: '1021 FE',
			},
			'tfe-13': {
				title: 'Spotkanie na Górze Tyrian',
				description:
					'Marsh spotyka Kelsiera na Górze Tyrian, kilka kilometrów od Luthadelu, by omówić plan rewolucji z dala od uszu Ministerstwa, zanim rozpocznie niebezpieczną infiltrację.',
				season: 'Lato',
				year: '1021 FE',
			},
			'tfe-20': {
				title: 'Głębiej pod przykryciem',
				description:
					'Marsh wnika głębiej w hierarchię Ministerstwa w Kredik Shaw, poznając mroczne sekrety Hemalurgii, ryzykując odkrycie przez Inkwizytorów.',
				season: 'Późne lato',
				year: '1021 FE',
			},
			'tfe-30': {
				title: 'Zniknięcie',
				description:
					'Marsh milknie, jego komunikacja ustaje, gdy znika w najgłębszych poziomach Kantonu Inkwizycji. Szajka obawia się najgorszego.',
				season: 'Zima',
				year: '1021 FE',
			},
			'tfe-38': {
				title: 'Inkwizytor',
				description:
					'Marsh pojawia się podczas ostatniego szturmu na Kredik Shaw, żywy, ale przemieniony — żelazne kolce wbite przez oczy. Walczy po stronie szajki mimo przemiany.',
				season: 'Wczesna wiosna',
				year: '1022 FE',
			},
			'woa-4': {
				title: 'Wschodni wędrowiec',
				description:
					'Marsh wędruje po Wschodnim Dominium jako samotny Inkwizytor, starając się zrozumieć swoją przemianę i pomagając Sazedowi w badaniu odległych wiosek.',
				season: 'Jesień',
				year: '1023 FE',
			},
			'woa-7': {
				title: 'Przewodnik do Konwentyklu',
				description:
					'Marsh prowadzi Sazeda do Konwentyklu Seran, twierdzy Inkwizytorów w odległej północy, by znaleźć poszukiwane przez Sazeda zapisy.',
				season: 'Późna jesień',
				year: '1023 FE',
			},
			'woa-12': {
				title: 'Porzucenie',
				description:
					'Marsh nagle porzuca Sazeda w Konwentyklu i znika w dziczy, gnany siłami, którym coraz bardziej nie może się oprzeć. Wpływ Zagłady rośnie.',
				season: 'Późna jesień',
				year: '1023 FE',
			},
			'woa-57': {
				title: 'Marionetka Zagłady',
				description:
					'Marsh zjawia się w Kredik Shaw pod pełną kontrolą Zagłady, walcząc z Sazedem w korytarzach, podczas gdy Vin schodzi do Studni Wstąpienia poniżej.',
				season: 'Zima',
				year: '1024 FE',
			},
			'woa-59': {
				title: 'Strażnik Studni',
				description:
					'Marsh strzeże wejścia do Studni jako marionetka Zagłady, walcząc, by nie dopuścić nikogo do Vin — ani nie pomóc jej podjąć właściwej decyzji.',
				season: 'Zima',
				year: '1024 FE',
			},
			'hoa-0': {
				title: 'Tworzenie Inkwizytorów',
				description:
					'Pod kontrolą Zagłady Marsh przeprowadza mroczne rytuały Hemalurgii w Tathingdwen, tworząc nowych Inkwizytorów ze schwytanych Feruchemistów i Allomantów.',
				season: 'Wiosna',
				year: '1026 FE',
			},
			'hoa-6': {
				title: 'Dowodzenie kolosami',
				description:
					'Marsh dowodzi rosnącą armią kolosów w imieniu Zagłady, przemieszczając się po Wschodnim Dominium i gromadząc siły na ostateczną bitwę.',
				season: 'Lato',
				year: '1026 FE',
			},
			'hoa-22': {
				title: 'W pobliżu Tyrianu',
				description:
					'Marsh operuje w pobliżu Góry Tyrian, tworząc hemalurgiczne kolce ze schwytanych więźniów i budując armię Inkwizytorów Zagłady w cieniu popieliska.',
				season: 'Zima',
				year: '1026 FE',
			},
			'hoa-38': {
				title: 'Nabicie Penroda',
				description:
					'Marsh infiltruje Luthadel, by nabić króla Penroda kolcem, dając Zagładzie bezpośredni dostęp do rządów stolicy.',
				season: 'Zima',
				year: '1026 FE',
			},
			'hoa-45': {
				title: 'Zbieżność na Fadrex',
				description:
					'Marsh prowadzi swoich Inkwizytorów ku Fadrex, zbliżając się do oblężenia, gdyż Zagłada szuka odzyskania składu atium ukrytego w środku.',
				season: 'Zima',
				year: '1026 FE',
			},
			'hoa-59': {
				title: 'Pościg za Vin',
				description:
					'Marsh prowadzi sforę Inkwizytorów ścigających Vin na wschód, gdy ta ucieka z Fadrex ku Luthadelowi, odciągając sługi Zagłady od składu.',
				season: 'Wiosna',
				year: '1027 FE',
			},
			'hoa-69': {
				title: 'Bitwa o Hathsin',
				description:
					'Marsh przybywa do Czeluści na czele sił Zagłady. W chwili odzyskanej woli wyrywa kolczyk Vin — akt buntu, który zmienia wszystko.',
				season: 'Jesień',
				year: '1027 FE',
			},
			'hoa-79': {
				title: 'Zabicie Elenda',
				description:
					'Marsh, gnany przez Zagładę, zabija cesarza Elenda podczas Bitwy o Hathsin. Ten czyn spełnia plan Zagłady, ale kosztuje Marsha kolejny fragment duszy.',
				season: 'Jesień',
				year: '1027 FE',
			},
			'hoa-83': {
				title: 'Wreszcie wolny',
				description:
					'Po zniszczeniu Zagłady Marsh zostaje wreszcie uwolniony spod kontroli boga. Stoi samotny w odtworzonym świecie, Inkwizytor, który przetrwał koniec wszystkiego.',
				season: 'Jesień',
				year: '1027 FE',
			},
		},
		spook: {
			'tfe-7': {
				title: 'Młody Cynawy',
				description:
					'Szpieg, młody siostrzeniec Clubsa, pracuje jako obserwator i posłaniec dla szajki w stolarni, mówiąc gęstym wschodnim slangiem ulicznym.',
				season: 'Późna wiosna',
				year: '1021 FE',
			},
			'tfe-9': {
				title: 'Wyprawy posłańcze',
				description:
					'Szpieg przenosi wiadomości między stolarnią Clubsa w Luthadelu a posiadłością Renoux w Fellise, a jego wyostrzone cyną zmysły czynią go wyjątkowym zwiadowcą.',
				season: 'Lato',
				year: '1021 FE',
			},
			'tfe-22': {
				title: 'Wsparcie szajki',
				description:
					'Szpieg pozostaje w stolarni Clubsa podczas wojny domów, dostarczając informacji ze swoich dachowych obserwacji i wypraw posłańczych po slumsach.',
				season: 'Jesień',
				year: '1021 FE',
			},
			'tfe-34': {
				title: 'Świadek poświęcenia',
				description:
					'Szpieg obserwuje z tłumu, jak Kelsier ginie na Placu Fontann, wydarzenie, które ukształtuje resztę jego życia.',
				season: 'Wczesna wiosna',
				year: '1022 FE',
			},
			'tfe-38': {
				title: 'Rewolucja',
				description:
					'Szpieg walczy z szajką podczas ostatecznej rewolucji, pomagając koordynować powstanie skaa z ulic Luthadelu.',
				season: 'Wczesna wiosna',
				year: '1022 FE',
			},
			'woa-6': {
				title: 'Dorastający zwiadowca',
				description:
					'Szpieg służy jako zwiadowca nowego rządu Elenda, patrolując miasto i obserwując otaczające armie podczas oblężenia.',
				season: 'Jesień',
				year: '1023 FE',
			},
			'woa-49': {
				title: 'Grupa wygnańców',
				description:
					'Szpieg opuszcza Luthadel z grupą wygnańców Vin i Elenda przez Cynową Bramę, kierując się na północ ku górom Terris.',
				season: 'Późna zima',
				year: '1024 FE',
			},
			'woa-52': {
				title: 'Przetrwanie bitwy',
				description:
					'Po powrocie do Luthadelu podczas ataku kolosów Szpieg przeżywa Bitwę o Luthadel i pomaga zabezpieczyć miasto.',
				season: 'Późna zima',
				year: '1024 FE',
			},
			'hoa-1': {
				title: 'Żołnierz kampanii',
				description:
					'Szpieg służy w armii Elenda pod Vetitanem, stopniowo zyskując coraz większą odpowiedzialność, gdy siły cesarza zabezpieczają skład zaopatrzenia.',
				season: 'Wiosna',
				year: '1026 FE',
			},
			'hoa-14': {
				title: 'Infiltrator',
				description:
					'Szpieg przybywa do Urteau przed misją dyplomatyczną Sazeda, infiltrując miasto przez plątaninę suchych kanałów zwaną Rowami.',
				season: 'Jesień',
				year: '1026 FE',
			},
			'hoa-17': {
				title: 'Płonący dom',
				description:
					'Szpieg zakłada bazę w ukrytym budynku w Rowach, obserwując opresyjny reżim Obywatela i nawiązując kontakty z lokalnym ruchem oporu.',
				season: 'Jesień',
				year: '1026 FE',
			},
			'hoa-23': {
				title: 'Obserwacja na rynku',
				description:
					'Szpieg obserwuje Obywatela Quelliona przemawiającego na Rynkowej Arenie, studiując jego nawyki i Allomantów, których zmusza do służby przez hemalurgiczne kolce.',
				season: 'Wczesna zima',
				year: '1026 FE',
			},
			'hoa-30': {
				title: 'Zbliżenie do Obywatela',
				description:
					'Szpieg zbliża się do wewnętrznego kręgu Obywatela, badając kolce używane przez Quelliona do kontrolowania Allomantów i zbierając dowody korupcji.',
				season: 'Zima',
				year: '1026 FE',
			},
			'hoa-38': {
				title: 'Planowanie rewolucji',
				description:
					'Ze swojej kryjówki Szpieg koordynuje z Sazedem i lokalnymi rebeliantami plan obalenia reżimu Quelliona i zabezpieczenia składu zaopatrzenia.',
				season: 'Wczesna wiosna',
				year: '1027 FE',
			},
			'hoa-45': {
				title: 'Głos Kelsiera',
				description:
					'Szpieg zaczyna słyszeć coś, co uważa za głos Kelsiera prowadzący go, popychając ku coraz bardziej niebezpiecznym działaniom przeciw Obywatelowi.',
				season: 'Wiosna',
				year: '1027 FE',
			},
			'hoa-50': {
				title: 'Płonący budynek',
				description:
					'Szpieg zostaje nakolcowany podczas pożaru budynku, zyskując wzmocnione zdolności allomantyczne, ale też stając się podatnym na wpływ Zagłady przez kolec.',
				season: 'Wiosna',
				year: '1027 FE',
			},
			'hoa-55': {
				title: 'Objawienie',
				description:
					'Szpieg uświadamia sobie, że głos, który słyszał, nie należy do Kelsiera, lecz do Zagłady, manipulującej nim przez hemalurgiczny kolec. Wyrywa kolec w agonii.',
				season: 'Późna wiosna',
				year: '1027 FE',
			},
			'hoa-58': {
				title: 'Bohater Urteau',
				description:
					'Szpieg prowadzi rewolucję przeciw Quellionowi, ujawniając jego korupcję. Gdy pożary pochłaniają miasto, Sazed zalewa kanały, ratując Urteau przed zniszczeniem.',
				season: 'Wiosna',
				year: '1027 FE',
			},
			'hoa-64': {
				title: 'Rekonwalescencja',
				description:
					'Ciężko poparzony, ale żywy, Szpieg dochodzi do siebie, gdy Urteau stabilizuje się pod nowym przywództwem i zapasy ze składu są rozdzielane.',
				season: 'Lato',
				year: '1027 FE',
			},
			'hoa-69': {
				title: 'Do Czeluści',
				description:
					'Szpieg podróżuje do Czeluści Hathsin z siłami z Urteau, dołączając do gromadzących się armii na to, co okaże się ostateczną bitwą.',
				season: 'Jesień',
				year: '1027 FE',
			},
			'hoa-83': {
				title: 'Nowy świat',
				description:
					'Szpieg wychodzi na odtworzony przez Sazeda świat — pole kwiatów i zielonej trawy pod błękitnym niebem. Niesie ostatnie słowa Sazeda dla ocalałych.',
				season: 'Jesień',
				year: '1027 FE',
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
};
