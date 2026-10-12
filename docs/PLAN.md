# الخطة الشاملة: Salem Yousry

> آخر تحديث: 2026-10-12
> الهدف: تحويل البورتفوليو والـ CV لسالم، ووضعه في السوق كـ **ML Engineer (Intermediate) فاهم بيزنس، وعنده خبرة في قطاع المطاعم**.

---

## 0. التشخيص: إحنا فين دلوقتي

| العنصر | الوضع | الملاحظة |
|---|---|---|
| الـ CV القديم | كان بيقول "ML Solutions Lead" وpredictive models بـ Python و+35% product adoption | سالم **لسه ما اشتغلش في التك**، فالكلام دا اتشال |
| الخبرة الحقيقية | **4 سنين Business Development في قطاع المطاعم والـ F&B** | ✅ دي قيمة حقيقية ونقطة تميّز |
| دليل الـ ML | شهادة **Machine Learning A-Z** (Udemy, Oct 2026, 49.5 ساعة) | ✅ بداية، بس لسه **مفيش مشاريع** |
| GitHub | الحساب الصح **`salemyousry4-design`** وفيه 3 repos ML (churn ANN، وDecision Tree، وCNN فاضي). الحساب القديم `salemy` فيه HTML من 2021 | ⚠️ الـ repos لسه تمارين كورس، وتطبيق الـ churn فيه bug. التفاصيل في [GITHUB-REVIEW.md](GITHUB-REVIEW.md) |
| الموقع | لسه كله بيانات أحمد | محتاج rebrand كامل |
| البراند | الاسم **Salem**، واللوجو الذهبي (`public/salem-logo.png` شفاف) | ✅ متطابق مع ألوان الموقع (`--mainColor: #c8a25a`) |

**الخلاصة:** الصياغة والشكل خلصوا. الحاجة الوحيدة اللي واقفة بين سالم والـ 9/10 هي **مشاريع ML حقيقية**.

---

## 1. الـ Positioning: هنقدّم سالم إزاي؟

**العنوان:** `Machine Learning Engineer | Business Development & Strategy | MBA`

**الرسالة:** *"فاهم مشكلة المطعم كبيزنس، وبحلها بـ ML، وبشرح النتيجة للإدارة بلغتها."*

**ليه؟**
- لو اتقدّم كـ Junior ML Engineer عادي هيبقى بينافس خريجي Computer Science اللي عندهم سنين كود، وفرصته هناك ضعيفة.
- المزيج اللي عنده (MBA + 4 سنين Business Development + ML + **domain المطاعم**) نادر.
- شركات الـ food delivery والـ restaurant-tech بتدوّر على ناس فاهمة الـ ML وفاهمة تشغيل المطاعم في نفس الوقت.

**شركات مناسبة للمزيج دا (أمثلة):**
- **talabat** (تبع Delivery Hero): F&B وعربي وMENA
- **Foodics**: منصة POS وإدارة مطاعم سعودية
- منصات الـ delivery والـ q-commerce في مصر والخليج
- سلاسل المطاعم الكبيرة اللي عندها فرق data أو loyalty

**الوظايف المستهدفة (بالترتيب):**
1. Data Scientist / ML Engineer في فريق بيزنس (Customer Analytics، Marketing Science)
2. AI Solutions Consultant / Pre-Sales Engineer
3. Business Analyst / Analytics Consultant بيستخدم ML
4. AI Business Development في شركات بتتوسع في MENA
5. Freelance / Consulting تحت اسم **Salem**

---

## 2. المرحلة صفر: الأساس (أسبوع 1)

| المهمة | ليه |
|---|---|
| GitHub: نصلّح repo الـ churn، ونقفل أو نمسح الفاضي، ونغيّر اسم الحساب، ونعمل profile README. **التفاصيل في [GITHUB-REVIEW.md](GITHUB-REVIEW.md)** | اللينك هيبقى في الـ CV، وأي recruiter هيفتحه |
| Rebrand الموقع (المرحلة التالتة) | عشان اللينك يتحط في الـ CV |

---

## 3. المرحلة الأولى: المشاريع (أسابيع 2–6) ⭐ الأهم

**الفكرة:** 6 مشاريع **كلها في قطاع المطاعم والـ F&B**. كل مشروع بيغطي مهارة من قايمة سالم وكمان مشكلة حقيقية شافها في شغله. البورتفوليو كله كدا بيحكي قصة واحدة: *"ML للمطاعم"*.

