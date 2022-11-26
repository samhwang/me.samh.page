import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { ReactNode } from 'react';

interface TestWrapperProps {
  children: ReactNode;
}

export default function RenderWrapper({ children }: TestWrapperProps) {
  const router = createMemoryRouter([
    {
      path: '/',
      element: children,
    },
  ]);

  return <RouterProvider router={router} />;
}
