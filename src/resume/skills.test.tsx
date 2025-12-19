import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { skillsData as mockSkillsData } from '../test-utils/mock-metadata';
import SkillSection from './skills';

describe('Skill Section Component', () => {
  it('Should render without crashing and match snapshot', () => {
    const tree = render(<SkillSection />);
    expect(tree).toMatchSnapshot();
  });

  it('displays the section heading', () => {
    render(<SkillSection />);
    const heading = screen.getByRole('heading', { name: 'Skills and Proficiency', level: 2 });
    expect(heading).toBeInTheDocument();
  });

  it('displays skill information', () => {
    render(<SkillSection />);

    const skillData = mockSkillsData.skills[0];

    // Test skill title
    const skillTitle = screen.getByText(skillData.title);
    expect(skillTitle).toBeInTheDocument();

    // Test skill description items
    for (const descriptionLine of skillData.description) {
      const listItem = screen.getByText(descriptionLine);
      expect(listItem).toBeInTheDocument();
    }
  });

  it('displays tech stack icons', () => {
    render(<SkillSection />);

    // Test that each tech stack icon is rendered
    for (const techIcon of mockSkillsData.techStack) {
      const icon = screen.getByTestId(`language-icon-${techIcon}`);
      expect(icon).toBeInTheDocument();
      expect(icon).toHaveClass(`devicon-${techIcon}`);
    }
  });
});
