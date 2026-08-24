# Stayline

Stayline is its own site. **Who is about to leave, and why.**

Advisor inbox for HBCU retention teams. Prototype campus: **Alabama A&M University**. Buyer mock: VP Student Success. All students are fictional and labeled **sample**. No real PII.

Landing copy on `/` is locked by Shells (`src/copy/shells.ts`). Do not rewrite headlines.

## Brand

- **Ink** `#1A1714` — type, rules, chrome
- **Clay** `#B85C38` — attention, weekly count, primary action
- **Paper** `#FAF6F1` — field
- **Stay-green** `#2F6F4E` — only on students marked **kept**

Mark: Stayline wordmark plus one hold-the-line stroke. Not a heart, mortarboard, or trophy.

## Stack

Vite · React · TypeScript. Client-side state only. No auth.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Routes

| Route | What it is |
| --- | --- |
| `/` | Stayline home. Locked Shells SEO, H1, sub, ICPs, FAQs. Weekly N. Button into `/app`. |
| `/retention` | Retention-desk explainer. Not a student login. Inbox stays at `/app`. |
| `/app` | At-risk inbox. Filters by trigger, owner, risk. |
| `/app/cases` | Assigned files and follow-up counts. |
| `/app/reenrollment` | Stopped-out and incomplete registration, each with a next action. |
| `/app/resources` | Eight campus resources the inbox can match. |
| `/app/settings` | Signed-in VP mock and sample-data notice. |

Triggers: attendance drop, unpaid balance, missed advisor, LMS inactivity, registration incomplete.

Click a student for a why-flagged summary, email/SMS drafts, case owner, follow-up checklist, and resource match. Mark follow-ups done or mark a student kept — the weekly **N** updates.

See [DEMO.md](./DEMO.md) for the click path.
