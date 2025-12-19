import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { experienceData as mockExperienceData } from '../test-utils/mock-metadata';
import Experiences from './experience';

describe('Experience Component', () => {
  it('Should render without crashing and match snapshot', () => {
    const tree = render(<Experiences />);
    expect(tree).toMatchSnapshot();
  });

  it('displays the section heading', () => {
    render(<Experiences />);
    const heading = screen.getByRole('heading', { name: 'Experience', level: 2 });
    expect(heading).toBeInTheDocument();
  });

  it('displays job information', () => {
    render(<Experiences />);

    const jobData = mockExperienceData[0];

    // Test job title
    const jobTitle = screen.getByRole('heading', { name: jobData.title, level: 3 });
    expect(jobTitle).toBeInTheDocument();

    // Test company name
    const companyName = screen.getByText(jobData.companyName);
    expect(companyName).toBeInTheDocument();

    // Test duration
    const duration = screen.getByText(jobData.duration);
    expect(duration).toBeInTheDocument();
  });

  it('displays job description items', () => {
    render(<Experiences />);

    const jobData = mockExperienceData[0];

    // Test each description line is visible
    for (const descriptionLine of jobData.description) {
      const listItem = screen.getByText(descriptionLine);
      expect(listItem).toBeInTheDocument();
    }
  });

  it('displays tech stack icons', () => {
    render(<Experiences />);

    const jobData = mockExperienceData[0];

    // Test that each tech icon is rendered
    for (const techIcon of jobData.techIcons) {
      const icon = screen.getByTestId(`language-icon-${techIcon}`);
      expect(icon).toBeInTheDocument();
      expect(icon).toHaveClass(`devicon-${techIcon}`);
    }
  });
});
