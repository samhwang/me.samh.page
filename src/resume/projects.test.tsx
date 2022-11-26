import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import ProjectSection from './projects';
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
    ];
    mockHook.mockReturnValueOnce(mockProjects);

    const ProjectsComponent = (
      <BrowserRouter>
        <ProjectSection />
      </BrowserRouter>
    );
    const tree = render(ProjectsComponent);
    expect(tree).toMatchSnapshot();
  });
});
