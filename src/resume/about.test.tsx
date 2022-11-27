import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import About from './about';
import RenderWrapper from '../test-utils/render-wrapper';
import { useAboutData } from '../../metadata/use-metadata';

vi.mock('../../metadata/use-metadata');
const mockHook = vi.mocked(useAboutData);

describe('Render About Data', () => {
  it('Should match snapshot', () => {
    const mockAbout = {
      firstName: 'test',
      lastName: 'test',
      bio: 'test test test',
      address: '123 Test Drive',
      socialLinks: [
        {
          icon: 'test-icon',
          name: 'test social icon',
          url: 'test social URL',
        },
      ],
    };
    mockHook.mockReturnValueOnce(mockAbout);

    const tree = render(<About />, { wrapper: RenderWrapper });
    expect(tree).toMatchSnapshot();
  });
});
