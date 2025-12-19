import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import RenderWrapper from '../test-utils/render-wrapper';
import ErrorPage from './index';

describe('ErrorPage', () => {
  it('renders without crashing and matches snapshot', () => {
    const tree = render(<ErrorPage />, { wrapper: RenderWrapper });
    expect(tree).toMatchSnapshot();
  });
});
