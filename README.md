# Salem Yousry · Portfolio

![Next.js](https://img.shields.io/badge/Next.js-15-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![Three.js](https://img.shields.io/badge/Three.js-3D-000000?logo=threedotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/deployed_on-Vercel-000000?logo=vercel&logoColor=white)

This is the personal website of **Salem Yousry**, a machine learning engineer with an MBA and 4 years of business development in the restaurant and F&B sector.

### 🔗 [Visit the live site](https://portfolio-fox-3551.vercel.app)

## ✨ Highlights

- **Machine learning case studies**: each project is told as *problem → approach → result*, with real metrics, code and live demos
- **Interactive 3D**: particle fields, a skills globe and network scenes built with React Three Fiber
- **Light and dark themes**, smooth page transitions (Framer Motion) and a fully responsive layout
- **Contact form** powered by EmailJS, plus a downloadable CV and certificate

## 🧱 Tech stack

| Layer | Tools |
|---|---|
| Framework | Next.js 15 (App Router), React 19, TypeScript |
| Styling | Tailwind CSS, Sass, Bootstrap |
| Animation & 3D | Framer Motion, Three.js, React Three Fiber / Drei, AOS |
| Services | EmailJS (contact form), Vercel (hosting) |

## 🚀 Run locally

```bash
git clone https://github.com/salemyousry4-design/portfolio.git
cd portfolio
npm install
cp .env.local.example .env.local   # add your EmailJS keys
npm run dev                        # http://localhost:3000
```

## 📁 Structure

```text
app/
├── constants/data.js     # all site content: profile, skills, experience, projects
├── Sections/             # landing, skills, experience, services, qualification
├── Pages/                # about, projects, contact
└── components/           # navbar, footer, 3D scenes, theme toggle
public/                   # images, CV, certificate, project screenshots
```

All content lives in [`app/constants/data.js`](app/constants/data.js). Adding a project there automatically adds it to the Projects page.

## 📫 Contact

[GitHub](https://github.com/salemyousry4-design) · [Website](https://portfolio-fox-3551.vercel.app)
