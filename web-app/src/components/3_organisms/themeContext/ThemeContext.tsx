import { type ReactNode, createContext, useContext, useState } from "react";

interface ThemeContextProps {
	toggleTheme: () => void;
	isDark: boolean;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(
	undefined,
);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [isDark, setIsDark] = useState(false);

	const toggleTheme = () => setIsDark(!isDark);

	return (
		<ThemeContext.Provider
			value={{toggleTheme, isDark}}
		>
			<div 
				id="theme-provider" 
				data-theme={isDark ? "dark" : "light"}
				style={{width: '100%', height: '100%'}} 
			>
				{children}
			</div>
		</ThemeContext.Provider>
	);
};

export const useTheme = (): ThemeContextProps => {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};
