import { useEducationData } from '../../metadata/use-metadata';
import { cx } from '../../styled-system/css';
import * as commonStyles from './common.styles';
import * as layoutStyles from './layout.styles';
import * as typographyStyles from './typography.styles';

type SchoolProps = {
  institute: string;
  degree: string;
  major: string;
  duration: string;
};

function School({ institute, degree, major, duration }: SchoolProps) {
  return (
    <div className={cx(commonStyles.dFlex, layoutStyles.flexColumn, layoutStyles.flexMdRow, layoutStyles.justifyContentBetween, commonStyles.mb5)}>
      <div>
        <h3 className={commonStyles.mb0}>{institute}</h3>
        <div className={cx(commonStyles.mb3, typographyStyles.subheading)}>{degree}</div>
        <div>{major}</div>
      </div>
      <div className={cx(commonStyles.date, layoutStyles.textMdRight)}>
        <span className={commonStyles.textPrimary}>{duration}</span>
      </div>
    </div>
  );
}

export default function Education() {
  const education = useEducationData();

  return (
    <div className={commonStyles.w100}>
      <h2 className={commonStyles.mb5}>Education</h2>
      {education.map(({ institute, degree, major, duration }) => (
        <School institute={institute} degree={degree} major={major} duration={duration} key={institute} />
      ))}
    </div>
  );
}
