# Education

> Target in code: `education` in `app/constants/data.js`
> Fields used by the UI: `title, institution, year, grade`

| Title | Institution | Year |
|---|---|---|
| Master of Business Administration (MBA) | Arab Academy for Science, Technology and Maritime Transport (AASTMT) | 2023 ✅ |
| Machine Learning A-Z [2026]: ML, DL, AI with AWS, Python & R (49.5 h) | Udemy, SuperDataScience | Oct 2026 ✅ |

- **MBA focus:** Technology Management & Strategic Business Growth

## Ready-to-paste array

```js
const education = [
  {
    title: "Master of Business Administration (MBA)",
    institution: "Arab Academy for Science, Technology and Maritime Transport (AASTMT)",
    focus: "Technology Management & Strategic Business Growth", // new field — UI must render it
    year: "2023",
    grade: "",
  },
];

const certifications = [
  {
    title: "Machine Learning A-Z: ML, DL, AI with AWS, Python & R",
    issuer: "Udemy, SuperDataScience",
    date: "Oct 2026",
    hours: "49.5",
    credentialId: "UC-4a4fad90-7b21-4dd7-b2ca-e6ed757c9feb",
    url: "https://ude.my/UC-4a4fad90-7b21-4dd7-b2ca-e6ed757c9feb",
  },
];
```
