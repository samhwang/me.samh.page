import { useState } from 'react';
import { cx } from '../../styled-system/css';

export default function useIconClass(name: string) {
  const DEFAULT_ICON_CLASS = `devicon-${name}`;
  const [iconClass, setIconClass] = useState(DEFAULT_ICON_CLASS);

  const toggleColorIcon = () => setIconClass((currentClass) => cx(DEFAULT_ICON_CLASS, currentClass === DEFAULT_ICON_CLASS && 'colored'));

  return [iconClass, toggleColorIcon] as const;
}
