import cx from 'classnames';
import { JSX, InputHTMLAttributes } from 'react';
import { Icon, IconName } from '../Icon';
import styles from './styles.module.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  icon?: IconName;
}

export function Input({ className, icon, ...props }: InputProps): JSX.Element {
  return (
    <div className={cx(styles.wrapper)}>
      {icon && <Icon name={icon} className={cx(styles.icon)} />}
      <input {...props} className={cx(className, styles.input, { [styles.withicon]: !!icon })} />
    </div>
  );
}
