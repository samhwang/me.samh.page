import { useSkillsData } from '../../metadata/use-metadata';
import { cx } from '../../styled-system/css';
import { devIcons, fullWidth, heading, inlineList, subheading } from '../../styled-system/recipes';
import LangIcon from '../ui/lang-icon';

type SkillProps = {
  title: string;
  description: string[];
};

function Skill({ title, description }: SkillProps) {
  return (
    <>
      <div className={subheading()}>{title}</div>
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
    <div className={fullWidth()}>
      <h2 className={heading()}>Skills and Proficiency</h2>

      {skills.map(({ title, description }) => (
        <Skill title={title} description={description} key={title} />
      ))}
      <ul className={cx(inlineList(), devIcons())}>
        {techStack.map((language) => (
          <LangIcon name={language} key={language} />
        ))}
      </ul>
    </div>
  );
}
