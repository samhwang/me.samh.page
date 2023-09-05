import { ComponentPropsWithRef } from 'react';

interface NavTabProps extends ComponentPropsWithRef<'li'> {
  content: string;
  href: string;
}

export default function NavTab({ content, href }: NavTabProps) {
  return (
    <li className="nav-item">
      <a className="nav-link" href={`#${href}`}>
        {content}
      </a>
    </li>
  );
}
