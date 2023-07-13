import { JSX, memo } from 'react';
import { Footer } from '../../../widgets/Footer';
import { Header } from '../../../widgets/Header';
import { Navigation } from '../../../widgets/Navigation';
import styles from './styles.module.scss';

interface LayoutProps {
  header?: JSX.Element;
  nav?: JSX.Element;
  children?: JSX.Element | JSX.Element[];
  footer?: JSX.Element;
}

export function LayoutComponent({
  header = <Header />,
  children,
  nav = <Navigation />,
  footer = <Footer />,
}: LayoutProps): JSX.Element {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>{header}</header>
      <nav className={styles.nav}>{nav}</nav>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>{footer}</footer>
    </div>
  );
}

export const Layout = memo(LayoutComponent);
