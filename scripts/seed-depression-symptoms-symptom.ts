import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'symptom-depression-symptoms',
  _type: 'symptom',

  name: 'Depression Symptoms',
  hindiName: 'Manoavsaad ke Lakshan / Gehri Udaasi',
  hinglishName: 'Depression ke Symptoms',
  slug: { _type: 'slug', current: 'depression-symptoms' },
  bodySystem: 'Neurological',

  metaTitle: 'Depression Symptoms in Hindi — Karan aur Homeopathy | Homeopedia',
  metaDescription: 'Depression (manoavsaad) ke symptoms, karan aur ghar pe safe steps — simple Hinglish mein. Verified info, doctor-reviewed.',
  publishedAt: new Date('2026-05-19').toISOString(),

  whatIsThis: `Subah uthne ka mann nahi karta. Khaana bland lagta hai. Jo cheezein pehle khushi deti thi — dost, hobby, kaam — ab kuch feel nahi hoti unse. Ye sirf "bura din" nahi hai — jab ye feeling hafte ya mahine tak aaye, toh ye depression ke symptoms ho sakte hain.

Depression sirf "udaas rehna" nahi hai. Body aur mind dono pe iska asar hota hai — neend kharaab ho jaati hai, energy zero ho jaati hai, aur dimag negative thoughts se bhar jaata hai. Ye ek medical condition hai — kamzori nahi.

Ye page aapko 2 minute mein batayega: ye symptoms serious hain kya, ghar pe kya karein, aur agli step kya hai.`,

  indiaContext: 'WHO ke mutabik, India mein lagbhag 5.6 crore log depression se peedit hain — lekin zyada tar log isse "stress" ya "mood swing" samajhte hain aur doctor ke paas nahi jaate.',
  indiaContextSource: 'WHO — Depression Fact Sheet | 2023',

  severityLevel1: [
    'Udaasi 1-2 hafte se kam hai aur ek specific reason se hai (naukri gayi, relationship issue)',
    'Khane-peene aur neend mein thodi problem hai — completely band nahi',
    'Kuch cheezein abhi bhi thodi khushi deti hain',
    'Khud ko hurt karne ke koi vichar nahi',
  ],
  severityLevel2: [
    'Ye symptoms 2 hafte ya zyada se hain bina kisi clear wajah ke',
    'Kaam ya school pe concentrate nahi ho raha',
    'Rishtedaron/doston se katna shuru kar diya hai',
    'Neend ya to bahut zyada hai ya bilkul nahi',
    'Khane ki icchha completely khatam ho gayi ya bahut zyada ho gayi',
  ],
  severityLevel3: [
    'Khud ko hurt karne ya suicide ke koi bhi vichar aa rahe hain',
    'Reality se connection toot raha lagta hai — awaazein sunna, cheezein dikhna',
    'Bilkul khana-peena chhod diya — kai din se',
    'Kisi bhi kaam ya baat pe react hi nahi ho pa rahe',
  ],

  timeline3Days: 'Body kisi bade stress ya loss ke baad naturally react karti hai — grief, job loss, breakup. Ye period "situational sadness" ho sakti hai. Ghar pe rest, baat karna, physical activity se thoda farak padega. Agar 2 hafte mein better nahi ho raha — Level 2 mein aao.',
  timeline4Weeks: 'Ye ab sirf mood nahi hai — symptoms ek pattern ban rahe hain. Kaam, rishtey, ya roz ka kaam affected ho raha hai to ye doctor ke paas jaane ka signal hai. Agar aapne pehle bhi aisi episode face ki hai, to aur jaldi jaayein. Doctor se milne mein der mat karo.',
  timelineMonthPlus: 'Ye chronic depression ka signal hai. Is stage mein homeopathy ek effective complementary approach ho sakti hai — lekin sirf homeopathy pe mat rehna, ek psychiatrist ya counselor se bhi milna zaroori hai. Waqt ke saath sahi treatment se condition manage hoti hai.',

  lifestyleCauses: [
    {
      _key: 'lc1',
      causeName: 'Neend Ki Kami (Sleep Deprivation)',
      mechanism: 'Brain mein mood regulate karne wale chemicals — Serotonin aur Dopamine — theek se tab banate hain jab neend poori ho. Chronic neend ki kami mein ye chemicals unbalanced ho jaate hain. Ek hafte ki kharaab neend bhi depression jaisi feelings shuru kar sakti hai — aur depression khud neend kharaab karti hai. Ye ek vicious cycle hai.',
      howToIdentify: 'Subah fresh feel nahi hota, din bhar thakan, chhoti chhoti cheezein bahut badi lagti hain.',
    },
    {
      _key: 'lc2',
      causeName: 'Social Isolation (Akela Rehna)',
      mechanism: 'Insaan ek social animal hai — regular meaningful connection brain ke reward system ko active rakhti hai. Jab koi zyada waqt akele rehta hai — kaam ki wajah se, ya social media pe busy rehke real connections avoid karke — brain ko wo "warmth" nahi milti. Serotonin gir jaata hai.',
      howToIdentify: 'Logon se milna avoidance lagta hai, messages reply nahi karna chahte, ghar mein hi rehna comfortable lagta hai.',
    },
    {
      _key: 'lc3',
      causeName: 'Chronic Stress (Lambe Waqt Ka Dabaav)',
      mechanism: 'Hafte mahino ka lagaataar stress Cortisol (stress hormone) ko high rakhta hai. High Cortisol brain ke "happiness center" — Hippocampus — ko shrink kar sakta hai over time. Ye ek physical change hai jo depression symptoms paida karta hai.',
      howToIdentify: 'Zindagi mein sab kuch negative lagta hai, koi bhi decision lena mushkil lagta hai, hamesha "fight or flight" feel.',
    },
    {
      _key: 'lc4',
      causeName: 'Physical Inactivity',
      mechanism: 'Exercise natural Endorphins (feel-good chemicals) release karta hai. Jab log physically active nahi rehte — khaaskar jo WFH karte hain ya sedentary jobs mein hain — ye natural mood booster miss ho jaata hai. Research suggests ki regular exercise depression symptoms pe medication jaisi effect kar sakti hai mild cases mein.',
      howToIdentify: 'Zyada time baithne ke baad body heavy lagti hai, mood flat rehta hai.',
    },
  ],

  medicalCauses: [
    {
      _key: 'mc1',
      diseaseName: 'Clinical Depression (Major Depressive Disorder)',
      diseaseHindiName: 'Badi Udaasi / Manoavsaad',
      howSymptomPresents: 'Symptoms lagaataar 2 hafte ya zyada rehte hain, bina kisi external reason ke. Sadness ke saath anhedonia (kisi cheez mein interest nahi), worthlessness ke feelings, aur physical symptoms jaise body pain bhi aate hain.',
      howToIdentify: 'Ye normal sadness se alag hai — koi trigger nahi hota ya trigger chala bhi gaya lekin symptoms rehte hain. PHQ-9 score elevated hota hai.',
      homeopediaSlug: 'depression',
      isAvailable: true,
    },
    {
      _key: 'mc2',
      diseaseName: 'Anxiety Disorder',
      diseaseHindiName: 'Chinta Rog',
      howSymptomPresents: 'Depression aur anxiety aksar saath aati hain — 50% se zyada cases mein dono milte hain. Anxiety mein constant worry, heart racing, aur "kuch bura hoga" ki feeling depression symptoms ke saath mix hoti hai.',
      howToIdentify: 'Sirf udas nahi — daraa hua bhi rehta hai. Neend mein "overthinking" wali problem. GAD-7 score elevated.',
      homeopediaSlug: 'anxiety',
      isAvailable: true,
    },
    {
      _key: 'mc3',
      diseaseName: 'Bipolar Disorder',
      diseaseHindiName: 'Dwidhruvi Manasik Rog',
      howSymptomPresents: 'Isme depressive episodes ke baad manic episodes aate hain — jab bahut zyada energy, bahut kam neend, aur risky decisions hoti hain. Sirf depression ka ilaaj karna Bipolar mein galat ho sakta hai.',
      howToIdentify: 'Agar udaasi ke episodes ke beech "super energetic" ya "invincible" feel hone ke periods bhi aate hain — psychiatrist se milein.',
      homeopediaSlug: '',
      isAvailable: false,
    },
  ],

  redFlags: [
    'Thyroid Disease — Hypothyroidism (thyroid ki kami) depression jaisi symptoms deta hai. Agar saath mein thakan, wazan badhna, aur thandi zyada lagti ho to thyroid test zaroor karwao — sirf psychiatric treatment se kaam nahi chalega.',
    'Postpartum Depression — Delivery ke baad hormones mein bahut bada change aata hai. Agar delivery ke baad 2 hafte mein depression ke symptoms badh rahe hain ya baby se emotional connection nahi ban raha — turant doctor ko dikhao. Ye normal "baby blues" se alag hai.',
    'Medication-Induced Depression — Kuch medicines jaise steroids, BP ki medicines, hormonal contraceptives depression symptoms paida kar sakti hain. Agar koi nayi medicine shuru karne ke baad ye symptoms aaye hain — doctor ko batao, medicine change ho sakti hai.',
  ],

  homeSteps: [
    {
      _key: 'hs1',
      action: 'Roz 20-30 Minute Dhoop Mein Baithein: Subah ki dhoop mein baithein — sirf bahar jaana bhi farak karta hai.',
      whyItWorks: 'Sunlight brain mein Serotonin production ko directly boost karta hai. Ye ek proven physical mechanism hai. Subah ki dhoop zyada effective hoti hai.',
    },
    {
      _key: 'hs2',
      action: 'Ek Chhoti Routine Banao — Subah Ki: Simple fixed morning routine — chahe sirf uthna, paani peena, 10 min walk.',
      whyItWorks: 'Depression mein brain ka structure chaahta hai lekin create nahi kar pata. Ek simple fixed morning routine brain ko predictability deta hai jo anxiety aur hopelessness kam karta hai.',
    },
    {
      _key: 'hs3',
      action: 'Ek Bharosa Waale Insaan Se Baat Karo: Kisi bhi trusted insaan se — doost, family member — apni feeling share karo. Solution nahi chahiye — sirf sunne wala.',
      whyItWorks: 'Sirf ek insaan se baat karna mental load kaafi halka karta hai. Aksar depression mein log soch lete hain "koi nahi samjhega" — aur isolation aur badhti hai.',
    },
    {
      _key: 'hs4',
      action: 'Physical Activity — Chhoti Shuru Karo: 15-20 minute ki brisk walk — gym zaruri nahi.',
      whyItWorks: 'Walk bhi Endorphins release karti hai. Ye direct mood effect hai — research supports karta hai. Ek din mein nahi — 2-3 hafte regular karo tab farak dikhega.',
    },
    {
      _key: 'hs5',
      action: 'Screens Ko Sone Se 1 Ghante Pehle Band Karo: Phone/laptop raat ko sone se 1 ghante pehle band karo.',
      whyItWorks: 'Blue light Melatonin (neend hormone) ko suppress karti hai. Depression mein neend already kharaab hoti hai — screen time aur kharaab kar deta hai. Neend improve hoti hai to mood naturally better hota hai.',
    },
  ],

  homeopathyIndividualization: 'Depression ka naam ek hai — lekin har insaan ka depression alag hota hai. Kisi ko raat ko worse lagta hai, kisi ko akele mein, kisi ko specific trigger se. Kisi ki depression mein anger zyada hai, kisi mein numbness, kisi mein sirf ek khali pan. Homeopathy mein sirf "depression" nahi dekha jaata — aapki depression kaisi hai, kab badhti hai, kya feel hoti hai — ye sab milke treatment decide karta hai. Isliye do patients ko same symptoms mein bilkul alag medicines ho sakti hain.',
  homeopathyRootCause: 'Baar baar aane waali depression aksar ek deeper imbalance ka signal hai — shayad unresolved grief, chronic stress, ya physical health issue. Homeopathy mein sirf symptoms suppress karna goal nahi hai — jo cheez baar baar depression la rahi hai usse address karna zaroori hai. Waqt ke saath frequency aur intensity dono mein farak aata hai. Research is area mein limited hai aur results individual hote hain — lekin is approach ka fayda ye hai ki ye sirf symptom management nahi karta.',
  homeopathySafety: 'Pregnancy mein, bacchon mein, ya jab kaafi allopathic medicines chal rahi hon — homeopathy ek safe complementary option hai. Highly diluted medicines hone ki wajah se practically koi side effects nahi hote. Lekin ye clearly samjhein: severe depression ya suicidal thoughts mein conventional emergency treatment pehle zaroori hai — homeopathy complementary role mein hai, replacement nahi.',

  isForYouIf: [
    'Aap root cause address karna chahte hain — sirf symptoms temporarily manage nahi karna',
    'Mild to moderate depression hai aur side-effect free option chahiye',
    'Allopathic treatment ke saath ek complementary approach chahiye',
    'Pregnancy ya bacchon ke liye safe option dhundh rahe hain',
  ],
  notForYouIf: [
    'Severe depression hai ya suicidal thoughts hain — abhi isi waqt psychiatrist ya emergency services se contact karein, homeopathy baad mein saath chala sakte hain',
    'Psychosis ke symptoms hain — yahan pehle conventional treatment zaroori hai',
  ],

  homeopathyDiseaseLinks: [
    { _key: 'hdl1', diseaseName: 'Depression (Manoavsaad)', diseaseSlug: 'depression' },
    { _key: 'hdl2', diseaseName: 'Anxiety Disorder (Chinta Rog)', diseaseSlug: 'anxiety' },
  ],

  linkedDiseaseCards: [
    { _key: 'ldc1', title: 'Depression', hindiName: 'Manoavsaad / Gehri Udaasi', slug: 'depression' },
    { _key: 'ldc2', title: 'Anxiety Disorder', hindiName: 'Chinta Rog', slug: 'anxiety' },
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Depression ke symptoms kya hote hain?',
      answer: 'Depression ke main symptoms hain: lagaataar 2 hafte ya zyada udaas ya "khali" feel karna, jo cheezein pehle pasand thi unse interest khatam hona, neend mein problem (bahut zyada ya bilkul nahi), energy zero hona, concentrate na kar paana, worthless ya guilty feel karna, aur kuch cases mein khud ko hurt karne ke vichar. Sirf "ek din bura" depression nahi hai — symptoms consistent hon, majority of days, aur daily life affect ho rahi ho tab ye depression ho sakti hai. Agar ye symptoms 2 hafte se zyada hain — doctor se milein.',
      faqType: 'general',
    },
    {
      _key: 'faq2',
      question: 'Depression kab normal sadness se alag hoti hai?',
      answer: 'Normal sadness ek specific reason se hoti hai — koi nuksaan, disappointment — aur waqt ke saath better hoti hai. Depression mein ya to koi clear reason nahi hota, ya reason chala bhi gaya ho lekin feelings rehti hain. Ek aur bada fark: normal sadness mein bhi kuch cheezein good feel karati hain — ek achhi khabar, dost ka milna. Depression mein ye "break" nahi milta — anhedonia hota hai — kisi bhi cheez se pleasure nahi milta. Agar ye haal 2 hafte se zyada ho — ye normal nahi hai, help leni chahiye.',
      faqType: 'general',
    },
    {
      _key: 'faq3',
      question: 'Depression symptoms kitne din tak rehte hain?',
      answer: 'Clinical depression ki formal diagnosis ke liye symptoms kam se kam 2 hafte consecutive rehne chahiye. Lekin episodes ki length alag alag hoti hai — kuch log mein ek episode 3-6 mahine chalti hai, kuch mein saalon tak agar ilaaj na ho. Sahi treatment (therapy, medication, ya complementary approaches) se zyada tar logo ka episode 6-12 hafte mein significantly better hota hai. Bina ilaaj ke ye apne aap "just go away" nahi karta — aur baar baar wapas aata hai. Pehle episode ke baad treatment complete karna zaroori hai.',
      faqType: 'general',
    },
    {
      _key: 'faq4',
      question: 'Depression ka sabse common karan kya hai?',
      answer: 'Koi ek single cause nahi hoti — depression aksar kaafi factors ke combination se aata hai. Sabse common hain: brain chemistry imbalance (Serotonin, Dopamine, Norepinephrine), chronic stress, trauma ya significant loss, chronic illness, neend ki kami, aur genetic predisposition. India-specific context mein: career pressure, family expectations, financial stress, aur social isolation (specially in metros) bade triggers hain. Important: depression "dimagi kamzori" nahi hai — ye ek medical condition hai jis mein brain chemistry genuinely change hoti hai.',
      faqType: 'general',
    },
    {
      _key: 'faq5',
      question: 'Ghar pe depression symptoms mein kya karein?',
      answer: 'Kuch safe steps jo genuinely help karte hain: subah dhoop mein 20-30 min baithna (Serotonin boost), ek simple fixed morning routine, ek bharose waale insaan se baat karna, 15-20 min brisk walk, aur raat ko screen time kam karna. Lekin: ye sirf mild cases ya starting stages mein help karte hain. Agar symptoms 2 hafte se zyada hain ya daily life affected hai — ghar pe wait karna sahi nahi, doctor se milein. Khud diagnosis mat karo — depression ke symptoms aur anxiety ke symptoms overlap karte hain.',
      faqType: 'general',
    },
    {
      _key: 'faq6',
      question: 'Kya homeopathy depression mein kaam karti hai?',
      answer: 'Homeopathy depression mein ek individualized approach use karti hai — sirf "depression" ka ek standard protocol nahi hai. Har patient ki depression ki nature — kab worse, kya feel, kitni der se — ye decide karta hai ki kaunsi treatment sahi hogi. Mild to moderate depression mein homeopathy ko conventional counseling ya therapy ke saath complementary role mein use kiya jata hai. Research is area mein developing hai aur results individual hote hain — "guaranteed cure" ka vaada koi bhi system honestly nahi kar sakta. Jo realistic hai: waqt ke saath symptoms mein reduction aur episode ki frequency kam hona. Severe depression mein conventional psychiatric treatment pehle — homeopathy baad mein add kar sakte hain.',
      faqType: 'homeopathy',
    },
    {
      _key: 'faq7',
      question: 'Mahilaon mein depression ke symptoms alag kyun hote hain?',
      answer: 'Mahilaon mein depression ki rate mardono se almost double hoti hai — mainly hormonal fluctuations ki wajah se. Puberty, menstrual cycle (premenstrual dysphoric disorder), pregnancy, postpartum period, aur menopause — ye sab times hain jab hormones depression trigger kar sakte hain. Mahilaon mein depression aksar anxiety, worthlessness, aur "numb" feeling ke roop mein aata hai — mardono mein ye zyada anger ya risk-taking behaviour ke roop mein dikhta hai. Dono mein treatment important hai — sirf "hormones hain, theek ho jayega" accept mat karo.',
      faqType: 'general',
    },
    {
      _key: 'faq8',
      question: 'Pregnancy mein depression ke symptoms normal hain kya?',
      answer: 'Pregnancy mein "baby blues" — delivery ke baad 1-2 hafte ki mild emotional ups-downs — normal hai. Lekin Postpartum Depression (PPD) alag hai: ye delivery ke baad 2 hafte se zyada rehti hai, severe hoti hai, aur baby se emotional connection affect karta hai. India mein PPD significantly underdiagnosed hai. Pregnancy ke dauran bhi depression ho sakti hai — "glow" ki expectation ki wajah se log ise chhupa lete hain. Agar pregnancy ya postpartum mein depression ke symptoms 2 hafte se zyada hain — turant OB/GYN ya psychiatrist se milein. Ye sirf mood nahi hai.',
      faqType: 'general',
    },
    {
      _key: 'faq9',
      question: 'India mein depression symptoms itne common kyun ho rahe hain?',
      answer: 'WHO ke data ke mutabik India mein depression ke cases rapidly badh rahe hain — khaaskar 18-45 age group mein. Kuch India-specific reasons: extreme competition (education, jobs), financial insecurity, joint family se nuclear family shift (support system kam hua), social media comparison, COVID ke baad loneliness. Ek bada reason ye bhi hai: India mein mental health ko abhi bhi stigma se dekha jaata hai — "adjust karo", "sab ke saath hota hai" — jis wajah se log help nahi lete. Depression ek real medical condition hai — jaise diabetes ya BP — aur ilaaj ki zarurat hai.',
      faqType: 'general',
    },
    {
      _key: 'faq10',
      question: 'Depression baar baar kyun aati hai?',
      answer: 'Ek baar depression episode aane ke baad second episode ka risk significantly badh jaata hai — particularly agar first episode ka complete treatment nahi hua. Brain mein jo neural patterns depression banata hai, wo "grooves" create kar deta hai — stressful situations mein brain usi pattern pe wapas jaata hai. Isliye treatment ka goal sirf "better feel karna" nahi — complete recovery aur relapse prevention hai. Homeopathy aur therapy dono is "pattern" ko address karne mein help kar sakte hain — lekin doctor ke guidance mein, khud se treatment band mat karo jab better lagey.',
      faqType: 'general',
    },
    {
      _key: 'faq11',
      question: 'Kya depression permanently theek ho sakti hai?',
      answer: '"Permanent cure" ka vaada koi bhi system honestly nahi kar sakta — aur koi kare to doubt karo. Jo realistic aur evidence-based hai: sahi treatment se zyada tar log ki depression completely manage ho jaati hai aur episodes ki frequency aur intensity bahut kam ho jaati hai. Kaafi log ek ya do episodes ke baad kabhi wapas nahi aata unhe — especially jab therapy + lifestyle changes + medical treatment combination ho. Kuch logon mein ye lifelong management hai — jaise diabetes — lekin quality of life practically normal ho sakti hai. Ilaaj lena zaroori hai — depression "will power" se nahi jaati.',
      faqType: 'general',
    },
    {
      _key: 'faq12',
      question: 'Depression mein kaunsa test karwana chahiye?',
      answer: 'Depression ka koi single blood test nahi hota — ye ek clinical diagnosis hai jo doctor symptoms history pe karte hain. Lekin kuch tests rule out karne ke liye helpful hain: Thyroid function test (TSH) — Hypothyroidism depression jaisa lagta hai. Complete Blood Count (CBC) — Anaemia se bhi depression jaise symptoms. Vitamin D aur B12 levels — Deficiency depression mein contribute karti hai. Blood sugar — Diabetes bhi mood affect karta hai. Doctor standardized questionnaires (PHQ-9, Beck Depression Inventory) use karte hain assessment ke liye. Kaunsa doctor: pehle apne GP se milein — wo aage psychiatrist ya psychologist refer karenge agar zarurat ho.',
      faqType: 'general',
    },
  ],

  relatedSymptoms: [
    { _key: 'rs1', name: 'Anxiety Symptoms', hindiName: 'Ghabrahat', slug: 'anxiety-symptoms' },
    { _key: 'rs2', name: 'Insomnia', hindiName: 'Neend Na Aana', slug: 'insomnia' },
    { _key: 'rs3', name: 'Fatigue', hindiName: 'Lagaataar Thakaan', slug: 'fatigue' },
    { _key: 'rs4', name: 'Mood Swings', hindiName: 'Mood Badalna', slug: 'mood-swings' },
  ],

  sources: [
    { _key: 'src1', name: 'WHO — Depression Fact Sheet', year: '2023', url: 'https://www.who.int/news-room/fact-sheets/detail/depression' },
    { _key: 'src2', name: 'Mayo Clinic — Depression (Major Depressive Disorder): Symptoms & Causes', year: '2024', url: 'https://www.mayoclinic.org/diseases-conditions/depression/symptoms-causes/syc-20356007' },
    { _key: 'src3', name: 'NCBI/PubMed — Exercise as a treatment for depression: A meta-analysis', year: '2016', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4831920/' },
    { _key: 'src4', name: 'NHS UK — Clinical Depression: Symptoms', year: '2023', url: 'https://www.nhs.uk/mental-health/conditions/clinical-depression/symptoms/' },
  ],

  quickFactSymptom: 'Depression sirf "mood" nahi — ye brain chemistry ka imbalance hai jo mind aur body dono ko affect karta hai.',
  quickFactIndiaStats: 'WHO ke mutabik, India mein 5.6 crore+ log depression se peedit hain — zyada tar bina ilaaj ke.',
  quickFactDoctorWhen: 'Symptoms 2 hafte se zyada hain, ya suicidal thoughts aa rahe hain — turant doctor zaruri.',

  reviewDate: '2026-05',
}

async function seed() {
  console.log('🌱 Seeding Depression Symptoms page...')
  await client.createOrReplace(doc)
  console.log('✅ Symptom seeded — homeopedia.in/symptoms/depression-symptoms')
}

seed().catch(console.error)
