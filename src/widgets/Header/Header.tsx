import { JSX } from 'react';
import { ToggleThemeButton } from '../../features/ToggleThemeButton';
import classNames from './styles.module.scss';

export function Header(): JSX.Element {
  return (
    <div className={classNames.header}>
      <p>Header</p>
      <ul className={classNames.features}>
        <li>
          <ToggleThemeButton />
        </li>
      </ul>
    </div>
  );
}
