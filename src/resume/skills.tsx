import { useSkillsData } from '../../metadata/use-metadata';
import { css, cx } from '../../styled-system/css';
import LangIcon from '../icons/lang-icon';
import * as commonStyles from './common.styles';
import * as iconStyles from './icon.styles';
import * as typographyStyles from './typography.styles';

type SkillProps = {
  title: string;
  description: string[];
};

function Skill({ title, description }: SkillProps) {
  return (
    <>
      <div className={cx(commonStyles.mb3, typographyStyles.subheading)}>{title}</div>
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
      <div className={commonStyles.w100}>
        <h2 className={commonStyles.mb5}>Skills and Proficiency</h2>

        {skills.map(({ title, description }) => (
          <Skill title={title} description={description} key={title} />
        ))}
        <ul className={cx(commonStyles.listInline, iconStyles.devIcons)}>
          {techStack.map((language) => (
            <LangIcon name={language} key={language} />
          ))}
        </ul>
      </div>
    </>
  );
}
