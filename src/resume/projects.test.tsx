import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProjectSection from './projects';

describe('Project section rendering', () => {
  it('Should match snapshot', () => {
    const ProjectsComponent = (
      <BrowserRouter>
        <ProjectSection />
      </BrowserRouter>
    );
    const tree = render(ProjectsComponent);
    expect(tree).toMatchSnapshot();
  });
});
