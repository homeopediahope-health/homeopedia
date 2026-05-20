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
  _id: 'symptom-excessive-sweating',
  _type: 'symptom',
  title: 'Excessive Sweating (Zyada Paseena)',
  hindiName: 'Zyada Paseena / Hyperhidrosis',
  slug: { _type: 'slug', current: 'excessive-sweating' },
  bodySystem: 'Skin',
  shortDescription: 'Bina khaas wajah ke bahut zyada paseena aana — haath, pair, underarms ya poore badan mein. Kisi underlying cause ka signal bhi ho sakta hai.',
  metaTitle: 'Excessive Sweating — Karan, Ilaaj aur Homeopathy',
  metaDescription: 'Zyada paseena aana (excessive sweating) ke karan, severity aur ghar pe safe steps. Verified Hinglish guide, Dr. Shadab reviewed.',
  reviewDate: 'May 2026',

  heroText: `Kabhi kabhi itna paseena aata hai ki kapde bheeg jaate hain — bina koi khaas mehnat ke, bina garmi ke, bas yun hi. Haath itne geele rehte hain ki kisi se milte waqt sharmindagi hoti hai, ya raat ko neend ke dauran chaadar tak bheeg jaati hai. Ye sirf "garmi zyada hai" wala mamla nahi hota — ye body ka koi signal bhi ho sakta hai.

Zyada paseena aana, jise medical mein Hyperhidrosis kehte hain, India mein ek bahut common problem hai. WHO ke data ke mutabiq globally karib 4-5% log clinical hyperhidrosis se affected hain — aur India mein high humidity aur garm climate ki wajah se ye numbers aur zyada hain.

Ye page aapko 2 minute mein batayega: aapka case normal hai ya serious, kab doctor ke paas jaana chahiye, aur ghar pe kya kar sakte hain.`,

  severityScale: {
    level1: {
      label: 'Ghar Pe Manage Karo',
      signs: [
        'Sirf garmi mein ya exercise ke waqt zyada paseena aata hai',
        'Haath ya pair thode geele rehte hain lekin kaam mein rukawat nahi',
        'Raat ko kabhi kabhi paseena aata hai lekin baar baar nahi',
        'Paseene ki koi khaas badbu nahi — sirf normal paseene jaisa',
        'Ye problem pehle bhi hoti thi — mausam badla to theek ho jaati hai',
      ],
    },
    level2: {
      label: 'Is Hafte Doctor Se Milein',
      signs: [
        'Paseena itna zyada hai ki daily kaam mein problem ho rahi hai — kapde baar baar badalne padte hain',
        'Raat ko regularly itna paseena aata hai ki neend kharab ho rahi hai',
        'Sirf ek jagah — jaise sirf sir ya sirf haath — bahut zyada paseena aata hai',
        'Paseane ki badbu bahut tej ho gayi hai achanak',
        'Ye problem 2 hafte se zyada se hai aur khud se thik nahi hui',
        'Doosri medicines chal rahi hain aur tab se paseena zyada ho gaya hai',
      ],
    },
    level3: {
      label: 'Turant Hospital Jaao',
      signs: [
        'Zyada paseane ke saath seene mein dard ya dil ka tez ya ulsul dhakna',
        'Paseana + chakar + behoshi jaisi feeling ek saath',
        'Raat ko baar baar paseana + bina wajah bahut zyada weight kam hona',
        'Paseana + haath pair ka kaanpna + aankhon mein kuch ajeeb dikhna',
      ],
    },
  },

  timeline: [
    {
      duration: 'Nayi Takleef — 1 se 3 Din',
      advice: 'Agar ye achanak shuru hua hai — kisi naye khaane ke baad, ya koi nayee medicine shuru ki hai, ya bahut stress mein ho — to body kisi change pe react kar rahi hai. 1-2 din observe karo. Koi clear trigger dikh raha hai to woh hata ke dekho. Agar 3 din mein better na ho ya koi aur sign aaye to Level 2 pe jaao.',
    },
    {
      duration: 'Chalti Aa Rahi — 1 se 4 Hafte',
      advice: 'Ye signal hai ki issue temporary nahi hai. Body koi message de rahi hai. Agar Severity Level 1 mein aate ho to lifestyle check karo. Agar Level 2 ke koi signs hain to is hafte hi doctor se milo — kyunki 1-4 hafte mein agar khud se theek na ho to underlying cause dhundhna padta hai.',
    },
    {
      duration: 'Purani Problem — 1 Mahina Ya Zyada',
      advice: 'Ye chronic case hai. Iska matlab ye nahi ki kuch bahut bura hai — lekin iska matlab ye zaroor hai ki body khud se isko theek nahi kar payi. Doctor se milna zaroori hai, aur agar aap long-term solution chahte hain to homeopathy is jagah effective hai kyunki ye root cause pe kaam karta hai na ki sirf paseena rokne pe.',
    },
  ],

  lifestyleCauses: [
    {
      title: 'Stress aur Anxiety',
      recognition: 'Paseena tab zyada hota hai jab worried ya nervous ho — normal temperature mein bhi. Haath aur underarms zyada affected hote hain.',
      description: 'Jab hum darr jaate hain ya bahut nervous hote hain, brain ek "fight or flight" response activate karta hai. Is response mein Sympathetic Nervous System body ko "ready" karta hai — aur body ko cool karne ke liye sweat glands activate ho jaate hain. Ye apocrine sweat glands hote hain jo mostly underarms, haath aur pair mein hote hain. Isliye exam se pehle ya kisi important meeting mein haath paseena aate hain.',
    },
    {
      title: 'Garam Aur Masaledar Khaana',
      recognition: 'Mirch ya garm khaane ke time ya turant baad paseana aata hai — mainly chehre pe ya sar pe.',
      description: 'Capsaicin — mirch mein jo cheez hoti hai — ek receptor activate karta hai jise TRPV1 kehte hain. Ye wahi receptor hai jo heat yani garmi ke liye bhi respond karta hai. Brain confuse ho jaata hai aur samajhta hai ki body ka temperature badh gaya — aur paseena shuru ho jaata hai use cool karne ke liye. India mein masaledar khaana bahut common hai — isliye khane ke baad paseana bhi.',
    },
    {
      title: 'Zyada Weight (Obesity)',
      recognition: 'Thodi si mehnat ya thodi si garmi mein bhi bahut zyada paseena. Exercise ya seedhi chadhne mein bahut zyada paseana normal logo se zyada.',
      description: 'Zyada body fat ek insulation ki tarah kaam karta hai — body ki garmi bahar nahi nikal paati asaani se. To body ko aur mehnat karni padti hai khud ko cool karne ke liye, matlab zyada sweat glands activate hote hain. Saath hi, zyada weight ke saath chhote chhote kaam bhi body ke liye zyada effort hote hain — jisse temperature aur badhta hai.',
    },
    {
      title: 'Kuch Medicines ka Side Effect',
      recognition: 'Nayee medicine shuru ki aur 1-2 hafte mein paseena badh gaya. Medicine rokne ke baad (sirf doctor ki salah se) wapas thik hota hai.',
      description: 'Kuch common medicines — jaise antidepressants, blood pressure ki kuch dawaiyan, diabetes ki medicines, ya hormonal supplements — sweat glands ko affect kar sakti hain. Ye ya to directly sweat glands stimulate karte hain ya body ke temperature regulation system ko disrupt karte hain.',
    },
  ],

  medicalCauses: [
    {
      diseaseName: 'Hyperthyroidism',
      diseaseHindiName: 'Thyroid Ki Zyada Activity',
      diseaseSlug: 'hyperthyroidism',
      isAvailable: true,
      description: 'Thyroid gland zyada hormone banata hai to body ka metabolism tez ho jaata hai — jaisa ki engine overdrive mein ho. Ye extra energy heat ke roop mein nikalta hai — aur body is heat ko control karne ke liye zyada paseana produce karta hai. Paseana usually poore body pe hota hai aur garm mausam mein bahut zyada badh jaata hai.',
      recognition: 'Paseane ke saath dil tez dhadkta hai, haath kaanpte hain, neend kharab hoti hai, bina diet ke weight kam hota hai, aur baar baar bathroom jaana padta hai.',
    },
    {
      diseaseName: 'Diabetes (Madhumeh)',
      diseaseHindiName: 'Madhumeh / Sugar',
      diseaseSlug: '',
      isAvailable: false,
      description: 'Jab blood sugar zyada gir jaata hai — jo diabetes ke patients mein ho sakta hai — to body nervous system ke zariye sweat glands ko activate karti hai is signal ke taur pe. Ye "hypoglycemic sweating" hai. Raat ko zyada hota hai jab khaane ke baad kuch der mein sugar zyada gir sakti hai.',
      recognition: 'Paseane ke saath chakar, kamzori, haath pair kaanpna, aur meetha khaane ki ichha.',
    },
    {
      diseaseName: 'Menopause',
      diseaseHindiName: 'Rajaswala Bandh Hona',
      diseaseSlug: 'menopause',
      isAvailable: true,
      description: 'Oestrogen hormone kam hone se brain ka hypothalamus — jo body temperature control karta hai — zyada sensitive ho jaata hai. Chhoti si temperature change pe bhi ye "hot flash" aur paseena produce karta hai. Raat ko bahut zyada hota hai — jise "night sweats" kehte hain.',
      recognition: '45-55 saal ki mahila, periods irregular ya band hone wale hain, achanak garmi ki wave aati hai aur fir paseena. Sirf raat ko ya din mein bhi ho sakta hai.',
    },
    {
      diseaseName: 'Anxiety Disorder',
      diseaseHindiName: 'Chronic Ghabrahaat',
      diseaseSlug: 'anxiety',
      isAvailable: true,
      description: 'Continuous anxiety mein body ka stress response system hamesha "on" rehta hai. Cortisol aur adrenaline hormones baar baar sweat glands ko signal bhejte hain. Ye secondary hyperhidrosis hai — aksar haath, pair aur underarms mein zyada hota hai.',
      recognition: 'Paseana aur ghabrahaat saath saath aate hain. Zyada sochte ho, buri cheezein anticipate karte ho, raat ko neend mein takleef — in sab ke saath paseana bhi zyada.',
    },
    {
      diseaseName: 'Primary Hyperhidrosis',
      diseaseHindiName: 'Sweat Glands Ki Bimari',
      diseaseSlug: '',
      isAvailable: false,
      description: 'Ye ek condition hai jahan sweat glands overactive hote hain bina kisi underlying bimari ke. Ye genetic hoti hai aur usually haath, pair, underarms ya sar pe sirf ek ya do jagah zyada hoti hai. Neend mein nahi hota — ye diagnosis ka ek key point hai.',
      recognition: 'Haath ya pair hamesha geele rehte hain — bina stress ya garmi ke bhi. Family mein bhi kisi ko ye hoti hai. Stress se aur badh jaata hai lekin stress hata ke bhi rahta hai. Raat ko nahi hota.',
    },
  ],

  redFlags: [
    'Tuberculosis (TB) — agar raat ko baar baar paseena ho + bina wajah weight kam ho + khaansi zyada aaye to turant doctor — ye TB ka classic sign hai.',
    'Lymphoma ya koi blood cancer — raat ko paseana + bina wajah fatigue + lymph nodes mein sujan (gardan, kaanch, ya kaankhon mein ganth) — ek minute mat ruko, blood test karwao.',
    'Severe Infection ya Sepsis — agar bukhaar ke saath bahut zyada paseana + kaanpna + confusion ho to ye medical emergency hai — turant hospital.',
  ],

  homeSteps: [
    {
      step: 'Loose aur Breathable Kapde Pehnein',
      reason: 'Tight synthetic kapde air circulation rokate hain aur body ki heat bahar nahi nikal paati. Cotton ya linen jaise breathable fabric hawa jaane dete hain — skin ka temperature naturally regulate hota hai aur sweat glands ko utna kaam nahi karna padta.',
    },
    {
      step: 'Pani Ki Matra Badhao — Thoda Thoda Baar Baar',
      reason: 'Jab body hydrated rehti hai to usse temperature regulate karne ke liye utna effort nahi karna padta. Ek baar bahut zyada pani pine ki jagah har ghante thoda thoda pani pina body ko steady state mein rakhta hai.',
    },
    {
      step: 'Paseane Wali Jagah Saaf Aur Dry Rakho',
      reason: 'Paseana khud zyada badbudar nahi hota — badbu tab aati hai jab skin pe bacteria paseane ke saath react karte hain. Affected area ko din mein 2 baar saaf paani se dhona aur dry rakhna infection aur badbu dono rokta hai.',
    },
    {
      step: 'Stress Ko Manage Karo — Deep Breathing Try Karo',
      reason: 'Stress directly sweat glands activate karta hai. Slow deep breathing (4 second mein saans andar, 4 mein bahar) body ke nervous system ko calm karta hai — sympathetic response kam hota hai aur paseena genuinely kam ho sakta hai kuch minutes mein.',
    },
    {
      step: 'Neend Poori Lo — Raat Mein Room Thanda Rakho',
      reason: 'Neend mein body temperature naturally thoda gir jaata hai — ye body ka natural process hai. Agar kamra zyada garam ho ya neend poori na ho to body is natural cool-down mein interfere karta hai. Raat ko fan ya AC se kamra comfortable rakhna aur 7-8 ghante ki neend night sweats mein kaafi fark dalti hai.',
    },
  ],

  homeopathyAngle1: 'Paseane ka naam ek hai — lekin har insaan ka paseana alag hota hai. Kisi ko sirf raat ko aata hai, kisi ko stress mein, kisi ko khane ke baad, kisi ko sirf haathon mein. Kisi ka paseana thanda hota hai, kisi ka garam. Kisi ko koi badbu nahi, kisi ko bahut tej. Homeopathy mein sirf "zyada paseena" nahi dekha jaata — aapka paseana kab aata hai, kahan aata hai, kaisa feel hota hai, kya se badhta hai aur kya se ghata hai — ye sab milke treatment decide karta hai. Isliye do logon ko ek hi symptom ho sakta hai aur unka treatment bilkul alag ho.',

  homeopathyAngle2: 'Baar baar aane wala zyada paseena aksar kisi deeper imbalance ka signal hota hai — thyroid ho sakta hai, anxiety ho sakti hai, hormonal change ho sakta hai, ya sweat glands ki apni problem. Homeopathy mein sirf paseana band karna goal nahi hota — jo cheez isko baar baar la rahi hai usse address kiya jaata hai. Waqt ke saath paseane ki frequency aur intensity dono kam hoti hain. Research is area mein limited hai aur results individual hote hain — lekin chronic hyperhidrosis mein constitutional approach kaafi logo mein helpful raha hai.',

  homeopathyAngle3: 'Jo log anxiety ya stress ki wajah se zyada paseane se pareshan hain, ya menopause ke dauran raat ko paseana aata hai — unke liye homeopathy ek safe complementary option hai jo conventional treatment ke saath saath chal sakti hai bina kisi side effect ke.',

  homeopathyIsFor: [
    'Aap paseane ki root cause treat karna chahte hain — sirf temporarily rokna nahi',
    'Chronic problem hai — 1 mahine se zyada se pareshan hain',
    'Side-effect free approach prefer karte hain — especially agar anxiety hai ya doosri medicines chal rahi hain',
    'Long-term, sustainable relief chahiye',
  ],

  homeopathyNotFor: [
    'Aapke signs Level 3 mein hain — pehle turant doctor se milein, homeopathy baad mein parallel chala sakte hain',
    'Paseana kisi surgical condition ki wajah se hai — pehle surgeon se milein',
  ],

  homeopathyDiseaseLinks: [
    { diseaseName: 'Hyperthyroidism', diseaseSlug: 'hyperthyroidism', diseaseHindiName: 'Thyroid Ki Zyada Activity' },
    { diseaseName: 'Anxiety Disorder', diseaseSlug: 'anxiety', diseaseHindiName: 'Chronic Ghabrahaat' },
    { diseaseName: 'Menopause', diseaseSlug: 'menopause', diseaseHindiName: 'Rajaswala Bandh Hona' },
  ],

  linkedDiseaseCards: [
    {
      diseaseName: 'Hyperthyroidism',
      diseaseHindiName: 'Thyroid Ki Zyada Activity',
      diseaseSlug: 'hyperthyroidism',
      isAvailable: true,
    },
    {
      diseaseName: 'Diabetes (Madhumeh)',
      diseaseHindiName: 'Sugar Ki Bimari',
      diseaseSlug: '',
      isAvailable: false,
    },
    {
      diseaseName: 'Menopause',
      diseaseHindiName: 'Rajaswala Bandh Hona',
      diseaseSlug: 'menopause',
      isAvailable: true,
    },
    {
      diseaseName: 'Anxiety Disorder',
      diseaseHindiName: 'Chronic Ghabrahaat',
      diseaseSlug: 'anxiety',
      isAvailable: true,
    },
    {
      diseaseName: 'Primary Hyperhidrosis',
      diseaseHindiName: 'Sweat Glands Ki Bimari',
      diseaseSlug: '',
      isAvailable: false,
    },
  ],

  faqs: [
    {
      question: 'Zyada paseena kab normal hota hai aur kab doctor zaroori hai?',
      answer: 'Garmi mein, exercise mein, ya zyada nervous hone pe paseena aana bilkul normal hai — ye body ka temperature control system hai.\n\nDoctor zaroori hai jab paseena bina kisi wajah ke aata ho — room thanda ho, aap rest mein hon aur phir bhi bahut zyada paseena. Raat ko baar baar paseana uthna, sirf ek jagah mein abnormal sweating, ya paseane ke saath dil tez dhadkna, weight kam hona, ya bahut thakaan — ye signs hain ki body kuch signal de rahi hai. Severity Scale ke Level 2 ya Level 3 ke koi bhi signs hain to ghar pe mat baithein.',
    },
    {
      question: 'Zyada paseana kitne waqt tak rehta hai?',
      answer: 'Ye completely depend karta hai cause pe. Agar stress ya garmi ki wajah se tha — cause hatane ke baad kuch din mein theek ho jaata hai. Agar koi underlying condition hai jaise thyroid ya diabetes — proper treatment shuru hone ke baad 4-8 hafte mein clearly fark dikhta hai. Primary hyperhidrosis — jo genetic hoti hai — mein ongoing management zaroori hoti hai.\n\nEk general rule: agar 2 hafte se zyada se paseena unusual amount mein aa raha hai aur khud theek nahi hua — doctor se milna chahiye.',
    },
    {
      question: 'Zyada paseane ki sabse common wajah kya hai?',
      answer: 'India mein do sabse common causes hain: pehla — Primary Hyperhidrosis, jahan sweat glands khud hi overactive hote hain, mostly haath, pair aur underarms mein. Doosra — Stress aur Anxiety, jo directly nervous system ke zariye sweat glands ko activate karta hai.\n\nMahilaon mein 45 saal ke baad Menopause ek bahut common cause hai raat ke paseane ka. Thyroid ki problem bhi common hai India mein.\n\nSabse common misconception: log sochte hain paseena sirf garmi ki wajah se hota hai — lekin zyada tar chronic cases mein garmi secondary factor hoti hai, primary cause kuch aur hota hai.',
    },
    {
      question: 'Females mein zyada paseana kyun hota hai?',
      answer: 'Mahilaon mein zyada paseane ke do main hormonal reasons hote hain. Pehla: Menstrual Cycle ke aas paas — hormones fluctuate hote hain jo body temperature regulation affect karta hai. Kuch mahilaon ko periods se pehle zyada paseana aata hai.\n\nDoosra aur zyada common: Menopause ya Perimenopause — jab oestrogen hormone kam hota hai to brain ka temperature center (hypothalamus) oversensitive ho jaata hai aur hot flashes aur raat ko paseana bahut common hote hain.\n\nTeen cheez check karo: age (45+), periods ka pattern, aur kya paseana achanak aata hai aur chala jaata hai. Agar in mein se koi match karta hai to gynecologist ya homeopathic doctor se milein.',
    },
    {
      question: 'Raat ko zyada paseana kyun aata hai?',
      answer: 'Raat ko paseana aana — jo "Night Sweats" kehlata hai — aksar garmi ki wajah se nahi hota. Teen main causes hain:\n\nPehla, Menopause mein hot flashes raat ko zyada hote hain. Doosra, kuch infections mein — jaise TB — raat ko paseana classic sign hai. Teesra, blood sugar zyada gir jaane pe — especially diabetes ke patients mein — raat ko paseana aata hai.\n\nAgar raat ko baar baar kapde bheeg jaayein, ya bina kisi obvious reason ke regularly aata ho — ye normal nahi hai. Ek hafte se zyada aisa ho to doctor se zaroor milein — blood test se zyada cases mein cause clear ho jaata hai.',
    },
    {
      question: 'Haathon aur pairon mein paseena kyun aata hai?',
      answer: 'Haath aur pair — aur underarms — mein jo sweat glands hote hain woh apocrine glands hote hain. Ye glands directly nervous system se connected hain — matlab emotions aur stress direct signal bhejte hain inhe. Isliye nervous hone pe, anxiety mein, ya exam se pehle haath aur pair mein paseana aata hai.\n\nSirf haath aur pair mein isolated sweating, especially bina kisi obvious trigger ke, Primary Hyperhidrosis ka sabse common sign hai. Ye genetic hoti hai — family mein kisi ko bhi hogi to check karo. Agar neend mein nahi hota — ye bhi Primary Hyperhidrosis ka indicator hai.',
    },
    {
      question: 'Kya homeopathy zyada paseane mein kaam karta hai?',
      answer: 'Haan, kuch cases mein homeopathy helpful raha hai — lekin honest answer ye hai ki results cause pe depend karte hain aur individual hote hain.\n\nJo cases mein homeopathy better kaam karta hai: stress ya anxiety ki wajah se paseana, hormonal imbalance se paseana (jaise menopause), aur chronic Primary Hyperhidrosis mein constitution-based treatment.\n\nHomeopathy ka fayda ye hai ki sirf paseana band nahi kiya jaata — jo cheez paseane ki wajah ban rahi hai usse address kiya jaata hai. Research is area mein limited hai. Ek realistic expectation: 4-8 hafte mein clearly fark dikhna shuru hona chahiye — agar nahi to approach review karna chahiye.',
    },
    {
      question: 'Bacchon mein zyada paseana kyun hota hai?',
      answer: 'Bacchon mein zyada paseana zyada tar do reasons se hota hai. Pehla: garmi ya exercise — jo bilkul normal hai. Doosra aur dhyan dene wala: raat ko baar baar paseana.\n\nBade bacchon mein agar raat ko baar baar paseana ho, wajan na badh raha ho, ya baar baar beemar padh rahe hon — ye signs hain ki ek baar pediatrician se milna chahiye.\n\nPrimary Hyperhidrosis bachpan ya teenage mein shuru ho sakti hai — agar school mein haathon ki wajah se sharmindagi ho rahi hai to is pe treatment possible hai.',
    },
    {
      question: 'Kya zyada paseana diabetes ka sign ho sakta hai?',
      answer: 'Haan, zyada paseana diabetes ka ek indirect sign ho sakta hai — lekin seedha nahi. Diabetes mein jab blood sugar zyada niche gir jaata hai (hypoglycemia), tab body ek emergency response deti hai — jisme paseana, kaanpna, aur chakar shamil hain. Ye aksar raat ko hota hai.\n\nAgar aapko ye sab hai: raat ko paseana + subah uthke bahut thakaan + zyada pyaas + baar baar bathroom — to blood sugar test zaroor karwao. India mein HbA1c test aur fasting blood sugar dono ek saath karwana better hai. Ye test affordable hain aur bahut kuch clear ho jaata hai.',
    },
    {
      question: 'Zyada paseana baar baar kyun aata hai — chronic kyun hoti hai ye problem?',
      answer: 'Zyada tar logo mein chronic excessive sweating is liye hoti hai kyunki woh cause treat nahi hota — sirf symptom manage karte hain. Example: agar anxiety ki wajah se paseana hai aur sirf deodorant zyada use kar rahe hain — anxiety thodi nahi hui to paseana wapas aa jaayega.\n\nDoosri wajah: Primary Hyperhidrosis mein sweat glands structurally overactive hote hain — bina proper treatment ke ye ongoing rehti hai. Teesri wajah: thyroid ya hormonal issue untreated — as long as hormones imbalanced hain, paseana aata rahega.\n\nLong-term solution ke liye: pehle cause diagnose karo, phir cause-specific treatment. Homeopathy mein constitutional treatment specifically is liye kaam karta hai — root cause pe focus karti hai.',
    },
    {
      question: 'Kya zyada paseana hamesha ke liye theek ho sakta hai?',
      answer: '"Permanent cure" ka vaada koi bhi system honestly nahi kar sakta — aur koi kare to doubt karo.\n\nJo realistic hai: zyada tar cases mein proper treatment se paseana significantly kam ho jaata hai — itna ki life practically normal ho jaati hai. Secondary hyperhidrosis mein (jaise thyroid ya diabetes ki wajah se) — underlying condition theek ho to paseana bhi control ho jaata hai. Primary Hyperhidrosis mein — completely cure nahi hoti lekin long-term management se life quality bahut behtar hoti hai.\n\nHomeopathy chronic cases mein recurrence kam karne mein helpful raha hai — lekin results individual hote hain aur 3-6 mahine ka realistic timeframe rakhna chahiye.',
    },
    {
      question: 'Kaun sa test karwana chahiye zyada paseane mein?',
      answer: 'Cause ke hisaab se test alag hote hain — lekin ek starting panel hai jo doctor usually suggest karte hain:\n- Thyroid Function Test (TFT) — T3, T4, TSH — thyroid check ke liye\n- Fasting Blood Sugar aur HbA1c — diabetes check ke liye\n- Complete Blood Count (CBC) — infection ya anemia check ke liye\n- Liver Function Test (LFT) — liver related sweating ke liye\n\nMahilaon mein (45+ saal): FSH aur LH test bhi — menopause confirm karne ke liye.\n\nAgar sab normal aate hain to doctor Primary Hyperhidrosis diagnose karte hain — iske liye koi specific blood test nahi hota, ye clinical diagnosis hai. Tests ka pura panel Rs. 500-1500 mein ho jaata hai India mein — pehle ek general physician se milein, woh bata denge exact tests.',
    },
  ],

  quickFacts: [
    'Excessive Sweating ka medical naam Hyperhidrosis hai — "hyper" matlab zyada, "hidros" matlab paseana.',
    'WHO data ke mutabiq globally 4-5% log clinical hyperhidrosis se affected hain — India mein actual numbers zyada hain high humidity ki wajah se.',
    'Raat ko baar baar paseana + bina wajah weight kam hona = turant doctor — ye TB ka classic sign bhi ho sakta hai.',
  ],

  relatedSymptoms: [
    { title: 'Weakness aur Fatigue (Thakaan)', slug: 'weakness-fatigue' },
    { title: 'Night Sweats (Raat Ko Paseana)', slug: 'night-sweats' },
    { title: 'Anxiety (Ghabrahaat)', slug: 'anxiety' },
    { title: 'Hair Loss (Baal Jharna)', slug: 'hair-loss' },
  ],

  sources: [
    { title: 'Mayo Clinic — Hyperhidrosis: Symptoms & Causes (2024)', url: 'https://www.mayoclinic.org/diseases-conditions/hyperhidrosis/symptoms-causes/syc-20367152' },
    { title: 'WHO — Global Disease Burden Data (2023)', url: 'https://www.who.int/news-room/fact-sheets' },
    { title: 'NCBI / PubMed — Etiologies of Hyperhidrosis, American Journal of Clinical Dermatology (2021)', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
    { title: 'NHS UK — Excessive Sweating (Hyperhidrosis): Treatment (2023)', url: 'https://www.nhs.uk/conditions/excessive-sweating-hyperhidrosis/' },
  ],
}

async function seed() {
  console.log('Seeding excessive-sweating...')
  const result = await client.createOrReplace(symptom)
  console.log('Done:', result._id)
}

seed().catch(console.error)
