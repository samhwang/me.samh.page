import { useProjectsData } from '../../metadata/use-metadata';
import { cx } from '../../styled-system/css';
import * as commonStyles from './common.styles';
import * as layoutStyles from './layout.styles';

type ProjectProps = {
  title: string;
  description: string;
  url?: string;
};

function Project({ title, description, url = '' }: ProjectProps) {
  const titleText = url ? (
    <a className={commonStyles.link} href={url} rel="noreferrer" target="_blank" aria-label={`Project ${title} URL`}>
      <strong>{`${title}:`}</strong>
    </a>
  ) : (
    <strong>{`${title}:`}</strong>
  );

  return (
    <li>
      <i className="fa-li fa fa-tasks text-warning" />
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
    <div className={commonStyles.w100}>
      <h2 className={commonStyles.mb5}>Projects</h2>
      <ul className={cx(layoutStyles.faUl, commonStyles.mb0)}>
        {projects.map(({ title, description, url }) => (
          <Project key={title} title={title} description={description} url={url} />
        ))}
      </ul>
    </div>
  );
}
