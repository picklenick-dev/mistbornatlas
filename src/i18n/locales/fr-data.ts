/**
 * French data translations.
 * Sources: Official Orbit / Calmann-Lévy editions, translated by Mélanie Fazi.
 * Key terminology: Lord Ruler = Seigneur Maître, Mistborn = Fils-des-brumes,
 * Ruin = Ravage, Preservation = Sauvegarde, Steel Ministry = Ministère de l'Acier.
 */
import type { DataTranslations } from '../types';

export const frData: DataTranslations = {
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
		vin: {
			'tfe-1': {
				title: 'Gamine des rues',
				description:
					'Vin travaille comme guetteuse pour la bande de voleurs de Camon dans les bas-fonds de Luthadel, utilisant inconsciemment ses pouvoirs allomantiques pour influencer subtilement son entourage.',
				season: 'Printemps',
				year: '1021 FE',
			},
			'tfe-2': {
				title: "L'arnaque au Ministère",
				description:
					"Vin accompagne la bande de Camon pour une escroquerie audacieuse au Canton des Finances, où ses pulsations allomantiques attirent l'attention de Kelsier.",
				season: 'Printemps',
				year: '1021 FE',
			},
			'tfe-4': {
				title: 'Recrutée',
				description:
					'Après que Kelsier a sauvé Vin des coups de Camon, elle est conduite à la menuiserie de Clubs — le quartier général de la bande — et présentée au plan de renversement du Seigneur Maître.',
				season: 'Printemps',
				year: '1021 FE',
			},
			'tfe-7': {
				title: 'Entraînement de Fille-des-brumes',
				description:
					"Kelsier emmène Vin près des remparts de la ville, du côté de la Porte d'Acier, pour son premier véritable entraînement à l'Allomancie, lui apprenant à brûler l'acier et le fer parmi les toits sombres.",
				season: 'Fin du printemps',
				year: '1021 FE',
			},
			'tfe-8': {
				title: 'Le domaine Renoux',
				description:
					"Vin se rend à l'ouest, à Fellise, pour commencer sa couverture en tant que Dame Valette Renoux au domaine campagnard du seigneur Renoux, se préparant à infiltrer la haute société noble.",
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-9': {
				title: 'Formation avec Sazed',
				description:
					"Sous la tutelle de Sazed au domaine Renoux, Vin apprend l'étiquette, la danse et le maintien nécessaires pour se faire passer pour une noble lors des grands bals.",
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-10': {
				title: "Retour à l'équipe",
				description:
					"Vin retourne à Luthadel depuis Fellise, rejoignant l'équipe à l'atelier de Clubs. Kelsier l'emmène dans une course nocturne d'Allomancie à travers la ville, poussant son entraînement plus loin.",
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-10.2': {
				title: "Le rassemblement de l'entrepôt",
				description:
					'Vin assiste à un rassemblement secret où Kelsier prêche la révolution devant des ouvriers skaa réunis dans un entrepôt caché.',
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-11': {
				title: 'Le Massacre du Repaire de Camon',
				description:
					"Vin et l'équipe découvrent les conséquences d'une attaque brutale sur l'ancien repaire de Camon — le Ministère a tué tout le monde en représailles de l'arnaque au Canton des Finances.",
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-13': {
				title: 'Premier bal à la Forteresse Venture',
				description:
					'Vin assiste à son premier bal en tant que Dame Valette Renoux, entrant dans le monde étincelant de la noblesse. Elle y rencontre Elend Venture, lisant seul dans un coin.',
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-14': {
				title: 'Reconnaissance de Kredik Shaw',
				description:
					'Vin et Kelsier effectuent une audacieuse reconnaissance nocturne du palais du Seigneur Maître, bondissant entre les Mille Flèches pour cartographier ses défenses.',
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-16': {
				title: 'Bal à la Forteresse Elariel',
				description:
					'Vin assiste à un bal à la Maison Elariel, recueillant des renseignements sur les maisons nobles et leurs alliances tout en approfondissant sa couverture.',
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-19': {
				title: 'Rapprochement',
				description:
					"Lors d'un autre bal à la Forteresse Venture, la relation entre Vin et Elend se renforce malgré sa mission. Elle danse ensuite sur les toits.",
				season: "Fin de l'été",
				year: '1021 FE',
			},
			'tfe-22': {
				title: 'Le Journal',
				description:
					"De retour à la menuiserie de Clubs, Vin étudie l'ancien journal du Seigneur Maître, y trouvant des références troublantes à la Profondeur et à la prophétie du Héros des Siècles.",
				season: 'Automne',
				year: '1021 FE',
			},
			'tfe-25': {
				title: "La course d'endurance à l'étain",
				description:
					"Lorsque l'armée rebelle à Holstep est massacrée par les forces de la garnison, Vin effectue une course d'endurance désespérée — brûlant de l'étain sans interruption pendant des heures — pour aider à secourir les survivants.",
				season: "Fin de l'automne",
				year: '1021 FE',
			},
			'tfe-26': {
				title: 'Convalescence',
				description:
					"Vin retourne à la menuiserie de Clubs épuisée par la course d'endurance, se remettant pendant que la bande se regroupe après la perte dévastatrice de Holstep.",
				season: "Fin de l'automne",
				year: '1021 FE',
			},
			'tfe-30': {
				title: 'Escalade de la Guerre des Maisons',
				description:
					"La Guerre des Maisons s'intensifie alors que les maisons nobles se retournent les unes contre les autres. Vin réalise que la manipulation de la bande fonctionne, mais la violence la trouble.",
				season: 'Hiver',
				year: '1021 FE',
			},
			'tfe-34': {
				title: 'La mort du Survivant',
				description:
					'Vin observe impuissante depuis les toits alors que Kelsier combat et est tué par le Seigneur Maître sur la Place de la Fontaine, devenant le Survivant de Hathsin dans la mort.',
				season: 'Début du printemps',
				year: '1022 FE',
			},
			'tfe-36': {
				title: 'Assaut sur le palais',
				description:
					'À la tête de la rébellion skaa, Vin se fraie un chemin dans Kredik Shaw, combattant Inquisiteurs et gardes pour atteindre la salle du trône du Seigneur Maître.',
				season: 'Début du printemps',
				year: '1022 FE',
			},
			'tfe-38': {
				title: 'Celle qui tua le Seigneur Maître',
				description:
					"Vin affronte le Seigneur Maître dans sa salle du trône, lui arrachant ses réserves de métalesprit et tuant le tyran immortel. Mille ans d'oppression prennent fin.",
				season: 'Début du printemps',
				year: '1022 FE',
			},
			'tfe-39': {
				title: 'Une ère nouvelle',
				description:
					"Au lendemain de la révolution, Vin se tient aux côtés d'Elend à la Forteresse Venture tandis qu'une nouvelle ère commence. Les brumes coulent toujours, mais le Seigneur Maître n'est plus.",
				season: 'Printemps',
				year: '1022 FE',
			},
			'woa-1': {
				title: 'Gardienne de la cité',
				description:
					'Vin patrouille chaque nuit sur les remparts de Luthadel, guettant les menaces tandis que trois armées convergent lentement vers la ville nouvellement libre.',
				season: 'Automne',
				year: '1023 FE',
			},
			'woa-3': {
				title: "L'esprit des brumes",
				description:
					"Durant sa patrouille nocturne, Vin rencontre une silhouette mystérieuse dans les brumes — un esprit qui semble l'observer, lui indiquant quelque chose.",
				season: 'Automne',
				year: '1023 FE',
			},
			'woa-8': {
				title: 'Protectrice et compagne',
				description:
					"Vin navigue entre son double rôle de protectrice et de compagne d'Elend au palais, tiraillée entre son amour pour lui et son devoir de le garder en sécurité.",
				season: 'Automne',
				year: '1023 FE',
			},
			'woa-14': {
				title: 'Conseil de la bande',
				description:
					"La bande se réunit à la menuiserie de Clubs pour discuter de stratégie alors que l'armée de Straff Venture campe au nord et que les forces de Cett approchent par l'ouest.",
				season: "Début de l'hiver",
				year: '1023 FE',
			},
			'woa-22': {
				title: 'Tensions politiques',
				description:
					"Tandis que le siège se resserre, Vin regarde Elend lutter avec l'Assemblée et les exigences de la gouvernance pendant qu'elle traque Zane à travers les brumes.",
				season: 'Hiver',
				year: '1023 FE',
			},
			'woa-26': {
				title: 'Pourparlers avec Straff',
				description:
					'Vin accompagne Elend au camp de guerre de Straff Venture au nord de la ville, où elle fait une démonstration terrifiante de sa puissance pour intimider le conquérant en puissance.',
				season: 'Hiver',
				year: '1023 FE',
			},
			'woa-28': {
				title: 'Retour des pourparlers',
				description:
					'Après la rencontre tendue au camp de Straff, Vin retourne à la Forteresse Venture, hantée par les murmures de Zane et ses doutes grandissants sur son rôle.',
				season: 'Hiver',
				year: '1024 FE',
			},
			'woa-35': {
				title: "La crise de l'Assemblée",
				description:
					"Vin observe depuis la galerie tandis que l'Assemblée vote la destitution d'Elend et invite seigneur Penrod à gouverner, brisant l'expérience démocratique.",
				season: 'Hiver',
				year: '1024 FE',
			},
			'woa-43': {
				title: 'Raid contre Cett',
				description:
					"Vin lance un assaut solo dévastateur contre les forces de Cett cantonnées à la Forteresse Hasting, chassant son armée de la ville dans une démonstration de la puissance d'une Fille-des-brumes.",
				season: "Fin de l'hiver",
				year: '1024 FE',
			},
			'woa-47': {
				title: 'Duel avec Zane',
				description:
					"Près de la Forteresse Hasting, Vin affronte Zane Venture dans un duel brutal entre Fils-des-brumes, le tuant finalement pour protéger ceux qu'elle aime.",
				season: "Fin de l'hiver",
				year: '1024 FE',
			},
			'woa-49': {
				title: 'Exil',
				description:
					"Vin et Elend quittent Luthadel par la Porte d'Étain, exilés par le nouveau gouvernement de Penrod, se dirigeant vers le nord en direction du Terris avec une petite escorte.",
				season: "Fin de l'hiver",
				year: '1024 FE',
			},
			'woa-50': {
				title: 'Exode vers le nord',
				description:
					"Le petit groupe voyage vers le Terris, mais Vin sent quelque chose qui la rappelle — le Puits de l'Ascension ne se trouve pas dans les montagnes finalement.",
				season: "Fin de l'hiver",
				year: '1024 FE',
			},
			'woa-52': {
				title: 'Retour au combat',
				description:
					"Vin effectue une course d'endurance désespérée jusqu'à Luthadel alors que les koloss franchissent les remparts, arrivant à temps pour prendre le contrôle des créatures et sauver la ville.",
				season: "Fin de l'hiver",
				year: '1024 FE',
			},
			'woa-54': {
				title: 'À la recherche du Puits',
				description:
					"Luthadel sauvée mais meurtrie, Vin fouille les souterrains de Kredik Shaw à la recherche du Puits de l'Ascension, guidée par l'esprit des brumes de plus en plus profondément.",
				season: "Fin de l'hiver",
				year: '1024 FE',
			},
			'woa-58': {
				title: 'Le Puits découvert',
				description:
					"Vin descend dans les antiques cavernes sous Kredik Shaw et découvre le Puits de l'Ascension, dont la puissance pulse d'énergie accumulée.",
				season: 'Hiver',
				year: '1024 FE',
			},
			'woa-59': {
				title: 'La puissance libérée',
				description:
					"Au Puits, Vin s'empare d'une puissance immense — puis, trompée par la manipulation des prophéties par Ravage, la libère. Quelque chose de terrible s'échappe de sa prison.",
				season: 'Hiver',
				year: '1024 FE',
			},
			'hoa-1': {
				title: 'La campagne du nord',
				description:
					"Vin et Elend mènent leur armée jusqu'à Vetitan, une ville ensevelie par des chutes de cendres croissantes, pour s'emparer d'une des réserves cachées du Seigneur Maître.",
				season: 'Printemps',
				year: '1026 FE',
			},
			'hoa-3': {
				title: 'La première réserve',
				description:
					"Vin ouvre la caverne de stockage de Vetitan, y trouvant nourriture, provisions et une plaque de métal portant un message cryptique du Seigneur Maître sur le danger qu'il avait emprisonné.",
				season: 'Printemps',
				year: '1026 FE',
			},
			'hoa-8': {
				title: 'Division des forces',
				description:
					"Vin retourne à Luthadel où l'armée se divise : Sazed et Breeze partent au nord vers Urteau, tandis que Vin et Elend marcheront vers l'ouest en direction de Fadrex.",
				season: 'Été',
				year: '1026 FE',
			},
			'hoa-10': {
				title: "Marche vers l'ouest",
				description:
					"Vin marche vers l'ouest avec l'armée d'Elend en direction de Fadrex, la cendre tombant plus dru chaque jour tandis que le monde se détériore autour d'eux.",
				season: 'Été',
				year: '1026 FE',
			},
			'hoa-21': {
				title: 'Arrivée à Fadrex',
				description:
					"L'armée arrive devant Fadrex et établit un camp de siège sur les plaines couvertes de cendres. L'obligateur Yomen refuse de livrer la ville ou sa réserve.",
				season: 'Automne',
				year: '1026 FE',
			},
			'hoa-28': {
				title: "L'espionne au bal",
				description:
					"Vin s'infiltre dans Fadrex déguisée en noble, assistant à l'un des bals de Yomen à la Forteresse Orielle pour recueillir des renseignements et chercher une solution diplomatique.",
				season: 'Automne',
				year: '1026 FE',
			},
			'hoa-40': {
				title: 'Le second bal',
				description:
					"Vin retourne à un autre bal de Yomen, engageant avec lui un débat philosophique direct sur l'héritage du Seigneur Maître et les chutes de cendres croissantes.",
				season: "Fin de l'automne",
				year: '1026 FE',
			},
			'hoa-47': {
				title: 'Capturée',
				description:
					"Vin est capturée par les forces de Yomen et emprisonnée au Canton des Ressources, privée de ses métaux. Elle est détenue dans une cellule avec une réserve d'atium qu'elle ne peut atteindre.",
				season: 'Hiver',
				year: '1026 FE',
			},
			'hoa-51': {
				title: 'En prison',
				description:
					"Emprisonnée et coupée de ses métaux, Vin médite sur l'influence de Ravage et la nature du pouvoir qu'elle a libéré au Puits.",
				season: 'Hiver',
				year: '1026 FE',
			},
			'hoa-54': {
				title: 'La réserve révélée',
				description:
					'Vin découvre la réserve de stockage de Fadrex et son contenu crucial — nourriture, provisions et un message sur les véritables préparatifs du Seigneur Maître.',
				season: "Fin de l'hiver",
				year: '1026 FE',
			},
			'hoa-56': {
				title: 'Évasion de Fadrex',
				description:
					"Alors que les koloss attaquent Fadrex, Vin s'échappe de la ville en attirant les Inquisiteurs loin d'Elend et de l'armée pour les protéger.",
				season: 'Début du printemps',
				year: '1027 FE',
			},
			'hoa-59': {
				title: 'La chasse',
				description:
					"Vin s'envole vers l'est en direction de Luthadel avec une meute d'Inquisiteurs à ses trousses, attirant délibérément les serviteurs de Ravage loin de Fadrex et d'Elend.",
				season: 'Printemps',
				year: '1027 FE',
			},
			'hoa-72': {
				title: 'Retour à Luthadel',
				description:
					"Vin arrive dans une Luthadel dévastée et détruit Kredik Shaw, faisant s'effondrer le palais du Seigneur Maître dans une démonstration massive de puissance allomantique.",
				season: 'Été',
				year: '1027 FE',
			},
			'hoa-79': {
				title: "L'Ascension",
				description:
					"Vin puise dans les brumes elles-mêmes — le corps de Sauvegarde — s'élevant pour devenir un réceptacle de puissance divine afin de combattre Ravage directement.",
				season: 'Automne',
				year: '1027 FE',
			},
			'hoa-81': {
				title: "L'ultime sacrifice",
				description:
					'Vin se sacrifie pour détruire Ravage, combinant le pouvoir de Sauvegarde avec sa propre force vitale pour anéantir le dieu de la destruction.',
				season: 'Automne',
				year: '1027 FE',
			},
			'hoa-83': {
				title: 'Le Champ de la Renaissance',
				description:
					"Le corps de Vin est retrouvé dans un champ de fleurs et d'herbe verte — les premiers signes du monde refaçonné par Sazed. Elle repose en paix aux côtés d'Elend.",
				season: 'Automne',
				year: '1027 FE',
			},
		},
		kelsier: {
			'tfe-0': {
				title: 'Le retour du Survivant',
				description:
					'Kelsier arrive à la plantation du seigneur Tresting dans la Dominance du Sud, tuant le noble cruel — sa première frappe contre la noblesse depuis son évasion des Puits.',
				season: 'Printemps',
				year: '1021 FE',
			},
			'tfe-1': {
				title: 'Observateur caché',
				description:
					"Kelsier observe la bande de Camon depuis les ombres, remarquant l'utilisation inconsciente de l'Allomancie par Vin — une gamine des rues dotée de pouvoirs de Fille-des-brumes.",
				season: 'Printemps',
				year: '1021 FE',
			},
			'tfe-3': {
				title: 'Le recrutement de Vin',
				description:
					'Kelsier sauve Vin des mauvais traitements de Camon et lui offre une place dans sa bande, lui révélant la vérité sur ses capacités de Fille-des-brumes.',
				season: 'Printemps',
				year: '1021 FE',
			},
			'tfe-5': {
				title: "Le vol d'atium",
				description:
					"Kelsier s'introduit dans le coffre de la Forteresse Venture pour voler de l'atium, finançant la rébellion tout en testant les défenses des maisons nobles.",
				season: 'Printemps',
				year: '1021 FE',
			},
			'tfe-6': {
				title: 'La bande se rassemble',
				description:
					'À la menuiserie de Clubs, Kelsier réunit toute la bande — Ham, Breeze, Dockson, Clubs, et désormais Vin — et révèle son plan pour renverser le Seigneur Maître.',
				season: 'Printemps',
				year: '1021 FE',
			},
			'tfe-7': {
				title: "Former l'apprentie",
				description:
					"Kelsier emmène Vin près des remparts de la ville, du côté de la Porte d'Acier, pour un entraînement à l'Allomancie, lui apprenant à Pousser et Tirer sur les métaux en bondissant entre les flèches.",
				season: 'Fin du printemps',
				year: '1021 FE',
			},
			'tfe-8': {
				title: 'La couverture Renoux',
				description:
					"Kelsier escorte Vin jusqu'à Fellise et au domaine du seigneur Renoux, établissant son identité de couverture en tant que Dame Valette pour l'infiltration de la haute société noble.",
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-10': {
				title: 'Planification de la révolution',
				description:
					"De retour à Luthadel, Kelsier retrouve l'équipe à l'atelier de Clubs pour faire le point sur la rébellion. Il emmène Vin dans une course nocturne à travers la ville pour poursuivre son entraînement d'Allomancie.",
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-10.2': {
				title: 'La rébellion grandit',
				description:
					'Kelsier mène des rassemblements dans les entrepôts des bas-fonds de Luthadel, bâtissant la rébellion skaa grâce à sa légende de Survivant de Hathsin.',
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-11': {
				title: 'Le Massacre du Repaire de Camon',
				description:
					"Kelsier et l'équipe découvrent que le Ministère a massacré tout le monde dans l'ancien repaire de Camon en représailles de l'arnaque au Canton des Finances, renforçant leur détermination contre le Seigneur Maître.",
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-14': {
				title: 'Reconnaissance du palais',
				description:
					'Kelsier et Vin explorent Kredik Shaw de nuit, cartographiant les défenses du palais et testant la capacité de réaction des Inquisiteurs.',
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-18': {
				title: 'Opérations de la Guerre des Maisons',
				description:
					'Kelsier orchestre des attaques entre maisons nobles, assassinant des cibles et plantant des preuves pour alimenter la Guerre des Maisons qui affaiblit la noblesse.',
				season: "Fin de l'été",
				year: '1021 FE',
			},
			'tfe-21': {
				title: "L'armée rebelle",
				description:
					"Kelsier se rend aux Cavernes d'Arguois pour inspecter l'armée rebelle grandissante cachée dans les montagnes, entraînant des soldats qui n'ont jamais tenu une arme.",
				season: 'Automne',
				year: '1021 FE',
			},
			'tfe-25': {
				title: 'Le désastre de Holstep',
				description:
					"Kelsier effectue une course d'endurance jusqu'à Holstep lorsque la garnison découvre et massacre l'armée rebelle. Il arrive pour trouver la dévastation et doit fuir vers le sud.",
				season: "Fin de l'automne",
				year: '1021 FE',
			},
			'tfe-26': {
				title: 'Recoller les morceaux',
				description:
					"De retour à la menuiserie de Clubs, Kelsier se regroupe après le désastre de Holstep, refusant d'abandonner la révolution même quand l'espoir semble perdu.",
				season: 'Hiver',
				year: '1021 FE',
			},
			'tfe-32': {
				title: 'La destruction des Puits',
				description:
					"Kelsier retourne aux Puits de Hathsin — le lieu de sa plus grande souffrance — et détruit les cristaux d'atium, coupant la ressource la plus précieuse du Seigneur Maître.",
				season: 'Hiver',
				year: '1022 FE',
			},
			'tfe-34': {
				title: "L'ultime combat du Survivant",
				description:
					'Kelsier affronte le Seigneur Maître sur la Place de la Fontaine dans un combat impossible. Il meurt avec un sourire, devenant un martyr dont la mort embrase la révolution.',
				season: 'Début du printemps',
				year: '1022 FE',
			},
			'tfe-35': {
				title: 'Au-delà de la mort',
				description:
					"Par OreSeur le kandra portant ses os, le plan final de Kelsier se déploie — sa mort est l'étincelle qui a mis le feu à la révolution dans tout Luthadel.",
				season: 'Début du printemps',
				year: '1022 FE',
			},
			'woa-1': {
				title: 'Au-delà du voile',
				description:
					"Piégé dans le Royaume Cognitif après sa mort, Kelsier existe en tant qu'ombre cognitive près du Puits de l'Ascension, observant Luthadel se transformer sous le règne d'Elend.",
				season: 'Automne',
				year: '1023 FE',
			},
			'woa-59': {
				title: 'Témoin de la libération',
				description:
					"Kelsier observe impuissant depuis le Royaume Cognitif tandis que Vin s'empare du pouvoir au Puits de l'Ascension et le libère, affranchissant Ravage de sa prison.",
				season: 'Hiver',
				year: '1024 FE',
			},
			'sh-4.1': {
				title: "Voyage cognitif vers l'ouest",
				description:
					"Existant en tant qu'Ombre Cognitive, Kelsier traverse l'océan de brume vers les Terres Brûlées occidentales pour chercher l'aide de la forteresse des Ire.",
				season: 'Printemps',
				year: '1025 FE',
			},
			'sh-6.1': {
				title: "L'avertissement à Fadrex",
				description:
					"Kelsier arrive au reflet cognitif de Fadrex City, rencontrant Hoid et tentant d'avertir Vin de sa pointe hémalurgique.",
				season: 'Automne',
				year: '1026 FE',
			},
			'hoa-1': {
				title: 'Le Survivant endure',
				description:
					"Dans le Royaume Cognitif, Kelsier œuvre aux côtés du pouvoir déclinant de Sauvegarde, cherchant tout moyen d'aider le Royaume Physique à résister à l'influence grandissante de Ravage.",
				season: 'Printemps',
				year: '1026 FE',
			},
			'hoa-50': {
				title: 'Détenteur de Sauvegarde',
				description:
					"Alors que la conscience de Sauvegarde s'éteint, Kelsier s'empare du pouvoir de l'Éclat — le retenant imparfaitement depuis le Royaume Cognitif, gagnant du temps pour l'acte final.",
				season: 'Printemps',
				year: '1027 FE',
			},
			'hoa-81': {
				title: 'Passer le flambeau',
				description:
					"Vin prend le pouvoir de Sauvegarde à Kelsier pour détruire Ravage. Le Survivant abandonne l'Éclat, son rôle accompli — mais il refuse de passer dans l'Au-Delà.",
				season: 'Automne',
				year: '1027 FE',
			},
			'hoa-83': {
				title: 'Le Survivant perdure',
				description:
					"Alors même qu'Harmonie refaçonne le monde, Kelsier persiste dans le Royaume Cognitif — le Survivant qui a refusé de laisser même la mort l'arrêter.",
				season: 'Automne',
				year: '1027 FE',
			},
		},
		sazed: {
			'tfe-9': {
				title: "L'intendant terris",
				description:
					'Sazed arrive au domaine du seigneur Renoux à Fellise pour servir de tuteur à Vin, lui enseignant les usages de la noblesse tout en préservant secrètement les religions anciennes.',
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-10.2': {
				title: "Le Rassemblement de l'Entrepôt",
				description:
					'Sazed assiste au rassemblement secret aux côtés de Kelsier et Vin, observant le Survivant prêcher la révolution aux ouvriers skaa assemblés.',
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-13': {
				title: 'Gardien au bal',
				description:
					"Sazed accompagne Vin à son premier bal en tant qu'intendant, veillant sur elle depuis les quartiers des domestiques tandis qu'elle infiltre la haute société noble.",
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-22': {
				title: "Le travail de l'érudit",
				description:
					"Sazed enseigne à Vin entre les bals au domaine Renoux, partageant ses vastes connaissances religieuses tout en étudiant les rouages de l'Empire Ultime.",
				season: 'Automne',
				year: '1021 FE',
			},
			'tfe-34': {
				title: 'Témoin de la révolution',
				description:
					'Sazed se trouve à Luthadel durant la révolution, assistant à la révolte des skaa et à la chute de Kelsier sur la Place de la Fontaine.',
				season: 'Début du printemps',
				year: '1022 FE',
			},
			'tfe-38': {
				title: "La chute de l'Empire",
				description:
					"Sazed assiste la bande lors de l'assaut sur Kredik Shaw, utilisant sa Féruchimie pour combattre les gardes du Seigneur Maître.",
				season: 'Début du printemps',
				year: '1022 FE',
			},
			'tfe-39': {
				title: 'Un nouveau départ',
				description:
					'Au lendemain, Sazed commence à étudier les archives de Kredik Shaw, cherchant des réponses sur la Profondeur et la prophétie du Héros des Siècles.',
				season: 'Printemps',
				year: '1022 FE',
			},
			'woa-4': {
				title: 'Le professeur itinérant',
				description:
					"Sazed parcourt la Dominance de l'Est, visitant des villages ruraux pour partager avec les skaa nouvellement libérés les religions et les savoirs qui avaient été supprimés.",
				season: 'Automne',
				year: '1023 FE',
			},
			'woa-7': {
				title: 'Le Conventical de Seran',
				description:
					"Guidé par Marsh, Sazed découvre le Conventical de Seran — une terrifiante forteresse d'Inquisiteurs où il trouve la plaque d'acier gravée par Kwaan.",
				season: "Fin de l'automne",
				year: '1023 FE',
			},
			'woa-12': {
				title: 'Décryptage de la plaque',
				description:
					"Sazed étudie l'inscription de Kwaan dans le Conventical, mettant au jour l'avertissement désespéré du Gardien terris : la prophétie du Héros des Siècles a été altérée.",
				season: "Fin de l'automne",
				year: '1023 FE',
			},
			'woa-15': {
				title: 'Les morts des brumes',
				description:
					"Revenant vers l'ouest par Urbene, Sazed rencontre des villages où des gens sont mystérieusement morts dans les brumes — les premiers signes de la maladie des brumes.",
				season: 'Hiver',
				year: '1023 FE',
			},
			'woa-22': {
				title: 'Retour à Luthadel',
				description:
					"Sazed arrive à Luthadel porteur de nouvelles graves sur la prophétie altérée, les morts des brumes et la véritable signification de l'inscription d'acier.",
				season: 'Hiver',
				year: '1023 FE',
			},
			'woa-40': {
				title: 'Débat sur la prophétie',
				description:
					"Sazed travaille avec Tindwyl à la Forteresse Venture, comparant les versions originale et altérée de la prophétie du Héros des Siècles, se rapprochant d'elle.",
				season: "Fin de l'hiver",
				year: '1024 FE',
			},
			'woa-52': {
				title: 'Défense de la porte',
				description:
					"Quand les koloss franchissent les remparts de Luthadel, Sazed utilise sa Féruchimie pour tenir la Porte d'Étain à lui seul, épuisant ses attributs stockés dans un dernier combat désespéré.",
				season: "Fin de l'hiver",
				year: '1024 FE',
			},
			'woa-57': {
				title: 'Combat contre Marsh',
				description:
					"Sazed affronte un Marsh contrôlé par Ravage dans les corridors de Kredik Shaw, survivant de justesse à l'assaut de l'Inquisiteur tandis que Vin descend vers le Puits.",
				season: 'Hiver',
				year: '1024 FE',
			},
			'woa-59': {
				title: 'La mort de Tindwyl',
				description:
					"Sazed découvre que Tindwyl a été tuée lors de l'attaque des koloss. Dévasté, il entame sa crise de foi, remettant en question chaque religion qu'il porte en lui.",
				season: 'Hiver',
				year: '1024 FE',
			},
			'hoa-4': {
				title: 'Diplomatie au sud',
				description:
					"Sazed se rend à la Cité de Lekal avec Breeze pour négocier un traité, usant de diplomatie pour rallier le roi du sud à la coalition grandissante d'Elend.",
				season: 'Été',
				year: '1026 FE',
			},
			'hoa-8': {
				title: 'Cap au nord',
				description:
					"Sazed reçoit sa mission de sécuriser Urteau par la diplomatie tandis qu'Elend emmène l'armée vers l'ouest. Il part par la porte nord.",
				season: 'Été',
				year: '1026 FE',
			},
			'hoa-14': {
				title: 'Arrivée à Urteau',
				description:
					'Sazed arrive à Urteau pour la trouver sous le joug oppressif du Citoyen Quellion, établissant une enclave diplomatique dans le domaine Venture abandonné.',
				season: 'Automne',
				year: '1026 FE',
			},
			'hoa-25': {
				title: 'Gagner la confiance',
				description:
					"Sazed s'efforce de gagner la confiance de la population d'Urteau tout en étudiant l'histoire de la ville et en cherchant la caverne de stockage sous le bâtiment du Ministère.",
				season: "Début de l'hiver",
				year: '1026 FE',
			},
			'hoa-40': {
				title: 'Enquête au Ministère',
				description:
					'Sazed enquête au Canton du Ministère, cherchant à accéder à la caverne de stockage en dessous tout en naviguant dans le gouvernement paranoïaque de Quellion.',
				season: 'Hiver',
				year: '1026 FE',
			},
			'hoa-50': {
				title: 'La caverne découverte',
				description:
					"Sazed découvre le mécanisme pour inonder le réseau de canaux asséchés — le Seigneur Maître avait drainé les canaux pour cacher l'eau dans la caverne de stockage en dessous.",
				season: 'Début du printemps',
				year: '1027 FE',
			},
			'hoa-58': {
				title: 'Sauver Urteau',
				description:
					"Alors que les incendies ravagent la ville durant la révolution contre Quellion, Sazed libère l'eau stockée pour inonder les canaux, sauvant Urteau de la destruction.",
				season: 'Printemps',
				year: '1027 FE',
			},
			'hoa-64': {
				title: 'Reconstruction',
				description:
					'Quellion déposé et les incendies éteints, Sazed aide à reconstruire Urteau, distribuant les provisions de la réserve tout en étudiant le message du Seigneur Maître.',
				season: 'Été',
				year: '1027 FE',
			},
			'hoa-69': {
				title: 'Voyage vers Hathsin',
				description:
					"Sazed se rend aux Puits de Hathsin, attiré par la convergence des événements. Son étude des religions et de l'inscription de Kwaan l'a mené à une terrible révélation.",
				season: 'Automne',
				year: '1027 FE',
			},
			'hoa-71': {
				title: 'Le rassemblement final',
				description:
					'Sazed retourne à Luthadel tandis que le monde agonise autour de lui, la cendre tombant en rideaux noirs. Il porte en lui la connaissance de chaque religion et chaque prophétie.',
				season: 'Automne',
				year: '1027 FE',
			},
			'hoa-82': {
				title: 'Le Héros des Siècles',
				description:
					"Vin et Ravage tous deux détruits, Sazed réalise qu'il est le Héros des Siècles. Il s'empare du pouvoir de Sauvegarde et de Ravage au Puits de l'Ascension.",
				season: 'Automne',
				year: '1027 FE',
			},
			'hoa-83': {
				title: 'Harmonie',
				description:
					"Sazed s'élève en tant qu'Harmonie, unissant Ravage et Sauvegarde. Il refaçonne le monde — déplaçant la planète, restaurant la verdure et réparant mille ans de dégâts.",
				season: 'Automne',
				year: '1027 FE',
			},
		},
		elend: {
			'tfe-12': {
				title: 'Le noble lecteur',
				description:
					"Elend Venture est présenté lors d'un bal dans sa propre forteresse, lisant seul tandis que le reste de la noblesse danse et complote autour de lui.",
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-13': {
				title: 'Rencontre avec Dame Valette',
				description:
					"Elend rencontre la mystérieuse Dame Valette Renoux lors d'un bal, attiré par son comportement peu conventionnel et son esprit vif.",
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-19': {
				title: 'La cour',
				description:
					"L'engouement d'Elend pour Dame Valette grandit au fil de leurs conversations lors des bals, discutant philosophie et défaillances de la noblesse.",
				season: "Fin de l'été",
				year: '1021 FE',
			},
			'tfe-24': {
				title: 'Le noble conspirateur',
				description:
					'Elend organise secrètement des nobles modérés opposés à la tyrannie du Seigneur Maître, se réunissant dans la bibliothèque privée de la Forteresse Venture.',
				season: 'Automne',
				year: '1021 FE',
			},
			'tfe-34': {
				title: 'La révolution',
				description:
					"Elend est témoin du chaos de l'insurrection skaa sur la Place de la Fontaine et s'avance pour protéger nobles et roturiers de la violence.",
				season: 'Début du printemps',
				year: '1022 FE',
			},
			'tfe-38': {
				title: 'Un dirigeant inattendu',
				description:
					"Au lendemain de la mort du Seigneur Maître, Elend émerge comme une voix unificatrice, appelant à l'ordre tandis que l'Empire s'effondre autour de lui.",
				season: 'Début du printemps',
				year: '1022 FE',
			},
			'tfe-39': {
				title: 'Le nouveau roi',
				description:
					'Elend Venture est déclaré Roi de la Dominance Centrale, entamant la tâche difficile de bâtir un gouvernement démocratique sur les ruines de la tyrannie.',
				season: 'Printemps',
				year: '1022 FE',
			},
			'woa-1': {
				title: 'Roi de Luthadel',
				description:
					"Elend travaille sans relâche à la Forteresse Venture pour établir un gouvernement constitutionnel, rédigeant des lois et construisant une Assemblée tandis que les armées se massent à l'extérieur.",
				season: 'Automne',
				year: '1023 FE',
			},
			'woa-5': {
				title: "L'Assemblée",
				description:
					"Elend s'adresse à l'Assemblée qu'il a créée, défendant les principes démocratiques même quand ses conseillers l'avertissent que la démocratie pourrait ne pas survivre au siège.",
				season: 'Automne',
				year: '1023 FE',
			},
			'woa-12': {
				title: 'Observation du siège',
				description:
					"Elend observe les lignes de siège depuis les remparts, regardant l'armée de son père Straff au nord et les forces de Cett qui approchent de l'ouest.",
				season: "Début de l'hiver",
				year: '1023 FE',
			},
			'woa-22': {
				title: 'Se battre pour la démocratie',
				description:
					"Elend fait face à une opposition croissante au sein de l'Assemblée alors que la peur du siège pousse beaucoup à rechercher un dirigeant plus fort qu'un roi philosophe.",
				season: 'Hiver',
				year: '1023 FE',
			},
			'woa-26': {
				title: 'Pourparlers avec son père',
				description:
					"Elend chevauche jusqu'au camp de Straff Venture pour négocier, emmenant Vin comme protectrice. La rencontre révèle le mépris de Straff pour son fils idéaliste.",
				season: 'Hiver',
				year: '1023 FE',
			},
			'woa-28': {
				title: 'Manœuvres diplomatiques',
				description:
					'De retour à la Forteresse Venture, Elend tente de dresser les trois armées les unes contre les autres — Straff, Cett et la horde de koloss qui approche.',
				season: 'Hiver',
				year: '1024 FE',
			},
			'woa-35': {
				title: 'Destitué',
				description:
					"L'Assemblée vote pour remplacer Elend par le seigneur Penrod, exploitant une clause de la propre constitution démocratique d'Elend. Son idéalisme cause sa perte.",
				season: 'Hiver',
				year: '1024 FE',
			},
			'woa-42': {
				title: 'Mission chez les koloss',
				description:
					"Elend quitte Luthadel par les tunnels pour négocier avec Jastes Lekal et son armée de koloss, un pari désespéré pour s'assurer un allié.",
				season: "Fin de l'hiver",
				year: '1024 FE',
			},
			'woa-46': {
				title: 'Retour du camp koloss',
				description:
					"Elend revient du camp des koloss ayant échoué à négocier — Jastes a perdu le contrôle de ses créatures. Les koloss attaqueront quoi qu'il arrive.",
				season: "Fin de l'hiver",
				year: '1024 FE',
			},
			'woa-49': {
				title: 'Exil de Luthadel',
				description:
					"Elend quitte Luthadel avec Vin par la Porte d'Étain, exilé par le gouvernement de Penrod, se dirigeant vers le nord en direction du Terris pour chercher l'aide du synode des Gardiens.",
				season: "Fin de l'hiver",
				year: '1024 FE',
			},
			'woa-50': {
				title: 'Le voyage vers le nord',
				description:
					"Le groupe d'Elend voyage vers le Terris, mais un malaise grandissant les pousse à reconsidérer. Le Puits de l'Ascension n'est peut-être pas là où ils le pensaient.",
				season: "Fin de l'hiver",
				year: '1024 FE',
			},
			'woa-52': {
				title: 'La bataille',
				description:
					"Elend revient pour trouver Luthadel sous l'assaut des koloss, combattant dans le chaos tandis que les remparts sont percés et que la ville menace de tomber.",
				season: "Fin de l'hiver",
				year: '1024 FE',
			},
			'woa-58': {
				title: 'Vers le Puits',
				description:
					"Elend descend sous Kredik Shaw avec Vin à la recherche du Puits de l'Ascension, tandis que Marsh combat Sazed au-dessus d'eux.",
				season: 'Hiver',
				year: '1024 FE',
			},
			'woa-59': {
				title: "L'empereur Fils-des-brumes",
				description:
					'Poignardé et mourant au Puits, Elend est sauvé quand Vin lui fait avaler une bille de lérasium, le transformant en Fils-des-brumes.',
				season: 'Hiver',
				year: '1024 FE',
			},
			'hoa-1': {
				title: 'Empereur en guerre',
				description:
					"Elend mène ses armées jusqu'à Vetitan, désormais un empereur Fils-des-brumes dirigeant des campagnes militaires pour s'emparer des réserves cachées du Seigneur Maître.",
				season: 'Printemps',
				year: '1026 FE',
			},
			'hoa-3': {
				title: 'Sécuriser la réserve',
				description:
					'Elend sécurise la caverne de stockage de Vetitan, trouvant de la nourriture et un message gravé sur une plaque de métal avertissant du danger que Rashek avait emprisonné.',
				season: 'Printemps',
				year: '1026 FE',
			},
			'hoa-8': {
				title: 'Division stratégique',
				description:
					"À Luthadel, Elend divise ses forces : envoyant Sazed sécuriser Urteau par la diplomatie tandis qu'il marche vers l'ouest pour prendre Fadrex par la force si nécessaire.",
				season: 'Été',
				year: '1026 FE',
			},
			'hoa-10': {
				title: "La marche vers l'ouest",
				description:
					"Elend mène son armée vers l'ouest en direction de Fadrex, la cendre tombant plus dru chaque jour. Il s'entraîne en tant que Fils-des-brumes durant la marche.",
				season: 'Été',
				year: '1026 FE',
			},
			'hoa-21': {
				title: 'Le siège de Fadrex',
				description:
					"L'armée d'Elend arrive à Fadrex et établit des lignes de siège sur les plaines couvertes de cendres. Yomen refuse de négocier ou de livrer la réserve.",
				season: 'Automne',
				year: '1026 FE',
			},
			'hoa-28': {
				title: "L'assiégeant réticent",
				description:
					"Elend est tiraillé par son rôle de conquérant, tentant la diplomatie même quand ses généraux poussent à l'assaut. Les chutes de cendres empirent de jour en jour.",
				season: 'Automne',
				year: '1026 FE',
			},
			'hoa-47': {
				title: 'Perdre Vin',
				description:
					'Quand Vin est capturée dans Fadrex, Elend fait face à un choix impossible entre sauver sa femme et protéger des dizaines de milliers de soldats.',
				season: 'Hiver',
				year: '1026 FE',
			},
			'hoa-54': {
				title: 'Entrée dans Fadrex',
				description:
					"L'attaque des koloss force une alliance temporaire avec Yomen. Elend entre dans la ville et accède à la réserve de stockage, trouvant le message final du Seigneur Maître.",
				season: "Fin de l'hiver",
				year: '1026 FE',
			},
			'hoa-58': {
				title: 'Départ pour Hathsin',
				description:
					"La réserve sécurisée et Vin partie vers l'est, Elend apprend la vérité finale : l'atium doit se trouver aux Puits de Hathsin. Il mène son armée vers le sud.",
				season: 'Début du printemps',
				year: '1027 FE',
			},
			'hoa-61': {
				title: 'Marche vers les Puits',
				description:
					"Elend mène son armée épuisée jusqu'aux Puits de Hathsin, où la Patrie des Kandra se trouve en dessous. L'armée d'Inquisiteurs de Marsh suit de près.",
				season: 'Printemps',
				year: '1027 FE',
			},
			'hoa-69': {
				title: 'La bataille de Hathsin',
				description:
					"Elend brûle les dernières réserves d'atium dans une bataille désespérée contre les Inquisiteurs et les koloss aux Puits, sachant que cela signifie sa mort quand le métal sera épuisé.",
				season: 'Été',
				year: '1027 FE',
			},
			'hoa-79': {
				title: "La mort de l'empereur",
				description:
					'Elend est tué par Marsh dans les derniers moments de la Bataille de Hathsin, son atium épuisé. Il meurt ayant brûlé tout le métal que Ravage convoitait.',
				season: 'Automne',
				year: '1027 FE',
			},
			'hoa-83': {
				title: 'Réunis dans la mort',
				description:
					"Le corps d'Elend est trouvé aux côtés de celui de Vin dans un champ de fleurs — le premier don de Sazed au monde refaçonné — en paix après toutes leurs épreuves.",
				season: 'Automne',
				year: '1027 FE',
			},
		},
		marsh: {
			'tfe-7': {
				title: 'Le frère réticent',
				description:
					'Marsh arrive à la menuiserie de Clubs, frère aîné de Kelsier et chef rebelle à part entière. Il rejoint à contrecœur le plan de la bande.',
				season: 'Fin du printemps',
				year: '1021 FE',
			},
			'tfe-10.2': {
				title: "Le rassemblement de l'entrepôt",
				description:
					"Marsh assiste au rassemblement secret dans le quartier des entrepôts avec l'équipe, observant son frère Kelsier prêcher la révolution devant les travailleurs skaa rassemblés.",
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-13': {
				title: 'Rencontre au Mont Tyrian',
				description:
					'Marsh rencontre Kelsier au Mont Tyrian, à plusieurs kilomètres de Luthadel, pour discuter du plan de rébellion loin des oreilles du Ministère avant de commencer sa dangereuse infiltration.',
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-20': {
				title: 'Plus profondément sous couverture',
				description:
					"Marsh s'enfonce dans la hiérarchie du Ministère à Kredik Shaw, apprenant les sombres secrets de l'Hémalurgie tout en risquant d'être découvert par les Inquisiteurs.",
				season: "Fin de l'été",
				year: '1021 FE',
			},
			'tfe-30': {
				title: 'Disparition',
				description:
					"Marsh se tait, ses communications cessent alors qu'il disparaît dans les niveaux les plus profonds du Canton de l'Inquisition. La bande craint le pire.",
				season: 'Hiver',
				year: '1021 FE',
			},
			'tfe-38': {
				title: "L'Inquisiteur",
				description:
					"Marsh apparaît lors de l'assaut final sur Kredik Shaw, toujours vivant mais transformé — des pointes de fer enfoncées à travers les yeux. Il combat aux côtés de la bande malgré sa transformation.",
				season: 'Début du printemps',
				year: '1022 FE',
			},
			'woa-4': {
				title: "Errant de l'Est",
				description:
					"Marsh erre dans la Dominance de l'Est en tant qu'Inquisiteur solitaire, cherchant à comprendre sa transformation tout en aidant Sazed à enquêter sur des villages éloignés.",
				season: 'Automne',
				year: '1023 FE',
			},
			'woa-7': {
				title: 'Le guide du Conventical',
				description:
					"Marsh mène Sazed au Conventical de Seran, une forteresse d'Inquisiteurs dans le nord reculé, pour trouver les archives que Sazed recherche.",
				season: "Fin de l'automne",
				year: '1023 FE',
			},
			'woa-12': {
				title: 'Abandon',
				description:
					"Marsh abandonne brusquement Sazed au Conventical et disparaît dans la nature, poussé par des forces auxquelles il résiste de moins en moins. L'influence de Ravage grandit.",
				season: "Fin de l'automne",
				year: '1023 FE',
			},
			'woa-57': {
				title: 'Marionnette de Ravage',
				description:
					"Marsh apparaît à Kredik Shaw sous le contrôle total de Ravage, combattant Sazed dans les corridors tandis que Vin descend vers le Puits de l'Ascension en contrebas.",
				season: 'Hiver',
				year: '1024 FE',
			},
			'woa-59': {
				title: 'Gardien du Puits',
				description:
					"Marsh garde l'entrée du Puits, marionnette de Ravage, combattant pour empêcher quiconque d'atteindre Vin — ou de l'aider à faire le bon choix.",
				season: 'Hiver',
				year: '1024 FE',
			},
			'hoa-0': {
				title: "Créateur d'Inquisiteurs",
				description:
					"Sous le contrôle de Ravage, Marsh accomplit de sombres rituels hémalurgiques à Tathingdwen, créant de nouveaux Inquisiteurs à partir de Féruchimistes et d'Allomanciens capturés.",
				season: 'Printemps',
				year: '1026 FE',
			},
			'hoa-6': {
				title: 'Meneur de koloss',
				description:
					"Marsh commande une armée grandissante de koloss pour le compte de Ravage, traversant la Dominance de l'Est et rassemblant des forces en vue de la bataille finale.",
				season: 'Été',
				year: '1026 FE',
			},
			'hoa-22': {
				title: 'Près de Tyrian',
				description:
					"Marsh opère près du Mont Tyrian, créant des pointes hémalurgiques à partir de prisonniers capturés et bâtissant l'armée d'Inquisiteurs de Ravage à l'ombre du mont de cendres.",
				season: 'Hiver',
				year: '1026 FE',
			},
			'hoa-38': {
				title: "L'empalage de Penrod",
				description:
					"Marsh s'infiltre dans Luthadel pour embrocher le roi Penrod, accordant à Ravage un accès direct à la gouvernance de la capitale.",
				season: 'Hiver',
				year: '1026 FE',
			},
			'hoa-45': {
				title: 'Convergence sur Fadrex',
				description:
					"Marsh mène ses Inquisiteurs vers Fadrex, convergeant sur le siège tandis que Ravage cherche à récupérer la réserve d'atium cachée à l'intérieur.",
				season: 'Hiver',
				year: '1026 FE',
			},
			'hoa-59': {
				title: 'À la poursuite de Vin',
				description:
					"Marsh mène la meute d'Inquisiteurs poursuivant Vin vers l'est alors qu'elle fuit Fadrex en direction de Luthadel, attirant les serviteurs de Ravage loin de la réserve.",
				season: 'Printemps',
				year: '1027 FE',
			},
			'hoa-69': {
				title: 'La Bataille de Hathsin',
				description:
					"Marsh arrive aux Puits à la tête des forces de Ravage. Dans un instant de volonté recouvrée, il arrache la boucle d'oreille de Vin — un acte de défi qui change tout.",
				season: 'Automne',
				year: '1027 FE',
			},
			'hoa-79': {
				title: "Le meurtre d'Elend",
				description:
					"Marsh, poussé par Ravage, tue l'empereur Elend lors de la Bataille de Hathsin. L'acte accomplit le plan de Ravage mais coûte à Marsh un morceau de plus de son âme.",
				season: 'Automne',
				year: '1027 FE',
			},
			'hoa-83': {
				title: 'Liberté enfin',
				description:
					'Ravage détruit, Marsh est enfin libéré du contrôle du dieu. Il se tient seul dans le monde refaçonné, un Inquisiteur qui a survécu à la fin de toute chose.',
				season: 'Automne',
				year: '1027 FE',
			},
		},
		spook: {
			'tfe-7': {
				title: "Le jeune Brûleur d'étain",
				description:
					"Spook, jeune neveu de Clubs, travaille comme guetteur et messager pour la bande à la menuiserie, parlant un épais argot des rues de l'Est.",
				season: 'Fin du printemps',
				year: '1021 FE',
			},
			'tfe-9': {
				title: 'Courses de messager',
				description:
					"Spook transmet des messages entre la menuiserie de Clubs à Luthadel et le domaine Renoux à Fellise, ses sens aiguisés par l'étain faisant de lui un éclaireur exceptionnel.",
				season: 'Été',
				year: '1021 FE',
			},
			'tfe-22': {
				title: 'Soutien de la bande',
				description:
					"Spook reste à la menuiserie de Clubs durant la Guerre des Maisons, fournissant des renseignements depuis ses postes d'observation sur les toits et ses courses de messager à travers les bas-fonds.",
				season: 'Automne',
				year: '1021 FE',
			},
			'tfe-34': {
				title: 'Témoin du sacrifice',
				description:
					'Spook regarde depuis la foule Kelsier mourir sur la Place de la Fontaine, un événement qui marquera le reste de sa vie.',
				season: 'Début du printemps',
				year: '1022 FE',
			},
			'tfe-38': {
				title: 'La révolution',
				description:
					"Spook combat aux côtés de la bande durant la révolution finale, aidant à coordonner l'insurrection skaa depuis les rues de Luthadel.",
				season: 'Début du printemps',
				year: '1022 FE',
			},
			'woa-6': {
				title: "L'éclaireur en devenir",
				description:
					"Spook sert d'éclaireur pour le nouveau gouvernement d'Elend, patrouillant la ville et observant les armées encerclantes durant le siège.",
				season: 'Automne',
				year: '1023 FE',
			},
			'woa-49': {
				title: "Groupe d'exilés",
				description:
					"Spook quitte Luthadel avec le groupe d'exilés de Vin et Elend par la Porte d'Étain, se dirigeant vers le nord en direction des montagnes du Terris.",
				season: "Fin de l'hiver",
				year: '1024 FE',
			},
			'woa-52': {
				title: 'Survivre à la bataille',
				description:
					"Après être revenu à Luthadel durant l'attaque des koloss, Spook survit à la Bataille de Luthadel et aide à sécuriser la ville.",
				season: "Fin de l'hiver",
				year: '1024 FE',
			},
			'hoa-1': {
				title: 'Soldat de campagne',
				description:
					"Spook sert dans l'armée d'Elend à Vetitan, gagnant progressivement plus de responsabilités tandis que les forces de l'empereur sécurisent la réserve de stockage.",
				season: 'Printemps',
				year: '1026 FE',
			},
			'hoa-14': {
				title: "L'infiltrateur",
				description:
					'Spook arrive à Urteau en avance sur la mission diplomatique de Sazed, infiltrant la ville par le dédale de canaux asséchés connu sous le nom des Harrows.',
				season: 'Automne',
				year: '1026 FE',
			},
			'hoa-17': {
				title: 'La maison en feu',
				description:
					'Spook établit une base dans un bâtiment caché au sein des Harrows, observant le régime oppressif du Citoyen et établissant le contact avec la résistance locale.',
				season: 'Automne',
				year: '1026 FE',
			},
			'hoa-23': {
				title: 'Observation du marché',
				description:
					"Spook observe le Citoyen Quellion haranguant la foule au Puits du Marché, étudiant ses habitudes et les Allomanciens qu'il force à servir au moyen de pointes hémalurgiques.",
				season: "Début de l'hiver",
				year: '1026 FE',
			},
			'hoa-30': {
				title: 'Approcher le Citoyen',
				description:
					'Spook se rapproche du cercle intime du Citoyen, enquêtant sur les pointes que Quellion utilise pour contrôler les Allomanciens et rassemblant des preuves de corruption.',
				season: 'Hiver',
				year: '1026 FE',
			},
			'hoa-38': {
				title: 'Planifier la révolution',
				description:
					'Depuis sa cachette, Spook coordonne avec Sazed et les rebelles locaux pour planifier le renversement du régime de Quellion et sécuriser la réserve de stockage.',
				season: 'Début du printemps',
				year: '1027 FE',
			},
			'hoa-45': {
				title: 'La voix de Kelsier',
				description:
					"Spook commence à entendre ce qu'il croit être la voix de Kelsier le guidant, le poussant vers des actions de plus en plus dangereuses contre le Citoyen.",
				season: 'Printemps',
				year: '1027 FE',
			},
			'hoa-50': {
				title: 'Le bâtiment en flammes',
				description:
					"Spook reçoit une pointe hémalurgique lors d'un incendie, gagnant des capacités allomantiques renforcées mais devenant aussi vulnérable à l'influence de Ravage à travers la pointe.",
				season: 'Printemps',
				year: '1027 FE',
			},
			'hoa-55': {
				title: 'Révélation',
				description:
					"Spook réalise que la voix qu'il entend n'est pas celle de Kelsier mais celle de Ravage, qui le manipule à travers la pointe hémalurgique. Il s'arrache la pointe dans l'agonie.",
				season: 'Fin du printemps',
				year: '1027 FE',
			},
			'hoa-58': {
				title: "Héros d'Urteau",
				description:
					'Spook mène la révolution contre Quellion, exposant sa corruption. Alors que les flammes consument la ville, Sazed inonde les canaux, sauvant Urteau de la destruction.',
				season: 'Printemps',
				year: '1027 FE',
			},
			'hoa-64': {
				title: 'Convalescence',
				description:
					"Gravement brûlé mais vivant, Spook se remet tandis qu'Urteau se stabilise sous une nouvelle direction et que les provisions de la réserve sont distribuées.",
				season: 'Été',
				year: '1027 FE',
			},
			'hoa-69': {
				title: 'Vers les Puits',
				description:
					"Spook se rend aux Puits de Hathsin avec les forces d'Urteau, rejoignant les armées qui se rassemblent pour ce qui sera la bataille finale.",
				season: 'Automne',
				year: '1027 FE',
			},
			'hoa-83': {
				title: 'Un monde nouveau',
				description:
					"Spook émerge dans le monde refaçonné par Sazed — un champ de fleurs et d'herbe verte sous un ciel bleu. Il porte les dernières paroles de Sazed pour les survivants.",
				season: 'Automne',
				year: '1027 FE',
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
