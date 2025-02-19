import { PropsWithChildren, createContext, useContext, useState } from "react";
import { darkTheme, lightTheme, Theme } from "../../themes";

interface ThemeContextProps {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
}

const defaultContextValue: ThemeContextProps = {
  theme: lightTheme,
  isDark: false,
  toggleTheme: () => {},
};

const ThemeContext = createContext<ThemeContextProps>(defaultContextValue);

export function ThemeProvider({ children }: PropsWithChildren) {
  const [isDark, setIsDark] = useState(false);
  const theme = isDark ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const value: ThemeContextProps = {
    theme,
    isDark,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextProps {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
