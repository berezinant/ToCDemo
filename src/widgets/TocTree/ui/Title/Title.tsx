import cx from 'classnames';
import { JSX } from 'react';
import { mapSubstrings } from '../../../../shared/utils/map-substrings';
import { TreeNode } from '../../models';
import styles from './styles.module.scss';

interface TitleProps {
  pageItem: TreeNode;
}

export function Title({ pageItem }: TitleProps): JSX.Element {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: mapSubstrings(pageItem.title, pageItem.occurrences || [], highlightMap),
      }}
    />
  );
}

function highlightMap(string: string): string {
  return `<span class="${cx(styles.highlight)}">${string}</span>`;
}
