import { Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import { cx } from '../../styled-system/css';
import Footer from './footer';
import * as layoutStyles from './layout.styles';
import Sidebar from './sidebar';

export default function Layout() {
  return (
    <div>
      <Sidebar />
      <div className={layoutStyles.containerFluidNoPadding}>
        <Outlet />
      </div>
      <Footer />
      <TanStackRouterDevtools />
    </div>
  );
}
