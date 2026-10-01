import { vi } from 'vitest';

// jsdom lacks IntersectionObserver and ResizeObserver; Ark UI components need them.
vi.stubGlobal(
  'IntersectionObserver',
  class IntersectionObserver {
    // Tests drive visibility by invoking the callbacks captured here.
    static instances: IntersectionObserver[] = [];
    constructor(public cb: IntersectionObserverCallback) {
      IntersectionObserver.instances.push(this);
    }
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords(): IntersectionObserverEntry[] {
      return [];
    }
  }
);

vi.stubGlobal(
  'ResizeObserver',
  class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
);

Element.prototype.scrollIntoView = () => {};

// jsdom lacks matchMedia; useMediaQuery needs it. Tests override per case by reassigning window.matchMedia.
window.matchMedia = (query: string): MediaQueryList =>
  ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false,
  }) as MediaQueryList;
