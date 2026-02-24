import React, {
	createContext,
	useContext,
	useState,
	useMemo,
	useEffect,
	type ReactNode,
} from 'react';
import type { LanguageCode, Translation } from '@/i18n/types';
import { getTranslation, loadTranslation, DEFAULT_LANGUAGE, detectBrowserLanguage } from '@/i18n';

interface LanguageContextType {
	language: LanguageCode;
	setLanguage: (lang: LanguageCode) => void;
	t: Translation;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
	children: ReactNode;
	initialLanguage?: LanguageCode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
	children,
	initialLanguage,
}) => {
	const [language, setLanguageState] = useState<LanguageCode>(() => {
		// Priority: initialLanguage > localStorage > browser > default
		if (initialLanguage) return initialLanguage;

		if (typeof window !== 'undefined') {
			const stored = localStorage.getItem('mistborn-language') as LanguageCode;
			if (stored) return stored;

			return detectBrowserLanguage();
		}

		return DEFAULT_LANGUAGE;
	});

	// Update localStorage and URL parameter when language changes
	const setLanguage = (lang: LanguageCode) => {
		setLanguageState(lang);
		if (typeof window !== 'undefined') {
			localStorage.setItem('mistborn-language', lang);

			// Update URL with language parameter
			const params = new URLSearchParams(window.location.search);

			if (lang === 'en') {
				// Remove lang parameter for default English
				params.delete('lang');
			} else {
				// Set lang parameter for other languages
				params.set('lang', lang);
			}

			const newSearch = params.toString();
			const newUrl = window.location.pathname + (newSearch ? '?' + newSearch : '');
			window.history.pushState({}, '', newUrl);
		}
	};

	// t starts as the cached/English fallback, then updates once the locale chunk loads.
	const [t, setT] = useState<Translation>(() => getTranslation(language));

	useEffect(() => {
		let cancelled = false;
		loadTranslation(language).then(loaded => {
			if (!cancelled) setT(loaded);
		});
		return () => {
			cancelled = true;
		};
	}, [language]);

	useEffect(() => {
		document.documentElement.lang = language;
		document.title = t.meta.title;
		const descEl = document.querySelector('meta[name="description"]');
		if (descEl) {
			descEl.setAttribute('content', t.meta.description);
		}
	}, [language, t]);

	const contextValue = useMemo<LanguageContextType>(
		() => ({
			language,
			setLanguage,
			t,
		}),
		[language, t]
	);

	return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextType => {
	const context = useContext(LanguageContext);

	if (context === undefined) {
		throw new Error('useLanguage must be used within a LanguageProvider');
	}

	return context;
};

export { LanguageContext };
