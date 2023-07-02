import { JSX } from 'react';
import { Link } from 'react-router-dom';
import { TocView } from '../../entities/Toc/ui/View';
import { Skeleton } from '../../shared/ui/Skeleton';
import styles from './styles.module.scss';

export function Navigation(): JSX.Element {
  return (
    <ul className={styles.navigation}>
      <Skeleton />
      <TocView />
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/article/first">first article</Link>
      </li>
      <li>
        <Link to="/article/second">second article</Link>
      </li>
    </ul>
  );
}
