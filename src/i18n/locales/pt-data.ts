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
				'tfe-25': 'Nascida da Bruma',
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
				'tfe-25': 'verified',
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
				'tfe-13': 'Espião do Ministério',
				'tfe-38': 'Inquisidor de Aço',
				'woa-4': 'Inquisidor relutante',
				'woa-57': 'Peão de Ruína',
				'hoa-0': 'Mão de Ruína',
				'hoa-79': 'Olhos de Aço',
			},
			titleProgressionConfidence: {
				'tfe-7': 'unconfirmed',
				'tfe-13': 'unconfirmed',
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
				'Minas de atium e terra natal dos kandra. Kelsier foi o único prisioneiro a escapar com vida.',
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
			description: 'O monte de cinzas mais próximo de Luthadel, visível das muralhas da cidade.',
			confidence: 'verified',
		},
		urteau: {
			name: 'Urteau',
			description:
				'Capital da Dominância do Norte e lar ancestral da Casa Venture. Famosa pelos seus canais secos — antigos canais drenados servindo como ruas.',
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
				'Centro comercial da Dominância do Oeste, protegido por formações rochosas naturais de cremnol.',
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
				'Cidade na Dominância do Norte construída sobre uma das cavernas de armazenamento do Senhor Soberano. Soterrada pelas cinzas.',
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
				'Fortaleza dos Inquisidores esculpida numa falésia. Sazed descobriu aqui a inscrição de Kwaan.',
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
				'Cordilheira onde os terrisanos foram escravizados. Localização original do Poço da Ascensão.',
			confidence: 'verified',
		},
		'tincut-fastness': {
			name: 'Fortaleza de Tincut',
			description: 'Fortaleza escondida nas montanhas de Terris onde o Sínodo se refugiou.',
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
				'Via aquática artificial ligando Tathingdwen a Luthadel para transporte de recursos.',
			confidence: 'probable',
		},
		'kandra-homeland': {
			name: 'Terra Natal dos Kandra',
			description:
				'Cavernas profundas sob os Poços de Hathsin onde os kandra guardam os segredos do Senhor Soberano.',
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
				'Ponto de ancoragem sul da rede de cavernas de armazenamento do Senhor Soberano.',
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
				'Sistema de cavernas entre Luthadel e os Poços, base de treino do exército rebelde.',
			confidence: 'verified',
		},
		garthwood: {
			name: 'Garthwood',
			description: 'Aldeia onde Sazed ensinou religiões aos skaa libertados.',
			confidence: 'probable',
		},
		'straffs-camp': {
			name: 'Acampamento de Straff',
			description: 'Acampamento militar de Straff Venture a norte de Luthadel durante o cerco.',
			confidence: 'probable',
		},
		'koloss-camp': {
			name: 'Acampamento dos Koloss',
			description: 'Posição do exército koloss a sul de Luthadel durante o cerco.',
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
			description: 'Cidade-guarnição a noroeste de Luthadel com exército permanente.',
			confidence: 'probable',
		},
		'haverfrex-cannery-central': {
			name: 'Haverfrex',
			description:
				'Posto industrial na Dominância do Oeste, nó de abastecimento do exército de Cett.',
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
			'cetts-base': {
				name: 'Base de Cett',
				description: 'Recinto fortificado de Ashweather Cett antes da sua partida para Luthadel.',
				confidence: 'probable',
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
			'yomens-palace': {
				name: 'Palácio de Yomen',
				description: 'Sede administrativa do obrigador Aradan Yomen.',
				confidence: 'probable',
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
				season: 'Primavera',
				year: '1021 IF',
			},
			'tfe-1': {
				title: 'Observador oculto',
				description:
					'Kelsier observa as operações do bando de Camon nas sombras, notando o uso inconsciente de alomancia por Vin: uma órfã das ruas com poderes de Nascida da Bruma.',
				season: 'Primavera',
				year: '1021 IF',
			},
			'tfe-3': {
				title: 'Recrutando Vin',
				description:
					'Vin tenta fugir do esconderijo de Camon, mas Ulef a trai. Kelsier intervém e a salva da surra de Camon. Promove Milev a líder do bando, fica com os três mil boxings como pagamento e aluga o esconderijo para a reunião da noite. Depois testa Vin e confirma que ela é uma Nascida da Bruma.',
				season: 'Primavera',
				year: '1021 IF',
			},
			'tfe-5': {
				title: 'O roubo de atium',
				description:
					'Kelsier, Dockson e Vin sobem ao telhado. Kelsier se equipa e mergulha nas brumas para assaltar a Fortaleza Venture e roubar atium. Consegue o cofre, mas precisa enfrentar matanévoas na fuga. Escapa com o atium e financia a rebelião.',
				season: 'Primavera',
				year: '1021 IF',
			},
			'tfe-6': {
				title: 'O bando completo',
				description:
					'Na carpintaria de Clubs, Kelsier e o bando planejam a destruição do Império Final. Marsh chega finalmente e todos saem para que os dois irmãos conversem a sós. Vin volta a escutar atrás da porta.',
				season: 'Primavera',
				year: '1021 IF',
			},
			'tfe-7': {
				title: 'Treinando a aprendiz',
				description:
					'Kelsier leva Vin para sua primeira noite de treinamento e lhe entrega uma capa de brumas. Ensina-lhe os oito metais básicos junto às muralhas de Luthadel, perto do Portão de Aço.',
				season: 'Final da primavera',
				year: '1021 IF',
			},
			'tfe-8': {
				title: 'O disfarce Renoux',
				description:
					'Kelsier leva Vin para além das muralhas de Luthadel, onde encontram um espectro de bruma. Na estrada principal, Sazed os espera com uma carruagem e os conduz até Fellise. No caminho, Kelsier oferece a Vin os três mil boxings e a opção de deixar o bando. Na propriedade de lorde Renoux, ele cria a identidade falsa de Vin como lady Valette.',
				season: 'Verão',
				year: '1021 IF',
			},
			'tfe-10': {
				title: 'Planejando a revolução',
				description:
					'De volta a Luthadel, Kelsier realiza uma reunião de progresso na loja de Clubs. Antes, pergunta a Sazed sobre uma religião com poder — Sazed lhe fala do jaísmo — e se alguma considera sagrado o extermínio dos nobres. A reunião termina quando um soldado de Hammond informa que o Ministério encontrou o antigo esconderijo de Camon.',
				season: 'Verão',
				year: '1021 IF',
			},
			'tfe-10.2': {
				title: 'O comício do armazém',
				description:
					'Kelsier prega a revolução diante de trabalhadores skaa reunidos em um comício secreto no bairro dos armazéns. Breeze e seus apaziguadores e agitadores manipulam a multidão para torná-la mais receptiva, usando a lenda do Sobrevivente de Hathsin para inspirar a rebelião.',
				season: 'Verão',
				year: '1021 IF',
			},
			'tfe-11': {
				title: 'O massacre do esconderijo de Camon',
				description:
					'Kelsier e o bando investigam o esconderijo destruído. Depois, Kelsier tenta encontrar Camon entre os mendigos. Encontra o cadáver de Camon pendurado por um gancho em sua boca, pulsos e tornozelos amarrados, corpo torturado. Este método de execução é reservado aos que abusam da alomancia. Vin havia seguido Kelsier com sucesso e conversam brevemente.',
				season: 'Verão',
				year: '1021 IF',
			},
			'tfe-13': {
				title: 'Planos em Fellise',
				description:
					'Kelsier se reúne com Vin e Sazed na propriedade de lorde Renoux em Fellise para revisar a inteligência obtida no primeiro baile de Vin. Descobre que o pai de Vin estava no baile e parte para as brumas rumo a Luthadel.',
				season: 'Verão',
				year: '1021 IF',
			},
			'tfe-14': {
				title: 'Reconhecimento do palácio',
				description:
					'Kelsier leva Vin a Kredik Shaw para explorar o edifício que o Senhor Soberano visita a cada três dias. Abrem caminho lutando, mas três Inquisidores de Aço convergem sobre eles. Kelsier é separado de Vin no caos. Vin escapa gravemente ferida agarrada a um misterioso livro encadernado em couro.',
				season: 'Verão',
				year: '1021 IF',
			},
			'tfe-15': {
				title: 'Depois de Kredik Shaw',
				description:
					'O bando questiona a decisão de Kelsier de levar Vin a Kredik Shaw. Antes de poderem sair para procurá-la, Sazed chega carregando-a. Dockson está furioso com o risco. Kelsier e Dockson notam o livro de couro que Vin trouxe; Sazed o identifica como escrito em khlenniano, a língua da terra natal do Senhor Soberano antes da Ascensão.',
				season: 'Verão',
				year: '1021 IF',
			},
			'tfe-16': {
				title: 'Velando Vin',
				description:
					'Kelsier permanece na loja de Clubs velando Vin enquanto ela se recupera dos ferimentos de Kredik Shaw, presente quando finalmente desperta.',
				season: 'Verão',
				year: '1021 IF',
			},
			'tfe-17': {
				title: 'Reunião na propriedade Renoux',
				description:
					'Kelsier viaja a Fellise com Breeze, Yeden e Dockson para se reunir na propriedade de lorde Renoux e discutir a próxima fase da rebelião.',
				season: 'Verão',
				year: '1021 IF',
			},
			'tfe-19': {
				title: 'Avivando a guerra de casas',
				description:
					'Kelsier semeia o caos para fomentar a Guerra de Casas, deixando o corpo visivelmente assassinado de lorde Charrs Entrone no jardim da Fortaleza Tekiel. Depois vai aos Bairros de Fuligem para encontrar Hoid — um informante que se faz passar por contato de rua. De Hoid também descobre que lady Shan Elariel é uma apaziguadora.',
				season: 'Final do verão',
				year: '1021 IF',
			},
			'tfe-19.2': {
				title: 'Encontro com lorde Straff',
				description:
					'Kelsier vai à praça Ahlstrom disfarçado de skaa mendigo, doente e aleijado, para encontrar lorde Straff Venture, líder da Casa Venture. Descobre que os rumores sobre o Sobrevivente de Hathsin estão se espalhando e que se fala de um Décimo Primeiro Metal.',
				season: 'Final do verão',
				year: '1021 IF',
			},
			'tfe-19.3': {
				title: 'Retorno a Renoux',
				description:
					'Kelsier volta à mansão Renoux pela Rota dos Espinhos e troca informações com Vin, Sazed e Renoux. Dá um sermão a Vin sobre os nobres, insistindo que não se importam com os skaa e que ela deve ficar longe de Elend.',
				season: 'Final do verão',
				year: '1021 IF',
			},
			'tfe-20': {
				title: 'Supervisionando os suprimentos',
				description:
					'Kelsier está na propriedade Renoux em Fellise supervisionando as armas e suprimentos sendo carregados em carroças para enviar à rebelião.',
				season: 'Final do verão',
				year: '1021 IF',
			},
			'tfe-21': {
				title: 'O exército rebelde',
				description:
					'Kelsier lê uma tradução do diário do Senhor Soberano enquanto viaja de barcaça por um canal rumo ao norte. O comboio para em uma eclusa e Kelsier, os recrutas e os suprimentos seguem até as cavernas onde o exército rebelde treina. Superando as memórias dos Poços de Hathsin, entra no complexo das Cavernas de Arguois e inspeciona o exército que Ham formou. Durante um jantar, Kelsier manipula as emoções de Bilg para usá-lo como exemplo. Bilg e Demoux duelam; Kelsier usa alomancia para ajudar Demoux a vencer.',
				season: 'Outono',
				year: '1021 IF',
			},
			'tfe-23': {
				title: 'Seguindo Vin',
				description:
					'Kelsier aparece do lado de fora da janela da torre onde Vin espia o grupo de Elend na Fortaleza Hasting. Desdenha a conversa idealista deles sobre mudar o mundo como comportamento típico de jovens nobres que nunca leva a mudança real. Ambos partem em direções diferentes.',
				season: 'Outono',
				year: '1021 IF',
			},
			'tfe-24': {
				title: 'Reunião de situação',
				description:
					'Kelsier chega à loja de Clubs onde boa parte do bando está reunida. Discute o estado da missão e compartilha uma bebida noturna com Spook, Ham e Clubs. Pede a Ham que vá à Guarnição colher informações.',
				season: 'Outono',
				year: '1021 IF',
			},
			'tfe-25': {
				title: 'Decisão desesperada',
				description:
					'Na loja de Clubs, Kelsier descobre que a rebelião skaa atacou a Guarnição de Holstep e a de Luthadel marcha para o norte. Decide tentar avisar o exército rebelde e faz Vin engolir cinco esferas de estanho para uma longa corrida de estanho rumo ao norte.',
				season: 'Final do outono',
				year: '1021 IF',
			},
			'tfe-25.2': {
				title: 'Desastre em Holstep',
				description:
					'Kelsier e Vin correm por dezesseis horas queimando estanho sem parar. Encontram os restos do exército rebelde, cercado e massacrado pela Guarnição de Valtroux. Kelsier quer lutar, mas Vin o convence de que não são invencíveis. Seguem até as Cavernas de Arguois, onde 2.000 soldados sobreviveram graças a Mennis.',
				season: 'Final do outono',
				year: '1021 IF',
			},
			'tfe-26': {
				title: 'Recolhendo os cacos',
				description:
					'De volta à loja de Clubs após duas semanas de viagem das cavernas, o bando discute o futuro do plano: parece um fracasso total. Breeze culpa Kelsier por perseguir fama e glória. Kelsier admite o revés mas se recusa a abandonar a revolução.',
				season: 'Inverno',
				year: '1021 IF',
			},
			'tfe-26.2': {
				title: 'As execuções',
				description:
					'Spook anuncia execuções na Praça da Fonte. O bando vai até lá e suborna alguém para acessar o telhado. Assistem ao massacre de inúmeros skaa enquanto seu sangue é despejado na fonte. Kelsier convence o bando a continuar: "Este é o nosso inimigo. Aqui não há quartel nem volta atrás."',
				season: 'Inverno',
				year: '1021 IF',
			},
			'tfe-27': {
				title: 'Nova estratégia',
				description:
					'O bando retorna à loja de Clubs para planejar os próximos passos: iniciar uma guerra entre as casas nobres. Sazed traz uma mensagem de Marsh indicando onde se encontrar nos Meandros.',
				season: 'Inverno',
				year: '1021 IF',
			},
			'tfe-27.2': {
				title: 'O metal dourado',
				description:
					'Kelsier e Vin vão a um edifício abandonado nos Meandros horas antes do encontro com Marsh. Enquanto esperam, Kelsier fala sobre o ouro — o nono metal alomântico que permite ver uma versão alternativa do próprio passado. Também explica a feruquimia e dá um pouco de ouro a Vin para queimar pela primeira vez. Quando Marsh chega, com as tatuagens de um obrigador de baixo escalão do Cantão da Inquisição, descreve as estações de apaziguamento em Luthadel e revela que os Inquisidores podem morrer de velhice.',
				season: 'Inverno',
				year: '1021 IF',
			},
			'tfe-29': {
				title: 'Conselho de guerra em Renoux',
				description:
					'Kelsier se reúne com a maior parte do bando na propriedade de Renoux em Fellise, examinando um mapa detalhado das defesas de Luthadel fornecido por Marsh. Descobrem que o bando de Theron foi atacado recentemente pelo Ministério. Naquela noite, sem conseguir dormir, Kelsier pede a Sazed que lhe conte sobre algumas religiões.',
				season: 'Inverno',
				year: '1021 IF',
			},
			'tfe-31': {
				title: 'Repreendendo a aprendiz',
				description:
					'Kelsier e Vin retornam à loja de Clubs depois que Vin matou lady Shan Elariel — uma Nascida da Bruma plena — na Fortaleza Venture. Kelsier repreende Vin pelo combate imprudente, mas ela grita de volta que nobres e skaa não são tão diferentes, e que Elend Venture é um homem bom que merece ser protegido.',
				season: 'Inverno',
				year: '1021 IF',
			},
			'tfe-32': {
				title: 'Encontrando Marsh',
				description:
					'Kelsier e Vin encontram o corpo de Marsh, completamente drenado de sangue, uma casca sem vida. De volta à loja de Clubs, descobrem uma carta de Marsh explicando que os Inquisidores provavelmente o encontrariam.',
				season: 'Inverno',
				year: '1022 IF',
			},
			'tfe-32.2': {
				title: 'Destruindo os Poços',
				description:
					'Kelsier retorna aos Poços de Hathsin, o local de seu maior sofrimento. Mata todos os guardas e estende a mão a um skaa chamado Wallin que sai da caverna. Depois destrói todos os cristais de atium, cortando o recurso mais valioso do Senhor Soberano em uma única noite.',
				season: 'Inverno',
				year: '1022 IF',
			},
			'tfe-33': {
				title: 'O refúgio de emergência',
				description:
					'Kelsier retorna a um porão de reserva úmido perto da loja de Clubs, apenas três cômodos. Anuncia que destruiu todo o atium dos Poços de Hathsin.',
				season: 'Início da primavera',
				year: '1022 IF',
			},
			'tfe-33.2': {
				title: 'A luta com o Inquisidor',
				description:
					'Todos seguem Kelsier até a Praça da Fonte. Avistam Spook e lorde Renoux em uma das carroças de execução. Kelsier luta contra um Inquisidor na praça — uma armadilha que ele quase certamente sabia que seria.',
				season: 'Início da primavera',
				year: '1022 IF',
			},
			'tfe-34': {
				title: 'A última batalha do Sobrevivente',
				description:
					'Kelsier luta contra o Inquisidor em um combate até a morte na Praça da Fonte, ambos queimando atium. É um mestre de Empurrar e Puxar, movendo metal pelo ar com perícia. Mata o Inquisidor e os skaa começam a gritar "O Sobrevivente de Hathsin". O Senhor Soberano chega em uma carruagem preta. Um dos capangas de Ham lhe crava uma lança — ele continua andando. Duas lanças — continua andando. O Senhor Soberano esbofeteia Kelsier, arranca uma lança de seu próprio corpo e a crava em Kelsier. Morre com um sorriso, tornando-se o mártir que acende a revolução.',
				season: 'Início da primavera',
				year: '1022 IF',
			},
			'tfe-35': {
				title: 'Além da morte',
				description:
					'No refúgio de emergência perto da loja de Clubs, o bando vê o kandra, antes lorde Renoux, usando o corpo e os ossos de Kelsier: o plano final. Kelsier deixara cartas a cada membro com instruções para tomar a cidade. Sua morte foi a fagulha que acendeu a revolução em toda Luthadel.',
				season: 'Início da primavera',
				year: '1022 IF',
			},
		},
		vin: {
			...enData.movements.vin,
			// ── O Império Final ────────────────────────────────────────────
			'tfe-1': {
				title: 'Órfã das ruas',
				description:
					'Vin é convocada perante seu líder de bando Camon, que a trata com rudeza. Ela usa inconscientemente sua Sorte — uma forma de apaziguamento alomântico — para acalmá-lo. Camon se faz passar por lorde Jedue, um nobre desesperado por contratos, e se prepara para enganar o Ministério do Aço. Vin usa sua Sorte no obrigador prelado Laird para que não rejeite os pedidos de Camon.',
				season: 'Primavera',
				year: '1021 IF',
			},
			'tfe-2': {
				title: 'A fraude ao Ministério',
				description:
					'Camon, como lorde Jedue, leva Vin ao Cantão de Finanças para fraudar o Ministério. Vin usa sua Sorte no alto prelado, que entrega três mil boxings a Camon. Kelsier e Dockson, na sala de espera, detectam os pulsos alomânticos de Vin. Depois, veem um Inquisidor de Aço seguindo o séquito de Camon.',
				season: 'Primavera',
				year: '1021 IF',
			},
			'tfe-4': {
				title: 'Recrutada',
				description:
					'Kelsier apresenta seu plano para derrubar o Império Final ao bando na carpintaria de Clubs. O bando aceita, exceto Clubs, que sai antes de retornar. Kelsier revela que Vin é uma Nascida da Bruma e fala do Décimo Primeiro Metal.',
				season: 'Primavera',
				year: '1021 IF',
			},
			'tfe-7': {
				title: 'Treinamento de Nascida da Bruma',
				description:
					'Kelsier leva Vin para sua primeira noite de treinamento e lhe dá uma capa de brumas. Ensina-lhe os oito metais básicos — estanho, peltre, ferro, aço, zinco, latão, cobre e bronze — terminando a noite nas muralhas de Luthadel.',
				season: 'Final da primavera',
				year: '1021 IF',
			},
			'tfe-8': {
				title: 'A propriedade Renoux',
				description:
					'Vin e Kelsier pulam as muralhas de Luthadel para a noite, onde Vin encontra um espectro de bruma pela primeira vez. Na estrada, Sazed espera com uma carruagem e os leva a Fellise. No caminho, Kelsier oferece a Vin os três mil boxings e a opção de ir embora. Ela pega o dinheiro mas fica para ver como tudo termina. Na propriedade de lorde Renoux, ele propõe que Vin interprete lady Valette.',
				season: 'Verão',
				year: '1021 IF',
			},
			'tfe-9': {
				title: 'Treinando com Sazed',
				description:
					'Vin e Kelsier lutam em um treino na propriedade Renoux. Depois, Vin corta o cabelo e Sazed a interroga sobre seu disfarce nobre, além de falar do trelagismo. Kelsier e Sazed conversam em particular sobre o progresso de Vin; Kelsier anuncia que assistirão a um baile na Fortaleza Venture no fim da semana.',
				season: 'Verão',
				year: '1021 IF',
			},
			'tfe-10': {
				title: 'Volta ao bando',
				description:
					'Vin retorna a Luthadel de Fellise para aprender sobre metais com os brumosos do bando, começando por Breeze, que lhe ensina a apaziguar. Hammond chega e debate a moralidade de derrubar o Império Final enquanto aguardam o discurso de Kelsier.',
				season: 'Verão',
				year: '1021 IF',
			},
			'tfe-10.2': {
				title: 'O comício do armazém',
				description:
					'Vin assiste ao comício secreto no bairro dos armazéns onde Kelsier prega a revolução aos trabalhadores skaa. Depois, Kelsier realiza uma reunião de progresso na loja de Clubs. Vin e Lestibournes falam sobre Marsh. A reunião termina quando um soldado de Hammond informa que o Ministério do Aço descobriu o antigo esconderijo de Camon.',
				season: 'Verão',
				year: '1021 IF',
			},
			'tfe-11': {
				title: 'O massacre do esconderijo de Camon',
				description:
					'Vin e o bando investigam o esconderijo destruído, encontrando cadáveres por toda parte. Entre eles, Vin vê Ulef: alguém arrancou sua caixa torácica com as mãos. Sazed recita uma oração da religião cazzi. O corpo de Milev está amarrado a uma cadeira, claramente torturado.',
				season: 'Verão',
				year: '1021 IF',
			},
			'tfe-12': {
				title: 'Primeiro baile na Fortaleza Venture',
				description:
					'Vin vai a seu primeiro baile na Fortaleza Venture, com Sazed conduzindo a carruagem. Kelsier aparece no caminho, dá conselhos e volta às brumas. Vin é apresentada como lady Valette Renoux. No jantar, vê seu pai do outro lado do salão. Recusa convites para dançar e se retira para uma varanda no andar de cima, onde tem sua primeira conversa com Elend Venture.',
				season: 'Verão',
				year: '1021 IF',
			},
			'tfe-13': {
				title: 'Retorno a Fellise',
				description:
					'Sazed interroga Vin sobre sua interação com Elend na propriedade Renoux. A verdadeira personalidade de Vin começa a emergir — nem a tímida membro do bando nem lady Valette. Kelsier descobre que o pai de Vin estava no baile e parte novamente nas brumas.',
				season: 'Verão',
				year: '1021 IF',
			},
			'tfe-14': {
				title: 'Dentro de Kredik Shaw',
				description:
					'Kelsier leva Vin a Kredik Shaw e abrem caminho lutando. Vin mata pela primeira vez. Três Inquisidores de Aço convergem sobre eles. Para se defender dos triângulos de metal afiados que Empurram contra ela, Vin agarra um livro de couro. Queimando atium, escapa temporariamente antes que um Inquisidor lhe crave um machado de obsidiana no flanco. Vin escapa com o livro mas perde a consciência — algo distrai o Inquisidor perseguidor e a acolhe em um abraço protetor. Não era Kelsier.',
				season: 'Verão',
				year: '1021 IF',
			},
			'tfe-15': {
				title: 'Ferida',
				description:
					'O bando questiona a decisão de Kelsier de levar Vin a Kredik Shaw. Sazed chega carregando-a. Administram-lhe peltre para ajudar na cura. Sazed a opera e Ham a leva para um quarto para se recuperar. Kelsier e Dockson notam o livro; Sazed o identifica como escrito em khlenniano.',
				season: 'Verão',
				year: '1021 IF',
			},
			'tfe-16': {
				title: 'Recuperação na loja de Clubs',
				description:
					'Vin acorda após duas semanas de repouso na loja de Clubs. Spook velava por ela e conta como Kelsier lhe deu seu apelido. Conversando com Dockson, Vin percebe que há algo muito incomum sobre Sazed.',
				season: 'Verão',
				year: '1021 IF',
			},
			'tfe-16.2': {
				title: 'Retorno a Fellise',
				description:
					'Após mais alguns dias de repouso, Vin retorna à propriedade Renoux em Fellise. Conversa com Sazed, que explica o que são os Guardiões e revela que todos os servos terrisanos são eunucos.',
				season: 'Verão',
				year: '1021 IF',
			},
			'tfe-17': {
				title: 'O jardim da mansão Renoux',
				description:
					'Vin se lamenta de quatro semanas de tediosa convalescença na propriedade Renoux. Membros do bando chegam para discutir novidades. Vin convence Kelsier a deixá-la ir ao próximo baile. Depois falam sobre Mare, as motivações de Kelsier, e ele explica o Estalo — o evento traumático que desperta os poderes alomânticos.',
				season: 'Verão',
				year: '1021 IF',
			},
			'tfe-18': {
				title: 'Baile na Fortaleza Elariel',
				description:
					'Vin assiste ao baile na Fortaleza Elariel com Sazed. Elend Venture se senta à sua mesa lendo, como de costume, e elogia seu vestido, deixando-a boquiaberta. Dança com vários nobres e pergunta sobre Elend; ouve falar de lady Shan Elariel. Após muito dançar, Vin é obrigada a encontrar Shan. Percebe que Shan pode apaziguar. Ao sair do baile, Vin testemunha um guarda da cidade degolando um jovem skaa de cozinha nas brumas.',
				season: 'Verão',
				year: '1021 IF',
			},
			'tfe-19': {
				title: 'Voltando a Fellise',
				description:
					'Kelsier retorna à mansão Renoux pela Rota dos Espinhos e se reúne com Vin, Sazed e Renoux. Dá um sermão a Vin sobre os nobres, insistindo que não se importam com os skaa e que ela deve ficar longe de Elend Venture.',
				season: 'Final do verão',
				year: '1021 IF',
			},
			'tfe-20': {
				title: 'Lições de buscadora',
				description:
					'Vin retorna de Luthadel e vê caixas de armas diante da mansão Renoux, prontas para a rebelião. Marsh chega pouco depois e lhe ensina a buscar — usar bronze para detectar outros alomantes — além de detalhes adicionais sobre alomancia.',
				season: 'Final do verão',
				year: '1021 IF',
			},
			'tfe-22': {
				title: 'O diário',
				description:
					'Vin lê sua cópia do diário do Senhor Soberano na propriedade Renoux quando Spook chega. Ele lhe dá um lenço; Sazed explica depois que assim um jovem cavaleiro sinaliza que deseja cortejar seriamente uma dama. Esperando Dockson, Vin fala com Sazed sobre o terrisano do diário; Sazed revela os segredos da feruquimia e a formação dos Guardiões. Vin então conversa com Dockson, que conta como lorde Devinshae levou a mulher que amava e a matou na manhã seguinte.',
				season: 'Outono',
				year: '1021 IF',
			},
			'tfe-23': {
				title: 'Baile na Fortaleza Hasting',
				description:
					'Vin assiste ao baile na Fortaleza Hasting, satisfeita por ver que os esforços de Kelsier estão funcionando. Lady Shan pede que Vin vasculhe os livros de Elend na próxima vez. Vin encontra Elend e pergunta se ele esteve com uma skaa. Ele confessa que seu pai o obrigou aos treze anos; a mulher foi morta depois, mas nunca mais fez isso. Elend lhe dá um lenço. Após partir com seus amigos, Vin os segue com alomancia até uma torre onde discutem as falhas do Senhor Soberano. Kelsier aparece de repente e desdenha as ideias do grupo.',
				season: 'Outono',
				year: '1021 IF',
			},
			'tfe-24': {
				title: 'Reunião do bando',
				description:
					'Vin e Kelsier chegam à loja de Clubs onde boa parte do bando está reunida. Kelsier discute o estado da missão e Vin percebe o quanto ama sua nova vida. Kelsier, Spook, Ham e Clubs compartilham uma bebida noturna.',
				season: 'Outono',
				year: '1021 IF',
			},
			'tfe-24.2': {
				title: 'A visita à guarnição',
				description:
					'Vin troca de roupa para suas roupas de pivete e sai com Ham para visitar a Guarnição de Luthadel para aprender sobre peltre. Ham explica que muitos soldados são skaa comuns. Um guarda chamado Sertes informa que a Guarnição está se mobilizando — uma rebelião skaa atacou a Guarnição de Holstep ao norte.',
				season: 'Outono',
				year: '1021 IF',
			},
			'tfe-25': {
				title: 'Notícias urgentes',
				description:
					'Na loja de Clubs, Ham traz a notícia de que a Guarnição de Luthadel marcha para Holstep. Kelsier faz Vin engolir cinco esferas de peltre para correrem rumo ao norte e avisar o exército rebelde.',
				season: 'Final do outono',
				year: '1021 IF',
			},
			'tfe-25.2': {
				title: 'A corrida de peltre',
				description:
					'Vin e Kelsier correm dezesseis horas sem parar queimando peltre em uma desesperada corrida de peltre. Encontram os restos do exército rebelde, cercado e massacrado pela Guarnição de Valtroux. Kelsier quer lutar, mas Vin o convence de que não são invencíveis. Seguem até as Cavernas de Arguois, onde 2.000 soldados sobreviveram graças a Mennis.',
				season: 'Final do outono',
				year: '1021 IF',
			},
			'tfe-26': {
				title: 'Recuperação',
				description:
					'Vin jaz exausta na cama da loja de Clubs. Levaram duas semanas para retornar a Luthadel. Kelsier irrompe; Breeze o culpa por buscar fama. Kelsier admite o revés mas se recusa a desistir.',
				season: 'Final do outono',
				year: '1021 IF',
			},
			'tfe-26.2': {
				title: 'As execuções',
				description:
					'Spook anuncia execuções na Praça da Fonte. O bando vai até lá e suborna alguém para chegar ao telhado. Vin identifica seu pai para Kelsier — um obrigador chamado Tevidian, lorde Prelado e obrigador de mais alto escalão, acima até dos Inquisidores. Assistem mulheres e crianças sendo arrastadas de uma carroça-prisão e executadas, a fonte tingida de sangue.',
				season: 'Final do outono',
				year: '1021 IF',
			},
			'tfe-27': {
				title: 'Planejando os próximos passos',
				description:
					'O bando retorna à loja de Clubs. Kelsier, Vin e os demais replanejam como avançar e iniciar uma guerra de casas. Sazed chega com uma carta de Marsh com instruções de onde se encontrar.',
				season: 'Inverno',
				year: '1021 IF',
			},
			'tfe-27.2': {
				title: 'Encontro com Marsh',
				description:
					'Kelsier e Vin vão a um edifício abandonado nos Meandros para se encontrar com Marsh. Enquanto esperam, Kelsier fala do ouro — o nono metal alomântico que permite ver uma versão alternativa do passado. Marsh chega com as tatuagens de um obrigador de baixo escalão do Cantão da Inquisição. Revela que o Ministério coloca apaziguadores nas regiões skaa sob apaziguamento constante, ocultos por abafadores. Confirma também que os Inquisidores podem morrer de velhice.',
				season: 'Inverno',
				year: '1021 IF',
			},
			'tfe-28': {
				title: 'Baile na Fortaleza Lekal',
				description:
					'Vin assiste ao baile na Fortaleza Lekal e começa a espalhar rumores para acender as Guerras de Casas. Elend a surpreende — diz que quer beijá-la, mas Vin insiste que ele não a conhece de verdade. Passeiam e Elend revela que a fortuna dos Venture vem inteiramente da extração de atium nos Poços de Hathsin. Menciona que os Tekiel foram mortos pela Casa Hasting e tenta convencer Valette a deixar Luthadel.',
				season: 'Inverno',
				year: '1021 IF',
			},
			'tfe-29': {
				title: 'A última tradução',
				description:
					'Vin lê a última tradução do diário feita por Sazed na mansão Renoux e fica decepcionada por não haver mais. Sazed explica a feruquimia com mais detalhes e ela tenta queimar uma de suas mentes de peltre. Depois, Kelsier se junta ao bando para estudar um mapa de Marsh. Descobrem que o bando de Theron foi atacado, e Vin suspeita que os Inquisidores ainda estão em seu encalço.',
				season: 'Inverno',
				year: '1021 IF',
			},
			'tfe-30': {
				title: 'O baile Venture',
				description:
					'Vin assiste ao último baile de casas na Fortaleza Venture com Sazed. Lady Kliss se revela informante e tenta chantagear a Casa Renoux. Em troca de um colar de safira, Kliss conta a Vin que assassinos Elariel tentarão matar Elend naquela noite. Vin força Kliss alomanticamente a revelar todo o plano. Quebra um vitral para escapar. Fora, enfrenta dois brutamontes, dois lança-moedas e duas Nascidas da Bruma — uma delas é Shan Elariel. Vin a engana esgotando seu atium antes, e a mata.',
				season: 'Inverno',
				year: '1021 IF',
			},
			'tfe-31': {
				title: 'Depois do duelo',
				description:
					'Vin irrompe na cozinha de Clubs enfaixada e esfarrapada. Kelsier a repreende por salvar Elend, mas Vin grita que skaa e nobres não são diferentes — Elend é um homem bom. No telhado, Vin conta a Kelsier que a Casa Venture administra os Poços e compartilha sua teoria de que os Inquisidores enxergam através das nuvens de cobre. Kelsier testa a teoria e a confirma.',
				season: 'Inverno',
				year: '1021 IF',
			},
			'tfe-32': {
				title: 'Vigília no telhado',
				description:
					'Vin e Spook vigiam do telhado da loja de Clubs. Spook lhe ensina truques com estanho: não é só sobre amplificar os sentidos, mas filtrar as distrações. Depois, Kelsier e Vin encontram o corpo de Marsh — drenado de sangue, uma casca sem vida. Descobrem uma carta explicando que os Inquisidores provavelmente o encontrariam.',
				season: 'Inverno',
				year: '1021 IF',
			},
			'tfe-33': {
				title: 'O refúgio de emergência',
				description:
					'O bando se muda para um porão de reserva úmido perto da loja de Clubs — três cômodos. Kelsier anuncia que destruiu todo o atium dos Poços. Spook monta guarda como vigília de estanho.',
				season: 'Início da primavera',
				year: '1022 IF',
			},
			'tfe-33.2': {
				title: 'A luta com o Inquisidor',
				description:
					'Todos seguem Kelsier à Praça da Fonte. Veem Spook e lorde Renoux em uma das carroças de execução. Kelsier luta contra um Inquisidor na praça. Elend vê os servos Renoux enjaulados e grita por Valette, sem encontrá-la.',
				season: 'Início da primavera',
				year: '1022 IF',
			},
			'tfe-34': {
				title: 'A morte do Sobrevivente',
				description:
					'Kelsier luta contra o Inquisidor em combate total na Praça da Fonte, ambos queimando atium. Vin observa de cima: Kelsier é um mestre de Empurrar e Puxar. Mata o Inquisidor e os skaa gritam "O Sobrevivente de Hathsin". O Senhor Soberano chega em uma carruagem preta. Kelsier é morto. Vin salta e o segura enquanto ele morre.',
				season: 'Início da primavera',
				year: '1022 IF',
			},
			'tfe-35': {
				title: 'O legado do Sobrevivente',
				description:
					'Vin retorna ao refúgio de emergência. Está furiosa porque Kelsier não foi honesto — planejara morrer e abandoná-la. Sazed oferece palavras de consolo. Fora, os skaa falam do Senhor das Brumas. Em um armazém próximo, o bando vê o kandra na forma de Kelsier. Kelsier deixara cartas com instruções para tomar a cidade. A carta de Vin diz que nunca decifrou o Décimo Primeiro Metal. Ela decide descobrir o que o Senhor Soberano esconde.',
				season: 'Início da primavera',
				year: '1022 IF',
			},
			'tfe-36': {
				title: 'Dentro de Kredik Shaw',
				description:
					'Vin caminha silenciosamente até Kredik Shaw, encorajando os guardas externos a se juntarem à rebelião. Dentro, mata dois Inquisidores. Na câmara seguinte, um ancião está sentado em uma cadeira. Um Inquisidor agarra Vin pelo pescoço — o ancião fala e os Inquisidores o chamam de Senhor Soberano. Mas Vin está confusa: o Senhor Soberano da Praça da Fonte era um homem jovem. Queima o Décimo Primeiro Metal e vê duas formas fantasmagóricas junto ao ancião.',
				season: 'Início da primavera',
				year: '1022 IF',
			},
			'tfe-37': {
				title: 'Resgate e revelação',
				description:
					'Os Inquisidores forçam Vin a queimar um metal que anula todos os outros. É levada perante o Senhor Soberano em seu trono — a versão jovem, o homem que matou Kelsier. Tevidian, pai de Vin e obrigador de mais alto escalão, é executado pelos Inquisidores. Vin descobre que Reen nunca a delatou: suportou a tortura e disse aos Inquisidores que ela morrera de fome há tempos. Sazed é trazido à cela e libera força feruquímica para arrombar a porta. Elend e seis soldados irrompem. Vin encontra sua capa e um frasco de metais. Elend agora sabe que ela é Nascida da Bruma. Vin agarra a cabeça dele e o beija, depois parte para matar o Senhor Soberano.',
				season: 'Início da primavera',
				year: '1022 IF',
			},
			'tfe-38': {
				title: 'Assassina do Senhor Soberano',
				description:
					'Vin salta entre as agulhas de Kredik Shaw até o topo. O Inquisidor Kar a agarra pelo pescoço, mas um segundo Inquisidor arranca um prego de metal do pescoço de Kar, matando-o instantaneamente. É Marsh — vivo, com onze pregos no corpo. Matou todos os outros Inquisidores. O verdadeiro nome do Senhor Soberano é Rashek: assassinou o Herói das Eras e tomou seu lugar. Vin puxa os braceletes do Senhor Soberano e eles caem. Sem sua juventude feruquímica, ele se torna um ancião fraco. Sazed aparece com um frasco de metais. Vin crava uma lança direto em seu coração. Mil anos de opressão chegam ao fim.',
				season: 'Início da primavera',
				year: '1022 IF',
			},
			'tfe-39': {
				title: 'Uma nova era',
				description:
					'Sazed, Marsh e Vin estão no alto de um edifício perto do bairro skaa. Sazed explica que o Senhor Soberano era ao mesmo tempo feruquimista e alomante — os braceletes armazenavam sua juventude. Marsh descreve sua sobrevivência e transformação: onze pregos de metal, dois pelos olhos, oito no peito, um nas costas. Também fala dos kandra, criaturas evoluídas dos espectros de bruma que agora veem Vin como sua dona.',
				season: 'Primavera',
				year: '1022 IF',
			},
			'tfe-39.2': {
				title: 'Vin e Elend',
				description:
					'Vin observa Elend secretamente das brumas fora da Fortaleza Venture. Sua reunião com líderes skaa e nobres correu bem — após um discurso formidável que nem Sazed conseguiu memorizar por completo sem seus metais, todos o aceitaram como rei. Elend redige o novo código de leis do reino. Vin se lembra de que Reen nunca a delatou aos Inquisidores: existem pessoas que a amam de verdade. Com essa lembrança, corre até Elend e se abraçam.',
				season: 'Primavera',
				year: '1022 IF',
			},
		},
		sazed: {
			...enData.movements.sazed,
			'tfe-9': { title: 'O mordomo terrisano', description: 'Sazed chega à propriedade de lorde Renoux em Fellise como tutor e mordomo de Vin, ensinando-lhe etiqueta, dança e comportamento. Fala-lhe do trelagismo — a quinta religião que lhe propõe — e admite conhecer 562 mais.', season: 'Verão', year: '1021 IF' },
			'tfe-10.2': { title: 'O comício do armazém', description: 'Sazed assiste ao comício secreto do armazém com Kelsier e Vin, observando o Sobrevivente pregar a revolução aos trabalhadores skaa.', season: 'Verão', year: '1021 IF' },
			'tfe-12': { title: 'Guardião no baile', description: 'Sazed acompanha Vin ao seu primeiro baile na Fortaleza Venture como seu mordomo, velando por ela enquanto se infiltra na sociedade nobre.', season: 'Verão', year: '1021 IF' },
			'tfe-13': { title: 'Debriefing em Fellise', description: 'Sazed retorna à propriedade Renoux em Fellise com Vin e Kelsier para examinar os resultados do primeiro baile de Vin e planejar os próximos passos.', season: 'Verão', year: '1021 IF' },
			'tfe-15': { title: 'Salvando Vin', description: 'Sazed leva Vin à loja de Clubs para salvá-la e operá-la após seus ferimentos em Kredik Shaw. Também examina um livro escrito em khlenniano recuperado na missão.', season: 'Verão', year: '1021 IF' },
			'tfe-16': { title: 'Retorno a Fellise', description: 'Após estabilizar Vin na loja de Clubs, Sazed retorna à propriedade Renoux em Fellise.', season: 'Verão', year: '1021 IF' },
			'tfe-17': { title: 'Traduzindo o livro khlenniano', description: 'Na biblioteca da propriedade Renoux em Fellise, Sazed trabalha na tradução do livro escrito em khlenniano que Vin recuperou em Kredik Shaw.', season: 'Verão', year: '1021 IF' },
			'tfe-18': { title: 'Guardião na Fortaleza Elariel', description: 'Sazed acompanha Vin ao baile da Fortaleza Elariel como seu mordomo terrisano, velando por ela enquanto navega a corte nobre.', season: 'Verão', year: '1021 IF' },
			'tfe-19': { title: 'Troca de inteligência', description: 'Sazed está na mansão Renoux quando Kelsier retorna pela Rota dos Espinhos. Trocam informações sobre as casas nobres e o progresso da rebelião, enquanto Kelsier sermoneia Vin para ficar longe de Elend.', season: 'Final do verão', year: '1021 IF' },
			'tfe-22': { title: 'Segredos da feruquimia', description: 'Na propriedade Renoux, Sazed fala com Vin sobre o terrisano do diário do Senhor Soberano. Revela os segredos da feruquimia e como os Guardiões foram formados para preservar tudo após a perda da religião terrisana. Aprende novidades sobre seu povo pelo diário — que a terra era outrora verde e fértil.', season: 'Outono', year: '1021 IF' },
			'tfe-23': { title: 'Guardião na Fortaleza Hasting', description: 'Sazed acompanha Vin ao baile da Fortaleza Hasting como seu mordomo terrisano, aguardando enquanto ela espalha rumores e conversa com nobres.', season: 'Outono', year: '1021 IF' },
			'tfe-27': { title: 'O recado de Marsh', description: 'Sazed retorna à loja de Clubs com uma carta de Marsh contendo notícias e instruções de onde se encontrar. Também traz traduções do diário do Senhor Soberano.', season: 'Inverno', year: '1021 IF' },
			'tfe-28': { title: 'Guardião na Fortaleza Lekal', description: 'Sazed acompanha Vin ao baile da Fortaleza Lekal como seu mordomo terrisano, aguardando enquanto ela trabalha para acender as Guerras de Casas e conversa com Elend.', season: 'Inverno', year: '1021 IF' },
			'tfe-29': { title: 'Lições de feruquimia', description: 'Na propriedade Renoux, Sazed entrega a Vin as últimas traduções do diário. Explica a feruquimia com mais detalhes e Vin tenta queimar uma de suas mentes de peltre. Depois, Sazed se junta ao bando quando Kelsier examina um mapa detalhado de Marsh. Naquela noite, sem dormir, Kelsier pede a Sazed que lhe conte sobre religiões.', season: 'Inverno', year: '1021 IF' },
			'tfe-30': { title: 'Guardião na Fortaleza Venture', description: 'Sazed acompanha Vin ao último baile de casas na Fortaleza Venture. Os convidados selam alianças e lady Valette recebe uma recepção fria. Sazed sai do baile antes de Vin descobrir o complô de assassinato contra Elend e lutar contra Shan Elariel.', season: 'Inverno', year: '1021 IF' },
			'tfe-31': { title: 'Cuidando dos ferimentos de Vin', description: 'Sazed cuida dos ferimentos de Vin na loja de Clubs depois que ela chega maltratada do combate com Shan Elariel e os assassinos Elariel. Ouve enquanto Vin relata os eventos da noite.', season: 'Inverno', year: '1021 IF' },
			'tfe-33': { title: 'O refúgio de emergência', description: 'Sazed está no refúgio de reserva perto da loja de Clubs com o bando, depois que Kelsier destruiu os Poços de Hathsin. Vin fala com Sazed sobre o Décimo Primeiro Metal. Quando skaa são levados para execução na Praça da Fonte e Spook aparece enjaulado, Sazed fica no refúgio enquanto Kelsier luta contra o Inquisidor.', season: 'Início da primavera', year: '1022 IF' },
			'tfe-35': { title: 'Consolando Vin', description: 'Sazed está com Vin no refúgio de reserva após a morte de Kelsier. Oferece palavras de consolo enquanto Vin esbraveja que Kelsier a abandonou. Fica para trás quando o bando vai ao armazém ver o kandra na forma de Kelsier.', season: 'Início da primavera', year: '1022 IF' },
			'tfe-37': { title: 'O feruquimista desacorrentado', description: 'Sazed é levado à cela de Vin em Kredik Shaw. Parece murchar, depois seus músculos incham ao dobro do tamanho ao liberar força feruquímica armazenada, arrombando a porta.', season: 'Início da primavera', year: '1022 IF' },
			'tfe-38': { title: 'A queda do Império', description: 'Sazed aparece na confrontação final em Kredik Shaw com um frasco de metais para Vin. Testemunha a queda do Senhor Soberano quando Vin puxa seus braceletes e sua idade aumenta dramaticamente.', season: 'Início da primavera', year: '1022 IF' },
			'tfe-39': { title: 'Compreendendo o tirano', description: 'Sazed está com Vin e Marsh no alto de um edifício perto do bairro skaa. Explica que o Senhor Soberano era tanto feruquimista quanto alomante — os braceletes armazenavam sua juventude. Especula que por isso todos os servos terrisanos eram obrigados a ser eunucos: o Senhor Soberano temia que alguém com sangue feruquímico e alomântico desafiasse sua imortalidade.', season: 'Primavera', year: '1022 IF' },
		},
		elend: {
			...enData.movements.elend,
			'tfe-12': { title: 'O nobre leitor', description: 'Elend Venture nota Vin sozinha numa varanda durante um baile em sua própria fortaleza e se aproxima. Irrita-a tirando Provas do Monumento e começando a ler enquanto o resto da nobreza dança e intriga ao redor.', season: 'Verão', year: '1021 IF' },
			'tfe-18': { title: 'Uma noite com Valette', description: 'Elend assiste ao baile da Fortaleza Elariel, onde se senta à mesa com Vin lendo, como sempre. Elogia seu vestido, deixando-a boquiaberta.', season: 'Verão', year: '1021 IF' },
			'tfe-23': { title: 'O lenço', description: 'Elend encontra Vin no baile da Fortaleza Hasting. Ela pergunta se ele esteve com uma skaa. Ele confessa que seu pai o obrigou aos treze anos e a mulher foi morta depois, mas nunca mais fez isso. Dá um lenço a Vin, sinalizando seu desejo de cortejá-la. Após ir embora com seus amigos, sobem a uma torre para debater as falhas do Senhor Soberano.', season: 'Outono', year: '1021 IF' },
			'tfe-28': { title: 'Baile na Fortaleza Lekal', description: 'Elend surpreende Vin no baile da Fortaleza Lekal. Diz que quer beijá-la, mas Vin insiste que ele não a conhece de verdade. Passeiam e Elend revela que a fortuna dos Venture vem inteiramente da extração de atium nos Poços de Hathsin. Menciona que os Tekiel foram mortos pela Casa Hasting e tenta convencer Valette a deixar Luthadel.', season: 'Inverno', year: '1021 IF' },
			'tfe-28.2': { title: 'O chamado do pai', description: 'Elend retorna à Fortaleza Venture e tenta passar despercebido pelo quarto de seu pai. Lorde Straff Venture, um vigília de estanho que não deixa nada passar, o chama. Straff ordena que Elend jante com a Casa Hasting e uma de suas filhas. Depois, Jastes chega e revela que mandou seguir a carruagem de lady Valette — ela chegou a Fellise apenas com o terrisano, Valette desaparecera. Elend, percebendo que revelou o segredo do atium, propõe um acordo a seu pai: irá ao almoço em troca de espiões para vigiar Valette.', season: 'Inverno', year: '1021 IF' },
			'tfe-30': { title: 'O baile Venture', description: 'Elend janta com seu pai na Fortaleza Venture durante o baile. Vin atrai sua atenção e têm uma confrontação. Quando Vin descobre o plano de assassinato contra Elend, corre pelas brumas. A noite termina em caos quando Vin luta e mata lady Shan Elariel. Na confusão, Elend escapa.', season: 'Inverno', year: '1021 IF' },
			'tfe-31': { title: 'Os relatórios dos espiões', description: 'Elend e Jastes se encontram com Felt, que relata tudo o que os espiões de Elend descobriram sobre a loja de Clubs e seus ocupantes. Depois, guardas Venture levam Elend a seu pai Straff, que revela que Shan Elariel era uma Nascida da Bruma enviada para assassinar Elend.', season: 'Inverno', year: '1021 IF' },
			'tfe-33': { title: 'As carroças de execução', description: 'Elend vê os servos de Renoux enjaulados em uma carroça de execução na Praça da Fonte. Grita por Valette, sem encontrá-la na multidão.', season: 'Início da primavera', year: '1022 IF' },
			'tfe-34': { title: 'Kelsier salva Elend', description: 'Elend chega à jaula de Renoux na Praça da Fonte e pergunta por Valette. Um Inquisidor pousa sobre a jaula e está prestes a golpear Elend quando Kelsier ataca o Inquisidor, salvando-lhe a vida. Kelsier grita a Elend que Valette está bem.', season: 'Início da primavera', year: '1022 IF' },
			'tfe-36': { title: 'Autoridade da Casa Venture', description: 'O pai de Elend informa que estourou uma rebelião skaa e quer fugir de Luthadel. Elend se recusa a ir. Straff aceita, esperando que Elend morra, e transfere-lhe a autoridade da Casa Venture. Elend ordena seus soldados à Fortaleza Lekal para defesa mútua, depois toma seus cinco melhores soldados e vai se apresentar à liderança skaa.', season: 'Início da primavera', year: '1022 IF' },
			'tfe-37': { title: 'Resgatando Vin', description: 'Elend oferece ouro a skaa para ser levado até Dockson e diz que a Casa Venture não resistirá à rebelião — devem cooperar. Depois, Elend e seis soldados invadem Kredik Shaw para resgatar Vin. O segredo é revelado — ele sabe que ela é Nascida da Bruma. Vin agarra sua cabeça e o beija, depois parte para matar o Senhor Soberano.', season: 'Início da primavera', year: '1022 IF' },
			'tfe-38': { title: 'O rei filósofo', description: 'Após a morte do Senhor Soberano, Elend emerge como uma voz unificadora clamando por ordem. Começa a se reunir com líderes skaa e nobres para redigir um código de leis para a nova nação.', season: 'Início da primavera', year: '1022 IF' },
			'tfe-39': { title: 'O novo rei', description: 'Elend Venture é aceito como rei da Dominância Central após um formidável discurso perante líderes skaa e nobres. Senta-se na Fortaleza Venture redigindo o novo código de leis. Vin o observa secretamente das brumas pela janela antes de correr até ele — se abraçam.', season: 'Primavera', year: '1022 IF' },
		},
		marsh: {
			...enData.movements.marsh,
			'tfe-7': { title: 'O irmão relutante', description: 'Marsh chega à loja de Clubs, irmão mais velho de Kelsier e líder rebelde por direito próprio. Junta-se ao plano do bando a contragosto.', season: 'Final da primavera', year: '1021 IF' },
			'tfe-10.2': { title: 'O comício do armazém', description: 'Marsh assiste ao comício secreto do armazém com o bando, vendo seu irmão Kelsier pregar a revolução aos trabalhadores skaa reunidos.', season: 'Verão', year: '1021 IF' },
			'tfe-20': { title: 'Ensinando Vin', description: 'Marsh chega à propriedade Renoux em Fellise para ensinar Vin a buscar — usar bronze para detectar outros alomantes queimando metais, identificar o tipo e distinguir brumosos de Nascidos da Bruma. Também lhe ensina sobre cobre e como os abafadores podem ocultar pulsos alomânticos.', season: 'Final do verão', year: '1021 IF' },
			'tfe-27': { title: 'A infiltração no Ministério', description: 'Marsh se encontra com Kelsier e Vin em um edifício abandonado dos Meandros, ostentando as tatuagens de um obrigador de baixo escalão do Cantão da Inquisição. Infiltrou-se de fato no Ministério. Revela que o Ministério coloca apaziguadores nas regiões skaa sob apaziguamento constante, ocultos por abafadores. Confirma que os Inquisidores podem morrer de velhice.', season: 'Inverno', year: '1021 IF' },
			'tfe-30': { title: 'Desaparecimento', description: 'Marsh fica em silêncio, suas comunicações cessam ao desaparecer nos níveis mais profundos do Cantão da Inquisição. O bando teme o pior.', season: 'Inverno', year: '1021 IF' },
			'tfe-32': { title: 'O corpo', description: 'Kelsier e Vin encontram o corpo de Marsh, completamente drenado de sangue, uma casca sem vida. Sua carta, encontrada depois na loja de Clubs, explica que os Inquisidores provavelmente o encontrariam. O bando o chora. Mas o cadáver mutilado não é o que parece.', season: 'Inverno', year: '1022 IF' },
			'tfe-38': { title: 'O Inquisidor', description: 'Marsh aparece durante o assalto final a Kredik Shaw — vivo, transformado com onze pregos de metal: dois pelos olhos, oito no peito, um nas costas unindo-os. Mata o Inquisidor Kar arrancando-lhe um prego do pescoço e revela que matou todos os outros Inquisidores.', season: 'Início da primavera', year: '1022 IF' },
			'tfe-39': { title: 'Onze pregos', description: 'Marsh está com Sazed e Vin no alto de um edifício perto do bairro skaa. Fala de sua sobrevivência e transformação — onze pregos, o processo horrendo e como resistiu. Também lhes conta sobre os kandra, criaturas evoluídas dos espectros de bruma, e que o kandra que interpretou lorde Renoux agora reconhece Vin como sua dona.', season: 'Primavera', year: '1022 IF' },
		},
		spook: {
			...enData.movements.spook,
			'tfe-7': { title: 'O jovem vigília de estanho', description: 'Spook, o jovem sobrinho de Clubs, trabalha como vigília e mensageiro do bando na carpintaria, falando em gírias cerradas do leste.', season: 'Final da primavera', year: '1021 IF' },
			'tfe-9': { title: 'Corridas de mensageiro', description: 'Spook leva mensagens entre a loja de Clubs em Luthadel e a propriedade Renoux em Fellise; seus sentidos amplificados pelo estanho fazem dele um explorador excepcional.', season: 'Verão', year: '1021 IF' },
			'tfe-16': { title: 'Velando Vin', description: 'Lestibournes vela por Vin ferida na loja de Clubs, presente quando ela acorda dos ferimentos da missão de reconhecimento de Kredik Shaw. Conta que Kelsier lhe deu um novo nome: Spook.', season: 'Verão', year: '1021 IF' },
			'tfe-22': { title: 'O lenço', description: 'Spook visita a propriedade Renoux em Fellise e encontra Vin lendo o diário do Senhor Soberano. Diz que Dockson veio buscar mais armas e, corado e nervoso, lhe entrega um lenço antes de sair correndo. Sazed explica depois que assim um jovem cavaleiro sinaliza seu desejo de cortejar seriamente uma dama.', season: 'Outono', year: '1021 IF' },
			'tfe-24': { title: 'Noite na loja de Clubs', description: 'Spook compartilha uma bebida noturna com Kelsier, Ham e Clubs na loja de Clubs enquanto o bando discute o estado da missão.', season: 'Outono', year: '1021 IF' },
			'tfe-26': { title: 'As execuções', description: 'Spook irrompe na loja de Clubs para anunciar execuções na Praça da Fonte. Acompanha o bando à praça, onde presenciam a brutal execução pública de mulheres e crianças skaa, seu sangue despejado na fonte.', season: 'Final do outono', year: '1021 IF' },
			'tfe-32': { title: 'Vigília no telhado', description: 'Spook vigia do telhado da loja de Clubs com Vin, ensinando-lhe truques de estanho. Explica que não é só sobre amplificar os sentidos, mas filtrar o importante e não se deixar distrair pelo resto.', season: 'Inverno', year: '1022 IF' },
			'tfe-33': { title: 'Vigília de guarda', description: 'Quando o bando vai à Praça da Fonte, Spook é avistado em uma das carroças de execução junto a lorde Renoux — capturado pelo Ministério.', season: 'Início da primavera', year: '1022 IF' },
			'tfe-34': { title: 'Testemunha do sacrifício', description: 'Spook observa da multidão Kelsier lutar e morrer na Praça da Fonte — um evento que marcará o resto de sua vida. O sacrifício do Sobrevivente transforma a compreensão de Spook sobre o que significa servir a uma causa.', season: 'Início da primavera', year: '1022 IF' },
			'tfe-38': { title: 'A revolução', description: 'Spook luta ao lado do bando durante a revolução final, ajudando a coordenar o levante skaa nas ruas de Luthadel.', season: 'Início da primavera', year: '1022 IF' },
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
};
