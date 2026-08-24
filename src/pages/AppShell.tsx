import { NavLink, Outlet } from "react-router-dom";
import { Mark } from "../components/Mark";
import { PageMeta } from "../components/PageMeta";
import { WeeklyBanner } from "../components/WeeklyBanner";
import { StudentDrawer } from "../components/StudentDrawer";
import { CAMPUS, SESSION_USER } from "../data/catalog";
import { useStore } from "../state/store";

export function AppShell() {
  const { attentionCount, assignedCount, selectedId, students } = useStore();
  const reenrollCount = students.filter((s) => s.reenroll && s.risk !== "kept").length;

  return (
    <div className="shell">
      <PageMeta
        title={`${CAMPUS.short} success desk | Stayline`}
        description="Who is about to leave, and why."
      />
      <aside className="rail">
        <Mark to="/app" size="sm" />
        <div className="rail-campus">
          <strong>{CAMPUS.name}</strong>
          <span>Success desk · {CAMPUS.term}</span>
        </div>
        <nav className="nav" aria-label="Desk">
          <NavLink to="/app" end>
            Inbox
            <span className="nav-count">{attentionCount}</span>
          </NavLink>
          <NavLink to="/app/cases">
            Cases
            <span className="nav-count">{assignedCount}</span>
          </NavLink>
          <NavLink to="/app/reenrollment">
            Re-enrollment
            <span className="nav-count">{reenrollCount}</span>
          </NavLink>
          <NavLink to="/app/resources">Resources</NavLink>
          <NavLink to="/app/settings">Settings</NavLink>
        </nav>
        <div className="rail-user">
          <strong>{SESSION_USER.name}</strong>
          <span>{SESSION_USER.role}</span>
        </div>
      </aside>

      <div className={selectedId ? "desk with-drawer" : "desk"}>
        <div>
          <WeeklyBanner />
          <Outlet />
        </div>
        {selectedId ? <StudentDrawer /> : null}
      </div>
    </div>
  );
}
