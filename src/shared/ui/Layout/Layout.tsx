import { JSX } from 'react';
import { Footer } from '../../../widgets/Footer';
import { Header } from '../../../widgets/Header';
import { Navigation } from '../../../widgets/Navigation';
import classNames from './styles.module.scss';

interface LayoutProps {
  header?: JSX.Element;
  nav?: JSX.Element;
  children?: JSX.Element | JSX.Element[];
  footer?: JSX.Element;
}

export function Layout({
  header = Header(),
  children,
  nav = Navigation(),
  footer = Footer(),
}: LayoutProps): JSX.Element {
  return (
    <div className={classNames.layout}>
      <header className={classNames.header}>{header}</header>
      <nav className={classNames.nav}>{nav}</nav>
      <main>{children}</main>
      <footer className={classNames.footer}>{footer}</footer>
    </div>
  );
}
