import {
  SiPython,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import {
  MdShowChart,
  MdCategory,
  MdBubbleChart,
  MdShoppingCart,
  MdLoop,
  MdTranslate,
  MdHub,
  MdCompress,
  MdTune,
  MdInsertChart,
  MdBolt,
  MdAutorenew,
  MdMonitorHeart,
  MdHandshake,
  MdSyncAlt,
  MdPublic,
  MdTrendingUp,
  MdCalculate,
  MdGavel,
  MdLanguage,
  MdModelTraining,
  MdInsights,
} from "react-icons/md";

const personalInfo = {
  name: "Salem Yousry Abdelaziz",
  displayName: "Salem Yousry",
  brand: "Salem",
  title: "Machine Learning Engineer | Business Development & Strategy",
  phone: "+201515363773",
  phoneDisplay: "0151 5363773",
  whatsapp: "201515363773",
  email: "salemyousry4@gmail.com",
  location: "Cairo, Egypt",
  github: "https://github.com/salemyousry4-design",
  linkedin: "https://www.linkedin.com/in/salem-yousry-28655337b/",
  photo: "/salem.jpg",
  logo: "/salem-logo.png",
  mark: "/salem-mark.png",
  cv: "/Salem_Yousry_Abdelaziz_CV.pdf",
  experienceYears: 4,
  bio: "MBA-qualified business development and strategy consultant moving into machine learning engineering, with 4 years of business development experience in the restaurant and F&B sector. Certified in Machine Learning A-Z (Udemy, 2026), I work in Python (NumPy, pandas, scikit-learn, XGBoost, TensorFlow) across regression, classification, clustering, NLP, deep learning and more, and deploy and monitor ML workflows on AWS. My edge is translating business problems into ML problems, and the results back into decisions.",
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "German", level: "Elementary (A2)" },
  ],
};

const hero = {
  greeting: "Hello, I'm",
  roles: [
    "Machine Learning Engineer",
    "Business Development & Strategy",
    "MBA · Technology Management",
    "Where Tech Meets Business",
  ],
  intro:
    "I translate business problems into machine learning solutions, and the results back into decisions leaders can act on.",
};

const qualification = {
  paragraphs: [
    "An MBA-qualified business development and strategy consultant moving into machine learning engineering. I work in Python across regression, classification, clustering, association rules, reinforcement learning, NLP, deep learning, and dimensionality reduction.",
    "Most ML projects fail on the business side, not the model side. I bring both: the modeling skills to build the solution, and the commercial judgment to make sure it answers the right question, backed by 4 years of business development in the restaurant and F&B sector.",
  ],
};

const services = [
  {
    title: "Business Development & Consulting",
    text: "Market research, go-to-market strategy, feasibility studies, and B2B partnerships.",
    icon: MdHandshake,
  },
  {
    title: "Machine Learning",
    text: "Building predictive models that turn data into clear, measurable business decisions.",
    icon: MdModelTraining,
  },
  {
    title: "Tech ↔ Business Bridge",
    text: "Turning stakeholder goals into clear technical requirements, and model results into decisions.",
    icon: MdSyncAlt,
  },
  {
    title: "MENA Market Growth",
    text: "Supporting restaurant and F&B growth across Egypt and the Gulf, in Arabic and English.",
    icon: MdPublic,
  },
];

const stats = [
  { value: "4", label: "Years in F&B Business Development" },
  { value: "40%", label: "Less Manual Analysis Time" },
  { value: "MBA", label: "Technology Management" },
];

