import { JSX } from 'react';
import styles from './styles.module.scss';

interface EmptyViewProps {
  text?: string;
}

export function EmptyView({ text = 'No content' }: EmptyViewProps): JSX.Element {
  return <div className={styles.empty}>{text}</div>;
}
