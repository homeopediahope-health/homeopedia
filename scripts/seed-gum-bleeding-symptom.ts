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
  _id: 'symptom-gum-bleeding',
  _type: 'symptom',
  title: 'Gum Bleeding (Masedon Se Khoon Aana)',
  hindiName: 'Masedon Se Khoon Aana',
  slug: { _type: 'slug', current: 'gum-bleeding' },
  bodySystem: 'ENT',
  shortDescription: 'Masedon se khoon aana — brush karne pe ya khud se — gingivitis, vitamin deficiency ya kisi deeper bimari ka sign ho sakta hai.',
  metaTitle: 'Gum Bleeding in Hindi — Karan, Ilaaj aur Homeopathy',
  metaDescription: 'Masedon se khoon aana (gum bleeding) ke karan, severity aur ghar pe safe steps — simple Hinglish mein. Verified info, doctor-reviewed.',
  isAvailable: true,
  reviewDate: 'May 2026',

  heroText: `Toothbrush pe laal rang dikha — ya khaana khaate waqt muh mein namkeen sa swad aaya — aur aapne socha, "ye toh sirf brush karne ki wajah se hai." Kabhi kabhi sach mein wahi hota hai. Lekin baar baar gum bleeding hona — ya bina kisi wajah ke achanak khoon aana — iska matlab aksar kuch aur hota hai.

Masedon se khoon aana India mein bohot common complaint hai — aur zyada log isko ignore karte rehte hain jab tak baat zyada badh nahi jaati.

Ye page aapko 2 minute mein batayega: ghar pe rukein ya dentist ke paas jaayein — aur kab ye bilkul bhi wait karne wali baat nahi hai.

WHO ke data ke mutabik, duniya bhar mein adults ki ek badi tadaad mein kisi na kisi form ki gum disease hoti hai — aur India mein poor oral hygiene aur vitamin deficiency is problem ko aur bhi common banate hain.`,

  severityScale: {
    level1: {
      label: 'Ghar Pe Manage Karo',
      signs: [
        'Brush karte waqt thodi si bleeding — sirf ek do baar',
        'Masedon mein halki sujan — koi dard nahi',
        'Floss karne pe pehli baar bleeding — technique issue ho sakta hai',
        'Koi naya toothbrush shuru kiya — thodi si irritation normal hai',
      ],
    },
    level2: {
      label: 'Is Hafte Dentist Se Milein',
      signs: [
        'Roz brush karne pe bleeding ho rahi hai — 1 hafte se zyada ho gaya',
        'Muh mein halka dard ya maseda phula hua feel ho raha hai saath mein',
        'Daant dheele lagte hain thoda sa',
        'Muh se badbu aa rahi hai jo brush karne ke baad bhi nahi jaati',
        'Pregnancy mein masedon se baar baar khoon aa raha hai',
      ],
    },
    level3: {
      label: 'Turant Doctor / Hospital Jaao',
      signs: [
        'Muh se itna khoon aa raha hai ki band nahi ho raha 10-15 minute mein',
        'Saath mein bukhaar bhi hai aur muh mein sujan hai',
        'Dengue ya koi aur bimari chal rahi hai aur gum bleeding badh gayi hai',
        'Poore sharir mein jagah jagah khoon aana — gum sirf ek jagah hai — ye blood disorder ka sign ho sakta hai',
      ],
    },
  },

  timeline: [
    {
      duration: '1 Se 3 Din',
      label: 'Nayi Takleef',
      description: 'Abhi abhi naya toothbrush liya, ya dentist ke paas scaling karwai, ya flossing shuru ki — toh thoda khoon aana normal hai. Masedon ko nai cheez ki aadat padne mein kuch din lagte hain. Agar teen din mein better ho jaye toh ghabrane ki zarurat nahi. Agar teen din baad bhi hai — Level 2 dekho.',
    },
    {
      duration: '1 Se 4 Hafte',
      label: 'Chalti Aa Rahi',
      description: 'Har roz brush karte waqt ya khaana khaate waqt khoon aana — aur ye 1 hafte se zyada ho gaya hai — to ab ye "normal" nahi hai. Ye gingivitis (masedon ki sujan aur infection) ka signal ho sakta hai. Is hafte dentist se milna chahiye. Homeopathy is stage pe achha kaam kar sakti hai underlying sensitivity address karne mein.',
    },
    {
      duration: '1 Mahina Ya Zyada',
      label: 'Purani Problem',
      description: 'Ek mahine se zyada time se gum bleeding ho rahi hai — chahe roz ho ya kabhi kabhi — to ab ye chronic condition hai. Periodontitis (gehri gum disease) ya koi systemic cause possible hai. Dentist + general physician dono se milna chahiye. Delay karne se daant loosening ka risk badh jaata hai.',
    },
  ],

  lifestyleCauses: [
    {
      title: 'Galat Brushing Technique',
      description: 'Bahut zyada pressure se brush karna ya hard bristle brush use karna — masede ki upar ki soft skin (gingival tissue) ko physically injure karta hai. Har baar brush karne pe ye tissue damage hoti hai aur khoon niklta hai.',
      recognition: 'Brush karte waqt immediately khoon aata hai — aur sirf brushing ke time. Baki waqt koi problem nahi.',
    },
    {
      title: 'Plaque Aur Tartar Buildup',
      description: 'Roz theek se brush ya floss na karne se danton ke beech aur gum line pe bacteria ka layer jam jaata hai. Ye bacteria toxins release karte hain jo masedon ko irritate aur inflame karte hain. Swollen masedon se brush touching pe bhi khoon niklta hai.',
      recognition: 'Daanton ke beech ya gum line ke paas yellowish ya brownish deposit dikh raha ho. Muh se badbu. Masedon ka color dark pink ya laal.',
    },
    {
      title: 'Vitamin C Ki Kami (Scurvy)',
      description: 'Vitamin C blood vessel walls ko strong rakhne mein help karta hai. Jab ye vitamin kam hoti hai — gum ke andar ki chhoti blood vessels fragile ho jaati hain aur thodi si pressure pe bhi toot jaati hain.',
      recognition: 'Gum bleeding ke saath saath skin pe bhi chhote laal dabbe dikhein, thakaan zyada ho, ya zakhm jaldi na bharte hon.',
    },
    {
      title: 'Vitamin K Ki Kami',
      description: 'Vitamin K blood clotting ke liye zaroori hai. Iske bina khoon band hone mein zyada waqt lagta hai — toh chhoti si injury pe bhi masedon se khoon zyada ya zyada der tak aata hai.',
      recognition: 'Sirf gum se nahi — chhoti si chot pe bhi khoon zyada nikalta ho. Ya recently antibiotics liye hon jo gut bacteria affect karte hain.',
    },
  ],

  medicalCauses: [
    {
      diseaseName: 'Gingivitis',
      diseaseHindiName: 'Masedon Ki Sujan',
      mechanism: 'Gingivitis gum bleeding ka sabse common medical cause hai. Masedon ki lining inflamed ho jaati hai — brush touch karte hi ya khana khaate waqt khoon aata hai. Masede thode phule aur tender lagte hain.',
      recognition: 'Bleeding ke saath masede laal aur phule dikh raha ho. Koi severe dard nahi hota is stage mein.',
    },
    {
      diseaseName: 'Periodontitis',
      diseaseHindiName: 'Danton Ki Gehri Bimari',
      mechanism: 'Gingivitis agar treat na ki jaye to periodontitis ban jaati hai — jahan infection daant ki jad aur haddiyein affect karne lagti hai. Bleeding zyada frequent hoti hai, aur daant dheele hone lagte hain.',
      recognition: 'Gum bleeding + daanton ka dheelaaapan + masede gum line se neechey "retreat" karte dikh rahe hon (daant bade lagte hain).',
    },
    {
      diseaseName: 'Diabetes Mellitus',
      diseaseHindiName: 'Madhumeh / Sugar',
      mechanism: 'Uncontrolled diabetes mein body ka infection se ladne ka system kamzor ho jaata hai. Gum infections zyada ho jaati hain, zyada baar baar aati hain, aur theek hone mein waqt zyada lagta hai. Diabetic patients mein gum disease fast progress karti hai.',
      recognition: 'Baar baar gum problems + baar baar mouth ulcers + sugar history ya thakaan + zyada pyas — to sugar test zaroor karwayein.',
    },
    {
      diseaseName: 'Pregnancy Gingivitis',
      diseaseHindiName: 'Pregnancy Mein Masedon Ki Sujan',
      mechanism: 'Pregnancy mein hormones — specially progesterone — gum tissue ko plaque ke bacteria ke liye zyada sensitive bana dete hain. Teesre aur chauthe mahine mein gum bleeding sabse zyada hoti hai. Severe gum disease preterm birth se linked hai.',
      recognition: 'Pregnancy mein hai + gum bleeding pehle nahi hoti thi + masedon mein sujan. Doctor se zaroor batayein — ignore mat karein.',
    },
    {
      diseaseName: 'Blood Disorders (Thrombocytopenia, Dengue, Leukemia)',
      diseaseHindiName: 'Khoon Ki Bimariyan',
      mechanism: 'Platelets (khoon band karne wale cells) kam hone pe — chahe dengue se ho, ya kisi aur wajah se — chhoti si jagah se bhi bleeding zyada aur zyada der tak hoti hai. Gum bleeding in conditions mein ek early warning sign hai.',
      recognition: 'Gum bleeding ke saath skin pe laal ya neele dabbe, naak se khoon, bohot thakaan — ye sab serious signs hain. Turant doctor.',
    },
  ],

  redFlags: [
    'Blood Clotting Disorder — agar gum se khoon 15-20 minute mein band na ho, ya bina wajah ke achanak khoon aaye to turant hematologist se milein.',
    'Dengue ya Viral Fever — agar bukhaar chal raha ho saath mein aur gum bleeding ho rahi ho, to ye platelet count low hone ka sign ho sakta hai — turant blood test aur hospital.',
    'Oral Cancer (Munh Ka Cancer) — agar muh mein koi non-healing sore ya growth hai saath mein — bleeding ke saath — to ek baar dentist ya ENT se zaroor dikhaayein.',
  ],

  homeSteps: [
    {
      step: 'Brushing Technique Sudharo',
      reason: 'Soft bristle brush lein aur gum line pe circular, gentle motion use karein — sawing motion nahi. Masede ki soft tissue ko time chahiye heal hone ka.',
    },
    {
      step: 'Saline Rinse (Namak Ka Pani)',
      reason: 'Ek glass gungune paani mein adha chammach namak milakar gargle karein — subah aur raat. Salt mein natural antibacterial properties hain jo gum inflammation kam karne mein help karte hain.',
    },
    {
      step: 'Thanda Compress (Agar Sujan Ho)',
      reason: 'Agar masede bahut phule aur tender hain to bahar se gaaal pe thanda kapda ya ice pack (cloth mein wrap karke) rakhein — 10 minute. Cold blood vessels ko thoda contract karta hai aur sujan kam karta hai.',
    },
    {
      step: 'Flossing Mat Chhadein — Lekin Dhyaan Se Karein',
      reason: 'Gum bleeding shuru hoti hai to log flossing band kar dete hain — ye galat hai. Flossing se plaque nikalta hai jo root cause hai. Bas bahut gently karein — "C" shape mein daant ke saath saath niche slide karein.',
    },
    {
      step: 'Zyada Pani Piyo — Muh Sukha Mat Rakho',
      reason: 'Dry mouth mein bacteria faster multiply karte hain. Pani peene se saliva production maintain hoti hai jo natural antibacterial mechanism hai muh ka.',
    },
  ],

  homeopathyAngle1: 'Gum bleeding ka naam ek hai — lekin wajah har insaan mein alag hoti hai. Kisi ki bleeding sirf brushing pe hoti hai, kisi ki bina wajah ke. Kisi ko pain hai, kisi ko sirf khoon. Kisi ki bimari plaque se hai, kisi ki vitamin deficiency se, kisi ki diabetes se. Homeopathy mein sirf "gum bleeding" nahi dekha jaata — aapka gum bleeding kaisa hai, kab badhta hai, saath mein aur kya hai, kitni der se hai — ye sab milaakar aapka specific treatment decide hota hai.',

  homeopathyAngle2: 'Baar baar aane wali gum bleeding aksar kisi deeper imbalance ka signal hoti hai — chahe wo immune system ki weakness ho, nutritional deficiency ho, ya systemic disease ka early sign. Homeopathy mein sirf masedon ki bleeding band karna goal nahi hota — jo cheez isko baar baar la rahi hai usse address kiya jaata hai. Waqt ke saath gum sensitivity bhi kam hoti hai aur overall oral health improve hoti hai. Research is area mein limited hai aur results individual hote hain.',

  homeopathyAngle3: 'Pregnancy mein jab bahut si medicines avoid karni hoti hain — gum disease ke liye homeopathy ek safe complementary option hai jo conventional dental treatment ke saath saath chal sakti hai. Bacchon mein bhi sensitive gum issues ke liye ye ek gentle approach hai.',

  homeopathyIsFor: [
    'Aap baar baar gum bleeding se pareshan hain aur root cause address karna chahte hain',
    'Pregnancy ya bacchon ke liye gentle, side-effect free option chahiye',
    'Gingivitis ke baad bhi sensitivity bani hui hai aur dental treatment ke saath complementary support chahiye',
  ],

  homeopathyNotFor: [
    'Gum se bleeding band hi nahi ho rahi — ye abhi emergency hai, pehle doctor jaayein',
    'Dengue ya blood disorder suspected hai — pehle specialist, homeopathy baad mein saath chala sakte hain',
    'Tartar buildup hai — wo sirf dentist ki scaling se hat sakta hai, koi bhi medicine se nahi',
  ],

  linkedDiseaseCards: [
    {
      diseaseName: 'Gingivitis',
      diseaseHindiName: 'Masedon Ki Sujan',
      diseaseSlug: '',
      isAvailable: false,
    },
    {
      diseaseName: 'Periodontitis',
      diseaseHindiName: 'Danton Ki Gehri Bimari',
      diseaseSlug: '',
      isAvailable: false,
    },
    {
      diseaseName: 'Diabetes Mellitus',
      diseaseHindiName: 'Madhumeh / Sugar',
      diseaseSlug: '',
      isAvailable: false,
    },
    {
      diseaseName: 'Pregnancy Gingivitis',
      diseaseHindiName: 'Pregnancy Mein Masede Ki Takleef',
      diseaseSlug: '',
      isAvailable: false,
    },
    {
      diseaseName: 'Blood Disorders (Dengue / Thrombocytopenia)',
      diseaseHindiName: 'Khoon Ki Bimariyan',
      diseaseSlug: '',
      isAvailable: false,
    },
  ],

  homeopathyDiseaseLinks: [
    { _type: 'reference', _ref: 'disease-mouth-ulcer' },
  ],

  faqs: [
    {
      question: 'Gum bleeding kab normal hoti hai aur kab doctor zaroori hai?',
      answer: 'Naya brush shuru kiya ho ya pehli baar flossing ki ho — aur sirf 2-3 din ho — tab thodi si bleeding normal hai. Lekin agar roz ho rahi hai, 1 hafte se zyada se, ya bina kisi wajah ke — tab ye normal nahi hai. Agar saath mein dard, sujan, daant dheela, bukhaar, ya skin pe dabbe ho — tab turant doctor chahiye.',
    },
    {
      question: 'Gum bleeding kitne din mein theek hoti hai?',
      answer: 'Ye completely wajah pe depend karta hai. Agar cause sirf galat brushing technique hai — to technique sudharne ke 1-2 hafte mein significant improvement aata hai. Gingivitis mein professional scaling ke baad aur sahi oral hygiene se 2-4 hafte mein better ho sakta hai. Agar cause deeper — diabetes, blood disorder, ya advanced periodontitis — to treatment longer aur specific hoga.',
    },
    {
      question: 'Gum bleeding ka sabse common karan kya hai?',
      answer: 'India mein gum bleeding ka sabse common karan hai plaque buildup — yani danton ki sahi safai na hona. Jab bacteria ka layer gum line ke paas jam jaata hai to wo toxins release karta hai jo masedon ko inflame kar dete hain. Inflamed masedon brush touching pe hi khoon chhod dete hain. Vitamin C ki kami bhi India mein ek common underdiagnosed cause hai — specially unbalanced diet mein.',
    },
    {
      question: 'Brush karte waqt gum se khoon kyun aata hai?',
      answer: 'Brush karte waqt gum se khoon aane ke teen main reasons hain: pehla — hard bristle brush ya bahut zyada pressure se brushing jo gum tissue ko physically injure karta hai. Doosra — inflamed gums (gingivitis) jo normal touch pe bhi sensitive hoti hain. Teesra — gum line pe plaque/tartar buildup jo irritation create karta hai. Pehle soft bristle brush try karein aur gentle circular motion use karein. Agar 1 hafte mein better nahi hua to dentist se milein.',
    },
    {
      question: 'Pregnancy mein gum bleeding normal hai kya?',
      answer: 'Pregnancy mein thodi si gum sensitivity aur occasional bleeding common hai — kyunki hormones gum tissue ko bacteria ke liye zyada sensitive bana dete hain. Isse "pregnancy gingivitis" kehte hain. Lekin isko ignore karna bilkul theek nahi hai — severe gum disease pregnancy complications se linked hai. Dentist ko zaroor batayein pregnancy ke baare mein — safe cleaning aur oral hygiene advice milegi. Koi bhi medicine apne aap mat lein.',
    },
    {
      question: 'Bacchon mein gum bleeding kyun hoti hai?',
      answer: 'Chote bacchon mein gum bleeding ka sabse common karan hai milk teeth se permanent teeth aane ka process — is transition mein masedon mein thodi sensitivity aur bleeding normal ho sakti hai. Doosra common cause hai brushing properly na karna — jo plaque accumulation karta hai. Vitamin C ki kami bhi bachpan mein dekhi jaati hai. Agar bachche ki gum se zyada khoon aa raha ho ya chabane mein dard ho — pediatric dentist se milna chahiye.',
    },
    {
      question: 'Gum bleeding mein kaunsa vitamin deficient hota hai?',
      answer: 'Gum bleeding se directly linked do main vitamins hain: Vitamin C — blood vessel walls ko strong rakhta hai, kami hone pe gum ki chhoti veins fragile ho jaati hain aur scurvy-related bleeding hoti hai. Vitamin K — blood clotting ke liye zaroori hai, kami mein khoon zyada der tak aata rehta hai. India mein Vitamin C deficiency common hai. Blood test se confirm kar sakte hain — lekin supplements lene se pehle doctor se zaroor confirm karein.',
    },
    {
      question: 'Kya gum bleeding dengue ka sign hai?',
      answer: 'Haan — dengue mein gum bleeding ek serious sign hai. Dengue platelet count bahut kam kar deta hai — isliye chhoti jagah se bhi khoon zyada aur zyada der tak aata hai. Agar aapko bukhaar hai — specially 2-7 din se — saath mein aankhon ke peeche dard, body ache, aur ab muh se khoon — ye medical emergency hai. Turant hospital jaao, ghar pe mat ruko.',
    },
    {
      question: 'Gum bleeding mein chai ya masala khana band karna chahiye?',
      answer: 'Kuch cheezein temporarily irritation badha sakti hain: bahut garam chai gum tissue ko directly irritate kar sakti hai, bahut masaledar khana already inflamed masedon mein aur irritation create karta hai, aur crunch wali cheezein gum pe direct pressure dalti hain. Ye temporarily avoid karna helpful hai — lekin ye treatment nahi hai. Root cause address kiye bina sirf khana change karne se bleeding permanently band nahi hogi.',
    },
    {
      question: 'Gum bleeding baar baar kyun aati hai?',
      answer: 'Baar baar gum bleeding ka matlab hai ki cause treat nahi hua — sirf symptom thoda thaka. Aksar: dentist se scaling karwayi, kuch week better raha, phir se shuru. Is pattern ka matlab hai ki oral hygiene routine strong nahi hai ya koi underlying systemic cause hai — jaise diabetes, vitamin deficiency, ya hormonal changes. Homeopathy is pattern ko todne mein madadgar ho sakti hai kyunki ye underlying sensitivity aur immune response address karta hai — lekin professional dental care ke saath milaakar.',
    },
    {
      question: 'Kya gum bleeding permanently theek ho sakti hai?',
      answer: '"Permanent cure" ka vaada koi bhi system honestly nahi kar sakta. Jo realistic hai: agar cause gingivitis ya galat oral hygiene hai — to proper treatment aur sahi brushing se bleeding completely band ho sakti hai aur reoccurrence bahut kam ho jaata hai. Agar cause diabetes ya koi systemic condition hai — to us condition ke control mein aane se gum health significantly improve hoti hai. Homeopathy mein overall oral sensitivity aur immune response pe kaam kiya jaata hai — results individual hote hain.',
    },
    {
      question: 'Gum bleeding mein kaunsa test karwana chahiye?',
      answer: 'Zyada cases mein sirf dentist ki clinical examination kaafi hoti hai. Lekin agar koi obvious local cause nahi milta to ye tests ho sakte hain: Complete Blood Count (CBC) — platelet count aur blood disorders check; Blood Sugar (Fasting + PP) — diabetes check; Vitamin C aur K levels — deficiency check; Coagulation tests (PT/INR) — blood clotting check. In tests ka suggestion doctor ya dentist denge — apne aap order mat karo.',
    },
  ],

  relatedSymptoms: [
    { _type: 'reference', _ref: 'symptom-mouth-ulcer' },
    { _type: 'reference', _ref: 'symptom-weakness-fatigue' },
    { _type: 'reference', _ref: 'symptom-headache' },
    { _type: 'reference', _ref: 'symptom-acidity' },
  ],

  quickFacts: [
    'Gum bleeding jo brush karne pe hoti hai aur 1 hafte se zyada se ho rahi hai — aksar gingivitis hai jo treatable hai.',
    'WHO ke mutabik gum disease adults mein sabse widespread oral condition hai globally — aur India mein yeh khaas taur pe common hai.',
    'Agar bleeding 15 minute mein band na ho, ya bukhaar ke saath ho — turant hospital.',
  ],

  sources: [
    { label: 'WHO — Oral Health Fact Sheet | 2023', url: 'https://www.who.int/news-room/fact-sheets/detail/oral-health' },
    { label: 'Mayo Clinic — Gingivitis: Symptoms & Causes | 2024', url: 'https://www.mayoclinic.org/diseases-conditions/gingivitis/' },
    { label: 'NCBI / PubMed — Gingival Bleeding as a Diagnostic Indicator', url: 'https://www.ncbi.nlm.nih.gov/pmc/' },
    { label: 'NHS UK — Bleeding Gums | 2024', url: 'https://www.nhs.uk/conditions/bleeding-gums/' },
  ],
}

async function seed() {
  console.log('Seeding gum-bleeding...')
  const result = await client.createOrReplace(symptom)
  console.log('Done:', result._id)
}

seed().catch(console.error)
