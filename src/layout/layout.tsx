import 'devicon/devicon.min.css';
import { Outlet } from 'react-router-dom';
import '../assets/sass/resume.scss';
import Footer from './footer';
import Sidebar from './sidebar';

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
