import { TocDataDto, TocPageDto } from '../../../entities/toc';
import { findOccurrences } from '../../../shared/utils';

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
      ? page.pages
          .filter((childPageId: string) => pages[childPageId] !== undefined)
          .map((childPageId: string) => ({ ...pages[childPageId], children: getPageChildren(childPageId) }))
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

function getParentIds(tocData: TocDataDto, pageId: string): string[] {
  const page = Object.values(tocData.entities.pages).find((p) => p.id === pageId);
  if (!page) {
    return [];
  }
  const parentIds = [];
  let parentId = page.parentId;
  while (parentId !== ROOT_ID) {
    parentIds.push(parentId);
    parentId = tocData.entities.pages[parentId].parentId;
  }
  return parentIds;
}

export function expandParentNodes(tocData: TocDataDto, tocTree: TreeNode[], pageUrl: string): void {
  const pageId = Object.values(tocData.entities.pages).find((page) => page.url === pageUrl)?.id;
  const parentIds = pageId ? getParentIds(tocData, pageId) : [];

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

export function buildFilteredTree(tocData: TocDataDto, query: string): TreeNode[] {
  const filteredTocData = filterTocData(tocData, query);
  return buildTocTree(filteredTocData);
}

function filterTocData(tocData: TocDataDto, query: string): TocDataDto {
  const matchingPages: TocPageDto[] = Object.values(tocData.entities.pages).filter(
    (page) => findOccurrences(page.title, query).length
  );
  const matchingPageIds = matchingPages.map((page) => page.id);
  const matchingParentIds = matchingPages.map((page) => getParentIds(tocData, page.id)).flat();

  const filteredPagesIds = Array.from(new Set([...matchingPageIds, ...matchingParentIds]));
  const filteredPages: Record<string, TocPageDto> = filteredPagesIds.reduce(
    (pages, id) => ({
      ...pages,
      [id]: {
        ...tocData.entities.pages[id],
        defaultExpanded: true,
        occurrences: findOccurrences(tocData.entities.pages[id].title, query),
      },
    }),
    {}
  );
  const topLevelIds = Object.values(filteredPages)
    .filter((page: TocPageDto) => page.parentId === ROOT_ID)
    .map((page) => page.id);

  return {
    entities: {
      pages: filteredPages,
    },
    topLevelIds: topLevelIds,
  };
}
