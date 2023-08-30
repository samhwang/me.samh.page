import { ReactNode } from 'react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

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
