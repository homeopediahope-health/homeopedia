import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'symptom-white-discharge',
  _type: 'symptom',

  name: 'White Discharge',
  hindiName: 'Safed Pani Aana / Shwet Pradar',
  hinglishName: 'White discharge ya safed pani',
  slug: { _type: 'slug', current: 'white-discharge' },
  bodySystem: "Women's",

  metaTitle: 'White Discharge in Hindi — Karan, Ilaaj aur Homeopathy | Homeopedia',
  metaDescription: 'Safed pani (white discharge) ke karan, severity aur ghar pe safe steps — simple Hinglish mein. Verified info, Dr. Shadab reviewed.',
  publishedAt: new Date('2026-05-18').toISOString(),

  whatIsThis: `Kabhi kabhi inner wear mein safed ya off-white daag — koi dard nahi, koi clearly visible problem nahi — bas ek ajeeb sa wetness jo din bhar bana rehta hai. Kai baar smell bhi aati hai, kabhi kabhi khujli bhi. Aur phir shuru hoti hai woh uncertainty — "ye normal hai ya kuch galat ho raha hai?"

Vaginal discharge har healthy mahila mein hota hai — ye body ka apna cleaning system hai. Cervix aur vagina ki glands ek natural fluid banati hain jo dead cells aur bacteria ko bahar karta hai. Ye safed ya clear hota hai, aur quantity alag-alag time pe badal-ti rehti hai.

Lekin jab ye bahut zyada ho, smell aaye, rang badal jaaye, ya itching ke saath aaye — to body kuch signal de rahi hoti hai. Ye page aapko 2 minute mein batayega: aapka white discharge normal hai ya doctor zaroori hai.`,

  indiaContext: 'WHO ke anusaar vaginal discharge-related complaints South Asia mein gynaecological outpatient visits ki leading wajahaat mein se ek hain. Leucorrhoea India ki top 5 gynaecological complaints mein se ek hai — aur kaafi mahilayein ye silently face karti hain bina proper diagnosis ke.',
  indiaContextSource: 'WHO Reproductive Health Overview 2023; Mayo Clinic Vaginal Discharge 2024',

  severityLevel1: [
    'Discharge clear ya off-white hai — koi strong smell nahi',
    'Periods se 2-3 din pehle ya cycle ke beech mein zyada hota hai',
    'Itching nahi hai, jalan nahi hai',
    'Pregnancy mein pehli trimester mein thoda zyada — lekin smell-free',
  ],
  severityLevel2: [
    'Discharge yellowish ya greenish hone laga hai',
    'Mild smell aa rahi hai — sabun se nahaane ke baad bhi',
    'Thodi khujli ya jalan hai — continuous nahi, kabhi kabhi',
    'Periods irregular ho gaye hain saath mein',
  ],
  severityLevel3: [
    'Discharge cheese jaise thick, ganthe-dar hai — saath mein intense itching — turant doctor',
    'Strong fishy ya foul smell hai jo kisi bhi cleaning se nahi jaati — turant doctor',
    'Pelvic area mein tez dard hai ya bukhaar hai — turant doctor',
    'Pregnancy mein achanak bahut zyada discharge ho raha hai — turant hospital',
    'Bleeding ke saath discharge — periods ke bahar — turant doctor',
  ],

  timeline3Days: 'Agar discharge achanak badha hai — naya soap, naya detergent, naya inner wear, ya periods aane wale hain — ye aksar wajah hoti hai. Body adjust kar rahi hai. Agar koi smell ya itching nahi hai — 2-3 din observe karo. Agar 5 din mein better nahi hua to Level 2 wali signs check karo.',
  timeline4Weeks: 'Agar 1-2 hafte se lagatar hai — especially agar itching shuru ho gayi hai ya smell aa rahi hai — ye ab observe karne ka time nahi. Ye vaginal infection ya hormonal imbalance ka signal ho sakta hai. Is hafte doctor se milein.',
  timelineMonthPlus: 'Agar months se hai — kabhi zyada kabhi thoda — ye chronic pattern hai. Aksar iska connection hormonal issues (PCOD, endometriosis), recurrent infections, ya immune system se hota hai. Sirf ghar pe manage karne se ye cycle band nahi hogi — doctor evaluation zaroori hai. Homeopathy is type ke chronic cases mein root cause pe kaam karta hai.',

  lifestyleCauses: [
    {
      _key: 'lc1',
      causeName: 'Tight Synthetic Inner Wear',
      mechanism: 'Synthetic fabric skin ko breathe nahi karne deti — vaginal area mein heat aur moisture trap hoti hai. Ye warm, moist environment bacteria ke grow karne ke liye perfect condition bana deta hai. Body zyada fluid produce karke is irritation ko counter karne ki koshish karti hai — result: discharge badh jaata hai.',
      howToIdentify: 'Ye usually mild smell ke saath hota hai — khaasiyat ye hai ki cotton undergarments se switch karne pe kuch dino mein fark dikhta hai.',
    },
    {
      _key: 'lc2',
      causeName: 'Vaginal Area Ki Over-Cleaning (Douching)',
      mechanism: 'Vagina ka apna pH balance hota hai — ek slightly acidic environment jo good bacteria (Lactobacillus) maintain karta hai. Jab hum scented soaps, wipes, ya douching se andar clean karne ki koshish karte hain — ye natural pH disturb ho jaata hai. Good bacteria marr jaate hain, bad bacteria ko jagah mil jaati hai, aur body reactive discharge produce karti hai.',
      howToIdentify: 'Ye discharge often soap use karne ke baad zyada hoti hai — aur smell aati hai jo cleaning se wapas jaati nahi.',
    },
    {
      _key: 'lc3',
      causeName: 'Stress Aur Neend Ki Kami',
      mechanism: 'Stress hormones — khaasiyat cortisol — directly immune system ko affect karte hain. Immune system kamzor hone pe vaginal flora ka balance bigad jaata hai. Yeast (Candida) jaise organisms jo normally controlled rehte hain, wo overgrow karne lagte hain. Ye white, thick discharge ka common cause hai jo itching ke saath aata hai.',
      howToIdentify: 'Exams, office deadlines, ya emotional stress ke baad discharge achanak badh jaaye — ye connection hai.',
    },
    {
      _key: 'lc4',
      causeName: 'Hormonal Changes (Periods Cycle)',
      mechanism: 'Estrogen levels pure menstrual cycle mein badal-te rehte hain. Ovulation ke time (cycle ke 14-16th day) discharge naturally zyada hoti hai — clear, slippery, egg-white jaisi. Periods se pehle bhi thodi zyada hoti hai. Ye completely normal physiology hai.',
      howToIdentify: 'Agar discharge cycle ke specific time pe hi badh-ti hai, koi smell nahi, koi itching nahi — ye normal hai.',
    },
  ],

  medicalCauses: [
    {
      _key: 'mc1',
      diseaseName: 'Leucorrhoea (Shwet Pradar)',
      diseaseHindiName: 'Shwet Pradar / Safed Pani Ki Bimari',
      howSymptomPresents: 'Leucorrhoea mein white ya yellowish discharge consistently zyada hoti hai — sirf cycle-specific nahi. Weakness, kamar dard, aur pet ke nichle hisse mein mild discomfort bhi ho sakti hai.',
      howToIdentify: 'Agar discharge roz hoti hai — cycle ke saath connected nahi — aur saath mein thakaan ya kamar dard hai to leucorrhoea likely hai.',
      homeopediaSlug: 'leucorrhoea',
      isAvailable: true,
    },
    {
      _key: 'mc2',
      diseaseName: 'Vaginal Infection (Yoni Sankraman)',
      diseaseHindiName: 'Yoni Sankraman',
      howSymptomPresents: 'Infection ke type pe depend karta hai. Bacterial Vaginosis mein fishy smell ke saath grey-white thin discharge. Yeast Infection (Candidiasis) mein thick, white, cottage cheese jaisi discharge — intense itching ke saath. Trichomonas mein yellow-green, frothy discharge — foul smell ke saath.',
      howToIdentify: 'Smell aur texture bahut important clue hain — each infection ka pattern alag hota hai. Self-diagnosis mushkil hai — doctor se confirm karwao.',
      homeopediaSlug: '',
      isAvailable: false,
    },
    {
      _key: 'mc3',
      diseaseName: 'PCOD (Polycystic Ovarian Disease)',
      diseaseHindiName: 'Anantkosh Rog / PCOD',
      howSymptomPresents: 'PCOD mein hormonal imbalance hoti hai — estrogen-progesterone ratio bigda rehta hai. Isse discharge irregular ho jaati hai — kabhi bahut zyada, kabhi bahut kam. Aksar irregular periods ke saath aata hai.',
      howToIdentify: 'Agar irregular periods, weight gain, ya facial hair ke saath discharge bhi irregular hai — PCOD evaluate karwao. Ultrasound confirm karta hai.',
      homeopediaSlug: 'pcod',
      isAvailable: true,
    },
  ],

  redFlags: [
    'Cervical ya Uterine Infections — agar discharge ke saath pelvic pain hai, bukhaar hai, ya sexual intercourse mein pain hai to ek minute mat ruko — ye upper reproductive tract infection ho sakta hai jo serious complications cause kar sakta hai',
    'STIs (Sexually Transmitted Infections) — fishy smell ke saath green-yellow discharge, ya ulcers ke saath discharge — STI possibility rule out karna zaroori hai, ye test se hi confirm hota hai',
    'Pregnancy Complications — pregnancy mein achanak bahut zyada watery ya blood-tinged discharge — turant hospital jaao, ye preterm labor ka sign ho sakta hai',
  ],

  homeSteps: [
    {
      _key: 'hs1',
      action: 'Cotton Undergarments — Immediately Switch Karo',
      whyItWorks: 'Cotton fabric breathable hoti hai — moisture absorb karti hai aur vaginal area ko dry rakhti hai. Ye bacteria aur yeast ke grow karne ki main condition (warmth + moisture) ko hata deti hai.',
    },
    {
      _key: 'hs2',
      action: 'Vaginal Area Ko Bahar Se Sirf Paani Se Clean Karo',
      whyItWorks: 'Vagina self-cleaning organ hai — andar kuch daalne ya scented soaps use karne ki zarurat nahi. Sirf external area (vulva) ko mild, unscented soap ya plain paani se clean karo — pH balance disturb nahi hoga.',
    },
    {
      _key: 'hs3',
      action: 'Inner Wear Raat Ko Mat Pehno — Ya Loose Cotton Pehno',
      whyItWorks: 'Raat ko airflow milne se vaginal area ki humidity kam hoti hai — ye yeast overgrowth ko control karta hai. Ek simple step jo chronic cases mein bhi fark laata hai.',
    },
    {
      _key: 'hs4',
      action: 'Sanitary Pads / Panty Liners Regular Change Karo',
      whyItWorks: 'Discharge absorb karne ke liye pads ka use karte ho to unhe 4-5 ghante se zyada mat rakho. Moisture trap hone se infection risk badh jaata hai. Fresh pad = less bacterial growth.',
    },
    {
      _key: 'hs5',
      action: 'Stress Identify Karo — Neend Puri Lo',
      whyItWorks: 'Stress-induced hormonal changes directly discharge badha sakte hain. Agar discharge stress ke time zyada hoti hai — ye connection real hai. Neend ki kami immune system ko kamzor karti hai — vaginal flora disturb hoti hai.',
    },
  ],

  homeopathyIndividualization: `White discharge ka naam ek hai — lekin har mahila mein wajah aur pattern alag hota hai. Kisi ko thick, white, cottage cheese jaisi — intense itching ke saath. Kisi ko thin, watery — kamar dard ke saath. Kisi ko sirf stress ke time mein zyada — periods ke cycle ke bahar. Kisi ko pregnancy mein suddenly. Homeopathy mein sirf "white discharge" nahi dekha jaata — aapki discharge kaisi hai, kab badhti hai, kya se better hoti hai, kitne waqt se hai, saath mein aur kya symptoms hain — ye sab milaakar treatment decide hoti hai. Ek hi symptom ke liye alag-alag women ko bilkul alag medicines di ja sakti hain.`,

  homeopathyRootCause: `Baar baar aane wala white discharge aksar ek deeper imbalance ka signal hota hai — chahe wo hormonal ho (PCOD), immunity-related ho, ya recurrent infections ki wajah se. Homeopathy mein sirf discharge band karna goal nahi — jo pattern isko baar baar la raha hai usse address kiya jaata hai. Waqt ke saath frequency aur intensity dono kam hoti hain. Ye approach chronic cases mein zyada relevant hai — results individual hote hain aur is area mein research limited hai, isliye realistic expectations zaroori hain.`,

  homeopathySafety: `White discharge pregnancy mein, young girls mein, ya jab kai medicines chal rahi hon — in situations mein homeopathy ek safe complementary option hai jo conventional treatment ke saath saath chal sakti hai. Zaroori baat: severe vaginal infections ya STIs mein conventional diagnosis aur treatment pehle zaroori hai. Homeopathy complementary role mein hai — emergency replacement nahi. Discharge mein smell, intense itching, ya pelvic pain ho to doctor se milein pehle.`,

  isForYouIf: [
    'Aap root cause treat karna chahti hain — sirf discharge ko baar baar band nahi karna',
    'Aapko months se recurrent pattern hai — ek baar theek hota hai, wapas aata hai',
    'Aap pregnancy mein ya breastfeeding mein hain — safe option chahiye',
    'Aapko PCOD ya endometriosis jaise hormonal condition ke saath manage karna hai',
  ],

  notForYouIf: [
    'Discharge ke saath bukhaar, pelvic pain, ya foul smell hai — pehle conventional diagnosis lo',
    'Doctor ne STI ya serious infection identify ki hai — pehle prescribed treatment complete karo, baad mein homeopathy complementary mein soch sakte hain',
  ],

  homeopathyDiseaseLinks: [
    { _key: 'hdl1', diseaseName: 'Leucorrhoea (Shwet Pradar) ka poora ilaaj',    diseaseSlug: 'leucorrhoea' },
    { _key: 'hdl2', diseaseName: 'PCOD ka poora homeopathic ilaaj',               diseaseSlug: 'pcod'        },
  ],

  linkedDiseaseCards: [
    { _key: 'ldc1', title: 'Leucorrhoea',      hindiName: 'Shwet Pradar / Safed Pani Ki Bimari', slug: 'leucorrhoea', isAvailable: true  },
    { _key: 'ldc2', title: 'Vaginal Infection', hindiName: 'Yoni Sankraman',                      slug: '',            isAvailable: false },
    { _key: 'ldc3', title: 'PCOD',             hindiName: 'Anantkosh Rog / PCOD',                slug: 'pcod',        isAvailable: true  },
  ],

  faqs: [
    {
      _key: 'faq1',
      faqType: 'common-cause',
      question: 'White discharge kyun hota hai?',
      answer: `White discharge vagina ka natural cleaning mechanism hai — cervix aur vaginal glands fluid produce karti hain jo dead cells aur bacteria bahar nikalti hain. Normal white discharge clear se off-white hoti hai, smell nahi hoti, aur itching nahi hoti.\n\nLekin jab ye zyada ho, smell aaye, ya texture change ho — to wajah alag hoti hai: vaginal infection (bacterial ya yeast), hormonal changes, PCOD, synthetic undergarments, ya intimate hygiene products ka overuse.\n\nCause identify karna important hai kyunki treatment alag hoti hai — infection mein alag, hormonal mein alag.`,
    },
    {
      _key: 'faq2',
      faqType: 'normal-vs-serious',
      question: 'White discharge kab normal hota hai aur kab doctor zaroori hai?',
      answer: `Normal hai jab: clear ya off-white hai, koi smell nahi, koi itching nahi, ovulation ke time ya periods se pehle zyada hoti hai — ye body ki natural cycle hai.\n\nDoctor zaroori hai jab:\n- Colour yellow, green, ya grey ho\n- Fishy ya foul smell aaye\n- Thick, cottage cheese jaise texture ho — intense itching ke saath\n- Pelvic pain ya bukhaar bhi ho\n- Pregnancy mein achanak bahut zyada ya blood-tinged discharge\n\nIn signs mein self-treatment se waqt waste mat karo — doctor se confirm karwao ki wajah kya hai.`,
    },
    {
      _key: 'faq3',
      faqType: 'duration',
      question: 'White discharge kitne din tak rehna normal hai?',
      answer: `Cycle ke hisaab se discharge naturally aati-jaati rehti hai — ye lifelong hai, aur ye normal hai. Ovulation ke time (cycle ke 14-16th day) 2-3 din zyada hoti hai — ye normal hai.\n\nJo normal nahi hai: agar continuously weeks tak smell ke saath hai, ya pattern suddenly change ho — ye 1 hafte se zyada observe karne ka time nahi hai.\n\nChronic pattern (months se baar baar) mein properly evaluate karwao — sirf wait karne se resolve nahi hota.`,
    },
    {
      _key: 'faq4',
      faqType: 'common-cause',
      question: 'White discharge ke saath khujli kyun hoti hai?',
      answer: `White discharge ke saath intense itching almost always yeast infection (Candidiasis) ka sign hai. Candida ek fungus hai jo normally vagina mein controlled amounts mein hota hai — jab antibiotics, stress, ya hormonal changes se body ka balance bigdta hai, ye overgrow karta hai.\n\nIska discharge typically thick, white, cottage cheese jaisa hota hai — smell mild ya absent hoti hai, lekin itching bahut intense hoti hai.\n\nDiagnosis ke liye doctor se milein — yeast infection ka treatment specific hai aur confirm hone ke baad hi sahi kaam karta hai. Homeopathy is type ke recurrent yeast infections mein underlying pattern address karne mein madadgar hai — results individual hote hain.`,
    },
    {
      _key: 'faq5',
      faqType: 'pregnancy',
      question: 'Pregnancy mein white discharge normal hai kya?',
      answer: `Haan — pregnancy mein discharge naturally badh jaati hai, aur ye normal hai. Estrogen levels badh-te hain aur blood flow vaginal area mein zyada hota hai — isse milky white, thin discharge hoti hai jise "leukorrhea of pregnancy" kehte hain.\n\nLekin pregnancy mein ye signs hone pe turant doctor ke paas jaao:\n- Discharge ke saath strong smell ya intense itching\n- Yellow, green, ya grey colour\n- Blood-tinged discharge (specially third trimester mein)\n- Achanak bahut zyada watery discharge — ye amniotic fluid bhi ho sakta hai\n\nPregnancy mein kisi bhi doubt pe self-treat mat karo — doctor se confirm karwao. Homeopathy pregnancy mein safe hai lekin kisi bhi treatment se pehle doctor guidance zaroori hai.`,
    },
    {
      _key: 'faq6',
      faqType: 'baar-baar',
      question: 'Periods se pehle ya baad mein white discharge kyun badhti hai?',
      answer: `Periods se 2-3 din pehle discharge badhna — hormonal shift ki wajah se — bilkul normal hai. Progesterone levels girte hain, uterus prepare hota hai — discharge thick aur white hoti hai. Ye cycle ka part hai.\n\nPeriods ke baad bhi 2-3 din thodi discharge hoti hai — uterus ki cleaning process complete hoti hai.\n\nJo normal nahi hai: agar ye pattern hai ki periods se pehle ya baad mein discharge ke saath itching ya smell bhi consistently aati hai — ye recurrent infection pattern ho sakta hai jo hormonal changes ke time trigger hota hai. Is case mein once evaluate karwana useful hai.`,
    },
    {
      _key: 'faq7',
      faqType: 'normal-vs-serious',
      question: 'White discharge mein fishy smell kyun aati hai?',
      answer: `Fishy smell almost always Bacterial Vaginosis (BV) ka sign hai — ye vagina ke natural bacterial balance ka disturb hona hai. Good bacteria (Lactobacillus) kam ho jaate hain, anaerobic bacteria overgrow karte hain — inka byproduct fishy smell paida karta hai.\n\nBV mein discharge thin, grey-white hoti hai — smell sex ke baad ya periods ke time zyada aati hai. Itching mild ho sakti hai ya nahi bhi.\n\nBV ko confirm karne ke liye simple test hota hai — aur iska specific treatment hota hai. Ignore mat karo — untreated BV pregnancy mein complications aur upper genital tract infections ka risk badha sakta hai. Doctor se milein.`,
    },
    {
      _key: 'faq8',
      faqType: 'homeopathy',
      question: 'Kya homeopathy white discharge mein kaam karti hai?',
      answer: `Homeopathy white discharge mein — khaasiyat chronic ya recurrent cases mein — madadgar ho sakti hai. Ye sirf discharge suppress nahi karta — jo deeper cause hai (hormonal imbalance, recurrent infections, immunity ki weakness) usse address karne ki koshish karta hai.\n\nHomeopathy ka main advantage: treatment individualized hoti hai — aapki discharge kaisi hai, kab zyada hoti hai, saath mein aur kya symptoms hain — ye sab milaakar medicine decide hoti hai.\n\nRealistic expectation: results individual hote hain, research is area mein limited hai. Acute infections (BV, STIs) mein pehle conventional diagnosis aur treatment zaroori hai — homeopathy complementary role mein hai.`,
    },
    {
      _key: 'faq9',
      faqType: 'ghar-pe-wait',
      question: 'White discharge ghar pe kitne din tak manage kar sakte hain?',
      answer: `Agar discharge: smell-free hai, itching nahi hai, colour normal hai — to 3-5 din observe karo. Cotton undergarments switch karo, intimate hygiene products avoid karo, stress manage karo.\n\nGhar pe wait mat karo agar:\n- Smell aa rahi hai\n- Itching ya jalan hai\n- Colour off hai\n- Pregnancy mein ho\n- 1 hafte mein better nahi hua\n\nSelf-diagnosis risky hai kyunki alag-alag infections ka treatment alag hota hai — galat treatment se condition worsen ho sakti hai.`,
    },
    {
      _key: 'faq10',
      faqType: 'permanent',
      question: 'White discharge rokne ka permanent tarika kya hai?',
      answer: `Honest baat: "permanent cure" ka vaada koi bhi system honestly nahi kar sakta — aur koi kare to doubt karo. Vaginal discharge ek natural body function hai — completely band nahi hoti, aur honi bhi nahi chahiye.\n\nJo realistic hai: sahi treatment se jo abnormal discharge hai — smell ke saath, itching ke saath, ya zyada — uski frequency aur intensity bahut kam ho sakti hai. Recurrent infections rokne ke liye sahi hygiene, hormonal balance, aur immune system support zaroori hai.\n\nChronic cases mein homeopathy is pattern ko todne mein help kar sakti hai — results individual hote hain.\n\nLong-term goal: normal physiological discharge — jo body ka natural process hai — bacha rahe. Pathological pattern — infections, imbalance — minimize ho.`,
    },
    {
      _key: 'faq11',
      faqType: 'india-specific',
      question: 'Periods ke baad white discharge kyun hoti hai?',
      answer: `Periods ke baad 2-3 din tak discharge hona — uterus ki natural post-menstrual cleaning hai — normal hai. Alag-alag women mein ye 1-4 din tak ho sakti hai.\n\nJo normal nahi hai periods ke baad: agar discharge 5-7 din se zyada ho, smell aaye, ya itching ho — ye periods ke time bada hua hormonal change vaginal flora ko disturb kar sakta hai, aur opportunistic infection trigger ho sakti hai.\n\nIs case mein doctor se milein.`,
    },
    {
      _key: 'faq12',
      faqType: 'test-diagnosis',
      question: 'White discharge mein kaunsa test karwana chahiye?',
      answer: `Agar abnormal discharge hai — smell, itching, colour change ke saath — to doctor ye tests suggest kar sakti hain:\n- Vaginal Swab / Discharge Culture: Infection identify karta hai — bacterial, yeast, ya parasitic\n- pH Test: Vaginal pH se bacterial vaginosis identify hoti hai\n- Pap Smear: Cervical health check — cervicitis rule out karta hai\n- Ultrasound: PCOD, ovarian cyst, ya uterine issues ke liye\n- Blood Tests (Hormonal Panel): Agar irregular periods ke saath discharge hai — estrogen, progesterone, LH, FSH\n\nSelf-se ye tests order mat karo — doctor examination se decide karti hain ki kaunsa relevant hai. Test result ke baad hi treatment meaningful hoti hai.`,
    },
  ],

  relatedSymptoms: [
    { _key: 'rs1', name: 'Vaginal Itching',    hindiName: 'Yoni Mein Khujli',           slug: 'vaginal-itching'  },
    { _key: 'rs2', name: 'Pelvic Pain',         hindiName: 'Pait Ke Neeche Dard',        slug: 'pelvic-pain'      },
    { _key: 'rs3', name: 'Irregular Periods',   hindiName: 'Aniyamit Masik Dharm',       slug: 'irregular-periods'},
    { _key: 'rs4', name: 'Vaginal Odour',       hindiName: 'Yoni Se Smell',              slug: 'vaginal-odour'    },
  ],

  sources: [
    { _key: 's1', name: 'Mayo Clinic — Vaginal Discharge: Causes and When to See a Doctor', year: '2024', url: 'https://www.mayoclinic.org/symptoms/vaginal-discharge/basics/causes/sym-20050825' },
    { _key: 's2', name: 'WHO — Vaginal Discharge and Sexually Transmitted Infections',      year: '2023', url: 'https://www.who.int/reproductivehealth' },
    { _key: 's3', name: 'NCBI — Vaginal Flora and Bacterial Vaginosis: Mechanisms',        year: '2022', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4580017' },
    { _key: 's4', name: 'NHS UK — Vaginal Discharge: What\'s Normal, What\'s Not',         year: '2023', url: 'https://www.nhs.uk/conditions/vaginal-discharge' },
  ],

  quickFactSymptom: 'Normal vaginal discharge har healthy mahila ko hoti hai — completely absent hona unusual hai.',
  quickFactIndiaStats: 'Leucorrhoea India ki top 5 gynaecological complaints mein se ek hai — aur kaafi mahilayein ye silently face karti hain bina proper diagnosis ke.',
  quickFactDoctorWhen: 'Smell + itching + colour change — teeno saath hain to wait mat karo, doctor se milein.',
  reviewDate: 'May 2026',

  doctorNote: 'Maine apni practice mein dekha hai ki white discharge ke saath jo patients aate hain, unme se zyada-tar khud leucorrhoea samajh ke handle kar rahi hoti hain — lekin underlying cause kabhi kabhi PCOD ya recurrent yeast infection hoti hai jo diagnosis ke bina clear nahi hoti. Ek common galat assumption ye hai ki discharge band karna hi goal hai — actually vaginal flora balance restore karna zaroori hai. Homeopathy mein constitutional assessment se ye pattern address hota hai — sirf discharge suppress nahi hoti.',
}

async function seed() {
  console.log('🌱 Seeding White Discharge symptom page...')
  await client.createOrReplace(doc)
  console.log('✅ Symptom seeded — homeopedia.in/symptoms/white-discharge')
}

seed().catch(console.error)
