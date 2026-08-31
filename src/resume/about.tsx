import { useAboutData } from '../../metadata/use-metadata';
import { css } from '../../styled-system/css';
import { fullWidth, socialIcons, subheading, textPrimary, title } from '../../styled-system/recipes';
import SocialIcon from '../ui/social-icon';

export default function About() {
  const { firstName, lastName, bio, address, socialLinks } = useAboutData();

  return (
    <div className={fullWidth()}>
      <h1 className={title()}>
        {firstName}
        <span className={textPrimary()}>{lastName}</span>
      </h1>
      <div className={subheading()}>{address}</div>
      <p
        className={css({
          marginBottom: 'headingMargin',
          fontSize: '1.15rem',
          fontWeight: 400,
        })}
      >
        {bio}
      </p>
      <div className={socialIcons()}>
        {socialLinks.map(({ icon, name, url }) => (
          <SocialIcon key={name} icon={icon} url={url} />
        ))}
      </div>
    </div>
  );
}
