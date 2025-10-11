import { useToggle } from '@react-hookz/web';
import { useId } from 'react';
import { useSidebarData } from '../../metadata/use-metadata';
import { cx } from '../../styled-system/css';
import avatarJPG from '../img/avatar.jpg';
import avatarWebP from '../img/avatar.webp';
import * as commonStyles from './common.styles';
import * as layoutStyles from './layout.styles';
import * as navbarStyles from './navbar.styles';
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
  const navbarId = useId();

  return (
    <nav
      className={cx(
        navbarStyles.navbar,
        navbarStyles.navbarExpandLg,
        navbarStyles.navbarDark,
        navbarStyles.fixedTop,
        sidebarStyles.sideNav,
        commonStyles.bgPrimary
      )}
    >
      <a className={cx(navbarStyles.navbarBrand, sidebarStyles.navbarBrand)} href="#page-top">
        <span className={cx(layoutStyles.dBlock, layoutStyles.dLgNone)}>{`${firstName} ${lastName}`}</span>
        <span className={cx(layoutStyles.dNone, layoutStyles.dLgBlock)}>
          <picture>
            <source type="image/webp" srcSet={avatarWebP} />
            <source type="image/jpeg" srcSet={avatarJPG} />
            <img
              className={cx(sidebarStyles.imgProfile, layoutStyles.imgFluid, layoutStyles.roundedCircle, layoutStyles.mxAuto, layoutStyles.mb2)}
              src={avatarJPG}
              alt={`${firstName} ${lastName} Avatar`}
            />
          </picture>
        </span>
      </a>
      <button
        className={cx(navbarStyles.navbarToggler, sidebarStyles.navbarToggler, isCollapsed && navbarStyles.collapsed)}
        type="button"
        data-toggle="collapse"
        data-target={`#${navbarId}`}
        aria-controls={navbarId}
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={toggleCollapsed}
      >
        <span className={navbarStyles.navbarTogglerIcon} />
      </button>
      <div className={cx(navbarStyles.navbarCollapse, navbarStyles.collapse, sidebarStyles.navbarCollapse, !isCollapsed && navbarStyles.show)} id={navbarId}>
        <div className={cx(navbarStyles.navbarNav, sidebarStyles.navbarNav)}>
          <ul>
            {tabs.map(({ href, content }) => (
              <li className={sidebarStyles.navItem} key={href}>
                <a className={cx(navbarStyles.navLink, sidebarStyles.navLink)} href={`#${href}`}>
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
