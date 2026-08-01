/**
 * Mandarin Chinese (Simplified) data translations.
 * Sources: Official Chongqing Publishing House (重庆出版社) editions,
 * canonical Cosmere glossary (Coppermind/17th Shard).
 */
import type { DataTranslations } from '../types';
import { enData } from './en-data';

export const zhData: DataTranslations = {
	...enData,

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
				'tfe-17': '迷雾之子',
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
				'tfe-17': 'verified',
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
				'tfe-27': '教廷间谍',
				'tfe-38': '钢铁审判者',
				'woa-4': '不情愿的审判者',
				'woa-57': '灭绝的棋子',
				'hoa-0': '灭绝之手',
				'hoa-79': '铁眼', // "Ironeyes" is officially 铁眼
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
			description:
				'终极帝国的首都，统御主千年统治的权力中心。位于司卡德利亚的磁北极——这是为集中导航权而精心策划的地理操纵。唯一被允许拥有石制城墙的定居点。',
			confidence: 'probable',
		},
		'lake-luthadel': {
			name: '陆沙德湖',
			description: '首都以东的淡水湖，被灰烬污染。',
			confidence: 'probable',
		},
		'pits-hathsin': {
			name: '哈辛深坑',
			description:
				'以锯齿状地表裂缝显现的天金垂直界域。地图遍布狭窄如刃、深入地壳的垂直裂隙。囚犯们在幽闭的隧道中爬行寻找晶洞。凯希尔在摧毁晶体、终结天金生产之前，于未被测绘的裂隙网络深处的一个隐秘洞室中发现了第十一种金属（玛拉提姆）。',
			safeDescription:
				'陆沙德东北方一处残酷的囚徒矿场，遍布深入地壳、狭窄锋利的垂直裂缝。被判刑的囚犯在这些幽闭的裂隙中爬行，寻找其中形成的稀有天金晶洞。少有人能长久存活。',
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
			description:
				'在灭绝崛起期间，马什在附近制造了一根血金术钉刺后，目睹了其山坡上的大规模熔岩喷发，其日益加厚的灰烬降雪标志着世界加速恶化。',
			safeDescription:
				'距陆沙德最近的灰山，从城墙上即可望见。其持续的喷发将中央统御区笼罩在最厚的灰烬层中，需要不断清理。',
			confidence: 'probable',
		},
		urteau: {
			name: '厄尔多',
			description: '以"沟渠街"闻名——被统御主排干用作下沉式道路的运河。崩溃期间公民（奎林）的据点。',
			safeDescription: '北方统御区的首府，泛达家族的祖居之地。',
			confidence: 'probable',
		},
		'ashmount-kalling': {
			name: '凯灵',
			description: '北方统御区的主火山，灰烬更为暗沉刺鼻。',
			confidence: 'probable',
		},
		'fadrex-city': {
			name: '法德雷克斯城',
			description:
				'在统御主死后崛起。依靠天然岩石阵列（克雷诺尔岩架）而非城墙进行防御。藏有统御主的秘密储藏洞穴之一。',
			safeDescription: '西方统御区的主要贸易中心，由天然岩石阵列加固。',
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
			description:
				'直接建在统御主的一个储藏洞穴之上。建筑通过地下扩建和以教廷为中心的布局适应了厚重的灰烬沉降。到《永世英雄》时，城市正被灰烬堆吞噬，市民们住在建筑物的上层，下层已被灰烬填满。',
			safeDescription: '北方统御区的一座城市，建筑适应了厚重的灰烬沉降。',
			confidence: 'probable',
		},
		'ashmount-zerinah': {
			name: '泽丽娜',
			description: '最南端的灰山，南半球的热量调节器。',
			confidence: 'probable',
		},
		conventical: {
			name: '瑟兰修道院',
			description:
				'一道陡峭的螺旋阶梯向下通往真相：仆人厅（万人坑）、审判官宿舍，以及设有石桌、排水渠和钉刺库的血金术室。深处，沙赛德发现了宽恩藏在隐秘壁龛中的钢板书铭文。审判官在此处被制造。',
			safeDescription:
				'北境附近悬崖面上凿出的一座垂直堡垒。上层用作标准的教廷圣殿（礼拜堂、生活区）。',
			confidence: 'probable',
		},
		tathingdwen: {
			name: '塔辛德文',
			description: '泰瑞司统御区的首府，位于北方山脉中。',
			confidence: 'probable',
		},
		'terris-mountains': {
			name: '泰瑞司山脉',
			description: '在统御主改变世界地理之前，原始升华之井的所在地。',
			safeDescription: '泰瑞司人被奴役的崎岖山脉。',
			confidence: 'probable',
		},
		'tincut-fastness': {
			name: '廷卡要塞',
			description: '帝国崩溃期间议会和难民撤退至此。',
			safeDescription: '泰瑞司山脉中的一座隐秘要塞。',
			confidence: 'probable',
		},
		'high-villages': {
			name: '高地村落',
			description: '隐藏在山中的泰瑞司村落网络，通过地下隧道相连。',
			confidence: 'probable',
		},
		'imperial-canal': {
			name: '帝国运河',
			description:
				'一条按统御主法令挖掘的人工水道，连接塔辛德文与陆沙德，用于提取泰瑞司资源和派驻帝国士兵。连接帝国的基建设施本身在克罗斯军队利用运河道路进攻时成为了毁灭的通道——既是帝国工程的丰碑，也是帝国压迫的见证。',
			safeDescription:
				'并非天然河流，而是按统御主法令在地面开凿的人工水道。将北方的塔辛德文与陆沙德直接相连，使帝国范围内的贸易和运输成为可能。一座帝国工程的丰碑。',
			confidence: 'probable',
		},
		'kandra-homeland': {
			name: '坎得拉家园',
			description: '哈辛深坑下的深层洞穴，坎得拉人的家园，守护着统御主最大的秘密——包括信托。',
			safeDescription: '哈辛深坑下方一处隐藏的地下建筑群。其真实性质和目的不为外界所知。',
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
			name: '斯塔特林市',
			description: '储藏洞穴网络的南方锚点。含有第2号储藏洞穴及应急物资。',
			safeDescription: '南方统御区的一座城市。',
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
			description: '被凯希尔的叛军用作隐藏集结地，这些洞穴为数千名为革命训练的司卡士兵提供了庇护。',
			safeDescription: '陆沙德与哈辛深坑之间山脉中的石灰岩洞穴网络。',
			confidence: 'probable',
		},
		garthwood: {
			name: '加斯伍德',
			description:
				'东方统御区的一个定居点，其周边村庄是最早经历迷雾病的地区之一——这种疾病后来蔓延至整个帝国——这是依蓝德和纹将要揭示的模式早期征兆。',
			safeDescription: '东方统御区的一个定居点，沙赛德在此向获释的司卡传授被压制的宗教。',
			confidence: 'probable',
		},
		'straffs-camp': {
			name: '斯特拉夫营地',
			description: '围城期间斯特拉夫·泛达在陆沙德北方的军营。',
			confidence: 'probable',
		},
		'koloss-camp': {
			name: '克罗斯营地',
			description:
				'1024 FE年陆沙德围城期间克罗斯军队在陆沙德附近的营地。贾斯特斯·勒卡尔用木币收买克罗斯忠诚的灾难性尝试导致了这些生物对城市发动毁灭性攻击。',
			safeDescription: '克罗斯军队在陆沙德附近的一处大型营地，其存在是围城期间的持续威胁。',
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
			description:
				'拥有一支5,000名常备士兵的军队，他们在霍斯特普镇附近拦截并屠杀了叶登的叛军，展示了统御主快速投射军事力量的能力。',
			safeDescription: '位于陆沙德西北的一座大型驻军城市。',
			confidence: 'probable',
		},
		'haverfrex-cannery-central': {
			name: '哈弗弗雷克斯',
			description:
				'在陆沙德围城期间作为灰烬气候·凯特领主军队的主要补给节点，为长期军事存在提供了后勤持久力。',
			safeDescription: '中央统御区的一个以其大型罐头厂闻名的工业中转站。',
			confidence: 'probable',
		},
		'cetts-camp': {
			name: '凯特营地',
			description: '围城期间凯特领主在陆沙德西北的军营。',
			confidence: 'probable',
		},
		'western-coast': {
			name: '西部海岸',
			description:
				'终极帝国的西部海岸线，居住区在此终结，延伸为无尽的认知领域灰色海洋。凯希尔向西奔跑数周后到达这片荒凉的海岸，却发现灭绝在等待着他。从此处，认知领域越过一片黑暗的海洋，延伸至司卡德利亚边界之外的遥远土地。',
			safeDescription:
				'终极帝国荒凉的西部边缘，大陆在此终结、海洋在此开始。人烟稀少，鲜有访客，其海岸标志着已知世界的边界。',
			confidence: 'probable',
		},
		'ire-fortress': {
			name: '艾尔堡垒',
			description:
				'艾尔在司卡德利亚西部遥远的认知领域中建造的一座巍峨光辉堡垒。由内部散发光芒的白色石块筑成，四周环绕着奇异的玻璃般树木，由一条原始神力的导管供能。在其宝库中，艾尔守护着一个能够捕获濒死神力的球体——升华为神的关键。凯希尔潜入堡垒，窃听了古代艾岚人的计划，并通过恐吓他们的远征队夺走了球体。',
			safeDescription: '在死后世界的传说中一瞥而过的神秘堡垒，其性质和目的不为生者所知。',
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
				description:
					'统御主的宫殿，"千塔之丘"。纹在与灭绝的审判官对峙时，以一场所向披靡的迷雾之力展示摧毁了它，将整座建筑化为废墟。',
				safeDescription:
					'统御主的宫殿，"千塔之丘"。其拼凑式的建筑风格表明城市并非从一开始就完美规划。',
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
				description: '统御主在此处杀死了凯希尔。后更名为存留者广场。',
				safeDescription: '公开处刑地。',
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
				description: '克雷迪克·肖下方隐藏的力量之源。',
				safeDescription: '克雷迪克·肖下方一处神秘的地下洞室，其真实性质隐藏了千年。',
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
				description: '哈姆和纹在此考察统御主的军事实力并招募同情革命的士兵。',
				safeDescription: '城市的军事训练场和兵营。',
				confidence: 'probable',
			},
			'warehouse-district': {
				name: '仓库区',
				description: '凯希尔的团队在此储藏武器并为司卡叛乱举行秘密集会。',
				safeDescription: '靠近西部运河的工业区。',
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
			'kenton-street': {
				name: '肯顿街',
				description: '陆沙德繁华的市场街道，商贩在此出售从日用品到珍奇异兽的各种商品。',
				confidence: 'probable',
			},
		},
		urteau: {
			'ministry-canton': {
				name: '审判司',
				description:
					'直接建在第三储藏洞穴之上，该洞穴含有一个巨大的地下湖——运河网络最初的水源。内设沙赛德建造的水闸机关，在火灾期间释放水库。',
				safeDescription: '钢铁教廷总部。',
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
				safeDescription: '厄尔多犁沟区的一栋废弃建筑。',
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
				description:
					'在幽灵反抗奎林的叛乱中，约三分之一城市被大火摧毁。火灾在幽灵揭露公民利用血金术钉刺勒索镕金术师时引发的骚乱中蔓延。',
				safeDescription: '厄尔多的一个住宅区。',
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
				description: '革命后，该地区的许多木质贵族房屋被公民政权烧毁。',
				safeDescription: '一处富裕街区，路面被精心清扫干净灰烬。',
				confidence: 'probable',
			},
			'citizens-home': {
				name: '公民之家',
				description:
					'奎林的总部，一名在统御主倒台后夺取权力的司卡。他的政权将厄尔多的贵族宅邸变为公共住所或处决场所。',
				safeDescription: '厄尔多白色街道区的一栋建筑。',
				confidence: 'probable',
			},
			'interchange-building': {
				name: '转运大楼',
				description: '不同层级之间货物转运的物流中心。',
				confidence: 'probable',
			},
			'old-city-square': {
				name: '旧城广场',
				description: '厄尔多的中心，在公民统治期间成为激进政治动荡和公开焚烧的场所。',
				safeDescription: '厄尔多的历史中心。',
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
				description:
					'被义务官阿拉丹·约门在夺取控制权后用作宫殿。约门在此举办贵族舞会，重建终极帝国的社会结构。',
				safeDescription: '奥里尔家族的主要府邸，坐落在岩架上的高地。',
				confidence: 'probable',
			},
			'storage-cache': {
				name: '储藏洞穴',
				description: '隐藏在北部岩石中的秘密粮食和电金库藏。',
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
		...enData.movements,
		kelsier: {
			...enData.movements.kelsier,
			'tfe-0': {
				title: '幸存者回归',
				description:
					'凯西尔抵达崔斯汀伯爵的种植园，贵族正在宴请凡处伯爵派来的义务官，希望达成商业合作。当晚，当一名年轻司卡女孩即将被带到崔斯汀面前时，凯西尔出手：杀死崔斯汀及其所有义务官、监工和士兵，并放火烧毁庄园。',
			},
			'tfe-1': {
				title: '暗中观察者',
				description:
					'凯西尔从暗处观察卡蒙帮会的运作，注意到纹无意识地使用镕金术：一个拥有迷雾之子力量的街头孤儿。',
			},
			'tfe-3': {
				title: '招募纹',
				description:
					'纹试图逃离卡蒙的藏身处，但乌列夫出卖了她。凯西尔介入并将她从卡蒙的殴打中救出。他提拔米列夫为帮主，拿走三千博兴作为报酬，并租用藏身处召开晚间会议。随后测试纹并确认她是迷雾之子。',
			},
			'tfe-5': {
				title: '窃取天金',
				description:
					'凯西尔、多克森和纹登上屋顶。凯西尔装备就绪后潜入迷雾，袭击凡处家族要塞窃取天金。他成功拿到保险箱，但回程中不得不对付杀雾人。带着天金逃脱并资助叛军。',
			},
			'tfe-6': {
				title: '团队就位',
				description:
					'在克拉布斯的木工作坊里，凯西尔和团队制定摧毁最后帝国的计划。马什终于到来，众人离开让两兄弟私下交谈。纹回来偷听。',
			},
			'tfe-7': {
				title: '训练学徒',
				description:
					'凯西尔带纹进行第一晚的训练，给她一件迷雾斗篷。他在陆沙德城墙附近教她八种基础金属，靠近钢门。',
			},
			'tfe-8': {
				title: '雷诺伪装',
				description:
					'凯西尔带纹越过陆沙德城墙，他们遇到一个迷雾幽灵。沙赛德在大路上驾马车等候，将他们送往费利司。途中凯西尔给纹三千博兴和离开的选择。在雷诺领主庄园，他为纹建立了瓦莱特小姐的伪装身份。',
			},
			'tfe-10': {
				title: '策划革命',
				description:
					'回到陆沙德后，凯西尔在克拉布斯的店铺里召开进度会议。事先询问沙赛德关于一种拥有力量的宗教——沙赛德告诉他贾伊教——以及是否有宗教认为灭绝贵族是神圣之举。当哈蒙德的一名士兵报告教会发现了卡蒙旧藏身处时，会议终止。',
			},
			'tfe-10.2': {
				title: '仓库集会',
				description:
					'凯西尔在仓库区的秘密集会上向司卡工人宣讲革命。布利兹和他的安抚师与搅动师操纵人群，利用哈辛幸存者的传说激发叛反。',
			},
			'tfe-11': {
				title: '卡蒙藏身处屠杀',
				description:
					'凯西尔和团队检查被摧毁的藏身处。之后凯西尔在乞丐中寻找卡蒙，发现卡蒙的尸体被挂在嘴里插入的钩子上，手腕和脚踝被绑缚，身体遭受了酷刑。这种处决方式专门用于滥用镕金术的人。纹成功地跟踪了凯西尔。',
			},
			'tfe-13': {
				title: '费利司的计划',
				description:
					'凯西尔在费利司雷诺领主庄园与纹和沙赛德会面，回顾纹第一次舞会获得的情报。得知纹的父亲也在舞会上后，他消失在迷雾中返回陆沙德。',
			},
			'tfe-14': {
				title: '宫殿侦察',
				description:
					'凯西尔带纹前往克瑞迪克·肖，探查统御主每三天拜访一次的建筑。他们一路战斗进入，但三名钢铁审判官合围而来。凯西尔在混乱中与纹失散。纹身负重伤逃脱，手中紧握一本神秘的皮革书册。',
			},
			'tfe-15': {
				title: '克瑞迪克·肖之后',
				description:
					'团队质疑凯西尔带纹去克瑞迪克·肖的决定。在他们去寻找她之前，沙赛德把她抱了回来。多克森对这次冒险怒不可遏。凯西尔和多克森注意到那本皮革书；沙赛德确认它是用科连尼文写成的——统御主升华前的故乡语言。',
			},
			'tfe-16': {
				title: '守护纹',
				description: '凯西尔留在克拉布斯店铺照顾纹从克瑞迪克·肖的伤势中恢复，在她终于醒来时在场。',
			},
			'tfe-17': {
				title: '雷诺庄园会议',
				description:
					'凯西尔与布利兹、叶登和多克森一同前往费利司，在雷诺领主庄园开会讨论叛乱的下一阶段。',
			},
			'tfe-19': {
				title: '煽动家族战争',
				description:
					'凯西尔制造混乱以挑起家族战争，将恩特朗伯爵明显被暗杀的尸体放入泰基尔家族要塞的花园。然后前往烟灰区会见霍伊德——一个伪装成街头联络人的线人——了解雷诺家族的传闻。他还得知艾拉瑞尔小姐是一名安抚师。',
			},
			'tfe-19.2': {
				title: '会见斯特拉夫领主',
				description:
					'凯西尔伪装成生病残疾的司卡乞丐前往阿尔斯特罗姆广场，会见凡处家族族长斯特拉夫·凡处领主。他发现哈辛幸存者的传言正在扩散，还有人谈论第十一种金属。',
			},
			'tfe-19.3': {
				title: '返回雷诺',
				description:
					'凯西尔沿荆棘小路返回雷诺庄园，与纹、沙赛德和雷诺交换情报。他训诫纹关于贵族的事，坚称他们不在乎司卡人，她必须远离艾蓝德。',
			},
			'tfe-20': {
				title: '监督补给',
				description: '凯西尔在费利司的雷诺庄园，监督将武器和物资装载到马车上送往叛军。',
			},
			'tfe-21': {
				title: '叛军',
				description:
					'凯西尔乘驳船沿运河北上时阅读统御主日记的译文。车队在船闸停留，凯西尔和新兵及补给前往叛军训练的洞穴。他克服了对哈辛坑的痛苦记忆，进入阿尔苟洞穴群并检阅了哈蒙德训练的军队。在晚餐时凯西尔操纵比尔格的情绪作为典例。比尔格和德莫决斗；凯西尔用镕金术帮助德莫获胜。',
			},
			'tfe-23': {
				title: '跟踪纹',
				description:
					'凯西尔出现在纹监视艾蓝德一行人的塔楼窗外——他们在哈斯汀家族要塞。他嘲笑他们关于改变世界的理想主义空谈不过是典型的贵族青年行为。两人各自离去。',
			},
			'tfe-24': {
				title: '情况汇报',
				description:
					'凯西尔来到克拉布斯店铺，大部分团队已经聚集。他讨论任务状况，与斯布克、哈蒙德和克拉布斯共饮夜酒。他让哈蒙德去驻军收集情报。',
			},
			'tfe-25': {
				title: '绝望的决定',
				description:
					'在克拉布斯店铺，凯西尔得知司卡叛军袭击了霍尔斯特普驻军，陆沙德驻军正向北进发。他决定尝试警告叛军并让纹吞下五颗锡珠进行长途锡跑北上。',
			},
			'tfe-25.2': {
				title: '霍尔斯特普之灾',
				description:
					'凯西尔和纹连续跑了十六个小时不停地燃烧锡。他们发现叛军残部被瓦尔特鲁克斯驻军包围屠杀。凯西尔想战斗，但纹说服他他们并非不可战胜。他们前往阿尔苟洞穴，那里有两千名士兵在梅尼斯的指挥下幸存。',
			},
			'tfe-26': {
				title: '收拾残局',
				description:
					'从洞穴返回克拉布斯店铺用了两周。团队讨论计划的未来——看起来彻底失败了。布利兹指责凯西尔追逐荣耀。凯西尔承认挫折但拒绝放弃革命。',
			},
			'tfe-26.2': {
				title: '处决',
				description:
					'斯布克报告喷泉广场有处决。团队前往并贿赂某人从屋顶观看。他们目睹大量司卡被屠杀，鲜血倾入喷泉。凯西尔说服团队继续："这就是我们的敌人。没有退路，没有回头。"',
			},
			'tfe-27': {
				title: '新策略',
				description:
					'团队返回克拉布斯店铺规划下一步：在贵族家族之间挑起战争。沙赛德带来马什的信件，指出在曲巷的会面地点。',
			},
			'tfe-27.2': {
				title: '金属金',
				description:
					'凯西尔和纹在马什会面前数小时来到曲巷一栋废弃建筑。等待时凯西尔讲述金——第九种镕金术金属，能让人看到过去的另一个版本。他还解释了储金术并给纹一点金第一次燃烧。马什到来时带着审判教义所低级义务官的纹身，描述了陆沙德的安抚站并透露审判官可以因衰老而死。',
			},
			'tfe-29': {
				title: '雷诺战争会议',
				description:
					'凯西尔在费利司雷诺庄园与大部分团队会合，研究马什提供的陆沙德防御详图。他们发现瑟隆帮会最近被教会袭击。那天晚上无法入睡，凯西尔请沙赛德给他讲几种宗教。',
			},
			'tfe-31': {
				title: '训斥学徒',
				description:
					'纹在凡处家族要塞杀死了艾拉瑞尔小姐——一位成熟的迷雾之子后，凯西尔和纹返回克拉布斯店铺。凯西尔训斥纹鲁莽战斗，但她反驳说贵族和司卡并没有那么不同，艾蓝德·凡处是个好人，值得保护。',
			},
			'tfe-32': {
				title: '发现马什',
				description:
					'凯西尔和纹发现马什的尸体，血液完全被抽干，一具空壳。在克拉布斯店铺他们发现马什的信，解释审判官可能会找到他。',
			},
			'tfe-32.2': {
				title: '摧毁哈辛坑',
				description:
					'凯西尔回到哈辛坑——他遭受最大苦难的地方。杀死所有守卫并向一个叫沃林的司卡伸出手。然后摧毁所有天金晶体，一夜之间切断了统御主最珍贵的资源。',
			},
			'tfe-33': {
				title: '紧急藏身处',
				description:
					'凯西尔回到克拉布斯店铺附近一个潮湿的备用地下室——只有三个房间。他宣布已经摧毁了哈辛坑所有的天金。',
			},
			'tfe-33.2': {
				title: '与审判官之战',
				description:
					'所有人跟随凯西尔到喷泉广场。他们看到斯布克和雷诺领主在一辆行刑马车中。凯西尔在广场上与一名审判官战斗——他几乎确定知道这是个陷阱。',
			},
			'tfe-34': {
				title: '幸存者的最后一战',
				description:
					'凯西尔在喷泉广场与审判官进行殊死搏斗，双方都在燃烧天金。他是推拉大师，以精湛技巧在空中操控金属。他杀死审判官，司卡人开始高呼"哈辛幸存者"。统御主乘黑色马车到达。哈蒙德的一个手下刺了他一矛——他继续前行。两矛——仍然站着。统御主扇了凯西尔一巴掌，从自己身上拔出一根长矛插入凯西尔。他带着微笑死去，成为点燃革命的殉道者。',
			},
			'tfe-35': {
				title: '超越死亡',
				description:
					'在克拉布斯店铺附近的紧急藏身处，团队看到坎得拉——之前的雷诺领主——穿着凯西尔的身体和骨骼：最终的计划。凯西尔给每个成员留了信，附上夺取城市的指示。他的死成为点燃整个陆沙德革命的火花。',
			},
			'woa-1': {
				title: '认知阴影',
				description:
					'凯西尔死后在升华之井中作为认知阴影觉醒，被困在两个领域之间。霍德通过垂直界域到来，责备凯西尔摧毁了哈辛深坑，随后过渡到物理领域并偷走了一颗拉瑞辛之珠。莱拉斯（存留）出现，向凯西尔讲解三个领域：物理、认知和灵性。',
			},
			'woa-5': {
				title: '观察世界',
				description:
					'凯西尔借助灭绝的脉冲波动观察深坑之外的世界。他注意到灭绝特别关注纹——某位迷雾之子。他看着纹巡逻陆沙德城墙，与她的新狼犬坎得拉一起训练，并开始感知到试图引导她的迷雾之灵（存留）。',
			},
			'woa-12': {
				title: '灭绝的阴谋',
				description:
					'凯西尔发现灭绝正在篡改瑟兰修道院中的泰瑞司宗教经文。与此同时，马什——现已完全被灭绝控制——在修道院抛弃了沙赛德并消失无踪。凯西尔无助地看着沙赛德发现科万的铭文并开始他的信仰危机。',
			},
			'woa-26': {
				title: '观察围城',
				description:
					'凯西尔看着纹在斯特拉夫的谈判中展示可怕的力量，然后看到依蓝德被议会罢免。灭绝策划克罗斯军队的逼近，同时操纵赞恩孤立纹。凯西尔对依蓝德统治陆沙德感到愤怒，但逐渐尊重他的努力。他注意到灭绝故意让纹看到他攻击依蓝德。',
			},
			'woa-57': {
				title: '升华之井密室',
				description:
					'纹和依蓝德向升华之井下降。存留的外表变得更加不像人类——他的脸半毁，身体腐烂。他告诉凯西尔力量绝不能释放，但纹会被欺骗。马什在灭绝的控制下在入口处攻击沙赛德。绝望的凯西尔抓住存留的手臂并用它划伤依蓝德，以激励纹使用力量。',
			},
			'woa-60': {
				title: '灭绝获释',
				description:
					'纹在升华之井释放了力量而非使用它，粉碎了灭绝的牢笼。力量冲破屏障。存留引导纹将最后一颗拉瑞辛之珠喂给依蓝德，将他转变为迷雾之子并挽救了他的生命。凯西尔看着灭绝的完整意识席卷整个司卡德利亚，世界随之改变。',
			},
			'hoa-0': {
				title: '幸存者的悲痛',
				description:
					'克罗斯战役后的日子里，凯西尔离开升华之井，通过陆沙德的认知领域映射前往泛达府邸，发现幸存的团队成员正在举行葬礼。他得知多克森和克拉布斯已经牺牲——都是英雄。凯西尔愤怒地抓住存留，指责他的冷漠，却反而感受到存留对人类的深沉爱意，并拥抱了他。存留向他展示了南方遥远的人群，并提到有人或许能帮他完成不可能的事。',
			},
			'hoa-3': {
				title: '克丽丝与纳兹',
				description:
					'追随存留向东延伸的触须离开城市，凯西尔到达陆沙德湖，此处的认知领域感觉更坚实。他发现一处篝火旁有两名陌生人——克丽丝和纳兹——他们认出了他并对他在此领域存在感到惊讶。克丽丝向他讲解关于十六个碎瑛和艾东纳修的知识。纳兹将自己的刀赠予凯西尔，并指引他前往艾尔堡垒。',
			},
			'hoa-5': {
				title: '神性幻象',
				description:
					'存留凝视凯西尔的双眼，给予他神性和可能未来的幻象。在所有未来中凯西尔都没有击败灭绝，但他感觉到纹有机会——如果他前往西方。他与灭绝的联系远比与存留的联系更深厚，这一事实令他不安。存留坚持认为艾尔不会帮助，但凯西尔并不打算请求。',
			},
			'hoa-8': {
				title: '向西奔跑',
				description:
					'凯西尔沿着帝国运河向西奔跑，前往海洋。作为认知阴影，他不会疲惫——只要他不去想疲惫。他穿过因迷雾病蔓延而空无一人的城镇，灰烬比以往任何时候都更厚地落下，灭绝加速着世界的衰败。',
			},
			'hoa-12': {
				title: '朗斯福洛的记忆',
				description:
					'在朗斯福洛——他曾为一名被谋杀的司卡女孩杀死贵族以复仇的城镇——凯西尔暂停脚步，被疲惫与内疚击中。审判官随后到来，杀了更多人。他询问存留玫尔在哪里。楼内一个疯子听到了他的话却无法理解。意识到自己已经奔跑了多久，他感到离开陆沙德以来第一次真正的疲惫，随后继续踏入空旷的西部。',
			},
			'hoa-15': {
				title: '孤独之路',
				description:
					'在朗斯福洛以西，凯西尔停在一处篝火坑旁，发现自己仅用意念就能点燃火焰。灰烬比以往更密集地落下，他看着司卡难民不断向西逃亡以逃离日益逼近的毁灭。彻底孤独的他渴望任何形式的交流——哪怕是和霍德——继续向遥远海洋的坚定行进。',
			},
			'hoa-18': {
				title: '灭绝的嘲弄',
				description:
					'经过数周奔跑，凯西尔到达西海。阿提（灭绝）出现，独白关于衰败的不可避免性，告诉他终结已非常接近。他嘲笑凯西尔在这里做不了任何好事——凯西尔由此推断相反的情况必然成立。灭绝嘲笑第十一种金属是他的骗局，试图摧毁凯西尔的意志。凯西尔继续前行，踏上认知领域的海洋。',
			},
			'hoa-21': {
				title: '思维之海',
				description:
					'凯西尔仅凭一支临时火把在无尽黑暗中穿行认知领域海洋。远离司卡德利亚，他感到灵魂被拉扯——这是离开自己世界的迹象。他在一片奇异的丛林中跋涉，丛林逐渐稀疏，树木变为锯齿状的石头雕塑，直到他看见前方耀眼的光芒：艾尔堡垒。',
			},
			'hoa-24': {
				title: '艾尔堡垒',
				description:
					'凯西尔抵达司卡德利亚远方的巍峨光辉白石堡垒。他双手渗入石壁攀上墙垣，偷听艾尔——古代艾岚人——的计划：他们守卫着一个能捕获存留神力的装置，打算自己夺取碎瑛。凯西尔发现球体装置的描述并决心偷走它，但认定武力太冒险。',
			},
			'hoa-30': {
				title: '盗取宝球',
				description:
					'凯西尔追踪骑马携球出行的艾尔人。他假扮灭绝恐吓他们，用纳兹的刀砍伤马腿并制造了一个燃烧斗篷的傀儡。当阿洛诺与队伍分离时，他击倒她的护卫并从阴影中低语让她留下宝球。她惊恐照做，凯西尔带着他的战利品开始了漫长的东归奔跑。',
			},
			'hoa-35': {
				title: '法德雷克斯与霍德',
				description:
					'经过数周横跨大陆的奔跑，存留告诉凯西尔前往法德雷克斯。一道纤细的光线引导他穿过城市，来到一处挤满乞丐的广场——在那里他找到了纹，并再次遇见霍德，后者震惊地认出他却未加理会。凯西尔拼命试图警告纹关于她的耳环钉刺以及避开霍德，但她似乎只能模糊地听到。灭绝以灵性力量攻击凯西尔，揭示第十一种金属从一开始就是他的操纵。',
			},
			'hoa-42': {
				title: '灭绝的棋子揭晓',
				description:
					'每次凯西尔试图接触纹，灭绝都阻挡他的去路。在法德雷克斯城外，他看着克罗斯在灰烬丘攻击依蓝德的军队——当它们死去时，他看到了它们的真面目：来自各行各业的人类，由血金术创造。存留向他展示了一个幻象：每一个被灭绝通过钉刺控制的人——遍布大地的审判官们、戴着耳环的纹、陆沙德王座上的彭罗德王、厄尔多的斯布克，以及他的兄弟马什——此刻正在陆沙德将一根钉刺插入彭罗德的心脏。',
			},
			'hoa-50': {
				title: '含糊的警告',
				description:
					'凯西尔在法德雷克斯城外的军营中搜索多日，寻找一个半疯的士兵作为沟通渠道来警告纹：不要相信任何被金属穿透的人。士兵把消息传得含糊不清，只引发了一场斗殴。灭绝再次出现嘲笑他。意识到自己在此无法再做什么——灭绝的注意力过于集中在纹和依蓝德身上——凯西尔将意识转向别处。在遥远的北方厄尔多，一个名叫斯布克的年轻锡眼正怀着对幸存者的炽热虔诚。那种联系或许足够强大来利用。',
			},
			'hoa-54': {
				title: '幸存者之影',
				description:
					'凯西尔抵达厄尔多，寻找那个对幸存者的虔诚如灯塔般燃烧的年轻锡眼。他发现斯布克正受灭绝影响——体内的血金术钉刺，毁灭之神低声催促他杀戮。但灭绝在此的注意力比法德雷克斯薄弱。凯西尔等待时机，观察斯布克在城中行动，感知他们之间联系的线索日益增强。',
			},
			'hoa-58': {
				title: '斯布克的希望',
				description:
					'凯西尔在厄尔多找到斯布克，灭绝正催促他杀人。他们之间的联系比任何人都强——斯布克对幸存者的虔诚创造了独特的纽带。凯西尔反复向斯布克低语"希望"，最终斯布克拔出了自己的血金术钉刺。凯西尔随后大喊"活下去"，斯布克在灭绝焚烧城市之际冲入行动。',
			},
			'hoa-62': {
				title: '半梦之会',
				description:
					'斯布克和凯西尔在绿色草地上的一场半梦中相遇——年轻的锡眼精神受到创伤但意志完好。凯西尔告诉斯布克他是英雄并为他骄傲。他催促斯布克传递消息给纹：凡是被金属穿透的人都可以被灭绝控制。斯布克在苏醒时坚定地点头。',
			},
			'hoa-68': {
				title: '接管存留',
				description:
					'感到存留正在死去，凯西尔用纳兹的刀砸碎艾尔的宝球，在一番绝望挣扎后接管了碎瑛的力量。但灭绝大笑——凯西尔只是一个记忆的残影，无法完全掌控它。他尝试的一切都被阻挡。他听到马什在自己意识中的抗争，意识到他必须间接行动，而非与灭绝正面对抗。',
			},
			'hoa-69': {
				title: '信使之死',
				description:
					'凯西尔看着戈拉德尔从厄尔多策马而来，身负斯布克刻在金属上的警告——但灭绝召唤了马什。审判官降落在信使身上杀死了他，向主人朗读那则信息。凯西尔在士兵的灵魂穿过认知领域时向他致谢，然后陷入绝望。但一个念头穿透阴霾：没有天金灭绝就是不完整的。仍有希望。',
			},
			'hoa-78': {
				title: '让渡力量',
				description:
					'凯西尔看着纹在克雷迪克·肖与剩余审判官战斗——然后马什折磨她，将钉刺插得更深。但马什已读过从戈拉德尔尸体上取下的警告。他伸手拔出纹耳中的耳环钉刺。凯西尔抓住时机，攻击灭绝以分散他的注意力，纹吸入迷雾并接管存留之力。他的灵魂在将碎瑛让渡给她时撕裂，但灭绝过于分心而未能将他消灭。',
			},
			'hoa-80': {
				title: '灵魂修复',
				description:
					'凯西尔在痛苦中挣扎。死亡的拉扯再次拖拽着他——但他坚持下去，再次选择不死——这是因曾升华而对他开放的选择。他的灵魂因将存留让渡给纹而深受创伤，但随着时间推移它开始修复。灭绝过于分心而未能了结他。从认知领域，凯西尔注视着聚集在哈辛深坑的数十万难民、移动天金的坎得拉，以及纹——如今的存留——在风中低语引导着依蓝德。',
			},
			'hoa-81': {
				title: '深坑的守望者',
				description:
					'凯西尔观看最终战役展开。依蓝德向先知者们发表演讲，带领他们冲入克罗斯大军。依蓝德燃烧了大量天金长达数小时——然后凯西尔看到他迸发出不可能的辉煌，一次性燃烧杜拉铝与天金，闪现神明般的洞察力。依蓝德在斧头砍入胸膛的同时将剑刺入马什脖颈。他含笑死去。然后纹发起攻击——存留以两个碎瑛都无法承受的愤怒打击灭绝。阿提和纹双双殒命。存留与灭绝之力被释放于世。',
			},
			'hoa-82': {
				title: '彼方之境',
				description:
					'凯西尔考虑自己接管两个碎瑛。然后依蓝德出现在认知领域——接着是纹。他们终于团聚相拥。阿提随后到来，凯西尔揍了他一拳。他们一起目睹沙赛德伸出双手同时接管存留与灭绝——似乎应该属于彼此的两种力量——化身为和谐。沙赛德提出将纹送回，但她知道那不会成功。她希望与依蓝德一同离开。纹感谢凯西尔为她做的一切，随后与依蓝德踏入彼方。',
			},
			'hoa-83': {
				title: '幸存者的抉择',
				description:
					'世界毁灭又重生。在变革期间，凯西尔同时看见了三个领域。当一切结束，他再次被困在认知领域。沙赛德（和谐）来访，承认他无法将纹和依蓝德从彼方带回。凯西尔请求他治愈斯布克并使其成为迷雾之子。当沙赛德说回物理领域没有可能时，凯西尔断定和谐是个糟糕的骗子——并开始密谋。',
			},
			'hoa-83.2': {
				title: '幸存者的谋划',
				description:
					'凯西尔说服斯布克尝试血金术——既为延长斯布克的寿命，也为找到自己重返物理领域的方法。哈辛幸存者无意永远当一个认知阴影。',
			},
		},
		vin: {
			...enData.movements.vin,
			'tfe-1': {
				title: '街头孤儿',
				description:
					'纹被叫到帮主卡蒙面前，卡蒙粗暴地对待她。她无意识地使用她的运气——一种镕金术安抚——来平息他。卡蒙伪装成杰杜领主，准备诈骗钢铁教会。纹对义务官长官莱尔德使用运气使其不拒绝卡蒙的请求。',
			},
			'tfe-2': {
				title: '教会骗局',
				description:
					'卡蒙假扮杰杜领主带纹到财政执事所诈骗教会。纹对高级长官使用运气，后者交出三千博兴。凯西尔和多克森在等候室察觉纹的镕金术脉冲。之后他们看到一名钢铁审判官跟踪卡蒙的随从。',
			},
			'tfe-4': {
				title: '被招募',
				description:
					'凯西尔在克拉布斯的作坊向团队展示推翻最后帝国的计划。团队同意，只有克拉布斯走出去后又回来。凯西尔揭示纹是迷雾之子并展示第十一种金属。',
			},
			'tfe-7': {
				title: '迷雾之子训练',
				description:
					'凯西尔带纹进行第一晚训练并给她迷雾斗篷。教她八种基础金属——锡、白镴、铁、钢、锌、黄铜、铜和青铜——在陆沙德城墙结束。',
			},
			'tfe-8': {
				title: '雷诺庄园',
				description:
					'纹和凯西尔在黑夜中翻越陆沙德城墙，纹第一次遇见迷雾幽灵。沙赛德在路上驾马车等候并把他们送到费利司。途中凯西尔给纹三千博兴和离开的选择。她拿了钱但留下来看看结局。在雷诺领主庄园，他建议纹扮演瓦莱特小姐。',
			},
			'tfe-9': {
				title: '与沙赛德训练',
				description:
					'纹和凯西尔在雷诺庄园进行训练对决。之后纹剪了头发，沙赛德考核她的贵族伪装并讲述特雷教。凯西尔和沙赛德私下讨论纹的进步；凯西尔宣布周末将在凡处家族要塞参加舞会。',
			},
			'tfe-10': {
				title: '回到团队',
				description:
					'纹从费利司回到陆沙德跟团队的迷雾人学习金属，从布利兹开始学习安抚。哈蒙德到来并讨论推翻帝国的道德问题。',
			},
			'tfe-10.2': {
				title: '仓库集会',
				description:
					'纹参加仓库区秘密集会，凯西尔向司卡工人宣讲革命。之后凯西尔在克拉布斯店铺召开进度会议。纹和莱斯蒂波恩斯谈论马什。当哈蒙德的士兵报告教会发现卡蒙旧藏身处时会议结束。',
			},
			'tfe-11': {
				title: '卡蒙藏身处屠杀',
				description:
					'纹和团队检查被摧毁的藏身处，到处都是尸体。纹看到乌列夫——有人徒手撕开了他的胸腔。沙赛德念诵卡齐宗教的祈祷词。米列夫的尸体被绑在椅子上，明显遭受了酷刑。',
			},
			'tfe-12': {
				title: '凡处要塞第一次舞会',
				description:
					'纹参加凡处要塞的第一次舞会，沙赛德驾车。凯西尔在途中出现给了建议后消失在迷雾中。纹以瓦莱特·雷诺小姐的身份出场。在晚宴上她看到了大厅对面的父亲。她拒绝了舞蹈邀请退到楼上阳台，在那里与艾蓝德·凡处第一次交谈。',
			},
			'tfe-13': {
				title: '返回费利司',
				description:
					'沙赛德在雷诺庄园询问纹与艾蓝德的互动。纹的真实性格开始显现。凯西尔得知纹的父亲曾在舞会上并返回迷雾中。',
			},
			'tfe-14': {
				title: '深入克瑞迪克·肖',
				description:
					'凯西尔带纹到克瑞迪克·肖，他们一路战斗进入。纹第一次杀人。三名钢铁审判官合围。纹抓住一本皮革书册防御。燃烧天金暂时逃脱，但一名审判官将黑曜石斧头砍入她的侧腹。纹带着书逃走但失去意识——某种东西分散了追击审判官的注意并以保护性的拥抱环住她。那不是凯西尔。',
			},
			'tfe-15': {
				title: '受伤',
				description:
					'团队质疑凯西尔的决定。沙赛德把纹抱了回来。给她白镴帮助愈合。沙赛德手术后哈蒙德把她抬到房间休息。凯西尔和多克森注意到那本书；沙赛德确认它是科连尼文写的。',
			},
			'tfe-16': {
				title: '在克拉布斯店铺恢复',
				description:
					'纹在克拉布斯店铺休息两周后醒来。斯布克一直守着她并讲述凯西尔如何给他起了绰号。与多克森交谈时纹意识到沙赛德有非常不同寻常之处。',
			},
			'tfe-16.2': {
				title: '返回费利司',
				description:
					'又休息了几天后，纹返回费利司雷诺庄园。她与沙赛德交谈，了解蓄存者是什么并得知所有泰瑞司侍从都是被阉割的。',
			},
			'tfe-17': {
				title: '雷诺庄园花园',
				description:
					'纹抱怨在雷诺庄园四周无聊的疗养。团队成员到来讨论消息。纹说服凯西尔让她参加下一次舞会。后来他们谈论玫尔、凯西尔的动机，他解释了啪——唤醒镕金术能力的创伤事件。',
			},
			'tfe-18': {
				title: '艾拉瑞尔要塞舞会',
				description:
					'纹与沙赛德参加艾拉瑞尔要塞的舞会。艾蓝德照常坐在她桌旁看书。他赞美她的裙子令她目瞪口呆。她与几位贵族跳了舞并打听艾蓝德；听说了艾拉瑞尔小姐。注意到尚可以安抚。离开舞会时纹看到一名城市守卫在迷雾中割断了一名年轻司卡厨工的喉咙。',
			},
			'tfe-19': {
				title: '返回费利司',
				description:
					'凯西尔沿荆棘小路返回雷诺庄园并与纹、沙赛德和雷诺会面。他训诫纹关于贵族的事，坚称他们不在乎司卡，她必须远离艾蓝德·凡处。',
			},
			'tfe-20': {
				title: '探索者课程',
				description:
					'纹从陆沙德回来看到雷诺庄园前有武器箱准备送给叛军。马什随后到来教她探索——用青铜探测其他镕金术师——以及镕金术的其他细节。',
			},
			'tfe-22': {
				title: '日记',
				description:
					'纹在雷诺庄园阅读她的统御主日记副本时斯布克出现。他说多克森来拿更多武器，然后脸红紧张地递给她一块手帕便逃跑了。沙赛德后来解释一个年轻人这样做表示认真求爱的意愿。等候多克森时纹与沙赛德讨论日记中的泰瑞司人；沙赛德揭示储金术的秘密和蓄存者的建立。然后纹与多克森交谈，他讲述了德文歇领主如何夺走了他爱的女人并在第二天早上杀了她。',
			},
			'tfe-23': {
				title: '哈斯汀要塞舞会',
				description:
					'纹参加哈斯汀要塞舞会。尚小姐让纹下次检查艾蓝德的书。纹找到艾蓝德问他是否与司卡女人在一起过。他坦白父亲在他十三岁时强迫他，那个女人之后被杀了，但他再也没做过。艾蓝德给纹一块手帕。他与朋友离开后纹用镕金术跟踪他们到一座塔楼讨论统御主的失败。凯西尔突然出现嘲笑他们的想法。',
			},
			'tfe-24': {
				title: '团队会议',
				description:
					'纹和凯西尔到达克拉布斯店铺，大部分团队已集合。凯西尔讨论任务状况，纹意识到她多么喜欢新生活。凯西尔、斯布克、哈蒙德和克拉布斯共饮夜酒。',
			},
			'tfe-24.2': {
				title: '参观驻军',
				description:
					'纹换上街头少年的衣服与哈蒙德一起参观陆沙德驻军学习白镴。哈蒙德解释许多士兵是普通司卡人。名叫瑟特斯的守卫通知他们驻军正在动员——司卡叛军袭击了北方的霍尔斯特普驻军。',
			},
			'tfe-25': {
				title: '紧急消息',
				description:
					'在克拉布斯店铺，哈蒙德带来消息陆沙德驻军向霍尔斯特普进发。凯西尔让纹吞下五颗锡珠向北奔跑警告叛军。',
			},
			'tfe-25.2': {
				title: '锡金跑步',
				description:
					'纹和凯西尔连续跑了十六个小时燃烧锡进行绝望的奔跑。他们发现叛军残部被瓦尔特鲁克斯驻军包围屠杀。凯西尔想战斗，纹说服他们并非不可战胜。他们前往阿尔苟洞穴，两千名士兵在梅尼斯的帮助下幸存。',
			},
			'tfe-26': {
				title: '恢复',
				description:
					'纹精疲力竭地躺在克拉布斯店铺。回陆沙德用了两周。凯西尔冲了进来；布利兹指责他追逐荣耀。凯西尔承认挫折但拒绝放弃。',
			},
			'tfe-26.2': {
				title: '处决',
				description:
					'斯布克报告喷泉广场的处决。团队前往并上了屋顶。纹指出她的父亲——一个名叫特维迪安的义务官，领主长官，最高级义务官。他们看着妇女和儿童从囚车中被拖出处决，喷泉被鲜血染红。',
			},
			'tfe-27': {
				title: '规划下一步',
				description:
					'团队返回克拉布斯店铺。凯西尔、纹和其他人重新策划如何推进并引发家族战争。沙赛德带着马什的信和会面指示到来。',
			},
			'tfe-27.2': {
				title: '会见马什',
				description:
					'凯西尔和纹去曲巷废弃建筑与马什会面。等待时凯西尔讲述金——第九种镕金术金属。马什带着审判教义所低级义务官纹身到达。他揭示教会在司卡区域部署安抚师恒定安抚，由烟纱者掩护。还确认审判官可因衰老而死。',
			},
			'tfe-28': {
				title: '莱凯要塞舞会',
				description:
					'纹参加莱凯要塞舞会并开始散布谣言激化家族战争。艾蓝德出现——说想吻她但纹坚持他不真正了解她。他们散步时艾蓝德透露凡处家的财富全部来自哈辛坑的天金开采。他提到泰基尔家族被哈斯汀家族杀害并试图说服瓦莱特离开陆沙德。',
			},
			'tfe-29': {
				title: '最后的翻译',
				description:
					'纹在雷诺庄园阅读沙赛德的最后一次日记翻译并对没有更多感到失望。沙赛德更详细地解释储金术，纹尝试燃烧他的一个锡金属意识。后来凯西尔加入团队研究马什的地图。他们发现瑟隆帮被袭击，纹怀疑审判官仍在追踪她。',
			},
			'tfe-30': {
				title: '凡处舞会',
				description:
					'纹与沙赛德参加凡处要塞最后的家族舞会。克利丝小姐暴露为线人并试图勒索雷诺家族。用一条蓝宝石项链交换，克利丝告诉纹艾拉瑞尔刺客将在今晚谋杀艾蓝德。纹用镕金术强迫克利丝全部供出。她打碎彩色玻璃窗逃出。外面她对付两个打手、两个射币手和两名迷雾之子——其中之一是尚·艾拉瑞尔。纹引诱她先耗尽天金然后杀死她。',
			},
			'tfe-31': {
				title: '决斗之后',
				description:
					'纹裹着绷带衣衫褴褛地闯入克拉布斯的厨房。凯西尔训斥她救艾蓝德，但纹大喊司卡和贵族没有区别——艾蓝德是好人。在屋顶她告诉凯西尔凡处家族管理哈辛坑并分享审判官能透过铜云看见的理论。凯西尔测试并确认了这个理论。',
			},
			'tfe-32': {
				title: '屋顶守望',
				description:
					'纹和斯布克在克拉布斯店铺屋顶站岗。斯布克教她锡金技巧：不只是增强感官，而是过滤干扰。后来凯西尔和纹发现马什的尸体——血液被完全抽干。他们发现一封信解释审判官可能会找到他。',
			},
			'tfe-33': {
				title: '紧急藏身处',
				description:
					'团队搬到克拉布斯店铺附近一个潮湿的备用地下室——三个房间。凯西尔宣布摧毁了哈辛坑所有天金。斯布克作为锡金哨兵站岗。',
			},
			'tfe-33.2': {
				title: '与审判官之战',
				description:
					'所有人跟随凯西尔到喷泉广场。看到斯布克和雷诺领主在行刑马车中。凯西尔在广场与审判官战斗。艾蓝德看到雷诺的仆人被关押并呼唤瓦莱特但找不到她。',
			},
			'tfe-34': {
				title: '幸存者之死',
				description:
					'凯西尔在喷泉广场与审判官进行全面对决——双方都在燃烧天金。纹从上方观看。凯西尔是真正的推拉大师。他杀死审判官，司卡人高呼"哈辛幸存者"。统御主乘黑色马车到达。凯西尔被杀。纹跳下去在他死去时抱住他。',
			},
			'tfe-35': {
				title: '幸存者的遗产',
				description:
					'纹回到紧急藏身处。她愤怒凯西尔不诚实——他计划好去死和抛弃她。沙赛德给予安慰。外面司卡人在谈论迷雾之主。在附近仓库团队看到坎得拉以凯西尔的形态出现。凯西尔留下信件附带夺取城市的指示。纹的信说他从未解开第十一种金属的谜。她决定去发现统御主隐藏了什么。',
			},
			'tfe-36': {
				title: '深入克瑞迪克·肖',
				description:
					'纹无声地走向克瑞迪克·肖，鼓励外面的守卫加入叛军。在里面她杀死了两名审判官。在下一个房间一个老人坐在椅子上。一名审判官抓住纹的脖子——老人开口说话，审判官们称他为统御主。但纹困惑：喷泉广场的统御主是个年轻人。她燃烧第十一种金属看到老人旁边有两个幽灵般的身影。',
			},
			'tfe-37': {
				title: '营救与揭示',
				description:
					'审判官迫使纹燃烧一种能抵消所有其他金属的金属。她被带到统御主的王座前——年轻版本，杀死凯西尔的人。她的父亲特维迪安被审判官处决。纹发现仁从未出卖她：他忍受了酷刑并告诉审判官她早已饿死。沙赛德被带到她的牢房释放储金力量撞开了门。艾蓝德和六名士兵冲入。纹找到她的斗篷和金属药瓶。艾蓝德现在知道她是迷雾之子。她捧住他的头亲吻了他然后去杀统御主。',
			},
			'tfe-38': {
				title: '统御主之弑',
				description:
					'纹在克瑞迪克·肖的尖塔间跳跃而上。审判官卡尔抓住她的脖子，但第二个审判官走过来从卡尔脖子里拔出一根金属钉杀死了他。那是马什——活着的，身上有十一根钉。他杀了所有其他审判官。统御主的真名是拉希克：他杀了永世英雄取而代之。纹扯下统御主的手镯。失去了储金的青春，他变成了虚弱的老人。沙赛德带着金属药瓶出现。纹将长矛刺入他的心脏。一千年的压迫终结。',
			},
			'tfe-39': {
				title: '新纪元',
				description:
					'沙赛德、马什和纹站在司卡区附近一栋建筑的屋顶上。沙赛德解释统御主既是储金术师又是镕金术师——手镯储存了他的青春。马什描述了他的存活和转变：十一根金属钉——两根穿过眼睛，八根在胸口，一根在背部。他还谈到坎得拉——从迷雾幽灵进化而来的生物——现在视纹为主人。',
			},
			'tfe-39.2': {
				title: '纹与艾蓝德',
				description:
					'纹从凡处要塞外的迷雾中秘密观察艾蓝德。他与司卡和贵族领袖的会议进展顺利——在一场精彩的演讲后所有人接受他为国王，连沙赛德没有金属意识也无法完全记住。艾蓝德起草新的法典。纹想起仁从未把她出卖给审判官：有人真的爱着她。带着这份记忆她跑向艾蓝德，两人拥抱。',
			},
			'woa-1': {
				title: '城市守护者',
				description: '纹每晚巡逻陆沙德城墙，注视威胁，三支军队缓缓向这座新获自由的城市汇聚。',
			},
			'woa-2': {
				title: '迷雾中的伏击',
				description:
					'纹在泛达府邸南面靠近克雷迪克·肖处遭到八名镕金术师伏击。一名神秘的迷雾之子——守望者——出手相助，帮她杀死或驱散她们。她怀疑刺客是围城军队之一派来的。',
			},
			'woa-3': {
				title: '迷雾之灵',
				description:
					'纹在屋顶上观察泛达府邸时遭遇迷雾之灵——一个半透明的人影，指向某处看不见的东西。她回到依蓝德的书房，哈姆带来情报称刺客很可能是凯特王派来的。',
			},
			'woa-5': {
				title: '奥瑞瑟重生',
				description:
					'纹走在陆沙德的肯顿街市集上，买下一只猎狼犬作为坎得拉奥瑞瑟的新身体。她发现了一种新的镕金术金属——杜拉铝——并返回泛达府邸测试其威力。',
			},
			'woa-6': {
				title: '庭院格斗',
				description:
					'纹在泛达府邸庭院与哈姆格斗训练，测试战斗技巧，奥瑞瑟以新猎狼犬形态旁观。斯布克从侦察任务中归队。',
			},
			'woa-8': {
				title: '追击守望者',
				description:
					'纹巡逻陆沙德，在城市屋顶间追逐守望者——那位神秘的迷雾之子。追逐在喷泉广场附近结束，她在那里试验燃烧杜拉铝并发现其毁灭性的增强效果。',
			},
			'woa-10': {
				title: '守护议会',
				description:
					'纹和哈姆在依蓝德向议会发表演讲时保护他。观众中有一名陌生的泰瑞司女性。会议期间有消息传来：第二支军队——凯特王的部队——已在陆沙德城外出现。',
			},
			'woa-11': {
				title: '救布利兹',
				description:
					'纹与依蓝德和克拉布斯一起登上城墙侦察凯特的军队。当布利兹在下方遇险时，纹用杜拉铝强化的钢推救了他——以可怕的力道射出一枚硬币。回到泛达府邸，团队发现了坎得拉的骨头，引发了对冒名顶替者的担忧。',
			},
			'woa-13': {
				title: '迷雾之灵归来',
				description:
					'纹注意到迷雾每晚都更早降临，搜索迷雾之灵，在一栋废弃公寓楼中找到了它。她在遭遇中从窗户坠落。后来，依蓝德在泛达府邸召集团队开战务会议，廷德薇尔请求与他私下会谈。',
			},
			'woa-14': {
				title: '廷德薇尔到来',
				description:
					'廷德薇尔开始在泛达府邸教导依蓝德为君之道。纹不信任这位强势的泰瑞司女性，但看着依蓝德在她的指导下慢慢改变。',
			},
			'woa-16': {
				title: '搜索日记',
				description:
					'纹在泛达府邸拆解阿伦迪的日记，搜索关于迷雾之灵和深黯的引用。她认为跟随她的生物与几个世纪前跟随阿伦迪的是同一个。',
			},
			'woa-17': {
				title: '与守望者决斗',
				description:
					'在会见斯特拉夫的信使——赞恩，守望者本人——之后，纹与奥瑞瑟外出巡逻。她与赞恩对峙，两人在哈斯汀要塞展开激烈的钢推角逐。赞恩告诉她迷雾之子属于迷雾，而非与贵族为伍。',
			},
			'woa-20': {
				title: '战务会议',
				description:
					'纹旁观依蓝德、多克森、哈蒙德、克拉布斯和布利兹在泛达府邸讨论与斯特拉夫谈判的计划。她用青铜排除了布利兹是坎得拉冒名者的嫌疑。凯特领主的女儿艾尔莉安到来寻求庇护并寻找布利兹。',
			},
			'woa-21': {
				title: '艾尔莉安的到来',
				description:
					'艾尔莉安·凯特来到宫殿拥抱布利兹，令所有人惊讶。依蓝德给予她款待。多克森提议利用艾尔莉安作为对抗凯特领主的筹码。',
			},
			'woa-22': {
				title: '政治紧张',
				description:
					'随着围城收紧，纹看着依蓝德与议会及执政要求的艰难斗争，同时她在迷雾中追捕赞恩。',
			},
			'woa-24': {
				title: '夜巡',
				description:
					'纹在依蓝德阳台外站岗，燃烧青铜，探测到迷雾之灵和一股远处的镕金术力量。赞恩在泛达府邸找到她并向她挑战，问她如果没有后果会做什么。她回答说会杀死敌方军队的领袖。',
			},
			'woa-25': {
				title: '购物与冲突',
				description:
					'廷德薇尔带纹在肯顿街购物，同行的有艾尔莉安、斯布克和奥瑞瑟。店外，纹与幸存者教会的成员交谈。警报鼓声响起。斯特拉夫的军队对城墙发动佯攻，纹冲向城防。',
			},
			'woa-26': {
				title: '与斯特拉夫谈判',
				description:
					'纹陪同依蓝德前往城北斯特拉夫·泛达的战营，在那里展示了她可怕的力量来威慑这位准征服者。',
			},
			'woa-27': {
				title: '虚张声势',
				description:
					'纹在帐外旁听时，斯特拉夫威胁要在谈判中杀死依蓝德。赞恩出现。纹和依蓝德的虚张声势成功了。斯特拉夫放他们离开。在返回陆沙德的路上，依蓝德收到一张字条：议会投票不信任，他不再是国王。',
			},
			'woa-28': {
				title: '谈判归来',
				description:
					'在斯特拉夫营地紧张对峙后，纹回到泛达府邸，被赞恩的低语和她对自己角色的日益怀疑所困扰。',
			},
			'woa-29': {
				title: '失眠与洞察',
				description:
					'纹和奥瑞瑟夜间坐在哈斯汀要塞的迷雾中。他们讨论赞恩的性格和纹日益严重的失眠。奥瑞瑟说他不想频繁更换身体。纹对深黯的真实本质产生了一个顿悟。',
			},
			'woa-30': {
				title: '深黯理论',
				description:
					'纹通过沙赛德的窗户进入泛达府邸，阅读他对修道院拓片的转录。她提出迷雾就是深黯——永久的白昼迷雾会导致饥荒。她告诉沙赛德她看到了与跟随永世英雄相同的生物。',
			},
			'woa-31': {
				title: '彭罗德的提名',
				description:
					'纹陪同依蓝德和全体团队成员前往议会。依蓝德提名彭罗德领主担任议长并向议会致辞，以凯西尔遗产——通过纹作为对抗斯特拉夫的威慑——来呼吁。新国王的提名大会开始——彭罗德、依蓝德和凯特领主，后者从人群中现身。',
			},
			'woa-33': {
				title: '坎得拉的秘密',
				description:
					'纹怀疑自己是否真正的永世英雄，并与奥瑞瑟讨论含糊的泰瑞司预言。奥瑞瑟无意中透露坎得拉有自己的宗教，早于统御主的升华，讲述关于人类属于灭绝、坎得拉属于存留的预言。纹在宫殿图书馆调查多克森以测试他是否是坎得拉冒名者，并对德莫队长产生怀疑。',
			},
			'woa-34': {
				title: '赞恩在屋顶',
				description:
					'纹发现依蓝德和团队在泛达府邸图书馆研究议会策略。她提到被投毒的井，但依蓝德已经知道。听到外面有声响，她调查并发现赞恩在屋顶上。他攻击她，揭示自己在燃烧天金。他停下来告诉她斯特拉夫想让他杀了她，他是依蓝德的同父异母兄弟，克罗斯距陆沙德只有一天路程。',
			},
			'woa-35': {
				title: '与凯特共进晚餐',
				description:
					'纹试穿她新定制的迷雾之子礼服。她和依蓝德前往哈斯汀要塞与凯特领主共进晚餐。席间他们讨论布利兹和艾尔莉安从凯特营地出走的事。凯特概述了他对陆沙德的计划，提出用食物换取天金储备，但依蓝德说尚未找到。纹想知道为什么凯特不隐藏他的镕金术师。',
			},
			'woa-36': {
				title: '幸存者教会',
				description:
					'纹在泛达府邸观察艾尔莉安用镕金术挑动布利兹的情绪，确认克拉布斯不是坎得拉因为他的铜云屏蔽了他。她跟踪德莫队长穿过宫殿庭院，发现他秘密领导着幸存者教会——宣讲纹将恢复世界并敦促司卡支持依蓝德。她质问了他但承诺保守秘密。',
			},
			'woa-38': {
				title: '选举与暗杀',
				description:
					'纹和依蓝德出席议会进行国王选举。依蓝德揭示他已加入幸存者教会。纹注意到可疑人物，一名男子袭击依蓝德——她击退了六名斯特拉夫派来的镕金术师刺客，重伤但杀死所有攻击者，奥瑞瑟也帮了忙。她在白镴耗尽时失去意识。议会在彭罗德府邸重新召集，选出彭罗德为国王。',
			},
			'woa-40': {
				title: '康复',
				description:
					'纹在泛达府邸的医院病床上醒来，依蓝德在身边。他告诉她彭罗德现在是国王，并在她触碰他时退缩，被她的残忍杀戮所震撼。赞恩在她睡着时来访，声称刺客来自凯特，彭罗德与斯特拉夫达成了交易。他留给她一颗天金珠。奥瑞瑟带着新的狗身体回来，纹发现她可以用杜拉铝强化的黄铜控制坎得拉。',
			},
			'woa-43': {
				title: '突袭凯特',
				description:
					'赞恩告诉纹德莫在凯特指使下背叛依蓝德，建议他们攻击凯特的部队。纹和赞恩对哈斯汀要塞发动毁灭性突袭，杀死守卫、士兵和杀雾人。他们冲到凯特和他儿子面前，但纹请求仁慈。赞恩说她仍被控制然后离开。凯特的军队撤出陆沙德。',
			},
			'woa-44': {
				title: '卡蒙的藏身处',
				description:
					'赶走凯特军队后，纹藏在卡蒙的旧藏身处——她盗贼生涯开始的废弃建筑。她谈到她杀死的士兵以及她的耳环来历。她告诉依蓝德她必须离开陆沙德前往北方泰瑞司，并把天金珠交给奥瑞瑟保管。',
			},
			'woa-45': {
				title: '关于爱的建议',
				description:
					'纹拜访沙赛德寻求关于爱的建议——她应该与依蓝德在一起还是与更像自己的人在一起。沙赛德认为他们命中注定，并决心确保他们在陆沙德陷落前离开。',
			},
			'woa-46': {
				title: '统御主的密室',
				description:
					'纹前往克雷迪克·肖内统御主曾独自度日的秘密密室。她不确定自己为何而来，但感到升华之井正在恢复力量的遥远震动。她不安地离开。',
			},
			'woa-47': {
				title: '与赞恩决斗',
				description:
					'赞恩试图说服纹与他一起离开陆沙德，但她选择了依蓝德的信任而非自由。愤怒的赞恩发起攻击。奥瑞瑟无视纹的命令——赞恩揭示坎得拉是坦森，他真正主人的间谍。已经喜欢上纹的坦森大声问她对坎得拉了解多少——暗示着他自身的弱点。纹用杜拉铝-黄铜夺取坦森的控制权，拿走天金珠，并利用赞恩对天金的依赖，假装攻击绕过他的预见力，刺入他的脖颈杀死了他。',
			},
			'woa-49': {
				title: '通过锡门逃离',
				description:
					'纹、依蓝德和斯布克通过锡门离开陆沙德，告诉守卫他们骑马求援并会回来。艾尔莉安说服他们带她同行。城外一群斯特拉夫的弓箭手试图拦截他们，但纹在迷雾中击退他们，随后艾尔莉安分道去寻找父亲的军队。',
			},
			'woa-50': {
				title: '拔营北行',
				description:
					'在陆沙德以北一天路程处，纹、依蓝德和斯布克拔营出发，相信已摆脱斯特拉夫的侦察兵。斯布克感觉到有什么东西在迷雾中跟踪他们，纹认出那是跟随了她数月的迷雾之灵。',
			},
			'woa-51': {
				title: '贾斯特斯与真相',
				description:
					'纹醒来发现迷雾之灵盘旋在依蓝德上方，她刺向它，击中某物后它消失了。斯布克报告有五个人在跟踪他们——贾斯特斯·勒卡尔，他抛弃了克罗斯军队。依蓝德处决了他的老友，因他让这些野兽群龙无首。斯布克揭示沙赛德骗他们离开，纹意识到升华之井就在陆沙德。他们掉头回去救朋友们。',
			},
			'woa-52': {
				title: '白镴急奔',
				description:
					'纹独自向陆沙德狂奔，进行绝望的白镴急奔，将金属燃至极限，恐惧自己来得太迟，克罗斯正在攻城。',
			},
			'woa-53': {
				title: '纹救沙赛德',
				description:
					'纹在外围村庄收集马蹄铁搭建临时迷雾之子钉路后到达陆沙德。她恰好在沙赛德即将在城门被压倒时抵达，旁观的司卡开始念诵，她以一道镕金术冲击粉碎周围的克罗斯。',
			},
			'woa-54': {
				title: '控制克罗斯',
				description:
					'白镴几近耗尽的纹无法独自击败克罗斯，她做出最后的杜拉铝推击尝试，发现她可以夺取这些生物的控制权——这是统御主内置给它们的弱点。她带领受控的克罗斯前往哈斯汀要塞，命令彭罗德领主派兵保护市民，并从哈蒙德那里拿了新鲜白镴后前往泛达府邸。',
			},
			'woa-55': {
				title: '击败斯特拉夫',
				description:
					'纹从城内以一道杜拉铝钢推飞射而出，击倒斯特拉夫和他的马匹，然后砍杀他的军官。随着凯特的军队加入战斗，她强迫彭罗德、凯特和贾纳拉尔将军接受依蓝德为皇帝，将沙赛德留下负责后撤退休息。',
			},
			'woa-57': {
				title: '秘密之门',
				description:
					'纹告诉沙赛德升华之井在陆沙德，她能感受到它的拉扯。依蓝德归来并被推举为皇帝后，她带领他、哈蒙德和斯布克前往克雷迪克·肖，在那里她以杜拉铝推击打开了一扇隐藏的镕金术门，开始下降。',
			},
			'woa-58': {
				title: '发现升华之井',
				description:
					'纹、依蓝德、哈蒙德和斯布克潜入克雷迪克·肖下方的巨大洞穴，发现了一池发光的白色液体——升华之井，正以全盛之力脉动。当纹犹豫自己是否能明智驾驭这力量时，迷雾之灵出现并刺穿依蓝德的腹部，使其受到致命伤。',
			},
			'woa-59': {
				title: '力量释放',
				description:
					'依蓝德在她身边奄奄一息，纹走入发光的水池，接管了升华之井的庞大力量。一个声音告诉她杀人的迷雾是复返的深黯。在灭绝操纵预言使她相信必须放弃力量才能拯救世界的欺骗下，她释放了力量——一个得意洋洋的声音宣告："我自由了！"',
			},
			'woa-60': {
				title: '在城墙上',
				description:
					'纹与新复原的依蓝德站在陆沙德城墙顶上。她承认在升华之井释放力量犯下了灾难性错误——释放了囚禁在那里的生物，这可能比统御主做过的一切都更可怕。依蓝德安慰她，无论来什么，他们都会一起度过。',
			},
			'hoa-3': {
				title: '第一处储藏所',
				description:
					'纹打开维提坦的储藏洞穴，找到了食物、物资和一块刻有统御主隐秘信息的金属板，警告他囚禁的危险以及下一处储藏在法德雷克斯城的位置。',
			},
			'hoa-8': {
				title: '迷雾病',
				description:
					'纹看着迷雾袭击从维提坦逃出的难民，使可预测数量的人生病。法特伦不信，但依蓝德主张暴露是为了接种免疫。纹审问她的克罗斯"休曼"关于繁殖的问题。她和依蓝德带领难民前往一条运河，德莫的士兵在那里扎营。',
			},
			'hoa-10': {
				title: '部队重聚',
				description:
					'纹与依蓝德的军队在陆沙德西南向法德雷克斯进军途中，沙赛德、布利兹、戈拉德尔和艾尔莉安赶上来。沙赛德与纹分享他的信仰危机，纹将玫尔的花卉画送给他作为安慰。',
			},
			'hoa-12': {
				title: '战务会议',
				description:
					'纹和依蓝德讨论凯西尔的团队如何失去希望。依蓝德召集纹、凯特、布利兹、艾尔莉安、哈蒙德、德莫和沙赛德开会。他们讨论日益逼近的迷雾、种植食物以及攻占厄尔多和法德雷克斯储藏所的计划。依蓝德考虑不顾风险让军队暴露于迷雾，并问团队："凯西尔会怎么做？"以激励他们。',
			},
			'hoa-15': {
				title: '迷雾中的敌人',
				description:
					'纹思索迷雾为何感觉不同——她不再觉得被它们庇护。士兵们从帐篷中出来进行当天行军时，依蓝德和哈蒙德争论是否让部队暴露在迷雾中。依蓝德告诉纹休曼在闹事。克罗斯说迷雾恨他，也恨纹。让她惊讶的是，她同意——迷雾现在是她的敌人。',
			},
			'hoa-21': {
				title: '百分之十六',
				description:
					'纹阅读阿伦迪的日记，思考如何与灭绝战斗——既然他不能读心，她意识到他虽强大但并非全能，会受到后果约束。依蓝德害怕自己因让士兵暴露迷雾而变得像统御主一样残忍，并质疑自己禁止贵族殴打儿童来触发的法律是否正确。努尔登提交迷雾病数据；纹让他仅用先前未暴露的士兵重新计算。结果：精确的百分之十六。当四组独立样本都产生相同比例且零误差时，依蓝德承认这模式太精确不可能是巧合。',
			},
			'hoa-25': {
				title: '出发侦察',
				description:
					'依蓝德的军队到达法德雷克斯城。纹注意到天然岩石阵列和峡谷般的入口将使征服变得困难。在战略会议中，依蓝德提议陪她执行侦察任务——她说他还不够强。凯特提供了一份线人名单，纹在傍晚出发独自潜入城市。',
			},
			'hoa-27': {
				title: '线人斯洛斯威夫特',
				description:
					'纹潜入法德雷克斯拜访斯洛斯威夫特——凯特推荐的线人。他赞扬尤门统治的稳定——熟悉感——并透露尽管围城，当晚仍将举行舞会，但拒绝以后半生灵魂为代价帮忙。纹反驳说灰烬和杀人迷雾将终结任何稳定。斯洛斯威夫特让步了，在她离开前分享了尤门的弱点。',
			},
			'hoa-27.2': {
				title: '侦察执事所',
				description:
					'纹寻找第二名线人——一个据说喜欢哼唱自语的乞丐——但本能的警觉让她远离。她侦察了尤门的宫殿——资源执事所——并感知到暗示可能存在迷雾之子的镕金术波动——但在她能锁定源头之前波动就消失了。她带着消息返回部队：当晚将举行一场舞会。',
			},
			'hoa-28': {
				title: '信任与大胆计划',
				description:
					'纹侦察归来，告诉依蓝德她在法德雷克斯城内感知到了迷雾之灵——一股较弱但对抗灭绝的力量，与迷雾病无关。她谈到自己作为永世英雄的宿命，但依蓝德警告预言可能被他们的敌人篡改。纹催促他暗中调查百分之十六的统计异常。依蓝德发誓仅将军队作为最后手段。纹提出更勇敢的想法：他们应该闯进尤门的一场舞会直接面对他。',
			},
			'hoa-30': {
				title: '帕特雷森女士',
				description:
					'依蓝德和纹前往奥瑞尔要塞的舞会——他们设定的计划如今已成现实。他们被通报后分头交际。纹挑战帕特雷森女士，利用她追随者的恐惧，警告一旦他们占领城市，任何反对者都不会有好结果。纹离席后，帕特雷森的跟班们紧随其后，急于将她引荐给其他宾客。',
			},
			'hoa-37': {
				title: '克罗斯的制造',
				description:
					'纹击退了尤门的突袭者——用帐篷钉当作镕金术弹丸——并追逐一名神秘的迷雾之子进入法德雷克斯，但在幽暗街道中失去了目标。她返回后得知突袭是调虎离山：他们的半数克罗斯大军已死。依蓝德将一千名幸存者的控制权移交给她。在克罗斯营地，休曼请求帮忙制造更多克罗斯。她跟随他，惊恐地看着他剥下一个死去克罗斯的皮，从尸体上取出四根钉刺，伸手探向病房中一名昏迷的士兵。纹阻止了他——但可怕的真相已烙印在她脑海中。克罗斯是由人类制造的。',
			},
			'hoa-40': {
				title: '第三技艺',
				description:
					'纹看着依蓝德、哈蒙德、凯特、努尔登和德莫拼凑出真相：血金术——第三种金属技艺——使用钉刺窃取镕金术和储金术的能力。她意识到灭绝通过她所利用的那种情绪镕金术弱点来控制克罗斯和审判官。德莫报告迷雾幸存士兵正被排挤，依蓝德命令将他们组建为一支新师。康拉德从陆沙德带来消息说彭罗德在暴乱和掠夺中恳求援助。纹向迷雾祈求帮助，就像它们曾帮她对抗统御主时那样——却只得到沉默。',
			},
			'hoa-43': {
				title: '第二场舞会',
				description:
					'纹和依蓝德前往资源执事所的第二场舞会，无视跟踪他们的神秘迷雾之子。在派对上，纹探测到一名烟纱者和一名锡眼跟踪她。她找到斯洛斯威夫特，要求两名助手。在露台上等待依蓝德预先安排好的干扰时，她在干扰来临的瞬间发动攻击——用杜拉铝-黄铜冲击压倒间谍，然后将他们击昏。斯洛斯威夫特的手下藏起尸体。纹换上半潜行装的衣物，溜入建筑寻找储藏所。',
			},
			'hoa-44': {
				title: '进入储藏所',
				description:
					'纹下降到地下，用情绪镕金术干扰守卫，穿行于资源执事所下方的走廊。她到达储藏所——但石门在她身后封死。它被破坏了：所有金属已被移除所以她无法推开。她被困在黑暗中。脚步声逼近，她感知到洞穴中有一名镕金术师。灭绝站在她面前，戴着她的哥哥仁的面孔。',
			},
			'hoa-45': {
				title: '灭绝现身',
				description:
					'纹与戴着仁面孔的生物对峙。她用杜拉铝-锌冲击——毫无反应，证明它并非坎得拉。她发起攻击，但它只后退不肯战斗。灯火熄灭，她的攻击只击中空气。在黑暗中她聚焦于它的镕金术波动，认出它们来自升华之井。这就是灭绝。他告诉她万物皆须终结，他不是她的敌人。然后是更深的恐怖：他声称他一直与她同在——即使在她看不见他的时候——从她还是个孩子时起。',
			},
			'hoa-48': {
				title: '统御主的遗言',
				description:
					'被困在绝对黑暗中，纹摸索着储藏所，拼凑着关于灭绝所知的一切。她的手指摸到金属板并触摸阅读：统御主最后的忏悔。灭绝在他脑海中说话。他试图做一个好的统治者。他很好地藏起了灭绝的身体。而且他在乎——尽管他知道如果有人读到这些文字，他已经死了。她惊讶地听到石门打开了。',
			},
			'hoa-50': {
				title: '酒中迷药',
				description:
					'石门打开。纹用掉她最后的镕金术药剂，穿过走廊经过数名守卫，然后尝试通过天花活板门进行一次绝望的钢推——但门从上方被压住了。第一个穿过门的人是特尔登·哈斯汀，依蓝德舞会时代的旧友，如今打扮成尤门的贵族线人。他提供自由以换取她喝下迷药酒。纹试图用依蓝德会如何行动的威胁来吓唬他，但特尔登不为所动。她喝下酒陷入昏迷。',
			},
			'hoa-54': {
				title: '尤门的囚徒',
				description:
					'纹在锁链中醒来，无金属可烧。尤门用尽一切预防措施——她因谋杀统御主而面临处决，但他允许她为自己辩护。他归还她的耳环：一件简单的银质和青铜饰品，他视为对镕金术师毫无用处。纹戴回耳环，心中不安。依蓝德的一名士兵被带来核实她还活着且非坎得拉冒名者。灭绝低语催促她杀了尤门——但她忍住了。',
			},
			'hoa-57': {
				title: '灭绝的本质',
				description:
					'灭绝在纹的牢房中与她对话，教导她关于熵——万物皆须终结，包括他自己。她意识到他的影响力像情绪镕金术一样运作：不是心灵控制，而是放大已有的念头。灭绝告诉她存留已死，他们之间的约定已完成，世界将在数日内终结。但纹在他自鸣得意之下感知到某种意料之外的东西——人类的情感，因此是弱点。他说她和依蓝德之所以珍贵，正是因为他们如此擅长破坏。纹意识到灭绝来到她的牢房是因为她的囚禁是他胜利的关键——这意味着她必须尽快逃脱以挫败他。',
			},
			'hoa-60': {
				title: '在义务官法庭',
				description:
					'纹被带到尤门面前受审，做了一次假逃尝试——她击倒四名守卫但被二十人压倒。被镣铐锁在一条长凳上，她悄悄给手腕涂油并挣脱，将银螺丝甩向守卫作为干扰。她扑向尤门但他燃烧天金轻松闪避。他平静地叫她坐下——解开镣铐。灭绝在室内踱步，称尤门令人失望。义务官们加入，尤门审问她：她的军队为何在此？她谈到需要补给、凯特想夺回王国。尤门问她在幸存者教会中的角色，质疑对看不见的神的信仰。纹反驳说尤门也一样——相信统御主仍活着并引导事件。她详细叙述杀死统御主的经过，只省略了汲取迷雾的部分。尤门斥为诡计；纹用他的逻辑反击——她不能被审判谋杀一位尤门坚称仍活着的神。她揭示军队的真实目的：天金。尤门称天金毫无价值并结束会议，仍在极力分辨统御主想要他下一步做什么。',
			},
			'hoa-63': {
				title: '天金迷雾人',
				description:
					'灭绝向纹吹嘘他即将到来的胜利，但她仔细倾听他的絮叨——寻找任何有助于击败他的线索。她叫来守卫告诉他们她想与尤门做交易。义务官疲惫地到来，纹产生了突破性领悟：他根本不是迷雾之子。他是一名天金迷雾人——先知者——这解释了为什么他在奥瑞尔要塞逃离她而非乘胜追击。她解释情绪镕金术与杜拉铝结合如何夺取克罗斯的控制权，当尤门问及依蓝德的力量时。尤门沉思纹是统御主计划的一部分，她顺势附和——声称统御主想让她通过猎取储藏所来遇见尤门。地图被拿来，纹标出帝国各处剩余储藏所的位置，注意到它们都位于矿山或矿藏附近——一种模式。在顿悟中她明白：灭绝一直在利用她和依蓝德寻找储藏所。更糟糕的是——他特意在操纵她来定位天金储藏所。她尚未能深入思考，马什到来。他朝她微笑，向灭绝鞠躬，并告诉尤门一场攻击即将到来——他不是来保护法德雷克斯的，而是来夺取天金的。尤门揭示真相：根本没有庞大的储藏，只有七颗。他一直在虚张声势。灭绝在狂怒中尖叫。尤门恳求马什帮助却被冷酷拒绝——统御主已死且是个无利的仆从。纹抓住时机：依蓝德不会攻击，她说。她向尤门提议，既然马什已抛弃他，不如结盟。马什嗤笑——依蓝德绝不会为救她攻城。纹的回答平静如钢：依蓝德比他想的更好。',
			},
			'hoa-65': {
				title: '挣脱束缚',
				description:
					'纹在资源执事所的牢房中虚张声势对付灭绝，声称她和依蓝德一直都知道他的计划并且已将天金藏在别处。马什抓住她要求天金的位置，但她拒绝。马什命令尤门攻击依蓝德的军队并揭示统御主创造克罗斯和审判官作为灭绝有朝一日会夺取的力量。当马什摇晃她时，纹从他的腰带上偷了一剂金属药剂并吞下。她摘下耳环——灭绝用来低语的血金术钉刺——并用杜拉铝推进将其射入马什额头。马什恢复后用储金术力量变大并掐住她的脖子，纹汲取迷雾推进他的情绪，打破灭绝的控制。马什逃离。纹抵达战场，下令向法德雷克斯城进行绝望的撤退，与尤门结成临时联盟。',
			},
			'hoa-67': {
				title: '风暴聚集',
				description:
					'纹与依蓝德和尤门站在法德雷克斯城内，庞大的克罗斯大军在城墙外集结。一场巨大的地震撼动城市，造成严重破坏。无法接触迷雾——耳环仍在——纹思索如何虚张声势对付灭绝并让迷雾再次帮助她。她告诉依蓝德她必须前往天金储藏所并将其带回。',
			},
			'hoa-67.2': {
				title: '离开前往陆沙德',
				description:
					'纹离开法德雷克斯飞向东边的陆沙德，故意将审判官引离依蓝德和他的军队。她赌自己能跑赢一位神祇，希望通过让灭绝追逐她而不是摧毁她所爱之人来迫使他显露底牌。',
			},
			'hoa-72': {
				title: '耳环',
				description:
					'纹到达陆沙德，十余名审判官追踪而至。在克雷迪克·肖，灭绝要求天金的位置——他的爪牙已在宫殿中搜索。她拒绝，十三名审判官发动攻击。她精彩地战斗，甚至发现其中一名因额外钉刺而具有储金术速度，但最终被压制。她祈求迷雾帮助——毫无反应。灭绝命令马什接手刑讯。马什逐一折断她的手臂、双腿、手指，索要天金的位置。他的一小部分自我在抵抗，想起凯西尔如何将纹当作他和玫尔从未有过的女儿来对待。他注意到她的耳环，想起斯布克写在钢板上关于金属穿透身体的警告——思绪未及反应，他将其从她耳中拔出。灭绝的声音即刻消失。迷雾涌入纹，治愈她的伤势并注入力量。她起身与马什搏斗。',
			},
			'hoa-73': {
				title: '升华',
				description:
					'迷雾如同燃烧杜拉铝般提供无穷尽的金属储备，纹转向剩下的十二名审判官。她以骇人的轻松将他们全部杀死——她普通的钢推如今带有神明般的力量。她以一击钢推摧毁了克雷迪克·肖本身，将统御主千年宫殿化为瓦砾。只剩马什。出于一丝怜悯——或认出——她拔掉了他的一根眼钉而非杀死他。在最后的迷雾涌入她时，她咳了一声便消失了，留下活着的马什和灭绝在他脑海中暴怒。',
			},
			'hoa-76': {
				title: '欢迎来到神性',
				description:
					'纹飘浮在陆沙德上空，充满存留的力量。灭绝向她致意——一团变幻的黑烟——嘲讽地说欢迎来到神性。她的意识扩展至看见整个星球正在消亡，尽管许多人已在储藏洞穴中避难。她试图帮忙：她堵住灰山并净化空气，但突然的阳光过热了世界。每次修正都造成新的灾难，灭绝大笑着阻止她平息一场海啸。他解释他们之间的平衡——如同镕金术的推拉，每个行动都有反作用——并揭示存留创造人类时有意制造了不平衡，将更多的自己赋予人类。纹明白：她与灭绝如今势均力敌，但如果他找回自己隐藏的那部分身体，平衡就会打破。她看到依蓝德在下方朝陆沙德行进。',
			},
			'hoa-79': {
				title: '跟随灭绝',
				description:
					'纹感知到变化，跟随灭绝前往哈辛深坑。她看到难民营地和移动天金的坎得拉，对统御主精心的隐藏有了新的认识。灭绝夺取坎帕尔的控制权并要求天金的位置。',
			},
			'hoa-80': {
				title: '风的指引',
				description:
					'纹作为存留，凝望着聚集在哈辛深坑的数十万难民。她在风中低语依蓝德的名字，引导他穿越营地向坎得拉家园走去，沙赛德独自在那里战斗保护天金。灭绝继续嘲讽她——但她无法回应，只能观看、引导和希望。',
			},
			'hoa-81': {
				title: '观看战役',
				description:
					'纹看着依蓝德向先知者们发表演讲，带领天金迷雾人冲入克罗斯大军。她试图告诉他不要战斗——他听不到她。她看到沙赛德站在洞穴入口处补给士兵。数小时她看着依蓝德燃烧大量天金，以不可思议的精准战斗。然后马什出现，也燃烧天金，纹看到灭绝的黑暗力量在引导她兄弟的斧头。她看着依蓝德一次性燃烧杜拉铝与天金，闪现神明般的终极洞察——并在斧头砍入胸膛时将剑刺入马什脖颈。依蓝德含笑死去。',
			},
			'hoa-81.2': {
				title: '最终攻击',
				description:
					'灭绝在马什砍下依蓝德首级后在尸体旁洋洋得意。但纹目睹了她所爱的男人牺牲一切——她不会让他白白死去。不理会使用存留之力进行毁灭所带来的痛苦，她直接攻击灭绝。对立之力——存留打击灭绝——是任一碎瑛都无法承受的。攻击杀死了阿提和纹。她的身体倒在依蓝德身旁的灰烬中。',
			},
			'hoa-83': {
				title: '重生之野',
				description:
					'纹的身体被发现躺在一片鲜花绿草之地——沙赛德重塑世界的最初迹象。她在依蓝德身旁安息。',
			},
		},
		sazed: {
			...enData.movements.sazed,
			'tfe-9': {
				title: '泰瑞司侍从',
				description:
					'沙赛德抵达费利司雷诺领主庄园担任纹的老师和侍从，教她礼仪、舞蹈和举止。他向她介绍特雷教——他提出的第五种宗教——并承认还知道562种。',
			},
			'tfe-10.2': {
				title: '仓库集会',
				description: '沙赛德与凯西尔和纹一起参加秘密仓库集会，观看幸存者向司卡工人宣讲革命。',
			},
			'tfe-12': {
				title: '舞会守护者',
				description: '沙赛德以侍从身份陪同纹参加凡处要塞的第一次舞会，在她渗入贵族社交圈时守护她。',
			},
			'tfe-13': {
				title: '费利司汇报',
				description: '沙赛德与纹和凯西尔返回费利司雷诺庄园，回顾纹第一次舞会的成果并规划下一步。',
			},
			'tfe-15': {
				title: '救纹',
				description:
					'沙赛德将纹抱到克拉布斯店铺救治并手术治疗她在克瑞迪克·肖的伤。还检查了科连尼文写的书。',
			},
			'tfe-16': {
				title: '返回费利司',
				description: '在克拉布斯店铺稳定纹的状况后，沙赛德返回费利司雷诺庄园。',
			},
			'tfe-17': {
				title: '翻译科连尼文书',
				description: '在费利司雷诺庄园图书馆，沙赛德致力于翻译纹从克瑞迪克·肖带回的科连尼文书籍。',
			},
			'tfe-18': {
				title: '艾拉瑞尔要塞守护者',
				description: '沙赛德以泰瑞司侍从身份陪同纹参加艾拉瑞尔要塞舞会，在贵族宫廷中守护她。',
			},
			'tfe-19': {
				title: '情报交换',
				description:
					'当凯西尔沿荆棘小路返回雷诺庄园时沙赛德在场。他们交换关于贵族家族和叛乱进展的情报，凯西尔同时训诫纹远离艾蓝德。',
			},
			'tfe-22': {
				title: '储金术的秘密',
				description:
					'在雷诺庄园沙赛德与纹谈论统御主日记中的泰瑞司人。他揭示储金术的秘密以及蓄存者如何在泰瑞司宗教失传后被建立来保存一切。他从日记中也了解到关于自己民族的新知识——大地曾经是绿色且肥沃的。',
			},
			'tfe-23': {
				title: '哈斯汀要塞守护者',
				description:
					'沙赛德以泰瑞司侍从身份陪同纹参加哈斯汀要塞舞会，在她散布谣言和与贵族交谈时等候。',
			},
			'tfe-27': {
				title: '马什的消息',
				description:
					'沙赛德带着马什的信件返回克拉布斯店铺，信中包含消息和会面指示。他还带来统御主日记的翻译。',
			},
			'tfe-28': {
				title: '莱凯要塞守护者',
				description:
					'沙赛德以泰瑞司侍从身份陪同纹参加莱凯要塞舞会，在她激化家族战争和与艾蓝德交谈时等候。',
			},
			'tfe-29': {
				title: '储金术课程',
				description:
					'在雷诺庄园沙赛德交给纹最后的日记翻译。更详细地解释储金术，纹尝试燃烧他的一个锡金属意识。后来沙赛德在凯西尔研究马什的详细地图时加入。那天晚上凯西尔请沙赛德讲讲宗教。',
			},
			'tfe-30': {
				title: '凡处要塞守护者',
				description:
					'沙赛德陪同纹参加凡处要塞最后的家族舞会。客人们结盟而瓦莱特小姐遭到冷遇。沙赛德在纹发现刺杀艾蓝德的阴谋并与尚·艾拉瑞尔战斗之前离开了舞会。',
			},
			'tfe-31': {
				title: '治疗纹的伤',
				description:
					'在纹与尚·艾拉瑞尔及艾拉瑞尔刺客战斗后伤痕累累地到达克拉布斯店铺后，沙赛德治疗她的伤。她讲述晚间事件时他在一旁倾听。',
			},
			'tfe-33': {
				title: '紧急藏身处',
				description:
					'凯西尔摧毁哈辛坑后，沙赛德与团队一起在克拉布斯店铺附近的备用地下室。纹与沙赛德讨论第十一种金属。当司卡被带到喷泉广场处决且斯布克出现在囚车中时，沙赛德留在藏身处而凯西尔与审判官战斗。',
			},
			'tfe-35': {
				title: '安慰纹',
				description:
					'凯西尔死后沙赛德陪同纹在紧急藏身处。他给予安慰话语，纹愤怒地指责凯西尔抛弃了她。当团队去仓库看坎得拉以凯西尔形态出现时他留了下来。',
			},
			'tfe-37': {
				title: '释放的储金术师',
				description:
					'沙赛德被带到克瑞迪克·肖纹的牢房。他看起来缩小了，然后肌肉膨胀到两倍大小——他释放了储存的储金力量撞开了门。',
			},
			'tfe-38': {
				title: '帝国陨落',
				description:
					'沙赛德在克瑞迪克·肖的最终对决中出现，带着给纹的金属药瓶。他见证了统御主的陨落——纹扯下他的手镯后他急剧衰老。',
			},
			'tfe-39': {
				title: '理解暴君',
				description:
					'沙赛德与纹和马什站在司卡区附近建筑的屋顶上。他解释统御主既是储金术师又是镕金术师——手镯储存了他的青春。他推测这就是为什么所有泰瑞司侍从必须被阉割：统御主担心拥有储金和镕金血统的人会挑战他的不死。',
			},
			'woa-4': {
				title: '传道之旅',
				description: '沙赛德穿越东方统御区，走访乡村向新获自由的司卡人传播被压制的宗教和知识。',
			},
			'woa-7': {
				title: '马什归来',
				description:
					'沙赛德继续在东方统御区向获释司卡人传授被压制的宗教。马什出现在村庄，自统御主陨落后独自游荡至今，并提议带领沙赛德前往能解答疑问的地方——瑟兰修道院。',
			},
			'woa-9': {
				title: '前往修道院之旅',
				description:
					'沙赛德和马什穿越荒芜的东方统御区前往瑟兰修道院。旅途中马什变得越来越疏远和怪异，令沙赛德感到不安。',
			},
			'woa-12': {
				title: '破译金属板',
				description:
					'沙赛德在修道院研究科万的铭文，发现了泰瑞司蓄存者关于永世英雄预言已被篡改的绝望警告。',
			},
			'woa-15': {
				title: '迷雾杀戮',
				description: '向西返回途经厄本时，沙赛德遇到村民在迷雾中神秘死亡的村庄——迷雾病的最初迹象。',
			},
			'woa-19': {
				title: '克罗斯大军',
				description:
					'在燃烧完钢金属意识加速行程后，沙赛德在中央统御区遭遇了一支两万人的克罗斯大军。他被捕获并被带到他们的领袖贾斯特斯·勒卡尔面前，后者想让沙赛德做他的侍从。沙赛德拒绝，但携带着贾斯特斯与陆沙德结盟的提议返回。',
			},
			'woa-22': {
				title: '返回陆沙德',
				description: '沙赛德抵达陆沙德，带来关于预言被篡改、迷雾杀人和钢铁铭文真实含义的严峻消息。',
			},
			'woa-23': {
				title: '第三支军队',
				description:
					'沙赛德在泛达府邸向依蓝德和团队简报贾斯特斯·勒卡尔麾下的两万克罗斯大军。他警告迷雾正在杀人并决心留在陆沙德调查。之后，他在客房中遇见廷德薇尔，两人共度了一段私人时刻。',
			},
			'woa-30': {
				title: '转录拓片',
				description:
					'沙赛德转录他在瑟兰修道院做的拓片，意识到这项工作可能需要数年。纹从他的窗户进来，提出迷雾就是深黯的理论。她告诉他她看到了与跟随永世英雄相同的生物。',
			},
			'woa-36': {
				title: '仓库中的避难所',
				description:
					'沙赛德在军械仓库中安抚新来的难民。廷德薇尔请求查看他从修道院带来的拓片。布利兹用镕金术安抚所有人——难民、沙赛德和廷德薇尔——缓解他们的痛苦。',
			},
			'woa-37': {
				title: '深黯之辩',
				description:
					'沙赛德和廷德薇尔研究了一份关于韦德尼根国王的传记残片，国王将军队缺粮归咎于深黯。沙赛德告诉廷德薇尔他相信深黯是迷雾的变化。他们争论他的理论和长老会的权威。廷德薇尔表达了对沙赛德的爱慕，他请她留下——她答应了。',
			},
			'woa-40': {
				title: '辩论预言',
				description:
					'沙赛德与廷德薇尔在泛达府邸研究，比较永世英雄预言的原始版本和被篡改版本，两人关系日益亲密。',
			},
			'woa-41': {
				title: '被篡改的预言',
				description:
					'沙赛德和廷德薇尔辩论修道院的金属板和亚伦迪的日记，困惑科万为何反对亚伦迪从升华之井获取力量。他们意识到陆沙德陷落时将会有许多人死亡。依蓝德来访寻求建议，他们为依蓝德坚守信念而赞扬他。',
			},
			'woa-45': {
				title: '被撕去的角落',
				description:
					'廷德薇尔发现几份转录的角落神秘地被撕去——每份中毁掉的都是同一个句子。纹向沙赛德询问关于爱的建议，不久后依蓝德也来寻求类似建议。沙赛德决心确保他们不会在陆沙德陷落时留在城内。',
			},
			'woa-46': {
				title: '逃离计划',
				description:
					'沙赛德秘密召集布利兹、克拉布斯、哈蒙德和多克森讨论斯特拉夫撤军的可能性和克罗斯不受抵抗进攻的可能性。他们同意留下守城，但计划在战前将依蓝德、纹、斯布克和廷德薇尔送走。',
			},
			'woa-49': {
				title: '目送他们离去',
				description:
					'从城墙顶上，沙赛德与布利兹、德莫、哈蒙德和克拉布斯一起看着依蓝德一行躲避斯特拉夫的军队向北骑行。他告诉布利兹廷德薇尔选择留下，并注意到克罗斯营地升起一根巨大的烟柱——不祥之兆。',
			},
			'woa-50': {
				title: '做最坏的准备',
				description:
					'沙赛德为应对克罗斯攻击而填充他的金属意识，并从克拉布斯那里得知斯特拉夫的军队已撤走。他给克拉布斯一枚达德拉达信仰的象征，然后发现多克森和廷德薇尔在规划城防。他和廷德薇尔为送走依蓝德和纹而争吵，然后在警报响起前拥抱。',
			},
			'woa-51': {
				title: '克罗斯攻击开始',
				description:
					'克拉布斯报告克罗斯已陷入大规模斗殴，将愤怒提升到极点后转向攻城。当士兵和弓箭手部署到防御阵地时，沙赛德从钢门上方的城墙岗位观看攻击开始。',
			},
			'woa-52': {
				title: '神圣第一见证者',
				description:
					'布利兹和克拉布斯镇守的锌门已被突破，沙赛德与贝德斯队长守卫不可靠的钢门。一群司卡人拒绝逃离，称他为"神圣第一见证者"，坚称他们将目睹克罗斯被击败。当克罗斯突破时，沙赛德激活了白镴金属意识，用一拳击杀一只巨型克罗斯，带领士兵投入战斗。',
			},
			'woa-53': {
				title: '坚守钢门',
				description:
					'沙赛德在钢门战斗，清除足够多的克罗斯将其重新关闭，并激活铁金属意识增加重量来顶住门。喘息时间是短暂的——他的铁金属意识耗尽，克罗斯再次突破，他得知廷德薇尔指挥的锡门已经陷落。',
			},
			'woa-54': {
				title: '寻找廷德薇尔',
				description:
					'沙赛德站在哈斯汀要塞外，最终引起了彭罗德领主的注意，但彭罗德拒绝收容难民。经过数小时搜寻，沙赛德找到了廷德薇尔的遗体并哀悼——无法为她选择一项宗教仪式，因为他不信他所研究的任何信仰。',
			},
			'woa-55': {
				title: '受命留守',
				description:
					'沙赛德从安全距离观看纹控制的克罗斯和凯特的军队击溃斯特拉夫的部队。他在心中检视永世英雄的预言，而纹迫使彭罗德、凯特和贾纳拉尔接受依蓝德为皇帝，随后将沙赛德留下掌管城市。',
			},
			'woa-57': {
				title: '与马什战斗',
				description:
					'沙赛德检视他与廷德薇尔共同编写的日志，意识到自己是"神圣第一见证者"并感知到预言中有些不对。迷雾之灵催促他前往克雷迪克·肖，在那里他发现马什——马什说他希望知道自己为何必须杀死沙赛德，然后将沙赛德撞到墙上。',
			},
			'woa-58': {
				title: '审判官之战中幸存',
				description:
					'马什击碎沙赛德的肋骨和手臂，将金属环钉入他的血肉——但沙赛德激活了这些金属意识来愈合并继续战斗。他的储备耗尽，马什占据上风，直到哈蒙德用格斗杖敲碎审判官的头骨。沙赛德和哈蒙德迅速下楼梯前往纹所在之处。',
			},
			'woa-59': {
				title: '在升华之井为时已晚',
				description:
					'沙赛德抵达升华之井，刚好来不及阻止纹接管并释放力量。为廷德薇尔哀痛，被目睹的一切所动摇，他开始质疑他所携带的每一种宗教。',
			},
			'woa-60': {
				title: '失去所有信仰',
				description:
					'沙赛德返回瑟兰修道院，将他的拓片与原始钢板比对——发现它们不符。真正的铭文警告说亚伦迪绝不能到达升华之井，因为他绝不能释放囚禁在那里的东西。读到一个邪恶力量如何篡改预言以及科万如何派拉希克去阻止亚伦迪后，沙赛德明白了纹释放的灾难，并对他收集的每一种宗教都失去了信仰。',
			},
			'hoa-4': {
				title: '南方外交',
				description:
					'沙赛德与布利兹访问勒卡尔城谈判条约，用外交手腕将南方国王纳入依蓝德日益壮大的联盟。他检视坎齐教的教义但因其自相矛盾而拒绝。',
			},
			'hoa-8': {
				title: '前往部队途中',
				description:
					'在与奥迪尔·勒卡尔王签订条约后，沙赛德与布利兹一起前往与纹和依蓝德的军队会合。他在本章仅被提及——他与依蓝德的兵力分配在幕后发生。',
			},
			'hoa-10': {
				title: '归队',
				description:
					'沙赛德、布利兹、戈拉德尔和艾尔莉安在陆沙德南方追上向法德雷克斯进军的依蓝德军队。艾尔莉安热情迎接布利兹。沙赛德与布利兹辩论宗教并与纹分享他的信仰危机，纹将玫尔的花卉画留给他——一位拉尔斯塔教的信徒。',
			},
			'hoa-12': {
				title: '议会会议',
				description:
					'沙赛德出席依蓝德的战务会议，与纹、凯特、布利兹、艾尔莉安、哈蒙德和德莫一起。他们辩论日益逼近的迷雾和种植食物的选项，以及攻占厄尔多和法德雷克斯储藏所的计划。依蓝德问"凯西尔会怎么做？"来凝聚团队。',
			},
			'hoa-18': {
				title: '向北旅行',
				description:
					'沙赛德、布利兹、艾尔莉安和戈拉德尔队长向北前往厄尔多。沙赛德继续寻找一个值得信仰的宗教，沿途在农场停留，戈拉德尔分享他的人生故事。',
			},
			'hoa-18.2': {
				title: '在泰瑞司人中',
				description:
					'前往厄尔多途中，沙赛德在泰瑞司人迁居的哈辛深坑停下。他受到族人的热烈欢迎并与泰瑞司长老会面，为他们提供建议但拒绝成为他们的领袖，认为自己不配。',
			},
			'hoa-22': {
				title: '泰瑞司异常',
				description:
					'沙赛德与泰瑞司长老会面，为他们提供建议。他询问迷雾死亡情况并得知一个关键事实：没有一个泰瑞司人患上迷雾病——他将这一模式归档于日益增长的疑虑中。',
			},
			'hoa-25': {
				title: '离开泰瑞司',
				description:
					'沙赛德离开哈辛深坑，继续向北前往厄尔多。他带着一个令人不安的事实：没有一个泰瑞司人死于迷雾病。',
			},
			'hoa-29': {
				title: '被公民召唤',
				description:
					'沙赛德、布利兹、艾尔莉安和他们的护卫抵达厄尔多，立刻被召唤到奎林面前。公民充满敌意，拒绝沙赛德提出的对抗杀人迷雾联盟，勉强允许他们留下来只要遵守法律。',
			},
			'hoa-29.2': {
				title: '地下湖',
				description:
					'当他们的马车穿过街道时，斯布克身穿士兵装束迎接他们。他带领沙赛德、布利兹、艾尔莉安和戈拉德尔前往闲置的审判教义所作为他们的新基地。在建筑下方，斯布克展示了统御主的物资储藏所——以及隐藏的地下湖，解释了为什么运河干涸了一百年。',
			},
			'hoa-31': {
				title: '水流改道',
				description:
					'沙赛德、斯布克和布利兹讨论将厄尔多的供水改道至审判教义所下方地下湖的理由。他们辩论如何罢免奎林而不造成更糟的替代者。沙赛德为奎林作为凯西尔反贵族政策的真正追随者的立场进行了反向论证。',
			},
			'hoa-38': {
				title: '火焰幸存者',
				description:
					'沙赛德和布利兹坐在一家酒馆中，观察司卡人如今如何自由地走进迷雾——曾经是不可想象的事。他们加入一张当地人的桌子解释他们在厄尔多的存在并为依蓝德接替奎林的方案辩护。司卡人无动于衷：他们不需要外界帮助，因为火焰幸存者已经在处理公民的问题。沙赛德好奇地请求见这位新的幸存者，被告知第二天参加一场处决——尚未意识到城市低语的英雄就是斯布克。',
			},
			'hoa-40': {
				title: '教廷调查',
				description: '沙赛德调查审判教义所，努力获取其下方的储藏洞穴，同时在奎林的多疑统治下周旋。',
			},
			'hoa-41': {
				title: '幸存者现身',
				description:
					'沙赛德与布利兹和艾尔莉安一起参加一场处决，思考幸存者教会如何演变以及这位新的"火焰幸存者"能否真正挑战公民。他们看着一栋燃烧的建筑，人群骚动——然后一个身影从火焰中冲出，抱着一个小女孩。艾尔莉安挑动旁观者的情绪，他们在混乱中冲向守卫。沙赛德首次亲眼看到火焰幸存者，意识到厄尔多所崇拜的英雄就是斯布克。',
			},
			'hoa-46': {
				title: '特雷教与信任',
				description:
					'沙赛德与布利兹和艾尔莉安等待斯布克归来，推测他如何能在两楼坠落中幸存——没有已知的镕金术师曾在触发后获得新能力。他重温特雷教，一种他始终偏爱的宗教，觉得它模糊得宜人但暂缓判断。研究他的金属意识时，他回忆起马什在升华之井将它们当作武器，感到自己寻找信仰的努力毫无意义。布利兹问他为什么如此细心地照料金属意识却从不佩戴它们；沙赛德回答说没有好处——拯救世界可能为时已晚。地震摇撼建筑。斯布克回来，告诉他们散布关于奎林镕金术师的谣言，并请沙赛德恢复运河水流。当被问及他的生还时，斯布克拒绝解释——只要求沙赛德信任他。',
			},
			'hoa-49': {
				title: '运河工程学',
				description:
					'在斯布克的请求激励下，沙赛德从铜意识中提取了一本工程学书籍并开始研究如何重新注满厄尔多干涸的运河。他详细向布利兹讲解水流力学的原理——布利兹暗自高兴，看到沙赛德自廷德薇尔死后首次重新对他的学术表现出兴趣。布利兹敦促他做自己并做让他快乐的事。斯布克带着一个严峻的观察加入他们：奎林没有攻击，这感觉不对——公民靠将人送入迷雾、宣布幸存者为纯洁者、并以幸存者之名杀害贵族而崛起，同时隐瞒没有一个贵族死于迷雾病的事实。沙赛德宣布他已准备好开始施工。戈拉德尔打断他们：贝尔德雷前来请求与斯布克交谈。贝尔德雷恳求团队不要杀害她的兄弟。经过私下商议，他们决定扣留她为人质，同时散布她已叛逃的谣言。',
			},
			'hoa-53': {
				title: '看着斯布克成长',
				description:
					'沙赛德在场旁观斯布克与贝尔德雷交谈——他们在第49章劫持的人质。他听着斯布克讲述他在凯西尔团队中的生活，承认沙赛德和布利兹让他下达命令即使他觉得自己力不从心。斯布克的告白两面皆伤——这少年正在成长为领袖，但沙赛德在年轻的锡眼身上看到了自己的疑虑。当斯布克离开去鼓舞城市时，沙赛德留下，看着那个曾经满口街头俚语的人成为某种更伟大的存在。',
			},
			'hoa-56': {
				title: '信仰的需要',
				description:
					'沙赛德看着工人建造他的运河改道结构，对他们的效率感到满意。斯布克找到他报告城市中的骚乱——然后停顿，察觉到沙赛德对他的缺乏信心。斯布克告诉沙赛德他仍然相信即使他自己失败，有人在守望事件并会纠正一切。这话落得比斯布克知道的更重：沙赛德意识到他一直缺少的并非一个完美的宗教，而仅仅是再次相信某事物的能力。',
			},
			'hoa-50': {
				title: '洞穴发现',
				description: '沙赛德发现了淹没干涸运河系统的机制——统御主曾排干运河将水藏在下方储藏洞穴中。',
			},
			'hoa-58': {
				title: '拯救厄尔多',
				description:
					'沙赛德指导斯布克如何启动水流改道机制，并确认运河中没有人员——当水回流时无人会溺亡。他从远处观看奎林演讲中的对峙展开：骚乱、贝尔德雷被揭示为射币手、斯布克从奎林和自己身上扯下钉刺。当火焰在城中肆虐、教廷建筑本身也起火时，沙赛德意识到无人能到达机制。但斯布克，那个曾经比什么都更怕火的少年，冲入了地狱。片刻后水流涌入运河，扑灭火焰拯救了厄尔多——代价是那位证明自己是英雄的年轻锡眼。',
			},
			'hoa-59': {
				title: '宣告者的重担',
				description:
					'坦森到达厄尔多，发现建筑被焚毁，斯布克牺牲后运河重新流动。他假冒信使蒙混过依蓝德的士兵并找到布利兹——布利兹短暂将他误认为奥瑞瑟之后坦森纠正了他。他们去找沙赛德，沙赛德解释纹远在法德雷克斯城。坦森感到忧虑：他必须找到她因为涉及永世英雄和世界末日。当沙赛德以空洞的冷漠回应这个消息时他感到困惑——蓄存者已失去所有信仰。',
			},
			'hoa-62': {
				title: '宣告者',
				description:
					'沙赛德在医院中守护斯布克——少年活着但失去意识，严重烧伤。贝尔德雷讲述斯布克如何改变了她哥哥，他现在是一名英雄。沙赛德离开去回顾他档案中最后十种宗教，花了一整天阅读并全部拒绝。他思索它们的共性、共同的矛盾。打开他与廷德薇尔合编的关于永世英雄的日志，他发现玫尔的花夹在其中，感到背叛——他对神缺失的理性信念阻碍了他拥有信仰。无意中听到坦森向布利兹告别，他默默祈祷能有信仰的对象。坦森请布利兹代他向"宣告者"致意——这个词激发了某种深层的东西。沙赛德冲出去，要求坦森重复这个词，然后核查笔记：灭绝将"宣告者"改为"神圣第一见证者"。坦森如何知道原文？坦森反问：为什么没有人想知道拉希克的同伴驯化师发生了什么？布利兹猜测是贵族；沙赛德反驳——他们将是镕金术师兼储金术师，正是统御主极力防止的组合。然后坦森揭示真相：这些驯化师被变成了迷雾幽灵，然后变成了坎得拉。他们是第一代。沙赛德的宗教——泰瑞司信仰——仍然活着。他准备好前往坎得拉家园，坦森提出为他带路并说服他们末日已至。',
			},
			'hoa-66': {
				title: '前往家园',
				description:
					'沙赛德骑在坦森身上向南前往坎得拉家园，坦森已变形成一匹强壮有力的马。沿途坦森告诉他坎得拉是如何从统御主的同伴驯化师被创造出来的，解释了他们的能力和第一契约，并讲述了其他灭绝造物。坦森还揭示了他的信念：纹将带领一支镕金术师大军前往家园，沙赛德必须说服第一代形势有多严峻——因为他们有一项任务要完成。他们抵达哈辛深坑的一处洞穴群，家园就隐藏在那里。坦森将沙赛德留在入口，沙赛德独自走入坎得拉隧道，遇到守卫护送他深入黑暗。',
			},
			'hoa-68': {
				title: '传世者',
				description:
					'沙赛德被护送穿过哈辛深坑下方的坎得拉隧道，注意到坎得拉对他表现出恐惧。他询问第一契约在统御主死后的状况——但坎得拉不知道。被带到信托厅，他宣称自己是宣告者：他是泰瑞司人，坎得拉也是，他发现了永世英雄并目睹了她。他宣告末日已经来临。得到一张桌子书写后，第二代的人群聚集。当他要求与他们的上级交谈时，他们嘲笑。坎帕尔要求知道坦森是否派他来的；沙赛德确认。坎帕尔问沙赛德认为他能说什么来改变他们的想法。沙赛德讲述了他终身研究宗教——以及只有一种仍存在的预感，即泰瑞司人的宗教，其预言恰好描述了现在正在发生的事。他敦促他们阅读他被篡改的笔记并与第一代的原始知识比较，以看清灭绝试图隐藏什么。第一代出现，命令所有其他坎得拉离开，以便与沙赛德单独交谈——称他为传世者。',
			},
			'hoa-71': {
				title: '信托',
				description:
					'沙赛德和第一代将他被篡改的笔记与原始泰瑞司记录比对，找出灭绝的改动。他惊叹于自己的宗教与他拒绝的那些有多少共同之处——哈德克告诉他寻求一个不需要证明的信仰是徒劳的，因为这样的宗教不存在。哈德克解释他们的神是存留而非统御主，存留给予人类的自己比灭绝更多——这就是为什么灭绝会来寻找他的身体。沙赛德用白镴揭开信托：坎得拉藏匿的庞大天金储藏，在帝国内秘密转移了数个世纪。远处，坦森发现一条熔岩河挡住了通往法德雷克斯的路，绝望地意识到绕路将花费太长时间。',
			},
			'hoa-75': {
				title: '决断',
				description:
					'沙赛德了解了坎得拉的宗教：他们的神"特尔"意为"存留"，泰瑞司预言讲述永世英雄成为存留的继承者。回顾他的金属意识，他意识到信仰植根于感知而非规则——布利兹是对的：他注定不是一个无神论者。他前往信托厅，那里挤满了讨论迷雾消失的坎得拉。哈德克谈到决断——第一代的命令是所有坎得拉必须移除他们的赐福——沙赛德推测有人已经接管了存留的力量。在任何人行动之前，坎帕尔发动政变罢免第一代。沙赛德争辩但被捆绑关押，坎得拉陷入内战。',
			},
			'hoa-78': {
				title: '坦森营救',
				description:
					'坦森在坎得拉内战期间将沙赛德和第一代从关押中救出。假扮弗库德，他为第一代争取时间再生身体——这一过程将恢复最古老坎得拉的全力。沙赛德看着古老者们开始生长，知道接下来会发生什么，第一代的智慧可能是他们最后的希望。',
			},
			'hoa-79': {
				title: '决断开始',
				description:
					'第一代已完成再生。毫无预兆地，坦森攻击沙赛德——掐住他的喉咙。尽管坦森试图警告危险，他的身体已不再属于自己：灭绝通过他们的赐福夺取了坎得拉的控制权。洞穴四处，其他坎得拉开始颤抖变形。哈德克大喊决断已经到来。坦森一只手伸向自己的肩膀，另一只手继续掐住沙赛德直到他失去意识——对如今指挥他族人的力量做出的最后一次徒劳的抵抗。',
			},
			'hoa-80': {
				title: '守护信托',
				description:
					'沙赛德在一大群迷雾幽灵中醒来。意识到有些坎得拉没有移除他们的赐福后，他冲向保护天金。在坎帕尔的带领下，叛变坎得拉试图将储宝藏交给灭绝。被发现后，沙赛德激活钢金属意识加速冲向他的金属意识袋，然后激活充能的白镴金属意识和铁金属意识——用额外的重量和力量关闭并挡住通往信托厅的门。当坎帕尔的部队压向门时他恳求帮助。然后，不可思议地，依蓝德·泛达踏入密室。沙赛德震惊——但没有时间叙旧。他让依蓝德阻止从第二扇门出来的坎得拉，士兵轻松制伏了他们。',
			},
			'hoa-81': {
				title: '神之躯',
				description:
					'沙赛德告诉依蓝德真相：天金是灭绝的身体，交出它将立即毁灭世界。他以一种平静的确信说道——纹会拯救他们。当德莫报告迷雾幸存士兵没有任何镕金术能力时，依蓝德递给德莫一颗天金珠，他燃烧了它：他们都是先知者。当依蓝德发表演讲并带头冲锋时，沙赛德在洞穴入口就位，为任何需要更多天金的士兵补给。他看着战斗肆虐数小时，告诉附近挤在一起的人们纹会出现。他以一种他以为自己永远失去的信仰相信着。',
			},
			'hoa-82': {
				title: '永世英雄',
				description:
					'沙赛德在世界消亡时留在坎得拉洞穴入口。他看到纹和阿提的身体出现在依蓝德的尸体旁。伸出手，他同时接管了存留与灭绝——然后利用他所有铜意识中的知识将世界及其人民恢复至升华前的状态，化身为和谐。',
			},
			'hoa-83': {
				title: '和谐',
				description:
					'沙赛德作为和谐升华，结合了灭绝与存留。他重塑世界——移动星球、恢复绿意、治愈千年创伤。',
			},
		},
		elend: {
			...enData.movements.elend,
			'tfe-12': {
				title: '读书的贵族',
				description:
					'艾蓝德·凡处在自家要塞的舞会上注意到纹独自在阳台上便走了过去。他掏出《纪念碑之试炼》开始阅读，惹恼了她，而其余贵族则在周围跳舞和玩弄政治。',
			},
			'tfe-18': {
				title: '与瓦莱特的夜晚',
				description: '艾蓝德参加艾拉瑞尔要塞舞会，照常坐在纹旁读书。他赞美她的裙子令她目瞪口呆。',
			},
			'tfe-23': {
				title: '手帕',
				description:
					'艾蓝德在哈斯汀要塞舞会上找到纹。她问他是否与司卡女人在一起过。他坦白父亲在他十三岁时强迫他，之后那女人被杀但他再也没做过。他给纹一块手帕表示认真求爱之意。与朋友离开后他们登上塔楼讨论统御主的失败。',
			},
			'tfe-28': {
				title: '莱凯要塞舞会',
				description:
					'艾蓝德在莱凯要塞舞会上出现在纹面前。说想吻她但纹坚持他不了解她。他们散步时艾蓝德透露凡处家所有财富来自哈辛坑的天金——完全信任她。提到泰基尔家被哈斯汀家杀害并试图说服瓦莱特离开陆沙德。',
			},
			'tfe-28.2': {
				title: '父亲的召唤',
				description:
					'艾蓝德回到凡处要塞试图偷偷经过父亲房间。斯特拉夫·凡处领主——锡金迷雾人，什么也不放过——叫住了他。斯特拉夫命令他与哈斯汀家共进晚餐。之后贾斯特到来透露他跟踪了瓦莱特小姐的马车——她只带着泰瑞司人到达费利司，瓦莱特消失了。艾蓝德意识到他泄露了天金的秘密，向父亲提出交易：他去赴宴换取派间谍监视瓦莱特。',
			},
			'tfe-30': {
				title: '凡处舞会',
				description:
					'艾蓝德在凡处要塞舞会期间与父亲共进晚餐。纹引起他的注意，两人发生冲突。当纹得知有人要暗杀艾蓝德后冲入迷雾中。夜晚在纹与尚·艾拉瑞尔的战斗中以混乱收场。在混乱中艾蓝德溜走了。',
			},
			'tfe-31': {
				title: '间谍报告',
				description:
					'艾蓝德和贾斯特会见费尔特，后者汇报了艾蓝德间谍发现的关于克拉布斯店铺及其居住者的一切。之后凡处卫兵带艾蓝德去见父亲斯特拉夫，后者透露尚·艾拉瑞尔是被派来暗杀艾蓝德的迷雾之子。',
			},
			'tfe-33': {
				title: '行刑马车',
				description:
					'艾蓝德在喷泉广场看到雷诺的仆人被关在行刑马车中。他呼喊瓦莱特但在人群中找不到她。',
			},
			'tfe-34': {
				title: '凯西尔救艾蓝德',
				description:
					'艾蓝德来到喷泉广场雷诺的囚笼前问起瓦莱特。一名审判官落在囚笼上正要用斧头砍艾蓝德时凯西尔攻击了审判官救了他的命。凯西尔对艾蓝德喊瓦莱特没事。',
			},
			'tfe-36': {
				title: '凡处家族权力',
				description:
					'艾蓝德的父亲告知司卡叛乱爆发并想逃离陆沙德。艾蓝德拒绝离开。斯特拉夫同意——希望艾蓝德会死——并将凡处家族的权力移交给他。艾蓝德命令士兵前往莱凯要塞进行共同防御，带着五名最好的士兵去见司卡领袖。',
			},
			'tfe-37': {
				title: '救纹',
				description:
					'艾蓝德向司卡人出金让人带他去找多克森并告诉他们凡处家族不会抵抗叛乱——应当合作。然后艾蓝德和六名士兵冲入克瑞迪克·肖救纹。秘密被揭开——他知道她是迷雾之子。纹捧住他的头亲吻了他然后去杀统御主。',
			},
			'tfe-38': {
				title: '哲人王',
				description:
					'统御主死后艾蓝德成为呼吁秩序的统一声音。他开始与司卡和贵族领袖会面起草新国家的法典。',
			},
			'tfe-39': {
				title: '新国王',
				description:
					'艾蓝德·凡处在向司卡和贵族领袖发表精彩演说后被接受为中央统御区的国王。他坐在凡处要塞起草新的法典。纹从迷雾中透过窗户秘密地看着他然后跑向他——两人拥抱。',
			},
			'woa-1': {
				title: '城墙上的国王',
				description:
					'依蓝德站在陆沙德城墙上，看着五万名士兵在他父亲斯特拉夫·泛达的带领下抵达并在城外扎营。陆沙德围城已经开始。',
			},
			'woa-3': {
				title: '制定法律',
				description:
					'依蓝德在泛达府邸书房起草议会提案。纹在与迷雾之灵相遇后加入他，哈姆带来的情报显示刺客很可能是凯特王派来的。',
			},
			'woa-5': {
				title: '学者国王',
				description:
					'依蓝德在泛达府邸书房与多克森一同处理被围城市的后勤。纹在获取奥瑞瑟的新猎狼犬身体后加入他。',
			},
			'woa-6': {
				title: '阳台观望',
				description:
					'依蓝德在泛达府邸庭院观看纹与哈姆格斗训练。他与克拉布斯打赌输掉了结果，思考团队的长处。',
			},
			'woa-10': {
				title: '议会',
				description:
					'依蓝德向他创建的议会致辞，倡导民主原则。一位名叫廷德薇尔的泰瑞司女性在观众中观看。会议被一则消息打断：第二支军队——凯特王的部队——已在陆沙德城外出现。',
			},
			'woa-11': {
				title: '视察围城',
				description:
					'依蓝德与克拉布斯和纹站在城墙上，观察西面新到的凯特军队和北面他父亲斯特拉夫的部队。布利兹在下方的一次镕金术对抗中遇险，纹用杜拉铝强化的钢推救了他。',
			},
			'woa-13': {
				title: '战务会议',
				description:
					'依蓝德在泛达府邸召集团队开战务会议讨论双重围城。之后，廷德薇尔找到他并主动——态度强硬地——提出教导他为君之道。',
			},
			'woa-14': {
				title: '国王教育',
				description:
					'廷德薇尔开始在泛达府邸对依蓝德进行强力教导，重塑他的衣橱、姿态和仪态。她坚持国王必须看起来和表现得像个国王才能保住权力。',
			},
			'woa-16': {
				title: '国王的转变',
				description:
					'依蓝德站在城墙顶上观察围城军队的挖掘。克拉布斯在城墙上见到他。廷德薇尔派人叫他，剪了他的头发，给他一套军装和一顶王冠——将哲学家转变为战士国王。',
			},
			'woa-17': {
				title: '斯特拉夫的信使',
				description:
					'依蓝德、纹和奥瑞瑟去见斯特拉夫·泛达的信使，结果发现是赞恩。赞恩说斯特拉夫将在营地主持一次会议。依蓝德说他将考虑这个提议。',
			},
			'woa-20': {
				title: '计划谈判',
				description:
					'依蓝德在泛达府邸与多克森、哈蒙德、克拉布斯和布利兹讨论他与斯特拉夫谈判的计划。他打算利用斯特拉夫和凯特互相制衡。廷德薇尔训诫他关于国王的风范。凯特领主的女儿艾尔莉安到来寻求庇护。',
			},
			'woa-21': {
				title: '艾尔莉安的庇护',
				description:
					'艾尔莉安·凯特来到宫殿拥抱布利兹令所有人惊讶。依蓝德给予她款待，团队辩论是否将她作为对付凯特领主的筹码。',
			},
			'woa-22': {
				title: '为民主而战',
				description:
					'依蓝德在议会面临日益增长的反对，围城的恐惧驱使许多人寻求一个比哲学家国王更强大的领袖。',
			},
			'woa-23': {
				title: '沙赛德的警告',
				description:
					'沙赛德归来报告贾斯特斯·勒卡尔麾下的两万克罗斯正在逼近陆沙德。团队讨论应对第三支围城部队的应急计划。沙赛德警告迷雾本身可能构成严重危险并正在杀人。',
			},
			'woa-25': {
				title: '佯攻',
				description:
					'斯特拉夫对陆沙德城墙发动佯攻以测试城防。依蓝德的士兵准备不足，但攻击很快被叫停。这次试探揭示了城防战备的弱点。',
			},
			'woa-26': {
				title: '与父亲谈判',
				description:
					'依蓝德骑马前往斯特拉夫·泛达的营地谈判，以纹为护卫。会面揭示了斯特拉夫对他理想主义儿子的蔑视。',
			},
			'woa-27': {
				title: '智胜斯特拉夫',
				description:
					'斯特拉夫在谈判中叫士兵来杀依蓝德，但依蓝德虚张声势说如果他死了纹会摧毁整个营地。这招奏效——斯特拉夫放他们离开。在返回陆沙德的路上，依蓝德收到一张毁灭性的字条：议会已投票不信任，他不再是国王。',
			},
			'woa-28': {
				title: '谋划外交',
				description:
					'回到泛达府邸，依蓝德试图让三支军队——斯特拉夫、凯特和逼近的克罗斯大军——互相制衡。',
			},
			'woa-31': {
				title: '彭罗德议长',
				description:
					'依蓝德与全体团队成员抵达议会。他提名彭罗德领主担任议长来在没有国王时主持会议，并向议会致辞说明他与斯特拉夫的会面——以纹的声望作为威慑。新国王的提名开始：彭罗德、依蓝德和凯特领主，后者从人群中现身。',
			},
			'woa-32': {
				title: '凯特的博弈',
				description:
					'凯特领主向议会致辞，主张他的军队和依蓝德的部队联合可以挡下围攻者，并承诺回报支持他的人。议会授予凯特一座废弃要塞和一千名士兵作为保护。凯特的儿子格诺丁邀请依蓝德在一周后谈判。',
			},
			'woa-33': {
				title: '被投毒的井',
				description:
					'依蓝德调查一起大规模疾病事件，发现一口城市井水被投毒。他派遣哈蒙德的士兵救治病人并开始搜索破坏者。',
			},
			'woa-34': {
				title: '研究与策略',
				description:
					'依蓝德在泛达府邸图书馆与哈蒙德、沙赛德、廷德薇尔和前义务官努尔登一起，规划议会策略和如何防止凯特被任命为国王。沙赛德建议他专注于自己的信念而非民意。',
			},
			'woa-35': {
				title: '与凯特共进晚餐',
				description:
					'依蓝德和纹前往哈斯汀要塞与凯特领主共进晚餐。席间他们讨论布利兹和艾尔莉安叛逃的事、凯特对陆沙德的计划以及失踪的天金储藏。凯特提供食物换取天金但依蓝德说尚未找到。凯特放依蓝德离开，认为他作为人质没有价值。',
			},
			'woa-37': {
				title: '巡逻城墙',
				description:
					'依蓝德和哈蒙德巡逻城墙，讨论依蓝德想继续做国王以保护陆沙德人民的愿望。依蓝德灵光一闪想出了如何获得足够选票以免被议会替换。',
			},
			'woa-38': {
				title: '被罢免',
				description:
					'依蓝德出席议会参加国王选举，他加入了幸存者教会以争取司卡选票。刺客在会议期间发动袭击——纹击退他们但受重伤。议会在彭罗德府邸重新召集，彭罗德以三分之二多数当选国王。依蓝德认输。',
			},
			'woa-40': {
				title: '守在纹床边',
				description:
					'依蓝德坐在泛达府邸纹的病床边，告诉她彭罗德是新国王。当纹触碰他时他不由自主地退缩，被纹杀死刺客的凶残所震撼。',
			},
			'woa-41': {
				title: '寻求建议',
				description:
					'依蓝德在泛达府邸拜访沙赛德和廷德薇尔，反思他保护陆沙德的失败。他们争论他为何失去王位，但两人都赞扬他坚守理想。',
			},
			'woa-42': {
				title: '克罗斯任务',
				description:
					'依蓝德和哈蒙德使用暗门离开陆沙德。依蓝德找到贾斯特斯·勒卡尔的克罗斯大军并要求他撤军，但贾斯特斯坚称一切在控。依蓝德刺伤贾斯特斯并挟持他逃生，然后杀死一只克罗斯发现它们携带货币。',
			},
			'woa-44': {
				title: '找到纹',
				description:
					'依蓝德、哈蒙德和斯布克讨论纹为何袭击凯特要塞。哈蒙德揭示纹一直在保守秘密并与另一名迷雾之子合作。奥瑞瑟带领依蓝德在卡蒙旧藏身处找到纹，她在那里说要离开陆沙德前往泰瑞司。',
			},
			'woa-46': {
				title: '从克罗斯处归来',
				description:
					'依蓝德从克罗斯营地归来谈判失败——贾斯特斯失去了对野兽的控制。克罗斯无论如何都会进攻。',
			},
			'woa-49': {
				title: '通过锡门启程',
				description:
					'当依蓝德准备离开前往升华之井时，廷德薇尔斥责他抛弃人民并质疑他对升华之井力量的信仰。他愤怒地赶走她但同意将包裹送到塔辛德文的长老会。斯布克和艾尔莉安加入，依蓝德一行通过锡门骑行而出，在纹的帮助下躲避斯特拉夫的军队。',
			},
			'woa-50': {
				title: '向北之旅',
				description:
					'依蓝德、纹和斯布克在陆沙德以北一天路程处拔营，相信已摆脱斯特拉夫的侦察兵。斯布克感觉到有什么东西在跟踪他们，纹称之为迷雾之灵。他们对升华之井位于山中的确定性开始动摇。',
			},
			'woa-51': {
				title: '处决贾斯特斯',
				description:
					'跟在队伍后面的五个人原来是贾斯特斯·勒卡尔，当他的假币烧毁并失去对克罗斯的控制时他抛弃了它们。盛怒于贾斯特斯任由这些野兽肆意蹂躏陆沙德的依蓝德处决了他的老朋友。当斯布克揭示沙赛德骗他们离开时，众人决心返回。',
			},
			'woa-52': {
				title: '掉头',
				description:
					'纹以白镴急奔先行，依蓝德和斯布克奋力向陆沙德骑行，无法匹敌她的镕金术速度但决心到达被围困的城市并援助克罗斯攻击下的幸存者。',
			},
			'woa-56': {
				title: '来自塔辛德文的难民',
				description:
					'在路上依蓝德遭遇迷雾之灵，它指向北方并试图推他然后消失。他和斯布克遇到一群逃离塔辛德文的泰瑞司难民，钢铁审判官屠杀了那里的长老会。依蓝德陪同他们前往陆沙德，相信纹以某种方式胜利了。',
			},
			'woa-57': {
				title: '皇帝归来',
				description:
					'依蓝德、哈蒙德和斯布克随难民人群进入陆沙德并与纹会面，纹告诉他他现在是皇帝。放下他对统治的疑虑，他跟随纹走向克雷迪克·肖，她相信升华之井就隐藏在那里。',
			},
			'woa-58': {
				title: '前往升华之井',
				description:
					'依蓝德与纹、哈蒙德和斯布克潜入克雷迪克·肖下方的洞穴，发现了一个储藏所和一张终极帝国的金属地图，斯特林市被圈出。在发光的升华之井旁，他捡起一颗嵌在粘土中的小金属珠——然后迷雾之灵刺穿了他的腹部，马什在上方与沙赛德战斗。',
			},
			'woa-59': {
				title: '迷雾之子皇帝',
				description:
					'在升华之井被刺穿并奄奄一息的依蓝德获救，纹将统御主金属珠强行塞入他的口中，将他转变为迷雾之子。',
			},
			'woa-60': {
				title: '在城墙上',
				description:
					'新成为迷雾之子并被确认为中央统御区皇帝的依蓝德与纹站在陆沙德城墙顶上。当纹为释放囚禁在升华之井的怪物而绝望时，他安慰她无论来什么他们都会一起度过——即使迷雾开始持续到白天，为他们来之不易的胜利蒙上阴影。',
			},
			'hoa-1': {
				title: '战争中的皇帝',
				description:
					'依蓝德率领军队前往维提坦，现在是一名迷雾之子皇帝，指挥军事行动以确保统御主隐藏的物资储藏所的安全。',
			},
			'hoa-3': {
				title: '确保储藏所安全',
				description:
					'依蓝德确保维提坦储藏洞穴的安全，找到食物和一块金属板信息，警告拉希克囚禁的危险以及法德雷克斯储藏所的位置。',
			},
			'hoa-8': {
				title: '运河营地',
				description:
					'依蓝德向法特伦解释将难民暴露在迷雾中是必要的——幸存者现已免疫。他和纹带领难民前往德莫部队扎营的运河。依蓝德命令护送难民前往陆沙德，并派遣两支特遣队返回维提坦取回物资。',
			},
			'hoa-10': {
				title: '向西行军',
				description:
					'依蓝德率领军队在陆沙德南方行军前往法德雷克斯，沙赛德、布利兹、戈拉德尔和艾尔莉安完成外交任务后归队。沙赛德与团队分享他因廷德薇尔之死而日益加重的抑郁。',
			},
			'hoa-12': {
				title: '凯西尔会怎么做？',
				description:
					'依蓝德召集纹、凯特、布利兹、艾尔莉安、哈蒙德、德莫和沙赛德开议会。他们讨论日益逼近的迷雾、食物短缺以及攻占储藏所的计划。依蓝德提议在前往法德雷克斯的行军途中将部队暴露在迷雾中以使其免疫——然后问团队"凯西尔会怎么做？"来重燃他们的希望和决心。',
			},
			'hoa-15': {
				title: '辩论暴露',
				description:
					'依蓝德和哈蒙德辩论将士兵暴露迷雾的利弊，军队继续向西行军。当克罗斯休曼引发骚乱时，依蓝德派纹去处理他。克罗斯令人不安的话语——迷雾恨他和纹——让依蓝德更加怀疑迷雾的意图。',
			},
			'hoa-17': {
				title: '迷雾暴露',
				description:
					'依蓝德命令士兵在受控条件下暴露迷雾中以便为未来战斗免疫。德莫找他对质——要求他不要以幸存者之名发言除非他是真正的信徒，坚称凯西尔被赋予了神圣力量。依蓝德看着士兵开始病倒，包括德莫本人。',
			},
			'hoa-21': {
				title: '百分之十六',
				description:
					'德莫在病后存活。依蓝德向纹吐露他害怕自己因让士兵暴露迷雾而变得像统御主一样残忍——并质疑自己禁止殴打贵族儿童来触发的法律是否正确。努尔登提交迷雾病报告；纹质疑他的方法让他仅用从未暴露过的士兵重新计算。结果：精确的百分之十六。第二组样本匹配到最接近的整数人数。第三和第四组产生相同比例，零误差。依蓝德承认这模式太精确不可能是偶然——某种智能在背后操纵。',
			},
			'hoa-25': {
				title: '法德雷克斯围城',
				description:
					'依蓝德的军队抵达法德雷克斯并在灰烬覆盖的平原上建立围城线。他观察天然岩石阵列、缺乏树木和峡谷般的入口——这座城市很难攻取。他与哈蒙德、凯特和纹辩论策略：警惕突袭、派遣间谍、破坏食物供应，但不刺杀尤门。依蓝德提出陪纹执行侦察任务；她直说他还不够强。',
			},
			'hoa-27': {
				title: '等待侦察兵',
				description:
					'依蓝德留在围城营地，纹独自潜入法德雷克斯。虽然本章是纹穿行城市，但依蓝德对她能力的信任是安静的基石——他等待，希望她带回可以免于一场血腥攻击的情报。',
			},
			'hoa-28': {
				title: '迷雾之灵与预言',
				description:
					'纹侦察归来告诉依蓝德她在法德雷克斯内感知到迷雾之灵——它比灭绝弱得多但对抗着他。她谈到了作为永世英雄的命运，但依蓝德警告预言可能已被灭绝篡改。他们确认彼此的信任：纹不能大声说出她的计划因为怕灭绝会得知，但她敦促依蓝德谨慎调查百分之十六的异常现象。依蓝德决心仅将部队作为最后手段——纹提出一条更大胆的道路：闯进尤门的一场舞会直接与他对话。',
			},
			'hoa-30': {
				title: '第一场舞会',
				description:
					'依蓝德惊讶于无人反对他和纹将自己置于危险之中——并谨慎规划了王位继承顺序给凯特领主。他们前往奥瑞尔要塞的舞会，将姓名和头衔交给仆人后被通报给宾客。他们分开交际后面对尤门。依蓝德在房间另一边看着纹开始运用贵族的社交圈。',
			},
			'hoa-36': {
				title: '十六条模式',
				description:
					'依蓝德接受凯特建议投毒法德雷克斯水井并威吓外围村庄——但划清界限不杀害无辜。地震震撼营地，提醒他们时间不多了。德莫从迷雾病中康复但请求辞去将军职务，认为凯西尔判定他不够格。他揭示了一个新的统计异常：十六分之一生病者要么正好病十六天要么死亡——又一个十六，就像迷雾病率。依蓝德拒绝辞职并命令德莫停止自怜，改用科学推理。营地外的喊声打断了他们。',
			},
			'hoa-37': {
				title: '尤门的计策',
				description:
					'尤门对营地的夜袭被证明是毁灭性的调虎离山：当纹追逐一名神秘迷雾之子穿越城市时，尤门部署了重型攻城器械歼灭了依蓝德两万克罗斯中的一半。他将一千名幸存者的控制权交给纹——但围城变得绝望得多。',
			},
			'hoa-40': {
				title: '第三技艺',
				description:
					'依蓝德、哈蒙德、凯特、努尔登和德莫一起梳理证据：休曼使用的钉刺、马什对审判官创造的描述、猎杀司卡迷雾人的行动。依蓝德连接了碎片——克罗斯由人类制造，同样的血金术过程创造了审判官和坎得拉。他们推测这三者都有相同的情绪镕金术弱点，被他们真正的敌人所利用。听说迷雾幸存士兵被战友排挤，依蓝德命令德莫将他们组建为新师。康拉德从陆沙德抵达：彭罗德在粮食暴乱席卷首都时恳求援助。依蓝德看出灭绝攻击中的模式并开始推断其含义。',
			},
			'hoa-43': {
				title: '拒绝决斗',
				description:
					'依蓝德参加资源执事所的第二场舞会，知道纹正在溜走寻找储藏所。他向尤门提出决斗解决争端。尤门拒绝——对抗一名迷雾之子他将处于致命劣势。尤门声称他赢得了统治权；依蓝德反驳说像统御主那样控制克罗斯使他成为帝国的合法继承者。真正的目的是争取时间：依蓝德尽可能长时间地与尤门辩论，纹在下方悄然工作。',
			},
			'hoa-44': {
				title: '琥珀金与天金',
				description:
					'依蓝德继续与尤门辩论泰瑞司侍从制度，直到一名被纹击昏的间谍跌跌撞撞闯入——暴露了她的行踪。急切想知道尤门是否是迷雾之子，依蓝德扑上去掐住他的脖子。当尤门不反抗时，依蓝德松手——尤门以非自然速度刺伤了他，证实他燃烧天金。依蓝德燃烧琥珀金，干扰尤门的天金阴影，然后撤退——惊讶尤门没有追击。',
			},
			'hoa-44.2': {
				title: '字条',
				description:
					'回到围城营地，依蓝德等待漫长数小时纹从储藏所返回。一封来自尤门的字条送到——他已抓获了她。围城不再是为了物资。这是私人恩怨。',
			},
			'hoa-47': {
				title: '失去纹',
				description:
					'依蓝德站在迷雾中担忧纹但保持对她的信念。凯特领主告诉他围城正在失败——他们应该攻击法德雷克斯然后返回陆沙德。一场骚乱打断他们：迷雾幸存士兵被战友排挤，正与其他部队斗殴。依蓝德制止打斗，然后命令德莫率迷雾幸存师前往陆沙德援助彭罗德——既增援首都又将受迫害的士兵与主力部队分开。他前往努尔登的帐篷制定对付尤门的新围城策略。',
			},
			'hoa-51': {
				title: '杜拉铝计策',
				description:
					'依蓝德用钢推前往一处正被克罗斯大军攻击的村庄。他独自杀穿它们，然后施展杜拉铝强化的情绪牵引——在势不可挡的瞬间夺取了三万克罗斯的控制权。他带着新军队返回营地。',
			},
			'hoa-55': {
				title: '跪在灰烬中',
				description:
					'依蓝德带着三万名新克罗斯走回营地，倒在灰烬中准备放弃。迷雾之灵出现并跪在他身旁。依蓝德用是非问题询问它——当灭绝会扭曲话语时人影用手臂挥动表示否定——得知迷雾不是在杀人、它不想要他攻击法德雷克斯、灭绝有弱点。人影急迫地指向东北方向，然后指向依蓝德的金属药剂瓶，低语说也许他们能幸存然后消失。这次遭遇让他重获活力，虽然他不明白为什么。',
			},
			'hoa-61': {
				title: '晨间攻击',
				description:
					'依蓝德带着三万新克罗斯回到营地并告诉哈蒙德纹还活着——她绑定的克罗斯没有失控，这意味着尤门没有处决她。哈蒙德报告斥候带来的严峻消息：陆沙德和中央统御区许多村庄被摧毁，一些城市直接被地震和熔岩流摧毁。纹的生命悬于一线世界在他们周围崩塌，依蓝德命令哈蒙德策划一次晨间突袭，以克罗斯为先锋。',
			},
			'hoa-65': {
				title: '撤入法德雷克斯',
				description:
					'依蓝德问哈蒙德攻城是否正确——不正确——并命令营地打包准备返回陆沙德。当尤门劣势兵力冲锋出来时，依蓝德起疑并命令克罗斯撤退。在他行动之前，灭绝从他手中夺取了所有克罗斯的控制权。他的军队被他们刚刚指挥的造物攻击。纹赶到并下令向法德雷克斯城进行绝望的撤退，与尤门结成对抗共同敌人的临时联盟。',
			},
			'hoa-67': {
				title: '注视风暴聚集',
				description:
					'依蓝德和尤门在法德雷克斯城内看着庞大的克罗斯大军在城外集结。一场巨大的地震震撼城市。纹告诉依蓝德她必须离开前往陆沙德获取天金储藏，希望能引开灭绝。',
			},
			'hoa-70': {
				title: '迷雾的秘密',
				description:
					'依蓝德与尤门巡视城市并参观医务室。看着一个迷雾病男孩在痛苦中，他意识到这种经历与用来触发镕金术师的殴打如出一辙。他给一名迷雾幸存士兵一瓶镕金术药剂——那人可以燃烧金属。迷雾不是在杀人；它们在将人触发为镕金术师。灭绝在依蓝德采取行动前派出克罗斯攻击。',
			},
			'hoa-73': {
				title: '迷雾移动',
				description:
					'依蓝德和哈蒙德注意到迷雾的突然变化——不再是往常的混乱旋转，它们正在有目的地流动，全部朝陆沙德方向。在他们搞清这意味着什么之前，他们一直对抗的克罗斯大军突然撤退，也朝首都方向行进。某种根本性的东西已经改变——依蓝德知道纹是这一切的核心。',
			},
			'hoa-74': {
				title: '先知者现身',
				description:
					'依蓝德和尤门讨论迷雾的突然消失和异常闷热。依蓝德命令法德雷克斯的所有人聚集在储藏洞穴中避难。尤门将自己的一颗天金珠按入依蓝德手中并揭示自己是一名先知者——天金迷雾人，统御主保守秘密的十六种之一。依蓝德现在带着尤门的天金和对十六条模式的新理解。',
			},
			'hoa-74.2': {
				title: '飞向陆沙德',
				description:
					'依蓝德离开法德雷克斯开始前往陆沙德。他如纹曾教他的那样行进——扔下一只马蹄铁，钢推离它将自己弹入空中，然后牵引另一个锚重复循环。独自飞越灰烬覆盖的大地，他向东方疾驰，带着尤门的天金珠，希望能在路尽头找到活着的纹。',
			},
			'hoa-76': {
				title: '前往陆沙德',
				description:
					'仍在穿越中央统御区前往陆沙德，依蓝德在灰烬荒野中推进——扔下马蹄铁，钢推离它，然后牵引另一个锚，如纹曾教他的那样吞噬里程。他带着尤门的天金珠和绝望的希望，愿到达首都时能找到活着的纹。',
			},
			'hoa-76.2': {
				title: '驰入陆沙德',
				description:
					'依蓝德从西面驰入陆沙德，进入他曾经作为国王统治的首都。在他上方的高处，他看不见的地方，纹——新升华为存留——注视着她爱的男人独自抵达城市，孤独而坚定。',
			},
			'hoa-77': {
				title: '克雷迪克·肖废墟',
				description:
					'依蓝德在克雷迪克·肖废墟中搜索——纹升华时以一击推击摧毁了它，统御主千年宫殿如今是一片瓦砾。他在碎石中翻找呼喊她的名字，但陆沙德是空的。人们消失到了储藏洞穴中，纹也不在碎石间。他还不知道她在他上方飘浮，注视着他——灭绝正阻挡她每一次说话的尝试。',
			},
			'hoa-77.2': {
				title: '风中的低语',
				description:
					'依蓝德搜索泛达府邸，发现彭罗德王的尸体——被马什为灭绝钉刺的人，如今躺在沦陷首都的灰烬中死去。他试图拼凑出陆沙德人民去了哪里。然后他听到了：风声，低语着他的名字。纹耗费巨大的努力在灭绝干扰中说出一个词语。"西，"她低语。"深坑。"依蓝德上马向西朝哈辛深坑骑去，不知道什么在那里等着他——只知道纹在呼唤。',
			},
			'hoa-79': {
				title: '抵达深坑',
				description:
					'依蓝德抵达哈辛深坑，发现德莫和迷雾幸存士兵已经在那里。数十万难民聚集——他们来是因为凯西尔让他们来。依蓝德命令迷雾幸存者服用镕金术金属。',
			},
			'hoa-80': {
				title: '难民',
				description:
					'德莫报告数十万难民聚集在深坑——一支克罗斯大军正朝他们行进。没有城墙，没有防御。当依蓝德问他们为何而来时，德莫回答：因为凯西尔让他们来。依蓝德询问声称见过幸存者的目击证人，但无法决定是否相信。然后他听到风中低语他的名字——纹的声音——并跟随它穿过营地朝家园走去。',
			},
			'hoa-80.2': {
				title: '天金宝库',
				description:
					'在纹的低语引导下，依蓝德找到了坎得拉洞穴的入口。在里面他发现沙赛德——蓄存者一直在独自战斗，用他的金属意识抵住门以对抗试图窃取天金的坎帕尔叛变坎得拉。沙赛德告诉他宝藏就在这里：庞大的天金储藏，灭绝的身体本身。依蓝德制服了剩余的坎得拉，但他的思绪在洞外的人群身上。他命令所有人——难民、士兵、坎得拉——在克罗斯大军和日出到达前进入洞穴避难。',
			},
			'hoa-81': {
				title: '最后的演讲',
				description:
					'沙赛德揭示真相：天金是灭绝的身体，如果灭绝取回它世界将终结。德莫报告他所有迷雾幸存士兵服用了金属但无一显示镕金术能力——直到依蓝德递给德莫一颗天金珠并看着他将其燃烧。他们都是先知者，天金迷雾人。依蓝德向他小小的部队发表演讲，披上迷雾斗篷，带领他们冲出洞穴向克罗斯大军冲锋，纹在上方注视。',
			},
			'hoa-81.2': {
				title: '光荣战死',
				description:
					'依蓝德燃烧大量天金长达数小时，先知者们在他身边砍倒成千上万的克罗斯。当他的白镴耗尽时，不知何故他仍能燃烧它——他抬头看到纹。然后马什出现，同样燃烧天金，一股黑暗力量引导着他的动作。依蓝德一次性燃烧杜拉铝与天金，闪现终极清晰的瞬间：他如同神明般看见世界，理解一切。他在斧头砍入胸膛时将剑刺入马什脖颈。马什宣称胜利——但依蓝德低语他错了。每一颗天金珠都已燃尽。灭绝永远无法取回他的身体。依蓝德含笑死去。',
			},
			'hoa-83': {
				title: '在死亡中团聚',
				description:
					'依蓝德的身体被发现躺在鲜花草地中纹的身旁——沙赛德给予重塑世界的第一份礼物——历经一切斗争后终得安息。',
			},
		},
		marsh: {
			...enData.movements.marsh,
			'tfe-7': {
				title: '不情愿的兄弟',
				description: '马什来到克拉布斯店铺——凯西尔的哥哥也是叛军领袖。不情愿地加入了团队的计划。',
			},
			'tfe-10.2': {
				title: '仓库集会',
				description: '马什与团队一起参加秘密仓库集会，看着弟弟凯西尔向司卡工人宣讲革命。',
			},
			'tfe-20': {
				title: '教导纹',
				description:
					'马什到达费利司雷诺庄园教纹探索——用青铜探测燃烧金属的其他镕金术师，识别类型并区分迷雾人和迷雾之子。还教她关于铜以及烟纱者如何隐藏镕金术脉冲。',
			},
			'tfe-27': {
				title: '渗透教会',
				description:
					'马什在曲巷一栋废弃建筑中与凯西尔和纹会面，脸上带着审判教义所低级义务官的纹身。他确实渗透了教会。他揭示教会在司卡区域部署安抚师恒定安抚，由烟纱者掩护。还确认审判官可因衰老而死。',
			},
			'tfe-30': {
				title: '失踪',
				description: '马什沉默了，通讯中断，他消失在审判教义所的最深层。团队担忧最坏的情况。',
			},
			'tfe-32': {
				title: '尸体',
				description:
					'凯西尔和纹发现马什的尸体，血液完全被抽干——一具空壳。后来在店铺找到他的信解释审判官可能会找到他。团队悼念他。但那具残缺的尸体并非表面看起来那样。',
			},
			'tfe-38': {
				title: '审判官',
				description:
					'马什在最后进攻克瑞迪克·肖时出现——活着，被十一根金属钉改造：两根穿过眼睛，八根在胸口，一根在背部连接它们。他拔出卡尔脖子上的钉杀了他并透露他杀了所有其他审判官。',
			},
			'tfe-39': {
				title: '十一根钉',
				description:
					'马什与沙赛德和纹站在司卡区附近的建筑屋顶。他讲述了自己的存活和转变——十一根钉、可怕的过程以及他如何挺下来。还谈到了坎得拉——从迷雾幽灵进化的生物——扮演雷诺领主的那个现在承认纹为主人。',
			},
			'woa-7': {
				title: '修道院向导',
				description:
					'马什出现在沙赛德所在的东方统御区村庄，主动提出带领他前往瑟兰修道院——一座审判官要塞，关于永世英雄的答案可能就在那里。',
			},
			'woa-9': {
				title: '与沙赛德同行',
				description:
					'马什与沙赛德一同前往瑟兰修道院。旅途中他的行为变得越来越不稳定和孤僻，灭绝的微妙影响正在生根。',
			},
			'woa-12': {
				title: '抛弃',
				description:
					'马什突然在修道院抛弃沙赛德并消失于荒野，被一股他日益无法抵抗的力量所驱使。灭绝的影响力在增长。',
			},
			'woa-57': {
				title: '灭绝的傀儡',
				description:
					'马什在灭绝的完全控制下出现在克雷迪克·肖。告诉沙赛德他希望能知道为什么必须杀他，他用镕金术推动沙赛德的金属手镯将蓄存者撞到墙上，而纹正朝下方的升华之井下降。',
			},
			'woa-58': {
				title: '被击倒',
				description:
					'马什痛击沙赛德——折断骨头、将金属环钉入血肉——但沙赛德激活了这些金属意识来反击。当审判官要了结他时，哈蒙德用格斗杖敲在马什头骨上将他击昏。',
			},
			'hoa-0': {
				title: '制造审判官',
				description:
					'在灭绝的控制下，马什在塔辛德文执行黑暗的血金术仪式，用捕获的储金术师和镕金术师制造新的审判官。',
			},
			'hoa-6': {
				title: '率领克罗斯',
				description: '马什代表灭绝指挥一支不断壮大的克罗斯大军，为最终决战集结力量。',
			},
			'hoa-13': {
				title: '灭绝的傀儡',
				description:
					'马什一动不动地坐在克罗斯营地中，思索凯西尔和他在灭绝计划中的角色。他决定停止徒劳的抗争，假装顺从，希望能麻痹灭绝使其产生虚假的安全感并在关键时刻挫败他的计划。',
			},
			'hoa-34': {
				title: '在提里安附近',
				description:
					'马什在提里安山附近活动，用俘虏制造血金术钉刺，在灰山的阴影中建立灭绝的审判官大军。他穿过一个饥饿的城镇，将一颗青铜钉刺穿过一名烟纱者的心脏将其杀死。',
			},
			'hoa-42': {
				title: '彭罗德的钉刺',
				description:
					'马什潜行渗透陆沙德，回顾自己变为审判官的可怕转变，同时准备着一颗青铜血金术钉刺。灭绝夺取了他的身体控制权，他在泛达府邸袭击了彭罗德王——刺穿他的心脏并将钉刺留在他的胸膛中——为灭绝建立了一条直通首都治理的管道。马什事后保持隐藏，看着外科医生检查彭罗德并决定将钉刺留在体内：他们无法安全移除它，国王似乎健康状况良好。一切完全如灭绝所计划。',
			},
			'hoa-63': {
				title: '对质纹',
				description:
					'马什抵达资源执事所发现纹被囚且尤门正在审讯她。他向灭绝鞠躬并宣布他不是来保护法德雷克斯的——只是来夺取天金储藏。当尤门揭示储藏只有区区七颗时，灭绝在暴怒中尖叫。尤门恳求马什帮助对抗依蓝德的军队，但马什冷酷地拒绝：统御主已死且是个无利的仆从。马什嗤笑纹声称依蓝德不会攻城——但纹回答说依蓝德是比他想的更好的人。',
			},
			'hoa-65': {
				title: '天金要求',
				description:
					'马什抵达资源执事所发现纹被囚。他抓住她要求天金的位置，但她拒绝。马什命令尤门攻击依蓝德的军队并揭示统御主的计划：克罗斯和审判官被创造为灭绝有朝一日会夺取的力量。当马什摇晃纹时，她从他的腰带上偷了一剂金属药剂并摘下耳环——一颗血金术钉刺——用杜拉铝推进将其射入他的额头。马什倒下。',
			},
			'hoa-65.2': {
				title: '皇帝的兄弟',
				description:
					'马什从额头的钉刺中恢复。纹用杜拉铝强化的安抚打击他，但马什抵抗住——使用储金术力量增大身形并掐住她。纹汲取迷雾推进他的情绪，短暂透过他的双眼视物。被压倒的马什在纹打破灭绝的控制时逃离。',
			},
			'hoa-69': {
				title: '信使的命运',
				description:
					'马什拦截并杀死了戈拉德尔队长，后者正携带斯布克的紧急消息前往纹。他阅读了字条——一条刻在钢铁上灭绝无法篡改的警告，提醒金属穿透身体的危险。马什内心不安，启程前往陆沙德在克雷迪克·肖面对纹。',
			},
			'hoa-72': {
				title: '耳环',
				description:
					'马什看着十三名审判官在克雷迪克·肖攻击纹——灭绝的全力出动。其中一人因额外钉刺而具有储金术速度。当纹被压制时，灭绝强迫马什接手刑讯。他逐一折断她的手臂和腿，然后逐根手指，索要天金的位置。但他意识中的一丝自我在反抗，想起凯西尔如何将她当作他和玫尔从未有过的女儿来对待，以及自己在叛乱成功前的投降。他注意到她的耳环——想起她讲述的耳环来历以及斯布克关于金属穿透身体的警告。不假思索地，超越灭绝的控制，马什将耳环从她耳中扯下。灭绝的声音戛然而止。迷雾涌入纹。在他失去意识前的最后一刻，马什知道无论接下来发生什么，他没有投降。',
			},
			'hoa-73': {
				title: '没有投降',
				description:
					'马什看着纹——以迷雾为燃料如同无穷尽的金属储备——以骇人的轻松屠杀了剩下的十二名审判官。她普通的钢推带有神明般的力量；她摧毁了克雷迪克·肖本身，将统御主的千年宫殿化为瓦砾。只剩马什。他无所畏惧——只有一种强烈而安静的自豪。他做的任何事都奏效了。灭绝在他脑海深处无力地暴怒，马什知道在关键时刻，他没有投降。纹拔掉了他的一根眼钉但没有杀死他。她咳了一声然后在能了结他之前消失了，留下马什在废墟中活着。',
			},
			'hoa-81': {
				title: '杀死依蓝德',
				description:
					'马什在灭绝的驱使下在哈辛战役中攻击依蓝德。两人都燃烧天金进行一场狂暴的决斗。依蓝德一次性燃烧杜拉铝与天金，闪现神明般的终极洞察，在斧头砍入胸膛时将剑刺入马什脖颈。马什愈合并将皇帝斩首——但依蓝德含笑死去，已燃尽灭绝所追寻的每一颗天金。当纹片刻后牺牲自己摧毁灭绝时，控制马什多年的力量就这样消失了。他倒在死者中，自修道院以来第一次他的身体重新属于自己。',
			},
		},
		spook: {
			...enData.movements.spook,
			'tfe-7': {
				title: '年轻的锡金迷雾人',
				description:
					'斯布克，克拉布斯年轻的侄子，在木工作坊担任团队的哨兵和信使，说着浓重的东部俚语。',
			},
			'tfe-9': {
				title: '信使奔走',
				description:
					'斯布克在陆沙德的克拉布斯店铺和费利司的雷诺庄园之间传递消息；锡金增强的感官使他成为出色的侦察兵。',
			},
			'tfe-16': {
				title: '守护纹',
				description:
					'莱斯蒂波恩斯在克拉布斯店铺守护受伤的纹，在她从克瑞迪克·肖侦察任务的伤中醒来时在场。他讲述凯西尔如何给他取名：斯布克。',
			},
			'tfe-22': {
				title: '手帕',
				description:
					'斯布克来到费利司雷诺庄园找到正在读统御主日记的纹。说多克森来拿更多武器，然后脸红紧张地给她一块手帕就跑了。沙赛德后来解释这是一个年轻人表达认真求爱意愿的方式。',
			},
			'tfe-24': {
				title: '克拉布斯店铺的夜晚',
				description: '斯布克在克拉布斯店铺与凯西尔、哈蒙德和克拉布斯共饮夜酒讨论任务状况。',
			},
			'tfe-26': {
				title: '处决',
				description:
					'斯布克冲进克拉布斯店铺报告喷泉广场的处决。陪同团队到广场目睹司卡妇女和儿童被残忍公开处决，鲜血倾入喷泉。',
			},
			'tfe-32': {
				title: '屋顶守望',
				description:
					'斯布克与纹在克拉布斯店铺屋顶站岗教她锡金技巧。他解释不只是增强感官而是过滤重要信息不被其余干扰分散。',
			},
			'tfe-33': {
				title: '被捕的哨兵',
				description: '当团队前往喷泉广场时斯布克被发现在一辆行刑马车中与雷诺领主一起——被教会抓获。',
			},
			'tfe-34': {
				title: '牺牲的见证者',
				description:
					'斯布克从人群中目睹凯西尔在喷泉广场战斗和死亡——这一事件将标记他余生。幸存者的牺牲改变了斯布克对为事业服务意味着什么的理解。',
			},
			'tfe-38': {
				title: '革命',
				description: '斯布克在最后的革命中与团队并肩作战，帮助协调陆沙德街头的司卡起义。',
			},
			'woa-6': {
				title: '成长的侦察兵',
				description:
					'斯布克从侦察任务中返回陆沙德，在泛达府邸与团队重聚。他恢复巡逻城市和观察围城军队的职责。',
			},
			'woa-11': {
				title: '团队集结',
				description: '斯布克在泛达府邸出席，团队在凯特第二支军队抵达陆沙德城外后重新集结。',
			},
			'woa-13': {
				title: '战务会议',
				description:
					'斯布克出席依蓝德在泛达府邸的战务会议，团队讨论应对两支围城军队和城墙外日益增长威胁的策略。',
			},
			'woa-20': {
				title: '在战务会议',
				description:
					'斯布克在泛达府邸出席团队讨论依蓝德与斯特拉夫·泛达谈判的计划以及应对围城军队的策略。',
			},
			'woa-23': {
				title: '沙赛德归来',
				description:
					'斯布克在泛达府邸出席，沙赛德归来并向团队简报克罗斯大军、迷雾杀戮和第三支围城部队的威胁。',
			},
			'woa-25': {
				title: '购物护卫',
				description:
					'斯布克陪同纹、廷德薇尔、艾尔莉安和奥瑞瑟在肯顿街进行礼服购物之旅——当然违背他本人意愿。警报鼓声打断外出，斯特拉夫的军队对城墙发动佯攻。',
			},
			'woa-44': {
				title: '找到纹',
				description:
					'斯布克与依蓝德和哈蒙德讨论纹对凯特军队的毁灭性单独攻击。奥瑞瑟带领他们到卡蒙旧藏身处找到纹，她在那里说要离开陆沙德。',
			},
			'woa-49': {
				title: '流放小组',
				description:
					'斯布克与纹、依蓝德和艾尔莉安通过锡门离开陆沙德，躲避斯特拉夫的军队，向北朝泰瑞司山脉骑行。',
			},
			'woa-50': {
				title: '迷雾中的异动',
				description:
					'在城北拔营时，斯布克首先感知到有什么东西在迷雾中跟踪队伍。纹告诉他是迷雾之灵。决心充分利用他唯一的镕金术感官，斯布克持续燃烧锡金作为不间断的监视。',
			},
			'woa-51': {
				title: '跟随的五个人',
				description:
					'斯布克的增强感官分辨出五个人在跟踪营地——贾斯特斯·勒卡尔一行。依蓝德处决贾斯特斯后，斯布克揭示了他无意中听到的秘密：沙赛德骗他们离开是为了让他们在即将到来的袭击中存活。队伍掉头返回陆沙德。',
			},
			'woa-52': {
				title: '骑行返回',
				description:
					'无法匹敌纹白镴助燃的速度，斯布克与依蓝德奋力向被围城市骑行，绝望地希望赶到陆沙德在克罗斯摧毁他们留下的一切之前。',
			},
			'woa-56': {
				title: '泰瑞司难民',
				description:
					'斯布克与依蓝德同行，遇到一队逃离塔辛德文的泰瑞司难民，审判官在那里屠杀了长老会。当迷雾之灵向依蓝德显现时，斯布克的到来将其驱散。他们一起护送难民前往陆沙德。',
			},
			'woa-57': {
				title: '进入城市',
				description:
					'斯布克随难民人群与依蓝德和哈蒙德一起进入陆沙德，穿过拥挤的街道与纹重聚，纹带领他们前往克雷迪克·肖和隐藏的升华之井。',
			},
			'woa-58': {
				title: '洞穴',
				description:
					'斯布克与纹、依蓝德和哈蒙德潜入克雷迪克·肖下方烟雾弥漫的洞穴，发光的升华之井水池在黑暗深处等待着。',
			},
			'hoa-14': {
				title: '锡之眼',
				description:
					'斯布克不顾危险持续燃烧锡金，被对克拉布斯之死的愧疚和追随纹榜样的渴望所驱使。夜间在厄尔多干涸的沟渠街道潜行时，他增强的感官让他借着星光视物如昼，感受每一颗碎石和每一阵风掠过皮肤，透过墙壁听到环境声响。他渴望向团队证明自己的价值。',
			},
			'hoa-14.2': {
				title: '公民议会',
				description:
					'斯布克主动监视公民奎林在他霸占的府邸中的会议，并秘密注视公民的妹妹贝尔德雷。他观察奎林和议会讨论依蓝德的征服、被派来谈判的大使以及针对贵族的新法律。',
			},
			'hoa-16': {
				title: '暴行目击',
				description:
					'眼睛蒙着布以忍受阳光，斯布克在繁忙市场的一条沟渠街旁闲荡，假扮盲丐。他看着奎林的守卫将拒绝离开厄尔多的贵族锁入一栋建筑并纵火焚烧。一名叫德恩的线人告诉斯布克保持密切观察——然后说他来这里数头骨，便离开了。',
			},
			'hoa-16.2': {
				title: '人群中被刺',
				description:
					'斯布克跟随公民离开去向市民发表演讲，穿过人群接近奎林和贝尔德雷。他在不被看见的情况下与贝尔德雷交谈，谴责她兄弟的谋杀并誓言公民必死。被发现后，他与三名镕金术师守卫战斗——包括一名暴徒和一名射币手——直到一把剑刺穿他，他失去意识。',
			},
			'hoa-19': {
				title: '火中的声音',
				description:
					'斯布克在一栋燃烧的建筑中恢复意识。一个声音——自称凯西尔——引导他找到镕金术药瓶。他喝下药水发现自己现在可以燃烧白镴，获得逃离火焰的力量。',
			},
			'hoa-23': {
				title: '热病梦境',
				description:
					'斯布克躺在藏身处发烧，因伤口而发热，重温克拉布斯收养他那天的情景。热病之梦模糊了过去与现在，他在刀伤中慢慢康复。',
			},
			'hoa-26': {
				title: '夜中流言',
				description:
					'斯布克惊叹于自己的生还和新的暴徒能力，注意到皮肤中有一片金属碎片——"凯西尔"告诉他不要动它。他造访一家酒馆，无意中听到人们谈论他是凯西尔团队成员。不希望引人注意，他悄然离去。',
			},
			'hoa-29': {
				title: '隐藏的湖泊',
				description:
					'斯布克在厄尔多街头迎接沙赛德的马车，身穿士兵装束。他带领沙赛德、布利兹、艾尔莉安和戈拉德尔前往闲置的审判教义所作为他们的新基地。在建筑下方，他展示了统御主的物资储藏所——以及解释了城市运河为何干涸了一百年的隐藏地下湖。',
			},
			'hoa-31': {
				title: '信仰之问',
				description:
					'斯布克与沙赛德和布利兹在审判教义所讨论水流改道和如何罢免奎林。战略讨论后，他告诉沙赛德他相信凯西尔在守望他们——并询问是否有支持这种信仰的宗教。沙赛德说有但拒绝宣讲。斯布克反驳说凯西尔自己的信仰才是真正的宗教，并尖锐地指出沙赛德不再传教是因为那是廷德薇尔会想要的。沙赛德深受震动，斯布克离开让他继续他的宗教研究。',
			},
			'hoa-35': {
				title: '对质德恩',
				description:
					'斯布克闯入德恩在窄巷的巢穴就散播的谣言对质线人。德恩解释说他在试图通过展示奎林试图杀死凯西尔团队成员来削弱公民。凯西尔的声音催促斯布克在奎林伤害沙赛德和布利兹之前去对付他，但斯布克不理会这个威胁。一个手下恳求斯布克帮忙营救他妹妹免于处决，斯布克同意——以代价为条件。',
			},
			'hoa-38': {
				title: '秘密出口',
				description:
					'斯布克看着司卡挖掘一栋被烧毁的建筑，在十名囚犯的残骸中只找到九个头骨。他意识到这些建筑有秘密出口——这一知识可以在即将到来的革命中挽救生命。',
			},
			'hoa-41': {
				title: '火焰幸存者',
				description:
					'凯西尔的声音催促斯布克杀死守卫拯救囚犯免于处决。利用他对秘密出口的了解，斯布克找到一处藏身洞，奎林的士兵正在转移一名囚犯。他攻击并杀死他们，但被困在燃烧的建筑中与一名小女孩一起。他抱着她穿过火焰逃出，艾尔莉安挑动围观人群冲向剩余守卫。厄尔多人开始称他为"火焰幸存者"。',
			},
			'hoa-46': {
				title: '贝尔德雷的花园',
				description:
					'斯布克在贝尔德雷的花园中见她，告诉她为什么她总是看起来悲伤，他是凯西尔团队的成员，将会罢免公民。他请她与他一起离开。凯西尔的声音命令他杀死奎林和他妹妹——但斯布克拒绝，不愿让无辜者流血。贝尔德雷尖叫召唤卫兵，斯布克撤退，无视那声音越来越急迫的要求。',
			},
			'hoa-46.2': {
				title: '恢复运河',
				description:
					'地震震撼城市后斯布克返回审判教义所。他告诉沙赛德和布利兹散布关于奎林正在聚集的镕金术师的谣言，动摇公民的统治。他请沙赛德让水流重新通过运河——这一请求将要求蓄存者重新佩戴他的金属意识并再次运用他的学识。当被问及如何从两楼坠落中生还时，斯布克暂时拒绝解释，只要求沙赛德毫无保留地信任他。',
			},
			'hoa-49': {
				title: '贝尔德雷的恳求',
				description:
					'斯布克告诉沙赛德和布利兹，奎林的沉默感觉不对劲——公民没有攻击他们的基地。他解释奎林如何崛起：将人送入迷雾并宣布幸存者为纯洁者，同时以幸存者之名杀害贵族——却隐瞒没有一个贵族死于迷雾病的事实。沙赛德宣布他已准备好建造运河改道结构。戈拉德尔带来紧急消息：贝尔德雷来到请求与斯布克交谈。她恳求他不要杀害她的兄弟。斯布克与沙赛德和布利兹私下商议，他们做出冷酷决定：扣留贝尔德雷为人质并散布她已叛离奎林的谣言——收紧公民脖子上的绳索。',
			},
			'hoa-53': {
				title: '承诺与计划',
				description:
					'斯布克与贝尔德雷交谈，她透露自己是半司卡人，在终极帝国覆灭时免于处决。她告诉他他就像她哥哥一样——斯布克否认，但这指责刺痛了他。他讲述他在凯西尔团队中的生活，关于沙赛德和布利兹让他发号施令即使他觉得自己并非真正负责，关于纹和依蓝德。他承诺拯救城市并不伤害奎林。然后他离开前往街头。',
			},
			'hoa-53.2': {
				title: '酒馆巡游',
				description:
					'斯布克承诺德恩贸易合同和头衔，以换取在运河重新注水前清除碎石——他不能让人们在湖水归来时溺亡。他们一起走遍厄尔多的酒馆，斯布克与市民会面并巩固他作为火焰幸存者的声誉，建立对抗公民的公众支持。',
			},
			'hoa-56': {
				title: '最终计划',
				description:
					'斯布克策划一个揭露奎林秘密镕金术能力的计划来对付公民。他与贝尔德雷讨论，她请求写一封信给哥哥恳求他退让，斯布克允许了。当戈拉德尔报告公民的士兵已离开教廷建筑时，斯布克派遣侦察兵调查——但首先他在运河工地找到沙赛德，告诉他城市中的骚乱。察觉到蓄存者的疑虑，斯布克说他相信即使他失败，有人在守望他们并会纠正一切。',
			},
			'hoa-58': {
				title: '厄尔多的英雄',
				description:
					'沙赛德指导斯布克如何启动水流改道机制并确认运河中没有人员。贝尔德雷恳求给奎林更多时间，但她的信被冷冷沉默回应——斯布克拒绝。在公民的晚间演讲中，德恩警告奎林计划谴责斯布克并攻击教廷建筑。斯布克的人引发骚乱，戈拉德尔的士兵冲向舞台。凯西尔的声音催促斯布克杀死奎林——但贝尔德雷为哥哥的生命尖叫，然后被一枚硬币击中，揭示为射币手。人群粗暴对待她并将她推到舞台前。凯西尔命令斯布克用金属钉刺杀死她并夺取她的能力。斯布克僵住了——然后看到奎林也在对凯西尔的声音做出反应。在一瞬间的可怕清晰中，斯布克理解了：凯西尔就是灭绝，钉刺是血金术，奎林和他一样被操纵。他从奎林手臂上扯下一颗青铜钉刺并移除自己的金属碎片——他的暴徒能力和灭绝的声音同时消失。当火焰蔓延时，斯布克不顾贝尔德雷的干扰安排了运河洪水，但教廷建筑被火焰吞没。他克服对火焰的恐惧冲入其中，启动机制，然后倒下——拯救了厄尔多。',
			},
			'hoa-62': {
				title: '胜利的代价',
				description:
					'斯布克躺在医院中失去意识，严重烧伤并缓慢康复。沙赛德守护他并给他服用了白镴，但这并未加速他的愈合。贝尔德雷守在床边，讲述她的兄弟如何被权力改变，斯布克——火焰幸存者——是这座城市的英雄。',
			},
			'hoa-64': {
				title: '写在钢铁上的消息',
				description:
					'仍在从烧伤中康复的斯布克听到一个声音告诉他向纹发出警告。他将消息刻在钢铁上——灭绝无法篡改的唯一媒介——并托付给戈拉德尔队长，戈拉德尔立即离开厄尔多。',
			},
			'hoa-73': {
				title: '进入洞穴',
				description:
					'艾尔莉安警告布利兹迷雾中的奇怪行为——不是往常的混乱旋转，它们正整齐地流向陆沙德方向。斯布克也看到了并理解为某种事情正在发生。他让布利兹告诉厄尔多的所有人立即聚集在储藏洞穴中以抵御即将到来的任何事物。',
			},
			'hoa-83': {
				title: '新世界',
				description:
					'斯布克从洞穴中走出进入沙赛德重塑的世界——一片蓝天下鲜花绿草的土地。他找到了纹和依蓝德的身体，以及一本沙赛德写的解释一切的书，包括沙赛德应凯西尔之请将斯布克变成了迷雾之子。',
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

	// ── Chapter seasons (book → chapter → season/year)
	chapterSeasons: {
		tfe: {
			0: { season: '春', year: '1021 FE' },
			1: { season: '春', year: '1021 FE' },
			2: { season: '春', year: '1021 FE' },
			3: { season: '春', year: '1021 FE' },
			4: { season: '春', year: '1021 FE' },
			5: { season: '春', year: '1021 FE' },
			6: { season: '春', year: '1021 FE' },
			7: { season: '晚春', year: '1021 FE' },
			8: { season: '夏', year: '1021 FE' },
			9: { season: '夏', year: '1021 FE' },
			10: { season: '夏', year: '1021 FE' },
			11: { season: '夏', year: '1021 FE' },
			12: { season: '夏', year: '1021 FE' },
			13: { season: '夏', year: '1021 FE' },
			14: { season: '夏', year: '1021 FE' },
			15: { season: '夏', year: '1021 FE' },
			16: { season: '夏', year: '1021 FE' },
			17: { season: '夏', year: '1021 FE' },
			18: { season: '夏', year: '1021 FE' },
			19: { season: '晚夏', year: '1021 FE' },
			20: { season: '晚夏', year: '1021 FE' },
			21: { season: '秋', year: '1021 FE' },
			22: { season: '秋', year: '1021 FE' },
			23: { season: '秋', year: '1021 FE' },
			24: { season: '秋', year: '1021 FE' },
			25: { season: '晚秋', year: '1021 FE' },
			26: { season: '晚秋', year: '1021 FE' },
			27: { season: '冬', year: '1021 FE' },
			28: { season: '冬', year: '1021 FE' },
			29: { season: '冬', year: '1021 FE' },
			30: { season: '冬', year: '1021 FE' },
			31: { season: '冬', year: '1021 FE' },
			32: { season: '冬', year: '1022 FE' },
			33: { season: '早春', year: '1022 FE' },
			34: { season: '早春', year: '1022 FE' },
			35: { season: '早春', year: '1022 FE' },
			36: { season: '早春', year: '1022 FE' },
			37: { season: '早春', year: '1022 FE' },
			38: { season: '早春', year: '1022 FE' },
			39: { season: '春', year: '1022 FE' },
		},
		woa: {
			1: { season: '秋', year: '1023 FE' },
			2: { season: '秋', year: '1023 FE' },
			3: { season: '秋', year: '1023 FE' },
			4: { season: '秋', year: '1023 FE' },
			5: { season: '秋', year: '1023 FE' },
			6: { season: '秋', year: '1023 FE' },
			7: { season: '晚秋', year: '1023 FE' },
			8: { season: '秋', year: '1023 FE' },
			9: { season: '晚秋', year: '1023 FE' },
			10: { season: '秋', year: '1023 FE' },
			11: { season: '早冬', year: '1023 FE' },
			12: { season: '晚秋', year: '1023 FE' },
			13: { season: '早冬', year: '1023 FE' },
			14: { season: '早冬', year: '1023 FE' },
			15: { season: '冬', year: '1023 FE' },
			16: { season: '冬', year: '1023 FE' },
			17: { season: '冬', year: '1023 FE' },
			19: { season: '冬', year: '1023 FE' },
			20: { season: '冬', year: '1023 FE' },
			21: { season: '冬', year: '1023 FE' },
			22: { season: '冬', year: '1023 FE' },
			23: { season: '冬', year: '1023 FE' },
			24: { season: '冬', year: '1023 FE' },
			25: { season: '冬', year: '1023 FE' },
			26: { season: '冬', year: '1023 FE' },
			27: { season: '冬', year: '1023 FE' },
			28: { season: '冬', year: '1024 FE' },
			29: { season: '冬', year: '1024 FE' },
			30: { season: '冬', year: '1024 FE' },
			31: { season: '冬', year: '1024 FE' },
			32: { season: '冬', year: '1024 FE' },
			33: { season: '冬', year: '1024 FE' },
			34: { season: '冬', year: '1024 FE' },
			35: { season: '冬', year: '1024 FE' },
			36: { season: '冬', year: '1024 FE' },
			37: { season: '冬', year: '1024 FE' },
			38: { season: '冬', year: '1024 FE' },
			40: { season: '晚冬', year: '1024 FE' },
			41: { season: '晚冬', year: '1024 FE' },
			42: { season: '晚冬', year: '1024 FE' },
			43: { season: '晚冬', year: '1024 FE' },
			44: { season: '晚冬', year: '1024 FE' },
			45: { season: '晚冬', year: '1024 FE' },
			46: { season: '晚冬', year: '1024 FE' },
			47: { season: '晚冬', year: '1024 FE' },
			49: { season: '晚冬', year: '1024 FE' },
			50: { season: '晚冬', year: '1024 FE' },
			51: { season: '晚冬', year: '1024 FE' },
			52: { season: '晚冬', year: '1024 FE' },
			53: { season: '晚冬', year: '1024 FE' },
			54: { season: '晚冬', year: '1024 FE' },
			55: { season: '晚冬', year: '1024 FE' },
			56: { season: '冬', year: '1024 FE' },
			57: { season: '冬', year: '1024 FE' },
			58: { season: '冬', year: '1024 FE' },
			59: { season: '冬', year: '1024 FE' },
			60: { season: '冬', year: '1024 FE' },
		},
		hoa: {
			0: { season: '春', year: '1026 FE' },
			1: { season: '春', year: '1026 FE' },
			3: { season: '春', year: '1026 FE' },
			4: { season: '夏', year: '1026 FE' },
			5: { season: '夏', year: '1026 FE' },
			6: { season: '夏', year: '1026 FE' },
			8: { season: '夏', year: '1026 FE' },
			10: { season: '夏', year: '1026 FE' },
			12: { season: '夏', year: '1026 FE' },
			13: { season: '秋', year: '1026 FE' },
			14: { season: '秋', year: '1026 FE' },
			15: { season: '秋', year: '1026 FE' },
			16: { season: '秋', year: '1026 FE' },
			17: { season: '秋', year: '1026 FE' },
			18: { season: '秋', year: '1026 FE' },
			19: { season: '秋', year: '1026 FE' },
			21: { season: '秋', year: '1026 FE' },
			22: { season: '秋', year: '1026 FE' },
			23: { season: '早冬', year: '1026 FE' },
			24: { season: '冬', year: '1026 FE' },
			25: { season: '秋', year: '1026 FE' },
			26: { season: '早冬', year: '1026 FE' },
			27: { season: '秋', year: '1026 FE' },
			28: { season: '秋', year: '1026 FE' },
			29: { season: '早冬', year: '1026 FE' },
			30: { season: '秋', year: '1026 FE' },
			31: { season: '早冬', year: '1026 FE' },
			34: { season: '冬', year: '1026 FE' },
			35: { season: '冬', year: '1026 FE' },
			36: { season: '冬', year: '1026 FE' },
			37: { season: '冬', year: '1026 FE' },
			38: { season: '冬', year: '1026 FE' },
			40: { season: '冬', year: '1026 FE' },
			41: { season: '冬', year: '1026 FE' },
			42: { season: '冬', year: '1026 FE' },
			43: { season: '冬', year: '1026 FE' },
			44: { season: '冬', year: '1026 FE' },
			45: { season: '冬', year: '1026 FE' },
			46: { season: '冬', year: '1026 FE' },
			47: { season: '冬', year: '1026 FE' },
			48: { season: '冬', year: '1026 FE' },
			49: { season: '冬', year: '1026 FE' },
			50: { season: '冬', year: '1026 FE' },
			51: { season: '冬', year: '1026 FE' },
			53: { season: '冬', year: '1026 FE' },
			54: { season: '晚冬', year: '1026 FE' },
			55: { season: '晚冬', year: '1026 FE' },
			56: { season: '冬', year: '1026 FE' },
			57: { season: '晚冬', year: '1026 FE' },
			58: { season: '春', year: '1027 FE' },
			59: { season: '春', year: '1027 FE' },
			60: { season: '晚冬', year: '1026 FE' },
			61: { season: '晚冬', year: '1026 FE' },
			62: { season: '夏', year: '1027 FE' },
			63: { season: '晚冬', year: '1026 FE' },
			64: { season: '夏', year: '1027 FE' },
			65: { season: '晚冬', year: '1026 FE' },
			66: { season: '夏', year: '1027 FE' },
			67: { season: '春', year: '1027 FE' },
			68: { season: '春', year: '1027 FE' },
			69: { season: '夏', year: '1027 FE' },
			70: { season: '春', year: '1027 FE' },
			71: { season: '秋', year: '1027 FE' },
			72: { season: '夏', year: '1027 FE' },
			73: { season: '夏', year: '1027 FE' },
			74: { season: '秋', year: '1027 FE' },
			75: { season: '秋', year: '1027 FE' },
			76: { season: '秋', year: '1027 FE' },
			77: { season: '秋', year: '1027 FE' },
			78: { season: '秋', year: '1027 FE' },
			79: { season: '秋', year: '1027 FE' },
			80: { season: '秋', year: '1027 FE' },
			81: { season: '秋', year: '1027 FE' },
			82: { season: '秋', year: '1027 FE' },
			83: { season: '秋', year: '1027 FE' },
			84: { season: '秋', year: '1027 FE' },
		},
	},
};
