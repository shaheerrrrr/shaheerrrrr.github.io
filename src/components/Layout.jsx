import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';
import ScrollToTop from './ScrollToTop.jsx';
import './Layout.css';

export default function Layout() {
  return (
    <div className="shell">
      <ScrollToTop />
      <Sidebar />
      <main id="main" className="shell__content" tabIndex={-1}>
        <Outlet />
      </main>
    </div>
  );
}
