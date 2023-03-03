import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SEO, { SEOProps } from './seo';

describe('SEO Rendering', () => {
  it('Should match snapshot', () => {
    const data: SEOProps = {
      title: 'Test Render',
      description: 'Test Render',
    };

    const tree = render(<SEO title={data.title} description={data.description} />);
    expect(tree).toMatchSnapshot();
  });
});
