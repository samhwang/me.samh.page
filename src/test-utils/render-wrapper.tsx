import { RouterProvider } from '@tanstack/react-router';
import { appRouter } from '../router';

export default function RenderWrapper() {
  return <RouterProvider router={appRouter} />;
}
