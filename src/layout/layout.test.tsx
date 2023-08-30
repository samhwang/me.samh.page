import { render } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import { useSidebarData, useSiteMetadata } from '../../metadata/use-metadata';
import Layout from './layout';

vi.mock('../../metadata/use-metadata');
const mockMetadataHook = vi.mocked(useSiteMetadata);
const mockSidebarHook = vi.mocked(useSidebarData);

describe('Layout rendering', () => {
  it('Should match snapshot', () => {
    const mockMetadata = {
      title: 'Test Title',
      description: 'Test Description',
    };
    mockMetadataHook.mockReturnValue(mockMetadata);
    const mockSidebarData = {
      firstName: 'First',
      lastName: 'Last',
    };
    mockSidebarHook.mockReturnValueOnce(mockSidebarData);

    const router = createMemoryRouter([
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            index: true,
            element: <h1>This is a test!</h1>,
          },
        ],
      },
    ]);
    const tree = render(<RouterProvider router={router} />);
    expect(tree).toMatchSnapshot();
  });
});
