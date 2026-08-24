import { Link } from "react-router-dom";

type Props = {
  to?: string;
  size?: "md" | "sm";
};

export function Mark({ to = "/", size = "md" }: Props) {
  const cls = size === "sm" ? "mark mark-sm" : "mark";
  const inner = (
    <>
      <span className="mark-word">Stayline</span>
      <svg
        className="mark-stroke"
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <rect x="0" y="4" width="92" height="2" fill="#1A1714" />
        <rect x="92" y="1" width="2.4" height="8" fill="#B85C38" />
      </svg>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={cls} aria-label="Stayline">
        {inner}
      </Link>
    );
  }

  return <span className={cls}>{inner}</span>;
}
