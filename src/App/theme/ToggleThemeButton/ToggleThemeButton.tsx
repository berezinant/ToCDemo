import { JSX } from 'react';
import { useTheme } from '../useTheme';

export function ToggleThemeButton(): JSX.Element {
  const { toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>Toggle theme</button>;
}
