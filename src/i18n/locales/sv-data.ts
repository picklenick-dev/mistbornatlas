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
				'tfe-17': 'Dimfödd',
				'woa-1': 'Överlevarens arvtagare', // "The Survivor" is "Överlevaren"
				'woa-47': 'Luthadels beskyddare',
			},
			titleProgressionConfidence: {
				'tfe-1': 'verified',
				'tfe-9': 'verified',
				'tfe-12': 'verified',
				'tfe-17': 'verified',
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
				'tfe-27': 'Ministeriespion',
				'tfe-38': 'Stålinkvisitor',
				'woa-4': 'Motvillig inkvisitor',
				'woa-57': 'Fördärvets bricka', // "Ruin" is "Fördärvet"
			},
			titleProgressionConfidence: {
				'tfe-7': 'verified',
				'tfe-27': 'verified',
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
				'En Perpendicularitet som visar sig som taggiga sprickor i marken där atium kristalliseras. Kartan definieras av smala, rakbladsvassa vertikala sprickor som vrider sig djupt ner i berggrunden. Fångar kröp genom dessa klaustrofobiska tunnlar på jakt efter geoder. Kelsier upptäckte den Elfte Metallen (Malatium) i en dold kammare djupt inne i spricknätverket innan han förstörde kristallerna och avslutade atiumproduktionen.',
			safeDescription:
				'En brutal fånggruva nordost om Luthadel, full av smala, rakbladsvassa vertikala sprickor som vrider sig djupt ner i berggrunden. Dömda fångar kryper genom dessa klaustrofobiska sprickor på jakt efter de sällsynta atiumgeoderna som bildas därinne. Få överlever arbetet länge.',
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
			description:
				'Under Fördärvets uppgång bevittnade Marsh ett massivt lavautbrott från dess sluttningar efter att ha skapat en hemalurgisk spik i närheten, och dess allt tätare askfall signalerade världens accelererande förfall.',
			safeDescription:
				'Det närmaste askberget till Luthadel, synligt från stadsmurarna. Dess ständiga utbrott täcker den Centrala dominansen med de tjockaste lagren av aska och kräver oavbrutna städpatruller.',
			confidence: 'unconfirmed',
		},
		urteau: {
			name: 'Urteau',
			description:
				'Känd för sina "gatukanaler" — kanaler som tömdes på vatten av Överstehärskaren för att fungera som nedsänkta vägar. Högborg för Medborgaren (Quellion) under Kollapsen.',
			safeDescription: 'Huvudstaden i den Norra Dominansen och Hus Ventures ärftliga säte.',
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
				'Steg i betydelse efter Överstehärskarens död. Förlitar sig på naturliga klippformationer ("cremnol"-hyllor) för försvar istället för murar. Hyser en av Överstehärskarens hemliga Förrådsgröttor.',
			safeDescription:
				'Ett stort handelsnav i den Västra Dominansen, befäst av naturliga klippformationer.',
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
				'Byggd direkt ovanpå en av Överstehärskarens Förrådsgröttor. Arkitekturen anpassades till kraftigt askfall med underjordiska utbyggnader och ministerie-centrerad planering. Vid tiden för Åldrarnas hjälte konsumeras staden av askdrivor, med medborgare som bor på de övre våningarna medan de nedre fylls med aska.',
			safeDescription:
				'En stad i den Norra Dominansen med arkitektur anpassad för kraftigt askfall.',
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
				'En brant spiraltrappa leder ner till sanningen: Tjänarnas sal (massgravar), Inkvisitorernas sovsalar och Hemalurgikammaren med sina stenbord, dräneringskanaler och spikvalv. Djupt inne upptäckte Sazed Kwaans stålplåtsinskription gömd i en hemlig alkov. Här skapas Inkvisitorer.',
			safeDescription:
				'En vertikal fästning uthuggen ur en klippa nära norra gränsen. De övre våningarna fungerar som ett standard Ministerietempel (kapell, bostäder).',
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
				'Platsen för den ursprungliga Uppstigandets brunn innan Överstehärskaren förändrade världens geografi.',
			safeDescription: 'En karg bergskedja där det terrisiska folket underkuvades.',
			confidence: 'unconfirmed',
		},
		'tincut-fastness': {
			name: 'Tincuts fäste',
			description: 'Dit Synoden och flyktingarna retirerade under imperiets kollaps.',
			safeDescription: 'En dold fästning i Terrisbergen.',
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
				'En konstgjord pulsåder grävd i marken på Överstehärskarens dekret, som förbinder Tathingdwen med Luthadel för utvinning av terrisiska resurser och införsel av imperiella soldater. Den infrastruktur som band samman imperiet blev vägen till dess undergång när kolossarméer använde kanalvägen för att anfalla.',
			safeDescription:
				'Ingen naturlig flod, utan en konstgjord pulsåder grävd i marken på Överstehärskarens dekret. Förbinder Tathingdwen i norr direkt med Luthadel, vilket möjliggör handel och transport över imperiet. Ett monument över imperiell ingenjörskonst.',
			confidence: 'unconfirmed',
		},
		'kandra-homeland': {
			name: 'Kandras hemland',
			description:
				'Djupa grottor under Hathsins gropar, hem åt kandra-folket som vaktar Överstehärskarens största hemligheter, inklusive Förtroendet.',
			safeDescription:
				'Ett dolt underjordiskt komplex under Hathsins gropar. Dess sanna natur och syfte är okänt för omvärlden.',
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
			description:
				'Södra ankarpunkt i Förrådsgröttenätverket. Innehåller Förrådsgrötta 2 med nödförnödenheter.',
			safeDescription: 'En stad i den Södra Dominansen.',
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
			description:
				'Användes av Kelsiers rebellarmé som en dold samlingsplats, dessa grottor gav skydd åt tusentals skaasoldater som tränade för revolutionen.',
			safeDescription:
				'Ett nätverk av kalkstensgrottor i bergen mellan Luthadel och Hathsins gropar.',
			confidence: 'unconfirmed',
		},
		garthwood: {
			name: 'Garthwood',
			description:
				'En bosättning i den Östra Dominansen vars omgivande byar var bland de första att uppleva dimsjukan som senare skulle spridas över imperiet.',
			safeDescription:
				'En bosättning i den Östra Dominansen dit Sazed reste för att lära befriade skaa om undertryckta religioner.',
			confidence: 'unconfirmed',
		},
		'straffs-camp': {
			name: 'Straffs läger',
			description: 'Straff Ventures militärläger norr om Luthadel under belägringen.',
			confidence: 'unconfirmed',
		},
		'koloss-camp': {
			name: 'Koloss-lägret',
			description:
				'Kolossarméns läger nära Luthadel under belägringen 1024 ES. Jastes Lekals katastrofala försök att köpa kolosslojalitet med trämynt ledde till att varelserna inledde ett förödande anfall mot staden.',
			safeDescription:
				'Ett stort läger av kolossstyrkor nära Luthadel, deras närvaro ett ständigt hot under belägringen.',
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
			description:
				'Hyste en stående armé på 5.000 soldater som gensköt och massakrerade Yedens rebellarmé nära staden Holstep, vilket demonstrerade Överstehärskarens förmåga att snabbt projicera militär makt.',
			safeDescription: 'En betydande garnisonstad belägen nordväst om Luthadel.',
			confidence: 'unconfirmed',
		},
		'haverfrex-cannery-central': {
			name: 'Haverfrex',
			description:
				'Tjänade som den primära försörjningsnoden för Lord Ashweather Cetts armé under Belägringen av Luthadel och gav den logistiska uthållighet som krävdes för en långvarig militär närvaro.',
			safeDescription:
				'En industriell vägpunkt i den Centrala Dominansen känd för sin storskaliga konservfabrik.',
			confidence: 'unconfirmed',
		},
		'cetts-camp': {
			name: 'Cetts Läger',
			description: 'Lord Ashweather Cetts militärläger nordväst om Luthadel under belägringen.',
			confidence: 'unconfirmed',
		},
		'western-coast': {
			name: 'Västra Kusten',
			description:
				'Rikets västra kustlinje, där det bebodda landet övergår i ett ändlöst grått hav i den Kognitiva Världen. Kelsier nådde denna ödsliga strand efter veckor av löpning västerut, bara för att finna Fördärvet väntande på honom.',
			safeDescription:
				'Rikets ödsliga västra utkant där kontinenten slutar och havet börjar. Glesbefolkat och sällan besökt, markerar dess kuster gränsen för den kända världen.',
			confidence: 'unconfirmed',
		},
		'ire-fortress': {
			name: 'Ire-Fästningen',
			description:
				'En hög, glödande fästning byggd av Ire i den Kognitiva Världen långt bortom Scadrials västra gräns. Uppförd av vit sten som pulserar med ett inre ljus, omgiven av märkliga glasliknande träd och driven av en ledning av ren Investering. I dess valv vaktar Ire en sfär som kan fånga en döende Skärvas kraft.',
			safeDescription:
				'En mystisk fästning skymtad i berättelser om världen bortom döden, vars natur och syfte är okänt för de levande.',
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
			'kenton-street': {
				name: 'Kentongatan',
				description:
					'En livlig marknadsgata i Luthadel där köpmän säljer allt från hushållsartiklar till exotiska djur.',
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
			'tfe-0': {
				title: 'Överlevarens återkomst',
				description:
					'Kelsier anländer till lord Tristings plantage, där adelsmannen bjudit en förbindelsetjänsteman sänd av lord Venture i hopp om affärssamarbete. Den natten, när en ung skaflicka ska föras till Tristing, ingriper Kelsier: dödar Tristing och alla hans förbindelsetjänstemän, förmän och soldater och bränner herrgården.',
			},
			'tfe-1': {
				title: 'Den dolde iakttagaren',
				description:
					'Kelsier övervakar Camons liga från skuggorna och lägger märke till att Vin omedvetet använder allomanti: ett gatubarn med dimfödda krafter.',
			},
			'tfe-3': {
				title: 'Vins rekrytering',
				description:
					'Vin försöker fly från Camons gömställe men Ulef förråder henne. Kelsier griper in och räddar henne från Camons misshandel. Han befordrar Milev till ledare, tar tre tusen boxingar som betalning för att ha hand om förbindelsetjänstemannen och inkvisitorn. Han testar Vin och bekräftar att hon är dimfödd.',
			},
			'tfe-5': {
				title: 'Atiumstölden',
				description:
					'Kelsier, Dockson och Vin klättrar upp på taken. Kelsier gör sig redo och störtar ut i dimman för att anfalla Ventures fäste och stjäla atium. Han lyckas ta kassaskåpet men måste slå sig igenom dimmördare på vägen tillbaka. Flyr med atiumet och finansierar upproret.',
			},
			'tfe-6': {
				title: 'Laget komplett',
				description:
					'I Clubs snickarverkstad lägger Kelsier och laget planer för att störta Sista riket. Marsh anländer till sist och alla lämnar rummet för att bröderna ska tala enskilt. Vin smyger tillbaka och lyssnar vid dörren.',
			},
			'tfe-7': {
				title: 'Lärlingens träning',
				description:
					'Kelsier tar med Vin på hennes första nattliga träningspass och ger henne en dimmantel. Han lär henne de åtta grundmetallerna längs Luthadels murar, nära Stålporten.',
			},
			'tfe-8': {
				title: 'Renoux-förkädnaden',
				description:
					'Kelsier tar med Vin bortom Luthadels murar där de stöter på en dimgast. Sazed väntar med en vagn på landsvägen och kör dem till Fellise. Kelsier erbjuder Vin tre tusen boxingar och möjligheten att lämna. På lord Renoux egendom skapar han en falsk identitet åt Vin som lady Valette.',
			},
			'tfe-10': {
				title: 'Revolutionsplanering',
				description:
					'Tillbaka i Luthadel håller Kelsier möte i Clubs butik. Han frågar Sazed om en religion med verklig kraft — Sazed berättar om jaism — och om en religion som anser utrotning av adeln helig. Mötet avbryts när en av Hammonds soldater rapporterar att ministeriet hittat Camons gamla gömställe.',
			},
			'tfe-10.2': {
				title: 'Lagersamlingen',
				description:
					'Kelsier talar inför skaarbetare vid en hemlig samling i lagerdistriktet. Breeze och hans betvingare och uppviglare manipulerar folkmassan med legenden om Överlevaren från Hathsin för att blåsa på upproret.',
			},
			'tfe-11': {
				title: 'Massakern i Camons gömställe',
				description:
					'Kelsier och laget undersöker det förstörda gömstället. Kelsier letar sedan efter Camon bland tiggarna och hittar hans kropp hängande i en krok genom munnen, handleder och vrister bundna — kroppen torterad. Denna avrättningsmetod är avsedd för de som missbrukar allomanti. Vin hade lyckats följa Kelsier.',
			},
			'tfe-13': {
				title: 'Planer i Fellise',
				description:
					'Kelsier möter Vin och Sazed på lord Renoux egendom i Fellise för att gå igenom information från Vins första bal. Han får veta att Vins far var på balen och återvänder genom dimman till Luthadel.',
			},
			'tfe-14': {
				title: 'Palatsspaning',
				description:
					'Kelsier leder Vin till Kredik Shaw för att utforska byggnaden som Härskaren besöker var tredje dag. De slåss sig in, men tre stålinkvisitorer omringar dem. Kelsier separeras från Vin i kaoset. Vin flyr svårt skadad med en mystisk läderbok.',
			},
			'tfe-15': {
				title: 'Efter Kredik Shaw',
				description:
					'Laget ifrågasätter Kelsiers beslut att ta Vin till Kredik Shaw. Sazed bär in henne. Dockson är rasande över risken. Kelsier och Dockson lägger märke till läderboken; Sazed identifierar den som skriven på khlenni, Härskarens hemlandsspråk före Uppstigningen.',
			},
			'tfe-16': {
				title: 'Vakar över Vin',
				description:
					'Kelsier stannar i Clubs butik och vakar över Vin medan hon återhämtar sig efter skadorna från Kredik Shaw, och är där när hon äntligen vaknar.',
			},
			'tfe-17': {
				title: 'Möte på Renoux egendom',
				description:
					'Kelsier reser till Fellise med Breeze, Yeden och Dockson för att mötas på lord Renoux egendom och diskutera nästa fas av upproret.',
			},
			'tfe-19': {
				title: 'Tänder huskrig',
				description:
					'Kelsier sår kaos genom att dumpa lord Charrs Entrons uppenbara mordoffer i Tekielfästets trädgård. Sedan beger han sig till Sotdistrikten för att träffa Hoid — en informatör förklädd till gatukontakt — och får reda på att lady Shan Elariel är en betvingare.',
			},
			'tfe-19.2': {
				title: 'Möte med lord Straff',
				description:
					'Kelsier beger sig till Allströmtorget förklädd till sjuk och handikappad skatiggare för att möta lord Straff Venture, överhuvud för hus Venture. Han upptäcker att rykten om Överlevaren från Hathsin sprids och att det talas om den elfte metallen.',
			},
			'tfe-19.3': {
				title: 'Åter till Renoux',
				description:
					'Kelsier återvänder till Renoux herrgård via Törnvägen och utbyter information med Vin, Sazed och Renoux. Han ger Vin en föreläsning om adeln, hävdar att de inte bryr sig om ska och att hon måste hålla sig borta från Elend.',
			},
			'tfe-20': {
				title: 'Övervakar leveranser',
				description:
					'Kelsier övervakar lastning av vapen och förnödenheter på vagnar vid Renoux egendom i Fellise för att skicka till rebellarmén.',
			},
			'tfe-21': {
				title: 'Rebellarmén',
				description:
					'Kelsier läser översättningen av Härskarens dagbok ombord på en pråm norrut längs kanalen. Konvojen stannar vid Holstep-slussarna och Kelsier och rekryterna beger sig till grottorna där rebellarmén tränar. Han övervinner minnen från Hatshins gropar och tar sig in i Arguois grottsy stem för att inspektera armén som Hammond tränat. Under middagen manipulerar Kelsier Bilg som avskräckande exempel. Bilg och Demoux duellerar; Kelsier hjälper Demoux med allomanti.',
			},
			'tfe-23': {
				title: 'Spårar Vin',
				description:
					'Kelsier dyker upp vid ett tornfönster där Vin spionerar på Elends grupp vid Hastingsfästet. Han skämtar om deras idealistiska prat om att förändra världen. De skiljs åt.',
			},
			'tfe-24': {
				title: 'Statusmöte',
				description:
					'Kelsier anländer till Clubs butik där det mesta av laget samlats. Han diskuterar uppdragets status och delar en nattlig drink med Spook, Hammond och Clubs. Han ber Hammond gå till garnisonen för att samla information.',
			},
			'tfe-25': {
				title: 'Desperat beslut',
				description:
					'I Clubs butik får Kelsier veta att skarebellerna attackerat Holsteps garnison och att Luthadels garnison marscherar norrut. Han beslutar att försöka varna rebellarmén och tvingar Vin att svälja fem tennkulor för en lång tennlöpning norrut.',
			},
			'tfe-25.2': {
				title: 'Holstep-katastrofen',
				description:
					'Kelsier och Vin springer i sexton timmar medan de bränner tenn oavbrutet. De finner rebellarméns rester, belägrade och slaktade av Valtroux-garnisonen. Kelsier vill slå till men Vin övertygar honom om att de inte är osårbara. De fortsätter till Arguois grottor där två tusen soldater överlevt tack vare Mennis.',
			},
			'tfe-26': {
				title: 'Samla skärvorna',
				description:
					'Laget återvänder till Clubs butik efter två veckors resa från grottorna. Planen verkar totalt misslyckad. Breeze anklagar Kelsier för att jaga ära. Kelsier erkänner bakslaget men vägrar ge upp.',
			},
			'tfe-26.2': {
				title: 'Avrättningarna',
				description:
					'Spook meddelar om avrättningar på Fontäntorget. Laget beger sig dit och mutar sig upp på ett tak. De bevittnar slakten av många skamänniskor, blodet rinner i fontänen. Kelsier övertygar laget att fortsätta: "Det här är vår fiende. Ingen reträtt, ingen återvändo."',
			},
			'tfe-27': {
				title: 'Ny strategi',
				description:
					'Laget återvänder till Clubs butik för att planera nästa steg: starta krig mellan adelns hus. Sazed kommer med ett brev från Marsh som anger mötesplatsen i Vrånggatorna.',
			},
			'tfe-27.2': {
				title: 'Guldmetallen',
				description:
					'Kelsier och Vin beger sig till en övergiven byggnad i Vrånggatorna timmar före mötet med Marsh. Under väntan berättar Kelsier om guld — den nionde allomantiska metallen som visar en alternativ version av ens förflutna. Han förklarar även ferokemi och låter Vin bränna guld för första gången. När Marsh anländer med en lägre förbindelsetjänstemans tatuering från Inkvisitionsdivisionen beskriver han lugnandeposterna i Luthadel och avslöjar att inkvisitorer kan dö av ålder.',
			},
			'tfe-29': {
				title: 'Krigsråd på Renoux',
				description:
					'Kelsier träffar det mesta av laget på Renoux egendom i Fellise för att studera en detaljerad karta över Luthadels försvar från Marsh. De upptäcker att Therons liga anfallit nyligen av ministeriet. Den natten, oförmögen att sova, ber Kelsier Sazed berätta om några religioner.',
			},
			'tfe-31': {
				title: 'Tillrättavisning av lärlingen',
				description:
					'Kelsier och Vin återvänder till Clubs butik efter att Vin dödat lady Shan Elariel — en fullvärdig dimfödd — vid Venturefästet. Kelsier tillrättavisar Vin för vårdslös strid, men hon skriker att adel och ska inte skiljer sig, att Elend Venture är en god människa värd att skydda.',
			},
			'tfe-32': {
				title: 'Marshs kropp',
				description:
					'Kelsier och Vin hittar Marshs kropp helt tömd på blod — ett tomt skal. I Clubs butik finner de ett brev från Marsh som förklarar att inkvisitorerna troligen hittar honom.',
			},
			'tfe-32.2': {
				title: 'Groparna förstörs',
				description:
					'Kelsier återvänder till Hatshins gropar — platsen för hans största lidande. Han dödar alla vakter och sträcker ut handen till en ska vid namn Wallin som kryper ut ur hålorna. Sedan förstör han alla atiumkristaller och slår på en natt ut Härskarens mest värdefulla resurs.',
			},
			'tfe-33': {
				title: 'Nödgömstället',
				description:
					'Kelsier återvänder till en fuktig reservkällare nära Clubs butik — bara tre rum. Han meddelar att allt atium i Hatshins gropar är förstört.',
			},
			'tfe-33.2': {
				title: 'Strid med inkvisitorn',
				description:
					'Alla följer Kelsier till Fontäntorget. De ser Spook och lord Renoux i en avrättningsvagn. Kelsier kämpar mot en inkvisitor på torget — en fälla som han i stort sett visste om.',
			},
			'tfe-34': {
				title: 'Överlevarens sista strid',
				description:
					'Kelsier strider mot inkvisitorn i en kamp på liv och död vid Fontäntorget — båda bränner atium. Han är mästare på att knuffa och dra, manövrerar metall i luften med briljant skicklighet. Han dödar inkvisitorn och skafolket börjar skandera "Överlevaren från Hathsin". Härskaren anländer i en svart vagn. En av Hammonds män sticker honom med ett spjut — han fortsätter gå. Två spjut — fortfarande stående. Härskaren slår till Kelsier, drar ett spjut ur sin egen kropp och stöter det genom Kelsier. Han dör med ett leende och blir martyren som tänder revolutionen.',
			},
			'tfe-35': {
				title: 'Bortom döden',
				description:
					'I nödgömstället ser laget kandran i Kelsiers kropp: den slutliga planen. Kelsier lämnade brev med instruktioner. Hans död tände revolutionen.',
			},
			'woa-1': {
				title: 'Kognitiv skugga',
				description:
					'Kelsier vaknar som en kognitiv skugga i Uppstigningens brunn efter sin död. Hoid anländer och stjäl en lerasiumkula. Leras (Bevarelse) lär Kelsier om de tre sfärerna.',
			},
			'woa-5': {
				title: 'Betraktar världen',
				description:
					'Kelsier rider på Ruins pulser för att observera världen. Han märker att Ruin ägnar särskild uppmärksamhet åt Vin.',
			},
			'woa-12': {
				title: 'Ruins planer',
				description:
					'Kelsier upptäcker att Ruin ändrar den terrisiska religionen från Serans konventikel. Marsh överger Sazed där.',
			},
			'woa-26': {
				title: 'Betraktar belägringen',
				description:
					'Kelsier ser Vin demonstrera skrämmande kraft mot Straff och Elend avsättas av församlingen.',
			},
			'woa-57': {
				title: 'Brunnskammaren',
				description:
					'Vin och Elend stiger ner mot Brunnen. Bevarelse säger att kraften inte får frigöras. Marsh attackerar Sazed. Kelsier skadar Elend.',
			},
			'woa-60': {
				title: 'Ruin befriad',
				description:
					'Vin frigör kraften vid Brunnen istället för att använda den. Bevarelse guidar Vin att ge Elend den sista lerasiumkulan. Ruins fulla medvetande sprids.',
			},
			'hoa-0': {
				title: 'Överlevarens sorg',
				description:
					'Efter kolosslaget reser Kelsier till Venturefästet och finner sin besättning vid en begravning. Dockson och Clubs har dödats.',
			},
			'hoa-3': {
				title: 'Khriss och Nazh',
				description:
					'Kelsier möter Khriss och Nazh vid Luthadelsjön. Khriss lär honom om de sexton skärvorna. Nazh ger honom sin kniv.',
			},
			'hoa-5': {
				title: 'Vision av gudomlighet',
				description:
					'Bevarelse ger Kelsier en vision av möjliga framtider. I ingen framtid besegrar Kelsier Ruin, men Vin har en chans — om han går västerut.',
			},
			'hoa-8': {
				title: 'Springer västerut',
				description:
					'Kelsier springer västerut längs Kejserliga kanalen. Som kognitiv skugga tröttnar han inte. Städerna är tomma av dimsjuka.',
			},
			'hoa-12': {
				title: 'Minnen av Longsfollow',
				description:
					'I Longsfollow — där han en gång dödade adelsmän — drabbas Kelsier av utmattning och skuld.',
			},
			'hoa-15': {
				title: 'Den ensamma vägen',
				description:
					'Väster om Longsfollow upptäcker Kelsier att han kan tända eld med tanken. Han ser skaflyktingar fly västerut.',
			},
			'hoa-18': {
				title: 'Ruins hån',
				description:
					'Kelsier når västra havet. Ati (Ruin) hånar honom. Kelsier ger sig ut över den Kognitiva sfärens hav.',
			},
			'hoa-21': {
				title: 'Tankens hav',
				description:
					'Kelsier korsar det Kognitiva havets oändliga mörker. Han ser ett starkt ljus: Ires fästning.',
			},
			'hoa-24': {
				title: 'Ires fästning',
				description:
					'Kelsier når en lysande vit stenfästning. Han tjuvlyssnar på Ire — forntida Elantrianer — som vaktar en sfär som kan fånga Bevarelses kraft.',
			},
			'hoa-30': {
				title: 'Stjäl sfären',
				description:
					'Kelsier förföljer Ire som lämnar med sfären. Låtsas vara Ruin, använder Nazhs kniv. Alonoe lämnar sfären av skräck.',
			},
			'hoa-35': {
				title: 'Fadrex och Hoid',
				description:
					'Bevarelse leder Kelsier till Fadrex. Han finner Vin och Hoid igen. Försöker desperat varna Vin om örhänget.',
			},
			'hoa-42': {
				title: 'Ruins bricka avslöjad',
				description:
					'Ruin blockerar Kelsiers försök att nå Vin. Han ser kolosser attackera Elends armé — och ser deras sanna form.',
			},
			'hoa-50': {
				title: 'Tvetydig varning',
				description:
					'Kelsier försöker skicka ett meddelande till Vin via en halvt galen soldat: lita inte på någon genomborrad av metall.',
			},
			'hoa-54': {
				title: 'Överlevarens skugga',
				description:
					'Kelsier anländer till Urteau och söker en ung Tennöga. Finner Spook under Ruins inflytande — en hemalurgisk spik i kroppen.',
			},
			'hoa-58': {
				title: 'Hopp för Spook',
				description:
					'Kelsier finner Spook i Urteau. Deras band är starkare än med någon annan. Han viskar "Hopp" tills Spook sliter ut spiken.',
			},
			'hoa-62': {
				title: 'I halvdröm',
				description:
					'Spook och Kelsier möts på en grön äng. Kelsier ber Spook skicka ett meddelande till Vin om metallgenomborrade.',
			},
			'hoa-68': {
				title: 'Tar Bevarelse',
				description:
					'Kelsier krossar Ires sfär med Nazhs kniv och tar skärvkrafterna. Men Ruin skrattar — Kelsier är bara ett mänskligt minne.',
			},
			'hoa-69': {
				title: 'Budbärarens öde',
				description:
					'Kelsier ser Goradel rida från Urteau med Spooks varning — men Ruin kallar på Marsh. Inkvisitorn dödar budbäraren.',
			},
			'hoa-78': {
				title: 'Överlämnar kraften',
				description:
					'Kelsier ser Marsh slita ut Vins örhänge. Han attackerar Ruin för att distrahera, så Vin kan ta Bevarelses kraft.',
			},
			'hoa-80': {
				title: 'Läker själen',
				description:
					'Kelsier vägrar att dö igen. Hans själ är skadad men börjar läka. Han ser flyktingarna vid Hatshins gropar.',
			},
			'hoa-81': {
				title: 'Gropväktaren',
				description:
					'Kelsier bevittnar slutstriden. Elend brinner med omöjligt ljus och genomborrar Marshs hals. Vin attackerar Ruin. Båda dör.',
			},
			'hoa-82': {
				title: 'Bortom',
				description:
					'Kelsier överväger att ta båda skärvorna. Elend och Vin dyker upp i den Kognitiva sfären. Sazed blir Harmoni. Vin följer Elend bortom.',
			},
			'hoa-83': {
				title: 'Överlevarens val',
				description:
					'Kelsier är åter fången i den Kognitiva sfären. Sazed (Harmoni) besöker honom. Kelsier börjar smida planer för att återvända till den Fysiska sfären.',
			},
			'hoa-83.2': {
				title: 'Överlevarens ränker',
				description:
					'Kelsier övertalar Spook att experimentera med hemalurgi — för att förlänga Spooks liv och hitta Kelsiers väg tillbaka.',
			},
		},
		vin: {
			...enData.movements.vin,
			'tfe-1': {
				title: 'Gatbarnet',
				description:
					'Vin kallas inför sin ligas ledare Camon som behandlar henne brutalt. Hon använder omedvetet sin tur — en form av allomantisk betvingning — för att lugna honom. Camon förklär sig till lord Jedue och förbereder ett bedrägeri mot Stålministeriet. Vin använder sin tur på förbindelsetjänstemannen, fader Leid, för att han inte ska avvisa Camons krav.',
			},
			'tfe-2': {
				title: 'Ministeriebluffet',
				description:
					'Camon förklädd till lord Jedue tar med Vin till finanskansliet för att lura ministeriet. Vin använder sin tur på ärkefadern som lämnar över tre tusen boxingar till Camon. Kelsier och Dockson i väntrummet känner av Vins allomantiska pulser. Sedan ser de en stålinkvisitor följa Camons följe.',
			},
			'tfe-4': {
				title: 'Värvad',
				description:
					'Kelsier presenterar sin plan för att störta Sista riket för laget i Clubs verkstad. Laget går med utom Clubs som lämnar och sedan återvänder. Kelsier avslöjar att Vin är dimfödd och visar den elfte metallen.',
			},
			'tfe-7': {
				title: 'Dimföddträning',
				description:
					'Kelsier tar med Vin på första nattens träning och ger henne en dimmantel. Han lär henne de åtta grundmetallerna — tenn, tervitt, järn, stål, zink, mässing, koppar och brons — och avslutar vid Luthadels murar.',
			},
			'tfe-8': {
				title: 'Renoux egendom',
				description:
					'Vin och Kelsier hoppar över Luthadels murar på natten och Vin möter en dimgast för första gången. Sazed väntar med en vagn på vägen och kör dem till Fellise. Kelsier erbjuder Vin tre tusen boxingar och möjligheten att gå. Hon tar pengarna men stannar. På lord Renoux egendom föreslås hon spela lady Valette.',
			},
			'tfe-9': {
				title: 'Träning med Sazed',
				description:
					'Vin och Kelsier sparrar på Renoux egendom. Vin klipper håret, Sazed testar hennes adelsförklädnad och berättar om trellagismen. Kelsier och Sazed diskuterar Vins framsteg i enrum; Kelsier meddelar att de ska gå på bal i Venturefästet i helgen.',
			},
			'tfe-10': {
				title: 'Tillbaka med laget',
				description:
					'Vin återvänder till Luthadel från Fellise för att lära sig om metaller av lagets dimmän, börjar med Breeze som lär henne betvingning. Hammond anländer och diskuterar det moraliska i att störta riket.',
			},
			'tfe-10.2': {
				title: 'Lagersamlingen',
				description:
					'Vin deltar i den hemliga samlingen där Kelsier talar till skaarbetare. Efteråt håller Kelsier möte i Clubs butik. Vin och Lestibournes pratar om Marsh. Mötet slutar när Hammonds soldat rapporterar att ministeriet hittat Camons gamla gömställe.',
			},
			'tfe-11': {
				title: 'Massakern i Camons gömställe',
				description:
					'Vin och laget undersöker det förstörda gömstället; lik överallt. Vin ser Ulef — någon slet ut hans bröstkorg med bara händerna. Sazed ber en bön ur katzi-religionen. Milevs kropp är bunden till en stol, tydligt torterad.',
			},
			'tfe-12': {
				title: 'Första balen vid Venturefästet',
				description:
					'Vin går på sin första bal i Venturefästet med Sazed som kusk. Kelsier dyker upp på vägen, ger råd och försvinner i dimman. Vin presenteras som lady Valette Renoux. Vid middagen ser hon sin far tvärs över salen. Hon avböjer dans och drar sig tillbaka till ett balkong på övervåningen där hon har sin första konversation med Elend Venture.',
			},
			'tfe-13': {
				title: 'Tillbaka i Fellise',
				description:
					'Sazed frågar ut Vin om hennes möte med Elend på Renoux egendom. Vins verkliga personlighet börjar visa sig. Kelsier får reda på att Vins far var på balen och återvänder i dimman.',
			},
			'tfe-14': {
				title: 'Inne i Kredik Shaw',
				description:
					'Kelsier tar med Vin till Kredik Shaw och de slåss sig in. Vin dödar för första gången. Tre stålinkvisitorer omringar dem. Vin greppar en läderbok för att försvara sig. Bränner atium och flyr temporärt, men en inkvisitor hugger en obsidianyx i hennes sida. Hon flyr med boken men förlorar medvetandet — något distraherar den förföljande inkvisitorn och omsluter henne skyddande. Det var inte Kelsier.',
			},
			'tfe-15': {
				title: 'Skadad',
				description:
					'Laget ifrågasätter Kelsiers beslut. Sazed bär in Vin. De ger henne tervitt för att hjälpa läkningen. Sazed opererar och Hammond bär henne till ett rum för vila. De lägger märke till boken; Sazed bekräftar att den är skriven på khlenni.',
			},
			'tfe-16': {
				title: 'Återhämtning i Clubs butik',
				description:
					'Vin vaknar efter två veckor i Clubs butik. Spook har vakat över henne och berättar hur Kelsier gav honom hans smeknamn. I samtal med Dockson inser Vin att det finns något mycket ovanligt med Sazed.',
			},
			'tfe-16.2': {
				title: 'Tillbaka i Fellise',
				description:
					'Efter ytterligare dagars vila återvänder Vin till Renoux egendom i Fellise. Hon talar med Sazed som förklarar vad Väktarna är och avslöjar att alla terrisiska tjänare kastrerats.',
			},
			'tfe-17': {
				title: 'Renoux egendomens trädgård',
				description:
					'Vin klagar på fyra tråkiga veckors konvalescens på Renoux egendom. Lagmedlemmar anländer för att diskutera nyheter. Vin övertygar Kelsier att låta henne gå på nästa bal. Senare talar de om Mare, Kelsiers drivkrafter, och "knäppet" — det traumatiska ögonblick som väcker allomantiska krafter.',
			},
			'tfe-18': {
				title: 'Balen vid Elarielfästet',
				description:
					'Vin går på bal i Elarielfästet med Sazed. Elend sätter sig vid hennes bord och läser som vanligt. Han berömmer hennes klänning och hon blir svarslös. Hon dansar med flera adelsmän och frågar om Elend; hör talas om lady Shan Elariel. Märker att Shan är en betvingare. När hon lämnar balen ser Vin en vakt skära halsen av en ung skakokkpojke i dimman.',
			},
			'tfe-19': {
				title: 'Tillbaka i Fellise',
				description:
					'Kelsier återvänder till Renoux herrgård via Törnvägen och möter Vin, Sazed och Renoux. Han predikar för Vin om adeln, hävdar att de inte bryr sig om ska, och att hon måste hålla sig borta från Elend Venture.',
			},
			'tfe-20': {
				title: 'Sökarens lektioner',
				description:
					'Vin återvänder från Luthadel och finner vapenlådor framför Renoux herrgård redo för rebellerna. Marsh anländer och lär henne sökning — att använda brons för att upptäcka andra allomanter — och ytterligare detaljer om allomanti.',
			},
			'tfe-22': {
				title: 'Dagboken',
				description:
					'Vin läser sin kopia av Härskarens dagbok på Renoux egendom när Spook dyker upp. Han säger att Dockson kom för att hämta fler vapen, rodnar och sträcker fram en näsduk och springer iväg. Sazed förklarar senare att en ung mans gåva av en näsduk uttrycker seriös uppvaktning. Medan de väntar på Dockson talar Vin med Sazed om terriserna i dagboken; Sazed avslöjar ferokemins hemligheter och Väktarnas grundande. Sedan talar Vin med Dockson som berättar hur lord Devinshae tog kvinnan han älskade och dödade henne nästa morgon.',
			},
			'tfe-23': {
				title: 'Balen vid Hastingsfästet',
				description:
					'Vin går på bal vid Hastingsfästet. Lady Shan ber Vin inspektera Elends böcker nästa gång. Vin hittar Elend och frågar om han varit med en skakvinna. Han erkänner att hans far tvingade honom vid tretton och kvinnan dödades efteråt. Elend ger henne en näsduk. Efter att han och hans vänner lämnat följer Vin dem allomantiskt till ett torn där de diskuterar Härskarens misslyckanden. Kelsier dyker plötsligt upp och hånar deras idéer.',
			},
			'tfe-24': {
				title: 'Lagmöte',
				description:
					'Vin och Kelsier anländer till Clubs butik där det mesta av laget samlats. Kelsier diskuterar uppdragets läge och Vin inser hur mycket hon gillar sitt nya liv. Kelsier, Spook, Hammond och Clubs delar en nattlig drink.',
			},
			'tfe-24.2': {
				title: 'Garnisonbesök',
				description:
					'Vin klär ut sig till gatpojke och går med Hammond till Luthadels garnison för att lära sig om tervitt. Hammond förklarar att många soldater är vanliga skamänniskor. En vakt vid namn Sertts meddelar dem att garnisonen mobiliseras — skarebeller har attackerat Holsteps garnison i norr.',
			},
			'tfe-25': {
				title: 'Brådskande nyheter',
				description:
					'I Clubs butik kommer Hammond med budet att Luthadels garnison marscherat mot Holstep. Kelsier får Vin att svälja fem tennkulor för att springa norrut och varna rebellarmén.',
			},
			'tfe-25.2': {
				title: 'Tennlöpning',
				description:
					'Vin och Kelsier springer i sexton timmar medan de bränner tenn i en desperat löpning. De finner rebellarméns rester belägrade och slaktade av Valtroux garnison. Kelsier vill slåss, Vin övertygar honom att de inte är osårbara. De fortsätter till Arguois grottor där två tusen soldater överlevt tack vare Mennis.',
			},
			'tfe-26': {
				title: 'Återhämtning',
				description:
					'Vin ligger uttröttad i Clubs butik. Det tog två veckor att ta sig tillbaka till Luthadel. Kelsier stormar in; Breeze anklagar honom. Kelsier erkänner bakslaget men vägrar ge upp.',
			},
			'tfe-26.2': {
				title: 'Avrättningar',
				description:
					'Spook meddelar om avrättningar på Fontäntorget. Laget beger sig till taken. Vin pekar ut sin far — en förbindelsetjänsteman vid namn Tevidian, lord prelaten, och högsta förbindelsetjänstemannen. De ser kvinnor och barn dras ur fångvagnarna och avrättas, fontänen röd av blod.',
			},
			'tfe-27': {
				title: 'Planerar nästa steg',
				description:
					'Laget återvänder till Clubs butik. Kelsier, Vin och de andra omarbetar planen för att driva på huskriget. Sazed anländer med Marshs brev och mötesplats.',
			},
			'tfe-27.2': {
				title: 'Möte med Marsh',
				description:
					'Kelsier och Vin beger sig till en övergiven byggnad i Vrånggatorna för att möta Marsh. Under väntan berättar Kelsier om guld. Marsh anländer med en lägre förbindelsetjänstemans tatuering vid Inkvisitionsdivisionen. Han avslöjar att ministeriet placerar betvingare i skadistrikten under ständig betvingning, dolda av rökare. Bekräftar även att inkvisitorer kan dö av ålder.',
			},
			'tfe-28': {
				title: 'Balen vid Likalfästet',
				description:
					'Vin deltar i balen vid Likalfästet och börjar sprida rykten för att trappa upp huskriget. Elend dyker upp — säger att han vill kyssa henne, men Vin insisterar på att han inte verkligen känner henne. Under en promenad avslöjar Elend att Ventures förmögenhet helt kommer från atiumbrytning i Hatshins gropar. Han nämner att hus Tekiel utplånades av hus Hastings och försöker övertala Valette att lämna Luthadel.',
			},
			'tfe-29': {
				title: 'Sista översättningen',
				description:
					'Vin läser Sazeds sista dagboksöversättning på Renoux egendom och är frustrerad över att det inte finns mer. Sazed förklarar ferokemi i mer detalj och Vin försöker bränna en av hans tennsinnen. Kelsier ansluter sig senare för att studera Marshs karta. De upptäcker att Therons liga anfallits och Vin misstänker att inkvisitorerna fortfarande spårar henne.',
			},
			'tfe-30': {
				title: 'Venturebalen',
				description:
					'Vin och Sazed går på den sista husbalen vid Venturefästet. Fröken Kliss avslöjas som informatör och försöker utpressa hus Renoux. Mot ett safirblått halsband berättar Kliss för Vin att Elariels lönnmördare ska försöka döda Elend ikväll. Vin tvingar Kliss allomantiskt att berätta allt. Hon krossar ett fönster av färgat glas för att ta sig ut. Utanför möter hon grovhuggare, myntskjutare och två dimfödda — varav en är Shan Elariel. Vin lurar Shan att bränna upp sitt atium först och dödar sedan henne.',
			},
			'tfe-31': {
				title: 'Efter duellen',
				description:
					'Vin klampar in i Clubs kök bandagerad och i trasor. Kelsier tillrättavisar henne för att ha räddat Elend, men Vin skriker att ska och adel inte skiljer sig — Elend är en god människa. På taket berättar Vin att hus Venture driver Hatshins gropar och delar sin teori att inkvisitorer kan se genom kopparmolnet. Kelsier testar och bekräftar.',
			},
			'tfe-32': {
				title: 'Takvakt',
				description:
					'Vin och Spook vaktar på taket ovan Clubs butik. Spook lär henne tennknep: inte bara förstärka sinnen utan filtrera bort distraktioner. Senare hittar Kelsier och Vin Marshs kropp — helt tömd på blod. De finner ett brev som förklarar att inkvisitorerna troligen hittar honom.',
			},
			'tfe-33': {
				title: 'Nödgömstället',
				description:
					'Laget flyttar till en fuktig reservkällare nära Clubs butik — tre rum. Kelsier meddelar att Hatshins gropars atium är förstört. Spook vakar som tennvakt.',
			},
			'tfe-33.2': {
				title: 'Strid med inkvisitorn',
				description:
					'Alla följer Kelsier till Fontäntorget. De ser Spook och lord Renoux i en avrättningskärra. Kelsier strider mot en inkvisitor på torget. Elend ser Renoux tjänare inspärrade och ropar efter Valette men hittar henne inte.',
			},
			'tfe-34': {
				title: 'Överlevarens död',
				description:
					'Kelsier strider mot inkvisitorn i fullskalig kamp vid Fontäntorget — båda bränner atium. Vin tittar uppifrån: Kelsier är en sann mästare på knuff och drag. Han dödar inkvisitorn och skafolket ropar "Överlevaren från Hathsin". Härskaren anländer i en svart vagn. Kelsier dödas. Vin hoppar ner och håller om honom medan han dör.',
			},
			'tfe-35': {
				title: 'Överlevarens arv',
				description:
					'Vin återvänder till nödgömstället. Arg för att Kelsier inte var ärlig — planerade att dö och lämna henne. Sazed tröstar. Utanför talar skafolket om Dimmans herre. I ett närliggande lager ser laget kandran i Kelsiers gestalt. Kelsier lämnade brev med instruktioner för att ta staden. Vins brev säger att han aldrig löste den elfte metallens gåta. Hon bestämmer sig för att ta reda på vad Härskaren döljer.',
			},
			'tfe-36': {
				title: 'Inne i Kredik Shaw',
				description:
					'Vin går tyst mot Kredik Shaw och uppmuntrar vakterna utanför att ansluta sig till upproret. Innanför dödar hon två inkvisitorer. I nästa rum sitter en gammal man i en stol. En inkvisitor greppar Vins hals — den gamle mannen talar och inkvisitorerna kallar honom Härskaren. Men Vin är förvirrad: Härskaren på Fontäntorget var ung. Hon bränner den elfte metallen och ser två spöklika figurer vid den gamles sida.',
			},
			'tfe-37': {
				title: 'Räddning och avslöjande',
				description:
					'Inkvisitorerna tvingar Vin att bränna en metall som motverkar alla andra metaller. Hon förs inför Härskarens tron — den unga versionen som dödade Kelsier. Hennes far Tevidian, högste förbindelsetjänstemannen, avrättas av inkvisitorerna. Vin upptäcker att Reen aldrig förrådde henne: han uthärdade tortyr och sade till inkvisitorerna att hon svalt ihjäl. Sazed förs till hennes cell och löser sin ferokemiska kraft för att krossa dörren. Elend och sex soldater stormar in. Vin hittar sin mantel och metallficka. Elend vet nu att hon är dimfödd. Hon tar hans ansikte i sina händer, kysser honom, och rusar iväg för att döda Härskaren.',
			},
			'tfe-38': {
				title: 'Härskarens bane',
				description:
					'Vin hoppar mellan Kredik Shaws spiror uppåt. Inkvisitor Kar greppar hennes hals men en annan inkvisitor drar en metallspik ur Kars nacke och dödar honom omedelbart. Det är Marsh — levande, med elva spikar i kroppen. Han dödade alla andra inkvisitorer. Härskarens verkliga namn är Rashek: han mördade Tidernas hjälte och tog hans plats. Vin sliter av Härskarens armband. Utan sin ferokemiska ungdom blir han en svag gammal man. Sazed dyker upp med en metallficka. Vin stöter ett spjut genom hans hjärta. Tusen år av förtryck tar slut.',
			},
			'tfe-39': {
				title: 'En ny era',
				description:
					'Sazed, Marsh och Vin står på ett tak nära skadistriktet. Sazed förklarar att Härskaren var både ferokemist och allomant — armbanden lagrade hans ungdom. Marsh beskriver sin överlevnad och förvandling: elva metallspikar — två genom ögonen, åtta i bröstet, en i ryggen. Han berättar också om kandrorna — varelser som utvecklats från dimgastar — som nu ser Vin som sin härskarinna.',
			},
			'tfe-39.2': {
				title: 'Vin och Elend',
				description:
					'Vin observerar Elend i hemlighet från dimman. Alla accepterade honom som kung. Hon springer till Elend och de omfamnar varandra.',
			},
			'woa-1': {
				title: 'Stadens väktare',
				description:
					'Vin patrullerar Luthadels murar varje natt medan tre arméer samlas kring den nyligen befriade staden.',
			},
			'woa-2': {
				title: 'Bakhåll i dimman',
				description:
					'Vin hamnar i bakhåll av åtta allomantiker söder om Venturefästet. En mystisk dimfödd — Väktaren — ingriper.',
			},
			'woa-3': {
				title: 'Dimgasten',
				description:
					'Vin möter dimgasten — en genomskinlig gestalt — medan hon vakar över Venturefästet. Ham rapporterar att lönnmördarna skickats av kung Cett.',
			},
			'woa-5': {
				title: 'OreSeurs återfödelse',
				description:
					'Vin köper en varghund på marknaden och ger den till kandran OreSeur som ny kropp. Hon upptäcker duralumin.',
			},
			'woa-6': {
				title: 'Träning på gården',
				description: 'Vin tränar med Ham på Venturefästets gård. Spook återvänder från spaning.',
			},
			'woa-8': {
				title: 'Jagar Väktaren',
				description:
					'Vin jagar Väktaren över stadens tak. Jakten slutar vid Fontäntorget där hon experimenterar med duralumin.',
			},
			'woa-10': {
				title: 'Församlingsvakt',
				description:
					'Vin och Ham vaktar Elend medan han talar i Församlingen. En andra armé har anlänt.',
			},
			'woa-11': {
				title: 'Räddar Breeze',
				description:
					'Vin räddar Breeze med ett duraluminförstärkt stålknuff. Laget hittar kandra-ben.',
			},
			'woa-13': {
				title: 'Dimgasten återvänder',
				description: 'Vin märker att dimman kommer tidigare varje natt. Elend samlar krigsråd.',
			},
			'woa-14': {
				title: 'Tindwyl anländer',
				description:
					'Tindwyl börjar utbilda Elend i konungaskap. Vin misstror den bestämda terriskvinnan.',
			},
			'woa-16': {
				title: 'Undersöker dagboken',
				description: 'Vin analyserar Alendis dagbok och söker omnämnanden av dimgasten och Djupet.',
			},
			'woa-17': {
				title: 'Duell med Väktaren',
				description:
					'Vin konfronterar Zane — Väktaren. De utkämpar en intensiv stålknuffningsduell vid Hastingsfästet.',
			},
			'woa-20': {
				title: 'Krigsråd',
				description:
					'Vin observerar när Elend och laget diskuterar förhandlingsstrategi. Allrianne Cett anländer.',
			},
			'woa-21': {
				title: 'Allriannes ankomst',
				description:
					'Allrianne Cett anländer till palatset och omfamnar Breeze. Elend erbjuder gästfrihet.',
			},
			'woa-22': {
				title: 'Politisk spänning',
				description: 'Vin jagar Zane i dimman medan belägringen hårdnar.',
			},
			'woa-24': {
				title: 'Nattvak',
				description: 'Vin vakar utanför Elends balkong. Zane hittar henne och provocerar.',
			},
			'woa-25': {
				title: 'Shopping och skärmytsling',
				description: 'Tindwyl tar Vin på shopping. Larmet ljuder — Straffs armé anfaller murarna.',
			},
			'woa-26': {
				title: 'Förhandling med Straff',
				description: 'Vin följer Elend till Straffs krigsläger och demonstrerar skrämmande kraft.',
			},
			'woa-27': {
				title: 'Bluff',
				description:
					'Straff hotar döda Elend. Bluffen lyckas — men Församlingen har röstat om misstroende.',
			},
			'woa-28': {
				title: 'Åter från förhandling',
				description: 'Vin återvänder till Venturefästet, plågad av Zanes viskningar.',
			},
			'woa-29': {
				title: 'Sömnlöshet och insikt',
				description: 'Vin och OreSeur sitter i nattdimman. Vin får en insikt om Djupets natur.',
			},
			'woa-30': {
				title: 'Djupets teori',
				description: 'Vin läser Sazeds avskrifter och föreslår att dimman är Djupet.',
			},
			'woa-31': {
				title: 'Penrods nominering',
				description: 'Elend nominerar lord Penrod till kansler. Nomineringen av ny kung börjar.',
			},
			'woa-33': {
				title: 'Kandrans hemligheter',
				description:
					'Vin ifrågasätter om hon är den sanna Hjälten. OreSeur avslöjar att kandror har egen religion.',
			},
			'woa-34': {
				title: 'Zane på taket',
				description:
					'Vin hittar Zane på taket. Han bränner atium och attackerar. Kolosser en dag bort.',
			},
			'woa-35': {
				title: 'Middag med Cett',
				description:
					'Vin provar en ny dimföddsklänning. Cett erbjuder mat i utbyte mot atiumgömman.',
			},
			'woa-36': {
				title: 'Överlevarens kyrka',
				description:
					'Vin upptäcker att Demoux leder Överlevarens kyrka. Hon lovar hålla hans hemlighet.',
			},
			'woa-38': {
				title: 'Val och mord',
				description:
					'Elend avslöjar sitt medlemskap i Överlevarens kyrka. Lönnmördare anfaller. Församlingen väljer Penrod.',
			},
			'woa-40': {
				title: 'Återhämtning',
				description:
					'Vin vaknar i sjukhussäng med Elend bredvid sig. Zane lämnar atium. OreSeur återvänder i ny hundkropp.',
			},
			'woa-43': {
				title: 'Anfall mot Cett',
				description:
					'Vin och Zane anfaller Hastingsfästet. Vin når Cett men ber om nåd. Cetts armé retirerar.',
			},
			'woa-44': {
				title: 'Camons gömställe',
				description:
					'Vin gömmer sig i Camons gamla gömställe. Hon säger att de måste lämna Luthadel och resa norrut.',
			},
			'woa-45': {
				title: 'Råd om kärlek',
				description: 'Vin besöker Sazed för kärleksråd. Sazed beslutar att säkra deras avfärd.',
			},
			'woa-46': {
				title: 'Härskarens rum',
				description:
					'Vin går till Härskarens hemliga rum i Kredik Shaw. Hon känner Brunnens pulser.',
			},
			'woa-47': {
				title: 'Duell med Zane',
				description:
					'Zane försöker övertala Vin att lämna. Hon väljer Elend. Zane attackerar. Vin dödar honom.',
			},
			'woa-49': {
				title: 'Flykt genom Tennporten',
				description: 'Vin, Elend och Spook lämnar Luthadel genom Tennporten.',
			},
			'woa-50': {
				title: 'Bryter läger',
				description: 'Spook känner något förfölja dem i dimman — Vin känner igen dimgasten.',
			},
			'woa-51': {
				title: 'Jastes och sanning',
				description:
					'Vin genomborrar dimgasten över Elend. Elend avrättar Jastes. Spook avslöjar Sazeds svek.',
			},
			'woa-52': {
				title: 'Tennlopp',
				description:
					'Vin springer ensam tillbaka i ett desperat tennlopp medan kolosser anfaller staden.',
			},
			'woa-53': {
				title: 'Vin räddar Sazed',
				description:
					'Vin anländer när Sazed är på väg att övermannas vid portarna och krossar kolosser.',
			},
			'woa-54': {
				title: 'Kontrollerar kolosser',
				description:
					'Vin upptäcker att hon kan kontrollera kolosser genom en svaghet inbyggd av Härskaren.',
			},
			'woa-55': {
				title: 'Besegrar Straff',
				description:
					'Vin kastar sig ut ur staden med duraluminstål, slår ner Straff och hans officerare.',
			},
			'woa-57': {
				title: 'Den hemliga dörren',
				description:
					'Vin leder Hammond och Spook till Kredik Shaw och öppnar en dold allomantisk dörr.',
			},
			'woa-58': {
				title: 'Brunnen upptäcks',
				description:
					'Vin finner Uppstigningens brunn. Dimgasten genomborrar Elend — dödligt sårad.',
			},
			'woa-59': {
				title: 'Frigör kraften',
				description:
					'Vin tar Brunnens kraft. Lurad av Ruins manipulation frigör hon kraften. "Jag är fri!"',
			},
			'woa-60': {
				title: 'På murarna',
				description:
					'Vin står med en helad Elend. Hon erkänner sitt fruktansvärda misstag — hon släppte lös något.',
			},
			'hoa-3': {
				title: 'Första gömman',
				description:
					'Vin öppnar gömman i Vetitan och finner förnödenheter och en metallplatta från Härskaren.',
			},
			'hoa-8': {
				title: 'Dimsjukan',
				description:
					'Vin observerar dimman attackera flyktingar. Elend insisterar att immunitet kräver exponering.',
			},
			'hoa-10': {
				title: 'Återförening med armén',
				description: 'Sazed, Breeze, Goradel och Allrianne hinner ikapp Elends armé.',
			},
			'hoa-12': { title: 'Krigsråd', description: 'Elend frågar: "Vad skulle Kelsier göra?"' },
			'hoa-15': {
				title: 'Fiende i dimman',
				description:
					'Vin känner sig inte längre skyddad av dimman. Kolossmänniskan säger att dimman hatar henne.',
			},
			'hoa-21': {
				title: 'Sexton procent',
				description: 'Vin ber Noorden räkna om — exakt sexton procent av soldaterna insjuknar.',
			},
			'hoa-25': {
				title: 'Spaningsuppdrag',
				description:
					'Vin infiltrerar Fadrex. Elend erbjuder sig följa med men hon säger att han inte är redo.',
			},
			'hoa-27': {
				title: 'Informatören Slowswift',
				description:
					'Vin besöker Slowswift i Fadrex. Han prisar Yomens styre. Det blir bal ikväll.',
			},
			'hoa-27.2': {
				title: 'Ministeriespaning',
				description:
					'Vin spanar mot Resursministeriet och känner allomantiska pulser som försvinner.',
			},
			'hoa-28': {
				title: 'Förtroende och djärv plan',
				description: 'Vin föreslår att storma in på Yomens bal och konfrontera honom direkt.',
			},
			'hoa-30': {
				title: 'Lady Patresen',
				description: 'Elend och Vin går på balen i Oriellefästet. Vin konfronterar lady Patresen.',
			},
			'hoa-37': {
				title: 'Tillverkar kolosser',
				description:
					'Vin upptäcker att kolosser tillverkas av människor — flå döda kolosser och ta fyra spikar.',
			},
			'hoa-40': {
				title: 'Den tredje konsten',
				description: 'Vin ser pusslet läggas: Hemalurgi — den tredje metalliska konsten.',
			},
			'hoa-43': {
				title: 'Andra balen',
				description: 'Vin upptäcker spioner på balen och slår ut dem med mässing-duralumin.',
			},
			'hoa-44': {
				title: 'Inne i gömman',
				description:
					'Vin når gömman men dörren stängs bakom henne. Ruin står framför henne med Reens ansikte.',
			},
			'hoa-45': {
				title: 'Ruin ansikte',
				description:
					'Vin konfronterar varelsen med Reens ansikte. Det är Ruin. Han säger att han funnits med henne sedan barndomen.',
			},
			'hoa-48': {
				title: 'Härskarens sista ord',
				description:
					'I mörkret läser Vin Härskarens sista bekännelse på en metallplatta. Ruin talade till hans sinne.',
			},
			'hoa-50': {
				title: 'Drogat vin',
				description:
					'Telden Hasting erbjuder drogat vin. Vin bluffar men misslyckas. Hon dricker och kollapsar.',
			},
			'hoa-54': {
				title: 'Yomens fånge',
				description:
					'Vin vaknar i kedjor. Yomen återlämnar hennes örhänge. Ruin viskar åt henne att döda.',
			},
			'hoa-57': {
				title: 'Ruins natur',
				description:
					'Ruin lär ut entropi — allt måste sluta. Vins insikt: hans inflytande är viskningar som förstärker.',
			},
			'hoa-60': {
				title: 'I obligatorernas domstol',
				description:
					'Vin ställs inför Yomen. Hon befriar sig men Yomen bränner atium. Hon avslöjar: atium.',
			},
			'hoa-63': {
				title: 'Atiumdimfödd',
				description:
					'Vin inser: Yomen är en Atiumdimfödd — en Siare. Hon markerar gömmernas platser. Marsh anländer.',
			},
			'hoa-65': {
				title: 'Befrielse',
				description:
					'Vin tar Marshs metallflaska, tar bort örhänget och driver in spiken i Marshs panna. Marsh flyr.',
			},
			'hoa-67': {
				title: 'Annalkande storm',
				description:
					'En massiv kolossarmé samlas utanför Fadrex. Vin säger åt Elend att hämta atiumgömman.',
			},
			'hoa-67.2': {
				title: 'Avresa mot Luthadel',
				description: 'Vin flyger österut mot Luthadel och drar inkvisitorerna från Elend.',
			},
			'hoa-72': {
				title: 'Örhänget',
				description:
					'Marsh torterar Vin. Han märker örhänget och sliter ut det. Ruins röst tystnar. Dimma strömmar in.',
			},
			'hoa-73': {
				title: 'Uppstigning',
				description:
					'Vin brinner med dimman som oändlig metallreserv. Hon utplånar inkvisitorerna och Kredik Shaw.',
			},
			'hoa-76': {
				title: 'Välkommen till gudomlighet',
				description:
					'Vin svävar över Luthadel med Bevarelses kraft. Ruin hälsar henne hånfullt välkommen.',
			},
			'hoa-79': {
				title: 'Jagar Ruin',
				description:
					'Vin jagar Ruin till Hatshins gropar. Hon ser flyktinglägret och kandror som flyttar atium.',
			},
			'hoa-80': {
				title: 'Vindguide',
				description: 'Som Bevarelse viskar Vin Elends namn i vinden och leder honom genom lägret.',
			},
			'hoa-81': {
				title: 'Betraktar striden',
				description:
					'Elend leder Siarna i anfall. Hans svärd genomborrar Marshs hals. Han dör leende.',
			},
			'hoa-81.2': {
				title: 'Slutattacken',
				description:
					'Vin attackerar Ruin direkt. Attacken dödar både Ati och Vin. Hennes kropp faller bredvid Elends.',
			},
			'hoa-83': {
				title: 'Återfödelsens fält',
				description:
					'Vins kropp återfinns i ett fält av blommor och grönt gräs — Sazeds omskapade värld.',
			},
		},
		sazed: {
			...enData.movements.sazed,
			'tfe-9': {
				title: 'Terrisisk tjänare',
				description:
					'Sazed anländer till lord Renoux egendom i Fellise som Vins lärare och tjänare, undervisar i etikett, dans och uppträdande. Han presenterar trellagismen — den femte religionen han föreslår — och erkänner att han kan 562 till.',
			},
			'tfe-10.2': {
				title: 'Lagersamlingen',
				description:
					'Sazed deltar i den hemliga lagersamlingen med Kelsier och Vin, och ser Överlevaren tala till skaarbetarna.',
			},
			'tfe-12': {
				title: 'Väktaren på balen',
				description:
					'Sazed följer med Vin som tjänare till den första balen i Venturefästet och vakar över henne medan hon smyger sig in i adelns sällskapsliv.',
			},
			'tfe-13': {
				title: 'Avrapportering i Fellise',
				description:
					'Sazed återvänder till Renoux egendom i Fellise med Vin och Kelsier för att gå igenom resultaten av Vins första bal och planera nästa steg.',
			},
			'tfe-15': {
				title: 'Räddar Vin',
				description:
					'Sazed bär Vin till Clubs butik för att rädda och behandla henne efter skadorna vid Kredik Shaw. Han undersöker också boken skriven på khlenni.',
			},
			'tfe-16': {
				title: 'Tillbaka i Fellise',
				description:
					'Efter att ha stabiliserat Vins tillstånd i Clubs butik återvänder Sazed till Renoux egendom i Fellise.',
			},
			'tfe-17': {
				title: 'Översätter khlenniboken',
				description:
					'I bibliotekets på Renoux egendom i Fellise arbetar Sazed med att översätta den khlenni-skrivna boken som Vin förde med sig från Kredik Shaw.',
			},
			'tfe-18': {
				title: 'Väktaren vid Elariel',
				description:
					'Sazed följer med Vin som terrisisk tjänare till balen vid Elarielfästet och vakar över henne mitt i det adliga hovet.',
			},
			'tfe-19': {
				title: 'Informationsutbyte',
				description:
					'Sazed finns på Renoux herrgård när Kelsier återvänder via Törnvägen. De utbyter information om adelshusen och upprorets framsteg medan Kelsier föreläser Vin om att hålla sig borta från Elend.',
			},
			'tfe-22': {
				title: 'Ferokemins hemligheter',
				description:
					'På Renoux egendom talar Sazed med Vin om terriserna i Härskarens dagbok. Han avslöjar ferokemins hemligheter och hur Väktarna grundades efter att terrisiska religioner gick förlorade. Från dagboken lär han sig också nya fakta om sitt folk — att jorden en gång var grön och bördig.',
			},
			'tfe-23': {
				title: 'Väktaren vid Hastings',
				description:
					'Sazed följer med Vin som terrisisk tjänare till balen vid Hastingsfästet och väntar medan hon sprider rykten och umgås med adeln.',
			},
			'tfe-27': {
				title: 'Brev från Marsh',
				description:
					'Sazed återvänder till Clubs butik med ett brev från Marsh som innehåller nyheter och mötesanvisningar. Han har även med sig översättningar av Härskarens dagbok.',
			},
			'tfe-28': {
				title: 'Väktaren vid Likal',
				description:
					'Sazed följer med Vin som terrisisk tjänare till balen vid Likalfästet och väntar medan hon trappar upp huskriget och talar med Elend.',
			},
			'tfe-29': {
				title: 'Ferokemlektioner',
				description:
					'På Renoux egendom ger Sazed Vin den sista dagboksöversättningen. Han förklarar ferokemi mer i detalj och Vin försöker bränna ett av hans tennsinnen. Senare ansluter sig Sazed när Kelsier studerar Marshs detaljerade karta. Den natten ber Kelsier Sazed berätta om religioner.',
			},
			'tfe-30': {
				title: 'Väktaren vid Venture',
				description:
					'Sazed följer med Vin till den sista husbalen vid Venturefästet. Gästerna bildar allianser och lady Valette blir kyligt mottagen. Sazed lämnar balen innan Vin upptäcker mordkomplotten mot Elend och strider mot Shan Elariel.',
			},
			'tfe-31': {
				title: 'Behandlar Vins skador',
				description:
					'Sazed behandlar Vins skador i Clubs butik efter att hon anlänt skadad från sin strid med Shan Elariel och Elariels mördare. Han lyssnar medan Vin berättar om nattens händelser.',
			},
			'tfe-33': {
				title: 'Nödgömstället',
				description:
					'Sazed är med laget i reservkällaren nära Clubs butik efter Kelsiers förstörelse av Hatshins gropar. Vin talar med Sazed om den elfte metallen. När skamänniskor förs till Fontäntorget för avrättning och Spook dyker upp i en fångvagn, stannar Sazed i gömstället medan Kelsier strider mot inkvisitorn.',
			},
			'tfe-35': {
				title: 'Tröstar Vin',
				description:
					'Sazed stannar hos Vin i nödgömstället efter Kelsiers död. Han erbjuder tröstande ord medan Vin rasar över att Kelsier övergett henne. Han stannar kvar när laget går till lagret för att se kandran i Kelsiers gestalt.',
			},
			'tfe-37': {
				title: 'Den befriade ferokemisten',
				description:
					'Sazed förs till Vins cell i Kredik Shaw. Han verkar krympa, sedan sväller hans muskler till dubbel storlek när han frigör sin lagrade ferokemiska kraft och krossar dörren.',
			},
			'tfe-38': {
				title: 'Rikets fall',
				description:
					'Sazed dyker upp vid den sista konfrontationen i Kredik Shaw med en metallficka till Vin. Han bevittnar Härskarens fall — när Vin sliter av hans armband åldras han dramatiskt.',
			},
			'tfe-39': {
				title: 'Förståelse av tyrannen',
				description: 'Sazed förklarar att Härskaren var både ferokemist och allomant.',
			},
			'woa-7': {
				title: 'Marshs återkomst',
				description:
					'Sazed fortsätter undervisa befriade skaa. Marsh dyker upp och erbjuder sig leda honom till Serans konventikel.',
			},
			'woa-9': {
				title: 'Resa till konventikeln',
				description:
					'Sazed och Marsh reser mot Serans konventikel. Marsh blir alltmer avståndstagande.',
			},
			'woa-12': {
				title: 'Dechiffrera plattorna',
				description:
					'Sazed studerar Kwaans inskription och upptäcker att Hjälteprofetiorna ändrats.',
			},
			'woa-15': {
				title: 'Dödsfall i dimman',
				description: 'Sazed finner byar där människor dött oförklarligt i dimman.',
			},
			'woa-19': {
				title: 'Kolossarmén',
				description: 'Sazed möter tjugotusen kolosser. Tillfångatas och förs till Jastes Lekal.',
			},
			'woa-22': {
				title: 'Åter till Luthadel',
				description: 'Sazed anländer med avgörande nyheter om ändrade profetior och dimdöd.',
			},
			'woa-23': {
				title: 'Tredje armén',
				description: 'Sazed rapporterar om kolosser under Jastes Lekal. Varnar att dimman dödar.',
			},
			'woa-30': {
				title: 'Avskrifter av inskriptioner',
				description: 'Sazed arbetar med avskrifter. Vin föreslår att dimman är Djupet.',
			},
			'woa-36': {
				title: 'Härbärge i lagret',
				description: 'Sazed tröstar flyktingar i arsenalen. Breeze betvingar alla.',
			},
			'woa-37': {
				title: 'Debatt om Djupet',
				description:
					'Sazed och Tindwyl studerar en fragmentarisk biografi. Tindwyl uttrycker sitt begär.',
			},
			'woa-40': {
				title: 'Diskuterar profetian',
				description: 'Sazed med Tindwyl jämför original och ändrade profetior.',
			},
			'woa-41': {
				title: 'Ändrade profetior',
				description: 'Sazed och Tindwyl diskuterar konventikelplattorna. Elend besöker för råd.',
			},
			'woa-45': {
				title: 'Avrivna hörn',
				description: 'Tindwyl upptäcker att hörnen rivits bort. Vin och Elend ber om kärleksråd.',
			},
			'woa-46': {
				title: 'Flyktplan',
				description:
					'Sazed samlar Breeze, Clubs, Hammond och Dockson. De planerar att smuggla ut Elend och Vin.',
			},
			'woa-49': {
				title: 'Ser dem lämna',
				description: 'Sazed vakar från murarna när Elends grupp flyr norrut.',
			},
			'woa-50': {
				title: 'Förbereder för det värsta',
				description: 'Sazed fyller sina metallminnen inför kolossanfallet. Omfamnar Tindwyl.',
			},
			'woa-51': {
				title: 'Kolosser anfaller',
				description: 'Kolosser inleder attacken. Sazed bevakar från Stålportens murar.',
			},
			'woa-52': {
				title: 'Helige Förste Vittne',
				description: 'Sazed försvarar Stålporten. Folkmassan kallar honom Helige Förste Vittne.',
			},
			'woa-53': {
				title: 'Försvarar Stålporten',
				description:
					'Sazed strider vid Stålporten. Hans järnminne tar slut. Tennporten har fallit.',
			},
			'woa-54': {
				title: 'Söker Tindwyl',
				description: 'Efter timmars sökande finner Sazed Tindwyls kropp och sörjer.',
			},
			'woa-55': {
				title: 'Anförtror befälet',
				description: 'Vin sätter Sazed i befäl över staden och ger sig av.',
			},
			'woa-57': {
				title: 'Strid mot Marsh',
				description: 'Sazed inser att han är Helige Förste Vittne. Marsh kastar honom mot väggen.',
			},
			'woa-58': {
				title: 'Överlever inkvisitorn',
				description:
					'Marsh krossar Sazeds revben men han läker med metallminnen. Hammond slår Marsh.',
			},
			'woa-59': {
				title: 'För sent vid Brunnen',
				description: 'Sazed når Brunnen men för sent — Vin har redan frigjort kraften.',
			},
			'woa-60': {
				title: 'Förlust av all tro',
				description:
					'Sazed återvänder till konventikeln. Inskriptionen har ändrats. Han förlorar all tro.',
			},
			'hoa-4': {
				title: 'Sydlig diplomati',
				description: 'Sazed reser med Breeze till Lekal Stad för att förhandla fram ett fördrag.',
			},
			'hoa-8': {
				title: 'På väg till armén',
				description: 'Sazed och Breeze reser för att ansluta till Elends armé.',
			},
			'hoa-10': {
				title: 'Återförenas med armén',
				description: 'Sazed, Breeze, Goradel och Allrianne når Elends armé på marsch.',
			},
			'hoa-12': { title: 'Krigsråd', description: 'Sazed deltar i Elends krigsråd.' },
			'hoa-18': {
				title: 'Resa norrut',
				description: 'Sazed, Breeze, Allrianne och kapten Goradel reser norrut mot Urteau.',
			},
			'hoa-18.2': {
				title: 'Bland terriserna',
				description: 'Sazed stannar vid Hatshins gropar och råder de äldste.',
			},
			'hoa-22': {
				title: 'Terrisk anomali',
				description: 'Sazed upptäcker att ingen terris drabbats av dimsjuka.',
			},
			'hoa-25': {
				title: 'Lämnar terriserna',
				description: 'Sazed lämnar Hatshins gropar och fortsätter norrut.',
			},
			'hoa-29': {
				title: 'Kallad av Medborgaren',
				description: 'Sazed, Breeze och Allrianne anländer till Urteau och kallas till Quellion.',
			},
			'hoa-29.2': {
				title: 'Underjordisk sjö',
				description: 'Spook leder gruppen till Härskarens förråd och en underjordisk sjö.',
			},
			'hoa-31': {
				title: 'Vattenavledning',
				description: 'Sazed, Spook och Breeze diskuterar hur Quellion ska störtas.',
			},
			'hoa-38': {
				title: 'Överlevaren från lågorna',
				description:
					'Sazed hör talas om Överlevaren från lågorna — utan att veta att det är Spook.',
			},
			'hoa-41': {
				title: 'Överlevarens identitet',
				description: 'Sazed ser en figur bära en flicka ur brinnande byggnad — Spook.',
			},
			'hoa-46': {
				title: 'Trellagism och tillit',
				description:
					'Sazed väntar på Spooks återkomst. Spook ber honom återföra vatten till kanalerna.',
			},
			'hoa-49': {
				title: 'Kanalteknik',
				description: 'Sazed forskar om att fylla Urteaus torra kanaler. Beldre bönfaller.',
			},
			'hoa-53': {
				title: 'Ser Spook växa',
				description: 'Sazed hör Spook berätta för Beldre om livet i Kelsiers lag.',
			},
			'hoa-56': {
				title: 'Behov av tro',
				description: 'Spook säger att han tror någon vakar över honom. Sazed inser vad han saknat.',
			},
			'hoa-50': {
				title: 'Grottupptäckt',
				description: 'Sazed upptäcker mekanismen för att fylla kanalsystemet med vatten.',
			},
			'hoa-58': {
				title: 'Räddar Urteau',
				description:
					'Sazed lär Spook manövrera vattenavledningen. Spook dyker in i brinnande byggnad.',
			},
			'hoa-59': {
				title: 'Förkunnarens börda',
				description: 'TenSoon anländer till Urteau. Han måste träffa Vin.',
			},
			'hoa-62': {
				title: 'Förkunnaren',
				description: 'Sazed vakar över Spook på sjukhuset. TenSoon avslöjar sanningen om kandror.',
			},
			'hoa-66': {
				title: 'Ridande hemåt',
				description: 'Sazed rider TenSoon söderut mot kandrornas hemland.',
			},
			'hoa-68': {
				title: 'Världsbäraren',
				description:
					'Sazed leds genom kandra-tunnlar. Första Generationen kallar honom Världsbärare.',
			},
			'hoa-71': {
				title: 'Det Anförtrodda',
				description: 'Sazed finner den enorma atiumgömman som kandror gömt i århundraden.',
			},
			'hoa-75': {
				title: 'Kuppen',
				description: 'Sazed lär sig kandra-religionen. KanPaar genomför en kupp. Sazed fängslas.',
			},
			'hoa-78': {
				title: 'Räddad av TenSoon',
				description: 'TenSoon räddar Sazed och Första Generationen under inbördeskriget.',
			},
			'hoa-79': {
				title: 'Beslutet börjar',
				description: 'TenSoon attackerar Sazed — Ruin kontrollerar kandror genom Välsignelser.',
			},
			'hoa-80': {
				title: 'Försvarar Det Anförtrodda',
				description: 'Sazed förseglar dörren mot rebellkandror. Elend träder in.',
			},
			'hoa-81': {
				title: 'En guds kropp',
				description: 'Sazed avslöjar: atium är Ruins kropp. Soldater fällda av dimman är Siare.',
			},
			'hoa-82': {
				title: 'Tidernas Hjälte',
				description:
					'Sazed tar både Bevarelse och Ruin och använder all sin kunskap för att återställa världen — blir Harmoni.',
			},
			'hoa-83': {
				title: 'Harmoni',
				description:
					'Sazed uppstiger som Harmoni. Återskapar världen — flyttar planeten, återställer grönskan.',
			},
		},
		elend: {
			...enData.movements.elend,
			'tfe-12': {
				title: 'Den läsande adelsmannen',
				description:
					'Elend Venture märker att Vin står ensam på en balkong under balen i hans eget fäste och närmar sig. Han irriterar henne genom att plocka fram "Märkenas prövningar" för att läsa medan resten av adeln dansar och intrigerar.',
			},
			'tfe-18': {
				title: 'Kväll med Valette',
				description:
					'Elend deltar i balen vid Elarielfästet och sätter sig som vanligt vid Vins bord för att läsa. Han berömmer hennes klänning och hon blir svarslös.',
			},
			'tfe-23': {
				title: 'Näsduken',
				description:
					'Elend hittar Vin vid balen på Hastingsfästet. Hon frågar om han varit med en skakvinna. Han erkänner att hans far tvingade honom vid tretton och kvinnan dödades efteråt. Han ger henne en näsduk som tecken på seriös uppvaktning. Efter att han och hans vänner lämnat klättrar de upp i ett torn för att diskutera Härskarens misslyckanden.',
			},
			'tfe-28': {
				title: 'Balen vid Likalfästet',
				description:
					'Elend dyker upp framför Vin vid Likalfästets bal. Säger att han vill kyssa henne men Vin insisterar att han inte känner henne. Under en promenad avslöjar han att Ventures förmögenhet helt kommer från atium i Hatshins gropar — full tillit. Han nämner att hus Tekiel utplånades av hus Hastings och försöker övertala Valette att lämna Luthadel.',
			},
			'tfe-28.2': {
				title: 'Faderns kallelse',
				description:
					'Elend återvänder till Venturefästet och försöker smyga förbi sin fars rum. Lord Straff Venture — en tenndimmägare som inte missar något — ropar på honom. Straff beordrar middag med hus Hastings. Senare avslöjar Jastes att han följde Valettes vagn — hon anlände till Fellise bara med terrisern, och Valette försvann. Elend inser att han avslöjat atiumhemligheten och erbjuder sin far en överenskommelse: han går på middagen i utbyte mot spioner som bevakar Valette.',
			},
			'tfe-30': {
				title: 'Venturebalen',
				description:
					'Elend äter med sin far på Venturefästet under balen. Vin fångar hans uppmärksamhet och de konfronterar varandra. Vin får reda på mordkomplotten mot Elend och rusar ut i dimman. Natten slutar i kaos när Vin strider mot och dödar lady Shan. Elend smyger därifrån i förvirringen.',
			},
			'tfe-31': {
				title: 'Spionrapporter',
				description:
					'Elend och Jastes möter Felt som rapporterar allt Elends spioner funnit om Clubs butik och dess invånare. Sedan leder Venturevakter Elend till hans far Straff som avslöjar att Shan Elariel var en dimfödd skickad att mörda Elend.',
			},
			'tfe-33': {
				title: 'Avrättningsvagnar',
				description:
					'Elend ser Renoux tjänare inspärrade i en avrättningsvagn på Fontäntorget. Han ropar efter Valette men hittar henne inte i folkmassan.',
			},
			'tfe-34': {
				title: 'Kelsier räddar Elend',
				description:
					'Elend tar sig till Renoux bur på Fontäntorget och frågar efter Valette. En inkvisitor landar på buren och ska hugga Elend med sin yxa när Kelsier anfaller inkvisitorn och räddar hans liv. Kelsier ropar till Elend att Valette är säker.',
			},
			'tfe-36': {
				title: 'Venturehusets makt',
				description:
					'Elends far meddelar att ett skauppror brutit ut och vill fly Luthadel. Elend vägrar lämna. Straff går med på det — hoppas att Elend dör — och överlåter Venturehusets befäl. Elend beordrar soldaterna till Likalfästet för gemensamt försvar och tar fem av sina bästa soldater för att möta skaledarna.',
			},
			'tfe-37': {
				title: 'Räddar Vin',
				description:
					'Elend ger guld till skamän i utbyte mot att bli ledda till Dockson och meddelar att hus Venture inte kommer att motstå upproret — de bör samarbeta. Elend och sex soldater stormar Kredik Shaw för att rädda Vin. Hemligheten avslöjas — han vet att hon är dimfödd. Vin tar hans ansikte i sina händer, kysser honom, och rusar iväg för att döda Härskaren.',
			},
			'tfe-38': {
				title: 'Filosofkungen',
				description:
					'Efter Härskarens död framträder Elend som en samlande röst för ordning. Han börjar mötas med ska- och adelsledare för att utarbeta lagen för den nya staten.',
			},
			'tfe-39': {
				title: 'Den nye kungen',
				description:
					'Elend Venture accepteras som kung. Skriver ny lag. Vin och Elend omfamnar varandra.',
			},
			'woa-1': {
				title: 'Kung på muren',
				description:
					'Elend står på Luthadels murar och ser sin fars armé anlända. Belägringen börjar.',
			},
			'woa-3': {
				title: 'Skriver lagar',
				description:
					'Elend författar förslag till Församlingen. Vin ansluter efter mötet med dimgasten.',
			},
			'woa-5': {
				title: 'Lärd kung',
				description: 'Elend sköter logistiken i den belägrade staden med Dockson.',
			},
			'woa-6': {
				title: 'Betraktar från balkongen',
				description: 'Elend ser Vin träna med Ham på gården.',
			},
			'woa-10': {
				title: 'Tal i Församlingen',
				description: 'Elend talar till Församlingen. Nyheter om andra armén anländer.',
			},
			'woa-11': {
				title: 'Spaning på murarna',
				description: 'Elend spanar mot Cetts armé. Laget hittar kandra-ben.',
			},
			'woa-13': {
				title: 'Sammankallar råd',
				description: 'Elend samlar krigsråd. Tindwyl begär enskild audiens.',
			},
			'woa-14': {
				title: 'Utbildning av en kung',
				description: 'Tindwyl undervisar Elend i konungaskap. Han börjar långsamt förändras.',
			},
			'woa-20': {
				title: 'Förhandlingsstrategi',
				description: 'Elend och laget planerar förhandling med Straff. Allrianne Cett anländer.',
			},
			'woa-21': {
				title: 'Gästfrihet mot Allrianne',
				description:
					'Elend erbjuder gästfrihet. Dockson föreslår att använda henne som förhandlingskort.',
			},
			'woa-22': {
				title: 'Kämpar med styret',
				description: 'Elend kämpar med Församlingen och regeringskraven.',
			},
			'woa-23': {
				title: 'Tredje armén',
				description: 'Elend hör Sazeds rapport om tjugotusen kolosser.',
			},
			'woa-26': {
				title: 'Förhandling med Straff',
				description: 'Elend reser med Vin till Straffs krigsläger.',
			},
			'woa-27': {
				title: 'Bluff och fall',
				description: 'Straff hotar döda Elend. Bluffen lyckas. Församlingen har röstat bort honom.',
			},
			'woa-31': {
				title: 'Tal i Församlingen',
				description: 'Elend nominerar Penrod till kansler. Kungavalet börjar.',
			},
			'woa-32': { title: 'Erkänner nederlag', description: 'Elend accepterar politiskt nederlag.' },
			'woa-34': {
				title: 'Studerar strategi',
				description: 'Elend studerar strategi i biblioteket. Vin hittar Zane på taket.',
			},
			'woa-35': {
				title: 'Middag med Cett',
				description: 'Elend och Vin äter middag med lord Cett. Cett erbjuder mat för atium.',
			},
			'woa-36': {
				title: 'Demoux hemlighet',
				description: 'Elend upptäcker att Demoux leder Överlevarens kyrka.',
			},
			'woa-38': {
				title: 'Kungaval',
				description: 'Elend avslöjar medlemskap i Överlevarens kyrka. Lönnmördare anfaller.',
			},
			'woa-39': {
				title: 'Avsatt',
				description: 'Elend bearbetar sin avsättning. Arbetar bakom kulisserna.',
			},
			'woa-40': {
				title: 'Vid Vins sida',
				description: 'Elend stannar vid Vins sjuksäng. Han ryggar för hennes beröring.',
			},
			'woa-41': {
				title: 'Söker råd',
				description: 'Elend besöker Sazed och Tindwyl för råd om att återta makten.',
			},
			'woa-43': {
				title: 'Efter anfallet',
				description: 'Elend hanterar efterdyningarna av Vins anfall mot Cetts armé.',
			},
			'woa-44': {
				title: 'Lämnar Luthadel',
				description: 'Vin säger att de måste lämna Luthadel och resa norrut till Terris.',
			},
			'woa-45': { title: 'Kärleksråd', description: 'Elend och Vin söker kärleksråd hos Sazed.' },
			'woa-49': {
				title: 'Flykt genom Tennporten',
				description: 'Elend, Vin och Spook lämnar Luthadel genom Tennporten.',
			},
			'woa-50': {
				title: 'Läger norrut',
				description: 'Elend slår läger med Vin och Spook. Spook känner förföljelse i dimman.',
			},
			'woa-51': {
				title: 'Jastes och rättvisa',
				description: 'Elend avrättar sin gamle vän Jastes Lekal. Spook avslöjar Sazeds svek.',
			},
			'woa-52': {
				title: 'Ridande tillbaka',
				description: 'Elend rider desperat tillbaka mot Luthadel.',
			},
			'woa-54': {
				title: 'Befäl över försvaret',
				description: 'Elend organiserar stadens försvar. Vin anländer med kontrollerade kolosser.',
			},
			'woa-55': {
				title: 'Kejsare Elend',
				description: 'Vin tvingar Penrod, Cett och Janarle att erkänna Elend som kejsare.',
			},
			'woa-57': {
				title: 'Nedstigning till Brunnen',
				description: 'Elend, Vin, Hammond och Spook stiger ner i grottan under Kredik Shaw.',
			},
			'woa-58': {
				title: 'Dödligt sårad',
				description: 'Elend ligger döende på grottgolvet, genomborrad av dimgasten.',
			},
			'woa-59': {
				title: 'Förvandlad',
				description: 'Vin helar Elend och ger honom den sista lerasiumkulan — gör honom dimfödd.',
			},
			'woa-60': {
				title: 'Kejsare och dimfödd',
				description:
					'Elend står på murarna, nu dimfödd. Han lovar att de ska överleva tillsammans.',
			},
			'hoa-1': {
				title: 'Kejsare och general',
				description: 'Elend leder sin armé i fälttåg för att ena dominanserna.',
			},
			'hoa-3': {
				title: 'Vetitans gömma',
				description: 'Elend och Vin öppnar gömman i Vetitan och finner Härskarens budskap.',
			},
			'hoa-5': {
				title: 'Marsch mot Fadrex',
				description: 'Elend marscherar mot Fadrex för att säkra gömman där.',
			},
			'hoa-8': {
				title: 'Immunitet mot dimman',
				description: 'Elend insisterar att immunitet mot dimsjukan kräver exponering.',
			},
			'hoa-10': {
				title: 'Återsamling av laget',
				description: 'Sazed, Breeze, Goradel och Allrianne ansluter till Elends armé.',
			},
			'hoa-12': {
				title: 'Krigsråd',
				description: 'Elend sammankallar råd och frågar: "Vad skulle Kelsier göra?"',
			},
			'hoa-21': {
				title: 'Analyserar data',
				description: 'Elend granskar Noordens data. Vin finner sextioprocentsproportionen.',
			},
			'hoa-25': {
				title: 'Ankomst till Fadrex',
				description: 'Elends armé når Fadrex. Han erbjuder sig följa Vin men hon säger nej.',
			},
			'hoa-28': {
				title: 'Djärv plan',
				description: 'Elend stödjer Vins plan att storma in på Yomens bal.',
			},
			'hoa-30': {
				title: 'Bal i Fadrex',
				description: 'Elend och Vin går på balen i Oriellefästet.',
			},
			'hoa-35': { title: 'Belägring av Fadrex', description: 'Elend leder belägringen av Fadrex.' },
			'hoa-37': {
				title: 'Sanningen om kolosser',
				description: 'Elend upptäcker att kolosser tillverkas av människor.',
			},
			'hoa-40': {
				title: 'Hemalurgi upptäckt',
				description:
					'Elend hjälper till att lägga pusslet: Hemalurgi — den tredje metalliska konsten.',
			},
			'hoa-43': {
				title: 'Andra balen',
				description: 'Elend och Vin deltar i andra balen i Resursministeriet.',
			},
			'hoa-55': {
				title: 'Oro för Vin',
				description: 'Elend blir alltmer orolig när Vin inte återvänder från Fadrex.',
			},
			'hoa-62': {
				title: 'Återförenad med Vin',
				description: 'Elend återförenas med Vin efter hennes flykt från Fadrex.',
			},
			'hoa-65': {
				title: 'Rusande mot Luthadel',
				description: 'Elend leder armén mot Luthadel medan Vin drar bort inkvisitorerna.',
			},
			'hoa-67': {
				title: 'Inne i Fadrex',
				description: 'Elend inne i Fadrex med Vin och Yomen medan kolossarmé samlas utanför.',
			},
			'hoa-72': {
				title: 'Marsch mot Groparna',
				description: 'Elend leder armén mot Hatshins gropar för slutstriden.',
			},
			'hoa-73': {
				title: 'Läger vid Groparna',
				description: 'Elend anländer till Hatshins gropar och finner hundratusentals flyktingar.',
			},
			'hoa-76': {
				title: 'Förbereder för strid',
				description: 'Elend förbereder armén för slutstriden.',
			},
			'hoa-79': {
				title: 'Slutanfallet',
				description: 'Elend talar till Siarna — soldater fällda av dimman som överlevt.',
			},
			'hoa-80': {
				title: 'I Det Anförtroddas kammare',
				description: 'Elend finner Sazed som försvarar atiumgömman.',
			},
			'hoa-81': {
				title: 'Elends sista strid',
				description:
					'Elend leder Siarna i anfall. I en sista blixt av gudomlig insikt genomborrar hans svärd Marshs hals. Han dör leende.',
			},
		},
		marsh: {
			...enData.movements.marsh,
			'tfe-7': {
				title: 'Den motvillige brodern',
				description:
					'Marsh anländer till Clubs butik — Kelsiers storebror och rebell i egen rätt. Han ansluter sig motvilligt till lagets plan.',
			},
			'tfe-10.2': {
				title: 'Lagersamlingen',
				description:
					'Marsh deltar i den hemliga lagersamlingen med laget och ser sin bror Kelsier tala till skaarbetarna.',
			},
			'tfe-20': {
				title: 'Undervisar Vin',
				description:
					'Marsh anländer till Renoux egendom i Fellise för att lära Vin sökning — att använda brons för att upptäcka andra allomnater som bränner metaller, identifiera typen och skilja dimmän från dimfödda. Han lär henne också om koppar och rökares arbete.',
			},
			'tfe-27': {
				title: 'Infiltrerar ministeriet',
				description:
					'Marsh möter Kelsier och Vin i en övergiven byggnad i Vrånggatorna med en lägre förbindelsetjänstemans tatuering vid Inkvisitionsdivisionen. Han har verkligen infiltrerat ministeriet. Han avslöjar att ministeriet placerar betvingare i skadistrikten under ständig betvingning, dolda av rökare. Bekräftar också att inkvisitorer kan dö av ålder.',
			},
			'tfe-30': {
				title: 'Försvinnandet',
				description:
					'Marsh tystnar och hans kommunikation upphör medan han försvinner djupt in i Inkvisitionsdivisionen. Laget fruktar det värsta.',
			},
			'tfe-32': {
				title: 'Kroppen',
				description:
					'Kelsier och Vin hittar Marshs kropp helt tömd på blod — ett tomt skal. Hans brev som hittas senare förklarar att inkvisitorerna troligen hittar honom. Laget sörjer. Men den vanställda kroppen är inte vad den verkar.',
			},
			'tfe-38': {
				title: 'Inkvisitorn',
				description:
					'Marsh dyker upp under det sista anfallet mot Kredik Shaw — levande, förvandlad av elva metallspikar: två genom ögonen, åtta i bröstet, och en i ryggen som binder dem. Han drar spiken ur Kars nacke och dödar honom omedelbart och avslöjar att han dödat alla andra inkvisitorer.',
			},
			'tfe-39': {
				title: 'Elva spikar',
				description:
					'Marsh berättar om sin överlevnad och förvandling. Kandran som spelat lord Renoux erkänner Vin som härskarinna.',
			},
			'woa-7': {
				title: 'Guide till konventikeln',
				description:
					'Marsh dyker upp i Sazeds by och erbjuder sig leda honom till Serans konventikel.',
			},
			'woa-9': {
				title: 'Reser med Sazed',
				description: 'Marsh reser med Sazed mot konventikeln. Beteendet blir alltmer oberäkneligt.',
			},
			'woa-12': {
				title: 'Övergiven',
				description: 'Marsh överger abrupt Sazed vid konventikeln. Ruins inflytande växer.',
			},
			'woa-57': {
				title: 'Ruins bricka',
				description:
					'Marsh dyker upp vid Kredik Shaw helt under Ruins kontroll och kastar Sazed mot väggen.',
			},
			'woa-58': {
				title: 'Nedslagen',
				description: 'Marsh misshandlar Sazed men Hammond slår Marsh i skallen.',
			},
			'hoa-0': {
				title: 'Skapar inkvisitorer',
				description:
					'Under Ruins kontroll genomför Marsh mörka hemalurgiska ritualer i Tathingdwen.',
			},
			'hoa-6': {
				title: 'Leder kolosser',
				description: 'Marsh kommenderar Ruins växande kolossarméer.',
			},
			'hoa-13': {
				title: 'Ruins bricka',
				description: 'Marsh sitter i ett kolossläger och beslutar låtsas underkasta sig.',
			},
			'hoa-34': {
				title: 'Nära Tyrian',
				description: 'Marsh opererar nära Tyrianberget och skapar hemalurgiska spikar av fångar.',
			},
			'hoa-42': {
				title: 'Spikar Penrod',
				description: 'Marsh infiltrerar Luthadel och driver en bronsspik i kung Penrods hjärta.',
			},
			'hoa-63': {
				title: 'Konfronterar Vin',
				description:
					'Marsh finner Vin fängslad i Resursministeriet. Yomen avslöjar endast sju atiumkulor.',
			},
			'hoa-65': {
				title: 'Kräver atium',
				description:
					'Marsh griper Vin. Hon stjäl hans metallflaska och driver spiken i hans panna.',
			},
			'hoa-69': {
				title: 'Budbärarens öde',
				description: 'Marsh överfaller och dödar kapten Goradel med Spooks stålgraverade varning.',
			},
			'hoa-72': {
				title: 'Örhänget',
				description:
					'Marsh torterar Vin i Kredik Shaw. Hans del gör motstånd — han sliter ut örhänget.',
			},
			'hoa-73': {
				title: 'Inte underkuvad',
				description:
					'Marsh ser Vin utplåna inkvisitorer och Kredik Shaw. Hon drar ut en ögonspik men dödar inte.',
			},
			'hoa-81': {
				title: 'Dödar Elend',
				description:
					'Driven av Ruin attackerar Marsh Elend vid Hatshins gropar. Elends svärd genomborrar Marshs hals. När Vin förstör Ruin försvinner kraften som kontrollerat Marsh.',
			},
		},
		spook: {
			...enData.movements.spook,
			'tfe-7': {
				title: 'Ung tenndimmägare',
				description:
					'Spook, Clubs unge brorson, tjänar som lagets vakt och budbärare i snickarverkstaden och talar med en tjock östlig dialekt.',
			},
			'tfe-9': {
				title: 'Budbärarturer',
				description:
					'Spook springer meddelanden mellan Clubs butik i Luthadel och Renoux egendom i Fellise; hans tennförstärkta sinnen gör honom till en utomordentlig spejare.',
			},
			'tfe-16': {
				title: 'Vakar över Vin',
				description:
					'Lestibournes vakar över den skadade Vin i Clubs butik och är där när hon vaknar från Kredik Shaw-spaningens skador. Han berättar hur Kelsier gav honom ett nytt namn: Spook.',
			},
			'tfe-22': {
				title: 'Näsduken',
				description:
					'Spook besöker Renoux egendom i Fellise och hittar Vin som läser Härskarens dagbok. Han säger att Dockson kom för att hämta vapen, rodnar och sträcker fram en näsduk och flyr. Sazed förklarar senare att den unge mannens gåva uttrycker seriös uppvaktning.',
			},
			'tfe-24': {
				title: 'Natt i Clubs butik',
				description:
					'Spook delar en nattlig drink med Kelsier, Hammond och Clubs i Clubs butik medan de diskuterar uppdragets läge.',
			},
			'tfe-26': {
				title: 'Avrättningarna',
				description:
					'Spook stormar in i Clubs butik och meddelar om avrättningar på Fontäntorget. Följer med laget till torget där de bevittnar den brutala offentliga avrättningen av skakvinnor och barn, blod som strömmar i fontänen.',
			},
			'tfe-32': {
				title: 'Takvakt',
				description:
					'Spook vaktar på taket ovan Clubs butik med Vin och lär henne tennknep. Han förklarar att det inte bara handlar om att förstärka sinnen utan om att filtrera det som är viktigt och inte låta sig distraheras av resten.',
			},
			'tfe-33': {
				title: 'Den tillfångatagne vakten',
				description:
					'När laget beger sig till Fontäntorget ses Spook i en avrättningsvagn bredvid lord Renoux — fångad av ministeriet.',
			},
			'tfe-34': {
				title: 'Vittne till offret',
				description:
					'Spook bevittnar från folkmassan hur Kelsier strider och dör vid Fontäntorget — en händelse som präglar resten av hans liv. Överlevarens uppoffring förändrar Spooks förståelse av vad det innebär att tjäna en sak.',
			},
			'tfe-38': {
				title: 'Revolutionen',
				description:
					'Spook strider med laget under den slutliga revolutionen och samordnar skaupproret.',
			},
			'woa-6': {
				title: 'Växande spejare',
				description: 'Spook återvänder från spaning och återförenas med laget i Venturefästet.',
			},
			'woa-11': {
				title: 'Lagets återsamling',
				description: 'Spook i Venturefästet när laget omgrupperar efter Cetts andra armés ankomst.',
			},
			'woa-13': {
				title: 'Krigsråd',
				description: 'Spook deltar i Elends krigsråd om strategi mot de två belägrande arméerna.',
			},
			'woa-20': {
				title: 'Vid krigsrådet',
				description: 'Spook bland laget när de diskuterar förhandlingsplaner med Straff.',
			},
			'woa-23': {
				title: 'Sazeds återkomst',
				description: 'Spook närvarande när Sazed rapporterar om kolossarmén och dimdöden.',
			},
			'woa-25': {
				title: 'Shoppingfölje',
				description: 'Spook följer Vin, Tindwyl, Allrianne och OreSeur på shopping — motvilligt.',
			},
			'woa-44': {
				title: 'Söker Vin',
				description:
					'Spook ansluter till Elend och Hammond för att diskutera Vins anfall mot Cett.',
			},
			'woa-49': {
				title: 'De landsflyktiga',
				description: 'Spook lämnar Luthadel genom Tennporten med Vin, Elend och Allrianne norrut.',
			},
			'woa-50': {
				title: 'Något i dimman',
				description: 'Spook är först att känna något förfölja gruppen i dimman.',
			},
			'woa-51': {
				title: 'Fem förföljare',
				description:
					'Spooks förstärkta sinnen upptäcker fem män. Efter Jastes avrättning avslöjar han Sazeds hemlighet.',
			},
			'woa-52': {
				title: 'Ridande tillbaka',
				description: 'Spook rider desperat tillbaka till den belägrade staden med Elend.',
			},
			'woa-56': {
				title: 'Terrisiska flyktingar',
				description:
					'Spook med Elend möter terrisiska flyktingar från Tathingdwen. Dimgastar skingras vid ankomst.',
			},
			'woa-57': {
				title: 'Inne i staden',
				description: 'Spook går in i Luthadel med flyktingarna och återförenas med Vin.',
			},
			'woa-58': {
				title: 'Grottan',
				description:
					'Spook stiger ner med Vin, Elend och Hammond i den rökfyllda grottan under Kredik Shaw.',
			},
			'hoa-14': {
				title: 'Tennöga',
				description:
					'Plågad av skuld över Clubs död bränner Spook konstant tenn. Strövar genom Urteaus torra kanaler om natten.',
			},
			'hoa-14.2': {
				title: 'Medborgarens råd',
				description: 'Spook bevakar Quellions möten och spanar på Medborgarens syster Beldre.',
			},
			'hoa-16': {
				title: 'Vittne till grymhet',
				description:
					'Spook med ögonbindel låtsas vara blind tiggare och ser Quellions vakter bränna adelsmän inne.',
			},
			'hoa-16.2': {
				title: 'Knivhuggen i folkmassan',
				description:
					'Spook förföljer Medborgaren och talar med Beldre. Upptäcks och genomborras av svärd.',
			},
			'hoa-19': {
				title: 'Röst i lågorna',
				description:
					'Spook vaknar i brinnande byggnad. En röst som kallar sig Kelsier leder honom till allomantisk flaska.',
			},
			'hoa-23': {
				title: 'Feberdrömmar',
				description:
					'Spook ligger i feber i gömstället och återupplever dagen Clubs tog honom till sig.',
			},
			'hoa-26': {
				title: 'Nattliga rykten',
				description:
					'Spook märker metallbit i huden — "Kelsier" säger behåll den. Hör rykten att han är Kelsiers man.',
			},
			'hoa-29': {
				title: 'Den dolda sjön',
				description:
					'Spook klädd som soldat möter Sazeds vagn och leder honom till övergivet ministerium och underjordisk sjö.',
			},
			'hoa-31': {
				title: 'Trosfråga',
				description:
					'Spook säger till Sazed att han tror Kelsier vakar över honom och frågar om religion.',
			},
			'hoa-35': {
				title: 'Konfronterar Durn',
				description:
					'Spook bryter sig in i Durns gömställe. Kelsiers röst driver honom mot Quellion.',
			},
			'hoa-38': {
				title: 'Hemlig utgång',
				description: 'Spook upptäcker nio skallar från tio fångar — en hemlig utgång finns.',
			},
			'hoa-41': {
				title: 'Överlevare från lågorna',
				description:
					'Spook räddar en flicka ur eld. Folkmassan kallar honom "Överlevare från lågorna".',
			},
			'hoa-46': {
				title: 'Beldres trädgård',
				description: 'Spook besöker Beldre och avslöjar att han är Kelsiers man. Vägrar döda.',
			},
			'hoa-46.2': {
				title: 'Kanalrestaurering',
				description: 'Spook ber Sazed återföra vatten till kanalerna och ber endast om tillit.',
			},
			'hoa-49': {
				title: 'Beldres bön',
				description:
					'Spook förklarar Quellions maktövertagande. Beldre bönfaller: döda inte min bror.',
			},
			'hoa-53': {
				title: 'Löften och planer',
				description: 'Spook berättar för Beldre om livet i Kelsiers lag och lovar rädda staden.',
			},
			'hoa-53.2': {
				title: 'Krogrond',
				description:
					'Spook lovar Durn handelskontrakt för rensning av kanalerna. De går på krogrond.',
			},
			'hoa-56': {
				title: 'Slutplan',
				description:
					'Spook utarbetar plan att avslöja Quellions allomanti. Säger till Sazed att han tror.',
			},
			'hoa-58': {
				title: 'Urteaus hjälte',
				description:
					'Sazed lär Spook vattenavledningen. Spook sliter ut Quellions spik och sina egna — dyker in i brinnande byggnad.',
			},
			'hoa-62': {
				title: 'Segerns pris',
				description:
					'Spook medvetslös på sjukhus, svårt bränd. Sazed vakar. Beldre säger att han är hjälte.',
			},
			'hoa-64': {
				title: 'Stålmeddelande',
				description:
					'Ledd av rösten graverar Spook en varning till Vin i stål. Anförtror den åt kapten Goradel.',
			},
			'hoa-73': {
				title: 'Till grottorna',
				description:
					'Allrianne varnar för störningar i dimman. Spook säger åt alla att söka skydd i förrådsgrottorna.',
			},
			'hoa-83': {
				title: 'Ny värld',
				description:
					'Spook kommer ut ur grottorna till Sazeds omskapade värld — blommor och grönt gräs under blå himmel. Sazed gjorde Spook dimfödd.',
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

	// ── Chapter seasons (book → chapter → season/year)
	chapterSeasons: {
		tfe: {
			0: { season: 'Vår', year: '1021 FE' },
			1: { season: 'Vår', year: '1021 FE' },
			2: { season: 'Vår', year: '1021 FE' },
			3: { season: 'Vår', year: '1021 FE' },
			4: { season: 'Vår', year: '1021 FE' },
			5: { season: 'Vår', year: '1021 FE' },
			6: { season: 'Vår', year: '1021 FE' },
			7: { season: 'Sen vår', year: '1021 FE' },
			8: { season: 'Sommar', year: '1021 FE' },
			9: { season: 'Sommar', year: '1021 FE' },
			10: { season: 'Sommar', year: '1021 FE' },
			11: { season: 'Sommar', year: '1021 FE' },
			12: { season: 'Sommar', year: '1021 FE' },
			13: { season: 'Sommar', year: '1021 FE' },
			14: { season: 'Sommar', year: '1021 FE' },
			15: { season: 'Sommar', year: '1021 FE' },
			16: { season: 'Sommar', year: '1021 FE' },
			17: { season: 'Sommar', year: '1021 FE' },
			18: { season: 'Sommar', year: '1021 FE' },
			19: { season: 'Sen sommar', year: '1021 FE' },
			20: { season: 'Sen sommar', year: '1021 FE' },
			21: { season: 'Höst', year: '1021 FE' },
			22: { season: 'Höst', year: '1021 FE' },
			23: { season: 'Höst', year: '1021 FE' },
			24: { season: 'Höst', year: '1021 FE' },
			25: { season: 'Sen höst', year: '1021 FE' },
			26: { season: 'Sen höst', year: '1021 FE' },
			27: { season: 'Vinter', year: '1021 FE' },
			28: { season: 'Vinter', year: '1021 FE' },
			29: { season: 'Vinter', year: '1021 FE' },
			30: { season: 'Vinter', year: '1021 FE' },
			31: { season: 'Vinter', year: '1021 FE' },
			32: { season: 'Vinter', year: '1022 FE' },
			33: { season: 'Tidig vår', year: '1022 FE' },
			34: { season: 'Tidig vår', year: '1022 FE' },
			35: { season: 'Tidig vår', year: '1022 FE' },
			36: { season: 'Tidig vår', year: '1022 FE' },
			37: { season: 'Tidig vår', year: '1022 FE' },
			38: { season: 'Tidig vår', year: '1022 FE' },
			39: { season: 'Vår', year: '1022 FE' },
		},
		woa: {
			1: { season: 'Höst', year: '1023 FE' },
			2: { season: 'Höst', year: '1023 FE' },
			3: { season: 'Höst', year: '1023 FE' },
			4: { season: 'Höst', year: '1023 FE' },
			5: { season: 'Höst', year: '1023 FE' },
			6: { season: 'Höst', year: '1023 FE' },
			7: { season: 'Sen höst', year: '1023 FE' },
			8: { season: 'Höst', year: '1023 FE' },
			9: { season: 'Sen höst', year: '1023 FE' },
			10: { season: 'Höst', year: '1023 FE' },
			11: { season: 'Tidig vinter', year: '1023 FE' },
			12: { season: 'Sen höst', year: '1023 FE' },
			13: { season: 'Tidig vinter', year: '1023 FE' },
			14: { season: 'Tidig vinter', year: '1023 FE' },
			15: { season: 'Vinter', year: '1023 FE' },
			16: { season: 'Vinter', year: '1023 FE' },
			17: { season: 'Vinter', year: '1023 FE' },
			19: { season: 'Vinter', year: '1023 FE' },
			20: { season: 'Vinter', year: '1023 FE' },
			21: { season: 'Vinter', year: '1023 FE' },
			22: { season: 'Vinter', year: '1023 FE' },
			23: { season: 'Vinter', year: '1023 FE' },
			24: { season: 'Vinter', year: '1023 FE' },
			25: { season: 'Vinter', year: '1023 FE' },
			26: { season: 'Vinter', year: '1023 FE' },
			27: { season: 'Vinter', year: '1023 FE' },
			28: { season: 'Vinter', year: '1024 FE' },
			29: { season: 'Vinter', year: '1024 FE' },
			30: { season: 'Vinter', year: '1024 FE' },
			31: { season: 'Vinter', year: '1024 FE' },
			32: { season: 'Vinter', year: '1024 FE' },
			33: { season: 'Vinter', year: '1024 FE' },
			34: { season: 'Vinter', year: '1024 FE' },
			35: { season: 'Vinter', year: '1024 FE' },
			36: { season: 'Vinter', year: '1024 FE' },
			37: { season: 'Vinter', year: '1024 FE' },
			38: { season: 'Vinter', year: '1024 FE' },
			40: { season: 'Sen vinter', year: '1024 FE' },
			41: { season: 'Sen vinter', year: '1024 FE' },
			42: { season: 'Sen vinter', year: '1024 FE' },
			43: { season: 'Sen vinter', year: '1024 FE' },
			44: { season: 'Sen vinter', year: '1024 FE' },
			45: { season: 'Sen vinter', year: '1024 FE' },
			46: { season: 'Sen vinter', year: '1024 FE' },
			47: { season: 'Sen vinter', year: '1024 FE' },
			49: { season: 'Sen vinter', year: '1024 FE' },
			50: { season: 'Sen vinter', year: '1024 FE' },
			51: { season: 'Sen vinter', year: '1024 FE' },
			52: { season: 'Sen vinter', year: '1024 FE' },
			53: { season: 'Sen vinter', year: '1024 FE' },
			54: { season: 'Sen vinter', year: '1024 FE' },
			55: { season: 'Sen vinter', year: '1024 FE' },
			56: { season: 'Vinter', year: '1024 FE' },
			57: { season: 'Vinter', year: '1024 FE' },
			58: { season: 'Vinter', year: '1024 FE' },
			59: { season: 'Vinter', year: '1024 FE' },
			60: { season: 'Vinter', year: '1024 FE' },
		},
		hoa: {
			0: { season: 'Vår', year: '1026 FE' },
			1: { season: 'Vår', year: '1026 FE' },
			3: { season: 'Vår', year: '1026 FE' },
			4: { season: 'Sommar', year: '1026 FE' },
			5: { season: 'Sommar', year: '1026 FE' },
			6: { season: 'Sommar', year: '1026 FE' },
			8: { season: 'Sommar', year: '1026 FE' },
			10: { season: 'Sommar', year: '1026 FE' },
			12: { season: 'Sommar', year: '1026 FE' },
			13: { season: 'Höst', year: '1026 FE' },
			14: { season: 'Höst', year: '1026 FE' },
			15: { season: 'Höst', year: '1026 FE' },
			16: { season: 'Höst', year: '1026 FE' },
			17: { season: 'Höst', year: '1026 FE' },
			18: { season: 'Höst', year: '1026 FE' },
			19: { season: 'Höst', year: '1026 FE' },
			21: { season: 'Höst', year: '1026 FE' },
			22: { season: 'Höst', year: '1026 FE' },
			23: { season: 'Tidig vinter', year: '1026 FE' },
			24: { season: 'Vinter', year: '1026 FE' },
			25: { season: 'Höst', year: '1026 FE' },
			26: { season: 'Tidig vinter', year: '1026 FE' },
			27: { season: 'Höst', year: '1026 FE' },
			28: { season: 'Höst', year: '1026 FE' },
			29: { season: 'Tidig vinter', year: '1026 FE' },
			30: { season: 'Höst', year: '1026 FE' },
			31: { season: 'Tidig vinter', year: '1026 FE' },
			34: { season: 'Vinter', year: '1026 FE' },
			35: { season: 'Vinter', year: '1026 FE' },
			36: { season: 'Vinter', year: '1026 FE' },
			37: { season: 'Vinter', year: '1026 FE' },
			38: { season: 'Vinter', year: '1026 FE' },
			40: { season: 'Vinter', year: '1026 FE' },
			41: { season: 'Vinter', year: '1026 FE' },
			42: { season: 'Vinter', year: '1026 FE' },
			43: { season: 'Vinter', year: '1026 FE' },
			44: { season: 'Vinter', year: '1026 FE' },
			45: { season: 'Vinter', year: '1026 FE' },
			46: { season: 'Vinter', year: '1026 FE' },
			47: { season: 'Vinter', year: '1026 FE' },
			48: { season: 'Vinter', year: '1026 FE' },
			49: { season: 'Vinter', year: '1026 FE' },
			50: { season: 'Vinter', year: '1026 FE' },
			51: { season: 'Vinter', year: '1026 FE' },
			53: { season: 'Vinter', year: '1026 FE' },
			54: { season: 'Sen vinter', year: '1026 FE' },
			55: { season: 'Sen vinter', year: '1026 FE' },
			56: { season: 'Vinter', year: '1026 FE' },
			57: { season: 'Sen vinter', year: '1026 FE' },
			58: { season: 'Vår', year: '1027 FE' },
			59: { season: 'Vår', year: '1027 FE' },
			60: { season: 'Sen vinter', year: '1026 FE' },
			61: { season: 'Sen vinter', year: '1026 FE' },
			62: { season: 'Sommar', year: '1027 FE' },
			63: { season: 'Sen vinter', year: '1026 FE' },
			64: { season: 'Sommar', year: '1027 FE' },
			65: { season: 'Sen vinter', year: '1026 FE' },
			66: { season: 'Sommar', year: '1027 FE' },
			67: { season: 'Vår', year: '1027 FE' },
			68: { season: 'Vår', year: '1027 FE' },
			69: { season: 'Sommar', year: '1027 FE' },
			70: { season: 'Vår', year: '1027 FE' },
			71: { season: 'Höst', year: '1027 FE' },
			72: { season: 'Sommar', year: '1027 FE' },
			73: { season: 'Sommar', year: '1027 FE' },
			74: { season: 'Höst', year: '1027 FE' },
			75: { season: 'Höst', year: '1027 FE' },
			76: { season: 'Höst', year: '1027 FE' },
			77: { season: 'Höst', year: '1027 FE' },
			78: { season: 'Höst', year: '1027 FE' },
			79: { season: 'Höst', year: '1027 FE' },
			80: { season: 'Höst', year: '1027 FE' },
			81: { season: 'Höst', year: '1027 FE' },
			82: { season: 'Höst', year: '1027 FE' },
			83: { season: 'Höst', year: '1027 FE' },
			84: { season: 'Höst', year: '1027 FE' },
		},
	},
};
