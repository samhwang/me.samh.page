import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import RenderWrapper from '../test-utils/render-wrapper';
import Footer from './footer';

describe('Footer', () => {
  it('Should render without crashing and match snapshot', () => {
    const tree = render(<Footer />, { wrapper: RenderWrapper });
    expect(tree).toMatchSnapshot();
  });
});
