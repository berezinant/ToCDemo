import { TocDataDto, TocPageDto } from '../../../entities/toc';

export interface TreeNode extends TocPageDto {
  defaultExpanded?: boolean;
  occurrences?: number[][];
  children?: TreeNode[];
}

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
