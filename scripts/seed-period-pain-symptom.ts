import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'symptom-period-pain',
  _type: 'symptom',

  name: 'Period Pain',
  hindiName: 'Periods Mein Dard / Masik Dard',
  hinglishName: 'Periods Mein Dard / Period Pain',
  slug: { _type: 'slug', current: 'period-pain' },
  bodySystem: "Women's",

  metaTitle: 'Period Pain in Hindi — Karan, Ilaaj aur Homeopathy | Homeopedia',
  metaDescription: 'Periods mein dard (period pain) ke karan, severity aur ghar pe safe steps — simple Hinglish mein. Verified info, Dr. Shadab reviewed.',
  publishedAt: new Date('2026-05-18').toISOString(),

  whatIsThis: `Har mahine periods se pehle ya periods ke dauran pet ke nichle hisse mein jo dard hota hai — wo sirf "normal hai, sehna padega" nahi hai. Period pain, jise doctors Dysmenorrhea kehte hain, ek real medical condition hai.

Uterus (bacchedani) jab apni lining bahar nikalne ke liye contract karti hai, tab prostaglandins naam ke chemicals release hote hain — aur yahi dard ki wajah hoti hai. Aap akeli nahi hain — India mein majority working-age mahilaon ko kisi na kisi degree mein period pain hota hai.`,

  indiaContext: 'WHO ke anusaar duniya bhar mein 45-95% menstruating mahilaon ko dysmenorrhea hota hai — aur India mein ye ek common reason hai school ya kaam se chhoot lene ka.',
  indiaContextSource: 'WHO — Dysmenorrhoea 2023; NCBI — Prostaglandins and the Pathophysiology of Dysmenorrhea 2020',

  severityLevel1: [
    'Dard sirf periods ke pehle 1-2 din hota hai aur khud kam ho jaata hai',
    'Dard mild se moderate hai — kaam chhorna nahi padta',
    'Bleeding amount normal hai — na bahut zyada, na bahut kam',
    'Garam paani ki bottle ya rest se thodi rahat milti hai',
  ],
  severityLevel2: [
    'Dard itna zyada hai ki school, office ya daily kaam ruk jaata hai',
    'Painkiller lene ke baad bhi dard theek nahi ho raha',
    'Har cycle mein dard badhta ja raha hai — pehle se zyada',
    'Periods ke beech mein bhi dard rehta hai — sirf period ke time nahi',
    'Bleeding bahut heavy hai — ek ghante mein ek se zyada pad change karna pad raha hai',
  ],
  severityLevel3: [
    'Periods ke saath tez bukhaar (102°F se zyada) aur unusual discharge — turant hospital',
    'Itna severe dard ki ulti aa rahi hai ya behosh hone jaisi feeling — turant hospital',
    'Pregnancy possible hai aur periods miss hone ke baad ek taraf tez dard — Ectopic emergency, turant hospital',
    'Periods mein bahut zyada bleeding aur chakkar aa rahe hain — turant hospital',
  ],

  timeline3Days: 'Agar period pain pehli baar itna zyada ho raha hai, ya achanak is cycle mein bahut badh gaya hai — to ghar pe 1-2 din rest aur comfort steps try karo. Agar 2-3 din mein better nahi hua ya Level 2 signs hain to doctor zaruri hai.',
  timeline4Weeks: 'Agar har mahine periods mein dard hota hai aur aap painkillers pe dependent ho gayi hain — ye sign hai ki underlying cause explore karna chahiye. Is hafte gynaecologist se milein — routine appointment pe. Homeopathy is pattern ko todne mein madadgar ho sakti hai.',
  timelineMonthPlus: 'Agar period pain saalon se chal raha hai aur teen treatment try kar chuki hain — Endometriosis ya Fibroids jaise conditions rule out karwana zaroori hai. Doctor se milein aur test karwao. Homeopathy saath mein complementary role mein chal sakti hai — akela option nahi hai chronic severe cases mein.',

  lifestyleCauses: [
    {
      _key: 'lc1',
      causeName: 'Prostaglandin Ka Zyada Banana',
      mechanism: 'Periods mein uterus ki lining bahar nikalne ke liye prostaglandins release karta hai. Ye chemicals uterus ko contract karwate hain. Jin logon mein prostaglandins zyada hote hain — unhe contractions zyada strong hoti hain, aur isliye dard zyada hota hai.',
      howToIdentify: 'Dard periods shuru hote hi ya ek din pehle shuru hota hai. Pet ke nichle hisse mein cramping — kabhi kabhi thighs ya kamar mein bhi feel hota hai. Koi aur bimari nahi milti test mein.',
    },
    {
      _key: 'lc2',
      causeName: 'Sedentary Lifestyle — Kum Hilna Dolna',
      mechanism: 'Regular physical activity se body mein endorphins release hoti hain jo natural painkiller ka kaam karti hain. Jo mahilaen kam chalti hain, exercise nahi karti — unke periods mein dard zyada intense hota hai kyunki ye natural pain relief mechanism weak hoti hai.',
      howToIdentify: 'Office job, zyada time baith ke kaam — aur periods mein regular dard. Jab bhi exercise ki routine thi, periods thode better the.',
    },
    {
      _key: 'lc3',
      causeName: 'Stress Aur Anxiety',
      mechanism: 'Chronic stress se body mein cortisol levels high rehte hain. Ye hormonal balance bigadta hai — prostaglandins aur pain receptors zyada sensitive ho jaate hain. Emotionally tough time mein periods zyada painful ho sakte hain.',
      howToIdentify: 'Exam time, job pressure ya family stress ke mahino mein period pain zyada tha. Normal mahino mein better tha.',
    },
    {
      _key: 'lc4',
      causeName: 'Smoking / Alcohol',
      mechanism: 'Smoking blood vessels ko narrow karti hai — uterus tak blood flow kam hota hai, jisse cramping badhti hai. High-sugar, processed food inflammation badhata hai. Research suggests smoking karne wali mahilaon mein period pain significantly zyada hota hai.',
      howToIdentify: 'Agar smoking ya alcohol intake hai — ye ek contributing factor ho sakta hai period pain mein.',
    },
  ],

  medicalCauses: [
    {
      _key: 'mc1',
      diseaseName: 'Dysmenorrhoea',
      diseaseHindiName: 'Kasht-artav / Masik Dard',
      howSymptomPresents: 'Ye primary condition hai jisme sirf period pain hota hai — koi aur bimari nahi. Uterus ke strong contractions wajah hain. Dard cramping type hota hai, periods ke pehle din zyada.',
      howToIdentify: 'Koi test mein kuch nahi aata — pure clinical diagnosis hai. Dard periods ke saath aata hai aur periods khatam hone ke baad theek hota hai.',
      homeopediaSlug: 'dysmenorrhoea',
      isAvailable: true,
    },
    {
      _key: 'mc2',
      diseaseName: 'Endometriosis',
      diseaseHindiName: 'Anter-garbhashay Rog',
      howSymptomPresents: 'Uterus ki lining jaisi tissue uterus ke bahar bhi grow karti hai. Ye tissue bhi periods ke time react karti hai — isse bahut severe dard hota hai jo normal period pain se kaafi zyada hota hai.',
      howToIdentify: 'Dard periods ke alawa bhi hota hai — sex ke time, toilet ke time. Infertility bhi associated ho sakti hai. Ultrasound + laparoscopy se diagnose hota hai.',
      homeopediaSlug: 'endometriosis',
      isAvailable: true,
    },
    {
      _key: 'mc3',
      diseaseName: 'PCOD / PCOS',
      diseaseHindiName: 'Polycystic Ovary Disease',
      howSymptomPresents: 'PCOD mein periods irregular hote hain — kabhi zyada dard, kabhi bilkul nahi. Hormonal imbalance ki wajah se uterine lining irregular build hoti hai.',
      howToIdentify: 'Irregular periods, weight gain, face pe hair growth ke saath dard. Ultrasound mein ovaries pe cysts dikhte hain.',
      homeopediaSlug: 'pcod',
      isAvailable: true,
    },
    {
      _key: 'mc4',
      diseaseName: 'Uterine Fibroid',
      diseaseHindiName: 'Bacchedani Ki Rasoli / Ganth',
      howSymptomPresents: 'Fibroids uterus ke andar ya bahar muscular growths hain. Ye periods ko heavy aur painful banate hain — especially jab bade hon.',
      howToIdentify: 'Heavy bleeding + dard combination. Pet mein bhaari pan. Ultrasound se clearly diagnose hota hai.',
      homeopediaSlug: 'uterine-fibroid',
      isAvailable: true,
    },
  ],

  redFlags: [
    'Ectopic Pregnancy — agar periods miss hua aur ek taraf tez dard ho to turant emergency mein jaao. Ye life-threatening hai.',
    'Pelvic Inflammatory Disease (PID) — agar period pain ke saath bukhaar aur unusual vaginal discharge ho — turant doctor. Infection serious ho sakta hai.',
    'Ovarian Cyst Rupture — agar achanak bahut tez, knife jaisi stabbing pain pet mein aaye — emergency treatment zaroori hai, wait mat karo.',
  ],

  homeSteps: [
    {
      _key: 'hs1',
      action: 'Garam Paani Ki Bottle — Pet Pe Rakho',
      whyItWorks: 'Heat se uterus ki muscles relax hoti hain. Blood circulation improve hota hai aur prostaglandins ka effect kuch kam hota hai. Pet ke nichle hisse pe 15-20 minute warm water bag ya heating pad lagao.',
    },
    {
      _key: 'hs2',
      action: 'Fetal Position Mein Lait Jaao',
      whyItWorks: 'Ghutne chest ki taraf kheenchne se uterus pe pressure kam hota hai. Abdominal muscles relax hoti hain — cramping thodi better feel hoti hai. Side pe lait ke ghutne mod lo — 10-15 minute.',
    },
    {
      _key: 'hs3',
      action: 'Halki Walking Ya Stretching',
      whyItWorks: 'Movement se endorphins release hoti hain — body ka natural painkiller. Agar dard bahut severe nahi hai to 10-15 minute halki walk helpful hoti hai. Bahut zyada dard mein forced exercise mat karo — rest better hai.',
    },
    {
      _key: 'hs4',
      action: 'Garam Paani Ya Adrak-Tulsi Chai Peena',
      whyItWorks: 'Dehydration bloating aur cramps badha sakti hai. Garam paani ya herbal chai muscles ko internally warm rakhta hai aur discomfort thoda kam karta hai. Cold drinks aur ice se periods mein cramps badh sakti hain.',
    },
    {
      _key: 'hs5',
      action: 'Kamar Ki Halki Circular Massage',
      whyItWorks: 'Kamar ke nichle hisse mein circular motion se massage — uterine nerve signals kuch reduce hote hain. Gol gol halke haath se 5-7 minute kamar massage helpful ho sakti hai.',
    },
  ],

  homeopathyIndividualization: `Period pain ka naam ek hai — lekin wajah aur nature har mahila mein alag hoti hai. Kisi ko periods shuru hone se pehle dard hota hai, kisi ko pehle ghante mein — aur kisi ko poore teen din. Kisi ka dard garam senk se better hota hai, kisi ka aur bura hota hai. Homeopathy mein aapki period pain exactly kaisi hai — ye decide karta hai ki treatment kya hoga. Isliye ek hi complaint mein do mahilaon ka treatment bilkul alag ho sakta hai.`,

  homeopathyRootCause: `Baar baar har cycle mein dard aana aksar ek deeper hormonal ya structural imbalance ka signal hota hai. Homeopathy mein sirf is cycle ka dard band karna goal nahi hota — jo pattern isko baar baar la raha hai, usse address kiya jaata hai. Waqt ke saath periods ki intensity aur dard dono kam hone ke cases clinic mein dekhe gaye hain. Research is area mein limited hai aur results individual hote hain — lekin systemic approach clearly alag hai.`,

  homeopathySafety: `Homeopathy highly diluted medicines use karta hai — isliye ye practically side-effect free hai. Jo mahilaen pregnancy plan kar rahi hain, ya jo kaafi lambe samay se painkillers pe dependent hain — unke liye ye ek safe complementary option hai. Ek zaroori baat: severe acute dard ya emergency mein conventional treatment pehle. Homeopathy complementary role mein kaam karta hai — replacement nahi hai.`,

  isForYouIf: [
    'Aap har mahine painkillers pe dependent hain aur isse nikalna chahti hain',
    'Aap root cause samajhna aur address karna chahti hain — sirf is cycle ka dard manage nahi karna',
    'Aap pregnancy plan kar rahi hain ya doosri medicines chal rahi hain — aur side-effect free option chahiye',
  ],

  notForYouIf: [
    'Abhi is waqt bahut severe dard hai — pehle painkiller ya doctor se immediate relief lein, homeopathy baad mein saath chalao',
    'Endometriosis ya Fibroids ki surgical recommendation hai — surgery ke baad recovery mein homeopathy complementary role mein helpful ho sakti hai',
  ],

  homeopathyDiseaseLinks: [
    { _key: 'hdl1', diseaseName: 'Dysmenorrhoea (Masik Dard) ka poora ilaaj', diseaseSlug: 'dysmenorrhoea'  },
    { _key: 'hdl2', diseaseName: 'Endometriosis ka poora ilaaj',               diseaseSlug: 'endometriosis'  },
    { _key: 'hdl3', diseaseName: 'PCOD ka poora ilaaj',                        diseaseSlug: 'pcod'           },
    { _key: 'hdl4', diseaseName: 'Uterine Fibroid ka poora ilaaj',             diseaseSlug: 'uterine-fibroid'},
  ],

  linkedDiseaseCards: [
    { _key: 'ldc1', title: 'Dysmenorrhoea',    hindiName: 'Kasht-artav / Masik Dard',  slug: 'dysmenorrhoea',  isAvailable: true },
    { _key: 'ldc2', title: 'Endometriosis',    hindiName: 'Anter-garbhashay Rog',      slug: 'endometriosis',  isAvailable: true },
    { _key: 'ldc3', title: 'PCOD / PCOS',      hindiName: 'Polycystic Ovary Disease',  slug: 'pcod',           isAvailable: true },
    { _key: 'ldc4', title: 'Uterine Fibroid',  hindiName: 'Bacchedani Ki Rasoli',      slug: 'uterine-fibroid', isAvailable: true },
  ],

  faqs: [
    {
      _key: 'faq1',
      faqType: 'common-cause',
      question: 'Periods mein dard kyun hota hai?',
      answer: `Periods mein dard isliye hota hai kyunki uterus apni lining bahar nikalne ke liye prostaglandins release karta hai — ye chemicals uterus ko contract karwate hain. Jitne zyada prostaglandins, utni zyada cramping.\n\nYe ek biological process hai — lekin jab dard bahut zyada ho to ye zaruri nahi ki "normal" hai.\n\nPrimary Dysmenorrhea mein koi aur bimari nahi hoti — sirf ye chemical imbalance hota hai. Secondary Dysmenorrhea mein Endometriosis, PCOD ya Fibroids jaisi underlying conditions hoti hain.\n\nAgar dard bahut severe hai ya badhta ja raha hai — doctor se cause explore karwao.`,
    },
    {
      _key: 'faq2',
      faqType: 'normal-vs-serious',
      question: 'Period pain kab normal hai aur kab doctor zaruri hai?',
      answer: `Mild se moderate cramping jo periods ke pehle 1-2 din hoti hai aur khud theek ho jaati hai — ye broadly normal range mein aata hai.\n\nDoctor zaruri hai jab:\n- Dard itna zyada hai ki roz ka kaam ruk jaata hai\n- Har cycle mein dard badh raha hai — pehle se zyada\n- Painkiller kaam nahi kar raha\n- Periods ke beech bhi dard rehta hai\n- Sex ya toilet ke time bhi pain hoti hai\n\nYe signs kisi underlying condition ke ho sakte hain — ignore nahi karna chahiye.`,
    },
    {
      _key: 'faq3',
      faqType: 'duration',
      question: 'Periods mein dard kitne din tak rehta hai?',
      answer: `Normal period pain usually periods shuru hone ke saath shuru hota hai aur 1-3 din mein khud kam ho jaata hai. Pehla din typically sabse zyada dard wala hota hai.\n\nAgar dard 3-4 din se zyada rehta hai, ya periods ke khatam hone ke baad bhi dard rehta hai — ye sign hai ki kuch aur chal raha hai.\n\nAise cases mein gynaecologist se milna chahiye.`,
    },
    {
      _key: 'faq4',
      faqType: 'ghar-pe-wait',
      question: 'Period pain mein ghar pe kya karna chahiye?',
      answer: `Ghar pe ye safe comfort steps try kar sakte hain:\n- Garam paani ki bottle pet ke nichle hisse pe 15-20 min\n- Side mein lait ke ghutne chest ki taraf kheenchna (fetal position)\n- Halki walking agar severe nahi hai\n- Garam paani ya adrak ki chai peena\n- Kamar par halki circular massage\n\nYe steps dard se thodi rahat de sakte hain lekin ye treatment nahi hain. Agar in se better nahi ho raha — doctor se milein.`,
    },
    {
      _key: 'faq5',
      faqType: 'homeopathy',
      question: 'Kya homeopathy period pain mein kaam karta hai?',
      answer: `Homeopathy period pain mein individualized approach se kaam karta hai — matlab sirf dard band nahi karna, balki aapka dard exactly kaisa hai ye dekh ke treatment decide hoti hai.\n\nClinic mein kai mahilaon ne waqt ke saath frequency aur intensity mein improvement notice ki hai — especially chronic recurring cases mein.\n\nResearch is area mein limited hai aur results individual hote hain. Ye conventional treatment ke saath complementary role mein sabse acha kaam karta hai — complete replacement nahi.`,
    },
    {
      _key: 'faq6',
      faqType: 'baar-baar',
      question: 'Periods ke baad bhi dard kyun rehta hai?',
      answer: `Periods ke baad bhi dard rehna normally expected nahi hai. Iske kuch reasons ho sakte hain:\n\n- Endometriosis — uterus ke bahar tissue grow hoti hai jo periods ke baad bhi inflamed rehti hai\n- Ovarian cysts — periods ke baad bhi pressure dete hain\n- PID (Pelvic Inflammatory Disease) — infection ki wajah se\n\nAgar periods khatam hone ke 2-3 din baad bhi dard hai — gynaecologist se milein aur ultrasound karwao. Ye "normal" nahi hai.`,
    },
    {
      _key: 'faq7',
      faqType: 'pregnancy',
      question: 'Pregnancy mein period jaisa dard kyun hota hai?',
      answer: `Pregnancy mein period jaisa cramping hona kuch cases mein normal ho sakta hai — embryo implantation ke time ya uterus stretch hone se. Lekin ye situation hai jab doctor se baat karna zaroori hai.\n\nSpecifically:\n- Ek taraf tez dard + periods miss + pregnancy possible — TURANT hospital jaao, Ectopic pregnancy rule out karo — ye emergency hai\n- Mild cramping without bleeding — doctor ko inform karo\n- Heavy bleeding ke saath cramping — immediately hospital jaao\n\nPregnancy mein koi bhi dard khud evaluate mat karo — doctor se confirm karo.`,
    },
    {
      _key: 'faq8',
      faqType: 'test-diagnosis',
      question: 'Period pain mein kaunsa test karwana chahiye?',
      answer: `Period pain ke liye typically ye tests hote hain:\n\n- Pelvic Ultrasound — fibroids, cysts, PCOD dekhne ke liye\n- CA-125 blood test — endometriosis ke suspicion mein\n- Complete Blood Count (CBC) — anemia rule out karne ke liye (heavy bleeding ke saath)\n- Pap Smear — routine gynecological health ke liye\n- Laparoscopy — agar Endometriosis strongly suspected hai lekin ultrasound mein nahi dikh raha\n\nKaunsa test zaruri hai ye doctor decide karega history sunke. Khud se tests book karne se pehle gynaecologist se milein.`,
    },
    {
      _key: 'faq9',
      faqType: 'normal-vs-serious',
      question: 'Bina period ke period jaisa dard kyun hota hai?',
      answer: `Bina actual period ke period jaisa dard hone ki kuch wajah ho sakti hain:\n\n- Ovulation pain (Mittelschmerz) — cycle ke beech mein, ek taraf, thodi der ke liye\n- PCOD mein irregular ovulation — kabhi kabhi sirf dard hota hai, bleeding nahi\n- Endometriosis — uterus ke bahar tissue periods cycle follow karti hai, dard deti hai\n- Pregnancy — implantation ya ectopic ki wajah se\n- Appendicitis ya koi aur abdominal issue — periods se bilkul unrelated\n\nAgar ye dard regular ho raha hai ya severe hai — doctor se milein. Khud se assume mat karo ki ye sirf "period wala dard" hai.`,
    },
    {
      _key: 'faq10',
      faqType: 'permanent-solution',
      question: 'Periods mein dard se hamesha ke liye kaise chutkara milega?',
      answer: `Seedha baat karte hain — "hamesha ke liye guaranteed cure" ka vaada koi bhi system honestly nahi kar sakta.\n\nJo realistic hai:\nPrimary Dysmenorrhea (koi aur bimari nahi) mein — lifestyle changes, hormonal treatment, ya constitutional homeopathic treatment se periods significantly better ho sakte hain. Kai mahilaon mein dard itna kam hota hai ki painkillers ki zarurat hi nahi padti.\n\nSecondary causes mein — pehle underlying condition (Endometriosis, Fibroids) treat karna padta hai.\n\nLong-term sustainable improvement ke liye consistent treatment + lifestyle changes dono chahiye. Quick fix nahi, lasting change chahiye.`,
    },
    {
      _key: 'faq11',
      faqType: 'india-specific',
      question: 'Garam chai ya kadha periods mein peena chahiye?',
      answer: `Garam peena — haan, helpful ho sakta hai — cold se better hai. Garam paani ya adrak-tulsi chai muscle relaxation mein helpful hai.\n\nLekin very strong caffeine wali chai — bahut zyada piyo to cramping badh sakti hai kuch cases mein. Moderate amount okay hai.\n\nYe diet advice sirf general guidance hai — isse treatment replace nahi hoti. Agar dard severe hai to garam chai se sirf thodi si comfort milegi — underlying cause address karna padega.`,
    },
    {
      _key: 'faq12',
      faqType: 'baar-baar',
      question: 'Period pain har cycle mein zyada kyun ho jaata hai?',
      answer: `Har cycle mein badhta dard ek important warning sign hai — ignore mat karo.\n\nIske reasons ho sakte hain:\n- Endometriosis agar hai to wo progressively worse hoti hai treatment ke bina\n- Fibroids bade ho rahe hain\n- Stress ya lifestyle factors badh rahe hain\n- Painkiller dependence se body tolerance build kar rahi hai\n\nJo bhi reason ho — badhta dard = doctor se milne ka signal hai. Is hafte appointment lo — routine mein rakho mat.`,
    },
  ],

  relatedSymptoms: [
    { _key: 'rs1', name: 'Heavy Periods',         hindiName: 'Zyada Bleeding',           slug: 'heavy-periods'     },
    { _key: 'rs2', name: 'Irregular Periods',     hindiName: 'Irregular Masik Dharm',    slug: 'irregular-periods' },
    { _key: 'rs3', name: 'Bloating',              hindiName: 'Periods Mein Pet Phoolna', slug: 'bloating'          },
    { _key: 'rs4', name: 'Back Pain',             hindiName: 'Kamar Dard',               slug: 'back-pain'         },
  ],

  sources: [
    { _key: 's1', name: 'World Health Organization — Dysmenorrhoea',                              year: '2023', url: 'https://www.who.int/news-room/fact-sheets/detail/dysmenorrhoea' },
    { _key: 's2', name: 'Mayo Clinic — Menstrual Cramps: Symptoms & Causes',                     year: '2024', url: 'https://www.mayoclinic.org/diseases-conditions/menstrual-cramps/symptoms-causes/syc-20374938' },
    { _key: 's3', name: 'NCBI / PubMed — Prostaglandins and the Pathophysiology of Dysmenorrhea', year: '2020', url: 'https://pubmed.ncbi.nlm.nih.gov/32030604/' },
    { _key: 's4', name: 'NHS UK — Period Pain',                                                   year: '2023', url: 'https://www.nhs.uk/conditions/period-pain/' },
  ],

  quickFactSymptom: 'Uterus ke strong muscle contractions se period pain hota hai — prostaglandins is process ko trigger karte hain.',
  quickFactIndiaStats: 'India mein working-age mahilaon mein period pain ek top reason hai school/office se absent rehne ka.',
  quickFactDoctorWhen: 'Jab dard itna zyada ho ki daily kaam ruk jaaye — ya har cycle mein badhta ja raha ho — doctor zaroori hai.',
  reviewDate: 'May 2026',

  doctorNote: 'Maine apni practice mein dekha hai ki period pain ke liye jo mahilaen aati hain, unme se kaafi badi sankhya saalon se sirf painkiller se manage kar rahi hoti hain — bina kabhi ye jaane ki koi underlying cause hai ya nahi. Endometriosis especially ek aisi condition hai jisme average diagnosis 7-10 saal lag jaati hai — kyunki mahilaen aur kabhi kabhi doctors bhi ise "normal" period pain samajhte rehte hain. Homeopathy mein mujhe jo fark dikhta hai woh ye hai ki constitution dekh ke treatment se periods ka overall pattern theek hota hai — sirf ek cycle ka dard nahi.',
}

async function seed() {
  console.log('🌱 Seeding Period Pain symptom page...')
  await client.createOrReplace(doc)
  console.log('✅ Symptom seeded — homeopedia.in/symptoms/period-pain')
}

seed().catch(console.error)
