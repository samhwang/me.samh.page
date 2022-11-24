import { cloneElement, useCallback, KeyboardEvent, MouseEvent, ReactElement } from 'react';

interface ScrollProps {
  type: string;
  element: string;
  offset?: number;
  timeout?: number;
  children: ReactElement;
  counter: number;
}

type OnClickEvent = KeyboardEvent | MouseEvent;

export default function Scroll({ type, element, offset, timeout, children, counter }: ScrollProps) {
  const scrollTo = useCallback((elem?: Element, offSet = 0, delay = 0) => {
    const elemPos = elem ? elem.getBoundingClientRect().top + window.scrollY : 0;
    const top = elemPos + offSet;

    if (!delay) {
      window.scroll({ top, left: 0, behavior: 'smooth' });
      return;
    }

    setTimeout(() => {
      window.scroll({ top, left: 0, behavior: 'smooth' });
    }, delay);
  }, []);

  const handleClick = useCallback(
    (event: OnClickEvent) => {
      event.preventDefault();
      let elem = null;
      let scroll = true;
      if (type && element) {
        switch (type) {
          case 'class':
            // eslint-disable-next-line prefer-destructuring
            elem = document.getElementsByClassName(element)[0];
            scroll = !!elem;
            break;
          case 'id':
            elem = document.getElementById(element);
            scroll = !!elem;
            break;
          default:
        }
      }

      return scroll && !!elem ? scrollTo(elem, offset, timeout) : console.error(`Element not found: ${element}`);
    },
    [element, offset, scrollTo, timeout, type]
  );

  return typeof children === 'object' ? (
    cloneElement(children, { onClick: handleClick })
  ) : (
    <span onClick={handleClick} onKeyDown={handleClick} role="tab" tabIndex={counter}>
      {children}
    </span>
  );
}

Scroll.defaultProps = {
  offset: 0,
  timeout: 0,
};
