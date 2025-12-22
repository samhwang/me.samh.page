import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { projectsData as mockProjectsData } from '../test-utils/mock-metadata';
import ProjectSection from './projects';

describe('Project section rendering', () => {
  it('Should match snapshot', () => {
    const tree = render(<ProjectSection />);
    expect(tree).toMatchSnapshot();
  });

  it('displays the section heading', () => {
    render(<ProjectSection />);
    const heading = screen.getByRole('heading', { name: 'Projects', level: 2 });
    expect(heading).toBeInTheDocument();
  });

  it('displays project information', () => {
    render(<ProjectSection />);

    const projectData = mockProjectsData[0];

    // Test project title is displayed (as strong text)
    const projectTitle = screen.getByText(`${projectData.title}:`, { exact: false });
    expect(projectTitle).toBeInTheDocument();

    // Test project description is displayed
    const projectDescription = screen.getByText(projectData.description, { exact: false });
    expect(projectDescription).toBeInTheDocument();
  });

  it('renders project with URL as link', () => {
    render(<ProjectSection />);

    // Get the project with URL (second project in mock data)
    const projectData = mockProjectsData[1];

    // Find the list item containing this project
    const listItems = screen.getAllByRole('listitem');
    const projectItem = listItems.find((item) => item.textContent?.includes(projectData.title));
    expect(projectItem).toBeDefined();

    if (projectItem) {
      // Verify there's a link for this project
      const link = within(projectItem).getByRole('link');
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', projectData.url);

      // Verify the title is inside the link
      const titleElement = within(link).getByText(`${projectData.title}:`, { exact: false });
      expect(titleElement).toBeInTheDocument();
    }
  });

  it('renders project without URL as plain text', () => {
    render(<ProjectSection />);

    const projectData = mockProjectsData[0];

    // Test that title without URL is displayed as plain strong text
    const projectTitle = screen.getByText(`${projectData.title}:`, { exact: false });
    expect(projectTitle).toBeInTheDocument();

    // Verify there's no link for this project
    const listItems = screen.getAllByRole('listitem');
    const projectItem = listItems.find((item) => item.textContent?.includes(projectData.title));
    expect(projectItem).toBeDefined();

    if (projectItem) {
      const links = within(projectItem).queryAllByRole('link');
      expect(links).toHaveLength(0);
    }
  });
});
