import { useAboutData } from '../../metadata/use-metadata';
import { css } from '../../styled-system/css';
import SocialIcon from '../icons/social-icon';
import * as commonStyles from './common.styles';
import * as iconStyles from './icon.styles';

export default function About() {
  const { firstName, lastName, bio, address, socialLinks } = useAboutData();

  return (
    <div className={commonStyles.container}>
      <h1 className={commonStyles.title}>
        {firstName}
        <span className={commonStyles.textPrimary}>{lastName}</span>
      </h1>
      <div className={commonStyles.subheading}>{address}</div>
      <p
        className={css({
          marginBottom: 'headingMargin',
          fontSize: '1.15rem',
          fontWeight: 400,
        })}
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
