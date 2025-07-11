import { Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { cx } from '../../styled-system/css';
import Footer from './footer';
import * as layoutStyles from './layout.styles';
import Sidebar from './sidebar';

const RouterDevTools =
  import.meta.env.PROD || import.meta.env.TEST
    ? () => null // Render nothing in production & test
    : TanStackRouterDevtools;

export default function Layout() {
  return (
    <div>
      <Sidebar />
      <div className={layoutStyles.containerFluidNoPadding}>
        <Outlet />
      </div>
      <Footer />
      <RouterDevTools />
    </div>
  );
}
