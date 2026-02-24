import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LanguageProvider } from './context/LanguageContext';
import { detectBrowserLanguage, prefetchLocale } from './i18n';
import type { LanguageCode } from './i18n/types';
import './styles/main.scss';

const getLanguageFromParams = (): LanguageCode => {
	const params = new URLSearchParams(window.location.search);
	const langParam = params.get('lang');
	const knownLanguages: LanguageCode[] = [
		'en',
		'zh',
		'es',
		'fr',
		'ar',
		'pt',
		'ru',
		'ja',
		'sv',
		'de',
		'pl',
	];

	if (langParam && knownLanguages.includes(langParam as LanguageCode)) {
		return langParam as LanguageCode;
	}

	const storedLang = localStorage.getItem('mistborn-language') as LanguageCode;
	if (storedLang && knownLanguages.includes(storedLang)) {
		return storedLang;
	}

	const detectedLang = detectBrowserLanguage();
	return detectedLang;
};

const initialLanguage = getLanguageFromParams();

if (initialLanguage !== 'en') prefetchLocale(initialLanguage);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<LanguageProvider initialLanguage={initialLanguage}>
			<App />
		</LanguageProvider>
	</React.StrictMode>
);
