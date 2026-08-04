import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <h1 style={{ fontSize: 'var(--text-heading)', marginBottom: 'var(--space-md)' }}>
        page not found
      </h1>
      <p className="measure" style={{ marginBottom: 'var(--space-lg)' }}>
        Whatever you were looking for isn&rsquo;t here.
      </p>
      <Link to="/" viewTransition className="link">
        back to the homepage
      </Link>
    </div>
  );
}
