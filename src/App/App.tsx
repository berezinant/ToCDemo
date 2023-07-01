import { JSX } from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { ArticlePage } from '../pages/article/ArticlePage';
import { useTheme } from './theme/useTheme';
import './styles/index.scss';

export function App(): JSX.Element {
  const { theme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <Routes>
        <Route
          path="/"
          element={
            <h1>
              Home page
              <Link to="/article/first">articles</Link>
            </h1>
          }
        />
        <Route path="/article" element={<ArticlePage></ArticlePage>} />
        <Route path="/article/:name/" element={<ArticlePage></ArticlePage>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
