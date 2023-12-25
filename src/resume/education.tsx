import clsx from 'clsx';
import { useEducationData } from '../../metadata/use-metadata';
import commonClasses from './common.module.scss';
import typographyClasses from './typography.module.scss';

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
        <div className={clsx('mb-3', typographyClasses.subheading)}>{degree}</div>
        <div>{major}</div>
      </div>
      <div className={clsx(commonClasses.date, 'text-md-right')}>
        <span className={clsx(commonClasses.textPrimary)}>{duration}</span>
      </div>
    </div>
  );
}

export default function Education() {
  const education = useEducationData();

  return (
    <>
      <div className="w-100">
        <h2 className="mb-5">Education</h2>
        {education.map(({ institute, degree, major, duration }) => (
          <School institute={institute} degree={degree} major={major} duration={duration} key={institute} />
        ))}
      </div>
    </>
  );
}
