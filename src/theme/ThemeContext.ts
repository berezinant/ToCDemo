import { createContext } from 'react';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export const ThemeContext = createContext<ThemeContextType>({
  theme: Theme.LIGHT,
  setTheme: () => {},
});
