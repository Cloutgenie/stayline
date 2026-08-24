# Stayline

Stayline is an at-risk inbox for HBCU student-success desks. It answers one question: **who is about to leave, and why.**

This is not a learning system, not a CRM clone, and not a student app. A VP or advisor opens a short weekly list, sees the trigger that put a student there, and does the next human thing.

Prototype campus: **Alabama A&M University**. Buyer mock: VP Student Success. All students are fictional and labeled **sample**. No real PII.

## Brand

- **Ink** `#1A1714` — type, rules, chrome
- **Clay** `#B85C38` — attention, weekly count, primary action
- **Paper** `#FAF6F1` — field
- **Stay-green** `#2F6F4E` — only on students marked **kept**

Mark: the Stayline wordmark plus one hold-the-line stroke (horizontal rule, clay tick). Not a heart, mortarboard, or trophy.

## Stack

Vite · React · TypeScript. Client-side state only. No auth.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Desk

| Route | What it is |
| --- | --- |
| `/` | Thin shell (Shells owns headlines): name, locked voice line, weekly N, button into `/app`. |
| `/app` | At-risk inbox. Filters by trigger, owner, risk. |
| `/app/cases` | Assigned files and follow-up counts. |
| `/app/reenrollment` | Stopped-out and incomplete registration, each with a next action. |
| `/app/resources` | Eight campus resources the inbox can match. |
| `/app/settings` | Signed-in VP mock and sample-data notice. |

Triggers: attendance drop, unpaid balance, missed advisor, LMS inactivity, registration incomplete.

Click a student for a why-flagged summary, email/SMS drafts, case owner, follow-up checklist, and resource match. Mark follow-ups done or mark a student kept — the weekly **N** updates.

See [DEMO.md](./DEMO.md) for the click path.
