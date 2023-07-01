import { JSX } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useTheme } from '../theme/useTheme';
import { ToCRow } from '../ui/ToCRow/ToCRow';

export function App(): JSX.Element {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <Link to="/">Home</Link>
      <Link to="page-1">Page 1</Link>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Routes>
        <Route
          path="/page-1"
          element={
            <h1>
              Page 1<ToCRow></ToCRow>
            </h1>
          }
        />
        <Route path="/" element={<h1>Home page</h1>} />
      </Routes>
    </div>
  );
}
