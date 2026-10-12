# Site Copy & SEO

Text that is currently **hardcoded in components** (not in `data.js`).
Positioning: *Business-minded ML Engineer (Intermediate)*. See [PLAN.md](PLAN.md) §1.

## 1. SEO metadata: `app/layout.tsx`

```ts
title: "Salem Yousry | Machine Learning Engineer & Business Strategist",
description: "Salem Yousry: MBA-qualified machine learning engineer and business development consultant in Cairo, with 4 years in the restaurant and F&B sector. Turning business problems into ML solutions.",
```

## 2. Hero: `app/Sections/Landing/Landing.jsx`

- Name (h1): `Salem Yousry`
- Photo: `/salem.jpg`
- TypeAnimation sequence:

```js
[
  "Machine Learning Engineer", 2000,
  "Business Development & Strategy", 2000,
  "MBA · Technology Management", 2000,
  "Where Tech Meets Business", 2000,
]
```

- Intro paragraph:

> I translate business problems into machine learning solutions, and the results back into decisions leaders can act on.

- Buttons: `Download CV` → `/Salem_Yousry_Abdelaziz_CV.pdf`, `Contact Me`

## 3. "Tech × Business" (was Qualification): `app/Sections/Qualification/Qualification.jsx`

Paragraph 1:

> An MBA-qualified **business development and strategy consultant** moving into **machine learning engineering**. I work in **Python** across regression, classification, clustering, association rules, reinforcement learning, NLP, deep learning, and dimensionality reduction.

Paragraph 2:

> Most ML projects fail on the business side, not the model side. I bring both: the modeling skills to build the solution, and the commercial judgment to make sure it answers the right question, backed by 4 years of business development in the restaurant and F&B sector.

## 4. Services (new section)

| Title | Text |
|---|---|
| Business Development & Consulting | Market research, go-to-market strategy, feasibility studies, and B2B partnerships. |
| ML for Restaurants & F&B | Demand forecasting, menu basket analysis, customer segmentation, and review sentiment, framed around a business KPI. |
| Tech ↔ Business Bridge | Turning stakeholder goals into clear technical requirements, and model results into decisions. |
| MENA Market Growth | Supporting restaurant and F&B growth across Egypt and the Gulf, in Arabic and English. |

## 5. Footer: `app/components/legacy/Footer/Footer.jsx`

- `Designed & Built by Ahmed Ibrahim` → **`Made by Salem Yousry`** ✅
- Social links → GitHub + email from `personalInfo`. **No LinkedIn.**

## 6. Stats strip (optional, only true numbers)

| Number | Label |
|---|---|
| 4 | Years in restaurant & F&B business development |
| 40% | Less manual analysis time (reporting automation) |
| 49.5h | Machine Learning A-Z certification |
| N | ML projects (fill after Phase 1) |
