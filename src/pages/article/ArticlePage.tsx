import { JSX } from 'react';
import { ToggleThemeButton } from '../../features/ToggleThemeButton';
import { Layout } from '../../shared/ui/Layout';
import { Navigation } from '../../widgets/Navigation';

export function ArticlePage(): JSX.Element {
  return (
    <Layout
      header={
        <h1>
          Article
          <ToggleThemeButton />
        </h1>
      }
      main={<h2>Article main</h2>}
      footer={<h3>Article footer</h3>}
      nav={
        <h4>
          Article nav
          <Navigation />
        </h4>
      }
    ></Layout>
  );
}
