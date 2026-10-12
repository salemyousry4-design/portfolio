# Profile: Personal Info

> Target in code: `personalInfo` in `app/constants/data.js`

| Field        | Value                                                         | Status |
|--------------|---------------------------------------------------------------|--------|
| name         | Salem Yousry Abdelaziz                                        | ✅ |
| displayName  | Salem Yousry                                                  | ✅ hero / footer |
| brand        | Salem                                                         | ✅ |
| title        | Machine Learning Engineer \| Business Development & Strategy  | ✅ level: Intermediate |
| email        | salemyousry4@gmail.com                                         | ✅ |
| phone        | +201515363773                                                 | ✅ |
| location     | Cairo, Egypt                                                  | ✅ |
| github       | https://github.com/salemyousry4-design                                     | ✅ (clean up first, see PLAN §2) |
| linkedin     | —                                                             | ➖ not used (decision): remove from site |
| birthdate    | —                                                             | ➖ not needed: remove "Age" from About |
| photo        | `/salem.jpg`                                                  | ✅ added to `public/` |
| logo         | `/salem-logo.png` (S mark, transparent RGBA 489×510)          | ✅ navbar / favicon source |
| cvFile       | `/Salem_Yousry_Abdelaziz_CV.pdf`                              | ✅ v1 generated |

## Languages

| Language | Level      |
|----------|------------|
| Arabic   | Native     |
| English  | Fluent     |
| German   | Elementary (A2) |

## Ready-to-paste object

```js
const personalInfo = {
  name: "Salem Yousry Abdelaziz",
  displayName: "Salem Yousry",
  brand: "Salem",
  title: "Machine Learning Engineer | Business Development & Strategy",
  phone: "+201515363773",
  email: "salemyousry4@gmail.com",
  location: "Cairo, Egypt",
  github: "https://github.com/salemyousry4-design",
  photo: "/salem.jpg",
  logo: "/salem-logo.png",
  cv: "/Salem_Yousry_Abdelaziz_CV.pdf",
  bio: "MBA-qualified business development and strategy consultant moving into machine learning engineering, with 4 years of business development experience in the restaurant and F&B sector. Certified in Machine Learning A-Z (Udemy, 2026), I work in Python (NumPy, pandas, scikit-learn, XGBoost, TensorFlow) across regression, classification, clustering, NLP, deep learning, and more, deploy and monitor ML workflows on AWS, and I bring hands-on experience in market research, go-to-market strategy, and B2B partnerships. My edge is translating business problems into ML problems, and the results back into decisions.",
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "German", level: "Elementary (A2)" },
  ],
};
```
