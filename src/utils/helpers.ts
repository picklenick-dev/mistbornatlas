/** Check whether a hex colour is light enough to need dark text on top */
export const isLightColor = (hex: string): boolean => {
	const r = parseInt(hex.slice(1, 3), 16);
	const g = parseInt(hex.slice(3, 5), 16);
	const b = parseInt(hex.slice(5, 7), 16);
	return (r * 299 + g * 587 + b * 114) / 1000 > 160;
};

/** True when ?dbg=1 is in the URL. Evaluated once — doesn't change at runtime. */
export const isDebugMode =
	typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('dbg') === '1';