| # | المشروع | مهارة الـ ML | سؤال البيزنس | داتا مقترحة |
|---|---|---|---|---|
| 1 | **Restaurant Demand Forecasting** (+ deployment على AWS) | Regression + XGBoost + MLOps | قد إيه أوردرات الأسبوع الجاي، عشان نقلل الهدر في الأكل؟ | Food Demand Forecasting (Kaggle) |
| 2 | **Menu Basket Analysis** | Association Rule Learning (Apriori / Eclat) | أنهي أصناف نعملها combos أو upsell؟ | Pizza Place Sales (Maven Analytics / Kaggle) |
| 3 | **Customer Segmentation (RFM)** | Clustering + PCA / Kernel PCA | إزاي نقسم العملاء لـ segments لبرنامج الـ loyalty؟ | داتا أوردرات (نفس داتا مشروع 2 أو delivery dataset) |
| 4 | **Churn / Repeat-Order Prediction** | Classification + Model Selection (k-Fold, Grid Search) + XGBoost | مين العميل اللي مش هيطلب تاني، ونكلّمه بعرض إمتى؟ | food-delivery customers dataset (Kaggle) |
| 5 | **Arabic + English Restaurant Review Sentiment** ⭐ | NLP + Deep Learning (TensorFlow) | الزباين بيشتكوا من إيه بالعربي والإنجليزي؟ | Yelp reviews + Arabic reviews dataset (Kaggle / Hugging Face) |
| 6 | **Promo Optimization** | Reinforcement Learning (UCB / Thompson Sampling) | أنهي عرض أو بانر نعرضه في الأبلكيشن؟ | محاكاة CTR |

**الأولوية:** نبدأ بـ 1 و2 و5 (3 إلى 4 أسابيع). 1 و2 الأقرب لخبرته في المطاعم، و5 هو الـ **signature project** لأن تحليل الآراء بالعربي ميزة في سوق MENA.

**☁️ AWS:** الـ CV فيه "MLOps on AWS"، يعني deployment وCI/CD وmonitoring. عشان الكلام دا يبقى عليه دليل، **مشروع 1 لازم يتعمله deploy فعلي على AWS**: endpoint، وpipeline CI/CD (زي GitHub Actions مثلًا)، وmonitoring، والـ README يشرح الـ architecture بـ diagram. دا بيفرّقه عن أغلب اللي خلصوا نفس الكورس.

**⚠️ مهم:** الكورس بيستخدم داتاسيتس مشهورة زي `Restaurant_Reviews.tsv` و`Market_Basket_Optimisation.csv` و`Mall_Customers.csv`، والـ recruiters عارفينها. **ماينفعش تتنشر زي ما هي كمشاريع.** نستخدم نفس التقنيات على داتا **مختلفة**، ونضيف تحليل بيزنس من عنده.

**كل repo لازم يبقى فيه:**
1. `README.md` بالترتيب دا: **Business Problem ← Data ← Approach ← Results (metric + أثر بيزنس بالأرقام) ← How to run**
2. Notebook نضيف
3. `requirements.txt`
4. Demo live لمشروع واحد على الأقل (Streamlit أو Hugging Face Spaces، أو AWS في مشروع 1)

**ليه بالشكل دا؟** الـ recruiter بيقرا الـ README مش الكود. والـ Results المكتوبة بلغة البيزنس هي اللي هتتحط في الـ CV كـ bullets فيها أرقام **حقيقية**.

---

## 4. المرحلة التانية: الـ CV

- الـ PDF: [`public/Salem_Yousry_Abdelaziz_CV.pdf`](../public/Salem_Yousry_Abdelaziz_CV.pdf)
- المصدر (HTML): [`docs/cv/salem-cv.html`](cv/salem-cv.html). أمر إعادة البناء مكتوب جوه الملف.

### القرارات وأسبابها

