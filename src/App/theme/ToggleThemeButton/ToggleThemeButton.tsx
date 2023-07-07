import { JSX } from 'react';
import { useTheme } from '../useTheme';
import styles from './styles.module.scss';

export function ToggleThemeButton(): JSX.Element {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className={styles.button}
      onClick={toggleTheme}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? '🌚' : '🌞'}
    </button>
  );
}
