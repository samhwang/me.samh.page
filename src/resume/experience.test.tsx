import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Experiences from './experience';
import RenderWrapper from '../test-utils/render-wrapper';
import { useExperienceData } from '../../metadata/use-metadata';

vi.mock('../../metadata/use-metadata');
const mockHook = vi.mocked(useExperienceData);

describe('Experience Component', () => {
  it('Should render without crashing and match snapshot', () => {
    const mockExperience = [
      {
        title: 'Test Title',
        companyName: 'Test Company',
        description: ['Test Job duty'],
        duration: 'Oct 2019 - Present',
        techIcons: ['javascript-plain'],
        technologies: ['JavaScript'],
      },
    ];
    mockHook.mockReturnValueOnce(mockExperience);

    const tree = render(<Experiences />, { wrapper: RenderWrapper });
    expect(tree).toMatchSnapshot();
  });
});
