import { createRootRoute } from '@tanstack/react-router';
import ErrorPage from '../404';
import Layout from '../resume/layout';

export const Route = createRootRoute({
  component: Layout,
  notFoundComponent: ErrorPage,
});
