import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Layout from './layout';
import RenderWrapper from '../test-utils/render-wrapper';
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

    const tree = render(
      <Layout title="Test Render" description="Test Render">
        <h1>This is a test!</h1>
      </Layout>,
      { wrapper: RenderWrapper }
    );
    expect(tree).toMatchSnapshot();
  });
});
