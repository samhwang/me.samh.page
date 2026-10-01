import { css } from '../../styled-system/css';
import useIconClass from './use-icon-class';

const listItem = css({
  display: 'inline-block',
});

// Panda's reset layer sets color/font on button and outranks the devicon layer, so the devicon classes live on an inner span.
const iconButton = css({
  // Inline-block keeps the button on the li's inherited 72px line box, preserving the original row rhythm.
  display: 'inline-block',
  lineHeight: 1,
  // Block glyph removes the inline descender gap that would otherwise stretch the button past 48px.
  '& > span': { display: 'block' },
  cursor: 'auto',
  _focusVisible: { outline: '2px solid currentColor', outlineOffset: '2px' },
});

type LangIconProps = {
  name: string;
};

export default function LangIcon({ name }: LangIconProps) {
  const [currentIconClass, toggleColorIcon] = useIconClass(name);
  const onMouseHandler = () => toggleColorIcon();
  // Preventing default stops the native click so a keypress toggles once, matching the old span.
  const onKeyDownHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleColorIcon();
    }
  };

  return (
    <li className={listItem}>
      <button
        type="button"
        aria-label={name}
        data-testid={`language-icon-${name}`}
        className={iconButton}
        onMouseEnter={onMouseHandler}
        onMouseLeave={onMouseHandler}
        onKeyDown={onKeyDownHandler}
      >
        <span aria-hidden="true" data-testid={`language-icon-glyph-${name}`} className={currentIconClass} />
      </button>
    </li>
  );
}
