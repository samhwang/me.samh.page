import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import SkillSection from './skills';

describe('Skill Section Component', () => {
  it('Should render without crashing and match snapshot', () => {
    const tree = render(<SkillSection />);
    expect(tree).toMatchSnapshot();
  });
});
