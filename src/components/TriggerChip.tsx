import { TRIGGER_LABEL } from "../data/catalog";
import type { Trigger } from "../types";

export function TriggerChip({ trigger }: { trigger: Trigger }) {
  return <span className="chip">{TRIGGER_LABEL[trigger]}</span>;
}

export function TriggerChips({ triggers }: { triggers: Trigger[] }) {
  return (
    <div className="chips">
      {triggers.map((t) => (
        <TriggerChip key={t} trigger={t} />
      ))}
    </div>
  );
}
