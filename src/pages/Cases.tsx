import { staffById } from "../data/catalog";
import { useStore } from "../state/store";
import { RiskMark } from "../components/RiskMark";

export function Cases() {
  const { students, selectedId, select, openFollowUpCount, assignedCount } =
    useStore();
  const cases = students.filter((s) => s.ownerId);
  const kept = students.filter((s) => s.risk === "kept").length;

  return (
    <div className="page">
      <div className="page-head">
        <div>
          <h1>Cases</h1>
          <p>
            Files with an owner. Mark follow-ups done in the student drawer —
            open-task counts update here and on the weekly banner.
          </p>
        </div>
      </div>

      <div className="stat-row stay">
        <div>
          <b>{assignedCount}</b>
          <span>Open assigned files</span>
        </div>
        <div>
          <b>{openFollowUpCount}</b>
          <span>Open follow-ups on the desk</span>
        </div>
        <div>
          <b className="kept">{kept}</b>
          <span>Kept this cycle</span>
        </div>
      </div>

      <div className="table-wrap">
        {cases.length === 0 ? (
          <p className="empty">No cases have an owner yet. Assign one from the inbox.</p>
        ) : (
          <table className="desk-table">
            <thead>
              <tr>
                <th>Student</th>
                <th>Owner</th>
                <th>Follow-ups</th>
                <th>Risk</th>
              </tr>
            </thead>
            <tbody>
              {cases.map((s) => {
                const owner = staffById(s.ownerId);
                const done = s.followUps.filter((f) => f.done).length;
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
                        <small>{s.id}</small>
                      </div>
                    </td>
                    <td className="meta">{owner?.name}</td>
                    <td className="case-progress">
                      {done}/{s.followUps.length} done
                    </td>
                    <td>
                      <RiskMark risk={s.risk} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
