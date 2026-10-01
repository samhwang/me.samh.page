import { Collapsible } from '@ark-ui/react/collapsible';
import { Toc } from '@ark-ui/react/toc';
import { useMediaQuery } from '@react-hookz/web';
import { useEffect, useState } from 'react';

import { useSidebarData } from '../../metadata/use-metadata';
import { sidebar } from '../../styled-system/recipes';
import avatarJPG from '../img/avatar.jpg';
import avatarWebP from '../img/avatar.webp';

const styles = sidebar();

type Tab = {
  content: string;
  id: string;
};

export default function Sidebar() {
  const { firstName, lastName } = useSidebarData();

  const tabs: Tab[] = [
    { content: 'About', id: 'about' },
    { content: 'Experience', id: 'experience' },
    { content: 'Education', id: 'education' },
    { content: 'Skills', id: 'skills' },
    { content: 'Projects', id: 'projects' },
  ];

  const items = tabs.map(({ id }) => ({ value: id, depth: 1 }));
  const isLg = useMediaQuery('(min-width: 64rem)');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!(!isLg && open)) return;

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('keydown', handleEscapeKey as EventListener);
    return () => document.removeEventListener('keydown', handleEscapeKey as EventListener);
  }, [isLg, open]);

  return (
    <Collapsible.Root asChild open={isLg || open} onOpenChange={(details) => setOpen(details.open)}>
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
        <Collapsible.Trigger className={styles.menuToggle} aria-label="Toggle navigation">
          <span className={styles.menuIcon} />
        </Collapsible.Trigger>
        <Collapsible.Content className={styles.menu}>
          <Toc.Root className={styles.navListWrapper} items={items}>
            <Toc.Title className={styles.tocTitle} asChild>
              <span>Sections</span>
            </Toc.Title>
            <Toc.List className={styles.navList}>
              {tabs.map(({ id, content }) => (
                <Toc.Item className={styles.navItem} key={id} item={{ value: id, depth: 1 }}>
                  <Toc.Link className={styles.navLink} href={`#${id}`} onClick={() => setOpen(false)}>
                    {content}
                  </Toc.Link>
                </Toc.Item>
              ))}
            </Toc.List>
          </Toc.Root>
        </Collapsible.Content>
      </nav>
    </Collapsible.Root>
  );
}
