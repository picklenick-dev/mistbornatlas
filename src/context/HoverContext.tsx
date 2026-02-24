import React, { createContext, useContext, useState, useMemo, type ReactNode } from 'react';
import type { CharacterId } from '@/types';

interface HoverContextType {
	hoveredCharacter: CharacterId | null;
	setHoveredCharacter: React.Dispatch<React.SetStateAction<CharacterId | null>>;
}

const HoverContext = createContext<HoverContextType | undefined>(undefined);

export const HoverProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [hoveredCharacter, setHoveredCharacter] = useState<CharacterId | null>(null);

	const value = useMemo(
		() => ({
			hoveredCharacter,
			setHoveredCharacter,
		}),
		[hoveredCharacter]
	);

	return <HoverContext.Provider value={value}>{children}</HoverContext.Provider>;
};

export const useHoverContext = (): HoverContextType => {
	const context = useContext(HoverContext);
	if (!context) {
		throw new Error('useHoverContext must be used within a HoverProvider');
	}
	return context;
};
