import { useAboutData } from '../../metadata/use-metadata';
import SocialIcon from '../icons/social-icon';
import * as styles from './about.styles';
import * as iconStyles from './icon.styles';

export default function About() {
  const { firstName, lastName, bio, address, socialLinks } = useAboutData();

  return (
    <div className={styles.container}>
      <h1 className={styles.name}>
        {firstName}
        <span className={styles.lastName}>{lastName}</span>
      </h1>
      <div className={styles.address}>{address}</div>
      <p className={styles.bio}>{bio}</p>
      <div className={iconStyles.socialIcons}>
        {socialLinks.map(({ icon, name, url }) => (
          <SocialIcon key={name} icon={icon} url={url} />
        ))}
      </div>
    </div>
  );
}
