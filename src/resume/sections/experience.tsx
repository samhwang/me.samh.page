import { useExperienceData } from '../../../metadata/use-metadata';
import { cx } from '../../../styled-system/css';
import { dateDisplay, devIcons, entryContainer, fullWidth, heading, inlineList, subheading, textPrimary } from '../../../styled-system/recipes';
import { title as titleRecipe } from '../../../styled-system/recipes';
import LangIcon from '../../ui/lang-icon';

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
        <h3 className={titleRecipe()}>{title}</h3>
        <div className={subheading()}>{companyName}</div>
        <ul>
          {description.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <ul className={cx(inlineList(), devIcons())}>
          {techIcons.map((icon) => (
            <LangIcon name={icon} key={icon} />
          ))}
        </ul>
      </div>
      <div className={dateDisplay()}>
        <span className={textPrimary()}>{duration}</span>
      </div>
    </div>
  );
}

export default function Experiences() {
  const experience = useExperienceData();

  return (
    <div className={fullWidth()}>
      <h2 className={heading()}>Experience</h2>
      {experience.map(({ title, companyName, description, duration, techIcons }) => (
        <JobDescription key={companyName} title={title} companyName={companyName} description={description} duration={duration} techIcons={techIcons} />
      ))}
    </div>
  );
}
