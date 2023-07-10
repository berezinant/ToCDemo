import { JSX } from 'react';
import { BASE_URL } from '../../app';
import { tocTransport, TocDataDto } from '../../entities/toc';
import { useFetch } from '../../shared/hooks';
import { Skeleton } from '../../shared/ui';
import { TocTree } from '../tocTree';
import styles from './styles.module.scss';

export function Navigation(): JSX.Element {
  const { data: tocData, error, loading } = useFetch<TocDataDto>(tocTransport.getTocData);
  return (
    <ul className={styles.navigation}>
      {error && <div>{error.toString()}</div>}
      {loading && <Skeleton />}
      {!loading && tocData && <TocTree baseUrl={`${BASE_URL}article`} tocData={tocData} />}
    </ul>
  );
}
