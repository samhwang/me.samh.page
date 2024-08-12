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
import { aboutData, educationData, experienceData, projectsData, sidebarData, siteMetadata, skillsData } from '../mock-metadata';

vi.mock('../../../metadata/use-metadata');

const mockUseSiteMetadata = vi.mocked(useSiteMetadata);
mockUseSiteMetadata.mockReturnValue(siteMetadata);

const mockUseSidebarData = vi.mocked(useSidebarData);
mockUseSidebarData.mockReturnValue(sidebarData);

const mockUseAboutData = vi.mocked(useAboutData);
mockUseAboutData.mockReturnValue(aboutData);

const mockUseEducationData = vi.mocked(useEducationData);
mockUseEducationData.mockReturnValue(educationData);

const mockUseExperienceData = vi.mocked(useExperienceData);
mockUseExperienceData.mockReturnValue(experienceData);

const mockUseProjectsData = vi.mocked(useProjectsData);
mockUseProjectsData.mockReturnValue(projectsData);

const mockUseSkillsData = vi.mocked(useSkillsData);
mockUseSkillsData.mockReturnValue(skillsData);
