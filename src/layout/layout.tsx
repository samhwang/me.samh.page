import { Outlet } from 'react-router-dom';
import Footer from './footer';
import Sidebar from './sidebar';
import '../assets/sass/resume.scss';
import 'devicon/devicon.min.css';

export default function Layout() {
  return (
    <div className="main-body">
      <Sidebar />
      <div className="container-fluid p-0">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
