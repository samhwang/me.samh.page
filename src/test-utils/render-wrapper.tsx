import { Outlet, RouteComponent, RouterProvider, createMemoryHistory, createRootRoute, createRoute, createRouter } from '@tanstack/react-router';
import { ReactNode } from 'react';

type TestWrapperProps = {
  children: ReactNode;
};

function createTestRouter(component: RouteComponent) {
  const rootRoute = createRootRoute({
    component: () => <Outlet />,
  });

  const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component,
  });

  const routeTree = rootRoute.addChildren([indexRoute]);

  const router = createRouter({
    routeTree,
    history: createMemoryHistory(),
  });

  return router;
}

export default function RenderWrapper({ children }: TestWrapperProps) {
  const router = createTestRouter(() => children);

  return <RouterProvider router={router} />;
}
