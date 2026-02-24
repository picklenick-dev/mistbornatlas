/**
 * Swedish data translations.
 * Sources: Official Modernista editions (Books 1–2), translated by Lottie Eriksson.
 * Note: Book 3 (The Hero of Ages) is officially untranslated in Swedish.
 */
import type { DataTranslations } from '../types';

export const svData: DataTranslations = {
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
			description: 'Straff Ventures militärläger söder om Luthadel under belägringen.',
			confidence: 'unconfirmed',
		},
		'koloss-camp': {
			name: 'Koloss-lägret',
			description: 'Koloss-arméns position norr om Luthadel under belägringen.',
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
		vin: {
			'tfe-1': {
				title: 'Gatuunge',
				description:
					'Vin arbetar som utkik åt Camons tjuvgäng i Luthadels slumkvarter och använder sina okända allomantiska förmågor för att subtilt påverka dem omkring henne.',
				season: 'Vår',
				year: '1021 FE',
			},
			'tfe-2': {
				title: 'Ministeriebluffen',
				description:
					'Vin följer med Camons gäng på en högriskbluff vid Kantonaten för Finans, där hennes allomantiska pulser väcker Kelsiers uppmärksamhet.',
				season: 'Vår',
				year: '1021 FE',
			},
			'tfe-4': {
				title: 'Rekryterad',
				description:
					'Efter att Kelsier räddar Vin från Camons misshandel förs hon till Clubs snickarverkstad — gängets högkvarter — och introduceras till planen att störta Överstehärskaren.',
				season: 'Vår',
				year: '1021 FE',
			},
			'tfe-7': {
				title: 'Dimföddträning',
				description:
					'Kelsier tar med Vin till stadsmurarna nära Stålporten för hennes första riktiga allomansiträning och lär henne att bränna stål och järn bland de mörka taken.',
				season: 'Sen vår',
				year: '1021 FE',
			},
			'tfe-8': {
				title: 'Godset Renoux',
				description:
					'Vin reser västerut till Fellise för att påbörja sin täckmantel som Lady Valette Renoux vid Lord Renoux lantegendom och förbereda sig för infiltrationen av det adliga samhället.',
				season: 'Sommar',
				year: '1021 FE',
			},
			'tfe-9': {
				title: 'Träning med Sazed',
				description:
					'Under Sazeds handledning på godset Renoux lär sig Vin den etikett, dans och hållning som krävs för att passera som en adelskvinna på de stora husens baler.',
				season: 'Sommar',
				year: '1021 FE',
			},
			'tfe-10': {
				title: 'Tillbaka till gänget',
				description:
					'Vin återvänder till Luthadel från Fellise och ansluter sig till gänget i Clubs verkstad. Kelsier tar med henne på en nattlig allomantisk löptur genom staden för att driva hennes träning vidare.',
				season: 'Sommar',
				year: '1021 FE',
			},
			'tfe-10.2': {
				title: 'Lagermötet',
				description:
					'Vin deltar i ett hemligt möte där Kelsier predikar revolution för samlade skaaarbetare i ett dolt lager.',
				season: 'Sommar',
				year: '1021 FE',
			},
			'tfe-11': {
				title: 'Massakern i Camons Gömställe',
				description:
					'Vin och gruppen upptäcker efterdöningarna av en brutal attack på Camons gamla gömställe — Ministeriet har dödat alla därinne som hämnd för bedrageri mot Finanskantonet.',
				season: 'Sommar',
				year: '1021 FE',
			},
			'tfe-13': {
				title: 'Första balen på Borg Venture',
				description:
					'Vin deltar i sin första bal som Lady Valette Renoux och träder in i adelns glittrande värld. Hon möter Elend Venture som sitter ensam och läser i ett hörn.',
				season: 'Sommar',
				year: '1021 FE',
			},
			'tfe-14': {
				title: 'Spaning på Kredik Shaw',
				description:
					'Vin och Kelsier gör en djärv nattlig rekognosering av Överstehärskarens palats och hoppar mellan de Tusen Spirorna för att kartlägga dess försvar.',
				season: 'Sommar',
				year: '1021 FE',
			},
			'tfe-16': {
				title: 'Bal på Borg Elariel',
				description:
					'Vin deltar i en bal på Hus Elariel, samlar underrättelser om de adliga husen och deras allianser medan hon fördjupar sin täckidentitet.',
				season: 'Sommar',
				year: '1021 FE',
			},
			'tfe-19': {
				title: 'Växande närhet',
				description:
					'På ännu en bal vid Borg Venture fördjupas Vins relation med Elend trots hennes uppdrag. Hon dansar på taken efteråt.',
				season: 'Sensommar',
				year: '1021 FE',
			},
			'tfe-22': {
				title: 'Loggboken',
				description:
					'Tillbaka i Clubs verkstad studerar Vin Överstehärskarens uråldriga loggbok och finner oroande hänvisningar till Djupet och profetian om Tidsåldrarnas hjälte.',
				season: 'Höst',
				year: '1021 FE',
			},
			'tfe-25': {
				title: 'Tennlöpningen',
				description:
					'När rebellarmén vid Holstep massakreras av garnisonstrupperna gör Vin en desperat tennlöpning — bränner tenn utan uppehåll i timmar — för att hjälpa till att rädda överlevande.',
				season: 'Senhöst',
				year: '1021 FE',
			},
			'tfe-26': {
				title: 'Återhämtning',
				description:
					'Vin återvänder till Clubs verkstad utmattad av tennlöpningen och återhämtar sig medan gänget samlar sig efter den förödande förlusten vid Holstep.',
				season: 'Senhöst',
				year: '1021 FE',
			},
			'tfe-30': {
				title: 'Huskriget trappas upp',
				description:
					'Huskriget intensifieras när adelshus vänder sig mot varandra. Vin inser att gängets manipulation fungerar men våldet bekymrar henne.',
				season: 'Vinter',
				year: '1021 FE',
			},
			'tfe-34': {
				title: 'Den överlevandes död',
				description:
					'Vin ser hjälplöst från taken när Kelsier slåss och dödas av Överstehärskaren på Fontäntorget och blir Den överlevande från Hathsin i döden.',
				season: 'Tidig vår',
				year: '1022 FE',
			},
			'tfe-36': {
				title: 'Stormning av palatset',
				description:
					'Vin leder skaas uppror och slåss sig in i Kredik Shaw, strider genom inkvisitorer och vakter för att nå Överstehärskarens tronsal.',
				season: 'Tidig vår',
				year: '1022 FE',
			},
			'tfe-38': {
				title: 'Överstehärskarens baneman',
				description:
					'Vin konfronterar Överstehärskaren i hans tronsal, sliter bort hans metallsinnen och dödar den odödlige tyrannen. Tusen år av förtryck tar slut.',
				season: 'Tidig vår',
				year: '1022 FE',
			},
			'tfe-39': {
				title: 'En ny era',
				description:
					'I efterdyningarna av revolutionen står Vin med Elend vid Borg Venture när en ny era börjar. Dimman flödar fortfarande, men Överstehärskaren är borta.',
				season: 'Vår',
				year: '1022 FE',
			},
			'woa-1': {
				title: 'Stadsväktare',
				description:
					'Vin patrullerar Luthadels murar varje natt och vakar efter hot medan tre arméer långsamt konvergerar mot den nyligen befriade staden.',
				season: 'Höst',
				year: '1023 FE',
			},
			'woa-3': {
				title: 'Dimandan',
				description:
					'Under sin nattliga patrull möter Vin en mystisk gestalt i dimman — en ande som verkar iaktta henne och peka mot något.',
				season: 'Höst',
				year: '1023 FE',
			},
			'woa-8': {
				title: 'Beskyddare och partner',
				description:
					'Vin navigerar sin dubbla roll som Elends beskyddare och partner i palatset och kämpar mellan sin kärlek till honom och sin plikt att hålla honom säker.',
				season: 'Höst',
				year: '1023 FE',
			},
			'woa-14': {
				title: 'Gängets råd',
				description:
					'Gänget möts i Clubs verkstad för att diskutera strategi när Straff Ventures armé slår läger i norr och Cetts styrkor närmar sig från väster.',
				season: 'Tidig vinter',
				year: '1023 FE',
			},
			'woa-22': {
				title: 'Politiska spänningar',
				description:
					'När belägringen stramas åt ser Vin Elend kämpa med Församlingen och styrandets krav medan hon jagar Zane genom dimman.',
				season: 'Vinter',
				year: '1023 FE',
			},
			'woa-26': {
				title: 'Förhandling med Straff',
				description:
					'Vin följer med Elend till Straff Ventures krigsläger norr om staden, där hon demonstrerar sin skräckinjagande kraft för att skrämma den blivande erövraren.',
				season: 'Vinter',
				year: '1023 FE',
			},
			'woa-28': {
				title: 'Återkomst från förhandlingen',
				description:
					'Efter det spända mötet i Straffs läger återvänder Vin till Borg Venture, hemsökt av Zanes viskningar och sina växande tvivel om sin roll.',
				season: 'Vinter',
				year: '1024 FE',
			},
			'woa-35': {
				title: 'Församlingskrisen',
				description:
					'Vin ser från läktaren när Församlingen röstar för att avsätta Elend och bjuda in Lord Penrod att leda, och krossar det demokratiska experimentet.',
				season: 'Vinter',
				year: '1024 FE',
			},
			'woa-43': {
				title: 'Räden mot Cett',
				description:
					'Vin genomför en förödande soloattack mot Cetts styrkor som är förlagda i Borg Hasting och driver hans armé ur staden i en uppvisning av dimfödd makt.',
				season: 'Sen vinter',
				year: '1024 FE',
			},
			'woa-47': {
				title: 'Duellen med Zane',
				description:
					'Nära Borg Hasting duellerar Vin mot Zane Venture i en brutal dimföddstrid och dödar honom slutligen för att skydda dem hon älskar.',
				season: 'Sen vinter',
				year: '1024 FE',
			},
			'woa-49': {
				title: 'Exil',
				description:
					'Vin och Elend lämnar Luthadel genom Tennporten, förvisade av Penrods nya regering, och beger sig norrut mot Terris med en liten eskort.',
				season: 'Sen vinter',
				year: '1024 FE',
			},
			'woa-50': {
				title: 'Uttåg norrut',
				description:
					'Den lilla gruppen reser mot Terris, men Vin känner att något drar henne tillbaka — Uppstigandets brunn finns trots allt inte i bergen.',
				season: 'Sen vinter',
				year: '1024 FE',
			},
			'woa-52': {
				title: 'Återkomst till strid',
				description:
					'Vin gör en desperat tennlöpning tillbaka till Luthadel när koloss bryter igenom murarna och anländer i tid för att ta kontroll över varelserna och rädda staden.',
				season: 'Sen vinter',
				year: '1024 FE',
			},
			'woa-54': {
				title: 'Söker brunnen',
				description:
					'Med Luthadel räddat men skadat söker Vin under Kredik Shaw efter Uppstigandets brunn och följer dimmandens vägledning djupare under jord.',
				season: 'Sen vinter',
				year: '1024 FE',
			},
			'woa-58': {
				title: 'Brunnen upptäcks',
				description:
					'Vin stiger ned i de uråldriga grottorna under Kredik Shaw och upptäcker Uppstigandets brunn, vars kraft pulserar med ackumulerad energi.',
				season: 'Vinter',
				year: '1024 FE',
			},
			'woa-59': {
				title: 'Kraften släpps fri',
				description:
					'Vid brunnen tar Vin upp en oerhörd kraft — och sedan, bedragen av Fördärvs manipulation av profetiorna, släpper den fri. Något fruktansvärt undkommer sitt fängelse.',
				season: 'Vinter',
				year: '1024 FE',
			},
			'hoa-1': {
				title: 'Norra fälttåget',
				description:
					'Vin och Elend leder sin armé till Vetitan, en stad som begravs under eskalerande askfall, för att säkra ett av Överstehärskarens dolda förråd.',
				season: 'Vår',
				year: '1026 FE',
			},
			'hoa-3': {
				title: 'Det första förrådet',
				description:
					'Vin öppnar Vetitans lagringskavern och finner mat, förnödenheter och en metallplatta med ett kryptiskt meddelande från Överstehärskaren om faran han fängslade.',
				season: 'Vår',
				year: '1026 FE',
			},
			'hoa-8': {
				title: 'Delning av styrkorna',
				description:
					'Vin återvänder till Luthadel där armén delas: Sazed och Breeze beger sig norrut mot Urteau, medan Vin och Elend ska marschera västerut mot Fadrex City.',
				season: 'Sommar',
				year: '1026 FE',
			},
			'hoa-10': {
				title: 'Marsch västerut',
				description:
					'Vin marscherar västerut med Elends armé mot Fadrex City, askan faller tyngre för varje dag medan världen förfaller runt dem.',
				season: 'Sommar',
				year: '1026 FE',
			},
			'hoa-21': {
				title: 'Ankomst till Fadrex',
				description:
					'Armén anländer utanför Fadrex City och upprättar ett belägringsläger på de asktäckta slätterna. Obligator Yomen vägrar överlämna staden eller dess förråd.',
				season: 'Höst',
				year: '1026 FE',
			},
			'hoa-28': {
				title: 'Spionen på balen',
				description:
					'Vin infiltrerar Fadrex förklädd till adelskvinna och deltar i en av Yomens baler vid Borg Orielle för att samla underrättelser och söka en diplomatisk lösning.',
				season: 'Höst',
				year: '1026 FE',
			},
			'hoa-40': {
				title: 'Andra balen',
				description:
					'Vin återvänder till ännu en av Yomens baler och debatterar direkt med honom om Överstehärskarens arv och det tilltagande askfallet.',
				season: 'Senhöst',
				year: '1026 FE',
			},
			'hoa-47': {
				title: 'Tillfångatagen',
				description:
					'Vin tillfångatas av Yomens styrkor och fängslas i Kantonatet för Resurser, berövas sina metaller. Hon hålls i en cell med ett atiumförråd hon inte kan nå.',
				season: 'Vinter',
				year: '1026 FE',
			},
			'hoa-51': {
				title: 'I fängelset',
				description:
					'Fängslad och avskuren från sina metaller begrundar Vin Fördärvs inflytande och naturen av den kraft hon släppte fri vid brunnen.',
				season: 'Vinter',
				year: '1026 FE',
			},
			'hoa-54': {
				title: 'Förrådet avslöjas',
				description:
					'Vin upptäcker Fadrexförrådet och dess kritiska innehåll — mat, förnödenheter och ett meddelande om Överstehärskarens verkliga förberedelser.',
				season: 'Sen vinter',
				year: '1026 FE',
			},
			'hoa-56': {
				title: 'Flykt från Fadrex',
				description:
					'När koloss anfaller Fadrex flyr Vin från staden och leder inkvisitorerna bort från Elend och armén för att skydda dem.',
				season: 'Tidig vår',
				year: '1027 FE',
			},
			'hoa-59': {
				title: 'Leder jakten',
				description:
					'Vin flyger österut mot Luthadel med en flock inkvisitorer i hälarna och leder medvetet Fördärvs tjänare bort från Fadrex och Elend.',
				season: 'Vår',
				year: '1027 FE',
			},
			'hoa-72': {
				title: 'Återkomst till Luthadel',
				description:
					'Vin anländer till ett ödelagt Luthadel och förstör Kredik Shaw, rasar Överstehärskarens palats i en massiv uppvisning av allomantisk kraft.',
				season: 'Sommar',
				year: '1027 FE',
			},
			'hoa-79': {
				title: 'Uppstigande',
				description:
					'Vin drar kraft ur själva dimman — Bevarandes kropp — och stiger upp för att bli ett kärl av gudomlig kraft för att bekämpa Fördärv direkt.',
				season: 'Höst',
				year: '1027 FE',
			},
			'hoa-81': {
				title: 'Det sista offret',
				description:
					'Vin offrar sig själv för att förgöra Fördärv och förenar Bevarandes kraft med sin egen livskraft för att utplåna förstörelsens gud.',
				season: 'Höst',
				year: '1027 FE',
			},
			'hoa-83': {
				title: 'Pånyttfödelsens fält',
				description:
					'Vins kropp hittas i ett fält av blommor och grönt gräs — de första tecknen på Sazeds omskapade värld. Hon vilar i frid bredvid Elend.',
				season: 'Höst',
				year: '1027 FE',
			},
		},
		kelsier: {
			'tfe-0': {
				title: 'Den överlevande återkommer',
				description:
					'Kelsier anländer till Lord Trestings plantage i Södra Dominansen och dödar den grymme adelsmannen — hans första slag mot adeln sedan han flydde Groparna.',
				season: 'Vår',
				year: '1021 FE',
			},
			'tfe-1': {
				title: 'Dold iakttagare',
				description:
					'Kelsier iakttar Camons gäng från skuggorna och noterar Vins omedvetna bruk av allomansi — en gatuunge med dimfödda krafter.',
				season: 'Vår',
				year: '1021 FE',
			},
			'tfe-3': {
				title: 'Rekrytering av Vin',
				description:
					'Kelsier räddar Vin från Camons övergrepp och erbjuder henne en plats i sitt gäng, och avslöjar sanningen om hennes förmågor som dimfödd.',
				season: 'Vår',
				year: '1021 FE',
			},
			'tfe-5': {
				title: 'Atiumkuppen',
				description:
					'Kelsier bryter sig in i Borg Ventures valv för att stjäla atium och finansierar upproret medan han testar de adliga husens försvar.',
				season: 'Vår',
				year: '1021 FE',
			},
			'tfe-6': {
				title: 'Gänget samlas',
				description:
					'I Clubs snickarverkstad samlar Kelsier hela gänget — Ham, Breeze, Dockson, Clubs och nu Vin — och avslöjar sin plan att störta Överstehärskaren.',
				season: 'Vår',
				year: '1021 FE',
			},
			'tfe-7': {
				title: 'Lära lärlingen',
				description:
					'Kelsier tar med Vin till stadsmurarna nära Stålporten för allomansiträning och lär henne att knuffa och dra i metaller medan de hoppar mellan spiror.',
				season: 'Sen vår',
				year: '1021 FE',
			},
			'tfe-8': {
				title: 'Täckmanteln Renoux',
				description:
					'Kelsier eskorterar Vin till Fellise och Lord Renoux gods, och etablerar hennes täckidentitet som Lady Valette för infiltrationen av det adliga samhället.',
				season: 'Sommar',
				year: '1021 FE',
			},
			'tfe-10': {
				title: 'Planering av revolutionen',
				description:
					'Tillbaka i Luthadel möter Kelsier gänget i Clubs verkstad för att gå igenom upprorets framsteg. Han tar med Vin på en nattlig löptur genom staden för att fortsätta hennes allomansiträning.',
				season: 'Sommar',
				year: '1021 FE',
			},
			'tfe-10.2': {
				title: 'Upproret växer',
				description:
					'Kelsier leder lagersamlingar genom Luthadels slumkvarter och bygger skaas uppror genom sin legend som Den överlevande från Hathsin.',
				season: 'Sommar',
				year: '1021 FE',
			},
			'tfe-11': {
				title: 'Massakern i Camons Gömställe',
				description:
					'Kelsier och gruppen upptäcker att Ministeriet har massakrerat alla i Camons gamla gömställe som hämnd för bedrageri mot Finanskantonet, vilket stärker deras beslutsamhet mot Lord Härskaren.',
				season: 'Sommar',
				year: '1021 FE',
			},
			'tfe-14': {
				title: 'Palatsrekognosering',
				description:
					'Kelsier och Vin spanar på Kredik Shaw om natten, kartlägger palatsets försvar och testar inkvisitorernas beredskap.',
				season: 'Sommar',
				year: '1021 FE',
			},
			'tfe-18': {
				title: 'Huskrigsoperationer',
				description:
					'Kelsier orkestrerar attacker mellan adelshusen, mördar mål och planterar bevis för att underblåsa huskriget som försvagar adeln.',
				season: 'Sensommar',
				year: '1021 FE',
			},
			'tfe-21': {
				title: 'Rebellarmén',
				description:
					'Kelsier reser till Arguoisgrottorna för att inspektera den växande rebellarmén som gömmer sig i bergen och tränar soldater som aldrig hållit i vapen.',
				season: 'Höst',
				year: '1021 FE',
			},
			'tfe-25': {
				title: 'Katastrof vid Holstep',
				description:
					'Kelsier tennlöper till Holstep när garnisonen upptäcker och massakrerar rebellarmén. Han anländer till förödelse och måste fly söderut.',
				season: 'Senhöst',
				year: '1021 FE',
			},
			'tfe-26': {
				title: 'Samla bitarna',
				description:
					'Tillbaka i Clubs verkstad samlar sig Kelsier efter Holstepkatastrofen och vägrar överge revolutionen även när hoppet verkar förlorat.',
				season: 'Vinter',
				year: '1021 FE',
			},
			'tfe-32': {
				title: 'Groparna förstörs',
				description:
					'Kelsier återvänder till Gropar av Hathsin — platsen för hans största lidande — och förstör atiumkristallerna, och avskär Översthärskarens mest värdefulla resurs.',
				season: 'Vinter',
				year: '1022 FE',
			},
			'tfe-34': {
				title: 'Den överlevandes sista strid',
				description:
					'Kelsier möter Överstehärskaren på Fontäntorget i en omöjlig strid. Han dör med ett leende och blir en martyr vars död antänder revolutionen.',
				season: 'Tidig vår',
				year: '1022 FE',
			},
			'tfe-35': {
				title: 'Bortom döden',
				description:
					'Genom OreSeur, kandran som bär hans ben, uppenbaras Kelsiers slutliga plan — hans död var gnistan som satte revolutionen i brand över hela Luthadel.',
				season: 'Tidig vår',
				year: '1022 FE',
			},
			'woa-1': {
				title: 'Bortom slöjan',
				description:
					'Fångad i Kognitiva riket efter sin död existerar Kelsier som en kognitiv skugga nära Uppstigandets brunn och ser Luthadel förvandlas under Elends styre.',
				season: 'Höst',
				year: '1023 FE',
			},
			'woa-59': {
				title: 'Bevittna frisläppandet',
				description:
					'Kelsier ser hjälplöst från Kognitiva riket när Vin tar kraften vid Uppstigandets brunn och släpper den fri, och befriar Fördärv från dess fängelse.',
				season: 'Vinter',
				year: '1024 FE',
			},
			'sh-4.1': {
				title: 'Kognitiv resa västerut',
				description:
					'Som en Kognitiv skugga reser Kelsier över dimhavet mot de västra Brännlanden för att söka hjälp från Ires fästning.',
				season: 'Vår',
				year: '1025 FE',
			},
			'sh-6.1': {
				title: 'Varningen i Fadrex',
				description:
					'Kelsier anländer till den kognitiva spegelbilden av Fadrex City, möter Hoid och försöker varna Vin om hennes hemalurgiska spik.',
				season: 'Höst',
				year: '1026 FE',
			},
			'hoa-1': {
				title: 'Den överlevande uthärdar',
				description:
					'I Kognitiva riket arbetar Kelsier vid sidan av Bevarandes avtagande kraft och söker vilken väg som helst för att hjälpa den Fysiska världen motstå Fördärvs växande inflytande.',
				season: 'Vår',
				year: '1026 FE',
			},
			'hoa-50': {
				title: 'Håller Bevarande',
				description:
					'När Bevarandes medvetande bleknar tar Kelsier upp Skärvans kraft — håller den ofullkomligt från Kognitiva riket och köper tid för den sista akten.',
				season: 'Vår',
				year: '1027 FE',
			},
			'hoa-81': {
				title: 'Överlämna facklan',
				description:
					'Vin tar Bevarandes kraft från Kelsier för att förgöra Fördärv. Den överlevande släpper Skärvan, hans roll fullbordad — men han vägrar gå vidare till det Bortom.',
				season: 'Höst',
				year: '1027 FE',
			},
			'hoa-83': {
				title: 'Den överlevande lever vidare',
				description:
					'Även när Harmoni omskapar världen framhärdar Kelsier i Kognitiva riket — Den överlevande som vägrade låta ens döden stoppa honom.',
				season: 'Höst',
				year: '1027 FE',
			},
		},
		sazed: {
			'tfe-9': {
				title: 'Terrisförvaltaren',
				description:
					'Sazed anländer till Lord Renoux gods i Fellise för att tjäna som Vins handledare och lär henne adelns seder medan han i hemlighet bevarar uråldriga religioner.',
				season: 'Sommar',
				year: '1021 FE',
			},
			'tfe-10.2': {
				title: 'Lagermötet',
				description:
					'Sazed närvarar vid det hemliga mötet i lagerdistriktet tillsammans med Kelsier och Vin, och ser på när Den överlevande predikar revolution för de samlade skaaarbetarna.',
				season: 'Sommar',
				year: '1021 FE',
			},
			'tfe-13': {
				title: 'Väktare på balen',
				description:
					'Sazed ledsagar Vin till hennes första bal som hennes förvaltare och vakar över henne från tjänarnas kvarter medan hon infiltrerar det adliga samhället.',
				season: 'Sommar',
				year: '1021 FE',
			},
			'tfe-22': {
				title: 'Forskarens arbete',
				description:
					'Sazed undervisar Vin mellan balerna på godset Renoux, delar sin enorma kunskap om religioner medan han studerar Slutliga imperiets mönster.',
				season: 'Höst',
				year: '1021 FE',
			},
			'tfe-34': {
				title: 'Vittne till revolutionen',
				description:
					'Sazed befinner sig i Luthadel under revolutionen och ser när skaa reser sig och Kelsier faller på Fontäntorget.',
				season: 'Tidig vår',
				year: '1022 FE',
			},
			'tfe-38': {
				title: 'Imperiets fall',
				description:
					'Sazed bistår gänget vid stormningen av Kredik Shaw och använder sin ferukemi för att slåss genom Överstehärskarens vakter.',
				season: 'Tidig vår',
				year: '1022 FE',
			},
			'tfe-39': {
				title: 'En ny början',
				description:
					'I efterdyningarna börjar Sazed studera Kredik Shaws arkiv och söker svar om Djupet och profetian om Tidsåldrarnas hjälte.',
				season: 'Vår',
				year: '1022 FE',
			},
			'woa-4': {
				title: 'Den resande läraren',
				description:
					'Sazed reser genom Östra Dominansen och besöker landsbygdsbyar för att dela undertryckta religioner och kunskaper med de nyligen befriade skaa.',
				season: 'Höst',
				year: '1023 FE',
			},
			'woa-7': {
				title: 'Konventikeln i Seran',
				description:
					'Ledd av Marsh upptäcker Sazed Konventikeln i Seran — en fruktansvärd inkvisitorsfästning där han finner Kwaans stålristningsplatta.',
				season: 'Senhöst',
				year: '1023 FE',
			},
			'woa-12': {
				title: 'Dechiffrera plattan',
				description:
					'Sazed studerar Kwaans ristning i Konventikeln och avslöjar Terrisväktarens desperata varning om att profetian om Tidsåldrarnas hjälte har förändrats.',
				season: 'Senhöst',
				year: '1023 FE',
			},
			'woa-15': {
				title: 'Dimmördandet',
				description:
					'På väg västerut genom Urbene stöter Sazed på byar där människor mystiskt har dött i dimman — de första tecknen på dimmsjukan.',
				season: 'Vinter',
				year: '1023 FE',
			},
			'woa-22': {
				title: 'Återkomst till Luthadel',
				description:
					'Sazed anländer till Luthadel med allvarliga nyheter om den förändrade profetian, dimmördandet och stålristningens sanna innebörd.',
				season: 'Vinter',
				year: '1023 FE',
			},
			'woa-40': {
				title: 'Debatt om profetian',
				description:
					'Sazed arbetar med Tindwyl vid Borg Venture och jämför den ursprungliga och den förändrade versionen av profetian om Tidsåldrarnas hjälte, och växer henne närmare.',
				season: 'Sen vinter',
				year: '1024 FE',
			},
			'woa-52': {
				title: 'Försvar av porten',
				description:
					'När koloss bryter igenom Luthadels murar använder Sazed sin ferukemi för att ensam hålla Tennporten och bränner igenom sina lagrade egenskaper i ett desperat sista stånd.',
				season: 'Sen vinter',
				year: '1024 FE',
			},
			'woa-57': {
				title: 'Strid mot Marsh',
				description:
					'Sazed strider mot en Fördärvskontrollerad Marsh i Kredik Shaws korridorer och överlever knappt inkvisitorns anfall medan Vin stiger ned till brunnen.',
				season: 'Vinter',
				year: '1024 FE',
			},
			'woa-59': {
				title: 'Tindwyls död',
				description:
					'Sazed upptäcker att Tindwyl dödades under kolossattacken. Förkrossad börjar han sin troskris och ifrågasätter varje religion han bär med sig.',
				season: 'Vinter',
				year: '1024 FE',
			},
			'hoa-4': {
				title: 'Sydlig diplomati',
				description:
					'Sazed besöker Lekals stad med Breeze för att förhandla ett fördrag och använder diplomati för att föra den sydlige kungen in i Elends växande koalition.',
				season: 'Sommar',
				year: '1026 FE',
			},
			'hoa-8': {
				title: 'Norrut',
				description:
					'Sazed får sitt uppdrag att säkra Urteau genom diplomati medan Elend tar armén västerut. Han lämnar genom norrtporten.',
				season: 'Sommar',
				year: '1026 FE',
			},
			'hoa-14': {
				title: 'Ankomst till Urteau',
				description:
					'Sazed anländer till Urteau och finner det under Medborgaren Quellions förtryckande styre, och upprättar en diplomatisk enklav vid det övergivna Venturegodset.',
				season: 'Höst',
				year: '1026 FE',
			},
			'hoa-25': {
				title: 'Bygga förtroende',
				description:
					'Sazed arbetar med att bygga förtroende hos Urteaus befolkning medan han studerar stadens historia och söker efter lagringskavernet under ministeriebyggnaden.',
				season: 'Tidig vinter',
				year: '1026 FE',
			},
			'hoa-40': {
				title: 'Ministerieutredningen',
				description:
					'Sazed utreder Ministeriekantonatet och arbetar med att komma åt lagringskavernet under det medan han navigerar Quellions paranoida styre.',
				season: 'Vinter',
				year: '1026 FE',
			},
			'hoa-50': {
				title: 'Kavernens upptäckt',
				description:
					'Sazed upptäcker mekanismen för att översvämma det torrlagda kanalsystemet — Överstehärskaren hade dränerat kanalerna för att dölja vattnet i lagringskavernet nedanför.',
				season: 'Tidig vår',
				year: '1027 FE',
			},
			'hoa-58': {
				title: 'Rädda Urteau',
				description:
					'När bränder rasar genom staden under revolutionen mot Quellion släpper Sazed ut det lagrade vattnet för att översvämma kanalerna och räddar Urteau från förstörelse.',
				season: 'Vår',
				year: '1027 FE',
			},
			'hoa-64': {
				title: 'Återuppbyggnad',
				description:
					'Med Quellion avsatt och bränderna släckta hjälper Sazed till att återuppbygga Urteau, distribuerar förnödenheter från förrådet medan han studerar Överstehärskarens meddelande.',
				season: 'Sommar',
				year: '1027 FE',
			},
			'hoa-69': {
				title: 'Resa till Hathsin',
				description:
					'Sazed reser till Gropar av Hathsin, dragen av händelsernas konvergens. Hans studier av religioner och Kwaans ristning har lett honom till en fruktansvärd insikt.',
				season: 'Höst',
				year: '1027 FE',
			},
			'hoa-71': {
				title: 'Den sista samlingen',
				description:
					'Sazed återvänder till Luthadel medan världen dör runt honom, askan faller i svarta ridåer. Han bär kunskapen om varje religion och varje profetia.',
				season: 'Höst',
				year: '1027 FE',
			},
			'hoa-82': {
				title: 'Tidsåldrarnas hjälte',
				description:
					'Med Vin och Fördärv båda förstörda inser Sazed att han är Tidsåldrarnas hjälte. Han tar upp både Bevarandes och Fördärvs kraft vid Uppstigandets brunn.',
				season: 'Höst',
				year: '1027 FE',
			},
			'hoa-83': {
				title: 'Harmoni',
				description:
					'Sazed stiger upp som Harmoni och förenar Fördärv och Bevarande. Han omskapar världen — flyttar planeten, återställer det gröna och läker tusen år av skada.',
				season: 'Höst',
				year: '1027 FE',
			},
		},
		elend: {
			'tfe-12': {
				title: 'Den läsande adelsmannen',
				description:
					'Elend Venture introduceras på en bal i sin egen borg, sitter ensam och läser medan resten av adeln dansar och intrigerar runt honom.',
				season: 'Sommar',
				year: '1021 FE',
			},
			'tfe-13': {
				title: 'Mötet med Lady Valette',
				description:
					'Elend möter den mystiska Lady Valette Renoux på en bal, dragen till hennes ovanliga beteende och skarpa kvickhet.',
				season: 'Sommar',
				year: '1021 FE',
			},
			'tfe-19': {
				title: 'Uppvaktningen',
				description:
					'Elends fascination för Lady Valette växer när de delar samtal på baler och diskuterar filosofi och adelns brister.',
				season: 'Sensommar',
				year: '1021 FE',
			},
			'tfe-24': {
				title: 'Adlig konspiratör',
				description:
					'Elend organiserar i hemlighet moderate adelsmän som motarbetar Överstehärskarens tyranni och möts i Borg Ventures privata bibliotek.',
				season: 'Höst',
				year: '1021 FE',
			},
			'tfe-34': {
				title: 'Revolutionen',
				description:
					'Elend bevittnar kaos under skaas uppror på Fontäntorget och kliver fram för att skydda både adelsmän och vanligt folk från våldet.',
				season: 'Tidig vår',
				year: '1022 FE',
			},
			'tfe-38': {
				title: 'Oväntad ledare',
				description:
					'I efterdyningarna av Överstehärskarens död framträder Elend som en enande röst och kallar till ordning medan imperiet faller samman runt honom.',
				season: 'Tidig vår',
				year: '1022 FE',
			},
			'tfe-39': {
				title: 'Den nye kungen',
				description:
					'Elend Venture utropas till kung av Centrala Dominansen och påbörjar den svåra uppgiften att bygga en demokratisk regering ur tyrannins ruiner.',
				season: 'Vår',
				year: '1022 FE',
			},
			'woa-1': {
				title: 'Kung av Luthadel',
				description:
					'Elend arbetar outtröttligt vid Borg Venture för att upprätta en konstitutionell regering, skriver lagar och bygger en Församling medan arméer samlas utanför.',
				season: 'Höst',
				year: '1023 FE',
			},
			'woa-5': {
				title: 'Församlingen',
				description:
					'Elend talar inför Församlingen han skapade och förespråkar demokratiska principer även när hans rådgivare varnar att demokratin kanske inte överlever belägringen.',
				season: 'Höst',
				year: '1023 FE',
			},
			'woa-12': {
				title: 'Överblick av belägringen',
				description:
					'Elend överblickar belägringslinjen från stadsmurarna och ser sin far Straffs armé i norr och Cetts styrkor närma sig från väster.',
				season: 'Tidig vinter',
				year: '1023 FE',
			},
			'woa-22': {
				title: 'Kamp för demokratin',
				description:
					'Elend möter växande motstånd i Församlingen när rädslan för belägringen driver många att söka en starkare ledare än en filosofkung.',
				season: 'Vinter',
				year: '1023 FE',
			},
			'woa-26': {
				title: 'Förhandling med fadern',
				description:
					'Elend rider ut till Straff Ventures läger för att förhandla och tar med Vin som sin beskyddare. Mötet avslöjar Straffs förakt för sin idealistiske son.',
				season: 'Vinter',
				year: '1023 FE',
			},
			'woa-28': {
				title: 'Diplomatiskt ränkspel',
				description:
					'Tillbaka vid Borg Venture försöker Elend spela de tre arméerna mot varandra — Straff, Cett och den annalkande kolosshorden.',
				season: 'Vinter',
				year: '1024 FE',
			},
			'woa-35': {
				title: 'Avsatt',
				description:
					'Församlingen röstar för att ersätta Elend med Lord Penrod genom att utnyttja en klausul i Elends egen demokratiska konstitution. Hans idealism blir hans fall.',
				season: 'Vinter',
				year: '1024 FE',
			},
			'woa-42': {
				title: 'Uppdrag till koloss',
				description:
					'Elend lämnar Luthadel genom tunnlarna för att förhandla med Jastes Lekal och hans kolossarmé — ett desperat spel för att säkra en allierad.',
				season: 'Sen vinter',
				year: '1024 FE',
			},
			'woa-46': {
				title: 'Återkomst från koloss',
				description:
					'Elend återvänder från kolosslägret efter misslyckade förhandlingar — Jastes förlorade kontrollen över sina bestar. Koloss kommer att anfalla oavsett.',
				season: 'Sen vinter',
				year: '1024 FE',
			},
			'woa-49': {
				title: 'Exil från Luthadel',
				description:
					'Elend lämnar Luthadel med Vin genom Tennporten, förvisad av Penrods regering, och beger sig norrut mot Terris för att söka Väktarsynodens hjälp.',
				season: 'Sen vinter',
				year: '1024 FE',
			},
			'woa-50': {
				title: 'Resan norrut',
				description:
					'Elends grupp reser mot Terris, men växande oro driver dem att ompröva. Uppstigandets brunn kanske inte finns där de trodde.',
				season: 'Sen vinter',
				year: '1024 FE',
			},
			'woa-52': {
				title: 'Slaget',
				description:
					'Elend återvänder och finner Luthadel under kolossanfall, slåss genom kaoset när murarna bryts och staden hotar att falla.',
				season: 'Sen vinter',
				year: '1024 FE',
			},
			'woa-58': {
				title: 'Till brunnen',
				description:
					'Elend stiger ned under Kredik Shaw med Vin i jakt på Uppstigandets brunn medan Marsh strider mot Sazed ovanför dem.',
				season: 'Vinter',
				year: '1024 FE',
			},
			'woa-59': {
				title: 'Dimfödde kejsaren',
				description:
					'Knivhuggen och döende vid brunnen räddas Elend när Vin tvingar en pärla av lerasium i hans mun och förvandlar honom till en dimfödd.',
				season: 'Vinter',
				year: '1024 FE',
			},
			'hoa-1': {
				title: 'Kejsare i krig',
				description:
					'Elend leder sina arméer till Vetitan, nu en dimfödd kejsare som leder militära kampanjer för att säkra Överstehärskarens dolda förråd.',
				season: 'Vår',
				year: '1026 FE',
			},
			'hoa-3': {
				title: 'Säkra förrådet',
				description:
					'Elend säkrar Vetitans lagringskavern och finner mat samt en metallplatta med ett meddelande som varnar för faran Rashek fängslade.',
				season: 'Vår',
				year: '1026 FE',
			},
			'hoa-8': {
				title: 'Strategisk delning',
				description:
					'I Luthadel delar Elend sina styrkor: skickar Sazed för att säkra Urteau diplomatiskt medan han marscherar västerut för att ta Fadrex med våld om nödvändigt.',
				season: 'Sommar',
				year: '1026 FE',
			},
			'hoa-10': {
				title: 'Västerut',
				description:
					'Elend leder sin armé västerut mot Fadrex City, askan faller tyngre för varje dag. Han tränar som dimfödd under marschen.',
				season: 'Sommar',
				year: '1026 FE',
			},
			'hoa-21': {
				title: 'Belägringen av Fadrex',
				description:
					'Elends armé anländer till Fadrex och upprättar belägringslinjer på de asktäckta slätterna. Yomen vägrar förhandla eller överlämna förrådet.',
				season: 'Höst',
				year: '1026 FE',
			},
			'hoa-28': {
				title: 'Den motvillige belägraren',
				description:
					'Elend kämpar med sin roll som erövrare och försöker diplomati även när hans generaler trycker på för anfall. Askfallet förvärras dagligen.',
				season: 'Höst',
				year: '1026 FE',
			},
			'hoa-47': {
				title: 'Att förlora Vin',
				description:
					'När Vin tillfångatas inne i Fadrex står Elend inför ett omöjligt val mellan att rädda sin hustru och att skydda tiotusentals soldater.',
				season: 'Vinter',
				year: '1026 FE',
			},
			'hoa-54': {
				title: 'In i Fadrex',
				description:
					'Kolossattacken tvingar fram en tillfällig allians med Yomen. Elend tar sig in i staden och når förrådet, och finner Överstehärskarens sista meddelande.',
				season: 'Sen vinter',
				year: '1026 FE',
			},
			'hoa-58': {
				title: 'Avfärd mot Hathsin',
				description:
					'Med förrådet säkrat och Vin borta österut lär sig Elend den sista sanningen: atiumet måste finnas vid Gropar av Hathsin. Han marscherar sin armé söderut.',
				season: 'Tidig vår',
				year: '1027 FE',
			},
			'hoa-61': {
				title: 'Marsch mot Groparna',
				description:
					'Elend leder sin utmattade armé till Gropar av Hathsin, där Kandras hemland ligger under. Marshs inkvisitorarmé följer tätt bakom.',
				season: 'Vår',
				year: '1027 FE',
			},
			'hoa-69': {
				title: 'Slaget vid Hathsin',
				description:
					'Elend bränner det sista atiumet i en desperat strid mot inkvisitorerna och koloss vid Groparna, medveten om att det innebär hans död när metallen tar slut.',
				season: 'Sommar',
				year: '1027 FE',
			},
			'hoa-79': {
				title: 'Kejsarens död',
				description:
					'Elend dödas av Marsh i de sista ögonblicken av Slaget vid Hathsin, hans atium förbrukat. Han dör efter att ha bränt allt metall som Fördärv sökte.',
				season: 'Höst',
				year: '1027 FE',
			},
			'hoa-83': {
				title: 'Återförenade i döden',
				description:
					'Elends kropp hittas bredvid Vins i fältet av blommor — Sazeds första gåva till den omskapade världen — i frid efter alla deras strider.',
				season: 'Höst',
				year: '1027 FE',
			},
		},
		marsh: {
			'tfe-7': {
				title: 'Den motvillige brodern',
				description:
					'Marsh anländer till Clubs verkstad, Kelsiers äldre bror och rebelledare i sin egen rätt. Han går motvilligt med i gängets plan.',
				season: 'Sen vår',
				year: '1021 FE',
			},
			'tfe-10.2': {
				title: 'Lagermötet',
				description:
					'Marsh deltar i det hemliga mötet i lagerdistriktet med gänget och ser sin bror Kelsier predika revolution för de samlade skaa-arbetarna.',
				season: 'Sommar',
				year: '1021 FE',
			},
			'tfe-13': {
				title: 'Möte vid berget Tyrian',
				description:
					'Marsh möter Kelsier vid berget Tyrian, flera kilometer utanför Luthadel, för att diskutera upprorsplanen borta från Ministeriets öron innan han påbörjar sin farliga infiltrering.',
				season: 'Sommar',
				year: '1021 FE',
			},
			'tfe-20': {
				title: 'Djupare under täckmanteln',
				description:
					'Marsh tränger djupare in i Ministeriets hierarki vid Kredik Shaw och lär sig Hemalurgis mörka hemligheter medan han riskerar att upptäckas av inkvisitorerna.',
				season: 'Sensommar',
				year: '1021 FE',
			},
			'tfe-30': {
				title: 'Försvinnande',
				description:
					'Marsh tystnar, hans kommunikation upphör när han försvinner in i de djupaste nivåerna av Inkvisitionskantonatet. Gänget fruktar det värsta.',
				season: 'Vinter',
				year: '1021 FE',
			},
			'tfe-38': {
				title: 'Inkvisitorn',
				description:
					'Marsh dyker upp under den sista stormningen av Kredik Shaw, fortfarande vid liv men förvandlad — järnspikar drivna genom hans ögon. Han slåss för gänget trots sin förvandling.',
				season: 'Tidig vår',
				year: '1022 FE',
			},
			'woa-4': {
				title: 'Östlig vandrare',
				description:
					'Marsh vandrar genom Östra Dominansen som en ensam inkvisitor, söker att förstå sin förvandling medan han hjälper Sazed undersöka avlägsna byar.',
				season: 'Höst',
				year: '1023 FE',
			},
			'woa-7': {
				title: 'Konventikelns guide',
				description:
					'Marsh leder Sazed till Konventikeln i Seran, en inkvisitorsfästning i avlägsna norr, för att finna de arkiv Sazed söker.',
				season: 'Senhöst',
				year: '1023 FE',
			},
			'woa-12': {
				title: 'Övergivande',
				description:
					'Marsh överger plötsligt Sazed vid Konventikeln och försvinner ut i vildmarken, driven av krafter han allt mer inte kan motstå. Fördärvs inflytande växer.',
				season: 'Senhöst',
				year: '1023 FE',
			},
			'woa-57': {
				title: 'Fördärvs marionett',
				description:
					'Marsh dyker upp vid Kredik Shaw under Fördärvs fulla kontroll och strider mot Sazed i korridorerna medan Vin stiger ned till Uppstigandets brunn nedanför.',
				season: 'Vinter',
				year: '1024 FE',
			},
			'woa-59': {
				title: 'Vakt vid brunnen',
				description:
					'Marsh vaktar ingången till brunnen, en marionett åt Fördärv, och slåss för att hindra någon från att nå Vin — eller hjälpa henne göra rätt val.',
				season: 'Vinter',
				year: '1024 FE',
			},
			'hoa-0': {
				title: 'Skapa inkvisitorer',
				description:
					'Under Fördärvs kontroll utför Marsh mörka Hemalurgiska ritualer i Tathingdwen och skapar nya inkvisitorer av tillfångatagna ferukemister och allomantiker.',
				season: 'Vår',
				year: '1026 FE',
			},
			'hoa-6': {
				title: 'Leda koloss',
				description:
					'Marsh befäler en växande armé av koloss på Fördärvs vägnar, rör sig genom Östra Dominansen och samlar styrkor för det slutliga slaget.',
				season: 'Sommar',
				year: '1026 FE',
			},
			'hoa-22': {
				title: 'Nära Tyrian',
				description:
					'Marsh opererar nära berget Tyrian, skapar Hemalurgiska spikar av tillfångatagna fångar och bygger Fördärvs armé av inkvisitorer i askbergets skugga.',
				season: 'Vinter',
				year: '1026 FE',
			},
			'hoa-38': {
				title: 'Spikandet av Penrod',
				description:
					'Marsh infiltrerar Luthadel för att spika kung Penrod, vilket ger Fördärv en direkt kanal in i styret av huvudstaden.',
				season: 'Vinter',
				year: '1026 FE',
			},
			'hoa-45': {
				title: 'Konvergerar mot Fadrex',
				description:
					'Marsh leder sina inkvisitorer mot Fadrex City och konvergerar mot belägringen när Fördärv söker återvinna atiumförrådet som är dolt däri.',
				season: 'Vinter',
				year: '1026 FE',
			},
			'hoa-59': {
				title: 'Jaga Vin',
				description:
					'Marsh leder inkvisitorsflocken som jagar Vin österut när hon flyr från Fadrex mot Luthadel och drar Fördärvs tjänare bort från förrådet.',
				season: 'Vår',
				year: '1027 FE',
			},
			'hoa-69': {
				title: 'Slaget vid Hathsin',
				description:
					'Marsh anländer till Groparna i ledningen för Fördärvs styrkor. I ett ögonblick av återvunnen vilja river han loss Vins örhänge — en trots som förändrar allt.',
				season: 'Höst',
				year: '1027 FE',
			},
			'hoa-79': {
				title: 'Dödandet av Elend',
				description:
					'Marsh, driven av Fördärv, dödar kejsare Elend under Slaget vid Hathsin. Handlingen fullbordar Fördärvs plan men kostar Marsh ännu en del av sin själ.',
				season: 'Höst',
				year: '1027 FE',
			},
			'hoa-83': {
				title: 'Frihet äntligen',
				description:
					'Med Fördärv förstört befrias Marsh äntligen från gudens kontroll. Han står ensam i den omskapade världen, en inkvisitor som överlevde alltings slut.',
				season: 'Höst',
				year: '1027 FE',
			},
		},
		spook: {
			'tfe-7': {
				title: 'Den unga tennögan',
				description:
					'Spook, Clubs unge brorson, arbetar som utkik och budbärare för gänget vid snickarverkstaden och talar med tjock östlig gatuslang.',
				season: 'Sen vår',
				year: '1021 FE',
			},
			'tfe-9': {
				title: 'Budbärarrundor',
				description:
					'Spook springer meddelanden mellan Clubs verkstad i Luthadel och Renouxgodset i Fellise, hans tennförstärkta sinnen gör honom till en exceptionell spejare.',
				season: 'Sommar',
				year: '1021 FE',
			},
			'tfe-22': {
				title: 'Gängstöd',
				description:
					'Spook stannar vid Clubs verkstad under huskriget och levererar underrättelser från sina takbevakning och budbärarrundor genom slumkvarteren.',
				season: 'Höst',
				year: '1021 FE',
			},
			'tfe-34': {
				title: 'Bevittna offret',
				description:
					'Spook ser från folkmassan när Kelsier dör på Fontäntorget, en händelse som kommer att forma resten av hans liv.',
				season: 'Tidig vår',
				year: '1022 FE',
			},
			'tfe-38': {
				title: 'Revolutionen',
				description:
					'Spook slåss med gänget under den slutliga revolutionen och hjälper till att koordinera skaas uppror från gatorna i Luthadel.',
				season: 'Tidig vår',
				year: '1022 FE',
			},
			'woa-6': {
				title: 'Den växande spejaren',
				description:
					'Spook tjänar som spejare åt Elends nya regering, patrullerar staden och observerar de omringande arméerna under belägringen.',
				season: 'Höst',
				year: '1023 FE',
			},
			'woa-49': {
				title: 'Exilgruppen',
				description:
					'Spook lämnar Luthadel med Vins och Elends exilgrupp genom Tennporten och beger sig norrut mot Terrisbergen.',
				season: 'Sen vinter',
				year: '1024 FE',
			},
			'woa-52': {
				title: 'Överleva slaget',
				description:
					'Efter att ha återvänt till Luthadel under kolossattacken överlever Spook Slaget vid Luthadel och hjälper till att säkra staden.',
				season: 'Sen vinter',
				year: '1024 FE',
			},
			'hoa-1': {
				title: 'Kampanjsoldat',
				description:
					'Spook tjänar i Elends armé vid Vetitan och tar gradvis mer ansvar medan kejsarens styrkor säkrar förrådet.',
				season: 'Vår',
				year: '1026 FE',
			},
			'hoa-14': {
				title: 'Infiltratören',
				description:
					'Spook anländer till Urteau före Sazeds diplomatiska uppdrag och infiltrerar staden genom det virrvarr av torra kanaler som kallas Smygen.',
				season: 'Höst',
				year: '1026 FE',
			},
			'hoa-17': {
				title: 'Det brinnande huset',
				description:
					'Spook upprättar en bas i en dold byggnad i Smygen, bevakar Medborgarens förtryckande regim och knyter kontakt med lokalt motstånd.',
				season: 'Höst',
				year: '1026 FE',
			},
			'hoa-23': {
				title: 'Marknadsobservation',
				description:
					'Spook observerar Medborgaren Quellion hålla tal på Marknadsgropen, studerar hans mönster och de allomantiker han tvingar att tjäna genom Hemalurgiska spikar.',
				season: 'Tidig vinter',
				year: '1026 FE',
			},
			'hoa-30': {
				title: 'Närma sig Medborgaren',
				description:
					'Spook tar sig närmare Medborgarens inre krets, undersöker spikarna Quellion använder för att kontrollera allomantiker och samlar bevis på korruption.',
				season: 'Vinter',
				year: '1026 FE',
			},
			'hoa-38': {
				title: 'Planera revolutionen',
				description:
					'Från sitt gömställe koordinerar Spook med Sazed och lokala rebeller för att planera störtandet av Quellions regim och säkra förrådet.',
				season: 'Tidig vår',
				year: '1027 FE',
			},
			'hoa-45': {
				title: 'Kelsiers röst',
				description:
					'Spook börjar höra vad han tror är Kelsiers röst som leder honom, driver honom mot allt farligare handlingar mot Medborgaren.',
				season: 'Vår',
				year: '1027 FE',
			},
			'hoa-50': {
				title: 'Den brinnande byggnaden',
				description:
					'Spook spetsas med en Hemalurgisk spik under en byggnadsbrand och får förstärkta allomantiska förmågor men blir också sårbar för Fördärvs inflytande genom spiken.',
				season: 'Vår',
				year: '1027 FE',
			},
			'hoa-55': {
				title: 'Uppenbarelse',
				description:
					'Spook inser att rösten han har hört inte är Kelsiers utan Fördärvs, som manipulerar honom genom den Hemalurgiska spiken. Han river ut spiken i plåga.',
				season: 'Sen vår',
				year: '1027 FE',
			},
			'hoa-58': {
				title: 'Urteaus hjälte',
				description:
					'Spook leder revolutionen mot Quellion och avslöjar hans korruption. När bränder slukar staden översvämmar Sazed kanalerna och räddar Urteau från förstörelse.',
				season: 'Vår',
				year: '1027 FE',
			},
			'hoa-64': {
				title: 'Återhämtning',
				description:
					'Svårt bränd men vid liv återhämtar sig Spook medan Urteau stabiliseras under nytt ledarskap och förnödenheter från förrådet delas ut.',
				season: 'Sommar',
				year: '1027 FE',
			},
			'hoa-69': {
				title: 'Till Groparna',
				description:
					'Spook reser till Gropar av Hathsin med Urteaus styrkor och ansluter sig till de samlande arméerna för vad som ska bli det slutliga slaget.',
				season: 'Höst',
				year: '1027 FE',
			},
			'hoa-83': {
				title: 'En ny värld',
				description:
					'Spook stiger ut i Sazeds omskapade värld — ett fält av blommor och grönt gräs under en blå himmel. Han bär Sazeds sista ord till de överlevande.',
				season: 'Höst',
				year: '1027 FE',
			},
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
