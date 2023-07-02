import { JSX } from 'react';
import styles from './styles.module.scss';

interface SkeletonProps {
  itemsCount?: number;
}

export function Skeleton({ itemsCount = 8 }: SkeletonProps): JSX.Element {
  return (
    <div className={styles.skeleton}>
      {Array.from({ length: itemsCount }).map((_, index) => (
        <div key={index} className={styles.item}>
          &nbsp;
        </div>
      ))}
    </div>
  );
}
