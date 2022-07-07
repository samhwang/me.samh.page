import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LangIcon from './lang-icon';
import SocialIcon from './social-icon';

describe('Lang Icon', () => {
  it('Should render without crashing and match snapshot', () => {
    const tree = render(<LangIcon name="php-plain" />);
    expect(tree).toMatchSnapshot();
  });
});

describe('Social Icon', () => {
  it('Should render without crashing and match snapshot', () => {
    const tree = render(
      <BrowserRouter>
        <SocialIcon icon="github-plain" url="https://github.com/samhwang" />
      </BrowserRouter>
    );
    expect(tree).toMatchSnapshot();
  });
});
