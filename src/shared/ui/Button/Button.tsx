import { ButtonHTMLAttributes, JSX } from 'react';
import styles from './styles.module.scss';

export function Button({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
}
