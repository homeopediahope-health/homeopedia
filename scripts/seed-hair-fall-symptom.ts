import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'symptom-hair-fall',
  _type: 'symptom',

  name: 'Hair Fall',
  hindiName: 'Baal Jhadna',
  hinglishName: 'Baal Jhadna',
  slug: { _type: 'slug', current: 'hair-fall' },
  bodySystem: 'Skin',

  metaTitle: 'Baal Jhadna — Karan, Ilaaj aur Homeopathy | Homeopedia',
  metaDescription: 'Baal jhadna (hair fall) ke karan, severity aur ghar pe safe steps — simple Hinglish mein. Verified info, Dr. Shadab reviewed.',
  publishedAt: new Date('2026-05-17').toISOString(),

  whatIsThis: `Subah uthke takiye pe ya nahate waqt shower floor pe — baalon ka guchha dekhna ek alag hi anxiety deta hai. Seedha dil mein ek sawaal aata hai: "Kya ye normal hai ya kuch gadbad hai?"

Baal jhadna (hair fall) India mein sabse common complaints mein se ek hai — aur zyada tar cases mein iska koi ek clear karan hota hai jo identify aur address kiya ja sakta hai.

Ye page aapko 2 minute mein batayega: aapka case normal range mein hai ya doctor zaruri hai.`,

  indiaContext: 'India mein lagbhag 60% purush aur 50% mahilayein apni zindagi ke kisi na kisi mod pe significant hair fall experience karte hain. Post-COVID period mein ye number aur badha hai — delayed hair loss COVID ke 2-3 mahine baad ek common complaint ban gayi thi.',
  indiaContextSource: 'International Journal of Dermatology, 2022 | NCBI',

  severityLevel1: [
    'Rozana 50-100 baal jhadna — ye normal shedding cycle hai',
    'Nahate waqt ya kanghee karte waqt baal aate hain — lekin scalp pe patchy baldness nahi',
    'Season change ke waqt (specially monsoon ke baad) thoda zyada jhadna',
    'Stress ya illness ke baad temporary shedding — koi naya patch nahi',
  ],
  severityLevel2: [
    'Rozana 150+ baal consistently 2 hafte se zyada',
    'Scalp pe koi ek jagah patchy thinning ya baldness aa rahi hai',
    'Baalon ke saath scalp bhi dard karta hai ya jalan hoti hai',
    'Naakhun bhi kamzor ho rahe hain — baalon ke saath',
    'Teen ya young adult hai aur hairline recede ho rahi hai tezi se',
  ],
  severityLevel3: [
    'Scalp pe sikey (coins) jaisi round patches aayi hain — bilkul saaf edges ke saath',
    'Baalon ke saath eyebrows ya eyelashes bhi jhaad rahe hain',
    'Hair fall ke saath thakaan, thand lagna, wajan badhna — thyroid ho sakta hai',
    'Hair fall ke saath irregular periods, chehra par baal — PCOD ka sign',
    'Pregnancy ke baad 6 mahine se zyada baal jhadna ruk nahi raha',
  ],

  timeline3Days: 'Achanak shuru hua hair fall aksar ek recent trigger ka reaction hota hai — stress, illness, diet change, ya season. Body ko adjust hone mein 4-6 hafte lagte hain. Abhi ghabrane ki zarurat nahi — ghar pe manage karo aur triggers identify karo. Agar 3 hafte mein better nahi hua — Level 2 check karo.',
  timeline4Weeks: 'Ye stage important hai — agar trigger tha to abhi tak shedding peak pe hogi aur phir kam hogi. Agar bilkul nahi ruk raha — hormonal ya nutritional cause possible hai. Is stage mein ek baar doctor ya homeopath se milna useful rahega taaki root cause identify ho sake.',
  timelineMonthPlus: 'Chronic hair fall aksar sirf "weak hair" nahi hota — andar koi underlying cause chal raha hota hai. Thyroid, PCOD, anaemia, ya chronic stress — inhe rule out karna zaroori hai. Homeopathy is stage mein particularly helpful hai kyunki ye constitutional approach se root cause address karta hai. Doctor se milein — aur ek thorough evaluation karwayein.',

  lifestyleCauses: [
    {
      _key: 'lc1',
      causeName: 'Nutritional Deficiency (Poshan Ki Kami)',
      mechanism: 'Baal banana body ke liye ek low-priority kaam hai — pehle vital organs ko nutrients milte hain. Jab Iron, Protein, Zinc ya Vitamin D ki kami hoti hai — body baalon ko nutrients supply karna kam kar deti hai. Hair follicles (wo chote se roots jahan se baal ugte hain) kamzor pad jaate hain — aur baal naye ugne ki jagah girte rehte hain.',
      howToIdentify: 'Baal zyada thin lagte hain — sirf girte nahi. Aksar thakaan bhi saath mein hoti hai. Khana skip karne ya diet mein protein kam hone ke baad shuru hua ho.',
    },
    {
      _key: 'lc2',
      causeName: 'Stress (Mansik Tanaav)',
      mechanism: 'Bada stress — exam, job loss, kisi ka kho jaana, ya badi bimari — body mein cortisol hormone badhata hai. Cortisol hair growth cycle ko disturb karta hai — growing phase se baal zyada tezi se resting phase mein jaate hain. Is type ko Telogen Effluvium kehte hain — stress ke 2-3 mahine baad baal girane lagte hain.',
      howToIdentify: 'Stress ke thodi der baad suddenly zyada hair fall. Aksar diffuse (puri head pe) hota hai — ek jagah patch nahi.',
    },
    {
      _key: 'lc3',
      causeName: 'Heat aur Chemical Styling',
      mechanism: 'Baar baar straightener, curler, ya strong chemical treatments se hair shaft (baal ka upar wala hissa) damage hota hai. Ye damage follicle tak pahunche to baal permanently kamzor pad jaate hain. Tightly baal bandhna (tight buns, ponytails) bhi follicle pe constant tension dalta hai — Traction Alopecia kehte hain ise.',
      howToIdentify: 'Mainly hairline pe ya jahan baal bandhte hain wahan zyada hair fall. Baal beejaan aur rough feel hote hain.',
    },
    {
      _key: 'lc4',
      causeName: 'Poor Scalp Health',
      mechanism: 'Dandruff, fungal infection, ya sebum (oil) build-up se scalp mein inflammation hoti hai. Ye inflammation hair follicles ko block kar sakti hai — naye baal ka ugna mushkil ho jaata hai.',
      howToIdentify: 'Scalp itchy rehti hai, flakes dikhte hain, ya scalp pe redness hai. Hair fall ke saath scalp uncomfortable lagti hai.',
    },
  ],

  medicalCauses: [
    {
      _key: 'mc1',
      diseaseName: 'Alopecia',
      diseaseHindiName: 'Takala / Ganjapan',
      howSymptomPresents: 'Ye ek autoimmune condition hai jisme body khud apne hi hair follicles pe attack karti hai. Round ya oval patchy baldness hoti hai — achanak aur tezi se. Koi itching ya pain nahi hoti aksar — sirf patch.',
      howToIdentify: 'Saaf, round patches — jaise coin rakh do. Rest scalp normal lagti hai — sirf wo patch bilkul saaf hota hai.',
      homeopediaSlug: 'alopecia',
      isAvailable: true,
    },
    {
      _key: 'mc2',
      diseaseName: 'Thyroid',
      diseaseHindiName: 'Gale Ki Granthi Ki Bimari',
      howSymptomPresents: 'Thyroid hormone baal ke growth cycle ko regulate karta hai. Hypothyroidism (thyroid slow) mein baal puri head pe thin aur dry hone lagte hain. Hyperthyroidism mein bhi hair fall hoti hai — lekin saath mein wajan kam hona aur heart fast hona bhi hota hai.',
      howToIdentify: 'Hair fall ke saath thakaan, thand zyada lagna, constipation, wajan badhna — sab ek saath. TSH blood test se confirm hota hai.',
      homeopediaSlug: 'thyroid',
      isAvailable: true,
    },
    {
      _key: 'mc3',
      diseaseName: 'PCOD',
      diseaseHindiName: 'PCOD / PCOS (Polycystic Ovary Disease)',
      howSymptomPresents: 'PCOD mein androgen (male hormones) badhte hain — ye hormones hair follicles ko sensitive banate hain. Hairline recede hone lagti hai — similar to male pattern baldness. Temples aur crown pe zyada thinning.',
      howToIdentify: 'Mahilaon mein — irregular periods, chehra ya body pe zyada baal, pimples. Hair fall ke saath ye signs hon to PCOD likely hai.',
      homeopediaSlug: 'pcod',
      isAvailable: true,
    },
    {
      _key: 'mc4',
      diseaseName: 'Dandruff (Chronic)',
      diseaseHindiName: 'Dandruff / Roos',
      howSymptomPresents: 'Severe ya untreated dandruff scalp pe chronic inflammation rakhta hai. Ye inflammation hair follicles ke environment ko kharab karta hai — naye baal kamzor ugte hain.',
      howToIdentify: 'Scalp pe white ya yellowish flakes — itching. Hair fall ke saath scalp oily ya irritated rehti hai.',
      homeopediaSlug: 'dandruff',
      isAvailable: true,
    },
    {
      _key: 'mc5',
      diseaseName: 'Anaemia',
      diseaseHindiName: 'Khoon Ki Kami',
      howSymptomPresents: 'Red blood cells oxygen aur nutrients hair follicles tak pohunchate hain. Iron deficiency anaemia mein follicles starved rehte hain — baal thin, lifeless, aur girate hain. Ye India mein — specially mahilaon mein — hair fall ka ek bahut common aur underdiagnosed cause hai.',
      howToIdentify: 'Thakaan, pallor (haath ki lines pale), saans phulna. CBC blood test se confirm hota hai.',
      homeopediaSlug: '',
      isAvailable: false,
    },
  ],

  redFlags: [
    'Alopecia Areata — agar scalp pe coin-size round patches hain, ekdum saaf edges ke saath — do not wait, dermatologist se milein',
    'Hormonal Disorder (PCOD / Thyroid) — agar hair fall ke saath periods irregular hain ya wajan aur thakaan ke symptoms hain — blood tests zaruri hain',
    'Scalp Infection (Fungal) — agar baal girte jagah pe redness, scaly patches, ya tenderness hai — fungal infection ho sakti hai jo treat karna zaroori hai warna permanent follicle damage possible',
  ],

  homeSteps: [
    {
      _key: 'hs1',
      action: 'Kanghee Ka Dhyan Rakhein',
      whyItWorks: 'Geele baalon mein kanghee mat karein — wet hair most fragile hote hain. Wide-tooth comb use karein — pehle ends se suljhaein, upar se nahi. Mechanical breakage se bachate hain — jo hair fall jaisa dikhta hai lekin actually shedding nahi hota.',
    },
    {
      _key: 'hs2',
      action: 'Tight Hairstyles Avoid Karein',
      whyItWorks: 'Tight ponytails, buns ya braids — especially sote waqt — follicle pe tension daalte hain. Loose braid ya silk scrunchie use karein. Traction Alopecia ka risk kam hota hai — follicle pe constant stress hatata hai.',
    },
    {
      _key: 'hs3',
      action: 'Scalp Ko Breathe Karne Do',
      whyItWorks: 'Helmet, tight cap ya headscarf agar hours tak pehnte hain — scalp pe sweat aur heat build-up hoti hai. Jab bhi possible ho scalp ko open air milne do. Scalp ki circulation aur health ke liye fresh air important hai — closed environment fungal growth ko encourage karta hai.',
    },
    {
      _key: 'hs4',
      action: 'Hot Water Se Bachein',
      whyItWorks: 'Bahut garam paani se baal dhona hair shaft ka natural moisture khaata hai aur scalp ko dry karta hai. Lukewarm ya thanda paani prefer karein. Scalp ka natural oil balance maintain rehta hai — jo follicle health ke liye zaroori hai.',
    },
    {
      _key: 'hs5',
      action: 'Stress Kam Karne Ki Koshish Karein',
      whyItWorks: 'Ek chhoti si 10-minute walk, breathing exercise, ya neend poori karna — ye sab indirect taur pe hair cycle pe positive effect daalte hain. Stress aur hair fall ka link direct aur scientifically proven hai. Cortisol (stress hormone) kam hone se telogen effluvium ka risk kam hota hai.',
    },
  ],

  homeopathyIndividualization: `Baal jhadna ka naam ek hai — lekin wajah har insaan mein alag hoti hai. Kisi ke baal stress ki wajah se jhadte hain, kisi ke hormones ki wajah se, kisi ke thyroid ki wajah se, aur kisi ke sirf poor scalp health ki wajah se. Homeopathy mein sirf "hair fall" nahi dekha jaata — aapke baal kahan se zyada girte hain, kab se hai, kya saath mein aur symptoms hain, aapki overall health kaisi hai — ye sab milake treatment decide hoti hai. Isliye do patients ko ek hi complaint hogi — aur unka treatment bilkul alag hoga.`,

  homeopathyRootCause: `Baar baar aane wala ya rokne ke baad dobara shuru hone wala hair fall aksar ek deeper imbalance ka signal hota hai. Homeopathy mein sirf hair fall band karna goal nahi hota — jo cheez follicles ko kaam karne se rok rahi hai, usse address kiya jaata hai. Waqt ke saath baal ka regrowth hone lagta hai aur naye baal ki quality bhi better hoti hai. Research is area mein limited hai aur results individual hote hain — lekin chronic ya recurrent cases mein constitutional approach ki value hai.`,

  homeopathySafety: `Highly diluted homeopathic medicines hone ki wajah se ye practically side-effect free hain — isliye pregnancy ke baad ke hair fall mein, teens mein, ya jab kai doosri medicines chal rahi hon, homeopathy safely saath chal sakti hai. Zaroori baat: Severe cases mein — jaise alopecia areata ke patches ya hormonal disorder — conventional diagnosis pehle zaruri hai. Homeopathy complementary role mein hai — replacement nahi.`,

  isForYouIf: [
    'Aap root cause treat karna chahte hain — sirf baalon pe tel lagana nahi',
    'Aap sustainable, long-term improvement dhundh rahe hain',
    'Aapke saath hormonal, stress-related, ya post-illness hair fall hai aur side-effect free option chahiye',
  ],
  notForYouIf: [
    'Aapko 1 hafte mein immediate results chahiye — homeopathy gradually kaam karta hai, waqt lagta hai',
    'Scalp pe fungal infection hai — pehle antifungal treatment zaruri hai, phir homeopathy',
  ],

  homeopathyDiseaseLinks: [
    { _key: 'hdl1', diseaseName: 'Alopecia (Takala / Ganjapan) ka poora ilaaj',       diseaseSlug: 'alopecia' },
    { _key: 'hdl2', diseaseName: 'Thyroid se judha baal jhadna — poori jaankari',      diseaseSlug: 'thyroid'  },
    { _key: 'hdl3', diseaseName: 'PCOD mein baal jhadna ka ilaaj',                     diseaseSlug: 'pcod'     },
  ],

  linkedDiseaseCards: [
    { _key: 'ldc1', title: 'Alopecia',   hindiName: 'Takala / Ganjapan',          slug: 'alopecia' },
    { _key: 'ldc2', title: 'Thyroid',    hindiName: 'Thyroid Ki Bimari',          slug: 'thyroid'  },
    { _key: 'ldc3', title: 'PCOD',       hindiName: 'Polycystic Ovary Disease',   slug: 'pcod'     },
    { _key: 'ldc4', title: 'Dandruff',   hindiName: 'Roos',                       slug: 'dandruff' },
  ],

  faqs: [
    {
      _key: 'faq1', faqType: 'common-cause',
      question: 'Baal jhadne ka sabse common karan kya hai?',
      answer: `India mein hair fall ka sabse common karan nutritional deficiency — specially iron, protein, aur Vitamin D ki kami — hai. Iske baad stress aur hormonal imbalance aate hain.\n\nCity mein rehne walon mein poor diet + high stress ka combination bahut common pattern hai. Baal girne ka matlab hamesha koi badi bimari nahi — lekin agar consistently zyada hai to root cause dhundhna zaroori hai.\n\nAgar saath mein thakaan ya weight gain bhi hai — thyroid ya anaemia test zarur karwayein.`,
    },
    {
      _key: 'faq2', faqType: 'normal-vs-serious',
      question: 'Rozana kitne baal jhadna normal hai?',
      answer: `Rozana 50 se 100 baal jhadna completely normal hai — ye natural hair growth cycle ka hissa hai. Har baal grow, rest, aur phir shed karta hai — hamesha.\n\nYe tab concern banta hai jab:\n- Consistently 150+ baal rozana girne lagein\n- Scalp pe thinning ya patches dikhne lage\n- Baal patley feel hone lagein overall\n\nGhar mein count karna mushkil hai — ek easy test: ek garha ek haath mein pakdo aur dhire se khichon. 6-7 se zyada baal aayein to doctor se milein.`,
    },
    {
      _key: 'faq3', faqType: 'common-cause',
      question: 'Mujhe achanak itne baal kyun jhadne lage?',
      answer: `Achanak shuru hua hair fall aksar 1 specific trigger ka result hota hai — jo 6-12 hafte pehle hua hoga.\n\nCommon triggers:\n- Badi bimari ya bukhaar (COVID ke baad ye bahut common tha)\n- Emotional stress — exam, relationship, job\n- Sudden diet change ya crash diet\n- Surgery ya anesthesia\n- Delivery ke baad (postpartum)\n\nIs type ko Telogen Effluvium kehte hain — body shock ke baad baalon ko temporarily shed karti hai. Trigger hatne ke baad baal wapas aate hain — usually 3-6 mahine mein. Agar trigger identify ho sakta hai to ghabrane ki zarurat nahi.`,
    },
    {
      _key: 'faq4', faqType: 'homeopathy',
      question: 'Kya homeopathy se baal jhadna ruk sakta hai?',
      answer: `Homeopathy baal jhadne mein madadgar rahi hai — particularly tab jab cause hormonal, stress-related, ya constitutional ho. Ye sirf baal ko band nahi karta — underlying cause address karta hai.\n\nIska matlab hai: sirf hair fall ruk nahi jaata, baal ki overall quality aur growth bhi better hoti hai waqt ke saath. Results individual hote hain — chronic ya hormonal cases mein 2-4 mahine mein difference dikhna shuru hota hai.\n\nAlopecia areata jaise cases mein conventional diagnosis pehle zaruri hai — homeopathy parallel mein chal sakti hai. Koi bhi ek medicine sabke liye nahi hoti — proper case history ke baad individualized treatment di jaati hai.`,
    },
    {
      _key: 'faq5', faqType: 'pregnancy',
      question: 'Delivery ke baad baal jhadna — kab tak normal hai?',
      answer: `Delivery ke baad 2-4 mahine mein baal jhadna shuru hona — aur 6 mahine tak chalna — completely normal hai. Pregnancy mein estrogen hormones baalon ko grow phase mein rakhte hain — delivery ke baad ye hormones gir jaate hain. Sab baal ek saath shed phase mein aate hain — aur ek saath girate hain.\n\nYe temporary hai — 6-9 mahine mein usually theek ho jaata hai. Breastfeeding ke dauran bhi ye chal sakta hai — normal hai.\n\nAgar 6 mahine ke baad bhi nahi ruka — ya saath mein thakaan, thand lagna, ya mood changes hain — thyroid check zarur karwayein.`,
    },
    {
      _key: 'faq6', faqType: 'bacchon-mein',
      question: 'Teens aur young adults mein baal jhadna kyun hota hai?',
      answer: `Teenagers mein hair fall ka sabse common karan nutritional deficiency aur extreme stress hai — exams, body image pressure, poor diet.\n\nLadkiyon mein PCOD ka bhi risk hota hai — jo 15-16 saal ki umar mein bhi ho sakti hai. Ladkon mein early male pattern baldness genetic ho sakti hai — hairline receding young age mein shuru hoti hai.\n\nKya karein:\n- Protein aur iron ki intake check karein\n- Tight hairstyles se bachein (ladkiyon mein)\n- Agar saath mein periods irregular hain — doctor se milein\n- Crash diet avoid karein — ye hair fall ka bada trigger hai teens mein\n\nYe stage mein early treatment sabse effective hoti hai.`,
    },
    {
      _key: 'faq7', faqType: 'normal-vs-serious',
      question: 'Baal jhadna kab serious problem hai — doctor kab zaruri hai?',
      answer: `In cases mein doctor se zaroor milein:\n- Scalp pe round, saaf-edge patches — alopecia areata ho sakta hai\n- Baalon ke saath eyebrows ya eyelashes bhi jhaad rahe hain\n- Hair fall ke saath thakaan, wajan badhna, ya thand zyada lagna — thyroid\n- Hair fall ke saath irregular periods, chehra pe baal — PCOD\n- 6 mahine se zyada recovery nahi — kisi bhi cause ke baad\n- Scalp pe dard, redness, ya scaly patches — infection\n- Teenager mein rapidly receding hairline\n\nDoctor se milna matlab ye nahi ki koi badi bimari hai — lekin cause pata karne ke bina treatment effective nahi hogi.`,
    },
    {
      _key: 'faq8', faqType: 'ghar-wait',
      question: 'Ghar pe baal jhadna roke — kya safe steps hain?',
      answer: `Kuch proven safe steps jo ghar pe try kar sakte hain:\n- Wide-tooth comb use karein — geele baalon mein kanghee na karein\n- Hot water se baal na dhoyein — lukewarm use karein\n- Tight ponytails aur buns avoid karein\n- Helmet/cap pehnte ho to scalp ko air milne do — especially summer mein\n- Neend 7-8 ghante ki — sleep deprivation hair fall badhata hai\n- Stress kam karne ki koshish karein — walk, breathing exercises\n\nKoi specific oil, supplement, ya medicine recommend karna is page ka kaam nahi — wo doctor ya homeopath decide karenge cause ke hisaab se.`,
    },
    {
      _key: 'faq9', faqType: 'test-diagnosis',
      question: 'Baal jhadna kisi bimari ka sign bhi ho sakta hai?',
      answer: `Haan — hair fall aksar andar ki kisi condition ka pehla sign hoti hai. Agar saath mein koi doosra symptom bhi hai to in conditions consider karein:\n\n- Thakaan + thand + weight gain → Thyroid (Hypothyroidism)\n- Irregular periods + chehra pe baal → PCOD\n- Thakaan + paleness → Anaemia\n- Round patches → Alopecia Areata\n- Itchy scalp + flakes → Dandruff / Fungal infection\n\nSirf hair fall bina kisi doosre symptom ke — often stress ya nutritional deficiency hai. Lekin saath mein koi bhi symptom ho to blood tests — CBC, TSH, iron levels — useful hote hain.`,
    },
    {
      _key: 'faq10', faqType: 'india-specific',
      question: 'Tel lagane ke baad aur zyada baal kyun jhadte hain?',
      answer: `Tel lagane ke baad zyada baal nahi girte — ye ek common misconception hai. Jo hota hai: tel se massage karte waqt ya tel hata ke kanghee karte waqt jo baal pehle se loose the — wo ab girte hain. Ye baal already shedding phase mein the — tel ne giraye nahi.\n\nAgar tel ke 1-2 din baad consistently zyada baal aa rahe hain — heavy oils se scalp block hoti hai, follicle ko breathe nahi kar pata. Light oils aur proper rinsing se ye nahi hota.\n\nTel se baal girna normal hai — tel se baal girna baadhna normal nahi.`,
    },
    {
      _key: 'faq11', faqType: 'india-specific',
      question: 'Garmiyon mein baal zyada kyun jhadte hain?',
      answer: `Garmiyon mein hair fall thoda naturally badhna ho sakta hai — ye seasonal shedding hai.\n\nReasons:\n- Scalp pe sweat zyada — dandruff aur fungal growth ka risk badh jaata hai\n- Dehydration — baalon ko nutrients supply karne wala blood volume affect hota hai\n- Sun exposure — hair shaft ko direct UV damage hoti hai\n- Helmet culture India mein — summer mein garam scalp + sweat — follicles suffer karte hain\n\nAgar sirf garmiyon mein badhta hai aur monsoon ke baad theek ho jaata hai — ye normal seasonal variation hai. Agar saalon bhar rehta hai — seasonal se zyada kuch aur chal raha hai.`,
    },
    {
      _key: 'faq12', faqType: 'permanent',
      question: 'Baal jhadne se hamesha ke liye kaise chutkara milega?',
      answer: `"Permanent cure" ka vaada koi bhi system honestly nahi kar sakta — aur koi kare to doubt karo.\n\nJo realistic hai:\n- Agar cause identify aur treat ho — jaise anaemia, thyroid, PCOD — to baal naturally wapas aate hain aur hair fall ruk jaati hai\n- Agar stress-triggered hai — trigger door hone par 6-9 mahine mein recovery hoti hai\n- Agar genetic (male/female pattern baldness) hai — ye completely rokna possible nahi, lekin slow karna aur maintain karna possible hai\n\nHomeopathy chronic ya recurrent cases mein frequency aur intensity kam karne mein madadgar rahi hai — results individual hote hain. Sabse effective strategy: cause dhundho — cause treat karo — baalon ki maintenance karo.`,
    },
  ],

  relatedSymptoms: [
    { _key: 'rs1', name: 'Dandruff',          hindiName: 'Roos',                slug: 'dandruff'          },
    { _key: 'rs2', name: 'Dry Skin',           hindiName: 'Rookhi Twacha',       slug: 'dry-skin'          },
    { _key: 'rs3', name: 'Fatigue',            hindiName: 'Thakaan',             slug: 'fatigue'           },
    { _key: 'rs4', name: 'Irregular Periods',  hindiName: 'Periods Ki Gadbad',   slug: 'irregular-periods' },
  ],

  sources: [
    { _key: 's1', name: 'Mayo Clinic — Hair Loss (Alopecia): Symptoms & Causes',          year: '2024', url: 'https://www.mayoclinic.org/diseases-conditions/hair-loss/symptoms-causes/syc-20372926' },
    { _key: 's2', name: 'NCBI / PubMed — Telogen Effluvium: A Review',                    year: '2021', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7320655/'                               },
    { _key: 's3', name: 'WHO — Nutritional Anaemia: Tools for Effective Prevention',       year: '2017', url: 'https://www.who.int/publications/i/item/9789241513067'                               },
    { _key: 's4', name: 'NHS — Hair Loss: Causes, Diagnosis and Treatment',                year: '2023', url: 'https://www.nhs.uk/conditions/hair-loss/'                                           },
  ],

  quickFactSymptom:    'Rozana 50-100 baal jhadna normal shedding cycle hai — ye bimari nahi hai.',
  quickFactIndiaStats: 'India mein 60% purush aur 50% mahilayein significant hair fall experience karte hain apni life mein.',
  quickFactDoctorWhen: 'Scalp pe round patches, eyebrow hair loss, ya hormonal symptoms ke saath hair fall — doctor zaroori.',
  reviewDate: 'May 2026',

  doctorNote: 'Maine apni practice mein dekha hai ki hair fall ke jo patients aate hain, unme se bahut se — especially mahilayein — pehle se hi iron ya thyroid medication le rahe hote hain, lekin baal phir bhi jhaad rahe hote hain. Aksar hota ye hai ki ek cause address hua, doosra chhoot gaya — jaise PCOD ke saath anaemia bhi thi. Homeopathy mein case history mein ye sab ek saath dekhte hain — aur treatment usi hisaab se adjust hoti hai. Jo pattern maine sabse zyada dekha hai: stress-triggered hair fall jo aaya, thoda ruka, phir dobara shuru hua — ye aksar ek deeper constitutional imbalance ka sign hota hai jise time-based treatment se address kiya ja sakta hai.',
}

async function seed() {
  console.log('🌱 Seeding Hair Fall symptom page...')
  await client.createOrReplace(doc)
  console.log('✅ Symptom seeded — homeopedia.in/symptoms/hair-fall')
}

seed().catch(console.error)
