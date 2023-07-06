import { JSX } from 'react';
import { tocTransport, TocDataDto, TocPageDto } from '../../entities/toc';
import { useFetch } from '../../shared/hooks';
import { Skeleton } from '../../shared/ui';
import { TocTreeView } from '../TocTree';
import styles from './styles.module.scss';

export function Navigation(): JSX.Element {
  const { data: tocData, error, loading } = useFetch<TocDataDto>(tocTransport.getTocData);
  const isRowActive = (page: TocPageDto) => {
    const url = window.location.pathname;
    return url.endsWith(page.url);
  };
  return (
    <ul className={styles.navigation}>
      {error && <div>{error.toString()}</div>}
      {loading && <Skeleton />}
      {!loading && tocData && <TocTreeView data={tocData} baseUrl="/article" isRowActive={isRowActive} />}
    </ul>
  );
}
