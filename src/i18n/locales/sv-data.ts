/**
 * Swedish data translations.
 * Sources: Official Modernista editions (Books 1–2), translated by Lottie Eriksson.
 * Note: Book 3 (The Hero of Ages) is officially untranslated in Swedish.
 */
import type { DataTranslations } from '../types';
import { enData } from './en-data';

export const svData: DataTranslations = {
	...enData,

	books: {
		tfe: { title: 'Sista riket', year: '1021–1022 FE', confidence: 'verified' },
		woa: { title: 'Uppstigningens brunn', year: '1022–1024 FE', confidence: 'verified' },
	},

	characters: {
		vin: {
			name: 'Vin',
			title: 'Dimfödd', // "Mistborn" is canonically "Dimfödd" in Modernista editions
			description:
				'En ung gatflicka från Luthadel som upptäcker att hon är en dimfödd, en varelse med sällsynta allomantiska krafter.',
			confidence: 'verified',
			fieldConfidence: { description: 'verified' },
			titleProgression: {
				'tfe-1': 'Gatflicka', // Street urchin context
				'tfe-9': 'Dimfödd lärling',
				'tfe-12': 'Lady Valette Renoux',
				'tfe-25': 'Dimfödd',
				'woa-1': 'Överlevarens arvtagare', // "The Survivor" is "Överlevaren"
				'woa-47': 'Luthadels beskyddare',
			},
			titleProgressionConfidence: {
				'tfe-1': 'verified',
				'tfe-9': 'verified',
				'tfe-12': 'verified',
				'tfe-25': 'verified',
				'woa-1': 'verified',
				'woa-47': 'verified',
			},
		},
		kelsier: {
			name: 'Kelsier',
			title: 'Överlevaren', // Canonical title for The Survivor
			description:
				'Den karismatiske ledaren för en tjuvgäng som planerar det omöjliga: att störta Överstehärskaren.',
			confidence: 'verified',
			fieldConfidence: { description: 'verified' },
			titleProgression: {
				'tfe-0': 'Mystisk skaa',
				'tfe-1': 'Överlevaren från Hathsin',
				'tfe-11': 'Gängledare',
				'tfe-21': 'Groparnas förstörare',
				'tfe-34': 'Upprorets martyr',
			},
			titleProgressionConfidence: {
				'tfe-0': 'verified',
				'tfe-1': 'verified',
				'tfe-11': 'verified',
				'tfe-21': 'verified',
				'tfe-34': 'verified',
			},
		},
		sazed: {
			name: 'Sazed',
			title: 'Förvarare', // "Keeper" is canonically "Förvarare"
			description:
				'En terrisk förvarare som använder ferukemi för att bevara kunskap om religioner och historier från tiden före Uppstigningen.',
			confidence: 'verified',
			fieldConfidence: { description: 'verified' },
			titleProgression: {
				'tfe-9': 'Terrisk betjänt', // Sazed acts as a steward/valet
				'tfe-22': 'Religionernas förvarare',
				'woa-1': 'Lärd och förvarare',
				'woa-12': 'Sanningssökare',
				'woa-52': 'Luthadels försvarare',
			},
			titleProgressionConfidence: {
				'tfe-9': 'verified',
				'tfe-22': 'verified',
				'woa-1': 'verified',
				'woa-12': 'verified',
				'woa-52': 'verified',
			},
		},
		elend: {
			name: 'Elend Venture',
			title: 'Kung', // Title at the end of Book 1/Start of Book 2
			description:
				'En idealistisk adelsman som föredrar böcker framför politik, men som tvingas in i en ledarroll.',
			confidence: 'verified',
			fieldConfidence: { description: 'verified' },
			titleProgression: {
				'tfe-12': 'Filosofisk adelsman',
				'tfe-24': 'Adelsrebell',
				'tfe-38': 'Oväntad ledare',
				'woa-1': 'Kung av Centrala dominansen',
				'woa-35': 'Avsatt kung',
				'woa-58': 'Dimfödd kejsare',
			},
			titleProgressionConfidence: {
				'tfe-12': 'verified',
				'tfe-24': 'verified',
				'tfe-38': 'verified',
				'woa-1': 'verified',
				'woa-35': 'verified',
				'woa-58': 'verified',
			},
		},
		marsh: {
			name: 'Marsh',
			title: 'Stålinkvisitor', // Canonical term for Steel Inquisitor
			description: 'Kelsiers bror som infiltrerar Stålministeriet för att hjälpa upproret.',
			confidence: 'verified',
			fieldConfidence: { description: 'verified' },
			titleProgression: {
				'tfe-7': 'Rebellinfiltratör',
				'tfe-13': 'Ministeriespion',
				'tfe-38': 'Stålinkvisitor',
				'woa-4': 'Motvillig inkvisitor',
				'woa-57': 'Fördärvets bricka', // "Ruin" is "Fördärvet"
			},
			titleProgressionConfidence: {
				'tfe-7': 'verified',
				'tfe-13': 'verified',
				'tfe-38': 'verified',
				'woa-4': 'verified',
				'woa-57': 'verified',
			},
		},
		spook: {
			name: 'Spook', // The nickname "Spook" is kept as-is in the translation
			title: 'Tennöga', // Canonical term for Tineye
			description: 'Den yngsta medlemmen i Kelsiers gäng, en skaa med förmågan att bränna tenn.',
			confidence: 'verified',
			fieldConfidence: { description: 'verified' },
			titleProgression: {
				'tfe-7': 'Ungt tennöga',
				'woa-1': 'Spejare',
			},
			titleProgressionConfidence: {
				'tfe-7': 'verified',
				'woa-1': 'verified',
			},
		},
	},

	locations: {
		luthadel: {
			name: 'Luthadel',
			description:
				'Huvudstaden i det Slutgiltiga Imperiet och Överstehärskarens maktcentrum i tusen år. Den enda staden tillåten att ha stenmurar.',
			confidence: 'unconfirmed',
		},
		'lake-luthadel': {
			name: 'Sjön Luthadel',
			description: 'Sötvattensjö öster om huvudstaden, missfärgad av aska.',
			confidence: 'unconfirmed',
		},
		'pits-hathsin': {
			name: 'Hathsins gropar',
			description:
				'Atiumgruvor och kandras hemland. Kelsier var den enda fången som någonsin flydde levande.',
			confidence: 'unconfirmed',
		},
		fellise: {
			name: 'Fellise',
			description: 'Adligt rekreationsort väster om Luthadel där Hus Renoux hade ett gods.',
			confidence: 'unconfirmed',
		},
		holstep: {
			name: 'Holstep',
			description: 'Garnisonstad väster om Luthadel, kontrollpunkt för handels- och militärvägar.',
			confidence: 'unconfirmed',
		},
		'ashmount-tyrian': {
			name: 'Tyrian',
			description: 'Det närmaste askberget till Luthadel, synligt från stadsmurarna.',
			confidence: 'unconfirmed',
		},
		urteau: {
			name: 'Urteau',
			description:
				'Huvudstad i den Norra Dominansen och Hus Ventures anfäder. Känt för sina gatukanaler — uttorkade kanaler som fungerar som vägar.',
			confidence: 'unconfirmed',
		},
		'ashmount-kalling': {
			name: 'Kalling',
			description: 'Huvudvulkan i den Norra Dominansen med mörkare, mer frätande aska.',
			confidence: 'unconfirmed',
		},
		'fadrex-city': {
			name: 'Fadrex',
			description:
				'Handelscentrum i den Västra Dominansen, skyddat av naturliga cremnolklippformationer.',
			confidence: 'unconfirmed',
		},
		tremredare: {
			name: 'Tremredare',
			description:
				'Forna huvudstaden i den Västra Dominansen, övergiven efter Kollapsen på grund av brist på försvar.',
			confidence: 'unconfirmed',
		},
		'ashmount-morag': {
			name: 'Morag',
			description: 'Massiv vulkan som dominerar imperiets västra horisont.',
			confidence: 'unconfirmed',
		},
		chardees: {
			name: 'Chardees',
			description: 'Hus Hastings ärftliga säte, dolt i officiella kartor.',
			confidence: 'unconfirmed',
		},
		austrex: {
			name: 'Austrex',
			description: 'Huvudstad i den Södra Dominansen och centrum för imperiets kornbod.',
			confidence: 'unconfirmed',
		},
		vetitan: {
			name: 'Vetitan',
			description:
				'Stad i den Norra Dominansen byggd över en av Överstehärskarens förrådsgröttor. Överväldigad av aska.',
			confidence: 'unconfirmed',
		},
		'ashmount-zerinah': {
			name: 'Zerinah',
			description: 'Det sydligaste askberget, termisk regulator för södra halvklotet.',
			confidence: 'unconfirmed',
		},
		conventical: {
			name: 'Serans konventikel',
			description:
				'Inkvisitorernas fästning huggen ur en klippa. Sazed upptäckte Kwaans inskription här.',
			confidence: 'unconfirmed',
		},
		tathingdwen: {
			name: 'Tathingdwen',
			description: 'Huvudstad i Terris-dominansen, belägen i de norra bergen.',
			confidence: 'unconfirmed',
		},
		'terris-mountains': {
			name: 'Terrisbergen',
			description:
				'Bergskedja där terrisierna förslavades. Ursprunglig plats för Uppstigandets brunn.',
			confidence: 'unconfirmed',
		},
		'tincut-fastness': {
			name: 'Tincuts fäste',
			description: 'Gömd bergsfästning dit Synoden flydde.',
			confidence: 'unconfirmed',
		},
		'high-villages': {
			name: 'Högbyarna',
			description: 'Nätverk av dolda terrisiska bergsbyar, förbundna med underjordiska tunnlar.',
			confidence: 'unconfirmed',
		},
		'imperial-canal': {
			name: 'Den kejserliga kanalen',
			description:
				'Konstgjord vattenväg som förbinder Tathingdwen med Luthadel för resurstransport.',
			confidence: 'unconfirmed',
		},
		'kandra-homeland': {
			name: 'Kandras hemland',
			description:
				'Djupa grottor under Hathsins gropar där kandra bevakar Överstehärskarens hemligheter.',
			confidence: 'unconfirmed',
		},
		'ashmount-torinost': {
			name: 'Torinost',
			description: 'Massiv bergstopp norr om den Västra Dominansen.',
			confidence: 'unconfirmed',
		},
		'ashmount-faleast': {
			name: 'Faleast',
			description:
				'Huvudlandmärke i den Östra Dominansen med mer frätande aska på grund av kiseldioxid.',
			confidence: 'unconfirmed',
		},
		'ashmount-doriel': {
			name: 'Doriel',
			description: 'Askberg söder om Luthadel, nära Södra havets kust.',
			confidence: 'unconfirmed',
		},
		'statlin-city': {
			name: 'Statlin',
			description: 'Södra ankarpunkt i Överstehärskarens förrådsgröttnätverk.',
			confidence: 'unconfirmed',
		},
		'tresting-plantation': {
			name: 'Trestings plantage',
			description: 'Lord Trestings skaaplantage med hundratals arbetare och en garnison.',
			confidence: 'unconfirmed',
		},
		'lekal-city': {
			name: 'Lekal-staden',
			description: 'Hus Lekals fästningsstad där hela staden är en förlängning av adelsgodset.',
			confidence: 'unconfirmed',
		},
		mantiz: {
			name: 'Mantiz',
			description:
				'Stad i norra delen av den Västra Dominansen med fyra stora adelsgods och kraftig askansamling.',
			confidence: 'unconfirmed',
		},
		'channerel-river': {
			name: 'Channerelfloden',
			description: 'Imperiets huvudvattenväg, livsviktig för handel och transport.',
			confidence: 'unconfirmed',
		},
		'burnlands-west': {
			name: 'Brännlanden (väst)',
			description: 'Obeboelig öken vid imperiets västgräns, för nära solen.',
			confidence: 'unconfirmed',
		},
		'burnlands-east': {
			name: 'Brännlanden (öst)',
			description: 'Obeboelig öken vid imperiets östgräns.',
			confidence: 'unconfirmed',
		},
		'arguois-caverns': {
			name: 'Arguois grottor',
			description: 'Grottssystem mellan Luthadel och groparna, träningsbas för rebellarmén.',
			confidence: 'unconfirmed',
		},
		garthwood: {
			name: 'Garthwood',
			description: 'By där Sazed undervisade befriade skaa i religioner.',
			confidence: 'unconfirmed',
		},
		'straffs-camp': {
			name: 'Straffs läger',
			description: 'Straff Ventures militärläger norr om Luthadel under belägringen.',
			confidence: 'unconfirmed',
		},
		'koloss-camp': {
			name: 'Koloss-lägret',
			description: 'Koloss-arméns position närathadel under belägringen.',
			confidence: 'unconfirmed',
		},
		longsfollow: {
			name: 'Longsfollow',
			description: 'Samhälle i bergspass i den Västra Dominansen.',
			confidence: 'unconfirmed',
		},
		chakatah: {
			name: 'Chakatah',
			description: 'Liten gruvby i den Västra Dominansen.',
			confidence: 'unconfirmed',
		},
		'north-seran': {
			name: 'Norra Seran',
			description: 'Territorium nära Serans konventikel.',
			confidence: 'unconfirmed',
		},
		'river-seran': {
			name: 'Seranfloden',
			description: 'Sydlig vattenväg som användes av Ministeriet för materialtransport.',
			confidence: 'unconfirmed',
		},
		urbene: {
			name: 'Urbene',
			description: 'Ministeriets omlastningsplats för spannmålstransporter till huvudstaden.',
			confidence: 'unconfirmed',
		},
		erlac: {
			name: 'Erlac',
			description: 'Garnison sydväst om Luthadel som patrullerar vägarna till staden.',
			confidence: 'unconfirmed',
		},
		'valtroux-city-central': {
			name: 'Valtroux',
			description: 'Garnisonstad nordväst om Luthadel med stående armé.',
			confidence: 'unconfirmed',
		},
		'haverfrex-cannery-central': {
			name: 'Haverfrex',
			description: 'Industriell utpost i den Västra Dominansen, försörjningsnav för Cetts armé.',
			confidence: 'unconfirmed',
		},
	},

	cities: {
		luthadel: {
			name: 'Luthadel',
			description:
				'Huvudstaden i det Slutgiltiga Imperiet och kulturellt centrum under Överstehärskarens styre. Enda staden med konstgjorda murar. Radiellt symmetriskt byggd kring Kredik Shaw som reser sig direkt ovanför Uppstigandets brunn. Åtta portar namngivna efter de allomantiska metallerna.',
			confidence: 'unconfirmed',
		},
		urteau: {
			name: 'Urteau',
			description:
				'Största staden i den Norra Dominansen och Hus Ventures ärftliga säte. Definieras av sina gatukanaler — breda uttorkade kanaler som fungerar som nedsänkta vägar. Vattnet avleddes till en dold underjordisk sjö. Inga murar enligt Överstehärskarens dekret.',
			confidence: 'unconfirmed',
		},
		fadrex: {
			name: 'Fadrex',
			description:
				'Handelscentrum i den Västra Dominansen, befäst av cremnolklippformationer som naturliga murar. Rymmer en av Överstehärskarens hemliga förrådsgröttor.',
			confidence: 'unconfirmed',
		},
	},

	cityLandmarks: {
		luthadel: {
			'kredik-shaw': {
				name: 'Kredik Shaw',
				description:
					'Överstehärskarens palats, "Tusen spirornas kulle". Byggt direkt ovanför Uppstigandets brunn.',
				confidence: 'unconfirmed',
			},
			'iron-gate': {
				name: 'Järnporten',
				description: 'Norra porten, mot Urteau och den Norra Dominansen.',
				confidence: 'unconfirmed',
			},
			'steel-gate': {
				name: 'Stålporten',
				description: 'Nordvästra porten, mot Hathsins gropar.',
				confidence: 'unconfirmed',
			},
			'pewter-gate': {
				name: 'Tennporten',
				description: 'Nordöstra porten i Luthadel.',
				confidence: 'unconfirmed',
			},
			'zinc-gate': {
				name: 'Zinkporten',
				description: 'Sydöstra porten i Luthadel.',
				confidence: 'unconfirmed',
			},
			'brass-gate': {
				name: 'Mässingsporten',
				description: 'Södra porten, mot Fellise och den Södra Dominansen.',
				confidence: 'unconfirmed',
			},
			'copper-gate': {
				name: 'Kopparporten',
				description: 'Sydvästra porten, nära industriområdet.',
				confidence: 'unconfirmed',
			},
			'bronze-gate': {
				name: 'Bronsporten',
				description: 'Västra porten, mot Channerelfloden.',
				confidence: 'unconfirmed',
			},
			'keep-venture': {
				name: 'Hus Venture',
				description: 'Hus Ventures fästning. Elends operationsbas och plats för adliga baler.',
				confidence: 'unconfirmed',
			},
			'keep-elariel': {
				name: 'Hus Elariel',
				description: 'Säte för Hus Elariel, ett av de Stora husen i Luthadel.',
				confidence: 'unconfirmed',
			},
			'keep-hasting': {
				name: 'Hus Hasting',
				description: 'Nära palatset; föll tidigt i husens krig.',
				confidence: 'unconfirmed',
			},
			'clubs-shop': {
				name: 'Clubs verkstad',
				description: 'Snickarverkstad som tjänade som operationsbas för Kelsiers gäng.',
				confidence: 'unconfirmed',
			},
			'camons-safehouse': {
				name: 'Camons gömställe',
				description: 'Ursprungligt gömställe i slummen där Vin rekryterades av Kelsier.',
				confidence: 'unconfirmed',
			},
			'fountain-square': {
				name: 'Fontäntorget',
				description:
					'Plats för offentliga avrättningar och Kelsiers död. Omdöpt till Den överlevandes torg.',
				confidence: 'unconfirmed',
			},
			'lake-luthadel': {
				name: 'Sjön Luthadel',
				description: 'Stor sötvattensjö öster om murarna.',
				confidence: 'unconfirmed',
			},
			'canton-of-finance': {
				name: 'Finanskantonen',
				description: 'Stålministeriets högkvarter för imperiets finanser.',
				confidence: 'unconfirmed',
			},
			'skaa-hovels': {
				name: 'Skaaruckel',
				description: 'De eländiga skaakvarter där gäng opererar.',
				confidence: 'unconfirmed',
			},
			'well-of-ascension': {
				name: 'Uppstigandets brunn',
				description:
					'Den dolda kraftkällan under Kredik Shaw, där kraft ackumuleras var 1024:e år.',
				confidence: 'unconfirmed',
			},
			'tin-gate-north': {
				name: 'Tennporten (nord)',
				description: 'Det nordöstra portområdet.',
				confidence: 'unconfirmed',
			},
			'assembly-hall': {
				name: 'Församlingshallen',
				description: 'Byggnaden där Elends demokratiska parlament sammanträdde under belägringen.',
				confidence: 'unconfirmed',
			},
			'keep-tekiel': {
				name: 'Hus Tekiel',
				description: 'Hus Tekiels fästning, mål för Kelsiers attentatskampanj.',
				confidence: 'unconfirmed',
			},
			'luthadel-garrison': {
				name: 'Luthadels garnison',
				description: 'Militär träningsplats och stadens baracker.',
				confidence: 'unconfirmed',
			},
			'warehouse-district': {
				name: 'Lagerkvarteret',
				description: 'Industrikvarter nära kanalerna där gänget lagrade vapen.',
				confidence: 'unconfirmed',
			},
			'canton-inquisition': {
				name: 'Inkvisitionens kanton',
				description: 'Stålinkvisitorernas huvudbas, fruktad av alla.',
				confidence: 'unconfirmed',
			},
			'canton-resource': {
				name: 'Resurskantonen',
				description: 'Administrativt centrum för den kejserliga ekonomin.',
				confidence: 'unconfirmed',
			},
			'canton-orthodoxy': {
				name: 'Ortodoxins kanton',
				description: 'Religiöst centrum ansvarig för renhet i Överstehärskarens kult.',
				confidence: 'unconfirmed',
			},
			'keep-lekal': {
				name: 'Hus Lekal',
				description: 'Ett av de stora adelshusen med torn och glasmålningar.',
				confidence: 'unconfirmed',
			},
			'hotel-district': {
				name: 'Hotellkvarteret',
				description: 'Exklusivt område för besökande adelsmän från yttre dominanserna.',
				confidence: 'unconfirmed',
			},
			'commercial-district': {
				name: 'Handelskvarteret',
				description: 'Handelscentrum där adelshusen förhandlade sina kontrakt.',
				confidence: 'unconfirmed',
			},
			'industrial-district': {
				name: 'Industrikvarteret',
				description: 'Område med smedjor, kvarnar och verkstäder vid kanalen.',
				confidence: 'unconfirmed',
			},
			'ahlstrom-square': {
				name: 'Ahlstroms torg',
				description: 'Viktig offentlig plats i Luthadel.',
				confidence: 'unconfirmed',
			},
			'south-bridge': {
				name: 'Södra bron',
				description: 'Korsningspunkt över stadens vattenvägar.',
				confidence: 'unconfirmed',
			},
			'the-twists': {
				name: 'Slingorna',
				description:
					'Labyrintiskt slumkvarter, tillflyktsort för skaaundervärld och Kelsiers gäng.',
				confidence: 'unconfirmed',
			},
			sootwarrens: {
				name: 'Sotgrytorna',
				description: 'Ett av de eländigaste kvarteren, täckt av aska.',
				confidence: 'unconfirmed',
			},
			'the-cracks': {
				name: 'Sprickorna',
				description: 'Förfallen sektor med hög befolkningstäthet.',
				confidence: 'unconfirmed',
			},
			'aspen-row': {
				name: 'Aspen Row',
				description: 'Bostadsgata för kvalificerade arbetare och adligt tjänstefolk.',
				confidence: 'unconfirmed',
			},
			blockstreet: {
				name: 'Blockgatan',
				description: 'Tätbyggt bostadskvarter i rutnätsmönster för skaa.',
				confidence: 'unconfirmed',
			},
		},
		urteau: {
			'ministry-canton': {
				name: 'Inkvisitionens kanton',
				description:
					'Ministeriets säte byggt ovanför den tredje förrådsgröttan med en underjordisk sjö.',
				confidence: 'unconfirmed',
			},
			marketpit: {
				name: 'Marknadsgropen',
				description: 'Den bredaste av gatukanalerna, huvudboulevard och central marknad.',
				confidence: 'unconfirmed',
			},
			'spooks-hideout': {
				name: 'Spooks gömställe',
				description: '"Det brinnande huset" som användes av Spooks lag under upproret.',
				confidence: 'unconfirmed',
			},
			'citizens-estate': {
				name: 'Medborgarens gods',
				description: 'Adelsgods övertaget av Quellion som maktcentrum.',
				confidence: 'unconfirmed',
			},
			'luthadel-gate': {
				name: 'Luthadelporten',
				description: 'Södra ingången till kanalnätverket, mot Luthadel.',
				confidence: 'unconfirmed',
			},
			'venture-estate': {
				name: 'Hus Ventures gods',
				description: 'Hus Ventures ärftliga gods i Urteau, övergivet under Quellions styre.',
				confidence: 'unconfirmed',
			},
			'burning-district': {
				name: 'Det brinnande kvarteret',
				description: 'Ungefär en tredjedel av staden förstörd av bränder under Spooks uppror.',
				confidence: 'unconfirmed',
			},
			'skaa-slums': {
				name: 'Skaas slum',
				description: 'Fattiga kvarter där revolutionärer samlas i de torra kanalerna.',
				confidence: 'unconfirmed',
			},
			'the-harrows': {
				name: 'Harvarna',
				description: 'Labyrint av smala, sammankopplade kanaler i den södra sektionen.',
				confidence: 'unconfirmed',
			},
			'west-docks': {
				name: 'Västra dockorna',
				description: 'Västra terminalen för kanalnätverket för lastning av varor.',
				confidence: 'unconfirmed',
			},
			'fedre-aqueduct': {
				name: 'Lord Fedres akvedukt',
				description: 'Monumental infrastruktur från tiden före Kollapsen.',
				confidence: 'unconfirmed',
			},
			'white-streets': {
				name: 'De vita gatorna',
				description: 'Välbärgat kvarter vars stenläggning noggrant sopades ren från aska.',
				confidence: 'unconfirmed',
			},
			'citizens-home': {
				name: 'Medborgarens hem',
				description: 'Högkvarter för Quellion, den skaa som tog makten.',
				confidence: 'unconfirmed',
			},
			'interchange-building': {
				name: 'Omlastningsbyggnaden',
				description: 'Logistikcentrum för varuöverföring mellan nivåer.',
				confidence: 'unconfirmed',
			},
			'old-city-square': {
				name: 'Gamla stadens torg',
				description: 'Historiskt centrum i Urteau, skådeplats för politisk oro under Medborgaren.',
				confidence: 'unconfirmed',
			},
			'canton-orthodoxy-urteau': {
				name: 'Ortodoxins kanton',
				description: 'Skötte andliga och juridiska angelägenheter i den Norra Dominansen.',
				confidence: 'unconfirmed',
			},
		},
		fadrex: {
			'keep-orielle': {
				name: 'Hus Orielle',
				description: 'Huvudadesgods på höjden, använt av obligator Aradan Yomen som palats.',
				confidence: 'unconfirmed',
			},
			'storage-cache': {
				name: 'Förrådsgröttan',
				description: 'Hemligt förråd av förnödenheter och elektrum gömt i de norra klipporna.',
				confidence: 'unconfirmed',
			},
			'cetts-base': {
				name: 'Cetts bas',
				description: 'Ashweather Cetts befästa anläggning innan hans avfärd till Luthadel.',
				confidence: 'unconfirmed',
			},
			'cremnol-wall-north': {
				name: 'Cremnolväggen (norr)',
				description: 'Naturlig röd-orange klippformation som skyddar staden norrifrån.',
				confidence: 'unconfirmed',
			},
			'cremnol-wall-south': {
				name: 'Cremnolväggen (söder)',
				description: 'Klippformation som bildar en geologisk barriär söderut.',
				confidence: 'unconfirmed',
			},
			'yomens-palace': {
				name: 'Yomens palats',
				description: 'Administrativt säte för obligator Aradan Yomen.',
				confidence: 'unconfirmed',
			},
			'main-gate': {
				name: 'Huvudporten',
				description: 'Stadens huvudingång genom de geologiska formationerna.',
				confidence: 'unconfirmed',
			},
			'conway-canal': {
				name: 'Conwaykanalen',
				description: 'En av huvudkanalerna för handel och transport.',
				confidence: 'unconfirmed',
			},
			'city-walls-east': {
				name: 'Östra murarna',
				description: 'Östra försvarsperimetern bildad av naturlig sten.',
				confidence: 'unconfirmed',
			},
			'ash-mounds': {
				name: 'Askhögarna',
				description: 'Asktäckta slätter där Elends belägringsarmé slog läger.',
				confidence: 'unconfirmed',
			},
			'canton-resource-fadrex': {
				name: 'Resurskantonen',
				description: 'Ministeriets kanton som Yomen använde som fängelse för Vin.',
				confidence: 'unconfirmed',
			},
			'informants-residence': {
				name: 'Informantens residens',
				description: 'Hem till en gammal informant som känner stadens hemligheter.',
				confidence: 'unconfirmed',
			},
			'deep-wells': {
				name: 'Djupa brunnarna',
				description: 'Livsviktiga vattenresurser i en stad utan större flod.',
				confidence: 'unconfirmed',
			},
			'noble-quarter': {
				name: 'Adelskvarteret',
				description: 'Bostadsområde för det högre samhället.',
				confidence: 'unconfirmed',
			},
		},
	},


	movements: {
		...enData.movements,
		kelsier: {
			...enData.movements.kelsier,
			'tfe-0': { title: 'Överlevarens återkomst', description: 'Kelsier anländer till lord Tristings plantage, där adelsmannen bjudit en förbindelsetjänsteman sänd av lord Venture i hopp om affärssamarbete. Den natten, när en ung skaflicka ska föras till Tristing, ingriper Kelsier: dödar Tristing och alla hans förbindelsetjänstemän, förmän och soldater och bränner herrgården.', season: 'Vår', year: '1021 FE' },
			'tfe-1': { title: 'Den dolde iakttagaren', description: 'Kelsier övervakar Camons liga från skuggorna och lägger märke till att Vin omedvetet använder allomanti: ett gatubarn med dimfödda krafter.', season: 'Vår', year: '1021 FE' },
			'tfe-3': { title: 'Vins rekrytering', description: 'Vin försöker fly från Camons gömställe men Ulef förråder henne. Kelsier griper in och räddar henne från Camons misshandel. Han befordrar Milev till ledare, tar tre tusen boxingar som betalning för att ha hand om förbindelsetjänstemannen och inkvisitorn. Han testar Vin och bekräftar att hon är dimfödd.', season: 'Vår', year: '1021 FE' },
			'tfe-5': { title: 'Atiumstölden', description: 'Kelsier, Dockson och Vin klättrar upp på taken. Kelsier gör sig redo och störtar ut i dimman för att anfalla Ventures fäste och stjäla atium. Han lyckas ta kassaskåpet men måste slå sig igenom dimmördare på vägen tillbaka. Flyr med atiumet och finansierar upproret.', season: 'Vår', year: '1021 FE' },
			'tfe-6': { title: 'Laget komplett', description: 'I Clubs snickarverkstad lägger Kelsier och laget planer för att störta Sista riket. Marsh anländer till sist och alla lämnar rummet för att bröderna ska tala enskilt. Vin smyger tillbaka och lyssnar vid dörren.', season: 'Vår', year: '1021 FE' },
			'tfe-7': { title: 'Lärlingens träning', description: 'Kelsier tar med Vin på hennes första nattliga träningspass och ger henne en dimmantel. Han lär henne de åtta grundmetallerna längs Luthadels murar, nära Stålporten.', season: 'Sen vår', year: '1021 FE' },
			'tfe-8': { title: 'Renoux-förkädnaden', description: 'Kelsier tar med Vin bortom Luthadels murar där de stöter på en dimgast. Sazed väntar med en vagn på landsvägen och kör dem till Fellise. Kelsier erbjuder Vin tre tusen boxingar och möjligheten att lämna. På lord Renoux egendom skapar han en falsk identitet åt Vin som lady Valette.', season: 'Sommar', year: '1021 FE' },
			'tfe-10': { title: 'Revolutionsplanering', description: 'Tillbaka i Luthadel håller Kelsier möte i Clubs butik. Han frågar Sazed om en religion med verklig kraft — Sazed berättar om jaism — och om en religion som anser utrotning av adeln helig. Mötet avbryts när en av Hammonds soldater rapporterar att ministeriet hittat Camons gamla gömställe.', season: 'Sommar', year: '1021 FE' },
			'tfe-10.2': { title: 'Lagersamlingen', description: 'Kelsier talar inför skaarbetare vid en hemlig samling i lagerdistriktet. Breeze och hans betvingare och uppviglare manipulerar folkmassan med legenden om Överlevaren från Hathsin för att blåsa på upproret.', season: 'Sommar', year: '1021 FE' },
			'tfe-11': { title: 'Massakern i Camons gömställe', description: 'Kelsier och laget undersöker det förstörda gömstället. Kelsier letar sedan efter Camon bland tiggarna och hittar hans kropp hängande i en krok genom munnen, handleder och vrister bundna — kroppen torterad. Denna avrättningsmetod är avsedd för de som missbrukar allomanti. Vin hade lyckats följa Kelsier.', season: 'Sommar', year: '1021 FE' },
			'tfe-13': { title: 'Planer i Fellise', description: 'Kelsier möter Vin och Sazed på lord Renoux egendom i Fellise för att gå igenom information från Vins första bal. Han får veta att Vins far var på balen och återvänder genom dimman till Luthadel.', season: 'Sommar', year: '1021 FE' },
			'tfe-14': { title: 'Palatsspaning', description: 'Kelsier leder Vin till Kredik Shaw för att utforska byggnaden som Härskaren besöker var tredje dag. De slåss sig in, men tre stålinkvisitorer omringar dem. Kelsier separeras från Vin i kaoset. Vin flyr svårt skadad med en mystisk läderbok.', season: 'Sommar', year: '1021 FE' },
			'tfe-15': { title: 'Efter Kredik Shaw', description: 'Laget ifrågasätter Kelsiers beslut att ta Vin till Kredik Shaw. Sazed bär in henne. Dockson är rasande över risken. Kelsier och Dockson lägger märke till läderboken; Sazed identifierar den som skriven på khlenni, Härskarens hemlandsspråk före Uppstigningen.', season: 'Sommar', year: '1021 FE' },
			'tfe-16': { title: 'Vakar över Vin', description: 'Kelsier stannar i Clubs butik och vakar över Vin medan hon återhämtar sig efter skadorna från Kredik Shaw, och är där när hon äntligen vaknar.', season: 'Sommar', year: '1021 FE' },
			'tfe-17': { title: 'Möte på Renoux egendom', description: 'Kelsier reser till Fellise med Breeze, Yeden och Dockson för att mötas på lord Renoux egendom och diskutera nästa fas av upproret.', season: 'Sommar', year: '1021 FE' },
			'tfe-19': { title: 'Tänder huskrig', description: 'Kelsier sår kaos genom att dumpa lord Charrs Entrons uppenbara mordoffer i Tekielfästets trädgård. Sedan beger han sig till Sotdistrikten för att träffa Hoid — en informatör förklädd till gatukontakt — och får reda på att lady Shan Elariel är en betvingare.', season: 'Sensommar', year: '1021 FE' },
			'tfe-19.2': { title: 'Möte med lord Straff', description: 'Kelsier beger sig till Allströmtorget förklädd till sjuk och handikappad skatiggare för att möta lord Straff Venture, överhuvud för hus Venture. Han upptäcker att rykten om Överlevaren från Hathsin sprids och att det talas om den elfte metallen.', season: 'Sensommar', year: '1021 FE' },
			'tfe-19.3': { title: 'Åter till Renoux', description: 'Kelsier återvänder till Renoux herrgård via Törnvägen och utbyter information med Vin, Sazed och Renoux. Han ger Vin en föreläsning om adeln, hävdar att de inte bryr sig om ska och att hon måste hålla sig borta från Elend.', season: 'Sensommar', year: '1021 FE' },
			'tfe-20': { title: 'Övervakar leveranser', description: 'Kelsier övervakar lastning av vapen och förnödenheter på vagnar vid Renoux egendom i Fellise för att skicka till rebellarmén.', season: 'Sensommar', year: '1021 FE' },
			'tfe-21': { title: 'Rebellarmén', description: 'Kelsier läser översättningen av Härskarens dagbok ombord på en pråm norrut längs kanalen. Konvojen stannar vid Holstep-slussarna och Kelsier och rekryterna beger sig till grottorna där rebellarmén tränar. Han övervinner minnen från Hatshins gropar och tar sig in i Arguois grottsy stem för att inspektera armén som Hammond tränat. Under middagen manipulerar Kelsier Bilg som avskräckande exempel. Bilg och Demoux duellerar; Kelsier hjälper Demoux med allomanti.', season: 'Höst', year: '1021 FE' },
			'tfe-23': { title: 'Spårar Vin', description: 'Kelsier dyker upp vid ett tornfönster där Vin spionerar på Elends grupp vid Hastingsfästet. Han skämtar om deras idealistiska prat om att förändra världen. De skiljs åt.', season: 'Höst', year: '1021 FE' },
			'tfe-24': { title: 'Statusmöte', description: 'Kelsier anländer till Clubs butik där det mesta av laget samlats. Han diskuterar uppdragets status och delar en nattlig drink med Spook, Hammond och Clubs. Han ber Hammond gå till garnisonen för att samla information.', season: 'Höst', year: '1021 FE' },
			'tfe-25': { title: 'Desperat beslut', description: 'I Clubs butik får Kelsier veta att skarebellerna attackerat Holsteps garnison och att Luthadels garnison marscherar norrut. Han beslutar att försöka varna rebellarmén och tvingar Vin att svälja fem tennkulor för en lång tennlöpning norrut.', season: 'Sen höst', year: '1021 FE' },
			'tfe-25.2': { title: 'Holstep-katastrofen', description: 'Kelsier och Vin springer i sexton timmar medan de bränner tenn oavbrutet. De finner rebellarméns rester, belägrade och slaktade av Valtroux-garnisonen. Kelsier vill slå till men Vin övertygar honom om att de inte är osårbara. De fortsätter till Arguois grottor där två tusen soldater överlevt tack vare Mennis.', season: 'Sen höst', year: '1021 FE' },
			'tfe-26': { title: 'Samla skärvorna', description: 'Laget återvänder till Clubs butik efter två veckors resa från grottorna. Planen verkar totalt misslyckad. Breeze anklagar Kelsier för att jaga ära. Kelsier erkänner bakslaget men vägrar ge upp.', season: 'Vinter', year: '1021 FE' },
			'tfe-26.2': { title: 'Avrättningarna', description: 'Spook meddelar om avrättningar på Fontäntorget. Laget beger sig dit och mutar sig upp på ett tak. De bevittnar slakten av många skamänniskor, blodet rinner i fontänen. Kelsier övertygar laget att fortsätta: "Det här är vår fiende. Ingen reträtt, ingen återvändo."', season: 'Vinter', year: '1021 FE' },
			'tfe-27': { title: 'Ny strategi', description: 'Laget återvänder till Clubs butik för att planera nästa steg: starta krig mellan adelns hus. Sazed kommer med ett brev från Marsh som anger mötesplatsen i Vrånggatorna.', season: 'Vinter', year: '1021 FE' },
			'tfe-27.2': { title: 'Guldmetallen', description: 'Kelsier och Vin beger sig till en övergiven byggnad i Vrånggatorna timmar före mötet med Marsh. Under väntan berättar Kelsier om guld — den nionde allomantiska metallen som visar en alternativ version av ens förflutna. Han förklarar även ferokemi och låter Vin bränna guld för första gången. När Marsh anländer med en lägre förbindelsetjänstemans tatuering från Inkvisitionsdivisionen beskriver han lugnandeposterna i Luthadel och avslöjar att inkvisitorer kan dö av ålder.', season: 'Vinter', year: '1021 FE' },
			'tfe-29': { title: 'Krigsråd på Renoux', description: 'Kelsier träffar det mesta av laget på Renoux egendom i Fellise för att studera en detaljerad karta över Luthadels försvar från Marsh. De upptäcker att Therons liga anfallit nyligen av ministeriet. Den natten, oförmögen att sova, ber Kelsier Sazed berätta om några religioner.', season: 'Vinter', year: '1021 FE' },
			'tfe-31': { title: 'Tillrättavisning av lärlingen', description: 'Kelsier och Vin återvänder till Clubs butik efter att Vin dödat lady Shan Elariel — en fullvärdig dimfödd — vid Venturefästet. Kelsier tillrättavisar Vin för vårdslös strid, men hon skriker att adel och ska inte skiljer sig, att Elend Venture är en god människa värd att skydda.', season: 'Vinter', year: '1021 FE' },
			'tfe-32': { title: 'Marshs kropp', description: 'Kelsier och Vin hittar Marshs kropp helt tömd på blod — ett tomt skal. I Clubs butik finner de ett brev från Marsh som förklarar att inkvisitorerna troligen hittar honom.', season: 'Vinter', year: '1022 FE' },
			'tfe-32.2': { title: 'Groparna förstörs', description: 'Kelsier återvänder till Hatshins gropar — platsen för hans största lidande. Han dödar alla vakter och sträcker ut handen till en ska vid namn Wallin som kryper ut ur hålorna. Sedan förstör han alla atiumkristaller och slår på en natt ut Härskarens mest värdefulla resurs.', season: 'Vinter', year: '1022 FE' },
			'tfe-33': { title: 'Nödgömstället', description: 'Kelsier återvänder till en fuktig reservkällare nära Clubs butik — bara tre rum. Han meddelar att allt atium i Hatshins gropar är förstört.', season: 'Tidig vår', year: '1022 FE' },
			'tfe-33.2': { title: 'Strid med inkvisitorn', description: 'Alla följer Kelsier till Fontäntorget. De ser Spook och lord Renoux i en avrättningsvagn. Kelsier kämpar mot en inkvisitor på torget — en fälla som han i stort sett visste om.', season: 'Tidig vår', year: '1022 FE' },
			'tfe-34': { title: 'Överlevarens sista strid', description: 'Kelsier strider mot inkvisitorn i en kamp på liv och död vid Fontäntorget — båda bränner atium. Han är mästare på att knuffa och dra, manövrerar metall i luften med briljant skicklighet. Han dödar inkvisitorn och skafolket börjar skandera "Överlevaren från Hathsin". Härskaren anländer i en svart vagn. En av Hammonds män sticker honom med ett spjut — han fortsätter gå. Två spjut — fortfarande stående. Härskaren slår till Kelsier, drar ett spjut ur sin egen kropp och stöter det genom Kelsier. Han dör med ett leende och blir martyren som tänder revolutionen.', season: 'Tidig vår', year: '1022 FE' },
			'tfe-35': { title: 'Bortom döden', description: 'I nödgömstället nära Clubs butik ser laget kandran — tidigare lord Renoux — i Kelsiers kropp och skelett: den slutliga planen. Kelsier lämnade brev till varje medlem med instruktioner för att ta staden. Hans död blev gnistan som tände revolutionen i hela Luthadel.', season: 'Tidig vår', year: '1022 FE' },
		},
		vin: {
			...enData.movements.vin,
			'tfe-1': { title: 'Gatbarnet', description: 'Vin kallas inför sin ligas ledare Camon som behandlar henne brutalt. Hon använder omedvetet sin tur — en form av allomantisk betvingning — för att lugna honom. Camon förklär sig till lord Jedue och förbereder ett bedrägeri mot Stålministeriet. Vin använder sin tur på förbindelsetjänstemannen, fader Leid, för att han inte ska avvisa Camons krav.', season: 'Vår', year: '1021 FE' },
			'tfe-2': { title: 'Ministeriebluffet', description: 'Camon förklädd till lord Jedue tar med Vin till finanskansliet för att lura ministeriet. Vin använder sin tur på ärkefadern som lämnar över tre tusen boxingar till Camon. Kelsier och Dockson i väntrummet känner av Vins allomantiska pulser. Sedan ser de en stålinkvisitor följa Camons följe.', season: 'Vår', year: '1021 FE' },
			'tfe-4': { title: 'Värvad', description: 'Kelsier presenterar sin plan för att störta Sista riket för laget i Clubs verkstad. Laget går med utom Clubs som lämnar och sedan återvänder. Kelsier avslöjar att Vin är dimfödd och visar den elfte metallen.', season: 'Vår', year: '1021 FE' },
			'tfe-7': { title: 'Dimföddträning', description: 'Kelsier tar med Vin på första nattens träning och ger henne en dimmantel. Han lär henne de åtta grundmetallerna — tenn, tervitt, järn, stål, zink, mässing, koppar och brons — och avslutar vid Luthadels murar.', season: 'Sen vår', year: '1021 FE' },
			'tfe-8': { title: 'Renoux egendom', description: 'Vin och Kelsier hoppar över Luthadels murar på natten och Vin möter en dimgast för första gången. Sazed väntar med en vagn på vägen och kör dem till Fellise. Kelsier erbjuder Vin tre tusen boxingar och möjligheten att gå. Hon tar pengarna men stannar. På lord Renoux egendom föreslås hon spela lady Valette.', season: 'Sommar', year: '1021 FE' },
			'tfe-9': { title: 'Träning med Sazed', description: 'Vin och Kelsier sparrar på Renoux egendom. Vin klipper håret, Sazed testar hennes adelsförklädnad och berättar om trellagismen. Kelsier och Sazed diskuterar Vins framsteg i enrum; Kelsier meddelar att de ska gå på bal i Venturefästet i helgen.', season: 'Sommar', year: '1021 FE' },
			'tfe-10': { title: 'Tillbaka med laget', description: 'Vin återvänder till Luthadel från Fellise för att lära sig om metaller av lagets dimmän, börjar med Breeze som lär henne betvingning. Hammond anländer och diskuterar det moraliska i att störta riket.', season: 'Sommar', year: '1021 FE' },
			'tfe-10.2': { title: 'Lagersamlingen', description: 'Vin deltar i den hemliga samlingen där Kelsier talar till skaarbetare. Efteråt håller Kelsier möte i Clubs butik. Vin och Lestibournes pratar om Marsh. Mötet slutar när Hammonds soldat rapporterar att ministeriet hittat Camons gamla gömställe.', season: 'Sommar', year: '1021 FE' },
			'tfe-11': { title: 'Massakern i Camons gömställe', description: 'Vin och laget undersöker det förstörda gömstället; lik överallt. Vin ser Ulef — någon slet ut hans bröstkorg med bara händerna. Sazed ber en bön ur katzi-religionen. Milevs kropp är bunden till en stol, tydligt torterad.', season: 'Sommar', year: '1021 FE' },
			'tfe-12': { title: 'Första balen vid Venturefästet', description: 'Vin går på sin första bal i Venturefästet med Sazed som kusk. Kelsier dyker upp på vägen, ger råd och försvinner i dimman. Vin presenteras som lady Valette Renoux. Vid middagen ser hon sin far tvärs över salen. Hon avböjer dans och drar sig tillbaka till ett balkong på övervåningen där hon har sin första konversation med Elend Venture.', season: 'Sommar', year: '1021 FE' },
			'tfe-13': { title: 'Tillbaka i Fellise', description: 'Sazed frågar ut Vin om hennes möte med Elend på Renoux egendom. Vins verkliga personlighet börjar visa sig. Kelsier får reda på att Vins far var på balen och återvänder i dimman.', season: 'Sommar', year: '1021 FE' },
			'tfe-14': { title: 'Inne i Kredik Shaw', description: 'Kelsier tar med Vin till Kredik Shaw och de slåss sig in. Vin dödar för första gången. Tre stålinkvisitorer omringar dem. Vin greppar en läderbok för att försvara sig. Bränner atium och flyr temporärt, men en inkvisitor hugger en obsidianyx i hennes sida. Hon flyr med boken men förlorar medvetandet — något distraherar den förföljande inkvisitorn och omsluter henne skyddande. Det var inte Kelsier.', season: 'Sommar', year: '1021 FE' },
			'tfe-15': { title: 'Skadad', description: 'Laget ifrågasätter Kelsiers beslut. Sazed bär in Vin. De ger henne tervitt för att hjälpa läkningen. Sazed opererar och Hammond bär henne till ett rum för vila. De lägger märke till boken; Sazed bekräftar att den är skriven på khlenni.', season: 'Sommar', year: '1021 FE' },
			'tfe-16': { title: 'Återhämtning i Clubs butik', description: 'Vin vaknar efter två veckor i Clubs butik. Spook har vakat över henne och berättar hur Kelsier gav honom hans smeknamn. I samtal med Dockson inser Vin att det finns något mycket ovanligt med Sazed.', season: 'Sommar', year: '1021 FE' },
			'tfe-16.2': { title: 'Tillbaka i Fellise', description: 'Efter ytterligare dagars vila återvänder Vin till Renoux egendom i Fellise. Hon talar med Sazed som förklarar vad Väktarna är och avslöjar att alla terrisiska tjänare kastrerats.', season: 'Sommar', year: '1021 FE' },
			'tfe-17': { title: 'Renoux egendomens trädgård', description: 'Vin klagar på fyra tråkiga veckors konvalescens på Renoux egendom. Lagmedlemmar anländer för att diskutera nyheter. Vin övertygar Kelsier att låta henne gå på nästa bal. Senare talar de om Mare, Kelsiers drivkrafter, och "knäppet" — det traumatiska ögonblick som väcker allomantiska krafter.', season: 'Sommar', year: '1021 FE' },
			'tfe-18': { title: 'Balen vid Elarielfästet', description: 'Vin går på bal i Elarielfästet med Sazed. Elend sätter sig vid hennes bord och läser som vanligt. Han berömmer hennes klänning och hon blir svarslös. Hon dansar med flera adelsmän och frågar om Elend; hör talas om lady Shan Elariel. Märker att Shan är en betvingare. När hon lämnar balen ser Vin en vakt skära halsen av en ung skakokkpojke i dimman.', season: 'Sommar', year: '1021 FE' },
			'tfe-19': { title: 'Tillbaka i Fellise', description: 'Kelsier återvänder till Renoux herrgård via Törnvägen och möter Vin, Sazed och Renoux. Han predikar för Vin om adeln, hävdar att de inte bryr sig om ska, och att hon måste hålla sig borta från Elend Venture.', season: 'Sensommar', year: '1021 FE' },
			'tfe-20': { title: 'Sökarens lektioner', description: 'Vin återvänder från Luthadel och finner vapenlådor framför Renoux herrgård redo för rebellerna. Marsh anländer och lär henne sökning — att använda brons för att upptäcka andra allomanter — och ytterligare detaljer om allomanti.', season: 'Sensommar', year: '1021 FE' },
			'tfe-22': { title: 'Dagboken', description: 'Vin läser sin kopia av Härskarens dagbok på Renoux egendom när Spook dyker upp. Han säger att Dockson kom för att hämta fler vapen, rodnar och sträcker fram en näsduk och springer iväg. Sazed förklarar senare att en ung mans gåva av en näsduk uttrycker seriös uppvaktning. Medan de väntar på Dockson talar Vin med Sazed om terriserna i dagboken; Sazed avslöjar ferokemins hemligheter och Väktarnas grundande. Sedan talar Vin med Dockson som berättar hur lord Devinshae tog kvinnan han älskade och dödade henne nästa morgon.', season: 'Höst', year: '1021 FE' },
			'tfe-23': { title: 'Balen vid Hastingsfästet', description: 'Vin går på bal vid Hastingsfästet. Lady Shan ber Vin inspektera Elends böcker nästa gång. Vin hittar Elend och frågar om han varit med en skakvinna. Han erkänner att hans far tvingade honom vid tretton och kvinnan dödades efteråt. Elend ger henne en näsduk. Efter att han och hans vänner lämnat följer Vin dem allomantiskt till ett torn där de diskuterar Härskarens misslyckanden. Kelsier dyker plötsligt upp och hånar deras idéer.', season: 'Höst', year: '1021 FE' },
			'tfe-24': { title: 'Lagmöte', description: 'Vin och Kelsier anländer till Clubs butik där det mesta av laget samlats. Kelsier diskuterar uppdragets läge och Vin inser hur mycket hon gillar sitt nya liv. Kelsier, Spook, Hammond och Clubs delar en nattlig drink.', season: 'Höst', year: '1021 FE' },
			'tfe-24.2': { title: 'Garnisonbesök', description: 'Vin klär ut sig till gatpojke och går med Hammond till Luthadels garnison för att lära sig om tervitt. Hammond förklarar att många soldater är vanliga skamänniskor. En vakt vid namn Sertts meddelar dem att garnisonen mobiliseras — skarebeller har attackerat Holsteps garnison i norr.', season: 'Höst', year: '1021 FE' },
			'tfe-25': { title: 'Brådskande nyheter', description: 'I Clubs butik kommer Hammond med budet att Luthadels garnison marscherat mot Holstep. Kelsier får Vin att svälja fem tennkulor för att springa norrut och varna rebellarmén.', season: 'Sen höst', year: '1021 FE' },
			'tfe-25.2': { title: 'Tennlöpning', description: 'Vin och Kelsier springer i sexton timmar medan de bränner tenn i en desperat löpning. De finner rebellarméns rester belägrade och slaktade av Valtroux garnison. Kelsier vill slåss, Vin övertygar honom att de inte är osårbara. De fortsätter till Arguois grottor där två tusen soldater överlevt tack vare Mennis.', season: 'Sen höst', year: '1021 FE' },
			'tfe-26': { title: 'Återhämtning', description: 'Vin ligger uttröttad i Clubs butik. Det tog två veckor att ta sig tillbaka till Luthadel. Kelsier stormar in; Breeze anklagar honom. Kelsier erkänner bakslaget men vägrar ge upp.', season: 'Sen höst', year: '1021 FE' },
			'tfe-26.2': { title: 'Avrättningar', description: 'Spook meddelar om avrättningar på Fontäntorget. Laget beger sig till taken. Vin pekar ut sin far — en förbindelsetjänsteman vid namn Tevidian, lord prelaten, och högsta förbindelsetjänstemannen. De ser kvinnor och barn dras ur fångvagnarna och avrättas, fontänen röd av blod.', season: 'Sen höst', year: '1021 FE' },
			'tfe-27': { title: 'Planerar nästa steg', description: 'Laget återvänder till Clubs butik. Kelsier, Vin och de andra omarbetar planen för att driva på huskriget. Sazed anländer med Marshs brev och mötesplats.', season: 'Vinter', year: '1021 FE' },
			'tfe-27.2': { title: 'Möte med Marsh', description: 'Kelsier och Vin beger sig till en övergiven byggnad i Vrånggatorna för att möta Marsh. Under väntan berättar Kelsier om guld. Marsh anländer med en lägre förbindelsetjänstemans tatuering vid Inkvisitionsdivisionen. Han avslöjar att ministeriet placerar betvingare i skadistrikten under ständig betvingning, dolda av rökare. Bekräftar även att inkvisitorer kan dö av ålder.', season: 'Vinter', year: '1021 FE' },
			'tfe-28': { title: 'Balen vid Likalfästet', description: 'Vin deltar i balen vid Likalfästet och börjar sprida rykten för att trappa upp huskriget. Elend dyker upp — säger att han vill kyssa henne, men Vin insisterar på att han inte verkligen känner henne. Under en promenad avslöjar Elend att Ventures förmögenhet helt kommer från atiumbrytning i Hatshins gropar. Han nämner att hus Tekiel utplånades av hus Hastings och försöker övertala Valette att lämna Luthadel.', season: 'Vinter', year: '1021 FE' },
			'tfe-29': { title: 'Sista översättningen', description: 'Vin läser Sazeds sista dagboksöversättning på Renoux egendom och är frustrerad över att det inte finns mer. Sazed förklarar ferokemi i mer detalj och Vin försöker bränna en av hans tennsinnen. Kelsier ansluter sig senare för att studera Marshs karta. De upptäcker att Therons liga anfallits och Vin misstänker att inkvisitorerna fortfarande spårar henne.', season: 'Vinter', year: '1021 FE' },
			'tfe-30': { title: 'Venturebalen', description: 'Vin och Sazed går på den sista husbalen vid Venturefästet. Fröken Kliss avslöjas som informatör och försöker utpressa hus Renoux. Mot ett safirblått halsband berättar Kliss för Vin att Elariels lönnmördare ska försöka döda Elend ikväll. Vin tvingar Kliss allomantiskt att berätta allt. Hon krossar ett fönster av färgat glas för att ta sig ut. Utanför möter hon grovhuggare, myntskjutare och två dimfödda — varav en är Shan Elariel. Vin lurar Shan att bränna upp sitt atium först och dödar sedan henne.', season: 'Vinter', year: '1021 FE' },
			'tfe-31': { title: 'Efter duellen', description: 'Vin klampar in i Clubs kök bandagerad och i trasor. Kelsier tillrättavisar henne för att ha räddat Elend, men Vin skriker att ska och adel inte skiljer sig — Elend är en god människa. På taket berättar Vin att hus Venture driver Hatshins gropar och delar sin teori att inkvisitorer kan se genom kopparmolnet. Kelsier testar och bekräftar.', season: 'Vinter', year: '1021 FE' },
			'tfe-32': { title: 'Takvakt', description: 'Vin och Spook vaktar på taket ovan Clubs butik. Spook lär henne tennknep: inte bara förstärka sinnen utan filtrera bort distraktioner. Senare hittar Kelsier och Vin Marshs kropp — helt tömd på blod. De finner ett brev som förklarar att inkvisitorerna troligen hittar honom.', season: 'Vinter', year: '1021 FE' },
			'tfe-33': { title: 'Nödgömstället', description: 'Laget flyttar till en fuktig reservkällare nära Clubs butik — tre rum. Kelsier meddelar att Hatshins gropars atium är förstört. Spook vakar som tennvakt.', season: 'Tidig vår', year: '1022 FE' },
			'tfe-33.2': { title: 'Strid med inkvisitorn', description: 'Alla följer Kelsier till Fontäntorget. De ser Spook och lord Renoux i en avrättningskärra. Kelsier strider mot en inkvisitor på torget. Elend ser Renoux tjänare inspärrade och ropar efter Valette men hittar henne inte.', season: 'Tidig vår', year: '1022 FE' },
			'tfe-34': { title: 'Överlevarens död', description: 'Kelsier strider mot inkvisitorn i fullskalig kamp vid Fontäntorget — båda bränner atium. Vin tittar uppifrån: Kelsier är en sann mästare på knuff och drag. Han dödar inkvisitorn och skafolket ropar "Överlevaren från Hathsin". Härskaren anländer i en svart vagn. Kelsier dödas. Vin hoppar ner och håller om honom medan han dör.', season: 'Tidig vår', year: '1022 FE' },
			'tfe-35': { title: 'Överlevarens arv', description: 'Vin återvänder till nödgömstället. Arg för att Kelsier inte var ärlig — planerade att dö och lämna henne. Sazed tröstar. Utanför talar skafolket om Dimmans herre. I ett närliggande lager ser laget kandran i Kelsiers gestalt. Kelsier lämnade brev med instruktioner för att ta staden. Vins brev säger att han aldrig löste den elfte metallens gåta. Hon bestämmer sig för att ta reda på vad Härskaren döljer.', season: 'Tidig vår', year: '1022 FE' },
			'tfe-36': { title: 'Inne i Kredik Shaw', description: 'Vin går tyst mot Kredik Shaw och uppmuntrar vakterna utanför att ansluta sig till upproret. Innanför dödar hon två inkvisitorer. I nästa rum sitter en gammal man i en stol. En inkvisitor greppar Vins hals — den gamle mannen talar och inkvisitorerna kallar honom Härskaren. Men Vin är förvirrad: Härskaren på Fontäntorget var ung. Hon bränner den elfte metallen och ser två spöklika figurer vid den gamles sida.', season: 'Tidig vår', year: '1022 FE' },
			'tfe-37': { title: 'Räddning och avslöjande', description: 'Inkvisitorerna tvingar Vin att bränna en metall som motverkar alla andra metaller. Hon förs inför Härskarens tron — den unga versionen som dödade Kelsier. Hennes far Tevidian, högste förbindelsetjänstemannen, avrättas av inkvisitorerna. Vin upptäcker att Reen aldrig förrådde henne: han uthärdade tortyr och sade till inkvisitorerna att hon svalt ihjäl. Sazed förs till hennes cell och löser sin ferokemiska kraft för att krossa dörren. Elend och sex soldater stormar in. Vin hittar sin mantel och metallficka. Elend vet nu att hon är dimfödd. Hon tar hans ansikte i sina händer, kysser honom, och rusar iväg för att döda Härskaren.', season: 'Tidig vår', year: '1022 FE' },
			'tfe-38': { title: 'Härskarens bane', description: 'Vin hoppar mellan Kredik Shaws spiror uppåt. Inkvisitor Kar greppar hennes hals men en annan inkvisitor drar en metallspik ur Kars nacke och dödar honom omedelbart. Det är Marsh — levande, med elva spikar i kroppen. Han dödade alla andra inkvisitorer. Härskarens verkliga namn är Rashek: han mördade Tidernas hjälte och tog hans plats. Vin sliter av Härskarens armband. Utan sin ferokemiska ungdom blir han en svag gammal man. Sazed dyker upp med en metallficka. Vin stöter ett spjut genom hans hjärta. Tusen år av förtryck tar slut.', season: 'Tidig vår', year: '1022 FE' },
			'tfe-39': { title: 'En ny era', description: 'Sazed, Marsh och Vin står på ett tak nära skadistriktet. Sazed förklarar att Härskaren var både ferokemist och allomant — armbanden lagrade hans ungdom. Marsh beskriver sin överlevnad och förvandling: elva metallspikar — två genom ögonen, åtta i bröstet, en i ryggen. Han berättar också om kandrorna — varelser som utvecklats från dimgastar — som nu ser Vin som sin härskarinna.', season: 'Vår', year: '1022 FE' },
			'tfe-39.2': { title: 'Vin och Elend', description: 'Vin observerar Elend i hemlighet från dimman utanför Venturefästet. Hans möte med ska- och adelsledare gick bra — efter ett magnifikt tal som inte ens Sazed utan sina metaller kunde memorera helt, accepterade alla honom som kung. Elend skriver ner rikets nya lag. Vin minns att Reen aldrig förrådde henne: det finns människor som verkligen älskar henne. Med det minnet springer hon till Elend och de omfamnar varandra.', season: 'Vår', year: '1022 FE' },
		},
		sazed: {
			...enData.movements.sazed,
			'tfe-9': { title: 'Terrisisk tjänare', description: 'Sazed anländer till lord Renoux egendom i Fellise som Vins lärare och tjänare, undervisar i etikett, dans och uppträdande. Han presenterar trellagismen — den femte religionen han föreslår — och erkänner att han kan 562 till.', season: 'Sommar', year: '1021 FE' },
			'tfe-10.2': { title: 'Lagersamlingen', description: 'Sazed deltar i den hemliga lagersamlingen med Kelsier och Vin, och ser Överlevaren tala till skaarbetarna.', season: 'Sommar', year: '1021 FE' },
			'tfe-12': { title: 'Väktaren på balen', description: 'Sazed följer med Vin som tjänare till den första balen i Venturefästet och vakar över henne medan hon smyger sig in i adelns sällskapsliv.', season: 'Sommar', year: '1021 FE' },
			'tfe-13': { title: 'Avrapportering i Fellise', description: 'Sazed återvänder till Renoux egendom i Fellise med Vin och Kelsier för att gå igenom resultaten av Vins första bal och planera nästa steg.', season: 'Sommar', year: '1021 FE' },
			'tfe-15': { title: 'Räddar Vin', description: 'Sazed bär Vin till Clubs butik för att rädda och behandla henne efter skadorna vid Kredik Shaw. Han undersöker också boken skriven på khlenni.', season: 'Sommar', year: '1021 FE' },
			'tfe-16': { title: 'Tillbaka i Fellise', description: 'Efter att ha stabiliserat Vins tillstånd i Clubs butik återvänder Sazed till Renoux egendom i Fellise.', season: 'Sommar', year: '1021 FE' },
			'tfe-17': { title: 'Översätter khlenniboken', description: 'I bibliotekets på Renoux egendom i Fellise arbetar Sazed med att översätta den khlenni-skrivna boken som Vin förde med sig från Kredik Shaw.', season: 'Sommar', year: '1021 FE' },
			'tfe-18': { title: 'Väktaren vid Elariel', description: 'Sazed följer med Vin som terrisisk tjänare till balen vid Elarielfästet och vakar över henne mitt i det adliga hovet.', season: 'Sommar', year: '1021 FE' },
			'tfe-19': { title: 'Informationsutbyte', description: 'Sazed finns på Renoux herrgård när Kelsier återvänder via Törnvägen. De utbyter information om adelshusen och upprorets framsteg medan Kelsier föreläser Vin om att hålla sig borta från Elend.', season: 'Sensommar', year: '1021 FE' },
			'tfe-22': { title: 'Ferokemins hemligheter', description: 'På Renoux egendom talar Sazed med Vin om terriserna i Härskarens dagbok. Han avslöjar ferokemins hemligheter och hur Väktarna grundades efter att terrisiska religioner gick förlorade. Från dagboken lär han sig också nya fakta om sitt folk — att jorden en gång var grön och bördig.', season: 'Höst', year: '1021 FE' },
			'tfe-23': { title: 'Väktaren vid Hastings', description: 'Sazed följer med Vin som terrisisk tjänare till balen vid Hastingsfästet och väntar medan hon sprider rykten och umgås med adeln.', season: 'Höst', year: '1021 FE' },
			'tfe-27': { title: 'Brev från Marsh', description: 'Sazed återvänder till Clubs butik med ett brev från Marsh som innehåller nyheter och mötesanvisningar. Han har även med sig översättningar av Härskarens dagbok.', season: 'Vinter', year: '1021 FE' },
			'tfe-28': { title: 'Väktaren vid Likal', description: 'Sazed följer med Vin som terrisisk tjänare till balen vid Likalfästet och väntar medan hon trappar upp huskriget och talar med Elend.', season: 'Vinter', year: '1021 FE' },
			'tfe-29': { title: 'Ferokemlektioner', description: 'På Renoux egendom ger Sazed Vin den sista dagboksöversättningen. Han förklarar ferokemi mer i detalj och Vin försöker bränna ett av hans tennsinnen. Senare ansluter sig Sazed när Kelsier studerar Marshs detaljerade karta. Den natten ber Kelsier Sazed berätta om religioner.', season: 'Vinter', year: '1021 FE' },
			'tfe-30': { title: 'Väktaren vid Venture', description: 'Sazed följer med Vin till den sista husbalen vid Venturefästet. Gästerna bildar allianser och lady Valette blir kyligt mottagen. Sazed lämnar balen innan Vin upptäcker mordkomplotten mot Elend och strider mot Shan Elariel.', season: 'Vinter', year: '1021 FE' },
			'tfe-31': { title: 'Behandlar Vins skador', description: 'Sazed behandlar Vins skador i Clubs butik efter att hon anlänt skadad från sin strid med Shan Elariel och Elariels mördare. Han lyssnar medan Vin berättar om nattens händelser.', season: 'Vinter', year: '1021 FE' },
			'tfe-33': { title: 'Nödgömstället', description: 'Sazed är med laget i reservkällaren nära Clubs butik efter Kelsiers förstörelse av Hatshins gropar. Vin talar med Sazed om den elfte metallen. När skamänniskor förs till Fontäntorget för avrättning och Spook dyker upp i en fångvagn, stannar Sazed i gömstället medan Kelsier strider mot inkvisitorn.', season: 'Tidig vår', year: '1022 FE' },
			'tfe-35': { title: 'Tröstar Vin', description: 'Sazed stannar hos Vin i nödgömstället efter Kelsiers död. Han erbjuder tröstande ord medan Vin rasar över att Kelsier övergett henne. Han stannar kvar när laget går till lagret för att se kandran i Kelsiers gestalt.', season: 'Tidig vår', year: '1022 FE' },
			'tfe-37': { title: 'Den befriade ferokemisten', description: 'Sazed förs till Vins cell i Kredik Shaw. Han verkar krympa, sedan sväller hans muskler till dubbel storlek när han frigör sin lagrade ferokemiska kraft och krossar dörren.', season: 'Tidig vår', year: '1022 FE' },
			'tfe-38': { title: 'Rikets fall', description: 'Sazed dyker upp vid den sista konfrontationen i Kredik Shaw med en metallficka till Vin. Han bevittnar Härskarens fall — när Vin sliter av hans armband åldras han dramatiskt.', season: 'Tidig vår', year: '1022 FE' },
			'tfe-39': { title: 'Förståelse av tyrannen', description: 'Sazed står med Vin och Marsh på ett tak nära skadistriktet. Han förklarar att Härskaren var både ferokemist och allomant — armbanden lagrade ungdom. Han spekulerar i att det var därför alla terrisiska tjänare kastrerades: Härskaren fruktade att någon med både ferokemiskt och allomantiskt blod skulle utmana hans odödlighet.', season: 'Vår', year: '1022 FE' },
		},
		elend: {
			...enData.movements.elend,
			'tfe-12': { title: 'Den läsande adelsmannen', description: 'Elend Venture märker att Vin står ensam på en balkong under balen i hans eget fäste och närmar sig. Han irriterar henne genom att plocka fram "Märkenas prövningar" för att läsa medan resten av adeln dansar och intrigerar.', season: 'Sommar', year: '1021 FE' },
			'tfe-18': { title: 'Kväll med Valette', description: 'Elend deltar i balen vid Elarielfästet och sätter sig som vanligt vid Vins bord för att läsa. Han berömmer hennes klänning och hon blir svarslös.', season: 'Sommar', year: '1021 FE' },
			'tfe-23': { title: 'Näsduken', description: 'Elend hittar Vin vid balen på Hastingsfästet. Hon frågar om han varit med en skakvinna. Han erkänner att hans far tvingade honom vid tretton och kvinnan dödades efteråt. Han ger henne en näsduk som tecken på seriös uppvaktning. Efter att han och hans vänner lämnat klättrar de upp i ett torn för att diskutera Härskarens misslyckanden.', season: 'Höst', year: '1021 FE' },
			'tfe-28': { title: 'Balen vid Likalfästet', description: 'Elend dyker upp framför Vin vid Likalfästets bal. Säger att han vill kyssa henne men Vin insisterar att han inte känner henne. Under en promenad avslöjar han att Ventures förmögenhet helt kommer från atium i Hatshins gropar — full tillit. Han nämner att hus Tekiel utplånades av hus Hastings och försöker övertala Valette att lämna Luthadel.', season: 'Vinter', year: '1021 FE' },
			'tfe-28.2': { title: 'Faderns kallelse', description: 'Elend återvänder till Venturefästet och försöker smyga förbi sin fars rum. Lord Straff Venture — en tenndimmägare som inte missar något — ropar på honom. Straff beordrar middag med hus Hastings. Senare avslöjar Jastes att han följde Valettes vagn — hon anlände till Fellise bara med terrisern, och Valette försvann. Elend inser att han avslöjat atiumhemligheten och erbjuder sin far en överenskommelse: han går på middagen i utbyte mot spioner som bevakar Valette.', season: 'Vinter', year: '1021 FE' },
			'tfe-30': { title: 'Venturebalen', description: 'Elend äter med sin far på Venturefästet under balen. Vin fångar hans uppmärksamhet och de konfronterar varandra. Vin får reda på mordkomplotten mot Elend och rusar ut i dimman. Natten slutar i kaos när Vin strider mot och dödar lady Shan. Elend smyger därifrån i förvirringen.', season: 'Vinter', year: '1021 FE' },
			'tfe-31': { title: 'Spionrapporter', description: 'Elend och Jastes möter Felt som rapporterar allt Elends spioner funnit om Clubs butik och dess invånare. Sedan leder Venturevakter Elend till hans far Straff som avslöjar att Shan Elariel var en dimfödd skickad att mörda Elend.', season: 'Vinter', year: '1021 FE' },
			'tfe-33': { title: 'Avrättningsvagnar', description: 'Elend ser Renoux tjänare inspärrade i en avrättningsvagn på Fontäntorget. Han ropar efter Valette men hittar henne inte i folkmassan.', season: 'Tidig vår', year: '1022 FE' },
			'tfe-34': { title: 'Kelsier räddar Elend', description: 'Elend tar sig till Renoux bur på Fontäntorget och frågar efter Valette. En inkvisitor landar på buren och ska hugga Elend med sin yxa när Kelsier anfaller inkvisitorn och räddar hans liv. Kelsier ropar till Elend att Valette är säker.', season: 'Tidig vår', year: '1022 FE' },
			'tfe-36': { title: 'Venturehusets makt', description: 'Elends far meddelar att ett skauppror brutit ut och vill fly Luthadel. Elend vägrar lämna. Straff går med på det — hoppas att Elend dör — och överlåter Venturehusets befäl. Elend beordrar soldaterna till Likalfästet för gemensamt försvar och tar fem av sina bästa soldater för att möta skaledarna.', season: 'Tidig vår', year: '1022 FE' },
			'tfe-37': { title: 'Räddar Vin', description: 'Elend ger guld till skamän i utbyte mot att bli ledda till Dockson och meddelar att hus Venture inte kommer att motstå upproret — de bör samarbeta. Elend och sex soldater stormar Kredik Shaw för att rädda Vin. Hemligheten avslöjas — han vet att hon är dimfödd. Vin tar hans ansikte i sina händer, kysser honom, och rusar iväg för att döda Härskaren.', season: 'Tidig vår', year: '1022 FE' },
			'tfe-38': { title: 'Filosofkungen', description: 'Efter Härskarens död framträder Elend som en samlande röst för ordning. Han börjar mötas med ska- och adelsledare för att utarbeta lagen för den nya staten.', season: 'Tidig vår', year: '1022 FE' },
			'tfe-39': { title: 'Den nye kungen', description: 'Elend Venture accepteras som kung av Centraldominansen efter ett magnifikt tal inför ska- och adelsledarna. Han sitter i Venturefästet och skriver den nya lagen. Vin observerar honom i hemlighet genom fönstret inifrån dimman, springer sedan till honom — och de omfamnar varandra.', season: 'Vår', year: '1022 FE' },
		},
		marsh: {
			...enData.movements.marsh,
			'tfe-7': { title: 'Den motvillige brodern', description: 'Marsh anländer till Clubs butik — Kelsiers storebror och rebell i egen rätt. Han ansluter sig motvilligt till lagets plan.', season: 'Sen vår', year: '1021 FE' },
			'tfe-10.2': { title: 'Lagersamlingen', description: 'Marsh deltar i den hemliga lagersamlingen med laget och ser sin bror Kelsier tala till skaarbetarna.', season: 'Sommar', year: '1021 FE' },
			'tfe-20': { title: 'Undervisar Vin', description: 'Marsh anländer till Renoux egendom i Fellise för att lära Vin sökning — att använda brons för att upptäcka andra allomnater som bränner metaller, identifiera typen och skilja dimmän från dimfödda. Han lär henne också om koppar och rökares arbete.', season: 'Sensommar', year: '1021 FE' },
			'tfe-27': { title: 'Infiltrerar ministeriet', description: 'Marsh möter Kelsier och Vin i en övergiven byggnad i Vrånggatorna med en lägre förbindelsetjänstemans tatuering vid Inkvisitionsdivisionen. Han har verkligen infiltrerat ministeriet. Han avslöjar att ministeriet placerar betvingare i skadistrikten under ständig betvingning, dolda av rökare. Bekräftar också att inkvisitorer kan dö av ålder.', season: 'Vinter', year: '1021 FE' },
			'tfe-30': { title: 'Försvinnandet', description: 'Marsh tystnar och hans kommunikation upphör medan han försvinner djupt in i Inkvisitionsdivisionen. Laget fruktar det värsta.', season: 'Vinter', year: '1021 FE' },
			'tfe-32': { title: 'Kroppen', description: 'Kelsier och Vin hittar Marshs kropp helt tömd på blod — ett tomt skal. Hans brev som hittas senare förklarar att inkvisitorerna troligen hittar honom. Laget sörjer. Men den vanställda kroppen är inte vad den verkar.', season: 'Vinter', year: '1022 FE' },
			'tfe-38': { title: 'Inkvisitorn', description: 'Marsh dyker upp under det sista anfallet mot Kredik Shaw — levande, förvandlad av elva metallspikar: två genom ögonen, åtta i bröstet, och en i ryggen som binder dem. Han drar spiken ur Kars nacke och dödar honom omedelbart och avslöjar att han dödat alla andra inkvisitorer.', season: 'Tidig vår', year: '1022 FE' },
			'tfe-39': { title: 'Elva spikar', description: 'Marsh står med Sazed och Vin på ett tak nära skadistriktet. Han berättar om sin överlevnad och förvandling — elva spikar, den fruktansvärda processen och hur han uthärdade. Han berättar också om kandrorna — varelser som utvecklats från dimgastar — som spelat lord Renoux och nu erkänner Vin som sin härskarinna.', season: 'Vår', year: '1022 FE' },
		},
		spook: {
			...enData.movements.spook,
			'tfe-7': { title: 'Ung tenndimmägare', description: 'Spook, Clubs unge brorson, tjänar som lagets vakt och budbärare i snickarverkstaden och talar med en tjock östlig dialekt.', season: 'Sen vår', year: '1021 FE' },
			'tfe-9': { title: 'Budbärarturer', description: 'Spook springer meddelanden mellan Clubs butik i Luthadel och Renoux egendom i Fellise; hans tennförstärkta sinnen gör honom till en utomordentlig spejare.', season: 'Sommar', year: '1021 FE' },
			'tfe-16': { title: 'Vakar över Vin', description: 'Lestibournes vakar över den skadade Vin i Clubs butik och är där när hon vaknar från Kredik Shaw-spaningens skador. Han berättar hur Kelsier gav honom ett nytt namn: Spook.', season: 'Sommar', year: '1021 FE' },
			'tfe-22': { title: 'Näsduken', description: 'Spook besöker Renoux egendom i Fellise och hittar Vin som läser Härskarens dagbok. Han säger att Dockson kom för att hämta vapen, rodnar och sträcker fram en näsduk och flyr. Sazed förklarar senare att den unge mannens gåva uttrycker seriös uppvaktning.', season: 'Höst', year: '1021 FE' },
			'tfe-24': { title: 'Natt i Clubs butik', description: 'Spook delar en nattlig drink med Kelsier, Hammond och Clubs i Clubs butik medan de diskuterar uppdragets läge.', season: 'Höst', year: '1021 FE' },
			'tfe-26': { title: 'Avrättningarna', description: 'Spook stormar in i Clubs butik och meddelar om avrättningar på Fontäntorget. Följer med laget till torget där de bevittnar den brutala offentliga avrättningen av skakvinnor och barn, blod som strömmar i fontänen.', season: 'Sen höst', year: '1021 FE' },
			'tfe-32': { title: 'Takvakt', description: 'Spook vaktar på taket ovan Clubs butik med Vin och lär henne tennknep. Han förklarar att det inte bara handlar om att förstärka sinnen utan om att filtrera det som är viktigt och inte låta sig distraheras av resten.', season: 'Vinter', year: '1022 FE' },
			'tfe-33': { title: 'Den tillfångatagne vakten', description: 'När laget beger sig till Fontäntorget ses Spook i en avrättningsvagn bredvid lord Renoux — fångad av ministeriet.', season: 'Tidig vår', year: '1022 FE' },
			'tfe-34': { title: 'Vittne till offret', description: 'Spook bevittnar från folkmassan hur Kelsier strider och dör vid Fontäntorget — en händelse som präglar resten av hans liv. Överlevarens uppoffring förändrar Spooks förståelse av vad det innebär att tjäna en sak.', season: 'Tidig vår', year: '1022 FE' },
			'tfe-38': { title: 'Revolutionen', description: 'Spook strider sida vid sida med laget under den slutliga revolutionen och hjälper till att samordna skaupproret på Luthadels gator.', season: 'Tidig vår', year: '1022 FE' },
		},
	},

	markerLabels: {
		capital: 'Dominansens säte',
		city: 'Stad',
		ashmount: 'Askberg', // "Ashmount" is "Askberg" [1]
		landmark: 'Landmärke',
		stronghold: 'Fäste',
		hideout: 'Gömställe',
		mine: 'Fängelsegruva',
		mystical: 'Helig plats',
		town: 'Samhälle',
		village: 'Skaa-by',
		river: 'Vattenväg',
		industrial: 'Förrådspost',
		region: 'Region',
		keep: 'Adelsborg',
		palace: 'Palats',
		plantation: 'Plantage',
		district: 'Distrikt',
		estate: 'Adelsgods',
	},

	cityMarkerLabels: {
		gate: 'Stadsport',
		keep: 'Adelsborg',
		palace: 'Palats',
		district: 'Kvarter',
		shop: 'Handlare',
		safehouse: 'Säker plats',
		landmark: 'Sevärdhet',
		canal: 'Kanal',
		ministry: 'Ministerium',
		plaza: 'Torg',
	},
};
