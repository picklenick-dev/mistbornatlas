/**
 * Mandarin Chinese (Simplified) data translations.
 * Sources: Official Chongqing Publishing House (重庆出版社) editions,
 * canonical Cosmere glossary (Coppermind/17th Shard).
 */
import type { DataTranslations } from '../types';

export const zhData: DataTranslations = {
	books: {
		tfe: { title: '最后帝国', year: '1021-1022 FE', confidence: 'verified' },
		woa: { title: '升华之井', year: '1022-1024 FE', confidence: 'verified' },
		hoa: { title: '永世英雄', year: '1024-1025 FE', confidence: 'verified' },
	},

	characters: {
		vin: {
			name: '纹',
			title: '迷雾之子',
			description:
				'一位天赋异禀的迷雾之子，从陆沙德的街头崛起，最终成为改变整个司卡德利亚命运的关键人物。',
			confidence: 'verified',
			fieldConfidence: { description: 'verified' },
			titleProgression: {
				'tfe-1': '街头流浪儿',
				'tfe-9': '迷雾之子学徒',
				'tfe-12': '瓦莱特·雷诺小姐',
				'tfe-25': '迷雾之子',
				'tfe-38': '统御主之弑', // Slayer of the Lord Ruler
				'woa-1': '幸存者的继承人',
				'woa-47': '陆沙德的守护者',
				'hoa-1': '皇后',
				'hoa-79': '存留之器', // Vessel of Preservation
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
			name: '凯希尔',
			title: '幸存者',
			description: '陆沙德起义军的领袖，曾从被称为“不可逃脱”的海司辛深坑中生还。',
			confidence: 'verified',
			fieldConfidence: { description: 'verified' },
			titleProgression: {
				'tfe-0': '神秘的斯卡人',
				'tfe-1': '海司辛的幸存者',
				'tfe-11': '团队领袖',
				'tfe-21': '深坑的毁灭者',
				'tfe-34': '起义的殉道者',
			},
			titleProgressionConfidence: {
				'tfe-0': 'verified',
				'tfe-1': 'verified',
				'tfe-11': 'verified',
				'tfe-21': 'verified',
				'tfe-34': 'verified',
			},
			secretHistoryTitles: {
				'woa-1': '认知阴影',
				'hoa-1': '存留的勇士',
			},
		},
		sazed: {
			name: '塞泽德',
			title: '泰芮司守护者', // "Keeper" is officially 守护者
			description: '一名泰芮司守护者，通过藏金术保存着已被遗忘的宗教与文明的知识。',
			confidence: 'verified',
			fieldConfidence: { description: 'verified' },
			titleProgression: {
				'tfe-9': '泰芮司管家',
				'tfe-22': '宗教守护者',
				'woa-1': '学者与守护者',
				'woa-12': '真理寻求者',
				'woa-52': '陆沙德的捍卫者',
				'hoa-1': '新帝国大使',
				'hoa-50': '危机中的学者',
				'hoa-82': '永世英雄',
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
			name: '依蓝德·文彻',
			title: '皇帝',
			description: '文彻家族的理想主义继承人，最终成为了重塑帝国秩序的君主。',
			confidence: 'verified',
			fieldConfidence: { description: 'verified' },
			titleProgression: {
				'tfe-12': '贵族哲学家',
				'tfe-24': '叛逆贵族',
				'tfe-38': '临危受命的领袖',
				'woa-1': '中央统御区之王',
				'woa-35': '被罢黜的国王',
				'woa-58': '迷雾之子皇帝',
				'hoa-1': '新帝国皇帝',
				'hoa-54': '战士皇帝',
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
			name: '马什',
			title: '钢铁审判者',
			description: '凯希尔之兄，为了刺探情报而深入教廷内部，背负了沉重的代价。',
			confidence: 'verified',
			fieldConfidence: { description: 'verified' },
			titleProgression: {
				'tfe-7': '叛军渗透者',
				'tfe-13': '教廷间谍',
				'tfe-38': '钢铁审判者',
				'woa-4': '不情愿的审判者',
				'woa-57': '灭绝的棋子',
				'hoa-0': '灭绝之手',
				'hoa-79': '铁眼', // "Ironeyes" is officially 铁眼
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
			name: '鬼影', // Canonical nickname for Lestibournes
			title: '迷雾人', // Or 锡眼 (Tineye)
			description: '凯希尔团队中最年轻的成员，一名锡能迷雾人，在灰烬之子后期发挥了关键作用。',
			confidence: 'verified',
			fieldConfidence: { description: 'verified' },
			titleProgression: {
				'tfe-7': '年轻的锡眼',
				'woa-1': '侦察兵',
				'hoa-14': '潜伏者',
				'hoa-38': '锡能达人', // Tin Savant
				'hoa-58': '厄提之英雄',
				'hoa-83': '烈焰幸存者',
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
			name: '陆沙德',
			description: '终极帝国的首都，统御主千年统治的权力中心。唯一被允许拥有石制城墙的城市。',
			confidence: 'probable',
		},
		'lake-luthadel': {
			name: '陆沙德湖',
			description: '首都以东的淡水湖，被灰烬污染。',
			confidence: 'probable',
		},
		'pits-hathsin': {
			name: '哈辛深坑',
			description: '天金矿场和坎得拉的故乡。凯西尔是唯一活着逃出的囚犯。',
			confidence: 'probable',
		},
		fellise: {
			name: '菲丽斯',
			description: '陆沙德南部的贵族避暑胜地，蓝诺家族在此拥有庄园。',
			confidence: 'probable',
		},
		holstep: {
			name: '霍斯特普',
			description: '陆沙德以西的驻军城镇，商贸和军事路线的检查站。',
			confidence: 'probable',
		},
		'ashmount-tyrian': {
			name: '提里安',
			description: '距陆沙德最近的灰山，从城墙上即可望见。',
			confidence: 'probable',
		},
		urteau: {
			name: '厄尔多',
			description: '北方统御区首府，泛达家族的祖居之地。以沟渠街道闻名——干涸的运河充当道路。',
			confidence: 'probable',
		},
		'ashmount-kalling': {
			name: '凯灵',
			description: '北方统御区的主火山，灰烬更为暗沉刺鼻。',
			confidence: 'probable',
		},
		'fadrex-city': {
			name: '法德雷克斯城',
			description: '西方统御区的商贸中心，受天然克雷诺尔岩石阵列保护。',
			confidence: 'probable',
		},
		tremredare: {
			name: '特雷姆达尔',
			description: '西方统御区的前首府，崩溃后因缺乏防御而被废弃。',
			confidence: 'probable',
		},
		'ashmount-morag': {
			name: '莫拉格',
			description: '主宰帝国西部地平线的巨型火山。',
			confidence: 'probable',
		},
		chardees: {
			name: '查迪斯',
			description: '哈斯汀家族的祖传领地，在官方地图中被隐藏。',
			confidence: 'probable',
		},
		austrex: {
			name: '奥斯特雷克斯',
			description: '南方统御区首府，帝国粮仓的中心。',
			confidence: 'probable',
		},
		vetitan: {
			name: '维提坦',
			description: '北方统御区的城市，建于统御主储藏洞穴之一上方。被灰烬掩埋。',
			confidence: 'probable',
		},
		'ashmount-zerinah': {
			name: '泽丽娜',
			description: '最南端的灰山，南半球的热量调节器。',
			confidence: 'probable',
		},
		conventical: {
			name: '瑟兰修道院',
			description: '镶嵌在悬崖中的审判者要塞。沙赛德在此发现了宽恩的铭文。',
			confidence: 'probable',
		},
		tathingdwen: {
			name: '塔辛德文',
			description: '泰瑞司统御区的首府，位于北方山脉中。',
			confidence: 'probable',
		},
		'terris-mountains': {
			name: '泰瑞司山脉',
			description: '泰瑞司人被奴役的山脉。升华之井的原始位置。',
			confidence: 'probable',
		},
		'tincut-fastness': {
			name: '廷卡要塞',
			description: '泰瑞司山脉中的隐秘要塞，议会在此避难。',
			confidence: 'probable',
		},
		'high-villages': {
			name: '高地村落',
			description: '隐藏在山中的泰瑞司村落网络，通过地下隧道相连。',
			confidence: 'probable',
		},
		'imperial-canal': {
			name: '帝国运河',
			description: '连接塔辛德文与陆沙德的人工水道，用于资源运输。',
			confidence: 'probable',
		},
		'kandra-homeland': {
			name: '坎得拉家园',
			description: '哈辛深坑下方的深层洞穴，坎得拉在此守护统御主的秘密。',
			confidence: 'probable',
		},
		'ashmount-torinost': {
			name: '托里诺斯特',
			description: '西方统御区以北的巨型山峰。',
			confidence: 'probable',
		},
		'ashmount-faleast': {
			name: '法利斯特',
			description: '东方统御区的主要地标，因含硅量高而灰烬更具腐蚀性。',
			confidence: 'probable',
		},
		'ashmount-doriel': {
			name: '多里尔',
			description: '陆沙德以南的灰山，靠近南海海岸。',
			confidence: 'probable',
		},
		'statlin-city': {
			name: '斯塔特林',
			description: '统御主储藏洞穴网络的南方锚点。',
			confidence: 'probable',
		},
		'tresting-plantation': {
			name: '特雷斯汀庄园',
			description: '特雷斯汀领主的司卡庄园，拥有数百名工人和一支驻军。',
			confidence: 'probable',
		},
		'lekal-city': {
			name: '勒卡尔城',
			description: '勒卡尔家族的要塞城市，整座城市是贵族庄园的延伸。',
			confidence: 'probable',
		},
		mantiz: {
			name: '曼提兹',
			description: '西方统御区北部的城市，有四座大型庄园，灰烬堆积严重。',
			confidence: 'probable',
		},
		'channerel-river': {
			name: '钱内雷尔河',
			description: '帝国的主要河流动脉，对贸易和运输至关重要。',
			confidence: 'probable',
		},
		'burnlands-west': {
			name: '焦土地带（西）',
			description: '帝国西部边界不可居住的沙漠，离太阳太近。',
			confidence: 'probable',
		},
		'burnlands-east': {
			name: '焦土地带（东）',
			description: '帝国东部边界不可居住的沙漠。',
			confidence: 'probable',
		},
		'arguois-caverns': {
			name: '阿尔古瓦洞穴',
			description: '陆沙德与深坑之间的洞穴系统，叛军的训练基地。',
			confidence: 'probable',
		},
		garthwood: {
			name: '加斯伍德',
			description: '沙赛德在此向获释的司卡传授宗教的村庄。',
			confidence: 'probable',
		},
		'straffs-camp': {
			name: '斯特拉夫营地',
			description: '围城期间斯特拉夫·泛达在陆沙德南方的军营。',
			confidence: 'probable',
		},
		'koloss-camp': {
			name: '寇斯营地',
			description: '围城期间寇斯军队在陆沙德北方的阵地。',
			confidence: 'probable',
		},
		longsfollow: {
			name: '朗斯福洛',
			description: '西方统御区山口中的小镇。',
			confidence: 'probable',
		},
		chakatah: { name: '查卡塔', description: '西方统御区的小型矿村。', confidence: 'probable' },
		'north-seran': {
			name: '瑟兰北部',
			description: '瑟兰修道院附近的领地。',
			confidence: 'probable',
		},
		'river-seran': {
			name: '瑟兰河',
			description: '教务部用于运输物资的南方水道。',
			confidence: 'probable',
		},
		urbene: { name: '厄本', description: '教务部运送粮食至首都的中转站。', confidence: 'probable' },
		erlac: {
			name: '厄拉克',
			description: '陆沙德西南的驻军，巡逻通往城市的路线。',
			confidence: 'probable',
		},
		'valtroux-city-central': {
			name: '瓦尔特鲁',
			description: '陆沙德西北的驻军城市，拥有常驻军队。',
			confidence: 'probable',
		},
		'haverfrex-cannery-central': {
			name: '哈弗弗雷克斯',
			description: '西方统御区的工业据点，凯特军队的补给节点。',
			confidence: 'probable',
		},
	},

	cities: {
		luthadel: {
			name: '陆沙德',
			description:
				'终极帝国的首都，统御主统治下的文化中心。唯一拥有人工城墙的城市。以克雷迪克·肖为中心呈放射状对称建造，其下方即是升华之井。八座以镕金术金属命名的城门。',
			confidence: 'probable',
		},
		urteau: {
			name: '厄尔多',
			description:
				'北方统御区最大的城市，泛达家族的祖居之地。以沟渠街道为特色——宽阔的干涸运河用作下沉式道路。水被引入隐藏的地下湖。统御主法令规定无城墙。',
			confidence: 'probable',
		},
		fadrex: {
			name: '法德雷克斯城',
			description:
				'西方统御区的商贸中心，以克雷诺尔岩石阵列为天然城墙。藏有统御主的秘密储藏洞穴之一。',
			confidence: 'probable',
		},
	},

	cityLandmarks: {
		luthadel: {
			'kredik-shaw': {
				name: '克雷迪克·肖',
				description: '统御主的宫殿，"千塔之丘"。直接建造在升华之井上方。',
				confidence: 'probable',
			},
			'iron-gate': {
				name: '铁门',
				description: '北门，通往厄尔多和北方统御区。',
				confidence: 'probable',
			},
			'steel-gate': {
				name: '钢门',
				description: '西北门，通往哈辛深坑方向。',
				confidence: 'probable',
			},
			'pewter-gate': { name: '蜡门', description: '陆沙德东北门。', confidence: 'probable' },
			'zinc-gate': { name: '锌门', description: '陆沙德东南门。', confidence: 'probable' },
			'brass-gate': {
				name: '黄铜门',
				description: '南门，通往菲丽斯和南方统御区。',
				confidence: 'probable',
			},
			'copper-gate': { name: '铜门', description: '西南门，靠近工业区。', confidence: 'probable' },
			'bronze-gate': {
				name: '青铜门',
				description: '西门，通往钱内雷尔河方向。',
				confidence: 'probable',
			},
			'keep-venture': {
				name: '泛达府邸',
				description: '泛达家族的堡垒。依蓝德的行动基地和贵族舞会场所。',
				confidence: 'probable',
			},
			'keep-elariel': {
				name: '伊拉瑞尔府邸',
				description: '伊拉瑞尔家族的宅邸，陆沙德的大家族之一。',
				confidence: 'probable',
			},
			'keep-hasting': {
				name: '哈斯汀府邸',
				description: '靠近宫殿；在家族战争中早期陷落。',
				confidence: 'probable',
			},
			'clubs-shop': {
				name: '乐乐的木工坊',
				description: '作为凯西尔团队行动基地的木工作坊。',
				confidence: 'probable',
			},
			'camons-safehouse': {
				name: '卡蒙的安全屋',
				description: '贫民窟中的初始藏身处，凡在此被凯西尔招募。',
				confidence: 'probable',
			},
			'fountain-square': {
				name: '喷泉广场',
				description: '公开处刑地和凯西尔的牺牲之地。后更名为存留者广场。',
				confidence: 'probable',
			},
			'lake-luthadel': {
				name: '陆沙德湖',
				description: '城墙以东的大型淡水湖。',
				confidence: 'probable',
			},
			'canton-of-finance': {
				name: '财政司',
				description: '钢铁教务部负责帝国财政的总部。',
				confidence: 'probable',
			},
			'skaa-hovels': {
				name: '司卡窝棚',
				description: '司卡的贫民区，帮派在此活动。',
				confidence: 'probable',
			},
			'well-of-ascension': {
				name: '升华之井',
				description: '隐藏在克雷迪克·肖下方的力量之源，每1024年积蓄一次力量。',
				confidence: 'probable',
			},
			'tin-gate-north': { name: '锡门（北）', description: '东北门区域。', confidence: 'probable' },
			'assembly-hall': {
				name: '议事厅',
				description: '围城期间依蓝德民主议会召开会议的建筑。',
				confidence: 'probable',
			},
			'keep-tekiel': {
				name: '特基尔府邸',
				description: '特基尔家族的堡垒，凯西尔暗杀行动的目标。',
				confidence: 'probable',
			},
			'luthadel-garrison': {
				name: '陆沙德卫戍区',
				description: '城市的军事训练场和兵营。',
				confidence: 'probable',
			},
			'warehouse-district': {
				name: '仓库区',
				description: '运河旁的工业区，团队在此储藏武器。',
				confidence: 'probable',
			},
			'canton-inquisition': {
				name: '审判司',
				description: '钢铁审判者的主要基地，人人畏惧之地。',
				confidence: 'probable',
			},
			'canton-resource': {
				name: '资源司',
				description: '帝国经济的行政中心。',
				confidence: 'probable',
			},
			'canton-orthodoxy': {
				name: '正统司',
				description: '负责统御主信仰纯洁性的宗教中心。',
				confidence: 'probable',
			},
			'keep-lekal': {
				name: '勒卡尔府邸',
				description: '勒卡尔家族的大型府邸之一，拥有高塔和彩色玻璃窗。',
				confidence: 'probable',
			},
			'hotel-district': {
				name: '旅馆区',
				description: '供外统御区来访贵族下榻的高档区域。',
				confidence: 'probable',
			},
			'commercial-district': {
				name: '商业区',
				description: '贵族家族洽谈合同的贸易中心。',
				confidence: 'probable',
			},
			'industrial-district': {
				name: '工业区',
				description: '运河旁的锻造、磨坊和作坊区域。',
				confidence: 'probable',
			},
			'ahlstrom-square': {
				name: '阿尔斯特罗姆广场',
				description: '陆沙德的重要公共广场。',
				confidence: 'probable',
			},
			'south-bridge': { name: '南桥', description: '城市水道上的通行点。', confidence: 'probable' },
			'the-twists': {
				name: '弯巷',
				description: '迷宫般的贫民窟，司卡地下世界和凯西尔团队的藏身之所。',
				confidence: 'probable',
			},
			sootwarrens: {
				name: '煤烟窟',
				description: '最贫困的街区之一，覆盖着灰烬。',
				confidence: 'probable',
			},
			'the-cracks': {
				name: '裂缝区',
				description: '破败的高人口密度区域。',
				confidence: 'probable',
			},
			'aspen-row': {
				name: '白杨街',
				description: '技术工人和贵族仆从的住宅街道。',
				confidence: 'probable',
			},
			blockstreet: {
				name: '街区街',
				description: '为司卡设计的方格布局密集住宅区。',
				confidence: 'probable',
			},
		},
		urteau: {
			'ministry-canton': {
				name: '审判司',
				description: '教务部驻地，建于第三储藏洞穴上方，内有地下湖。',
				confidence: 'probable',
			},
			marketpit: {
				name: '市场坑',
				description: '最宽的沟渠街道，主要的大道和中央市场。',
				confidence: 'probable',
			},
			'spooks-hideout': {
				name: '幽灵的藏身处',
				description: '起义期间幽灵团队使用的"燃烧之屋"。',
				confidence: 'probable',
			},
			'citizens-estate': {
				name: '公民庄园',
				description: '被亏林占据作为权力中心的贵族庄园。',
				confidence: 'probable',
			},
			'luthadel-gate': {
				name: '陆沙德门',
				description: '运河网络的南入口，通往陆沙德方向。',
				confidence: 'probable',
			},
			'venture-estate': {
				name: '泛达庄园',
				description: '泛达家族在厄尔多的祖居，在亏林政权下被遗弃。',
				confidence: 'probable',
			},
			'burning-district': {
				name: '焚烧区',
				description: '幽灵叛乱期间约三分之一城市被大火摧毁。',
				confidence: 'probable',
			},
			'skaa-slums': {
				name: '司卡贫民窟',
				description: '革命者聚集在干涸运河中的贫困街区。',
				confidence: 'probable',
			},
			'the-harrows': {
				name: '犁沟',
				description: '南部区域狭窄相连的运河迷宫。',
				confidence: 'probable',
			},
			'west-docks': {
				name: '西码头',
				description: '运河网络的西部终点站，用于货物装卸。',
				confidence: 'probable',
			},
			'fedre-aqueduct': {
				name: '费德雷领主水道桥',
				description: '崩溃前建造的宏伟基础设施。',
				confidence: 'probable',
			},
			'white-streets': {
				name: '白色街道',
				description: '富裕街区，路面被精心清扫干净灰烬。',
				confidence: 'probable',
			},
			'citizens-home': {
				name: '公民之家',
				description: '夺取权力的司卡亏林的总部。',
				confidence: 'probable',
			},
			'interchange-building': {
				name: '转运大楼',
				description: '不同层级之间货物转运的物流中心。',
				confidence: 'probable',
			},
			'old-city-square': {
				name: '旧城广场',
				description: '厄尔多的历史中心，公民统治下政治动荡的舞台。',
				confidence: 'probable',
			},
			'canton-orthodoxy-urteau': {
				name: '正统司',
				description: '管理北方统御区的宗教和法律事务。',
				confidence: 'probable',
			},
		},
		fadrex: {
			'keep-orielle': {
				name: '奥里尔府邸',
				description: '高地上的主要府邸，被义务官阿拉丹·约门用作宫殿。',
				confidence: 'probable',
			},
			'storage-cache': {
				name: '储藏洞穴',
				description: '隐藏在北部岩石中的秘密粮食和电金库藏。',
				confidence: 'probable',
			},
			'cetts-base': {
				name: '凯特基地',
				description: '阿什韦泽·凯特前往陆沙德前的设防驻地。',
				confidence: 'probable',
			},
			'cremnol-wall-north': {
				name: '北克雷诺尔壁',
				description: '保护城市北面的天然红橙色岩石阵列。',
				confidence: 'probable',
			},
			'cremnol-wall-south': {
				name: '南克雷诺尔壁',
				description: '形成南面地质屏障的岩石阵列。',
				confidence: 'probable',
			},
			'yomens-palace': {
				name: '约门宫殿',
				description: '义务官阿拉丹·约门的行政驻地。',
				confidence: 'probable',
			},
			'main-gate': {
				name: '正门',
				description: '穿过地质构造进入城市的主入口。',
				confidence: 'probable',
			},
			'conway-canal': {
				name: '康威运河',
				description: '用于商贸和运输的主要运河之一。',
				confidence: 'probable',
			},
			'city-walls-east': {
				name: '东城壁',
				description: '由天然岩石形成的东部防御圈。',
				confidence: 'probable',
			},
			'ash-mounds': {
				name: '灰烬丘',
				description: '依蓝德围城军队驻扎的灰烬覆盖平原。',
				confidence: 'probable',
			},
			'canton-resource-fadrex': {
				name: '资源司',
				description: '教务部司署，被约门用作囚禁凡的监牢。',
				confidence: 'probable',
			},
			'informants-residence': {
				name: '线人住所',
				description: '一位知悉城市秘密的老线人的居所。',
				confidence: 'probable',
			},
			'deep-wells': {
				name: '深井',
				description: '在没有主要河流的城市中至关重要的水源。',
				confidence: 'probable',
			},
			'noble-quarter': {
				name: '贵族区',
				description: '上流社会的居住区域。',
				confidence: 'probable',
			},
		},
	},

	movements: {
		vin: {
			'tfe-1': {
				title: '街头小流浪儿',
				description:
					'纹在陆沙德贫民窟为凯蒙的盗贼团伙充当望风，无意识地运用她未知的镕金术能力微妙地影响周围的人。',
				season: '春季',
				year: '1021 终帝',
			},
			'tfe-2': {
				title: '教会骗局',
				description:
					'纹随凯蒙的团伙前往财政教区执行一场高风险的骗局，而她的镕金术脉冲引起了凯希尔的注意。',
				season: '春季',
				year: '1021 终帝',
			},
			'tfe-4': {
				title: '被招募',
				description:
					'凯希尔将纹从凯蒙的毒打中解救后，带她来到克拉伯的木工铺——团伙的总部——向她介绍了推翻统御主的计划。',
				season: '春季',
				year: '1021 终帝',
			},
			'tfe-7': {
				title: '迷雾之子训练',
				description:
					'凯希尔带纹来到钢铁之门附近的城墙进行她的第一次真正的镕金术训练，教她在黑暗的屋顶间燃烧钢和铁。',
				season: '晚春',
				year: '1021 终帝',
			},
			'tfe-8': {
				title: '雷诺庄园',
				description:
					'纹西行前往费利斯，以瓦莱特·雷诺小姐的身份开始她的伪装身份，准备渗透贵族社会。',
				season: '夏季',
				year: '1021 终帝',
			},
			'tfe-9': {
				title: '随沙赛德学习',
				description:
					'在雷诺庄园，纹在沙赛德的指导下学习礼仪、舞蹈和举止，以便在贵族舞会上扮演贵族小姐。',
				season: '夏季',
				year: '1021 终帝',
			},
			'tfe-10': {
				title: '回归团队',
				description:
					'纹从费利斯返回陆沙德，在克拉布的店铺与团队会合。凯希尔带她进行一次夜间合金术奔跑穿越城市，进一步推进她的训练。',
				season: '夏季',
				year: '1021 终帝',
			},
			'tfe-10.2': {
				title: '仓库集会',
				description: '纹参加一场秘密集会，凯希尔在一座隐蔽仓库中向聚集的司卡工人宣讲革命。',
				season: '夏季',
				year: '1021 终帝',
			},
			'tfe-11': {
				title: '卡蒙巢穴屠杀',
				description:
					'纹和团队发现卡蒙旧巢穴遭到残暴袭击的后果——教务部为报复财务局诈骗而杀害了里面所有人。',
				season: '夏季',
				year: '1021 终帝',
			},
			'tfe-13': {
				title: '泛铸府邸的第一场舞会',
				description:
					'纹以瓦莱特·雷诺小姐的身份参加她的第一场舞会，踏入贵族的华丽世界。她遇见了独自在角落读书的依蓝德·泛铸。',
				season: '夏季',
				year: '1021 终帝',
			},
			'tfe-14': {
				title: '侦察克瑞迪克·肖',
				description: '纹和凯希尔在夜间大胆侦察统御主的宫殿，在千塔之间飞跃以绘制其防御地图。',
				season: '夏季',
				year: '1021 终帝',
			},
			'tfe-16': {
				title: '艾拉瑞尔府邸的舞会',
				description: '纹参加艾拉瑞尔家族的舞会，收集贵族家族及其结盟的情报，同时强化她的伪装身份。',
				season: '夏季',
				year: '1021 终帝',
			},
			'tfe-19': {
				title: '日渐亲近',
				description:
					'在泛铸府邸的另一场舞会上，纹与依蓝德的关系逐渐加深，尽管她仍身负使命。她之后在屋顶上翩翩起舞。',
				season: '晚夏',
				year: '1021 终帝',
			},
			'tfe-22': {
				title: '日志',
				description:
					'回到克拉伯的店铺，纹研读统御主的古老日志，发现其中关于深渊和永世英雄预言的令人不安的记载。',
				season: '秋季',
				year: '1021 终帝',
			},
			'tfe-25': {
				title: '白镴冲刺',
				description:
					'当霍斯特普的起义军被驻军屠杀时，纹进行了一次绝望的白镴冲刺——连续数小时燃烧白镴——以帮助营救幸存者。',
				season: '晚秋',
				year: '1021 终帝',
			},
			'tfe-26': {
				title: '恢复',
				description:
					'纹因白镴冲刺精疲力竭地返回克拉伯的店铺休养，而团伙在霍斯特普的惨败后重新集结。',
				season: '晚秋',
				year: '1021 终帝',
			},
			'tfe-30': {
				title: '贵族战争升级',
				description:
					'贵族战争随着各家族互相攻伐而加剧。纹意识到团伙的操纵正在奏效，但暴力让她不安。',
				season: '冬季',
				year: '1021 终帝',
			},
			'tfe-34': {
				title: '幸存者之死',
				description:
					'纹在屋顶上无助地看着凯希尔在喷泉广场与统御主战斗并被杀害，他在死后成为海司辛幸存者。',
				season: '早春',
				year: '1022 终帝',
			},
			'tfe-36': {
				title: '攻击宫殿',
				description:
					'纹率领司卡起义军攻入克瑞迪克·肖，一路与审判者和卫兵战斗，直达统御主的王座大厅。',
				season: '早春',
				year: '1022 终帝',
			},
			'tfe-38': {
				title: '统御主的终结者',
				description:
					'纹在王座大厅对峙统御主，扯掉他的金属意识并杀死了这位不朽的暴君。一千年的压迫就此终结。',
				season: '早春',
				year: '1022 终帝',
			},
			'tfe-39': {
				title: '新纪元',
				description: '在革命的余波中，纹与依蓝德一起站在泛铸府邸。迷雾仍在流动，但统御主已不在了。',
				season: '春季',
				year: '1022 终帝',
			},
			'woa-1': {
				title: '城市守护者',
				description:
					'纹每夜巡视陆沙德的城墙，注视着威胁，因为三支军队正缓慢地向这座新获自由的城市合围。',
				season: '秋季',
				year: '1023 终帝',
			},
			'woa-3': {
				title: '迷雾之灵',
				description:
					'在夜间巡逻中，纹遇到了迷雾中的一个神秘身影——一个似乎在注视着她、指向某处的灵体。',
				season: '秋季',
				year: '1023 终帝',
			},
			'woa-8': {
				title: '保护者与伴侣',
				description: '纹在宫殿中同时扮演依蓝德的保护者和伴侣，在对他的爱和保护他的责任之间挣扎。',
				season: '秋季',
				year: '1023 终帝',
			},
			'woa-14': {
				title: '团伙会议',
				description:
					'团伙在克拉伯的店铺开会讨论策略，史特拉夫·泛铸的军队驻扎在北方，赛特的军队从西方逼近。',
				season: '初冬',
				year: '1023 终帝',
			},
			'woa-22': {
				title: '政治紧张',
				description: '随着围城形势紧迫，纹看着依蓝德与议会和执政要求抗争，同时她在迷雾中追猎赞恩。',
				season: '冬季',
				year: '1023 终帝',
			},
			'woa-26': {
				title: '与史特拉夫谈判',
				description:
					'纹陪同依蓝德前往城北史特拉夫·泛铸的军营，她展示了令人畏惧的力量，以震慑这位野心勃勃的征服者。',
				season: '冬季',
				year: '1023 终帝',
			},
			'woa-28': {
				title: '谈判归来',
				description:
					'在史特拉夫军营中紧张的对峙之后，纹返回泛铸府邸，被赞恩的低语和她对自身角色日益增长的疑虑所困扰。',
				season: '冬季',
				year: '1024 终帝',
			},
			'woa-35': {
				title: '议会危机',
				description: '纹在旁听席上看着议会投票罢免依蓝德，邀请彭罗德领主接替领导，粉碎了民主实验。',
				season: '冬季',
				year: '1024 终帝',
			},
			'woa-43': {
				title: '突袭赛特',
				description:
					'纹对驻扎在哈斯廷府邸的赛特军队发动了毁灭性的单人突袭，以迷雾之子的力量展示将其军队逐出城市。',
				season: '晚冬',
				year: '1024 终帝',
			},
			'woa-47': {
				title: '与赞恩决斗',
				description:
					'在哈斯廷府邸附近，纹与赞恩·泛铸展开了一场残酷的迷雾之子决斗，最终杀死他以保护她所爱的人。',
				season: '晚冬',
				year: '1024 终帝',
			},
			'woa-49': {
				title: '流放',
				description:
					'纹和依蓝德在彭罗德新政府的驱逐下，穿过锡门离开陆沙德，带着少量护卫向北前往泰芮司。',
				season: '晚冬',
				year: '1024 终帝',
			},
			'woa-50': {
				title: '北行',
				description: '小队向泰芮司行进，但纹感觉到有什么东西在将她拉回——升华之井并不在山中。',
				season: '晚冬',
				year: '1024 终帝',
			},
			'woa-52': {
				title: '重返战场',
				description:
					'纹在克罗司突破城墙之际拼死以白镴冲刺赶回陆沙德，及时赶到并控制了这些生物，拯救了城市。',
				season: '晚冬',
				year: '1024 终帝',
			},
			'woa-54': {
				title: '寻找井',
				description:
					'陆沙德虽得救但满目疮痍，纹在克瑞迪克·肖的地下搜寻升华之井，循着迷雾之灵的指引向更深处探索。',
				season: '晚冬',
				year: '1024 终帝',
			},
			'woa-58': {
				title: '发现井',
				description: '纹深入克瑞迪克·肖下方的古老洞窟，发现了升华之井，其积蓄的力量正在脉动。',
				season: '冬季',
				year: '1024 终帝',
			},
			'woa-59': {
				title: '释放力量',
				description:
					'在井边，纹获取了巨大的力量——然后，被灭绝对预言的篡改所欺骗，将它释放。某种可怕的东西逃出了它的牢笼。',
				season: '冬季',
				year: '1024 终帝',
			},
			'hoa-1': {
				title: '北方战役',
				description:
					'纹和依蓝德率军前往维提坦，一座正被日益加重的灰烬掩埋的城市，以确保统御主隐藏的储藏窟之一。',
				season: '春季',
				year: '1026 终帝',
			},
			'hoa-3': {
				title: '第一个储藏窟',
				description:
					'纹打开维提坦的储藏洞窟，发现了食物、补给和一块金属铭板，上面刻有统御主关于他所囚禁之危险的隐秘信息。',
				season: '春季',
				year: '1026 终帝',
			},
			'hoa-8': {
				title: '分兵',
				description:
					'纹返回陆沙德，军队分为两路：沙赛德和微风前往北方的乌尔提奥，纹和依蓝德将西进法特瑞克斯城。',
				season: '夏季',
				year: '1026 终帝',
			},
			'hoa-10': {
				title: '西进',
				description:
					'纹随依蓝德的军队向法特瑞克斯城行军，沿途灰烬日益沉重，世界在他们周围步步崩坏。',
				season: '夏季',
				year: '1026 终帝',
			},
			'hoa-21': {
				title: '抵达法特瑞克斯',
				description:
					'大军抵达法特瑞克斯城外，在灰烬覆盖的平原上建立围城营地。义务官尤门拒绝交出城市和储藏窟。',
				season: '秋季',
				year: '1026 终帝',
			},
			'hoa-28': {
				title: '舞会中的间谍',
				description:
					'纹伪装成贵族女性潜入法特瑞克斯，参加尤门在欧瑞尔府邸举办的舞会，收集情报并寻求外交解决之道。',
				season: '秋季',
				year: '1026 终帝',
			},
			'hoa-40': {
				title: '第二场舞会',
				description:
					'纹再次参加尤门的舞会，在哲学辩论中与他正面交锋，讨论统御主的遗产和日益加重的灰烬。',
				season: '晚秋',
				year: '1026 终帝',
			},
			'hoa-47': {
				title: '被俘',
				description:
					'纹被尤门的军队俘虏并囚禁在资源教区，她的金属被没收。她被关在一间牢房中，旁边有她无法触及的天金。',
				season: '冬季',
				year: '1026 终帝',
			},
			'hoa-51': {
				title: '牢狱之中',
				description:
					'被囚禁并与金属隔绝的纹，思索着灭绝的影响以及她在升华之井释放的那股力量的本质。',
				season: '冬季',
				year: '1026 终帝',
			},
			'hoa-54': {
				title: '储藏窟揭晓',
				description:
					'纹发现了法特瑞克斯的储藏窟及其关键内容——食物、补给以及关于统御主真正准备工作的信息。',
				season: '晚冬',
				year: '1026 终帝',
			},
			'hoa-56': {
				title: '逃离法特瑞克斯',
				description:
					'当克罗司攻击法特瑞克斯时，纹逃出城市，将审判者从依蓝德和军队身边引开以保护他们。',
				season: '早春',
				year: '1027 终帝',
			},
			'hoa-59': {
				title: '引导追猎',
				description:
					'纹向东飞往陆沙德方向，一群审判者紧追不舍，她故意将灭绝的仆从从法特瑞克斯和依蓝德身边引开。',
				season: '春季',
				year: '1027 终帝',
			},
			'hoa-72': {
				title: '重返陆沙德',
				description:
					'纹抵达满目疮痍的陆沙德，摧毁了克瑞迪克·肖，以镕金术的巨大力量轰塌了统御主的宫殿。',
				season: '夏季',
				year: '1027 终帝',
			},
			'hoa-79': {
				title: '升华',
				description: '纹汲取了迷雾本身——存留的躯体——升华成为神力的载体，与灭绝正面对决。',
				season: '秋季',
				year: '1027 终帝',
			},
			'hoa-81': {
				title: '最后的牺牲',
				description:
					'纹牺牲自己来毁灭灭绝，将存留的力量与自己的生命力融合，彻底消灭了这位毁灭之神。',
				season: '秋季',
				year: '1027 终帝',
			},
			'hoa-83': {
				title: '重生之野',
				description:
					'纹的遗体被发现在一片鲜花和绿草的原野上——沙赛德重塑世界最初的迹象。她安详地躺在依蓝德身旁。',
				season: '秋季',
				year: '1027 终帝',
			},
		},
		kelsier: {
			'tfe-0': {
				title: '幸存者归来',
				description:
					'凯希尔抵达南方统御区崔斯汀领主的种植园，杀死了这个残暴的贵族——这是他逃离深坑以来对贵族的第一次打击。',
				season: '春季',
				year: '1021 终帝',
			},
			'tfe-1': {
				title: '暗中观察者',
				description:
					'凯希尔在暗处观察凯蒙团伙的行动，注意到纹无意识地使用镕金术——一个拥有迷雾之子能力的街头小流浪儿。',
				season: '春季',
				year: '1021 终帝',
			},
			'tfe-3': {
				title: '招募纹',
				description:
					'凯希尔将纹从凯蒙的虐待中解救出来，邀请她加入自己的团伙，并揭示了她作为迷雾之子的真正能力。',
				season: '春季',
				year: '1021 终帝',
			},
			'tfe-5': {
				title: '天金劫案',
				description:
					'凯希尔闯入泛铸府邸的金库偷取天金，为起义筹集资金，同时测试贵族家族的防御能力。',
				season: '春季',
				year: '1021 终帝',
			},
			'tfe-6': {
				title: '团伙集结',
				description:
					'在克拉伯的木工铺，凯希尔召集了完整的团伙——汉姆、微风、道克森、克拉伯以及现在的纹——并揭示了他推翻统御主的计划。',
				season: '春季',
				year: '1021 终帝',
			},
			'tfe-7': {
				title: '教导学徒',
				description: '凯希尔带纹到钢铁之门附近的城墙进行镕金术训练，教她在尖塔之间飞跃时推拉金属。',
				season: '晚春',
				year: '1021 终帝',
			},
			'tfe-8': {
				title: '雷诺伪装',
				description:
					'凯希尔护送纹前往费利斯的雷诺领主庄园，为她建立瓦莱特小姐的伪装身份，以渗透贵族社会。',
				season: '夏季',
				year: '1021 终帝',
			},
			'tfe-10': {
				title: '筹划革命',
				description:
					'回到陆沙德后，凯希尔在克拉布的店铺与团队碰面，审视起义的进展。他带纹进行一次夜间城市奔跑，继续她的合金术训练。',
				season: '夏季',
				year: '1021 终帝',
			},
			'tfe-10.2': {
				title: '起义壮大',
				description:
					'凯希尔在陆沙德贫民窟中领导仓库集会，借助海司辛幸存者的传奇来壮大司卡起义力量。',
				season: '夏季',
				year: '1021 终帝',
			},
			'tfe-11': {
				title: '卡蒙巢穴屠杀',
				description:
					'凯希尔和团队发现教务部为报复财务局诈骗而屠杀了卡蒙旧巢穴的所有人，坚定了他们对抗统御主的决心。',
				season: '夏季',
				year: '1021 终帝',
			},
			'tfe-14': {
				title: '宫殿侦察',
				description: '凯希尔和纹在夜间侦察克瑞迪克·肖，绘制宫殿防御地图并测试审判者的反应能力。',
				season: '夏季',
				year: '1021 终帝',
			},
			'tfe-18': {
				title: '贵族战争行动',
				description:
					'凯希尔策划贵族家族之间的攻击，暗杀目标并栽赃嫁祸，以煽动削弱贵族势力的贵族战争。',
				season: '晚夏',
				year: '1021 终帝',
			},
			'tfe-21': {
				title: '起义军',
				description:
					'凯希尔前往阿果伊斯洞窟视察隐藏在山中日益壮大的起义军，训练那些从未拿过武器的士兵。',
				season: '秋季',
				year: '1021 终帝',
			},
			'tfe-25': {
				title: '霍斯特普之灾',
				description:
					'当驻军发现并屠杀起义军时，凯希尔以白镴冲刺赶往霍斯特普。他抵达时只见一片惨烈，不得不向南逃离。',
				season: '晚秋',
				year: '1021 终帝',
			},
			'tfe-26': {
				title: '收拾残局',
				description:
					'回到克拉伯的店铺，凯希尔在霍斯特普灾难后重新集结，即使希望似乎渺茫也拒绝放弃革命。',
				season: '冬季',
				year: '1021 终帝',
			},
			'tfe-32': {
				title: '摧毁深坑',
				description:
					'凯希尔重返海司辛深坑——他最深痛苦的所在——摧毁了天金晶体，切断了统御主最珍贵的资源。',
				season: '冬季',
				year: '1022 终帝',
			},
			'tfe-34': {
				title: '幸存者的最后一战',
				description:
					'凯希尔在喷泉广场迎战统御主，进行了一场不可能获胜的战斗。他面带微笑地死去，成为一位点燃革命之火的殉道者。',
				season: '早春',
				year: '1022 终帝',
			},
			'tfe-35': {
				title: '超越死亡',
				description:
					'通过披着他骨骸的坎得拉奥瑟尔，凯希尔的最终计划得以展开——他的死亡是点燃陆沙德革命烈火的那颗火种。',
				season: '早春',
				year: '1022 终帝',
			},
			'woa-1': {
				title: '帷幕之后',
				description:
					'凯希尔死后被困在认知界，作为认知影存在于升华之井附近，注视着陆沙德在依蓝德统治下的变化。',
				season: '秋季',
				year: '1023 终帝',
			},
			'woa-59': {
				title: '目睹释放',
				description: '凯希尔在认知界无助地看着纹在升华之井获取力量并将其释放，使灭绝从牢笼中逃脱。',
				season: '冬季',
				year: '1024 终帝',
			},
			'sh-4.1': {
				title: '认知界西行',
				description: '作为认知影存在，凯希尔穿越雾海前往西方焰燃地，寻求艾尔要塞的帮助。',
				season: '春季',
				year: '1025 终帝',
			},
			'sh-6.1': {
				title: '法德雷克斯的警告',
				description: '凯希尔抵达法德雷克斯城的认知投影，遇到霍德并试图警告纹她的血金术尖刺。',
				season: '秋季',
				year: '1026 终帝',
			},
			'hoa-1': {
				title: '幸存者坚持',
				description:
					'在认知界，凯希尔与存留逐渐消退的力量并肩努力，寻找任何方法来帮助实体界抵抗灭绝日益增长的影响。',
				season: '春季',
				year: '1026 终帝',
			},
			'hoa-50': {
				title: '持有存留',
				description:
					'随着存留的意识消逝，凯希尔拾起了碎片的力量——从认知界不完美地持有着它，为最后的行动争取时间。',
				season: '春季',
				year: '1027 终帝',
			},
			'hoa-81': {
				title: '传递火炬',
				description:
					'纹从凯希尔手中接过存留的力量以毁灭灭绝。幸存者释放了碎片，他的使命已完成——但他拒绝进入彼岸。',
				season: '秋季',
				year: '1027 终帝',
			},
			'hoa-83': {
				title: '幸存者永存',
				description: '即便和谐重塑了世界，凯希尔仍坚守在认知界——这位幸存者连死亡都无法将他阻止。',
				season: '秋季',
				year: '1027 终帝',
			},
		},
		sazed: {
			'tfe-9': {
				title: '泰芮司管家',
				description:
					'沙赛德抵达费利斯的雷诺领主庄园担任纹的导师，教授她贵族的礼仪，同时秘密保存古老的宗教信仰。',
				season: '夏季',
				year: '1021 终帝',
			},
			'tfe-10.2': {
				title: '仓库集会',
				description:
					'沙赛德与凯希尔和纹一起参加仓库区的秘密集会，观看幸存者向聚集的司卡工人宣讲革命。',
				season: '夏季',
				year: '1021 终帝',
			},
			'tfe-13': {
				title: '舞会上的守护者',
				description: '沙赛德以管家身份陪同纹参加她的第一场舞会，在仆人区看护着她渗透贵族社会。',
				season: '夏季',
				year: '1021 终帝',
			},
			'tfe-22': {
				title: '学者的工作',
				description:
					'沙赛德在雷诺庄园的舞会间隙教授纹，分享他渊博的宗教知识，同时研究终极帝国的种种规律。',
				season: '秋季',
				year: '1021 终帝',
			},
			'tfe-34': {
				title: '革命的见证者',
				description: '沙赛德在革命期间身处陆沙德，看着司卡人民奋起，凯希尔在喷泉广场倒下。',
				season: '早春',
				year: '1022 终帝',
			},
			'tfe-38': {
				title: '帝国的陨落',
				description: '沙赛德协助团伙攻击克瑞迪克·肖，运用藏金术击退统御主的卫兵。',
				season: '早春',
				year: '1022 终帝',
			},
			'tfe-39': {
				title: '新的开始',
				description:
					'在劫后余生中，沙赛德开始研究克瑞迪克·肖的记录，寻找关于深渊和永世英雄预言的答案。',
				season: '春季',
				year: '1022 终帝',
			},
			'woa-4': {
				title: '巡游教师',
				description: '沙赛德穿越东方统御区，走访乡村，向新获自由的司卡人传播被压制的宗教和知识。',
				season: '秋季',
				year: '1023 终帝',
			},
			'woa-7': {
				title: '瑟兰修道院',
				description:
					'在马什的引导下，沙赛德发现了瑟兰修道院——一个令人毛骨悚然的审判者据点，在这里他找到了宽恩的钢铁铭板。',
				season: '晚秋',
				year: '1023 终帝',
			},
			'woa-12': {
				title: '解读铭板',
				description:
					'沙赛德研究修道院中宽恩的铭文，揭示了这位泰芮司保存者绝望的警告：永世英雄的预言已被篡改。',
				season: '晚秋',
				year: '1023 终帝',
			},
			'woa-15': {
				title: '迷雾杀戮',
				description:
					'沙赛德向西返程途经厄本内，遇到了村民在迷雾中离奇死亡的村庄——迷雾病的最初迹象。',
				season: '冬季',
				year: '1023 终帝',
			},
			'woa-22': {
				title: '回到陆沙德',
				description: '沙赛德带着关于被篡改的预言、迷雾杀戮和钢铁铭文真正含义的严峻消息抵达陆沙德。',
				season: '冬季',
				year: '1023 终帝',
			},
			'woa-40': {
				title: '辩论预言',
				description:
					'沙赛德与婷黛尔在泛铸府邸合作，比较永世英雄预言的原始版本和被篡改版本，两人也日渐亲近。',
				season: '晚冬',
				year: '1024 终帝',
			},
			'woa-52': {
				title: '守卫城门',
				description:
					'当克罗司突破陆沙德城墙时，沙赛德运用藏金术独力坚守锡门，在绝望的最后一搏中耗尽了储存的属性。',
				season: '晚冬',
				year: '1024 终帝',
			},
			'woa-57': {
				title: '对抗马什',
				description:
					'沙赛德在克瑞迪克·肖的走廊中与被灭绝控制的马什激战，勉强在审判者的攻击下幸存，而纹正向下方的升华之井前进。',
				season: '冬季',
				year: '1024 终帝',
			},
			'woa-59': {
				title: '婷黛尔之死',
				description:
					'沙赛德得知婷黛尔在克罗司攻击中遇害。悲痛欲绝的他开始了信仰危机，质疑他所携带的每一种宗教。',
				season: '冬季',
				year: '1024 终帝',
			},
			'hoa-4': {
				title: '南方外交',
				description:
					'沙赛德与微风一同前往莱卡尔城谈判条约，运用外交手段将南方国王纳入依蓝德日益壮大的联盟。',
				season: '夏季',
				year: '1026 终帝',
			},
			'hoa-8': {
				title: '北行',
				description: '沙赛德接到通过外交手段确保乌尔提奥的任务，而依蓝德率军西行。他从北门出发。',
				season: '夏季',
				year: '1026 终帝',
			},
			'hoa-14': {
				title: '抵达乌尔提奥',
				description:
					'沙赛德抵达乌尔提奥，发现城市处于公民奎里昂的高压统治下，在废弃的泛铸庄园建立了外交据点。',
				season: '秋季',
				year: '1026 终帝',
			},
			'hoa-25': {
				title: '建立信任',
				description:
					'沙赛德努力争取乌尔提奥民众的信任，同时研究城市的历史并寻找教务所建筑下的储藏窟。',
				season: '初冬',
				year: '1026 终帝',
			},
			'hoa-40': {
				title: '教务所调查',
				description: '沙赛德调查教会教区，试图进入其下方的储藏窟，同时应对奎里昂偏执多疑的政府。',
				season: '冬季',
				year: '1026 终帝',
			},
			'hoa-50': {
				title: '洞窟的发现',
				description:
					'沙赛德发现了水淹干涸运河系统的机关——统御主曾排干运河，将水储存在地下的储藏窟中。',
				season: '早春',
				year: '1027 终帝',
			},
			'hoa-58': {
				title: '拯救乌尔提奥',
				description:
					'当大火在推翻奎里昂的革命中席卷全城时，沙赛德释放储存的水灌入运河，使乌尔提奥免于毁灭。',
				season: '春季',
				year: '1027 终帝',
			},
			'hoa-64': {
				title: '重建',
				description:
					'奎里昂被推翻、大火被扑灭后，沙赛德协助重建乌尔提奥，分配储藏窟中的补给，并研究统御主的信息。',
				season: '夏季',
				year: '1027 终帝',
			},
			'hoa-69': {
				title: '前往海司辛',
				description:
					'沙赛德前往海司辛深坑，被事件的汇聚所吸引。他对宗教和宽恩铭文的研究指向了一个可怕的启示。',
				season: '秋季',
				year: '1027 终帝',
			},
			'hoa-71': {
				title: '最终的聚集',
				description:
					'沙赛德在世界消亡之际返回陆沙德，灰烬如黑幕般倾泻。他携带着每一种宗教和每一则预言的知识。',
				season: '秋季',
				year: '1027 终帝',
			},
			'hoa-82': {
				title: '永世英雄',
				description:
					'纹和灭绝双双毁灭后，沙赛德意识到自己才是永世英雄。他在升华之井拾起了存留和灭绝双方的力量。',
				season: '秋季',
				year: '1027 终帝',
			},
			'hoa-83': {
				title: '和谐',
				description:
					'沙赛德作为和谐升华，融合灭绝与存留。他重塑了世界——移动了星球、恢复了绿意、修复了一千年的创伤。',
				season: '秋季',
				year: '1027 终帝',
			},
		},
		elend: {
			'tfe-12': {
				title: '读书的贵族',
				description:
					'依蓝德·泛铸在自家府邸的舞会上出场，独自阅读，而其余贵族在他周围翩翩起舞、勾心斗角。',
				season: '夏季',
				year: '1021 终帝',
			},
			'tfe-13': {
				title: '邂逅瓦莱特小姐',
				description:
					'依蓝德在舞会上遇见了神秘的瓦莱特·雷诺小姐，被她不拘一格的举止和犀利的言辞所吸引。',
				season: '夏季',
				year: '1021 终帝',
			},
			'tfe-19': {
				title: '追求',
				description:
					'依蓝德对瓦莱特小姐的爱慕日渐加深，两人在舞会上交谈，讨论哲学和贵族阶层的弊端。',
				season: '晚夏',
				year: '1021 终帝',
			},
			'tfe-24': {
				title: '贵族密谋者',
				description: '依蓝德秘密组织反对统御主暴政的温和派贵族，在泛铸府邸的私人书房中聚会。',
				season: '秋季',
				year: '1021 终帝',
			},
			'tfe-34': {
				title: '革命',
				description:
					'依蓝德在喷泉广场目睹了司卡起义的混乱局面，挺身而出保护贵族和平民免受暴力侵害。',
				season: '早春',
				year: '1022 终帝',
			},
			'tfe-38': {
				title: '意外的领袖',
				description: '统御主死后，依蓝德成为一个团结各方的声音，在帝国崩塌之际呼吁秩序。',
				season: '早春',
				year: '1022 终帝',
			},
			'tfe-39': {
				title: '新国王',
				description:
					'依蓝德·泛铸被宣布为中央统御区国王，开始从暴政的废墟上建立民主政府这一艰巨任务。',
				season: '春季',
				year: '1022 终帝',
			},
			'woa-1': {
				title: '陆沙德之王',
				description:
					'依蓝德在泛铸府邸不懈工作以建立宪制政府，起草法律并组建议会，而军队在城外集结。',
				season: '秋季',
				year: '1023 终帝',
			},
			'woa-5': {
				title: '议会',
				description:
					'依蓝德在他创建的议会上发言，倡导民主原则，尽管顾问们警告民主制度可能无法在围城中存活。',
				season: '秋季',
				year: '1023 终帝',
			},
			'woa-12': {
				title: '审视围城',
				description:
					'依蓝德从城墙上审视围城阵线，北望他父亲史特拉夫的军队，西方是赛特的军队正在逼近。',
				season: '初冬',
				year: '1023 终帝',
			},
			'woa-22': {
				title: '为民主而战',
				description:
					'依蓝德面对议会中日益增长的反对声浪，对围城的恐惧驱使许多人寻求比这位哲学家国王更强硬的领袖。',
				season: '冬季',
				year: '1023 终帝',
			},
			'woa-26': {
				title: '与父亲谈判',
				description:
					'依蓝德骑马前往史特拉夫·泛铸的营地谈判，带着纹作为他的护卫。会面揭示了史特拉夫对其理想主义儿子的蔑视。',
				season: '冬季',
				year: '1023 终帝',
			},
			'woa-28': {
				title: '筹谋外交',
				description:
					'回到泛铸府邸，依蓝德试图让三支军队彼此对峙——史特拉夫、赛特和正在逼近的克罗司群。',
				season: '冬季',
				year: '1024 终帝',
			},
			'woa-35': {
				title: '被罢免',
				description:
					'议会投票以彭罗德领主取代依蓝德，利用了依蓝德自己的民主宪法中的一项条款。他的理想主义最终害了自己。',
				season: '冬季',
				year: '1024 终帝',
			},
			'woa-42': {
				title: '克罗司使命',
				description:
					'依蓝德通过地道离开陆沙德，前往与贾斯特斯·莱卡尔和他的克罗司大军谈判——一场获取盟友的冒险赌博。',
				season: '晚冬',
				year: '1024 终帝',
			},
			'woa-46': {
				title: '从克罗司阵营返回',
				description:
					'依蓝德谈判失败后从克罗司阵营返回——贾斯特斯已失去对这些怪物的控制。克罗司无论如何都会发动攻击。',
				season: '晚冬',
				year: '1024 终帝',
			},
			'woa-49': {
				title: '流放出陆沙德',
				description:
					'依蓝德与纹穿过锡门离开陆沙德，被彭罗德政府放逐，向北前往泰芮司寻求保存者会议的援助。',
				season: '晚冬',
				year: '1024 终帝',
			},
			'woa-50': {
				title: '北行之旅',
				description:
					'依蓝德的小队向泰芮司行进，但越来越强的不安驱使他们重新考虑。升华之井可能并不在他们所想的地方。',
				season: '晚冬',
				year: '1024 终帝',
			},
			'woa-52': {
				title: '战斗',
				description:
					'依蓝德返回时发现陆沙德正遭受克罗司攻击，在城墙被突破、城市岌岌可危之际奋力杀敌。',
				season: '晚冬',
				year: '1024 终帝',
			},
			'woa-58': {
				title: '前往井',
				description: '依蓝德与纹一同深入克瑞迪克·肖地下，寻找升华之井，而马什在上方与沙赛德激战。',
				season: '冬季',
				year: '1024 终帝',
			},
			'woa-59': {
				title: '迷雾之子皇帝',
				description:
					'依蓝德在井边身受致命伤，纹将一颗升华金珠强塞入他口中，使他蜕变为迷雾之子，从而获救。',
				season: '冬季',
				year: '1024 终帝',
			},
			'hoa-1': {
				title: '征战的皇帝',
				description:
					'依蓝德率军前往维提坦，如今他已是迷雾之子皇帝，指挥军事行动以确保统御主隐藏的补给窟。',
				season: '春季',
				year: '1026 终帝',
			},
			'hoa-3': {
				title: '确保储藏窟',
				description:
					'依蓝德确保了维提坦的储藏洞窟，发现食物和一块金属铭板信息，警告拉瑟克所囚禁的危险。',
				season: '春季',
				year: '1026 终帝',
			},
			'hoa-8': {
				title: '战略分兵',
				description:
					'在陆沙德，依蓝德分兵：派沙赛德通过外交手段确保乌尔提奥，而他自己率军西行，必要时武力攻取法特瑞克斯。',
				season: '夏季',
				year: '1026 终帝',
			},
			'hoa-10': {
				title: '西行军',
				description: '依蓝德率军向法特瑞克斯城西进，灰烬日益沉重。他在行军途中训练迷雾之子的能力。',
				season: '夏季',
				year: '1026 终帝',
			},
			'hoa-21': {
				title: '围攻法特瑞克斯',
				description:
					'依蓝德的军队抵达法特瑞克斯，在灰烬覆盖的平原上建立围城阵线。尤门拒绝谈判或交出储藏窟。',
				season: '秋季',
				year: '1026 终帝',
			},
			'hoa-28': {
				title: '不情愿的围城者',
				description:
					'依蓝德在征服者的角色中挣扎，尝试外交手段，而他的将军们催促发动进攻。灰烬每天都在加重。',
				season: '秋季',
				year: '1026 终帝',
			},
			'hoa-47': {
				title: '失去纹',
				description:
					'当纹在法特瑞克斯城内被俘时，依蓝德面临一个不可能的抉择：拯救妻子还是保护数万名将士。',
				season: '冬季',
				year: '1026 终帝',
			},
			'hoa-54': {
				title: '进入法特瑞克斯',
				description:
					'克罗司的攻击迫使双方临时结盟。依蓝德进入城市并找到储藏窟，发现了统御主的最终信息。',
				season: '晚冬',
				year: '1026 终帝',
			},
			'hoa-58': {
				title: '出发前往海司辛',
				description:
					'储藏窟已确保，纹向东离去，依蓝德得知最终的真相：天金一定在海司辛深坑。他率军南下。',
				season: '早春',
				year: '1027 终帝',
			},
			'hoa-61': {
				title: '进军深坑',
				description:
					'依蓝德率领疲惫的军队前往海司辛深坑，坎得拉的故乡就在其下方。马什的审判者大军紧随其后。',
				season: '春季',
				year: '1027 终帝',
			},
			'hoa-69': {
				title: '海司辛之战',
				description:
					'依蓝德在海司辛深坑与审判者和克罗司的绝望战斗中燃尽最后的天金，明知金属耗尽便意味着死亡。',
				season: '夏季',
				year: '1027 终帝',
			},
			'hoa-79': {
				title: '皇帝之死',
				description:
					'依蓝德在海司辛之战的最后时刻被马什杀死，天金已经耗尽。他燃尽了灭绝觊觎的一切金属后战死。',
				season: '秋季',
				year: '1027 终帝',
			},
			'hoa-83': {
				title: '死后重逢',
				description:
					'依蓝德的遗体在纹身旁被发现，置身于一片鲜花原野中——沙赛德给予重生世界的第一份礼物——在经历所有挣扎之后终获安宁。',
				season: '秋季',
				year: '1027 终帝',
			},
		},
		marsh: {
			'tfe-7': {
				title: '不情愿的兄长',
				description:
					'马什抵达克拉伯的店铺，他是凯希尔的哥哥，也是一位独当一面的起义领袖。他勉强加入了团伙的计划。',
				season: '晚春',
				year: '1021 终帝',
			},
			'tfe-10.2': {
				title: '仓库集会',
				description:
					'马什与团队一起参加仓库区的秘密集会，注视着兄弟凯西尔向聚集的斯卡工人宣讲革命。',
				season: '夏季',
				year: '1021 终帝',
			},
			'tfe-13': {
				title: '泰里安山会面',
				description:
					'马什在距离陆沙德数公里外的泰里安山与凯希尔会面，在远离教廷耳目的地方讨论起义计划，然后开始危险的渗透行动。',
				season: '夏季',
				year: '1021 终帝',
			},
			'tfe-20': {
				title: '深入卧底',
				description:
					'马什在克瑞迪克·肖深入教会等级制度，学习血金术的黑暗秘密，同时冒着被审判者发现的风险。',
				season: '晚夏',
				year: '1021 终帝',
			},
			'tfe-30': {
				title: '消失',
				description: '马什失去了联系，通讯完全中断，他消失在审判教区的最深层。团伙担心最坏的情况。',
				season: '冬季',
				year: '1021 终帝',
			},
			'tfe-38': {
				title: '审判者',
				description:
					'马什在攻击克瑞迪克·肖的最终战役中现身，仍然活着但已发生了转变——铁钉钉穿了他的双眼。尽管经历了转变，他仍为团伙而战。',
				season: '早春',
				year: '1022 终帝',
			},
			'woa-4': {
				title: '东方流浪者',
				description:
					'马什作为一名孤独的审判者游荡在东方统御区，试图理解自己的转变，同时帮助沙赛德调查偏远村庄。',
				season: '秋季',
				year: '1023 终帝',
			},
			'woa-7': {
				title: '修道院向导',
				description:
					'马什引导沙赛德前往瑟兰修道院——一个位于偏远北方的审判者据点——去寻找沙赛德所需的记录。',
				season: '晚秋',
				year: '1023 终帝',
			},
			'woa-12': {
				title: '抛弃',
				description:
					'马什在修道院突然抛下沙赛德并消失在荒野中，被他越来越无法抗拒的力量所驱使。灭绝的影响日益加深。',
				season: '晚秋',
				year: '1023 终帝',
			},
			'woa-57': {
				title: '灭绝的傀儡',
				description:
					'马什在灭绝的完全控制下出现在克瑞迪克·肖，在走廊中与沙赛德激战，而纹正向下方的升华之井前进。',
				season: '冬季',
				year: '1024 终帝',
			},
			'woa-59': {
				title: '守卫井',
				description:
					'马什作为灭绝的傀儡守卫着升华之井的入口，战斗着阻止任何人接近纹——或帮助她做出正确的选择。',
				season: '冬季',
				year: '1024 终帝',
			},
			'hoa-0': {
				title: '制造审判者',
				description:
					'在灭绝的控制下，马什在塔辛格文执行黑暗的血金术仪式，从俘获的藏金术师和镕金术师中创造新的审判者。',
				season: '春季',
				year: '1026 终帝',
			},
			'hoa-6': {
				title: '统领克罗司',
				description:
					'马什代表灭绝指挥一支不断壮大的克罗司大军，穿行东方统御区，为最终之战集结力量。',
				season: '夏季',
				year: '1026 终帝',
			},
			'hoa-22': {
				title: '泰里安附近',
				description:
					'马什在泰里安山附近活动，从俘虏中制造血金术尖刺，在灰烬山的阴影下建设灭绝的审判者大军。',
				season: '冬季',
				year: '1026 终帝',
			},
			'hoa-38': {
				title: '钉刺彭罗德',
				description: '马什潜入陆沙德为彭罗德国王钉入尖刺，使灭绝获得了直接操控首都治理的渠道。',
				season: '冬季',
				year: '1026 终帝',
			},
			'hoa-45': {
				title: '向法特瑞克斯合围',
				description: '马什率领他的审判者向法特瑞克斯城合围，灭绝试图夺回隐藏在城中的天金储藏。',
				season: '冬季',
				year: '1026 终帝',
			},
			'hoa-59': {
				title: '追击纹',
				description:
					'马什率领审判者群向东追击逃离法特瑞克斯前往陆沙德方向的纹，将灭绝的仆从从储藏窟引开。',
				season: '春季',
				year: '1027 终帝',
			},
			'hoa-69': {
				title: '海司辛之战',
				description:
					'马什率领灭绝的军队抵达深坑。在恢复意志的一刻，他撕下了纹的耳环——一个改变一切的反抗之举。',
				season: '秋季',
				year: '1027 终帝',
			},
			'hoa-79': {
				title: '杀死依蓝德',
				description:
					'马什在灭绝的驱使下，在海司辛之战中杀死了皇帝依蓝德。这一行为实现了灭绝的计划，但也让马什的灵魂再次碎裂。',
				season: '秋季',
				year: '1027 终帝',
			},
			'hoa-83': {
				title: '终获自由',
				description:
					'灭绝被摧毁后，马什终于摆脱了神的控制。他独自伫立在重生的世界中——一位在万物终结后幸存的审判者。',
				season: '秋季',
				year: '1027 终帝',
			},
		},
		spook: {
			'tfe-7': {
				title: '年轻的锡眼',
				description:
					'幽灵，克拉伯年轻的侄子，在木工铺为团伙担任望风和信使，操着浓重的东部街头俚语。',
				season: '晚春',
				year: '1021 终帝',
			},
			'tfe-9': {
				title: '信使奔跑',
				description:
					'幽灵在陆沙德的克拉伯店铺和费利斯的雷诺庄园之间传递消息，他被锡增强的感官使他成为出色的侦察兵。',
				season: '夏季',
				year: '1021 终帝',
			},
			'tfe-22': {
				title: '团伙支援',
				description:
					'幽灵在贵族战争期间留守克拉伯的店铺，通过屋顶观察和在贫民窟中的信使穿梭提供情报。',
				season: '秋季',
				year: '1021 终帝',
			},
			'tfe-34': {
				title: '见证牺牲',
				description: '幽灵在人群中目睹凯希尔在喷泉广场牺牲，这一事件将影响他的余生。',
				season: '早春',
				year: '1022 终帝',
			},
			'tfe-38': {
				title: '革命',
				description: '幽灵在最终的革命中与团伙并肩作战，帮助从陆沙德的街道上协调司卡起义。',
				season: '早春',
				year: '1022 终帝',
			},
			'woa-6': {
				title: '成长中的侦察兵',
				description: '幽灵为依蓝德的新政府担任侦察兵，在围城期间巡逻城市并监视包围的军队。',
				season: '秋季',
				year: '1023 终帝',
			},
			'woa-49': {
				title: '流放队伍',
				description: '幽灵随纹和依蓝德的流放队伍穿过锡门离开陆沙德，向北前往泰芮司山脉。',
				season: '晚冬',
				year: '1024 终帝',
			},
			'woa-52': {
				title: '在战斗中幸存',
				description: '在克罗司攻击期间返回陆沙德后，幽灵在陆沙德之战中幸存并帮助保卫了城市。',
				season: '晚冬',
				year: '1024 终帝',
			},
			'hoa-1': {
				title: '战役士兵',
				description:
					'幽灵在维提坦的依蓝德军队中服役，随着皇帝的军队确保储藏窟，他逐渐承担更多责任。',
				season: '春季',
				year: '1026 终帝',
			},
			'hoa-14': {
				title: '渗透者',
				description: '幽灵先于沙赛德的外交团抵达乌尔提奥，通过被称为"幽巷"的干涸运河网络潜入城市。',
				season: '秋季',
				year: '1026 终帝',
			},
			'hoa-17': {
				title: '燃烧的房屋',
				description:
					'幽灵在幽巷中一座隐蔽的建筑里建立了据点，观察公民的高压统治并与当地抵抗势力取得联系。',
				season: '秋季',
				year: '1026 终帝',
			},
			'hoa-23': {
				title: '市场观察',
				description:
					'幽灵在市场坑观察公民奎里昂的演说，研究他的行为模式以及他通过血金术尖刺强迫服役的镕金术师。',
				season: '初冬',
				year: '1026 终帝',
			},
			'hoa-30': {
				title: '接近公民',
				description:
					'幽灵逐渐接近公民的核心圈子，调查奎里昂用来控制镕金术师的尖刺并收集腐败的证据。',
				season: '冬季',
				year: '1026 终帝',
			},
			'hoa-38': {
				title: '策划革命',
				description: '幽灵在藏身处与沙赛德和当地起义者协调，策划推翻奎里昂政权并确保储藏窟的行动。',
				season: '早春',
				year: '1027 终帝',
			},
			'hoa-45': {
				title: '凯希尔的声音',
				description: '幽灵开始听到他认为是凯希尔引导他的声音，驱使他对公民采取越来越危险的行动。',
				season: '春季',
				year: '1027 终帝',
			},
			'hoa-50': {
				title: '燃烧的建筑',
				description:
					'幽灵在一场建筑火灾中被植入尖刺，获得了增强的镕金术能力，但也因尖刺而容易受到灭绝的影响。',
				season: '春季',
				year: '1027 终帝',
			},
			'hoa-55': {
				title: '真相揭露',
				description:
					'幽灵意识到他一直听到的声音不是凯希尔而是灭绝，通过血金术尖刺操纵他。他痛苦地拔出了尖刺。',
				season: '晚春',
				year: '1027 终帝',
			},
			'hoa-58': {
				title: '乌尔提奥英雄',
				description:
					'幽灵领导了对奎里昂的革命，揭露其腐败。当大火吞噬城市时，沙赛德释放洪水灌入运河，拯救乌尔提奥免于毁灭。',
				season: '春季',
				year: '1027 终帝',
			},
			'hoa-64': {
				title: '恢复',
				description:
					'幽灵虽全身烧伤严重但仍活着，在乌尔提奥新领导层的稳定中逐渐康复，储藏窟中的补给也已分发。',
				season: '夏季',
				year: '1027 终帝',
			},
			'hoa-69': {
				title: '前往深坑',
				description: '幽灵带领乌尔提奥的兵力前往海司辛深坑，加入集结的各路大军，准备最终一战。',
				season: '秋季',
				year: '1027 终帝',
			},
			'hoa-83': {
				title: '新世界',
				description:
					'幽灵走入沙赛德重塑的世界——蓝天下一片鲜花绿草的原野。他携带着沙赛德留给幸存者们的最后话语。',
				season: '秋季',
				year: '1027 终帝',
			},
		},
	},

	markerLabels: {
		capital: '统御区首府',
		city: '城市',
		ashmount: '灰烬山',
		landmark: '地标',
		stronghold: '要塞',
		hideout: '藏身处',
		mine: '深坑监狱',
		mystical: '圣地',
		town: '城镇',
		village: '斯卡村庄',
		river: '河流/水道',
		industrial: '补给站',
		region: '区域',
		keep: '贵族堡垒',
		palace: '宫殿',
		plantation: '种植园',
		district: '城区',
		estate: '贵族庄园',
	},

	cityMarkerLabels: {
		gate: '城门',
		keep: '贵族堡垒',
		palace: '宫殿',
		district: '街区',
		shop: '商铺',
		safehouse: '安全屋',
		landmark: '著名地点',
		canal: '运河',
		ministry: '钢铁教廷分部',
		plaza: '广场',
	},
};
