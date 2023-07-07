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
  search: (
    <path
      d="M12.9347 14L8.72063 9.79608C8.41775 10.0358 8.06027 10.2238 7.64816 10.3602C7.23606 10.4965 6.78937 10.5647 6.30809 10.5647C5.10536 10.5647 4.08666 10.1464 3.25199 9.3098C2.41733 8.4732 2 7.46405 2 6.28235C2 5.10065 2.41775 4.0915 3.25326 3.2549C4.08877 2.4183 5.09922 2 6.2846 2C7.46997 2 8.47781 2.4183 9.30809 3.2549C10.1384 4.0915 10.5535 5.10144 10.5535 6.28471C10.5535 6.75373 10.4883 7.18954 10.3577 7.59216C10.2272 7.99477 10.0313 8.37386 9.77023 8.72941L14 12.9333L12.9347 14ZM6.29796 9.0902C7.08017 9.0902 7.73956 8.81699 8.27611 8.27059C8.81266 7.72418 9.08094 7.06144 9.08094 6.28235C9.08094 5.50327 8.8119 4.84052 8.27381 4.29412C7.73572 3.74771 7.0771 3.47451 6.29796 3.47451C5.51011 3.47451 4.84226 3.74771 4.29438 4.29412C3.74652 4.84052 3.47258 5.50327 3.47258 6.28235C3.47258 7.06144 3.74575 7.72418 4.29208 8.27059C4.83842 8.81699 5.50704 9.0902 6.29796 9.0902Z"
      fill="var(--text-color)"
    />
  ),
};

export function Icon({ name, className = '', size = 16 }: IconProps): JSX.Element | null {
  return iconContent[name] ? (
    <svg className={cx(className, styles.icon)} width={size} height={size} viewBox="0 0 16 16">
      {iconContent[name]}
    </svg>
  ) : null;
}
