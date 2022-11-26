import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ProjectSection from './projects';
import RenderWrapper from '../test-utils/render-wrapper';
import { useProjectsData } from '../../metadata/use-metadata';

vi.mock('../../metadata/use-metadata');
const mockHook = vi.mocked(useProjectsData);

describe('Project section rendering', () => {
  it('Should match snapshot', () => {
    const mockProjects = [
      {
        title: 'Test Title',
        description: 'Test Description',
        url: 'http://test url',
      },
      {
        title: 'Test Title 2',
        description: 'Test Description 2',
      },
    ];
    mockHook.mockReturnValueOnce(mockProjects);

    const tree = render(<ProjectSection />, { wrapper: RenderWrapper });
    expect(tree).toMatchSnapshot();
  });
});
