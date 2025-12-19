import { css } from '../../styled-system/css';
import useIconClass from './use-icon-class';

const listItem = css({
  display: 'inline-block',
});

type LangIconProps = {
  name: string;
};

export default function LangIcon({ name }: LangIconProps) {
  const [currentIconClass, toggleColorIcon] = useIconClass(name);
  const onMouseHandler = () => toggleColorIcon();

  return (
    <li className={listItem}>
      <i role="img" data-testid={`language-icon-${name}`} className={currentIconClass} onMouseEnter={onMouseHandler} onMouseLeave={onMouseHandler} />
    </li>
  );
}
