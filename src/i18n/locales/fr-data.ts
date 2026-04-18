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
				'tfe-25': 'Fils-des-brumes',
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
				'tfe-13': 'Espion du Ministère',
				'tfe-38': "Inquisiteur d'Acier",
				'woa-4': 'Inquisiteur réticent',
				'woa-57': 'Pion de Ravage', // Ruin is "Ravage"
				'hoa-0': 'Main de Ravage',
				'hoa-79': "Yeux d'Acier", // Ironeyes is "Yeux d'Acier"
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
				"Mines d'atium et terre d'origine des kandra. Kelsier fut le seul prisonnier à s'en échapper vivant.",
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
				'Le mont de cendres le plus proche de Luthadel, visible depuis les remparts de la ville.',
			confidence: 'verified',
		},
		urteau: {
			name: 'Urteau',
			description:
				"Capitale de la Dominance du Nord et demeure ancestrale de la maison Venture. Célèbre pour ses tranchées de rue — d'anciens canaux asséchés.",
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
				"Plaque tournante commerciale de la Dominance de l'Ouest, protégée par des formations rocheuses naturelles de cremnol.",
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
				"Ville de la Dominance du Nord construite sur l'une des cavernes de stockage du Seigneur Maître. Envahie par la cendre.",
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
				"Forteresse des Inquisiteurs taillée dans une falaise. Sazed y découvrit l'inscription de Kwaan.",
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
				"Chaîne montagneuse où les Terrisiens furent asservis. Emplacement originel du Puits de l'Ascension.",
			confidence: 'verified',
		},
		'tincut-fastness': {
			name: 'Place forte de Tincut',
			description: "Forteresse cachée dans les montagnes de Terris où le Synode s'est réfugié.",
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
				'Artère artificielle reliant Tathingdwen à Luthadel pour le transport des ressources.',
			confidence: 'probable',
		},
		'kandra-homeland': {
			name: 'Terre natale des Kandra',
			description:
				'Cavernes profondes sous les Fosses de Hathsin où les kandra gardent les secrets du Seigneur Maître.',
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
			description: "Point d'ancrage sud du réseau de cavernes de stockage du Seigneur Maître.",
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
				"Réseau de grottes entre Luthadel et les Fosses, base d'entraînement de l'armée rebelle.",
			confidence: 'verified',
		},
		garthwood: {
			name: 'Garthwood',
			description: 'Village où Sazed a enseigné les religions aux skaa libérés.',
			confidence: 'probable',
		},
		'straffs-camp': {
			name: 'Camp de Straff',
			description: 'Campement militaire de Straff Venture au nord de Luthadel durant le siège.',
			confidence: 'probable',
		},
		'koloss-camp': {
			name: 'Camp des Koloss',
			description: "Position de l'armée koloss au sud de Luthadel durant le siège.",
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
			description: "Ville de garnison au nord-ouest de Luthadel dotée d'une armée permanente.",
			confidence: 'probable',
		},
		'haverfrex-cannery-central': {
			name: 'Haverfrex',
			description:
				"Point industriel dans la Dominance de l'Ouest, nœud d'approvisionnement pour l'armée de Cett.",
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
				season: 'Printemps',
				year: '1021 FE',
			},
			'tfe-1': {
				title: 'Observateur caché',
				description:
					"Kelsier observe les opérations de la bande de Camon depuis les ombres, remarquant l'utilisation inconsciente de l'allomancie par Vin : une orpheline des rues dotée de pouvoirs de Fils-des-brumes.",
				season: 'Printemps',
				year: '1021 FE',
			},
			'tfe-3': {
				title: 'Recruter Vin',
				description:
					"Vin tente de fuir le repaire de Camon, mais Ulef la trahit. Kelsier intervient et la sauve de la correction de Camon. Il promeut Milev chef de bande, prend les trois mille boxings comme paiement pour s'occuper de l'obligateur et de l'Inquisiteur, et loue le repaire pour la réunion du soir. Il teste alors Vin et confirme qu'elle est Fils-des-brumes.",
				season: 'Printemps',
				year: '1021 FE',
			},
			'tfe-5': {
				title: "Le vol d'atium",
				description:
					"Kelsier, Dockson et Vin montent sur le toit. Kelsier s'équipe et plonge dans les brumes pour attaquer la Forteresse Venture et voler de l'atium. Il s'empare du coffre-fort mais doit affronter des tueurs de brume au retour. Il s'échappe avec l'atium et finance la rébellion.",
				season: 'Printemps',
				year: '1021 FE',
			},
			'tfe-6': {
				title: "L'équipe au complet",
				description:
					"Dans l'atelier de menuiserie de Clubs, Kelsier et l'équipe élaborent le plan de destruction de l'Empire ultime. Marsh finit par arriver et tous s'en vont pour laisser les deux frères parler en privé. Vin revient écouter aux portes.",
				season: 'Printemps',
				year: '1021 FE',
			},
			'tfe-7': {
				title: "Former l'apprentie",
				description:
					"Kelsier emmène Vin pour sa première nuit d'entraînement et lui remet un manteau de brume. Il lui enseigne les huit métaux de base le long des remparts de Luthadel, près de la Porte d'Acier.",
				season: 'Fin de printemps',
				year: '1021 FE',
			},
			'tfe-8': {
				title: 'La couverture Renoux',
				description:
					"Kelsier emmène Vin au-delà des murailles de Luthadel, où ils rencontrent un spectre de brume. Sur la route principale, Sazed les attend avec un attelage et les conduit à Fellise. En chemin, Kelsier offre à Vin les trois mille boxings et la possibilité de quitter l'équipe. Au domaine de lord Renoux, il établit l'identité de couverture de Vin en tant que lady Valette.",
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-10': {
				title: 'Planifier la révolution',
				description:
					"De retour à Luthadel, Kelsier tient une réunion d'avancement à la boutique de Clubs. Avant cela, il interroge Sazed sur une religion dotée de pouvoir — Sazed lui parle du jaïsme — et si une religion considère l'extermination des nobles comme un acte sacré. La réunion prend fin quand un soldat de Hammond signale que le Ministère a trouvé l'ancien repaire de Camon.",
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-10.2': {
				title: "Le meeting de l'entrepôt",
				description:
					"Kelsier prêche la révolution devant des travailleurs skaa réunis lors d'un meeting secret dans le quartier des entrepôts. Breeze et ses apaiseurs et agitateurs manipulent la foule pour la rendre plus réceptive, utilisant la légende du Survivant de Hathsin pour inspirer la rébellion.",
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-11': {
				title: 'Le massacre du repaire de Camon',
				description:
					"Kelsier et l'équipe inspectent le repaire détruit. Après leur départ, Kelsier tente de retrouver Camon parmi les mendiants. Il découvre le cadavre de Camon suspendu par un crochet planté dans sa bouche, poignets et chevilles liés, le corps torturé. Cette méthode d'exécution est réservée à ceux qui abusent de l'allomancie. Vin avait suivi Kelsier avec succès et ils échangent quelques mots après la découverte.",
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-13': {
				title: 'Plans à Fellise',
				description:
					"Kelsier retrouve Vin et Sazed au domaine de lord Renoux à Fellise pour examiner les renseignements obtenus lors du premier bal de Vin. Il apprend que le père de Vin était au bal puis repart dans les brumes vers Luthadel.",
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-14': {
				title: 'Reconnaissance du palais',
				description:
					"Kelsier conduit Vin à Kredik Shaw pour explorer le bâtiment que le Seigneur Maître visite tous les trois jours. Ils se frayent un chemin en combattant, mais trois Inquisiteurs d'Acier convergent vers eux. Kelsier est séparé de Vin dans le chaos. Vin s'enfuit grièvement blessée, serrant un mystérieux livre relié en cuir.",
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-15': {
				title: 'Après Kredik Shaw',
				description:
					"L'équipe conteste la décision de Kelsier d'avoir emmené Vin à Kredik Shaw. Avant de pouvoir partir la chercher, Sazed arrive en la portant. Dockson est furieux du risque pris. Kelsier et Dockson remarquent le livre en cuir que Vin a rapporté ; Sazed l'identifie comme écrit en khlennien, la langue de la patrie du Seigneur Maître avant l'Ascension, et pense pouvoir le traduire.",
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-16': {
				title: 'Veiller sur Vin',
				description:
					"Kelsier reste à la boutique de Clubs pour veiller sur Vin pendant qu'elle se remet de ses blessures de Kredik Shaw, présent quand elle se réveille enfin.",
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-17': {
				title: 'Réunion au domaine Renoux',
				description:
					"Kelsier se rend à Fellise avec Breeze, Yeden et Dockson pour se réunir au domaine de lord Renoux et discuter de la prochaine phase de la rébellion.",
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-19': {
				title: 'Attiser la guerre des maisons',
				description:
					"Kelsier sème le chaos pour provoquer la guerre des maisons en déposant le corps visiblement assassiné de lord Charrs Entrone dans le jardin de la Forteresse Tekiel. Il se rend ensuite dans les Quartiers de Suie pour rencontrer Hoid — un informateur se faisant passer pour un contact de rue — et apprendre les rumeurs sur la Maison Renoux. Hoid lui apprend aussi que lady Shan Elariel est une apaiseuse.",
				season: 'Fin d\'été',
				year: '1021 FE',
			},
			'tfe-19.2': {
				title: 'Rencontre avec lord Straff',
				description:
					"Kelsier se rend à la place Ahlstrom déguisé en skaa mendiant, malade et infirme, pour rencontrer lord Straff Venture, chef de la Maison Venture. Il découvre que les rumeurs sur le Survivant de Hathsin se répandent et qu'on parle d'un Onzième Métal.",
				season: 'Fin d\'été',
				year: '1021 FE',
			},
			'tfe-19.3': {
				title: 'Retour à Renoux',
				description:
					"Kelsier rentre au manoir Renoux par la Route des Épines et échange des informations avec Vin, Sazed et Renoux. Il fait un sermon à Vin sur les nobles, insistant qu'ils ne se soucient pas des skaa et qu'elle doit rester loin d'Elend.",
				season: 'Fin d\'été',
				year: '1021 FE',
			},
			'tfe-20': {
				title: 'Superviser les approvisionnements',
				description:
					"Kelsier est au domaine Renoux de Fellise et supervise le chargement d'armes et de fournitures sur des chariots pour les envoyer à la rébellion.",
				season: 'Fin d\'été',
				year: '1021 FE',
			},
			'tfe-21': {
				title: "L'armée rebelle",
				description:
					"Kelsier lit une traduction du journal du Seigneur Maître en voyageant par péniche sur un canal vers le nord. Le convoi s'arrête à une écluse et Kelsier, les recrues et les fournitures se dirigent vers les grottes où l'armée rebelle s'entraîne. Surmontant les souvenirs des Puits de Hathsin, il entre dans le complexe des Cavernes d'Arguois et inspecte l'armée que Ham a formée. Lors d'un dîner, Kelsier manipule les émotions de Bilg pour en faire un exemple. Bilg et Demoux se battent en duel ; Kelsier utilise l'allomancie pour aider Demoux. Après le duel, la confiance de l'armée monte en flèche car Yeden croit que Kelsier peut transmettre ses pouvoirs à d'autres.",
				season: 'Automne',
				year: '1021 FE',
			},
			'tfe-23': {
				title: 'Suivre Vin',
				description:
					"Kelsier apparaît à la fenêtre de la tour où Vin espionne le groupe d'Elend à la Forteresse Hasting. Il dédaigne leur bavardage idéaliste sur changer le monde comme un comportement typique de jeunes nobles ne menant jamais à un vrai changement. Tous deux partent chacun de leur côté.",
				season: 'Automne',
				year: '1021 FE',
			},
			'tfe-24': {
				title: 'Réunion de situation',
				description:
					"Kelsier arrive à la boutique de Clubs où une grande partie de l'équipe est rassemblée. Il discute de l'état de la mission et partage un verre nocturne avec Spook, Ham et Clubs. Il demande à Ham d'aller à la Garnison recueillir des informations.",
				season: 'Automne',
				year: '1021 FE',
			},
			'tfe-25': {
				title: 'Décision désespérée',
				description:
					"À la boutique de Clubs, Kelsier apprend que la rébellion skaa a attaqué la Garnison de Holstep et que celle de Luthadel marche vers le nord. Il décide de tenter d'avertir l'armée rebelle et fait avaler à Vin cinq billes d'étain pour une longue course d'étain vers le nord.",
				season: 'Fin d\'automne',
				year: '1021 FE',
			},
			'tfe-25.2': {
				title: 'Désastre à Holstep',
				description:
					"Kelsier et Vin courent seize heures sans arrêt en brûlant de l'étain. Ils tombent sur les restes de l'armée rebelle, encerclée et massacrée par la Garnison de Valtroux. Kelsier veut se battre, mais Vin le convainc qu'ils ne sont pas invincibles. Ils continuent vers les Cavernes d'Arguois, où 2 000 soldats ont survécu grâce à Mennis qui les avait maintenus prêts.",
				season: 'Fin d\'automne',
				year: '1021 FE',
			},
			'tfe-26': {
				title: 'Ramasser les morceaux',
				description:
					"De retour à la boutique de Clubs après deux semaines de voyage de retour des cavernes, l'équipe parle de l'avenir du plan : il semble être un échec total. Breeze accuse Kelsier de poursuivre la gloire. Kelsier admet le revers mais refuse d'abandonner la révolution.",
				season: 'Hiver',
				year: '1021 FE',
			},
			'tfe-26.2': {
				title: 'Les exécutions',
				description:
					"Spook annonce des exécutions à la Place de la Fontaine. L'équipe s'y rend et soudoie quelqu'un pour accéder au toit. Ils contemplent le massacre de nombreux skaa tandis que leur sang est versé dans la fontaine. Kelsier convainc l'équipe de continuer : « Voici notre ennemi. Il n'y a pas de quartier, pas de retour en arrière. »",
				season: 'Hiver',
				year: '1021 FE',
			},
			'tfe-27': {
				title: 'Nouvelle stratégie',
				description:
					"L'équipe revient à la boutique de Clubs pour planifier les prochaines étapes : déclencher une guerre entre les maisons nobles. Sazed apporte un message de Marsh indiquant à Kelsier où se retrouver dans les Méandres.",
				season: 'Hiver',
				year: '1021 FE',
			},
			'tfe-27.2': {
				title: "Le métal d'or",
				description:
					"Kelsier et Vin se rendent dans un bâtiment abandonné des Méandres, des heures avant la réunion avec Marsh. En attendant, Kelsier parle de l'or — le neuvième métal allomantique qui permet de voir une version alternative de son passé. Il explique aussi la féruchemie et donne un peu d'or à Vin pour qu'elle le brûle pour la première fois. Quand Marsh arrive, portant les tatouages d'un obligateur de bas rang du Canton de l'Inquisition, il décrit les stations d'apaisement à Luthadel et révèle que les Inquisiteurs peuvent mourir de vieillesse.",
				season: 'Hiver',
				year: '1021 FE',
			},
			'tfe-29': {
				title: 'Conseil de guerre à Renoux',
				description:
					"Kelsier retrouve la majeure partie de l'équipe au domaine de Renoux à Fellise pour examiner une carte très détaillée des défenses de Luthadel fournie par Marsh. En l'étudiant, ils découvrent que la bande de Theron a été attaquée récemment par le Ministère. Ce soir-là, incapable de dormir, Kelsier demande à Sazed de lui raconter quelques religions.",
				season: 'Hiver',
				year: '1021 FE',
			},
			'tfe-31': {
				title: "Réprimander l'apprentie",
				description:
					"Kelsier et Vin reviennent à la boutique de Clubs après que Vin a tué lady Shan Elariel — une Fils-des-brumes accomplie — à la Forteresse Venture. Kelsier réprimande Vin pour ce combat téméraire, mais elle lui réplique en criant que nobles et skaa ne sont pas si différents, et qu'Elend Venture est un homme bon qui mérite d'être protégé.",
				season: 'Hiver',
				year: '1021 FE',
			},
			'tfe-32': {
				title: 'Retrouver Marsh',
				description:
					"Kelsier et Vin trouvent le corps de Marsh, entièrement vidé de son sang, une coquille sans vie. De retour à la boutique de Clubs, ils découvrent une lettre de Marsh expliquant que les Inquisiteurs le trouveraient probablement.",
				season: 'Hiver',
				year: '1022 FE',
			},
			'tfe-32.2': {
				title: 'Détruire les Puits',
				description:
					"Kelsier retourne aux Puits de Hathsin, le lieu de ses plus grandes souffrances. Il tue tous les gardes et tend la main à un skaa nommé Wallin qui sort de la caverne. Puis il détruit tous les cristaux d'atium, coupant la ressource la plus précieuse du Seigneur Maître en une seule nuit.",
				season: 'Hiver',
				year: '1022 FE',
			},
			'tfe-33': {
				title: "Le refuge d'urgence",
				description:
					"Kelsier revient dans un sous-sol de secours humide près de la boutique de Clubs, à peine trois pièces. Il annonce qu'il a détruit tout l'atium des Puits de Hathsin.",
				season: 'Début de printemps',
				year: '1022 FE',
			},
			'tfe-33.2': {
				title: "Le combat contre l'Inquisiteur",
				description:
					"Tous suivent Kelsier jusqu'à la Place de la Fontaine. Ils voient Spook et lord Renoux dans un des chariots d'exécution. Kelsier se bat contre un Inquisiteur sur la place — un piège qu'il savait presque certainement tendu.",
				season: 'Début de printemps',
				year: '1022 FE',
			},
			'tfe-34': {
				title: 'Le dernier combat du Survivant',
				description:
					"Kelsier affronte l'Inquisiteur dans un combat à mort sur la Place de la Fontaine, tous deux brûlant de l'atium. C'est un maître de la Poussée et de la Traction, déplaçant le métal dans les airs avec expertise. Il tue l'Inquisiteur et les skaa commencent à scander « Le Survivant de Hathsin ». Le Seigneur Maître arrive dans un carrosse noir. Un des hommes de Ham lui plante une lance — il continue de marcher. Deux lances — toujours debout. Le Seigneur Maître gifle Kelsier, arrache une lance de son propre corps et la plonge dans Kelsier. Il meurt avec le sourire, devenant le martyr qui embrase la révolution.",
				season: 'Début de printemps',
				year: '1022 FE',
			},
			'tfe-35': {
				title: 'Au-delà de la mort',
				description:
					"Dans le refuge d'urgence près de la boutique de Clubs, l'équipe voit le kandra, autrefois lord Renoux, dans le corps et les os de Kelsier : le plan ultime. Kelsier avait laissé des lettres à chaque membre avec des instructions pour prendre la ville. Sa mort fut l'étincelle qui enflamma la révolution dans tout Luthadel.",
				season: 'Début de printemps',
				year: '1022 FE',
			},
		},
		vin: {
			...enData.movements.vin,
			// ── L'Empire ultime ────────────────────────────────────────────
			'tfe-1': {
				title: 'Orpheline des rues',
				description:
					"Vin est convoquée devant son chef de bande Camon, qui la traite durement. Elle utilise inconsciemment sa Chance — une forme d'apaisement allomantique — pour le calmer. Camon se fait passer pour lord Jedue, un noble désespéré en quête de nouveaux contrats, et prépare une escroquerie contre le Ministère de l'Acier. Vin utilise sa Chance sur l'obligateur prélat Laird pour qu'il ne refuse pas les suppliques de Camon.",
				season: 'Printemps',
				year: '1021 FE',
			},
			'tfe-2': {
				title: "L'escroquerie au Ministère",
				description:
					"Camon, en tant que lord Jedue, emmène Vin au Canton des Finances pour escroquer le Ministère. Vin utilise sa Chance sur le haut prélat, qui remet trois mille boxings à Camon. Kelsier et Dockson, assis dans la salle d'attente, détectent les pulsations allomantiques de Vin. Ensuite, ils voient un Inquisiteur d'Acier suivre le cortège de Camon.",
				season: 'Printemps',
				year: '1021 FE',
			},
			'tfe-4': {
				title: 'Recrutée',
				description:
					"Kelsier présente son plan pour renverser l'Empire ultime à l'équipe dans l'atelier de Clubs. L'équipe accepte, sauf Clubs qui part avant de revenir. Kelsier révèle que Vin est Fils-des-brumes et leur parle du Onzième Métal, en le leur montrant.",
				season: 'Printemps',
				year: '1021 FE',
			},
			'tfe-7': {
				title: 'Entraînement de Fils-des-brumes',
				description:
					"Kelsier emmène Vin pour sa première nuit d'entraînement et lui remet un manteau de brume. Il lui enseigne les huit métaux de base — étain, étain-lourd, fer, acier, zinc, laiton, cuivre et bronze — terminant la nuit aux remparts de Luthadel.",
				season: 'Fin de printemps',
				year: '1021 FE',
			},
			'tfe-8': {
				title: 'Le domaine Renoux',
				description:
					"Vin et Kelsier franchissent les murailles de Luthadel dans la nuit, où Vin rencontre un spectre de brume pour la première fois. Sur la route, Sazed attend avec un attelage et les conduit à Fellise. En chemin, Kelsier offre à Vin les trois mille boxings et l'option de partir. Elle prend l'argent mais reste pour voir comment tout cela finira. Au domaine de lord Renoux, celui-ci propose que Vin joue le rôle de lady Valette.",
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-9': {
				title: "S'entraîner avec Sazed",
				description:
					"Vin et Kelsier s'affrontent dans un combat d'entraînement au domaine Renoux. Ensuite, Vin se fait couper les cheveux et Sazed la questionne sur sa couverture noble, en lui parlant aussi du trélagisme. Kelsier et Sazed discutent ensuite en privé des progrès de Vin ; Kelsier annonce qu'ils assisteront à un bal à la Forteresse Venture en fin de semaine.",
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-10': {
				title: "Retour à l'équipe",
				description:
					"Vin revient à Luthadel depuis Fellise pour apprendre les métaux avec les brumeux de l'équipe, en commençant par Breeze, qui lui enseigne l'apaisement. Hammond arrive et débat de la moralité de renverser l'Empire ultime en attendant le discours de Kelsier.",
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-10.2': {
				title: "Le meeting de l'entrepôt",
				description:
					"Vin assiste au meeting secret dans le quartier des entrepôts où Kelsier prêche la révolution aux travailleurs skaa. Ensuite, Kelsier tient une réunion d'avancement à la boutique de Clubs. Vin et Lestibournes parlent de Marsh. La réunion prend fin quand un soldat de Hammond signale que le Ministère de l'Acier a découvert l'ancien repaire de Camon.",
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-11': {
				title: 'Le massacre du repaire de Camon',
				description:
					"Vin et l'équipe inspectent le repaire détruit, trouvant des cadavres partout. Parmi eux, Vin voit Ulef — quelqu'un lui a arraché la cage thoracique à mains nues. Sazed récite une prière de la religion cazzi. Le corps de Milev est trouvé attaché à une chaise, manifestement torturé. Après leur départ, Kelsier trouve le cadavre de Camon suspendu par un crochet dans sa bouche.",
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-12': {
				title: 'Premier bal à la Forteresse Venture',
				description:
					"Vin se rend à son premier bal à la Forteresse Venture, Sazed menant l'attelage. Kelsier apparaît en chemin, lui donne des conseils et replonge dans les brumes. Vin arrive et est présentée comme lady Valette Renoux. Au dîner, elle voit son père de l'autre côté de la salle. Elle refuse des invitations à danser et se retire sur un balcon à l'étage, où elle a sa première conversation avec Elend Venture, ce qui choque Sazed.",
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-13': {
				title: 'Retour à Fellise',
				description:
					"Sazed interroge Vin sur son interaction avec Elend au domaine Renoux. La vraie personnalité de Vin commence à émerger — ni la timide membre de bande ni lady Valette. Kelsier apprend que le père de Vin était au bal et repart dans les brumes.",
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-14': {
				title: 'Dans Kredik Shaw',
				description:
					"Kelsier conduit Vin à Kredik Shaw et ils se frayent un passage en combattant vers le bâtiment que le Seigneur Maître visite tous les trois jours. Vin tue pour la première fois. Trois Inquisiteurs d'Acier les encerclent. Pour se défendre contre des triangles métalliques aiguisés qu'on Pousse vers elle, Vin saisit un livre en cuir. Brûlant de l'atium, elle s'échappe temporairement avant qu'un Inquisiteur ne lui plante une hache d'obsidienne dans le flanc. Vin s'enfuit avec le livre, mais en perdant connaissance, quelque chose distrait l'Inquisiteur qui la poursuit et la prend dans une étreinte protectrice — ce n'était pas Kelsier.",
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-15': {
				title: 'Blessée',
				description:
					"L'équipe conteste la décision de Kelsier d'emmener Vin à Kredik Shaw. Sazed arrive en la portant. On lui administre de l'étain pour l'aider à guérir. Sazed l'opère et Ham la porte dans une chambre pour qu'elle se rétablisse. Kelsier et Dockson remarquent le livre ; Sazed l'identifie comme écrit en khlennien.",
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-16': {
				title: 'Convalescence à la boutique de Clubs',
				description:
					"Vin se réveille après deux semaines de repos à la boutique de Clubs. Spook a veillé sur elle et lui raconte comment Kelsier lui a donné son surnom. En discutant avec Dockson, Vin réalise qu'il y a quelque chose de très inhabituel chez Sazed.",
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-16.2': {
				title: 'Retour à Fellise',
				description:
					"Après quelques jours de repos supplémentaires, Vin retourne au domaine Renoux à Fellise. Elle parle avec Sazed, qui explique ce que sont les Gardiens et révèle que tous les intendants terrisiens sont des eunuques.",
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-17': {
				title: 'Le jardin du manoir Renoux',
				description:
					"Vin se lamente de quatre semaines d'ennuyeuse convalescence au domaine Renoux. Des membres de l'équipe arrivent pour discuter des nouvelles. Vin convainc Kelsier de la laisser assister au prochain bal. Plus tard, ils parlent de Mare, des motivations de Kelsier, et il lui explique le Craquement — l'événement traumatique qui éveille les pouvoirs allomantiques.",
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-18': {
				title: 'Bal à la Forteresse Elariel',
				description:
					"Vin assiste à un bal à la Forteresse Elariel avec Sazed. Elend Venture s'assoit à sa table et lit, comme d'habitude. Il complimente sa robe et la laisse bouche bée. Elle danse avec plusieurs nobles et se renseigne sur Elend ; elle entend parler de lady Shan Elariel. Après avoir beaucoup dansé, Vin est obligée de rencontrer Shan. Elle remarque que Shan peut apaiser. Le terrisien de Shan fouille les livres d'Elend ; Vin feuillette un petit livre presque séditieux. Elend revient, rassemble ses livres et part avec deux amis. Sazed les identifie comme Jastes Lekal et un Hasting. En quittant le bal, Vin voit un garde de la ville égorger un jeune aide-cuisinier skaa dans les brumes.",
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-19': {
				title: 'Retour à Fellise',
				description:
					"Kelsier rentre au manoir Renoux par la Route des Épines et retrouve Vin, Sazed et Renoux. Il fait la leçon à Vin au sujet des nobles, insistant qu'ils ne se soucient pas des skaa et qu'elle doit rester loin d'Elend Venture.",
				season: 'Fin d\'été',
				year: '1021 FE',
			},
			'tfe-20': {
				title: 'Leçons de chercheuse',
				description:
					"Vin revient de Luthadel et voit des caisses d'armes devant le manoir Renoux, prêtes pour la rébellion. Marsh arrive peu après et lui enseigne à chercher — utiliser le bronze pour détecter d'autres allomanciens — ainsi que des détails supplémentaires sur l'allomancie.",
				season: 'Fin d\'été',
				year: '1021 FE',
			},
			'tfe-22': {
				title: 'Le journal',
				description:
					"Vin lit sa copie du journal du Seigneur Maître au domaine Renoux quand Spook arrive. Il lui donne un mouchoir ; Sazed lui explique ensuite qu'un jeune homme signifie ainsi qu'il souhaite courtiser sérieusement une dame. En attendant Dockson, Vin parle avec Sazed du terrisien du journal ; Sazed révèle les secrets de la féruchemie et la formation des Gardiens. Vin parle ensuite avec Dockson, qui raconte comment lord Devinshae a pris la femme qu'il aimait et l'a tuée le lendemain matin.",
				season: 'Automne',
				year: '1021 FE',
			},
			'tfe-23': {
				title: 'Bal à la Forteresse Hasting',
				description:
					"Vin assiste au bal de la Forteresse Hasting, satisfaite de voir que les efforts de Kelsier portent leurs fruits. Lady Shan lui demande de fouiller les livres d'Elend la prochaine fois. Vin trouve Elend et lui demande s'il a couché avec une skaa. Il confesse que son père l'y a obligé à treize ans et que la femme a été tuée ensuite. Elend lui donne un mouchoir, signifiant son désir de la courtiser. Après être parti avec ses amis, Vin les suit avec l'allomancie jusqu'à une tour où ils discutent des défaillances du Seigneur Maître. Kelsier apparaît soudain et dédaigne les idées du groupe comme de l'idéalisme typique de jeunes.",
				season: 'Automne',
				year: '1021 FE',
			},
			'tfe-24': {
				title: "Réunion de l'équipe",
				description:
					"Vin et Kelsier arrivent à la boutique de Clubs où la majeure partie de l'équipe est rassemblée. Kelsier discute de l'état de la mission et Vin réalise combien elle aime sa nouvelle vie. Kelsier, Spook, Ham et Clubs partagent un verre nocturne.",
				season: 'Automne',
				year: '1021 FE',
			},
			'tfe-24.2': {
				title: 'Visite à la garnison',
				description:
					"Vin enfile ses vêtements de garçon des rues et sort avec Ham visiter la Garnison de Luthadel pour en apprendre plus sur l'étain. Ham explique que beaucoup de soldats sont des skaa ordinaires. Un garde nommé Sertes les informe que la Garnison se mobilise — une rébellion skaa a attaqué la Garnison de Holstep au nord.",
				season: 'Automne',
				year: '1021 FE',
			},
			'tfe-25': {
				title: 'Nouvelles urgentes',
				description:
					"À la boutique de Clubs, Ham annonce que la Garnison de Luthadel marche vers Holstep. Kelsier fait avaler à Vin cinq billes d'étain pour courir vers le nord avertir l'armée rebelle.",
				season: 'Fin d\'automne',
				year: '1021 FE',
			},
			'tfe-25.2': {
				title: "La course de l'étain",
				description:
					"Vin et Kelsier courent seize heures sans arrêt en brûlant de l'étain lors d'une course désespérée. Ils tombent sur les restes de l'armée rebelle, encerclée et massacrée par la Garnison de Valtroux. Kelsier veut se battre, mais Vin le convainc qu'ils ne sont pas invincibles. Ils se dirigent vers les Cavernes d'Arguois, où 2 000 soldats ont survécu grâce à Mennis.",
				season: 'Fin d\'automne',
				year: '1021 FE',
			},
			'tfe-26': {
				title: 'Récupération',
				description:
					"Vin gît épuisée au lit à la boutique de Clubs. Il leur a fallu deux semaines pour revenir à Luthadel. Kelsier fait irruption ; Breeze l'accuse de courir après la gloire. Kelsier admet le revers mais refuse d'abandonner.",
				season: 'Fin d\'automne',
				year: '1021 FE',
			},
			'tfe-26.2': {
				title: 'Les exécutions',
				description:
					"Spook annonce des exécutions à la Place de la Fontaine. L'équipe s'y rend et soudoie quelqu'un pour accéder au toit. Vin identifie son père devant Kelsier — un obligateur nommé Tevidian, lord Prélat et le plus haut obligateur, au-dessus même des Inquisiteurs. Ils regardent des femmes et des enfants tirés d'un chariot-prison et exécutés, la fontaine rouge de sang.",
				season: 'Fin d\'automne',
				year: '1021 FE',
			},
			'tfe-27': {
				title: 'Planifier les prochaines étapes',
				description:
					"L'équipe revient à la boutique de Clubs. Kelsier, Vin et les autres replanifient comment avancer et déclencher une guerre des maisons. Sazed arrive avec une lettre de Marsh et des indications de rendez-vous.",
				season: 'Hiver',
				year: '1021 FE',
			},
			'tfe-27.2': {
				title: 'Rencontre avec Marsh',
				description:
					"Kelsier et Vin se rendent dans un bâtiment abandonné des Méandres pour rencontrer Marsh. En attendant, Kelsier parle de l'or — le neuvième métal allomantique. Marsh arrive avec les tatouages d'un obligateur de bas rang du Canton de l'Inquisition. Il révèle que le Ministère place des apaiseurs dans les régions skaa sous apaisement constant, dissimulés par des enfumeurs. Marsh confirme aussi que les Inquisiteurs peuvent mourir de vieillesse.",
				season: 'Hiver',
				year: '1021 FE',
			},
			'tfe-28': {
				title: 'Bal à la Forteresse Lekal',
				description:
					"Vin assiste à un bal à la Forteresse Lekal et commence à répandre des rumeurs pour allumer les guerres des maisons. Elend la surprend — il dit vouloir l'embrasser, mais Vin insiste qu'il ne la connaît pas vraiment. Ils font une promenade et Elend révèle que la fortune des Venture provient entièrement de l'extraction d'atium aux Puits de Hathsin. Il mentionne aussi que les Tekiel ont été tués par la Maison Hasting et tente de convaincre Valette de quitter Luthadel.",
				season: 'Hiver',
				year: '1021 FE',
			},
			'tfe-29': {
				title: 'La dernière traduction',
				description:
					"Vin lit la dernière traduction du journal faite par Sazed au manoir Renoux et est déçue qu'il n'y en ait plus. Sazed lui explique la féruchemie plus en détail et elle essaie de brûler un de ses esprits d'étain. Plus tard, Kelsier rejoint l'équipe pour étudier une carte de Marsh. Ils découvrent que la bande de Theron a été attaquée, et Vin soupçonne que les Inquisiteurs sont toujours à ses trousses.",
				season: 'Hiver',
				year: '1021 FE',
			},
			'tfe-30': {
				title: 'Le bal Venture',
				description:
					"Vin assiste au dernier bal des maisons à la Forteresse Venture avec Sazed. Lady Kliss se révèle informatrice et tente de faire chanter la Maison Renoux. En échange d'un collier de saphir, Kliss révèle à Vin que des assassins Elariel tenteront de tuer Elend ce soir. Vin force Kliss allomantiquement à tout révéler. Elle brise un vitrail pour s'enfuir. Dehors, elle affronte deux brutes, deux lanceurs de pièces et deux Fils-des-brumes — dont Shan Elariel. Vin la piège en épuisant son atium avant elle, et la tue.",
				season: 'Hiver',
				year: '1021 FE',
			},
			'tfe-31': {
				title: 'Après le duel',
				description:
					"Vin débarque bandée et en lambeaux dans la cuisine de Clubs. Kelsier la réprimande pour avoir sauvé Elend, mais Vin crie que skaa et nobles ne sont pas différents — Elend est un homme bon. Sur le toit, Vin dit à Kelsier que la Maison Venture gère les Puits et partage sa théorie selon laquelle les Inquisiteurs voient à travers les nuages de cuivre. Kelsier teste la théorie et la confirme.",
				season: 'Hiver',
				year: '1021 FE',
			},
			'tfe-32': {
				title: 'Surveillance du toit',
				description:
					"Vin et Spook montent la garde du toit au-dessus de la boutique de Clubs. Spook lui enseigne des astuces avec l'étain : ce n'est pas qu'une question d'amplifier les sens, mais de filtrer les distractions. Plus tard, Kelsier et Vin trouvent le corps de Marsh — vidé de son sang. Ils découvrent une lettre expliquant que les Inquisiteurs le trouveraient probablement.",
				season: 'Hiver',
				year: '1021 FE',
			},
			'tfe-33': {
				title: "Le refuge d'urgence",
				description:
					"L'équipe s'installe dans un sous-sol de secours humide près de la boutique de Clubs — trois pièces. Kelsier annonce avoir détruit tout l'atium des Puits. Spook monte la garde en tant que brumeux d'étain.",
				season: 'Début de printemps',
				year: '1022 FE',
			},
			'tfe-33.2': {
				title: "Le combat contre l'Inquisiteur",
				description:
					"Tous suivent Kelsier à la Place de la Fontaine. Ils voient Spook et lord Renoux dans un chariot d'exécution. Kelsier se bat contre un Inquisiteur sur la place. Elend voit les serviteurs Renoux emprisonnés et appelle Valette, sans la trouver.",
				season: 'Début de printemps',
				year: '1022 FE',
			},
			'tfe-34': {
				title: 'La mort du Survivant',
				description:
					"Kelsier affronte l'Inquisiteur dans un combat total à la Place de la Fontaine, tous deux brûlant de l'atium. Vin observe d'en haut — Kelsier est un vrai maître de la Poussée et de la Traction. Il tue l'Inquisiteur et les skaa scandent « Le Survivant de Hathsin ». Le Seigneur Maître arrive dans un carrosse noir. Kelsier est abattu. Vin saute et le tient dans ses bras tandis qu'il meurt.",
				season: 'Début de printemps',
				year: '1022 FE',
			},
			'tfe-35': {
				title: "L'héritage du Survivant",
				description:
					"Vin retourne au refuge d'urgence. Elle est furieuse que Kelsier n'ait pas été honnête — il avait prévu de mourir et de l'abandonner. Sazed offre des paroles de réconfort. Dehors, les skaa parlent du Seigneur des Brumes. Dans un entrepôt voisin, l'équipe voit le kandra sous la forme de Kelsier. Kelsier avait laissé des lettres avec des instructions pour prendre la ville. La lettre de Vin dit qu'il n'a jamais résolu le mystère du Onzième Métal. Elle décide de découvrir ce que cache le Seigneur Maître.",
				season: 'Début de printemps',
				year: '1022 FE',
			},
			'tfe-36': {
				title: 'Dans Kredik Shaw',
				description:
					"Vin marche en silence vers Kredik Shaw, encourageant les gardes extérieurs à rejoindre la rébellion. À l'intérieur, elle tue deux Inquisiteurs et découvre que la poussière d'étain altère sa vision. Dans la chambre suivante, un vieil homme est assis sur une chaise. Un Inquisiteur saisit Vin à la gorge — le vieil homme parle et les Inquisiteurs l'appellent le Seigneur Maître. Mais Vin est confuse : le Seigneur Maître de la Place de la Fontaine était un homme jeune. Elle brûle le Onzième Métal et voit deux silhouettes fantomatiques près du vieil homme.",
				season: 'Début de printemps',
				year: '1022 FE',
			},
			'tfe-37': {
				title: 'Sauvetage et révélation',
				description:
					"Les Inquisiteurs forcent Vin à brûler un métal qui annule tous les autres. Elle est amenée devant le Seigneur Maître sur son trône — la version jeune, l'homme qui a tué Kelsier. Tevidian, père de Vin et obligateur le plus haut gradé, est exécuté par les Inquisiteurs. Vin découvre que Reen ne l'a jamais dénoncée — il a enduré la torture et dit aux Inquisiteurs qu'elle était morte de faim depuis longtemps. Sazed est amené dans sa cellule et libère sa force féruchemique pour enfoncer la porte. Elend et six soldats font irruption. Vin trouve son manteau et un flacon de métaux. Elend sait maintenant qu'elle est Fils-des-brumes. Elle lui prend la tête et l'embrasse, puis part tuer le Seigneur Maître.",
				season: 'Début de printemps',
				year: '1022 FE',
			},
			'tfe-38': {
				title: 'Assassin du Seigneur Maître',
				description:
					"Vin bondit entre les aiguilles de Kredik Shaw jusqu'au sommet. L'Inquisiteur Kar l'attrape à la gorge, mais un second Inquisiteur s'approche et arrache un clou métallique du cou de Kar, le tuant instantanément. C'est Marsh — vivant, avec onze clous dans le corps. Il a tué tous les autres Inquisiteurs. Le vrai nom du Seigneur Maître est Rashek : il a assassiné le Héros des Siècles et pris sa place. Vin arrache les bracelets du Seigneur Maître. Sans sa jeunesse féruchemique, il devient un vieil homme faible. Sazed apparaît avec un flacon de métaux. Vin lui plonge une lance en plein cœur. Mille ans d'oppression prennent fin.",
				season: 'Début de printemps',
				year: '1022 FE',
			},
			'tfe-39': {
				title: 'Une nouvelle ère',
				description:
					"Sazed, Marsh et Vin se tiennent sur un bâtiment près du quartier skaa. Sazed explique que le Seigneur Maître était à la fois féruchemiste et allomancien — les bracelets stockaient sa jeunesse. Marsh décrit sa survie et sa transformation : onze clous métalliques, deux par les yeux, huit dans la poitrine, un dans le dos. Il leur parle aussi des kandras, créatures ayant évolué à partir des spectres de brume, qui voient désormais Vin comme leur maîtresse.",
				season: 'Printemps',
				year: '1022 FE',
			},
			'tfe-39.2': {
				title: 'Vin et Elend',
				description:
					"Vin observe secrètement Elend depuis les brumes devant la Forteresse Venture. Sa réunion avec les dirigeants skaa et nobles s'est bien passée — après un discours formidable que même Sazed n'a pu mémoriser entièrement sans ses métaux, tous l'ont accepté comme roi. Elend rédige le nouveau code de lois. Vin se souvient que Reen ne l'a jamais trahie aux Inquisiteurs : il existe des gens qui l'aiment vraiment. Elle court vers Elend et ils s'étreignent.",
				season: 'Printemps',
				year: '1022 FE',
			},
		},
		sazed: {
			...enData.movements.sazed,
			// ── L'Empire ultime ────────────────────────────────────────────
			'tfe-9': {
				title: "L'intendant terrisien",
				description:
					"Sazed arrive au domaine de lord Renoux à Fellise comme tuteur et intendant de Vin, lui enseignant l'étiquette, la danse et les bonnes manières. Il lui parle du trélagisme — la cinquième religion qu'il lui propose — et admet en connaître 562 autres.",
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-10.2': {
				title: "Le meeting de l'entrepôt",
				description:
					"Sazed assiste au meeting secret de l'entrepôt avec Kelsier et Vin, observant le Survivant prêcher la révolution aux travailleurs skaa.",
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-12': {
				title: 'Gardien au bal',
				description:
					"Sazed accompagne Vin en tant qu'intendant à son premier bal à la Forteresse Venture, veillant sur elle tandis qu'elle s'infiltre dans la société noble.",
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-13': {
				title: 'Débriefing à Fellise',
				description:
					"Sazed revient au domaine Renoux à Fellise avec Vin et Kelsier pour examiner les résultats du premier bal de Vin et planifier les prochaines étapes.",
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-15': {
				title: 'Sauver Vin',
				description:
					"Sazed porte Vin à la boutique de Clubs pour la sauver et l'opérer après sa blessure à Kredik Shaw. Il examine aussi un livre écrit en khlennien récupéré lors de la mission de reconnaissance.",
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-16': {
				title: 'Retour à Fellise',
				description:
					"Après avoir stabilisé Vin à la boutique de Clubs, Sazed retourne au domaine Renoux à Fellise.",
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-17': {
				title: 'Traduire le livre khlennien',
				description:
					"Dans la bibliothèque du domaine Renoux à Fellise, Sazed travaille à traduire le livre écrit en khlennien que Vin a récupéré lors de la mission de reconnaissance à Kredik Shaw.",
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-18': {
				title: 'Gardien à la Forteresse Elariel',
				description:
					"Sazed accompagne Vin en tant qu'intendant terrisien au bal de la Forteresse Elariel, veillant sur elle tandis qu'elle navigue la cour noble.",
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-19': {
				title: "Échange d'informations",
				description:
					"Sazed est au manoir Renoux quand Kelsier revient par la Route des Épines. Ils échangent des informations sur les maisons nobles et le progrès de la rébellion, tandis que Kelsier sermonne Vin de rester loin d'Elend.",
				season: 'Fin d\'été',
				year: '1021 FE',
			},
			'tfe-22': {
				title: 'Secrets de la féruchemie',
				description:
					"Au domaine Renoux, Sazed parle avec Vin du terrisien du journal du Seigneur Maître. Il révèle les secrets de la féruchemie et comment les Gardiens furent fondés pour tout préserver après la perte de la religion terrisienne. Il apprend aussi de nouvelles choses sur son peuple à travers le journal — que la terre était autrefois verte et fertile.",
				season: 'Automne',
				year: '1021 FE',
			},
			'tfe-23': {
				title: 'Gardien à la Forteresse Hasting',
				description:
					"Sazed accompagne Vin en tant qu'intendant terrisien au bal de la Forteresse Hasting, attendant pendant qu'elle répand des rumeurs et parle avec les nobles.",
				season: 'Automne',
				year: '1021 FE',
			},
			'tfe-27': {
				title: 'Le message de Marsh',
				description:
					"Sazed revient à la boutique de Clubs avec une lettre de Marsh contenant des nouvelles et des instructions pour un rendez-vous. Il apporte aussi des traductions du journal du Seigneur Maître.",
				season: 'Hiver',
				year: '1021 FE',
			},
			'tfe-28': {
				title: 'Gardien à la Forteresse Lekal',
				description:
					"Sazed accompagne Vin en tant qu'intendant terrisien au bal de la Forteresse Lekal, attendant pendant qu'elle travaille à allumer les guerres des maisons et parle avec Elend.",
				season: 'Hiver',
				year: '1021 FE',
			},
			'tfe-29': {
				title: 'Leçons de féruchemie',
				description:
					"Au domaine Renoux, Sazed remet à Vin les dernières traductions du journal. Il explique la féruchemie plus en détail et Vin essaie de brûler un de ses esprits d'étain. Plus tard, Sazed rejoint l'équipe quand Kelsier examine une carte détaillée de Marsh. Ce soir-là, incapable de dormir, Kelsier demande à Sazed de lui raconter des religions.",
				season: 'Hiver',
				year: '1021 FE',
			},
			'tfe-30': {
				title: 'Gardien à la Forteresse Venture',
				description:
					"Sazed accompagne Vin au dernier bal des maisons à la Forteresse Venture. Les invités scellent des alliances et lady Valette reçoit un accueil froid. Sazed quitte le bal avant que Vin ne découvre le complot d'assassinat contre Elend et ne combatte Shan Elariel.",
				season: 'Hiver',
				year: '1021 FE',
			},
			'tfe-31': {
				title: 'Soigner les blessures de Vin',
				description:
					"Sazed soigne les blessures de Vin à la boutique de Clubs après qu'elle soit arrivée mal en point de son combat contre Shan Elariel et les assassins Elariel. Il écoute tandis que Vin raconte les événements de la soirée.",
				season: 'Hiver',
				year: '1021 FE',
			},
			'tfe-33': {
				title: "Le refuge d'urgence",
				description:
					"Sazed est avec l'équipe dans le refuge de secours près de la boutique de Clubs, après que Kelsier a détruit les Puits de Hathsin. Vin parle avec Sazed du Onzième Métal. Quand des skaa sont amenés pour être exécutés à la Place de la Fontaine et que Spook apparaît dans un chariot de prisonniers, Sazed reste au refuge tandis que Kelsier combat l'Inquisiteur.",
				season: 'Début de printemps',
				year: '1022 FE',
			},
			'tfe-35': {
				title: 'Consoler Vin',
				description:
					"Sazed est avec Vin dans le refuge de secours après la mort de Kelsier. Il offre des paroles de réconfort tandis que Vin rage que Kelsier l'a abandonnée. Il reste en arrière quand l'équipe va à l'entrepôt voir le kandra sous la forme de Kelsier.",
				season: 'Début de printemps',
				year: '1022 FE',
			},
			'tfe-37': {
				title: 'Le féruchemiste déchaîné',
				description:
					"Sazed est amené dans la cellule de Vin à Kredik Shaw. Il semble se dégonfler, puis ses muscles enflent au double de leur taille en libérant la force féruchemique stockée, enfonçant la porte.",
				season: 'Début de printemps',
				year: '1022 FE',
			},
			'tfe-38': {
				title: "La chute de l'Empire",
				description:
					"Sazed apparaît lors de la confrontation finale à Kredik Shaw avec un flacon de métaux pour Vin. Il assiste à la chute du Seigneur Maître quand Vin arrache ses bracelets et que son âge augmente dramatiquement.",
				season: 'Début de printemps',
				year: '1022 FE',
			},
			'tfe-39': {
				title: 'Comprendre le tyran',
				description:
					"Sazed se tient avec Vin et Marsh sur un bâtiment près du quartier skaa. Il explique que le Seigneur Maître était à la fois féruchemiste et allomancien — les bracelets stockaient sa jeunesse. Il suppose que c'est pour cela que tous les intendants terrisiens devaient être des eunuques : le Seigneur Maître craignait que quelqu'un avec du sang féruchemique et allomantique ne défie son immortalité. Il regrette de ne pas avoir pu mémoriser entièrement le formidable discours d'Elend aux nouveaux dirigeants — il n'avait pas ses métaux.",
				season: 'Printemps',
				year: '1022 FE',
			},
		},
		elend: {
			...enData.movements.elend,
			// ── L'Empire ultime ────────────────────────────────────────────
			'tfe-12': {
				title: 'Le noble lecteur',
				description:
					"Elend Venture remarque Vin seule sur un balcon lors d'un bal dans sa propre forteresse et s'approche. Il l'agace en sortant Épreuves du monument et en commençant à lire tandis que le reste de la noblesse danse et intrigue autour d'eux.",
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-18': {
				title: 'Une soirée avec Valette',
				description:
					"Elend assiste au bal de la Forteresse Elariel, où il s'assoit à la table avec Vin et lit, comme d'habitude. Il complimente sa robe, la laissant bouche bée.",
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-23': {
				title: 'Le mouchoir',
				description:
					"Elend trouve Vin au bal de la Forteresse Hasting. Elle lui demande s'il a couché avec une skaa. Il confesse que son père l'y a obligé à treize ans et que la femme a été tuée ensuite, mais qu'il ne l'a plus jamais fait. Il donne un mouchoir à Vin, signifiant son désir de la courtiser. Après être parti avec ses amis, ils montent dans une tour pour discuter des défaillances du Seigneur Maître.",
				season: 'Automne',
				year: '1021 FE',
			},
			'tfe-28': {
				title: 'Bal à la Forteresse Lekal',
				description:
					"Elend surprend Vin au bal de la Forteresse Lekal. Il dit vouloir l'embrasser, mais Vin insiste qu'il ne la connaît pas vraiment. Ils se promènent et Elend révèle que la fortune des Venture provient entièrement de l'extraction d'atium aux Puits de Hathsin — lui faisant entièrement confiance. Il mentionne que les Tekiel ont été tués par la Maison Hasting et tente de convaincre Valette de quitter Luthadel.",
				season: 'Hiver',
				year: '1021 FE',
			},
			'tfe-28.2': {
				title: "L'appel du père",
				description:
					"Elend retourne à la Forteresse Venture et tente de passer discrètement devant la chambre de son père. Lord Straff Venture, un brumeux d'étain qui ne laisse rien passer, l'appelle. Straff lui ordonne de dîner le lendemain avec la Maison Hasting et une de leurs filles. Plus tard, Jastes arrive et révèle qu'il a fait suivre l'attelage de lady Valette — elle est arrivée à Fellise avec seulement le terrisien, Valette avait disparu. Elend, réalisant qu'il a révélé le secret de l'atium, propose un marché à son père : il ira au déjeuner en échange d'espions pour surveiller Valette.",
				season: 'Hiver',
				year: '1021 FE',
			},
			'tfe-30': {
				title: 'Le bal Venture',
				description:
					"Elend dîne avec son père à la Forteresse Venture pendant le bal. Vin attire son attention et ils ont une confrontation. Elend dit des choses blessantes ; cependant, quand Vin apprend qu'il y aura une tentative d'assassinat contre Elend ce soir-là, elle court dans les brumes chercher les assassins. La soirée se termine dans le chaos quand Vin combat et tue lady Shan Elariel. Dans la confusion, Elend parvient à s'éclipser.",
				season: 'Hiver',
				year: '1021 FE',
			},
			'tfe-31': {
				title: "Les rapports d'espionnage",
				description:
					"Elend et Jastes rencontrent Felt, qui relate tout ce que les espions d'Elend ont découvert sur la boutique de Clubs et ses occupants. Après le départ de Felt et Jastes, les gardes Venture amènent Elend devant son père Straff, qui révèle que Shan Elariel était une Fils-des-brumes envoyée pour assassiner Elend. Elend sait désormais qu'une bande de voleurs skaa opère près de la Forteresse Venture — et que Valette est liée à eux.",
				season: 'Hiver',
				year: '1021 FE',
			},
			'tfe-33': {
				title: "Les chariots d'exécution",
				description:
					"Elend voit les serviteurs de Renoux emprisonnés dans un chariot d'exécution à la Place de la Fontaine. Il appelle Valette à grands cris, sans la trouver dans la foule.",
				season: 'Début de printemps',
				year: '1022 FE',
			},
			'tfe-34': {
				title: 'Kelsier sauve Elend',
				description:
					"Elend arrive à la cage de Renoux à la Place de la Fontaine et demande Valette. Un Inquisiteur atterrit sur la cage et s'apprête à frapper Elend avec sa hache quand Kelsier attaque l'Inquisiteur, lui sauvant la vie. Kelsier crie à Elend que Valette va bien et les gardes du corps l'entraînent.",
				season: 'Début de printemps',
				year: '1022 FE',
			},
			'tfe-36': {
				title: "Autorité de la Maison Venture",
				description:
					"Le père d'Elend l'informe qu'une rébellion skaa a éclaté et veut fuir Luthadel. Elend refuse de partir. Straff accepte, espérant qu'Elend mourra, et lui transfère l'autorité de la Maison Venture. Elend ordonne à ses soldats de se rendre à la Forteresse Lekal pour une défense mutuelle, puis prend ses cinq meilleurs soldats et va se présenter aux dirigeants skaa.",
				season: 'Début de printemps',
				year: '1022 FE',
			},
			'tfe-37': {
				title: 'Sauver Vin',
				description:
					"Elend offre de l'or à des skaa pour être conduit à Dockson et leur dit que la Maison Venture ne résistera pas à la rébellion — ils devraient coopérer. Ensuite, Elend et six soldats font irruption dans Kredik Shaw pour sauver Vin. Le secret est découvert — il sait qu'elle est Fils-des-brumes. Vin lui prend la tête et l'embrasse, puis part tuer le Seigneur Maître.",
				season: 'Début de printemps',
				year: '1022 FE',
			},
			'tfe-38': {
				title: 'Le roi philosophe',
				description:
					"Après la mort du Seigneur Maître, Elend émerge comme une voix unificatrice réclamant l'ordre. Il commence à se réunir avec des dirigeants skaa et nobles pour rédiger un code de lois pour la nouvelle nation.",
				season: 'Début de printemps',
				year: '1022 FE',
			},
			'tfe-39': {
				title: 'Le nouveau roi',
				description:
					"Elend Venture est accepté comme roi de la Dominance Centrale après un formidable discours devant dirigeants skaa et nobles. Il s'assied à la Forteresse Venture pour rédiger le nouveau code de lois du royaume. Vin l'observe secrètement depuis les brumes à travers la fenêtre avant de courir vers lui — ils s'étreignent.",
				season: 'Printemps',
				year: '1022 FE',
			},
		},
		marsh: {
			...enData.movements.marsh,
			// ── L'Empire ultime ────────────────────────────────────────────
			'tfe-7': {
				title: 'Le frère réticent',
				description:
					"Marsh arrive à la boutique de Clubs, frère aîné de Kelsier et lui-même un chef rebelle. Il se joint au plan de l'équipe à contrecœur.",
				season: 'Fin de printemps',
				year: '1021 FE',
			},
			'tfe-10.2': {
				title: "Le meeting de l'entrepôt",
				description:
					"Marsh assiste au meeting secret de l'entrepôt avec l'équipe, regardant son frère Kelsier prêcher la révolution aux travailleurs skaa rassemblés.",
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-20': {
				title: 'Enseigner à Vin',
				description:
					"Marsh arrive au domaine Renoux à Fellise pour enseigner à Vin à chercher — utiliser le bronze pour détecter d'autres allomanciens brûlant des métaux, identifier leur type et distinguer les brumeux des Fils-des-brumes. Il lui enseigne aussi le cuivre et comment les enfumeurs peuvent dissimuler les pulsations allomantiques.",
				season: 'Fin d\'été',
				year: '1021 FE',
			},
			'tfe-27': {
				title: "L'infiltration du Ministère",
				description:
					"Marsh retrouve Kelsier et Vin dans un bâtiment abandonné des Méandres, portant les tatouages d'un obligateur de bas rang du Canton de l'Inquisition. Il s'est véritablement infiltré dans le Ministère. Il révèle que le Ministère place des apaiseurs dans les régions skaa sous apaisement constant, dissimulés par des enfumeurs. Il confirme aussi que les Inquisiteurs peuvent mourir de vieillesse.",
				season: 'Hiver',
				year: '1021 FE',
			},
			'tfe-30': {
				title: 'Disparition',
				description:
					"Marsh se tait, ses communications cessent alors qu'il disparaît dans les niveaux les plus profonds du Canton de l'Inquisition. L'équipe craint le pire.",
				season: 'Hiver',
				year: '1021 FE',
			},
			'tfe-32': {
				title: 'Le corps',
				description:
					"Kelsier et Vin trouvent le corps de Marsh, entièrement vidé de son sang, une coquille sans vie. Sa lettre, trouvée plus tard à la boutique de Clubs, explique que les Inquisiteurs le trouveraient probablement. L'équipe le pleure. Mais le cadavre mutilé n'est pas ce qu'il semble.",
				season: 'Hiver',
				year: '1022 FE',
			},
			'tfe-38': {
				title: "L'Inquisiteur",
				description:
					"Marsh apparaît pendant l'assaut final sur Kredik Shaw — vivant, transformé avec onze clous métalliques : deux par les yeux, huit dans la poitrine, un dans le dos les reliant. Il tue l'Inquisiteur Kar en arrachant un clou de son cou et révèle qu'il a tué tous les autres Inquisiteurs.",
				season: 'Début de printemps',
				year: '1022 FE',
			},
			'tfe-39': {
				title: 'Onze clous',
				description:
					"Marsh se tient avec Sazed et Vin sur un bâtiment près du quartier skaa. Il parle de sa survie et de sa transformation — onze clous, le processus horrible et comment il a résisté. Il leur parle aussi des kandras, créatures ayant évolué à partir des spectres de brume, et que celui qui jouait lord Renoux reconnaît désormais Vin comme sa maîtresse.",
				season: 'Printemps',
				year: '1022 FE',
			},
		},
		spook: {
			...enData.movements.spook,
			// ── L'Empire ultime ────────────────────────────────────────────
			'tfe-7': {
				title: "Le jeune brumeux d'étain",
				description:
					"Spook, le jeune neveu de Clubs, travaille comme guetteur et messager pour l'équipe à l'atelier de menuiserie, parlant en argot épais de l'est.",
				season: 'Fin de printemps',
				year: '1021 FE',
			},
			'tfe-9': {
				title: 'Courses de messager',
				description:
					"Spook transmet des messages entre la boutique de Clubs à Luthadel et le domaine Renoux à Fellise ; ses sens amplifiés par l'étain font de lui un éclaireur exceptionnel.",
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-16': {
				title: 'Veiller sur Vin',
				description:
					"Lestibournes veille sur Vin blessée à la boutique de Clubs, présent quand elle se réveille de ses blessures de la mission de reconnaissance à Kredik Shaw. Il raconte que Kelsier lui a donné un nouveau nom : Spook.",
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-22': {
				title: 'Le mouchoir',
				description:
					"Spook visite le domaine Renoux à Fellise et trouve Vin en train de lire le journal du Seigneur Maître. Il dit que Dockson est venu chercher plus d'armes et, rougissant et nerveux, lui offre un mouchoir avant de s'enfuir en courant. Sazed explique ensuite à Vin qu'un jeune homme signifie ainsi son souhait de courtiser sérieusement une dame.",
				season: 'Automne',
				year: '1021 FE',
			},
			'tfe-24': {
				title: 'Soirée à la boutique de Clubs',
				description:
					"Spook partage un verre nocturne avec Kelsier, Ham et Clubs à la boutique de Clubs tandis que l'équipe discute de l'état de la mission.",
				season: 'Automne',
				year: '1021 FE',
			},
			'tfe-26': {
				title: 'Les exécutions',
				description:
					"Spook fait irruption dans la boutique de Clubs pour annoncer des exécutions à la Place de la Fontaine. Il accompagne l'équipe à la place, où ils assistent à la brutale exécution publique de femmes et enfants skaa, leur sang versé dans la fontaine.",
				season: 'Fin d\'automne',
				year: '1021 FE',
			},
			'tfe-32': {
				title: 'Surveillance du toit',
				description:
					"Spook fait le guet depuis le toit de la boutique de Clubs avec Vin, lui enseignant des astuces d'étain. Il explique qu'il ne s'agit pas seulement d'amplifier les sens, mais de filtrer l'important et de ne pas se laisser distraire par le reste.",
				season: 'Hiver',
				year: '1022 FE',
			},
			'tfe-33': {
				title: 'Guetteur de garde',
				description:
					"Quand l'équipe va à la Place de la Fontaine, Spook est aperçu dans un des chariots d'exécution aux côtés de lord Renoux — capturé par le Ministère.",
				season: 'Début de printemps',
				year: '1022 FE',
			},
			'tfe-34': {
				title: 'Témoin du sacrifice',
				description:
					"Spook observe depuis la foule Kelsier combattre et mourir à la Place de la Fontaine — un événement qui marquera le reste de sa vie. Le sacrifice du Survivant transforme la compréhension de Spook de ce que signifie servir une cause.",
				season: 'Début de printemps',
				year: '1022 FE',
			},
			'tfe-38': {
				title: 'La révolution',
				description:
					"Spook se bat aux côtés de l'équipe pendant la révolution finale, aidant à coordonner le soulèvement skaa dans les rues de Luthadel.",
				season: 'Début de printemps',
				year: '1022 FE',
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
};
