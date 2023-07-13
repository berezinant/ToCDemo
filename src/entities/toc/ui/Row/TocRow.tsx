import cx from 'classnames';
import { JSX, memo, ReactNode, RefObject, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollIntoView } from '../../../../shared/hooks';
import { Icon } from '../../../../shared/ui';
import styles from './styles.module.scss';

interface TocRowProps {
  title: ReactNode;
  to?: string | undefined;
  defaultExpanded?: boolean;
  isActive?: boolean;
  children?: JSX.Element | JSX.Element[] | null;
  indent?: number;
}

export function TocRowComponent({
  title,
  to,
  defaultExpanded,
  isActive,
  children,
  indent = 0,
}: TocRowProps): JSX.Element {
  const [isExpanded, setIsExpanded] = useState<boolean>(!!defaultExpanded);
  const toggleExpanded = () => setIsExpanded((prev) => !prev);

  useEffect(() => {
    setIsExpanded(!!defaultExpanded);
  }, [defaultExpanded]);

  const ref = useScrollIntoView(!!isActive);

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
        <Link to={to} onClick={toggleExpanded} className={className} ref={ref as RefObject<HTMLAnchorElement>}>
          {titleRow}
        </Link>
      ) : (
        <div
          ref={ref as RefObject<HTMLDivElement>}
          onClick={toggleExpanded}
          onKeyDown={(e) => e.key === 'Enter' && toggleExpanded()}
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

export const TocRow = memo(TocRowComponent);
