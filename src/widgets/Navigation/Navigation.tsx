import { JSX } from 'react';
import { Link } from 'react-router-dom';

export function Navigation(): JSX.Element {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/article/first">first article</Link>
      <Link to="/article/second">second article</Link>
    </div>
  );
}
