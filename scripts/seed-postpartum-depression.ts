import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-postpartum-depression',
  _type: 'disease',
  title: 'Postpartum Depression',
  hindiName: 'Prasav Ke Baad Ka Avsaad / Navjaat Mata Ka Mansik Dard',
  slug: { _type: 'slug', current: 'postpartum-depression' },
  category: "Women's",
  publishedAt: '2026-05-05T00:00:00.000Z',
  metaTitle: 'Postpartum Depression Ka Homeopathic Upchar | Homeopedia',
  metaDescription: 'Prasav ke baad udaasi, darr, neend na aana? Jaanein postpartum depression ke prakar, karan, homeopathic treatment, diet aur 25+ patient FAQs.',

  heroText: 'Delivery ke baad kai mahilaon ko ek gehra mansik dard hota hai jise Postpartum Depression (PPD) kehte hain. Ye sirf "baby blues" nahi hota – yeh ek serious condition hai jisme nai maa ko apne bachche se lagav nahi feel hota, rone ka mann karta hai, darr lagta hai, aur roz ka kaam bhi mushkil lagta hai. India mein har 5 mein se 1 nai maa isse guzarti hai, lekin zyada baat nahi hoti kyunki society "maa banna khushi ki baat hai" maan leti hai. Sahi treatment se yeh condition poori tarah theek ho sakti hai.',

  quickFacts: {
    whatItIs: 'Delivery ke baad hormonal crash aur emotional exhaustion se hone wala depression; ye sirf baby blues nahi hai – 2 hafte se zyada chale to PPD hai; ek treatable medical condition',
    howCommon: 'India mein approximately 22% nai maaon ko affect karta hai – har 5 mein se 1; WHO India data; zyada cases unreported rehte hain kyunki society mein openly baat nahi hoti',
    treatmentDuration: 'Homeopathic treatment mein 3-6 mahine mein significant improvement; pehle mahine mein neend aur anxiety mein farq shuru; complete recovery patient ki severity pe depend karti hai',
    successRate: 'Indian Journal of Research in Homoeopathy (2019) aur Journal of Evidence-Based Integrative Medicine (2017) mein PPD ke moderate cases mein homeopathic treatment se meaningful improvement documented hai; breastfeeding-safe approach',
  },

  causes: [
    'Hormonal crash – delivery ke baad estrogen aur progesterone achanak bahut gir jaate hain; brain chemistry badal jaati hai jo mood ko directly affect karta hai',
    'Thyroid imbalance – postpartum thyroiditis kai cases mein PPD trigger karta hai; thyroid test PPD workup mein zaroori hai',
    'Neend ki kami – newborn ki care mein continuous sleep deprivation brain ko emotionally weak kar deta hai; recovery slow ho jaati hai',
    'Pehle se mental health history – agar pehle kabhi depression ya anxiety raha ho to risk 2 guna zyada hota hai',
    'Relationship aur ghar ka tension – partner ka support na milna, sasural ka pressure, financial stress; social isolation bhi major factor',
    'Traumatic delivery ya C-section recovery – physical pain ke saath emotional healing bhi mushkil ho jaati hai; emergency C-section aur planned se alag hoti hai',
  ],

  riskFactors: [
    'Pehli pregnancy mein baby blues ka history – pehle hua ho to doosri baar 50% risk zyada hota hai',
    'Single maa ya partner ka saath na milna – emotional aur practical support dono ki kami',
    'Bachcha premature paida hua ho ya NICU mein rahe – extra anxiety aur guilt ka load',
    'Joint family mein criticism zyada aur support kam ho – judgment ke darr se feelings chhupana',
    'Breastfeeding mein difficulties – struggle aur guilt ka combination emotional health pe asar karta hai',
    'Financial tangi ya ghar badalne wali situation ke beech delivery – external stress hormonal recovery slow karti hai',
  ],

  complications: [
    'Chronic depression – 6 mahine se zyada treat na ho to long-term depression ban sakta hai jo zyada mushkil hota hai treat karna',
    'Bachche ka development affected – maa ka bond na banna bachche ke emotional, language aur social development ko slow karta hai',
    'Postpartum Psychosis ka risk – rare (1000 mein 1-2) lekin serious; hallucinations, confusion, khud ko ya bachche ko nuksan pahunchane ke vichar; ye medical emergency hai',
    'Rishton mein toot – partner se door hona, ghar mein frustration badhna, relationship stress; early treatment se ye sab rokna possible hai',
  ],

  types: [
    {
      _key: 'type1',
      name: 'Baby Blues (Halka aur Thodi Deri Tak)',
      description: 'Delivery ke 3-5 din baad shuru hota hai aur 2 hafte mein khud theek ho jaata hai. Zyada rona, mood swings, thoda darr – ye normal hormonal adjustment hai. Treatment nahi chahiye, sirf support chahiye. Agar 2 hafte ke baad bhi rahe to doctor se milein.',
    },
    {
      _key: 'type2',
      name: 'Postpartum Depression (Moderate se Severe)',
      description: '2 hafte se zyada chale, roz ka kaam affected ho, bachche se lagav na ho – ye PPD hai. Homeopathic treatment yahan sabse zyada effective hota hai. India mein sabse common type; aksar under-diagnosed rehta hai.',
    },
    {
      _key: 'type3',
      name: 'Postpartum Anxiety',
      description: 'Kuch mahilaon mein sadness nahi hoti lekin constant darr, "kuch bura ho jaayega" wali feeling, heart racing, neend nahi aana – ye PPD ka anxiety type hai. Aksar miss diagnose hota hai. Homeopathy mein Calcarea Carb, Argentum Nitricum jaise remedies specially kaam karte hain.',
    },
    {
      _key: 'type4',
      name: 'Postpartum OCD',
      description: 'Bachche ko lekar baar baar ek hi darr aana – jaise "main bachche ko hurt kar dungi" – ye thoughts distressing hote hain; maa unhe kabhi karna nahi chahti. Ye OCD type hai, psychosis nahi. Iska matlab aap buri maa nahi hain. Treatment se bilkul theek hota hai.',
    },
    {
      _key: 'type5',
      name: 'Postpartum PTSD',
      description: 'Traumatic delivery, C-section emergency, ya bachche ka khatrey mein hona – is experience ke baad flashbacks, darr, nightmares aana. Ye PTSD category mein aata hai. Homeopathy mein Ignatia, Aconite aur Stramonium is type mein consider ki jaati hain.',
    },
    {
      _key: 'type6',
      name: 'Postpartum Psychosis (Bahut Rare – Emergency)',
      description: '1000 mein 1-2 cases. Delivery ke 1-2 hafte baad rapid onset – hallucinations, confusion, reality se alag hona. Ye medical emergency hai – turant psychiatrist ko dikhana zaroori hai. Homeopathy akele sufficient nahi hai is emergency mein.',
    },
  ],

  symptoms: [
    {
      _key: 'sg1',
      groupName: 'Emotional & Mental Signs',
      items: [
        'Baar baar rona bina kisi khaas karan ke – aksar khud ko pata bhi nahi kyun ro rahi hain',
        'Apne bachche se lagav ya pyaar na feel karna – aur iss feeling pe bahut guilt aana; "main buri maa hoon" ka constant thought',
        'Kisi cheez mein interest na rehna, darr ya anxiety jo control nahi hoti; khud ko "sab sambhal nahi sakti" feel karna',
      ],
    },
    {
      _key: 'sg2',
      groupName: 'Physical & Daily Life Signs',
      items: [
        'Neend na aana ya bahut zyada sona, thakaan jo rest ke baad bhi jaati nahi',
        'Bhook na lagana ya bahut zyada khaana; sardard, body pain bina medical reason ke',
        'Roz ke kaam – nahana, khana banana – bahut mushkil lagna; cheezein bhoolna, concentration bilkul nahi',
      ],
    },
    {
      _key: 'sg3',
      groupName: 'Serious Warning Signs – Turant Help Lein',
      items: [
        'Khud ko hurt karne ke vichar aana – ye PPD ka hissa hai, aap kamzor nahi; turant doctor ko batayein',
        'Bachche ko hurt karne ka darr ya vichar aana – chahe aap aise karna bilkul nahi chahti; ye OCD type hai aur treatable hai',
        'Reality se alag feel karna, awaazein sunna – ye Postpartum Psychosis ka sign hai; medical emergency; abhi doctor ko call karein',
      ],
    },
  ],

  ccrhEvidence: 'Indian Journal of Research in Homoeopathy (2019) aur Journal of Evidence-Based Integrative Medicine (2017) mein postpartum aur hormonal depression ke cases mein homeopathic constitutional treatment se significant symptomatic improvement document ki gayi hai. CCRH ke mental health observational studies mein emotional exhaustion, anxiety aur sleep disturbance mein meaningful recovery noted hui hai. Breastfeeding ke dauran safety bhi documented hai.',

  homeopathyBenefits: {
    explanation: 'Homeopathy PPD mein is tarah kaam karti hai ki wo sirf "mood theek karo" nahi sochti – balki ye dekhti hai ki aap kaisi maa hain, aapka darr kaisa hai, aapki pregnancy kaisi gayi, aapke relationships kaisi hain. Har medicine patient ke poore mental-emotional picture ko match karke di jaati hai. Hormonal imbalance aur nervous system ki exhaustion dono ko address kiya jaata hai – bina sedation ke, bina neend udaye. Ye nai maa ke liye ek safe aur gentle approach hai.',
    bullets: [
      'Breastfeeding-safe – koi chemical sedation nahi; doodh ke zariye bachche tak koi nuksaan nahi pahunchta',
      'Guilt aur self-blame ko address karta hai – jo conventional treatment mein aksar choot jaata hai',
      'Neend naturally improve hoti hai bina sleeping pills ke – pehle mahine mein ye change aksar sabse pehle aata hai',
      'Hormonal recovery ke saath saath emotional healing bhi hoti hai – dono parallel mein',
      'Har type ke PPD mein alag medicines available hain – Baby blues se lekar Postpartum Anxiety tak sab ke liye',
    ],
  },

  medicines: [
    {
      _key: 'med1',
      name: 'Sepia Officinalis',
      bestFor: 'Jo maa apne bachche aur partner se poori tarah disconnect feel kare, koi emotion nahi, khud ke liye kuch bhi karna nahi chahti, thaki hui aur irritable rehti ho. Uterine aur hormonal exhaustion ka sabse pehchana remedy.',
      keyIndications: [
        'Apne bachche se lagav bilkul nahi – andar jaanti hai pyaar karna chahti hai par feel nahi hota; khaali khaali lagta hai',
        'Partner ki presence se bhi irritation aur thakaan – jo pehle priya tha ab sab burden lagta hai; ghar se bhaagna chahti hai',
        'Hormonal crash ka seedha asar – delivery ke baad jo "khaali" feeling aati hai, usmein ye sabse zyada fit baithti hai',
      ],
    },
    {
      _key: 'med2',
      name: 'Pulsatilla Nigricans',
      bestFor: 'Jo maa bahut zyada roti ho, support ke liye taras rahi ho, akele rehna bilkul pasand nahi, mood bahut jaldi badle. Emotionally dependent aur weeping type ke liye gentle hormonal remedy.',
      keyIndications: [
        'Baar baar rona – aksar khud ko pata nahi kyun; thodi si sympathy milne pe aur zyada rona; consolation chahiye',
        'Akele nahi rehna chahti – family ke paas rehna chahti hai, darr lagta hai; fresh air mein thoda better lagta hai',
        'Mood bahut jaldi badal jaata hai – abhi rona abhi thoda theek; hormonal fluctuation aur tearfulness ka combination',
      ],
    },
    {
      _key: 'med3',
      name: 'Natrum Muriaticum',
      bestFor: 'Jo maa andar se bahut dukhi ho lekin rona bahar nahi aata, akele roti ho, kisi ke saamne weakness nahi dikhana chahti, pichli baat ka gham chhupa ke rakhe. Suppressed grief aur chronic PPD.',
      keyIndications: [
        'Andar bahut dard hai par logon ke saamne nahi dikhata – akele roti hai, public mein control rakhti hai',
        'Consolation se aur bura lagta hai – sympathy se irritation hoti hai; akela rehna prefer karti hai',
        'Pichli baat pakdi rehti hai – delivery ka dard, koi rishton ki takleef – bhoolna chahti hai par dimag nahi chodta',
      ],
    },
    {
      _key: 'med4',
      name: 'Ignatia Amara',
      bestFor: 'Jab PPD ek sudden shock ke baad aaya ho – traumatic delivery, bachche ki health problem, kisi relationship ka dard. Sobbing aur emotional numbness alternately aate hain. Acute grief ka pehla remedy.',
      keyIndications: [
        'Kabhi bahut zyada rona kabhi bilkul band ho jaana – dono extremes mein jaana; predictable nahi rehta',
        'Traumatic delivery ya sudden news ke baad shuru hua PPD – koi specific emotional shock hai trigger mein',
        'Gale mein lump, saans lete waqt gap, kaampna – emotional pain ka physical expression; hormonal nahi purely grief-based',
      ],
    },
    {
      _key: 'med5',
      name: 'Calcarea Carbonica',
      bestFor: 'Jo maa thaki hui, bahut anxious, "kuch bura hoga" ka constant darr – bachche ko lekar, apni sehat ko lekar. Physically weak feel kare delivery ke baad. Anxiety-predominant PPD type.',
      keyIndications: [
        'Bachche ke baare mein constant worry – "kuch bura ho jaayega" ki feeling nahi jaati; har chhoti baat pe darr',
        'Physically bahut weak aur thaki – body recover nahi ho rahi; delivery ke baad strength wapas nahi aa rahi',
        'Anxiety + exhaustion combination – neend nahi aati chinta ke karan; subah uthke pehle anxiety hi aati hai',
      ],
    },
  ],

  dietInclude: [
    {
      _key: 'di1',
      category: 'Mood-Boosting Foods',
      emoji: '🧠',
      items: [
        'Akhrot (Walnuts) – Omega-3 fatty acids brain ke serotonin production ko support karte hain; roz 4-5 akhrot',
        'Flaxseeds (Alsi) – Hormonal balance ke liye essential fatty acids; postpartum hormone crash ko buffer karta hai',
        'Eggs – Choline aur Vitamin D ka acha source; brain recovery mein help karta hai; roz 1-2 eggs',
      ],
    },
    {
      _key: 'di2',
      category: 'Iron & Energy Recovery',
      emoji: '🩸',
      items: [
        'Palak, Methi, Chaulai – Delivery mein blood loss ke baad iron wapas badhata hai; thakaan kam karta hai; roz saag',
        'Dates (Khajoor) – Natural iron aur glucose ka combination; instant energy bina sugar crash ke; din mein 2-3',
        'Ragi (Nachni) – Calcium aur amino acids se bharpoor; nervous system ko nourish karta hai; roti ya porridge mein',
      ],
    },
    {
      _key: 'di3',
      category: 'Gut-Brain Healing',
      emoji: '🌿',
      items: [
        'Dahi / Curd (Probiotic) – Gut microbiome seedha mood aur anxiety se linked hai; fresh plain dahi roz khaayein',
        'Haldi wala doodh – Anti-inflammatory; neend behtar karta hai; brain inflammation reduce karta hai; raat ko piyen',
        'Moong Dal – Light, easily digestible protein; new mother ke weak digestion ke liye perfect; roz dal zaroori',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'Mood Crash Karne Wale Foods',
      emoji: '🍬',
      items: [
        'Sugar aur maida – Blood sugar spike aur phir crash anxiety aur mood swings badhaata hai; mithai, biscuit, naan avoid',
        'Packaged chips, instant noodles – Refined carbs inflammation badhaate hain jo depression worsen karta hai',
      ],
    },
    {
      _key: 'da2',
      category: 'Neend Kharaab Karne Wale',
      emoji: '☕',
      items: [
        'Zyada chai/coffee – Caffeine adrenaline badhaata hai; already anxious mind ke liye harmful; din mein 1 cup se zyada avoid',
        'Cold drinks / Energy drinks – Caffeine + sugar combination PPD mein worst combo hai; strictly avoid karein',
      ],
    },
    {
      _key: 'da3',
      category: 'Hormonal Disruption Wale',
      emoji: '🚫',
      items: [
        'Alcohol – Directly CNS depressant hai; PPD aur worse ho sakta hai; breastfeeding mein strictly avoid karein',
        'Processed meat (sausage, salami) – Preservatives aur additives hormonal system ko disturb karte hain',
        'Excess salt (namkeen, papad, achaar) – Water retention aur bloating se physical discomfort badh sakti hai',
      ],
    },
  ],

  dos: [
    'Roz 15-20 minute dhoop mein baithein – Vitamin D naturally serotonin production ko support karta hai; subah 6-7 baje wali dhoop sabse best',
    'Partner ya ghar ke ek person ko clearly bataiye ki aapko kab aur kaise help chahiye – assumption se kaam nahi chalta; specific bolein',
    'Bachche ke saath khud bhi sone ki koshish karein (sleep when baby sleeps) – neend PPD recovery ka base hai; dishes baad mein',
    'Kisi trusted saheli ya group se baat karein jo nai maa ban chuki ho – "mujhe bhi aisa hua tha" sunna bahut healing hota hai',
    'Homeopathic doctor ke saath regular follow-up rakhein – mood diary ya app mein roz note karein kya better hua; progress track karna important hai',
    'Roz thodi si apne liye time nikaalo – 10 min bhi – chai peena, kitaab padhna, gaana sunna; maa hona apna poora khona nahi hai',
    'Edinburgh Postnatal Depression Scale (EPDS) – free 10-question test online karein; baseline samajhne ke liye helpful',
    'Baby rotation plan banao ghar mein – raat ko partner ya family ki baari lagaiye; akele sab sambhalna impossible aur unnecessary hai',
  ],

  donts: [
    '"Main kamzor hoon, dusri maayein theek rehti hain" mat sochain – PPD ek medical condition hai, character ki kamzori nahi',
    'Ghar ke kaam ka pura bojh akele mat uthayein – help maangna maa ki sabse zaroori skill hai is waqt; sharm ki baat nahi',
    'Social media pe perfect maaon ki photos dekh-dekh comparison mat karein – vo curated reality hai, aapki asal life nahi',
    'Ratbhar akele baby handle mat karein neend ki kurbaani dekar – partner ya family ki baari lagaiye; exhaustion sab kuch worse karta hai',
    'Doctor se mat chupaiye – agar khayal aaye "kuch bura kar loon" ya "bachche ko hurt ho jaaye" – ye thoughts bahut common hain PPD mein; bataiye, sharm nahi',
    'Sirf "waqt se theek ho jaayega" ka intezaar mat karein – Baby Blues mein haan, PPD mein nahi; 2 hafte ke baad help lena zaroori hai',
    'Breastfeeding struggle pe khud ko blame mat karo – ye bahut mushkil hota hai kuch maaon ke liye; lactation support lena weakness nahi',
    'Alcohol se cope karne ki koshish mat karein – short term relief lagta hai par PPD 3 guna worse ho jaata hai; breastfeeding mein bhi strictly nahi',
  ],

  seasonalCare: {
    summer: 'Garmi mein dehydration anxiety badha deta hai – din mein 8-10 glass paani, coconut water, nimbu paani zaroor. Subah 6-7 baje bahar nikaalna – halki dhoop Vitamin D ke liye; dopahar ki garmi mein andar rahein. AC aur cooler se dry air hoti hai jo naak-gala affect kare aur neend kharaab kare – humidifier ya wet cloth use karein.',
    monsoon: 'Barsaat mein sunlight kam milti hai jo seasonal mood drop trigger kar sakta hai – Vitamin D supplement doctor se poochh kar lein. Ghar pe hi chalna phirna, light yoga ya stretching zaroor karein. Ghar saaf dry rakhein – fungal infections ki anxiety PPD mein anxiety aur badha deti hai.',
    winter: 'Sardi mein ghar mein band rehna isolation badhata hai jo PPD ka biggest trigger hai – kisi trusted family member ya saheli se roz milna ya call karna zaroori. Warm foods jaise soups, khichdi, gond ke ladoo energy aur warmth dono dete hain. Subah dhoop mein 15-20 minute baithna is season mein especially important hai.',
  },

  faqs: [
    {
      _key: 'faq1',
      question: 'Postpartum depression kya hoti hai aur ye baby blues se alag kaise hai?',
      answer: 'Baby blues delivery ke 3-5 din baad hota hai aur 2 hafte mein khud theek ho jaata hai – ye normal hormonal change hai. Postpartum depression 2 hafte se zyada chale, roz ka kaam mushkil kare, ya bachche se lagav na ho – tab PPD hai. PPD ko treatment ki zaroorat hoti hai, blues ko nahi.',
    },
    {
      _key: 'faq2',
      question: 'Delivery ke kitne din baad postpartum depression shuru hoti hai?',
      answer: 'Zyada cases mein delivery ke 1-4 hafte ke andar shuru hoti hai, lekin kuch mahilaon mein 3-6 mahine baad bhi ho sakti hai – khaaskar tab jab breastfeeding band hoti hai ya koi bada stress aata hai. Ek saal tak anytime ho sakta hai.',
    },
    {
      _key: 'faq3',
      question: 'Kya sirf pehli pregnancy ke baad hoti hai ya baar baar ho sakti hai?',
      answer: 'Dono possible hain. Agar pehle PPD hua ho to doosri pregnancy mein risk 50% tak badh jaata hai – isliye doosri baar se pehle doctor se zaroor baat karein. Preventive homeopathic consultation 3rd trimester mein helpful hoti hai.',
    },
    {
      _key: 'faq4',
      question: 'Kya postpartum depression mein maa ko bachche se pyaar nahi hota?',
      answer: 'Ye sabse bada misconception hai. Maa ko pyaar hota hai – lekin PPD usse feel karne se rok deta hai. "Main bachche ko pyaar nahi karti" ki feeling guilt create karti hai jo condition ko worse banata hai. Treatment se ye lagav wapas aata hai – ye permanent nahi hota.',
    },
    {
      _key: 'faq5',
      question: 'Homeopathy se postpartum depression ka ilaaj ho sakta hai kya?',
      answer: 'Haan, PPD ke moderate cases mein homeopathy bahut effective hai. Sepia, Pulsatilla, Ignatia jaise medicines patient ke poore emotional picture ke hisaab se di jaati hain. Breastfeeding-safe hain aur koi sedation ya chemical side effect nahi hota.',
    },
    {
      _key: 'faq6',
      question: 'Postpartum depression mein konsi homeopathic medicine best hai?',
      answer: 'Koi "best" medicine nahi hoti – ye depend karta hai aapke specific symptoms par. Jo maa andar se khaali aur disconnect feel kare uske liye Sepia, jo zyada roye aur support chaahe uske liye Pulsatilla, aur jo andar daba ke rakhe grief uske liye Natrum Mur consider ki jaati hai. Qualified homoeopath se milein.',
    },
    {
      _key: 'faq7',
      question: 'Kya postpartum depression breastfeeding ke dauran treatment ho sakti hai?',
      answer: 'Homeopathic medicines breastfeeding ke dauran completely safe hain – inme koi chemical ingredient nahi hota jo doodh ke zariye bachche tak jaye. Isliye nai maaon ke liye ye ek preferred treatment option banta hai.',
    },
    {
      _key: 'faq8',
      question: 'PPD kitne time mein theek hoti hai homeopathic treatment se?',
      answer: 'Zyada patients mein 3-6 mahine mein significant improvement aata hai. Pehle mahine mein neend aur anxiety mein farq dikhna shuru ho jaata hai. Complete recovery ke liye patient ki severity aur engagement par depend karta hai.',
    },
    {
      _key: 'faq9',
      question: 'Kya C-section ke baad postpartum depression zyada hoti hai?',
      answer: 'Research kuch had tak haan kehta hai – emergency C-section ya jo delivery plan ke ulat ho, use traumatic experience ki tarah process kiya jaata hai jo PTSD ya PPD trigger kar sakta hai. C-section recovery ka physical pain bhi emotional healing mushkil karta hai.',
    },
    {
      _key: 'faq10',
      question: 'Mujhe kaise pata chalega ki mujhe professional help chahiye ya nahi?',
      answer: 'Agar ye cheezein 2 hafte se zyada ho rahi hain – baar baar rona, bachche mein interest nahi, roz ka kaam nahi ho pa raha, neend nahi, ya darr bahut zyada hai – toh please kisi doctor se milein. Edinburgh Postnatal Depression Scale (EPDS) ek free 10-question test hai jo aap online bhi kar sakti hain.',
    },
    {
      _key: 'faq11',
      question: 'Kya postpartum depression mein khud ko hurt karne ke khayaal normal hain?',
      answer: 'Aisa mehsoos karna bahut distressing hota hai lekin aap akeli nahi hain – PPD mein ye khayaal aa sakte hain aur iska matlab ye nahi ki aap "pagal" hain ya "buri maa." Turant apne doctor ko bataiye – ye emergency help lene ka sign hai, sharm ka nahi.',
    },
    {
      _key: 'faq12',
      question: 'Pati ya ghar wale kaise samjhein ki maa ko PPD hai?',
      answer: 'Kuch signs – maa bahut roti hai ya bilkul nahi; bachche ko hold karne se inkar; neend nahi; "main theek hoon" bolti hai lekin clearly nahi hoti; khud ki care nahi karti. Ghar wale bina judgment ke listen karein, ghar ka kaam kuch dino ke liye sambhaalein, aur doctor ke paas jaane mein help karein.',
    },
    {
      _key: 'faq13',
      question: 'Kya postpartum depression se bachcha affect hota hai?',
      answer: 'Agar treat na ho toh haan – maa aur bachche ka emotional bond develop nahi hota jisme bachche ka language, social aur emotional development slow ho sakta hai. Treatment se maa theek hoti hai aur ye sab naturally improve hota hai.',
    },
    {
      _key: 'faq14',
      question: 'Kya exercise se postpartum depression mein help milti hai?',
      answer: 'Haan – research prove karta hai ki roz sirf 20-30 minute ki walking bhi serotonin aur endorphins badhati hai jo mood naturally improve karta hai. Lekin exercise replacement nahi hai treatment ka – dono saath chalte hain. Delivery ke baad doctor ki clearance ke baad shuru karein.',
    },
    {
      _key: 'faq15',
      question: 'Kya postpartum depression mein sirf neend lene se theek ho jaate hain?',
      answer: 'Neend zaroori hai lekin sirf neend kafi nahi. PPD mein neend ki kami ek important worsening factor hai lekin condition hormonal, psychological aur social factors ka combination hai. Neend better karna treatment ka ek part hai, poori solution nahi.',
    },
    {
      _key: 'faq16',
      question: 'Ghar pe koi support nahi hai toh kya karein?',
      answer: 'Pehle apne doctor ya ANM/ASHA worker se baat karein – ye aapko local resources se jod sakti hain. iCall India (9152987821) ek free mental health helpline hai. Online PPD support groups bhi hain. Aap akeli nahi hain – help maangna strength hai.',
    },
    {
      _key: 'faq17',
      question: 'Kya postpartum anxiety alag hoti hai depression se?',
      answer: 'Haan – postpartum anxiety mein sadness nahi balki constant darr hota hai, heart racing, "kuch bura hoga" ki feeling, sone nahi de rahi chinta. Kai baar ye akela hota hai bina depression ke. Homeopathy mein Argentum Nitricum, Calcarea Carb jaisi medicines anxiety type ke liye alag se di jaati hain.',
    },
    {
      _key: 'faq18',
      question: 'Twin ya multiple pregnancy ke baad PPD ka risk zyada hota hai kya?',
      answer: 'Haan, significantly zyada – double stress, double fatigue, double feeding, aur aksar complicated delivery. Twins ki maaon mein PPD risk almost double hota hai. Preventive support aur monitoring important hai.',
    },
    {
      _key: 'faq19',
      question: 'Kya postpartum depression second baby ke baad pehle se zyada hoti hai?',
      answer: 'Every case alag hota hai. Kuch maaon ko doosri baar relief hota hai kyunki experience hai. Lekin agar pehle PPD hua tha to risk doosri baar bhi hai – aur bade bacche ki parenting saath mein hone se load bhi zyada hota hai. Preventive homeopathic care ek option hai.',
    },
    {
      _key: 'faq20',
      question: 'Kya diet se postpartum depression mein farq padta hai?',
      answer: 'Haan, seedha connection hai. Omega-3 (akhrot, flaxseed, fish), Iron (palak, khajoor), Vitamin D (dhoop + eggs), aur Probiotic (dahi) PPD recovery mein scientifically help karte hain. Sugar aur maida avoid karna mood swings ko reduce karta hai. Diet treatment ka support hai, replacement nahi.',
    },
    {
      _key: 'faq21',
      question: 'Delivery ke baad se mujhe interest nahi aaya – kya ye PPD hai?',
      answer: 'Postpartum mein sexual interest ka kam hona bahut common hai – hormones, thakaan, body image, aur pain (especially stitches) sab factors hain. Ye PPD ka ek part ho sakta hai ya alag bhi. 3 mahine baad bhi koi interest nahi to apne gynaecologist ya homoeopath se zaroor baat karein.',
    },
    {
      _key: 'faq22',
      question: 'Kya postpartum depression ke baad maa normal ho sakti hai – poori tarah?',
      answer: 'Bilkul haan – poori tarah. PPD ek treatable condition hai. Sahi treatment se bahut si maaon ne complete recovery ki hai aur apne bachche ke saath deeply connected feel kiya hai. Early treatment aur sahi support – recovery mein yahi decide karta hai.',
    },
    {
      _key: 'faq23',
      question: 'Kya Vitamin D ki kami postpartum depression se linked hai?',
      answer: 'Haan – multiple studies ne yeh link prove kiya hai. Pregnancy aur breastfeeding mein Vitamin D ki bahut zyada demand hoti hai. India mein ghar pe rehna, parda karna aur processed food khana deficiency ka risk badhaata hai. Apne doctor se Vitamin D level test karwaiye.',
    },
    {
      _key: 'faq24',
      question: 'Postpartum depression prevention kaise karein agli pregnancy mein?',
      answer: 'Kuch proven steps – pehle hi ek trusted support person decide karein, sleep rotation plan banayein, 3rd trimester mein ek baar homoeopath se milein (preventive consult), birth plan clear rakhein, aur honestly partner ko bataiye ki aapko kya chahiye hoga. Awareness hi sabse bada safeguard hai.',
    },
    {
      _key: 'faq25',
      question: 'Kya postpartum depression ke liye hospital mein admit hona padta hai?',
      answer: 'Zyada cases mein bilkul nahi – outpatient treatment, homeopathic medicines, therapy aur support system se ghar pe hi theek hota hai. Sirf Postpartum Psychosis (jo bahut rare hai) ya severe suicidal ideation mein hospital care zaroori hoti hai. PPD ke liye admit hona zyada common nahi hai.',
    },
  ],

  relatedDiseases: ['Depression', 'Anxiety', 'Insomnia', 'PTSD', 'Dysmenorrhoea'],
}

async function seed() {
  try {
    const result = await client.createOrReplace(doc)
    console.log('✅ Postpartum Depression created/updated:', result._id)
    console.log('🌐 Live at: https://homeopedia.in/diseases/postpartum-depression')
  } catch (err) {
    console.error('❌ Error:', err)
  }
}

seed()
