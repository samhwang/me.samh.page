import { useMemo } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ResumePage from './Resume/page';
import ErrorPage from './404';

function App() {
  const basename = useMemo(() => {
    const isProduction = (env: string) => env === 'production';
    return isProduction(import.meta.env.MODE) ? '/rebuild/' : '/';
  }, []);

  const router = useMemo(
    () =>
      createBrowserRouter(
        [
          {
            path: '/',
            element: <ResumePage />,
            errorElement: <ErrorPage />,
          },
        ],
        {
          basename,
        }
      ),
    [basename]
  );

  return <RouterProvider router={router} />;
}

export default App;
