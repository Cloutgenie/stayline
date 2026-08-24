import { staffById } from "../data/catalog";
import { useStore } from "../state/store";
import { RiskMark } from "../components/RiskMark";

export function Reenrollment() {
  const { students, selectedId, select } = useStore();
  const rows = students.filter((s) => s.reenroll);
  const stopped = rows.filter((s) => s.reenroll?.kind === "stopped_out").length;
  const incomplete = rows.filter(
    (s) => s.reenroll?.kind === "registration_incomplete",
  ).length;

  return (
    <div className="page">
      <div className="page-head">
        <div>
          <h1>Re-enrollment</h1>
          <p>
            Stopped-out students and incomplete registrations. Each row has one
            next action — not a marketing campaign.
          </p>
        </div>
      </div>

      <div className="stat-row">
        <div>
          <b>{rows.length}</b>
          <span>On the return list</span>
        </div>
        <div>
          <b>{stopped}</b>
          <span>Stopped out</span>
        </div>
        <div>
          <b>{incomplete}</b>
          <span>Registration incomplete</span>
        </div>
      </div>

      <div className="table-wrap">
        <table className="desk-table">
          <thead>
            <tr>
              <th>Student</th>
              <th>Kind</th>
              <th>Next action</th>
              <th>Owner</th>
              <th>Risk</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((s) => {
              const owner = staffById(s.ownerId);
              return (
                <tr
                  key={s.id}
                  className={`clickable${selectedId === s.id ? " selected" : ""}`}
                  onClick={() => select(s.id === selectedId ? null : s.id)}
                >
                  <td>
                    <div className="who">
                      <strong>
                        {s.name}
                        <span className="sample-flag">Sample</span>
                      </strong>
                      <small>
                        {s.id} · {s.year}, {s.major}
                      </small>
                    </div>
                  </td>
                  <td className="meta">
                    {s.reenroll?.kind === "stopped_out"
                      ? "Stopped out"
                      : "Registration incomplete"}
                    <br />
                    {s.reenroll?.term}
                  </td>
                  <td className="next-action">{s.reenroll?.nextAction}</td>
                  <td className="meta">{owner ? owner.name : "Unassigned"}</td>
                  <td>
                    <RiskMark risk={s.risk} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
