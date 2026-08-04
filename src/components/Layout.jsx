import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';
import './Layout.css';

export default function Layout() {
  return (
    <div className="shell">
      <Sidebar />
      <main id="main" className="shell__content" tabIndex={-1}>
        <Outlet />
      </main>
    </div>
  );
}
