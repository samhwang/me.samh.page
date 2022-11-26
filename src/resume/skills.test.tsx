import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import SkillSection from './skills';
import RenderWrapper from '../test-utils/render-wrapper';
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

    const tree = render(<SkillSection />, { wrapper: RenderWrapper });
    expect(tree).toMatchSnapshot();
  });
});
