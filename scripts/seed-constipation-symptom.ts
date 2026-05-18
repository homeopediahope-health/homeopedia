import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'symptom-constipation',
  _type: 'symptom',

  name: 'Constipation',
  hindiName: 'Kabz',
  hinglishName: 'Kabz / Kabja',
  slug: { _type: 'slug', current: 'constipation' },
  bodySystem: 'Digestive',

  metaTitle: 'Constipation in Hindi — Kabz ke Karan aur Homeopathy | Homeopedia',
  metaDescription: 'Kabz (constipation) ke karan, severity aur ghar pe safe steps — simple Hinglish mein. Verified info, Dr. Shadab reviewed.',
  publishedAt: new Date('2026-05-18').toISOString(),

  whatIsThis: `Subah uthte hi pet bhaari lagta hai — bathroom jaane ki koshish, lekin kuch hota nahi. Do din, teen din, sometimes ek hafte se zyada. Constipation (kabz) sirf ek physical takleef nahi — ye irritation, discomfort, aur din bhar ka mood kharab karne wali cheez hai.

Body mein kya hota hai: Jab aana (large intestine) se paani zyada absorb ho jaata hai, ya intestine ki movement slow ho jaati hai — stool dry aur hard ho jaata hai. Pass karna mushkil ho jaata hai.

Ye bahut common hai — India mein har 5 mein se 1 insaan kabz se regularly affect hota hai. Aap akele nahi hain. Ye page aapko 2 minute mein batayega — ghar pe rukein ya doctor ke paas jaayein.`,

  indiaContext: 'ICMR Gut Health Report 2022 ke anusaar India mein lagbhag 22% adults chronic constipation se affect hain — urban areas mein sedentary lifestyle aur processed food diet ki wajah se ye percentage zyada hai.',
  indiaContextSource: 'WHO Global Health Estimates; ICMR Gut Health Report 2022',

  severityLevel1: [
    '3-4 din se kabz hai, lekin pet mein dard nahi',
    'Stool hard hai lekin pass ho raha hai',
    'Koi aur symptom nahi — sirf frequency kam hai',
    'Khaana aur paani theek se le rahe hain',
  ],
  severityLevel2: [
    'Ek hafte se zyada se kabz hai',
    'Pet mein dard ya cramping lag rahi hai',
    'Achaanak weight kam ho raha hai bina kisi reason ke',
    'Kabz aur dast baar baar baari baari aate hain (IBS ka sign)',
    'Bahut zyada strain karna pad raha hai har baar',
  ],
  severityLevel3: [
    'Stool mein bright red ya dark tarry blood aa raha hai — turant hospital',
    'Pet mein achanak bahut tez dard shuru ho gaya — turant hospital',
    'Ulti ho rahi hai aur bilkul bhi stool ya gas pass nahi ho rahi — turant hospital',
    'Bukhaar ke saath kabz — abdomen phuli hui lag rahi hai — turant hospital',
    'Hernia ya pehle se koi gut surgery hui ho aur ye signs hain — turant hospital',
  ],

  timeline3Days: 'Travel, khaane ka badla hua routine, ya paani kam peena — ye sabse common wajah hain achanak kabz ki. Body adjust kar rahi hoti hai. Paani badhaao, thoda chal-phir karo — 2-3 din mein aksar theek ho jaata hai. Agar 3 din mein better nahi hua — doctor se milein.',
  timeline4Weeks: 'Ye signal hai ki kuch zaroor change karna hai — ya lifestyle mein ya koi underlying cause hai. Akeli kabz se zyada concern nahi, lekin agar weight loss, blood, ya dard bhi hai to doctor zaruri hai. Bina dard ya blood ke 2-4 hafte: doctor ko batao, test karwao.',
  timelineMonthPlus: 'Chronic constipation hai — matlab body ka ek pattern ban gaya hai. Ye aksar IBS, thyroid, ya kisi aur condition se linked hota hai. Sirf ghar ke nuskhe ab kaafi nahi — proper evaluation zaroori hai. Doctor se milein aur homeopathy ko seriously consider karein — chronic cases mein root cause treatment zaroori hai.',

  lifestyleCauses: [
    {
      _key: 'lc1',
      causeName: 'Paani Kam Peena (Dehydration)',
      mechanism: 'Large intestine ka kaam hai paani absorb karna food waste se. Jab body dehydrated hoti hai — ye process zyada aggressively hoti hai. Stool se zyada paani kheench liya jaata hai, wo dry aur hard ho jaata hai aur pass karna mushkil hota hai. Intestine ki walls isko aage push karne mein zyada force lagate hain — aur tab bhi sometimes hil nahi paata.',
      howToIdentify: 'Subah uthke ya din mein thakaan, lips dry, urine dark yellow — ye dehydration ke saath kabz ke signs hain.',
    },
    {
      _key: 'lc2',
      causeName: 'Fiber Kam, Maida Zyada',
      mechanism: 'Dietary fiber ek broom ka kaam karta hai intestine mein — stool ko bulk deta hai aur aage dhakelta hai. Maida, white rice, processed food mein fiber practically zero hota hai. Jab diet mein fiber nahi — stool ka volume kam hota hai, movement slow hoti hai, aur wo intestine ki walls se chipakta hai.',
      howToIdentify: 'Roz burger, bread, processed snacks — aur subah bathroom mein struggle. Ye direct connection hai.',
    },
    {
      _key: 'lc3',
      causeName: 'Baith Ke Kaam Karna — Physical Inactivity',
      mechanism: 'Intestine ki muscles ko contract aur relax karna hota hai stool move karne ke liye — ise peristalsis kehte hain. Exercise is process ko stimulate karta hai. Din bhar kursi pe baithne se ya bed rest se — peristalsis slow pad jaata hai. Stool zyada der intestine mein ruk jaata hai, aur zyada paani absorb hota rahe tab tak.',
      howToIdentify: 'Office workers, students jo 8-10 ghante baithte hain, ya jo bedridden hain — unme kabz ka risk sabse zyada hai.',
    },
    {
      _key: 'lc4',
      causeName: 'Stress Aur Anxiety',
      mechanism: 'Gut aur brain directly connected hain — ise gut-brain axis kehte hain. Stress hormone cortisol intestine ki normal rhythmic movement ko disrupt karta hai. Kisi ke liye stress dast laata hai — kisi ke liye kabz. Exam time, koi tension, travel anxiety — ye sab kabz trigger kar sakte hain.',
      howToIdentify: 'Kabz tab zyada hoti hai jab koi bada event ho ya tension mein ho. Travel pe jaate hi bathroom routine bigad jaata hai.',
    },
  ],

  medicalCauses: [
    {
      _key: 'mc1',
      diseaseName: 'Irritable Bowel Syndrome (IBS)',
      diseaseHindiName: 'Aanat Ki Sensitiviti / IBS',
      howSymptomPresents: 'IBS mein gut ki muscles ka coordination bigad jaata hai. Kabz aur dast baar baar baari baari aa sakte hain — aur kabz ke saath pet mein cramping hoti hai jo stool pass hone ke baad theek hoti hai.',
      howToIdentify: 'Sirf kabz nahi — bloating, gas, pet mein discomfort jo kaafi time se hai, aur stress se worse hota hai.',
      homeopediaSlug: 'ibs',
      isAvailable: true,
    },
    {
      _key: 'mc2',
      diseaseName: 'Piles (Hemorrhoids)',
      diseaseHindiName: 'Baawaseer / Piles',
      howSymptomPresents: 'Piles mein kabz cause bhi hota hai aur consequence bhi. Hard stool se pass karne mein zyada strain — rectal veins pe pressure — piles banti hain. Phir piles ki wajah se pass karne mein dard — to insaan avoid karta hai bathroom jaana — aur kabz aur badh jaati hai.',
      howToIdentify: 'Stool pass karte waqt dard ya jalan, kabhi kabhi blood, ya bahar ki taraf koi mass feel hona.',
      homeopediaSlug: 'piles',
      isAvailable: true,
    },
    {
      _key: 'mc3',
      diseaseName: 'Anal Fissure',
      diseaseHindiName: 'Fissure (Guda Dwar Ki Daraar)',
      howSymptomPresents: 'Hard stool se pass karte waqt anal area ki skin tear ho jaati hai — daraar pad jaati hai. Ye daraar bahut painful hoti hai. Insaan bathroom jaane se darne lagta hai — kabz aur badh jaati hai. Ek vicious cycle banta hai.',
      howToIdentify: 'Stool pass karte waqt sharp, burning pain — aur kabhi kabhi bright red blood. Dard 30-60 minute tak reh sakta hai.',
      homeopediaSlug: 'fissure',
      isAvailable: true,
    },
    {
      _key: 'mc4',
      diseaseName: 'Hypothyroidism (Thyroid Ki Kami)',
      diseaseHindiName: 'Thyroid Ki Kami / Underactive Thyroid',
      howSymptomPresents: 'Thyroid hormone body ki har cell ki speed control karta hai — gut cells bhi isme aate hain. Jab thyroid slow ho jaata hai — gut movement bhi slow ho jaati hai. Chronic constipation jo lifestyle change se theek nahi hoti — thyroid check karwana zaroori hai.',
      howToIdentify: 'Thakaan, weight gain, thanda zyada lagta hai, baal zyada girte hain — aur saath mein kabz. Ye combo hypothyroidism ka classic pattern hai.',
      homeopediaSlug: 'thyroid',
      isAvailable: true,
    },
  ],

  redFlags: [
    'Colorectal Cancer — agar 40+ saal ke hain, stool ki shape achaanak pencil-thin ho gayi hai, ya dark blood aa raha hai stool mein — ye warning sign hai. Ek ghante mat ruko.',
    'Intestinal Obstruction (Blockage) — agar bilkul bhi gas ya stool pass nahi ho raha, pet phul rahi hai, aur ulti ho rahi hai — ye medical emergency hai. Turant hospital.',
    'Neurological Cause (Parkinson\'s, Spinal Issues) — agar kabz ke saath numbness, weakness, ya bladder problems bhi hain — nervous system evaluation zaroori hai.',
  ],

  homeSteps: [
    {
      _key: 'hs1',
      action: 'Paani — Ek Baar Mein Nahi, Sahi Tarike Se',
      whyItWorks: 'Subah uthte hi 2 glass paani peena intestine ko "wake up" karta hai. Ye gastrocolic reflex trigger karta hai — ek natural signal jo gut ko kehta hai move karo. Sirf ek baar nahi — din bhar thoda thoda paani peete rehna zaroori hai.',
    },
    {
      _key: 'hs2',
      action: 'Chal-Phir Karo — Sirf 15-20 Minute',
      whyItWorks: 'Light walking se abdominal muscles activate hoti hain aur gut movement stimulate hoti hai. Khaane ke baad 15-20 minute ki walk specifically digestion ko help karti hai. Sirf ye ek step kaafi logon mein kabz mein significant difference laata hai.',
    },
    {
      _key: 'hs3',
      action: 'Squat Position Try Karo',
      whyItWorks: 'Indian style toilet (squat position) anatomically stool pass karne ke liye better hai. Western toilet pe ek stool ya footrest rakho paon ke neeche — ye puborectalis muscle ko relax karta hai aur stool pass karna aasaan hota hai. Simple lekin bahut effective.',
    },
    {
      _key: 'hs4',
      action: 'Warm Water — Subah Ya Raat Ko',
      whyItWorks: 'Garam paani peristalsis (intestine ki rhythmic movement) ko stimulate karta hai. Subah khali pet ya raat ko sone se pehle ek glass garam paani — ye ek safe aur gentle way hai gut ko activate karne ka.',
    },
    {
      _key: 'hs5',
      action: 'Tension Kam Karo — Bathroom Ko Event Mat Banao',
      whyItWorks: 'Jab hum force karte hain ya anxious hote hain — muscles tighten hoti hain, stool aur mushkil se pass hota hai. Ek fixed time rakho, rush mat karo. Body ko cue dena hota hai — over time routine banti hai.',
    },
  ],

  homeopathyIndividualization: `Kabz ka naam ek hai — lekin har insaan ki kabz alag hoti hai. Kisi ko subah hoti hai, kisi ko travel mein, kisi ko sirf stress mein. Kisi ka stool bahut hard hota hai, kisi ka normal lekin pass nahi hota. Kisi ko dard hota hai, kisi ko sirf bhaari pan. Homeopathy mein sirf "kabz" nahi dekhi jaati — aapki kabz kab hoti hai, kaisi hoti hai, kya se worse ya better hoti hai, kab se hai — ye sab treatment decide karta hai. Isliye do patients ko ek hi symptom mein bilkul alag medicines mil sakti hain.`,

  homeopathyRootCause: `Baar baar aane wali kabz aksar sirf lifestyle ka problem nahi hoti — koi deeper pattern hota hai. Homeopathy mein sirf stool pass karwana goal nahi — jo cheez gut ko consistently slow kar rahi hai usse address kiya jaata hai. IBS-linked kabz, stress-triggered kabz, ya thyroid-related kabz — har case mein cause alag hai, aur treatment bhi alag. Waqt ke saath frequency aur intensity dono kam hoti hain. Research is area mein limited hai aur results individual hote hain — lekin chronic cases mein root cause approach zyada sustainable rahti hai laxative dependence se.`,

  homeopathySafety: `Pregnancy mein, delivery ke baad, ya bacchon mein kabz bahut common hai — aur wahan conventional laxatives aksar safe nahi hote ya doctor avoid karna prefer karte hain. Homeopathy ek safe complementary option hai in situations mein. Emergency ya surgical condition mein pehle conventional treatment lein. Homeopathy complementary role mein hai, replacement nahi.`,

  isForYouIf: [
    'Aap root cause treat karna chahte hain — sirf baar baar laxative nahi lena',
    'Aap pregnancy mein, bacche ke liye, ya elderly parent ke liye safe option dhundh rahe hain',
    'Aapko long-term relief chahiye — dependence se bachna chahte hain',
  ],

  notForYouIf: [
    'Aapko abhi severe dard ya blockage ke signs hain — pehle emergency care lein',
    'Stool mein blood aa raha hai — pehle doctor se milein, cause rule out karo, phir complementary treatment sochein',
  ],

  homeopathyDiseaseLinks: [
    { _key: 'hdl1', diseaseName: 'Constipation ka poora ilaaj',           diseaseSlug: 'constipation' },
    { _key: 'hdl2', diseaseName: 'IBS (Irritable Bowel Syndrome) ka poora ilaaj', diseaseSlug: 'ibs'   },
    { _key: 'hdl3', diseaseName: 'Piles (Baawaseer) ka poora ilaaj',      diseaseSlug: 'piles'        },
  ],

  linkedDiseaseCards: [
    { _key: 'ldc1', title: 'Constipation',                  hindiName: 'Kabz',                        slug: 'constipation', isAvailable: true },
    { _key: 'ldc2', title: 'IBS (Irritable Bowel Syndrome)', hindiName: 'Aanat Ki Sensitiviti',        slug: 'ibs',          isAvailable: true },
    { _key: 'ldc3', title: 'Piles (Hemorrhoids)',            hindiName: 'Baawaseer',                   slug: 'piles',        isAvailable: true },
    { _key: 'ldc4', title: 'Anal Fissure',                  hindiName: 'Guda Dwar Ki Daraar',         slug: 'fissure',      isAvailable: true },
  ],

  faqs: [
    {
      _key: 'faq1',
      faqType: 'common-cause',
      question: 'Kabz ka sabse common karan kya hai?',
      answer: `Kabz ka sabse common karan hai — paani kam peena aur fiber ki kami diet mein. Jab body mein paani ki kami hoti hai, large intestine stool se zyada paani kheenchta hai — wo hard aur dry ho jaata hai aur pass karna mushkil hota hai.\n\nDoosra bada reason hai sedentary lifestyle — din bhar baithna, koi physical activity nahi.\n\nTeen din mein 2 se kam bowel movements aur strain karna pad raha ho — to ye constipation hai.\n\nHomeopathy is angle se exactly kaam karta hai — sirf stool nahi, jo body ki system slow kar rahi hai usse address karta hai.`,
    },
    {
      _key: 'faq2',
      faqType: 'duration',
      question: 'Kabz kitne din tak normal maani jaati hai?',
      answer: `Medically, constipation tab maana jaata hai jab hafte mein 3 se kam bowel movements hoon, ya stool hard ho, ya pass karne mein bahut strain karna pade — aur ye 2-3 hafte se zyada chale.\n\n1-3 din ki kabz — agar travel, diet change, ya dehydration ki wajah se hai — normal hoti hai aur aksar khud theek ho jaati hai.\n\nEk hafte se zyada chale, ya saath mein dard, blood, ya weight loss ho — tab doctor zaroori hai.\n\nChronic constipation — 3 mahine se zyada — iska matlab hai proper evaluation aur root cause treatment zaruri hai.`,
    },
    {
      _key: 'faq3',
      faqType: 'normal-vs-serious',
      question: 'Kab kabz serious hoti hai aur doctor zaroori hota hai?',
      answer: `Ye signs ho to turant doctor ke paas jaao:\n- Stool mein blood — bright red ya dark tarry\n- Achanak severe pet dard — especially agar bilkul gas ya stool pass nahi ho raha\n- Unexplained weight loss ke saath kabz\n- Pencil-thin stool achaanak — shape change\n- Bukhaar aur phula hua pet\n\nYe signs ho to is hafte doctor se milein:\n- Ek hafte se zyada ki kabz jo lifestyle change se theek nahi ho rahi\n- Kabz aur dast baar baar baari baari\n- Bahut strain lage har baar aur piles ya fissure ka dard ho\n\n3-4 din ki kabz bina kisi aur symptom ke — ghar pe manage kar sakte hain.`,
    },
    {
      _key: 'faq4',
      faqType: 'pregnancy',
      question: 'Pregnancy mein kabz kyun hoti hai — normal hai kya?',
      answer: `Haan, pregnancy mein kabz bahut common hai — lekin "normal" iska matlab ye nahi ki ignore karo. Teen reasons hain:\n1. Progesterone hormone intestine muscles ko relax karta hai — movement slow hoti hai\n2. Growing uterus intestine pe pressure daalti hai\n3. Iron supplements (jo pregnancy mein diye jaate hain) kabz ka known side effect hain\n\nYe karo: Zyada paani, fiber-rich khaana, light walk. Koi bhi laxative lene se pehle doctor se poochho — pregnancy mein sab medicines safe nahi hoti.\n\nAgar kabz ke saath severe dard ya blood ho — turant doctor ke paas jaao. Ignore mat karo.`,
    },
    {
      _key: 'faq5',
      faqType: 'india-specific',
      question: 'Delivery ke baad kabz kyun hoti hai?',
      answer: `Delivery ke baad kabz ek bahut common problem hai — aur aksar pehle kuch din mein hoti hai. Reasons:\n- Labor ke dauran dehydration\n- Epidural ya pain medicines ka gut pe effect\n- C-section mein abdominal muscles affect hoti hain — bowel movement slow hoti hai\n- Perineal pain ya stitches ki wajah se bathroom jaane mein darne lagti hain mahilaaen\n\nPaani zyada peena, chal-phir karna jitna possible ho, aur doctor ki advice se stool softener — ye standard approach hai.\n\nC-section ke baad typically 3-5 din lag sakte hain first bowel movement mein — ye normal hai. Agar 5 din se zyada ho ya pet bahut phul jaaye — doctor ko batao.`,
    },
    {
      _key: 'faq6',
      faqType: 'bacchon-mein',
      question: 'Bacchon aur newborns mein kabz kyun hoti hai?',
      answer: `Newborns mein kabz tab hoti hai jab formula milk pe shift hote hain ya solid food shuru hoti hai. Breastfed babies mein kabz actually rare hai — breast milk almost completely digest hoti hai. Formula-fed babies mein constipation zyada hoti hai kyunki formula thoda heavy hota hai.\n\nSigns: Baby baar baar push karta hai, cry karta hai, stool bahut hard hai.\n\nAgar newborn 2 hafte se zyada ka ho aur stool bahut kam aa raha ho — pediatrician se milein. Ghar pe kuch mat dein bina doctor se pooche — babies mein kuch bhi dene se pehle confirmation zaruri hai.`,
    },
    {
      _key: 'faq7',
      faqType: 'bacchon-mein',
      question: 'Toddlers mein kabz ka karan kya hai?',
      answer: `2-5 saal ke bacchon mein kabz ka sabse common karan hai toilet training ka stress. Bacche aksar bathroom jaane se darne lagte hain — especially agar pehle kabhi dard hua ho — aur voluntarily hold karte hain. Stool zyada dry ho jaata hai, pass karna aur mushkil hota hai — ek cycle banta hai.\n\nDoosra reason: naya khaana shuru hona, school change, ya koi life stress.\n\nKya karo: Bacche pe pressure mat dalo, paani aur fruit zyada do, aur thodi physical activity. Agar 2 hafte se zyada ho ya dard mein hai — doctor se milein.`,
    },
    {
      _key: 'faq8',
      faqType: 'ghar-pe-wait',
      question: 'Kabz mein ghar pe kab tak wait kar sakte hain?',
      answer: `3-4 din tak — agar sirf kabz hai aur koi aur symptom nahi — ghar pe theek se try karo: zyada paani, thodi walk, warm water.\n\nYe signs hon to wait mat karo:\n- Stool mein blood\n- Severe pet dard\n- Bilkul bhi gas pass nahi ho rahi\n- Bukhaar ke saath kabz\n\nEk hafte se zyada — even bina in signs ke — doctor ko batao.`,
    },
    {
      _key: 'faq9',
      faqType: 'homeopathy',
      question: 'Kya homeopathy kabz mein kaam karta hai?',
      answer: `Kabz ke liye homeopathy tab sabse effective hoti hai jab cause lifestyle ke peeche koi pattern ho — jaise chronic stress-triggered kabz, IBS-linked kabz, ya post-surgery recovery mein kabz.\n\nHomeopathy sirf stool pass nahi karwati — gut ki underlying sensitivity aur pattern ko address karti hai. Results individual hote hain aur research is area mein limited hai — lekin jo patients chronic kabz se thak chuke hain, unke liye root cause approach zyada sustainable hoti hai laxative dependence se.\n\nEmergency ya acute severe kabz mein pehle conventional treatment — homeopathy saath mein chalao.`,
    },
    {
      _key: 'faq10',
      faqType: 'baar-baar',
      question: 'Baar baar kabz kyun aati hai?',
      answer: `Baar baar kabz ek signal hai ki sirf ek baar ka treatment enough nahi — koi underlying pattern hai. Possible reasons:\n- Diet mein consistently fiber kam rehta hai\n- Paani ki kami regular pattern hai\n- IBS hai — gut ki sensitivity ki problem\n- Thyroid slow hai — check nahi karwaya abhi tak\n- Laxatives ka overuse — gut unpe depend ho gayi hai\n- Chronic stress jo gut-brain axis disrupt karta hai\n\nBaar baar aane wali kabz mein proper evaluation zaroori hai — ek baar theek hone pe ignore nahi karna chahiye.`,
    },
    {
      _key: 'faq11',
      faqType: 'permanent',
      question: 'Kabz se hamesha ke liye kaise chutkara milega?',
      answer: `"Permanent cure" ka promise koi bhi system honestly nahi de sakta — aur koi de to doubt karo.\n\nJo realistic hai: sahi treatment aur lifestyle se kabz ki frequency itni kam ho sakti hai ki life practically normal ho jaaye. Iska matlab hai:\n- Cause identify karna — IBS, thyroid, diet, stress — jo bhi ho\n- Woh cause specifically treat karna — sirf symptoms nahi\n- Long-term diet aur hydration habits banana\n\nHomeopathy chronic kabz mein isi liye helpful hoti hai — kyunki ye cause-based treatment hai, sirf ek din ka solution nahi. Lekin iska time lagta hai aur results individual hote hain.`,
    },
    {
      _key: 'faq12',
      faqType: 'test-diagnosis',
      question: 'Kabz mein kaunsa test karwana chahiye?',
      answer: `Agar kabz ek hafte se zyada hai ya baar baar aa rahi hai, doctor ye tests suggest kar sakte hain:\n- Blood test: Thyroid (TSH, T3, T4), CBC, Electrolytes\n- Stool test: Agar blood ho ya infection suspect ho\n- Colonoscopy: 45+ saal mein agar kabz naya symptom ho, ya family mein colon cancer history ho\n- Abdominal X-ray: Agar blockage suspect ho\n\nYe tests khud se mat karwao — doctor ki history ke baad wo decide karte hain kya zaroori hai.`,
    },
  ],

  relatedSymptoms: [
    { _key: 'rs1', name: 'Bloating',       hindiName: 'Pet Phoolna',    slug: 'bloating'       },
    { _key: 'rs2', name: 'Abdominal Pain', hindiName: 'Pet Dard',       slug: 'abdominal-pain' },
    { _key: 'rs3', name: 'Acidity',        hindiName: 'Pet Mein Jalan', slug: 'acidity'        },
    { _key: 'rs4', name: 'Blood in Stool', hindiName: 'Maal Mein Khoon', slug: 'blood-in-stool' },
  ],

  sources: [
    { _key: 's1', name: 'WHO — Gastrointestinal Health: Global Burden',                             year: '2022', url: 'https://www.who.int/news-room/fact-sheets/detail/gastrointestinal-health' },
    { _key: 's2', name: 'Mayo Clinic — Constipation: Symptoms & Causes',                            year: '2024', url: 'https://www.mayoclinic.org/diseases-conditions/constipation/symptoms-causes/syc-20354253' },
    { _key: 's3', name: 'NCBI — Chronic Constipation: Pathophysiology and Current Treatment',       year: '2021', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8116883/' },
    { _key: 's4', name: 'NHS UK — Constipation: Causes, Symptoms and Treatment',                    year: '2023', url: 'https://www.nhs.uk/conditions/constipation/' },
  ],

  quickFactSymptom: 'Hafte mein 3 se kam bowel movements = constipation — medically defined',
  quickFactIndiaStats: 'India mein lagbhag 22% adults chronic constipation se affect hain — ICMR 2022 estimate',
  quickFactDoctorWhen: 'Blood in stool, severe pain, ya 1 hafte se zyada kabz — doctor se milein',
  reviewDate: 'May 2026',

  doctorNote: 'Maine apni practice mein dekha hai ki kabz ke jo patients aate hain, unme se kaafi log kai salon se laxatives le rahe hote hain — aur kabhi kisi ne unhe ye nahi bataya ki body in pe depend ho jaati hai aur gut ki khud ki kaam karne ki aadat khatam ho jaati hai. Asli problem aksar IBS ya thyroid hoti hai jo miss ho jaati hai. Ek detailed history — kab hoti hai, kya se worse hoti hai, kab se hai — is se hi actual cause pata chalta hai aur treatment seedhi uski taraf jaati hai.',
}

async function seed() {
  console.log('🌱 Seeding Constipation symptom page...')
  await client.createOrReplace(doc)
  console.log('✅ Symptom seeded — homeopedia.in/symptoms/constipation')
}

seed().catch(console.error)
