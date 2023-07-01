import { JSX } from 'react';
import classNames from './styles.module.scss';

export function Footer(): JSX.Element {
  return (
    <div className={classNames.footer}>
      <p>Footer</p>
    </div>
  );
}
