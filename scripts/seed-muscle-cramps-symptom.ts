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
  _id: 'symptom-muscle-cramps',
  _type: 'symptom',
  title: 'Muscle Cramps (Maansapeshi Mein Kheench)',
  hindiName: 'Maansapeshi Mein Kheench / Taan (Patta Marna)',
  slug: { _type: 'slug', current: 'muscle-cramps' },
  bodySystem: 'Musculoskeletal',
  shortDescription: 'Raat ko achanak paon mein tez kheench ya workout ke beech calf mein cramp — dehydration, electrolyte kami, ya kisi underlying condition ka signal ho sakta hai.',
  metaTitle: 'Muscle Cramps in Hindi — Karan, Ilaaj aur Homeopathy | HomeoPedia.in',
  metaDescription: 'Muscle cramps (maansapeshi mein kheench) ke karan, severity aur ghar pe safe steps — simple Hinglish mein. Verified info, Dr. Shadab reviewed.',
  reviewDate: 'May 2026',

  heroText: `Raat ko so rahe hain — achanak paon mein ek tez kheench aati hai aur neend uchad jaati hai. Ya workout ke beech mein calf ya thigh mein ek aisa dard hota hai ki pair hila bhi nahi sakte. Muscle cramps — yaani maansapeshi mein achanak kheench ya taan — ek bahut common aur bohot hi discomforting experience hai.

Is waqt body mein kya ho raha hota hai: muscle ka ek hissa apne aap contract (sikodhna) ho jaata hai aur relax nahi karta. Ye involuntary contraction kuch seconds se lekar kuch minutes tak reh sakta hai — aur iske baad aksar wo jagah sore ya dard karti rehti hai.

Muscle cramps India mein bohut common hain — khaaskar unme jo physically active hain, jo bade shehron mein garm mausam mein kaam karte hain, aur jo pregnant hain. Globally estimated 60% adults ko apni zindagi mein kisi na kisi point pe muscle cramps ka anubhav hota hai. Aksar ye harmless hote hain — lekin baar baar ho rahe hain to wajah samajhna zaroori hai.`,

  severityScale: {
    level1: {
      label: 'Ghar Pe Manage Karo',
      signs: [
        'Cramp 1-2 minute mein khud chala jaata hai stretch ya massage se',
        'Exercise ya bhaari physical activity ke baad aaya hai',
        'Garam mausam mein ya paani kam peene ke baad hua hai',
        'Raat ko sone ke waqt paon mein ek baar aaya — subah theek',
        'Koi numbness ya swelling nahi hai',
        'Pehle bhi aisa hua hai aur khud theek hua tha',
      ],
    },
    level2: {
      label: 'Is Hafte Doctor Se Milein',
      signs: [
        'Cramps baar baar ho rahe hain — hafte mein 3-4 baar ya zyada',
        'Raat ko neend kharab ho rahi hai cramps ki wajah se',
        'Cramp ke baad bhi wo muscle din bhar sore aur tight rehti hai',
        'Kisi ek jagah baar baar cramp aa raha hai — jaise hamesha same calf mein',
        'Pregnancy ke dauran aa rahe hain cramps',
        'Koi naya supplement ya medicine shuru ki hai aur tab se ho rahe hain',
      ],
    },
    level3: {
      label: 'Turant Hospital Jaao',
      signs: [
        'Cramp ke saath pair ya haath mein skin ka rang badal gaya — blue, pale, ya bahut laal',
        'Cramp ke baad bhi pair ya haath mein feeling (sensation) nahi aa rahi',
        'Cramp ke saath severe swelling (sujan) aa gayi',
        'Urine ka rang dark brown ya cola-coloured ho gaya — ye rhabdomyolysis ka sign hai',
        'Chest mein cramp ya tightness — kabhi ignore mat karo',
      ],
    },
  },

  timeline: [
    {
      duration: 'Nayi Takleef — Pehli Baar Ya Achanak Aaya',
      advice: 'Exercise ke baad, garm din mein, ya koi physical activity ke baad pehli baar cramp aaya — ye aksar dehydration ya electrolyte imbalance ka sign hai. Stretch karo, paani piyo, rest karo. Agar ek baar ki baat hai aur wajah clear hai — ghabrane ki zarurat nahi. Agar wajah samajh nahi aa rahi ya bahut severe tha — doctor se poochh lo.',
    },
    {
      duration: 'Chalti Aa Rahi — 1 se 4 Hafte',
      advice: 'Baar baar aa rahe hain cramps, khaaskar raat ko — ye body ka signal hai ki kuch underlying issue hai. Electrolyte levels check hone chahiye. Agar saath mein weakness ya fatigue bhi hai to doctor se milna zaroori hai is hafte mein. Ye "sahan karne" wali baat nahi — wajah pata karni chahiye.',
    },
    {
      duration: 'Purani Problem — 1 Mahina Ya Zyada',
      advice: 'Agar 1 mahine se zyada se regular cramps aa rahe hain — chahe raat ko, exercise ke baad, ya bina wajah — ye chronic issue hai. Doctor se milna zaruri hai. Underlying causes jaise circulation problem, nerve issue, ya mineral deficiency ho sakti hai. Chronic recurrent cramps mein constitutional approach kaafi helpful hota hai.',
    },
  ],

  lifestyleCauses: [
    {
      title: 'Dehydration (Paani Ki Kami)',
      recognition: 'Cramp exercise ke dauran ya baad mein, ya dhoop mein kaam karne ke baad aata hai? Urine dark yellow hai? Muh sukha hua lagta hai? Ye dehydration-related cramp ka classic pattern hai.',
      description: 'Muscles ka 75% hissa paani hota hai. Jab body mein paani ki kami hoti hai — especially garam mausam mein ya exercise ke dauran — muscle cells mein sodium aur potassium ka balance bigad jaata hai. Ye imbalance nerve signals ko disrupt karta hai jo muscles ko contract aur relax karne ka signal dete hain. Muscle ek abnormal state mein "stuck" ho jaati hai — yahi cramp hai.',
    },
    {
      title: 'Electrolyte Imbalance (Potassium, Magnesium, Calcium)',
      recognition: 'Cramps raat ko zyada hote hain? Kabhi kabhi ek sath kai jagah cramps aate hain? Bananas ya greens khane ke baad thoda better lagta hai? Ye electrolyte kami ka pattern hai.',
      description: 'Nerve impulses jo muscles ko "contract karo" aur "relax karo" ka message dete hain — ye messages electrolytes se chalte hain, khaaskar potassium, magnesium, aur calcium. Jab khane mein in minerals ki kami hoti hai ya bhaari sweating se ye bahar nikal jaate hain — nerve-muscle communication fail hone lagti hai. Result: involuntary, painful cramps.',
    },
    {
      title: 'Overexertion / Muscles Ka Overuse',
      recognition: 'Cramp un hi muscles mein hota hai jinka aaj zyada istemal hua? Soreness cramp ke baad bhi rehti hai? Gym ya khel ke baad zyada hota hai? Ye overexertion-related cramp hai.',
      description: 'Jab muscles unki usual capacity se zyada kaam karte hain — heavy lifting, long running, ya nayi exercise shuru karne par — muscle fibres thak jaate hain. Thaki hui muscles mein lactic acid build up hota hai. Is state mein muscle ko relax karne ka mechanism weak pad jaata hai aur wo contracted state mein reh sakti hai.',
    },
    {
      title: 'Ek Jagah Zyada Der Tak Rehna (Poor Posture)',
      recognition: 'Cramp gadi se nikalne par, der tak baithe rehne ke baad ya office mein hota hai? Thoda chal lene par better ho jaata hai? Ye poor circulation-related cramp hai.',
      description: 'Ek hi position mein ghanton baithe rehna — jaise office chair pe, floor pe cross-legged, ya gadi chalate waqt — muscles mein blood circulation slow ho jaati hai. Is reduced circulation mein oxygen supply kam hoti hai aur waste products nahi nikal paate. Ye environment cramps ke liye ideal hai — khaaskar calf aur thigh muscles mein.',
    },
  ],

  medicalCauses: [
    {
      diseaseName: 'Hypothyroidism (Thyroid Ki Kami)',
      diseaseHindiName: 'Thyroid Gland Ki Kami / Susti Wali Thyroid',
      diseaseSlug: 'thyroid',
      isAvailable: true,
      description: 'Thyroid hormone muscles ke normal function ke liye zaruri hai. Jab thyroid underactive hota hai, muscles stiff, slow, aur cramping-prone ho jaati hain — khaaskar calves aur thighs mein. Ye cramps movement ke saath bhi aate hain aur raat ko bhi.',
      recognition: 'Cramps ke saath unhearable fatigue, weight gain, thand zyada lagti hai, baal girte hain — to thyroid test zaroor karwayen.',
    },
    {
      diseaseName: 'Peripheral Arterial Disease (PAD)',
      diseaseHindiName: 'Paon Ki Naliyon Mein Blockage',
      diseaseSlug: '',
      isAvailable: false,
      description: 'Jab paon ki arteries mein blockage hoti hai, muscles ko chalte waqt zaruri khoon nahi milta. Ye "claudication" cramps hote hain — chalte waqt calf mein tez dard, rukne par better. Aksar bade log ya smokers mein.',
      recognition: 'Cramp sirf chalte waqt — rukne pe 2-3 minute mein theek. Pair thanda rehta hai, pulsation kam. Turant doctor.',
    },
    {
      diseaseName: 'Diabetes (Madhumeh)',
      diseaseHindiName: 'Madhumeh / Sugar Ki Bimari',
      diseaseSlug: '',
      isAvailable: false,
      description: 'High blood sugar waqt ke saath nerves ko damage karta hai — ise diabetic neuropathy kehte hain. Ye damaged nerves muscles ko galat signals deti hain, jis se leg cramps aur twitching hoti hai. Saath mein paon mein burning ya numbness bhi hoti hai.',
      recognition: 'Cramps ke saath paon mein jhanjhanahat, burning ya numbness hai — to blood sugar check zarur karwayen.',
    },
    {
      diseaseName: 'Chronic Kidney Disease',
      diseaseHindiName: 'Gurde Ka Kamzor Hona',
      diseaseSlug: '',
      isAvailable: false,
      description: 'Kidney jab theek se kaam nahi karti to body mein uremic toxins aur fluid imbalance hota hai. Ye imbalance electrolyte levels (khaaskar potassium aur calcium) ko bigad deta hai. Iske wajah se severe, frequent leg cramps aate hain — especially dialysis patients mein.',
      recognition: 'Cramps ke saath ankles mein sujan, urine mein change, thakan, ya high BP ho — doctor se milein.',
    },
    {
      diseaseName: 'Pregnancy (Garbhavastha)',
      diseaseHindiName: 'Garbhavastha Ki Takleefein',
      diseaseSlug: '',
      isAvailable: false,
      description: 'Pregnancy ke dauran — khaaskar doosre aur teesre trimester mein — leg cramps bohut common hain. Wajah hai badhte uterus ka pressure pelvic nerves aur blood vessels pe, plus magnesium aur calcium ki increased demand jo badhte baby ke liye hoti hai. Raat ko calf cramps khaaskar pareshaan karte hain.',
      recognition: 'Agar cramps ke saath pair bahut swollen hain ya ek taraf swelling zyada hai — DVT rule out karne ke liye doctor se milein.',
    },
  ],

  redFlags: [
    'Rhabdomyolysis — statin medicines ya extreme exercise ke baad cramps ke saath dark brown urine ho to TURANT hospital. Kidney failure ka risk hai.',
    'Deep Vein Thrombosis (DVT) — agar ek pair mein cramp ke saath swelling, warmth aur redness ho — ye blood clot ka sign ho sakta hai, turant doctor.',
    'Spinal Stenosis ya Nerve Compression — agar cramps ke saath back pain, numbness ya kamar se neeche weakness ho to spine ya nerve evaluation zaruri hai.',
  ],

  homeSteps: [
    {
      step: 'Usi Waqt Stretch Karo — Cramp Ko Tod Do',
      reason: 'Gentle stretching contracted muscle ko forcefully relax hone ka signal deti hai. Calf cramp mein: pair seedha rakho, anguthi apni taraf kheencho. Thigh cramp mein: pair peeche se pakad ke ghutna bend karo.',
    },
    {
      step: 'Massage Karo — Dheere Dheere',
      reason: 'Haath se gentle pressure aur circular motion blood circulation badhati hai us area mein. Ye lactic acid aur waste products ko flush karne mein help karta hai aur muscle relaxation trigger karta hai.',
    },
    {
      step: 'Garam Compress Lagao — Tight Muscle Ko Relax Karo',
      reason: 'Warmth muscle ki stiffness kam karti hai aur blood flow badhati hai. Ek warm cloth ya heating pad 10-15 minute ke liye cramped area pe rakhna cramp ke baad bhi rehne wali tightness mein kaafi aaraam deta hai.',
    },
    {
      step: 'Paani Piyo — Rehydration',
      reason: 'Agar cramp dehydration se aaya hai to fluid replace karna zaruri hai. Ek bade glass paani se shuru karo — electrolyte balance restore hone mein 20-30 minute lagte hain.',
    },
    {
      step: 'Halka Chalo — Rest Nahi, Gentle Movement',
      reason: 'Cramp ke fauran baad complete rest na karo — halki walk blood circulation maintain karti hai aur lactic acid clearance fast hoti hai. 5-10 minute ki slow walk theek hai.',
    },
  ],

  homeopathyAngle1: 'Muscle cramps ka naam ek hai — lekin ye har insaan mein alag hota hai. Kisi ke cramps raat ko sote waqt aate hain. Kisi ko exercise ke baad. Kisi ko sirf ek taraf. Kisi mein garm mausam mein, kisi mein sardi mein. Homeopathy mein sirf "muscle cramps" nahi dekha jaata — aapke cramps kaisa hai, kab aata hai, kya karne se better ya worse hota hai, kitni der se hai, saath mein kya aur hai — ye sab milaa kar treatment decide hoti hai.',

  homeopathyAngle2: 'Baar baar aane wale muscle cramps aksar ek deeper imbalance ka signal hote hain — chahe electrolyte ki kami ho, nerve function mein koi issue ho, ya koi systemic condition. Homeopathy mein sirf cramp ko us moment band karna goal nahi — jo cheez cramps ko baar baar bula rahi hai, usse address kiya jaata hai. Waqt ke saath frequency aur intensity dono kam honi chahiye. Research is area mein limited hai aur results individual hote hain.',

  homeopathyAngle3: 'Pregnancy mein, bacchon mein, elderly mein, ya jab kai medicines chal rahi hon — homeopathy ek safe complementary option hai. Highly diluted medicines hone ki wajah se practically side-effect free hai. Severe pain ya emergency mein conventional treatment pehle — homeopathy complementary role mein kaam karti hai, replacement nahi hai.',

  homeopathyIsFor: [
    'Aap root cause treat karna chahte hain — sirf cramp ko us waqt band nahi karna',
    'Baar baar aane wale cramps se permanently chutkara chahte hain',
    'Side-effect free approach prefer karte hain — pregnancy mein, bacchon mein, ya elderly mein',
    'Aap pehle se koi conventional treatment le rahe hain aur saath mein complementary option chahiye',
  ],

  homeopathyNotFor: [
    'Aapko isi waqt severe cramp hai — stretch, massage, aur warm compress pehle karein',
    'Aapke cramp ka cause surgical ya emergency hai — jaise suspected DVT ya rhabdomyolysis — pehle hospital',
  ],

  homeopathyDiseaseLinks: [
    { diseaseName: 'Thyroid (Hypothyroidism)', diseaseSlug: 'thyroid', diseaseHindiName: 'Thyroid Ki Kami' },
  ],

  linkedDiseaseCards: [
    {
      diseaseName: 'Hypothyroidism',
      diseaseHindiName: 'Thyroid Ki Kami',
      diseaseSlug: 'thyroid',
      isAvailable: true,
    },
    {
      diseaseName: 'Peripheral Arterial Disease',
      diseaseHindiName: 'Paon Ki Naliyon Mein Blockage',
      diseaseSlug: '',
      isAvailable: false,
    },
    {
      diseaseName: 'Diabetes',
      diseaseHindiName: 'Madhumeh / Sugar Ki Bimari',
      diseaseSlug: '',
      isAvailable: false,
    },
    {
      diseaseName: 'Chronic Kidney Disease',
      diseaseHindiName: 'Gurde Ki Bimari',
      diseaseSlug: '',
      isAvailable: false,
    },
    {
      diseaseName: 'Pregnancy-Related Symptoms',
      diseaseHindiName: 'Garbhavastha Ki Takleefein',
      diseaseSlug: '',
      isAvailable: false,
    },
  ],

  faqs: [
    {
      question: 'Muscle cramps kab normal hote hain aur kab doctor ke paas jaana chahiye?',
      answer: 'Ek-aadh muscle cramp jo stretch karne ya paani peene se theek ho jaaye — ye normal hai aur chinta ki baat nahi.\n\nDoctor zaruri hai jab: cramps hafte mein 3-4 baar ya zyada ho rahe hain, raat ki neend kharab ho rahi hai, cramps ke saath numbness ya swelling bhi hai, ya pregnancy mein ho rahe hain.\n\nTURANT hospital mein jaayein agar: cramp ke baad urine dark brown ho, ek pair mein cramp ke saath swelling aur warmth ho, ya chest mein cramping feel ho.',
    },
    {
      question: 'Muscle cramps kitne waqt tak rehte hain?',
      answer: 'Zyada tar muscle cramps kuch seconds se lekar 2-3 minutes tak rehte hain — aur fauran stretch ya massage karne par jaldi khatam ho jaate hain.\n\nCramp ke baad bhi us muscle mein soreness aur tightness kuch ghanton tak reh sakti hai — ye normal hai.\n\nAgar cramp 10 minute se zyada rehe aur stretch se bhi na jaaye — to doctor se milna chahiye, khaaskar agar pehli baar aise ho raha hai.\n\nBaar baar aane wale cramps jo khud se theek ho jaate hain — unka duration toh kam hota hai, lekin frequency zyada hona underlying issue ki taraf point karta hai.',
    },
    {
      question: 'Muscle cramps ka sabse common karan kya hai?',
      answer: 'Sabse common karan hai dehydration aur electrolyte imbalance — khaaskar potassium, magnesium, aur calcium ki kami.\n\nGaram mausam mein heavy sweating, kam paani peena, ya intense exercise ke baad ye minerals body se bahut tezi se nikalte hain — aur muscles ko relax karne ke liye in minerals ki zarurat hoti hai. Ye nahi hote toh muscle "cramped" state mein stuck reh jaati hai.\n\nIndia mein garmi ke mahino mein aur unme jo heavy physical work karte hain — cramps ka risk khaaskar zyada hota hai.',
    },
    {
      question: 'Raat ko sote waqt muscle cramps kyun aate hain?',
      answer: 'Raat ko sone waqt muscle cramps — khaaskar calf mein — bohut common hain aur iske alag karan hain.\n\nRaat mein body temperature thodi girti hai, blood circulation slow hoti hai, aur legs hours tak ek hi position mein rehti hain — in sab se muscle cramping ka risk badh jaata hai.\n\nAur bhi: din bhar ki dehydration ya electrolyte kami raat tak peak par hoti hai, isliye symptoms tab dikhte hain.\n\n50 saal se upar ke logon mein night leg cramps common hain — iska matlab ye nahi ki kuch serious hai, lekin agar regularly ho rahe hain to doctor se electrolyte levels aur circulation check karwayen.',
    },
    {
      question: 'Exercise ke baad muscle cramps kyun hote hain?',
      answer: 'Exercise ke baad cramps ka sabse bada karan hai overexertion — yaani muscle ne jitna kaam aadat hai usse zyada kiya.\n\nIs overexertion se lactic acid aur waste products muscles mein build up hote hain. Saath hi sweating se electrolytes nikalte hain. Ye combination nerve-muscle communication disrupt karta hai aur involuntary contraction — cramp — trigger karta hai.\n\nPost-exercise cramps se bachne ke liye: exercise se pehle aur baad mein paani piyo, sudden intense activity na karo, aur warm-up aur cool-down zarur karo.',
    },
    {
      question: 'Pregnancy mein muscle cramps normal hain kya?',
      answer: 'Haan, pregnancy mein leg cramps — khaaskar doosre aur teesre trimester mein raat ko — bohut common hain aur aksar normal hote hain.\n\nWajah hai: badhte uterus ka pressure pelvic nerves aur blood vessels pe, plus body ki increased calcium aur magnesium demand jo badhte baby ke liye hoti hai.\n\nAgar cramps mild hain aur stretch karne se theek hote hain — zaroorat se zyada ghabrana nahi hai, apne doctor ko inform karo.\n\nAgar ek pair mein cramp ke saath swelling, warmth ya redness hai — ye DVT (blood clot) ka sign ho sakta hai, TURANT doctor se milo.',
    },
    {
      question: 'Baar baar muscle cramps kyun aate hain — koi bimari toh nahi?',
      answer: 'Baar baar aane wale cramps — hafte mein kai baar — sirf dehydration se nahi hote. Is pattern ke peeche koi underlying cause ho sakti hai.\n\nCommon underlying causes mein hain: hypothyroidism (thyroid ki kami), diabetes mein nerve damage (diabetic neuropathy), kidney disease, certain medicines (jaise statins ya diuretics), ya long-term mineral deficiency.\n\nEk simple blood test — thyroid, blood sugar, kidney function, aur electrolytes — ye sab check kar sakta hai aur usually koi serious cheez nahi milti.\n\nHomeopathy mein chronic recurrent cramps ke pattern ko samajhna aur constitutional level pe address karna ek approach hai — results individual hote hain.',
    },
    {
      question: 'Kaunsa doctor muscle cramps ke liye dikhana chahiye?',
      answer: 'Pehle apne family doctor ya general physician se milein — wo basic causes jaise dehydration, electrolyte levels, aur common medicines rule out kar sakte hain.\n\nAgar cramps leg mein hain aur chalte waqt zyada hote hain — vascular specialist (circulation doctor) se milna theek hai.\n\nAgar cramps ke saath numbness, weakness ya back pain hai — neurologist ya orthopedist se milein.\n\nPregnancy mein: apne OB/GYN ko batao.\n\nIndia mein many general physicians in sab cases handle kar lete hain — bade tests tab hi hote hain jab basic workup se kuch nahi milta.',
    },
    {
      question: 'Kya homeopathy muscle cramps mein kaam karta hai?',
      answer: 'Homeopathy muscle cramps — khaaskar chronic recurrent cramps — mein helpful ho sakti hai, lekin approach ek-size-fits-all nahi hai.\n\nHomeopathy mein ye dekha jaata hai ki aapke cramps kaisi nature ke hain: raat ko aate hain ya exercise mein, kaunsi jagah, kya se better ya worse hote hain, aur saath mein aur kya symptoms hain. Is poori picture ke hisaab se treatment decide hoti hai.\n\nResearch is area mein limited hai aur results patient se patient vary hote hain. Jo log chronic cramps se pareshan hain aur conventional treatment se underlying cause nahi mila — unke liye constitutional evaluation helpful ho sakta hai.',
    },
    {
      question: 'Muscle cramps mein konsa test karwana chahiye?',
      answer: 'Agar ek-aadh baar cramp aaya aur obvious wajah thi — koi test zaruri nahi.\n\nBaar baar aa rahe hain to doctor ye tests suggest kar sakte hain:\n- Blood test: Electrolytes (sodium, potassium, calcium, magnesium)\n- Thyroid function test (T3, T4, TSH)\n- Blood sugar (fasting glucose / HbA1c)\n- Kidney function (creatinine, urea)\n- CBC (complete blood count)\n- Agar cramp chalte waqt zyada ho: ABI test (Ankle-Brachial Index) — circulation check karta hai\n\nYe tests usually ek hi time mein ho sakte hain aur wajah clear ho jaati hai zyada tar cases mein.',
    },
    {
      question: 'Muscle cramps se hamesha ke liye chutkara mil sakta hai kya?',
      answer: '"Hamesha ke liye guaranteed ilaaj" ka vaada koi bhi system honestly nahi kar sakta — aur koi kare to doubt karo.\n\nJo realistic hai: agar cause identify ho jaaye — jaise electrolyte deficiency, thyroid, ya dehydration — aur use address kiya jaaye, to cramps ki frequency bahut kam ho jaati hai, practically disappear ho sakti hain.\n\nLifestyle causes mein to sustained changes se results aate hain — adequate hydration, regular stretching, balanced diet — ye sab karte rehne se zyada tar logon ko noticeable improvement milta hai.\n\nChronic nerve ya circulation related cramps mein: complete cure nahi, lekin management aur symptom reduction possible hai.',
    },
    {
      question: 'Kya muscle cramps dangerous hote hain?',
      answer: 'Zyada tar muscle cramps uncomfortable toh hote hain lekin dangerous nahi hote — aur khud theek ho jaate hain.\n\nDangerous tab ban sakte hain jab:\n- Rhabdomyolysis (statin ya extreme exercise se muscle breakdown) — dark urine ke saath cramp = turant hospital\n- DVT (blood clot) — ek pair mein cramp, swelling, aur redness = turant doctor\n- Agar cramps kisi serious underlying disease ka symptom hain — jaise advanced kidney disease ya severe PAD — to wo disease dangerous hai, cramp sirf signal hai\n\nEk-aadh baar ka normal cramp dangerous nahi hai — lekin regular, severe, ya unusual cramps ko ignore karna sahi nahi.',
    },
  ],

  quickFacts: [
    'Muscle cramp ek involuntary, sudden muscle contraction hai jo kuch seconds se lekar minutes tak reh sakta hai.',
    'Estimated 60% adults ko zindagi mein kabhi na kabhi muscle cramps ka anubhav hota hai — raat ko leg cramps 50+ age group mein common hain.',
    'Agar hafte mein 3-4 baar ya zyada, ya cramps ke saath numbness/swelling/dark urine ho — doctor zaruri.',
  ],

  relatedSymptoms: [
    { title: 'Numbness & Tingling (Paon Mein Jhanjhanahat)', slug: 'numbness-tingling' },
    { title: 'Weakness & Fatigue (Bahut Zyada Thakaan)', slug: 'weakness-fatigue' },
    { title: 'Back Pain (Kamar Dard)', slug: 'back-pain' },
  ],

  sources: [
    { title: 'Mayo Clinic — Muscle Cramp: Symptoms & Causes (2024)', url: 'https://www.mayoclinic.org/diseases-conditions/muscle-cramp/symptoms-causes/syc-20350820' },
    { title: 'NHS UK — Leg Cramps: Causes and Treatment (2023)', url: 'https://www.nhs.uk/conditions/leg-cramps/' },
    { title: 'NCBI / MedlinePlus — Muscle Cramps: Overview and Causes (2023)', url: 'https://medlineplus.gov/musclecramps.html' },
    { title: 'WHO — Musculoskeletal Conditions: Overview (2023)', url: 'https://www.who.int/news-room/fact-sheets/detail/musculoskeletal-conditions' },
  ],
}

async function seed() {
  console.log('Seeding muscle-cramps symptom...')
  const result = await client.createOrReplace(symptom)
  console.log('Done:', result._id)
}

seed().catch(console.error)
