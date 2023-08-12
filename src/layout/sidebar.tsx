import { useState } from 'react';
import { useToggle } from '@react-hookz/web';
import avatarJPG from '../assets/img/avatar.jpg';
import avatarWebP from '../assets/img/avatar.webp';
import { useSidebarData } from '../../metadata/use-metadata';
import NavTab from './nav-tab';

interface Tab {
  content: string;
  href: string;
}

export default function Sidebar() {
  const { firstName, lastName } = useSidebarData();

  const tabs: Tab[] = [
    { content: 'About', href: 'about' },
    {
      content: 'Experience',
      href: 'experience',
    },
    {
      content: 'Education',
      href: 'education',
    },
    { content: 'Skills', href: 'skills' },
    { content: 'Projects', href: 'projects' },
  ];
  const [tabInView, setTabInView] = useState(0);
  const scrollTo = (element: Element | null, tabIndex: number) => {
    if (!element) {
      return;
    }

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
    setTabInView(tabIndex);
  };

  const [isCollapsed, toggleCollapsed] = useToggle(true);

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary fixed-top' id='sideNav'>
      <a className='navbar-brand' href='#page-top'>
        <span className='d-block d-lg-none'>{`${firstName} ${lastName}`}</span>
        <span className='d-none d-lg-block'>
          <picture>
            <source type='image/webp' srcSet={avatarWebP} />
            <source type='image/jpeg' srcSet={avatarJPG} />
            <img className='img-fluid img-profile rounded-circle mx-auto mb-2' src={avatarJPG} alt={`${firstName} ${lastName} Avatar`} />
          </picture>
        </span>
      </a>
      <button
        className={`navbar-toggler ${isCollapsed ? 'collapsed' : ''}`}
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
        onClick={toggleCollapsed}
      >
        <span className='navbar-toggler-icon' />
      </button>
      <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id='navbarSupportedContent'>
        <div className='navbar-nav'>
          {tabs.map(({ href, content }, tabIndex) => {
            const isActive = tabInView === tabIndex;
            const block = document.getElementById(href);
            const handleClick = () => scrollTo(block, tabIndex);

            return <NavTab content={content} isActive={isActive} onClick={handleClick} onKeyDown={handleClick} key={href} />;
          })}
        </div>
      </div>
    </nav>
  );
}
