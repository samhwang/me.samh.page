import { useMemo, useCallback, useState } from 'react';

export default function useIconClass(name: string) {
  const DEFAULT_ICON_CLASS = useMemo<string>(() => `devicon-${name}`, [name]);
  const [iconClass, setIconClass] = useState(DEFAULT_ICON_CLASS);

  const toggleColorIcon = useCallback(
    () => setIconClass((currentClass) => (currentClass === DEFAULT_ICON_CLASS ? `${DEFAULT_ICON_CLASS} colored` : DEFAULT_ICON_CLASS)),
    [DEFAULT_ICON_CLASS]
  );

  return [iconClass, toggleColorIcon] as const;
}
