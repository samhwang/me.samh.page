import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Education from './education';

describe('Education section render', () => {
  it('Should match snapshot', () => {
    const tree = render(<Education />);
    expect(tree).toMatchSnapshot();
  });
});
