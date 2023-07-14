import { JSX, memo } from 'react';
import { useParams } from 'react-router-dom';
import { tocApi } from '../../features/tocApi';
import { Button, Layout, Skeleton } from '../../shared/ui';
import styles from './styles.module.scss';

const htmlSuffixLength = 5;

export function ArticlePage(): JSX.Element {
  const { name } = useParams();
  const readableName = name?.replace(/-/g, ' ').slice(0, -1 * htmlSuffixLength) ?? '';
  const capitalizedReadableName = readableName?.charAt(0).toUpperCase() + readableName?.slice(1);
  return (
    <Layout>
      <PageContent name={capitalizedReadableName} />
    </Layout>
  );
}

function PageContentComponent({ name }: { name: string }): JSX.Element {
  const handleNavigation = () => tocApi.goTo('Getting_started');
  const handleFilter = () => tocApi.filter('getting started');
  return (
    <>
      <h1 className={styles.title}>{name}</h1>
      <Skeleton itemsCount={Math.floor(Math.random() * 10) + 2} />
      <div className={styles.wrapper}>
        <p>Demo for js api:</p>
        <Button onClick={handleNavigation}>Go to start</Button>
        <Button onClick={handleFilter}>Filter by start</Button>
      </div>
    </>
  );
}

const PageContent = memo(PageContentComponent);
