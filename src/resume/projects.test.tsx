import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ProjectSection from './projects';

describe('Project section rendering', () => {
  it('Should match snapshot', () => {
    const tree = render(<ProjectSection />);
    expect(tree).toMatchSnapshot();
  });
});
