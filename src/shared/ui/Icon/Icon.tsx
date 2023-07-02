import cx from 'classnames';
import { JSX } from 'react';
import styles from './styles.module.scss';
import { IconName } from './types';

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

const iconContent: Record<IconName, JSX.Element> = {
  'arrow-down': <path d="M8 10.9999L13.25 4.99994L2.75 4.99994L8 10.9999Z" fill="var(--text-color)" />,
};

export function Icon({ name, className = '', size = 16 }: IconProps): JSX.Element | null {
  return iconContent[name] ? (
    <svg className={cx(className, styles.icon)} width={size} height={size} viewBox="0 0 16 16">
      {iconContent[name]}
    </svg>
  ) : null;
}
