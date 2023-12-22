import clsx from 'clsx';
import { useSkillsData } from '../../metadata/use-metadata';
import iconClasses from '../icons/icon.module.scss';
import LangIcon from '../icons/lang-icon';
import resumeClasses from '../layout/resume-item.module.scss';

type SkillProps = {
  title: string;
  description: string[];
};

function Skill({ title, description }: SkillProps) {
  return (
    <>
      <div className="subheading mb-3">{title}</div>
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
    <section className={clsx(resumeClasses.section, 'p-3 p-lg-5 d-flex align-items-center')} id="skills">
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
    </section>
  );
}
