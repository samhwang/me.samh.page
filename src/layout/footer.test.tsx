import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from './footer';
import RenderWrapper from '../test-utils/render-wrapper';

describe('Footer', () => {
  it('Should render without crashing and match snapshot', () => {
    const tree = render(<Footer />, { wrapper: RenderWrapper });
    expect(tree).toMatchSnapshot();
  });
});
