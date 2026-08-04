import { useState } from 'react';
import WorkRow from '../components/WorkRow.jsx';
import { workItems } from '../data/work.js';
import './Work.css';

const filters = [
  { key: 'all', label: 'all' },
  { key: 'project', label: 'projects' },
  { key: 'experience', label: 'experience' },
];

export default function Work() {
  const [filter, setFilter] = useState('all');
  const visible = filter === 'all' ? workItems : workItems.filter((item) => item.category === filter);

  return (
    <div className="work">
      <h1 className="work__heading">work</h1>
      <p className="work__lede measure">
        Projects and experience, together. More going up as I go.
      </p>

      <div className="filters" role="group" aria-label="Filter by category">
        {filters.map(({ key, label }) => (
          <button
            key={key}
            type="button"
            className={filter === key ? 'filter filter--active' : 'filter'}
            aria-pressed={filter === key}
            onClick={() => setFilter(key)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="rows">
        {visible.map((item) => (
          <WorkRow key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
