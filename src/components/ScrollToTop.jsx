import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Route changes in a client-rendered app don't reset scroll position the
 * way a full page load does. Restore it, respecting reduced-motion.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'instant' : 'smooth' });
  }, [pathname]);

  return null;
}
