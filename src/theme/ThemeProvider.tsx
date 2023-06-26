import { JSX, Children, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;
  return savedTheme || Theme.LIGHT;
};

export function ThemeProvider({ children }: {children: any}): JSX.Element {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  const defaultContextValue = useMemo(
    () => ({
        theme,
        setTheme,
      }
    ), [theme,]
  );

  return (
    <ThemeContext.Provider value={defaultContextValue}>{children}</ThemeContext.Provider>
  );
};
