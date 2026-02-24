/**
 * Spanish (Castilian) data translations.
 * Sources: Official Nova / Ediciones B editions.
 * Primary Translators: Rafael Marín Trechera, Manu Viciano.
 */
import type { DataTranslations } from '../types';

export const esData: DataTranslations = {
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
			description: 'Posición del ejército koloss al norte de Luthadel durante el asedio.',
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
		vin: {
			'tfe-1': {
				title: 'Huérfana callejera',
				description:
					'Vin trabaja como vigía para la banda de ladrones de Camon en los barrios bajos de Luthadel, usando sus habilidades alománticas desconocidas para influir sutilmente en quienes la rodean.',
				season: 'Primavera',
				year: '1021 FE',
			},
			'tfe-2': {
				title: 'La estafa al Ministerio',
				description:
					'Vin acompaña a la banda de Camon en una arriesgada estafa en el Cantón de Finanzas, donde sus pulsos alománticos atraen la atención de Kelsier.',
				season: 'Primavera',
				year: '1021 FE',
			},
			'tfe-4': {
				title: 'Reclutada',
				description:
					'Después de que Kelsier rescata a Vin de la paliza de Camon, la llevan al taller de carpintería de Clubs —el cuartel general de la banda— y le presentan el plan para derrocar al Lord Legislador.',
				season: 'Primavera',
				year: '1021 FE',
			},
			'tfe-7': {
				title: 'Entrenamiento de Nacida de la Bruma',
				description:
					'Kelsier lleva a Vin a las murallas de la ciudad cerca de la Puerta de Acero para su primer entrenamiento real de alomancia, enseñándole a quemar acero y hierro entre los oscuros tejados.',
				season: 'Primavera tardía',
				year: '1021 FE',
			},
			'tfe-8': {
				title: 'La hacienda Renoux',
				description:
					'Vin viaja al oeste hasta Fellise para comenzar su cobertura como Lady Valette Renoux en la hacienda rural de Lord Renoux, preparándose para infiltrarse en la sociedad noble.',
				season: 'Verano',
				year: '1021 FE',
			},
			'tfe-9': {
				title: 'Entrenamiento con Sazed',
				description:
					'Bajo la tutela de Sazed en la hacienda Renoux, Vin aprende la etiqueta, el baile y el porte necesarios para hacerse pasar por una noble en los grandes bailes de las casas.',
				season: 'Verano',
				year: '1021 FE',
			},
			'tfe-10': {
				title: 'Regreso a la banda',
				description:
					'Vin regresa a Luthadel desde Fellise, reuniéndose con la banda en el taller de Clubs. Kelsier la lleva en una carrera nocturna de alomancia por la ciudad, llevando su entrenamiento más lejos.',
				season: 'Verano',
				year: '1021 FE',
			},
			'tfe-10.2': {
				title: 'La concentración en el almacén',
				description:
					'Vin asiste a una concentración secreta donde Kelsier predica la revolución ante trabajadores skaa reunidos en un almacén oculto.',
				season: 'Verano',
				year: '1021 FE',
			},
			'tfe-11': {
				title: 'La Masacre de la Guarida de Camon',
				description:
					'Vin y el equipo descubren las secuelas de un brutal ataque en la vieja guarida de Camon — el Ministerio ha matado a todos como represalia por la estafa en el Cantón de Finanzas.',
				season: 'Verano',
				year: '1021 FE',
			},
			'tfe-13': {
				title: 'Primer baile en el Torreón Venture',
				description:
					'Vin asiste a su primer baile como Lady Valette Renoux, entrando en el deslumbrante mundo de la nobleza. Conoce a Elend Venture leyendo solo en un rincón.',
				season: 'Verano',
				year: '1021 FE',
			},
			'tfe-14': {
				title: 'Reconocimiento de Kredik Shaw',
				description:
					'Vin y Kelsier realizan un audaz reconocimiento nocturno del palacio del Lord Legislador, saltando entre las Mil Agujas para cartografiar sus defensas.',
				season: 'Verano',
				year: '1021 FE',
			},
			'tfe-16': {
				title: 'Baile en el Torreón Elariel',
				description:
					'Vin asiste a un baile en la Casa Elariel, recopilando información sobre las casas nobles y sus alianzas mientras consolida su identidad encubierta.',
				season: 'Verano',
				year: '1021 FE',
			},
			'tfe-19': {
				title: 'Acercándose',
				description:
					'En otro baile en el Torreón Venture, la relación de Vin con Elend se profundiza a pesar de su misión. Después baila sobre los tejados.',
				season: 'Verano tardío',
				year: '1021 FE',
			},
			'tfe-22': {
				title: 'El libro de registro',
				description:
					'De vuelta en el Taller de Clubs, Vin estudia el antiguo libro de registro del Lord Legislador, encontrando perturbadoras referencias a la Profundidad y la profecía del Héroe de las Eras.',
				season: 'Otoño',
				year: '1021 FE',
			},
			'tfe-25': {
				title: 'El tirón de peltre',
				description:
					'Cuando el ejército rebelde en Holstep es masacrado por las fuerzas de la guarnición, Vin realiza un desesperado tirón de peltre —quemando peltre continuamente durante horas— para ayudar a rescatar supervivientes.',
				season: 'Otoño tardío',
				year: '1021 FE',
			},
			'tfe-26': {
				title: 'Recuperación',
				description:
					'Vin regresa al Taller de Clubs agotada por el tirón de peltre, recuperándose mientras la banda se reagrupa tras la devastadora pérdida en Holstep.',
				season: 'Otoño tardío',
				year: '1021 FE',
			},
			'tfe-30': {
				title: 'Escalada de la guerra entre casas',
				description:
					'La guerra entre casas se intensifica a medida que las casas nobles se vuelven unas contra otras. Vin se da cuenta de que la manipulación de la banda está funcionando, pero la violencia la perturba.',
				season: 'Invierno',
				year: '1021 FE',
			},
			'tfe-34': {
				title: 'La muerte del Superviviente',
				description:
					'Vin observa impotente desde los tejados cómo Kelsier lucha y es asesinado por el Lord Legislador en la Plaza de la Fuente, convirtiéndose en el Superviviente de Hathsin en la muerte.',
				season: 'Inicio de la primavera',
				year: '1022 FE',
			},
			'tfe-36': {
				title: 'Asalto al palacio',
				description:
					'Liderando la rebelión skaa, Vin se abre paso luchando hasta Kredik Shaw, combatiendo a Inquisidores y guardias para llegar a la sala del trono del Lord Legislador.',
				season: 'Inicio de la primavera',
				year: '1022 FE',
			},
			'tfe-38': {
				title: 'Asesina del Lord Legislador',
				description:
					'Vin se enfrenta al Lord Legislador en su sala del trono, arrancándole sus mentes de metal y matando al tirano inmortal. Mil años de opresión llegan a su fin.',
				season: 'Inicio de la primavera',
				year: '1022 FE',
			},
			'tfe-39': {
				title: 'Una nueva era',
				description:
					'Tras la revolución, Vin permanece junto a Elend en el Torreón Venture mientras comienza una nueva era. Las brumas siguen fluyendo, pero el Lord Legislador ha desaparecido.',
				season: 'Primavera',
				year: '1022 FE',
			},
			'woa-1': {
				title: 'Guardiana de la ciudad',
				description:
					'Vin patrulla las murallas de Luthadel cada noche, vigilando posibles amenazas mientras tres ejércitos convergen lentamente sobre la ciudad recién liberada.',
				season: 'Otoño',
				year: '1023 FE',
			},
			'woa-3': {
				title: 'El espíritu de la bruma',
				description:
					'Durante su patrulla nocturna, Vin se encuentra con una misteriosa figura en las brumas —un espíritu que parece observarla, señalando hacia algo.',
				season: 'Otoño',
				year: '1023 FE',
			},
			'woa-8': {
				title: 'Protectora y compañera',
				description:
					'Vin lidia con su doble papel como protectora y compañera de Elend en el palacio, debatiéndose entre su amor por él y su deber de mantenerlo a salvo.',
				season: 'Otoño',
				year: '1023 FE',
			},
			'woa-14': {
				title: 'Consejo de la banda',
				description:
					'La banda se reúne en el Taller de Clubs para discutir estrategia mientras el ejército de Straff Venture acampa al norte y las fuerzas de Cett se acercan desde el oeste.',
				season: 'Inicio del invierno',
				year: '1023 FE',
			},
			'woa-22': {
				title: 'Tensiones políticas',
				description:
					'A medida que el asedio se estrecha, Vin observa a Elend luchar con la Asamblea y las exigencias del gobierno mientras ella persigue a Zane entre las brumas.',
				season: 'Invierno',
				year: '1023 FE',
			},
			'woa-26': {
				title: 'Parlamento con Straff',
				description:
					'Vin acompaña a Elend al campamento de guerra de Straff Venture al norte de la ciudad, donde demuestra su aterrador poder para intimidar al aspirante a conquistador.',
				season: 'Invierno',
				year: '1023 FE',
			},
			'woa-28': {
				title: 'Regreso del parlamento',
				description:
					'Tras el tenso encuentro en el campamento de Straff, Vin regresa al Torreón Venture, atormentada por los susurros de Zane y sus crecientes dudas sobre su papel.',
				season: 'Invierno',
				year: '1024 FE',
			},
			'woa-35': {
				title: 'La crisis de la Asamblea',
				description:
					'Vin observa desde la galería cómo la Asamblea vota destituir a Elend e invitar a Lord Penrod a liderar, destruyendo el experimento democrático.',
				season: 'Invierno',
				year: '1024 FE',
			},
			'woa-43': {
				title: 'Incursión contra Cett',
				description:
					'Vin lanza un devastador asalto en solitario contra las fuerzas de Cett acuarteladas en el Torreón Hasting, expulsando a su ejército de la ciudad en una demostración del poder de una Nacida de la Bruma.',
				season: 'Invierno tardío',
				year: '1024 FE',
			},
			'woa-47': {
				title: 'Duelo con Zane',
				description:
					'Cerca del Torreón Hasting, Vin se bate en duelo con Zane Venture en una brutal batalla entre Nacidos de la Bruma, acabando con él para proteger a quienes ama.',
				season: 'Invierno tardío',
				year: '1024 FE',
			},
			'woa-49': {
				title: 'Exilio',
				description:
					'Vin y Elend abandonan Luthadel por la Puerta de Estaño, exiliados por el nuevo gobierno de Penrod, dirigiéndose al norte hacia Terris con una pequeña escolta.',
				season: 'Invierno tardío',
				year: '1024 FE',
			},
			'woa-50': {
				title: 'Éxodo al norte',
				description:
					'El pequeño grupo viaja hacia Terris, pero Vin siente algo que la atrae de vuelta: el Pozo de la Ascensión no está en las montañas después de todo.',
				season: 'Invierno tardío',
				year: '1024 FE',
			},
			'woa-52': {
				title: 'Regreso a la batalla',
				description:
					'Vin realiza un desesperado tirón de peltre de vuelta a Luthadel cuando los koloss atraviesan las murallas, llegando a tiempo para tomar el control de las criaturas y salvar la ciudad.',
				season: 'Invierno tardío',
				year: '1024 FE',
			},
			'woa-54': {
				title: 'Buscando el Pozo',
				description:
					'Con Luthadel salvada pero maltrecha, Vin busca bajo Kredik Shaw el Pozo de la Ascensión, siguiendo la guía del espíritu de la bruma hacia las profundidades subterráneas.',
				season: 'Invierno tardío',
				year: '1024 FE',
			},
			'woa-58': {
				title: 'El Pozo descubierto',
				description:
					'Vin desciende a las antiguas cavernas bajo Kredik Shaw y descubre el Pozo de la Ascensión, cuyo poder pulsa con energía acumulada.',
				season: 'Invierno',
				year: '1024 FE',
			},
			'woa-59': {
				title: 'El poder liberado',
				description:
					'En el Pozo, Vin toma un poder inmenso; luego, engañada por la manipulación de Ruina sobre las profecías, lo libera. Algo terrible escapa de su prisión.',
				season: 'Invierno',
				year: '1024 FE',
			},
			'hoa-1': {
				title: 'La campaña del norte',
				description:
					'Vin y Elend llevan su ejército a Vetitan, una ciudad que está siendo sepultada por la creciente lluvia de ceniza, para asegurar uno de los depósitos ocultos del Lord Legislador.',
				season: 'Primavera',
				year: '1026 FE',
			},
			'hoa-3': {
				title: 'El primer depósito',
				description:
					'Vin abre la caverna de almacenamiento de Vetitan, encontrando comida, suministros y una placa de metal con un críptico mensaje del Lord Legislador sobre el peligro que aprisionó.',
				season: 'Primavera',
				year: '1026 FE',
			},
			'hoa-8': {
				title: 'División de fuerzas',
				description:
					'Vin regresa a Luthadel donde el ejército se divide: Sazed y Breeze parten al norte hacia Urteau, mientras Vin y Elend marcharán al oeste hacia Ciudad Fadrex.',
				season: 'Verano',
				year: '1026 FE',
			},
			'hoa-10': {
				title: 'Marcha al oeste',
				description:
					'Vin marcha al oeste con el ejército de Elend hacia Ciudad Fadrex, la ceniza cayendo más espesa cada día mientras el mundo se deteriora a su alrededor.',
				season: 'Verano',
				year: '1026 FE',
			},
			'hoa-21': {
				title: 'Llegada a Fadrex',
				description:
					'El ejército llega a las afueras de Ciudad Fadrex y establece un campamento de asedio en las llanuras cubiertas de ceniza. El obligador Yomen se niega a rendirse o entregar su depósito.',
				season: 'Otoño',
				year: '1026 FE',
			},
			'hoa-28': {
				title: 'La espía en el baile',
				description:
					'Vin se infiltra en Fadrex disfrazada de noble, asistiendo a uno de los bailes de Yomen en el Torreón Orielle para recopilar información y buscar una solución diplomática.',
				season: 'Otoño',
				year: '1026 FE',
			},
			'hoa-40': {
				title: 'Segundo baile',
				description:
					'Vin regresa a otro de los bailes de Yomen, enfrentándose directamente a él en un debate filosófico sobre el legado del Lord Legislador y la creciente lluvia de ceniza.',
				season: 'Otoño tardío',
				year: '1026 FE',
			},
			'hoa-47': {
				title: 'Capturada',
				description:
					'Vin es capturada por las fuerzas de Yomen y encarcelada en el Cantón de Recursos, despojada de sus metales. La retienen en una celda con una reserva de atium que no puede alcanzar.',
				season: 'Invierno',
				year: '1026 FE',
			},
			'hoa-51': {
				title: 'En la prisión',
				description:
					'Encarcelada y privada de sus metales, Vin reflexiona sobre la influencia de Ruina y la naturaleza del poder que liberó en el Pozo.',
				season: 'Invierno',
				year: '1026 FE',
			},
			'hoa-54': {
				title: 'El depósito revelado',
				description:
					'Vin descubre el depósito de almacenamiento de Fadrex y su contenido crítico: comida, suministros y un mensaje sobre los verdaderos preparativos del Lord Legislador.',
				season: 'Invierno tardío',
				year: '1026 FE',
			},
			'hoa-56': {
				title: 'Escape de Fadrex',
				description:
					'Cuando los koloss atacan Fadrex, Vin escapa de la ciudad, alejando a los Inquisidores de Elend y el ejército para protegerlos.',
				season: 'Inicio de la primavera',
				year: '1027 FE',
			},
			'hoa-59': {
				title: 'Liderando la cacería',
				description:
					'Vin vuela hacia el este rumbo a Luthadel con una manada de Inquisidores persiguiéndola, alejando deliberadamente a los sirvientes de Ruina de Fadrex y de Elend.',
				season: 'Primavera',
				year: '1027 FE',
			},
			'hoa-72': {
				title: 'Regreso a Luthadel',
				description:
					'Vin llega a una Luthadel devastada y destruye Kredik Shaw, derrumbando el palacio del Lord Legislador en una descomunal exhibición de poder alomántico.',
				season: 'Verano',
				year: '1027 FE',
			},
			'hoa-79': {
				title: 'Ascensión',
				description:
					'Vin extrae poder de las propias brumas —el cuerpo de Conservación— ascendiendo para convertirse en un recipiente de poder divino y luchar directamente contra Ruina.',
				season: 'Otoño',
				year: '1027 FE',
			},
			'hoa-81': {
				title: 'El último sacrificio',
				description:
					'Vin se sacrifica para destruir a Ruina, combinando el poder de Conservación con su propia fuerza vital para aniquilar al dios de la destrucción.',
				season: 'Otoño',
				year: '1027 FE',
			},
			'hoa-83': {
				title: 'El campo del renacimiento',
				description:
					'El cuerpo de Vin es encontrado en un campo de flores y hierba verde —las primeras señales del mundo rehecho por Sazed. Yace en paz junto a Elend.',
				season: 'Otoño',
				year: '1027 FE',
			},
		},
		kelsier: {
			'tfe-0': {
				title: 'El regreso del Superviviente',
				description:
					'Kelsier llega a la plantación de Lord Tresting en la Dominación del Sur, matando al cruel noble: su primer golpe contra la nobleza desde que escapó de los Pozos.',
				season: 'Primavera',
				year: '1021 FE',
			},
			'tfe-1': {
				title: 'Observador oculto',
				description:
					'Kelsier observa desde las sombras cómo opera la banda de Camon, percibiendo el uso inconsciente de alomancia por parte de Vin: una huérfana callejera con poderes de Nacida de la Bruma.',
				season: 'Primavera',
				year: '1021 FE',
			},
			'tfe-3': {
				title: 'Reclutando a Vin',
				description:
					'Kelsier rescata a Vin de los abusos de Camon y le ofrece un lugar en su banda, revelándole la verdad sobre sus habilidades como Nacida de la Bruma.',
				season: 'Primavera',
				year: '1021 FE',
			},
			'tfe-5': {
				title: 'El robo de atium',
				description:
					'Kelsier irrumpe en la cámara acorazada del Torreón Venture para robar atium, financiando la rebelión mientras prueba las defensas de las casas nobles.',
				season: 'Primavera',
				year: '1021 FE',
			},
			'tfe-6': {
				title: 'La banda se reúne',
				description:
					'En el taller de carpintería de Clubs, Kelsier reúne a toda la banda —Ham, Breeze, Dockson, Clubs y ahora Vin— y revela su plan para derrocar al Lord Legislador.',
				season: 'Primavera',
				year: '1021 FE',
			},
			'tfe-7': {
				title: 'Enseñando a la aprendiz',
				description:
					'Kelsier lleva a Vin a las murallas de la ciudad cerca de la Puerta de Acero para entrenarla en alomancia, enseñándole a empujar y tirar de los metales mientras saltan entre agujas.',
				season: 'Primavera tardía',
				year: '1021 FE',
			},
			'tfe-8': {
				title: 'La cobertura Renoux',
				description:
					'Kelsier escolta a Vin hasta Fellise y la hacienda de Lord Renoux, estableciendo su identidad encubierta como Lady Valette para la infiltración de la sociedad noble.',
				season: 'Verano',
				year: '1021 FE',
			},
			'tfe-10': {
				title: 'Planificando la revolución',
				description:
					'De vuelta en Luthadel, Kelsier se reúne con la banda en el taller de Clubs para revisar el progreso de la rebelión. Lleva a Vin en una carrera nocturna por la ciudad para continuar su entrenamiento de alomancia.',
				season: 'Verano',
				year: '1021 FE',
			},
			'tfe-10.2': {
				title: 'La rebelión crece',
				description:
					'Kelsier lidera concentraciones en almacenes por los barrios bajos de Luthadel, construyendo la rebelión skaa a través de su leyenda como el Superviviente de Hathsin.',
				season: 'Verano',
				year: '1021 FE',
			},
			'tfe-11': {
				title: 'La Masacre de la Guarida de Camon',
				description:
					'Kelsier y el equipo descubren que el Ministerio ha masacrado a todos en la vieja guarida de Camon como represalia por la estafa en el Cantón de Finanzas, endureciendo su determinación contra el Lord Legislador.',
				season: 'Verano',
				year: '1021 FE',
			},
			'tfe-14': {
				title: 'Reconocimiento del palacio',
				description:
					'Kelsier y Vin exploran Kredik Shaw de noche, cartografiando las defensas del palacio y probando la capacidad de respuesta de los Inquisidores.',
				season: 'Verano',
				year: '1021 FE',
			},
			'tfe-18': {
				title: 'Operaciones de la guerra entre casas',
				description:
					'Kelsier orquesta ataques entre casas nobles, asesinando objetivos y plantando pruebas para avivar la guerra entre casas que debilita a la nobleza.',
				season: 'Verano tardío',
				year: '1021 FE',
			},
			'tfe-21': {
				title: 'El ejército rebelde',
				description:
					'Kelsier viaja a las Cavernas de Arguois para inspeccionar el creciente ejército rebelde oculto en las montañas, entrenando a soldados que nunca han sostenido un arma.',
				season: 'Otoño',
				year: '1021 FE',
			},
			'tfe-25': {
				title: 'Desastre en Holstep',
				description:
					'Kelsier realiza un tirón de peltre hasta Holstep cuando la guarnición descubre y masacra al ejército rebelde. Llega para encontrar devastación y debe huir al sur.',
				season: 'Otoño tardío',
				year: '1021 FE',
			},
			'tfe-26': {
				title: 'Recoger los pedazos',
				description:
					'De vuelta en el Taller de Clubs, Kelsier se reagrupa tras el desastre de Holstep, negándose a abandonar la revolución incluso cuando la esperanza parece perdida.',
				season: 'Invierno',
				year: '1021 FE',
			},
			'tfe-32': {
				title: 'Destrucción de los Pozos',
				description:
					'Kelsier regresa a los Pozos de Hathsin —el lugar de su mayor sufrimiento— y destruye los cristales de atium, cortando el recurso más valioso del Lord Legislador.',
				season: 'Invierno',
				year: '1022 FE',
			},
			'tfe-34': {
				title: 'La última batalla del Superviviente',
				description:
					'Kelsier se enfrenta al Lord Legislador en la Plaza de la Fuente, librando una batalla imposible. Muere con una sonrisa, convirtiéndose en un mártir cuya muerte enciende la revolución.',
				season: 'Inicio de la primavera',
				year: '1022 FE',
			},
			'tfe-35': {
				title: 'Más allá de la muerte',
				description:
					'A través de OreSeur el kandra portando sus huesos, el plan final de Kelsier se despliega: su muerte fue la chispa que incendió la revolución en toda Luthadel.',
				season: 'Inicio de la primavera',
				year: '1022 FE',
			},
			'woa-1': {
				title: 'Más allá del velo',
				description:
					'Atrapado en el Reino Cognitivo tras su muerte, Kelsier existe como una sombra cognitiva cerca del Pozo de la Ascensión, observando cómo Luthadel se transforma bajo el gobierno de Elend.',
				season: 'Otoño',
				year: '1023 FE',
			},
			'woa-59': {
				title: 'Testigo de la liberación',
				description:
					'Kelsier observa impotente desde el Reino Cognitivo cómo Vin toma el poder en el Pozo de la Ascensión y lo libera, liberando a Ruina de su prisión.',
				season: 'Invierno',
				year: '1024 FE',
			},
			'sh-4.1': {
				title: 'Viaje cognitivo hacia el oeste',
				description:
					'Existiendo como una Sombra Cognitiva, Kelsier cruza el océano de bruma hacia las Tierras Quemadas occidentales en busca de ayuda de la fortaleza de los Ire.',
				season: 'Primavera',
				year: '1025 FE',
			},
			'sh-6.1': {
				title: 'La advertencia en Fadrex',
				description:
					'Kelsier llega al reflejo cognitivo de Ciudad Fadrex, encontrándose con Hoid e intentando advertir a Vin sobre su espiga hemalúrgica.',
				season: 'Otoño',
				year: '1026 FE',
			},
			'hoa-1': {
				title: 'El Superviviente resiste',
				description:
					'En el Reino Cognitivo, Kelsier trabaja junto al menguante poder de Conservación, buscando cualquier forma de ayudar al Reino Físico a resistir la creciente influencia de Ruina.',
				season: 'Primavera',
				year: '1026 FE',
			},
			'hoa-50': {
				title: 'Sosteniendo a Conservación',
				description:
					'A medida que la consciencia de Conservación se desvanece, Kelsier toma el poder de la Esquirla —sosteniéndolo imperfectamente desde el Reino Cognitivo, ganando tiempo para el acto final.',
				season: 'Primavera',
				year: '1027 FE',
			},
			'hoa-81': {
				title: 'Pasando la antorcha',
				description:
					'Vin toma el poder de Conservación de Kelsier para destruir a Ruina. El Superviviente libera la Esquirla, su papel cumplido, pero se niega a pasar al Más Allá.',
				season: 'Otoño',
				year: '1027 FE',
			},
			'hoa-83': {
				title: 'El Superviviente pervive',
				description:
					'Incluso mientras Armonía rehace el mundo, Kelsier persiste en el Reino Cognitivo: el Superviviente que se negó a dejar que ni siquiera la muerte lo detuviera.',
				season: 'Otoño',
				year: '1027 FE',
			},
		},
		sazed: {
			'tfe-9': {
				title: 'El mayordomo terrisano',
				description:
					'Sazed llega a la hacienda de Lord Renoux en Fellise para servir como tutor de Vin, enseñándole los modales de la nobleza mientras en secreto preserva antiguas religiones.',
				season: 'Verano',
				year: '1021 FE',
			},
			'tfe-10.2': {
				title: 'El Mitín del Almacén',
				description:
					'Sazed asiste al mitín secreto en el almacén junto a Kelsier y Vin, observando mientras el Superviviente predica la revolución a los trabajadores skaa reunidos.',
				season: 'Verano',
				year: '1021 FE',
			},
			'tfe-13': {
				title: 'Guardián en el baile',
				description:
					'Sazed acompaña a Vin a su primer baile como su mayordomo, velando por ella desde las dependencias del servicio mientras se infiltra en la sociedad noble.',
				season: 'Verano',
				year: '1021 FE',
			},
			'tfe-22': {
				title: 'El trabajo del erudito',
				description:
					'Sazed enseña a Vin entre bailes en la hacienda Renoux, compartiendo su vasto conocimiento de religiones mientras estudia los patrones del Imperio Final.',
				season: 'Otoño',
				year: '1021 FE',
			},
			'tfe-34': {
				title: 'Testigo de la revolución',
				description:
					'Sazed se encuentra en Luthadel durante la revolución, observando cómo los skaa se alzan y Kelsier cae en la Plaza de la Fuente.',
				season: 'Inicio de la primavera',
				year: '1022 FE',
			},
			'tfe-38': {
				title: 'La caída del Imperio',
				description:
					'Sazed asiste a la banda en el asalto a Kredik Shaw, usando su feroquimia para luchar a través de los guardias del Lord Legislador.',
				season: 'Inicio de la primavera',
				year: '1022 FE',
			},
			'tfe-39': {
				title: 'Un nuevo comienzo',
				description:
					'Después de todo, Sazed comienza a estudiar los registros de Kredik Shaw, buscando respuestas sobre la Profundidad y la profecía del Héroe de las Eras.',
				season: 'Primavera',
				year: '1022 FE',
			},
			'woa-4': {
				title: 'El maestro viajero',
				description:
					'Sazed viaja por la Dominación del Este, visitando aldeas rurales para compartir religiones y conocimientos suprimidos con los skaa recién liberados.',
				season: 'Otoño',
				year: '1023 FE',
			},
			'woa-7': {
				title: 'El Conventículo de Seran',
				description:
					'Guiado por Marsh, Sazed descubre el Conventículo de Seran —un espantoso bastión de Inquisidores donde encuentra la placa de inscripción de acero de Kwaan.',
				season: 'Otoño tardío',
				year: '1023 FE',
			},
			'woa-12': {
				title: 'Descifrando la placa',
				description:
					'Sazed estudia la inscripción de Kwaan en el Conventículo, descubriendo la desesperada advertencia del Guardián terrisano de que la profecía del Héroe de las Eras fue alterada.',
				season: 'Otoño tardío',
				year: '1023 FE',
			},
			'woa-15': {
				title: 'Las muertes de la bruma',
				description:
					'Regresando al oeste por Urbene, Sazed se encuentra con aldeas donde la gente ha muerto misteriosamente en las brumas: las primeras señales de la enfermedad de la bruma.',
				season: 'Invierno',
				year: '1023 FE',
			},
			'woa-22': {
				title: 'Regreso a Luthadel',
				description:
					'Sazed llega a Luthadel portando graves noticias sobre la profecía alterada, las muertes de la bruma y el verdadero significado de la inscripción de acero.',
				season: 'Invierno',
				year: '1023 FE',
			},
			'woa-40': {
				title: 'Debatiendo la profecía',
				description:
					'Sazed trabaja con Tindwyl en el Torreón Venture, comparando las versiones original y alterada de la profecía del Héroe de las Eras, acercándose cada vez más a ella.',
				season: 'Invierno tardío',
				year: '1024 FE',
			},
			'woa-52': {
				title: 'Defendiendo la puerta',
				description:
					'Cuando los koloss atraviesan las murallas de Luthadel, Sazed usa su feroquimia para defender la Puerta de Estaño él solo, agotando sus atributos almacenados en una desesperada última resistencia.',
				season: 'Invierno tardío',
				year: '1024 FE',
			},
			'woa-57': {
				title: 'Luchando contra Marsh',
				description:
					'Sazed lucha contra un Marsh controlado por Ruina en los pasillos de Kredik Shaw, sobreviviendo apenas al asalto del Inquisidor mientras Vin desciende al Pozo.',
				season: 'Invierno',
				year: '1024 FE',
			},
			'woa-59': {
				title: 'La muerte de Tindwyl',
				description:
					'Sazed descubre que Tindwyl fue asesinada durante el ataque de los koloss. Devastado, comienza su crisis de fe, cuestionando cada religión que porta.',
				season: 'Invierno',
				year: '1024 FE',
			},
			'hoa-4': {
				title: 'Diplomacia sureña',
				description:
					'Sazed visita Ciudad Lekal con Breeze para negociar un tratado, usando la diplomacia para incorporar al rey del sur a la creciente coalición de Elend.',
				season: 'Verano',
				year: '1026 FE',
			},
			'hoa-8': {
				title: 'Rumbo al norte',
				description:
					'Sazed recibe la misión de asegurar Urteau mediante la diplomacia mientras Elend lleva el ejército al oeste. Parte por la puerta norte.',
				season: 'Verano',
				year: '1026 FE',
			},
			'hoa-14': {
				title: 'Llegada a Urteau',
				description:
					'Sazed llega a Urteau para encontrarla bajo el opresivo gobierno del Ciudadano Quellion, estableciendo una delegación diplomática en la abandonada hacienda Venture.',
				season: 'Otoño',
				year: '1026 FE',
			},
			'hoa-25': {
				title: 'Construyendo confianza',
				description:
					'Sazed trabaja para ganarse la confianza de la población de Urteau mientras estudia la historia de la ciudad y busca la caverna de almacenamiento bajo el edificio del Ministerio.',
				season: 'Inicio del invierno',
				year: '1026 FE',
			},
			'hoa-40': {
				title: 'La investigación del Ministerio',
				description:
					'Sazed investiga el Cantón del Ministerio, trabajando para acceder a la caverna de almacenamiento bajo él mientras navega el paranoico gobierno de Quellion.',
				season: 'Invierno',
				year: '1026 FE',
			},
			'hoa-50': {
				title: 'El descubrimiento de la caverna',
				description:
					'Sazed descubre el mecanismo para inundar el sistema de canales secos —el Lord Legislador había drenado los canales para ocultar el agua en la caverna de almacenamiento bajo ellos.',
				season: 'Inicio de la primavera',
				year: '1027 FE',
			},
			'hoa-58': {
				title: 'Salvando Urteau',
				description:
					'Mientras los incendios arrasan la ciudad durante la revolución contra Quellion, Sazed libera el agua almacenada para inundar los canales, salvando a Urteau de la destrucción.',
				season: 'Primavera',
				year: '1027 FE',
			},
			'hoa-64': {
				title: 'Reconstrucción',
				description:
					'Con Quellion depuesto y los incendios extinguidos, Sazed ayuda a reconstruir Urteau, distribuyendo suministros del depósito mientras estudia el mensaje del Lord Legislador.',
				season: 'Verano',
				year: '1027 FE',
			},
			'hoa-69': {
				title: 'Viaje a Hathsin',
				description:
					'Sazed viaja a los Pozos de Hathsin, atraído por la convergencia de los acontecimientos. Su estudio de las religiones y la inscripción de Kwaan lo ha llevado a una terrible revelación.',
				season: 'Otoño',
				year: '1027 FE',
			},
			'hoa-71': {
				title: 'La reunión final',
				description:
					'Sazed regresa a Luthadel mientras el mundo muere a su alrededor, la ceniza cayendo en cortinas negras. Porta el conocimiento de cada religión y cada profecía.',
				season: 'Otoño',
				year: '1027 FE',
			},
			'hoa-82': {
				title: 'El Héroe de las Eras',
				description:
					'Con Vin y Ruina destruidos, Sazed comprende que él es el Héroe de las Eras. Toma el poder de Conservación y Ruina en el Pozo de la Ascensión.',
				season: 'Otoño',
				year: '1027 FE',
			},
			'hoa-83': {
				title: 'Armonía',
				description:
					'Sazed asciende como Armonía, combinando Ruina y Conservación. Rehace el mundo: moviendo el planeta, restaurando el verde y sanando mil años de daño.',
				season: 'Otoño',
				year: '1027 FE',
			},
		},
		elend: {
			'tfe-12': {
				title: 'El noble lector',
				description:
					'Elend Venture es presentado en un baile en su propio torreón, leyendo solo mientras el resto de la nobleza baila e intriga a su alrededor.',
				season: 'Verano',
				year: '1021 FE',
			},
			'tfe-13': {
				title: 'Conociendo a Lady Valette',
				description:
					'Elend conoce a la misteriosa Lady Valette Renoux en un baile, atraído por su comportamiento poco convencional y su agudo ingenio.',
				season: 'Verano',
				year: '1021 FE',
			},
			'tfe-19': {
				title: 'El cortejo',
				description:
					'La fascinación de Elend por Lady Valette crece mientras comparten conversaciones en los bailes, discutiendo sobre filosofía y los defectos de la nobleza.',
				season: 'Verano tardío',
				year: '1021 FE',
			},
			'tfe-24': {
				title: 'Conspirador noble',
				description:
					'Elend organiza en secreto a nobles moderados que se oponen a la tiranía del Lord Legislador, reuniéndose en la biblioteca privada del Torreón Venture.',
				season: 'Otoño',
				year: '1021 FE',
			},
			'tfe-34': {
				title: 'La revolución',
				description:
					'Elend presencia el caos del levantamiento skaa en la Plaza de la Fuente y da un paso al frente para proteger tanto a nobles como a plebeyos de la violencia.',
				season: 'Inicio de la primavera',
				year: '1022 FE',
			},
			'tfe-38': {
				title: 'Líder inesperado',
				description:
					'Tras la muerte del Lord Legislador, Elend emerge como una voz unificadora, pidiendo orden mientras el imperio se derrumba a su alrededor.',
				season: 'Inicio de la primavera',
				year: '1022 FE',
			},
			'tfe-39': {
				title: 'El nuevo rey',
				description:
					'Elend Venture es declarado Rey de la Dominación Central, comenzando la difícil tarea de construir un gobierno democrático sobre las ruinas de la tiranía.',
				season: 'Primavera',
				year: '1022 FE',
			},
			'woa-1': {
				title: 'Rey de Luthadel',
				description:
					'Elend trabaja incansablemente en el Torreón Venture para establecer un gobierno constitucional, redactando leyes y construyendo una Asamblea mientras los ejércitos se reúnen en el exterior.',
				season: 'Otoño',
				year: '1023 FE',
			},
			'woa-5': {
				title: 'La Asamblea',
				description:
					'Elend se dirige a la Asamblea que él mismo creó, abogando por principios democráticos incluso cuando sus consejeros advierten que la democracia podría no sobrevivir al asedio.',
				season: 'Otoño',
				year: '1023 FE',
			},
			'woa-12': {
				title: 'Inspeccionando el asedio',
				description:
					'Elend inspecciona las líneas de asedio desde las murallas de la ciudad, observando el ejército de su padre Straff al norte y las fuerzas de Cett acercándose desde el oeste.',
				season: 'Inicio del invierno',
				year: '1023 FE',
			},
			'woa-22': {
				title: 'Luchando por la democracia',
				description:
					'Elend se enfrenta a una creciente oposición en la Asamblea mientras el miedo al asedio lleva a muchos a buscar un líder más fuerte que un rey filósofo.',
				season: 'Invierno',
				year: '1023 FE',
			},
			'woa-26': {
				title: 'Parlamento con su padre',
				description:
					'Elend cabalga hasta el campamento de Straff Venture para negociar, llevando a Vin como protectora. El encuentro revela el desprecio de Straff hacia su idealista hijo.',
				season: 'Invierno',
				year: '1023 FE',
			},
			'woa-28': {
				title: 'Tramando diplomacia',
				description:
					'De vuelta en el Torreón Venture, Elend intenta enfrentar a los tres ejércitos entre sí: Straff, Cett y la horda de koloss que se aproxima.',
				season: 'Invierno',
				year: '1024 FE',
			},
			'woa-35': {
				title: 'Depuesto',
				description:
					'La Asamblea vota sustituir a Elend por Lord Penrod, explotando una cláusula de la propia constitución democrática de Elend. Su idealismo resulta ser su perdición.',
				season: 'Invierno',
				year: '1024 FE',
			},
			'woa-42': {
				title: 'Misión a los koloss',
				description:
					'Elend abandona Luthadel por los túneles para negociar con Jastes Lekal y su ejército de koloss, una apuesta desesperada por conseguir un aliado.',
				season: 'Invierno tardío',
				year: '1024 FE',
			},
			'woa-46': {
				title: 'Regreso de los koloss',
				description:
					'Elend regresa del campamento de koloss habiendo fracasado en la negociación: Jastes perdió el control de sus bestias. Los koloss atacarán de todas formas.',
				season: 'Invierno tardío',
				year: '1024 FE',
			},
			'woa-49': {
				title: 'Exilio de Luthadel',
				description:
					'Elend abandona Luthadel con Vin por la Puerta de Estaño, exiliados por el gobierno de Penrod, dirigiéndose al norte hacia Terris para buscar la ayuda del sínodo de Guardianes.',
				season: 'Invierno tardío',
				year: '1024 FE',
			},
			'woa-50': {
				title: 'El viaje al norte',
				description:
					'El grupo de Elend viaja hacia Terris, pero una creciente inquietud los empuja a reconsiderar. El Pozo de la Ascensión podría no estar donde creían.',
				season: 'Invierno tardío',
				year: '1024 FE',
			},
			'woa-52': {
				title: 'La batalla',
				description:
					'Elend regresa para encontrar Luthadel bajo asalto de los koloss, luchando a través del caos mientras las murallas son derribadas y la ciudad amenaza con caer.',
				season: 'Invierno tardío',
				year: '1024 FE',
			},
			'woa-58': {
				title: 'Hacia el Pozo',
				description:
					'Elend desciende bajo Kredik Shaw con Vin en busca del Pozo de la Ascensión, mientras Marsh lucha contra Sazed sobre ellos.',
				season: 'Invierno',
				year: '1024 FE',
			},
			'woa-59': {
				title: 'El emperador Nacido de la Bruma',
				description:
					'Apuñalado y moribundo junto al Pozo, Elend es salvado cuando Vin le introduce una cuenta de lerasium en la boca, transformándolo en un Nacido de la Bruma.',
				season: 'Invierno',
				year: '1024 FE',
			},
			'hoa-1': {
				title: 'Emperador en guerra',
				description:
					'Elend lidera sus ejércitos hacia Vetitan, ahora un emperador Nacido de la Bruma que dirige campañas militares para asegurar los depósitos ocultos del Lord Legislador.',
				season: 'Primavera',
				year: '1026 FE',
			},
			'hoa-3': {
				title: 'Asegurando el depósito',
				description:
					'Elend asegura la caverna de almacenamiento de Vetitan, encontrando comida y un mensaje en placa de metal que advierte sobre el peligro que Rashek aprisionó.',
				season: 'Primavera',
				year: '1026 FE',
			},
			'hoa-8': {
				title: 'División estratégica',
				description:
					'En Luthadel, Elend divide sus fuerzas: envía a Sazed a asegurar Urteau diplomáticamente mientras él marcha al oeste para tomar Fadrex por la fuerza si es necesario.',
				season: 'Verano',
				year: '1026 FE',
			},
			'hoa-10': {
				title: 'La marcha al oeste',
				description:
					'Elend lidera su ejército hacia el oeste rumbo a Ciudad Fadrex, la ceniza cayendo más espesa cada día. Se entrena como Nacido de la Bruma durante la marcha.',
				season: 'Verano',
				year: '1026 FE',
			},
			'hoa-21': {
				title: 'El asedio de Fadrex',
				description:
					'El ejército de Elend llega a Fadrex y establece líneas de asedio en las llanuras cubiertas de ceniza. Yomen se niega a negociar o rendirse.',
				season: 'Otoño',
				year: '1026 FE',
			},
			'hoa-28': {
				title: 'El sitiador reticente',
				description:
					'Elend lucha con su papel de conquistador, intentando la diplomacia incluso cuando sus generales presionan para el asalto. La lluvia de ceniza empeora cada día.',
				season: 'Otoño',
				year: '1026 FE',
			},
			'hoa-47': {
				title: 'Perdiendo a Vin',
				description:
					'Cuando Vin es capturada dentro de Fadrex, Elend se enfrenta a una elección imposible entre rescatar a su esposa y proteger a decenas de miles de soldados.',
				season: 'Invierno',
				year: '1026 FE',
			},
			'hoa-54': {
				title: 'Entrando en Fadrex',
				description:
					'El ataque de los koloss fuerza una alianza temporal con Yomen. Elend entra en la ciudad y accede al depósito de almacenamiento, encontrando el mensaje final del Lord Legislador.',
				season: 'Invierno tardío',
				year: '1026 FE',
			},
			'hoa-58': {
				title: 'Partida hacia Hathsin',
				description:
					'Con el depósito asegurado y Vin marchándose al este, Elend descubre la verdad final: el atium debe estar en los Pozos de Hathsin. Marcha con su ejército al sur.',
				season: 'Inicio de la primavera',
				year: '1027 FE',
			},
			'hoa-61': {
				title: 'Marcha a los Pozos',
				description:
					'Elend lidera su exhausto ejército a los Pozos de Hathsin, donde se encuentra el Hogar de los Kandra bajo tierra. El ejército de Inquisidores de Marsh los sigue de cerca.',
				season: 'Primavera',
				year: '1027 FE',
			},
			'hoa-69': {
				title: 'La Batalla de Hathsin',
				description:
					'Elend quema el último atium en una desesperada batalla contra los Inquisidores y los koloss en los Pozos, sabiendo que significará su muerte cuando el metal se agote.',
				season: 'Verano',
				year: '1027 FE',
			},
			'hoa-79': {
				title: 'La muerte del emperador',
				description:
					'Elend es asesinado por Marsh en los últimos momentos de la Batalla de Hathsin, su atium agotado. Muere habiendo quemado todo el metal que Ruina buscaba.',
				season: 'Otoño',
				year: '1027 FE',
			},
			'hoa-83': {
				title: 'Reunidos en la muerte',
				description:
					'El cuerpo de Elend es encontrado junto al de Vin en el campo de flores —el primer regalo de Sazed al mundo rehecho— en paz tras todas sus luchas.',
				season: 'Otoño',
				year: '1027 FE',
			},
		},
		marsh: {
			'tfe-7': {
				title: 'El hermano reticente',
				description:
					'Marsh llega al Taller de Clubs, el hermano mayor de Kelsier y un líder rebelde por derecho propio. Se une de mala gana al plan de la banda.',
				season: 'Primavera tardía',
				year: '1021 FE',
			},
			'tfe-10.2': {
				title: 'La concentración en el almacén',
				description:
					'Marsh asiste a la concentración secreta en el distrito de almacenes con la banda, observando a su hermano Kelsier predicar la revolución ante los trabajadores skaa reunidos.',
				season: 'Verano',
				year: '1021 FE',
			},
			'tfe-13': {
				title: 'Encuentro en el Monte Tyrian',
				description:
					'Marsh se encuentra con Kelsier en el Monte Tyrian, a varios kilómetros de Luthadel, para discutir el plan de rebelión lejos de los oídos del Ministerio antes de comenzar su peligrosa infiltración.',
				season: 'Verano',
				year: '1021 FE',
			},
			'tfe-20': {
				title: 'Más profundo bajo cobertura',
				description:
					'Marsh se adentra más en la jerarquía del Ministerio en Kredik Shaw, aprendiendo los oscuros secretos de la hemalurgia mientras arriesga ser descubierto por los Inquisidores.',
				season: 'Verano tardío',
				year: '1021 FE',
			},
			'tfe-30': {
				title: 'Desaparición',
				description:
					'Marsh enmudece, sus comunicaciones cesan mientras desaparece en los niveles más profundos del Cantón de Inquisición. La banda teme lo peor.',
				season: 'Invierno',
				year: '1021 FE',
			},
			'tfe-38': {
				title: 'El Inquisidor',
				description:
					'Marsh aparece durante el asalto final a Kredik Shaw, aún vivo pero transformado: clavos de hierro atravesando sus ojos. Lucha por la banda a pesar de su transformación.',
				season: 'Inicio de la primavera',
				year: '1022 FE',
			},
			'woa-4': {
				title: 'Errante del este',
				description:
					'Marsh vaga por la Dominación del Este como un Inquisidor solitario, buscando comprender su transformación mientras ayuda a Sazed a investigar aldeas distantes.',
				season: 'Otoño',
				year: '1023 FE',
			},
			'woa-7': {
				title: 'El guía del Conventículo',
				description:
					'Marsh conduce a Sazed al Conventículo de Seran, un bastión de Inquisidores en el remoto norte, para encontrar los registros que Sazed busca.',
				season: 'Otoño tardío',
				year: '1023 FE',
			},
			'woa-12': {
				title: 'Abandono',
				description:
					'Marsh abandona abruptamente a Sazed en el Conventículo y desaparece en la espesura, impulsado por fuerzas que cada vez le cuesta más resistir. La influencia de Ruina crece.',
				season: 'Otoño tardío',
				year: '1023 FE',
			},
			'woa-57': {
				title: 'Marioneta de Ruina',
				description:
					'Marsh aparece en Kredik Shaw bajo el control total de Ruina, luchando contra Sazed en los pasillos mientras Vin desciende al Pozo de la Ascensión abajo.',
				season: 'Invierno',
				year: '1024 FE',
			},
			'woa-59': {
				title: 'Guardián del Pozo',
				description:
					'Marsh vigila la entrada al Pozo, una marioneta de Ruina, luchando para impedir que nadie llegue a Vin o la ayude a tomar la decisión correcta.',
				season: 'Invierno',
				year: '1024 FE',
			},
			'hoa-0': {
				title: 'Creando Inquisidores',
				description:
					'Bajo el control de Ruina, Marsh realiza oscuros rituales hemalúrgicos en Tathingdwen, creando nuevos Inquisidores a partir de feruquimistas y alománticos capturados.',
				season: 'Primavera',
				year: '1026 FE',
			},
			'hoa-6': {
				title: 'Liderando koloss',
				description:
					'Marsh comanda un creciente ejército de koloss en nombre de Ruina, moviéndose por la Dominación del Este y reuniendo fuerzas para la batalla final.',
				season: 'Verano',
				year: '1026 FE',
			},
			'hoa-22': {
				title: 'Cerca de Tyrian',
				description:
					'Marsh opera cerca del Monte Tyrian, creando clavos hemalúrgicos a partir de prisioneros capturados y construyendo el ejército de Inquisidores de Ruina a la sombra del monte de ceniza.',
				season: 'Invierno',
				year: '1026 FE',
			},
			'hoa-38': {
				title: 'El Clavado de Penrod',
				description:
					'Marsh se infiltra en Luthadel para clavar al rey Penrod, otorgando a Ruina un conducto directo hacia la gobernanza de la capital.',
				season: 'Invierno',
				year: '1026 FE',
			},
			'hoa-45': {
				title: 'Convergiendo en Fadrex',
				description:
					'Marsh lidera a sus Inquisidores hacia Ciudad Fadrex, convergiendo en el asedio mientras Ruina busca recuperar la reserva de atium oculta en su interior.',
				season: 'Invierno',
				year: '1026 FE',
			},
			'hoa-59': {
				title: 'Persiguiendo a Vin',
				description:
					'Marsh lidera la manada de Inquisidores que persigue a Vin hacia el este mientras ella huye de Fadrex rumbo a Luthadel, alejando a los sirvientes de Ruina del depósito.',
				season: 'Primavera',
				year: '1027 FE',
			},
			'hoa-69': {
				title: 'La Batalla de Hathsin',
				description:
					'Marsh llega a los Pozos liderando las fuerzas de Ruina. En un momento de voluntad recuperada, arranca el pendiente de Vin: un acto de desafío que lo cambia todo.',
				season: 'Otoño',
				year: '1027 FE',
			},
			'hoa-79': {
				title: 'Matando a Elend',
				description:
					'Marsh, impulsado por Ruina, mata al emperador Elend durante la Batalla de Hathsin. El acto cumple el plan de Ruina, pero le cuesta a Marsh otro pedazo de su alma.',
				season: 'Otoño',
				year: '1027 FE',
			},
			'hoa-83': {
				title: 'Libertad al fin',
				description:
					'Con Ruina destruido, Marsh es finalmente liberado del control del dios. Permanece solo en el mundo rehecho, un Inquisidor que sobrevivió al fin de todo.',
				season: 'Otoño',
				year: '1027 FE',
			},
		},
		spook: {
			'tfe-7': {
				title: 'El joven buscador de estaño',
				description:
					'Fantasma, el joven sobrino de Clubs, trabaja como vigía y mensajero para la banda en el taller de carpintería, hablando con una espesa jerga callejera del este.',
				season: 'Primavera tardía',
				year: '1021 FE',
			},
			'tfe-9': {
				title: 'Recados de mensajero',
				description:
					'Fantasma lleva mensajes entre el Taller de Clubs en Luthadel y la hacienda Renoux en Fellise, sus sentidos mejorados por el estaño haciéndolo un explorador excepcional.',
				season: 'Verano',
				year: '1021 FE',
			},
			'tfe-22': {
				title: 'Apoyo a la banda',
				description:
					'Fantasma permanece en el Taller de Clubs durante la guerra entre casas, proporcionando información desde sus vigilancias en los tejados y sus carreras de mensajero por los barrios bajos.',
				season: 'Otoño',
				year: '1021 FE',
			},
			'tfe-34': {
				title: 'Testigo del sacrificio',
				description:
					'Fantasma observa desde la multitud cómo Kelsier muere en la Plaza de la Fuente, un acontecimiento que marcará el resto de su vida.',
				season: 'Inicio de la primavera',
				year: '1022 FE',
			},
			'tfe-38': {
				title: 'La revolución',
				description:
					'Fantasma lucha junto a la banda durante la revolución final, ayudando a coordinar el levantamiento skaa desde las calles de Luthadel.',
				season: 'Inicio de la primavera',
				year: '1022 FE',
			},
			'woa-6': {
				title: 'El explorador en crecimiento',
				description:
					'Fantasma sirve como explorador para el nuevo gobierno de Elend, patrullando la ciudad y observando los ejércitos que la rodean durante el asedio.',
				season: 'Otoño',
				year: '1023 FE',
			},
			'woa-49': {
				title: 'Grupo del exilio',
				description:
					'Fantasma abandona Luthadel con el grupo del exilio de Vin y Elend por la Puerta de Estaño, dirigiéndose al norte hacia las montañas de Terris.',
				season: 'Invierno tardío',
				year: '1024 FE',
			},
			'woa-52': {
				title: 'Sobreviviendo a la batalla',
				description:
					'Tras regresar a Luthadel durante el ataque de los koloss, Fantasma sobrevive a la Batalla de Luthadel y ayuda a asegurar la ciudad.',
				season: 'Invierno tardío',
				year: '1024 FE',
			},
			'hoa-1': {
				title: 'Soldado de campaña',
				description:
					'Fantasma sirve en el ejército de Elend en Vetitan, ganando gradualmente más responsabilidad mientras las fuerzas del emperador aseguran el depósito de almacenamiento.',
				season: 'Primavera',
				year: '1026 FE',
			},
			'hoa-14': {
				title: 'El infiltrado',
				description:
					'Fantasma llega a Urteau antes de la misión diplomática de Sazed, infiltrándose en la ciudad a través del enredo de canales secos conocido como los Pasadizos.',
				season: 'Otoño',
				year: '1026 FE',
			},
			'hoa-17': {
				title: 'La casa en llamas',
				description:
					'Fantasma establece una base en un edificio oculto dentro de los Pasadizos, vigilando el opresivo régimen del Ciudadano y contactando con la resistencia local.',
				season: 'Otoño',
				year: '1026 FE',
			},
			'hoa-23': {
				title: 'Observación del mercado',
				description:
					'Fantasma observa al Ciudadano Quellion dando discursos en el Foso del Mercado, estudiando sus patrones y a los alománticos que obliga a servir mediante clavos hemalúrgicos.',
				season: 'Inicio del invierno',
				year: '1026 FE',
			},
			'hoa-30': {
				title: 'Acercándose al Ciudadano',
				description:
					'Fantasma se acerca al círculo íntimo del Ciudadano, investigando los clavos que Quellion usa para controlar a los alománticos y reuniendo pruebas de corrupción.',
				season: 'Invierno',
				year: '1026 FE',
			},
			'hoa-38': {
				title: 'Planeando la revolución',
				description:
					'Trabajando desde su escondite, Fantasma se coordina con Sazed y los rebeldes locales para planificar el derrocamiento del régimen de Quellion y asegurar el depósito.',
				season: 'Inicio de la primavera',
				year: '1027 FE',
			},
			'hoa-45': {
				title: 'La voz de Kelsier',
				description:
					'Fantasma comienza a oír lo que cree que es la voz de Kelsier guiándolo, empujándolo hacia acciones cada vez más peligrosas contra el Ciudadano.',
				season: 'Primavera',
				year: '1027 FE',
			},
			'hoa-50': {
				title: 'El edificio en llamas',
				description:
					'Fantasma es atravesado por un clavo durante un edificio en llamas, obteniendo habilidades alománticas mejoradas pero también volviéndose vulnerable a la influencia de Ruina a través del clavo.',
				season: 'Primavera',
				year: '1027 FE',
			},
			'hoa-55': {
				title: 'Revelación',
				description:
					'Fantasma comprende que la voz que ha estado oyendo no es Kelsier sino Ruina, manipulándolo a través del clavo hemalúrgico. Se arranca el clavo en agonía.',
				season: 'Primavera tardía',
				year: '1027 FE',
			},
			'hoa-58': {
				title: 'Héroe de Urteau',
				description:
					'Fantasma lidera la revolución contra Quellion, exponiendo su corrupción. Mientras los incendios consumen la ciudad, Sazed inunda los canales, salvando a Urteau de la destrucción.',
				season: 'Primavera',
				year: '1027 FE',
			},
			'hoa-64': {
				title: 'Recuperación',
				description:
					'Gravemente quemado pero vivo, Fantasma se recupera mientras Urteau se estabiliza bajo un nuevo liderazgo y se distribuyen los suministros del depósito.',
				season: 'Verano',
				year: '1027 FE',
			},
			'hoa-69': {
				title: 'Hacia los Pozos',
				description:
					'Fantasma viaja a los Pozos de Hathsin con las fuerzas de Urteau, uniéndose a los ejércitos que se reúnen para lo que será la batalla final.',
				season: 'Otoño',
				year: '1027 FE',
			},
			'hoa-83': {
				title: 'Un nuevo mundo',
				description:
					'Fantasma emerge en el mundo rehecho por Sazed: un campo de flores y hierba verde bajo un cielo azul. Porta las últimas palabras de Sazed para los supervivientes.',
				season: 'Otoño',
				year: '1027 FE',
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
