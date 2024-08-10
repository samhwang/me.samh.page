import metadata from './metadata';
import type { Job, SiteMetadata as Metadata, PersonalInformation, Project, School, Skill, SocialLink } from './metadata';

type SiteMetadata = {
  title: Metadata['title'];
  description: Metadata['description'];
};
export function useSiteMetadata(): SiteMetadata {
  const { title, description } = metadata.site;
  return {
    title,
    description,
  };
}

type SidebarData = {
  firstName: PersonalInformation['firstName'];
  lastName: PersonalInformation['lastName'];
};
export function useSidebarData(): SidebarData {
  const { firstName, lastName } = metadata.personalInformation;
  return {
    firstName,
    lastName,
  };
}

type AboutData = SidebarData & {
  address: PersonalInformation['address'];
  bio: PersonalInformation['bio'];
  socialLinks: SocialLink[];
};
export function useAboutData(): AboutData {
  const { firstName, lastName, bio, address, socialLinks } = metadata.personalInformation;
  return {
    firstName,
    lastName,
    bio,
    address,
    socialLinks,
  };
}

type EducationData = School[];
export function useEducationData(): EducationData {
  const { education } = metadata.personalInformation;
  return education;
}

type ExperienceData = Job[];
export function useExperienceData(): ExperienceData {
  const { experience } = metadata.personalInformation;
  return experience;
}

type ProjectsData = Project[];
export function useProjectsData(): ProjectsData {
  const { projects } = metadata.personalInformation;
  return projects;
}

type SkillsData = {
  skills: Skill[];
  techStack: string[];
};
export function useSkillsData(): SkillsData {
  const { skills, techStack } = metadata.personalInformation;
  return { skills, techStack };
}
