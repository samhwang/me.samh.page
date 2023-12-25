import { useProjectsData } from '../../metadata/use-metadata';

type ProjectProps = {
  title: string;
  description: string;
  url?: string;
};

function Project({ title, description, url }: ProjectProps) {
  const titleText = url ? (
    <a href={url} rel="noreferrer" target="_blank" aria-label={`Project ${title} URL`}>
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

Project.defaultProps = {
  url: '',
};

export default function ProjectSection() {
  const projects = useProjectsData();

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
