# Stayline demo

Client-only prototype. Open the desk without signing in.

```bash
npm install
npm run dev
```

Then visit `http://localhost:5173/stayline/` (Vite `base` is `/stayline/`).

`npm run build` must succeed. Preview the production build with `npm run preview`.

This revision does not publish a Pages deploy. A public URL, if Dave publishes a clean bundle, belongs in this file only after it is live — do not invent one.

## Click path (about four minutes)

1. **Landing (`/`)**  
   Stayline only — no second product. Locked H1: “Who is about to leave, and why.” Sub, AEO line, ICPs, and FAQs are verbatim from Shells. Weekly **N** (11 on first load). Click **Retention desk** then return, or **Open success desk**.

1b. **Retention (`/retention`)**  
   Short staff-desk explainer. Not a student login. Inbox is not here. **Open success desk** goes to `/app`.

2. **Inbox (`/app`)**  
   You are Dr. Camille Rhodes, VP Student Success, Alabama A&M. The weekly banner repeats **N**. Rows show name, year/major, trigger chips, risk, owner. Sample IDs look like `SL-AAMU-1041`.  
   Filter **Trigger → Unpaid balance**, then clear back to All. Filter **Owner → Unassigned**. Filter **Risk → High**.

3. **Student file**  
   Click **Keisha Langford** (`SL-AAMU-1041`). Read the why-flagged note (attendance + hold). Switch Email / SMS drafts and copy one. Change case owner. Check **Call about the hold**. The open follow-up count in the drawer drops.

4. **Weekly count**  
   Click **Mark kept** on Keisha. The banner **N** goes from 11 to 10. Stay-green appears only on that kept mark. **Return to inbox** if you want her back on the list.

5. **Cases (`/app/cases`)**  
   Assigned files only. Open-task totals move when you check items in the drawer. Maya Patterson is the kept save from last week.

6. **Re-enrollment (`/app/reenrollment`)**  
   Open **Elijah Grant** (stopped out) and **Aaliyah Brooks** (registration incomplete). Each row has one next action.

7. **Resources (`/app/resources`)**  
   Eight desks: tutoring, emergency aid, counseling, advising, registrar, financial aid, housing, career.

8. **Settings (`/app/settings`)**  
   Confirm the VP mock and the sample-data notice. Refresh the browser to reset client state.

## What not to expect

No real login, no server, no live SIS. Refresh resets owners, checklists, and kept marks.
