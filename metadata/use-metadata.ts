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
  const { firstName, lastName, address, socialLinks } = metadata.personalInformation;
  return {
    firstName,
    lastName,
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

export function useProjectsData() {
  const { projects } = metadata.personalInformation;
  return projects;
}

export function useSkillsData() {
  const { skills, techStack } = metadata.personalInformation;
  return { skills, techStack };
}
