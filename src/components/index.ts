// UI Components
export { LoadingScreen } from './LoadingScreen';
export { Header } from './Header';
export { ControlsPanel } from './ControlsPanel';
export { CharacterFilters } from './CharacterFilters';
export { InfoPanel } from './InfoPanel';
export { Timeline } from './Timeline';
export { Legend } from './Legend';
export { DebugOverlay } from './DebugOverlay';
export { CityPrompt } from './CityPrompt';

// Map Components (eager — visible on initial render)
export { MapContainer } from './MapContainer';
export { LocationMarker } from './LocationMarker';
export { CharacterMarker } from './CharacterMarker';
export { CharacterPath } from './CharacterPath';
export { CityLandmarkMarker } from './CityLandmarkMarker';

// Lazy-loaded components (imported directly in the files that use them):
//   CityMapContainer  — lazy in App.tsx
//   AboutModal        — lazy in App.tsx
//   DonationModal     — lazy in App.tsx
//   AtmosphereOverlay — lazy in MapContainer.tsx / CityMapContainer.tsx
