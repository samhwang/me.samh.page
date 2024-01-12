import { useCallback, useMemo, useState } from 'react';
import { cx } from '../../styled-system/css';

export default function useIconClass(name: string) {
  const DEFAULT_ICON_CLASS = useMemo<string>(() => `devicon-${name}`, [name]);
  const [iconClass, setIconClass] = useState(DEFAULT_ICON_CLASS);

  const toggleColorIcon = useCallback(
    () => setIconClass((currentClass) => cx(DEFAULT_ICON_CLASS, currentClass === DEFAULT_ICON_CLASS && 'colored')),
    [DEFAULT_ICON_CLASS]
  );

  return [iconClass, toggleColorIcon] as const;
}
