export { loadAppState, saveAppState, saveBookState } from './storage';
export type { PersistedBookState, PersistedAppState } from './storage';

export {
	incrementVisitCount,
	incrementChaptersViewed,
	getDonationDismissed,
	setDonationDismissed,
	getLastPromptAt,
	setLastPromptAt,
	hasCityPromptBeenSeen,
	setCityPromptSeen,
} from './storage';
