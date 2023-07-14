import { produce } from 'immer';
import { JSX, useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TocDataDto, TocPageDto, TocPageId, TocTreeView } from '../../../../entities/toc';
import { FilterInput } from '../../../../features/filter';
import { useDebounce } from '../../../../shared/hooks';
import { addListener, removeListener } from '../../../../shared/utils';
import { buildFilteredTree, buildTocTree, expandParentNodes, TreeNode } from '../../models';

interface TocTreeProps {
  tocData: TocDataDto;
  baseUrl?: string;
}

export function TocTree({ tocData, baseUrl }: TocTreeProps): JSX.Element {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const { name: pageUrl } = useParams();
  const navigate = useNavigate();
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

  useEffect(() => {
    const handleGoTo = ({ detail: tocPageId }: CustomEvent<TocPageId>) => {
      const pageUrl = tocData.entities.pages[tocPageId].url;
      const newRoute = `${baseUrl}/${pageUrl}`;
      navigate(newRoute);
    };
    const handleFilter = ({ detail: query }: CustomEvent<string>) => {
      setSearchQuery(query);
    };
    addListener('toc_goto', handleGoTo);
    addListener('toc_filter', handleFilter);
    return () => {
      removeListener('toc_goto', handleGoTo);
      removeListener('toc_filter', handleFilter);
    };
  }, []);

  const isRowActive = useCallback((page: TocPageDto) => {
    const url = window.location.pathname;
    return url.endsWith(`/${page.url}`);
  }, []);

  return (
    <>
      <FilterInput
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        type="search"
        placeholder="Search..."
      />
      <TocTreeView baseUrl={baseUrl} isRowActive={isRowActive} tocTree={tocTree} />
    </>
  );
}
