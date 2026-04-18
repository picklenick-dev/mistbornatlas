/**
 * Japanese data translations.
 * Sources: Official Hayakawa Publishing (早川書房) editions, translated by Tsukasa Kaneko (金子司).
 * Key terminology: Lord Ruler = 支配王, Mistborn = 霧の落とし子, Misting = 霧の使い,
 * Allomancy = 合金術, Final Empire = 終の帝国, Luthadel = ルサデル.
 */
import type { DataTranslations } from '../types';
import { enData } from './en-data';

export const jaData: DataTranslations = {
	...enData,

	books: {
		tfe: { title: 'ミストボーン: 霧の落とし子', year: '1021-1022 FE', confidence: 'verified' },
		woa: { title: 'ミストスピリット: 霧のうつし身', year: '1022-1024 FE', confidence: 'verified' },
		hoa: { title: 'ミストクローク: 霧の羽衣', year: '1024-1025 FE', confidence: 'verified' },
	},

	characters: {
		vin: {
			name: 'ヴィン',
			title: '霧の落とし子',
			description:
				'ルサデルの路地裏から立ち上がり、スキャドリアルの歴史を変えることになる、比類なき合金術の才能を秘めた少女。',
			confidence: 'verified',
			fieldConfidence: { description: 'verified' },
			titleProgression: {
				'tfe-1': '路地裏の浮浪児', // Street urchin
				'tfe-9': '霧の落とし子の見習い',
				'tfe-12': 'ヴァレット・ルヌー', // Noble cover identity
				'tfe-25': '霧の落とし子',
				'tfe-38': '支配王の殺害者', // Slayer of the Lord Ruler
				'woa-1': '生き残りの後継者', // Heir to the Survivor
				'woa-47': 'ルサデルの守護者',
				'hoa-1': '女帝',
				'hoa-79': '保存の器', // Vessel of Preservation
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
			name: 'ケルシャー', // Official Hayakawa transliteration
			title: '生き残り', // "The Survivor" is canonically 〈生き残り〉
			description:
				'ルサデルの盗賊団のカリスマ的リーダー。伝説的な「ハッシンの穴蔵」からの唯一の生還者。',
			confidence: 'verified',
			fieldConfidence: { description: 'verified' },
			titleProgression: {
				'tfe-0': '謎のスカー',
				'tfe-1': 'ハッシンの生存者',
				'tfe-11': 'クルーのリーダー',
				'tfe-21': '穴蔵の破壊者',
				'tfe-34': '反乱の殉教者',
			},
			titleProgressionConfidence: {
				'tfe-0': 'verified',
				'tfe-1': 'verified',
				'tfe-11': 'verified',
				'tfe-21': 'verified',
				'tfe-34': 'verified',
			},
			secretHistoryTitles: {
				'woa-1': '認知的影', // Cognitive Shadow
				'hoa-1': '保存の王者', // Preservation's Champion
			},
		},
		sazed: {
			name: 'セイズド', // Official transliteration
			title: '守秘者', // "Keeper" is canonically 守秘者 (Shuhisha)
			description:
				'テリス人の守秘者。ブロンズの腕輪に古の宗教や知識を蓄え、世界の記憶を保存している。',
			confidence: 'verified',
			fieldConfidence: { description: 'verified' },
			titleProgression: {
				'tfe-9': 'テリスの執事', // Terris Steward
				'tfe-22': '宗教の守秘者',
				'woa-1': '学者にして守秘者',
				'woa-12': '真理の探究者',
				'woa-52': 'ルサデルの防衛者',
				'hoa-1': '新帝国の大使',
				'hoa-50': '苦悩する学者',
				'hoa-82': '永遠のヒーロー', // Hero of Ages
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
			name: 'エレンド・ヴェンチャー',
			title: '皇帝',
			description:
				'ヴェンチャー家の理想主義的な令息。書物を愛する青年から、混乱する帝国を導く指導者へと成長する。',
			confidence: 'verified',
			fieldConfidence: { description: 'verified' },
			titleProgression: {
				'tfe-12': '貴族の哲学者',
				'tfe-24': '反抗的な貴族',
				'tfe-38': '予期せぬ指導者',
				'woa-1': '中央支配地の王',
				'woa-35': '追放された王',
				'woa-58': '霧の落とし子の皇帝',
				'hoa-1': '新帝国の皇帝',
				'hoa-54': '戦士皇帝',
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
			name: 'マーシュ',
			title: '鋼の審問官', // Steel Inquisitor
			description:
				'ケルシャーの兄。反乱軍の潜入工作員として鋼鉄教省に深く入り込み、過酷な運命を辿る。',
			confidence: 'verified',
			fieldConfidence: { description: 'verified' },
			titleProgression: {
				'tfe-7': '反乱の潜入者',
				'tfe-13': '教省のスパイ',
				'tfe-38': '鋼の審問官',
				'woa-4': '不本意な審問官',
				'woa-57': '破壊の駒', // Ruin is 破壊 (Hakai) [1]
				'hoa-0': '破壊の片腕',
				'hoa-79': '鉄の目', // Ironeyes
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
			name: 'スプーク', // Kept as-is
			title: '錫の目', // Canonical title for Tineye
			description:
				'ケルシャーの部下で最年少のメンバー。錫を燃やす「霧の使い」であり、後に驚異的な感覚を身につける。',
			confidence: 'verified',
			fieldConfidence: { description: 'verified' },
			titleProgression: {
				'tfe-7': '若き錫の目',
				'woa-1': '偵察員',
				'hoa-14': '潜入員',
				'hoa-38': '錫の達人', // Tin Savant
				'hoa-58': 'アートーの英雄', // Hero of Urteau
				'hoa-83': '炎の生存者', // Survivor of the Flames
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
			name: 'ルサデル',
			description:
				'最終帝国の首都であり、統治主が千年にわたり権力を振るった中心地。石壁を持つことを許された唯一の都市。',
			confidence: 'probable',
		},
		'lake-luthadel': {
			name: 'ルサデル湖',
			description: '首都の東に位置する淡水湖。灰に汚染されている。',
			confidence: 'probable',
		},
		'pits-hathsin': {
			name: 'ハシンの穴',
			description: 'アティウム鉱山でありカンドラの故郷。ケルシアーが唯一生きて脱獄した囚人である。',
			confidence: 'probable',
		},
		fellise: {
			name: 'フェリーズ',
			description: 'ルサデルの南にある貴族の避暑地。レノウ家が邸宅を構えていた。',
			confidence: 'probable',
		},
		holstep: {
			name: 'ホルステップ',
			description: 'ルサデルの西にある駐屯都市。交易路と軍事路の検問所。',
			confidence: 'probable',
		},
		'ashmount-tyrian': {
			name: 'ティリアン',
			description: 'ルサデルに最も近い灰山。城壁から見える。',
			confidence: 'probable',
		},
		urteau: {
			name: 'ウルテウ',
			description:
				'北方支配地の首府でありヴェンチャー家の本拠。溝渠街路――干上がった運河が道路として使われている――で知られる。',
			confidence: 'probable',
		},
		'ashmount-kalling': {
			name: 'カリング',
			description: '北方支配地の主火山。灰はより暗く腐食性が強い。',
			confidence: 'probable',
		},
		'fadrex-city': {
			name: 'ファドレックス',
			description: '西方支配地の交易中心地。天然のクレムノル岩石で守られている。',
			confidence: 'probable',
		},
		tremredare: {
			name: 'トレムレダール',
			description: '西方支配地の旧首府。崩壊後、防御力不足のため放棄された。',
			confidence: 'probable',
		},
		'ashmount-morag': {
			name: 'モラグ',
			description: '帝国西部の地平線を支配する巨大火山。',
			confidence: 'probable',
		},
		chardees: {
			name: 'チャーディーズ',
			description: 'ヘイスティング家の本拠地。公式地図では隠されている。',
			confidence: 'probable',
		},
		austrex: {
			name: 'オーストレックス',
			description: '南方支配地の首府で帝国の穀倉地帯の中心。',
			confidence: 'probable',
		},
		vetitan: {
			name: 'ヴェティタン',
			description: '北方支配地の都市。統治主の貯蔵洞窟の一つの上に建てられた。灰に埋もれている。',
			confidence: 'probable',
		},
		'ashmount-zerinah': {
			name: 'ゼリナ',
			description: '最南端の灰山。南半球の熱調節器。',
			confidence: 'probable',
		},
		conventical: {
			name: 'セラン修道院',
			description: '崖に彫られた審問官の要塞。セイズドがクワーンの碑文を発見した場所。',
			confidence: 'probable',
		},
		tathingdwen: {
			name: 'タシンドウェン',
			description: 'テリス支配地の首府。北方の山中に位置する。',
			confidence: 'probable',
		},
		'terris-mountains': {
			name: 'テリス山脈',
			description: 'テリス人が奴隷化された山脈。昇華の泉の元の所在地。',
			confidence: 'probable',
		},
		'tincut-fastness': {
			name: 'ティンカット要塞',
			description: 'テリス山脈の隠れた要塞。長老会が避難した場所。',
			confidence: 'probable',
		},
		'high-villages': {
			name: '高地の村々',
			description: '地下トンネルでつながれた隠れたテリスの山村ネットワーク。',
			confidence: 'probable',
		},
		'imperial-canal': {
			name: '帝国運河',
			description: 'タシンドウェンとルサデルを結ぶ人工水路。資源輸送用。',
			confidence: 'probable',
		},
		'kandra-homeland': {
			name: 'カンドラの故郷',
			description: 'ハシンの穴の下にある深い洞窟。カンドラが統治主の秘密を守る場所。',
			confidence: 'probable',
		},
		'ashmount-torinost': {
			name: 'トリノスト',
			description: '西方支配地北部の巨大な山頂。',
			confidence: 'probable',
		},
		'ashmount-faleast': {
			name: 'ファリースト',
			description: '東方支配地の主要地形。シリカ含有量が高く灰がより腐食性。',
			confidence: 'probable',
		},
		'ashmount-doriel': {
			name: 'ドリエル',
			description: 'ルサデル南方の灰山。南海沿岸近く。',
			confidence: 'probable',
		},
		'statlin-city': {
			name: 'スタトリン',
			description: '統治主の貯蔵洞窟ネットワークの南方拠点。',
			confidence: 'probable',
		},
		'tresting-plantation': {
			name: 'トレスティング農園',
			description: 'トレスティング卿のスカー農園。数百人の労働者と駐屯部隊を擁する。',
			confidence: 'probable',
		},
		'lekal-city': {
			name: 'レカル市',
			description: 'レカル家の要塞都市。都市全体が貴族邸宅の延長。',
			confidence: 'probable',
		},
		mantiz: {
			name: 'マンティズ',
			description: '西方支配地北部の都市。四つの大邸宅を持ち、灰の堆積が深刻。',
			confidence: 'probable',
		},
		'channerel-river': {
			name: 'チャネレル川',
			description: '帝国の主要河川。交易と輸送に不可欠。',
			confidence: 'probable',
		},
		'burnlands-west': {
			name: '焦土地帯（西）',
			description: '帝国西端の居住不可能な砂漠。太陽に近すぎる。',
			confidence: 'probable',
		},
		'burnlands-east': {
			name: '焦土地帯（東）',
			description: '帝国東端の居住不可能な砂漠。',
			confidence: 'probable',
		},
		'arguois-caverns': {
			name: 'アルゴア洞窟',
			description: 'ルサデルとハシンの穴の間の洞窟群。反乱軍の訓練基地。',
			confidence: 'probable',
		},
		garthwood: {
			name: 'ガースウッド',
			description: 'セイズドが解放されたスカーに宗教を教えた村。',
			confidence: 'probable',
		},
		'straffs-camp': {
			name: 'ストラフの陣営',
			description: '包囲戦中、ストラフ・ヴェンチャーがルサデル南方に設けた軍営。',
			confidence: 'probable',
		},
		'koloss-camp': {
			name: 'コロスの陣営',
			description: '包囲戦中、コロス軍がルサデル北方に布陣した位置。',
			confidence: 'probable',
		},
		longsfollow: {
			name: 'ロングスフォロウ',
			description: '西方支配地の山間の峠にある集落。',
			confidence: 'probable',
		},
		chakatah: {
			name: 'チャカタ',
			description: '西方支配地の小さな鉱山村。',
			confidence: 'probable',
		},
		'north-seran': {
			name: 'セラン北部',
			description: 'セラン修道院付近の領域。',
			confidence: 'probable',
		},
		'river-seran': {
			name: 'セラン川',
			description: '教省が物資輸送に使用した南方の水路。',
			confidence: 'probable',
		},
		urbene: {
			name: 'ウルベネ',
			description: '教省が首都へ穀物を輸送する中継地。',
			confidence: 'probable',
		},
		erlac: {
			name: 'エルラック',
			description: 'ルサデル南西の駐屯地。都市への道を巡回する。',
			confidence: 'probable',
		},
		'valtroux-city-central': {
			name: 'ヴァルトルー',
			description: 'ルサデル北西の駐屯都市。常備軍を持つ。',
			confidence: 'probable',
		},
		'haverfrex-cannery-central': {
			name: 'ハバーフレックス',
			description: '西方支配地の産業拠点。セットの軍の補給結節点。',
			confidence: 'probable',
		},
	},

	cities: {
		luthadel: {
			name: 'ルサデル',
			description:
				'最終帝国の首都にして統治主治世の文化的中心地。人工の城壁を持つ唯一の都市。昇華の泉の真上に聳えるクレディク・ショウを中心に放射状に建設。八つの門は鋼の秘術の金属に因んで名付けられている。',
			confidence: 'probable',
		},
		urteau: {
			name: 'ウルテウ',
			description:
				'北方支配地最大の都市でありヴェンチャー家の本拠地。溝渠街路――幅広い干上がった運河が沈んだ道路として機能する――が特徴。水は隠された地下湖に導かれた。統治主の勅令により城壁なし。',
			confidence: 'probable',
		},
		fadrex: {
			name: 'ファドレックス',
			description:
				'西方支配地の交易中心地。天然の城壁として機能するクレムノル岩石で要塞化。統治主の秘密貯蔵洞窟の一つを有する。',
			confidence: 'probable',
		},
	},

	cityLandmarks: {
		luthadel: {
			'kredik-shaw': {
				name: 'クレディク・ショウ',
				description: '統治主の宮殿、「千の尖塔の丘」。昇華の泉の真上に建設。',
				confidence: 'probable',
			},
			'iron-gate': {
				name: '鉄の門',
				description: '北門。ウルテウと北方支配地への方角。',
				confidence: 'probable',
			},
			'steel-gate': {
				name: '鋼の門',
				description: '北西門。ハシンの穴への方角。',
				confidence: 'probable',
			},
			'pewter-gate': { name: '白蝋の門', description: 'ルサデル北東門。', confidence: 'probable' },
			'zinc-gate': { name: '亜鉛の門', description: 'ルサデル南東門。', confidence: 'probable' },
			'brass-gate': {
				name: '真鍮の門',
				description: '南門。フェリーズと南方支配地への方角。',
				confidence: 'probable',
			},
			'copper-gate': {
				name: '銅の門',
				description: '南西門。工業地区の近く。',
				confidence: 'probable',
			},
			'bronze-gate': {
				name: '青銅の門',
				description: '西門。チャネレル川への方角。',
				confidence: 'probable',
			},
			'keep-venture': {
				name: 'ヴェンチャー邸',
				description: 'ヴェンチャー家の城砦。エレンドの作戦拠点であり貴族舞踏会の会場。',
				confidence: 'probable',
			},
			'keep-elariel': {
				name: 'エラリエル邸',
				description: 'ルサデル大家門の一つ、エラリエル家の居城。',
				confidence: 'probable',
			},
			'keep-hasting': {
				name: 'ヘイスティング邸',
				description: '宮殿の近く。家門戦争の初期に陥落。',
				confidence: 'probable',
			},
			'clubs-shop': {
				name: 'クラブスの工房',
				description: 'ケルシアーの仲間の作戦基地として使われた木工店。',
				confidence: 'probable',
			},
			'camons-safehouse': {
				name: 'カモンの隠れ家',
				description: 'スラムにあった最初の隠れ家。ヴィンがケルシアーに勧誘された場所。',
				confidence: 'probable',
			},
			'fountain-square': {
				name: '噴水広場',
				description: '公開処刑とケルシアーの死の場所。後に「生き残りの広場」と改名。',
				confidence: 'probable',
			},
			'lake-luthadel': {
				name: 'ルサデル湖',
				description: '城壁東側の大きな淡水湖。',
				confidence: 'probable',
			},
			'canton-of-finance': {
				name: '財務局',
				description: '帝国財政を担当する鋼鉄省の本部。',
				confidence: 'probable',
			},
			'skaa-hovels': {
				name: 'スカーの掘っ立て小屋',
				description: 'ギャングが活動するスカーの貧民街。',
				confidence: 'probable',
			},
			'well-of-ascension': {
				name: '昇華の泉',
				description: 'クレディク・ショウの地下に隠された力の源。1024年ごとに力が蓄積する。',
				confidence: 'probable',
			},
			'tin-gate-north': {
				name: '錫の門（北）',
				description: '北東門エリア。',
				confidence: 'probable',
			},
			'assembly-hall': {
				name: '議会堂',
				description: '包囲中にエレンドの民主議会が開かれた建物。',
				confidence: 'probable',
			},
			'keep-tekiel': {
				name: 'テキエル邸',
				description: 'テキエル家の城砦。ケルシアーの暗殺作戦の標的。',
				confidence: 'probable',
			},
			'luthadel-garrison': {
				name: 'ルサデル駐屯地',
				description: '市の軍事訓練場と兵舎。',
				confidence: 'probable',
			},
			'warehouse-district': {
				name: '倉庫地区',
				description: '運河沿いの工業地区。仲間が武器を保管していた場所。',
				confidence: 'probable',
			},
			'canton-inquisition': {
				name: '審問局',
				description: '鋼鉄審問官の拠点。万人に恐れられる場所。',
				confidence: 'probable',
			},
			'canton-resource': {
				name: '資源局',
				description: '帝国経済の管理中枢。',
				confidence: 'probable',
			},
			'canton-orthodoxy': {
				name: '正統局',
				description: '統治主崇拝の純粋性を担う宗教の中枢。',
				confidence: 'probable',
			},
			'keep-lekal': {
				name: 'レカル邸',
				description: 'レカル家の大邸宅の一つ。塔とステンドグラスを持つ。',
				confidence: 'probable',
			},
			'hotel-district': {
				name: 'ホテル地区',
				description: '外部支配地から訪れる貴族のための高級地区。',
				confidence: 'probable',
			},
			'commercial-district': {
				name: '商業地区',
				description: '貴族家門が契約交渉を行う商取引の中心。',
				confidence: 'probable',
			},
			'industrial-district': {
				name: '工業地区',
				description: '運河沿いの鍛冶場、製粉所、工房の地域。',
				confidence: 'probable',
			},
			'ahlstrom-square': {
				name: 'アールストロム広場',
				description: 'ルサデルの重要な公共広場。',
				confidence: 'probable',
			},
			'south-bridge': {
				name: '南橋',
				description: '市の水路上の渡河地点。',
				confidence: 'probable',
			},
			'the-twists': {
				name: 'ねじれ路地',
				description: '迷宮のようなスラム街。スカーの裏社会とケルシアーの仲間の隠れ処。',
				confidence: 'probable',
			},
			sootwarrens: {
				name: '煤巣',
				description: '最も貧しい地区の一つ。灰に覆われている。',
				confidence: 'probable',
			},
			'the-cracks': {
				name: '亀裂地区',
				description: '荒廃した高密度人口地域。',
				confidence: 'probable',
			},
			'aspen-row': {
				name: 'ポプラ通り',
				description: '熟練労働者や貴族の使用人のための住宅街。',
				confidence: 'probable',
			},
			blockstreet: {
				name: 'ブロック通り',
				description: 'スカー向けの格子状に設計された高密度住宅地区。',
				confidence: 'probable',
			},
		},
		urteau: {
			'ministry-canton': {
				name: '審問局',
				description: '教省の本拠地。地下湖を持つ第三貯蔵洞窟の上に建設。',
				confidence: 'probable',
			},
			marketpit: {
				name: '市場の坑',
				description: '最も広い溝渠街路。主要な大通りと中央市場。',
				confidence: 'probable',
			},
			'spooks-hideout': {
				name: 'スプークの隠れ家',
				description: '蜂起中にスプークの仲間が使った「燃える家」。',
				confidence: 'probable',
			},
			'citizens-estate': {
				name: '市民の邸宅',
				description: 'クエリオンが権力の座として接収した貴族邸宅。',
				confidence: 'probable',
			},
			'luthadel-gate': {
				name: 'ルサデル門',
				description: '運河網の南入口。ルサデルへの方角。',
				confidence: 'probable',
			},
			'venture-estate': {
				name: 'ヴェンチャー邸（ウルテウ）',
				description: 'ウルテウにあるヴェンチャー家の本邸。クエリオン政権下で放棄。',
				confidence: 'probable',
			},
			'burning-district': {
				name: '焼失地区',
				description: 'スプークの反乱で市の約三分の一が火災により壊滅。',
				confidence: 'probable',
			},
			'skaa-slums': {
				name: 'スカーのスラム',
				description: '革命家が干上がった運河に集まる貧困地区。',
				confidence: 'probable',
			},
			'the-harrows': {
				name: '畝溝',
				description: '南部区画の狭い相互接続した運河の迷路。',
				confidence: 'probable',
			},
			'west-docks': {
				name: '西波止場',
				description: '貨物積み込み用の運河網西端。',
				confidence: 'probable',
			},
			'fedre-aqueduct': {
				name: 'フェドレ卿の水路橋',
				description: '崩壊前に建設された壮大なインフラ。',
				confidence: 'probable',
			},
			'white-streets': {
				name: '白い通り',
				description: '灰が丹念に清掃された裕福な地区。',
				confidence: 'probable',
			},
			'citizens-home': {
				name: '市民の家',
				description: '権力を掌握したスカー、クエリオンの本拠。',
				confidence: 'probable',
			},
			'interchange-building': {
				name: '積替所',
				description: '階層間の物資移送のための物流拠点。',
				confidence: 'probable',
			},
			'old-city-square': {
				name: '旧市街広場',
				description: 'ウルテウの歴史的中心。市民統治下の政治動乱の舞台。',
				confidence: 'probable',
			},
			'canton-orthodoxy-urteau': {
				name: '正統局',
				description: '北方支配地の宗教・法務を管轄。',
				confidence: 'probable',
			},
		},
		fadrex: {
			'keep-orielle': {
				name: 'オリエル邸',
				description: '高台の主要邸宅。義務官アラダン・ヨーメンが宮殿として使用。',
				confidence: 'probable',
			},
			'storage-cache': {
				name: '貯蔵洞窟',
				description: '北の岩場に隠された食料とエレクトラムの秘密貯蔵庫。',
				confidence: 'probable',
			},
			'cetts-base': {
				name: 'セットの拠点',
				description: 'アッシュウェザー・セットがルサデルへ出発する前の要塞化された拠点。',
				confidence: 'probable',
			},
			'cremnol-wall-north': {
				name: 'クレムノル壁（北）',
				description: '市の北を守る天然の赤橙色の岩石。',
				confidence: 'probable',
			},
			'cremnol-wall-south': {
				name: 'クレムノル壁（南）',
				description: '南の地質的障壁を成す岩石。',
				confidence: 'probable',
			},
			'yomens-palace': {
				name: 'ヨーメンの宮殿',
				description: '義務官アラダン・ヨーメンの行政拠点。',
				confidence: 'probable',
			},
			'main-gate': {
				name: '正門',
				description: '地質形成を通る市の正面入口。',
				confidence: 'probable',
			},
			'conway-canal': {
				name: 'コンウェイ運河',
				description: '商取引と輸送のための主要運河の一つ。',
				confidence: 'probable',
			},
			'city-walls-east': {
				name: '東壁',
				description: '天然岩石で形成された東部防衛線。',
				confidence: 'probable',
			},
			'ash-mounds': {
				name: '灰丘',
				description: 'エレンドの包囲軍が陣を張った灰に覆われた平原。',
				confidence: 'probable',
			},
			'canton-resource-fadrex': {
				name: '資源局',
				description: 'ヨーメンがヴィンの牢獄として使用した教省局舎。',
				confidence: 'probable',
			},
			'informants-residence': {
				name: '情報提供者の住居',
				description: '市の秘密を知る老情報提供者の住まい。',
				confidence: 'probable',
			},
			'deep-wells': {
				name: '深い井戸',
				description: '主要河川のない都市における重要な水資源。',
				confidence: 'probable',
			},
			'noble-quarter': {
				name: '貴族街',
				description: '上流社会の居住地区。',
				confidence: 'probable',
			},
		},
	},


	movements: {
		...enData.movements,
		kelsier: {
			...enData.movements.kelsier,
			'tfe-0': { title: '生き残りの帰還', description: 'ケルシエがトリスティング卿の農園に到着。貴族はヴェンチャー卿が送った義務官を接待し、商業提携を望んでいた。その夜、若いスカーの少女がトリスティングの元に連れてこられようとした時、ケルシエが介入：トリスティング、義務官、監督官、兵士の全員を殺し、屋敷を焼き払った。', season: '春', year: '1021 FE' },
			'tfe-1': { title: '影の観察者', description: 'ケルシエは影からカモンの盗賊団の活動を監視し、ヴィンが無意識に合金術を使っているのに気づく：霧の落とし子の力を持つ路地裏の孤児。', season: '春', year: '1021 FE' },
			'tfe-3': { title: 'ヴィンの勧誘', description: 'ヴィンはカモンの隠れ家から逃げようとするが、ウリーフに裏切られる。ケルシエが介入し、カモンの暴行からヴィンを救う。ミリーヴを新リーダーに昇格させ、義務官と審問官への対処の報酬として三千ボクシングを受け取る。ヴィンを試し、霧の落とし子であると確認する。', season: '春', year: '1021 FE' },
			'tfe-5': { title: 'アティウムの窃盗', description: 'ケルシエ、ドックスン、ヴィンは屋根に上る。ケルシエは装備を整え霧の中に飛び込み、ヴェンチャー家の要塞を襲ってアティウムを盗む。金庫を手に入れるが、帰路で暗殺者たちと戦わねばならない。アティウムを持ち帰り反乱軍の資金とする。', season: '春', year: '1021 FE' },
			'tfe-6': { title: '仲間が揃う', description: 'クラブスの木工房でケルシエとチームは終の帝国を倒す計画を練る。マーシュがようやく到着し、全員が退室して兄弟が二人で話す。ヴィンが扉の外で聞き耳を立てる。', season: '春', year: '1021 FE' },
			'tfe-7': { title: '弟子の訓練', description: 'ケルシエがヴィンを初めての夜の訓練に連れ出し、霧の外套を渡す。ルサデルの城壁沿い、鋼鉄門の近くで八つの基本金属を教える。', season: '晩春', year: '1021 FE' },
			'tfe-8': { title: 'ルヌーの偽装', description: 'ケルシエがヴィンをルサデルの城壁の外に連れ出し、霧の幽霊に遭遇する。街道でセイズドが馬車で待ちフェリーズまで送る。途中ケルシエはヴィンに三千ボクシングと離脱の選択肢を与える。ルヌー卿の領地でヴィンにヴァレット嬢という偽の身分を作る。', season: '夏', year: '1021 FE' },
			'tfe-10': { title: '革命の計画', description: 'ルサデルに戻り、ケルシエはクラブスの店で進捗会議を開く。セイズドに力を持つ宗教について尋ね――ジャイスム教を教えられ――貴族の皆殺しを神聖とする宗教があるか聞く。ハモンドの兵士の一人が教省がカモンの旧隠れ家を発見したと報告し、会議は打ち切られる。', season: '夏', year: '1021 FE' },
			'tfe-10.2': { title: '倉庫の集会', description: 'ケルシエが倉庫地区の秘密集会でスカーの労働者に演説する。ブリーズと彼の鎮め師と扇動師が群衆を操り、ハスィンの生き残りの伝説を使って反乱を焚き付ける。', season: '夏', year: '1021 FE' },
			'tfe-11': { title: 'カモンの隠れ家の虐殺', description: 'ケルシエとチームが破壊された隠れ家を調査する。ケルシエは乞食たちの中からカモンを探すが、口に刺さったフックで吊るされ手首と足首を縛られ拷問された遺体を発見する。この処刑法は合金術を悪用した者に対するもの。ヴィンがうまくケルシエを尾行していた。', season: '夏', year: '1021 FE' },
			'tfe-13': { title: 'フェリーズでの計画', description: 'ケルシエがフェリーズのルヌー卿領でヴィンとセイズドと会い、ヴィンの初舞踏会の情報を検討する。ヴィンの父も舞踏会にいたと知り、霧の中を通ってルサデルに戻る。', season: '夏', year: '1021 FE' },
			'tfe-14': { title: '宮殿の偵察', description: 'ケルシエがヴィンをクレディク・ショウに連れて行き、支配王が三日ごとに訪れる建物を調べる。戦いながら侵入するが、三人の鋼鉄審問官に包囲される。混乱の中でケルシエとヴィンは離ればなれになる。ヴィンは重傷を負いつつも謎の革装の本を持って逃げる。', season: '夏', year: '1021 FE' },
			'tfe-15': { title: 'クレディク・ショウの後', description: 'チームがヴィンをクレディク・ショウに連れて行ったケルシエの判断を問い質す。セイズドがヴィンを抱えて帰ってくる。ドックスンは危険を犯したことに激怒。ケルシエとドックスンは革装の本に気づき、セイズドはコーレニ語で書かれていると確認する――支配王が昇華する前の故郷の言語。', season: '夏', year: '1021 FE' },
			'tfe-16': { title: 'ヴィンの看病', description: 'ケルシエはクラブスの店でヴィンがクレディク・ショウの傷から回復するのを見守り、彼女が目覚めた時にそばにいる。', season: '夏', year: '1021 FE' },
			'tfe-17': { title: 'ルヌー領での会議', description: 'ケルシエがブリーズ、イェーデン、ドックスンとフェリーズに旅し、ルヌー卿の領地で反乱の次の段階を話し合う。', season: '夏', year: '1021 FE' },
			'tfe-19': { title: '家同士の戦争を煽る', description: 'ケルシエは家同士の戦争を引き起こすため、チャルド・エントロン卿の遺体をテキエル家要塞の庭に投げ込む。それからスス地区に行きホイドと会う――路上の連絡役に扮した情報屋。エラリエル嬢が鎮め師であることを知る。', season: '晩夏', year: '1021 FE' },
			'tfe-19.2': { title: 'ストラフ卿との会見', description: 'ケルシエは病気で障害のあるスカーの乞食に変装してオールストローム広場に行き、ヴェンチャー家当主ストラフ・ヴェンチャー卿と会う。ハスィンの生き残りの噂が広がっていること、そして第十一の金属について語られていることを知る。', season: '晩夏', year: '1021 FE' },
			'tfe-19.3': { title: 'ルヌーへの帰還', description: 'ケルシエが荊棘の道を通ってルヌー邸に戻り、ヴィン、セイズド、ルヌーと情報交換する。貴族について説教し、彼らはスカーを気にしていない、ヴィンはエレンドから離れるべきだと主張する。', season: '晩夏', year: '1021 FE' },
			'tfe-20': { title: '物資の監督', description: 'ケルシエはフェリーズのルヌー領で武器と物資の荷馬車への積み込みを監督し、反乱軍に送る。', season: '晩夏', year: '1021 FE' },
			'tfe-21': { title: '反乱軍', description: 'ケルシエは運河を北に上る艀の上で支配王の日記の翻訳を読む。ホイスの閘門で隊列は止まり、ケルシエは新兵たちと共に反乱軍が訓練している洞窟に向かう。ハスィンの穴の苦い記憶を克服し、アルゴワ洞窟群に入ってハモンドが訓練した軍を検閲する。夕食時にケルシエはビルグの感情を操って見せしめにする。ビルグとデモが挑み合い、ケルシエは合金術でデモを助ける。', season: '秋', year: '1021 FE' },
			'tfe-23': { title: 'ヴィンの追跡', description: 'ケルシエがヴィンがエレンドのグループを見張っていた塔の窓に現れる――ハスティング家の要塞。世界を変えるという彼らの理想主義的な会話を嘲笑する。二人は別方向に去る。', season: '秋', year: '1021 FE' },
			'tfe-24': { title: '状況確認の会合', description: 'ケルシエがクラブスの店に来ると、チームの大半が集まっている。任務の状況を話し合い、スプーク、ハモンド、クラブスと深夜の酒を酌み交わす。ハモンドに駐屯地への情報収集を頼む。', season: '秋', year: '1021 FE' },
			'tfe-25': { title: '必死の決断', description: 'クラブスの店でケルシエはスカーの反乱者がホルステップの駐屯地を攻撃し、ルサデルの駐屯地が北に向かっていると知る。反乱軍に警告しようと決め、ヴィンに錫の弾丸を五つ飲ませて北へ走らせる。', season: '晩秋', year: '1021 FE' },
			'tfe-25.2': { title: 'ホルステップの惨事', description: 'ケルシエとヴィンは錫を燃やしながら十六時間走り続ける。包囲され虐殺された反乱軍の残骸を発見する。ケルシエは戦いたがるが、ヴィンは自分たちが無敵ではないと説得する。アルゴワの洞窟に向かい、メニスのおかげで二千名の兵が生き残っていた。', season: '晩秋', year: '1021 FE' },
			'tfe-26': { title: '立て直し', description: 'チームは洞窟からクラブスの店に戻る。二週間の旅だった。計画は完全な失敗に見える。ブリーズがケルシエを名誉欲だと非難する。ケルシエは挫折を認めるが革命を諦めない。', season: '冬', year: '1021 FE' },
			'tfe-26.2': { title: '処刑', description: 'スプークが噴水広場での処刑を知らせる。チームは屋根に登って見る。大勢のスカーが虐殺され、血が噴水に注がれるのを目撃する。ケルシエはチームを説得して続ける：「これが我々の敵だ。退くな、振り返るな。」', season: '冬', year: '1021 FE' },
			'tfe-27': { title: '新しい戦略', description: 'チームがクラブスの店に戻り次の手を計画：貴族の家同士を戦わせる。セイズドがマーシュからの手紙を持ってくる。曲がり路での待ち合わせ場所が書かれている。', season: '冬', year: '1021 FE' },
			'tfe-27.2': { title: '金属・金', description: 'ケルシエとヴィンはマーシュとの待ち合わせの数時間前に曲がり路の廃墟に来る。待つ間にケルシエは金――第九の合金術金属で過去の別の自分を見せる――について話す。金の術と金の貯蔵術も説明し、ヴィンに初めて金を燃やさせる。マーシュが審問教義省の下級義務官の入れ墨を入れて到着。ルサデルの鎮静所とスモーカーの隠蔽、審問官が老衰で死にうることを明かす。', season: '冬', year: '1021 FE' },
			'tfe-29': { title: 'ルヌーの軍議', description: 'ケルシエはフェリーズのルヌー領でチームの大半と会い、マーシュが提供したルサデルの防衛の詳細地図を研究する。セロンの盗賊団が最近教省に襲われたと判明。夜眠れず、セイズドにいくつかの宗教について語ってくれと頼む。', season: '冬', year: '1021 FE' },
			'tfe-31': { title: '弟子への叱責', description: 'ヴィンがヴェンチャー家要塞でシャン・エラリエル嬢――本物の霧の落とし子――を殺した後、ケルシエとヴィンはクラブスの店に戻る。ケルシエは無謀な戦いを叱るが、ヴィンは貴族とスカーは変わらない、エレンド・ヴェンチャーは守る価値のある善人だと叫ぶ。', season: '冬', year: '1021 FE' },
			'tfe-32': { title: 'マーシュの発見', description: 'ケルシエとヴィンがマーシュの遺体を発見する。血液が完全に抜き取られた抜け殻。クラブスの店でマーシュの手紙を見つけ、審問官に見つかるだろうと説明されている。', season: '冬', year: '1022 FE' },
			'tfe-32.2': { title: '穴の破壊', description: 'ケルシエがハスィンの穴に戻る――最大の苦しみの場所。全ての衛兵を殺し、洞窟から出てくるウォリンというスカーに手を差し伸べる。全てのアティウムの結晶を破壊し、一夜にして支配王の最も貴重な資源を断つ。', season: '冬', year: '1022 FE' },
			'tfe-33': { title: '緊急の隠れ家', description: 'ケルシエがクラブスの店の近くの湿った予備の地下室に戻る――三部屋だけ。ハスィンの穴の全てのアティウムを破壊したと宣言する。', season: '早春', year: '1022 FE' },
			'tfe-33.2': { title: '審問官との戦い', description: '全員がケルシエに従い噴水広場へ。スプークとルヌー卿が処刑の荷馬車に乗っている。ケルシエが広場で審問官と戦う――罠だとほぼ確信している。', season: '早春', year: '1022 FE' },
			'tfe-34': { title: '生き残りの最後の戦い', description: 'ケルシエが噴水広場で審問官と死闘を繰り広げる。両者がアティウムを燃やしている。押しと引きの達人が空中で金属を精緻に操る。審問官を倒し、スカーたちが「ハスィンの生き残り」と叫び始める。支配王が黒い馬車で到着。ハモンドの部下が槍で刺す――まだ歩く。二本目――まだ立っている。支配王がケルシエを殴り、自分の体から槍を引き抜いてケルシエに突き刺す。微笑みながら死に、革命に火を付けた殉教者となる。', season: '早春', year: '1022 FE' },
			'tfe-35': { title: '死を超えて', description: 'クラブスの店の近くの緊急隠れ家で、チームはカンドラ――かつてのルヌー卿――がケルシエの体と骨格を纏っているのを見る。最後の計画。ケルシエは各メンバーに都市制圧の指示付きの手紙を残していた。彼の死はルサデル全体の革命に火を付けた。', season: '早春', year: '1022 FE' },
		},
		vin: {
			...enData.movements.vin,
			'tfe-1': { title: '路地裏の孤児', description: 'ヴィンが盗賊団のリーダー、カモンの前に呼ばれる。彼は乱暴に扱う。ヴィンは無意識に幸運――合金術的な鎮めの一形態――を使ってカモンを落ち着かせる。カモンはジェディオウ卿に変装し、鋼鉄省を欺く計画を立てる。ヴィンは義務官長リードに幸運を使い、カモンの要求を拒否させないようにする。', season: '春', year: '1021 FE' },
			'tfe-2': { title: '教省の詐欺', description: 'カモンがジェディオウ卿に変装してヴィンを財務執事所に連れて行き教省を欺く。ヴィンは上級長官に幸運を使って三千ボクシングを引き出す。ケルシエとドックスンは待合室でヴィンの合金術の脈動を感じ取る。その後、鋼鉄審問官がカモンの一行を追跡しているのを見る。', season: '春', year: '1021 FE' },
			'tfe-4': { title: '加入', description: 'ケルシエがクラブスの作業場でチームに終の帝国を倒す計画を明かす。チームは同意するが、クラブスだけが一度出て行ってから戻ってきた。ケルシエがヴィンは霧の落とし子だと明かし、第十一の金属を見せる。', season: '春', year: '1021 FE' },
			'tfe-7': { title: '霧の落とし子の訓練', description: 'ケルシエがヴィンに初夜の訓練を行い、霧の外套を渡す。八つの基本金属――錫、白鑞、鉄、鋼、亜鉛、真鍮、銅、青銅――を教え、ルサデルの城壁で終了する。', season: '晩春', year: '1021 FE' },
			'tfe-8': { title: 'ルヌーの領地', description: 'ヴィンとケルシエは夜にルサデルの城壁を越え、ヴィンは初めて霧の幽霊に遭遇する。街道でセイズドが馬車で待ちフェリーズに送る。途中ケルシエはヴィンに三千ボクシングと離脱の選択肢を与える。彼女は金を受け取るが残る。ルヌー卿の領地でヴァレット嬢としての活動が提案される。', season: '夏', year: '1021 FE' },
			'tfe-9': { title: 'セイズドとの訓練', description: 'ヴィンとケルシエがルヌーの領地で訓練の模擬戦を行う。ヴィンは髪を切り、セイズドが貴族の仮面を試験しトレラジズムについて話す。ケルシエとセイズドがヴィンの進歩を個別に話し合い、週末にヴェンチャー家要塞の舞踏会に出席すると宣言。', season: '夏', year: '1021 FE' },
			'tfe-10': { title: 'チームへの帰還', description: 'ヴィンはフェリーズからルサデルに戻り、チームの霧の使いから金属を学ぶ。ブリーズから鎮めを教わる。ハモンドが到着し帝国を倒す道義について議論する。', season: '夏', year: '1021 FE' },
			'tfe-10.2': { title: '倉庫の集会', description: 'ヴィンは倉庫地区の秘密集会に出席し、ケルシエがスカーの労働者に演説するのを聞く。その後クラブスの店に戻り進捗会議。ヴィンとリーストボーンズがマーシュについて話す。ハモンドの兵士がカモンの旧隠れ家が教省に発見されたと報告して会議は終了。', season: '夏', year: '1021 FE' },
			'tfe-11': { title: 'カモンの隠れ家の虐殺', description: 'ヴィンとチームは破壊された隠れ家を調査。至る所に死体がある。ヴィンはウリーフを見る――誰かが素手で胸郭を引き裂いた。セイズドがカッツィ教の祈りを唱える。ミリーヴの遺体は椅子に縛られ拷問された跡がある。', season: '夏', year: '1021 FE' },
			'tfe-12': { title: 'ヴェンチャー要塞の初舞踏会', description: 'ヴィンがヴェンチャー家要塞での初めての舞踏会に出席、セイズドが馬車を運転。途中でケルシエが現れ助言を与えて霧に消える。ヴィンはヴァレット・ルヌー嬢として紹介される。夕食で広間の向こうに父を見つける。踊りを断り上階のバルコニーに退き、そこでエレンド・ヴェンチャーと初めて会話する。', season: '夏', year: '1021 FE' },
			'tfe-13': { title: 'フェリーズに帰還', description: 'セイズドがルヌーの領地でヴィンにエレンドとのやり取りを問う。ヴィンの本当の性格が出始める。ケルシエはヴィンの父が舞踏会にいたと知って霧の中に戻る。', season: '夏', year: '1021 FE' },
			'tfe-14': { title: 'クレディク・ショウの中へ', description: 'ケルシエがヴィンをクレディク・ショウに連れて行き、戦いながら侵入する。ヴィンは初めて人を殺す。三体の鋼鉄審問官に包囲される。ヴィンは革装の本を握りしめて防御。アティウムを燃やして一時的に逃れるが、審問官が黒曜石の斧を脇腹に打ち込む。本を持って逃げるが意識を失う――何かが追跡する審問官の注意を逸らし、守るように彼女を抱きしめた。ケルシエではなかった。', season: '夏', year: '1021 FE' },
			'tfe-15': { title: '負傷', description: 'チームがケルシエの判断を問い質す。セイズドがヴィンを抱えて帰ってくる。白鑞を与えて治癒を助ける。セイズドが手術し、ハモンドが部屋に運ぶ。本に気づき、セイズドがコーレニ語で書かれていると確認する。', season: '夏', year: '1021 FE' },
			'tfe-16': { title: 'クラブスの店での回復', description: 'ヴィンが二週間ぶりにクラブスの店で目を覚ます。スプークがずっと見守っていて、ケルシエがどうやってあだ名をつけたか話す。ドックスンとの会話でヴィンはセイズドに何か非常に普通でないところがあると気づく。', season: '夏', year: '1021 FE' },
			'tfe-16.2': { title: 'フェリーズに帰還', description: 'さらに数日の休息の後、ヴィンはフェリーズのルヌー領に戻る。セイズドと話し、蓄存者とは何かを学び、全てのテリス人の侍従が去勢されていると知る。', season: '夏', year: '1021 FE' },
			'tfe-17': { title: 'ルヌー領の庭園', description: 'ヴィンはルヌーの領地で四週間の退屈な療養に不満を漏らす。チームのメンバーが来てニュースを話し合う。ヴィンは次の舞踏会への出席をケルシエに認めさせる。後にメルのこと、ケルシエの動機、そして「弾ける」こと――合金術の力を目覚めさせるトラウマ的出来事――について話す。', season: '夏', year: '1021 FE' },
			'tfe-18': { title: 'エラリエル要塞の舞踏会', description: 'ヴィンがセイズドとエラリエル要塞の舞踏会に出席。エレンドが例のごとく彼女の席に座り読書。彼女のドレスを褒め、ヴィンは呆然とする。数人の貴族と踊りエレンドについて尋ね、シャン・エラリエル嬢の話を聞く。シャンが鎮め師であることに気づく。舞踏会を去る時、ヴィンは霧の中で衛兵が若いスカーの料理人の少年の喉を掻き切るのを目撃する。', season: '夏', year: '1021 FE' },
			'tfe-19': { title: 'フェリーズに帰還', description: 'ケルシエが荊棘の道を通ってルヌー邸に戻りヴィン、セイズド、ルヌーと会う。ヴィンに貴族について説教し、彼らはスカーを気にしていない、エレンド・ヴェンチャーから離れるべきだと主張する。', season: '晩夏', year: '1021 FE' },
			'tfe-20': { title: '探索者の授業', description: 'ヴィンがルサデルから戻るとルヌー領の前に反乱軍用の武器箱が並んでいる。マーシュが来て探索――青銅を使って他の合金術師の金属燃焼を感知すること――を教える。', season: '晩夏', year: '1021 FE' },
			'tfe-22': { title: '日記', description: 'ヴィンがルヌーの領地で支配王の日記を読んでいるとスプークが現れる。ドックスンが武器を取りに来ると言い、赤面して手帕を差し出して逃げる。セイズドが後で、若い男のこの行為は真剣な求愛の意思表示だと説明。ドックスンを待つ間、ヴィンはセイズドと日記のテリス人について話す。セイズドが金の貯蔵術の秘密と蓄存者の設立を明かす。ドックスンと話すと、デヴィンシャイ卿が愛した女性を奪い翌朝殺した話を聞かされる。', season: '秋', year: '1021 FE' },
			'tfe-23': { title: 'ハスティング要塞の舞踏会', description: 'ヴィンがハスティング要塞の舞踏会に出席。シャン嬢がヴィンにエレンドの本を調べるよう頼む。ヴィンはエレンドを見つけ、スカーの女性との関係を尋ねる。父に十三歳で強制され、その女性はその後殺されたが、自分はそれ以来していないと告白。エレンドが手帕を渡す。彼が友人たちと去った後、ヴィンは合金術で彼らを追跡し、支配王の失敗を議論する塔に着く。ケルシエが突然現れ彼らの考えを嘲笑する。', season: '秋', year: '1021 FE' },
			'tfe-24': { title: 'チームの集合', description: 'ヴィンとケルシエがクラブスの店に着くとチームの大半が集まっている。ケルシエが任務の状況を話し合い、ヴィンは新しい生活がどれほど好きか気づく。ケルシエ、スプーク、ハモンド、クラブスが深夜の酒を酌み交わす。', season: '秋', year: '1021 FE' },
			'tfe-24.2': { title: '駐屯地訪問', description: 'ヴィンは街の少年に変装してハモンドとルサデルの駐屯地を訪問し、白鑞について学ぶ。ハモンドは多くの兵が普通のスカーだと説明。サーツという衛兵が、駐屯地が動員されている――スカーの反乱者が北のホルステップ駐屯地を攻撃した――と知らせる。', season: '秋', year: '1021 FE' },
			'tfe-25': { title: '緊急の知らせ', description: 'クラブスの店でハモンドがルサデル駐屯地がホルステップに向かったという知らせを持ってくる。ケルシエがヴィンに錫の弾丸を五つ飲ませて反乱軍に警告するため北へ走らせる。', season: '晩秋', year: '1021 FE' },
			'tfe-25.2': { title: '錫の走り', description: 'ヴィンとケルシエは錫を燃やしながら十六時間走り続ける。反乱軍の残骸がヴァルトロークス駐屯地に包囲され虐殺されているのを発見。ケルシエは戦いたがるがヴィンは無敵ではないと説得。アルゴワの洞窟に進み、メニスの助けで二千名が生き残っていた。', season: '晩秋', year: '1021 FE' },
			'tfe-26': { title: '回復', description: 'ヴィンはクラブスの店に疲労困憊で横たわっている。ルサデルに戻るのに二週間かかった。ケルシエが飛び込んでくる。ブリーズが名誉欲を非難。ケルシエは挫折を認めるが諦めない。', season: '晩秋', year: '1021 FE' },
			'tfe-26.2': { title: '処刑', description: 'スプークが噴水広場の処刑を知らせる。チームは屋根に登る。ヴィンが父を指差す――テヴィディアンという義務官で、長官長、審問官より上の最高位義務官。女性と子供が牢の馬車から引きずり出され処刑され、噴水が血で赤く染まるのを見る。', season: '晩秋', year: '1021 FE' },
			'tfe-27': { title: '次の計画', description: 'チームがクラブスの店に戻る。ケルシエ、ヴィンらが家同士の戦争を前進させる方法を再設計する。セイズドがマーシュからの手紙と待ち合わせ指示を持ってくる。', season: '冬', year: '1021 FE' },
			'tfe-27.2': { title: 'マーシュとの会合', description: 'ケルシエとヴィンが曲がり路の廃墟でマーシュと会う。待つ間にケルシエが金について話す。マーシュが審問教義省の下級義務官の入れ墨を入れて到着。教省がスカー地区に鎮め師を配置し常時鎮圧しスモーカーで隠蔽していると明かす。審問官が老衰で死にうることも確認。', season: '冬', year: '1021 FE' },
			'tfe-28': { title: 'リカル要塞の舞踏会', description: 'ヴィンがリカル要塞の舞踏会に出席し、家同士の戦争を煽る噂を広め始める。エレンドが現れキスしたいと言うがヴィンは本当の自分を知らないと突っぱねる。散歩中にエレンドはヴェンチャー家の富が全てハスィンの穴のアティウム採掘から来ていると明かす。テキエル家がハスティング家に滅ぼされたことに触れ、ヴァレットにルサデルから去るよう説得しようとする。', season: '冬', year: '1021 FE' },
			'tfe-29': { title: '最後の翻訳', description: 'ヴィンがルヌー領でセイズドの最後の日記翻訳を読み、もうないことに落胆する。セイズドが金の貯蔵術をさらに詳しく説明し、ヴィンは彼の錫精神の一つを燃やそうとする。後にケルシエがチームに加わりマーシュの地図を研究。セロンの盗賊団が襲われたことが分かり、ヴィンは審問官がまだ自分を追っていると疑う。', season: '冬', year: '1021 FE' },
			'tfe-30': { title: 'ヴェンチャーの舞踏会', description: 'ヴィンとセイズドがヴェンチャー要塞での最後の家の舞踏会に出席。クリス嬢が密告者と判明しルヌー家を脅迫しようとする。青いサファイアのネックレスと引き換えに、クリスはエラリエルの暗殺者が今夜エレンドを殺そうとしていると教える。ヴィンが合金術でクリスに全てを吐かせる。ステンドグラスの窓を叩き割って脱出。外で用心棒二人、硬貨射ち二人、二人の霧の落とし子と戦う――一人はシャン・エラリエル。ヴィンはシャンのアティウムを先に使い切らせてから殺す。', season: '冬', year: '1021 FE' },
			'tfe-31': { title: '決闘の後', description: 'ヴィンが包帯だらけのぼろぼろの姿でクラブスの台所に入ってくる。ケルシエはエレンドを助けたことを叱るが、ヴィンはスカーと貴族は変わらない――エレンドは善人だと叫ぶ。屋根でヴィンはヴェンチャー家がハスィンの穴を管理していることを告げ、審問官が銅の雲を透して見える理論を共有。ケルシエが試して確認する。', season: '冬', year: '1021 FE' },
			'tfe-32': { title: '屋根の見張り', description: 'ヴィンとスプークがクラブスの店の屋根で見張りをする。スプークが錫のコツを教える：感覚を増幅するだけでなく気が散るものをフィルタリングすること。後にケルシエとヴィンがマーシュの遺体を発見する。血液が完全に抜き取られている。手紙を見つけ審問官に見つかるだろうと説明が書かれている。', season: '冬', year: '1021 FE' },
			'tfe-33': { title: '緊急の隠れ家', description: 'チームがクラブスの店の近くの湿った予備の地下室に移る。三部屋。ケルシエがハスィンの穴の全アティウムを破壊したと宣言。スプークが錫の歩哨として見張る。', season: '早春', year: '1022 FE' },
			'tfe-33.2': { title: '審問官との戦い', description: '全員がケルシエに従い噴水広場に向かう。スプークとルヌー卿が処刑の荷馬車に乗っている。ケルシエが広場で審問官と戦う。エレンドはルヌーの使用人が閉じ込められているのを見てヴァレットを呼ぶが見つからない。', season: '早春', year: '1022 FE' },
			'tfe-34': { title: '生き残りの死', description: 'ケルシエが噴水広場で審問官と全面的に戦う――両者がアティウムを燃やしている。ヴィンは上から見守る。ケルシエは真の押し引きの達人。審問官を倒し、スカーたちが「ハスィンの生き残り」と叫ぶ。支配王が黒い馬車で到着。ケルシエが殺される。ヴィンは飛び降りて死にゆく彼を抱きしめる。', season: '早春', year: '1022 FE' },
			'tfe-35': { title: '生き残りの遺産', description: 'ヴィンは緊急の隠れ家に戻る。ケルシエが正直でなかったこと――死ぬ計画をして自分を捨てたことに怒る。セイズドが慰めの言葉をかける。外でスカーたちが霧の主について話している。近くの倉庫でチームはカンドラがケルシエの姿で現れるのを見る。ケルシエは都市の制圧指示付きの手紙を残していた。ヴィンへの手紙には第十一の金属の謎は解けなかったと書かれている。ヴィンは支配王が何を隠しているか突き止める決意をする。', season: '早春', year: '1022 FE' },
			'tfe-36': { title: 'クレディク・ショウの中へ', description: 'ヴィンがクレディク・ショウに向けて静かに歩き、外の衛兵に反乱への参加を促す。中で二人の審問官を殺す。次の部屋で老人が椅子に座っている。審問官がヴィンの首を掴む――老人が話し、審問官たちは彼を支配主と呼ぶ。だがヴィンは混乱する：噴水広場の支配王は若い男だった。第十一の金属を燃やすと老人の横に二つの幽霊のような姿が見える。', season: '早春', year: '1022 FE' },
			'tfe-37': { title: '救出と真実', description: '審問官たちがヴィンに他の全ての金属を打ち消す金属を燃やさせる。支配王の玉座の前に連れ出される――ケルシエを殺した若い姿。ヴィンの父テヴィディアン、最高位義務官は審問官に処刑される。ヴィンはリーンが自分を裏切らなかったと知る：拷問に耐え、ヴィンは餓死したと審問官に伝えた。セイズドが牢房に連れてこられ金の貯蔵力を解放して扉を叩き壊す。エレンドと六人の兵士が突入。ヴィンは外套と金属の薬瓶を見つける。エレンドは彼女が霧の落とし子だと知る。ヴィンはエレンドの顔を両手で包みキスし、支配王を殺しに行く。', season: '早春', year: '1022 FE' },
			'tfe-38': { title: '支配王の殺害者', description: 'ヴィンがクレディク・ショウの尖塔の間を跳び上がる。審問官カルが首を掴むが、もう一体の審問官がカルの首から金属の杭を引き抜き即死させる。それはマーシュ――生きていて、十一本の杭を打ち込まれていた。全ての他の審問官を殺した。支配王の本名はラシェック：永世の英雄を殺してなり代わった者。ヴィンが支配王の腕輪を外す。金の貯蔵の若さを失い、弱々しい老人になる。セイズドが金属の薬瓶を持って現れる。ヴィンが心臓に槍を突き刺す。千年の圧政が終わる。', season: '早春', year: '1022 FE' },
			'tfe-39': { title: '新たな時代', description: 'セイズド、マーシュ、ヴィンがスカー地区の近くの建物の屋上に立つ。セイズドは支配王が合金術と金の貯蔵術の両方の使い手だったと説明――腕輪が若さを蓄えていた。マーシュは自分の生存と変容を語る：十一本の金属の杭――二本が目を貫き、八本が胸に、一本が背中。カンドラ――霧の幽霊から進化した生物で今やヴィンを主と認めている――についても話す。', season: '春', year: '1022 FE' },
			'tfe-39.2': { title: 'ヴィンとエレンド', description: 'ヴィンはヴェンチャー要塞の外の霧の中からエレンドを密かに見守る。スカーと貴族のリーダーたちとの会議はうまくいった――セイズドでさえ金属なしには全て記憶できないほどの壮大な演説の後、全員が彼を王として受け入れた。エレンドは新しい法典を起草している。ヴィンはリーンが審問官に自分を売らなかったことを思い出す：本当に自分を愛してくれる人がいる。その記憶と共にエレンドのもとに走り、二人は抱き合う。', season: '春', year: '1022 FE' },
		},
		sazed: {
			...enData.movements.sazed,
			'tfe-9': { title: 'テリスの侍従', description: 'セイズドがフェリーズのルヌー卿の領地にヴィンの教師兼侍従として到着。礼儀作法、舞踊、立ち居振る舞いを教える。トレラジズム――彼が勧める五番目の宗教――を紹介し、さらに562の宗教を知っていると認める。', season: '夏', year: '1021 FE' },
			'tfe-10.2': { title: '倉庫の集会', description: 'セイズドがケルシエとヴィンと共に秘密の倉庫集会に出席し、生き残りがスカーの労働者に演説するのを見守る。', season: '夏', year: '1021 FE' },
			'tfe-12': { title: '舞踏会の守護者', description: 'セイズドがヴィンの侍従としてヴェンチャー要塞での最初の舞踏会に同行し、貴族社会に潜入する彼女を見守る。', season: '夏', year: '1021 FE' },
			'tfe-13': { title: 'フェリーズでの報告', description: 'セイズドがヴィンとケルシエとフェリーズのルヌー領に戻り、ヴィンの初舞踏会の成果を検討し次の手を計画する。', season: '夏', year: '1021 FE' },
			'tfe-15': { title: 'ヴィンの救助', description: 'セイズドがヴィンを抱えてクラブスの店に運び、クレディク・ショウでの負傷を手術。コーレニ語の本も調べる。', season: '夏', year: '1021 FE' },
			'tfe-16': { title: 'フェリーズに帰還', description: 'クラブスの店でヴィンの容態を安定させた後、セイズドはフェリーズのルヌー領に戻る。', season: '夏', year: '1021 FE' },
			'tfe-17': { title: 'コーレニ語の本の翻訳', description: 'フェリーズのルヌー領の書庫で、セイズドはヴィンがクレディク・ショウから持ち帰ったコーレニ語の本の翻訳に取り組む。', season: '夏', year: '1021 FE' },
			'tfe-18': { title: 'エラリエル要塞の守護者', description: 'セイズドがテリスの侍従としてヴィンのエラリエル要塞舞踏会に同行し、貴族の宮廷で彼女を見守る。', season: '夏', year: '1021 FE' },
			'tfe-19': { title: '情報交換', description: 'ケルシエが荊棘の道を通ってルヌー邸に戻った時、セイズドはそこにいる。貴族の家と反乱の進捗について情報交換し、ケルシエはヴィンにエレンドから離れるよう説教する。', season: '晩夏', year: '1021 FE' },
			'tfe-22': { title: '金の貯蔵術の秘密', description: 'ルヌーの領地でセイズドはヴィンと支配王の日記に出てくるテリス人について話す。金の貯蔵術の秘密とテリスの宗教が失われた後に蓄存者が設立された経緯を明かす。日記から大地がかつて緑で肥沃だったとの新知識も得る。', season: '秋', year: '1021 FE' },
			'tfe-23': { title: 'ハスティング要塞の守護者', description: 'セイズドがテリスの侍従としてヴィンのハスティング要塞舞踏会に同行し、噂を広め貴族と会話する彼女を待つ。', season: '秋', year: '1021 FE' },
			'tfe-27': { title: 'マーシュの便り', description: 'セイズドがマーシュからの手紙を持ってクラブスの店に戻る。消息と会合の指示が書かれている。支配王の日記の翻訳も持参。', season: '冬', year: '1021 FE' },
			'tfe-28': { title: 'リカル要塞の守護者', description: 'セイズドがテリスの侍従としてヴィンのリカル要塞舞踏会に同行し、家同士の戦争を煽りエレンドと話す彼女を待つ。', season: '冬', year: '1021 FE' },
			'tfe-29': { title: '金の貯蔵術の授業', description: 'ルヌーの領地でセイズドがヴィンに最後の日記翻訳を渡す。金の貯蔵術をさらに詳しく説明し、ヴィンが彼の錫精神の一つを燃やそうとする。後にケルシエがマーシュの詳細地図を研究する際に加わる。その夜、ケルシエがセイズドにいくつかの宗教について語ってくれと頼む。', season: '冬', year: '1021 FE' },
			'tfe-30': { title: 'ヴェンチャー要塞の守護者', description: 'セイズドがヴィンとヴェンチャー要塞での最後の家の舞踏会に同行。客たちが同盟を結びヴァレット嬢は冷遇される。ヴィンがエレンド暗殺の陰謀を知りシャン・エラリエルと戦う前にセイズドは舞踏会を去る。', season: '冬', year: '1021 FE' },
			'tfe-31': { title: 'ヴィンの傷の手当て', description: 'シャン・エラリエルとエラリエルの暗殺者との戦いで傷だらけになったヴィンがクラブスの店に到着した後、セイズドが傷の手当てをする。夜の出来事をヴィンが語るのを聞く。', season: '冬', year: '1021 FE' },
			'tfe-33': { title: '緊急の隠れ家', description: 'ケルシエがハスィンの穴を破壊した後、セイズドはチームと共にクラブスの店近くの予備の地下室にいる。ヴィンと第十一の金属について話す。スカーが噴水広場に引かれスプークが処刑の荷馬車に現れた時、セイズドはケルシエが審問官と戦う間隠れ家に残る。', season: '早春', year: '1022 FE' },
			'tfe-35': { title: 'ヴィンの慰め', description: 'ケルシエの死後、セイズドは緊急の隠れ家でヴィンのそばにいる。慰めの言葉をかけるがヴィンはケルシエが自分を捨てたと激怒。チームが倉庫にカンドラのケルシエの姿を見に行く時、彼は残る。', season: '早春', year: '1022 FE' },
			'tfe-37': { title: '解き放たれた金の貯蔵術師', description: 'セイズドがクレディク・ショウのヴィンの牢房に連れてこられる。縮んだように見えた後、筋肉が倍の大きさに膨れ上がる――貯蔵した金の力を解放して扉を叩き壊す。', season: '早春', year: '1022 FE' },
			'tfe-38': { title: '帝国の崩壊', description: 'セイズドがクレディク・ショウの最終決戦にヴィンへの金属の薬瓶を持って現れる。支配王の陥落を目撃する――ヴィンが腕輪を外した後、急速に老化する。', season: '早春', year: '1022 FE' },
			'tfe-39': { title: '暴君を理解する', description: 'セイズドがヴィンとマーシュとスカー地区近くの建物の屋上に立つ。支配王が合金術師であり金の貯蔵術師でもあったと説明――腕輪が若さを蓄えていた。全てのテリスの侍従が去勢された理由はこれだろうと推測：支配王は金の貯蔵と合金術の両方の血統を持つ者が不死に挑戦することを恐れた。', season: '春', year: '1022 FE' },
		},
		elend: {
			...enData.movements.elend,
			'tfe-12': { title: '読書する貴族', description: 'エレンド・ヴェンチャーが自家の要塞での舞踏会でヴィンがバルコニーに一人でいるのに気づき近づく。他の貴族が踊り陰謀を巡らせる中、「記念碑の試練」を取り出して読み始め、彼女を苛立たせる。', season: '夏', year: '1021 FE' },
			'tfe-18': { title: 'ヴァレットとの夕べ', description: 'エレンドがエラリエル要塞の舞踏会に出席し、例のごとくヴィンの席に座り読書。彼女のドレスを褒め呆然とさせる。', season: '夏', year: '1021 FE' },
			'tfe-23': { title: '手帕', description: 'エレンドがハスティング要塞の舞踏会でヴィンを見つける。スカーの女性との関係を尋ねる。父に十三歳で強制され女性はその後殺されたが以来していないと告白。真剣な求愛の意として手帕を渡す。友人たちと去った後、塔に登り支配王の失敗を議論する。', season: '秋', year: '1021 FE' },
			'tfe-28': { title: 'リカル要塞の舞踏会', description: 'エレンドがリカル要塞の舞踏会でヴィンの前に現れる。キスしたいと言うがヴィンは本当の自分を知らないと言い返す。散歩中にヴェンチャー家の富が全てハスィンの穴のアティウムから来ていると信頼して明かす。テキエル家がハスティング家に滅ぼされたことに触れ、ヴァレットにルサデルから去るよう説得しようとする。', season: '冬', year: '1021 FE' },
			'tfe-28.2': { title: '父の呼び出し', description: 'エレンドがヴェンチャー要塞に戻り父の部屋を通り過ぎようとする。ストラフ・ヴェンチャー卿――錫の霧の使いで何も見逃さない――が呼び止める。ストラフはハスティング家との夕食を命じる。後にジャスティスがヴァレット嬢の馬車を追跡したと報告――彼女はテリス人だけと共にフェリーズに着き、ヴァレットは消えた。エレンドはアティウムの秘密を漏らしたことに気づき、父に取引を提案：食事に行く代わりにヴァレットを監視するスパイをつける。', season: '冬', year: '1021 FE' },
			'tfe-30': { title: 'ヴェンチャーの舞踏会', description: 'エレンドがヴェンチャー要塞の舞踏会中に父と夕食。ヴィンが彼の目を引き対峙する。エレンド暗殺の企てを知ったヴィンが霧の中に飛び出す。夜はヴィンとシャンの戦いで混乱の内に終わる。エレンドは混乱に紛れて姿を消す。', season: '冬', year: '1021 FE' },
			'tfe-31': { title: 'スパイ報告', description: 'エレンドとジャスティスがフェルトと会い、エレンドのスパイがクラブスの店とその住人について発見した全てを報告する。後にヴェンチャーの衛兵がエレンドを父ストラフの元に連れて行き、シャン・エラリエルはエレンドを暗殺するために送り込まれた霧の落とし子だったことを明かす。', season: '冬', year: '1021 FE' },
			'tfe-33': { title: '処刑の荷馬車', description: 'エレンドが噴水広場でルヌーの使用人が処刑の荷馬車に閉じ込められているのを見る。ヴァレットを呼ぶが群衆の中で見つけられない。', season: '早春', year: '1022 FE' },
			'tfe-34': { title: 'ケルシエがエレンドを救う', description: 'エレンドが噴水広場のルヌーの牢に来てヴァレットについて尋ねる。審問官が牢に飛び降り斧でエレンドを斬ろうとした瞬間ケルシエが審問官を攻撃し命を救う。ケルシエがエレンドにヴァレットは無事だと叫ぶ。', season: '早春', year: '1022 FE' },
			'tfe-36': { title: 'ヴェンチャーの権力', description: 'エレンドの父がスカーの反乱を告げルサデルからの脱出を望む。エレンドは去ることを拒否。ストラフは同意――エレンドが死ぬことを望みつつ――ヴェンチャー家の権限を移譲。エレンドは兵士にリカル要塞での共同防衛を命じ、最良の五人の兵と共にスカーの指導者に会いに行く。', season: '早春', year: '1022 FE' },
			'tfe-37': { title: 'ヴィンの救出', description: 'エレンドはスカーに金を渡してドックスンの元に案内してもらい、ヴェンチャー家は反乱に抵抗しない――協力すべきだと告げる。エレンドと六人の兵士がクレディク・ショウに突入しヴィンを救出。秘密が明かされ――彼女が霧の落とし子だと知る。ヴィンが彼の顔を両手で包みキスし、支配王を殺しに行く。', season: '早春', year: '1022 FE' },
			'tfe-38': { title: '哲人王', description: '支配王の死後、エレンドは秩序を呼びかける統一的な声となる。スカーと貴族の指導者と会い新国家の法典を起草し始める。', season: '早春', year: '1022 FE' },
			'tfe-39': { title: '新しい王', description: 'エレンド・ヴェンチャーがスカーと貴族の指導者を前にした壮大な演説の後、中央支配地の王として受け入れられる。ヴェンチャー要塞に座り新しい法典を起草。ヴィンが霧の中から窓越しに密かに見守り、やがて彼のもとに走る――二人は抱き合う。', season: '春', year: '1022 FE' },
		},
		marsh: {
			...enData.movements.marsh,
			'tfe-7': { title: '渋る兄', description: 'マーシュがクラブスの店に到着――ケルシエの兄で反乱のリーダー。不承不承ながらチームの計画に加わる。', season: '晩春', year: '1021 FE' },
			'tfe-10.2': { title: '倉庫の集会', description: 'マーシュがチームと共に秘密の倉庫集会に出席し、弟ケルシエがスカーの労働者に演説するのを見る。', season: '夏', year: '1021 FE' },
			'tfe-20': { title: 'ヴィンへの教え', description: 'マーシュがフェリーズのルヌー領地に来てヴィンに探索を教える――青銅を使って金属を燃やしている他の合金術師を感知し、種類を特定し、霧の使いと霧の落とし子を見分ける方法。銅とスモーカーの役割も教える。', season: '晩夏', year: '1021 FE' },
			'tfe-27': { title: '教省への潜入', description: 'マーシュが曲がり路の廃墟でケルシエとヴィンと会う。審問教義省の下級義務官の入れ墨を入れている。確かに教省に潜入していた。鋼鉄省がスカー地区にスモーカーで隠蔽しつつ鎮め師を配置し常時鎮圧していることを明かす。審問官が老衰で死にうることも確認。', season: '冬', year: '1021 FE' },
			'tfe-30': { title: '消息不明', description: 'マーシュが沈黙し連絡が途絶える。審問教義省の最深部に消えた。チームは最悪を恐れる。', season: '冬', year: '1021 FE' },
			'tfe-32': { title: '遺体', description: 'ケルシエとヴィンがマーシュの遺体を発見。血液が完全に抜き取られた空の殻。後に店で見つかった手紙に審問官に見つかるだろうと書かれている。チームは悲しむ。だがその損壊された遺体は見かけ通りではない。', season: '冬', year: '1022 FE' },
			'tfe-38': { title: '審問官', description: 'マーシュがクレディク・ショウへの最後の攻撃で姿を現す――生きている、十一本の金属の杭で変容している：二本が目を貫き、八本が胸に、一本が背中でそれらをつなぐ。カルの首から杭を引き抜いて即死させ、他の全ての審問官も殺したと明かす。', season: '早春', year: '1022 FE' },
			'tfe-39': { title: '十一本の杭', description: 'マーシュがセイズドとヴィンとスカー地区近くの建物の屋上に立つ。生存と変容を語る――十一本の杭、恐ろしい過程、そしてどうやって耐えたか。カンドラ――霧の幽霊から進化した生物――かつてルヌー卿を演じ今やヴィンを主人と認めた存在についても話す。', season: '春', year: '1022 FE' },
		},
		spook: {
			...enData.movements.spook,
			'tfe-7': { title: '若い錫の霧の使い', description: 'スプーク、クラブスの若い甥、木工房でチームの哨兵と伝令を務める。東部の濃い訛りで話す。', season: '晩春', year: '1021 FE' },
			'tfe-9': { title: '伝令の走り', description: 'スプークがルサデルのクラブスの店とフェリーズのルヌー領の間でメッセージを運ぶ。錫で増強された感覚が抜群の偵察力を発揮する。', season: '夏', year: '1021 FE' },
			'tfe-16': { title: 'ヴィンの看病', description: 'リーストボーンズがクラブスの店で負傷したヴィンを見守り、クレディク・ショウの偵察での傷から目覚めた時にそばにいる。ケルシエが彼にあだ名をつけた経緯を語る：スプーク。', season: '夏', year: '1021 FE' },
			'tfe-22': { title: '手帕', description: 'スプークがフェリーズのルヌー領に来て支配王の日記を読んでいるヴィンを見つける。ドックスンが武器を取りに来たと言い、赤面して手帕を渡して逃げる。セイズドが後で若い男のこの行為は真剣な求愛の意思表示だと説明。', season: '秋', year: '1021 FE' },
			'tfe-24': { title: 'クラブスの店の夜', description: 'スプークがクラブスの店でケルシエ、ハモンド、クラブスと深夜の酒を酌み交わし任務の状況を話し合う。', season: '秋', year: '1021 FE' },
			'tfe-26': { title: '処刑', description: 'スプークがクラブスの店に走り込み噴水広場の処刑を知らせる。チームと共に広場に行き、スカーの女性と子供が残虐に公開処刑され血が噴水に注がれるのを目撃する。', season: '晩秋', year: '1021 FE' },
			'tfe-32': { title: '屋根の見張り', description: 'スプークがヴィンとクラブスの店の屋根で見張りをし、錫のコツを教える。単に感覚を増幅するだけでなく、重要なものを選り分けて余計なもので気を散らさないことだと説明する。', season: '冬', year: '1022 FE' },
			'tfe-33': { title: '捕らわれた哨兵', description: 'チームが噴水広場に向かう時、スプークが処刑の荷馬車にルヌー卿と共に閉じ込められているのが目撃される――教省に捕まった。', season: '早春', year: '1022 FE' },
			'tfe-34': { title: '犠牲の目撃者', description: 'スプークが群衆の中からケルシエが噴水広場で戦い死ぬのを目撃する――生涯に消えない出来事。生き残りの犠牲がスプークの「大義に奉じる」という意味の理解を変える。', season: '早春', year: '1022 FE' },
			'tfe-38': { title: '革命', description: 'スプークが最後の革命でチームと共に戦い、ルサデルの街頭でスカーの蜂起の調整を助ける。', season: '早春', year: '1022 FE' },
		},
	},

	markerLabels: {
		capital: '支配地の首府',
		city: '都市',
		ashmount: '灰の山', // Ashmount
		landmark: '名所',
		stronghold: '要塞',
		hideout: '隠れ家',
		mine: '監獄鉱山',
		mystical: '聖地',
		town: '集落',
		village: 'スカーの村',
		river: '水路',
		industrial: '補給拠点',
		region: '支配地', // Dominance
		keep: '貴族の砦',
		palace: '宮殿',
		plantation: '農園',
		district: '地区',
		estate: '貴族の屋敷',
	},

	cityMarkerLabels: {
		gate: '城門',
		keep: '貴族の砦',
		palace: '宮殿',
		district: '街区',
		shop: '商店',
		safehouse: 'クルーのアジト',
		landmark: '重要地点',
		canal: '運河',
		ministry: '教省支部', // Steel Ministry building
		plaza: '広場',
	},
};
