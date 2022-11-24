import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SkillSection from './skills';

describe('Skill Section Component', () => {
  it('Should render without crashing and match snapshot', () => {
    const SkillSectionComponent = (
      <BrowserRouter>
        <SkillSection />
      </BrowserRouter>
    );
    const tree = render(SkillSectionComponent);
    expect(tree).toMatchSnapshot();
  });
});
