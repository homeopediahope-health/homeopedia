import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'symptom-heel-pain',
  _type: 'symptom',

  name: 'Heel Pain',
  hindiName: 'Paon Ki Aadi Mein Dard',
  hinglishName: 'Heel Pain / Aadi Ka Dard',
  slug: { _type: 'slug', current: 'heel-pain' },
  bodySystem: 'Joints',

  metaTitle: 'Heel Pain in Hindi — Karan, Ilaaj aur Homeopathy',
  metaDescription: 'Heel pain (paon ki aadi mein dard) ke karan, severity aur ghar pe safe steps — Hinglish mein. Verified info, doctor-reviewed.',
  publishedAt: new Date('2026-05-19').toISOString(),

  whatIsThis: `Subah uthke jab pehla qadam zameen pe rakho — aur paon ki aadi mein ek teekha, jalan bhara dard ho. Koi chot nahi lagi, koi mooch nahi aayi — phir bhi har qadam mushkil ho jaata hai. Thodi der chalne ke baad thoda better lagta hai, lekin wapas baithne ke baad uthne pe fir wahi dard.

Heel pain — yaani paon ki aadi mein dard — India mein ek bahut common complaint hai. Subah uthte waqt, zyada der khade rehne ke baad, ya seedhi zameen pe chalne se ye dard aur badh jaata hai. Aap akele nahi hain.

Ye page aapko 2 minute mein batayega: aapka case serious hai ya nahi, wajah kya ho sakti hai, ghar pe kya karein, aur aage ke sahi steps kya hain.`,

  indiaContext: 'NCBI aur Mayo Clinic ke mutabiq, plantar fasciitis — heel pain ka sabse common karan — duniya ki 10% adult population ko kabhi na kabhi affect karta hai. India mein zameen pe kaam karna, ghar mein chappalen ya naange paon rehna, aur diabetes ka badhta praban in numbers ko aur badha deta hai.',
  indiaContextSource: 'NCBI 2023 | Mayo Clinic 2024',

  severityLevel1: [
    'Subah uthte waqt dard hota hai lekin 10-15 minute chalne ke baad apne aap theek ho jaata hai',
    'Dard sirf ek jagah hai — aadi ke neeche ya bilkul peeche — koi sujan ya lali nahi',
    '1-2 hafte se hai, lekin roz ke kaam chal rahe hain',
    'Koi recent injury ya accident nahi hua',
  ],
  severityLevel2: [
    'Dard roz badh raha hai — pehle sirf subah tha, ab din mein bhi rehta hai',
    'Raat ko bhi dard hota hai — khade ya baithey kisi bhi haalat mein',
    'Chalne mein limp aa rahi hai — theek se chal nahi pa rahe',
    '2 hafte se zyada ho gaya — koi farak nahi pada',
    'Aadi mein halki sujan ya garm pan dikh raha hai',
  ],
  severityLevel3: [
    'Achanak bahut tez dard aaya — saath mein koi "pop" ki awaaz aayi ho',
    'Paon zameen pe bilkul nahi rakh pa rahe — weight bear hi nahi ho raha',
    'Aadi mein tez sujan, lali aur saath mein bukhaar bhi hai',
    'Diabetic hain aur paon mein koi bhi wound, sujan ya dard ho — turant orthopedic ya diabetologist',
  ],

  timeline3Days: 'Aksar ek nayi activity, zyada der chalna, ya galat footwear pehnane ke baad hota hai. Body adjust kar rahi hai — plantar fascia (paon ke neeche ki strong tissue band) mein micro-tension aayi hai. Abhi rest karo aur supportive footwear pehno. Agar 5 din mein koi sudhar nahi to Level 2 pe aao.',
  timeline4Weeks: 'Ye signal hai ki sirf rest se kaam nahi chalega — body ko targeted help chahiye. Stretching exercises, footwear change, aur ek baar doctor evaluation zaruri hai. Abhi bhi sirf ghar pe hain to is hafte doctor dikhao.',
  timelineMonthPlus: 'Ye chronic case hai — aksar underlying cause hai jo treat nahi hua. Uric acid, flat feet, ya diabetes related ho sakta hai. Sirf painkiller se kaam nahi chalega — root cause dhundhna zaroori hai. Doctor evaluation mandatory hai. Homeopathy is stage pe ek effective complementary option hai jo underlying imbalance ko address karne mein help kare.',

  lifestyleCauses: [
    {
      _key: 'lc1',
      causeName: 'Galat Footwear (Bekar Jootey Ya Chappalen)',
      mechanism: 'Paon ke neeche ek tissue band hoti hai — plantar fascia. Ye heel se ungliyon tak connected hoti hai. Jab flat chappalen, bina cushion ke jootey, ya bahut tight footwear pehnte hain — ye band baar baar stretch hoti hai bina proper support ke. Dhire dhire micro-tears aati hain aur inflammation shuru ho jaati hai — yahi heel pain ka roop le leti hai.',
      howToIdentify: 'Subah pehle qadam pe sabse zyada dard. Naye ya bina cushion ke jootey pehnne ke baad badha hoga. Koi sujan nahi hoti.',
    },
    {
      _key: 'lc2',
      causeName: 'Zyada Der Khade Rehna Ya Chalna',
      mechanism: 'Ghanton khade rehne se — kaam ki jagah, kitchen mein — heel pe lagaataar pressure rehta hai. Paon ki muscles aur ligaments thak jaate hain aur unka shock-absorbing kaam kamzor ho jaata hai. Heel ki haddi pe direct stress aane lagta hai.',
      howToIdentify: 'Dard shaam ko zyada hota hai — din bhar kaam ke baad. Subah better rehta hai.',
    },
    {
      _key: 'lc3',
      causeName: 'Achanak Weight Gain Ya Pregnancy',
      mechanism: 'Paon ke neeche sirf kuch square inches mein poore body ka weight hota hai. Weight badhne pe heel pe pressure proportionally zyada ho jaata hai. Pregnancy mein hormones ligaments ko loose bhi karte hain — double pressure heel pe aa jaata hai.',
      howToIdentify: 'Pregnancy ke second ya third trimester mein shuru hota hai. Aksar dono pairon mein hota hai.',
    },
    {
      _key: 'lc4',
      causeName: 'Running Ya Exercise Mein Achanak Badhotri',
      mechanism: 'Jab naya exercise routine shuru karte hain — ya runner distance achanak badha deta hai — heel pe repetitive impact se plantar fascia mein stress aata hai. Body ko adapt karne ka waqt nahi milta.',
      howToIdentify: 'Exercise ke baad dard shuru ya badh jaata hai. Rest karne pe better hota hai.',
    },
  ],

  medicalCauses: [
    {
      _key: 'mc1',
      diseaseName: 'Plantar Fasciitis',
      diseaseHindiName: 'Talab Ki Jhailli Ki Sujan',
      howSymptomPresents: 'Heel ke bilkul neeche — aadi ke center mein — ek teekha, churne wala dard. Subah uthke pehle qadam pe sabse zyada. Kuch der chalne ke baad thoda better hota hai — lekin der tak khade rehne ke baad wapas aata hai.',
      howToIdentify: 'Aadi ko hath se press karo — agar bilkul center mein point tenderness ho to ye plantar fasciitis ka strong sign hai.',
      homeopediaSlug: 'plantar-fasciitis',
      isAvailable: true,
    },
    {
      _key: 'mc2',
      diseaseName: 'Calcaneal Spur (Heel Spur)',
      diseaseHindiName: 'Aadi Ki Haddi Pe Kaanta',
      howSymptomPresents: 'Heel ki haddi (calcaneum) pe calcium deposit ho jaata hai — ek chhoti si bony projection banti hai. Jab ye surrounding tissue pe press karta hai, tez stabbing pain hoti hai.',
      howToIdentify: 'Plantar fasciitis jaisa hi dard — lekin X-ray se confirm hota hai. Aksar plantar fasciitis ke saath saath hota hai.',
      homeopediaSlug: '',
      isAvailable: false,
    },
    {
      _key: 'mc3',
      diseaseName: 'Gout (Gathiya / Uric Acid)',
      diseaseHindiName: 'Gathiya, Yurik Acid Ka Dard',
      howSymptomPresents: 'Blood mein uric acid badhne se crystals joints mein jam jaate hain. Heel mein achanak bahut tez dard aata hai — saath mein sujan aur lali bhi hoti hai. Ye aksar raat ko achanak shuru hota hai.',
      howToIdentify: 'Dard ke saath sujan aur lali ho — heel ya big toe mein. Uric acid blood test se confirm hota hai.',
      homeopediaSlug: 'gout',
      isAvailable: true,
    },
    {
      _key: 'mc4',
      diseaseName: 'Rheumatoid Arthritis',
      diseaseHindiName: 'Gathiya Baath, Joints Ki Sujan',
      howSymptomPresents: 'Ye autoimmune condition hai jisme body khud apne joints pe attack karta hai. Heel mein sujan, stiffness aur dard — aksar dono pairon mein ek saath. Subah stiffness 30 minute se zyada rehti hai.',
      howToIdentify: 'Dono heel mein dard, saath mein haath ki ungliyon mein bhi stiffness ho. RF aur anti-CCP blood test se confirm hota hai.',
      homeopediaSlug: 'rheumatoid-arthritis',
      isAvailable: true,
    },
    {
      _key: 'mc5',
      diseaseName: 'Diabetes (Diabetic Neuropathy)',
      diseaseHindiName: 'Madhumeh, Sugar Ki Bimari',
      howSymptomPresents: 'High blood sugar nerves ko damage karta hai — isko diabetic neuropathy kehte hain. Heel mein jalan, numbness, ya pins-and-needles type sensation hoti hai. Aksar raat ko zyada. Skin dry aur cracked bhi hone lagti hai heel pe.',
      howToIdentify: 'Heel mein jalan ke saath numbness bhi ho — ya koi wound/blister ho jo theek nahi ho raha. Diabetic patients ke liye ye RED FLAG hai — turant doctor.',
      homeopediaSlug: '',
      isAvailable: false,
    },
  ],

  redFlags: [
    'Achilles Tendon Rupture — agar heel ke peeche upar "pop" sound ke saath achanak dard aaya aur paon uthaana mushkil ho to turant emergency. Ye surgery ka case ho sakta hai.',
    'Stress Fracture — agar runner hain ya osteoporosis hai, aur heel mein constant dard hai jo rest se bhi theek nahi hota to X-ray zaroori — haddi mein hairline crack ho sakti hai.',
    'Bone Infection (Osteomyelitis) — agar bukhaar ke saath heel mein sujan aur dard ho to turant hospital. Ye rare lekin serious condition hai.',
  ],

  homeSteps: [
    {
      _key: 'hs1',
      action: 'Rest Aur Footwear Change: Naange paon ya flat chappalen band karo — cushioned, supportive footwear pehno jisme heel padded ho. Zameen pe zyada der seedha khade rehna kam karo.',
      whyItWorks: 'Heel ko repetitive stress se break dena sabse zaruri hai. Sahi footwear se plantar fascia pe load turant kam hota hai.',
    },
    {
      _key: 'hs2',
      action: 'Thandi Senkaayi (Ice Pack): Ek kapde mein ice wrap karke 15-20 minute heel pe rakhein. Direct ice skin pe mat lagao. Din mein 2-3 baar kar sakte hain.',
      whyItWorks: 'Ice inflammation aur dard mein temporary relief deta hai. Swelling ho to especially helpful hai.',
    },
    {
      _key: 'hs3',
      action: 'Heel Cushion Ya Silicone Pad: Shoe ke andar heel pad rakho. Medical shop pe aasaani se milta hai.',
      whyItWorks: 'Heel pe direct pressure kam hota hai. Subah ke pehle qadam ke dard mein khas help karta hai.',
    },
    {
      _key: 'hs4',
      action: 'Gentle Calf Stretch — Bistar Pe Hi Subah: Bistar pe hi — paon ke panje ko upar ki taraf kheencho, 30 second hold karo — phir zameen pe qadam rakho.',
      whyItWorks: 'Raat bhar plantar fascia tight ho jaati hai. Ye stretch karne se pehle qadam ka dard kaafi kam hota hai.',
    },
    {
      _key: 'hs5',
      action: 'Paon Thoda Oopar Rakhna: Rest ke waqt paon ek takiye pe rakhein.',
      whyItWorks: 'Blood pooling aur sujan ko kam karta hai. Especially helpful agar sujan bhi ho saath mein.',
    },
  ],

  homeopathyIndividualization: 'Heel pain ka naam ek hai — lekin character har insaan mein alag hoti hai. Kisi ko subah uthte waqt zyada hota hai, kisi ko shaam ko. Kisi ka dard stabbing hai, kisi ka burning, kisi ka heavy. Kisi ko pressure se better hota hai, kisi ko aur bura lagta hai. Homeopathy mein sirf "heel pain" nahi dekha jaata — aapka heel pain kab, kaise, aur kyun hota hai — ye sab treatment decide karta hai. Isliye do patients ko ek hi symptom mein bilkul alag approach ho sakti hai.',
  homeopathyRootCause: 'Baar baar aane wala heel pain aksar ek deeper imbalance ka signal hota hai — chahe wo calcium metabolism ho, uric acid ho, ya chronic inflammation. Homeopathy mein sirf dard ko temporarily suppress karna goal nahi — jo cheez isko baar baar la rahi hai usse address kiya jaata hai. Waqt ke saath frequency aur intensity dono kam hoti hain. Research is area mein limited hai aur results individual hote hain — lekin chronic heel pain ke cases mein ye approach helpful raha hai.',
  homeopathySafety: 'Highly diluted medicines hone ki wajah se homeopathy practically side-effect free hai — isliye ye elderly patients mein aur unme bhi jo kai doosri medicines chal rahi hain, safely use ho sakti hai. Important caveat: Severe cases mein, achilles rupture mein, ya diabetic foot mein — conventional treatment pehle. Homeopathy complementary role mein hai — replacement nahi. Dono saath chal sakte hain.',

  isForYouIf: [
    'Aap root cause treat karna chahte hain — sirf dard ko baar baar painkiller se band nahi karna',
    'Chronic ya recurring heel pain hai jo wapas aata rehta hai',
    'Side-effect free option chahiye — especially agar doosri medicines already chal rahi hain',
  ],
  notForYouIf: [
    'Turant severe dard mein immediate relief chahiye — pehle conventional treatment lein',
    'Achilles tendon rupture ya stress fracture suspected hai — surgery ya immobilization pehle zaroori',
  ],

  homeopathyDiseaseLinks: [
    { _key: 'hdl1', diseaseName: 'Plantar Fasciitis (Talab Ki Jhailli Ki Sujan)', diseaseSlug: 'plantar-fasciitis' },
    { _key: 'hdl2', diseaseName: 'Gout (Uric Acid / Gathiya)', diseaseSlug: 'gout' },
    { _key: 'hdl3', diseaseName: 'Rheumatoid Arthritis (Gathiya Baath)', diseaseSlug: 'rheumatoid-arthritis' },
  ],

  linkedDiseaseCards: [
    { _key: 'ldc1', title: 'Plantar Fasciitis', hindiName: 'Talab Ki Jhailli Ki Sujan', slug: 'plantar-fasciitis' },
    { _key: 'ldc2', title: 'Gout', hindiName: 'Gathiya / Uric Acid', slug: 'gout' },
    { _key: 'ldc3', title: 'Rheumatoid Arthritis', hindiName: 'Gathiya Baath', slug: 'rheumatoid-arthritis' },
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Heel pain ka sabse common karan kya hai?',
      answer: 'Heel pain ka sabse common karan plantar fasciitis hai — paon ke neeche ki tissue band mein inflammation. Ye approximately 80% heel pain cases ki wajah hoti hai. Repetitive stress — galat footwear, zyada chalna, ya flat feet — is band mein micro-tears laata hai aur dard shuru hota hai. Subah pehle qadam pe ya zyada der khade rehne ke baad dard — ye classic plantar fasciitis ka pattern hai. Doosra common karan calcaneal spur hai — heel ki haddi pe calcium deposit. Gout aur rheumatoid arthritis bhi heel pain ka karan ban sakte hain — agar sujan aur lali bhi ho to in possibilities ko rule out karna zaroori hai.',
      faqType: 'general',
    },
    {
      _key: 'faq2',
      question: 'Heel pain kab normal hai aur kab doctor zaroori hai?',
      answer: 'Heel pain normal tab hai jab: subah ke pehle kuch minute mein apne aap theek ho jaaye, koi sujan ya lali na ho, aur 2 hafte mein sudhar ho raha ho. Doctor zaroori hai jab: Dard 2 hafte se zyada ho aur badh raha ho. Raat ko bhi dard ho — rest pe bhi. Sujan ya lali ho. Diabetic hain aur paon mein koi bhi problem ho. Chalne mein limp aa gayi ho. Agar "pop" sound ke saath achanak dard aaya — turant emergency.',
      faqType: 'general',
    },
    {
      _key: 'faq3',
      question: 'Subah uthte waqt heel mein itna dard kyun hota hai?',
      answer: 'Subah ka heel dard plantar fasciitis ka sabse classic sign hai. Raat bhar jab aap soote hain, plantar fascia rest position mein contract aur tight ho jaati hai. Subah pehla qadam rakhte hain to ye tight band achanak stretch hoti hai aur tez dard hota hai. Thodi der chalne ke baad band warm up ho jaati hai aur dard kam hota hai — isliye subah sabse zyada dard hota hai. Bistar pe hi calf stretching karne se ye pehla qadam easier ho jaata hai. Homeopathy mein ye morning aggravation pattern — yaani subah dard zyada hona — medicine select karne mein ek important indicator hota hai.',
      faqType: 'general',
    },
    {
      _key: 'faq4',
      question: 'Kya heel pain uric acid ki wajah se ho sakta hai?',
      answer: 'Haan — heel pain gout ki wajah se ho sakta hai jisme blood mein uric acid badh jaata hai aur crystals joints mein jam jaate hain. Gout ka heel pain alag hota hai: achanak aata hai, tez hota hai, saath mein sujan aur lali bhi hoti hai. Ye aksar raat ko shuru hota hai. India mein red meat, dal-chawal heavy diet, aur paani kam peena — ye sab uric acid badhate hain. Agar heel mein achanak raat ko tez dard aaya ho aur sujan bhi ho — uric acid blood test zaroor karwaao. Plantar fasciitis mein sujan usually nahi hoti — ye ek important fark hai.',
      faqType: 'general',
    },
    {
      _key: 'faq5',
      question: 'Kya homeopathy heel pain mein kaam karta hai?',
      answer: 'Homeopathy chronic aur recurring heel pain mein — especially plantar fasciitis aur calcaneal spur mein — ek complementary option ke roop mein helpful ho sakta hai. Homeopathy ka approach ye hai ki sirf dard suppress karna goal nahi — body ki inflammation aur underlying imbalance ko address karna. Kisi ko morning dard zyada hota hai, kisi ko pressure se better hota hai, kisi ko calcium metabolism ki problem hai — alag patterns ke liye alag approach. Research is area mein limited hai aur results individual hote hain. Acute ya severe cases mein pehle conventional evaluation zaruri hai — homeopathy saath mein complementary role mein chal sakti hai.',
      faqType: 'homeopathy',
    },
    {
      _key: 'faq6',
      question: 'Heel pain ke liye kaunsa doctor dikhana chahiye?',
      answer: 'Heel pain ke liye pehle ek orthopedic doctor (haddion ke specialist) se milein. Agar uric acid suspected ho to rheumatologist bhi dekh sakte hain. Diabetic patients ke liye diabetologist ya podiatrist (paon ke specialist). Agar physiotherapy recommend ho to physiotherapist se stretching exercises seekhna bahut effective hota hai plantar fasciitis mein. Homeopathic consultation ek complementary option hai jo saath mein chal sakti hai.',
      faqType: 'general',
    },
    {
      _key: 'faq7',
      question: 'Bacchon mein heel pain kyun hota hai?',
      answer: 'Bacchon mein — especially 8 se 14 saal ke active bachon mein — heel pain ka ek specific karan hota hai jise Sever\'s Disease (Calcaneal Apophysitis) kehte hain. Ye koi serious bimari nahi hai — growing bachon mein heel ki haddi ka growth plate area tight muscles se irritate ho jaata hai. Khel-kood ya sports ke baad dard badhta hai. Ye condition khud theek ho jaati hai jab growth complete hoti hai — lekin tab tak rest, stretching aur proper footwear zaruri hai. Agar bachche ke heel mein sujan bhi ho ya dard bahut zyada ho — doctor zaroor dikhao.',
      faqType: 'general',
    },
    {
      _key: 'faq8',
      question: 'Pregnancy mein heel pain normal hai?',
      answer: 'Pregnancy mein heel pain common hai — lekin ignore nahi karna chahiye. Do main wajahein hoti hain: pehli, weight gain se heel pe zyada pressure aata hai. Doosri, pregnancy ke hormones (specially relaxin) ligaments ko loose karte hain — paon ka arch thoda flatten hota hai aur plantar fascia pe extra stress aata hai. Ghar pe: supportive footwear, heel cushion, aur calf stretching help karte hain. Doctor kab: agar sujan sirf heel mein nahi poore paon ya pair mein ho — ye preeclampsia ka sign bhi ho sakta hai. Pregnancy mein koi bhi unusual symptom ke liye apne gynecologist se zaroor poochhen.',
      faqType: 'general',
    },
    {
      _key: 'faq9',
      question: 'Heel pain kitne din mein theek hota hai?',
      answer: 'Ye cause pe depend karta hai: Simple plantar fasciitis (nayi) — 2-4 hafte mein better hona shuru hona chahiye proper rest aur footwear change se. Chronic plantar fasciitis — 3-6 mahine lag sakte hain consistent treatment se. Calcaneal spur — zyada time le sakta hai — 6-12 mahine bhi ho sakte hain. Gout — acute attack 1-2 hafte mein theek hota hai lekin treatment na ho to wapas aata hai. Agar 6 hafte se zyada ho gaye hain aur koi sudhar nahi — definitely specialist evaluation zaruri hai. "Permanent cure" ka vaada koi bhi system honestly nahi kar sakta — jo realistic hai: sahi treatment se heel pain ki frequency aur intensity itni kam ho jaati hai ki life practically normal ho jaati hai.',
      faqType: 'general',
    },
    {
      _key: 'faq10',
      question: 'Heel pain mein exercise karna chahiye ya nahi?',
      answer: 'Ye depend karta hai kaunsi exercise pe. Avoid karo (acute phase mein): Running aur jumping. Zyada der khade rehna. Steep inclines pe chalna. Kar sakte hain: Swimming ya cycling — heel pe pressure nahi. Gentle calf stretching — actually help karta hai. Short flat surface walks — heel cushion ke saath. Physiotherapist se specific stretching exercises seekhna bahut helpful hai plantar fasciitis mein — ye sirf rest se zyada effective hota hai long term mein.',
      faqType: 'general',
    },
    {
      _key: 'faq11',
      question: 'Heel pain se hamesha ke liye kaise chutkara milega?',
      answer: '"Permanent cure" ka vaada koi bhi system honestly nahi kar sakta — aur koi kare to doubt karo. Jo realistic hai: sahi treatment se heel pain ki frequency aur intensity itni kam ho jaati hai ki roz ki life practically normal ho jaati hai. Iske liye zaruri hai: Root cause identify karna — plantar fasciitis, heel spur, gout, ya kuch aur. Footwear permanently theek karna — ye akela bahut fark karta hai. Weight management agar relevant ho. Stretching routine — roz, consistently. Underlying condition (uric acid, diabetes) ka treatment. Homeopathy chronic recurrence cycle todni mein helpful ho sakti hai — results individual hote hain lekin long term approach mein ye ek viable complementary option hai.',
      faqType: 'general',
    },
    {
      _key: 'faq12',
      question: 'Heel pain mein kaun sa test karwana chahiye?',
      answer: 'Tests cause pe depend karte hain. Imaging: X-ray — heel spur (calcaneal spur) dikhata hai. MRI — plantar fascia tear ya soft tissue damage ke liye (agar X-ray normal ho lekin dard zyada ho). Blood Tests: Uric acid — agar gout suspected ho (sujan, lali ke saath). RF aur anti-CCP — agar rheumatoid arthritis suspected ho. Fasting blood sugar / HbA1c — agar diabetes suspected ho. CBC — agar infection ya inflammation rule out karna ho. Aksar X-ray + uric acid test se hi majority cases mein diagnosis ho jaati hai. Baaki tests doctor recommend kare tab karwao.',
      faqType: 'general',
    },
  ],

  relatedSymptoms: [
    { _key: 'rs1', name: 'Knee Pain', hindiName: 'Ghutne Mein Dard', slug: 'knee-pain' },
    { _key: 'rs2', name: 'Joint Pain', hindiName: 'Joints Mein Dard', slug: 'joint-pain' },
    { _key: 'rs3', name: 'Foot Swelling', hindiName: 'Paon Mein Sujan', slug: 'foot-swelling' },
    { _key: 'rs4', name: 'Back Pain', hindiName: 'Kamar Dard', slug: 'back-pain' },
  ],

  sources: [
    { _key: 'src1', name: 'Mayo Clinic — Plantar Fasciitis: Symptoms & Causes', year: '2024', url: 'https://www.mayoclinic.org/diseases-conditions/plantar-fasciitis/' },
    { _key: 'src2', name: 'NCBI / PubMed — Plantar Fasciitis: A Concise Review', year: '2023', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6917522/' },
    { _key: 'src3', name: 'NHS UK — Heel Pain', year: '2023', url: 'https://www.nhs.uk/conditions/heel-pain/' },
    { _key: 'src4', name: 'WHO — Musculoskeletal Conditions Global Burden', year: '2023', url: 'https://www.who.int/news-room/fact-sheets/detail/musculoskeletal-conditions' },
  ],

  quickFactSymptom: 'Plantar fasciitis heel pain ka 80% se zyada cases ka karan hai — galat footwear aur zyada der khade rehna sabse common trigger hai.',
  quickFactIndiaStats: 'India mein zameen pe kaam karna aur flat footwear heel pain ke cases ka praban badhate hain — duniya ki 10% adult population affect hoti hai kabhi na kabhi.',
  quickFactDoctorWhen: '2 hafte se zyada heel dard ho, sujan ho, ya diabetic hain — doctor evaluation zaruri hai.',

  reviewDate: '2026-05',
}

async function seed() {
  console.log('🌱 Seeding Heel Pain symptom page...')
  await client.createOrReplace(doc)
  console.log('✅ Symptom seeded — homeopedia.in/symptoms/heel-pain')
}

seed().catch(console.error)
