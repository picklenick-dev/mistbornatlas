/**
 * German data translations.
 * Sources: Official Heyne / Piper editions.
 * Primary research insights: Character names Elend and Spook are localized to Elant Wager and Spukie.
 * The books use non-literal titles (e.g., Warriors of Fire for Well of Ascension).
 */
import type { DataTranslations } from '../types';

export const deData: DataTranslations = {
	books: {
		tfe: { title: 'Kinder des Nebels', year: '1021–1022 FE', confidence: 'verified' },
		woa: { title: 'Krieger des Feuers', year: '1022–1024 FE', confidence: 'verified' },
		hoa: { title: 'Herrscher des Lichts', year: '1024–1025 FE', confidence: 'verified' },
	},

	characters: {
		vin: {
			name: 'Vin',
			title: 'Nebelgeborene',
			description:
				'Eine talentierte Nebelgeborene, die aus den Straßen Luthadels aufstieg und schließlich das Schicksal der Welt Scadrial maßgeblich beeinflusste.',
			confidence: 'verified',
			fieldConfidence: { description: 'verified' },
			titleProgression: {
				'tfe-1': 'Straßenkind', //
				'tfe-9': 'Nebelgeborenen-Lehrling',
				'tfe-12': 'Lady Valette Renoux',
				'tfe-25': 'Nebelgeborene',
				'tfe-38': 'Bezwingerin des obersten Herrschers', // slayer of the lord ruler context
				'woa-1': 'Erbin des Überlebenden',
				'woa-47': 'Beschützerin von Luthadel',
				'hoa-1': 'Kaiserin',
				'hoa-79': 'Gefäß der Erhaltung', // Preservation is "Erhaltung"
			},
			titleProgressionConfidence: {
				'tfe-1': 'verified',
				'tfe-9': 'verified',
				'tfe-12': 'verified',
				'tfe-25': 'verified',
				'tfe-38': 'probable',
				'woa-1': 'verified',
				'woa-47': 'verified',
				'hoa-1': 'verified',
				'hoa-79': 'probable',
			},
		},
		kelsier: {
			name: 'Kelsier',
			title: 'Der Überlebende',
			description:
				'Der charismatische Anführer der skaa-Rebellion, der durch seine Flucht aus den legendären Gruben von Hathsin zum Mythos wurde.',
			confidence: 'verified',
			fieldConfidence: { description: 'verified' },
			titleProgression: {
				'tfe-0': 'Mysteriöser Skaa',
				'tfe-1': 'Der Überlebende von Hathsin',
				'tfe-11': 'Anführer der Bande',
				'tfe-21': 'Zerstörer der Gruben',
				'tfe-34': 'Märtyrer der Rebellion',
			},
			titleProgressionConfidence: {
				'tfe-0': 'verified',
				'tfe-1': 'verified',
				'tfe-11': 'verified',
				'tfe-21': 'verified',
				'tfe-34': 'verified',
			},
			secretHistoryTitles: {
				'woa-1': 'Kognitiver Schatten',
				'hoa-1': 'Champion der Erhaltung',
			},
		},
		sazed: {
			name: 'Sazed',
			title: 'Hüter', // "Keeper" is canonically "Hüter"
			description:
				'Ein terrisischer Hüter, der das Wissen vergessener Religionen mittels Feruchemie bewahrt.',
			confidence: 'verified',
			fieldConfidence: { description: 'verified' },
			titleProgression: {
				'tfe-9': 'Terrisischer Verwalter', // Steward
				'tfe-22': 'Hüter der Religionen',
				'woa-1': 'Gelehrter und Hüter',
				'woa-12': 'Wahrheitssucher',
				'woa-52': 'Verteidiger von Luthadel',
				'hoa-1': 'Botschafter des Neuen Reiches',
				'hoa-50': 'Gelehrter in der Krise',
				'hoa-82': 'Held aller Zeiten', // [6]
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
			name: 'Elant Wager', // Localized from Elend Venture
			title: 'Kaiser',
			description:
				'Ein idealistischer Gelehrter aus dem Hause Wager, der zum Herrscher des Neuen Reiches aufsteigt.',
			confidence: 'verified',
			fieldConfidence: { description: 'verified' },
			titleProgression: {
				'tfe-12': 'Philosophischer Adliger',
				'tfe-24': 'Abtrünniger Adliger',
				'tfe-38': 'Unerwarteter Anführer',
				'woa-1': 'König der Zentralen Dominanz',
				'woa-35': 'Abgesetzter König',
				'woa-58': 'Nebelgeborener Kaiser',
				'hoa-1': 'Kaiser des Neuen Reiches',
				'hoa-54': 'Kriegerkaiser',
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
			title: 'Stahlinquisitor',
			description:
				'Kelsiers Bruder, der das Stahlministerium infiltrierte und einen furchtbaren Preis für den Erfolg der Rebellion zahlte.',
			confidence: 'verified',
			fieldConfidence: { description: 'verified' },
			titleProgression: {
				'tfe-7': 'Rebelleninfiltrator',
				'tfe-13': 'Ministeriespion',
				'tfe-38': 'Stahlinquisitor',
				'woa-4': 'Widerwilliger Inquisitor',
				'woa-57': 'Bauer des Verderbens', // Ruin is "Verderben"
				'hoa-0': 'Hand des Verderbens',
				'hoa-79': 'Stahlaugen', // "Ironeyes" is "Stahlaugen" in Era 1 [2]
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
			name: 'Spukie', // Localized nickname
			title: 'Nebeling', // Misting [4]
			description:
				'Das jüngste Mitglied der Bande, ein Zinnauge, das im Verlauf der Geschichte über sich hinauswächst.',
			confidence: 'verified',
			fieldConfidence: { description: 'verified' },
			titleProgression: {
				'tfe-7': 'Junges Zinnauge', // Tineye is "Zinnauge"
				'woa-1': 'Späher',
				'hoa-14': 'Infiltrator',
				'hoa-38': 'Zinnweiser', // Tin Savant
				'hoa-58': 'Held von Urteau',
				'hoa-83': 'Überlebender der Flammen',
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
				'Die Hauptstadt des Letzten Reiches und Sitz der Macht des Obersten Herrschers. Die einzige Stadt mit künstlichen Steinmauern.',
			confidence: 'verified',
		},
		'lake-luthadel': {
			name: 'See Luthadel',
			description: 'Süßwasserfläche östlich der Hauptstadt, von Asche getrübt.',
			confidence: 'verified',
		},
		'pits-hathsin': {
			name: 'Gruben von Hathsin',
			description:
				'Atium-Minen und Heimat der Kandra. Kelsier war der einzige Gefangene, der je lebend entkam.',
			confidence: 'verified',
		},
		fellise: {
			name: 'Fellise',
			description: 'Adelige Sommerfrische südlich von Luthadel, wo Haus Renoux ein Anwesen besaß.',
			confidence: 'verified',
		},
		holstep: {
			name: 'Holstep',
			description:
				'Garnisonsstadt westlich von Luthadel, Kontrollpunkt für Handels- und Militärrouten.',
			confidence: 'verified',
		},
		'ashmount-tyrian': {
			name: 'Tyrian',
			description: 'Der nächstgelegene Ascheberg zu Luthadel, von den Stadtmauern aus sichtbar.',
			confidence: 'verified',
		},
		urteau: {
			name: 'Urteau',
			description:
				'Hauptstadt der Nördlichen Dominanz und Stammsitz von Haus Wager. Berühmt für seine Straßenschlitze — trockengelegte Kanäle.',
			confidence: 'verified',
		},
		'ashmount-kalling': {
			name: 'Kalling',
			description: 'Hauptvulkan der Nördlichen Dominanz mit dunklerer, aggressiverer Asche.',
			confidence: 'verified',
		},
		'fadrex-city': {
			name: 'Fadrex',
			description:
				'Handelszentrum der Westlichen Dominanz, geschützt durch natürliche Cremnol-Felsformationen.',
			confidence: 'verified',
		},
		tremredare: {
			name: 'Tremredare',
			description:
				'Ehemalige Hauptstadt der Westlichen Dominanz, nach dem Zusammenbruch mangels Verteidigung aufgegeben.',
			confidence: 'verified',
		},
		'ashmount-morag': {
			name: 'Morag',
			description: 'Massiver Vulkan, der den westlichen Horizont des Reiches dominiert.',
			confidence: 'verified',
		},
		chardees: {
			name: 'Chardees',
			description: 'Stammsitz von Haus Hasting, in offiziellen Karten verborgen.',
			confidence: 'verified',
		},
		austrex: {
			name: 'Austrex',
			description: 'Hauptstadt der Südlichen Dominanz und Zentrum der Kornkammer des Reiches.',
			confidence: 'verified',
		},
		vetitan: {
			name: 'Vetitan',
			description:
				'Stadt in der Nördlichen Dominanz, erbaut über einer der Vorratshöhlen des Obersten Herrschers. Von Asche überrannt.',
			confidence: 'verified',
		},
		'ashmount-zerinah': {
			name: 'Zerinah',
			description: 'Der südlichste Ascheberg, thermischer Regulator der Südhalbkugel.',
			confidence: 'verified',
		},
		conventical: {
			name: 'Konventikel von Seran',
			description:
				'In einen Felsen gehauene Festung der Inquisitoren. Sazed fand hier Kwaans Inschrift.',
			confidence: 'verified',
		},
		tathingdwen: {
			name: 'Tathingdwen',
			description: 'Hauptstadt der Terris-Dominanz in den nördlichen Bergen.',
			confidence: 'verified',
		},
		'terris-mountains': {
			name: 'Terris-Berge',
			description:
				'Gebirgskette, in der die Terriser versklavt wurden. Ursprünglicher Standort des Brunnens der Aszension.',
			confidence: 'verified',
		},
		'tincut-fastness': {
			name: 'Festung Tincut',
			description: 'Versteckte Bergfestung, in der sich die terrisische Synode zurückzog.',
			confidence: 'probable',
		},
		'high-villages': {
			name: 'Hochdörfer',
			description:
				'Netzwerk versteckter terrisischer Bergdörfer, verbunden durch unterirdische Tunnel.',
			confidence: 'probable',
		},
		'imperial-canal': {
			name: 'Reichskanal',
			description:
				'Künstliche Wasserstraße, die Tathingdwen mit Luthadel für den Ressourcentransport verbindet.',
			confidence: 'probable',
		},
		'kandra-homeland': {
			name: 'Kandra-Heimat',
			description:
				'Tiefe Höhlen unter den Gruben von Hathsin, wo die Kandra die Geheimnisse des Obersten Herrschers hüten.',
			confidence: 'verified',
		},
		'ashmount-torinost': {
			name: 'Torinost',
			description: 'Massiver Gipfel nördlich der Westlichen Dominanz.',
			confidence: 'verified',
		},
		'ashmount-faleast': {
			name: 'Faleast',
			description: 'Hauptmerkmal der Östlichen Dominanz mit abrasiverer Asche durch Silizium.',
			confidence: 'verified',
		},
		'ashmount-doriel': {
			name: 'Doriel',
			description: 'Ascheberg südlich von Luthadel, nahe der Küste des Südmeeres.',
			confidence: 'verified',
		},
		'statlin-city': {
			name: 'Statlin',
			description: 'Südlicher Ankerpunkt des Vorratshöhlen-Netzwerks des Obersten Herrschers.',
			confidence: 'probable',
		},
		'tresting-plantation': {
			name: 'Tresting-Plantage',
			description: 'Skaa-Plantage von Lord Tresting mit Hunderten Arbeitern und einer Garnison.',
			confidence: 'probable',
		},
		'lekal-city': {
			name: 'Lekal-Stadt',
			description:
				'Festungsstadt von Haus Lekal, wo die gesamte Stadt eine Erweiterung des Adelssitzes ist.',
			confidence: 'verified',
		},
		mantiz: {
			name: 'Mantiz',
			description:
				'Stadt im Norden der Westlichen Dominanz mit vier großen Adelshäusern und schwerer Ascherablagerung.',
			confidence: 'verified',
		},
		'channerel-river': {
			name: 'Channerel-Fluss',
			description: 'Hauptwasserstraße des Reiches, lebenswichtig für Handel und Transport.',
			confidence: 'verified',
		},
		'burnlands-west': {
			name: 'Brandlande West',
			description: 'Unbewohnbare Wüste am Westrand des Reiches, zu nah an der Sonne.',
			confidence: 'verified',
		},
		'burnlands-east': {
			name: 'Brandlande Ost',
			description: 'Unbewohnbare Wüste am Ostrand des Reiches.',
			confidence: 'verified',
		},
		'arguois-caverns': {
			name: 'Arguois-Höhlen',
			description: 'Höhlensystem zwischen Luthadel und den Gruben, Übungsort der Rebellenarmee.',
			confidence: 'verified',
		},
		garthwood: {
			name: 'Garthwood',
			description: 'Dorf, in dem Sazed befreiten Skaa Religionen lehrte.',
			confidence: 'probable',
		},
		'straffs-camp': {
			name: 'Straffs Lager',
			description: 'Militärlager von Straff Wager südlich von Luthadel während der Belagerung.',
			confidence: 'probable',
		},
		'koloss-camp': {
			name: 'Koloss-Lager',
			description: 'Position der Koloss-Armee nördlich von Luthadel während der Belagerung.',
			confidence: 'probable',
		},
		longsfollow: {
			name: 'Longsfollow',
			description: 'Ortschaft in den Bergpässen der Westlichen Dominanz.',
			confidence: 'probable',
		},
		chakatah: {
			name: 'Chakatah',
			description: 'Kleines Bergbaudorf in der Westlichen Dominanz.',
			confidence: 'probable',
		},
		'north-seran': {
			name: 'Nord-Seran',
			description: 'Gebiet nahe dem Konventikel von Seran.',
			confidence: 'probable',
		},
		'river-seran': {
			name: 'Seran-Fluss',
			description: 'Südliche Wasserstraße, vom Ministerium für den Materialtransport genutzt.',
			confidence: 'probable',
		},
		urbene: {
			name: 'Urbene',
			description: 'Umschlagplatz des Ministeriums für Getreidetransporte zur Hauptstadt.',
			confidence: 'probable',
		},
		erlac: {
			name: 'Erlac',
			description: 'Garnison südwestlich von Luthadel, patrouilliert die Stadtrouten.',
			confidence: 'probable',
		},
		'valtroux-city-central': {
			name: 'Valtroux',
			description: 'Garnisonsstadt nordwestlich von Luthadel mit stehendem Heer.',
			confidence: 'probable',
		},
		'haverfrex-cannery-central': {
			name: 'Haverfrex',
			description:
				'Industrieposten in der Westlichen Dominanz, Versorgungsknotenpunkt für Cetts Armee.',
			confidence: 'probable',
		},
	},

	cities: {
		luthadel: {
			name: 'Luthadel',
			description:
				'Die Hauptstadt des Letzten Reiches und kulturelles Zentrum unter dem Obersten Herrscher. Einzige Stadt mit künstlichen Mauern. Radial symmetrisch um Kredik Shaw gebaut, das direkt über dem Brunnen der Aszension thront. Acht Tore, benannt nach den allomantischen Metallen, gewähren Zugang.',
			confidence: 'verified',
		},
		urteau: {
			name: 'Urteau',
			description:
				'Größte Stadt der Nördlichen Dominanz und Stammsitz von Haus Wager. Geprägt durch Straßenschlitze — breite, trockengelegte Kanäle als eingesenkte Wege. Das Wasser wurde in einen verborgenen unterirdischen See umgeleitet. Keine Mauern auf Erlass des Obersten Herrschers.',
			confidence: 'verified',
		},
		fadrex: {
			name: 'Fadrex',
			description:
				'Handelszentrum der Westlichen Dominanz, befestigt durch Cremnol-Felsformationen als natürliche Mauern. Birgt eine der geheimen Vorratshöhlen des Obersten Herrschers.',
			confidence: 'verified',
		},
	},

	cityLandmarks: {
		luthadel: {
			'kredik-shaw': {
				name: 'Kredik Shaw',
				description:
					'Der Palast des Obersten Herrschers, der „Hügel der tausend Türme". Direkt über dem Brunnen der Aszension errichtet.',
				confidence: 'verified',
			},
			'iron-gate': {
				name: 'Eisernes Tor',
				description: 'Nordtor, Richtung Urteau und Nördliche Dominanz.',
				confidence: 'verified',
			},
			'steel-gate': {
				name: 'Stählernes Tor',
				description: 'Nordwesttor, Richtung Gruben von Hathsin.',
				confidence: 'verified',
			},
			'pewter-gate': {
				name: 'Zinntor',
				description: 'Nordosttor von Luthadel.',
				confidence: 'verified',
			},
			'zinc-gate': {
				name: 'Zinktor',
				description: 'Südosttor von Luthadel.',
				confidence: 'verified',
			},
			'brass-gate': {
				name: 'Messingtor',
				description: 'Südtor, Richtung Fellise und Südliche Dominanz.',
				confidence: 'verified',
			},
			'copper-gate': {
				name: 'Kupfertor',
				description: 'Südwesttor, nahe dem Industrieviertel.',
				confidence: 'verified',
			},
			'bronze-gate': {
				name: 'Bronzetor',
				description: 'Westtor, Richtung Channerel-Fluss.',
				confidence: 'verified',
			},
			'keep-venture': {
				name: 'Haus Wager',
				description:
					'Festung von Haus Wager. Elants Operationsbasis und Austragungsort nobler Bälle.',
				confidence: 'verified',
			},
			'keep-elariel': {
				name: 'Haus Elariel',
				description: 'Sitz von Haus Elariel, eines der Großen Häuser Luthadels.',
				confidence: 'verified',
			},
			'keep-hasting': {
				name: 'Haus Hasting',
				description: 'Nahe dem Palast; fiel früh im Krieg der Häuser.',
				confidence: 'verified',
			},
			'clubs-shop': {
				name: 'Clubs Werkstatt',
				description: 'Schreinerei, die als Operationsbasis für Kelsiers Bande diente.',
				confidence: 'verified',
			},
			'camons-safehouse': {
				name: 'Camons Unterschlupf',
				description: 'Anfänglicher Unterschlupf in den Slums, wo Vin von Kelsier rekrutiert wurde.',
				confidence: 'verified',
			},
			'fountain-square': {
				name: 'Brunnenplatz',
				description:
					'Ort öffentlicher Hinrichtungen und Kelsiers Tod. Umbenannt in Platz des Überlebenden.',
				confidence: 'verified',
			},
			'lake-luthadel': {
				name: 'See Luthadel',
				description: 'Große Süßwasserfläche östlich der Mauern.',
				confidence: 'verified',
			},
			'canton-of-finance': {
				name: 'Kanton der Finanzen',
				description: 'Hauptquartier des Stahlministeriums für die Finanzen des Reiches.',
				confidence: 'verified',
			},
			'skaa-hovels': {
				name: 'Skaa-Baracken',
				description: 'Die elenden Skaa-Viertel, in denen Banden operieren.',
				confidence: 'verified',
			},
			'well-of-ascension': {
				name: 'Brunnen der Aszension',
				description:
					'Die verborgene Kraftquelle unter Kredik Shaw, wo sich alle 1024 Jahre Macht ansammelt.',
				confidence: 'verified',
			},
			'tin-gate-north': {
				name: 'Zinntor (Nord)',
				description: 'Der nordöstliche Torbezirk.',
				confidence: 'verified',
			},
			'assembly-hall': {
				name: 'Versammlungshalle',
				description:
					'Gebäude, in dem Elants demokratisches Parlament während der Belagerung tagte.',
				confidence: 'probable',
			},
			'keep-tekiel': {
				name: 'Haus Tekiel',
				description: 'Festung von Haus Tekiel, Ziel von Kelsiers Mordkampagne.',
				confidence: 'verified',
			},
			'luthadel-garrison': {
				name: 'Garnison Luthadel',
				description: 'Militärisches Übungsgelände und Kasernen der Stadt.',
				confidence: 'probable',
			},
			'warehouse-district': {
				name: 'Lagerhausviertel',
				description: 'Industriebezirk nahe den Kanälen, wo die Bande Waffen lagerte.',
				confidence: 'probable',
			},
			'canton-inquisition': {
				name: 'Kanton der Inquisition',
				description: 'Hauptsitz der Stahlinquisitoren, von allen gefürchtet.',
				confidence: 'verified',
			},
			'canton-resource': {
				name: 'Kanton der Ressourcen',
				description: 'Verwaltungszentrum der Reichswirtschaft.',
				confidence: 'verified',
			},
			'canton-orthodoxy': {
				name: 'Kanton der Orthodoxie',
				description:
					'Religiöses Zentrum, zuständig für die Reinheit des Kultes des Obersten Herrschers.',
				confidence: 'verified',
			},
			'keep-lekal': {
				name: 'Haus Lekal',
				description: 'Eines der großen Adelshäuser mit Türmen und Buntglasfenstern.',
				confidence: 'verified',
			},
			'hotel-district': {
				name: 'Hotelviertel',
				description: 'Gehobene Zone für adelige Besucher aus den äußeren Dominanzen.',
				confidence: 'probable',
			},
			'commercial-district': {
				name: 'Handelsviertel',
				description: 'Handelszentrum, wo die Adelshäuser ihre Verträge verhandelten.',
				confidence: 'probable',
			},
			'industrial-district': {
				name: 'Industrieviertel',
				description: 'Bereich der Schmieden, Mühlen und Werkstätten am Kanal.',
				confidence: 'probable',
			},
			'ahlstrom-square': {
				name: 'Ahlstrom-Platz',
				description: 'Wichtiger öffentlicher Platz in Luthadel.',
				confidence: 'probable',
			},
			'south-bridge': {
				name: 'Südbrücke',
				description: 'Übergang an den Wasserwegen der Stadt.',
				confidence: 'probable',
			},
			'the-twists': {
				name: 'Die Windungen',
				description:
					'Labyrinthartiges Slumviertel, Zuflucht der Skaa-Unterwelt und Kelsiers Bande.',
				confidence: 'probable',
			},
			sootwarrens: {
				name: 'Die Rußbaue',
				description: 'Eines der elendesten Viertel, von Asche bedeckt.',
				confidence: 'probable',
			},
			'the-cracks': {
				name: 'Die Risse',
				description: 'Heruntergekommener Sektor mit hoher Bevölkerungsdichte.',
				confidence: 'probable',
			},
			'aspen-row': {
				name: 'Espenzeile',
				description: 'Wohnstraße für qualifizierte Arbeiter und adelige Bedienstete.',
				confidence: 'probable',
			},
			blockstreet: {
				name: 'Blockstraße',
				description: 'Dichtes Wohnviertel in Rasterform für Skaa.',
				confidence: 'probable',
			},
		},
		urteau: {
			'ministry-canton': {
				name: 'Kanton der Inquisition',
				description:
					'Ministeriumssitz, erbaut über der dritten Vorratshöhle mit einem unterirdischen See.',
				confidence: 'verified',
			},
			marketpit: {
				name: 'Marktgrube',
				description: 'Die breiteste der Straßenschlitze, Hauptboulevard und zentraler Marktplatz.',
				confidence: 'verified',
			},
			'spooks-hideout': {
				name: 'Spukies Versteck',
				description: 'Das „brennende Haus", genutzt von Spukies Team während des Aufstandes.',
				confidence: 'probable',
			},
			'citizens-estate': {
				name: 'Anwesen des Bürgers',
				description: 'Von Quellion als Machtsitz angeeignetes Adelsanwesen.',
				confidence: 'probable',
			},
			'luthadel-gate': {
				name: 'Luthadel-Tor',
				description: 'Südlicher Eingang zum Kanalnetz, Richtung Luthadel.',
				confidence: 'probable',
			},
			'venture-estate': {
				name: 'Anwesen Wager',
				description: 'Stammsitz der Wagers in Urteau, unter Quellions Regime verlassen.',
				confidence: 'probable',
			},
			'burning-district': {
				name: 'Brandviertel',
				description: 'Etwa ein Drittel der Stadt, zerstört durch Brände während Spukies Rebellion.',
				confidence: 'probable',
			},
			'skaa-slums': {
				name: 'Skaa-Slums',
				description: 'Arme Viertel, wo sich Revolutionäre in den trockenen Kanälen sammeln.',
				confidence: 'probable',
			},
			'the-harrows': {
				name: 'Die Furchen',
				description: 'Labyrinth aus engen, verbundenen Kanälen im Südteil.',
				confidence: 'probable',
			},
			'west-docks': {
				name: 'Westdocks',
				description: 'Westlicher Endpunkt des Kanalnetzes für den Warenumschlag.',
				confidence: 'probable',
			},
			'fedre-aqueduct': {
				name: 'Lord Fedres Aquädukt',
				description: 'Monumentale Infrastruktur aus der Zeit vor dem Zusammenbruch.',
				confidence: 'probable',
			},
			'white-streets': {
				name: 'Weiße Straßen',
				description: 'Wohlhabendes Viertel, dessen Pflaster akribisch von Asche gereinigt wurde.',
				confidence: 'probable',
			},
			'citizens-home': {
				name: 'Haus des Bürgers',
				description: 'Hauptquartier von Quellion, dem Skaa, der die Macht ergriff.',
				confidence: 'probable',
			},
			'interchange-building': {
				name: 'Umschlaggebäude',
				description: 'Logistikzentrum für den Warentransfer zwischen den Ebenen.',
				confidence: 'probable',
			},
			'old-city-square': {
				name: 'Altstadtplatz',
				description:
					'Historisches Zentrum von Urteau, Schauplatz politischer Unruhen unter dem Bürger.',
				confidence: 'probable',
			},
			'canton-orthodoxy-urteau': {
				name: 'Kanton der Orthodoxie',
				description:
					'Verwaltete geistliche und rechtliche Angelegenheiten der Nördlichen Dominanz.',
				confidence: 'probable',
			},
		},
		fadrex: {
			'keep-orielle': {
				name: 'Haus Orielle',
				description:
					'Hauptadelshaus auf der Anhöhe, von Obligator Aradan Yomen als Palast genutzt.',
				confidence: 'probable',
			},
			'storage-cache': {
				name: 'Vorratshöhle',
				description: 'Geheimes Lager für Vorräte und Electrum, verborgen in den nördlichen Felsen.',
				confidence: 'verified',
			},
			'cetts-base': {
				name: 'Cetts Basis',
				description: 'Befestigte Anlage von Ashweather Cett vor seinem Aufbruch nach Luthadel.',
				confidence: 'probable',
			},
			'cremnol-wall-north': {
				name: 'Cremnol-Mauer Nord',
				description: 'Natürliche rot-orange Felsformation, die die Stadt im Norden schützt.',
				confidence: 'verified',
			},
			'cremnol-wall-south': {
				name: 'Cremnol-Mauer Süd',
				description: 'Felsformation als geologische Barriere im Süden.',
				confidence: 'verified',
			},
			'yomens-palace': {
				name: 'Yomens Palast',
				description: 'Verwaltungssitz von Obligator Aradan Yomen.',
				confidence: 'probable',
			},
			'main-gate': {
				name: 'Haupttor',
				description: 'Haupteingang der Stadt durch die geologischen Formationen.',
				confidence: 'probable',
			},
			'conway-canal': {
				name: 'Conway-Kanal',
				description: 'Einer der Hauptkanäle für Handel und Transport.',
				confidence: 'probable',
			},
			'city-walls-east': {
				name: 'Ostmauern',
				description: 'Östlicher Verteidigungsperimeter aus natürlichem Fels.',
				confidence: 'probable',
			},
			'ash-mounds': {
				name: 'Aschehügel',
				description: 'Aschebedeckte Ebenen, wo Elants Belagerungsarmee lagerte.',
				confidence: 'probable',
			},
			'canton-resource-fadrex': {
				name: 'Kanton der Ressourcen',
				description: 'Ministeriumskanton, von Yomen als Gefängnis für Vin genutzt.',
				confidence: 'probable',
			},
			'informants-residence': {
				name: 'Residenz des Informanten',
				description: 'Wohnung eines alten Informanten, der die Geheimnisse der Stadt kennt.',
				confidence: 'probable',
			},
			'deep-wells': {
				name: 'Tiefe Brunnen',
				description: 'Lebenswichtige Wasserressourcen in einer Stadt ohne großen Fluss.',
				confidence: 'probable',
			},
			'noble-quarter': {
				name: 'Adelsviertel',
				description: 'Wohngebiet der gehobenen Gesellschaft.',
				confidence: 'probable',
			},
		},
	},

	movements: {
		vin: {
			'tfe-1': {
				title: 'Straßenkind',
				description:
					'Vin arbeitet als Späherin für Camons Diebesbande in den Slums von Luthadel und nutzt ihre unbekannten allomantischen Fähigkeiten, um ihre Umgebung subtil zu beeinflussen.',
				season: 'Frühling',
				year: '1021 FE',
			},
			'tfe-2': {
				title: 'Der Ministeriums-Betrug',
				description:
					'Vin begleitet Camons Bande bei einem riskanten Betrug im Kanton der Finanzen, wo ihre allomantischen Impulse Kelsiers Aufmerksamkeit erregen.',
				season: 'Frühling',
				year: '1021 FE',
			},
			'tfe-4': {
				title: 'Angeworben',
				description:
					"Nachdem Kelsier Vin vor Camons Schlägen rettet, wird sie zu Clubs' Schreinerei — dem Hauptquartier der Bande — gebracht und in den Plan zum Sturz des Obersten Herrschers eingeweiht.",
				season: 'Frühling',
				year: '1021 FE',
			},
			'tfe-7': {
				title: 'Nebelgeborenen-Training',
				description:
					'Kelsier nimmt Vin mit zu den Stadtmauern nahe dem Stahltor für ihr erstes echtes Allomantie-Training und lehrt sie, Stahl und Eisen zwischen den dunklen Dächern zu verbrennen.',
				season: 'Später Frühling',
				year: '1021 FE',
			},
			'tfe-8': {
				title: 'Das Anwesen Renoux',
				description:
					"Vin reist nach Westen nach Fellise, um ihre Tarnung als Lady Valette Renoux auf Lord Renoux' Landsitz zu beginnen und sich auf die Infiltration der Adelsgesellschaft vorzubereiten.",
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-9': {
				title: 'Training mit Sazed',
				description:
					'Unter Sazeds Anleitung auf dem Anwesen Renoux lernt Vin die Etikette, den Tanz und das Auftreten, die nötig sind, um auf den großen Bällen der Adelshäuser als Adlige durchzugehen.',
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-10': {
				title: 'Rückkehr zur Crew',
				description:
					"Vin kehrt von Fellise nach Luthadel zurück und schließt sich der Crew in Clubs' Laden wieder an. Kelsier nimmt sie auf einen nächtlichen Allomantie-Lauf durch die Stadt mit, um ihr Training voranzutreiben.",
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-10.2': {
				title: 'Die Versammlung im Lagerhaus',
				description:
					'Vin besucht eine geheime Versammlung, bei der Kelsier in einem versteckten Lagerhaus vor versammelten Skaa-Arbeitern die Revolution predigt.',
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-11': {
				title: 'Massaker in Camons Unterschlupf',
				description:
					'Vin und die Crew entdecken die Nachwirkungen eines brutalen Angriffs auf Camons altes Versteck — das Ministerium hat alle darin als Vergeltung für den Betrug am Finanzministerium getötet.',
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-13': {
				title: 'Erster Ball auf Burg Venture',
				description:
					'Vin besucht ihren ersten Ball als Lady Valette Renoux und betritt die glitzernde Welt des Adels. Sie trifft Elant Wager, der allein in einer Ecke liest.',
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-14': {
				title: 'Erkundung von Kredik Shaw',
				description:
					'Vin und Kelsier unternehmen eine waghalsige nächtliche Aufklärung des Palastes des Obersten Herrschers und springen zwischen den Tausend Türmen umher, um die Verteidigungsanlagen zu kartieren.',
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-16': {
				title: 'Ball auf Burg Elariel',
				description:
					'Vin besucht einen Ball im Hause Elariel, sammelt Informationen über die Adelshäuser und ihre Bündnisse und vertieft ihre Tarnidentität.',
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-19': {
				title: 'Einander näher',
				description:
					'Auf einem weiteren Ball auf Burg Venture vertieft sich Vins Beziehung zu Elant trotz ihrer Mission. Danach tanzt sie auf den Dächern.',
				season: 'Spätsommer',
				year: '1021 FE',
			},
			'tfe-22': {
				title: 'Das Logbuch',
				description:
					"Zurück in Clubs' Schreinerei studiert Vin das uralte Logbuch des Obersten Herrschers und findet beunruhigende Hinweise auf die Tiefe und die Prophezeiung des Helden der Zeitalter.",
				season: 'Herbst',
				year: '1021 FE',
			},
			'tfe-25': {
				title: 'Der Zinnlauf',
				description:
					'Als die Rebellenarmee bei Holstep von Garnisonstruppen niedergemetzelt wird, unternimmt Vin einen verzweifelten Zinnlauf — sie verbrennt stundenlang ununterbrochen Zinn —, um Überlebende zu retten.',
				season: 'Spätherbst',
				year: '1021 FE',
			},
			'tfe-26': {
				title: 'Erholung',
				description:
					"Vin kehrt erschöpft vom Zinnlauf zu Clubs' Schreinerei zurück und erholt sich, während die Bande sich nach der verheerenden Niederlage bei Holstep neu formiert.",
				season: 'Spätherbst',
				year: '1021 FE',
			},
			'tfe-30': {
				title: 'Eskalation des Häuserkriegs',
				description:
					'Der Häuserkrieg verschärft sich, als die Adelshäuser gegeneinander vorgehen. Vin erkennt, dass die Manipulation der Bande wirkt, doch die Gewalt beunruhigt sie.',
				season: 'Winter',
				year: '1021 FE',
			},
			'tfe-34': {
				title: 'Der Tod des Überlebenden',
				description:
					'Vin beobachtet hilflos von den Dächern, wie Kelsier gegen den Obersten Herrscher auf dem Brunnenplatz kämpft und fällt — im Tod wird er zum Überlebenden von Hathsin.',
				season: 'Vorfrühling',
				year: '1022 FE',
			},
			'tfe-36': {
				title: 'Sturm auf den Palast',
				description:
					'An der Spitze der Skaa-Rebellion kämpft sich Vin durch Kredik Shaw, überwindet Inquisitoren und Wachen, um den Thronsaal des Obersten Herrschers zu erreichen.',
				season: 'Vorfrühling',
				year: '1022 FE',
			},
			'tfe-38': {
				title: 'Bezwingerin des Obersten Herrschers',
				description:
					'Vin stellt den Obersten Herrscher in seinem Thronsaal, reißt ihm seine Metallsinne weg und tötet den unsterblichen Tyrannen. Tausend Jahre Unterdrückung enden.',
				season: 'Vorfrühling',
				year: '1022 FE',
			},
			'tfe-39': {
				title: 'Eine neue Ära',
				description:
					'Nach der Revolution steht Vin mit Elant auf Burg Venture, als eine neue Ära beginnt. Die Nebel fließen noch, doch der Oberste Herrscher ist fort.',
				season: 'Frühling',
				year: '1022 FE',
			},
			'woa-1': {
				title: 'Wächterin der Stadt',
				description:
					'Vin patrouilliert jede Nacht auf den Mauern von Luthadel und hält nach Bedrohungen Ausschau, während drei Armeen langsam auf die befreite Stadt zusteuern.',
				season: 'Herbst',
				year: '1023 FE',
			},
			'woa-3': {
				title: 'Der Nebelgeist',
				description:
					'Während ihrer nächtlichen Patrouille begegnet Vin einer geheimnisvollen Gestalt im Nebel — einem Geist, der sie zu beobachten scheint und auf etwas deutet.',
				season: 'Herbst',
				year: '1023 FE',
			},
			'woa-8': {
				title: 'Beschützerin und Gefährtin',
				description:
					'Vin navigiert ihre Doppelrolle als Elants Beschützerin und Partnerin im Palast und ringt zwischen ihrer Liebe zu ihm und ihrer Pflicht, ihn zu beschützen.',
				season: 'Herbst',
				year: '1023 FE',
			},
			'woa-14': {
				title: 'Bandenrat',
				description:
					"Die Bande trifft sich in Clubs' Schreinerei zur Strategieberatung, während Straff Ventures Armee im Norden lagert und Cetts Truppen von Westen heranrücken.",
				season: 'Frühwinter',
				year: '1023 FE',
			},
			'woa-22': {
				title: 'Politische Spannungen',
				description:
					'Während die Belagerung sich verschärft, beobachtet Vin, wie Elant mit der Versammlung und den Anforderungen des Regierens ringt, während sie Zane durch die Nebel jagt.',
				season: 'Winter',
				year: '1023 FE',
			},
			'woa-26': {
				title: 'Verhandlung mit Straff',
				description:
					'Vin begleitet Elant zu Straff Ventures Feldlager nördlich der Stadt, wo sie ihre furchterregende Macht demonstriert, um den Möchtegern-Eroberer einzuschüchtern.',
				season: 'Winter',
				year: '1023 FE',
			},
			'woa-28': {
				title: 'Rückkehr von der Verhandlung',
				description:
					'Nach der angespannten Begegnung in Straffs Lager kehrt Vin zu Burg Venture zurück, verfolgt von Zanes Flüstern und ihren wachsenden Zweifeln an ihrer Rolle.',
				season: 'Winter',
				year: '1024 FE',
			},
			'woa-35': {
				title: 'Die Krise der Versammlung',
				description:
					'Vin beobachtet von der Galerie, wie die Versammlung abstimmt, Elant abzusetzen und Lord Penrod zur Führung einzuladen — das demokratische Experiment zerbricht.',
				season: 'Winter',
				year: '1024 FE',
			},
			'woa-43': {
				title: 'Angriff auf Cett',
				description:
					'Vin startet einen verheerenden Alleinangriff auf Cetts in Burg Hasting einquartierte Truppen und vertreibt seine Armee in einer Demonstration der Macht einer Nebelgeborenen aus der Stadt.',
				season: 'Spätwinter',
				year: '1024 FE',
			},
			'woa-47': {
				title: 'Duell mit Zane',
				description:
					'Nahe Burg Hasting duelliert sich Vin mit Zane Venture in einem brutalen Nebelgeborenen-Kampf und tötet ihn schließlich, um die zu beschützen, die sie liebt.',
				season: 'Spätwinter',
				year: '1024 FE',
			},
			'woa-49': {
				title: 'Verbannung',
				description:
					'Vin und Elant verlassen Luthadel durch das Zinntor, von Penrods neuer Regierung verbannt, und ziehen nach Norden Richtung Terris mit einer kleinen Eskorte.',
				season: 'Spätwinter',
				year: '1024 FE',
			},
			'woa-50': {
				title: 'Exodus nach Norden',
				description:
					'Die kleine Gruppe reist Richtung Terris, doch Vin spürt etwas, das sie zurückzieht — der Brunnen der Aszension ist doch nicht in den Bergen.',
				season: 'Spätwinter',
				year: '1024 FE',
			},
			'woa-52': {
				title: 'Rückkehr in die Schlacht',
				description:
					'Vin unternimmt einen verzweifelten Zinnlauf zurück nach Luthadel, als Koloss die Mauern durchbrechen, und kommt gerade rechtzeitig, um die Kontrolle über die Kreaturen zu übernehmen und die Stadt zu retten.',
				season: 'Spätwinter',
				year: '1024 FE',
			},
			'woa-54': {
				title: 'Suche nach dem Brunnen',
				description:
					'Mit Luthadel gerettet, aber angeschlagen, sucht Vin unter Kredik Shaw nach dem Brunnen der Aszension, geleitet vom Nebelgeist tiefer in den Untergrund.',
				season: 'Spätwinter',
				year: '1024 FE',
			},
			'woa-58': {
				title: 'Der Brunnen entdeckt',
				description:
					'Vin steigt in die uralten Kavernen unter Kredik Shaw hinab und entdeckt den Brunnen der Aszension, dessen Kraft mit angesammelter Energie pulsiert.',
				season: 'Winter',
				year: '1024 FE',
			},
			'woa-59': {
				title: 'Die Macht freigesetzt',
				description:
					'Am Brunnen nimmt Vin immense Macht auf — doch dann, getäuscht durch Zerstörung Manipulation der Prophezeiungen, setzt sie die Macht frei. Etwas Schreckliches entkommt seinem Gefängnis.',
				season: 'Winter',
				year: '1024 FE',
			},
			'hoa-1': {
				title: 'Der Feldzug im Norden',
				description:
					'Vin und Elant führen ihre Armee nach Vetitan, eine Stadt, die unter zunehmendem Aschefall begraben wird, um eines der versteckten Vorratslager des Obersten Herrschers zu sichern.',
				season: 'Frühling',
				year: '1026 FE',
			},
			'hoa-3': {
				title: 'Der erste Vorrat',
				description:
					'Vin öffnet die Vorratskaverne von Vetitan und findet Nahrung, Vorräte und eine Metallplatte mit einer kryptischen Nachricht des Obersten Herrschers über die Gefahr, die er eingesperrt hatte.',
				season: 'Frühling',
				year: '1026 FE',
			},
			'hoa-8': {
				title: 'Kräfte aufteilen',
				description:
					'Vin kehrt nach Luthadel zurück, wo die Armee sich aufteilt: Sazed und Breeze ziehen nach Norden nach Urteau, während Vin und Elant nach Westen nach Fadrex marschieren werden.',
				season: 'Sommer',
				year: '1026 FE',
			},
			'hoa-10': {
				title: 'Marsch nach Westen',
				description:
					'Vin marschiert mit Elants Armee nach Westen Richtung Fadrex, während die Asche jeden Tag stärker fällt und die Welt um sie herum verfällt.',
				season: 'Sommer',
				year: '1026 FE',
			},
			'hoa-21': {
				title: 'Ankunft in Fadrex',
				description:
					'Die Armee trifft vor Fadrex ein und errichtet ein Belagerungslager auf den aschebedeckten Ebenen. Obligator Yomen weigert sich, die Stadt oder ihren Vorrat zu übergeben.',
				season: 'Herbst',
				year: '1026 FE',
			},
			'hoa-28': {
				title: 'Die Spionin auf dem Ball',
				description:
					'Vin infiltriert Fadrex als Adlige verkleidet und besucht einen von Yomens Bällen auf Burg Orielle, um Informationen zu sammeln und eine diplomatische Lösung zu suchen.',
				season: 'Herbst',
				year: '1026 FE',
			},
			'hoa-40': {
				title: 'Zweiter Ball',
				description:
					'Vin kehrt zu einem weiteren von Yomens Bällen zurück und verwickelt ihn in eine philosophische Debatte über das Vermächtnis des Obersten Herrschers und den zunehmenden Aschefall.',
				season: 'Spätherbst',
				year: '1026 FE',
			},
			'hoa-47': {
				title: 'Gefangen',
				description:
					'Vin wird von Yomens Truppen gefangen genommen und im Kanton der Ressourcen eingesperrt, ihrer Metalle beraubt. Sie wird in einer Zelle mit einem Atiumvorrat gehalten, den sie nicht erreichen kann.',
				season: 'Winter',
				year: '1026 FE',
			},
			'hoa-51': {
				title: 'Im Gefängnis',
				description:
					'Eingesperrt und von ihren Metallen abgeschnitten, denkt Vin über Zerstörungen Einfluss und die Natur der Macht nach, die sie am Brunnen freigesetzt hat.',
				season: 'Winter',
				year: '1026 FE',
			},
			'hoa-54': {
				title: 'Das Lager enthüllt',
				description:
					'Vin entdeckt das Vorratslager von Fadrex und seinen entscheidenden Inhalt — Nahrung, Vorräte und eine Botschaft über die wahren Vorbereitungen des Obersten Herrschers.',
				season: 'Spätwinter',
				year: '1026 FE',
			},
			'hoa-56': {
				title: 'Flucht aus Fadrex',
				description:
					'Als Koloss Fadrex angreifen, flieht Vin aus der Stadt und zieht die Inquisitoren von Elant und der Armee weg, um sie zu beschützen.',
				season: 'Vorfrühling',
				year: '1027 FE',
			},
			'hoa-59': {
				title: 'Die Jagd anführen',
				description:
					'Vin fliegt nach Osten Richtung Luthadel, ein Rudel Inquisitoren auf den Fersen, und zieht Zerstörungen Diener bewusst von Fadrex und Elant weg.',
				season: 'Frühling',
				year: '1027 FE',
			},
			'hoa-72': {
				title: 'Rückkehr nach Luthadel',
				description:
					'Vin trifft in einem verwüsteten Luthadel ein und zerstört Kredik Shaw — sie lässt den Palast des Obersten Herrschers in einer gewaltigen Demonstration allomantischer Macht einstürzen.',
				season: 'Sommer',
				year: '1027 FE',
			},
			'hoa-79': {
				title: 'Aufstieg',
				description:
					'Vin greift auf die Nebel selbst zurück — den Körper der Erhaltung — und steigt auf, um ein Gefäß göttlicher Macht zu werden und Zerstörung direkt zu bekämpfen.',
				season: 'Herbst',
				year: '1027 FE',
			},
			'hoa-81': {
				title: 'Das letzte Opfer',
				description:
					'Vin opfert sich, um Zerstörung zu vernichten, und vereint die Macht der Erhaltung mit ihrer eigenen Lebenskraft, um den Gott der Zerstörung auszulöschen.',
				season: 'Herbst',
				year: '1027 FE',
			},
			'hoa-83': {
				title: 'Das Feld der Wiedergeburt',
				description:
					'Vins Leichnam wird in einem Feld voller Blumen und grünem Gras gefunden — die ersten Zeichen von Sazeds neugeschaffener Welt. Sie ruht friedlich neben Elant.',
				season: 'Herbst',
				year: '1027 FE',
			},
		},
		kelsier: {
			'tfe-0': {
				title: 'Die Rückkehr des Überlebenden',
				description:
					'Kelsier trifft auf Lord Trestings Plantage in der Südlichen Dominanz ein und tötet den grausamen Adligen — sein erster Schlag gegen den Adel seit seiner Flucht aus den Gruben.',
				season: 'Frühling',
				year: '1021 FE',
			},
			'tfe-1': {
				title: 'Verborgener Beobachter',
				description:
					'Kelsier beobachtet Camons Bande aus dem Schatten und bemerkt Vins unbewussten Einsatz von Allomantie — ein Straßenkind mit den Kräften einer Nebelgeborenen.',
				season: 'Frühling',
				year: '1021 FE',
			},
			'tfe-3': {
				title: 'Vin anwerben',
				description:
					'Kelsier rettet Vin vor Camons Misshandlung und bietet ihr einen Platz in seiner Bande an, wobei er ihr die Wahrheit über ihre Fähigkeiten als Nebelgeborene offenbart.',
				season: 'Frühling',
				year: '1021 FE',
			},
			'tfe-5': {
				title: 'Der Atium-Raub',
				description:
					'Kelsier bricht in den Tresor von Burg Venture ein, um Atium zu stehlen, finanziert damit die Rebellion und testet gleichzeitig die Verteidigung der Adelshäuser.',
				season: 'Frühling',
				year: '1021 FE',
			},
			'tfe-6': {
				title: 'Die Bande versammelt sich',
				description:
					"In Clubs' Schreinerei versammelt Kelsier die gesamte Bande — Ham, Breeze, Dockson, Clubs und nun Vin — und enthüllt seinen Plan zum Sturz des Obersten Herrschers.",
				season: 'Frühling',
				year: '1021 FE',
			},
			'tfe-7': {
				title: 'Die Lehrerin unterrichten',
				description:
					'Kelsier nimmt Vin mit zu den Stadtmauern nahe dem Stahltor für das Allomantie-Training und lehrt sie, auf Metalle zu drücken und zu ziehen, während sie zwischen den Türmen springen.',
				season: 'Später Frühling',
				year: '1021 FE',
			},
			'tfe-8': {
				title: 'Die Tarnung Renoux',
				description:
					"Kelsier begleitet Vin nach Fellise zu Lord Renoux' Anwesen und etabliert ihre Tarnidentität als Lady Valette für die Infiltration der Adelsgesellschaft.",
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-10': {
				title: 'Planung der Revolution',
				description:
					"Zurück in Luthadel trifft sich Kelsier mit der Crew in Clubs' Laden, um den Fortschritt der Rebellion zu besprechen. Er nimmt Vin auf einen nächtlichen Lauf durch die Stadt mit, um ihr Allomantie-Training fortzusetzen.",
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-10.2': {
				title: 'Die Rebellion wächst',
				description:
					'Kelsier leitet Lagerhaus-Versammlungen in den Slums von Luthadel und baut die Skaa-Rebellion durch seine Legende als Überlebender von Hathsin auf.',
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-11': {
				title: 'Massaker in Camons Unterschlupf',
				description:
					'Kelsier und die Crew entdecken, dass das Ministerium alle in Camons altem Versteck als Vergeltung für den Finanzministeriums-Betrug abgeschlachtet hat, was ihren Entschluss gegen den Lord-Herrscher stärkt.',
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-14': {
				title: 'Palast-Aufklärung',
				description:
					'Kelsier und Vin erkunden Kredik Shaw bei Nacht, kartieren die Palastverteidigung und testen die Reaktionsfähigkeit der Inquisitoren.',
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-18': {
				title: 'Häuserkrieg-Operationen',
				description:
					'Kelsier orchestriert Angriffe zwischen den Adelshäusern, eliminiert Ziele und platziert Beweise, um den Häuserkrieg zu befeuern, der den Adel schwächt.',
				season: 'Spätsommer',
				year: '1021 FE',
			},
			'tfe-21': {
				title: 'Die Rebellenarmee',
				description:
					'Kelsier reist zu den Arguois-Höhlen, um die wachsende Rebellenarmee zu inspizieren, die in den Bergen versteckt ist und Soldaten ausbildet, die nie zuvor Waffen gehalten haben.',
				season: 'Herbst',
				year: '1021 FE',
			},
			'tfe-25': {
				title: 'Katastrophe bei Holstep',
				description:
					'Kelsier unternimmt einen Zinnlauf nach Holstep, als die Garnison die Rebellenarmee entdeckt und niedermetzelt. Er findet Verwüstung vor und muss nach Süden fliehen.',
				season: 'Spätherbst',
				year: '1021 FE',
			},
			'tfe-26': {
				title: 'Die Scherben aufsammeln',
				description:
					"Zurück in Clubs' Schreinerei gruppiert sich Kelsier nach der Katastrophe von Holstep neu und weigert sich, die Revolution aufzugeben, selbst als alle Hoffnung verloren scheint.",
				season: 'Winter',
				year: '1021 FE',
			},
			'tfe-32': {
				title: 'Zerstörung der Gruben',
				description:
					'Kelsier kehrt zu den Gruben von Hathsin zurück — dem Ort seines größten Leids — und zerstört die Atiumkristalle, um dem Obersten Herrscher seine wertvollste Ressource abzuschneiden.',
				season: 'Winter',
				year: '1022 FE',
			},
			'tfe-34': {
				title: 'Das letzte Gefecht des Überlebenden',
				description:
					'Kelsier stellt sich dem Obersten Herrscher auf dem Brunnenplatz in einem aussichtslosen Kampf. Er stirbt mit einem Lächeln und wird zum Märtyrer, dessen Tod die Revolution entfacht.',
				season: 'Vorfrühling',
				year: '1022 FE',
			},
			'tfe-35': {
				title: 'Jenseits des Todes',
				description:
					'Durch OreSeur, den Kandra, der seine Knochen trägt, entfaltet sich Kelsiers letzter Plan — sein Tod war der Funke, der die Revolution in ganz Luthadel entflammte.',
				season: 'Vorfrühling',
				year: '1022 FE',
			},
			'woa-1': {
				title: 'Jenseits des Schleiers',
				description:
					'Nach seinem Tod in der Kognitiven Ebene gefangen, existiert Kelsier als Kognitiver Schatten nahe dem Brunnen der Aszension und beobachtet, wie sich Luthadel unter Elants Herrschaft wandelt.',
				season: 'Herbst',
				year: '1023 FE',
			},
			'woa-59': {
				title: 'Zeuge der Freisetzung',
				description:
					'Kelsier beobachtet hilflos aus der Kognitiven Ebene, wie Vin die Macht am Brunnen der Aszension aufnimmt und freisetzt — und damit Zerstörung aus seinem Gefängnis befreit.',
				season: 'Winter',
				year: '1024 FE',
			},
			'sh-4.1': {
				title: 'Kognitive Reise nach Westen',
				description:
					'Als Kognitiver Schatten existierend, reist Kelsier über den Nebelozean zu den westlichen Verbrannten Landen, um Hilfe von der Ire-Festung zu suchen.',
				season: 'Frühling',
				year: '1025 FE',
			},
			'sh-6.1': {
				title: 'Die Warnung in Fadrex',
				description:
					'Kelsier erreicht die kognitive Spiegelung von Fadrex City, trifft auf Hoid und versucht, Vin vor ihrem hämalurgischen Spike zu warnen.',
				season: 'Herbst',
				year: '1026 FE',
			},
			'hoa-1': {
				title: 'Der Überlebende harrt aus',
				description:
					'In der Kognitiven Ebene arbeitet Kelsier an der Seite der schwindenden Kraft der Erhaltung und sucht nach einem Weg, dem Physischen Reich gegen Zerstörungen wachsenden Einfluss zu helfen.',
				season: 'Frühling',
				year: '1026 FE',
			},
			'hoa-50': {
				title: 'Erhaltung halten',
				description:
					'Als das Bewusstsein der Erhaltung schwindet, nimmt Kelsier die Macht des Splitters auf — er hält sie unvollkommen aus der Kognitiven Ebene und gewinnt Zeit für den letzten Akt.',
				season: 'Frühling',
				year: '1027 FE',
			},
			'hoa-81': {
				title: 'Die Fackel weitergeben',
				description:
					'Vin nimmt Kelsier die Macht der Erhaltung ab, um Zerstörung zu vernichten. Der Überlebende lässt den Splitter los, seine Aufgabe erfüllt — doch er weigert sich, ins Jenseits überzugehen.',
				season: 'Herbst',
				year: '1027 FE',
			},
			'hoa-83': {
				title: 'Der Überlebende lebt weiter',
				description:
					'Selbst als Harmonie die Welt neu erschafft, besteht Kelsier in der Kognitiven Ebene fort — der Überlebende, der sich nicht einmal vom Tod aufhalten ließ.',
				season: 'Herbst',
				year: '1027 FE',
			},
		},
		sazed: {
			'tfe-9': {
				title: 'Der Terris-Verwalter',
				description:
					"Sazed trifft auf Lord Renoux' Anwesen in Fellise ein, um als Vins Lehrer zu dienen, ihr die Wege des Adels beizubringen und im Geheimen alte Religionen zu bewahren.",
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-10.2': {
				title: 'Die Versammlung im Lagerhaus',
				description:
					'Sazed nimmt an der geheimen Versammlung im Lagerviertel teil, zusammen mit Kelsier und Vin, und beobachtet, wie der Überlebende den versammelten Skaa-Arbeitern die Revolution predigt.',
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-13': {
				title: 'Wächter auf dem Ball',
				description:
					'Sazed begleitet Vin als ihr Verwalter zu ihrem ersten Ball und wacht aus den Dienstbotenquartieren über sie, während sie die Adelsgesellschaft infiltriert.',
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-22': {
				title: 'Die Arbeit des Gelehrten',
				description:
					'Sazed unterrichtet Vin zwischen den Bällen auf dem Anwesen Renoux, teilt sein umfangreiches Wissen über Religionen und studiert die Muster des Letzten Reiches.',
				season: 'Herbst',
				year: '1021 FE',
			},
			'tfe-34': {
				title: 'Zeuge der Revolution',
				description:
					'Sazed befindet sich während der Revolution in Luthadel und beobachtet, wie die Skaa sich erheben und Kelsier auf dem Brunnenplatz fällt.',
				season: 'Vorfrühling',
				year: '1022 FE',
			},
			'tfe-38': {
				title: 'Der Fall des Reiches',
				description:
					'Sazed unterstützt die Bande beim Sturm auf Kredik Shaw und setzt seine Feruchemie ein, um sich durch die Wachen des Obersten Herrschers zu kämpfen.',
				season: 'Vorfrühling',
				year: '1022 FE',
			},
			'tfe-39': {
				title: 'Ein neuer Anfang',
				description:
					'In der Nachwirkung beginnt Sazed, die Aufzeichnungen von Kredik Shaw zu studieren und nach Antworten über die Tiefe und die Prophezeiung des Helden der Zeitalter zu suchen.',
				season: 'Frühling',
				year: '1022 FE',
			},
			'woa-4': {
				title: 'Der wandernde Lehrer',
				description:
					'Sazed reist durch die Östliche Dominanz, besucht ländliche Dörfer, um unterdrückte Religionen und Wissen mit den neu befreiten Skaa zu teilen.',
				season: 'Herbst',
				year: '1023 FE',
			},
			'woa-7': {
				title: 'Das Konventikel von Seran',
				description:
					'Von Marsh geführt, entdeckt Sazed das Konventikel von Seran — eine grauenerregende Inquisitoren-Festung, in der er Kwaans stählerne Inschriftenplatte findet.',
				season: 'Spätherbst',
				year: '1023 FE',
			},
			'woa-12': {
				title: 'Entschlüsselung der Platte',
				description:
					'Sazed studiert Kwaans Inschrift im Konventikel und deckt die verzweifelte Warnung des Terris-Hüters auf, dass die Prophezeiung des Helden der Zeitalter verändert wurde.',
				season: 'Spätherbst',
				year: '1023 FE',
			},
			'woa-15': {
				title: 'Die Nebeltoten',
				description:
					'Auf dem Rückweg nach Westen durch Urbene begegnet Sazed Dörfern, in denen Menschen auf mysteriöse Weise im Nebel gestorben sind — die ersten Anzeichen der Nebelkrankheit.',
				season: 'Winter',
				year: '1023 FE',
			},
			'woa-22': {
				title: 'Rückkehr nach Luthadel',
				description:
					'Sazed trifft in Luthadel ein und bringt schwerwiegende Nachrichten über die veränderte Prophezeiung, die Nebeltoten und die wahre Bedeutung der stählernen Inschrift.',
				season: 'Winter',
				year: '1023 FE',
			},
			'woa-40': {
				title: 'Debatte über die Prophezeiung',
				description:
					'Sazed arbeitet mit Tindwyl auf Burg Venture zusammen, vergleicht die ursprüngliche und veränderte Version der Prophezeiung des Helden der Zeitalter und kommt ihr dabei näher.',
				season: 'Spätwinter',
				year: '1024 FE',
			},
			'woa-52': {
				title: 'Verteidigung des Tores',
				description:
					'Als Koloss die Mauern von Luthadel durchbrechen, nutzt Sazed seine Feruchemie, um das Zinntor im Alleingang zu halten, und verbraucht seine gespeicherten Attribute in einem verzweifelten letzten Gefecht.',
				season: 'Spätwinter',
				year: '1024 FE',
			},
			'woa-57': {
				title: 'Kampf gegen Marsh',
				description:
					'Sazed kämpft in den Korridoren von Kredik Shaw gegen einen von Zerstörung kontrollierten Marsh und überlebt den Angriff des Inquisitors nur knapp, während Vin zum Brunnen hinabsteigt.',
				season: 'Winter',
				year: '1024 FE',
			},
			'woa-59': {
				title: 'Tindwyls Tod',
				description:
					'Sazed erfährt, dass Tindwyl beim Koloss-Angriff getötet wurde. Am Boden zerstört, beginnt seine Glaubenskrise — er stellt jede Religion in Frage, die er bewahrt.',
				season: 'Winter',
				year: '1024 FE',
			},
			'hoa-4': {
				title: 'Diplomatie im Süden',
				description:
					'Sazed besucht mit Breeze Lekal-Stadt, um einen Vertrag auszuhandeln, und nutzt Diplomatie, um den südlichen König in Elants wachsende Koalition einzubinden.',
				season: 'Sommer',
				year: '1026 FE',
			},
			'hoa-8': {
				title: 'Aufbruch nach Norden',
				description:
					'Sazed erhält den Auftrag, Urteau auf diplomatischem Wege zu sichern, während Elant die Armee nach Westen führt. Er bricht durch das nördliche Tor auf.',
				season: 'Sommer',
				year: '1026 FE',
			},
			'hoa-14': {
				title: 'Ankunft in Urteau',
				description:
					'Sazed erreicht Urteau und findet es unter der unterdrückerischen Herrschaft des Bürgers Quellion vor. Er richtet eine diplomatische Enklave im verlassenen Venture-Anwesen ein.',
				season: 'Herbst',
				year: '1026 FE',
			},
			'hoa-25': {
				title: 'Vertrauen aufbauen',
				description:
					'Sazed arbeitet daran, das Vertrauen der Bevölkerung von Urteau zu gewinnen, studiert die Geschichte der Stadt und sucht nach der Vorratskaverne unter dem Ministeriumsgebäude.',
				season: 'Frühwinter',
				year: '1026 FE',
			},
			'hoa-40': {
				title: 'Ermittlungen im Ministerium',
				description:
					'Sazed ermittelt im Ministeriumskanton und versucht, Zugang zur Vorratskaverne darunter zu erhalten, während er Quellions paranoide Regierung navigiert.',
				season: 'Winter',
				year: '1026 FE',
			},
			'hoa-50': {
				title: 'Entdeckung der Kaverne',
				description:
					'Sazed entdeckt den Mechanismus zur Flutung des trockenen Kanalsystems — der Oberste Herrscher hatte die Kanäle trockengelegt, um das Wasser in der Vorratskaverne darunter zu verbergen.',
				season: 'Vorfrühling',
				year: '1027 FE',
			},
			'hoa-58': {
				title: 'Rettung von Urteau',
				description:
					'Als Brände während der Revolution gegen Quellion durch die Stadt wüten, lässt Sazed das gespeicherte Wasser in die Kanäle strömen und rettet Urteau vor der Zerstörung.',
				season: 'Frühling',
				year: '1027 FE',
			},
			'hoa-64': {
				title: 'Wiederaufbau',
				description:
					'Nach Quellions Absetzung und dem Löschen der Brände hilft Sazed beim Wiederaufbau von Urteau, verteilt Vorräte aus dem Lager und studiert die Botschaft des Obersten Herrschers.',
				season: 'Sommer',
				year: '1027 FE',
			},
			'hoa-69': {
				title: 'Reise nach Hathsin',
				description:
					'Sazed reist zu den Gruben von Hathsin, angezogen von der Konvergenz der Ereignisse. Sein Studium der Religionen und Kwaans Inschrift hat ihn zu einer schrecklichen Erkenntnis geführt.',
				season: 'Herbst',
				year: '1027 FE',
			},
			'hoa-71': {
				title: 'Die letzte Versammlung',
				description:
					'Sazed kehrt nach Luthadel zurück, während die Welt um ihn herum stirbt und die Asche in schwarzen Vorhängen fällt. Er trägt das Wissen jeder Religion und jeder Prophezeiung in sich.',
				season: 'Herbst',
				year: '1027 FE',
			},
			'hoa-82': {
				title: 'Der Held der Zeitalter',
				description:
					'Mit Vin und Zerstörung beide vernichtet, erkennt Sazed, dass er der Held der Zeitalter ist. Er nimmt sowohl die Macht der Erhaltung als auch der Zerstörung am Brunnen der Aszension auf.',
				season: 'Herbst',
				year: '1027 FE',
			},
			'hoa-83': {
				title: 'Harmonie',
				description:
					'Sazed steigt als Harmonie auf und vereint Zerstörung und Erhaltung. Er erschafft die Welt neu — verschiebt den Planeten, bringt das Grün zurück und heilt tausend Jahre des Schadens.',
				season: 'Herbst',
				year: '1027 FE',
			},
		},
		elend: {
			'tfe-12': {
				title: 'Der lesende Adlige',
				description:
					'Elant Wager wird auf einem Ball in seiner eigenen Burg vorgestellt, lesend, während der Rest des Adels um ihn herum tanzt und intrigiert.',
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-13': {
				title: 'Begegnung mit Lady Valette',
				description:
					'Elant trifft die geheimnisvolle Lady Valette Renoux auf einem Ball, angezogen von ihrem unkonventionellen Verhalten und ihrem scharfen Witz.',
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-19': {
				title: 'Die Umwerbung',
				description:
					'Elants Faszination für Lady Valette wächst, als sie auf Bällen Gespräche über Philosophie und die Verfehlungen des Adels führen.',
				season: 'Spätsommer',
				year: '1021 FE',
			},
			'tfe-24': {
				title: 'Adliger Verschwörer',
				description:
					'Elant organisiert im Geheimen gemäßigte Adlige, die sich der Tyrannei des Obersten Herrschers widersetzen, und trifft sich in der Privatbibliothek von Burg Venture.',
				season: 'Herbst',
				year: '1021 FE',
			},
			'tfe-34': {
				title: 'Die Revolution',
				description:
					'Elant wird Zeuge des Chaos des Skaa-Aufstands auf dem Brunnenplatz und tritt vor, um sowohl Adlige als auch einfache Leute vor der Gewalt zu schützen.',
				season: 'Vorfrühling',
				year: '1022 FE',
			},
			'tfe-38': {
				title: 'Unerwarteter Anführer',
				description:
					'Nach dem Tod des Obersten Herrschers tritt Elant als vereinende Stimme hervor und ruft zur Ordnung, während das Reich um ihn herum zerfällt.',
				season: 'Vorfrühling',
				year: '1022 FE',
			},
			'tfe-39': {
				title: 'Der neue König',
				description:
					'Elant Wager wird zum König der Zentralen Dominanz ernannt und beginnt die schwierige Aufgabe, aus den Ruinen der Tyrannei eine demokratische Regierung aufzubauen.',
				season: 'Frühling',
				year: '1022 FE',
			},
			'woa-1': {
				title: 'König von Luthadel',
				description:
					'Elant arbeitet unermüdlich auf Burg Venture an der Errichtung einer konstitutionellen Regierung, entwirft Gesetze und baut eine Versammlung auf, während sich draußen Armeen sammeln.',
				season: 'Herbst',
				year: '1023 FE',
			},
			'woa-5': {
				title: 'Die Versammlung',
				description:
					'Elant spricht vor der von ihm geschaffenen Versammlung und plädiert für demokratische Prinzipien, selbst als seine Berater warnen, dass die Demokratie die Belagerung möglicherweise nicht übersteht.',
				season: 'Herbst',
				year: '1023 FE',
			},
			'woa-12': {
				title: 'Überblick über die Belagerung',
				description:
					'Elant überblickt die Belagerungslinien von den Stadtmauern und beobachtet die Armee seines Vaters Straff im Norden und Cetts Truppen, die von Westen heranrücken.',
				season: 'Frühwinter',
				year: '1023 FE',
			},
			'woa-22': {
				title: 'Kampf um die Demokratie',
				description:
					'Elant sieht sich wachsendem Widerstand in der Versammlung gegenüber, da die Angst vor der Belagerung viele dazu treibt, einen stärkeren Anführer zu suchen als einen Philosophenkönig.',
				season: 'Winter',
				year: '1023 FE',
			},
			'woa-26': {
				title: 'Verhandlung mit dem Vater',
				description:
					'Elant reitet zu Straff Ventures Lager, um zu verhandeln, und bringt Vin als seine Beschützerin mit. Das Treffen offenbart Straffs Verachtung für seinen idealistischen Sohn.',
				season: 'Winter',
				year: '1023 FE',
			},
			'woa-28': {
				title: 'Diplomatische Planungen',
				description:
					'Zurück auf Burg Venture versucht Elant, die drei Armeen gegeneinander auszuspielen — Straff, Cett und die heranrückende Koloss-Horde.',
				season: 'Winter',
				year: '1024 FE',
			},
			'woa-35': {
				title: 'Abgesetzt',
				description:
					'Die Versammlung stimmt dafür, Elant durch Lord Penrod zu ersetzen, und nutzt eine Klausel in Elants eigener demokratischer Verfassung. Sein Idealismus wird ihm zum Verhängnis.',
				season: 'Winter',
				year: '1024 FE',
			},
			'woa-42': {
				title: 'Mission zu den Koloss',
				description:
					'Elant verlässt Luthadel durch die Tunnel, um mit Jastes Lekal und seiner Koloss-Armee zu verhandeln — ein verzweifeltes Wagnis, um einen Verbündeten zu gewinnen.',
				season: 'Spätwinter',
				year: '1024 FE',
			},
			'woa-46': {
				title: 'Rückkehr von den Koloss',
				description:
					'Elant kehrt gescheitert aus dem Koloss-Lager zurück — Jastes hat die Kontrolle über seine Bestien verloren. Die Koloss werden so oder so angreifen.',
				season: 'Spätwinter',
				year: '1024 FE',
			},
			'woa-49': {
				title: 'Verbannung aus Luthadel',
				description:
					'Elant verlässt mit Vin Luthadel durch das Zinntor, von Penrods Regierung verbannt, und zieht nach Norden Richtung Terris, um die Hilfe des Hüter-Synods zu suchen.',
				season: 'Spätwinter',
				year: '1024 FE',
			},
			'woa-50': {
				title: 'Die Reise nach Norden',
				description:
					'Elants Gruppe reist Richtung Terris, doch wachsende Unruhe lässt sie umdenken. Der Brunnen der Aszension ist möglicherweise nicht dort, wo sie dachten.',
				season: 'Spätwinter',
				year: '1024 FE',
			},
			'woa-52': {
				title: 'Die Schlacht',
				description:
					'Elant kehrt zurück und findet Luthadel unter Koloss-Angriff, kämpft sich durch das Chaos, als die Mauern durchbrochen werden und die Stadt zu fallen droht.',
				season: 'Spätwinter',
				year: '1024 FE',
			},
			'woa-58': {
				title: 'Zum Brunnen',
				description:
					'Elant steigt mit Vin in die Tiefen unter Kredik Shaw hinab, auf der Suche nach dem Brunnen der Aszension, während Marsh über ihnen gegen Sazed kämpft.',
				season: 'Winter',
				year: '1024 FE',
			},
			'woa-59': {
				title: 'Der Nebelgeborene Kaiser',
				description:
					'Tödlich verwundet am Brunnen wird Elant gerettet, als Vin ihm eine Perle aus Lerasium in den Mund drückt und ihn in einen Nebelgeborenen verwandelt.',
				season: 'Winter',
				year: '1024 FE',
			},
			'hoa-1': {
				title: 'Kaiser im Krieg',
				description:
					'Elant führt seine Armeen nach Vetitan, nun ein Nebelgeborener Kaiser, der Feldzüge leitet, um die verborgenen Vorratslager des Obersten Herrschers zu sichern.',
				season: 'Frühling',
				year: '1026 FE',
			},
			'hoa-3': {
				title: 'Sicherung des Vorrats',
				description:
					'Elant sichert die Vorratskaverne von Vetitan und findet Nahrung sowie eine Metallplatten-Botschaft, die vor der Gefahr warnt, die Rashek eingesperrt hatte.',
				season: 'Frühling',
				year: '1026 FE',
			},
			'hoa-8': {
				title: 'Strategische Aufteilung',
				description:
					'In Luthadel teilt Elant seine Streitkräfte auf: Sazed soll Urteau auf diplomatischem Wege sichern, während er selbst nach Westen marschiert, um Fadrex nötigenfalls mit Gewalt zu nehmen.',
				season: 'Sommer',
				year: '1026 FE',
			},
			'hoa-10': {
				title: 'Der Marsch nach Westen',
				description:
					'Elant führt seine Armee nach Westen Richtung Fadrex, die Asche fällt jeden Tag stärker. Während des Marsches trainiert er seine Fähigkeiten als Nebelgeborener.',
				season: 'Sommer',
				year: '1026 FE',
			},
			'hoa-21': {
				title: 'Die Belagerung von Fadrex',
				description:
					'Elants Armee trifft in Fadrex ein und errichtet Belagerungslinien auf den aschebedeckten Ebenen. Yomen weigert sich zu verhandeln oder den Vorrat zu übergeben.',
				season: 'Herbst',
				year: '1026 FE',
			},
			'hoa-28': {
				title: 'Der widerwillige Belagerer',
				description:
					'Elant ringt mit seiner Rolle als Eroberer und versucht weiterhin Diplomatie, während seine Generäle auf einen Sturmangriff drängen. Der Aschefall verschlimmert sich täglich.',
				season: 'Herbst',
				year: '1026 FE',
			},
			'hoa-47': {
				title: 'Vin verlieren',
				description:
					'Als Vin in Fadrex gefangen genommen wird, steht Elant vor einer unmöglichen Wahl zwischen der Rettung seiner Frau und dem Schutz Zehntausender Soldaten.',
				season: 'Winter',
				year: '1026 FE',
			},
			'hoa-54': {
				title: 'Eintritt in Fadrex',
				description:
					'Ein Koloss-Angriff erzwingt ein vorübergehendes Bündnis mit Yomen. Elant betritt die Stadt und erhält Zugang zum Vorratslager, wo er die letzte Botschaft des Obersten Herrschers findet.',
				season: 'Spätwinter',
				year: '1026 FE',
			},
			'hoa-58': {
				title: 'Aufbruch nach Hathsin',
				description:
					'Mit dem gesicherten Vorrat und Vin auf dem Weg nach Osten erfährt Elant die letzte Wahrheit: Das Atium muss in den Gruben von Hathsin sein. Er marschiert mit seiner Armee nach Süden.',
				season: 'Vorfrühling',
				year: '1027 FE',
			},
			'hoa-61': {
				title: 'Marsch zu den Gruben',
				description:
					'Elant führt seine erschöpfte Armee zu den Gruben von Hathsin, unter denen die Heimat der Kandra liegt. Marshs Inquisitoren-Armee folgt dicht hinter ihnen.',
				season: 'Frühling',
				year: '1027 FE',
			},
			'hoa-69': {
				title: 'Die Schlacht von Hathsin',
				description:
					'Elant verbrennt das letzte Atium in einem verzweifelten Kampf gegen Inquisitoren und Koloss an den Gruben, wohl wissend, dass sein Tod kommen wird, wenn das Metall verbraucht ist.',
				season: 'Sommer',
				year: '1027 FE',
			},
			'hoa-79': {
				title: 'Der Tod des Kaisers',
				description:
					'Elant wird von Marsh in den letzten Momenten der Schlacht von Hathsin getötet, sein Atium verbraucht. Er stirbt, nachdem er alles Metall verbrannt hat, das Zerstörung suchte.',
				season: 'Herbst',
				year: '1027 FE',
			},
			'hoa-83': {
				title: 'Vereint im Tod',
				description:
					'Elants Leichnam wird neben Vins in einem Feld voller Blumen gefunden — Sazeds erstes Geschenk an die neuerschaffene Welt — in Frieden nach all ihren Kämpfen.',
				season: 'Herbst',
				year: '1027 FE',
			},
		},
		marsh: {
			'tfe-7': {
				title: 'Der widerwillige Bruder',
				description:
					"Marsh trifft in Clubs' Schreinerei ein — Kelsiers älterer Bruder und selbst ein Rebellenführer. Er schließt sich widerwillig dem Plan der Bande an.",
				season: 'Später Frühling',
				year: '1021 FE',
			},
			'tfe-10.2': {
				title: 'Die Versammlung im Lagerhaus',
				description:
					'Marsh nimmt mit der Bande an der geheimen Versammlung im Lagerviertel teil und beobachtet, wie sein Bruder Kelsier vor den versammelten Skaa-Arbeitern die Revolution predigt.',
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-13': {
				title: 'Treffen am Berg Tyrian',
				description:
					'Marsh trifft Kelsier am Berg Tyrian, einige Kilometer außerhalb von Luthadel, um den Rebellionsplan fern von den Ohren des Ministeriums zu besprechen, bevor er seine gefährliche Infiltration beginnt.',
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-20': {
				title: 'Tiefer verdeckt',
				description:
					'Marsh dringt tiefer in die Hierarchie des Ministeriums bei Kredik Shaw ein und erfährt die dunklen Geheimnisse der Hämalurgie, während er riskiert, von den Inquisitoren entdeckt zu werden.',
				season: 'Spätsommer',
				year: '1021 FE',
			},
			'tfe-30': {
				title: 'Verschwunden',
				description:
					'Marsh verstummt, seine Nachrichten hören auf, als er in den tiefsten Ebenen des Kantons der Inquisition verschwindet. Die Bande befürchtet das Schlimmste.',
				season: 'Winter',
				year: '1021 FE',
			},
			'tfe-38': {
				title: 'Der Inquisitor',
				description:
					'Marsh taucht beim letzten Sturm auf Kredik Shaw auf — noch am Leben, aber verwandelt. Eiserne Spitzen durchbohren seine Augen. Trotz seiner Verwandlung kämpft er für die Bande.',
				season: 'Vorfrühling',
				year: '1022 FE',
			},
			'woa-4': {
				title: 'Wanderer im Osten',
				description:
					'Marsh wandert als einsamer Inquisitor durch die Östliche Dominanz, versucht seine Verwandlung zu verstehen und hilft Sazed bei der Untersuchung entlegener Dörfer.',
				season: 'Herbst',
				year: '1023 FE',
			},
			'woa-7': {
				title: 'Der Führer zum Konventikel',
				description:
					'Marsh führt Sazed zum Konventikel von Seran, einer Inquisitoren-Festung im abgelegenen Norden, um die Aufzeichnungen zu finden, die Sazed sucht.',
				season: 'Spätherbst',
				year: '1023 FE',
			},
			'woa-12': {
				title: 'Im Stich gelassen',
				description:
					'Marsh verlässt Sazed abrupt im Konventikel und verschwindet in der Wildnis, getrieben von Kräften, denen er zunehmend nicht widerstehen kann. Zerstörungen Einfluss wächst.',
				season: 'Spätherbst',
				year: '1023 FE',
			},
			'woa-57': {
				title: 'Zerstörungen Marionette',
				description:
					'Marsh erscheint unter Zerstörungen voller Kontrolle bei Kredik Shaw und kämpft in den Korridoren gegen Sazed, während Vin zum Brunnen der Aszension hinabsteigt.',
				season: 'Winter',
				year: '1024 FE',
			},
			'woa-59': {
				title: 'Wächter des Brunnens',
				description:
					'Marsh bewacht den Eingang zum Brunnen als Marionette Zerstörungen und kämpft, um jeden daran zu hindern, Vin zu erreichen — oder ihr zu helfen, die richtige Wahl zu treffen.',
				season: 'Winter',
				year: '1024 FE',
			},
			'hoa-0': {
				title: 'Erschaffung von Inquisitoren',
				description:
					'Unter Zerstörungen Kontrolle vollzieht Marsh dunkle hämalurgische Rituale in Tathingdwen und erschafft neue Inquisitoren aus gefangenen Feruchemisten und Allomanten.',
				season: 'Frühling',
				year: '1026 FE',
			},
			'hoa-6': {
				title: 'Koloss anführen',
				description:
					'Marsh befehligt im Auftrag Zerstörungen eine wachsende Armee von Koloss, bewegt sich durch die Östliche Dominanz und sammelt Truppen für die letzte Schlacht.',
				season: 'Sommer',
				year: '1026 FE',
			},
			'hoa-22': {
				title: 'Nahe Tyrian',
				description:
					'Marsh operiert nahe dem Berg Tyrian, stellt hämalurgische Spitzen aus gefangenen Gefangenen her und baut Zerstörungen Inquisitoren-Armee im Schatten des Aschbergs auf.',
				season: 'Winter',
				year: '1026 FE',
			},
			'hoa-38': {
				title: 'Die Spickung Penrods',
				description:
					'Marsh infiltriert Luthadel, um König Penrod mit einem hämalurgischen Nagel zu versehen, und verschafft Zerstörung so einen direkten Zugang zur Regierung der Hauptstadt.',
				season: 'Winter',
				year: '1026 FE',
			},
			'hoa-45': {
				title: 'Konvergenz auf Fadrex',
				description:
					'Marsh führt seine Inquisitoren Richtung Fadrex, als sie auf die Belagerung zusteuern, während Zerstörung danach trachtet, den im Inneren verborgenen Atiumvorrat zu bergen.',
				season: 'Winter',
				year: '1026 FE',
			},
			'hoa-59': {
				title: 'Verfolgung von Vin',
				description:
					'Marsh führt das Inquisitoren-Rudel bei der Verfolgung Vins nach Osten, als sie von Fadrex Richtung Luthadel flieht und Zerstörungen Diener vom Vorrat weglockt.',
				season: 'Frühling',
				year: '1027 FE',
			},
			'hoa-69': {
				title: 'Die Schlacht von Hathsin',
				description:
					'Marsh trifft an den Gruben an der Spitze von Zerstörungen Streitmacht ein. In einem Moment wiedererlangten Willens reißt er Vins Ohrring heraus — ein Akt des Widerstands, der alles verändert.',
				season: 'Herbst',
				year: '1027 FE',
			},
			'hoa-79': {
				title: 'Elants Tod',
				description:
					'Marsh, getrieben von Zerstörung, tötet Kaiser Elant während der Schlacht von Hathsin. Die Tat erfüllt Zerstörungen Plan, kostet Marsh aber ein weiteres Stück seiner Seele.',
				season: 'Herbst',
				year: '1027 FE',
			},
			'hoa-83': {
				title: 'Endlich frei',
				description:
					'Mit der Vernichtung Zerstörungen ist Marsh endlich von der Kontrolle des Gottes befreit. Er steht allein in der neuerschaffenen Welt — ein Inquisitor, der das Ende von allem überlebt hat.',
				season: 'Herbst',
				year: '1027 FE',
			},
		},
		spook: {
			'tfe-7': {
				title: 'Der junge Zinnsucher',
				description:
					"Spukie, Clubs' junger Neffe, arbeitet als Späher und Bote für die Bande in der Schreinerei und spricht in dickem östlichem Straßenslang.",
				season: 'Später Frühling',
				year: '1021 FE',
			},
			'tfe-9': {
				title: 'Botengänge',
				description:
					"Spukie überbringt Nachrichten zwischen Clubs' Schreinerei in Luthadel und dem Anwesen Renoux in Fellise — seine zinnverstärkten Sinne machen ihn zu einem außergewöhnlichen Kundschafter.",
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-22': {
				title: 'Unterstützung der Bande',
				description:
					"Spukie bleibt während des Häuserkriegs in Clubs' Schreinerei und liefert Informationen von seinen Dachwachen und Botengängen durch die Slums.",
				season: 'Herbst',
				year: '1021 FE',
			},
			'tfe-34': {
				title: 'Zeuge des Opfers',
				description:
					'Spukie beobachtet aus der Menge, wie Kelsier auf dem Brunnenplatz stirbt — ein Ereignis, das den Rest seines Lebens prägen wird.',
				season: 'Vorfrühling',
				year: '1022 FE',
			},
			'tfe-38': {
				title: 'Die Revolution',
				description:
					'Spukie kämpft mit der Bande während der letzten Revolution und hilft, den Skaa-Aufstand von den Straßen Luthadels aus zu koordinieren.',
				season: 'Vorfrühling',
				year: '1022 FE',
			},
			'woa-6': {
				title: 'Der heranwachsende Kundschafter',
				description:
					'Spukie dient als Kundschafter für Elants neue Regierung, patrouilliert die Stadt und beobachtet die einschließenden Armeen während der Belagerung.',
				season: 'Herbst',
				year: '1023 FE',
			},
			'woa-49': {
				title: 'Verbannung',
				description:
					'Spukie verlässt Luthadel mit Vin und Elants Exilgruppe durch das Zinntor, auf dem Weg nach Norden zu den Terris-Bergen.',
				season: 'Spätwinter',
				year: '1024 FE',
			},
			'woa-52': {
				title: 'Die Schlacht überleben',
				description:
					'Nach der Rückkehr nach Luthadel während des Koloss-Angriffs überlebt Spukie die Schlacht um Luthadel und hilft, die Stadt zu sichern.',
				season: 'Spätwinter',
				year: '1024 FE',
			},
			'hoa-1': {
				title: 'Feldzugsoldat',
				description:
					'Spukie dient in Elants Armee bei Vetitan und übernimmt schrittweise mehr Verantwortung, als die Truppen des Kaisers das Vorratslager sichern.',
				season: 'Frühling',
				year: '1026 FE',
			},
			'hoa-14': {
				title: 'Der Infiltrator',
				description:
					'Spukie trifft vor Sazeds diplomatischer Mission in Urteau ein und infiltriert die Stadt durch das Gewirr trockener Kanäle, bekannt als die Harrows.',
				season: 'Herbst',
				year: '1026 FE',
			},
			'hoa-17': {
				title: 'Das brennende Haus',
				description:
					'Spukie richtet einen Stützpunkt in einem versteckten Gebäude innerhalb der Harrows ein, beobachtet das unterdrückerische Regime des Bürgers und nimmt Kontakt zum lokalen Widerstand auf.',
				season: 'Herbst',
				year: '1026 FE',
			},
			'hoa-23': {
				title: 'Marktbeobachtung',
				description:
					'Spukie beobachtet den Bürger Quellion bei Reden auf dem Marktplatz, studiert seine Verhaltensmuster und die Allomanten, die er durch hämalurgische Spitzen zum Dienst zwingt.',
				season: 'Frühwinter',
				year: '1026 FE',
			},
			'hoa-30': {
				title: 'Annäherung an den Bürger',
				description:
					'Spukie nähert sich dem inneren Kreis des Bürgers, ermittelt wegen der Spitzen, die Quellion zur Kontrolle von Allomanten nutzt, und sammelt Beweise für Korruption.',
				season: 'Winter',
				year: '1026 FE',
			},
			'hoa-38': {
				title: 'Planung der Revolution',
				description:
					'Von seinem Versteck aus koordiniert Spukie mit Sazed und lokalen Rebellen die Planung des Sturzes von Quellions Regime und die Sicherung des Vorratslagers.',
				season: 'Vorfrühling',
				year: '1027 FE',
			},
			'hoa-45': {
				title: 'Kelsiers Stimme',
				description:
					'Spukie beginnt, eine Stimme zu hören, die er für Kelsier hält und die ihn zu immer gefährlicheren Aktionen gegen den Bürger treibt.',
				season: 'Frühling',
				year: '1027 FE',
			},
			'hoa-50': {
				title: 'Das brennende Gebäude',
				description:
					'Spukie wird während eines Gebäudebrands mit einer Spitze versehen, erhält verstärkte allomantische Fähigkeiten, wird aber durch die Spitze auch anfällig für Zerstörungen Einfluss.',
				season: 'Frühling',
				year: '1027 FE',
			},
			'hoa-55': {
				title: 'Offenbarung',
				description:
					'Spukie erkennt, dass die Stimme, die er gehört hat, nicht Kelsier, sondern Zerstörung ist, die ihn durch die hämalurgische Spitze manipuliert. Unter Qualen reißt er die Spitze heraus.',
				season: 'Später Frühling',
				year: '1027 FE',
			},
			'hoa-58': {
				title: 'Held von Urteau',
				description:
					'Spukie führt die Revolution gegen Quellion an und enthüllt seine Korruption. Als Brände die Stadt verschlingen, flutet Sazed die Kanäle und rettet Urteau vor der Zerstörung.',
				season: 'Frühling',
				year: '1027 FE',
			},
			'hoa-64': {
				title: 'Genesung',
				description:
					'Schwer verbrannt, aber am Leben, erholt sich Spukie, während Urteau sich unter neuer Führung stabilisiert und Vorräte aus dem Lager verteilt werden.',
				season: 'Sommer',
				year: '1027 FE',
			},
			'hoa-69': {
				title: 'Zu den Gruben',
				description:
					'Spukie reist mit den Urteau-Truppen zu den Gruben von Hathsin und schließt sich den sammelnden Armeen für die letzte Schlacht an.',
				season: 'Herbst',
				year: '1027 FE',
			},
			'hoa-83': {
				title: 'Eine neue Welt',
				description:
					'Spukie tritt in Sazeds neuerschaffene Welt — ein Feld voller Blumen und grünem Gras unter einem blauen Himmel. Er trägt Sazeds letzte Worte für die Überlebenden.',
				season: 'Herbst',
				year: '1027 FE',
			},
		},
	},

	markerLabels: {
		capital: 'Dominanzsitz',
		city: 'Stadt',
		ashmount: 'Ascheberg',
		landmark: 'Wahrzeichen',
		stronghold: 'Festung',
		hideout: 'Zufluchtsort',
		mine: 'Gefängnismine',
		mystical: 'Heilige Stätte',
		town: 'Siedlung',
		village: 'Skaa-Dorf',
		river: 'Wasserweg',
		industrial: 'Versorgungsposten',
		region: 'Region',
		keep: 'Adelshaus',
		palace: 'Palast',
		plantation: 'Plantage',
		district: 'Bezirk',
		estate: 'Adelsgut',
	},

	cityMarkerLabels: {
		gate: 'Stadttor',
		keep: 'Adelshaus',
		palace: 'Palast',
		district: 'Bezirk',
		shop: 'Händler',
		safehouse: 'Unterschlupf der Bande',
		landmark: 'Sehenswürdigkeit',
		canal: 'Kanal',
		ministry: 'Kanton',
		plaza: 'Platz',
	},
};
