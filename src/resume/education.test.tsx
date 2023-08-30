import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { useEducationData } from '../../metadata/use-metadata';
import RenderWrapper from '../test-utils/render-wrapper';
import Education from './education';

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
