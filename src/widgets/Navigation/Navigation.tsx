import { JSX } from 'react';
import { Link } from 'react-router-dom';
import classNames from './styles.module.scss';

export function Navigation(): JSX.Element {
  return (
    <ul className={classNames.navigation}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/article/first">first article</Link>
      </li>
      <li>
        <Link to="/article/second">second article</Link>
      </li>
    </ul>
  );
}
