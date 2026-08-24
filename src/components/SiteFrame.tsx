import type { ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";
import { Mark } from "./Mark";

export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <div className="site">
      <header className="site-top">
        <Mark to="/" />
        <nav className="site-nav" aria-label="Stayline">
          <NavLink to="/retention">Retention</NavLink>
          <Link className="btn" to="/app">
            Open success desk
          </Link>
        </nav>
      </header>
      {children}
    </div>
  );
}
