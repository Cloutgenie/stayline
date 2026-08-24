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
      <span className="mark-stroke" aria-hidden="true">
        <i />
        <b />
      </span>
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
