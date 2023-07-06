export type TocDataDto = {
  entities: TocEntitiesDto;
  topLevelIds: string[];
};

type TocPageId = string;

type TocEntitiesDto = {
  pages: Record<TocPageId, TocPageDto>;
};

export type TocPageDto = {
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

function isTocPageDto(data: any): data is TocPageDto {
  return (
    typeof data.id === 'string' &&
    typeof data.title === 'string' &&
    typeof data.level === 'number' &&
    typeof data.parentId === 'string' &&
    (typeof data.url === 'string' || typeof data.url === 'undefined') &&
    (typeof data.pages === 'undefined' || Array.isArray(data.pages))
  );
}

export function isTocDataDto(data: any): data is TocDataDto {
  return (
    Array.isArray(data.topLevelIds) &&
    typeof data.entities === 'object' &&
    typeof data.entities.pages === 'object' &&
    Object.values(data.entities.pages).every(isTocPageDto)
  );
}
