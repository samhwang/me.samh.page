import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import RenderWrapper from '../test-utils/render-wrapper';
import ErrorPage from './index';

describe('ErrorPage', () => {
  it('renders without crashing and matches snapshot', () => {
    const { container } = render(<ErrorPage />, { wrapper: RenderWrapper });
    expect(container).toMatchSnapshot();
  });
});
