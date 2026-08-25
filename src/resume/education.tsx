import { useEducationData } from '../../metadata/use-metadata';
import { dateDisplay, entryContainer } from '../../styled-system/recipes';
import * as commonStyles from '../ui/common.styles';

type SchoolProps = {
  institute: string;
  degree: string;
  major: string;
  duration: string;
};

function School({ institute, degree, major, duration }: SchoolProps) {
  return (
    <div className={entryContainer()}>
      <div>
        <h3 className={commonStyles.title}>{institute}</h3>
        <div className={commonStyles.subheading}>{degree}</div>
        <div>{major}</div>
      </div>
      <div className={dateDisplay()}>
        <span className={commonStyles.textPrimary}>{duration}</span>
      </div>
    </div>
  );
}

export default function Education() {
  const education = useEducationData();

  return (
    <div className={commonStyles.container}>
      <h2 className={commonStyles.heading}>Education</h2>
      {education.map(({ institute, degree, major, duration }) => (
        <School institute={institute} degree={degree} major={major} duration={duration} key={institute} />
      ))}
    </div>
  );
}
