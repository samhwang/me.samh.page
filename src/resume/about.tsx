import { useAboutData } from '../../metadata/use-metadata';
import { css, cx } from '../../styled-system/css';
import SocialIcon from '../icons/social-icon';

import * as commonStyles from './common.styles';
import * as iconStyles from './icon.styles';
import * as typographyStyles from './typography.styles';

export default function About() {
  const { firstName, lastName, bio, address, socialLinks } = useAboutData();

  return (
    <div className={commonStyles.w100}>
      <h1 className={commonStyles.mb0}>
        {firstName}
        <span className={commonStyles.textPrimary}>{lastName}</span>
      </h1>
      <div className={cx(commonStyles.mb5, typographyStyles.subheading)}>{address}</div>
      <p
        className={cx(
          commonStyles.mb5,
          css({
            fontSize: '1.15rem',
            fontWeight: 400,
          })
        )}
      >
        {bio}
      </p>
      <div className={iconStyles.socialIcons}>
        {socialLinks.map(({ icon, name, url }) => (
          <SocialIcon key={name} icon={icon} url={url} />
        ))}
      </div>
    </div>
  );
}
