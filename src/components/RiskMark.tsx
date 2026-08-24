import { RISK_LABEL } from "../data/catalog";
import type { Risk } from "../types";

export function RiskMark({ risk }: { risk: Risk }) {
  return <span className={`risk risk-${risk}`}>{RISK_LABEL[risk]}</span>;
}
