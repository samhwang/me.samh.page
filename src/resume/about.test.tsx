import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import About from './about';

describe('Render About Data', () => {
  it('Should match snapshot', () => {
    const tree = render(<About />);
    expect(tree).toMatchSnapshot();
  });
});
