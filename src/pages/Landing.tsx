import { Link } from "react-router-dom";
import { Mark } from "../components/Mark";
import { INITIAL_STUDENTS, needsAttention } from "../data/students";

export function Landing() {
  const n = INITIAL_STUDENTS.filter(needsAttention).length;

  return (
    <div className="land">
      <div className="land-shell">
        <Mark to="/" />
        <h1>Who is about to leave, and why.</h1>
        <p className="tease">
          <span className="tease-n">{n}</span>
          <span>this week</span>
        </p>
        <Link className="btn" to="/app">
          Open success desk
        </Link>
      </div>
    </div>
  );
}
