import { useProjectsData } from '../../metadata/use-metadata';
import * as styles from './projects.styles';

type ProjectProps = {
  title: string;
  description: string;
  url?: string;
};

function Project({ title, description, url = '' }: ProjectProps) {
  const titleText = url ? (
    <a className={styles.projectLink} href={url} rel="noreferrer" target="_blank" aria-label={`Project ${title} URL`}>
      <strong>{`${title}:`}</strong>
    </a>
  ) : (
    <strong>{`${title}:`}</strong>
  );

  return (
    <li className={styles.projectItem}>
      <p>
        {titleText}
        {` ${description}`}
      </p>
    </li>
  );
}

export default function ProjectSection() {
  const projects = useProjectsData();

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Projects</h2>
      <ul className={styles.projectList}>
        {projects.map(({ title, description, url }) => (
          <Project key={title} title={title} description={description} url={url} />
        ))}
      </ul>
    </div>
  );
}
