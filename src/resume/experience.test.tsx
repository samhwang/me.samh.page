import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Experiences from './experience';

describe('Experience Component', () => {
  it('Should render without crashing and match snapshot', () => {
    const tree = render(<Experiences />);
    expect(tree).toMatchSnapshot();
  });
});
