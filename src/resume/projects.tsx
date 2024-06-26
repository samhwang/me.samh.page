import { useProjectsData } from '../../metadata/use-metadata';
import { cx } from '../../styled-system/css';
import * as commonStyles from './common.styles';

type ProjectProps = {
  title: string;
  description: string;
  url?: string;
};

function Project({ title, description, url = '' }: ProjectProps) {
  const titleText = url ? (
    <a className={cx(commonStyles.link)} href={url} rel="noreferrer" target="_blank" aria-label={`Project ${title} URL`}>
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
    <>
      <div className="w-100">
        <h2 className="mb-5">Projects</h2>
        <ul className="fa-ul mb-0">
          {projects.map(({ title, description, url }) => (
            <Project key={title} title={title} description={description} url={url} />
          ))}
        </ul>
      </div>
    </>
  );
}
