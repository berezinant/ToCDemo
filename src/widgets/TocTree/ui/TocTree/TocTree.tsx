import { JSX, useCallback, useEffect, useMemo, useState } from 'react';
import { TocDataDto, TocPageDto, TocTreeView } from '../../../../entities/toc';
import { useDebounce } from '../../../../shared/hooks';
import { Input } from '../../../../shared/ui';
import { findOccurrences } from '../../../../shared/utils';
import { buildTocTree, TreeNode } from '../../models';

interface TocTreeProps {
  tocData: TocDataDto;
  baseUrl?: string;
}

export function TocTree({ tocData, baseUrl }: TocTreeProps): JSX.Element {
  const fullTocTree = useMemo(() => buildTocTree(tocData), [tocData]);
  const [tocTree, setTocTree] = useState<TreeNode[]>(fullTocTree);

  const [searchQuery, setSearchQuery] = useState<string>('');
  const debouncedQuery: string = useDebounce(searchQuery);

  const dumbFilterTocTree = (tocTree: TreeNode[], filterValue: string): TreeNode[] => {
    const result = tocTree.filter((item) => {
      const occurrences = findOccurrences(item.title, filterValue);
      if (occurrences.length) {
        return true;
      }
    });
    return result;
  };

  useEffect(() => {
    if (!debouncedQuery) {
      setTocTree(fullTocTree);
      return;
    }
    setTocTree(dumbFilterTocTree(fullTocTree, debouncedQuery));
  }, [debouncedQuery, fullTocTree]);

  const isRowActive = useCallback((page: TocPageDto) => {
    const url = window.location.pathname;
    return url.endsWith(`/${page.url}`);
  }, []);

  return (
    <>
      <Input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        type="search"
        placeholder="Search..."
      />
      <hr />
      <TocTreeView baseUrl={baseUrl} isRowActive={isRowActive} tocTree={tocTree} />
    </>
  );
}
