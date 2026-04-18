import type { LanguageCode, LanguageInfo, Translation } from './types';
import { en } from './locales/en';

// Only English is bundled eagerly. All other locales are split into separate
// chunks and downloaded on demand when the user selects that language.
const _cache: Partial<Record<LanguageCode, Translation>> = { en };

export const loadTranslation = async (lang: LanguageCode): Promise<Translation> => {
	if (_cache[lang]) return _cache[lang]!;

	// Explicit per-locale imports so Vite can split each into its own chunk.
	let module: Record<string, Translation>;
	switch (lang) {
		case 'zh':
			module = await import('./locales/zh');
			break;
		case 'es':
			module = await import('./locales/es');
			break;
		case 'fr':
			module = await import('./locales/fr');
			break;
		case 'ar':
			module = await import('./locales/ar');
			break;
		case 'pt':
			module = await import('./locales/pt');
			break;
		case 'ru':
			module = await import('./locales/ru');
			break;
		case 'ja':
			module = await import('./locales/ja');
			break;
		case 'sv':
			module = await import('./locales/sv');
			break;
		case 'de':
			module = await import('./locales/de');
			break;
		case 'pl':
			module = await import('./locales/pl');
			break;
		case 'tr':
			module = await import('./locales/tr');
			break;
		default:
			return en;
	}

	const t = module[lang] as Translation;
	_cache[lang] = t;
	return t;
};

/** Fire-and-forget pre-fetch so the chunk is in-flight before first render. */
export const prefetchLocale = (lang: LanguageCode): void => {
	loadTranslation(lang).catch(() => {
		/* network errors are non-fatal */
	});
};

// Language metadata
export const languages: LanguageInfo[] = [
	{ code: 'en', name: 'English', nativeName: 'English' },
	{ code: 'zh', name: 'Chinese', nativeName: '中文' },
	{ code: 'es', name: 'Spanish', nativeName: 'Español' },
	{ code: 'fr', name: 'French', nativeName: 'Français' },
	{ code: 'ar', name: 'Arabic', nativeName: 'العربية' },
	{ code: 'pt', name: 'Portuguese', nativeName: 'Português' },
	{ code: 'ru', name: 'Russian', nativeName: 'Русский' },
	{ code: 'ja', name: 'Japanese', nativeName: '日本語' },
	{ code: 'sv', name: 'Swedish', nativeName: 'Svenska' },
	{ code: 'de', name: 'German', nativeName: 'Deutsch' },
	{ code: 'pl', name: 'Polish', nativeName: 'Polski' },
	{ code: 'tr', name: 'Turkish', nativeName: 'Türkçe' },
	// { code: 'no', name: 'Norwegian', nativeName: 'Norsk' },
	// { code: 'da', name: 'Danish', nativeName: 'Dansk' },
];

// Default language
export { DEFAULT_LANGUAGE } from '@/config';
import { DEFAULT_LANGUAGE } from '@/config';

// Detect browser language
export const detectBrowserLanguage = (): LanguageCode => {
	if (typeof window === 'undefined') return DEFAULT_LANGUAGE;

	const browserLang = navigator.language.split('-')[0] as LanguageCode;
	const supported = languages.map(l => l.code);

	return supported.includes(browserLang) ? browserLang : DEFAULT_LANGUAGE;
};

// Synchronous get — returns the cached translation or English fallback
export const getTranslation = (lang: LanguageCode): Translation => {
	return _cache[lang] ?? en;
};

// Get language info
export const getLanguageInfo = (code: LanguageCode): LanguageInfo | undefined => {
	return languages.find(l => l.code === code);
};
