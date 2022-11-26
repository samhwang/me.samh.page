import { useSkillsData } from '../../metadata/use-metadata';
import LangIcon from '../icons/lang-icon';

interface SkillProps {
  title: string;
  description: string[];
}

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
    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
      <div className="w-100">
        <h2 className="mb-5">Skills and Proficiency</h2>

        {skills.map(({ title, description }) => (
          <Skill title={title} description={description} key={title} />
        ))}
        <ul className="list-inline dev-icons">
          {techStack.map((language) => (
            <LangIcon name={language} key={language} />
          ))}
        </ul>
      </div>
    </section>
  );
}
