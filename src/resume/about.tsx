import clsx from 'clsx';
import { useAboutData } from '../../metadata/use-metadata';
import iconClasses from '../icons/icon.module.scss';
import SocialIcon from '../icons/social-icon';
import commonClasses from './common.module.scss';

export default function About() {
  const { firstName, lastName, bio, address, socialLinks } = useAboutData();

  return (
    <>
      <div className="w-100">
        <h1 className="mb-0">
          {firstName}
          <span className={clsx(commonClasses.textPrimary)}>{lastName}</span>
        </h1>
        <div className="subheading mb-5">{address}</div>
        <p className="lead mb-5">{bio}</p>
        <div className={clsx(iconClasses.socialIcons)}>
          {socialLinks.map(({ icon, name, url }) => (
            <SocialIcon key={name} icon={icon} url={url} />
          ))}
        </div>
      </div>
    </>
  );
}
