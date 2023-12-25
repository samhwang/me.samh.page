import clsx from 'clsx';
import { useSkillsData } from '../../metadata/use-metadata';
import LangIcon from '../icons/lang-icon';
import iconClasses from './icon.module.scss';
import typographyClasses from './typography.module.scss';

type SkillProps = {
  title: string;
  description: string[];
};

function Skill({ title, description }: SkillProps) {
  return (
    <>
      <div className={clsx('mb-3', typographyClasses.subheading)}>{title}</div>
      <ul>
        {description.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </>
  );
}

export default function SkillSection() {
  const { skills, techStack } = useSkillsData();

  return (
    <>
      <div className="w-100">
        <h2 className="mb-5">Skills and Proficiency</h2>

        {skills.map(({ title, description }) => (
          <Skill title={title} description={description} key={title} />
        ))}
        <ul className={clsx('list-inline', iconClasses.devIcons)}>
          {techStack.map((language) => (
            <LangIcon name={language} key={language} />
          ))}
        </ul>
      </div>
    </>
  );
}
