import { NavLink } from 'react-router-dom';
import { GithubIcon, LinkedinIcon, MailIcon } from './icons.jsx';
import { email, socialLinks } from '../data/contact.js';
import { navItems } from '../data/nav.js';
import './Sidebar.css';

const iconFor = { github: GithubIcon, linkedin: LinkedinIcon };

export default function Sidebar() {
  return (
    <>
      <a href="#main" className="skip-link">
        skip to content
      </a>
      <aside className="sidebar">
        <div className="sidebar__top">
          <NavLink to="/" end className="sidebar__wordmark-link">
            <span className="wordmark sidebar__wordmark">Shaheer Khan</span>
          </NavLink>
          <p className="sidebar__role">computer science, vanderbilt university</p>

          <nav className="sidebar__nav" aria-label="Primary">
            <ul>
              {navItems.map(({ path, label, end }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    end={end}
                    className={({ isActive }) =>
                      isActive ? 'sidebar__nav-link sidebar__nav-link--active' : 'sidebar__nav-link'
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="sidebar__bottom">
          <ul className="sidebar__contact">
            {socialLinks.map(({ id, label, href }) => {
              const Icon = iconFor[id];
              return (
                <li key={id}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="sidebar__contact-link"
                    aria-label={label}
                  >
                    <Icon size={16} />
                    <span aria-hidden="true">{label.toLowerCase()}</span>
                  </a>
                </li>
              );
            })}
            <li>
              <a href={`mailto:${email}`} className="sidebar__contact-link" aria-label="Email Shaheer">
                <MailIcon size={16} />
                <span aria-hidden="true">email</span>
              </a>
            </li>
          </ul>
          <p className="sidebar__copyright">
            &copy; {new Date().getFullYear()} shaheer khan &bull; all rights reserved
          </p>
        </div>
      </aside>
    </>
  );
}
