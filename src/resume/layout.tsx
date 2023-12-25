import '@fontsource/mulish/index.css';
import '@fontsource/roboto/index.css';
import '@fontsource/saira-extra-condensed/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import clsx from 'clsx';
import 'devicon/devicon.min.css';
import { Outlet } from 'react-router-dom';
import Footer from './footer';
import Sidebar from './sidebar';
import typographyClasses from './typography.module.scss';

export default function Layout() {
  return (
    <div className={clsx(typographyClasses.mainBody)}>
      <Sidebar />
      <div className="container-fluid p-0">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
