import { JSX } from 'react';
import styles from './styles.module.scss';

export function Footer(): JSX.Element {
  return (
    <div className={styles.footer}>
      <p>Footer</p>
    </div>
  );
}
