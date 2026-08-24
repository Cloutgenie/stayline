export type Trigger =
  | "attendance"
  | "balance"
  | "advisor"
  | "lms"
  | "registration";

export type Risk = "high" | "watch" | "kept";

export type Year = "First-year" | "Sophomore" | "Junior" | "Senior";

export type FollowUpKind =
  | "call"
  | "sms"
  | "meeting"
  | "tutoring"
  | "emergency_aid";

export type ReenrollKind = "stopped_out" | "registration_incomplete";

export type FollowUp = {
  id: string;
  kind: FollowUpKind;
  label: string;
  done: boolean;
};

export type Outreach = {
  emailSubject: string;
  emailBody: string;
  sms: string;
};

export type Reenroll = {
  kind: ReenrollKind;
  nextAction: string;
  term: string;
};

export type Student = {
  id: string;
  sample: true;
  name: string;
  year: Year;
  major: string;
  college: string;
  triggers: Trigger[];
  risk: Risk;
  ownerId: string | null;
  whyFlagged: string;
  outreach: Outreach;
  resourceIds: string[];
  followUps: FollowUp[];
  flaggedOn: string;
  reenroll?: Reenroll;
};

export type Staff = {
  id: string;
  name: string;
  role: string;
};

export type Resource = {
  id: string;
  name: string;
  office: string;
  hours: string;
  fits: string;
  triggerFit: Trigger[];
};
