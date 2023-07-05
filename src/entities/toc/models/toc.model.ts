export type TocData = {
  entities: ToCEntities;
  topLevelIds: string[];
};

type TocPageId = string;

type ToCEntities = {
  pages: Record<TocPageId, ToCPage>;
};

export type ToCPage = {
  /** unique element identification */
  id: TocPageId;
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
    typeof data.id === 'string' &&
    typeof data.title === 'string' &&
    typeof data.level === 'number' &&
    typeof data.parentId === 'string' &&
    (typeof data.url === 'string' || typeof data.url === 'undefined') &&
    (typeof data.pages === 'undefined' || Array.isArray(data.pages))
  );
}

export function isTocData(data: any): data is TocData {
  return (
    Array.isArray(data.topLevelIds) &&
    typeof data.entities === 'object' &&
    typeof data.entities.pages === 'object' &&
    Object.values(data.entities.pages).every(isTocPage)
  );
}
