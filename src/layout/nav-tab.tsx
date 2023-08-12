import { ComponentPropsWithRef } from 'react';

interface NavTabProps extends ComponentPropsWithRef<'li'> {
  content: string;
  isActive: boolean;
}

export default function NavTab({ content, isActive, onClick, onKeyDown }: NavTabProps) {
  const className = isActive ? 'nav-item active' : 'nav-item';
  return (
    <li className={className}>
      <span className='nav-link' onClick={onClick} onKeyDown={onKeyDown}>
        {content}
      </span>
    </li>
  );
}
