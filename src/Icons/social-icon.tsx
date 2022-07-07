import { Link } from 'react-router-dom';

export interface SocialLinkProps {
  icon: string;
  url: string;
}

export default function SocialIcon({ icon, url }: SocialLinkProps) {
  return (
    <Link to={url}>
      <i className={`devicon-${icon}`} />
    </Link>
  );
}
