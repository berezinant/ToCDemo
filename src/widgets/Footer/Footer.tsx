import { JSX, memo } from 'react';
import styles from './styles.module.scss';

export function FooterComponent(): JSX.Element {
  return (
    <div className={styles.footer}>
      <p>Footer</p>
    </div>
  );
}

export const Footer = memo(FooterComponent);
