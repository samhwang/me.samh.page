import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Experiences from './experience';

describe('Experience Component', () => {
  it('Should render without crashing and match snapshot', () => {
    const ExperienceSection = (
      <BrowserRouter>
        <Experiences />
      </BrowserRouter>
    );
    const tree = render(ExperienceSection);
    expect(tree).toMatchSnapshot();
  });
});
