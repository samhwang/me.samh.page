import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ResumePage from './resume/page';
import ErrorPage from './404';
import Layout from './layout/layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <ResumePage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
