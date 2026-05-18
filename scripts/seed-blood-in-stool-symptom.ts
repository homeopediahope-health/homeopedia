import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'symptom-blood-in-stool',
  _type: 'symptom',

  name: 'Blood in Stool',
  hindiName: 'Latrine Mein Khoon Aana',
  hinglishName: 'Latrine Mein Khoon Aana / Bloody Stool',
  slug: { _type: 'slug', current: 'blood-in-stool' },
  bodySystem: 'Digestive',

  metaTitle: 'Blood in Stool in Hindi — Karan, Ilaaj aur Homeopathy | Homeopedia',
  metaDescription: 'Latrine mein khoon aana (blood in stool) ke karan, severity aur ghar pe safe steps — Hinglish mein. Verified info, Dr. Shadab reviewed.',
  publishedAt: new Date('2026-05-18').toISOString(),

  whatIsThis: `Subah uthke fresh hone jaate hain — aur toilet mein laal rang dikhta hai. Ek second ke liye dil dhaak se reh jaata hai.

Latrine mein khoon aana India mein ek bahut common complaint hai — aur aksar ye utna serious nahi hota jitna daraawe lagta hai. Lekin kabhi kabhi ye ek important signal bhi ho sakta hai jo ignore karna theek nahi.

Ye page aapko 2 minute mein batayega: aapka case kahan aata hai, ghar pe ruk sakte hain ya doctor zaroori hai.`,

  indiaContext: 'India mein piles (bawaseer) akele 75% adults mein kabhi na kabhi hoti hai — aur latrine mein khoon aana uska sabse common lakshan hai.',
  indiaContextSource: 'Journal of Colorectal Disease, India data; World Gastroenterology Organisation — Hemorrhoids Global Guidelines 2023',

  severityLevel1: [
    'Khoon bright red hai aur sirf tissue paper pe ya toilet ke upar dikhta hai',
    'Pet mein dard bilkul nahi hai',
    'Pehle bhi hua hai aur pata hai — piles ya fissure ki wajah se',
    'Thoda sa khoon hai — poori latrine red nahi hai',
    'Bukhaar ya kamzori nahi hai',
  ],
  severityLevel2: [
    'Khoon baar baar aa raha hai — do teen hafte se',
    'Latrine ke saath saath pet dard ya cramping bhi hai',
    'Khoon ke saath mucus (balgam jaisi cheez) bhi aa rahi hai',
    'Umar 40 saal se zyada hai aur pehli baar ho raha hai',
    'Khoon dark maroon rang ka hai — bright red nahi',
  ],
  severityLevel3: [
    'Bahut zyada khoon — toilet bowl completely red ho gaya — turant hospital',
    'Khoon ke saath kaala tar jaisi latrine (melena) — turant hospital',
    'Behoshi, chakkar, heart fast — turant hospital',
    'Severe pet dard ke saath khoon — uthna bhi mushkil — turant hospital',
    'Pregnancy mein koi bhi rectal bleeding — immediately hospital',
  ],

  timeline3Days: 'Aksar ye constipation (kabz) se anal area mein chhoti si cut ya piles ke badhne se hota hai. Ghar pe aaraam, paani zyada peeyen, aur strain na karein toilet mein. Agar teen din mein better nahi hua — Level 2 mein aao, doctor se milein.',
  timeline4Weeks: 'Ye signal hai ki koi underlying issue hai jo khud theek nahi ho raha. Piles ka badhna, fissure ka nahi bharna, ya gut mein inflammation ho sakta hai. Is point pe doctor se milna zaroori hai — delay karne ka koi reason nahi.',
  timelineMonthPlus: 'Chronic bleeding ka matlab hai ki body baar baar ek hi signal de rahi hai. Khoon ki kami (anemia) ka risk badhta jaata hai. Doctor se milein, proper diagnosis karwayein. Homeopathy chronic cases mein root cause address karne mein helpful hoti hai — results individual hote hain.',

  lifestyleCauses: [
    {
      _key: 'lc1',
      causeName: 'Kabz (Constipation)',
      mechanism: 'Jab latrine bahut hard hoti hai, toh pass karte waqt anal canal pe bahut pressure aata hai. Is pressure se wahan ki naazan skin ya blood vessels tear ho jaati hain. Ye micro-tear hi bright red khoon ka source hoti hai — bright red isliye kyunki ye bahut upar se nahi, ekdum bahar se aa raha hota hai.',
      howToIdentify: 'Khoon sirf strain karne ke baad tissue pe ya toilet mein hoga. Latrine karna mushkil ya painful hoga.',
    },
    {
      _key: 'lc2',
      causeName: 'Paani Kam Peena / Dehydration',
      mechanism: 'Body mein paani ki kami se stool dry aur compact ho jaata hai. Dry stool pass karte waqt anal area pe friction zyada hoti hai. Ye fissure (cut) aur piles (bawaseer) dono ko trigger kar sakta hai.',
      howToIdentify: 'Urine ka rang dark yellow hota hai. Thakaan aur sir dard bhi saath hota hai. Din mein 6-8 glass se kam paani peete hain.',
    },
    {
      _key: 'lc3',
      causeName: 'Bahut Der Tak Toilet Mein Baithna / Phone Use',
      mechanism: 'Toilet pe zyada der tak baithne se anal area pe gravitational pressure badhta rehta hai. Is position mein rectal veins mein blood pool hoti hai aur piles develop ya worsen hoti hain. Ye India mein ek growing cause hai — smartphone use ke baad se.',
      howToIdentify: 'Toilet mein 10 minute se zyada regularly rehte hain. Khoon subah toilet ke baad specifically aata hai.',
    },
    {
      _key: 'lc4',
      causeName: 'Spicy Khana / Junk Food Ka Zyada Sevan',
      mechanism: 'Bahut zyada mirch, processed food ya alcohol gut lining ko irritate karta hai. Is irritation se intestine ki inner wall inflamed ho jaati hai. Ye inflammation mild bleeding cause kar sakti hai — aksar loose stool ke saath.',
      howToIdentify: 'Khoon spicy khane ke ek din baad zyada hota hai. Saath mein loose motions ya bloating bhi hoti hai.',
    },
  ],

  medicalCauses: [
    {
      _key: 'mc1',
      diseaseName: 'Piles (Bawaseer)',
      diseaseHindiName: 'Bawaseer',
      howSymptomPresents: 'Anal area ke aaspaas ki veins swell ho jaati hain. Stool pass karte waqt in veins pe pressure se bright red khoon aata hai — aksar bina dard ke. Internal piles mein khoon zyada hota hai, external mein dard zyada hota hai.',
      howToIdentify: 'Khoon tissue pe bright red hoga, latrine mein mix nahi hoga. Toilet ke baad kuch "hanging" feel hoga ya anal area mein heaviness hogi.',
      homeopediaSlug: 'piles',
      isAvailable: true,
    },
    {
      _key: 'mc2',
      diseaseName: 'Anal Fissure',
      diseaseHindiName: 'Anal Darak / Anal Cut',
      howSymptomPresents: 'Anal canal mein ek chhoti si cut (fissure) ban jaati hai. Har latrine ke baad sharp, burning dard hota hai — aur bright red khoon. Ye dard ghanton tak reh sakta hai.',
      howToIdentify: 'Khoon ke saath jalan aur cutting pain — ye piles se alag karta hai. Constipation ka history aksar hoga.',
      homeopediaSlug: 'fissure',
      isAvailable: true,
    },
    {
      _key: 'mc3',
      diseaseName: 'Fistula (Bhagandar)',
      diseaseHindiName: 'Bhagandar',
      howSymptomPresents: 'Anal area mein ek tunnel jaisa abnormal passage ban jaata hai skin aur gut ke beech. Is tunnel se khoon, pus ya discharge aa sakta hai. Aksar piles ya abscess ke baad develop hota hai.',
      howToIdentify: 'Anal area ke paas ek opening ya discharge dikhegi. Continuous mild pain ya irritation rehti hai — not just during toilet.',
      homeopediaSlug: '',
      isAvailable: false,
    },
    {
      _key: 'mc4',
      diseaseName: 'Colitis (Aantaon Ki Sujan)',
      diseaseHindiName: 'Aantaon Ki Sujan',
      howSymptomPresents: 'Large intestine ki inner lining mein inflammation hoti hai. Khoon aksar mucus ke saath aata hai — aur frequent loose motions ke saath. Pet mein cramping bhi hoti hai — especially left side mein.',
      howToIdentify: 'Khoon latrine mein mix hoga — sirf upar nahi. Bathroom frequently jaana padta hai — din mein 4-5 baar ya zyada.',
      homeopediaSlug: '',
      isAvailable: false,
    },
  ],

  redFlags: [
    'Colorectal Polyps ya Cancer — agar umar 40+ hai, khoon dark hai, weight loss ho raha hai, aur bowel habits badal gayi hain to turant colonoscopy zaroori hai. Wait mat karo.',
    'Upper GI Bleeding (Stomach ya Small Intestine Se) — agar latrine kaali tar jaisi hai (melena), saath mein ulti mein khoon ho, ya heart fast chal raha ho — ye upper bleeding ka sign hai. Turant hospital.',
    'IBD (Crohn\'s Disease ya Ulcerative Colitis) — baar baar khoon + mucus + weight loss + bukhaar — ye inflammatory bowel disease ke signs hain. Is combination pe hamesha doctor zaroori hai.',
  ],

  homeSteps: [
    {
      _key: 'hs1',
      action: 'Paani Zyada Peeyen — Minimum 8-10 Glass',
      whyItWorks: 'Stool soft hoga to anal area pe pressure kam hoga. Dehydration piles aur fissure dono ka ek major trigger hai. Din mein consistent paani peena stool ko naturally soft rakhta hai — bina kisi medicine ke.',
    },
    {
      _key: 'hs2',
      action: 'Toilet Mein Strain Bilkul Mat Karo',
      whyItWorks: 'Strain karna piles aur fissure dono ko worsen karta hai. Pressure feel ho rahi hai lekin ho nahi raha to uth jaao — 10 minute baad try karo. Force karna bleeding aur damage dono badhata hai.',
    },
    {
      _key: 'hs3',
      action: 'Warm Sitz Bath Lein — Din Mein Do Baar (10-15 Min)',
      whyItWorks: 'Ek tub ya baaldi mein gunguna paani lein aur anal area ko us mein rakhein. Ye muscles relax karta hai, blood flow improve karta hai, aur healing mein help karta hai. Pregnancy mein bhi safe hai.',
    },
    {
      _key: 'hs4',
      action: 'Toilet Mein Phone Ya Reading Bilkul Nahi',
      whyItWorks: 'Toilet time 5 minute se kam rakhein. Zyada der ek hi position mein baithne se piles pe pressure badhta hai aur veins aur swell hoti hain. Ye ek simple habit hai jo significant fark dalti hai.',
    },
    {
      _key: 'hs5',
      action: 'Tight Undergarments Avoid Karein',
      whyItWorks: 'Tight kapde anal area mein circulation restrict karte hain aur irritation badhate hain. Jab tak theek na ho — loose cotton prefer karein. Ye healing ko accelerate karta hai aur discomfort kam karta hai.',
    },
  ],

  homeopathyIndividualization: `Latrine mein khoon ka naam ek hai — lekin har case alag hota hai. Kisi ko sirf toilet ke baad bright red khoon aata hai — dard nahi. Kisi ko khoon ke saath jalan hoti hai ghanton tak. Kisi ko raat mein zyada hota hai, kisi ko spicy khane ke baad. Homeopathy mein ye sab details matter karti hain — khoon ka rang, kab aata hai, kya se badhta hai, bowel habits kaisi hain — ye sab milke treatment decide karte hain. Isliye do patients ko same symptom hone ke baad bhi bilkul alag approach ho sakti hai.`,

  homeopathyRootCause: `Jo patient piles ya fissure ke liye baar baar creams lagate hain — thodi der ke liye relief milti hai, phir wapas aata hai. Homeopathy mein sirf bleeding band karna goal nahi hota — jo cheez isko baar baar la rahi hai usse address kiya jaata hai. Constipation ka pattern, circulation ki weakness, gut lining ki sensitivity — ye sab constitutional level pe dekha jaata hai. Waqt ke saath frequency aur intensity dono kam hoti hain — results individual hote hain aur time lagta hai.`,

  homeopathySafety: `Pregnancy mein, bacchon mein, aur elderly patients mein jab heavy medications avoid karni hoti hain — homeopathy ek safe complementary option hai. Zaroori baat: Severe bleeding ya emergency mein conventional emergency treatment pehle lein. Homeopathy complementary role mein hai — replacement nahi. Colitis ya serious gut conditions mein gastroenterologist ke saath saath homeopathy chalayi ja sakti hai.`,

  isForYouIf: [
    'Aap root cause treat karna chahte hain — baar baar cream ya tablet se temporarily manage nahi karna',
    'Aapko chronic, recurring bleeding hai — aur conventional treatment se temporary relief mil raha hai',
    'Aap side-effect free complementary option chahte hain — especially pregnancy mein ya elderly patients mein',
    'Aap long-term bowel health improve karna chahte hain',
  ],

  notForYouIf: [
    'Aapko bahut zyada bleeding ho rahi hai — ek ghante mein conventional emergency care lein, homeopathy baad mein saath chalayi ja sakti hai',
    'Aapka case surgical hai — jaise advanced fistula ya large internal piles — surgery ke baad recovery mein homeopathy help kar sakti hai',
  ],

  homeopathyDiseaseLinks: [
    { _key: 'hdl1', diseaseName: 'Piles (Bawaseer) ka poora ilaaj',    diseaseSlug: 'piles'   },
    { _key: 'hdl2', diseaseName: 'Anal Fissure ka poora ilaaj',         diseaseSlug: 'fissure' },
  ],

  linkedDiseaseCards: [
    { _key: 'ldc1', title: 'Piles (Bawaseer)',        hindiName: 'Bawaseer',           slug: 'piles',    isAvailable: true  },
    { _key: 'ldc2', title: 'Anal Fissure',            hindiName: 'Anal Darak / Cut',   slug: 'fissure',  isAvailable: true  },
    { _key: 'ldc3', title: 'Fistula',                 hindiName: 'Bhagandar',          slug: '',         isAvailable: false },
    { _key: 'ldc4', title: 'Colitis',                 hindiName: 'Aantaon Ki Sujan',   slug: '',         isAvailable: false },
  ],

  faqs: [
    {
      _key: 'faq1',
      faqType: 'normal-vs-serious',
      question: 'Latrine mein khoon aana kab normal hota hai aur kab doctor zaroori hai?',
      answer: `Bright red khoon jo sirf tissue pe ho, dard na ho, aur pehle bhi piles ki wajah se hua ho — ye generally manage ho jaata hai.\n\nLekin "normal" ka matlab ye nahi ki ignore karo. Doctor zaroori hai jab:\n- Khoon dark ya kaala ho\n- Pet dard, bukhaar ya weight loss saath ho\n- Pehli baar ho raha ho aur umar 40 se zyada ho\n- Baar baar aaye — ek hafte se zyada\n\nKoi bhi doubt ho to doctor se milna hamesha sahi hai — latrine mein khoon ko kabhi completely ignore nahi karna chahiye.`,
    },
    {
      _key: 'faq2',
      faqType: 'duration',
      question: 'Latrine mein khoon aana kitne din tak rehta hai?',
      answer: `Piles ya fissure ki wajah se hone wala khoon — agar cause address ho — 3-7 din mein better hona shuru hota hai.\n\nLekin sirf ghar pe rakhne se theek nahi hoga agar cause remove nahi hua.\n\nEk hafte mein koi improvement nahi to doctor se milein. Agar chronic hai — mahino se chal raha hai — to ye definitely medical attention maangta hai.`,
    },
    {
      _key: 'faq3',
      faqType: 'common-cause',
      question: 'Latrine mein khoon aane ka sabse common karan kya hai?',
      answer: `India mein sabse common wajah piles (bawaseer) hai. Piles mein anal area ki veins swell ho jaati hain — kabz, pregnancy, ya long time baithne se. Stool pass karte waqt pressure se in veins se bright red khoon aata hai.\n\nDoosra bahut common cause anal fissure hai — kabz ki wajah se bani chhoti si cut.\n\nDono cases mein khoon bright red hota hai aur aksar bina severe dard ke (fissure mein dard hoga, piles mein kam).`,
    },
    {
      _key: 'faq4',
      faqType: 'normal-vs-serious',
      question: 'Bina dard ke latrine mein khoon aaye to kya karna chahiye?',
      answer: `Bina dard ke khoon — aksar internal piles ka sign hota hai. Internal piles mein nerve endings kam hoti hain, isliye dard nahi hota. Ye dangerous nahi lagta — lekin iska matlab ye nahi ki serious nahi ho sakta.\n\nKya karo:\n- Ghar pe aaraam, paani zyada, strain nahi\n- Agar khoon bright red aur thoda sa hai — Level 1 management karo\n- Agar ek hafte se zyada ho — doctor se milein\n- Agar khoon dark hai ya latrine mein mix hai — bina dard ke bhi doctor zaroori hai`,
    },
    {
      _key: 'faq5',
      faqType: 'pregnancy',
      question: 'Pregnancy mein latrine mein khoon aaye to kya karna chahiye?',
      answer: `Pregnancy mein latrine mein khoon aana kabhi ignore mat karo — high-stakes situation hai.\n\nCommon cause hai pregnancy piles — uterus ke pressure se anal veins pe strain aata hai. Lekin pregnancy mein specifically Intrahepatic Cholestasis of Pregnancy (ICP) jaisi rare condition bhi ho sakti hai jisme liver affected hota hai.\n\nKya karo:\n- Koi bhi bleeding ho — pehle apne gynaecologist ko batao\n- Khud se koi medicine mat lo — homeopathic ya allopathic dono\n- Warm sitz bath safe hai\n- Paani zyada peeyen, strain bilkul nahi\n\nSafe complementary support ke liye homeopathic consultation consider karo — sirf qualified doctor ke through.`,
    },
    {
      _key: 'faq6',
      faqType: 'bacchon-mein',
      question: 'Bacchon mein latrine mein khoon kyun aata hai?',
      answer: `Bachon mein sabse common wajah kabz hai — especially jab diet mein fiber kam ho ya paani kam peete hon. Chhoti si fissure (anal cut) ho jaati hai — khoon bright red aur stool pe hota hai.\n\nKya dekhein:\n- Khoon bright red aur stool pe — aksar kabz ki wajah\n- Khoon latrine mein mix ho, loose motions ke saath — gastroenteritis ya infections ka sign\n- Bachcha bahut zyada rota ho latrine ke waqt — doctor zaruri\n\nNewborn ya infant mein koi bhi rectal bleeding — immediately pediatrician.`,
    },
    {
      _key: 'faq7',
      faqType: 'test-diagnosis',
      question: 'Latrine mein khoon aane mein kaunsa test karwana chahiye?',
      answer: `Ye doctor decide karta hai — symptoms ke hisaab se. Aam tor pe:\n\n- Proctoscopy / Anoscopy — anal area aur lower rectum directly dekhne ke liye. Piles aur fissure confirm hote hain.\n- Colonoscopy — andar tak puri large intestine dekhna — umar 40+ ya chronic bleeding mein recommend hota hai\n- Stool Test (FOBT) — hidden blood detect karta hai\n- CBC (Complete Blood Count) — anemia check karne ke liye — chronic bleeding mein\n\nKhud se tests order mat karo — doctor assessment ke baad sahi test suggest karega.`,
    },
    {
      _key: 'faq8',
      faqType: 'ghar-pe-wait',
      question: 'Ghar pe latrine mein khoon rokne ke liye kya karein?',
      answer: `Physical comfort steps jo safe hain:\n- Warm sitz bath din mein do baar — 10-15 minute\n- Paani 8-10 glass daily — stool soft rakhne ke liye\n- Toilet mein strain bilkul nahi — mobile use nahi\n- Tight undergarments avoid karein\n- Bahut mirchy ya oily khana temporarily kam karein\n\nYe mat karo: Khud se koi medicine start nahi karna — homeopathic ya allopathic. Agar ek hafte mein better nahi hua — doctor ke paas jaana zaroori hai.`,
    },
    {
      _key: 'faq9',
      faqType: 'homeopathy',
      question: 'Kya homeopathy latrine mein khoon aane mein kaam karti hai?',
      answer: `Homeopathy latrine mein khoon ke cases mein — khaas kar piles, fissure, aur chronic colitis mein — use hoti hai.\n\nIska fayda ye hai ki ye sirf symptom pe nahi, is symptom ki wajah — kabz ka pattern, vascular weakness, gut lining sensitivity — in sab ko constitution ke hisaab se address karta hai.\n\nSpecifically piles aur fissure mein homeopathy ek established complementary approach hai.\n\nImportant: Research limited hai aur results individual hote hain. Severe bleeding ya emergency mein conventional care pehle. Homeopathy alongside chalayi ja sakti hai — replacement nahi hai.`,
    },
    {
      _key: 'faq10',
      faqType: 'baar-baar',
      question: 'Latrine mein khoon baar baar kyun aata hai?',
      answer: `Baar baar aana matlab hai ki sirf surface treat ho raha hai — root cause nahi.\n\nCommon reasons:\n- Kabz ka pattern wahi reh gaya — piles ya fissure heal nahi ho paati\n- Diet change nahi hui — fiber aur paani abhi bhi kam\n- Underlying inflammation — jaise colitis — properly treat nahi hua\n- Stress bhi gut function affect karta hai — chronic stress se bowel patterns disturb hote hain\n\nBaar baar aane ka matlab hai aapko ek doctor se poora assessment karwana chahiye — sirf cream ya temporary relief se kaam nahi chalega.`,
    },
    {
      _key: 'faq11',
      faqType: 'permanent-solution',
      question: 'Latrine mein khoon aane se hamesha ke liye kaise chutkara milega?',
      answer: `"Permanent cure" ka guarantee koi bhi system honestly nahi de sakta — aur koi de to doubt karo.\n\nJo realistic hai:\n- Piles ya fissure ke cases mein — sahi treatment aur lifestyle se itna better hota hai ki baar baar aana practically band ho jaata hai\n- Colitis ke cases mein — remission possible hai — disease manage ho jaati hai\n- Diet, hydration, aur bowel habits consistently theek rakhna — relapse ka risk bahut kam karta hai\n\nHomeopathy mein chronic recurring cases mein constitutional treatment se frequency aur intensity dono kam karne ki approach hoti hai — results individual hote hain.`,
    },
    {
      _key: 'faq12',
      faqType: 'india-specific',
      question: 'Mardaon mein latrine mein khoon aane ki wajah alag hoti hai kya?',
      answer: `Wajah mostly same hoti hai — piles, fissure, colitis. Lekin kuch patterns alag hote hain:\n\n- Mardaon mein heavy lifting, gym ya physical labor se piles zyada hoti hain\n- Alcohol aur heavy non-veg diet gut ko zyada irritate karta hai — colitis risk badhta hai\n- Umar 45-50 ke baad mardaon mein colorectal cancer screening zaroori hai — especially agar family history ho\n- Prostate issues directly rectal bleeding cause nahi karte — lekin ek hi area hone ki wajah se confuse ho jaate hain\n\nAgar mard 45+ hai aur pehli baar ho raha hai — doctor se specifically colorectal screening discuss karein.`,
    },
  ],

  relatedSymptoms: [
    { _key: 'rs1', name: 'Constipation',     hindiName: 'Kabz / Pet Saaf Na Hona',  slug: 'constipation'  },
    { _key: 'rs2', name: 'Rectal Pain',       hindiName: 'Anal Dard',                slug: 'rectal-pain'   },
    { _key: 'rs3', name: 'Abdominal Pain',    hindiName: 'Pet Dard',                 slug: 'abdominal-pain'},
    { _key: 'rs4', name: 'Mucus in Stool',    hindiName: 'Latrine Mein Balgam',      slug: 'mucus-in-stool'},
  ],

  sources: [
    { _key: 's1', name: 'Mayo Clinic — Rectal Bleeding: Causes',                                     year: '2024', url: 'https://www.mayoclinic.org/symptoms/rectal-bleeding/basics/causes/sym-20050740' },
    { _key: 's2', name: 'NHS UK — Blood in Stools',                                                  year: '2023', url: 'https://www.nhs.uk/conditions/rectal-bleeding/' },
    { _key: 's3', name: 'NCBI / PubMed — Hemorrhoids: Pathophysiology, Evaluation, and Management', year: '2021', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7746270/' },
    { _key: 's4', name: 'World Gastroenterology Organisation — Hemorrhoids Global Guidelines',        year: '2023', url: 'https://www.worldgastroenterology.org/guidelines/hemorrhoids' },
  ],

  quickFactSymptom: 'Latrine mein khoon aana ek symptom hai — bimari nahi. Cause dhundna zaroori hai.',
  quickFactIndiaStats: 'India mein 75% adults kabhi na kabhi piles experience karte hain — aur khoon uska sabse common lakshan hai.',
  quickFactDoctorWhen: 'Dark/kaala khoon, severe dard, ya pregnancy mein koi bhi bleeding — immediately doctor.',
  reviewDate: 'May 2026',

  doctorNote: 'Maine apni practice mein dekha hai ki latrine mein khoon aane ke jo patients aate hain, unme se zyada tar log pehle mahino tak khud piles samajhke cream lagate rehte hain — aur jab relief nahi milti tab aate hain. Problem ye hoti hai ki aksar saath mein kabz ka pattern aur diet ka issue bhi hota hai jo address nahi hua hota. Sirf local treatment se root cause theek nahi hota. Homeopathy mein jab constitution ke hisaab se treat karte hain — bowel regularity improve hoti hai, piles ki recurrence kam hoti hai. Lekin koi bhi patient jo 40 se upar ho aur pehli baar aaya ho — unhe main pehle colonoscopy recommend karta hoon — ruling out karna zaroori hai.',
}

async function seed() {
  console.log('🌱 Seeding Blood in Stool symptom page...')
  await client.createOrReplace(doc)
  console.log('✅ Symptom seeded — homeopedia.in/symptoms/blood-in-stool')
}

seed().catch(console.error)
