import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { useSkillsData } from '../../metadata/use-metadata';
import SkillSection from './skills';

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

    const tree = render(<SkillSection />);
    expect(tree).toMatchSnapshot();
  });
});
