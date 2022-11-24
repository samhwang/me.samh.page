import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './layout';

describe('Layout rendering', () => {
  it('Should match snapshot', () => {
    const LayoutComponent = (
      <BrowserRouter>
        <Layout title="Test Render" description="Test Render">
          <h1>This is a test!</h1>
        </Layout>
      </BrowserRouter>
    );
    const tree = render(LayoutComponent);
    expect(tree).toMatchSnapshot();
  });
});
