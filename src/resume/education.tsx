import { useEducationData } from '../../metadata/use-metadata';
import { dateDisplay, entryContainer } from '../../styled-system/recipes';
import * as styles from './education.styles';

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
        <h3 className={styles.instituteName}>{institute}</h3>
        <div className={styles.degree}>{degree}</div>
        <div>{major}</div>
      </div>
      <div className={dateDisplay()}>
        <span className={styles.dateText}>{duration}</span>
      </div>
    </div>
  );
}

export default function Education() {
  const education = useEducationData();

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Education</h2>
      {education.map(({ institute, degree, major, duration }) => (
        <School institute={institute} degree={degree} major={major} duration={duration} key={institute} />
      ))}
    </div>
  );
}
