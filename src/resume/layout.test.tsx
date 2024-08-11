import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import RenderWrapper from '../test-utils/render-wrapper';

describe('Layout rendering', () => {
  it('Should match snapshot', () => {
    const tree = render(<h1>This is a test!</h1>, { wrapper: RenderWrapper });
    expect(tree).toMatchSnapshot();
  });
});
