import { JSX } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ArticlePage } from '../pages/Article';
import { HomePage } from '../pages/Home';
import { useTheme } from './theme/useTheme';
import './styles/index.scss';

export const BASE_URL = `${process.env.BASE_URL}/`;

export function App(): JSX.Element {
  const { theme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <Routes>
        <Route path={BASE_URL} element={<HomePage />} />
        <Route path={`${BASE_URL}article/:name/`} element={<ArticlePage />} />
        <Route path="*" element={<Navigate to={BASE_URL} replace />} />
      </Routes>
    </div>
  );
}
