import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'symptom-sciatica',
  _type: 'symptom',

  name: 'Sciatica',
  hindiName: 'Saiyatika / Sciatic Nerve Dard',
  hinglishName: 'Sciatica Ka Dard',
  slug: { _type: 'slug', current: 'sciatica' },
  bodySystem: 'Neurological',

  metaTitle: 'Sciatica in Hindi — Karan, Dard aur Homeopathic Upay | Homeopedia',
  metaDescription: 'Sciatica (saiyatika) ke karan, severity aur ghar pe safe steps — simple Hinglish mein. Verified info, doctor-reviewed guide by Dr. Shadab.',
  publishedAt: new Date('2026-05-19').toISOString(),

  whatIsThis: `Ek din achanak taang mein ek tez bijli jaisi dard — kamar se shuru hokar ghutne tak, kuch logon mein toh pair ke panje tak. Chalte waqt aur bhi zyada, baithte waqt thoda aaram — lekin chain kahan? Ye sciatica hai, aur India mein laakhon logon ko ye problem hoti hai, specially 30-55 saal ki age mein.

Sciatica koi bimari nahi — ye ek symptom hai. Iska matlab hai ki aapki body ki sabse lambi nerve — sciatic nerve — kisi wajah se dabav mein aa gayi hai. Ye nerve kamar se shuru hoti hai, neeche donon taangon mein jaati hai.

Ye page aapko 2 minute mein batayega: aapka dard serious hai kya, ghar pe kya karna chahiye, aur agli step kya honi chahiye.`,

  indiaContext: 'Ek estimate ke mutabiq India mein karib 10-15% adults apni zindagi mein kabhi na kabhi sciatic nerve pain experience karte hain — unme se zyada log desk job ya driving karne wale hain.',
  indiaContextSource: 'Indian Journal of Orthopaedics — Low Back Pain and Sciatica Review | 2022',

  severityLevel1: [
    'Dard ek hi taang mein hai, dono mein nahi',
    'Chalte-phirte ho pa rahe hain, roz ka kaam zyada affect nahi',
    'Dard 4-5 din se kam hai, pehli baar aaya hai',
    'Taang mein thodi si jhanjhanahat ya numbness hai lekin normal feel bhi aa rahi hai beech beech mein',
    'Lait jaane ya aaram karne se kuch relief milta hai',
  ],
  severityLevel2: [
    'Dard 2-3 hafte se zyada se chal raha hai, kam nahi ho raha',
    'Taang mein kaafi zyada numbness — puri taang ya foot numb sa lagta hai',
    'Seedha khada hona ya chalna mushkil ho raha hai',
    'Raat ko dard ke wajah se neend nahi aa rahi',
    'Dono taangon mein dard hai ya dard ek taang se doosri taang mein shift ho raha hai',
  ],
  severityLevel3: [
    'Taang mein itni weakness aa gayi ki pair utha nahi pa rahe ya chalna band ho gaya (foot drop)',
    'Peshab ya potty pe control kho raha hai — ye spinal emergency hai, ek minute bhi mat ruko',
    'Dard ke saath bukhaar bhi hai aur kamar mein swelling hai',
    'Kisi accident ya girne ke baad ye dard shuru hua hai',
  ],

  timeline3Days: 'Aksar muscle spasm ya ek sudden movement se nerve temporarily irritate ho jaati hai. Body khud heal karne ki koshish kar rahi hoti hai. Rest karo, aaram karo. Agar 5 din mein better nahi hua to Level 2 mein aao.',
  timeline4Weeks: 'Ye signal hai ki cause kuch aur hai — disc ya bone spur nerve ko daba raha hoga. Doctor se milna zaruri hai — imaging (X-ray ya MRI) se pata chalega exactly kya ho raha hai. Khud manage karne ki koshish mein aur der mat karo.',
  timelineMonthPlus: 'Ye chronic sciatica hai. Iska matlab sirf dard band karna kaafi nahi hoga — underlying cause treat karna hoga. Doctor zaruri hai. Homeopathy is stage mein constitution ke hisaab se kaam karti hai — dard ki pattern, triggers, aur aapki overall health sab milake treatment decide hoti hai.',

  lifestyleCauses: [
    {
      _key: 'lc1',
      causeName: 'Zyada Der Tak Baithna — Galat Posture Mein',
      mechanism: 'Sciatic nerve kamar ke nichle hisse (L4-S1 vertebrae) se nikalti hai. Jab hum ghanton tak ek hi position mein baithe rehte hain — specially jhukke ya spine ko support diye bina — to in vertebrae ke beech ka pressure unequal ho jaata hai. Iss se disc ka soft material ek taraf shift hota hai aur nerve root pe dabav dalta hai. Ye process hafte aur mahine ki galat seating se hoti hai.',
      howToIdentify: 'Dard aksar din ke end mein ya lambe time tak chair pe baithne ke baad shuru hota hai. Office workers, drivers, aur students mein sabse common.',
    },
    {
      _key: 'lc2',
      causeName: 'Zyada Wajan Uthana — Galat Technique Se',
      mechanism: 'Jab koi bhaari cheez uthate waqt ghutne nahi modte, sirf kamar jhukate hain — to lumbar spine pe sudden enormous pressure padta hai. Ye disc ko "herniate" kar sakta hai ek baar mein hi, ya slow wear create karta hai. Uthate waqt jo "click" ya "pop" feel hoti hai aksar, wo isi ka signal hota hai.',
      howToIdentify: 'Dard ek specific incident ke baad shuru hua — kuch uthate waqt, ya achanak jhukne par.',
    },
    {
      _key: 'lc3',
      causeName: 'Piriformis Muscle Tighten Hona',
      mechanism: 'Piriformis ek chhota muscle hai jo buttock mein hota hai. Sciatic nerve is muscle ke neeche se ya kuch logon mein iske beech se gujarti hai. Jab ye muscle tight ya spasm mein hota hai — exercise ke baad, ya zyada der tak ek position mein baithe rehne se — ye seedha sciatic nerve ko compress karta hai.',
      howToIdentify: 'Dard buttock (neeche ki taraf) mein zyada hota hai. Cross-legged baithne ya stairs chadne par badhta hai.',
    },
    {
      _key: 'lc4',
      causeName: 'Pregnancy',
      mechanism: 'Pregnancy mein baby ka weight aur uterus ka badna pelvic area mein sciatic nerve pe direct pressure dalta hai. Saath hi, relaxin hormone (jo delivery ke liye joints ko dhela karta hai) spinal stability ko kum karta hai — isse nerve irritation aur badh jaata hai.',
      howToIdentify: 'Dard usually 2nd-3rd trimester mein shuru hota hai. Ek hi taraf zyada hota hai. Delivery ke baad aksar khud theek ho jaata hai.',
    },
  ],

  medicalCauses: [
    {
      _key: 'mc1',
      diseaseName: 'Slip Disc (Disc Bulge / Herniated Disc)',
      diseaseHindiName: 'Disc Khisak Jana',
      howSymptomPresents: 'Reedh ki haddi ke vertebrae ke beech cushion (disc) hote hain. Jab disc ka andar ka soft material bahar nikal aata hai, to wo seedha sciatic nerve root ko daba sakta hai. Ye sciatica ka sabse common medical cause hai — 80-85% cases mein yehi hota hai.',
      howToIdentify: 'Dard tez aur bijli jaisa hota hai. Aage jhukne par aur zyada bhadta hai. Seedha pair uthane (Straight Leg Raise) se dard bhadta hai.',
      homeopediaSlug: 'disc-bulge',
      isAvailable: true,
    },
    {
      _key: 'mc2',
      diseaseName: 'Lumbar Spondylosis',
      diseaseHindiName: 'Kamar Ki Haddiyon Ka Ghisna',
      howSymptomPresents: 'Badhti umar ke saath vertebrae pe bone spurs (extra bone growth) banna shuru hote hain. Ye bony projections sciatic nerve ke exit points ko narrow kar dete hain — isse chronic, dull-aching sciatica hoti hai jo slowly worse hoti jaati hai.',
      howToIdentify: '45+ age group mein zyada. Dard aane-jaane wala hota hai. X-ray mein dikhta hai.',
      homeopediaSlug: '',
      isAvailable: false,
    },
    {
      _key: 'mc3',
      diseaseName: 'Spinal Stenosis',
      diseaseHindiName: 'Reedh ki Haddi Ki Nali Ka Sankra Hona',
      howSymptomPresents: 'Spinal canal (wo jagah jahan se nerves gujarti hain) ka narrow hona — jo zyada umar mein hota hai — nerve roots pe pressure dalta hai. Isme dard walk karte waqt aata hai aur ruk kar baithne se better hota hai.',
      howToIdentify: '50+ age. Thodi door chalte hi dard shuru — ruko to theek, chalo to phir shuru. Seedhe khade rehne mein bhi takleef.',
      homeopediaSlug: '',
      isAvailable: false,
    },
    {
      _key: 'mc4',
      diseaseName: 'Piriformis Syndrome',
      diseaseHindiName: 'Piriformis Muscle Ki Samasya',
      howSymptomPresents: 'Jab piriformis muscle chronically tight ya inflamed hota hai, ye sciatic nerve ko continuously compress karta hai. Ye "pseudo-sciatica" bhi kehlaata hai kyunki MRI mein disc problem nahi dikhti — fir bhi dard same hota hai.',
      howToIdentify: 'Buttock mein zyada dard. MRI normal hota hai lekin pain hoti hai. Long-distance runners aur cyclists mein common.',
      homeopediaSlug: '',
      isAvailable: false,
    },
    {
      _key: 'mc5',
      diseaseName: 'Degenerative Disc Disease',
      diseaseHindiName: 'Disc Ka Dheere Dheere Ghisna',
      howSymptomPresents: 'Age ke saath discs mein se fluid kam hota jaata hai — ye patelee ho jaati hain aur shock absorb nahi kar paatein. Is wajah se vertebrae ek doosre ke paas aa jaate hain aur nerve roots pe dabav badhta hai.',
      howToIdentify: 'Dard roz ka roz thoda badh raha hota hai. Morning stiffness zyada hoti hai. 40+ age mein common.',
      homeopediaSlug: '',
      isAvailable: false,
    },
  ],

  redFlags: [
    'Cauda Equina Syndrome — agar saath mein peshab/potty control jaaye, ya dono taangon mein ek saath numbness ho, to ye emergency hai. Turant hospital jaao — wait karne pe permanent damage ho sakta hai.',
    'Spinal Tumor ya Infection — agar dard ke saath unintended weight loss ho, raat ko fever aaye, ya recent cancer history ho — to ye serious cause rule out karna zaroori hai. Doctor se milein, imaging karwao.',
    'Fracture (Traumatic) — accident, girne, ya kisi sports injury ke baad agar kamar aur taang mein dard ho — seedha emergency mein jaao. Khud drive mat karo.',
  ],

  homeSteps: [
    {
      _key: 'hs1',
      action: 'Ice Aur Heat Alternation: Pehle 48-72 ghante ice pack (kapde mein wrap karke) 15-20 minute ke liye kamar ya buttock pe lagao — din mein 2-3 baar. Iske baad warm compress ya hot water bag se aaram milta hai.',
      whyItWorks: 'Ice inflammation aur nerve irritation kum karta hai pehle phase mein. Heat baad mein blood flow badhata hai aur muscle spasm loosen karta hai.',
    },
    {
      _key: 'hs2',
      action: 'Flat Mat Lait Jaao — Knees Pe Pillow Rakho: Straight lait ke ghutne thoda moda ke neeche ek pillow rakh lo. Ya phir floor pe lait ke pair chair pe rakh lo — 90-degree angle banaao.',
      whyItWorks: 'Ye position sciatic nerve pe pressure minimum karta hai — spine ka natural curve maintain hota hai aur disc ka pressure kam hota hai.',
    },
    {
      _key: 'hs3',
      action: 'Chalna Band Mat Karo — Lekin Carefully: Gentle walking (10-15 minute) din mein 2 baar karni chahiye. Jhukna, bhaari uthana, aur seedi chadna avoid karo is dauraan.',
      whyItWorks: 'Complete rest se muscles stiff ho jaate hain aur recovery slower hoti hai. Gentle movement blood flow aur natural healing badhata hai.',
    },
    {
      _key: 'hs4',
      action: 'Baithne Ki Jagah Change Karo: Soft sofa pe ghanton mat baitho — firm chair use karo jisme back support ho. Har 30-40 minute mein ek baar utho aur thoda walk karo ya khade raho.',
      whyItWorks: 'Soft surface par disc ka pressure uneven hota hai aur nerve irritation badhti hai. Firm support spine ko neutral position mein rakhta hai.',
    },
    {
      _key: 'hs5',
      action: 'Sone Ki Position Dekho: Side pe soye — dono ghutno ke beech ek pillow rakh ke. Pet ke baal bilkul mat soye.',
      whyItWorks: 'Side position spine ko aligned rakhti hai aur sciatic nerve pe pressure minimum hota hai raat bhar. Pet ke baal sona lumbar curve bigadti hai aur sciatica worse ho sakti hai.',
    },
  ],

  homeopathyIndividualization: 'Sciatica ka naam ek hai — lekin aapka sciatica alag hai. Kisi ko dard raat ko zyada hota hai, kisi ko chalte waqt, kisi ko thand se better hota hai aur kisi ko garm se. Kisi ko dard seedhi taang mein hota hai, kisi ko buttock mein zyada. Homeopathy mein sirf "sciatica hai" nahi dekha jaata — aapka dard kaisa hai, kab badhta hai, kya se thodi rahat milti hai — ye sab milake treatment decide hoti hai. Is wajah se do patients jo same "sciatica" lekar aate hain, unka treatment bilkul alag ho sakta hai.',
  homeopathyRootCause: 'Baar baar aane wala sciatica aksar ek deeper structural ya constitutional imbalance ka signal hota hai — sirf dard band karna usse address nahi karta. Homeopathy mein goal ye hota hai ki jo cheez baar baar nerve irritation la rahi hai — chahe wo disc ka issue ho, muscle tension ho, ya chronic posture ki wajah se — usse address kiya jaaye. Waqt ke saath episodes ki frequency aur intensity dono kam hoti hain. Research is area mein limited hai aur results individual hote hain.',
  homeopathySafety: 'Sciatica ke bahut se patients aur medicines bhi chal rahi hoti hain — blood pressure, diabetes, ya doosri problems ke liye. Homeopathy unke saath safely use ho sakti hai kyunki interaction ka risk practically nahi hota. Pregnancy mein bhi, jab painkillers lena risky hota hai, homeopathy ek safe complementary option hai. Zaruri baat: Severe sciatica (foot drop, bladder issues) ya surgical cases mein conventional treatment pehle aana chahiye. Homeopathy complementary role mein hai — replacement nahi.',

  isForYouIf: [
    'Aap root cause treat karna chahte hain — sirf dard band karne wali medicines pe depend nahi rehna chahte',
    'Aapko chronic, baar baar aane wala sciatica hai',
    'Pregnancy mein hain ya doosri medicines ke saath safe option chahiye',
    'Surgery ke baad recovery mein support chahiye',
  ],
  notForYouIf: [
    'Aapko Level 3 wale signs hain (foot drop, bladder issues) — pehle emergency conventional treatment lein, homeopathy baad mein saath chala sakte hain',
    'Confirmed surgical case hai — pehle surgeon se milein, surgery ke baad homeopathy recovery mein help kar sakti hai',
  ],

  homeopathyDiseaseLinks: [
    { _key: 'hdl1', diseaseName: 'Disc Bulge / Slip Disc (Disc Khisak Jana)', diseaseSlug: 'disc-bulge' },
  ],

  linkedDiseaseCards: [
    { _key: 'ldc1', title: 'Disc Bulge', hindiName: 'Disc Khisak Jana / Slip Disc', slug: 'disc-bulge' },
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Sciatica ka sabse common karan kya hai?',
      answer: 'Sciatica ka sabse common karan slip disc (herniated disc) hai — 80-85% cases mein yehi hota hai. Reedh ki haddi ke vertebrae ke beech jo cushion hota hai (disc), wo apni jagah se bahar nikal aata hai aur sciatic nerve ko daba deta hai — tab ye bijli jaisi dard taang mein utarti hai. Iske alawa commonly: Piriformis muscle ka tight hona (buttock area mein). Lumbar spondylosis (bone spurs jo nerve dabbate hain). Pregnancy mein baby ka weight nerve pe. Agar exact cause jaanna ho to doctor se milein — aksar ek physical test (Straight Leg Raise) aur kabhi kabhi MRI se confirm hota hai.',
      faqType: 'general',
    },
    {
      _key: 'faq2',
      question: 'Sciatica normal hai ya serious — kaise samjhein?',
      answer: 'Zyada tar sciatica temporary hoti hai aur 4-6 hafte mein better ho jaati hai — ye normal hai. Ye signs hon to serious nahi: Ek hi taang mein dard, chalte-phirte ho pa rahe ho. Dard naya hai (1 hafte se kam). Rest se kuch relief milti hai. Ye signs hon to doctor zaroori hai: Taang mein itni weakness ki pair utha nahi pa rahe. Peshab ya potty pe control kho raha hai — ye emergency hai. Dard 4-6 hafte se zyada chal raha hai aur worse ho raha hai. Dono taangon mein numbness ek saath. Serious signs mein ek minute mat ruko — turant doctor ya emergency room jaao.',
      faqType: 'general',
    },
    {
      _key: 'faq3',
      question: 'Sciatica kitne din tak rehta hai?',
      answer: 'Zyada tar acute sciatica 4-6 hafte mein better hoti hai sahi rest aur care se. Kuch lucky logon ko 1-2 hafte mein hi rahat mil jaati hai. Lekin ye factors duration badhate hain: Bhaari disc herniation ya bone spur. Kaam jaari rakhna — rest nahi lena. Cause treat nahi karna — sirf dard ki medicine lena. Agar 6 hafte ke baad bhi significant improvement nahi hai to doctor se zaroor milein — imaging karwani chahiye. Chronic sciatica (3 mahine se zyada) mein conventional aur complementary dono approaches milake behtar results deti hain.',
      faqType: 'general',
    },
    {
      _key: 'faq4',
      question: 'Sciatica mein ghar pe kab tak reh sakte hain?',
      answer: 'Agar ye signs hain to ghar pe 3-5 din manage kar sakte hain: Dard nayi hai (1 hafte ke andar). Taang mein koi major weakness nahi. Peshab-potty normal hai. Chalte-phirte ho pa rahe hain. Ghar pe kya karein: ice/heat, firm surface pe rest, gentle walking, sone ki position theek karo. Agar 5 din mein clearly better nahi hua, ya koi bhi Level 2-3 sign dikhein — doctor ke paas jaao. Sciatica mein "wait and watch" sirf Level 1 cases ke liye hai — serious signs mein nahi.',
      faqType: 'general',
    },
    {
      _key: 'faq5',
      question: 'Raat ko sciatica ka dard zyada kyun hota hai?',
      answer: 'Raat ko sciatica ka dard is liye badhta hai kyunki: Sone ki galat position nerve pe aur pressure daal sakti hai — specially pet ke baal sona ya without support sofa pe soye rehna. Din bhar uthte-baithte kuch movement hoti rehti hai — raat mein ek hi position mein ghanton tak rehte hain to pressure constant rehta hai. Cortisol hormone (jo natural inflammation control karta hai) raat mein kam hota hai — isliye pain perception zyada ho sakti hai. Kya karein: Side pe soye, dono ghutno ke beech pillow rakh ke. Flat surface pe soye — mattress na bahut hard na bahut soft.',
      faqType: 'general',
    },
    {
      _key: 'faq6',
      question: 'Kya homeopathy se sciatica theek hoti hai?',
      answer: 'Homeopathy sciatica mein kaam karti hai — lekin seedha ye kehna ki "hamesha theek hoti hai" honest nahi hoga, aur jo bhi ye claim kare use doubt karo. Jo realistic hai: Homeopathy sciatica ke episodes ki frequency aur intensity ko over time kam karne mein madadgar rahi hai — especially chronic ya recurrent cases mein. Sirf dard band karne ke bajaye underlying nerve sensitivity aur inflammation ko address kiya jaata hai. Do patients jinhe same "sciatica" hai — unka treatment alag ho sakta hai homeopathy mein, is baat par depend karta hai ki dard kaisa hai, kab badhta hai, aur overall health kaisi hai. Agar surgical cause hai (severe disc prolapse, spinal stenosis advanced) to pehle specialist se milein — homeopathy surgery ke baad recovery mein saath chal sakti hai.',
      faqType: 'homeopathy',
    },
    {
      _key: 'faq7',
      question: 'Sciatica mein kaunsa test karwana chahiye?',
      answer: 'Doctor pehle physical examination karte hain — Straight Leg Raise (SLR) test, jisme straight pair uthate hain aur dard badhna nerve compression confirm karta hai. Imaging tests: X-Ray — Bone spurs, spondylosis, fracture dikhata hai. MRI — Disc herniation, nerve compression clearly dikhta hai — sciatica ka best diagnostic tool. CT Scan — Agar MRI possible nahi to alternative. Nerve conduction study (NCS/EMG): Agar nerve damage hone ki shanka ho — ye test nerve ki working assess karta hai. Ghar pe ye test mat try karo apne aap — physical examination galat tarike se karne se dard worse ho sakti hai. Doctor se milein.',
      faqType: 'general',
    },
    {
      _key: 'faq8',
      question: 'Pregnancy mein sciatica normal hai kya?',
      answer: 'Haan, pregnancy mein sciatica bahut common hai — especially 2nd aur 3rd trimester mein. Baby ka badhta weight aur uterus ka pressure sciatic nerve pe padta hai — isliye taang mein dard aur numbness hoti hai. Ye usually delivery ke baad khud theek hoti hai. Lekin ignore mat karo pregnancy mein: Agar dard bahut severe hai aur chalna mushkil ho. Agar dono taangon mein numbness ho. Agar bladder control affect ho. Pregnancy mein strong painkillers nahi leni chahiye — doctor se discuss karo safe options ke baare mein. Homeopathy is stage mein ek safe complementary option hai jo conventional treatment ke saath chal sakti hai, lekin kuch bhi lene se pehle apne gynecologist se baat karo.',
      faqType: 'general',
    },
    {
      _key: 'faq9',
      question: 'Young age mein sciatica kyun hoti hai — 20s mein?',
      answer: 'Ye sach mein zyada logon ko ho raha hai ab — 20s-30s mein sciatica baar baar sun ne mein aa rahi hai. Main wajah: Hours tak mobile ya laptop pe jhukke baithna. Gaming ya work-from-home culture — same chair pe 8-10 ghante. Zero physical activity — core muscles weak. Heavy bags — ek taraf se carry karna. Isme spine pe uneven pressure padta hai aur disc/nerves early wear hone lagte hain. Ye slow process hai — isliye 25 saal mein dard shuru hota hai to disc ka issue actually college time se shuru hua hota hai. Solution: Posture conscious hona, breaks lena, core strengthening exercises (doctor ki guidance mein), aur lamba kaam karne ki jagah ergonomic setup banana.',
      faqType: 'general',
    },
    {
      _key: 'faq10',
      question: 'Sciatica baar baar kyun aati hai?',
      answer: 'Sciatica baar baar aana iska matlab hai ki underlying cause address nahi hua — sirf dard ki medicines se symptom temporarily better hua, root problem wahin hai. Common reasons baar baar aane ke: Disc herniation ka poora heal nahi hona aur phir same movement se trigger hona. Core muscles weak rehna — spine ko support nahi. Galat posture ki aadat waapas aa jaana. Weight zyada rehna — spine pe constant load. Kya karna chahiye: Ek baar dard theek hone ke baad bhi physiotherapy aur core strengthening exercises karni chahiye — ye future episodes ko genuinely prevent karti hain. Sirf "dard nahi raha to sab theek hai" wali soch recurrence ki sabse badi wajah hai.',
      faqType: 'general',
    },
    {
      _key: 'faq11',
      question: 'Sciatica se hamesha ke liye kaise chutkara milega?',
      answer: '"Permanent cure" ka vaada koi bhi system honestly nahi kar sakta — aur koi kare to doubt karo. Jo realistic hai: Acute sciatica (first time, clear trigger): 80-90% logon mein sahi treatment se completely better ho jaati hai. Chronic ya recurrent sciatica: Frequency aur intensity bahut kam ho sakti hai — practically normal life possible hai — lekin lifestyle changes saath rakhne honge. Kya genuinely help karta hai long term: Cause diagnose karke treat karna. Core muscles strong rakhna. Posture correct karna — daily habit banana. Weight manage karna agar zyada hai. Regular gentle movement — sedentary life avoid karna. Homeopathy chronic cases mein constitutional treatment se long-term improvement mein madadgar rahi hai — results individual hote hain aur time lagta hai.',
      faqType: 'general',
    },
    {
      _key: 'faq12',
      question: 'Sciatica mein kaunsa doctor dikhana chahiye?',
      answer: 'Shuruaat ke liye General Physician (GP) ya Family Doctor se milein — wo refer kar denge sahi specialist ko. Specialists: Orthopedic Surgeon — Disc aur bone related causes ke liye. Neurologist — Nerve damage ya complex nerve conditions mein. Physiotherapist — Exercises aur rehabilitation ke liye. Homeopathic Doctor (BHMS/MD) — Complementary management aur chronic cases ke liye. Agar foot drop ya bladder issues hain — seedha emergency room ya spine surgeon ke paas jaao bina GP ke bhi.',
      faqType: 'general',
    },
  ],

  relatedSymptoms: [
    { _key: 'rs1', name: 'Lower Back Pain', hindiName: 'Kamar Dard', slug: 'lower-back-pain' },
    { _key: 'rs2', name: 'Leg Numbness', hindiName: 'Taang Mein Sunn Hona', slug: 'leg-numbness' },
    { _key: 'rs3', name: 'Hip Pain', hindiName: 'Kadhe Ka Dard', slug: 'hip-pain' },
    { _key: 'rs4', name: 'Foot Tingling', hindiName: 'Panje Mein Jhanjhanahat', slug: 'foot-tingling' },
  ],

  sources: [
    { _key: 'src1', name: 'Mayo Clinic — Sciatica: Symptoms and Causes', year: '2024', url: 'https://www.mayoclinic.org/diseases-conditions/sciatica/symptoms-causes/syc-20377435' },
    { _key: 'src2', name: 'NHS UK — Sciatica', year: '2023', url: 'https://www.nhs.uk/conditions/sciatica/' },
    { _key: 'src3', name: 'NCBI / PubMed — Epidemiology and Natural History of Sciatica', year: '2021', url: 'https://pubmed.ncbi.nlm.nih.gov/20453722/' },
    { _key: 'src4', name: 'Indian Journal of Orthopaedics — Prevalence of Low Back Pain and Sciatica in India', year: '2022', url: 'https://www.ijoonline.com/' },
  ],

  quickFactSymptom: 'Sciatic nerve body ki sabse lambi nerve hai — kamar se pair ke panje tak jaati hai. Is nerve pe dabav aane se hi sciatica hoti hai.',
  quickFactIndiaStats: 'Estimated 10-15% adults India mein apni life mein kabhi na kabhi sciatic nerve pain experience karte hain — desk job aur driving wale sabse zyada affected.',
  quickFactDoctorWhen: 'Foot drop ya bladder control loss ho to ye medical emergency hai — ek minute bhi mat ruko.',

  reviewDate: '2026-05',
}

async function seed() {
  console.log('🌱 Seeding Sciatica symptom page...')
  await client.createOrReplace(doc)
  console.log('✅ Symptom seeded — homeopedia.in/symptoms/sciatica')
}

seed().catch(console.error)
