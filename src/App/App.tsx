import { JSX } from 'react';
import './styles.scss';
import { Link, Route, Routes } from 'react-router-dom';

export function App(): JSX.Element {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="page-1">Page 1</Link>
      <Routes>
        <Route path="/" element={<div>Home page</div>} />
        <Route path="/page-1" element={<div>Page 1</div>} />
      </Routes>
    </>
  );
}
