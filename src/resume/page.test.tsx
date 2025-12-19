import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ResumePage from './page';

describe('ResumePage', () => {
  it('renders without crashing and matches snapshot', () => {
    const tree = render(<ResumePage />);
    expect(tree).toMatchSnapshot();
  });

  it('renders all section headings', () => {
    render(<ResumePage />);

    // Test that all main section headings are present
    const experienceHeading = screen.getByRole('heading', { name: 'Experience', level: 2 });
    expect(experienceHeading).toBeInTheDocument();

    const educationHeading = screen.getByRole('heading', { name: 'Education', level: 2 });
    expect(educationHeading).toBeInTheDocument();

    const skillsHeading = screen.getByRole('heading', { name: 'Skills and Proficiency', level: 2 });
    expect(skillsHeading).toBeInTheDocument();

    const projectsHeading = screen.getByRole('heading', { name: 'Projects', level: 2 });
    expect(projectsHeading).toBeInTheDocument();
  });

  it('renders all section containers with correct IDs', () => {
    const { container } = render(<ResumePage />);

    // Test that sections have correct IDs for anchor navigation
    const aboutSection = container.querySelector('section#about');
    expect(aboutSection).toBeInTheDocument();

    const experienceSection = container.querySelector('section#experience');
    expect(experienceSection).toBeInTheDocument();

    const educationSection = container.querySelector('section#education');
    expect(educationSection).toBeInTheDocument();

    const skillsSection = container.querySelector('section#skills');
    expect(skillsSection).toBeInTheDocument();

    const projectsSection = container.querySelector('section#projects');
    expect(projectsSection).toBeInTheDocument();
  });

  it('renders horizontal rule separators between sections', () => {
    const { container } = render(<ResumePage />);

    // Test that HR elements exist to separate sections
    const horizontalRules = container.querySelectorAll('hr');
    // There should be 5 sections, which means 5 horizontal rules (one after each section)
    expect(horizontalRules.length).toBe(5);
  });
});
