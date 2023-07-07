import { produce } from 'immer';
import { JSX, useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TocDataDto, TocPageDto, TocTreeView } from '../../../../entities/toc';
import { useDebounce } from '../../../../shared/hooks';
import { Input } from '../../../../shared/ui';
import { buildFilteredTree, buildTocTree, expandParentNodes, TreeNode } from '../../models';

interface TocTreeProps {
  tocData: TocDataDto;
  baseUrl?: string;
}

export function TocTree({ tocData, baseUrl }: TocTreeProps): JSX.Element {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const { name: pageUrl } = useParams();
  const fullTocTree = useMemo(() => buildTocTree(tocData), [tocData]);
  const [tocTree, setTocTree] = useState<TreeNode[]>(fullTocTree);

  const [searchQuery, setSearchQuery] = useState<string>('');
  const debouncedQuery: string = useDebounce(searchQuery);

  useEffect(() => {
    if (pageUrl) {
      const updatedTree = produce(tocTree, (draft) => {
        expandParentNodes(tocData, draft, pageUrl);
      });
      setTocTree(updatedTree);
    }
    setIsFirstRender(false);
  }, []);

  useEffect(() => {
    if (!debouncedQuery) {
      if (!isFirstRender) {
        setTocTree(fullTocTree);
      }
      return;
    }
    setTocTree(buildFilteredTree(tocData, debouncedQuery));
  }, [debouncedQuery]);

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
