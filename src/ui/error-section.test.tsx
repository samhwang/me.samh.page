import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import RenderWrapper from '../test-utils/render-wrapper';
import ErrorSection from './error-section';

describe('ErrorSection', () => {
  it('renders without crashing and matches snapshot', () => {
    const { container } = render(<ErrorSection />, { wrapper: RenderWrapper });
    expect(container).toMatchSnapshot();
  });
});