| القرار | ليه |
|---|---|
| شلنا كل ادعاءات الـ ML الوهمية من الـ CV القديم | أي سؤال تقني في الإنترفيو كان هيكشفها |
| وظيفة واحدة: **Business Development Consultant، قطاع المطاعم والـ F&B، 2022 – Present** | دا الواقع (4 سنين)، والخبرة دي **قيمة فعلًا** للوظايف المستهدفة |
| من غير أسماء جهات عمل، ومن غير بكالوريوس، ومن غير R، ومن غير LinkedIn | قرار سالم |
| الألماني مكتوب **Elementary (A2)**، ومش جزء من الـ summary | دا مستواه الحقيقي، وكتابته بصراحة أحسن من إنه يتسأل فيه |
| الـ summary بيقول "moving into ML engineering" بوضوح | الصراحة هنا نقطة قوة، لأنها بتفسر المزيج |
| كل مهارات الـ ML والمكتبات وMLOps on AWS مكتوبة بأسمائها الكاملة | دي الـ keywords اللي الـ ATS بيدوّر عليها |
| الشهادة برقمها قبل الـ Experience | هي الدليل الوحيد على الـ ML دلوقتي، وأي حد يقدر يتأكد منها |
| شلنا الصفات الفاضية ("top-tier"، "prestigious") | الـ recruiters وأدوات التقييم بيعتبروها buzzwords |
| صفحة واحدة، عمود واحد، من غير صورة ولا أيقونات ولا جداول | ATS-safe، واتأكدت إن النص بيتقري بالترتيب الصح |

### الإصدارات
- **v1:** نسخة صادقة من الـ CV القديم
- **v1.1:** قطاع المطاعم، والشهادة، والمكتبات
- **v1.2:** Kernel PCA وXGBoost وMLOps on AWS
- **v1.3 (الحالية):** وظيفة واحدة 4 سنين، والألماني A2، وشلنا الألماني من الـ summary
- **v2 (بعد أول 3 مشاريع):** قسم **Selected ML Projects** فوق الـ Experience (الهيكل جاهز كـ comment في الـ HTML)، ولينك البورتفوليو. **الصفحة قربت تتملي**، فهنختصر الـ summary لـ 4 سطور ونرجّع الـ Certification بعد الـ Experience.

### بخصوص الـ Rate 9/10
مفيش "rate عالمي" واحد. Resume Worded وEnhancv بيركزوا على الـ impact (أرقام) والـ brevity والـ style، وJobscan بيقيس التطابق مع إعلان وظيفة بعينه.

| المعيار | v1.3 (دلوقتي) | v2 (بعد المشاريع) |
|---|---|---|
| Format / ATS parsing | 9.5 | 9.5 |
| Clarity & Brevity | 9 | 9 |
| Keywords (ML + Libraries + MLOps + Business) | 9.5 | 9.5 |
| Impact (أرقام حقيقية) | 6 (رقم واحد: 40%) | 9 |
| دليل على المهارة التقنية | 6 (شهادة) | 9 |
| **تقدير إجمالي (رأيي)** | **~8** | **~9+** |

**بصراحة:** الـ 9 مش هتيجي من الصياغة. هتيجي من المرحلة الأولى. وكل رقم حقيقي زيادة من شغل المطاعم (عدد العملاء، أو حجم الصفقات، أو نسبة النمو) بيرفع خانة الـ Impact علطول.

---

## 5. المرحلة التالتة: الموقع (ممكن نبدأ فيها من دلوقتي)

### البراند
| العنصر | القرار |
|---|---|
| الاسم | **Salem** |
| الألوان | **نسيبها زي ما هي** (ذهبي `#c8a25a`، متطابق مع اللوجو) |
| اللوجو | `public/salem-logo.png` (شفاف): للـ navbar ومصدر الـ favicon |
| اللوجو على خلفية | `public/salem-logo.jpg`: للـ OG image والبانرات |
| الصورة | `public/salem.jpg`: للـ Hero والـ About |

### صفحة صفحة

| المكان | التغيير | ليه |
|---|---|---|
| `app/constants/data.js` | كل البيانات من `docs/01`–`06` | مصدر واحد للبيانات |
| `layout.tsx` | title وdescription وOG image | SEO، وشكل اللينك لما يتشارك |
| **Hero** (`Landing.jsx`) | الاسم والصورة والـ typing lines، وزرار "Download CV" | أول 5 ثواني |
| **Qualification** | نعيد تسميته **"Tech × Business"** ونكتب الـ positioning | دا اللي بيميّز سالم |
| **Skills** + `SkillsSphere` | 5 مجموعات: ML Techniques، وPython & Libraries، وMLOps on AWS، وBusiness، وLanguages | |
| **Services** (قسم جديد) | 4 كروت: Business Development & Consulting، وML for Restaurants & F&B، وTech ↔ Business Bridge، وMENA Market Growth | سالم بيقدّم consulting فعلًا، والقسم دا بيحوّل الزائر لعميل |
| **Experience** | الوظيفة الواحدة (2022 – Present) | |
| **Projects** | تصميم **case study** (Problem ← Approach ← Result) ولينك GitHub والـ demo. **نخفيه من الـ navbar لحد ما يبقى فيه 3 مشاريع** | صفحة فاضية أو فيها مشاريع أحمد أسوأ من مفيش صفحة |
| **About** | نشيل الـ Age، واللغات (عربي وإنجليزي وألماني A2)، والـ MBA 2023، والشهادة، والـ CV الجديد | |
| **Contact** | نشيل كارت LinkedIn، ونربط EmailJS بحساب سالم (`salemyousry@gmail.com`)، والمفاتيح تتحط في `.env.local` | EmailJS حاليًا **مش متظبط أصلًا** (`YOUR_SERVICE_ID`…)، فالفورم دايمًا بيقع على `mailto` لإيميل أحمد |
| **Footer / Navbar** | نشيل LinkedIn، وGitHub يتقري من `personalInfo` | |
| التنظيف | نمسح صور أحمد ومشاريعه وملف الـ CV القديم من `public/` | |

