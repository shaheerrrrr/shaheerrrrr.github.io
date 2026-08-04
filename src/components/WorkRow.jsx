import './WorkRow.css';

export default function WorkRow({ item }) {
  const { title, description, href, year } = item;

  return (
    <article className="row">
      <div className="row__head">
        {href ? (
          <a href={href} target="_blank" rel="noreferrer" className="row__title">
            {title}
          </a>
        ) : (
          <span className="row__title row__title--static">{title}</span>
        )}
        {year && <span className="row__year">{year}</span>}
      </div>
      <p className="row__description measure">{description}</p>
    </article>
  );
}
