import '@fontsource/mulish/index.css';
import '@fontsource/roboto/index.css';
import '@fontsource/saira-extra-condensed/index.css';
import { Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'devicon/devicon.min.css';
import Footer from './footer';
import Sidebar from './sidebar';

const RouterDevTools = import.meta.env.PROD
  ? () => null // Render nothing in production
  : TanStackRouterDevtools;

export default function Layout() {
  return (
    <div>
      <Sidebar />
      <div className="container-fluid p-0">
        <Outlet />
      </div>
      <Footer />
      <RouterDevTools />
    </div>
  );
}
