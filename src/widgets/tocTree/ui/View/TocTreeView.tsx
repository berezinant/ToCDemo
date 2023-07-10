import { JSX } from 'react';
import { TocRow, TocPageDto } from '../../../../entities/toc';
import { EmptyView } from '../../../../shared/ui';
import { TreeNode } from '../../models';
import { Title } from '../Title';

interface TocTreeViewProps {
  tocTree: TreeNode[];
  baseUrl?: string;
  isRowActive: (page: TocPageDto) => boolean;
}

export function TocTreeView({ tocTree, baseUrl = '', isRowActive = () => false }: TocTreeViewProps): JSX.Element {
  if (tocTree.length === 0) {
    return <EmptyView />;
  }

  const renderRow = (pageItem: TreeNode): JSX.Element => (
    <li key={pageItem.id}>
      <TocRow
        title={<Title pageItem={pageItem} />}
        defaultExpanded={!!pageItem.defaultExpanded}
        indent={pageItem.level}
        isActive={isRowActive(pageItem)}
        to={pageItem.url ? `${baseUrl}/${pageItem.url}` : undefined}
      >
        {pageItem.children ? pageItem.children.map(renderRow) : null}
      </TocRow>
    </li>
  );

  return <ul>{tocTree.map((item: TreeNode) => renderRow(item))}</ul>;
}
