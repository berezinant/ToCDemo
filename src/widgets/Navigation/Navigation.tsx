import { JSX } from 'react';
import { Link } from 'react-router-dom';
import { tocTransport, TocData, TocView } from '../../entities/Toc';
import { useFetch } from '../../shared/hooks';
import { Skeleton } from '../../shared/ui';
import styles from './styles.module.scss';

export function Navigation(): JSX.Element {
  const { data: tocData, error, loading } = useFetch<TocData>(tocTransport.getTocData);

  return (
    <ul className={styles.navigation}>
      {error && <div>error view: {error.toString()}</div>}
      {loading && <Skeleton />}
      {!loading && tocData && <TocView data={tocData} />}
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
