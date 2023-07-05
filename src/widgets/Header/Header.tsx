import { JSX } from 'react';
import { ToggleThemeButton } from '../../app';
import styles from './styles.module.scss';

export function Header(): JSX.Element {
  return (
    <div className={styles.header}>
      <p>Product name 2023.1</p>
      <ul className={styles.features}>
        <li>
          <ToggleThemeButton />
        </li>
      </ul>
    </div>
  );
}
