import { JSX } from 'react';
import { useParams } from 'react-router-dom';
import { Layout, Skeleton } from '../../shared/ui';
import styles from './styles.module.scss';

const htmlSuffixLength = 5;

export function ArticlePage(): JSX.Element {
  const { name } = useParams();
  const readableName = name?.replace(/-/g, ' ').slice(0, -1 * htmlSuffixLength) ?? '';
  const capitalizedReadableName = readableName?.charAt(0).toUpperCase() + readableName?.slice(1);
  return (
    <Layout>
      <h1 className={styles.title}>{capitalizedReadableName}</h1>
      <Skeleton itemsCount={Math.floor(Math.random() * 10) + 2} />
    </Layout>
  );
}
