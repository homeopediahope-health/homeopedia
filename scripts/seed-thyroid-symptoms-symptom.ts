import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'symptom-thyroid-symptoms',
  _type: 'symptom',

  name: 'Thyroid Symptoms',
  hindiName: 'Thyroid Ke Lakshan',
  hinglishName: 'Thyroid Ke Lakshan',
  slug: { _type: 'slug', current: 'thyroid-symptoms' },
  bodySystem: 'Hormonal',

  metaTitle: 'Thyroid Symptoms in Hindi — Karan aur Homeopathy | Homeopedia',
  metaDescription: 'Thyroid ke lakshan (thyroid symptoms) ke karan, severity aur safe steps — simple Hinglish mein. Verified info, doctor-reviewed.',
  publishedAt: new Date('2026-05-18').toISOString(),

  whatIsThis: `Thakaan jo raat bhar sone ke baad bhi nahi jaati. Wajan bina kisi wajah ke badhna ya ghattna. Baal jhad rahe hain, neend poori nahi ho rahi — aur doctor baar baar kehta hai "sab normal hai." Ye sab thyroid ke lakshan ho sakte hain.

Thyroid ek chhoti si gland hai — gale mein — jo poore body ka metabolism control karti hai. Jab ye gland theek se kaam nahi karti, to uska asar almost har system pe hota hai — energy, weight, skin, hair, mood, neend, sab kuch.

Ye page aapko 2 minute mein batayega: aapke symptoms serious hain ya nahi, ghar pe kya karna chahiye, aur aage kya step lena chahiye.`,

  indiaContext: 'India mein lagbhag 4.2 crore log thyroid disorders se affected hain — aur inme se mahilaon ki tadaad purushhon se kaafi zyada hai. Thyroid disorders India mein sabse common endocrine problems mein se ek hain.',
  indiaContextSource: 'WHO Global Health Estimates; ICMR Thyroid Disorders Data India; NCBI — Thyroid Disorders in India 2020',

  severityLevel1: [
    'Halki thakaan jo rest ke baad better ho jaati hai',
    'Wajan mein 2-3 kg ki change — bilkul achanak nahi',
    'Neend thodi kam ya thodi zyada ho gayi hai',
    'Skin thodi dry ya baal thode jhadne shuru hue hain',
    'Moodiness ya chidchidaapan zyada feel ho raha hai',
  ],
  severityLevel2: [
    'Wajan bina diet change ke 5 kg+ badhna ya ghattna',
    'Dil ki dhadkan kaafi tez ya irregular lagti hai',
    'Haath kaanpna ya bahut zyada paseena aana',
    'Bahut zyada thakaan — seedha kharein hona mushkil',
    'Gale mein sujan ya koi bhi dikhti gath (lump)',
    'Depression ya anxiety jo kaafi bad ho gayi ho',
  ],
  severityLevel3: [
    'Saans lene mein takleef ke saath gale mein sujan — turant hospital',
    'Dil ki dhadkan itni tez ki chest mein dard ho — turant hospital',
    'Behoshi ya extreme weakness — uthna mushkil — turant hospital',
    'Thyroid cancer suspected ho aur gath tezi se badh rahi ho — turant hospital',
  ],

  timeline3Days: 'Agar thakaan ya mood swing bilkul suddenly aaya hai — aksar koi doosra karan hota hai jaise stress, neend ki kami, ya infection. 3-5 din observe karo. Agar better ho jaata hai to thyroid unlikely hai. Agar nahi hua to Level 2 mein aao aur doctor se milein.',
  timeline4Weeks: 'Ye signal hai ki kuch chronic develop ho raha hai. TSH blood test jaroor karwao — ye pehla aur sabse zaroori step hai. Khud se kuch mat karo — test ke result ke baad hi koi conclusion nikalo.',
  timelineMonthPlus: 'Agar ye symptoms 1 mahine se zyada se hain — ye managed thyroid disorder ya undiagnosed condition ho sakta hai. Doctor zaruri hai. Homeopathy is stage pe conventional treatment ke saath complementary taur pe shuru ki ja sakti hai — separately nahi.',

  lifestyleCauses: [
    {
      _key: 'lc1',
      causeName: 'Iodine Ki Kami (Iodine Deficiency)',
      mechanism: 'Thyroid gland thyroid hormone banane ke liye iodine use karti hai. Jab daily diet mein iodine kam hoti hai — iodized namak na use karna, seafood na khana — to gland ko zyada mehnat karni padti hai. Is extra kaam ki wajah se gland badi ho jaati hai (goitre) aur hormone production irregular ho jaata hai.',
      howToIdentify: 'Gale mein soft sujan dikhti hai. Hypothyroid symptoms — thakaan, wajan badhna — zyada common hote hain.',
    },
    {
      _key: 'lc2',
      causeName: 'Bahut Zyada Stress — Cortisol Imbalance',
      mechanism: 'Chronic stress mein body continuously cortisol (stress hormone) release karti hai. Ye cortisol thyroid hormone ko cells tak pahunchne se rokta hai — even if gland theek se produce kar rahi ho. Isliye TSH normal aata hai lekin symptoms phir bhi hote hain.',
      howToIdentify: 'Symptoms zyada stressful periods mein — exams, job pressure, family issues — badh jaate hain aur thodi rest lene ke baad thode better hote hain.',
    },
    {
      _key: 'lc3',
      causeName: 'Neend Ki Kami (Sleep Deprivation)',
      mechanism: 'Thyroid hormones ka production raat ko neend ke dauraan peak pe hota hai. Chronic sleep deprivation se ye cycle disrupt hoti hai. 6 ghante se kam neend regularly lene wale logon mein thyroid symptoms dikhna common hai.',
      howToIdentify: 'Thakaan, baal jhagna, aur weight gain — specifically jinki neend 6 ghante se kam hai aur schedule irregular hai.',
    },
    {
      _key: 'lc4',
      causeName: 'Autoimmune Trigger — Diet aur Environment',
      mechanism: 'India mein processed foods, pesticide-heavy vegetables, aur environmental toxins autoimmune response trigger kar sakte hain. Ye immune system ko thyroid gland attack karne pe majboor karta hai — bina kisi infection ke.',
      howToIdentify: 'Family mein kisi ko thyroid hai, ya aapko koi doosri autoimmune condition (diabetes type 1, arthritis) already hai.',
    },
  ],

  medicalCauses: [
    {
      _key: 'mc1',
      diseaseName: 'Hypothyroid (Underactive Thyroid)',
      diseaseHindiName: 'Thyroid Ki Kam Sakriyata',
      howSymptomPresents: 'Gland thodi maatra mein hormone banati hai — result: metabolism slow hota hai. Wajan badhna, thakaan, constipation (kabz), skin dry hona, baal jhagna, sardi zyada lagni — ye sab ek saath aa sakte hain.',
      howToIdentify: 'Is mein symptoms dheere dheere aate hain — patient ko saalon baad pata chalta hai. TSH level high aata hai blood test mein.',
      homeopediaSlug: 'thyroid',
      isAvailable: true,
    },
    {
      _key: 'mc2',
      diseaseName: 'Hyperthyroid (Overactive Thyroid)',
      diseaseHindiName: 'Thyroid Ki Adhik Sakriyata',
      howSymptomPresents: 'Yahan gland zyada hormone banati hai — metabolism overdrive mein jaata hai. Wajan tezi se ghattna, dil tez dhadakna, haath kaanpna, zyada paseena, neend na aana — sab ek saath.',
      howToIdentify: 'Symptoms tezi se aate hain — weeks mein. TSH level low aata hai aur T3/T4 high aata hai.',
      homeopediaSlug: 'hyperthyroidism',
      isAvailable: true,
    },
    {
      _key: 'mc3',
      diseaseName: 'Thyroid Nodules / Cysts',
      diseaseHindiName: 'Thyroid Ki Ganthein / Rasoli',
      howSymptomPresents: 'Thyroid pe chhoti chhoti ganthein (nodules) ya cysts ban sakti hain. Ye mostly harmless hoti hain — lekin agar badi hon to gale mein pressure, niglane mein takleef, ya awaaz baithna ho sakta hai.',
      howToIdentify: 'Gale mein haath lagane pe kuch mehsoos hota hai ya dikhta hai. Ultrasound se confirm hota hai.',
      homeopediaSlug: '',
      isAvailable: false,
    },
    {
      _key: 'mc4',
      diseaseName: 'Goitre (Thyroid Gland Ki Sujan)',
      diseaseHindiName: 'Ghengha / Gale Ki Sujan',
      howSymptomPresents: 'Thyroid gland ka visible ya touchable enlargement. Ye hypothyroid, hyperthyroid, ya sirf iodine deficiency se ho sakta hai. Ek akela symptom bhi ho sakta hai bina kisi hormonal imbalance ke.',
      howToIdentify: 'Gale ke saamne clearly dikhti sujan — kabhi kabhi sirf andar se pressure feel hota hai.',
      homeopediaSlug: '',
      isAvailable: false,
    },
  ],

  redFlags: [
    'Thyroid Cancer — agar gale mein gath tezi se badi ho rahi ho, awaaz baith gayi ho, ya niglane mein takleef ho to turant doctor. Ultrasound aur biopsy zaruri hai — wait mat karo.',
    'Thyroid Storm (Hyperthyroid Emergency) — agar dil ki dhadkan bahut tez ho (150+ beats/min feel ho), bukhaar aaye, aur confusion ya behoshi ho — ye life-threatening emergency hai, turant hospital.',
    "Hashimoto's Thyroiditis — autoimmune condition jisme immune system thyroid destroy karta hai. Agar hypothyroid ke saath anemia, joint pain, ya frequent infections aayein to is condition ka test zaruri hai.",
  ],

  homeSteps: [
    {
      _key: 'hs1',
      action: 'Neend Ka Routine Fix Karo',
      whyItWorks: 'Thyroid hormone production mainly raat ko hoti hai — irregular neend se ye cycle disrupt hoti hai aur symptoms worse feel hote hain. Raat 10-11 baje tak sone ki koshish karo — ek fixed time pe.',
    },
    {
      _key: 'hs2',
      action: 'Gale Ko Aaram Do — Tight Clothes Ya Necklace Avoid Karo',
      whyItWorks: 'Tight collar, gale ke kareeb necklace, ya scarf se gale pe pressure kam karo — especially agar sujan hai. External pressure inflamed thyroid gland ko aur uncomfortable banata hai — hatane se immediate relief milti hai.',
    },
    {
      _key: 'hs3',
      action: 'Stress Management — Short Breathing Exercise',
      whyItWorks: 'Stress cortisol badhata hai jo thyroid function interfere karta hai — even simple relaxation cortisol levels ko moderate karne mein help karta hai. Roz 10 minute ke liye deep breathing ya light walk karo.',
    },
    {
      _key: 'hs4',
      action: 'Hydration — Din Mein 8-10 Glass Paani',
      whyItWorks: 'Kam paani pine se metabolism aur thyroid function dono slow hote hain — specifically hypothyroid mein ye aur worse hota hai. Proper hydration metabolism ko support karta hai aur constipation (ek common thyroid symptom) mein relief deta hai.',
    },
    {
      _key: 'hs5',
      action: 'Symptoms Ka Record Rakho — Chhota Diary',
      whyItWorks: 'Kab kaunsa symptom tha, kitna intense tha, kya change tha — ye note karo. Doctor ke paas jaane pe exact pattern batana treatment decide karne mein kaafi help karta hai — thyroid symptoms vague hote hain, documentation power deta hai.',
    },
  ],

  homeopathyIndividualization: `"Thyroid ke lakshan" ek category hai — lekin har insaan mein expression bilkul alag hota hai. Kisi ko zyada thakaan hai, kisi ko weight gain dominant hai, kisi ko hair fall, kisi ko mood swings. Homeopathy mein sirf "thyroid" nahi dekha jaata — aapke symptoms kaisa lete hain, kab worse hote hain, kya se better hote hain, aur poori body ka pattern — ye sab milake treatment decide hota hai. Isliye do logon ko ek hi thyroid report ho — aur unka treatment bilkul alag ho sakta hai.`,

  homeopathyRootCause: `Thyroid symptoms baar baar aana aksar sirf hormonal nahi — underlying immune system ya stress response ka signal bhi ho sakta hai. Homeopathy sirf symptoms band karna goal nahi maanti — jo deeper pattern inhe produce kar raha hai, usse address karne ki koshish hoti hai. Waqt ke saath, symptoms ki frequency aur intensity dono mein fark aata hai — results individual hote hain aur chronic cases mein research limited hai, lekin constitutional approach is liye valuable hai.\n\nNote: Homeopathy is case mein conventional thyroid medication ke replacement ke roop mein nahi — complementary ke roop mein use hoti hai. Severe ya confirmed thyroid cases mein conventional treatment pehle, homeopathy saath mein.`,

  homeopathySafety: `Pregnancy mein, bacchon mein, ya agar alag alag doosri medications chal rahi hon — homeopathy ek safe complementary option hai. Highly diluted medicines hone ki wajah se interaction risk practically zero hai. Severe thyroid disorders (thyroid storm, thyroid cancer, confirmed Hashimoto's mein severe symptoms) mein conventional emergency treatment pehle. Homeopathy replacement nahi hai — saath chalti hai.`,

  isForYouIf: [
    'Aap thyroid ke root pattern ko address karna chahte hain — sirf har baar symptom suppress nahi karna',
    'Aap already conventional treatment le rahe hain lekin uske saath ek safe complementary support chahte hain',
    'Aapko side-effect free option chahiye — specially pregnancy, bachpan, ya old age mein',
  ],

  notForYouIf: [
    'Aapko thyroid storm jaise emergency symptoms hain — pehle turant hospital, phir homeopathy',
    'Aapko confirmed thyroid cancer hai — surgery aur conventional oncology pehle. Recovery phase mein homeopathy help kar sakti hai',
    'Aap sirf ek ya do din mein result chahte hain — thyroid constitutional treatment time-based process hai',
  ],

  homeopathyDiseaseLinks: [
    { _key: 'hdl1', diseaseName: 'Hypothyroid (Underactive Thyroid) ka poora ilaaj', diseaseSlug: 'thyroid'         },
    { _key: 'hdl2', diseaseName: 'Hyperthyroid (Overactive Thyroid) ka poora ilaaj', diseaseSlug: 'hyperthyroidism' },
  ],

  linkedDiseaseCards: [
    { _key: 'ldc1', title: 'Hypothyroid',     hindiName: 'Thyroid Ki Kam Sakriyata',  slug: 'thyroid',         isAvailable: true  },
    { _key: 'ldc2', title: 'Hyperthyroid',    hindiName: 'Thyroid Ki Adhik Sakriyata', slug: 'hyperthyroidism', isAvailable: true  },
    { _key: 'ldc3', title: 'Thyroid Nodules', hindiName: 'Thyroid Ki Ganthein',        slug: '',                isAvailable: false },
    { _key: 'ldc4', title: 'Goitre',          hindiName: 'Ghengha / Gale Ki Sujan',   slug: '',                isAvailable: false },
  ],

  faqs: [
    {
      _key: 'faq1',
      faqType: 'normal-vs-serious',
      question: 'Thyroid ke lakshan kya hote hain aur ye serious kab hote hain?',
      answer: `Thyroid ke common lakshan mein thakaan, wajan mein sudden change, baal jharna, skin dry hona, irregular heartbeat, aur mood swings shamil hain.\n\nYe tab serious maane jaate hain jab: symptoms tezi se badhte hon, gale mein gath ho, dil ki dhadkan irregular ho, ya weight achanak bahut tezi se badhe ya ghatte. In cases mein delay mat karo — is hafte doctor aur TSH test zaruri hai.\n\nAgar sirf halki thakaan ya mood change hai jo aayi gayi rehti hai — observe karo, lekin TSH test ek baar karwa lena galat nahi hai.`,
    },
    {
      _key: 'faq2',
      faqType: 'common-cause',
      question: 'Mahilaon mein thyroid ke symptoms kyun zyada hote hain?',
      answer: `Mahilaon mein thyroid problems mardon ke mukable 5-8 guna zyada hoti hain — iska karan hormonal connection hai.\n\nEstrogen aur thyroid hormones dono ek doosre ko affect karte hain. Pregnancy, periods, menopause — jab bhi estrogen fluctuate hota hai, thyroid pe strain aata hai. Iske alawa autoimmune conditions (jo thyroid attack karte hain jaise Hashimoto's) mahilaon mein naturally zyada common hain.\n\nIsliye mahilaon ko recommend kiya jaata hai ki 30 ke baad ek baar thyroid panel karwayein — specially agar family history hai ya irregular periods hain.`,
    },
    {
      _key: 'faq3',
      faqType: 'common-cause',
      question: 'Thyroid symptoms ka sabse common karan kya hai?',
      answer: `India mein sabse common cause hai autoimmune thyroid disease — Hashimoto's (hypothyroid ke liye) aur Graves' disease (hyperthyroid ke liye).\n\nIn conditions mein immune system galti se thyroid gland ko attack karta hai. Iske baad iodine deficiency aata hai — especially rural India mein jahan iodized salt ka use consistent nahi hai.\n\nStress aur sleep deprivation ye dono thyroid symptoms ko directly trigger nahi karte — lekin already existing condition ko kaafi worse zaroor kar dete hain.`,
    },
    {
      _key: 'faq4',
      faqType: 'test-diagnosis',
      question: 'TSH normal ho phir bhi thyroid symptoms kyun aate hain?',
      answer: `Ye ek bahut common aur valid confusion hai — aur answer ye hai ki TSH normal hona matlab thyroid perfect hai, zaruri nahi.\n\nTSH ek pituitary hormone hai jo thyroid ko signal deta hai. Agar TSH normal hai lekin T3 ya T4 (actual thyroid hormones) ka conversion ya cells tak pahunchna kisi karan se disturbed hai — to symptoms phir bhi aayenge.\n\nIske alawa "normal range" lab se lab alag hoti hai. Kai doctors ab 0.5-2.5 range ko optimal maante hain — while older labs still 0.5-4.5 ko normal bolte hain. Agar aap normal range mein "upper end" pe hain aur symptoms hain — doctor se specifically poochhein T3, Free T4, aur antibody tests ke baare mein.`,
    },
    {
      _key: 'faq5',
      faqType: 'normal-vs-serious',
      question: 'Hypothyroid aur hyperthyroid ke symptoms mein fark kya hai?',
      answer: `Dono opposite ends hain — aur symptoms bhi opposite:\n\nHypothyroid (kam hormone):\n- Wajan badhna\n- Thakaan, neend zyada\n- Sardi zyada lagti hai\n- Constipation (kabz)\n- Baal jharna, skin dry\n- Depression\n\nHyperthyroid (zyada hormone):\n- Wajan ghattna\n- Energy bahut zyada — phir suddenly crash\n- Garmi zyada lagti hai\n- Loose motions\n- Dil tez dhadakna, haath kaanpna\n- Anxiety, irritability\n\nAgar aap identify nahi kar pa rahe ki kaun sa hai — doctor se TSH + T3 + T4 panel karwao. Blood report bata dega.`,
    },
    {
      _key: 'faq6',
      faqType: 'pregnancy',
      question: 'Pregnancy mein thyroid symptoms normal hain ya serious?',
      answer: `Pregnancy mein thyroid symptoms kabhi bhi ignore nahi karne — ye risk dono mother aur baby ke liye hai.\n\nNormal pregnancy mein bhi thakaan, nausea, aur mood changes hoti hain — but thyroid symptoms specifically: bahut zyada thakaan, heart racing, ya unexplained weight loss — ye normal nahi maane jaate.\n\nUnmanaged hypothyroid in pregnancy se miscarriage, preterm birth, aur baby ke brain development pe asar ho sakta hai. Unmanaged hyperthyroid se preeclampsia ka risk badhta hai.\n\nDoctor se specifically kehna: "Mujhe thyroid panel chahiye — TSH + Free T4" — pehle trimester mein hi. Homeopathy pregnancy mein safe complementary option hai — lekin thyroid confirmed ho to conventional treatment bhi parallel zaruri hai.`,
    },
    {
      _key: 'faq7',
      faqType: 'ghar-pe-wait',
      question: 'Kya thyroid symptoms ghar pe manage ho sakte hain?',
      answer: `Partial haan — lekin sirf symptoms management ke liye, actual thyroid condition ke liye nahi.\n\nGhar pe ye karo:\n- Neend fix karo — 7-8 ghante regular\n- Stress kam karo — walk, breathing exercises\n- Iodized namak use karo consistently\n- Hydration theek rakho\n- Symptoms ka record rakho\n\nLekin: agar TSH test nahi kiya, to kisi bhi ghar pe management se aage nahi badhe. Thyroid disorder diagnose karna zaroori hai pehle — phir management plan banta hai.`,
    },
    {
      _key: 'faq8',
      faqType: 'homeopathy',
      question: 'Kya homeopathy thyroid symptoms mein kaam karti hai?',
      answer: `Homeopathy thyroid symptoms mein help kar sakti hai — specifically pattern-based, individualized approach se.\n\nImportant nuance: Homeopathy thyroid hormone replace nahi karti — ye body ke own regulatory mechanisms ko support karne ki koshish karti hai. Chronic cases mein, jab conventional treatment chal raha ho, homeopathy complementary taur pe add ki ja sakti hai.\n\nResearch is area mein limited hai aur results individual hote hain — jo patient actively case history share karta hai aur follow-up karta hai, unme better outcomes dikhte hain.`,
    },
    {
      _key: 'faq9',
      faqType: 'duration',
      question: 'Thyroid symptoms kitne waqt mein theek hote hain?',
      answer: `Ye depend karta hai ki kaunsi thyroid condition hai:\n\nAgar sirf lifestyle se symptoms hain (stress, iodine deficiency): 2-4 hafte mein improvement possible hai jab trigger address ho.\n\nHypothyroid ya hyperthyroid diagnosed ho: Conventional treatment se TSH normalize hone mein 6-12 hafte lagte hain — symptoms dhire dhire theek hote hain. Complete stabilization 3-6 mahine tak le sakta hai.\n\n"Permanent cure" ka vaada koi bhi system honestly nahi kar sakta thyroid ke liye — aur koi kare to doubt karo. Jo realistic hai: symptoms itne manageable ho jaate hain ki daily life practically normal ho jaati hai. Homeopathy mein results aur zyada gradual hote hain lekin sustainable.`,
    },
    {
      _key: 'faq10',
      faqType: 'common-cause',
      question: 'Mardon mein thyroid ke symptoms kaun kaun se hain?',
      answer: `Mardon mein thyroid problems kam common hain — lekin hoti hain, aur aksar zyada der se diagnose hoti hain.\n\nMard mein specific symptoms jo thyroid se linked ho sakte hain:\n- Libido (sex drive) ka achaanak kam hona\n- Muscle weakness — especially arms aur legs mein\n- Baal jharna — specifically hypothyroid mein\n- Dil tez dhadakna ya irregular — hyperthyroid mein\n- Weight gain bina diet change ke — hypothyroid mein\n- Erectile dysfunction jo kisi aur cause se explain na ho\n\nMardon mein ye symptoms kabhi kabhi age ya stress se jod diye jaate hain — thyroid test specifically maanga nahi jaata. Agar ye symptoms hain to doctor se specifically thyroid panel poochhein.`,
    },
    {
      _key: 'faq11',
      faqType: 'test-diagnosis',
      question: 'Thyroid symptoms mein kaunsa test karwana chahiye?',
      answer: `Basic thyroid panel mein ye tests hote hain — priority order mein:\n1. TSH (Thyroid Stimulating Hormone) — pehla aur most important\n2. Free T4 — actual thyroid hormone level\n3. Free T3 — active form of thyroid hormone\n4. Anti-TPO Antibodies — Hashimoto's detect karne ke liye\n5. Anti-TgAb — doosra autoimmune marker\n\nAgar gale mein gath ho: Thyroid Ultrasound — structure dekhne ke liye\nAgar cancer ka doubt ho: FNAC (biopsy)\n\nTSH akela normal aaye lekin symptoms hain — Free T3 aur antibodies bhi jaroor karwao. Ye tests morning mein empty stomach pe best results dete hain.`,
    },
    {
      _key: 'faq12',
      faqType: 'baar-baar',
      question: 'Thyroid symptoms baar baar kyun aate hain?',
      answer: `Thyroid symptoms baar baar aana aksar do reasons se hota hai:\n\n1. Underlying condition managed nahi hai — medication dose theek nahi, ya condition diagnose hi nahi hui. Iss case mein symptoms treat karna kaam nahi karta — root condition address karni padti hai.\n\n2. Triggers baar baar aa rahe hain — stress, neend ki kami, diet mein iodine ka inconsistency, ya koi doosri medication jo thyroid ko affect karti hai (lithium, certain blood pressure medications).\n\nAgar already treatment chal rahi hai aur phir bhi symptoms baar baar aa rahe hain — doctor se TSH recheck karwao. Dose adjustment ya underlying cause reassessment ho sakti hai.`,
    },
  ],

  relatedSymptoms: [
    { _key: 'rs1', name: 'Hair Fall',    hindiName: 'Baal Jharna',       slug: 'hair-fall'    },
    { _key: 'rs2', name: 'Fatigue',      hindiName: 'Bahut Zyada Thakaan', slug: 'fatigue'    },
    { _key: 'rs3', name: 'Weight Gain',  hindiName: 'Wajan Badhna',      slug: 'weight-gain'  },
    { _key: 'rs4', name: 'Palpitations', hindiName: 'Dhadkan Tez Hona',  slug: 'palpitations' },
  ],

  sources: [
    { _key: 's1', name: 'WHO — Global Prevalence of Iodine Deficiency Disorders',        year: '2023', url: 'https://www.who.int/health-topics/thyroid-disorders' },
    { _key: 's2', name: 'Mayo Clinic — Hypothyroidism: Symptoms & Causes',               year: '2024', url: 'https://www.mayoclinic.org/diseases-conditions/hypothyroidism/symptoms-causes/syc-20350284' },
    { _key: 's3', name: 'NCBI — Thyroid Disorders in India: An Epidemiological Perspective', year: '2020', url: 'https://pubmed.ncbi.nlm.nih.gov/32699655/' },
    { _key: 's4', name: 'NHS UK — Thyroid: Overview, Symptoms and Causes',                year: '2023', url: 'https://www.nhs.uk/conditions/thyroid-cancer/symptoms/' },
  ],

  quickFactSymptom: 'Thyroid gland sirf 20-30 gram ki hoti hai — lekin poore body ka metabolism control karti hai.',
  quickFactIndiaStats: 'India mein lagbhag 4.2 crore log thyroid disorders se affected hain — mahilaon mein 8x zyada common.',
  quickFactDoctorWhen: 'TSH normal ho lekin symptoms hon, gale mein gath ho, ya pregnancy mein koi bhi thyroid symptom — doctor zaruri.',
  reviewDate: 'May 2026',

  doctorNote: 'Maine apni practice mein dekha hai ki thyroid ke jo patients aate hain, unme ek bahut common pattern hai — pehle saalon tak "thakaan" aur "wajan badhna" doosri wajahon se jodte hain — diet, kaam ka stress, umar — aur thyroid test tab aata hai jab kaafi time nikal chuka hota hai. Homeopathy mein constitutional assessment is liye valuable hai kyunki hum patient ka poora pattern dekhte hain — sirf TSH number nahi. Aksar woh patients jinhein diagnosis mein bahut time laga, unhe constitutional approach se best response milta hai.',
}

async function seed() {
  console.log('🌱 Seeding Thyroid Symptoms symptom page...')
  await client.createOrReplace(doc)
  console.log('✅ Symptom seeded — homeopedia.in/symptoms/thyroid-symptoms')
}

seed().catch(console.error)
