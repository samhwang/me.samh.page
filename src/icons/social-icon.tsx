export interface SocialLinkProps {
  icon: string;
  url: string;
}

export default function SocialIcon({ icon, url }: SocialLinkProps) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <i className={`devicon-${icon}`} />
    </a>
  );
}
