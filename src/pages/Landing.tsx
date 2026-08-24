import { Link } from "react-router-dom";
import { Mark } from "../components/Mark";
import { CAMPUS } from "../data/catalog";
import { INITIAL_STUDENTS, needsAttention } from "../data/students";
import { TriggerChips } from "../components/TriggerChip";
import { RiskMark } from "../components/RiskMark";

export function Landing() {
  const attention = INITIAL_STUDENTS.filter(needsAttention);
  const preview = attention.slice(0, 4);

  return (
    <div className="land">
      <header className="land-top">
        <Mark />
        <Link className="btn" to="/app">
          Open success desk
        </Link>
      </header>

      <section className="land-hero">
        <div>
          <p className="kicker">Advisor inbox · {CAMPUS.name}</p>
          <h1>See who needs attention this week.</h1>
          <p className="lede">
            Who is about to leave, and why. Stayline is the at-risk inbox for a
            campus student-success desk. It is not a learning system, not a
            course catalog, and not a student app. Staff open a file, see the
            trigger, and do the next human thing.
          </p>
          <div className="land-actions">
            <Link className="btn" to="/app">
              Open success desk
            </Link>
            <a className="linkish" href="#desk">
              How the inbox works
            </a>
          </div>
          <div className="promise">
            <div className="promise-n">{attention.length}</div>
            <p>
              {attention.length} students need attention this week on the
              Alabama A&M sample desk. The number is the promise — a short list,
              not a dashboard of everything.
            </p>
          </div>
        </div>

        <div className="inbox-preview" aria-hidden="true">
          <header>
            <span>At-risk inbox</span>
            <span>Sample</span>
          </header>
          {preview.map((s) => (
            <div className="preview-row" key={s.id}>
              <div>
                <strong>{s.name}</strong>
                <span>
                  {s.year} · {s.major}
                </span>
                <div style={{ marginTop: 8 }}>
                  <TriggerChips triggers={s.triggers} />
                </div>
              </div>
              <RiskMark risk={s.risk} />
            </div>
          ))}
        </div>
      </section>

      <section className="land-explain" id="desk">
        <h2>An inbox of people who may leave. Not an LMS.</h2>
        <div className="explain-grid">
          <article>
            <h3>The flag is visible</h3>
            <p>
              Attendance drop, unpaid balance, missed advisor, LMS inactivity,
              registration incomplete. Each row shows the chips that put the
              student here. No hidden score.
            </p>
          </article>
          <article>
            <h3>Why, then a draft</h3>
            <p>
              Open a file and read a plain-language why-flagged note, then an
              email and SMS you can send. Assign a case owner. Check off the
              call, the meeting, tutoring, or emergency aid.
            </p>
          </article>
          <article>
            <h3>Keep the ones you keep</h3>
            <p>
              When a student is retained, they leave the weekly count. Stay-green
              is reserved for that save — not for decoration, not for the brand
              wash.
            </p>
          </article>
        </div>
      </section>

      <section className="land-price">
        <p className="kicker">Pricing</p>
        <div className="price-row">
          <p>Secondary on purpose. The desk is the product.</p>
          <div>
            <strong>Campus · $12,000 / year</strong>
            One campus success desk. Inbox, cases, re-enrollment, resource match.
          </div>
          <div>
            <strong>System · $28,000 / year</strong>
            Shared desk across a small system. Same inbox, separate campus files.
          </div>
        </div>
      </section>

      <footer className="land-foot">
        <span>Stayline · federal-office software for HBCU student-success staff</span>
        <span>Buyer mock: VP Student Success, Alabama A&M University</span>
      </footer>
    </div>
  );
}
