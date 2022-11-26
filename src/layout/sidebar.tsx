import { useRef } from 'react';
import { useToggle } from '@react-hookz/web';
import { Scrollspy } from '@makotot/ghostui';
import Scroll from './scroll';
import avatarJPG from '../assets/img/avatar.jpg';
import avatarWebP from '../assets/img/avatar.webp';
import { useSidebarData } from '../../metadata/use-metadata';

export default function Sidebar() {
  const { firstName, lastName } = useSidebarData();

  const tabs = [
    { content: 'About', href: 'about', ref: useRef<HTMLLIElement>(null) },
    {
      content: 'Experience',
      href: 'experience',
      ref: useRef<HTMLLIElement>(null),
    },
    {
      content: 'Education',
      href: 'education',
      ref: useRef<HTMLLIElement>(null),
    },
    { content: 'Skills', href: 'skills', ref: useRef<HTMLLIElement>(null) },
    { content: 'Projects', href: 'projects', ref: useRef<HTMLLIElement>(null) },
  ];
  const [isCollapsed, toggleCollapsed] = useToggle(true);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <a className="navbar-brand" href="#page-top">
        <span className="d-block d-lg-none">{`${firstName} ${lastName}`}</span>
        <span className="d-none d-lg-block">
          <picture>
            <source type="image/webp" srcSet={avatarWebP} />
            <source type="image/jpeg" srcSet={avatarJPG} />
            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={avatarJPG} alt={`${firstName} ${lastName} Avatar`} />
          </picture>
        </span>
      </a>
      <button
        className={`navbar-toggler ${isCollapsed ? 'collapsed' : ''}`}
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={toggleCollapsed}
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarSupportedContent">
        <Scrollspy sectionRefs={tabs.map(({ ref }) => ref)}>
          {({ currentElementIndexInViewport }) => (
            <div className="navbar-nav">
              {tabs.map(({ href, content, ref }, i) => {
                const isActive = currentElementIndexInViewport === i;
                const className = isActive ? 'nav-item active' : 'nav-item';

                return (
                  <li className={className} ref={ref} key={href}>
                    <Scroll type="id" element={href} counter={i}>
                      <a className="nav-link" href={`#${href}`}>
                        {content}
                      </a>
                    </Scroll>
                  </li>
                );
              })}
            </div>
          )}
        </Scrollspy>
      </div>
    </nav>
  );
}
