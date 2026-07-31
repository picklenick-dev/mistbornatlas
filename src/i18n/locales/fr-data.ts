/**
 * French data translations.
 * Sources: Official Orbit / Calmann-Lévy editions, translated by Mélanie Fazi.
 * Key terminology: Lord Ruler = Seigneur Maître, Mistborn = Fils-des-brumes,
 * Ruin = Ravage, Preservation = Sauvegarde, Steel Ministry = Ministère de l'Acier.
 */
import type { DataTranslations } from '../types';
import { enData } from './en-data';

export const frData: DataTranslations = {
	...enData,

	books: {
		tfe: { title: "L'Empire ultime", year: '1021-1022 FE', confidence: 'verified' },
		woa: { title: "Le Puits de l'ascension", year: '1022-1024 FE', confidence: 'verified' },
		hoa: { title: 'Le Héros des siècles', year: '1024-1025 FE', confidence: 'verified' },
	},

	characters: {
		vin: {
			name: 'Vin',
			title: 'Fils-des-brumes', // Series standard; descriptive as Fille-des-brumes
			description:
				"Une puissante Fils-des-brumes qui s'est élevée des rues de Luthadel pour devenir l'une des figures les plus importantes de l'histoire de Scadrial.",
			confidence: 'verified',
			fieldConfidence: { description: 'verified' },
			titleProgression: {
				'tfe-1': 'Gamine des rues', //
				'tfe-9': 'Apprentie Fils-des-brumes',
				'tfe-12': 'Lady Valette Renoux',
				'tfe-17': 'Fils-des-brumes',
				'tfe-38': 'L’Assassin du Seigneur Maître', // Contextual title
				'woa-1': 'Héritière du Survivant',
				'woa-47': 'Protectrice de Luthadel',
				'hoa-1': 'Impératrice',
				'hoa-79': 'Réceptacle de Sauvegarde', // Preservation is "Sauvegarde"
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
			title: 'Le Survivant',
			description:
				'Le charismatique meneur de la rébellion de Luthadel, célèbre pour s’être échappé des Puits de Hathsin.',
			confidence: 'verified',
			fieldConfidence: { description: 'verified' },
			titleProgression: {
				'tfe-0': 'Skaa mystérieux',
				'tfe-1': 'Le Survivant de Hathsin', //
				'tfe-11': "Chef de l'équipe",
				'tfe-21': 'Destructeur des Puits',
				'tfe-34': 'Martyr de la Rébellion',
			},
			titleProgressionConfidence: {
				'tfe-0': 'verified',
				'tfe-1': 'verified',
				'tfe-11': 'verified',
				'tfe-21': 'verified',
				'tfe-34': 'verified',
			},
			secretHistoryTitles: {
				'woa-1': 'Ombre Cognitive',
				'hoa-1': 'Champion de Sauvegarde',
			},
		},
		sazed: {
			name: 'Sazed',
			title: 'Gardien terrisien', //
			description:
				'Un Gardien terrisien qui préserve la connaissance des religions disparues grâce à la ferrochimie.',
			confidence: 'verified',
			fieldConfidence: { description: 'verified' },
			titleProgression: {
				'tfe-9': 'Intendant terrisien', //
				'tfe-22': 'Gardien des religions',
				'woa-1': 'Érudit et Gardien',
				'woa-12': 'Chercheur de vérité',
				'woa-52': 'Défenseur de Luthadel',
				'hoa-1': 'Ambassadeur du Nouvel Empire',
				'hoa-50': 'Érudit en crise',
				'hoa-82': 'Héros des siècles',
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
			title: 'Empereur',
			description:
				"L'héritier idéaliste de la Maison Venture, devenu le premier souverain du Nouvel Empire.",
			confidence: 'verified',
			fieldConfidence: { description: 'verified' },
			titleProgression: {
				'tfe-12': 'Noble philosophe',
				'tfe-24': 'Noble dissident',
				'tfe-38': 'Dirigeant inattendu',
				'woa-1': 'Roi de la Dominance Centrale', // [4]
				'woa-35': 'Roi déchu',
				'woa-58': 'Empereur Fils-des-brumes',
				'hoa-1': 'Empereur du Nouvel Empire',
				'hoa-54': 'Empereur-guerrier',
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
			title: 'Inquisiteur d’Acier',
			description:
				'Le frère de Kelsier, qui a infiltré le Ministère et payé le prix ultime pour la victoire de la rébellion.',
			confidence: 'verified',
			fieldConfidence: { description: 'verified' },
			titleProgression: {
				'tfe-7': 'Infiltré rebelle',
				'tfe-27': 'Espion du Ministère',
				'tfe-38': "Inquisiteur d'Acier",
				'woa-4': 'Inquisiteur réticent',
				'woa-57': 'Pion de Ravage', // Ruin is "Ravage"
				'hoa-0': 'Main de Ravage',
				'hoa-79': "Yeux d'Acier", // Ironeyes is "Yeux d'Acier"
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
			name: 'Spectre', // Spook is "Spectre"
			title: "Œil-d'étain", // Tineye is "Œil-d'étain"
			description:
				"Le plus jeune membre de l'équipe de Kelsier, un Brumeux d’étain qui devient un héros inattendu.",
			confidence: 'verified',
			fieldConfidence: { description: 'verified' },
			titleProgression: {
				'tfe-7': "Jeune Œil-d'étain",
				'woa-1': 'Éclaireur',
				'hoa-14': 'Infiltré',
				'hoa-38': "Savant de l'étain", // Or "Forcené d'étain"
				'hoa-58': "Héros d'Urteau",
				'hoa-83': 'Survivant des flammes',
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
				"La capitale de l'Empire Ultime et siège du pouvoir du Seigneur Maître pendant mille ans. La seule ville autorisée à posséder des remparts de pierre.",
			confidence: 'verified',
		},
		'lake-luthadel': {
			name: 'Lac Luthadel',
			description: "Étendue d'eau douce située à l'est de la capitale, ternie par la cendre.",
			confidence: 'verified',
		},
		'pits-hathsin': {
			name: 'Les Fosses de Hathsin',
			description:
				"Une Perpendicularité se manifestant sous forme de fissures irrégulières dans le sol où l'atium cristallise. La carte est définie par d'étroites fissures verticales acérées s'enfonçant dans la croûte. Les prisonniers rampaient dans ces tunnels claustrophobiques à la recherche de géodes. Kelsier découvrit le Onzième Métal (Malatium) dans une chambre cachée au cœur du réseau de fissures avant de détruire les cristaux et de mettre fin à la production d'atium.",
			safeDescription:
				"Une brutale mine-prison au nord-est de Luthadel, définie par d'étroites fissures verticales acérées s'enfonçant dans la croûte. Les prisonniers condamnés rampent dans ces crevasses oppressantes à la recherche des rares géodes d'atium qui s'y forment. Peu y survivent longtemps.",
			confidence: 'verified',
		},
		fellise: {
			name: 'Fellise',
			description:
				"Lieu de villégiature noble à l'ouest de Luthadel où la maison Renoux possédait un domaine.",
			confidence: 'verified',
		},
		holstep: {
			name: 'Holstep',
			description:
				"Ville de garnison à l'ouest de Luthadel, point de contrôle pour les routes commerciales et militaires.",
			confidence: 'verified',
		},
		'ashmount-tyrian': {
			name: 'Tyrian',
			description:
				"Pendant l'ascension de Ravage, Marsh fut témoin d'une éruption de lave massive sur ses pentes après avoir créé une pointe hémalurgique à proximité, et ses chutes de cendre toujours plus épaisses signalaient la détérioration accélérée du monde.",
			safeDescription:
				'Le mont de cendres le plus proche de Luthadel, visible depuis les remparts. Ses éruptions constantes recouvrent la Dominance Centrale des plus épaisses couches de cendre, nécessitant des équipes de nettoyage permanentes.',
			confidence: 'verified',
		},
		urteau: {
			name: 'Urteau',
			description:
				"Célèbre pour ses « tranchées de rue » — des canaux asséchés par le Seigneur Maître pour servir de chaussées encaissées. Bastion du Citoyen (Quellion) pendant l'Effondrement.",
			safeDescription:
				'La capitale de la Dominance du Nord et demeure ancestrale de la Maison Venture.',
			confidence: 'verified',
		},
		'ashmount-kalling': {
			name: 'Kalling',
			description:
				'Principal volcan de la Dominance du Nord, avec une cendre plus sombre et plus abrasive.',
			confidence: 'verified',
		},
		'fadrex-city': {
			name: 'Fadrex',
			description:
				"A gagné en importance après la mort du Seigneur Maître. Compte sur des formations rocheuses naturelles (plateformes de « cremnol ») pour sa défense plutôt que sur des murailles. Abrite l'une des Cavernes de Stockage secrètes du Seigneur Maître.",
			safeDescription:
				"Une plaque tournante commerciale majeure dans la Dominance de l'Ouest, fortifiée par des formations rocheuses naturelles.",
			confidence: 'verified',
		},
		tremredare: {
			name: 'Tremredare',
			description:
				"Ancienne capitale de la Dominance de l'Ouest, abandonnée après l'Effondrement faute de défenses.",
			confidence: 'verified',
		},
		'ashmount-morag': {
			name: 'Morag',
			description: "Volcan massif dominant l'horizon occidental de l'empire.",
			confidence: 'verified',
		},
		chardees: {
			name: 'Chardees',
			description:
				'Siège ancestral de la maison Hasting, dissimulé dans la cartographie officielle.',
			confidence: 'verified',
		},
		austrex: {
			name: 'Austrex',
			description: "Capitale de la Dominance du Sud et centre du grenier à blé de l'empire.",
			confidence: 'verified',
		},
		vetitan: {
			name: 'Vetitan',
			description:
				"Construite directement au-dessus de l'une des Cavernes de Stockage du Seigneur Maître. L'architecture s'est adaptée aux fortes chutes de cendre avec des extensions souterraines et une organisation centrée sur le Ministère. À l'époque du Héros des Siècles, la ville est envahie par les amas de cendre, les habitants vivant aux étages supérieurs tandis que les niveaux inférieurs se remplissent de cendre.",
			safeDescription:
				'Une ville de la Dominance du Nord avec une architecture adaptée aux fortes chutes de cendre.',
			confidence: 'verified',
		},
		'ashmount-zerinah': {
			name: 'Zerinah',
			description:
				"Le mont de cendres le plus méridional, régulateur thermique de l'hémisphère sud.",
			confidence: 'verified',
		},
		conventical: {
			name: 'Conventicule de Seran',
			description:
				"Un escalier en spirale abrupt descend vers la vérité : la Salle des Serviteurs (charniers), les dortoirs des Inquisiteurs et la Chambre d'Hémalurgie avec ses tables de pierre, canaux de drainage et voûte à pointes. Au plus profond, Sazed découvrit l'inscription sur plaque d'acier de Kwaan cachée dans une alcôve secrète. C'est ici que les Inquisiteurs sont fabriqués.",
			safeDescription:
				'Une forteresse verticale taillée dans une falaise près de la frontière nord. Les niveaux supérieurs servent de temple standard du Ministère (chapelle, logements).',
			confidence: 'verified',
		},
		tathingdwen: {
			name: 'Tathingdwen',
			description: 'Capitale de la Dominance de Terris, située dans les montagnes du nord.',
			confidence: 'verified',
		},
		'terris-mountains': {
			name: 'Montagnes de Terris',
			description:
				"L'emplacement du Puits de l'Ascension originel avant que le Seigneur Maître n'altère la géographie du monde.",
			safeDescription: 'Une chaîne de montagnes accidentée où le peuple terrisien fut asservi.',
			confidence: 'verified',
		},
		'tincut-fastness': {
			name: 'Place forte de Tincut',
			description:
				"Là où le Synode et les réfugiés se sont retirés pendant l'effondrement de l'Empire.",
			safeDescription: 'Une forteresse cachée dans les montagnes de Terris.',
			confidence: 'probable',
		},
		'high-villages': {
			name: 'Villages des hauteurs',
			description:
				'Réseau de villages terrisiens cachés en montagne, reliés par des tunnels souterrains.',
			confidence: 'probable',
		},
		'imperial-canal': {
			name: 'Canal Impérial',
			description:
				"Une artère artificielle creusée dans la terre par décret du Seigneur Maître, reliant Tathingdwen à Luthadel pour l'extraction des ressources terrisiennes et l'insertion des soldats impériaux. L'infrastructure même qui reliait l'empire devint l'avenue de sa destruction lorsque les armées koloss utilisèrent la route du canal pour attaquer — un monument à la fois à l'ingénierie impériale et à l'oppression impériale.",
			safeDescription:
				"Non pas une rivière naturelle, mais une artère artificielle creusée dans la terre par décret du Seigneur Maître. Relie Tathingdwen au nord directement à Luthadel, permettant le commerce et le transport à travers l'empire. Un monument à l'ingénierie impériale.",
			confidence: 'probable',
		},
		'kandra-homeland': {
			name: 'Terre natale des Kandra',
			description:
				'Cavernes profondes sous les Fosses de Hathsin, foyer du peuple kandra qui garde les plus grands secrets du Seigneur Maître, y compris le Trust.',
			safeDescription:
				'Un complexe souterrain caché sous les Fosses de Hathsin. Sa véritable nature et son but sont inconnus du monde extérieur.',
			confidence: 'verified',
		},
		'ashmount-torinost': {
			name: 'Torinost',
			description: "Pic massif au nord de la Dominance de l'Ouest.",
			confidence: 'verified',
		},
		'ashmount-faleast': {
			name: 'Faleast',
			description:
				"Principal relief de la Dominance de l'Est, dont la cendre est plus abrasive en raison de la silice.",
			confidence: 'verified',
		},
		'ashmount-doriel': {
			name: 'Doriel',
			description: 'Mont de cendres au sud de Luthadel, près de la côte de la Mer du Sud.',
			confidence: 'verified',
		},
		'statlin-city': {
			name: 'Statlin',
			description:
				"Point d'ancrage sud du réseau de Cavernes de Stockage. Contient la Caverne de Stockage 2 avec des fournitures d'urgence.",
			safeDescription: 'Une ville dans la Dominance du Sud.',
			confidence: 'probable',
		},
		'tresting-plantation': {
			name: 'Plantation Tresting',
			description:
				'Plantation skaa du lord Tresting, avec des centaines de travailleurs et une garnison.',
			confidence: 'probable',
		},
		'lekal-city': {
			name: 'Cité Lekal',
			description:
				'Cité-forteresse de la maison Lekal où la ville entière est une extension du domaine noble.',
			confidence: 'verified',
		},
		mantiz: {
			name: 'Mantiz',
			description:
				"Ville dans le nord de la Dominance de l'Ouest avec quatre grands manoirs et une accumulation sévère de cendre.",
			confidence: 'verified',
		},
		'channerel-river': {
			name: 'Rivière Channerel',
			description:
				"Artère fluviale principale de l'empire, vitale pour le commerce et le transport.",
			confidence: 'verified',
		},
		'burnlands-west': {
			name: "Terres brûlées de l'Ouest",
			description: "Désert inhabitable en bordure occidentale de l'empire, trop proche du soleil.",
			confidence: 'verified',
		},
		'burnlands-east': {
			name: "Terres brûlées de l'Est",
			description: "Désert inhabitable en bordure orientale de l'empire.",
			confidence: 'verified',
		},
		'arguois-caverns': {
			name: "Cavernes d'Arguois",
			description:
				"Utilisées par l'armée rebelle de Kelsier comme base cachée, ces cavernes ont abrité des milliers de soldats skaa s'entraînant pour la révolution.",
			safeDescription:
				'Un réseau de grottes calcaires dans les montagnes entre Luthadel et les Fosses de Hathsin.',
			confidence: 'verified',
		},
		garthwood: {
			name: 'Garthwood',
			description:
				"Un établissement dans la Dominance de l'Est dont les villages environnants furent parmi les premiers à connaître la maladie des brumes qui se répandrait ensuite à travers l'empire — un signe précoce du schéma qu'Elend et Vin allaient découvrir.",
			safeDescription:
				"Un établissement dans la Dominance de l'Est où Sazed voyagea pour enseigner les religions supprimées aux skaa libérés.",
			confidence: 'probable',
		},
		'straffs-camp': {
			name: 'Camp de Straff',
			description: 'Campement militaire de Straff Venture au nord de Luthadel durant le siège.',
			confidence: 'probable',
		},
		'koloss-camp': {
			name: 'Camp des Koloss',
			description:
				"Le campement de l'armée koloss près de Luthadel durant le siège de 1024 DE. La tentative désastreuse de Jastes Lekal d'acheter la loyauté des koloss avec des pièces en bois conduisit les créatures à lancer un assaut dévastateur contre la ville.",
			safeDescription:
				'Un vaste campement de forces koloss près de Luthadel, leur présence étant une menace constante durant le siège.',
			confidence: 'probable',
		},
		longsfollow: {
			name: 'Longsfollow',
			description: "Bourg dans les cols de montagne de la Dominance de l'Ouest.",
			confidence: 'probable',
		},
		chakatah: {
			name: 'Chakatah',
			description: "Petit village minier de la Dominance de l'Ouest.",
			confidence: 'probable',
		},
		'north-seran': {
			name: 'Nord de Seran',
			description: 'Territoire proche du Conventicule de Seran.',
			confidence: 'probable',
		},
		'river-seran': {
			name: 'Rivière Seran',
			description:
				'Voie navigable méridionale utilisée par le Ministère pour le transport de matériaux.',
			confidence: 'probable',
		},
		urbene: {
			name: 'Urbene',
			description: 'Relais du Ministère pour les convois de grain vers la capitale.',
			confidence: 'probable',
		},
		erlac: {
			name: 'Erlac',
			description: 'Garnison au sud-ouest de Luthadel patrouillant les routes vers la ville.',
			confidence: 'probable',
		},
		'valtroux-city-central': {
			name: 'Valtroux',
			description:
				"Abritait une armée permanente de 5 000 soldats qui interceptèrent et massacrèrent l'armée rebelle de Yeden près de la ville de Holstep, démontrant la capacité du Seigneur Maître à projeter une force militaire rapide.",
			safeDescription: 'Une importante ville de garnison située au nord-ouest de Luthadel.',
			confidence: 'probable',
		},
		'haverfrex-cannery-central': {
			name: 'Haverfrex',
			description:
				"Servit de nœud d'approvisionnement principal pour l'armée de Lord Ashweather Cett durant le Siège de Luthadel, fournissant l'endurance logistique nécessaire à une présence militaire à long terme.",
			safeDescription:
				'Un point de passage industriel dans la Dominance Centrale connu pour sa conserverie à grande échelle.',
			confidence: 'probable',
		},
		'cetts-camp': {
			name: 'Camp de Cett',
			description:
				'Le campement militaire de Lord Ashweather Cett au nord-ouest de Luthadel pendant le siège.',
			confidence: 'probable',
		},
		'western-coast': {
			name: 'Côte Occidentale',
			description:
				"Le littoral occidental de l'Empire Ultime où les terres habitées cèdent la place à un océan gris sans fin du Royaume Cognitif. Kelsier atteignit ce rivage désolé après des semaines de course vers l'ouest, pour n'y trouver que Ravage l'attendant. De là, le Royaume Cognitif s'étend à travers une mer sombre vers des terres lointaines au-delà de la frontière de Scadrial.",
			safeDescription:
				"Le bord occidental désolé de l'Empire Ultime où le continent se termine et l'océan commence. Peu habitée et rarement visitée, ses côtes marquent la frontière du monde connu.",
			confidence: 'probable',
		},
		'ire-fortress': {
			name: 'Forteresse des Ire',
			description:
				"Une imposante forteresse lumineuse des Ire bâtie dans le Royaume Cognitif bien au-delà de la frontière occidentale de Scadrial. Construite en pierre blanche palpitant d'une lueur intérieure, elle est entourée d'étranges arbres semblables à du verre et alimentée par un conduit d'Investiture brute. Dans ses voûtes, les Ire gardent un orbe capable de capturer le pouvoir d'un Éclat mourant — la clé de l'Ascension. Kelsier infiltra la forteresse, écouta les plans des anciens Elantriens et vola l'orbe en terrorisant leur groupe d'expédition.",
			safeDescription:
				'Une mystérieuse forteresse aperçue dans les récits du monde au-delà de la mort, dont la nature et le but sont inconnus des vivants.',
			confidence: 'probable',
		},
	},

	cities: {
		luthadel: {
			name: 'Luthadel',
			description:
				"La capitale de l'Empire Ultime et centre culturel sous le règne du Seigneur Maître. Seule ville à posséder des remparts artificiels. Bâtie en symétrie radiale autour de Kredik Shaw, qui surplombe directement le Puits de l'Ascension. Huit portes nommées d'après les métaux allomantiques permettent l'accès.",
			confidence: 'verified',
		},
		urteau: {
			name: 'Urteau',
			description:
				"Plus grande ville de la Dominance du Nord, demeure ancestrale de la maison Venture. Définie par ses tranchées de rue — de larges canaux asséchés servant de voies enfoncées. L'eau a été détournée vers un lac souterrain caché. Pas de remparts par décret du Seigneur Maître.",
			confidence: 'verified',
		},
		fadrex: {
			name: 'Fadrex',
			description:
				"Plaque tournante commerciale de la Dominance de l'Ouest, fortifiée par des formations rocheuses de cremnol qui servent de murailles naturelles. Contient l'une des cavernes de stockage secrètes du Seigneur Maître.",
			confidence: 'verified',
		},
	},

	cityLandmarks: {
		luthadel: {
			'kredik-shaw': {
				name: 'Kredik Shaw',
				description:
					"Le palais du Seigneur Maître, la « Colline des Mille Flèches ». Construit directement au-dessus du Puits de l'Ascension.",
				confidence: 'verified',
			},
			'iron-gate': {
				name: 'Porte du Fer',
				description: 'Porte nord, menant à Urteau et la Dominance du Nord.',
				confidence: 'verified',
			},
			'steel-gate': {
				name: "Porte de l'Acier",
				description: 'Porte nord-ouest, en direction des Fosses de Hathsin.',
				confidence: 'verified',
			},
			'pewter-gate': {
				name: 'Porte du Potin',
				description: 'Porte nord-est de Luthadel.',
				confidence: 'verified',
			},
			'zinc-gate': {
				name: 'Porte du Zinc',
				description: 'Porte sud-est de Luthadel.',
				confidence: 'verified',
			},
			'brass-gate': {
				name: 'Porte du Laiton',
				description: 'Porte sud, vers Fellise et la Dominance du Sud.',
				confidence: 'verified',
			},
			'copper-gate': {
				name: 'Porte du Cuivre',
				description: 'Porte sud-ouest, près du quartier industriel.',
				confidence: 'verified',
			},
			'bronze-gate': {
				name: 'Porte du Bronze',
				description: 'Porte ouest, vers la rivière Channerel.',
				confidence: 'verified',
			},
			'keep-venture': {
				name: 'Manoir Venture',
				description:
					"Forteresse de la maison Venture. Base d'opérations d'Elend et lieu de bals nobles.",
				confidence: 'verified',
			},
			'keep-elariel': {
				name: 'Manoir Elariel',
				description: "Demeure de la maison Elariel, l'une des Grandes Maisons de Luthadel.",
				confidence: 'verified',
			},
			'keep-hasting': {
				name: 'Manoir Hasting',
				description: 'Proche du palais ; tombé tôt durant la guerre des maisons.',
				confidence: 'verified',
			},
			'clubs-shop': {
				name: 'Atelier de Clubs',
				description: "Atelier de menuiserie servant de base d'opérations à l'équipe de Kelsier.",
				confidence: 'verified',
			},
			'camons-safehouse': {
				name: 'Planque de Camon',
				description: 'Refuge initial dans les bas-fonds où Vin fut recrutée par Kelsier.',
				confidence: 'verified',
			},
			'fountain-square': {
				name: 'Place de la Fontaine',
				description:
					"Lieu d'exécutions publiques et de la mort de Kelsier. Renommée Place du Survivant.",
				confidence: 'verified',
			},
			'lake-luthadel': {
				name: 'Lac Luthadel',
				description: "Grande étendue d'eau douce à l'est des remparts.",
				confidence: 'verified',
			},
			'canton-of-finance': {
				name: 'Canton des Finances',
				description: "Quartier général du Ministère de l'Acier chargé des finances de l'empire.",
				confidence: 'verified',
			},
			'skaa-hovels': {
				name: 'Taudis skaa',
				description: 'Les quartiers misérables des skaa où opèrent les gangs.',
				confidence: 'verified',
			},
			'well-of-ascension': {
				name: "Puits de l'Ascension",
				description:
					"La source de pouvoir cachée sous Kredik Shaw, où le pouvoir s'accumule tous les 1024 ans.",
				confidence: 'verified',
			},
			'tin-gate-north': {
				name: "Porte de l'Étain (Nord)",
				description: 'La zone de la porte nord-est.',
				confidence: 'verified',
			},
			'assembly-hall': {
				name: "Salle de l'Assemblée",
				description: "Bâtiment où le parlement démocratique d'Elend se réunit durant le siège.",
				confidence: 'probable',
			},
			'keep-tekiel': {
				name: 'Manoir Tekiel',
				description:
					"Forteresse de la maison Tekiel, cible de la campagne d'assassinats de Kelsier.",
				confidence: 'verified',
			},
			'luthadel-garrison': {
				name: 'Garnison de Luthadel',
				description: "Terrain d'entraînement militaire et casernes de la ville.",
				confidence: 'probable',
			},
			'warehouse-district': {
				name: 'Quartier des Entrepôts',
				description: "Quartier industriel près des canaux où l'équipe stockait des armes.",
				confidence: 'probable',
			},
			'canton-inquisition': {
				name: "Canton de l'Inquisition",
				description: "Base principale des Inquisiteurs d'Acier, un lieu redouté de tous.",
				confidence: 'verified',
			},
			'canton-resource': {
				name: 'Canton des Ressources',
				description: "Centre administratif de l'économie impériale.",
				confidence: 'verified',
			},
			'canton-orthodoxy': {
				name: "Canton de l'Orthodoxie",
				description: 'Centre religieux chargé de la pureté du culte du Seigneur Maître.',
				confidence: 'verified',
			},
			'keep-lekal': {
				name: 'Manoir Lekal',
				description: "L'un des grands manoirs de la maison Lekal, avec ses tours et vitraux.",
				confidence: 'verified',
			},
			'hotel-district': {
				name: 'Quartier des Hôtels',
				description: 'Zone aisée pour les nobles visitant depuis les dominances extérieures.',
				confidence: 'probable',
			},
			'commercial-district': {
				name: 'Quartier Commercial',
				description: 'Centre de commerce où les maisons nobles négociaient leurs contrats.',
				confidence: 'probable',
			},
			'industrial-district': {
				name: 'Quartier Industriel',
				description: 'Zone de forges, moulins et ateliers près du canal.',
				confidence: 'probable',
			},
			'ahlstrom-square': {
				name: 'Place Ahlstrom',
				description: 'Place publique importante de Luthadel.',
				confidence: 'probable',
			},
			'south-bridge': {
				name: 'Pont Sud',
				description: 'Point de passage sur les voies navigables de la ville.',
				confidence: 'probable',
			},
			'the-twists': {
				name: 'Les Dédales',
				description:
					"Quartier labyrinthique des bas-fonds, refuge de la pègre skaa et de l'équipe de Kelsier.",
				confidence: 'probable',
			},
			sootwarrens: {
				name: 'Les Terriers de Suie',
				description: "L'un des quartiers les plus misérables, couvert de cendre.",
				confidence: 'probable',
			},
			'the-cracks': {
				name: 'Les Fissures',
				description: 'Secteur délabré à haute densité de population.',
				confidence: 'probable',
			},
			'aspen-row': {
				name: 'Rue des Trembles',
				description: 'Rue résidentielle pour ouvriers qualifiés et domestiques nobles.',
				confidence: 'probable',
			},
			blockstreet: {
				name: 'Rue des Blocs',
				description: 'Quartier résidentiel dense en quadrillage conçu pour les skaa.',
				confidence: 'probable',
			},
		},
		urteau: {
			'ministry-canton': {
				name: "Canton de l'Inquisition",
				description:
					'Siège du Ministère bâti sur la troisième caverne de stockage contenant un lac souterrain.',
				confidence: 'verified',
			},
			marketpit: {
				name: 'La Fosse du Marché',
				description:
					'La plus large des tranchées, servant de boulevard principal et de marché central.',
				confidence: 'verified',
			},
			'spooks-hideout': {
				name: 'Cachette de Spectre',
				description:
					"La « Maison en flammes » utilisée par l'équipe de Spectre durant le soulèvement.",
				confidence: 'probable',
			},
			'citizens-estate': {
				name: 'Domaine du Citoyen',
				description: 'Manoir noble approprié par Quellion comme siège de son pouvoir.',
				confidence: 'probable',
			},
			'luthadel-gate': {
				name: 'Porte de Luthadel',
				description: 'Entrée sud du réseau de canaux, en direction de Luthadel.',
				confidence: 'probable',
			},
			'venture-estate': {
				name: 'Domaine Venture',
				description:
					'Demeure ancestrale des Venture à Urteau, abandonnée sous le régime de Quellion.',
				confidence: 'probable',
			},
			'burning-district': {
				name: 'Le Quartier en flammes',
				description:
					'Environ un tiers de la ville détruit par les incendies durant la rébellion de Spectre.',
				confidence: 'probable',
			},
			'skaa-slums': {
				name: 'Taudis skaa',
				description:
					'Quartiers pauvres où les révolutionnaires se rassemblent dans les canaux asséchés.',
				confidence: 'probable',
			},
			'the-harrows': {
				name: 'Les Herses',
				description: 'Dédale de canaux étroits et interconnectés dans la section sud.',
				confidence: 'probable',
			},
			'west-docks': {
				name: "Quais de l'Ouest",
				description: 'Terminus occidental du réseau de canaux pour le chargement des marchandises.',
				confidence: 'probable',
			},
			'fedre-aqueduct': {
				name: 'Aqueduc du Lord Fedre',
				description: "Infrastructure monumentale datant d'avant l'Effondrement.",
				confidence: 'probable',
			},
			'white-streets': {
				name: 'Les Rues Blanches',
				description: 'Quartier aisé dont les pavés étaient méticuleusement nettoyés de la cendre.',
				confidence: 'probable',
			},
			'citizens-home': {
				name: 'Demeure du Citoyen',
				description: "Quartier général de Quellion, le skaa qui s'empara du pouvoir.",
				confidence: 'probable',
			},
			'interchange-building': {
				name: "Bâtiment d'Échange",
				description: 'Centre logistique pour le transfert de marchandises entre niveaux.',
				confidence: 'probable',
			},
			'old-city-square': {
				name: 'Place de la Vieille Ville',
				description: "Centre historique d'Urteau, théâtre d'agitation politique sous le Citoyen.",
				confidence: 'probable',
			},
			'canton-orthodoxy-urteau': {
				name: "Canton de l'Orthodoxie",
				description: 'Gérait les affaires spirituelles et juridiques de la Dominance du Nord.',
				confidence: 'probable',
			},
		},
		fadrex: {
			'keep-orielle': {
				name: 'Manoir Orielle',
				description:
					"Manoir principal en hauteur, utilisé par l'obligateur Aradan Yomen comme palais.",
				confidence: 'probable',
			},
			'storage-cache': {
				name: 'Caverne de Stockage',
				description: "Cache secrète de vivres et d'electrum dissimulée dans les roches du nord.",
				confidence: 'verified',
			},
			'cetts-base': {
				name: 'Base de Cett',
				description: "Enceinte fortifiée d'Ashweather Cett avant son départ pour Luthadel.",
				confidence: 'probable',
			},
			'cremnol-wall-north': {
				name: 'Mur de Cremnol Nord',
				description: 'Formation rocheuse naturelle rouge et orange protégeant la ville au nord.',
				confidence: 'verified',
			},
			'cremnol-wall-south': {
				name: 'Mur de Cremnol Sud',
				description: 'Formation rocheuse formant une barrière géologique au sud.',
				confidence: 'verified',
			},
			'yomens-palace': {
				name: 'Palais de Yomen',
				description: "Siège administratif de l'obligateur Aradan Yomen.",
				confidence: 'probable',
			},
			'main-gate': {
				name: 'Porte Principale',
				description: 'Entrée principale de la ville à travers les formations géologiques.',
				confidence: 'probable',
			},
			'conway-canal': {
				name: 'Canal Conway',
				description: "L'un des canaux principaux pour le commerce et le transport.",
				confidence: 'probable',
			},
			'city-walls-east': {
				name: 'Murailles Orientales',
				description: 'Périmètre défensif oriental formé par les roches naturelles.',
				confidence: 'probable',
			},
			'ash-mounds': {
				name: 'Monticules de Cendres',
				description: "Plaines couvertes de cendre où campait l'armée assiégeante d'Elend.",
				confidence: 'probable',
			},
			'canton-resource-fadrex': {
				name: 'Canton des Ressources',
				description: 'Canton du Ministère utilisé par Yomen comme prison pour Vin.',
				confidence: 'probable',
			},
			'informants-residence': {
				name: "Résidence de l'Informateur",
				description: "Demeure d'un vieil informateur connaissant les secrets de la ville.",
				confidence: 'probable',
			},
			'deep-wells': {
				name: 'Puits Profonds',
				description: 'Ressources en eau vitales dans une ville sans rivière majeure.',
				confidence: 'probable',
			},
			'noble-quarter': {
				name: 'Quartier Noble',
				description: 'Zone résidentielle de la haute société.',
				confidence: 'probable',
			},
		},
	},

	movements: {
		...enData.movements,
		kelsier: {
			...enData.movements.kelsier,
			// ── L'Empire ultime ────────────────────────────────────────────
			'tfe-0': {
				title: 'Le retour du Survivant',
				description:
					"Kelsier arrive à la plantation de lord Tresting, où le noble régale un obligateur envoyé par lord Venture dans l'espoir d'obtenir un partenariat commercial. Ce soir-là, alors qu'on s'apprête à emmener une jeune skaa devant Tresting, Kelsier intervient : il tue Tresting, tous ses obligateurs, contremaîtres et soldats, et incendie le manoir.",
			},
			'tfe-1': {
				title: 'Observateur caché',
				description:
					"Kelsier observe les opérations de la bande de Camon depuis les ombres, remarquant l'utilisation inconsciente de l'allomancie par Vin : une orpheline des rues dotée de pouvoirs de Fils-des-brumes.",
			},
			'tfe-3': {
				title: 'Recruter Vin',
				description:
					"Vin tente de fuir le repaire de Camon, mais Ulef la trahit. Kelsier intervient et la sauve de la correction de Camon. Il promeut Milev chef de bande, prend les trois mille boxings comme paiement pour s'occuper de l'obligateur et de l'Inquisiteur, et loue le repaire pour la réunion du soir. Il teste alors Vin et confirme qu'elle est Fils-des-brumes.",
			},
			'tfe-5': {
				title: "Le vol d'atium",
				description:
					"Kelsier, Dockson et Vin montent sur le toit. Kelsier s'équipe et plonge dans les brumes pour attaquer la Forteresse Venture et voler de l'atium. Il s'empare du coffre-fort mais doit affronter des tueurs de brume au retour. Il s'échappe avec l'atium et finance la rébellion.",
			},
			'tfe-6': {
				title: "L'équipe au complet",
				description:
					"Dans l'atelier de menuiserie de Clubs, Kelsier et l'équipe élaborent le plan de destruction de l'Empire ultime. Marsh finit par arriver et tous s'en vont pour laisser les deux frères parler en privé. Vin revient écouter aux portes.",
			},
			'tfe-7': {
				title: "Former l'apprentie",
				description:
					"Kelsier emmène Vin pour sa première nuit d'entraînement et lui remet un manteau de brume. Il lui enseigne les huit métaux de base le long des remparts de Luthadel, près de la Porte d'Acier.",
			},
			'tfe-8': {
				title: 'La couverture Renoux',
				description:
					"Kelsier emmène Vin au-delà des murailles de Luthadel, où ils rencontrent un spectre de brume. Sur la route principale, Sazed les attend avec un attelage et les conduit à Fellise. En chemin, Kelsier offre à Vin les trois mille boxings et la possibilité de quitter l'équipe. Au domaine de lord Renoux, il établit l'identité de couverture de Vin en tant que lady Valette.",
			},
			'tfe-10': {
				title: 'Planifier la révolution',
				description:
					"De retour à Luthadel, Kelsier tient une réunion d'avancement à la boutique de Clubs. Avant cela, il interroge Sazed sur une religion dotée de pouvoir — Sazed lui parle du jaïsme — et si une religion considère l'extermination des nobles comme un acte sacré. La réunion prend fin quand un soldat de Hammond signale que le Ministère a trouvé l'ancien repaire de Camon.",
			},
			'tfe-10.2': {
				title: "Le meeting de l'entrepôt",
				description:
					"Kelsier prêche la révolution devant des travailleurs skaa réunis lors d'un meeting secret dans le quartier des entrepôts. Breeze et ses apaiseurs et agitateurs manipulent la foule pour la rendre plus réceptive, utilisant la légende du Survivant de Hathsin pour inspirer la rébellion.",
			},
			'tfe-11': {
				title: 'Le massacre du repaire de Camon',
				description:
					"Kelsier et l'équipe inspectent le repaire détruit. Après leur départ, Kelsier tente de retrouver Camon parmi les mendiants. Il découvre le cadavre de Camon suspendu par un crochet planté dans sa bouche, poignets et chevilles liés, le corps torturé. Cette méthode d'exécution est réservée à ceux qui abusent de l'allomancie. Vin avait suivi Kelsier avec succès et ils échangent quelques mots après la découverte.",
			},
			'tfe-13': {
				title: 'Plans à Fellise',
				description:
					'Kelsier retrouve Vin et Sazed au domaine de lord Renoux à Fellise pour examiner les renseignements obtenus lors du premier bal de Vin. Il apprend que le père de Vin était au bal puis repart dans les brumes vers Luthadel.',
			},
			'tfe-14': {
				title: 'Reconnaissance du palais',
				description:
					"Kelsier conduit Vin à Kredik Shaw pour explorer le bâtiment que le Seigneur Maître visite tous les trois jours. Ils se frayent un chemin en combattant, mais trois Inquisiteurs d'Acier convergent vers eux. Kelsier est séparé de Vin dans le chaos. Vin s'enfuit grièvement blessée, serrant un mystérieux livre relié en cuir.",
			},
			'tfe-15': {
				title: 'Après Kredik Shaw',
				description:
					"L'équipe conteste la décision de Kelsier d'avoir emmené Vin à Kredik Shaw. Avant de pouvoir partir la chercher, Sazed arrive en la portant. Dockson est furieux du risque pris. Kelsier et Dockson remarquent le livre en cuir que Vin a rapporté ; Sazed l'identifie comme écrit en khlennien, la langue de la patrie du Seigneur Maître avant l'Ascension, et pense pouvoir le traduire.",
			},
			'tfe-16': {
				title: 'Veiller sur Vin',
				description:
					"Kelsier reste à la boutique de Clubs pour veiller sur Vin pendant qu'elle se remet de ses blessures de Kredik Shaw, présent quand elle se réveille enfin.",
			},
			'tfe-17': {
				title: 'Réunion au domaine Renoux',
				description:
					'Kelsier se rend à Fellise avec Breeze, Yeden et Dockson pour se réunir au domaine de lord Renoux et discuter de la prochaine phase de la rébellion.',
			},
			'tfe-19': {
				title: 'Attiser la guerre des maisons',
				description:
					'Kelsier sème le chaos pour provoquer la guerre des maisons en déposant le corps visiblement assassiné de lord Charrs Entrone dans le jardin de la Forteresse Tekiel. Il se rend ensuite dans les Quartiers de Suie pour rencontrer Hoid — un informateur se faisant passer pour un contact de rue — et apprendre les rumeurs sur la Maison Renoux. Hoid lui apprend aussi que lady Shan Elariel est une apaiseuse.',
			},
			'tfe-19.2': {
				title: 'Rencontre avec lord Straff',
				description:
					"Kelsier se rend à la place Ahlstrom déguisé en skaa mendiant, malade et infirme, pour rencontrer lord Straff Venture, chef de la Maison Venture. Il découvre que les rumeurs sur le Survivant de Hathsin se répandent et qu'on parle d'un Onzième Métal.",
			},
			'tfe-19.3': {
				title: 'Retour à Renoux',
				description:
					"Kelsier rentre au manoir Renoux par la Route des Épines et échange des informations avec Vin, Sazed et Renoux. Il fait un sermon à Vin sur les nobles, insistant qu'ils ne se soucient pas des skaa et qu'elle doit rester loin d'Elend.",
			},
			'tfe-20': {
				title: 'Superviser les approvisionnements',
				description:
					"Kelsier est au domaine Renoux de Fellise et supervise le chargement d'armes et de fournitures sur des chariots pour les envoyer à la rébellion.",
			},
			'tfe-21': {
				title: "L'armée rebelle",
				description:
					"Kelsier lit une traduction du journal du Seigneur Maître en voyageant par péniche sur un canal vers le nord. Le convoi s'arrête à une écluse et Kelsier, les recrues et les fournitures se dirigent vers les grottes où l'armée rebelle s'entraîne. Surmontant les souvenirs des Puits de Hathsin, il entre dans le complexe des Cavernes d'Arguois et inspecte l'armée que Ham a formée. Lors d'un dîner, Kelsier manipule les émotions de Bilg pour en faire un exemple. Bilg et Demoux se battent en duel ; Kelsier utilise l'allomancie pour aider Demoux. Après le duel, la confiance de l'armée monte en flèche car Yeden croit que Kelsier peut transmettre ses pouvoirs à d'autres.",
			},
			'tfe-23': {
				title: 'Suivre Vin',
				description:
					"Kelsier apparaît à la fenêtre de la tour où Vin espionne le groupe d'Elend à la Forteresse Hasting. Il dédaigne leur bavardage idéaliste sur changer le monde comme un comportement typique de jeunes nobles ne menant jamais à un vrai changement. Tous deux partent chacun de leur côté.",
			},
			'tfe-24': {
				title: 'Réunion de situation',
				description:
					"Kelsier arrive à la boutique de Clubs où une grande partie de l'équipe est rassemblée. Il discute de l'état de la mission et partage un verre nocturne avec Spook, Ham et Clubs. Il demande à Ham d'aller à la Garnison recueillir des informations.",
			},
			'tfe-25': {
				title: 'Décision désespérée',
				description:
					"À la boutique de Clubs, Kelsier apprend que la rébellion skaa a attaqué la Garnison de Holstep et que celle de Luthadel marche vers le nord. Il décide de tenter d'avertir l'armée rebelle et fait avaler à Vin cinq billes d'étain pour une longue course d'étain vers le nord.",
			},
			'tfe-25.2': {
				title: 'Désastre à Holstep',
				description:
					"Kelsier et Vin courent seize heures sans arrêt en brûlant de l'étain. Ils tombent sur les restes de l'armée rebelle, encerclée et massacrée par la Garnison de Valtroux. Kelsier veut se battre, mais Vin le convainc qu'ils ne sont pas invincibles. Ils continuent vers les Cavernes d'Arguois, où 2 000 soldats ont survécu grâce à Mennis qui les avait maintenus prêts.",
			},
			'tfe-26': {
				title: 'Ramasser les morceaux',
				description:
					"De retour à la boutique de Clubs après deux semaines de voyage de retour des cavernes, l'équipe parle de l'avenir du plan : il semble être un échec total. Breeze accuse Kelsier de poursuivre la gloire. Kelsier admet le revers mais refuse d'abandonner la révolution.",
			},
			'tfe-26.2': {
				title: 'Les exécutions',
				description:
					"Spook annonce des exécutions à la Place de la Fontaine. L'équipe s'y rend et soudoie quelqu'un pour accéder au toit. Ils contemplent le massacre de nombreux skaa tandis que leur sang est versé dans la fontaine. Kelsier convainc l'équipe de continuer : « Voici notre ennemi. Il n'y a pas de quartier, pas de retour en arrière. »",
			},
			'tfe-27': {
				title: 'Nouvelle stratégie',
				description:
					"L'équipe revient à la boutique de Clubs pour planifier les prochaines étapes : déclencher une guerre entre les maisons nobles. Sazed apporte un message de Marsh indiquant à Kelsier où se retrouver dans les Méandres.",
			},
			'tfe-27.2': {
				title: "Le métal d'or",
				description:
					"Kelsier et Vin se rendent dans un bâtiment abandonné des Méandres, des heures avant la réunion avec Marsh. En attendant, Kelsier parle de l'or — le neuvième métal allomantique qui permet de voir une version alternative de son passé. Il explique aussi la féruchemie et donne un peu d'or à Vin pour qu'elle le brûle pour la première fois. Quand Marsh arrive, portant les tatouages d'un obligateur de bas rang du Canton de l'Inquisition, il décrit les stations d'apaisement à Luthadel et révèle que les Inquisiteurs peuvent mourir de vieillesse.",
			},
			'tfe-29': {
				title: 'Conseil de guerre à Renoux',
				description:
					"Kelsier retrouve la majeure partie de l'équipe au domaine de Renoux à Fellise pour examiner une carte très détaillée des défenses de Luthadel fournie par Marsh. En l'étudiant, ils découvrent que la bande de Theron a été attaquée récemment par le Ministère. Ce soir-là, incapable de dormir, Kelsier demande à Sazed de lui raconter quelques religions.",
			},
			'tfe-31': {
				title: "Réprimander l'apprentie",
				description:
					"Kelsier et Vin reviennent à la boutique de Clubs après que Vin a tué lady Shan Elariel — une Fils-des-brumes accomplie — à la Forteresse Venture. Kelsier réprimande Vin pour ce combat téméraire, mais elle lui réplique en criant que nobles et skaa ne sont pas si différents, et qu'Elend Venture est un homme bon qui mérite d'être protégé.",
			},
			'tfe-32': {
				title: 'Retrouver Marsh',
				description:
					'Kelsier et Vin trouvent le corps de Marsh, entièrement vidé de son sang, une coquille sans vie. De retour à la boutique de Clubs, ils découvrent une lettre de Marsh expliquant que les Inquisiteurs le trouveraient probablement.',
			},
			'tfe-32.2': {
				title: 'Détruire les Puits',
				description:
					"Kelsier retourne aux Puits de Hathsin, le lieu de ses plus grandes souffrances. Il tue tous les gardes et tend la main à un skaa nommé Wallin qui sort de la caverne. Puis il détruit tous les cristaux d'atium, coupant la ressource la plus précieuse du Seigneur Maître en une seule nuit.",
			},
			'tfe-33': {
				title: "Le refuge d'urgence",
				description:
					"Kelsier revient dans un sous-sol de secours humide près de la boutique de Clubs, à peine trois pièces. Il annonce qu'il a détruit tout l'atium des Puits de Hathsin.",
			},
			'tfe-33.2': {
				title: "Le combat contre l'Inquisiteur",
				description:
					"Tous suivent Kelsier jusqu'à la Place de la Fontaine. Ils voient Spook et lord Renoux dans un des chariots d'exécution. Kelsier se bat contre un Inquisiteur sur la place — un piège qu'il savait presque certainement tendu.",
			},
			'tfe-34': {
				title: 'Le dernier combat du Survivant',
				description:
					"Kelsier affronte l'Inquisiteur dans un combat à mort sur la Place de la Fontaine, tous deux brûlant de l'atium. C'est un maître de la Poussée et de la Traction, déplaçant le métal dans les airs avec expertise. Il tue l'Inquisiteur et les skaa commencent à scander « Le Survivant de Hathsin ». Le Seigneur Maître arrive dans un carrosse noir. Un des hommes de Ham lui plante une lance — il continue de marcher. Deux lances — toujours debout. Le Seigneur Maître gifle Kelsier, arrache une lance de son propre corps et la plonge dans Kelsier. Il meurt avec le sourire, devenant le martyr qui embrase la révolution.",
			},
			'tfe-35': {
				title: 'Au-delà de la mort',
				description:
					"Dans le refuge d'urgence près de la boutique de Clubs, l'équipe voit le kandra, autrefois lord Renoux, dans le corps et les os de Kelsier : le plan ultime. Kelsier avait laissé des lettres à chaque membre avec des instructions pour prendre la ville. Sa mort fut l'étincelle qui enflamma la révolution dans tout Luthadel.",
			},
			'woa-1': {
				title: 'Ombre cognitive',
				description:
					"Kelsier s'éveille en tant qu'Ombre Cognitive dans le Puits de l'Ascension après sa mort, piégé entre les royaumes. Hoid arrive par la perpendicularité, lui reprochant d'avoir détruit les Puits de Hathsin avant de passer dans le Royaume Physique et de voler une bille de lérasium. Leras (Préservation) apparaît et lui enseigne les trois Royaumes : Physique, Cognitif et Spirituel.",
			},
			'woa-5': {
				title: 'Observer le monde',
				description:
					"Kelsier chevauche les pulsations de Ruine pour observer le monde au-delà de sa prison. Il remarque que Ruine porte une attention particulière à Vin — une certaine Fille-des-brumes. Il la regarde patrouiller les remparts de Luthadel, s'entraîner avec son nouveau kandra loup, et commencer à sentir l'esprit des brumes qu'est Préservation essayant de la guider.",
			},
			'woa-12': {
				title: 'Les plans de Ruine',
				description:
					"Kelsier découvre que Ruine altère la religion terrisane depuis le Conventicule de Seran. Pendant ce temps, Marsh — désormais sous le contrôle total de Ruine — abandonne Sazed au Conventicule et disparaît. Kelsier regarde impuissant Sazed découvrir l'inscription de Kwaan et commencer sa crise de foi.",
			},
			'woa-26': {
				title: 'Observer le siège',
				description:
					"Kelsier regarde Vin démontrer une puissance terrifiante à la négociation avec Straff, puis voit Elend destitué par l'Assemblée. Ruine orchestre l'approche de l'armée koloss tout en manipulant Zane pour isoler Vin. Kelsier est furieux de voir Elend gouverner Luthadel mais finit par respecter ses efforts. Il remarque que Ruine laisse délibérément Vin le voir attaquer Elend.",
			},
			'woa-57': {
				title: 'La chambre du Puits',
				description:
					"Vin et Elend descendent vers le Puits de l'Ascension. L'apparence de Préservation devient moins humaine — son visage à moitié disparu, son corps se décomposant. Il dit à Kelsier que le pouvoir ne doit pas être libéré mais que Vin sera trompée. Marsh, sous le contrôle de Ruine, attaque Sazed à l'entrée. Kelsier, désespéré, saisit le bras de Préservation et lacère Elend pour motiver Vin à utiliser le pouvoir.",
			},
			'woa-60': {
				title: 'Ruine libéré',
				description:
					"Vin libère le pouvoir du Puits au lieu de l'utiliser, brisant la prison de Ruine. Le pouvoir traverse la barrière. Préservation guide Vin pour donner à Elend la dernière bille de lérasium, le transformant en Fils-des-brumes et lui sauvant la vie. Kelsier regarde le monde changer tandis que la pleine conscience de Ruine se déverse sur Scadrial.",
			},
			'hoa-0': {
				title: 'Le deuil du Survivant',
				description:
					"Dans les jours qui suivent la bataille koloss, Kelsier quitte le Puits et voyage à travers la réflexion Cognitive de Luthadel jusqu'à la Forteresse Venture, où il trouve son équipe survivante célébrant des funérailles. Il apprend que Dockson et Clubs ont été tués — tous deux héros. Saisissant Préservation de fureur, Kelsier ressent au contraire la profondeur de l'amour de Préservation pour l'humanité et l'embrasse. Préservation lui montre des gens lointains au sud et mentionne quelqu'un qui pourrait l'aider à accomplir l'impossible.",
			},
			'hoa-3': {
				title: 'Khriss et Nazh',
				description:
					"Suivant une vrille de Préservation à l'est de la ville, Kelsier atteint le Lac Luthadel où le Royaume Cognitif semble plus solide. Il trouve un feu de camp avec deux inconnus — Khriss et Nazh — qui le reconnaissent et s'étonnent de son existence dans ce royaume. Khriss lui parle des seize Éclats et d'Adonalsium. Nazh lui offre son couteau et lui indique la direction des Ire.",
			},
			'hoa-5': {
				title: 'Vision de la divinité',
				description:
					"Préservation plonge son regard dans les yeux de Kelsier, lui offrant une vision de la divinité et des futurs possibles. Dans aucun avenir Kelsier ne vainc Ruine, mais il pressent que Vin a une chance — s'il va vers l'ouest. Sa Connexion à Ruine est bien plus profonde qu'à Préservation, un fait qui le trouble.",
			},
			'hoa-8': {
				title: "Courir vers l'ouest",
				description:
					"Kelsier court vers l'ouest le long du Canal Impérial en direction de l'océan. En tant qu'Ombre Cognitive, il ne se fatigue pas — tant qu'il ne pense pas à l'épuisement. Il traverse des villes vidées par la maladie des brumes, la cendre tombant plus épaisse que jamais tandis que Ruine accélère le déclin du monde.",
			},
			'hoa-12': {
				title: 'Souvenirs de Longsfollow',
				description:
					"Faisant une halte à Longsfollow — une ville où il tua jadis des nobles en représailles pour une jeune skaa assassinée — Kelsier est frappé par l'épuisement et la culpabilité. Les Inquisiteurs sont venus ensuite, tuant encore plus. Il demande à Préservation où se trouve Mare. Réalisant depuis combien de temps il court, il sent un véritable épuisement pour la première fois depuis qu'il a quitté Luthadel.",
			},
			'hoa-15': {
				title: 'La route solitaire',
				description:
					"À l'ouest de Longsfollow, Kelsier s'arrête près d'un foyer et découvre qu'il peut allumer des flammes par la seule pensée. La cendre tombe plus épaisse que jamais, et il regarde les réfugiés skaa fuir toujours plus à l'ouest. Complètement seul, il aspire à la moindre interaction — même avec Hoid — tandis qu'il poursuit sa marche implacable vers l'océan lointain.",
			},
			'hoa-18': {
				title: 'La raillerie de Ruine',
				description:
					"Après des semaines de course, Kelsier atteint l'océan occidental. Ati (Ruine) apparaît et monologue sur l'inévitabilité du déclin, lui disant que la fin est très proche. Il raille Kelsier en disant qu'il ne peut faire aucun bien ici — ce qui conduit Kelsier à conclure que le contraire doit être vrai. Kelsier poursuit, s'aventurant sur l'océan du Royaume Cognitif.",
			},
			'hoa-21': {
				title: "L'océan de la pensée",
				description:
					"Kelsier traverse l'océan du Royaume Cognitif avec seulement une torche improvisée pour éclairer l'obscurité infinie. Loin de Scadrial, il sent une traction sur son âme — signe qu'il quitte son propre monde derrière lui. Il avance péniblement à travers une jungle étrange qui s'éclaircit progressivement, jusqu'à voir une lumière brillante devant lui : la forteresse des Ire.",
			},
			'hoa-24': {
				title: 'La forteresse Ire',
				description:
					"Kelsier atteint une imposante forteresse de pierre blanche rayonnante bien au-delà de Scadrial. Escaladant ses murs en enfonçant ses mains dans la pierre, il écoute les Ire — d'anciens Elantriens gardant un dispositif capable de capturer le pouvoir de Préservation. Ils prévoient de prendre l'Éclat eux-mêmes. Kelsier trouve la description de l'orbe et décide de le voler.",
			},
			'hoa-30': {
				title: "Voler l'orbe",
				description:
					"Kelsier traque les Ire alors qu'ils sortent à cheval avec l'orbe. Il les terrorise en se faisant passer pour Ruine, taillant la jambe d'un cheval avec le couteau de Nazh et créant une marionnette de cape enflammée. Quand Alonoe est séparée du groupe, il assomme son garde et murmure depuis les ombres qu'elle laisse l'orbe. Elle obéit, terrifiée, et Kelsier commence la longue course de retour vers l'est avec son prix.",
			},
			'hoa-35': {
				title: 'Fadrex et Hoid',
				description:
					"Après des semaines de course à travers le continent, Préservation dit à Kelsier d'aller à Fadrex. Une fine ligne de lumière le guide à travers la ville jusqu'à une place bondée de mendiants — où il trouve Vin, et rencontre à nouveau Hoid. Kelsier tente désespérément d'avertir Vin au sujet de son pendentif à pointe et d'éviter Hoid, mais elle semble ne l'entendre qu'à moitié. Ruine attaque Kelsier avec une force spirituelle, révélant que le Onzième Métal était sa manipulation depuis le début.",
			},
			'hoa-42': {
				title: 'Les pions de Ruine révélés',
				description:
					"Chaque fois que Kelsier tente d'atteindre Vin, Ruine bloque son chemin. De l'extérieur de Fadrex, il regarde les koloss attaquer l'armée d'Elend — et en mourant, il voit leurs véritables formes : des humains de tous horizons, créés par l'hémalurgie. Préservation lui montre une vision de chaque personne que Ruine contrôle par des pointes : les Inquisiteurs, Vin avec son pendentif, le roi Penrod sur le trône de Luthadel, Spook à Urteau, et son frère Marsh — qui, en ce moment même, enfonce une pointe dans le cœur de Penrod.",
			},
			'hoa-50': {
				title: "L'avertissement confus",
				description:
					"Kelsier cherche dans le campement militaire près de Fadrex pendant des jours, cherchant un soldat à moitié fou avec qui communiquer pour avertir Vin : ne fais confiance à personne transpercé par du métal. L'homme déforme le message et déclenche une bagarre. Ruine arrive pour le railler une fois de plus. Réalisant qu'il ne peut plus rien faire ici, Kelsier tourne sa conscience ailleurs. Loin au nord, à Urteau, un jeune Œil-d'étain nommé Spook brûle de dévotion pour le Survivant. Cette Connexion pourrait être assez forte pour être utilisée.",
			},
			'hoa-54': {
				title: "L'ombre du Survivant",
				description:
					"Kelsier arrive à Urteau, cherchant le jeune Œil-d'étain dont la dévotion pour lui brûle comme un phare. Il trouve Spook sous l'influence de Ruine — une pointe hémalurgique dans son corps, le dieu de la destruction l'exhortant à tuer. Kelsier attend son heure, observant Spook se déplacer dans la ville et sentant les lignes de Connexion entre eux se renforcer.",
			},
			'hoa-58': {
				title: 'Espoir pour Spook',
				description:
					"Kelsier trouve Spook à Urteau, où Ruine l'exhorte à tuer. Les lignes de Connexion entre eux sont plus fortes qu'avec quiconque — la dévotion de Spook au Survivant a créé un lien unique. Kelsier murmure « espoir » à Spook à plusieurs reprises, et finalement Spook retire sa pointe hémalurgique. Kelsier crie alors « survis » et Spook passe à l'action tandis que Ruine commence à brûler la ville.",
			},
			'hoa-62': {
				title: 'Le demi-rêve',
				description:
					"Spook et Kelsier se rencontrent dans un demi-rêve sur l'herbe verte — l'esprit du jeune Œil-d'étain blessé mais sa volonté intacte. Kelsier dit à Spook qu'il est un héros et qu'il est fier de lui. Il l'exhorte à faire parvenir un message à Vin : toute personne transpercée par du métal peut être contrôlée par Ruine. Spook hoche la tête en s'éveillant, déterminé.",
			},
			'hoa-68': {
				title: 'Prendre Préservation',
				description:
					"Sentant Préservation mourir, Kelsier brise l'orbe des Ire avec le couteau de Nazh et s'empare du pouvoir de l'Éclat après une lutte désespérée. Mais Ruine rit — Kelsier n'est qu'un souvenir de personne et ne peut pas le contrôler pleinement. Tout ce qu'il tente est bloqué. Il entend Marsh lutter dans son propre esprit et réalise qu'il doit agir indirectement.",
			},
			'hoa-69': {
				title: 'La chute du messager',
				description:
					"Kelsier regarde Goradel chevaucher depuis Urteau portant l'avertissement de Spook inscrit sur du métal — mais Ruine invoque Marsh. L'Inquisiteur fond sur le messager et le tue, lisant le message à haute voix à son maître. Kelsier remercie Goradel tandis que l'âme du soldat traverse le Royaume Cognitif, puis sombre dans le désespoir. Mais une pensée le traverse : Ruine n'est pas complet sans l'atium. Il y a encore de l'espoir.",
			},
			'hoa-78': {
				title: 'Céder le pouvoir',
				description:
					"Kelsier regarde Vin combattre les Inquisiteurs restants à Kredik Shaw — puis Marsh la torture, enfonçant les pointes plus profondément. Mais Marsh a lu l'avertissement pris sur le cadavre de Goradel. Il tend la main et arrache la pointe du pendentif de l'oreille de Vin. Kelsier saisit l'instant, attaquant Ruine pour le distraire tandis que Vin aspire les brumes et prend le pouvoir de Préservation. Son âme se déchire en lui cédant l'Éclat, mais Ruine est trop distrait pour l'achever.",
			},
			'hoa-80': {
				title: "La réparation de l'âme",
				description:
					"Kelsier est à l'agonie. L'attraction de la mort le tire à nouveau — mais il s'accroche, décidant une fois de plus de ne pas mourir, un choix à sa portée en vertu d'avoir Ascensionné. Son âme est profondément blessée d'avoir cédé Préservation à Vin, mais avec le temps elle commence à se réparer. Depuis le Royaume Cognitif, Kelsier observe les centaines de milliers de réfugiés rassemblés aux Puits, les kandra déplaçant l'atium, et Vin — désormais Préservation — murmurant dans le vent pour guider Elend.",
			},
			'hoa-81': {
				title: 'Veilleur aux Puits',
				description:
					"Kelsier regarde la bataille finale se dérouler. Elend prononce son discours aux Voyants et les mène charger l'armée koloss. Pendant des heures, Elend brûle une fortune d'atium — puis Kelsier le voit s'embraser d'un éclat impossible, brûlant duralumin et atium ensemble dans un ultime éclair de perspicacité divine. Elend enfonce son épée dans le cou de Marsh tandis que la hache le frappe à la poitrine. Il meurt en souriant. Puis Vin attaque — Préservation frappant Ruine avec une fureur qu'aucun Éclat n'était censé survivre. Ati et Vin meurent tous deux. Les pouvoirs de Préservation et de Ruine sont libérés sur le monde.",
			},
			'hoa-82': {
				title: "L'Au-delà",
				description:
					"Kelsier envisage de prendre les deux Éclats lui-même. Puis Elend arrive dans le Royaume Cognitif — puis Vin. Ils s'embrassent, enfin réunis. Ati arrive ensuite et Kelsier lui donne un coup de poing. Ensemble, ils regardent Sazed tendre la main et prendre à la fois Préservation et Ruine, les pouvoirs qui semblent s'appartenir mutuellement, et devenir Harmonie. Sazed propose de renvoyer Vin, mais elle sait que cela ne fonctionnera pas. Elle souhaite partir avec Elend. Vin remercie Kelsier pour tout ce qu'il a fait pour elle, et suit Elend dans l'Au-delà.",
			},
			'hoa-83': {
				title: 'Le choix du Survivant',
				description:
					"Le monde est détruit et renaît. Pendant le Catacendre, Kelsier voit les trois Royaumes à la fois. Quand cela se termine, il est de nouveau piégé dans le Royaume Cognitif. Sazed (Harmonie) lui rend visite et admet qu'il ne peut pas ramener Vin et Elend de l'Au-delà. Kelsier lui demande de guérir Spook et d'en faire un Fils-des-brumes. Quand Sazed dit qu'il n'y a pas de chemin de retour vers le Royaume Physique, Kelsier décide qu'Harmonie est un terrible menteur — et commence à comploter.",
			},
			'hoa-83.2': {
				title: 'Le plan du Survivant',
				description:
					"Kelsier convainc Spook d'expérimenter avec l'hémalurgie — à la fois pour prolonger la vie de Spook et pour trouver un moyen pour Kelsier de revenir dans le Royaume Physique. Le Survivant de Hathsin n'a pas l'intention de rester une Ombre Cognitive pour toujours.",
			},
		},
		vin: {
			...enData.movements.vin,
			// ── L'Empire ultime ────────────────────────────────────────────
			'tfe-1': {
				title: 'Orpheline des rues',
				description:
					"Vin est convoquée devant son chef de bande Camon, qui la traite durement. Elle utilise inconsciemment sa Chance — une forme d'apaisement allomantique — pour le calmer. Camon se fait passer pour lord Jedue, un noble désespéré en quête de nouveaux contrats, et prépare une escroquerie contre le Ministère de l'Acier. Vin utilise sa Chance sur l'obligateur prélat Laird pour qu'il ne refuse pas les suppliques de Camon.",
			},
			'tfe-2': {
				title: "L'escroquerie au Ministère",
				description:
					"Camon, en tant que lord Jedue, emmène Vin au Canton des Finances pour escroquer le Ministère. Vin utilise sa Chance sur le haut prélat, qui remet trois mille boxings à Camon. Kelsier et Dockson, assis dans la salle d'attente, détectent les pulsations allomantiques de Vin. Ensuite, ils voient un Inquisiteur d'Acier suivre le cortège de Camon.",
			},
			'tfe-4': {
				title: 'Recrutée',
				description:
					"Kelsier présente son plan pour renverser l'Empire ultime à l'équipe dans l'atelier de Clubs. L'équipe accepte, sauf Clubs qui part avant de revenir. Kelsier révèle que Vin est Fils-des-brumes et leur parle du Onzième Métal, en le leur montrant.",
			},
			'tfe-7': {
				title: 'Entraînement de Fils-des-brumes',
				description:
					"Kelsier emmène Vin pour sa première nuit d'entraînement et lui remet un manteau de brume. Il lui enseigne les huit métaux de base — étain, étain-lourd, fer, acier, zinc, laiton, cuivre et bronze — terminant la nuit aux remparts de Luthadel.",
			},
			'tfe-8': {
				title: 'Le domaine Renoux',
				description:
					"Vin et Kelsier franchissent les murailles de Luthadel dans la nuit, où Vin rencontre un spectre de brume pour la première fois. Sur la route, Sazed attend avec un attelage et les conduit à Fellise. En chemin, Kelsier offre à Vin les trois mille boxings et l'option de partir. Elle prend l'argent mais reste pour voir comment tout cela finira. Au domaine de lord Renoux, celui-ci propose que Vin joue le rôle de lady Valette.",
			},
			'tfe-9': {
				title: "S'entraîner avec Sazed",
				description:
					"Vin et Kelsier s'affrontent dans un combat d'entraînement au domaine Renoux. Ensuite, Vin se fait couper les cheveux et Sazed la questionne sur sa couverture noble, en lui parlant aussi du trélagisme. Kelsier et Sazed discutent ensuite en privé des progrès de Vin ; Kelsier annonce qu'ils assisteront à un bal à la Forteresse Venture en fin de semaine.",
			},
			'tfe-10': {
				title: "Retour à l'équipe",
				description:
					"Vin revient à Luthadel depuis Fellise pour apprendre les métaux avec les brumeux de l'équipe, en commençant par Breeze, qui lui enseigne l'apaisement. Hammond arrive et débat de la moralité de renverser l'Empire ultime en attendant le discours de Kelsier.",
			},
			'tfe-10.2': {
				title: "Le meeting de l'entrepôt",
				description:
					"Vin assiste au meeting secret dans le quartier des entrepôts où Kelsier prêche la révolution aux travailleurs skaa. Ensuite, Kelsier tient une réunion d'avancement à la boutique de Clubs. Vin et Lestibournes parlent de Marsh. La réunion prend fin quand un soldat de Hammond signale que le Ministère de l'Acier a découvert l'ancien repaire de Camon.",
			},
			'tfe-11': {
				title: 'Le massacre du repaire de Camon',
				description:
					"Vin et l'équipe inspectent le repaire détruit, trouvant des cadavres partout. Parmi eux, Vin voit Ulef — quelqu'un lui a arraché la cage thoracique à mains nues. Sazed récite une prière de la religion cazzi. Le corps de Milev est trouvé attaché à une chaise, manifestement torturé. Après leur départ, Kelsier trouve le cadavre de Camon suspendu par un crochet dans sa bouche.",
			},
			'tfe-12': {
				title: 'Premier bal à la Forteresse Venture',
				description:
					"Vin se rend à son premier bal à la Forteresse Venture, Sazed menant l'attelage. Kelsier apparaît en chemin, lui donne des conseils et replonge dans les brumes. Vin arrive et est présentée comme lady Valette Renoux. Au dîner, elle voit son père de l'autre côté de la salle. Elle refuse des invitations à danser et se retire sur un balcon à l'étage, où elle a sa première conversation avec Elend Venture, ce qui choque Sazed.",
			},
			'tfe-13': {
				title: 'Retour à Fellise',
				description:
					'Sazed interroge Vin sur son interaction avec Elend au domaine Renoux. La vraie personnalité de Vin commence à émerger — ni la timide membre de bande ni lady Valette. Kelsier apprend que le père de Vin était au bal et repart dans les brumes.',
			},
			'tfe-14': {
				title: 'Dans Kredik Shaw',
				description:
					"Kelsier conduit Vin à Kredik Shaw et ils se frayent un passage en combattant vers le bâtiment que le Seigneur Maître visite tous les trois jours. Vin tue pour la première fois. Trois Inquisiteurs d'Acier les encerclent. Pour se défendre contre des triangles métalliques aiguisés qu'on Pousse vers elle, Vin saisit un livre en cuir. Brûlant de l'atium, elle s'échappe temporairement avant qu'un Inquisiteur ne lui plante une hache d'obsidienne dans le flanc. Vin s'enfuit avec le livre, mais en perdant connaissance, quelque chose distrait l'Inquisiteur qui la poursuit et la prend dans une étreinte protectrice — ce n'était pas Kelsier.",
			},
			'tfe-15': {
				title: 'Blessée',
				description:
					"L'équipe conteste la décision de Kelsier d'emmener Vin à Kredik Shaw. Sazed arrive en la portant. On lui administre de l'étain pour l'aider à guérir. Sazed l'opère et Ham la porte dans une chambre pour qu'elle se rétablisse. Kelsier et Dockson remarquent le livre ; Sazed l'identifie comme écrit en khlennien.",
			},
			'tfe-16': {
				title: 'Convalescence à la boutique de Clubs',
				description:
					"Vin se réveille après deux semaines de repos à la boutique de Clubs. Spook a veillé sur elle et lui raconte comment Kelsier lui a donné son surnom. En discutant avec Dockson, Vin réalise qu'il y a quelque chose de très inhabituel chez Sazed.",
			},
			'tfe-16.2': {
				title: 'Retour à Fellise',
				description:
					'Après quelques jours de repos supplémentaires, Vin retourne au domaine Renoux à Fellise. Elle parle avec Sazed, qui explique ce que sont les Gardiens et révèle que tous les intendants terrisiens sont des eunuques.',
			},
			'tfe-17': {
				title: 'Le jardin du manoir Renoux',
				description:
					"Vin se lamente de quatre semaines d'ennuyeuse convalescence au domaine Renoux. Des membres de l'équipe arrivent pour discuter des nouvelles. Vin convainc Kelsier de la laisser assister au prochain bal. Plus tard, ils parlent de Mare, des motivations de Kelsier, et il lui explique le Craquement — l'événement traumatique qui éveille les pouvoirs allomantiques.",
			},
			'tfe-18': {
				title: 'Bal à la Forteresse Elariel',
				description:
					"Vin assiste à un bal à la Forteresse Elariel avec Sazed. Elend Venture s'assoit à sa table et lit, comme d'habitude. Il complimente sa robe et la laisse bouche bée. Elle danse avec plusieurs nobles et se renseigne sur Elend ; elle entend parler de lady Shan Elariel. Après avoir beaucoup dansé, Vin est obligée de rencontrer Shan. Elle remarque que Shan peut apaiser. Le terrisien de Shan fouille les livres d'Elend ; Vin feuillette un petit livre presque séditieux. Elend revient, rassemble ses livres et part avec deux amis. Sazed les identifie comme Jastes Lekal et un Hasting. En quittant le bal, Vin voit un garde de la ville égorger un jeune aide-cuisinier skaa dans les brumes.",
			},
			'tfe-19': {
				title: 'Retour à Fellise',
				description:
					"Kelsier rentre au manoir Renoux par la Route des Épines et retrouve Vin, Sazed et Renoux. Il fait la leçon à Vin au sujet des nobles, insistant qu'ils ne se soucient pas des skaa et qu'elle doit rester loin d'Elend Venture.",
			},
			'tfe-20': {
				title: 'Leçons de chercheuse',
				description:
					"Vin revient de Luthadel et voit des caisses d'armes devant le manoir Renoux, prêtes pour la rébellion. Marsh arrive peu après et lui enseigne à chercher — utiliser le bronze pour détecter d'autres allomanciens — ainsi que des détails supplémentaires sur l'allomancie.",
			},
			'tfe-22': {
				title: 'Le journal',
				description:
					"Vin lit sa copie du journal du Seigneur Maître au domaine Renoux quand Spook arrive. Il lui donne un mouchoir ; Sazed lui explique ensuite qu'un jeune homme signifie ainsi qu'il souhaite courtiser sérieusement une dame. En attendant Dockson, Vin parle avec Sazed du terrisien du journal ; Sazed révèle les secrets de la féruchemie et la formation des Gardiens. Vin parle ensuite avec Dockson, qui raconte comment lord Devinshae a pris la femme qu'il aimait et l'a tuée le lendemain matin.",
			},
			'tfe-23': {
				title: 'Bal à la Forteresse Hasting',
				description:
					"Vin assiste au bal de la Forteresse Hasting, satisfaite de voir que les efforts de Kelsier portent leurs fruits. Lady Shan lui demande de fouiller les livres d'Elend la prochaine fois. Vin trouve Elend et lui demande s'il a couché avec une skaa. Il confesse que son père l'y a obligé à treize ans et que la femme a été tuée ensuite. Elend lui donne un mouchoir, signifiant son désir de la courtiser. Après être parti avec ses amis, Vin les suit avec l'allomancie jusqu'à une tour où ils discutent des défaillances du Seigneur Maître. Kelsier apparaît soudain et dédaigne les idées du groupe comme de l'idéalisme typique de jeunes.",
			},
			'tfe-24': {
				title: "Réunion de l'équipe",
				description:
					"Vin et Kelsier arrivent à la boutique de Clubs où la majeure partie de l'équipe est rassemblée. Kelsier discute de l'état de la mission et Vin réalise combien elle aime sa nouvelle vie. Kelsier, Spook, Ham et Clubs partagent un verre nocturne.",
			},
			'tfe-24.2': {
				title: 'Visite à la garnison',
				description:
					"Vin enfile ses vêtements de garçon des rues et sort avec Ham visiter la Garnison de Luthadel pour en apprendre plus sur l'étain. Ham explique que beaucoup de soldats sont des skaa ordinaires. Un garde nommé Sertes les informe que la Garnison se mobilise — une rébellion skaa a attaqué la Garnison de Holstep au nord.",
			},
			'tfe-25': {
				title: 'Nouvelles urgentes',
				description:
					"À la boutique de Clubs, Ham annonce que la Garnison de Luthadel marche vers Holstep. Kelsier fait avaler à Vin cinq billes d'étain pour courir vers le nord avertir l'armée rebelle.",
			},
			'tfe-25.2': {
				title: "La course de l'étain",
				description:
					"Vin et Kelsier courent seize heures sans arrêt en brûlant de l'étain lors d'une course désespérée. Ils tombent sur les restes de l'armée rebelle, encerclée et massacrée par la Garnison de Valtroux. Kelsier veut se battre, mais Vin le convainc qu'ils ne sont pas invincibles. Ils se dirigent vers les Cavernes d'Arguois, où 2 000 soldats ont survécu grâce à Mennis.",
			},
			'tfe-26': {
				title: 'Récupération',
				description:
					"Vin gît épuisée au lit à la boutique de Clubs. Il leur a fallu deux semaines pour revenir à Luthadel. Kelsier fait irruption ; Breeze l'accuse de courir après la gloire. Kelsier admet le revers mais refuse d'abandonner.",
			},
			'tfe-26.2': {
				title: 'Les exécutions',
				description:
					"Spook annonce des exécutions à la Place de la Fontaine. L'équipe s'y rend et soudoie quelqu'un pour accéder au toit. Vin identifie son père devant Kelsier — un obligateur nommé Tevidian, lord Prélat et le plus haut obligateur, au-dessus même des Inquisiteurs. Ils regardent des femmes et des enfants tirés d'un chariot-prison et exécutés, la fontaine rouge de sang.",
			},
			'tfe-27': {
				title: 'Planifier les prochaines étapes',
				description:
					"L'équipe revient à la boutique de Clubs. Kelsier, Vin et les autres replanifient comment avancer et déclencher une guerre des maisons. Sazed arrive avec une lettre de Marsh et des indications de rendez-vous.",
			},
			'tfe-27.2': {
				title: 'Rencontre avec Marsh',
				description:
					"Kelsier et Vin se rendent dans un bâtiment abandonné des Méandres pour rencontrer Marsh. En attendant, Kelsier parle de l'or — le neuvième métal allomantique. Marsh arrive avec les tatouages d'un obligateur de bas rang du Canton de l'Inquisition. Il révèle que le Ministère place des apaiseurs dans les régions skaa sous apaisement constant, dissimulés par des enfumeurs. Marsh confirme aussi que les Inquisiteurs peuvent mourir de vieillesse.",
			},
			'tfe-28': {
				title: 'Bal à la Forteresse Lekal',
				description:
					"Vin assiste à un bal à la Forteresse Lekal et commence à répandre des rumeurs pour allumer les guerres des maisons. Elend la surprend — il dit vouloir l'embrasser, mais Vin insiste qu'il ne la connaît pas vraiment. Ils font une promenade et Elend révèle que la fortune des Venture provient entièrement de l'extraction d'atium aux Puits de Hathsin. Il mentionne aussi que les Tekiel ont été tués par la Maison Hasting et tente de convaincre Valette de quitter Luthadel.",
			},
			'tfe-29': {
				title: 'La dernière traduction',
				description:
					"Vin lit la dernière traduction du journal faite par Sazed au manoir Renoux et est déçue qu'il n'y en ait plus. Sazed lui explique la féruchemie plus en détail et elle essaie de brûler un de ses esprits d'étain. Plus tard, Kelsier rejoint l'équipe pour étudier une carte de Marsh. Ils découvrent que la bande de Theron a été attaquée, et Vin soupçonne que les Inquisiteurs sont toujours à ses trousses.",
			},
			'tfe-30': {
				title: 'Le bal Venture',
				description:
					"Vin assiste au dernier bal des maisons à la Forteresse Venture avec Sazed. Lady Kliss se révèle informatrice et tente de faire chanter la Maison Renoux. En échange d'un collier de saphir, Kliss révèle à Vin que des assassins Elariel tenteront de tuer Elend ce soir. Vin force Kliss allomantiquement à tout révéler. Elle brise un vitrail pour s'enfuir. Dehors, elle affronte deux brutes, deux lanceurs de pièces et deux Fils-des-brumes — dont Shan Elariel. Vin la piège en épuisant son atium avant elle, et la tue.",
			},
			'tfe-31': {
				title: 'Après le duel',
				description:
					'Vin débarque bandée et en lambeaux dans la cuisine de Clubs. Kelsier la réprimande pour avoir sauvé Elend, mais Vin crie que skaa et nobles ne sont pas différents — Elend est un homme bon. Sur le toit, Vin dit à Kelsier que la Maison Venture gère les Puits et partage sa théorie selon laquelle les Inquisiteurs voient à travers les nuages de cuivre. Kelsier teste la théorie et la confirme.',
			},
			'tfe-32': {
				title: 'Surveillance du toit',
				description:
					"Vin et Spook montent la garde du toit au-dessus de la boutique de Clubs. Spook lui enseigne des astuces avec l'étain : ce n'est pas qu'une question d'amplifier les sens, mais de filtrer les distractions. Plus tard, Kelsier et Vin trouvent le corps de Marsh — vidé de son sang. Ils découvrent une lettre expliquant que les Inquisiteurs le trouveraient probablement.",
			},
			'tfe-33': {
				title: "Le refuge d'urgence",
				description:
					"L'équipe s'installe dans un sous-sol de secours humide près de la boutique de Clubs — trois pièces. Kelsier annonce avoir détruit tout l'atium des Puits. Spook monte la garde en tant que brumeux d'étain.",
			},
			'tfe-33.2': {
				title: "Le combat contre l'Inquisiteur",
				description:
					"Tous suivent Kelsier à la Place de la Fontaine. Ils voient Spook et lord Renoux dans un chariot d'exécution. Kelsier se bat contre un Inquisiteur sur la place. Elend voit les serviteurs Renoux emprisonnés et appelle Valette, sans la trouver.",
			},
			'tfe-34': {
				title: 'La mort du Survivant',
				description:
					"Kelsier affronte l'Inquisiteur dans un combat total à la Place de la Fontaine, tous deux brûlant de l'atium. Vin observe d'en haut — Kelsier est un vrai maître de la Poussée et de la Traction. Il tue l'Inquisiteur et les skaa scandent « Le Survivant de Hathsin ». Le Seigneur Maître arrive dans un carrosse noir. Kelsier est abattu. Vin saute et le tient dans ses bras tandis qu'il meurt.",
			},
			'tfe-35': {
				title: "L'héritage du Survivant",
				description:
					"Vin retourne au refuge d'urgence. Elle est furieuse que Kelsier n'ait pas été honnête — il avait prévu de mourir et de l'abandonner. Sazed offre des paroles de réconfort. Dehors, les skaa parlent du Seigneur des Brumes. Dans un entrepôt voisin, l'équipe voit le kandra sous la forme de Kelsier. Kelsier avait laissé des lettres avec des instructions pour prendre la ville. La lettre de Vin dit qu'il n'a jamais résolu le mystère du Onzième Métal. Elle décide de découvrir ce que cache le Seigneur Maître.",
			},
			'tfe-36': {
				title: 'Dans Kredik Shaw',
				description:
					"Vin marche en silence vers Kredik Shaw, encourageant les gardes extérieurs à rejoindre la rébellion. À l'intérieur, elle tue deux Inquisiteurs et découvre que la poussière d'étain altère sa vision. Dans la chambre suivante, un vieil homme est assis sur une chaise. Un Inquisiteur saisit Vin à la gorge — le vieil homme parle et les Inquisiteurs l'appellent le Seigneur Maître. Mais Vin est confuse : le Seigneur Maître de la Place de la Fontaine était un homme jeune. Elle brûle le Onzième Métal et voit deux silhouettes fantomatiques près du vieil homme.",
			},
			'tfe-37': {
				title: 'Sauvetage et révélation',
				description:
					"Les Inquisiteurs forcent Vin à brûler un métal qui annule tous les autres. Elle est amenée devant le Seigneur Maître sur son trône — la version jeune, l'homme qui a tué Kelsier. Tevidian, père de Vin et obligateur le plus haut gradé, est exécuté par les Inquisiteurs. Vin découvre que Reen ne l'a jamais dénoncée — il a enduré la torture et dit aux Inquisiteurs qu'elle était morte de faim depuis longtemps. Sazed est amené dans sa cellule et libère sa force féruchemique pour enfoncer la porte. Elend et six soldats font irruption. Vin trouve son manteau et un flacon de métaux. Elend sait maintenant qu'elle est Fils-des-brumes. Elle lui prend la tête et l'embrasse, puis part tuer le Seigneur Maître.",
			},
			'tfe-38': {
				title: 'Assassin du Seigneur Maître',
				description:
					"Vin bondit entre les aiguilles de Kredik Shaw jusqu'au sommet. L'Inquisiteur Kar l'attrape à la gorge, mais un second Inquisiteur s'approche et arrache un clou métallique du cou de Kar, le tuant instantanément. C'est Marsh — vivant, avec onze clous dans le corps. Il a tué tous les autres Inquisiteurs. Le vrai nom du Seigneur Maître est Rashek : il a assassiné le Héros des Siècles et pris sa place. Vin arrache les bracelets du Seigneur Maître. Sans sa jeunesse féruchemique, il devient un vieil homme faible. Sazed apparaît avec un flacon de métaux. Vin lui plonge une lance en plein cœur. Mille ans d'oppression prennent fin.",
			},
			'tfe-39': {
				title: 'Une nouvelle ère',
				description:
					'Sazed, Marsh et Vin se tiennent sur un bâtiment près du quartier skaa. Sazed explique que le Seigneur Maître était à la fois féruchemiste et allomancien — les bracelets stockaient sa jeunesse. Marsh décrit sa survie et sa transformation : onze clous métalliques, deux par les yeux, huit dans la poitrine, un dans le dos. Il leur parle aussi des kandras, créatures ayant évolué à partir des spectres de brume, qui voient désormais Vin comme leur maîtresse.',
			},
			'tfe-39.2': {
				title: 'Vin et Elend',
				description:
					"Vin observe secrètement Elend depuis les brumes devant la Forteresse Venture. Sa réunion avec les dirigeants skaa et nobles s'est bien passée. Elend rédige le nouveau code de lois. Vin se souvient que Reen ne l'a jamais trahie aux Inquisiteurs : il existe des gens qui l'aiment vraiment. Elle court vers Elend et ils s'étreignent.",
			},
			'woa-1': {
				title: 'Gardienne de la ville',
				description:
					'Vin patrouille les remparts de Luthadel chaque nuit, surveillant les menaces tandis que trois armées convergent lentement vers la ville nouvellement libérée.',
			},
			'woa-2': {
				title: 'Embuscade dans les brumes',
				description:
					"Vin est prise en embuscade par huit allomanciens au sud de la Forteresse Venture près de Kredik Shaw. Un mystérieux Fils-des-brumes — le Veilleur — intervient et l'aide à les tuer ou les disperser. Elle soupçonne les assassins d'avoir été envoyés par l'une des armées assiégeantes.",
			},
			'woa-3': {
				title: "L'esprit des brumes",
				description:
					"Vin observe la Forteresse Venture depuis un toit et rencontre l'esprit des brumes — une figure translucide qui pointe vers quelque chose d'invisible. Elle retourne au bureau d'Elend où Ham arrive avec des renseignements suggérant que les assassins ont été envoyés par le roi Cett.",
			},
			'woa-5': {
				title: 'OreSeur renaît',
				description:
					'Vin parcourt le marché de la rue Kenton et achète un chien-loup quelle donne à OreSeur le kandra comme nouveau corps. Elle découvre un nouveau métal allomantique — le duralumin — et retourne à la Forteresse Venture pour tester son pouvoir.',
			},
			'woa-6': {
				title: 'Entraînement dans la cour',
				description:
					"Vin s'entraîne avec Ham dans la cour de la Forteresse Venture, testant ses compétences au combat tandis qu'OreSeur observe sous sa nouvelle forme de chien-loup. Spook revient de sa mission de reconnaissance.",
			},
			'woa-8': {
				title: 'Poursuivre le Veilleur',
				description:
					'Vin patrouille Luthadel et poursuit le Veilleur — le mystérieux Fils-des-brumes — à travers les toits de la ville. La poursuite se termine près de la Place de la Fontaine, où elle expérimente en brûlant du duralumin et découvre son effet dévastateur.',
			},
			'woa-10': {
				title: "Protéger l'Assemblée",
				description:
					"Vin et Ham protègent Elend tandis qu'il s'adresse à l'Assemblée. Une Terrisienne inconnue est dans le public. Pendant la réunion, on apprend qu'une deuxième armée — les forces du roi Cett — est apparue devant Luthadel.",
			},
			'woa-11': {
				title: 'Sauver Breeze',
				description:
					"Vin rejoint Elend et Clubs sur le rempart pour observer l'armée de Cett. Quand Breeze est en danger en contrebas, Vin utilise une Poussée d'acier au duralumin pour le sauver — lançant une pièce avec une force terrifiante. De retour à la Forteresse Venture, l'équipe découvre des os de kandra, soulevant la crainte d'un imposteur.",
			},
			'woa-13': {
				title: "L'esprit revient",
				description:
					"Vin remarque que les brumes arrivent plus tôt chaque soir et cherche l'esprit des brumes, le trouvant dans un immeuble abandonné. Elle tombe d'une fenêtre durant la rencontre. Plus tard, Elend réunit l'équipe pour un conseil de guerre, et Tindwyl demande une audience privée avec lui.",
			},
			'woa-14': {
				title: 'Tindwyl arrive',
				description:
					"Tindwyl commence à former Elend à l'art de régner à la Forteresse Venture. Vin se méfie de cette Terrisienne autoritaire mais observe Elend commencer lentement à changer sous sa tutelle.",
			},
			'woa-16': {
				title: 'La recherche du journal',
				description:
					"Vin décortique le journal d'Alendi à la Forteresse Venture, cherchant des références à l'esprit des brumes et à la Profondeur. Elle pense que la créature qui la suit est la même qui suivait Alendi des siècles auparavant.",
			},
			'woa-17': {
				title: 'Duel avec le Veilleur',
				description:
					"Après avoir rencontré le messager de Straff — Zane, le Veilleur — Vin part en patrouille avec OreSeur. Elle affronte Zane et ils finissent par un féroce duel de poussée d'acier à la Forteresse Hasting. Zane lui dit que les Fils-des-brumes appartiennent aux brumes, pas aux nobles.",
			},
			'woa-20': {
				title: 'Conseil de guerre',
				description:
					"Vin observe Elend, Dockson, Hammond, Clubs et Breeze discuter du plan pour parlementer avec Straff. Elle utilise le bronze pour éliminer Breeze comme suspect d'être l'imposteur kandra. Allrianne, la fille de lord Cett, arrive cherchant asile et Breeze.",
			},
			'woa-21': {
				title: "L'arrivée d'Allrianne",
				description:
					"Allrianne Cett arrive au palais et embrasse Breeze, surprenant tout le monde. Elend lui offre l'hospitalité. Dockson propose d'utiliser Allrianne comme monnaie d'échange contre lord Cett.",
			},
			'woa-22': {
				title: 'Tensions politiques',
				description:
					"Alors que le siège se resserre, Vin regarde Elend lutter avec l'Assemblée et les exigences du gouvernement tandis qu'elle traque Zane à travers les brumes.",
			},
			'woa-24': {
				title: 'Veille de nuit',
				description:
					"Vin monte la garde devant le balcon d'Elend et brûle du bronze, détectant l'esprit des brumes et une source lointaine de puissance allomantique. Zane la trouve à la Forteresse Venture et la défie, lui demandant ce qu'elle ferait sans répercussions. Elle répond qu'elle tuerait les chefs des armées ennemies.",
			},
			'woa-25': {
				title: 'Courses et escarmouche',
				description:
					"Tindwyl emmène Vin faire des courses rue Kenton avec Allrianne, Spook et OreSeur. Dehors, Vin parle aux membres de l'Église du Survivant. Les tambours d'alarme sonnent. L'armée de Straff lance une feinte contre les remparts et Vin se précipite pour aider à la défense.",
			},
			'woa-26': {
				title: 'Parlementer avec Straff',
				description:
					'Vin accompagne Elend au camp de guerre de Straff Venture au nord de la ville, où elle démontre sa puissance terrifiante pour intimider le prétendu conquérant.',
			},
			'woa-27': {
				title: 'Le bluff',
				description:
					"Tandis que Vin écoute de l'extérieur de la tente, Straff menace de tuer Elend durant la négociation. Zane apparaît. Le bluff de Vin et Elend réussit. Straff les laisse partir. Sur la route du retour, Elend reçoit un message : l'Assemblée a voté la défiance et il n'est plus roi.",
			},
			'woa-28': {
				title: 'Retour de négociation',
				description:
					'Après la rencontre tendue au camp de Straff, Vin retourne à la Forteresse Venture, hantée par les murmures de Zane et ses doutes croissants sur son rôle.',
			},
			'woa-29': {
				title: 'Insomnie et perspicacité',
				description:
					"Vin et OreSeur s'assoient à la Forteresse Hasting dans les brumes nocturnes. Ils discutent du caractère de Zane et de l'insomnie grandissante de Vin. Vin a un éclair de perspicacité sur la véritable nature de la Profondeur.",
			},
			'woa-30': {
				title: 'La théorie de la Profondeur',
				description:
					"Vin entre à la Forteresse Venture par la fenêtre de Sazed et lit sa transcription des frottages du Conventicule. Elle propose que les brumes sont la Profondeur — que des brumes diurnes permanentes pourraient causer la famine. Elle dit à Sazed qu'elle a vu la même créature qui suivait le Héros des Siècles.",
			},
			'woa-31': {
				title: 'La nomination de Penrod',
				description:
					"Vin accompagne Elend et toute l'équipe à l'Assemblée. Elend nomme lord Penrod comme chancelier et s'adresse à l'Assemblée, invoquant l'héritage de Kelsier à travers Vin comme dissuasion contre Straff. Les nominations pour un nouveau roi sont ouvertes — Penrod, Elend et lord Cett, qui apparaît dans la foule.",
			},
			'woa-33': {
				title: 'Secrets des kandra',
				description:
					"Vin se demande si elle est le véritable Héros des Siècles et discute des vagues prophéties terrisanes avec OreSeur. Il révèle par inadvertance que les kandra ont leur propre religion antérieure à l'Ascension du Seigneur Maître. Vin enquête sur Dockson dans la bibliothèque du palais et soupçonne le capitaine Demoux.",
			},
			'woa-34': {
				title: 'Zane sur le toit',
				description:
					"Vin trouve Elend et l'équipe étudiant la stratégie de l'Assemblée dans la bibliothèque. Entendant un bruit dehors, elle enquête et trouve Zane sur le toit. Il l'attaque, révélant qu'il brûle de l'atium. Il s'arrête et lui dit que Straff veut qu'il la tue, qu'il est le demi-frère d'Elend, et que les koloss sont à un jour de Luthadel.",
			},
			'woa-35': {
				title: 'Dîner avec Cett',
				description:
					"Vin essaie sa nouvelle robe de Fille-des-brumes. Elle et Elend vont dîner avec lord Cett à la Forteresse Hasting. Cett expose ses plans pour Luthadel et offre de la nourriture en échange de la réserve d'atium, mais Elend dit qu'elle n'a pas été trouvée.",
			},
			'woa-36': {
				title: "L'Église du Survivant",
				description:
					"Vin observe Allrianne utilisant l'allomancie pour agiter les émotions de Breeze à la Forteresse Venture. Elle suit le capitaine Demoux à travers la cour du palais et découvre qu'il dirige secrètement l'Église du Survivant — prêchant que Vin restaurera le monde. Elle le confronte mais promet de garder son secret.",
			},
			'woa-38': {
				title: 'Élection et assassinat',
				description:
					"Vin et Elend assistent à l'Assemblée pour l'élection du roi. Elend révèle qu'il a rejoint l'Église du Survivant. Des assassins attaquent — Vin combat six allomanciens envoyés par Straff, grièvement blessée mais tuant tous les assaillants avec l'aide d'OreSeur. L'Assemblée se réunit de nouveau et élit Penrod roi.",
			},
			'woa-40': {
				title: 'Rétablissement',
				description:
					"Vin se réveille dans un lit d'hôpital à la Forteresse Venture avec Elend à son côté. Il lui dit que Penrod est maintenant roi et tressaille quand elle le touche. Zane lui rend visite pendant son sommeil, affirmant que les assassins étaient de Cett. OreSeur revient avec un nouveau corps de chien, et Vin découvre qu'elle peut contrôler les kandra avec du laiton au duralumin.",
			},
			'woa-43': {
				title: 'Raid sur Cett',
				description:
					"Zane dit à Vin que Demoux trahit Elend à la demande de Cett et suggère qu'ils attaquent les forces de Cett. Vin et Zane lancent un assaut dévastateur sur la Forteresse Hasting, tuant gardes, soldats et tueurs de brume. Ils atteignent Cett et son fils, mais Vin demande grâce. Zane dit qu'elle est encore contrôlée et part. L'armée de Cett se retire de Luthadel.",
			},
			'woa-44': {
				title: 'Le repaire de Camon',
				description:
					"Après avoir chassé l'armée de Cett, Vin se cache dans l'ancien repaire de Camon — le bâtiment abandonné où sa vie de voleuse a commencé. Elle parle des soldats qu'elle a tués et de l'origine de sa boucle d'oreille. Elle dit à Elend qu'elle doit quitter Luthadel et aller au nord vers Terris, donnant la bille d'atium à OreSeur.",
			},
			'woa-45': {
				title: "Conseil sur l'amour",
				description:
					"Vin rend visite à Sazed pour lui demander conseil sur l'amour — devrait-elle être avec Elend ou avec quelqu'un qui lui ressemble plus. Sazed croit qu'ils sont faits l'un pour l'autre et résout de s'assurer qu'ils quittent Luthadel avant qu'elle ne tombe.",
			},
			'woa-46': {
				title: 'La chambre du Seigneur Maître',
				description:
					"Vin se rend dans la chambre secrète de Kredik Shaw où le Seigneur Maître passait du temps seul. Elle n'est pas sûre de pourquoi elle est venue, mais sent le battement lointain du Puits de l'Ascension qui restaure sa puissance. Elle repart, troublée.",
			},
			'woa-47': {
				title: 'Duel avec Zane',
				description:
					"Zane tente de convaincre Vin de quitter Luthadel avec lui, mais elle choisit la confiance d'Elend plutôt que la liberté. Furieux, Zane attaque. OreSeur ignore les ordres de Vin — Zane révèle que le kandra est TenSoon, l'espion de son véritable maître. TenSoon, qui s'est attaché à Vin, crie ce qu'elle sait des kandra — faisant allusion à sa propre faiblesse. Vin utilise le laiton-duralumin pour prendre le contrôle de TenSoon, prend la bille d'atium, et exploite la dépendance de Zane à l'atium pour feinter sa prescience, le poignardant au cou et le tuant.",
			},
			'woa-49': {
				title: "Évasion par la Porte d'Étain",
				description:
					"Vin, Elend et Spook quittent Luthadel par la Porte d'Étain, disant aux gardes qu'ils chevauchent chercher de l'aide et reviendront. Allrianne se joint au groupe. Hors des murs, un groupe d'archers de Straff tente de les intercepter, mais Vin les combat dans les brumes.",
			},
			'woa-50': {
				title: 'Levée du camp',
				description:
					"À un jour au nord de Luthadel, Vin, Elend et Spook lèvent le camp, confiants d'avoir échappé aux éclaireurs de Straff. Spook sent quelque chose les suivre dans les brumes, et Vin le reconnaît comme le mystérieux esprit des brumes qui la suit depuis des mois.",
			},
			'woa-51': {
				title: 'Jastes et la vérité',
				description:
					"Vin se réveille et trouve l'esprit des brumes planant au-dessus d'Elend et le poignarde, frappant quelque chose avant qu'il ne disparaisse. Spook signale cinq hommes les suivant — Jastes Lekal, qui a abandonné les koloss. Elend exécute son vieil ami. Spook révèle que Sazed les a trompés pour qu'ils partent, et Vin réalise que le Puits de l'Ascension est à Luthadel. Ils font demi-tour.",
			},
			'woa-52': {
				title: "La course d'étain",
				description:
					"Vin fonce vers Luthadel seule dans une désespérée course d'étain, brûlant ses métaux à la limite et terrifiée d'arriver trop tard tandis que les koloss attaquent la ville.",
			},
			'woa-53': {
				title: 'Vin sauve Sazed',
				description:
					"Vin atteint Luthadel après avoir ramassé des fers à cheval dans un village périphérique pour une voie à pointes improvisée. Elle arrive juste au moment où Sazed est sur le point d'être submergé à la porte, et les skaa qui regardent commencent à scander tandis qu'elle brise les koloss environnants d'une seule explosion allomantique.",
			},
			'woa-54': {
				title: 'Contrôler les koloss',
				description:
					"Presque à court d'étain et incapable de vaincre les koloss seule, Vin tente une dernière poussée au duralumin et découvre qu'elle peut prendre le contrôle des créatures — la faiblesse que le Seigneur Maître a intégrée en elles. Elle amène ses koloss contrôlés à la Forteresse Hasting et ordonne à lord Penrod d'envoyer des soldats protéger les citoyens.",
			},
			'woa-55': {
				title: 'Vaincre Straff',
				description:
					"Vin jaillit de la ville sur une poussée d'acier au duralumin, abattant Straff et son cheval avant de faucher ses officiers. Avec l'armée de Cett rejoignant la bataille, elle force Penrod, Cett et le général Janarle à accepter Elend comme Empereur, puis se retire pour se reposer.",
			},
			'woa-57': {
				title: 'La porte secrète',
				description:
					"Vin dit à Sazed que le Puits de l'Ascension est à Luthadel et qu'elle peut sentir son attraction. Après le retour d'Elend nommé Empereur, elle le guide avec Hammond et Spook vers Kredik Shaw, où elle ouvre une porte allomantique cachée avec une traction de duralumin et commence la descente.",
			},
			'woa-58': {
				title: 'Le Puits découvert',
				description:
					"Vin, Elend, Hammond et Spook descendent dans une vaste caverne sous Kredik Shaw et trouvent un bassin blanc lumineux — le Puits de l'Ascension, palpitant à pleine puissance. Alors que Vin hésite sur l'usage sage de ce pouvoir, l'esprit des brumes apparaît et poignarde Elend au ventre, le blessant mortellement.",
			},
			'woa-59': {
				title: 'Le pouvoir libéré',
				description:
					"Avec Elend mourant à ses côtés, Vin entre dans le bassin lumineux et s'empare de l'immense pouvoir du Puits. Une Voix lui dit que les brumes meurtrières sont la Profondeur revenue. Trompée par la manipulation des prophéties par Ruine, croyant qu'elle doit abandonner le pouvoir pour sauver le monde, elle le libère — et une voix triomphante proclame : « Je suis LIBRE ! »",
			},
			'woa-60': {
				title: 'Sur le rempart',
				description:
					"Vin se tient avec Elend restauré au sommet du rempart de Luthadel. Elle avoue qu'en libérant le pouvoir du Puits, elle a commis une erreur catastrophique — libérant la créature qui y était emprisonnée, quelque chose qui pourrait être pire que tout ce que le Seigneur Maître a jamais fait. Elend la rassure : quoi qu'il arrive, ils survivront ensemble.",
			},
			'hoa-3': {
				title: 'La première réserve',
				description:
					"Vin ouvre la caverne de stockage de Vetitan, trouvant de la nourriture, des provisions et une plaque de métal avec un message cryptique du Seigneur Maître sur le danger qu'il a emprisonné et l'emplacement de la prochaine réserve à Fadrex.",
			},
			'hoa-8': {
				title: 'La maladie des brumes',
				description:
					"Vin observe les brumes attaquer les réfugiés de Vetitan, rendant malade un nombre prévisible. Fatren ne la croit pas, mais Elend soutient que l'exposition est nécessaire pour l'immunisation. Vin interroge son koloss Human sur la reproduction. Elle et Elend guident les réfugiés vers un canal où les soldats de Demoux sont bivouaqués.",
			},
			'hoa-10': {
				title: "L'armée réunie",
				description:
					"Vin est avec l'armée d'Elend au sud-ouest de Luthadel en marche vers Fadrex quand Sazed, Breeze, Goradel et Allrianne les rattrapent. Sazed partage sa crise de foi avec Vin, qui lui donne le dessin de la fleur de Mare comme réconfort.",
			},
			'hoa-12': {
				title: 'Le conseil de guerre',
				description:
					"Vin et Elend discutent de la perte d'espoir de l'équipe de Kelsier. Elend convoque un conseil. Ils débattent des brumes envahissantes, de la culture de nourriture et des plans pour capturer les réserves. Elend envisage d'exposer son armée aux brumes et demande : « Que ferait Kelsier ? » pour les motiver.",
			},
			'hoa-15': {
				title: 'Ennemie dans les brumes',
				description:
					"Vin se demande pourquoi les brumes semblent différentes — elle ne se sent plus protégée par elles. Le koloss Human dit que les brumes le détestent, et qu'elles détestent Vin aussi. À sa surprise, elle est d'accord — les brumes sont maintenant son ennemi.",
			},
			'hoa-21': {
				title: 'Les seize pour cent',
				description:
					"Vin lit le journal d'Alendi, réfléchissant à comment combattre Ruine puisqu'il ne peut pas lire les pensées. Elend craint de devenir impitoyable comme le Seigneur Maître. Noorden présente les données de la maladie des brumes ; Vin lui fait recalculer. Le résultat : exactement seize pour cent. Quand quatre échantillons distincts produisent la même proportion sans marge d'erreur, Elend admet que le motif est trop précis pour être une coïncidence.",
			},
			'hoa-25': {
				title: 'Départ en reconnaissance',
				description:
					"L'armée d'Elend atteint Fadrex. Vin note les formations rocheuses naturelles et l'entrée en canyon qui rendront la conquête difficile. Elend propose de l'accompagner en mission de reconnaissance — elle lui dit qu'il n'est pas assez bon. Vin part au crépuscule infiltrer la ville seule.",
			},
			'hoa-27': {
				title: "L'informateur Slowswift",
				description:
					"Vin s'infiltre dans Fadrex et rend visite à Slowswift, un informateur recommandé par Cett. Il loue le règne de Yomen — stabilité, familiarité — et révèle qu'un bal a lieu ce soir malgré le siège. Il refuse d'aider au prix de son âme. Vin réplique que la cendre et les brumes meurtrières mettront fin à toute stabilité. Slowswift cède, partageant les faiblesses de Yomen.",
			},
			'hoa-27.2': {
				title: 'Reconnaissance du Canton',
				description:
					"Vin cherche un second informateur mais un malaise instinctif l'en éloigne. Elle explore le Canton des Ressources, le palais de Yomen, et perçoit des pulsations allomantiques indiquant un possible Fils-des-brumes — mais elles disparaissent avant qu'elle ne puisse localiser la source.",
			},
			'hoa-28': {
				title: 'Confiance et plan audacieux',
				description:
					"Vin revient de sa mission et dit à Elend qu'elle a senti l'Esprit des Brumes dans Fadrex — une force plus faible opposée à Ruine. Elle parle de sa destinée comme Héros des Siècles, mais Elend avertit que les prophéties ont pu être corrompues. Vin propose une idée plus audacieuse : s'infiltrer dans un des bals de Yomen et lui parler directement.",
			},
			'hoa-30': {
				title: 'Lady Patresen',
				description:
					"Elend et Vin se rendent au bal de la Forteresse Orielle. Ils sont annoncés et se séparent pour socialiser. Vin défie lady Patresen, jouant sur les peurs de ses disciples et avertissant que les choses n'iront pas bien pour quiconque s'oppose à eux.",
			},
			'hoa-37': {
				title: 'La fabrication des koloss',
				description:
					"Vin repousse les pillards de Yomen et poursuit un mystérieux Fils-des-brumes dans Fadrex mais le perd dans les rues sombres. Elle revient apprendre que le raid était une diversion : la moitié de leur armée koloss est morte. Dans le camp koloss, Human lui montre comment on fabrique les koloss — en écorchant un mort et en utilisant ses pointes. Vin l'arrête, horrifiée : les koloss sont fabriqués à partir d'humains.",
			},
			'hoa-40': {
				title: 'Le troisième art',
				description:
					"Vin observe Elend, Hammond, Cett, Noorden et Demoux reconstituer la vérité : l'hémalurgie — le troisième art métallique — utilise des pointes pour voler les pouvoirs. Elle réalise que Ruine contrôle les koloss et les Inquisiteurs par la même faiblesse d'allomancie émotionnelle qu'elle exploite. Vin implore l'aide des brumes comme autrefois contre le Seigneur Maître — mais ne rencontre que le silence.",
			},
			'hoa-43': {
				title: 'Le second bal',
				description:
					"Vin et Elend se rendent au second bal au Canton des Ressources. Vin détecte un Apaiseur et un Œil-d'étain qui la suivent. Elle trouve Slowswift, demande deux hommes, et au moment de la diversion prévue par Elend, elle frappe — utilisant une poussée de laiton au duralumin pour submerger les espions. Vin se change et se glisse dans le bâtiment pour trouver la réserve.",
			},
			'hoa-44': {
				title: 'Dans la réserve',
				description:
					"Vin descend sous terre, utilisant l'allomancie émotionnelle pour distraire les gardes. Elle atteint la réserve — mais la porte de pierre se scelle derrière elle. Elle a été sabotée : tout le métal a été retiré. Elle est piégée dans l'obscurité. Des pas approchent, et elle perçoit un allomancien dans la caverne avec elle. Ruine se tient devant elle, portant le visage de son frère Reen.",
			},
			'hoa-45': {
				title: 'Ruine révélé',
				description:
					"Vin affronte la créature portant le visage de Reen. Elle frappe avec une explosion de zinc au duralumin — rien ne se passe, prouvant que ce n'est pas un kandra. Elle attaque, mais il recule seulement, refusant de se battre. Dans l'obscurité, elle se concentre sur ses pulsations allomantiques et les reconnaît du Puits de l'Ascension. C'est Ruine. Il lui dit que toutes choses doivent finir et qu'il n'est pas son ennemi. Puis l'horreur plus profonde : il affirme qu'il a toujours été avec elle — depuis qu'elle était enfant.",
			},
			'hoa-48': {
				title: 'Les derniers mots du Seigneur Maître',
				description:
					"Piégée dans l'obscurité absolue, Vin palpe la réserve, rassemblant tout ce qu'elle sait de Ruine. Ses doigts trouvent la plaque de métal et elle la lit au toucher : la confession finale du Seigneur Maître. Ruine parlait dans son esprit. Il a essayé d'être un bon dirigeant. Il a bien caché le corps de Ruine. Et il se souciait — sachant que si quiconque lisait ces mots, il était déjà mort. Elle entend la porte de pierre s'ouvrir.",
			},
			'hoa-50': {
				title: 'Vin drogué',
				description:
					"La porte de pierre s'ouvre. Vin utilise son dernier flacon allomantique et tente une Poussée d'acier désespérée à travers la trappe du plafond — mais elle est lestée du dessus. Le premier homme à franchir la porte est Telden Hasting, le vieil ami d'Elend des bals, maintenant habillé en informateur noble de Yomen. Il lui offre la liberté en échange de vin drogué. Vin tente de bluffer mais Telden ne mord pas. Elle boit le vin et s'effondre inconsciente.",
			},
			'hoa-54': {
				title: 'Prisonnière de Yomen',
				description:
					"Vin s'éveille enchaînée sans métaux à brûler. Yomen a pris toutes les précautions — elle fait face à l'exécution pour le meurtre du Seigneur Maître. Il lui rend sa boucle d'oreille : un simple bijou d'argent et de bronze qu'il juge inutile pour un allomancien. Vin la remet, troublée. Ruine lui murmure de tuer Yomen — mais elle résiste.",
			},
			'hoa-57': {
				title: 'La nature de Ruine',
				description:
					"Ruine parle à Vin dans sa cellule, lui enseignant l'entropie — que toutes choses doivent finir, lui inclus. Son influence, réalise-t-elle, fonctionne comme l'allomancie émotionnelle : pas un contrôle mental, mais un murmure qui amplifie ce qui est déjà là. Ruine lui dit que Préservation est mort et que le monde finira dans quelques jours. Vin perçoit quelque chose d'inattendu sous sa vantardise — de l'émotion humaine, donc une faiblesse.",
			},
			'hoa-60': {
				title: "Devant la cour de l'obligateur",
				description:
					"Vin est amenée devant Yomen pour son procès. Elle tente une fausse évasion — abattant quatre gardes mais vingt la submergent. Enchaînée à un banc, elle graisse secrètement ses poignets et se libère. Elle se jette sur Yomen mais il brûle de l'atium et l'évite sans effort. Il lui dit de s'asseoir — sans chaînes. Yomen l'interroge sur le but de son armée. Elle révèle la vérité : l'atium. Yomen le juge sans valeur et termine la séance.",
			},
			'hoa-63': {
				title: "Le Brumeux d'atium",
				description:
					"Ruine se vante auprès de Vin de sa victoire imminente. Elle appelle ses gardes et dit vouloir passer un accord avec Yomen. L'obligateur arrive l'air fatigué, et Vin a une révélation : il n'est pas Fils-des-brumes du tout. C'est un Brumeux d'atium — un Voyant. Yomen médite que Vin fait partie des plans du Seigneur Maître. Des cartes sont apportées et Vin marque les emplacements des réserves restantes. Dans un éclair de clarté, elle comprend : Ruine les a utilisés, elle et Elend, pour trouver les réserves. Pire — il la manipulait spécifiquement pour localiser la réserve d'atium. Marsh arrive. Il sourit à Vin, s'incline devant Ruine, et annonce qu'il n'est pas là pour protéger Fadrex mais pour prendre l'atium. Yomen révèle la vérité : il n'y avait pas de grande réserve, seulement sept billes. Ruine hurle de frustration. Vin saisit l'ouverture : Elend n'attaquera pas. Elle offre à Yomen une alliance maintenant que Marsh l'a abandonné.",
			},
			'hoa-65': {
				title: 'Se libérer',
				description:
					"Vin bluffe Ruine depuis sa cellule, affirmant qu'elle et Elend connaissaient son plan depuis le début. Marsh l'attrape et exige l'emplacement de l'atium, mais elle refuse. Marsh ordonne à Yomen d'attaquer. Tandis que Marsh la secoue, Vin vole un flacon de métal à sa ceinture et l'ingère. Elle retire sa boucle d'oreille — la pointe hémalurgique que Ruine utilisait pour lui murmurer — et la pousse au duralumin dans le front de Marsh. Marsh se rétablit, grandit en utilisant la force féruchemique et l'étrangle. Vin puise dans les brumes et Pousse ses émotions, brisant le contrôle de Ruine. Marsh fuit. Vin atteint le champ de bataille et ordonne une retraite désespérée dans Fadrex, forgeant une alliance temporaire avec Yomen.",
			},
			'hoa-67': {
				title: "L'orage qui se prépare",
				description:
					"Vin se tient avec Elend et Yomen dans Fadrex tandis qu'une énorme armée koloss se rassemble devant les murs. Un gigantesque tremblement de terre secoue la ville. Incapable d'accéder aux brumes — sa boucle d'oreille toujours en place — Vin réfléchit à comment bluffer Ruine. Elle dit à Elend qu'elle doit atteindre la réserve d'atium.",
			},
			'hoa-67.2': {
				title: 'Départ pour Luthadel',
				description:
					"Vin quitte Fadrex volant vers l'est, attirant délibérément les Inquisiteurs loin d'Elend et de son armée. Elle parie qu'elle peut distancer un dieu, espérant forcer Ruine à se dévoiler.",
			},
			'hoa-72': {
				title: "La boucle d'oreille",
				description:
					"Vin atteint Luthadel avec une douzaine d'Inquisiteurs à sa poursuite. À Kredik Shaw, Ruine exige l'emplacement de l'atium. Elle refuse, et treize Inquisiteurs attaquent. Elle combat brillamment mais est finalement submergée. Ruine ordonne à Marsh de finir la torture. Marsh lui brise les bras, les jambes, les doigts un par un. Une petite partie de lui résiste. Il remarque sa boucle d'oreille, se souvient de l'avertissement de Spook — et sans réfléchir, l'arrache de son oreille. La voix de Ruine se coupe instantanément. Les brumes se précipitent dans Vin, guérissant ses blessures et l'emplissant de pouvoir.",
			},
			'hoa-73': {
				title: 'Ascension',
				description:
					"Alimentée par les brumes comme une réserve infinie de métal, Vin se retourne contre les douze Inquisiteurs restants. Elle les tue tous avec une facilité terrifiante — ses Poussées d'acier ordinaires portent désormais une force divine. Elle démolit Kredik Shaw d'une seule Poussée. Seul Marsh reste. Dans un moment de pitié, elle arrache une de ses pointes oculaires sans le tuer. Elle tousse une fois et disparaît, laissant Marsh vivant et Ruine rugissant dans son esprit.",
			},
			'hoa-76': {
				title: 'Bienvenue dans la divinité',
				description:
					"Vin flotte au-dessus de Luthadel, emplie du pouvoir de Préservation. Ruine la salue — un nuage de fumée noire mouvante — et lui souhaite ironiquement la bienvenue dans la divinité. Sa conscience s'étend pour voir la planète entière mourir. Elle essaie d'aider : elle bloque les Monts de Cendre et nettoie l'air, mais le soudain soleil surchauffe le monde. Chaque correction crée une nouvelle catastrophe. Ruine explique l'équilibre entre eux et révèle que Préservation a créé l'humanité intentionnellement déséquilibrée. Vin comprend : si Ruine trouve la partie cachée de son corps, l'équilibre se brise. Elle voit Elend se diriger vers Luthadel en contrebas.",
			},
			'hoa-79': {
				title: 'Suivre Ruine',
				description:
					"Vin perçoit un changement et suit Ruine aux Puits de Hathsin. Elle voit le camp de réfugiés et les kandra déplaçant l'atium, appréciant l'élaborate dissimulation du Seigneur Maître. Ruine prend le contrôle de KanPaar et exige l'emplacement de l'atium.",
			},
			'hoa-80': {
				title: 'La guidance du vent',
				description:
					"Vin, en tant que Préservation, observe les centaines de milliers de réfugiés rassemblés aux Puits de Hathsin. Elle murmure le nom d'Elend dans le vent, le guidant à travers le camp vers le Foyer kandra où Sazed se bat seul pour protéger l'atium. Ruine continue de la railler — mais elle ne peut pas répondre, seulement observer, guider et espérer.",
			},
			'hoa-81': {
				title: 'Regarder la bataille',
				description:
					"Vin regarde Elend prononcer son discours aux Voyants et les mener charger l'armée koloss. Elle essaie de lui dire de ne pas se battre — il ne peut pas l'entendre. Pendant des heures, elle le regarde brûler une fortune d'atium. Puis Marsh apparaît, brûlant aussi de l'atium, et Vin voit la force obscure de Ruine guider la hache de son frère. Elend brûle duralumin et atium ensemble dans un ultime éclair de perspicacité divine — et enfonce son épée dans le cou de Marsh tandis que la hache le frappe à la poitrine. Elend meurt en souriant.",
			},
			'hoa-81.2': {
				title: "L'attaque finale",
				description:
					"Ruine se vante sur le cadavre d'Elend. Mais Vin a vu l'homme qu'elle aime tout sacrifier — et elle ne laissera pas cela être en vain. Ignorant l'agonie d'utiliser le pouvoir de Préservation pour détruire, elle attaque Ruine directement. La force des opposés — Préservation frappant Ruine — est quelque chose qu'aucun Éclat n'était censé survivre. L'attaque tue à la fois Ati et Vin. Son corps tombe près de celui d'Elend dans la cendre.",
			},
			'hoa-83': {
				title: 'Le champ de la renaissance',
				description:
					"Le corps de Vin est trouvé dans un champ de fleurs et d'herbe verte — les premiers signes du monde refait par Sazed. Elle repose en paix aux côtés d'Elend.",
			},
		},
		sazed: {
			...enData.movements.sazed,
			// ── L'Empire ultime ────────────────────────────────────────────
			'tfe-9': {
				title: "L'intendant terrisien",
				description:
					"Sazed arrive au domaine de lord Renoux à Fellise comme tuteur et intendant de Vin, lui enseignant l'étiquette, la danse et les bonnes manières. Il lui parle du trélagisme — la cinquième religion qu'il lui propose — et admet en connaître 562 autres.",
			},
			'tfe-10.2': {
				title: "Le meeting de l'entrepôt",
				description:
					"Sazed assiste au meeting secret de l'entrepôt avec Kelsier et Vin, observant le Survivant prêcher la révolution aux travailleurs skaa.",
			},
			'tfe-12': {
				title: 'Gardien au bal',
				description:
					"Sazed accompagne Vin en tant qu'intendant à son premier bal à la Forteresse Venture, veillant sur elle tandis qu'elle s'infiltre dans la société noble.",
			},
			'tfe-13': {
				title: 'Débriefing à Fellise',
				description:
					'Sazed revient au domaine Renoux à Fellise avec Vin et Kelsier pour examiner les résultats du premier bal de Vin et planifier les prochaines étapes.',
			},
			'tfe-15': {
				title: 'Sauver Vin',
				description:
					"Sazed porte Vin à la boutique de Clubs pour la sauver et l'opérer après sa blessure à Kredik Shaw. Il examine aussi un livre écrit en khlennien récupéré lors de la mission de reconnaissance.",
			},
			'tfe-16': {
				title: 'Retour à Fellise',
				description:
					'Après avoir stabilisé Vin à la boutique de Clubs, Sazed retourne au domaine Renoux à Fellise.',
			},
			'tfe-17': {
				title: 'Traduire le livre khlennien',
				description:
					'Dans la bibliothèque du domaine Renoux à Fellise, Sazed travaille à traduire le livre écrit en khlennien que Vin a récupéré lors de la mission de reconnaissance à Kredik Shaw.',
			},
			'tfe-18': {
				title: 'Gardien à la Forteresse Elariel',
				description:
					"Sazed accompagne Vin en tant qu'intendant terrisien au bal de la Forteresse Elariel, veillant sur elle tandis qu'elle navigue la cour noble.",
			},
			'tfe-19': {
				title: "Échange d'informations",
				description:
					"Sazed est au manoir Renoux quand Kelsier revient par la Route des Épines. Ils échangent des informations sur les maisons nobles et le progrès de la rébellion, tandis que Kelsier sermonne Vin de rester loin d'Elend.",
			},
			'tfe-22': {
				title: 'Secrets de la féruchemie',
				description:
					'Au domaine Renoux, Sazed parle avec Vin du terrisien du journal du Seigneur Maître. Il révèle les secrets de la féruchemie et comment les Gardiens furent fondés pour tout préserver après la perte de la religion terrisienne. Il apprend aussi de nouvelles choses sur son peuple à travers le journal — que la terre était autrefois verte et fertile.',
			},
			'tfe-23': {
				title: 'Gardien à la Forteresse Hasting',
				description:
					"Sazed accompagne Vin en tant qu'intendant terrisien au bal de la Forteresse Hasting, attendant pendant qu'elle répand des rumeurs et parle avec les nobles.",
			},
			'tfe-27': {
				title: 'Le message de Marsh',
				description:
					'Sazed revient à la boutique de Clubs avec une lettre de Marsh contenant des nouvelles et des instructions pour un rendez-vous. Il apporte aussi des traductions du journal du Seigneur Maître.',
			},
			'tfe-28': {
				title: 'Gardien à la Forteresse Lekal',
				description:
					"Sazed accompagne Vin en tant qu'intendant terrisien au bal de la Forteresse Lekal, attendant pendant qu'elle travaille à allumer les guerres des maisons et parle avec Elend.",
			},
			'tfe-29': {
				title: 'Leçons de féruchemie',
				description:
					"Au domaine Renoux, Sazed remet à Vin les dernières traductions du journal. Il explique la féruchemie plus en détail et Vin essaie de brûler un de ses esprits d'étain. Plus tard, Sazed rejoint l'équipe quand Kelsier examine une carte détaillée de Marsh. Ce soir-là, incapable de dormir, Kelsier demande à Sazed de lui raconter des religions.",
			},
			'tfe-30': {
				title: 'Gardien à la Forteresse Venture',
				description:
					"Sazed accompagne Vin au dernier bal des maisons à la Forteresse Venture. Les invités scellent des alliances et lady Valette reçoit un accueil froid. Sazed quitte le bal avant que Vin ne découvre le complot d'assassinat contre Elend et ne combatte Shan Elariel.",
			},
			'tfe-31': {
				title: 'Soigner les blessures de Vin',
				description:
					"Sazed soigne les blessures de Vin à la boutique de Clubs après qu'elle soit arrivée mal en point de son combat contre Shan Elariel et les assassins Elariel. Il écoute tandis que Vin raconte les événements de la soirée.",
			},
			'tfe-33': {
				title: "Le refuge d'urgence",
				description:
					"Sazed est avec l'équipe dans le refuge de secours près de la boutique de Clubs, après que Kelsier a détruit les Puits de Hathsin. Vin parle avec Sazed du Onzième Métal. Quand des skaa sont amenés pour être exécutés à la Place de la Fontaine et que Spook apparaît dans un chariot de prisonniers, Sazed reste au refuge tandis que Kelsier combat l'Inquisiteur.",
			},
			'tfe-35': {
				title: 'Consoler Vin',
				description:
					"Sazed est avec Vin dans le refuge de secours après la mort de Kelsier. Il offre des paroles de réconfort tandis que Vin rage que Kelsier l'a abandonnée. Il reste en arrière quand l'équipe va à l'entrepôt voir le kandra sous la forme de Kelsier.",
			},
			'tfe-37': {
				title: 'Le féruchemiste déchaîné',
				description:
					'Sazed est amené dans la cellule de Vin à Kredik Shaw. Il semble se dégonfler, puis ses muscles enflent au double de leur taille en libérant la force féruchemique stockée, enfonçant la porte.',
			},
			'tfe-38': {
				title: "La chute de l'Empire",
				description:
					'Sazed apparaît lors de la confrontation finale à Kredik Shaw avec un flacon de métaux pour Vin. Il assiste à la chute du Seigneur Maître quand Vin arrache ses bracelets et que son âge augmente dramatiquement.',
			},
			'tfe-39': {
				title: 'Comprendre le tyran',
				description:
					"Sazed se tient avec Vin et Marsh sur un bâtiment près du quartier skaa. Il explique que le Seigneur Maître était à la fois féruchemiste et allomancien. Il suppose que c'est pour cela que tous les intendants terrisiens devaient être des eunuques.",
			},
			'woa-4': {
				title: "L'enseignant itinérant",
				description:
					'Sazed parcourt le Domination Orientale, visitant les villages ruraux pour partager les religions et connaissances supprimées avec les skaa nouvellement libérés.',
			},
			'woa-7': {
				title: 'Marsh revient',
				description:
					"Sazed continue d'enseigner les religions supprimées aux skaa libérés. Marsh apparaît au village, errant seul depuis la chute du Seigneur Maître, et propose de guider Sazed vers un lieu de réponses — le Conventicule de Seran.",
			},
			'woa-9': {
				title: 'Voyage au Conventicule',
				description:
					'Sazed et Marsh traversent la désolée Domination Orientale vers le Conventicule de Seran. Marsh devient de plus en plus distant et étrange durant le voyage, troublant Sazed.',
			},
			'woa-12': {
				title: 'Déchiffrer la plaque',
				description:
					"Sazed étudie l'inscription de Kwaan au Conventicule, découvrant l'avertissement désespéré du Gardien terrisien selon lequel la prophétie du Héros des Siècles a été altérée.",
			},
			'woa-15': {
				title: 'Les morts des brumes',
				description:
					"Revenant vers l'ouest par Urbene, Sazed rencontre des villages où les gens sont morts mystérieusement dans les brumes — les premiers signes de la maladie des brumes.",
			},
			'woa-19': {
				title: "L'armée koloss",
				description:
					"Après avoir brûlé sa menté d'acier pour accélérer son voyage, Sazed rencontre une armée koloss de vingt mille dans la Domination Centrale. Il est capturé et amené devant Jastes Lekal, qui veut Sazed comme intendant. Sazed refuse mais porte l'offre d'alliance de Jastes vers Luthadel.",
			},
			'woa-22': {
				title: 'Retour à Luthadel',
				description:
					"Sazed arrive à Luthadel porteur de graves nouvelles sur la prophétie altérée, les morts des brumes et la véritable signification de l'inscription d'acier.",
			},
			'woa-23': {
				title: 'La troisième armée',
				description:
					"Sazed informe Elend et l'équipe des vingt mille koloss sous Jastes Lekal. Il avertit que les brumes tuent et décide de rester à Luthadel pour enquêter. Ensuite, il rencontre Tindwyl dans ses quartiers et ils partagent un moment personnel.",
			},
			'woa-30': {
				title: 'Transcrire les frottages',
				description:
					"Sazed transcrit les frottages qu'il a pris au Conventicule, réalisant que le travail pourrait prendre des années. Vin entre par sa fenêtre et propose que les brumes sont la Profondeur. Elle lui dit qu'elle a vu la même créature qui suivait le Héros des Siècles.",
			},
			'woa-36': {
				title: 'Refuge dans les entrepôts',
				description:
					"Sazed offre du réconfort aux réfugiés nouvellement arrivés hébergés dans un entrepôt d'armes. Tindwyl demande à voir son frottage du Conventicule. Breeze apaise tout le monde — les réfugiés, Sazed et Tindwyl — utilisant son allomancie pour soulager leur souffrance.",
			},
			'woa-37': {
				title: 'Le débat de la Profondeur',
				description:
					'Sazed et Tindwyl étudient un fragment de la biographie du roi Wednegon. Sazed croit que la Profondeur est un changement dans les brumes. Ils débattent de ses théories. Tindwyl exprime son désir pour Sazed, et il lui demande de rester — elle accepte.',
			},
			'woa-40': {
				title: 'Débattre de la prophétie',
				description:
					'Sazed travaille avec Tindwyl à la Forteresse Venture, comparant les versions originales et altérées de la prophétie du Héros des Siècles, se rapprochant delle.',
			},
			'woa-41': {
				title: 'La prophétie altérée',
				description:
					"Sazed et Tindwyl débattent de la plaque du Conventicule et du journal d'Alendi. Ils réalisent que beaucoup mourront quand Luthadel tombera. Elend leur rend visite cherchant conseil, et ils l'applaudissent de maintenir ses convictions.",
			},
			'woa-45': {
				title: 'Coins déchirés',
				description:
					"Tindwyl découvre plusieurs copies de transcriptions avec leurs coins mystérieusement déchirés — la même phrase détruite dans chacune. Vin demande conseil à Sazed sur l'amour, et peu après Elend cherche un conseil similaire. Sazed résout de s'assurer qu'ils ne soient pas à Luthadel quand elle tombera.",
			},
			'woa-46': {
				title: "Le plan d'évasion",
				description:
					"Sazed réunit secrètement Breeze, Clubs, Hammond et Dockson pour discuter de la probabilité que Straff se retire et que les koloss attaquent sans opposition. Ils acceptent de rester défendre la ville mais prévoient d'envoyer Elend, Vin, Spook et Tindwyl loin avant la bataille.",
			},
			'woa-49': {
				title: 'Les regarder partir',
				description:
					"Du haut du rempart, Sazed regarde avec Breeze, Demoux, Hammond et Clubs le groupe d'Elend échapper à l'armée de Straff et chevaucher vers le nord. Il dit à Breeze que Tindwyl a choisi de rester, et remarque une grande colonne de fumée s'élevant du camp koloss.",
			},
			'woa-50': {
				title: 'Se préparer au pire',
				description:
					"Sazed remplit ses mentemétaux en préparation d'une attaque koloss et apprend de Clubs que l'armée de Straff s'est retirée. Lui et Tindwyl se disputent au sujet de l'envoi d'Elend et Vin, puis s'embrassent avant qu'une alarme ne sonne.",
			},
			'woa-51': {
				title: "L'attaque koloss commence",
				description:
					"Les koloss se sont livrés à une énorme bagarre, élevant leur rage jusqu'à se retourner contre la ville. Sazed observe le début de l'assaut depuis son poste sur le rempart au-dessus de la Porte d'Acier.",
			},
			'woa-52': {
				title: 'Le Saint Premier Témoin',
				description:
					"Sazed défend la Porte d'Acier. Une foule de skaa refuse de fuir, l'appelant le Saint Premier Témoin. Quand les koloss percent, Sazed puise dans sa mentemétal d'étain, tue un koloss géant d'un seul coup de poing et mène les soldats au combat.",
			},
			'woa-53': {
				title: "Tenir la Porte d'Acier",
				description:
					"Sazed combat à la Porte d'Acier, dégageant suffisamment de koloss pour la refermer. Le répit est bref — sa mentemétal de fer s'épuise, les koloss percent à nouveau, et il apprend que la Porte d'Étain, où commandait Tindwyl, est tombée.",
			},
			'woa-54': {
				title: 'Chercher Tindwyl',
				description:
					"Après des heures de recherche, Sazed localise le corps de Tindwyl et la pleure — incapable de choisir un rite religieux pour elle, puisqu'il ne croit en aucune des fois qu'il a étudiées.",
			},
			'woa-55': {
				title: 'Laissé aux commandes',
				description:
					"Sazed observe les koloss contrôlés par Vin et l'armée de Cett écraser les forces de Straff. Vin force Penrod, Cett et Janarle à accepter Elend comme Empereur, puis laisse Sazed aux commandes de la ville.",
			},
			'woa-57': {
				title: 'Combattre Marsh',
				description:
					"Sazed réalise qu'il est le « Saint Premier Témoin ». L'esprit des brumes le pousse vers Kredik Shaw, où il trouve Marsh — qui dit souhaiter savoir pourquoi il doit le tuer avant de le projeter contre le mur.",
			},
			'woa-58': {
				title: "Survivre à l'Inquisiteur",
				description:
					"Marsh brise des côtes et un bras de Sazed et lui enfonce des anneaux métalliques dans la chair — mais Sazed puise dans ces mêmes mentemétaux pour guérir et se battre. Ses réserves s'épuisent et Marsh prend l'avantage, jusqu'à ce que Hammond frappe le crâne de l'Inquisiteur avec une canne de duel. Sazed et Hammond se précipitent vers Vin.",
			},
			'woa-59': {
				title: 'Trop tard au Puits',
				description:
					"Sazed arrive au Puits de l'Ascension juste trop tard pour empêcher Vin de prendre et de libérer le pouvoir. Pleurant Tindwyl, il reste à questionner chaque religion qu'il porte.",
			},
			'woa-60': {
				title: 'Perte de toute foi',
				description:
					"Sazed retourne au Conventicule de Seran et découvre que l'inscription ne correspond pas à son frottage. La véritable inscription avertit qu'Alendi ne doit pas atteindre le Puits. Une force malveillante a altéré les prophéties. Sazed comprend le désastre que Vin a déclenché et perd toute foi en chaque religion qu'il a rassemblée.",
			},
			'hoa-4': {
				title: 'Diplomatie méridionale',
				description:
					"Sazed visite la Cité Lekal avec Breeze pour négocier un traité, utilisant la diplomatie pour intégrer le roi du sud dans la coalition grandissante d'Elend.",
			},
			'hoa-8': {
				title: "En route pour l'armée",
				description:
					"Ayant obtenu le traité avec le roi Audil Lekal, Sazed voyage avec Breeze pour rejoindre l'armée de Vin et Elend.",
			},
			'hoa-10': {
				title: "Rejoindre l'armée",
				description:
					"Sazed, Breeze, Goradel et Allrianne rattrapent l'armée d'Elend en marche vers Fadrex. Sazed partage sa crise de foi avec Vin, qui lui donne le dessin de la fleur de Mare.",
			},
			'hoa-12': {
				title: 'La réunion du conseil',
				description:
					"Sazed assiste au conseil de guerre d'Elend. Ils débattent des brumes envahissantes et des plans pour capturer les réserves. Elend demande « Que ferait Kelsier ? » pour unir l'équipe.",
			},
			'hoa-18': {
				title: 'Voyage vers le nord',
				description:
					'Sazed, Breeze, Allrianne et le capitaine Goradel voyagent vers le nord en direction dUrteau. Sazed poursuit sa quête dune religion à laquelle croire.',
			},
			'hoa-18.2': {
				title: 'Parmi les Terrisiens',
				description:
					"En route vers Urteau, Sazed s'arrête aux Puits de Hathsin où les Terrisiens se sont réinstallés. Il est chaleureusement accueilli par son peuple et rencontre les anciens terrisiens, les conseillant mais refusant d'être leur chef, s'estimant indigne.",
			},
			'hoa-22': {
				title: "L'anomalie terrisienne",
				description:
					"Sazed découvre un fait crucial : pas un seul Terrisien n'a été frappé par la maladie des brumes — un motif qu'il classe parmi ses doutes croissants.",
			},
			'hoa-25': {
				title: 'Quitter les Terrisiens',
				description:
					"Sazed quitte les Puits de Hathsin, poursuivant son voyage vers le nord. Il porte avec lui le fait troublant qu'aucun Terrisien n'est tombé de la maladie des brumes.",
			},
			'hoa-29': {
				title: 'Convoqué par le Citoyen',
				description:
					"Sazed, Breeze, Allrianne et leur garde d'honneur arrivent à Urteau et sont immédiatement convoqués devant Quellion. Le Citoyen est antagoniste, rejetant l'offre d'alliance de Sazed contre les brumes meurtrières.",
			},
			'hoa-29.2': {
				title: 'Le lac souterrain',
				description:
					"Spook guide Sazed, Breeze, Allrianne et Goradel au bâtiment du Canton d'Inquisition abandonné comme nouvelle base. En dessous, Spook révèle la réserve de provisions du Seigneur Maître — et le lac souterrain caché, expliquant pourquoi les canaux sont secs depuis cent ans.",
			},
			'hoa-31': {
				title: 'Le détournement des eaux',
				description:
					"Sazed, Spook et Breeze discutent de la logique du détournement de l'eau d'Urteau vers le lac souterrain. Ils débattent de comment déposer Quellion sans créer un remplacement pire.",
			},
			'hoa-38': {
				title: 'Le Survivant des Flammes',
				description:
					'Sazed et Breeze observent comment les skaa marchent maintenant librement dans les brumes. Les habitants parlent du Survivant des Flammes. Sazed ne réalise pas encore que le héros dont la ville murmure est Spook.',
			},
			'hoa-41': {
				title: 'Le Survivant révélé',
				description:
					"Sazed assiste à une exécution — un bâtiment en feu, puis une figure jaillit des flammes portant une petite fille. Pour la première fois, Sazed voit le Survivant des Flammes de ses propres yeux et réalise que le héros qu'Urteau vénère est Spook.",
			},
			'hoa-46': {
				title: 'Trellisme et confiance',
				description:
					"Sazed attend le retour de Spook, révisant le trellisme et sentant que sa quête de foi est vaine. Spook revient et demande à Sazed de faire couler l'eau à nouveau dans les canaux, ne demandant que sa confiance.",
			},
			'hoa-49': {
				title: "L'ingénierie des canaux",
				description:
					"Poussé par la demande de Spook, Sazed retire un livre d'ingénierie de ses mentemétaux et commence à rechercher comment remplir les canaux secs d'Urteau. Breeze est secrètement heureux de voir Sazed s'intéresser à nouveau à son érudition. Beldre supplie qu'on ne tue pas son frère. Ils décident de la retenir en otage.",
			},
			'hoa-53': {
				title: 'Voir Spook diriger',
				description:
					"Sazed écoute Spook parler à Beldre de sa vie dans l'équipe de Kelsier. Quand Spook part rallier la ville, Sazed reste, regardant celui qui parlait autrefois en argot des rues devenir quelque chose de plus.",
			},
			'hoa-56': {
				title: 'Le besoin de foi',
				description:
					"Spook dit à Sazed qu'il a foi que même s'il échoue, quelqu'un veille et arrangera les choses. Sazed réalise que ce qui lui a manqué tout ce temps n'est pas une religion parfaite, mais simplement la capacité de croire à nouveau en quelque chose.",
			},
			'hoa-50': {
				title: 'La découverte de la caverne',
				description:
					"Sazed découvre le mécanisme pour inonder le système de canaux secs — le Seigneur Maître avait drainé les canaux pour cacher l'eau dans la caverne de stockage en dessous.",
			},
			'hoa-58': {
				title: 'Sauver Urteau',
				description:
					"Sazed instruit Spook sur le mécanisme de détournement d'eau. Il observe la confrontation : Beldre révélée comme Fille-de-brumes, Spook arrachant des pointes de Quellion et de lui-même. Spook se jette dans le bâtiment en feu. L'eau coule dans les canaux, éteignant les flammes et sauvant Urteau.",
			},
			'hoa-59': {
				title: "Le fardeau de l'Annonciateur",
				description:
					'TenSoon arrive à Urteau et trouve Breeze et Sazed. Il doit atteindre Vin car cela concerne le Héros des Siècles et la fin du monde. Sazed reçoit la nouvelle avec une indifférence creuse — le Gardien a perdu toute foi.',
			},
			'hoa-62': {
				title: "L'Annonciateur",
				description:
					"Sazed veille Spook à l'hôpital. TenSoon révèle la vérité : les compagnons de Rashek furent transformés en kandra. Ils sont la Première Génération. La foi terrisienne vit encore. Sazed se prépare à trouver le Foyer kandra.",
			},
			'hoa-66': {
				title: 'Chevaucher vers le Foyer',
				description:
					"Sazed chevauche vers le sud sur TenSoon, qui a pris la forme d'un cheval. TenSoon raconte l'histoire des kandra, le Premier Contrat, et sa conviction que Vin mènera une armée d'allomanciens au Foyer.",
			},
			'hoa-68': {
				title: 'Le Porte-Mondes',
				description:
					"Sazed est escorté à travers les tunnels kandra. Il se proclame l'Annonciateur devant la Seconde Génération. La Première Génération apparaît et l'appelle Porte-Mondes.",
			},
			'hoa-71': {
				title: 'La Confiance',
				description:
					"Sazed et la Première Génération examinent les altérations de Ruine. Sazed découvre la Confiance : une énorme réserve d'atium cachée par les kandra pendant des siècles.",
			},
			'hoa-75': {
				title: 'La Résolution',
				description:
					"Sazed apprend la religion kandra. Il réalise que la foi est enracinée dans la perception, pas dans les règles. KanPaar mène un coup d'État. Sazed est enfermé tandis que les kandra sombrent dans la guerre civile.",
			},
			'hoa-78': {
				title: 'Sauvé par TenSoon',
				description:
					'TenSoon sauve Sazed et la Première Génération durant la guerre civile kandra. Les Premiers régénèrent leurs corps — les plus anciens kandra retrouvent leur pleine puissance.',
			},
			'hoa-79': {
				title: 'La Résolution commence',
				description:
					"TenSoon attaque Sazed — Ruine a pris le contrôle des kandra par leurs Bénédictions. TenSoon résiste vainement tout en étranglant Sazed jusqu'à l'inconscience.",
			},
			'hoa-80': {
				title: 'La Confiance défendue',
				description:
					"Sazed bloque l'entrée de la Chambre de la Confiance contre les kandra renégats. Elend Venture entre dans la chambre et soumet les kandra.",
			},
			'hoa-81': {
				title: "Le corps d'un dieu",
				description:
					"Sazed révèle la vérité : l'atium est le corps de Ruine. Les soldats tombés des brumes sont tous des Voyants. Sazed ravitaille les soldats tandis qu'il observe la bataille finale, croyant d'une foi qu'il pensait avoir perdue à jamais.",
			},
			'hoa-82': {
				title: 'Le Héros des Siècles',
				description:
					"Sazed voit les corps de Vin et Ati près du cadavre d'Elend. Il prend à la fois Préservation et Ruine, et puise dans la connaissance de toutes ses mentemétaux pour restaurer le monde, devenant Harmonie.",
			},
			'hoa-83': {
				title: 'Harmonie',
				description:
					"Sazed s'élève comme Harmonie, combinant Ruine et Préservation. Il refait le monde — déplaçant la planète, restaurant la verdure, et guérissant mille ans de dégâts.",
			},
		},
		elend: {
			...enData.movements.elend,
			// ── L'Empire ultime ────────────────────────────────────────────
			'tfe-12': {
				title: 'Le noble lecteur',
				description:
					"Elend Venture remarque Vin seule sur un balcon lors d'un bal dans sa propre forteresse et s'approche. Il l'agace en sortant Épreuves du monument et en commençant à lire tandis que le reste de la noblesse danse et intrigue autour d'eux.",
			},
			'tfe-18': {
				title: 'Une soirée avec Valette',
				description:
					"Elend assiste au bal de la Forteresse Elariel, où il s'assoit à la table avec Vin et lit, comme d'habitude. Il complimente sa robe, la laissant bouche bée.",
			},
			'tfe-23': {
				title: 'Le mouchoir',
				description:
					"Elend trouve Vin au bal de la Forteresse Hasting. Elle lui demande s'il a couché avec une skaa. Il confesse que son père l'y a obligé à treize ans et que la femme a été tuée ensuite, mais qu'il ne l'a plus jamais fait. Il donne un mouchoir à Vin, signifiant son désir de la courtiser. Après être parti avec ses amis, ils montent dans une tour pour discuter des défaillances du Seigneur Maître.",
			},
			'tfe-28': {
				title: 'Bal à la Forteresse Lekal',
				description:
					"Elend surprend Vin au bal de la Forteresse Lekal. Il dit vouloir l'embrasser, mais Vin insiste qu'il ne la connaît pas vraiment. Ils se promènent et Elend révèle que la fortune des Venture provient entièrement de l'extraction d'atium aux Puits de Hathsin — lui faisant entièrement confiance. Il mentionne que les Tekiel ont été tués par la Maison Hasting et tente de convaincre Valette de quitter Luthadel.",
			},
			'tfe-28.2': {
				title: "L'appel du père",
				description:
					"Elend retourne à la Forteresse Venture et tente de passer discrètement devant la chambre de son père. Lord Straff Venture, un brumeux d'étain qui ne laisse rien passer, l'appelle. Straff lui ordonne de dîner le lendemain avec la Maison Hasting et une de leurs filles. Plus tard, Jastes arrive et révèle qu'il a fait suivre l'attelage de lady Valette — elle est arrivée à Fellise avec seulement le terrisien, Valette avait disparu. Elend, réalisant qu'il a révélé le secret de l'atium, propose un marché à son père : il ira au déjeuner en échange d'espions pour surveiller Valette.",
			},
			'tfe-30': {
				title: 'Le bal Venture',
				description:
					"Elend dîne avec son père à la Forteresse Venture pendant le bal. Vin attire son attention et ils ont une confrontation. Elend dit des choses blessantes ; cependant, quand Vin apprend qu'il y aura une tentative d'assassinat contre Elend ce soir-là, elle court dans les brumes chercher les assassins. La soirée se termine dans le chaos quand Vin combat et tue lady Shan Elariel. Dans la confusion, Elend parvient à s'éclipser.",
			},
			'tfe-31': {
				title: "Les rapports d'espionnage",
				description:
					"Elend et Jastes rencontrent Felt, qui relate tout ce que les espions d'Elend ont découvert sur la boutique de Clubs et ses occupants. Après le départ de Felt et Jastes, les gardes Venture amènent Elend devant son père Straff, qui révèle que Shan Elariel était une Fils-des-brumes envoyée pour assassiner Elend. Elend sait désormais qu'une bande de voleurs skaa opère près de la Forteresse Venture — et que Valette est liée à eux.",
			},
			'tfe-33': {
				title: "Les chariots d'exécution",
				description:
					"Elend voit les serviteurs de Renoux emprisonnés dans un chariot d'exécution à la Place de la Fontaine. Il appelle Valette à grands cris, sans la trouver dans la foule.",
			},
			'tfe-34': {
				title: 'Kelsier sauve Elend',
				description:
					"Elend arrive à la cage de Renoux à la Place de la Fontaine et demande Valette. Un Inquisiteur atterrit sur la cage et s'apprête à frapper Elend avec sa hache quand Kelsier attaque l'Inquisiteur, lui sauvant la vie. Kelsier crie à Elend que Valette va bien et les gardes du corps l'entraînent.",
			},
			'tfe-36': {
				title: 'Autorité de la Maison Venture',
				description:
					"Le père d'Elend l'informe qu'une rébellion skaa a éclaté et veut fuir Luthadel. Elend refuse de partir. Straff accepte, espérant qu'Elend mourra, et lui transfère l'autorité de la Maison Venture. Elend ordonne à ses soldats de se rendre à la Forteresse Lekal pour une défense mutuelle, puis prend ses cinq meilleurs soldats et va se présenter aux dirigeants skaa.",
			},
			'tfe-37': {
				title: 'Sauver Vin',
				description:
					"Elend offre de l'or à des skaa pour être conduit à Dockson et leur dit que la Maison Venture ne résistera pas à la rébellion — ils devraient coopérer. Ensuite, Elend et six soldats font irruption dans Kredik Shaw pour sauver Vin. Le secret est découvert — il sait qu'elle est Fils-des-brumes. Vin lui prend la tête et l'embrasse, puis part tuer le Seigneur Maître.",
			},
			'tfe-38': {
				title: 'Le roi philosophe',
				description:
					"Après la mort du Seigneur Maître, Elend émerge comme une voix unificatrice réclamant l'ordre. Il commence à se réunir avec des dirigeants skaa et nobles pour rédiger un code de lois pour la nouvelle nation.",
			},
			'tfe-39': {
				title: 'Le nouveau roi',
				description:
					"Elend Venture est accepté comme roi de la Dominance Centrale après un formidable discours. Il rédige le nouveau code de lois du royaume. Vin l'observe secrètement depuis les brumes avant de courir vers lui — ils s'étreignent.",
			},
			'woa-1': {
				title: 'Roi sur les remparts',
				description:
					'Elend se tient sur les remparts de Luthadel regardant cinquante mille soldats sous son père Straff Venture arriver et installer leur camp. Le siège de Luthadel a commencé.',
			},
			'woa-3': {
				title: 'Rédiger la loi',
				description:
					"Elend travaille dans son bureau à la Forteresse Venture, rédigeant des propositions pour l'Assemblée. Vin le rejoint après sa rencontre avec l'esprit des brumes, et Ham arrive avec des renseignements suggérant que le roi Cett a envoyé les assassins allomanciens.",
			},
			'woa-5': {
				title: 'Le roi érudit',
				description:
					"Elend travaille dans son bureau avec Dockson, gérant la logistique d'une ville assiégée. Vin le rejoint après avoir acquis le nouveau corps de chien-loup d'OreSeur.",
			},
			'woa-6': {
				title: 'Observer du balcon',
				description:
					"Elend regarde Vin s'entraîner avec Ham dans la cour de la Forteresse Venture. Il perd un pari avec Clubs sur le résultat et réfléchit aux forces de son équipe.",
			},
			'woa-10': {
				title: "L'Assemblée",
				description:
					"Elend s'adresse à l'Assemblée qu'il a créée, défendant les principes démocratiques. Une Terrisienne nommée Tindwyl observe. La session est interrompue par la nouvelle qu'une deuxième armée est arrivée.",
			},
			'woa-11': {
				title: 'Inspecter le siège',
				description:
					"Elend observe depuis les remparts avec Clubs et Vin l'armée de Cett à l'ouest et les forces de Straff au nord. Breeze est en danger et Vin le sauve avec une Poussée d'acier au duralumin.",
			},
			'woa-13': {
				title: 'Conseil de guerre',
				description:
					"Elend réunit la vieille équipe pour un conseil de guerre sur le double siège. Ensuite, Tindwyl s'approche et propose — avec force — de lui enseigner l'art de régner.",
			},
			'woa-14': {
				title: "L'éducation d'un roi",
				description:
					"Tindwyl commence sa formation énergique d'Elend à la Forteresse Venture, réformant sa garde-robe, sa posture et son allure. Elle insiste qu'un roi doit ressembler et agir comme tel pour garder le pouvoir.",
			},
			'woa-16': {
				title: "La transformation d'un roi",
				description:
					"Elend se tient au sommet des remparts observant les armées assiégeantes. Tindwyl l'envoie chercher, lui coupe les cheveux, lui donne un uniforme militaire et une couronne — transformant le philosophe en roi guerrier.",
			},
			'woa-17': {
				title: 'Le messager de Straff',
				description:
					"Elend, Vin et OreSeur vont rencontrer un messager de Straff Venture qui s'avère être Zane. Zane déclare que Straff tiendra une réunion dans son camp. Elend dit qu'il considérera l'offre.",
			},
			'woa-20': {
				title: 'Planifier la négociation',
				description:
					"Elend discute de son plan pour négocier avec Straff. Il compte jouer Straff et Cett l'un contre l'autre. Allrianne, la fille de lord Cett, arrive cherchant asile.",
			},
			'woa-21': {
				title: "L'asile d'Allrianne",
				description:
					"Allrianne Cett arrive au palais et embrasse Breeze à la surprise de tous. Elend lui offre l'hospitalité tandis que l'équipe débat de l'utiliser comme monnaie d'échange.",
			},
			'woa-22': {
				title: 'Lutter pour la démocratie',
				description:
					"Elend fait face à une opposition croissante à l'Assemblée tandis que la peur du siège pousse beaucoup à chercher un dirigeant plus fort qu'un roi-philosophe.",
			},
			'woa-23': {
				title: "L'avertissement de Sazed",
				description:
					"Sazed revient signaler vingt mille koloss sous Jastes Lekal approchant de Luthadel. L'équipe débat de plans de contingence. Sazed avertit que les brumes elles-mêmes peuvent représenter un grave danger.",
			},
			'woa-25': {
				title: "L'attaque feinte",
				description:
					"Straff lance une attaque feinte contre les remparts de Luthadel pour tester les défenses. Les soldats d'Elend sont mal préparés, mais l'attaque est rapidement annulée.",
			},
			'woa-26': {
				title: 'Négocier avec le père',
				description:
					"Elend chevauche jusqu'au camp de Straff Venture pour négocier, emmenant Vin comme protectrice. La rencontre révèle le mépris de Straff pour son fils idéaliste.",
			},
			'woa-27': {
				title: 'Déjouer Straff',
				description:
					"Straff ordonne à ses soldats de tuer Elend durant la négociation, mais Elend bluffe que Vin détruira le camp s'il meurt. Straff les laisse partir. Sur le retour, Elend reçoit une note dévastatrice : l'Assemblée a voté la défiance et il n'est plus roi.",
			},
			'woa-28': {
				title: 'Tramer la diplomatie',
				description:
					'De retour à la Forteresse Venture, Elend tente de jouer les trois armées les unes contre les autres — Straff, Cett et la horde koloss qui approche.',
			},
			'woa-31': {
				title: 'Chancelier Penrod',
				description:
					"Elend arrive à l'Assemblée avec toute son équipe. Il nomme lord Penrod comme Chancelier et s'adresse à l'Assemblée, invoquant la réputation de Vin comme dissuasion. Les nominations pour un nouveau roi sont ouvertes : Penrod, Elend et lord Cett.",
			},
			'woa-32': {
				title: 'Le gambit de Cett',
				description:
					"Lord Cett s'adresse à l'Assemblée, arguant que son armée et celle d'Elend combinées peuvent tenir. L'Assemblée accorde à Cett une forteresse abandonnée et mille soldats. Son fils invite Elend à négocier dans une semaine.",
			},
			'woa-33': {
				title: 'Le puits empoisonné',
				description:
					"Elend enquête sur un cas de maladie massive et découvre qu'un des puits de la ville a été empoisonné. Il envoie les soldats de Hammond aider les malades et commence à chercher le saboteur.",
			},
			'woa-34': {
				title: 'Recherche et stratégie',
				description:
					"Elend travaille dans la bibliothèque de la Forteresse Venture avec Hammond, Sazed, Tindwyl et Noorden, planifiant la stratégie pour l'Assemblée. Sazed lui conseille de se concentrer sur ses propres convictions.",
			},
			'woa-35': {
				title: 'Dîner avec Cett',
				description:
					"Elend et Vin vont dîner avec lord Cett à la Forteresse Hasting. Ils discutent de la défection de Breeze, des plans de Cett pour Luthadel et de la réserve d'atium disparue. Cett offre de la nourriture contre l'atium mais Elend dit qu'elle n'a pas été trouvée.",
			},
			'woa-37': {
				title: 'Patrouiller le rempart',
				description:
					"Elend et Hammond patrouillent le rempart, discutant du désir d'Elend de rester roi pour protéger le peuple de Luthadel. Elend a une idée pour obtenir assez de votes.",
			},
			'woa-38': {
				title: 'Destitué',
				description:
					"Elend assiste à l'Assemblée pour l'élection du roi, ayant rejoint l'Église du Survivant. Des assassins attaquent — Vin les combat mais est grièvement blessée. L'Assemblée se réunit de nouveau et élit Penrod roi. Elend concède.",
			},
			'woa-40': {
				title: 'Au chevet de Vin',
				description:
					"Elend s'assied près du lit d'hôpital de Vin, lui disant que Penrod est le nouveau roi. Il tressaille involontairement quand elle le touche, secoué par la férocité de ses meurtres.",
			},
			'woa-41': {
				title: 'Chercher conseil',
				description:
					"Elend rend visite à Sazed et Tindwyl, réfléchissant à ses échecs à protéger Luthadel. Ils débattent de pourquoi il a perdu son trône, mais tous deux l'applaudissent d'avoir maintenu ses idéaux.",
			},
			'woa-42': {
				title: 'Mission chez les koloss',
				description:
					"Elend et Hammond quittent Luthadel. Elend trouve l'armée koloss de Jastes Lekal et exige son retrait, mais Jastes insiste qu'il a le contrôle. Elend poignarde Jastes et l'utilise comme otage pour s'échapper, puis tue un koloss et découvre qu'ils portent de la monnaie.",
			},
			'woa-44': {
				title: 'Trouver Vin',
				description:
					"Elend, Hammond et Spook discutent de l'attaque de Vin contre Cett. OreSeur guide Elend jusqu'à Vin dans l'ancien repaire de Camon, où elle parle de quitter Luthadel pour Terris.",
			},
			'woa-46': {
				title: 'Retour des koloss',
				description:
					"Elend revient du camp koloss ayant échoué à négocier — Jastes a perdu le contrôle de ses bêtes. Les koloss attaqueront quoi qu'il arrive.",
			},
			'woa-49': {
				title: "Départ par la Porte d'Étain",
				description:
					"Alors qu'Elend se prépare à partir pour le Puits, Tindwyl le réprimande pour abandonner son peuple. Avec Spook et Allrianne, le groupe d'Elend sort par la Porte d'Étain, échappant à l'armée de Straff avec l'aide de Vin.",
			},
			'woa-50': {
				title: 'Le voyage au nord',
				description:
					"Elend, Vin et Spook lèvent le camp à un jour au nord de Luthadel. Spook sent quelque chose les suivre, et Vin l'identifie comme l'esprit des brumes.",
			},
			'woa-51': {
				title: 'Exécuter Jastes',
				description:
					"Les cinq hommes qui suivaient le groupe sont Jastes Lekal, qui a abandonné les koloss. Furieux, Elend exécute son vieil ami. Quand Spook révèle que Sazed les a trompés pour qu'ils partent, le groupe décide de revenir.",
			},
			'woa-52': {
				title: 'Faire demi-tour',
				description:
					"Tandis que Vin fonce en avant, Elend et Spook chevauchent dur vers Luthadel, incapables d'égaler sa vitesse allomantique mais déterminés à atteindre la ville assiégée.",
			},
			'woa-56': {
				title: 'Réfugiés de Tathingdwen',
				description:
					"Sur la route, Elend rencontre l'esprit des brumes. Lui et Spook trouvent un groupe de réfugiés terrisiens fuyant Tathingdwen. Elend les accompagne vers Luthadel.",
			},
			'woa-57': {
				title: "Le retour de l'Empereur",
				description:
					"Elend, Hammond et Spook entrent dans Luthadel parmi une foule de réfugiés et retrouvent Vin, qui lui dit qu'il est maintenant Empereur. Il la suit vers Kredik Shaw.",
			},
			'woa-58': {
				title: 'Au Puits',
				description:
					"Elend descend avec Vin, Hammond et Spook dans les cavernes sous Kredik Shaw, trouvant une réserve et une carte métallique de l'Empire Ultime. Au Puits resplendissant, il ramasse une petite bille de métal — puis l'esprit des brumes le poignarde au ventre.",
			},
			'woa-59': {
				title: "L'Empereur Fils-des-brumes",
				description:
					'Poignardé et mourant au Puits, Elend est sauvé quand Vin lui fait avaler de force la bille du métal du Seigneur Maître, le transformant en Fils-des-brumes.',
			},
			'woa-60': {
				title: 'Sur le rempart',
				description:
					"Fraîchement devenu Fils-des-brumes et confirmé Empereur, Elend se tient avec Vin au sommet du rempart. Tandis qu'elle désespère d'avoir libéré ce qui était emprisonné dans le Puits, il la rassure qu'ils survivront à tout ce qui vient.",
			},
			'hoa-1': {
				title: 'Empereur en guerre',
				description:
					'Elend mène ses armées vers Vetitan, maintenant un empereur Fils-des-brumes dirigeant des campagnes militaires pour sécuriser les réserves cachées du Seigneur Maître.',
			},
			'hoa-3': {
				title: 'Sécuriser la réserve',
				description:
					"Elend sécurise la caverne de Vetitan, trouvant nourriture et un message sur plaque métallique avertissant du danger que Rashek a emprisonné et l'emplacement de la réserve de Fadrex.",
			},
			'hoa-8': {
				title: 'Le camp du canal',
				description:
					"Elend explique à Fatren qu'exposer les réfugiés aux brumes est nécessaire — les survivants sont maintenant immunisés. Lui et Vin guident les réfugiés vers un canal où les forces de Demoux sont bivouaquées.",
			},
			'hoa-10': {
				title: 'Marcher vers louest',
				description:
					'Elend mène son armée au sud de Luthadel en marche vers Fadrex quand Sazed, Breeze, Goradel et Allrianne les rejoignent après leur mission diplomatique.',
			},
			'hoa-12': {
				title: 'Que ferait Kelsier ?',
				description:
					"Elend convoque un conseil. Ils débattent des brumes envahissantes et des plans pour capturer les réserves. Elend propose d'exposer l'armée aux brumes pour les immuniser — puis demande « Que ferait Kelsier ? » pour raviver leur espoir.",
			},
			'hoa-15': {
				title: "Débattre de l'exposition",
				description:
					"Elend et Hammond débattent des pour et contre d'exposer les soldats aux brumes. Quand le koloss Human cause des problèmes, Elend envoie Vin s'en occuper.",
			},
			'hoa-17': {
				title: "L'exposition aux brumes",
				description:
					"Elend ordonne d'exposer ses soldats aux brumes en conditions contrôlées. Demoux le confronte. Elend regarde les soldats commencer à tomber malades, y compris Demoux lui-même.",
			},
			'hoa-21': {
				title: 'Les seize pour cent',
				description:
					"Demoux survit. Elend confie à Vin qu'il craint de devenir impitoyable comme le Seigneur Maître. Noorden présente les données ; Vin fait recalculer. Résultat : exactement seize pour cent. Quatre échantillons indépendants produisent la même proportion. Elend admet que le motif est trop précis pour être ignoré.",
			},
			'hoa-25': {
				title: 'Le siège de Fadrex',
				description:
					"L'armée d'Elend arrive à Fadrex. Il inspecte les formations rocheuses et l'entrée en canyon — cette ville sera difficile à prendre. Il débat stratégie avec Hammond, Cett et Vin.",
			},
			'hoa-27': {
				title: "Attendre l'éclaireuse",
				description:
					"Elend reste au camp de siège pendant que Vin infiltre Fadrex seule. Il fait confiance à ses capacités et espère qu'elle reviendra avec des renseignements.",
			},
			'hoa-28': {
				title: "L'esprit des brumes et la prophétie",
				description:
					"Vin revient et dit à Elend qu'elle a senti l'Esprit des Brumes dans Fadrex. Elle parle de sa destinée comme Héros des Siècles, mais Elend avertit que les prophéties ont pu être corrompues. Vin propose de s'infiltrer dans un bal de Yomen.",
			},
			'hoa-30': {
				title: 'Le premier bal',
				description:
					"Elend est surpris que personne n'objecte à ce qu'ils se mettent en danger. Ils se rendent au bal de la Forteresse Orielle, sont annoncés et se séparent pour socialiser avant de confronter Yomen.",
			},
			'hoa-36': {
				title: 'Motifs de seize',
				description:
					"Elend accepte le conseil de Cett d'empoisonner les puits de Fadrex mais refuse de tuer des innocents. Un tremblement de terre secoue le camp. Demoux révèle une autre anomalie statistique : un seizième des malades restent exactement seize jours ou meurent. Elend refuse sa démission.",
			},
			'hoa-37': {
				title: 'Le gambit de Yomen',
				description:
					"Le raid nocturne de Yomen est une diversion dévastatrice : pendant que Vin poursuit un mystérieux Fils-des-brumes, Yomen anéantit la moitié des vingt mille koloss d'Elend. Il transfère le contrôle de mille survivants à Vin.",
			},
			'hoa-40': {
				title: 'Le troisième art',
				description:
					"Elend, Hammond, Cett, Noorden et Demoux reconstituent les preuves : l'hémalurgie — le troisième art métallique — utilise des pointes pour voler des pouvoirs. Les koloss sont fabriqués à partir d'humains. Elend ordonne de former une nouvelle division avec les soldats tombés des brumes. Penrod supplie de l'aide depuis Luthadel.",
			},
			'hoa-43': {
				title: 'Un duel refusé',
				description:
					"Elend assiste au second bal au Canton des Ressources, sachant que Vin s'est éclipsée pour trouver la réserve. Il défie Yomen en duel. Yomen refuse. Le vrai but est de gagner du temps pendant que Vin travaille en bas.",
			},
			'hoa-44': {
				title: 'Électrum et atium',
				description:
					"Elend continue de débattre avec Yomen jusqu'à ce qu'un des espions neutralisés par Vin entre en titubant. Désespéré, Elend se jette sur Yomen et l'étrangle. Yomen ne résiste pas, Elend le lâche — et Yomen le poignarde avec une vitesse surnaturelle, confirmant qu'il brûle de l'atium. Elend brûle de l'électrum et se retire.",
			},
			'hoa-44.2': {
				title: 'La note',
				description:
					"De retour au camp, Elend attend le retour de Vin. Une note arrive de Yomen — il l'a capturée. Le siège n'est plus une question de provisions. C'est personnel.",
			},
			'hoa-47': {
				title: 'Perdre Vin',
				description:
					"Elend se tient dans les brumes, s'inquiétant pour Vin mais gardant foi en elle. Lord Cett dit que le siège échoue. Une bagarre éclate entre les soldats tombés des brumes et les autres troupes. Elend ordonne à Demoux de marcher vers Luthadel pour aider Penrod.",
			},
			'hoa-51': {
				title: 'Le gambit de duralumin',
				description:
					"Elend utilise des Poussées d'acier pour voyager vers un village attaqué par des koloss. Il combat seul à travers eux, puis effectue une Traction émotionnelle au duralumin — prenant le contrôle de trente mille koloss en un seul instant.",
			},
			'hoa-55': {
				title: 'Agenouillé dans la cendre',
				description:
					"Elend revient au camp avec trente mille nouveaux koloss et s'effondre dans la cendre. L'Esprit des Brumes apparaît et s'agenouille près de lui. Elend l'interroge et apprend que les brumes ne tuent pas, qu'il ne doit pas attaquer Fadrex, et que Ruine est vulnérable.",
			},
			'hoa-61': {
				title: "L'assaut matinal",
				description:
					'Elend arrive au camp avec trente mille nouveaux koloss et dit à Hammond que Vin est toujours vivante. Hammond rapporte que Luthadel est dévastée. Avec la vie de Vin en jeu, Elend ordonne de planifier une attaque surprise pour le matin.',
			},
			'hoa-65': {
				title: 'Retraite dans Fadrex',
				description:
					"Elend demande à Hammond si attaquer la ville est juste — ça ne l'est pas — et ordonne de plier le camp. Avant de pouvoir agir, Ruine lui arrache le contrôle de tous les koloss. Vin arrive et ordonne une retraite désespérée dans Fadrex, forgeant une alliance temporaire avec Yomen.",
			},
			'hoa-67': {
				title: "Observer l'orage",
				description:
					"Elend et Yomen observent depuis Fadrex une énorme armée koloss se rassembler. Un tremblement de terre secoue la ville. Vin dit à Elend qu'elle doit partir pour Luthadel chercher la réserve d'atium.",
			},
			'hoa-70': {
				title: 'Le secret des brumes',
				description:
					"Elend parcourt la ville avec Yomen et visite l'infirmerie. Voyant un garçon malade des brumes agoniser, il réalise que l'expérience reflète les coups utilisés pour Éveiller les allomanciens. Il donne un flacon à un soldat tombé — et l'homme peut brûler des métaux. Les brumes ne tuent pas ; elles Éveillent des allomanciens.",
			},
			'hoa-73': {
				title: 'Les brumes bougent',
				description:
					"Elend et Hammond remarquent un changement soudain dans les brumes — au lieu de leur tourbillon chaotique, elles fluent avec détermination, toutes vers Luthadel. L'armée koloss qu'ils combattaient se retire brusquement, se dirigeant aussi vers la capitale.",
			},
			'hoa-74': {
				title: 'Le Voyant révélé',
				description:
					"Elend et Yomen discutent de la soudaine disparition des brumes. Elend ordonne à tous de se réfugier dans les cavernes. Yomen presse sa propre bille d'atium dans la main d'Elend et révèle qu'il est un Voyant — un Brumeux d'atium.",
			},
			'hoa-74.2': {
				title: 'Voler vers Luthadel',
				description:
					"Elend quitte Fadrex et commence le voyage vers Luthadel. Il voyage comme Vin le lui a appris — lâchant un fer à cheval, s'en Poussant, puis Tirant une autre ancre. Il vole au-dessus du paysage de cendre vers l'est.",
			},
			'hoa-76': {
				title: 'En route pour Luthadel',
				description:
					"Traversant encore la Dominance Centrale vers Luthadel, Elend avance dans les terres de cendre — lâchant un fer à cheval, s'en Poussant, Tirant une autre ancre.",
			},
			'hoa-76.2': {
				title: 'Entrer dans Luthadel',
				description:
					"Elend entre dans Luthadel par l'ouest, arrivant dans la capitale qu'il a autrefois gouvernée comme roi. Très haut au-dessus, invisible pour lui, Vin — fraîchement ascendue comme Préservation — observe l'homme qu'elle aime arriver dans la ville.",
			},
			'hoa-77': {
				title: 'Ruines de Kredik Shaw',
				description:
					"Elend cherche dans les ruines de Kredik Shaw — Vin l'a démoli d'une seule Poussée en Ascendant. Il fouille les décombres en appelant son nom, mais Luthadel est vide. Les gens ont disparu dans les cavernes.",
			},
			'hoa-77.2': {
				title: 'Le murmure dans le vent',
				description:
					"Elend fouille la Forteresse Venture et trouve le cadavre du roi Penrod. Il essaie de comprendre où est allé le peuple de Luthadel. Puis il l'entend : le vent, murmurant son nom. Vin dépense un effort monumental pour prononcer un seul mot. « Ouest », souffle-t-elle. « Puits. » Elend monte et chevauche vers l'ouest, vers les Puits de Hathsin.",
			},
			'hoa-79': {
				title: 'Arrivée aux Puits',
				description:
					'Elend arrive aux Puits de Hathsin et trouve Demoux et les soldats tombés déjà là. Des centaines de milliers de réfugiés se sont rassemblés — ils sont venus parce que Kelsier le leur a dit. Elend ordonne aux tombés de consommer des métaux allomantiques.',
			},
			'hoa-80': {
				title: 'Les réfugiés',
				description:
					"Demoux signale que plusieurs centaines de milliers de réfugiés se sont rassemblés aux Puits et qu'une armée koloss marche vers eux. Elend entend son nom murmuré dans le vent — la voix de Vin — et le suit à travers le camp vers le Foyer.",
			},
			'hoa-80.2': {
				title: "Le trésor d'atium",
				description:
					"Guidé par le murmure de Vin, Elend trouve l'entrée des cavernes kandra. À l'intérieur, il découvre Sazed luttant seul pour protéger l'atium. Sazed lui dit que le trésor est ici : une immense réserve d'atium, le corps même de Ruine. Elend ordonne à tous de s'abriter dans les cavernes.",
			},
			'hoa-81': {
				title: 'Le dernier discours',
				description:
					"Sazed révèle la vérité : l'atium est le corps de Ruine. Demoux signale que ses soldats tombés n'ont montré aucune capacité allomantique — jusqu'à ce qu'Elend lui donne une bille d'atium et le regarde la brûler. Ils sont tous des Voyants. Elend prononce un discours, enfile sa cape de brume et les mène charger l'armée koloss.",
			},
			'hoa-81.2': {
				title: 'Bien mourir',
				description:
					"Elend brûle une vaste quantité d'atium pendant des heures, les Voyants à ses côtés se frayant un chemin à travers des milliers de koloss. Quand son étain s'épuise, il peut encore le brûler — il lève les yeux et voit Vin. Puis Marsh apparaît, brûlant aussi de l'atium. Elend brûle duralumin et atium ensemble dans un ultime moment de parfaite clarté : il voit le monde comme un dieu, comprend tout. Il enfonce son épée dans le cou de Marsh tandis que la hache le frappe à la poitrine. Marsh revendique la victoire — mais Elend murmure qu'il a tort. Chaque dernière bille d'atium a été brûlée. Ruine ne récupérera jamais son corps. Elend meurt en souriant.",
			},
			'hoa-83': {
				title: 'Réunis dans la mort',
				description:
					"Le corps d'Elend est trouvé près de celui de Vin dans le champ de fleurs — le premier cadeau de Sazed au monde refait — en paix après toutes leurs luttes.",
			},
		},
		marsh: {
			...enData.movements.marsh,
			// ── L'Empire ultime ────────────────────────────────────────────
			'tfe-7': {
				title: 'Le frère réticent',
				description:
					"Marsh arrive à la boutique de Clubs, frère aîné de Kelsier et lui-même un chef rebelle. Il se joint au plan de l'équipe à contrecœur.",
			},
			'tfe-10.2': {
				title: "Le meeting de l'entrepôt",
				description:
					"Marsh assiste au meeting secret de l'entrepôt avec l'équipe, regardant son frère Kelsier prêcher la révolution aux travailleurs skaa rassemblés.",
			},
			'tfe-20': {
				title: 'Enseigner à Vin',
				description:
					"Marsh arrive au domaine Renoux à Fellise pour enseigner à Vin à chercher — utiliser le bronze pour détecter d'autres allomanciens brûlant des métaux, identifier leur type et distinguer les brumeux des Fils-des-brumes. Il lui enseigne aussi le cuivre et comment les enfumeurs peuvent dissimuler les pulsations allomantiques.",
			},
			'tfe-27': {
				title: "L'infiltration du Ministère",
				description:
					"Marsh retrouve Kelsier et Vin dans un bâtiment abandonné des Méandres, portant les tatouages d'un obligateur de bas rang du Canton de l'Inquisition. Il s'est véritablement infiltré dans le Ministère. Il révèle que le Ministère place des apaiseurs dans les régions skaa sous apaisement constant, dissimulés par des enfumeurs. Il confirme aussi que les Inquisiteurs peuvent mourir de vieillesse.",
			},
			'tfe-30': {
				title: 'Disparition',
				description:
					"Marsh se tait, ses communications cessent alors qu'il disparaît dans les niveaux les plus profonds du Canton de l'Inquisition. L'équipe craint le pire.",
			},
			'tfe-32': {
				title: 'Le corps',
				description:
					"Kelsier et Vin trouvent le corps de Marsh, entièrement vidé de son sang, une coquille sans vie. Sa lettre, trouvée plus tard à la boutique de Clubs, explique que les Inquisiteurs le trouveraient probablement. L'équipe le pleure. Mais le cadavre mutilé n'est pas ce qu'il semble.",
			},
			'tfe-38': {
				title: "L'Inquisiteur",
				description:
					"Marsh apparaît pendant l'assaut final sur Kredik Shaw — vivant, transformé avec onze clous métalliques : deux par les yeux, huit dans la poitrine, un dans le dos les reliant. Il tue l'Inquisiteur Kar en arrachant un clou de son cou et révèle qu'il a tué tous les autres Inquisiteurs.",
			},
			'tfe-39': {
				title: 'Onze clous',
				description:
					'Marsh se tient avec Sazed et Vin sur un bâtiment près du quartier skaa. Il parle de sa survie et de sa transformation — onze clous, le processus horrible et comment il a résisté.',
			},
			'woa-7': {
				title: 'Le guide du Conventicule',
				description:
					'Marsh apparaît au village de Sazed dans la Dominance Orientale et propose de le guider au Conventicule de Seran.',
			},
			'woa-9': {
				title: 'Voyager avec Sazed',
				description:
					"Marsh voyage avec Sazed vers le Conventicule de Seran. Son comportement devient plus erratique et renfermé durant le voyage tandis que l'influence subtile de Ruine s'installe.",
			},
			'woa-12': {
				title: 'Abandon',
				description:
					"Marsh abandonne brusquement Sazed au Conventicule et disparaît dans la nature, poussé par des forces qu'il peut de moins en moins résister.",
			},
			'woa-57': {
				title: 'Pantin de Ruine',
				description:
					"Marsh apparaît à Kredik Shaw sous le contrôle total de Ruine. Disant à Sazed qu'il souhaiterait savoir pourquoi il doit le tuer, il Pousse allomantiquement les bracelets de Sazed et le projette contre le mur.",
			},
			'woa-58': {
				title: 'Abattu',
				description:
					"Marsh frappe Sazed — brisant des os et enfonçant des anneaux métalliques dans sa chair — mais Sazed puise dans ces mentemétaux pour riposter. Hammond frappe le crâne de Marsh avec une canne de duel, l'assommant.",
			},
			'hoa-0': {
				title: 'Créer des Inquisiteurs',
				description:
					'Sous le contrôle de Ruine, Marsh accomplit de sombres rituels hémalurgiques à Tathingdwen, créant de nouveaux Inquisiteurs à partir de féruchemistes et allomanciens capturés.',
			},
			'hoa-6': {
				title: 'Mener les koloss',
				description:
					'Marsh commande une armée grandissante de koloss au nom de Ruine, rassemblant des forces pour la bataille finale.',
			},
			'hoa-13': {
				title: 'Pion de Ruine',
				description:
					'Marsh est assis immobile dans un camp koloss, réfléchissant à Kelsier et à son rôle dans les plans de Ruine. Il décide de cesser ses luttes vaines et de feindre la docilité.',
			},
			'hoa-34': {
				title: 'Près de Tyrian',
				description:
					"Marsh opère près du Mont Tyrian, créant des pointes hémalurgiques de prisonniers capturés et bâtissant l'armée d'Inquisiteurs de Ruine à l'ombre du mont de cendres.",
			},
			'hoa-42': {
				title: 'Le clouage de Penrod',
				description:
					'Marsh infiltre furtivement Luthadel. Ruine prend le contrôle de son corps et il attaque le roi Penrod à la Forteresse Venture, lui transperçant le cœur et laissant la pointe dans sa poitrine.',
			},
			'hoa-63': {
				title: 'Confronter Vin',
				description:
					"Marsh arrive au Canton des Ressources et trouve Vin captive. Il s'incline devant Ruine et annonce qu'il n'est pas là pour protéger Fadrex — seulement pour prendre l'atium. Quand Yomen révèle qu'il n'y a que sept billes, Ruine hurle de rage.",
			},
			'hoa-65': {
				title: "L'exigence d'atium",
				description:
					"Marsh attrape Vin et exige l'emplacement de l'atium, mais elle refuse. Tandis qu'il la secoue, Vin vole un flacon de métal à sa ceinture et retire sa boucle d'oreille — une pointe hémalurgique — la poussant au duralumin dans son front. Marsh tombe.",
			},
			'hoa-65.2': {
				title: "Le frère de l'Empereur",
				description:
					"Marsh se remet de la pointe au front. Vin le frappe d'un Apaisement au duralumin, mais Marsh résiste — grandissant en utilisant la force féruchemique et l'étranglant. Vin puise dans les brumes et Pousse ses émotions. Submergé, Marsh fuit.",
			},
			'hoa-69': {
				title: 'Le destin du messager',
				description:
					'Marsh intercepte et tue le capitaine Goradel, qui portait le message urgent de Spook à Vin. Il lit la note — un avertissement écrit en acier que Ruine ne peut altérer — et, troublé, part pour Luthadel.',
			},
			'hoa-72': {
				title: "La boucle d'oreille",
				description:
					"Marsh regarde treize Inquisiteurs attaquer Vin à Kredik Shaw. Ruine le force à la torturer. Il lui brise les bras, les jambes, les doigts un par un. Mais une part de lui résiste. Il remarque sa boucle d'oreille, se souvient de l'avertissement de Spook — et sans réfléchir, l'arrache de son oreille. La voix de Ruine se coupe. Les brumes se précipitent dans Vin.",
			},
			'hoa-73': {
				title: 'Sans se rendre',
				description:
					'Marsh regarde Vin massacrer les douze Inquisiteurs restants avec une facilité terrifiante. Elle démolit Kredik Shaw. Seul Marsh reste. Il ne ressent aucune peur — seulement une fierté féroce et tranquille. Vin arrache une de ses pointes oculaires sans le tuer, puis disparaît.',
			},
			'hoa-81': {
				title: 'Tuer Elend',
				description:
					"Marsh, poussé par Ruine, attaque Elend durant la Bataille de Hathsin. Tous deux brûlent de l'atium dans un duel furieux. Elend brûle duralumin et atium ensemble dans un ultime éclair de perspicacité divine, enfonçant son épée dans le cou de Marsh tandis que la hache le frappe à la poitrine. Marsh se guérit et décapite l'empereur — mais Elend meurt souriant. Quand Vin se sacrifie pour détruire Ruine, la force qui contrôlait Marsh disparaît. Il s'effondre parmi les morts, son corps lui appartenant à nouveau.",
			},
		},
		spook: {
			...enData.movements.spook,
			// ── L'Empire ultime ────────────────────────────────────────────
			'tfe-7': {
				title: "Le jeune brumeux d'étain",
				description:
					"Spook, le jeune neveu de Clubs, travaille comme guetteur et messager pour l'équipe à l'atelier de menuiserie, parlant en argot épais de l'est.",
			},
			'tfe-9': {
				title: 'Courses de messager',
				description:
					"Spook transmet des messages entre la boutique de Clubs à Luthadel et le domaine Renoux à Fellise ; ses sens amplifiés par l'étain font de lui un éclaireur exceptionnel.",
			},
			'tfe-16': {
				title: 'Veiller sur Vin',
				description:
					'Lestibournes veille sur Vin blessée à la boutique de Clubs, présent quand elle se réveille de ses blessures de la mission de reconnaissance à Kredik Shaw. Il raconte que Kelsier lui a donné un nouveau nom : Spook.',
			},
			'tfe-22': {
				title: 'Le mouchoir',
				description:
					"Spook visite le domaine Renoux à Fellise et trouve Vin en train de lire le journal du Seigneur Maître. Il dit que Dockson est venu chercher plus d'armes et, rougissant et nerveux, lui offre un mouchoir avant de s'enfuir en courant. Sazed explique ensuite à Vin qu'un jeune homme signifie ainsi son souhait de courtiser sérieusement une dame.",
			},
			'tfe-24': {
				title: 'Soirée à la boutique de Clubs',
				description:
					"Spook partage un verre nocturne avec Kelsier, Ham et Clubs à la boutique de Clubs tandis que l'équipe discute de l'état de la mission.",
			},
			'tfe-26': {
				title: 'Les exécutions',
				description:
					"Spook fait irruption dans la boutique de Clubs pour annoncer des exécutions à la Place de la Fontaine. Il accompagne l'équipe à la place, où ils assistent à la brutale exécution publique de femmes et enfants skaa, leur sang versé dans la fontaine.",
			},
			'tfe-32': {
				title: 'Surveillance du toit',
				description:
					"Spook fait le guet depuis le toit de la boutique de Clubs avec Vin, lui enseignant des astuces d'étain. Il explique qu'il ne s'agit pas seulement d'amplifier les sens, mais de filtrer l'important et de ne pas se laisser distraire par le reste.",
			},
			'tfe-33': {
				title: 'Guetteur de garde',
				description:
					"Quand l'équipe va à la Place de la Fontaine, Spook est aperçu dans un des chariots d'exécution aux côtés de lord Renoux — capturé par le Ministère.",
			},
			'tfe-34': {
				title: 'Témoin du sacrifice',
				description:
					'Spook observe depuis la foule Kelsier combattre et mourir à la Place de la Fontaine — un événement qui marquera le reste de sa vie. Le sacrifice du Survivant transforme la compréhension de Spook de ce que signifie servir une cause.',
			},
			'tfe-38': {
				title: 'La révolution',
				description:
					"Spook se bat aux côtés de l'équipe pendant la révolution finale, aidant à coordonner le soulèvement skaa dans les rues de Luthadel.",
			},
			'woa-6': {
				title: "L'éclaireur grandissant",
				description:
					'Spook revient à Luthadel de sa mission de reconnaissance et rejoint l équipe à la Forteresse Venture. Il reprend son rôle de patrouille.',
			},
			'woa-11': {
				title: "Rassemblement de l'équipe",
				description:
					"Spook est présent à la Forteresse Venture tandis que l'équipe se regroupe après l'arrivée de la deuxième armée de Cett.",
			},
			'woa-13': {
				title: 'Conseil de guerre',
				description:
					"Spook assiste au conseil de guerre d'Elend où l'équipe discute de la stratégie face aux deux armées assiégeantes.",
			},
			'woa-20': {
				title: 'Au conseil de guerre',
				description:
					"Spook est présent pendant que l'équipe discute du plan d'Elend pour négocier avec Straff.",
			},
			'woa-23': {
				title: 'Le retour de Sazed',
				description:
					"Spook est présent quand Sazed revient et informe l'équipe sur l'armée koloss, les morts des brumes et le danger d'une troisième force.",
			},
			'woa-25': {
				title: 'Escorte de courses',
				description:
					"Spook accompagne Vin, Tindwyl, Allrianne et OreSeur pour une sortie shopping rue Kenton — contre son gré, bien sûr. Les tambours d'alarme interrompent la sortie.",
			},
			'woa-44': {
				title: 'Trouver Vin',
				description:
					"Spook se joint à Elend et Hammond pour discuter de l'attaque dévastatrice de Vin contre les forces de Cett. OreSeur les guide jusqu'à Vin.",
			},
			'woa-49': {
				title: "Groupe d'exil",
				description:
					"Spook quitte Luthadel par la Porte d'Étain avec Vin, Elend et Allrianne, échappant à l'armée de Straff tandis que le groupe chevauche vers le nord.",
			},
			'woa-50': {
				title: 'Quelque chose dans les brumes',
				description:
					"En levant le camp au nord de la ville, Spook est le premier à sentir quelque chose suivre le groupe dans les brumes. Vin lui dit que c'est l'esprit des brumes.",
			},
			'woa-51': {
				title: 'Cinq hommes qui les suivent',
				description:
					"Les sens améliorés de Spook repèrent cinq hommes qui surveillent le camp — le groupe de Jastes Lekal. Après l'exécution de Jastes, Spook révèle le secret qu'il a entendu : Sazed les a trompés pour qu'ils survivent. Le groupe fait demi-tour.",
			},
			'woa-52': {
				title: 'Chevaucher en retour',
				description:
					"Incapable d'égaler la vitesse de Vin, Spook chevauche dur avec Elend vers la ville assiégée, désespéré d'arriver avant que les koloss détruisent tout.",
			},
			'woa-56': {
				title: 'Les réfugiés terrisiens',
				description:
					"Spook voyage avec Elend quand ils rencontrent une colonne de réfugiés terrisiens fuyant Tathingdwen. Quand l'esprit des brumes apparaît à Elend, l'arrivée de Spook le chasse.",
			},
			'woa-57': {
				title: 'Dans la ville',
				description:
					'Spook entre dans Luthadel parmi les réfugiés avec Elend et Hammond, traversant les rues bondées pour retrouver Vin, qui les guide vers Kredik Shaw.',
			},
			'woa-58': {
				title: 'La caverne',
				description:
					"Spook descend avec Vin, Elend et Hammond dans la caverne emplie de fumée sous Kredik Shaw, où le bassin resplendissant du Puits de l'Ascension attend.",
			},
			'hoa-14': {
				title: "Yeux d'étain",
				description:
					"Spook brûle constamment de l'étain malgré les dangers, poussé par la culpabilité de la mort de Clubs. Rôdant dans les canaux secs d'Urteau la nuit, ses sens améliorés lui permettent de voir à la lumière des étoiles comme en plein jour.",
			},
			'hoa-14.2': {
				title: 'Le conseil du Citoyen',
				description:
					"Spook prend l'initiative d'espionner les réunions de Quellion le Citoyen dans son manoir, et observe secrètement Beldre, la sœur du Citoyen.",
			},
			'hoa-16': {
				title: "Témoin de l'atrocité",
				description:
					"Avec un tissu sur les yeux pour tolérer la lumière du soleil, Spook traîne près d'un canal au marché, se faisant passer pour un mendiant aveugle. Il regarde les gardes de Quellion enfermer des nobles dans un bâtiment et y mettre le feu.",
			},
			'hoa-16.2': {
				title: 'Poignardé dans la foule',
				description:
					"Spook suit le Citoyen. Il parle à Beldre sans être vu, condamnant les meurtres de son frère. Découvert, il combat trois gardes allomanciens jusqu'à ce qu'une épée le transperce.",
			},
			'hoa-19': {
				title: 'Une voix dans les flammes',
				description:
					"Spook reprend conscience piégé dans un bâtiment en feu. Une voix — se disant Kelsier — le guide vers des flacons allomantiques. Il boit et découvre qu'il peut maintenant brûler de l'étain, gagnant la force de s'échapper.",
			},
			'hoa-23': {
				title: 'Rêves de fièvre',
				description:
					"Spook gît dans sa cachette, fiévreux de ses blessures, revivant le jour où Clubs l'a recueilli enfant. Le rêve fiévreux brouille passé et présent tandis qu'il se remet du coup de couteau.",
			},
			'hoa-26': {
				title: 'Rumeurs dans la nuit',
				description:
					"S'émerveillant de sa survie et de sa nouvelle capacité de Brute, Spook remarque un éclat de métal dans sa peau — « Kelsier » lui dit de le laisser. Il visite une taverne où il entend parler de lui.",
			},
			'hoa-29': {
				title: 'Le lac caché',
				description:
					"Spook rencontre la voiture de Sazed dans les rues d'Urteau, habillé en soldat. Il guide Sazed, Breeze, Allrianne et Goradel au Canton d'Inquisition abandonné. En dessous, il révèle la réserve du Seigneur Maître — et le lac souterrain caché.",
			},
			'hoa-31': {
				title: 'Une question de foi',
				description:
					"Spook se joint à Sazed et Breeze pour discuter du détournement d'eau et de comment déposer Quellion. Il dit à Sazed qu'il croit que Kelsier veille sur eux.",
			},
			'hoa-35': {
				title: 'Confronter Durn',
				description:
					"Spook fait irruption dans le repaire de Durn et confronte l'informateur. La voix de Kelsier le presse d'aller après Quellion.",
			},
			'hoa-38': {
				title: 'Les sorties secrètes',
				description:
					"Spook regarde des skaa déblayer un bâtiment brûlé et ne trouve que neuf crânes parmi les débris de dix prisonniers. Il réalise qu'il y a des sorties secrètes.",
			},
			'hoa-41': {
				title: 'Survivant des Flammes',
				description:
					"Utilisant sa connaissance des sorties secrètes, Spook attaque et tue les gardes, mais se retrouve piégé dans le bâtiment en feu avec une petite fille. Il s'échappe à travers les flammes en la portant. Les gens d'Urteau l'appellent le « Survivant des Flammes ».",
			},
			'hoa-46': {
				title: 'Le jardin de Beldre',
				description:
					"Spook visite Beldre dans son jardin, lui disant qu'il est un membre de l'équipe de Kelsier. La voix de Kelsier lui ordonne de tuer Quellion et sa sœur — mais Spook refuse. Beldre crie pour les gardes et Spook se retire.",
			},
			'hoa-46.2': {
				title: 'Restaurer les canaux',
				description:
					"Spook retourne au Canton après un tremblement de terre. Il demande à Sazed de faire couler l'eau dans les canaux — une requête qui exigerait du Gardien qu'il utilise à nouveau son érudition.",
			},
			'hoa-49': {
				title: 'La supplique de Beldre',
				description:
					"Spook explique comment Quellion est arrivé au pouvoir. Beldre arrive suppliant qu'on ne tue pas son frère. Ils décident de la retenir en otage tout en répandant des rumeurs de défection.",
			},
			'hoa-53': {
				title: 'Promesses et plans',
				description:
					"Spook parle avec Beldre, qui révèle être à moitié skaa. Il lui raconte sa vie dans l'équipe de Kelsier et promet de sauver la ville sans blesser Quellion, puis part dans les rues.",
			},
			'hoa-53.2': {
				title: 'La tournée des tavernes',
				description:
					'Spook promet à Durn des contrats commerciaux en échange du nettoyage des canaux. Ensemble, ils visitent des tavernes dans tout Urteau, où Spook renforce sa réputation de Survivant des Flammes.',
			},
			'hoa-56': {
				title: 'Le plan final',
				description:
					"Spook élabore un plan pour exposer les capacités allomantiques secrètes de Quellion. Il trouve Sazed aux travaux du canal et lui dit qu'il a foi que même s'il échoue, quelqu'un veille.",
			},
			'hoa-58': {
				title: "Héros d'Urteau",
				description:
					"Sazed instruit Spook sur le mécanisme d'eau. Au discours de Quellion, une émeute éclate. Beldre est révélée comme Fille-des-brumes. Spook voit Quellion réagir aussi à la voix de Kelsier. Dans un moment de terrible clarté, Spook comprend : Kelsier est Ruine, les pointes sont l'hémalurgie. Il arrache une pointe de Quellion et retire son propre éclat de métal. Surmontant sa terreur des flammes, il se précipite dans le bâtiment en feu, active le mécanisme et s'effondre — sauvant Urteau.",
			},
			'hoa-62': {
				title: 'Le coût de la victoire',
				description:
					"Spook gît inconscient à l'hôpital, gravement brûlé. Sazed veille sur lui. Beldre parle de comment son frère a été changé par le pouvoir et que Spook est un héros pour la ville.",
			},
			'hoa-64': {
				title: 'Le message en acier',
				description:
					"Encore en convalescence, Spook entend une voix lui dire d'envoyer un avertissement à Vin. Il écrit le message en acier — le seul médium que Ruine ne peut altérer — et le confie au capitaine Goradel.",
			},
			'hoa-73': {
				title: 'Dans les cavernes',
				description:
					"Allrianne alerte Breeze d'un comportement étrange des brumes — elles fluent à l'unisson vers Luthadel. Spook le voit aussi et dit à Breeze de rassembler tout le monde dans les cavernes de stockage.",
			},
			'hoa-83': {
				title: 'Un nouveau monde',
				description:
					"Spook émerge des cavernes dans le monde refait par Sazed — un champ de fleurs et d'herbe verte sous un ciel bleu. Il trouve les corps de Vin et Elend, et un livre de Sazed expliquant tout, y compris que Sazed a fait de Spook un Fils-des-brumes à la demande de Kelsier.",
			},
		},
	},

	markerLabels: {
		capital: 'Siège de Dominance',
		city: 'Ville',
		ashmount: 'Mont de cendres', //
		landmark: 'Point remarquable',
		stronghold: 'Forteresse',
		hideout: 'Refuge',
		mine: 'Mine-prison',
		mystical: 'Lieu sacré',
		town: 'Bourgade',
		village: 'Village skaa',
		river: 'Cours d’eau',
		industrial: 'Poste de ravitaillement',
		region: 'Région',
		keep: 'Manoir noble',
		palace: 'Palais',
		plantation: 'Plantation',
		district: 'Quartier',
		estate: 'Domaine noble',
	},

	cityMarkerLabels: {
		gate: 'Porte de la ville',
		keep: 'Manoir noble',
		palace: 'Palais',
		district: 'Quartier',
		shop: 'Marchand',
		safehouse: 'Planque de l’équipe',
		landmark: 'Lieu remarquable',
		canal: 'Canal',
		ministry: 'Canton', // [5]
		plaza: 'Place',
	},

	// ── Chapter seasons (book → chapter → season/year)
	chapterSeasons: {
		tfe: {
			0: { season: 'Printemps', year: '1021 FE' },
			1: { season: 'Printemps', year: '1021 FE' },
			2: { season: 'Printemps', year: '1021 FE' },
			3: { season: 'Printemps', year: '1021 FE' },
			4: { season: 'Printemps', year: '1021 FE' },
			5: { season: 'Printemps', year: '1021 FE' },
			6: { season: 'Printemps', year: '1021 FE' },
			7: { season: 'Fin de printemps', year: '1021 FE' },
			8: { season: 'Été', year: '1021 FE' },
			9: { season: 'Été', year: '1021 FE' },
			10: { season: 'Été', year: '1021 FE' },
			11: { season: 'Été', year: '1021 FE' },
			12: { season: 'Été', year: '1021 FE' },
			13: { season: 'Été', year: '1021 FE' },
			14: { season: 'Été', year: '1021 FE' },
			15: { season: 'Été', year: '1021 FE' },
			16: { season: 'Été', year: '1021 FE' },
			17: { season: 'Été', year: '1021 FE' },
			18: { season: 'Été', year: '1021 FE' },
			19: { season: "Fin d'été", year: '1021 FE' },
			20: { season: "Fin d'été", year: '1021 FE' },
			21: { season: 'Automne', year: '1021 FE' },
			22: { season: 'Automne', year: '1021 FE' },
			23: { season: 'Automne', year: '1021 FE' },
			24: { season: 'Automne', year: '1021 FE' },
			25: { season: "Fin d'automne", year: '1021 FE' },
			26: { season: "Fin d'automne", year: '1021 FE' },
			27: { season: 'Hiver', year: '1021 FE' },
			28: { season: 'Hiver', year: '1021 FE' },
			29: { season: 'Hiver', year: '1021 FE' },
			30: { season: 'Hiver', year: '1021 FE' },
			31: { season: 'Hiver', year: '1021 FE' },
			32: { season: 'Hiver', year: '1022 FE' },
			33: { season: 'Début de printemps', year: '1022 FE' },
			34: { season: 'Début de printemps', year: '1022 FE' },
			35: { season: 'Début de printemps', year: '1022 FE' },
			36: { season: 'Début de printemps', year: '1022 FE' },
			37: { season: 'Début de printemps', year: '1022 FE' },
			38: { season: 'Début de printemps', year: '1022 FE' },
			39: { season: 'Printemps', year: '1022 FE' },
		},
		woa: {
			1: { season: 'Automne', year: '1023 FE' },
			2: { season: 'Automne', year: '1023 FE' },
			3: { season: 'Automne', year: '1023 FE' },
			4: { season: 'Automne', year: '1023 FE' },
			5: { season: 'Automne', year: '1023 FE' },
			6: { season: 'Automne', year: '1023 FE' },
			7: { season: "Fin d'automne", year: '1023 FE' },
			8: { season: 'Automne', year: '1023 FE' },
			9: { season: "Fin d'automne", year: '1023 FE' },
			10: { season: 'Automne', year: '1023 FE' },
			11: { season: "Début d'hiver", year: '1023 FE' },
			12: { season: "Fin d'automne", year: '1023 FE' },
			13: { season: "Début d'hiver", year: '1023 FE' },
			14: { season: "Début d'hiver", year: '1023 FE' },
			15: { season: 'Hiver', year: '1023 FE' },
			16: { season: 'Hiver', year: '1023 FE' },
			17: { season: 'Hiver', year: '1023 FE' },
			19: { season: 'Hiver', year: '1023 FE' },
			20: { season: 'Hiver', year: '1023 FE' },
			21: { season: 'Hiver', year: '1023 FE' },
			22: { season: 'Hiver', year: '1023 FE' },
			23: { season: 'Hiver', year: '1023 FE' },
			24: { season: 'Hiver', year: '1023 FE' },
			25: { season: 'Hiver', year: '1023 FE' },
			26: { season: 'Hiver', year: '1023 FE' },
			27: { season: 'Hiver', year: '1023 FE' },
			28: { season: 'Hiver', year: '1024 FE' },
			29: { season: 'Hiver', year: '1024 FE' },
			30: { season: 'Hiver', year: '1024 FE' },
			31: { season: 'Hiver', year: '1024 FE' },
			32: { season: 'Hiver', year: '1024 FE' },
			33: { season: 'Hiver', year: '1024 FE' },
			34: { season: 'Hiver', year: '1024 FE' },
			35: { season: 'Hiver', year: '1024 FE' },
			36: { season: 'Hiver', year: '1024 FE' },
			37: { season: 'Hiver', year: '1024 FE' },
			38: { season: 'Hiver', year: '1024 FE' },
			40: { season: "Fin d'hiver", year: '1024 FE' },
			41: { season: "Fin d'hiver", year: '1024 FE' },
			42: { season: "Fin d'hiver", year: '1024 FE' },
			43: { season: "Fin d'hiver", year: '1024 FE' },
			44: { season: "Fin d'hiver", year: '1024 FE' },
			45: { season: "Fin d'hiver", year: '1024 FE' },
			46: { season: "Fin d'hiver", year: '1024 FE' },
			47: { season: "Fin d'hiver", year: '1024 FE' },
			49: { season: "Fin d'hiver", year: '1024 FE' },
			50: { season: "Fin d'hiver", year: '1024 FE' },
			51: { season: "Fin d'hiver", year: '1024 FE' },
			52: { season: "Fin d'hiver", year: '1024 FE' },
			53: { season: "Fin d'hiver", year: '1024 FE' },
			54: { season: "Fin d'hiver", year: '1024 FE' },
			55: { season: "Fin d'hiver", year: '1024 FE' },
			56: { season: 'Hiver', year: '1024 FE' },
			57: { season: 'Hiver', year: '1024 FE' },
			58: { season: 'Hiver', year: '1024 FE' },
			59: { season: 'Hiver', year: '1024 FE' },
			60: { season: 'Hiver', year: '1024 FE' },
		},
		hoa: {
			0: { season: 'Printemps', year: '1026 FE' },
			1: { season: 'Printemps', year: '1026 FE' },
			3: { season: 'Printemps', year: '1026 FE' },
			4: { season: 'Été', year: '1026 FE' },
			5: { season: 'Été', year: '1026 FE' },
			6: { season: 'Été', year: '1026 FE' },
			8: { season: 'Été', year: '1026 FE' },
			10: { season: 'Été', year: '1026 FE' },
			12: { season: 'Été', year: '1026 FE' },
			13: { season: 'Automne', year: '1026 FE' },
			14: { season: 'Automne', year: '1026 FE' },
			15: { season: 'Automne', year: '1026 FE' },
			16: { season: 'Automne', year: '1026 FE' },
			17: { season: 'Automne', year: '1026 FE' },
			18: { season: 'Automne', year: '1026 FE' },
			19: { season: 'Automne', year: '1026 FE' },
			21: { season: 'Automne', year: '1026 FE' },
			22: { season: 'Automne', year: '1026 FE' },
			23: { season: "Début d'hiver", year: '1026 FE' },
			24: { season: 'Hiver', year: '1026 FE' },
			25: { season: 'Automne', year: '1026 FE' },
			26: { season: "Début d'hiver", year: '1026 FE' },
			27: { season: 'Automne', year: '1026 FE' },
			28: { season: 'Automne', year: '1026 FE' },
			29: { season: "Début d'hiver", year: '1026 FE' },
			30: { season: 'Automne', year: '1026 FE' },
			31: { season: "Début d'hiver", year: '1026 FE' },
			34: { season: 'Hiver', year: '1026 FE' },
			35: { season: 'Hiver', year: '1026 FE' },
			36: { season: 'Hiver', year: '1026 FE' },
			37: { season: 'Hiver', year: '1026 FE' },
			38: { season: 'Hiver', year: '1026 FE' },
			40: { season: 'Hiver', year: '1026 FE' },
			41: { season: 'Hiver', year: '1026 FE' },
			42: { season: 'Hiver', year: '1026 FE' },
			43: { season: 'Hiver', year: '1026 FE' },
			44: { season: 'Hiver', year: '1026 FE' },
			45: { season: 'Hiver', year: '1026 FE' },
			46: { season: 'Hiver', year: '1026 FE' },
			47: { season: 'Hiver', year: '1026 FE' },
			48: { season: 'Hiver', year: '1026 FE' },
			49: { season: 'Hiver', year: '1026 FE' },
			50: { season: 'Hiver', year: '1026 FE' },
			51: { season: 'Hiver', year: '1026 FE' },
			53: { season: 'Hiver', year: '1026 FE' },
			54: { season: "Fin d'hiver", year: '1026 FE' },
			55: { season: "Fin d'hiver", year: '1026 FE' },
			56: { season: 'Hiver', year: '1026 FE' },
			57: { season: "Fin d'hiver", year: '1026 FE' },
			58: { season: 'Printemps', year: '1027 FE' },
			59: { season: 'Printemps', year: '1027 FE' },
			60: { season: "Fin d'hiver", year: '1026 FE' },
			61: { season: "Fin d'hiver", year: '1026 FE' },
			62: { season: 'Été', year: '1027 FE' },
			63: { season: "Fin d'hiver", year: '1026 FE' },
			64: { season: 'Été', year: '1027 FE' },
			65: { season: "Fin d'hiver", year: '1026 FE' },
			66: { season: 'Été', year: '1027 FE' },
			67: { season: 'Printemps', year: '1027 FE' },
			68: { season: 'Printemps', year: '1027 FE' },
			69: { season: 'Été', year: '1027 FE' },
			70: { season: 'Printemps', year: '1027 FE' },
			71: { season: 'Automne', year: '1027 FE' },
			72: { season: 'Été', year: '1027 FE' },
			73: { season: 'Été', year: '1027 FE' },
			74: { season: 'Automne', year: '1027 FE' },
			75: { season: 'Automne', year: '1027 FE' },
			76: { season: 'Automne', year: '1027 FE' },
			77: { season: 'Automne', year: '1027 FE' },
			78: { season: 'Automne', year: '1027 FE' },
			79: { season: 'Automne', year: '1027 FE' },
			80: { season: 'Automne', year: '1027 FE' },
			81: { season: 'Automne', year: '1027 FE' },
			82: { season: 'Automne', year: '1027 FE' },
			83: { season: 'Automne', year: '1027 FE' },
			84: { season: 'Automne', year: '1027 FE' },
		},
	},
};
