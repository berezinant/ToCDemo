export type TocData = {
  entities: ToCEntities;
  topLevelIds: string[];
};

type ToCEntities = {
  pages: ToCPage[];
};

export type ToCPage = {
  /** unique element identification */
  id: number;
  /** page title, used as a text for TOC link */
  title: string;
  /** relative path to a page, href for a link */
  url: string;
  /** element nesting level in regard to the root. level determines inner margin in the node */
  level: number;
  /** parent id pointer used to determine where to nest the element */
  parentId: string;
  /** list of nested pages ids */
  pages: string[];
};

function isTocPage(data: any): data is ToCPage {
  return (
    typeof data.id === 'number' &&
    typeof data.title === 'string' &&
    typeof data.url === 'string' &&
    typeof data.level === 'number' &&
    typeof data.parentId === 'string' &&
    Array.isArray(data.pages)
  );
}

export function isTocData(data: any): data is TocData {
  return (
    typeof data.entities === 'object' &&
    Array.isArray(data.topLevelIds) &&
    Array.isArray(typeof data.entities.pages) &&
    data.entities.pages.every(isTocPage)
  );
}
