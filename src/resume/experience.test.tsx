import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import Experiences from './experience';
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

    const ExperienceSection = (
      <BrowserRouter>
        <Experiences />
      </BrowserRouter>
    );
    const tree = render(ExperienceSection);
    expect(tree).toMatchSnapshot();
  });
});