const skillCategories = [
  {
    title: "Machine Learning",
    skills: [
      { name: "Regression", icon: MdShowChart },
      { name: "Classification", icon: MdCategory },
      { name: "Clustering", icon: MdBubbleChart },
      { name: "Association Rule Learning", icon: MdShoppingCart },
      { name: "Reinforcement Learning", icon: MdLoop },
      { name: "NLP", icon: MdTranslate },
      { name: "Deep Learning", icon: MdHub },
      { name: "PCA · LDA · Kernel PCA", icon: MdCompress },
      { name: "Model Selection & Boosting", icon: MdTune },
    ],
  },
  {
    title: "Python & Libraries",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "NumPy", icon: SiNumpy },
      { name: "pandas", icon: SiPandas },
      { name: "scikit-learn", icon: SiScikitlearn },
      { name: "XGBoost", icon: MdBolt },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "Matplotlib", icon: MdInsertChart },
    ],
  },
  {
    title: "MLOps on AWS",
    skills: [
      { name: "ML Development & Deployment", icon: FaAws },
      { name: "CI/CD Pipelines", icon: MdAutorenew },
      { name: "Monitoring & Maintenance", icon: MdMonitorHeart },
    ],
  },
  {
    title: "Business & Strategy",
    skills: [
      { name: "Business Development", icon: MdHandshake },
      { name: "Merging Tech & Business", icon: MdSyncAlt },
      { name: "Market Research & GTM", icon: MdInsights },
      { name: "B2B Growth", icon: MdTrendingUp },
      { name: "Feasibility & Financial Modeling", icon: MdCalculate },
      { name: "Contract Negotiation", icon: MdGavel },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Arabic (Native)", icon: MdLanguage },
      { name: "English (Fluent)", icon: MdLanguage },
      { name: "German (A2)", icon: MdLanguage },
    ],
  },
];

// Words shown on the 3D skills globe (Skills section).
const sphereSkills = [
  "Python", "NumPy", "pandas", "scikit-learn", "TensorFlow",
  "Regression", "Classification", "Clustering",
  "Association Rules", "Reinforcement", "NLP", "Deep Learning",
  "PCA", "Kernel PCA", "LDA", "XGBoost", "Model Selection",
  "AWS", "MLOps", "CI/CD",
  "Business Dev", "Consulting", "Go-to-Market", "MBA",
];

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

const education = [
  {
    title: "Master of Business Administration (MBA)",
    institution: "Arab Academy for Science, Technology and Maritime Transport (AASTMT)",
    focus: "Technology Management & Strategic Business Growth",
    year: "2023",
    grade: "",
  },
];

const certifications = [
  {
    title: "Machine Learning A-Z: ML, DL, AI with AWS, Python & R",
    issuer: "Udemy · SuperDataScience",
    date: "Oct 2026",
    hours: "49.5 hours",
    credentialId: "UC-4a4fad90-7b21-4dd7-b2ca-e6ed757c9feb",
    url: "https://www.udemy.com/certificate/UC-4a4fad90-7b21-4dd7-b2ca-e6ed757c9feb/",
    file: "/Salem_Yousry_ML_Certificate.pdf",
  },
];

// Case studies. The Projects page is hidden from the navbar until there are at least 3.
// Shape: { name, img?, github?, website?, featured?, category: "ml" | "business",
//          tech: [], problem, approach, result }
const GH = "https://github.com/salemyousry4-design";

