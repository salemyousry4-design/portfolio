# Projects

> Target in code: `projects` in `app/constants/data.js` + images in `public/Projects/`

⚠️ **No real projects yet.** Remove all current entries (CodeyAi, Kababouzi, Mimo, Rasain, Quraa, Easy Services) and their images.
**Hide "Projects" from the navbar until at least 3 projects exist.**

## Roadmap (details and rationale in [PLAN.md](PLAN.md) §3)

All projects target the **restaurant & F&B sector** (Salem's real domain). Priority: 1, 2, 5.

| # | Project | ML technique | Business question | Status |
|---|---|---|---|---|
| 1 | Restaurant Demand Forecasting | Regression, Boosting | How many orders next week, so we cut food waste? | ⬜ |
| 2 | Menu Basket Analysis | Association Rule Learning | Which items to sell as combos or upsells? | ⬜ |
| 3 | Customer Segmentation (RFM) | Clustering, PCA | Which segments should the loyalty program target? | ⬜ |
| 4 | Churn / Repeat-Order Prediction | Classification, Model Selection, XGBoost | Who won't order again, and when to send an offer? | ⬜ |
| 5 | Arabic + English Restaurant Review Sentiment ⭐ | NLP, Deep Learning (TensorFlow) | What do guests complain about, in both languages? | ⬜ |
| 6 | Promo Optimization | Reinforcement Learning (UCB / Thompson) | Which in-app promo should we show? | ⬜ |

⚠️ Do not publish the course's own datasets (`Restaurant_Reviews.tsv`, `Market_Basket_Optimisation.csv`, `Mall_Customers.csv`) as projects. Recruiters recognize them.

## Data shape: case-study format (new fields need UI support)

```js
{
  name: "Restaurant Demand Forecasting",
  img: images.demandForecast,        // add to app/constants/images.js
  github: "https://github.com/salemyousry4-design/restaurant-demand-forecasting",
  website: null,                     // Streamlit / HF Spaces demo if any
  featured: true,
  category: "ml",                    // "ml" | "business"
  tech: ["Python", "pandas", "scikit-learn", "XGBoost"],
  problem: "",                       // 1 sentence: the business question
  approach: "",                      // 1 sentence: what was modeled and how
  result: "",                        // 1 sentence: real metric + business impact
}
```

Each finished project also adds 1–2 bullets to the CV (`docs/cv/salem-cv.html`, commented v2 block).
