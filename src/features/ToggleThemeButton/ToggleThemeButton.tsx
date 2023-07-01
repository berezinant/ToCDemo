import { JSX } from 'react';
import { useTheme } from '../../app/theme/useTheme';

export function ToggleThemeButton(): JSX.Element {
  const { toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>Toggle theme</button>;
}
