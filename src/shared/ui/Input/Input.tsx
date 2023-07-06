import cx from 'classnames';
import { JSX, InputHTMLAttributes } from 'react';
import styles from './styles.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function Input({ className, ...props }: InputProps): JSX.Element {
  return <input {...props} className={cx(className, styles.input)} />;
}
