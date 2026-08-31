import { useEducationData } from '../../../metadata/use-metadata';
import { dateDisplay, entryContainer, fullWidth, heading, subheading, textPrimary, title } from '../../../styled-system/recipes';

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
        <h3 className={title()}>{institute}</h3>
        <div className={subheading()}>{degree}</div>
        <div>{major}</div>
      </div>
      <div className={dateDisplay()}>
        <span className={textPrimary()}>{duration}</span>
      </div>
    </div>
  );
}

export default function Education() {
  const education = useEducationData();

  return (
    <div className={fullWidth()}>
      <h2 className={heading()}>Education</h2>
      {education.map(({ institute, degree, major, duration }) => (
        <School institute={institute} degree={degree} major={major} duration={duration} key={institute} />
      ))}
    </div>
  );
}
