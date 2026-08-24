import { useMemo, useState } from "react";
import {
  FOLLOW_UP_LABEL,
  STAFF,
  resourceById,
  staffById,
} from "../data/catalog";
import { useStore } from "../state/store";
import { TriggerChips } from "./TriggerChip";
import { RiskMark } from "./RiskMark";

export function StudentDrawer() {
  const { students, selectedId, select, assignOwner, toggleFollowUp, markKept, reopen } =
    useStore();
  const student = students.find((s) => s.id === selectedId) ?? null;
  const [channel, setChannel] = useState<"email" | "sms">("email");
  const [copied, setCopied] = useState(false);

  const owner = student ? staffById(student.ownerId) : null;
  const openTasks = student?.followUps.filter((f) => !f.done).length ?? 0;

  const copyText = useMemo(() => {
    if (!student) return "";
    if (channel === "sms") return student.outreach.sms;
    return `${student.outreach.emailSubject}\n\n${student.outreach.emailBody}`;
  }, [student, channel]);

  if (!student) return null;

  const resources = student.resourceIds
    .map((id) => resourceById(id))
    .filter((r): r is NonNullable<typeof r> => Boolean(r));

  function onCopy() {
    void navigator.clipboard.writeText(copyText).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    });
  }

  return (
    <aside className="drawer" aria-label="Student file">
      <header className="drawer-head">
        <div>
          <p className="kicker">
            {student.id}
            <span className="sample-flag">Sample</span>
          </p>
          <h2>{student.name}</h2>
          <p className="meta">
            {student.year} · {student.major}
          </p>
        </div>
        <button type="button" className="btn btn-ghost btn-tiny" onClick={() => select(null)}>
          Close
        </button>
      </header>

      <div className="drawer-body">
        <div className="block">
          <h3>This week</h3>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <RiskMark risk={student.risk} />
            <span className="meta">
              Flagged {student.flaggedOn} · {openTasks} open follow-up
              {openTasks === 1 ? "" : "s"}
            </span>
          </div>
          <div style={{ marginTop: 10 }}>
            <TriggerChips triggers={student.triggers} />
          </div>
        </div>

        <div className="block">
          <h3>Why flagged</h3>
          <p className="why">{student.whyFlagged}</p>
        </div>

        <div className="block">
          <h3>Case owner</h3>
          <div className="owner-row">
            <select
              value={student.ownerId ?? ""}
              onChange={(e) =>
                assignOwner(student.id, e.target.value === "" ? null : e.target.value)
              }
              aria-label="Assign case owner"
            >
              <option value="">Unassigned</option>
              {STAFF.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name} — {s.role}
                </option>
              ))}
            </select>
          </div>
          <p className="meta" style={{ marginTop: 8 }}>
            {owner
              ? `${owner.name} holds this file.`
              : "No owner. The weekly count still includes this student."}
          </p>
        </div>

        <div className="block">
          <h3>Follow-ups</h3>
          <ul className="checks">
            {student.followUps.map((item) => (
              <li key={item.id}>
                <input
                  type="checkbox"
                  checked={item.done}
                  onChange={() => toggleFollowUp(student.id, item.id)}
                  aria-label={item.label}
                />
                <div>
                  <div className={item.done ? "done-label" : undefined}>{item.label}</div>
                  <div className="kind-tag">{FOLLOW_UP_LABEL[item.kind]}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="block">
          <h3>Outreach draft</h3>
          <div className="draft-tabs">
            <button
              type="button"
              className={channel === "email" ? "btn btn-tiny" : "btn btn-ghost btn-tiny"}
              onClick={() => setChannel("email")}
            >
              Email
            </button>
            <button
              type="button"
              className={channel === "sms" ? "btn btn-tiny" : "btn btn-ghost btn-tiny"}
              onClick={() => setChannel("sms")}
            >
              SMS
            </button>
            <button type="button" className="btn btn-ghost btn-tiny" onClick={onCopy}>
              {copied ? "Copied" : "Copy draft"}
            </button>
          </div>
          {channel === "email" ? (
            <>
              <p className="meta" style={{ margin: "10px 0 6px" }}>
                Subject: {student.outreach.emailSubject}
              </p>
              <textarea className="draft" readOnly value={student.outreach.emailBody} />
            </>
          ) : (
            <textarea
              className="draft sms"
              readOnly
              value={student.outreach.sms}
              style={{ marginTop: 10 }}
            />
          )}
        </div>

        <div className="block">
          <h3>Resource match</h3>
          <div className="resource-list">
            {resources.map((r) => (
              <div key={r.id} className="resource-card">
                <strong>{r.name}</strong>
                <span>
                  {r.office} · {r.hours}
                </span>
                <p>{r.fits}</p>
              </div>
            ))}
          </div>
        </div>

        {student.reenroll ? (
          <div className="block">
            <h3>Re-enrollment</h3>
            <p>
              {student.reenroll.kind === "stopped_out"
                ? "Stopped out"
                : "Registration incomplete"}{" "}
              · {student.reenroll.term}
            </p>
            <p className="meta" style={{ marginTop: 6 }}>
              Next action: {student.reenroll.nextAction}
            </p>
          </div>
        ) : null}

        <div className="block">
          <h3>Keep or return</h3>
          {student.risk === "kept" ? (
            <>
              <p className="kept-note">Kept. This student is off the weekly attention count.</p>
              <button
                type="button"
                className="btn btn-ghost btn-tiny"
                style={{ marginTop: 10 }}
                onClick={() => reopen(student.id)}
              >
                Return to inbox
              </button>
            </>
          ) : (
            <button type="button" className="btn btn-clay btn-tiny" onClick={() => markKept(student.id)}>
              Mark kept
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}
