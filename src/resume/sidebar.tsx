import { useToggle } from '@react-hookz/web';
import { useSidebarData } from '../../metadata/use-metadata';
import { cx } from '../../styled-system/css';
import avatarJPG from '../img/avatar.jpg';
import avatarWebP from '../img/avatar.webp';
import * as commonStyles from './common.styles';
import * as sidebarStyles from './sidebar.styles';

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
    <nav className={cx('navbar navbar-expand-lg navbar-dark fixed-top', sidebarStyles.sideNav, commonStyles.bgPrimary)}>
      <a className={cx('navbar-brand', sidebarStyles.navbarBrand)} href="#page-top">
        <span className="d-block d-lg-none">{`${firstName} ${lastName}`}</span>
        <span className="d-none d-lg-block">
          <picture>
            <source type="image/webp" srcSet={avatarWebP} />
            <source type="image/jpeg" srcSet={avatarJPG} />
            <img className={cx(sidebarStyles.imgProfile, 'img-fluid rounded-circle mx-auto mb-2')} src={avatarJPG} alt={`${firstName} ${lastName} Avatar`} />
          </picture>
        </span>
      </a>
      <button
        className={cx('navbar-toggler', sidebarStyles.navbarToggler, isCollapsed && 'collapsed')}
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
      <div className={cx('navbar-collapse collapse', sidebarStyles.navbarCollapse, isCollapsed && 'show')} id="navbarSupportedContent">
        <div className={cx('navbar-nav', sidebarStyles.navbarNav)}>
          <ul>
            {tabs.map(({ href, content }) => (
              <li className={cx(sidebarStyles.navItem)} key={href}>
                <a className={cx('nav-link', sidebarStyles.navLink)} href={`#${href}`}>
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
