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
  _id: 'symptom-memory-loss',
  _type: 'symptom',
  title: 'Memory Loss (Yaadaasht Ki Kamzori)',
  hindiName: 'Yaadaasht Ki Kamzori / Bhulakkadpan',
  slug: { _type: 'slug', current: 'memory-loss' },
  bodySystem: 'Neurological',
  shortDescription: 'Cheezein bhool jaana, naam yaad na rehna, ya haal hi ki baatein dimag se nikal jaana — aksar stress, neend ki kami ya kisi underlying bimari ka signal ho sakta hai.',
  metaTitle: 'Memory Loss (Yaadaasht Ki Kamzori) — Karan, Ilaj aur Homeopathy | HomeoPedia.in',
  metaDescription: 'Yaadaasht kamzor kyun hoti hai, kab doctor zaruri hai, aur ghar pe kya karo — simple Hinglish mein. Verified guide, Dr. Shadab reviewed.',
  reviewDate: 'May 2026',

  heroText: `Yaadaasht ki kamzori — cheezein rakh ke bhool jaana, gaadi ki chaabi dhundna, naam yaad na aana, ya kisi se kuch kaha tha aur bilkul nahi yaad — ye feeling kaafi log experience karte hain. Kabhi kabhi ye normal hai, kabhi kabhi ye body ka ek signal hai.

Dimag mein kya hota hai: Memory ek complex process hai jisme hippocampus (yaadaasht ka main center), prefrontal cortex (planning, decision making), aur neurotransmitters — sab milke kaam karte hain. Jab in mein kisi bhi cheez pe asar padta hai — neend, stress, thyroid, nutrition — yaadaasht ka asar dikh jaata hai.

Ek important distinction: Roz ki bhool — jaise ghar se nikal ke lock kiya ya nahi socha — ye normal hai. Lekin nayi baatein bilkul yaad na rehna, family ke logon ke naam bhool jaana, ya apne ghar ka rasta na maloom hona — ye serious signal hai.

India mein cognitive decline aur memory ke issues increasing hain — stress, screen time, neend ki kami, aur metabolic conditions (thyroid, diabetes) sab contribute karte hain. Acchi baat ye hai ki bahut baar memory ki problem reversible hoti hai — jab wajah treat hoti hai.`,

  severityScale: {
    level1: {
      label: 'Ghar Pe Manage Karo',
      signs: [
        'Aksar chaabi, phone ya chashma rakh ke bhool jaate ho — lekin dhundne pe mil jaata hai',
        'Kisi naam ya word ka "tip of tongue" pe hona — thodi der mein yaad aa jaata hai',
        'Bahut zyada kaam ya stress ke waqt concentration kam ho jaati hai',
        'Neend poori nahi hoti aur subah dimag fresh nahi lagta',
        'Ye problem 1-2 hafte se hai aur badhti nahi lag rahi',
      ],
    },
    level2: {
      label: 'Is Hafte Doctor Se Milein',
      signs: [
        'Haal hi ki baatein — kal kya khaaya, kisi se kya baat ki — bilkul yaad nahi rehti',
        'Kaam pe ya ghar pe aisa bhool jaana jo aapko pehle kabhi nahi hota tha',
        'Ek hi cheez baar baar bhool jaate ho — jaise medicine khaai ya nahi',
        '4 hafte se zyada ho gaya hai aur dimag aur zyada confused lagta hai',
        'Saath mein chakkar, sar dard ya mood mein bahut zyada badlav bhi hai',
      ],
    },
    level3: {
      label: 'Turant Doctor Ke Paas Jaao',
      signs: [
        'Ek dum se memory loss hua — stroke ya head injury ke baad — ye medical emergency hai',
        'Apna naam, ghar ka address, ya parivaar ke logon ke chehere nahi pehchante',
        'Ghar se nikal ke rasta bhool gaye — ya parichit jagah pe bhi kho gaye',
        'Saath mein ek taraf ka numbness, bolne mein takleef, ya behoshi — turant hospital',
      ],
    },
  },

  timeline: [
    {
      duration: 'Nayi Takleef — Pehli Baar Dhyan Aa Raha Hai (1-2 Hafte)',
      advice: 'Aksar ek stressful period ke baad, neend poori na hone par, ya koi nayi medicine shuru karne ke baad memory thodi kaafi weak lagti hai. Abhi panic mat karo — brain ke liye stress aur neend ki kami akele ek badi wajah hai. Level 1 steps follow karo: 7-8 ghante neend, pani, stress less. Agar 2-3 hafte mein better nahi hua to doctor se milna zaroori hai.',
    },
    {
      duration: 'Chalti Aa Rahi — 1 Se 3 Mahine Chal Raha Hai',
      advice: 'Agar memory ki problem roz ki life affect kar rahi hai — kaam pe ghaltiyan, cheezein repeatedly bhoolna, ya log complain kar rahe hain — to doctor se milna chahiye. Thyroid test, vitamin B12, haemoglobin, aur blood sugar check karwao — ye sab reversible causes hain jo commonly yaadaasht affect karte hain. Diagnose karo pehle, phir treatment.',
    },
    {
      duration: 'Purani Problem — 3 Mahine Se Zyada Ya Lag Raha Hai Badh Raha Hai',
      advice: 'Agar memory steadily worse ho rahi hai — ya aapko feel ho raha hai ki pehle se kaafi zyada bhoolne lage ho — to neurologist se milna chahiye. Early evaluation important hai kyunki kuch conditions (jaise Normal Pressure Hydrocephalus, B12 deficiency, thyroid) mein early treatment se puri recovery possible hai. Delay karna is case mein nahi karna chahiye.',
    },
  ],

  lifestyleCauses: [
    {
      title: 'Neend Ki Kami (Sleep Deprivation)',
      recognition: 'Kya aap roz 6 ghante se kam so rahe hain? Subah uthne ke baad bhi thaka hua aur "foggy" feel karte hain?',
      description: 'Neend ke waqt brain "consolidation" karta hai — din bhar ki nayi memories long-term memory mein store hoti hain. Jab neend poori nahi hoti — ye process interrupt hoti hai. Isliye neend na aane ke baad yaadaasht aur concentration dono weak ho jaate hain. Ye memory loss ka sabse common aur reversible cause hai.',
    },
    {
      title: 'Chronic Stress Aur Anxiety',
      recognition: 'Kya aap kaafi waqt se stressed, tensed ya worried rehte hain? Kya dimag aksar "overloaded" feel karta hai?',
      description: 'Chronic stress mein cortisol hormone high rehta hai. High cortisol hippocampus — brain ka memory center — ko directly affect karta hai. Ye yaadaasht ke liye zaroori neurons ki growth aur function dono pe asar dalta hai. Isliye depression aur anxiety mein memory ka asar bahut common hai.',
    },
    {
      title: 'Alcohol Aur Kuch Medicines Ka Asar',
      recognition: 'Kya aap regularly alcohol lete hain? Ya koi nayi medicine shuru ki hai recently — jaise sleeping pills, antihistamines, ya blood pressure ki medicines?',
      description: 'Alcohol brain cells ko directly nuksaan pahunchata hai — specially hippocampus ko. Kuch medicines (benzodiazepines, anticholinergics, high-dose antihistamines) brain ke neurotransmitters pe asar dalti hain aur temporary memory fog create karti hain. Ye effects dose-dependent hote hain aur aksar reversible hain.',
    },
    {
      title: 'Screen Time Zyada, Brain Exercise Kam',
      recognition: 'Kya aap din ka zyaadatar waqt passive scrolling mein dete hain — bina koi nayi cheez seekhe ya mentally engaging kaam kiye?',
      description: 'Brain ek "use it or lose it" organ hai. Jab hum constantly passive information consume karte hain — bina kuch naya seekhe, bina puzzle solve kiye, bina meaningful conversation kiye — cognitive reserve (dimag ki reserve strength) slowly kam hoti hai. Ye long-term mein memory ke liye nuksan kar sakta hai.',
    },
  ],

  medicalCauses: [
    {
      diseaseName: 'Thyroid Disorder (Hypothyroidism)',
      diseaseHindiName: 'Thairoyd Ki Kami',
      diseaseSlug: 'thyroid',
      isAvailable: true,
      description: 'Hypothyroidism mein thyroid hormone kam hone se brain metabolism slow ho jaata hai — jis se "brain fog", yaadaasht ki kamzori, concentration mein dikkat, aur slow thinking feel hoti hai. Ye memory loss ka ek very treatable cause hai.',
      recognition: 'Saath mein thakaan, wajan badhna, sardard, baal jhadna, ya constipation bhi hai? Ye hypothyroidism ke classic signs hain.',
    },
    {
      diseaseName: 'Depression',
      diseaseHindiName: 'Gehri Udaasi / Depression',
      diseaseSlug: 'disease-depression',
      isAvailable: true,
      description: 'Depression sirf mood ki bimari nahi — ye brain chemistry ko change karta hai. Dopamine aur serotonin ki kami concentration, learning aur memory — teeno ko affect karti hai. Depression-related memory issues ko "pseudodementia" bhi kaha jaata hai — kyunki treat karne pe ye poori tarah better ho sakti hai.',
      recognition: 'Yaadaasht ke saath motivation ki kami, kuch bhi accha na lagana, ya neend bahut zyada ya bahut kam — ye depression ke asar ho sakte hain.',
    },
    {
      diseaseName: 'Dementia',
      diseaseHindiName: 'Dimagi Kamzori (Ghanaaura)',
      diseaseSlug: '',
      isAvailable: false,
      description: 'Dementia ek group of conditions hai jisme brain cells progressively damage hoti hain. Alzheimer\'s sabse common type hai. Early stage mein haal ki baatein bhool jaana, baar baar same cheez poochna, aur familiar jagah pe bhi confused hona — common signs hain.',
      recognition: 'Agar yaadaasht roz worse ho rahi hai aur daily life — kapde pehnna, khana banana, bills bharna — affect ho raha hai to neurologist se milna zaroori hai.',
    },
    {
      diseaseName: 'Diabetes (Uncontrolled)',
      diseaseHindiName: 'Shakar Ki Bimari',
      diseaseSlug: '',
      isAvailable: false,
      description: 'Chronically high blood sugar brain ke blood vessels aur neurons dono ko nuksaan pahunchata hai. Hypoglycemia (blood sugar bahut kam hona) bhi acutely confusion aur memory issues create karta hai. Long-term uncontrolled diabetes cognitive decline ka risk kaafi badhata hai.',
      recognition: 'Zyaada pyaas, baar baar peshab, thakaan aur saath mein bhulakkadpan — diabetes screen zaroor karwao.',
    },
    {
      diseaseName: 'Vitamin B12 Deficiency',
      diseaseHindiName: 'B12 Ki Kami',
      diseaseSlug: '',
      isAvailable: false,
      description: 'Vitamin B12 brain ke nerve cells ke myelin sheath banane ke liye zaroori hai. B12 ki kami mein nerve conduction slow hoti hai — memory, concentration aur mood teeno pe asar aata hai. Vegetarians, elderly, aur antacid users mein B12 deficiency common hai.',
      recognition: 'Saath mein haath paon mein jhanjhanahat, thakaan, ya anaemia ke signs hain? B12 test zaroor karwao.',
    },
  ],

  redFlags: [
    'Achanak aaya memory loss — ek dum se — specially sar pe chot lagne ke baad ya stroke ke symptoms ke saath: ek taraf numbness, bolne mein takleef, ya aankhon ki roshni mein badlav — ye emergency hai, turant hospital jaao.',
    'Apna naam, ghar ka pata, ya parivaar ke logon ko nahi pehchan pa rahe — ye serious neurological emergency hai.',
    'Memory loss ke saath personality mein bada badlav — aggressive behavior, disinhibition, ya bahut zyada social withdrawal — neurologist se turant milein.',
    'Seizures ya behoshi ke episodes memory loss ke saath ho rahe hain — turant evaluation zaroori hai.',
  ],

  homeSteps: [
    {
      step: 'Neend Ko Priority Do — 7 Se 8 Ghante Pura Karo',
      reason: 'Brain ki memory consolidation neend ke waqt hoti hai — REM sleep phase mein. Ek hafte poori neend lene ke baad kaafi log khud memory mein fark notice karte hain. Ye single most impactful step hai.',
    },
    {
      step: 'Din Bhar 8-10 Glass Paani Piyo',
      reason: 'Mild dehydration bhi brain function affect karta hai — concentration, focus aur short-term memory pe seedha asar padta hai. Brain ka 75% paani hai — iska level maintain karna basic lekin effective step hai.',
    },
    {
      step: 'Roz 30 Min Walk Ya Light Exercise Karo',
      reason: 'Exercise se brain mein blood flow badhta hai aur BDNF (Brain-Derived Neurotrophic Factor) release hota hai — jo naye nerve connections banata hai. Research clearly dikhata hai ki regular exercise cognitive decline slow karta hai aur yaadaasht improve karta hai.',
    },
    {
      step: 'Ek Kaam Ek Waqt Karo — Multitasking Band Karo',
      reason: 'Multitasking brain ko baar baar switch karne pe majboor karta hai — jis se koi bhi information properly encode nahi hoti. Ek kaam pe poori dhyan — phir dusra — ye memory encoding ke liye sahi hai.',
    },
    {
      step: 'Mobile Screen Sone Se 1 Ghanta Pehle Band Karo',
      reason: 'Blue light melatonin suppress karta hai — neend ki quality kharaab hoti hai — aur poor neend yaadaasht ke liye seedha nuksan hai. Screen off, aur social media scrolling band karne se kaafi logo ki yaadaasht aur concentration 2-4 hafte mein improve hoti hai.',
    },
    {
      step: 'Koi Bhi Nayi Cheez Seekhne Ki Koshish Karo — Daily',
      reason: 'Brain ko "use" karna zaroori hai — puzzle, nayi recipe, koi instrument, ya kuch bhi naya padhna — new neural connections banate hain. Ye cognitive reserve badhata hai — jo age-related decline slow karta hai.',
    },
  ],

  homeopathyAngle1: 'Yaadaasht ki kamzori ka homeopathic assessment sirf "memory loss" dekhna nahi hai — kab se hai, kaisa bhulakkadpan hai (naam? cheezein? rasta?), saath mein kya aur symptoms hain (neend, mood, energy), triggers kya hain (stress, grief, illness ke baad), aur puri personality history — sab assess ki jaati hai. Ek 60 saal ke professor ki memory loss ka approach aur ek 35 saal ki anxious working mom ka approach alag hoga.',

  homeopathyAngle2: 'Homeopathy mein stress-related ya grief-related cognitive decline, post-illness brain fog, aur early-stage memory weakness pe focus kiya jaata hai — un cases mein jahan koi serious structural cause nahi hai. Reversible causes (thyroid, B12, depression) pehle conventional medicine se treat karo — baaki supportive role mein homeopathy sahayak ho sakti hai.',

  homeopathyAngle3: 'Yaadaasht ke liye homeopathy ek long-term, supportive approach hai — ek din mein nahi hoga. Lekin jo log stress, anxiety, grief ya burnout ke baad cognitive symptoms experience kar rahe hain, unke liye ye ek side-effect free, complementary option hai. Serious neurological causes mein conventional evaluation pehle — homeopathy baad mein saath chal sakti hai.',

  homeopathyIsFor: [
    'Aap stress, grief ya burnout ke baad se dimag "foggy" feel ho raha hai — koi serious disease nahi mili hai investigate karne pe',
    'Aap anxiety ya depression ke saath yaadaasht ki kamzori experience kar rahe hain aur side-effect free supportive option chahiye',
    'Age ke saath thodi slow yaadaasht hai — koi serious pathology nahi — aur aap cognitive support chahte hain',
  ],

  homeopathyNotFor: [
    'Achaanak memory loss — stroke, head injury ya medical emergency — turant hospital, homeopathy baad mein',
    'Dementia ya serious neurological diagnosis mein — homeopathy primary treatment nahi hai, conventional care pehle',
    'Agar serious reversible cause (B12 deficiency, hypothyroidism, severe depression) hai — pehle us cause ko specifically treat karo',
  ],

  homeopathyDiseaseLinks: [
    { diseaseName: 'Thyroid (Hypothyroidism)', diseaseSlug: 'thyroid', diseaseHindiName: 'Thairoyd Ki Kami' },
    { diseaseName: 'Depression', diseaseSlug: 'disease-depression', diseaseHindiName: 'Gehri Udaasi' },
  ],

  linkedDiseaseCards: [
    {
      diseaseName: 'Depression',
      diseaseHindiName: 'Gehri Udaasi / Depression',
      diseaseSlug: 'disease-depression',
      isAvailable: true,
    },
    {
      diseaseName: 'Thyroid (Hypothyroidism)',
      diseaseHindiName: 'Thairoyd Ki Kami',
      diseaseSlug: 'thyroid',
      isAvailable: true,
    },
    {
      diseaseName: 'Dementia',
      diseaseHindiName: 'Dimagi Kamzori',
      diseaseSlug: '',
      isAvailable: false,
    },
    {
      diseaseName: 'Diabetes',
      diseaseHindiName: 'Shakar Ki Bimari',
      diseaseSlug: '',
      isAvailable: false,
    },
    {
      diseaseName: 'Vitamin B12 Deficiency',
      diseaseHindiName: 'B12 Ki Kami',
      diseaseSlug: '',
      isAvailable: false,
    },
  ],

  faqs: [
    {
      question: 'Memory loss kyun hota hai — sabse common wajah kya hai?',
      answer: 'Yaadaasht kamzor hone ki sabse common wajahein hain: neend ki kami (brain raat ko memories store karta hai), chronic stress (cortisol hippocampus ko affect karta hai), vitamin B12 ki kami (nerve function ke liye zaroori), hypothyroidism (brain metabolism slow ho jaata hai), aur depression (serotonin-dopamine ki kami memory aur concentration dono affect karti hai).\n\nIn sab wajahon ki khaasiyat ye hai — ye sab reversible hain. Sahi diagnosis aur treatment se memory bahut often better ho jaati hai. Isliye pehle basic tests karwao — thyroid, B12, blood sugar, CBC.',
    },
    {
      question: 'Normal bhulakkadpan aur serious memory loss mein kya fark hai?',
      answer: 'Normal bhulakkadpan: Ghar se nikale aur lock kiya ya nahi yaad nahi — phir yaad aata hai. Kisi ka naam "tip of tongue" pe hai — thodi der mein yaad aata hai. Baatein dhyan se nahi suna to yaad nahi — lekin dusri baar reminder pe yaad aata hai.\n\nSerious memory loss ke signs: Haal ki baatein bilkul yaad nahi rehti — kal kya khaaya, kisi se kya baat ki. Baar baar same cheez poochna — bina realize kiye. Ghar ka rasta ya parichit log nahi pehchanna. Roz worse hoti ja rahi hai.\n\nRule of thumb: Agar yaadaasht daily life — kaam, relationships, safety — affect kar rahi hai, to doctor se milna chahiye.',
    },
    {
      question: 'Kya memory loss ka koi test hai?',
      answer: 'Memory loss ki wajah dhundne ke liye kuch basic tests hote hain jo doctor suggest karte hain: Thyroid function tests (T3, T4, TSH) — hypothyroidism bahut common cause hai; Vitamin B12 aur folate levels; Complete Blood Count (CBC) — anaemia; Blood Sugar (fasting + HbA1c) — diabetes; MRI Brain — agar neurological cause suspect ho.\n\nMemory function measure karne ke liye neuropsychological tests hote hain — jaise MMSE (Mini-Mental State Examination) ya MoCA test — jo doctor clinic mein karte hain. Ek doctor se milein, woh apne assessment ke mutabik tests suggest karenge.',
    },
    {
      question: 'Memory loss kab serious hoti hai — kab doctor ke paas jaana chahiye?',
      answer: 'Turant doctor ke paas jaao agar: Achanak aaya memory loss — especially sar pe chot ke baad ya stroke-like symptoms ke saath; Ghar ka pata ya family ke log nahi pehchante; Ek hi cheez baar baar poochh rahe ho bina realize kiye; Bimari roz badh rahi hai — mehine mein clearly worse ho raha hai.\n\nIs hafte doctor se milo agar: 4-6 hafte se memory problem hai aur improve nahi ho rahi; Kaam ya ghar pe repeated mistakes ho rahi hain; Saath mein mood mein bahut badlav, chakkar, ya sar dard bhi hai.\n\nAbhi wait karo agar: Sirf stress ya neend ki kami se lag raha hai — aur 2-3 hafte lifestyle changes se better ho raha hai.',
    },
    {
      question: 'Thyroid se yaadaasht kyun kamzor hoti hai?',
      answer: 'Thyroid hormone brain ke metabolism ke liye zaroori hai — specially hippocampus (yaadaasht ka center) ke neurons ke liye. Jab thyroid hormone kam hoti hai (hypothyroidism), brain cells ki energy production slow ho jaati hai.\n\nIska result: "Brain fog" — dimag mein dhund jaisi feeling; Nayi cheezein seekhna mushkil hona; Words dhundne mein time lagna; Concentration mein dikkat; Aur generally slow thinking.\n\nAcchi khabar: Hypothyroidism ka ilaaj — thyroxine tablets se — bahut effective hai. Treatment shuru karne ke kuch mahino mein memory aur cognitive function mein kaafi improvement aati hai. Isliye memory loss mein thyroid test pehla step hona chahiye.',
    },
    {
      question: 'Depression mein memory kyun affect hoti hai?',
      answer: 'Depression sirf mood ki bimari nahi hai — ye brain chemistry change karta hai. Depression mein serotonin, dopamine aur norepinephrine — teen zaroori neurotransmitters — kam ho jaate hain. Ye teeno memory, concentration aur learning ke liye zaroori hain.\n\nDepression mein memory pe asar: Concentration nahi hoti — isliye nayi baatein encode nahi hoti; Negative cheezein zyada yaad rehti hain — positive memories retrieve karna mushkil; Koi cheez mein interest nahi — isliye brain kuch bhi properly process nahi karta.\n\nIs condition ko "pseudodementia" bhi kaha jaata hai — kyunki ye dementia jaisi lagti hai lekin depression treat karne pe kaafi recover ho jaati hai.',
    },
    {
      question: 'Kya stress se permanent memory loss ho sakta hai?',
      answer: 'Short-term mein: Haan — acute stress mein cortisol memory encoding aur retrieval dono affect karta hai. Exam ke beech sab bhool jaana, ya emotional shock mein kuch yaad na rehna — ye acute stress response hai.\n\nLong-term mein: Chronic stress mein cortisol consistently high rehne se hippocampus ke neurons shrink ho sakte hain — lekin ye generally reversible hai stress kam hone pe.\n\nPermanent memory loss: Sirf stress se permanent damage bahut kam cases mein hoti hai. Lekin chronic untreated stress + depression + poor sleep ek sath ho to cognitive decline accelerate ho sakti hai. Isliye stress manage karna serious priority hai — sirf yaadaasht ke liye nahi, brain health ke liye bhi.',
    },
    {
      question: 'Age ke saath yaadaasht kitni normal speed se slow hoti hai?',
      answer: 'Kuch cheezein jo age ke saath normal hain: Processing speed — nayi baatein seekhne mein thoda zyada time lagna; Word recall — naam ya words dhundne mein extra second; Multitasking mein dikkat.\n\nJo normal nahi hai at any age: Haal ki events bilkul yaad na rehna; Family members ko na pehchaanna; Apni daily activities karna bhool jaana.\n\nAge-related normal decline lifestyle se slow kiya ja sakta hai — regular exercise, learning new skills, social engagement, proper sleep. Agar 60+ mein memory daily life affect kar rahi hai — doctor se evaluation zaroor karwao. Early intervention se kaafi fark padta hai.',
    },
    {
      question: 'Yaadaasht badhane ke liye kya khaana chahiye?',
      answer: 'Brain ke liye important nutrients: Vitamin B12 — dairy, eggs, meat, fish — ya supplement (especially vegetarians ke liye); Omega-3 fatty acids — akhrot, flaxseeds, machhli — brain cell membranes ke liye zaroori; Antioxidants — haldi, amla, blueberries, green leafy vegetables — brain inflammation reduce karte hain; Iron — haemoglobin ka role oxygen brain tak pahunchane mein — green vegetables, dal, til.\n\nKya avoid karein: Refined sugar aur maida — blood sugar spikes brain fog create karte hain; Alcohol — direct brain cells pe toxic effect; Ultra-processed foods — inflammation badhate hain.\n\nSabse practical advice: Pure grain, dal-sabzi, dry fruits, aur bahut pani — ye Indian diet already brain-friendly hai. Bas refined sugar aur maida kam karo.',
    },
    {
      question: 'Kya homeopathy memory loss mein kaam karti hai?',
      answer: 'Homeopathy memory loss ke certain types mein ek supportive role play kar sakti hai — specifically stress, grief, anxiety ya burnout ke baad jo cognitive decline aata hai.\n\nHomeopathy kab helpful ho sakti hai: Jab stress, overthinking ya emotional shock ke baad yaadaasht aur concentration weak ho gayi ho; Depression ke saath jo memory fog hai — conventional treatment ke saath; Age ke saath gradual slowdown mein cognitive support.\n\nHonest baat: Dementia ya serious neurological conditions mein homeopathy primary treatment nahi hai. Reversible causes (B12, thyroid, depression) ka specific treatment pehle zaroori hai. Homeopathy ek complementary, side-effect free option hai — main treatment replace nahi karta.',
    },
    {
      question: 'Vitamin B12 ki kami se memory loss kyun hoti hai?',
      answer: 'Vitamin B12 brain ke nerve cells ke bahar ek protective layer — myelin sheath — banane ke liye zaroori hai. Myelin sheath nerve signals ko fast aur efficient rakhti hai. Jab B12 kam hoti hai, ye layer damage hoti hai — aur nerve conduction slow ho jaata hai.\n\nResult: Yaadaasht aur concentration weak hona; Confusion aur brain fog; Mood changes; Haath paon mein jhanjhanahat (peripheral neuropathy).\n\nIndia mein B12 deficiency kaafi common hai — vegetarians mein specially, kyunki B12 mainly animal products mein hota hai. Simple blood test se confirm hota hai aur B12 injection ya supplements se bilkul theek ho jaata hai — including memory improvement.',
    },
  ],

  quickFacts: [
    'Neend ki kami aur chronic stress — ye dono milke memory loss ke sabse common reversible causes hain.',
    'Thyroid, B12 aur depression treat karne pe memory kaafi often poori recover hoti hai.',
    'Agar yaadaasht roz worse ho rahi hai ya daily life affect ho rahi hai — neurologist se evaluation zaroori hai.',
  ],

  relatedSymptoms: [
    { title: 'Sar Dard (Headache)', slug: 'headache' },
    { title: 'Neend Na Aana (Insomnia)', slug: 'insomnia' },
    { title: 'Depression Ke Lakshan', slug: 'depression-symptoms' },
    { title: 'Anxiety Ke Lakshan', slug: 'anxiety-symptoms' },
  ],

  sources: [
    { title: 'Mayo Clinic — Memory Loss: Causes, Diagnosis (2024)', url: 'https://www.mayoclinic.org/symptoms/memory-loss/basics/causes/sym-20050910' },
    { title: 'NIH National Institute on Aging — Memory, Forgetfulness and Aging (2023)', url: 'https://www.nia.nih.gov/health/memory-forgetfulness-and-aging-whats-normal-and-whats-not' },
    { title: 'NCBI — Hypothyroidism and Cognitive Function (2022)', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6822815/' },
    { title: 'Harvard Health — Vitamin B12 Deficiency and Memory (2023)', url: 'https://www.health.harvard.edu/blog/vitamin-b12-deficiency-can-be-sneaky-harmful-201301105780' },
  ],
}

async function seed() {
  console.log('Seeding memory-loss symptom...')
  const result = await client.createOrReplace(symptom)
  console.log('Done:', result._id)
}

seed().catch(console.error)
