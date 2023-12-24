import clsx from 'clsx';
import { useEducationData } from '../../metadata/use-metadata';
import classes from './common.module.scss';

type SchoolProps = {
  institute: string;
  degree: string;
  major: string;
  duration: string;
};

function School({ institute, degree, major, duration }: SchoolProps) {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
      <div>
        <h3 className="mb-0">{institute}</h3>
        <div className="subheading mb-3">{degree}</div>
        <div>{major}</div>
      </div>
      <div className={clsx(classes.date, 'text-md-right')}>
        <span className="text-primary">{duration}</span>
      </div>
    </div>
  );
}

export default function Education() {
  const education = useEducationData();

  return (
    <section className={clsx(classes.section, 'p-3 p-lg-5 d-flex align-items-center')} id="education">
      <div className="w-100">
        <h2 className="mb-5">Education</h2>
        {education.map(({ institute, degree, major, duration }) => (
          <School institute={institute} degree={degree} major={major} duration={duration} key={institute} />
        ))}
      </div>
    </section>
  );
}
