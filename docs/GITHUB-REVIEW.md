# مراجعة GitHub: `salemyousry4-design`

> اتعملت 2026-10-12. الحساب: https://github.com/salemyousry4-design (3 repos عامة)
> ⚠️ الـ CV حاليًا فيه `github.com/salemy`، ودا الحساب القديم اللي فيه HTML من 2021 بس.

## الحكم السريع

| Repo | الحالة | ينفع يتحط في الـ CV؟ |
|---|---|---|
| `Back-churn-prediction-in-ANN` | نوتبوك الكورس زي ما هو + تطبيق Streamlit **فيه bug** | ❌ مش دلوقتي. **دا الأقرب**، ومحتاج يوم أو اتنين شغل |
| `fox-ml` | تمرين Decision Tree من الكورس | ❌ يتصلّح أو يتقفل private |
| `cnn-for-cat-or-dog-classifier` | **فاضي** (مفيش ولا ملف) | ❌ يتكمل أو يتمسح |

**ليه "لأ" دلوقتي؟** أي recruiter فاتح الـ repo هيشوف نص الكورس ("Homework / Solution") وداتاسيت الكورس. ولو جرّب التطبيق هيطلع له توقعات غلط. ودا بيضر أكتر ما بينفع. بس **الأساس موجود**، والتصليح سريع.

---

## 1. `Back-churn-prediction-in-ANN` ⭐ نبدأ بيه

> ✅ **النسخة المصلّحة جاهزة** في [`handoff/bank-churn-prediction/`](handoff/bank-churn-prediction/)، وخطوات الرفع في [`handoff/HANDOFF.md`](handoff/HANDOFF.md).

### المشاكل

**🔴 1. التطبيق (`app.py`) بيدّي نتايج غلط.**
الموديل اتدرّب على 12 عمود بالترتيب دا، وبعد **StandardScaler**:

```
[France, Germany, Spain, CreditScore, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary]
```

لكن التطبيق بيبعت:

```python
[credit_score, age, balance, estimated_salary, num_of_products, 0, 0, 0, 0, 1, 0, 0]
```

يعني الـ Credit Score داخل مكان "France"، والسن مكان "Germany"، وكدا. وكمان الأرقام **مش متعمل لها scaling**. النتيجة إن أي توقع من التطبيق ملوش معنى.

**الحل:** نحفظ الـ preprocessing مع الموديل (`ColumnTransformer` + `StandardScaler` في `joblib`)، والتطبيق ياخد **العشر حقول كلها** (Geography وGender وTenure وHasCrCard وIsActiveMember…) ويطبق نفس الـ transform قبل الـ predict.

**🔴 2. النوتبوك هو نسخة الكورس الجاهزة.**
الـ outputs بتقول `tf.__version__ = '2.2.0'` (سنة 2020)، وفيه نص "Homework / Solution" بتاع الكورس. يعني مش هو اللي شغّله.
**الحل:** يشيل نص الكورس، ويشغّل النوتبوك بنفسه، ويضيف شغل من عنده (النقطة 3).

**🟠 3. الـ Accuracy خادعة، ودي فرصة سالم يبيّن فيها عقلية البيزنس.**
- Accuracy = **86%**، بس لو الموديل قال "محدش هيمشي" خالص هيجيب **79.75%** (1595 من 2000).
- الموديل بيمسك **51% بس** من العملاء اللي فعلًا مشيوا (Recall = 205 / 405).
- **الإضافة اللي تفرّقه عن أي حد خلص الكورس:** يجرّب `class_weight`، ويظبط الـ threshold (0.3 بدل 0.5)، ويقارن ANN مع XGBoost، ويكتب جدول زي كدا: *"لو عرضنا على أعلى 20% risk، هنحتفظ بـ X% من اللي كانوا هيمشوا بتكلفة Y"*. **دا الـ bullet اللي هيتحط في الـ CV.**

**🟡 4. نظافة الـ repo:**

| المشكلة | الحل |
|---|---|
| الاسم `Back-churn…` (غلطة إملائية) | `bank-churn-prediction` |
| مفيش README | README: Business Problem ← Data ← Approach ← Results ← Demo ← How to run |
| `requirement.txt` متسجل بـ UTF-16، وفيه `pip freeze` كامل (debugpy وgit-bash و**keras-nightly dev build**) | `requirements.txt` (بـ s) وفيه المطلوب بس: `streamlit` و`tensorflow` و`scikit-learn` و`pandas` و`numpy` و`joblib` |
| `.DS_Store` موجود في الـ repo | يتمسح، ونضيف `.gitignore` |
| الداتا من الكورس (`Churn_Modelling.csv`) | مقبول **لو** الـ README بيذكر المصدر وفيه شغل إضافي (النقطة 3) |

**🟢 5. Deploy:** على Streamlit Community Cloud (مجاني). اللينك يتحط في الـ README والـ CV والبورتفوليو.

---

## 2. `fox-ml`

| المشكلة | التفاصيل |
|---|---|
| الداتا مش في الـ repo | بيقرا من `C:\Users\Dell\Desktop\...\Simple Linear Regression\Data.csv`، فمحدش يقدر يشغّله |
| اسم الملف مضلل | المسار بيقول "Linear Regression"، لكن الداتا فعليًا Breast Cancer (classes 2/4) |
| الـ ID داخل كـ feature | العمود الأول (`1000025`) رقم عيّنة، ومينفعش يدخل في الموديل |
| التوقع الأخير غلط | `sample_data` داخلة من غير `sc.transform`، والموديل متدرب على داتا scaled |
| رسالة غلط | `print("Model saved as predict.py")` والملف اسمه `.pkl` |
| الاسم `fox-ml` | مش بيقول حاجة عن المشروع |

**القرار المقترح:** يا إما يتقفل **private**، يا إما يتحول لـ `model-selection-classification`: يقارن 6 classifiers بـ k-Fold وGrid Search، وفيه README. ودا بيغطي مهارة "Model Selection" اللي في الـ CV.

---

## 3. `cnn-for-cat-or-dog-classifier`

فاضي. repo فاضي على البروفايل شكله وحش. **يتمسح أو يتقفل private لحد ما يخلص.**

---

## 4. الحساب نفسه

| البند | المقترح | ليه |
|---|---|---|
| اسم المستخدم `salemyousry4-design` | نغيّره لاسم نضيف زي `salem-yousry` أو `salemyousry-ml` (GitHub بيعمل redirect تلقائي من الاسم القديم) | كلمة "design" بتلخبط في بروفايل ML |
| الحساب القديم `salemy` | يتمسح أو يتقفل، ومش هيتحط في الـ CV | |
| البروفايل | صورة (`salem.jpg`)، واسم، وbio: *"ML Engineer · Business Development · MBA"*، وprofile README | أول حاجة الـ recruiter بيشوفها |
| Pinned repos | الـ 3 أحسن مشاريع بس | |

---

## 5. الترتيب المقترح

1. **churn**: تصليح التطبيق، وthreshold والمقارنة، وREADME، وDeploy (يوم أو اتنين)، وبعدها **يدخل الـ CV كمشروع أول**
2. **CNN**: يكمّله (Cats vs Dogs بـ TensorFlow)، بنفس الأسلوب: README وتحليل الأخطاء
3. **fox-ml**: يتحول لمقارنة Model Selection أو يتقفل
4. بعدهم مشاريع المطاعم من [PLAN.md](PLAN.md) §3، ودي اللي هتفرّقه فعلًا
