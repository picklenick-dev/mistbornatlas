/**
 * Arabic data translations.
 * Sources: Official Kayan Publishing (دار كيان) and Dar Al-Tanweer (دار التنوير) editions.
 * Primary Translator: Mahmoud Atef (محمود عاطف).
 */
import type { DataTranslations } from '../types';

export const arData: DataTranslations = {
	books: {
		tfe: { title: 'الإمبراطورية الأخيرة', year: '1021-1022 FE', confidence: 'verified' },
		woa: { title: 'بئر الارتقاء', year: '1022-1024 FE', confidence: 'verified' },
		hoa: { title: 'بطل العصور', year: '1024-1025 FE', confidence: 'verified' },
	},

	characters: {
		vin: {
			name: 'فين',
			title: 'مولودة ضباب',
			description:
				'مولودة ضباب موهوبة، نشأت كمتشردة في شوارع لوثادل قبل أن تصبح الشخصية المحورية في تغيير مصير سكادريال.',
			confidence: 'verified',
			fieldConfidence: { description: 'verified' },
			titleProgression: {
				'tfe-1': 'طفلة شوارع', // Street urchin
				'tfe-9': 'متدربة مولودة ضباب',
				'tfe-12': 'الليدي فاليت رينو', // Noble alias
				'tfe-25': 'مولودة ضباب',
				'tfe-38': 'قاتلة اللورد الحاكم', // Slayer of the Lord Ruler
				'woa-1': 'وريثة الناجي', // Lady Heir / Heir to the Survivor
				'woa-47': 'حامية لوثادل',
				'hoa-1': 'الإمبراطورة',
				'hoa-79': 'وعاء الحفظ', // Preservation is "الحفظ" (Al-Hifz)
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
				'hoa-79': 'probable',
			},
		},
		kelsier: {
			name: 'كيلسير',
			title: 'الناجي', // The Survivor
			description:
				'القائد الكاريزمي لعصابة من اللصوص، اشتهر بهروبه الأسطوري من حفر هاثسين التي لا يخرج منها أحد.',
			confidence: 'verified',
			fieldConfidence: { description: 'verified' },
			titleProgression: {
				'tfe-0': 'سكاا غامض',
				'tfe-1': 'الناجي من هاثسين',
				'tfe-11': 'قائد الفريق',
				'tfe-21': 'مدمر الحفر',
				'tfe-34': 'شهيد الثورة',
			},
			titleProgressionConfidence: {
				'tfe-0': 'verified',
				'tfe-1': 'verified',
				'tfe-11': 'verified',
				'tfe-21': 'verified',
				'tfe-34': 'verified',
			},
			secretHistoryTitles: {
				'woa-1': 'ظل إدراكي', // Cognitive Shadow
				'hoa-1': 'بطل الحفظ', // Preservation's Champion
			},
		},
		sazed: {
			name: 'سازيد',
			title: 'حافظ', // "Keeper" is canonically "حافظ" (Hafiz)
			description:
				'من شعب تيريس، يعمل كحافظ يكرس حياته لجمع وحماية المعرفة بالأديان المنسية عبر الفيروكيميا.',
			confidence: 'verified',
			fieldConfidence: { description: 'verified' },
			titleProgression: {
				'tfe-9': 'خادم تيريسي', // Steward
				'tfe-22': 'حافظ الأديان',
				'woa-1': 'عالم وحافظ',
				'woa-12': 'باحث عن الحقيقة',
				'woa-52': 'مدافع لوثادل',
				'hoa-1': 'سفير الإمبراطورية الجديدة',
				'hoa-50': 'عالم في زمن الأزمة',
				'hoa-82': 'بطل العصور',
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
			name: 'إيلند فينتشر',
			title: 'الإمبراطور',
			description: 'وريث مثالي من عائلة فينتشر، أصبح أول حاكم للوثادل بعد سقوط اللورد الحاكم.',
			confidence: 'verified',
			fieldConfidence: { description: 'verified' },
			titleProgression: {
				'tfe-12': 'نبيل فيلسوف',
				'tfe-24': 'نبيل متمرد',
				'tfe-38': 'قائد غير متوقع',
				'woa-1': 'ملك السيادة المركزية',
				'woa-35': 'ملك مخلوع',
				'woa-58': 'إمبراطور مولود ضباب',
				'hoa-1': 'إمبراطور الإمبراطورية الجديدة',
				'hoa-54': 'الإمبراطور المحارب',
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
			name: 'مارش',
			title: 'محقق فولاذي', // Steel Inquisitor
			description:
				'شقيق كيلسير، الذي تغلغل في الوزارة الفولاذية ودفع الثمن الأغلى لضمان نجاح الثورة.',
			confidence: 'verified',
			fieldConfidence: { description: 'verified' },
			titleProgression: {
				'tfe-7': 'متسلل ثائر',
				'tfe-13': 'جاسوس الوزارة',
				'tfe-38': 'محقق فولاذي',
				'woa-4': 'محقق متردد',
				'woa-57': 'بيدق الدمار', // Ruin is "الدمار" (Al-Damar)
				'hoa-0': 'يد الدمار',
				'hoa-79': 'عيون الحديد', // Ironeyes
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
			name: 'شبح', // Spook is translated semantically to "Shabah" (Ghost)
			title: 'مستخدم ضباب', // Misting
			description: 'أصغر أعضاء عصابة كيلسير، مستخدم ضباب قصديري أصبح شخصية محورية في معركة أورتو.',
			confidence: 'verified',
			fieldConfidence: { description: 'verified' },
			titleProgression: {
				'tfe-7': 'عين قصدير شاب', // Tineye is "عين قصدير"
				'woa-1': 'كشاف',
				'hoa-14': 'متسلل',
				'hoa-38': 'حكيم قصديري', // Tin Savant
				'hoa-58': 'بطل أورتو',
				'hoa-83': 'الناجي من اللهب',
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
			name: 'لوثادل',
			description:
				'عاصمة الإمبراطورية الأخيرة ومقر سلطة اللورد الحاكم لألف عام. المدينة الوحيدة المسموح لها بامتلاك أسوار حجرية.',
			confidence: 'probable',
		},
		'lake-luthadel': {
			name: 'بحيرة لوثادل',
			description: 'مسطح مائي عذب شرق العاصمة، ملوث بالرماد.',
			confidence: 'probable',
		},
		'pits-hathsin': {
			name: 'حفر هاثسين',
			description: 'مناجم الأتيوم وموطن الكاندرا. كلسير كان السجين الوحيد الذي نجا بحياته.',
			confidence: 'probable',
		},
		fellise: {
			name: 'فيليس',
			description: 'منتجع نبيل جنوب لوثادل حيث امتلك آل رينو عقاراً.',
			confidence: 'probable',
		},
		holstep: {
			name: 'هولستب',
			description: 'بلدة حامية غرب لوثادل، نقطة تفتيش للطرق التجارية والعسكرية.',
			confidence: 'probable',
		},
		'ashmount-tyrian': {
			name: 'تيريان',
			description: 'أقرب جبل رماد إلى لوثادل، مرئي من أسوار المدينة.',
			confidence: 'probable',
		},
		urteau: {
			name: 'أورتو',
			description:
				'عاصمة السيادة الشمالية والمقر العائلي لآل فنتشر. تشتهر بشوارعها القنوية — قنوات مجففة تعمل كطرق.',
			confidence: 'probable',
		},
		'ashmount-kalling': {
			name: 'كالينغ',
			description: 'البركان الرئيسي للسيادة الشمالية برماد أشد قتامة وحدة.',
			confidence: 'probable',
		},
		'fadrex-city': {
			name: 'فادركس',
			description: 'مركز تجاري في السيادة الغربية، محمي بتشكيلات صخرية طبيعية من الكريمنول.',
			confidence: 'probable',
		},
		tremredare: {
			name: 'تريمريدار',
			description: 'عاصمة السيادة الغربية السابقة، هُجرت بعد الانهيار لعدم وجود تحصينات.',
			confidence: 'probable',
		},
		'ashmount-morag': {
			name: 'موراغ',
			description: 'بركان ضخم يسيطر على الأفق الغربي للإمبراطورية.',
			confidence: 'probable',
		},
		chardees: {
			name: 'شارديس',
			description: 'المقر العائلي لآل هاستينغ، مخفي في الخرائط الرسمية.',
			confidence: 'probable',
		},
		austrex: {
			name: 'أوستركس',
			description: 'عاصمة السيادة الجنوبية ومركز مخزن الحبوب للإمبراطورية.',
			confidence: 'probable',
		},
		vetitan: {
			name: 'فيتيتان',
			description:
				'مدينة في السيادة الشمالية مبنية فوق أحد كهوف التخزين للورد الحاكم. غمرها الرماد.',
			confidence: 'probable',
		},
		'ashmount-zerinah': {
			name: 'زيرينا',
			description: 'أبعد جبل رماد جنوباً، منظم حراري لنصف الكرة الجنوبي.',
			confidence: 'probable',
		},
		conventical: {
			name: 'دير سيران',
			description: 'قلعة المحققين المنحوتة في جرف صخري. اكتشف سازد نقش كوان هنا.',
			confidence: 'probable',
		},
		tathingdwen: {
			name: 'تاثينغدوين',
			description: 'عاصمة سيادة تيريس، واقعة في الجبال الشمالية.',
			confidence: 'probable',
		},
		'terris-mountains': {
			name: 'جبال تيريس',
			description: 'سلسلة جبلية استُعبد فيها التيريسيون. الموقع الأصلي لبئر الصعود.',
			confidence: 'probable',
		},
		'tincut-fastness': {
			name: 'حصن تينكت',
			description: 'حصن مخفي في جبال تيريس لجأ إليه المجمع.',
			confidence: 'probable',
		},
		'high-villages': {
			name: 'قرى المرتفعات',
			description: 'شبكة من القرى التيريسية المخفية في الجبال، مرتبطة بأنفاق تحت الأرض.',
			confidence: 'probable',
		},
		'imperial-canal': {
			name: 'القناة الإمبراطورية',
			description: 'ممر مائي اصطناعي يربط تاثينغدوين بلوثادل لنقل الموارد.',
			confidence: 'probable',
		},
		'kandra-homeland': {
			name: 'وطن الكاندرا',
			description: 'كهوف عميقة تحت حفر هاثسين حيث يحرس الكاندرا أسرار اللورد الحاكم.',
			confidence: 'probable',
		},
		'ashmount-torinost': {
			name: 'توريونوست',
			description: 'قمة ضخمة شمال السيادة الغربية.',
			confidence: 'probable',
		},
		'ashmount-faleast': {
			name: 'فاليست',
			description: 'المعلم الرئيسي للسيادة الشرقية برماد أكثر حدة بسبب السيليكا.',
			confidence: 'probable',
		},
		'ashmount-doriel': {
			name: 'دورييل',
			description: 'جبل رماد جنوب لوثادل، قرب ساحل البحر الجنوبي.',
			confidence: 'probable',
		},
		'statlin-city': {
			name: 'ستاتلين',
			description: 'نقطة الارتكاز الجنوبية لشبكة كهوف التخزين للورد الحاكم.',
			confidence: 'probable',
		},
		'tresting-plantation': {
			name: 'مزرعة تريستينغ',
			description: 'مزرعة سكا للورد تريستينغ بمئات العمال وحامية.',
			confidence: 'probable',
		},
		'lekal-city': {
			name: 'مدينة ليكال',
			description: 'مدينة-قلعة آل ليكال حيث المدينة بأكملها امتداد للعقار النبيل.',
			confidence: 'probable',
		},
		mantiz: {
			name: 'مانتيز',
			description: 'مدينة في شمال السيادة الغربية بأربعة قصور كبيرة وتراكم شديد للرماد.',
			confidence: 'probable',
		},
		'channerel-river': {
			name: 'نهر تشانيريل',
			description: 'الشريان النهري الرئيسي للإمبراطورية، حيوي للتجارة والنقل.',
			confidence: 'probable',
		},
		'burnlands-west': {
			name: 'الأراضي المحروقة (غرب)',
			description: 'صحراء غير صالحة للسكن على الحد الغربي للإمبراطورية، قريبة جداً من الشمس.',
			confidence: 'probable',
		},
		'burnlands-east': {
			name: 'الأراضي المحروقة (شرق)',
			description: 'صحراء غير صالحة للسكن على الحد الشرقي للإمبراطورية.',
			confidence: 'probable',
		},
		'arguois-caverns': {
			name: 'كهوف أرغوا',
			description: 'نظام كهوف بين لوثادل والحفر، قاعدة تدريب جيش المتمردين.',
			confidence: 'probable',
		},
		garthwood: {
			name: 'غارثوود',
			description: 'قرية علّم فيها سازد الأديان للسكا المحررين.',
			confidence: 'probable',
		},
		'straffs-camp': {
			name: 'معسكر ستراف',
			description: 'معسكر ستراف فنتشر العسكري جنوب لوثادل أثناء الحصار.',
			confidence: 'probable',
		},
		'koloss-camp': {
			name: 'معسكر الكولوس',
			description: 'موقع جيش الكولوس شمال لوثادل أثناء الحصار.',
			confidence: 'probable',
		},
		longsfollow: {
			name: 'لونغسفولو',
			description: 'بلدة في ممرات السيادة الغربية الجبلية.',
			confidence: 'probable',
		},
		chakatah: {
			name: 'شكاتا',
			description: 'قرية تعدين صغيرة في السيادة الغربية.',
			confidence: 'probable',
		},
		'north-seran': {
			name: 'شمال سيران',
			description: 'إقليم قريب من دير سيران.',
			confidence: 'probable',
		},
		'river-seran': {
			name: 'نهر سيران',
			description: 'ممر مائي جنوبي استخدمته الوزارة لنقل المواد.',
			confidence: 'probable',
		},
		urbene: {
			name: 'أوربين',
			description: 'محطة ترانزيت للوزارة لقوافل الحبوب نحو العاصمة.',
			confidence: 'probable',
		},
		erlac: {
			name: 'إرلاك',
			description: 'حامية جنوب غرب لوثادل تقوم بدوريات على الطرق المؤدية للمدينة.',
			confidence: 'probable',
		},
		'valtroux-city-central': {
			name: 'فالترو',
			description: 'مدينة حامية شمال غرب لوثادل بجيش دائم.',
			confidence: 'probable',
		},
		'haverfrex-cannery-central': {
			name: 'هافرفركس',
			description: 'نقطة صناعية في السيادة الغربية، عقدة إمداد لجيش كيت.',
			confidence: 'probable',
		},
	},

	cities: {
		luthadel: {
			name: 'لوثادل',
			description:
				'عاصمة الإمبراطورية الأخيرة والمركز الثقافي تحت حكم اللورد الحاكم. المدينة الوحيدة بأسوار اصطناعية. مبنية بتناظر شعاعي حول كريديك شو الذي يعلو مباشرة فوق بئر الصعود. ثماني بوابات سميت بأسماء معادن الألومانسي.',
			confidence: 'probable',
		},
		urteau: {
			name: 'أورتو',
			description:
				'أكبر مدينة في السيادة الشمالية والمقر العائلي لآل فنتشر. تتميز بشوارعها القنوية — قنوات عريضة مجففة تعمل كطرق منخفضة. المياه حُوّلت إلى بحيرة تحت أرضية مخفية. بلا أسوار بمرسوم من اللورد الحاكم.',
			confidence: 'probable',
		},
		fadrex: {
			name: 'فادركس',
			description:
				'مركز تجاري في السيادة الغربية، محصن بتشكيلات صخرية كريمنولية تعمل كأسوار طبيعية. يحتوي على أحد كهوف التخزين السرية للورد الحاكم.',
			confidence: 'probable',
		},
	},

	cityLandmarks: {
		luthadel: {
			'kredik-shaw': {
				name: 'كريديك شو',
				description: 'قصر اللورد الحاكم، "تل الألف إبرة". مبني مباشرة فوق بئر الصعود.',
				confidence: 'probable',
			},
			'iron-gate': {
				name: 'بوابة الحديد',
				description: 'البوابة الشمالية، باتجاه أورتو والسيادة الشمالية.',
				confidence: 'probable',
			},
			'steel-gate': {
				name: 'بوابة الفولاذ',
				description: 'البوابة الشمالية الغربية، باتجاه حفر هاثسين.',
				confidence: 'probable',
			},
			'pewter-gate': {
				name: 'بوابة القصدير',
				description: 'البوابة الشمالية الشرقية لـلوثادل.',
				confidence: 'probable',
			},
			'zinc-gate': {
				name: 'بوابة الزنك',
				description: 'البوابة الجنوبية الشرقية لـلوثادل.',
				confidence: 'probable',
			},
			'brass-gate': {
				name: 'بوابة النحاس الأصفر',
				description: 'البوابة الجنوبية، باتجاه فيليس والسيادة الجنوبية.',
				confidence: 'probable',
			},
			'copper-gate': {
				name: 'بوابة النحاس',
				description: 'البوابة الجنوبية الغربية، قرب الحي الصناعي.',
				confidence: 'probable',
			},
			'bronze-gate': {
				name: 'بوابة البرونز',
				description: 'البوابة الغربية، باتجاه نهر تشانيريل.',
				confidence: 'probable',
			},
			'keep-venture': {
				name: 'قصر فنتشر',
				description: 'حصن آل فنتشر. قاعدة عمليات إيلند ومكان حفلات النبلاء.',
				confidence: 'probable',
			},
			'keep-elariel': {
				name: 'قصر إلاريل',
				description: 'مقر آل إلاريل، أحد البيوت الكبرى في لوثادل.',
				confidence: 'probable',
			},
			'keep-hasting': {
				name: 'قصر هاستينغ',
				description: 'قريب من القصر؛ سقط مبكراً في حرب البيوت.',
				confidence: 'probable',
			},
			'clubs-shop': {
				name: 'ورشة كلبس',
				description: 'ورشة نجارة كانت قاعدة عمليات فريق كلسير.',
				confidence: 'probable',
			},
			'camons-safehouse': {
				name: 'مخبأ كامون',
				description: 'الملجأ الأول في الأحياء الفقيرة حيث جنّد كلسير فين.',
				confidence: 'probable',
			},
			'fountain-square': {
				name: 'ساحة النافورة',
				description: 'موقع الإعدامات العلنية وموت كلسير. أُعيد تسميتها بساحة الناجي.',
				confidence: 'probable',
			},
			'lake-luthadel': {
				name: 'بحيرة لوثادل',
				description: 'مسطح مائي عذب كبير شرق الأسوار.',
				confidence: 'probable',
			},
			'canton-of-finance': {
				name: 'كانتون المالية',
				description: 'مقر وزارة الفولاذ لشؤون مالية الإمبراطورية.',
				confidence: 'probable',
			},
			'skaa-hovels': {
				name: 'أكواخ السكا',
				description: 'أحياء السكا البائسة حيث تعمل العصابات.',
				confidence: 'probable',
			},
			'well-of-ascension': {
				name: 'بئر الصعود',
				description: 'مصدر القوة المخفي تحت كريديك شو، حيث تتراكم القوة كل 1024 سنة.',
				confidence: 'probable',
			},
			'tin-gate-north': {
				name: 'بوابة القصدير (شمال)',
				description: 'منطقة البوابة الشمالية الشرقية.',
				confidence: 'probable',
			},
			'assembly-hall': {
				name: 'قاعة المجلس',
				description: 'المبنى الذي اجتمع فيه برلمان إيلند الديمقراطي أثناء الحصار.',
				confidence: 'probable',
			},
			'keep-tekiel': {
				name: 'قصر تيكييل',
				description: 'حصن آل تيكييل، هدف حملة اغتيالات كلسير.',
				confidence: 'probable',
			},
			'luthadel-garrison': {
				name: 'حامية لوثادل',
				description: 'ساحة التدريب العسكري وثكنات المدينة.',
				confidence: 'probable',
			},
			'warehouse-district': {
				name: 'حي المستودعات',
				description: 'حي صناعي قرب القنوات حيث خزّن الفريق الأسلحة.',
				confidence: 'probable',
			},
			'canton-inquisition': {
				name: 'كانتون التفتيش',
				description: 'القاعدة الرئيسية لمحققي الفولاذ، مكان يرهبه الجميع.',
				confidence: 'probable',
			},
			'canton-resource': {
				name: 'كانتون الموارد',
				description: 'المركز الإداري لاقتصاد الإمبراطورية.',
				confidence: 'probable',
			},
			'canton-orthodoxy': {
				name: 'كانتون العقيدة',
				description: 'مركز ديني مسؤول عن نقاء عبادة اللورد الحاكم.',
				confidence: 'probable',
			},
			'keep-lekal': {
				name: 'قصر ليكال',
				description: 'أحد القصور الكبرى لآل ليكال بأبراجه ونوافذه الملونة.',
				confidence: 'probable',
			},
			'hotel-district': {
				name: 'حي الفنادق',
				description: 'منطقة راقية للنبلاء الزائرين من السيادات الخارجية.',
				confidence: 'probable',
			},
			'commercial-district': {
				name: 'الحي التجاري',
				description: 'مركز تجاري حيث تفاوضت البيوت النبيلة على عقودها.',
				confidence: 'probable',
			},
			'industrial-district': {
				name: 'الحي الصناعي',
				description: 'منطقة المصاهر والطواحين والورش قرب القناة.',
				confidence: 'probable',
			},
			'ahlstrom-square': {
				name: 'ساحة ألستروم',
				description: 'ساحة عامة مهمة في لوثادل.',
				confidence: 'probable',
			},
			'south-bridge': {
				name: 'الجسر الجنوبي',
				description: 'نقطة عبور على الممرات المائية للمدينة.',
				confidence: 'probable',
			},
			'the-twists': {
				name: 'المتاهات',
				description: 'حي أحياء فقيرة متاهي، ملجأ عالم السكا السفلي وفريق كلسير.',
				confidence: 'probable',
			},
			sootwarrens: {
				name: 'أوكار السخام',
				description: 'أحد أشد الأحياء بؤساً، مغطى بالرماد.',
				confidence: 'probable',
			},
			'the-cracks': {
				name: 'الشقوق',
				description: 'قطاع متهالك ذو كثافة سكانية عالية.',
				confidence: 'probable',
			},
			'aspen-row': {
				name: 'صف الحور',
				description: 'شارع سكني للعمال المهرة وخدم النبلاء.',
				confidence: 'probable',
			},
			blockstreet: {
				name: 'شارع الكتل',
				description: 'حي سكني كثيف بتخطيط شبكي مصمم للسكا.',
				confidence: 'probable',
			},
		},
		urteau: {
			'ministry-canton': {
				name: 'كانتون التفتيش',
				description: 'مقر الوزارة المبني فوق كهف التخزين الثالث ببحيرة تحت أرضية.',
				confidence: 'probable',
			},
			marketpit: {
				name: 'حفرة السوق',
				description: 'أعرض الشوارع القنوية، الشارع الرئيسي والسوق المركزي.',
				confidence: 'probable',
			},
			'spooks-hideout': {
				name: 'مخبأ سبوك',
				description: '"البيت المشتعل" الذي استخدمه فريق سبوك أثناء الانتفاضة.',
				confidence: 'probable',
			},
			'citizens-estate': {
				name: 'عقار المواطن',
				description: 'قصر نبيل استولى عليه كويليون كمقر لسلطته.',
				confidence: 'probable',
			},
			'luthadel-gate': {
				name: 'بوابة لوثادل',
				description: 'المدخل الجنوبي لشبكة القنوات، باتجاه لوثادل.',
				confidence: 'probable',
			},
			'venture-estate': {
				name: 'عقار فنتشر',
				description: 'المقر العائلي لآل فنتشر في أورتو، مهجور تحت نظام كويليون.',
				confidence: 'probable',
			},
			'burning-district': {
				name: 'الحي المحترق',
				description: 'نحو ثلث المدينة دمّرته الحرائق أثناء تمرد سبوك.',
				confidence: 'probable',
			},
			'skaa-slums': {
				name: 'أحياء السكا الفقيرة',
				description: 'أحياء فقيرة يتجمع فيها الثوار في القنوات الجافة.',
				confidence: 'probable',
			},
			'the-harrows': {
				name: 'الأخاديد',
				description: 'متاهة من القنوات الضيقة المترابطة في القسم الجنوبي.',
				confidence: 'probable',
			},
			'west-docks': {
				name: 'أرصفة الغرب',
				description: 'المحطة الغربية لشبكة القنوات لتحميل البضائع.',
				confidence: 'probable',
			},
			'fedre-aqueduct': {
				name: 'قناة اللورد فيدري',
				description: 'بنية تحتية ضخمة من قبل الانهيار.',
				confidence: 'probable',
			},
			'white-streets': {
				name: 'الشوارع البيضاء',
				description: 'حي ثري كانت أرصفته تُنظف بعناية من الرماد.',
				confidence: 'probable',
			},
			'citizens-home': {
				name: 'منزل المواطن',
				description: 'مقر كويليون، السكا الذي استولى على السلطة.',
				confidence: 'probable',
			},
			'interchange-building': {
				name: 'مبنى التبادل',
				description: 'مركز لوجستي لنقل البضائع بين المستويات.',
				confidence: 'probable',
			},
			'old-city-square': {
				name: 'ساحة المدينة القديمة',
				description: 'المركز التاريخي لأورتو، مسرح الاضطرابات السياسية تحت حكم المواطن.',
				confidence: 'probable',
			},
			'canton-orthodoxy-urteau': {
				name: 'كانتون العقيدة',
				description: 'أدار الشؤون الروحية والقانونية للسيادة الشمالية.',
				confidence: 'probable',
			},
		},
		fadrex: {
			'keep-orielle': {
				name: 'قصر أورييل',
				description: 'القصر الرئيسي على المرتفع، استخدمه الملزم أرادان يومن كقصر.',
				confidence: 'probable',
			},
			'storage-cache': {
				name: 'كهف التخزين',
				description: 'مخبأ سري للمؤن والإلكتروم مخفي في صخور الشمال.',
				confidence: 'probable',
			},
			'cetts-base': {
				name: 'قاعدة كيت',
				description: 'معقل آشويذر كيت المحصن قبل رحيله إلى لوثادل.',
				confidence: 'probable',
			},
			'cremnol-wall-north': {
				name: 'جدار الكريمنول الشمالي',
				description: 'تشكيل صخري طبيعي أحمر برتقالي يحمي المدينة من الشمال.',
				confidence: 'probable',
			},
			'cremnol-wall-south': {
				name: 'جدار الكريمنول الجنوبي',
				description: 'تشكيل صخري يشكل حاجزاً جيولوجياً من الجنوب.',
				confidence: 'probable',
			},
			'yomens-palace': {
				name: 'قصر يومن',
				description: 'المقر الإداري للملزم أرادان يومن.',
				confidence: 'probable',
			},
			'main-gate': {
				name: 'البوابة الرئيسية',
				description: 'المدخل الرئيسي للمدينة عبر التشكيلات الجيولوجية.',
				confidence: 'probable',
			},
			'conway-canal': {
				name: 'قناة كونواي',
				description: 'إحدى القنوات الرئيسية للتجارة والنقل.',
				confidence: 'probable',
			},
			'city-walls-east': {
				name: 'الأسوار الشرقية',
				description: 'المحيط الدفاعي الشرقي المكون من صخور طبيعية.',
				confidence: 'probable',
			},
			'ash-mounds': {
				name: 'تلال الرماد',
				description: 'سهول مغطاة بالرماد حيث خيّم جيش إيلند المحاصر.',
				confidence: 'probable',
			},
			'canton-resource-fadrex': {
				name: 'كانتون الموارد',
				description: 'كانتون الوزارة الذي استخدمه يومن كسجن لفين.',
				confidence: 'probable',
			},
			'informants-residence': {
				name: 'مسكن المخبر',
				description: 'منزل مخبر قديم يعرف أسرار المدينة.',
				confidence: 'probable',
			},
			'deep-wells': {
				name: 'الآبار العميقة',
				description: 'موارد مائية حيوية في مدينة بلا نهر رئيسي.',
				confidence: 'probable',
			},
			'noble-quarter': {
				name: 'الحي النبيل',
				description: 'منطقة سكنية للطبقة الراقية.',
				confidence: 'probable',
			},
		},
	},

	movements: {
		vin: {
			'tfe-1': {
				title: 'طفلة شوارع',
				description:
					'تعمل فين كمراقبة لعصابة كامون للسرقة في أحياء لوثادل الفقيرة، مستخدمة قدراتها الألومانسية المجهولة للتأثير بشكل خفي على من حولها.',
				season: 'الربيع',
				year: '1021 إ.ن.',
			},
			'tfe-2': {
				title: 'احتيال الوزارة',
				description:
					'ترافق فين عصابة كامون في عملية احتيال عالية المخاطر في إقليم المالية، حيث تجذب نبضاتها الألومانسية انتباه كيلسير.',
				season: 'الربيع',
				year: '1021 إ.ن.',
			},
			'tfe-4': {
				title: 'التجنيد',
				description:
					'بعد أن ينقذها كيلسير من ضرب كامون، تُؤخذ فين إلى ورشة كلبز للنجارة — مقر العصابة — وتُعرَّف بخطة الإطاحة باللورد الحاكم.',
				season: 'الربيع',
				year: '1021 إ.ن.',
			},
			'tfe-7': {
				title: 'تدريب مولودة الضباب',
				description:
					'يأخذ كيلسير فين إلى أسوار المدينة قرب بوابة الفولاذ لأول تدريب حقيقي على الألومانسية، يعلمها حرق الفولاذ والحديد بين الأسطح المظلمة.',
				season: 'أواخر الربيع',
				year: '1021 إ.ن.',
			},
			'tfe-8': {
				title: 'عزبة رينو',
				description:
					'تسافر فين غرباً إلى فيليز لتبدأ غطاءها بصفتها الليدي فاليت رينو في عزبة اللورد رينو الريفية، استعداداً لاختراق المجتمع النبيل.',
				season: 'الصيف',
				year: '1021 إ.ن.',
			},
			'tfe-9': {
				title: 'التدريب مع سازد',
				description:
					'تحت إشراف سازد في عزبة رينو، تتعلم فين آداب السلوك والرقص والمظهر اللائق اللازم لانتحال شخصية نبيلة في حفلات البيوت العظمى.',
				season: 'الصيف',
				year: '1021 إ.ن.',
			},
			'tfe-10': {
				title: 'العودة إلى الفريق',
				description:
					'تعود فين إلى لوثادل من فيليز، لتنضم مجدداً إلى الفريق في ورشة كلابز. يأخذها كيلسير في جولة ليلية من الألومانسي عبر المدينة، مواصلاً تدريبها.',
				season: 'الصيف',
				year: '1021 إ.ن.',
			},
			'tfe-10.2': {
				title: 'تجمع المستودع',
				description:
					'تحضر فين تجمعاً سرياً حيث يبشر كيلسير بالثورة أمام عمال السكا المجتمعين في مستودع مخفي.',
				season: 'الصيف',
				year: '1021 إ.ن.',
			},
			'tfe-11': {
				title: 'مذبحة وكر كامون',
				description:
					'تكتشف فين والفريق آثار هجوم وحشي على وكر كامون القديم — لقد قتلت الوزارة كل من بداخله انتقاماً لعملية احتيال ديوان المالية.',
				season: 'الصيف',
				year: '1021 إ.ن.',
			},
			'tfe-13': {
				title: 'أول حفلة في قلعة فنتشر',
				description:
					'تحضر فين أول حفلة لها بصفتها الليدي فاليت رينو، داخلة عالم النبلاء البراق. تلتقي بإلند فنتشر وهو يقرأ وحيداً في زاوية.',
				season: 'الصيف',
				year: '1021 إ.ن.',
			},
			'tfe-14': {
				title: 'استطلاع كريديك شو',
				description:
					'تقوم فين وكيلسير باستطلاع ليلي جريء لقصر اللورد الحاكم، قافزين بين الأبراج الألف لرسم خريطة دفاعاته.',
				season: 'الصيف',
				year: '1021 إ.ن.',
			},
			'tfe-16': {
				title: 'حفلة في قلعة إلاريل',
				description:
					'تحضر فين حفلة في بيت إلاريل، تجمع معلومات استخبارية عن البيوت النبيلة وتحالفاتها مع تعميق هويتها المستعارة.',
				season: 'الصيف',
				year: '1021 إ.ن.',
			},
			'tfe-19': {
				title: 'التقارب',
				description:
					'في حفلة أخرى في قلعة فنتشر، تتعمق علاقة فين بإلند رغم مهمتها. ترقص على الأسطح بعد ذلك.',
				season: 'أواخر الصيف',
				year: '1021 إ.ن.',
			},
			'tfe-22': {
				title: 'دفتر السجلات',
				description:
					'في ورشة كلبز، تدرس فين دفتر سجلات اللورد الحاكم القديم، وتجد إشارات مقلقة إلى العمق ونبوءة بطل العصور.',
				season: 'الخريف',
				year: '1021 إ.ن.',
			},
			'tfe-25': {
				title: 'اندفاعة البيوتر',
				description:
					'عندما يُذبح الجيش المتمرد في هولستيب على يد قوات الحامية، تقوم فين باندفاعة بيوتر يائسة — حرق البيوتر باستمرار لساعات — للمساعدة في إنقاذ الناجين.',
				season: 'أواخر الخريف',
				year: '1021 إ.ن.',
			},
			'tfe-26': {
				title: 'التعافي',
				description:
					'تعود فين إلى ورشة كلبز منهكة من اندفاعة البيوتر، تتعافى بينما تعيد العصابة تجميع صفوفها بعد الخسارة المدمرة في هولستيب.',
				season: 'أواخر الخريف',
				year: '1021 إ.ن.',
			},
			'tfe-30': {
				title: 'تصاعد حرب البيوت',
				description:
					'تشتد حرب البيوت مع تحول البيوت النبيلة على بعضها. تدرك فين أن تلاعب العصابة يعمل لكن العنف يزعجها.',
				season: 'الشتاء',
				year: '1021 إ.ن.',
			},
			'tfe-34': {
				title: 'موت الناجي',
				description:
					'تراقب فين عاجزة من فوق الأسطح بينما يقاتل كيلسير ويُقتل على يد اللورد الحاكم في ساحة النافورة، ليصبح الناجي من هاثسين بموته.',
				season: 'أوائل الربيع',
				year: '1022 إ.ن.',
			},
			'tfe-36': {
				title: 'الهجوم على القصر',
				description:
					'قائدةً تمرد السكا، تقاتل فين طريقها داخل كريديك شو، متقاتلة عبر المحققين والحراس للوصول إلى غرفة عرش اللورد الحاكم.',
				season: 'أوائل الربيع',
				year: '1022 إ.ن.',
			},
			'tfe-38': {
				title: 'قاتلة اللورد الحاكم',
				description:
					'تواجه فين اللورد الحاكم في غرفة عرشه، تنتزع مخازنه المعدنية وتقتل الطاغية الخالد. ينتهي ألف عام من الاضطهاد.',
				season: 'أوائل الربيع',
				year: '1022 إ.ن.',
			},
			'tfe-39': {
				title: 'عصر جديد',
				description:
					'في أعقاب الثورة، تقف فين مع إلند في قلعة فنتشر مع بداية عصر جديد. لا يزال الضباب يتدفق، لكن اللورد الحاكم رحل.',
				season: 'الربيع',
				year: '1022 إ.ن.',
			},
			'woa-1': {
				title: 'حارسة المدينة',
				description:
					'تقوم فين بدوريات على أسوار لوثادل كل ليلة، تراقب التهديدات بينما تتقارب ثلاثة جيوش ببطء نحو المدينة المحررة حديثاً.',
				season: 'الخريف',
				year: '1023 إ.ن.',
			},
			'woa-3': {
				title: 'روح الضباب',
				description:
					'أثناء دوريتها الليلية، تواجه فين شخصية غامضة في الضباب — روح يبدو أنها تراقبها وتشير نحو شيء ما.',
				season: 'الخريف',
				year: '1023 إ.ن.',
			},
			'woa-8': {
				title: 'الحامية والشريكة',
				description:
					'تتنقل فين بين دورها المزدوج كحامية لإلند وشريكته في القصر، تكافح بين حبها له وواجبها في حمايته.',
				season: 'الخريف',
				year: '1023 إ.ن.',
			},
			'woa-14': {
				title: 'مجلس العصابة',
				description:
					'تجتمع العصابة في ورشة كلبز لمناقشة الاستراتيجية مع معسكر جيش ستراف فنتشر شمالاً واقتراب قوات سيت من الغرب.',
				season: 'أوائل الشتاء',
				year: '1023 إ.ن.',
			},
			'woa-22': {
				title: 'التوترات السياسية',
				description:
					'مع اشتداد الحصار، تراقب فين إلند يكافح مع الجمعية ومطالب الحكم بينما تطارد زين عبر الضباب.',
				season: 'الشتاء',
				year: '1023 إ.ن.',
			},
			'woa-26': {
				title: 'التفاوض مع ستراف',
				description:
					'ترافق فين إلند إلى معسكر ستراف فنتشر الحربي شمال المدينة، حيث تُظهر قوتها المرعبة لتخويف الغازي المحتمل.',
				season: 'الشتاء',
				year: '1023 إ.ن.',
			},
			'woa-28': {
				title: 'العودة من التفاوض',
				description:
					'بعد المواجهة المتوترة في معسكر ستراف، تعود فين إلى قلعة فنتشر، تطاردها همسات زين وشكوكها المتزايدة حول دورها.',
				season: 'الشتاء',
				year: '1024 إ.ن.',
			},
			'woa-35': {
				title: 'أزمة الجمعية',
				description:
					'تراقب فين من الشرفة بينما تصوّت الجمعية على عزل إلند ودعوة اللورد بنرود للقيادة، محطمة التجربة الديمقراطية.',
				season: 'الشتاء',
				year: '1024 إ.ن.',
			},
			'woa-43': {
				title: 'الغارة على سيت',
				description:
					'تشن فين هجوماً مدمراً بمفردها على قوات سيت المتمركزة في قلعة هاستينغ، طاردة جيشه من المدينة في استعراض لقوة مولودة الضباب.',
				season: 'أواخر الشتاء',
				year: '1024 إ.ن.',
			},
			'woa-47': {
				title: 'المبارزة مع زين',
				description:
					'بالقرب من قلعة هاستينغ، تبارز فين زين فنتشر في معركة وحشية بين مولودي ضباب، وتقتله في النهاية لحماية من تحب.',
				season: 'أواخر الشتاء',
				year: '1024 إ.ن.',
			},
			'woa-49': {
				title: 'المنفى',
				description:
					'تغادر فين وإلند لوثادل عبر بوابة القصدير، منفيين من حكومة بنرود الجديدة، متجهين شمالاً نحو تيريس مع مرافقة صغيرة.',
				season: 'أواخر الشتاء',
				year: '1024 إ.ن.',
			},
			'woa-50': {
				title: 'الرحيل شمالاً',
				description:
					'تسافر المجموعة الصغيرة نحو تيريس، لكن فين تشعر بشيء يجذبها للعودة — بئر الصعود ليست في الجبال في نهاية المطاف.',
				season: 'أواخر الشتاء',
				year: '1024 إ.ن.',
			},
			'woa-52': {
				title: 'العودة للمعركة',
				description:
					'تقوم فين باندفاعة بيوتر يائسة عائدة إلى لوثادل عندما يخترق الكولوس الأسوار، واصلة في الوقت المناسب للسيطرة على المخلوقات وإنقاذ المدينة.',
				season: 'أواخر الشتاء',
				year: '1024 إ.ن.',
			},
			'woa-54': {
				title: 'البحث عن البئر',
				description:
					'مع نجاة لوثادل لكنها مدمرة، تبحث فين تحت كريديك شو عن بئر الصعود، تتبع إرشاد روح الضباب إلى أعماق أبعد.',
				season: 'أواخر الشتاء',
				year: '1024 إ.ن.',
			},
			'woa-58': {
				title: 'اكتشاف البئر',
				description:
					'تنزل فين إلى الكهوف القديمة تحت كريديك شو وتكتشف بئر الصعود، طاقتها تنبض بالقوة المتراكمة.',
				season: 'الشتاء',
				year: '1024 إ.ن.',
			},
			'woa-59': {
				title: 'إطلاق القوة',
				description:
					'في البئر، تأخذ فين قوة هائلة — ثم، مخدوعة بتلاعب الدمار بالنبوءات، تطلقها. شيء مريع يفر من سجنه.',
				season: 'الشتاء',
				year: '1024 إ.ن.',
			},
			'hoa-1': {
				title: 'الحملة الشمالية',
				description:
					'تقود فين وإلند جيشهما إلى فيتيتان، مدينة تُدفن تحت تصاعد رماد البراكين، لتأمين إحدى مخابئ التخزين المخفية للورد الحاكم.',
				season: 'الربيع',
				year: '1026 إ.ن.',
			},
			'hoa-3': {
				title: 'المخبأ الأول',
				description:
					'تفتح فين كهف تخزين فيتيتان، فتجد طعاماً وإمدادات ولوحاً معدنياً برسالة غامضة من اللورد الحاكم عن الخطر الذي سجنه.',
				season: 'الربيع',
				year: '1026 إ.ن.',
			},
			'hoa-8': {
				title: 'تقسيم القوات',
				description:
					'تعود فين إلى لوثادل حيث ينقسم الجيش: يتجه سازد وبريز شمالاً إلى أورتو، بينما ستسير فين وإلند غرباً إلى مدينة فادركس.',
				season: 'الصيف',
				year: '1026 إ.ن.',
			},
			'hoa-10': {
				title: 'المسيرة غرباً',
				description:
					'تسير فين مع جيش إلند غرباً نحو مدينة فادركس، الرماد يتساقط أثقل كل يوم بينما يتدهور العالم من حولهم.',
				season: 'الصيف',
				year: '1026 إ.ن.',
			},
			'hoa-21': {
				title: 'الوصول إلى فادركس',
				description:
					'يصل الجيش خارج مدينة فادركس ويقيم معسكر حصار على السهول المغطاة بالرماد. يرفض الأوبليغاتور يومن الاستسلام أو تسليم المخبأ.',
				season: 'الخريف',
				year: '1026 إ.ن.',
			},
			'hoa-28': {
				title: 'الجاسوسة في الحفلة',
				description:
					'تتسلل فين إلى فادركس متنكرة كنبيلة، تحضر إحدى حفلات يومن في قلعة أورييل لجمع المعلومات الاستخبارية والبحث عن حل دبلوماسي.',
				season: 'الخريف',
				year: '1026 إ.ن.',
			},
			'hoa-40': {
				title: 'الحفلة الثانية',
				description:
					'تعود فين إلى حفلة أخرى من حفلات يومن، تشاركه مباشرة في نقاش فلسفي حول إرث اللورد الحاكم وتصاعد سقوط الرماد.',
				season: 'أواخر الخريف',
				year: '1026 إ.ن.',
			},
			'hoa-47': {
				title: 'الأسر',
				description:
					'تُأسر فين على يد قوات يومن وتُسجن في إقليم الموارد، تُجرد من معادنها. تُحتجز في زنزانة بالقرب من مخزون آتيوم لا تستطيع الوصول إليه.',
				season: 'الشتاء',
				year: '1026 إ.ن.',
			},
			'hoa-51': {
				title: 'في السجن',
				description:
					'مسجونة ومعزولة عن معادنها، تتأمل فين في تأثير الدمار وطبيعة القوة التي أطلقتها في البئر.',
				season: 'الشتاء',
				year: '1026 إ.ن.',
			},
			'hoa-54': {
				title: 'كشف المخبأ',
				description:
					'تكتشف فين مخبأ تخزين فادركس ومحتوياته الحيوية — طعام وإمدادات ورسالة عن استعدادات اللورد الحاكم الحقيقية.',
				season: 'أواخر الشتاء',
				year: '1026 إ.ن.',
			},
			'hoa-56': {
				title: 'الهروب من فادركس',
				description:
					'عندما يهاجم الكولوس فادركس، تهرب فين من المدينة، ساحبة المحققين بعيداً عن إلند والجيش لحمايتهم.',
				season: 'أوائل الربيع',
				year: '1027 إ.ن.',
			},
			'hoa-59': {
				title: 'قيادة المطاردة',
				description:
					'تطير فين شرقاً نحو لوثادل ومجموعة من المحققين تلاحقها، ساحبة عمداً خدم الدمار بعيداً عن فادركس وإلند.',
				season: 'الربيع',
				year: '1027 إ.ن.',
			},
			'hoa-72': {
				title: 'العودة إلى لوثادل',
				description:
					'تصل فين إلى لوثادل المدمرة وتهدم كريديك شو، مُنهية قصر اللورد الحاكم في استعراض هائل للقوة الألومانسية.',
				season: 'الصيف',
				year: '1027 إ.ن.',
			},
			'hoa-79': {
				title: 'الصعود',
				description:
					'تستمد فين من الضباب ذاته — جسد الحفظ — صاعدة لتصبح وعاء قوة إلهية لمحاربة الدمار مباشرة.',
				season: 'الخريف',
				year: '1027 إ.ن.',
			},
			'hoa-81': {
				title: 'التضحية الأخيرة',
				description:
					'تضحي فين بنفسها لتدمير الدمار، جامعة قوة الحفظ مع قوة حياتها لإبادة إله التدمير.',
				season: 'الخريف',
				year: '1027 إ.ن.',
			},
			'hoa-83': {
				title: 'حقل الولادة الجديدة',
				description:
					'يُعثر على جثة فين في حقل من الزهور والعشب الأخضر — أولى علامات عالم سازد المُعاد تشكيله. ترقد بسلام بجانب إلند.',
				season: 'الخريف',
				year: '1027 إ.ن.',
			},
		},
		kelsier: {
			'tfe-0': {
				title: 'عودة الناجي',
				description:
					'يصل كيلسير إلى مزرعة اللورد تريستينغ في السيادة الجنوبية، قاتلاً النبيل القاسي — ضربته الأولى ضد النبلاء منذ هروبه من الحفر.',
				season: 'الربيع',
				year: '1021 إ.ن.',
			},
			'tfe-1': {
				title: 'المراقب الخفي',
				description:
					'يراقب كيلسير عصابة كامون من الظلال، ملاحظاً استخدام فين اللاواعي للألومانسية — طفلة شوارع بقدرات مولودة ضباب.',
				season: 'الربيع',
				year: '1021 إ.ن.',
			},
			'tfe-3': {
				title: 'تجنيد فين',
				description:
					'ينقذ كيلسير فين من إساءة كامون ويعرض عليها مكاناً في عصابته، كاشفاً الحقيقة عن قدراتها كمولودة ضباب.',
				season: 'الربيع',
				year: '1021 إ.ن.',
			},
			'tfe-5': {
				title: 'سرقة الآتيوم',
				description:
					'يقتحم كيلسير قبو قلعة فنتشر لسرقة الآتيوم، ممولاً التمرد بينما يختبر دفاعات البيوت النبيلة.',
				season: 'الربيع',
				year: '1021 إ.ن.',
			},
			'tfe-6': {
				title: 'تجمع العصابة',
				description:
					'في ورشة كلبز للنجارة، يجمع كيلسير العصابة كاملة — هام وبريز ودوكسون وكلبز والآن فين — ويكشف خطته للإطاحة باللورد الحاكم.',
				season: 'الربيع',
				year: '1021 إ.ن.',
			},
			'tfe-7': {
				title: 'تعليم المتدربة',
				description:
					'يأخذ كيلسير فين إلى أسوار المدينة قرب بوابة الفولاذ لتدريبها على الألومانسية، يعلمها الدفع والسحب على المعادن بينما يقفزان بين الأبراج.',
				season: 'أواخر الربيع',
				year: '1021 إ.ن.',
			},
			'tfe-8': {
				title: 'غطاء رينو',
				description:
					'يرافق كيلسير فين إلى فيليز وعزبة اللورد رينو، مؤسساً هويتها المستعارة كالليدي فاليت لاختراق المجتمع النبيل.',
				season: 'الصيف',
				year: '1021 إ.ن.',
			},
			'tfe-10': {
				title: 'التخطيط للثورة',
				description:
					'بعد عودته إلى لوثادل، يجتمع كيلسير مع الفريق في ورشة كلابز لمراجعة تقدم التمرد. يأخذ فين في جولة ليلية عبر المدينة لمواصلة تدريبها على الألومانسي.',
				season: 'الصيف',
				year: '1021 إ.ن.',
			},
			'tfe-10.2': {
				title: 'نمو التمرد',
				description:
					'يقود كيلسير تجمعات المستودعات في أحياء لوثادل الفقيرة، بانياً تمرد السكا من خلال أسطورته كالناجي من هاثسين.',
				season: 'الصيف',
				year: '1021 إ.ن.',
			},
			'tfe-11': {
				title: 'مذبحة وكر كامون',
				description:
					'يكتشف كيلسير والفريق أن الوزارة ذبحت كل من في وكر كامون القديم انتقاماً لعملية احتيال ديوان المالية، مما يقوّي عزيمتهم ضد حاكم اللورد.',
				season: 'الصيف',
				year: '1021 إ.ن.',
			},
			'tfe-14': {
				title: 'استطلاع القصر',
				description:
					'يستطلع كيلسير وفين كريديك شو ليلاً، راسمين خريطة دفاعات القصر ومختبرين قدرات استجابة المحققين.',
				season: 'الصيف',
				year: '1021 إ.ن.',
			},
			'tfe-18': {
				title: 'عمليات حرب البيوت',
				description:
					'يدبر كيلسير هجمات بين البيوت النبيلة، مغتالاً أهدافاً وزارعاً أدلة لتأجيج حرب البيوت التي تُضعف النبلاء.',
				season: 'أواخر الصيف',
				year: '1021 إ.ن.',
			},
			'tfe-21': {
				title: 'الجيش المتمرد',
				description:
					'يسافر كيلسير إلى كهوف أرغوا لتفقد الجيش المتمرد المتنامي المختبئ في الجبال، مدرباً جنوداً لم يمسكوا سلاحاً قط.',
				season: 'الخريف',
				year: '1021 إ.ن.',
			},
			'tfe-25': {
				title: 'كارثة هولستيب',
				description:
					'يقوم كيلسير باندفاعة بيوتر إلى هولستيب عندما تكتشف الحامية الجيش المتمرد وتذبحه. يصل ليجد الدمار ويضطر للفرار جنوباً.',
				season: 'أواخر الخريف',
				year: '1021 إ.ن.',
			},
			'tfe-26': {
				title: 'لملمة الشتات',
				description:
					'في ورشة كلبز، يعيد كيلسير تجميع صفوفه بعد كارثة هولستيب، رافضاً التخلي عن الثورة حتى عندما يبدو الأمل ضائعاً.',
				season: 'الشتاء',
				year: '1021 إ.ن.',
			},
			'tfe-32': {
				title: 'تدمير الحفر',
				description:
					'يعود كيلسير إلى حفر هاثسين — موقع أعظم معاناته — ويدمر بلورات الآتيوم، قاطعاً أثمن مورد للورد الحاكم.',
				season: 'الشتاء',
				year: '1022 إ.ن.',
			},
			'tfe-34': {
				title: 'موقف الناجي الأخير',
				description:
					'يواجه كيلسير اللورد الحاكم في ساحة النافورة، خائضاً معركة مستحيلة. يموت مبتسماً، ليصبح شهيداً يشعل موته الثورة.',
				season: 'أوائل الربيع',
				year: '1022 إ.ن.',
			},
			'tfe-35': {
				title: 'ما بعد الموت',
				description:
					'من خلال أورسيور الكاندرا الذي يرتدي عظامه، تتكشف خطة كيلسير الأخيرة — كان موته الشرارة التي أشعلت الثورة في أرجاء لوثادل.',
				season: 'أوائل الربيع',
				year: '1022 إ.ن.',
			},
			'woa-1': {
				title: 'ما وراء الحجاب',
				description:
					'محاصراً في العالم المعرفي بعد موته، يوجد كيلسير كظل معرفي بالقرب من بئر الصعود، يراقب لوثادل تتحول تحت حكم إلند.',
				season: 'الخريف',
				year: '1023 إ.ن.',
			},
			'woa-59': {
				title: 'شاهد على الإطلاق',
				description:
					'يراقب كيلسير عاجزاً من العالم المعرفي بينما تأخذ فين القوة في بئر الصعود وتطلقها، محررة الدمار من سجنه.',
				season: 'الشتاء',
				year: '1024 إ.ن.',
			},
			'sh-4.1': {
				title: 'رحلة معرفية غرباً',
				description:
					'كظل معرفي، يعبر كيلسير محيط الضباب نحو الأراضي المحروقة الغربية لطلب المساعدة من قلعة الإير.',
				season: 'الربيع',
				year: '1025 إ.ن.',
			},
			'sh-6.1': {
				title: 'التحذير في فادريكس',
				description:
					'يصل كيلسير إلى الانعكاس المعرفي لمدينة فادريكس، ملتقياً بهويد ومحاولاً تحذير فين من سنبلتها الهيمالورجية.',
				season: 'الخريف',
				year: '1026 إ.ن.',
			},
			'hoa-1': {
				title: 'صمود الناجي',
				description:
					'في العالم المعرفي، يعمل كيلسير إلى جانب قوة الحفظ المتلاشية، باحثاً عن أي طريقة لمساعدة العالم المادي في مقاومة تأثير الدمار المتنامي.',
				season: 'الربيع',
				year: '1026 إ.ن.',
			},
			'hoa-50': {
				title: 'حمل الحفظ',
				description:
					'مع تلاشي وعي الحفظ، يتولى كيلسير قوة الشظية — حاملاً إياها بشكل ناقص من العالم المعرفي، كاسباً الوقت للفصل الأخير.',
				season: 'الربيع',
				year: '1027 إ.ن.',
			},
			'hoa-81': {
				title: 'تمرير المشعل',
				description:
					'تأخذ فين قوة الحفظ من كيلسير لتدمير الدمار. يطلق الناجي الشظية، دوره قد اكتمل — لكنه يرفض العبور إلى ما وراء.',
				season: 'الخريف',
				year: '1027 إ.ن.',
			},
			'hoa-83': {
				title: 'الناجي يستمر',
				description:
					'حتى بينما يعيد الانسجام تشكيل العالم، يستمر كيلسير في العالم المعرفي — الناجي الذي رفض أن يوقفه حتى الموت.',
				season: 'الخريف',
				year: '1027 إ.ن.',
			},
		},
		sazed: {
			'tfe-9': {
				title: 'الخادم التيريسي',
				description:
					'يصل سازد إلى عزبة اللورد رينو في فيليز ليخدم كمعلم لفين، يعلمها طرق النبلاء بينما يحفظ سراً الأديان القديمة.',
				season: 'الصيف',
				year: '1021 إ.ن.',
			},
			'tfe-10.2': {
				title: 'تجمع المستودع',
				description:
					'يحضر سازد التجمع السري في المستودع إلى جانب كيلسير وفين، يراقب بينما يبشر الناجي بالثورة أمام عمال السكا المجتمعين.',
				season: 'الصيف',
				year: '1021 إ.ن.',
			},
			'tfe-13': {
				title: 'الحارس في الحفلة',
				description:
					'يرافق سازد فين إلى أول حفلة لها كخادمها، يراقبها من أماكن الخدم بينما تتسلل إلى المجتمع النبيل.',
				season: 'الصيف',
				year: '1021 إ.ن.',
			},
			'tfe-22': {
				title: 'عمل العالِم',
				description:
					'يعلم سازد فين بين الحفلات في عزبة رينو، يشاركها معرفته الواسعة بالأديان بينما يدرس أنماط الإمبراطورية النهائية.',
				season: 'الخريف',
				year: '1021 إ.ن.',
			},
			'tfe-34': {
				title: 'شاهد على الثورة',
				description:
					'يكون سازد في لوثادل أثناء الثورة، يشاهد السكا ينتفضون وكيلسير يسقط في ساحة النافورة.',
				season: 'أوائل الربيع',
				year: '1022 إ.ن.',
			},
			'tfe-38': {
				title: 'سقوط الإمبراطورية',
				description:
					'يساعد سازد العصابة في الهجوم على كريديك شو، مستخدماً الفيروكيمياء للقتال عبر حراس اللورد الحاكم.',
				season: 'أوائل الربيع',
				year: '1022 إ.ن.',
			},
			'tfe-39': {
				title: 'بداية جديدة',
				description:
					'في الأعقاب، يبدأ سازد بدراسة سجلات كريديك شو، باحثاً عن إجابات حول العمق ونبوءة بطل العصور.',
				season: 'الربيع',
				year: '1022 إ.ن.',
			},
			'woa-4': {
				title: 'المعلم المتجول',
				description:
					'يسافر سازد عبر السيادة الشرقية، زائراً القرى الريفية لنشر الأديان والمعارف المكبوتة بين السكا المحررين حديثاً.',
				season: 'الخريف',
				year: '1023 إ.ن.',
			},
			'woa-7': {
				title: 'دير سيران',
				description:
					'بتوجيه من مارش، يكتشف سازد دير سيران — معقل مرعب للمحققين حيث يجد لوح كوان الفولاذي المنقوش.',
				season: 'أواخر الخريف',
				year: '1023 إ.ن.',
			},
			'woa-12': {
				title: 'فك رموز اللوح',
				description:
					'يدرس سازد نقش كوان في الدير، كاشفاً تحذير الحافظ التيريسي اليائس بأن نبوءة بطل العصور قد تم تحريفها.',
				season: 'أواخر الخريف',
				year: '1023 إ.ن.',
			},
			'woa-15': {
				title: 'القتل في الضباب',
				description:
					'عائداً غرباً عبر أوربين، يواجه سازد قرى مات فيها أشخاص بشكل غامض في الضباب — أولى علامات مرض الضباب.',
				season: 'الشتاء',
				year: '1023 إ.ن.',
			},
			'woa-22': {
				title: 'العودة إلى لوثادل',
				description:
					'يصل سازد إلى لوثادل حاملاً أخباراً خطيرة عن النبوءة المحرَّفة والقتل في الضباب والمعنى الحقيقي للنقش الفولاذي.',
				season: 'الشتاء',
				year: '1023 إ.ن.',
			},
			'woa-40': {
				title: 'مناقشة النبوءة',
				description:
					'يعمل سازد مع تيندويل في قلعة فنتشر، مقارناً النسخة الأصلية والمحرَّفة من نبوءة بطل العصور، متقرباً منها.',
				season: 'أواخر الشتاء',
				year: '1024 إ.ن.',
			},
			'woa-52': {
				title: 'الدفاع عن البوابة',
				description:
					'عندما يخترق الكولوس أسوار لوثادل، يستخدم سازد الفيروكيمياء لصد بوابة القصدير بمفرده، مستنزفاً صفاته المخزنة في موقف أخير يائس.',
				season: 'أواخر الشتاء',
				year: '1024 إ.ن.',
			},
			'woa-57': {
				title: 'قتال مارش',
				description:
					'يقاتل سازد مارش الخاضع لسيطرة الدمار في ممرات كريديك شو، بالكاد ينجو من هجوم المحقق بينما تنزل فين إلى البئر.',
				season: 'الشتاء',
				year: '1024 إ.ن.',
			},
			'woa-59': {
				title: 'موت تيندويل',
				description:
					'يكتشف سازد أن تيندويل قُتلت أثناء هجوم الكولوس. مدمراً، يبدأ أزمة إيمانه، مشككاً في كل دين يحمله.',
				season: 'الشتاء',
				year: '1024 إ.ن.',
			},
			'hoa-4': {
				title: 'الدبلوماسية الجنوبية',
				description:
					'يزور سازد مدينة ليكال مع بريز للتفاوض على معاهدة، مستخدماً الدبلوماسية لضم الملك الجنوبي إلى تحالف إلند المتنامي.',
				season: 'الصيف',
				year: '1026 إ.ن.',
			},
			'hoa-8': {
				title: 'التوجه شمالاً',
				description:
					'يتلقى سازد مهمته لتأمين أورتو دبلوماسياً بينما يأخذ إلند الجيش غرباً. يغادر عبر البوابة الشمالية.',
				season: 'الصيف',
				year: '1026 إ.ن.',
			},
			'hoa-14': {
				title: 'الوصول إلى أورتو',
				description:
					'يصل سازد إلى أورتو ليجدها تحت حكم المواطن كويليون القمعي، مؤسساً جيباً دبلوماسياً في عزبة فنتشر المهجورة.',
				season: 'الخريف',
				year: '1026 إ.ن.',
			},
			'hoa-25': {
				title: 'بناء الثقة',
				description:
					'يعمل سازد على بناء الثقة مع سكان أورتو بينما يدرس تاريخ المدينة ويبحث عن كهف التخزين تحت مبنى الوزارة.',
				season: 'أوائل الشتاء',
				year: '1026 إ.ن.',
			},
			'hoa-40': {
				title: 'التحقيق في الوزارة',
				description:
					'يحقق سازد في إقليم الوزارة، عاملاً على الوصول إلى كهف التخزين تحته بينما يتنقل في حكومة كويليون المرتابة.',
				season: 'الشتاء',
				year: '1026 إ.ن.',
			},
			'hoa-50': {
				title: 'اكتشاف الكهف',
				description:
					'يكتشف سازد آلية إغراق نظام القنوات الجافة — كان اللورد الحاكم قد جفف القنوات لإخفاء المياه في كهف التخزين أسفلها.',
				season: 'أوائل الربيع',
				year: '1027 إ.ن.',
			},
			'hoa-58': {
				title: 'إنقاذ أورتو',
				description:
					'بينما تجتاح الحرائق المدينة أثناء الثورة ضد كويليون، يطلق سازد المياه المخزنة لإغراق القنوات، منقذاً أورتو من الدمار.',
				season: 'الربيع',
				year: '1027 إ.ن.',
			},
			'hoa-64': {
				title: 'إعادة البناء',
				description:
					'مع عزل كويليون وإخماد الحرائق، يساعد سازد في إعادة بناء أورتو، موزعاً الإمدادات من المخبأ بينما يدرس رسالة اللورد الحاكم.',
				season: 'الصيف',
				year: '1027 إ.ن.',
			},
			'hoa-69': {
				title: 'الرحلة إلى هاثسين',
				description:
					'يسافر سازد إلى حفر هاثسين، مدفوعاً بتقارب الأحداث. دراسته للأديان ونقش كوان قادته إلى اكتشاف مريع.',
				season: 'الخريف',
				year: '1027 إ.ن.',
			},
			'hoa-71': {
				title: 'التجمع الأخير',
				description:
					'يعود سازد إلى لوثادل بينما يموت العالم من حوله، الرماد يتساقط كستائر سوداء. يحمل معرفة كل دين وكل نبوءة.',
				season: 'الخريف',
				year: '1027 إ.ن.',
			},
			'hoa-82': {
				title: 'بطل العصور',
				description:
					'مع تدمير فين والدمار معاً، يدرك سازد أنه بطل العصور. يتولى قوة كل من الحفظ والدمار في بئر الصعود.',
				season: 'الخريف',
				year: '1027 إ.ن.',
			},
			'hoa-83': {
				title: 'الانسجام',
				description:
					'يصعد سازد كالانسجام، جامعاً الدمار والحفظ. يعيد تشكيل العالم — محركاً الكوكب، مستعيداً الخضرة، وشافياً ألف عام من الأضرار.',
				season: 'الخريف',
				year: '1027 إ.ن.',
			},
		},
		elend: {
			'tfe-12': {
				title: 'النبيل القارئ',
				description:
					'يُقدَّم إلند فنتشر في حفلة في قلعته، يقرأ وحيداً بينما بقية النبلاء يرقصون ويتآمرون من حوله.',
				season: 'الصيف',
				year: '1021 إ.ن.',
			},
			'tfe-13': {
				title: 'لقاء الليدي فاليت',
				description:
					'يلتقي إلند بالليدي فاليت رينو الغامضة في حفلة، منجذباً لسلوكها غير التقليدي وذكائها الحاد.',
				season: 'الصيف',
				year: '1021 إ.ن.',
			},
			'tfe-19': {
				title: 'المغازلة',
				description:
					'يتنامى افتتان إلند بالليدي فاليت مع تبادلهما الأحاديث في الحفلات، يناقشان الفلسفة وإخفاقات النبلاء.',
				season: 'أواخر الصيف',
				year: '1021 إ.ن.',
			},
			'tfe-24': {
				title: 'المتآمر النبيل',
				description:
					'ينظم إلند سراً النبلاء المعتدلين المعارضين لطغيان اللورد الحاكم، يجتمعون في مكتبة قلعة فنتشر الخاصة.',
				season: 'الخريف',
				year: '1021 إ.ن.',
			},
			'tfe-34': {
				title: 'الثورة',
				description:
					'يشهد إلند فوضى انتفاضة السكا في ساحة النافورة ويتقدم لحماية النبلاء والعامة من العنف.',
				season: 'أوائل الربيع',
				year: '1022 إ.ن.',
			},
			'tfe-38': {
				title: 'قائد غير متوقع',
				description:
					'في أعقاب موت اللورد الحاكم، يبرز إلند كصوت موحد، داعياً للنظام بينما تنهار الإمبراطورية من حوله.',
				season: 'أوائل الربيع',
				year: '1022 إ.ن.',
			},
			'tfe-39': {
				title: 'الملك الجديد',
				description:
					'يُعلن إلند فنتشر ملكاً على السيادة المركزية، مبتدئاً المهمة الصعبة لبناء حكومة ديمقراطية من أنقاض الطغيان.',
				season: 'الربيع',
				year: '1022 إ.ن.',
			},
			'woa-1': {
				title: 'ملك لوثادل',
				description:
					'يعمل إلند بلا كلل في قلعة فنتشر لتأسيس حكومة دستورية، يصيغ القوانين ويبني جمعية بينما تتجمع الجيوش في الخارج.',
				season: 'الخريف',
				year: '1023 إ.ن.',
			},
			'woa-5': {
				title: 'الجمعية',
				description:
					'يخاطب إلند الجمعية التي أنشأها، داعياً إلى المبادئ الديمقراطية حتى وهو يُحذَّر بأن الديمقراطية قد لا تنجو من الحصار.',
				season: 'الخريف',
				year: '1023 إ.ن.',
			},
			'woa-12': {
				title: 'مراقبة الحصار',
				description:
					'يراقب إلند خطوط الحصار من أسوار المدينة، يشاهد جيش أبيه ستراف في الشمال وقوات سيت تقترب من الغرب.',
				season: 'أوائل الشتاء',
				year: '1023 إ.ن.',
			},
			'woa-22': {
				title: 'الكفاح من أجل الديمقراطية',
				description:
					'يواجه إلند معارضة متصاعدة في الجمعية مع دفع الخوف من الحصار كثيرين للبحث عن قائد أقوى من ملك فيلسوف.',
				season: 'الشتاء',
				year: '1023 إ.ن.',
			},
			'woa-26': {
				title: 'التفاوض مع الأب',
				description:
					'يخرج إلند إلى معسكر ستراف فنتشر للتفاوض، مصطحباً فين كحاميته. يكشف اللقاء عن احتقار ستراف لابنه المثالي.',
				season: 'الشتاء',
				year: '1023 إ.ن.',
			},
			'woa-28': {
				title: 'تدبير الدبلوماسية',
				description:
					'في قلعة فنتشر، يحاول إلند المناورة بين الجيوش الثلاثة — ستراف وسيت وجحافل الكولوس المقتربة.',
				season: 'الشتاء',
				year: '1024 إ.ن.',
			},
			'woa-35': {
				title: 'المعزول',
				description:
					'تصوِّت الجمعية على استبدال إلند باللورد بنرود، مستغلة بنداً في دستور إلند الديمقراطي نفسه. مثاليته تكون سبب سقوطه.',
				season: 'الشتاء',
				year: '1024 إ.ن.',
			},
			'woa-42': {
				title: 'المهمة إلى الكولوس',
				description:
					'يغادر إلند لوثادل عبر الأنفاق للتفاوض مع جاستيس ليكال وجيشه من الكولوس، رهان يائس لتأمين حليف.',
				season: 'أواخر الشتاء',
				year: '1024 إ.ن.',
			},
			'woa-46': {
				title: 'العودة من الكولوس',
				description:
					'يعود إلند من معسكر الكولوس بعد فشل التفاوض — فقد جاستيس السيطرة على وحوشه. سيهاجم الكولوس بغض النظر.',
				season: 'أواخر الشتاء',
				year: '1024 إ.ن.',
			},
			'woa-49': {
				title: 'المنفى من لوثادل',
				description:
					'يغادر إلند لوثادل مع فين عبر بوابة القصدير، منفياً من حكومة بنرود، متجهاً شمالاً نحو تيريس لطلب مساعدة مجمع الحافظين.',
				season: 'أواخر الشتاء',
				year: '1024 إ.ن.',
			},
			'woa-50': {
				title: 'الرحلة شمالاً',
				description:
					'تسافر مجموعة إلند نحو تيريس، لكن القلق المتنامي يدفعهم لإعادة التفكير. قد لا تكون بئر الصعود حيث ظنوا.',
				season: 'أواخر الشتاء',
				year: '1024 إ.ن.',
			},
			'woa-52': {
				title: 'المعركة',
				description:
					'يعود إلند ليجد لوثادل تحت هجوم الكولوس، يقاتل وسط الفوضى بينما تُخترق الأسوار وتوشك المدينة على السقوط.',
				season: 'أواخر الشتاء',
				year: '1024 إ.ن.',
			},
			'woa-58': {
				title: 'إلى البئر',
				description:
					'ينزل إلند تحت كريديك شو مع فين، باحثاً عن بئر الصعود بينما يقاتل مارش سازد فوقهم.',
				season: 'الشتاء',
				year: '1024 إ.ن.',
			},
			'woa-59': {
				title: 'الإمبراطور المولود من الضباب',
				description:
					'مطعوناً ويحتضر عند البئر، يُنقذ إلند عندما تُجبره فين على ابتلاع حبة لِراسيوم، محولة إياه إلى مولود ضباب.',
				season: 'الشتاء',
				year: '1024 إ.ن.',
			},
			'hoa-1': {
				title: 'إمبراطور في الحرب',
				description:
					'يقود إلند جيوشه إلى فيتيتان، إمبراطوراً مولوداً من الضباب يدير حملات عسكرية لتأمين مخابئ التخزين المخفية للورد الحاكم.',
				season: 'الربيع',
				year: '1026 إ.ن.',
			},
			'hoa-3': {
				title: 'تأمين المخبأ',
				description:
					'يؤمن إلند كهف تخزين فيتيتان، واجداً طعاماً ولوحاً معدنياً برسالة تحذيرية عن الخطر الذي سجنه راشك.',
				season: 'الربيع',
				year: '1026 إ.ن.',
			},
			'hoa-8': {
				title: 'التقسيم الاستراتيجي',
				description:
					'في لوثادل، يقسم إلند قواته: مرسلاً سازد لتأمين أورتو دبلوماسياً بينما يسير غرباً لأخذ فادركس بالقوة إن لزم الأمر.',
				season: 'الصيف',
				year: '1026 إ.ن.',
			},
			'hoa-10': {
				title: 'المسيرة الغربية',
				description:
					'يقود إلند جيشه غرباً نحو مدينة فادركس، الرماد يتساقط أثقل كل يوم. يتدرب كمولود ضباب أثناء المسيرة.',
				season: 'الصيف',
				year: '1026 إ.ن.',
			},
			'hoa-21': {
				title: 'حصار فادركس',
				description:
					'يصل جيش إلند إلى فادركس ويقيم خطوط حصار على السهول المغطاة بالرماد. يرفض يومن التفاوض أو تسليم المخبأ.',
				season: 'الخريف',
				year: '1026 إ.ن.',
			},
			'hoa-28': {
				title: 'المحاصِر المتردد',
				description:
					'يكافح إلند مع دوره كغازٍ، محاولاً الدبلوماسية حتى بينما يدفعه جنرالاته نحو الهجوم. يتفاقم سقوط الرماد يومياً.',
				season: 'الخريف',
				year: '1026 إ.ن.',
			},
			'hoa-47': {
				title: 'فقدان فين',
				description:
					'عندما تُأسر فين داخل فادركس، يواجه إلند خياراً مستحيلاً بين إنقاذ زوجته وحماية عشرات الآلاف من الجنود.',
				season: 'الشتاء',
				year: '1026 إ.ن.',
			},
			'hoa-54': {
				title: 'دخول فادركس',
				description:
					'هجوم الكولوس يفرض تحالفاً مؤقتاً مع يومن. يدخل إلند المدينة ويصل إلى مخبأ التخزين، واجداً رسالة اللورد الحاكم الأخيرة.',
				season: 'أواخر الشتاء',
				year: '1026 إ.ن.',
			},
			'hoa-58': {
				title: 'المغادرة إلى هاثسين',
				description:
					'مع تأمين المخبأ ورحيل فين شرقاً، يعلم إلند الحقيقة الأخيرة: الآتيوم لا بد أن يكون في حفر هاثسين. يسير بجيشه جنوباً.',
				season: 'أوائل الربيع',
				year: '1027 إ.ن.',
			},
			'hoa-61': {
				title: 'المسيرة إلى الحفر',
				description:
					'يقود إلند جيشه المنهك إلى حفر هاثسين، حيث يرقد وطن الكاندرا تحتها. يتبعه جيش المحققين بقيادة مارش عن كثب.',
				season: 'الربيع',
				year: '1027 إ.ن.',
			},
			'hoa-69': {
				title: 'معركة هاثسين',
				description:
					'يحرق إلند آخر الآتيوم في معركة يائسة ضد المحققين والكولوس في الحفر، عالماً أن ذلك يعني موته عندما ينفد المعدن.',
				season: 'الصيف',
				year: '1027 إ.ن.',
			},
			'hoa-79': {
				title: 'موت الإمبراطور',
				description:
					'يُقتل إلند على يد مارش في اللحظات الأخيرة من معركة هاثسين، آتيومه قد نفد. يموت وقد أحرق كل المعدن الذي سعى إليه الدمار.',
				season: 'الخريف',
				year: '1027 إ.ن.',
			},
			'hoa-83': {
				title: 'لمّ الشمل في الموت',
				description:
					'يُعثر على جثة إلند بجانب فين في حقل الزهور — هدية سازد الأولى للعالم المُعاد تشكيله — بسلام بعد كل كفاحهما.',
				season: 'الخريف',
				year: '1027 إ.ن.',
			},
		},
		marsh: {
			'tfe-7': {
				title: 'الأخ المتردد',
				description:
					'يصل مارش إلى ورشة كلبز، الأخ الأكبر لكيلسير وقائد متمرد بحقه. ينضم على مضض لخطة العصابة.',
				season: 'أواخر الربيع',
				year: '1021 إ.ن.',
			},
			'tfe-10.2': {
				title: 'تجمع المستودع',
				description:
					'يحضر مارش التجمع السري في منطقة المستودعات مع العصابة، يراقب أخاه كيلسير وهو يبشر بالثورة أمام عمال السكا المجتمعين.',
				season: 'الصيف',
				year: '1021 إ.ن.',
			},
			'tfe-13': {
				title: 'لقاء جبل تيريان',
				description:
					'يلتقي مارش بكيلسير عند جبل تيريان، على بعد عدة كيلومترات من لوثادل، لمناقشة خطة التمرد بعيداً عن آذان الوزارة قبل بدء تسلله الخطير.',
				season: 'الصيف',
				year: '1021 إ.ن.',
			},
			'tfe-20': {
				title: 'أعمق في الخفاء',
				description:
					'يتوغل مارش أعمق في تسلسل الوزارة الهرمي في كريديك شو، يتعلم أسرار الهيمالورجيا المظلمة بينما يخاطر بالاكتشاف من قبل المحققين.',
				season: 'أواخر الصيف',
				year: '1021 إ.ن.',
			},
			'tfe-30': {
				title: 'الاختفاء',
				description:
					'يصمت مارش، تتوقف اتصالاته بينما يختفي في أعمق مستويات إقليم المحققين. تخشى العصابة الأسوأ.',
				season: 'الشتاء',
				year: '1021 إ.ن.',
			},
			'tfe-38': {
				title: 'المحقق',
				description:
					'يظهر مارش أثناء الهجوم النهائي على كريديك شو، لا يزال حياً لكنه تحوّل — مسامير حديدية مدقوقة في عينيه. يقاتل مع العصابة رغم تحوله.',
				season: 'أوائل الربيع',
				year: '1022 إ.ن.',
			},
			'woa-4': {
				title: 'الهائم الشرقي',
				description:
					'يهيم مارش في السيادة الشرقية كمحقق وحيد، ساعياً لفهم تحوله بينما يساعد سازد في التحقيق في القرى البعيدة.',
				season: 'الخريف',
				year: '1023 إ.ن.',
			},
			'woa-7': {
				title: 'دليل الدير',
				description:
					'يقود مارش سازد إلى دير سيران، معقل المحققين في الشمال النائي، لإيجاد السجلات التي يبحث عنها سازد.',
				season: 'أواخر الخريف',
				year: '1023 إ.ن.',
			},
			'woa-12': {
				title: 'الهجران',
				description:
					'يهجر مارش سازد فجأة في الدير ويختفي في البرية، مدفوعاً بقوى لا يستطيع مقاومتها بشكل متزايد. يتنامى تأثير الدمار.',
				season: 'أواخر الخريف',
				year: '1023 إ.ن.',
			},
			'woa-57': {
				title: 'دمية الدمار',
				description:
					'يظهر مارش في كريديك شو تحت سيطرة الدمار الكاملة، يقاتل سازد في الممرات بينما تنزل فين إلى بئر الصعود أسفلهم.',
				season: 'الشتاء',
				year: '1024 إ.ن.',
			},
			'woa-59': {
				title: 'حراسة البئر',
				description:
					'يحرس مارش مدخل البئر كدمية للدمار، يقاتل لمنع أي شخص من الوصول إلى فين — أو مساعدتها في اتخاذ القرار الصحيح.',
				season: 'الشتاء',
				year: '1024 إ.ن.',
			},
			'hoa-0': {
				title: 'صنع المحققين',
				description:
					'تحت سيطرة الدمار، يقوم مارش بطقوس هيمالورجية مظلمة في تاثينغدوين، صانعاً محققين جدداً من الفيروكيميائيين والألومانسيين الأسرى.',
				season: 'الربيع',
				year: '1026 إ.ن.',
			},
			'hoa-6': {
				title: 'قيادة الكولوس',
				description:
					'يقود مارش جيشاً متنامياً من الكولوس نيابة عن الدمار، متنقلاً عبر السيادة الشرقية ويجمع القوات للمعركة النهائية.',
				season: 'الصيف',
				year: '1026 إ.ن.',
			},
			'hoa-22': {
				title: 'قرب تيريان',
				description:
					'يعمل مارش قرب جبل تيريان، صانعاً مسامير هيمالورجية من الأسرى وبانياً جيش الدمار من المحققين في ظل الجبل البركاني.',
				season: 'الشتاء',
				year: '1026 إ.ن.',
			},
			'hoa-38': {
				title: 'تثبيت مسمار بنرود',
				description:
					'يتسلل مارش إلى لوثادل لتثبيت مسمار هيمالورجي في الملك بنرود، مانحاً الدمار قناة مباشرة للسيطرة على حكم العاصمة.',
				season: 'الشتاء',
				year: '1026 إ.ن.',
			},
			'hoa-45': {
				title: 'التقارب نحو فادركس',
				description:
					'يقود مارش محققيه نحو مدينة فادركس، متقارباً مع الحصار بينما يسعى الدمار لاستعادة مخبأ الآتيوم المخفي داخلها.',
				season: 'الشتاء',
				year: '1026 إ.ن.',
			},
			'hoa-59': {
				title: 'مطاردة فين',
				description:
					'يقود مارش مجموعة المحققين التي تطارد فين شرقاً بينما تفر من فادركس نحو لوثادل، ساحبة خدم الدمار بعيداً عن المخبأ.',
				season: 'الربيع',
				year: '1027 إ.ن.',
			},
			'hoa-69': {
				title: 'معركة هاثسين',
				description:
					'يصل مارش إلى الحفر قائداً قوات الدمار. في لحظة إرادة مستعادة، ينتزع قرط فين — فعل تحدٍّ يغير كل شيء.',
				season: 'الخريف',
				year: '1027 إ.ن.',
			},
			'hoa-79': {
				title: 'قتل إلند',
				description:
					'مارش، مدفوعاً بالدمار، يقتل الإمبراطور إلند أثناء معركة هاثسين. الفعل يحقق خطة الدمار لكنه يكلف مارش جزءاً آخر من روحه.',
				season: 'الخريف',
				year: '1027 إ.ن.',
			},
			'hoa-83': {
				title: 'الحرية أخيراً',
				description:
					'مع تدمير الدمار، يُحرر مارش أخيراً من سيطرة الإله. يقف وحيداً في العالم المُعاد تشكيله، محقق نجا من نهاية كل شيء.',
				season: 'الخريف',
				year: '1027 إ.ن.',
			},
		},
		spook: {
			'tfe-7': {
				title: 'عين القصدير الشاب',
				description:
					'سبوك، ابن أخ كلبز الشاب، يعمل كمراقب ورسول للعصابة في ورشة النجارة، يتحدث بلهجة شوارع شرقية كثيفة.',
				season: 'أواخر الربيع',
				year: '1021 إ.ن.',
			},
			'tfe-9': {
				title: 'جولات الرسائل',
				description:
					'يحمل سبوك الرسائل بين ورشة كلبز في لوثادل وعزبة رينو في فيليز، حواسه المعززة بالقصدير تجعله كشافاً استثنائياً.',
				season: 'الصيف',
				year: '1021 إ.ن.',
			},
			'tfe-22': {
				title: 'دعم العصابة',
				description:
					'يبقى سبوك في ورشة كلبز أثناء حرب البيوت، يوفر معلومات استخبارية من مراقبته على الأسطح وجولات رسائله عبر الأحياء الفقيرة.',
				season: 'الخريف',
				year: '1021 إ.ن.',
			},
			'tfe-34': {
				title: 'شاهد على التضحية',
				description:
					'يشاهد سبوك من بين الحشد بينما يموت كيلسير في ساحة النافورة، حدث سيشكل بقية حياته.',
				season: 'أوائل الربيع',
				year: '1022 إ.ن.',
			},
			'tfe-38': {
				title: 'الثورة',
				description:
					'يقاتل سبوك مع العصابة أثناء الثورة النهائية، يساعد في تنسيق انتفاضة السكا من شوارع لوثادل.',
				season: 'أوائل الربيع',
				year: '1022 إ.ن.',
			},
			'woa-6': {
				title: 'الكشاف المتنامي',
				description:
					'يخدم سبوك ككشاف لحكومة إلند الجديدة، يقوم بدوريات في المدينة ويراقب الجيوش المحيطة أثناء الحصار.',
				season: 'الخريف',
				year: '1023 إ.ن.',
			},
			'woa-49': {
				title: 'مجموعة المنفى',
				description:
					'يغادر سبوك لوثادل مع فين وإلند ومجموعة المنفى عبر بوابة القصدير، متجهين شمالاً نحو جبال تيريس.',
				season: 'أواخر الشتاء',
				year: '1024 إ.ن.',
			},
			'woa-52': {
				title: 'النجاة من المعركة',
				description:
					'بعد عودته إلى لوثادل أثناء هجوم الكولوس، ينجو سبوك من معركة لوثادل ويساعد في تأمين المدينة.',
				season: 'أواخر الشتاء',
				year: '1024 إ.ن.',
			},
			'hoa-1': {
				title: 'جندي الحملة',
				description:
					'يخدم سبوك في جيش إلند في فيتيتان، يكتسب تدريجياً مسؤولية أكبر بينما تؤمن قوات الإمبراطور مخبأ التخزين.',
				season: 'الربيع',
				year: '1026 إ.ن.',
			},
			'hoa-14': {
				title: 'المتسلل',
				description:
					'يصل سبوك إلى أورتو قبل بعثة سازد الدبلوماسية، متسللاً إلى المدينة عبر شبكة القنوات الجافة المعروفة بالممرات.',
				season: 'الخريف',
				year: '1026 إ.ن.',
			},
			'hoa-17': {
				title: 'البيت المحترق',
				description:
					'يؤسس سبوك قاعدة في مبنى مخفي داخل الممرات، يراقب نظام المواطن القمعي ويتواصل مع المقاومة المحلية.',
				season: 'الخريف',
				year: '1026 إ.ن.',
			},
			'hoa-23': {
				title: 'مراقبة السوق',
				description:
					'يراقب سبوك المواطن كويليون وهو يلقي خطاباته في ساحة السوق، يدرس أنماطه والألومانسيين الذين يجبرهم على الخدمة عبر المسامير الهيمالورجية.',
				season: 'أوائل الشتاء',
				year: '1026 إ.ن.',
			},
			'hoa-30': {
				title: 'الاقتراب من المواطن',
				description:
					'يقترب سبوك من الدائرة المقربة للمواطن، محققاً في المسامير التي يستخدمها كويليون للسيطرة على الألومانسيين وجامعاً أدلة على الفساد.',
				season: 'الشتاء',
				year: '1026 إ.ن.',
			},
			'hoa-38': {
				title: 'التخطيط للثورة',
				description:
					'يعمل سبوك من مخبئه لتنسيق مع سازد والمتمردين المحليين للتخطيط لإسقاط نظام كويليون وتأمين مخبأ التخزين.',
				season: 'أوائل الربيع',
				year: '1027 إ.ن.',
			},
			'hoa-45': {
				title: 'صوت كيلسير',
				description:
					'يبدأ سبوك بسماع ما يعتقد أنه صوت كيلسير يرشده، يدفعه نحو أعمال خطيرة بشكل متزايد ضد المواطن.',
				season: 'الربيع',
				year: '1027 إ.ن.',
			},
			'hoa-50': {
				title: 'المبنى المحترق',
				description:
					'يُطعن سبوك بمسمار أثناء حريق مبنى، فيكتسب قدرات ألومانسية معززة لكنه يصبح أيضاً عرضة لتأثير الدمار عبر المسمار.',
				season: 'الربيع',
				year: '1027 إ.ن.',
			},
			'hoa-55': {
				title: 'الاكتشاف',
				description:
					'يدرك سبوك أن الصوت الذي كان يسمعه ليس كيلسير بل الدمار، يتلاعب به عبر المسمار الهيمالورجي. ينتزع المسمار في عذاب.',
				season: 'أواخر الربيع',
				year: '1027 إ.ن.',
			},
			'hoa-58': {
				title: 'بطل أورتو',
				description:
					'يقود سبوك الثورة ضد كويليون، كاشفاً فساده. بينما تلتهم النيران المدينة، يغرق سازد القنوات، منقذاً أورتو من الدمار.',
				season: 'الربيع',
				year: '1027 إ.ن.',
			},
			'hoa-64': {
				title: 'التعافي',
				description:
					'محترقاً بشدة لكنه حي، يتعافى سبوك بينما تستقر أورتو تحت قيادة جديدة وتُوزع الإمدادات من مخبأ التخزين.',
				season: 'الصيف',
				year: '1027 إ.ن.',
			},
			'hoa-69': {
				title: 'إلى الحفر',
				description:
					'يسافر سبوك إلى حفر هاثسين مع قوات أورتو، منضماً إلى الجيوش المتجمعة لما سيكون المعركة الأخيرة.',
				season: 'الخريف',
				year: '1027 إ.ن.',
			},
			'hoa-83': {
				title: 'عالم جديد',
				description:
					'يخرج سبوك إلى عالم سازد المُعاد تشكيله — حقل من الزهور والعشب الأخضر تحت سماء زرقاء. يحمل كلمات سازد الأخيرة للناجين.',
				season: 'الخريف',
				year: '1027 إ.ن.',
			},
		},
	},

	markerLabels: {
		capital: 'عاصمة السيادة',
		city: 'مدينة',
		ashmount: 'جبل الرماد',
		landmark: 'معلم',
		stronghold: 'حصن',
		hideout: 'ملاذ',
		mine: 'منجم سجن',
		mystical: 'موقع مقدس',
		town: 'بلدة',
		village: 'قرية سكاا',
		river: 'ممر مائي',
		industrial: 'محطة إمداد',
		region: 'منطقة',
		keep: 'قلعة نبيلة',
		palace: 'قصر',
		plantation: 'مزرعة',
		district: 'حي',
		estate: 'ملكية نبيلة',
	},

	cityMarkerLabels: {
		gate: 'بوابة المدينة',
		keep: 'قلعة نبيلة',
		palace: 'قصر',
		district: 'حي',
		shop: 'متجر',
		safehouse: 'مخبأ الفريق',
		landmark: 'موقع بارز',
		canal: 'قناة',
		ministry: 'كانتون الوزارة', // [1]
		plaza: 'ساحة',
	},
};
