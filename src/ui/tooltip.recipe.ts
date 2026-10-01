import { tooltipAnatomy } from '@ark-ui/react/anatomy';
import { defineSlotRecipe } from '@pandacss/dev';

export const tooltip = defineSlotRecipe({
  className: 'tooltip',
  slots: tooltipAnatomy.keys(),
  base: {
    content: {
      // Sits above the fixed sidebar (1030) so it is never clipped by it on mobile.
      zIndex: 1040,
      bgColor: 'gray.900',
      color: 'white',
      borderRadius: 'sm',
      paddingX: '0.75rem',
      paddingY: '0.25rem',
      fontSize: '0.875rem',
      // Animation rather than transition: Ark's Presence waits for animationend before unmounting.
      _open: { animation: 'tooltipFadeIn 150ms ease-out' },
      _closed: { animation: 'tooltipFadeOut 150ms ease-in' },
    },
  },
});
