import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'symptom-anxiety-symptoms',
  _type: 'symptom',

  name: 'Anxiety Symptoms',
  hindiName: 'Ghabrahat ke Lakshan / Chinta ke Lakshan',
  hinglishName: 'Anxiety aur Ghabrahat',
  slug: { _type: 'slug', current: 'anxiety-symptoms' },
  bodySystem: 'Neurological',

  metaTitle: 'Anxiety Symptoms in Hindi — Karan aur Homeopathy | Homeopedia',
  metaDescription: 'Ghabrahat (anxiety symptoms) ke karan, severity aur ghar pe safe steps — simple Hinglish mein. Verified info, doctor-reviewed.',
  publishedAt: new Date('2026-05-19').toISOString(),

  whatIsThis: `Achanak dil tez dhakdhakane lagta hai — chest tight ho jaati hai, haath thoda kaanpne lagte hain, aur mann mein ek dara hua ehsaas baith jaata hai. Koi dikhai dene wali wajah nahi hoti, lekin body aise react karti hai jaise koi khatara saamne ho. Ye anxiety symptoms hain — aur India mein ye bahut common hai.

WHO ke ek report ke mutabik duniya mein lagbhag 28 crore log anxiety disorders se affected hain — aur India mein ye number teji se badh raha hai, especially cities mein.

Ye page aapko 2 minute mein batayega: aapki ghabrahat serious hai kya, ghar pe kya karein, aur kab doctor ke paas jaana zaroori hai.`,

  prevalence: 'India mein anxiety disorder ka prevalence lagbhag 3-4% adults mein hai — lekin mild anxiety symptoms kahin zyada logon ko hote hain jo kabhi doctor ke paas nahi jaate.\nSource: Lancet / WHO',

  severityLevels: [
    {
      _key: 'sl1',
      level: 'green',
      title: 'Level 1 — Ghar Pe Manage Karo',
      signs: [
        'Thoda nervous ya worried feel ho raha hai — koi specific event se pehle (exam, interview, presentation)',
        'Dil thoda tez dhadak raha hai lekin 10-15 minute mein normal ho jaata hai',
        'Neend thodi late aati hai tension ki wajah se — roz nahi, kabhi kabhi',
        'Ghabrahat kisi specific situation mein hoti hai aur baad mein chali jaati hai',
      ],
    },
    {
      _key: 'sl2',
      level: 'yellow',
      title: 'Level 2 — Is Hafte Doctor Se Milein',
      signs: [
        'Anxiety roz hoti hai — binu kisi khaas wajah ke',
        'Raat ko neend poori nahi ho rahi, khaana theek se nahi ho raha',
        'Chakkar aana, saans lene mein thodi takleef — baar baar',
        'Kaam ya ghar pe concentrate karna mushkil ho raha hai hafte bhar se',
      ],
    },
    {
      _key: 'sl3',
      level: 'red',
      title: 'Level 3 — Turant Hospital Jaao',
      signs: [
        'Achanak seene mein bahut tez dard — left side ya beech mein (heart attack rule out zaroori)',
        'Saans bilkul band hone jaisi feeling — lips ya fingers neele parne lage',
        'Behoshi aane jaisi feeling ke saath dil ka ek dum tez dharakna',
        'Khud ko ya doosron ko nuksan pahunchane ke vichar aa rahe hain',
      ],
    },
  ],

  timeline: [
    {
      _key: 'tl1',
      duration: '1 se 3 Din',
      label: 'Nayi Takleef',
      advice: 'Koi naya stress hai — job, family, health — aur body usse anxiety ke roop mein feel kar rahi hai. Ye natural response hai. Rest karo, trigger pehchano. Agar teen din mein better ho rahe hain to abhi doctor zaruri nahi — lekin Level 1 signs pe dhyan rakho.',
    },
    {
      _key: 'tl2',
      duration: '1 se 4 Hafte',
      label: 'Chalti Aa Rahi',
      advice: 'Ghabrahat baar baar aa rahi hai aur khud se nahi ja rahi — ye signal hai ki body ko extra support chahiye. Is hafte doctor se milein. Lifestyle adjustments ke saath professional guidance bhi zaroori hai is stage pe.',
    },
    {
      _key: 'tl3',
      duration: '1 Mahina Ya Zyada',
      label: 'Purani Problem',
      advice: 'Chronic anxiety hai — ye khud se theek hone ki jagah nahi hai. Ek qualified doctor se milna zaruri hai. Homeopathy chronic anxiety mein particularly helpful approach hai — root cause address karne ke liye, sirf symptoms manage karne ke liye nahi.',
    },
  ],

  lifestyleCauses: [
    {
      _key: 'lc1',
      title: 'Chronic Stress (Lagaataar Tanav)',
      mechanism: 'Jab stress kaafi waqt tak bana rehta hai — kaam ka pressure, paise ki chinta, rishtedaari ke issues — body ka stress hormone Cortisol continuously elevated rehta hai. Ye hormone nervous system ko "alert mode" mein rakhta hai. Ek waqt ke baad nervous system isi mode mein "stuck" ho jaata hai — aur binu kisi trigger ke bhi anxiety symptoms feel hone lagte hain.',
      patientSigns: 'Anxiety sirf stress wale situations mein nahi, balki normal dinon mein bhi hoti hai. Neend aur bhooke pe bhi asar pad raha hota hai.',
    },
    {
      _key: 'lc2',
      title: 'Sleep Deprivation (Neend Ki Kami)',
      mechanism: 'Neend ke dauraan brain emotional processing karta hai. Jab neend poori nahi hoti, brain ka "threat detection" system — Amygdala — oversensitive ho jaata hai. Chhoti chhoti cheezein bhi brain ko bade khatare jaisi lagti hain. Isliye kam sone wale logon mein anxiety aur irritability dono zyada hoti hai.',
      patientSigns: 'Raat mein 6 ghante se kam so rahe hain ya neend baar baar toot rahi hai — aur din mein anxiety worse feel hoti hai.',
    },
    {
      _key: 'lc3',
      title: 'Caffeine aur Stimulants (Chai, Coffee, Energy Drinks)',
      mechanism: 'Caffeine body mein Adenosine naam ke relaxing chemical ko block karta hai. Saath hi Adrenaline release badhata hai — wahi hormone jo anxiety ke waqt nikalta hai. Zyada chai ya coffee anxiety symptoms ko trigger ya worsen kar sakti hai, khaas taur pe jo log already anxious hote hain.',
      patientSigns: 'Din mein 3-4 cup se zyada chai/coffee ke baad dil tez dhadakna ya haath kaanpna notice hota hai.',
    },
    {
      _key: 'lc4',
      title: 'Sedentary Lifestyle (Baithne Wali Zindagi)',
      mechanism: 'Physical activity body mein feel-good hormones — Endorphins aur Serotonin — release karta hai. Jab exercise bilkul nahi hoti, ye hormones consistently low rehte hain. Body mein jo stress energy jam jaati hai uska koi outlet nahi hota — aur ye anxiety ke roop mein bahar aati hai.',
      patientSigns: 'Agar din bhar sirf baithne ka kaam hai aur shaam ko ghabrahat zyada hoti hai.',
    },
  ],

  redFlags: [
    'Thyroid Disorder (Hyperthyroidism) — agar saath mein wazan tezi se ghata ho, haath kaanpen aur dil hamesha tez dhadke to thyroid test zaroori hai.',
    'Heart Arrhythmia (Dil ki Dhadkan ka Irregularity) — agar chest mein fluttering ya skipping feel ho, breathlessness ke saath, to ECG karwana zaruri hai — pehle cardiac causes rule out karein.',
    'Hormonal Imbalance (Women mein) — agar anxiety periods se pehle zyada hoti ho ya menopause ke waqt — hormonal assessment helpful hai.',
  ],

  linkedDiseaseCards: [
    {
      _key: 'ldc1',
      title: 'Anxiety Disorder',
      hindiName: 'Chinta Vikaar',
      description: 'Ye diagnosis tab hoti hai jab anxiety daily life mein significant interference kar rahi ho — kaam, relationships, routine — binu kisi specific trigger ke, 6 mahine ya zyada se. Generalized Anxiety Disorder (GAD) sabse common type hai.',
      homeopediaSlug: 'anxiety',
      isAvailable: true,
    },
    {
      _key: 'ldc2',
      title: 'Panic Disorder',
      hindiName: 'Panic Vikaar',
      description: 'Achanak aur intense wave of fear — dil tez dhadakna, saans lena mushkil, chest tight, numbness — jo 10-20 minute mein peak hoti hai. Pehli baar hone pe log heart attack samajhte hain.',
      homeopediaSlug: '',
      isAvailable: false,
    },
    {
      _key: 'ldc3',
      title: 'OCD',
      hindiName: 'Jabriya Soch Vikaar',
      description: 'Anxiety ke saath saath repetitive thoughts aati hain — aur unhe "neutralize" karne ke liye compulsive actions (baar baar haath dhona, check karna) karne ki need hoti hai.',
      homeopediaSlug: 'obsessive-compulsive-disorder',
      isAvailable: true,
    },
    {
      _key: 'ldc4',
      title: 'Depression',
      hindiName: 'Mansik Udaasi',
      description: 'Depression aur anxiety aksar saath aate hain. Depression mein anxiety ke saath lagataar udaasi, kisi cheez mein interest na hona, energy ki kami bhi hoti hai.',
      homeopediaSlug: 'depression',
      isAvailable: true,
    },
  ],

  homeCareSteps: [
    {
      _key: 'hcs1',
      stepNumber: 1,
      title: '4-7-8 Breathing Technique',
      instruction: '4 second saans lo, 7 second rokho, 8 second mein chhodho. Do-teen baar repeat karo.',
      reason: 'Ye pattern Vagus nerve ko stimulate karta hai jo parasympathetic nervous system (body ka "calm down" system) activate karta hai. Do-teen minutes mein heart rate slowly normal hone lagti hai.',
    },
    {
      _key: 'hcs2',
      stepNumber: 2,
      title: 'Cold Water — Face aur Wrists Pe',
      instruction: 'Thanda paani chehra aur pulse points (wrists, temples) pe lagao.',
      reason: '"Dive Reflex" trigger hoti hai — ek natural bodily response jo heart rate aur anxiety response dono ko quickly reduce karta hai. Ye physiological hai — directly nervous system pe asar karta hai.',
    },
    {
      _key: 'hcs3',
      stepNumber: 3,
      title: 'Grounding Technique — 5-4-3-2-1',
      instruction: '5 cheezein dekho, 4 touch karo, 3 suno, 2 sungho, 1 taste karo.',
      reason: 'Anxiety mein brain future ke baare mein sochta rehta hai. Grounding brain ko abhi ke moment mein laata hai. Ye rumination cycle todta hai.',
    },
    {
      _key: 'hcs4',
      stepNumber: 4,
      title: 'Light Movement — 10 Minute Walk',
      instruction: 'Anxiety feel ho to 10 minute ki light walk — indoors bhi theek hai.',
      reason: 'Anxiety mein body mein adrenaline release hota hai jo action ke liye hoti hai. Walk karne se ye energy physically use hoti hai. Endorphins release hote hain jo anxiety intensity reduce karte hain.',
    },
    {
      _key: 'hcs5',
      stepNumber: 5,
      title: 'Kisi Se Baat Karo',
      instruction: 'Kisi bhi trusted insaan se 5 minute baat karo — phone pe bhi theek hai.',
      reason: 'Social connection Oxytocin release karta hai — ek hormone jo anxiety aur stress response directly counteract karta hai. Akele rehna anxiety ko aur badha deta hai.',
    },
  ],

  homeopathyAngles: [
    {
      _key: 'ha1',
      angle: 'Individualization',
      content: 'Anxiety ka naam ek hai — lekin experience har insaan ka alag hota hai. Kisi ko social situations mein anxiety hoti hai. Kisi ko raat ko lete waqt. Kisi ko confined spaces mein. Kisi ko future ke baare mein constant worry rehti hai. Homeopathy mein sirf "anxiety" nahi dekha jaata — aapki anxiety kaisi hai, kab hoti hai, kya cheez se better ya worse hoti hai, kitni der se hai, aur saath mein aur kya hota hai — ye sab treatment decide karta hai. Isliye ek hi symptom ke do patients ko bilkul alag medicines mil sakti hain — aur dono ke liye effective hoti hain.',
    },
    {
      _key: 'ha2',
      angle: 'Root Cause',
      content: 'Baar baar aane wali ghabrahat aksar ek deeper imbalance ka signal hoti hai — sirf situational stress nahi. Homeopathy mein sirf anxiety ke episodes ko manage karna goal nahi hota — jo cheez is pattern ko baar baar la rahi hai usse address kiya jaata hai. Waqt ke saath frequency aur intensity dono kam hoti hain. Research is area mein limited hai aur results individual hote hain — lekin chronic anxiety ke patients mein ye approach kaafi helpful rahi hai.',
    },
    {
      _key: 'ha3',
      angle: 'Safety',
      content: 'Medicines highly diluted hone ki wajah se homeopathy practically side-effect free hai. Isliye ye un logon ke liye bhi appropriate hai jo pehle se anxiety ki doosri medicines le rahe hain, ya pregnant hain, ya jo long-term solution dhundh rahe hain binu dependency ke. Severe anxiety episodes ya panic attacks mein conventional emergency guidance pehle lein. Homeopathy complementary role mein hai — replacement nahi. Dono saath chal sakte hain.',
    },
  ],

  homeopathyDiseaseLinks: [
    { _key: 'hdl1', title: 'Anxiety Disorder', slug: 'anxiety' },
    { _key: 'hdl2', title: 'OCD (Obsessive Compulsive Disorder)', slug: 'obsessive-compulsive-disorder' },
    { _key: 'hdl3', title: 'Depression', slug: 'depression' },
  ],

  homeopathyIsFor: [
    'Aap root cause treat karna chahte hain — sirf episodes manage nahi karna',
    'Aap long-term sustainable relief dhundh rahe hain',
    'Aap side-effect free approach prefer karte hain — especially agar doosri medicines chal rahi hain',
    'Aapko chronic ya recurring anxiety hai',
  ],

  homeopathyNotFor: [
    'Aapko abhi isi waqt severe panic attack aa rahi hai — pehle conventional emergency guidance lein, baad mein homeopathy saath chalao',
    'Aapka case severe psychiatric condition hai — psychiatrist se milein, homeopathy baad mein complementary mein add kar sakte hain',
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Anxiety symptoms ka sabse common karan kya hai?',
      answer: 'Anxiety symptoms ka sabse common karan chronic stress aur sleep deprivation hai — ye dono ek saath body ke nervous system ko "fight-or-flight" mode mein lock kar dete hain. Jab stress kaafi waqt tak bana rehta hai, body ka Cortisol hormone continuously elevated rehta hai. Ye hormone nervous system ko hamesha alert rakhta hai — ek time ke baad body binu kisi specific trigger ke bhi anxiety feel karne lagti hai. Doosra major cause hai neend ki kami — kam sone pe brain ka emotional processing affect hota hai, aur chhoti chhoti cheezein bhi zyada threatening lagti hain. Other common triggers: zyada caffeine, sedentary lifestyle, work pressure, financial stress, aur major life changes.',
    },
    {
      _key: 'faq2',
      question: 'Anxiety symptoms kitne din tak rehte hain?',
      answer: 'Ye completely depend karta hai cause pe. Situational anxiety — koi exam, interview, ya difficult situation — generally woh situation khatam hone ke baad kuch ghanton se teen-char din mein resolve ho jaati hai. Agar anxiety ek hafte se zyada hai binu kisi clear trigger ke — ye signal hai ki body ko extra support chahiye, doctor se milein. Agar anxiety ek mahine ya zyada se chal rahi hai — ye chronic anxiety hai, ye khud se theek hone ki jagah nahi hai, proper assessment aur treatment zaroori hai. Jaldi resolve hone ke liye: regular sleep, exercise, caffeine reduce karna, aur stress management helpful hai.',
    },
    {
      _key: 'faq3',
      question: 'Anxiety symptoms kab normal hote hain aur kab doctor zaroori hai?',
      answer: 'Normal anxiety: Kisi challenging situation se pehle — job interview, exam, kisi important baat se pehle — thoda nervous ya worried feel karna bilkul normal hai. Ye body ki natural response hai. Situation khatam hone ke baad ye apne aap chali jaati hai. Doctor zaruri hai jab: Anxiety binu kisi clear reason ke baar baar aati hai. Anxiety daily life mein interfere kar rahi hai — kaam, sleep, relationships. Physical symptoms hain — chest tightness, saans ki takleef, baar baar dil tez dhadakna. Anxiety 2 hafte se zyada chal rahi hai without improvement. Aap situations avoid karne lage hain anxiety ki wajah se. Turant hospital jaayen agar: chest mein sharp pain, saans bilkul band hone jaisi feeling, ya behoshi aa rahi ho.',
    },
    {
      _key: 'faq4',
      question: 'Bina kisi wajah ke anxiety symptoms kyun hote hain?',
      answer: 'Ye bahut common confusion hai — aur ye ek important medical observation hai. Hota ye hai ki anxiety ka trigger conscious mind ko nahi pata hota — lekin body usse detect kar chuki hoti hai. Smell, sound, atmosphere, ya koi subtle memory — ye sab subconscious triggers ho sakte hain. Doosra reason hai Cortisol buildup — agar kaafi waqt se stress chal raha hai, body baseline pe hi anxious hoti hai, koi specific trigger nahi chahiye. Teen kaam karo: trigger log rakhna shuru karo (kab, kahan, kya ho raha tha), sleep improve karo, aur caffeine reduce karo. Agar phir bhi 2 hafte mein better nahi hua to doctor se milein.',
    },
    {
      _key: 'faq5',
      question: 'Physical anxiety symptoms kyun hote hain jab mann mein kuch nahi lagta?',
      answer: 'Ye "somatic anxiety" hai — body anxiety feel kar rahi hai lekin conscious mind usse identify nahi kar raha. Jab brain koi threat feel karta hai — chahe conscious ho ya nahi — Adrenaline release hoti hai. Ye hormone directly physical changes laata hai: heart rate badhna, muscles tighten hona, sweating, shallow breathing. Ye sab physical symptoms hain — aur ye real hain, "imagination" nahi. Bahut baar ye tab hota hai jab koi deeply suppressed stress ya anxiety hoti hai jo consciously acknowledge nahi ki gayi — body pehle react karti hai. Agar physical symptoms baar baar hain binu kisi clear reason ke — ek baar doctor se milein. Pehle physical causes (thyroid, heart) rule out karein, phir anxiety ka proper assessment karo.',
    },
    {
      _key: 'faq6',
      question: 'Kaunsi beemariyan anxiety symptoms paida kar sakti hain?',
      answer: 'Kai medical conditions anxiety jaisi feelings create kar sakti hain. Hyperthyroidism (Thyroid zyada active): Dil tez dhadakna, nervousness, weight loss — anxiety jaisa lagta hai, TSH test se pata chalta hai. Anemia (Khoon ki kami): Dil tez dhadakna, breathlessness, weakness — anxiety symptoms se overlap hote hain. Low Blood Sugar (Hypoglycemia): Haath kaanpna, sweating, restlessness — khane se pehle zyada hota hai. Heart Arrhythmia: Dil ki irregular dhadkan se anxiety jaisi feeling ho sakti hai. Menopause / PCOS (Women mein): Hormonal changes anxiety symptoms trigger karte hain. Depression: Anxiety aur depression aksar saath aate hain. Agar symptoms nayi hain ya baar baar hain — ek basic checkup se physical causes rule out karo. Self-diagnose mat karo.',
    },
    {
      _key: 'faq7',
      question: 'Kya homeopathy anxiety symptoms mein kaam karta hai?',
      answer: 'Homeopathy anxiety mein help karta hai — lekin sirf tab jab treatment aapki specific pattern ke hisaab se ho, generic nahi. Homeopathy ka fayda ye hai ki ye sirf symptom nahi, underlying cause address karta hai. Aapki anxiety kab hoti hai, kaisi hoti hai, kya se better ya worse hoti hai — ye sab treatment decide karta hai. Ye particularly helpful hai chronic anxiety mein — jahan baar baar wahi pattern aata hai — aur un logon ke liye jinhein side-effect free, long-term approach chahiye. Ek important note: results individual hote hain. Homeopathy conventional treatment ka replacement nahi hai — especially severe ya acute cases mein. Complementary approach ke roop mein ye kaafi helpful ho sakta hai.',
    },
    {
      _key: 'faq8',
      question: 'Anxiety symptoms mein ghar pe kya karna chahiye?',
      answer: 'Ye steps genuinely helpful hain: 4-7-8 Breathing — 4 second saans lo, 7 rok lo, 8 mein chhodho — directly nervous system calm karta hai. Cold water — Chehra aur wrists pe thanda paani — Dive Reflex trigger karta hai jo heart rate reduce karta hai. 10 minute light walk — Adrenaline use hoti hai, endorphins release hote hain. Grounding — 5 cheezein dekho, 4 touch karo, 3 suno — brain ko present moment mein laata hai. Kisi se baat karo — Social connection Oxytocin release karta hai jo anxiety counter karta hai. Ye steps situational ya mild anxiety ke liye effective hain. Agar anxiety baar baar aa rahi hai ya intense hai — sirf ghar pe manage karne ki koshish mat karo, doctor se milein.',
    },
    {
      _key: 'faq9',
      question: 'Anxiety baar baar kyun aati hai?',
      answer: 'Baar baar aane wali anxiety aksar in wajahon se hoti hai. Pehli wajah: Underlying cause address nahi hua — sirf episodes manage hote rahe, stress, sleep problems, ya koi deeper pattern bana rehta hai. Doosri wajah: Avoidance — jab hum anxiety wali situations se bachte hain, brain ko message milta hai ki wo situation "actually dangerous hai," agle baar anxiety aur intense hoti hai. Teesri wajah: Untreated Anxiety Disorder — jo ek medical condition hai, sirf situational stress nahi. Solution: Pattern ko samjho — kab, kahan, kya trigger hai. Doctor se proper assessment lo. Sirf symptoms manage karna baar baar aane wali anxiety nahi todta — cause address karna padta hai.',
    },
    {
      _key: 'faq10',
      question: 'Anxiety symptoms se hamesha ke liye kaise chutkara milega?',
      answer: '"Hamesha ke liye" ka guarantee koi bhi system honestly nahi de sakta — aur jo de, doubt karo. Jo realistic hai: sahi treatment se anxiety ki frequency aur intensity itni kam ho jaati hai ki life practically normal ho jaati hai. Trigger situations mein mild nervousness feel hona stop nahi hoga — ye normal hai. Lekin debilitating anxiety jo daily life affect kare — wo manageable ho jaati hai. Effective approach: Cause identify karo. Consistent treatment (professional guidance ke saath). Lifestyle — sleep, exercise, caffeine. Trigger awareness. Homeopathy is approach mein helpful hai kyunki ye chronic patterns ki root cause address karta hai — sirf episodes ko manage nahi karta.',
    },
    {
      _key: 'faq11',
      question: 'Bacchon mein anxiety symptoms kyun hote hain?',
      answer: 'Bachpan mein anxiety zyada hoti ja rahi hai — school pressure, social media, aur family stress major factors hain. Common signs in bachon mein: school jaane se inkaar, pet dard ya sar dard jo regularly check-out se pehle hote hain, zyada chipakna ya rona, neend ki problem, concentration mein dikkat. Important: Bacchon ki anxiety ko "drama" ya "nakhre" mat samjho — ye real experience hai unke liye. Agar signs ek hafte se zyada hain ya school aur daily life affect ho rahi hai — pediatrician ya child specialist se milein. Homeopathy bacchon ke liye safe aur effective approach hai kyunki medicines highly diluted hoti hain — side effects practically nahi hote.',
    },
    {
      _key: 'faq12',
      question: 'Anxiety symptoms mein chai ya coffee peena theek hai?',
      answer: 'Anxiety mein chai ya coffee reduce karna genuinely helpful hota hai — ye medical recommendation hai, sirf suggestion nahi. Caffeine body mein Adrenaline release badhata hai — wahi hormone jo anxiety ke waqt naturally release hota hai. Iska matlab: caffeine anxiety symptoms ko directly worsen karta hai. India mein chai culture mein ye adjust karna mushkil lagta hai — lekin ek simple rule: din mein 1-2 cup se zyada mat lo, aur anxiety ke episode ke waqt bilkul nahi. Agar chai poori band karna mushkil hai to gradually reduce karo — ek baar mein bilkul band karne se bhi withdrawal symptoms ho sakte hain jaise headache.',
    },
  ],

  relatedSymptoms: [
    { _key: 'rs1', name: 'Palpitations', hindiName: 'Dil Ka Tez Dhadakna', slug: 'palpitations' },
    { _key: 'rs2', name: 'Insomnia', hindiName: 'Neend Na Aana', slug: 'insomnia' },
    { _key: 'rs3', name: 'Fatigue', hindiName: 'Lagaataar Thakaan', slug: 'fatigue' },
    { _key: 'rs4', name: 'Headache', hindiName: 'Sir Mein Dard', slug: 'headache' },
  ],

  sources: [
    { _key: 'src1', title: 'World Health Organization — Mental Disorders: Anxiety', year: '2023', url: 'https://www.who.int/news-room/fact-sheets/detail/mental-disorders' },
    { _key: 'src2', title: 'Mayo Clinic — Anxiety Disorders: Symptoms & Causes', year: '2024', url: 'https://www.mayoclinic.org/diseases-conditions/anxiety/symptoms-causes/syc-20350961' },
    { _key: 'src3', title: 'NCBI / PubMed — Anxiety Disorders: A Review of Current Literature', year: '2020', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6296480/' },
    { _key: 'src4', title: 'NHS UK — Generalised Anxiety Disorder in Adults', year: '2023', url: 'https://www.nhs.uk/mental-health/conditions/generalised-anxiety-disorder/overview/' },
  ],

  quickFacts: [
    'Anxiety ke physical symptoms — jaise dil tez dhadakna, haath kaanpna — real hote hain. Ye sirf "mann ki baat" nahi hai. Nervous system ki direct response hai.',
    'WHO ke mutabik India mein 3-4 crore se zyada log anxiety disorders se affected hain.',
    'Kab doctor zaruri: Agar anxiety 2 hafte se zyada binu improvement ke hai, ya daily life affect kar rahi hai — doctor se milna zaroori hai.',
  ],

  reviewDate: '2026-05',
}

async function seed() {
  console.log('🌱 Seeding Anxiety Symptoms symptom page...')
  await client.createOrReplace(doc)
  console.log('✅ Symptom seeded — homeopedia.in/symptoms/anxiety-symptoms')
}

seed().catch(console.error)
