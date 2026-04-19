/**
 * German data translations.
 * Sources: Official Heyne / Piper editions.
 * Primary research insights: Character names Elend and Spook are localized to Elant Wager and Spukie.
 * The books use non-literal titles (e.g., Warriors of Fire for Well of Ascension).
 */
import type { DataTranslations } from '../types';
import { enData } from './en-data';

export const deData: DataTranslations = {
	...enData,

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
			description: 'Militärlager von Straff Venture nördlich von Luthadel während der Belagerung.',
			confidence: 'probable',
		},
		'koloss-camp': {
			name: 'Koloss-Lager',
			description: 'Position der Koloss-Armee nahel während der Belagerung.',
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
		...enData.movements,
		kelsier: {
			...enData.movements.kelsier,
			// ── Kinder des Nebels ──────────────────────────────────────────
			'tfe-0': {
				title: 'Die Rückkehr des Überlebenden',
				description:
					'Kelsier trifft auf Lord Trestings Plantage ein, wo der Adlige einen Obligator empfängt, den Lord Wager geschickt hat, in der Hoffnung auf eine Geschäftspartnerschaft. Am Abend, als ein Skaa-Mädchen zu Tresting gebracht werden soll, greift Kelsier ein — er tötet Tresting, alle seine Obligatoren, Aufseher und Soldaten und brennt schließlich das Herrenhaus nieder.',
				season: 'Frühling',
				year: '1021 FE',
			},
			'tfe-1': {
				title: 'Verborgener Beobachter',
				description:
					'Kelsier beobachtet Camons Bande aus den Schatten und bemerkt Vins unbewussten Einsatz der Allomantie — ein Straßenkind mit Nebelgeborenen-Kräften.',
				season: 'Frühling',
				year: '1021 FE',
			},
			'tfe-3': {
				title: 'Vin anwerben',
				description:
					'Vin versucht aus Camons Unterschlupf zu fliehen, doch Ulef verrät sie. Kelsier greift ein und rettet Vin vor Camons Schlägen. Er befördert Milev zum Bandenführer, nimmt die dreitausend Boxings als Bezahlung und mietet den Unterschlupf für sein Abendtreffen. Dann testet er Vin und bestätigt, dass sie Nebelgeborene ist.',
				season: 'Frühling',
				year: '1021 FE',
			},
			'tfe-5': {
				title: 'Der Atiumraub',
				description:
					'Kelsier, Dockson und Vin steigen aufs Dach. Kelsier rüstet sich und stürzt sich in die Nebel, um in Haus Wager einzubrechen und Atium zu stehlen. Er erbeutet den Tresor, muss aber auf dem Rückweg gegen Nebeljäger kämpfen. Er entkommt mit dem Atium und finanziert die Rebellion.',
				season: 'Frühling',
				year: '1021 FE',
			},
			'tfe-6': {
				title: 'Die Bande versammelt sich',
				description:
					'In Clubs\' Schreinerei planen Kelsier und die Bande die Zerstörung des Letzten Imperiums. Marsh trifft schließlich ein und alle gehen, damit die beiden Brüder unter sich sprechen können. Vin kehrt zurück, um an der Tür zu lauschen.',
				season: 'Frühling',
				year: '1021 FE',
			},
			'tfe-7': {
				title: 'Die Lehrerin unterrichten',
				description:
					'Kelsier nimmt Vin zu ihrer ersten Nacht des Trainings mit und gibt ihr einen Nebelmantel. Er lehrt sie die acht Grundmetalle an der Stadtmauer von Luthadel nahe dem Stahltor.',
				season: 'Später Frühling',
				year: '1021 FE',
			},
			'tfe-8': {
				title: 'Die Tarnung Renoux',
				description:
					'Kelsier bringt Vin über die Mauern von Luthadel in die nächtliche Wildnis, wo sie einem Nebelgeist begegnen. Auf der Hauptstraße wartet Sazed mit einer Kutsche und bringt sie nach Fellise. Unterwegs bietet Kelsier Vin die dreitausend Boxings und die Möglichkeit zu gehen. Auf Lord Renoux\' Anwesen etabliert er ihre Tarnidentität als Lady Valette.',
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-10': {
				title: 'Die Revolution planen',
				description:
					'Zurück in Luthadel hält Kelsier eine Lagebesprechung in Clubs\' Laden. Zuvor fragt er Sazed nach einer Religion mit Macht — Sazed erzählt ihm vom Jaismus — und ob eine Religion das Töten von Adligen als heilige Pflicht ansieht. Die Besprechung endet, als einer von Hammonds Soldaten meldet, dass das Ministerium Camons alten Unterschlupf gefunden hat.',
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-10.2': {
				title: 'Die Versammlung im Lagerhaus',
				description:
					'Kelsier predigt Revolution vor versammelten Skaa-Arbeitern bei einer geheimen Versammlung im Lagerhausviertel. Breeze und seine Beschwichtiger und Aufwiegler beeinflussen die Menge, damit sie empfänglicher wird, und nutzen seine Legende als der Überlebende von Hathsin, um die Rebellion zu entfachen.',
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-11': {
				title: 'Das Massaker in Camons Unterschlupf',
				description:
					'Kelsier und die Bande untersuchen den zerstörten Unterschlupf. Nach dem Verlassen sucht Kelsier Camon unter den Bettlern. Er findet Camons Leiche an einem Haken durch den Mund aufgehängt — Handgelenke und Knöchel gefesselt, Körper gefoltert. Diese Hinrichtungsmethode ist jenen vorbehalten, die Allomantie missbrauchen. Vin war Kelsier erfolgreich gefolgt und sie sprechen kurz nach der Entdeckung.',
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-13': {
				title: 'Planung in Fellise',
				description:
					'Kelsier trifft sich mit Vin und Sazed auf Lord Renoux\' Anwesen in Fellise, um die Erkenntnisse von Vins erstem Ball zu besprechen. Er erfährt, dass Vins Vater auf dem Ball war, und bricht dann in die Nebel auf, um nach Luthadel zurückzukehren.',
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-14': {
				title: 'Palastaufklärung',
				description:
					'Kelsier führt Vin nach Kredik Shaw, um das Gebäude auszukundschaften, das der Oberste Herrscher alle drei Tage besucht. Sie kämpfen sich hinein, aber drei Stahlinquisitoren greifen an. Kelsier wird im Chaos von Vin getrennt. Vin entkommt schwer verwundet, ein mysteriöses ledergebundenes Buch umklammernd.',
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-15': {
				title: 'Nach Kredik Shaw',
				description:
					'Die Bande streitet über Kelsiers Entscheidung, Vin nach Kredik Shaw mitzunehmen. Bevor sie nach ihr suchen können, trifft Sazed ein und trägt sie. Dockson ist wütend über das Risiko. Kelsier und Dockson bemerken das Lederbuch, das Vin mitgebracht hat — Sazed identifiziert es als in Khlennisch geschrieben, der Sprache der Heimat des Obersten Herrschers vor der Erhebung, und glaubt es übersetzen zu können.',
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-16': {
				title: 'Am Bett wachen',
				description:
					'Kelsier bleibt in Clubs\' Laden und wacht über Vin, während sie sich von ihren Verletzungen aus Kredik Shaw erholt, und ist da, als sie schließlich aufwacht.',
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-17': {
				title: 'Treffen auf dem Renoux-Anwesen',
				description:
					'Kelsier reist mit Breeze, Yeden und Dockson nach Fellise, um sich auf Lord Renoux\' Anwesen zu treffen und die nächste Phase der Rebellion zu besprechen.',
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-19': {
				title: 'Den Häuserkrieg schüren',
				description:
					'Kelsier sät Chaos, um den Häuserkrieg voranzutreiben, indem er die offensichtlich ermordete Leiche von Lord Charrs Entrone im Garten der Festung Tekiel hinterlegt. Dann geht er in die Rußviertel, um den Informanten Hoid zu treffen und Gerüchte über Haus Renoux zu erfahren. Von Hoid erfährt er auch, dass Lady Shan Elariel eine Beschwichtigerin ist.',
				season: 'Spätsommer',
				year: '1021 FE',
			},
			'tfe-19.2': {
				title: 'Treffen mit Lord Straff',
				description:
					'Kelsier geht zum Ahlstrom-Platz und gibt sich als kranker, lahmer Skaa-Bettler und Informant aus, um Lord Straff Wager zu treffen, den Anführer von Haus Wager. Er erfährt, dass Gerüchte über den Überlebenden von Hathsin kursieren und von einem Elften Metall die Rede ist.',
				season: 'Spätsommer',
				year: '1021 FE',
			},
			'tfe-19.3': {
				title: 'Rückkehr nach Renoux',
				description:
					'Kelsier kehrt über den Dornenpfad zum Anwesen Renoux zurück und tauscht Informationen mit Vin, Sazed und Renoux aus. Er hält Vin eine Predigt über Adlige und besteht darauf, dass sie sich von Elant fernhalten soll.',
				season: 'Spätsommer',
				year: '1021 FE',
			},
			'tfe-20': {
				title: 'Nachschub überwachen',
				description:
					'Kelsier ist auf dem Renoux-Anwesen in Fellise und überwacht die Waffen und Vorräte, die auf Karren für die Rebellion verladen werden.',
				season: 'Spätsommer',
				year: '1021 FE',
			},
			'tfe-21': {
				title: 'Die Rebellenarmee',
				description:
					'Kelsier liest eine Übersetzung des Tagebuchs des Obersten Herrschers, während er per Kanalboot nach Norden reist. Der Konvoi hält an einer Schleuse und Kelsier, die Rekruten und die Vorräte gehen zu den Höhlen, in denen die Rebellenarmee trainiert. Er überwindet die Erinnerungen an die Gruben von Hathsin und betritt den Arguois-Höhlenkomplex, um die Armee zu inspizieren, die Ham aufgebaut hat. Bei einem Abendessen manipuliert Kelsier Bilgs Emotionen und plant, ihn als Beispiel zu nutzen. Bilg und Demoux duellieren sich; Kelsier hilft Demoux — dem Kleineren — mit Allomantie zum Sieg. Nach dem Duell steigt das Vertrauen der Armee, da Yeden glaubt, Kelsier könne seine Kräfte auf andere übertragen.',
				season: 'Herbst',
				year: '1021 FE',
			},
			'tfe-23': {
				title: 'Vin beschatten',
				description:
					'Kelsier erscheint vor dem Turmfenster, an dem Vin Elants Gruppe in der Festung Hasting belauscht. Er tut ihr idealistisches Gerede vom Weltverändern als typisches Verhalten junger Adliger ab, das nie zu echtem Wandel führt. Beide gehen getrennte Wege.',
				season: 'Herbst',
				year: '1021 FE',
			},
			'tfe-24': {
				title: 'Lagebesprechung der Bande',
				description:
					'Kelsier trifft in Clubs\' Laden ein, wo ein Großteil der Bande versammelt ist. Er bespricht den Stand der Mission und teilt einen späten Trunk mit Spukie, Ham und Clubs. Er bittet Ham, zur Garnison zu gehen und Informationen zu sammeln.',
				season: 'Herbst',
				year: '1021 FE',
			},
			'tfe-25': {
				title: 'Verzweifelte Entscheidung',
				description:
					'In Clubs\' Laden erfährt Kelsier, dass die Skaa-Rebellion die Garnison von Holstep angegriffen hat und die Garnison von Luthadel nach Norden marschiert. Er beschließt, die Rebellenarmee zu warnen, und lässt Vin fünf Zinnperlen schlucken für einen langen Zinnlauf nach Norden.',
				season: 'Spätherbst',
				year: '1021 FE',
			},
			'tfe-25.2': {
				title: 'Katastrophe bei Holstep',
				description:
					'Kelsier und Vin laufen sechzehn Stunden lang und verbrennen ununterbrochen Zinn. Sie stoßen auf die Überreste der Rebellenarmee, umzingelt und abgeschlachtet von der Garnison Valtroux. Kelsier will kämpfen, aber Vin überzeugt ihn, dass sie nicht unbesiegbar sind. Sie eilen weiter zu den Arguois-Höhlen, wo 2.000 Soldaten dank Mennis\' Voraussicht überlebt haben.',
				season: 'Spätherbst',
				year: '1021 FE',
			},
			'tfe-26': {
				title: 'Die Scherben aufsammeln',
				description:
					'Zurück in Clubs\' Laden nach zwei Wochen Rückreise von den Höhlen spricht die Bande über die Zukunft des Auftrags — er scheint ein völliger Fehlschlag. Breeze gibt Kelsier die Schuld, Ruhm und Ehre gejagt zu haben. Kelsier gibt den Rückschlag zu, weigert sich aber, die Revolution aufzugeben.',
				season: 'Winter',
				year: '1021 FE',
			},
			'tfe-26.2': {
				title: 'Die Hinrichtungen',
				description:
					'Spukie kündigt Hinrichtungen am Brunnenplatz an. Die Bande geht dorthin, besticht jemanden für Dachzugang. Sie beobachten, wie zahlreiche Skaa getötet und ihr Blut in den Brunnen geleert wird. Kelsier überzeugt die Bande weiterzumachen und zeigt auf die Gräueltat: „Das ist unser Feind. Es gibt hier kein Erbarmen, kein Umkehren."',
				season: 'Winter',
				year: '1021 FE',
			},
			'tfe-27': {
				title: 'Neue Strategie',
				description:
					'Die Bande kehrt in Clubs\' Laden zurück, um die nächsten Schritte zu planen — einen Häuserkrieg unter dem Adel zu beginnen. Sazed bringt eine Nachricht von Marsh mit Anweisungen, wo sie sich in den Windungen treffen können.',
				season: 'Winter',
				year: '1021 FE',
			},
			'tfe-27.2': {
				title: 'Das Goldmetall',
				description:
					'Kelsier und Vin gehen Stunden vor dem Treffen mit Marsh zu einem verlassenen Gebäude in den Windungen. Während sie warten, spricht Kelsier über Gold — das neunte allomantische Metall, das dem Benutzer eine alternative Version seiner Vergangenheit zeigt. Er erklärt auch Feruchemie und gibt Vin etwas Gold zum ersten Verbrennen. Als Marsh eintrifft, mit den Tätowierungen eines niedrigrangigen Obligators des Kantons der Inquisition, beschreibt er die Beschwichtigungsstationen in Luthadel und verrät, dass Inquisitoren an Altersschwäche sterben können.',
				season: 'Winter',
				year: '1021 FE',
			},
			'tfe-29': {
				title: 'Kriegsrat bei Renoux',
				description:
					'Kelsier trifft den Großteil der Bande auf Renoux\' Anwesen in Fellise, um eine sehr detaillierte Karte von Luthadels Verteidigungsanlagen durchzugehen, die Marsh geliefert hat. Dabei entdecken sie, dass Therons Bande kürzlich vom Ministerium angegriffen wurde. Spät in der Nacht, da er nicht schlafen kann, bittet Kelsier Sazed, ihm von einigen Religionen zu erzählen.',
				season: 'Winter',
				year: '1021 FE',
			},
			'tfe-31': {
				title: 'Die Lehrling schelten',
				description:
					'Kelsier und Vin kehren nach Clubs\' Laden zurück, nachdem Vin Lady Shan Elariel — eine vollwertige Nebelgeborene — in der Festung Wager getötet hat. Kelsier schilt Vin wegen des rücksichtslosen Kampfes, aber sie schreit zurück, dass Adlige und Skaa nicht so verschieden sind und Elant Wager ein guter Mensch ist, der es verdient, beschützt zu werden.',
				season: 'Winter',
				year: '1021 FE',
			},
			'tfe-32': {
				title: 'Marsh finden',
				description:
					'Kelsier und Vin finden Marshs Leiche — völlig ausgeblutet, eine leblose Hülle. Zurück in Clubs\' Laden entdecken sie einen Brief von Marsh, der erklärt, dass die Inquisitoren ihn wahrscheinlich finden würden.',
				season: 'Winter',
				year: '1022 FE',
			},
			'tfe-32.2': {
				title: 'Die Gruben zerstören',
				description:
					'Kelsier kehrt zu den Gruben von Hathsin zurück — dem Ort seines größten Leids. Er tötet alle Wachen und reicht einem Skaa namens Wallin die Hand, der aus der Höhle kommt. Dann zerstört er jeden Atiumkristall und schneidet die wertvollste Ressource des Obersten Herrschers in einer einzigen Nacht ab.',
				season: 'Winter',
				year: '1022 FE',
			},
			'tfe-33': {
				title: 'Der Ausweichunterschlupf',
				description:
					'Kelsier kehrt in einen feuchten Reservekeller nahe Clubs\' Laden zurück — nur drei Räume. Er verkündet, dass er alles Atium in den Gruben von Hathsin zerstört hat.',
				season: 'Früher Frühling',
				year: '1022 FE',
			},
			'tfe-33.2': {
				title: 'Der Kampf mit dem Inquisitor',
				description:
					'Alle folgen Kelsier zum Brunnenplatz. Sie entdecken Spukie und Lord Renoux in einem der Hinrichtungskarren. Kelsier kämpft gegen einen Inquisitor auf dem Platz — eine Falle, die er fast sicher kommen sah.',
				season: 'Früher Frühling',
				year: '1022 FE',
			},
			'tfe-34': {
				title: 'Das letzte Gefecht des Überlebenden',
				description:
					'Kelsier kämpft gegen den Inquisitor in einem Kampf auf Leben und Tod am Brunnenplatz, beide verbrennen Atium. Er ist ein Meister von Stoßen und Ziehen und bewegt Metall durch die Luft wie ein Experte. Er tötet den Inquisitor und die Skaa beginnen zu rufen: „Der Überlebende von Hathsin." Der Oberste Herrscher kommt in einer schwarzen Kutsche. Einer von Hams Schlägern rammt ihm einen Speer hinein — er geht weiter. Zwei Speere — geht immer noch. Der Oberste Herrscher schlägt Kelsier, zieht einen Speer aus seinem eigenen Körper und rammt ihn Kelsier hindurch. Er stirbt mit einem Lächeln und wird zum Märtyrer, der die Revolution entfacht.',
				season: 'Früher Frühling',
				year: '1022 FE',
			},
			'tfe-35': {
				title: 'Jenseits des Todes',
				description:
					'Im Ausweichunterschlupf nahe Clubs\' Laden sieht die Bande den Kandra, zuvor Lord Renoux, in Kelsiers Körper und Knochen — der letzte Plan. Kelsier hatte jedem Bandenmitglied Briefe mit Anweisungen zur Einnahme der Stadt hinterlassen. Sein Tod war der Funke, der die Revolution in ganz Luthadel entflammte.',
				season: 'Früher Frühling',
				year: '1022 FE',
			},
		},
		vin: {
			...enData.movements.vin,
			// ── Kinder des Nebels ──────────────────────────────────────────
			'tfe-1': {
				title: 'Straßenkind',
				description:
					'Vin wird zu ihrem Bandenführer Camon gerufen, der rau mit ihr umgeht. Sie nutzt unbewusst ihr Glück — eine Form allomantischer Beschwichtigung — um ihn zu beruhigen. Camon gibt sich als Lord Jedue aus, ein verzweifelter Adliger auf der Suche nach neuen Verträgen, und plant den Betrug am Stahlministerium. Vin nutzt ihr Glück beim Obligator Prälat Laird, damit er Camons Bitten nicht abweist.',
				season: 'Frühling',
				year: '1021 FE',
			},
			'tfe-2': {
				title: 'Der Ministeriumsbetrug',
				description:
					'Camon, als Lord Jedue, nimmt Vin zum Kanton der Finanzen, um das Ministerium zu betrügen. Vin nutzt ihr Glück beim Hohen Prälat, der Camon dreitausend Boxings gibt. Kelsier und Dockson im Warteraum bemerken Vins allomantische Pulse. Danach sehen sie einen Stahlinquisitor, der Camons Gefolge verfolgt.',
				season: 'Frühling',
				year: '1021 FE',
			},
			'tfe-4': {
				title: 'Angeworben',
				description:
					'Kelsier stellt der Bande in Clubs\' Schreinerei seinen Plan zum Sturz des Letzten Imperiums vor. Die Bande stimmt zu — außer Clubs, der geht, aber schließlich zurückkehrt. Kelsier enthüllt, dass Vin Nebelgeborene ist, und erzählt vom Elften Metall.',
				season: 'Frühling',
				year: '1021 FE',
			},
			'tfe-7': {
				title: 'Nebelgeborenen-Training',
				description:
					'Kelsier nimmt Vin zu ihrer ersten Trainingsnacht mit und gibt ihr einen Nebelmantel. Er lehrt sie die acht Grundmetalle — Zinn, Zinn, Eisen, Stahl, Zink, Messing, Kupfer und Bronze — und beendet die Nacht an der Stadtmauer von Luthadel.',
				season: 'Später Frühling',
				year: '1021 FE',
			},
			'tfe-8': {
				title: 'Das Renoux-Anwesen',
				description:
					'Vin und Kelsier klettern über die Mauern von Luthadel in die Nacht, wo Vin zum ersten Mal einem Nebelgeist begegnet. Auf der Hauptstraße wartet Sazed mit einer Kutsche und bringt sie nach Fellise. Unterwegs bietet Kelsier Vin die dreitausend Boxings und die Möglichkeit zu gehen. Sie nimmt das Geld, bleibt aber, weil sie sehen will, wie es ausgeht. Auf Lord Renoux\' Anwesen schlägt Renoux vor, dass Vin die Rolle von Lady Valette spielen soll.',
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-9': {
				title: 'Training mit Sazed',
				description:
					'Vin und Kelsier kämpfen in einem Übungskampf auf dem Renoux-Anwesen. Danach lässt sich Vin die Haare schneiden und wird von Sazed über ihre adlige Tarnung geprüft, der ihr auch vom Trelagismus erzählt — der fünften Religion, die er ihr vorschlägt. Kelsier und Sazed sprechen anschließend privat über Vins Fortschritte; Kelsier erklärt, dass sie am Ende der Woche einen Ball in der Festung Wager besuchen wird.',
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-10': {
				title: 'Zurück bei der Bande',
				description:
					'Vin kehrt von Fellise nach Luthadel zurück, um von den Nebellingen der Bande über Metalle zu lernen, angefangen mit Breeze, der ihr das Beschwichtigen beibringt. Hammond kommt und debattiert die Moral des Imperiumssturzes, während sie auf Kelsiers Rede warten.',
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-10.2': {
				title: 'Die Versammlung im Lagerhaus',
				description:
					'Vin besucht eine geheime Versammlung im Lagerhausviertel, wo Kelsier Skaa-Arbeitern die Revolution predigt, während Breeze und seine Beschwichtiger und Aufwiegler die Menge beeinflussen. Danach hält Kelsier eine Lagebesprechung in Clubs\' Laden. Vin und Lestibournes sprechen über Marsh. Die Besprechung endet, als ein Soldat Hammonds meldet, dass das Stahlministerium Camons alten Unterschlupf entdeckt hat.',
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-11': {
				title: 'Das Massaker in Camons Unterschlupf',
				description:
					'Vin und die Bande untersuchen den zerstörten Unterschlupf und finden überall Leichen. Unter ihnen bemerkt Vin Ulef — jemandem hat ihm den Brustkorb mit bloßen Händen aufgerissen. Sazed rezitiert ein Gebet der Cazzi-Religion. Milevs Leiche wird gefesselt auf einem Stuhl gefunden, offensichtlich gefoltert. Nach dem Verlassen findet Kelsier Camons Leiche an einem Haken durch den Mund aufgehängt.',
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-12': {
				title: 'Erster Ball in der Festung Wager',
				description:
					'Vin fährt zu ihrem ersten Ball in der Festung Wager, Sazed lenkt die Kutsche. Kelsier schaut unterwegs vorbei, gibt Vin Ratschläge und springt zurück in die Nebel. Vin kommt an und wird als Lady Valette Renoux vorgestellt. Beim Abendessen sieht sie ihren Vater auf der anderen Seite des Raums. Sie lehnt Tanzeinladungen ab und zieht sich auf einen Balkon im oberen Stockwerk zurück, wo sie ihr erstes Gespräch mit Elant Wager führt, was Sazed schockiert.',
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-13': {
				title: 'Rückkehr nach Fellise',
				description:
					'Sazed befragt Vin über ihre Begegnung mit Elant auf dem Renoux-Anwesen. Vins wahre Persönlichkeit beginnt hervorzutreten — weder das scheue Bandenmitglied noch Lady Valette. Kelsier erfährt, dass Vins Vater auf dem Ball war, und verschwindet wieder in den Nebeln.',
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-14': {
				title: 'In Kredik Shaw',
				description:
					'Kelsier führt Vin nach Kredik Shaw, und sie kämpfen sich zum Gebäude vor, das der Oberste Herrscher alle drei Tage besucht. Vin tötet zum ersten Mal. Drei Stahlinquisitoren greifen an. Um sich gegen geschliffene Metalldreiecke zu verteidigen, die auf sie Gestoßen werden, greift Vin ein Lederbuch. Mit brennendem Atium gelingt eine vorübergehende Flucht, bevor ein Inquisitor ihr eine Obsidianaxt in die Seite rammt. Vin entkommt, aber als sie das Bewusstsein verliert, lenkt etwas den verfolgenden Inquisitor ab und nimmt sie in einen schützenden Arm — es war nicht Kelsier.',
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-15': {
				title: 'Verwundet',
				description:
					'Die Bande streitet über Kelsiers Entscheidung, Vin nach Kredik Shaw mitzunehmen. Bevor sie suchen können, trifft Sazed mit Vin auf dem Arm ein. Sie bekommt Zinn zur Heilung. Sazed operiert sie und Ham trägt sie zur Genesung in ein Zimmer. Kelsier und Dockson bemerken das Lederbuch; Sazed identifiziert es als in Khlennisch geschrieben.',
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-16': {
				title: 'Genesung in Clubs\' Laden',
				description:
					'Vin erwacht nach zwei Wochen Ruhe in Clubs\' Laden. Spukie hat an ihrem Bett gewacht und erzählt ihr, wie Kelsier ihm seinen Spitznamen gab. Im Gespräch mit Dockson erkennt Vin, dass an Sazed etwas sehr Ungewöhnliches ist.',
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-16.2': {
				title: 'Rückkehr nach Fellise',
				description:
					'Nach einigen weiteren Tagen Ruhe kehrt Vin zum Renoux-Anwesen in Fellise zurück. Sie spricht mit Sazed, der erklärt, was Hüter sind, und enthüllt, dass alle terrisischen Verwalter Eunuchen sind.',
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-17': {
				title: 'Der Garten des Anwesens Renoux',
				description:
					'Vin beklagt vier Wochen langweiliger Genesung auf dem Renoux-Anwesen. Bandenmitglieder kommen, um Neuigkeiten zu besprechen. Vin überzeugt Kelsier, sie zum nächsten Ball gehen zu lassen. Später sprechen Vin und Kelsier über Mare, seine Beweggründe, und er erklärt das Schnappen — das traumatische Ereignis, das allomantische Kräfte erweckt.',
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-18': {
				title: 'Ball in der Festung Elariel',
				description:
					'Vin besucht einen Ball in der Festung Elariel mit Sazed. Elant Wager setzt sich an ihren Tisch und liest wie üblich. Er lobt ihr Kleid und lässt ihr die Kinnlade herunterklappen. Sie tanzt mit verschiedenen Adligen und fragt nach Elant; sie erfährt von Lady Shan Elariels Gerede. Nach viel Tanzen muss Vin sich mit Shan treffen. Dabei bemerkt sie, dass Shan beschwichtigen kann. Vins Terrisaner durchstöbert Elants Bücher an ihrem Tisch; Vin kehrt zurück und blättert ein fast staatsgefährdendes Büchlein durch. Elant kehrt zurück, sammelt seine Bücher und geht mit zwei Freunden. Sazed identifiziert sie als Jastes Lekal und einen Hasting. Beim Verlassen des Balls sieht Vin, wie ein Stadtwächter in den Nebeln einem jungen Skaa-Küchengehilfen die Kehle durchschneidet.',
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-19': {
				title: 'Zurück in Fellise',
				description:
					'Kelsier kehrt über den Dornenpfad zum Anwesen Renoux zurück und trifft sich mit Vin, Sazed und Renoux. Er predigt Vin über Adlige, besteht darauf, dass sie sich nicht um Skaa kümmern und sie sich von Elant Wager fernhalten soll.',
				season: 'Spätsommer',
				year: '1021 FE',
			},
			'tfe-20': {
				title: 'Sucherinnen-Unterricht',
				description:
					'Vin kehrt von Luthadel zurück und sieht Waffenkisten vor dem Renoux-Anwesen, bereit für die Rebellion. Kurz darauf trifft Marsh ein und lehrt sie das Suchen — Bronze nutzen, um andere Allomanten zu erspüren — sowie weitere Allomantie-Details.',
				season: 'Spätsommer',
				year: '1021 FE',
			},
			'tfe-22': {
				title: 'Das Tagebuch',
				description:
					'Vin liest ihre Kopie des Tagebuchs des Obersten Herrschers auf dem Renoux-Anwesen, als Spukie eintrifft. Er gibt ihr ein Taschentuch — Sazed erklärt später, dass ein junger Mann damit seine ernste Zuneigung signalisiert. Während sie auf Dockson wartet, spricht Vin mit Sazed über den Terrisaner im Tagebuch; Sazed enthüllt die Geheimnisse der Feruchemie und die Gründung der Hüter. Vin spricht dann mit Dockson, der erzählt, wie Lord Devinshae die Frau, die er liebte, nahm und am nächsten Morgen tötete.',
				season: 'Herbst',
				year: '1021 FE',
			},
			'tfe-23': {
				title: 'Ball in der Festung Hasting',
				description:
					'Vin besucht einen Ball in der Festung Hasting und hört erfreut, dass Kelsiers Bemühungen, Spannungen zu schüren, Wirkung zeigen. Lady Shan bittet Vin, Elants Bücher beim nächsten Mal zu durchsuchen. Vin findet Elant und fragt ihn, ob er mit einer Skaa geschlafen hat. Er beichtet, dass sein Vater ihn mit dreizehn dazu zwang; die Frau wurde danach getötet, aber er tat es nie wieder. Elant gibt Vin ein Taschentuch. Nach dem Abgang mit seinen Freunden folgt Vin ihnen mit Allomantie zu einem Turm, wo sie die Fehler des Obersten Herrschers diskutieren. Kelsier erscheint plötzlich und tut die Ideen der Gruppe als typischen jugendlichen Idealismus ab.',
				season: 'Herbst',
				year: '1021 FE',
			},
			'tfe-24': {
				title: 'Bandentreffen',
				description:
					'Vin und Kelsier kommen in Clubs\' Laden an, wo der Großteil der Bande versammelt ist. Kelsier bespricht den Stand der Mission und Vin erkennt, wie sehr sie ihr neues Leben liebt — nicht länger im Schatten versteckt. Kelsier, Spukie, Ham und Clubs teilen einen späten Trunk.',
				season: 'Herbst',
				year: '1021 FE',
			},
			'tfe-24.2': {
				title: 'Garnisonbesuch',
				description:
					'Vin zieht Straßenkleidung an und geht mit Ham zur Garnison von Luthadel, um über Zinn zu lernen. Ham erklärt, dass viele Soldaten gewöhnliche Skaa sind. In der Garnison erfahren sie von einem Wächter namens Sertes, dass die Garnison mobilisiert wird — eine Skaa-Rebellion hat die Garnison von Holstep im Norden angegriffen.',
				season: 'Herbst',
				year: '1021 FE',
			},
			'tfe-25': {
				title: 'Dringende Nachrichten',
				description:
					'In Clubs\' Laden bringt Ham die Nachricht, dass die Garnison von Luthadel nach Norden zu Holstep marschiert. Kelsier lässt Vin fünf Zinnperlen schlucken, damit sie nach Norden laufen können, um die Rebellenarmee zu warnen.',
				season: 'Spätherbst',
				year: '1021 FE',
			},
			'tfe-25.2': {
				title: 'Der Zinnlauf',
				description:
					'Vin und Kelsier laufen sechzehn Stunden lang in einem verzweifelten Zinnlauf. Sie stoßen auf die Überreste der Rebellenarmee, umzingelt und abgeschlachtet von der Garnison Valtroux. Kelsier will kämpfen, aber Vin überzeugt ihn, dass sie nicht unbesiegbar sind. Sie eilen zu den Arguois-Höhlen, wo 2.000 Soldaten dank Mennis überlebt haben.',
				season: 'Spätherbst',
				year: '1021 FE',
			},
			'tfe-26': {
				title: 'Erholung',
				description:
					'Vin liegt erschöpft im Bett in Clubs\' Laden. Sie brauchten zwei Wochen, um nach Luthadel zurückzukehren. Kelsier platzt herein, Breeze gibt ihm die Schuld an Ruhmsucht. Kelsier gibt den Verlust als Rückschlag zu, weigert sich aber aufzugeben.',
				season: 'Spätherbst',
				year: '1021 FE',
			},
			'tfe-26.2': {
				title: 'Die Hinrichtungen',
				description:
					'Spukie kündigt Hinrichtungen am Brunnenplatz an. Die Bande geht dorthin und besticht jemanden für Dachzugang. Vin identifiziert ihren Vater gegenüber Kelsier — einen Obligator namens Tevidian, Lord Prälat und ranghöchster Obligator, sogar über den Inquisitoren. Sie sehen zu, wie Frauen und Kinder aus einem Gefangenenwagen gezerrt und hingerichtet werden, der Brunnen rot vor Blut. Kelsier sagt: „Das ist unser Feind. Es gibt hier kein Erbarmen, kein Umkehren."',
				season: 'Spätherbst',
				year: '1021 FE',
			},
			'tfe-27': {
				title: 'Die nächsten Schritte planen',
				description:
					'Die Bande kehrt in Clubs\' Laden zurück. Kelsier, Vin und die anderen planen neu, wie sie vorankommen und einen Häuserkrieg unter dem Adel beginnen. Sazed kommt mit einem Brief von Marsh und Anweisungen zum Treffpunkt.',
				season: 'Winter',
				year: '1021 FE',
			},
			'tfe-27.2': {
				title: 'Treffen mit Marsh',
				description:
					'Kelsier und Vin gehen zu einem verlassenen Gebäude in den Windungen, um Marsh zu treffen. Während sie warten, spricht Kelsier über Gold — das neunte allomantische Metall. Marsh trifft ein mit den Tätowierungen eines niedrigrangigen Obligators des Kantons der Inquisition. Er enthüllt, dass das Ministerium Beschwichtiger in Skaa-Regionen unter ständiger Beschwichtigung platziert, verborgen durch Raucher. Marsh bestätigt auch, dass Inquisitoren an Altersschwäche sterben können.',
				season: 'Winter',
				year: '1021 FE',
			},
			'tfe-28': {
				title: 'Ball in der Festung Lekal',
				description:
					'Vin besucht einen Ball in der Festung Lekal und beginnt Gerüchte zu streuen, um die Häuserkriege zu entfachen. Sie tratscht mit Lady Kliss. Elant überrascht sie — er sagt, er will sie küssen, aber Vin besteht darauf, dass er sie nicht wirklich kennt. Sie machen einen Spaziergang und Elant enthüllt, dass das Vermögen von Haus Wager vollständig aus dem Atium-Abbau in den Gruben von Hathsin stammt. Er erwähnt auch, dass die Tekiel von Haus Hasting getötet wurden, und versucht Valette zu überzeugen, Luthadel zu verlassen.',
				season: 'Winter',
				year: '1021 FE',
			},
			'tfe-29': {
				title: 'Die letzte Übersetzung',
				description:
					'Vin liest die letzte Tagebuch-Übersetzung von Sazed im Anwesen Renoux und ist enttäuscht, dass es keine weiteren gibt. Sazed erklärt Feruchemie ausführlicher und Vin versucht, einen seiner Zinngeister zu verbrennen. Später stößt Kelsier dazu, um eine Karte von Marsh durchzugehen. Sie entdecken, dass Therons Bande angegriffen wurde, und Vin vermutet, dass die Inquisitoren ihr noch nachspüren.',
				season: 'Winter',
				year: '1021 FE',
			},
			'tfe-30': {
				title: 'Der Wager-Ball',
				description:
					'Vin besucht den letzten Hausball in der Festung Wager mit Sazed. Lady Kliss entpuppt sich als Informantin und versucht Haus Renoux zu erpressen. Im Tausch für eine Saphirkette verrät Kliss, dass Elariel-Attentäter Elant an diesem Abend töten wollen. Vin erzwingt allomantisch den vollständigen Plan. Sie zerschlägt ein Glasfenster, um aus der Festung zu fliehen. Draußen kämpft sie gegen zwei Schläger, zwei Münzwerfer und zwei Nebelgeborene — eine davon ist Shan Elariel. Vin überlistet Shan, indem sie ihr Atium früher erlöschen lässt, und tötet sie.',
				season: 'Winter',
				year: '1021 FE',
			},
			'tfe-31': {
				title: 'Nach dem Duell',
				description:
					'Vin stürmt verbunden und zerschlagen in Clubs\' Küche. Kelsier schilt sie, weil sie Elant gerettet hat, aber Vin schreit zurück, dass Skaa und Adlige nicht verschieden sind — Elant ist ein guter Mensch. Auf dem Dach erzählt Vin Kelsier von Haus Wagers Verwaltung der Gruben und ihrer Theorie, dass Inquisitoren durch Kupferwolken sehen können. Kelsier testet die Theorie und bestätigt sie — eine wichtige Entdeckung.',
				season: 'Winter',
				year: '1021 FE',
			},
			'tfe-32': {
				title: 'Aufklärung vom Dach',
				description:
					'Vin und Spukie halten Aussicht vom Dach über Clubs\' Laden. Spukie bringt Vin Tricks mit Zinn bei: Es geht nicht nur ums Schärfen der Sinne, sondern ums Filtern von Ablenkungen. Später finden Kelsier und Vin Marshs Leiche — ausgeblutet, eine leblose Hülle. Sie entdecken einen Brief, der erklärt, die Inquisitoren würden ihn wohl finden.',
				season: 'Winter',
				year: '1021 FE',
			},
			'tfe-33': {
				title: 'Der Ausweichunterschlupf',
				description:
					'Die Bande zieht in einen feuchten Reservekeller nahe Clubs\' Laden um — nur drei Räume. Kelsier verkündet, er habe alles Atium in den Gruben zerstört. Spukie hält als Zinnling Wache.',
				season: 'Früher Frühling',
				year: '1022 FE',
			},
			'tfe-33.2': {
				title: 'Der Kampf mit dem Inquisitor',
				description:
					'Alle folgen Kelsier zum Brunnenplatz. Sie sehen Spukie und Lord Renoux in einem der Hinrichtungskarren. Kelsier kämpft gegen einen Inquisitor auf dem Platz. Elant sieht die Renoux-Diener eingesperrt und ruft nach Valette, findet sie aber nicht.',
				season: 'Früher Frühling',
				year: '1022 FE',
			},
			'tfe-34': {
				title: 'Der Tod des Überlebenden',
				description:
					'Kelsier kämpft gegen den Inquisitor auf Leben und Tod am Brunnenplatz, beide verbrennen Atium. Vin beobachtet von oben — Kelsier ist ein wahrer Meister von Stoßen und Ziehen. Er tötet den Inquisitor und die Skaa rufen „Der Überlebende von Hathsin." Der Oberste Herrscher kommt in einer schwarzen Kutsche. Kelsier wird erschlagen. Vin springt herunter und hält ihn, während er stirbt.',
				season: 'Früher Frühling',
				year: '1022 FE',
			},
			'tfe-35': {
				title: 'Das Vermächtnis des Überlebenden',
				description:
					'Vin kehrt zum Ausweichunterschlupf zurück. Sie ist wütend, dass Kelsier nicht ehrlich war — er hatte geplant zu sterben und sie zurückzulassen. Sazed bietet tröstende Worte. Draußen versammeln sich Skaa und sprechen vom Herrn der Nebel. In einem nahen Lagerhaus sieht die Bande den Kandra in Kelsiers Gestalt. Kelsier hinterließ Briefe mit Anweisungen zur Einnahme der Stadt. Vins Brief sagt, er habe das Elfte Metall nie gelöst. Sie beschließt herauszufinden, was der Oberste Herrscher verbirgt.',
				season: 'Früher Frühling',
				year: '1022 FE',
			},
			'tfe-36': {
				title: 'In Kredik Shaw',
				description:
					'Vin geht leise auf Kredik Shaw zu und ermutigt die Wachen draußen, sich der Rebellion anzuschließen. Drinnen tötet sie zwei Inquisitoren und entdeckt, dass Zinnstaub ihre Sicht stört. In der nächsten Kammer sitzt ein alter Mann. Ein Inquisitor packt Vin am Hals — der alte Mann spricht, und die Inquisitoren nennen ihn den Obersten Herrscher. Aber Vin ist verwirrt: Der Oberste Herrscher am Brunnenplatz war ein junger Mann. Sie verbrennt das Elfte Metall und sieht zwei geisterhafte Gestalten neben dem alten Mann.',
				season: 'Früher Frühling',
				year: '1022 FE',
			},
			'tfe-37': {
				title: 'Rettung und Offenbarung',
				description:
					'Die Inquisitoren zwingen Vin, ein Metall zu verbrennen, das alle anderen auslöscht. Sie wird vor den Obersten Herrscher auf seinem Thron gebracht — die junge Version, der Mann, der Kelsier tötete. Tevidian, Vins Vater und höchstrangiger Obligator, wird von den Inquisitoren getötet. Vin erfährt, dass Reen sie nie verraten hat — er ertrug die Folter und sagte den Inquisitoren, sie sei längst verhungert. Sazed wird in ihre Zelle gebracht und bricht mit gespeicherter feruchemischer Kraft die Tür auf. Elant und sechs Soldaten stürmen herein. Vin findet ihren Nebelmantel und ein Metallfläschchen, schluckt es und tötet den restlichen Wächter. Elant weiß jetzt, dass Vin Nebelgeborene ist. Sie greift seinen Kopf und küsst ihn, dann geht sie, um den Obersten Herrscher zu töten.',
				season: 'Früher Frühling',
				year: '1022 FE',
			},
			'tfe-38': {
				title: 'Bezwingerin des Obersten Herrschers',
				description:
					'Vin springt durch die Türme von Kredik Shaw zum Gipfel. Inquisitor Kar packt sie am Hals, aber ein zweiter Inquisitor nähert sich und zieht einen Metallnagel aus Kars Hals, tötet ihn sofort. Der zweite Inquisitor ist Marsh — lebendig, mit elf Nägeln im Körper. Er hat alle anderen Inquisitoren getötet. Der wahre Name des Obersten Herrschers ist Rashek — er ermordete den Helden der Zeitalter und nahm seinen Platz ein. Vin zieht die Metallarmbänder des Obersten Herrschers herunter. Ohne feruchemische Jugend wird er ein schwacher alter Mann. Sazed erscheint mit einer Metallflasche. Vin rammt einen Speer direkt durch das Herz des Obersten Herrschers. Tausend Jahre Unterdrückung enden.',
				season: 'Früher Frühling',
				year: '1022 FE',
			},
			'tfe-39': {
				title: 'Eine neue Ära',
				description:
					'Sazed, Marsh und Vin stehen auf einem Gebäude am Rand der Skaa-Siedlung. Sazed erklärt, dass der Oberste Herrscher sowohl Feruchemist als auch Allomant war — die Armbänder speicherten seine Jugend. Marsh beschreibt seine Überlebens- und Verwandlungsgeschichte: elf Metallnägel, zwei durch die Augen, acht in der Brust, einer im Rücken. Er erzählt auch von den Kandra, aus Nebelgeistern evolvierten Kreaturen, die nun Vin als ihre Herrin sehen.',
				season: 'Frühling',
				year: '1022 FE',
			},
			'tfe-39.2': {
				title: 'Vin und Elant',
				description:
					'Vin beobachtet Elant heimlich aus den Nebeln vor der Festung Wager. Sein Treffen mit Skaa- und Adelsführern verlief gut — nach einer gewaltigen Rede, die selbst Sazed ohne seine Metalle nicht vollständig memorieren konnte, akzeptierten alle ihn als König. Elant schreibt das neue Gesetzbuch des Königreichs. Vin erinnert sich, dass Reen sie nie an die Inquisitoren verraten hat, und rennt zu Elant — sie halten einander.',
				season: 'Frühling',
				year: '1022 FE',
			},
		},
		sazed: {
			...enData.movements.sazed,
			// ── Kinder des Nebels ──────────────────────────────────────────
			'tfe-9': {
				title: 'Der terrisische Verwalter',
				description:
					'Sazed trifft auf Lord Renoux\' Anwesen in Fellise ein, um Vin als Lehrer und Verwalter zu dienen und ihr Etikette, Tanz und Benehmen beizubringen. Er erzählt ihr vom Trelagismus — der fünften Religion, die er ihr vorschlägt — und gibt zu, 562 weitere zu kennen.',
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-10.2': {
				title: 'Die Versammlung im Lagerhaus',
				description:
					'Sazed besucht die geheime Lagerhaus-Versammlung zusammen mit Kelsier und Vin und beobachtet, wie der Überlebende den Skaa-Arbeitern die Revolution predigt.',
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-12': {
				title: 'Wächter beim Ball',
				description:
					'Sazed begleitet Vin als ihr Verwalter zu ihrem ersten Ball in der Festung Wager und wacht über sie, während sie die adlige Gesellschaft infiltriert.',
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-13': {
				title: 'Nachbesprechung in Fellise',
				description:
					'Sazed kehrt mit Vin und Kelsier zum Renoux-Anwesen in Fellise zurück, um die Ergebnisse von Vins erstem Ball zu besprechen und nächste Schritte zu planen.',
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-15': {
				title: 'Vin retten',
				description:
					'Sazed bringt Vin in Clubs\' Laden, um sie zu retten und nach ihrer Verletzung in Kredik Shaw zu operieren. Er untersucht auch ein in Khlennisch geschriebenes Buch, das bei der Aufklärungsmission erbeutet wurde.',
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-16': {
				title: 'Rückkehr nach Fellise',
				description:
					'Nachdem Vin in Clubs\' Laden stabilisiert wurde, kehrt Sazed zum Renoux-Anwesen in Fellise zurück.',
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-17': {
				title: 'Das khlennische Buch übersetzen',
				description:
					'In der Bibliothek des Renoux-Anwesens in Fellise arbeitet Sazed an der Übersetzung des khlennischen Buches, das Vin bei der Aufklärungsmission in Kredik Shaw erbeutet hat.',
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-18': {
				title: 'Wächter in der Festung Elariel',
				description:
					'Sazed begleitet Vin als terrisischer Verwalter zum Ball in der Festung Elariel und wacht über sie, während sie die adlige Gesellschaft navigiert.',
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-19': {
				title: 'Informationsaustausch',
				description:
					'Sazed ist im Anwesen Renoux, als Kelsier über den Dornenpfad zurückkehrt. Sie tauschen Informationen über die Adelshäuser und den Fortschritt der Rebellion aus, während Kelsier Vin predigt, sich von Elant fernzuhalten.',
				season: 'Spätsommer',
				year: '1021 FE',
			},
			'tfe-22': {
				title: 'Geheimnisse der Feruchemie',
				description:
					'Auf dem Renoux-Anwesen spricht Sazed mit Vin über den Terrisaner im Tagebuch des Obersten Herrschers. Er enthüllt die Geheimnisse der Feruchemie und wie die Hüter gegründet wurden, um alles zu bewahren, nachdem die terrisische Religion verloren ging. Er lernt auch Neues über sein Volk aus dem Tagebuch — dass das Land einst grün und fruchtbar war.',
				season: 'Herbst',
				year: '1021 FE',
			},
			'tfe-23': {
				title: 'Wächter in der Festung Hasting',
				description:
					'Sazed begleitet Vin als terrisischer Verwalter zum Ball in der Festung Hasting. Er wartet, während sie Gerüchte verbreitet und mit Adligen spricht.',
				season: 'Herbst',
				year: '1021 FE',
			},
			'tfe-27': {
				title: 'Marshs Nachricht',
				description:
					'Sazed kehrt mit einem Brief von Marsh zu Clubs\' Laden zurück, mit Nachrichten und Anweisungen zum Treffpunkt. Er bringt auch Übersetzungen des Tagebuchs des Obersten Herrschers mit.',
				season: 'Winter',
				year: '1021 FE',
			},
			'tfe-28': {
				title: 'Wächter in der Festung Lekal',
				description:
					'Sazed begleitet Vin als terrisischer Verwalter zum Ball in der Festung Lekal. Er wartet auf sie, während sie an den Häuserkriegen arbeitet und mit Elant spricht.',
				season: 'Winter',
				year: '1021 FE',
			},
			'tfe-29': {
				title: 'Feruchemie-Unterricht',
				description:
					'Auf dem Renoux-Anwesen gibt Sazed Vin die letzten Tagebuch-Übersetzungen. Er erklärt Feruchemie ausführlicher und Vin versucht, einen seiner Zinngeister zu verbrennen. Später stößt Sazed dazu, als Kelsier eine detaillierte Karte von Marsh durchgeht. In der Nacht, schlaflos, bittet Kelsier Sazed, ihm Religionen zu erzählen.',
				season: 'Winter',
				year: '1021 FE',
			},
			'tfe-30': {
				title: 'Wächter in der Festung Wager',
				description:
					'Sazed begleitet Vin zum letzten Hausball in der Festung Wager. Die Gäste schließen Bündnisse und Lady Valette wird kühl empfangen. Sazed verlässt den Ball früh, bevor Vin den Mordanschlag auf Elant entdeckt und gegen Shan Elariel kämpft.',
				season: 'Winter',
				year: '1021 FE',
			},
			'tfe-31': {
				title: 'Vins Wunden versorgen',
				description:
					'Sazed versorgt Vins Wunden in Clubs\' Laden, nachdem sie angeschlagen vom Kampf mit Shan Elariel und den Elariel-Attentätern eingetroffen ist. Er hört zu, während Vin die Ereignisse des Abends erzählt.',
				season: 'Winter',
				year: '1021 FE',
			},
			'tfe-33': {
				title: 'Der Ausweichunterschlupf',
				description:
					'Sazed ist mit der Bande im Reserveunterschlupf nahe Clubs\' Laden, nachdem Kelsier die Gruben von Hathsin zerstört hat. Vin spricht mit Sazed über das Elfte Metall. Als Skaa zur Hinrichtung am Brunnenplatz gebracht werden und Spukie in einem Gefangenenwagen gesichtet wird, bleibt Sazed im Unterschlupf, während Kelsier den Inquisitor bekämpft.',
				season: 'Früher Frühling',
				year: '1022 FE',
			},
			'tfe-35': {
				title: 'Vin trösten',
				description:
					'Sazed ist mit Vin im Reserveunterschlupf nach Kelsiers Tod. Er bietet tröstende Worte, während Vin wütet, dass Kelsier sie verlassen hat. Er bleibt zurück, als die Bande zum Lagerhaus geht, um den Kandra in Kelsiers Gestalt zu sehen.',
				season: 'Früher Frühling',
				year: '1022 FE',
			},
			'tfe-37': {
				title: 'Der entfesselte Feruchemist',
				description:
					'Sazed wird in Vins Zelle in Kredik Shaw gebracht. Er scheint zusammenzuschrumpfen, dann schwellen seine Muskeln auf die doppelte Größe an, als er gespeicherte feruchemische Kraft freisetzt und die Tür mit einem Schlag aufstößt.',
				season: 'Früher Frühling',
				year: '1022 FE',
			},
			'tfe-38': {
				title: 'Der Fall des Imperiums',
				description:
					'Sazed erscheint bei der letzten Konfrontation in Kredik Shaw mit einem Metallfläschchen für Vin. Er wird Zeuge des Falls des Obersten Herrschers, als Vin dessen Armbänder herunterreißt und sein Alter dramatisch zunimmt.',
				season: 'Früher Frühling',
				year: '1022 FE',
			},
			'tfe-39': {
				title: 'Den Tyrannen verstehen',
				description:
					'Sazed steht mit Vin und Marsh auf einem Gebäude am Rand der Skaa-Siedlung. Er erklärt, dass der Oberste Herrscher sowohl Feruchemist als auch Allomant war — die Armbänder speicherten seine Jugend. Er vermutet, dass alle terrisischen Verwalter deshalb Eunuchen sein mussten: Der Oberste Herrscher fürchtete, jemand mit feruchemischem und allomantischem Blut könnte seine Unsterblichkeit herausfordern. Er bedauert, Elants gewaltige Rede an die neuen Führer nicht vollständig memoriert haben zu können — er hatte seine Metalle nicht dabei.',
				season: 'Frühling',
				year: '1022 FE',
			},
		},
		elend: {
			...enData.movements.elend,
			// ── Kinder des Nebels ──────────────────────────────────────────
			'tfe-12': {
				title: 'Der lesende Adlige',
				description:
					'Elant Wager bemerkt Vin allein auf einem Balkon bei einem Ball in seiner eigenen Festung und setzt sich zu ihr. Er ärgert sie, indem er Monumente der Prüfung herauszieht und zu lesen beginnt, während der Rest des Adels tanzt und Ränke schmiedet.',
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-18': {
				title: 'Ein Abend mit Valette',
				description:
					'Elant besucht den Ball in der Festung Elariel, wo er sich an einen Tisch mit Vin setzt und wie gewohnt liest. Er lobt ihr Kleid und lässt ihr die Kinnlade herunterklappen.',
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-23': {
				title: 'Das Taschentuch',
				description:
					'Elant findet Vin beim Ball in der Festung Hasting. Sie fragt ihn, ob er jemals mit einer Skaa geschlafen hat. Er beichtet, dass sein Vater ihn mit dreizehn dazu zwang und die Frau danach getötet wurde, aber er es nie wieder tat. Er gibt Vin ein Taschentuch als Zeichen, sie hofieren zu wollen. Nach dem Abgang mit seinen Freunden steigen sie in einen Turm, um die Fehler des Obersten Herrschers zu diskutieren.',
				season: 'Herbst',
				year: '1021 FE',
			},
			'tfe-28': {
				title: 'Ball in der Festung Lekal',
				description:
					'Elant überrascht Vin beim Ball in der Festung Lekal. Er sagt, er will sie küssen, aber Vin besteht darauf, dass er sie nicht wirklich kennt. Sie machen stattdessen einen Spaziergang und Elant enthüllt, dass das Vermögen der Wagers vollständig aus dem Atium-Abbau in den Gruben von Hathsin stammt — er vertraut ihr völlig. Er erwähnt auch, dass die Tekiel von Haus Hasting getötet wurden, und versucht Valette zu überzeugen, Luthadel zu verlassen.',
				season: 'Winter',
				year: '1021 FE',
			},
			'tfe-28.2': {
				title: 'Ruf des Vaters',
				description:
					'Elant kehrt zur Festung Wager zurück und versucht am Zimmer seines Vaters vorbeizuschleichen. Lord Straff Wager, ein Zinnling, der nichts verpasst, ruft ihn herein. Straff befiehlt Elant, am nächsten Tag mit Haus Hasting und einer von deren Töchtern zu speisen, da er ein Bündnis mit Lord Tegas plant. Später kommt Jastes und enthüllt, dass er Lady Valettes Kutsche verfolgen ließ — sie kam in Fellise nur mit dem Terrisaner an, Valette war verschwunden. Jastes ist überzeugt, sie ist eine Spionin. Elant, der erkennt, dass er das Atium-Geheimnis verraten hat, bietet seinem Vater einen Handel an: Er geht zum Mittagessen, dafür bekommt er Spione, die Valette beschatten.',
				season: 'Winter',
				year: '1021 FE',
			},
			'tfe-30': {
				title: 'Der Wager-Ball',
				description:
					'Elant speist während des Balls mit seinem Vater in der Festung Wager. Vin erregt seine Aufmerksamkeit und es kommt zu einer Konfrontation. Elant sagt Dinge, die Vin verletzen, aber als Vin von einem geplanten Mordanschlag auf Elant an diesem Abend erfährt, stürmt sie in die Nebel, um die Attentäter zu finden. Der Abend endet im Chaos, als Vin Lady Shan Elariel bekämpft und tötet — eine Nebelgeborene, die Elant ermorden sollte. Im Tumult gelingt es Elant zu entkommen.',
				season: 'Winter',
				year: '1021 FE',
			},
			'tfe-31': {
				title: 'Die Spionageberichte',
				description:
					'Elant und Jastes treffen sich mit Felt, der alles berichtet, was Elants Spione über Clubs\' Laden und dessen Bewohner herausgefunden haben. Nachdem Felt und Jastes gegangen sind, bringen Wager-Wachen Elant zu seinem Vater Straff, der enthüllt, dass Shan Elariel eine Nebelgeborene war, die Elant ermorden sollte. Elant weiß nun, dass eine Skaa-Diebesbande nahe der Festung Wager operiert — und dass Valette mit ihnen in Verbindung steht.',
				season: 'Winter',
				year: '1021 FE',
			},
			'tfe-33': {
				title: 'Die Hinrichtungskarren',
				description:
					'Elant sieht die Renoux-Diener in einem Hinrichtungskarren am Brunnenplatz eingesperrt. Er ruft nach Valette, kann sie aber nirgends in der Menge finden.',
				season: 'Früher Frühling',
				year: '1022 FE',
			},
			'tfe-34': {
				title: 'Kelsier rettet Elant',
				description:
					'Elant erreicht Renoux\' Käfig am Brunnenplatz und fragt nach Valette. Ein Inquisitor landet auf dem Käfig und ist dabei, Elant mit seiner Axt zu treffen, als Kelsier den Inquisitor angreift und Elant das Leben rettet. Kelsier ruft Elant zu, dass Valette in Sicherheit ist, und Elant wird von seinen Leibwächtern weggezerrt.',
				season: 'Früher Frühling',
				year: '1022 FE',
			},
			'tfe-36': {
				title: 'Autorität des Hauses Wager',
				description:
					'Elants Vater teilt ihm mit, dass eine Skaa-Rebellion begonnen hat, und will aus Luthadel fliehen. Elant weigert sich zu gehen. Straff willigt ein, in der Hoffnung, dass Elant getötet wird, und übergibt ihm die Autorität des Hauses Wager. Elant befiehlt seinen Soldaten zur Festung Lekal für eine gemeinsame Verteidigung. Dann nimmt er seine fünf besten Soldaten als Ehrengarde und geht, um sich der Skaa-Führung zu stellen.',
				season: 'Früher Frühling',
				year: '1022 FE',
			},
			'tfe-37': {
				title: 'Vin retten',
				description:
					'Elant bietet Skaa Gold, um zu Dockson gebracht zu werden, und sagt, Haus Wager werde der Rebellion nicht widerstehen; sie sollten zusammenarbeiten. Später stürmen Elant und sechs Soldaten Kredik Shaw, um Vin zu retten. Das Geheimnis ist gelüftet — er weiß jetzt, dass Vin Nebelgeborene ist. Vin greift seinen Kopf und küsst ihn, dann geht sie, um den Obersten Herrscher zu töten.',
				season: 'Früher Frühling',
				year: '1022 FE',
			},
			'tfe-38': {
				title: 'Der Philosophenkönig',
				description:
					'Nach dem Tod des Obersten Herrschers wird Elant zu einer vereinigenden Stimme, die Ordnung fordert. Er beginnt Treffen mit sowohl Skaa- als auch Adelsführern, um ein Gesetzeswerk für die neue Nation zu entwerfen.',
				season: 'Früher Frühling',
				year: '1022 FE',
			},
			'tfe-39': {
				title: 'Der neue König',
				description:
					'Elant Wager wird nach einer gewaltigen Rede vor Skaa- und Adelsführern als König der Zentralen Dominanz akzeptiert. Er sitzt in der Festung Wager und schreibt das neue Gesetzbuch. Vin beobachtet ihn heimlich durch das Fenster aus den Nebeln, bevor sie zu ihm rennt — sie halten einander.',
				season: 'Frühling',
				year: '1022 FE',
			},
		},
		marsh: {
			...enData.movements.marsh,
			// ── Kinder des Nebels ──────────────────────────────────────────
			'tfe-7': {
				title: 'Der widerwillige Bruder',
				description:
					'Marsh trifft in Clubs\' Laden ein, Kelsiers älterer Bruder und selbst ein Rebellenführer. Er schließt sich widerwillig dem Plan der Bande an.',
				season: 'Später Frühling',
				year: '1021 FE',
			},
			'tfe-10.2': {
				title: 'Die Versammlung im Lagerhaus',
				description:
					'Marsh besucht die geheime Lagerhaus-Versammlung mit der Bande und beobachtet seinen Bruder Kelsier, wie er den versammelten Skaa-Arbeitern die Revolution predigt.',
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-20': {
				title: 'Vin unterrichten',
				description:
					'Marsh kommt zum Renoux-Anwesen in Fellise, um Vin das Suchen beizubringen — Bronze nutzen, um andere Allomanten zu spüren, die Metalle verbrennen, deren Art zu erkennen und Nebellinge von Nebelgeborenen zu unterscheiden. Er lehrt sie auch über Kupfer und wie Raucher allomantische Pulse verbergen können.',
				season: 'Spätsommer',
				year: '1021 FE',
			},
			'tfe-27': {
				title: 'Die Infiltration des Ministeriums',
				description:
					'Marsh trifft Kelsier und Vin in einem verlassenen Gebäude in den Windungen, mit den Tätowierungen eines niedrigrangigen Obligators des Kantons der Inquisition. Er hat das Ministerium wirklich infiltriert. Er enthüllt, dass das Ministerium Beschwichtiger in Skaa-Regionen unter ständiger Beschwichtigung platziert, verborgen durch Raucher. Er bestätigt auch, dass Inquisitoren an Altersschwäche sterben können.',
				season: 'Winter',
				year: '1021 FE',
			},
			'tfe-30': {
				title: 'Verschwinden',
				description:
					'Marsh verstummt, seine Kommunikation bricht ab, als er in die tiefsten Ebenen des Kantons der Inquisition verschwindet. Die Bande fürchtet das Schlimmste.',
				season: 'Winter',
				year: '1021 FE',
			},
			'tfe-32': {
				title: 'Die Leiche',
				description:
					'Kelsier und Vin finden Marshs Leiche — völlig ausgeblutet, eine leblose Hülle. Sein Brief, später in Clubs\' Laden gefunden, erklärt, dass die Inquisitoren ihn wahrscheinlich finden würden. Die Bande trauert. Aber die verstümmelte Leiche ist nicht, was sie scheint.',
				season: 'Winter',
				year: '1022 FE',
			},
			'tfe-38': {
				title: 'Der Inquisitor',
				description:
					'Marsh erscheint während des letzten Angriffs auf Kredik Shaw — lebendig, verwandelt mit elf Metallnägeln: zwei durch die Augen, acht in der Brust, einer im Rücken, der sie zusammenhält. Er tötet den Inquisitor Kar, indem er einen Nagel aus dessen Hals zieht, und enthüllt, dass er alle anderen Inquisitoren getötet hat.',
				season: 'Früher Frühling',
				year: '1022 FE',
			},
			'tfe-39': {
				title: 'Elf Nägel',
				description:
					'Marsh steht mit Sazed und Vin auf einem Gebäude nahe der Skaa-Siedlung. Er spricht über sein Überleben und seine Verwandlung — elf Nägel, der grauenhafte Prozess und wie er durchhielt. Er erzählt ihnen auch von den Kandra, aus Nebelgeistern evolvierten Kreaturen, und dass der Kandra, der Lord Renoux spielte, Vin nun als seine Herrin ansieht.',
				season: 'Frühling',
				year: '1022 FE',
			},
		},
		spook: {
			...enData.movements.spook,
			// ── Kinder des Nebels ──────────────────────────────────────────
			'tfe-7': {
				title: 'Der junge Zinnling',
				description:
					'Spukie, Clubs\' junger Neffe, arbeitet als Ausguck und Bote für die Bande in der Schreinerei und spricht in dickem östlichem Straßenslang.',
				season: 'Später Frühling',
				year: '1021 FE',
			},
			'tfe-9': {
				title: 'Botengänge',
				description:
					'Spukie überbringt Nachrichten zwischen Clubs\' Laden in Luthadel und dem Renoux-Anwesen in Fellise; seine zinnverstärkten Sinne machen ihn zu einem außergewöhnlichen Kundschafter.',
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-16': {
				title: 'An Vins Bett wachen',
				description:
					'Lestibournes wacht über die verletzte Vin in Clubs\' Laden und ist da, als sie von den Verletzungen der Kredik-Shaw-Aufklärungsmission aufwacht. Er erzählt ihr, dass er von Kelsier einen neuen Namen bekommen hat: Spukie.',
				season: 'Sommer',
				year: '1021 FE',
			},
			'tfe-22': {
				title: 'Das Taschentuch',
				description:
					'Spukie besucht das Renoux-Anwesen in Fellise und findet Vin beim Lesen des Tagebuchs des Obersten Herrschers. Er sagt, Dockson sei gekommen, um mehr Waffen zu holen, und überreicht ihr errötend und nervös ein Taschentuch, bevor er davonrennt. Sazed erklärt Vin später, dass so ein junger Mann signalisiert, eine Dame ernsthaft hofieren zu wollen.',
				season: 'Herbst',
				year: '1021 FE',
			},
			'tfe-24': {
				title: 'Späte Nacht bei Clubs',
				description:
					'Spukie teilt einen späten Trunk in Clubs\' Laden mit Kelsier, Ham und Clubs, während die Bande den Stand der Mission bespricht.',
				season: 'Herbst',
				year: '1021 FE',
			},
			'tfe-26': {
				title: 'Die Hinrichtungen',
				description:
					'Spukie platzt in Clubs\' Laden herein, um Hinrichtungen am Brunnenplatz zu verkünden. Er begleitet die Bande zum Platz und sie erleben die brutale öffentliche Hinrichtung von Skaa-Frauen und -Kindern, deren Blut in den Brunnen geleert wird.',
				season: 'Spätherbst',
				year: '1021 FE',
			},
			'tfe-32': {
				title: 'Aufklärung vom Dach',
				description:
					'Spukie kundschaftet vom Dach über Clubs\' Laden mit Vin zusammen und bringt ihr Tricks mit Zinn bei. Er erklärt, dass es nicht nur ums Schärfen der Sinne geht, sondern darum, das Wichtige herauszufiltern und sich nicht vom Rest ablenken zu lassen.',
				season: 'Winter',
				year: '1022 FE',
			},
			'tfe-33': {
				title: 'Zinnling auf Wache',
				description:
					'Als die Bande zum Brunnenplatz geht, wird Spukie in einem der Hinrichtungskarren neben Lord Renoux gesichtet — vom Ministerium gefangen genommen.',
				season: 'Früher Frühling',
				year: '1022 FE',
			},
			'tfe-34': {
				title: 'Zeuge des Opfers',
				description:
					'Spukie beobachtet aus der Menge, wie Kelsier am Brunnenplatz kämpft und stirbt — ein Ereignis, das den Rest seines Lebens prägen wird. Das Opfer des Überlebenden verwandelt Spukies Verständnis davon, was es bedeutet, einer Sache zu dienen.',
				season: 'Früher Frühling',
				year: '1022 FE',
			},
			'tfe-38': {
				title: 'Die Revolution',
				description:
					'Spukie kämpft mit der Bande während der letzten Revolution und hilft, den Skaa-Aufstand auf den Straßen von Luthadel zu koordinieren.',
				season: 'Früher Frühling',
				year: '1022 FE',
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
