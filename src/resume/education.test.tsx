import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Education from './education';

describe('Education section render', () => {
  it('Should match snapshot', () => {
    const EducationSection = (
      <BrowserRouter>
        <Education />
      </BrowserRouter>
    );
    const tree = render(EducationSection);
    expect(tree).toMatchSnapshot();
  });
});
