import { Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { css } from '../../styled-system/css';
import Footer from './footer';
import Sidebar from './sidebar';

const contentContainer = css({
  width: '100%',
  padding: 0,
});

export default function Layout() {
  return (
    <div>
      <Sidebar />
      <div className={contentContainer}>
        <Outlet />
      </div>
      <Footer />
      <TanStackRouterDevtools />
    </div>
  );
}
