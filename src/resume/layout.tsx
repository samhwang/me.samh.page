import { Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import Footer from './footer';
import Sidebar from './sidebar';

const RouterDevTools =
  import.meta.env.DEV || import.meta.env.TEST
    ? () => null // Render nothing in production & test
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
