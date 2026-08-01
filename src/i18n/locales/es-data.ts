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
				'tfe-17': 'Nacida de la bruma',
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
				'tfe-27': 'Espía del Ministerio',
				'tfe-38': 'Inquisidor de Acero',
				'woa-4': 'Inquisidor reticente',
				'woa-57': 'Peón de Ruina', // Ruin is "Ruina"
				'hoa-0': 'Mano de Ruina',
				'hoa-79': 'Ojos de Hierro', // Canonical "Ironeyes"
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
				'Una Perpendicularidad que se manifiesta como fisuras irregulares en el suelo donde el atium cristaliza. El mapa está definido por grietas verticales estrechas y afiladas que se retuercen en la corteza. Los prisioneros se arrastraban por estos túneles claustrofóbicos buscando geodas. Kelsier descubrió el Undécimo Metal (Malatium) en una cámara oculta en lo profundo de la red de fisuras antes de destruir los cristales y acabar con la producción de atium.',
			safeDescription:
				'Una brutal mina-prisión al noreste de Luthadel, definida por estrechas fisuras verticales afiladas que se hunden en la corteza. Los prisioneros condenados se arrastran por estas grietas claustrofóbicas en busca de las raras geodas de atium que se forman en su interior. Pocos sobreviven mucho tiempo.',
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
				'Durante el ascenso de Ruina, Marsh presenció una enorme erupción de lava de sus laderas tras crear un clavo hemalúrgico cerca, y su cada vez más densa caída de ceniza señalaba el deterioro acelerado del mundo.',
			safeDescription:
				'El monte de ceniza más cercano a Luthadel, visible desde las murallas de la ciudad. Sus constantes erupciones cubren la Dominación Central con las capas más espesas de ceniza, requiriendo cuadrillas de limpieza constantes.',
			confidence: 'verified',
		},
		urteau: {
			name: 'Urteau',
			description:
				'Famosa por sus "calles-canal" — canales que fueron drenados por el Lord Legislador para servir como calzadas hundidas. Bastión del Ciudadano (Quellion) durante el Colapso.',
			safeDescription: 'La capital de la Dominación del Norte y sede ancestral de la Casa Venture.',
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
				'Ascendió a la prominencia tras la muerte del Lord Legislador. Depende de formaciones rocosas naturales (plataformas de "cremnol") para su defensa en lugar de murallas. Alberga una de las Cavernas de Almacenamiento secretas del Lord Legislador.',
			safeDescription:
				'Un importante centro comercial en la Dominación del Oeste, fortificado por formaciones rocosas naturales.',
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
				'Construida directamente sobre una de las Cavernas de Almacenamiento del Lord Legislador. La arquitectura se adaptó a la intensa caída de ceniza con expansiones subterráneas y un diseño centrado en el Ministerio. Para la época de El Héroe de las Eras, la ciudad está siendo consumida por acumulaciones de ceniza, con los ciudadanos viviendo en los pisos superiores mientras los inferiores se llenan de ceniza.',
			safeDescription:
				'Una ciudad de la Dominación del Norte con arquitectura adaptada a la intensa caída de ceniza.',
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
				'Una empinada escalera en espiral desciende hacia la verdad: la Sala de los Sirvientes (fosas comunes), los dormitorios de los Inquisidores y la Cámara de Hemalurgia con sus mesas de piedra, canales de drenaje y bóveda de clavos. En lo profundo, Sazed descubrió la inscripción en placa de acero de Kwaan oculta en una alcoba secreta. Aquí es donde se crean los Inquisidores.',
			safeDescription:
				'Una fortaleza vertical tallada en un acantilado cerca de la frontera norte. Los niveles superiores funcionan como un templo estándar del Ministerio (capilla, viviendas).',
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
				'La ubicación del Pozo de la Ascensión original antes de que el Lord Legislador alterara la geografía del mundo.',
			safeDescription: 'Una escarpada cordillera donde el pueblo terrisano fue subyugado.',
			confidence: 'verified',
		},
		'tincut-fastness': {
			name: 'Bastión de Tincut',
			description: 'Donde el Sínodo y los refugiados se retiraron durante el colapso del Imperio.',
			safeDescription: 'Una fortaleza oculta en las montañas de Terris.',
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
				'Una arteria artificial excavada en la tierra por decreto del Lord Legislador, que une Tathingdwen con Luthadel para la extracción de recursos terrisanos y la inserción de soldados imperiales. La misma infraestructura que conectaba el imperio se convirtió en la vía de su destrucción cuando los ejércitos koloss utilizaron el camino del canal para atacar — un monumento tanto a la ingeniería imperial como a la opresión imperial.',
			safeDescription:
				'No es un río natural, sino una arteria artificial excavada en la tierra por decreto del Lord Legislador. Une Tathingdwen en el norte directamente con Luthadel, permitiendo el comercio y el transporte a través del imperio. Un monumento a la ingeniería imperial.',
			confidence: 'probable',
		},
		'kandra-homeland': {
			name: 'Hogar de los Kandra',
			description:
				'Cavernas profundas bajo los Pozos de Hathsin, hogar del pueblo kandra que custodia los mayores secretos del Lord Legislador, incluyendo el Fideicomiso.',
			safeDescription:
				'Un complejo subterráneo oculto bajo los Pozos de Hathsin. Su verdadera naturaleza y propósito son desconocidos para el mundo exterior.',
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
			description:
				'Ancla sur de la red de Cavernas de Almacenamiento. Contiene la Caverna de Almacenamiento 2 con suministros de emergencia.',
			safeDescription: 'Una ciudad en la Dominación del Sur.',
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
				'Usadas por el ejército rebelde de Kelsier como base oculta, estas cavernas albergaron a miles de soldados skaa que entrenaban para la revolución.',
			safeDescription:
				'Una red de cuevas de piedra caliza en las montañas entre Luthadel y los Pozos de Hathsin.',
			confidence: 'verified',
		},
		garthwood: {
			name: 'Garthwood',
			description:
				'Un asentamiento en la Dominación del Este cuyas aldeas circundantes estuvieron entre las primeras en experimentar la enfermedad de la bruma que luego se extendería por todo el imperio — una señal temprana del patrón que Elend y Vin descubrirían.',
			safeDescription:
				'Un asentamiento en la Dominación del Este donde Sazed viajó para enseñar religiones suprimidas a los skaa liberados.',
			confidence: 'probable',
		},
		'straffs-camp': {
			name: 'Campamento de Straff',
			description: 'Campamento militar de Straff Venture al norte de Luthadel durante el asedio.',
			confidence: 'probable',
		},
		'koloss-camp': {
			name: 'Campamento Koloss',
			description:
				'El campamento del ejército koloss cerca de Luthadel durante el asedio del 1024 IF. El desastroso intento de Jastes Lekal de comprar la lealtad koloss con monedas de madera llevó a las criaturas a lanzar un devastador asalto contra la ciudad.',
			safeDescription:
				'Un gran campamento de fuerzas koloss cerca de Luthadel, su presencia una amenaza constante durante el asedio.',
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
			description:
				'Albergaba un ejército permanente de 5,000 soldados que interceptaron y masacraron al ejército rebelde de Yeden cerca de la ciudad de Holstep, demostrando la capacidad del Lord Legislador para proyectar fuerza militar rápida.',
			safeDescription: 'Una importante ciudad de guarnición ubicada al noroeste de Luthadel.',
			confidence: 'probable',
		},
		'haverfrex-cannery-central': {
			name: 'Haverfrex',
			description:
				'Sirvió como el nodo de suministro principal para el ejército de Lord Ashweather Cett durante el Asedio de Luthadel, proporcionando la resistencia logística necesaria para una presencia militar a largo plazo.',
			safeDescription:
				'Un punto de paso industrial en la Dominación Central conocido por su fábrica de conservas a gran escala.',
			confidence: 'probable',
		},
		'cetts-camp': {
			name: 'Campamento de Cett',
			description:
				'El campamento militar de Lord Ashweather Cett al noroeste de Luthadel durante el asedio.',
			confidence: 'probable',
		},
		'western-coast': {
			name: 'Costa Occidental',
			description:
				'La costa occidental del Imperio Final donde las tierras habitadas dan paso a un océano gris infinito del Reino Cognitivo. Kelsier llegó a esta orilla desolada tras semanas de correr hacia el oeste, solo para encontrar a Ruina esperándole. Desde aquí, el Reino Cognitivo se extiende a través de un mar oscuro hacia tierras distantes más allá de la frontera de Scadrial.',
			safeDescription:
				'El desolado borde occidental del Imperio Final donde el continente termina y el océano comienza. Escasamente habitada y raramente visitada, sus costas marcan el límite del mundo conocido.',
			confidence: 'probable',
		},
		'ire-fortress': {
			name: 'Fortaleza de los Ire',
			description:
				'Una imponente y resplandeciente fortaleza de los Ire construida en el Reino Cognitivo mucho más allá del borde occidental de Scadrial. Construida con piedra blanca que pulsa con una luz interior, está rodeada de extraños árboles como de vidrio y alimentada por un conducto de Investidura pura. En sus bóvedas, los Ire guardan un orbe capaz de capturar el poder de una Esquirla moribunda — la llave de la Ascensión. Kelsier se infiltró en la fortaleza, espió los planes de los antiguos Elantrianos y robó el orbe aterrorizando a su grupo expedicionario.',
			safeDescription:
				'Una misteriosa fortaleza vislumbrada en relatos del mundo más allá de la muerte, su naturaleza y propósito desconocidos para los vivos.',
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
					'El palacio del Lord Legislador, la "Colina de las Mil Agujas". Vin lo destruyó en una masiva demostración de poder alomántico alimentado por la bruma, derrumbando toda la estructura en escombros durante su enfrentamiento con los Inquisidores de Ruina.',
				safeDescription:
					'El palacio del Lord Legislador, la "Colina de las Mil Agujas". Su construcción fragmentaria sugiere que la ciudad no fue perfectamente planificada desde el principio.',
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
					'Aquí es donde el Lord Legislador mató a Kelsier. Más tarde renombrada la Plaza del Superviviente.',
				safeDescription: 'Lugar de ejecuciones públicas.',
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
				description: 'La fuente de poder oculta bajo Kredik Shaw.',
				safeDescription:
					'Una misteriosa cámara subterránea bajo Kredik Shaw, cuya verdadera naturaleza permaneció oculta durante mil años.',
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
				description:
					'Ham y Vin vinieron aquí para evaluar la fuerza militar del Lord Legislador y reclutar soldados afines.',
				safeDescription: 'El campo de entrenamiento militar y los cuarteles de la ciudad.',
				confidence: 'probable',
			},
			'warehouse-district': {
				name: 'Distrito de Almacenes',
				description:
					'Aquí es donde la banda de Kelsier almacenaba armas y celebraba mítines secretos para la rebelión skaa.',
				safeDescription: 'El distrito industrial cerca de los canales occidentales.',
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
			'kenton-street': {
				name: 'Calle Kenton',
				description:
					'Una concurrida calle comercial en Luthadel donde los mercaderes venden desde utensilios domésticos hasta animales exóticos.',
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
			},
			'tfe-1': {
				title: 'Observador oculto',
				description:
					'Kelsier observa las operaciones de la banda de Camon desde las sombras, advirtiendo el uso inconsciente de la alomancia por parte de Vin: una huérfana callejera con poderes de nacida de la bruma.',
			},
			'tfe-3': {
				title: 'Reclutando a Vin',
				description:
					'Vin intenta huir de la guarida de Camon, pero Ulef la traiciona. Kelsier interviene y la salva de la paliza de Camon. Asciende a Milev a jefe de la banda, se queda con los tres mil boxings como pago por encargarse del obligador y el Inquisidor, y alquila la guarida para la reunión de esa noche. Luego pone a prueba a Vin y confirma que es una nacida de la bruma.',
			},
			'tfe-5': {
				title: 'El robo del atium',
				description:
					'Kelsier, Dockson y Vin suben a la azotea. Kelsier se equipa y se lanza a las brumas para asaltar la Fortaleza Venture y robar atium. Consigue la caja fuerte, pero tiene que enfrentarse a mataneblinas en su huida. Escapa con el atium y financia la rebelión.',
			},
			'tfe-6': {
				title: 'La banda al completo',
				description:
					'En la carpintería de Clubs, Kelsier y la banda planean la destrucción del Imperio Final. Marsh llega finalmente y todos se marchan para que los dos hermanos hablen a solas. Vin vuelve a escuchar a escondidas tras la puerta.',
			},
			'tfe-7': {
				title: 'Entrenando a la aprendiz',
				description:
					'Kelsier saca a Vin a su primera noche de entrenamiento y le entrega una capa de brumas. Le enseña los ocho metales básicos junto a las murallas de Luthadel, cerca de la Puerta de Acero.',
			},
			'tfe-8': {
				title: 'La tapadera Renoux',
				description:
					'Kelsier lleva a Vin al otro lado de las murallas de Luthadel, donde se topan con un espectro de bruma. En la carretera principal, Sazed les espera con un carruaje y los lleva a Fellise. Por el camino, Kelsier ofrece a Vin los tres mil boxings y la oportunidad de abandonar la banda si no confía en él. En la finca de lord Renoux, establece la identidad falsa de Vin como lady Valette.',
			},
			'tfe-10': {
				title: 'Planificando la revolución',
				description:
					'De vuelta en Luthadel, Kelsier celebra una reunión de progreso en la tienda de Clubs. Antes, pregunta a Sazed por una religión con poder —Sazed le habla del jaísmo— y si alguna considera sagrado el exterminio de los nobles. La reunión termina cuando un soldado de Hammond informa de que el Ministerio ha encontrado la antigua guarida de Camon.',
			},
			'tfe-10.2': {
				title: 'El mitin del almacén',
				description:
					'Kelsier predica la revolución ante trabajadores skaa reunidos en un mitin secreto en el distrito de almacenes. Breeze y sus aplacadores y agitadores manipulan a la multitud para que sea más receptiva, usando la leyenda del Superviviente de Hathsin para inspirar la rebelión.',
			},
			'tfe-11': {
				title: 'La masacre de la guarida de Camon',
				description:
					'Kelsier y la banda investigan la guarida destruida. Tras marcharse, Kelsier intenta encontrar a Camon entre los mendigos. Halla el cadáver de Camon colgado de un gancho clavado en su boca, muñecas y tobillos atados, el cuerpo torturado. Este método de ejecución se reserva a quienes abusan de la alomancia. Vin había seguido a Kelsier con éxito y hablan brevemente tras el descubrimiento.',
			},
			'tfe-13': {
				title: 'Planes en Fellise',
				description:
					'Kelsier se reúne con Vin y Sazed en la finca de lord Renoux en Fellise para revisar la inteligencia obtenida en el primer baile de Vin. Se entera de que el padre de Vin estuvo en el baile y luego se marcha a las brumas para volver a Luthadel.',
			},
			'tfe-14': {
				title: 'Reconocimiento del palacio',
				description:
					'Kelsier lleva a Vin a Kredik Shaw para explorar el edificio que el lord Legislador visita cada tres días. Se abren paso luchando, pero tres Inquisidores de Acero convergen sobre ellos. Kelsier se separa de Vin en el caos. Vin escapa gravemente herida aferrándose a un misterioso libro encuadernado en cuero.',
			},
			'tfe-15': {
				title: 'Después de Kredik Shaw',
				description:
					'La banda discute la decisión de Kelsier de llevar a Vin a Kredik Shaw. Antes de poder salir a buscarla, Sazed llega cargando con ella. Dockson está furioso por el riesgo. Kelsier y Dockson advierten el libro encuadernado en cuero que Vin trajo consigo; Sazed lo identifica como escrito en khlennio, la lengua de la patria del lord Legislador anterior a la Ascensión, y cree poder traducirlo.',
			},
			'tfe-16': {
				title: 'Velando a Vin',
				description:
					'Kelsier permanece en la tienda de Clubs velando a Vin mientras se recupera de las heridas sufridas en Kredik Shaw, presente cuando finalmente despierta.',
			},
			'tfe-17': {
				title: 'Reunión en la finca Renoux',
				description:
					'Kelsier viaja a Fellise con Breeze, Yeden y Dockson para reunirse con lord Renoux en su finca y discutir la siguiente fase de la rebelión.',
			},
			'tfe-19': {
				title: 'Avivando la guerra de casas',
				description:
					'Kelsier siembra el caos para alentar la Guerra de Casas dejando el cuerpo evidentemente asesinado de lord Charrs Entrone en el jardín de la Fortaleza Tekiel. Luego va a los Hollinbarrios para encontrarse con Hoid —un informante que se hace pasar por contacto callejero— y averiguar qué rumores hay sobre la Casa Renoux. De Hoid también se entera de que lady Shan Elariel es una aplacadora.',
			},
			'tfe-19.2': {
				title: 'Encuentro con lord Straff',
				description:
					'Kelsier acude a la plaza Ahlstrom haciéndose pasar por un skaa mendigo, enfermo y lisiado, informante callejero, para encontrarse con lord Straff Venture, líder de la Casa Venture. Descubre que los rumores sobre el Superviviente de Hathsin se están extendiendo y que se habla de un Undécimo Metal.',
			},
			'tfe-19.3': {
				title: 'Regreso a Renoux',
				description:
					'Kelsier vuelve a la mansión Renoux por la Ruta de Pinchos e intercambia información con Vin, Sazed y Renoux. Le da un sermón a Vin sobre los nobles, insistiendo en que no les importan los skaa y que debe mantenerse alejada de Elend.',
			},
			'tfe-20': {
				title: 'Supervisando los suministros',
				description:
					'Kelsier está en la finca Renoux de Fellise supervisando las armas y suministros que se cargan en carros para enviarlos a la rebelión.',
			},
			'tfe-21': {
				title: 'El ejército rebelde',
				description:
					'Kelsier lee una traducción del diario del lord Legislador mientras viaja en barca por un canal hacia el norte. La caravana se detiene en una esclusa y Kelsier, los reclutas y los suministros se dirigen a las cuevas donde el ejército rebelde se entrena. Superando los recuerdos de los Pozos de Hathsin, entra en el complejo de las Cavernas de Arguois e inspecciona el ejército que Ham ha estado formando. Durante una cena, Kelsier agita las emociones de Bilg, con la intención de usarlo como ejemplo. Bilg y Demoux se baten en duelo; Kelsier usa la alomancia para ayudar a Demoux —el más pequeño de los dos— a ganar. Tras el duelo, la confianza del ejército se dispara al creer Yeden que Kelsier puede conceder sus poderes a otros. Kelsier quiere que Ham vuelva a Luthadel con él, dejando el ejército a cargo de Yeden.',
			},
			'tfe-23': {
				title: 'Siguiendo a Vin',
				description:
					'Kelsier aparece fuera de la ventana de la torre donde Vin espía al grupo de Elend en la Fortaleza Hasting. Desdeña su charla idealista sobre cambiar el mundo como comportamiento típico de jóvenes nobles que nunca lleva a un cambio real. Ambos se marchan por caminos separados.',
			},
			'tfe-24': {
				title: 'Reunión de situación',
				description:
					'Kelsier llega a la tienda de Clubs, donde se ha reunido gran parte de la banda. Discute el estado de la misión y comparte una copa nocturna con Spook, Ham y Clubs. Pide a Ham que vaya a la Guarnición a recabar información.',
			},
			'tfe-25': {
				title: 'Decisión desesperada',
				description:
					'En la tienda de Clubs, Kelsier se entera de que la rebelión skaa ha atacado la Guarnición de Holstep y la de Luthadel se dirige al norte. Decide intentar avisar al ejército rebelde y hace que Vin trague cinco cuentas de peltre para una larga carrera de peltre hacia el norte.',
			},
			'tfe-25.2': {
				title: 'Desastre en Holstep',
				description:
					'Kelsier y Vin corren durante dieciséis horas quemando peltre sin parar. Se topan con los restos del ejército rebelde, rodeado y masacrado por la Guarnición de Valtroux. Kelsier quiere unirse a la lucha y salvar a quien pueda, pero Vin le convence de que no son invencibles. Continúan hasta las Cavernas de Arguois, donde 2.000 soldados han sobrevivido gracias a que Mennis los mantuvo preparados. Mennis le dice a Kelsier que no se aflija demasiado: ha sido una de las mayores victorias skaa contra el lord Legislador en siglos.',
			},
			'tfe-26': {
				title: 'Recogiendo los pedazos',
				description:
					'De vuelta en la tienda de Clubs tras dos semanas de regreso de las cavernas, la banda habla sobre el futuro del plan: parece un fracaso total. Breeze culpa a Kelsier de perseguir fama y gloria. Kelsier admite el revés pero se niega a abandonar la revolución.',
			},
			'tfe-26.2': {
				title: 'Las ejecuciones',
				description:
					'Spook anuncia ejecuciones en la Plaza de la Fuente. La banda se dirige allí, sobornando a alguien en un edificio para acceder a la azotea. Contemplan la matanza de numerosos skaa mientras su sangre se vierte en la fuente. Kelsier convence a la banda de continuar, señalando la atrocidad: «Este es nuestro enemigo. Aquí no hay cuartel ni marcha atrás.»',
			},
			'tfe-27': {
				title: 'Nueva estrategia',
				description:
					'La banda regresa a la tienda de Clubs para planear sus siguientes movimientos: iniciar una guerra entre las casas nobles. Sazed trae un mensaje de Marsh indicando a Kelsier dónde pueden reunirse en los Recodos.',
			},
			'tfe-27.2': {
				title: 'El metal dorado',
				description:
					'Kelsier y Vin se dirigen a un edificio abandonado en los Recodos horas antes de la reunión con Marsh. Mientras esperan, Kelsier habla del oro —el noveno metal alomántico que permite al usuario ver una versión alternativa de su pasado—. También le explica la feruquimia y le da algo de oro para que lo queme por primera vez. Cuando Marsh llega, con los tatuajes de un obligador de rango bajo del Cantón de Inquisición, describe las estaciones de aplacamiento en Luthadel y revela que los Inquisidores pueden morir de vejez.',
			},
			'tfe-29': {
				title: 'Consejo de guerra en Renoux',
				description:
					'Kelsier se reúne con la mayor parte de la banda en la finca de Renoux en Fellise, repasando un mapa muy detallado de las defensas de Luthadel proporcionado por Marsh. Al estudiarlo, descubren que la banda de Theron fue atacada recientemente por el Ministerio. Esa noche, incapaz de dormir, Kelsier pide a Sazed que le cuente algunas de las religiones que conoce.',
			},
			'tfe-31': {
				title: 'Regañando a la aprendiz',
				description:
					'Kelsier y Vin regresan a la tienda de Clubs después de que Vin matara a lady Shan Elariel —una nacida de la bruma en toda regla— en la Fortaleza Venture. Kelsier regaña a Vin por el combate temerario, pero ella le grita que nobles y skaa no son tan diferentes, y que Elend Venture es un buen hombre que merece ser protegido.',
			},
			'tfe-32': {
				title: 'Encontrando a Marsh',
				description:
					'Kelsier y Vin encuentran el cuerpo de Marsh, desangrado por completo, una cáscara sin vida. De vuelta en la tienda de Clubs, descubren una carta de Marsh explicando que los Inquisidores probablemente le encontrarían.',
			},
			'tfe-32.2': {
				title: 'Destruyendo los Pozos',
				description:
					'Kelsier regresa a los Pozos de Hathsin, el lugar de su mayor sufrimiento. Mata a todos los guardias y tiende la mano a un skaa llamado Wallin que sale de la caverna. Luego destruye todos los cristales de atium, cortando el recurso más valioso del lord Legislador en una sola noche.',
			},
			'tfe-33': {
				title: 'El refugio de emergencia',
				description:
					'Kelsier regresa a un húmedo sótano de reserva cerca de la tienda de Clubs, apenas tres habitaciones. Anuncia que ha destruido todo el atium de los Pozos de Hathsin.',
			},
			'tfe-33.2': {
				title: 'La pelea con el Inquisidor',
				description:
					'Todos siguen a Kelsier hasta la Plaza de la Fuente. Ven a Spook y lord Renoux en uno de los carros de ejecución. Kelsier lucha contra un Inquisidor en la plaza, una trampa que casi con seguridad sabía que sería.',
			},
			'tfe-34': {
				title: 'La última batalla del Superviviente',
				description:
					'Kelsier lucha contra el Inquisidor en un combate a muerte en la Plaza de la Fuente, ambos quemando atium. Es un maestro de Empujar y Tirar, moviendo metal por el aire con pericia. Mata al Inquisidor y los skaa empiezan a corear «El Superviviente de Hathsin». El lord Legislador llega en un carruaje negro. Uno de los matones de Ham le clava una lanza —sigue caminando—. Dos lanzas —sigue caminando—. El lord Legislador abofetea a Kelsier, arranca una lanza de su propio cuerpo y se la hunde a Kelsier. Muere con una sonrisa, convirtiéndose en el mártir que enciende la revolución. Kelsier representa la Esperanza.',
			},
			'tfe-35': {
				title: 'Más allá de la muerte',
				description:
					'En el refugio de emergencia cerca de la tienda de Clubs, la banda ve al kandra, antes lord Renoux, usando el cuerpo y los huesos de Kelsier: el plan final. Kelsier había dejado cartas a cada miembro con instrucciones para tomar la ciudad. Su muerte fue la chispa que prendió la revolución en todo Luthadel.',
			},
			// ── El Pozo de la Ascensión (Historia Secreta) ──────────────────
			'woa-1': {
				title: 'Sombra cognitiva',
				description:
					'Kelsier despierta como Sombra Cognitiva en el Pozo de la Ascensión tras su muerte, atrapado entre reinos. Hoid llega a través de la perpendicularidad, reprochándole haber destruido los Pozos de Hathsin antes de pasar al Reino Físico y robar una cuenta de lerasium. Leras (Conservación) aparece y le enseña sobre los tres Reinos: Físico, Cognitivo y Espiritual.',
			},
			'woa-5': {
				title: 'Observando el mundo',
				description:
					'Kelsier cabalga los pulsos de Ruina para observar el mundo más allá de su prisión. Nota que Ruina presta especial atención a Vin —cierta nacida de la bruma. La observa patrullar las murallas de Luthadel, entrenar con su nuevo kandra lobo, y empezar a sentir al espíritu de la bruma que es Conservación tratando de guiarla.',
			},
			'woa-12': {
				title: 'Los planes de Ruina',
				description:
					'Kelsier descubre que Ruina está alterando la religión terrisana desde el Conventículo de Seran. Mientras tanto, Marsh —ahora bajo el control total de Ruina— abandona a Sazed en el Conventículo y desaparece. Kelsier observa impotente cómo Sazed descubre la inscripción de Kwaan y comienza su crisis de fe.',
			},
			'woa-26': {
				title: 'Observando el asedio',
				description:
					'Kelsier observa a Vin demostrar un poder aterrador en la negociación con Straff, y luego ve cómo Elend es destituido por la Asamblea. Ruina orquesta la aproximación del ejército koloss mientras manipula a Zane para aislar a Vin. Kelsier se enfurece al ver a Elend gobernando Luthadel pero llega a respetar sus esfuerzos. Nota que Ruina deliberadamente deja que Vin lo vea atacar a Elend.',
			},
			'woa-57': {
				title: 'La cámara del Pozo',
				description:
					'Vin y Elend descienden hacia el Pozo de la Ascensión. La apariencia de Conservación se vuelve menos humana —su rostro medio desaparecido, su cuerpo decayendo. Le dice a Kelsier que el poder no debe ser liberado pero Vin será engañada. Marsh, bajo el control de Ruina, ataca a Sazed en la entrada. Kelsier, desesperado, agarra el brazo de Conservación y hiere a Elend con él para motivar a Vin a usar el poder.',
			},
			'woa-60': {
				title: 'Ruina liberado',
				description:
					'Vin libera el poder en el Pozo en lugar de usarlo, rompiendo la prisión de Ruina. El poder atraviesa la barrera. Conservación guía a Vin para que dé a Elend la última cuenta de lerasium, transformándolo en nacido de la bruma y salvándole la vida. Kelsier observa cómo el mundo cambia mientras la conciencia plena de Ruina se derrama sobre Scadrial.',
			},
			// ── El Héroe de las Eras (Historia Secreta) ─────────────────────
			'hoa-0': {
				title: 'El duelo del Superviviente',
				description:
					'En los días posteriores a la batalla koloss, Kelsier abandona el Pozo y viaja por la reflejo Cognitivo de Luthadel hasta la Fortaleza Venture, donde encuentra a su banda superviviente celebrando un funeral. Descubre que Dockson y Clubs murieron —héroes ambos. Agarrando a Conservación con furia por su apatía, Kelsier siente en cambio la profundidad del amor de Conservación por la humanidad y lo abraza. Conservación le muestra gente lejana al sur y menciona a alguien que podría ayudarle a hacer lo imposible.',
			},
			'hoa-3': {
				title: 'Khriss y Nazh',
				description:
					'Siguiendo un zarcillo de Conservación al este de la ciudad, Kelsier llega al Lago Luthadel donde el Reino Cognitivo se siente más sólido. Encuentra una hoguera con dos desconocidos —Khriss y Nazh— que lo reconocen y se asombran de que exista en este reino. Khriss le explica las dieciséis Esquirlas y Adonalsium. Nazh le regala su cuchillo y le señala hacia los Ire.',
			},
			'hoa-5': {
				title: 'Visión de la divinidad',
				description:
					'Conservación mira a los ojos de Kelsier, dándole una visión de la divinidad y futuros posibles. En ningún futuro vence Kelsier a Ruina, pero presiente que Vin tiene una oportunidad —si va al oeste. Su Conexión con Ruina es mucho más profunda que con Conservación, un hecho que lo perturba. Conservación insiste en que los Ire no ayudarán, pero Kelsier no piensa pedírselo.',
			},
			'hoa-8': {
				title: 'Corriendo al oeste',
				description:
					'Kelsier corre hacia el oeste por el Canal Imperial hacia el océano. Como Sombra Cognitiva, no se cansa —mientras no piense en el agotamiento. Atraviesa pueblos vacíos por la creciente enfermedad de la bruma, la ceniza cayendo más espesa que nunca mientras Ruina acelera la decadencia del mundo.',
			},
			'hoa-12': {
				title: 'Recuerdos de Longsfollow',
				description:
					'Haciendo una pausa en Longsfollow —un pueblo donde una vez mató a nobles en represalia por una chica skaa asesinada— Kelsier es golpeado por el agotamiento y la culpa. Los Inquisidores vinieron después, matando aún más. Pregunta a Conservación dónde está Mare. Un loco en el edificio lo oye pero no puede comprender. Al darse cuenta de cuánto ha estado corriendo, siente verdadero agotamiento por primera vez desde que dejó Luthadel antes de seguir hacia el oeste vacío.',
			},
			'hoa-15': {
				title: 'El camino solitario',
				description:
					'Al oeste de Longsfollow, Kelsier se detiene en un hoyo de fuego y descubre que puede encender llamas solo con la mente. La ceniza cae más espesa que nunca, y observa a refugiados skaa huyendo siempre al oeste para escapar de la destrucción que avanza. Completamente solo, anhela cualquier tipo de interacción —incluso con Hoid— mientras continúa su marcha implacable hacia el océano distante.',
			},
			'hoa-18': {
				title: 'La burla de Ruina',
				description:
					'Tras semanas de correr, Kelsier alcanza el océano occidental. Ati (Ruina) aparece y monologa sobre la inevitabilidad de la decadencia, diciéndole que el fin está muy cerca. Se burla de Kelsier diciendo que aquí no puede hacer ningún bien —lo que lleva a Kelsier a concluir que lo contrario debe ser cierto. Ruina se mofa de que el Undécimo Metal fue su ardid, tratando de romper la voluntad de Kelsier. Kelsier sigue adelante, adentrándose en el océano del Reino Cognitivo.',
			},
			'hoa-21': {
				title: 'El océano del pensamiento',
				description:
					'Kelsier cruza el océano del Reino Cognitivo con solo una antorcha improvisada como luz en la oscuridad infinita. Lejos de Scadrial, siente un tirón en su alma —una indicación de que está dejando su propio mundo atrás. Camina penosamente por una extraña jungla que gradualmente se adelgaza, sus árboles convirtiéndose en esculturas dentadas de piedra, hasta que ve una luz brillante adelante: la fortaleza de los Ire.',
			},
			'hoa-24': {
				title: 'La fortaleza Ire',
				description:
					'Kelsier alcanza una imponente fortaleza de piedra blanca resplandeciente mucho más allá de Scadrial. Escalando sus muros hundiendo las manos en la piedra, escucha a escondidas a los Ire —antiguos elantrinos que protegen un dispositivo que podría capturar el poder de Conservación. Planean tomar la Esquirla ellos mismos. Kelsier encuentra una descripción del dispositivo del orbe y decide robarlo, pero cree que la fuerza es demasiado arriesgada.',
			},
			'hoa-30': {
				title: 'Robando el orbe',
				description:
					'Kelsier acecha a los Ire cuando salen cabalgando con el orbe. Los aterroriza fingiendo ser Ruina, cortando la pata de un caballo con el cuchillo de Nazh y creando un títere de capa en llamas. Cuando Alonoe se separa del grupo, deja inconsciente a su guardia y susurra desde las sombras que deje el orbe. Ella obedece, aterrorizada, y Kelsier comienza la larga carrera de vuelta al este con su premio.',
			},
			'hoa-35': {
				title: 'Fadrex y Hoid',
				description:
					'Tras semanas de correr de vuelta a través del continente, Conservación le dice a Kelsier que vaya a Fadrex. Una fina línea de luz lo guía por la ciudad hasta una plaza llena de mendigos —donde encuentra a Vin, y una vez más se encuentra con Hoid, quien se sorprende pero por lo demás lo ignora. Kelsier intenta desesperadamente advertir a Vin sobre el pendiente de clavo y que evite a Hoid, pero ella parece solo oírlo a medias. Ruina ataca a Kelsier con fuerza espiritual, revelando que el Undécimo Metal fue su manipulación todo el tiempo.',
			},
			'hoa-42': {
				title: 'Los peones de Ruina revelados',
				description:
					'Cada vez que Kelsier intenta alcanzar a Vin, Ruina bloquea su camino. Desde fuera de Fadrex, observa a los koloss atacar al ejército de Elend en los montículos de ceniza —y al morir, ve sus verdaderas formas: humanos de todas las clases sociales, creados por la hemalurgia. Conservación le muestra una visión de cada persona que Ruina controla mediante clavos: Inquisidores acechando la tierra, Vin con su pendiente, el rey Penrod en el trono de Luthadel, Spook en Urteau, y su hermano Marsh —quien, ahora mismo, está en Luthadel clavando un clavo en el corazón de Penrod.',
			},
			'hoa-50': {
				title: 'La advertencia confusa',
				description:
					'Kelsier busca en el campamento del ejército fuera de Fadrex durante días, buscando a un soldado medio loco con el que pueda comunicarse para advertir a Vin: no confíes en nadie atravesado por metal. El hombre tergiversa el mensaje y simplemente provoca una pelea. Ruina llega para burlarse de él una vez más. Al darse cuenta de que ya no puede hacer más aquí —la atención de Ruina está demasiado centrada en Vin y Elend— Kelsier dirige su conciencia a otra parte. Muy al norte, en Urteau, un joven ojo de estaño llamado Spook arde con devoción al Superviviente. Esa Conexión podría ser lo bastante fuerte para usarla.',
			},
			'hoa-54': {
				title: 'La sombra del Superviviente',
				description:
					'Kelsier llega a Urteau, buscando al joven ojo de estaño cuya devoción por él arde como un faro. Encuentra a Spook bajo la influencia de Ruina —un clavo hemalúrgico en su cuerpo, el dios de la destrucción instándole a matar. Pero la atención de Ruina aquí es más débil que en Fadrex. Kelsier espera su momento, esperando la ocasión adecuada para actuar, observando a Spook moverse por la ciudad y sintiendo cómo las líneas de Conexión entre ellos se fortalecen.',
			},
			'hoa-58': {
				title: 'Esperanza para Spook',
				description:
					'Kelsier encuentra a Spook en Urteau, donde Ruina le insta a asesinar. Las líneas de Conexión entre ellos son más fuertes que con nadie más —la devoción de Spook al Superviviente creó un vínculo único. Kelsier susurra «esperanza» a Spook repetidamente, y finalmente Spook se quita el clavo hemalúrgico. Kelsier entonces grita «sobrevive» y Spook entra en acción mientras Ruina comienza a quemar la ciudad.',
			},
			'hoa-62': {
				title: 'El medio sueño',
				description:
					'Spook y Kelsier se encuentran en un medio sueño sobre hierba verde —el espíritu del joven ojo de estaño herido pero su voluntad intacta. Kelsier le dice a Spook que es un héroe y que está orgulloso de él. Le insta a hacer llegar un mensaje a Vin: cualquiera atravesado por metal puede ser controlado por Ruina. Spook asiente al despertar, decidido.',
			},
			'hoa-68': {
				title: 'Tomando Conservación',
				description:
					'Sintiendo que Conservación está muriendo, Kelsier rompe el orbe de los Ire con el cuchillo de Nazh y toma el poder de la Esquirla tras una lucha desesperada. Pero Ruina se ríe —Kelsier es un recuerdo de una persona y no puede controlarlo plenamente. Todo lo que intenta hacer es bloqueado. Oye a Marsh luchando dentro de su propia mente y se da cuenta de que debe actuar indirectamente, no enfrentarse a Ruina directamente.',
			},
			'hoa-69': {
				title: 'La caída del mensajero',
				description:
					'Kelsier observa cómo Goradel cabalga desde Urteau llevando la advertencia de Spook inscrita en metal —pero Ruina convoca a Marsh. El Inquisidor desciende sobre el mensajero y lo mata, leyendo el mensaje en voz alta a su amo. Kelsier da las gracias a Goradel mientras el alma del soldado pasa por el Reino Cognitivo, luego se hunde en la desesperación. Pero un pensamiento lo atraviesa: Ruina no está completo sin el atium. Todavía hay esperanza.',
			},
			'hoa-78': {
				title: 'Cediendo el poder',
				description:
					'Kelsier observa a Vin luchar contra los Inquisidores restantes en Kredik Shaw —luego Marsh la tortura, hundiendo los clavos más profundamente. Pero Marsh ha leído la advertencia que tomó del cadáver de Goradel. Extiende la mano y arranca el clavo del pendiente de la oreja de Vin. Kelsier aprovecha el momento, atacando a Ruina para distraerlo mientras Vin aspira las brumas y toma el poder de Conservación. Su alma se desgarra al cederle la Esquirla, pero Ruina está demasiado distraído para acabar con él.',
			},
			'hoa-80': {
				title: 'La reparación del alma',
				description:
					'Kelsier está agonizando. El tirón de la muerte vuelve a arrastrarlo —pero se aferra, decidiendo de nuevo no morir, una elección a su alcance por haber Ascendido. Su alma está profundamente herida por haber cedido Conservación a Vin, pero con el tiempo comienza a repararse. Ruina estaba demasiado distraído para acabar con él. Desde el Reino Cognitivo, Kelsier observa a los cientos de miles de refugiados reunidos en los Pozos, a los kandra moviendo el atium, y a Vin —ahora Conservación— susurrando en el viento para guiar a Elend.',
			},
			'hoa-81': {
				title: 'Vigía en los Pozos',
				description:
					'Kelsier observa cómo se desarrolla la batalla final. Elend da su discurso a los Videntes y los conduce cargando contra el ejército koloss. Durante horas Elend quema una fortuna de atium —luego Kelsier lo ve arder con un brillo imposible, quemando duraluminio y atium juntos en un destello final de perspicacia divina. Elend clava su espada en el cuello de Marsh mientras el hacha lo alcanza en el pecho. Muere sonriendo. Entonces Vin ataca —Conservación golpeando a Ruina con una furia que ninguna Esquirla estaba destinada a sobrevivir. Tanto Ati como Vin mueren. Los poderes de Conservación y Ruina quedan liberados sobre el mundo.',
			},
			'hoa-82': {
				title: 'El Más Allá',
				description:
					'Kelsier considera tomar ambas Esquirlas él mismo. Entonces Elend llega al Reino Cognitivo —luego Vin. Se abrazan, reunidos al fin. Ati llega después y Kelsier le da un puñetazo. Juntos observan cómo Sazed extiende la mano y toma tanto Conservación como Ruina, los poderes que parecen pertenecerse mutuamente, y se convierte en Armonía. Sazed se ofrece a devolver a Vin, pero ella sabe que no funcionará. Desea seguir adelante con Elend. Vin agradece a Kelsier todo lo que ha hecho por ella, y sigue a Elend hacia el Más Allá.',
			},
			'hoa-83': {
				title: 'La elección del Superviviente',
				description:
					'El mundo es destruido y renacido. Durante el Catacendro, Kelsier ve los tres Reinos a la vez. Cuando termina, vuelve a estar atrapado en el Reino Cognitivo. Sazed (Armonía) lo visita y admite que no puede traer de vuelta a Vin y Elend del Más Allá. Kelsier le pide que cure a Spook y lo convierta en nacido de la bruma. Cuando Sazed dice que no hay manera de volver al Reino Físico, Kelsier decide que Armonía es un mentiroso terrible —y comienza a tramar.',
			},
			'hoa-83.2': {
				title: 'El plan del Superviviente',
				description:
					'Kelsier convence a Spook para experimentar con la hemalurgia —tanto para prolongar la vida de Spook como para encontrar una forma de que Kelsier regrese al Reino Físico. El Superviviente de Hathsin no tiene intención de seguir siendo una Sombra Cognitiva para siempre.',
			},
		},
		vin: {
			...enData.movements.vin,
			// ── El Imperio Final ───────────────────────────────────────────
			'tfe-1': {
				title: 'Huérfana callejera',
				description:
					'Vin es convocada ante su jefe de banda Camon, que la trata con rudeza. Ella usa inconscientemente su Suerte —una forma de aplacamiento alomántico— para calmarlo. Camon se hace pasar por lord Jedue, un noble desesperado por nuevos contratos, y se prepara para estafar al Ministerio del Acero. Vin usa su Suerte con el obligador prelán Laird para que no rechace las súplicas de Camon.',
			},
			'tfe-2': {
				title: 'La estafa al Ministerio',
				description:
					'Camon, como lord Jedue, lleva a Vin al Cantón de Finanzas para estafar al Ministerio. Vin usa su Suerte con el alto prelán, que entrega tres mil boxings a Camon. Kelsier y Dockson, sentados en la sala de espera, detectan los pulsos alománticos de Vin. Después, ven a un Inquisidor de Acero siguiendo al séquito de Camon.',
			},
			'tfe-4': {
				title: 'Reclutada',
				description:
					'Kelsier presenta su plan para derrocar el Imperio Final a la banda en la carpintería de Clubs. La banda acepta, salvo Clubs, que se marcha antes de regresar. Kelsier revela que Vin es una nacida de la bruma y les habla del Undécimo Metal, mostrándoselo.',
			},
			'tfe-7': {
				title: 'Entrenamiento de nacida de la bruma',
				description:
					'Kelsier saca a Vin a su primera noche de entrenamiento y le da una capa de brumas. Le enseña los ocho metales básicos —estaño, peltre, hierro, acero, zinc, latón, cobre y bronce— terminando la noche en las murallas de Luthadel.',
			},
			'tfe-8': {
				title: 'La finca Renoux',
				description:
					'Vin y Kelsier saltan las murallas de Luthadel hacia la noche, donde Vin se topa con un espectro de bruma por primera vez. En la carretera, Sazed espera con un carruaje y los lleva a Fellise. Por el camino, Kelsier ofrece a Vin los tres mil boxings y la opción de irse. Ella toma el dinero pero se queda para ver cómo acaba todo. En la finca de lord Renoux, éste propone que Vin interprete a lady Valette, hija de un primo favorito.',
			},
			'tfe-9': {
				title: 'Entrenando con Sazed',
				description:
					'Vin y Kelsier combaten en un entrenamiento en la finca Renoux. Después, Vin se corta el pelo y Sazed la examina sobre su tapadera noble, además de contarle el trelagismo, la quinta religión que le propone. Kelsier y Sazed hablan luego en privado sobre el progreso de Vin; Kelsier anuncia que asistirá a un baile en la Fortaleza Venture al final de la semana.',
			},
			'tfe-10': {
				title: 'Vuelta a la banda',
				description:
					'Vin regresa a Luthadel desde Fellise para aprender sobre los metales con los brumosos de la banda, empezando por Breeze, que le enseña a aplacar. Hammond llega y debate la moralidad de derrocar el Imperio Final mientras esperan que Kelsier dé un discurso.',
			},
			'tfe-10.2': {
				title: 'El mitin del almacén',
				description:
					'Vin asiste a un mitin secreto en el distrito de almacenes donde Kelsier predica la revolución ante trabajadores skaa, con Breeze y sus aplacadores y agitadores manipulando a la multitud. Después, Kelsier celebra una reunión de progreso en la tienda de Clubs. Vin y Lestibournes hablan sobre Marsh. La reunión termina cuando un soldado de Hammond informa de que el Ministerio del Acero ha descubierto la antigua guarida de Camon.',
			},
			'tfe-11': {
				title: 'La masacre de la guarida de Camon',
				description:
					'Vin y la banda investigan la guarida destruida, encontrando cadáveres por todas partes. Entre ellos, Vin ve a Ulef: alguien le ha arrancado la caja torácica con las manos desnudas. Sazed recita una oración de la religión cazzi a un lado. El cuerpo de Milev aparece atado a una silla, claramente torturado. Tras marcharse, Kelsier encuentra el cadáver de Camon colgado de un gancho clavado en su boca, muñecas y tobillos atados, el cuerpo torturado.',
			},
			'tfe-12': {
				title: 'Primer baile en la Fortaleza Venture',
				description:
					'Vin se dirige a su primer baile en la Fortaleza Venture, con Sazed al mando del carruaje. Kelsier aparece en el trayecto, le da consejos y vuelve a lanzarse a las brumas. Vin llega y es presentada como lady Valette Renoux. Durante la cena ve a su padre al otro lado de la sala —Reen se lo había señalado de niña—. Rechaza invitaciones a bailar de varios nobles y se retira a un balcón en la planta superior, donde mantiene su primera conversación con Elend Venture, lo que conmociona a Sazed al enterarse.',
			},
			'tfe-13': {
				title: 'Regreso a Fellise',
				description:
					'Sazed interroga a Vin sobre su interacción con Elend en la finca Renoux. La verdadera personalidad de Vin empieza a emerger: ni la tímida miembro de la banda ni lady Valette. Kelsier se entera de que el padre de Vin estuvo en el baile y se marcha de nuevo a las brumas.',
			},
			'tfe-14': {
				title: 'Dentro de Kredik Shaw',
				description:
					'Kelsier lleva a Vin a Kredik Shaw y se abren paso luchando hacia el edificio que el lord Legislador visita cada tres días. Vin mata por primera vez. Tres Inquisidores de Acero se ciernen sobre ellos. Para defenderse de los triángulos metálicos afilados que le Empujan, Vin agarra un libro encuadernado en cuero al azar. Quemando atium, logra escapar temporalmente antes de que un Inquisidor le claven un hacha de obsidiana en el costado. Vin escapa de Kredik Shaw aún con el libro, pero al perder el conocimiento algo distrae al Inquisidor perseguidor y la acoge en un abrazo protector —no era Kelsier—.',
			},
			'tfe-15': {
				title: 'Herida',
				description:
					'La banda discute la decisión de Kelsier de llevar a Vin a Kredik Shaw. Antes de poder salir a buscarla, Sazed llega cargándola. Le administran peltre para ayudarla a sanar. Sazed la opera, la recose, y Ham la lleva a una habitación a recuperarse. Kelsier y Dockson advierten el libro que trajo consigo; Sazed lo identifica como escrito en khlennio, la lengua anterior a la Ascensión de la patria del lord Legislador.',
			},
			'tfe-16': {
				title: 'Recuperación en la tienda de Clubs',
				description:
					'Vin despierta tras dos semanas de reposo en la tienda de Clubs. Spook ha estado velando y le cuenta cómo Kelsier le dio su apodo. Hablando con Dockson, Vin se da cuenta de que hay algo muy inusual en Sazed.',
			},
			'tfe-16.2': {
				title: 'Regreso a Fellise',
				description:
					'Tras unos días más de reposo, Vin regresa a la finca Renoux en Fellise. Habla con Sazed, que le explica qué son los Guardadores y revela que todos los criados terrisanos son eunucos.',
			},
			'tfe-17': {
				title: 'El jardín de la mansión Renoux',
				description:
					'Vin se lamenta de cuatro semanas de aburrida convalecencia en la finca Renoux. Miembros de la banda llegan para discutir novedades. Vin convence a Kelsier de dejarla asistir al próximo baile. Después, hablan sobre Mare, las motivaciones de Kelsier, y él le explica el Chasquido: el evento traumático que despierta los poderes alománticos.',
			},
			'tfe-18': {
				title: 'Baile en la Fortaleza Elariel',
				description:
					'Vin asiste a un baile en la Fortaleza Elariel con Sazed. Elend Venture se sienta a su mesa leyendo, como de costumbre, y le elogia el vestido dejándola boquiabierta. Baila con varios nobles y pregunta por Elend; se entera de lady Shan Elariel. Tras mucho bailar, Vin se ve obligada a reunirse con Shan. Durante la conversación, Vin advierte que Shan puede aplacar. Ve al terrisano de Shan curioseando los libros de Elend en su mesa y regresa; hojea un pequeño libro casi sedicioso. Elend vuelve, recoge sus libros y se marcha con dos amigos. Sazed los identifica como Jastes Lekal y un Hasting, lo cual sorprende, ya que Lekal y Hasting son rivales políticos de Venture. Al abandonar el baile, Vin presencia cómo un guardia de la ciudad degüella a un joven skaa de cocina entre las brumas.',
			},
			'tfe-19': {
				title: 'Regresando a Fellise',
				description:
					'Kelsier vuelve a la mansión Renoux por la Ruta de Pinchos y se reúne con Vin, Sazed y Renoux. Le da un sermón a Vin sobre los nobles, insistiendo en que no les importan los skaa y que debe mantenerse alejada de Elend Venture.',
			},
			'tfe-20': {
				title: 'Lecciones de buscadora',
				description:
					'Vin regresa de Luthadel y ve cajas de armas frente a la mansión Renoux, listas para enviar a la rebelión. Marsh llega poco después y le enseña a buscar —usar bronce para detectar a otros alomantes quemando metales— así como detalles adicionales sobre la alomancia en general.',
			},
			'tfe-22': {
				title: 'El diario',
				description:
					'Vin lee su copia del diario del lord Legislador en la finca Renoux cuando llega Spook. Le da un pañuelo; Sazed le explica después que así un joven caballero señala que desea cortejar seriamente a una dama. Mientras espera a Dockson, Vin habla con Sazed sobre el terrisano del diario; Sazed revela los secretos de la feruquimia y la formación de los Guardadores para preservar todo tras la pérdida de la religión terrisana. Vin luego habla con Dockson, que le cuenta cómo lord Devinshae se llevó a la mujer que amaba y la mató a la mañana siguiente, insistiendo en que todos los nobles son iguales.',
			},
			'tfe-23': {
				title: 'Baile en la Fortaleza Hasting',
				description:
					'Vin asiste al baile en la Fortaleza Hasting, contenta de que los esfuerzos de Kelsier por avivar tensiones funcionen. También se entera de que los Inquisidores persiguen más a ladrones skaa. Lady Shan le pide que registre los libros de Elend la próxima vez. Vin encuentra a Elend y le pregunta si se ha acostado con una skaa. Él confiesa que su padre le obligó a los trece años; la mujer fue asesinada después, pero nunca volvió a hacerlo. Elend le da un pañuelo, señalando su deseo de cortejarla. Tras marcharse con sus amigos, Vin los sigue con alomancia a una torre donde discuten las fallas del lord Legislador. Kelsier aparece de repente y desdeña las ideas del grupo como idealismo juvenil típico.',
			},
			'tfe-24': {
				title: 'Reunión de la banda',
				description:
					'Vin y Kelsier llegan a la tienda de Clubs donde la mayor parte de la banda está reunida. Kelsier discute el estado de la misión y Vin percibe cuánto ama su nueva vida, ya sin esconderse en las sombras. Kelsier, Spook, Ham y Clubs comparten una copa nocturna.',
			},
			'tfe-24.2': {
				title: 'La visita a la guarnición',
				description:
					'Vin se cambia a su ropa de pilluelo y sale con Ham a visitar la Guarnición de Luthadel para aprender sobre peltre. Ham le explica que muchos soldados son skaa corrientes que solo quieren ganarse la vida. Allí, un guardia llamado Sertes les informa de que la Guarnición se está movilizando: una rebelión skaa ha atacado la Guarnición de Holstep al norte.',
			},
			'tfe-25': {
				title: 'Noticias urgentes',
				description:
					'En la tienda de Clubs, Ham vuelve con la noticia de que la Guarnición de Luthadel marcha hacia Holstep. Kelsier hace que Vin trague cinco cuentas de peltre para correr rumbo al norte a avisar al ejército rebelde.',
			},
			'tfe-25.2': {
				title: 'La carrera de peltre',
				description:
					'Vin y Kelsier corren dieciséis horas sin parar quemando peltre en una desesperada carrera de peltre. Se topan con los restos del ejército rebelde, rodeado y masacrado por la Guarnición de Valtroux. Kelsier quiere luchar, pero Vin le convence de que no son invencibles. Se dirigen a las Cavernas de Arguois, donde encuentran 2.000 soldados vivos gracias a Mennis, que los mantuvo preparados para partir en cualquier momento.',
			},
			'tfe-26': {
				title: 'Recuperación',
				description:
					'Vin yace agotada en la cama de la tienda de Clubs. Les costó dos semanas regresar a Luthadel. Kelsier irrumpe y Breeze le echa la culpa por perseguir fama y gloria. Kelsier admite que perder el ejército rebelde es un revés, pero se niega a rendirse.',
			},
			'tfe-26.2': {
				title: 'Las ejecuciones',
				description:
					'Spook anuncia ejecuciones en la Plaza de la Fuente. La banda acude y soborna a alguien para llegar a la azotea. Vin identifica a su padre ante Kelsier: un obligador llamado Tevidian, lord Prelán y el obligador de más alto rango, incluso por encima de los Inquisidores. Contemplan cómo arrastran a mujeres y niños de un carro prisión y los ejecutan, la fuente corriendo roja de sangre. Kelsier dice: «Este es nuestro enemigo. Aquí no hay cuartel ni marcha atrás.»',
			},
			'tfe-27': {
				title: 'Planificando los siguientes movimientos',
				description:
					'La banda regresa a la tienda de Clubs. Kelsier, Vin y los demás —Dockson, Ham, Breeze, Spook— replanifican cómo avanzar e iniciar una guerra de casas entre la nobleza. Sazed llega con una carta de Marsh con instrucciones de dónde encontrarse.',
			},
			'tfe-27.2': {
				title: 'Reunión con Marsh',
				description:
					'Kelsier y Vin van a un edificio abandonado en los Recodos para reunirse con Marsh. Mientras esperan, Kelsier habla del oro, el noveno metal alomántico que permite ver una versión alternativa de tu pasado. Marsh llega con los tatuajes de un obligador de bajo rango del Cantón de Inquisición. Revela que el Ministerio coloca aplacadores en las regiones skaa bajo aplacamiento constante, escondidos por ahumadores. Marsh confirma también que los Inquisidores pueden morir de vejez.',
			},
			'tfe-28': {
				title: 'Baile en la Fortaleza Lekal',
				description:
					'Vin asiste a un baile en la Fortaleza Lekal y empieza a esparcir rumores para encender las Guerras de Casas. Chismea con lady Kliss; dice que la Casa Hasting traslada recursos a su plantación del Dominio Sur. Elend la sorprende diciéndole que quiere besarla, pero Vin insiste en que no la conoce realmente. Dan un paseo y Elend revela que la fortuna de Venture proviene íntegramente de extraer atium en los Pozos de Hathsin, confiándole el secreto por completo. Menciona que los Tekiel fueron asesinados por la Casa Hasting e intenta convencer a Valette de abandonar Luthadel.',
			},
			'tfe-29': {
				title: 'La última traducción',
				description:
					'Vin lee la última traducción del diario hecha por Sazed en la mansión Renoux y se decepciona al ver que no hay más. Sazed le explica la feruquimia con más detalle y ella intenta quemar una de sus mentes de peltre. Después, Kelsier se une a la banda en la finca de Renoux para estudiar un mapa detallado proporcionado por Marsh. Descubren que la banda de Theron fue atacada recientemente por el Ministerio, y Vin sospecha que los Inquisidores siguen tras su pista.',
			},
			'tfe-30': {
				title: 'El baile Venture',
				description:
					'Vin asiste al último baile de casas en la Fortaleza Venture con Sazed. Los asistentes cierran alianzas y lady Valette es considerada demasiado neutral. Lady Kliss se revela como informante e intenta chantajear a la Casa Renoux. A cambio de un collar de zafiro, Kliss cuenta a Vin que asesinos Elariel intentarán matar a Elend esa noche y que Straff ha reducido la guardia en torno a Elend. Mediante alomancia emocional, Vin obliga a Kliss a revelar todo el plan. Rompe una vidriera para escapar de la fortaleza. Fuera, se enfrenta a dos brutos, dos lanzamonedas y dos nacidos de la bruma —una de ellas es Shan Elariel—. Vin la engaña extinguiendo su atium antes y la mata.',
			},
			'tfe-31': {
				title: 'Después del duelo',
				description:
					'Vin irrumpe en la cocina de Clubs vendada y hecha jirones. Kelsier la regaña por salvar a Elend, pero Vin le grita que skaa y nobles no son diferentes: Elend es un buen hombre. Luego, en la azotea, Vin cuenta a Kelsier que la Casa Venture administra los Pozos y comparte su teoría de que los Inquisidores ven a través de las nubes de cobre. Kelsier pone a prueba la teoría y la confirma: un descubrimiento importante.',
			},
			'tfe-32': {
				title: 'Vigilancia en la azotea',
				description:
					'Vin y Spook hacen vigilancia desde la azotea de la tienda de Clubs. Spook le enseña trucos con el estaño: no es solo potenciar los sentidos, sino filtrar las distracciones. Más tarde, Kelsier y Vin encuentran el cuerpo de Marsh, desangrado, una cáscara sin vida. De vuelta, descubren una carta de Marsh explicando que los Inquisidores probablemente le encontrarían.',
			},
			'tfe-33': {
				title: 'El refugio de emergencia',
				description:
					'La banda se traslada a un húmedo sótano de reserva cerca de la tienda de Clubs, apenas tres habitaciones. Kelsier anuncia que ha destruido todo el atium de los Pozos de Hathsin. Spook monta guardia como vigía de estaño.',
			},
			'tfe-33.2': {
				title: 'La pelea con el Inquisidor',
				description:
					'Todos siguen a Kelsier a la Plaza de la Fuente. Ven a Spook y lord Renoux en uno de los carros de ejecución. Kelsier lucha contra un Inquisidor en la plaza. Elend ve a los sirvientes Renoux enjaulados y grita buscando a Valette, pero no la encuentra.',
			},
			'tfe-34': {
				title: 'La muerte del Superviviente',
				description:
					'Kelsier lucha contra el Inquisidor en un combate total en la Plaza de la Fuente, ambos quemando atium. Vin observa desde arriba: Kelsier es un auténtico maestro de Empujar y Tirar, moviendo objetos metálicos por el aire con pericia. Mata al Inquisidor y los skaa empiezan a corear «El Superviviente de Hathsin». El lord Legislador llega en un carruaje negro. Uno de los brutos de Ham le clava una lanza —sigue caminando—. Dos lanzas —igual—. El lord Legislador abofetea a Kelsier, arranca una lanza de su propio cuerpo y se la hunde. Vin salta desde arriba y sostiene a Kelsier mientras muere.',
			},
			'tfe-35': {
				title: 'El legado del Superviviente',
				description:
					'Vin regresa al refugio de emergencia. Está furiosa porque Kelsier no fue sincero: había planeado morir y abandonarla. Sazed ofrece palabras de consuelo. Fuera, los skaa hablan del Señor de las Brumas. En un almacén cercano, la banda ve al kandra con la forma de Kelsier. Kelsier dejó cartas con instrucciones para tomar la ciudad. La carta de Vin dice que nunca descifró el Undécimo Metal. Decide averiguar qué esconde el lord Legislador.',
			},
			'tfe-36': {
				title: 'Dentro de Kredik Shaw',
				description:
					'Vin camina en silencio hacia Kredik Shaw, animando a los guardias exteriores a unirse a la rebelión. Dentro, mata a dos Inquisidores que custodian una entrada interior, descubriendo que el polvo de peltre altera su visión. En la cámara más allá hay un anciano sentado en una silla. Un Inquisidor agarra a Vin del cuello: el anciano habla y los Inquisidores se dirigen a él como lord Legislador. Pero Vin está confusa: el lord Legislador de la Plaza de la Fuente era un hombre joven. Quema el Undécimo Metal y ve dos formas fantasmales junto al anciano, una de las cuales se parece al joven lord Legislador pero ligeramente mayor.',
			},
			'tfe-37': {
				title: 'Rescate y revelación',
				description:
					'Los Inquisidores obligan a Vin a quemar un metal que anula todos los demás. La llevan ante el lord Legislador en su trono elevado —la versión joven, el hombre que mató a Kelsier—. La interrogan sobre su padre. Tevidian, padre de Vin y obligador de más alto rango, es ejecutado por los Inquisidores cuando el lord Legislador descubre la verdad. Vin descubre que Reen nunca la delató: soportó la tortura y dijo a los Inquisidores que ella había muerto de hambre hacía tiempo. Sazed es traído a su celda y libera fuerza feruquímica almacenada para reventar la puerta. Elend y seis soldados irrumpen. Vin encuentra su capa y un vial de metales, mata al guardia restante. El secreto se descubre: Elend sabe que Vin es una nacida de la bruma. Ella le agarra la cabeza y le besa, luego se vuelve para ir a matar al lord Legislador.',
			},
			'tfe-38': {
				title: 'Asesina del lord Legislador',
				description:
					'Vin salta entre las agujas de Kredik Shaw hasta la cima. El Inquisidor Kar la agarra del cuello, pero un segundo Inquisidor se acerca y arranca un clavo metálico del cuello de Kar, matándolo al instante. Es Marsh, vivo, con once clavos en el cuerpo, que ha matado a todos los demás Inquisidores. El verdadero nombre del lord Legislador es Rashek: asesinó al Héroe de las Eras y ocupó su lugar. Vin tira de las pulseras del lord Legislador y caen. Sin su juventud feruquímica se convierte en un anciano débil. Sazed aparece con un vial de metales. Vin le hunde una lanza directamente en el corazón. Mil años de opresión terminan.',
			},
			'tfe-39': {
				title: 'Una nueva era',
				description:
					'Sazed, Marsh y Vin se alzan sobre un edificio junto al barrio skaa. Sazed explica que el lord Legislador era a la vez feruquimista y alomante: las pulseras almacenaban su juventud. Marsh describe su supervivencia y transformación: once clavos metálicos, dos por los ojos, ocho en el pecho, uno en la espalda uniéndolos. El proceso para crear un Inquisidor es cruento. También habla de los kandra, criaturas evolucionadas de los espectros de bruma que ahora ven a Vin como su ama.',
			},
			'tfe-39.2': {
				title: 'Vin y Elend',
				description:
					'Vin observa en secreto a Elend desde las brumas fuera de la Fortaleza Venture. Su reunión con líderes skaa y nobles fue bien: todos le han aceptado como rey tras un discurso formidable que ni Sazed pudo memorizar por completo sin sus metales. Elend escribe el nuevo código de leyes del reino. Vin casi decide no acudir, pero recuerda que Reen nunca la delató a los Inquisidores: hay personas que la aman de verdad. Con ese recuerdo corre hacia Elend y se abrazan.',
			},
			// ── El Pozo de la Ascensión ────────────────────────────────────
			'woa-1': {
				title: 'Guardiana de la ciudad',
				description:
					'Vin patrulla las murallas de Luthadel cada noche, vigilando amenazas mientras tres ejércitos convergen lentamente sobre la ciudad recién liberada.',
			},
			'woa-2': {
				title: 'Emboscada en la bruma',
				description:
					'Vin es emboscada por ocho alomantes al sur de la Fortaleza Venture, cerca de Kredik Shaw. Un misterioso nacido de la bruma —el Vigía— interviene y la ayuda a matarlos o dispersarlos. Sospecha que los asesinos fueron enviados por uno de los ejércitos sitiadores.',
			},
			'woa-3': {
				title: 'El espíritu de la bruma',
				description:
					'Vin observa la Fortaleza Venture desde una azotea y se encuentra con el espíritu de la bruma —una figura translúcida que señala hacia algo invisible. Regresa al estudio de Elend, donde Ham llega con la información de que los asesinos probablemente fueron enviados por el rey Cett.',
			},
			'woa-5': {
				title: 'OreSeur renacido',
				description:
					'Vin camina por el mercado de la calle Kenton y compra un perro lobo, que le da a OreSeur el kandra como su nuevo cuerpo. Descubre un nuevo metal alomántico —duraluminio— y regresa a la Fortaleza Venture para probar su poder.',
			},
			'woa-6': {
				title: 'Entrenando en el patio',
				description:
					'Vin entrena con Ham en el patio de la Fortaleza Venture, probando sus habilidades de combate mientras OreSeur observa en su nueva forma de perro lobo. Spook regresa a la banda de su misión de exploración.',
			},
			'woa-8': {
				title: 'Persiguiendo al Vigía',
				description:
					'Vin patrulla Luthadel y persigue al Vigía —el misterioso nacido de la bruma— por los tejados de la ciudad. La persecución termina cerca de la Plaza de la Fuente, donde experimenta quemando duraluminio y descubre su devastador efecto potenciador.',
			},
			'woa-10': {
				title: 'Protegiendo la Asamblea',
				description:
					'Vin y Ham protegen a Elend mientras se dirige a la Asamblea. Una desconocida terrisana está entre el público. Durante la reunión, llegan noticias de que un segundo ejército —las fuerzas del rey Cett— ha aparecido fuera de Luthadel.',
			},
			'woa-11': {
				title: 'Salvando a Breeze',
				description:
					'Vin se une a Elend y Clubs en la muralla para vigilar al ejército de Cett. Cuando Breeze está en peligro abajo, Vin usa un Empuje de acero potenciado con duraluminio para salvarlo —lanzando una moneda con fuerza aterradora. De vuelta en la Fortaleza Venture, la banda descubre huesos de kandra, despertando temores de un impostor.',
			},
			'woa-13': {
				title: 'El espíritu regresa',
				description:
					'Vin nota que las brumas llegan más temprano cada noche y busca al espíritu de la bruma, encontrándolo en un bloque de apartamentos abandonado. Cae de una ventana durante el encuentro. Más tarde, Elend reúne a la banda para un consejo de guerra, y Tindwyl solicita una audiencia privada con él.',
			},
			'woa-14': {
				title: 'Llega Tindwyl',
				description:
					'Tindwyl comienza a instruir a Elend en el arte de reinar en la Fortaleza Venture. Vin desconfía de la enérgica terrisana pero observa cómo Elend empieza lentamente a cambiar bajo su guía.',
			},
			'woa-16': {
				title: 'La búsqueda del diario',
				description:
					'Vin desmonta el diario de Alendi en la Fortaleza Venture, buscando referencias al espíritu de la bruma y la Profundidad. Cree que la criatura que la sigue es la misma que siguió a Alendi siglos atrás.',
			},
			'woa-17': {
				title: 'Duelo con el Vigía',
				description:
					'Tras conocer al mensajero de Straff —Zane, el Vigía— Vin patrulla con OreSeur. Se enfrenta a Zane y terminan en un feroz duelo de empuje de acero en la Fortaleza Hasting. Zane le dice que los nacidos de la bruma pertenecen a las brumas, no a los nobles.',
			},
			'woa-20': {
				title: 'Consejo de guerra',
				description:
					'Vin observa mientras Elend, Dockson, Hammond, Clubs y Breeze discuten el plan para parlamentar con Straff. Usa bronce para eliminar a Breeze como sospechoso de ser el kandra impostor. Allrianne, la hija de lord Cett, llega buscando asilo y a Breeze.',
			},
			'woa-21': {
				title: 'La llegada de Allrianne',
				description:
					'Allrianne Cett llega al palacio y abraza a Breeze, sorprendiendo a todos. Elend le ofrece hospitalidad. Dockson propone usar a Allrianne como moneda de cambio contra lord Cett.',
			},
			'woa-22': {
				title: 'Tensiones políticas',
				description:
					'Mientras el asedio se estrecha, Vin observa a Elend luchar con la Asamblea y las exigencias del gobierno mientras ella caza a Zane por las brumas.',
			},
			'woa-24': {
				title: 'Vigía nocturna',
				description:
					'Vin monta guardia fuera del balcón de Elend y quema bronce, detectando al espíritu de la bruma y una fuente lejana de poder alomántico. Zane la encuentra en la Fortaleza Venture y la desafía, preguntándole qué haría sin repercusiones. Ella responde que mataría a los líderes de los ejércitos enemigos.',
			},
			'woa-25': {
				title: 'Compras y escaramuza',
				description:
					'Tindwyl lleva a Vin de compras por la calle Kenton junto con Allrianne, Spook y OreSeur. Fuera de la tienda, Vin habla con miembros de la Iglesia del Superviviente. Suenan tambores de alarma. El ejército de Straff lanza un ataque fingido contra las murallas y Vin se apresura a ayudar en la defensa.',
			},
			'woa-26': {
				title: 'Parlamento con Straff',
				description:
					'Vin acompaña a Elend al campamento de guerra de Straff Venture al norte de la ciudad, donde demuestra su aterrador poder para intimidar al aspirante a conquistador.',
			},
			'woa-27': {
				title: 'El farol',
				description:
					'Mientras Vin escucha desde fuera de la tienda, Straff amenaza con matar a Elend durante la negociación. Zane aparece. El farol de Vin y Elend tiene éxito. Straff los deja marchar. De camino a Luthadel, Elend recibe una nota: la Asamblea ha votado una moción de censura y ya no es rey.',
			},
			'woa-28': {
				title: 'Regreso del parlamento',
				description:
					'Tras el tenso encuentro en el campamento de Straff, Vin regresa a la Fortaleza Venture, atormentada por los susurros de Zane y sus crecientes dudas sobre su papel.',
			},
			'woa-29': {
				title: 'Insomnio y perspicacia',
				description:
					'Vin y OreSeur se sientan en la Fortaleza Hasting en las brumas nocturnas. Discuten el carácter de Zane y el creciente insomnio de Vin. OreSeur dice que no quiere cambiar de cuerpo a menudo. Vin tiene un destello de perspicacia sobre la verdadera naturaleza de la Profundidad.',
			},
			'woa-30': {
				title: 'La teoría de la Profundidad',
				description:
					'Vin entra en la Fortaleza Venture por la ventana de Sazed y lee su transcripción de los calcos del Conventículo. Propone que las brumas son la Profundidad —que las brumas diurnas permanentes podrían causar hambruna. Le dice a Sazed que ha visto a la misma criatura que siguió al Héroe de las Eras.',
			},
			'woa-31': {
				title: 'La nominación de Penrod',
				description:
					'Vin acompaña a Elend y a toda la banda a la Asamblea. Elend nomina a lord Penrod como canciller y se dirige a la Asamblea, invocando el legado de Kelsier a través de Vin como elemento disuasorio contra Straff. Se abren las nominaciones para un nuevo rey: Penrod, Elend y lord Cett, que aparece entre la multitud.',
			},
			'woa-33': {
				title: 'Secretos de los kandra',
				description:
					'Vin se pregunta si ella es la verdadera Héroe de las Eras y discute las vagas profecías terrisanas con OreSeur. Él revela sin querer que los kandra tienen su propia religión anterior a la Ascensión del lord Legislador, hablando de profecías sobre los humanos siendo de Ruina y los kandra de Conservación. Vin investiga a Dockson en la biblioteca del palacio para comprobar si es el kandra impostor, y sospecha del capitán Demoux.',
			},
			'woa-34': {
				title: 'Zane en el tejado',
				description:
					'Vin encuentra a Elend y la banda investigando la estrategia de la Asamblea en la biblioteca de la Fortaleza Venture. Menciona el pozo envenenado pero Elend ya lo sabe. Oyendo un ruido fuera, investiga y encuentra a Zane en el tejado. Él la ataca, revelando que quema atium. Se detiene y le dice que Straff quiere que la mate, que es medio hermano de Elend, y que los koloss están a un día de Luthadel.',
			},
			'woa-35': {
				title: 'Cena con Cett',
				description:
					'Vin se prueba su nuevo vestido de nacida de la bruma hecho a medida. Ella y Elend van a la Fortaleza Hasting a cenar con lord Cett. Durante la cena, discuten la marcha de Breeze y Allrianne del campamento de Cett. Cett expone sus planes para Luthadel y ofrece comida a cambio del alijo de atium, pero Elend dice que no se ha encontrado. Vin se pregunta por qué Cett no oculta a sus alomantes.',
			},
			'woa-36': {
				title: 'La Iglesia del Superviviente',
				description:
					'Vin observa a Allrianne usando alomancia para agitar las emociones de Breeze en la Fortaleza Venture, confirmando que Clubs no es un kandra ya que su nube de cobre lo protege. Sigue al capitán Demoux por el patio del palacio y descubre que lidera en secreto la Iglesia del Superviviente —predicando que Vin restaurará el mundo e instando a los skaa a apoyar a Elend. Lo confronta pero promete guardar su secreto.',
			},
			'woa-38': {
				title: 'Elección y asesinato',
				description:
					'Vin y Elend asisten a la Asamblea para la elección del rey. Elend revela que se ha unido a la Iglesia del Superviviente. Vin nota figuras sospechosas y un hombre ataca a Elend —ella lucha contra seis alomantes enviados por Straff, gravemente herida pero matando a todos los atacantes con la ayuda de OreSeur. Cae inconsciente al agotarse su peltre. La Asamblea se reúne de nuevo en la mansión de Penrod y elige a Penrod rey.',
			},
			'woa-40': {
				title: 'Recuperación',
				description:
					'Vin despierta en una cama de hospital en la Fortaleza Venture con Elend a su lado. Él le dice que Penrod es ahora rey y se estremece cuando ella lo toca, atormentado por sus brutales muertes. Zane la visita mientras duerme, afirmando que los asesinos eran de Cett y que Penrod hizo un trato con Straff. Le deja una pepita de atium. OreSeur regresa con un nuevo cuerpo de perro, y Vin descubre que puede controlar a los kandra con latón potenciado con duraluminio.',
			},
			'woa-43': {
				title: 'Asalto a Cett',
				description:
					'Zane le dice a Vin que Demoux está traicionando a Elend a instancias de Cett y sugiere que ataquen a las fuerzas de Cett. Vin y Zane lanzan un asalto devastador sobre la Fortaleza Hasting, matando guardias, soldados y mataneblinas. Llegan hasta Cett y su hijo, pero Vin pide clemencia. Zane dice que ella todavía está controlada y se marcha. El ejército de Cett se retira de Luthadel.',
			},
			'woa-44': {
				title: 'La guarida de Camon',
				description:
					'Tras expulsar al ejército de Cett de la ciudad, Vin se esconde en la antigua guarida de Camon —el edificio abandonado donde comenzó su vida como ladrona. Habla de los soldados que mató y de cómo consiguió su pendiente. Le dice a Elend que debe abandonar Luthadel e ir al norte, a Terris, dando a OreSeur la cuenta de atium para que la guarde.',
			},
			'woa-45': {
				title: 'Consejo sobre el amor',
				description:
					'Vin visita a Sazed para pedirle consejo sobre el amor —si debería estar con Elend o con alguien más parecido a ella. Sazed cree que están hechos el uno para el otro y resuelve asegurarse de que dejen Luthadel antes de que caiga.',
			},
			'woa-46': {
				title: 'La cámara del lord Legislador',
				description:
					'Vin va a la cámara secreta dentro de Kredik Shaw donde el lord Legislador pasaba tiempo a solas. No está segura de por qué ha venido, pero siente el lejano latido del Pozo de la Ascensión restaurando su poder. Se marcha, inquieta.',
			},
			'woa-47': {
				title: 'Duelo con Zane',
				description:
					'Zane intenta convencer a Vin de que abandone Luthadel con él, pero ella elige la confianza de Elend sobre la libertad. Enfurecido, Zane ataca. OreSeur ignora las órdenes de Vin —Zane revela que el kandra es TenSoon, el espía de su verdadero amo. TenSoon, que ha llegado a apreciar a Vin, grita sobre lo que ella sabe de los kandra —insinuando su propia debilidad. Vin usa latón-duraluminio para tomar el control de TenSoon, toma la cuenta de atium, y explota la dependencia de Zane del atium para fingir más allá de su previsión, apuñalándolo en el cuello y matándolo.',
			},
			'woa-49': {
				title: 'Escape por la Puerta de Estaño',
				description:
					'Vin, Elend y Spook abandonan Luthadel por la Puerta de Estaño, diciendo a los guardias que cabalgan en busca de ayuda y volverán. Allrianne convence para unirse al grupo. Fuera de las murallas, un grupo de arqueros de Straff intenta interceptarlos, pero Vin los combate en las brumas antes de que Allrianne se separe para encontrar al ejército de su padre.',
			},
			'woa-50': {
				title: 'Levantando el campamento',
				description:
					'A un día al norte de Luthadel, Vin, Elend y Spook levantan el campamento, confiados en haber eludido a los exploradores de Straff. Spook siente algo siguiéndolos por las brumas, y Vin lo reconoce como el misterioso espíritu de la bruma que la ha acechado durante meses.',
			},
			'woa-51': {
				title: 'Jastes y la verdad',
				description:
					'Vin despierta y encuentra al espíritu de la bruma flotando sobre Elend y lo apuñala, golpeando algo antes de que desaparezca. Spook informa de cinco hombres siguiéndolos —Jastes Lekal, que abandonó a los koloss. Elend ejecuta a su viejo amigo por dejar a las bestias sin líder. Spook revela que Sazed los engañó para que se fueran, y Vin se da cuenta de que el Pozo de la Ascensión está en Luthadel. Dan la vuelta para salvar a sus amigos.',
			},
			'woa-52': {
				title: 'La carrera de peltre',
				description:
					'Vin corre de vuelta hacia Luthadel sola en una desesperada carrera de peltre, quemando sus metales al límite y aterrorizada de llegar demasiado tarde mientras los koloss asaltan la ciudad.',
			},
			'woa-53': {
				title: 'Vin salva a Sazed',
				description:
					'Vin llega a Luthadel tras recoger herraduras en un pueblo periférico para una improvisada ruta de pinchos de nacida de la bruma. Llega justo cuando Sazed está a punto de ser abrumado en la puerta, y los skaa que observan comienzan a corear mientras ella destroza a los koloss circundantes con una sola explosión alomántica.',
			},
			'woa-54': {
				title: 'Controlando a los koloss',
				description:
					'Casi sin peltre e incapaz de derrotar a los koloss sola, Vin hace un último intento de empuje con duraluminio y descubre que puede tomar el control de las criaturas —la debilidad que el lord Legislador incorporó en ellas. Lleva a sus koloss controlados a la Fortaleza Hasting, ordena a lord Penrod que envíe soldados a proteger a los ciudadanos, y toma peltre fresco de Hammond antes de dirigirse a la Fortaleza Venture.',
			},
			'woa-55': {
				title: 'Derrotando a Straff',
				description:
					'Vin sale disparada de la ciudad con un empuje de acero con duraluminio, derribando a Straff y su caballo antes de abatir a sus oficiales. Con el ejército de Cett uniéndose a la batalla, obliga a Penrod, Cett y al general Janarle a aceptar a Elend como Emperador, luego deja a Sazed al mando y se retira a descansar.',
			},
			'woa-57': {
				title: 'La puerta secreta',
				description:
					'Vin le dice a Sazed que el Pozo de la Ascensión está en Luthadel y que puede sentirlo tirando de ella. Tras el regreso de Elend y ser nombrado Emperador, lo guía a él, a Hammond y a Spook a Kredik Shaw, donde abre una puerta alomántica oculta con un tirón de duraluminio y comienza el descenso.',
			},
			'woa-58': {
				title: 'El Pozo descubierto',
				description:
					'Vin, Elend, Hammond y Spook descienden a una vasta caverna bajo Kredik Shaw y encuentran un estanque blanco resplandeciente —el Pozo de la Ascensión, pulsando a pleno poder. Mientras Vin duda si podrá usar el poder sabiamente, el espíritu de la bruma aparece y apuñala a Elend en el vientre, hiriéndolo de muerte.',
			},
			'woa-59': {
				title: 'El poder liberado',
				description:
					'Con Elend muriendo a su lado, Vin entra en el estanque resplandeciente y toma el inmenso poder del Pozo. Una Voz le dice que las brumas asesinas son la Profundidad regresada. Engañada por la manipulación de las profecías por parte de Ruina, creyendo que debe renunciar al poder para salvar el mundo, lo libera —y una voz triunfante proclama: «¡Soy LIBRE!»',
			},
			'woa-60': {
				title: 'Sobre la muralla',
				description:
					'Vin está de pie con el recién restaurado Elend sobre la muralla de Luthadel. Confiesa que al liberar el poder del Pozo cometió un error catastrófico —liberando a la criatura allí aprisionada, algo que podría ser peor que todo lo que el lord Legislador hizo jamás. Elend la tranquiliza diciéndole que, pase lo que pase, sobrevivirán juntos.',
			},
			// ── El Héroe de las Eras ────────────────────────────────────────
			'hoa-3': {
				title: 'El primer alijo',
				description:
					'Vin abre la caverna de almacenamiento de Vetitan, encontrando comida, suministros y una placa de metal con un mensaje críptico del lord Legislador sobre el peligro que aprisionó y la ubicación del siguiente alijo en Ciudad Fadrex.',
			},
			'hoa-8': {
				title: 'La enfermedad de la bruma',
				description:
					'Vin observa cómo las brumas atacan a refugiados de Vetitan, enfermando a un número predecible. Fatren no lo cree, pero Elend sostiene que la exposición es necesaria para la inmunización. Vin interroga a su koloss Human sobre la reproducción. Ella y Elend guían a los refugiados a un canal donde los soldados de Demoux están acampados.',
			},
			'hoa-10': {
				title: 'El ejército reunido',
				description:
					'Vin está con el ejército de Elend al suroeste de Luthadel en marcha hacia Fadrex cuando Sazed, Breeze, Goradel y Allrianne los alcanzan. Sazed comparte su crisis de fe con Vin, quien le da el dibujo de la flor de Mare como consuelo.',
			},
			'hoa-12': {
				title: 'El consejo de guerra',
				description:
					'Vin y Elend discuten cómo la banda de Kelsier está perdiendo la esperanza. Elend convoca un consejo con Vin, Cett, Breeze, Allrianne, Hammond, Demoux y Sazed. Debaten sobre las brumas invasoras, el cultivo de alimentos y los planes para capturar los alijos en Urteau y Fadrex. Elend considera exponer a su ejército a las brumas a pesar de los riesgos y pregunta a la banda: «¿Qué haría Kelsier?» para motivarlos.',
			},
			'hoa-15': {
				title: 'Enemiga en la bruma',
				description:
					'Vin se pregunta por qué las brumas se sienten diferentes —ya no se siente protegida por ellas. Mientras los soldados salen de sus tiendas para la marcha del día, Elend y Hammond debaten si exponer a las tropas. Elend le dice a Vin que Human está causando problemas. El koloss dice que las brumas lo odian, y que también odian a Vin. Para su sorpresa, ella está de acuerdo —las brumas son ahora su enemiga.',
			},
			'hoa-21': {
				title: 'El dieciséis por ciento',
				description:
					'Vin lee el diario de Alendi, reflexionando sobre cómo luchar contra Ruina ya que no puede leer los pensamientos —se da cuenta de que es poderoso pero no omnipotente, sujeto a consecuencias. Elend teme estar volviéndose despiadado como el lord Legislador por exponer a los soldados a las brumas. Noorden presenta datos de la enfermedad de la bruma; Vin le hace recalcular usando solo soldados no expuestos previamente. El resultado: exactamente el dieciséis por ciento. Cuando cuatro muestras distintas producen la misma proporción sin margen de error, Elend concede que el patrón es demasiado preciso para ser coincidencia.',
			},
			'hoa-25': {
				title: 'Partiendo a explorar',
				description:
					'El ejército de Elend llega a Ciudad Fadrex. Vin observa las formaciones rocosas naturales y la entrada como un cañón que dificultarán la conquista. Durante el consejo de estrategia, Elend se ofrece a acompañarla en la misión de exploración —ella le dice que no es lo bastante bueno. Cett proporciona una lista de informantes, y Vin parte al anochecer para infiltrarse sola en la ciudad.',
			},
			'hoa-27': {
				title: 'El informante Slowswift',
				description:
					'Vin se infiltra en Fadrex y visita a Slowswift, un informante recomendado por Cett. Él alaba el gobierno de Yomen —estabilidad, familiaridad— y revela que se celebrará un baile esa noche a pesar del asedio, pero se niega a ayudar al precio de su alma. Vin replica que la ceniza y las brumas asesinas acabarán con cualquier estabilidad. Slowswift cede, compartiendo las debilidades de Yomen antes de que ella parta.',
			},
			'hoa-27.2': {
				title: 'Explorando el Cantón',
				description:
					'Vin busca a un segundo informante —un mendigo conocido por tararear para sí mismo— pero un recelo instintivo la aleja. Explora el Cantón de Recursos, el palacio de Yomen, y percibe pulsos alománticos que indican un posible nacido de la bruma —pero desaparecen antes de que pueda localizar la fuente. Regresa al ejército con la noticia de que se celebrará un baile esa noche.',
			},
			'hoa-28': {
				title: 'Confianza y un plan audaz',
				description:
					'Vin regresa de su misión de exploración y le dice a Elend que ha percibido al Espíritu de la Bruma dentro de Fadrex —una fuerza más débil que se opone a Ruina, sin relación con la enfermedad de la bruma. Habla de su destino como Héroe de las Eras, pero Elend advierte que las profecías pueden haber sido alteradas por su enemigo. Vin le insta a investigar discretamente la anomalía estadística del dieciséis por ciento. Elend jura usar el ejército solo como último recurso. Vin propone una idea más audaz: deberían colarse en uno de los bailes de Yomen y enfrentarse a él cara a cara.',
			},
			'hoa-30': {
				title: 'Lady Patresen',
				description:
					'Elend y Vin viajan al baile en la Fortaleza Orielle —el plan que pusieron en marcha ahora es real. Son anunciados y se separan para socializar. Vin desafía a lady Patresen, jugando con los miedos de sus seguidores y advirtiendo que las cosas no irán bien para quien se les oponga cuando tomen la ciudad. Después de que Vin abandona la mesa, los aduladores de Patresen la siguen, ansiosos por presentarla a los demás asistentes.',
			},
			'hoa-37': {
				title: 'La creación de los koloss',
				description:
					'Vin repele a los asaltantes de Yomen —usando piquetas de tienda como proyectiles alománticos— y persigue a un misterioso nacido de la bruma hasta Fadrex, pero lo pierde en las calles oscuras. Regresa y descubre que la incursión era una distracción: la mitad de su ejército koloss yace muerto. Elend le transfiere el control de mil supervivientes. En el campamento koloss, Human pide ayuda para crear más koloss. Ella lo sigue y observa horrorizada cómo desuella a un koloss muerto, extrae cuatro clavos del cadáver y se acerca a un soldado inconsciente en la tienda de enfermos. Vin lo detiene —pero la horrible verdad queda grabada en su mente. Los koloss están hechos de humanos.',
			},
			'hoa-40': {
				title: 'El tercer arte',
				description:
					'Vin observa cómo Elend, Hammond, Cett, Noorden y Demoux reconstruyen la verdad: la hemalurgia —el tercer arte metálico— usa clavos para robar poderes alománticos y feruquímicos. Se da cuenta de que Ruina controla a los koloss e Inquisidores mediante la misma debilidad de alomancia emocional que ella explota. Demoux informa que los soldados caídos de la bruma están siendo marginados, y Elend ordena formar una nueva división con ellos. Conrad llega de Luthadel con noticias de que Penrod suplica ayuda en medio de disturbios y saqueos. Vin suplica ayuda a las brumas como una vez la ayudaron contra el lord Legislador —pero solo encuentra silencio.',
			},
			'hoa-43': {
				title: 'El segundo baile',
				description:
					'Vin y Elend viajan al segundo baile en el Cantón de Recursos, ignorando al misterioso nacido de la bruma que los sigue. En la fiesta, Vin detecta a un aplacador y un ojo de estaño siguiéndola. Encuentra a Slowswift y pide dos hombres que la ayuden. Esperando en el patio la distracción preestablecida de Elend, ataca en el momento en que llega —usando un empuje de latón con duraluminio para abrumar a los espías, luego dejándolos inconscientes. Los hombres de Slowswift esconden los cuerpos. Vin se cambia a ropa más sigilosa y se desliza hacia el interior del edificio para encontrar el alijo.',
			},
			'hoa-44': {
				title: 'Dentro del alijo',
				description:
					'Vin desciende bajo tierra, usando alomancia emocional para distraer a los guardias mientras navega por los pasillos bajo el Cantón de Recursos. Llega al alijo de almacenamiento —pero la puerta de piedra se sella tras ella. Ha sido saboteada: todo el metal ha sido retirado para que no pueda empujarla. Está atrapada en la oscuridad. Unos pasos se acercan, y percibe a un alomante en la caverna con ella. Ruina está ante ella, llevando el rostro de su hermano Reen.',
			},
			'hoa-45': {
				title: 'Ruina revelado',
				description:
					'Vin se enfrenta a la criatura que lleva el rostro de Reen. Golpea con una ráfaga de zinc con duraluminio —no pasa nada, demostrando que no es un kandra. Ataca, pero él solo retrocede, negándose a luchar. Las luces se apagan y sus golpes solo encuentran aire. En la oscuridad, se concentra en sus pulsos alománticos y los reconoce del Pozo de la Ascensión. Esto es Ruina. Él le dice que todas las cosas deben terminar y que no es su enemigo. Luego el horror más profundo: afirma que siempre ha estado con ella —incluso cuando no podía verlo— desde que era una niña.',
			},
			'hoa-48': {
				title: 'Las últimas palabras del lord Legislador',
				description:
					'Atrapada en la oscuridad absoluta, Vin palpa el alijo de almacenamiento, recomponiendo todo lo que sabe sobre Ruina. Sus dedos encuentran la placa de metal y la lee al tacto: la confesión final del lord Legislador. Ruina habló en su mente. Intentó ser un buen gobernante. Escondió bien el cuerpo de Ruina. Y le importaba —a pesar de saber que si alguien leía estas palabras, él ya estaría muerto. Sobresaltada, oye cómo se abre la puerta de piedra.',
			},
			'hoa-50': {
				title: 'Vino drogado',
				description:
					'La puerta de piedra se abre. Vin usa su último vial alomántico y sale al pasillo pasando junto a varios guardias, luego intenta un desesperado Empuje de acero a través de la trampilla del techo —pero está lastrada desde arriba. El primer hombre que atraviesa la puerta es Telden Hasting, el viejo amigo de Elend de los bailes, ahora vestido como informante noble de Yomen. Le ofrece la libertad a cambio de beber vino drogado. Vin intenta farolear con amenazas de lo que Elend hará, pero Telden no se lo cree. Bebe el vino y se desploma inconsciente.',
			},
			'hoa-54': {
				title: 'Prisionera de Yomen',
				description:
					'Vin despierta encadenada sin metales que quemar. Yomen ha tomado todas las precauciones —se enfrenta a la ejecución por el asesinato del lord Legislador, aunque le permitirá hablar en su propia defensa. Le devuelve su pendiente: una simple pieza de plata y bronce que considera inútil para un alomante. Vin se lo vuelve a poner, inquieta. Un soldado de Elend es traído para verificar que está viva y no es un kandra impostor. Ruina le susurra que mate a Yomen —pero ella se resiste.',
			},
			'hoa-57': {
				title: 'La naturaleza de Ruina',
				description:
					'Ruina le habla a Vin en su celda, enseñándole sobre la entropía —que todas las cosas deben terminar, incluido él mismo. Su influencia, se da cuenta, funciona como la alomancia emocional: no es control mental, sino un susurro que amplifica lo que ya existe. Ruina le dice que Conservación está muerto, que el trato entre ellos está completo, y que el mundo terminará en días. Pero Vin percibe algo inesperado bajo su jactancia —emoción humana, y por tanto debilidad. Él dice que ella y Elend son valiosos precisamente porque son muy buenos destruyendo cosas. Vin se da cuenta de que Ruina vino a su celda porque su encarcelamiento es la piedra angular de su victoria —lo que significa que debe escapar pronto para frustrarlo.',
			},
			'hoa-60': {
				title: 'Ante el tribunal del obligador',
				description:
					'Vin es llevada ante Yomen para su juicio, haciendo un intento de fuga fingido —derriba a cuatro guardias pero veinte la abruman. Encadenada a un banco, engrasa en secreto sus muñecas y se libera, lanzando tornillos de plata a los guardias como distracción. Se abalanza sobre Yomen pero él quema atium y la esquiva sin esfuerzo. Impasible, le dice que se siente —sin cadenas. Ruina pasea por la sala, llamando a Yomen una decepción. Los obligadores se unen e Yomen la interroga: ¿por qué está aquí su ejército? Ella habla de necesitar suministros y de Cett queriendo su reino. Yomen pregunta sobre su papel en la Iglesia del Superviviente. Vin replica que Yomen hace lo mismo —creyendo que el lord Legislador sigue vivo y guiando los acontecimientos. Relata cómo mató al lord Legislador, omitiendo solo su absorción de las brumas. Yomen lo descarta como un ardid; Vin vuelve su lógica contra él —no puede ser juzgada por asesinar a un dios que Yomen insiste que sigue vivo. Revela el verdadero propósito del ejército: el atium. Yomen lo llama inútil y termina la sesión, aún tratando de discernir qué quiere el lord Legislador que haga a continuación.',
			},
			'hoa-63': {
				title: 'El brumoso de atium',
				description:
					'Ruina se jacta ante Vin de su victoria inminente, pero ella escucha atentamente sus divagaciones —buscando cualquier pista que pueda ayudarla a derrotarlo. Llama a sus guardias y les dice que quiere hacer un trato con Yomen. El obligador llega con aspecto cansado, y Vin tiene una revelación: no es un nacido de la bruma en absoluto. Es un brumoso de atium —un Vidente— lo que explica por qué huyó de ella en la Fortaleza Orielle en lugar de aprovechar su ventaja. Explica cómo la alomancia emocional combinada con duraluminio puede tomar el control de los koloss cuando Yomen pregunta por el poder de Elend. Yomen reflexiona que Vin es parte de los planes del lord Legislador, y ella sigue la corriente —afirmando que el lord Legislador quería que ella conociera a Yomen a través de la búsqueda de los alijos. Traen mapas y Vin marca las ubicaciones de los alijos restantes por el imperio, notando que todos están cerca de minas o depósitos minerales —un patrón. En un destello de claridad comprende: Ruina ha estado usándolos a ella y a Elend para encontrar los alijos de almacenamiento. Peor aún —la estaba manipulando específicamente para localizar el alijo de atium. Antes de que pueda reflexionar más, llega Marsh. Le sonríe, se inclina ante Ruina, y le dice a Yomen que un ataque es inminente —no está aquí para proteger Fadrex sino para llevarse el atium. Yomen revela la verdad: no había un gran alijo, solo siete cuentas. Había estado faroleando. Ruina grita de frustración. Yomen suplica la ayuda de Marsh pero es rechazado con frialdad —el lord Legislador está muerto y fue un sirviente improductivo. Vin aprovecha la apertura: Elend no atacará, dice. Ofrece a Yomen una alianza ahora que Marsh lo ha abandonado. Marsh se burla —Elend nunca atacaría la ciudad para salvarla. La respuesta de Vin es acero tranquilo: Elend es mejor hombre que eso.',
			},
			'hoa-65': {
				title: 'Liberándose',
				description:
					'Vin farolea a Ruina desde su celda en el Cantón de Recursos, afirmando que ella y Elend conocían su plan todo el tiempo y ya han escondido el alijo de atium. Marsh la agarra y exige la ubicación del atium, pero ella se niega. Marsh ordena a Yomen atacar al ejército de Elend y revela que el lord Legislador creó a los koloss e Inquisidores como una fuerza que Ruina algún día tomaría. Mientras Marsh la zarandea, Vin roba un vial de metal de su fajín y lo ingiere. Se quita el pendiente —el clavo hemalúrgico que Ruina usaba para susurrarle— y lo empuja con duraluminio en la frente de Marsh. Cuando Marsh se recupera, crece de tamaño usando fuerza feruquímica y la estrangula, Vin recurre a las brumas y Empuja sus emociones, rompiendo el control de Ruina. Marsh huye. Vin llega al campo de batalla y ordena una retirada desesperada hacia Ciudad Fadrex, forjando una alianza temporal con Yomen.',
			},
			'hoa-67': {
				title: 'La tormenta que se avecina',
				description:
					'Vin está con Elend y Yomen dentro de Fadrex mientras un enorme ejército de koloss se reúne fuera de las murallas. Un gigantesco terremoto sacude la ciudad, causando grandes daños. Incapaz de acceder a las brumas —su pendiente aún puesto— Vin reflexiona sobre cómo farolear a Ruina y hacer que las brumas la ayuden de nuevo. Le dice a Elend que debe alcanzar el alijo de atium y traerlo de vuelta.',
			},
			'hoa-67.2': {
				title: 'Partiendo hacia Luthadel',
				description:
					'Vin deja Fadrex volando hacia el este, hacia Luthadel, atrayendo deliberadamente a los Inquisidores lejos de Elend y su ejército. Apuesta a que puede correr más rápido que un dios, esperando forzar a Ruina a mostrar sus cartas haciéndole perseguirla a ella en lugar de destruir a los que ama.',
			},
			'hoa-72': {
				title: 'El pendiente',
				description:
					'Vin llega a Luthadel con una docena de Inquisidores persiguiéndola. En Kredik Shaw, Ruina exige la ubicación del atium —sus secuaces ya registran el palacio. Ella se niega, y trece Inquisidores atacan. Lucha brillantemente, incluso detectando a uno usando velocidad feruquímica por clavos extra, pero finalmente es abrumada. Suplica a las brumas que la ayuden —no pasa nada. Ruina ordena a Marsh que termine la tortura. Marsh le rompe los brazos, las piernas, los dedos uno a uno, exigiendo la ubicación del atium. Una pequeña parte de él se resiste, pensando en cómo Kelsier trató a Vin como la hija que él y Mare nunca tuvieron. Se fija en su pendiente, recuerda la advertencia de Spook grabada en acero sobre el metal que atraviesa el cuerpo —y sin pensarlo, se lo arranca de la oreja. La voz de Ruina se corta instantáneamente. Las brumas se precipitan en Vin, curando sus heridas y llenándola de poder. Se levanta para enfrentarse a Marsh.',
			},
			'hoa-73': {
				title: 'Ascensión',
				description:
					'Impulsada por las brumas como si quemara duraluminio con una reserva infinita de metal, Vin se vuelve contra los doce Inquisidores restantes. Los mata a todos con una facilidad aterradora —sus Empujes de acero ordinarios ahora llevan una fuerza divina. Demuele el propio Kredik Shaw con un solo Empuje, derrumbando el palacio milenario del lord Legislador en escombros. Solo queda Marsh. En un momento de misericordia —o reconocimiento— le arranca uno de sus clavos oculares en lugar de matarlo. Cuando las últimas brumas fluyen hacia ella, tose una vez y desaparece, dejando a Marsh vivo y a Ruina rugiendo en el fondo de su mente.',
			},
			'hoa-76': {
				title: 'Bienvenida a la divinidad',
				description:
					'Vin flota sobre Luthadel, llena del poder de Conservación. Ruina la saluda —una nube de humo negro cambiante— y burlonamente le da la bienvenida a la divinidad. Su conciencia se expande para ver el planeta entero muriendo, aunque muchos han encontrado refugio en las cavernas de almacenamiento. Intenta ayudar: bloquea los Montes de Ceniza y limpia el aire, pero la repentina luz solar recalienta el mundo. Cada arreglo crea una nueva catástrofe mientras Ruina ríe, bloqueándola para que no detenga un maremoto. Él explica el equilibrio entre ellos —como los empujes y tirones alománticos, cada acción tiene su consecuencia— y revela que Conservación creó a la humanidad intencionadamente desequilibrada, dándoles más de sí mismo. Vin comprende: ella y Ruina están igualados ahora, pero si él encuentra la parte oculta de su cuerpo, el equilibrio se rompe. Ve a Elend dirigiéndose hacia Luthadel abajo.',
			},
			'hoa-79': {
				title: 'Siguiendo a Ruina',
				description:
					'Vin percibe un cambio y sigue a Ruina hasta los Pozos de Hathsin. Ve el campamento de refugiados y a los kandra moviendo el atium, apreciando de nuevo el elaborado ocultamiento del lord Legislador. Ruina toma el control de KanPaar y exige la ubicación del atium.',
			},
			'hoa-80': {
				title: 'La guía del viento',
				description:
					'Vin, como Conservación, observa a los cientos de miles de refugiados reunidos en los Pozos de Hathsin. Susurra el nombre de Elend en el viento, guiándolo por el campamento hacia el Hogar kandra donde Sazed lucha solo para proteger el atium. Ruina continúa burlándose de ella —pero ella no puede responder, solo puede observar, guiar y tener esperanza.',
			},
			'hoa-81': {
				title: 'Observando la batalla',
				description:
					'Vin observa cómo Elend da un discurso a sus Videntes y conduce a los brumosos de atium cargando contra el ejército koloss. Intenta decirle que no luche —él no puede oírla. Ve a Sazed de pie en la entrada de la caverna, reabasteciendo a los soldados. Durante horas observa a Elend quemar una fortuna de atium, luchando con precisión imposible. Entonces Marsh aparece, también quemando atium, y Vin ve la fuerza oscura de Ruina guiando el hacha de su hermano. Observa a Elend quemar duraluminio y atium juntos en un destello final de perspicacia divina —y clavar su espada en el cuello de Marsh mientras el hacha lo alcanza en el pecho. Elend muere sonriendo.',
			},
			'hoa-81.2': {
				title: 'El ataque final',
				description:
					'Ruina se regodea sobre el cadáver de Elend mientras Marsh lo decapita. Pero Vin ha visto al hombre que ama sacrificarlo todo —y no permitirá que sea en vano. Ignorando la agonía que conlleva usar el poder de Conservación para destruir, ataca a Ruina directamente. La fuerza de los opuestos —Conservación golpeando a Ruina— es algo que ninguna Esquirla estaba destinada a sobrevivir. El ataque mata tanto a Ati como a Vin. Su cuerpo cae junto al de Elend en la ceniza.',
			},
			'hoa-83': {
				title: 'El campo del renacimiento',
				description:
					'El cuerpo de Vin es encontrado en un campo de flores y hierba verde —los primeros signos del mundo rehecho por Sazed. Yace en paz junto a Elend.',
			},
		},
		sazed: {
			...enData.movements.sazed,
			// ── El Imperio Final ───────────────────────────────────────────
			'tfe-9': {
				title: 'El mayordomo terrisano',
				description:
					'Sazed llega a la finca de lord Renoux en Fellise como tutor y mayordomo de Vin, enseñándole etiqueta, danza y comportamiento. Le habla del trelagismo —la quinta religión que le ha propuesto— y, al ser preguntado, admite conocer 562 más.',
			},
			'tfe-10.2': {
				title: 'El mitin del almacén',
				description:
					'Sazed asiste al mitin secreto del almacén junto a Kelsier y Vin, observando cómo el Superviviente predica la revolución a los trabajadores skaa reunidos.',
			},
			'tfe-12': {
				title: 'Guardián en el baile',
				description:
					'Sazed acompaña a Vin a su primer baile en la Fortaleza Venture como su mayordomo, velando por ella mientras se infiltra en la sociedad noble.',
			},
			'tfe-13': {
				title: 'Informe en Fellise',
				description:
					'Sazed regresa a la finca de lord Renoux en Fellise con Vin y Kelsier, revisando los resultados del primer baile de Vin y planificando los siguientes pasos.',
			},
			'tfe-15': {
				title: 'Salvando a Vin',
				description:
					'Sazed lleva a Vin a la tienda de Clubs para salvarla y operarla tras su herida en Kredik Shaw. También examina un libro escrito en khlennio (la lengua del lord Legislador) recuperado durante la misión de reconocimiento.',
			},
			'tfe-16': {
				title: 'Regreso a Fellise',
				description:
					'Tras estabilizar a Vin en la tienda de Clubs, Sazed regresa a la finca Renoux en Fellise.',
			},
			'tfe-17': {
				title: 'Traduciendo el libro khlennio',
				description:
					'En la biblioteca de la finca Renoux en Fellise, Sazed trabaja para traducir el libro escrito en khlennio que Vin recuperó en la misión de reconocimiento a Kredik Shaw.',
			},
			'tfe-18': {
				title: 'Guardián en la Fortaleza Elariel',
				description:
					'Sazed acompaña a Vin al baile de la Fortaleza Elariel como su mayordomo terrisano, velando por ella mientras navega la corte noble.',
			},
			'tfe-19': {
				title: 'Intercambio de inteligencia',
				description:
					'Sazed está en la mansión Renoux cuando Kelsier regresa por la Ruta de Pinchos. Intercambian información sobre las casas nobles y el progreso de la rebelión, mientras Kelsier sermonea a Vin para que se aleje de Elend.',
			},
			'tfe-22': {
				title: 'Secretos de la feruquimia',
				description:
					'En la finca Renoux, Sazed habla con Vin sobre el terrisano del diario del lord Legislador. Revela los secretos de la feruquimia y cómo se formaron los Guardadores para recordar todo tras la pérdida de la religión terrisana. También aprende cosas nuevas de su pueblo a través del diario: que la tierra fue una vez verde y fértil, no una tundra helada.',
			},
			'tfe-23': {
				title: 'Guardián en la Fortaleza Hasting',
				description:
					'Sazed acompaña a Vin al baile de la Fortaleza Hasting como su mayordomo terrisano. Espera mientras ella esparce rumores y habla con nobles, siempre vigilante como guardián.',
			},
			'tfe-27': {
				title: 'El mensaje de Marsh',
				description:
					'Sazed regresa a la tienda de Clubs con una carta de Marsh con noticias e instrucciones de dónde reunirse. También trae traducciones del diario del lord Legislador.',
			},
			'tfe-28': {
				title: 'Guardián en la Fortaleza Lekal',
				description:
					'Sazed acompaña a Vin al baile de la Fortaleza Lekal como su mayordomo terrisano. La espera mientras trabaja para encender las Guerras de Casas y habla con Elend.',
			},
			'tfe-29': {
				title: 'Lecciones de feruquimia',
				description:
					'En la finca Renoux, Sazed entrega a Vin las últimas traducciones del diario. Le explica la feruquimia con más detalle y Vin intenta quemar una de sus mentes de peltre. Más tarde Sazed se une a la banda cuando Kelsier repasa un mapa detallado proporcionado por Marsh. Sin poder dormir esa noche, Kelsier pide a Sazed que le cuente algunas religiones.',
			},
			'tfe-30': {
				title: 'Guardián en la Fortaleza Venture',
				description:
					'Sazed acompaña a Vin al último baile de casas en la Fortaleza Venture. Los asistentes cierran alianzas y lady Valette recibe una fría acogida. Sazed abandona el baile antes de que Vin descubra el complot de asesinato contra Elend y luche contra Shan Elariel.',
			},
			'tfe-31': {
				title: 'Curando las heridas de Vin',
				description:
					'Sazed atiende las heridas de Vin en la tienda de Clubs después de que esta llegue maltrecha de su pelea con Shan Elariel y los asesinos Elariel. Escucha mientras Vin relata los sucesos de la noche.',
			},
			'tfe-33': {
				title: 'El refugio de emergencia',
				description:
					'Sazed está en el refugio de reserva cerca de la tienda de Clubs con la banda, después de que Kelsier destruyese los Pozos de Hathsin. Vin habla con Sazed sobre el Undécimo Metal. Cuando llevan skaa a ejecutar a la Plaza de la Fuente y Spook aparece enjaulado en un carro de prisioneros, Sazed se queda en el refugio mientras Kelsier lucha contra el Inquisidor.',
			},
			'tfe-35': {
				title: 'Consolando a Vin',
				description:
					'Sazed está en el refugio de reserva con Vin tras la muerte de Kelsier. Ofrece palabras de consuelo mientras Vin rabia porque Kelsier la abandonó. Se queda atrás cuando la banda va al almacén a ver al kandra con la forma de Kelsier.',
			},
			'tfe-37': {
				title: 'El feruquimista desatado',
				description:
					'Sazed es llevado a la celda de Vin en Kredik Shaw. Parece desinflarse y luego sus músculos se hinchan al doble de su tamaño al liberar fuerza feruquímica almacenada, reventando la puerta.',
			},
			'tfe-38': {
				title: 'La caída del Imperio',
				description:
					'Sazed aparece en la confrontación final en Kredik Shaw con un vial de metales para Vin. Presencia la caída del lord Legislador cuando Vin tira de sus pulseras y la edad del lord Legislador aumenta dramática y rápidamente.',
			},
			'tfe-39': {
				title: 'Comprendiendo al tirano',
				description:
					'Sazed se alza con Vin y Marsh sobre un edificio junto al barrio skaa. Explica que el lord Legislador era a la vez feruquimista y alomante: las pulseras almacenaban su juventud. Especula que por eso todos los criados terrisanos eran obligados a ser eunucos: el lord Legislador temía que alguien con sangre feruquímica y alomántica desafiase su inmortalidad. Se lamenta de no haber podido memorizar por completo el formidable discurso de Elend a los nuevos líderes por no tener sus metales consigo.',
			},
			'woa-4': {
				title: 'El maestro viajero',
				description:
					'Sazed viaja por el Dominio Oriental, visitando aldeas rurales para compartir religiones y conocimientos suprimidos con los skaa recién liberados.',
			},
			'woa-7': {
				title: 'Regresa Marsh',
				description:
					'Sazed continúa enseñando religiones suprimidas a los skaa liberados en el Dominio Oriental. Marsh aparece en la aldea, vagando solo desde la caída del lord Legislador, y se ofrece a guiar a Sazed al Conventículo de Seran.',
			},
			'woa-9': {
				title: 'Viaje al Conventículo',
				description:
					'Sazed y Marsh viajan por el desolado Dominio Oriental hacia el Conventículo de Seran. Marsh se vuelve cada vez más distante y extraño durante el viaje, inquietando a Sazed.',
			},
			'woa-12': {
				title: 'Descifrando la placa',
				description:
					'Sazed estudia la inscripción de Kwaan en el Conventículo, descubriendo la desesperada advertencia del Guardián terrisano de que la profecía del Héroe de las Eras fue alterada.',
			},
			'woa-15': {
				title: 'Las muertes de la bruma',
				description:
					'Regresando hacia el oeste por Urbene, Sazed encuentra aldeas donde la gente ha muerto misteriosamente en las brumas —los primeros signos de la enfermedad de la bruma.',
			},
			'woa-19': {
				title: 'El ejército koloss',
				description:
					'Tras quemar su mente de acero para acelerar el viaje, Sazed se topa con un ejército koloss de veinte mil en el Dominio Central. Es capturado y llevado ante Jastes Lekal, que quiere a Sazed como su mayordomo. Sazed rechaza pero lleva la oferta de alianza de Jastes hacia Luthadel.',
			},
			'woa-22': {
				title: 'Regreso a Luthadel',
				description:
					'Sazed llega a Luthadel con graves noticias sobre la profecía alterada, las muertes de la bruma y el verdadero significado de la inscripción de acero.',
			},
			'woa-23': {
				title: 'El tercer ejército',
				description:
					'Sazed informa a Elend y la banda sobre los veinte mil koloss bajo Jastes Lekal. Advierte que las brumas están matando gente y resuelve quedarse en Luthadel para investigar. Después, se encuentra con Tindwyl y comparten un momento personal.',
			},
			'woa-30': {
				title: 'Transcribiendo los calcos',
				description:
					'Sazed transcribe los calcos del Conventículo de Seran, dándose cuenta de que el trabajo podría llevar años. Vin entra por su ventana y propone que las brumas son la Profundidad. Le dice que ha visto a la misma criatura que siguió al Héroe de las Eras.',
			},
			'woa-36': {
				title: 'Refugio en los almacenes',
				description:
					'Sazed ofrece consuelo a los refugiados alojados en un almacén de armas. Tindwyl le pide ver su calco del Conventículo. Breeze aplaca a todos usando su alomancia para aliviar su sufrimiento.',
			},
			'woa-37': {
				title: 'El debate de la Profundidad',
				description:
					'Sazed y Tindwyl estudian un fragmento de la biografía del rey Wednegon sobre la Profundidad. Sazed cree que la Profundidad es un cambio en las brumas. Debaten sus teorías. Tindwyl expresa su deseo por Sazed, y él le pide que se quede —ella lo hace.',
			},
			'woa-40': {
				title: 'Debatiendo la profecía',
				description:
					'Sazed trabaja con Tindwyl en la Fortaleza Venture, comparando las versiones originales y alteradas de la profecía del Héroe de las Eras, acercándose más a ella.',
			},
			'woa-41': {
				title: 'La profecía alterada',
				description:
					'Sazed y Tindwyl debaten la placa del Conventículo y el diario de Alendi. Se dan cuenta de que muchos morirán cuando Luthadel caiga. Elend los visita buscando consejo, y le aplauden por mantener sus convicciones.',
			},
			'woa-45': {
				title: 'Esquinas rasgadas',
				description:
					'Tindwyl descubre transcripciones con las esquinas arrancadas —la misma frase destruida en cada una. Vin y Elend buscan consejo de Sazed sobre el amor. Sazed resuelve asegurarse de que no estén en Luthadel cuando caiga.',
			},
			'woa-46': {
				title: 'El plan de escape',
				description:
					'Sazed reúne en secreto a Breeze, Clubs, Hammond y Dockson. Acuerdan quedarse y defender la ciudad pero planean enviar a Elend, Vin, Spook y Tindwyl lejos antes de la batalla.',
			},
			'woa-49': {
				title: 'Viéndolos partir',
				description:
					'Desde la muralla, Sazed observa cómo el grupo de Elend evade al ejército de Straff y cabalga al norte. Tindwyl eligió quedarse. Una gran columna de humo sale del campamento koloss.',
			},
			'woa-50': {
				title: 'Preparándose para lo peor',
				description:
					'Sazed llena sus mentes de metal preparándose para un ataque koloss. Straff se ha retirado. Él y Tindwyl discuten sobre enviar lejos a Elend y Vin, luego se abrazan antes de que suene una alarma.',
			},
			'woa-51': {
				title: 'Comienza el ataque koloss',
				description:
					'Los koloss se han enzarzado en una enorme pelea, elevando su furia hasta volverse contra la ciudad. Sazed observa cómo comienza el asalto desde su puesto en la muralla sobre la Puerta de Acero.',
			},
			'woa-52': {
				title: 'El Santo Primer Testigo',
				description:
					'Sazed defiende la Puerta de Acero. Una multitud skaa lo llama el Santo Primer Testigo. Cuando los koloss irrumpen, Sazed activa su mente de peltre, mata a un koloss gigante de un puñetazo y lidera a los soldados en la batalla.',
			},
			'woa-53': {
				title: 'Defendiendo la Puerta de Acero',
				description:
					'Sazed lucha en la Puerta de Acero, activando su mente de hierro para mantenerla cerrada. Su mente de hierro se agota, los koloss irrumpen de nuevo, y se entera de que la Puerta de Estaño, donde Tindwyl comandaba, ha caído.',
			},
			'woa-54': {
				title: 'Buscando a Tindwyl',
				description:
					'Tras horas de búsqueda, Sazed localiza el cuerpo de Tindwyl y la llora —incapaz de elegir un rito religioso para ella, ya que no cree en ninguna de las fes que ha estudiado.',
			},
			'woa-55': {
				title: 'Dejado al mando',
				description:
					'Sazed observa a los koloss controlados por Vin y al ejército de Cett aplastar a las fuerzas de Straff. Vin obliga a Penrod, Cett y Janarle a aceptar a Elend como Emperador, y luego deja a Sazed al mando de la ciudad.',
			},
			'woa-57': {
				title: 'Luchando contra Marsh',
				description:
					'Sazed se da cuenta de que él es el «Santo Primer Testigo». El espíritu de la bruma lo insta hacia Kredik Shaw, donde Marsh —bajo el control de Ruina— dice que desearía saber por qué debe matarlo antes de estrellarlo contra la pared.',
			},
			'woa-58': {
				title: 'Sobreviviendo al Inquisidor',
				description:
					'Marsh destroza costillas y brazo de Sazed y le clava anillos en la carne —pero Sazed activa esas mentes de metal para curarse y luchar. Hammond golpea el cráneo del Inquisidor con una vara de duelo. Sazed y Hammond bajan corriendo hacia Vin.',
			},
			'woa-59': {
				title: 'Demasiado tarde en el Pozo',
				description:
					'Sazed llega al Pozo de la Ascensión demasiado tarde para impedir que Vin libere el poder. Llorando a Tindwyl, se queda cuestionando cada religión que lleva consigo.',
			},
			'woa-60': {
				title: 'Pérdida de toda fe',
				description:
					'Sazed regresa al Conventículo de Seran y descubre que la inscripción no coincide con su calco. La verdadera advertencia: Alendi no debe liberar lo que está aprisionado en el Pozo. Una fuerza malévola alteró las profecías. Sazed comprende el desastre que Vin ha desatado y pierde toda fe.',
			},
			'hoa-4': {
				title: 'Diplomacia sureña',
				description:
					'Sazed visita Ciudad Lekal con Breeze para negociar un tratado, usando la diplomacia para incorporar al rey sureño a la creciente coalición de Elend.',
			},
			'hoa-8': {
				title: 'De camino al ejército',
				description:
					'Habiendo asegurado el tratado con el rey Audil Lekal, Sazed viaja con Breeze para reunirse con el ejército de Vin y Elend.',
			},
			'hoa-10': {
				title: 'Reencontrándose con el ejército',
				description:
					'Sazed, Breeze, Goradel y Allrianne alcanzan al ejército de Elend en marcha hacia Fadrex. Sazed comparte su crisis de fe con Vin, quien le da el dibujo de la flor de Mare.',
			},
			'hoa-12': {
				title: 'La reunión del consejo',
				description:
					'Sazed asiste al consejo de guerra de Elend. Debaten las brumas invasoras y los planes para capturar los alijos. Elend pregunta «¿Qué haría Kelsier?» para unir a la banda.',
			},
			'hoa-18': {
				title: 'Viajando al norte',
				description:
					'Sazed, Breeze, Allrianne y Goradel viajan al norte hacia Urteau. Sazed continúa su búsqueda de una religión en la que creer.',
			},
			'hoa-18.2': {
				title: 'Entre los terrisanos',
				description:
					'Sazed se detiene en los Pozos de Hathsin donde los terrisanos se han reasentado. Se reúne con los ancianos, aconsejándolos pero negándose a ser su líder, creyéndose indigno.',
			},
			'hoa-22': {
				title: 'La anomalía terrisana',
				description:
					'Sazed descubre un hecho crucial: ni un solo terrisano ha sido afectado por la enfermedad de la bruma —un patrón que archiva entre sus crecientes dudas.',
			},
			'hoa-25': {
				title: 'Dejando a los terrisanos',
				description:
					'Sazed parte de los Pozos de Hathsin, continuando su viaje al norte hacia Urteau con el inquietante hecho de que ningún terrisano ha caído por la enfermedad de la bruma.',
			},
			'hoa-29': {
				title: 'Convocado por el Ciudadano',
				description:
					'Sazed, Breeze, Allrianne y su guardia llegan a Urteau y son convocados ante Quellion. El Ciudadano rechaza la oferta de alianza y les permite quedarse a regañadientes solo si obedecen la ley.',
			},
			'hoa-29.2': {
				title: 'El lago subterráneo',
				description:
					'Spook guía a Sazed, Breeze, Allrianne y Goradel al Cantón de Inquisición en desuso. Bajo él revela el alijo del lord Legislador y el lago subterráneo oculto que explica los canales secos.',
			},
			'hoa-31': {
				title: 'El desvío del agua',
				description:
					'Sazed, Spook y Breeze discuten cómo deponer a Quellion sin crear un reemplazo peor. Sazed defiende la postura de Quellion como seguidor de las políticas antinobles de Kelsier.',
			},
			'hoa-38': {
				title: 'El Superviviente de las Llamas',
				description:
					'Sazed y Breeze observan cómo los skaa ahora caminan libremente hacia las brumas. Los lugareños hablan del Superviviente de las Llamas. Sazed no se da cuenta aún de que es Spook.',
			},
			'hoa-41': {
				title: 'El Superviviente revelado',
				description:
					'Sazed presencia un edificio en llamas —una figura sale de las llamas llevando a una niña. Por primera vez, Sazed ve al Superviviente de las Llamas y se da cuenta de que es Spook.',
			},
			'hoa-46': {
				title: 'Trellismo y confianza',
				description:
					'Sazed espera a Spook, revisando el trellismo y sintiendo que su búsqueda de fe es inútil. Spook regresa y pide a Sazed que devuelva el agua a los canales, pidiendo solo confianza.',
			},
			'hoa-49': {
				title: 'La ingeniería de canales',
				description:
					'Sazed investiga cómo volver a llenar los canales secos de Urteau. Breeze se alegra al verlo mostrar interés en su erudición de nuevo. Beldre suplica que no maten a su hermano. Deciden retenerla como rehén.',
			},
			'hoa-53': {
				title: 'Viendo a Spook liderar',
				description:
					'Sazed escucha a Spook contarle a Beldre sobre su vida en la banda de Kelsier. Cuando Spook se va a reunir a la ciudad, Sazed se queda observando a quien una vez habló en jerga callejera convertirse en algo más.',
			},
			'hoa-56': {
				title: 'La necesidad de fe',
				description:
					'Spook le dice a Sazed que tiene fe en que alguien vigila y hará que las cosas salgan bien. Sazed se da cuenta de que lo que le ha faltado no es una religión perfecta, sino la capacidad de creer en algo de nuevo.',
			},
			'hoa-50': {
				title: 'El descubrimiento de la caverna',
				description:
					'Sazed descubre el mecanismo para inundar el sistema de canales secos —el lord Legislador había drenado los canales para ocultar el agua en la caverna inferior.',
			},
			'hoa-58': {
				title: 'Salvando Urteau',
				description:
					'Sazed instruye a Spook sobre el mecanismo de agua. Observa la confrontación: Beldre revelada como lanzamonedas, Spook arrancando clavos de Quellion y de sí mismo. Spook se lanza al edificio en llamas. El agua corre por los canales, salvando Urteau.',
			},
			'hoa-59': {
				title: 'La carga del Anunciador',
				description:
					'TenSoon llega a Urteau, encuentra a Breeze y Sazed. Debe alcanzar a Vin porque concierne al fin del mundo. Sazed recibe la noticia con hueca indiferencia —ha perdido toda fe.',
			},
			'hoa-62': {
				title: 'El Anunciador',
				description:
					'Sazed vela a Spook en el hospital. TenSoon revela la verdad: los compañeros de Rashek fueron transformados en kandra. Son la Primera Generación. La fe terrisana aún vive. Sazed se prepara para encontrar el Hogar kandra.',
			},
			'hoa-66': {
				title: 'Cabalgando al Hogar',
				description:
					'Sazed cabalga hacia el sur sobre TenSoon, que ha tomado forma de caballo. TenSoon revela la historia de los kandra, el Primer Contrato, y su creencia de que Vin liderará un ejército alomante al Hogar.',
			},
			'hoa-68': {
				title: 'El Portamundos',
				description:
					'Sazed es escoltado por los túneles kandra. Se proclama el Anunciador ante la Segunda Generación. La Primera Generación aparece y lo llama Portamundos.',
			},
			'hoa-71': {
				title: 'La Confianza',
				description:
					'Sazed y la Primera Generación examinan las alteraciones de Ruina. Sazed descubre la Confianza: un enorme alijo de atium escondido por los kandra durante siglos.',
			},
			'hoa-75': {
				title: 'La Resolución',
				description:
					'Sazed aprende sobre la religión kandra. Se da cuenta de que la fe se basa en la percepción, no en reglas. KanPaar lidera un golpe. Sazed es encerrado mientras los kandra caen en guerra civil.',
			},
			'hoa-78': {
				title: 'Rescatado por TenSoon',
				description:
					'TenSoon rescata a Sazed y a la Primera Generación durante la guerra civil kandra. Los Primeros regeneran sus cuerpos —los kandra más antiguos recuperan toda su fuerza.',
			},
			'hoa-79': {
				title: 'Comienza la Resolución',
				description:
					'TenSoon ataca a Sazed —Ruina ha tomado el control de los kandra a través de sus Bendiciones. TenSoon se resiste inútilmente mientras estrangula a Sazed hasta dejarlo inconsciente.',
			},
			'hoa-80': {
				title: 'La Confianza defendida',
				description:
					'Sazed bloquea la entrada a la Cámara de la Confianza contra los kandra renegados. Elend Venture entra en la cámara y somete a los kandra.',
			},
			'hoa-81': {
				title: 'El cuerpo de un dios',
				description:
					'Sazed revela la verdad: el atium es el cuerpo de Ruina. Los soldados caídos de la bruma son todos Videntes. Sazed reabastece a los soldados mientras observa la batalla final, creyendo con una fe que pensó haber perdido.',
			},
			'hoa-82': {
				title: 'El Héroe de las Eras',
				description:
					'Sazed ve los cuerpos de Vin y Ati junto al cadáver de Elend. Toma Conservación y Ruina, y recurre al conocimiento de sus mentes de cobre para restaurar el mundo, convirtiéndose en Armonía.',
			},
			'hoa-83': {
				title: 'Armonía',
				description:
					'Sazed asciende como Armonía, combinando Ruina y Conservación. Rehace el mundo —moviendo el planeta, restaurando el verdor, y sanando mil años de daño.',
			},
		},
		elend: {
			...enData.movements.elend,
			// ── El Imperio Final ───────────────────────────────────────────
			'tfe-12': {
				title: 'El noble lector',
				description:
					'Elend Venture advierte a Vin sola en un balcón durante un baile en su propia fortaleza y se acerca. La irrita sacando Pruebas del Monumento y poniéndose a leer mientras el resto de la nobleza baila e intriga a su alrededor.',
			},
			'tfe-18': {
				title: 'Una velada con Valette',
				description:
					'Elend asiste al baile de la Fortaleza Elariel, donde se sienta a la mesa con Vin leyendo, como de costumbre. Le elogia el vestido, dejándola boquiabierta.',
			},
			'tfe-23': {
				title: 'El pañuelo',
				description:
					'Elend encuentra a Vin en el baile de la Fortaleza Hasting. Ella le pregunta si se ha acostado con una skaa. Él confiesa que su padre le obligó a los trece años, y que la mujer fue asesinada después, pero nunca volvió a hacerlo. Le da un pañuelo a Vin, señalando su deseo de cortejarla. Tras irse con sus amigos, suben a una torre a debatir los fallos del lord Legislador y qué debería hacer su generación al respecto.',
			},
			'tfe-28': {
				title: 'Baile en la Fortaleza Lekal',
				description:
					'Elend sorprende a Vin en el baile de la Fortaleza Lekal. Dice que quiere besarla, pero Vin insiste en que no la conoce realmente. Dan un paseo y Elend le revela que la fortuna de Venture proviene de la extracción de atium en los Pozos de Hathsin, confiándole el secreto por completo. Menciona que los Tekiel fueron asesinados por la Casa Hasting e intenta convencer a Valette de que abandone Luthadel por su seguridad.',
			},
			'tfe-28.2': {
				title: 'La llamada del padre',
				description:
					'Elend regresa a la Fortaleza Venture e intenta pasar sigilosamente ante la habitación de su padre. Lord Straff Venture, un vigía de estaño que no deja pasar nada, lo llama. Straff le dice que mañana debe cenar con la Casa Hasting y una de sus hijas, porque planea una alianza con lord Tegas. Después, Jastes llega y revela que hicieron seguir al carruaje de lady Valette: llegó a Fellise con solo el terrisano dentro, Valette había desaparecido. Jastes está convencido de que es una espía de otra casa. Elend, al darse cuenta de que reveló el secreto del atium, propone un trato a su padre: asistirá al almuerzo a cambio de unos espías que sigan a Valette.',
			},
			'tfe-30': {
				title: 'El baile Venture',
				description:
					'Elend cena con su padre en la Fortaleza Venture durante el baile. Vin atrae su atención y tienen un enfrentamiento. Elend dice cosas que hieren a Vin; sin embargo, cuando ella se entera de que habrá un intento de asesinato contra Elend esa noche, corre a las brumas a buscar a los asesinos. La velada termina en caos cuando Vin lucha y mata a lady Shan Elariel, una nacida de la bruma enviada a asesinar a Elend. En la confusión, Elend logra escabullirse.',
			},
			'tfe-31': {
				title: 'Los informes de los espías',
				description:
					'Elend y Jastes se reúnen con Felt, que relata todo lo que los espías de Elend han descubierto sobre la tienda de Clubs y quienes están en ella. Tras marcharse Felt y Jastes, los guardias Venture llevan a Elend ante su padre Straff, que revela que Shan Elariel era una nacida de la bruma enviada a asesinar a Elend. Elend sabe ahora que un grupo de ladrones skaa opera cerca de la Fortaleza Venture y que Valette está conectada con ellos.',
			},
			'tfe-33': {
				title: 'Los carros de ejecución',
				description:
					'Elend ve a los sirvientes de Renoux enjaulados en un carro de ejecución en la Plaza de la Fuente. Grita buscando a Valette, pero no la encuentra en la multitud.',
			},
			'tfe-34': {
				title: 'Kelsier salva a Elend',
				description:
					'Elend llega a la jaula de Renoux en la Plaza de la Fuente y pregunta por Valette. Un Inquisidor aterriza sobre la jaula y está a punto de golpear a Elend con su hacha cuando Kelsier ataca al Inquisidor, salvándole la vida. Kelsier grita a Elend que Valette está bien, y los guardaespaldas se lo llevan a rastras.',
			},
			'tfe-36': {
				title: 'Autoridad de la Casa Venture',
				description:
					'El padre de Elend le comunica que ha estallado una rebelión skaa y quiere huir de Luthadel. Elend se niega a marcharse. Straff acepta, esperando que Elend muera, y le transfiere la autoridad de la Casa Venture. Elend ordena a sus soldados ir a la Fortaleza Lekal para una defensa mutua. Luego toma a sus cinco mejores soldados como escolta de honor y va a entregarse al liderazgo skaa.',
			},
			'tfe-37': {
				title: 'Rescatando a Vin',
				description:
					'Elend ofrece oro a unos skaa para que le lleven ante Dockson y le dice que la Casa Venture no resistirá la rebelión; deberían colaborar. Después, Elend y seis soldados irrumpen en Kredik Shaw para rescatar a Vin. El secreto se descubre: sabe que Vin es una nacida de la bruma. Vin le agarra la cabeza y le besa, y luego se marcha a matar al lord Legislador.',
			},
			'tfe-38': {
				title: 'El rey filósofo',
				description:
					'Tras la muerte del lord Legislador, Elend emerge como una voz unificadora que reclama orden. Comienza a reunirse con líderes tanto skaa como nobles para redactar un código de leyes para la nueva nación.',
			},
			'tfe-39': {
				title: 'El nuevo rey',
				description:
					'Elend Venture es aceptado como rey del Dominio Central tras un formidable discurso ante líderes skaa y nobles. Se sienta en la Fortaleza Venture redactando el nuevo código de leyes del reino. Vin lo observa en secreto desde las brumas a través de la ventana antes de lanzarse hacia él y abrazarse.',
			},
			'woa-1': {
				title: 'Rey en las murallas',
				description:
					'Elend observa desde las murallas de Luthadel cómo cincuenta mil soldados bajo su padre Straff Venture llegan y acampan fuera de la ciudad. El asedio de Luthadel ha comenzado.',
			},
			'woa-3': {
				title: 'Redactando la ley',
				description:
					'Elend trabaja en su estudio en la Fortaleza Venture, redactando propuestas para la Asamblea. Vin se le une tras su encuentro con el espíritu de la bruma, y Ham llega con información que sugiere que el rey Cett envió a los asesinos alomantes.',
			},
			'woa-5': {
				title: 'El rey erudito',
				description:
					'Elend trabaja en su estudio con Dockson, gestionando la logística de una ciudad sitiada. Vin se le une tras adquirir el nuevo cuerpo de perro lobo de OreSeur.',
			},
			'woa-6': {
				title: 'Observando desde el balcón',
				description:
					'Elend observa a Vin entrenar con Ham en el patio de la Fortaleza Venture. Pierde una apuesta con Clubs sobre el resultado y reflexiona sobre las fortalezas de su banda.',
			},
			'woa-10': {
				title: 'La Asamblea',
				description:
					'Elend se dirige a la Asamblea que creó, defendiendo principios democráticos. Una terrisana llamada Tindwyl observa desde el público. La sesión es interrumpida por la noticia de que un segundo ejército —las fuerzas del rey Cett— ha llegado fuera de Luthadel.',
			},
			'woa-11': {
				title: 'Inspeccionando el asedio',
				description:
					'Elend observa desde las murallas con Clubs y Vin el recién llegado ejército de Cett al oeste, junto a las fuerzas de su padre Straff al norte. Breeze está en peligro abajo, y Vin lo salva con un Empuje de acero potenciado con duraluminio.',
			},
			'woa-13': {
				title: 'Consejo de guerra',
				description:
					'Elend reúne a la vieja banda en la Fortaleza Venture para un consejo de guerra sobre el doble asedio. Después, Tindwyl se le acerca y se ofrece —enérgicamente— a instruirle en el arte de reinar.',
			},
			'woa-14': {
				title: 'La educación de un rey',
				description:
					'Tindwyl comienza su enérgica instrucción de Elend en la Fortaleza Venture, reformando su vestuario, postura y porte. Insiste en que un rey debe parecer y actuar como tal para mantener el poder.',
			},
			'woa-16': {
				title: 'La transformación de un rey',
				description:
					'Elend observa desde las murallas a los ejércitos sitiadores atrincherándose. Clubs lo encuentra en la muralla. Tindwyl manda llamarlo, le corta el pelo, le da un uniforme militar y una corona —transformando al filósofo en rey guerrero.',
			},
			'woa-17': {
				title: 'El mensajero de Straff',
				description:
					'Elend, Vin y OreSeur van a recibir a un mensajero de Straff Venture que resulta ser Zane. Zane afirma que Straff celebrará una reunión en su campamento. Elend dice que considerará la oferta.',
			},
			'woa-20': {
				title: 'Planeando el parlamento',
				description:
					'Elend discute su plan para parlamentar con Straff con Dockson, Hammond, Clubs y Breeze. Pretende enfrentar a Straff y Cett entre sí. Tindwyl le da lecciones sobre modales reales. Allrianne, la hija de lord Cett, llega buscando asilo.',
			},
			'woa-21': {
				title: 'El asilo de Allrianne',
				description:
					'Allrianne Cett llega al palacio y abraza a Breeze para sorpresa de todos. Elend le ofrece hospitalidad mientras la banda debate usarla como moneda de cambio contra lord Cett.',
			},
			'woa-22': {
				title: 'Luchando por la democracia',
				description:
					'Elend enfrenta una creciente oposición en la Asamblea mientras el miedo al asedio lleva a muchos a buscar un líder más fuerte que un rey filósofo.',
			},
			'woa-23': {
				title: 'La advertencia de Sazed',
				description:
					'Sazed regresa para informar de veinte mil koloss bajo Jastes Lekal acercándose a Luthadel. La banda debate planes de contingencia para una tercera fuerza sitiadora. Sazed advierte que las brumas mismas pueden representar un grave peligro.',
			},
			'woa-25': {
				title: 'El ataque fingido',
				description:
					'Straff lanza un ataque fingido contra las murallas de Luthadel para probar las defensas. Los soldados de Elend están mal preparados, pero el ataque se retira rápidamente.',
			},
			'woa-26': {
				title: 'Parlamento con el padre',
				description:
					'Elend cabalga hasta el campamento de Straff Venture para negociar, llevando a Vin como protectora. La reunión revela el desprecio de Straff por su hijo idealista.',
			},
			'woa-27': {
				title: 'Burlar a Straff',
				description:
					'Straff ordena a sus soldados matar a Elend durante la negociación, pero Elend farolea diciendo que Vin destruirá el campamento si él muere. La jugada funciona —Straff los deja marchar. De regreso a Luthadel, Elend recibe una nota devastadora: la Asamblea ha votado una moción de censura y ya no es rey.',
			},
			'woa-28': {
				title: 'Tramando diplomacia',
				description:
					'De vuelta en la Fortaleza Venture, Elend intenta enfrentar a los tres ejércitos entre sí —Straff, Cett y la horda koloss que se aproxima.',
			},
			'woa-31': {
				title: 'Canciller Penrod',
				description:
					'Elend llega a la Asamblea con toda su banda. Nomina a lord Penrod como Canciller y se dirige a la Asamblea sobre su reunión con Straff —invocando la reputación de Vin como elemento disuasorio. Se abren las nominaciones para un nuevo rey: Penrod, Elend y lord Cett, que aparece entre la multitud.',
			},
			'woa-32': {
				title: 'La jugada de Cett',
				description:
					'Lord Cett se dirige a la Asamblea, argumentando que su ejército y el de Elend combinados pueden resistir a los sitiadores. La Asamblea concede a Cett una fortaleza abandonada y mil soldados. Su hijo Gneorndin invita a Elend a parlamentar en una semana.',
			},
			'woa-33': {
				title: 'El pozo envenenado',
				description:
					'Elend investiga un caso de enfermedad masiva y descubre que uno de los pozos de la ciudad ha sido envenenado. Despacha a los soldados de Hammond para ayudar a los enfermos y comienza a buscar al saboteador.',
			},
			'woa-34': {
				title: 'Investigación y estrategia',
				description:
					'Elend trabaja en la biblioteca de la Fortaleza Venture con Hammond, Sazed, Tindwyl y el ex obligador Noorden, planeando la estrategia para la Asamblea. Sazed le aconseja centrarse en sus propias convicciones y no en la opinión popular.',
			},
			'woa-35': {
				title: 'Cenando con Cett',
				description:
					'Elend y Vin van a la Fortaleza Hasting a cenar con lord Cett. Discuten la deserción de Breeze y Allrianne, los planes de Cett para Luthadel y el alijo de atium desaparecido. Cett ofrece comida a cambio del atium pero Elend dice que no se ha encontrado.',
			},
			'woa-37': {
				title: 'Patrullando la muralla',
				description:
					'Elend y Hammond patrullan la muralla, discutiendo el deseo de Elend de seguir siendo rey para proteger a la gente de Luthadel. Elend tiene una idea sobre cómo conseguir suficientes votos para no ser reemplazado por la Asamblea.',
			},
			'woa-38': {
				title: 'Destituido',
				description:
					'Elend asiste a la Asamblea para la elección del rey, habiéndose unido a la Iglesia del Superviviente para ganar votos skaa. Los asesinos atacan durante la sesión —Vin los combate pero resulta gravemente herida. La Asamblea se reúne de nuevo en la mansión de Penrod, donde Penrod es elegido rey. Elend cede.',
			},
			'woa-40': {
				title: 'Junto al lecho de Vin',
				description:
					'Elend se sienta junto a la cama de hospital de Vin en la Fortaleza Venture, diciéndole que Penrod es el nuevo rey. Se estremece involuntariamente cuando ella lo toca, sacudido por la ferocidad con que mató a los asesinos.',
			},
			'woa-41': {
				title: 'Buscando consejo',
				description:
					'Elend visita a Sazed y Tindwyl en la Fortaleza Venture, reflexionando sobre sus fracasos para proteger Luthadel. Debaten por qué perdió el trono, pero ambos le aplauden por mantener sus ideales.',
			},
			'woa-42': {
				title: 'Misión a los koloss',
				description:
					'Elend y Hammond usan un pasadizo secreto para salir de Luthadel. Elend encuentra el ejército koloss de Jastes Lekal y le exige que se retire, pero Jastes insiste en que tiene el control. Elend apuñala a Jastes y lo usa como rehén para escapar, luego mata a un koloss y descubre que llevan moneda.',
			},
			'woa-44': {
				title: 'Encontrando a Vin',
				description:
					'Elend, Hammond y Spook discuten por qué Vin atacó la fortaleza de Cett. Hammond revela que Vin ha estado guardando secretos y trabajando con otro nacido de la bruma. OreSeur guía a Elend hasta Vin en la antigua guarida de Camon, donde ella habla de abandonar Luthadel por Terris.',
			},
			'woa-46': {
				title: 'Regreso de los koloss',
				description:
					'Elend regresa del campamento koloss habiendo fracasado en negociar —Jastes perdió el control de sus bestias. Los koloss atacarán de todos modos.',
			},
			'woa-49': {
				title: 'Partida por la Puerta de Estaño',
				description:
					'Mientras Elend se prepara para partir hacia el Pozo, Tindwyl le recrimina por abandonar a su pueblo. Él acepta entregar un paquete al Sínodo en Tathingdwen. Con Spook y Allrianne uniéndose, el grupo de Elend sale por la Puerta de Estaño, evadiendo al ejército de Straff con la ayuda de Vin.',
			},
			'woa-50': {
				title: 'El viaje al norte',
				description:
					'Elend, Vin y Spook levantan el campamento un día al norte de Luthadel, creyendo haber eludido a los exploradores de Straff. Spook siente algo siguiéndolos, y Vin lo identifica como el espíritu de la bruma.',
			},
			'woa-51': {
				title: 'Ejecutando a Jastes',
				description:
					'Los cinco hombres que seguían al grupo resultan ser Jastes Lekal, que abandonó a los koloss cuando su moneda falsa se quemó. Furioso porque Jastes dejó a las bestias arrasar Luthadel, Elend ejecuta a su viejo amigo. Cuando Spook revela que Sazed los engañó para que se fueran, el grupo decide regresar.',
			},
			'woa-52': {
				title: 'Dando la vuelta',
				description:
					'Mientras Vin corre por delante, Elend y Spook cabalgan con fuerza hacia Luthadel, incapaces de igualar su velocidad alomántica pero decididos a llegar a la ciudad sitiada.',
			},
			'woa-56': {
				title: 'Refugiados de Tathingdwen',
				description:
					'En el camino, Elend se encuentra con el espíritu de la bruma, que señala al norte. Él y Spook encuentran a un grupo de refugiados terrisanos huyendo de Tathingdwen, donde los Inquisidores de Acero masacraron al Sínodo. Elend los acompaña hacia Luthadel.',
			},
			'woa-57': {
				title: 'El regreso del Emperador',
				description:
					'Elend, Hammond y Spook entran en Luthadel entre una multitud de refugiados y se reúnen con Vin, quien le dice que ahora es Emperador. Dejando atrás sus dudas sobre gobernar, sigue a Vin hacia Kredik Shaw.',
			},
			'woa-58': {
				title: 'Al Pozo',
				description:
					'Elend desciende con Vin, Hammond y Spook a las cavernas bajo Kredik Shaw, encontrando un alijo de almacenamiento y un mapa metálico del Imperio Final. En el Pozo resplandeciente, recoge una pequeña cuenta de metal —luego el espíritu de la bruma lo apuñala en el vientre.',
			},
			'woa-59': {
				title: 'El Emperador nacido de la bruma',
				description:
					'Apuñalado y moribundo en el Pozo, Elend es salvado cuando Vin le fuerza a tragar la cuenta del metal del lord Legislador, transformándolo en nacido de la bruma.',
			},
			'woa-60': {
				title: 'Sobre la muralla',
				description:
					'Recién convertido en nacido de la bruma y confirmado Emperador del Dominio Central, Elend está junto a Vin sobre la muralla de Luthadel. Mientras ella se desespera por haber liberado lo que estaba aprisionado en el Pozo, él la tranquiliza diciéndole que sobrevivirán a lo que venga.',
			},
			'hoa-1': {
				title: 'Emperador en guerra',
				description:
					'Elend lidera sus ejércitos hacia Vetitan, ahora un emperador nacido de la bruma dirigiendo campañas militares para asegurar los alijos ocultos de suministros del lord Legislador.',
			},
			'hoa-3': {
				title: 'Asegurando el alijo',
				description:
					'Elend asegura la caverna de almacenamiento de Vetitan, encontrando comida y un mensaje en placa de metal advirtiendo sobre el peligro que Rashek aprisionó y la ubicación del alijo de Fadrex.',
			},
			'hoa-8': {
				title: 'El campamento del canal',
				description:
					'Elend explica a Fatren que exponer a los refugiados a las brumas es necesario —los supervivientes ahora están inmunizados. Él y Vin guían a los refugiados a un canal donde las fuerzas de Demoux están acampadas.',
			},
			'hoa-10': {
				title: 'Marchando al oeste',
				description:
					'Elend lidera su ejército al sur de Luthadel en marcha hacia Fadrex cuando Sazed, Breeze, Goradel y Allrianne se reúnen con ellos tras su misión diplomática.',
			},
			'hoa-12': {
				title: '¿Qué haría Kelsier?',
				description:
					'Elend convoca un consejo con Vin, Cett, Breeze, Allrianne, Hammond, Demoux y Sazed. Discuten las brumas invasoras, la escasez de alimentos y los planes para capturar los alijos. Elend propone exponer al ejército a las brumas para inmunizarlos —luego pregunta «¿Qué haría Kelsier?» para reavivar su esperanza.',
			},
			'hoa-15': {
				title: 'Debatiendo la exposición',
				description:
					'Elend y Hammond debaten los pros y contras de exponer a los soldados a las brumas mientras el ejército continúa su marcha hacia el oeste. Cuando el koloss Human causa problemas, Elend envía a Vin a encargarse de él.',
			},
			'hoa-17': {
				title: 'La exposición a la bruma',
				description:
					'Elend ordena exponer a sus soldados a las brumas en condiciones controladas para que queden inmunizados. Demoux lo confronta, pidiéndole que no hable en nombre del Superviviente a menos que sea un verdadero creyente. Elend observa cómo los soldados empiezan a enfermar, incluido el propio Demoux.',
			},
			'hoa-21': {
				title: 'El dieciséis por ciento',
				description:
					'Demoux sobrevive a su enfermedad. Elend confía a Vin que teme estar volviéndose despiadado como el lord Legislador. Noorden presenta informes de la enfermedad de la bruma; Vin le hace recalcular usando solo soldados nunca antes expuestos. El resultado: exactamente el dieciséis por ciento. Cuatro muestras independientes producen la misma proporción. Elend admite que el patrón es demasiado preciso para ignorarlo.',
			},
			'hoa-25': {
				title: 'El asedio de Fadrex',
				description:
					'El ejército de Elend llega a Fadrex y establece líneas de asedio. Inspecciona las formaciones rocosas naturales y la entrada como un cañón —esta ciudad será difícil de asaltar. Debate estrategia con Hammond, Cett y Vin: mantenerse vigilantes, enviar espías, sabotear suministros de comida, pero no asesinar a Yomen.',
			},
			'hoa-27': {
				title: 'Esperando a la exploradora',
				description:
					'Elend permanece en el campamento de asedio mientras Vin se infiltra sola en Fadrex. Confía en sus habilidades y espera que regrese con información que pueda evitar un asalto sangriento.',
			},
			'hoa-28': {
				title: 'El espíritu de la bruma y la profecía',
				description:
					'Vin regresa de explorar y le dice a Elend que ha sentido al Espíritu de la Bruma dentro de Fadrex —es mucho más débil que Ruina pero se le opone. Habla de su destino como Héroe de las Eras, pero Elend advierte que las profecías pueden haber sido corrompidas. Reafirman su confianza mutua. Vin propone un camino más audaz: colarse en uno de los bailes de Yomen y hablar con él directamente.',
			},
			'hoa-30': {
				title: 'El primer baile',
				description:
					'Elend se sorprende de que nadie objete a que él y Vin se pongan en peligro —y establece la línea de sucesión para lord Cett por si acaso. Viajan al baile en la Fortaleza Orielle, son anunciados y se separan para socializar antes de enfrentarse a Yomen directamente.',
			},
			'hoa-36': {
				title: 'Patrones de dieciséis',
				description:
					'Elend acepta el consejo de Cett de envenenar los pozos de agua de Fadrex pero se niega a matar inocentes. Un terremoto sacude el campamento. Demoux se recupera de su enfermedad pero pide ser relevado como general. Revela otra anomalía estadística: un dieciseisavo de los enfermos permanecen exactamente dieciséis días o mueren. Elend rechaza la dimisión y ordena a Demoux que aplique el razonamiento científico.',
			},
			'hoa-37': {
				title: 'La jugada de Yomen',
				description:
					'La incursión nocturna de Yomen resulta ser una distracción devastadora: mientras Vin perseguía a un misterioso nacido de la bruma, Yomen aniquiló la mitad de los veinte mil koloss de Elend. Transfiere el control de mil supervivientes a Vin —pero el asedio se ha vuelto mucho más desesperado.',
			},
			'hoa-40': {
				title: 'El tercer arte',
				description:
					'Elend, Hammond, Cett, Noorden y Demoux reconstruyen las pruebas: la hemalurgia —el tercer arte metálico— usa clavos para robar poderes. Los koloss están hechos de humanos. Elend ordena formar una nueva división con los soldados caídos de la bruma. Llegan noticias de que Penrod suplica ayuda desde Luthadel.',
			},
			'hoa-43': {
				title: 'Un duelo rechazado',
				description:
					'Elend asiste al segundo baile en el Cantón de Recursos, sabiendo que Vin se ha escabullido para encontrar el alijo. Desafía a Yomen a un duelo para resolver su disputa. Yomen se niega —estaría en desventaja fatal contra un nacido de la bruma. El verdadero propósito es ganar tiempo: Elend mantiene a Yomen debatiendo mientras Vin trabaja abajo.',
			},
			'hoa-44': {
				title: 'Electrum y atium',
				description:
					'Elend continúa debatiendo con Yomen hasta que uno de los espías incapacitados por Vin entra tambaleándose —delatándola. Desesperado por saber si Yomen es nacido de la bruma, Elend se abalanza y lo estrangula. Cuando Yomen no se resiste, Elend lo suelta —y Yomen lo apuñala con velocidad sobrenatural, confirmando que quema atium. Elend quema electrum y se retira.',
			},
			'hoa-44.2': {
				title: 'La nota',
				description:
					'De vuelta en el campamento, Elend espera durante largas horas el regreso de Vin. Llega una nota de Yomen —la ha capturado. El asedio ya no es por suministros. Es personal.',
			},
			'hoa-47': {
				title: 'Perdiendo a Vin',
				description:
					'Elend está en las brumas preocupado por Vin pero manteniendo la fe en ella. Lord Cett le dice que el asedio está fracasando. Estalla una pelea entre los soldados caídos de la bruma y otras tropas. Elend la detiene y ordena a Demoux marchar la división de caídos hacia Luthadel para ayudar a Penrod.',
			},
			'hoa-51': {
				title: 'La jugada de duraluminio',
				description:
					'Elend usa Empujes de acero para viajar hacia una aldea atacada por koloss. Lucha solo a través de ellos, luego realiza un Tirón emocional potenciado con duraluminio —tomando el control de treinta mil koloss en un solo momento abrumador.',
			},
			'hoa-55': {
				title: 'Arrodillado en la ceniza',
				description:
					'Elend regresa al campamento con treinta mil nuevos koloss y se derrumba en la ceniza, listo para rendirse. El Espíritu de la Bruma aparece y se arrodilla a su lado. Elend lo interroga con preguntas de sí o no y aprende que las brumas no están matando gente, que no quiere que ataque Fadrex, y que Ruina es vulnerable. El encuentro lo revitaliza.',
			},
			'hoa-61': {
				title: 'El asalto matutino',
				description:
					'Elend llega al campamento con treinta mil nuevos koloss y le dice a Hammond que Vin sigue viva —sus koloss vinculados no han perdido el control. Hammond informa que Luthadel y muchas aldeas están devastadas. Con la vida de Vin en juego, Elend ordena planear un ataque sorpresa para la mañana.',
			},
			'hoa-65': {
				title: 'Retirada a Fadrex',
				description:
					'Elend pregunta a Hammond si atacar la ciudad es lo correcto —no lo es— y ordena recoger el campamento para volver a Luthadel. Antes de poder actuar, Ruina le arrebata el control de todos los koloss. Vin llega y ordena una retirada desesperada hacia Ciudad Fadrex, forjando una alianza temporal con Yomen.',
			},
			'hoa-67': {
				title: 'Observando la tormenta',
				description:
					'Elend y Yomen observan desde dentro de Fadrex cómo un enorme ejército de koloss se reúne fuera. Un terremoto gigantesco sacude la ciudad. Vin le dice a Elend que debe ir a Luthadel a por el alijo de atium.',
			},
			'hoa-70': {
				title: 'El secreto de las brumas',
				description:
					'Elend recorre la ciudad con Yomen y visita la enfermería. Viendo a un niño enfermo de la bruma agonizando, se da cuenta de que la experiencia refleja las palizas usadas para Despertar alomantes. Da un vial alomántico a un soldado caído —y el hombre puede quemar metales. Las brumas no están matando gente; las están Despertando como alomantes.',
			},
			'hoa-73': {
				title: 'Las brumas se mueven',
				description:
					'Elend y Hammond notan un cambio repentino en las brumas —en lugar de su caótico remolino habitual, fluyen con propósito, todas hacia Luthadel. El ejército koloss que estaban combatiendo se retira abruptamente, también dirigiéndose a la capital. Algo fundamental ha cambiado.',
			},
			'hoa-74': {
				title: 'El Vidente revelado',
				description:
					'Elend y Yomen discuten la repentina desaparición de las brumas y el calor opresivo. Elend ordena a todos en Fadrex refugiarse en las cavernas de almacenamiento. Yomen presiona su propia cuenta de atium en la mano de Elend y revela que es un Vidente —un brumoso de atium.',
			},
			'hoa-74.2': {
				title: 'Volando hacia Luthadel',
				description:
					'Elend deja Fadrex y comienza el viaje a Luthadel. Viaja como Vin le enseñó —dejando caer una herradura, Empujándose de ella para lanzarse al aire, y luego Tirando de otra ancla. Vuela sobre el paisaje de ceniza hacia el este, llevando la cuenta de atium de Yomen.',
			},
			'hoa-76': {
				title: 'Rumbo a Luthadel',
				description:
					'Aún cruzando el Dominio Central hacia Luthadel, Elend avanza por el páramo de ceniza —soltando una herradura, Empujándose de ella, Tirando de otra ancla, devorando kilómetros como Vin le enseñó.',
			},
			'hoa-76.2': {
				title: 'Entrando en Luthadel',
				description:
					'Elend entra en Luthadel desde el oeste, llegando a la capital que una vez gobernó como rey. Muy por encima, invisible para él, Vin —recién ascendida como Conservación— observa al hombre que ama llegar a la ciudad, solo y decidido.',
			},
			'hoa-77': {
				title: 'Ruinas de Kredik Shaw',
				description:
					'Elend busca entre las ruinas de Kredik Shaw —Vin lo demolió con un solo Empuje al Ascender. Registra los escombros llamando su nombre, pero Luthadel está vacía. La gente ha desaparecido en las cavernas de almacenamiento, y Vin no está entre las piedras rotas.',
			},
			'hoa-77.2': {
				title: 'El susurro en el viento',
				description:
					'Elend registra la Fortaleza Venture y encuentra el cadáver del rey Penrod. Intenta deducir adónde ha ido la gente de Luthadel. Entonces lo oye: el viento, susurrando su nombre. Vin emplea un esfuerzo monumental para pronunciar una sola palabra a través de la interferencia de Ruina. «Oeste», susurra. «Pozos». Elend monta y cabalga hacia el oeste, hacia los Pozos de Hathsin.',
			},
			'hoa-79': {
				title: 'Llegada a los Pozos',
				description:
					'Elend llega a los Pozos de Hathsin y encuentra a Demoux y los soldados caídos de la bruma ya allí. Cientos de miles de refugiados se han reunido —vinieron porque Kelsier les dijo que lo hicieran. Elend ordena a los caídos consumir metales alománticos.',
			},
			'hoa-80': {
				title: 'Los refugiados',
				description:
					'Demoux informa que varios cientos de miles de refugiados se han reunido en los Pozos —y un ejército koloss marcha hacia ellos. Cuando Elend pregunta por qué vinieron, Demoux responde: porque Kelsier les dijo. Elend oye su nombre susurrado en el viento —la voz de Vin— y lo sigue a través del campamento hacia el Hogar.',
			},
			'hoa-80.2': {
				title: 'El tesoro de atium',
				description:
					'Guiado por el susurro de Vin, Elend encuentra la entrada a las cavernas kandra. Dentro descubre a Sazed luchando solo para proteger el atium. Sazed le dice que el tesoro está aquí: un inmenso alijo de atium, el cuerpo mismo de Ruina. Elend ordena a todos —refugiados, soldados, kandra— refugiarse en las cavernas.',
			},
			'hoa-81': {
				title: 'El último discurso',
				description:
					'Sazed revela la verdad: el atium es el cuerpo de Ruina. Demoux informa que sus soldados caídos no mostraron habilidad alomántica —hasta que Elend le da una cuenta de atium y lo ve quemarla. Todos son Videntes. Elend da un discurso a su pequeña banda, se pone su capa de brumas y los lidera cargando contra el ejército koloss.',
			},
			'hoa-81.2': {
				title: 'Muriendo bien',
				description:
					'Elend quema una vasta cantidad de atium durante horas, los Videntes a su lado abriéndose paso entre miles de koloss. Cuando se le acaba el peltre, de algún modo aún puede quemarlo —alza la vista y ve a Vin. Entonces Marsh aparece, también quemando atium. Elend quema duraluminio y atium juntos en un momento final de perfecta claridad: ve el mundo como lo haría un dios, lo comprende todo. Clava su espada en el cuello de Marsh mientras el hacha de Marsh lo alcanza en el pecho. Marsh reclama la victoria —pero Elend susurra que está equivocado. Hasta la última cuenta de atium ha sido quemada. Ruina nunca recuperará su cuerpo. Elend muere sonriendo.',
			},
			'hoa-83': {
				title: 'Reunidos en la muerte',
				description:
					'El cuerpo de Elend es encontrado junto al de Vin en el campo de flores —el primer regalo de Sazed al mundo rehecho— en paz tras todas sus luchas.',
			},
		},
		marsh: {
			...enData.movements.marsh,
			// ── El Imperio Final ───────────────────────────────────────────
			'tfe-7': {
				title: 'El hermano reticente',
				description:
					'Marsh llega a la tienda de Clubs, hermano mayor de Kelsier y líder rebelde por derecho propio. Se une al plan de la banda a regañadientes.',
			},
			'tfe-10.2': {
				title: 'El mitin del almacén',
				description:
					'Marsh asiste al mitin secreto del almacén con la banda, viendo a su hermano Kelsier predicar la revolución ante los trabajadores skaa reunidos.',
			},
			'tfe-20': {
				title: 'Enseñando a Vin',
				description:
					'Marsh llega a la finca Renoux en Fellise para enseñar a Vin a buscar —usar bronce para detectar a otros alomantes quemando metales, su tipo, y cómo distinguir brumosos de nacidos de la bruma—, así como detalles adicionales de alomancia. También le enseña sobre el cobre y cómo los ahumadores pueden ocultar los pulsos alománticos.',
			},
			'tfe-27': {
				title: 'La infiltración en el Ministerio',
				description:
					'Marsh se reúne con Kelsier y Vin en un edificio abandonado de los Recodos, luciendo los tatuajes de un obligador de bajo rango del Cantón de Inquisición. Se ha infiltrado realmente en el Ministerio. Revela que el Ministerio coloca aplacadores en las regiones skaa bajo aplacamiento constante, escondidos por ahumadores. Confirma también que los Inquisidores pueden morir de vejez.',
			},
			'tfe-30': {
				title: 'Desaparición',
				description:
					'Marsh enmudece, sus comunicaciones cesan al desaparecer en los niveles más profundos del Cantón de Inquisición. La banda teme lo peor.',
			},
			'tfe-32': {
				title: 'El cuerpo',
				description:
					'Kelsier y Vin encuentran el cuerpo de Marsh, desangrado por completo, una cáscara sin vida. Su carta, hallada luego en la tienda de Clubs, explica que los Inquisidores probablemente le encontrarían. La banda lo llora. Pero el cadáver mutilado que encuentran no es lo que parece.',
			},
			'tfe-38': {
				title: 'El Inquisidor',
				description:
					'Marsh aparece durante el asalto final a Kredik Shaw: vivo, transformado con once clavos metálicos —dos por los ojos, ocho en el pecho, uno en la espalda uniéndolos—. Mata al Inquisidor Kar arrancándole un clavo del cuello y revela que ha matado a todos los demás Inquisidores.',
			},
			'tfe-39': {
				title: 'Once clavos',
				description:
					'Marsh se alza con Sazed y Vin sobre un edificio junto al barrio skaa. Habla de su supervivencia y transformación: once clavos, el horrendo proceso y cómo resistió. También les cuenta sobre los kandra, y que el que suplantó a lord Renoux ahora reconoce a Vin como su ama.',
			},
			'woa-7': {
				title: 'El guía del Conventículo',
				description:
					'Marsh aparece en la aldea de Sazed en el Dominio Oriental y se ofrece a guiarlo al Conventículo de Seran —una fortaleza Inquisidora donde pueden hallarse respuestas sobre el Héroe de las Eras.',
			},
			'woa-9': {
				title: 'Viajando con Sazed',
				description:
					'Marsh viaja con Sazed hacia el Conventículo de Seran. Su comportamiento se vuelve más errático y retraído durante el viaje mientras la sutil influencia de Ruina se afianza.',
			},
			'woa-12': {
				title: 'Abandono',
				description:
					'Marsh abandona abruptamente a Sazed en el Conventículo y desaparece en la naturaleza, impulsado por fuerzas que cada vez le resulta más difícil resistir. La influencia de Ruina crece.',
			},
			'woa-57': {
				title: 'Títere de Ruina',
				description:
					'Marsh aparece en Kredik Shaw bajo el control total de Ruina. Diciéndole a Sazed que desearía saber por qué debe matarlo, Empuja alománticamente los brazaletes de metal de Sazed y estrella al Guardián contra la pared mientras Vin desciende hacia el Pozo.',
			},
			'woa-58': {
				title: 'Derribado',
				description:
					'Marsh golpea a Sazed —rompiéndole huesos y clavándole anillos de metal en la carne— pero Sazed activa esas mismas mentes de metal para contraatacar. Cuando el Inquisidor se dispone a rematarlo, Hammond golpea el cráneo de Marsh con una vara de duelo, dejándolo inconsciente.',
			},
			'hoa-0': {
				title: 'Creando Inquisidores',
				description:
					'Bajo el control de Ruina, Marsh realiza oscuros rituales hemalúrgicos en Tathingdwen, creando nuevos Inquisidores a partir de feruquimistas y alomantes capturados.',
			},
			'hoa-6': {
				title: 'Liderando koloss',
				description:
					'Marsh comanda un creciente ejército de koloss en nombre de Ruina, reuniendo fuerzas para la batalla final.',
			},
			'hoa-13': {
				title: 'Peón de Ruina',
				description:
					'Marsh permanece inmóvil en un campamento koloss, reflexionando sobre Kelsier y su papel en los planes de Ruina. Decide cesar sus luchas inútiles y fingir conformidad, esperando adormecer a Ruina en una falsa sensación de seguridad y frustrar sus planes en un momento crítico.',
			},
			'hoa-34': {
				title: 'Cerca de Tyrian',
				description:
					'Marsh opera cerca del Monte Tyrian, creando clavos hemalúrgicos de prisioneros capturados y construyendo el ejército de Inquisidores de Ruina a la sombra del monte de ceniza. Atraviesa un pueblo hambriento y crea un clavo de bronce atravesando el corazón de un Ahumador.',
			},
			'hoa-42': {
				title: 'El clavado de Penrod',
				description:
					'Marsh se infiltra sigilosamente en Luthadel, reflexionando sobre su propia y horrible transformación en Inquisidor. Ruina toma el control de su cuerpo y ataca al rey Penrod en la Fortaleza Venture, atravesándole el corazón y dejando el clavo incrustado en su pecho —concediendo a Ruina un conducto directo al gobierno de la capital.',
			},
			'hoa-63': {
				title: 'Confrontando a Vin',
				description:
					'Marsh llega al Cantón de Recursos y encuentra a Vin cautiva. Se inclina ante Ruina y anuncia que no está allí para proteger Fadrex —solo para llevarse el alijo de atium. Cuando Yomen revela que el alijo contiene apenas siete cuentas, Ruina grita de rabia. Yomen suplica ayuda a Marsh pero este se niega con frialdad: el lord Legislador está muerto y fue un sirviente improductivo.',
			},
			'hoa-65': {
				title: 'La exigencia del atium',
				description:
					'Marsh agarra a Vin y exige la ubicación del atium, pero ella se niega. Marsh ordena a Yomen atacar al ejército de Elend y revela el plan del lord Legislador: los koloss e Inquisidores fueron creados como una fuerza que Ruina algún día tomaría. Mientras Marsh la zarandea, Vin roba un vial de metal de su fajín y se quita el pendiente —un clavo hemalúrgico— empujándolo con duraluminio en su frente. Marsh cae.',
			},
			'hoa-65.2': {
				title: 'El hermano del Emperador',
				description:
					'Marsh se recupera del clavo en la frente. Vin lo golpea con un Aplacamiento potenciado con duraluminio, pero Marsh resiste —creciendo en tamaño usando fuerza feruquímica y estrangulándola. Vin recurre a las brumas y Empuja sus emociones, viendo brevemente a través de sus ojos. Abrumado, Marsh huye cuando Vin rompe el control de Ruina.',
			},
			'hoa-69': {
				title: 'El destino del mensajero',
				description:
					'Marsh intercepta y mata al capitán Goradel, que llevaba el mensaje urgente de Spook para Vin. Lee la nota —una advertencia escrita en acero que Ruina no puede alterar— y, turbado, parte hacia Luthadel para enfrentarse a Vin en Kredik Shaw.',
			},
			'hoa-72': {
				title: 'El pendiente',
				description:
					'Marsh observa cómo trece Inquisidores atacan a Vin en Kredik Shaw. Cuando es abrumada, Ruina obliga a Marsh a encargarse de la tortura. Rompe sus brazos y piernas, luego sus dedos uno a uno, exigiendo la ubicación del atium. Pero una parte de su mente se resiste, pensando en cómo Kelsier la trató como la hija que él y Mare nunca tuvieron. Repara en su pendiente —recordando la advertencia de Spook sobre el metal que atraviesa el cuerpo. Sin pensarlo, más allá del control de Ruina, Marsh arranca el pendiente de su oreja. La voz de Ruina se corta. Las brumas se precipitan en Vin.',
			},
			'hoa-73': {
				title: 'Sin rendirse',
				description:
					'Marsh observa cómo Vin —impulsada por las brumas como una reserva infinita de metal— masacra a los doce Inquisidores restantes con pasmosa facilidad. Demuele el propio Kredik Shaw. Solo queda Marsh. No siente miedo —solo un feroz y callado orgullo. Hizo lo correcto. Ruina ruge impotente en el fondo de su mente. Vin le arranca uno de sus clavos oculares pero no lo mata. Desaparece antes de poder rematarlo, dejando a Marsh vivo entre las ruinas.',
			},
			'hoa-81': {
				title: 'Matando a Elend',
				description:
					'Marsh, impulsado por Ruina, ataca a Elend durante la Batalla de Hathsin. Ambos queman atium en un duelo furioso. Elend quema duraluminio y atium juntos en un destello final de perspicacia divina, clavando su espada en el cuello de Marsh mientras el hacha lo alcanza en el pecho. Marsh se cura y decapita al emperador —pero Elend muere sonriendo, habiendo quemado todo el atium que Ruina buscaba. Cuando Vin se sacrifica para destruir a Ruina momentos después, la fuerza que controló a Marsh durante años simplemente desaparece. Se desploma entre los muertos, su cuerpo siendo suyo de nuevo por primera vez desde el Conventículo.',
			},
		},
		spook: {
			...enData.movements.spook,
			// ── El Imperio Final ───────────────────────────────────────────
			'tfe-7': {
				title: 'El joven vigía de estaño',
				description:
					'Spook, el joven sobrino de Clubs, trabaja como vigía y mensajero para la banda en la carpintería, hablando en una cerrada jerga callejera del este.',
			},
			'tfe-9': {
				title: 'Carreras de mensajero',
				description:
					'Spook lleva mensajes entre la tienda de Clubs en Luthadel y la finca Renoux en Fellise; sus sentidos potenciados por el estaño lo convierten en un explorador excepcional.',
			},
			'tfe-16': {
				title: 'Velando a Vin',
				description:
					'Lestibournes vela a Vin herida en la tienda de Clubs, presente cuando despierta de las heridas sufridas en la misión de reconocimiento de Kredik Shaw. Cuenta que tiene un nombre nuevo de Kelsier: Spook.',
			},
			'tfe-22': {
				title: 'El pañuelo',
				description:
					'Spook visita la finca Renoux en Fellise y encuentra a Vin leyendo el diario del lord Legislador. Le dice que Dockson vino a buscar más armas y, ruborizado y nervioso, le entrega un pañuelo antes de salir corriendo. Sazed explica después a Vin que así un joven caballero señala su deseo de cortejar seriamente a una dama.',
			},
			'tfe-24': {
				title: 'Noche en la tienda de Clubs',
				description:
					'Spook comparte una copa nocturna con Kelsier, Ham y Clubs en la tienda de Clubs mientras la banda discute el estado de la misión.',
			},
			'tfe-26': {
				title: 'Las ejecuciones',
				description:
					'Spook irrumpe en la tienda de Clubs para anunciar ejecuciones en la Plaza de la Fuente. Acompaña a la banda a la plaza, donde presencian la brutal ejecución pública de mujeres y niños skaa, su sangre vaciada en la fuente.',
			},
			'tfe-32': {
				title: 'Vigilancia en la azotea',
				description:
					'Spook vigila desde la azotea de la tienda de Clubs con Vin, enseñándole trucos del estaño. Le explica que no se trata solo de potenciar los sentidos, sino de filtrar lo importante y no dejarse distraer por el resto.',
			},
			'tfe-33': {
				title: 'Vigía de guardia',
				description:
					'Cuando la banda va a la Plaza de la Fuente, Spook es avistado en uno de los carros de ejecución junto a lord Renoux, capturado por el Ministerio.',
			},
			'tfe-34': {
				title: 'Testigo del sacrificio',
				description:
					'Spook observa desde la multitud cómo Kelsier lucha y muere en la Plaza de la Fuente, un suceso que marcará el resto de su vida. El sacrificio del Superviviente transforma la comprensión de Spook sobre lo que significa servir a una causa.',
			},
			'tfe-38': {
				title: 'La revolución',
				description:
					'Spook lucha junto a la banda durante la revolución final, ayudando a coordinar el levantamiento skaa desde las calles de Luthadel.',
			},
			'woa-6': {
				title: 'El explorador creciente',
				description:
					'Spook regresa a Luthadel de su misión de exploración y se reúne con la banda en la Fortaleza Venture. Reanuda su papel patrullando la ciudad y observando a los ejércitos circundantes.',
			},
			'woa-11': {
				title: 'Reunión de la banda',
				description:
					'Spook está presente en la Fortaleza Venture mientras la banda se reagrupa tras la llegada del segundo ejército de Cett fuera de Luthadel.',
			},
			'woa-13': {
				title: 'Consejo de guerra',
				description:
					'Spook asiste al consejo de guerra de Elend, donde la banda discute la estrategia para lidiar con dos ejércitos sitiadores.',
			},
			'woa-20': {
				title: 'En el consejo de guerra',
				description:
					'Spook está presente mientras la banda discute el plan de Elend para parlamentar con Straff Venture.',
			},
			'woa-23': {
				title: 'El regreso de Sazed',
				description:
					'Spook está presente cuando Sazed regresa e informa a la banda sobre el ejército koloss, las muertes de la bruma y el peligro de una tercera fuerza sitiadora.',
			},
			'woa-25': {
				title: 'Escolta de compras',
				description:
					'Spook acompaña a Vin, Tindwyl, Allrianne y OreSeur en una salida de compras por la calle Kenton —por supuesto contra su voluntad. Tambores de alarma interrumpen la salida cuando el ejército de Straff lanza un ataque fingido.',
			},
			'woa-44': {
				title: 'Encontrando a Vin',
				description:
					'Spook se une a Elend y Hammond para discutir el devastador ataque en solitario de Vin contra las fuerzas de Cett. OreSeur los guía hasta Vin en la antigua guarida de Camon.',
			},
			'woa-49': {
				title: 'Grupo de exilio',
				description:
					'Spook abandona Luthadel por la Puerta de Estaño con Vin, Elend y Allrianne, escabulléndose del ejército de Straff mientras el grupo cabalga al norte hacia las montañas de Terris.',
			},
			'woa-50': {
				title: 'Algo en las brumas',
				description:
					'Levantando el campamento al norte de la ciudad, Spook es el primero en sentir que algo sigue al grupo a través de las brumas. Vin le dice que es el espíritu de la bruma.',
			},
			'woa-51': {
				title: 'Cinco hombres siguiéndolos',
				description:
					'Los sentidos mejorados de Spook detectan a cinco hombres acechando el campamento —el grupo de Jastes Lekal. Tras la ejecución de Jastes, Spook revela el secreto que oyó: Sazed los engañó para que se fueran y así sobrevivieran al ataque. El grupo regresa a Luthadel.',
			},
			'woa-52': {
				title: 'Cabalgando de vuelta',
				description:
					'Incapaz de igualar la velocidad de Vin, Spook cabalga con fuerza junto a Elend hacia la ciudad sitiada, desesperado por llegar antes de que los koloss destruyan todo lo que dejaron atrás.',
			},
			'woa-56': {
				title: 'Los refugiados terrisanos',
				description:
					'Spook viaja con Elend cuando se encuentran con una columna de refugiados terrisanos huyendo de Tathingdwen. Cuando el espíritu de la bruma se aparece a Elend, la llegada de Spook lo ahuyenta. Juntos escoltan a los refugiados hacia Luthadel.',
			},
			'woa-57': {
				title: 'Dentro de la ciudad',
				description:
					'Spook entra en Luthadel entre los refugiados con Elend y Hammond, caminando por las calles abarrotadas para reunirse con Vin, quien los guía hacia Kredik Shaw y el Pozo oculto.',
			},
			'woa-58': {
				title: 'La caverna',
				description:
					'Spook desciende con Vin, Elend y Hammond a la caverna llena de humo bajo Kredik Shaw, donde el estanque resplandeciente del Pozo de la Ascensión espera en el corazón de la oscuridad.',
			},
			'hoa-14': {
				title: 'Ojos de estaño',
				description:
					'Spook quema estaño constantemente a pesar de los peligros, impulsado por la culpa de la muerte de Clubs y el deseo de seguir el ejemplo de Vin. Merodeando por los canales secos de Urteau de noche, sus sentidos mejorados le permiten ver con la luz de las estrellas como si fuera de día.',
			},
			'hoa-14.2': {
				title: 'El consejo del Ciudadano',
				description:
					'Spook toma la iniciativa de espiar las reuniones de Quellion el Ciudadano en su mansión apropiada, y observa en secreto a Beldre, la hermana del Ciudadano.',
			},
			'hoa-16': {
				title: 'Testigo de la atrocidad',
				description:
					'Con un paño sobre los ojos para tolerar la luz del sol, Spook holgazanea junto a un canal en el mercado haciéndose pasar por un mendigo ciego. Observa a los guardias de Quellion encerrar a nobles en un edificio y prenderle fuego.',
			},
			'hoa-16.2': {
				title: 'Apuñalado entre la multitud',
				description:
					'Spook sigue al Ciudadano cuando sale a dirigirse a la gente del pueblo. Habla con Beldre sin ser visto, condenando los asesinatos de su hermano. Descubierto, lucha contra tres guardias alomantes —incluyendo un bruto y un lanzamonedas— hasta que una espada lo atraviesa y pierde el conocimiento.',
			},
			'hoa-19': {
				title: 'Una voz en las llamas',
				description:
					'Spook recupera la conciencia atrapado en un edificio en llamas. Una voz —que dice ser Kelsier— lo guía hasta unos viales alománticos. Bebe y descubre que ahora puede quemar peltre, ganando la fuerza para escapar de las llamas.',
			},
			'hoa-23': {
				title: 'Sueños de fiebre',
				description:
					'Spook yace en su escondite, febril por sus heridas, reviviendo el día en que Clubs lo acogió de niño. El sueño de fiebre difumina pasado y presente mientras se recupera de la puñalada.',
			},
			'hoa-26': {
				title: 'Rumores en la noche',
				description:
					'Maravillado por su supervivencia y su nueva habilidad de bruto, Spook nota una astilla de metal en su piel —«Kelsier» le dice que la deje. Visita una taberna donde oye a la gente hablar de él como miembro de la banda de Kelsier.',
			},
			'hoa-29': {
				title: 'El lago oculto',
				description:
					'Spook se encuentra con el carruaje de Sazed en las calles de Urteau, vestido de soldado. Guía a Sazed, Breeze, Allrianne y Goradel al edificio del Cantón de Inquisición como su nueva base. Bajo él, revela el alijo de suministros del lord Legislador —y el lago subterráneo oculto.',
			},
			'hoa-31': {
				title: 'Una cuestión de fe',
				description:
					'Spook se une a Sazed y Breeze para discutir el desvío del agua y cómo deponer a Quellion. Le dice a Sazed que cree que Kelsier los está vigilando —y pregunta si hay alguna religión que apoye tal cosa.',
			},
			'hoa-35': {
				title: 'Enfrentando a Durn',
				description:
					'Spook irrumpe en la guarida de Durn y confronta al informante sobre los rumores que se difunden. Durn revela que intenta socavar al Ciudadano. La voz de Kelsier insta a Spook a ir tras Quellion.',
			},
			'hoa-38': {
				title: 'Las salidas secretas',
				description:
					'Spook observa a los skaa excavar un edificio quemado y encuentra solo nueve cráneos entre los escombros de diez prisioneros. Se da cuenta de que hay salidas secretas de los edificios —un conocimiento que podría salvar vidas.',
			},
			'hoa-41': {
				title: 'Superviviente de las Llamas',
				description:
					'Usando su conocimiento de las salidas secretas, Spook ataca y mata a los guardias, pero queda atrapado en el edificio en llamas con una niña pequeña. Escapa a través de las llamas llevándola mientras Allrianne agita a la multitud. La gente de Urteau comienza a llamarlo el «Superviviente de las Llamas».',
			},
			'hoa-46': {
				title: 'El jardín de Beldre',
				description:
					'Spook visita a Beldre en su jardín, diciéndole que es miembro de la banda de Kelsier y que depondrá al Ciudadano. La voz de Kelsier le ordena matar a Quellion y a su hermana —pero Spook se niega. Beldre grita pidiendo guardias y Spook se retira.',
			},
			'hoa-46.2': {
				title: 'Restaurando los canales',
				description:
					'Spook regresa al Cantón de Inquisición tras un terremoto. Pide a Sazed que haga fluir el agua por los canales de nuevo —una petición que requeriría que el Guardián volviera a usar sus mentes de metal y su erudición.',
			},
			'hoa-49': {
				title: 'La súplica de Beldre',
				description:
					'Spook explica cómo Quellion llegó al poder: enviando gente a las brumas y declarando puros a los supervivientes. Beldre llega suplicando que no maten a su hermano. Deciden retenerla como rehén mientras difunden rumores de que ha desertado.',
			},
			'hoa-53': {
				title: 'Promesas y planes',
				description:
					'Spook habla con Beldre, quien revela que es medio skaa. Él le habla de su vida en la banda de Kelsier y promete salvar la ciudad sin dañar a Quellion. Luego sale a las calles.',
			},
			'hoa-53.2': {
				title: 'El circuito de tabernas',
				description:
					'Spook promete a Durn contratos comerciales y un título a cambio de limpiar los escombros de los canales antes de que se vuelvan a llenar. Juntos visitan tabernas por todo Urteau, donde Spook refuerza su reputación como el Superviviente de las Llamas.',
			},
			'hoa-56': {
				title: 'El plan final',
				description:
					'Spook trabaja en un plan para exponer las habilidades alománticas secretas de Quellion. Encuentra a Sazed en las obras del canal y le dice que tiene fe en que incluso si él fracasa, alguien los vigila y hará que las cosas salgan bien.',
			},
			'hoa-58': {
				title: 'Héroe de Urteau',
				description:
					'Sazed instruye a Spook sobre el mecanismo de desvío de agua. En el discurso de Quellion, estalla un disturbio. Beldre es revelada como lanzamonedas. Spook ve a Quellion reaccionando también a la voz de Kelsier. En un momento de terrible claridad, Spook comprende: Kelsier es Ruina, los clavos son hemalurgia. Arranca un clavo de bronce del brazo de Quellion y se quita su propia astilla de metal. Supera su terror a las llamas, se precipita al interior del edificio en llamas, activa el mecanismo y se desploma —salvando Urteau.',
			},
			'hoa-62': {
				title: 'El coste de la victoria',
				description:
					'Spook yace inconsciente en el hospital, gravemente quemado. Sazed vela por él. Beldre habla de cómo su hermano fue cambiado por el poder y que Spook es un héroe para la ciudad.',
			},
			'hoa-64': {
				title: 'El mensaje en acero',
				description:
					'Aún recuperándose de sus quemaduras, Spook oye una voz que le dice que envíe una advertencia a Vin. Escribe el mensaje en acero —el único medio que Ruina no puede alterar— y lo confía al capitán Goradel.',
			},
			'hoa-73': {
				title: 'A las cavernas',
				description:
					'Allrianne alerta a Breeze sobre un comportamiento extraño en las brumas —fluyen al unísono hacia Luthadel. Spook lo ve también y comprende que algo está sucediendo. Le dice a Breeze que reúna a todos en Urteau inmediatamente en las cavernas de almacenamiento.',
			},
			'hoa-83': {
				title: 'Un nuevo mundo',
				description:
					'Spook emerge de las cavernas al mundo rehecho por Sazed —un campo de flores y hierba verde bajo un cielo azul. Encuentra los cuerpos de Vin y Elend, y un libro escrito por Sazed explicando todo lo ocurrido, incluyendo que Sazed convirtió a Spook en nacido de la bruma a petición de Kelsier.',
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

	// ── Chapter seasons (book → chapter → season/year)
	chapterSeasons: {
		tfe: {
			0: { season: 'Primavera', year: '1021 IF' },
			1: { season: 'Primavera', year: '1021 IF' },
			2: { season: 'Primavera', year: '1021 IF' },
			3: { season: 'Primavera', year: '1021 IF' },
			4: { season: 'Primavera', year: '1021 IF' },
			5: { season: 'Primavera', year: '1021 IF' },
			6: { season: 'Primavera', year: '1021 IF' },
			7: { season: 'Primavera tardía', year: '1021 IF' },
			8: { season: 'Verano', year: '1021 IF' },
			9: { season: 'Verano', year: '1021 IF' },
			10: { season: 'Verano', year: '1021 IF' },
			11: { season: 'Verano', year: '1021 IF' },
			12: { season: 'Verano', year: '1021 IF' },
			13: { season: 'Verano', year: '1021 IF' },
			14: { season: 'Verano', year: '1021 IF' },
			15: { season: 'Verano', year: '1021 IF' },
			16: { season: 'Verano', year: '1021 IF' },
			17: { season: 'Verano', year: '1021 IF' },
			18: { season: 'Verano', year: '1021 IF' },
			19: { season: 'Finales de verano', year: '1021 IF' },
			20: { season: 'Finales de verano', year: '1021 IF' },
			21: { season: 'Otoño', year: '1021 IF' },
			22: { season: 'Otoño', year: '1021 IF' },
			23: { season: 'Otoño', year: '1021 IF' },
			24: { season: 'Otoño', year: '1021 IF' },
			25: { season: 'Finales de otoño', year: '1021 IF' },
			26: { season: 'Finales de otoño', year: '1021 IF' },
			27: { season: 'Invierno', year: '1021 IF' },
			28: { season: 'Invierno', year: '1021 IF' },
			29: { season: 'Invierno', year: '1021 IF' },
			30: { season: 'Invierno', year: '1021 IF' },
			31: { season: 'Invierno', year: '1021 IF' },
			32: { season: 'Invierno', year: '1022 IF' },
			33: { season: 'Principios de primavera', year: '1022 IF' },
			34: { season: 'Principios de primavera', year: '1022 IF' },
			35: { season: 'Principios de primavera', year: '1022 IF' },
			36: { season: 'Principios de primavera', year: '1022 IF' },
			37: { season: 'Principios de primavera', year: '1022 IF' },
			38: { season: 'Principios de primavera', year: '1022 IF' },
			39: { season: 'Primavera', year: '1022 IF' },
		},
		woa: {
			1: { season: 'Otoño', year: '1023 IF' },
			2: { season: 'Otoño', year: '1023 IF' },
			3: { season: 'Otoño', year: '1023 IF' },
			4: { season: 'Otoño', year: '1023 IF' },
			5: { season: 'Otoño', year: '1023 IF' },
			6: { season: 'Otoño', year: '1023 IF' },
			7: { season: 'Finales de otoño', year: '1023 IF' },
			8: { season: 'Otoño', year: '1023 IF' },
			9: { season: 'Finales de otoño', year: '1023 IF' },
			10: { season: 'Otoño', year: '1023 IF' },
			11: { season: 'Principios de invierno', year: '1023 IF' },
			12: { season: 'Finales de otoño', year: '1023 IF' },
			13: { season: 'Principios de invierno', year: '1023 IF' },
			14: { season: 'Principios de invierno', year: '1023 IF' },
			15: { season: 'Invierno', year: '1023 IF' },
			16: { season: 'Invierno', year: '1023 IF' },
			17: { season: 'Invierno', year: '1023 IF' },
			19: { season: 'Invierno', year: '1023 IF' },
			20: { season: 'Invierno', year: '1023 IF' },
			21: { season: 'Invierno', year: '1023 IF' },
			22: { season: 'Invierno', year: '1023 IF' },
			23: { season: 'Invierno', year: '1023 IF' },
			24: { season: 'Invierno', year: '1023 IF' },
			25: { season: 'Invierno', year: '1023 IF' },
			26: { season: 'Invierno', year: '1023 IF' },
			27: { season: 'Invierno', year: '1023 IF' },
			28: { season: 'Invierno', year: '1024 IF' },
			29: { season: 'Invierno', year: '1024 IF' },
			30: { season: 'Invierno', year: '1024 IF' },
			31: { season: 'Invierno', year: '1024 IF' },
			32: { season: 'Invierno', year: '1024 IF' },
			33: { season: 'Invierno', year: '1024 IF' },
			34: { season: 'Invierno', year: '1024 IF' },
			35: { season: 'Invierno', year: '1024 IF' },
			36: { season: 'Invierno', year: '1024 IF' },
			37: { season: 'Invierno', year: '1024 IF' },
			38: { season: 'Invierno', year: '1024 IF' },
			40: { season: 'Finales de invierno', year: '1024 IF' },
			41: { season: 'Finales de invierno', year: '1024 IF' },
			42: { season: 'Finales de invierno', year: '1024 IF' },
			43: { season: 'Finales de invierno', year: '1024 IF' },
			44: { season: 'Finales de invierno', year: '1024 IF' },
			45: { season: 'Finales de invierno', year: '1024 IF' },
			46: { season: 'Finales de invierno', year: '1024 IF' },
			47: { season: 'Finales de invierno', year: '1024 IF' },
			49: { season: 'Finales de invierno', year: '1024 IF' },
			50: { season: 'Finales de invierno', year: '1024 IF' },
			51: { season: 'Finales de invierno', year: '1024 IF' },
			52: { season: 'Finales de invierno', year: '1024 IF' },
			53: { season: 'Finales de invierno', year: '1024 IF' },
			54: { season: 'Finales de invierno', year: '1024 IF' },
			55: { season: 'Finales de invierno', year: '1024 IF' },
			56: { season: 'Invierno', year: '1024 IF' },
			57: { season: 'Invierno', year: '1024 IF' },
			58: { season: 'Invierno', year: '1024 IF' },
			59: { season: 'Invierno', year: '1024 IF' },
			60: { season: 'Invierno', year: '1024 IF' },
		},
		hoa: {
			0: { season: 'Primavera', year: '1026 IF' },
			1: { season: 'Primavera', year: '1026 IF' },
			3: { season: 'Primavera', year: '1026 IF' },
			4: { season: 'Verano', year: '1026 IF' },
			5: { season: 'Verano', year: '1026 IF' },
			6: { season: 'Verano', year: '1026 IF' },
			8: { season: 'Verano', year: '1026 IF' },
			10: { season: 'Verano', year: '1026 IF' },
			12: { season: 'Verano', year: '1026 IF' },
			13: { season: 'Otoño', year: '1026 IF' },
			14: { season: 'Otoño', year: '1026 IF' },
			15: { season: 'Otoño', year: '1026 IF' },
			16: { season: 'Otoño', year: '1026 IF' },
			17: { season: 'Otoño', year: '1026 IF' },
			18: { season: 'Otoño', year: '1026 IF' },
			19: { season: 'Otoño', year: '1026 IF' },
			21: { season: 'Otoño', year: '1026 IF' },
			22: { season: 'Otoño', year: '1026 IF' },
			23: { season: 'Principios de invierno', year: '1026 IF' },
			24: { season: 'Invierno', year: '1026 IF' },
			25: { season: 'Otoño', year: '1026 IF' },
			26: { season: 'Principios de invierno', year: '1026 IF' },
			27: { season: 'Otoño', year: '1026 IF' },
			28: { season: 'Otoño', year: '1026 IF' },
			29: { season: 'Principios de invierno', year: '1026 IF' },
			30: { season: 'Otoño', year: '1026 IF' },
			31: { season: 'Principios de invierno', year: '1026 IF' },
			34: { season: 'Invierno', year: '1026 IF' },
			35: { season: 'Invierno', year: '1026 IF' },
			36: { season: 'Invierno', year: '1026 IF' },
			37: { season: 'Invierno', year: '1026 IF' },
			38: { season: 'Invierno', year: '1026 IF' },
			40: { season: 'Invierno', year: '1026 IF' },
			41: { season: 'Invierno', year: '1026 IF' },
			42: { season: 'Invierno', year: '1026 IF' },
			43: { season: 'Invierno', year: '1026 IF' },
			44: { season: 'Invierno', year: '1026 IF' },
			45: { season: 'Invierno', year: '1026 IF' },
			46: { season: 'Invierno', year: '1026 IF' },
			47: { season: 'Invierno', year: '1026 IF' },
			48: { season: 'Invierno', year: '1026 IF' },
			49: { season: 'Invierno', year: '1026 IF' },
			50: { season: 'Invierno', year: '1026 IF' },
			51: { season: 'Invierno', year: '1026 IF' },
			53: { season: 'Invierno', year: '1026 IF' },
			54: { season: 'Finales de invierno', year: '1026 IF' },
			55: { season: 'Finales de invierno', year: '1026 IF' },
			56: { season: 'Invierno', year: '1026 IF' },
			57: { season: 'Finales de invierno', year: '1026 IF' },
			58: { season: 'Primavera', year: '1027 IF' },
			59: { season: 'Primavera', year: '1027 IF' },
			60: { season: 'Finales de invierno', year: '1026 IF' },
			61: { season: 'Finales de invierno', year: '1026 IF' },
			62: { season: 'Verano', year: '1027 IF' },
			63: { season: 'Finales de invierno', year: '1026 IF' },
			64: { season: 'Verano', year: '1027 IF' },
			65: { season: 'Finales de invierno', year: '1026 IF' },
			66: { season: 'Verano', year: '1027 IF' },
			67: { season: 'Primavera', year: '1027 IF' },
			68: { season: 'Primavera', year: '1027 IF' },
			69: { season: 'Verano', year: '1027 IF' },
			70: { season: 'Primavera', year: '1027 IF' },
			71: { season: 'Otoño', year: '1027 IF' },
			72: { season: 'Verano', year: '1027 IF' },
			73: { season: 'Verano', year: '1027 IF' },
			74: { season: 'Otoño', year: '1027 IF' },
			75: { season: 'Otoño', year: '1027 IF' },
			76: { season: 'Otoño', year: '1027 IF' },
			77: { season: 'Otoño', year: '1027 IF' },
			78: { season: 'Otoño', year: '1027 IF' },
			79: { season: 'Otoño', year: '1027 IF' },
			80: { season: 'Otoño', year: '1027 IF' },
			81: { season: 'Otoño', year: '1027 IF' },
			82: { season: 'Otoño', year: '1027 IF' },
			83: { season: 'Otoño', year: '1027 IF' },
			84: { season: 'Otoño', year: '1027 IF' },
		},
	},
};
