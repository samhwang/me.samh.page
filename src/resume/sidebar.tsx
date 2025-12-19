import { useToggle } from '@react-hookz/web';
import { useId } from 'react';
import { useSidebarData } from '../../metadata/use-metadata';
import avatarJPG from '../img/avatar.jpg';
import avatarWebP from '../img/avatar.webp';
import * as styles from './sidebar.styles';

type Tab = {
  content: string;
  href: string;
};

export default function Sidebar() {
  const { firstName, lastName } = useSidebarData();

  const tabs: Tab[] = [
    { content: 'About', href: 'about' },
    { content: 'Experience', href: 'experience' },
    { content: 'Education', href: 'education' },
    { content: 'Skills', href: 'skills' },
    { content: 'Projects', href: 'projects' },
  ];

  const [isCollapsed, toggleCollapsed] = useToggle(true);
  const navbarId = useId();

  return (
    <nav className={styles.navigation}>
      <a className={styles.brand} href="#page-top">
        <span className={styles.nameText}>{`${firstName} ${lastName}`}</span>
        <span className={styles.avatarContainer}>
          <picture>
            <source type="image/webp" srcSet={avatarWebP} />
            <source type="image/jpeg" srcSet={avatarJPG} />
            <img className={styles.avatar} src={avatarJPG} alt={`${firstName} ${lastName} Avatar`} />
          </picture>
        </span>
      </a>
      <button
        className={styles.menuToggle}
        type="button"
        data-collapsed={isCollapsed}
        data-toggle="collapse"
        data-target={`#${navbarId}`}
        aria-controls={navbarId}
        aria-expanded={!isCollapsed}
        aria-label="Toggle navigation"
        onClick={toggleCollapsed}
      >
        <span className={styles.menuIcon} />
      </button>
      <div className={styles.menu} data-visible={!isCollapsed} id={navbarId}>
        <div className={styles.navListWrapper}>
          <ul className={styles.navList}>
            {tabs.map(({ href, content }) => (
              <li className={styles.navItem} key={href}>
                <a className={styles.navLink} href={`#${href}`}>
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
