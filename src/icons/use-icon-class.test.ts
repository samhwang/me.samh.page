import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import useIconClass from './use-icon-class';

const ICON_NAME = 'docker-plain';

describe('Use Icon Class', () => {
  it('Should show correct class on initial render', () => {
    const { result } = renderHook(() => useIconClass(ICON_NAME));
    expect(result.current[0]).toEqual(`devicon-${ICON_NAME}`);
  });

  it('Should show correct class after toggle', () => {
    const { result } = renderHook(() => useIconClass(ICON_NAME));
    act(() => {
      result.current[1]();
    });
    expect(result.current[0]).toEqual(`devicon-${ICON_NAME} colored`);
  });
});
