import { useMemo } from 'react';
import { useToggle } from '@mantine/hooks';

export default function useIconClass(name: string) {
  const DEFAULT_ICON_CLASS = useMemo<string>(() => `devicon-${name}`, [name]);

  const [currentIconClass, toggleIconClass] = useToggle([
    DEFAULT_ICON_CLASS,
    `${DEFAULT_ICON_CLASS} colored`,
  ]);

  return [currentIconClass, toggleIconClass] as const;
}
