import { JSX, useState } from 'react';
import { TocRow, TocDataDto, TocPageDto } from '../../../../entities/toc';
import { buildTocTree } from '../../models/toc-tree.model';

interface TocTreeViewProps {
  data: TocDataDto;
  baseUrl?: string;
  isRowActive?: (page: TocPageDto) => boolean;
}

interface TreeNode extends TocPageDto {
  children?: TreeNode[];
}

export function TocTreeView({ data, baseUrl = '', isRowActive = () => false }: TocTreeViewProps): JSX.Element {
  const [expandedNodes, setIsExpanded] = useState<Record<string, boolean>>({});

  const tocTree = buildTocTree(data);

  const toggleNode = (title: string) => {
    setIsExpanded({
      ...expandedNodes,
      [title]: !expandedNodes[title],
    });
  };

  const renderRow = (pageItem: TreeNode): JSX.Element => {
    return (
      <li key={pageItem.id}>
        <TocRow
          title={pageItem.title}
          isExpanded={expandedNodes[pageItem.id]}
          onClick={() => toggleNode(pageItem.id)}
          indent={pageItem.level}
          isActive={isRowActive(pageItem)}
          to={pageItem.url ? `${baseUrl}/${pageItem.url}` : undefined}
        >
          {pageItem.children ? pageItem.children.map(renderRow) : null}
        </TocRow>
      </li>
    );
  };

  return <ul>{tocTree.map((item: TreeNode) => renderRow(item))}</ul>;
}
