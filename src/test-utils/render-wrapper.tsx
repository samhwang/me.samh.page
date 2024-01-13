import { Outlet, RootRoute, Route, RouteComponent, Router, RouterProvider, createMemoryHistory } from '@tanstack/react-router';
import { ReactNode } from 'react';

type TestWrapperProps = {
  children: ReactNode;
};

function createTestRouter(component: RouteComponent) {
  const rootRoute = new RootRoute({
    component: () => <Outlet />,
  });

  const indexRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/',
    component,
  });

  const routeTree = rootRoute.addChildren([indexRoute]);

  const router = new Router({
    routeTree,
    history: createMemoryHistory(),
  });

  return router;
}

export default function RenderWrapper({ children }: TestWrapperProps) {
  const router = createTestRouter(() => children);

  return <RouterProvider router={router} />;
}
