import type { Translation } from '../types';
import { trData } from './tr-data';

export const tr: Translation = {
	meta: {
		title: 'Sisçocuğu İnteraktif Harita — Scadrial',
		description:
			'Brandon Sanderson\'un orijinal Sisçocuğu Üçlemesi\'nin interaktif krono-kartografik görselleştirmesi. Karakter hareketlerini Scadrial boyunca takip edin.',
	},

	header: {
		title: 'SİSÇOCUĞU ATLASI',
		help: 'Yardım',
		selectBook: 'Kitap seç',
		selectMap: 'Harita görünümü seç',
	},

	map: {
		worldMap: 'Son İmparatorluk (Dünya)',
		cityMaps: 'Şehir Haritaları',
	},

	books: {
		tfe: 'Son İmparatorluk',
		woa: 'Yükseliş Kuyusu',
		hoa: 'Çağların Kahramanı',
	},

	timeline: {
		reset: 'Başa dön',
		previous: 'Önceki bölüm',
		play: 'Oynatmayı başlat',
		pause: 'Oynatmayı duraklat',
		next: 'Sonraki bölüm',
		chapter: 'Bölüm',
		prologue: 'Prolog',
		epilogue: 'Epilog',
		exploreCity: 'Keşfet',
		exitCity: 'Çık',
		cityPromptEnter: 'Şehre Gir',
		cityPromptStay: 'Dünya Haritasında Kal',
		cityPromptDesc:
			'Karakterler bir şehre girdi. Onları detaylı şehir haritasına takip etmek ister misiniz, yoksa dünya haritasında devam mı?',
		exitCityPromptDesc:
			'Karakterler bu şehirden ayrıldı. Yolculuklarını takip etmek için dünya haritasına dönmek ister misiniz, yoksa şehir görünümünde kalmak mı?',
		cityPromptExitBtn: 'Dünya Haritasına Dön',
		paused: 'Duraklatıldı',
		showTimeline: 'Zaman çizelgesini göster',
		hideTimeline: 'Zaman çizelgesini gizle',
		label: 'Zaman Çizelgesi',
		returnToWorldMap: 'Dünya haritasına dön',
	},

	characters: {
		title: 'Karakterler',
		showAll: 'Tümünü Göster (Spoiler)',
		follow: 'Bu karakteri takip et',
		following: 'Bu karakter takip ediliyor',
		notYetIntroduced: 'Henüz tanıtılmadı',
		hiddenPlaceholder: '???',
	},

	locations: {
		type: 'Konum Türü',
		dominance: 'Hakimiyet',
		coordinates: 'Koordinatlar',
		exploreCity: 'Şehri Keşfet',
		features: 'Özellikler',
	},

	legend: {
		title: 'Lejant',
		showLocations: 'Konumları Göster',
		characters: 'Karakterler',
		locations: 'Konumlar',
		openLegend: 'Lejantı aç',
		closeLegend: 'Lejantı kapat',
		cityLandmarks: 'Şehir Simgeleri',
		explorableCity: 'Keşfedilebilir Şehir',
		other: 'Diğer',
		characterPosition: 'Karakter Konumu',
		travelPath: 'Seyahat Yolu',
	},

	infoPanel: {
		close: 'Paneli kapat',
		locationType: 'Konum Türü',
		cityPosition: 'Şehir Konumu',
	},

	characterMarker: {
		characterEvent: 'Karakter Olayı',
		earlier: 'Daha Önce',
		later: 'Daha Sonra',
		current: 'Şu An',
		chapterAbbr: 'Bl',
		showLess: 'Daha az göster',
		readMore: 'Devamını oku',
		chapter: 'Bölüm',
		season: 'Mevsim',
		year: 'Yıl',
		timelinePaused: '⏸ Zaman çizelgesi duraklatıldı',
		continueTimeline: 'Zaman Çizelgesine Devam Et',
		cityChoiceDesc: 'Şehre gir veya dünya haritasında kal?',
		charactersEntered: 'Karakterler girdi',
		enterCity: 'Şehre Gir',
		stayOnMap: 'Haritada Kal',
		partOf: 'Bölüm {part}/{total}',
		prevPart: 'Önceki Kısım',
		nextPart: 'Sonraki Kısım',
		revealSpoiler: 'Görmek için dokun',
		readAlongNote: 'Birlikte okuma modu etkin',
	},

	characterPath: {
		journeyTooltip: ' yolculuğu',
	},

	cityLandmark: {
		showLess: 'Daha az göster',
		readMore: 'Devamını oku',
		locationType: 'Konum Türü',
	},

	cityMap: {
		returnToWorldMap: 'Dünya Haritasına Dön',
		worldMap: 'Dünya Haritası',
	},

	cityPrompt: {
		onWorldMap: 'dünya haritasında.',
		worldMap: 'Dünya Haritası',
		timelinePaused: '⏸ Zaman çizelgesi duraklatıldı',
		enteredCity: 'girdi',
		viewCityMap: 'Şehir haritasını görüntüle?',
		enterCity: 'Şehre Gir',
		dismiss: 'Kapat',
		is: '',
		are: '',
		has: '',
		have: '',
	},

	controls: {
		openPanel: 'Kontrol panelini aç',
		label: 'Kontroller',
		title: 'Kontroller',
		closePanel: 'Paneli kapat',
		secretHistoryTitle: 'Gizli Tarih içeriğini dahil et (Kelsier\'ın Bilişsel Diyar hareketleri)',
		secretHistoryContent: 'Gizli Tarih İçeriği',
		ashAndMist: 'Kül ve Sis',
		cityLandmarksNote: 'Şehir simgeleri her zaman görünür',
		readAlongMode: 'Birlikte Okuma Modu',
		readAlongModeTitle:
			'Hareket açıklamalarını tıklanana kadar gizle — kitapla birlikte haritayı takip etmek için ideal',
		statusOn: 'AÇIK',
		statusOff: 'KAPALI',
	},

	locationMarker: {
		showLess: 'Daha az göster',
		readMore: 'Devamını oku',
		dominance: 'Hakimiyet',
		exploreCity: 'Şehri Keşfet',
	},

	loading: {
		title: 'SİSÇOCUĞU ATLASI',
		subtitle: 'Kül ve sis dünyası yükleniyor...',
	},

	common: {
		loading: 'Yükleniyor...',
		error: 'Hata',
		back: 'Geri',
		worldMap: 'Dünya Haritası',
		returnToWorldMap: 'Dünya Haritasına Dön',
	},

	locationTypes: {
		capital: 'Başkent',
		city: 'Şehir',
		landmark: 'Simge',
		mystical: 'Kutsal Alan',
		ashmount: 'Kül Dağı',
		mine: 'Maden',
		palace: 'Saray',
		keep: 'Kale',
		district: 'Semt',
		hideout: 'Sığınak',
		stronghold: 'Hisar',
		region: 'Bölge',
		plantation: 'Çiftlik',
		estate: 'Asil Mülk',
		town: 'Yerleşim',
		village: 'Skaa Köyü',
		river: 'Su Yolu',
		industrial: 'İkmal Noktası',
	},

	landmarkTypes: {
		gate: 'Kapı',
		keep: 'Kale',
		palace: 'Saray',
		district: 'Semt',
		shop: 'Dükkân',
		safehouse: 'Güvenli Ev',
		landmark: 'Simge',
		canal: 'Kanal',
		ministry: 'Bakanlık Kantonu',
		plaza: 'Meydan',
	},

	dominances: {
		Central: 'Merkez Hakimiyeti',
		Northern: 'Kuzey Hakimiyeti',
		Southern: 'Güney Hakimiyeti',
		Eastern: 'Doğu Hakimiyeti',
		Western: 'Batı Hakimiyeti',
		Terris: 'Terris Hakimiyeti',
		None: 'İmparatorluk Dışı',
	},

	donation: {
		buttonLabel: 'Bana bir kahve ısmarla',
		buttonLabelShort: 'Kahve',
		modalTitle: 'Sisçocuğu Atlası\'nı Destekle',
		modalDesc:
			'Sisçocuğu Atlası, boş zamanlarımda geliştirdiğim ücretsiz, açık kaynaklı bir hayran projesidir. Hosting, alan adı ve geliştirme maliyetleri birikiyor. Uygulamayı beğendiyseniz ve sislerin akmasına yardım etmek istiyorsanız, küçük bir bağış çok işe yarar — ama hiç baskı yok, uygulama her zaman tamamen ücretsiz olacak!',
		modalButton: 'Ko-fi\'den bana bir kahve ısmarla',
		modalDismiss: 'Belki sonra',
		modalDontAsk: 'Bunu bir daha gösterme',
		close: 'Kapat',
	},

	headerExtra: {
		world: 'Dünya',
		city: 'Şehir',
		wipBadge: 'Yapım Aşamasında',
		wipTitle: 'Gelecek Planlar',
		wipItem1: 'Zaman çizelgesindeki her karakter hareketini doğrulamak için üçlemeyi yeniden okuma',
		wipItem2: 'Tüm konum içeriklerini doğruluk açısından iki kez kontrol etme',
		wipItem3: 'Yerelleştirme — çoklu dil desteği',
		wipItem4: 'Daha fazla harita ve 2. Çağ içeriği (belki?)',
		supportKofi: 'Ko-fi\'de Destekle',
		mapLabel: 'Harita:',
		selectLanguage: 'Dil seç',
	},

	about: {
		ariaLabel: 'Bu sayfa hakkında',
		title: 'Bu sayfa hakkında ve atıflar',
		buttonLabel: 'Hakkında',
		buttonSublabel: 'Bilgi ve Atıflar',
		modalTitle: 'Bu Sayfa Hakkında',
		close: 'Kapat',
		disclaimerTitle: 'Sorumluluk Reddi',
		disclaimerBadge: 'RESMİ OLMAYAN HAYRAN PROJESİ',
		disclaimerIntro:
			'Bu, resmi olmayan hayran yapımı bir projedir ve aşağıdakilerle bağlantılı değildir, onlar tarafından onaylanmamıştır veya bağlantılı değildir:',
		disclaimerBranderson: 'Brandon Sanderson',
		disclaimerDragonsteel: 'Dragonsteel Entertainment',
		disclaimerTor: 'Tor Books / Macmillan Publishers',
		disclaimerIsaac: 'Isaac Stewart',
		disclaimerOutro:
			'Bu proje yalnızca eğitim ve eğlence amaçlıdır. Karakterler, konumlar, hikâyeler ve çizimler dahil tüm Sisçocuğu içeriklerinin telif hakları ilgili sahiplerine aittir.',
		mapAttributionTitle: 'Harita Atfı',
		mapAttributionDesc:
			'Bu projede kullanılan harita, Coppermind Wiki\'den alınan Isaac Stewart\'ın resmi Son İmparatorluk haritasıdır.',
		mapArtist: 'Isaac Stewart',
		mapSource: 'Coppermind Wiki',
		mapOriginalWork: 'Brandon Sanderson\'un Sisçocuğu serisi için oluşturulmuştur',
		mapNote:
			'Isaac Stewart, Brandon Sanderson\'un Cosmere evreni için haritalar ve çizimler dahil birçok eserinin resmi çizeridir.',
		portraitsTitle: 'Karakter Portreleri',
		portraitsDesc:
			'Karakter portre çizimleri Coppermind Wiki\'den CC BY-NC-ND 4.0 lisansı altında alınmıştır.',
		portraitVinMistborn: 'Sisçocuğu',
		portraitVinUrchin: 'Sokak Çocuğu',
		portraitKelsier: 'Kelsier',
		portraitSazed: 'Sazed',
		portraitElend: 'Elend',
		portraitMarshInquisitor: 'Engizisyoncu',
		portraitMarshKelsier: 'Kelsier ile',
		portraitSpook: 'Spook',
		symbolsTitle: 'Allomantik Semboller',
		symbolsDesc:
			'Konum işaretleyici glifleri, Coppermind Wiki\'deki Çelik Alfabe sayfasından alınan Isaac Stewart tasarımı Allomantik metal sembollerini kullanır.',
		symbolsArtist: 'Isaac Stewart',
		symbolsSource: 'Coppermind Wiki — Çelik Alfabe',
		symbolsLicense: 'Bu ticari olmayan hayran projesi için adil kullanım kapsamında kullanılmıştır',
		symbolsUsed: 'Haritada kullanılan semboller:',
		symbolGold: 'Hakimiyet Merkezi · Asil Kale · Asil Mülk',
		symbolSteel: 'Şehir · Şehir Kapısı',
		symbolAtium: 'Kül Dağı · Saray',
		symbolTin: 'Simge · Önemli Alan',
		symbolPewter: 'Hisar · Kanal',
		symbolCopper: 'Güvenli Sığınak · Ekip Güvenli Evi',
		symbolIron: 'Cezaevi Madeni',
		symbolBronze: 'İkmal Noktası · Kanton',
		symbolLerasium: 'Kutsal Alan',
		symbolZinc: 'Yerleşim · Semt',
		symbolBrass: 'Skaa Köyü · Tüccar · Çiftlik',
		symbolChromium: 'Su Yolu',
		symbolElectrum: 'Bölge · Meydan',
		specialThanksTitle: 'Özel Teşekkürler',
		specialThanksDesc:
			'Reddit kullanıcısı u/participating ve r/readalong Cosmere birlikte okuma başlığına büyük teşekkürler. Bu projedeki karakter hareket verileri kısmen onların bölüm bölüm özetleri ve kendi notlarım kullanılarak oluşturulmuştur. İzinle kullanılmıştır.',
		specialThanksReddit: 'r/readalong Cosmere Wiki',
		communityTranslationsTitle: 'Topluluk Çevirileri',
		communityTranslationsDesc:
			'Çeviri verileri ve yerelleştirilmiş haritalar topluluk tarafından sağlanmıştır. Teşekkürler!',
		copyrightTitle: 'Telif Hakkı Bildirimi',
		copyrightTrademark: 'Mistborn, Dragonsteel Entertainment, LLC\'nin tescilli bir ticari markasıdır',
		copyrightMap: 'Harita çizimleri © Isaac Stewart',
		copyrightBook: 'Kitap içerikleri © Brandon Sanderson',
		closeButton: 'Kapat',
		artistLabel: 'Sanatçı:',
		sourceLabel: 'Kaynak:',
		originalWorkLabel: 'Orijinal Eser:',
		licenseLabel: 'Lisans:',
		versionLabel: 'Sürüm',
		roadmapTitle: 'Yol Haritası',
		roadmapCurrentTag: 'GÜNCEL',
		roadmapCompleteTag: 'TAMAMLANDI',
		roadmap070: 'Son İmparatorluk — zaman çizelgesi tamamlandı',
		roadmapCurrent: 'Son İmparatorluk',
		roadmap080: 'Yükseliş Kuyusu — zaman çizelgesi tamamlandı',
		roadmap090: 'Çağların Kahramanı — zaman çizelgesi tamamlandı',
		roadmap100: 'Gizli Tarih — zaman çizelgesi tamamlandı',
	},

	welcome: {
		title: 'Sisçocuğu İnteraktif Haritasına Hoş Geldiniz',
		description:
			'Şu anda Sisçocuğu üçlemesini mi okuyorsunuz? Spoiler olmadan haritayı keşfetmek için Birlikte Okuma Modunu etkinleştirin.',
		featureMovements:
			'Her bölümde ilerledikçe karakter hareketleri haritada gösterilir',
		featureTitles: 'Hareket başlıkları her zaman görünür, böylece ne olduğunu bilirsiniz',
		featureSummaries: 'Detaylı özetler, görmek için dokunana kadar gizli kalır',
		enableButton: 'Birlikte Okuma Modunu Etkinleştir',
		skipButton: 'Hayır teşekkürler, her şeyi göster',
		hint: 'Bunu her zaman soldaki Kontroller menüsünden değiştirebilirsiniz.',
	},

	skipLinks: {
		nav: 'Bölüme atla',
		toHeader: 'Başlığa atla',
		toMap: 'Haritaya atla',
		toCharacterMenu: 'Karakter menüsüne atla',
		toTimeline: 'Zaman çizelgesine atla',
		toAttribution: 'Atıflara atla',
	},

	data: trData,
};
