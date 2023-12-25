import clsx from 'clsx';
import { useAboutData } from '../../metadata/use-metadata';
import SocialIcon from '../icons/social-icon';
import commonClasses from './common.module.scss';
import iconClasses from './icon.module.scss';
import typographyClasses from './typography.module.scss';

export default function About() {
  const { firstName, lastName, bio, address, socialLinks } = useAboutData();

  return (
    <>
      <div className="w-100">
        <h1 className={clsx('mb-0', typographyClasses.h1)}>
          {firstName}
          <span className={clsx(commonClasses.textPrimary)}>{lastName}</span>
        </h1>
        <div className={clsx('mb-5', typographyClasses.subheading)}>{address}</div>
        <p className={clsx('mb-5', typographyClasses.lead)}>{bio}</p>
        <div className={clsx(iconClasses.socialIcons)}>
          {socialLinks.map(({ icon, name, url }) => (
            <SocialIcon key={name} icon={icon} url={url} />
          ))}
        </div>
      </div>
    </>
  );
}
