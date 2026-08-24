import { STAFF, staffById } from "../data/catalog";
import { matchesFilters, useStore } from "../state/store";
import { TriggerChips } from "../components/TriggerChip";
import { RiskMark } from "../components/RiskMark";
import type { Risk, Trigger } from "../types";

export function Inbox() {
  const { students, filters, setFilters, selectedId, select } = useStore();
  const rows = students.filter((s) => matchesFilters(s, filters));

  return (
    <div className="page">
      <div className="page-head">
        <div>
          <h1>At-risk inbox</h1>
          <p>
            Students flagged this week by a visible trigger. Click a row for the
            why-flagged note, outreach drafts, owner, follow-ups, and a resource
            match. This is not a gradebook.
          </p>
        </div>
      </div>

      <div className="filters">
        <div className="filter">
          <label htmlFor="f-trigger">Trigger</label>
          <select
            id="f-trigger"
            value={filters.trigger}
            onChange={(e) =>
              setFilters({ trigger: e.target.value as Trigger | "all" })
            }
          >
            <option value="all">All triggers</option>
            <option value="attendance">Attendance drop</option>
            <option value="balance">Unpaid balance</option>
            <option value="advisor">Missed advisor</option>
            <option value="lms">LMS inactivity</option>
            <option value="registration">Registration incomplete</option>
          </select>
        </div>
        <div className="filter">
          <label htmlFor="f-owner">Owner</label>
          <select
            id="f-owner"
            value={filters.owner}
            onChange={(e) => setFilters({ owner: e.target.value })}
          >
            <option value="all">All owners</option>
            <option value="unassigned">Unassigned</option>
            {STAFF.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>
        </div>
        <div className="filter">
          <label htmlFor="f-risk">Risk</label>
          <select
            id="f-risk"
            value={filters.risk}
            onChange={(e) => setFilters({ risk: e.target.value as Risk | "all" })}
          >
            <option value="all">All</option>
            <option value="high">High</option>
            <option value="watch">Watch</option>
            <option value="kept">Kept</option>
          </select>
        </div>
      </div>

      <div className="table-wrap">
        {rows.length === 0 ? (
          <p className="empty">No students match these filters.</p>
        ) : (
          <table className="desk-table">
            <thead>
              <tr>
                <th>Student</th>
                <th>Year / major</th>
                <th>Triggers</th>
                <th>Risk</th>
                <th>Owner</th>
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
                        <small>{s.id}</small>
                      </div>
                    </td>
                    <td className="meta">
                      {s.year}
                      <br />
                      {s.major}
                    </td>
                    <td>
                      <TriggerChips triggers={s.triggers} />
                    </td>
                    <td>
                      <RiskMark risk={s.risk} />
                    </td>
                    <td className="meta">{owner ? owner.name : "Unassigned"}</td>
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
