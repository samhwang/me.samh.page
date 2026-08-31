import { useProjectsData } from '../../../metadata/use-metadata';
import { css } from '../../../styled-system/css';
import { fullWidth, heading, link } from '../../../styled-system/recipes';

type ProjectProps = {
  title: string;
  description: string;
  url?: string;
};

function Project({ title, description, url = '' }: ProjectProps) {
  const titleText = url ? (
    <a className={link()} href={url} rel="noreferrer" target="_blank" aria-label={`Project ${title} URL`}>
      <strong>{`${title}:`}</strong>
    </a>
  ) : (
    <strong>{`${title}:`}</strong>
  );

  return (
    <li
      className={css({
        position: 'relative',
        marginBottom: '0.5rem',

        '&::before': {
          content: '"✓"',
          position: 'absolute',
          left: '-2em',
          width: '2em',
          top: '0.14em',
          textAlign: 'center',
          color: 'warning',
          fontSize: '1.2em',
          fontWeight: 'bold',
        },
      })}
    >
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
    <div className={fullWidth()}>
      <h2 className={heading()}>Projects</h2>
      <ul
        className={css({
          listStyle: 'none',
          marginLeft: '2.5em',
          paddingLeft: 0,
          marginBottom: 0,
        })}
      >
        {projects.map(({ title, description, url }) => (
          <Project key={title} title={title} description={description} url={url} />
        ))}
      </ul>
    </div>
  );
}