const projects = [
  {
    name: "Sky Sync AI: Fleet Readiness System",
    img: "/Projects/skysync-ai.png",
    github: `${GH}/skysync-ai-demo`,
    website: "https://salemyousry4-design.github.io/skysync-ai-demo/",
    featured: true,
    category: "ml",
    tech: ["Python", "FastAPI", "WebSockets", "RAG", "SQLite"],
    problem:
      "A helicopter fleet needs one real-time picture of which aircraft are mission-ready, while the tower, engineers and pilots each need their own workflow, all on a network with no internet.",
    approach:
      "Built a fully offline, LAN-based system with six role-based workflows, an explainable 0–100 health score with reasons, and an AI maintenance assistant that answers only from cited manuals and live fleet data.",
    result:
      "A live readiness dashboard shared by every device. Overdue aircraft are blocked from takeoff automatically, and 55 automated tests cover the full maintenance cycle.",
  },
  {
    name: "Breast Cancer Prediction",
    img: "/Projects/breast-cancer.png",
    github: `${GH}/Data-classification-by-using-xgboost`,
    website: "https://data-classification-by-using-xgboost-hwbathwdbxd2m78n7djsgs.streamlit.app/",
    featured: true,
    category: "ml",
    tech: ["XGBoost", "scikit-learn", "Streamlit"],
    problem: "Classify breast tumours as benign or malignant from nine cytology measurements.",
    approach:
      "Compared four models with 10-fold cross-validation and deployed XGBoost in a live app with feature importances.",
    result: "97.1% test accuracy and 100% recall on malignant cases: no malignant tumour missed.",
  },
  {
    name: "Cat vs Dog Image Classifier",
    img: "/Projects/cat-dog-cnn.png",
    github: `${GH}/cnn-for-cat-or-dog-classifier`,
    featured: true,
    category: "ml",
    tech: ["TensorFlow", "Keras", "CNN", "Transfer Learning"],
    problem: "Recognise whether a photo shows a cat or a dog.",
    approach:
      "Trained a CNN from scratch and a MobileNetV2 transfer-learning model on 8,000 images with data augmentation, served in an upload-a-photo app.",
    result: "98% accuracy on 2,000 unseen test images with only 1,281 trainable parameters.",
  },
  {
    name: "Bank Customer Churn Prediction",
    img: "/Projects/bank-churn.png",
    github: `${GH}/bank-churn-prediction-ann`,
    category: "ml",
    tech: ["TensorFlow", "Neural Network", "Streamlit"],
    problem: "Identify bank customers who are about to close their account, before they leave.",
    approach:
      "Trained an artificial neural network on 10,000 customers with leakage-safe preprocessing and early stopping, and built a scoring app.",
    result:
      "85.7% accuracy and 0.856 ROC-AUC. 84% of flagged customers really churn, so retention offers reach the right people.",
  },
  {
    name: "Smart Purchase Predictor",
    img: "/Projects/purchase-svm.png",
    github: `${GH}/social-network-ads-app`,
    website: "https://social-network-ads-app.streamlit.app",
    category: "ml",
    tech: ["SVM", "Grid Search", "Plotly", "Streamlit"],
    problem: "Predict which social-network users will buy after seeing an ad, to target ad spend.",
    approach:
      "Tuned an RBF-kernel SVM with grid search and calibrated it to output purchase probabilities on an interactive decision map.",
    result: "91.7% cross-validated accuracy, 7 points above logistic regression.",
  },
  {
    name: "Wine Classification: PCA vs LDA",
    img: "/Projects/wine-pca-lda.png",
    github: `${GH}/PCA-For-Large-Dataset`,
    website: "https://pca-for-large-datasetgit-6judfarlhqxcu8qc5kdhfo.streamlit.app",
    category: "ml",
    tech: ["PCA", "LDA", "scikit-learn", "Plotly"],
    problem: "Can 13 chemical measurements be reduced to 2 without losing predictive power?",
    approach:
      "Compared unsupervised PCA with supervised LDA as a pre-processing step for classification, with interactive dashboards for both.",
    result: "2 LDA components reach 99.3% cross-validated accuracy, beating the model that uses all 13 features.",
  },
];
const MIN_PROJECTS_TO_SHOW = 3;
const showProjects = projects.length >= MIN_PROJECTS_TO_SHOW;

const data = {
  personalInfo,
  hero,
  qualification,
  services,
  stats,
  skillCategories,
  sphereSkills,
  experiences,
  education,
  certifications,
  projects,
  showProjects,
};
export {
  personalInfo,
  hero,
  qualification,
  services,
  stats,
  skillCategories,
  sphereSkills,
  experiences,
  education,
  certifications,
  projects,
  showProjects,
  data,
};
export default data;
