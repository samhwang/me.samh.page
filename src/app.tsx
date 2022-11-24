import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ResumePage from './resume/page';
import ErrorPage from './404';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ResumePage />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
