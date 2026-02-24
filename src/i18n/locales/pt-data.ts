/**
 * Portuguese (Brazilian) data translations.
 * Sources: Leya / Trama / Saída de Emergência editions.
 */
import type { DataTranslations } from '../types';

export const ptData: DataTranslations = {
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
		vin: {
			'tfe-1': {
				title: 'Menina de Rua',
				description:
					'Vin trabalha como vigia para o bando de ladrões de Camon nos cortiços de Luthadel, usando suas habilidades alomânticas desconhecidas para influenciar sutilmente aqueles ao seu redor.',
				season: 'Primavera',
				year: '1021 IF',
			},
			'tfe-2': {
				title: 'O Golpe no Ministério',
				description:
					'Vin acompanha o bando de Camon em um golpe arriscado no Cantão das Finanças, onde seus pulsos alomânticos atraem a atenção de Kelsier.',
				season: 'Primavera',
				year: '1021 IF',
			},
			'tfe-4': {
				title: 'Recrutada',
				description:
					'Depois que Kelsier resgata Vin da surra de Camon, ela é levada à carpintaria de Clubs — o quartel-general do bando — e apresentada ao plano para derrubar o Lorde Soberano.',
				season: 'Primavera',
				year: '1021 IF',
			},
			'tfe-7': {
				title: 'Treinamento de Nascida das Brumas',
				description:
					'Kelsier leva Vin até as muralhas da cidade perto do Portão de Aço para seu primeiro treinamento real de Alomancia, ensinando-a a queimar aço e ferro entre os telhados escuros.',
				season: 'Final da primavera',
				year: '1021 IF',
			},
			'tfe-8': {
				title: 'A Propriedade Renoux',
				description:
					'Vin viaja para oeste até Fellise para iniciar seu disfarce como Lady Valette Renoux na propriedade rural de Lorde Renoux, preparando-se para a infiltração na sociedade nobre.',
				season: 'Verão',
				year: '1021 IF',
			},
			'tfe-9': {
				title: 'Treinamento com Sazed',
				description:
					'Sob a tutela de Sazed na propriedade Renoux, Vin aprende a etiqueta, a dança e o comportamento necessários para se passar por uma nobre nos grandes bailes das casas nobres.',
				season: 'Verão',
				year: '1021 IF',
			},
			'tfe-10': {
				title: 'Retorno à Equipe',
				description:
					'Vin retorna a Luthadel vinda de Fellise, reunindo-se à equipe na oficina de Clubs. Kelsier a leva em uma corrida noturna de Alomancia pela cidade, avançando seu treinamento.',
				season: 'Verão',
				year: '1021 IF',
			},
			'tfe-10.2': {
				title: 'O Comício no Armazém',
				description:
					'Vin participa de um comício secreto onde Kelsier prega a revolução para trabalhadores skaa reunidos em um armazém escondido.',
				season: 'Verão',
				year: '1021 IF',
			},
			'tfe-11': {
				title: 'O Massacre no Covil de Camon',
				description:
					'Vin e a equipe descobrem as consequências de um ataque brutal ao antigo covil de Camon — o Ministério matou todos lá dentro como retaliação pelo golpe no Cantão de Finanças.',
				season: 'Verão',
				year: '1021 IF',
			},
			'tfe-13': {
				title: 'Primeiro Baile na Fortaleza Venture',
				description:
					'Vin comparece a seu primeiro baile como Lady Valette Renoux, entrando no mundo reluzente da nobreza. Ela conhece Elend Venture lendo sozinho em um canto.',
				season: 'Verão',
				year: '1021 IF',
			},
			'tfe-14': {
				title: 'Reconhecimento de Kredik Shaw',
				description:
					'Vin e Kelsier fazem um ousado reconhecimento noturno do palácio do Lorde Soberano, saltando entre as Mil Agulhas para mapear suas defesas.',
				season: 'Verão',
				year: '1021 IF',
			},
			'tfe-16': {
				title: 'Baile na Fortaleza Elariel',
				description:
					'Vin comparece a um baile na Casa Elariel, reunindo inteligência sobre as casas nobres e suas alianças enquanto aprofunda sua identidade falsa.',
				season: 'Verão',
				year: '1021 IF',
			},
			'tfe-19': {
				title: 'Cada Vez Mais Próximos',
				description:
					'Em mais um baile na Fortaleza Venture, o relacionamento de Vin com Elend se aprofunda apesar de sua missão. Ela dança nos telhados depois.',
				season: 'Final do verão',
				year: '1021 IF',
			},
			'tfe-22': {
				title: 'O Diário',
				description:
					'De volta à carpintaria de Clubs, Vin estuda o antigo diário do Lorde Soberano, encontrando referências perturbadoras à Profundeza e à profecia do Herói das Eras.',
				season: 'Outono',
				year: '1021 IF',
			},
			'tfe-25': {
				title: 'A Corrida de Peltre',
				description:
					'Quando o exército rebelde em Holstep é massacrado pelas forças da guarnição, Vin faz uma desesperada corrida de peltre — queimando peltre continuamente por horas — para ajudar a resgatar sobreviventes.',
				season: 'Final do outono',
				year: '1021 IF',
			},
			'tfe-26': {
				title: 'Recuperação',
				description:
					'Vin retorna à carpintaria de Clubs exausta da corrida de peltre, recuperando-se enquanto o bando se reagrupa após a devastadora perda em Holstep.',
				season: 'Final do outono',
				year: '1021 IF',
			},
			'tfe-30': {
				title: 'Escalada da Guerra entre Casas',
				description:
					'A Guerra entre Casas se intensifica enquanto as casas nobres se voltam umas contra as outras. Vin percebe que a manipulação do bando está funcionando, mas a violência a perturba.',
				season: 'Inverno',
				year: '1021 IF',
			},
			'tfe-34': {
				title: 'A Morte do Sobrevivente',
				description:
					'Vin observa impotente dos telhados enquanto Kelsier luta e é morto pelo Lorde Soberano na Praça da Fonte, tornando-se o Sobrevivente de Hathsin na morte.',
				season: 'Início da primavera',
				year: '1022 IF',
			},
			'tfe-36': {
				title: 'Assalto ao Palácio',
				description:
					'Liderando a rebelião skaa, Vin luta para entrar em Kredik Shaw, enfrentando Inquisidores e guardas para alcançar a sala do trono do Lorde Soberano.',
				season: 'Início da primavera',
				year: '1022 IF',
			},
			'tfe-38': {
				title: 'A Assassina do Lorde Soberano',
				description:
					'Vin confronta o Lorde Soberano em sua sala do trono, arrancando suas mentes de metal e matando o tirano imortal. Mil anos de opressão chegam ao fim.',
				season: 'Início da primavera',
				year: '1022 IF',
			},
			'tfe-39': {
				title: 'Uma Nova Era',
				description:
					'Após a revolução, Vin está ao lado de Elend na Fortaleza Venture enquanto uma nova era começa. As brumas ainda fluem, mas o Lorde Soberano se foi.',
				season: 'Primavera',
				year: '1022 IF',
			},
			'woa-1': {
				title: 'Guardiã da Cidade',
				description:
					'Vin patrulha as muralhas de Luthadel toda noite, vigiando ameaças enquanto três exércitos convergem lentamente sobre a cidade recém-libertada.',
				season: 'Outono',
				year: '1023 IF',
			},
			'woa-3': {
				title: 'O Espírito da Bruma',
				description:
					'Durante sua patrulha noturna, Vin encontra uma figura misteriosa nas brumas — um espírito que parece observá-la, apontando para algo.',
				season: 'Outono',
				year: '1023 IF',
			},
			'woa-8': {
				title: 'Protetora e Companheira',
				description:
					'Vin navega seu duplo papel como protetora e companheira de Elend no palácio, lutando entre seu amor por ele e seu dever de mantê-lo seguro.',
				season: 'Outono',
				year: '1023 IF',
			},
			'woa-14': {
				title: 'Conselho do Bando',
				description:
					'O bando se reúne na carpintaria de Clubs para discutir estratégia enquanto o exército de Straff Venture acampa ao norte e as forças de Cett se aproximam pelo oeste.',
				season: 'Início do inverno',
				year: '1023 IF',
			},
			'woa-22': {
				title: 'Tensões Políticas',
				description:
					'Com o cerco se apertando, Vin observa Elend lutar com a Assembleia e as exigências da governança enquanto ela caça Zane através das brumas.',
				season: 'Inverno',
				year: '1023 IF',
			},
			'woa-26': {
				title: 'Negociação com Straff',
				description:
					'Vin acompanha Elend ao acampamento de guerra de Straff Venture ao norte da cidade, onde demonstra seu poder aterrorizante para intimidar o aspirante a conquistador.',
				season: 'Inverno',
				year: '1023 IF',
			},
			'woa-28': {
				title: 'Retorno da Negociação',
				description:
					'Após o tenso encontro no acampamento de Straff, Vin retorna à Fortaleza Venture, assombrada pelos sussurros de Zane e suas crescentes dúvidas sobre seu papel.',
				season: 'Inverno',
				year: '1024 IF',
			},
			'woa-35': {
				title: 'A Crise da Assembleia',
				description:
					'Vin observa da galeria enquanto a Assembleia vota para depor Elend e convidar Lorde Penrod para liderar, destruindo o experimento democrático.',
				season: 'Inverno',
				year: '1024 IF',
			},
			'woa-43': {
				title: 'Ataque contra Cett',
				description:
					'Vin lança um devastador assalto solitário contra as forças de Cett aquarteladas na Fortaleza Hasting, expulsando seu exército da cidade em uma demonstração de poder de Nascida das Brumas.',
				season: 'Final do inverno',
				year: '1024 IF',
			},
			'woa-47': {
				title: 'Duelo com Zane',
				description:
					'Perto da Fortaleza Hasting, Vin duela com Zane Venture em uma brutal batalha de Nascidos das Brumas, finalmente matando-o para proteger aqueles que ela ama.',
				season: 'Final do inverno',
				year: '1024 IF',
			},
			'woa-49': {
				title: 'Exílio',
				description:
					'Vin e Elend partem de Luthadel pelo Portão de Estanho, exilados pelo novo governo de Penrod, seguindo para o norte em direção a Terris com uma pequena escolta.',
				season: 'Final do inverno',
				year: '1024 IF',
			},
			'woa-50': {
				title: 'Êxodo para o Norte',
				description:
					'O pequeno grupo viaja em direção a Terris, mas Vin sente algo puxando-a de volta — o Poço da Ascensão afinal não está nas montanhas.',
				season: 'Final do inverno',
				year: '1024 IF',
			},
			'woa-52': {
				title: 'Retorno à Batalha',
				description:
					'Vin faz uma desesperada corrida de peltre de volta a Luthadel quando os koloss rompem as muralhas, chegando a tempo de assumir o controle das criaturas e salvar a cidade.',
				season: 'Final do inverno',
				year: '1024 IF',
			},
			'woa-54': {
				title: 'Em Busca do Poço',
				description:
					'Com Luthadel salva mas abalada, Vin procura sob Kredik Shaw pelo Poço da Ascensão, seguindo a orientação do espírito da bruma cada vez mais fundo no subsolo.',
				season: 'Final do inverno',
				year: '1024 IF',
			},
			'woa-58': {
				title: 'O Poço Descoberto',
				description:
					'Vin desce às antigas cavernas sob Kredik Shaw e descobre o Poço da Ascensão, sua energia pulsando com poder acumulado.',
				season: 'Inverno',
				year: '1024 IF',
			},
			'woa-59': {
				title: 'O Poder Liberado',
				description:
					'No Poço, Vin absorve um poder imenso — então, enganada pela manipulação de Ruína sobre as profecias, libera-o. Algo terrível escapa de sua prisão.',
				season: 'Inverno',
				year: '1024 IF',
			},
			'hoa-1': {
				title: 'A Campanha do Norte',
				description:
					'Vin e Elend lideram seu exército até Vetitan, uma cidade sendo soterrada pela crescente queda de cinzas, para garantir um dos depósitos secretos do Lorde Soberano.',
				season: 'Primavera',
				year: '1026 IF',
			},
			'hoa-3': {
				title: 'O Primeiro Depósito',
				description:
					'Vin abre a caverna de suprimentos de Vetitan, encontrando comida, suprimentos e uma placa de metal com uma mensagem enigmática do Lorde Soberano sobre o perigo que ele aprisionou.',
				season: 'Primavera',
				year: '1026 IF',
			},
			'hoa-8': {
				title: 'Dividindo Forças',
				description:
					'Vin retorna a Luthadel onde o exército se divide: Sazed e Breeze seguem para o norte até Urteau, enquanto Vin e Elend marcharão para o oeste até Fadrex.',
				season: 'Verão',
				year: '1026 IF',
			},
			'hoa-10': {
				title: 'Marchando para o Oeste',
				description:
					'Vin marcha para o oeste com o exército de Elend em direção a Fadrex, a cinza caindo mais pesada a cada dia enquanto o mundo se deteriora ao redor deles.',
				season: 'Verão',
				year: '1026 IF',
			},
			'hoa-21': {
				title: 'Chegada a Fadrex',
				description:
					'O exército chega diante de Fadrex e estabelece um acampamento de cerco nas planícies cobertas de cinzas. O obligador Yomen recusa-se a render a cidade ou seu depósito.',
				season: 'Outono',
				year: '1026 IF',
			},
			'hoa-28': {
				title: 'A Espiã no Baile',
				description:
					'Vin se infiltra em Fadrex disfarçada de nobre, comparecendo a um dos bailes de Yomen na Fortaleza Orielle para reunir inteligência e buscar uma solução diplomática.',
				season: 'Outono',
				year: '1026 IF',
			},
			'hoa-40': {
				title: 'Segundo Baile',
				description:
					'Vin retorna a outro dos bailes de Yomen, envolvendo-o diretamente em um debate filosófico sobre o legado do Lorde Soberano e a crescente queda de cinzas.',
				season: 'Final do outono',
				year: '1026 IF',
			},
			'hoa-47': {
				title: 'Capturada',
				description:
					'Vin é capturada pelas forças de Yomen e presa no Cantão dos Recursos, seus metais confiscados. Ela é mantida em uma cela com um estoque de atium que não consegue alcançar.',
				season: 'Inverno',
				year: '1026 IF',
			},
			'hoa-51': {
				title: 'Na Prisão',
				description:
					'Aprisionada e sem acesso a seus metais, Vin contempla a influência de Ruína e a natureza do poder que liberou no Poço.',
				season: 'Inverno',
				year: '1026 IF',
			},
			'hoa-54': {
				title: 'O Depósito Revelado',
				description:
					'Vin descobre o depósito de suprimentos de Fadrex e seu conteúdo crucial — comida, suprimentos e uma mensagem sobre os verdadeiros preparativos do Lorde Soberano.',
				season: 'Final do inverno',
				year: '1026 IF',
			},
			'hoa-56': {
				title: 'Fuga de Fadrex',
				description:
					'Quando os koloss atacam Fadrex, Vin escapa da cidade, atraindo os Inquisidores para longe de Elend e do exército para protegê-los.',
				season: 'Início da primavera',
				year: '1027 IF',
			},
			'hoa-59': {
				title: 'Liderando a Caçada',
				description:
					'Vin voa para leste em direção a Luthadel com um bando de Inquisidores em sua perseguição, deliberadamente atraindo os servos de Ruína para longe de Fadrex e de Elend.',
				season: 'Primavera',
				year: '1027 IF',
			},
			'hoa-72': {
				title: 'Retorno a Luthadel',
				description:
					'Vin chega a uma Luthadel devastada e destrói Kredik Shaw, colapsando o palácio do Lorde Soberano em uma imensa demonstração de poder alomântico.',
				season: 'Verão',
				year: '1027 IF',
			},
			'hoa-79': {
				title: 'Ascensão',
				description:
					'Vin invoca as próprias brumas — o corpo de Preservação — ascendendo para se tornar um receptáculo de poder divino para lutar contra Ruína diretamente.',
				season: 'Outono',
				year: '1027 IF',
			},
			'hoa-81': {
				title: 'O Último Sacrifício',
				description:
					'Vin se sacrifica para destruir Ruína, combinando o poder de Preservação com sua própria força vital para aniquilar o deus da destruição.',
				season: 'Outono',
				year: '1027 IF',
			},
			'hoa-83': {
				title: 'O Campo do Renascimento',
				description:
					'O corpo de Vin é encontrado em um campo de flores e grama verde — os primeiros sinais do mundo recriado por Sazed. Ela repousa em paz ao lado de Elend.',
				season: 'Outono',
				year: '1027 IF',
			},
		},
		kelsier: {
			'tfe-0': {
				title: 'O Sobrevivente Retorna',
				description:
					'Kelsier chega à plantação de Lorde Tresting no Domínio Sul, matando o nobre cruel — seu primeiro golpe contra a nobreza desde que escapou dos Poços.',
				season: 'Primavera',
				year: '1021 IF',
			},
			'tfe-1': {
				title: 'Observador Oculto',
				description:
					'Kelsier observa o bando de Camon operar nas sombras, notando o uso inconsciente de Alomancia por Vin — uma menina de rua com poderes de Nascida das Brumas.',
				season: 'Primavera',
				year: '1021 IF',
			},
			'tfe-3': {
				title: 'Recrutando Vin',
				description:
					'Kelsier resgata Vin dos abusos de Camon e oferece a ela um lugar em seu bando, revelando a verdade sobre suas habilidades como Nascida das Brumas.',
				season: 'Primavera',
				year: '1021 IF',
			},
			'tfe-5': {
				title: 'O Roubo de Atium',
				description:
					'Kelsier invade o cofre da Fortaleza Venture para roubar atium, financiando a rebelião enquanto testa as defesas das casas nobres.',
				season: 'Primavera',
				year: '1021 IF',
			},
			'tfe-6': {
				title: 'O Bando se Reúne',
				description:
					'Na carpintaria de Clubs, Kelsier reúne o bando completo — Ham, Breeze, Dockson, Clubs e agora Vin — e revela seu plano para derrubar o Lorde Soberano.',
				season: 'Primavera',
				year: '1021 IF',
			},
			'tfe-7': {
				title: 'Ensinando a Aprendiz',
				description:
					'Kelsier leva Vin às muralhas da cidade perto do Portão de Aço para treinamento de Alomancia, ensinando-a a Empurrar e Puxar metais enquanto saltam entre as torres.',
				season: 'Final da primavera',
				year: '1021 IF',
			},
			'tfe-8': {
				title: 'O Disfarce Renoux',
				description:
					'Kelsier escolta Vin até Fellise e a propriedade de Lorde Renoux, estabelecendo sua identidade falsa como Lady Valette para a infiltração na sociedade nobre.',
				season: 'Verão',
				year: '1021 IF',
			},
			'tfe-10': {
				title: 'Planejando a Revolução',
				description:
					'De volta a Luthadel, Kelsier se reúne com a equipe na oficina de Clubs para avaliar o progresso da rebelião. Ele leva Vin em uma corrida noturna pela cidade para continuar seu treinamento de Alomancia.',
				season: 'Verão',
				year: '1021 IF',
			},
			'tfe-10.2': {
				title: 'A Rebelião Cresce',
				description:
					'Kelsier lidera comícios em armazéns nos cortiços de Luthadel, construindo a rebelião skaa através de sua lenda como o Sobrevivente de Hathsin.',
				season: 'Verão',
				year: '1021 IF',
			},
			'tfe-11': {
				title: 'O Massacre no Covil de Camon',
				description:
					'Kelsier e a equipe descobrem que o Ministério massacrou todos no antigo covil de Camon como retaliação pelo golpe no Cantão de Finanças, endurecendo sua determinação contra o Senhor Soberano.',
				season: 'Verão',
				year: '1021 IF',
			},
			'tfe-14': {
				title: 'Reconhecimento do Palácio',
				description:
					'Kelsier e Vin exploram Kredik Shaw à noite, mapeando as defesas do palácio e testando a capacidade de resposta dos Inquisidores.',
				season: 'Verão',
				year: '1021 IF',
			},
			'tfe-18': {
				title: 'Operações da Guerra entre Casas',
				description:
					'Kelsier orquestra ataques entre as casas nobres, assassinando alvos e plantando evidências para alimentar a Guerra entre Casas que enfraquece a nobreza.',
				season: 'Final do verão',
				year: '1021 IF',
			},
			'tfe-21': {
				title: 'O Exército Rebelde',
				description:
					'Kelsier viaja às Cavernas de Arguois para inspecionar o crescente exército rebelde escondido nas montanhas, treinando soldados que nunca seguraram armas.',
				season: 'Outono',
				year: '1021 IF',
			},
			'tfe-25': {
				title: 'Desastre em Holstep',
				description:
					'Kelsier faz uma corrida de peltre até Holstep quando a guarnição descobre e massacra o exército rebelde. Ele chega para encontrar devastação e precisa fugir para o sul.',
				season: 'Final do outono',
				year: '1021 IF',
			},
			'tfe-26': {
				title: 'Recolhendo os Pedaços',
				description:
					'De volta à carpintaria de Clubs, Kelsier se reagrupa após o desastre de Holstep, recusando-se a abandonar a revolução mesmo quando a esperança parece perdida.',
				season: 'Inverno',
				year: '1021 IF',
			},
			'tfe-32': {
				title: 'Destruindo os Poços',
				description:
					'Kelsier retorna aos Poços de Hathsin — o local de seu maior sofrimento — e destrói os cristais de atium, cortando o recurso mais valioso do Lorde Soberano.',
				season: 'Inverno',
				year: '1022 IF',
			},
			'tfe-34': {
				title: 'A Última Resistência do Sobrevivente',
				description:
					'Kelsier enfrenta o Lorde Soberano na Praça da Fonte, lutando uma batalha impossível. Ele morre com um sorriso, tornando-se um mártir cuja morte incendeia a revolução.',
				season: 'Início da primavera',
				year: '1022 IF',
			},
			'tfe-35': {
				title: 'Além da Morte',
				description:
					'Através de OreSeur, o kandra usando seus ossos, o plano final de Kelsier se desenrola — sua morte foi a faísca que incendiou a revolução por toda Luthadel.',
				season: 'Início da primavera',
				year: '1022 IF',
			},
			'woa-1': {
				title: 'Além do Véu',
				description:
					'Preso no Reino Cognitivo após sua morte, Kelsier existe como uma sombra cognitiva perto do Poço da Ascensão, observando Luthadel se transformar sob o governo de Elend.',
				season: 'Outono',
				year: '1023 IF',
			},
			'woa-59': {
				title: 'Testemunhando a Liberação',
				description:
					'Kelsier observa impotente do Reino Cognitivo enquanto Vin absorve o poder no Poço da Ascensão e o libera, libertando Ruína de sua prisão.',
				season: 'Inverno',
				year: '1024 IF',
			},
			'sh-4.1': {
				title: 'Jornada Cognitiva para o Oeste',
				description:
					'Existindo como uma Sombra Cognitiva, Kelsier viaja através do oceano de névoa em direção às Terras Queimadas ocidentais para buscar ajuda da fortaleza dos Ire.',
				season: 'Primavera',
				year: '1025 IF',
			},
			'sh-6.1': {
				title: 'O Aviso em Fadrex',
				description:
					'Kelsier chega ao reflexo cognitivo de Cidade Fadrex, encontrando Hoid e tentando avisar Vin sobre seu espinho hemalúrgico.',
				season: 'Outono',
				year: '1026 IF',
			},
			'hoa-1': {
				title: 'O Sobrevivente Persiste',
				description:
					'No Reino Cognitivo, Kelsier trabalha ao lado do poder enfraquecido de Preservação, buscando qualquer maneira de ajudar o Reino Físico a resistir à crescente influência de Ruína.',
				season: 'Primavera',
				year: '1026 IF',
			},
			'hoa-50': {
				title: 'Segurando Preservação',
				description:
					'Conforme a consciência de Preservação se desvanece, Kelsier assume o poder do Estilhaço — segurando-o imperfeitamente do Reino Cognitivo, ganhando tempo para o ato final.',
				season: 'Primavera',
				year: '1027 IF',
			},
			'hoa-81': {
				title: 'Passando o Bastão',
				description:
					'Vin toma o poder de Preservação de Kelsier para destruir Ruína. O Sobrevivente libera o Estilhaço, seu papel cumprido — mas ele se recusa a passar para o Além.',
				season: 'Outono',
				year: '1027 IF',
			},
			'hoa-83': {
				title: 'O Sobrevivente Vive',
				description:
					'Mesmo enquanto Harmonia recria o mundo, Kelsier persiste no Reino Cognitivo — o Sobrevivente que se recusou a deixar até a morte detê-lo.',
				season: 'Outono',
				year: '1027 IF',
			},
		},
		sazed: {
			'tfe-9': {
				title: 'O Mordomo Terris',
				description:
					'Sazed chega à propriedade de Lorde Renoux em Fellise para servir como tutor de Vin, ensinando-lhe os costumes da nobreza enquanto secretamente preserva antigas religiões.',
				season: 'Verão',
				year: '1021 IF',
			},
			'tfe-10.2': {
				title: 'O Comício no Armazém',
				description:
					'Sazed participa do comício secreto no armazém ao lado de Kelsier e Vin, observando enquanto o Sobrevivente prega a revolução aos trabalhadores skaa reunidos.',
				season: 'Verão',
				year: '1021 IF',
			},
			'tfe-13': {
				title: 'Guardião no Baile',
				description:
					'Sazed acompanha Vin ao seu primeiro baile como seu mordomo, vigiando-a dos aposentos dos criados enquanto ela se infiltra na sociedade nobre.',
				season: 'Verão',
				year: '1021 IF',
			},
			'tfe-22': {
				title: 'O Trabalho do Estudioso',
				description:
					'Sazed ensina Vin entre os bailes na propriedade Renoux, compartilhando seu vasto conhecimento sobre religiões enquanto estuda os padrões do Império Final.',
				season: 'Outono',
				year: '1021 IF',
			},
			'tfe-34': {
				title: 'Testemunha da Revolução',
				description:
					'Sazed está em Luthadel durante a revolução, assistindo enquanto os skaa se levantam e Kelsier cai na Praça da Fonte.',
				season: 'Início da primavera',
				year: '1022 IF',
			},
			'tfe-38': {
				title: 'A Queda do Império',
				description:
					'Sazed ajuda o bando no assalto a Kredik Shaw, usando sua Feruquimia para lutar contra os guardas do Lorde Soberano.',
				season: 'Início da primavera',
				year: '1022 IF',
			},
			'tfe-39': {
				title: 'Um Novo Começo',
				description:
					'Após os eventos, Sazed começa a estudar os registros de Kredik Shaw, buscando respostas sobre a Profundeza e a profecia do Herói das Eras.',
				season: 'Primavera',
				year: '1022 IF',
			},
			'woa-4': {
				title: 'O Professor Viajante',
				description:
					'Sazed viaja pelo Domínio Oriental, visitando aldeias rurais para compartilhar religiões e conhecimentos suprimidos com os skaa recém-libertados.',
				season: 'Outono',
				year: '1023 IF',
			},
			'woa-7': {
				title: 'O Conventículo de Seran',
				description:
					'Guiado por Marsh, Sazed descobre o Conventículo de Seran — uma aterrorizante fortaleza de Inquisidores onde encontra a placa de aço com a inscrição de Kwaan.',
				season: 'Final do outono',
				year: '1023 IF',
			},
			'woa-12': {
				title: 'Decifrando a Placa',
				description:
					'Sazed estuda a inscrição de Kwaan no Conventículo, descobrindo o aviso desesperado do Guardião Terris de que a profecia do Herói das Eras foi alterada.',
				season: 'Final do outono',
				year: '1023 IF',
			},
			'woa-15': {
				title: 'As Mortes pela Bruma',
				description:
					'Retornando para o oeste passando por Urbene, Sazed encontra aldeias onde pessoas morreram misteriosamente nas brumas — os primeiros sinais da doença da bruma.',
				season: 'Inverno',
				year: '1023 IF',
			},
			'woa-22': {
				title: 'Retorno a Luthadel',
				description:
					'Sazed chega a Luthadel trazendo graves notícias sobre a profecia alterada, as mortes pela bruma e o verdadeiro significado da inscrição de aço.',
				season: 'Inverno',
				year: '1023 IF',
			},
			'woa-40': {
				title: 'Debatendo a Profecia',
				description:
					'Sazed trabalha com Tindwyl na Fortaleza Venture, comparando as versões original e alterada da profecia do Herói das Eras, aproximando-se dela.',
				season: 'Final do inverno',
				year: '1024 IF',
			},
			'woa-52': {
				title: 'Defendendo o Portão',
				description:
					'Quando os koloss rompem as muralhas de Luthadel, Sazed usa sua Feruquimia para segurar o Portão de Estanho sozinho, consumindo seus atributos armazenados em uma desesperada última resistência.',
				season: 'Final do inverno',
				year: '1024 IF',
			},
			'woa-57': {
				title: 'Lutando contra Marsh',
				description:
					'Sazed enfrenta um Marsh controlado por Ruína nos corredores de Kredik Shaw, mal sobrevivendo ao ataque do Inquisidor enquanto Vin desce ao Poço.',
				season: 'Inverno',
				year: '1024 IF',
			},
			'woa-59': {
				title: 'A Morte de Tindwyl',
				description:
					'Sazed descobre que Tindwyl foi morta durante o ataque dos koloss. Devastado, ele inicia sua crise de fé, questionando cada religião que carrega.',
				season: 'Inverno',
				year: '1024 IF',
			},
			'hoa-4': {
				title: 'Diplomacia ao Sul',
				description:
					'Sazed visita a Cidade Lekal com Breeze para negociar um tratado, usando diplomacia para trazer o rei do sul à crescente coalizão de Elend.',
				season: 'Verão',
				year: '1026 IF',
			},
			'hoa-8': {
				title: 'Rumo ao Norte',
				description:
					'Sazed recebe sua missão de garantir Urteau pela diplomacia enquanto Elend leva o exército para o oeste. Ele parte pelo portão norte.',
				season: 'Verão',
				year: '1026 IF',
			},
			'hoa-14': {
				title: 'Chegada a Urteau',
				description:
					'Sazed chega a Urteau para encontrá-la sob o governo opressivo do Cidadão Quellion, estabelecendo um enclave diplomático na propriedade abandonada dos Venture.',
				season: 'Outono',
				year: '1026 IF',
			},
			'hoa-25': {
				title: 'Construindo Confiança',
				description:
					'Sazed trabalha para construir confiança com a população de Urteau enquanto estuda a história da cidade e procura a caverna de suprimentos sob o prédio do ministério.',
				season: 'Início do inverno',
				year: '1026 IF',
			},
			'hoa-40': {
				title: 'A Investigação do Ministério',
				description:
					'Sazed investiga o Cantão do Ministério, trabalhando para acessar a caverna de suprimentos abaixo dela enquanto navega o governo paranoico de Quellion.',
				season: 'Inverno',
				year: '1026 IF',
			},
			'hoa-50': {
				title: 'A Descoberta da Caverna',
				description:
					'Sazed descobre o mecanismo para inundar o sistema de canais secos — o Lorde Soberano havia drenado os canais para esconder a água na caverna de suprimentos abaixo.',
				season: 'Início da primavera',
				year: '1027 IF',
			},
			'hoa-58': {
				title: 'Salvando Urteau',
				description:
					'Enquanto incêndios tomam a cidade durante a revolução contra Quellion, Sazed libera a água armazenada para inundar os canais, salvando Urteau da destruição.',
				season: 'Primavera',
				year: '1027 IF',
			},
			'hoa-64': {
				title: 'Reconstrução',
				description:
					'Com Quellion deposto e os incêndios extintos, Sazed ajuda a reconstruir Urteau, distribuindo suprimentos do depósito enquanto estuda a mensagem do Lorde Soberano.',
				season: 'Verão',
				year: '1027 IF',
			},
			'hoa-69': {
				title: 'Jornada a Hathsin',
				description:
					'Sazed viaja aos Poços de Hathsin, atraído pela convergência dos eventos. Seu estudo de religiões e da inscrição de Kwaan o levou a uma terrível revelação.',
				season: 'Outono',
				year: '1027 IF',
			},
			'hoa-71': {
				title: 'A Reunião Final',
				description:
					'Sazed retorna a Luthadel enquanto o mundo morre ao seu redor, a cinza caindo em cortinas negras. Ele carrega o conhecimento de cada religião e cada profecia.',
				season: 'Outono',
				year: '1027 IF',
			},
			'hoa-82': {
				title: 'O Herói das Eras',
				description:
					'Com Vin e Ruína ambos destruídos, Sazed percebe que ele é o Herói das Eras. Ele assume o poder de Preservação e de Ruína no Poço da Ascensão.',
				season: 'Outono',
				year: '1027 IF',
			},
			'hoa-83': {
				title: 'Harmonia',
				description:
					'Sazed ascende como Harmonia, combinando Ruína e Preservação. Ele recria o mundo — movendo o planeta, restaurando o verde e curando mil anos de danos.',
				season: 'Outono',
				year: '1027 IF',
			},
		},
		elend: {
			'tfe-12': {
				title: 'O Nobre Leitor',
				description:
					'Elend Venture é apresentado em um baile em sua própria fortaleza, lendo sozinho enquanto o restante da nobreza dança e conspira ao seu redor.',
				season: 'Verão',
				year: '1021 IF',
			},
			'tfe-13': {
				title: 'Conhecendo Lady Valette',
				description:
					'Elend conhece a misteriosa Lady Valette Renoux em um baile, atraído por seu comportamento incomum e perspicácia afiada.',
				season: 'Verão',
				year: '1021 IF',
			},
			'tfe-19': {
				title: 'O Cortejo',
				description:
					'A atração de Elend por Lady Valette cresce enquanto compartilham conversas nos bailes, discutindo filosofia e as falhas da nobreza.',
				season: 'Final do verão',
				year: '1021 IF',
			},
			'tfe-24': {
				title: 'Conspirador Nobre',
				description:
					'Elend secretamente organiza nobres moderados que se opõem à tirania do Lorde Soberano, reunindo-se na biblioteca particular da Fortaleza Venture.',
				season: 'Outono',
				year: '1021 IF',
			},
			'tfe-34': {
				title: 'A Revolução',
				description:
					'Elend testemunha o caos da revolta skaa na Praça da Fonte e se posiciona para proteger tanto nobres quanto plebeus da violência.',
				season: 'Início da primavera',
				year: '1022 IF',
			},
			'tfe-38': {
				title: 'Líder Inesperado',
				description:
					'Após a morte do Lorde Soberano, Elend emerge como uma voz unificadora, pedindo ordem enquanto o império desmorona ao seu redor.',
				season: 'Início da primavera',
				year: '1022 IF',
			},
			'tfe-39': {
				title: 'O Novo Rei',
				description:
					'Elend Venture é declarado Rei do Domínio Central, iniciando a difícil tarefa de construir um governo democrático a partir das ruínas da tirania.',
				season: 'Primavera',
				year: '1022 IF',
			},
			'woa-1': {
				title: 'Rei de Luthadel',
				description:
					'Elend trabalha incansavelmente na Fortaleza Venture para estabelecer um governo constitucional, redigindo leis e construindo uma Assembleia enquanto exércitos se reúnem lá fora.',
				season: 'Outono',
				year: '1023 IF',
			},
			'woa-5': {
				title: 'A Assembleia',
				description:
					'Elend discursa na Assembleia que ele criou, defendendo princípios democráticos mesmo enquanto seus conselheiros alertam que a democracia pode não sobreviver ao cerco.',
				season: 'Outono',
				year: '1023 IF',
			},
			'woa-12': {
				title: 'Observando o Cerco',
				description:
					'Elend observa as linhas de cerco das muralhas da cidade, vigiando o exército de seu pai Straff ao norte e as forças de Cett se aproximando pelo oeste.',
				season: 'Início do inverno',
				year: '1023 IF',
			},
			'woa-22': {
				title: 'Lutando pela Democracia',
				description:
					'Elend enfrenta crescente oposição na Assembleia enquanto o medo do cerco leva muitos a buscar um líder mais forte do que um rei-filósofo.',
				season: 'Inverno',
				year: '1023 IF',
			},
			'woa-26': {
				title: 'Negociação com o Pai',
				description:
					'Elend cavalga até o acampamento de Straff Venture para negociar, trazendo Vin como sua protetora. O encontro revela o desprezo de Straff por seu filho idealista.',
				season: 'Inverno',
				year: '1023 IF',
			},
			'woa-28': {
				title: 'Planejando a Diplomacia',
				description:
					'De volta à Fortaleza Venture, Elend tenta jogar os três exércitos uns contra os outros — Straff, Cett e a horda de koloss se aproximando.',
				season: 'Inverno',
				year: '1024 IF',
			},
			'woa-35': {
				title: 'Deposto',
				description:
					'A Assembleia vota para substituir Elend por Lorde Penrod, explorando uma cláusula na própria constituição democrática de Elend. Seu idealismo prova ser sua ruína.',
				season: 'Inverno',
				year: '1024 IF',
			},
			'woa-42': {
				title: 'Missão aos Koloss',
				description:
					'Elend deixa Luthadel pelos túneis para negociar com Jastes Lekal e seu exército de koloss, uma aposta desesperada para garantir um aliado.',
				season: 'Final do inverno',
				year: '1024 IF',
			},
			'woa-46': {
				title: 'Retorno dos Koloss',
				description:
					'Elend retorna do acampamento dos koloss tendo fracassado na negociação — Jastes perdeu o controle de suas bestas. Os koloss atacarão independentemente.',
				season: 'Final do inverno',
				year: '1024 IF',
			},
			'woa-49': {
				title: 'Exílio de Luthadel',
				description:
					'Elend parte de Luthadel com Vin pelo Portão de Estanho, exilado pelo governo de Penrod, seguindo para o norte em direção a Terris para buscar a ajuda do sínodo dos Guardiões.',
				season: 'Final do inverno',
				year: '1024 IF',
			},
			'woa-50': {
				title: 'A Jornada para o Norte',
				description:
					'O grupo de Elend viaja em direção a Terris, mas uma crescente inquietação os faz reconsiderar. O Poço da Ascensão pode não estar onde eles pensavam.',
				season: 'Final do inverno',
				year: '1024 IF',
			},
			'woa-52': {
				title: 'A Batalha',
				description:
					'Elend retorna para encontrar Luthadel sob ataque dos koloss, lutando através do caos enquanto as muralhas são rompidas e a cidade ameaça cair.',
				season: 'Final do inverno',
				year: '1024 IF',
			},
			'woa-58': {
				title: 'Ao Poço',
				description:
					'Elend desce sob Kredik Shaw com Vin, buscando o Poço da Ascensão enquanto Marsh luta contra Sazed acima deles.',
				season: 'Inverno',
				year: '1024 IF',
			},
			'woa-59': {
				title: 'O Imperador Nascido das Brumas',
				description:
					'Esfaqueado e morrendo no Poço, Elend é salvo quando Vin força uma esfera de lerasium em sua boca, transformando-o em um Nascido das Brumas.',
				season: 'Inverno',
				year: '1024 IF',
			},
			'hoa-1': {
				title: 'Imperador em Guerra',
				description:
					'Elend lidera seus exércitos até Vetitan, agora um imperador Nascido das Brumas dirigindo campanhas militares para garantir os depósitos secretos do Lorde Soberano.',
				season: 'Primavera',
				year: '1026 IF',
			},
			'hoa-3': {
				title: 'Garantindo o Depósito',
				description:
					'Elend garante a caverna de suprimentos de Vetitan, encontrando comida e uma placa de metal com uma mensagem alertando sobre o perigo que Rashek aprisionou.',
				season: 'Primavera',
				year: '1026 IF',
			},
			'hoa-8': {
				title: 'Divisão Estratégica',
				description:
					'Em Luthadel, Elend divide suas forças: enviando Sazed para garantir Urteau diplomaticamente enquanto ele marcha para o oeste para tomar Fadrex pela força se necessário.',
				season: 'Verão',
				year: '1026 IF',
			},
			'hoa-10': {
				title: 'A Marcha para o Oeste',
				description:
					'Elend lidera seu exército para o oeste em direção a Fadrex, a cinza caindo mais pesada a cada dia. Ele treina como Nascido das Brumas durante a marcha.',
				season: 'Verão',
				year: '1026 IF',
			},
			'hoa-21': {
				title: 'O Cerco de Fadrex',
				description:
					'O exército de Elend chega a Fadrex e estabelece linhas de cerco nas planícies cobertas de cinzas. Yomen recusa-se a negociar ou render o depósito.',
				season: 'Outono',
				year: '1026 IF',
			},
			'hoa-28': {
				title: 'O Sitiante Relutante',
				description:
					'Elend luta com seu papel de conquistador, tentando diplomacia mesmo enquanto seus generais pressionam por um assalto. A queda de cinzas piora diariamente.',
				season: 'Outono',
				year: '1026 IF',
			},
			'hoa-47': {
				title: 'Perdendo Vin',
				description:
					'Quando Vin é capturada dentro de Fadrex, Elend enfrenta uma escolha impossível entre resgatar sua esposa e proteger dezenas de milhares de soldados.',
				season: 'Inverno',
				year: '1026 IF',
			},
			'hoa-54': {
				title: 'Entrando em Fadrex',
				description:
					'O ataque dos koloss força uma aliança temporária com Yomen. Elend entra na cidade e acessa o depósito de suprimentos, encontrando a mensagem final do Lorde Soberano.',
				season: 'Final do inverno',
				year: '1026 IF',
			},
			'hoa-58': {
				title: 'Partida para Hathsin',
				description:
					'Com o depósito garantido e Vin tendo ido para o leste, Elend descobre a verdade final: o atium deve estar nos Poços de Hathsin. Ele marcha seu exército para o sul.',
				season: 'Início da primavera',
				year: '1027 IF',
			},
			'hoa-61': {
				title: 'Marcha aos Poços',
				description:
					'Elend lidera seu exausto exército aos Poços de Hathsin, onde a Pátria dos Kandra jaz abaixo. O exército de Inquisidores de Marsh os segue de perto.',
				season: 'Primavera',
				year: '1027 IF',
			},
			'hoa-69': {
				title: 'A Batalha de Hathsin',
				description:
					'Elend queima o último atium em uma batalha desesperada contra os Inquisidores e koloss nos Poços, sabendo que isso significa sua morte quando o metal acabar.',
				season: 'Verão',
				year: '1027 IF',
			},
			'hoa-79': {
				title: 'A Morte do Imperador',
				description:
					'Elend é morto por Marsh nos momentos finais da Batalha de Hathsin, seu atium esgotado. Ele morre tendo queimado todo o metal que Ruína buscava.',
				season: 'Outono',
				year: '1027 IF',
			},
			'hoa-83': {
				title: 'Reunidos na Morte',
				description:
					'O corpo de Elend é encontrado ao lado do de Vin no campo de flores — o primeiro presente de Sazed ao mundo recriado — em paz após todas as suas lutas.',
				season: 'Outono',
				year: '1027 IF',
			},
		},
		marsh: {
			'tfe-7': {
				title: 'O Irmão Relutante',
				description:
					'Marsh chega à carpintaria de Clubs, irmão mais velho de Kelsier e líder rebelde por direito próprio. Ele relutantemente se junta ao plano do bando.',
				season: 'Final da primavera',
				year: '1021 IF',
			},
			'tfe-10.2': {
				title: 'O Comício no Armazém',
				description:
					'Marsh participa do comício secreto no distrito dos armazéns com a equipe, observando seu irmão Kelsier pregar a revolução aos trabalhadores skaa reunidos.',
				season: 'Verão',
				year: '1021 IF',
			},
			'tfe-13': {
				title: 'Encontro no Monte Tyrian',
				description:
					'Marsh encontra Kelsier no Monte Tyrian, a vários quilômetros de Luthadel, para discutir o plano de rebelião longe dos ouvidos do Ministério antes de começar sua perigosa infiltração.',
				season: 'Verão',
				year: '1021 IF',
			},
			'tfe-20': {
				title: 'Mais Fundo na Cobertura',
				description:
					'Marsh mergulha mais fundo na hierarquia do Ministério em Kredik Shaw, aprendendo os sombrios segredos da Hemalurgia enquanto arrisca ser descoberto pelos Inquisidores.',
				season: 'Final do verão',
				year: '1021 IF',
			},
			'tfe-30': {
				title: 'Desaparecimento',
				description:
					'Marsh fica em silêncio, suas comunicações cessam enquanto ele desaparece nos níveis mais profundos do Cantão da Inquisição. O bando teme o pior.',
				season: 'Inverno',
				year: '1021 IF',
			},
			'tfe-38': {
				title: 'O Inquisidor',
				description:
					'Marsh aparece durante o assalto final a Kredik Shaw, ainda vivo mas transformado — espigões de ferro cravados em seus olhos. Ele luta pelo bando apesar de sua transformação.',
				season: 'Início da primavera',
				year: '1022 IF',
			},
			'woa-4': {
				title: 'Andarilho do Leste',
				description:
					'Marsh vaga pelo Domínio Oriental como um Inquisidor solitário, buscando compreender sua transformação enquanto ajuda Sazed a investigar aldeias distantes.',
				season: 'Outono',
				year: '1023 IF',
			},
			'woa-7': {
				title: 'O Guia do Conventículo',
				description:
					'Marsh guia Sazed até o Conventículo de Seran, uma fortaleza de Inquisidores no remoto norte, para encontrar os registros que Sazed procura.',
				season: 'Final do outono',
				year: '1023 IF',
			},
			'woa-12': {
				title: 'Abandono',
				description:
					'Marsh abandona Sazed abruptamente no Conventículo e desaparece na selva, impulsionado por forças que ele cada vez menos consegue resistir. A influência de Ruína cresce.',
				season: 'Final do outono',
				year: '1023 IF',
			},
			'woa-57': {
				title: 'Marionete de Ruína',
				description:
					'Marsh aparece em Kredik Shaw sob total controle de Ruína, lutando contra Sazed nos corredores enquanto Vin desce ao Poço da Ascensão abaixo.',
				season: 'Inverno',
				year: '1024 IF',
			},
			'woa-59': {
				title: 'Guardando o Poço',
				description:
					'Marsh guarda a entrada do Poço, uma marionete de Ruína, lutando para impedir que alguém alcance Vin — ou a ajude a fazer a escolha certa.',
				season: 'Inverno',
				year: '1024 IF',
			},
			'hoa-0': {
				title: 'Criando Inquisidores',
				description:
					'Sob o controle de Ruína, Marsh realiza sombrios rituais hemalúrgicos em Tathingdwen, criando novos Inquisidores a partir de feruquimistas e alomantes capturados.',
				season: 'Primavera',
				year: '1026 IF',
			},
			'hoa-6': {
				title: 'Liderando Koloss',
				description:
					'Marsh comanda um crescente exército de koloss em nome de Ruína, movendo-se pelo Domínio Oriental e reunindo forças para a batalha final.',
				season: 'Verão',
				year: '1026 IF',
			},
			'hoa-22': {
				title: 'Perto de Tyrian',
				description:
					'Marsh opera perto do Monte Tyrian, criando espiães hemalúrgicos a partir de prisioneiros capturados e construindo o exército de Inquisidores de Ruína à sombra do monte de cinzas.',
				season: 'Inverno',
				year: '1026 IF',
			},
			'hoa-38': {
				title: 'A Espigagem de Penrod',
				description:
					'Marsh se infiltra em Luthadel para espigar o Rei Penrod, concedendo a Ruína um canal direto para a governança da capital.',
				season: 'Inverno',
				year: '1026 IF',
			},
			'hoa-45': {
				title: 'Convergindo sobre Fadrex',
				description:
					'Marsh lidera seus Inquisidores em direção a Fadrex, convergindo sobre o cerco enquanto Ruína busca recuperar o depósito de atium escondido dentro.',
				season: 'Inverno',
				year: '1026 IF',
			},
			'hoa-59': {
				title: 'Perseguindo Vin',
				description:
					'Marsh lidera o bando de Inquisidores perseguindo Vin para leste enquanto ela foge de Fadrex em direção a Luthadel, atraindo os servos de Ruína para longe do depósito.',
				season: 'Primavera',
				year: '1027 IF',
			},
			'hoa-69': {
				title: 'A Batalha de Hathsin',
				description:
					'Marsh chega aos Poços liderando as forças de Ruína. Em um momento de vontade recuperada, ele arranca o brinco de Vin — um ato de desafio que muda tudo.',
				season: 'Outono',
				year: '1027 IF',
			},
			'hoa-79': {
				title: 'Matando Elend',
				description:
					'Marsh, controlado por Ruína, mata o Imperador Elend durante a Batalha de Hathsin. O ato cumpre o plano de Ruína, mas custa a Marsh mais um pedaço de sua alma.',
				season: 'Outono',
				year: '1027 IF',
			},
			'hoa-83': {
				title: 'Liberdade Finalmente',
				description:
					'Com Ruína destruída, Marsh é finalmente libertado do controle do deus. Ele permanece sozinho no mundo recriado, um Inquisidor que sobreviveu ao fim de tudo.',
				season: 'Outono',
				year: '1027 IF',
			},
		},
		spook: {
			'tfe-7': {
				title: 'O Jovem Olho-de-Estanho',
				description:
					'Fantasma, o jovem sobrinho de Clubs, trabalha como vigia e mensageiro para o bando na carpintaria, falando em gíria pesada das ruas do leste.',
				season: 'Final da primavera',
				year: '1021 IF',
			},
			'tfe-9': {
				title: 'Corridas de Mensageiro',
				description:
					'Fantasma corre com mensagens entre a carpintaria de Clubs em Luthadel e a propriedade Renoux em Fellise, seus sentidos aprimorados por estanho fazendo dele um batedor excepcional.',
				season: 'Verão',
				year: '1021 IF',
			},
			'tfe-22': {
				title: 'Apoio ao Bando',
				description:
					'Fantasma permanece na carpintaria de Clubs durante a Guerra entre Casas, fornecendo inteligência de suas vigílias nos telhados e corridas de mensagens pelos cortiços.',
				season: 'Outono',
				year: '1021 IF',
			},
			'tfe-34': {
				title: 'Testemunhando o Sacrifício',
				description:
					'Fantasma assiste da multidão enquanto Kelsier morre na Praça da Fonte, um evento que moldará o resto de sua vida.',
				season: 'Início da primavera',
				year: '1022 IF',
			},
			'tfe-38': {
				title: 'A Revolução',
				description:
					'Fantasma luta ao lado do bando durante a revolução final, ajudando a coordenar a revolta skaa pelas ruas de Luthadel.',
				season: 'Início da primavera',
				year: '1022 IF',
			},
			'woa-6': {
				title: 'O Batedor em Crescimento',
				description:
					'Fantasma serve como batedor para o novo governo de Elend, patrulhando a cidade e observando os exércitos que a cercam durante o cerco.',
				season: 'Outono',
				year: '1023 IF',
			},
			'woa-49': {
				title: 'Grupo do Exílio',
				description:
					'Fantasma parte de Luthadel com o grupo de exílio de Vin e Elend pelo Portão de Estanho, seguindo para o norte em direção às montanhas de Terris.',
				season: 'Final do inverno',
				year: '1024 IF',
			},
			'woa-52': {
				title: 'Sobrevivendo à Batalha',
				description:
					'Após retornar a Luthadel durante o ataque dos koloss, Fantasma sobrevive à Batalha de Luthadel e ajuda a garantir a segurança da cidade.',
				season: 'Final do inverno',
				year: '1024 IF',
			},
			'hoa-1': {
				title: 'Soldado de Campanha',
				description:
					'Fantasma serve no exército de Elend em Vetitan, gradualmente ganhando mais responsabilidade enquanto as forças do imperador garantem o depósito de suprimentos.',
				season: 'Primavera',
				year: '1026 IF',
			},
			'hoa-14': {
				title: 'O Infiltrador',
				description:
					'Fantasma chega a Urteau antes da missão diplomática de Sazed, infiltrando-se na cidade pelo emaranhado de canais secos conhecido como os Labirintos.',
				season: 'Outono',
				year: '1026 IF',
			},
			'hoa-17': {
				title: 'A Casa em Chamas',
				description:
					'Fantasma estabelece uma base em um prédio escondido nos Labirintos, observando o regime opressivo do Cidadão e fazendo contato com a resistência local.',
				season: 'Outono',
				year: '1026 IF',
			},
			'hoa-23': {
				title: 'Observação do Mercado',
				description:
					'Fantasma observa o Cidadão Quellion discursando no Mercado Central, estudando seus padrões e os alomantes que ele força a servir através de espigões hemalúrgicos.',
				season: 'Início do inverno',
				year: '1026 IF',
			},
			'hoa-30': {
				title: 'Aproximando-se do Cidadão',
				description:
					'Fantasma se aproxima do círculo íntimo do Cidadão, investigando os espigões que Quellion usa para controlar alomantes e reunindo provas de corrupção.',
				season: 'Inverno',
				year: '1026 IF',
			},
			'hoa-38': {
				title: 'Planejando a Revolução',
				description:
					'Trabalhando de seu esconderijo, Fantasma coordena com Sazed e rebeldes locais para planejar a derrubada do regime de Quellion e garantir o depósito de suprimentos.',
				season: 'Início da primavera',
				year: '1027 IF',
			},
			'hoa-45': {
				title: 'A Voz de Kelsier',
				description:
					'Fantasma começa a ouvir o que acredita ser a voz de Kelsier guiando-o, empurrando-o para ações cada vez mais perigosas contra o Cidadão.',
				season: 'Primavera',
				year: '1027 IF',
			},
			'hoa-50': {
				title: 'O Prédio em Chamas',
				description:
					'Fantasma é espigado durante um incêndio em um prédio, ganhando habilidades alomânticas aprimoradas mas também se tornando vulnerável à influência de Ruína através do espigão.',
				season: 'Primavera',
				year: '1027 IF',
			},
			'hoa-55': {
				title: 'Revelação',
				description:
					'Fantasma percebe que a voz que tem ouvido não é de Kelsier, mas de Ruína, manipulando-o através do espigão hemalúrgico. Ele arranca o espigão em agonia.',
				season: 'Final da primavera',
				year: '1027 IF',
			},
			'hoa-58': {
				title: 'Herói de Urteau',
				description:
					'Fantasma lidera a revolução contra Quellion, expondo sua corrupção. Enquanto incêndios consomem a cidade, Sazed inunda os canais, salvando Urteau da destruição.',
				season: 'Primavera',
				year: '1027 IF',
			},
			'hoa-64': {
				title: 'Recuperação',
				description:
					'Gravemente queimado mas vivo, Fantasma se recupera enquanto Urteau se estabiliza sob nova liderança e os suprimentos do depósito são distribuídos.',
				season: 'Verão',
				year: '1027 IF',
			},
			'hoa-69': {
				title: 'Aos Poços',
				description:
					'Fantasma viaja aos Poços de Hathsin com as forças de Urteau, juntando-se aos exércitos reunidos para o que será a batalha final.',
				season: 'Outono',
				year: '1027 IF',
			},
			'hoa-83': {
				title: 'Um Novo Mundo',
				description:
					'Fantasma emerge no mundo recriado por Sazed — um campo de flores e grama verde sob um céu azul. Ele carrega as últimas palavras de Sazed para os sobreviventes.',
				season: 'Outono',
				year: '1027 IF',
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
};
