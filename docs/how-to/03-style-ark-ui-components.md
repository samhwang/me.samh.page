# Style Ark UI Components with Panda Slot Recipes

Style an [Ark UI](https://ark-ui.com) component with a [PandaCSS](https://panda-css.com) [slot recipe](https://panda-css.com/docs/concepts/slot-recipes). Why: [Use Ark UI Directly](../explanation/02-use-ark-ui-directly.md).

## Steps

1. Create `component-name.recipe.ts` next to the component. Take slots from the Ark anatomy:

   ```typescript
   import { tooltipAnatomy } from '@ark-ui/react/anatomy';
   import { defineSlotRecipe } from '@pandacss/dev';

   export const tooltip = defineSlotRecipe({
     className: 'tooltip',
     slots: tooltipAnatomy.keys(),
     base: {
       content: {
         _open: { animation: 'tooltipFadeIn 150ms ease-out' },
         _closed: { animation: 'tooltipFadeOut 150ms ease-in' },
       },
     },
   });
   ```

2. Register it under `theme.extend.slotRecipes` in `panda.config.ts`. Define its keyframes under `theme.extend.keyframes`.
3. Run `pnpm panda:codegen`.
4. Call the recipe once at module scope and apply each slot class to its Ark part:

   ```tsx
   import { Tooltip } from '@ark-ui/react/tooltip';
   import { tooltip } from '../../styled-system/recipes';

   const tooltipStyles = tooltip();

   <Tooltip.Trigger asChild>
     <a href={url}>...</a>
   </Tooltip.Trigger>;
   <Tooltip.Content className={tooltipStyles.content}>GitHub</Tooltip.Content>;
   ```

## Gotchas

- Do not wrap a slot recipe in `styled()`; apply `classes.part` directly.
- Use keyframes, not transitions, for Presence-driven parts; Ark waits for `animationend`.
- `_open` and `_closed` map to `data-state`.
- `asChild` merges Ark props and handlers onto your own element.
- Import from subpaths (`@ark-ui/react/tooltip`); the root entry bundles every component.

## Tests

`src/test-utils/setups/ark.ts` stubs `IntersectionObserver`, `ResizeObserver`, `scrollIntoView` and `matchMedia`. The global timers setup fakes only `Date`, so `userEvent` and Ark's animation timers run for real.
