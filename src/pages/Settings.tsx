import { CAMPUS, SESSION_USER, STAFF } from "../data/catalog";

export function Settings() {
  return (
    <div className="page settings">
      <div className="page-head">
        <div>
          <h1>Settings</h1>
          <p>
            Prototype desk. No sign-in. All names, IDs, and balances are labeled
            sample and invented for Alabama A&M flavor — not real students.
          </p>
        </div>
      </div>

      <dl>
        <dt>Signed in as</dt>
        <dd>
          {SESSION_USER.name}, {SESSION_USER.role}
        </dd>
        <dt>Campus</dt>
        <dd>
          {CAMPUS.name} · {CAMPUS.city}
        </dd>
        <dt>Term / week</dt>
        <dd>
          {CAMPUS.term} · week of {CAMPUS.weekOf}
        </dd>
        <dt>Case owners on this desk</dt>
        <dd>
          {STAFF.map((s) => `${s.name} (${s.role})`).join(" · ")}
        </dd>
        <dt>Triggers in use</dt>
        <dd>
          Attendance drop · Unpaid balance · Missed advisor · LMS inactivity ·
          Registration incomplete
        </dd>
        <dt>Data</dt>
        <dd>
          Client-side only. Refresh the browser to reset owners, follow-ups, and
          kept marks. Student IDs use the SL-AAMU-#### sample pattern.
        </dd>
      </dl>
    </div>
  );
}
