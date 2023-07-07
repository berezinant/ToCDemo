import cx from 'classnames';
import { JSX, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../../../../shared/ui';
import styles from './styles.module.scss';

interface TocRowProps {
  title: ReactNode;
  to?: string | undefined;
  isExpanded?: boolean;
  isActive?: boolean;
  children?: JSX.Element | JSX.Element[] | null;
  onClick?: () => void;
  indent?: number;
}

export function TocRow({
  title,
  to,
  isExpanded,
  isActive,
  onClick = () => null,
  children,
  indent = 0,
}: TocRowProps): JSX.Element {
  const className = cx(styles.row, { [styles.expanded]: isExpanded, [styles.active]: isActive });
  const hasChildren = children ? (Array.isArray(children) ? children.length > 0 : true) : false;
  const titleRow = (
    <span className={cx(styles.title, { [styles[`indent-${indent}`]]: true })}>
      {hasChildren && (
        <Icon
          name="arrow-down"
          className={cx(styles.icon, { [styles.expanded]: isExpanded, [styles.active]: isActive })}
        />
      )}
      {title}
    </span>
  );
  return (
    <>
      {to !== undefined ? (
        <Link to={to} onClick={onClick} className={className}>
          {titleRow}
        </Link>
      ) : (
        <div
          onClick={onClick}
          onKeyDown={(e) => e.key === 'Enter' && onClick?.()}
          className={className}
          tabIndex={0}
          role="button"
        >
          {titleRow}
        </div>
      )}
      {hasChildren && (
        <ul className={cx(styles.children, { [styles.expanded]: isExpanded })}>{isExpanded && children}</ul>
      )}
    </>
  );
}
