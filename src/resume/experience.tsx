import { useExperienceData } from '../../metadata/use-metadata';
import { cx } from '../../styled-system/css';
import { dateDisplay, entryContainer, inlineList } from '../../styled-system/recipes';
import LangIcon from '../icons/lang-icon';
import * as commonStyles from './common.styles';
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
        <h3 className={commonStyles.title}>{title}</h3>
        <div className={commonStyles.subheading}>{companyName}</div>
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
        <span className={commonStyles.textPrimary}>{duration}</span>
      </div>
    </div>
  );
}

export default function Experiences() {
  const experience = useExperienceData();

  return (
    <div className={commonStyles.container}>
      <h2 className={commonStyles.heading}>Experience</h2>
      {experience.map(({ title, companyName, description, duration, techIcons }) => (
        <JobDescription key={companyName} title={title} companyName={companyName} description={description} duration={duration} techIcons={techIcons} />
      ))}
    </div>
  );
}
