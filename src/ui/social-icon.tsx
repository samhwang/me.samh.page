import { Portal } from '@ark-ui/react/portal';
import { Tooltip } from '@ark-ui/react/tooltip';

import { socialIcon, tooltip } from '../../styled-system/recipes';

export type SocialLinkProps = {
  icon: string;
  name: string;
  url: string;
};

const tooltipStyles = tooltip();

export default function SocialIcon({ icon, name, url }: SocialLinkProps) {
  return (
    <Tooltip.Root lazyMount unmountOnExit>
      <Tooltip.Trigger asChild>
        <a className={socialIcon()} href={url} target="_blank" rel="noreferrer" aria-label={name}>
          <i data-testid={`social-icon-${icon}`} className={`devicon-${icon}`} />
        </a>
      </Tooltip.Trigger>
      {/* Portalled so the tooltip is not a sibling of the anchors, which keeps the recipe's last-child margin reset intact. */}
      <Portal>
        <Tooltip.Positioner>
          <Tooltip.Content className={tooltipStyles.content}>{name}</Tooltip.Content>
        </Tooltip.Positioner>
      </Portal>
    </Tooltip.Root>
  );
}
