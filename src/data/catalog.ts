import type { FollowUpKind, Resource, Risk, Staff, Trigger } from "../types";

export const CAMPUS = {
  name: "Alabama A&M University",
  short: "Alabama A&M",
  city: "Normal, Alabama",
  term: "Fall 2026",
  weekOf: "August 24, 2026",
};

export const SESSION_USER: Staff = {
  id: "crhodes",
  name: "Dr. Camille Rhodes",
  role: "VP, Student Success",
};

export const STAFF: Staff[] = [
  SESSION_USER,
  { id: "mbell", name: "Marcus Bell", role: "First-year success" },
  { id: "icole", name: "Imani Cole", role: "Financial wellness" },
  { id: "jhale", name: "Jordan Hale", role: "Academic recovery" },
];

export const RESOURCES: Resource[] = [
  {
    id: "res-tutor",
    name: "Academic Support Lab",
    office: "Library, second floor",
    hours: "Mon–Thu 9–7 · Fri 9–3",
    fits: "Missed class streaks and quiet LMS weeks. Same-week tutoring seats, no referral form.",
    triggerFit: ["attendance", "lms"],
  },
  {
    id: "res-aid",
    name: "Same-week Emergency Grant",
    office: "Student Success, Patton 112",
    hours: "Review desk weekdays 10–4",
    fits: "Balances and holds that will stop a student before the term can be saved.",
    triggerFit: ["balance"],
  },
  {
    id: "res-counsel",
    name: "Counseling & Wellness",
    office: "Health & Wellness Center",
    hours: "By appointment · walk-in Tue 1–3",
    fits: "When the pattern looks like overwhelm, not just a missed assignment.",
    triggerFit: ["attendance", "advisor", "lms"],
  },
  {
    id: "res-advise",
    name: "University Advising",
    office: "Academic Affairs suite",
    hours: "Mon–Fri 8:30–4:30",
    fits: "Missed advisor holds, major questions, and first-year course load resets.",
    triggerFit: ["advisor", "registration"],
  },
  {
    id: "res-reg",
    name: "Office of the Registrar",
    office: "Patton Building, first floor",
    hours: "Mon–Fri 8–5",
    fits: "Incomplete registration, stop-out returns, and term activation.",
    triggerFit: ["registration"],
  },
  {
    id: "res-finaid",
    name: "Student Financial Aid",
    office: "Student Center 204",
    hours: "Mon–Fri 8–5 · phones to 4",
    fits: "Unpaid balances, verification, and aid that never posted.",
    triggerFit: ["balance", "registration"],
  },
  {
    id: "res-housing",
    name: "Residential Life",
    office: "Living–Learning desk",
    hours: "Daily 8–8",
    fits: "Housing holds, roommate exits, and students who stopped sleeping on campus.",
    triggerFit: ["attendance", "balance"],
  },
  {
    id: "res-career",
    name: "Career Development",
    office: "Student Center 310",
    hours: "Mon–Fri 9–5",
    fits: "Seniors stalling on a last term, or juniors who cannot see a reason to stay.",
    triggerFit: ["advisor", "registration"],
  },
];

export const TRIGGER_LABEL: Record<Trigger, string> = {
  attendance: "Attendance drop",
  balance: "Unpaid balance",
  advisor: "Missed advisor",
  lms: "LMS inactivity",
  registration: "Registration incomplete",
};

export const RISK_LABEL: Record<Risk, string> = {
  high: "High",
  watch: "Watch",
  kept: "Kept",
};

export const FOLLOW_UP_LABEL: Record<FollowUpKind, string> = {
  call: "Call",
  sms: "SMS",
  meeting: "Meeting",
  tutoring: "Tutoring",
  emergency_aid: "Emergency aid",
};

export function staffById(id: string | null): Staff | null {
  if (!id) return null;
  return STAFF.find((s) => s.id === id) ?? null;
}

export function resourceById(id: string): Resource | undefined {
  return RESOURCES.find((r) => r.id === id);
}
