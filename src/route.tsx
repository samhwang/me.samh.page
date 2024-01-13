import { NotFoundRoute, RootRoute, Route, RouteComponent, Router } from '@tanstack/react-router';
import ErrorPage from './404';
import Layout from './resume/layout';

export function createRouter(indexPageComponent: RouteComponent) {
  const rootRoute = new RootRoute({
    component: Layout,
  });

  const indexRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/',
    component: indexPageComponent,
  });

  const notFoundRoute = new NotFoundRoute({
    getParentRoute: () => rootRoute,
    component: ErrorPage,
  });

  const routeTree = rootRoute.addChildren([indexRoute]);
  const router = new Router({ routeTree, notFoundRoute });
  return router;
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}
