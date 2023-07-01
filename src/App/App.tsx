import { JSX } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ArticlePage } from '../pages/Article';
import { HomePage } from '../pages/Home';
import { useTheme } from './theme/useTheme';
import './styles/index.scss';

export function App(): JSX.Element {
  const { theme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:name/" element={<ArticlePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
