import { createClient } from 'next-sanity'
import * as dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  token: process.env.SANITY_API_TOKEN!,
  useCdn: false,
})

const symptom = {
  _id: 'symptom-diabetes-symptoms',
  _type: 'symptom',
  title: 'Diabetes Symptoms (Madhumeh Ke Lakshan)',
  hindiName: 'Madhumeh Ke Lakshan / Sugar Ke Lakshan',
  slug: { _type: 'slug', current: 'diabetes-symptoms' },
  bodySystem: 'General',
  shortDescription: 'Baar baar pyaas, baar baar peshaab, thakaan, aur ghaaav ka dheere theek hona — ye diabetes ke early signals ho sakte hain jo saalon tak notice nahi hote.',
  metaTitle: 'Diabetes Symptoms in Hindi — Karan aur Homeopathy | Homeopedia',
  metaDescription: 'Diabetes ke lakshan (diabetes symptoms) ke karan, severity aur ghar pe safe steps — simple Hinglish mein. Verified info, doctor-reviewed.',
  isAvailable: true,
  reviewDate: 'May 2026',

  heroText: `Baar baar paani peene ki pyaas, baar baar bathroom jaana, thakaan jo kisi kaam ke baad nahi hoti — ye sab achanak shuru ho jaate hain aur aap sochte hain, "ye kya ho gaya mujhe?"

Ye diabetes ke early symptoms ho sakte hain. Body mein blood sugar (glucose) ka level zyada ho jaata hai jab pancreas poori insulin nahi bana pata — ya body usse theek se use nahi kar pati. Is imbalance ka asar poore sharir pe hota hai — aankhon se lekar pair ki nerves tak.

Ye symptoms dheere dheere aate hain — isliye bahut log saalon tak notice nahi karte. India abhi duniya ka "diabetes capital" ban chuka hai. International Diabetes Federation (IDF) ke mutabiq, India mein takriban 10 crore se zyada log diabetes se peedit hain — aur utne hi log prediabetes mein hain jinhein abhi pata bhi nahi.

Ye page aapko 2 minute mein batayega: aapke symptoms serious hain kya, ghar pe kya karna chahiye, aur aage ki sahi step kya hai.`,

  severityScale: {
    level1: {
      label: 'Ghar Pe Observe Karo — Doctor Abhi Zaruri Nahi',
      signs: [
        'Thoda zyada pyaas lag rahi hai — ek do hafte se',
        'Raat ko 1-2 baar bathroom jaana pad raha hai',
        'Halki thakaan jo rest ke baad theek ho jaati hai',
        'Halka dhundhlaapan aankhon mein — aankhon pe zor dene ke baad',
        'Bhook thodi zyada lag rahi hai — koi aur sign nahi ke saath',
      ],
    },
    level2: {
      label: 'Is Hafte Doctor Se Milein',
      signs: [
        'Bahut zyada pyaas — din mein 4-5 liter se zyada paani peena',
        'Baar baar peshaab — raat ko 3 ya zyada baar uthna',
        'Wajan bina diet change ke tezi se gir raha hai',
        'Ghaaav ya cuts jo 2 hafte mein bhi theek nahi ho rahe',
        'Pair ya haath mein jhanjhnahat, numbness, ya jalan',
        'Haath-pair mein burning sensation raat ko',
      ],
    },
    level3: {
      label: 'Turant Hospital Jaao',
      signs: [
        'Aankhen dhundhla kar rahi hain aur saath mein sar dard tez hai',
        'Ulti, pet dard, aur saans fruity ya sweet smell wali aa rahi hai — ye diabetic ketoacidosis ka sign ho sakta hai',
        'Behoshi aa rahi hai ya aap confuse ho rahe hain',
        'Pair mein ghaaav kaala pad gaya hai ya badbu aa rahi hai',
        'Blood sugar machine pe 400 se zyada ya 50 se kam reading',
      ],
    },
  },

  timeline: [
    {
      duration: '1 Se 2 Hafte',
      label: 'Nayi Takleef',
      description: 'Agar ye symptoms abhi abhi shuru hue hain — especially Type 1 diabetes mein symptoms tezi se aate hain aur serious ho sakte hain. Diabetes ke initial symptoms ko kabhi "thakaan hai, theek ho jaayega" samajh ke ignore mat karo. Is hafte blood sugar fasting test zaroor karwao. Agar symptoms tez hain to Level 3 guide follow karo.',
    },
    {
      duration: '2 Hafte Se 3 Mahine',
      label: 'Chalti Aa Rahi',
      description: 'Ye typically Type 2 diabetes ka pattern hai — dheere dheere badhta hai. Is stage mein body already adjust kar rahi hoti hai high sugar ke saath — isliye symptoms "manage" lagte hain lekin andar damage hota rehta hai. Ye silence dangerous hai. Is hafte HbA1c test aur fasting glucose test dono karwao — doctor se detailed baat karo.',
    },
    {
      duration: '3 Mahine Ya Zyada',
      label: 'Purani Problem',
      description: 'Agar symptoms mahino se hain aur abhi tak diagnosed nahi hua — ya diagnosis hua hai lekin control nahi ho raha — to ye chronic mismanagement hai. Complications shuru hone ka risk high hai: nerves (neuropathy), aankhein (retinopathy), kidneys (nephropathy). Ek comprehensive diabetologist ya endocrinologist se milein. Homeopathy is stage mein complementary role mein effectively kaam karti hai.',
    },
  ],

  lifestyleCauses: [
    {
      title: 'Refined Carbs aur Sugar Ki Zyada Matra',
      description: 'Jab hum bahut zyada refined carbohydrates khate hain — maida, white rice, meetha, cold drinks — blood mein glucose tezi se badh jaata hai. Pancreas zyada insulin release karta hai response mein. Saalon tak yahi pattern chale to pancreatic beta cells thak jaati hain. Ek waqt aata hai jab insulin production ya sensitivity dono fail hone lagte hain aur blood sugar chronically elevated rehne lagta hai.',
      recognition: 'Khana khane ke 1-2 ghante baad neend ya thakaan aana, meetha khane ki craving baar baar — ye insulin resistance ke early signs hain.',
    },
    {
      title: 'Sedentary Lifestyle (Koi Physical Activity Nahi)',
      description: 'Muscles glucose ka sabse bada consumer hain body mein. Jab aap physically active hain, muscles blood glucose ko directly fuel ki tarah use karti hain — insulin ki zarurat bhi kam hoti hai. Jab log ghanton baithte hain — WFH, desk jobs, TV — to muscles inactive rehti hain. Glucose blood mein accumulate hota rehta hai aur slowly insulin resistance develop hoti hai.',
      recognition: 'Stairs se chadh ke sans phool jaana, din mein 6-8 ghante se zyada baithe rehna — ye warning pattern hai.',
    },
    {
      title: 'Chronic Stress aur Neend Ki Kami',
      description: 'Stress hormones — cortisol aur adrenaline — directly blood sugar badhate hain. Emergency mein body ko energy chahiye hoti hai — isliye wo liver se glucose release karti hai. Agar stress chronic hai to ye glucose spike baar baar hota hai. Saath mein, kam neend (6 ghante se kam) insulin sensitivity 25-30% tak gira deti hai.',
      recognition: 'Tension mein meetha khane ki craving aana, subah uthne ke baad bhi thakaan — ye cortisol-glucose cycle ka sign hai.',
    },
    {
      title: 'Family History aur Genetic Predisposition',
      description: 'Agar parents ya siblings mein diabetes hai to risk 2-3 guna zyada hai. Genetic factors insulin production aur sensitivity dono ko affect karte hain. Lekin genetics sirf "loaded gun" hoti hai — lifestyle us gun ko fire karta hai.',
      recognition: 'Pehle degree relative mein diabetes + aap ka BMI 25 se zyada + age 35+ — ye high-risk combination hai.',
    },
  ],

  medicalCauses: [
    {
      diseaseName: 'Hypothyroidism (Thyroid Ki Kami)',
      diseaseHindiName: 'Thyroid Gland Ki Kami',
      mechanism: 'Hypothyroidism mein metabolism slow hota hai — thakaan, wajan badhna, aur blood sugar regulation affect hoti hai. Dono conditions aksar saath milti hain — hypothyroidism insulin resistance badhata hai. Diabetes control mushkil ho jaata hai agar thyroid treat na kiya jaaye.',
      recognition: 'Agar diabetes symptoms ke saath skin dry ho, baal girein, aur thand zyada lage — thyroid check zaroori hai.',
    },
    {
      diseaseName: 'PCOS (Polycystic Ovary Syndrome)',
      diseaseHindiName: 'Bahu-Dhari Andaashay / Mahwari Ki Gadbadi',
      mechanism: 'PCOS mein insulin resistance ek core feature hai — jo directly diabetes ka gateway hai. PCOS wali mahilaon mein Type 2 diabetes ka risk 5-7 guna zyada hota hai. Gestational diabetes bhi PCOS se connected hai.',
      recognition: 'Agar diabetes symptoms ke saath irregular periods, acne, aur weight gain ho — PCOS evaluate karna chahiye.',
    },
    {
      diseaseName: 'Chronic Kidney Disease (CKD)',
      diseaseHindiName: 'Gurhde Ki Bimari',
      mechanism: 'Diabetes CKD ka #1 karan hai duniyabhar mein — aur CKD bhi diabetes ke symptoms ko aur complex banata hai. Kidneys blood sugar filter aur balance maintain karti hain. Agar kidneys fail hone lagin to blood sugar patterns unpredictable ho jaate hain.',
      recognition: 'Paon aur aankhon ke neeche soojan, urine mein jhag, blood pressure high — ye CKD ke early warning signs hain.',
    },
    {
      diseaseName: 'Diabetic Neuropathy',
      diseaseHindiName: 'Madhumeh Ke Kaaran Naso Ka Nuksan',
      mechanism: 'Chronically high blood sugar peripheral nerves ko damage karti hai. Pair aur haath mein jalan, jhanjhnahat, numbness — ye sab neuropathy ke signature symptoms hain. India mein diabetic neuropathy ke cases tezi se badh rahe hain.',
      recognition: 'Raat ko pair mein burning sensation jo baithne ya laitne pe zyada ho — ye diabetic neuropathy ka characteristic pattern hai.',
    },
    {
      diseaseName: 'Diabetic Retinopathy',
      diseaseHindiName: 'Madhumeh Se Aankhon Ka Nuksan',
      mechanism: 'Long-standing high blood sugar aankhon ki retina ki blood vessels ko damage karti hai. Shuruaat mein dhundhlaapan, rang dekhne mein dikkat — baad mein blindness bhi ho sakti hai. India mein preventable blindness ka ek bada karan diabetic retinopathy hi hai.',
      recognition: 'Padhte waqt letters blur hona, light ke around halos dikhna — diabetes mein ye aankhon ke symptoms ignore mat karo.',
    },
  ],

  redFlags: [
    'Diabetic Ketoacidosis (DKA): Jab body insulin bilkul nahi bana pati aur fat tod ke fuel use karne lagti hai — toxic ketones blood mein barhte hain. Sweet/fruity breath, ulti, aur confusion saath mein ho to turant hospital jaao — ye life-threatening hai.',
    'Hyperosmolar Hyperglycemic State (HHS): Type 2 mein blood sugar 600+ tak pahunch sakta hai — extreme dehydration, confusion, aur seizures. Agar koi elderly ya bedridden patient suddenly behosh ho to iska check hona zaroori hai.',
    'Gestational Diabetes Complications: Pregnancy mein uncontrolled blood sugar — baby ke size se lekar stillbirth tak ka risk. Agar pregnancy mein diabetes symptoms hain to bilkul wait mat karo. Turant gynecologist se milein.',
  ],

  homeSteps: [
    {
      step: 'Blood Sugar Monitor Karo — Ghar Pe Glucometer Rakho',
      reason: 'Ghar pe regular monitoring se aapko pata chalta hai ki kab sugar spike hoti hai. Ye data doctor ko bhi useful hota hai — guessing se behtar hai numbers jaanna. Fasting aur post-meal dono readings lena sikhein.',
    },
    {
      step: 'Har Ghante Khadi Ho Jao — 5 Minute Chhota Walk',
      reason: 'Muscles active hone se blood glucose directly use hoti hai — bina insulin ke bhi. Office mein bhi ek alarm set kar sakte hain har 45-60 minute pe. Ye simple habit blood sugar spikes ko naturally reduce karti hai.',
    },
    {
      step: 'Paani Peete Rehna — Dehydration Avoid Karo',
      reason: 'Zyada blood sugar se body paani baahir nikaalti hai frequent urination se — dehydration aur sugar concentration dono badhti hai. Thodi thodi der mein paani peena is chakkar ko todta hai. Meethe drinks bilkul avoid karo.',
    },
    {
      step: 'Neend Poori Karo — 7-8 Ghante',
      reason: 'Neend ki kami directly insulin resistance badhati hai — agle din blood sugar control mushkil ho jaata hai. Raat 10-11 tak sone ki koshish karo aur screen time one hour pehle band karo.',
    },
    {
      step: 'Stress Management — Deep Breathing Ya Meditation',
      reason: 'Cortisol (stress hormone) blood sugar tezi se badhata hai. Roz 10-15 minute anulom vilom ya guided meditation — ye clinical trials mein bhi blood sugar improvement se joda gaya hai. Ye blood sugar ka ek under-rated driver hai jo log ignore karte hain.',
    },
  ],

  homeopathyAngle1: 'Diabetes ke symptoms ka naam ek hai — lekin presentation har insaan mein alag hoti hai. Kisi ko bahut pyaas lagti hai, kisi ko zyada nahi. Kisi ke pair mein jalan hoti hai raat ko, kisi ko aankhein affect hoti hain pehle. Kisi ka wajan girta hai, kisi mein badh jaata hai. Homeopathy mein "diabetes symptoms" ek label nahi — aapka poora pattern dekha jaata hai. Symptoms kab badhte hain, kya khaane ke baad, raat mein, ya stress mein — ye sab treatment decide karta hai.',

  homeopathyAngle2: 'Baar baar aane wali thakaan, recurrent infections ya wound healing ki takleef — ye aksar deeper metabolic imbalance ke signals hote hain. Homeopathy mein sirf immediate symptom band karna goal nahi hota — jo underlying dysregulation hai usse address kiya jaata hai. Waqt ke saath symptoms ki intensity aur frequency dono mein difference aata hai. Research is area mein limited hai aur results individual hote hain — lekin jo patients holistic approach lete hain unka overall wellbeing aur quality of life better hoti hai.',

  homeopathyAngle3: 'Diabetes mein kai baar multiple medications chal rahi hoti hain. Homeopathy ki highly diluted medicines practically side-effect free hain — aur conventional diabetes treatment ke saath saath safely use ho sakti hain bina interaction ke. Diabetic neuropathy, chronic fatigue, ya sleep disturbance jaise accompanying symptoms mein ye complementary role mein especially helpful rahi hai.',

  homeopathyIsFor: [
    'Aap apne diabetes management mein additional support chahte hain conventional treatment ke saath',
    'Diabetic neuropathy, fatigue, ya sleep issues jaise associated symptoms mein natural complementary approach chahiye',
    'Side-effect free option prefer karte hain — especially elderly patients ya jinke saath multiple medicines chal rahi hain',
  ],

  homeopathyNotFor: [
    'Blood sugar 400+ hai ya DKA ke signs hain — pehle emergency room jaao, homeopathy baad mein shuru karo',
    'Insulin-dependent Type 1 diabetic hain aur insulin band karna soch rahe hain — ye dangerous hai, kabhi mat karo',
    'Active diabetic foot ulcer hai aur gangrene ke signs hain — surgeon se pehle milein',
  ],

  linkedDiseaseCards: [
    {
      diseaseName: 'Type 2 Diabetes',
      diseaseHindiName: 'Madhumeh / Sugar Ki Bimari',
      diseaseSlug: '',
      isAvailable: false,
    },
    {
      diseaseName: 'Diabetic Neuropathy',
      diseaseHindiName: 'Naso Ka Nuksan',
      diseaseSlug: '',
      isAvailable: false,
    },
    {
      diseaseName: 'Diabetic Retinopathy',
      diseaseHindiName: 'Aankhon Ka Prabhavit Hona',
      diseaseSlug: '',
      isAvailable: false,
    },
    {
      diseaseName: 'PCOS (Polycystic Ovary Syndrome)',
      diseaseHindiName: 'PCOS / Ovary Ki Bimari',
      diseaseSlug: 'pcod',
      isAvailable: true,
    },
    {
      diseaseName: 'Hypothyroidism',
      diseaseHindiName: 'Thyroid Ki Kami',
      diseaseSlug: 'thyroid',
      isAvailable: true,
    },
  ],

  homeopathyDiseaseLinks: [
    { _type: 'reference', _ref: 'disease-thyroid' },
    { _type: 'reference', _ref: 'disease-pcod' },
    { _type: 'reference', _ref: 'disease-prediabetes' },
  ],

  faqs: [
    {
      question: 'Diabetes ke symptoms kya hote hain — kab doctor ke paas jaana chahiye?',
      answer: 'Diabetes ke common symptoms hain — baar baar pyaas lagana, baar baar peshaab aana, thakaan, wajan ka tezi se girna, ghaaav ka dheere theek hona, aur haath-pair mein jhanjhnahat ya jalan. Ghar pe tab tak observe kar sakte hain jab symptoms halke hon — lekin observe ka matlab wait karna nahi, test karwana hai. Is hafte fasting blood sugar test zaroor karwao. Doctor ke paas turant jaao agar: ulti ke saath sweet smell wali saans, extreme confusion, pair ka ghaaav kaala padna, ya blood sugar 400+.',
    },
    {
      question: 'Diabetes ke symptoms kitne dino mein dikhte hain?',
      answer: 'Ye diabetes ke type pe depend karta hai. Type 1 Diabetes mein symptoms tezi se aate hain — kuch din ya hafte mein intense ho sakte hain, zyattar bacchon ya young adults mein. Type 2 Diabetes mein symptoms bahut dheere dheere develop hote hain — kai baar saalon tak pata hi nahi chalta. Isi wajah se India mein millions log "undiagnosed diabetic" hain. Prediabetes mein to practically koi symptom hi nahi hota — sirf blood test se pata chalta hai. Isliye 35 ke baad har saal fasting glucose test routine mein daalo. Agar do hafte se zyada symptoms hain to wait mat karo.',
    },
    {
      question: 'Diabetes ke symptoms ka sabse common karan kya hai?',
      answer: 'Diabetes symptoms ka sabse common karan hai — cells ka insulin ke signals ko theek se na sun-na. Ise "insulin resistance" kehte hain. Is wajah se blood mein glucose accumulate hota hai — aur body usse baahir nikaalti hai baar baar peshaab ke through. Isliye pyaas lagti hai, wajan girta hai, aur energy nahi rehti. Insulin resistance kyon hoti hai — zyada refined food, physical inactivity, chronic stress, aur genetic predisposition — ye char sabse badi wajahein hain. Type 1 mein karan alag hai — immune system khud pancreas ki insulin-producing cells ko destroy kar deta hai.',
    },
    {
      question: 'Kya diabetes symptoms ghar pe treat ho sakte hain?',
      answer: 'Diabetes symptoms ko "ghar pe treat" karna — is framing se bacho. Diabetes ek medical condition hai jo diagnosis aur monitoring maangti hai. Jo ghar pe kar sakte hain woh management support hai: regular blood sugar monitoring glucometer se, har ghante chhoti movement ya walk, hydration maintain karna, neend poori karna, stress management. Lekin in sab ke saath doctor ki guidance aur proper medication parallel chal-ni chahiye — especially agar HbA1c 6.5% se zyada hai. Delay mat karo — diabetes ki complications khamoshi se develop hoti hain.',
    },
    {
      question: 'Kya homeopathy diabetes symptoms mein kaam karta hai?',
      answer: 'Homeopathy diabetes symptoms ke management mein — especially associated complaints mein — complementary role mein helpful rahi hai. Diabetic neuropathy ke symptoms (jhanjhnahat, jalan, numbness), chronic fatigue, aur sleep disturbances — in mein homeopathic approach response deta hai. Important: homeopathy diabetes ka "cure" nahi hai. Jo realistic hai: sahi constitutional treatment se overall energy, sleep quality, aur neuropathic symptoms mein improvement aati hai. Blood sugar monitoring aur conventional treatment ko parallel chaalte rehna zaroori hai.',
    },
    {
      question: 'Diabetes symptoms mein kaunsa test karwana chahiye?',
      answer: 'Diabetes ke diagnosis ke liye commonly ye tests kiye jaate hain: Fasting Blood Sugar (FBS) — subah khaane se pehle, 126 mg/dL ya zyada = diabetes; HbA1c — pichhle 3 mahine ka average blood sugar, 6.5% ya zyada = diabetes (ye sabse reliable test hai); Postprandial Blood Sugar (PPBS) — khaane ke 2 ghante baad, 200 mg/dL ya zyada = diabetes. Complications check ke liye: urine microalbumin (kidneys), lipid profile, eye exam, aur foot examination — ye sab annual routine mein honi chahiye. Doctor se consult karein ki aapke case mein kaunse tests zaruri hain.',
    },
    {
      question: 'Bacchon mein diabetes ke symptoms kya hote hain?',
      answer: 'Bacchon mein diabetes — zyatar Type 1 — symptoms tezi se aate hain aur serious ho sakte hain. Warning signs jo parents notice karein: achanak bahut zyada pyaas aur baar baar bathroom jaana, unexplained wajan girna bina diet change ke, zyada thakaan, bistar mein peshaab karna (pehle band ho gaya tha), dhundhli nazar, ya fruit-smell wali saans (emergency sign — DKA). Bacchon mein Type 1 diabetes ek autoimmune condition hai — isme lifestyle se koi relation nahi hota. Agar bacche mein ye symptoms dikh rahe hain — bilkul wait mat karo. Aaj hi pediatrician se milein.',
    },
    {
      question: 'Pregnancy mein diabetes ke symptoms normal hain kya?',
      answer: 'Pregnancy mein diabetes — ise Gestational Diabetes (GDM) kehte hain — typically 24-28 weeks ke beech develop hoti hai. Symptoms mein zyada pyaas, zyada peshaab, aur thakaan ho sakte hain — lekin ye symptoms pregnancy mein waise bhi common hain, isliye akele symptoms se GDM diagnose nahi hota, test zaroori hai. Gestational diabetes mein uncontrolled blood sugar se baby ke size mein abnormal badhna, preterm birth, aur baby ko low blood sugar birth pe — ye risks hain. Agar pehli pregnancy mein GDM hua tha to agle mein bhi risk zyada hai. Doctor ke under regular monitoring mandatory hai.',
    },
    {
      question: 'Fast ya vrat ke baad diabetes ke symptoms kyun badhte hain?',
      answer: 'Fasting ke dauran blood sugar pehle girta hai — phir body liver se glucose release karti hai. Diabetic patients mein yeh process dysregulated hoti hai — sugar unpredictably gir ya badh sakti hai. Lamba fast mein blood sugar bahut neeche girti hai — chakkar, paseena, haath kaanpna (hypoglycemia). Fast tod ke ek saath zyada khana khane se blood sugar tezi se spike hoti hai. Diabetic patients ke liye safer approach: chote chote meals ki routine, ya doctor se specific vrat guidance lo apni medication ke hisaab se adjust karke. Dharmik sentiment samajh aata hai — lekin health risk ke saath balance zaroori hai.',
    },
    {
      question: 'Diabetes ke symptoms baar baar kyun aate hain — control kyun nahi hota?',
      answer: 'Diabetes symptoms baar baar isliye feel hote hain kyunki blood sugar ka level kabhi zyada hota hai, kabhi normal — ye fluctuation symptoms create karta hai. Common reasons: medication time pe nahi li, khaane ke pattern irregular hain, sleep ya stress management poor hai, ya thyroid ya other co-condition manage nahi ho rahi. Ek aur reason: "controlled diabetes" ke baad bhi complications dheere dheere hoti rehti hain. Neuropathy ke symptoms baar baar is wajah se aate hain. Homeopathy is repeated symptom pattern ko address karne mein — constitutional approach se — helpful hoti hai.',
    },
    {
      question: 'Diabetes symptoms se hamesha ke liye kaise chutkara milega?',
      answer: '"Permanent cure" ka vaada koi bhi system honestly nahi kar sakta diabetes ke liye. Jo realistic hai: Type 2 diabetes mein lifestyle changes se remission possible hai — significant weight loss, regular exercise, aur diet overhaul se kai patients medication-free ho chuke hain. Ye "cure" nahi, remission hai — close monitoring zaruri rehti hai. Type 1 diabetes mein abhi koi cure nahi hai — insulin management lifelong rehta hai. Symptoms ki intensity aur frequency dono control ho sakti hain. Homeopathy is journey mein — especially neuropathy, fatigue, aur sleep ke liye — complementary support de sakti hai.',
    },
    {
      question: 'Diabetes symptoms mein exercise kitni safe hai?',
      answer: 'Exercise diabetes management ka ek sabse powerful tool hai — lekin kuch precautions ke saath. Exercise blood sugar immediately girti hai — muscles glucose directly use karti hain. Precautions: exercise karne se pehle blood sugar check karo — 100 se neeche ho to pehle kuch khao; exercise ke baad bhi check karo especially insulin lene wale; pair ki care — comfortable shoes pehno, blisters ignore mat karo. Shuruat ke liye: rozana 30 minute brisk walking — ye beginners ke liye safest aur effective hai. Koi bhi new exercise routine shuru karte waqt apne doctor se ek baar discuss karo.',
    },
  ],

  relatedSymptoms: [
    { _type: 'reference', _ref: 'symptom-numbness-tingling' },
    { _type: 'reference', _ref: 'symptom-weakness-fatigue' },
    { _type: 'reference', _ref: 'symptom-weight-gain' },
    { _type: 'reference', _ref: 'symptom-thyroid-symptoms' },
  ],

  quickFacts: [
    'Diabetes ke early symptoms — zyada pyaas, baar baar peshaab, aur thakaan — Type 2 mein saalon tak unnoticed rehte hain.',
    'India mein 10 crore se zyada log diabetes se peedit hain (IDF 2023).',
    'Sweet smell wali saans + ulti + confusion — ye diabetic emergency hai. Turant hospital jaao.',
  ],

  sources: [
    { label: 'International Diabetes Federation (IDF) — Diabetes Atlas, 10th Edition | 2023', url: 'https://www.diabetesatlas.org/' },
    { label: 'Mayo Clinic — Diabetes: Symptoms & Causes | 2024', url: 'https://www.mayoclinic.org/diseases-conditions/diabetes/symptoms-causes/syc-20371444' },
    { label: 'World Health Organization (WHO) — Diabetes Fact Sheet | 2023', url: 'https://www.who.int/news-room/fact-sheets/detail/diabetes' },
    { label: 'NCBI / PubMed — Lifestyle Interventions in Type 2 Diabetes: A Review | 2022', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8950183/' },
  ],
}

async function seed() {
  console.log('Seeding diabetes-symptoms...')
  const result = await client.createOrReplace(symptom)
  console.log('Done:', result._id)
}

seed().catch(console.error)
