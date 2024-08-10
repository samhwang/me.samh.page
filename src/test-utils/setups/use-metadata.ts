import { vi } from 'vitest';
import {
  useAboutData,
  useEducationData,
  useExperienceData,
  useProjectsData,
  useSidebarData,
  useSiteMetadata,
  useSkillsData,
} from '../../../metadata/use-metadata';

vi.mock('../../../metadata/use-metadata');

const GITHUB_ICON = 'github-original';

const mockUseSiteMetadata = vi.mocked(useSiteMetadata);
mockUseSiteMetadata.mockReturnValue({
  title: 'Test Title',
  description: 'Test Description',
});

const mockUseSidebarData = vi.mocked(useSidebarData);
mockUseSidebarData.mockReturnValue({
  firstName: 'First Name',
  lastName: 'Last Name',
});

const mockUseAboutData = vi.mocked(useAboutData);
mockUseAboutData.mockReturnValue({
  firstName: 'First Name',
  lastName: 'Last Name',
  address: '123 Fake street',
  bio: 'Blah',
  socialLinks: [
    {
      icon: 'github-original',
      name: 'Github',
      url: 'https://github.com/testusername',
    },
  ],
});

const mockUseEducationData = vi.mocked(useEducationData);
mockUseEducationData.mockReturnValue([
  {
    institute: 'Bruh University',
    degree: 'Bachelor of Bruh',
    duration: 'Oct 2022 - Oct 2023',
    major: 'blah blah',
  },
]);

const mockUseExperienceData = vi.mocked(useExperienceData);
mockUseExperienceData.mockReturnValue([
  {
    title: 'Software Engineer',
    companyName: 'Bruh Industries',
    duration: 'Oct 2022 - Oct 2023',
    description: ['blah'],
    techIcons: [GITHUB_ICON],
    technologies: ['github'],
  },
]);

const mockUseProjectsData = vi.mocked(useProjectsData);
mockUseProjectsData.mockReturnValue([
  {
    title: 'Test Project',
    description: 'Test Description',
  },
]);

const mockUseSkillsData = vi.mocked(useSkillsData);
mockUseSkillsData.mockReturnValue({
  skills: [
    {
      title: 'test title',
      description: ['test desc'],
    },
  ],
  techStack: [GITHUB_ICON],
});
