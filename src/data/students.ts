import type { Student } from "../types";

export const INITIAL_STUDENTS: Student[] = [
  {
    id: "SL-AAMU-1041",
    sample: true,
    name: "Keisha Langford",
    year: "Junior",
    major: "Social Work",
    college: "Education, Humanities & Behavioral Sciences",
    triggers: ["attendance", "balance"],
    risk: "high",
    ownerId: "icole",
    flaggedOn: "Aug 20",
    whyFlagged:
      "Keisha has missed four of the last six Social Work Practice meetings. Her student account shows a $1,280 hold. She opened the March payment-plan note once and did not return. This is the two-to-three week window we usually see before a mid-semester withdrawal — not a course problem, a stay-or-leave problem.",
    outreach: {
      emailSubject: "A hold and a few missed rooms — we can clear both",
      emailBody:
        "Keisha — this is Imani in Student Success. You have missed a handful of Practice sessions, and there is a balance hold on your account. Neither one has to end the term. I can sit with you tomorrow between 10 and 2, walk the payment-plan options, and get you back in the room. Reply with a time that works.\n\nImani Cole\nFinancial wellness · Alabama A&M",
      sms: "AAMU Student Success / Imani: Keisha, a few missed classes and a balance hold are up. Neither has to stop the term. Reply YES for a 15-min call tomorrow.",
    },
    resourceIds: ["res-aid", "res-finaid", "res-tutor"],
    followUps: [
      { id: "f1", kind: "call", label: "Call about the hold", done: false },
      { id: "f2", kind: "sms", label: "Send payment-plan hours", done: true },
      { id: "f3", kind: "meeting", label: "Sit with Financial Aid", done: false },
      { id: "f4", kind: "emergency_aid", label: "File same-week grant", done: false },
    ],
  },
  {
    id: "SL-AAMU-1048",
    sample: true,
    name: "Devon Price",
    year: "First-year",
    major: "Mechanical Engineering",
    college: "Engineering, Technology & Physical Sciences",
    triggers: ["lms", "advisor"],
    risk: "watch",
    ownerId: null,
    flaggedOn: "Aug 21",
    whyFlagged:
      "Devon has not opened a Canvas course in 11 days and skipped his assigned first-year advisor slot twice. Calc I and Graphics still show him enrolled. First-years who go dark in the LMS this early usually leave at the first exam, not at finals.",
    outreach: {
      emailSubject: "Still enrolled. Need you in the room once this week.",
      emailBody:
        "Devon — Camille Rhodes, Student Success. You are still on the Calc I and Graphics rosters, but the courses have not seen you in 11 days and advising has two open slots with your name on them. That is enough for us to reach out. Come by Patton 112 Thursday after 1, or answer this and we will find you a 20-minute advisor block that is not a lecture. We are not dropping you. We need to know if you are staying.\n\nDr. Camille Rhodes\nVP, Student Success · Alabama A&M",
      sms: "AAMU Student Success: Devon, Canvas has been quiet 11 days and advising is still open. Reply HERE and we will place a 20-min advisor block. You are not dropped.",
    },
    resourceIds: ["res-advise", "res-tutor", "res-counsel"],
    followUps: [
      { id: "f1", kind: "sms", label: "Text the open advisor hours", done: false },
      { id: "f2", kind: "call", label: "Call after Thursday lab", done: false },
      { id: "f3", kind: "meeting", label: "First-year advisor reset", done: false },
      { id: "f4", kind: "tutoring", label: "Seat in Calc support", done: false },
    ],
  },
  {
    id: "SL-AAMU-1052",
    sample: true,
    name: "Aaliyah Brooks",
    year: "Sophomore",
    major: "Biology",
    college: "Agricultural, Life & Natural Sciences",
    triggers: ["registration"],
    risk: "high",
    ownerId: "jhale",
    flaggedOn: "Aug 18",
    whyFlagged:
      "Aaliyah is in Normal and on the meal plan, but Fall 2026 registration is still incomplete — Organic I waitlist only, no lab section. Students in this exact seat last year left in week three when the schedule never resolved. She is not stopped out. She is one cleared section from a real term.",
    outreach: {
      emailSubject: "Organic I — we can finish the schedule this week",
      emailBody:
        "Aaliyah — Jordan in Academic Recovery. You are on campus and your term is not actually built. Organic I is waitlist-only and the lab is blank. That is a stay problem, not a science problem. I can walk you to the Registrar desk Wednesday morning and we will either seat the lab or swap the pair before add/drop closes. Tell me if 9:15 works.\n\nJordan Hale\nAcademic recovery · Alabama A&M",
      sms: "AAMU Student Success / Jordan: Aaliyah, your fall schedule is still open — no Organic lab. Wed 9:15 at Registrar. Reply YES and I will meet you there.",
    },
    resourceIds: ["res-reg", "res-advise"],
    followUps: [
      { id: "f1", kind: "meeting", label: "Walk to Registrar Wed 9:15", done: false },
      { id: "f2", kind: "call", label: "Confirm the waitlist seat", done: false },
      { id: "f3", kind: "sms", label: "Send add/drop cutoff", done: false },
    ],
    reenroll: {
      kind: "registration_incomplete",
      nextAction: "Seat Organic I lab or swap the lecture/lab pair before add/drop.",
      term: "Fall 2026",
    },
  },
  {
    id: "SL-AAMU-1057",
    sample: true,
    name: "Malik Whitaker",
    year: "Senior",
    major: "Accounting",
    college: "Business & Public Affairs",
    triggers: ["balance", "registration"],
    risk: "high",
    ownerId: null,
    flaggedOn: "Aug 19",
    whyFlagged:
      "Malik is 21 hours from a degree. A $2,410 prior-term balance is blocking Fall 2026 registration. He has not answered the Bursar note. Seniors this close do not need motivation copy. They need the hold named and a path that does not make them sit out a last fall.",
    outreach: {
      emailSubject: "21 hours left. The hold is the only thing in the way.",
      emailBody:
        "Malik — Student Success. You are 21 hours from walking and Fall registration is blocked by a $2,410 prior-term balance. That is the whole flag. If a same-week grant and a two-pay plan can clear enough to lift the hold, we should do it this week — not after census. I can bring Financial Aid into a 30-minute block. Name a day.\n\nStayline desk · Alabama A&M Student Success",
      sms: "AAMU Student Success: Malik, 21 hours left; a prior-term hold is blocking fall. Reply CALL and we will set a 30-min aid block this week.",
    },
    resourceIds: ["res-finaid", "res-aid", "res-reg", "res-career"],
    followUps: [
      { id: "f1", kind: "call", label: "Name the hold on a live call", done: false },
      { id: "f2", kind: "emergency_aid", label: "Run same-week grant screen", done: false },
      { id: "f3", kind: "meeting", label: "Bursar + aid, 30 minutes", done: false },
    ],
    reenroll: {
      kind: "registration_incomplete",
      nextAction: "Lift the prior-term hold far enough to activate Fall 2026.",
      term: "Fall 2026",
    },
  },
  {
    id: "SL-AAMU-1063",
    sample: true,
    name: "Nia Okonkwo",
    year: "First-year",
    major: "Computer Science",
    college: "Engineering, Technology & Physical Sciences",
    triggers: ["attendance", "lms"],
    risk: "watch",
    ownerId: null,
    flaggedOn: "Aug 22",
    whyFlagged:
      "Nia attended week one of Programming I, then two absences and a silent LMS. She is still in the residence hall. This looks like a first collision with the course, not a decision to leave — but first-year CS students in this pattern often are gone by the drop date if nobody sits with them.",
    outreach: {
      emailSubject: "Week one happened. Week three does not have to be an exit.",
      emailBody:
        "Nia — Student Success. Programming I has you for week one, then two missed meetings and a quiet Canvas. You are still on campus. If the course is the problem, we can put you in the Academic Support Lab this week and talk about a load change before it becomes a leave. If something else is in the way, say so. We will not copy your instructor on this note.\n\nStayline desk · Alabama A&M Student Success",
      sms: "AAMU Student Success: Nia, Programming I has gone quiet after week one. You are still here. Reply LAB for a same-week tutoring seat, or TALK if it is not the class.",
    },
    resourceIds: ["res-tutor", "res-counsel", "res-housing"],
    followUps: [
      { id: "f1", kind: "sms", label: "Offer a same-week lab seat", done: false },
      { id: "f2", kind: "tutoring", label: "Place Programming I support", done: false },
      { id: "f3", kind: "call", label: "Check in at the hall desk", done: false },
    ],
  },
  {
    id: "SL-AAMU-1069",
    sample: true,
    name: "Caleb Horton",
    year: "Junior",
    major: "Food Science",
    college: "Agricultural, Life & Natural Sciences",
    triggers: ["advisor"],
    risk: "watch",
    ownerId: "mbell",
    flaggedOn: "Aug 17",
    whyFlagged:
      "Caleb missed two required junior-standing advisor meetings. Grades and attendance are fine. The flag is the hold that will lock spring registration if this sits. He is not at risk of failing a class. He is at risk of a preventable stop-out over a signature.",
    outreach: {
      emailSubject: "Two missed advisor slots — spring will lock if we wait",
      emailBody:
        "Caleb — Marcus in First-year / recovery coverage this week. Your junior review is still open. Classes look steady. The only thing in the file is the missed advisor hold, and that hold is what blocks spring. I have Thursday 11:00 and Friday 2:30. Pick one and we close it in twenty minutes.\n\nMarcus Bell\nFirst-year success · Alabama A&M",
      sms: "AAMU Student Success / Marcus: Caleb, advisor hold is still open — classes are fine. Thu 11 or Fri 2:30. Reply a day and we close it.",
    },
    resourceIds: ["res-advise", "res-career"],
    followUps: [
      { id: "f1", kind: "sms", label: "Offer Thu 11 / Fri 2:30", done: true },
      { id: "f2", kind: "meeting", label: "Close the junior review", done: false },
      { id: "f3", kind: "call", label: "Confirm the hold lifted", done: false },
    ],
  },
  {
    id: "SL-AAMU-1074",
    sample: true,
    name: "Jasmine Reed",
    year: "Sophomore",
    major: "Elementary Education",
    college: "Education, Humanities & Behavioral Sciences",
    triggers: ["attendance", "advisor"],
    risk: "high",
    ownerId: null,
    flaggedOn: "Aug 21",
    whyFlagged:
      "Jasmine has missed three Field Experience seminars and her sophomore advisor meeting. Education students who lose the field seminar this early usually lose the major the same term. She is still registered. The question is whether she is leaving the program or leaving the university.",
    outreach: {
      emailSubject: "Field seminar and advising — tell us which door this is",
      emailBody:
        "Jasmine — Student Success. Three Field Experience seminars are open, and advising did not see you. That combination is how education majors leave the program, and sometimes the campus, in the same month. If the placement is the problem, we can reset it. If the major is the problem, we should say that out loud before census. I can meet you in Patton 112 or at the College of Education desk. Which is easier.\n\nStayline desk · Alabama A&M Student Success",
      sms: "AAMU Student Success: Jasmine, field seminar and advising are both open. Reply MAJOR if you are leaving the program, STAY if the placement is the issue. We will answer either.",
    },
    resourceIds: ["res-advise", "res-tutor", "res-counsel"],
    followUps: [
      { id: "f1", kind: "call", label: "Ask program vs. campus", done: false },
      { id: "f2", kind: "meeting", label: "College of Education desk", done: false },
      { id: "f3", kind: "sms", label: "Send seminar make-up window", done: false },
    ],
  },
  {
    id: "SL-AAMU-1081",
    sample: true,
    name: "Andre Felton",
    year: "Senior",
    major: "Electrical Engineering",
    college: "Engineering, Technology & Physical Sciences",
    triggers: ["balance"],
    risk: "watch",
    ownerId: null,
    flaggedOn: "Aug 23",
    whyFlagged:
      "Andre is otherwise current. A $640 lab-fee balance posted last week and will become a transcript hold if it sits through Friday. He has a senior design section and an on-campus interview next month. This is a small bill with a large exit risk if nobody names it.",
    outreach: {
      emailSubject: "A $640 lab fee is about to become a hold",
      emailBody:
        "Andre — Student Success. Your classes and advising are current. A $640 lab-fee balance posted last week and becomes a transcript hold after Friday. That is the only reason you are on this desk. If you can clear it, do. If you cannot, same-week emergency aid can cover a bill this size. Reply and I will tell you which line to stand in.\n\nStayline desk · Alabama A&M Student Success",
      sms: "AAMU Student Success: Andre, $640 lab fee becomes a hold Friday. Classes are fine. Reply PAY if you can clear it, AID if you cannot.",
    },
    resourceIds: ["res-finaid", "res-aid"],
    followUps: [
      { id: "f1", kind: "sms", label: "Name the Friday hold date", done: false },
      { id: "f2", kind: "emergency_aid", label: "Screen the $640 bill", done: false },
      { id: "f3", kind: "call", label: "Confirm the fee posted correctly", done: false },
    ],
  },
  {
    id: "SL-AAMU-1088",
    sample: true,
    name: "Tiana Moss",
    year: "First-year",
    major: "Communications",
    college: "Education, Humanities & Behavioral Sciences",
    triggers: ["lms", "attendance"],
    risk: "high",
    ownerId: null,
    flaggedOn: "Aug 20",
    whyFlagged:
      "Tiana has not been in Public Speaking or Media Writing since the first meeting. Canvas last login is move-in week. Housing says she slept on campus four of the last ten nights. This is a leave-in-progress, not a study-skills case.",
    outreach: {
      emailSubject: "We need to know if you are still in Normal",
      emailBody:
        "Tiana — Camille Rhodes, Student Success. Public Speaking and Media Writing have not seen you since the first meeting, and Canvas last saw you at move-in. Housing has you on campus only part of the last ten nights. I am not writing to remind you about a course. I am writing to ask if you are staying this term. If you are, we will rebuild a week. If you are not, we will make the exit clean so it does not follow you. Call or come to Patton 112. Today is better than Friday.\n\nDr. Camille Rhodes\nVP, Student Success · Alabama A&M",
      sms: "AAMU Student Success / Camille: Tiana, courses and Canvas have been dark since week one. Are you staying this term? Reply YES or NEED OUT. Either answer is usable.",
    },
    resourceIds: ["res-housing", "res-counsel", "res-advise", "res-tutor"],
    followUps: [
      { id: "f1", kind: "call", label: "Reach her today, not Friday", done: false },
      { id: "f2", kind: "meeting", label: "Patton 112 same-day seat", done: false },
      { id: "f3", kind: "sms", label: "Ask stay vs. clean exit", done: false },
      { id: "f4", kind: "tutoring", label: "Rebuild the week if she stays", done: false },
    ],
  },
  {
    id: "SL-AAMU-1093",
    sample: true,
    name: "Elijah Grant",
    year: "Junior",
    major: "Political Science",
    college: "Business & Public Affairs",
    triggers: ["registration"],
    risk: "high",
    ownerId: null,
    flaggedOn: "Aug 16",
    whyFlagged:
      "Elijah stopped out after Spring 2026 midterms and never completed a Fall 2026 return. His file is clean enough to come back — no conduct, no academic dismissal. He is on the re-enrollment list because nobody has named a next action since June.",
    outreach: {
      emailSubject: "Fall can still open. Here is the next action.",
      emailBody:
        "Elijah — Student Success. You left after spring midterms. Nothing in the file blocks a Fall 2026 return except the paperwork that was never finished. If you want the term, the next action is a 25-minute registrar + advising block to reactivate and pick 12 hours. If you want spring instead, say that and we will stop calling this a fall problem. Reply FALL or SPRING.\n\nStayline desk · Alabama A&M Student Success",
      sms: "AAMU Student Success: Elijah, spring stop-out is still open. Fall can still be built. Reply FALL or SPRING so we stop guessing.",
    },
    resourceIds: ["res-reg", "res-advise", "res-finaid"],
    followUps: [
      { id: "f1", kind: "call", label: "Ask fall vs. spring return", done: false },
      { id: "f2", kind: "meeting", label: "Reactivation block, 25 min", done: false },
      { id: "f3", kind: "sms", label: "Send the return checklist", done: false },
    ],
    reenroll: {
      kind: "stopped_out",
      nextAction: "Ask fall vs. spring, then run a 25-minute reactivation block.",
      term: "Fall 2026 or Spring 2027",
    },
  },
  {
    id: "SL-AAMU-1099",
    sample: true,
    name: "Brielle Sanders",
    year: "Sophomore",
    major: "Animal Science",
    college: "Agricultural, Life & Natural Sciences",
    triggers: ["advisor", "registration"],
    risk: "watch",
    ownerId: null,
    flaggedOn: "Aug 22",
    whyFlagged:
      "Brielle missed the sophomore advising window and her fall schedule is short a required lab. She is attending the lecture. This is how animal science students lose a year — not by leaving in August, but by sitting an incomplete term until it cannot count.",
    outreach: {
      emailSubject: "Lecture without the lab will not count the year",
      emailBody:
        "Brielle — Student Success. You are in the Animal Science lecture and missing the required lab, and advising never closed. That combination wastes a year more often than it causes a dramatic exit. We can still add a lab section or park the lecture before add/drop. Tuesday 10:00 at University Advising. If that time is wrong, send one that is right.\n\nStayline desk · Alabama A&M Student Success",
      sms: "AAMU Student Success: Brielle, lecture is seated, lab is not, advising is open. Tue 10 at Advising. Reply YES or send a better time.",
    },
    resourceIds: ["res-advise", "res-reg"],
    followUps: [
      { id: "f1", kind: "meeting", label: "Advising Tuesday 10:00", done: false },
      { id: "f2", kind: "sms", label: "Send remaining lab sections", done: false },
      { id: "f3", kind: "call", label: "Confirm the schedule counts", done: false },
    ],
    reenroll: {
      kind: "registration_incomplete",
      nextAction: "Add the required lab or park the lecture before add/drop.",
      term: "Fall 2026",
    },
  },
  {
    id: "SL-AAMU-1032",
    sample: true,
    name: "Maya Patterson",
    year: "Senior",
    major: "Social Work",
    college: "Education, Humanities & Behavioral Sciences",
    triggers: ["balance"],
    risk: "kept",
    ownerId: "icole",
    flaggedOn: "Aug 11",
    whyFlagged:
      "Maya was on last week’s desk for a $900 field-placement fee. Imani closed the same-week grant and the hold lifted August 19. She is kept — still a senior in the major, still registered. Stay on the file only so the week does not lose the save.",
    outreach: {
      emailSubject: "Hold is lifted. You are on the fall roster.",
      emailBody:
        "Maya — Imani. The field-placement fee cleared and the hold is off as of August 19. You are registered. No action from you this week unless something else lands on the account. If it does, write me before it sits.\n\nImani Cole\nFinancial wellness · Alabama A&M",
      sms: "AAMU Student Success / Imani: Maya, hold lifted Aug 19. You are on the fall roster. No action this week.",
    },
    resourceIds: ["res-aid", "res-finaid"],
    followUps: [
      { id: "f1", kind: "emergency_aid", label: "Same-week grant filed", done: true },
      { id: "f2", kind: "call", label: "Confirm hold lifted", done: true },
      { id: "f3", kind: "sms", label: "Tell her the roster is live", done: true },
    ],
  },
];

export function needsAttention(student: Student): boolean {
  return student.risk !== "kept";
}
