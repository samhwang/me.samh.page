import { useToggle } from '@react-hookz/web';
import clsx from 'clsx';
import { useSidebarData } from '../../metadata/use-metadata';
import avatarJPG from '../assets/img/avatar.jpg';
import avatarWebP from '../assets/img/avatar.webp';
import commonClasses from './common.module.scss';
import sidebarClasses from './sidebar.module.scss';

type Tab = {
  content: string;
  href: string;
};

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

  const [isCollapsed, toggleCollapsed] = useToggle(true);

  return (
    <nav className={clsx('navbar navbar-expand-lg navbar-dark bg-primary fixed-top', sidebarClasses.sideNav, commonClasses.bgPrimary)}>
      <a className={clsx('navbar-brand', sidebarClasses.navbarBrand)} href="#page-top">
        <span className="d-block d-lg-none">{`${firstName} ${lastName}`}</span>
        <span className="d-none d-lg-block">
          <picture>
            <source type="image/webp" srcSet={avatarWebP} />
            <source type="image/jpeg" srcSet={avatarJPG} />
            <img className={clsx(sidebarClasses.imgProfile, 'img-fluid rounded-circle mx-auto mb-2')} src={avatarJPG} alt={`${firstName} ${lastName} Avatar`} />
          </picture>
        </span>
      </a>
      <button
        className={clsx('navbar-toggler', sidebarClasses.navbarToggler, isCollapsed && 'collapsed')}
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
      <div className={clsx('navbar-collapse collapse', sidebarClasses.navbarCollapse, isCollapsed && 'show')} id="navbarSupportedContent">
        <div className={clsx('navbar-nav', sidebarClasses.navbarNav)}>
          <ul>
            {tabs.map(({ href, content }) => (
              <li className={clsx(sidebarClasses.navItem)} key={href}>
                <a className={clsx('nav-link', sidebarClasses.navLink)} href={`#${href}`}>
                  {content}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
