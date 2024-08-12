import type { AboutData, EducationData, ExperienceData, ProjectsData, SidebarData, SiteMetadata, SkillsData } from '../../metadata/use-metadata';

const GITHUB_ICON = 'github-original';

export const siteMetadata: SiteMetadata = {
  title: 'Test Title',
  description: 'Test Description',
};

export const sidebarData: SidebarData = {
  firstName: 'First Name',
  lastName: 'Last Name',
};

export const aboutData: AboutData = {
  ...sidebarData,
  address: '123 Fake street',
  bio: 'Blah',
  socialLinks: [
    {
      icon: 'github-original',
      name: 'Github',
      url: 'https://github.com/testusername',
    },
  ],
};

export const educationData: EducationData = [
  {
    institute: 'Bruh University',
    degree: 'Bachelor of Bruh',
    duration: 'Oct 2022 - Oct 2023',
    major: 'blah blah',
  },
];

export const experienceData: ExperienceData = [
  {
    title: 'Software Engineer',
    companyName: 'Bruh Industries',
    duration: 'Oct 2022 - Oct 2023',
    description: ['blah'],
    techIcons: [GITHUB_ICON],
    technologies: ['github'],
  },
];

export const projectsData: ProjectsData = [
  {
    title: 'Test Project',
    description: 'Test Description',
  },
];

export const skillsData: SkillsData = {
  skills: [
    {
      title: 'test title',
      description: ['test desc'],
    },
  ],
  techStack: [GITHUB_ICON],
};
