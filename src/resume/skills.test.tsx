import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import SkillSection from './skills';
import { useSkillsData } from '../../metadata/use-metadata';

vi.mock('../../metadata/use-metadata');
const mockHook = vi.mocked(useSkillsData);

describe('Skill Section Component', () => {
  it('Should render without crashing and match snapshot', () => {
    const mockSkills = {
      skills: [
        {
          title: 'test title',
          description: ['test description'],
        },
      ],
      techStack: ['javascript-plain'],
    };
    mockHook.mockReturnValueOnce(mockSkills);

    const SkillSectionComponent = (
      <BrowserRouter>
        <SkillSection />
      </BrowserRouter>
    );
    const tree = render(SkillSectionComponent);
    expect(tree).toMatchSnapshot();
  });
});