### ترتيب التنفيذ في الكود
1. `data.js` (البيانات كلها)
2. النصوص المكتوبة hardcoded تتحول تقرا من `data.js`
3. الصور واللوجو والـ favicon
4. قسم Services
5. إعادة تصميم Projects كـ case studies (تتملي من المرحلة الأولى)
6. Deploy على Vercel، ودومين (اختياري)

---

## 6. المرحلة الرابعة: الإطلاق

- Deploy على Vercel، ونحط اللينك في الـ CV وGitHub
- نسخة CV مخصصة لكل نوع وظيفة (ML Engineer / AI Consultant / BD)، ونجرّب كل نسخة على Jobscan مع إعلان حقيقي (الهدف 80% أو أكتر)

---

## 7. الجدول الزمني

| الأسبوع | المهام |
|---|---|
| 1 | تنظيف GitHub + rebrand الموقع (data والنصوص والصور) |
| 2–4 | مشاريع 1 و2 و5، ومشروع 1 بـ deployment على AWS |
| 5 | CV v2، وصفحة Projects تشتغل، وDeploy |
| 6–8 | مشاريع 3 و4 و6، وقسم Services، ونبدأ التقديم |

---

## 8. الأسئلة

### ✅ اتحسمت (2026-10-12)
- الخبرة: **4 سنين Business Development** في قطاع المطاعم والـ F&B
- رقم الـ **40%** حقيقي، والـ bullets مظبوطة
- الشهادة: **Machine Learning A-Z [2026]** من Udemy، Oct 12, 2026، 49.5 ساعة، `UC-4a4fad90-7b21-4dd7-b2ca-e6ed757c9feb`
- المكتبات: NumPy وpandas وMatplotlib وTensorFlow وscikit-learn وXGBoost
- مهارات إضافية: Kernel PCA، وMLOps على AWS (Deployment وCI/CD Pipelines وMonitoring)
- الألماني: **A2**
- **مش هيتكتب:** أسماء جهات العمل، والبكالوريوس، وR، وLinkedIn
- اللوجو: النسخة الشفافة (S)، ونسخة الـ A اتلغت. البراند اسمه **Salem**
- Footer: **"Made by Salem Yousry"**
- المشاريع مرفوعة على `salemyousry4-design`، ومراجعتها في [GITHUB-REVIEW.md](GITHUB-REVIEW.md)

### ❓ لسه
1. **حساب GitHub:** `salemyousry4-design` هو حساب سالم؟ وهل هيغيّر اسمه؟ (الـ CV لسه فيه `salemy` القديم)
2. **سنة البداية:** حسبت الـ 4 سنين من **2022**. صح؟
3. **إيميل EmailJS:** `salemyousry@gmail.com` ولا **`salemyousry4@gmail.com`**؟ (اسم حساب GitHub بيلمّح إن الـ 4 جزء من الإيميل). وهل هو نفس الإيميل اللي في الـ CV؟
4. **مفاتيح EmailJS**. محتاجين 3 قيم من لوحة EmailJS:
   - **Service ID:** من *Email Services* ← Add Service ← Gmail ← نربطه بـ `salemyousry@gmail.com`
   - **Template ID:** من *Email Templates* ← Create، وفيه المتغيرات `{{name}}` و`{{email}}` و`{{subject}}` و`{{message}}` (نفس أسماء حقول الفورم)
   - **Public Key:** من *Account* ← General

   هتتحط في `.env.local` كـ `NEXT_PUBLIC_EMAILJS_SERVICE_ID` و`NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` و`NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`، ولحد ما توصل الفورم هيفضل يفتح `mailto` لإيميل سالم.
