import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { TocDataDto } from '../../../../entities/toc';
import { TocTree } from './TocTree';

const root_1_title = 'Root 1';
const root_2_title = 'Root 2';
const child_1_title = 'Child 1';
const child_2_title = 'Child 2';
const child_3_title = 'Child 3';

/** TEST_DATA structure:
 * - Root 1
 *   - Child 1
 *   - Child 2
 * - Root 2
 *   - Child 3
 */
export const TEST_DATA: TocDataDto = {
  topLevelIds: ['id_root_1', 'id_root_2'],
  entities: {
    pages: {
      id_root_1: {
        id: 'id_root_1',
        title: root_1_title,
        url: 'url-root-1',
        level: 0,
        pages: ['id_child_1', 'id_child_2'],
        parentId: 'NONE',
      },
      id_root_2: {
        id: 'id_root_2',
        title: root_2_title,
        url: 'url-root-2',
        level: 0,
        pages: ['id_child_3'],
        parentId: 'NONE',
      },
      id_child_1: {
        id: 'id_child_1',
        title: child_1_title,
        url: 'url-child-1',
        level: 1,
        pages: [],
        parentId: 'id_root_1',
      },
      id_child_2: {
        id: 'id_child_2',
        title: child_2_title,
        url: 'url-child-2',
        level: 1,
        pages: [],
        parentId: 'id_root_1',
      },
      id_child_3: {
        id: 'id_child_3',
        title: child_3_title,
        url: 'url-child-3',
        level: 1,
        pages: [],
        parentId: 'id_root_2',
      },
    },
  },
};

const testComponent = () => (
  <BrowserRouter>
    <TocTree tocData={TEST_DATA} />
  </BrowserRouter>
);

describe('TocTree', () => {
  it('should render top level item', () => {
    render(testComponent());
    expect(screen.getByText(root_1_title)).toBeVisible();
  });

  it('should not render child by default', () => {
    render(testComponent());
    expect(screen.queryAllByText(child_1_title)).toHaveLength(0);
  });

  it('should render child after click on parent', async () => {
    render(testComponent());
    fireEvent.click(screen.getByRole('link', { name: root_1_title }));
    expect(screen.getByText(child_1_title)).toBeVisible();
  });
});
