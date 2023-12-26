import clsx from 'clsx';
import { useAboutData } from '../../metadata/use-metadata';
import { css } from '../../styled-system/css';
import SocialIcon from '../icons/social-icon';
import * as commonStyles from './common.styles';
import * as iconStyles from './icon.styles';
import * as typographyStyles from './typography.styles';

export default function About() {
  const { firstName, lastName, bio, address, socialLinks } = useAboutData();

  return (
    <>
      <div className="w-100">
        <h1 className="mb-0">
          {firstName}
          <span className={clsx(commonStyles.textPrimary)}>{lastName}</span>
        </h1>
        <div className={clsx('mb-5', typographyStyles.subheading)}>{address}</div>
        <p
          className={clsx(
            'mb-5',
            css({
              fontSize: '1.15rem',
              fontWeight: 400,
            })
          )}
        >
          {bio}
        </p>
        <div className={clsx(iconStyles.socialIcons)}>
          {socialLinks.map(({ icon, name, url }) => (
            <SocialIcon key={name} icon={icon} url={url} />
          ))}
        </div>
      </div>
    </>
  );
}
