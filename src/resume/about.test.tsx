import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import About from './about';

describe('Render About Data', () => {
  it('Should match snapshot', () => {
    const AboutSection = (
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );
    const tree = render(AboutSection);
    expect(tree).toMatchSnapshot();
  });
});
