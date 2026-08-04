import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Work from './pages/Work.jsx';
import NotFound from './pages/NotFound.jsx';

// createBrowserRouter (the "data router"), not <BrowserRouter>, is required
// for the viewTransition prop on Link/NavLink to actually wrap navigation in
// the View Transitions API — the declarative router silently no-ops it.
export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'work', element: <Work /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
