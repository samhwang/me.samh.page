import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './404';
import Layout from './resume/layout';
import ResumePage from './resume/page';

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
