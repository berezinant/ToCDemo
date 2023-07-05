import { JSX } from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from '../../shared/ui';

interface ArticlePageProps {
  title?: string;
}

export function ArticlePage({ title }: ArticlePageProps): JSX.Element {
  const { name } = useParams();
  return (
    <Layout>
      <h1>{title || name}</h1>
    </Layout>
  );
}
