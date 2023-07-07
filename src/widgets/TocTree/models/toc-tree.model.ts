import { TocDataDto, TocPageDto } from '../../../entities/toc';

export interface TreeNode extends TocPageDto {
  defaultExpanded?: boolean;
  occurrences?: number[][];
  children?: TreeNode[];
}

/** Root node id from the provided toc data */
const ROOT_ID = 'ij';

export function buildTocTree({ entities: { pages }, topLevelIds }: TocDataDto): TreeNode[] {
  function getPageChildren(pageId: string): TreeNode[] {
    const page = pages[pageId];
    return page.pages
      ? page.pages.map((childPageId) => ({ ...pages[childPageId], children: getPageChildren(childPageId) }))
      : [];
  }

  return topLevelIds.map((id) => {
    const page = pages[id];
    return {
      ...page,
      children: getPageChildren(id),
    };
  });
}

function getParentIds({ entities: { pages } }: TocDataDto, pageUrl: string): string[] {
  const page = Object.values(pages).find((p) => p.url === pageUrl);
  if (!page) {
    return [];
  }
  const parentIds = [];
  let parentId = page.parentId;
  while (parentId !== ROOT_ID) {
    parentIds.push(parentId);
    parentId = pages[parentId].parentId;
  }
  return parentIds;
}

export function expandParentNodes(tocData: TocDataDto, tocTree: TreeNode[], pageUrl: string): void {
  const parentIds = getParentIds(tocData, pageUrl);

  function expandParentNode(node: TreeNode): void {
    if (node.url === pageUrl || parentIds.indexOf(node.id) !== -1) {
      node.defaultExpanded = true;
    }
    if (node.children) {
      node.children.forEach(expandParentNode);
    }
  }

  tocTree.forEach(expandParentNode);
}
