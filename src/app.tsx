import { RouterProvider } from '@tanstack/react-router';
import ResumePage from './resume/page';
import { createRouter } from './route';

const appRouter = createRouter(ResumePage);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
