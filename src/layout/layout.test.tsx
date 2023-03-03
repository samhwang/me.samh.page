import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout';
import { useSiteMetadata, useSidebarData } from '../../metadata/use-metadata';

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
