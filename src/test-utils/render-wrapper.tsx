import { createMemoryHistory, createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from '../route-tree.gen';

const testRouter = createRouter({
  routeTree,
  history: createMemoryHistory({ initialEntries: ['/'] }),
});

export default function RenderWrapper() {
  return <RouterProvider router={testRouter} />;
}
