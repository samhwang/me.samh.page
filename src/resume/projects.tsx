import { Link } from 'react-router-dom';
import metadata from '../metadata';

interface ProjectProps {
  title: string;
  description: string;
  url?: string;
}

function Project({ title, description, url }: ProjectProps) {
  const titleText = url ? (
    <Link to={url}>
      <strong>{`${title}:`}</strong>
    </Link>
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

Project.defaultProps = {
  url: '',
};

export default function ProjectSection() {
  const { projects } = metadata.personalInformation;

  return (
    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="projects">
      <div className="w-100">
        <h2 className="mb-5">Projects</h2>
        <ul className="fa-ul mb-0">
          {projects.map(({ title, description, url }) => (
            <Project key={title} title={title} description={description} url={url} />
          ))}
        </ul>
      </div>
    </section>
  );
}
