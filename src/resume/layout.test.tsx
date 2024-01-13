import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { useSidebarData, useSiteMetadata } from '../../metadata/use-metadata';
import RenderWrapper from '../test-utils/render-wrapper';

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

    const tree = render(<h1>This is a test!</h1>, { wrapper: RenderWrapper });
    expect(tree).toMatchSnapshot();
  });
});
