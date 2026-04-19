/**
 * Spanish (Castilian) data translations.
 * Sources: Official Nova / Ediciones B editions.
 * Primary Translators: Rafael Marín Trechera, Manu Viciano.
 */
import type { DataTranslations } from '../types';
import { enData } from './en-data';

export const esData: DataTranslations = {
	...enData,

	books: {
		tfe: { title: 'El Imperio Final', year: '1021-1022 FE', confidence: 'verified' },
		woa: { title: 'El Pozo de la Ascensión', year: '1022-1024 FE', confidence: 'verified' },
		hoa: { title: 'El Héroe de las Eras', year: '1024-1025 FE', confidence: 'verified' },
	},

	characters: {
		vin: {
			name: 'Vin',
			title: 'Nacida de la bruma',
			description:
				'Una poderosa nacida de la bruma que surgió de las calles de Luthadel para convertirse en una de las figuras más importantes de la historia de Scadrial.',
			confidence: 'verified',
			fieldConfidence: { description: 'verified' },
			titleProgression: {
				'tfe-1': 'Golfilla callejera', // Street urchin [1]
				'tfe-9': 'Aprendiz de nacida de la bruma',
				'tfe-12': 'Lady Valette Renoux',
				'tfe-25': 'Nacida de la bruma',
				'tfe-38': 'Ejecutora del Lord Legislador', // Contextual title [1]
				'woa-1': 'Heredera del Superviviente',
				'woa-47': 'Protectora de Luthadel',
				'hoa-1': 'Emperatriz',
				'hoa-79': 'Recipiente de Conservación', // Preservation is "Conservación"
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
			title: 'El Superviviente',
			description:
				'El carismático líder de la rebelión de Luthadel, famoso por haber escapado de los Pozos de Hathsin.',
			confidence: 'verified',
			fieldConfidence: { description: 'verified' },
			titleProgression: {
				'tfe-0': 'Skaa misterioso',
				'tfe-1': 'El Superviviente de Hathsin',
				'tfe-11': 'Líder de la banda',
				'tfe-21': 'Destructor de los Pozos',
				'tfe-34': 'Mártir de la rebelión',
			},
			titleProgressionConfidence: {
				'tfe-0': 'verified',
				'tfe-1': 'verified',
				'tfe-11': 'verified',
				'tfe-21': 'verified',
				'tfe-34': 'verified',
			},
			secretHistoryTitles: {
				'woa-1': 'Sombra cognitiva',
				'hoa-1': 'Campeón de Conservación',
			},
		},
		sazed: {
			name: 'Sazed',
			title: 'Guardián terrisano', // "Keeper" is canonically "Guardián"
			description:
				'Un Guardián terrisano que preserva el conocimiento de todas las religiones a través de la feroquimia.',
			confidence: 'verified',
			fieldConfidence: { description: 'verified' },
			titleProgression: {
				'tfe-9': 'Mayordomo terrisano', // Steward
				'tfe-22': 'Guardián de las religiones',
				'woa-1': 'Erudito y Guardián',
				'woa-12': 'Buscador de la verdad',
				'woa-52': 'Defensor de Luthadel',
				'hoa-1': 'Embajador del Nuevo Imperio',
				'hoa-50': 'Erudito en crisis',
				'hoa-82': 'El Héroe de las Eras',
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
			title: 'Emperador',
			description:
				'El idealista heredero de la Casa Venture, que se transforma de un noble ratón de biblioteca en un poderoso líder.',
			confidence: 'verified',
			fieldConfidence: { description: 'verified' },
			titleProgression: {
				'tfe-12': 'Noble filósofo',
				'tfe-24': 'Noble disidente',
				'tfe-38': 'Líder inesperado',
				'woa-1': 'Rey del Dominio Central',
				'woa-35': 'Rey depuesto',
				'woa-58': 'Emperador nacido de la bruma',
				'hoa-1': 'Emperador del Nuevo Imperio',
				'hoa-54': 'Emperador guerrero',
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
			title: 'Inquisidor de Acero',
			description:
				'Hermano de Kelsier, que se infiltró en el Ministerio y pagó un precio terrible por su lealtad.',
			confidence: 'verified',
			fieldConfidence: { description: 'verified' },
			titleProgression: {
				'tfe-7': 'Infiltrado rebelde',
				'tfe-13': 'Espía del Ministerio',
				'tfe-38': 'Inquisidor de Acero',
				'woa-4': 'Inquisidor reticente',
				'woa-57': 'Peón de Ruina', // Ruin is "Ruina"
				'hoa-0': 'Mano de Ruina',
				'hoa-79': 'Ojos de Hierro', // Canonical "Ironeyes"
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
			name: 'Fantasma', // Spook is translated to "Fantasma"
			title: 'Ojo de estaño', // Tineye title
			description:
				'El miembro más joven de la banda de Kelsier, un brumoso de estaño que se convierte en un héroe por derecho propio.',
			confidence: 'verified',
			fieldConfidence: { description: 'verified' },
			titleProgression: {
				'tfe-7': 'Joven ojo de estaño',
				'woa-1': 'Explorador',
				'hoa-14': 'Infiltrado',
				'hoa-38': 'Sabio del estaño', // Tin Savant
				'hoa-58': 'Héroe de Urteau',
				'hoa-83': 'Superviviente de las Llamas',
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
				'La capital del Último Imperio y sede del poder del Lord Legislador durante mil años. La única ciudad con muros de piedra en todo el imperio.',
			confidence: 'verified',
		},
		'lake-luthadel': {
			name: 'Lago Luthadel',
			description: 'Cuerpo de agua dulce al este de la capital, teñido por la ceniza.',
			confidence: 'verified',
		},
		'pits-hathsin': {
			name: 'Los Pozos de Hathsin',
			description:
				'Mina de atium y hogar de los kandra. Kelsier fue el único prisionero en escapar con vida.',
			confidence: 'verified',
		},
		fellise: {
			name: 'Fellise',
			description:
				'Retiro aristocrático al oeste de Luthadel donde la casa Renoux tenía una finca.',
			confidence: 'verified',
		},
		holstep: {
			name: 'Holstep',
			description:
				'Ciudad de guarnición al oeste de Luthadel, punto de control para rutas comerciales y militares.',
			confidence: 'verified',
		},
		'ashmount-tyrian': {
			name: 'Tyrian',
			description:
				'El monte de ceniza más cercano a Luthadel, visible desde las murallas de la ciudad.',
			confidence: 'verified',
		},
		urteau: {
			name: 'Urteau',
			description:
				'Capital de la Dominación del Norte y hogar ancestral de la casa Venture. Famosa por sus canales secos que sirven como calles hundidas.',
			confidence: 'verified',
		},
		'ashmount-kalling': {
			name: 'Kalling',
			description:
				'El principal volcán de la Dominación del Norte, con ceniza más oscura y gruesa que la de Tyrian.',
			confidence: 'verified',
		},
		'fadrex-city': {
			name: 'Ciudad de Fadrex',
			description:
				'Centro comercial en la Dominación del Oeste, fortificado por formaciones rocosas naturales de cremnol.',
			confidence: 'verified',
		},
		tremredare: {
			name: 'Tremredare',
			description:
				'Capital histórica de la Dominación del Oeste, abandonada tras El Colapso por su falta de defensas.',
			confidence: 'verified',
		},
		'ashmount-morag': {
			name: 'Morag',
			description: 'Volcán masivo que domina el horizonte occidental del imperio.',
			confidence: 'verified',
		},
		chardees: {
			name: 'Chardees',
			description:
				'Sede ancestral de la casa Hasting, oculta en la cartografía oficial del imperio.',
			confidence: 'verified',
		},
		austrex: {
			name: 'Austrex',
			description: 'Capital de la Dominación del Sur y centro del granero del imperio.',
			confidence: 'verified',
		},
		vetitan: {
			name: 'Vetitan',
			description:
				'Ciudad de la Dominación del Norte construida sobre una de las cuevas de almacenamiento del Lord Legislador. Consumida por la ceniza.',
			confidence: 'verified',
		},
		'ashmount-zerinah': {
			name: 'Zerinah',
			description:
				'El monte de ceniza más meridional del mapa, regulador de la temperatura del hemisferio sur.',
			confidence: 'verified',
		},
		conventical: {
			name: 'Conventículo de Seran',
			description:
				'Fortaleza de los Inquisidores tallada en un acantilado. Donde Sazed descubrió la inscripción de Kwaan.',
			confidence: 'verified',
		},
		tathingdwen: {
			name: 'Tathingdwen',
			description: 'Capital del Dominio de Terris, situada en las montañas del norte.',
			confidence: 'verified',
		},
		'terris-mountains': {
			name: 'Montañas de Terris',
			description:
				'Cordillera donde el pueblo terrisano fue subyugado. Ubicación original del Pozo de la Ascensión.',
			confidence: 'verified',
		},
		'tincut-fastness': {
			name: 'Bastión de Tincut',
			description: 'Fortaleza oculta en las montañas de Terris donde el Sínodo se refugió.',
			confidence: 'probable',
		},
		'high-villages': {
			name: 'Aldeas Altas',
			description:
				'Red de asentamientos terrisanos ocultos en las montañas con túneles subterráneos.',
			confidence: 'probable',
		},
		'imperial-canal': {
			name: 'Canal Imperial',
			description:
				'Arteria artificial que conecta Tathingdwen con Luthadel para el transporte de recursos.',
			confidence: 'probable',
		},
		'kandra-homeland': {
			name: 'Hogar de los Kandra',
			description:
				'Cavernas profundas bajo los Pozos de Hathsin donde los kandra custodian los secretos del Lord Legislador.',
			confidence: 'verified',
		},
		'ashmount-torinost': {
			name: 'Torinost',
			description: 'Pico masivo en el norte de la Dominación del Oeste.',
			confidence: 'verified',
		},
		'ashmount-faleast': {
			name: 'Faleast',
			description:
				'Rasgo geológico principal de la Dominación del Este, con ceniza más gruesa por el contenido de sílice.',
			confidence: 'verified',
		},
		'ashmount-doriel': {
			name: 'Doriel',
			description: 'Monte de ceniza al sur de Luthadel, cerca de la costa del Mar del Sur.',
			confidence: 'verified',
		},
		'statlin-city': {
			name: 'Ciudad Statlin',
			description: 'Ancla sur de la red de cuevas de almacenamiento del Lord Legislador.',
			confidence: 'probable',
		},
		'tresting-plantation': {
			name: 'Plantación Tresting',
			description:
				'Plantación skaa propiedad del lord Tresting, con cientos de trabajadores y una guarnición de soldados.',
			confidence: 'probable',
		},
		'lekal-city': {
			name: 'Ciudad Lekal',
			description:
				'Ciudad-fortaleza de la casa Lekal, donde la ciudad entera es una extensión de la propiedad noble.',
			confidence: 'verified',
		},
		mantiz: {
			name: 'Mantiz',
			description:
				'Ciudad en el norte de la Dominación del Oeste con cuatro grandes torreones y acumulación severa de ceniza.',
			confidence: 'verified',
		},
		'channerel-river': {
			name: 'Río Channerel',
			description:
				'La arteria fluvial principal del imperio, vital para el comercio y el transporte.',
			confidence: 'verified',
		},
		'burnlands-west': {
			name: 'Tierras Quemadas del Oeste',
			description:
				'Desierto inhabitable en el borde occidental del imperio, demasiado cerca del sol.',
			confidence: 'verified',
		},
		'burnlands-east': {
			name: 'Tierras Quemadas del Este',
			description: 'Desierto inhabitable en el borde oriental del imperio.',
			confidence: 'verified',
		},
		'arguois-caverns': {
			name: 'Cavernas de Arguois',
			description:
				'Red de cuevas entre Luthadel y los Pozos, usada como base de entrenamiento del ejército rebelde.',
			confidence: 'verified',
		},
		garthwood: {
			name: 'Garthwood',
			description: 'Asentamiento donde Sazed enseñó religiones a los skaa liberados.',
			confidence: 'probable',
		},
		'straffs-camp': {
			name: 'Campamento de Straff',
			description: 'Campamento militar de Straff Venture al norte de Luthadel durante el asedio.',
			confidence: 'probable',
		},
		'koloss-camp': {
			name: 'Campamento Koloss',
			description: 'Posición del ejército koloss cerca Luthadel durante el asedio.',
			confidence: 'probable',
		},
		longsfollow: {
			name: 'Longsfollow',
			description: 'Pueblo en los pasos de montaña de la Dominación del Oeste.',
			confidence: 'probable',
		},
		chakatah: {
			name: 'Chakatah',
			description: 'Pequeña aldea minera en la Dominación del Oeste.',
			confidence: 'probable',
		},
		'north-seran': {
			name: 'Norte de Seran',
			description: 'Territorio cercano al Conventículo de Seran.',
			confidence: 'probable',
		},
		'river-seran': {
			name: 'Río Seran',
			description:
				'Importante vía fluvial del sur usada por el Ministerio para transportar materiales.',
			confidence: 'probable',
		},
		urbene: {
			name: 'Urbene',
			description: 'Punto de paso del Ministerio para envíos de grano hacia la capital.',
			confidence: 'probable',
		},
		erlac: {
			name: 'Erlac',
			description:
				'Guarnición al suroeste de Luthadel que patrullaba los caminos hacia la capital.',
			confidence: 'probable',
		},
		'valtroux-city-central': {
			name: 'Valtroux',
			description: 'Ciudad de guarnición al noroeste de Luthadel con un ejército permanente.',
			confidence: 'probable',
		},
		'haverfrex-cannery-central': {
			name: 'Haverfrex',
			description:
				'Punto industrial en la Dominación del Oeste, nodo de suministros para el ejército de Cett.',
			confidence: 'probable',
		},
	},

	cities: {
		luthadel: {
			name: 'Luthadel',
			description:
				'La capital del Último Imperio y centro cultural durante el reinado del Lord Legislador. La única ciudad con muros artificiales. Construida con simetría radial alrededor de Kredik Shaw, que se asienta directamente sobre el Pozo de la Ascensión. Ocho puertas con nombres de metales alománticos dan acceso a través de las murallas defensivas.',
			confidence: 'verified',
		},
		urteau: {
			name: 'Urteau',
			description:
				'La ciudad más grande de la Dominación del Norte, hogar ancestral de la casa Venture. Definida por sus canales secos que sirven como calles hundidas llenas de ceniza. Los canales fueron drenados para almacenar agua en un lago subterráneo oculto. Sin muros por decreto del Lord Legislador.',
			confidence: 'verified',
		},
		fadrex: {
			name: 'Ciudad de Fadrex',
			description:
				'Centro comercial en la Dominación del Oeste, fortificado por formaciones rocosas naturales de cremnol que sirven como murallas naturales. Contiene una de las cuevas de almacenamiento secretas del Lord Legislador.',
			confidence: 'verified',
		},
	},

	cityLandmarks: {
		luthadel: {
			'kredik-shaw': {
				name: 'Kredik Shaw',
				description:
					'El palacio del Lord Legislador, la "Colina de las Mil Agujas". Construido directamente sobre la entrada al Pozo de la Ascensión.',
				confidence: 'verified',
			},
			'iron-gate': {
				name: 'Puerta del Hierro',
				description: 'Puerta norte, que conduce a Urteau y la Dominación del Norte.',
				confidence: 'verified',
			},
			'steel-gate': {
				name: 'Puerta del Acero',
				description: 'Puerta noroeste, en dirección a los Pozos de Hathsin.',
				confidence: 'verified',
			},
			'pewter-gate': {
				name: 'Puerta del Peltre',
				description: 'Puerta noreste de Luthadel.',
				confidence: 'verified',
			},
			'zinc-gate': {
				name: 'Puerta del Zinc',
				description: 'Puerta sureste de Luthadel.',
				confidence: 'verified',
			},
			'brass-gate': {
				name: 'Puerta del Latón',
				description: 'Puerta sur, hacia Fellise y la Dominación del Sur.',
				confidence: 'verified',
			},
			'copper-gate': {
				name: 'Puerta del Cobre',
				description: 'Puerta suroeste, cerca del distrito industrial.',
				confidence: 'verified',
			},
			'bronze-gate': {
				name: 'Puerta del Bronce',
				description: 'Puerta oeste, hacia el Río Channerel.',
				confidence: 'verified',
			},
			'keep-venture': {
				name: 'Torreón Venture',
				description:
					'Fortaleza de la casa Venture. Base de operaciones de Elend y sede de bailes nobles.',
				confidence: 'verified',
			},
			'keep-elariel': {
				name: 'Torreón Elariel',
				description: 'Hogar de la casa Elariel, una de las Grandes Casas de Luthadel.',
				confidence: 'verified',
			},
			'keep-hasting': {
				name: 'Torreón Hasting',
				description: 'Cerca del palacio; cayó temprano durante la guerra entre casas.',
				confidence: 'verified',
			},
			'clubs-shop': {
				name: 'Taller de Clubs',
				description: 'Taller de carpintería usado como base de operaciones de la banda de Kelsier.',
				confidence: 'verified',
			},
			'camons-safehouse': {
				name: 'Guarida de Camon',
				description: 'Refugio inicial en los barrios bajos donde Vin fue reclutada por Kelsier.',
				confidence: 'verified',
			},
			'fountain-square': {
				name: 'Plaza de la Fuente',
				description:
					'Escenario de ejecuciones públicas y la muerte de Kelsier. Renombrada la Plaza del Superviviente.',
				confidence: 'verified',
			},
			'lake-luthadel': {
				name: 'Lago Luthadel',
				description: 'Gran cuerpo de agua dulce inmediatamente al este de las murallas.',
				confidence: 'verified',
			},
			'canton-of-finance': {
				name: 'Cantón de Finanzas',
				description:
					'Cuartel general del Ministerio de Acero donde los obligadores gestionan las finanzas del imperio.',
				confidence: 'verified',
			},
			'skaa-hovels': {
				name: 'Barrios Skaa',
				description: 'Los distritos empobrecidos de los skaa donde operan las bandas callejeras.',
				confidence: 'verified',
			},
			'well-of-ascension': {
				name: 'Pozo de la Ascensión',
				description:
					'La fuente de poder oculta bajo Kredik Shaw donde el poder se acumula cada 1024 años.',
				confidence: 'verified',
			},
			'tin-gate-north': {
				name: 'Puerta del Estaño (Norte)',
				description: 'La zona de la puerta noreste.',
				confidence: 'verified',
			},
			'assembly-hall': {
				name: 'Sala de la Asamblea',
				description:
					'Edificio donde el parlamento democrático de Elend se reunió durante el asedio de Luthadel.',
				confidence: 'probable',
			},
			'keep-tekiel': {
				name: 'Torreón Tekiel',
				description:
					'Fortaleza de la casa Tekiel, objetivo de la campaña de asesinatos de Kelsier.',
				confidence: 'verified',
			},
			'luthadel-garrison': {
				name: 'Guarnición de Luthadel',
				description: 'Campo de entrenamiento militar y cuarteles de la ciudad.',
				confidence: 'probable',
			},
			'warehouse-district': {
				name: 'Distrito de Almacenes',
				description: 'Distrito industrial cerca de los canales donde la banda almacenaba armas.',
				confidence: 'probable',
			},
			'canton-inquisition': {
				name: 'Cantón de la Inquisición',
				description:
					'Base principal de los Inquisidores de Acero, un lugar temido por nobles y skaa.',
				confidence: 'verified',
			},
			'canton-resource': {
				name: 'Cantón de Recursos',
				description: 'Centro administrativo de la economía del imperio.',
				confidence: 'verified',
			},
			'canton-orthodoxy': {
				name: 'Cantón de la Ortodoxia',
				description:
					'Centro religioso encargado de mantener la pureza del culto al Lord Legislador.',
				confidence: 'verified',
			},
			'keep-lekal': {
				name: 'Torreón Lekal',
				description:
					'Uno de los grandes torreones de la casa Lekal, con docenas de torres y vitrales.',
				confidence: 'verified',
			},
			'hotel-district': {
				name: 'Distrito de Hoteles',
				description: 'Zona acomodada para nobles visitantes de las dominaciones exteriores.',
				confidence: 'probable',
			},
			'commercial-district': {
				name: 'Distrito Comercial',
				description: 'Centro de comercio legal donde las casas nobles negociaban contratos.',
				confidence: 'probable',
			},
			'industrial-district': {
				name: 'Distrito Industrial',
				description: 'Región de herrerías, molinos y talleres cerca del canal.',
				confidence: 'probable',
			},
			'ahlstrom-square': {
				name: 'Plaza Ahlstrom',
				description: 'Plaza pública prominente en Luthadel.',
				confidence: 'probable',
			},
			'south-bridge': {
				name: 'Puente Sur',
				description: 'Punto de tránsito sobre las vías fluviales de la ciudad.',
				confidence: 'probable',
			},
			'the-twists': {
				name: 'Los Enredos',
				description:
					'Laberíntico distrito de barrios bajos, santuario del hampa skaa y la banda de Kelsier.',
				confidence: 'verified',
			},
			sootwarrens: {
				name: 'Madrigueras de Hollín',
				description: 'Una de las secciones más empobrecidas, donde la ceniza se acumula más.',
				confidence: 'probable',
			},
			'the-cracks': {
				name: 'Las Grietas',
				description:
					'Sector miserable con infraestructura deteriorada y alta densidad poblacional.',
				confidence: 'verified',
			},
			'aspen-row': {
				name: 'Calle del Álamo',
				description: 'Calle residencial de trabajadores cualificados y sirvientes nobles.',
				confidence: 'probable',
			},
			blockstreet: {
				name: 'Calle del Bloque',
				description: 'Distrito residencial denso con planificación cuadriculada para los skaa.',
				confidence: 'probable',
			},
		},
		urteau: {
			'ministry-canton': {
				name: 'Cantón de la Inquisición',
				description:
					'Sede del Ministerio de Acero sobre la tercera cueva de almacenamiento que contiene un lago subterráneo.',
				confidence: 'verified',
			},
			marketpit: {
				name: 'El Foso del Mercado',
				description:
					'El más ancho de los canales secos, funcionando como bulevar principal y mercado central.',
				confidence: 'verified',
			},
			'spooks-hideout': {
				name: 'Escondite de Fantasma',
				description: 'La "Casa Ardiente" usada por la banda de Fantasma durante la revuelta.',
				confidence: 'probable',
			},
			'citizens-estate': {
				name: 'Finca del Ciudadano',
				description: 'Mansión noble apropiada por Quellion como sede de su poder.',
				confidence: 'probable',
			},
			'luthadel-gate': {
				name: 'Puerta de Luthadel',
				description: 'Entrada sur a la red de canales, en dirección a Luthadel.',
				confidence: 'probable',
			},
			'venture-estate': {
				name: 'Propiedad de la Casa Venture',
				description:
					'Hogar ancestral de la familia Venture en Urteau, abandonado bajo el régimen de Quellion.',
				confidence: 'probable',
			},
			'burning-district': {
				name: 'El Distrito en Llamas',
				description:
					'Aproximadamente un tercio de la ciudad destruido por incendios durante la rebelión de Fantasma.',
				confidence: 'probable',
			},
			'skaa-slums': {
				name: 'Barrios Bajos Skaa',
				description:
					'Distritos empobrecidos donde los revolucionarios se reúnen en los canales secos.',
				confidence: 'probable',
			},
			'the-harrows': {
				name: 'Los Surcos',
				description:
					'Laberinto de canales estrechos e interconectados en la sección sur de la ciudad.',
				confidence: 'probable',
			},
			'west-docks': {
				name: 'Muelles del Oeste',
				description:
					'Punto final occidental de la red de canales para carga y descarga de mercancías.',
				confidence: 'probable',
			},
			'fedre-aqueduct': {
				name: 'Acueducto del Lord Fedre',
				description:
					'Infraestructura monumental anterior al Colapso que una vez abasteció de agua a la ciudad.',
				confidence: 'probable',
			},
			'white-streets': {
				name: 'Las Calles Blancas',
				description: 'Distrito acomodado donde los adoquines se mantenían limpios de ceniza.',
				confidence: 'probable',
			},
			'citizens-home': {
				name: 'Hogar del Ciudadano',
				description:
					'Cuartel general de Quellion, el skaa que tomó el poder tras la caída del Lord Legislador.',
				confidence: 'probable',
			},
			'interchange-building': {
				name: 'Edificio de Intercambio',
				description:
					'Centro logístico para el movimiento de mercancías entre niveles de la ciudad.',
				confidence: 'probable',
			},
			'old-city-square': {
				name: 'Plaza de la Ciudad Vieja',
				description:
					'Centro histórico de Urteau, escenario de agitación política durante el reinado del Ciudadano.',
				confidence: 'probable',
			},
			'canton-orthodoxy-urteau': {
				name: 'Cantón de la Ortodoxia',
				description: 'Gestionaba los asuntos espirituales y legales de la Dominación del Norte.',
				confidence: 'probable',
			},
		},
		fadrex: {
			'keep-orielle': {
				name: 'Torreón Orielle',
				description:
					'Torreón principal en terreno elevado, usado por el obligador Aradan Yomen como palacio.',
				confidence: 'probable',
			},
			'storage-cache': {
				name: 'Cueva de Almacenamiento',
				description:
					'Caché secreto con comida y electrum, oculto en las formaciones rocosas del norte.',
				confidence: 'verified',
			},
			'cetts-base': {
				name: 'Base de Cett',
				description: 'Recinto fortificado de Ashweather Cett antes de partir a Luthadel.',
				confidence: 'probable',
			},
			'cremnol-wall-north': {
				name: 'Muro de Cremnol Norte',
				description: 'Estante natural de roca roja y naranja que protege la ciudad por el norte.',
				confidence: 'verified',
			},
			'cremnol-wall-south': {
				name: 'Muro de Cremnol Sur',
				description: 'Estante natural de roca que forma una barrera geológica al sur.',
				confidence: 'verified',
			},
			'yomens-palace': {
				name: 'Palacio de Yomen',
				description: 'Sede administrativa del obligador Aradan Yomen.',
				confidence: 'probable',
			},
			'main-gate': {
				name: 'Puerta Principal',
				description: 'Entrada principal a la ciudad a través de las formaciones geológicas.',
				confidence: 'probable',
			},
			'conway-canal': {
				name: 'Canal Conway',
				description: 'Uno de los canales principales de la zona para comercio y transporte.',
				confidence: 'probable',
			},
			'city-walls-east': {
				name: 'Murallas Orientales',
				description: 'Perímetro defensivo oriental formado por formaciones rocosas naturales.',
				confidence: 'probable',
			},
			'ash-mounds': {
				name: 'Montículos de Ceniza',
				description:
					'Llanuras cubiertas de ceniza fuera de las murallas donde acampaba el ejército sitiador de Elend.',
				confidence: 'probable',
			},
			'canton-resource-fadrex': {
				name: 'Cantón de Recursos',
				description: 'Cantón del Ministerio usado por Yomen como prisión para Vin.',
				confidence: 'probable',
			},
			'informants-residence': {
				name: 'Residencia del Informante',
				description:
					'Hogar de un anciano informante con profundo conocimiento de los secretos de la ciudad.',
				confidence: 'probable',
			},
			'deep-wells': {
				name: 'Pozos Profundos',
				description:
					'Recursos vitales de agua en una ciudad sin ríos importantes, fuertemente vigilados.',
				confidence: 'probable',
			},
			'noble-quarter': {
				name: 'Barrio Noble',
				description: 'Zona residencial de clase alta en la ciudad.',
				confidence: 'probable',
			},
		},
	},


	movements: {
		...enData.movements,
		kelsier: {
			...enData.movements.kelsier,
			// ── El Imperio Final ───────────────────────────────────────────
			'tfe-0': {
				title: 'El Superviviente Regresa',
				description:
					'Kelsier llega a la plantación de lord Tresting, donde el noble agasaja a un obligador enviado por lord Venture con la esperanza de conseguir una asociación comercial. Esa noche, cuando están a punto de llevarse a una joven skaa ante Tresting, Kelsier interviene: mata a Tresting, a todos sus obligadores, capataces y soldados, y acaba incendiando la mansión.',
				season: 'Primavera',
				year: '1021 IF',
			},
			'tfe-1': {
				title: 'Observador oculto',
				description:
					'Kelsier observa las operaciones de la banda de Camon desde las sombras, advirtiendo el uso inconsciente de la alomancia por parte de Vin: una huérfana callejera con poderes de nacida de la bruma.',
				season: 'Primavera',
				year: '1021 IF',
			},
			'tfe-3': {
				title: 'Reclutando a Vin',
				description:
					'Vin intenta huir de la guarida de Camon, pero Ulef la traiciona. Kelsier interviene y la salva de la paliza de Camon. Asciende a Milev a jefe de la banda, se queda con los tres mil boxings como pago por encargarse del obligador y el Inquisidor, y alquila la guarida para la reunión de esa noche. Luego pone a prueba a Vin y confirma que es una nacida de la bruma.',
				season: 'Primavera',
				year: '1021 IF',
			},
			'tfe-5': {
				title: 'El robo del atium',
				description:
					'Kelsier, Dockson y Vin suben a la azotea. Kelsier se equipa y se lanza a las brumas para asaltar la Fortaleza Venture y robar atium. Consigue la caja fuerte, pero tiene que enfrentarse a mataneblinas en su huida. Escapa con el atium y financia la rebelión.',
				season: 'Primavera',
				year: '1021 IF',
			},
			'tfe-6': {
				title: 'La banda al completo',
				description:
					'En la carpintería de Clubs, Kelsier y la banda planean la destrucción del Imperio Final. Marsh llega finalmente y todos se marchan para que los dos hermanos hablen a solas. Vin vuelve a escuchar a escondidas tras la puerta.',
				season: 'Primavera',
				year: '1021 IF',
			},
			'tfe-7': {
				title: 'Entrenando a la aprendiz',
				description:
					'Kelsier saca a Vin a su primera noche de entrenamiento y le entrega una capa de brumas. Le enseña los ocho metales básicos junto a las murallas de Luthadel, cerca de la Puerta de Acero.',
				season: 'Primavera tardía',
				year: '1021 IF',
			},
			'tfe-8': {
				title: 'La tapadera Renoux',
				description:
					'Kelsier lleva a Vin al otro lado de las murallas de Luthadel, donde se topan con un espectro de bruma. En la carretera principal, Sazed les espera con un carruaje y los lleva a Fellise. Por el camino, Kelsier ofrece a Vin los tres mil boxings y la oportunidad de abandonar la banda si no confía en él. En la finca de lord Renoux, establece la identidad falsa de Vin como lady Valette.',
				season: 'Verano',
				year: '1021 IF',
			},
			'tfe-10': {
				title: 'Planificando la revolución',
				description:
					'De vuelta en Luthadel, Kelsier celebra una reunión de progreso en la tienda de Clubs. Antes, pregunta a Sazed por una religión con poder —Sazed le habla del jaísmo— y si alguna considera sagrado el exterminio de los nobles. La reunión termina cuando un soldado de Hammond informa de que el Ministerio ha encontrado la antigua guarida de Camon.',
				season: 'Verano',
				year: '1021 IF',
			},
			'tfe-10.2': {
				title: 'El mitin del almacén',
				description:
					'Kelsier predica la revolución ante trabajadores skaa reunidos en un mitin secreto en el distrito de almacenes. Breeze y sus aplacadores y agitadores manipulan a la multitud para que sea más receptiva, usando la leyenda del Superviviente de Hathsin para inspirar la rebelión.',
				season: 'Verano',
				year: '1021 IF',
			},
			'tfe-11': {
				title: 'La masacre de la guarida de Camon',
				description:
					'Kelsier y la banda investigan la guarida destruida. Tras marcharse, Kelsier intenta encontrar a Camon entre los mendigos. Halla el cadáver de Camon colgado de un gancho clavado en su boca, muñecas y tobillos atados, el cuerpo torturado. Este método de ejecución se reserva a quienes abusan de la alomancia. Vin había seguido a Kelsier con éxito y hablan brevemente tras el descubrimiento.',
				season: 'Verano',
				year: '1021 IF',
			},
			'tfe-13': {
				title: 'Planes en Fellise',
				description:
					'Kelsier se reúne con Vin y Sazed en la finca de lord Renoux en Fellise para revisar la inteligencia obtenida en el primer baile de Vin. Se entera de que el padre de Vin estuvo en el baile y luego se marcha a las brumas para volver a Luthadel.',
				season: 'Verano',
				year: '1021 IF',
			},
			'tfe-14': {
				title: 'Reconocimiento del palacio',
				description:
					'Kelsier lleva a Vin a Kredik Shaw para explorar el edificio que el lord Legislador visita cada tres días. Se abren paso luchando, pero tres Inquisidores de Acero convergen sobre ellos. Kelsier se separa de Vin en el caos. Vin escapa gravemente herida aferrándose a un misterioso libro encuadernado en cuero.',
				season: 'Verano',
				year: '1021 IF',
			},
			'tfe-15': {
				title: 'Después de Kredik Shaw',
				description:
					'La banda discute la decisión de Kelsier de llevar a Vin a Kredik Shaw. Antes de poder salir a buscarla, Sazed llega cargando con ella. Dockson está furioso por el riesgo. Kelsier y Dockson advierten el libro encuadernado en cuero que Vin trajo consigo; Sazed lo identifica como escrito en khlennio, la lengua de la patria del lord Legislador anterior a la Ascensión, y cree poder traducirlo.',
				season: 'Verano',
				year: '1021 IF',
			},
			'tfe-16': {
				title: 'Velando a Vin',
				description:
					'Kelsier permanece en la tienda de Clubs velando a Vin mientras se recupera de las heridas sufridas en Kredik Shaw, presente cuando finalmente despierta.',
				season: 'Verano',
				year: '1021 IF',
			},
			'tfe-17': {
				title: 'Reunión en la finca Renoux',
				description:
					'Kelsier viaja a Fellise con Breeze, Yeden y Dockson para reunirse con lord Renoux en su finca y discutir la siguiente fase de la rebelión.',
				season: 'Verano',
				year: '1021 IF',
			},
			'tfe-19': {
				title: 'Avivando la guerra de casas',
				description:
					'Kelsier siembra el caos para alentar la Guerra de Casas dejando el cuerpo evidentemente asesinado de lord Charrs Entrone en el jardín de la Fortaleza Tekiel. Luego va a los Hollinbarrios para encontrarse con Hoid —un informante que se hace pasar por contacto callejero— y averiguar qué rumores hay sobre la Casa Renoux. De Hoid también se entera de que lady Shan Elariel es una aplacadora.',
				season: 'Verano tardío',
				year: '1021 IF',
			},
			'tfe-19.2': {
				title: 'Encuentro con lord Straff',
				description:
					'Kelsier acude a la plaza Ahlstrom haciéndose pasar por un skaa mendigo, enfermo y lisiado, informante callejero, para encontrarse con lord Straff Venture, líder de la Casa Venture. Descubre que los rumores sobre el Superviviente de Hathsin se están extendiendo y que se habla de un Undécimo Metal.',
				season: 'Verano tardío',
				year: '1021 IF',
			},
			'tfe-19.3': {
				title: 'Regreso a Renoux',
				description:
					'Kelsier vuelve a la mansión Renoux por la Ruta de Pinchos e intercambia información con Vin, Sazed y Renoux. Le da un sermón a Vin sobre los nobles, insistiendo en que no les importan los skaa y que debe mantenerse alejada de Elend.',
				season: 'Verano tardío',
				year: '1021 IF',
			},
			'tfe-20': {
				title: 'Supervisando los suministros',
				description:
					'Kelsier está en la finca Renoux de Fellise supervisando las armas y suministros que se cargan en carros para enviarlos a la rebelión.',
				season: 'Verano tardío',
				year: '1021 IF',
			},
			'tfe-21': {
				title: 'El ejército rebelde',
				description:
					'Kelsier lee una traducción del diario del lord Legislador mientras viaja en barca por un canal hacia el norte. La caravana se detiene en una esclusa y Kelsier, los reclutas y los suministros se dirigen a las cuevas donde el ejército rebelde se entrena. Superando los recuerdos de los Pozos de Hathsin, entra en el complejo de las Cavernas de Arguois e inspecciona el ejército que Ham ha estado formando. Durante una cena, Kelsier agita las emociones de Bilg, con la intención de usarlo como ejemplo. Bilg y Demoux se baten en duelo; Kelsier usa la alomancia para ayudar a Demoux —el más pequeño de los dos— a ganar. Tras el duelo, la confianza del ejército se dispara al creer Yeden que Kelsier puede conceder sus poderes a otros. Kelsier quiere que Ham vuelva a Luthadel con él, dejando el ejército a cargo de Yeden.',
				season: 'Otoño',
				year: '1021 IF',
			},
			'tfe-23': {
				title: 'Siguiendo a Vin',
				description:
					'Kelsier aparece fuera de la ventana de la torre donde Vin espía al grupo de Elend en la Fortaleza Hasting. Desdeña su charla idealista sobre cambiar el mundo como comportamiento típico de jóvenes nobles que nunca lleva a un cambio real. Ambos se marchan por caminos separados.',
				season: 'Otoño',
				year: '1021 IF',
			},
			'tfe-24': {
				title: 'Reunión de situación',
				description:
					'Kelsier llega a la tienda de Clubs, donde se ha reunido gran parte de la banda. Discute el estado de la misión y comparte una copa nocturna con Spook, Ham y Clubs. Pide a Ham que vaya a la Guarnición a recabar información.',
				season: 'Otoño',
				year: '1021 IF',
			},
			'tfe-25': {
				title: 'Decisión desesperada',
				description:
					'En la tienda de Clubs, Kelsier se entera de que la rebelión skaa ha atacado la Guarnición de Holstep y la de Luthadel se dirige al norte. Decide intentar avisar al ejército rebelde y hace que Vin trague cinco cuentas de peltre para una larga carrera de peltre hacia el norte.',
				season: 'Otoño tardío',
				year: '1021 IF',
			},
			'tfe-25.2': {
				title: 'Desastre en Holstep',
				description:
					'Kelsier y Vin corren durante dieciséis horas quemando peltre sin parar. Se topan con los restos del ejército rebelde, rodeado y masacrado por la Guarnición de Valtroux. Kelsier quiere unirse a la lucha y salvar a quien pueda, pero Vin le convence de que no son invencibles. Continúan hasta las Cavernas de Arguois, donde 2.000 soldados han sobrevivido gracias a que Mennis los mantuvo preparados. Mennis le dice a Kelsier que no se aflija demasiado: ha sido una de las mayores victorias skaa contra el lord Legislador en siglos.',
				season: 'Otoño tardío',
				year: '1021 IF',
			},
			'tfe-26': {
				title: 'Recogiendo los pedazos',
				description:
					'De vuelta en la tienda de Clubs tras dos semanas de regreso de las cavernas, la banda habla sobre el futuro del plan: parece un fracaso total. Breeze culpa a Kelsier de perseguir fama y gloria. Kelsier admite el revés pero se niega a abandonar la revolución.',
				season: 'Invierno',
				year: '1021 IF',
			},
			'tfe-26.2': {
				title: 'Las ejecuciones',
				description:
					'Spook anuncia ejecuciones en la Plaza de la Fuente. La banda se dirige allí, sobornando a alguien en un edificio para acceder a la azotea. Contemplan la matanza de numerosos skaa mientras su sangre se vierte en la fuente. Kelsier convence a la banda de continuar, señalando la atrocidad: «Este es nuestro enemigo. Aquí no hay cuartel ni marcha atrás.»',
				season: 'Invierno',
				year: '1021 IF',
			},
			'tfe-27': {
				title: 'Nueva estrategia',
				description:
					'La banda regresa a la tienda de Clubs para planear sus siguientes movimientos: iniciar una guerra entre las casas nobles. Sazed trae un mensaje de Marsh indicando a Kelsier dónde pueden reunirse en los Recodos.',
				season: 'Invierno',
				year: '1021 IF',
			},
			'tfe-27.2': {
				title: 'El metal dorado',
				description:
					'Kelsier y Vin se dirigen a un edificio abandonado en los Recodos horas antes de la reunión con Marsh. Mientras esperan, Kelsier habla del oro —el noveno metal alomántico que permite al usuario ver una versión alternativa de su pasado—. También le explica la feruquimia y le da algo de oro para que lo queme por primera vez. Cuando Marsh llega, con los tatuajes de un obligador de rango bajo del Cantón de Inquisición, describe las estaciones de aplacamiento en Luthadel y revela que los Inquisidores pueden morir de vejez.',
				season: 'Invierno',
				year: '1021 IF',
			},
			'tfe-29': {
				title: 'Consejo de guerra en Renoux',
				description:
					'Kelsier se reúne con la mayor parte de la banda en la finca de Renoux en Fellise, repasando un mapa muy detallado de las defensas de Luthadel proporcionado por Marsh. Al estudiarlo, descubren que la banda de Theron fue atacada recientemente por el Ministerio. Esa noche, incapaz de dormir, Kelsier pide a Sazed que le cuente algunas de las religiones que conoce.',
				season: 'Invierno',
				year: '1021 IF',
			},
			'tfe-31': {
				title: 'Regañando a la aprendiz',
				description:
					'Kelsier y Vin regresan a la tienda de Clubs después de que Vin matara a lady Shan Elariel —una nacida de la bruma en toda regla— en la Fortaleza Venture. Kelsier regaña a Vin por el combate temerario, pero ella le grita que nobles y skaa no son tan diferentes, y que Elend Venture es un buen hombre que merece ser protegido.',
				season: 'Invierno',
				year: '1021 IF',
			},
			'tfe-32': {
				title: 'Encontrando a Marsh',
				description:
					'Kelsier y Vin encuentran el cuerpo de Marsh, desangrado por completo, una cáscara sin vida. De vuelta en la tienda de Clubs, descubren una carta de Marsh explicando que los Inquisidores probablemente le encontrarían.',
				season: 'Invierno',
				year: '1022 IF',
			},
			'tfe-32.2': {
				title: 'Destruyendo los Pozos',
				description:
					'Kelsier regresa a los Pozos de Hathsin, el lugar de su mayor sufrimiento. Mata a todos los guardias y tiende la mano a un skaa llamado Wallin que sale de la caverna. Luego destruye todos los cristales de atium, cortando el recurso más valioso del lord Legislador en una sola noche.',
				season: 'Invierno',
				year: '1022 IF',
			},
			'tfe-33': {
				title: 'El refugio de emergencia',
				description:
					'Kelsier regresa a un húmedo sótano de reserva cerca de la tienda de Clubs, apenas tres habitaciones. Anuncia que ha destruido todo el atium de los Pozos de Hathsin.',
				season: 'Primavera temprana',
				year: '1022 IF',
			},
			'tfe-33.2': {
				title: 'La pelea con el Inquisidor',
				description:
					'Todos siguen a Kelsier hasta la Plaza de la Fuente. Ven a Spook y lord Renoux en uno de los carros de ejecución. Kelsier lucha contra un Inquisidor en la plaza, una trampa que casi con seguridad sabía que sería.',
				season: 'Primavera temprana',
				year: '1022 IF',
			},
			'tfe-34': {
				title: 'La última batalla del Superviviente',
				description:
					'Kelsier lucha contra el Inquisidor en un combate a muerte en la Plaza de la Fuente, ambos quemando atium. Es un maestro de Empujar y Tirar, moviendo metal por el aire con pericia. Mata al Inquisidor y los skaa empiezan a corear «El Superviviente de Hathsin». El lord Legislador llega en un carruaje negro. Uno de los matones de Ham le clava una lanza —sigue caminando—. Dos lanzas —sigue caminando—. El lord Legislador abofetea a Kelsier, arranca una lanza de su propio cuerpo y se la hunde a Kelsier. Muere con una sonrisa, convirtiéndose en el mártir que enciende la revolución. Kelsier representa la Esperanza.',
				season: 'Primavera temprana',
				year: '1022 IF',
			},
			'tfe-35': {
				title: 'Más allá de la muerte',
				description:
					'En el refugio de emergencia cerca de la tienda de Clubs, la banda ve al kandra, antes lord Renoux, usando el cuerpo y los huesos de Kelsier: el plan final. Kelsier había dejado cartas a cada miembro con instrucciones para tomar la ciudad. Su muerte fue la chispa que prendió la revolución en todo Luthadel.',
				season: 'Primavera temprana',
				year: '1022 IF',
			},
		},
		vin: {
			...enData.movements.vin,
			// ── El Imperio Final ───────────────────────────────────────────
			'tfe-1': {
				title: 'Huérfana callejera',
				description:
					'Vin es convocada ante su jefe de banda Camon, que la trata con rudeza. Ella usa inconscientemente su Suerte —una forma de aplacamiento alomántico— para calmarlo. Camon se hace pasar por lord Jedue, un noble desesperado por nuevos contratos, y se prepara para estafar al Ministerio del Acero. Vin usa su Suerte con el obligador prelán Laird para que no rechace las súplicas de Camon.',
				season: 'Primavera',
				year: '1021 IF',
			},
			'tfe-2': {
				title: 'La estafa al Ministerio',
				description:
					'Camon, como lord Jedue, lleva a Vin al Cantón de Finanzas para estafar al Ministerio. Vin usa su Suerte con el alto prelán, que entrega tres mil boxings a Camon. Kelsier y Dockson, sentados en la sala de espera, detectan los pulsos alománticos de Vin. Después, ven a un Inquisidor de Acero siguiendo al séquito de Camon.',
				season: 'Primavera',
				year: '1021 IF',
			},
			'tfe-4': {
				title: 'Reclutada',
				description:
					'Kelsier presenta su plan para derrocar el Imperio Final a la banda en la carpintería de Clubs. La banda acepta, salvo Clubs, que se marcha antes de regresar. Kelsier revela que Vin es una nacida de la bruma y les habla del Undécimo Metal, mostrándoselo.',
				season: 'Primavera',
				year: '1021 IF',
			},
			'tfe-7': {
				title: 'Entrenamiento de nacida de la bruma',
				description:
					'Kelsier saca a Vin a su primera noche de entrenamiento y le da una capa de brumas. Le enseña los ocho metales básicos —estaño, peltre, hierro, acero, zinc, latón, cobre y bronce— terminando la noche en las murallas de Luthadel.',
				season: 'Primavera tardía',
				year: '1021 IF',
			},
			'tfe-8': {
				title: 'La finca Renoux',
				description:
					'Vin y Kelsier saltan las murallas de Luthadel hacia la noche, donde Vin se topa con un espectro de bruma por primera vez. En la carretera, Sazed espera con un carruaje y los lleva a Fellise. Por el camino, Kelsier ofrece a Vin los tres mil boxings y la opción de irse. Ella toma el dinero pero se queda para ver cómo acaba todo. En la finca de lord Renoux, éste propone que Vin interprete a lady Valette, hija de un primo favorito.',
				season: 'Verano',
				year: '1021 IF',
			},
			'tfe-9': {
				title: 'Entrenando con Sazed',
				description:
					'Vin y Kelsier combaten en un entrenamiento en la finca Renoux. Después, Vin se corta el pelo y Sazed la examina sobre su tapadera noble, además de contarle el trelagismo, la quinta religión que le propone. Kelsier y Sazed hablan luego en privado sobre el progreso de Vin; Kelsier anuncia que asistirá a un baile en la Fortaleza Venture al final de la semana.',
				season: 'Verano',
				year: '1021 IF',
			},
			'tfe-10': {
				title: 'Vuelta a la banda',
				description:
					'Vin regresa a Luthadel desde Fellise para aprender sobre los metales con los brumosos de la banda, empezando por Breeze, que le enseña a aplacar. Hammond llega y debate la moralidad de derrocar el Imperio Final mientras esperan que Kelsier dé un discurso.',
				season: 'Verano',
				year: '1021 IF',
			},
			'tfe-10.2': {
				title: 'El mitin del almacén',
				description:
					'Vin asiste a un mitin secreto en el distrito de almacenes donde Kelsier predica la revolución ante trabajadores skaa, con Breeze y sus aplacadores y agitadores manipulando a la multitud. Después, Kelsier celebra una reunión de progreso en la tienda de Clubs. Vin y Lestibournes hablan sobre Marsh. La reunión termina cuando un soldado de Hammond informa de que el Ministerio del Acero ha descubierto la antigua guarida de Camon.',
				season: 'Verano',
				year: '1021 IF',
			},
			'tfe-11': {
				title: 'La masacre de la guarida de Camon',
				description:
					'Vin y la banda investigan la guarida destruida, encontrando cadáveres por todas partes. Entre ellos, Vin ve a Ulef: alguien le ha arrancado la caja torácica con las manos desnudas. Sazed recita una oración de la religión cazzi a un lado. El cuerpo de Milev aparece atado a una silla, claramente torturado. Tras marcharse, Kelsier encuentra el cadáver de Camon colgado de un gancho clavado en su boca, muñecas y tobillos atados, el cuerpo torturado.',
				season: 'Verano',
				year: '1021 IF',
			},
			'tfe-12': {
				title: 'Primer baile en la Fortaleza Venture',
				description:
					'Vin se dirige a su primer baile en la Fortaleza Venture, con Sazed al mando del carruaje. Kelsier aparece en el trayecto, le da consejos y vuelve a lanzarse a las brumas. Vin llega y es presentada como lady Valette Renoux. Durante la cena ve a su padre al otro lado de la sala —Reen se lo había señalado de niña—. Rechaza invitaciones a bailar de varios nobles y se retira a un balcón en la planta superior, donde mantiene su primera conversación con Elend Venture, lo que conmociona a Sazed al enterarse.',
				season: 'Verano',
				year: '1021 IF',
			},
			'tfe-13': {
				title: 'Regreso a Fellise',
				description:
					'Sazed interroga a Vin sobre su interacción con Elend en la finca Renoux. La verdadera personalidad de Vin empieza a emerger: ni la tímida miembro de la banda ni lady Valette. Kelsier se entera de que el padre de Vin estuvo en el baile y se marcha de nuevo a las brumas.',
				season: 'Verano',
				year: '1021 IF',
			},
			'tfe-14': {
				title: 'Dentro de Kredik Shaw',
				description:
					'Kelsier lleva a Vin a Kredik Shaw y se abren paso luchando hacia el edificio que el lord Legislador visita cada tres días. Vin mata por primera vez. Tres Inquisidores de Acero se ciernen sobre ellos. Para defenderse de los triángulos metálicos afilados que le Empujan, Vin agarra un libro encuadernado en cuero al azar. Quemando atium, logra escapar temporalmente antes de que un Inquisidor le claven un hacha de obsidiana en el costado. Vin escapa de Kredik Shaw aún con el libro, pero al perder el conocimiento algo distrae al Inquisidor perseguidor y la acoge en un abrazo protector —no era Kelsier—.',
				season: 'Verano',
				year: '1021 IF',
			},
			'tfe-15': {
				title: 'Herida',
				description:
					'La banda discute la decisión de Kelsier de llevar a Vin a Kredik Shaw. Antes de poder salir a buscarla, Sazed llega cargándola. Le administran peltre para ayudarla a sanar. Sazed la opera, la recose, y Ham la lleva a una habitación a recuperarse. Kelsier y Dockson advierten el libro que trajo consigo; Sazed lo identifica como escrito en khlennio, la lengua anterior a la Ascensión de la patria del lord Legislador.',
				season: 'Verano',
				year: '1021 IF',
			},
			'tfe-16': {
				title: 'Recuperación en la tienda de Clubs',
				description:
					'Vin despierta tras dos semanas de reposo en la tienda de Clubs. Spook ha estado velando y le cuenta cómo Kelsier le dio su apodo. Hablando con Dockson, Vin se da cuenta de que hay algo muy inusual en Sazed.',
				season: 'Verano',
				year: '1021 IF',
			},
			'tfe-16.2': {
				title: 'Regreso a Fellise',
				description:
					'Tras unos días más de reposo, Vin regresa a la finca Renoux en Fellise. Habla con Sazed, que le explica qué son los Guardadores y revela que todos los criados terrisanos son eunucos.',
				season: 'Verano',
				year: '1021 IF',
			},
			'tfe-17': {
				title: 'El jardín de la mansión Renoux',
				description:
					'Vin se lamenta de cuatro semanas de aburrida convalecencia en la finca Renoux. Miembros de la banda llegan para discutir novedades. Vin convence a Kelsier de dejarla asistir al próximo baile. Después, hablan sobre Mare, las motivaciones de Kelsier, y él le explica el Chasquido: el evento traumático que despierta los poderes alománticos.',
				season: 'Verano',
				year: '1021 IF',
			},
			'tfe-18': {
				title: 'Baile en la Fortaleza Elariel',
				description:
					'Vin asiste a un baile en la Fortaleza Elariel con Sazed. Elend Venture se sienta a su mesa leyendo, como de costumbre, y le elogia el vestido dejándola boquiabierta. Baila con varios nobles y pregunta por Elend; se entera de lady Shan Elariel. Tras mucho bailar, Vin se ve obligada a reunirse con Shan. Durante la conversación, Vin advierte que Shan puede aplacar. Ve al terrisano de Shan curioseando los libros de Elend en su mesa y regresa; hojea un pequeño libro casi sedicioso. Elend vuelve, recoge sus libros y se marcha con dos amigos. Sazed los identifica como Jastes Lekal y un Hasting, lo cual sorprende, ya que Lekal y Hasting son rivales políticos de Venture. Al abandonar el baile, Vin presencia cómo un guardia de la ciudad degüella a un joven skaa de cocina entre las brumas.',
				season: 'Verano',
				year: '1021 IF',
			},
			'tfe-19': {
				title: 'Regresando a Fellise',
				description:
					'Kelsier vuelve a la mansión Renoux por la Ruta de Pinchos y se reúne con Vin, Sazed y Renoux. Le da un sermón a Vin sobre los nobles, insistiendo en que no les importan los skaa y que debe mantenerse alejada de Elend Venture.',
				season: 'Verano tardío',
				year: '1021 IF',
			},
			'tfe-20': {
				title: 'Lecciones de buscadora',
				description:
					'Vin regresa de Luthadel y ve cajas de armas frente a la mansión Renoux, listas para enviar a la rebelión. Marsh llega poco después y le enseña a buscar —usar bronce para detectar a otros alomantes quemando metales— así como detalles adicionales sobre la alomancia en general.',
				season: 'Verano tardío',
				year: '1021 IF',
			},
			'tfe-22': {
				title: 'El diario',
				description:
					'Vin lee su copia del diario del lord Legislador en la finca Renoux cuando llega Spook. Le da un pañuelo; Sazed le explica después que así un joven caballero señala que desea cortejar seriamente a una dama. Mientras espera a Dockson, Vin habla con Sazed sobre el terrisano del diario; Sazed revela los secretos de la feruquimia y la formación de los Guardadores para preservar todo tras la pérdida de la religión terrisana. Vin luego habla con Dockson, que le cuenta cómo lord Devinshae se llevó a la mujer que amaba y la mató a la mañana siguiente, insistiendo en que todos los nobles son iguales.',
				season: 'Otoño',
				year: '1021 IF',
			},
			'tfe-23': {
				title: 'Baile en la Fortaleza Hasting',
				description:
					'Vin asiste al baile en la Fortaleza Hasting, contenta de que los esfuerzos de Kelsier por avivar tensiones funcionen. También se entera de que los Inquisidores persiguen más a ladrones skaa. Lady Shan le pide que registre los libros de Elend la próxima vez. Vin encuentra a Elend y le pregunta si se ha acostado con una skaa. Él confiesa que su padre le obligó a los trece años; la mujer fue asesinada después, pero nunca volvió a hacerlo. Elend le da un pañuelo, señalando su deseo de cortejarla. Tras marcharse con sus amigos, Vin los sigue con alomancia a una torre donde discuten las fallas del lord Legislador. Kelsier aparece de repente y desdeña las ideas del grupo como idealismo juvenil típico.',
				season: 'Otoño',
				year: '1021 IF',
			},
			'tfe-24': {
				title: 'Reunión de la banda',
				description:
					'Vin y Kelsier llegan a la tienda de Clubs donde la mayor parte de la banda está reunida. Kelsier discute el estado de la misión y Vin percibe cuánto ama su nueva vida, ya sin esconderse en las sombras. Kelsier, Spook, Ham y Clubs comparten una copa nocturna.',
				season: 'Otoño',
				year: '1021 IF',
			},
			'tfe-24.2': {
				title: 'La visita a la guarnición',
				description:
					'Vin se cambia a su ropa de pilluelo y sale con Ham a visitar la Guarnición de Luthadel para aprender sobre peltre. Ham le explica que muchos soldados son skaa corrientes que solo quieren ganarse la vida. Allí, un guardia llamado Sertes les informa de que la Guarnición se está movilizando: una rebelión skaa ha atacado la Guarnición de Holstep al norte.',
				season: 'Otoño',
				year: '1021 IF',
			},
			'tfe-25': {
				title: 'Noticias urgentes',
				description:
					'En la tienda de Clubs, Ham vuelve con la noticia de que la Guarnición de Luthadel marcha hacia Holstep. Kelsier hace que Vin trague cinco cuentas de peltre para correr rumbo al norte a avisar al ejército rebelde.',
				season: 'Otoño tardío',
				year: '1021 IF',
			},
			'tfe-25.2': {
				title: 'La carrera de peltre',
				description:
					'Vin y Kelsier corren dieciséis horas sin parar quemando peltre en una desesperada carrera de peltre. Se topan con los restos del ejército rebelde, rodeado y masacrado por la Guarnición de Valtroux. Kelsier quiere luchar, pero Vin le convence de que no son invencibles. Se dirigen a las Cavernas de Arguois, donde encuentran 2.000 soldados vivos gracias a Mennis, que los mantuvo preparados para partir en cualquier momento.',
				season: 'Otoño tardío',
				year: '1021 IF',
			},
			'tfe-26': {
				title: 'Recuperación',
				description:
					'Vin yace agotada en la cama de la tienda de Clubs. Les costó dos semanas regresar a Luthadel. Kelsier irrumpe y Breeze le echa la culpa por perseguir fama y gloria. Kelsier admite que perder el ejército rebelde es un revés, pero se niega a rendirse.',
				season: 'Otoño tardío',
				year: '1021 IF',
			},
			'tfe-26.2': {
				title: 'Las ejecuciones',
				description:
					'Spook anuncia ejecuciones en la Plaza de la Fuente. La banda acude y soborna a alguien para llegar a la azotea. Vin identifica a su padre ante Kelsier: un obligador llamado Tevidian, lord Prelán y el obligador de más alto rango, incluso por encima de los Inquisidores. Contemplan cómo arrastran a mujeres y niños de un carro prisión y los ejecutan, la fuente corriendo roja de sangre. Kelsier dice: «Este es nuestro enemigo. Aquí no hay cuartel ni marcha atrás.»',
				season: 'Otoño tardío',
				year: '1021 IF',
			},
			'tfe-27': {
				title: 'Planificando los siguientes movimientos',
				description:
					'La banda regresa a la tienda de Clubs. Kelsier, Vin y los demás —Dockson, Ham, Breeze, Spook— replanifican cómo avanzar e iniciar una guerra de casas entre la nobleza. Sazed llega con una carta de Marsh con instrucciones de dónde encontrarse.',
				season: 'Invierno',
				year: '1021 IF',
			},
			'tfe-27.2': {
				title: 'Reunión con Marsh',
				description:
					'Kelsier y Vin van a un edificio abandonado en los Recodos para reunirse con Marsh. Mientras esperan, Kelsier habla del oro, el noveno metal alomántico que permite ver una versión alternativa de tu pasado. Marsh llega con los tatuajes de un obligador de bajo rango del Cantón de Inquisición. Revela que el Ministerio coloca aplacadores en las regiones skaa bajo aplacamiento constante, escondidos por ahumadores. Marsh confirma también que los Inquisidores pueden morir de vejez.',
				season: 'Invierno',
				year: '1021 IF',
			},
			'tfe-28': {
				title: 'Baile en la Fortaleza Lekal',
				description:
					'Vin asiste a un baile en la Fortaleza Lekal y empieza a esparcir rumores para encender las Guerras de Casas. Chismea con lady Kliss; dice que la Casa Hasting traslada recursos a su plantación del Dominio Sur. Elend la sorprende diciéndole que quiere besarla, pero Vin insiste en que no la conoce realmente. Dan un paseo y Elend revela que la fortuna de Venture proviene íntegramente de extraer atium en los Pozos de Hathsin, confiándole el secreto por completo. Menciona que los Tekiel fueron asesinados por la Casa Hasting e intenta convencer a Valette de abandonar Luthadel.',
				season: 'Invierno',
				year: '1021 IF',
			},
			'tfe-29': {
				title: 'La última traducción',
				description:
					'Vin lee la última traducción del diario hecha por Sazed en la mansión Renoux y se decepciona al ver que no hay más. Sazed le explica la feruquimia con más detalle y ella intenta quemar una de sus mentes de peltre. Después, Kelsier se une a la banda en la finca de Renoux para estudiar un mapa detallado proporcionado por Marsh. Descubren que la banda de Theron fue atacada recientemente por el Ministerio, y Vin sospecha que los Inquisidores siguen tras su pista.',
				season: 'Invierno',
				year: '1021 IF',
			},
			'tfe-30': {
				title: 'El baile Venture',
				description:
					'Vin asiste al último baile de casas en la Fortaleza Venture con Sazed. Los asistentes cierran alianzas y lady Valette es considerada demasiado neutral. Lady Kliss se revela como informante e intenta chantajear a la Casa Renoux. A cambio de un collar de zafiro, Kliss cuenta a Vin que asesinos Elariel intentarán matar a Elend esa noche y que Straff ha reducido la guardia en torno a Elend. Mediante alomancia emocional, Vin obliga a Kliss a revelar todo el plan. Rompe una vidriera para escapar de la fortaleza. Fuera, se enfrenta a dos brutos, dos lanzamonedas y dos nacidos de la bruma —una de ellas es Shan Elariel—. Vin la engaña extinguiendo su atium antes y la mata.',
				season: 'Invierno',
				year: '1021 IF',
			},
			'tfe-31': {
				title: 'Después del duelo',
				description:
					'Vin irrumpe en la cocina de Clubs vendada y hecha jirones. Kelsier la regaña por salvar a Elend, pero Vin le grita que skaa y nobles no son diferentes: Elend es un buen hombre. Luego, en la azotea, Vin cuenta a Kelsier que la Casa Venture administra los Pozos y comparte su teoría de que los Inquisidores ven a través de las nubes de cobre. Kelsier pone a prueba la teoría y la confirma: un descubrimiento importante.',
				season: 'Invierno',
				year: '1021 IF',
			},
			'tfe-32': {
				title: 'Vigilancia en la azotea',
				description:
					'Vin y Spook hacen vigilancia desde la azotea de la tienda de Clubs. Spook le enseña trucos con el estaño: no es solo potenciar los sentidos, sino filtrar las distracciones. Más tarde, Kelsier y Vin encuentran el cuerpo de Marsh, desangrado, una cáscara sin vida. De vuelta, descubren una carta de Marsh explicando que los Inquisidores probablemente le encontrarían.',
				season: 'Invierno',
				year: '1021 IF',
			},
			'tfe-33': {
				title: 'El refugio de emergencia',
				description:
					'La banda se traslada a un húmedo sótano de reserva cerca de la tienda de Clubs, apenas tres habitaciones. Kelsier anuncia que ha destruido todo el atium de los Pozos de Hathsin. Spook monta guardia como vigía de estaño.',
				season: 'Primavera temprana',
				year: '1022 IF',
			},
			'tfe-33.2': {
				title: 'La pelea con el Inquisidor',
				description:
					'Todos siguen a Kelsier a la Plaza de la Fuente. Ven a Spook y lord Renoux en uno de los carros de ejecución. Kelsier lucha contra un Inquisidor en la plaza. Elend ve a los sirvientes Renoux enjaulados y grita buscando a Valette, pero no la encuentra.',
				season: 'Primavera temprana',
				year: '1022 IF',
			},
			'tfe-34': {
				title: 'La muerte del Superviviente',
				description:
					'Kelsier lucha contra el Inquisidor en un combate total en la Plaza de la Fuente, ambos quemando atium. Vin observa desde arriba: Kelsier es un auténtico maestro de Empujar y Tirar, moviendo objetos metálicos por el aire con pericia. Mata al Inquisidor y los skaa empiezan a corear «El Superviviente de Hathsin». El lord Legislador llega en un carruaje negro. Uno de los brutos de Ham le clava una lanza —sigue caminando—. Dos lanzas —igual—. El lord Legislador abofetea a Kelsier, arranca una lanza de su propio cuerpo y se la hunde. Vin salta desde arriba y sostiene a Kelsier mientras muere.',
				season: 'Primavera temprana',
				year: '1022 IF',
			},
			'tfe-35': {
				title: 'El legado del Superviviente',
				description:
					'Vin regresa al refugio de emergencia. Está furiosa porque Kelsier no fue sincero: había planeado morir y abandonarla. Sazed ofrece palabras de consuelo. Fuera, los skaa hablan del Señor de las Brumas. En un almacén cercano, la banda ve al kandra con la forma de Kelsier. Kelsier dejó cartas con instrucciones para tomar la ciudad. La carta de Vin dice que nunca descifró el Undécimo Metal. Decide averiguar qué esconde el lord Legislador.',
				season: 'Primavera temprana',
				year: '1022 IF',
			},
			'tfe-36': {
				title: 'Dentro de Kredik Shaw',
				description:
					'Vin camina en silencio hacia Kredik Shaw, animando a los guardias exteriores a unirse a la rebelión. Dentro, mata a dos Inquisidores que custodian una entrada interior, descubriendo que el polvo de peltre altera su visión. En la cámara más allá hay un anciano sentado en una silla. Un Inquisidor agarra a Vin del cuello: el anciano habla y los Inquisidores se dirigen a él como lord Legislador. Pero Vin está confusa: el lord Legislador de la Plaza de la Fuente era un hombre joven. Quema el Undécimo Metal y ve dos formas fantasmales junto al anciano, una de las cuales se parece al joven lord Legislador pero ligeramente mayor.',
				season: 'Primavera temprana',
				year: '1022 IF',
			},
			'tfe-37': {
				title: 'Rescate y revelación',
				description:
					'Los Inquisidores obligan a Vin a quemar un metal que anula todos los demás. La llevan ante el lord Legislador en su trono elevado —la versión joven, el hombre que mató a Kelsier—. La interrogan sobre su padre. Tevidian, padre de Vin y obligador de más alto rango, es ejecutado por los Inquisidores cuando el lord Legislador descubre la verdad. Vin descubre que Reen nunca la delató: soportó la tortura y dijo a los Inquisidores que ella había muerto de hambre hacía tiempo. Sazed es traído a su celda y libera fuerza feruquímica almacenada para reventar la puerta. Elend y seis soldados irrumpen. Vin encuentra su capa y un vial de metales, mata al guardia restante. El secreto se descubre: Elend sabe que Vin es una nacida de la bruma. Ella le agarra la cabeza y le besa, luego se vuelve para ir a matar al lord Legislador.',
				season: 'Primavera temprana',
				year: '1022 IF',
			},
			'tfe-38': {
				title: 'Asesina del lord Legislador',
				description:
					'Vin salta entre las agujas de Kredik Shaw hasta la cima. El Inquisidor Kar la agarra del cuello, pero un segundo Inquisidor se acerca y arranca un clavo metálico del cuello de Kar, matándolo al instante. Es Marsh, vivo, con once clavos en el cuerpo, que ha matado a todos los demás Inquisidores. El verdadero nombre del lord Legislador es Rashek: asesinó al Héroe de las Eras y ocupó su lugar. Vin tira de las pulseras del lord Legislador y caen. Sin su juventud feruquímica se convierte en un anciano débil. Sazed aparece con un vial de metales. Vin le hunde una lanza directamente en el corazón. Mil años de opresión terminan.',
				season: 'Primavera temprana',
				year: '1022 IF',
			},
			'tfe-39': {
				title: 'Una nueva era',
				description:
					'Sazed, Marsh y Vin se alzan sobre un edificio junto al barrio skaa. Sazed explica que el lord Legislador era a la vez feruquimista y alomante: las pulseras almacenaban su juventud. Marsh describe su supervivencia y transformación: once clavos metálicos, dos por los ojos, ocho en el pecho, uno en la espalda uniéndolos. El proceso para crear un Inquisidor es cruento. También habla de los kandra, criaturas evolucionadas de los espectros de bruma que ahora ven a Vin como su ama.',
				season: 'Primavera',
				year: '1022 IF',
			},
			'tfe-39.2': {
				title: 'Vin y Elend',
				description:
					'Vin observa en secreto a Elend desde las brumas fuera de la Fortaleza Venture. Su reunión con líderes skaa y nobles fue bien: todos le han aceptado como rey tras un discurso formidable que ni Sazed pudo memorizar por completo sin sus metales. Elend escribe el nuevo código de leyes del reino. Vin casi decide no acudir, pero recuerda que Reen nunca la delató a los Inquisidores: hay personas que la aman de verdad. Con ese recuerdo corre hacia Elend y se abrazan.',
				season: 'Primavera',
				year: '1022 IF',
			},
		},
		sazed: {
			...enData.movements.sazed,
			// ── El Imperio Final ───────────────────────────────────────────
			'tfe-9': {
				title: 'El mayordomo terrisano',
				description:
					'Sazed llega a la finca de lord Renoux en Fellise como tutor y mayordomo de Vin, enseñándole etiqueta, danza y comportamiento. Le habla del trelagismo —la quinta religión que le ha propuesto— y, al ser preguntado, admite conocer 562 más.',
				season: 'Verano',
				year: '1021 IF',
			},
			'tfe-10.2': {
				title: 'El mitin del almacén',
				description:
					'Sazed asiste al mitin secreto del almacén junto a Kelsier y Vin, observando cómo el Superviviente predica la revolución a los trabajadores skaa reunidos.',
				season: 'Verano',
				year: '1021 IF',
			},
			'tfe-12': {
				title: 'Guardián en el baile',
				description:
					'Sazed acompaña a Vin a su primer baile en la Fortaleza Venture como su mayordomo, velando por ella mientras se infiltra en la sociedad noble.',
				season: 'Verano',
				year: '1021 IF',
			},
			'tfe-13': {
				title: 'Informe en Fellise',
				description:
					'Sazed regresa a la finca de lord Renoux en Fellise con Vin y Kelsier, revisando los resultados del primer baile de Vin y planificando los siguientes pasos.',
				season: 'Verano',
				year: '1021 IF',
			},
			'tfe-15': {
				title: 'Salvando a Vin',
				description:
					'Sazed lleva a Vin a la tienda de Clubs para salvarla y operarla tras su herida en Kredik Shaw. También examina un libro escrito en khlennio (la lengua del lord Legislador) recuperado durante la misión de reconocimiento.',
				season: 'Verano',
				year: '1021 IF',
			},
			'tfe-16': {
				title: 'Regreso a Fellise',
				description:
					'Tras estabilizar a Vin en la tienda de Clubs, Sazed regresa a la finca Renoux en Fellise.',
				season: 'Verano',
				year: '1021 IF',
			},
			'tfe-17': {
				title: 'Traduciendo el libro khlennio',
				description:
					'En la biblioteca de la finca Renoux en Fellise, Sazed trabaja para traducir el libro escrito en khlennio que Vin recuperó en la misión de reconocimiento a Kredik Shaw.',
				season: 'Verano',
				year: '1021 IF',
			},
			'tfe-18': {
				title: 'Guardián en la Fortaleza Elariel',
				description:
					'Sazed acompaña a Vin al baile de la Fortaleza Elariel como su mayordomo terrisano, velando por ella mientras navega la corte noble.',
				season: 'Verano',
				year: '1021 IF',
			},
			'tfe-19': {
				title: 'Intercambio de inteligencia',
				description:
					'Sazed está en la mansión Renoux cuando Kelsier regresa por la Ruta de Pinchos. Intercambian información sobre las casas nobles y el progreso de la rebelión, mientras Kelsier sermonea a Vin para que se aleje de Elend.',
				season: 'Verano tardío',
				year: '1021 IF',
			},
			'tfe-22': {
				title: 'Secretos de la feruquimia',
				description:
					'En la finca Renoux, Sazed habla con Vin sobre el terrisano del diario del lord Legislador. Revela los secretos de la feruquimia y cómo se formaron los Guardadores para recordar todo tras la pérdida de la religión terrisana. También aprende cosas nuevas de su pueblo a través del diario: que la tierra fue una vez verde y fértil, no una tundra helada.',
				season: 'Otoño',
				year: '1021 IF',
			},
			'tfe-23': {
				title: 'Guardián en la Fortaleza Hasting',
				description:
					'Sazed acompaña a Vin al baile de la Fortaleza Hasting como su mayordomo terrisano. Espera mientras ella esparce rumores y habla con nobles, siempre vigilante como guardián.',
				season: 'Otoño',
				year: '1021 IF',
			},
			'tfe-27': {
				title: 'El mensaje de Marsh',
				description:
					'Sazed regresa a la tienda de Clubs con una carta de Marsh con noticias e instrucciones de dónde reunirse. También trae traducciones del diario del lord Legislador.',
				season: 'Invierno',
				year: '1021 IF',
			},
			'tfe-28': {
				title: 'Guardián en la Fortaleza Lekal',
				description:
					'Sazed acompaña a Vin al baile de la Fortaleza Lekal como su mayordomo terrisano. La espera mientras trabaja para encender las Guerras de Casas y habla con Elend.',
				season: 'Invierno',
				year: '1021 IF',
			},
			'tfe-29': {
				title: 'Lecciones de feruquimia',
				description:
					'En la finca Renoux, Sazed entrega a Vin las últimas traducciones del diario. Le explica la feruquimia con más detalle y Vin intenta quemar una de sus mentes de peltre. Más tarde Sazed se une a la banda cuando Kelsier repasa un mapa detallado proporcionado por Marsh. Sin poder dormir esa noche, Kelsier pide a Sazed que le cuente algunas religiones.',
				season: 'Invierno',
				year: '1021 IF',
			},
			'tfe-30': {
				title: 'Guardián en la Fortaleza Venture',
				description:
					'Sazed acompaña a Vin al último baile de casas en la Fortaleza Venture. Los asistentes cierran alianzas y lady Valette recibe una fría acogida. Sazed abandona el baile antes de que Vin descubra el complot de asesinato contra Elend y luche contra Shan Elariel.',
				season: 'Invierno',
				year: '1021 IF',
			},
			'tfe-31': {
				title: 'Curando las heridas de Vin',
				description:
					'Sazed atiende las heridas de Vin en la tienda de Clubs después de que esta llegue maltrecha de su pelea con Shan Elariel y los asesinos Elariel. Escucha mientras Vin relata los sucesos de la noche.',
				season: 'Invierno',
				year: '1021 IF',
			},
			'tfe-33': {
				title: 'El refugio de emergencia',
				description:
					'Sazed está en el refugio de reserva cerca de la tienda de Clubs con la banda, después de que Kelsier destruyese los Pozos de Hathsin. Vin habla con Sazed sobre el Undécimo Metal. Cuando llevan skaa a ejecutar a la Plaza de la Fuente y Spook aparece enjaulado en un carro de prisioneros, Sazed se queda en el refugio mientras Kelsier lucha contra el Inquisidor.',
				season: 'Primavera temprana',
				year: '1022 IF',
			},
			'tfe-35': {
				title: 'Consolando a Vin',
				description:
					'Sazed está en el refugio de reserva con Vin tras la muerte de Kelsier. Ofrece palabras de consuelo mientras Vin rabia porque Kelsier la abandonó. Se queda atrás cuando la banda va al almacén a ver al kandra con la forma de Kelsier.',
				season: 'Primavera temprana',
				year: '1022 IF',
			},
			'tfe-37': {
				title: 'El feruquimista desatado',
				description:
					'Sazed es llevado a la celda de Vin en Kredik Shaw. Parece desinflarse y luego sus músculos se hinchan al doble de su tamaño al liberar fuerza feruquímica almacenada, reventando la puerta.',
				season: 'Primavera temprana',
				year: '1022 IF',
			},
			'tfe-38': {
				title: 'La caída del Imperio',
				description:
					'Sazed aparece en la confrontación final en Kredik Shaw con un vial de metales para Vin. Presencia la caída del lord Legislador cuando Vin tira de sus pulseras y la edad del lord Legislador aumenta dramática y rápidamente.',
				season: 'Primavera temprana',
				year: '1022 IF',
			},
			'tfe-39': {
				title: 'Comprendiendo al tirano',
				description:
					'Sazed se alza con Vin y Marsh sobre un edificio junto al barrio skaa. Explica que el lord Legislador era a la vez feruquimista y alomante: las pulseras almacenaban su juventud. Especula que por eso todos los criados terrisanos eran obligados a ser eunucos: el lord Legislador temía que alguien con sangre feruquímica y alomántica desafiase su inmortalidad. Se lamenta de no haber podido memorizar por completo el formidable discurso de Elend a los nuevos líderes por no tener sus metales consigo.',
				season: 'Primavera',
				year: '1022 IF',
			},
		},
		elend: {
			...enData.movements.elend,
			// ── El Imperio Final ───────────────────────────────────────────
			'tfe-12': {
				title: 'El noble lector',
				description:
					'Elend Venture advierte a Vin sola en un balcón durante un baile en su propia fortaleza y se acerca. La irrita sacando Pruebas del Monumento y poniéndose a leer mientras el resto de la nobleza baila e intriga a su alrededor.',
				season: 'Verano',
				year: '1021 IF',
			},
			'tfe-18': {
				title: 'Una velada con Valette',
				description:
					'Elend asiste al baile de la Fortaleza Elariel, donde se sienta a la mesa con Vin leyendo, como de costumbre. Le elogia el vestido, dejándola boquiabierta.',
				season: 'Verano',
				year: '1021 IF',
			},
			'tfe-23': {
				title: 'El pañuelo',
				description:
					'Elend encuentra a Vin en el baile de la Fortaleza Hasting. Ella le pregunta si se ha acostado con una skaa. Él confiesa que su padre le obligó a los trece años, y que la mujer fue asesinada después, pero nunca volvió a hacerlo. Le da un pañuelo a Vin, señalando su deseo de cortejarla. Tras irse con sus amigos, suben a una torre a debatir los fallos del lord Legislador y qué debería hacer su generación al respecto.',
				season: 'Otoño',
				year: '1021 IF',
			},
			'tfe-28': {
				title: 'Baile en la Fortaleza Lekal',
				description:
					'Elend sorprende a Vin en el baile de la Fortaleza Lekal. Dice que quiere besarla, pero Vin insiste en que no la conoce realmente. Dan un paseo y Elend le revela que la fortuna de Venture proviene de la extracción de atium en los Pozos de Hathsin, confiándole el secreto por completo. Menciona que los Tekiel fueron asesinados por la Casa Hasting e intenta convencer a Valette de que abandone Luthadel por su seguridad.',
				season: 'Invierno',
				year: '1021 IF',
			},
			'tfe-28.2': {
				title: 'La llamada del padre',
				description:
					'Elend regresa a la Fortaleza Venture e intenta pasar sigilosamente ante la habitación de su padre. Lord Straff Venture, un vigía de estaño que no deja pasar nada, lo llama. Straff le dice que mañana debe cenar con la Casa Hasting y una de sus hijas, porque planea una alianza con lord Tegas. Después, Jastes llega y revela que hicieron seguir al carruaje de lady Valette: llegó a Fellise con solo el terrisano dentro, Valette había desaparecido. Jastes está convencido de que es una espía de otra casa. Elend, al darse cuenta de que reveló el secreto del atium, propone un trato a su padre: asistirá al almuerzo a cambio de unos espías que sigan a Valette.',
				season: 'Invierno',
				year: '1021 IF',
			},
			'tfe-30': {
				title: 'El baile Venture',
				description:
					'Elend cena con su padre en la Fortaleza Venture durante el baile. Vin atrae su atención y tienen un enfrentamiento. Elend dice cosas que hieren a Vin; sin embargo, cuando ella se entera de que habrá un intento de asesinato contra Elend esa noche, corre a las brumas a buscar a los asesinos. La velada termina en caos cuando Vin lucha y mata a lady Shan Elariel, una nacida de la bruma enviada a asesinar a Elend. En la confusión, Elend logra escabullirse.',
				season: 'Invierno',
				year: '1021 IF',
			},
			'tfe-31': {
				title: 'Los informes de los espías',
				description:
					'Elend y Jastes se reúnen con Felt, que relata todo lo que los espías de Elend han descubierto sobre la tienda de Clubs y quienes están en ella. Tras marcharse Felt y Jastes, los guardias Venture llevan a Elend ante su padre Straff, que revela que Shan Elariel era una nacida de la bruma enviada a asesinar a Elend. Elend sabe ahora que un grupo de ladrones skaa opera cerca de la Fortaleza Venture y que Valette está conectada con ellos.',
				season: 'Invierno',
				year: '1021 IF',
			},
			'tfe-33': {
				title: 'Los carros de ejecución',
				description:
					'Elend ve a los sirvientes de Renoux enjaulados en un carro de ejecución en la Plaza de la Fuente. Grita buscando a Valette, pero no la encuentra en la multitud.',
				season: 'Primavera temprana',
				year: '1022 IF',
			},
			'tfe-34': {
				title: 'Kelsier salva a Elend',
				description:
					'Elend llega a la jaula de Renoux en la Plaza de la Fuente y pregunta por Valette. Un Inquisidor aterriza sobre la jaula y está a punto de golpear a Elend con su hacha cuando Kelsier ataca al Inquisidor, salvándole la vida. Kelsier grita a Elend que Valette está bien, y los guardaespaldas se lo llevan a rastras.',
				season: 'Primavera temprana',
				year: '1022 IF',
			},
			'tfe-36': {
				title: 'Autoridad de la Casa Venture',
				description:
					'El padre de Elend le comunica que ha estallado una rebelión skaa y quiere huir de Luthadel. Elend se niega a marcharse. Straff acepta, esperando que Elend muera, y le transfiere la autoridad de la Casa Venture. Elend ordena a sus soldados ir a la Fortaleza Lekal para una defensa mutua. Luego toma a sus cinco mejores soldados como escolta de honor y va a entregarse al liderazgo skaa.',
				season: 'Primavera temprana',
				year: '1022 IF',
			},
			'tfe-37': {
				title: 'Rescatando a Vin',
				description:
					'Elend ofrece oro a unos skaa para que le lleven ante Dockson y le dice que la Casa Venture no resistirá la rebelión; deberían colaborar. Después, Elend y seis soldados irrumpen en Kredik Shaw para rescatar a Vin. El secreto se descubre: sabe que Vin es una nacida de la bruma. Vin le agarra la cabeza y le besa, y luego se marcha a matar al lord Legislador.',
				season: 'Primavera temprana',
				year: '1022 IF',
			},
			'tfe-38': {
				title: 'El rey filósofo',
				description:
					'Tras la muerte del lord Legislador, Elend emerge como una voz unificadora que reclama orden. Comienza a reunirse con líderes tanto skaa como nobles para redactar un código de leyes para la nueva nación.',
				season: 'Primavera temprana',
				year: '1022 IF',
			},
			'tfe-39': {
				title: 'El nuevo rey',
				description:
					'Elend Venture es aceptado como rey del Dominio Central tras un formidable discurso ante líderes skaa y nobles. Se sienta en la Fortaleza Venture redactando el nuevo código de leyes del reino. Vin lo observa en secreto desde las brumas a través de la ventana antes de lanzarse hacia él y abrazarse.',
				season: 'Primavera',
				year: '1022 IF',
			},
		},
		marsh: {
			...enData.movements.marsh,
			// ── El Imperio Final ───────────────────────────────────────────
			'tfe-7': {
				title: 'El hermano reticente',
				description:
					'Marsh llega a la tienda de Clubs, hermano mayor de Kelsier y líder rebelde por derecho propio. Se une al plan de la banda a regañadientes.',
				season: 'Primavera tardía',
				year: '1021 IF',
			},
			'tfe-10.2': {
				title: 'El mitin del almacén',
				description:
					'Marsh asiste al mitin secreto del almacén con la banda, viendo a su hermano Kelsier predicar la revolución ante los trabajadores skaa reunidos.',
				season: 'Verano',
				year: '1021 IF',
			},
			'tfe-20': {
				title: 'Enseñando a Vin',
				description:
					'Marsh llega a la finca Renoux en Fellise para enseñar a Vin a buscar —usar bronce para detectar a otros alomantes quemando metales, su tipo, y cómo distinguir brumosos de nacidos de la bruma—, así como detalles adicionales de alomancia. También le enseña sobre el cobre y cómo los ahumadores pueden ocultar los pulsos alománticos.',
				season: 'Verano tardío',
				year: '1021 IF',
			},
			'tfe-27': {
				title: 'La infiltración en el Ministerio',
				description:
					'Marsh se reúne con Kelsier y Vin en un edificio abandonado de los Recodos, luciendo los tatuajes de un obligador de bajo rango del Cantón de Inquisición. Se ha infiltrado realmente en el Ministerio. Revela que el Ministerio coloca aplacadores en las regiones skaa bajo aplacamiento constante, escondidos por ahumadores. Confirma también que los Inquisidores pueden morir de vejez.',
				season: 'Invierno',
				year: '1021 IF',
			},
			'tfe-30': {
				title: 'Desaparición',
				description:
					'Marsh enmudece, sus comunicaciones cesan al desaparecer en los niveles más profundos del Cantón de Inquisición. La banda teme lo peor.',
				season: 'Invierno',
				year: '1021 IF',
			},
			'tfe-32': {
				title: 'El cuerpo',
				description:
					'Kelsier y Vin encuentran el cuerpo de Marsh, desangrado por completo, una cáscara sin vida. Su carta, hallada luego en la tienda de Clubs, explica que los Inquisidores probablemente le encontrarían. La banda lo llora. Pero el cadáver mutilado que encuentran no es lo que parece.',
				season: 'Invierno',
				year: '1022 IF',
			},
			'tfe-38': {
				title: 'El Inquisidor',
				description:
					'Marsh aparece durante el asalto final a Kredik Shaw: vivo, transformado con once clavos metálicos —dos por los ojos, ocho en el pecho, uno en la espalda uniéndolos—. Mata al Inquisidor Kar arrancándole un clavo del cuello y revela que ha matado a todos los demás Inquisidores.',
				season: 'Primavera temprana',
				year: '1022 IF',
			},
			'tfe-39': {
				title: 'Once clavos',
				description:
					'Marsh se alza con Sazed y Vin sobre un edificio junto al barrio skaa. Habla de su supervivencia y transformación: once clavos, el horrendo proceso y cómo resistió. También les cuenta sobre los kandra, criaturas evolucionadas de los espectros de bruma, y que el que suplantó a lord Renoux ahora reconoce a Vin como su ama.',
				season: 'Primavera',
				year: '1022 IF',
			},
		},
		spook: {
			...enData.movements.spook,
			// ── El Imperio Final ───────────────────────────────────────────
			'tfe-7': {
				title: 'El joven vigía de estaño',
				description:
					'Spook, el joven sobrino de Clubs, trabaja como vigía y mensajero para la banda en la carpintería, hablando en una cerrada jerga callejera del este.',
				season: 'Primavera tardía',
				year: '1021 IF',
			},
			'tfe-9': {
				title: 'Carreras de mensajero',
				description:
					'Spook lleva mensajes entre la tienda de Clubs en Luthadel y la finca Renoux en Fellise; sus sentidos potenciados por el estaño lo convierten en un explorador excepcional.',
				season: 'Verano',
				year: '1021 IF',
			},
			'tfe-16': {
				title: 'Velando a Vin',
				description:
					'Lestibournes vela a Vin herida en la tienda de Clubs, presente cuando despierta de las heridas sufridas en la misión de reconocimiento de Kredik Shaw. Cuenta que tiene un nombre nuevo de Kelsier: Spook.',
				season: 'Verano',
				year: '1021 IF',
			},
			'tfe-22': {
				title: 'El pañuelo',
				description:
					'Spook visita la finca Renoux en Fellise y encuentra a Vin leyendo el diario del lord Legislador. Le dice que Dockson vino a buscar más armas y, ruborizado y nervioso, le entrega un pañuelo antes de salir corriendo. Sazed explica después a Vin que así un joven caballero señala su deseo de cortejar seriamente a una dama.',
				season: 'Otoño',
				year: '1021 IF',
			},
			'tfe-24': {
				title: 'Noche en la tienda de Clubs',
				description:
					'Spook comparte una copa nocturna con Kelsier, Ham y Clubs en la tienda de Clubs mientras la banda discute el estado de la misión.',
				season: 'Otoño',
				year: '1021 IF',
			},
			'tfe-26': {
				title: 'Las ejecuciones',
				description:
					'Spook irrumpe en la tienda de Clubs para anunciar ejecuciones en la Plaza de la Fuente. Acompaña a la banda a la plaza, donde presencian la brutal ejecución pública de mujeres y niños skaa, su sangre vaciada en la fuente.',
				season: 'Otoño tardío',
				year: '1021 IF',
			},
			'tfe-32': {
				title: 'Vigilancia en la azotea',
				description:
					'Spook vigila desde la azotea de la tienda de Clubs con Vin, enseñándole trucos del estaño. Le explica que no se trata solo de potenciar los sentidos, sino de filtrar lo importante y no dejarse distraer por el resto.',
				season: 'Invierno',
				year: '1022 IF',
			},
			'tfe-33': {
				title: 'Vigía de guardia',
				description:
					'Cuando la banda va a la Plaza de la Fuente, Spook es avistado en uno de los carros de ejecución junto a lord Renoux, capturado por el Ministerio.',
				season: 'Primavera temprana',
				year: '1022 IF',
			},
			'tfe-34': {
				title: 'Testigo del sacrificio',
				description:
					'Spook observa desde la multitud cómo Kelsier lucha y muere en la Plaza de la Fuente, un suceso que marcará el resto de su vida. El sacrificio del Superviviente transforma la comprensión de Spook sobre lo que significa servir a una causa.',
				season: 'Primavera temprana',
				year: '1022 IF',
			},
			'tfe-38': {
				title: 'La revolución',
				description:
					'Spook lucha junto a la banda durante la revolución final, ayudando a coordinar el levantamiento skaa desde las calles de Luthadel.',
				season: 'Primavera temprana',
				year: '1022 IF',
			},
		},
	},

	markerLabels: {
		capital: 'Sede del Dominio',
		city: 'Ciudad',
		ashmount: 'Monte de ceniza', //
		landmark: 'Punto de interés',
		stronghold: 'Fortaleza',
		hideout: 'Refugio seguro',
		mine: 'Mina-prisión',
		mystical: 'Lugar sagrado',
		town: 'Asentamiento',
		village: 'Aldea skaa',
		river: 'Canal/Río',
		industrial: 'Puesto de suministros',
		region: 'Dominio', // Dominance
		keep: 'Torreón noble',
		palace: 'Palacio',
		plantation: 'Plantación',
		district: 'Distrito',
		estate: 'Propiedad noble',
	},

	cityMarkerLabels: {
		gate: 'Puerta de la ciudad',
		keep: 'Torreón noble',
		palace: 'Palacio',
		district: 'Barrio',
		shop: 'Comerciante',
		safehouse: 'Guarida de la banda',
		landmark: 'Sitio notable',
		canal: 'Canal',
		ministry: 'Cantón', //
		plaza: 'Plaza',
	},
};
