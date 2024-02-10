import { RouteComponent, createRootRoute, createRoute, createRouter as TSRCreateRouter } from '@tanstack/react-router';
import ErrorPage from './404';
import Layout from './resume/layout';

export function createRouter(indexPageComponent: RouteComponent) {
  const rootRoute = createRootRoute({
    component: Layout,
  });

  const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: indexPageComponent,
    notFoundComponent: ErrorPage,
  });

  const routeTree = rootRoute.addChildren([indexRoute]);
  const router = TSRCreateRouter({ routeTree });
  return router;
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}
