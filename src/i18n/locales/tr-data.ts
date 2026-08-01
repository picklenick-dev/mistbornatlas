/**
 * Turkish data translations.
 * Publisher: İthaki Yayınları.
 */
import type { DataTranslations } from '../types';
import { enData } from './en-data';

export const trData: DataTranslations = {
	...enData,

	// Override book titles with official Turkish translations
	books: {
		tfe: { title: 'Son İmparatorluk', year: '1021-1022 Sİ' },
		woa: { title: 'Miraç Kuyusu', year: '1023-1024 Sİ' },
		hoa: { title: 'Çağların Kahramanı', year: '1025-1027 Sİ' },
	},

	// Turkish character translations
	characters: {
		...enData.characters,
		vin: {
			name: 'Vin',
			title: 'Sissoylu',
			description:
				'Luthadel sokaklarından yükselerek Scadrial tarihinin en önemli figürlerinden biri olan güçlü bir Sissoylu.',
			titleProgression: {
				'tfe-1': 'Sokak Serserisi',
				'tfe-9': 'Sissoylu Çırağı',
				'tfe-12': 'Lady Valette Renoux',
				'tfe-17': 'Sissoylu',
				'tfe-38': 'Lord Hükümdarı Öldüren',
				'woa-1': 'Hathsin Firarisinin Varisi',
				'woa-47': "Luthadel'in Koruyucusu",
				'hoa-1': 'İmparatoriçe',
				'hoa-79': "Muhafaza'nın Kabı",
			},
		},
		kelsier: {
			name: 'Kelsier',
			title: 'Hathsin Firarisi',
			description: "Hathsin Çukurları'ndan kaçan Luthadel isyanının karizmatik lideri.",
			titleProgression: {
				'tfe-0': 'Gizemli Skaa',
				'tfe-1': 'Hathsin Firarisi',
				'tfe-11': 'Ekip Lideri',
				'tfe-21': 'Çukurları Yok Eden',
				'tfe-34': 'İsyanın Şehidi',
			},
			secretHistoryTitles: {
				'woa-1': 'Bilişsel Gölge',
				'hoa-1': "Muhafaza'nın Şampiyonu",
			},
		},
		sazed: {
			name: 'Sazed',
			title: 'Terris Sırdaşı',
			description:
				'Tüm dinlerin bilgisini koruyan ve dünyanın kaderinde çok önemli bir rol oynayan bir Terris Sırdaşı.',
			titleProgression: {
				'tfe-9': 'Terrisli Kâhya',
				'tfe-22': 'Dinlerin Koruyucusu',
				'woa-1': 'Bilgin ve Sırdaş',
				'woa-12': 'Gerçeğin Arayıcısı',
				'woa-52': "Luthadel'in Savunucusu",
				'hoa-1': 'Yeni İmparatorluk Elçisi',
				'hoa-50': 'Kriz İçindeki Bilgin',
				'hoa-82': 'Çağların Kahramanı',
			},
		},
		elend: {
			name: 'Elend Venture',
			title: 'İmparator',
			description:
				"Kitap kurdu bir soyludan güçlü bir lidere dönüşen Venture Hanesi'nin idealist oğlu.",
			titleProgression: {
				'tfe-12': 'Soylu Filozof',
				'tfe-24': 'Muhalif Soylu',
				'tfe-38': 'Beklenmedik Lider',
				'woa-1': 'Merkez Salahiyeti Kralı',
				'woa-35': 'Tahttan İndirilen Kral',
				'woa-58': 'Sissoylu İmparator',
				'hoa-1': 'Yeni İmparatorluk İmparatoru',
				'hoa-54': 'Savaşçı İmparator',
			},
		},
		marsh: {
			name: 'Marsh',
			title: 'Sorgucu',
			description: "İsyan için çok şey feda eden ve ağır bir yük taşıyan Kelsier'ın kardeşi.",
			titleProgression: {
				'tfe-7': 'İsyancı Sızma Ajanı',
				'tfe-27': 'Nezaret Sızma Ajanı',
				'tfe-38': 'Çelik Sorgucu',
				'woa-4': 'Gönülsüz Sorgucu',
				'woa-57': "Harap'ın Piyonu",
				'hoa-0': "Harap'ın Eli",
				'hoa-79': 'Demirgöz',
			},
		},
		spook: {
			name: 'Dikiz',
			title: 'Kalaygöz',
			description:
				'Çekingen bir ekip üyesinden kendi başına bir kahramana dönüşen genç bir Siskan.',
			titleProgression: {
				'tfe-7': 'Genç Kalaygöz',
				'woa-1': 'İzci',
				'hoa-14': 'Sızmacı',
				'hoa-38': 'Kalay Düşkünü',
				'hoa-58': 'Urteau Kahramanı',
				'hoa-83': 'Alevlerden Sağ Çıkan',
			},
		},
	},

	// Turkish marker labels
	markerLabels: {
		capital: 'Salahiyet Merkezi',
		city: 'Şehir',
		ashmount: 'Kül Dağı',
		landmark: 'Simge',
		stronghold: 'Hisar',
		hideout: 'Güvenli Sığınak',
		mine: 'Cezaevi Madeni',
		mystical: 'Kutsal Alan',
		town: 'Yerleşim',
		village: 'Skaa Köyü',
		river: 'Su Yolu',
		industrial: 'İkmal Noktası',
		region: 'Bölge',
		keep: 'Asil Kale',
		palace: 'Saray',
		plantation: 'Çiftlik',
		district: 'Semt',
		estate: 'Asil Mülk',
	},

	cityMarkerLabels: {
		gate: 'Şehir Kapısı',
		keep: 'Asil Kale',
		palace: 'Saray',
		district: 'Semt',
		shop: 'Tüccar',
		safehouse: 'Ekip Güvenli Evi',
		landmark: 'Önemli Alan',
		canal: 'Kanal',
		ministry: 'Kanton',
		plaza: 'Meydan',
	},

	// Turkish location translations
	locations: {
		...enData.locations,
		luthadel: {
			name: 'Luthadel',
			description:
				"Son İmparatorluk'un başkenti ve Lord Hükümdar'ın bin yıllık iktidar merkezi. Coğrafi olarak Scadrial'in manyetik kuzey kutbunda konumlanmıştır — navigasyonu merkezileştirmek için kasıtlı bir manipülasyon. Taş duvara sahip olmasına izin verilen tek yerleşim yeri.",
		},
		'lake-luthadel': {
			name: 'Luthadel Gölü',
			description:
				"Luthadel'in hemen doğusunda bulunan büyük, kül lekeli bir tatlı su kütlesi. Başkent için birincil su deposu ve doğu kanal sistemlerinin bitiş noktası olarak hizmet eder.",
		},
		'pits-hathsin': {
			name: 'Hathsin Çukurları',
			description:
				'Atiyumun kristalleştiği, yerde sivri çatlaklar olarak ortaya çıkan bir Dikeygeçit. Harita, yerkabuğunun derinliklerine inen dar, jilet keskinliğinde dikey çatlaklarla tanımlanır. Mahkûmlar geodlar arayarak bu klostrofobik tünellerde sürünürdü. Kelsier, kristalleri yok edip Atiyum üretimini sona erdirmeden önce haritalanmamış çatlak ağının derinliklerindeki gizli bir odada On Birinci Metali (Malatiyumu) keşfetti.',
			safeDescription:
				"Luthadel'in kuzeydoğusunda, yerkabuğunun derinliklerine inen dar, jilet keskinliğinde dikey çatlaklarla tanımlanan acımasız bir hapishane madeni. Mahkûmlar, İmparatorluğun en değerli metali olan nadir atiyum geodlarını aramak için bu klostrofobik yarıklarda sürünür. Çok azı uzun süre hayatta kalır.",
		},
		fellise: {
			name: 'Fellise',
			description:
				"Luthadel'in batısında bulunan daha küçük, aristokrat bir dinlenme şehri. Renoux Hanesi burada bir kır mülkü bulunduruyordu ve Kelsier'ın ekibi için üs olarak kullanılıyordu. Luthadel'den biraz daha temiz havaya sahip olarak tarif edilir.",
		},
		holstep: {
			name: 'Holstep',
			description:
				"Luthadel'in batısında, Batı Salahiyeti'ne giden yol üzerinde bulunan bir garnizon kasabası. Ticaret ve askeri hareketler için bir kontrol noktası olarak hizmet eder.",
		},
		'ashmount-tyrian': {
			name: 'Tyrian',
			description:
				"Luthadel'e en yakın Kül Dağı, şehir surlarından görülebilir. Sürekli patlamaları Merkez Salahiyeti'ni en kalın kül katmanlarıyla kaplar ve sürekli temizlik ekipleri gerektirir.",
			safeDescription:
				"Luthadel'e en yakın Kül Dağı. Sürekli patlamaları Merkez Salahiyeti'ni en kalın kül katmanlarıyla kaplar.",
		},
		urteau: {
			name: 'Urteau',
			description:
				"Kuzey Salahiyeti'nin başkenti ve Venture Hanesi'nin ata yurdu. \"Sokakoluğu\"yla ünlüdür — Lord Hükümdar tarafından çukur yollar olarak hizmet etmek üzere kurutulan kanallar. Çöküş sırasında Yurttaş'ın (Quellion) kalesi.",
			safeDescription: "Kuzey Salahiyeti'nin başkenti ve Venture Hanesi'nin ata yurdu.",
		},
		'ashmount-kalling': {
			name: 'Kalling',
			description:
				"Kuzey Salahiyeti'nin birincil volkanik bacası. Kül Yağmuru Tyrian'ınkinden daha koyu ve daha kaba taneli. Artan aktivite, Harap'ın planının hızlanmasının sinyalini verir.",
		},
		'fadrex-city': {
			name: 'Fadrex Şehri',
			description:
				'Lord Hükümdar\'ın ölümünden sonra öne çıkan büyük bir ticaret merkezi. Savunma için duvarlar yerine doğal kaya oluşumlarına ("cremnol" çıkıntıları) güvenir. Lord Hükümdar\'ın gizli Ambarlarından birini barındırır.',
			safeDescription:
				"Batı Salahiyeti'nde doğal kaya oluşumlarıyla tahkim edilmiş büyük bir ticaret merkezi.",
		},
		tremredare: {
			name: 'Tremredare',
			description:
				"Batı Salahiyeti'nin tarihi başkenti. Çöküş sonrasında Fadrex Şehri'ne kıyasla savunulabilirlik eksikliği nedeniyle gözden düştü.",
		},
		'ashmount-morag': {
			name: 'Morag',
			description:
				"Batı silüetine hâkim devasa bir yanardağ. Morag'dan gelen kül, batı tarım bölgelerinin kendine özgü ekolojisi için kritik öneme sahiptir.",
		},
		chardees: {
			name: 'Chardees',
			description:
				"Hasting Hanesi'nin ata yurdu ve Batı Salahiyeti'nin \"Gölge Başkenti\". Fadrex ve Tremredare resmi haritalarda görünürken, Chardees kartografik belirsizlik içinde faaliyet gösterir — muhtemelen gizli bir kanyonda veya kül ormanı bölgesinde bulunur. Kentsel düzeni, Hasting Hanesi'nin servetini ve asker hareketlerini gizlemek için tasarlanmış özel mülklere öncelik verir.",
		},
		austrex: {
			name: 'Austrex',
			description:
				"Güney Salahiyeti'nin başkenti ve Son İmparatorluk'un tahıl ambarı merkezi. En büyük kesintisiz tarım bölgesinin merkezinde konumlanmış; düz topografyası, soylu kaleler yerine Dağıtım Meydanları tarafından yönetilen yatay bir yayılmaya izin vermiştir. Güneyde İkmal Kantonu'nun merkezi olarak şehrin coğrafyası devasa tahıl ambarları, silolar ve işleme tesisleri tarafından belirlenir.",
		},
		vetitan: {
			name: 'Vetitan',
			description:
				"Lord Hükümdar'ın Ambarlarından birinin doğrudan üzerine inşa edilmiş bir Kuzey Salahiyeti şehri. Mimari, ağır Kül Yağmuruna yeraltı genişlemeleri ve Nezaret merkezli düzenle uyum sağlamıştır. Çağların Kahramanı zamanında şehir kül birikintileri tarafından tüketilmekte, alt katlar külle dolarken yurttaşlar binaların üst katlarında yaşamaktadır.",
			safeDescription:
				"Kuzey Salahiyeti'nde yoğun Kül Yağmuruna uyum sağlamış mimariye sahip bir şehir.",
		},
		'ashmount-zerinah': {
			name: 'Zerinah',
			description:
				'Haritada gösterilen en güneydeki Kül Dağı. Güney yarımkürenin sıcaklığını düzenlemede kritik bir rol oynar.',
		},
		conventical: {
			name: 'Seran Kabilesi',
			description:
				"Kuzey sınırı yakınında bir uçurum yüzüne oyulmuş dikey bir kale. Üst katlar standart bir Nezaret tapınağı olarak işlev görür (şapel, yaşam alanları), ancak dik spiral bir merdiven gerçeğe iner: Hizmetkârlar Salonu (toplu mezarlar), Sorgucu koğuşları ve taş masaları, boşaltma kanalları ve çivi kasasıyla Hematurji Odası. Derinlerde Sazed, gizli bir girintide saklanan Kwaan'ın çelik plaka yazıtını keşfetti. Burası Sorgucuların yaratıldığı yerdir.",
			safeDescription:
				'Kuzey sınırı yakınında bir uçuruma oyulmuş dikey bir kale. Üst katlar standart bir Nezaret tapınağı olarak işlev görür.',
		},
		tathingdwen: {
			name: 'Tathingdwen',
			description: "Son İmparatorluk'un Scadrial'deki Terris Salahiyeti'nin başkenti.",
		},
		'terris-mountains': {
			name: 'Terris Dağları',
			description:
				"Terris halkının boyunduruk altına alındığı engebeli bir dağ silsilesi. Lord Hükümdar dünyanın coğrafyasını değiştirmeden önce orijinal Miraç Kuyusu'nun konumu.",
			safeDescription: 'Terris halkının boyunduruk altına alındığı engebeli bir dağ silsilesi.',
		},
		'tincut-fastness': {
			name: 'Tincut Kalesi',
			description:
				"İmparatorluk'un çöküşü sırasında Sinod ve mültecilerin sığındığı Terris dağlarındaki gizli bir hisar.",
			safeDescription: 'Terris dağlarında gizli bir hisar.',
		},
		'high-villages': {
			name: 'Yüksek Köyler',
			description:
				'Geleneksel haritalamayı alt üst eden, genellikle vadi zemininden görünmeyen Terris yerleşimleri ağı. Sert kışlardan ve İmparatorluk denetiminden kurtulmak için bu köyler, küçük yüzey ayak izleriyle (birkaç taş kulübe) yeraltına uzanır ve dağ yamaçlarına kazılmış devasa tünel ağlarını ve ortak salonları gizler. Üç boyutlu harita, gizli vadilerde kilometrelerce ötede çıkan kaçış yollarını içerir.',
		},
		'imperial-canal': {
			name: 'İmparatorluk Kanalı',
			description:
				"Doğal bir nehir değil, Lord Hükümdar'ın buyruğuyla toprağa açılmış yapay bir damar. Tathingdwen'i kuzeyde doğrudan Luthadel'e bağlayarak Terris kaynaklarının çıkarılmasını ve İmparatorluk askerlerinin girmesini sağlar.",
			safeDescription:
				"Doğal bir nehir değil, Lord Hükümdar'ın buyruğuyla toprağa açılmış yapay bir damar. Tathingdwen'i Luthadel'e bağlayarak imparatorluk boyunca ticaret ve ulaşımı sağlar.",
		},
		'kandra-homeland': {
			name: 'Kandra Anayurdu',
			description:
				"Hathsin Çukurları'nın altındaki derin mağaralar, Güvenağılı dahil Lord Hükümdar'ın en büyük sırlarını koruyan kandra halkının evi.",
			safeDescription:
				"Hathsin Çukurları'nın altında gizli bir yeraltı kompleksi. Gerçek doğası ve amacı dış dünya tarafından bilinmez.",
		},
		'ashmount-torinost': {
			name: 'Torinost',
			description:
				"Batı Salahiyeti'nin kuzey kesimlerindeki devasa bir zirve, Batı ve Kuzey arasında görsel bir bariyer oluşturur.",
		},
		'ashmount-faleast': {
			name: 'Faleast',
			description:
				"Doğu Salahiyeti'nin birincil jeolojik özelliği. Alevdiyar'a yaklaşan doğu çöllerindeki silika içeriği nedeniyle külü daha kaba tanelidir.",
		},
		'ashmount-doriel': {
			name: 'Doriel',
			description:
				"Luthadel'in güneyinde, Güney Denizi kıyısı yakınında bulunur. Bu dağ, Catacendre sonrasında Elendel Havzası'nı oluşturmak için düzleştirildi.",
		},
		'statlin-city': {
			name: 'Statlin Şehri',
			description:
				"Ambar ağının güney çapası. Acil durum malzemeleri içeren 2 numaralı Ambar'ı barındırır.",
			safeDescription: "Güney Salahiyeti'nde bir şehir.",
		},
		'tresting-plantation': {
			name: 'Tresting Çiftliği',
			description:
				"Çiftlik Themos Tresting'e aittir ve personel arasında diğer lordlar, en az iki küçük Obligatör, bir dizi görev başı ve yirmiden fazla asker bulunur. Çiftliğinde birkaç yüz skaalık bir işgücü çalışırdı.",
		},
		'lekal-city': {
			name: 'Lekal Şehri',
			description:
				"Feodal bir anomali — bir Büyük Hane'nin adını taşıyan büyük bir şehir, Lord Hükümdar'ın merkezi mutlakıyetiyle çelişen bir özerklik ima eder. Soylu hanelerin şehir içinde kalelere sahip olduğu Luthadel'in aksine, Lekal Şehri kalenin kendisidir. Kent haritası, Lekal mülkünün devasa bir uzantısıdır.",
		},
		mantiz: {
			name: 'Mantiz',
			description:
				"Batı Salahiyeti'nin uzak kuzeyinde saygın büyüklükte bir şehir. Mantiz yakınında sadece bir Kül Dağı (Torinost) bulunur, bu da burada Luthadel'den daha az kül yağdığı anlamına gelir, ancak organize bir temizlik çabası olmadığından şehir neredeyse külle boğulmaktadır. Silüetinde Keep Shezler dahil dört devasa kale yükselir.",
			placementNote:
				'⚠️ Mevcut konum yanlış olabilir. Kaynak materyal Mantiz\'in Torinost Kül Dağı yakınında "Batı Salahiyeti\'nin uzak kuzeyinde" olduğunu belirtir.',
		},
		'channerel-river': {
			name: 'Channerel Nehri',
			description:
				'İmparatorluğun ana damarı, dağlardan Luthadel üzerinden batı kıyısına akar. Ticaret ve ulaşım için kritik öneme sahiptir.',
		},
		'burnlands-west': {
			name: 'Batı Alevdiyar',
			description:
				"Son İmparatorluk'un yerleşim bölgesinin en dış sınırı — Rashek'in değişikliklerinden sonra güneşe çok yakın kalan, kıtanın batı kenarındaki yaşanılamaz bir çöl bölgesi. Batı Salahiyeti, İmparatorluk kontrolünün ötesinde \"savaşçı adamlar\"ın (Son İmparatorluk'a isyan eden kabileler) hayatta kaldığı bu çorak topraklara sınırdır.",
		},
		'burnlands-east': {
			name: 'Doğu Alevdiyar',
			description:
				"Son İmparatorluk'un yerleşim bölgesinin en dış sınırı — kıtanın doğu kenarındaki yaşanılamaz bir çöl bölgesi. Doğu Salahiyeti bu alevdiyarın sınırlarına kadar uzanır.",
		},
		'arguois-caverns': {
			name: 'Arguois Mağaraları',
			description:
				"Luthadel ile Hathsin Çukurları arasındaki dağlardaki bir kireçtaşı mağara ağı. Kelsier'ın isyan ordusu tarafından gizli bir toplanma alanı olarak kullanıldı.",
			safeDescription:
				'Luthadel ile Hathsin Çukurları arasındaki dağlarda bir kireçtaşı mağara ağı.',
		},
		garthwood: {
			name: 'Garthwood',
			description:
				"Sazed'in özgürleştirilmiş skaaya bastırılmış dinleri öğretmek için seyahat ettiği Doğu Salahiyeti'ndeki bir yerleşim. Çevredeki köyler, daha sonra imparatorluk genelinde yayılacak olan sis hastalığını ilk yaşayanlar arasındaydı.",
			safeDescription:
				"Sazed'in özgürleştirilmiş skaaya bastırılmış dinleri öğretmek için seyahat ettiği Doğu Salahiyeti'ndeki bir yerleşim.",
			placementNote:
				"⚠️ Salahiyet ataması belirsiz. Bazı kaynaklar Garthwood'u Merkez Salahiyeti'ne, diğerleri Doğu Salahiyeti'ne yerleştirir.",
		},
		'straffs-camp': {
			name: "Straff'ın Savaş Kampı",
			description:
				"Straff Venture'ın kuşatma sırasında Luthadel'in kuzeyindeki askeri karargâhı, Urteau'ya giden kanal yolunu kontrol altında tutuyor. Şehri teslim olmaya sindirmek için konuşlandırılmış elli bin kişilik devasa bir güç.",
		},
		'koloss-camp': {
			name: 'Koloss Kampı',
			description:
				"1024 Sİ'deki Luthadel kuşatması sırasında koloss ordusunun Luthadel yakınındaki karargâhı.",
			safeDescription:
				'Luthadel yakınında büyük bir koloss kuvvetleri kampı, kuşatma sırasında sürekli bir tehdit oluşturuyordu.',
		},
		longsfollow: {
			name: 'Longsfollow',
			description:
				"Dağ geçitleri boyunca konumlanmış bir Batı Salahiyeti kasabası, En Uzak Salahiyet'e açılan bir kapı görevi görür. Kültürel malların ve lüks eşyaların başkente doğru hareketinde kritik öneme sahiptir.",
		},
		chakatah: {
			name: 'Chakatah',
			description:
				"Batı Salahiyeti'ndeki küçük bir maden köyü, genellikle büyük ticaret yollarının dışında kalır.",
		},
		'north-seran': {
			name: 'Kuzey Seran',
			description:
				'Seran Kabilesi yakınındaki bir bölge, tarihsel olarak Çelik Sorgu için gizli bir toplanma alanı olarak önemlidir.',
		},
		'river-seran': {
			name: 'Seran Nehri',
			description:
				"Nezaretin hassas malzemeleri soylu gözetiminden uzakta taşımak için kullandığı büyük bir güney su yolu. Sorgucuların Seran Kabilesi'ne gidiş gelişi için kritik öneme sahiptir.",
		},
		urbene: {
			name: 'Urbene',
			description:
				"Kuzey Salahiyeti'nden başkente giren tahıl sevkiyatları için yüksek güvenlikli bir Nezaret ara noktası. Luthadel'in alt sınıf semtleri için tahıl işleyen tarım merkezi.",
		},
		erlac: {
			name: 'Erlac',
			description:
				"Luthadel'in güneybatısında bulunan, Lord Hükümdar'ın özel mülklerinde devriye gezen birliklerden sorumlu bir garnizon yerleşimi. Luthadel'e giden yolları devriye gezen askerler için garnizon kasabası.",
		},
		'valtroux-city-central': {
			name: 'Valtroux',
			description:
				"Luthadel'in kuzeybatısında bulunan büyük bir garnizon şehri. Holstep kasabası yakınında Yeden'in isyan ordusunu durduran ve katliam yapan 5.000 kişilik bir daimi ordu barındırıyordu.",
			safeDescription: "Luthadel'in kuzeybatısında bulunan büyük bir garnizon şehri.",
		},
		'haverfrex-cannery-central': {
			name: 'Haverfrex',
			description:
				"Büyük ölçekli konserve fabrikasıyla tanınan Merkez Salahiyeti'ndeki bir sanayi ara noktası. Luthadel Kuşatması sırasında Lord Ashweather Cett'in ordusunun birincil ikmal düğümü olarak hizmet etti.",
			safeDescription:
				"Büyük ölçekli konserve fabrikasıyla tanınan Merkez Salahiyeti'ndeki bir sanayi ara noktası.",
		},
		'cetts-camp': {
			name: "Cett'in Savaş Kampı",
			description:
				"Lord Ashweather Cett'in kuşatma sırasında Luthadel'in kuzeybatısındaki askeri karargâhı. Cett, şehrin kontrolünü ele geçirmek için ordusunu Batı Salahiyeti'nden yürüterek ikinci bir kuşatma hattı kurdu.",
		},
		'western-coast': {
			name: 'Batı Sahili',
			description:
				"Son İmparatorluk'un batı kıyı şeridi, yerleşim alanlarının sona erdiği ve sonsuz gri Bilişsel Diyar okyanusunun başladığı yer.",
			safeDescription:
				"Son İmparatorluk'un ıssız batı ucu, kıtanın sona erdiği ve okyanusun başladığı yer.",
			confidence: 'unconfirmed',
		},
		'ire-fortress': {
			name: 'İre Kalesi',
			description:
				"Scadrial'ın batı sınırının çok ötesinde, Bilişsel Diyar'da İre tarafından inşa edilmiş, içsel bir ışıkla parıldayan beyaz taştan yükselen görkemli bir kale.",
			safeDescription:
				'Ölümün ötesindeki dünyanın hikâyelerinde glimpsed gizemli bir kale, doğası ve amacı yaşayanlarca bilinmez.',
			confidence: 'unconfirmed',
		},
	},

	// Turkish city translations
	cities: {
		...enData.cities,
		luthadel: {
			name: 'Luthadel',
			description:
				"Son İmparatorluk'un başkenti ve Lord Hükümdar'ın hükümranlığı döneminde kültürel merkez. Tüm imparatorlukta insan yapımı duvarlara sahip olmasına izin verilen tek şehir. Miraç Kuyusu'nun tam üzerine oturan Kredik Shaw etrafında radyal simetriyle inşa edilmiştir. Allomantik metallerden adını alan sekiz kapı savunma duvarlarından geçiş sağlar. Manyetik kuzey kutbunda konumlanmıştır — tüm pusulalar Luthadel'i gösterir.",
		},
		urteau: {
			name: 'Urteau',
			description:
				"Kuzey Salahiyeti'nin en büyük şehri, Luthadel'in kuzeydoğusunda Kalling Kül Dağı yakınında bulunur. Venture Hanesi'nin kalıtsal yurdu. \"Sokakoluğu\"yla tanımlanır — yüz yıldır suyu boşaltılmış geniş kanallar, artık külle dolu çukur yollar olarak hizmet eder. Kanallar, Lord Hükümdar'ın deposundaki gizli bir yeraltı gölünde su depolamak için kurutulmuştur.",
		},
		fadrex: {
			name: 'Fadrex Şehri',
			description:
				"Batı Salahiyeti'nde büyük bir ticaret merkezi, Urteau'dan birkaç aylık yolculuk mesafesinde, Chardees yakınında bulunur. Doğal koyu kırmızı ve turuncu kaya oluşumlarıyla — \"cremnol\" çıkıntılarıyla — tahkim edilmiştir, doğal şehir duvarları görevi görerek Tremredare gibi daha büyük şehirlerden çok daha savunulabilir kılar. Lord Hükümdar'ın gizli ambarlarından birini barındırır.",
		},
	},

	// Turkish city landmark translations
	cityLandmarks: {
		...enData.cityLandmarks,
		luthadel: {
			...enData.cityLandmarks.luthadel,
			'kredik-shaw': {
				name: 'Kredik Shaw',
				description:
					'Lord Hükümdar\'ın sarayı, "Bin Kulenin Tepesi". Miraç Kuyusu\'nu barındıran mağara kompleksinin tek girişinin tam üzerine inşa edilmiştir. Parça parça yapısı, şehrin baştan mükemmel planlanmadığını düşündürür.',
			},
			'iron-gate': {
				name: 'Demir Kapı',
				description: "Kuzey kapı, Urteau ve Kuzey Salahiyeti'ne açılır.",
			},
			'steel-gate': {
				name: 'Çelik Kapı',
				description: "Kuzeybatı kapı, Hathsin Çukurları'na doğru açılır.",
			},
			'pewter-gate': {
				name: 'Lehim Kapı',
				description: "Luthadel'in kuzeydoğu kapısı.",
			},
			'zinc-gate': {
				name: 'Çinko Kapı',
				description: "Luthadel'in güneydoğu kapısı.",
			},
			'brass-gate': {
				name: 'Pirinç Kapı',
				description: "Güney kapı, Fellise ve Güney Salahiyeti'ne açılır.",
			},
			'copper-gate': {
				name: 'Bakır Kapı',
				description: 'Güneybatı kapı, sanayi bölgesinin yakınında.',
			},
			'bronze-gate': {
				name: 'Tunç Kapı',
				description: "Batı kapı, Channerel Nehri'ne açılır.",
			},
			'keep-venture': {
				name: 'Venture Kalesi',
				description:
					"Venture Hanesi'nin kalesi. Elend'in operasyon üssü ve soylu baloları için sık kullanılan mekân.",
			},
			'keep-elariel': {
				name: 'Elariel Kalesi',
				description: "Luthadel'in Büyük Hanelerinden biri olan Elariel Hanesi'nin evi.",
			},
			'keep-hasting': {
				name: 'Hasting Kalesi',
				description: 'Sarayın yakınında konumlanmış; Hane Savaşında erken düştü.',
			},
			'clubs-shop': {
				name: "Clubs'ın Dükkânı",
				description: "Kelsier'ın ekibinin operasyon üssü olarak kullanılan marangoz dükkânı.",
			},
			'camons-safehouse': {
				name: "Camon'un Güvenli Evi",
				description:
					"Vin'in Kelsier tarafından işe alındığı gecekondu mahallelerindeki ilk güvenli ev.",
			},
			'fountain-square': {
				name: 'Çeşme Meydanı',
				description:
					"Halka açık idamların ve Kelsier'ın ölümünün yeri. Daha sonra Hathsin Firarisinin Meydanı olarak yeniden adlandırıldı.",
			},
			'lake-luthadel': {
				name: 'Luthadel Gölü',
				description: 'Şehir surlarının hemen doğusundaki büyük, kül lekeli bir tatlı su kütlesi.',
			},
			'canton-of-finance': {
				name: 'Maliye Kantonu',
				description:
					'Obligatörlerin imparatorluğun maliyesini yönettiği Çelik Nezaret merkezi.',
			},
			'skaa-hovels': {
				name: 'Skaa Gecekonduları',
				description: 'Sokak ekiplerinin faaliyet gösterdiği yoksul skaa semtleri.',
			},
			'well-of-ascension': {
				name: 'Miraç Kuyusu',
				description:
					"Her 1024 yılda bir gücün toplandığı Kredik Shaw'ın altındaki gizli güç kaynağı.",
			},
			'tin-gate-north': {
				name: 'Kalay Kapı (Kuzey)',
				description: 'Kuzeydoğu kapı bölgesi.',
			},
			'assembly-hall': {
				name: 'Meclis Salonu',
				description:
					"Luthadel kuşatması sırasında Elend'in demokratik parlamentosunun toplandığı meclis binası. Tahttan indirilmesinin ve yeni hükümetin siyasi dramasının sahnesi.",
			},
			'keep-tekiel': {
				name: 'Tekiel Kalesi',
				description:
					"Hane Savaşını ateşlemek için Kelsier'ın suikast kampanyasında hedef alınan Büyük Hanelerden biri olan Tekiel Hanesi'nin kalesi.",
			},
			'luthadel-garrison': {
				name: 'Luthadel Garnizonu',
				description:
					"Şehrin askeri eğitim alanı ve kışlası. Ham ve Vin, Lord Hükümdar'ın askeri gücünü değerlendirmek ve sempatik askerleri işe almak için burayı ziyaret etti.",
			},
			'warehouse-district': {
				name: 'Depo Bölgesi',
				description:
					"Kelsier'ın ekibinin silah depoladığı ve skaa isyanı için gizli mitingler düzenlediği batı kanalları yakınındaki sanayi bölgesi.",
			},
			'canton-inquisition': {
				name: 'Sorgu Kantonu Merkezi',
				description:
					'Çelik Sorgucuların birincil üssü olan kale benzeri yapı. Nezaretin mutlak disiplin gücünü temsil eden, hem skaa hem soylu için korku yeri.',
			},
			'canton-resource': {
				name: 'İkmal Kantonu Merkezi',
				description:
					'Tahıl, metal ve skaa işgücünün dağıtımının titizlikle kaydedilip yönetildiği imparatorluk ekonomisinin idari kalbi.',
			},
			'canton-orthodoxy': {
				name: 'Ortodoksluk Kantonu',
				description:
					"Lord Hükümdar'ın ibadetinin teolojik saflığını korumak ve Nezaretin çok sayıda ritüelini yönetmekle görevli şehrin dini merkezi.",
			},
			'keep-lekal': {
				name: 'Lekal Kalesi',
				description:
					"Bir Büyük Hane olan Lekal Hanesi'ne ait büyük kalelerden biri. Bu yapılar anıtsal ölçekte olup genellikle düzinelerce kule ve her gün külden temizlenen ayrıntılı vitray pencereler içeriyordu.",
			},
			'hotel-district': {
				name: 'Otel Bölgesi',
				description:
					'Dış salahiyetlerden gelen ziyaretçi soyluları ağırlamak için tasarlanmış zengin bir bölge. Lüksüyle ve sanayi isinden uzaklığıyla tanınır.',
			},
			'commercial-district': {
				name: 'Ticaret Bölgesi',
				description:
					'Soylu hanelerin sözleşmeleri müzakere ettiği ve Nezaret faktörlerinin imparatorluk emtiasının takasını denetlediği yasal ticaret merkezi.',
			},
			'kenton-street': {
				name: 'Kenton Caddesi',
				description:
					"Luthadel'de ev eşyalarından egzotik hayvanlara kadar her şeyin satıldığı işlek bir pazar caddesi. Vin, OreSeur'un yeni bedeni olarak kullanmak için burada bir kurt köpeği satın aldı.",
			},
			'industrial-district': {
				name: 'Sanayi Bölgesi',
				description:
					"Demirciler, değirmenler ve atölyeler tarafından domine edilen bir bölge. Ağır malzemelerin taşınmasını ve atıkların bertarafını kolaylaştırmak için Lord Kanalı'na yakın konumlanmıştır.",
			},
			'ahlstrom-square': {
				name: 'Ahlstrom Meydanı',
				description:
					"Luthadel'de resmi ilanlar veya şehrin üst-orta sınıf sakinleri için buluşma noktası olarak kullanılan önemli bir meydan.",
			},
			'south-bridge': {
				name: 'Güney Köprüsü',
				description:
					'Şehrin su yolları üzerinde, sanayi sektörlerini güney duvarının yerleşim bölgeleriyle birleştiren önemli bir geçiş noktası.',
			},
			'the-twists': {
				name: 'Dönemeçler',
				description:
					"Kıvrımlı sokaklar ve birbirine bağlı binalarla karakterize edilen labirent gibi bir gecekondu semti. Nezaret muhafızlarının geçişinin çok zor olmasıyla ünlüdür ve skaa yeraltı dünyası ile Kelsier'ın ekibi için bir sığınak olmuştur.",
			},
			sootwarrens: {
				name: 'Kül Varoşları',
				description:
					'Kül birikiminin en yoğun ve yaşam koşullarının en ağır olduğu şehrin en yoksul bölümlerinden biri. Uygun havalandırmadan yoksun blok tarzı konutlarla tanımlanır.',
			},
			'the-cracks': {
				name: 'Çatlaklar',
				description:
					'Bozulan altyapısı ve yüksek nüfus yoğunluğu ile tanınan sefil bir sektör. Tahıl kıtlığı dönemlerinde genellikle ilk etkilenen bölge.',
			},
			'aspen-row': {
				name: 'Kavak Sokağı',
				description:
					'Skaa ağırlıklı bir bölgede olmasına rağmen, derin varoşlardan biraz daha yüksek bir statüyü koruyan bir yerleşim caddesi, genellikle nitelikli işçilere veya soylu hizmetkârlara ev sahipliği yapar.',
			},
			blockstreet: {
				name: 'Blok Sokak',
				description:
					'Şehir duvarları içinde nüfus kapasitesini en üst düzeye çıkarmak için skaaya dayatılan yoğun, ızgara benzeri yerleşim planını temsil eder.',
			},
		},
		urteau: {
			...enData.cityLandmarks.urteau,
			'ministry-canton': {
				name: 'Sorgu Kantonu',
				description:
					"Kanal ağının beslendiği Kaynak olan devasa bir yeraltı gölünü içeren üçüncü ambarın doğrudan üzerine inşa edilmiş Çelik Nezaret merkezi. Sazed'in yangınlar sırasında su deposunu serbest bırakmak için inşa ettiği sel kapısı mekanizmasını barındırır.",
			},
			marketpit: {
				name: 'Pazar Çukuru',
				description:
					'Sokak yuvası kanallarının en genişi, şehrin ana bulvarı ve merkezi pazar yeri olarak işlev görür. Büyük ölçüde esnaf ve dilencilerin doldurduğu geniş bir kavşak.',
			},
			'spooks-hideout': {
				name: "Dikiz'in Saklanma Yeri",
				description: 'Ayaklanma sırasında Dikiz\'un ekibinin kullandığı "Yanan Ev".',
			},
			'citizens-estate': {
				name: "Yurttaş'ın Mülkü",
				description: "Quellion'un el koyduğu soylu malikanesi, iktidar merkezi olarak kullanılır.",
			},
			'luthadel-gate': {
				name: 'Luthadel Kapısı',
				description: "Kanal ağının güney girişi, Luthadel'e doğru açılır.",
			},
			'venture-estate': {
				name: 'Venture Hanesi Mülkü',
				description:
					"Venture ailesinin Urteau'daki kalıtsal evi, Quellion yönetimi altında terk edilmiştir.",
			},
			'burning-district': {
				name: 'Yanan Bölge',
				description:
					"Dikiz'in Quellion'a karşı isyanı sırasında yangınlarla tahrip edilen şehrin yaklaşık üçte biri. Dikiz, Yurttaş'ın Allomantikleri şantajla kontrol etmek için Hematurjik çiviler kullandığını ifşa ettiğinde isyanlar sırasında yangın yayıldı.",
			},
			'skaa-slums': {
				name: 'Skaa Varoşları',
				description: 'Devrimcilerin kuru kanal yataklarında toplandığı yoksul semtler.',
			},
			'the-harrows': {
				name: 'Hendekler',
				description:
					'Şehrin güney kesimindeki dar, iç içe geçmiş kanallardan oluşan karışık bir labirent. Yoğun, kaotik ağ navigasyonu zorlaştırır.',
			},
			'west-docks': {
				name: 'Batı İskeleler',
				description:
					'Ticaret mallarının yüklenip boşaltıldığı kanal ağının batı terminali. Şehirdeki su akışının bitiş noktası.',
			},
			'fedre-aqueduct': {
				name: "Lord Fedre'nin Su Kemeri",
				description:
					"Bir zamanlar şehre su sağlayan anıtsal bir çöküş öncesi altyapı. Urteau'nun eski ihtişamının iskeletimsi bir simgesi olarak kaldı.",
			},
			'white-streets': {
				name: 'Beyaz Sokaklar',
				description:
					'Arnavut kaldırımlarının titizlikle külden temizlendiği zengin bir semt. Devrimin ardından bu bölgedeki ahşap soylu evlerin çoğu Yurttaş rejimi tarafından yakıldı.',
			},
			'citizens-home': {
				name: "Yurttaş'ın Evi",
				description:
					"Lord Hükümdar'ın düşüşünden sonra iktidarı ele geçiren bir skaa olan Quellion'un karargâhı. Rejimi, Urteau'nun soylu malikanelerini ortak konutlara veya idam alanlarına dönüştürdü.",
			},
			'interchange-building': {
				name: 'Aktarma Binası',
				description:
					'Malların şehrin kanal ve sokak sistemlerinin farklı seviyeleri arasında taşındığı önemli bir lojistik merkez.',
			},
			'old-city-square': {
				name: 'Eski Şehir Meydanı',
				description:
					"Urteau'nun tarihi merkezi, Yurttaş rejimi sırasında radikal siyasi ayaklanma ve halka açık yakma alanı haline geldi.",
			},
			'canton-orthodoxy-urteau': {
				name: 'Ortodoksluk Kantonu',
				description:
					"Kuzey Salahiyeti'nin ruhani ve hukuki işlerini yöneten, Ventureler ve diğer soylu hanelerin Bakanlığa boyun eğmesini sağlayan kurum.",
			},
		},
		fadrex: {
			...enData.cityLandmarks.fadrex,
			'keep-orielle': {
				name: 'Orielle Kalesi',
				description:
					"Kaya çıkıntısı üzerindeki yüksek zeminde oturan Orielle Hanesi'nin birincil kalesi. Obligatör Aradan Yomen kontrolü ele geçirdikten sonra sarayı olarak kullandı. Yomen'in Son İmparatorluk sosyal yapılarını yeniden tesis ettiği soylu balosunun yeri.",
			},
			'storage-cache': {
				name: 'Ambar',
				description:
					"Kuzey kaya oluşumlarında Keep Orielle yakınında gizlenmiş, yiyecek ve elektrum içeren gizli depo. Elend'in kuşatmasının stratejik hedefi.",
			},
			'cremnol-wall-north': {
				name: 'Kuzey Cremnol Duvarı',
				description:
					'Şehri kuzeyden kucaklayan, insan yapımı tahkimatlardan üstün doğal savunma duvarları sağlayan doğal koyu kırmızı ve turuncu kaya çıkıntısı.',
			},
			'cremnol-wall-south': {
				name: 'Güney Cremnol Duvarı',
				description:
					'Şehri güneyden kucaklayan, saldırıya karşı jeolojik bir bariyer oluşturan doğal koyu kırmızı ve turuncu kaya çıkıntısı.',
			},
			'yomens-palace': {
				name: "Yomen'in Sarayı",
				description: "Şehri kontrol eden Obligatör Aradan Yomen'in idari merkezi.",
			},
			'main-gate': {
				name: 'Ana Kapı',
				description: 'Jeolojik oluşumlar arasından şehre birincil giriş.',
			},
			'conway-canal': {
				name: 'Conway Kanalı',
				description:
					'Bölgedeki büyük kanallardan biri, kaya çıkıntılarının altındaki düşük kotlu şehir havzasından ticaret ve ulaşımı kolaylaştırır.',
			},
			'city-walls-east': {
				name: 'Doğu Duvarları',
				description: 'Doğal kaya oluşumlarından oluşan şehrin doğu savunma çevresi.',
			},
			'ash-mounds': {
				name: 'Kül Tepeleri',
				description:
					"Şehir duvarlarının güneydoğusundaki kül kaplı ovalar, Elend'in kuşatma ordusunun karargâhını kurduğu yer.",
			},
			'canton-of-resource': {
				name: 'İkmal Kantonu',
				description:
					"Fadrex'teki Çelik Nezaret'in İkmal Kantonu, Yomen tarafından Vin için hapishane olarak kullanıldı. Şehrin altındaki ambara gizli bir bağlantı içerir.",
			},
			'slowshifts-house': {
				name: "Slowshift'in Evi",
				description:
					'Şehrin sırları ve Nezaretin yerel operasyonları hakkında derin bilgiye sahip yaşlı, deneyimli bir muhbirin evi.',
			},
			'the-wells': {
				name: 'Kuyular',
				description:
					'Büyük bir nehri olmayan bir şehirde, derin su kuyuları en hayati kaynaklardı. Sabotaj veya skaa zehirlemesini önlemek için Nezaret tarafından yoğun şekilde tahkim edilip izleniyordu.',
			},
			infirmary: {
				name: 'Revir',
				description:
					'Görünüşte iyileştirme amaçlı olsa da "sis hastalığı" olan hastaların ve diğer anormalliklerin gözlemlenmesi için de kullanılan Nezaret tarafından işletilen bir tıbbi tesis.',
			},
		},
	},

	movements: {
		...enData.movements,
		kelsier: {
			...enData.movements.kelsier,
			// ── The Final Empire ───────────────────────────────────────────
			'tfe-0': {
				title: 'Hathsin Firarisinin Dönüşü',
				description:
					"Kelsier, Lord Tresting'in çiftliğine gelir; soylu, Lord Venture'ın iş ortaklığını kazanmak umuduyla gönderilen bir Obligatöryı ağırlamaktadır. O akşam, bir skaa kızı Tresting'e götürülmek üzereyken Kelsier müdahale eder — Tresting'i, tüm Obligatörlarını, görev başılarını ve askerlerini öldürür, sonunda malikanesini ateşe verir.",
			},
			'tfe-1': {
				title: 'Gizli Gözlemci',
				description:
					"Kelsier, Camon'un ekibinin faaliyetlerini gölgelerden izler; Vin'in bilinçsiz Allomantik kullanımını fark eder — Sissoylu güçlerine sahip bir sokak serserisi.",
			},
			'tfe-3': {
				title: "Vin'i İşe Almak",
				description:
					"Vin, Camon'un ininden kaçmaya çalışır ama Ulef ona ihanet eder. Kelsier müdahale ederek Vin'i Camon'un dayağından kurtarır. Milev'i ekip liderine terfi ettirir, Obligatör ve Sorgucu ile ilgilenmenin karşılığı olarak üç bin boksing'i alır ve akşam toplantısı için ini kiralar. Ardından Vin'i test eder ve onun bir Sissoylu olduğunu doğrular.",
			},
			'tfe-5': {
				title: 'Atiyum Soygunu',
				description:
					"Kelsier, Dockson ve Vin çatıya çıkar. Kelsier hazırlanır ve Venture Kalesi'ne girip atiyum çalmak için sislerin içine dalar. Kasayı ele geçirir ama çıkış yolunda sis avcılarıyla savaşmak zorunda kalır. Atiyumla kaçar ve isyanı finanse eder.",
			},
			'tfe-6': {
				title: 'Ekip Bir Araya Geliyor',
				description:
					"Clubs'ın marangoz dükkânında Kelsier ve ekip, Son İmparatorluk'un yıkılmasını planlar. Marsh sonunda gelir ve iki kardeşin yalnız konuşabilmesi için herkes ayrılır. Vin kapının dışında kulak misafiri olmak için geri döner.",
			},
			'tfe-7': {
				title: 'Çırağa Öğretmek',
				description:
					"Kelsier, Vin'i ilk gece eğitimi için dışarı çıkarır ve ona bir Sissoylu pelerini verir. Çelik Kapı yakınlarındaki Luthadel surlarında ona sekiz temel metali öğretir.",
			},
			'tfe-8': {
				title: 'Renoux Kılığı',
				description:
					"Kelsier, Vin'i Luthadel surlarından gece vahşi doğaya çıkarır ve bir sishortlağı ile karşılaşırlar. Ana yolda Sazed bir arabayla bekler ve onları Fellise'e götürür. Yolda Kelsier, Vin'e üç bin boksing'i ve ekibe güvenmiyorsa ayrılma şansını sunar. Lord Renoux'nun mülkünde Vin'in Lady Valette kimliğini oluşturur.",
			},
			'tfe-10': {
				title: 'Devrimi Planlamak',
				description:
					"Luthadel'e dönen Kelsier, Clubs'ın dükkânında bir ilerleme toplantısı yapar. Toplantıdan önce Sazed'e güç veren bir din sorar — Sazed ona Jaizm'den bahseder — ve soyluların katledilmesini kutsal görev sayan bir din olup olmadığını sorar. Toplantı, Hammond'un askerlerinden birinin Nezaret'in Camon'un eski inini bulduğunu bildirmesiyle sona erer.",
			},
			'tfe-10.2': {
				title: 'Depo Mitingi',
				description:
					"Kelsier, depo bölgesindeki gizli bir mitingde toplanan skaa işçilere devrim vaaz eder. Breeze ve Teskincileri ile Körükçüleri kalabalığı konuşmaya daha açık hale getirmek için manipüle eder; Hathsin Firarisi efsanesini kullanarak isyanı ateşler.",
			},
			'tfe-11': {
				title: "Camon'un İni Katliamı",
				description:
					"Kelsier ve ekip yıkılmış ini araştırır. Ayrıldıktan sonra Kelsier, dilenciler arasında Camon'u bulmaya çalışır. Camon'un cesedini ağzından geçirilmiş bir kancaya asılmış bulur — bilekleri ve ayak bilekleri bağlı, bedeni işkence görmüş. Bu infaz yöntemi Allomansiyi kötüye kullananlar için ayrılmıştır. Vin, Kelsier'ı başarıyla takip etmiştir ve keşfin ardından kısa bir konuşma yaparlar.",
			},
			'tfe-13': {
				title: "Fellise'de Planlama",
				description:
					"Kelsier, Fellise'deki Lord Renoux'nun mülkünde Vin ve Sazed ile buluşur ve Vin'in ilk balosundan gelen istihbaratı değerlendirir. Vin'in babasının baloda olduğunu öğrenir, ardından Luthadel'e dönmek için sislerin içine çıkar.",
			},
			'tfe-14': {
				title: 'Saray Keşfi',
				description:
					"Kelsier, Lord Hükümdar'ın üç günde bir ziyaret ettiği binayı keşfetmek için Vin'i Kredik Shaw'a götürür. Savaşarak içeri girerler ama üç Çelik Sorgucu üzerlerine gelir. Kelsier, kaos sırasında Vin'den ayrılır. Vin ağır yaralı olarak gizemli deri ciltli bir kitabı sımsıkı tutarak kaçar.",
			},
			'tfe-15': {
				title: "Kredik Shaw'un Ardından",
				description:
					"Ekip, Kelsier'ın Vin'i Kredik Shaw'a götürme kararını tartışır. Aramaya çıkmadan önce Sazed, Vin'i taşıyarak gelir. Dockson alınan risk yüzünden öfkelidir. Kelsier ve Dockson, Vin'in geri getirdiği deri ciltli kitabı fark eder — Sazed, kitabın Lord Hükümdar'ın Miraç öncesi anavatanının dili olan Khlennice yazıldığını belirler ve çevirebileceğini düşünür.",
			},
			'tfe-16': {
				title: "Vin'in Başında Beklemek",
				description:
					"Kelsier, Vin'in Kredik Shaw'da aldığı yaralardan iyileşirken Clubs'ın dükkânında onun başında bekler ve nihayet uyandığında yanında olur.",
			},
			'tfe-17': {
				title: 'Renoux Mülkünde Toplantı',
				description:
					"Kelsier, Breeze, Yeden ve Dockson ile birlikte Fellise'e giderek Lord Renoux'nun mülkünde buluşur ve isyanın bir sonraki aşamasını tartışır.",
			},
			'tfe-19': {
				title: 'Hane Savaşını Kışkırtmak',
				description:
					"Kelsier, Lord Charrs Entrone'un açıkça katledilmiş cesedini Tekiel Kalesi'nin bahçesine bırakarak Hane Savaşı'nı körükler, ardından Kurum Mahallesi'ne giderek Hoid — sokak bağlantısı kılığındaki bir muhbir — ile buluşarak Renoux Hanesi hakkındaki söylentileri öğrenir. Hoid'den ayrıca Lady Shan Elariel'in bir Teskinci olduğunu öğrenir.",
			},
			'tfe-19.2': {
				title: 'Lord Straff ile Buluşma',
				description:
					"Kelsier, Ahlstrom Meydanı'na giderek hasta ve topal bir skaa dilenci ve sokak muhbiri kılığına girer ve Venture Hanesi'nin lideri Lord Straff Venture ile buluşur. Hathsin Firarisi hakkındaki söylentilerin yayıldığını ve On Birinci Metal'den bahsedildiğini öğrenir.",
			},
			'tfe-19.3': {
				title: "Renoux'ya Dönüş",
				description:
					"Kelsier, Dikenyolu'nu kullanarak Renoux Malikanesi'ne döner ve Vin, Sazed ve Renoux ile istihbarat paylaşır. Vin'e soylular hakkında ders verir, onların skaaları önemsemediğini ve Elend'den uzak durması gerektiğini ısrar eder.",
			},
			'tfe-20': {
				title: 'İkmal Denetimi',
				description:
					"Kelsier, Fellise'deki Renoux mülkünde isyan için arabalara yüklenen silah ve malzemelerin denetimini yapar.",
			},
			'tfe-21': {
				title: 'İsyan Ordusu',
				description:
					"Kelsier, kanal teknesiyle kuzeye giderken Lord Hükümdar'ın günlüğünün çevirisini okur. Kafile bir kilitte durur ve Kelsier, yeni askerler ve malzemeler asi ordunun eğitim yaptığı mağaralara gider. Hathsin Çukurları'nın anılarını yenerek Arguois mağara kompleksine girer ve Ham'ın oluşturduğu orduyu denetler. Bir akşam yemeğinde Kelsier, Bilg'in duygularını Körükler ve onu örnek olarak kullanmayı planlar. Bilg ve Demoux düello eder; Kelsier, ikisinin küçüğü olan Demoux'nun kazanmasına Allomansi ile yardım eder. Düellodan sonra ordunun güveni artar, Yeden Kelsier'ın güçlerini başkalarına verebileceğine inanır. Kelsier, Ham'ın orduyu Yeden'e devredip kendisiyle Luthadel'e dönmesini ister.",
			},
			'tfe-23': {
				title: "Vin'in Peşinde",
				description:
					"Kelsier, Vin'in Hasting Kalesi'nde Elend'in grubunu dinlediği kule penceresinin dışında belirir. Onların dünyayı değiştirme hakkındaki idealist konuşmalarını, asla gerçek değişime yol açmayan tipik genç soylu davranışı olarak küçümser. İkisi de ayrılır ve ayrı yollarına gider.",
			},
			'tfe-24': {
				title: 'Ekip Durum Toplantısı',
				description:
					"Kelsier, ekibin çoğunun toplandığı Clubs'ın dükkânına gelir. Görevin durumunu tartışır ve Dikiz, Ham ve Clubs ile gece yarısı içki içer. Ham'dan Garnizona istihbarat için gitmesini ister.",
			},
			'tfe-25': {
				title: 'Umutsuz Karar',
				description:
					"Clubs'ın dükkânında Kelsier, skaa isyanının Holstep Garnizonuna saldırdığını ve Luthadel Garnizonunun kuzeye hareket ettiğini öğrenir. İsyan ordusunu uyarmaya karar verir ve Vin'e kuzeye uzun bir kalay koşusu için beş kalay boncuk yutturur.",
			},
			'tfe-25.2': {
				title: 'Holstep Felaketi',
				description:
					"Kelsier ve Vin on altı saat boyunca sürekli kalay yakarak koşar. İsyan ordusunun kalıntılarıyla karşılaşırlar — Valtroux Garnizonunca kuşatılmış ve katledilmiştir. Kelsier savaşa katılıp elinden geleni kurtarmak ister ama Vin onu yenilmez olmadıklarına ikna eder. Arguois Mağaralarına devam ederler; Mennis'in hazırlıklı tutması sayesinde 2.000 asker hayatta kalmıştır. Mennis, Kelsier'a çok üzülmemesini söyler — bu, skaaların yüzyıllar içinde Lord Hükümdar'a karşı kazandığı en büyük zaferlerden biridir.",
			},
			'tfe-26': {
				title: 'Parçaları Toplamak',
				description:
					"Mağaralardan iki haftalık dönüşün ardından Clubs'ın dükkânında ekip, işin geleceğini konuşur — tamamen başarısız görünmektedir. Breeze, Kelsier'ı şöhret ve şan peşinde koşmakla suçlar. Kelsier bunun bir aksilik olduğunu kabul eder ama devrimi terk etmeyi reddeder.",
			},
			'tfe-26.2': {
				title: 'İdamlar',
				description:
					'Dikiz, Çeşme Meydanı\'ndaki idamları duyurur. Ekip meydana gider ve çatıya çıkmak için bir binada birine rüşvet verir. Birçok skaanın öldürülüp kanlarının çeşmeye boşaltılmasını izlerler. Kelsier ekibi işe devam etmeye ikna eder ve vahşeti işaret eder: "İşte düşmanımız. Burada merhamet yok, geri dönüş yok."',
			},
			'tfe-27': {
				title: 'Yeni Strateji',
				description:
					"Ekip, bir sonraki hamleleri planlamak için Clubs'ın dükkânına döner — soyluluk arasında bir hane savaşı başlatmak. Sazed, Marsh'tan bir mesaj getirir ve Kelsier'a ikisinin Dönemeçler'de nerede buluşabileceğini söyler.",
			},
			'tfe-27.2': {
				title: 'Altın Metali',
				description:
					"Kelsier ve Vin, Marsh ile buluşmadan saatler önce Dönemeçler'deki terk edilmiş bir binaya gider. Beklerken Kelsier, altından — kullanıcının geçmişinin alternatif bir versiyonunu görmesini sağlayan dokuzuncu Allomantik metal — bahseder. Ayrıca Ferusimyayı açıklar ve Vin'e ilk altın deneyimi için biraz altın verir. Marsh geldiğinde, Sorgu Kantonu'ndan düşük rütbeli bir Obligatörün dövmelerini taşıyarak, Luthadel'deki Teskin istasyonlarını anlatır ve Sorgucuların yaşlılıktan ölebileceğini ortaya koyar.",
			},
			'tfe-29': {
				title: "Renoux'da Savaş Konseyi",
				description:
					"Kelsier, Fellise'deki Renoux'nun mülkünde ekibin çoğunluğuna katılır ve Marsh'ın sağladığı çok detaylı bir Luthadel savunma haritasını inceler. Haritayı incelerken Theron'un ekibinin yakın zamanda Nezaret tarafından vurulduğunu keşfederler. Gece geç saatlerde, uyuyamayan Kelsier, Sazed'den bildiği dinlerden bazılarını anlatmasını ister.",
			},
			'tfe-31': {
				title: 'Çırağı Azarlamak',
				description:
					"Kelsier ve Vin, Vin'in Venture Kalesi'nde tam teşekküllü bir Sissoylu olan Lady Shan Elariel'i öldürmesinin ardından Clubs'ın dükkânına döner. Kelsier, Vin'i pervasız dövüş için azarlar ama Vin soylularla skaaların o kadar da farklı olmadığını ve Elend Venture'ın korunmaya değer iyi bir adam olduğunu haykırır.",
			},
			'tfe-32': {
				title: "Marsh'ı Bulmak",
				description:
					"Kelsier ve Vin, Marsh'ın cesedini bulur — tüm kanı boşaltılmış, cansız bir kabuk. Clubs'ın dükkânına döndüklerinde Marsh'ın Sorgucuların muhtemelen onu bulacağını açıklayan bir mektubunu keşfederler.",
			},
			'tfe-32.2': {
				title: 'Çukurları Yok Etmek',
				description:
					"Kelsier, en büyük acısının yaşandığı yer olan Hathsin Çukurları'na döner. Tüm muhafızları öldürür ve mağaradan çıkan Wallin adlı bir skaaya elini uzatır. Ardından her atiyum kristalini yok ederek Lord Hükümdar'ın en değerli kaynağını tek bir gecede keser.",
			},
			'tfe-33': {
				title: 'Yedek Sığınak',
				description:
					"Kelsier, Clubs'ın dükkânı yakınlarındaki nemli bir yedek bodrum sığınağa döner — sadece üç oda. Hathsin Çukurları'ndaki tüm atiyumu yok ettiğini duyurur.",
			},
			'tfe-33.2': {
				title: 'Sorgucu Dövüşü',
				description:
					"Herkes Kelsier'ı Çeşme Meydanı'na takip eder. Dikiz'i ve Lord Renoux'yu idam arabalarından birinde görürler. Kelsier meydanda bir Sorgucu ile savaşır — neredeyse kesinlikle bildiği bir tuzak.",
			},
			'tfe-34': {
				title: 'Hathsin Firarisinin Son Direnişi',
				description:
					"Kelsier, Çeşme Meydanı'nda her ikisi de atiyum yakarken Sorgucu ile topyekûn bir savaşa girer. İtme ve Çekme ustasıdır, metalı havada bir uzman gibi hareket ettirir. Sorgucuyu öldürür ve skaalar \"Hathsin Firarisi\" diye tezahürat etmeye başlar. Lord Hükümdar siyah bir arabayla gelir. Ham'ın haydutlarından biri ona bir mızrak saplar — yürümeye devam eder. İki mızrak — hâlâ yürüyor. Lord Hükümdar Kelsier'a bir tokat atar, kendi bedeninden bir mızrak çıkarır ve Kelsier'ın bedenine saplar. Kelsier gülümseyerek ölür ve devrimi ateşleyen bir şehit olur. Kelsier Umut'u temsil eder.",
			},
			'tfe-35': {
				title: 'Ölümün Ötesinde',
				description:
					"Clubs'ın dükkânı yakınındaki yedek sığınakta ekip, daha önce Lord Renoux olan kandra'yı Kelsier'ın bedeni ve kemikleriyle görür — son plan. Kelsier, her ekip üyesine şehri ele geçirme talimatları içeren mektuplar bırakmıştı. Ölümü, tüm Luthadel'de isyanı ateşleyen kıvılcım oldu.",
			},
			'woa-1': {
				title: 'Bilişsel Gölge',
				description:
					"Kelsier ölümünden sonra Miraç Kuyusu'nda Bilişsel Gölge olarak uyanır. Hoid bir lerasyum küresi çalar. Leras (Muhafaza) üç Alemi öğretir.",
			},
			'woa-5': {
				title: 'Dünyayı İzlemek',
				description:
					"Kelsier, Harap'ın titreşimlerine binerek hapishanesinin ötesindeki dünyayı gözlemler. Harap'ın Vin'e özel ilgi gösterdiğini fark eder.",
			},
			'woa-12': {
				title: "Harap'ın Planları",
				description:
					"Kelsier, Harap'ın Terris dinini değiştirdiğini keşfeder. Marsh, Sazed'i Kabilesi'nde terk eder.",
			},
			'woa-26': {
				title: 'Kuşatmayı İzlemek',
				description:
					"Kelsier, Vin'in Straff'a karşı korkunç gücünü ve Elend'in Meclis tarafından düşürülüşünü izler.",
			},
			'woa-57': {
				title: 'Kuyu Odası',
				description:
					"Vin ve Elend Kuyu'ya iner. Muhafaza gücün serbest bırakılmaması gerektiğini söyler. Marsh Sazed'e saldırır.",
			},
			'woa-60': {
				title: 'Harap Serbest',
				description:
					"Vin gücü serbest bırakır. Muhafaza, Vin'e son lerasyum küresini Elend'e vermesi için rehberlik eder.",
			},
			'hoa-0': {
				title: 'Hathsin Firarisinin Yasi',
				description:
					"Koloss savaşından sonra Kelsier, Venture Kalesi'ne gider. Dockson ve Clubs ölmüştür.",
			},
			'hoa-3': {
				title: 'Khriss ve Nazh',
				description:
					"Kelsier, Luthadel Gölü'nde Khriss ve Nazh ile karşılaşır. Khriss on altı Parçayı öğretir.",
			},
			'hoa-5': {
				title: 'Tanrısallık Görüsü',
				description:
					"Muhafaza, Kelsier'e olası gelecekleri gösterir. Vin'in bir şansı var — batıya giderse.",
			},
			'hoa-8': {
				title: 'Batıya Koşmak',
				description:
					'Kelsier, İmparatorluk Kanalı boyunca batıya koşar. Sis hastalığından boşalmış kasabalar.',
			},
			'hoa-12': {
				title: 'Longsfollow Anıları',
				description:
					"Longsfollow'da Kelsier'i yorgunluk ve suçluluk vurur. Mare'nin nerede olduğunu sorar.",
			},
			'hoa-15': {
				title: 'Yalnız Yol',
				description:
					'Kelsier sadece düşünceyle ateş yakabildiğini keşfeder. Skaa mültecileri izler.',
			},
			'hoa-18': {
				title: "Harap'ın Alayı",
				description:
					'Kelsier batı okyanusuna ulaşır. Ati (Harap) onunla alay eder. Kelsier Bilişsel okyanusa açılır.',
			},
			'hoa-21': {
				title: 'Düşünce Okyanusu',
				description: "Kelsier sonsuz karanlıkta Bilişsel okyanusu geçer. Ire'in kalesini görür.",
			},
			'hoa-24': {
				title: 'Ire Kalesi',
				description:
					'Kelsier, Ire — kadim Elantrialılar — tarafından korunan parlayan beyaz bir kaleye ulaşır.',
			},
			'hoa-30': {
				title: 'Küreyi Çalmak',
				description:
					"Kelsier, Ire'i takip eder. Harap gibi davranır. Alonoe korkudan küreyi bırakır.",
			},
			'hoa-35': {
				title: 'Fadrex ve Hoid',
				description: "Muhafaza Kelsier'i Fadrex'e yönlendirir. Vin'i ve yine Hoid'i bulur.",
			},
			'hoa-42': {
				title: "Harap'ın Piyonu",
				description:
					"Kelsier, kolossların Elend'in ordusuna saldırmasını izler — gerçek formlarını görür.",
			},
			'hoa-50': {
				title: 'Belirsiz Uyarı',
				description: "Kelsier, Vin'e mesaj iletmeye çalışır: metalle delinmiş kimseye güvenme.",
			},
			'hoa-54': {
				title: 'Hathsin Firarisinin Gölgesi',
				description: "Kelsier, Urteau'ya varır. Dikiz'i Harap'ın etkisinde bulur.",
			},
			'hoa-58': {
				title: 'Dikiz İçin Umut',
				description: 'Kelsier "Umut" diye fısıldar, ta ki Dikiz Hematurjik çiviyi sökene kadar.',
			},
			'hoa-62': {
				title: 'Yarı Rüyada',
				description: "Dikiz ve Kelsier yeşil bir çayırda buluşur. Vin'e mesaj iletmesini ister.",
			},
			'hoa-68': {
				title: 'Muhafazayı Almak',
				description: 'Kelsier, Ire küresini kırar ve Parça gücünü alır. Ama Harap güler.',
			},
			'hoa-69': {
				title: 'Habercinin Kaderi',
				description:
					"Kelsier, Goradel'in Dikiz'in uyarısıyla gittiğini görür — ama Harap Marsh'ı çağırır.",
			},
			'hoa-78': {
				title: 'Gücü Vermek',
				description:
					"Kelsier, Marsh Vin'in küpesini çıkardığında Harap'a saldırarak dikkatini dağıtır.",
			},
			'hoa-80': {
				title: 'Ruhu Onarmak',
				description: 'Kelsier tekrar ölmeyi reddeder. Ruhu yavaşça iyileşir.',
			},
			'hoa-81': {
				title: 'Çukur Gözcüsü',
				description:
					"Kelsier son savaşı izler. Elend, Marsh'ın boynunu deler. Vin Harap'a saldırır.",
			},
			'hoa-82': {
				title: 'Ötesi',
				description: "Elend ve Vin Bilişsel Alem'de belirir. Sazed Uyum olur.",
			},
			'hoa-83': {
				title: 'Hathsin Firarisinin Seçimi',
				description:
					"Kelsier Bilişsel Alem'de tekrar kapalıdır. Sazed (Uyum) onu ziyaret eder. Kelsier entrikalara başlar.",
			},
			'hoa-83.2': {
				title: 'Hathsin Firarisinin Dolapları',
				description:
					"Kelsier, Dikiz'i Hematurji deneylerine ikna eder — geri dönüş yolu bulmak için.",
			},
		},
		spook: {
			...enData.movements.spook,
			// ── The Final Empire ───────────────────────────────────────────
			'tfe-7': {
				title: 'Genç Kalaygöz',
				description:
					"Clubs'ın genç yeğeni Dikiz, marangoz dükkânında ekip için gözcü ve ulak olarak çalışır; kalın bir Doğu sokak argosunda konuşur.",
			},
			'tfe-9': {
				title: 'Ulak Koşuları',
				description:
					"Dikiz, Luthadel'deki Clubs'ın Dükkânı ile Fellise'deki Renoux mülkü arasında mesajlar taşır; kalayyla güçlendirilmiş duyuları onu olağanüstü bir gözcü yapar.",
			},
			'tfe-16': {
				title: "Vin'in Başında Beklemek",
				description:
					"Sahibinisiz, Kredik Shaw keşif görevi sırasında aldığı yaralardan iyileşen Vin'in başında Clubs'ın dükkânında bekler ve uyandığında yanındadır. Artık Kelsier'dan yeni bir isim aldığını söyler: Dikiz.",
			},
			'tfe-22': {
				title: 'Mendil',
				description:
					"Dikiz, Fellise'deki Renoux mülkünü ziyaret eder ve Vin'i Lord Hükümdar'ın günlüğünü okurken bulur. Dockson'un daha fazla silah almaya geldiğini söyler ve kızarıp gerginleşerek Vin'e bir mendil verir, ardından koşarak uzaklaşır. Sazed daha sonra Vin'e bunun genç bir erkeğin bir hanımefendiyle ciddi olarak ilgilenmek istediğinin işareti olduğunu açıklar.",
			},
			'tfe-24': {
				title: "Clubs'da Gece Yarısı",
				description:
					"Dikiz, ekip görevin durumunu tartışırken Clubs'ın dükkânında Kelsier, Ham ve Clubs ile gece yarısı içki içer.",
			},
			'tfe-26': {
				title: 'İdamlar',
				description:
					"Dikiz, Çeşme Meydanı'ndaki idamları duyurmak için Clubs'ın dükkânına dalar. Ekiple birlikte meydana gider ve skaa kadın ve çocukların vahşice alenen idamını, kanlarının çeşmeye boşaltılmasını izler.",
			},
			'tfe-32': {
				title: 'Çatıda Keşif',
				description:
					"Dikiz, Vin ile birlikte Clubs'ın dükkânının üzerindeki çatıdan keşif yapar ve ona kalay kullanma hileleri öğretir. Bunun sadece duyuları güçlendirmekle ilgili olmadığını, neyin önemli olduğunu ayırt edip geri kalanla dikkatinin dağılmaması gerektiğini açıklar.",
			},
			'tfe-33': {
				title: 'Görevi Başında Kalaygöz',
				description:
					"Ekip Çeşme Meydanı'na gittiğinde Dikiz, Lord Renoux ile birlikte idam arabalarından birinde görülür — Nezaret tarafından yakalanmıştır.",
			},
			'tfe-34': {
				title: 'Fedakârlığa Tanıklık',
				description:
					"Dikiz, kalabalığın arasından Kelsier'ın Çeşme Meydanı'nda savaşıp ölmesini izler — hayatının geri kalanını şekillendirecek bir olay. Hathsin Firarisinin fedakârlığı, Dikiz'in bir davaya hizmet etmenin ne anlama geldiği konusundaki anlayışını dönüştürür.",
			},
			'tfe-38': {
				title: 'Devrim',
				description:
					'Dikiz, son devrim sırasında ekiple birlikte savaşır ve Luthadel sokaklarında skaa ayaklanmasının koordinasyonuna yardım eder.',
			},
			'woa-6': { title: 'Büyüyen Gözcü', description: 'Dikiz keşif görevlerinden döner.' },
			'woa-11': {
				title: 'Ekip Toplanıyor',
				description: "Dikiz, Cett'in ikinci ordusu geldikten sonra ekipte.",
			},
			'woa-13': { title: 'Savaş Konseyi', description: "Dikiz, Elend'in savaş konseyine katılır." },
			'woa-20': {
				title: 'Konseyde',
				description: 'Dikiz, Straff ile pazarlık planlarının tartışıldığı yerde.',
			},
			'woa-23': {
				title: "Sazed'in Dönüşü",
				description: "Dikiz, Sazed'in koloss ordusu raporunda orada.",
			},
			'woa-25': {
				title: 'Alışveriş Refakatçisi',
				description: "Dikiz isteksizce Vin'e alışverişte eşlik eder.",
			},
			'woa-44': { title: "Vin'i Aramak", description: "Dikiz, Elend ve Hammond'a katılır." },
			'woa-49': {
				title: 'Sürgünler',
				description: "Dikiz, Teneke Kapı'dan Vin ve Elend ile ayrılır.",
			},
			'woa-50': {
				title: 'Siste Bir Şey',
				description: 'Dikiz grupta takip edildiklerini ilk hissedendir.',
			},
			'woa-51': {
				title: 'Beş Takipçi',
				description: "Dikiz beş adam tespit eder. Sazed'in sırrını açıklar.",
			},
			'woa-52': { title: 'Geri Dönüş', description: 'Dikiz, Elend ile kuşatılmış şehre döner.' },
			'woa-56': {
				title: 'Terris Mültecileri',
				description: "Dikiz'in gelişi sis hayaletlerini dağıtır.",
			},
			'woa-57': {
				title: 'Şehir İçinde',
				description: "Dikiz mültecilerle girer ve Vin'le buluşur.",
			},
			'woa-58': { title: 'Mağara', description: "Dikiz, Kredik Shaw'un altındaki mağaraya iner." },
			'hoa-14': {
				title: 'Teneke Göz',
				description: "Suçlulukla Dikiz sürekli teneke yakar. Urteau'nun kuru kanallarında gezinir.",
			},
			'hoa-14.2': {
				title: 'Yurttaşın Konseyi',
				description: "Dikiz, Quellion'un toplantılarını izler.",
			},
			'hoa-16': {
				title: 'Zulme Tanık',
				description: "Dikiz, Quellion'un muhafızlarının soyluları yakmasını izler.",
			},
			'hoa-16.2': {
				title: 'Kalabalıkta Bıçaklanma',
				description: 'Dikiz, Beldre ile konuşur. Keşfedilir ve kılıçla delinir.',
			},
			'hoa-19': {
				title: 'Alevlerdeki Ses',
				description: 'Kelsier olduğunu iddia eden bir ses onu allomantik şişeye yönlendirir.',
			},
			'hoa-23': {
				title: 'Ateşli Rüyalar',
				description: "Dikiz, Clubs'ın onu evlat edindiği günü yeniden yaşar.",
			},
			'hoa-26': {
				title: 'Gece Söylentileri',
				description: "Dikiz, Kelsier'in adamı olduğuna dair söylentiler duyar.",
			},
			'hoa-29': {
				title: 'Gizli Göl',
				description: "Dikiz, Sazed'i terk edilmiş binaya ve yeraltı gölüne götürür.",
			},
			'hoa-31': {
				title: 'İnanç Meselesi',
				description: "Dikiz, Sazed'e Kelsier'in onu koruduğuna inandığını söyler.",
			},
			'hoa-35': {
				title: 'Durn ile Yüzleşme',
				description: "Dikiz muhbiri sorgular. Kelsier'in sesi Quellion'u takip et der.",
			},
			'hoa-38': { title: 'Gizli Çıkış', description: 'Dikiz, on mahkûmdan dokuz kafatası bulur.' },
			'hoa-41': {
				title: 'Alevlerden Sağ Kalan',
				description: 'Dikiz bir kızı ateşten kurtarır. Halk ona bu adı verir.',
			},
			'hoa-46': { title: "Beldre'nin Bahçesi", description: 'Dikiz öldürmeyi reddeder.' },
			'hoa-46.2': {
				title: 'Kanal Restorasyonu',
				description: "Dikiz, Sazed'den kanallara su döndürmesini ister.",
			},
			'hoa-49': {
				title: "Beldre'nin Yalvarışı",
				description: 'Beldre, kardeşini öldürmemesi için yalvarır.',
			},
			'hoa-53': { title: 'Sözler ve Planlar', description: 'Dikiz, şehri kurtarmaya söz verir.' },
			'hoa-53.2': { title: 'Meyhane Turu', description: 'Dikiz itibar kazanır.' },
			'hoa-56': { title: 'Son Plan', description: "Dikiz, Quellion'u ifşa etme planı yapar." },
			'hoa-58': {
				title: 'Urteau Kahramanı',
				description: 'Dikiz çivileri söker ve yanan binaya dalar.',
			},
			'hoa-62': { title: 'Zaferin Bedeli', description: 'Dikiz hastanede ağır yanıklarla yatar.' },
			'hoa-64': { title: 'Çelik Mesaj', description: 'Dikiz, Vin için çeliğe uyarı kazır.' },
			'hoa-73': { title: 'Mağaralara', description: 'Dikiz herkese sığınmalarını söyler.' },
			'hoa-83': {
				title: 'Yeni Dünya',
				description:
					"Dikiz, Sazed'in yeniden yarattığı dünyaya çıkar. Sazed onu Sissoylu yapmıştır.",
			},
		},
		marsh: {
			...enData.movements.marsh,
			// ── The Final Empire ───────────────────────────────────────────
			'tfe-7': {
				title: 'İsteksiz Kardeş',
				description:
					"Marsh, Clubs'ın Dükkânı'na gelir — Kelsier'ın ağabeyi ve kendi başına bir isyan lideri. İsteksizce ekibin planına katılır.",
			},
			'tfe-10.2': {
				title: 'Depo Mitingi',
				description:
					"Marsh, ekiple birlikte gizli depo mitingine katılır ve kardeşi Kelsier'ın toplanmış skaa işçilere devrim vaaz etmesini izler.",
			},
			'tfe-20': {
				title: "Vin'e Öğretmek",
				description:
					"Marsh, Fellise'deki Renoux mülküne gelir ve Vin'e Arayıcılık'ı öğretir — metal yakan diğer Allomantikleri algılamak için tunç kullanmak, türünü belirlemek ve Siskanlar ya da Sissoylular nasıl ayırt edilir. Ayrıca Allomansi hakkında genel bilgiler verir. Bakır ve Dumancıların Allomantik dalgaları nasıl gizleyebildiğini de öğretir.",
			},
			'tfe-27': {
				title: 'Nezaret Sızması',
				description:
					"Marsh, Dönemeçler'deki terk edilmiş bir binada Kelsier ve Vin ile buluşur; Sorgu Kantonu'ndan düşük rütbeli bir Obligatörün dövmelerini taşımaktadır. Nezaret'e gerçekten sızmıştır. Nezaret'in skaa bölgelerine Dumancılar tarafından gizlenen sürekli Teskin altında Teskinciler yerleştirdiğini ortaya koyar. Ayrıca Sorgucuların yaşlılıktan ölebileceğini doğrular.",
			},
			'tfe-30': {
				title: 'Kaybolma',
				description:
					"Marsh sessizleşir, iletişimi kesilir ve Sorgu Kantonu'nun en derin katmanlarında kaybolur. Ekip en kötüsünden korkar.",
			},
			'tfe-32': {
				title: 'Ceset',
				description:
					"Kelsier ve Vin, Marsh'ın cesedini bulur — tüm kanı boşaltılmış, cansız bir kabuk. Daha sonra Clubs'ın dükkânında bulunan mektubu, Sorgucuların muhtemelen onu bulacağını açıklar. Ekip yas tutar. Ama buldukları parçalanmış ceset göründüğü gibi değildir.",
			},
			'tfe-38': {
				title: 'Sorgucu',
				description:
					"Marsh, Kredik Shaw'a yapılan son saldırı sırasında ortaya çıkar — hayatta, on bir metal çiviyle dönüşmüş: ikisi gözlerinden, sekizi göğsünden, biri arkasından onları birbirine bağlayan. Sorgucu Kar'ı boynundan bir çivi çekerek öldürür ve diğer tüm Sorgucuları öldürdüğünü açıklar.",
			},
			'tfe-39': {
				title: 'On Bir Çivi',
				description:
					"Marsh, hayatta kalışını ve dönüşümünü anlatır. Kandralar artık Vin'i efendileri olarak görür.",
			},
			'woa-7': {
				title: 'Kabilesia Rehber',
				description: "Marsh, Sazed'e Seran Kabilesi'na rehberlik teklif eder.",
			},
			'woa-9': { title: 'Sazed ile Yolculuk', description: 'Marsh giderek dengesizleşir.' },
			'woa-12': { title: 'Terk Edilmiş', description: "Marsh, Sazed'i Kabilesi'nde terk eder." },
			'woa-57': {
				title: "Harap'ın Piyonu",
				description: "Marsh, Sazed'i Kredik Shaw'da duvara fırlatır.",
			},
			'woa-58': { title: 'Yere Serilmiş', description: "Hammond, Marsh'ın kafatasına vurur." },
			'hoa-0': {
				title: 'Sorgucu Yaratmak',
				description: "Marsh, Tathingdwen'de karanlık Hematurji ritüelleri gerçekleştirir.",
			},
			'hoa-6': {
				title: 'Kolossları Yönetmek',
				description: "Marsh, Harap'ın ordularını komuta eder.",
			},
			'hoa-13': {
				title: "Harap'ın Taşı",
				description: 'Marsh boyun eğmiş gibi yapmaya karar verir.',
			},
			'hoa-34': {
				title: 'Tyrian Yakınında',
				description: 'Marsh, mahkûmlardan Hematurjik çiviler yapar.',
			},
			'hoa-42': {
				title: "Penrod'u Çivilemek",
				description: "Marsh, Kral Penrod'un kalbine tunç çivi saplar.",
			},
			'hoa-63': {
				title: 'Vin ile Yüzleşme',
				description: 'Yomen sadece yedi atiyum küresi olduğunu açıklar.',
			},
			'hoa-65': {
				title: 'Atiyum Talep Etmek',
				description: "Vin, Marsh'ın şişesini çalar ve çiviyi alnına saplar.",
			},
			'hoa-69': {
				title: 'Habercinin Akıbeti',
				description: "Marsh, Dikiz'in çelik uyarısını taşıyan Goradel'i öldürür.",
			},
			'hoa-72': {
				title: 'Küpe',
				description: "Marsh, Vin'e işkence eder. Küpeyi fark eder ve çıkarır.",
			},
			'hoa-73': {
				title: 'Boyun Eğmemiş',
				description: "Vin, Marsh'ın göz çivisini çeker ama öldürmez.",
			},
			'hoa-81': {
				title: "Elend'i Öldürmek",
				description: "Marsh, Elend'e saldırır. Vin Harap'ı yok ettiğinde kontrol kaybolur.",
			},
		},
		sazed: {
			...enData.movements.sazed,
			// ── The Final Empire ───────────────────────────────────────────
			'tfe-9': {
				title: 'Terris Kâhyası',
				description:
					"Sazed, Vin'in öğretmeni ve kâhyası olarak Fellise'deki Lord Renoux'nun mülküne gelir; ona görgü kuralları, dans ve davranış öğretir. Vin'e Trelagizm'den — ona sunduğu beşinci din — bahseder ve sorulduğunda 562 tane daha bildiğini itiraf eder.",
			},
			'tfe-10.2': {
				title: 'Depo Mitingi',
				description:
					'Sazed, Kelsier ve Vin ile birlikte gizli depo mitingine katılır ve Hathsin Firarisinin toplanmış skaa işçilere devrim vaaz etmesini izler.',
			},
			'tfe-12': {
				title: 'Balodaki Koruyucu',
				description:
					"Sazed, Vin'e kâhyası olarak Venture Kalesi'ndeki ilk balosuna eşlik eder ve o soylu toplumuna sızarken onu gözetir.",
			},
			'tfe-13': {
				title: "Fellise'de Brifing",
				description:
					"Sazed, Vin ve Kelsier ile birlikte Fellise'deki Lord Renoux'nun mülküne döner; Vin'in ilk balosunun sonuçlarını değerlendirir ve sonraki adımları planlar.",
			},
			'tfe-15': {
				title: "Vin'i Kurtarmak",
				description:
					"Sazed, Kredik Shaw'daki yaralanmasından sonra Vin'i kurtarmak ve ameliyat yapmak için Clubs'ın dükkânına getirir. Ayrıca keşif görevi sırasında ele geçirilen Khlennice (Lord Hükümdar'ın dili) yazılmış bir kitabı inceler.",
			},
			'tfe-16': {
				title: "Fellise'ye Dönüş",
				description:
					"Clubs'ın dükkânında Vin'in durumunu stabilize ettikten sonra Sazed, Fellise'deki Renoux mülküne döner.",
			},
			'tfe-17': {
				title: 'Khlennice Kitabı Çevirisi',
				description:
					"Fellise'deki Renoux mülkünün kütüphanesinde Sazed, Vin'in Kredik Shaw keşif görevi sırasında ele geçirdiği Khlennice kitabı çevirmek için çalışır.",
			},
			'tfe-18': {
				title: "Elariel Kalesi'nde Koruyucu",
				description:
					"Sazed, Terris kâhyası olarak Vin'e Elariel Kalesi'ndeki baloya eşlik eder ve o soylu sarayında gezinirken onu gözetir.",
			},
			'tfe-19': {
				title: 'İstihbarat Alışverişi',
				description:
					"Sazed, Kelsier Dikenyolu'ndan döndüğünde Renoux Malikanesi'ndedir. Soylu haneleri ve isyanın ilerleyişi hakkında istihbarat paylaşırlar; Kelsier Vin'e Elend'den uzak durması gerektiği konusunda ders verir.",
			},
			'tfe-22': {
				title: "Ferusimya'nin Sırları",
				description:
					"Renoux mülkünde Sazed, Vin ile Lord Hükümdar'ın günlüğündeki Terrisli hakkında konuşur. Ferusimya'nin sırlarını açıklar ve Sırdaşların Terris dininin kaybedilmesinden sonra her şeyi hatırlamak amacıyla nasıl kurulduğunu anlatır. Günlükten kendi halkı hakkında da yeni şeyler öğrenir — toprağın bir zamanlar yeşil ve verimli olduğunu, donmuş toprak bir tundra olmadığını.",
			},
			'tfe-23': {
				title: "Hasting Kalesi'nde Koruyucu",
				description:
					"Sazed, Terris kâhyası olarak Vin'e Hasting Kalesi'ndeki baloya eşlik eder. O söylentiler yayıp soylularla konuşurken koruyucusu olarak bekler.",
			},
			'tfe-27': {
				title: "Marsh'ın Mesajı",
				description:
					"Sazed, Marsh'tan haberler ve nerede buluşulacağına dair talimatlar içeren bir mektupla Clubs'ın dükkânına döner. Ayrıca Lord Hükümdar'ın günlüğünün çevirilerini de getirir.",
			},
			'tfe-28': {
				title: "Lekal Kalesi'nde Koruyucu",
				description:
					"Sazed, Terris kâhyası olarak Vin'e Lekal Kalesi'ndeki baloya eşlik eder. O Hane Savaşlarını ateşlemek için çalışıp Elend ile konuşurken onu bekler.",
			},
			'tfe-29': {
				title: 'Ferusimya Dersleri',
				description:
					"Renoux mülkünde Sazed, Vin'e günlüğün son çevirilerini sunar. Ferusimyayı daha detaylı açıklar ve Vin onun bir kalayzihnini yakmayı dener. Daha sonra Sazed, Kelsier Marsh'ın sağladığı detaylı Luthadel savunma haritasını incelerken ekibe katılır. O gece uyuyamayan Kelsier, Sazed'den bildiği dinlerden bazılarını anlatmasını ister.",
			},
			'tfe-30': {
				title: "Venture Kalesi'nde Koruyucu",
				description:
					"Sazed, son hane balosunda Vin'e Venture Kalesi'ne eşlik eder. Partiye katılanlar ittifakları kesinleştirmektedir ve Lady Valette soğuk karşılama alır. Sazed, Vin Elend'e yönelik suikast planını keşfedip Shan Elariel ile savaşmadan önce balodan erken ayrılır.",
			},
			'tfe-31': {
				title: "Vin'in Yaralarını Sarmak",
				description:
					"Sazed, Shan Elariel ve Elariel suikastçılarıyla yaptığı dövüşten sonra hırpalanmış halde gelen Vin'in yaralarını Clubs'ın dükkânında sarar. Vin akşamın olaylarını anlatırken dinler.",
			},
			'tfe-33': {
				title: 'Yedek Sığınak',
				description:
					"Sazed, Kelsier Hathsin Çukurlarını yok ettikten sonra Clubs'ın dükkânı yakınlarındaki yedek sığınakta ekiple birliktedir. Vin, Sazed ile On Birinci Metal hakkında konuşur. Daha sonra skaalar Çeşme Meydanı'nda idama getirildiğinde ve Dikiz bir mahkûm arabasında bulunduğunda, Kelsier Sorgucu ile savaşırken Sazed sığınakta kalır.",
			},
			'tfe-35': {
				title: "Vin'i Teselli Etmek",
				description:
					"Sazed, Kelsier'ın ölümünden sonra yedek sığınakta Vin ile birliktedir. Vin, Kelsier'ın onu terk ettiğine öfkelenirken teselli edici sözler sunar. Ekip, Kelsier'ın bedenini taşıyan kandra'yı görmek için depoya gittiğinde geride kalır.",
			},
			'tfe-37': {
				title: 'Serbest Bırakılan Ferusimyacı',
				description:
					"Sazed, Kredik Shaw'daki Vin'in hücresine getirilir. Kasları normal boyutunun iki katına şişerken söndüğü görülür ve depolanmış Ferusimyak güç açığa çıkararak kapıyı bir darbeyle açar.",
			},
			'tfe-38': {
				title: 'İmparatorluğun Çöküşü',
				description:
					"Sazed, Vin için bir metal şişesiyle Kredik Shaw'daki son yüzleşmeye gelir. Lord Hükümdar'ın yenilişine ve Vin'in Lord Hükümdar'ın bileziklerini çekip yaşının dramatik bir şekilde artmasına tanık olur.",
			},
			'tfe-39': {
				title: 'Tiranı Anlamak',
				description: "Sazed, Lord Hükümdar'ın hem Ferusimyacı hem Allomanser olduğunu açıklar.",
			},
			'woa-7': {
				title: "Marsh'ın Dönüşü",
				description: "Sazed özgür skaa'ya öğretmeye devam eder. Marsh belirir.",
			},
			'woa-9': {
				title: 'Kabilesia Yolculuk',
				description: "Sazed ve Marsh, Seran Kabilesi'na yolculuk eder.",
			},
			'woa-12': {
				title: 'Tabletleri Deşifre Etmek',
				description: "Sazed, Kwaan'ın uyarısını keşfeder: kehanetler değiştirilmiş.",
			},
			'woa-15': {
				title: 'Siste Ölüm',
				description: 'Sazed, insanların siste açıklanamaz şekilde öldüğü köyler bulur.',
			},
			'woa-19': {
				title: 'Koloss Ordusu',
				description: 'Sazed yirmi bin kolossla karşılaşır. Yakalanır.',
			},
			'woa-22': { title: "Luthadel'e Dönüş", description: 'Sazed kritik haberlerle döner.' },
			'woa-23': {
				title: 'Üçüncü Ordu',
				description: 'Sazed, Jastes Lekal komutasındaki kolossları rapor eder.',
			},
			'woa-30': {
				title: 'Yazıtları Kopyalamak',
				description: 'Vin, sisin Hiçlik olduğunu öne sürer.',
			},
			'woa-36': { title: 'Depoda Sığınak', description: 'Sazed mültecileri teselli eder.' },
			'woa-37': { title: 'Hiçlik Tartışması', description: 'Tindwyl arzusunu ifade eder.' },
			'woa-40': {
				title: 'Kehaneti Tartışmak',
				description: 'Sazed ve Tindwyl kehanet versiyonlarını karşılaştırır.',
			},
			'woa-41': { title: 'Değiştirilmiş Kehanetler', description: 'Elend tavsiye ister.' },
			'woa-45': {
				title: 'Yırtık Köşeler',
				description: 'Tindwyl transkripsiyonun yırtıldığını keşfeder.',
			},
			'woa-46': { title: 'Kaçış Planı', description: 'Sazed gizlice ekibi toplar.' },
			'woa-49': {
				title: 'Gidişlerini İzlemek',
				description: "Sazed, Elend'in grubunun kaçışını izler.",
			},
			'woa-50': {
				title: 'En Kötüsüne Hazırlanmak',
				description: 'Sazed metal zihinlerini doldurur.',
			},
			'woa-51': {
				title: 'Kolosslar Saldırıyor',
				description: "Sazed, Çelik Kapı'dan saldırıyı izler.",
			},
			'woa-52': {
				title: 'Kutsal Birinci Tanık',
				description: "Sazed Çelik Kapı'yı savunur. Halk ona bu adı verir.",
			},
			'woa-53': { title: "Çelik Kapı'yı Savunmak", description: 'Teneke Kapı düşmüştür.' },
			'woa-54': { title: "Tindwyl'i Aramak", description: "Sazed, Tindwyl'in cesedini bulur." },
			'woa-55': { title: 'Komutayı Almak', description: "Vin, Sazed'i şehrin komutanı yapar." },
			'woa-57': {
				title: 'Marsh ile Dövüş',
				description: 'Sazed, Kutsal Birinci Tanık olduğunu fark eder.',
			},
			'woa-58': {
				title: 'Sorgucudan Sağ Kalmak',
				description: "Marsh, Sazed'in kaburgalarını kırar ama o iyileşir.",
			},
			'woa-59': { title: 'Kuyuda Çok Geç', description: 'Vin gücü zaten serbest bırakmıştır.' },
			'woa-60': {
				title: 'Tüm İnancın Kaybı',
				description: 'Sazed, tüm dinlere olan inancını kaybeder.',
			},
			'hoa-4': {
				title: 'Güney Diplomasisi',
				description: 'Sazed, Breeze ile antlaşma müzakere eder.',
			},
			'hoa-8': {
				title: 'Orduya Giderken',
				description: "Sazed ve Breeze, Elend'in ordusuna katılır.",
			},
			'hoa-10': { title: 'Orduyla Buluşma', description: 'Sazed ve diğerleri orduya yetişir.' },
			'hoa-12': { title: 'Savaş Konseyi', description: "Sazed, Elend'in konseyine katılır." },
			'hoa-18': {
				title: 'Kuzeye Yolculuk',
				description: "Sazed, Breeze, Allrianne ve Goradel Urteau'ya gider.",
			},
			'hoa-18.2': {
				title: 'Terrisliler Arasında',
				description: "Sazed, Hathsin Çukurları'nda yaşlılara danışır.",
			},
			'hoa-22': {
				title: 'Terris Anomalisi',
				description: 'Hiçbir Terrisli sis hastalığına yakalanmamıştır.',
			},
			'hoa-25': { title: 'Terrislilerden Ayrılmak', description: 'Sazed kuzeye devam eder.' },
			'hoa-29': {
				title: 'Yurttaş Tarafından Çağrılmak',
				description: "Sazed ve diğerleri Urteau'ya varır.",
			},
			'hoa-29.2': {
				title: 'Yeraltı Gölü',
				description: "Dikiz, grubu Lord Hükümdar'ın deposuna götürür.",
			},
			'hoa-31': {
				title: 'Su Yönlendirme',
				description: "Quellion'u devirmenin yollarını tartışırlar.",
			},
			'hoa-38': {
				title: 'Alevlerden Sağ Kalan',
				description: 'Sazed bunun Dikiz olduğunu henüz bilmez.',
			},
			'hoa-41': { title: 'Sağ Kalanın Kimliği', description: "Sazed, Dikiz'i tanır." },
			'hoa-46': { title: 'Trelagizm ve Güven', description: 'Dikiz suyun geri dönmesini ister.' },
			'hoa-49': {
				title: 'Kanal Mühendisliği',
				description: 'Sazed kuru kanalları doldurmayı araştırır.',
			},
			'hoa-53': {
				title: "Dikiz'in Büyümesini İzlemek",
				description: "Sazed, Dikiz'in Beldre'ye hikayeler anlattığını duyar.",
			},
			'hoa-56': { title: 'İnanç İhtiyacı', description: 'Sazed neyi kaçırdığını fark eder.' },
			'hoa-50': {
				title: 'Mağara Keşfi',
				description: 'Sazed kanal doldurma mekanizmasını keşfeder.',
			},
			'hoa-58': {
				title: "Urteau'yu Kurtarmak",
				description: "Sazed, Dikiz'a cihazı öğretir. Dikiz şehri kurtarır.",
			},
			'hoa-59': { title: "Haberci'nin Yükü", description: "TenSoon gelir. Vin'i görmesi gerekir." },
			'hoa-62': {
				title: 'Haberci',
				description: "Sazed hastanede Dikiz'i bekler. TenSoon gerçeği açıklar.",
			},
			'hoa-66': { title: 'Eve Doğru', description: "Sazed, TenSoon'a binerek güneye gider." },
			'hoa-68': { title: 'Dünya Taşıyan', description: 'İlk Nesil ona bu adı verir.' },
			'hoa-71': { title: 'Güvenağılı', description: 'Sazed devasa atiyum deposunu bulur.' },
			'hoa-75': { title: 'Darbe', description: 'KanPaar darbe yapar. Sazed hapsedilir.' },
			'hoa-78': {
				title: 'TenSoon Tarafından Kurtarılmak',
				description: "TenSoon, Sazed'i kurtarır.",
			},
			'hoa-79': {
				title: 'Karar Başlıyor',
				description: 'Harap, kandraları Kutsamalar yoluyla kontrol eder.',
			},
			'hoa-80': { title: 'Güvenağılıi Savunmak', description: 'Sazed kapıyı mühürler. Elend girer.' },
			'hoa-81': {
				title: 'Bir Tanrının Bedeni',
				description: "Atiyum, Harap'ın bedenidir. Sis tarafından düşürülen askerler Kahin'dir.",
			},
			'hoa-82': {
				title: 'Çağların Kahramanı',
				description: 'Sazed iki Parçayı alır ve Uyum olur.',
			},
			'hoa-83': {
				title: 'Uyum',
				description: 'Sazed Uyum olarak yükselir. Dünyayı yeniden yaratır.',
			},
		},
		elend: {
			...enData.movements.elend,
			// ── The Final Empire ───────────────────────────────────────────
			'tfe-12': {
				title: 'Okuyan Soylu',
				description:
					"Elend Venture, kendi kalesindeki bir baloda balkonda yalnız duran Vin'i fark eder ve yanına gelir. Soyluluk dans edip entrika çevirirken Yadigâr Denemeleri'ni çıkarıp okuyarak Vin'i kızdırır.",
			},
			'tfe-18': {
				title: 'Valette ile Bir Akşam',
				description:
					"Elend, Elariel Kalesi'ndeki baloya katılır ve her zamanki gibi okuyarak Vin ile bir masada oturur. Elbisesini övünce Vin'in çenesi düşer.",
			},
			'tfe-23': {
				title: 'Mendil',
				description:
					"Elend, Hasting Kalesi'ndeki baloda Vin'i bulur. Vin ona bir skaa kadınla yatıp yatmadığını sorar. On üç yaşında babasının onu buna zorladığını ve kadının sonra öldürüldüğünü itiraf eder — ama bir daha asla yapmadığını söyler. Vin'e bir mendil verir, ona kur yapmak istediğinin işareti. Arkadaşlarıyla ayrıldıktan sonra Lord Hükümdar'ın hatalarını ve kuşaklarının bu konuda ne yapması gerektiğini tartışmak üzere bir kuleye çıkarlar.",
			},
			'tfe-28': {
				title: "Lekal Kalesi'nde Balo",
				description:
					"Elend, Lekal Kalesi'ndeki baloda Vin'i şaşırtır. Onu öpmek istediğini söyler ama Vin onun kendisini gerçekten tanımadığını ısrar eder. Bunun yerine yürüyüşe çıkarlar ve Elend, Venture Hanesi'nin servetinin tamamen Hathsin Çukurları'ndaki atiyum madenciliğinden geldiğini açıklar — bu sırrı ona tamamen güvenerek paylaşır. Ayrıca Tekiellerin Hasting Hanesi tarafından öldürüldüğünü belirtir ve Valette'i güvenliği için Luthadel'den ayrılmaya ikna etmeye çalışır.",
			},
			'tfe-28.2': {
				title: 'Babanın Çağrısı',
				description:
					"Elend, Venture Kalesi'ne döner ve babasının odasından gizlice geçmeye çalışır. Hiçbir şeyi kaçırmayan bir Kalaygöz olan Lord Straff Venture onu içeri çağırır. Straff, Elend'e ertesi gün Hasting Hanesi ve kızlarından biriyle yemek yemesi gerektiğini söyler çünkü Lord Tegas ile ittifak kurmayı planlamaktadır. Daha sonra Jastes gelir ve Lady Valette'in arabasının takip edildiğini açıklar — araba Fellise'ye sadece Terrisli kâhya içinde ulaşmış, Valette ortadan kaybolmuştur. Jastes onun başka bir haneden casus olduğuna ikna olmuştur. Atiyum madenciliği sırrını ifşa ettiğini fark eden Elend, babasına bir takas teklif eder: öğle yemeğine katılmak karşılığında Valette'i takip edecek birkaç casus.",
			},
			'tfe-30': {
				title: 'Venture Balosu',
				description:
					"Elend, balo sırasında Venture Kalesi'nde babasıyla yemek yemektedir. Vin onun dikkatini çeker ve bir yüzleşme yaşarlar. Elend, Vin'i inciten şeyler söyler, ancak Vin o akşam Elend'in hayatına yönelik bir suikast girişimi olacağını öğrendiğinde suikastçıları bulmak için sislerin içine fırlar. Akşam, Vin'in Elend'i öldürmek için gönderilen bir Sissoylu olan Lady Shan Elariel ile savaşıp onu öldürmesiyle kaosa döner. Karmaşada Elend sıvışmayı başarır.",
			},
			'tfe-31': {
				title: 'Casus Raporları',
				description:
					"Elend ve Jastes, Felt ile buluşur; Felt, Elend'in casuslarının Clubs'ın dükkânı ve içindekiler hakkında keşfettiği her şeyi anlatır. Felt ve Jastes ayrıldıktan sonra Venture muhafızları Elend'i babası Straff'a götürür; Straff, Shan Elariel'in Elend'i öldürmek için gönderilmiş bir Sissoylu olduğunu açıklar. Elend artık Venture Kalesi yakınlarında bir skaa hırsız grubunun faaliyet gösterdiğini — ve Valette'in onlarla bağlantılı olduğunu bilmektedir.",
			},
			'tfe-33': {
				title: 'İdam Arabaları',
				description:
					"Elend, Çeşme Meydanı'nda Renoux hizmetçilerinin bir idam arabasında hapsedildiğini görür. Valette diye bağırır ama onu kalabalıkta hiçbir yerde bulamaz.",
			},
			'tfe-34': {
				title: "Kelsier Elend'i Kurtarır",
				description:
					"Elend, Çeşme Meydanı'nda Renoux'nun kafesine ulaşır ve Valette'i sorar. Bir Sorgucu kafesin üzerine iner ve baltasıyla Elend'e vurmak üzeredir; Kelsier Sorgucuya saldırarak Elend'in hayatını kurtarır. Kelsier, Elend'e Valette'in iyi olduğunu haykırır ve Elend korumaları tarafından sürüklenerek uzaklaştırılır.",
			},
			'tfe-36': {
				title: "Venture Hanesi'nin Otoritesi",
				description:
					"Elend'in babası ona bir skaa isyanının başladığını söyler ve Luthadel'den kaçmak ister. Elend gitmeyi reddeder. Straff, Elend'in öldürülmesini umarak kabul eder ve ona Venture Hanesi otoritesini devreder. Elend, askerlerine karşılıklı savunma için Lekal Kalesi'ne güçlerini birleştirmelerini emreder. Ardından en iyi beş askerini onur muhafızı olarak alır ve skaa liderliğine teslim olmaya gider.",
			},
			'tfe-37': {
				title: "Vin'i Kurtarmak",
				description:
					"Elend, Dockson'a getirilmek için bazı skaalara altın teklif eder ve Venture Hanesi'nin isyana direnmeyeceğini, birlikte çalışmaları gerektiğini söyler. Daha sonra Elend ve altı asker, Vin'i kurtarmak için Kredik Shaw'a baskın yapar. Sır ortaya çıkmıştır — artık Vin'in bir Sissoylu olduğunu bilmektedir. Vin başını tutar ve onu öper, sonra Lord Hükümdar'ı öldürmeye gider.",
			},
			'tfe-38': {
				title: 'Filozof Kral',
				description:
					"Lord Hükümdar'ın ölümünün ardından Elend, düzen çağrısı yapan birleştirici bir ses olarak öne çıkar. Yeni ulus için bir hukuk düzeni taslağı hazırlamak üzere hem skaa hem de soylu liderlerle görüşmeye başlar.",
			},
			'tfe-39': {
				title: 'Yeni Kral',
				description:
					'Elend Venture kral olarak kabul edilir. Vin ve Elend birbirlerine sarılırlar.',
			},
			'woa-1': {
				title: 'Surdaki Kral',
				description: 'Elend, babasının ordusunun gelişini izler. Kuşatma başlar.',
			},
			'woa-3': { title: 'Yasaları Yazmak', description: 'Elend Meclis için öneriler hazırlar.' },
			'woa-5': { title: 'Bilgin Kral', description: 'Elend, Dockson ile lojistiği yönetir.' },
			'woa-6': {
				title: 'Balkondan İzlemek',
				description: "Elend, Vin'in Ham ile antrenmanını izler.",
			},
			'woa-10': { title: 'Meclis Konuşması', description: 'İkinci ordunun haberi gelir.' },
			'woa-11': { title: 'Surlarda Keşif', description: 'Kandra kemikleri bulunur.' },
			'woa-13': { title: 'Konsey Toplamak', description: 'Elend savaş konseyini toplar.' },
			'woa-14': { title: 'Kralın Eğitimi', description: "Tindwyl, Elend'i eğitir." },
			'woa-20': { title: 'Pazarlık Stratejisi', description: 'Allrianne Cett gelir.' },
			'woa-21': {
				title: "Allrianne'e Misafirperverlik",
				description: 'Elend misafirperverlik sunar.',
			},
			'woa-22': { title: 'Yönetimle Mücadele', description: 'Elend Meclis ile mücadele eder.' },
			'woa-23': { title: 'Üçüncü Ordu', description: 'Yirmi bin koloss hakkında rapor.' },
			'woa-26': { title: 'Straff ile Pazarlık', description: "Elend, Straff'ın kampına gider." },
			'woa-27': {
				title: 'Blöf ve Düşüş',
				description: 'Blöf başarılı olur. Meclis güvensizlik oyu verir.',
			},
			'woa-31': {
				title: 'Meclis Konuşması',
				description: "Elend, Penrod'u şansölye aday gösterir.",
			},
			'woa-32': {
				title: 'Yenilgiyi Kabul Etmek',
				description: 'Elend siyasi yenilgiyi kabul eder.',
			},
			'woa-34': { title: 'Strateji Çalışmak', description: "Vin, Zane'i çatıda bulur." },
			'woa-35': {
				title: 'Cett ile Akşam Yemeği',
				description: 'Cett atiyum karşılığında yemek teklif eder.',
			},
			'woa-36': {
				title: "Demoux'nun Sırrı",
				description: "Demoux, Hathsin Firarisi Kilisesi'ni yönetir.",
			},
			'woa-38': { title: 'Kral Seçimi', description: 'Suikastçı saldırır. Penrod kral seçilir.' },
			'woa-39': { title: 'Tahttan İndirilmiş', description: 'Elend perde arkasında çalışır.' },
			'woa-40': { title: "Vin'in Yanında", description: "Elend, Vin'in dokunuşundan irkilir." },
			'woa-41': { title: 'Tavsiye Aramak', description: "Elend, Sazed ve Tindwyl'i ziyaret eder." },
			'woa-43': { title: 'Saldırıdan Sonra', description: "Cett'in ordusu geri çekilir." },
			'woa-44': {
				title: "Luthadel'den Ayrılmak",
				description: 'Vin kuzeye gitmeleri gerektiğini söyler.',
			},
			'woa-45': { title: 'Aşk Tavsiyesi', description: "Elend ve Vin, Sazed'e danışır." },
			'woa-49': {
				title: 'Teneke Kapıdan Kaçış',
				description: "Elend, Vin ve Dikiz Luthadel'den ayrılır.",
			},
			'woa-50': { title: 'Kuzeyde Kamp', description: 'Dikiz siste takip hissedar.' },
			'woa-51': { title: 'Jastes ve Adalet', description: 'Elend eski dostunu idam eder.' },
			'woa-52': { title: 'Geri Dönüş', description: 'Elend çaresizce geri döner.' },
			'woa-54': {
				title: 'Savunmayı Yönetmek',
				description: 'Vin kontrol edilen kolosslarla gelir.',
			},
			'woa-55': {
				title: 'İmparator Elend',
				description: "Vin herkese Elend'i imparator olarak kabul ettirir.",
			},
			'woa-57': { title: 'Kuyuya İniş', description: "Sis hayaleti Elend'i deler." },
			'woa-58': { title: 'Ölümcül Yaralı', description: 'Elend mağara zemininde ölmektedir.' },
			'woa-59': {
				title: 'Dönüşmüş',
				description: "Vin, Elend'i lerasyum ile iyileştirir — Sissoylu olur.",
			},
			'woa-60': {
				title: 'Sissoylu İmparator',
				description: 'Elend birlikte hayatta kalacaklarına söz verir.',
			},
			'hoa-1': {
				title: 'İmparator ve General',
				description: 'Elend birleştirme seferine liderlik eder.',
			},
			'hoa-3': { title: 'Vetitan Deposu', description: 'Elend ve Vin depoyu açar.' },
			'hoa-5': { title: "Fadrex'e Yürüyüş", description: "Elend orduyu Fadrex'e götürür." },
			'hoa-8': {
				title: 'Sis Bağışıklığı',
				description: 'Elend: bağışıklık maruz kalmayı gerektirir.',
			},
			'hoa-10': { title: 'Ekibin Toplanması', description: 'Sazed ve diğerleri orduya katılır.' },
			'hoa-12': { title: 'Savaş Konseyi', description: '"Kelsier ne yapardı?"' },
			'hoa-21': { title: 'Verileri Analiz Etmek', description: 'Vin yüzde on altıyı bulur.' },
			'hoa-25': { title: "Fadrex'e Varış", description: "Elend, Vin'e eşlik etmeyi teklif eder." },
			'hoa-28': { title: 'Cesur Plan', description: "Elend, Vin'in planını destekler." },
			'hoa-30': { title: "Fadrex'te Balo", description: 'Elend ve Vin balodadır.' },
			'hoa-35': { title: 'Fadrex Kuşatması', description: 'Elend kuşatmayı yönetir.' },
			'hoa-37': {
				title: 'Kolosslar Hakkındaki Gerçek',
				description: 'Kolosslar insanlardan yapılır.',
			},
			'hoa-40': { title: 'Hematurji Keşfedildi', description: 'Üçüncü metalik sanat.' },
			'hoa-43': { title: 'İkinci Balo', description: "Elend ve Vin Nezaret'taki baloda." },
			'hoa-55': { title: 'Vin İçin Endişe', description: 'Elend, Vin dönmeyince endişelenir.' },
			'hoa-62': { title: 'Vin ile Yeniden Birleşme', description: "Vin Fadrex'ten döner." },
			'hoa-65': { title: "Luthadel'e Koşu", description: "Elend orduyu Luthadel'e götürür." },
			'hoa-67': { title: 'Fadrex İçinde', description: 'Koloss ordusu dışarıda toplanır.' },
			'hoa-72': {
				title: 'Çukurlara Yürüyüş',
				description: "Elend orduyu Hathsin Çukurları'na götürür.",
			},
			'hoa-73': { title: 'Çukurlarda Kamp', description: 'Yüz binlerce mülteci.' },
			'hoa-76': { title: 'Savaşa Hazırlık', description: 'Elend orduyu hazırlar.' },
			'hoa-79': { title: 'Son Saldırı', description: 'Elend Kahinlere hitap eder.' },
			'hoa-80': {
				title: 'Güvenağılı Odasında',
				description: "Elend, Sazed'i atiyumu savunurken bulur.",
			},
			'hoa-81': {
				title: "Elend'in Son Savaşı",
				description: "Kılıcı Marsh'ın boynunu deler. Gülümseyerek ölür.",
			},
		},
		vin: {
			...enData.movements.vin,
			// ── The Final Empire ───────────────────────────────────────────
			'tfe-1': {
				title: 'Sokak Serserisi',
				description:
					"Vin, ekip lideri Camon'la görüşmeye çağrılır; Camon ona sert davranır. Vin bilinçsizce Şansını — bir tür Allomantik Teskin — kullanarak onu sakinleştirir. Camon, yeni sözleşmeler arayan umutsuz bir soylu Lord Jedue rolünü oynar ve Çelik Nezaret'i dolandırmaya hazırlanır. Vin, Obligatör Prelan Laird'in Camon'un yakarışlarını reddetmemesi için Şansını kullanır.",
			},
			'tfe-2': {
				title: 'Nezaret Dolandırıcılığı',
				description:
					"Camon, Lord Jedue olarak Vin'i Maliye Kantonu'na götürür. Vin, Şansını Yüksek Prelan üzerinde kullanır ve Camon'a üç bin boksing verilir. Kelsier ve Dockson bekleme odasında Vin'in Allomantik dalgalarını fark eder. Daha sonra Camon'un maiyetini takip eden bir Çelik Sorgucu görürler.",
			},
			'tfe-4': {
				title: 'İşe Alınmak',
				description:
					"Kelsier, Clubs'ın marangoz dükkânında ekibe Son İmparatorluk'u devirme planını sunar. Ekip kabul eder — dışarı çıkan Clubs hariç, o da sonunda geri döner. Kelsier diğerlerine Vin'in bir Sissoylu olduğunu açıklar, ardından On Birinci Metali anlatır ve gösterir.",
			},
			'tfe-7': {
				title: 'Sissoylu Eğitimi',
				description:
					"Kelsier, Vin'i ilk gece eğitimi için dışarı çıkarır ve ona bir Sissoylu pelerini verir. Sekiz temel metali öğretir — kalay, lehim, demir, çelik, çinko, pirinç, bakır ve tunç — gece Luthadel surlarında sona erer.",
			},
			'tfe-8': {
				title: 'Renoux Mülkü',
				description:
					"Vin ve Kelsier, Luthadel surlarını aşıp gece vahşi doğaya çıkar; Vin ilk kez bir sishortlağı ile karşılaşır. Ana yolda Sazed bir arabayla bekler ve onları Fellise'e götürür. Yolda Kelsier, Vin'e üç bin boksing'i ve ekipten ayrılma şansını sunar. Vin parayı alır ama işlerin nasıl sonuçlanacağını görmek istediği için kalır. Lord Renoux'nun mülkünde Renoux, Vin'in favori bir kuzenin kızı Lady Valette rolünü oynamasını önerir.",
			},
			'tfe-9': {
				title: 'Sazed ile Eğitim',
				description:
					"Vin ve Kelsier, Renoux mülkünde bir eğitim maçı yapar. Ardından Vin saçını kestirir ve Sazed tarafından soylu kılığı konusunda sınanır; Sazed ayrıca ona Trelagizm'den bahseder — Vin'e sunduğu beşinci din. Kelsier ve Sazed daha sonra Vin'in ilerlemesini özel olarak konuşur; Kelsier, Vin'in hafta sonunda Venture Kalesi'ndeki baloya katılacağını ilan eder.",
			},
			'tfe-10': {
				title: 'Ekibe Dönüş',
				description:
					"Vin, metalleri ekibin Siskanlarından öğrenmek için Fellise'den Luthadel'e döner; Breeze ona Teskin'i öğreterek başlar. Hammond gelir ve Kelsier'ın konuşma vermesini beklerken Son İmparatorluk'u devirmenin ahlakını tartışır.",
			},
			'tfe-10.2': {
				title: 'Depo Mitingi',
				description:
					"Vin, Kelsier'ın toplanmış skaa işçilere devrim vaaz ettiği depo bölgesindeki gizli mitinge katılır; Breeze ve Teskincileri ile Körükçüleri kalabalığı manipüle eder. Ardından Kelsier, Clubs'ın dükkânında bir ilerleme toplantısı yapar. Vin ve Sahibinisiz Marsh hakkında konuşur. Toplantı, Hammond'un askerlerinden birinin Çelik Nezaret'in Camon'un eski inini keşfettiğini bildirmesiyle sona erer.",
			},
			'tfe-11': {
				title: "Camon'un İni Katliamı",
				description:
					"Vin ve ekip yıkılmış ini araştırır, her yerde cesetler bulur. Aralarında Vin, Ulef'i fark eder — birisi göğüs kafesini çıplak ellerle parçalamıştır. Sazed bir kenarda Cazzi dininin duasını okur. Milev'in cesedi sandalyeye bağlı, açıkça işkence görmüş halde bulunur. Ayrıldıktan sonra Kelsier, Camon'un cesedini ağzından geçirilmiş bir kancaya asılmış, bilekleri ve ayak bilekleri bağlı, bedeni işkence görmüş halde bulur.",
			},
			'tfe-12': {
				title: "Venture Kalesi'nde İlk Balo",
				description:
					"Vin, Sazed'in arabayı sürdüğü ilk balosuna Venture Kalesi'ne gider. Kelsier yolda arabaya uğrar, tavsiye verir, sonra sislerin içine geri atlar. Vin gelir ve Lady Valette Renoux olarak tanıtılır. Yemekte odanın karşısında babasını görür — Reen küçükken onu göstermişti. Çeşitli soylulardan gelen dans tekliflerini reddeder, sonra üst katta balkonda ara verir; burada Elend Venture ile ilk konuşmasını yapar ve bu durum Sazed'i şok eder.",
			},
			'tfe-13': {
				title: "Fellise'ye Dönüş",
				description:
					"Sazed, Renoux mülkünde Vin'e Elend ile etkileşimini sorar. Vin'in gerçek kişiliği ortaya çıkmaya başlıyor — ne çekingen ekip üyesi ne de Lady Valette. Kelsier, Vin'in babasının baloda olduğunu öğrenir, sonra sislerin içine çıkar.",
			},
			'tfe-14': {
				title: "Kredik Shaw'a Giriş",
				description:
					"Kelsier, Vin'i Kredik Shaw'a götürür ve Lord Hükümdar'ın üç günde bir ziyaret ettiği binaya doğru savaşarak ilerlerler. Vin ilk kez öldürür. Üç Çelik Sorgucu üzerlerine gelir. Kendisine İtilen sivri metal üçgenlerden korunmak için Vin rastgele deri ciltli bir kitap yakalar. Atiyum yakarak geçici olarak kaçmayı başarır ama bir Sorgucu obsidyen bıçaklı bir baltayla böğrüne saplar. Vin kitabı sımsıkı tutarak Kredik Shaw'dan kaçar ama bilincini yitirirken takip eden Sorgucuyu bir şey oyalar ve onu koruyucu bir kucaklamaya alır — bu Kelsier değildi.",
			},
			'tfe-15': {
				title: 'Yaralı',
				description:
					"Ekip, Kelsier'ın Vin'i Kredik Shaw'a götürme kararını tartışır. Onu aramaya çıkmadan önce Sazed, Vin'i taşıyarak gelir. İyileşmesine yardımcı olması için ona lehim yedirilir. Sazed ameliyat yapar, onu dikerek birleştirir ve Ham onu iyileşmesi için bir odaya taşır. Kelsier ve Dockson onun geri getirdiği deri ciltli kitabı fark eder; Sazed kitabın Lord Hükümdar'ın anavatanının Miraç öncesi dili Khlennice yazıldığını belirler.",
			},
			'tfe-16': {
				title: "Clubs'ın Dükkânında İyileşme",
				description:
					"Vin, Clubs'ın dükkânında iki haftalık dinlenmeden sonra uyanır. Dikiz başında beklemiştir ve Kelsier'ın ona yeni lakabını nasıl verdiğini anlatır. Dockson ile konuşurken Vin, Sazed hakkında çok alışılmadık bir şey olduğunu fark eder.",
			},
			'tfe-16.2': {
				title: "Fellise'ye Dönüş",
				description:
					"Birkaç gün daha dinlendikten sonra Vin, Fellise'deki Renoux mülküne döner. Sazed ile konuşur; Sazed Sırdaşların ne olduğunu açıklar ve tüm Terrisli kâhyaların hadım olduğunu ortaya koyar.",
			},
			'tfe-17': {
				title: 'Renoux Malikanesinin Bahçesi',
				description:
					"Vin, Renoux mülkünde dört haftalık can sıkıcı bir iyileşmeden yakınır. Ekip üyeleri güncellemeleri tartışmak için gelir. Vin, Kelsier'ı yaklaşan baloya katılmasına izin vermeye ikna eder. Daha sonra Vin ve Kelsier Mare, motivasyonları hakkında konuşur ve Kelsier Kırılma'yı — Allomantik güçleri uyandıran travmatik olayı — açıklar.",
			},
			'tfe-18': {
				title: "Elariel Kalesi'nde Balo",
				description:
					"Vin, Sazed ile birlikte Elariel Kalesi'nde bir baloya katılır. Elend Venture masasına gelir, her zamanki gibi oturup okur. Elbisesini över ve Vin'in çenesi düşer. Vin çeşitli soylularla dans eder ve Elend hakkında sorular sorar; Vin hakkında konuşan Lady Shan Elariel'i öğrenir. Çok dans ettikten sonra Vin, Shan Elariel'le görüşmek zorundadır. Konuşma sırasında Vin, Shan'ın Teskin edebildiğini fark eder. Vin, Shan'ın Terrisli'sinin masasında bıraktığı Elend'in kitaplarını karıştırdığını görür ve geri döner. İçeriği neredeyse vatana ihanet olan küçük bir kitabı gözden geçirir. Elend döner, kitaplarını toplar ve gider; yolda iki arkadaşıyla buluşur. Sazed onları Jastes Lekal ve bir Hasting olarak tanımlar — Lekal ve Hasting'in Venture'ın siyasi rakipleri olması şaşırtıcıdır. Vin balodan çıkarken sislerin içinde bir şehir muhafızının genç bir skaa mutfak çocuğunun boğazını kestiğine tanık olur.",
			},
			'tfe-19': {
				title: "Fellise'ye Dönmek",
				description:
					"Kelsier, Dikenyolu'nu kullanarak Renoux Malikanesi'ne döner ve Vin, Sazed ve Renoux ile buluşur. Vin'e soylular hakkında ders verir, onların skaaları önemsemediğini ve Elend Venture'dan uzak durması gerektiğini ısrar eder.",
			},
			'tfe-20': {
				title: 'Ders Aramak',
				description:
					"Vin, Renoux'nun malikanesinin önünde isyan için sandıklanan silahları görerek Luthadel'den döner. Kısa süre sonra Marsh gelir ve ona Arayıcılık'ı — metal yakan diğer Allomantikleri algılamak için tunç kullanmak — ve Allomansi hakkında genel bilgileri öğretir.",
			},
			'tfe-22': {
				title: 'Günlük',
				description:
					"Vin, Renoux mülkünde Lord Hükümdar'ın günlüğünün kopyasını okurken Dikiz gelir. Ona bir mendil verir — Sazed daha sonra bunun genç bir erkeğin bir hanımefendiyle ciddi olarak ilgilenmek istediğinin işareti olduğunu açıklar. Dockson'u beklerken Vin, Sazed ile günlükteki Terrisli hakkında konuşur; Sazed Ferusimya'nin sırlarını ve Sırdaşların Terris dini kaybedildikten sonra her şeyi hatırlamak için nasıl kurulduğunu anlatır. Vin daha sonra Dockson ile konuşur; o, sevdiği bir kadının Lord Devinshae tarafından alınıp ertesi sabah öldürüldüğünü anlatır ve tüm soyluların böyle olduğunu ısrar eder.",
			},
			'tfe-23': {
				title: "Hasting Kalesi'nde Balo",
				description:
					"Vin, Hasting Kalesi'nde bir baloya katılır; Kelsier'ın Haneler arasında gerilimi körükleme çabalarının işe yaradığını duymaktan memnundur. Sorgucuların skaa hırsızları daha sık izlediğini de öğrenir. Lady Shan, Vin'den Elend'in kitaplarını bir dahaki sefere arayıp kendisine bilgi vermesini ister. Vin, Sazed'i beklerken Elend'i bulur ve ona bir skaa kadınla yatıp yatmadığını sorar. Elend, on üç yaşında babasının onu buna zorladığını ve kadının sonra öldürüldüğünü itiraf eder — ama bir daha yapmadığını söyler. Elend, Vin'e bir mendil verir. Elend arkadaşlarıyla ayrıldıktan sonra Vin, onları Allomansi kullanarak Lord Hükümdar'ın hatalarını tartıştıkları bir kuleye kadar takip eder. Kelsier aniden belirir ve grubun fikirlerini hiçbir şeyi değiştirmeyen tipik genç idealizm olarak küçümser.",
			},
			'tfe-24': {
				title: 'Ekip Toplantısı',
				description:
					"Vin ve Kelsier, ekibin çoğunun toplandığı Clubs'ın dükkânına gelir. Kelsier görevin durumunu tartışır ve Vin yeni hayatını ne kadar sevdiğini fark eder — artık gölgelerde saklanmıyor. Kelsier, Dikiz, Ham ve Clubs gece yarısı birlikte içki içer.",
			},
			'tfe-24.2': {
				title: 'Garnizon Ziyareti',
				description:
					'Vin, serseri kıyafetlerini giyer ve lehim hakkında bilgi edinmek için Ham ile Luthadel Garnizonunu ziyarete gider. Ham, askerlerin çoğunun normal bir yaşam isteyen sıradan skaalar olduğunu açıklar. Garnizonda Sertes adlı bir muhafızdan Luthadel Garnizonunun harekete geçtiğini öğrenirler — kuzeydeki Holstep Garnizonuna bir skaa isyanı saldırmıştır.',
			},
			'tfe-25': {
				title: 'Acil Haberler',
				description:
					"Clubs'ın dükkânında Ham, Luthadel Garnizonunun Holstep'e doğru kuzeye hareket ettiği haberini getirir. Kelsier, isyan ordusunu uyarabilmeleri için Vin'e beş lehim boncuk yutturur ve kuzeye koşarlar.",
			},
			'tfe-25.2': {
				title: 'Lehim Koşusu',
				description:
					"Vin ve Kelsier, umutsuz bir lehim koşusunda sürekli lehim yakarak on altı saat koşar. Yolda isyan ordusunun kalıntılarıyla karşılaşırlar — Valtroux Garnizonunca kuşatılmış ve katledilmiştir. Kelsier katılıp kurtarabileceğini kurtarmak ister ama Vin onu yenilmez olmadıklarına ikna eder ve bunun yerine Arguois Mağaralarına acele ederler; Mennis'in onları her an ayrılmaya hazır tutması sayesinde 2.000 askeri hayatta bulurlar.",
			},
			'tfe-26': {
				title: 'İyileşme',
				description:
					"Vin, bitkin halde Clubs'ın dükkânında yataktadır. Luthadel'e dönmeleri iki hafta sürmüştür. Kelsier içeri dalar, Breeze onu şöhret ve şan peşinde koşmakla suçlayarak işin bittiğini ilan eder. Kelsier isyan ordusunun kaybını bir aksilik olarak kabul eder ama pes etmeyi reddeder.",
			},
			'tfe-26.2': {
				title: 'İdamlar',
				description:
					'Dikiz, Çeşme Meydanı\'ndaki idamları duyurur. Ekip meydana gider ve çatıya çıkmak için birine rüşvet verir. Vin, babasını Kelsier\'a tanıtır — Tevidian adlı bir Obligatör, Lord Prelan ve Sorgucuların bile üstünde en yüksek rütbeli Obligatör. Kadın ve çocukların bir cezaevi arabasından sürüklenerek idam edilmesini ve çeşmenin kanla kızarmasını izlerler. Kelsier ekibe der ki: "İşte düşmanımız. Burada merhamet yok, geri dönüş yok."',
			},
			'tfe-27': {
				title: 'Sonraki Hamleleri Planlamak',
				description:
					"Ekip Clubs'ın dükkânına döner. Kelsier, Vin ve diğerleri — Dockson, Ham, Breeze, Dikiz — nasıl ilerleneceğini ve soyluluk arasında bir hane savaşı başlatmayı yeniden planlar. Sazed, Marsh'tan nerede buluşulacağına dair talimatlar içeren bir mektupla gelir.",
			},
			'tfe-27.2': {
				title: 'Marsh ile Buluşma',
				description:
					"Kelsier ve Vin, Marsh ile buluşmak için Dönemeçler'deki terk edilmiş bir binaya gider. Beklerken Kelsier, altından — kullanıcının geçmişinin alternatif bir versiyonunu görmesini sağlayan dokuzuncu Allomantik metal — bahseder. Marsh, Sorgu Kantonu'ndan düşük rütbeli bir Obligatörün dövmelerini taşıyarak gelir. Nezaret'in skaa bölgelerine Dumancılar tarafından gizlenen sürekli Teskin altında Teskinciler yerleştirdiğini ortaya koyar. Marsh ayrıca Sorgucuların yaşlılıktan ölebileceğini doğrular.",
			},
			'tfe-28': {
				title: "Lekal Kalesi'nde Balo",
				description:
					"Vin, Lekal Kalesi'nde bir baloya katılır ve Hane Savaşlarını ateşlemek için söylentiler yaymaya başlar. Lady Kliss ile dedikodu yapar; Hasting Hanesi'nin kaynaklarını Güney Salahiyeti'ndeki çiftliklerine taşıdığını söyler. Elend onu şaşırtır — onu öpmek istediğini söyler ama Vin gerçekten tanımadığını ısrar eder. Bunun yerine yürüyüşe çıkarlar; Elend, Venture Hanesi'nin servetinin tamamen Hathsin Çukurları'ndaki atiyum madenciliğinden geldiğini ona tamamen güvenerek açıklar. Tekiellerin Hasting Hanesi tarafından öldürüldüğünü belirtir ve Valette'i Luthadel'den ayrılmaya ikna etmeye çalışır.",
			},
			'tfe-29': {
				title: 'Son Çeviri',
				description:
					"Vin, Renoux Malikanesi'nde Sazed'in günlük çevirilerinin sonuncusunu okur ve daha fazlası olmadığına hayal kırıklığına uğrar. Sazed, Ferusimyayı daha detaylı açıklar ve Vin onun lehimihnlerinden birini yakmayı dener. Daha sonra Kelsier, Marsh'ın sağladığı detaylı haritayı incelemek için ekibe katılır. Theron'un ekibinin yakın zamanda Nezaret tarafından vurulduğunu keşfederler ve Vin, Sorgucuların hâlâ peşinde olduğundan şüphelenir.",
			},
			'tfe-30': {
				title: 'Venture Balosu',
				description:
					"Vin, Sazed ile birlikte Venture Kalesi'ndeki son hane balosuna katılır. Partiye katılanlar ittifakları kesinleştirmektedir — Lady Valette çok tarafsız bulunur. Lady Kliss bir muhbir olduğunu ortaya koyar ve Renoux Hanesi'ni şantajla tehdit eder. Bir safir kolye karşılığında Kliss, Elariel suikastçılarının o akşam Elend'i öldürmeye çalışacağını ve Straff'ın Elend çevresindeki muhafızları azalttığını söyler. Duygusal Allomansi ile Vin, Kliss'i tüm planı açıklamaya zorlar. Kaleden kaçmak için vitray pencereyi kırar. Dışarıda iki Haydut, iki Sikkeci ve ikisi de Sissoylu olan iki kişiyle savaşır — biri Shan Elariel'dir. Vin, atiyumunu erken söndürme hilesiyle Shan'ı kandırır ve öldürür.",
			},
			'tfe-31': {
				title: 'Düellonun Ardından',
				description:
					"Vin, sargılı ve perişan halde Clubs'ın mutfağına dalar. Kelsier onu Elend'i kurtardığı için azarlar ama Vin skaa ve soyluların farklı olmadığını — Elend'in iyi bir adam olduğunu haykırır. Sonra çatıda Vin, Kelsier'a Venture Hanesi'nin Çukurları yönetimini anlatır ve Sorgucuların bakır bulutlarının ardını görebildiğine dair inancını paylaşır. Kelsier teorisini test eder ve doğrular — önemli bir keşif.",
			},
			'tfe-32': {
				title: 'Çatıda Keşif',
				description:
					"Vin ve Dikiz, Clubs'ın dükkânının üzerindeki çatıdan keşif yapar. Dikiz, Vin'e kalay kullanma hileleri öğretir — sadece duyuları güçlendirmek değil, dikkat dağıtıcıları ayıklamak. Daha sonra Kelsier ve Vin, Marsh'ın cesedini bulur — tüm kanı boşaltılmış, cansız bir kabuk. Clubs'ın dükkânına döndüklerinde Marsh'ın Sorgucuların muhtemelen onu bulacağını açıklayan bir mektubunu keşfederler.",
			},
			'tfe-33': {
				title: 'Yedek Sığınak',
				description:
					"Ekip, Clubs'ın dükkânı yakınlarındaki nemli bir yedek bodrum sığınağa taşınır — sadece üç oda. Kelsier döner ve Hathsin Çukurları'ndaki tüm atiyumu yok ettiğini duyurur. Dikiz Kalaygöz olarak nöbettedir.",
			},
			'tfe-33.2': {
				title: 'Sorgucu Dövüşü',
				description:
					"Herkes Kelsier'ı Çeşme Meydanı'na takip eder. Dikiz'i ve Lord Renoux'yu idama götürülen arabalardan birinde görürler. Kelsier meydanda bir Sorgucu ile savaşır. Elend, Renoux hizmetçilerinin kafeste olduğunu görür ve Valette diye bağırır ama onu bulamaz.",
			},
			'tfe-34': {
				title: 'Hathsin Firarisinin Ölümü',
				description:
					"Kelsier, Çeşme Meydanı'nda her ikisi de atiyum yakarken Sorgucu ile topyekûn bir savaşa girer. Vin yukarıdan izler — Kelsier gerçekten İtme ve Çekme ustasıdır, metal nesneleri havada bir uzman gibi hareket ettirir. Sorgucuyu öldürür ve çevredeki skaalar \"Hathsin Firarisi\" diye tezahürat etmeye başlar. Lord Hükümdar siyah bir arabayla gelir. Ham'ın haydutlarından biri Lord Hükümdar'a bir mızrak saplar — yürümeye devam eder. İki mızrak — hâlâ yürüyor. Lord Hükümdar Kelsier'a bir tokat atar, kendi bedeninden bir mızrak çıkarır ve Kelsier'a saplar. Vin yukarıdan atlar ve ölürken Kelsier'ı tutar.",
			},
			'tfe-35': {
				title: 'Hathsin Firarisinin Mirası',
				description:
					"Vin, Clubs'ın dükkânı yakınlarındaki yedek sığınağa döner. Kelsier'ın dürüst olmadığına — ölmeyi ve onu terk etmeyi planladığına — öfkelidir. Sazed teselli edici sözler sunar. Dışarıda skaalar toplanır ve Sislerin Lordu'ndan bahseder. Yakındaki bir depoda ekip, Kelsier'ın formunu almış kandra'yı görür. Kelsier, her ekip üyesine şehri ele geçirme talimatları içeren mektuplar bırakmıştır. Vin'in mektubu On Birinci Metali asla çözemediğini söyler. Lord Hükümdar'ın neyi sakladığını bulacağına karar verir.",
			},
			'tfe-36': {
				title: "Kredik Shaw'a Giriş",
				description:
					"Vin, sessizce Kredik Shaw'a yürür ve dışarıdaki muhafızları isyana katılmaya teşvik eder. İçeride bir iç girişi koruyan iki Sorgucuyu öldürür; lehim tozunun onların görüşünü bozduğunu keşfeder. İlerideki odada sandalyede yaşlı bir adam oturur. Bir Sorgucu Vin'i boğazından yakalar — yaşlı adam konuşur ve Sorgucular ona Lord Hükümdar diye hitap eder. Ama Vin kafası karışmıştır: Çeşme Meydanı'ndaki Lord Hükümdar genç bir adamdı. On Birinci Metali yakar ve yaşlı adamın yanında iki hayaletimsi şekil görür — biri genç Lord Hükümdar'a benzer ama biraz daha yaşlıdır.",
			},
			'tfe-37': {
				title: 'Kurtarılma ve Aydınlanma',
				description:
					"Sorgucular Vin'i tüm diğer metallerini silen bir metal yakmaya zorlar. Yükseltilmiş tahtında Lord Hükümdar'ın — genç versiyonun, Kelsier'ı öldüren adamın — önüne getirilir. Babası hakkında sorgulanır. Vin'in babası ve en yüksek rütbeli Obligatör Tevidian, Lord Hükümdar gerçeği öğrenince Sorgucular tarafından öldürülür. Vin, Reen'in onu asla ele vermediğini keşfeder — işkenceye dayanmış ve Sorguculara onun çoktan açlıktan öldüğünü söylemiştir. Sazed hücresine getirilir, sonra depolanmış Ferusimyak gücü açığa çıkararak kapıyı patlatır. Elend ve altı asker içeri dalar. Vin, bir sandıkta Sissoylu pelerinini ve bir metal şişesini bulur, yutar ve kalan muhafızı öldürür. Sır ortaya çıkmıştır — Elend artık Vin'in bir Sissoylu olduğunu bilmektedir. Başını tutar ve onu öper, sonra Lord Hükümdar'ı öldürmeye gider.",
			},
			'tfe-38': {
				title: 'Lord Hükümdaryi Öldüren',
				description:
					"Vin, Kredik Shaw'un sivri kuleleri arasından zıplayarak tepeye çıkar. Sorgucu Kar onu boğazından yakalar ama ikinci bir Sorgucu yaklaşır ve Kar'ın boynundan bir metal çivi çekerek onu anında öldürür. İkinci Sorgucu, bedeninde on bir çiviyle hayatta olan Marsh'tır. Diğer tüm Sorgucuları öldürmüştür. Lord Hükümdar'ın gerçek adı Rashek'tir — Çağların Kahramanı'nı öldürmüş ve onun yerini almıştır. Vin, Lord Hükümdar'ın metal bileziklerini çeker ve düşürür. Ferusimyak gençliği olmadan zayıf, acınası yaşlı bir adam olur. Sazed bir metal şişesiyle belirir. Vin, doğrudan Lord Hükümdar'ın kalbine bir mızrak saplar. Bin yıllık baskı sona erer.",
			},
			'tfe-39': {
				title: 'Yeni Bir Çağ',
				description:
					"Sazed, Marsh ve Vin, skaa gecekondusunun kenarındaki bir binanın üzerinde durur. Sazed, Lord Hükümdar'ın hem Ferusimyacı hem de Allomanser olduğunu açıklar — bilezikler gençliğini depoluyordu. Marsh hayatta kalışını ve dönüşümünü anlatır: on bir metal çivi, ikisi gözlerinden, sekizi göğsünden, biri arkasından onları birbirine bağlayan. Sorgucu oluşturma süreci düzensizdir. Ayrıca sishortlaklarından evrimleşmiş ve artık Vin'i efendileri olarak gören kandralardan bahseder.",
			},
			'tfe-39.2': {
				title: 'Vin ve Elend',
				description:
					"Vin, Elend'i sislerin arasından izler. Herkes onu kral olarak kabul etmiştir. Birbirlerine sarılırlar.",
			},
			'woa-1': {
				title: 'Şehrin Koruyucusu',
				description: 'Vin her gece surları devriye gezer. Üç ordu şehre yaklaşır.',
			},
			'woa-2': {
				title: 'Siste Pusu',
				description:
					'Sekiz Allomanser tarafından pusuya düşürülür. Gizemli Sissoylu — Gözcü — müdahale eder.',
			},
			'woa-3': { title: 'Sis Hayaleti', description: 'Vin, yarı saydam bir figürle karşılaşır.' },
			'woa-5': {
				title: "OreSeur'un Yeniden Doğuşu",
				description: 'Vin, OreSeur için bir kurt köpeği alır. Duralümin keşfeder.',
			},
			'woa-6': { title: 'Avluda Antrenman', description: 'Vin, Ham ile antrenman yapar.' },
			'woa-8': { title: 'Gözcüyü Takip', description: 'Vin, Gözcüyü çatılarda kovalar.' },
			'woa-10': { title: 'Meclis Koruması', description: 'İkinci ordunun haberi gelir.' },
			'woa-11': {
				title: "Breeze'i Kurtarmak",
				description: "Vin, Breeze'i duralümin-çelik itişiyle kurtarır.",
			},
			'woa-13': { title: 'Hayalet Geri Dönüyor', description: 'Sis her gece daha erken gelir.' },
			'woa-14': { title: "Tindwyl'in Gelişi", description: "Tindwyl, Elend'i eğitmeye başlar." },
			'woa-16': { title: 'Günlüğü İncelemek', description: "Vin, Alendi'nin günlüğünü inceler." },
			'woa-17': {
				title: 'Gözcü ile Düello',
				description: 'Zane, Sissoyluların sise ait olduğunu söyler.',
			},
			'woa-20': { title: 'Savaş Konseyi', description: 'Allrianne Cett sığınma ister.' },
			'woa-21': { title: "Allrianne'in Gelişi", description: 'Allrianne saraya gelir.' },
			'woa-22': { title: 'Siyasi Gerilim', description: "Vin, Zane'i siste kovalar." },
			'woa-24': { title: 'Gece Nöbeti', description: 'Zane onu bulur.' },
			'woa-25': {
				title: 'Alışveriş ve Çatışma',
				description: "Straff'ın ordusu surlara saldırır.",
			},
			'woa-26': { title: 'Straff ile Pazarlık', description: 'Vin korkunç gücünü gösterir.' },
			'woa-27': { title: 'Blöf', description: 'Meclis güvensizlik oyu verir.' },
			'woa-28': { title: 'Pazarlıktan Dönüş', description: "Zane'in fısıltılarıyla işkence." },
			'woa-29': {
				title: 'Uykusuzluk ve İçgörü',
				description: 'Vin, Hiçlik hakkında bir aydınlanma yaşar.',
			},
			'woa-30': { title: 'Hiçlik Teorisi', description: 'Vin, sisin Hiçlik olduğunu öne sürer.' },
			'woa-31': { title: "Penrod'un Adaylığı", description: 'Yeni kralın seçimi başlar.' },
			'woa-33': { title: 'Kandra Sırları', description: 'Kandraların kendi dinleri vardır.' },
			'woa-34': { title: 'Çatıda Zane', description: 'Zane atiyum yakarak saldırır.' },
			'woa-35': {
				title: 'Cett ile Akşam Yemeği',
				description: 'Cett atiyum karşılığında yemek teklif eder.',
			},
			'woa-36': { title: 'Hathsin Firarisi Kilisesi', description: 'Demoux kiliseyi yönetir.' },
			'woa-38': {
				title: 'Seçim ve Suikast',
				description: 'Suikastçı saldırır. Penrod kral seçilir.',
			},
			'woa-40': { title: 'İyileşme', description: 'Zane rüyasında atiyum bırakır.' },
			'woa-43': { title: "Cett'e Saldırı", description: 'Vin merhamet diler.' },
			'woa-44': { title: "Camon'un Sığınağı", description: 'Kuzeye gitmeliler.' },
			'woa-45': { title: 'Aşk Tavsiyesi', description: "Vin, Sazed'i ziyaret eder." },
			'woa-46': { title: "Lord Hükümdar'ın Odası", description: 'Kuyunun nabzını hisseder.' },
			'woa-47': {
				title: 'Zane ile Düello',
				description: "Vin, Elend'in güvenini seçer. Zane'i öldürür.",
			},
			'woa-49': { title: 'Teneke Kapıdan Kaçış', description: 'Vin, Elend ve Dikiz ayrılır.' },
			'woa-50': { title: 'Kampı Bozmak', description: 'Dikiz siste takip hissedar.' },
			'woa-51': { title: 'Jastes ve Gerçek', description: "Sazed'in aldatmacası ortaya çıkar." },
			'woa-52': { title: 'Teneke Koşusu', description: 'Vin çaresizce geri koşar.' },
			'woa-53': {
				title: "Vin Sazed'i Kurtarır",
				description: 'Kolossları tek allomantik patlamayla ezer.',
			},
			'woa-54': {
				title: 'Kolossları Kontrol Etmek',
				description: "Lord Hükümdar'ın yerleştirdiği zayıflık.",
			},
			'woa-55': { title: "Straff'ı Yenmek", description: "Herkes Elend'i imparator olarak tanır." },
			'woa-57': { title: 'Gizli Kapı', description: 'Allomantik kapıyı duralümin çekişiyle açar.' },
			'woa-58': { title: 'Kuyunun Keşfi', description: "Sis hayaleti Elend'i deler." },
			'woa-59': { title: 'Gücü Serbest Bırakmak', description: '"Özgürüm!" Aldatılmıştır.' },
			'woa-60': { title: 'Surlarda', description: 'Korkunç bir hata yaptığını itiraf eder.' },
			'hoa-3': { title: 'İlk Depo', description: 'Vetitan deposunu açar.' },
			'hoa-8': { title: 'Sis Hastalığı', description: 'Sis mültecilere saldırır.' },
			'hoa-10': { title: 'Orduyla Buluşma', description: 'Sazed inanç krizini paylaşır.' },
			'hoa-12': { title: 'Savaş Konseyi', description: '"Kelsier ne yapardı?"' },
			'hoa-15': { title: 'Siste Düşman', description: 'Sis artık düşmandır.' },
			'hoa-21': { title: 'Yüzde On Altı', description: 'Tam olarak yüzde on altı.' },
			'hoa-25': { title: 'Keşfe Çıkmak', description: "Vin, Fadrex'e sızar." },
			'hoa-27': { title: 'Muhbir Slowswift', description: 'Bu gece balo var.' },
			'hoa-27.2': { title: 'Nezaret Keşfi', description: 'Allomantik nabızlar kaybolur.' },
			'hoa-28': { title: 'Güven ve Cesur Plan', description: "Yomen'in balosuna baskın." },
			'hoa-30': { title: 'Leydi Patresen', description: "Vin, Patresen'i uyarır." },
			'hoa-37': { title: 'Koloss Yapmak', description: 'Kolosslar insanlardan yapılır.' },
			'hoa-40': { title: 'Üçüncü Sanat', description: 'Hematurji — üçüncü metalik sanat.' },
			'hoa-43': { title: 'İkinci Balo', description: 'Casusları etkisiz hale getirir.' },
			'hoa-44': { title: 'Depo İçinde', description: "Harap, Reen'in yüzüyle belirir." },
			'hoa-45': {
				title: "Harap'ın Yüzü",
				description: 'Çocukluğundan beri onunla olduğunu iddia eder.',
			},
			'hoa-48': { title: "Lord Hükümdar'ın Son Sözleri", description: 'Son itirafı bulur.' },
			'hoa-50': { title: 'İlaçlı Şarap', description: 'İçer ve bayılır.' },
			'hoa-54': { title: "Yomen'in Tutsağı", description: 'Yomen küpeyi geri verir.' },
			'hoa-57': { title: "Harap'ın Doğası", description: 'Fısıltılar, zihinsel kontrol değil.' },
			'hoa-60': { title: 'Obligatörların Mahkemesinde', description: 'Yomen atiyum yakar.' },
			'hoa-63': { title: 'Atiyum Sissoylu', description: "Yomen bir Kahin'dir. Marsh gelir." },
			'hoa-65': { title: 'Kurtuluş', description: "Küpeyi çıkarır ve Marsh'ın alnına saplar." },
			'hoa-67': {
				title: 'Yaklaşan Fırtına',
				description: "Elend'e atiyum deposunu almasını söyler.",
			},
			'hoa-67.2': {
				title: "Luthadel'e Gidiş",
				description: "Sorgucuları Elend'den uzaklaştırır.",
			},
			'hoa-72': { title: 'Küpe', description: "Marsh küpeyi çıkarır. Harap'ın sesi susar." },
			'hoa-73': { title: 'Miraç', description: "Sorgucuları ve Kredik Shaw'u yok eder." },
			'hoa-76': { title: 'Tanrısallığa Hoş Geldin', description: "Muhafaza'nın gücüyle dolar." },
			'hoa-79': {
				title: "Harap'ı Kovalamak",
				description: "Hathsin Çukurları'na kadar takip eder.",
			},
			'hoa-80': { title: 'Rüzgar Rehberi', description: "Elend'in adını rüzgara fısıldar." },
			'hoa-81': { title: 'Savaşı İzlemek', description: 'Elend gülümseyerek ölür.' },
			'hoa-81.2': { title: 'Son Saldırı', description: "Vin, Harap'a saldırır. İkisi de ölür." },
			'hoa-83': {
				title: 'Yeniden Doğuş Tarlası',
				description: "Çiçekler ve yeşil çimen — Sazed'in yeniden yarattığı dünya.",
			},
		},
	},

	// ── Chapter seasons (book → chapter → season/year)
	chapterSeasons: {
		tfe: {
			0: { season: 'İlkbahar', year: '1021 FE' },
			1: { season: 'İlkbahar', year: '1021 FE' },
			2: { season: 'İlkbahar', year: '1021 FE' },
			3: { season: 'İlkbahar', year: '1021 FE' },
			4: { season: 'İlkbahar', year: '1021 FE' },
			5: { season: 'İlkbahar', year: '1021 FE' },
			6: { season: 'İlkbahar', year: '1021 FE' },
			7: { season: 'Geç ilkbahar', year: '1021 FE' },
			8: { season: 'Yaz', year: '1021 FE' },
			9: { season: 'Yaz', year: '1021 FE' },
			10: { season: 'Yaz', year: '1021 FE' },
			11: { season: 'Yaz', year: '1021 FE' },
			12: { season: 'Yaz', year: '1021 FE' },
			13: { season: 'Yaz', year: '1021 FE' },
			14: { season: 'Yaz', year: '1021 FE' },
			15: { season: 'Yaz', year: '1021 FE' },
			16: { season: 'Yaz', year: '1021 FE' },
			17: { season: 'Yaz', year: '1021 FE' },
			18: { season: 'Yaz', year: '1021 FE' },
			19: { season: 'Geç yaz', year: '1021 FE' },
			20: { season: 'Geç yaz', year: '1021 FE' },
			21: { season: 'Sonbahar', year: '1021 FE' },
			22: { season: 'Sonbahar', year: '1021 FE' },
			23: { season: 'Sonbahar', year: '1021 FE' },
			24: { season: 'Sonbahar', year: '1021 FE' },
			25: { season: 'Geç sonbahar', year: '1021 FE' },
			26: { season: 'Geç sonbahar', year: '1021 FE' },
			27: { season: 'Kış', year: '1021 FE' },
			28: { season: 'Kış', year: '1021 FE' },
			29: { season: 'Kış', year: '1021 FE' },
			30: { season: 'Kış', year: '1021 FE' },
			31: { season: 'Kış', year: '1021 FE' },
			32: { season: 'Kış', year: '1022 FE' },
			33: { season: 'Erken ilkbahar', year: '1022 FE' },
			34: { season: 'Erken ilkbahar', year: '1022 FE' },
			35: { season: 'Erken ilkbahar', year: '1022 FE' },
			36: { season: 'Erken ilkbahar', year: '1022 FE' },
			37: { season: 'Erken ilkbahar', year: '1022 FE' },
			38: { season: 'Erken ilkbahar', year: '1022 FE' },
			39: { season: 'İlkbahar', year: '1022 FE' },
		},
		woa: {
			1: { season: 'Sonbahar', year: '1023 FE' },
			2: { season: 'Sonbahar', year: '1023 FE' },
			3: { season: 'Sonbahar', year: '1023 FE' },
			4: { season: 'Sonbahar', year: '1023 FE' },
			5: { season: 'Sonbahar', year: '1023 FE' },
			6: { season: 'Sonbahar', year: '1023 FE' },
			7: { season: 'Geç sonbahar', year: '1023 FE' },
			8: { season: 'Sonbahar', year: '1023 FE' },
			9: { season: 'Geç sonbahar', year: '1023 FE' },
			10: { season: 'Sonbahar', year: '1023 FE' },
			11: { season: 'Erken kış', year: '1023 FE' },
			12: { season: 'Geç sonbahar', year: '1023 FE' },
			13: { season: 'Erken kış', year: '1023 FE' },
			14: { season: 'Erken kış', year: '1023 FE' },
			15: { season: 'Kış', year: '1023 FE' },
			16: { season: 'Kış', year: '1023 FE' },
			17: { season: 'Kış', year: '1023 FE' },
			19: { season: 'Kış', year: '1023 FE' },
			20: { season: 'Kış', year: '1023 FE' },
			21: { season: 'Kış', year: '1023 FE' },
			22: { season: 'Kış', year: '1023 FE' },
			23: { season: 'Kış', year: '1023 FE' },
			24: { season: 'Kış', year: '1023 FE' },
			25: { season: 'Kış', year: '1023 FE' },
			26: { season: 'Kış', year: '1023 FE' },
			27: { season: 'Kış', year: '1023 FE' },
			28: { season: 'Kış', year: '1024 FE' },
			29: { season: 'Kış', year: '1024 FE' },
			30: { season: 'Kış', year: '1024 FE' },
			31: { season: 'Kış', year: '1024 FE' },
			32: { season: 'Kış', year: '1024 FE' },
			33: { season: 'Kış', year: '1024 FE' },
			34: { season: 'Kış', year: '1024 FE' },
			35: { season: 'Kış', year: '1024 FE' },
			36: { season: 'Kış', year: '1024 FE' },
			37: { season: 'Kış', year: '1024 FE' },
			38: { season: 'Kış', year: '1024 FE' },
			40: { season: 'Geç kış', year: '1024 FE' },
			41: { season: 'Geç kış', year: '1024 FE' },
			42: { season: 'Geç kış', year: '1024 FE' },
			43: { season: 'Geç kış', year: '1024 FE' },
			44: { season: 'Geç kış', year: '1024 FE' },
			45: { season: 'Geç kış', year: '1024 FE' },
			46: { season: 'Geç kış', year: '1024 FE' },
			47: { season: 'Geç kış', year: '1024 FE' },
			49: { season: 'Geç kış', year: '1024 FE' },
			50: { season: 'Geç kış', year: '1024 FE' },
			51: { season: 'Geç kış', year: '1024 FE' },
			52: { season: 'Geç kış', year: '1024 FE' },
			53: { season: 'Geç kış', year: '1024 FE' },
			54: { season: 'Geç kış', year: '1024 FE' },
			55: { season: 'Geç kış', year: '1024 FE' },
			56: { season: 'Kış', year: '1024 FE' },
			57: { season: 'Kış', year: '1024 FE' },
			58: { season: 'Kış', year: '1024 FE' },
			59: { season: 'Kış', year: '1024 FE' },
			60: { season: 'Kış', year: '1024 FE' },
		},
		hoa: {
			0: { season: 'İlkbahar', year: '1026 FE' },
			1: { season: 'İlkbahar', year: '1026 FE' },
			3: { season: 'İlkbahar', year: '1026 FE' },
			4: { season: 'Yaz', year: '1026 FE' },
			5: { season: 'Yaz', year: '1026 FE' },
			6: { season: 'Yaz', year: '1026 FE' },
			8: { season: 'Yaz', year: '1026 FE' },
			10: { season: 'Yaz', year: '1026 FE' },
			12: { season: 'Yaz', year: '1026 FE' },
			13: { season: 'Sonbahar', year: '1026 FE' },
			14: { season: 'Sonbahar', year: '1026 FE' },
			15: { season: 'Sonbahar', year: '1026 FE' },
			16: { season: 'Sonbahar', year: '1026 FE' },
			17: { season: 'Sonbahar', year: '1026 FE' },
			18: { season: 'Sonbahar', year: '1026 FE' },
			19: { season: 'Sonbahar', year: '1026 FE' },
			21: { season: 'Sonbahar', year: '1026 FE' },
			22: { season: 'Sonbahar', year: '1026 FE' },
			23: { season: 'Erken kış', year: '1026 FE' },
			24: { season: 'Kış', year: '1026 FE' },
			25: { season: 'Sonbahar', year: '1026 FE' },
			26: { season: 'Erken kış', year: '1026 FE' },
			27: { season: 'Sonbahar', year: '1026 FE' },
			28: { season: 'Sonbahar', year: '1026 FE' },
			29: { season: 'Erken kış', year: '1026 FE' },
			30: { season: 'Sonbahar', year: '1026 FE' },
			31: { season: 'Erken kış', year: '1026 FE' },
			34: { season: 'Kış', year: '1026 FE' },
			35: { season: 'Kış', year: '1026 FE' },
			36: { season: 'Kış', year: '1026 FE' },
			37: { season: 'Kış', year: '1026 FE' },
			38: { season: 'Kış', year: '1026 FE' },
			40: { season: 'Kış', year: '1026 FE' },
			41: { season: 'Kış', year: '1026 FE' },
			42: { season: 'Kış', year: '1026 FE' },
			43: { season: 'Kış', year: '1026 FE' },
			44: { season: 'Kış', year: '1026 FE' },
			45: { season: 'Kış', year: '1026 FE' },
			46: { season: 'Kış', year: '1026 FE' },
			47: { season: 'Kış', year: '1026 FE' },
			48: { season: 'Kış', year: '1026 FE' },
			49: { season: 'Kış', year: '1026 FE' },
			50: { season: 'Kış', year: '1026 FE' },
			51: { season: 'Kış', year: '1026 FE' },
			53: { season: 'Kış', year: '1026 FE' },
			54: { season: 'Geç kış', year: '1026 FE' },
			55: { season: 'Geç kış', year: '1026 FE' },
			56: { season: 'Kış', year: '1026 FE' },
			57: { season: 'Geç kış', year: '1026 FE' },
			58: { season: 'İlkbahar', year: '1027 FE' },
			59: { season: 'İlkbahar', year: '1027 FE' },
			60: { season: 'Geç kış', year: '1026 FE' },
			61: { season: 'Geç kış', year: '1026 FE' },
			62: { season: 'Yaz', year: '1027 FE' },
			63: { season: 'Geç kış', year: '1026 FE' },
			64: { season: 'Yaz', year: '1027 FE' },
			65: { season: 'Geç kış', year: '1026 FE' },
			66: { season: 'Yaz', year: '1027 FE' },
			67: { season: 'İlkbahar', year: '1027 FE' },
			68: { season: 'İlkbahar', year: '1027 FE' },
			69: { season: 'Yaz', year: '1027 FE' },
			70: { season: 'İlkbahar', year: '1027 FE' },
			71: { season: 'Sonbahar', year: '1027 FE' },
			72: { season: 'Yaz', year: '1027 FE' },
			73: { season: 'Yaz', year: '1027 FE' },
			74: { season: 'Sonbahar', year: '1027 FE' },
			75: { season: 'Sonbahar', year: '1027 FE' },
			76: { season: 'Sonbahar', year: '1027 FE' },
			77: { season: 'Sonbahar', year: '1027 FE' },
			78: { season: 'Sonbahar', year: '1027 FE' },
			79: { season: 'Sonbahar', year: '1027 FE' },
			80: { season: 'Sonbahar', year: '1027 FE' },
			81: { season: 'Sonbahar', year: '1027 FE' },
			82: { season: 'Sonbahar', year: '1027 FE' },
			83: { season: 'Sonbahar', year: '1027 FE' },
			84: { season: 'Sonbahar', year: '1027 FE' },
		},
	},
};
