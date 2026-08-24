import { CAMPUS } from "../data/catalog";
import { useStore } from "../state/store";

export function WeeklyBanner() {
  const { attentionCount } = useStore();
  const noun = attentionCount === 1 ? "student needs" : "students need";

  return (
    <div className="banner">
      <div className="banner-n">
        <b>{attentionCount}</b>
        <p>
          {noun} attention this week. Who is about to leave, and why — not a
          course list.
        </p>
      </div>
      <aside>
        {CAMPUS.short}
        <br />
        Week of {CAMPUS.weekOf}
      </aside>
    </div>
  );
}
