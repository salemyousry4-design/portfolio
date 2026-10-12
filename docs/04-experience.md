# Experience

> Target in code: `experiences` in `app/constants/data.js`
> Fields used by the UI: `title, company, date, location, type, points, link?`

✅ Confirmed 2026-10-12: **4 years of business development in the restaurant & F&B sector**. The 40% figure and all bullets are accurate.
➖ Decision: no employer names.
⏳ Start year assumed **2022** (4 years → present). Confirm.

Salem has **not worked in a tech role yet**. The ML claims in the old CV were removed:
"ML Solutions Lead", "designed predictive models using Python", and "+35% product adoption".

## Ready-to-paste array (same text as CV v1.3)

```js
const experiences = [
  {
    title: "Business Development Consultant",
    company: "Restaurant & F&B Sector",
    date: "2022 - Present",
    location: "Cairo, Egypt",
    type: "Business Development",
    points: [
      "Negotiate B2B agreements and build strategic alliances with regional technology providers and operational partners.",
      "Automated business reporting and operational forecasting workflows, cutting manual analysis cycle time by 40%.",
      "Conduct data analysis and market research to shape scalable go-to-market strategies for new restaurant concepts and F&B ventures.",
      "Advise clients on market entry and growth priorities, using feasibility studies and financial models to support go / no-go decisions.",
      "Lead engagements end to end, from scoping the commercial problem to aligning teams and presenting recommendations to senior management.",
    ],
  },
];
```

## UI note
With a single role, the vertical timeline in `Experience.jsx` will look sparse. Options: show the role as one wide card, or add the MBA (2023) and the ML certification (2026) as timeline milestones.
