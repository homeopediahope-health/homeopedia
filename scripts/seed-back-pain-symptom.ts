import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'symptom-back-pain',
  _type: 'symptom',

  name: 'Back Pain',
  hindiName: 'कमर दर्द',
  hinglishName: 'Kamar Dard',
  slug: { _type: 'slug', current: 'back-pain' },
  bodySystem: 'Musculoskeletal',

  metaTitle: 'Back Pain in Hindi — Kamar Dard Karan aur Homeopathy | Homeopedia',
  metaDescription: 'Kamar dard (back pain) ke karan, severity aur ghar pe safe steps — simple Hinglish mein. Verified info, Dr. Shadab reviewed.',
  publishedAt: new Date('2026-05-18').toISOString(),

  whatIsThis: `Subah uthte waqt kamar mein ek tez dard — ya din bhar ek band si feeling jo neeche peeth mein bani rehti hai. Kamar dard (back pain) aisa symptom hai jo kisi ko bhi, kisi bhi umar mein ho sakta hai. Kabhi ek jhatke se, kabhi dheere dheere.

Ye India mein doctor ke paas jaane ki sabse common wajahon mein se ek hai — aap bilkul akele nahi hain.

Ye page aapko 2 minute mein batayega: aapka dard serious hai ya nahi, ghar pe kya karna hai, aur kab doctor ke paas jaana zaroori hai.`,

  indiaContext: 'WHO ke anusar, duniya mein har 8 mein se 1 insaan ko kamar dard ki problem hoti hai. India mein musculoskeletal problems — jisme kamar dard sabse bada hissa hai — doctor ke paas jaane ki sabse badi wajahon mein hain.',
  indiaContextSource: 'WHO Global Burden of Disease Study 2021; Mayo Clinic — Back Pain: Symptoms & Causes 2024',

  severityLevel1: [
    'Dard 1-2 din pehle kisi kaam ya weight uthane ke baad shuru hua',
    'Dard ek jagah hai — neeche pair mein nahi jaa raha',
    'Letne ya rest karne se thodi rahat milti hai',
    'Koi numbness (sunapan) ya weakness nahi hai pair mein',
    'Bukhaar, urine mein problem ya pet mein dard nahi hai saath mein',
  ],
  severityLevel2: [
    'Dard 2 hafte se zyada se hai aur better nahi ho raha',
    'Dard pair ya ghutne tak aa raha hai',
    'Pair mein sunapan (numbness) ya jhanjhanahat mahsoos ho rahi hai',
    'Dard raat ko zyada ho jaata hai — neend uchad jaati hai',
    'Chalne mein ya seedha khade rehne mein takleef ho rahi hai',
  ],
  severityLevel3: [
    'Kamar dard ke saath tez bukhaar (101°F se zyada) — turant hospital',
    'Kamar dard ke saath peshab mein bahut takleef ya khoon — turant hospital',
    'Pair mein bilkul kamzori — chalana ya uthna mushkil ho gaya — turant hospital',
    'Bladder ya bowel control kho rahi ho — turant hospital',
    'Kisi accident ya gir jaane ke baad dard shuru hua ho — turant hospital',
  ],

  timeline3Days: 'Aksar ye muscle strain (muscles ka khichna) hota hai — koi bhari cheez uthane se, galat posture se, ya achanak kisi movement se. Body mein muscles mein micro-tears aate hain jo inflammation (sujan) paida karta hai — aur yehi dard ka karan banta hai. Is stage mein rest, warm compress aur posture dhyan dena kaafi hota hai. Agar 3 din mein better nahi hua to Level 2 pe aao.',
  timeline4Weeks: 'Agar dard 1 hafte se zyada hai aur alag-alag tarah se feel ho raha hai — kabhi zyada, kabhi kam — to ye sirf muscle strain nahi hai. Is stage mein doctor se milna zaroori hai. Sciatica, slip disc, ya koi aur underlying cause ho sakta hai. Agar pair mein dard ya sunapan bhi aane laga hai to is hafte hi doctor dikhao — 4 hafte mat ruko.',
  timelineMonthPlus: 'Agar kamar dard baar baar aata hai ya 1 mahine se chal raha hai — ye chronic condition ban gayi hai. Sirf painkillers se ye manage nahi hogi. Ek proper diagnosis zaroori hai — X-ray ya MRI tak baat ja sakti hai. Homeopathy chronic kamar dard mein root cause address karne ka ek achha complementary option hai — lekin pehle diagnosis ho.',

  lifestyleCauses: [
    {
      _key: 'lc1',
      causeName: 'Galat Posture (Jhuka Hua Baithna)',
      mechanism: 'Roz ghanton tak jhuk ke laptop ya phone dekhne se spine ke vertebrae (haddiyan) ek unnatural position mein aa jaati hain. Is position mein spine ke aas-paas ki muscles ko zyada kaam karna padta hai — woh thak jaati hain aur tighten ho jaati hain. Waqt ke saath ye tightness dard mein badal jaati hai, khasskar lower back (neeche ki kamar) mein.',
      howToIdentify: 'Din ke end mein dard zyada hota hai. Office ya ghar mein baithne ke baad uthna mushkil lagta hai. Kuch der chalte hain to thoda better hota hai.',
    },
    {
      _key: 'lc2',
      causeName: 'Muscle Strain (Muscles Ka Khichna)',
      mechanism: 'Achanak koi bhari cheez uthana, gym mein galat exercise karna, ya ek jhatke wali movement — in sab se kamar ki muscles mein micro-level tears aate hain. Body is damage ko repair karne ke liye inflammation bhejti hai — aur yehi sujan (inflammation) dard ka source banta hai.',
      howToIdentify: 'Dard ek kaam ke theek baad shuru hua. Ek specific jagah pe dard hai. Haath lagane pe tender lagta hai. Letne se thodi rahat milti hai.',
    },
    {
      _key: 'lc3',
      causeName: 'Prolonged Standing Ya Ek Position Mein Rehna',
      mechanism: 'Ghanton tak khade rehne se — chahe ghar mein kaam karte hue ya kaam pe — spine pe constant pressure padta hai. Muscles fatigued ho jaati hain aur spine ke discs compress hoti hain. Ye dard din ke end mein ya shaam ko zyada feel hota hai.',
      howToIdentify: 'Dard din bhar badhta hai — subah theek, shaam tak zyada. Rest lene se better hota hai.',
    },
    {
      _key: 'lc4',
      causeName: 'Zyada Wajan (Obesity)',
      mechanism: 'Zyada body weight — khasskar pet ke aas-paas — spine ke liye ek constant additional load hai. Ye load spine ke alignment ko change karta hai aur lower back muscles pe extra strain dalta hai. Time ke saath ye chronic dard ka karan banta hai.',
      howToIdentify: 'Dard chal chuka hai, dheere dheere aaya. Zyada weight ho. Chalna ya long time khade rehna mushkil hota jaata hai.',
    },
  ],

  medicalCauses: [
    {
      _key: 'mc1',
      diseaseName: 'Sciatica',
      diseaseHindiName: 'Sciatic Nerve Ka Dard / Kamar Se Pair Tak Dard',
      howSymptomPresents: 'Sciatica mein dard sirf kamar mein nahi rehta — ye ek electric shock jaise kamar se neeche pair mein, ghutne tak ya paon tak jaata hai. Ye sciatic nerve — jo body ki sabse badi nerve hai — pe pressure padne ki wajah se hota hai.',
      howToIdentify: 'Ek hi taraf (right ya left) mein dard jaata hai. Pair mein sunapan ya jhanjhanahat hoti hai. Lambe time baithne se ya seedha khade rehne se dard zyada hota hai.',
      homeopediaSlug: 'sciatica',
      isAvailable: true,
    },
    {
      _key: 'mc2',
      diseaseName: 'Slip Disc (Herniated Disc)',
      diseaseHindiName: 'Disc Khisak Jana',
      howSymptomPresents: 'Spine ke do vertebrae ke beech ek cushion hoti hai — disc. Jab ye disc apni jagah se khisak jaati hai, to nearby nerves pe pressure padta hai. Iska dard tez, burning ya shooting type ka hota hai — aur pair mein bhi jaata hai.',
      howToIdentify: 'Khansi ya chheenk aane pe dard achanak tez ho jaata hai. Aage jhukna mushkil. Pair mein kamzori ya sunapan feel hoti hai.',
      homeopediaSlug: '',
      isAvailable: false,
    },
    {
      _key: 'mc3',
      diseaseName: 'Kidney Stone (Pathri)',
      diseaseHindiName: 'Gurde Ki Pathri',
      howSymptomPresents: 'Gurde mein pathri hone pe dard kamar ke ek taraf hota hai — aur ye bahut tez, cramping type ka hota hai. Ye aata-jaata rehta hai (colicky pain). Peshab mein khoon, jalaan, ya baar baar peshab jaana saath mein ho sakta hai.',
      howToIdentify: 'Dard ek taraf kamar mein hai — posture change karne se better nahi hota. Peshab se related koi bhi symptom saath mein hai. Rest se dard kam nahi hota.',
      homeopediaSlug: 'kidney-stone',
      isAvailable: true,
    },
    {
      _key: 'mc4',
      diseaseName: 'Cervical Spondylosis',
      diseaseHindiName: 'Gardan-Kamar Ki Haddi Ka Ghisna',
      howSymptomPresents: 'Age ke saath spine ke vertebrae ghis jaate hain. Cervical spondylosis mostly gardan mein hoti hai — lekin lower spondylosis kamar mein bhi dard deta hai. Ye dard dull aur constant type ka hota hai, age ke saath badhta hai.',
      howToIdentify: '40+ age mein zyada. Dard chronic hai — kai mahine se. Subah uthte waqt stiffness zyada hoti hai, chalte chalte thoda better hota hai.',
      homeopediaSlug: 'cervical-spondylosis',
      isAvailable: true,
    },
  ],

  redFlags: [
    'Spinal Infection (Osteomyelitis) — agar kamar dard ke saath tez bukhaar, kaampna, aur rest pe bhi dard ho to turant doctor. Ye infection serious hai aur treatment mein der dangerous hai.',
    'Kidney Infection (Pyelonephritis) — agar kamar dard ke saath peshab mein jalaan, bukhaar aur thakaan saath ho to hospital jaao. Kidney infection antibiotics se hi theek hoti hai — ghar pe mat baitho.',
    'Cauda Equina Syndrome — agar kamar dard ke saath bladder ya bowel control achanak kho jaaye to ye medical emergency hai. Ek minute mat ruko — turant hospital.',
  ],

  homeSteps: [
    {
      _key: 'hs1',
      action: 'Ice Pack — Pehle 24-48 Ghante (Naya Dard)',
      whyItWorks: 'Naya dard hone pe ice pack inflammation ko control karta hai — swelling aur nerve irritation dono kam hoti hai. Kapde mein wrap karke 15-20 minute lagao — seedha skin pe ice mat rakho.',
    },
    {
      _key: 'hs2',
      action: 'Warm Compress — 48 Ghante Ke Baad (Garmi Senkna)',
      whyItWorks: 'Garmi muscle tightness ko relax karti hai aur us area mein blood flow badhati hai. 15-20 minute warm water bag ya hot towel kamar pe lagao — din mein 2-3 baar. Pehle 48 ghante nahi — pehle ice better hai.',
    },
    {
      _key: 'hs3',
      action: 'Sahi Position Mein Letna',
      whyItWorks: 'Seedha peethe ke bal letne se kamar pe pressure padta hai. Ghutne thode mode karke letein — pillow ghutno ke neeche rakhein. Ye spine ko natural position mein laata hai aur muscles ko rest milta hai.',
    },
    {
      _key: 'hs4',
      action: 'Thodi Thodi Chalna — Bilkul Bed Rest Nahi',
      whyItWorks: 'Research kehta hai complete bed rest kamar dard ko aur badha deta hai. Ghar mein dheere dheere 5-10 minute chalna muscles ko stiffen hone se rokta hai aur recovery fast hoti hai.',
    },
    {
      _key: 'hs5',
      action: 'Posture Fix Karo',
      whyItWorks: 'Baithte waqt kamar seedhi rakho, screen eye level pe rakho, pair zameen pe flat rakhein. Ek ghante baithne ke baad 5 minute ke liye uthna zaroori hai — ek hi position mein zyada der mat baitho. Ye akela bahut bada fark karta hai chronic dard mein.',
    },
  ],

  homeopathyIndividualization: `Kamar dard ka naam ek hai — lekin wajah aur presentation har insaan mein alag hoti hai. Kisi ka dard subah zyada hota hai aur chalte chalte better hota hai. Kisi ka dard raat ko tez ho jaata hai. Kisi mein uthne-baithne se dard sharp hota hai, kisi mein constant bana rehta hai. Homeopathy mein sirf "kamar dard" nahi dekha jaata — aapka dard kaisa hai, kab badhta hai, kya se rahat milti hai, kitne waqt se hai — ye sab treatment decide karta hai. Isliye do alag logon ko kamar dard mein bilkul alag treatment ho sakti hai.`,

  homeopathyRootCause: `Baar baar aane wala kamar dard aksar ek deeper imbalance ka signal hota hai — muscle weakness, nerve irritation, ya structural change. Homeopathy mein sirf dard band karna goal nahi hota — jo wajah isko baar baar la rahi hai usse address kiya jaata hai. Waqt ke saath dard ki frequency aur intensity dono kam hoti hain. Chronic cases mein results individual hote hain aur research is area mein limited hai — lekin constitutional approach se long-term management mein fayda dekha gaya hai.`,

  homeopathySafety: `Homeopathy highly diluted medicines use karti hai — isliye practically side-effect free hai. Ye pregnancy mein, elderly patients mein, aur agar aap pehle se koi doosri medicine le rahe hain — tab bhi safely le sakte hain. Ek important baat: severe cases mein ya emergency mein conventional treatment pehle lein. Homeopathy complementary role mein hai — replacement nahi.`,

  isForYouIf: [
    'Aap root cause treat karna chahte hain — sirf painkiller se temporary relief nahi',
    'Aapko chronic ya recurring kamar dard hai jo baar baar aata hai',
    'Aap ek side-effect free approach prefer karte hain — especially agar pregnancy hai ya doosri medicines chal rahi hain',
  ],

  notForYouIf: [
    'Aapko abhi turant relief chahiye — emergency mein pehle conventional treatment lein, homeopathy baad mein saath chala sakte hain',
    'Aapki condition surgical hai (severe slip disc, spinal fracture) — surgery ke baad recovery mein homeopathy help kar sakti hai',
  ],

  homeopathyDiseaseLinks: [
    { _key: 'hdl1', diseaseName: 'Sciatica (Sciatic Nerve Dard) ka poora ilaaj',   diseaseSlug: 'sciatica'             },
    { _key: 'hdl2', diseaseName: 'Kidney Stone (Gurde Ki Pathri) ka poora ilaaj',  diseaseSlug: 'kidney-stone'         },
    { _key: 'hdl3', diseaseName: 'Cervical Spondylosis ka poora ilaaj',            diseaseSlug: 'cervical-spondylosis' },
  ],

  linkedDiseaseCards: [
    { _key: 'ldc1', title: 'Sciatica',              hindiName: 'Sciatic Nerve Ka Dard',      slug: 'sciatica',             isAvailable: true  },
    { _key: 'ldc2', title: 'Slip Disc',              hindiName: 'Disc Khisak Jana',           slug: '',                     isAvailable: false },
    { _key: 'ldc3', title: 'Kidney Stone',           hindiName: 'Gurde Ki Pathri',            slug: 'kidney-stone',         isAvailable: true  },
    { _key: 'ldc4', title: 'Cervical Spondylosis',   hindiName: 'Gardan-Kamar Ki Haddi Ka Ghisna', slug: 'cervical-spondylosis', isAvailable: true },
  ],

  faqs: [
    {
      _key: 'faq1',
      faqType: 'common-cause',
      question: 'Kamar dard ka sabse common karan kya hai?',
      answer: `Kamar dard ka sabse common karan muscle strain (muscles ka khichna) ya galat posture hai — yahi 70-80% cases mein hota hai.\n\nAaj ke zamane mein ghanton tak ek jagah baithna — chahe office mein, ghar mein, ya phone dekhte hue — kamar ki muscles ko fatigued aur tight kar deta hai. Spine ek natural S-shape mein hoti hai. Jab hum jhuk ke baithte hain ya galat position mein rehte hain, muscles isko support karne ke liye overtime kaam karti hain — aur waqt ke saath dard shuru ho jaata hai.\n\nDoosra common karan hai bhari cheez galat tarike se uthana — ghutne seedhe rakhke kamar se uthana instead of ghutne modke.\n\nAgar lifestyle-related karan hain to rest, posture fix, aur physical activity se aksar kaafi sudhar hota hai. Agar dard 2 hafte mein better nahi ho to doctor se milein — underlying cause ho sakta hai.`,
    },
    {
      _key: 'faq2',
      faqType: 'normal-vs-serious',
      question: 'Kamar dard kab normal hota hai aur kab doctor zaroori hai?',
      answer: `Kamar dard "normal" tab hota hai jab kisi specific cause ke baad hua ho — bhari cheez uthana, lamba safar, zyada exercise — aur 3-5 din mein rest se better ho raha ho.\n\nDoctor zaroori hai agar:\n- Dard 2 hafte se zyada chal raha hai aur better nahi ho raha\n- Dard pair mein jaata ho ya pair mein sunapan ho\n- Raat ko zyada hota ho — neend uchad jaaye\n- Bukhaar, urine mein problem, ya pet mein dard saath mein ho\n- Kisi accident ke baad dard aaya ho\n\nTurant hospital jaao agar kamar dard ke saath bladder ya bowel control kho rahi ho, tez bukhaar ho, ya pair mein achanak kamzori aa gayi ho. Ye signs serious underlying condition indicate kar sakte hain.`,
    },
    {
      _key: 'faq3',
      faqType: 'common-cause',
      question: 'Mahilaon mein kamar dard zyada kyun hota hai?',
      answer: `Mahilaon mein kamar dard ke kuch khas karan hote hain jo mardon mein nahi hote.\n\nSabse common: Hormonal changes — period cycle ke time prostaglandins (ek chemical) badhte hain jo uterus ke saath lower back muscles mein bhi cramping karwa sakte hain.\n\nPregnancy mein: Badhte baby ka weight aur posture change spine pe extra pressure dalta hai — kamar dard pregnancy ka ek bahut common symptom hai.\n\nOsteoporosis: Menopause ke baad mahilaon mein calcium loss zyada hoti hai — spine ki haddiyan kamzor hoti hain aur dard ka risk badhta hai.\n\nEndometriosis ya PCOS: Kuch reproductive conditions mein bhi kamar dard reflect ho sakta hai.\n\nAgar period ke time ya pregnancy mein dard hai to generally manageable hai — lekin agar bahut tez hai ya unusual symptoms hain to doctor se milein.`,
    },
    {
      _key: 'faq4',
      faqType: 'normal-vs-serious',
      question: 'Kamar dard ke saath bukhaar ho to kya karna chahiye?',
      answer: `Kamar dard ke saath bukhaar ho to ye serious sign hai — ghar pe mat baitho.\n\nYe combination spinal infection, kidney infection (pyelonephritis), ya koi aur systemic infection indicate kar sakta hai. In conditions mein delay karna dangerous ho sakta hai.\n\nAgar bukhaar 100°F (37.8°C) se zyada hai aur kamar dard ke saath hai — is hafte nahi, aaj doctor ke paas jaao. Agar bukhaar 102°F se zyada hai, kaampna ho raha hai, ya peshab mein jalaan bhi hai — turant hospital jaao.\n\nHomeopathy ya ghar ke nuskhe is situation mein appropriate nahi hain — pehle proper diagnosis aur treatment zaroori hai.`,
    },
    {
      _key: 'faq5',
      faqType: 'pregnancy',
      question: 'Pregnancy mein kamar dard normal hai kya?',
      answer: `Pregnancy mein kamar dard bahut common hai — 50-80% pregnant mahilaon ko hota hai — lekin is par dhyan dena zaroori hai.\n\nNormal hota hai jab: Barhte pet ki wajah se posture change ho aur lower back pe pressure badhe. Relaxin hormone joints ko loosen karta hai — ye bhi kamar dard ka ek karan hai. Generally 2nd aur 3rd trimester mein zyada hota hai.\n\nDoctor se milein agar: Dard bahut tez ho, ek taraf mein hi ho, pair mein jaaye, ya peshab se koi problem saath mein ho. Pregnancy mein kamar dard kidney problem ya premature labor ka sign bhi ho sakta hai — isliye kisi bhi unusual symptom ko ignore mat karo.\n\nComfort ke liye: Pregnancy pillow use karo, ghutne ke beech pillow rakhke soyo, heels mat pahno. Apne OB-GYN se baat karo — homeopathy pregnancy mein safe complementary option ho sakti hai lekin doctor ki guidance mein.`,
    },
    {
      _key: 'faq6',
      faqType: 'common-cause',
      question: 'Kamar dard aur pair mein dard saath mein kyun hota hai?',
      answer: `Kamar dard ke saath pair mein dard hona — khasskar ek hi taraf — aksar Sciatica ka sign hota hai.\n\nSciatic nerve body ki sabse badi nerve hai jo lower back se shuru hokar pair ke neeche tak jaati hai. Jab is nerve pe pressure padta hai — slip disc, muscle tightness, ya bone spur se — dard kamar se shuru hokar neeche pair mein electric shock ki tarah jaata hai.\n\nYe dard chhod chhod ke aata hai ya constant ho sakta hai. Pair mein sunapan ya jhanjhanahat bhi hoti hai. Lambe time baithne se zyada hota hai.\n\nAgar aapko kamar se pair mein dard ja raha hai to ek baar doctor se milna zaroori hai — nerve pe pressure zyada hone se permanent damage ka risk hota hai agar late karo.`,
    },
    {
      _key: 'faq7',
      faqType: 'common-cause',
      question: 'Period ke time kamar dard kyun hota hai?',
      answer: `Period ke time kamar dard hona bahut common hai — isko Dysmenorrhea ka hissa maana jaata hai.\n\nKaise hota hai: Period ke time body prostaglandins naam ka chemical release karti hai jo uterus ko contract karwata hai — ye bleeding ke liye zaroori hai. Lekin ye prostaglandins kamar aur pair ki muscles mein bhi cramping karwa sakte hain. Isliye period mein aksar kamar mein ek dull, achy dard rehta hai.\n\nYe generally period ke pehle 1-3 din mein zyada hota hai aur apne aap better hota jaata hai.\n\nDoctor se milein agar: Period ka dard itna tez ho ki kaam na ho sake, period ke baad bhi dard rahe, ya kaafi badh gaya ho pehle se. Ye Endometriosis ya PCOS ka sign ho sakta hai.`,
    },
    {
      _key: 'faq8',
      faqType: 'homeopathy',
      question: 'Kya homeopathy kamar dard mein kaam karta hai?',
      answer: `Kamar dard mein homeopathy madadgar rahi hai — khasskar chronic, recurring cases mein.\n\nHomeopathy ka approach ye hai ki sirf dard band nahi kiya jaata — aapka dard kaisa hai, kab badhta hai, kya se rahat milti hai — ye sab dekh ke individualized treatment di jaati hai. Do alag logon ko ek hi kamar dard mein alag treatment ho sakti hai.\n\nChronic kamar dard mein — jaise spondylosis, recurring muscle strain — homeopathy conventional treatment ke saath saath complementary taur pe kaam kar sakti hai. Results individual hote hain aur is area mein research abhi limited hai.\n\nEmergency ya surgical case mein homeopathy replacement nahi hai — conventional treatment pehle. Lekin recovery mein ya management mein saath chala sakte hain.`,
    },
    {
      _key: 'faq9',
      faqType: 'ghar-pe-wait',
      question: 'Kamar dard mein ghar pe kab tak reh sakte hain?',
      answer: `Agar dard kisi specific cause ke baad hua hai — bhari cheez uthana, galat position mein sona, ya zyada exercise — aur pair mein nahi jaata, bukhaar nahi hai, peshab mein koi problem nahi hai — to 3-5 din ghar pe manage karna reasonable hai.\n\nIn 3-5 dinon mein:\n- Rest karo lekin bilkul bed pe mat baitho — dheere chalna better hai\n- Warm ya ice compress use karo\n- Posture dhyan do\n\nAgar 5 din mein significantly better nahi hua — doctor ke paas jao. 2 hafte tak mat ruko.\n\nAgar ye signs hain to ek din bhi mat ruko: bukhaar, pair mein dard ya sunapan, peshab mein problem, ya dard itna tez ki chal nahi pa rahe.`,
    },
    {
      _key: 'faq10',
      faqType: 'baar-baar',
      question: 'Kamar dard baar baar kyun aata hai?',
      answer: `Baar baar aane wala kamar dard aksar ye signal deta hai ki original cause kabhi properly address nahi hua.\n\nCommon reasons jab kamar dard baar baar aata hai:\n- Posture fix nahi ki — yehi daily trigger rehta hai\n- Core muscles weak hain — spine ko support nahi milta\n- Underlying condition hai — slip disc ya spondylosis — jo abhi bhi hai\n- Sirf painkiller lete hain, cause treat nahi karte\n\nBaar baar aane wale dard ke liye ek proper evaluation zaroori hai — doctor se milein, ek baar X-ray ya physical examination karwayein. Sirf symptom treat karte rehne se problem solve nahi hogi.\n\nHomeopathy chronic recurring kamar dard mein ek complementary option hai — lekin diagnosis pehle.`,
    },
    {
      _key: 'faq11',
      faqType: 'permanent-solution',
      question: 'Kamar dard se hamesha ke liye kaise chutkara milega?',
      answer: `"Permanent cure" ka vaada koi bhi system honestly nahi kar sakta — aur koi kare to doubt karo.\n\nJo realistic hai: Sahi diagnosis ke baad proper treatment se kamar dard ki frequency itni kam ho sakti hai ki life practically normal ho jaaye.\n\nJo actually kaam karta hai long term mein:\n- Cause identify karo — sirf dard treat mat karo\n- Core muscles strengthen karo (doctor ya physiotherapist ki guidance mein)\n- Posture fix karo — ye akela bahut bada fark karta hai\n- Healthy weight maintain karo\n- Agar underlying condition hai (slip disc, spondylosis) — us par focused treatment\n\nHomeopathy chronic kamar dard management mein — specially constitution ke hisaab se — faydemand rahi hai. Results individual hote hain lekin long-term management mein support mil sakta hai.`,
    },
    {
      _key: 'faq12',
      faqType: 'test-diagnosis',
      question: 'Kamar dard mein kaunsa test karwana chahiye?',
      answer: `Ye depend karta hai aapka dard kitna purana hai aur kya symptoms hain.\n\nAgar dard naya hai (1-2 hafte) aur pair mein nahi jaata: Aksar koi test zaruri nahi hota — clinical examination kaafi hoti hai.\n\nAgar dard 2-4 hafte se zyada ya pair mein ja raha hai:\n- X-Ray (spine ka) — haddiyon ki position aur ghisaan dekhne ke liye\n- MRI — discs aur nerves dekhne ke liye (slip disc, sciatica confirm karne ke liye)\n- Blood tests — agar bukhaar ya infection ka shak ho\n\nAgar peshab se related symptoms hain:\n- Urine test — kidney infection ya stone rule out karne ke liye\n- Ultrasound — kidney stone confirm karne ke liye\n\nKaunsa test aapke liye sahi hai — doctor decide karega examination ke baad. Khud se koi bhi test mat karwao bina proper evaluation ke.`,
    },
  ],

  relatedSymptoms: [
    { _key: 'rs1', name: 'Leg Pain',      hindiName: 'Pair Mein Dard',     slug: 'leg-pain'     },
    { _key: 'rs2', name: 'Neck Pain',     hindiName: 'Gardan Dard',        slug: 'neck-pain'    },
    { _key: 'rs3', name: 'Joint Pain',    hindiName: 'Jodo Mein Dard',     slug: 'joint-pain'   },
    { _key: 'rs4', name: 'Sciatica Pain', hindiName: 'Kamar Se Pair Dard', slug: 'sciatica-pain'},
  ],

  sources: [
    { _key: 's1', name: 'WHO — Global Burden of Disease Study (Low Back Pain)',  year: '2021', url: 'https://www.who.int/news-room/fact-sheets/detail/musculoskeletal-conditions' },
    { _key: 's2', name: 'Mayo Clinic — Back Pain: Symptoms & Causes',            year: '2024', url: 'https://www.mayoclinic.org/diseases-conditions/back-pain/symptoms-causes/syc-20369860' },
    { _key: 's3', name: 'NCBI / PubMed — Pathophysiology of Low Back Pain',     year: '2023', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7367789/' },
    { _key: 's4', name: 'NHS UK — Back Pain: Causes and Treatment',              year: '2023', url: 'https://www.nhs.uk/conditions/back-pain/' },
  ],

  quickFactSymptom: 'Kamar dard (back pain) duniya mein disability ka sabse bada single cause hai.',
  quickFactIndiaStats: 'India mein musculoskeletal problems mein kamar dard sabse aage hai — Tier 2-3 cities mein physical labor aur desk jobs dono bade karan hain.',
  quickFactDoctorWhen: 'Pair mein dard jaaye, bukhaar aaye, ya 2 hafte mein better na ho — doctor zaroori hai.',
  reviewDate: 'May 2026',

  doctorNote: 'Maine apni practice mein dekha hai ki kamar dard ke jo patients aate hain, unme se kaafi log pehle kai mahine painkillers le chuke hote hain — bina ye jaane ki actual cause slip disc hai ya sciatica. Symptoms temporarily dab jaate hain lekin wajah wahin rehti hai. Detailed case history aur kamar dard ki exact nature dekhke — kab zyada hota hai, kya se rahat milti hai, pair mein jaata hai ya nahi — treatment bilkul alag ho sakta hai. Homeopathy mein ye constitutional assessment hi long-term results ka karan banti hai.',
}

async function seed() {
  console.log('🌱 Seeding Back Pain symptom page...')
  await client.createOrReplace(doc)
  console.log('✅ Symptom seeded — homeopedia.in/symptoms/back-pain')
}

seed().catch(console.error)
