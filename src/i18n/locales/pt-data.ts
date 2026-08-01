/**
 * Portuguese (Brazilian) data translations.
 * Sources: Leya / Trama / Saída de Emergência editions.
 */
import type { DataTranslations } from '../types';
import { enData } from './en-data';

export const ptData: DataTranslations = {
	...enData,

	books: {
		tfe: { title: 'O Império Final', year: '1021-1022 FE', confidence: 'verified' },
		woa: { title: 'O Poço da Ascensão', year: '1022-1024 FE', confidence: 'verified' },
		hoa: { title: 'O Herói das Eras', year: '1024-1025 FE', confidence: 'verified' },
	},

	characters: {
		vin: {
			name: 'Vin',
			title: 'Nascida da Bruma',
			description:
				'Uma poderosa Nascida da Bruma que ascendeu das ruas de Luthadel para se tornar uma das figuras mais importantes da história de Scadrial.',
			confidence: 'verified',
			fieldConfidence: { description: 'unconfirmed' },
			titleProgression: {
				'tfe-1': 'Menina de rua',
				'tfe-9': 'Aprendiz de Nascida da Bruma',
				'tfe-12': 'Lady Valette Renoux',
				'tfe-17': 'Nascida da Bruma',
				'tfe-38': 'Assassina do Senhor Soberano',
				'woa-1': 'Herdeira do Sobrevivente',
				'woa-47': 'Protetora de Luthadel',
				'hoa-1': 'Imperatriz',
				'hoa-79': 'Receptáculo de Preservação',
			},
			titleProgressionConfidence: {
				'tfe-1': 'unconfirmed',
				'tfe-9': 'unconfirmed',
				'tfe-12': 'probable',
				'tfe-17': 'verified',
				'tfe-38': 'unconfirmed',
				'woa-1': 'unconfirmed',
				'woa-47': 'unconfirmed',
				'hoa-1': 'unconfirmed',
				'hoa-79': 'unconfirmed',
			},
		},
		kelsier: {
			name: 'Kelsier',
			title: 'O Sobrevivente',
			description: 'O carismático líder da rebelião de Luthadel que escapou dos Poços de Hathsin.',
			confidence: 'verified',
			fieldConfidence: { description: 'unconfirmed' },
			titleProgression: {
				'tfe-0': 'Skaa misterioso',
				'tfe-1': 'O Sobrevivente de Hathsin',
				'tfe-11': 'Líder do bando',
				'tfe-21': 'Destruidor dos Poços',
				'tfe-34': 'Mártir da Rebelião',
			},
			titleProgressionConfidence: {
				'tfe-0': 'unconfirmed',
				'tfe-1': 'probable',
				'tfe-11': 'unconfirmed',
				'tfe-21': 'unconfirmed',
				'tfe-34': 'unconfirmed',
			},
			secretHistoryTitles: {
				'woa-1': 'Sombra Cognitiva',
				'hoa-1': 'Campeão de Preservação',
			},
		},
		sazed: {
			name: 'Sazed',
			title: 'Guardião terrisano',
			description:
				'Um Guardião terrisano que preserva o conhecimento de todas as religiões e desempenha um papel crucial no destino do mundo.',
			confidence: 'verified',
			fieldConfidence: { description: 'unconfirmed' },
			titleProgression: {
				'tfe-9': 'Mordomo terrisano',
				'tfe-22': 'Guardião das religiões',
				'woa-1': 'Erudito e Guardião',
				'woa-12': 'Buscador da verdade',
				'woa-52': 'Defensor de Luthadel',
				'hoa-1': 'Embaixador do Novo Império',
				'hoa-50': 'Erudito em crise',
				'hoa-82': 'Herói das Eras',
			},
			titleProgressionConfidence: {
				'tfe-9': 'unconfirmed',
				'tfe-22': 'unconfirmed',
				'woa-1': 'unconfirmed',
				'woa-12': 'unconfirmed',
				'woa-52': 'unconfirmed',
				'hoa-1': 'unconfirmed',
				'hoa-50': 'unconfirmed',
				'hoa-82': 'probable',
			},
		},
		elend: {
			name: 'Elend Venture',
			title: 'Imperador',
			description:
				'O filho idealista da Casa Venture que se transforma de um nobre intelectual num poderoso líder.',
			confidence: 'verified',
			fieldConfidence: { description: 'unconfirmed' },
			titleProgression: {
				'tfe-12': 'Nobre filósofo',
				'tfe-24': 'Nobre dissidente',
				'tfe-38': 'Líder inesperado',
				'woa-1': 'Rei da Dominância Central',
				'woa-35': 'Rei deposto',
				'woa-58': 'Imperador Nascido da Bruma',
				'hoa-1': 'Imperador do Novo Império',
				'hoa-54': 'Imperador guerreiro',
			},
			titleProgressionConfidence: {
				'tfe-12': 'unconfirmed',
				'tfe-24': 'unconfirmed',
				'tfe-38': 'unconfirmed',
				'woa-1': 'unconfirmed',
				'woa-35': 'unconfirmed',
				'woa-58': 'unconfirmed',
				'hoa-1': 'unconfirmed',
				'hoa-54': 'unconfirmed',
			},
		},
		marsh: {
			name: 'Marsh',
			title: 'Inquisidor',
			description:
				'O irmão de Kelsier que sacrificou muito pela rebelião e carrega um fardo pesado.',
			confidence: 'verified',
			fieldConfidence: { description: 'unconfirmed' },
			titleProgression: {
				'tfe-7': 'Infiltrado rebelde',
				'tfe-27': 'Espião do Ministério',
				'tfe-38': 'Inquisidor de Aço',
				'woa-4': 'Inquisidor relutante',
				'woa-57': 'Peão de Ruína',
				'hoa-0': 'Mão de Ruína',
				'hoa-79': 'Olhos de Aço',
			},
			titleProgressionConfidence: {
				'tfe-7': 'unconfirmed',
				'tfe-27': 'unconfirmed',
				'tfe-38': 'probable',
				'woa-4': 'unconfirmed',
				'woa-57': 'unconfirmed',
				'hoa-0': 'unconfirmed',
				'hoa-79': 'unconfirmed',
			},
		},
		spook: {
			name: 'Fantasma',
			title: 'Brumante de estanho',
			description:
				'Um jovem brumante que cresce de um tímido membro do bando a um herói por mérito próprio.',
			confidence: 'verified',
			fieldConfidence: { description: 'unconfirmed' },
			titleProgression: {
				'tfe-7': 'Jovem olho-de-estanho',
				'woa-1': 'Batedor',
				'hoa-14': 'Infiltrado',
				'hoa-38': 'Sábio de estanho',
				'hoa-58': 'Herói de Urteau',
				'hoa-83': 'Sobrevivente das chamas',
			},
			titleProgressionConfidence: {
				'tfe-7': 'unconfirmed',
				'woa-1': 'unconfirmed',
				'hoa-14': 'unconfirmed',
				'hoa-38': 'unconfirmed',
				'hoa-58': 'unconfirmed',
				'hoa-83': 'unconfirmed',
			},
		},
	},

	locations: {
		luthadel: {
			name: 'Luthadel',
			description:
				'A capital do Império Final e sede do poder do Senhor Soberano por mil anos. A única cidade autorizada a ter muralhas de pedra.',
			confidence: 'verified',
		},
		'lake-luthadel': {
			name: 'Lago Luthadel',
			description: 'Corpo de água doce a leste da capital, escurecido pelas cinzas.',
			confidence: 'verified',
		},
		'pits-hathsin': {
			name: 'Poços de Hathsin',
			description:
				'Uma Perpendicularidade que se manifesta como fissuras irregulares no solo onde o atium cristaliza. O mapa é definido por fendas verticais estreitas e afiadas que se retorcem na crosta. Prisioneiros rastejavam por estes túneis claustrofóbicos em busca de geodos. Kelsier descobriu o Décimo Primeiro Metal (Malatium) numa câmara oculta nas profundezas da rede de fissuras antes de destruir os cristais e acabar com a produção de atium.',
			safeDescription:
				'Uma brutal mina-prisão a nordeste de Luthadel, definida por fendas verticais estreitas e afiadas que se aprofundam na crosta. Prisioneiros condenados rastejam por essas fissuras claustrofóbicas em busca dos raros geodos de atium que se formam no interior. Poucos sobrevivem por muito tempo.',
			confidence: 'verified',
		},
		fellise: {
			name: 'Fellise',
			description:
				'Refúgio de veraneio da nobreza a oeste de Luthadel, onde a Casa Renoux possuía uma propriedade.',
			confidence: 'verified',
		},
		holstep: {
			name: 'Holstep',
			description:
				'Cidade-guarnição a oeste de Luthadel, ponto de controlo para rotas comerciais e militares.',
			confidence: 'verified',
		},
		'ashmount-tyrian': {
			name: 'Tyrian',
			description:
				'Durante a ascensão de Ruína, Marsh testemunhou uma enorme erupção de lava das suas encostas após criar um cravo hemalúrgico nas proximidades, e a sua queda de cinzas cada vez mais densa assinalava a deterioração acelerada do mundo.',
			safeDescription:
				'O monte de cinzas mais próximo de Luthadel, visível das muralhas da cidade. As suas erupções constantes cobrem a Dominância Central com as camadas mais espessas de cinza, necessitando de equipas de limpeza constantes.',
			confidence: 'verified',
		},
		urteau: {
			name: 'Urteau',
			description:
				'Famosa pelos seus "canais secos" — canais que foram drenados pelo Senhor Soberano para servir como estradas afundadas. Bastião do Cidadão (Quellion) durante o Colapso.',
			safeDescription: 'A capital da Dominância do Norte e sede ancestral da Casa Venture.',
			confidence: 'verified',
		},
		'ashmount-kalling': {
			name: 'Kalling',
			description: 'Vulcão principal da Dominância do Norte, com cinzas mais escuras e abrasivas.',
			confidence: 'verified',
		},
		'fadrex-city': {
			name: 'Fadrex',
			description:
				'Ascendeu à proeminência após a morte do Senhor Soberano. Depende de formações rochosas naturais (plataformas de "cremnol") para defesa em vez de muralhas. Abriga uma das Cavernas de Armazenamento secretas do Senhor Soberano.',
			safeDescription:
				'Um importante centro comercial na Dominância do Oeste, fortificado por formações rochosas naturais.',
			confidence: 'verified',
		},
		tremredare: {
			name: 'Tremredare',
			description:
				'Antiga capital da Dominância do Oeste, abandonada após o Colapso por falta de defesas.',
			confidence: 'verified',
		},
		'ashmount-morag': {
			name: 'Morag',
			description: 'Vulcão massivo dominando o horizonte ocidental do império.',
			confidence: 'verified',
		},
		chardees: {
			name: 'Chardees',
			description: 'Sede ancestral da Casa Hasting, oculta na cartografia oficial.',
			confidence: 'verified',
		},
		austrex: {
			name: 'Austrex',
			description: 'Capital da Dominância do Sul e centro do celeiro do império.',
			confidence: 'verified',
		},
		vetitan: {
			name: 'Vetitan',
			description:
				'Construída diretamente sobre uma das Cavernas de Armazenamento do Senhor Soberano. A arquitetura adaptou-se à intensa queda de cinzas com expansões subterrâneas e um traçado centrado no Ministério. Na época de O Herói das Eras, a cidade está a ser consumida por acumulações de cinza, com os cidadãos a viver nos andares superiores enquanto os inferiores se enchem de cinza.',
			safeDescription:
				'Uma cidade na Dominância do Norte com arquitetura adaptada à intensa queda de cinzas.',
			confidence: 'verified',
		},
		'ashmount-zerinah': {
			name: 'Zerinah',
			description: 'O monte de cinzas mais meridional, regulador térmico do hemisfério sul.',
			confidence: 'verified',
		},
		conventical: {
			name: 'Conventículo de Seran',
			description:
				'Uma escadaria íngreme em espiral desce até à verdade: o Salão dos Servos (valas comuns), os dormitórios dos Inquisidores e a Câmara de Hemalurgia com as suas mesas de pedra, canais de drenagem e abóbada de cravos. Nas profundezas, Sazed descobriu a inscrição na placa de aço de Kwaan escondida numa alcova secreta. É aqui que os Inquisidores são criados.',
			safeDescription:
				'Uma fortaleza vertical esculpida num penhasco perto da fronteira norte. Os níveis superiores funcionam como templo padrão do Ministério (capela, alojamentos).',
			confidence: 'verified',
		},
		tathingdwen: {
			name: 'Tathingdwen',
			description: 'Capital da Dominância de Terris, situada nas montanhas do norte.',
			confidence: 'verified',
		},
		'terris-mountains': {
			name: 'Montanhas de Terris',
			description:
				'A localização do Poço da Ascensão original antes de o Senhor Soberano alterar a geografia do mundo.',
			safeDescription: 'Uma cordilheira escarpada onde o povo terrisano foi subjugado.',
			confidence: 'verified',
		},
		'tincut-fastness': {
			name: 'Fortaleza de Tincut',
			description: 'Onde o Sínodo e os refugiados se retiraram durante o colapso do Império.',
			safeDescription: 'Uma fortaleza escondida nas montanhas de Terris.',
			confidence: 'probable',
		},
		'high-villages': {
			name: 'Aldeias das Terras Altas',
			description:
				'Rede de aldeias terrisanas escondidas nas montanhas, ligadas por túneis subterrâneos.',
			confidence: 'probable',
		},
		'imperial-canal': {
			name: 'Canal Imperial',
			description:
				'Uma artéria artificial escavada na terra por decreto do Senhor Soberano, ligando Tathingdwen a Luthadel para a extração de recursos terrisanos e inserção de soldados imperiais. A própria infraestrutura que ligava o império tornou-se a via da sua destruição quando os exércitos koloss usaram a estrada do canal para atacar.',
			safeDescription:
				'Não um rio natural, mas uma artéria artificial escavada na terra por decreto do Senhor Soberano. Liga Tathingdwen a norte diretamente a Luthadel, permitindo comércio e transporte através do império. Um monumento à engenharia imperial.',
			confidence: 'probable',
		},
		'kandra-homeland': {
			name: 'Terra Natal dos Kandra',
			description:
				'Cavernas profundas sob os Poços de Hathsin, lar do povo kandra que guarda os maiores segredos do Senhor Soberano, incluindo o Trust.',
			safeDescription:
				'Um complexo subterrâneo oculto sob os Poços de Hathsin. A sua verdadeira natureza e propósito são desconhecidos do mundo exterior.',
			confidence: 'verified',
		},
		'ashmount-torinost': {
			name: 'Torinost',
			description: 'Pico massivo a norte da Dominância do Oeste.',
			confidence: 'verified',
		},
		'ashmount-faleast': {
			name: 'Faleast',
			description:
				'Principal relevo da Dominância do Leste, com cinzas mais abrasivas devido à sílica.',
			confidence: 'verified',
		},
		'ashmount-doriel': {
			name: 'Doriel',
			description: 'Monte de cinzas a sul de Luthadel, perto da costa do Mar do Sul.',
			confidence: 'verified',
		},
		'statlin-city': {
			name: 'Statlin',
			description:
				'Âncora sul da rede de Cavernas de Armazenamento. Contém a Caverna de Armazenamento 2 com mantimentos de emergência.',
			safeDescription: 'Uma cidade na Dominância do Sul.',
			confidence: 'probable',
		},
		'tresting-plantation': {
			name: 'Plantação Tresting',
			description:
				'Plantação skaa do lorde Tresting com centenas de trabalhadores e uma guarnição.',
			confidence: 'probable',
		},
		'lekal-city': {
			name: 'Cidade Lekal',
			description:
				'Cidade-fortaleza da Casa Lekal onde toda a cidade é uma extensão da propriedade nobre.',
			confidence: 'verified',
		},
		mantiz: {
			name: 'Mantiz',
			description:
				'Cidade no norte da Dominância do Oeste com quatro grandes mansões e acumulação severa de cinzas.',
			confidence: 'verified',
		},
		'channerel-river': {
			name: 'Rio Channerel',
			description: 'Artéria fluvial principal do império, vital para o comércio e transporte.',
			confidence: 'verified',
		},
		'burnlands-west': {
			name: 'Terras Queimadas do Oeste',
			description: 'Deserto inabitável na fronteira ocidental do império, demasiado perto do sol.',
			confidence: 'verified',
		},
		'burnlands-east': {
			name: 'Terras Queimadas do Leste',
			description: 'Deserto inabitável na fronteira oriental do império.',
			confidence: 'verified',
		},
		'arguois-caverns': {
			name: 'Cavernas de Arguois',
			description:
				'Usadas pelo exército rebelde de Kelsier como base oculta, estas cavernas abrigaram milhares de soldados skaa que treinavam para a revolução.',
			safeDescription:
				'Uma rede de grutas calcárias nas montanhas entre Luthadel e os Poços de Hathsin.',
			confidence: 'verified',
		},
		garthwood: {
			name: 'Garthwood',
			description:
				'Um assentamento na Dominância do Leste cujas aldeias circundantes estiveram entre as primeiras a sofrer a doença das brumas que se espalharia pelo império.',
			safeDescription:
				'Um assentamento na Dominância do Leste onde Sazed viajou para ensinar religiões suprimidas aos skaa libertados.',
			confidence: 'probable',
		},
		'straffs-camp': {
			name: 'Acampamento de Straff',
			description: 'Acampamento militar de Straff Venture a norte de Luthadel durante o cerco.',
			confidence: 'probable',
		},
		'koloss-camp': {
			name: 'Acampamento dos Koloss',
			description:
				'O acampamento do exército koloss perto de Luthadel durante o cerco de 1024 IF. A tentativa desastrosa de Jastes Lekal de comprar a lealdade koloss com moedas de madeira levou as criaturas a lançar um ataque devastador contra a cidade.',
			safeDescription:
				'Um grande acampamento de forças koloss perto de Luthadel, a sua presença uma ameaça constante durante o cerco.',
			confidence: 'probable',
		},
		longsfollow: {
			name: 'Longsfollow',
			description: 'Povoação nos desfiladeiros da Dominância do Oeste.',
			confidence: 'probable',
		},
		chakatah: {
			name: 'Chakatah',
			description: 'Pequena aldeia mineira na Dominância do Oeste.',
			confidence: 'probable',
		},
		'north-seran': {
			name: 'Norte de Seran',
			description: 'Território próximo do Conventículo de Seran.',
			confidence: 'probable',
		},
		'river-seran': {
			name: 'Rio Seran',
			description: 'Via aquática meridional usada pelo Ministério para transporte de materiais.',
			confidence: 'probable',
		},
		urbene: {
			name: 'Urbene',
			description: 'Entreposto do Ministério para comboios de cereais rumo à capital.',
			confidence: 'probable',
		},
		erlac: {
			name: 'Erlac',
			description: 'Guarnição a sudoeste de Luthadel que patrulha as rotas para a cidade.',
			confidence: 'probable',
		},
		'valtroux-city-central': {
			name: 'Valtroux',
			description:
				'Albergava um exército permanente de 5.000 soldados que intercetaram e massacraram o exército rebelde de Yeden perto da cidade de Holstep, demonstrando a capacidade do Senhor Soberano de projetar força militar rápida.',
			safeDescription: 'Uma importante cidade de guarnição localizada a noroeste de Luthadel.',
			confidence: 'probable',
		},
		'haverfrex-cannery-central': {
			name: 'Haverfrex',
			description:
				'Serviu como o principal nó de abastecimento para o exército de Lorde Ashweather Cett durante o Cerco de Luthadel, proporcionando a resistência logística necessária para uma presença militar de longo prazo.',
			safeDescription:
				'Um ponto de passagem industrial na Dominância Central conhecido pela sua fábrica de conservas em grande escala.',
			confidence: 'probable',
		},
		'cetts-camp': {
			name: 'Acampamento de Cett',
			description:
				'O acampamento militar de Lorde Ashweather Cett a noroeste de Luthadel durante o cerco.',
			confidence: 'probable',
		},
		'western-coast': {
			name: 'Costa Ocidental',
			description:
				'A costa ocidental do Império Final onde as terras habitadas dão lugar a um oceano cinzento infinito do Reino Cognitivo. Kelsier alcançou esta margem desolada após semanas a correr para oeste, apenas para encontrar Ruína à sua espera.',
			safeDescription:
				'A desolada margem ocidental do Império Final onde o continente termina e o oceano começa. Escassamente habitada e raramente visitada, as suas costas marcam a fronteira do mundo conhecido.',
			confidence: 'probable',
		},
		'ire-fortress': {
			name: 'Fortaleza dos Ire',
			description:
				'Uma imponente e resplandecente fortaleza dos Ire construída no Reino Cognitivo muito além da margem ocidental de Scadrial. Construída com pedra branca que pulsa com uma luz interior, rodeada de estranhas árvores como que de vidro e alimentada por um conduto de Investidura pura.',
			safeDescription:
				'Uma misteriosa fortaleza vislumbrada em relatos do mundo além da morte, cuja natureza e propósito são desconhecidos dos vivos.',
			confidence: 'probable',
		},
	},

	cities: {
		luthadel: {
			name: 'Luthadel',
			description:
				'A capital do Império Final e centro cultural sob o governo do Senhor Soberano. Única cidade com muralhas artificiais. Construída em simetria radial em torno de Kredik Shaw, que se ergue diretamente sobre o Poço da Ascensão. Oito portões nomeados com os metais alomânticos.',
			confidence: 'verified',
		},
		urteau: {
			name: 'Urteau',
			description:
				'A maior cidade da Dominância do Norte e lar ancestral da Casa Venture. Definida pelos seus canais secos — amplos canais drenados que servem como ruas rebaixadas. A água foi desviada para um lago subterrâneo oculto. Sem muralhas por decreto do Senhor Soberano.',
			confidence: 'verified',
		},
		fadrex: {
			name: 'Fadrex',
			description:
				'Centro comercial da Dominância do Oeste, fortificado por formações rochosas de cremnol que servem como muralhas naturais. Contém uma das cavernas secretas de armazenamento do Senhor Soberano.',
			confidence: 'verified',
		},
	},

	cityLandmarks: {
		luthadel: {
			'kredik-shaw': {
				name: 'Kredik Shaw',
				description:
					'O palácio do Senhor Soberano, a "Colina das Mil Torres". Construído diretamente sobre o Poço da Ascensão.',
				confidence: 'verified',
			},
			'iron-gate': {
				name: 'Portão do Ferro',
				description: 'Portão norte, em direção a Urteau e à Dominância do Norte.',
				confidence: 'verified',
			},
			'steel-gate': {
				name: 'Portão do Aço',
				description: 'Portão noroeste, em direção aos Poços de Hathsin.',
				confidence: 'verified',
			},
			'pewter-gate': {
				name: 'Portão do Estanho',
				description: 'Portão nordeste de Luthadel.',
				confidence: 'verified',
			},
			'zinc-gate': {
				name: 'Portão do Zinco',
				description: 'Portão sudeste de Luthadel.',
				confidence: 'verified',
			},
			'brass-gate': {
				name: 'Portão do Latão',
				description: 'Portão sul, em direção a Fellise e à Dominância do Sul.',
				confidence: 'verified',
			},
			'copper-gate': {
				name: 'Portão do Cobre',
				description: 'Portão sudoeste, perto do bairro industrial.',
				confidence: 'verified',
			},
			'bronze-gate': {
				name: 'Portão do Bronze',
				description: 'Portão oeste, em direção ao Rio Channerel.',
				confidence: 'verified',
			},
			'keep-venture': {
				name: 'Mansão Venture',
				description:
					'Fortaleza da Casa Venture. Base de operações de Elend e local de bailes da nobreza.',
				confidence: 'verified',
			},
			'keep-elariel': {
				name: 'Mansão Elariel',
				description: 'Sede da Casa Elariel, uma das Grandes Casas de Luthadel.',
				confidence: 'verified',
			},
			'keep-hasting': {
				name: 'Mansão Hasting',
				description: 'Próxima do palácio; caiu cedo na guerra das casas.',
				confidence: 'verified',
			},
			'clubs-shop': {
				name: 'Oficina do Clubs',
				description:
					'Oficina de carpintaria que serviu como base de operações da equipa de Kelsier.',
				confidence: 'verified',
			},
			'camons-safehouse': {
				name: 'Refúgio de Camon',
				description: 'Refúgio inicial nos bairros de lata onde Vin foi recrutada por Kelsier.',
				confidence: 'verified',
			},
			'fountain-square': {
				name: 'Praça da Fonte',
				description:
					'Local de execuções públicas e da morte de Kelsier. Renomeada Praça do Sobrevivente.',
				confidence: 'verified',
			},
			'lake-luthadel': {
				name: 'Lago Luthadel',
				description: 'Grande corpo de água doce a leste das muralhas.',
				confidence: 'verified',
			},
			'canton-of-finance': {
				name: 'Cantão das Finanças',
				description: 'Sede do Ministério do Aço para as finanças do império.',
				confidence: 'verified',
			},
			'skaa-hovels': {
				name: 'Casebres skaa',
				description: 'Os bairros miseráveis dos skaa onde operam os gangues.',
				confidence: 'verified',
			},
			'well-of-ascension': {
				name: 'Poço da Ascensão',
				description:
					'A fonte de poder oculta sob Kredik Shaw, onde o poder se acumula a cada 1024 anos.',
				confidence: 'verified',
			},
			'tin-gate-north': {
				name: 'Portão do Estanho (Norte)',
				description: 'A zona do portão nordeste.',
				confidence: 'verified',
			},
			'assembly-hall': {
				name: 'Sala da Assembleia',
				description: 'Edifício onde o parlamento democrático de Elend se reuniu durante o cerco.',
				confidence: 'probable',
			},
			'keep-tekiel': {
				name: 'Mansão Tekiel',
				description: 'Fortaleza da Casa Tekiel, alvo da campanha de assassinatos de Kelsier.',
				confidence: 'verified',
			},
			'luthadel-garrison': {
				name: 'Guarnição de Luthadel',
				description: 'Campo de treino militar e casernas da cidade.',
				confidence: 'probable',
			},
			'warehouse-district': {
				name: 'Bairro dos Armazéns',
				description: 'Bairro industrial junto aos canais onde a equipa armazenava armas.',
				confidence: 'probable',
			},
			'canton-inquisition': {
				name: 'Cantão da Inquisição',
				description: 'Base principal dos Inquisidores de Aço, temida por todos.',
				confidence: 'verified',
			},
			'canton-resource': {
				name: 'Cantão dos Recursos',
				description: 'Centro administrativo da economia imperial.',
				confidence: 'verified',
			},
			'canton-orthodoxy': {
				name: 'Cantão da Ortodoxia',
				description: 'Centro religioso responsável pela pureza do culto do Senhor Soberano.',
				confidence: 'verified',
			},
			'keep-lekal': {
				name: 'Mansão Lekal',
				description: 'Uma das grandes mansões da Casa Lekal, com as suas torres e vitrais.',
				confidence: 'verified',
			},
			'hotel-district': {
				name: 'Bairro dos Hotéis',
				description: 'Zona sofisticada para nobres visitantes das dominâncias exteriores.',
				confidence: 'probable',
			},
			'commercial-district': {
				name: 'Bairro Comercial',
				description: 'Centro de comércio onde as casas nobres negociavam os seus contratos.',
				confidence: 'probable',
			},
			'industrial-district': {
				name: 'Bairro Industrial',
				description: 'Zona de forjas, moinhos e oficinas junto ao canal.',
				confidence: 'probable',
			},
			'ahlstrom-square': {
				name: 'Praça Ahlstrom',
				description: 'Praça pública importante de Luthadel.',
				confidence: 'probable',
			},
			'south-bridge': {
				name: 'Ponte Sul',
				description: 'Ponto de passagem nas vias aquáticas da cidade.',
				confidence: 'probable',
			},
			'the-twists': {
				name: 'Os Meandros',
				description:
					'Bairro labiríntico dos bairros de lata, refúgio do submundo skaa e da equipa de Kelsier.',
				confidence: 'probable',
			},
			sootwarrens: {
				name: 'As Tocas de Fuligem',
				description: 'Um dos bairros mais miseráveis, coberto de cinzas.',
				confidence: 'probable',
			},
			'the-cracks': {
				name: 'As Fendas',
				description: 'Sector degradado de alta densidade populacional.',
				confidence: 'probable',
			},
			'aspen-row': {
				name: 'Fileira dos Álamos',
				description: 'Rua residencial para trabalhadores qualificados e criados da nobreza.',
				confidence: 'probable',
			},
			blockstreet: {
				name: 'Rua dos Blocos',
				description: 'Bairro residencial denso em grelha para skaa.',
				confidence: 'probable',
			},
			'kenton-street': {
				name: 'Rua Kenton',
				description:
					'Uma rua comercial movimentada em Luthadel onde os mercadores vendem de artigos domésticos a animais exóticos.',
				confidence: 'probable',
			},
		},
		urteau: {
			'ministry-canton': {
				name: 'Cantão da Inquisição',
				description:
					'Sede do Ministério construída sobre a terceira caverna de armazenamento com um lago subterrâneo.',
				confidence: 'verified',
			},
			marketpit: {
				name: 'Fossa do Mercado',
				description:
					'O mais largo dos canais secos, servindo de boulevard principal e mercado central.',
				confidence: 'verified',
			},
			'spooks-hideout': {
				name: 'Esconderijo do Espião',
				description: 'A "Casa em Chamas" usada pela equipa do Espião durante o levantamento.',
				confidence: 'probable',
			},
			'citizens-estate': {
				name: 'Propriedade do Cidadão',
				description: 'Mansão nobre apropriada por Quellion como sede do seu poder.',
				confidence: 'probable',
			},
			'luthadel-gate': {
				name: 'Portão de Luthadel',
				description: 'Entrada sul da rede de canais, em direção a Luthadel.',
				confidence: 'probable',
			},
			'venture-estate': {
				name: 'Propriedade Venture',
				description: 'Lar ancestral dos Venture em Urteau, abandonado sob o regime de Quellion.',
				confidence: 'probable',
			},
			'burning-district': {
				name: 'Bairro em Chamas',
				description:
					'Cerca de um terço da cidade destruído por incêndios durante a rebelião do Espião.',
				confidence: 'probable',
			},
			'skaa-slums': {
				name: 'Bairros de lata skaa',
				description: 'Bairros pobres onde os revolucionários se reúnem nos canais secos.',
				confidence: 'probable',
			},
			'the-harrows': {
				name: 'Os Gradeamentos',
				description: 'Labirinto de canais estreitos e interligados na secção sul.',
				confidence: 'probable',
			},
			'west-docks': {
				name: 'Docas do Oeste',
				description: 'Terminal ocidental da rede de canais para carga de mercadorias.',
				confidence: 'probable',
			},
			'fedre-aqueduct': {
				name: 'Aqueduto do Lorde Fedre',
				description: 'Infraestrutura monumental anterior ao Colapso.',
				confidence: 'probable',
			},
			'white-streets': {
				name: 'Ruas Brancas',
				description: 'Bairro abastado cujas calçadas eram meticulosamente limpas de cinzas.',
				confidence: 'probable',
			},
			'citizens-home': {
				name: 'Casa do Cidadão',
				description: 'Quartel-general de Quellion, o skaa que tomou o poder.',
				confidence: 'probable',
			},
			'interchange-building': {
				name: 'Edifício de Intercâmbio',
				description: 'Centro logístico para transferência de mercadorias entre níveis.',
				confidence: 'probable',
			},
			'old-city-square': {
				name: 'Praça da Cidade Velha',
				description: 'Centro histórico de Urteau, palco de agitação política sob o Cidadão.',
				confidence: 'probable',
			},
			'canton-orthodoxy-urteau': {
				name: 'Cantão da Ortodoxia',
				description: 'Geria assuntos espirituais e jurídicos da Dominância do Norte.',
				confidence: 'probable',
			},
		},
		fadrex: {
			'keep-orielle': {
				name: 'Mansão Orielle',
				description:
					'Mansão principal em terreno elevado, utilizada pelo obrigador Aradan Yomen como palácio.',
				confidence: 'probable',
			},
			'storage-cache': {
				name: 'Caverna de Armazenamento',
				description: 'Depósito secreto de mantimentos e electrum oculto nas rochas do norte.',
				confidence: 'verified',
			},
			'cremnol-wall-north': {
				name: 'Muro de Cremnol Norte',
				description: 'Formação rochosa natural vermelha e laranja que protege a cidade a norte.',
				confidence: 'verified',
			},
			'cremnol-wall-south': {
				name: 'Muro de Cremnol Sul',
				description: 'Formação rochosa formando uma barreira geológica a sul.',
				confidence: 'verified',
			},
			'main-gate': {
				name: 'Portão Principal',
				description: 'Entrada principal da cidade através das formações geológicas.',
				confidence: 'probable',
			},
			'conway-canal': {
				name: 'Canal Conway',
				description: 'Um dos canais principais para comércio e transporte.',
				confidence: 'probable',
			},
			'city-walls-east': {
				name: 'Muralhas Orientais',
				description: 'Perímetro defensivo oriental formado por rochas naturais.',
				confidence: 'probable',
			},
			'ash-mounds': {
				name: 'Montes de Cinzas',
				description: 'Planícies cobertas de cinzas onde o exército sitiante de Elend acampou.',
				confidence: 'probable',
			},
			'canton-resource-fadrex': {
				name: 'Cantão dos Recursos',
				description: 'Cantão do Ministério usado por Yomen como prisão para Vin.',
				confidence: 'probable',
			},
			'informants-residence': {
				name: 'Residência do Informador',
				description: 'Casa de um velho informador que conhece os segredos da cidade.',
				confidence: 'probable',
			},
			'deep-wells': {
				name: 'Poços Profundos',
				description: 'Recursos hídricos vitais numa cidade sem rio principal.',
				confidence: 'probable',
			},
			'noble-quarter': {
				name: 'Bairro Nobre',
				description: 'Zona residencial da alta sociedade.',
				confidence: 'probable',
			},
		},
	},

	movements: {
		...enData.movements,
		kelsier: {
			...enData.movements.kelsier,
			// ── O Império Final ────────────────────────────────────────────
			'tfe-0': {
				title: 'O Retorno do Sobrevivente',
				description:
					'Kelsier chega à plantação de lorde Tresting, onde o nobre recebe um obrigador enviado por lorde Venture na esperança de selar uma parceria comercial. Naquela noite, quando estão prestes a levar uma jovem skaa até Tresting, Kelsier intervém: mata Tresting, todos os seus obrigadores, capatazes e soldados, e incendeia a mansão.',
			},
			'tfe-1': {
				title: 'Observador oculto',
				description:
					'Kelsier observa as operações do bando de Camon nas sombras, notando o uso inconsciente de alomancia por Vin: uma órfã das ruas com poderes de Nascida da Bruma.',
			},
			'tfe-3': {
				title: 'Recrutando Vin',
				description:
					'Vin tenta fugir do esconderijo de Camon, mas Ulef a trai. Kelsier intervém e a salva da surra de Camon. Promove Milev a líder do bando, fica com os três mil boxings como pagamento e aluga o esconderijo para a reunião da noite. Depois testa Vin e confirma que ela é uma Nascida da Bruma.',
			},
			'tfe-5': {
				title: 'O roubo de atium',
				description:
					'Kelsier, Dockson e Vin sobem ao telhado. Kelsier se equipa e mergulha nas brumas para assaltar a Fortaleza Venture e roubar atium. Consegue o cofre, mas precisa enfrentar matanévoas na fuga. Escapa com o atium e financia a rebelião.',
			},
			'tfe-6': {
				title: 'O bando completo',
				description:
					'Na carpintaria de Clubs, Kelsier e o bando planejam a destruição do Império Final. Marsh chega finalmente e todos saem para que os dois irmãos conversem a sós. Vin volta a escutar atrás da porta.',
			},
			'tfe-7': {
				title: 'Treinando a aprendiz',
				description:
					'Kelsier leva Vin para sua primeira noite de treinamento e lhe entrega uma capa de brumas. Ensina-lhe os oito metais básicos junto às muralhas de Luthadel, perto do Portão de Aço.',
			},
			'tfe-8': {
				title: 'O disfarce Renoux',
				description:
					'Kelsier leva Vin para além das muralhas de Luthadel, onde encontram um espectro de bruma. Na estrada principal, Sazed os espera com uma carruagem e os conduz até Fellise. No caminho, Kelsier oferece a Vin os três mil boxings e a opção de deixar o bando. Na propriedade de lorde Renoux, ele cria a identidade falsa de Vin como lady Valette.',
			},
			'tfe-10': {
				title: 'Planejando a revolução',
				description:
					'De volta a Luthadel, Kelsier realiza uma reunião de progresso na loja de Clubs. Antes, pergunta a Sazed sobre uma religião com poder — Sazed lhe fala do jaísmo — e se alguma considera sagrado o extermínio dos nobres. A reunião termina quando um soldado de Hammond informa que o Ministério encontrou o antigo esconderijo de Camon.',
			},
			'tfe-10.2': {
				title: 'O comício do armazém',
				description:
					'Kelsier prega a revolução diante de trabalhadores skaa reunidos em um comício secreto no bairro dos armazéns. Breeze e seus apaziguadores e agitadores manipulam a multidão para torná-la mais receptiva, usando a lenda do Sobrevivente de Hathsin para inspirar a rebelião.',
			},
			'tfe-11': {
				title: 'O massacre do esconderijo de Camon',
				description:
					'Kelsier e o bando investigam o esconderijo destruído. Depois, Kelsier tenta encontrar Camon entre os mendigos. Encontra o cadáver de Camon pendurado por um gancho em sua boca, pulsos e tornozelos amarrados, corpo torturado. Este método de execução é reservado aos que abusam da alomancia. Vin havia seguido Kelsier com sucesso e conversam brevemente.',
			},
			'tfe-13': {
				title: 'Planos em Fellise',
				description:
					'Kelsier se reúne com Vin e Sazed na propriedade de lorde Renoux em Fellise para revisar a inteligência obtida no primeiro baile de Vin. Descobre que o pai de Vin estava no baile e parte para as brumas rumo a Luthadel.',
			},
			'tfe-14': {
				title: 'Reconhecimento do palácio',
				description:
					'Kelsier leva Vin a Kredik Shaw para explorar o edifício que o Senhor Soberano visita a cada três dias. Abrem caminho lutando, mas três Inquisidores de Aço convergem sobre eles. Kelsier é separado de Vin no caos. Vin escapa gravemente ferida agarrada a um misterioso livro encadernado em couro.',
			},
			'tfe-15': {
				title: 'Depois de Kredik Shaw',
				description:
					'O bando questiona a decisão de Kelsier de levar Vin a Kredik Shaw. Antes de poderem sair para procurá-la, Sazed chega carregando-a. Dockson está furioso com o risco. Kelsier e Dockson notam o livro de couro que Vin trouxe; Sazed o identifica como escrito em khlenniano, a língua da terra natal do Senhor Soberano antes da Ascensão.',
			},
			'tfe-16': {
				title: 'Velando Vin',
				description:
					'Kelsier permanece na loja de Clubs velando Vin enquanto ela se recupera dos ferimentos de Kredik Shaw, presente quando finalmente desperta.',
			},
			'tfe-17': {
				title: 'Reunião na propriedade Renoux',
				description:
					'Kelsier viaja a Fellise com Breeze, Yeden e Dockson para se reunir na propriedade de lorde Renoux e discutir a próxima fase da rebelião.',
			},
			'tfe-19': {
				title: 'Avivando a guerra de casas',
				description:
					'Kelsier semeia o caos para fomentar a Guerra de Casas, deixando o corpo visivelmente assassinado de lorde Charrs Entrone no jardim da Fortaleza Tekiel. Depois vai aos Bairros de Fuligem para encontrar Hoid — um informante que se faz passar por contato de rua. De Hoid também descobre que lady Shan Elariel é uma apaziguadora.',
			},
			'tfe-19.2': {
				title: 'Encontro com lorde Straff',
				description:
					'Kelsier vai à praça Ahlstrom disfarçado de skaa mendigo, doente e aleijado, para encontrar lorde Straff Venture, líder da Casa Venture. Descobre que os rumores sobre o Sobrevivente de Hathsin estão se espalhando e que se fala de um Décimo Primeiro Metal.',
			},
			'tfe-19.3': {
				title: 'Retorno a Renoux',
				description:
					'Kelsier volta à mansão Renoux pela Rota dos Espinhos e troca informações com Vin, Sazed e Renoux. Dá um sermão a Vin sobre os nobres, insistindo que não se importam com os skaa e que ela deve ficar longe de Elend.',
			},
			'tfe-20': {
				title: 'Supervisionando os suprimentos',
				description:
					'Kelsier está na propriedade Renoux em Fellise supervisionando as armas e suprimentos sendo carregados em carroças para enviar à rebelião.',
			},
			'tfe-21': {
				title: 'O exército rebelde',
				description:
					'Kelsier lê uma tradução do diário do Senhor Soberano enquanto viaja de barcaça por um canal rumo ao norte. O comboio para em uma eclusa e Kelsier, os recrutas e os suprimentos seguem até as cavernas onde o exército rebelde treina. Superando as memórias dos Poços de Hathsin, entra no complexo das Cavernas de Arguois e inspeciona o exército que Ham formou. Durante um jantar, Kelsier manipula as emoções de Bilg para usá-lo como exemplo. Bilg e Demoux duelam; Kelsier usa alomancia para ajudar Demoux a vencer.',
			},
			'tfe-23': {
				title: 'Seguindo Vin',
				description:
					'Kelsier aparece do lado de fora da janela da torre onde Vin espia o grupo de Elend na Fortaleza Hasting. Desdenha a conversa idealista deles sobre mudar o mundo como comportamento típico de jovens nobres que nunca leva a mudança real. Ambos partem em direções diferentes.',
			},
			'tfe-24': {
				title: 'Reunião de situação',
				description:
					'Kelsier chega à loja de Clubs onde boa parte do bando está reunida. Discute o estado da missão e compartilha uma bebida noturna com Spook, Ham e Clubs. Pede a Ham que vá à Guarnição colher informações.',
			},
			'tfe-25': {
				title: 'Decisão desesperada',
				description:
					'Na loja de Clubs, Kelsier descobre que a rebelião skaa atacou a Guarnição de Holstep e a de Luthadel marcha para o norte. Decide tentar avisar o exército rebelde e faz Vin engolir cinco esferas de estanho para uma longa corrida de estanho rumo ao norte.',
			},
			'tfe-25.2': {
				title: 'Desastre em Holstep',
				description:
					'Kelsier e Vin correm por dezesseis horas queimando estanho sem parar. Encontram os restos do exército rebelde, cercado e massacrado pela Guarnição de Valtroux. Kelsier quer lutar, mas Vin o convence de que não são invencíveis. Seguem até as Cavernas de Arguois, onde 2.000 soldados sobreviveram graças a Mennis.',
			},
			'tfe-26': {
				title: 'Recolhendo os cacos',
				description:
					'De volta à loja de Clubs após duas semanas de viagem das cavernas, o bando discute o futuro do plano: parece um fracasso total. Breeze culpa Kelsier por perseguir fama e glória. Kelsier admite o revés mas se recusa a abandonar a revolução.',
			},
			'tfe-26.2': {
				title: 'As execuções',
				description:
					'Spook anuncia execuções na Praça da Fonte. O bando vai até lá e suborna alguém para acessar o telhado. Assistem ao massacre de inúmeros skaa enquanto seu sangue é despejado na fonte. Kelsier convence o bando a continuar: "Este é o nosso inimigo. Aqui não há quartel nem volta atrás."',
			},
			'tfe-27': {
				title: 'Nova estratégia',
				description:
					'O bando retorna à loja de Clubs para planejar os próximos passos: iniciar uma guerra entre as casas nobres. Sazed traz uma mensagem de Marsh indicando onde se encontrar nos Meandros.',
			},
			'tfe-27.2': {
				title: 'O metal dourado',
				description:
					'Kelsier e Vin vão a um edifício abandonado nos Meandros horas antes do encontro com Marsh. Enquanto esperam, Kelsier fala sobre o ouro — o nono metal alomântico que permite ver uma versão alternativa do próprio passado. Também explica a feruquimia e dá um pouco de ouro a Vin para queimar pela primeira vez. Quando Marsh chega, com as tatuagens de um obrigador de baixo escalão do Cantão da Inquisição, descreve as estações de apaziguamento em Luthadel e revela que os Inquisidores podem morrer de velhice.',
			},
			'tfe-29': {
				title: 'Conselho de guerra em Renoux',
				description:
					'Kelsier se reúne com a maior parte do bando na propriedade de Renoux em Fellise, examinando um mapa detalhado das defesas de Luthadel fornecido por Marsh. Descobrem que o bando de Theron foi atacado recentemente pelo Ministério. Naquela noite, sem conseguir dormir, Kelsier pede a Sazed que lhe conte sobre algumas religiões.',
			},
			'tfe-31': {
				title: 'Repreendendo a aprendiz',
				description:
					'Kelsier e Vin retornam à loja de Clubs depois que Vin matou lady Shan Elariel — uma Nascida da Bruma plena — na Fortaleza Venture. Kelsier repreende Vin pelo combate imprudente, mas ela grita de volta que nobres e skaa não são tão diferentes, e que Elend Venture é um homem bom que merece ser protegido.',
			},
			'tfe-32': {
				title: 'Encontrando Marsh',
				description:
					'Kelsier e Vin encontram o corpo de Marsh, completamente drenado de sangue, uma casca sem vida. De volta à loja de Clubs, descobrem uma carta de Marsh explicando que os Inquisidores provavelmente o encontrariam.',
			},
			'tfe-32.2': {
				title: 'Destruindo os Poços',
				description:
					'Kelsier retorna aos Poços de Hathsin, o local de seu maior sofrimento. Mata todos os guardas e estende a mão a um skaa chamado Wallin que sai da caverna. Depois destrói todos os cristais de atium, cortando o recurso mais valioso do Senhor Soberano em uma única noite.',
			},
			'tfe-33': {
				title: 'O refúgio de emergência',
				description:
					'Kelsier retorna a um porão de reserva úmido perto da loja de Clubs, apenas três cômodos. Anuncia que destruiu todo o atium dos Poços de Hathsin.',
			},
			'tfe-33.2': {
				title: 'A luta com o Inquisidor',
				description:
					'Todos seguem Kelsier até a Praça da Fonte. Avistam Spook e lorde Renoux em uma das carroças de execução. Kelsier luta contra um Inquisidor na praça — uma armadilha que ele quase certamente sabia que seria.',
			},
			'tfe-34': {
				title: 'A última batalha do Sobrevivente',
				description:
					'Kelsier luta contra o Inquisidor em um combate até a morte na Praça da Fonte, ambos queimando atium. É um mestre de Empurrar e Puxar, movendo metal pelo ar com perícia. Mata o Inquisidor e os skaa começam a gritar "O Sobrevivente de Hathsin". O Senhor Soberano chega em uma carruagem preta. Um dos capangas de Ham lhe crava uma lança — ele continua andando. Duas lanças — continua andando. O Senhor Soberano esbofeteia Kelsier, arranca uma lança de seu próprio corpo e a crava em Kelsier. Morre com um sorriso, tornando-se o mártir que acende a revolução.',
			},
			'tfe-35': {
				title: 'Além da morte',
				description:
					'No refúgio de emergência perto da loja de Clubs, o bando vê o kandra, antes lorde Renoux, usando o corpo e os ossos de Kelsier: o plano final. Kelsier deixara cartas a cada membro com instruções para tomar a cidade. Sua morte foi a fagulha que acendeu a revolução em toda Luthadel.',
			},
			'woa-1': {
				title: 'Sombra Cognitiva',
				description:
					'Kelsier desperta como Sombra Cognitiva no Poço da Ascensão após sua morte, preso entre os reinos. Hoid chega através da perpendicularidade, repreendendo Kelsier por destruir os Poços de Hathsin antes de transitar para o Reino Físico e roubar uma conta de lerasium. Leras (Preservação) aparece e ensina Kelsier sobre os três Reinos: Físico, Cognitivo e Espiritual.',
			},
			'woa-5': {
				title: 'Observando o Mundo',
				description:
					'Kelsier usa os pulsos de Ruína para observar o mundo além de sua prisão. Ele nota Ruína prestando atenção especial a Vin — uma certa Nascida da Bruma. Observa-a patrulhar as muralhas de Luthadel e treinar com sua nova kandra lobo.',
			},
			'woa-12': {
				title: 'Os Planos de Ruína',
				description:
					'Kelsier descobre que Ruína está alterando a religião terrisana do Conventículo de Seran. Enquanto isso, Marsh — agora totalmente sob controle de Ruína — abandona Sazed no Conventículo e desaparece. Kelsier observa impotente Sazed descobrir a inscrição de Kwaan e começar sua crise de fé.',
			},
			'woa-26': {
				title: 'Observando o Cerco',
				description:
					'Kelsier vê Vin demonstrar poder aterrorizante na negociação com Straff, depois vê Elend ser deposto pela Assembleia. Ruína orquestra o avanço do exército koloss enquanto manipula Zane para isolar Vin. Kelsier fica furioso ao ver Elend governando Luthadel, mas aprende a respeitar seus esforços.',
			},
			'woa-57': {
				title: 'A Câmara do Poço',
				description:
					'Vin e Elend descem em direção ao Poço da Ascensão. A aparência de Preservação se torna menos humana. Ele diz a Kelsier que o poder não deve ser liberado, mas Vin será enganada. Marsh, sob controle de Ruína, ataca Sazed na entrada. Kelsier, desesperado, agarra o braço de Preservação e fere Elend para motivar Vin a usar o poder.',
			},
			'woa-60': {
				title: 'Ruína Liberta',
				description:
					'Vin libera o poder no Poço em vez de usá-lo, quebrando a prisão de Ruína. O poder rasga a barreira. Preservação guia Vin para dar a Elend a última conta de lerasium, transformando-o em Nascido da Bruma e salvando sua vida. Kelsier observa o mundo mudar enquanto a consciência plena de Ruína se derrama sobre Scadrial.',
			},
			'hoa-0': {
				title: 'O Luto do Sobrevivente',
				description:
					'Nos dias após a batalha koloss, Kelsier deixa o Poço e viaja pelo reflexo Cognitivo de Luthadel até a Fortaleza Venture, onde encontra sua equipe sobrevivente realizando um funeral. Descobre que Dockson e Clubs foram mortos — ambos heróis. Agarrando Preservação com fúria por sua apatia, Kelsier sente a profundidade do amor de Preservação pela humanidade e o abraça.',
			},
			'hoa-3': {
				title: 'Khriss e Nazh',
				description:
					'Seguindo o tentáculo de Preservação para o leste, Kelsier chega ao Lago Luthadel onde encontra uma fogueira com dois estranhos — Khriss e Nazh — que o reconhecem e se maravilham que ele exista neste reino. Khriss lhe ensina sobre os dezesseis Fragmentos e Adonalsium. Nazh lhe presenteia com sua faca e o direciona aos Ire.',
			},
			'hoa-5': {
				title: 'Visão da Divindade',
				description:
					'Preservação olha nos olhos de Kelsier, dando-lhe uma visão de divindade e futuros possíveis. Em nenhum futuro Kelsier derrota Ruína, mas ele sente que Vin tem uma chance — se ele for para o oeste. Sua Conexão com Ruína é muito mais profunda do que com Preservação, um fato que o perturba.',
			},
			'hoa-8': {
				title: 'Correndo para o Oeste',
				description:
					'Kelsier corre para oeste ao longo do Canal Imperial em direção ao oceano. Como Sombra Cognitiva, ele não se cansa — desde que não pense em exaustão. Passa por cidades vazias pela doença da bruma, as cinzas caindo mais espessas do que nunca enquanto Ruína acelera a decadência do mundo.',
			},
			'hoa-12': {
				title: 'Memórias de Longsfollow',
				description:
					'Parando em Longsfollow — uma cidade onde uma vez matou nobres em retaliação por uma garota skaa assassinada — Kelsier é atingido por exaustão e culpa. Os Inquisidores vieram depois, matando ainda mais. Ele pergunta a Preservação onde está Mare. Um louco no prédio o ouve, mas não consegue compreender.',
			},
			'hoa-15': {
				title: 'A Estrada Solitária',
				description:
					'A oeste de Longsfollow, Kelsier para em uma fogueira e descobre que pode acender chamas apenas com a mente. As cinzas caem mais espessas do que nunca, e ele observa refugiados skaa fugindo para oeste. Completamente sozinho, anseia por qualquer tipo de interação enquanto continua sua marcha implacável.',
			},
			'hoa-18': {
				title: 'A Provocação de Ruína',
				description:
					'Após semanas de corrida, Kelsier alcança o oceano ocidental. Ati (Ruína) aparece e discursa sobre a inevitabilidade da decadência, dizendo-lhe que o fim está muito próximo. Ele provoca Kelsier dizendo que ele não pode fazer nenhum bem ali — o que leva Kelsier a concluir que o oposto deve ser verdade. Kelsier parte pelo oceano do Reino Cognitivo.',
			},
			'hoa-21': {
				title: 'O Oceano de Pensamento',
				description:
					'Kelsier atravessa o oceano do Reino Cognitivo com apenas uma tocha improvisada na escuridão infinita. Longe de Scadrial, sente um puxão em sua alma — um sinal de que está deixando seu próprio mundo para trás. Atravessa uma selva estranha que gradualmente se afina até ver uma luz brilhante à frente: a fortaleza dos Ire.',
			},
			'hoa-24': {
				title: 'A Fortaleza dos Ire',
				description:
					'Kelsier alcança uma imponente fortaleza de pedra branca brilhante muito além de Scadrial. Afunda a mão na parede para escalar e espiona os Ire — antigos Elantrianos — que guardam um dispositivo capaz de capturar o poder de Preservação. Kelsier decide roubar o orbe.',
			},
			'hoa-30': {
				title: 'Roubando o Orbe',
				description:
					'Kelsier persegue os Ire que partem com o orbe. Finge ser Ruína para aterrorizá-los, usa a faca de Nazh para cortar as pernas de um cavalo e cria um boneco de manto em chamas. Quando Alonoe se separa do grupo, ele domina seus guardas e sussurra para ela deixar o orbe. Ela obedece por medo, e Kelsier começa a longa jornada de volta.',
			},
			'hoa-35': {
				title: 'Fadrex e Hoid',
				description:
					'Após semanas de retorno atravessando o continente, Preservação guia Kelsier a Fadrex. Uma fina linha de luz o conduz a uma praça cheia de mendigos — onde ele encontra Vin e novamente Hoid. Kelsier tenta desesperadamente avisar Vin sobre o brinco de ponta e evitar Hoid. Ruína o ataca com força espiritual.',
			},
			'hoa-42': {
				title: 'O Peão de Ruína Revelado',
				description:
					'Toda vez que Kelsier tenta se aproximar de Vin, Ruína bloqueia seu caminho. Dos arredores de Fadrex, ele observa koloss atacarem o exército de Elend — e quando morrem, vê sua verdadeira forma. Preservação lhe mostra todos que Ruína controla com pontas — incluindo Marsh cravando uma ponta no coração do Rei Penrod.',
			},
			'hoa-50': {
				title: 'Advertências Ambíguas',
				description:
					'Kelsier vaga pelo acampamento militar nos arredores de Fadrex por dias, encontrando um soldado meio enlouquecido para tentar passar uma mensagem a Vin: não confie em ninguém perfurado por metal. O soldado distorce a mensagem e começa uma briga. Ruína aparece para provocá-lo novamente.',
			},
			'hoa-54': {
				title: 'A Sombra do Sobrevivente',
				description:
					'Kelsier chega a Urteau, procurando o jovem Olho de Estanho cuja devoção ao Sobrevivente queima como um farol. Encontra Spook sob influência de Ruína — uma ponta de Hemalurgia em seu corpo, o deus da destruição incitando-o a matar. Mas a atenção de Ruína é mais fraca aqui do que em Fadrex.',
			},
			'hoa-58': {
				title: 'Esperança para Spook',
				description:
					'Kelsier encontra Spook em Urteau. A linha de Conexão entre eles é mais forte que com qualquer outro — a devoção de Spook ao Sobrevivente criou um vínculo único. Kelsier sussurra "Esperança" repetidamente até Spook finalmente arrancar a ponta de Hemalurgia. Kelsier grita "Sobreviva" e Spook age.',
			},
			'hoa-62': {
				title: 'Em Meio-Sonho',
				description:
					'Spook e Kelsier se encontram em um gramado verde em meio-sonho. Kelsier diz a Spook que ele é um herói e que está orgulhoso dele. Pede-lhe para enviar uma mensagem a Vin: qualquer um perfurado por metal pode ser controlado por Ruína. Spook acorda assentindo com determinação.',
			},
			'hoa-68': {
				title: 'Agarrar a Preservação',
				description:
					'Sentindo Preservação morrendo, Kelsier esmaga o orbe dos Ire com a faca de Nazh e toma o poder do Fragmento em uma luta desesperada. Mas Ruína ri — Kelsier é apenas uma memória humana, incapaz de controlar totalmente. Ele ouve Marsh lutando dentro de sua própria mente e percebe que deve agir indiretamente.',
			},
			'hoa-69': {
				title: 'O Destino do Mensageiro',
				description:
					'Kelsier observa Goradel cavalgar de Urteau com o aviso de Spook gravado em metal — mas Ruína invoca Marsh. O Inquisidor ataca o mensageiro e o mata, lendo a mensagem para seu mestre. Kelsier agradece a Goradel enquanto sua alma passa pelo Reino Cognitivo, então afunda em desespero. Mas um pensamento persiste: Ruína não está completo sem atium. Ainda há esperança.',
			},
			'hoa-78': {
				title: 'Cedendo o Poder',
				description:
					'Kelsier observa Vin lutar contra os Inquisidores restantes em Kredik Shaw — e Marsh torturá-la, cravando pontas cada vez mais fundo. Mas Marsh lera o aviso tirado do corpo de Goradel. Ele arranca o brinco de ponta da orelha de Vin. Kelsier aproveita o momento, atacando Ruína para distraí-lo enquanto Vin absorve a bruma e toma o poder de Preservação.',
			},
			'hoa-80': {
				title: 'Reparando a Alma',
				description:
					'Kelsier está em agonia. O puxão da morte o chama novamente — mas ele se agarra, recusando-se a morrer outra vez. Sua alma está profundamente ferida por ceder Preservação a Vin, mas começa a se reparar com o tempo. Do Reino Cognitivo, ele observa centenas de milhares de refugiados nos Poços de Hathsin e Vin — agora Preservação — sussurrando ao vento para guiar Elend.',
			},
			'hoa-81': {
				title: 'Observador dos Poços',
				description:
					'Kelsier testemunha a batalha final se desenrolar. Elend discursa para os atiuns e lidera a carga contra os koloss. Por horas, Elend queima atium massivamente — e Kelsier o vê brilhar com luz impossível, queimando duralumínio e atium juntos em um último lampejo de percepção divina. Elend crava sua espada no pescoço de Marsh. Um machado atinge seu peito. Ele morre sorrindo. Então Vin ataca — Preservação golpeia Ruína em uma fúria que nenhum Fragmento deveria sobreviver. Tanto Ati quanto Vin morrem. Os poderes de Preservação e Ruína são liberados sobre o mundo.',
			},
			'hoa-82': {
				title: 'Para o Além',
				description:
					'Kelsier considera tomar ambos os Fragmentos para si. Então Elend aparece no Reino Cognitivo — e Vin. Eles se abraçam, finalmente reunidos. Em seguida, Ati chega, e Kelsier o soca. Juntos, eles observam Sazed estender a mão e tomar tanto Preservação quanto Ruína, tornando-se Harmonia. Sazed se oferece para enviar Vin de volta, mas ela sabe que não funcionaria. Ela quer seguir em frente com Elend. Vin agradece a Kelsier por tudo e segue Elend para o Além.',
			},
			'hoa-83': {
				title: 'A Escolha do Sobrevivente',
				description:
					'O mundo é destruído e renascido. Durante o Catacendro, Kelsier vê todos os três reinos simultaneamente. Quando termina, ele está novamente preso no Reino Cognitivo. Sazed (Harmonia) o visita e admite que não pode trazer Vin e Elend de volta do Além. Kelsier pede que cure Spook e o torne Nascido da Bruma. Quando Sazed diz que não há como retornar ao Reino Físico, Kelsier decide que Harmonia é um péssimo mentiroso — e começa a tramar.',
			},
			'hoa-83.2': {
				title: 'As Maquinações do Sobrevivente',
				description:
					'Kelsier convence Spook a realizar experimentos de Hemalurgia — tanto para prolongar a vida de Spook quanto para encontrar um caminho para Kelsier retornar ao Reino Físico. O Sobrevivente de Hathsin não pretende permanecer uma Sombra Cognitiva para sempre.',
			},
		},
		vin: {
			...enData.movements.vin,
			// ── O Império Final ────────────────────────────────────────────
			'tfe-1': {
				title: 'Órfã das ruas',
				description:
					'Vin é convocada perante seu líder de bando Camon, que a trata com rudeza. Ela usa inconscientemente sua Sorte — uma forma de apaziguamento alomântico — para acalmá-lo. Camon se faz passar por lorde Jedue, um nobre desesperado por contratos, e se prepara para enganar o Ministério do Aço. Vin usa sua Sorte no obrigador prelado Laird para que não rejeite os pedidos de Camon.',
			},
			'tfe-2': {
				title: 'A fraude ao Ministério',
				description:
					'Camon, como lorde Jedue, leva Vin ao Cantão de Finanças para fraudar o Ministério. Vin usa sua Sorte no alto prelado, que entrega três mil boxings a Camon. Kelsier e Dockson, na sala de espera, detectam os pulsos alomânticos de Vin. Depois, veem um Inquisidor de Aço seguindo o séquito de Camon.',
			},
			'tfe-4': {
				title: 'Recrutada',
				description:
					'Kelsier apresenta seu plano para derrubar o Império Final ao bando na carpintaria de Clubs. O bando aceita, exceto Clubs, que sai antes de retornar. Kelsier revela que Vin é uma Nascida da Bruma e fala do Décimo Primeiro Metal.',
			},
			'tfe-7': {
				title: 'Treinamento de Nascida da Bruma',
				description:
					'Kelsier leva Vin para sua primeira noite de treinamento e lhe dá uma capa de brumas. Ensina-lhe os oito metais básicos — estanho, peltre, ferro, aço, zinco, latão, cobre e bronze — terminando a noite nas muralhas de Luthadel.',
			},
			'tfe-8': {
				title: 'A propriedade Renoux',
				description:
					'Vin e Kelsier pulam as muralhas de Luthadel para a noite, onde Vin encontra um espectro de bruma pela primeira vez. Na estrada, Sazed espera com uma carruagem e os leva a Fellise. No caminho, Kelsier oferece a Vin os três mil boxings e a opção de ir embora. Ela pega o dinheiro mas fica para ver como tudo termina. Na propriedade de lorde Renoux, ele propõe que Vin interprete lady Valette.',
			},
			'tfe-9': {
				title: 'Treinando com Sazed',
				description:
					'Vin e Kelsier lutam em um treino na propriedade Renoux. Depois, Vin corta o cabelo e Sazed a interroga sobre seu disfarce nobre, além de falar do trelagismo. Kelsier e Sazed conversam em particular sobre o progresso de Vin; Kelsier anuncia que assistirão a um baile na Fortaleza Venture no fim da semana.',
			},
			'tfe-10': {
				title: 'Volta ao bando',
				description:
					'Vin retorna a Luthadel de Fellise para aprender sobre metais com os brumosos do bando, começando por Breeze, que lhe ensina a apaziguar. Hammond chega e debate a moralidade de derrubar o Império Final enquanto aguardam o discurso de Kelsier.',
			},
			'tfe-10.2': {
				title: 'O comício do armazém',
				description:
					'Vin assiste ao comício secreto no bairro dos armazéns onde Kelsier prega a revolução aos trabalhadores skaa. Depois, Kelsier realiza uma reunião de progresso na loja de Clubs. Vin e Lestibournes falam sobre Marsh. A reunião termina quando um soldado de Hammond informa que o Ministério do Aço descobriu o antigo esconderijo de Camon.',
			},
			'tfe-11': {
				title: 'O massacre do esconderijo de Camon',
				description:
					'Vin e o bando investigam o esconderijo destruído, encontrando cadáveres por toda parte. Entre eles, Vin vê Ulef: alguém arrancou sua caixa torácica com as mãos. Sazed recita uma oração da religião cazzi. O corpo de Milev está amarrado a uma cadeira, claramente torturado.',
			},
			'tfe-12': {
				title: 'Primeiro baile na Fortaleza Venture',
				description:
					'Vin vai a seu primeiro baile na Fortaleza Venture, com Sazed conduzindo a carruagem. Kelsier aparece no caminho, dá conselhos e volta às brumas. Vin é apresentada como lady Valette Renoux. No jantar, vê seu pai do outro lado do salão. Recusa convites para dançar e se retira para uma varanda no andar de cima, onde tem sua primeira conversa com Elend Venture.',
			},
			'tfe-13': {
				title: 'Retorno a Fellise',
				description:
					'Sazed interroga Vin sobre sua interação com Elend na propriedade Renoux. A verdadeira personalidade de Vin começa a emergir — nem a tímida membro do bando nem lady Valette. Kelsier descobre que o pai de Vin estava no baile e parte novamente nas brumas.',
			},
			'tfe-14': {
				title: 'Dentro de Kredik Shaw',
				description:
					'Kelsier leva Vin a Kredik Shaw e abrem caminho lutando. Vin mata pela primeira vez. Três Inquisidores de Aço convergem sobre eles. Para se defender dos triângulos de metal afiados que Empurram contra ela, Vin agarra um livro de couro. Queimando atium, escapa temporariamente antes que um Inquisidor lhe crave um machado de obsidiana no flanco. Vin escapa com o livro mas perde a consciência — algo distrai o Inquisidor perseguidor e a acolhe em um abraço protetor. Não era Kelsier.',
			},
			'tfe-15': {
				title: 'Ferida',
				description:
					'O bando questiona a decisão de Kelsier de levar Vin a Kredik Shaw. Sazed chega carregando-a. Administram-lhe peltre para ajudar na cura. Sazed a opera e Ham a leva para um quarto para se recuperar. Kelsier e Dockson notam o livro; Sazed o identifica como escrito em khlenniano.',
			},
			'tfe-16': {
				title: 'Recuperação na loja de Clubs',
				description:
					'Vin acorda após duas semanas de repouso na loja de Clubs. Spook velava por ela e conta como Kelsier lhe deu seu apelido. Conversando com Dockson, Vin percebe que há algo muito incomum sobre Sazed.',
			},
			'tfe-16.2': {
				title: 'Retorno a Fellise',
				description:
					'Após mais alguns dias de repouso, Vin retorna à propriedade Renoux em Fellise. Conversa com Sazed, que explica o que são os Guardiões e revela que todos os servos terrisanos são eunucos.',
			},
			'tfe-17': {
				title: 'O jardim da mansão Renoux',
				description:
					'Vin se lamenta de quatro semanas de tediosa convalescença na propriedade Renoux. Membros do bando chegam para discutir novidades. Vin convence Kelsier a deixá-la ir ao próximo baile. Depois falam sobre Mare, as motivações de Kelsier, e ele explica o Estalo — o evento traumático que desperta os poderes alomânticos.',
			},
			'tfe-18': {
				title: 'Baile na Fortaleza Elariel',
				description:
					'Vin assiste ao baile na Fortaleza Elariel com Sazed. Elend Venture se senta à sua mesa lendo, como de costume, e elogia seu vestido, deixando-a boquiaberta. Dança com vários nobres e pergunta sobre Elend; ouve falar de lady Shan Elariel. Após muito dançar, Vin é obrigada a encontrar Shan. Percebe que Shan pode apaziguar. Ao sair do baile, Vin testemunha um guarda da cidade degolando um jovem skaa de cozinha nas brumas.',
			},
			'tfe-19': {
				title: 'Voltando a Fellise',
				description:
					'Kelsier retorna à mansão Renoux pela Rota dos Espinhos e se reúne com Vin, Sazed e Renoux. Dá um sermão a Vin sobre os nobres, insistindo que não se importam com os skaa e que ela deve ficar longe de Elend Venture.',
			},
			'tfe-20': {
				title: 'Lições de buscadora',
				description:
					'Vin retorna de Luthadel e vê caixas de armas diante da mansão Renoux, prontas para a rebelião. Marsh chega pouco depois e lhe ensina a buscar — usar bronze para detectar outros alomantes — além de detalhes adicionais sobre alomancia.',
			},
			'tfe-22': {
				title: 'O diário',
				description:
					'Vin lê sua cópia do diário do Senhor Soberano na propriedade Renoux quando Spook chega. Ele lhe dá um lenço; Sazed explica depois que assim um jovem cavaleiro sinaliza que deseja cortejar seriamente uma dama. Esperando Dockson, Vin fala com Sazed sobre o terrisano do diário; Sazed revela os segredos da feruquimia e a formação dos Guardiões. Vin então conversa com Dockson, que conta como lorde Devinshae levou a mulher que amava e a matou na manhã seguinte.',
			},
			'tfe-23': {
				title: 'Baile na Fortaleza Hasting',
				description:
					'Vin assiste ao baile na Fortaleza Hasting, satisfeita por ver que os esforços de Kelsier estão funcionando. Lady Shan pede que Vin vasculhe os livros de Elend na próxima vez. Vin encontra Elend e pergunta se ele esteve com uma skaa. Ele confessa que seu pai o obrigou aos treze anos; a mulher foi morta depois, mas nunca mais fez isso. Elend lhe dá um lenço. Após partir com seus amigos, Vin os segue com alomancia até uma torre onde discutem as falhas do Senhor Soberano. Kelsier aparece de repente e desdenha as ideias do grupo.',
			},
			'tfe-24': {
				title: 'Reunião do bando',
				description:
					'Vin e Kelsier chegam à loja de Clubs onde boa parte do bando está reunida. Kelsier discute o estado da missão e Vin percebe o quanto ama sua nova vida. Kelsier, Spook, Ham e Clubs compartilham uma bebida noturna.',
			},
			'tfe-24.2': {
				title: 'A visita à guarnição',
				description:
					'Vin troca de roupa para suas roupas de pivete e sai com Ham para visitar a Guarnição de Luthadel para aprender sobre peltre. Ham explica que muitos soldados são skaa comuns. Um guarda chamado Sertes informa que a Guarnição está se mobilizando — uma rebelião skaa atacou a Guarnição de Holstep ao norte.',
			},
			'tfe-25': {
				title: 'Notícias urgentes',
				description:
					'Na loja de Clubs, Ham traz a notícia de que a Guarnição de Luthadel marcha para Holstep. Kelsier faz Vin engolir cinco esferas de peltre para correrem rumo ao norte e avisar o exército rebelde.',
			},
			'tfe-25.2': {
				title: 'A corrida de peltre',
				description:
					'Vin e Kelsier correm dezesseis horas sem parar queimando peltre em uma desesperada corrida de peltre. Encontram os restos do exército rebelde, cercado e massacrado pela Guarnição de Valtroux. Kelsier quer lutar, mas Vin o convence de que não são invencíveis. Seguem até as Cavernas de Arguois, onde 2.000 soldados sobreviveram graças a Mennis.',
			},
			'tfe-26': {
				title: 'Recuperação',
				description:
					'Vin jaz exausta na cama da loja de Clubs. Levaram duas semanas para retornar a Luthadel. Kelsier irrompe; Breeze o culpa por buscar fama. Kelsier admite o revés mas se recusa a desistir.',
			},
			'tfe-26.2': {
				title: 'As execuções',
				description:
					'Spook anuncia execuções na Praça da Fonte. O bando vai até lá e suborna alguém para chegar ao telhado. Vin identifica seu pai para Kelsier — um obrigador chamado Tevidian, lorde Prelado e obrigador de mais alto escalão, acima até dos Inquisidores. Assistem mulheres e crianças sendo arrastadas de uma carroça-prisão e executadas, a fonte tingida de sangue.',
			},
			'tfe-27': {
				title: 'Planejando os próximos passos',
				description:
					'O bando retorna à loja de Clubs. Kelsier, Vin e os demais replanejam como avançar e iniciar uma guerra de casas. Sazed chega com uma carta de Marsh com instruções de onde se encontrar.',
			},
			'tfe-27.2': {
				title: 'Encontro com Marsh',
				description:
					'Kelsier e Vin vão a um edifício abandonado nos Meandros para se encontrar com Marsh. Enquanto esperam, Kelsier fala do ouro — o nono metal alomântico que permite ver uma versão alternativa do passado. Marsh chega com as tatuagens de um obrigador de baixo escalão do Cantão da Inquisição. Revela que o Ministério coloca apaziguadores nas regiões skaa sob apaziguamento constante, ocultos por abafadores. Confirma também que os Inquisidores podem morrer de velhice.',
			},
			'tfe-28': {
				title: 'Baile na Fortaleza Lekal',
				description:
					'Vin assiste ao baile na Fortaleza Lekal e começa a espalhar rumores para acender as Guerras de Casas. Elend a surpreende — diz que quer beijá-la, mas Vin insiste que ele não a conhece de verdade. Passeiam e Elend revela que a fortuna dos Venture vem inteiramente da extração de atium nos Poços de Hathsin. Menciona que os Tekiel foram mortos pela Casa Hasting e tenta convencer Valette a deixar Luthadel.',
			},
			'tfe-29': {
				title: 'A última tradução',
				description:
					'Vin lê a última tradução do diário feita por Sazed na mansão Renoux e fica decepcionada por não haver mais. Sazed explica a feruquimia com mais detalhes e ela tenta queimar uma de suas mentes de peltre. Depois, Kelsier se junta ao bando para estudar um mapa de Marsh. Descobrem que o bando de Theron foi atacado, e Vin suspeita que os Inquisidores ainda estão em seu encalço.',
			},
			'tfe-30': {
				title: 'O baile Venture',
				description:
					'Vin assiste ao último baile de casas na Fortaleza Venture com Sazed. Lady Kliss se revela informante e tenta chantagear a Casa Renoux. Em troca de um colar de safira, Kliss conta a Vin que assassinos Elariel tentarão matar Elend naquela noite. Vin força Kliss alomanticamente a revelar todo o plano. Quebra um vitral para escapar. Fora, enfrenta dois brutamontes, dois lança-moedas e duas Nascidas da Bruma — uma delas é Shan Elariel. Vin a engana esgotando seu atium antes, e a mata.',
			},
			'tfe-31': {
				title: 'Depois do duelo',
				description:
					'Vin irrompe na cozinha de Clubs enfaixada e esfarrapada. Kelsier a repreende por salvar Elend, mas Vin grita que skaa e nobres não são diferentes — Elend é um homem bom. No telhado, Vin conta a Kelsier que a Casa Venture administra os Poços e compartilha sua teoria de que os Inquisidores enxergam através das nuvens de cobre. Kelsier testa a teoria e a confirma.',
			},
			'tfe-32': {
				title: 'Vigília no telhado',
				description:
					'Vin e Spook vigiam do telhado da loja de Clubs. Spook lhe ensina truques com estanho: não é só sobre amplificar os sentidos, mas filtrar as distrações. Depois, Kelsier e Vin encontram o corpo de Marsh — drenado de sangue, uma casca sem vida. Descobrem uma carta explicando que os Inquisidores provavelmente o encontrariam.',
			},
			'tfe-33': {
				title: 'O refúgio de emergência',
				description:
					'O bando se muda para um porão de reserva úmido perto da loja de Clubs — três cômodos. Kelsier anuncia que destruiu todo o atium dos Poços. Spook monta guarda como vigília de estanho.',
			},
			'tfe-33.2': {
				title: 'A luta com o Inquisidor',
				description:
					'Todos seguem Kelsier à Praça da Fonte. Veem Spook e lorde Renoux em uma das carroças de execução. Kelsier luta contra um Inquisidor na praça. Elend vê os servos Renoux enjaulados e grita por Valette, sem encontrá-la.',
			},
			'tfe-34': {
				title: 'A morte do Sobrevivente',
				description:
					'Kelsier luta contra o Inquisidor em combate total na Praça da Fonte, ambos queimando atium. Vin observa de cima: Kelsier é um mestre de Empurrar e Puxar. Mata o Inquisidor e os skaa gritam "O Sobrevivente de Hathsin". O Senhor Soberano chega em uma carruagem preta. Kelsier é morto. Vin salta e o segura enquanto ele morre.',
			},
			'tfe-35': {
				title: 'O legado do Sobrevivente',
				description:
					'Vin retorna ao refúgio de emergência. Está furiosa porque Kelsier não foi honesto — planejara morrer e abandoná-la. Sazed oferece palavras de consolo. Fora, os skaa falam do Senhor das Brumas. Em um armazém próximo, o bando vê o kandra na forma de Kelsier. Kelsier deixara cartas com instruções para tomar a cidade. A carta de Vin diz que nunca decifrou o Décimo Primeiro Metal. Ela decide descobrir o que o Senhor Soberano esconde.',
			},
			'tfe-36': {
				title: 'Dentro de Kredik Shaw',
				description:
					'Vin caminha silenciosamente até Kredik Shaw, encorajando os guardas externos a se juntarem à rebelião. Dentro, mata dois Inquisidores. Na câmara seguinte, um ancião está sentado em uma cadeira. Um Inquisidor agarra Vin pelo pescoço — o ancião fala e os Inquisidores o chamam de Senhor Soberano. Mas Vin está confusa: o Senhor Soberano da Praça da Fonte era um homem jovem. Queima o Décimo Primeiro Metal e vê duas formas fantasmagóricas junto ao ancião.',
			},
			'tfe-37': {
				title: 'Resgate e revelação',
				description:
					'Os Inquisidores forçam Vin a queimar um metal que anula todos os outros. É levada perante o Senhor Soberano em seu trono — a versão jovem, o homem que matou Kelsier. Tevidian, pai de Vin e obrigador de mais alto escalão, é executado pelos Inquisidores. Vin descobre que Reen nunca a delatou: suportou a tortura e disse aos Inquisidores que ela morrera de fome há tempos. Sazed é trazido à cela e libera força feruquímica para arrombar a porta. Elend e seis soldados irrompem. Vin encontra sua capa e um frasco de metais. Elend agora sabe que ela é Nascida da Bruma. Vin agarra a cabeça dele e o beija, depois parte para matar o Senhor Soberano.',
			},
			'tfe-38': {
				title: 'Assassina do Senhor Soberano',
				description:
					'Vin salta entre as agulhas de Kredik Shaw até o topo. O Inquisidor Kar a agarra pelo pescoço, mas um segundo Inquisidor arranca um prego de metal do pescoço de Kar, matando-o instantaneamente. É Marsh — vivo, com onze pregos no corpo. Matou todos os outros Inquisidores. O verdadeiro nome do Senhor Soberano é Rashek: assassinou o Herói das Eras e tomou seu lugar. Vin puxa os braceletes do Senhor Soberano e eles caem. Sem sua juventude feruquímica, ele se torna um ancião fraco. Sazed aparece com um frasco de metais. Vin crava uma lança direto em seu coração. Mil anos de opressão chegam ao fim.',
			},
			'tfe-39': {
				title: 'Uma nova era',
				description:
					'Sazed, Marsh e Vin estão no alto de um edifício perto do bairro skaa. Sazed explica que o Senhor Soberano era ao mesmo tempo feruquimista e alomante — os braceletes armazenavam sua juventude. Marsh descreve sua sobrevivência e transformação: onze pregos de metal, dois pelos olhos, oito no peito, um nas costas. Também fala dos kandra, criaturas evoluídas dos espectros de bruma que agora veem Vin como sua dona.',
			},
			'tfe-39.2': {
				title: 'Vin e Elend',
				description:
					'Vin observa Elend secretamente das brumas fora da Fortaleza Venture. Sua reunião com líderes skaa e nobres correu bem — após um discurso formidável que nem Sazed conseguiu memorizar por completo sem seus metais, todos o aceitaram como rei. Elend redige o novo código de leis do reino. Vin se lembra de que Reen nunca a delatou aos Inquisidores: existem pessoas que a amam de verdade. Com essa lembrança, corre até Elend e se abraçam.',
			},
			'woa-1': {
				title: 'Guardiã da Cidade',
				description:
					'Vin patrulha as muralhas de Luthadel todas as noites, vigiando ameaças enquanto três exércitos convergem sobre a cidade recém-libertada.',
			},
			'woa-2': {
				title: 'Emboscada na Bruma',
				description:
					'Vin é emboscada ao sul da Fortaleza Venture, perto de Kredik Shaw, por oito alomantes. Um misterioso Nascido da Bruma — o Vigia — intervém para ajudar. Ela suspeita que os assassinos foram enviados por um dos exércitos sitiantes.',
			},
			'woa-3': {
				title: 'O Espírito da Bruma',
				description:
					'Vin encontra o espírito da bruma — uma figura translúcida apontando para algo invisível — enquanto vigia a Fortaleza Venture. De volta ao escritório de Elend, Ham chega relatando que os assassinos provavelmente foram enviados pelo Rei Cett.',
			},
			'woa-5': {
				title: 'O Renascimento de OreSeur',
				description:
					'Vin compra um cão-lobo no mercado para dar à kandra OreSeur como novo corpo. Descobre um novo metal alomântico — duralumínio — e retorna à Fortaleza Venture para testar seu poder.',
			},
			'woa-6': {
				title: 'Treino no Pátio',
				description:
					'Vin treina com Ham no pátio da Fortaleza Venture, testando técnicas de combate enquanto OreSeur observa em sua nova forma de cão-lobo. Spook retorna de missões de reconhecimento.',
			},
			'woa-8': {
				title: 'Perseguindo o Vigia',
				description:
					'Vin patrulha Luthadel e persegue o Vigia pelos telhados da cidade. A perseguição termina perto da Praça da Fonte, onde ela experimenta queimar duralumínio e descobre seu efeito amplificador devastador.',
			},
			'woa-10': {
				title: 'Guarda da Assembleia',
				description:
					'Vin e Ham protegem Elend enquanto ele discursa na Assembleia. Uma estranha mulher terrisana está na plateia. Durante a reunião, chega a notícia de que um segundo exército — as forças do Rei Cett — apareceu nos arredores de Luthadel.',
			},
			'woa-11': {
				title: 'Salvando Breeze',
				description:
					'Vin, Elend e Clubs fazem reconhecimento do exército de Cett nas muralhas. Quando Breeze está em perigo, Vin o resgata com um Empurrão de aço amplificado por duralumínio. De volta à Fortaleza Venture, a equipe descobre ossos de kandra.',
			},
			'woa-13': {
				title: 'O Espírito Retorna',
				description:
					'Vin percebe que a bruma chega mais cedo a cada noite. Ela procura o espírito da bruma e o encontra em um prédio abandonado. Cai de uma janela. Mais tarde, Elend reúne a equipe para um conselho de guerra.',
			},
			'woa-14': {
				title: 'Chegada de Tindwyl',
				description:
					'Tindwyl começa a educar Elend sobre realeza na Fortaleza Venture. Vin desconfia da impositiva mulher terrisana, mas observa Elend começar a mudar lentamente sob sua tutela.',
			},
			'woa-16': {
				title: 'Investigando o Diário',
				description:
					'Vin analisa o diário de Alendi na Fortaleza Venture, procurando menções ao espírito da bruma e à bruma profunda. Ela acredita que a presença que a persegue é a mesma que perseguiu Alendi séculos atrás.',
			},
			'woa-17': {
				title: 'Duelo com o Vigia',
				description:
					'Após encontrar o emissário de Straff — Zane, o Vigia — Vin sai em patrulha com OreSeur. Ela confronta Zane e eles travam um intenso duelo de Empurrões de aço na Fortaleza Hasting. Zane diz que os Nascidos da Bruma pertencem à bruma, não aos nobres.',
			},
			'woa-20': {
				title: 'Conselho de Guerra',
				description:
					'Vin observa Elend, Dockson, Hammond, Clubs e Breeze discutirem a estratégia de negociação com Straff. Ela usa bronze para inocentar Breeze das suspeitas de impostor kandra. Allrianne, filha de Lorde Cett, chega pedindo asilo e Breeze.',
			},
			'woa-21': {
				title: 'Chegada de Allrianne',
				description:
					'Allrianne Cett chega ao palácio, surpreendendo a todos e abraçando Breeze. Elend oferece hospitalidade. Dockson sugere usar Allrianne como moeda de troca com Lorde Cett.',
			},
			'woa-22': {
				title: 'Tensões Políticas',
				description:
					'Com o cerco se apertando, Vin persegue Zane pela bruma enquanto observa Elend lutar com a Assembleia e as exigências da governança.',
			},
			'woa-24': {
				title: 'Vigília Noturna',
				description:
					'Vin monta guarda fora da sacada de Elend queimando bronze, detectando o espírito da bruma e fontes distantes de poder alomântico. Zane a encontra na Fortaleza Venture e a provoca.',
			},
			'woa-25': {
				title: 'Compras e Escaramuça',
				description:
					'Tindwyl leva Vin às compras na Rua Kenton, acompanhada por Allrianne, Spook e OreSeur. O alarme soa — o exército de Straff lança um ataque diversionário contra as muralhas e Vin corre para a defesa.',
			},
			'woa-26': {
				title: 'Negociando com Straff',
				description:
					'Vin acompanha Elend ao acampamento de guerra de Straff Venture, demonstrando um poder aterrorizante para intimidar o aspirante a conquistador.',
			},
			'woa-27': {
				title: 'Blefe',
				description:
					'Straff ameaça matar Elend durante as negociações enquanto Vin escuta do lado de fora da tenda. Zane aparece. O blefe de Vin e Elend dá certo — Straff os deixa partir. No caminho de volta a Luthadel, Elend recebe a notícia de que a Assembleia votou pela desconfiança.',
			},
			'woa-28': {
				title: 'Retorno da Negociação',
				description:
					'Após o tenso encontro no acampamento de Straff, Vin retorna à Fortaleza Venture, atormentada pelos sussurros de Zane e dúvidas sobre seu papel.',
			},
			'woa-29': {
				title: 'Insônia e Percepção',
				description:
					'Vin e OreSeur sentam-se na bruma noturna na Fortaleza Hasting, discutindo o caráter de Zane e a crescente insônia de Vin. Vin tem uma revelação sobre a natureza da bruma profunda.',
			},
			'woa-30': {
				title: 'Teoria da Bruma Profunda',
				description:
					'Vin entra na Fortaleza Venture pela janela de Sazed e lê sua transcrição dos relevos do Conventículo. Ela propõe que a bruma é a bruma profunda — uma bruma diurna permanente poderia causar fome. Diz a Sazed que viu a mesma presença que perseguiu o Herói das Eras.',
			},
			'woa-31': {
				title: 'Nomeação de Penrod',
				description:
					'Vin comparece à Assembleia com Elend e toda a equipe. Elend nomeia Lorde Penrod como chanceler e invoca o legado de Kelsier através de Vin como dissuasão contra Straff. A nomeação do novo rei começa — Penrod, Elend e Lorde Cett emergindo da multidão.',
			},
			'woa-33': {
				title: 'Segredos Kandra',
				description:
					'Vin questiona se ela é a verdadeira Herói das Eras e discute vagas profecias terrisanas com OreSeur. OreSeur revela acidentalmente que os kandra têm sua própria religião anterior à Ascensão do Senhor Soberano. Vin investiga Dockson na biblioteca do palácio.',
			},
			'woa-34': {
				title: 'Zane no Telhado',
				description:
					'Vin encontra Elend e a equipe estudando estratégia na biblioteca. Ouvindo um barulho do lado de fora, ela encontra Zane no telhado — ele revela que está queimando atium e ataca. Ele conta que Straff quer que ele a mate, que é meio-irmão de Elend, e que koloss estão a um dia de Luthadel.',
			},
			'woa-35': {
				title: 'Jantar com Cett',
				description:
					'Vin experimenta um vestido de Nascida da Bruma recém-confeccionado. Ela e Elend jantam com Lorde Cett na Fortaleza Hasting. Cett explica seu plano para Luthadel e oferece comida em troca do esconderijo de atium, mas Elend diz que não foi encontrado.',
			},
			'woa-36': {
				title: 'Igreja do Sobrevivente',
				description:
					'Vin observa Allrianne usar alomancia para inflamar as emoções de Breeze. Ela segue Demoux ao pátio do palácio e descobre que ele secretamente lidera a Igreja do Sobrevivente — pregando que Vin restaurará o mundo. Ela o confronta, mas promete guardar seu segredo.',
			},
			'woa-38': {
				title: 'Eleição e Assassinato',
				description:
					'Vin e Elend comparecem à Assembleia para a eleição do rei. Elend revela que se juntou à Igreja do Sobrevivente. Um assassino ataca — Vin luta contra seis alomantes enviados por Straff, sofre ferimentos graves, mas mata todos. A Assembleia elege Penrod como rei.',
			},
			'woa-40': {
				title: 'Recuperação',
				description:
					'Vin acorda em uma cama de hospital na Fortaleza Venture com Elend ao seu lado. Ela descobre que Penrod agora é rei e que Elend se encolhe ao seu toque. Zane a visita enquanto dorme, deixando uma pepita de atium. OreSeur retorna em um novo corpo canino.',
			},
			'woa-43': {
				title: 'Ataque a Cett',
				description:
					'Zane diz que Demoux está traindo Elend por ordens de Cett e sugere atacar o exército de Cett. Vin e Zane lançam um ataque devastador à Fortaleza Hasting. Ela chega a Cett e seu filho, mas pede misericórdia. Zane diz que ela ainda está sendo controlada e parte. O exército de Cett se retira de Luthadel.',
			},
			'woa-44': {
				title: 'Esconderijo de Camon',
				description:
					'Após expulsar o exército de Cett da cidade, Vin se esconde no antigo esconderijo de Camon. Ela fala sobre os soldados que matou e como obteve seu brinco. Diz a Elend que eles devem deixar Luthadel e ir para o norte, para Terris, confiando a OreSeur uma pepita de atium.',
			},
			'woa-45': {
				title: 'Conselhos Sobre o Amor',
				description:
					'Vin visita Sazed pedindo conselhos sobre o amor — se deve ficar com Elend ou com alguém mais parecido consigo mesma. Sazed acredita que os dois foram feitos um para o outro e decide garantir que deixem a cidade antes que Luthadel caia.',
			},
			'woa-46': {
				title: 'Câmara do Senhor Soberano',
				description:
					'Vin vai à câmara secreta em Kredik Shaw onde o Senhor Soberano passava o tempo sozinho. Ela não tem certeza do porquê veio, mas sente uma pulsação distante — o Poço da Ascensão recarregando seu poder. Sai perturbada.',
			},
			'woa-47': {
				title: 'Duelo com Zane',
				description:
					'Zane tenta convencer Vin a deixar Luthadel com ele, mas ela escolhe a confiança de Elend sobre a liberdade. Enfurecido, Zane ataca. OreSeur desobedece a ordem de Vin — Zane revela que a kandra é na verdade TenSoon, espiã de seu verdadeiro mestre. TenSoon, que passou a gostar de Vin, grita seu conhecimento sobre kandra. Vin controla TenSoon com latão-duralumínio, toma seu atium, explora a dependência de atium de Zane para contornar sua precognição e apunhala seu pescoço, matando-o.',
			},
			'woa-49': {
				title: 'Fuga pelo Portão de Estanho',
				description:
					'Vin, Elend e Spook deixam Luthadel pelo Portão de Estanho. Fora das muralhas, um grupo de arqueiros de Straff tenta detê-los, mas Vin os abate na bruma.',
			},
			'woa-50': {
				title: 'Desfazendo o Acampamento',
				description:
					'A um dia ao norte de Luthadel, Vin, Elend e Spook desfazem o acampamento, confiantes de que escaparam dos batedores de Straff. Spook sente algo os perseguindo na bruma, e Vin reconhece como o misterioso espírito da bruma que a segue há meses.',
			},
			'woa-51': {
				title: 'Jastes e a Verdade',
				description:
					'Vin acorda e encontra o espírito da bruma pairando sobre Elend, então o apunhala. Spook relata cinco homens os perseguindo — Jastes Lekal, que abandonou os koloss. Elend executa seu velho amigo. Spook revela que Sazed os enganou para que partissem, e Vin percebe que o Poço da Ascensão está em Luthadel. Eles voltam.',
			},
			'woa-52': {
				title: 'Corrida de Estanho',
				description:
					'Sozinha, Vin corre de volta a Luthadel em uma desesperada corrida de estanho, queimando metais até o limite, temendo chegar tarde demais enquanto os koloss atacam a cidade.',
			},
			'woa-53': {
				title: 'Vin Salva Sazed',
				description:
					'Vin chega a Luthadel usando ferraduras para criar um trilho improvisado de Nascida da Bruma. Ela chega exatamente quando Sazed está prestes a ser dominado nos portões, destruindo koloss ao redor com uma única explosão alomântica enquanto skaa assistindo começam a entoar.',
			},
			'woa-54': {
				title: 'Controlando Koloss',
				description:
					'Quase sem estanho e incapaz de derrotar os koloss sozinha, Vin tenta desesperadamente um Empurrão de duralumínio e descobre que pode controlar essas criaturas usando uma fraqueza embutida pelo Senhor Soberano. Ela leva koloss sob controle à Fortaleza Hasting e ordena que Lorde Penrod proteja os cidadãos.',
			},
			'woa-55': {
				title: 'Derrotando Straff',
				description:
					'Vin voa da cidade com um Empurrão de aço amplificado por duralumínio, derruba Straff e seu cavalo, e abate seus oficiais. Enquanto o exército de Cett se junta à luta, ela faz Penrod, Cett e General Janarle reconhecerem Elend como imperador.',
			},
			'woa-57': {
				title: 'A Porta Secreta',
				description:
					'Vin conta a Sazed que o Poço da Ascensão está em Luthadel e que ela pode sentir seu chamado. Após Elend retornar nomeado imperador, ela guia Hammond e Spook a Kredik Shaw, abrindo uma porta alomântica oculta com um Puxão de duralumínio e começando a descida.',
			},
			'woa-58': {
				title: 'Descoberta do Poço',
				description:
					'Vin, Elend, Hammond e Spook descem a uma vasta caverna sob Kredik Shaw e encontram uma piscina branca brilhante — o Poço da Ascensão, pulsando com poder absoluto. Enquanto Vin hesita sobre ser sábia o suficiente para usar o poder, o espírito da bruma aparece e apunhala Elend no estômago, ferindo-o fatalmente.',
			},
			'woa-59': {
				title: 'Liberando o Poder',
				description:
					'Com Elend morrendo ao seu lado, Vin entra na piscina brilhante e toma o imenso poder do Poço. Uma voz lhe diz que a bruma assassina é a bruma profunda retornada. Enganada pela manipulação da profecia por Ruína, acreditando que deve desistir do poder para salvar o mundo — ela o libera. Uma voz triunfante declara: "Estou livre!"',
			},
			'woa-60': {
				title: 'Sobre as Muralhas',
				description:
					'Vin fica com Elend, agora curado, sobre as muralhas de Luthadel. Ela confessa que cometeu um erro terrível ao liberar o poder do Poço — libertou algo que estava preso lá dentro. Elend a tranquiliza de que sobreviverão juntos, venha o que vier.',
			},
			'hoa-3': {
				title: 'O Primeiro Esconderijo',
				description:
					'Vin abre o esconderijo de armazenamento de Vetitan, encontrando comida, suprimentos e uma placa de metal gravada com uma mensagem enigmática do Senhor Soberano sobre o perigo que ele aprisionou e a localização do próximo esconderijo.',
			},
			'hoa-8': {
				title: 'A Doença da Bruma',
				description:
					'Vin observa a bruma atacar refugiados de Vetitan, com um número previsível adoecendo. Fatren não acredita, mas Elend insiste que imunidade requer exposição. Vin interroga o humano koloss sobre reprodução.',
			},
			'hoa-10': {
				title: 'Reunião do Exército',
				description:
					'Vin marcha com o exército de Elend a sudoeste de Luthadel em direção a Fadrex quando Sazed, Breeze, Goradel e Allrianne os alcançam. Sazed compartilha sua crise de fé com Vin, e ela lhe dá o desenho da flor de Mare como conforto.',
			},
			'hoa-12': {
				title: 'Conselho de Guerra',
				description:
					'Vin e Elend discutem como a equipe de Kelsier está perdendo a esperança. Elend convoca um conselho. Eles debatem a bruma que se aproxima, o cultivo de alimentos e planos para tomar os esconderijos de Urteau e Fadrex. Elend pergunta: "O que Kelsier faria?"',
			},
			'hoa-15': {
				title: 'Inimiga na Bruma',
				description:
					'Vin se pergunta por que a bruma parece diferente — ela não se sente mais protegida por ela. O humano koloss diz que a bruma o odeia e odeia Vin também. Surpreendentemente, ela concorda — a bruma agora é inimiga.',
			},
			'hoa-21': {
				title: 'Dezesseis Porcento',
				description:
					'Vin lê o diário de Alendi, ponderando como lutar contra Ruína considerando que ele não pode ler pensamentos. Noorden apresenta dados da doença da bruma. Vin pede que recalcule usando apenas soldados sem exposição prévia. O resultado: exatamente dezesseis por cento. Quatro amostras separadas produzem exatamente a mesma proporção.',
			},
			'hoa-25': {
				title: 'Partindo em Reconhecimento',
				description:
					'O exército de Elend chega a Fadrex. Vin nota formações rochosas naturais e uma entrada semelhante a um cânion que dificultarão o ataque. Elend se oferece para acompanhá-la, mas ela diz que ele ainda não é bom o suficiente. Vin parte ao anoitecer para se infiltrar na cidade.',
			},
			'hoa-27': {
				title: 'Slowswift, o Informante',
				description:
					'Vin se infiltra em Fadrex e visita Slowswift, um informante recomendado por Cett. Ele elogia o governo de Yomen e revela que há um baile esta noite apesar do cerco. Ele se recusa a ajudar a troco de sua alma. Vin argumenta que as cinzas e a bruma assassina acabarão com qualquer estabilidade. Slowswift cede e compartilha as fraquezas de Yomen.',
			},
			'hoa-27.2': {
				title: 'Reconhecimento do Ministério',
				description:
					'Vin procura um segundo informante, mas uma apreensão instintiva a afasta. Ela faz reconhecimento do Ministério de Recursos, sentindo pulsos alomânticos, mas eles desaparecem antes que ela possa localizar a fonte.',
			},
			'hoa-28': {
				title: 'Confiança e um Plano Audacioso',
				description:
					'Vin retorna do reconhecimento e conta a Elend que sentiu o espírito da bruma dentro de Fadrex. Ela fala sobre sua sina como a Herói das Eras, mas Elend adverte que as profecias podem ter sido alteradas. Vin propõe um caminho mais ousado: entrar no baile de Yomen e conversar diretamente.',
			},
			'hoa-30': {
				title: 'Senhora Patresen',
				description:
					'Elend e Vin vão ao baile na Fortaleza Orielle. São anunciados e se separam para socializar. Vin confronta a Senhora Patresen e usa o medo de seus seguidores para avisá-la.',
			},
			'hoa-37': {
				title: 'Fabricando Koloss',
				description:
					'Vin repele os atacantes de Yomen e persegue um Nascido da Bruma misterioso, mas o perde de vista. Ela descobre que o ataque foi uma distração — metade do exército koloss está morto. No acampamento koloss, um humano mostra como fazer koloss — esfolar koloss mortos e remover quatro pontas. Vin compreende a terrível verdade: koloss são feitos de humanos.',
			},
			'hoa-40': {
				title: 'A Terceira Arte',
				description:
					'Vin observa Elend, Hammond, Cett, Noorden e Demoux montarem o quebra-cabeça: Hemalurgia — a terceira arte metálica. Ela percebe que Ruína controla koloss e Inquisidores através de fraquezas na alomancia emocional. Vin implora à bruma que a ajude como ajudou contra o Senhor Soberano — mas apenas o silêncio responde.',
			},
			'hoa-43': {
				title: 'O Segundo Baile',
				description:
					'Vin e Elend vão a um segundo baile no Ministério de Recursos. Vin detecta um Acalmador e um Olho de Estanho a seguindo. No momento de uma distração planejada, ela ataca — dominando os espiões com um Empurrão de latão-duralumínio. Vin veste roupas mais discretas e entra no prédio para encontrar o esconderijo.',
			},
			'hoa-44': {
				title: 'Dentro do Esconderijo',
				description:
					'Vin desce para o subsolo, navegando pelos corredores sob o Ministério de Recursos enquanto confunde guardas com alomancia emocional. Ela alcança o esconderijo de armazenamento — mas uma porta de pedra se fecha atrás dela. Foi sabotado: todo o metal foi removido para que ela não possa Empurrar para abrir. Aprisionada na escuridão. Passos se aproximam, e ela sente um alomante na caverna. Ruína fica diante dela usando o rosto de seu irmão Reen.',
			},
			'hoa-45': {
				title: 'O Rosto de Ruína',
				description:
					'Vin enfrenta a entidade com rosto de Reen. Ela golpeia com uma explosão de zinco-duralumínio — nada acontece, provando que não é uma kandra. Ela ataca, mas ele apenas recua, recusando-se a lutar. Na escuridão, ela se concentra em suas pulsações alomânticas e as reconhece como as do Poço da Ascensão. Isto é Ruína. Ele diz que todas as coisas devem terminar e afirma não ser seu inimigo. E então, um horror mais profundo: ele afirma ter estado com ela desde que ela era criança.',
			},
			'hoa-48': {
				title: 'As Últimas Palavras do Senhor Soberano',
				description:
					'Presa na escuridão completa, Vin tateia pelo esconderijo de armazenamento. Seus dedos encontram uma placa de metal e a leem pelo tato: a confissão final do Senhor Soberano. Ruína falava à sua mente. Ele tentou ser um bom governante. Ele escondeu bem o corpo de Ruína. E ele se importava — se alguém está lendo estas palavras, ele sabe que já está morto. Ela ouve a porta de pedra se abrir.',
			},
			'hoa-50': {
				title: 'Vinho Drogação',
				description:
					'A porta de pedra se abre. Vin usa seu último frasco alomântico e tenta um desesperado Empurrão de aço através de um alçapão no teto — mas está pesado por cima. O primeiro homem através da porta é Telden Hasting, velho amigo de Elend dos tempos de baile. Ele oferece vinho drogado em troca de liberdade. Vin tenta blefar, mas Telden não cai. Ela bebe o vinho e desmaia.',
			},
			'hoa-54': {
				title: 'Prisioneira de Yomen',
				description:
					'Vin acorda acorrentada e sem metais. Yomen tomou todas as precauções — ela enfrenta execução por matar o Senhor Soberano. Ele devolve seu brinco. Inquieta, ela o coloca de volta. Ruína sussurra para ela matar Yomen — mas ela resiste.',
			},
			'hoa-57': {
				title: 'A Natureza de Ruína',
				description:
					'Ruína fala com Vin em sua cela, ensinando sobre entropia — todas as coisas devem terminar, até ele mesmo. Ela percebe que sua influência funciona como alomancia emocional: não é controle mental, mas sussurros que amplificam o que já está lá. Ruína diz que Preservação está morto e o mundo terminará em dias. Mas Vin sente algo inesperado sob sua arrogância — emoção humana e, portanto, fraqueza.',
			},
			'hoa-60': {
				title: 'Na Corte dos Obrigadores',
				description:
					'Vin é levada perante Yomen para julgamento. Acorrentada a um banco, ela secretamente lubrifica seus pulsos e se liberta. Ela avança sobre Yomen, mas ele queima atium e a evita facilmente. Yomen pergunta o propósito do exército. Ela revela a verdade: atium. Yomen declara que não tem valor e encerra a audiência.',
			},
			'hoa-63': {
				title: 'Nascida da Bruma de Atium',
				description:
					'Ruína se gaba de sua vitória iminente. Vin chama os guardas e diz que quer negociar com Yomen. Um obrigador cansado chega, e Vin faz seu avanço: ele não é um Nascido da Bruma. É um Nascido da Bruma de atium — um Vidente. Mapas são trazidos, e Vin marca as localizações dos esconderijos restantes pelo império. Em um lampejo de compreensão, ela percebe: Ruína tem usado ela e Elend para encontrar os esconderijos de armazenamento. Pior — ele a estava manipulando especificamente para encontrar o esconderijo de atium. Marsh chega.',
			},
			'hoa-65': {
				title: 'Libertação',
				description:
					'Vin blefa com Ruína de sua cela. Marsh a agarra e exige a localização do atium, mas ela se recusa. Enquanto Marsh a sacode, Vin rouba um frasco de metal de seu cinto e o engole. Ela remove o brinco — a ponta hemalúrgica que Ruína usava para sussurrar para ela — e o crava na testa de Marsh com duralumínio. Marsh se recupera, inchando com o poder de seus depósitos de ouro, e a estrangula. Vin recorre à bruma, Empurra suas emoções e quebra o controle de Ruína. Marsh foge. Vin chega ao campo de batalha, ordena uma retirada desesperada de volta a Fadrex e forja uma aliança temporária com Yomen.',
			},
			'hoa-67': {
				title: 'Tempestade Iminente',
				description:
					'Vin está com Elend e Yomen dentro de Fadrex enquanto um enorme exército koloss se reúne fora das muralhas. Um terremoto massivo sacode a cidade. Sem acesso à bruma — ainda usando o brinco — Vin pondera como blefar com Ruína. Ela diz a Elend que ele deve ir buscar o esconderijo de atium.',
			},
			'hoa-67.2': {
				title: 'Partida para Luthadel',
				description:
					'Vin deixa Fadrex e voa para o leste em direção a Luthadel, deliberadamente afastando os Inquisidores de Elend e do exército. Ela aposta que pode correr mais rápido que um deus, esperando forçar Ruína a mostrar sua mão.',
			},
			'hoa-72': {
				title: 'O Brinco',
				description:
					'Vin chega a Luthadel perseguida por uma dúzia de Inquisidores. Em Kredik Shaw, Ruína exige a localização do atium. Ela se recusa, e treze Inquisidores atacam. Ela luta magnificamente, mas acaba dominada. Ruína ordena que Marsh termine a tortura. Marsh quebra seus braços, pernas, dedos — um por um. Parte dele resiste. Ele nota o brinco, lembra do aviso de Spook gravado em aço — e o arranca de sua orelha. A voz de Ruína silencia instantaneamente. A bruma flui para Vin, curando suas feridas e a preenchendo com poder.',
			},
			'hoa-73': {
				title: 'Ascensão',
				description:
					'Ardendo com a bruma como uma reserva infinita de metais, Vin se volta contra os doze Inquisidores restantes. Ela mata todos eles com uma facilidade aterrorizante — Empurrões de aço comuns carregam força divina. Com um único Empurrão, ela destrói o próprio Kredik Shaw. Apenas Marsh permanece. Em um momento de misericórdia, ela arranca uma de suas pontas oculares, mas não o mata. Ela tosse uma vez e desaparece, deixando Marsh vivo entre as ruínas.',
			},
			'hoa-76': {
				title: 'Bem-vinda à Divindade',
				description:
					'Vin paira sobre Luthadel, preenchida com o poder de Preservação. Ruína a cumprimenta — uma nuvem mutante de fumaça negra — e zombeteiramente a recebe na divindade. Sua consciência se expande, vendo o planeta inteiro morrer. Ela tenta tampar as montanhas de cinzas e limpar o ar, mas a súbita luz solar superaquece o mundo. Cada correção cria um novo desastre. Ruína explica o equilíbrio entre eles. Vin entende: se ele encontrar a parte oculta de seu corpo, o equilíbrio se quebrará. Abaixo, ela vê Elend marchando em direção a Luthadel.',
			},
			'hoa-79': {
				title: 'Perseguindo Ruína',
				description:
					'Vin sente uma mudança e persegue Ruína até os Poços de Hathsin. Ela vê o acampamento de refugiados e kandra movendo atium, ganhando nova apreciação pelo elaborado encobrimento do Senhor Soberano. Ruína assume o controle de KanPaar e exige a localização do atium.',
			},
			'hoa-80': {
				title: 'Guia do Vento',
				description:
					'Como Preservação, Vin observa as centenas de milhares de refugiados reunidos nos Poços de Hathsin. Ela sussurra o nome de Elend ao vento, guiando-o através do acampamento até a pátria kandra, onde Sazed luta sozinho para proteger o atium.',
			},
			'hoa-81': {
				title: 'Assistindo à Batalha',
				description:
					'Vin vê Elend discursar para os Videntes e liderar os Nascidos da Bruma de atium na carga contra o exército koloss. Por horas, ela observa Elend queimar atium massivamente. Então Marsh aparece, e Vin vê o poder sombrio de Ruína guiando o machado de seu irmão. Elend queima duralumínio e atium juntos em um último lampejo de percepção divina — ele crava sua espada no pescoço de Marsh enquanto um machado atinge seu peito. Elend morre sorrindo.',
			},
			'hoa-81.2': {
				title: 'O Ataque Final',
				description:
					'Ruína triunfa sobre o corpo de Elend. Mas Vin viu o homem que ama sacrificar tudo — ela não deixará que seja em vão. Ignorando a agonia de usar o poder de Preservação para destruição, ela ataca Ruína diretamente. Forças opostas — Preservação golpeando Ruína — algo que nenhum dos Fragmentos deveria sobreviver. O ataque mata tanto Ati quanto Vin. Seu corpo cai ao lado do de Elend nas cinzas.',
			},
			'hoa-83': {
				title: 'Campo de Renascimento',
				description:
					'O corpo de Vin é encontrado em um campo de flores e grama verde — os primeiros sinais do mundo refeito por Sazed. Ela jaz em paz ao lado de Elend.',
			},
		},
		sazed: {
			...enData.movements.sazed,
			'tfe-9': {
				title: 'O mordomo terrisano',
				description:
					'Sazed chega à propriedade de lorde Renoux em Fellise como tutor e mordomo de Vin, ensinando-lhe etiqueta, dança e comportamento. Fala-lhe do trelagismo — a quinta religião que lhe propõe — e admite conhecer 562 mais.',
			},
			'tfe-10.2': {
				title: 'O comício do armazém',
				description:
					'Sazed assiste ao comício secreto do armazém com Kelsier e Vin, observando o Sobrevivente pregar a revolução aos trabalhadores skaa.',
			},
			'tfe-12': {
				title: 'Guardião no baile',
				description:
					'Sazed acompanha Vin ao seu primeiro baile na Fortaleza Venture como seu mordomo, velando por ela enquanto se infiltra na sociedade nobre.',
			},
			'tfe-13': {
				title: 'Debriefing em Fellise',
				description:
					'Sazed retorna à propriedade Renoux em Fellise com Vin e Kelsier para examinar os resultados do primeiro baile de Vin e planejar os próximos passos.',
			},
			'tfe-15': {
				title: 'Salvando Vin',
				description:
					'Sazed leva Vin à loja de Clubs para salvá-la e operá-la após seus ferimentos em Kredik Shaw. Também examina um livro escrito em khlenniano recuperado na missão.',
			},
			'tfe-16': {
				title: 'Retorno a Fellise',
				description:
					'Após estabilizar Vin na loja de Clubs, Sazed retorna à propriedade Renoux em Fellise.',
			},
			'tfe-17': {
				title: 'Traduzindo o livro khlenniano',
				description:
					'Na biblioteca da propriedade Renoux em Fellise, Sazed trabalha na tradução do livro escrito em khlenniano que Vin recuperou em Kredik Shaw.',
			},
			'tfe-18': {
				title: 'Guardião na Fortaleza Elariel',
				description:
					'Sazed acompanha Vin ao baile da Fortaleza Elariel como seu mordomo terrisano, velando por ela enquanto navega a corte nobre.',
			},
			'tfe-19': {
				title: 'Troca de inteligência',
				description:
					'Sazed está na mansão Renoux quando Kelsier retorna pela Rota dos Espinhos. Trocam informações sobre as casas nobres e o progresso da rebelião, enquanto Kelsier sermoneia Vin para ficar longe de Elend.',
			},
			'tfe-22': {
				title: 'Segredos da feruquimia',
				description:
					'Na propriedade Renoux, Sazed fala com Vin sobre o terrisano do diário do Senhor Soberano. Revela os segredos da feruquimia e como os Guardiões foram formados para preservar tudo após a perda da religião terrisana. Aprende novidades sobre seu povo pelo diário — que a terra era outrora verde e fértil.',
			},
			'tfe-23': {
				title: 'Guardião na Fortaleza Hasting',
				description:
					'Sazed acompanha Vin ao baile da Fortaleza Hasting como seu mordomo terrisano, aguardando enquanto ela espalha rumores e conversa com nobres.',
			},
			'tfe-27': {
				title: 'O recado de Marsh',
				description:
					'Sazed retorna à loja de Clubs com uma carta de Marsh contendo notícias e instruções de onde se encontrar. Também traz traduções do diário do Senhor Soberano.',
			},
			'tfe-28': {
				title: 'Guardião na Fortaleza Lekal',
				description:
					'Sazed acompanha Vin ao baile da Fortaleza Lekal como seu mordomo terrisano, aguardando enquanto ela trabalha para acender as Guerras de Casas e conversa com Elend.',
			},
			'tfe-29': {
				title: 'Lições de feruquimia',
				description:
					'Na propriedade Renoux, Sazed entrega a Vin as últimas traduções do diário. Explica a feruquimia com mais detalhes e Vin tenta queimar uma de suas mentes de peltre. Depois, Sazed se junta ao bando quando Kelsier examina um mapa detalhado de Marsh. Naquela noite, sem dormir, Kelsier pede a Sazed que lhe conte sobre religiões.',
			},
			'tfe-30': {
				title: 'Guardião na Fortaleza Venture',
				description:
					'Sazed acompanha Vin ao último baile de casas na Fortaleza Venture. Os convidados selam alianças e lady Valette recebe uma recepção fria. Sazed sai do baile antes de Vin descobrir o complô de assassinato contra Elend e lutar contra Shan Elariel.',
			},
			'tfe-31': {
				title: 'Cuidando dos ferimentos de Vin',
				description:
					'Sazed cuida dos ferimentos de Vin na loja de Clubs depois que ela chega maltratada do combate com Shan Elariel e os assassinos Elariel. Ouve enquanto Vin relata os eventos da noite.',
			},
			'tfe-33': {
				title: 'O refúgio de emergência',
				description:
					'Sazed está no refúgio de reserva perto da loja de Clubs com o bando, depois que Kelsier destruiu os Poços de Hathsin. Vin fala com Sazed sobre o Décimo Primeiro Metal. Quando skaa são levados para execução na Praça da Fonte e Spook aparece enjaulado, Sazed fica no refúgio enquanto Kelsier luta contra o Inquisidor.',
			},
			'tfe-35': {
				title: 'Consolando Vin',
				description:
					'Sazed está com Vin no refúgio de reserva após a morte de Kelsier. Oferece palavras de consolo enquanto Vin esbraveja que Kelsier a abandonou. Fica para trás quando o bando vai ao armazém ver o kandra na forma de Kelsier.',
			},
			'tfe-37': {
				title: 'O feruquimista desacorrentado',
				description:
					'Sazed é levado à cela de Vin em Kredik Shaw. Parece murchar, depois seus músculos incham ao dobro do tamanho ao liberar força feruquímica armazenada, arrombando a porta.',
			},
			'tfe-38': {
				title: 'A queda do Império',
				description:
					'Sazed aparece na confrontação final em Kredik Shaw com um frasco de metais para Vin. Testemunha a queda do Senhor Soberano quando Vin puxa seus braceletes e sua idade aumenta dramaticamente.',
			},
			'tfe-39': {
				title: 'Compreendendo o tirano',
				description:
					'Sazed está com Vin e Marsh no alto de um edifício perto do bairro skaa. Explica que o Senhor Soberano era tanto feruquimista quanto alomante — os braceletes armazenavam sua juventude. Especula que por isso todos os servos terrisanos eram obrigados a ser eunucos: o Senhor Soberano temia que alguém com sangue feruquímico e alomântico desafiasse sua imortalidade.',
			},
			'woa-7': {
				title: 'O Retorno de Marsh',
				description:
					'Sazed continua ensinando skaa libertos na Dominância Oriental. Marsh aparece em sua aldeia, oferecendo-se para guiá-lo ao Conventículo de Seran.',
			},
			'woa-9': {
				title: 'Jornada ao Conventículo',
				description:
					'Sazed e Marsh viajam pela desolada Dominância Oriental em direção ao Conventículo de Seran. Marsh torna-se cada vez mais distante e estranho durante a jornada.',
			},
			'woa-12': {
				title: 'Decifrando as Placas',
				description:
					'Sazed estuda a inscrição de Kwaan no Conventículo, descobrindo o aviso desesperado de um Guardião terrisano de que as profecias do Herói das Eras foram alteradas.',
			},
			'woa-15': {
				title: 'Mortes na Bruma',
				description:
					'Retornando ao oeste via Urbene, Sazed encontra aldeias onde pessoas sofreram mortes inexplicáveis na bruma.',
			},
			'woa-19': {
				title: 'Exército Koloss',
				description:
					'Sazed encontra um exército koloss de vinte mil na Dominância Central. É capturado e levado perante Jastes Lekal.',
			},
			'woa-22': {
				title: 'Retorno a Luthadel',
				description:
					'Sazed chega a Luthadel com notícias cruciais sobre as profecias alteradas e as mortes na bruma.',
			},
			'woa-23': {
				title: 'O Terceiro Exército',
				description:
					'Sazed relata a Elend e à equipe sobre os vinte mil koloss sob o comando de Jastes Lekal. Ele adverte que a bruma está matando pessoas. Mais tarde, passa um tempo a sós com Tindwyl.',
			},
			'woa-30': {
				title: 'Transcrevendo os Relevos',
				description:
					'Sazed transcreve os relevos que fez no Conventículo. Vin entra pela janela e propõe que a bruma é a bruma profunda.',
			},
			'woa-36': {
				title: 'Abrigo no Armazém',
				description:
					'Sazed oferece conforto aos novos refugiados alojados no arsenal. Breeze Acalma todo o grupo com alomancia.',
			},
			'woa-37': {
				title: 'Debate Sobre a Bruma Profunda',
				description:
					'Sazed e Tindwyl estudam um fragmento de biografia do Rei Wednegon. Sazed acredita que a bruma profunda é uma mudança na bruma. Tindwyl expressa seu desejo e Sazed implora para que ela fique.',
			},
			'woa-40': {
				title: 'Discutindo a Profecia',
				description:
					'Sazed está com Tindwyl na Fortaleza Venture, comparando as versões original e alterada das profecias do Herói das Eras.',
			},
			'woa-41': {
				title: 'Profecias Alteradas',
				description:
					'Sazed e Tindwyl discutem as placas de metal do Conventículo e o diário de Alendi. Elend visita pedindo conselhos.',
			},
			'woa-45': {
				title: 'Cantos Rasgados',
				description:
					'Tindwyl descobre que os cantos de sua transcrição foram misteriosamente rasgados. Vin e Elend pedem conselhos amorosos a Sazed. Ele decide garantir que deixem a cidade antes que Luthadel caia.',
			},
			'woa-46': {
				title: 'Plano de Fuga',
				description:
					'Sazed secretamente reúne Breeze, Clubs, Hammond e Dockson. Eles concordam em tirar Elend, Vin, Spook e Tindwyl da cidade antes da batalha.',
			},
			'woa-49': {
				title: 'Vendo-os Partir',
				description:
					'Sazed observa do alto das muralhas enquanto o grupo de Elend escapa das forças de Straff e segue para o norte.',
			},
			'woa-50': {
				title: 'Preparando-se para o Pior',
				description:
					'Sazed preenche suas mentes de metal em preparação para o ataque koloss. Ele discute com Tindwyl sobre ter enviado Elend e Vin embora, e eles se abraçam antes que os alarmes soem.',
			},
			'woa-51': {
				title: 'Koloss Atacam',
				description:
					'Koloss causam um tumulto massivo, aumentando sua fúria enquanto se dirigem à cidade. Sazed observa o início do ataque de seu posto nas muralhas acima do Portão de Aço.',
			},
			'woa-52': {
				title: 'Sagrado Primeiro Testemunha',
				description:
					'Sazed defende o Portão de Aço. Uma multidão de skaa se recusa a fugir, chamando-o de Sagrado Primeiro Testemunha. Quando koloss rompem, ele ativa sua mente de estanho e derruba um enorme koloss com um único golpe.',
			},
			'woa-53': {
				title: 'Defendendo o Portão de Aço',
				description:
					'Sazed luta no Portão de Aço, usando sua mente de ferro para manter o portão fechado. Sua mente de ferro se esgota, koloss rompem novamente, e ele descobre que o Portão de Estanho — onde Tindwyl comandava — caiu.',
			},
			'woa-54': {
				title: 'Procurando Tindwyl',
				description:
					'Após horas de busca, Sazed encontra o corpo de Tindwyl e lamenta — ele não consegue escolher uma cerimônia religiosa para ela.',
			},
			'woa-55': {
				title: 'Encarregado do Comando',
				description:
					'Sazed observa koloss sob controle de Vin e o exército de Cett esmagarem as forças de Straff. Vin coloca Sazed no comando da cidade e parte.',
			},
			'woa-57': {
				title: 'Lutando Contra Marsh',
				description:
					'Sazed percebe que ele é o Sagrado Primeiro Testemunha. O espírito da bruma o incita em direção a Kredik Shaw, onde Marsh o joga contra uma parede.',
			},
			'woa-58': {
				title: 'Sobrevivendo ao Inquisidor',
				description:
					'Marsh quebra as costelas e o braço de Sazed, cravando anéis de metal em sua carne, mas Sazed usa essas mentes de metal para curar-se e continuar lutando. Hammond golpeia o crânio de Marsh.',
			},
			'woa-59': {
				title: 'Tarde Demais no Poço',
				description:
					'Sazed chega ao Poço da Ascensão, mas é tarde demais para impedir Vin de liberar o poder.',
			},
			'woa-60': {
				title: 'Perda de Toda Fé',
				description:
					'Sazed retorna ao Conventículo de Seran e descobre que a inscrição não corresponde mais às suas transcrições. A verdadeira inscrição alerta que Alendi não deve alcançar o Poço. Sazed perde a fé em todas as religiões que coletou.',
			},
			'hoa-4': {
				title: 'Diplomacia no Sul',
				description:
					'Sazed viaja com Breeze para a Cidade Lekal, negociando um tratado para trazer o rei do sul à coalizão de Elend.',
			},
			'hoa-8': {
				title: 'A Caminho do Exército',
				description: 'Sazed viaja com Breeze para se juntar ao exército de Vin e Elend.',
			},
			'hoa-10': {
				title: 'Reunindo-se ao Exército',
				description:
					'Sazed, Breeze, Goradel e Allrianne alcançam o exército de Elend marchando para Fadrex. Sazed compartilha sua crise de fé com Vin.',
			},
			'hoa-12': {
				title: 'Conselho de Guerra',
				description:
					'Sazed participa do conselho de guerra de Elend. Eles discutem a bruma que se aproxima e planos para tomar os esconderijos.',
			},
			'hoa-18': {
				title: 'Jornada ao Norte',
				description:
					'Sazed, Breeze, Allrianne e Capitão Goradel viajam para o norte rumo a Urteau. Sazed continua sua busca por uma religião em que acreditar.',
			},
			'hoa-18.2': {
				title: 'Entre os Terrisanos',
				description:
					'Sazed para nos Poços de Hathsin, reassentados por terrisanos, e aconselha os anciãos, mas se recusa a tornar-se um líder.',
			},
			'hoa-22': {
				title: 'Anomalia Terrisana',
				description:
					'Sazed descobre o fato crucial de que nem um único terrisano foi acometido pela doença da bruma.',
			},
			'hoa-25': {
				title: 'Deixando os Terrisanos',
				description: 'Sazed deixa os Poços de Hathsin e continua sua jornada para o norte.',
			},
			'hoa-29': {
				title: 'Convocado pelo Cidadão',
				description:
					'Sazed, Breeze, Allrianne e sua escolta chegam a Urteau e são imediatamente convocados perante Quellion.',
			},
			'hoa-29.2': {
				title: 'O Lago Subterrâneo',
				description:
					'Spook guia Sazed, Breeze, Allrianne e Goradel a um prédio não utilizado do Ministério da Inquisição, revelando o esconderijo de suprimentos do Senhor Soberano e um lago subterrâneo.',
			},
			'hoa-31': {
				title: 'Desvio de Água',
				description: 'Sazed, Spook e Breeze discutem maneiras de derrubar Quellion.',
			},
			'hoa-38': {
				title: 'Sobrevivente das Chamas',
				description:
					'Sazed e Breeze observam skaa agora caminhando livremente pela bruma. Os locais falam do Sobrevivente das Chamas, mas Sazed ainda não percebe que é Spook.',
			},
			'hoa-41': {
				title: 'Identidade do Sobrevivente',
				description:
					'Sazed vê uma figura carregando uma garota para fora de um prédio em chamas. Pela primeira vez, ele reconhece o Sobrevivente das Chamas como Spook.',
			},
			'hoa-46': {
				title: 'Trelagismo e Confiança',
				description:
					'Sazed espera o retorno de Spook e reexamina o Trelagismo. Spook retorna e pede que ele devolva água aos canais, pedindo apenas confiança.',
			},
			'hoa-49': {
				title: 'Engenharia de Canais',
				description:
					'Sazed começa a pesquisar como reabastecer os canais secos de Urteau. Breeze fica satisfeito ao vê-lo mostrar interesse acadêmico novamente. Beldre implora para que não matem seu irmão.',
			},
			'hoa-53': {
				title: 'Observando Spook Crescer',
				description:
					'Sazed ouve Spook contar a Beldre sobre a vida na equipe de Kelsier. Quando Spook parte para a cidade, Sazed observa o garoto que antes falava gírias de rua tornar-se algo maior.',
			},
			'hoa-56': {
				title: 'A Necessidade de Fé',
				description:
					'Spook diz a Sazed que acredita que alguém está cuidando dele, mesmo que ele falhe. Sazed percebe que o que lhe faltava não era uma religião perfeita, mas a capacidade de acreditar em algo novamente.',
			},
			'hoa-50': {
				title: 'Descoberta da Caverna',
				description: 'Sazed descobre o mecanismo para encher o sistema de canais secos com água.',
			},
			'hoa-58': {
				title: 'Salvando Urteau',
				description:
					'Sazed ensina Spook a operar o dispositivo de desvio de água. Enquanto observa o confronto, Spook arranca as pontas de Quellion e as suas próprias. Spook mergulha em um prédio em chamas, aciona o dispositivo e salva Urteau.',
			},
			'hoa-59': {
				title: 'O Fardo do Anunciador',
				description:
					'TenSoon chega a Urteau e encontra Breeze e Sazed. Ele precisa ver Vin enquanto o fim do mundo se aproxima.',
			},
			'hoa-62': {
				title: 'O Anunciador',
				description:
					'Sazed vigia Spook no hospital. TenSoon revela a verdade: os companheiros de Rashek foram transformados em kandra. As religiões de Sazed ainda estão vivas.',
			},
			'hoa-66': {
				title: 'Cavalgando para Casa',
				description:
					'Sazed monta TenSoon em forma de cavalo, cavalgando para o sul rumo à pátria kandra. TenSoon conta a história dos kandra.',
			},
			'hoa-68': {
				title: 'O Portador do Mundo',
				description:
					'Sazed é guiado pelos túneis kandra. Ele se declara o Anunciador. A Primeira Geração aparece e o chama de Portador do Mundo.',
			},
			'hoa-71': {
				title: 'O Confiado',
				description:
					'Sazed e a Primeira Geração examinam as alterações de Ruína. Sazed descobre o enorme esconderijo de atium que os kandra esconderam por séculos.',
			},
			'hoa-75': {
				title: 'O Golpe',
				description:
					'Sazed aprende sobre a religião kandra. KanPaar executa um golpe. Sazed é aprisionado.',
			},
			'hoa-78': {
				title: 'Resgatado por TenSoon',
				description: 'TenSoon resgata Sazed e a Primeira Geração durante a guerra civil.',
			},
			'hoa-79': {
				title: 'Começa a Decisão',
				description:
					'TenSoon ataca Sazed — Ruína assumiu o controle dos kandra através de suas Bênçãos.',
			},
			'hoa-80': {
				title: 'Defendendo o Confiado',
				description:
					'Sazed sela a porta da câmara do Confiado contra kandra rebeldes. Elend entra na câmara.',
			},
			'hoa-81': {
				title: 'O Corpo de um Deus',
				description:
					'Sazed revela a verdade: atium é o corpo de Ruína. Todos os soldados derrubados pela bruma eram Videntes. Sazed reabastece os soldados enquanto assiste à batalha final.',
			},
			'hoa-82': {
				title: 'Herói das Eras',
				description:
					'Sazed vê os corpos de Vin e Ati ao lado do corpo de Elend. Ele toma tanto Preservação quanto Ruína e usa todo o conhecimento de suas mentes de cobre para restaurar o mundo, tornando-se Harmonia.',
			},
			'hoa-83': {
				title: 'Harmonia',
				description:
					'Sazed ascende como Harmonia, combinando Ruína e Preservação. Ele refaz o mundo — movendo o planeta, restaurando a vegetação, curando mil anos de danos.',
			},
		},
		elend: {
			...enData.movements.elend,
			'tfe-12': {
				title: 'O nobre leitor',
				description:
					'Elend Venture nota Vin sozinha numa varanda durante um baile em sua própria fortaleza e se aproxima. Irrita-a tirando Provas do Monumento e começando a ler enquanto o resto da nobreza dança e intriga ao redor.',
			},
			'tfe-18': {
				title: 'Uma noite com Valette',
				description:
					'Elend assiste ao baile da Fortaleza Elariel, onde se senta à mesa com Vin lendo, como sempre. Elogia seu vestido, deixando-a boquiaberta.',
			},
			'tfe-23': {
				title: 'O lenço',
				description:
					'Elend encontra Vin no baile da Fortaleza Hasting. Ela pergunta se ele esteve com uma skaa. Ele confessa que seu pai o obrigou aos treze anos e a mulher foi morta depois, mas nunca mais fez isso. Dá um lenço a Vin, sinalizando seu desejo de cortejá-la. Após ir embora com seus amigos, sobem a uma torre para debater as falhas do Senhor Soberano.',
			},
			'tfe-28': {
				title: 'Baile na Fortaleza Lekal',
				description:
					'Elend surpreende Vin no baile da Fortaleza Lekal. Diz que quer beijá-la, mas Vin insiste que ele não a conhece de verdade. Passeiam e Elend revela que a fortuna dos Venture vem inteiramente da extração de atium nos Poços de Hathsin. Menciona que os Tekiel foram mortos pela Casa Hasting e tenta convencer Valette a deixar Luthadel.',
			},
			'tfe-28.2': {
				title: 'O chamado do pai',
				description:
					'Elend retorna à Fortaleza Venture e tenta passar despercebido pelo quarto de seu pai. Lorde Straff Venture, um vigília de estanho que não deixa nada passar, o chama. Straff ordena que Elend jante com a Casa Hasting e uma de suas filhas. Depois, Jastes chega e revela que mandou seguir a carruagem de lady Valette — ela chegou a Fellise apenas com o terrisano, Valette desaparecera. Elend, percebendo que revelou o segredo do atium, propõe um acordo a seu pai: irá ao almoço em troca de espiões para vigiar Valette.',
			},
			'tfe-30': {
				title: 'O baile Venture',
				description:
					'Elend janta com seu pai na Fortaleza Venture durante o baile. Vin atrai sua atenção e têm uma confrontação. Quando Vin descobre o plano de assassinato contra Elend, corre pelas brumas. A noite termina em caos quando Vin luta e mata lady Shan Elariel. Na confusão, Elend escapa.',
			},
			'tfe-31': {
				title: 'Os relatórios dos espiões',
				description:
					'Elend e Jastes se encontram com Felt, que relata tudo o que os espiões de Elend descobriram sobre a loja de Clubs e seus ocupantes. Depois, guardas Venture levam Elend a seu pai Straff, que revela que Shan Elariel era uma Nascida da Bruma enviada para assassinar Elend.',
			},
			'tfe-33': {
				title: 'As carroças de execução',
				description:
					'Elend vê os servos de Renoux enjaulados em uma carroça de execução na Praça da Fonte. Grita por Valette, sem encontrá-la na multidão.',
			},
			'tfe-34': {
				title: 'Kelsier salva Elend',
				description:
					'Elend chega à jaula de Renoux na Praça da Fonte e pergunta por Valette. Um Inquisidor pousa sobre a jaula e está prestes a golpear Elend quando Kelsier ataca o Inquisidor, salvando-lhe a vida. Kelsier grita a Elend que Valette está bem.',
			},
			'tfe-36': {
				title: 'Autoridade da Casa Venture',
				description:
					'O pai de Elend informa que estourou uma rebelião skaa e quer fugir de Luthadel. Elend se recusa a ir. Straff aceita, esperando que Elend morra, e transfere-lhe a autoridade da Casa Venture. Elend ordena seus soldados à Fortaleza Lekal para defesa mútua, depois toma seus cinco melhores soldados e vai se apresentar à liderança skaa.',
			},
			'tfe-37': {
				title: 'Resgatando Vin',
				description:
					'Elend oferece ouro a skaa para ser levado até Dockson e diz que a Casa Venture não resistirá à rebelião — devem cooperar. Depois, Elend e seis soldados invadem Kredik Shaw para resgatar Vin. O segredo é revelado — ele sabe que ela é Nascida da Bruma. Vin agarra sua cabeça e o beija, depois parte para matar o Senhor Soberano.',
			},
			'tfe-38': {
				title: 'O rei filósofo',
				description:
					'Após a morte do Senhor Soberano, Elend emerge como uma voz unificadora clamando por ordem. Começa a se reunir com líderes skaa e nobres para redigir um código de leis para a nova nação.',
			},
			'tfe-39': {
				title: 'O novo rei',
				description:
					'Elend Venture é aceito como rei da Dominância Central após um formidável discurso perante líderes skaa e nobres. Senta-se na Fortaleza Venture redigindo o novo código de leis. Vin o observa secretamente das brumas pela janela antes de correr até ele — se abraçam.',
			},
			'woa-1': {
				title: 'Rei na Muralha',
				description:
					'Elend fica nas muralhas de Luthadel observando cinquenta mil soldados sob o comando de seu pai, Straff Venture, chegarem e acamparem. O cerco de Luthadel começou.',
			},
			'woa-3': {
				title: 'Escrevendo Leis',
				description:
					'Elend redige propostas para a Assembleia. Vin se junta a ele após seu encontro com o espírito da bruma, e Ham chega com notícias de que os assassinos provavelmente foram enviados pelo Rei Cett.',
			},
			'woa-5': {
				title: 'Rei Erudito',
				description:
					'Elend gerencia a logística da cidade sitiada com Dockson. Vin se junta a eles após dar a OreSeur seu novo corpo de cão-lobo.',
			},
			'woa-6': {
				title: 'Observando da Sacada',
				description:
					'Elend observa Vin treinar com Ham no pátio, apostando com Clubs sobre o resultado.',
			},
			'woa-10': {
				title: 'Discurso na Assembleia',
				description:
					'Elend discursa para a Assembleia, com Vin e Ham como guarda-costas. Uma estranha mulher terrisana está na plateia. Durante a reunião, chega a notícia de que as forças do Rei Cett apareceram nos arredores de Luthadel.',
			},
			'woa-11': {
				title: 'Reconhecimento nas Muralhas',
				description:
					'Elend faz reconhecimento do exército de Cett das muralhas com Vin e Clubs. Retorna à Fortaleza Venture e descobre ossos de kandra — o medo de um impostor cresce.',
			},
			'woa-13': {
				title: 'Convocando um Conselho',
				description:
					'Elend reúne a equipe para um conselho de guerra para discutir a estratégia contra os dois exércitos sitiantes. Tindwyl solicita uma audiência privada.',
			},
			'woa-14': {
				title: 'Educação de um Rei',
				description:
					'Tindwyl começa a educar Elend sobre realeza. Vin desconfia, mas ele lentamente começa a mudar sob a tutela de Tindwyl.',
			},
			'woa-20': {
				title: 'Estratégia de Negociação',
				description:
					'Elend, Dockson, Hammond, Clubs e Breeze discutem planos para negociar com Straff. Allrianne Cett chega pedindo asilo — e Breeze.',
			},
			'woa-21': {
				title: 'Hospitalidade a Allrianne',
				description:
					'Elend oferece hospitalidade a Allrianne quando ela chega inesperadamente ao palácio. Dockson sugere usá-la como moeda de troca.',
			},
			'woa-22': {
				title: 'Lutando com a Governança',
				description:
					'Com o cerco se apertando, Elend luta com a Assembleia e as exigências da governança enquanto Vin persegue Zane na bruma.',
			},
			'woa-23': {
				title: 'O Terceiro Exército',
				description:
					'Elend ouve Sazed relatar vinte mil koloss marchando sob o comando de Jastes Lekal. O perigo agora é triplo.',
			},
			'woa-26': {
				title: 'Negociando com Straff',
				description:
					'Elend viaja com Vin ao acampamento de guerra de Straff Venture. Vin demonstra poder aterrorizante como intimidação.',
			},
			'woa-27': {
				title: 'Blefe e Queda',
				description:
					'Straff ameaça matar Elend durante as negociações. Vin e Elend blefam com sucesso — Straff os deixa partir. No caminho de volta, Elend recebe a notícia de que a Assembleia votou pela desconfiança: ele não é mais rei.',
			},
			'woa-31': {
				title: 'Discurso na Assembleia',
				description:
					'Elend nomeia Lorde Penrod como chanceler na Assembleia e invoca o legado de Kelsier através de Vin. A nomeação do novo rei começa.',
			},
			'woa-32': {
				title: 'Concedendo a Derrota',
				description:
					'Elend aceita sua derrota política enquanto a nomeação do rei continua. Ele observa a Assembleia, Vin ao seu lado.',
			},
			'woa-34': {
				title: 'Estudando Estratégia',
				description:
					'Elend estuda estratégia na biblioteca com a equipe. Vin ouve um barulho do lado de fora e encontra Zane no telhado.',
			},
			'woa-35': {
				title: 'Jantar com Cett',
				description:
					'Elend e Vin jantam com Lorde Cett na Fortaleza Hasting. Cett oferece comida em troca do esconderijo de atium — Elend diz que não foi encontrado.',
			},
			'woa-36': {
				title: 'O Segredo de Demoux',
				description:
					'Elend descobre que Demoux secretamente lidera a Igreja do Sobrevivente. Apesar da traição política, ele mantém Demoux em sua posição.',
			},
			'woa-38': {
				title: 'Eleição do Rei',
				description:
					'Elend revela que se juntou à Igreja do Sobrevivente na Assembleia. Um assassino ataca — Vin luta contra seis alomantes. A Assembleia elege Penrod como rei.',
			},
			'woa-39': {
				title: 'Deposto',
				description:
					'Elend processa sua deposição enquanto Vin se recupera na Fortaleza Venture. Ele trabalha nos bastidores para manter a cidade unida.',
			},
			'woa-40': {
				title: 'Ao Lado de Vin',
				description:
					'Elend fica ao lado de Vin enquanto ela se recupera na Fortaleza Venture. Ele se encolhe quando ela o toca — algo mudou.',
			},
			'woa-41': {
				title: 'Buscando Conselhos',
				description:
					'Elend visita Sazed e Tindwyl pedindo conselhos sobre como recuperar sua autoridade.',
			},
			'woa-43': {
				title: 'Após o Ataque',
				description:
					'Elend lida com as consequências do ataque de Vin ao exército de Cett. Cett se retira de Luthadel.',
			},
			'woa-44': {
				title: 'Partindo de Luthadel',
				description:
					'Vin diz a Elend que eles devem deixar Luthadel e ir para o norte, para Terris. Ela lhe confia uma pepita de atium através de OreSeur.',
			},
			'woa-45': {
				title: 'Aconselhamento Amoroso',
				description:
					'Elend e Vin buscam conselhos amorosos com Sazed. Sazed decide garantir que eles deixem Luthadel antes que a cidade caia.',
			},
			'woa-49': {
				title: 'Fuga pelo Portão de Estanho',
				description:
					'Elend, Vin e Spook escapam de Luthadel pelo Portão de Estanho, evadindo as forças de Straff sob a cobertura da bruma.',
			},
			'woa-50': {
				title: 'Acampamento ao Norte',
				description:
					'A um dia ao norte de Luthadel, Elend acampa com Vin e Spook. Spook sente algo os perseguindo na bruma.',
			},
			'woa-51': {
				title: 'Jastes e Justiça',
				description:
					'Elend confronta seu velho amigo Jastes Lekal, que abandonou os koloss — e agora persegue o grupo de Elend. Elend executa Jastes. Spook revela que Sazed os enganou.',
			},
			'woa-52': {
				title: 'Correndo de Volta',
				description:
					'Elend cavalga de volta a Luthadel desesperadamente enquanto Vin dispara à frente em uma corrida de estanho. Ele chega durante a batalha.',
			},
			'woa-54': {
				title: 'Comandando a Defesa',
				description:
					'Elend ajuda a organizar as defesas da cidade contra os koloss. Vin chega com koloss sob controle e ordena que Penrod proteja os cidadãos.',
			},
			'woa-55': {
				title: 'Imperador Elend',
				description:
					'Após Vin derrotar Straff, ela faz Penrod, Cett e General Janarle reconhecerem Elend como imperador. Elend aceita seu novo papel.',
			},
			'woa-57': {
				title: 'Descendo ao Poço',
				description:
					'Elend, Vin, Hammond e Spook descem a uma caverna sob Kredik Shaw. Eles encontram o Poço da Ascensão — e o espírito da bruma apunhala Elend.',
			},
			'woa-58': {
				title: 'Ferido Mortalmente',
				description:
					'Elend jaz morrendo no chão da caverna, apunhalado pelo espírito da bruma. Vin entra na piscina brilhante e toma o poder do Poço.',
			},
			'woa-59': {
				title: 'Transformado',
				description:
					'Vin usa o poder do Poço para curar Elend, alimentando-o com a última conta de lerasium — transformando-o em Nascido da Bruma e salvando sua vida.',
			},
			'woa-60': {
				title: 'Imperador Nascido da Bruma',
				description:
					'Elend fica nas muralhas de Luthadel, agora um Nascido da Bruma. Vin confessa que liberar o poder foi um erro terrível. Elend promete que sobreviverão juntos.',
			},
			'hoa-1': {
				title: 'Imperador e General',
				description:
					'Elend lidera seu exército em campanha para unificar as Dominâncias. Ele queima atium pela primeira vez em combate.',
			},
			'hoa-3': {
				title: 'O Esconderijo de Vetitan',
				description:
					'Elend e Vin abrem o esconderijo de armazenamento em Vetitan. Eles encontram suprimentos e uma placa de metal com uma mensagem enigmática do Senhor Soberano.',
			},
			'hoa-5': {
				title: 'Marchando para Fadrex',
				description:
					'Elend marcha com seu exército em direção a Fadrex, determinado a garantir o esconderijo de armazenamento de lá.',
			},
			'hoa-8': {
				title: 'Imunidade à Bruma',
				description:
					'Elend insiste que a imunidade à doença da bruma requer exposição. Ele discute com Fatren sobre como proteger seu povo.',
			},
			'hoa-10': {
				title: 'Reunindo a Equipe',
				description:
					'Sazed, Breeze, Goradel e Allrianne se juntam ao exército de Elend. Elend dá as boas-vindas a eles enquanto continua marchando para Fadrex.',
			},
			'hoa-12': {
				title: 'Conselho de Guerra',
				description:
					'Elend convoca um conselho de guerra. Ele pergunta a todos: "O que Kelsier faria?" A equipe debate planos para tomar os esconderijos de Urteau e Fadrex.',
			},
			'hoa-21': {
				title: 'Analisando Dados',
				description:
					'Elend revisa os dados da doença da bruma de Noorden. Vin descobre a proporção exata de dezesseis por cento.',
			},
			'hoa-25': {
				title: 'Chegada a Fadrex',
				description:
					'O exército de Elend chega a Fadrex. Ele se oferece para acompanhar Vin na infiltração, mas ela diz que ele ainda não é bom o suficiente.',
			},
			'hoa-28': {
				title: 'Um Plano Audacioso',
				description:
					'Elend ouve Vin propor entrar no baile de Yomen. Ele apoia seu plano ousado de confrontar Yomen diretamente.',
			},
			'hoa-30': {
				title: 'Baile em Fadrex',
				description:
					'Elend e Vin vão ao baile na Fortaleza Orielle. Eles são anunciados e se separam para socializar com a nobreza de Fadrex.',
			},
			'hoa-35': {
				title: 'Cerco de Fadrex',
				description:
					'Elend conduz o cerco de Fadrex, equilibrando táticas militares com negociações políticas.',
			},
			'hoa-37': {
				title: 'A Verdade Sobre os Koloss',
				description:
					'Elend descobre que koloss são feitos de humanos. Ele fica horrorizado, mas usa o conhecimento para desenvolver novas estratégias.',
			},
			'hoa-40': {
				title: 'Hemalurgia Descoberta',
				description:
					'Elend ajuda a montar o quebra-cabeça da Hemalurgia — a terceira arte metálica. Ele percebe que Ruína controla koloss e Inquisidores.',
			},
			'hoa-43': {
				title: 'Segundo Baile',
				description:
					'Elend e Vin vão a um segundo baile, desta vez no Ministério de Recursos. Vin orquestra uma distração para poder se infiltrar.',
			},
			'hoa-55': {
				title: 'Preocupação por Vin',
				description:
					'Elend fica cada vez mais preocupado quando Vin não retorna de sua missão de infiltração em Fadrex.',
			},
			'hoa-62': {
				title: 'Reunido com Vin',
				description:
					'Elend se reúne com Vin após sua fuga de Fadrex. Eles planejam seus próximos movimentos contra Ruína.',
			},
			'hoa-65': {
				title: 'Correndo para Luthadel',
				description:
					'Elend lidera seu exército em direção a Luthadel enquanto Vin atrai os Inquisidores para longe.',
			},
			'hoa-67': {
				title: 'Dentro de Fadrex',
				description:
					'Elend está dentro de Fadrex com Vin e Yomen enquanto um enorme exército koloss se reúne do lado de fora.',
			},
			'hoa-72': {
				title: 'Marchando para os Poços',
				description:
					'Elend lidera seu exército em direção aos Poços de Hathsin, acreditando que a batalha final será travada lá.',
			},
			'hoa-73': {
				title: 'Acampamento nos Poços',
				description:
					'Elend chega aos Poços de Hathsin com seu exército e encontra centenas de milhares de refugiados.',
			},
			'hoa-76': {
				title: 'Preparando-se para a Batalha',
				description:
					'Elend prepara seu exército para a batalha final enquanto Vin luta com Ruína nos céus.',
			},
			'hoa-79': {
				title: 'A Carga Final',
				description:
					'Elend discursa para os Videntes — soldados que foram derrubados pela bruma e sobreviveram, agora revelados como Nascidos da Bruma de atium.',
			},
			'hoa-80': {
				title: 'Na Câmara do Confiado',
				description:
					'Elend entra na câmara do Confiado e encontra Sazed defendendo o esconderijo de atium.',
			},
			'hoa-81': {
				title: 'A Última Batalha de Elend',
				description:
					'Elend lidera seus Videntes em uma carga contra o exército koloss, queimando atium massivamente. Ele enfrenta Marsh em combate singular. Em um último lampejo de percepção divina — queimando duralumínio e atium juntos — Elend crava sua espada no pescoço de Marsh enquanto o machado de Marsh atinge seu peito. Ele morre sorrindo, sabendo que deu a Vin a abertura de que ela precisava.',
			},
		},
		marsh: {
			...enData.movements.marsh,
			'tfe-7': {
				title: 'O irmão relutante',
				description:
					'Marsh chega à loja de Clubs, irmão mais velho de Kelsier e líder rebelde por direito próprio. Junta-se ao plano do bando a contragosto.',
			},
			'tfe-10.2': {
				title: 'O comício do armazém',
				description:
					'Marsh assiste ao comício secreto do armazém com o bando, vendo seu irmão Kelsier pregar a revolução aos trabalhadores skaa reunidos.',
			},
			'tfe-20': {
				title: 'Ensinando Vin',
				description:
					'Marsh chega à propriedade Renoux em Fellise para ensinar Vin a buscar — usar bronze para detectar outros alomantes queimando metais, identificar o tipo e distinguir brumosos de Nascidos da Bruma. Também lhe ensina sobre cobre e como os abafadores podem ocultar pulsos alomânticos.',
			},
			'tfe-27': {
				title: 'A infiltração no Ministério',
				description:
					'Marsh se encontra com Kelsier e Vin em um edifício abandonado dos Meandros, ostentando as tatuagens de um obrigador de baixo escalão do Cantão da Inquisição. Infiltrou-se de fato no Ministério. Revela que o Ministério coloca apaziguadores nas regiões skaa sob apaziguamento constante, ocultos por abafadores. Confirma que os Inquisidores podem morrer de velhice.',
			},
			'tfe-30': {
				title: 'Desaparecimento',
				description:
					'Marsh fica em silêncio, suas comunicações cessam ao desaparecer nos níveis mais profundos do Cantão da Inquisição. O bando teme o pior.',
			},
			'tfe-32': {
				title: 'O corpo',
				description:
					'Kelsier e Vin encontram o corpo de Marsh, completamente drenado de sangue, uma casca sem vida. Sua carta, encontrada depois na loja de Clubs, explica que os Inquisidores provavelmente o encontrariam. O bando o chora. Mas o cadáver mutilado não é o que parece.',
			},
			'tfe-38': {
				title: 'O Inquisidor',
				description:
					'Marsh aparece durante o assalto final a Kredik Shaw — vivo, transformado com onze pregos de metal: dois pelos olhos, oito no peito, um nas costas unindo-os. Mata o Inquisidor Kar arrancando-lhe um prego do pescoço e revela que matou todos os outros Inquisidores.',
			},
			'tfe-39': {
				title: 'Onze pregos',
				description:
					'Marsh está com Sazed e Vin no alto de um edifício perto do bairro skaa. Fala de sua sobrevivência e transformação — onze pregos, o processo horrendo e como resistiu. Também lhes conta sobre os kandra, criaturas evoluídas dos espectros de bruma, e que o kandra que interpretou lorde Renoux agora reconhece Vin como sua dona.',
			},
			'woa-7': {
				title: 'Guia ao Conventículo',
				description:
					'Marsh aparece na aldeia de Sazed na Dominância Oriental, oferecendo-se para guiá-lo ao Conventículo de Seran.',
			},
			'woa-9': {
				title: 'Viajando com Sazed',
				description:
					'Marsh viaja com Sazed em direção ao Conventículo de Seran. Durante a jornada, seu comportamento torna-se cada vez mais errático.',
			},
			'woa-12': {
				title: 'Abandonado',
				description:
					'Marsh abandona Sazed abruptamente no Conventículo e desaparece na natureza. A influência de Ruína está crescendo.',
			},
			'woa-57': {
				title: 'Peão de Ruína',
				description:
					'Marsh aparece em Kredik Shaw totalmente sob o controle de Ruína, jogando Sazed contra uma parede.',
			},
			'woa-58': {
				title: 'Derrubado',
				description: 'Marsh espanca Sazed, mas Hammond golpeia o crânio de Marsh, nocauteando-o.',
			},
			'hoa-0': {
				title: 'Criando Inquisidores',
				description:
					'Sob o controle de Ruína, Marsh realiza um ritual sombrio de Hemalurgia em Tathingdwen, criando novos Inquisidores.',
			},
			'hoa-6': {
				title: 'Liderando Koloss',
				description: 'Marsh comanda os crescentes exércitos koloss para Ruína.',
			},
			'hoa-13': {
				title: 'Peça de Ruína',
				description:
					'Marsh senta-se em um acampamento koloss, decidindo parar de resistir e fingir submissão.',
			},
			'hoa-34': {
				title: 'Próximo a Tyrian',
				description:
					'Marsh opera perto do Monte Tyrian, criando pontas hemalúrgicas com prisioneiros.',
			},
			'hoa-42': {
				title: 'Empalando Penrod',
				description:
					'Marsh se infiltra em Luthadel e crava uma ponta de bronze no coração do Rei Penrod.',
			},
			'hoa-63': {
				title: 'Confrontando Vin',
				description:
					'Marsh encontra Vin aprisionada no Ministério de Recursos. Ele se ajoelha diante de Ruína. Yomen revela que há apenas sete contas de atium, e Ruína fica furioso.',
			},
			'hoa-65': {
				title: 'Exigindo Atium',
				description:
					'Marsh agarra Vin e exige a localização do atium. Vin rouba um frasco de metal de seu cinto, remove seu brinco e o crava na testa de Marsh.',
			},
			'hoa-65.2': {
				title: 'Irmão do Imperador',
				description:
					'Marsh se recupera, inchando com o poder de seus depósitos de ouro, e estrangula Vin. Vin recorre à bruma, Empurra suas emoções e quebra o controle de Ruína. Marsh foge.',
			},
			'hoa-69': {
				title: 'Destino do Mensageiro',
				description:
					'Marsh embosca e mata o Capitão Goradel, que carregava a mensagem urgente de Spook. Ele lê o aviso gravado em aço.',
			},
			'hoa-72': {
				title: 'O Brinco',
				description:
					'Marsh tortura Vin em Kredik Shaw. Parte dele resiste — ele percebe o brinco e o arranca de sua orelha. A voz de Ruína silencia.',
			},
			'hoa-73': {
				title: 'Não Submetido',
				description:
					'Marsh observa Vin massacrar os Inquisidores e destruir Kredik Shaw. Vin arranca uma de suas pontas oculares, mas não o mata.',
			},
			'hoa-81': {
				title: 'Matando Elend',
				description:
					'Impulsionado por Ruína, Marsh ataca Elend na batalha dos Poços de Hathsin. Um duelo feroz onde ambos queimam atium. Elend, em um último lampejo de percepção divina, crava sua espada no pescoço de Marsh. Marsh se cura e decapita o imperador — mas Elend morre sorrindo. Quando Vin destrói Ruína, o poder que controlou Marsh por anos desaparece. Ele desaba entre os mortos, finalmente dono de si mesmo.',
			},
		},
		spook: {
			...enData.movements.spook,
			'tfe-7': {
				title: 'O jovem vigília de estanho',
				description:
					'Spook, o jovem sobrinho de Clubs, trabalha como vigília e mensageiro do bando na carpintaria, falando em gírias cerradas do leste.',
			},
			'tfe-9': {
				title: 'Corridas de mensageiro',
				description:
					'Spook leva mensagens entre a loja de Clubs em Luthadel e a propriedade Renoux em Fellise; seus sentidos amplificados pelo estanho fazem dele um explorador excepcional.',
			},
			'tfe-16': {
				title: 'Velando Vin',
				description:
					'Lestibournes vela por Vin ferida na loja de Clubs, presente quando ela acorda dos ferimentos da missão de reconhecimento de Kredik Shaw. Conta que Kelsier lhe deu um novo nome: Spook.',
			},
			'tfe-22': {
				title: 'O lenço',
				description:
					'Spook visita a propriedade Renoux em Fellise e encontra Vin lendo o diário do Senhor Soberano. Diz que Dockson veio buscar mais armas e, corado e nervoso, lhe entrega um lenço antes de sair correndo. Sazed explica depois que assim um jovem cavaleiro sinaliza seu desejo de cortejar seriamente uma dama.',
			},
			'tfe-24': {
				title: 'Noite na loja de Clubs',
				description:
					'Spook compartilha uma bebida noturna com Kelsier, Ham e Clubs na loja de Clubs enquanto o bando discute o estado da missão.',
			},
			'tfe-26': {
				title: 'As execuções',
				description:
					'Spook irrompe na loja de Clubs para anunciar execuções na Praça da Fonte. Acompanha o bando à praça, onde presenciam a brutal execução pública de mulheres e crianças skaa, seu sangue despejado na fonte.',
			},
			'tfe-32': {
				title: 'Vigília no telhado',
				description:
					'Spook vigia do telhado da loja de Clubs com Vin, ensinando-lhe truques de estanho. Explica que não é só sobre amplificar os sentidos, mas filtrar o importante e não se deixar distrair pelo resto.',
			},
			'tfe-33': {
				title: 'Vigília de guarda',
				description:
					'Quando o bando vai à Praça da Fonte, Spook é avistado em uma das carroças de execução junto a lorde Renoux — capturado pelo Ministério.',
			},
			'tfe-34': {
				title: 'Testemunha do sacrifício',
				description:
					'Spook observa da multidão Kelsier lutar e morrer na Praça da Fonte — um evento que marcará o resto de sua vida. O sacrifício do Sobrevivente transforma a compreensão de Spook sobre o que significa servir a uma causa.',
			},
			'tfe-38': {
				title: 'A revolução',
				description:
					'Spook luta ao lado do bando durante a revolução final, ajudando a coordenar o levante skaa nas ruas de Luthadel.',
			},
			'woa-6': {
				title: 'Batedor em Crescimento',
				description:
					'Spook retorna a Luthadel de missões de reconhecimento e se reúne com a equipe na Fortaleza Venture.',
			},
			'woa-11': {
				title: 'Reunião da Equipe',
				description:
					'Spook está presente na Fortaleza Venture enquanto a equipe se reagrupa após a chegada do segundo exército de Cett.',
			},
			'woa-13': {
				title: 'Conselho de Guerra',
				description:
					'Spook comparece ao conselho de guerra de Elend para discutir a estratégia contra os dois exércitos sitiantes.',
			},
			'woa-20': {
				title: 'No Conselho de Guerra',
				description:
					'Spook está entre a equipe enquanto Elend discute planos para negociar com Straff.',
			},
			'woa-23': {
				title: 'Retorno de Sazed',
				description:
					'Spook está presente quando Sazed retorna e relata sobre o exército koloss e as mortes na bruma.',
			},
			'woa-25': {
				title: 'Acompanhante de Compras',
				description:
					'Spook acompanha Vin, Tindwyl, Allrianne e OreSeur nas compras — relutantemente, é claro.',
			},
			'woa-44': {
				title: 'Procurando Vin',
				description:
					'Spook se junta a Elend e Hammond para discutir o ataque de Vin a Cett. OreSeur os guia ao esconderijo de Camon.',
			},
			'woa-49': {
				title: 'Os Exilados',
				description:
					'Spook deixa Luthadel pelo Portão de Estanho com Vin, Elend e Allrianne, seguindo para o norte.',
			},
			'woa-50': {
				title: 'Algo na Bruma',
				description:
					'Desfazendo o acampamento ao norte da cidade, Spook é o primeiro a sentir algo rastreando o grupo na bruma.',
			},
			'woa-51': {
				title: 'Cinco Perseguidores',
				description:
					'Os sentidos amplificados de Spook detectam cinco homens. Após a execução de Jastes, Spook revela o segredo de Sazed. O grupo retorna.',
			},
			'woa-52': {
				title: 'Cavalgando de Volta',
				description: 'Spook cavalga desesperadamente de volta à cidade sitiada com Elend.',
			},
			'woa-56': {
				title: 'Refugiados Terrisanos',
				description:
					'Spook está com Elend quando encontram refugiados terrisanos fugindo de Tathingdwen. Quando espectros da bruma aparecem, a chegada de Spook os afasta.',
			},
			'woa-57': {
				title: 'Dentro da Cidade',
				description: 'Spook entra em Luthadel com os refugiados e se reúne com Vin.',
			},
			'woa-58': {
				title: 'A Caverna',
				description:
					'Spook desce com Vin, Elend e Hammond à caverna cheia de fumaça sob Kredik Shaw.',
			},
			'hoa-14': {
				title: 'Olho de Estanho',
				description:
					'Assombrado pela culpa da morte de Clubs, Spook queima estanho constantemente. Ele perambula pelos canais secos de Urteau à noite, sentidos amplificados transformando a luz das estrelas em dia.',
			},
			'hoa-14.2': {
				title: 'Conselho do Cidadão',
				description:
					'Spook observa as reuniões de Quellion, secretamente vigiando a irmã do Cidadão, Beldre.',
			},
			'hoa-16': {
				title: 'Testemunha da Atrocidade',
				description:
					'Spook, vendado e fingindo ser um mendigo cego, observa os guardas de Quellion prenderem nobres em um prédio e atearem fogo.',
			},
			'hoa-16.2': {
				title: 'Esfaqueado na Multidão',
				description:
					'Spook segue o Cidadão e fala com Beldre. É descoberto, luta contra três guardas alomânticos e é perfurado por uma espada.',
			},
			'hoa-19': {
				title: 'Voz nas Chamas',
				description:
					'Spook acorda dentro de um prédio em chamas. Uma voz que afirma ser Kelsier o guia a um frasco alomântico. Ele bebe e descobre que pode queimar estanho.',
			},
			'hoa-23': {
				title: 'Sonhos Febris',
				description:
					'Spook definha em seu esconderijo com febre, revivendo o dia em que Clubs o acolheu.',
			},
			'hoa-26': {
				title: 'Rumores Noturnos',
				description:
					'Spook percebe um pedaço de metal em sua pele — "Kelsier" diz para deixá-lo. Em tavernas, ele ouve rumores de que é um dos homens de Kelsier.',
			},
			'hoa-29': {
				title: 'O Lago Escondido',
				description:
					'Spook, vestido como soldado, encontra a carruagem de Sazed e o guia a um prédio não utilizado do Ministério da Inquisição. Subterrâneo, ele revela o esconderijo de suprimentos do Senhor Soberano e um lago subterrâneo.',
			},
			'hoa-31': {
				title: 'Uma Questão de Fé',
				description:
					'Spook diz a Sazed que acredita que Kelsier está cuidando dele e pergunta se há uma religião que apoie tal crença.',
			},
			'hoa-35': {
				title: 'Confrontando Durn',
				description:
					'Spook invade o esconderijo de Durn e interroga o informante. A voz de Kelsier o incita a perseguir Quellion.',
			},
			'hoa-38': {
				title: 'Saída Secreta',
				description:
					'Spook observa skaa vasculharem escombros queimados, encontrando apenas nove crânios nos destroços de dez prisioneiros — há uma saída secreta.',
			},
			'hoa-41': {
				title: 'Sobrevivente das Chamas',
				description:
					'Usando seu conhecimento da saída secreta, Spook salva uma garota das chamas. A multidão começa a chamá-lo de "Sobrevivente das Chamas".',
			},
			'hoa-46': {
				title: 'Jardim de Beldre',
				description:
					'Spook visita Beldre e revela que é um dos homens de Kelsier. A voz de Kelsier ordena que mate Quellion e sua irmã — Spook se recusa.',
			},
			'hoa-46.2': {
				title: 'Restauração dos Canais',
				description:
					'Spook pede a Sazed que devolva água aos canais, pedindo apenas sua confiança.',
			},
			'hoa-49': {
				title: 'Súplica de Beldre',
				description:
					'Spook explica a ascensão de Quellion ao poder. Beldre implora para que ele não mate seu irmão. Eles decidem espalhar rumores de deserção enquanto a mantêm refém.',
			},
			'hoa-53': {
				title: 'Promessas e Planos',
				description:
					'Spook conversa com Beldre, contando-lhe sobre a vida na equipe de Kelsier, prometendo salvar a cidade sem machucar Quellion.',
			},
			'hoa-53.2': {
				title: 'Ronda de Tavernas',
				description:
					'Spook promete a Durn contratos comerciais em troca de limpar os canais. Juntos, percorrem as tavernas de Urteau, aumentando a reputação de Spook como o Sobrevivente das Chamas.',
			},
			'hoa-56': {
				title: 'Plano Final',
				description:
					'Spook elabora um plano para expor as habilidades alomânticas secretas de Quellion. Ele diz a Sazed que acredita que alguém está cuidando dele, mesmo que ele falhe.',
			},
			'hoa-58': {
				title: 'Herói de Urteau',
				description:
					'Sazed ensina Spook a operar o dispositivo de desvio de água. No discurso de Quellion, um motim irrompe. Beldre é revelada como uma Atiradora de Moedas. Spook vê Quellion também reagindo à voz de Kelsier e compreende: Kelsier é Ruína, as pontas são Hemalurgia. Ele arranca a ponta de bronze de Quellion e remove seus próprios pedaços de metal. Superando seu medo do fogo, Spook mergulha em um prédio em chamas, aciona o dispositivo e desmaia — salvando Urteau.',
			},
			'hoa-62': {
				title: 'Preço da Vitória',
				description:
					'Spook fica inconsciente no hospital, gravemente queimado. Sazed o vigia. Beldre diz que ele é um herói.',
			},
			'hoa-64': {
				title: 'Mensagem de Aço',
				description:
					'Guiado pela voz, Spook grava um aviso para Vin em aço. Ele o confia ao Capitão Goradel.',
			},
			'hoa-73': {
				title: 'Para as Cavernas',
				description:
					'Allrianne alerta sobre perturbações na bruma. Spook diz a todos para se abrigarem nas cavernas de armazenamento.',
			},
			'hoa-83': {
				title: 'Novo Mundo',
				description:
					'Spook emerge das cavernas para o mundo refeito por Sazed — um campo de flores e grama verde sob um céu azul. Ele encontra os corpos de Vin e Elend e um livro escrito por Sazed explicando tudo. A pedido de Kelsier, Sazed fez de Spook um Nascido da Bruma.',
			},
		},
	},

	markerLabels: {
		capital: 'Sede da Dominância',
		city: 'Cidade',
		ashmount: 'Monte de Cinzas',
		landmark: 'Marco',
		stronghold: 'Fortaleza',
		hideout: 'Refúgio Seguro',
		mine: 'Mina-prisão',
		mystical: 'Lugar Sagrado',
		town: 'Povoação',
		village: 'Aldeia skaa',
		river: 'Curso de água',
		industrial: 'Posto de abastecimento',
		region: 'Região',
		keep: 'Mansão Nobre',
		palace: 'Palácio',
		plantation: 'Plantação',
		district: 'Distrito',
		estate: 'Propriedade Nobre',
	},

	cityMarkerLabels: {
		gate: 'Porta da cidade',
		keep: 'Mansão Nobre',
		palace: 'Palácio',
		district: 'Distrito',
		shop: 'Comerciante',
		safehouse: 'Esconderijo do bando',
		landmark: 'Local notável',
		canal: 'Canal',
		ministry: 'Cantão',
		plaza: 'Praça',
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
			7: { season: 'Final da primavera', year: '1021 IF' },
			8: { season: 'Verão', year: '1021 IF' },
			9: { season: 'Verão', year: '1021 IF' },
			10: { season: 'Verão', year: '1021 IF' },
			11: { season: 'Verão', year: '1021 IF' },
			12: { season: 'Verão', year: '1021 IF' },
			13: { season: 'Verão', year: '1021 IF' },
			14: { season: 'Verão', year: '1021 IF' },
			15: { season: 'Verão', year: '1021 IF' },
			16: { season: 'Verão', year: '1021 IF' },
			17: { season: 'Verão', year: '1021 IF' },
			18: { season: 'Verão', year: '1021 IF' },
			19: { season: 'Final do verão', year: '1021 IF' },
			20: { season: 'Final do verão', year: '1021 IF' },
			21: { season: 'Outono', year: '1021 IF' },
			22: { season: 'Outono', year: '1021 IF' },
			23: { season: 'Outono', year: '1021 IF' },
			24: { season: 'Outono', year: '1021 IF' },
			25: { season: 'Final do outono', year: '1021 IF' },
			26: { season: 'Final do outono', year: '1021 IF' },
			27: { season: 'Inverno', year: '1021 IF' },
			28: { season: 'Inverno', year: '1021 IF' },
			29: { season: 'Inverno', year: '1021 IF' },
			30: { season: 'Inverno', year: '1021 IF' },
			31: { season: 'Inverno', year: '1021 IF' },
			32: { season: 'Inverno', year: '1022 IF' },
			33: { season: 'Início da primavera', year: '1022 IF' },
			34: { season: 'Início da primavera', year: '1022 IF' },
			35: { season: 'Início da primavera', year: '1022 IF' },
			36: { season: 'Início da primavera', year: '1022 IF' },
			37: { season: 'Início da primavera', year: '1022 IF' },
			38: { season: 'Início da primavera', year: '1022 IF' },
			39: { season: 'Primavera', year: '1022 IF' },
		},
		woa: {
			1: { season: 'Outono', year: '1023 IF' },
			2: { season: 'Outono', year: '1023 IF' },
			3: { season: 'Outono', year: '1023 IF' },
			4: { season: 'Outono', year: '1023 IF' },
			5: { season: 'Outono', year: '1023 IF' },
			6: { season: 'Outono', year: '1023 IF' },
			7: { season: 'Final do outono', year: '1023 IF' },
			8: { season: 'Outono', year: '1023 IF' },
			9: { season: 'Final do outono', year: '1023 IF' },
			10: { season: 'Outono', year: '1023 IF' },
			11: { season: 'Início do inverno', year: '1023 IF' },
			12: { season: 'Final do outono', year: '1023 IF' },
			13: { season: 'Início do inverno', year: '1023 IF' },
			14: { season: 'Início do inverno', year: '1023 IF' },
			15: { season: 'Inverno', year: '1023 IF' },
			16: { season: 'Inverno', year: '1023 IF' },
			17: { season: 'Inverno', year: '1023 IF' },
			19: { season: 'Inverno', year: '1023 IF' },
			20: { season: 'Inverno', year: '1023 IF' },
			21: { season: 'Inverno', year: '1023 IF' },
			22: { season: 'Inverno', year: '1023 IF' },
			23: { season: 'Inverno', year: '1023 IF' },
			24: { season: 'Inverno', year: '1023 IF' },
			25: { season: 'Inverno', year: '1023 IF' },
			26: { season: 'Inverno', year: '1023 IF' },
			27: { season: 'Inverno', year: '1023 IF' },
			28: { season: 'Inverno', year: '1024 IF' },
			29: { season: 'Inverno', year: '1024 IF' },
			30: { season: 'Inverno', year: '1024 IF' },
			31: { season: 'Inverno', year: '1024 IF' },
			32: { season: 'Inverno', year: '1024 IF' },
			33: { season: 'Inverno', year: '1024 IF' },
			34: { season: 'Inverno', year: '1024 IF' },
			35: { season: 'Inverno', year: '1024 IF' },
			36: { season: 'Inverno', year: '1024 IF' },
			37: { season: 'Inverno', year: '1024 IF' },
			38: { season: 'Inverno', year: '1024 IF' },
			40: { season: 'Final do inverno', year: '1024 IF' },
			41: { season: 'Final do inverno', year: '1024 IF' },
			42: { season: 'Final do inverno', year: '1024 IF' },
			43: { season: 'Final do inverno', year: '1024 IF' },
			44: { season: 'Final do inverno', year: '1024 IF' },
			45: { season: 'Final do inverno', year: '1024 IF' },
			46: { season: 'Final do inverno', year: '1024 IF' },
			47: { season: 'Final do inverno', year: '1024 IF' },
			49: { season: 'Final do inverno', year: '1024 IF' },
			50: { season: 'Final do inverno', year: '1024 IF' },
			51: { season: 'Final do inverno', year: '1024 IF' },
			52: { season: 'Final do inverno', year: '1024 IF' },
			53: { season: 'Final do inverno', year: '1024 IF' },
			54: { season: 'Final do inverno', year: '1024 IF' },
			55: { season: 'Final do inverno', year: '1024 IF' },
			56: { season: 'Inverno', year: '1024 IF' },
			57: { season: 'Inverno', year: '1024 IF' },
			58: { season: 'Inverno', year: '1024 IF' },
			59: { season: 'Inverno', year: '1024 IF' },
			60: { season: 'Inverno', year: '1024 IF' },
		},
		hoa: {
			0: { season: 'Primavera', year: '1026 IF' },
			1: { season: 'Primavera', year: '1026 IF' },
			3: { season: 'Primavera', year: '1026 IF' },
			4: { season: 'Verão', year: '1026 IF' },
			5: { season: 'Verão', year: '1026 IF' },
			6: { season: 'Verão', year: '1026 IF' },
			8: { season: 'Verão', year: '1026 IF' },
			10: { season: 'Verão', year: '1026 IF' },
			12: { season: 'Verão', year: '1026 IF' },
			13: { season: 'Outono', year: '1026 IF' },
			14: { season: 'Outono', year: '1026 IF' },
			15: { season: 'Outono', year: '1026 IF' },
			16: { season: 'Outono', year: '1026 IF' },
			17: { season: 'Outono', year: '1026 IF' },
			18: { season: 'Outono', year: '1026 IF' },
			19: { season: 'Outono', year: '1026 IF' },
			21: { season: 'Outono', year: '1026 IF' },
			22: { season: 'Outono', year: '1026 IF' },
			23: { season: 'Início do inverno', year: '1026 IF' },
			24: { season: 'Inverno', year: '1026 IF' },
			25: { season: 'Outono', year: '1026 IF' },
			26: { season: 'Início do inverno', year: '1026 IF' },
			27: { season: 'Outono', year: '1026 IF' },
			28: { season: 'Outono', year: '1026 IF' },
			29: { season: 'Início do inverno', year: '1026 IF' },
			30: { season: 'Outono', year: '1026 IF' },
			31: { season: 'Início do inverno', year: '1026 IF' },
			34: { season: 'Inverno', year: '1026 IF' },
			35: { season: 'Inverno', year: '1026 IF' },
			36: { season: 'Inverno', year: '1026 IF' },
			37: { season: 'Inverno', year: '1026 IF' },
			38: { season: 'Inverno', year: '1026 IF' },
			40: { season: 'Inverno', year: '1026 IF' },
			41: { season: 'Inverno', year: '1026 IF' },
			42: { season: 'Inverno', year: '1026 IF' },
			43: { season: 'Inverno', year: '1026 IF' },
			44: { season: 'Inverno', year: '1026 IF' },
			45: { season: 'Inverno', year: '1026 IF' },
			46: { season: 'Inverno', year: '1026 IF' },
			47: { season: 'Inverno', year: '1026 IF' },
			48: { season: 'Inverno', year: '1026 IF' },
			49: { season: 'Inverno', year: '1026 IF' },
			50: { season: 'Inverno', year: '1026 IF' },
			51: { season: 'Inverno', year: '1026 IF' },
			53: { season: 'Inverno', year: '1026 IF' },
			54: { season: 'Final do inverno', year: '1026 IF' },
			55: { season: 'Final do inverno', year: '1026 IF' },
			56: { season: 'Inverno', year: '1026 IF' },
			57: { season: 'Final do inverno', year: '1026 IF' },
			58: { season: 'Primavera', year: '1027 IF' },
			59: { season: 'Primavera', year: '1027 IF' },
			60: { season: 'Final do inverno', year: '1026 IF' },
			61: { season: 'Final do inverno', year: '1026 IF' },
			62: { season: 'Verão', year: '1027 IF' },
			63: { season: 'Final do inverno', year: '1026 IF' },
			64: { season: 'Verão', year: '1027 IF' },
			65: { season: 'Final do inverno', year: '1026 IF' },
			66: { season: 'Verão', year: '1027 IF' },
			67: { season: 'Primavera', year: '1027 IF' },
			68: { season: 'Primavera', year: '1027 IF' },
			69: { season: 'Verão', year: '1027 IF' },
			70: { season: 'Primavera', year: '1027 IF' },
			71: { season: 'Outono', year: '1027 IF' },
			72: { season: 'Verão', year: '1027 IF' },
			73: { season: 'Verão', year: '1027 IF' },
			74: { season: 'Outono', year: '1027 IF' },
			75: { season: 'Outono', year: '1027 IF' },
			76: { season: 'Outono', year: '1027 IF' },
			77: { season: 'Outono', year: '1027 IF' },
			78: { season: 'Outono', year: '1027 IF' },
			79: { season: 'Outono', year: '1027 IF' },
			80: { season: 'Outono', year: '1027 IF' },
			81: { season: 'Outono', year: '1027 IF' },
			82: { season: 'Outono', year: '1027 IF' },
			83: { season: 'Outono', year: '1027 IF' },
			84: { season: 'Outono', year: '1027 IF' },
		},
	},
};
