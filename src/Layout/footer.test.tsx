import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import Footer from './footer';

describe('Footer', () => {
  it('Should render without crashing and match snapshot', () => {
    const tree = render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    expect(tree).toMatchSnapshot();
  });
});
