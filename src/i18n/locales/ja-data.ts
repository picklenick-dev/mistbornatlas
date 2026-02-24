/**
 * Japanese data translations.
 * Sources: Official Hayakawa Publishing (早川書房) editions, translated by Tsukasa Kaneko (金子司).
 * Key terminology: Lord Ruler = 支配王, Mistborn = 霧の落とし子, Misting = 霧の使い,
 * Allomancy = 合金術, Final Empire = 終の帝国, Luthadel = ルサデル.
 */
import type { DataTranslations } from '../types';

export const jaData: DataTranslations = {
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
		vin: {
			'tfe-1': {
				title: '路地裏の浮浪児',
				description:
					'ヴィンはルサデルのスラムでカモンの盗賊団の見張り番として働き、自覚のない合金術の能力で周囲の人々にひそかに影響を与えている。',
				season: '春',
				year: '1021 最終帝国',
			},
			'tfe-2': {
				title: '教省での詐欺',
				description:
					'ヴィンはカモンの一味と共に財務教区での大掛かりな詐欺に参加するが、彼女の合金術の脈動がケルシャーの注意を引く。',
				season: '春',
				year: '1021 最終帝国',
			},
			'tfe-4': {
				title: '勧誘',
				description:
					'ケルシャーがカモンの暴行からヴィンを救い出した後、彼女はクラブスの木工店——一味の本拠地——に連れて行かれ、支配王を倒す計画を知らされる。',
				season: '春',
				year: '1021 最終帝国',
			},
			'tfe-7': {
				title: '霧の落とし子の訓練',
				description:
					'ケルシャーはヴィンを鋼鉄門近くの城壁に連れ出し、初めての本格的な合金術の訓練を行い、暗い屋根の上で鋼と鉄の燃焼を教える。',
				season: '晩春',
				year: '1021 最終帝国',
			},
			'tfe-8': {
				title: 'ルヌー邸',
				description:
					'ヴィンは西のフェリーズに向かい、ルヌー卿の田舎の邸宅でヴァレット・ルヌー嬢としての偽装を始め、貴族社会への潜入に備える。',
				season: '夏',
				year: '1021 最終帝国',
			},
			'tfe-9': {
				title: 'サゼドの指導',
				description:
					'ルヌー邸でのサゼドの指導の下、ヴィンは大舞踏会で貴婦人として通用するために必要な礼儀作法、舞踊、立ち居振る舞いを学ぶ。',
				season: '夏',
				year: '1021 最終帝国',
			},
			'tfe-10': {
				title: '仲間への帰還',
				description:
					'ヴィンはフェリーズからルサデルに戻り、クラブスの店で仲間と合流する。ケルシャーは夜の街を駆け抜けるアロマンシーの訓練に彼女を連れ出し、さらなる鍛錬を積ませる。',
				season: '夏',
				year: '1021 最終帝国',
			},
			'tfe-10.2': {
				title: '倉庫での集会',
				description:
					'ヴィンはケルシャーが隠された倉庫に集まったスカーの労働者たちに革命を説く秘密集会に参加する。',
				season: '夏',
				year: '1021 最終帝国',
			},
			'tfe-11': {
				title: 'カモンのアジトの虐殺',
				description:
					'ヴィンとクルーはカモンの旧アジトへの残忍な襲撃の跡を発見する——財務局の詐欺の報復として、聖務省が中にいた全員を殺害していた。',
				season: '夏',
				year: '1021 最終帝国',
			},
			'tfe-13': {
				title: 'ヴェンチャー城館での初めての舞踏会',
				description:
					'ヴィンはヴァレット・ルヌー嬢として初めての舞踏会に出席し、貴族の煌びやかな世界に足を踏み入れる。隅で一人読書するエレンド・ヴェンチャーと出会う。',
				season: '夏',
				year: '1021 最終帝国',
			},
			'tfe-14': {
				title: 'クレディク・ショウの偵察',
				description:
					'ヴィンとケルシャーは支配王の宮殿を大胆な夜間偵察し、千本尖塔の間を跳び回りながら防御態勢を調査する。',
				season: '夏',
				year: '1021 最終帝国',
			},
			'tfe-16': {
				title: 'エラリエル城館での舞踏会',
				description:
					'ヴィンはエラリエル家の舞踏会に出席し、貴族の家々とその同盟関係についての情報を収集しながら偽装を深める。',
				season: '夏',
				year: '1021 最終帝国',
			},
			'tfe-19': {
				title: '深まる絆',
				description:
					'ヴェンチャー城館での別の舞踏会で、任務にもかかわらずヴィンとエレンドの関係が深まる。彼女は舞踏会の後、屋根の上で踊る。',
				season: '晩夏',
				year: '1021 最終帝国',
			},
			'tfe-22': {
				title: '日誌',
				description:
					'クラブスの店に戻り、ヴィンは支配王の古代の日誌を研究し、深淵と時代の英雄の予言への不穏な言及を見つける。',
				season: '秋',
				year: '1021 最終帝国',
			},
			'tfe-25': {
				title: '白鑞走り',
				description:
					'ホルステップの反乱軍が駐屯軍に虐殺された時、ヴィンは必死の白鑞走り——何時間も白鑞を燃やし続ける——で生存者の救出に向かう。',
				season: '晩秋',
				year: '1021 最終帝国',
			},
			'tfe-26': {
				title: '回復',
				description:
					'ヴィンは白鑞走りで疲弊し切ってクラブスの店に戻り、仲間たちがホルステップの壊滅的敗北から立て直す間、体を休める。',
				season: '晩秋',
				year: '1021 最終帝国',
			},
			'tfe-30': {
				title: '家門戦争の激化',
				description:
					'貴族の家門同士が争い合い、家門戦争が激化する。ヴィンは一味の工作が成功していることに気づくが、暴力に心を痛める。',
				season: '冬',
				year: '1021 最終帝国',
			},
			'tfe-34': {
				title: '生き残りの死',
				description:
					'ヴィンは屋根の上から、ケルシャーが噴水広場で支配王と戦い殺されるのを無力に見守る。ケルシャーは死してハッシンの生き残りとなる。',
				season: '早春',
				year: '1022 最終帝国',
			},
			'tfe-36': {
				title: '宮殿への攻撃',
				description:
					'スカーの反乱を率い、ヴィンはクレディク・ショウに突入し、異審官や衛兵と戦いながら支配王の玉座の間を目指す。',
				season: '早春',
				year: '1022 最終帝国',
			},
			'tfe-38': {
				title: '支配王の殺害者',
				description:
					'ヴィンは玉座の間で支配王と対峙し、その貯金属を引き剥がして不死の暴君を殺す。千年の圧政が終わる。',
				season: '早春',
				year: '1022 最終帝国',
			},
			'tfe-39': {
				title: '新たな時代',
				description:
					'革命の余波の中、ヴィンはヴェンチャー城館でエレンドと共に新たな時代の幕開けに立つ。霧はまだ流れているが、支配王はもういない。',
				season: '春',
				year: '1022 最終帝国',
			},
			'woa-1': {
				title: '都市の守護者',
				description:
					'ヴィンは毎晩ルサデルの城壁を巡回し、三つの軍勢がじわじわと解放されたばかりの都市に迫る中、脅威を警戒する。',
				season: '秋',
				year: '1023 最終帝国',
			},
			'woa-3': {
				title: '霧の精霊',
				description:
					'夜間巡回中、ヴィンは霧の中に謎の人影と遭遇する——彼女を見守り、何かを指し示しているように見える精霊。',
				season: '秋',
				year: '1023 最終帝国',
			},
			'woa-8': {
				title: '守護者にして伴侶',
				description:
					'ヴィンは宮殿でエレンドの守護者と伴侶という二つの役割の間で揺れ動き、彼への愛と彼を守る義務の狭間で葛藤する。',
				season: '秋',
				year: '1023 最終帝国',
			},
			'woa-14': {
				title: '仲間の会議',
				description:
					'一味はクラブスの店に集まり、ストラフ・ヴェンチャーの軍が北に陣取り、ケットの軍勢が西から迫る中、戦略を議論する。',
				season: '初冬',
				year: '1023 最終帝国',
			},
			'woa-22': {
				title: '政治的緊張',
				description:
					'包囲が厳しくなる中、ヴィンはエレンドが議会と統治の要求に苦闘するのを見守りながら、霧の中でゼインを追う。',
				season: '冬',
				year: '1023 最終帝国',
			},
			'woa-26': {
				title: 'ストラフとの交渉',
				description:
					'ヴィンはエレンドと共に都市の北にあるストラフ・ヴェンチャーの陣営に赴き、征服者志望を威圧するため恐るべき力を見せつける。',
				season: '冬',
				year: '1023 最終帝国',
			},
			'woa-28': {
				title: '交渉からの帰還',
				description:
					'ストラフの陣営での緊迫した会談の後、ヴィンはヴェンチャー城館に戻るが、ゼインの囁きと自分の役割への募る疑念に苛まれる。',
				season: '冬',
				year: '1024 最終帝国',
			},
			'woa-35': {
				title: '議会の危機',
				description:
					'ヴィンは議会がエレンドを解任しペンロッド卿に統治を委ねる投票を傍聴席から見守り、民主主義の実験が崩壊するのを目撃する。',
				season: '冬',
				year: '1024 最終帝国',
			},
			'woa-43': {
				title: 'ケットへの襲撃',
				description:
					'ヴィンはハスティング城館に駐留するケットの軍勢に壊滅的な単独攻撃を仕掛け、霧の落とし子の力を見せつけて彼の軍を都市から追い出す。',
				season: '晩冬',
				year: '1024 最終帝国',
			},
			'woa-47': {
				title: 'ゼインとの決闘',
				description:
					'ハスティング城館の近くで、ヴィンはゼイン・ヴェンチャーと壮絶な霧の落とし子同士の戦いを繰り広げ、愛する者を守るために彼を殺す。',
				season: '晩冬',
				year: '1024 最終帝国',
			},
			'woa-49': {
				title: '追放',
				description:
					'ヴィンとエレンドは錫門からルサデルを出発し、ペンロッドの新政府から追放され、少数の護衛と共にテリスに向かう。',
				season: '晩冬',
				year: '1024 最終帝国',
			},
			'woa-50': {
				title: '北への旅',
				description:
					'一行はテリスへ向かうが、ヴィンは何かが自分を引き戻すのを感じる——昇華の泉は山中にはなかったのだ。',
				season: '晩冬',
				year: '1024 最終帝国',
			},
			'woa-52': {
				title: '戦場への帰還',
				description:
					'コロスがルサデルの城壁を破った時、ヴィンは必死の白鑞走りで駆け戻り、間に合ってコロスを支配下に置き都市を救う。',
				season: '晩冬',
				year: '1024 最終帝国',
			},
			'woa-54': {
				title: '泉の探索',
				description:
					'ルサデルは救われたが傷つき、ヴィンは霧の精霊の導きに従いクレディク・ショウの地下深くで昇華の泉を探す。',
				season: '晩冬',
				year: '1024 最終帝国',
			},
			'woa-58': {
				title: '泉の発見',
				description:
					'ヴィンはクレディク・ショウの地下の古代洞窟に降り、蓄積されたエネルギーで脈動する昇華の泉を発見する。',
				season: '冬',
				year: '1024 最終帝国',
			},
			'woa-59': {
				title: '力の解放',
				description:
					'泉で、ヴィンは計り知れない力を手にする——しかし、滅びによる予言の改竄に騙され、力を解放してしまう。恐ろしいものが牢獄から解き放たれる。',
				season: '冬',
				year: '1024 最終帝国',
			},
			'hoa-1': {
				title: '北方遠征',
				description:
					'ヴィンとエレンドは軍を率いてヴェティタンへ向かう。増大する灰の降下に埋もれつつある都市で、支配王の隠された貯蔵庫の一つを確保するためだ。',
				season: '春',
				year: '1026 最終帝国',
			},
			'hoa-3': {
				title: '最初の貯蔵庫',
				description:
					'ヴィンはヴェティタンの貯蔵洞窟を開き、食料と物資、そして支配王が封印した危険についての暗号的なメッセージが刻まれた金属板を発見する。',
				season: '春',
				year: '1026 最終帝国',
			},
			'hoa-8': {
				title: '軍の分割',
				description:
					'ヴィンはルサデルに戻り、軍を分割する。サゼドとブリーズが北のアルトーへ、ヴィンとエレンドは西のファドレックス市へ進軍する。',
				season: '夏',
				year: '1026 最終帝国',
			},
			'hoa-10': {
				title: '西への進軍',
				description:
					'ヴィンはエレンドの軍と共に西のファドレックス市へ進軍する。世界が崩壊していく中、灰は日ごとに重く降り注ぐ。',
				season: '夏',
				year: '1026 最終帝国',
			},
			'hoa-21': {
				title: 'ファドレックス到着',
				description:
					'軍は灰に覆われた平原にファドレックス市外に包囲陣を敷く。義務官ヨメンは都市と貯蔵庫の引き渡しを拒否する。',
				season: '秋',
				year: '1026 最終帝国',
			},
			'hoa-28': {
				title: '舞踏会での密偵',
				description:
					'ヴィンは貴婦人に変装してファドレックスに潜入し、ヨメンの舞踏会にオリエル城館で出席して情報を収集し、外交的な解決を模索する。',
				season: '秋',
				year: '1026 最終帝国',
			},
			'hoa-40': {
				title: '二度目の舞踏会',
				description:
					'ヴィンはヨメンの舞踏会に再び出席し、支配王の遺産と増大する灰の降下について彼と直接哲学的議論を交わす。',
				season: '晩秋',
				year: '1026 最終帝国',
			},
			'hoa-47': {
				title: '捕縛',
				description:
					'ヴィンはヨメンの軍勢に捕らえられ、資源教区に投獄される。金属を奪われ、手の届かない場所にアティウムが隠された独房に閉じ込められる。',
				season: '冬',
				year: '1026 最終帝国',
			},
			'hoa-51': {
				title: '獄中にて',
				description:
					'投獄され金属を断たれたヴィンは、滅びの影響と泉で解放した力の本質について熟考する。',
				season: '冬',
				year: '1026 最終帝国',
			},
			'hoa-54': {
				title: '貯蔵庫の発見',
				description:
					'ヴィンはファドレックスの貯蔵庫とその重要な内容物——食料、物資、そして支配王の真の備えについてのメッセージ——を発見する。',
				season: '晩冬',
				year: '1026 最終帝国',
			},
			'hoa-56': {
				title: 'ファドレックスからの脱出',
				description:
					'コロスがファドレックスを攻撃する中、ヴィンは都市を脱出し、エレンドと軍を守るため異審官たちを自分の方に引きつける。',
				season: '早春',
				year: '1027 最終帝国',
			},
			'hoa-59': {
				title: '追跡を導く',
				description:
					'ヴィンは異審官の一団に追われながらルサデルに向かって東へ飛び、意図的に滅びの手下をファドレックスとエレンドから遠ざける。',
				season: '春',
				year: '1027 最終帝国',
			},
			'hoa-72': {
				title: 'ルサデルへの帰還',
				description:
					'ヴィンは荒廃したルサデルに到着し、合金術の圧倒的な力を発揮してクレディク・ショウを破壊し、支配王の宮殿を崩壊させる。',
				season: '夏',
				year: '1027 最終帝国',
			},
			'hoa-79': {
				title: '昇華',
				description:
					'ヴィンは霧そのもの——保存の体——を取り込み、滅びと直接戦うために神の力の器として昇華する。',
				season: '秋',
				year: '1027 最終帝国',
			},
			'hoa-81': {
				title: '最後の犠牲',
				description:
					'ヴィンは滅びを破壊するために自らを犠牲にし、保存の力と自らの生命力を合わせて破壊の神を消滅させる。',
				season: '秋',
				year: '1027 最終帝国',
			},
			'hoa-83': {
				title: '再生の野',
				description:
					'ヴィンの遺体は花と緑の草の生い茂る野で発見される——サゼドが再創造した世界の最初の兆し。彼女はエレンドの傍らで安らかに横たわっている。',
				season: '秋',
				year: '1027 最終帝国',
			},
		},
		kelsier: {
			'tfe-0': {
				title: '生き残りの帰還',
				description:
					'ケルシャーは南管轄区のトレスティング卿の農園に現れ、残酷な貴族を殺す——穴蔵からの脱出以来、貴族への最初の一撃。',
				season: '春',
				year: '1021 最終帝国',
			},
			'tfe-1': {
				title: '隠れた観察者',
				description:
					'ケルシャーは影からカモンの一味の活動を観察し、ヴィンの無意識の合金術の使用に気づく——霧の落とし子の力を持つ路地裏の浮浪児。',
				season: '春',
				year: '1021 最終帝国',
			},
			'tfe-3': {
				title: 'ヴィンの勧誘',
				description:
					'ケルシャーはカモンの虐待からヴィンを救い出し、自分の一味に加わるよう誘い、霧の落とし子としての彼女の能力の真実を明かす。',
				season: '春',
				year: '1021 最終帝国',
			},
			'tfe-5': {
				title: 'アティウム強奪',
				description:
					'ケルシャーはヴェンチャー城館の金庫に侵入してアティウムを盗み、貴族の防衛を試しながら反乱の資金を調達する。',
				season: '春',
				year: '1021 最終帝国',
			},
			'tfe-6': {
				title: '一味の結集',
				description:
					'クラブスの木工店で、ケルシャーは仲間全員——ハム、ブリーズ、ドックソン、クラブス、そしてヴィン——を集め、支配王を倒す計画を明かす。',
				season: '春',
				year: '1021 最終帝国',
			},
			'tfe-7': {
				title: '弟子への教え',
				description:
					'ケルシャーはヴィンを鋼鉄門近くの城壁に連れ出して合金術の訓練を行い、尖塔の間を跳びながら金属の押し引きを教える。',
				season: '晩春',
				year: '1021 最終帝国',
			},
			'tfe-8': {
				title: 'ルヌーの偽装',
				description:
					'ケルシャーはヴィンをフェリーズのルヌー卿の邸宅に護送し、貴族社会への潜入のためヴァレット嬢としての偽装身分を確立する。',
				season: '夏',
				year: '1021 最終帝国',
			},
			'tfe-10': {
				title: '革命の計画',
				description:
					'ルサデルに戻ったケルシャーはクラブスの店で仲間と合流し、反乱の進捗を確認する。ヴィンを夜の街に連れ出し、アロマンシーの訓練を続ける。',
				season: '夏',
				year: '1021 最終帝国',
			},
			'tfe-10.2': {
				title: '反乱の拡大',
				description:
					'ケルシャーはルサデルのスラムで倉庫集会を主導し、ハッシンの生き残りの伝説を通じてスカーの反乱を築き上げる。',
				season: '夏',
				year: '1021 最終帝国',
			},
			'tfe-11': {
				title: 'カモンのアジトの虐殺',
				description:
					'ケルシャーとクルーは、財務局の詐欺の報復として聖務省がカモンの旧アジトの全員を虐殺したことを発見し、支配者への決意を固める。',
				season: '夏',
				year: '1021 最終帝国',
			},
			'tfe-14': {
				title: '宮殿の偵察',
				description:
					'ケルシャーとヴィンは夜間にクレディク・ショウを偵察し、宮殿の防御と異審官の対応能力を調査する。',
				season: '夏',
				year: '1021 最終帝国',
			},
			'tfe-18': {
				title: '家門戦争の工作',
				description:
					'ケルシャーは貴族の家門間の攻撃を画策し、暗殺と証拠の捏造で貴族を弱体化させる家門戦争を煽る。',
				season: '晩夏',
				year: '1021 最終帝国',
			},
			'tfe-21': {
				title: '反乱軍',
				description:
					'ケルシャーはアルグォア洞窟に向かい、山中に隠れて成長する反乱軍を視察する。武器を持ったことのない兵士たちの訓練だ。',
				season: '秋',
				year: '1021 最終帝国',
			},
			'tfe-25': {
				title: 'ホルステップの惨劇',
				description:
					'駐屯軍が反乱軍を発見し虐殺した時、ケルシャーは白鑞走りでホルステップに駆けつける。壊滅的な光景の中、南へ逃れなければならない。',
				season: '晩秋',
				year: '1021 最終帝国',
			},
			'tfe-26': {
				title: '再起',
				description:
					'クラブスの店に戻り、ケルシャーはホルステップの惨劇から立て直す。希望が失われたように見えても革命を諦めることを拒む。',
				season: '冬',
				year: '1021 最終帝国',
			},
			'tfe-32': {
				title: '穴蔵の破壊',
				description:
					'ケルシャーはハッシンの穴蔵——最大の苦しみの場——に戻り、アティウムの結晶を破壊して支配王の最も貴重な資源を断つ。',
				season: '冬',
				year: '1022 最終帝国',
			},
			'tfe-34': {
				title: '生き残りの最後の抵抗',
				description:
					'ケルシャーは噴水広場で支配王に立ち向かい、勝ち目のない戦いを挑む。微笑みながら死に、その殉教が革命に火をつける。',
				season: '早春',
				year: '1022 最終帝国',
			},
			'tfe-35': {
				title: '死を超えて',
				description:
					'彼の骨を纏ったカンドラのオアセールを通じて、ケルシャーの最後の計画が展開される——彼の死こそがルサデル全土に革命の炎を燃え上がらせた火花だった。',
				season: '早春',
				year: '1022 最終帝国',
			},
			'woa-1': {
				title: 'ヴェールの向こう側',
				description:
					'死後、認知界に囚われたケルシャーは昇華の泉の近くに認知の影として存在し、エレンドの統治下で変貌するルサデルを見守る。',
				season: '秋',
				year: '1023 最終帝国',
			},
			'woa-59': {
				title: '解放の目撃',
				description:
					'ケルシャーは認知界から無力に見守る——ヴィンが昇華の泉で力を手にし、それを解放して滅びを牢獄から解き放つのを。',
				season: '冬',
				year: '1024 最終帝国',
			},
			'hoa-1': {
				title: '生き残りは耐え続ける',
				description:
					'認知界で、ケルシャーは衰えゆく保存の力と共に働き、物質界が滅びの増大する影響に抵抗するあらゆる手段を探す。',
				season: '春',
				year: '1026 最終帝国',
			},
			'hoa-50': {
				title: '保存を担う',
				description:
					'保存の意識が薄れゆく中、ケルシャーは破片の力を引き受ける——認知界から不完全ながらそれを保持し、最後の瞬間のために時間を稼ぐ。',
				season: '春',
				year: '1027 最終帝国',
			},
			'hoa-81': {
				title: '松明を渡す',
				description:
					'ヴィンが滅びを破壊するためにケルシャーから保存の力を引き継ぐ。生き残りは破片を手放し、役目を果たす——しかし彼方へ去ることを拒む。',
				season: '秋',
				year: '1027 最終帝国',
			},
			'hoa-83': {
				title: '生き残りは生き続ける',
				description:
					'調和が世界を再創造する中でさえ、ケルシャーは認知界に存在し続ける——死すらも自分を止めさせなかった生き残り。',
				season: '秋',
				year: '1027 最終帝国',
			},
		},
		sazed: {
			'tfe-9': {
				title: 'テリスの執事',
				description:
					'サゼドはフェリーズのルヌー卿の邸宅にヴィンの家庭教師として到着し、古代の宗教をひそかに保存しながら貴族の作法を教える。',
				season: '夏',
				year: '1021 最終帝国',
			},
			'tfe-10.2': {
				title: '倉庫での集会',
				description:
					'サゼドはケルシャーとヴィンと共に倉庫地区の秘密集会に参加し、生き残りが集まったスカーの労働者たちに革命を説くのを見守る。',
				season: '夏',
				year: '1021 最終帝国',
			},
			'tfe-13': {
				title: '舞踏会の守護者',
				description:
					'サゼドは使用人としてヴィンの初めての舞踏会に同行し、彼女が貴族社会に潜入する間、使用人の控え室から見守る。',
				season: '夏',
				year: '1021 最終帝国',
			},
			'tfe-22': {
				title: '学者の仕事',
				description:
					'サゼドはルヌー邸で舞踏会の合間にヴィンを教え、宗教の膨大な知識を共有しながら最終帝国のパターンを研究する。',
				season: '秋',
				year: '1021 最終帝国',
			},
			'tfe-34': {
				title: '革命の証人',
				description:
					'サゼドはルサデルで革命を目撃し、スカーが蜂起しケルシャーが噴水広場で倒れるのを見る。',
				season: '早春',
				year: '1022 最終帝国',
			},
			'tfe-38': {
				title: '帝国の崩壊',
				description:
					'サゼドはクレディク・ショウへの突撃で一味を助け、蓄金術を駆使して支配王の衛兵と戦う。',
				season: '早春',
				year: '1022 最終帝国',
			},
			'tfe-39': {
				title: '新たな始まり',
				description:
					'事態の収拾後、サゼドはクレディク・ショウの記録を研究し始め、深淵と時代の英雄の予言についての答えを探す。',
				season: '春',
				year: '1022 最終帝国',
			},
			'woa-4': {
				title: '放浪の教師',
				description:
					'サゼドは東管轄区を旅し、農村を訪れて新たに解放されたスカーに弾圧されていた宗教と知識を伝える。',
				season: '秋',
				year: '1023 最終帝国',
			},
			'woa-7': {
				title: 'セランの修道院',
				description:
					'マーシュに導かれ、サゼドはセランの修道院——恐ろしい異審官の拠点——を発見し、クウァーンの鋼の銘板を見つける。',
				season: '晩秋',
				year: '1023 最終帝国',
			},
			'woa-12': {
				title: '銘板の解読',
				description:
					'サゼドは修道院でクウァーンの銘板を研究し、時代の英雄の予言が改竄されたというテリスの守護者の必死の警告を解読する。',
				season: '晩秋',
				year: '1023 最終帝国',
			},
			'woa-15': {
				title: '霧の殺人',
				description:
					'ウルベーネを通って西へ戻る途中、サゼドは霧の中で人々が不可解な死を遂げた村々に遭遇する——霧の病の最初の兆候。',
				season: '冬',
				year: '1023 最終帝国',
			},
			'woa-22': {
				title: 'ルサデルへの帰還',
				description:
					'サゼドは改竄された予言、霧の殺人、そして鋼の銘板の真の意味についての重大な知らせを携えてルサデルに到着する。',
				season: '冬',
				year: '1023 最終帝国',
			},
			'woa-40': {
				title: '予言の議論',
				description:
					'サゼドはヴェンチャー城館でティンドウィルと共に、時代の英雄の予言の原文と改竄版を比較しながら、互いに惹かれ合う。',
				season: '晩冬',
				year: '1024 最終帝国',
			},
			'woa-52': {
				title: '門の防衛',
				description:
					'コロスがルサデルの城壁を破った時、サゼドは蓄金術を使って単身で錫門を守り、蓄えた属性を使い果たす決死の抵抗を行う。',
				season: '晩冬',
				year: '1024 最終帝国',
			},
			'woa-57': {
				title: 'マーシュとの戦い',
				description:
					'サゼドはクレディク・ショウの回廊で滅びに操られたマーシュと戦い、ヴィンが泉に降りる間、異審官の猛攻を辛うじて生き延びる。',
				season: '冬',
				year: '1024 最終帝国',
			},
			'woa-59': {
				title: 'ティンドウィルの死',
				description:
					'サゼドはティンドウィルがコロスの攻撃で死んだことを知る。打ちひしがれ、自らが持つすべての宗教に疑問を抱き、信仰の危機に陥る。',
				season: '冬',
				year: '1024 最終帝国',
			},
			'hoa-4': {
				title: '南方外交',
				description:
					'サゼドはブリーズと共にレカル市を訪れ条約交渉を行い、外交によって南の王をエレンドの連合に引き入れる。',
				season: '夏',
				year: '1026 最終帝国',
			},
			'hoa-8': {
				title: '北への出発',
				description:
					'サゼドはアルトーを外交で確保する任務を受け、エレンドが軍を率いて西へ向かう一方、北門を通って出発する。',
				season: '夏',
				year: '1026 最終帝国',
			},
			'hoa-14': {
				title: 'アルトー到着',
				description:
					'サゼドはアルトーに到着するが、市民クウェリオンの抑圧的な支配下にあることを知り、廃墟となったヴェンチャー邸に外交拠点を設ける。',
				season: '秋',
				year: '1026 最終帝国',
			},
			'hoa-25': {
				title: '信頼の構築',
				description:
					'サゼドはアルトーの住民との信頼を築きながら、都市の歴史を研究し、教省の建物の下にある貯蔵洞窟を探す。',
				season: '初冬',
				year: '1026 最終帝国',
			},
			'hoa-40': {
				title: '教省の調査',
				description:
					'サゼドは教省の教区を調査し、クウェリオンの偏執的な政権と渡り合いながらその下の貯蔵洞窟へのアクセスを目指す。',
				season: '冬',
				year: '1026 最終帝国',
			},
			'hoa-50': {
				title: '洞窟の発見',
				description:
					'サゼドは干上がった運河系統を水没させる仕掛けを発見する——支配王は貯蔵洞窟に水を隠すために運河の水を抜いていたのだ。',
				season: '早春',
				year: '1027 最終帝国',
			},
			'hoa-58': {
				title: 'アルトーの救済',
				description:
					'クウェリオンへの反乱で都市中に火災が広がる中、サゼドは蓄えられた水を放出して運河に流し込み、アルトーを壊滅から救う。',
				season: '春',
				year: '1027 最終帝国',
			},
			'hoa-64': {
				title: '再建',
				description:
					'クウェリオンが倒され火災が鎮火した後、サゼドは支配王のメッセージを研究しながら、貯蔵庫の物資を配布してアルトーの再建を助ける。',
				season: '夏',
				year: '1027 最終帝国',
			},
			'hoa-69': {
				title: 'ハッシンへの旅',
				description:
					'サゼドはハッシンの穴蔵に向かう。事態の収束に引き寄せられて。宗教とクウァーンの銘板の研究が恐ろしい啓示へと導いた。',
				season: '秋',
				year: '1027 最終帝国',
			},
			'hoa-71': {
				title: '最後の集結',
				description:
					'サゼドは世界が死にゆく中ルサデルに戻る。灰が黒い幕のように降り注ぐ。彼はすべての宗教とすべての予言の知識を携えている。',
				season: '秋',
				year: '1027 最終帝国',
			},
			'hoa-82': {
				title: '時代の英雄',
				description:
					'ヴィンと滅びが共に滅んだ後、サゼドは自分が時代の英雄であると悟る。昇華の泉で保存と滅びの両方の力を引き受ける。',
				season: '秋',
				year: '1027 最終帝国',
			},
			'hoa-83': {
				title: '調和',
				description:
					'サゼドは調和として昇華し、滅びと保存を統合する。惑星を動かし、緑を復元し、千年の損傷を癒して世界を再創造する。',
				season: '秋',
				year: '1027 最終帝国',
			},
		},
		elend: {
			'tfe-12': {
				title: '読書する貴族',
				description:
					'エレンド・ヴェンチャーは自身の城館での舞踏会で紹介されるが、他の貴族が踊り策謀を巡らす中、一人で読書している。',
				season: '夏',
				year: '1021 最終帝国',
			},
			'tfe-13': {
				title: 'ヴァレット嬢との出会い',
				description:
					'エレンドは舞踏会で謎めいたヴァレット・ルヌー嬢と出会い、彼女の型破りな振る舞いと鋭い機知に惹かれる。',
				season: '夏',
				year: '1021 最終帝国',
			},
			'tfe-19': {
				title: '求愛',
				description:
					'エレンドのヴァレット嬢への想いは舞踏会での会話を重ねるごとに深まり、哲学や貴族の欠陥について語り合う。',
				season: '晩夏',
				year: '1021 最終帝国',
			},
			'tfe-24': {
				title: '貴族の陰謀家',
				description:
					'エレンドはヴェンチャー城館の私室図書館で、支配王の圧政に反対する穏健派貴族をひそかに組織する。',
				season: '秋',
				year: '1021 最終帝国',
			},
			'tfe-34': {
				title: '革命',
				description:
					'エレンドは噴水広場でスカーの蜂起の混乱を目撃し、暴力から貴族と平民の両方を守るために前に出る。',
				season: '早春',
				year: '1022 最終帝国',
			},
			'tfe-38': {
				title: '予期せぬ指導者',
				description:
					'支配王の死後、エレンドは帝国が崩壊する中で統一の声として浮上し、秩序を呼びかける。',
				season: '早春',
				year: '1022 最終帝国',
			},
			'tfe-39': {
				title: '新たな王',
				description:
					'エレンド・ヴェンチャーは中央管轄区の王と宣言され、暴政の廃墟から民主的な政府を建設するという困難な仕事に着手する。',
				season: '春',
				year: '1022 最終帝国',
			},
			'woa-1': {
				title: 'ルサデルの王',
				description:
					'エレンドはヴェンチャー城館で立憲政府の樹立に奔走し、軍勢が外に集結する中、法律を起草し議会を構築する。',
				season: '秋',
				year: '1023 最終帝国',
			},
			'woa-5': {
				title: '議会',
				description:
					'エレンドは自ら創設した議会で演説し、民主主義が包囲を生き延びられないかもしれないと助言者から警告される中でも民主主義の原則を訴える。',
				season: '秋',
				year: '1023 最終帝国',
			},
			'woa-12': {
				title: '包囲の視察',
				description:
					'エレンドは城壁から包囲線を視察し、北の父ストラフの軍勢と西から迫るケットの軍勢を見つめる。',
				season: '初冬',
				year: '1023 最終帝国',
			},
			'woa-22': {
				title: '民主主義のための戦い',
				description:
					'エレンドは議会で高まる反対に直面する。包囲への恐怖が、哲人王よりも強い指導者を求める声を強める。',
				season: '冬',
				year: '1023 最終帝国',
			},
			'woa-26': {
				title: '父との交渉',
				description:
					'エレンドはヴィンを護衛に伴いストラフ・ヴェンチャーの陣営へ交渉に赴く。会談は理想主義の息子に対するストラフの軽蔑を明らかにする。',
				season: '冬',
				year: '1023 最終帝国',
			},
			'woa-28': {
				title: '外交の策謀',
				description:
					'ヴェンチャー城館に戻り、エレンドは三つの軍勢——ストラフ、ケット、そして迫り来るコロスの群れ——を互いに戦わせようと画策する。',
				season: '冬',
				year: '1024 最終帝国',
			},
			'woa-35': {
				title: '解任',
				description:
					'議会はエレンドをペンロッド卿に交代させる投票を行い、エレンド自身の民主的憲法の条項を利用する。彼の理想主義が仇となる。',
				season: '冬',
				year: '1024 最終帝国',
			},
			'woa-42': {
				title: 'コロスへの使命',
				description:
					'エレンドは地下道からルサデルを出てジャステス・レカルとそのコロス軍との交渉に向かう——同盟を確保するための必死の賭け。',
				season: '晩冬',
				year: '1024 最終帝国',
			},
			'woa-46': {
				title: 'コロスからの帰還',
				description:
					'エレンドは交渉に失敗してコロスの陣営から戻る——ジャステスは獣たちの制御を失っていた。コロスはいずれにせよ攻撃するだろう。',
				season: '晩冬',
				year: '1024 最終帝国',
			},
			'woa-49': {
				title: 'ルサデルからの追放',
				description:
					'エレンドはヴィンと共に錫門からルサデルを出発し、ペンロッドの政府から追放され、テリスの守護者会議の助けを求めて北へ向かう。',
				season: '晩冬',
				year: '1024 最終帝国',
			},
			'woa-50': {
				title: '北への旅',
				description:
					'エレンドの一行はテリスへ向かうが、不安が募り再考を迫られる。昇華の泉は彼らが思っていた場所にはないかもしれない。',
				season: '晩冬',
				year: '1024 最終帝国',
			},
			'woa-52': {
				title: '戦闘',
				description:
					'エレンドはコロスの攻撃を受けるルサデルに戻り、城壁が破られ都市が陥落しかける混乱の中を戦い抜く。',
				season: '晩冬',
				year: '1024 最終帝国',
			},
			'woa-58': {
				title: '泉へ',
				description:
					'エレンドはヴィンと共にクレディク・ショウの地下に降り、上でマーシュとサゼドが戦う間、昇華の泉を求める。',
				season: '冬',
				year: '1024 最終帝国',
			},
			'woa-59': {
				title: '霧の落とし子の皇帝',
				description:
					'泉で刺され瀕死の状態のエレンドは、ヴィンがレラシウムの粒を口に押し込んだことで救われ、霧の落とし子に変貌する。',
				season: '冬',
				year: '1024 最終帝国',
			},
			'hoa-1': {
				title: '戦う皇帝',
				description:
					'エレンドは軍を率いてヴェティタンへ向かう。今や霧の落とし子の皇帝として、支配王の隠された貯蔵庫を確保するための軍事作戦を指揮する。',
				season: '春',
				year: '1026 最終帝国',
			},
			'hoa-3': {
				title: '貯蔵庫の確保',
				description:
					'エレンドはヴェティタンの貯蔵洞窟を確保し、食料とラシェクが封じた危険について警告する金属板のメッセージを発見する。',
				season: '春',
				year: '1026 最終帝国',
			},
			'hoa-8': {
				title: '戦略的分割',
				description:
					'ルサデルで、エレンドは軍を分割する。サゼドを外交でアルトー確保に送り、自らは必要ならば武力でファドレックスを取るために西へ進軍する。',
				season: '夏',
				year: '1026 最終帝国',
			},
			'hoa-10': {
				title: '西への進軍',
				description:
					'エレンドは軍を率いて西のファドレックス市へ進軍する。灰は日ごとに重く降り注ぎ、行軍の間に霧の落とし子としての訓練を行う。',
				season: '夏',
				year: '1026 最終帝国',
			},
			'hoa-21': {
				title: 'ファドレックスの包囲',
				description:
					'エレンドの軍はファドレックスに到着し、灰に覆われた平原に包囲線を敷く。ヨメンは交渉も降伏も拒否する。',
				season: '秋',
				year: '1026 最終帝国',
			},
			'hoa-28': {
				title: '不本意な包囲者',
				description:
					'エレンドは征服者としての役割に苦悩し、将軍たちが攻撃を主張する中でも外交を試みる。灰の降下は日に日に悪化する。',
				season: '秋',
				year: '1026 最終帝国',
			},
			'hoa-47': {
				title: 'ヴィンの喪失',
				description:
					'ヴィンがファドレックス内で捕らえられた時、エレンドは妻を救出することと数万の兵士を守ることの間で不可能な選択に直面する。',
				season: '冬',
				year: '1026 最終帝国',
			},
			'hoa-54': {
				title: 'ファドレックス入城',
				description:
					'コロスの攻撃がヨメンとの一時的な同盟を強いる。エレンドは都市に入り貯蔵庫にアクセスし、支配王の最後のメッセージを見つける。',
				season: '晩冬',
				year: '1026 最終帝国',
			},
			'hoa-58': {
				title: 'ハッシンへの出発',
				description:
					'貯蔵庫を確保しヴィンが東へ去った後、エレンドは最後の真実を知る——アティウムはハッシンの穴蔵にあるはずだ。軍を率いて南へ進軍する。',
				season: '早春',
				year: '1027 最終帝国',
			},
			'hoa-61': {
				title: '穴蔵への進軍',
				description:
					'エレンドは疲弊した軍を率いてハッシンの穴蔵へ向かう。その地下にはカンドラの故郷がある。マーシュの異審官軍がすぐ後ろに迫る。',
				season: '春',
				year: '1027 最終帝国',
			},
			'hoa-69': {
				title: 'ハッシンの戦い',
				description:
					'エレンドは穴蔵での異審官とコロスとの激戦で最後のアティウムを燃やし尽くす。金属が尽きれば死を意味すると知りながら。',
				season: '夏',
				year: '1027 最終帝国',
			},
			'hoa-79': {
				title: '皇帝の死',
				description:
					'エレンドはハッシンの戦いの最後の瞬間にマーシュに殺される。アティウムを使い果たした彼は、滅びが求めた金属をすべて燃やし尽くして死ぬ。',
				season: '秋',
				year: '1027 最終帝国',
			},
			'hoa-83': {
				title: '死における再会',
				description:
					'エレンドの遺体はヴィンの隣の花畑で発見される——サゼドが再創造した世界への最初の贈り物——すべての戦いの後、安らかに。',
				season: '秋',
				year: '1027 最終帝国',
			},
		},
		marsh: {
			'tfe-7': {
				title: '不承不承の兄',
				description:
					'マーシュがクラブスの店に現れる。ケルシャーの兄にして独自の反乱指導者。渋々ながら一味の計画に加わる。',
				season: '晩春',
				year: '1021 最終帝国',
			},
			'tfe-10.2': {
				title: '倉庫での集会',
				description:
					'マーシュは仲間とともに倉庫地区の秘密集会に出席し、兄ケルシエが集まったスカの労働者たちに革命を説く姿を見守る。',
				season: '夏',
				year: '1021 最終帝国',
			},
			'tfe-13': {
				title: 'ティリアン山での会合',
				description:
					'マーシュはルサデルから数キロ離れたティリアン山でケルシャーと会い、教省の耳から遠く離れた場所で反乱計画を話し合い、その後危険な潜入を開始する。',
				season: '夏',
				year: '1021 最終帝国',
			},
			'tfe-20': {
				title: '深まる潜入',
				description:
					'マーシュはクレディク・ショウで教省の階層の奥深くに入り込み、異審官に発見される危険を冒しながら血金術の暗い秘密を学ぶ。',
				season: '晩夏',
				year: '1021 最終帝国',
			},
			'tfe-30': {
				title: '消失',
				description: 'マーシュの通信が途絶え、審問教区の最深部に消える。一味は最悪の事態を恐れる。',
				season: '冬',
				year: '1021 最終帝国',
			},
			'tfe-38': {
				title: '異審官',
				description:
					'クレディク・ショウへの最終攻撃の最中にマーシュが姿を現す。生きていたが変貌していた——両目を鉄の杭が貫いている。変貌にもかかわらず仲間のために戦う。',
				season: '早春',
				year: '1022 最終帝国',
			},
			'woa-4': {
				title: '東方の放浪者',
				description:
					'マーシュは孤独な異審官として東管轄区をさまよい、自らの変貌を理解しようとしながらサゼドの遠方の村の調査を助ける。',
				season: '秋',
				year: '1023 最終帝国',
			},
			'woa-7': {
				title: '修道院への案内人',
				description:
					'マーシュはサゼドをセランの修道院——辺境にある異審官の拠点——に導き、サゼドが求める記録を探させる。',
				season: '晩秋',
				year: '1023 最終帝国',
			},
			'woa-12': {
				title: '離脱',
				description:
					'マーシュは突然修道院でサゼドを見捨て荒野に消える。ますます抗えなくなる力に駆り立てられて。滅びの影響が増大する。',
				season: '晩秋',
				year: '1023 最終帝国',
			},
			'woa-57': {
				title: '滅びの操り人形',
				description:
					'マーシュは滅びの完全な支配下でクレディク・ショウに現れ、ヴィンが地下の昇華の泉に降りる間、回廊でサゼドと戦う。',
				season: '冬',
				year: '1024 最終帝国',
			},
			'woa-59': {
				title: '泉の番人',
				description:
					'マーシュは滅びの操り人形として泉の入口を守り、誰もヴィンに近づかせまいと——あるいは正しい選択を助けまいと——戦う。',
				season: '冬',
				year: '1024 最終帝国',
			},
			'hoa-0': {
				title: '異審官の創造',
				description:
					'滅びの支配下で、マーシュはタッシングドウェンで暗黒の血金術の儀式を行い、捕らえた蓄金術師と合金術師から新たな異審官を生み出す。',
				season: '春',
				year: '1026 最終帝国',
			},
			'hoa-6': {
				title: 'コロスの指揮',
				description:
					'マーシュは滅びの代理として増大するコロスの軍勢を指揮し、東管轄区を移動しながら最終決戦のための戦力を集める。',
				season: '夏',
				year: '1026 最終帝国',
			},
			'hoa-22': {
				title: 'ティリアン付近',
				description:
					'マーシュはティリアン山付近で活動し、捕虜から血金術の杭を作り、灰の山の影で滅びの異審官軍を構築する。',
				season: '冬',
				year: '1026 最終帝国',
			},
			'hoa-38': {
				title: 'ペンロッドへの杭打ち',
				description:
					'マーシュがルサデルに潜入してペンロッド王に血金術の杭を打ち込み、滅びに首都の統治への直接的な経路を与える。',
				season: '冬',
				year: '1026 最終帝国',
			},
			'hoa-45': {
				title: 'ファドレックスへの集結',
				description:
					'マーシュは異審官を率いてファドレックス市へ向かう。滅びが内部に隠されたアティウムの貯蔵庫を回収しようと包囲に集結する。',
				season: '冬',
				year: '1026 最終帝国',
			},
			'hoa-59': {
				title: 'ヴィンの追跡',
				description:
					'マーシュはヴィンがファドレックスからルサデルへ東方に逃走する中、異審官の一団を率いて追跡し、滅びの手下を貯蔵庫から引き離す。',
				season: '春',
				year: '1027 最終帝国',
			},
			'hoa-69': {
				title: 'ハッシンの戦い',
				description:
					'マーシュは滅びの軍勢を率いて穴蔵に到着する。回復した意志の一瞬に、ヴィンの耳飾りを引き剥がす——すべてを変える反抗の行為。',
				season: '秋',
				year: '1027 最終帝国',
			},
			'hoa-79': {
				title: 'エレンドを殺す',
				description:
					'滅びに駆り立てられ、マーシュはハッシンの戦いでエレンド皇帝を殺す。その行為は滅びの計画を遂行するが、マーシュの魂をさらに蝕む。',
				season: '秋',
				year: '1027 最終帝国',
			},
			'hoa-83': {
				title: 'ついに自由',
				description:
					'滅びの消滅と共に、マーシュはついに神の支配から解放される。再創造された世界に一人立つ——すべての終わりを生き延びた異審官。',
				season: '秋',
				year: '1027 最終帝国',
			},
		},
		spook: {
			'tfe-7': {
				title: '若き錫目',
				description:
					'スプーク、クラブスの若い甥は、木工店で一味の見張りと伝令として働き、濃い東部の路地裏言葉で話す。',
				season: '晩春',
				year: '1021 最終帝国',
			},
			'tfe-9': {
				title: '伝令の駆け足',
				description:
					'スプークはルサデルのクラブスの店とフェリーズのルヌー邸の間で伝言を運ぶ。錫で強化された感覚が彼を優れた偵察兵にする。',
				season: '夏',
				year: '1021 最終帝国',
			},
			'tfe-22': {
				title: '一味の支援',
				description:
					'スプークは家門戦争の間クラブスの店に留まり、屋根の上からの監視とスラムを駆け抜ける伝令走りで情報を提供する。',
				season: '秋',
				year: '1021 最終帝国',
			},
			'tfe-34': {
				title: '犠牲の目撃',
				description:
					'スプークは噴水広場の群衆の中からケルシャーの死を見届ける。この出来事が彼の残りの人生を形作ることになる。',
				season: '早春',
				year: '1022 最終帝国',
			},
			'tfe-38': {
				title: '革命',
				description:
					'スプークは最後の革命で一味と共に戦い、ルサデルの街路からスカーの蜂起の調整を助ける。',
				season: '早春',
				year: '1022 最終帝国',
			},
			'woa-6': {
				title: '成長する偵察兵',
				description:
					'スプークはエレンドの新政府の偵察兵として、包囲中に都市を巡回し包囲する軍勢を観察する。',
				season: '秋',
				year: '1023 最終帝国',
			},
			'woa-49': {
				title: '追放の一行',
				description:
					'スプークはヴィンとエレンドの追放の一行と共に錫門からルサデルを出発し、テリスの山々に向かう。',
				season: '晩冬',
				year: '1024 最終帝国',
			},
			'woa-52': {
				title: '戦いを生き延びて',
				description:
					'コロスの攻撃中にルサデルに戻った後、スプークはルサデルの戦いを生き延び、都市の防衛に貢献する。',
				season: '晩冬',
				year: '1024 最終帝国',
			},
			'hoa-1': {
				title: '遠征の兵士',
				description:
					'スプークはエレンドの軍でヴェティタンに従軍し、皇帝の軍が貯蔵庫を確保する中で次第に重要な役割を任されるようになる。',
				season: '春',
				year: '1026 最終帝国',
			},
			'hoa-14': {
				title: '潜入者',
				description:
					'スプークはサゼドの外交任務に先立ってアルトーに潜入し、ハロウズと呼ばれる干上がった運河の迷路を通って都市に侵入する。',
				season: '秋',
				year: '1026 最終帝国',
			},
			'hoa-17': {
				title: '燃える家',
				description:
					'スプークはハロウズ内の隠れた建物に拠点を構え、市民の抑圧的な政権を監視し、地元の抵抗勢力と接触する。',
				season: '秋',
				year: '1026 最終帝国',
			},
			'hoa-23': {
				title: '市場の観察',
				description:
					'スプークは市場広場で市民クウェリオンの演説を観察し、彼のパターンと血金術の杭で強制的に従わせている合金術師たちを調べる。',
				season: '初冬',
				year: '1026 最終帝国',
			},
			'hoa-30': {
				title: '市民への接近',
				description:
					'スプークは市民の側近に近づき、クウェリオンが合金術師を支配するために使う杭を調査し、腐敗の証拠を集める。',
				season: '冬',
				year: '1026 最終帝国',
			},
			'hoa-38': {
				title: '革命の計画',
				description:
					'スプークは隠れ家からサゼドや地元の反乱勢力と連携し、クウェリオン政権の打倒と貯蔵庫の確保を計画する。',
				season: '早春',
				year: '1027 最終帝国',
			},
			'hoa-45': {
				title: 'ケルシャーの声',
				description:
					'スプークはケルシャーの声だと信じるものが聞こえ始め、市民に対するますます危険な行動へと駆り立てられる。',
				season: '春',
				year: '1027 最終帝国',
			},
			'hoa-50': {
				title: '燃える建物',
				description:
					'スプークは建物の火災で杭を打ち込まれ、合金術の能力が強化されるが、同時にその杭を通じて滅びの影響を受けやすくなる。',
				season: '春',
				year: '1027 最終帝国',
			},
			'hoa-55': {
				title: '啓示',
				description:
					'スプークは自分が聞いていた声がケルシャーではなく滅びだと気づく——血金術の杭を通じて自分を操っていたのだ。苦痛の中で杭を引き抜く。',
				season: '晩春',
				year: '1027 最終帝国',
			},
			'hoa-58': {
				title: 'アルトーの英雄',
				description:
					'スプークはクウェリオンへの反乱を率い、その腐敗を暴く。火災が都市を飲み込む中、サゼドが運河に水を流し込み、アルトーを壊滅から救う。',
				season: '春',
				year: '1027 最終帝国',
			},
			'hoa-64': {
				title: '回復',
				description:
					'ひどい火傷を負いながらも生き延び、スプークはアルトーが新たな指導の下で安定し、貯蔵庫の物資が配布される中で回復する。',
				season: '夏',
				year: '1027 最終帝国',
			},
			'hoa-69': {
				title: '穴蔵へ',
				description:
					'スプークはアルトーの軍勢と共にハッシンの穴蔵へ向かい、最終決戦に集結する軍に加わる。',
				season: '秋',
				year: '1027 最終帝国',
			},
			'hoa-83': {
				title: '新しい世界',
				description:
					'スプークはサゼドが再創造した世界に出る——青い空の下、花と緑の草の野。生存者たちに向けたサゼドの最後の言葉を携えて。',
				season: '秋',
				year: '1027 最終帝国',
			},
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
