import { useSkillsData } from '../../metadata/use-metadata';
import { cx } from '../../styled-system/css';
import { inlineList } from '../../styled-system/recipes';
import LangIcon from '../icons/lang-icon';
import * as commonStyles from './common.styles';
import * as iconStyles from './icon.styles';

type SkillProps = {
  title: string;
  description: string[];
};

function Skill({ title, description }: SkillProps) {
  return (
    <>
      <div className={commonStyles.subheading}>{title}</div>
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
    <div className={commonStyles.container}>
      <h2 className={commonStyles.heading}>Skills and Proficiency</h2>

      {skills.map(({ title, description }) => (
        <Skill title={title} description={description} key={title} />
      ))}
      <ul className={cx(inlineList(), iconStyles.devIcons)}>
        {techStack.map((language) => (
          <LangIcon name={language} key={language} />
        ))}
      </ul>
    </div>
  );
}
