import { createRouter } from '@tanstack/react-router';
import { routeTree } from './route-tree.gen';

export const appRouter = createRouter({
  routeTree,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof appRouter;
  }
}
