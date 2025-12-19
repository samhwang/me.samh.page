import { useExperienceData } from '../../metadata/use-metadata';
import { cx } from '../../styled-system/css';
import { dateDisplay, entryContainer, inlineList } from '../../styled-system/recipes';
import LangIcon from '../icons/lang-icon';
import * as styles from './experience.styles';
import * as iconStyles from './icon.styles';

type JobDescriptionProps = {
  title: string;
  companyName: string;
  description: string[];
  duration: string;
  techIcons: string[];
};

function JobDescription({ title, companyName, description, duration, techIcons }: JobDescriptionProps) {
  return (
    <div className={entryContainer()}>
      <div>
        <h3 className={styles.jobTitle}>{title}</h3>
        <div className={styles.companyName}>{companyName}</div>
        <ul>
          {description.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <ul className={cx(inlineList(), iconStyles.devIcons)}>
          {techIcons.map((icon) => (
            <LangIcon name={icon} key={icon} />
          ))}
        </ul>
      </div>
      <div className={dateDisplay()}>
        <span className={styles.dateText}>{duration}</span>
      </div>
    </div>
  );
}

export default function Experiences() {
  const experience = useExperienceData();

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Experience</h2>
      {experience.map(({ title, companyName, description, duration, techIcons }) => (
        <JobDescription key={companyName} title={title} companyName={companyName} description={description} duration={duration} techIcons={techIcons} />
      ))}
    </div>
  );
}
