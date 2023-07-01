import { JSX, ReactNode } from 'react';
import classNames from './styles.module.scss';

type LayoutProps = {
  header?: ReactNode;
  nav?: ReactNode;
  main?: ReactNode;
  footer?: ReactNode;
};

export function Layout({ header, main, nav, footer }: LayoutProps): JSX.Element {
  return (
    <div className={classNames.layout}>
      <header>{header}</header>
      <nav>{nav}</nav>
      <main>{main}</main>
      <footer>{footer}</footer>
    </div>
  );
}
