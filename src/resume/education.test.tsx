import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Education from './education';
import RenderWrapper from '../test-utils/render-wrapper';
import { useEducationData } from '../../metadata/use-metadata';

vi.mock('../../metadata/use-metadata');
const mockHook = vi.mocked(useEducationData);

describe('Education section render', () => {
  it('Should match snapshot', () => {
    const mockEducation = [
      {
        institute: 'Test',
        degree: 'Test',
        major: 'Test',
        duration: '2020 - 2021',
      },
    ];
    mockHook.mockReturnValueOnce(mockEducation);

    const tree = render(<Education />, { wrapper: RenderWrapper });
    expect(tree).toMatchSnapshot();
  });
});
