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
  const onKeyDownHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleColorIcon();
    }
  };

  return (
    <li className={listItem}>
      <span
        role="button"
        aria-label={name}
        data-testid={`language-icon-${name}`}
        tabIndex={0}
        className={currentIconClass}
        onMouseEnter={onMouseHandler}
        onMouseLeave={onMouseHandler}
        onKeyDown={onKeyDownHandler}
      />
    </li>
  );
}
