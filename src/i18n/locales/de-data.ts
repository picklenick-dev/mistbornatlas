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
				'tfe-17': 'Nebelgeborene',
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
				'tfe-17': 'verified',
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
				'tfe-27': 'Ministeriespion',
				'tfe-38': 'Stahlinquisitor',
				'woa-4': 'Widerwilliger Inquisitor',
				'woa-57': 'Bauer des Verderbens', // Ruin is "Verderben"
				'hoa-0': 'Hand des Verderbens',
				'hoa-79': 'Stahlaugen', // "Ironeyes" is "Stahlaugen" in Era 1 [2]
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
				'Eine Perpendikularität, die sich als gezackte Risse im Boden manifestiert, in denen Atium kristallisiert. Die Karte ist geprägt von schmalen, messerscharfen vertikalen Spalten, die sich tief in die Kruste winden. Gefangene krochen durch diese klaustrophobischen Tunnel auf der Suche nach Geoden. Kelsier entdeckte das Elfte Metall (Malatium) in einer verborgenen Kammer tief im unkartierten Spaltnetz, bevor er die Kristalle zerstörte und die Atium-Produktion beendete.',
			safeDescription:
				'Ein brutales Gefängnisbergwerk nordöstlich von Luthadel, geprägt von schmalen, messerscharfen vertikalen Spalten, die tief in die Kruste reichen. Verurteilte Gefangene kriechen durch diese klaustrophobischen Risse auf der Suche nach den seltenen Atium-Geoden, die sich darin bilden. Wenige überleben die Arbeit lange.',
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
			description:
				'Während des Aufstiegs des Verderbens wurde Marsh Zeuge eines gewaltigen Lavaausbruchs an seinen Hängen, nachdem er einen hämaturgischen Dorn in der Nähe erschaffen hatte, und sein immer dichterer Aschefall signalisierte den sich beschleunigenden Zerfall der Welt.',
			safeDescription:
				'Der nächstgelegene Ascheberg zu Luthadel, sichtbar von den Stadtmauern. Seine ständigen Ausbrüche hüllen die Zentrale Dominanz in die dicksten Ascheschichten und erfordern unablässige Reinigungstrupps.',
			confidence: 'verified',
		},
		urteau: {
			name: 'Urteau',
			description:
				'Berühmt für seine „Straßenschlitze" — Kanäle, die vom Obersten Herrscher trockengelegt wurden, um als abgesenkte Fahrbahnen zu dienen. Hochburg des Bürgers (Quellion) während des Zusammenbruchs.',
			safeDescription: 'Die Hauptstadt der Nördlichen Dominanz und Stammsitz von Haus Venture.',
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
				'Erlangte nach dem Tod des Obersten Herrschers an Bedeutung. Verlässt sich zur Verteidigung auf natürliche Felsformationen („Cremnol"-Simse) anstelle von Mauern. Beherbergt eine der geheimen Vorratshöhlen des Obersten Herrschers.',
			safeDescription:
				'Ein bedeutender Handelsknotenpunkt in der Westlichen Dominanz, befestigt durch natürliche Felsformationen.',
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
				'Direkt über einer der Vorratshöhlen des Obersten Herrschers erbaut. Die Architektur passte sich mit unterirdischen Erweiterungen und ministeriumszentrierter Anlage an den starken Aschefall an. Zur Zeit des Helden der Zeiten wird die Stadt von Ascheverwehungen verschlungen, die Bürger leben in den oberen Stockwerken, während die unteren sich mit Asche füllen.',
			safeDescription:
				'Eine Stadt in der Nördlichen Dominanz mit Architektur, die an starken Aschefall angepasst ist.',
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
				'Eine steile Wendeltreppe führt hinab zur Wahrheit: die Halle der Diener (Massengräber), Inquisitoren-Schlafräume und die Hämaturgie-Kammer mit Steintischen, Abflusskanälen und Dornengewölbe. Tief im Inneren entdeckte Sazed Kwaans Stahlplatten-Inschrift, versteckt in einer geheimen Nische. Hier werden Inquisitoren erschaffen.',
			safeDescription:
				'Eine vertikale Festung, in eine Klippe nahe der Nordgrenze gehauen. Die oberen Stockwerke dienen als Standard-Ministeriumstempel (Kapelle, Wohnräume).',
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
				'Der Standort des ursprünglichen Brunnens der Aszension, bevor der Oberste Herrscher die Weltgeographie veränderte.',
			safeDescription: 'Eine raue Bergkette, in der das Terris-Volk unterjocht wurde.',
			confidence: 'verified',
		},
		'tincut-fastness': {
			name: 'Festung Tincut',
			description:
				'Wohin sich die Synode und die Flüchtlinge während des Zusammenbruchs des Reiches zurückzogen.',
			safeDescription: 'Eine verborgene Festung in den Terris-Bergen.',
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
				'Eine künstliche Arterie, die auf Erlass des Obersten Herrschers in die Erde gegraben wurde und Tathingdwen mit Luthadel zur Gewinnung von Terris-Ressourcen und zur Stationierung imperialer Soldaten verbindet. Die Infrastruktur, die das Reich verband, wurde zur Straße seiner Zerstörung, als Koloss-Armeen die Kanalstraße für ihren Angriff nutzten — ein Denkmal sowohl imperialer Ingenieurskunst als auch imperialer Unterdrückung.',
			safeDescription:
				'Kein natürlicher Fluss, sondern eine künstliche Arterie, die auf Erlass des Obersten Herrschers in die Erde gegraben wurde. Verbindet Tathingdwen im Norden direkt mit Luthadel und ermöglicht Handel und Transport im ganzen Reich. Ein Denkmal imperialer Ingenieurskunst.',
			confidence: 'probable',
		},
		'kandra-homeland': {
			name: 'Kandra-Heimat',
			description:
				'Tiefe Höhlen unter den Gruben von Hathsin, Heimat des Kandra-Volkes, das die größten Geheimnisse des Obersten Herrschers hütet, einschließlich des Trusts.',
			safeDescription:
				'Ein verborgener unterirdischer Komplex unter den Gruben von Hathsin. Seine wahre Natur und sein Zweck sind der Außenwelt unbekannt.',
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
			description:
				'Südlicher Ankerpunkt des Vorratshöhlen-Netzwerks. Enthält Vorratshöhle 2 mit Notvorräten.',
			safeDescription: 'Eine Stadt in der Südlichen Dominanz.',
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
			description:
				'Von Kelsiers Rebellenarmee als versteckter Sammelpunkt genutzt, boten diese Höhlen Tausenden von Skaa-Soldaten, die für die Revolution trainierten, Unterschlupf.',
			safeDescription:
				'Ein Netzwerk aus Kalksteinhöhlen in den Bergen zwischen Luthadel und den Gruben von Hathsin.',
			confidence: 'verified',
		},
		garthwood: {
			name: 'Garthwood',
			description:
				'Eine Siedlung in der Östlichen Dominanz, deren umliegende Dörfer zu den ersten gehörten, die die Nebelkrankheit erlebten, die sich später über das Reich ausbreiten sollte — ein frühes Anzeichen des Musters, das Elend und Vin aufdecken würden.',
			safeDescription:
				'Eine Siedlung in der Östlichen Dominanz, wohin Sazed reiste, um befreiten Skaa unterdrückte Religionen zu lehren.',
			confidence: 'probable',
		},
		'straffs-camp': {
			name: 'Straffs Lager',
			description: 'Militärlager von Straff Venture nördlich von Luthadel während der Belagerung.',
			confidence: 'probable',
		},
		'koloss-camp': {
			name: 'Koloss-Lager',
			description:
				'Das Lager der Koloss-Armee nahe Luthadel während der Belagerung von 1024 ZE. Jastes Lekals katastrophaler Versuch, Koloss-Loyalität mit Holzmünzen zu erkaufen, führte dazu, dass die Kreaturen einen verheerenden Angriff auf die Stadt starteten.',
			safeDescription:
				'Ein großes Lager von Koloss-Streitkräften nahe Luthadel, ihre Anwesenheit eine ständige Bedrohung während der Belagerung.',
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
			description:
				'Beherbergte ein stehendes Heer von 5.000 Soldaten, die Yedens Rebellenarmee nahe der Stadt Holstep abfingen und massakrierten und damit die Fähigkeit des Obersten Herrschers demonstrierten, rasch militärische Macht zu projizieren.',
			safeDescription: 'Eine bedeutende Garnisonsstadt nordwestlich von Luthadel.',
			confidence: 'probable',
		},
		'haverfrex-cannery-central': {
			name: 'Haverfrex',
			description:
				'Diente als primärer Versorgungsknotenpunkt für Lord Ashweather Cetts Armee während der Belagerung von Luthadel und lieferte die logistische Ausdauer, die für eine langfristige militärische Präsenz notwendig war.',
			safeDescription:
				'Ein industrieller Wegpunkt in der Zentralen Dominanz, bekannt für seine großangelegte Konservenfabrik.',
			confidence: 'probable',
		},
		'cetts-camp': {
			name: 'Cetts Lager',
			description:
				'Das Militärlager von Lord Ashweather Cett nordwestlich von Luthadel während der Belagerung.',
			confidence: 'probable',
		},
		'western-coast': {
			name: 'Westküste',
			description:
				'Die westliche Küstenlinie des Letzten Reiches, wo das bewohnte Land einem endlosen grauen Ozean der Kognitiven Welt weicht. Kelsier erreichte dieses trostlose Ufer nach wochenlangem Lauf nach Westen, nur um das Verderben auf ihn warten zu finden. Von hier aus erstreckt sich die Kognitive Welt über ein dunkles Meer zu fernen Ländern jenseits von Scadrials Grenze.',
			safeDescription:
				'Der trostlose westliche Rand des Letzten Reiches, wo der Kontinent endet und der Ozean beginnt. Dünn besiedelt und selten besucht, markieren seine Küsten die Grenze der bekannten Welt.',
			confidence: 'probable',
		},
		'ire-fortress': {
			name: 'Ire-Festung',
			description:
				'Eine hoch aufragende, leuchtende Festung der Ire, erbaut in der Kognitiven Welt weit jenseits von Scadrials Westgrenze. Errichtet aus weißem Stein, der von innen heraus pulsiert, umgeben von seltsamen glasartigen Bäumen und von einer Leitung roher Investitur gespeist. In ihren Gewölben bewachen die Ire eine Kugel, die die Kraft eines sterbenden Splitters einfangen kann — den Schlüssel zur Aszension. Kelsier infiltrierte die Festung, belauschte die Pläne der uralten Elantrianer und stahl die Kugel, indem er ihre Expedition terrorisierte.',
			safeDescription:
				'Eine geheimnisvolle Festung, von der man in Erzählungen über die Welt jenseits des Todes flüstert, deren Natur und Zweck den Lebenden unbekannt sind.',
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
			},
			'tfe-1': {
				title: 'Verborgener Beobachter',
				description:
					'Kelsier beobachtet Camons Bande aus den Schatten und bemerkt Vins unbewussten Einsatz der Allomantie — ein Straßenkind mit Nebelgeborenen-Kräften.',
			},
			'tfe-3': {
				title: 'Vin anwerben',
				description:
					'Vin versucht aus Camons Unterschlupf zu fliehen, doch Ulef verrät sie. Kelsier greift ein und rettet Vin vor Camons Schlägen. Er befördert Milev zum Bandenführer, nimmt die dreitausend Boxings als Bezahlung und mietet den Unterschlupf für sein Abendtreffen. Dann testet er Vin und bestätigt, dass sie Nebelgeborene ist.',
			},
			'tfe-5': {
				title: 'Der Atiumraub',
				description:
					'Kelsier, Dockson und Vin steigen aufs Dach. Kelsier rüstet sich und stürzt sich in die Nebel, um in Haus Wager einzubrechen und Atium zu stehlen. Er erbeutet den Tresor, muss aber auf dem Rückweg gegen Nebeljäger kämpfen. Er entkommt mit dem Atium und finanziert die Rebellion.',
			},
			'tfe-6': {
				title: 'Die Bande versammelt sich',
				description:
					"In Clubs' Schreinerei planen Kelsier und die Bande die Zerstörung des Letzten Imperiums. Marsh trifft schließlich ein und alle gehen, damit die beiden Brüder unter sich sprechen können. Vin kehrt zurück, um an der Tür zu lauschen.",
			},
			'tfe-7': {
				title: 'Die Lehrerin unterrichten',
				description:
					'Kelsier nimmt Vin zu ihrer ersten Nacht des Trainings mit und gibt ihr einen Nebelmantel. Er lehrt sie die acht Grundmetalle an der Stadtmauer von Luthadel nahe dem Stahltor.',
			},
			'tfe-8': {
				title: 'Die Tarnung Renoux',
				description:
					"Kelsier bringt Vin über die Mauern von Luthadel in die nächtliche Wildnis, wo sie einem Nebelgeist begegnen. Auf der Hauptstraße wartet Sazed mit einer Kutsche und bringt sie nach Fellise. Unterwegs bietet Kelsier Vin die dreitausend Boxings und die Möglichkeit zu gehen. Auf Lord Renoux' Anwesen etabliert er ihre Tarnidentität als Lady Valette.",
			},
			'tfe-10': {
				title: 'Die Revolution planen',
				description:
					"Zurück in Luthadel hält Kelsier eine Lagebesprechung in Clubs' Laden. Zuvor fragt er Sazed nach einer Religion mit Macht — Sazed erzählt ihm vom Jaismus — und ob eine Religion das Töten von Adligen als heilige Pflicht ansieht. Die Besprechung endet, als einer von Hammonds Soldaten meldet, dass das Ministerium Camons alten Unterschlupf gefunden hat.",
			},
			'tfe-10.2': {
				title: 'Die Versammlung im Lagerhaus',
				description:
					'Kelsier predigt Revolution vor versammelten Skaa-Arbeitern bei einer geheimen Versammlung im Lagerhausviertel. Breeze und seine Beschwichtiger und Aufwiegler beeinflussen die Menge, damit sie empfänglicher wird, und nutzen seine Legende als der Überlebende von Hathsin, um die Rebellion zu entfachen.',
			},
			'tfe-11': {
				title: 'Das Massaker in Camons Unterschlupf',
				description:
					'Kelsier und die Bande untersuchen den zerstörten Unterschlupf. Nach dem Verlassen sucht Kelsier Camon unter den Bettlern. Er findet Camons Leiche an einem Haken durch den Mund aufgehängt — Handgelenke und Knöchel gefesselt, Körper gefoltert. Diese Hinrichtungsmethode ist jenen vorbehalten, die Allomantie missbrauchen. Vin war Kelsier erfolgreich gefolgt und sie sprechen kurz nach der Entdeckung.',
			},
			'tfe-13': {
				title: 'Planung in Fellise',
				description:
					"Kelsier trifft sich mit Vin und Sazed auf Lord Renoux' Anwesen in Fellise, um die Erkenntnisse von Vins erstem Ball zu besprechen. Er erfährt, dass Vins Vater auf dem Ball war, und bricht dann in die Nebel auf, um nach Luthadel zurückzukehren.",
			},
			'tfe-14': {
				title: 'Palastaufklärung',
				description:
					'Kelsier führt Vin nach Kredik Shaw, um das Gebäude auszukundschaften, das der Oberste Herrscher alle drei Tage besucht. Sie kämpfen sich hinein, aber drei Stahlinquisitoren greifen an. Kelsier wird im Chaos von Vin getrennt. Vin entkommt schwer verwundet, ein mysteriöses ledergebundenes Buch umklammernd.',
			},
			'tfe-15': {
				title: 'Nach Kredik Shaw',
				description:
					'Die Bande streitet über Kelsiers Entscheidung, Vin nach Kredik Shaw mitzunehmen. Bevor sie nach ihr suchen können, trifft Sazed ein und trägt sie. Dockson ist wütend über das Risiko. Kelsier und Dockson bemerken das Lederbuch, das Vin mitgebracht hat — Sazed identifiziert es als in Khlennisch geschrieben, der Sprache der Heimat des Obersten Herrschers vor der Erhebung, und glaubt es übersetzen zu können.',
			},
			'tfe-16': {
				title: 'Am Bett wachen',
				description:
					"Kelsier bleibt in Clubs' Laden und wacht über Vin, während sie sich von ihren Verletzungen aus Kredik Shaw erholt, und ist da, als sie schließlich aufwacht.",
			},
			'tfe-17': {
				title: 'Treffen auf dem Renoux-Anwesen',
				description:
					"Kelsier reist mit Breeze, Yeden und Dockson nach Fellise, um sich auf Lord Renoux' Anwesen zu treffen und die nächste Phase der Rebellion zu besprechen.",
			},
			'tfe-19': {
				title: 'Den Häuserkrieg schüren',
				description:
					'Kelsier sät Chaos, um den Häuserkrieg voranzutreiben, indem er die offensichtlich ermordete Leiche von Lord Charrs Entrone im Garten der Festung Tekiel hinterlegt. Dann geht er in die Rußviertel, um den Informanten Hoid zu treffen und Gerüchte über Haus Renoux zu erfahren. Von Hoid erfährt er auch, dass Lady Shan Elariel eine Beschwichtigerin ist.',
			},
			'tfe-19.2': {
				title: 'Treffen mit Lord Straff',
				description:
					'Kelsier geht zum Ahlstrom-Platz und gibt sich als kranker, lahmer Skaa-Bettler und Informant aus, um Lord Straff Wager zu treffen, den Anführer von Haus Wager. Er erfährt, dass Gerüchte über den Überlebenden von Hathsin kursieren und von einem Elften Metall die Rede ist.',
			},
			'tfe-19.3': {
				title: 'Rückkehr nach Renoux',
				description:
					'Kelsier kehrt über den Dornenpfad zum Anwesen Renoux zurück und tauscht Informationen mit Vin, Sazed und Renoux aus. Er hält Vin eine Predigt über Adlige und besteht darauf, dass sie sich von Elant fernhalten soll.',
			},
			'tfe-20': {
				title: 'Nachschub überwachen',
				description:
					'Kelsier ist auf dem Renoux-Anwesen in Fellise und überwacht die Waffen und Vorräte, die auf Karren für die Rebellion verladen werden.',
			},
			'tfe-21': {
				title: 'Die Rebellenarmee',
				description:
					'Kelsier liest eine Übersetzung des Tagebuchs des Obersten Herrschers, während er per Kanalboot nach Norden reist. Der Konvoi hält an einer Schleuse und Kelsier, die Rekruten und die Vorräte gehen zu den Höhlen, in denen die Rebellenarmee trainiert. Er überwindet die Erinnerungen an die Gruben von Hathsin und betritt den Arguois-Höhlenkomplex, um die Armee zu inspizieren, die Ham aufgebaut hat. Bei einem Abendessen manipuliert Kelsier Bilgs Emotionen und plant, ihn als Beispiel zu nutzen. Bilg und Demoux duellieren sich; Kelsier hilft Demoux — dem Kleineren — mit Allomantie zum Sieg. Nach dem Duell steigt das Vertrauen der Armee, da Yeden glaubt, Kelsier könne seine Kräfte auf andere übertragen.',
			},
			'tfe-23': {
				title: 'Vin beschatten',
				description:
					'Kelsier erscheint vor dem Turmfenster, an dem Vin Elants Gruppe in der Festung Hasting belauscht. Er tut ihr idealistisches Gerede vom Weltverändern als typisches Verhalten junger Adliger ab, das nie zu echtem Wandel führt. Beide gehen getrennte Wege.',
			},
			'tfe-24': {
				title: 'Lagebesprechung der Bande',
				description:
					"Kelsier trifft in Clubs' Laden ein, wo ein Großteil der Bande versammelt ist. Er bespricht den Stand der Mission und teilt einen späten Trunk mit Spukie, Ham und Clubs. Er bittet Ham, zur Garnison zu gehen und Informationen zu sammeln.",
			},
			'tfe-25': {
				title: 'Verzweifelte Entscheidung',
				description:
					"In Clubs' Laden erfährt Kelsier, dass die Skaa-Rebellion die Garnison von Holstep angegriffen hat und die Garnison von Luthadel nach Norden marschiert. Er beschließt, die Rebellenarmee zu warnen, und lässt Vin fünf Zinnperlen schlucken für einen langen Zinnlauf nach Norden.",
			},
			'tfe-25.2': {
				title: 'Katastrophe bei Holstep',
				description:
					"Kelsier und Vin laufen sechzehn Stunden lang und verbrennen ununterbrochen Zinn. Sie stoßen auf die Überreste der Rebellenarmee, umzingelt und abgeschlachtet von der Garnison Valtroux. Kelsier will kämpfen, aber Vin überzeugt ihn, dass sie nicht unbesiegbar sind. Sie eilen weiter zu den Arguois-Höhlen, wo 2.000 Soldaten dank Mennis' Voraussicht überlebt haben.",
			},
			'tfe-26': {
				title: 'Die Scherben aufsammeln',
				description:
					"Zurück in Clubs' Laden nach zwei Wochen Rückreise von den Höhlen spricht die Bande über die Zukunft des Auftrags — er scheint ein völliger Fehlschlag. Breeze gibt Kelsier die Schuld, Ruhm und Ehre gejagt zu haben. Kelsier gibt den Rückschlag zu, weigert sich aber, die Revolution aufzugeben.",
			},
			'tfe-26.2': {
				title: 'Die Hinrichtungen',
				description:
					'Spukie kündigt Hinrichtungen am Brunnenplatz an. Die Bande geht dorthin, besticht jemanden für Dachzugang. Sie beobachten, wie zahlreiche Skaa getötet und ihr Blut in den Brunnen geleert wird. Kelsier überzeugt die Bande weiterzumachen und zeigt auf die Gräueltat: „Das ist unser Feind. Es gibt hier kein Erbarmen, kein Umkehren."',
			},
			'tfe-27': {
				title: 'Neue Strategie',
				description:
					"Die Bande kehrt in Clubs' Laden zurück, um die nächsten Schritte zu planen — einen Häuserkrieg unter dem Adel zu beginnen. Sazed bringt eine Nachricht von Marsh mit Anweisungen, wo sie sich in den Windungen treffen können.",
			},
			'tfe-27.2': {
				title: 'Das Goldmetall',
				description:
					'Kelsier und Vin gehen Stunden vor dem Treffen mit Marsh zu einem verlassenen Gebäude in den Windungen. Während sie warten, spricht Kelsier über Gold — das neunte allomantische Metall, das dem Benutzer eine alternative Version seiner Vergangenheit zeigt. Er erklärt auch Feruchemie und gibt Vin etwas Gold zum ersten Verbrennen. Als Marsh eintrifft, mit den Tätowierungen eines niedrigrangigen Obligators des Kantons der Inquisition, beschreibt er die Beschwichtigungsstationen in Luthadel und verrät, dass Inquisitoren an Altersschwäche sterben können.',
			},
			'tfe-29': {
				title: 'Kriegsrat bei Renoux',
				description:
					"Kelsier trifft den Großteil der Bande auf Renoux' Anwesen in Fellise, um eine sehr detaillierte Karte von Luthadels Verteidigungsanlagen durchzugehen, die Marsh geliefert hat. Dabei entdecken sie, dass Therons Bande kürzlich vom Ministerium angegriffen wurde. Spät in der Nacht, da er nicht schlafen kann, bittet Kelsier Sazed, ihm von einigen Religionen zu erzählen.",
			},
			'tfe-31': {
				title: 'Die Lehrling schelten',
				description:
					"Kelsier und Vin kehren nach Clubs' Laden zurück, nachdem Vin Lady Shan Elariel — eine vollwertige Nebelgeborene — in der Festung Wager getötet hat. Kelsier schilt Vin wegen des rücksichtslosen Kampfes, aber sie schreit zurück, dass Adlige und Skaa nicht so verschieden sind und Elant Wager ein guter Mensch ist, der es verdient, beschützt zu werden.",
			},
			'tfe-32': {
				title: 'Marsh finden',
				description:
					"Kelsier und Vin finden Marshs Leiche — völlig ausgeblutet, eine leblose Hülle. Zurück in Clubs' Laden entdecken sie einen Brief von Marsh, der erklärt, dass die Inquisitoren ihn wahrscheinlich finden würden.",
			},
			'tfe-32.2': {
				title: 'Die Gruben zerstören',
				description:
					'Kelsier kehrt zu den Gruben von Hathsin zurück — dem Ort seines größten Leids. Er tötet alle Wachen und reicht einem Skaa namens Wallin die Hand, der aus der Höhle kommt. Dann zerstört er jeden Atiumkristall und schneidet die wertvollste Ressource des Obersten Herrschers in einer einzigen Nacht ab.',
			},
			'tfe-33': {
				title: 'Der Ausweichunterschlupf',
				description:
					"Kelsier kehrt in einen feuchten Reservekeller nahe Clubs' Laden zurück — nur drei Räume. Er verkündet, dass er alles Atium in den Gruben von Hathsin zerstört hat.",
			},
			'tfe-33.2': {
				title: 'Der Kampf mit dem Inquisitor',
				description:
					'Alle folgen Kelsier zum Brunnenplatz. Sie entdecken Spukie und Lord Renoux in einem der Hinrichtungskarren. Kelsier kämpft gegen einen Inquisitor auf dem Platz — eine Falle, die er fast sicher kommen sah.',
			},
			'tfe-34': {
				title: 'Das letzte Gefecht des Überlebenden',
				description:
					'Kelsier kämpft gegen den Inquisitor in einem Kampf auf Leben und Tod am Brunnenplatz, beide verbrennen Atium. Er ist ein Meister von Stoßen und Ziehen und bewegt Metall durch die Luft wie ein Experte. Er tötet den Inquisitor und die Skaa beginnen zu rufen: „Der Überlebende von Hathsin." Der Oberste Herrscher kommt in einer schwarzen Kutsche. Einer von Hams Schlägern rammt ihm einen Speer hinein — er geht weiter. Zwei Speere — geht immer noch. Der Oberste Herrscher schlägt Kelsier, zieht einen Speer aus seinem eigenen Körper und rammt ihn Kelsier hindurch. Er stirbt mit einem Lächeln und wird zum Märtyrer, der die Revolution entfacht.',
			},
			'tfe-35': {
				title: 'Jenseits des Todes',
				description:
					"Im Ausweichunterschlupf nahe Clubs' Laden sieht die Bande den Kandra, zuvor Lord Renoux, in Kelsiers Körper und Knochen — der letzte Plan. Kelsier hatte jedem Bandenmitglied Briefe mit Anweisungen zur Einnahme der Stadt hinterlassen. Sein Tod war der Funke, der die Revolution in ganz Luthadel entflammte.",
			},
			'woa-1': {
				title: 'Kognitiver Schatten',
				description:
					'Kelsier erwacht als Kognitiver Schatten im Brunnen der Erhebung nach seinem Tod, gefangen zwischen den Reichen. Hoid kommt durch die Perpendikularität und schilt ihn für die Zerstörung der Gruben von Hathsin, bevor er ins Physische Reich wechselt und eine Kugel Lerasium stiehlt. Leras (Bewahrung) erscheint und belehrt ihn über die drei Reiche.',
			},
			'woa-5': {
				title: 'Die Welt beobachten',
				description:
					'Kelsier reitet auf Ruins Impulsen, um die Welt jenseits seines Gefängnisses zu beobachten. Er bemerkt, dass Ruin Vin besondere Aufmerksamkeit schenkt. Er sieht sie die Mauern Luthadels patrouillieren, mit ihrem neuen Wolfshund-Kandra trainieren und den Nebelgeist spüren, der versucht, sie zu leiten.',
			},
			'woa-12': {
				title: 'Ruins Pläne',
				description:
					'Kelsier entdeckt, dass Ruin die terrisische Religion vom Konventikel von Seran aus verändert. Währenddessen verlässt Marsh — nun völlig unter Ruins Kontrolle — Sazed im Konventikel und verschwindet. Kelsier sieht hilflos zu, wie Sazed Kwaans Inschrift entdeckt und seine Glaubenskrise beginnt.',
			},
			'woa-26': {
				title: 'Die Belagerung beobachten',
				description:
					'Kelsier sieht Vin furchterregende Macht bei Straffs Verhandlung demonstrieren, dann Elend von der Versammlung abgesetzt. Ruin orchestriert das Herannahen der Koloss-Armee und manipuliert Zane, um Vin zu isolieren. Kelsier ist wütend, Elend regieren zu sehen, entwickelt aber Respekt für seine Bemühungen.',
			},
			'woa-57': {
				title: 'Die Brunnenkammer',
				description:
					'Vin und Elend steigen zum Brunnen der Erhebung hinab. Bewahrung erscheint weniger menschlich. Er sagt Kelsier, die Macht dürfe nicht freigesetzt werden, aber Vin werde getäuscht. Marsh, unter Ruins Kontrolle, greift Sazed am Eingang an. Kelsier packt verzweifelt Bewahrungs Arm und verletzt Elend damit, um Vin zum Einsatz der Macht zu bewegen.',
			},
			'woa-60': {
				title: 'Ruin befreit',
				description:
					'Vin setzt die Macht am Brunnen frei, anstatt sie zu nutzen, und zerbricht Ruins Gefängnis. Bewahrung führt Vin, Elend die letzte Lerasium-Kugel zu geben, was ihn zum Nebelgeborenen macht und sein Leben rettet. Kelsier sieht zu, wie Ruins volles Bewusstsein über Scadrial hereinbricht.',
			},
			'hoa-0': {
				title: 'Die Trauer des Überlebenden',
				description:
					'In den Tagen nach der Koloss-Schlacht verlässt Kelsier den Brunnen und reist durch Luthadels Kognitive Spiegelung zur Festung Venture, wo seine überlebende Bande eine Beerdigung abhält. Er erfährt, dass Dockson und Clubs getötet wurden. Er packt Bewahrung voller Wut, spürt aber stattdessen die Tiefe von Bewahrungs Liebe zur Menschheit.',
			},
			'hoa-3': {
				title: 'Khriss und Nazh',
				description:
					'Einer Ranke Bewahrungs nach Osten folgend erreicht Kelsier den Luthadel-See, wo das Kognitive Reich fester erscheint. Er findet ein Lagerfeuer mit zwei Fremden — Khriss und Nazh — die ihn erkennen. Khriss erklärt ihm die sechzehn Splitter und Adonalsium. Nazh schenkt ihm sein Messer und weist ihn zu den Ire.',
			},
			'hoa-5': {
				title: 'Vision der Göttlichkeit',
				description:
					'Bewahrung blickt in Kelsiers Augen und gibt ihm eine Vision der Göttlichkeit und möglicher Zukünfte. In keiner Zukunft besiegt Kelsier Ruin, aber er spürt, dass Vin eine Chance hat — wenn er nach Westen geht. Seine Verbindung zu Ruin ist viel tiefer als zu Bewahrung, eine beunruhigende Tatsache.',
			},
			'hoa-8': {
				title: 'Nach Westen laufen',
				description:
					'Kelsier läuft westwärts entlang des Kaiserkanals zum Ozean. Als Kognitiver Schatten ermüdet er nicht — solange er nicht an Erschöpfung denkt. Er durchquert leere Städte, der Aschefall dichter als je zuvor, während Ruin den Zerfall der Welt beschleunigt.',
			},
			'hoa-12': {
				title: 'Erinnerungen an Longsfollow',
				description:
					'In Longsfollow — einer Stadt, wo er einst Adlige als Vergeltung für ein ermordetes Skaa-Mädchen tötete — wird Kelsier von Erschöpfung und Schuld getroffen. Die Inquisitoren kamen danach und töteten noch mehr. Er fragt Bewahrung, wo Mare ist. Als er erkennt, wie lange er schon läuft, spürt er wahre Erschöpfung.',
			},
			'hoa-15': {
				title: 'Der einsame Weg',
				description:
					'Westlich von Longsfollow hält Kelsier an einer Feuerstelle und entdeckt, dass er Flammen allein mit seinem Geist entzünden kann. Die Asche fällt dichter als je zuvor, und er sieht Skaa-Flüchtlinge immer weiter westwärts fliehen. Völlig allein sehnt er sich nach irgendeiner Interaktion.',
			},
			'hoa-18': {
				title: 'Ruins Spott',
				description:
					'Nach wochenlangem Laufen erreicht Kelsier den westlichen Ozean. Ati (Ruin) erscheint und hält einen Monolog über die Unvermeidlichkeit des Verfalls. Er verspottet Kelsier, dass er hier nichts Gutes tun könne — woraus Kelsier schließt, dass das Gegenteil wahr sein muss. Kelsier macht sich auf den Weg über das Kognitive Meer.',
			},
			'hoa-21': {
				title: 'Der Ozean der Gedanken',
				description:
					'Kelsier überquert das Kognitive Meer mit nur einer improvisierten Fackel als Licht in der endlosen Dunkelheit. Weit entfernt von Scadrial spürt er ein Ziehen an seiner Seele — ein Zeichen, dass er seine eigene Welt hinter sich lässt. Er watet durch einen seltsamen Dschungel, bis er ein strahlendes Licht vor sich sieht: die Ire-Festung.',
			},
			'hoa-24': {
				title: 'Die Ire-Festung',
				description:
					'Kelsier erreicht eine hochragende Festung aus glühendem weißem Stein weit jenseits von Scadrial. Er erklimmt die Mauern und belauscht die Ire — uralte Elantrianer, die ein Gerät bewachen, das Bewahrungs Macht einfangen könnte. Sie planen, den Splitter selbst zu nehmen.',
			},
			'hoa-30': {
				title: 'Die Kugel stehlen',
				description:
					'Kelsier verfolgt die Ire, als sie mit der Kugel ausreiten. Er terrorisiert sie, indem er vorgibt, Ruin zu sein, und erschafft eine brennende Umhang-Marionette. Als Alonoe von der Gruppe getrennt wird, schaltet er ihre Wache aus und flüstert aus den Schatten, sie solle die Kugel zurücklassen. Sie gehorcht verängstigt.',
			},
			'hoa-35': {
				title: 'Fadrex und Hoid',
				description:
					'Nach wochenlangem Rückweg über den Kontinent weist Bewahrung Kelsier nach Fadrex. Eine dünne Lichtlinie führt ihn zu einem Platz voller Bettler — wo er Vin findet und erneut Hoid begegnet. Kelsier versucht verzweifelt, Vin vor ihrem Ohrring-Stachel und vor Hoid zu warnen. Ruin greift Kelsier mit spiritueller Kraft an.',
			},
			'hoa-42': {
				title: 'Ruins Bauern enthüllt',
				description:
					"Jedes Mal, wenn Kelsier versucht, Vin zu erreichen, blockiert Ruin seinen Weg. Von außerhalb Fadrex' sieht er Koloss Elends Armee angreifen — und als sie sterben, sieht er ihre wahren Gestalten: Menschen aus allen Schichten, durch Häm Alurgie erschaffen. Bewahrung zeigt ihm jeden, den Ruin durch Stachel kontrolliert — einschließlich Marsh, der Penrod einen Stachel ins Herz treibt.",
			},
			'hoa-50': {
				title: 'Die verstümmelte Warnung',
				description:
					"Kelsier sucht tagelang das Armeelager außerhalb Fadrex' ab, auf der Suche nach einem halbwahnsinnigen Soldaten, mit dem er kommunizieren kann, um Vin zu warnen: vertraue niemandem, der von Metall durchbohrt ist. Der Mann verstümmelt die Botschaft. Ruin erscheint, um ihn erneut zu verspotten. Kelsier wendet seine Aufmerksamkeit nach Norden, nach Urteau, wo ein junger Zinnauge namens Spook vor Hingabe zum Überlebenden brennt.",
			},
			'hoa-54': {
				title: 'Der Schatten des Überlebenden',
				description:
					'Kelsier erreicht Urteau, auf der Suche nach dem jungen Zinnauge, dessen Hingabe wie ein Leuchtfeuer brennt. Er findet Spook unter Ruins Einfluss — einen häm Alurgischen Stachel in seinem Körper. Aber Ruins Aufmerksamkeit ist hier dünner als in Fadrex. Kelsier wartet auf den richtigen Moment.',
			},
			'hoa-58': {
				title: 'Hoffnung für Spook',
				description:
					'Kelsier findet Spook in Urteau. Die Verbindungslinien zwischen ihnen sind stärker als zu jedem anderen — Spooks Hingabe schuf ein einzigartiges Band. Kelsier flüstert Spook wiederholt »Hoffnung« zu, und schließlich entfernt Spook seinen häm Alurgischen Stachel. Kelsier ruft dann »Überlebe« und Spook springt in Aktion.',
			},
			'hoa-62': {
				title: 'Der Halbtraum',
				description:
					'Spook und Kelsier begegnen sich in einem Halbtraum auf grünem Gras. Kelsier sagt Spook, er sei ein Held und er sei stolz auf ihn. Er drängt Spook, Vin eine Nachricht zukommen zu lassen: Wer von Metall durchbohrt ist, kann von Ruin kontrolliert werden. Spook nickt beim Erwachen, entschlossen.',
			},
			'hoa-68': {
				title: 'Bewahrung an sich nehmen',
				description:
					'Kelsier spürt, dass Bewahrung stirbt, zerschlägt die Ire-Kugel mit Nazhs Messer und nimmt die Macht des Splitters nach verzweifeltem Ringen an sich. Aber Ruin lacht — Kelsier ist nur eine Erinnerung an eine Person und kann sie nicht vollständig kontrollieren. Alles, was er versucht, wird blockiert.',
			},
			'hoa-69': {
				title: 'Der Fall des Boten',
				description:
					'Kelsier sieht Goradel aus Urteau reiten, Spooks in Metall geritzte Warnung tragend — aber Ruin ruft Marsh herbei. Der Inquisitor stürzt auf den Boten herab und tötet ihn, die Nachricht laut vorlesend. Kelsier dankt Goradel, während die Seele des Soldaten durch das Kognitive Reich zieht. Aber ein Gedanke durchdringt ihn: Ohne das Atium ist Ruin nicht vollständig. Es gibt noch Hoffnung.',
			},
			'hoa-78': {
				title: 'Die Macht abtreten',
				description:
					'Kelsier sieht Vin gegen die verbliebenen Inquisitoren in Kredik Shaw kämpfen — dann foltert Marsh sie. Aber Marsh hat die Warnung von Goradels Leiche gelesen. Er greift nach dem Ohrring-Stachel und reißt ihn aus Vins Ohr. Kelsier nutzt den Moment, greift Ruin an, um ihn abzulenken, während Vin die Nebel einatmet und Bewahrungs Macht ergreift. Seine Seele zerreißt, als er ihr den Splitter abtritt.',
			},
			'hoa-80': {
				title: 'Die Reparatur der Seele',
				description:
					'Kelsier ist in Agonie. Der Sog des Todes zieht erneut an ihm — aber er hält fest, entscheidet sich erneut, nicht zu sterben. Seine Seele ist tief verwundet, aber mit der Zeit beginnt sie sich zu reparieren. Vom Kognitiven Reich aus beobachtet er die Hunderttausenden von Flüchtlingen an den Gruben, die Kandra, die das Atium bewegen, und Vin — nun Bewahrung — die im Wind flüstert, um Elend zu leiten.',
			},
			'hoa-81': {
				title: 'Wächter an den Gruben',
				description:
					'Kelsier sieht die finale Schlacht sich entfalten. Elend hält seine Rede an die Seher und führt sie in den Angriff gegen die Koloss-Armee. Stundenlang verbrennt Elend ein Vermögen an Atium — dann sieht Kelsier ihn in unmöglichem Glanz erstrahlen, Duralumin und Atium zusammen brennend in einem letzten gottgleichen Augenblick der Einsicht. Elend rammt sein Schwert in Marshs Hals, während die Axt seine Brust trifft. Er stirbt lächelnd. Dann greift Vin an — Bewahrung schlägt Ruin mit einer Wut, die kein Splitter überleben sollte. Ati und Vin sterben beide.',
			},
			'hoa-82': {
				title: 'Das Jenseits',
				description:
					'Kelsier erwägt, beide Splitter selbst zu nehmen. Dann erscheint Elend im Kognitiven Reich — dann Vin. Sie umarmen sich, endlich vereint. Ati kommt als nächstes und Kelsier schlägt ihn. Gemeinsam sehen sie zu, wie Sazed sowohl Bewahrung als auch Ruin ergreift und zu Harmonie wird. Sazed bietet an, Vin zurückzuschicken, aber sie weiß, dass das nicht funktionieren wird. Sie will mit Elend weitergehen. Vin dankt Kelsier für alles und folgt Elend ins Jenseits.',
			},
			'hoa-83': {
				title: 'Die Wahl des Überlebenden',
				description:
					'Die Welt wird zerstört und wiedergeboren. Während des Catacendre sieht Kelsier alle drei Reiche gleichzeitig. Als es endet, ist er wieder im Kognitiven Reich gefangen. Sazed (Harmonie) besucht ihn und gibt zu, dass er Vin und Elend nicht aus dem Jenseits zurückholen kann. Kelsier bittet ihn, Spook zu heilen und ihn zum Nebelgeborenen zu machen. Als Sazed sagt, es gebe keinen Weg zurück ins Physische Reich, beschließt Kelsier, dass Harmonie ein schrecklicher Lügner ist — und beginnt zu intrigieren.',
			},
			'hoa-83.2': {
				title: 'Der Plan des Überlebenden',
				description:
					'Kelsier überzeugt Spook, mit Häm Alurgie zu experimentieren — sowohl um Spooks Leben zu verlängern als auch um einen Weg für Kelsier zu finden, ins Physische Reich zurückzukehren. Der Überlebende von Hathsin hat nicht die Absicht, für immer ein Kognitiver Schatten zu bleiben.',
			},
		},
		vin: {
			...enData.movements.vin,
			// ── Kinder des Nebels ──────────────────────────────────────────
			'tfe-1': {
				title: 'Straßenkind',
				description:
					'Vin wird zu ihrem Bandenführer Camon gerufen, der rau mit ihr umgeht. Sie nutzt unbewusst ihr Glück — eine Form allomantischer Beschwichtigung — um ihn zu beruhigen. Camon gibt sich als Lord Jedue aus, ein verzweifelter Adliger auf der Suche nach neuen Verträgen, und plant den Betrug am Stahlministerium. Vin nutzt ihr Glück beim Obligator Prälat Laird, damit er Camons Bitten nicht abweist.',
			},
			'tfe-2': {
				title: 'Der Ministeriumsbetrug',
				description:
					'Camon, als Lord Jedue, nimmt Vin zum Kanton der Finanzen, um das Ministerium zu betrügen. Vin nutzt ihr Glück beim Hohen Prälat, der Camon dreitausend Boxings gibt. Kelsier und Dockson im Warteraum bemerken Vins allomantische Pulse. Danach sehen sie einen Stahlinquisitor, der Camons Gefolge verfolgt.',
			},
			'tfe-4': {
				title: 'Angeworben',
				description:
					"Kelsier stellt der Bande in Clubs' Schreinerei seinen Plan zum Sturz des Letzten Imperiums vor. Die Bande stimmt zu — außer Clubs, der geht, aber schließlich zurückkehrt. Kelsier enthüllt, dass Vin Nebelgeborene ist, und erzählt vom Elften Metall.",
			},
			'tfe-7': {
				title: 'Nebelgeborenen-Training',
				description:
					'Kelsier nimmt Vin zu ihrer ersten Trainingsnacht mit und gibt ihr einen Nebelmantel. Er lehrt sie die acht Grundmetalle — Zinn, Zinn, Eisen, Stahl, Zink, Messing, Kupfer und Bronze — und beendet die Nacht an der Stadtmauer von Luthadel.',
			},
			'tfe-8': {
				title: 'Das Renoux-Anwesen',
				description:
					"Vin und Kelsier klettern über die Mauern von Luthadel in die Nacht, wo Vin zum ersten Mal einem Nebelgeist begegnet. Auf der Hauptstraße wartet Sazed mit einer Kutsche und bringt sie nach Fellise. Unterwegs bietet Kelsier Vin die dreitausend Boxings und die Möglichkeit zu gehen. Sie nimmt das Geld, bleibt aber, weil sie sehen will, wie es ausgeht. Auf Lord Renoux' Anwesen schlägt Renoux vor, dass Vin die Rolle von Lady Valette spielen soll.",
			},
			'tfe-9': {
				title: 'Training mit Sazed',
				description:
					'Vin und Kelsier kämpfen in einem Übungskampf auf dem Renoux-Anwesen. Danach lässt sich Vin die Haare schneiden und wird von Sazed über ihre adlige Tarnung geprüft, der ihr auch vom Trelagismus erzählt — der fünften Religion, die er ihr vorschlägt. Kelsier und Sazed sprechen anschließend privat über Vins Fortschritte; Kelsier erklärt, dass sie am Ende der Woche einen Ball in der Festung Wager besuchen wird.',
			},
			'tfe-10': {
				title: 'Zurück bei der Bande',
				description:
					'Vin kehrt von Fellise nach Luthadel zurück, um von den Nebellingen der Bande über Metalle zu lernen, angefangen mit Breeze, der ihr das Beschwichtigen beibringt. Hammond kommt und debattiert die Moral des Imperiumssturzes, während sie auf Kelsiers Rede warten.',
			},
			'tfe-10.2': {
				title: 'Die Versammlung im Lagerhaus',
				description:
					"Vin besucht eine geheime Versammlung im Lagerhausviertel, wo Kelsier Skaa-Arbeitern die Revolution predigt, während Breeze und seine Beschwichtiger und Aufwiegler die Menge beeinflussen. Danach hält Kelsier eine Lagebesprechung in Clubs' Laden. Vin und Lestibournes sprechen über Marsh. Die Besprechung endet, als ein Soldat Hammonds meldet, dass das Stahlministerium Camons alten Unterschlupf entdeckt hat.",
			},
			'tfe-11': {
				title: 'Das Massaker in Camons Unterschlupf',
				description:
					'Vin und die Bande untersuchen den zerstörten Unterschlupf und finden überall Leichen. Unter ihnen bemerkt Vin Ulef — jemandem hat ihm den Brustkorb mit bloßen Händen aufgerissen. Sazed rezitiert ein Gebet der Cazzi-Religion. Milevs Leiche wird gefesselt auf einem Stuhl gefunden, offensichtlich gefoltert. Nach dem Verlassen findet Kelsier Camons Leiche an einem Haken durch den Mund aufgehängt.',
			},
			'tfe-12': {
				title: 'Erster Ball in der Festung Wager',
				description:
					'Vin fährt zu ihrem ersten Ball in der Festung Wager, Sazed lenkt die Kutsche. Kelsier schaut unterwegs vorbei, gibt Vin Ratschläge und springt zurück in die Nebel. Vin kommt an und wird als Lady Valette Renoux vorgestellt. Beim Abendessen sieht sie ihren Vater auf der anderen Seite des Raums. Sie lehnt Tanzeinladungen ab und zieht sich auf einen Balkon im oberen Stockwerk zurück, wo sie ihr erstes Gespräch mit Elant Wager führt, was Sazed schockiert.',
			},
			'tfe-13': {
				title: 'Rückkehr nach Fellise',
				description:
					'Sazed befragt Vin über ihre Begegnung mit Elant auf dem Renoux-Anwesen. Vins wahre Persönlichkeit beginnt hervorzutreten — weder das scheue Bandenmitglied noch Lady Valette. Kelsier erfährt, dass Vins Vater auf dem Ball war, und verschwindet wieder in den Nebeln.',
			},
			'tfe-14': {
				title: 'In Kredik Shaw',
				description:
					'Kelsier führt Vin nach Kredik Shaw, und sie kämpfen sich zum Gebäude vor, das der Oberste Herrscher alle drei Tage besucht. Vin tötet zum ersten Mal. Drei Stahlinquisitoren greifen an. Um sich gegen geschliffene Metalldreiecke zu verteidigen, die auf sie Gestoßen werden, greift Vin ein Lederbuch. Mit brennendem Atium gelingt eine vorübergehende Flucht, bevor ein Inquisitor ihr eine Obsidianaxt in die Seite rammt. Vin entkommt, aber als sie das Bewusstsein verliert, lenkt etwas den verfolgenden Inquisitor ab und nimmt sie in einen schützenden Arm — es war nicht Kelsier.',
			},
			'tfe-15': {
				title: 'Verwundet',
				description:
					'Die Bande streitet über Kelsiers Entscheidung, Vin nach Kredik Shaw mitzunehmen. Bevor sie suchen können, trifft Sazed mit Vin auf dem Arm ein. Sie bekommt Zinn zur Heilung. Sazed operiert sie und Ham trägt sie zur Genesung in ein Zimmer. Kelsier und Dockson bemerken das Lederbuch; Sazed identifiziert es als in Khlennisch geschrieben.',
			},
			'tfe-16': {
				title: "Genesung in Clubs' Laden",
				description:
					"Vin erwacht nach zwei Wochen Ruhe in Clubs' Laden. Spukie hat an ihrem Bett gewacht und erzählt ihr, wie Kelsier ihm seinen Spitznamen gab. Im Gespräch mit Dockson erkennt Vin, dass an Sazed etwas sehr Ungewöhnliches ist.",
			},
			'tfe-16.2': {
				title: 'Rückkehr nach Fellise',
				description:
					'Nach einigen weiteren Tagen Ruhe kehrt Vin zum Renoux-Anwesen in Fellise zurück. Sie spricht mit Sazed, der erklärt, was Hüter sind, und enthüllt, dass alle terrisischen Verwalter Eunuchen sind.',
			},
			'tfe-17': {
				title: 'Der Garten des Anwesens Renoux',
				description:
					'Vin beklagt vier Wochen langweiliger Genesung auf dem Renoux-Anwesen. Bandenmitglieder kommen, um Neuigkeiten zu besprechen. Vin überzeugt Kelsier, sie zum nächsten Ball gehen zu lassen. Später sprechen Vin und Kelsier über Mare, seine Beweggründe, und er erklärt das Schnappen — das traumatische Ereignis, das allomantische Kräfte erweckt.',
			},
			'tfe-18': {
				title: 'Ball in der Festung Elariel',
				description:
					'Vin besucht einen Ball in der Festung Elariel mit Sazed. Elant Wager setzt sich an ihren Tisch und liest wie üblich. Er lobt ihr Kleid und lässt ihr die Kinnlade herunterklappen. Sie tanzt mit verschiedenen Adligen und fragt nach Elant; sie erfährt von Lady Shan Elariels Gerede. Nach viel Tanzen muss Vin sich mit Shan treffen. Dabei bemerkt sie, dass Shan beschwichtigen kann. Vins Terrisaner durchstöbert Elants Bücher an ihrem Tisch; Vin kehrt zurück und blättert ein fast staatsgefährdendes Büchlein durch. Elant kehrt zurück, sammelt seine Bücher und geht mit zwei Freunden. Sazed identifiziert sie als Jastes Lekal und einen Hasting. Beim Verlassen des Balls sieht Vin, wie ein Stadtwächter in den Nebeln einem jungen Skaa-Küchengehilfen die Kehle durchschneidet.',
			},
			'tfe-19': {
				title: 'Zurück in Fellise',
				description:
					'Kelsier kehrt über den Dornenpfad zum Anwesen Renoux zurück und trifft sich mit Vin, Sazed und Renoux. Er predigt Vin über Adlige, besteht darauf, dass sie sich nicht um Skaa kümmern und sie sich von Elant Wager fernhalten soll.',
			},
			'tfe-20': {
				title: 'Sucherinnen-Unterricht',
				description:
					'Vin kehrt von Luthadel zurück und sieht Waffenkisten vor dem Renoux-Anwesen, bereit für die Rebellion. Kurz darauf trifft Marsh ein und lehrt sie das Suchen — Bronze nutzen, um andere Allomanten zu erspüren — sowie weitere Allomantie-Details.',
			},
			'tfe-22': {
				title: 'Das Tagebuch',
				description:
					'Vin liest ihre Kopie des Tagebuchs des Obersten Herrschers auf dem Renoux-Anwesen, als Spukie eintrifft. Er gibt ihr ein Taschentuch — Sazed erklärt später, dass ein junger Mann damit seine ernste Zuneigung signalisiert. Während sie auf Dockson wartet, spricht Vin mit Sazed über den Terrisaner im Tagebuch; Sazed enthüllt die Geheimnisse der Feruchemie und die Gründung der Hüter. Vin spricht dann mit Dockson, der erzählt, wie Lord Devinshae die Frau, die er liebte, nahm und am nächsten Morgen tötete.',
			},
			'tfe-23': {
				title: 'Ball in der Festung Hasting',
				description:
					'Vin besucht einen Ball in der Festung Hasting und hört erfreut, dass Kelsiers Bemühungen, Spannungen zu schüren, Wirkung zeigen. Lady Shan bittet Vin, Elants Bücher beim nächsten Mal zu durchsuchen. Vin findet Elant und fragt ihn, ob er mit einer Skaa geschlafen hat. Er beichtet, dass sein Vater ihn mit dreizehn dazu zwang; die Frau wurde danach getötet, aber er tat es nie wieder. Elant gibt Vin ein Taschentuch. Nach dem Abgang mit seinen Freunden folgt Vin ihnen mit Allomantie zu einem Turm, wo sie die Fehler des Obersten Herrschers diskutieren. Kelsier erscheint plötzlich und tut die Ideen der Gruppe als typischen jugendlichen Idealismus ab.',
			},
			'tfe-24': {
				title: 'Bandentreffen',
				description:
					"Vin und Kelsier kommen in Clubs' Laden an, wo der Großteil der Bande versammelt ist. Kelsier bespricht den Stand der Mission und Vin erkennt, wie sehr sie ihr neues Leben liebt — nicht länger im Schatten versteckt. Kelsier, Spukie, Ham und Clubs teilen einen späten Trunk.",
			},
			'tfe-24.2': {
				title: 'Garnisonbesuch',
				description:
					'Vin zieht Straßenkleidung an und geht mit Ham zur Garnison von Luthadel, um über Zinn zu lernen. Ham erklärt, dass viele Soldaten gewöhnliche Skaa sind. In der Garnison erfahren sie von einem Wächter namens Sertes, dass die Garnison mobilisiert wird — eine Skaa-Rebellion hat die Garnison von Holstep im Norden angegriffen.',
			},
			'tfe-25': {
				title: 'Dringende Nachrichten',
				description:
					"In Clubs' Laden bringt Ham die Nachricht, dass die Garnison von Luthadel nach Norden zu Holstep marschiert. Kelsier lässt Vin fünf Zinnperlen schlucken, damit sie nach Norden laufen können, um die Rebellenarmee zu warnen.",
			},
			'tfe-25.2': {
				title: 'Der Zinnlauf',
				description:
					'Vin und Kelsier laufen sechzehn Stunden lang in einem verzweifelten Zinnlauf. Sie stoßen auf die Überreste der Rebellenarmee, umzingelt und abgeschlachtet von der Garnison Valtroux. Kelsier will kämpfen, aber Vin überzeugt ihn, dass sie nicht unbesiegbar sind. Sie eilen zu den Arguois-Höhlen, wo 2.000 Soldaten dank Mennis überlebt haben.',
			},
			'tfe-26': {
				title: 'Erholung',
				description:
					"Vin liegt erschöpft im Bett in Clubs' Laden. Sie brauchten zwei Wochen, um nach Luthadel zurückzukehren. Kelsier platzt herein, Breeze gibt ihm die Schuld an Ruhmsucht. Kelsier gibt den Verlust als Rückschlag zu, weigert sich aber aufzugeben.",
			},
			'tfe-26.2': {
				title: 'Die Hinrichtungen',
				description:
					'Spukie kündigt Hinrichtungen am Brunnenplatz an. Die Bande geht dorthin und besticht jemanden für Dachzugang. Vin identifiziert ihren Vater gegenüber Kelsier — einen Obligator namens Tevidian, Lord Prälat und ranghöchster Obligator, sogar über den Inquisitoren. Sie sehen zu, wie Frauen und Kinder aus einem Gefangenenwagen gezerrt und hingerichtet werden, der Brunnen rot vor Blut. Kelsier sagt: „Das ist unser Feind. Es gibt hier kein Erbarmen, kein Umkehren."',
			},
			'tfe-27': {
				title: 'Die nächsten Schritte planen',
				description:
					"Die Bande kehrt in Clubs' Laden zurück. Kelsier, Vin und die anderen planen neu, wie sie vorankommen und einen Häuserkrieg unter dem Adel beginnen. Sazed kommt mit einem Brief von Marsh und Anweisungen zum Treffpunkt.",
			},
			'tfe-27.2': {
				title: 'Treffen mit Marsh',
				description:
					'Kelsier und Vin gehen zu einem verlassenen Gebäude in den Windungen, um Marsh zu treffen. Während sie warten, spricht Kelsier über Gold — das neunte allomantische Metall. Marsh trifft ein mit den Tätowierungen eines niedrigrangigen Obligators des Kantons der Inquisition. Er enthüllt, dass das Ministerium Beschwichtiger in Skaa-Regionen unter ständiger Beschwichtigung platziert, verborgen durch Raucher. Marsh bestätigt auch, dass Inquisitoren an Altersschwäche sterben können.',
			},
			'tfe-28': {
				title: 'Ball in der Festung Lekal',
				description:
					'Vin besucht einen Ball in der Festung Lekal und beginnt Gerüchte zu streuen, um die Häuserkriege zu entfachen. Sie tratscht mit Lady Kliss. Elant überrascht sie — er sagt, er will sie küssen, aber Vin besteht darauf, dass er sie nicht wirklich kennt. Sie machen einen Spaziergang und Elant enthüllt, dass das Vermögen von Haus Wager vollständig aus dem Atium-Abbau in den Gruben von Hathsin stammt. Er erwähnt auch, dass die Tekiel von Haus Hasting getötet wurden, und versucht Valette zu überzeugen, Luthadel zu verlassen.',
			},
			'tfe-29': {
				title: 'Die letzte Übersetzung',
				description:
					'Vin liest die letzte Tagebuch-Übersetzung von Sazed im Anwesen Renoux und ist enttäuscht, dass es keine weiteren gibt. Sazed erklärt Feruchemie ausführlicher und Vin versucht, einen seiner Zinngeister zu verbrennen. Später stößt Kelsier dazu, um eine Karte von Marsh durchzugehen. Sie entdecken, dass Therons Bande angegriffen wurde, und Vin vermutet, dass die Inquisitoren ihr noch nachspüren.',
			},
			'tfe-30': {
				title: 'Der Wager-Ball',
				description:
					'Vin besucht den letzten Hausball in der Festung Wager mit Sazed. Lady Kliss entpuppt sich als Informantin und versucht Haus Renoux zu erpressen. Im Tausch für eine Saphirkette verrät Kliss, dass Elariel-Attentäter Elant an diesem Abend töten wollen. Vin erzwingt allomantisch den vollständigen Plan. Sie zerschlägt ein Glasfenster, um aus der Festung zu fliehen. Draußen kämpft sie gegen zwei Schläger, zwei Münzwerfer und zwei Nebelgeborene — eine davon ist Shan Elariel. Vin überlistet Shan, indem sie ihr Atium früher erlöschen lässt, und tötet sie.',
			},
			'tfe-31': {
				title: 'Nach dem Duell',
				description:
					"Vin stürmt verbunden und zerschlagen in Clubs' Küche. Kelsier schilt sie, weil sie Elant gerettet hat, aber Vin schreit zurück, dass Skaa und Adlige nicht verschieden sind — Elant ist ein guter Mensch. Auf dem Dach erzählt Vin Kelsier von Haus Wagers Verwaltung der Gruben und ihrer Theorie, dass Inquisitoren durch Kupferwolken sehen können. Kelsier testet die Theorie und bestätigt sie — eine wichtige Entdeckung.",
			},
			'tfe-32': {
				title: 'Aufklärung vom Dach',
				description:
					"Vin und Spukie halten Aussicht vom Dach über Clubs' Laden. Spukie bringt Vin Tricks mit Zinn bei: Es geht nicht nur ums Schärfen der Sinne, sondern ums Filtern von Ablenkungen. Später finden Kelsier und Vin Marshs Leiche — ausgeblutet, eine leblose Hülle. Sie entdecken einen Brief, der erklärt, die Inquisitoren würden ihn wohl finden.",
			},
			'tfe-33': {
				title: 'Der Ausweichunterschlupf',
				description:
					"Die Bande zieht in einen feuchten Reservekeller nahe Clubs' Laden um — nur drei Räume. Kelsier verkündet, er habe alles Atium in den Gruben zerstört. Spukie hält als Zinnling Wache.",
			},
			'tfe-33.2': {
				title: 'Der Kampf mit dem Inquisitor',
				description:
					'Alle folgen Kelsier zum Brunnenplatz. Sie sehen Spukie und Lord Renoux in einem der Hinrichtungskarren. Kelsier kämpft gegen einen Inquisitor auf dem Platz. Elant sieht die Renoux-Diener eingesperrt und ruft nach Valette, findet sie aber nicht.',
			},
			'tfe-34': {
				title: 'Der Tod des Überlebenden',
				description:
					'Kelsier kämpft gegen den Inquisitor auf Leben und Tod am Brunnenplatz, beide verbrennen Atium. Vin beobachtet von oben — Kelsier ist ein wahrer Meister von Stoßen und Ziehen. Er tötet den Inquisitor und die Skaa rufen „Der Überlebende von Hathsin." Der Oberste Herrscher kommt in einer schwarzen Kutsche. Kelsier wird erschlagen. Vin springt herunter und hält ihn, während er stirbt.',
			},
			'tfe-35': {
				title: 'Das Vermächtnis des Überlebenden',
				description:
					'Vin kehrt zum Ausweichunterschlupf zurück. Sie ist wütend, dass Kelsier nicht ehrlich war — er hatte geplant zu sterben und sie zurückzulassen. Sazed bietet tröstende Worte. Draußen versammeln sich Skaa und sprechen vom Herrn der Nebel. In einem nahen Lagerhaus sieht die Bande den Kandra in Kelsiers Gestalt. Kelsier hinterließ Briefe mit Anweisungen zur Einnahme der Stadt. Vins Brief sagt, er habe das Elfte Metall nie gelöst. Sie beschließt herauszufinden, was der Oberste Herrscher verbirgt.',
			},
			'tfe-36': {
				title: 'In Kredik Shaw',
				description:
					'Vin geht leise auf Kredik Shaw zu und ermutigt die Wachen draußen, sich der Rebellion anzuschließen. Drinnen tötet sie zwei Inquisitoren und entdeckt, dass Zinnstaub ihre Sicht stört. In der nächsten Kammer sitzt ein alter Mann. Ein Inquisitor packt Vin am Hals — der alte Mann spricht, und die Inquisitoren nennen ihn den Obersten Herrscher. Aber Vin ist verwirrt: Der Oberste Herrscher am Brunnenplatz war ein junger Mann. Sie verbrennt das Elfte Metall und sieht zwei geisterhafte Gestalten neben dem alten Mann.',
			},
			'tfe-37': {
				title: 'Rettung und Offenbarung',
				description:
					'Die Inquisitoren zwingen Vin, ein Metall zu verbrennen, das alle anderen auslöscht. Sie wird vor den Obersten Herrscher auf seinem Thron gebracht — die junge Version, der Mann, der Kelsier tötete. Tevidian, Vins Vater und höchstrangiger Obligator, wird von den Inquisitoren getötet. Vin erfährt, dass Reen sie nie verraten hat — er ertrug die Folter und sagte den Inquisitoren, sie sei längst verhungert. Sazed wird in ihre Zelle gebracht und bricht mit gespeicherter feruchemischer Kraft die Tür auf. Elant und sechs Soldaten stürmen herein. Vin findet ihren Nebelmantel und ein Metallfläschchen, schluckt es und tötet den restlichen Wächter. Elant weiß jetzt, dass Vin Nebelgeborene ist. Sie greift seinen Kopf und küsst ihn, dann geht sie, um den Obersten Herrscher zu töten.',
			},
			'tfe-38': {
				title: 'Bezwingerin des Obersten Herrschers',
				description:
					'Vin springt durch die Türme von Kredik Shaw zum Gipfel. Inquisitor Kar packt sie am Hals, aber ein zweiter Inquisitor nähert sich und zieht einen Metallnagel aus Kars Hals, tötet ihn sofort. Der zweite Inquisitor ist Marsh — lebendig, mit elf Nägeln im Körper. Er hat alle anderen Inquisitoren getötet. Der wahre Name des Obersten Herrschers ist Rashek — er ermordete den Helden der Zeitalter und nahm seinen Platz ein. Vin zieht die Metallarmbänder des Obersten Herrschers herunter. Ohne feruchemische Jugend wird er ein schwacher alter Mann. Sazed erscheint mit einer Metallflasche. Vin rammt einen Speer direkt durch das Herz des Obersten Herrschers. Tausend Jahre Unterdrückung enden.',
			},
			'tfe-39': {
				title: 'Eine neue Ära',
				description:
					'Sazed, Marsh und Vin stehen auf einem Gebäude am Rand der Skaa-Siedlung. Sazed erklärt, dass der Oberste Herrscher sowohl Feruchemist als auch Allomant war — die Armbänder speicherten seine Jugend. Marsh beschreibt seine Überlebens- und Verwandlungsgeschichte: elf Metallnägel, zwei durch die Augen, acht in der Brust, einer im Rücken. Er erzählt auch von den Kandra, aus Nebelgeistern evolvierten Kreaturen, die nun Vin als ihre Herrin sehen.',
			},
			'tfe-39.2': {
				title: 'Vin und Elant',
				description:
					'Vin beobachtet Elant heimlich aus den Nebeln vor der Festung Wager. Nach einer gewaltigen Rede akzeptierten alle ihn als König. Elant schreibt das neue Gesetzbuch. Vin erinnert sich, dass Reen sie nie verraten hat, und rennt zu Elant — sie halten einander.',
			},
			'woa-1': {
				title: 'Stadtwächterin',
				description:
					'Vin patrouilliert jede Nacht auf den Mauern Luthadels und hält Ausschau nach Bedrohungen, während drei Armeen langsam auf die neu befreite Stadt zumarschieren.',
			},
			'woa-2': {
				title: 'Hinterhalt im Nebel',
				description:
					'Vin wird von acht Allomanten südlich der Festung Venture nahe Kredik Shaw überfallen. Ein geheimnisvoller Nebelgeborener — der Wächter — greift ein und hilft ihr, sie zu töten oder zu vertreiben. Sie vermutet, dass die Attentäter von einer der Belagerungsarmeen geschickt wurden.',
			},
			'woa-3': {
				title: 'Der Nebelgeist',
				description:
					'Vin beobachtet die Festung Venture von einem Dach und begegnet dem Nebelgeist — einer durchscheinenden Gestalt, die auf etwas Unsichtbares zeigt. Sie kehrt in Elants Arbeitszimmer zurück, wo Ham mit der Nachricht eintrifft, dass die Attentäter wahrscheinlich von König Cett geschickt wurden.',
			},
			'woa-5': {
				title: 'OreSeur wiedergeboren',
				description:
					'Vin geht über den Kenton-Straßenmarkt und kauft einen Wolfshund, den sie OreSeur dem Kandra als neuen Körper gibt. Sie entdeckt ein neues allomantisches Metall — Duralumin — und kehrt zur Festung Venture zurück, um seine Macht zu testen.',
			},
			'woa-6': {
				title: 'Trainingskampf im Hof',
				description:
					'Vin trainiert mit Ham im Hof der Festung Venture und testet ihre Kampffähigkeiten, während OreSeur in seiner neuen Wolfshund-Form zusieht. Spook kehrt von seiner Erkundungsmission zurück.',
			},
			'woa-8': {
				title: 'Den Wächter jagen',
				description:
					'Vin patrouilliert Luthadel und jagt den Wächter — den geheimnisvollen Nebelgeborenen — über die Dächer der Stadt. Die Jagd endet nahe dem Brunnenplatz, wo sie mit dem Brennen von Duralumin experimentiert und dessen verheerende Verstärkungswirkung entdeckt.',
			},
			'woa-10': {
				title: 'Die Versammlung bewachen',
				description:
					'Vin und Ham bewachen Elant, als er zur Versammlung spricht. Eine unbekannte Terriserin ist im Publikum. Während der Sitzung trifft die Nachricht ein, dass eine zweite Armee — König Cetts Streitkräfte — vor Luthadel erschienen ist.',
			},
			'woa-11': {
				title: 'Breeze retten',
				description:
					'Vin schließt sich Elant und Clubs auf der Stadtmauer an, um Cetts Armee auszukundschaften. Als Breeze unten in Gefahr gerät, rettet Vin ihn mit einem duraluminverstärkten Stahlstoß — und schleudert eine Münze mit furchterregender Kraft.',
			},
			'woa-13': {
				title: 'Der Geist kehrt zurück',
				description:
					'Vin bemerkt, dass die Nebel jeden Abend früher kommen und sucht den Nebelgeist, den sie in einem verlassenen Wohnblock findet. Später versammelt Elant die Bande zu einem Kriegsrat, und Tindwyl bittet um eine private Audienz.',
			},
			'woa-14': {
				title: 'Tindwyl kommt an',
				description:
					'Tindwyl beginnt, Elant in der Festung Venture in der Königsherrschaft zu unterrichten. Vin misstraut der energischen Terriserin, aber sieht Elant sich langsam unter ihrer Anleitung verändern.',
			},
			'woa-16': {
				title: 'Die Tagebuchsuche',
				description:
					'Vin nimmt Alendis Tagebuch in der Festung Venture auseinander und sucht nach Hinweisen auf den Nebelgeist und die Tiefe. Sie glaubt, dass die Kreatur, die ihr folgt, dieselbe ist, die Alendi vor Jahrhunderten folgte.',
			},
			'woa-17': {
				title: 'Duell mit dem Wächter',
				description:
					'Nachdem sie Straffs Boten getroffen hat — Zane, den Wächter — geht Vin mit OreSeur auf Patrouille. Sie konfrontiert Zane und sie liefern sich einen erbitterten Stahlstoß-Wettkampf an der Festung Hasting. Zane sagt ihr, dass Nebelgeborene in die Nebel gehören, nicht zu Adligen.',
			},
			'woa-20': {
				title: 'Kriegsrat',
				description:
					'Vin beobachtet, wie Elant, Dockson, Hammond, Clubs und Breeze den Plan zur Verhandlung mit Straff besprechen. Sie nutzt Bronze, um Breeze als Kandra-Hochstapler-Verdächtigen auszuschließen. Lord Cetts Tochter Allrianne kommt und sucht Asyl und Breeze.',
			},
			'woa-21': {
				title: 'Allriannes Ankunft',
				description:
					'Allrianne Cett erreicht den Palast und umarmt Breeze zur Überraschung aller. Elant bietet ihr Gastfreundschaft an. Dockson schlägt vor, Allrianne als Druckmittel gegen Lord Cett einzusetzen.',
			},
			'woa-22': {
				title: 'Politische Spannungen',
				description:
					'Während die Belagerung enger wird, sieht Vin Elant mit der Versammlung und den Anforderungen des Regierens kämpfen, während sie Zane durch die Nebel jagt.',
			},
			'woa-24': {
				title: 'Nachtwache',
				description:
					'Vin steht Wache vor Elants Balkon und brennt Bronze, wobei sie den Nebelgeist und eine entfernte allomantische Kraftquelle entdeckt. Zane findet sie an der Festung Venture und fordert sie heraus.',
			},
			'woa-25': {
				title: 'Einkaufen und Scharmützel',
				description:
					'Tindwyl nimmt Vin zum Kleiderkauf auf der Kenton-Straße mit, zusammen mit Allrianne, Spook und OreSeur. Warntrommeln ertönen. Straffs Armee startet einen Scheinangriff auf die Stadtmauern und Vin eilt zur Verteidigung.',
			},
			'woa-26': {
				title: 'Verhandlung mit Straff',
				description:
					'Vin begleitet Elant zu Straff Ventures Kriegslager nördlich der Stadt, wo sie ihre furchterregende Macht demonstriert, um den Möchtegern-Eroberer einzuschüchtern.',
			},
			'woa-27': {
				title: 'Der Bluff',
				description:
					'Während Vin von außerhalb des Zelts zuhört, droht Straff, Elant während der Verhandlung zu töten. Zane erscheint. Vin und Elants Bluff gelingt. Straff lässt sie gehen. Auf dem Rückweg erhält Elant eine Nachricht: Die Versammlung hat das Misstrauen ausgesprochen und er ist nicht mehr König.',
			},
			'woa-28': {
				title: 'Rückkehr von der Verhandlung',
				description:
					'Nach der angespannten Begegnung in Straffs Lager kehrt Vin zur Festung Venture zurück, verfolgt von Zanes Flüstern und ihren wachsenden Zweifeln an ihrer Rolle.',
			},
			'woa-29': {
				title: 'Schlaflosigkeit und Einsicht',
				description:
					'Vin und OreSeur sitzen in der Festung Hasting im nächtlichen Nebel. Sie diskutieren Zanes Charakter und Vins wachsende Schlaflosigkeit. Vin hat einen Geistesblitz über die wahre Natur der Tiefe.',
			},
			'woa-30': {
				title: 'Die Tiefe-Theorie',
				description:
					'Vin betritt die Festung Venture durch Sazeds Fenster und liest seine Abschrift der Konventikel-Abriebe. Sie schlägt vor, dass die Nebel die Tiefe sind — dass dauerhafte Tagesnebel eine Hungersnot verursachen könnten. Sie sagt Sazed, sie habe dieselbe Kreatur gesehen, die dem Helden der Zeitalter folgte.',
			},
			'woa-31': {
				title: 'Penrods Nominierung',
				description:
					'Vin begleitet Elant und die gesamte Bande zur Versammlung. Elant nominiert Lord Penrod als Kanzler und beruft sich auf Kelsiers Vermächtnis durch Vin als Abschreckung gegen Straff. Nominierungen für einen neuen König werden eröffnet — Penrod, Elant und Lord Cett.',
			},
			'woa-33': {
				title: 'Kandra-Geheimnisse',
				description:
					'Vin fragt sich, ob sie die wahre Heldin der Zeitalter ist und diskutiert die vagen terrisischen Prophezeiungen mit OreSeur. Er verrät versehentlich, dass die Kandra ihre eigene Religion haben, die der Erhebung des Obersten Herrschers vorausgeht. Vin untersucht Dockson in der Palastbibliothek.',
			},
			'woa-34': {
				title: 'Zane auf dem Dach',
				description:
					'Vin findet Elant und die Bande bei der Recherche zur Versammlungsstrategie. Als sie draußen ein Geräusch hört, untersucht sie und findet Zane auf dem Dach. Er greift sie an und offenbart, dass er Atium brennt. Er stoppt und sagt ihr, dass Straff will, dass er sie tötet, dass er Elants Halbbruder ist und dass die Koloss einen Tag vor Luthadel stehen.',
			},
			'woa-35': {
				title: 'Abendessen mit Cett',
				description:
					'Vin probiert ihr neues maßgeschneidertes Nebelgeborenen-Kleid an. Sie und Elant gehen zum Abendessen mit Lord Cett in die Festung Hasting. Cett legt seine Pläne für Luthadel dar und bietet Nahrung im Tausch gegen das Atium-Versteck, aber Elant sagt, es sei nicht gefunden worden.',
			},
			'woa-36': {
				title: 'Die Kirche des Überlebenden',
				description:
					'Vin beobachtet Allrianne, wie sie mit Allomantie Breezes Gefühle aufwühlt. Sie folgt Hauptmann Demoux durch den Palasthof und entdeckt, dass er heimlich die Kirche des Überlebenden anführt — und predigt, dass Vin die Welt wiederherstellen wird. Sie stellt ihn zur Rede, verspricht aber, sein Geheimnis zu bewahren.',
			},
			'woa-38': {
				title: 'Wahl und Attentat',
				description:
					'Vin und Elant nehmen an der Versammlung zur Königswahl teil. Elant enthüllt, dass er der Kirche des Überlebenden beigetreten ist. Attentäter greifen an — Vin kämpft gegen sechs von Straff gesandte Allomanten, schwer verletzt, aber sie tötet alle Angreifer mit OreSeurs Hilfe. Die Versammlung wählt Penrod zum König.',
			},
			'woa-40': {
				title: 'Genesung',
				description:
					'Vin erwacht in einem Krankenbett in der Festung Venture mit Elant an ihrer Seite. Er sagt ihr, dass Penrod nun König ist und zuckt zurück, als sie ihn berührt. Zane besucht sie im Schlaf und hinterlässt ihr ein Atium-Klümpchen. OreSeur kehrt mit einem neuen Hundekörper zurück, und Vin entdeckt, dass sie Kandra mit duraluminverstärktem Messing kontrollieren kann.',
			},
			'woa-43': {
				title: 'Überfall auf Cett',
				description:
					'Zane erzählt Vin, dass Demoux Elant in Cetts Auftrag verrät. Vin und Zane starten einen verheerenden Angriff auf die Festung Hasting. Sie erreichen Cett und seinen Sohn, aber Vin bittet um Gnade. Zane sagt, sie sei noch immer kontrolliert und geht. Cetts Armee zieht sich aus Luthadel zurück.',
			},
			'woa-44': {
				title: 'Camons Versteck',
				description:
					'Nachdem sie Cetts Armee vertrieben hat, versteckt sich Vin in Camons altem Unterschlupf. Sie spricht von den getöteten Soldaten und wie sie ihren Ohrring bekam. Sie sagt Elant, sie müsse Luthadel verlassen und nach Norden nach Terris gehen, und gibt OreSeur das Atium-Klümpchen.',
			},
			'woa-45': {
				title: 'Rat über die Liebe',
				description:
					'Vin besucht Sazed, um Rat über die Liebe zu bitten — ob sie mit Elant oder jemandem wie ihr selbst zusammen sein sollte. Sazed glaubt, sie seien füreinander bestimmt und beschließt, dafür zu sorgen, dass sie Luthadel verlassen, bevor es fällt.',
			},
			'woa-46': {
				title: 'Die Kammer des Obersten Herrschers',
				description:
					'Vin geht in die geheime Kammer in Kredik Shaw, wo der Oberste Herrscher einst Zeit allein verbrachte. Sie ist sich nicht sicher, warum sie gekommen ist, spürt aber das ferne Pochen des Brunnens der Erhebung, der seine Macht wiederherstellt.',
			},
			'woa-47': {
				title: 'Duell mit Zane',
				description:
					'Zane versucht Vin zu überzeugen, Luthadel mit ihm zu verlassen, aber sie wählt Elants Vertrauen statt Freiheit. Wütend greift Zane an. OreSeur ignoriert Vins Befehle — Zane enthüllt, dass der Kandra TenSoon ist. Vin nutzt Messing-Duralumin, um TenSoons Kontrolle zu übernehmen, nimmt das Atium-Klümpchen und nutzt Zanes Abhängigkeit von Atium aus, um seine Voraussicht zu täuschen, und ersticht ihn.',
			},
			'woa-49': {
				title: 'Flucht durch das Zinntor',
				description:
					'Vin, Elant und Spook verlassen Luthadel durch das Zinntor. Außerhalb der Mauern versucht eine Gruppe von Straffs Bogenschützen, sie abzufangen, aber Vin kämpft sie im Nebel nieder.',
			},
			'woa-50': {
				title: 'Lager abbrechen',
				description:
					'Einen Tag nördlich von Luthadel brechen Vin, Elant und Spook das Lager ab. Spook spürt etwas, das ihnen durch die Nebel folgt, und Vin erkennt es als den geheimnisvollen Nebelgeist, der sie seit Monaten verfolgt.',
			},
			'woa-51': {
				title: 'Jastes und die Wahrheit',
				description:
					'Vin erwacht und findet den Nebelgeist über Elant schwebend und sticht nach ihm. Spook meldet fünf Männer, die ihnen folgen — Jastes Lekal, der die Koloss im Stich gelassen hat. Elant richtet seinen alten Freund hin. Spook enthüllt, dass Sazed sie hereingelegt hat, und Vin erkennt, dass der Brunnen der Erhebung in Luthadel ist. Sie kehren um.',
			},
			'woa-52': {
				title: 'Der Zinn-Sprint',
				description:
					'Vin rast allein nach Luthadel zurück in einem verzweifelten Zinn-Sprint, ihre Metalle bis ans Limit brennend und in der Angst, zu spät zu kommen, während die Koloss die Stadt angreifen.',
			},
			'woa-53': {
				title: 'Vin rettet Sazed',
				description:
					'Vin erreicht Luthadel, nachdem sie Hufeisen in einem Außendorf für einen improvisierten Nebelgeborenen-Stachelweg gesammelt hat. Sie kommt genau in dem Moment an, als Sazed am Tor überwältigt zu werden droht, und die zusehenden Skaa beginnen zu skandieren, als sie die umstehenden Koloss mit einem einzigen allomantischen Stoß zerschmettert.',
			},
			'woa-54': {
				title: 'Die Koloss kontrollieren',
				description:
					'Fast ohne Zinn und unfähig, die Koloss allein zu besiegen, versucht Vin einen letzten Duralumin-Stoß und entdeckt, dass sie die Kontrolle über die Kreaturen übernehmen kann. Sie bringt ihre kontrollierten Koloss zur Festung Hasting und befiehlt Lord Penrod, Soldaten zum Schutz der Bürger zu entsenden.',
			},
			'woa-55': {
				title: 'Straff besiegen',
				description:
					'Vin schießt mit einem duraluminverstärkten Stahlstoß aus der Stadt, streckt Straff und sein Pferd nieder und mäht dann seine Offiziere nieder. Mit Cetts Armee, die sich der Schlacht anschließt, zwingt sie Penrod, Cett und General Janarle, Elant als Kaiser zu akzeptieren.',
			},
			'woa-57': {
				title: 'Die geheime Tür',
				description:
					'Vin sagt Sazed, dass der Brunnen der Erhebung in Luthadel ist und sie seinen Zug spüren kann. Nachdem Elant zurückgekehrt und zum Kaiser ernannt wurde, führt sie ihn, Hammond und Spook nach Kredik Shaw, wo sie eine verborgene allomantische Tür mit einem Duralumin-Zug öffnet und den Abstieg beginnt.',
			},
			'woa-58': {
				title: 'Der Brunnen entdeckt',
				description:
					'Vin, Elant, Hammond und Spook steigen in eine riesige Höhle unter Kredik Shaw hinab und finden ein leuchtend weißes Becken — den Brunnen der Erhebung. Während Vin zögert, erscheint der Nebelgeist und durchbohrt Elants Bauch, ihn tödlich verwundend.',
			},
			'woa-59': {
				title: 'Die Macht freigesetzt',
				description:
					'Mit dem sterbenden Elant an ihrer Seite betritt Vin das leuchtende Becken und nimmt die ungeheure Macht des Brunnens an sich. Eine Stimme sagt ihr, die tötenden Nebel seien die zurückgekehrte Tiefe. Getäuscht durch Ruins Manipulation der Prophezeiungen gibt sie die Macht auf — und eine triumphierende Stimme verkündet: »Ich bin FREI!«',
			},
			'woa-60': {
				title: 'Auf der Stadtmauer',
				description:
					'Vin steht mit dem wiederhergestellten Elant auf der Stadtmauer von Luthadel. Sie gesteht, dass sie mit der Freisetzung der Macht einen katastrophalen Fehler gemacht hat — die dort gefangene Kreatur befreit hat. Elant versichert ihr, dass sie, was auch immer kommt, gemeinsam überleben werden.',
			},
			'hoa-3': {
				title: 'Das erste Versteck',
				description:
					'Vin öffnet die Vetitan-Lagerhöhle und findet Nahrung, Vorräte und eine Metallplatte mit einer kryptischen Botschaft des Obersten Herrschers über die Gefahr, die er einsperrte, und den Ort des nächsten Verstecks in Fadrex.',
			},
			'hoa-8': {
				title: 'Die Nebelkrankheit',
				description:
					'Vin sieht zu, wie die Nebel Flüchtlinge aus Vetitan angreifen und eine vorhersagbare Anzahl erkranken lassen. Fatren glaubt es nicht, aber Elant argumentiert, dass die Exposition zur Immunisierung notwendig ist. Vin befragt ihren Koloss Human zur Fortpflanzung.',
			},
			'hoa-10': {
				title: 'Die Armee wiedervereint',
				description:
					'Vin ist mit Elants Armee südwestlich von Luthadel auf dem Marsch nach Fadrex, als Sazed, Breeze, Goradel und Allrianne aufholen. Sazed teilt seine Glaubenskrise mit Vin, die ihm Mares Blumenzeichnung als Trost gibt.',
			},
			'hoa-12': {
				title: 'Der Kriegsrat',
				description:
					'Vin und Elant diskutieren, wie Kelsiers Bande die Hoffnung verliert. Elant beruft einen Rat ein. Sie debattieren die vordringenden Nebel und Pläne zur Eroberung der Verstecke. Elant erwägt, seine Armee den Nebeln auszusetzen und fragt: »Was würde Kelsier tun?«',
			},
			'hoa-15': {
				title: 'Feindin im Nebel',
				description:
					'Vin fragt sich, warum die Nebel sich anders anfühlen — sie fühlt sich nicht mehr von ihnen beschützt. Der Koloss Human sagt, die Nebel hassen ihn und sie hassen auch Vin. Zu ihrer Überraschung stimmt sie zu — die Nebel sind nun ihre Feindin.',
			},
			'hoa-21': {
				title: 'Die sechzehn Prozent',
				description:
					'Vin liest Alendis Tagebuch und denkt darüber nach, wie man Ruin bekämpfen kann. Elant fürchtet, rücksichtslos zu werden wie der Oberste Herrscher. Noorden präsentiert Nebelkrankheitsdaten; Vin lässt ihn neu berechnen. Das Ergebnis: exakt sechzehn Prozent. Vier separate Stichproben ergeben dasselbe Verhältnis ohne Fehlermarge.',
			},
			'hoa-25': {
				title: 'Aufbruch zur Erkundung',
				description:
					'Elants Armee erreicht Fadrex. Vin bemerkt die natürlichen Felsformationen, die die Eroberung erschweren werden. Elant bietet an, sie auf der Erkundungsmission zu begleiten — sie sagt, er sei nicht gut genug. Vin bricht in die Stadt auf, um sie allein zu infiltrieren.',
			},
			'hoa-27': {
				title: 'Der Informant Slowswift',
				description:
					'Vin infiltriert Fadrex und besucht Slowswift, einen von Cett empfohlenen Informanten. Er lobt Yomens Herrschaft und enthüllt, dass trotz der Belagerung heute Abend ein Ball stattfindet. Er weigert sich, auf Kosten seiner Seele zu helfen. Vin kontert, dass Asche und tötende Nebel jede Stabilität beenden werden. Slowswift gibt nach.',
			},
			'hoa-27.2': {
				title: 'Erkundung des Kantons',
				description:
					'Vin sucht einen zweiten Informanten, aber ein instinktives Unbehagen treibt sie fort. Sie erkundet den Kanton der Ressourcen und nimmt allomantische Pulse wahr, die auf einen möglichen Nebelgeborenen hindeuten — aber sie verschwinden, bevor sie die Quelle orten kann.',
			},
			'hoa-28': {
				title: 'Vertrauen und ein kühner Plan',
				description:
					'Vin kehrt von ihrer Mission zurück und erzählt Elant, sie habe den Nebelgeist in Fadrex gespürt — eine schwächere Kraft, die sich Ruin widersetzt. Sie spricht von ihrem Schicksal als Heldin der Zeitalter, aber Elant warnt, dass die Prophezeiungen verdorben sein könnten. Vin schlägt vor, auf einen von Yomens Bällen zu gehen und ihn direkt zu konfrontieren.',
			},
			'hoa-30': {
				title: 'Lady Patresen',
				description:
					'Elant und Vin gehen zum Ball in der Festung Orielle. Sie werden angekündigt und trennen sich, um zu verkehren. Vin fordert Lady Patresen heraus, spielt mit den Ängsten ihrer Anhänger und warnt, dass es denen, die sich ihnen widersetzen, nicht gut ergehen wird.',
			},
			'hoa-37': {
				title: 'Die Erschaffung der Koloss',
				description:
					'Vin wehrt Yomens Angreifer ab und jagt einen geheimnisvollen Nebelgeborenen nach Fadrex, verliert ihn aber. Sie kehrt zurück und erfährt, dass der Überfall eine Ablenkung war — die Hälfte ihrer Koloss-Armee ist tot. Im Koloss-Lager zeigt Human ihr, wie man Koloss macht — indem man einen toten Koloss häutet und seine Stachel verwendet. Vin stoppt ihn, entsetzt: Koloss werden aus Menschen gemacht.',
			},
			'hoa-40': {
				title: 'Die dritte Kunst',
				description:
					'Vin beobachtet, wie Elant, Hammond, Cett, Noorden und Demoux die Wahrheit zusammensetzen: Häm Alurgie — die dritte metallische Kunst. Sie erkennt, dass Ruin die Koloss und Inquisitoren durch dieselbe emotionale Allomantie-Schwäche kontrolliert. Vin fleht die Nebel um Hilfe an wie einst gegen den Obersten Herrscher — aber begegnet nur Schweigen.',
			},
			'hoa-43': {
				title: 'Der zweite Ball',
				description:
					'Vin und Elant gehen zum zweiten Ball im Kanton der Ressourcen. Vin entdeckt einen Beruhiger und ein Zinnauge, die ihr folgen. Im geplanten Ablenkungsmoment schlägt sie zu — mit einem Duralumin-Messing-Stoß überwältigt sie die Spione. Vin wechselt die Kleidung und schleicht sich in das Gebäude, um das Versteck zu finden.',
			},
			'hoa-44': {
				title: 'Im Versteck',
				description:
					'Vin steigt unter die Erde hinab und nutzt emotionale Allomantie, um Wachen abzulenken. Sie erreicht das Versteck — aber die Steintür versiegelt sich hinter ihr. Sie wurde sabotiert: alles Metall wurde entfernt. Gefangen in der Dunkelheit nähern sich Schritte. Ruin steht vor ihr, das Gesicht ihres Bruders Reen tragend.',
			},
			'hoa-45': {
				title: 'Ruin enthüllt',
				description:
					'Vin konfrontiert die Kreatur mit Reens Gesicht. Sie schlägt mit einem Duralumin-Zink-Stoß zu — nichts geschieht, was beweist, dass es kein Kandra ist. Im Dunkeln konzentriert sie sich auf seine allomantischen Pulse und erkennt sie vom Brunnen der Erhebung. Dies ist Ruin. Er sagt ihr, alle Dinge müssen enden, und er sei nicht ihr Feind. Dann der tiefere Horror: Er behauptet, er sei immer bei ihr gewesen — seit sie ein Kind war.',
			},
			'hoa-48': {
				title: 'Die letzten Worte des Obersten Herrschers',
				description:
					'Gefangen in absoluter Dunkelheit ertastet Vin das Versteck. Ihre Finger finden die Metallplatte und sie liest sie durch Berührung: das letzte Geständnis des Obersten Herrschers. Ruin sprach in seinem Geist. Er versuchte, ein guter Herrscher zu sein. Er verbarg Ruins Körper gut. Und es kümmerte ihn — wissend, dass, wenn jemand diese Worte las, er bereits tot war. Die Steintür öffnet sich.',
			},
			'hoa-50': {
				title: 'Betäubter Wein',
				description:
					'Die Steintür öffnet sich. Vin benutzt ihr letztes allomantisches Fläschchen und versucht einen verzweifelten Stahlstoß durch die Bodenluke — aber sie ist von oben beschwert. Der erste Mann durch die Tür ist Telden Hasting, Elants alter Freund von den Bällen. Er bietet ihr Freiheit im Tausch gegen betäubten Wein. Vin versucht zu bluffen, aber Telden fällt nicht darauf herein. Sie trinkt den Wein und bricht bewusstlos zusammen.',
			},
			'hoa-54': {
				title: 'Yomens Gefangene',
				description:
					'Vin erwacht in Ketten, ohne Metalle zum Brennen. Yomen hat alle Vorsichtsmaßnahmen getroffen — sie sieht der Hinrichtung wegen Mordes am Obersten Herrscher entgegen. Er gibt ihr ihren Ohrring zurück. Vin setzt ihn wieder ein, beunruhigt. Ruin flüstert ihr zu, Yomen zu töten — aber sie widersteht.',
			},
			'hoa-57': {
				title: 'Die Natur Ruins',
				description:
					'Ruin spricht zu Vin in ihrer Zelle und lehrt sie über Entropie. Sein Einfluss, erkennt sie, funktioniert wie emotionale Allomantie: keine Gedankenkontrolle, sondern ein Flüstern, das verstärkt, was bereits da ist. Vin erkennt, dass Ruin in ihre Zelle kam, weil ihre Gefangenschaft der Grundstein seines Sieges ist — was bedeutet, dass sie bald entkommen muss, um ihn zu vereiteln.',
			},
			'hoa-60': {
				title: 'Vor dem Obligatoren-Gericht',
				description:
					'Vin wird Yomen zum Prozess vorgeführt. Sie täuscht einen Fluchtversuch vor. An eine Bank gekettet, fettet sie heimlich ihre Handgelenke ein und befreit sich. Sie stürzt sich auf Yomen, aber er brennt Atium und weicht mühelos aus. Yomen verhört sie über den Zweck ihrer Armee. Sie enthüllt die Wahrheit: das Atium. Yomen nennt es wertlos und beendet die Sitzung.',
			},
			'hoa-63': {
				title: 'Der Atium-Nebelgeborene',
				description:
					'Ruin prahlt vor Vin mit seinem bevorstehenden Sieg. Sie ruft ihre Wachen und sagt, sie wolle einen Deal mit Yomen machen. Der Obligator kommt müde, und Vin hat einen Durchbruch: Er ist überhaupt kein Nebelgeborener. Er ist ein Atium-Nebelgeborener — ein Seher. Yomen sinniert, dass Vin Teil der Pläne des Obersten Herrschers ist. Karten werden gebracht und Vin markiert die Orte der verbleibenden Verstecke. In einem Moment der Klarheit versteht sie: Ruin hat sie und Elant benutzt, um die Lagerverstecke zu finden. Schlimmer — er manipulierte sie gezielt, um das Atium-Versteck zu lokalisieren. Marsh kommt an. Er lächelt Vin an, verbeugt sich vor Ruin. Yomen enthüllt die Wahrheit: Es gab kein großes Versteck, nur sieben Klümpchen. Ruin schreit vor Frustration. Vin ergreift die Gelegenheit und bietet Yomen eine Allianz an.',
			},
			'hoa-65': {
				title: 'Sich befreien',
				description:
					'Vin blufft Ruin aus ihrer Zelle heraus und behauptet, sie und Elant hätten seinen Plan die ganze Zeit gekannt. Marsh packt sie und verlangt das Atium, aber sie weigert sich. Während Marsh sie schüttelt, stiehlt Vin ein Metallfläschchen aus seiner Schärpe. Sie entfernt ihren Ohrring — den häm Alurgischen Stachel, mit dem Ruin ihr zuflüsterte — und stößt ihn mit Duralumin in Marshs Stirn. Marsh erholt sich, wächst mit feruchemischer Kraft und würgt sie. Vin greift auf die Nebel zurück, stößt seine Gefühle und bricht Ruins Kontrolle. Marsh flieht. Vin erreicht das Schlachtfeld und befiehlt einen verzweifelten Rückzug nach Fadrex, wobei sie ein vorübergehendes Bündnis mit Yomen schmiedet.',
			},
			'hoa-67': {
				title: 'Der aufziehende Sturm',
				description:
					'Vin steht mit Elant und Yomen in Fadrex, während eine riesige Koloss-Armee sich vor den Mauern versammelt. Ein gewaltiges Erdbeben erschüttert die Stadt. Ohne Zugang zu den Nebeln — ihr Ohrring noch an Ort und Stelle — denkt Vin darüber nach, wie sie Ruin bluffen kann. Sie sagt Elant, sie müsse das Atium-Versteck erreichen.',
			},
			'hoa-67.2': {
				title: 'Aufbruch nach Luthadel',
				description:
					'Vin verlässt Fadrex und fliegt ostwärts nach Luthadel, wobei sie die Inquisitoren absichtlich von Elant und seiner Armee weglockt. Sie wettet, dass sie einem Gott davonlaufen kann, und hofft, Ruin zu zwingen, seine Karten aufzudecken.',
			},
			'hoa-72': {
				title: 'Der Ohrring',
				description:
					'Vin erreicht Luthadel mit einem Dutzend Inquisitoren auf den Fersen. In Kredik Shaw verlangt Ruin das Atium. Sie weigert sich, und dreizehn Inquisitoren greifen an. Sie kämpft brillant, wird aber schließlich überwältigt. Ruin befiehlt Marsh, die Folter zu beenden. Marsh bricht ihre Arme, Beine, Finger einen nach dem anderen. Ein kleiner Teil von ihm widersteht. Er bemerkt ihren Ohrring, erinnert sich an Spooks stählerne Warnung — und reißt ihn ohne nachzudenken aus ihrem Ohr. Ruins Stimme verstummt sofort. Die Nebel strömen in Vin, heilen ihre Wunden und füllen sie mit Macht.',
			},
			'hoa-73': {
				title: 'Erhebung',
				description:
					'Angetrieben von den Nebeln wie von einer endlosen Metallreserve, wendet sich Vin gegen die zwölf verbliebenen Inquisitoren. Sie tötet sie alle mit furchterregender Leichtigkeit — ihre gewöhnlichen Stahlstöße tragen nun gottgleiche Kraft. Sie zerstört Kredik Shaw selbst mit einem einzigen Stoß. Nur Marsh bleibt. In einem Moment der Gnade reißt sie einen seiner Augenstachel heraus, ohne ihn zu töten. Sie hustet einmal und verschwindet und lässt Marsh lebend in den Ruinen zurück.',
			},
			'hoa-76': {
				title: 'Willkommen in der Göttlichkeit',
				description:
					'Vin schwebt über Luthadel, erfüllt von der Macht der Bewahrung. Ruin begrüßt sie — eine Wolke aus sich veränderndem schwarzem Rauch — und heißt sie spöttisch in der Göttlichkeit willkommen. Ihr Bewusstsein erweitert sich, um den gesamten sterbenden Planeten zu sehen. Sie versucht zu helfen: Sie blockiert die Ascheberge und reinigt die Luft, aber die plötzliche Sonne überhitzt die Welt. Jede Korrektur erzeugt eine neue Katastrophe. Ruin erklärt das Gleichgewicht zwischen ihnen. Vin versteht: Wenn er den verborgenen Teil seines Körpers findet, zerbricht das Gleichgewicht. Sie sieht Elant unten auf Luthadel zusteuern.',
			},
			'hoa-79': {
				title: 'Ruin folgen',
				description:
					'Vin spürt eine Veränderung und folgt Ruin zu den Gruben von Hathsin. Sie sieht das Flüchtlingslager und die Kandra, die das Atium bewegen, und gewinnt eine neue Wertschätzung für das ausgeklügelte Versteckspiel des Obersten Herrschers. Ruin übernimmt die Kontrolle über KanPaar und verlangt den Ort des Atiums.',
			},
			'hoa-80': {
				title: 'Die Führung des Windes',
				description:
					'Vin, als Bewahrung, beobachtet die Hunderttausenden von Flüchtlingen an den Gruben. Sie flüstert Elants Namen in den Wind und führt ihn durch das Lager zur Kandra-Heimat, wo Sazed allein kämpft, um das Atium zu schützen.',
			},
			'hoa-81': {
				title: 'Die Schlacht beobachten',
				description:
					'Vin sieht zu, wie Elant seine Rede an die Seher hält und sie in den Angriff gegen die Koloss-Armee führt. Stundenlang sieht sie Elant ein Vermögen an Atium verbrennen. Dann erscheint Marsh, ebenfalls Atium brennend, und Vin sieht Ruins dunkle Kraft, die die Axt ihres Bruders führt. Elant verbrennt Duralumin und Atium gemeinsam in einem letzten gottgleichen Blitz der Einsicht — und rammt sein Schwert in Marshs Hals, während die Axt seine Brust trifft. Elant stirbt lächelnd.',
			},
			'hoa-81.2': {
				title: 'Der letzte Angriff',
				description:
					'Ruin prahlt über Elants Leiche. Aber Vin hat den Mann, den sie liebt, alles opfern sehen — und sie wird es nicht umsonst sein lassen. Die Agonie ignorierend, die Bewahrungs Macht zur Zerstörung einzusetzen mit sich bringt, greift sie Ruin direkt an. Die Kraft der Gegensätze — Bewahrung, die Ruin schlägt — sollte kein Splitter überleben. Der Angriff tötet sowohl Ati als auch Vin. Ihr Körper fällt neben Elants in die Asche.',
			},
			'hoa-83': {
				title: 'Das Feld der Wiedergeburt',
				description:
					'Vins Körper wird auf einem Feld aus Blumen und grünem Gras gefunden — die ersten Anzeichen von Sazeds wiederhergestellter Welt. Sie ruht in Frieden neben Elant.',
			},
		},
		sazed: {
			...enData.movements.sazed,
			// ── Kinder des Nebels ──────────────────────────────────────────
			'tfe-9': {
				title: 'Der terrisische Verwalter',
				description:
					"Sazed trifft auf Lord Renoux' Anwesen in Fellise ein, um Vin als Lehrer und Verwalter zu dienen und ihr Etikette, Tanz und Benehmen beizubringen. Er erzählt ihr vom Trelagismus — der fünften Religion, die er ihr vorschlägt — und gibt zu, 562 weitere zu kennen.",
			},
			'tfe-10.2': {
				title: 'Die Versammlung im Lagerhaus',
				description:
					'Sazed besucht die geheime Lagerhaus-Versammlung zusammen mit Kelsier und Vin und beobachtet, wie der Überlebende den Skaa-Arbeitern die Revolution predigt.',
			},
			'tfe-12': {
				title: 'Wächter beim Ball',
				description:
					'Sazed begleitet Vin als ihr Verwalter zu ihrem ersten Ball in der Festung Wager und wacht über sie, während sie die adlige Gesellschaft infiltriert.',
			},
			'tfe-13': {
				title: 'Nachbesprechung in Fellise',
				description:
					'Sazed kehrt mit Vin und Kelsier zum Renoux-Anwesen in Fellise zurück, um die Ergebnisse von Vins erstem Ball zu besprechen und nächste Schritte zu planen.',
			},
			'tfe-15': {
				title: 'Vin retten',
				description:
					"Sazed bringt Vin in Clubs' Laden, um sie zu retten und nach ihrer Verletzung in Kredik Shaw zu operieren. Er untersucht auch ein in Khlennisch geschriebenes Buch, das bei der Aufklärungsmission erbeutet wurde.",
			},
			'tfe-16': {
				title: 'Rückkehr nach Fellise',
				description:
					"Nachdem Vin in Clubs' Laden stabilisiert wurde, kehrt Sazed zum Renoux-Anwesen in Fellise zurück.",
			},
			'tfe-17': {
				title: 'Das khlennische Buch übersetzen',
				description:
					'In der Bibliothek des Renoux-Anwesens in Fellise arbeitet Sazed an der Übersetzung des khlennischen Buches, das Vin bei der Aufklärungsmission in Kredik Shaw erbeutet hat.',
			},
			'tfe-18': {
				title: 'Wächter in der Festung Elariel',
				description:
					'Sazed begleitet Vin als terrisischer Verwalter zum Ball in der Festung Elariel und wacht über sie, während sie die adlige Gesellschaft navigiert.',
			},
			'tfe-19': {
				title: 'Informationsaustausch',
				description:
					'Sazed ist im Anwesen Renoux, als Kelsier über den Dornenpfad zurückkehrt. Sie tauschen Informationen über die Adelshäuser und den Fortschritt der Rebellion aus, während Kelsier Vin predigt, sich von Elant fernzuhalten.',
			},
			'tfe-22': {
				title: 'Geheimnisse der Feruchemie',
				description:
					'Auf dem Renoux-Anwesen spricht Sazed mit Vin über den Terrisaner im Tagebuch des Obersten Herrschers. Er enthüllt die Geheimnisse der Feruchemie und wie die Hüter gegründet wurden, um alles zu bewahren, nachdem die terrisische Religion verloren ging. Er lernt auch Neues über sein Volk aus dem Tagebuch — dass das Land einst grün und fruchtbar war.',
			},
			'tfe-23': {
				title: 'Wächter in der Festung Hasting',
				description:
					'Sazed begleitet Vin als terrisischer Verwalter zum Ball in der Festung Hasting. Er wartet, während sie Gerüchte verbreitet und mit Adligen spricht.',
			},
			'tfe-27': {
				title: 'Marshs Nachricht',
				description:
					"Sazed kehrt mit einem Brief von Marsh zu Clubs' Laden zurück, mit Nachrichten und Anweisungen zum Treffpunkt. Er bringt auch Übersetzungen des Tagebuchs des Obersten Herrschers mit.",
			},
			'tfe-28': {
				title: 'Wächter in der Festung Lekal',
				description:
					'Sazed begleitet Vin als terrisischer Verwalter zum Ball in der Festung Lekal. Er wartet auf sie, während sie an den Häuserkriegen arbeitet und mit Elant spricht.',
			},
			'tfe-29': {
				title: 'Feruchemie-Unterricht',
				description:
					'Auf dem Renoux-Anwesen gibt Sazed Vin die letzten Tagebuch-Übersetzungen. Er erklärt Feruchemie ausführlicher und Vin versucht, einen seiner Zinngeister zu verbrennen. Später stößt Sazed dazu, als Kelsier eine detaillierte Karte von Marsh durchgeht. In der Nacht, schlaflos, bittet Kelsier Sazed, ihm Religionen zu erzählen.',
			},
			'tfe-30': {
				title: 'Wächter in der Festung Wager',
				description:
					'Sazed begleitet Vin zum letzten Hausball in der Festung Wager. Die Gäste schließen Bündnisse und Lady Valette wird kühl empfangen. Sazed verlässt den Ball früh, bevor Vin den Mordanschlag auf Elant entdeckt und gegen Shan Elariel kämpft.',
			},
			'tfe-31': {
				title: 'Vins Wunden versorgen',
				description:
					"Sazed versorgt Vins Wunden in Clubs' Laden, nachdem sie angeschlagen vom Kampf mit Shan Elariel und den Elariel-Attentätern eingetroffen ist. Er hört zu, während Vin die Ereignisse des Abends erzählt.",
			},
			'tfe-33': {
				title: 'Der Ausweichunterschlupf',
				description:
					"Sazed ist mit der Bande im Reserveunterschlupf nahe Clubs' Laden, nachdem Kelsier die Gruben von Hathsin zerstört hat. Vin spricht mit Sazed über das Elfte Metall. Als Skaa zur Hinrichtung am Brunnenplatz gebracht werden und Spukie in einem Gefangenenwagen gesichtet wird, bleibt Sazed im Unterschlupf, während Kelsier den Inquisitor bekämpft.",
			},
			'tfe-35': {
				title: 'Vin trösten',
				description:
					'Sazed ist mit Vin im Reserveunterschlupf nach Kelsiers Tod. Er bietet tröstende Worte, während Vin wütet, dass Kelsier sie verlassen hat. Er bleibt zurück, als die Bande zum Lagerhaus geht, um den Kandra in Kelsiers Gestalt zu sehen.',
			},
			'tfe-37': {
				title: 'Der entfesselte Feruchemist',
				description:
					'Sazed wird in Vins Zelle in Kredik Shaw gebracht. Er scheint zusammenzuschrumpfen, dann schwellen seine Muskeln auf die doppelte Größe an, als er gespeicherte feruchemische Kraft freisetzt und die Tür mit einem Schlag aufstößt.',
			},
			'tfe-38': {
				title: 'Der Fall des Imperiums',
				description:
					'Sazed erscheint bei der letzten Konfrontation in Kredik Shaw mit einem Metallfläschchen für Vin. Er wird Zeuge des Falls des Obersten Herrschers, als Vin dessen Armbänder herunterreißt und sein Alter dramatisch zunimmt.',
			},
			'tfe-39': {
				title: 'Den Tyrannen verstehen',
				description:
					'Sazed erklärt, dass der Oberste Herrscher sowohl Feruchemist als auch Allomant war. Er vermutet, dass alle terrisischen Verwalter deshalb Eunuchen sein mussten.',
			},
			'woa-4': {
				title: 'Der reisende Lehrer',
				description:
					'Sazed reist durch die Östliche Dominanz und besucht ländliche Dörfer, um unterdrückte Religionen und Wissen mit den neu befreiten Skaa zu teilen.',
			},
			'woa-7': {
				title: 'Marsh kehrt zurück',
				description:
					'Sazed lehrt weiter unterdrückte Religionen. Marsh erscheint im Dorf und bietet an, Sazed zum Konventikel von Seran zu führen.',
			},
			'woa-9': {
				title: 'Reise zum Konventikel',
				description:
					'Sazed und Marsh reisen durch die öde Östliche Dominanz zum Konventikel. Marsh wird zunehmend distanziert und seltsam.',
			},
			'woa-12': {
				title: 'Die Platte entziffern',
				description:
					'Sazed studiert Kwaans Inschrift im Konventikel und entdeckt die verzweifelte Warnung des terrisischen Bewahrers, dass die Prophezeiung des Helden der Zeitalter verändert wurde.',
			},
			'woa-15': {
				title: 'Die Nebeltode',
				description:
					'Auf dem Rückweg durch Urbene findet Sazed Dörfer, in denen Menschen auf mysteriöse Weise in den Nebeln gestorben sind — die ersten Anzeichen der Nebelkrankheit.',
			},
			'woa-19': {
				title: 'Die Koloss-Armee',
				description:
					'Sazed trifft auf eine zwanzigtausend Mann starke Koloss-Armee in der Zentralen Dominanz. Er wird gefangen genommen und vor Jastes Lekal gebracht.',
			},
			'woa-22': {
				title: 'Rückkehr nach Luthadel',
				description:
					'Sazed erreicht Luthadel mit ernsten Nachrichten über die veränderte Prophezeiung, die Nebeltode und die wahre Bedeutung der Stahlinschrift.',
			},
			'woa-23': {
				title: 'Die dritte Armee',
				description:
					'Sazed informiert Elant und die Bande über die zwanzigtausend Koloss unter Jastes Lekal. Er warnt, dass die Nebel Menschen töten.',
			},
			'woa-30': {
				title: 'Die Abriebe transkribieren',
				description:
					'Sazed transkribiert die Abriebe vom Konventikel. Vin kommt durch sein Fenster und schlägt vor, dass die Nebel die Tiefe sind.',
			},
			'woa-36': {
				title: 'Zuflucht in den Lagerhäusern',
				description:
					'Sazed bietet neu angekommenen Flüchtlingen Trost. Breeze beruhigt alle mit seiner Allomantie.',
			},
			'woa-37': {
				title: 'Die Tiefe-Debatte',
				description:
					'Sazed und Tindwyl studieren ein Fragment der Biographie von König Wednegon. Sazed glaubt, die Tiefe sei eine Veränderung der Nebel. Tindwyl drückt ihr Verlangen nach Sazed aus, und er bittet sie zu bleiben.',
			},
			'woa-40': {
				title: 'Die Prophezeiung debattieren',
				description:
					'Sazed arbeitet mit Tindwyl in der Festung Venture und vergleicht die ursprünglichen und veränderten Versionen der Prophezeiung.',
			},
			'woa-41': {
				title: 'Die veränderte Prophezeiung',
				description:
					'Sazed und Tindwyl debattieren die Metallplatte und Alendis Tagebuch. Elant besucht sie und sucht Rat.',
			},
			'woa-45': {
				title: 'Abgerissene Ecken',
				description:
					'Tindwyl entdeckt mehrere Kopien mit geheimnisvoll abgerissenen Ecken. Vin und Elant suchen Sazeds Rat über die Liebe. Sazed beschließt, dafür zu sorgen, dass sie Luthadel vor dem Fall verlassen.',
			},
			'woa-46': {
				title: 'Der Fluchtplan',
				description:
					'Sazed versammelt heimlich Breeze, Clubs, Hammond und Dockson. Sie stimmen zu, die Stadt zu verteidigen, aber planen, Elant, Vin, Spook und Tindwyl fortzuschicken.',
			},
			'woa-49': {
				title: 'Ihnen beim Gehen zusehen',
				description:
					'Von der Stadtmauer aus sieht Sazed mit Breeze, Demoux, Hammond und Clubs, wie Elants Gruppe Straffs Armee entkommt.',
			},
			'woa-50': {
				title: 'Auf das Schlimmste vorbereiten',
				description:
					'Sazed füllt seine Metallgeiste zur Vorbereitung auf einen Koloss-Angriff. Er und Tindwyl streiten über das Fortschicken von Elant und Vin, dann umarmen sie sich.',
			},
			'woa-51': {
				title: 'Der Koloss-Angriff beginnt',
				description:
					'Die Koloss haben sich in eine gewaltige Prügelei gesteigert und wenden sich gegen die Stadt. Sazed beobachtet den Beginn des Angriffs von seinem Posten auf der Mauer.',
			},
			'woa-52': {
				title: 'Der Heilige Erste Zeuge',
				description:
					'Sazed verteidigt das Stahltor. Eine Menge Skaa weigert sich zu fliehen und nennt ihn den Heiligen Ersten Zeugen. Als die Koloss durchbrechen, aktiviert Sazed seinen Zinngeist und führt die Soldaten in die Schlacht.',
			},
			'woa-53': {
				title: 'Das Stahltor halten',
				description:
					'Sazed kämpft am Stahltor und aktiviert seinen Eisengeist, um es geschlossen zu halten. Sein Eisengeist erschöpft sich, die Koloss brechen erneut durch.',
			},
			'woa-54': {
				title: 'Tindwyl suchen',
				description:
					'Nach stundenlanger Suche findet Sazed Tindwyls Leichnam und trauert — unfähig, einen religiösen Ritus für sie zu wählen.',
			},
			'woa-55': {
				title: 'Zurückgelassen als Befehlshaber',
				description:
					'Sazed beobachtet, wie Vins kontrollierte Koloss und Cetts Armee Straffs Streitkräfte zerschmettern. Vin lässt Sazed als Befehlshaber der Stadt zurück.',
			},
			'woa-57': {
				title: 'Kampf gegen Marsh',
				description:
					'Sazed erkennt, dass er der »Heilige Erste Zeuge« ist. Der Nebelgeist drängt ihn nach Kredik Shaw, wo Marsh ihn gegen die Wand schleudert.',
			},
			'woa-58': {
				title: 'Den Inquisitor überleben',
				description:
					'Marsh zerschmettert Sazeds Rippen und Arm und treibt Metallringe in sein Fleisch — aber Sazed zapft diese Metallgeiste an, um zu heilen und weiterzukämpfen. Hammond schlägt Marsh mit einem Duellstock nieder.',
			},
			'woa-59': {
				title: 'Zu spät am Brunnen',
				description:
					'Sazed erreicht den Brunnen der Erhebung gerade zu spät, um Vin davon abzuhalten, die Macht freizusetzen.',
			},
			'woa-60': {
				title: 'Verlust allen Glaubens',
				description:
					'Sazed kehrt zum Konventikel zurück und entdeckt, dass die Inschrift nicht mit seinem Abrieb übereinstimmt. Die wahre Warnung: Alendi darf nicht zum Brunnen gelangen. Sazed verliert allen Glauben an jede gesammelte Religion.',
			},
			'hoa-4': {
				title: 'Südliche Diplomatie',
				description: 'Sazed besucht Lekal-Stadt mit Breeze, um einen Vertrag auszuhandeln.',
			},
			'hoa-8': {
				title: 'Auf dem Weg zur Armee',
				description:
					'Nach Sicherung des Vertrags reist Sazed mit Breeze, um sich mit Vin und Elants Armee zu treffen.',
			},
			'hoa-10': {
				title: 'Zurück zur Armee',
				description:
					'Sazed, Breeze, Goradel und Allrianne holen Elants Armee auf dem Marsch nach Fadrex ein. Sazed teilt seine Glaubenskrise mit Vin.',
			},
			'hoa-12': {
				title: 'Die Ratssitzung',
				description:
					'Sazed nimmt an Elants Kriegsrat teil. Sie debattieren die vordringenden Nebel und Pläne zur Eroberung der Verstecke.',
			},
			'hoa-18': {
				title: 'Nach Norden reisen',
				description:
					'Sazed, Breeze, Allrianne und Hauptmann Goradel reisen nordwärts nach Urteau. Sazed setzt seine Suche nach einer Religion fort.',
			},
			'hoa-18.2': {
				title: 'Unter den Terrisern',
				description:
					'Auf dem Weg nach Urteau hält Sazed an den Gruben von Hathsin, wo die Terriser sich niedergelassen haben. Er trifft die Ältesten, verweigert aber, ihr Anführer zu sein.',
			},
			'hoa-22': {
				title: 'Die terrisische Anomalie',
				description:
					'Sazed erfährt eine entscheidende Tatsache: kein einziger Terriser wurde von der Nebelkrankheit befallen.',
			},
			'hoa-25': {
				title: 'Die Terriser verlassen',
				description:
					'Sazed verlässt die Gruben von Hathsin und setzt seine Reise nach Norden fort.',
			},
			'hoa-29': {
				title: 'Vom Bürger vorgeladen',
				description:
					'Sazed, Breeze, Allrianne und ihre Ehrengarde erreichen Urteau und werden sofort vor Quellion geladen.',
			},
			'hoa-29.2': {
				title: 'Der unterirdische See',
				description:
					'Spook führt Sazed, Breeze, Allrianne und Goradel zum ungenutzten Kanton der Inquisition. Darunter enthüllt er das Versorgungsversteck des Obersten Herrschers — und den verborgenen unterirdischen See.',
			},
			'hoa-31': {
				title: 'Die Wasserumleitung',
				description:
					'Sazed, Spook und Breeze diskutieren, wie man Quellion absetzen kann, ohne einen schlimmeren Ersatz zu schaffen.',
			},
			'hoa-38': {
				title: 'Der Überlebende der Flammen',
				description:
					'Sazed und Breeze beobachten, wie Skaa nun frei in die Nebel gehen. Die Einheimischen sprechen vom Überlebenden der Flammen — Sazed erkennt noch nicht, dass es Spook ist.',
			},
			'hoa-41': {
				title: 'Der Überlebende enthüllt',
				description:
					'Sazed sieht eine Gestalt aus einem brennenden Gebäude stürzen, die ein kleines Mädchen trägt. Zum ersten Mal erkennt er, dass der Held, den Urteau verehrt, Spook ist.',
			},
			'hoa-46': {
				title: 'Trellismus und Vertrauen',
				description:
					'Sazed wartet auf Spooks Rückkehr und fühlt seine Glaubenssuche als sinnlos. Spook bittet Sazed, Wasser in die Kanäle zurückzuleiten.',
			},
			'hoa-49': {
				title: 'Die Kanalbaukunst',
				description:
					'Angespornt durch Spooks Bitte beginnt Sazed zu erforschen, wie man Urteaus trockene Kanäle wieder füllen kann. Breeze ist erfreut, Sazed wieder Interesse an seiner Gelehrsamkeit zeigen zu sehen.',
			},
			'hoa-53': {
				title: 'Spook beim Führen zusehen',
				description:
					'Sazed hört zu, wie Spook Beldre von seinem Leben in Kelsiers Bande erzählt. Als Spook geht, bleibt Sazed und beobachtet.',
			},
			'hoa-56': {
				title: 'Das Bedürfnis nach Glauben',
				description:
					'Spook sagt Sazed, er habe Vertrauen, dass selbst wenn er versagt, jemand wacht. Sazed erkennt, dass ihm nicht eine perfekte Religion gefehlt hat, sondern einfach die Fähigkeit, wieder an etwas zu glauben.',
			},
			'hoa-50': {
				title: 'Die Höhlenentdeckung',
				description: 'Sazed entdeckt den Mechanismus, um das trockene Kanalsystem zu fluten.',
			},
			'hoa-58': {
				title: 'Urteau retten',
				description:
					'Sazed instruiert Spook über den Wasserumleitungsmechanismus. Er beobachtet die Konfrontation: Spook reißt Stachel aus Quellion und sich selbst. Spook stürzt sich ins brennende Gebäude. Wasser fließt durch die Kanäle und rettet Urteau.',
			},
			'hoa-59': {
				title: 'Die Bürde des Ankündigers',
				description:
					'TenSoon erreicht Urteau und findet Breeze und Sazed. Er muss Vin erreichen, denn es geht um den Helden der Zeitalter und das Ende der Welt.',
			},
			'hoa-62': {
				title: 'Der Ankündiger',
				description:
					'Sazed wacht im Krankenhaus über Spook. TenSoon enthüllt die Wahrheit: Rasheks Begleiter wurden in Kandra verwandelt. Sazeds Religion — der terrisische Glaube — lebt noch.',
			},
			'hoa-66': {
				title: 'Zur Heimat reiten',
				description:
					'Sazed reitet auf TenSoon nach Süden zur Kandra-Heimat. TenSoon erzählt die Geschichte der Kandra und den Ersten Vertrag.',
			},
			'hoa-68': {
				title: 'Der Weltenbringer',
				description:
					'Sazed wird durch die Kandra-Tunnel eskortiert. Er erklärt sich zum Ankündiger vor der Zweiten Generation. Die Erste Generation erscheint und nennt ihn Weltenbringer.',
			},
			'hoa-71': {
				title: 'Das Vertrauen',
				description:
					'Sazed und die Erste Generation untersuchen Ruins Veränderungen. Sazed entdeckt das Vertrauen: ein gewaltiges Atium-Versteck, jahrhundertelang von den Kandra verborgen.',
			},
			'hoa-75': {
				title: 'Die Resolution',
				description:
					'Sazed lernt die Kandra-Religion kennen. KanPaar führt einen Putsch an. Sazed wird eingesperrt, während die Kandra in einen Bürgerkrieg stürzen.',
			},
			'hoa-78': {
				title: 'Von TenSoon gerettet',
				description:
					'TenSoon rettet Sazed und die Erste Generation während des Kandra-Bürgerkriegs.',
			},
			'hoa-79': {
				title: 'Die Resolution beginnt',
				description:
					'TenSoon greift Sazed an — Ruin hat die Kontrolle über die Kandra durch ihre Segnungen übernommen.',
			},
			'hoa-80': {
				title: 'Das Vertrauen verteidigt',
				description:
					'Sazed blockiert den Eingang zur Vertrauenskammer gegen die abtrünnigen Kandra. Elant Venture betritt die Kammer.',
			},
			'hoa-81': {
				title: 'Der Körper eines Gottes',
				description:
					'Sazed enthüllt die Wahrheit: Das Atium ist Ruins Körper. Die nebelgefallenen Soldaten sind alle Seher. Sazed versorgt die Soldaten, während er die letzte Schlacht beobachtet.',
			},
			'hoa-82': {
				title: 'Der Held der Zeitalter',
				description:
					'Sazed sieht die Körper von Vin und Ati neben Elants Leichnam. Er ergreift sowohl Bewahrung als auch Ruin und nutzt das Wissen all seiner Kupfergeiste, um die Welt wiederherzustellen, und wird zu Harmonie.',
			},
			'hoa-83': {
				title: 'Harmonie',
				description:
					'Sazed erhebt sich als Harmonie, vereint Ruin und Bewahrung. Er erschafft die Welt neu — bewegt den Planeten, stellt das Grün wieder her und heilt tausend Jahre Schaden.',
			},
		},
		elend: {
			...enData.movements.elend,
			// ── Kinder des Nebels ──────────────────────────────────────────
			'tfe-12': {
				title: 'Der lesende Adlige',
				description:
					'Elant Wager bemerkt Vin allein auf einem Balkon bei einem Ball in seiner eigenen Festung und setzt sich zu ihr. Er ärgert sie, indem er Monumente der Prüfung herauszieht und zu lesen beginnt, während der Rest des Adels tanzt und Ränke schmiedet.',
			},
			'tfe-18': {
				title: 'Ein Abend mit Valette',
				description:
					'Elant besucht den Ball in der Festung Elariel, wo er sich an einen Tisch mit Vin setzt und wie gewohnt liest. Er lobt ihr Kleid und lässt ihr die Kinnlade herunterklappen.',
			},
			'tfe-23': {
				title: 'Das Taschentuch',
				description:
					'Elant findet Vin beim Ball in der Festung Hasting. Sie fragt ihn, ob er jemals mit einer Skaa geschlafen hat. Er beichtet, dass sein Vater ihn mit dreizehn dazu zwang und die Frau danach getötet wurde, aber er es nie wieder tat. Er gibt Vin ein Taschentuch als Zeichen, sie hofieren zu wollen. Nach dem Abgang mit seinen Freunden steigen sie in einen Turm, um die Fehler des Obersten Herrschers zu diskutieren.',
			},
			'tfe-28': {
				title: 'Ball in der Festung Lekal',
				description:
					'Elant überrascht Vin beim Ball in der Festung Lekal. Er sagt, er will sie küssen, aber Vin besteht darauf, dass er sie nicht wirklich kennt. Sie machen stattdessen einen Spaziergang und Elant enthüllt, dass das Vermögen der Wagers vollständig aus dem Atium-Abbau in den Gruben von Hathsin stammt — er vertraut ihr völlig. Er erwähnt auch, dass die Tekiel von Haus Hasting getötet wurden, und versucht Valette zu überzeugen, Luthadel zu verlassen.',
			},
			'tfe-28.2': {
				title: 'Ruf des Vaters',
				description:
					'Elant kehrt zur Festung Wager zurück und versucht am Zimmer seines Vaters vorbeizuschleichen. Lord Straff Wager, ein Zinnling, der nichts verpasst, ruft ihn herein. Straff befiehlt Elant, am nächsten Tag mit Haus Hasting und einer von deren Töchtern zu speisen, da er ein Bündnis mit Lord Tegas plant. Später kommt Jastes und enthüllt, dass er Lady Valettes Kutsche verfolgen ließ — sie kam in Fellise nur mit dem Terrisaner an, Valette war verschwunden. Jastes ist überzeugt, sie ist eine Spionin. Elant, der erkennt, dass er das Atium-Geheimnis verraten hat, bietet seinem Vater einen Handel an: Er geht zum Mittagessen, dafür bekommt er Spione, die Valette beschatten.',
			},
			'tfe-30': {
				title: 'Der Wager-Ball',
				description:
					'Elant speist während des Balls mit seinem Vater in der Festung Wager. Vin erregt seine Aufmerksamkeit und es kommt zu einer Konfrontation. Elant sagt Dinge, die Vin verletzen, aber als Vin von einem geplanten Mordanschlag auf Elant an diesem Abend erfährt, stürmt sie in die Nebel, um die Attentäter zu finden. Der Abend endet im Chaos, als Vin Lady Shan Elariel bekämpft und tötet — eine Nebelgeborene, die Elant ermorden sollte. Im Tumult gelingt es Elant zu entkommen.',
			},
			'tfe-31': {
				title: 'Die Spionageberichte',
				description:
					"Elant und Jastes treffen sich mit Felt, der alles berichtet, was Elants Spione über Clubs' Laden und dessen Bewohner herausgefunden haben. Nachdem Felt und Jastes gegangen sind, bringen Wager-Wachen Elant zu seinem Vater Straff, der enthüllt, dass Shan Elariel eine Nebelgeborene war, die Elant ermorden sollte. Elant weiß nun, dass eine Skaa-Diebesbande nahe der Festung Wager operiert — und dass Valette mit ihnen in Verbindung steht.",
			},
			'tfe-33': {
				title: 'Die Hinrichtungskarren',
				description:
					'Elant sieht die Renoux-Diener in einem Hinrichtungskarren am Brunnenplatz eingesperrt. Er ruft nach Valette, kann sie aber nirgends in der Menge finden.',
			},
			'tfe-34': {
				title: 'Kelsier rettet Elant',
				description:
					"Elant erreicht Renoux' Käfig am Brunnenplatz und fragt nach Valette. Ein Inquisitor landet auf dem Käfig und ist dabei, Elant mit seiner Axt zu treffen, als Kelsier den Inquisitor angreift und Elant das Leben rettet. Kelsier ruft Elant zu, dass Valette in Sicherheit ist, und Elant wird von seinen Leibwächtern weggezerrt.",
			},
			'tfe-36': {
				title: 'Autorität des Hauses Wager',
				description:
					'Elants Vater teilt ihm mit, dass eine Skaa-Rebellion begonnen hat, und will aus Luthadel fliehen. Elant weigert sich zu gehen. Straff willigt ein, in der Hoffnung, dass Elant getötet wird, und übergibt ihm die Autorität des Hauses Wager. Elant befiehlt seinen Soldaten zur Festung Lekal für eine gemeinsame Verteidigung. Dann nimmt er seine fünf besten Soldaten als Ehrengarde und geht, um sich der Skaa-Führung zu stellen.',
			},
			'tfe-37': {
				title: 'Vin retten',
				description:
					'Elant bietet Skaa Gold, um zu Dockson gebracht zu werden, und sagt, Haus Wager werde der Rebellion nicht widerstehen; sie sollten zusammenarbeiten. Später stürmen Elant und sechs Soldaten Kredik Shaw, um Vin zu retten. Das Geheimnis ist gelüftet — er weiß jetzt, dass Vin Nebelgeborene ist. Vin greift seinen Kopf und küsst ihn, dann geht sie, um den Obersten Herrscher zu töten.',
			},
			'tfe-38': {
				title: 'Der Philosophenkönig',
				description:
					'Nach dem Tod des Obersten Herrschers wird Elant zu einer vereinigenden Stimme, die Ordnung fordert. Er beginnt Treffen mit sowohl Skaa- als auch Adelsführern, um ein Gesetzeswerk für die neue Nation zu entwerfen.',
			},
			'tfe-39': {
				title: 'Der neue König',
				description:
					'Elant Wager wird als König der Zentralen Dominanz akzeptiert. Er schreibt das neue Gesetzbuch. Vin rennt aus den Nebeln zu ihm — sie halten einander.',
			},
			'woa-1': {
				title: 'König auf den Mauern',
				description:
					'Elant steht auf den Stadtmauern Luthadels und sieht fünfzigtausend Soldaten unter seinem Vater Straff Wager ankommen. Die Belagerung Luthadels hat begonnen.',
			},
			'woa-3': {
				title: 'Das Gesetz schreiben',
				description:
					'Elant arbeitet in seinem Arbeitszimmer an Vorschlägen für die Versammlung. Vin gesellt sich nach ihrer Begegnung mit dem Nebelgeist zu ihm.',
			},
			'woa-5': {
				title: 'Der Gelehrtenkönig',
				description:
					'Elant arbeitet mit Dockson an der Logistik einer belagerten Stadt. Vin kommt nach dem Erwerb von OreSeurs neuem Wolfshund-Körper hinzu.',
			},
			'woa-6': {
				title: 'Vom Balkon aus zusehen',
				description:
					'Elant sieht Vin mit Ham im Hof trainieren. Er verliert eine Wette mit Clubs über den Ausgang.',
			},
			'woa-10': {
				title: 'Die Versammlung',
				description:
					'Elant spricht zur Versammlung und tritt für demokratische Prinzipien ein. Eine Terriserin namens Tindwyl beobachtet. Eine zweite Armee trifft ein.',
			},
			'woa-11': {
				title: 'Die Belagerung inspizieren',
				description:
					'Elant steht mit Clubs und Vin auf den Mauern und beobachtet Cetts Armee im Westen und Straffs Streitkräfte im Norden.',
			},
			'woa-13': {
				title: 'Kriegsrat',
				description:
					'Elant versammelt die alte Bande zum Kriegsrat. Danach bietet Tindwyl an, ihn in der Königsherrschaft zu unterrichten.',
			},
			'woa-14': {
				title: 'Die Erziehung eines Königs',
				description:
					'Tindwyl beginnt ihre energische Unterweisung Elants und formt seine Garderobe, Haltung und sein Auftreten.',
			},
			'woa-16': {
				title: 'Die Verwandlung eines Königs',
				description:
					'Elant steht auf den Mauern und beobachtet die Belagerungsarmeen. Tindwyl lässt ihn rufen, schneidet ihm die Haare und gibt ihm eine Uniform und Krone.',
			},
			'woa-17': {
				title: 'Straffs Bote',
				description:
					'Elant, Vin und OreSeur treffen einen Boten Straffs, der sich als Zane herausstellt.',
			},
			'woa-20': {
				title: 'Die Verhandlung planen',
				description:
					'Elant bespricht seinen Plan, mit Straff zu verhandeln. Er will Straff und Cett gegeneinander ausspielen. Allrianne kommt und sucht Asyl.',
			},
			'woa-21': {
				title: 'Allriannes Asyl',
				description:
					'Allrianne Cett erreicht den Palast und umarmt Breeze. Elant bietet Gastfreundschaft an.',
			},
			'woa-22': {
				title: 'Für Demokratie kämpfen',
				description:
					'Elant sieht sich wachsendem Widerstand in der Versammlung gegenüber, da die Angst vor der Belagerung viele nach einem stärkeren Führer suchen lässt.',
			},
			'woa-23': {
				title: 'Sazeds Warnung',
				description:
					'Sazed kehrt zurück und berichtet von zwanzigtausend Koloss unter Jastes Lekal, die sich Luthadel nähern.',
			},
			'woa-25': {
				title: 'Der Scheinangriff',
				description:
					'Straff startet einen Scheinangriff auf Luthadels Mauern, um die Verteidigung zu testen.',
			},
			'woa-26': {
				title: 'Verhandlung mit dem Vater',
				description:
					'Elant reitet zu Straff Wagers Lager, um zu verhandeln, mit Vin als Beschützerin. Das Treffen offenbart Straffs Verachtung für seinen idealistischen Sohn.',
			},
			'woa-27': {
				title: 'Straff überlisten',
				description:
					'Straff befiehlt, Elant zu töten, aber Elant blufft, dass Vin das Lager zerstören wird. Straff lässt sie ziehen. Auf dem Rückweg erfährt Elant, dass er nicht mehr König ist.',
			},
			'woa-28': {
				title: 'Diplomatie schmieden',
				description:
					'Zurück in der Festung Venture versucht Elant, die drei Armeen gegeneinander auszuspielen.',
			},
			'woa-31': {
				title: 'Kanzler Penrod',
				description:
					'Elant nominiert Lord Penrod als Kanzler. Nominierungen für einen neuen König werden eröffnet: Penrod, Elant und Lord Cett.',
			},
			'woa-32': {
				title: 'Cetts Schachzug',
				description:
					'Lord Cett spricht zur Versammlung. Die Versammlung gewährt Cett eine verlassene Festung und tausend Soldaten.',
			},
			'woa-33': {
				title: 'Der vergiftete Brunnen',
				description:
					'Elant untersucht einen Fall von Massenerkrankung und entdeckt, dass einer der Stadtbrunnen vergiftet wurde.',
			},
			'woa-34': {
				title: 'Recherche und Strategie',
				description:
					'Elant arbeitet in der Bibliothek mit Hammond, Sazed, Tindwyl und Noorden an der Strategie für die Versammlung.',
			},
			'woa-35': {
				title: 'Abendessen mit Cett',
				description:
					'Elant und Vin essen mit Lord Cett in der Festung Hasting. Cett bietet Nahrung im Tausch gegen das Atium-Versteck.',
			},
			'woa-37': {
				title: 'Die Mauer patrouillieren',
				description:
					'Elant und Hammond patrouillieren die Mauer. Elant hat eine Eingebung, wie er genug Stimmen sichern kann.',
			},
			'woa-38': {
				title: 'Abgesetzt',
				description:
					'Elant nimmt an der Königswahl teil. Attentäter greifen an — Vin kämpft sie nieder, wird aber schwer verletzt. Penrod wird zum König gewählt. Elant tritt ab.',
			},
			'woa-40': {
				title: 'An Vins Krankenbett',
				description:
					'Elant sitzt an Vins Krankenbett und sagt ihr, dass Penrod der neue König ist. Er zuckt zurück, als sie ihn berührt.',
			},
			'woa-41': {
				title: 'Rat suchen',
				description:
					'Elant besucht Sazed und Tindwyl und denkt über seine Misserfolge nach. Sie applaudieren ihm für das Festhalten an seinen Idealen.',
			},
			'woa-42': {
				title: 'Mission zu den Koloss',
				description:
					'Elant und Hammond verlassen Luthadel. Elant findet Jastes Lekals Koloss-Armee und verlangt den Rückzug. Elant ersticht Jastes und entkommt.',
			},
			'woa-44': {
				title: 'Vin finden',
				description:
					'Elant, Hammond und Spook diskutieren Vins Angriff auf Cett. OreSeur führt Elant zu Vin in Camons altem Versteck.',
			},
			'woa-46': {
				title: 'Rückkehr von den Koloss',
				description:
					'Elant kehrt vom Koloss-Lager zurück, nachdem die Verhandlung gescheitert ist.',
			},
			'woa-49': {
				title: 'Aufbruch durch das Zinntor',
				description:
					'Elants Gruppe reitet durch das Zinntor hinaus und entkommt Straffs Armee mit Vins Hilfe.',
			},
			'woa-50': {
				title: 'Die Reise nach Norden',
				description:
					'Elant, Vin und Spook brechen das Lager einen Tag nördlich von Luthadel ab. Spook spürt etwas, das ihnen folgt.',
			},
			'woa-51': {
				title: 'Jastes hinrichten',
				description:
					'Die fünf Verfolger sind Jastes Lekal, der die Koloss im Stich ließ. Wütend richtet Elant seinen alten Freund hin. Die Gruppe beschließt umzukehren.',
			},
			'woa-52': {
				title: 'Umkehren',
				description:
					'Während Vin vorauseilt, reiten Elant und Spook hart nach Luthadel, um die belagerte Stadt zu erreichen.',
			},
			'woa-56': {
				title: 'Flüchtlinge aus Tathingdwen',
				description:
					'Elant begegnet dem Nebelgeist. Er und Spook treffen terrisische Flüchtlinge, die aus Tathingdwen fliehen. Elant begleitet sie nach Luthadel.',
			},
			'woa-57': {
				title: 'Rückkehr des Kaisers',
				description:
					'Elant, Hammond und Spook betreten Luthadel und treffen Vin, die ihm sagt, er sei nun Kaiser.',
			},
			'woa-58': {
				title: 'Zum Brunnen',
				description:
					'Elant steigt mit Vin, Hammond und Spook in die Höhlen unter Kredik Shaw hinab. Am leuchtenden Brunnen wird er vom Nebelgeist in den Bauch gestochen.',
			},
			'woa-59': {
				title: 'Der nebelgeborene Kaiser',
				description:
					'Erstochen und sterbend am Brunnen wird Elant gerettet, als Vin ihm die Kugel des Metalls des Obersten Herrschers in den Mund zwingt und ihn zum Nebelgeborenen macht.',
			},
			'woa-60': {
				title: 'Auf der Stadtmauer',
				description:
					'Frisch zum Nebelgeborenen geworden und als Kaiser bestätigt, steht Elant mit Vin auf der Mauer und versichert ihr, dass sie gemeinsam überleben werden.',
			},
			'hoa-1': {
				title: 'Kaiser im Krieg',
				description:
					'Elant führt seine Armeen nach Vetitan, nun ein nebelgeborener Kaiser, der Feldzüge zur Sicherung der verborgenen Versorgungsverstecke leitet.',
			},
			'hoa-3': {
				title: 'Das Versteck sichern',
				description:
					'Elant sichert die Vetitan-Lagerhöhle und findet Nahrung und eine Metallplatte mit einer Warnung vor der Gefahr, die Rashek einsperrte.',
			},
			'hoa-8': {
				title: 'Das Kanallager',
				description:
					'Elant erklärt Fatren, dass die Aussetzung an die Nebel notwendig ist. Er und Vin führen die Flüchtlinge zu einem Kanal.',
			},
			'hoa-10': {
				title: 'Marsch nach Westen',
				description:
					'Elant führt seine Armee südlich von Luthadel auf dem Marsch nach Fadrex, als Sazed und die anderen aufholen.',
			},
			'hoa-12': {
				title: 'Was würde Kelsier tun?',
				description:
					'Elant beruft einen Rat ein. Sie debattieren die vordringenden Nebel und Pläne zur Eroberung der Verstecke. Elant fragt »Was würde Kelsier tun?«',
			},
			'hoa-15': {
				title: 'Die Aussetzung debattieren',
				description:
					'Elant und Hammond debattieren das Für und Wider der Aussetzung der Soldaten an die Nebel.',
			},
			'hoa-17': {
				title: 'Die Nebelaussetzung',
				description:
					'Elant befiehlt, seine Soldaten unter kontrollierten Bedingungen den Nebeln auszusetzen. Demoux stellt ihn zur Rede.',
			},
			'hoa-21': {
				title: 'Die sechzehn Prozent',
				description:
					'Demoux überlebt. Elant gesteht Vin, dass er fürchtet, rücksichtslos zu werden. Noorden präsentiert Daten; das Ergebnis ist exakt sechzehn Prozent. Vier Stichproben ergeben dasselbe Verhältnis.',
			},
			'hoa-25': {
				title: 'Die Belagerung von Fadrex',
				description:
					'Elants Armee erreicht Fadrex. Er inspiziert die Felsformationen und den canyonartigen Eingang — diese Stadt wird schwer einzunehmen sein.',
			},
			'hoa-27': {
				title: 'Auf die Späherin warten',
				description: 'Elant bleibt im Belagerungslager, während Vin allein nach Fadrex eindringt.',
			},
			'hoa-28': {
				title: 'Der Nebelgeist und die Prophezeiung',
				description:
					'Vin kehrt zurück und erzählt Elant vom Nebelgeist in Fadrex. Sie spricht von ihrer Bestimmung, aber Elant warnt vor verdorbenen Prophezeiungen. Vin schlägt vor, auf einen Ball zu gehen.',
			},
			'hoa-30': {
				title: 'Der erste Ball',
				description:
					'Elant und Vin gehen zum Ball in der Festung Orielle. Sie werden angekündigt und trennen sich, um zu verkehren.',
			},
			'hoa-36': {
				title: 'Muster von sechzehn',
				description:
					'Elant akzeptiert Cetts Rat, die Brunnen zu vergiften, aber weigert sich, Unschuldige zu töten. Ein Erdbeben erschüttert das Lager. Demoux offenbart eine weitere statistische Anomalie.',
			},
			'hoa-37': {
				title: 'Yomens Schachzug',
				description:
					'Yomens nächtlicher Überfall erweist sich als verheerende Ablenkung — er vernichtet die Hälfte von Elants zwanzigtausend Koloss.',
			},
			'hoa-40': {
				title: 'Die dritte Kunst',
				description:
					'Elant, Hammond, Cett, Noorden und Demoux setzen die Beweise zusammen: Häm Alurgie. Koloss werden aus Menschen gemacht. Elant befiehlt, eine neue Division aus den nebelgefallenen Soldaten zu bilden.',
			},
			'hoa-43': {
				title: 'Ein abgelehntes Duell',
				description:
					'Elant geht zum zweiten Ball. Er fordert Yomen zum Duell — Yomen lehnt ab. Der wahre Zweck ist Zeitgewinn, während Vin unten arbeitet.',
			},
			'hoa-44': {
				title: 'Elektrum und Atium',
				description:
					'Elant debattiert weiter mit Yomen, bis ein bewusstloser Spion hereintaumelt. Elant packt Yomen und würgt ihn — Yomen ersticht ihn mit übernatürlicher Geschwindigkeit und bestätigt, dass er Atium brennt.',
			},
			'hoa-44.2': {
				title: 'Die Nachricht',
				description:
					'Zurück im Lager wartet Elant auf Vin. Eine Nachricht von Yomen trifft ein — er hat sie gefangen genommen.',
			},
			'hoa-47': {
				title: 'Vin verlieren',
				description:
					'Elant steht in den Nebeln und macht sich Sorgen um Vin. Lord Cett sagt, die Belagerung scheitere. Elant befiehlt Demoux, nach Luthadel zu marschieren.',
			},
			'hoa-51': {
				title: 'Der Duralumin-Schachzug',
				description:
					'Elant nutzt Stahlstöße, um zu einem von Koloss angegriffenen Dorf zu reisen. Er kämpft sich allein durch und führt einen duraluminverstärkten emotionalen Zug aus — und übernimmt die Kontrolle über dreißigtausend Koloss.',
			},
			'hoa-55': {
				title: 'In der Asche kniend',
				description:
					'Elant kehrt mit dreißigtausend neuen Koloss ins Lager zurück und bricht in der Asche zusammen. Der Nebelgeist erscheint und kniet neben ihm. Elant befragt ihn und erfährt, dass die Nebel nicht töten und Ruin verwundbar ist.',
			},
			'hoa-61': {
				title: 'Der morgendliche Angriff',
				description:
					'Elant erreicht das Lager mit dreißigtausend neuen Koloss. Hammond berichtet, dass Luthadel verwüstet ist. Elant befiehlt einen Überraschungsangriff für den Morgen.',
			},
			'hoa-65': {
				title: 'Rückzug nach Fadrex',
				description:
					'Elant fragt Hammond, ob der Angriff richtig ist — er ist es nicht. Bevor er handeln kann, entreißt Ruin ihm die Kontrolle über alle Koloss. Vin befiehlt den Rückzug nach Fadrex.',
			},
			'hoa-67': {
				title: 'Den aufziehenden Sturm beobachten',
				description:
					'Elant und Yomen sehen eine riesige Koloss-Armee vor den Mauern. Ein Erdbeben erschüttert die Stadt. Vin sagt, sie müsse das Atium-Versteck holen.',
			},
			'hoa-70': {
				title: 'Das Geheimnis der Nebel',
				description:
					'Elant besichtigt die Krankenstation mit Yomen. Er erkennt, dass die Nebel nicht töten — sie erwecken Allomanten.',
			},
			'hoa-73': {
				title: 'Die Nebel bewegen sich',
				description:
					'Elant und Hammond bemerken eine plötzliche Veränderung der Nebel — sie fließen zielgerichtet, alle nach Luthadel.',
			},
			'hoa-74': {
				title: 'Der Seher enthüllt',
				description:
					'Elant und Yomen diskutieren das Verschwinden der Nebel. Yomen drückt Elant seine Atium-Kugel in die Hand und offenbart, dass er ein Seher ist.',
			},
			'hoa-74.2': {
				title: 'Flug nach Luthadel',
				description:
					'Elant verlässt Fadrex und beginnt die Reise nach Luthadel, wie Vin es ihn lehrte — Hufeisen werfend und sich mit Stahlstößen vorantreibend.',
			},
			'hoa-76': {
				title: 'Auf dem Weg nach Luthadel',
				description:
					'Elant durchquert die Zentrale Dominanz nach Luthadel und verschlingt die Meilen, wie Vin es ihn lehrte.',
			},
			'hoa-76.2': {
				title: 'In Luthadel einreiten',
				description:
					'Elant reitet von Westen in Luthadel ein. Hoch oben, unsichtbar für ihn, beobachtet Vin — frisch als Bewahrung erhoben — wie der Mann, den sie liebt, in der Stadt ankommt.',
			},
			'hoa-77': {
				title: 'Ruinen von Kredik Shaw',
				description:
					'Elant durchsucht die Ruinen von Kredik Shaw. Luthadel ist leer — die Menschen sind in die Lagerhöhlen verschwunden.',
			},
			'hoa-77.2': {
				title: 'Das Flüstern im Wind',
				description:
					'Elant durchsucht die Festung Venture und findet König Penrods Leichnam. Dann hört er es: den Wind, der seinen Namen flüstert. »Westen«, haucht Vin. »Gruben.« Elant reitet nach Westen zu den Gruben von Hathsin.',
			},
			'hoa-79': {
				title: 'Ankunft an den Gruben',
				description:
					'Elant erreicht die Gruben von Hathsin und findet Demoux und die nebelgefallenen Soldaten bereits dort. Hunderttausende Flüchtlinge haben sich versammelt.',
			},
			'hoa-80': {
				title: 'Die Flüchtlinge',
				description:
					'Demoux meldet, dass sich mehrere hunderttausend Flüchtlinge an den Gruben versammelt haben und eine Koloss-Armee auf sie zumarschiert. Elant hört seinen Namen im Wind geflüstert und folgt ihm.',
			},
			'hoa-80.2': {
				title: 'Der Atium-Schatz',
				description:
					'Von Vins Flüstern geleitet findet Elant den Eingang zu den Kandra-Höhlen. Drinnen entdeckt er Sazed, der allein kämpft, um das Atium zu schützen.',
			},
			'hoa-81': {
				title: 'Die letzte Rede',
				description:
					'Sazed enthüllt die Wahrheit: Das Atium ist Ruins Körper. Die nebelgefallenen Soldaten sind alle Seher. Elant hält eine Rede, legt seinen Nebelumhang an und führt sie in den Angriff.',
			},
			'hoa-81.2': {
				title: 'Gut sterben',
				description:
					'Elant verbrennt stundenlang gewaltige Mengen Atium. Als sein Zinn ausgeht, kann er es immer noch brennen — er blickt auf und sieht Vin. Dann erscheint Marsh. Elant verbrennt Duralumin und Atium gemeinsam in einem letzten Moment vollkommener Klarheit. Er rammt sein Schwert in Marshs Hals, während die Axt seine Brust trifft. Elant stirbt lächelnd — jedes Atium-Klümpchen ist verbrannt.',
			},
			'hoa-83': {
				title: 'Im Tod vereint',
				description:
					'Elants Körper wird neben Vins auf dem Blumenfeld gefunden — Sazeds erstes Geschenk an die neugeschaffene Welt — in Frieden nach all ihren Kämpfen.',
			},
		},
		marsh: {
			...enData.movements.marsh,
			// ── Kinder des Nebels ──────────────────────────────────────────
			'tfe-7': {
				title: 'Der widerwillige Bruder',
				description:
					"Marsh trifft in Clubs' Laden ein, Kelsiers älterer Bruder und selbst ein Rebellenführer. Er schließt sich widerwillig dem Plan der Bande an.",
			},
			'tfe-10.2': {
				title: 'Die Versammlung im Lagerhaus',
				description:
					'Marsh besucht die geheime Lagerhaus-Versammlung mit der Bande und beobachtet seinen Bruder Kelsier, wie er den versammelten Skaa-Arbeitern die Revolution predigt.',
			},
			'tfe-20': {
				title: 'Vin unterrichten',
				description:
					'Marsh kommt zum Renoux-Anwesen in Fellise, um Vin das Suchen beizubringen — Bronze nutzen, um andere Allomanten zu spüren, die Metalle verbrennen, deren Art zu erkennen und Nebellinge von Nebelgeborenen zu unterscheiden. Er lehrt sie auch über Kupfer und wie Raucher allomantische Pulse verbergen können.',
			},
			'tfe-27': {
				title: 'Die Infiltration des Ministeriums',
				description:
					'Marsh trifft Kelsier und Vin in einem verlassenen Gebäude in den Windungen, mit den Tätowierungen eines niedrigrangigen Obligators des Kantons der Inquisition. Er hat das Ministerium wirklich infiltriert. Er enthüllt, dass das Ministerium Beschwichtiger in Skaa-Regionen unter ständiger Beschwichtigung platziert, verborgen durch Raucher. Er bestätigt auch, dass Inquisitoren an Altersschwäche sterben können.',
			},
			'tfe-30': {
				title: 'Verschwinden',
				description:
					'Marsh verstummt, seine Kommunikation bricht ab, als er in die tiefsten Ebenen des Kantons der Inquisition verschwindet. Die Bande fürchtet das Schlimmste.',
			},
			'tfe-32': {
				title: 'Die Leiche',
				description:
					"Kelsier und Vin finden Marshs Leiche — völlig ausgeblutet, eine leblose Hülle. Sein Brief, später in Clubs' Laden gefunden, erklärt, dass die Inquisitoren ihn wahrscheinlich finden würden. Die Bande trauert. Aber die verstümmelte Leiche ist nicht, was sie scheint.",
			},
			'tfe-38': {
				title: 'Der Inquisitor',
				description:
					'Marsh erscheint während des letzten Angriffs auf Kredik Shaw — lebendig, verwandelt mit elf Metallnägeln: zwei durch die Augen, acht in der Brust, einer im Rücken, der sie zusammenhält. Er tötet den Inquisitor Kar, indem er einen Nagel aus dessen Hals zieht, und enthüllt, dass er alle anderen Inquisitoren getötet hat.',
			},
			'tfe-39': {
				title: 'Elf Nägel',
				description:
					'Marsh spricht über sein Überleben und seine Verwandlung — elf Nägel, der grauenhafte Prozess.',
			},
			'woa-7': {
				title: 'Der Konventikel-Führer',
				description:
					'Marsh erscheint in Sazeds Dorf und bietet an, ihn zum Konventikel von Seran zu führen.',
			},
			'woa-9': {
				title: 'Reise mit Sazed',
				description:
					'Marsh reist mit Sazed zum Konventikel. Sein Verhalten wird zunehmend unberechenbarer.',
			},
			'woa-12': {
				title: 'Im Stich gelassen',
				description:
					'Marsh verlässt Sazed abrupt am Konventikel und verschwindet, getrieben von Kräften, denen er nicht widerstehen kann.',
			},
			'woa-57': {
				title: 'Ruins Marionette',
				description:
					'Marsh erscheint in Kredik Shaw unter Ruins vollständiger Kontrolle und schleudert Sazed gegen die Wand.',
			},
			'woa-58': {
				title: 'Niedergeschlagen',
				description: 'Marsh schlägt Sazed, aber Hammond schlägt Marsh mit einem Duellstock nieder.',
			},
			'hoa-0': {
				title: 'Inquisitoren erschaffen',
				description:
					'Unter Ruins Kontrolle vollzieht Marsh dunkle häm Alurgische Rituale in Tathingdwen und erschafft neue Inquisitoren.',
			},
			'hoa-6': {
				title: 'Koloss anführen',
				description: 'Marsh kommandiert eine wachsende Koloss-Armee im Namen Ruins.',
			},
			'hoa-13': {
				title: 'Ruins Bauer',
				description:
					'Marsh sitzt reglos in einem Koloss-Lager und beschließt, seinen Widerstand vorzutäuschen.',
			},
			'hoa-34': {
				title: 'Nahe Tyrian',
				description:
					'Marsh operiert nahe dem Berg Tyrian und erschafft häm Alurgische Stachel aus Gefangenen.',
			},
			'hoa-42': {
				title: 'Die Erstechung Penrods',
				description:
					'Marsh infiltriert Luthadel und treibt König Penrod einen Bronzestachel ins Herz.',
			},
			'hoa-63': {
				title: 'Vin konfrontieren',
				description:
					'Marsh kommt zum Kanton der Ressourcen und findet Vin gefangen. Er verbeugt sich vor Ruin.',
			},
			'hoa-65': {
				title: 'Die Atium-Forderung',
				description:
					'Marsh packt Vin und verlangt das Atium. Vin stiehlt ein Metallfläschchen, entfernt ihren Ohrring und schießt ihn in Marshs Stirn.',
			},
			'hoa-65.2': {
				title: 'Der Bruder des Kaisers',
				description:
					'Marsh erholt sich, würgt Vin mit feruchemischer Kraft. Vin greift auf die Nebel zurück und bricht Ruins Kontrolle. Marsh flieht.',
			},
			'hoa-69': {
				title: 'Das Schicksal des Boten',
				description:
					'Marsh fängt Hauptmann Goradel ab und tötet ihn, liest Spooks in Stahl gravierte Warnung.',
			},
			'hoa-72': {
				title: 'Der Ohrring',
				description:
					'Marsh foltert Vin in Kredik Shaw. Ein Teil von ihm widersteht — er reißt den Ohrring aus ihrem Ohr. Ruins Stimme verstummt.',
			},
			'hoa-73': {
				title: 'Nicht kapitulieren',
				description:
					'Marsh sieht zu, wie Vin die Inquisitoren niedermetzelt und Kredik Shaw zerstört. Vin reißt einen seiner Augenstachel heraus, tötet ihn aber nicht.',
			},
			'hoa-81': {
				title: 'Elant töten',
				description:
					'Marsh, von Ruin getrieben, greift Elant in der Schlacht von Hathsin an. Beide brennen Atium in einem erbitterten Duell. Elant ersticht Marsh, während die Axt seine Brust trifft. Marsh heilt und enthauptet den Kaiser — aber Elant stirbt lächelnd. Als Vin Ruin zerstört, verschwindet die Kontrolle über Marsh. Er bricht unter den Toten zusammen, sein Körper endlich wieder sein eigener.',
			},
		},
		spook: {
			...enData.movements.spook,
			// ── Kinder des Nebels ──────────────────────────────────────────
			'tfe-7': {
				title: 'Der junge Zinnling',
				description:
					"Spukie, Clubs' junger Neffe, arbeitet als Ausguck und Bote für die Bande in der Schreinerei und spricht in dickem östlichem Straßenslang.",
			},
			'tfe-9': {
				title: 'Botengänge',
				description:
					"Spukie überbringt Nachrichten zwischen Clubs' Laden in Luthadel und dem Renoux-Anwesen in Fellise; seine zinnverstärkten Sinne machen ihn zu einem außergewöhnlichen Kundschafter.",
			},
			'tfe-16': {
				title: 'An Vins Bett wachen',
				description:
					"Lestibournes wacht über die verletzte Vin in Clubs' Laden und ist da, als sie von den Verletzungen der Kredik-Shaw-Aufklärungsmission aufwacht. Er erzählt ihr, dass er von Kelsier einen neuen Namen bekommen hat: Spukie.",
			},
			'tfe-22': {
				title: 'Das Taschentuch',
				description:
					'Spukie besucht das Renoux-Anwesen in Fellise und findet Vin beim Lesen des Tagebuchs des Obersten Herrschers. Er sagt, Dockson sei gekommen, um mehr Waffen zu holen, und überreicht ihr errötend und nervös ein Taschentuch, bevor er davonrennt. Sazed erklärt Vin später, dass so ein junger Mann signalisiert, eine Dame ernsthaft hofieren zu wollen.',
			},
			'tfe-24': {
				title: 'Späte Nacht bei Clubs',
				description:
					"Spukie teilt einen späten Trunk in Clubs' Laden mit Kelsier, Ham und Clubs, während die Bande den Stand der Mission bespricht.",
			},
			'tfe-26': {
				title: 'Die Hinrichtungen',
				description:
					"Spukie platzt in Clubs' Laden herein, um Hinrichtungen am Brunnenplatz zu verkünden. Er begleitet die Bande zum Platz und sie erleben die brutale öffentliche Hinrichtung von Skaa-Frauen und -Kindern, deren Blut in den Brunnen geleert wird.",
			},
			'tfe-32': {
				title: 'Aufklärung vom Dach',
				description:
					"Spukie kundschaftet vom Dach über Clubs' Laden mit Vin zusammen und bringt ihr Tricks mit Zinn bei. Er erklärt, dass es nicht nur ums Schärfen der Sinne geht, sondern darum, das Wichtige herauszufiltern und sich nicht vom Rest ablenken zu lassen.",
			},
			'tfe-33': {
				title: 'Zinnling auf Wache',
				description:
					'Als die Bande zum Brunnenplatz geht, wird Spukie in einem der Hinrichtungskarren neben Lord Renoux gesichtet — vom Ministerium gefangen genommen.',
			},
			'tfe-34': {
				title: 'Zeuge des Opfers',
				description:
					'Spukie beobachtet aus der Menge, wie Kelsier am Brunnenplatz kämpft und stirbt — ein Ereignis, das den Rest seines Lebens prägen wird. Das Opfer des Überlebenden verwandelt Spukies Verständnis davon, was es bedeutet, einer Sache zu dienen.',
			},
			'tfe-38': {
				title: 'Die Revolution',
				description:
					'Spukie kämpft mit der Bande während der letzten Revolution und hilft, den Skaa-Aufstand in Luthadel zu koordinieren.',
			},
			'woa-6': {
				title: 'Der wachsende Späher',
				description:
					'Spook kehrt von seiner Erkundungsmission zurück und schließt sich der Bande in der Festung Venture an.',
			},
			'woa-11': {
				title: 'Bandenversammlung',
				description:
					'Spook ist in der Festung Venture, als die Bande sich nach dem Eintreffen von Cetts zweiter Armee neu formiert.',
			},
			'woa-13': {
				title: 'Kriegsrat',
				description:
					'Spook nimmt an Elants Kriegsrat teil, wo die Bande die Strategie für zwei Belagerungsarmeen bespricht.',
			},
			'woa-20': {
				title: 'Beim Kriegsrat',
				description:
					'Spook ist anwesend, während die Bande Elants Plan zur Verhandlung mit Straff bespricht.',
			},
			'woa-23': {
				title: 'Sazeds Rückkehr',
				description:
					'Spook ist anwesend, als Sazed zurückkehrt und die Bande über die Koloss-Armee informiert.',
			},
			'woa-25': {
				title: 'Einkaufsbegleitung',
				description:
					'Spook begleitet Vin, Tindwyl, Allrianne und OreSeur zum Einkaufen auf der Kenton-Straße — gegen seinen Willen.',
			},
			'woa-44': {
				title: 'Vin finden',
				description:
					'Spook schließt sich Elant und Hammond an, um Vins Angriff auf Cett zu besprechen. OreSeur führt sie zu Vin.',
			},
			'woa-49': {
				title: 'Exilgruppe',
				description: 'Spook verlässt Luthadel mit Vin, Elant und Allrianne durch das Zinntor.',
			},
			'woa-50': {
				title: 'Etwas in den Nebeln',
				description:
					'Beim Lagerabbruch nördlich der Stadt spürt Spook als Erster, dass etwas der Gruppe durch die Nebel folgt.',
			},
			'woa-51': {
				title: 'Fünf Männer folgen',
				description:
					"Spooks geschärfte Sinne entdecken fünf Männer, die das Lager beschatten. Nach Jastes' Hinrichtung enthüllt Spook Sazeds Geheimnis.",
			},
			'woa-52': {
				title: 'Zurückreiten',
				description:
					'Spook reitet mit Elant hart nach Luthadel, verzweifelt, die belagerte Stadt zu erreichen.',
			},
			'woa-56': {
				title: 'Die terrisischen Flüchtlinge',
				description:
					'Spook reist mit Elant und trifft terrisische Flüchtlinge. Als der Nebelgeist Elant erscheint, vertreibt Spooks Ankunft ihn.',
			},
			'woa-57': {
				title: 'In die Stadt',
				description:
					'Spook betritt Luthadel mit Elant und Hammond unter den Flüchtlingen und trifft Vin wieder.',
			},
			'woa-58': {
				title: 'Die Höhle',
				description:
					'Spook steigt mit Vin, Elant und Hammond in die rauchgefüllte Höhle unter Kredik Shaw hinab.',
			},
			'hoa-14': {
				title: 'Augen aus Zinn',
				description:
					"Spook brennt ständig Zinn, getrieben von Schuld an Clubs' Tod. Nachts in Urteaus trockenen Straßenkanälen sieht er bei Sternenlicht wie am Tag.",
			},
			'hoa-14.2': {
				title: 'Der Rat des Bürgers',
				description:
					'Spook spioniert Quellions Treffen aus und beobachtet heimlich Beldre, die Schwester des Bürgers.',
			},
			'hoa-16': {
				title: 'Zeuge der Gräueltat',
				description:
					'Mit einem Tuch über den Augen gibt Spook sich als blinder Bettler aus und sieht Quellions Wachen Adlige in ein Gebäude sperren und anzünden.',
			},
			'hoa-16.2': {
				title: 'In der Menge erstochen',
				description:
					'Spook folgt dem Bürger und spricht unbemerkt mit Beldre. Entdeckt kämpft er gegen drei allomantische Wachen, bis ein Schwert ihn durchbohrt.',
			},
			'hoa-19': {
				title: 'Eine Stimme in den Flammen',
				description:
					'Spook erwacht in einem brennenden Gebäude. Eine Stimme — die vorgibt, Kelsier zu sein — führt ihn zu allomantischen Fläschchen. Er trinkt und entdeckt, dass er nun Zinn brennen kann.',
			},
			'hoa-23': {
				title: 'Fieberträume',
				description:
					'Spook liegt fiebernd in seinem Versteck und durchlebt den Tag, als Clubs ihn als Kind aufnahm.',
			},
			'hoa-26': {
				title: 'Gerüchte in der Nacht',
				description:
					'Spook bemerkt einen Metallsplitter in seiner Haut. In einer Taverne hört er Leute über ihn als Mitglied von Kelsiers Bande sprechen.',
			},
			'hoa-29': {
				title: 'Der verborgene See',
				description:
					'Spook führt Sazed, Breeze, Allrianne und Goradel zum ungenutzten Kanton und enthüllt das Versteck des Obersten Herrschers und den verborgenen unterirdischen See.',
			},
			'hoa-31': {
				title: 'Eine Frage des Glaubens',
				description:
					'Spook sagt Sazed, er glaube, dass Kelsier über sie wacht, und fragt, ob es eine Religion gibt, die so etwas unterstützt.',
			},
			'hoa-35': {
				title: 'Durn konfrontieren',
				description:
					'Spook bricht in Durns Versteck ein. Kelsiers Stimme drängt ihn, Quellion zu stellen.',
			},
			'hoa-38': {
				title: 'Die geheimen Ausgänge',
				description:
					'Spook beobachtet Skaa, die ein Gebäude ausgraben, und findet nur neun Schädel unter den Trümmern von zehn Gefangenen — es gibt geheime Ausgänge.',
			},
			'hoa-41': {
				title: 'Überlebender der Flammen',
				description:
					'Spook nutzt die geheimen Ausgänge und rettet ein Mädchen aus einem brennenden Gebäude. Die Menge nennt ihn den »Überlebenden der Flammen«.',
			},
			'hoa-46': {
				title: 'Beldres Garten',
				description:
					'Spook besucht Beldre und sagt ihr, er sei ein Mitglied von Kelsiers Bande. Kelsiers Stimme befiehlt ihm, Quellion und seine Schwester zu töten — Spook weigert sich.',
			},
			'hoa-46.2': {
				title: 'Die Kanäle wiederherstellen',
				description:
					'Spook bittet Sazed, die Kanäle wieder mit Wasser zu füllen, und verlangt nur Vertrauen.',
			},
			'hoa-49': {
				title: 'Beldres Flehen',
				description:
					'Spook erklärt, wie Quellion an die Macht kam. Beldre fleht, ihren Bruder nicht zu töten. Sie beschließen, sie als Geisel zu behalten.',
			},
			'hoa-53': {
				title: 'Versprechen und Pläne',
				description:
					'Spook spricht mit Beldre über sein Leben in Kelsiers Bande und verspricht, die Stadt zu retten, ohne Quellion zu verletzen.',
			},
			'hoa-53.2': {
				title: 'Die Tavernenrunde',
				description:
					'Spook verspricht Durn Handelsverträge im Austausch für die Räumung der Kanäle. Gemeinsam besuchen sie Tavernen in Urteau.',
			},
			'hoa-56': {
				title: 'Der endgültige Plan',
				description:
					'Spook arbeitet an einem Plan, Quellions geheime allomantische Fähigkeiten zu enthüllen. Er sagt Sazed, er habe Vertrauen, dass jemand wacht.',
			},
			'hoa-58': {
				title: 'Held von Urteau',
				description:
					'Sazed unterweist Spook im Wasserumleitungsmechanismus. Bei Quellions Rede bricht ein Aufstand aus. Beldre wird als Münzwerferin enthüllt. Spook sieht Quellion auf Kelsiers Stimme reagieren — und versteht: Kelsier ist Ruin, die Stachel sind Häm Alurgie. Er reißt Quellions Stachel heraus und entfernt seinen eigenen. Er stürzt sich ins brennende Gebäude, aktiviert den Mechanismus und rettet Urteau.',
			},
			'hoa-62': {
				title: 'Der Preis des Sieges',
				description:
					'Spook liegt bewusstlos im Krankenhaus, schwer verbrannt. Sazed wacht über ihn. Beldre sagt, er sei ein Held.',
			},
			'hoa-64': {
				title: 'Die Botschaft in Stahl',
				description:
					'Spook hört eine Stimme, die ihm sagt, er solle Vin eine Warnung schicken. Er ritzt sie in Stahl und vertraut sie Hauptmann Goradel an.',
			},
			'hoa-73': {
				title: 'In die Höhlen',
				description:
					'Allrianne alarmiert Breeze über seltsames Verhalten der Nebel. Spook sagt, alle sollen sich in den Lagerhöhlen versammeln.',
			},
			'hoa-83': {
				title: 'Eine neue Welt',
				description:
					'Spook taucht aus den Höhlen in Sazeds neugestaltete Welt auf — ein Feld aus Blumen und grünem Gras unter blauem Himmel. Er findet die Körper von Vin und Elant und ein Buch von Sazed, das alles erklärt, einschließlich dass Sazed Spook auf Kelsiers Bitte zum Nebelgeborenen machte.',
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

	// ── Chapter seasons (book → chapter → season/year)
	chapterSeasons: {
		tfe: {
			0: { season: 'Frühling', year: '1021 FE' },
			1: { season: 'Frühling', year: '1021 FE' },
			2: { season: 'Frühling', year: '1021 FE' },
			3: { season: 'Frühling', year: '1021 FE' },
			4: { season: 'Frühling', year: '1021 FE' },
			5: { season: 'Frühling', year: '1021 FE' },
			6: { season: 'Frühling', year: '1021 FE' },
			7: { season: 'Spätfrühling', year: '1021 FE' },
			8: { season: 'Sommer', year: '1021 FE' },
			9: { season: 'Sommer', year: '1021 FE' },
			10: { season: 'Sommer', year: '1021 FE' },
			11: { season: 'Sommer', year: '1021 FE' },
			12: { season: 'Sommer', year: '1021 FE' },
			13: { season: 'Sommer', year: '1021 FE' },
			14: { season: 'Sommer', year: '1021 FE' },
			15: { season: 'Sommer', year: '1021 FE' },
			16: { season: 'Sommer', year: '1021 FE' },
			17: { season: 'Sommer', year: '1021 FE' },
			18: { season: 'Sommer', year: '1021 FE' },
			19: { season: 'Spätsommer', year: '1021 FE' },
			20: { season: 'Spätsommer', year: '1021 FE' },
			21: { season: 'Herbst', year: '1021 FE' },
			22: { season: 'Herbst', year: '1021 FE' },
			23: { season: 'Herbst', year: '1021 FE' },
			24: { season: 'Herbst', year: '1021 FE' },
			25: { season: 'Spätherbst', year: '1021 FE' },
			26: { season: 'Spätherbst', year: '1021 FE' },
			27: { season: 'Winter', year: '1021 FE' },
			28: { season: 'Winter', year: '1021 FE' },
			29: { season: 'Winter', year: '1021 FE' },
			30: { season: 'Winter', year: '1021 FE' },
			31: { season: 'Winter', year: '1021 FE' },
			32: { season: 'Winter', year: '1022 FE' },
			33: { season: 'Vorfrühling', year: '1022 FE' },
			34: { season: 'Vorfrühling', year: '1022 FE' },
			35: { season: 'Vorfrühling', year: '1022 FE' },
			36: { season: 'Vorfrühling', year: '1022 FE' },
			37: { season: 'Vorfrühling', year: '1022 FE' },
			38: { season: 'Vorfrühling', year: '1022 FE' },
			39: { season: 'Frühling', year: '1022 FE' },
		},
		woa: {
			1: { season: 'Herbst', year: '1023 FE' },
			2: { season: 'Herbst', year: '1023 FE' },
			3: { season: 'Herbst', year: '1023 FE' },
			4: { season: 'Herbst', year: '1023 FE' },
			5: { season: 'Herbst', year: '1023 FE' },
			6: { season: 'Herbst', year: '1023 FE' },
			7: { season: 'Spätherbst', year: '1023 FE' },
			8: { season: 'Herbst', year: '1023 FE' },
			9: { season: 'Spätherbst', year: '1023 FE' },
			10: { season: 'Herbst', year: '1023 FE' },
			11: { season: 'Frühwinter', year: '1023 FE' },
			12: { season: 'Spätherbst', year: '1023 FE' },
			13: { season: 'Frühwinter', year: '1023 FE' },
			14: { season: 'Frühwinter', year: '1023 FE' },
			15: { season: 'Winter', year: '1023 FE' },
			16: { season: 'Winter', year: '1023 FE' },
			17: { season: 'Winter', year: '1023 FE' },
			19: { season: 'Winter', year: '1023 FE' },
			20: { season: 'Winter', year: '1023 FE' },
			21: { season: 'Winter', year: '1023 FE' },
			22: { season: 'Winter', year: '1023 FE' },
			23: { season: 'Winter', year: '1023 FE' },
			24: { season: 'Winter', year: '1023 FE' },
			25: { season: 'Winter', year: '1023 FE' },
			26: { season: 'Winter', year: '1023 FE' },
			27: { season: 'Winter', year: '1023 FE' },
			28: { season: 'Winter', year: '1024 FE' },
			29: { season: 'Winter', year: '1024 FE' },
			30: { season: 'Winter', year: '1024 FE' },
			31: { season: 'Winter', year: '1024 FE' },
			32: { season: 'Winter', year: '1024 FE' },
			33: { season: 'Winter', year: '1024 FE' },
			34: { season: 'Winter', year: '1024 FE' },
			35: { season: 'Winter', year: '1024 FE' },
			36: { season: 'Winter', year: '1024 FE' },
			37: { season: 'Winter', year: '1024 FE' },
			38: { season: 'Winter', year: '1024 FE' },
			40: { season: 'Spätwinter', year: '1024 FE' },
			41: { season: 'Spätwinter', year: '1024 FE' },
			42: { season: 'Spätwinter', year: '1024 FE' },
			43: { season: 'Spätwinter', year: '1024 FE' },
			44: { season: 'Spätwinter', year: '1024 FE' },
			45: { season: 'Spätwinter', year: '1024 FE' },
			46: { season: 'Spätwinter', year: '1024 FE' },
			47: { season: 'Spätwinter', year: '1024 FE' },
			49: { season: 'Spätwinter', year: '1024 FE' },
			50: { season: 'Spätwinter', year: '1024 FE' },
			51: { season: 'Spätwinter', year: '1024 FE' },
			52: { season: 'Spätwinter', year: '1024 FE' },
			53: { season: 'Spätwinter', year: '1024 FE' },
			54: { season: 'Spätwinter', year: '1024 FE' },
			55: { season: 'Spätwinter', year: '1024 FE' },
			56: { season: 'Winter', year: '1024 FE' },
			57: { season: 'Winter', year: '1024 FE' },
			58: { season: 'Winter', year: '1024 FE' },
			59: { season: 'Winter', year: '1024 FE' },
			60: { season: 'Winter', year: '1024 FE' },
		},
		hoa: {
			0: { season: 'Frühling', year: '1026 FE' },
			1: { season: 'Frühling', year: '1026 FE' },
			3: { season: 'Frühling', year: '1026 FE' },
			4: { season: 'Sommer', year: '1026 FE' },
			5: { season: 'Sommer', year: '1026 FE' },
			6: { season: 'Sommer', year: '1026 FE' },
			8: { season: 'Sommer', year: '1026 FE' },
			10: { season: 'Sommer', year: '1026 FE' },
			12: { season: 'Sommer', year: '1026 FE' },
			13: { season: 'Herbst', year: '1026 FE' },
			14: { season: 'Herbst', year: '1026 FE' },
			15: { season: 'Herbst', year: '1026 FE' },
			16: { season: 'Herbst', year: '1026 FE' },
			17: { season: 'Herbst', year: '1026 FE' },
			18: { season: 'Herbst', year: '1026 FE' },
			19: { season: 'Herbst', year: '1026 FE' },
			21: { season: 'Herbst', year: '1026 FE' },
			22: { season: 'Herbst', year: '1026 FE' },
			23: { season: 'Frühwinter', year: '1026 FE' },
			24: { season: 'Winter', year: '1026 FE' },
			25: { season: 'Herbst', year: '1026 FE' },
			26: { season: 'Frühwinter', year: '1026 FE' },
			27: { season: 'Herbst', year: '1026 FE' },
			28: { season: 'Herbst', year: '1026 FE' },
			29: { season: 'Frühwinter', year: '1026 FE' },
			30: { season: 'Herbst', year: '1026 FE' },
			31: { season: 'Frühwinter', year: '1026 FE' },
			34: { season: 'Winter', year: '1026 FE' },
			35: { season: 'Winter', year: '1026 FE' },
			36: { season: 'Winter', year: '1026 FE' },
			37: { season: 'Winter', year: '1026 FE' },
			38: { season: 'Winter', year: '1026 FE' },
			40: { season: 'Winter', year: '1026 FE' },
			41: { season: 'Winter', year: '1026 FE' },
			42: { season: 'Winter', year: '1026 FE' },
			43: { season: 'Winter', year: '1026 FE' },
			44: { season: 'Winter', year: '1026 FE' },
			45: { season: 'Winter', year: '1026 FE' },
			46: { season: 'Winter', year: '1026 FE' },
			47: { season: 'Winter', year: '1026 FE' },
			48: { season: 'Winter', year: '1026 FE' },
			49: { season: 'Winter', year: '1026 FE' },
			50: { season: 'Winter', year: '1026 FE' },
			51: { season: 'Winter', year: '1026 FE' },
			53: { season: 'Winter', year: '1026 FE' },
			54: { season: 'Spätwinter', year: '1026 FE' },
			55: { season: 'Spätwinter', year: '1026 FE' },
			56: { season: 'Winter', year: '1026 FE' },
			57: { season: 'Spätwinter', year: '1026 FE' },
			58: { season: 'Frühling', year: '1027 FE' },
			59: { season: 'Frühling', year: '1027 FE' },
			60: { season: 'Spätwinter', year: '1026 FE' },
			61: { season: 'Spätwinter', year: '1026 FE' },
			62: { season: 'Sommer', year: '1027 FE' },
			63: { season: 'Spätwinter', year: '1026 FE' },
			64: { season: 'Sommer', year: '1027 FE' },
			65: { season: 'Spätwinter', year: '1026 FE' },
			66: { season: 'Sommer', year: '1027 FE' },
			67: { season: 'Frühling', year: '1027 FE' },
			68: { season: 'Frühling', year: '1027 FE' },
			69: { season: 'Sommer', year: '1027 FE' },
			70: { season: 'Frühling', year: '1027 FE' },
			71: { season: 'Herbst', year: '1027 FE' },
			72: { season: 'Sommer', year: '1027 FE' },
			73: { season: 'Sommer', year: '1027 FE' },
			74: { season: 'Herbst', year: '1027 FE' },
			75: { season: 'Herbst', year: '1027 FE' },
			76: { season: 'Herbst', year: '1027 FE' },
			77: { season: 'Herbst', year: '1027 FE' },
			78: { season: 'Herbst', year: '1027 FE' },
			79: { season: 'Herbst', year: '1027 FE' },
			80: { season: 'Herbst', year: '1027 FE' },
			81: { season: 'Herbst', year: '1027 FE' },
			82: { season: 'Herbst', year: '1027 FE' },
			83: { season: 'Herbst', year: '1027 FE' },
			84: { season: 'Herbst', year: '1027 FE' },
		},
	},
};
