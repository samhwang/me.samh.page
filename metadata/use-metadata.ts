import metadata from './metadata';

export function useSiteMetadata() {
  const { siteTitle, siteDescription } = metadata;
  return {
    title: siteTitle,
    description: siteDescription,
  };
}

export function useSidebarData() {
  const { firstName, lastName } = metadata.personalInformation;
  return {
    firstName,
    lastName,
  };
}

export function useAboutData() {
  const { firstName, lastName, bio, address, socialLinks } = metadata.personalInformation;
  return {
    firstName,
    lastName,
    bio,
    address,
    socialLinks,
  };
}

export function useEducationData() {
  const { education } = metadata.personalInformation;
  return education;
}

export function useExperienceData() {
  const { experience } = metadata.personalInformation;
  return experience;
}

interface Projects {
  title: string;
  description: string;
  url?: string;
}

export function useProjectsData(): Projects[] {
  const { projects } = metadata.personalInformation;
  return projects;
}

export function useSkillsData() {
  const { skills, techStack } = metadata.personalInformation;
  return { skills, techStack };
}
