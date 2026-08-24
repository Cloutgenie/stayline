import { RESOURCES, TRIGGER_LABEL } from "../data/catalog";

export function Resources() {
  return (
    <div className="page">
      <div className="page-head">
        <div>
          <h1>Campus resources</h1>
          <p>
            Eight desks the inbox can match. Stayline does not replace them. It
            points a case owner at the one that can keep a specific student.
          </p>
        </div>
      </div>

      <div className="resource-grid">
        {RESOURCES.map((r) => (
          <article key={r.id}>
            <p className="kicker">{r.office}</p>
            <h2>{r.name}</h2>
            <p className="meta" style={{ margin: "8px 0" }}>
              {r.hours}
            </p>
            <p>{r.fits}</p>
            <div className="chips" style={{ marginTop: 10 }}>
              {r.triggerFit.map((t) => (
                <span className="chip" key={t}>
                  {TRIGGER_LABEL[t]}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
