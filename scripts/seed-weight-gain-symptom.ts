import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'symptom-weight-gain',
  _type: 'symptom',

  name: 'Weight Gain',
  hindiName: 'Wajan Badhna',
  hinglishName: 'Wajan Badhna (Weight Gain)',
  slug: { _type: 'slug', current: 'weight-gain' },
  bodySystem: 'Hormonal',

  metaTitle: 'Weight Gain in Hindi — Wajan Badhne Ke Karan aur Homeopathy | Homeopedia',
  metaDescription: 'Wajan badhna (weight gain) ke karan, kaunsi bimari ka lakshan ho sakta hai, aur homeopathic ilaaj — simple Hinglish mein. Doctor-reviewed info.',
  publishedAt: new Date('2026-05-18').toISOString(),

  whatIsThis: `Aap diet control kar rahe hain, thoda walk bhi kar rahe hain — phir bhi wajan badhta ja raha hai. Ya achanak bina kisi wajah ke 4-5 kg badh gaya. Ye frustrating hota hai — aur aksar sirf "zyada khana" ka result nahi hota.

Wajan badhna (weight gain) ek symptom hai — apne aap mein koi disease nahi. Iska matlab hai ki body mein kuch aur chal raha hai — hormones, metabolism, water retention, ya koi underlying condition — jo bahar se "weight gain" ke roop mein dikh raha hai.

Ye page 2 minute mein batayega: aapka weight gain normal hai ya kisi bimari ka signal, ghar pe kya karna chahiye, aur doctor se kab milna zaroori hai.`,

  indiaContext: 'India mein 135 million (13.5 crore) se zyada log obesity ya overweight category mein hain — aur inme se 60% cases mein koi underlying hormonal ya metabolic condition bhi involved hoti hai jo diagnose nahi hoti.',
  indiaContextSource: 'ICMR — India Diabetes & Obesity Study 2023; WHO South-East Asia Obesity Data 2024; Lancet India Metabolic Health Report 2022',

  severityLevel1: [
    'Festive season ya vacation ke baad 1-2 kg weight badha — lifestyle se clearly linked',
    'Wajan dheere dheere badh raha hai (mahine mein 500g se kam) — diet aur activity mein change obvious hai',
    'Thodi bloating ya puffiness — specifically periods ke aas paas mahilaon mein',
    'Activity level achanak kam ho gayi (job change, injury) aur weight badha',
    'Neend aur mood theek hai, energy normal hai — sirf wajan mein change',
  ],
  severityLevel2: [
    'Bina kisi wajah ke 1 mahine mein 3 kg+ weight gain — diet ya activity change nahi ki',
    'Thakaan, baal jharna, ya skin dry hone ke saath weight gain — thyroid check zaroori',
    'Periods irregular ho gayi aur weight badh raha hai — PCOD ya hormonal issue possible',
    'Chehra, haath, pair mein puffiness jo raat ko zyada hoti hai — water retention ya kidney issue',
    'Delivery ke baad 6 mahine+ ho gaye lekin weight zyada hi badh raha hai — hormonal recheck',
    'Stress bahut zyada hai aur pet ke aas paas specifically weight badh raha hai — cortisol angle',
  ],
  severityLevel3: [
    'Bina kisi wajah ke bahut tezi se wajan badh raha hai aur saans fulti hai — turant doctor',
    'Pair aur pet mein bahut zyada sujan ke saath weight gain — kidney ya liver problem possible, turant milein',
    'Weight gain ke saath chest mein dard ya pressure — hospital immediately',
    'Pregnancy mein achanak bahut zyada weight gain + headache + ankh ke aage dhundlapan — preeclampsia risk, emergency',
  ],

  timeline3Days: 'Agar wajan 2-3 din mein suddenly badha hai — ye almost hamesha water retention hota hai, fat nahi. Namak zyada khaya, period aane wala hai, ya kuch medication — ye causes hain. 3-5 din observe karo, paani zyada piyo. Agar 1 hafte mein wapis normal ho jaata hai to koi problem nahi.',
  timeline4Weeks: 'Agar 4 hafte se wajan consistently badh raha hai aur diet ya activity mein koi obvious change nahi kiya — ye signal hai ki body mein kuch aur chal raha hai. Is hafte ek basic check karo: thyroid test (TSH), blood sugar (HbA1c), aur agar mahila hain to pelvic ultrasound. Khud se diet crash mat karo — pehle reason dhundho.',
  timelineMonthPlus: 'Agar 1-3 mahine ya usse zyada se wajan badh raha hai aur kaaran pata nahi — ye doctor ka kaam hai. Lab tests ke bagair sirf gym ya diet se solve karna mushkil hoga agar underlying condition hai. Doctor se milein, tests karwayein, phir plan banayein.',

  lifestyleCauses: [
    {
      _key: 'lc1',
      causeName: 'Processed Foods aur Hidden Calories',
      mechanism: 'Packaged foods, biscuits, namkeen, instant noodles — inme calories aur sodium (namak) dono bahut zyada hote hain. Sodium water retention badhata hai — aur calories fat storage. Ye combination weight tezi se badhata hai even if "thoda hi kha rahe hain" feel ho.',
      howToIdentify: 'Weight gain ke saath thodi bloating ya puffiness bhi hai. Zyada processed ya bahar ka khana kha rahe hain regularly.',
    },
    {
      _key: 'lc2',
      causeName: 'Neend Ki Kami — Hormones Pe Seedha Asar',
      mechanism: 'Kum neend se ghrelin (hunger hormone) badhta hai aur leptin (fullness hormone) ghatta hai — result: zyada bhookh lagti hai, especially sweet aur fatty cheezein. Saath mein cortisol bhi badhta hai jo pet ke aas paas fat store karta hai.',
      howToIdentify: '6 ghante se kam neend regularly. Weight gain ke saath zyada bhookh, specifically raat mein cravings. Stress bhi zyada rehta hai.',
    },
    {
      _key: 'lc3',
      causeName: 'Sedentary Lifestyle — Activity Suddenly Kam Ho Gayi',
      mechanism: 'Work from home, desk job, ya injury ke baad activity suddenly kam ho jaaye to calories burn nahi hoti lekin intake same rehti hai — slow aur steady weight gain hota hai. Body muscle bhi lose karne lagti hai jo metabolism aur slow kar deta hai.',
      howToIdentify: 'Steps ya activity clearly kam ho gayi hai pichle kuch mahino mein. Wajan dheere dheere par consistently badh raha hai.',
    },
    {
      _key: 'lc4',
      causeName: 'Chronic Stress — Cortisol Se Fat Storage',
      mechanism: 'Long-term stress mein cortisol continuously high rehta hai. Cortisol body ko signal deta hai fat store karo — specifically abdomen mein. Ye evolutionarily "survival mode" hai. Isliye bahut stressed log khana zyada nahi khate phir bhi pet ka mota hota jaata hai.',
      howToIdentify: 'Weight specifically belly area mein badh raha hai. Stress clearly zyada hai — job, family, financial. Weight gain ke saath neend bhi disturb hai.',
    },
  ],

  medicalCauses: [
    {
      _key: 'mc1',
      diseaseName: 'Hypothyroidism (Thyroid)',
      diseaseHindiName: 'Thyroid Ki Kami',
      howSymptomPresents: 'Thyroid hormone kam hone se metabolism directly slow hota hai — body kam calories burn karti hai. Weight gain ke saath thakaan, constipation (kabz), skin dry, baal jharna, sardi zyada lagna — ye sab saath aate hain. Ye India mein weight gain ka sabse common overlooked medical cause hai.',
      howToIdentify: 'Weight gain + thakaan + baal jharna + sardi zyada — in teeno ka combination ho to TSH test first step hai.',
      homeopediaSlug: 'thyroid',
      isAvailable: true,
    },
    {
      _key: 'mc2',
      diseaseName: 'PCOD / PCOS',
      diseaseHindiName: 'Poly Cystic Ovary Disease',
      howSymptomPresents: 'PCOD mein insulin resistance hoti hai — body cells glucose absorb nahi kar paate, to pancreas zyada insulin banata hai. Ye extra insulin fat storage promote karta hai, specifically belly aur hips pe. Irregular periods, facial hair, acne — ye saath mein aa sakte hain.',
      howToIdentify: 'Mahila hai, periods irregular hain ya heavy hain, weight specifically pet aur kamar pe badha hai. Ultrasound mein cysts dikh sakti hain.',
      homeopediaSlug: 'pcod',
      isAvailable: true,
    },
    {
      _key: 'mc3',
      diseaseName: 'Obesity',
      diseaseHindiName: 'Mota Hona / Sthoolata',
      howSymptomPresents: 'Jab weight long time ke liye high rehta hai aur BMI 30+ ho jaata hai to ye officially obesity maani jaati hai. Is stage pe weight khud ek condition ban jaata hai — aur diabetes, heart disease, joint pain ka risk kaafi badh jaata hai. Sirf diet se manage mushkil hone lagta hai.',
      howToIdentify: 'Weight consistently high hai, BMI 30+, ya doctor ne specifically obesity mention kiya ho.',
      homeopediaSlug: '',
      isAvailable: false,
    },
    {
      _key: 'mc4',
      diseaseName: 'Hormonal Imbalance',
      diseaseHindiName: 'Hormonal Asantulan',
      howSymptomPresents: 'Sirf thyroid aur PCOD ke alawa bhi hormonal imbalance weight gain ka cause ho sakti hai — estrogen dominance, low progesterone, high cortisol, ya insulin resistance. Ye sab ek doosre ko affect karte hain aur weight gain ka "no reason" feeling produce karte hain.',
      howToIdentify: 'Weight gain ke saath mood swings, irregular periods, acne, ya excessive fatigue — aur thyroid test normal hai. Comprehensive hormone panel zaroori.',
      homeopediaSlug: '',
      isAvailable: false,
    },
  ],

  redFlags: [
    'Rapid unexplained weight gain (2 kg+ in 1 week bina diet change ke) — especially agar pair aur ankh ke neeche bhi sujan ho — kidney ya heart condition possible, turant milein.',
    'Pregnancy mein sudden weight gain + headache + vision changes — preeclampsia ka sign ho sakta hai, ye obstetric emergency hai.',
    'Weight gain ke saath extreme thirst, frequent urination, aur wounds theek nahi ho rahe — diabetes hone ki possibility, turant blood sugar test.',
    'Medication ki wajah se weight gain (steroids, antidepressants, birth control) — apne doctor se discuss karo ki alternative possible hai ya nahi — band mat karo khud se.',
  ],

  homeSteps: [
    {
      _key: 'hs1',
      action: 'Pehle Reason Dhundho — Sirf Diet Crash Mat Karo',
      whyItWorks: 'Agar weight gain medical cause se hai (thyroid, PCOD) to sirf diet restriction kaam nahi karegi — aur body aur stress mein aa jaayegi. Ek basic test panel (TSH, blood sugar, hormones) se pata chalta hai ki kaun sa approach sahi hai. Ye ek hafte ka kaam hai aur sab kuch clear ho jaata hai.',
    },
    {
      _key: 'hs2',
      action: 'Neend Sahi Karo — Minimum 7-8 Ghante',
      whyItWorks: 'Neend directly hunger hormones (ghrelin aur leptin) control karti hai. Kum neend mein cravings badh jaate hain — specifically sweet aur fatty food ke liye. Agar neend fix ho jaaye to hunger naturally control hoti hai bina kisi diet ke. Raat 10-11 ke beech sone ki koshish karo.',
    },
    {
      _key: 'hs3',
      action: 'Namak Aur Processed Food Kam Karo — Temporarily',
      whyItWorks: 'Zyada namak water retention badhata hai — ek din mein 1-2 kg easily "water weight" add ho sakta hai. 3-5 din ke liye ghara ka saada khana khao, namak kam karo — aur agar weight kuch ghatta hai to confirm ho jaata hai ki significant portion water retention tha, fat nahi.',
    },
    {
      _key: 'hs4',
      action: '20-30 Min Daily Walk — Insulin Sensitivity Ke Liye',
      whyItWorks: 'Walk karna muscle cells ko glucose absorb karne mein help karta hai — insulin resistance kam hoti hai. Ye specifically PCOD aur pre-diabetes wale weight gain mein kaafi effective hai. Gym ya intense workout zaruri nahi — regular light walk se bhi significant fark padta hai.',
    },
    {
      _key: 'hs5',
      action: 'Stress Aur Cortisol Address Karo',
      whyItWorks: 'Agar weight specifically belly pe badh raha hai aur stress high hai — cortisol management kaafi help karta hai. Roz 10-15 min deep breathing, walk, ya koi bhi enjoyable activity karo. Cortisol kam hone se belly fat storage slower hota hai.',
    },
  ],

  homeopathyIndividualization: `"Wajan badhna" ek symptom hai — lekin iska matlab har patient mein bilkul alag hota hai. Kisi mein thyroid se hai, kisi mein PCOD se, kisi mein stress se, kisi mein sirf lifestyle se. Homeopathy mein treatment decide karne ke liye sirf "weight gain" nahi dekha jaata — kab badha, kahan badha (belly, hips, face), saath kya aaya (thakaan, mood, periods), aur overall body ka constitution — ye sab milake picture banti hai. Isliye ek hi chief complaint hone ke bawajood do patients ka treatment bilkul alag ho sakta hai.`,

  homeopathyRootCause: `Weight gain ka root cause agar hormonal hai (thyroid, PCOD, cortisol) — to homeopathy us underlying hormonal dysregulation ko address karne ki koshish karti hai, sirf weight ko suppress nahi. Waqt ke saath, jab root cause address hoti hai, weight naturally better direction mein jaata hai — lekin ye gradual process hai aur results individual hote hain.\n\nNote: Severe obesity ya medical conditions mein homeopathy conventional treatment ke replacement ke roop mein nahi — complementary ke roop mein use hoti hai. Nutritionist aur doctor ke saath milake plan banana best approach hai.`,

  homeopathySafety: `Homeopathic medicines weight gain ke liye safe hain — koi known side effects ya drug interactions nahi. Pregnancy mein bhi use ki ja sakti hain. Lekin khud se koi bhi medicine lene se pehle doctor se consult karo — kyunki sahi medicine tabhi kaam karti hai jab poora symptom pattern match ho. Self-prescription se koi nuksan to nahi, lekin benefit bhi limited hoga.`,

  isForYouIf: [
    'Aapka weight gain hormonal ya lifestyle se linked hai aur aap root cause address karna chahte hain',
    'Aap already conventional treatment le rahe hain (thyroid, PCOD) lekin saath mein safe complementary support chahiye',
    'Side-effect free, gentle approach chahiye — specially pregnancy ya adolescence mein',
  ],

  notForYouIf: [
    'BMI 35+ hai aur diabetes ya heart disease already hai — medical intervention pehle, complementary baad mein',
    'Aap sirf 1-2 hafte mein result chahte hain — hormonal weight gain time-based process hai',
    'Koi underlying condition diagnose nahi hui — pehle testing, phir treatment plan',
  ],

  homeopathyDiseaseLinks: [
    { _key: 'hdl1', diseaseName: 'Hypothyroidism (Thyroid) ka poora ilaaj', diseaseSlug: 'thyroid' },
    { _key: 'hdl2', diseaseName: 'PCOD / PCOS ka poora ilaaj',              diseaseSlug: 'pcod'   },
  ],

  linkedDiseaseCards: [
    { _key: 'ldc1', title: 'Thyroid (Hypothyroidism)', hindiName: 'Thyroid Ki Kami',         slug: 'thyroid',            isAvailable: true  },
    { _key: 'ldc2', title: 'PCOD / PCOS',              hindiName: 'Poly Cystic Ovary Disease', slug: 'pcod',              isAvailable: true  },
    { _key: 'ldc3', title: 'Obesity',                  hindiName: 'Sthoolata / Mota Hona',    slug: '',                   isAvailable: false },
    { _key: 'ldc4', title: 'Hormonal Imbalance',       hindiName: 'Hormonal Asantulan',       slug: '',                   isAvailable: false },
  ],

  faqs: [
    {
      _key: 'faq1',
      faqType: 'common-cause',
      question: 'Weight gain ke kya karan hote hain?',
      answer: `Weight gain ke causes dono simple aur complex ho sakte hain:\n\nLifestyle causes:\n- Zyada calorie intake + kam physical activity\n- Neend ki kami — hunger hormones disrupt hoti hain\n- Chronic stress — cortisol se fat storage\n- Processed food mein hidden calories aur namak\n\nMedical causes:\n- Hypothyroidism — metabolism slow hona\n- PCOD — insulin resistance se fat storage\n- Hormonal imbalance — estrogen, cortisol disruption\n- Certain medications — steroids, antidepressants, birth control\n\nImportant: Agar diet aur activity change nahi ki aur phir bhi wajan badha — to medical cause check karna zaroori hai, sirf diet restrict mat karo.`,
    },
    {
      _key: 'faq2',
      faqType: 'common-cause',
      question: 'Mahilaon mein weight gain ke kya karan hote hain?',
      answer: `Mahilaon mein weight gain ke specific causes hain jo mardon se alag hote hain:\n\n1. PCOD/PCOS — insulin resistance se fat storage, specifically belly aur hips pe. India mein 10-15% mahilaon mein hota hai.\n2. Thyroid — mahilaon mein thyroid problems 8x zyada common hain. Metabolism slow hone se weight badhta hai.\n3. Periods — har month cycle ke dauraan 1-3 kg water retention normal hai — fat nahi.\n4. Menopause aur perimenopause — estrogen drop se metabolism slow aur belly fat zyada\n5. Post-delivery — hormones normalize hone mein 6-12 mahine lagte hain, weight gain is period mein normal hai\n\nKisi bhi unexplained weight gain mein mahilaon ko specifically TSH + pelvic ultrasound + hormone panel check karwana chahiye.`,
    },
    {
      _key: 'faq3',
      faqType: 'common-cause',
      question: 'Thyroid mein weight gain kyun hota hai?',
      answer: `Hypothyroidism (underactive thyroid) mein thyroid hormone (T3/T4) ki kami ho jaati hai — aur ye hormones directly metabolism control karte hain.\n\nJab T3/T4 kam ho:\n- Body ki calorie burning capacity slow ho jaati hai\n- Fat cells mein fat storage zyada hoti hai\n- Water retention bhi hoti hai — isliye chehra aur haath-pair bhi puffy lagte hain\n- Activity level drop hota hai kyunki thakaan rehti hai — aur kam movement se aur calories kam burn\n\nResult: Same diet pe bhi weight badhna shuru ho jaata hai — aur log sochte hain "zyada kha raha hoon" lekin actually thyroid slow ho rahi hai.\n\nSolution: TSH test karwao. Agar thyroid issue confirm ho to treatment se metabolism wapis normal hota hai aur weight stabilize hone lagta hai.`,
    },
    {
      _key: 'faq4',
      faqType: 'pregnancy',
      question: 'Pregnancy mein weight gain kitna normal hai?',
      answer: `Pregnancy mein weight gain expected aur zaroori hota hai — baby, placenta, amniotic fluid, extra blood — sab kuch weight add karta hai.\n\nNormal weight gain guidelines:\n- Normal weight (BMI 18.5-24.9): 11-16 kg total\n- Overweight (BMI 25-29.9): 7-11 kg total\n- Obese (BMI 30+): 5-9 kg total\n- Twins: thoda zyada expected hai\n\nKab concerned hon:\n- 1 hafte mein 1 kg se zyada suddenly badhe — especially teesre trimester mein\n- Pair aur chehra zyada swollen ho\n- Headache + vision problems ke saath weight gain\n\nYe preeclampsia ke signs ho sakte hain — immediately apne obstetrician se milein.\n\nNote: Pregnancy mein diet restriction mat karo — pehle doctor se poochein ki weight target kya hona chahiye.`,
    },
    {
      _key: 'faq5',
      faqType: 'common-cause',
      question: 'PCOS mein weight gain kyun hota hai?',
      answer: `PCOS/PCOD mein insulin resistance ek central problem hai — body ke cells insulin ko theek se use nahi kar paate.\n\nIs process mein:\n1. Blood mein glucose zyada rehta hai kyunki cells absorb nahi karte\n2. Pancreas zyada insulin banata hai — compensate karne ke liye\n3. Ye extra insulin fat cells ko fat store karne ka signal deta hai — specifically belly aur hips pe\n4. Androgens (male hormones) bhi zyada hote hain PCOS mein — ye bhi abdominal fat badhate hain\n\nIsliye PCOS mein weight gain "apple shape" mein hota hai — belly pe zyada. Aur sirf diet se kam karna mushkil hota hai kyunki root cause insulin resistance hai.\n\nEffective approach: Low glycemic index diet + regular walk (insulin sensitivity badhti hai) + doctor-supervised treatment.`,
    },
    {
      _key: 'faq6',
      faqType: 'common-cause',
      question: 'Hypothyroidism mein weight gain ke saath kya symptoms aate hain?',
      answer: `Hypothyroidism ka weight gain akela nahi aata — ye ek complete picture ka hissa hota hai:\n\nCommon saath ke symptoms:\n- Thakaan jo raat bhar sone ke baad bhi nahi jaati\n- Sardi bahut zyada lagti hai — others ke comparison mein\n- Constipation (kabz) jo regularly hoti hai\n- Baal bahut jhadna — especially brushing karte waqt\n- Skin dry aur rough hona\n- Chehra aur haathon mein puffiness\n- Depression ya mood low rehna\n- Periods irregular ya heavy hona (mahilaon mein)\n\nAgar ye pattern hai — TSH blood test karwao. Ye pehla aur sabse zaroori step hai. Normal range confirm ho lekin symptoms hon to Free T3 aur antibodies bhi test karwao.`,
    },
    {
      _key: 'faq7',
      faqType: 'common-cause',
      question: 'Achanak bahut tezi se wajan badh jaaye to kya karna chahiye?',
      answer: `Agar 1-2 hafte mein 3 kg+ tezi se badha hai — ye almost kabhi bhi sirf fat nahi hota. Itni tezi se fat accumulate nahi hota.\n\nTezi se weight gain ke likely causes:\n1. Water retention — kidney, heart, ya liver issue se\n2. Medication change — steroids khaas taur pe\n3. Thyroid suddenly worse hona\n4. Pregnancy\n5. Adrenal disorder (rare)\n\nKya karo:\n- Paani zyada piyo — agar water retention hai to paradoxically help karta hai\n- Namak bilkul kam karo 3-4 din\n- Dekho ki koi nai medication start ki hai recently\n- Agar sujan bhi hai (haath, pair, chehra) — is hafte doctor se milein, wait mat karo\n- Pregnancy test karo agar applicable ho`,
    },
    {
      _key: 'faq8',
      faqType: 'common-cause',
      question: 'Bina zyada khaye weight kyun badh jaata hai?',
      answer: `"Main zyada nahi khata phir bhi wajan badh raha hai" — ye real experience hai, imagination nahi. Kai medical aur biological reasons hain:\n\n1. Thyroid slow hai — same khane pe kam calories burn hoti hain\n2. Insulin resistance (PCOS, pre-diabetes) — glucose fat mein convert zyada hota hai\n3. Cortisol high hai (stress) — fat storage badhta hai, especially belly\n4. Medications — steroids, certain antidepressants, birth control pills\n5. Water retention — ye fat nahi lekin scale pe dikha deta hai\n6. Muscle loss — gym chhodne ya inactivity se muscle ghatti hai, fat badhta hai — weight same dikh sakta hai lekin composition badal jaata hai\n\nSolution: Pehle medical workup — thyroid, blood sugar, hormones. Agar sab normal ho to registered nutritionist se detailed diet assessment — kyunki "thoda khana" perception aur actual intake mein often gap hoti hai.`,
    },
    {
      _key: 'faq9',
      faqType: 'common-cause',
      question: 'Delivery ke baad weight gain normal hai kya?',
      answer: `Delivery ke baad 6-8 kg tak weight reh jaana bilkul normal hai — body ko recover karne mein time lagta hai.\n\nNormal timeline:\n- Pehle 1-3 mahine: Hormones drastically fluctuate karte hain, weight stable nahi rehta — ye normal hai\n- 3-6 mahine: Breastfeeding se naturally calories burn hoti hain — weight dheere dheere ghatta hai\n- 6-12 mahine: Most women pre-pregnancy weight pe wapis aa jaati hain — agar thyroid aur diet theek hai\n\nKab concern ho:\n- 6 mahine ke baad bhi weight ghatt nahi raha — thyroid check karwao, post-delivery hypothyroidism common hai\n- Weight tezi se badh raha hai after delivery — cortisol ya thyroid issue\n- Breastfeeding ho, neend bilkul nahi, stress bahut zyada — ye sab weight hold karne ke factors hain\n\nRush mat karo — body ke paas waqt do. Crash diet post-delivery harmful hai.`,
    },
    {
      _key: 'faq10',
      faqType: 'ghar-pe-wait',
      question: 'Kya main ghar pe hi weight gain control kar sakta/sakti hoon?',
      answer: `Haan — agar cause lifestyle-based hai. Lekin pehle confirm karo ki medical cause to nahi hai.\n\nGhar pe kya karo:\n- Neend fix karo — 7-8 ghante, same time pe\n- Processed food aur bahar ka khana 2-3 hafte ke liye kam karo\n- Roz 20-30 min walk\n- Stress management — breathing exercises, koi enjoyable activity\n- Paani — din mein 8-10 glass\n\nKya nahi karna:\n- Crash diet — 1000 calories se kam mat jao\n- Khud se weight loss supplements\n- Extreme fasting — specially agar hormonal issue hai\n\nAgar 4-6 hafte ke lifestyle changes ke baad bhi weight nahi ghatt raha — doctor se milein aur basic tests karwayein. Ye self-neglect nahi hai — ye smart approach hai.`,
    },
    {
      _key: 'faq11',
      faqType: 'homeopathy',
      question: 'Kya homeopathy weight gain mein kaam karti hai?',
      answer: `Homeopathy weight gain mein seedha weight loss nahi karti — lekin underlying cause address karke weight stabilize karne mein help kar sakti hai.\n\nKaise kaam karti hai:\n- Agar thyroid ya hormonal imbalance se weight gain hai — constitutional homeopathy hormonal regulation support karne ki koshish karti hai\n- Agar emotional eating ya stress-driven gain hai — nervine aur anti-anxiety remedies help karte hain\n- Agar PCOS se linked hai — hormonal pattern ke hisaab se individualized treatment\n\nRealistic expectations:\n- Homeopathy weight loss ka "shortcut" nahi hai\n- Results slow aur gradual hain — 3-6 mahine mein difference feel ho sakta hai\n- Sirf tab kaam karti hai jab cause identify ho aur complete symptom picture match ho\n- Diet aur lifestyle changes ke saath complementary taur pe best results milte hain`,
    },
    {
      _key: 'faq12',
      faqType: 'test-diagnosis',
      question: 'Weight gain ke liye kaunsa test karwana chahiye?',
      answer: `Agar weight bina wajah ke badh raha hai to ye basic panel karwao:\n\nFirst line (sab ko):\n- TSH — thyroid check\n- Fasting blood glucose + HbA1c — diabetes/pre-diabetes\n- CBC (Complete Blood Count) — anemia ya infection\n\nMahilaon ke liye add karo:\n- Pelvic ultrasound — PCOS check\n- LH, FSH, Estradiol, AMH — hormonal panel\n- Testosterone (total + free)\n\nAgar cortisol/adrenal suspect ho:\n- 24-hour urinary cortisol ya morning serum cortisol\n\nAgar sab normal aaye:\n- Thyroid antibodies — subclinical Hashimoto's\n- Insulin fasting + 2-hour post meal — insulin resistance\n\nYe tests kisi bhi pathlab mein hote hain. Doctor se referral ke bagair bhi basic panel karwa sakte hain.`,
    },
    {
      _key: 'faq13',
      faqType: 'normal-vs-serious',
      question: 'Wajan badhna kab serious hota hai aur doctor se kab milein?',
      answer: `Immediately milein agar:\n- 1 hafte mein 2 kg+ tezi se badha aur sujan bhi ho\n- Saans phool rahi ho ke saath weight gain\n- Pregnancy mein sudden weight gain + headache\n- Chest mein dard ya pressure ke saath\n\nIs hafte milein agar:\n- 1 mahine mein 3 kg+ bina diet change ke\n- Weight gain ke saath thakaan + baal jharna + sardi — thyroid check\n- Periods irregular aur belly fat zyada — PCOS check\n- Koi nai medication start ki hai jo weight badha rahi ho\n\nObserve karo (2-4 hafte):\n- Festival ya travel ke baad 1-2 kg badha\n- Periods aane se pehle thodi puffiness\n- Nai desk job shuru ki aur activity clearly kam ho gayi`,
    },
  ],

  relatedSymptoms: [
    { _key: 'rs1', name: 'Hair Fall',         hindiName: 'Baal Jharna',          slug: 'hair-fall'        },
    { _key: 'rs2', name: 'Thyroid Symptoms',  hindiName: 'Thyroid Ke Lakshan',   slug: 'thyroid-symptoms' },
    { _key: 'rs3', name: 'Fatigue',           hindiName: 'Bahut Zyada Thakaan',  slug: 'fatigue'          },
    { _key: 'rs4', name: 'Irregular Periods', hindiName: 'Maasik Dharm Garbad',  slug: 'irregular-periods'},
  ],

  sources: [
    { _key: 's1', name: 'ICMR — India Diabetes & Obesity Study 2023',              year: '2023', url: 'https://www.icmr.gov.in/' },
    { _key: 's2', name: 'Mayo Clinic — Weight Gain: Causes and Concerns',          year: '2024', url: 'https://www.mayoclinic.org/symptoms/unexplained-weight-gain/basics/causes/sym-20050700' },
    { _key: 's3', name: 'NHS UK — Unintentional Weight Gain',                      year: '2023', url: 'https://www.nhs.uk/conditions/unintentional-weight-gain/' },
    { _key: 's4', name: 'NCBI — PCOS and Insulin Resistance: A Review',            year: '2022', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],

  quickFactSymptom: 'Weight gain ka sirf 30% cases mein actual fat badhna hota hai — baaki mein water retention, muscle loss, ya hormonal changes involved hoti hain.',
  quickFactIndiaStats: 'India mein 13.5 crore log overweight ya obese category mein hain — aur 60%+ cases mein thyroid ya hormonal cause unchecked rehta hai.',
  quickFactDoctorWhen: 'Bina diet change ke 1 mahine mein 3 kg+ weight gain — TSH test first step hai.',
  reviewDate: 'May 2026',

  doctorNote: 'Meri practice mein weight gain ke jitne bhi patients aate hain, unme se adhiktar ka pehla complaint yahi hota hai — "main zyada nahi khata phir bhi wajan badh raha hai." Aur aksar diagnosis mein years lag jaate hain kyunki thyroid ya PCOS ka simple test start mein nahi kiya jaata. Main hamesha kehta hoon: pehle testing, phir treatment. Ghar pe diet restrict karna ya gym jaana — ye sab baad mein. Ek simple TSH test kai baar sab kuch clear kar deta hai.',
}

async function seed() {
  console.log('🌱 Seeding Weight Gain symptom page...')
  await client.createOrReplace(doc)
  console.log('✅ Symptom seeded — homeopedia.in/symptoms/weight-gain')
}

seed().catch(console.error)
