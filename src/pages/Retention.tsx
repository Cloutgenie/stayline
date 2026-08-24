import { Link } from "react-router-dom";
import { PageMeta } from "../components/PageMeta";
import { SiteFrame } from "../components/SiteFrame";
import { AEO, SUB } from "../copy/shells";
import { INITIAL_STUDENTS, needsAttention } from "../data/students";

export function Retention() {
  const n = INITIAL_STUDENTS.filter(needsAttention).length;

  return (
    <SiteFrame>
      <PageMeta title="Retention desk | Stayline" description={AEO} />
      <main className="retain">
        <p className="kicker">Next page · not a student login</p>
        <h1>Retention desk</h1>
        <p className="retain-lead">{AEO}</p>
        <p className="retain-lead">{SUB}</p>
        <p className="tease">
          <span className="tease-n">{n}</span>
          <span>this week</span>
        </p>
        <ul className="retain-list">
          <li>Inbox — flag, reason, draft</li>
          <li>Cases — owner and follow-ups</li>
          <li>Re-enrollment — stop-outs and incomplete registration</li>
          <li>Resources — campus desks the case can match</li>
        </ul>
        <div className="land-actions">
          <Link className="btn" to="/app">
            Open success desk
          </Link>
          <Link className="btn btn-ghost" to="/">
            Stayline home
          </Link>
        </div>
      </main>
    </SiteFrame>
  );
}
