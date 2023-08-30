import { useAboutData } from '../../metadata/use-metadata';
import SocialIcon from '../icons/social-icon';

export default function About() {
  const { firstName, lastName, bio, address, socialLinks } = useAboutData();

  return (
    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
      <div className="w-100">
        <h1 className="mb-0">
          {firstName}
          <span className="text-primary">{lastName}</span>
        </h1>
        <div className="subheading mb-5">{address}</div>
        <p className="lead mb-5">{bio}</p>
        <div className="social-icons">
          {socialLinks.map(({ icon, name, url }) => (
            <SocialIcon key={name} icon={icon} url={url} />
          ))}
        </div>
      </div>
    </section>
  );
}
