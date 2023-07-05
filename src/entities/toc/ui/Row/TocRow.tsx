import cx from 'classnames';
import { JSX } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../../../../shared/ui';
import styles from './styles.module.scss';

interface TocRowProps {
  title: string;
  isExpanded?: boolean;
  isActive?: boolean;
  children?: JSX.Element | JSX.Element[];
  onClick?: () => void;
  indent?: number;
}

export function TocRow({
  title,
  isExpanded,
  isActive,
  onClick = () => null,
  children,
  indent = 0,
}: TocRowProps): JSX.Element {
  return (
    <>
      <Link
        to={''}
        onClick={onClick}
        className={cx(styles.row, { [styles.expanded]: isExpanded, [styles.active]: isActive })}
      >
        <span className={cx(styles.title, { [styles[`indent-${indent}`]]: true })}>
          {children && (
            <Icon
              name="arrow-down"
              className={cx(styles.icon, { [styles.expanded]: isExpanded, [styles.active]: isActive })}
            />
          )}
          {title}
        </span>
      </Link>
      {children && (
        <div className={cx(styles.children, { [styles.expanded]: isExpanded })}>{isExpanded && children}</div>
      )}
    </>
  );
}
