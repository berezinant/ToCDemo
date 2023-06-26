import { JSX } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import classNames from './styles.module.scss';

export function App(): JSX.Element {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="page-1">Page 1</Link>
      <Routes>
        <Route path="/" element={<div className={classNames.app}><h1>Home page</h1></div>} />
        <Route path="/page-1" element={<div>Page 1</div>} />
      </Routes>
    </>
  );
}
