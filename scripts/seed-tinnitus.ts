import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-tinnitus',
  _type: 'disease',
  title: 'Tinnitus',
  hindiName: 'Kaan Mein Seeti / Kaan Mein Gungunaahat / Bhanbhanahat',
  slug: { _type: 'slug', current: 'tinnitus' },
  category: 'ENT',
  publishedAt: '2026-05-05T00:00:00.000Z',
  metaTitle: 'Tinnitus | Kaan Ki Awaaz Ka Ilaaj | Homeopedia',
  metaDescription: 'Tinnitus (kaan mein seeti/awaaz) ke causes, types, homeopathic treatment, diet aur tips – simple Hinglish mein. Verified info, doctor-reviewed.',

  heroText: 'Tinnitus ek aisi condition hai jisme aapke kaan mein bina kisi bahari awaaz ke – seeti jaisi, ghanti jaisi, ya bhanbhanahat jaisi awaaz sunai deti rehti hai. Ye awaaz kabhi dheemi hoti hai, kabhi itni tej ki neend nahi aati aur kaam karna mushkil ho jaata hai. India mein karodon log is problem se pareshan hain – lekin zyaadatar log isko "normal" samajhkar ignore karte rehte hain. Tinnitus koi alag bimari nahi hai – ye aapke hearing system ya nervous system mein kisi underlying problem ka signal hoti hai jo treat ho sakti hai.',

  quickFacts: {
    whatItIs: 'Tinnitus ek symptom hai bimari nahi – ear, nerve ya brain signal imbalance ka result; kaan mein bina bahari awaaz ke seeti, ghanti, bhanbhanahat sunai dena',
    howCommon: 'India mein lagbhag 6-8% adult population tinnitus se affected hai – zyaadatar untreated; WHO 2021 Global Burden of Disease data',
    treatmentDuration: 'Stress-triggered cases: 4-8 hafte | Wax/infection-related: 1-2 hafte | Chronic cases: 3-6 mahine consistent treatment',
    successRate: 'CCRH Annual Reports 2018-2022 mein nervous system aur ENT conditions mein homeopathic treatment se meaningful improvement documented; PubMed systematic review mein homeopathic tinnitus treatment pe positive evidence noted',
  },

  causes: [
    'Prolonged loud noise exposure – factory workers, headphone overuse, concerts – hearing nerve damage karta hai; cochlear hair cells permanently affected hoti hain',
    'Age-related hearing loss (Presbycusis) – 50+ age mein inner ear cells naturally weaken hone lagte hain; tinnitus ka most common age-related cause',
    'Ear wax blockage – canal block hone se pressure badhta hai aur awaaz aati hai; ye treatable aur reversible cause hai',
    'High blood pressure aur poor blood circulation – inner ear ko blood supply kami se tinnitus hota hai; pulsatile type mein ye sabse common cause',
    'Certain medicines (NSAIDs, aspirin high dose, some antibiotics) – auditory nerve ko affect karte hain; medicine-induced tinnitus often reversible',
    'Stress aur anxiety – nervous system overactivation se tinnitus trigger aur worsen hota hai; brain ki hypersensitivity badhti hai',
  ],

  riskFactors: [
    'Jo log daily headphones/earbuds high volume pe use karte hain – especially 18-35 age; 60/60 rule follow nahi karte',
    'High BP, diabetes, ya thyroid ke patients – circulation problems ke karan inner ear affected hoti hai',
    '50 saal se upar ke log – age-related inner ear cell loss; presbycusis ke saath tinnitus common',
    'Jo log noisy workplace mein kaam karte hain – drivers, construction workers, factory staff; daily exposure bina protection ke',
    'Anxiety, depression ya chronic stress wale patients – nervous system hypersensitivity tinnitus perception amplify karti hai',
  ],

  complications: [
    'Sleep disturbance aur chronic insomnia – tinnitus raat ko aur tej lagta hai; neend uda deta hai; jo isse aur anxiety cycle create karta hai',
    'Anxiety aur depression – lagatar awaaz sunna mental health pe serious asar dalta hai; social withdrawal bhi aata hai',
    'Progressive hearing loss – agar underlying cause (noise damage, BP) uncontrolled rahe to sunne ki kshamata aur ghat sakti hai',
  ],

  types: [
    {
      _key: 'type1',
      name: 'Subjective Tinnitus (Sabse Common – 95% Cases)',
      description: 'Sirf aapko sunai deti hai – doctor bhi stethoscope se nahi sun sakta. Cause: auditory nerve ya brain ki processing mein problem. Ye type stress, loud noise exposure, aur hearing loss se hoti hai. Homeopathy isme sabse effectively kaam karta hai.',
    },
    {
      _key: 'type2',
      name: 'Pulsatile Tinnitus',
      description: 'Awaaz dil ki dhadkan ke saath aati-jaati hai – thump thump. Cause: High BP, narrow arteries ya vascular tumor (rare). IMPORTANT: Ye type always doctor ko dikhani chahiye – serious underlying cause ho sakta hai. BP check karna pehla kadam hai.',
    },
    {
      _key: 'type3',
      name: 'Somatic Tinnitus',
      description: 'Body movements se awaaz change hoti hai – jaw move karo, neck ghumaao, awaaz badal jaati hai. Cause: Jaw joint (TMJ disorder), neck muscle tension. Ye type physiotherapy aur jaw treatment se improve hota hai. Homeopathy mein constitutional approach helpful hai.',
    },
    {
      _key: 'type4',
      name: 'Noise-Induced Tinnitus (NIHL-related)',
      description: 'Concert, explosion, ya continuous loud workplace se hua damage. Cochlear hair cells permanently damage ho jaati hain. Prevention SABSE IMPORTANT hai – ye damage easily reverse nahi hota. Early treatment se progression rokna possible hai.',
    },
    {
      _key: 'type5',
      name: 'Objective Tinnitus (Rare – 5% Cases)',
      description: 'Doctor bhi is awaaz ko special instrument se sun sakta hai. Cause: blood vessel abnormality, muscle spasm ya jaw joint issue. Pulsatile tinnitus is category mein aata hai. Specialist workup zaroori hai – vascular causes rule out karne ke liye.',
    },
  ],

  symptoms: [
    {
      _key: 'sg1',
      groupName: 'Awaaz ke Types – Tinnitus Kaisi Sunai Deti Hai',
      items: [
        'Seeti jaisi awaaz (high-pitched ringing) – sabse common type; continuous ya intermittent dono ho sakta hai',
        'Bhanbhanahat ya buzzing – electrical current jaisi feel; ya ghanti bajaane jaisi sound – aati-jaati ya continuous',
        'Heartbeat ke saath sync hona (Pulsatile Tinnitus) – serious sign; BP ya vascular issue ho sakta hai; turant doctor dikhao',
      ],
    },
    {
      _key: 'sg2',
      groupName: 'Related Problems – Saath Mein Aane Wali Takleefein',
      items: [
        'Kaan bhaari lagana ya muffled sunai dena – blocked feel; concentration mein problem',
        'Raat ko ya andheron mein tinnitus aur tej ho jaana – background noise khatam hone par zyada feel hoti hai',
        'Sar ghoomna (Vertigo) – especially Meniere\'s disease mein tinnitus + vertigo combo aata hai',
      ],
    },
    {
      _key: 'sg3',
      groupName: 'Emotional / Mental Signs',
      items: [
        'Irritability aur gussa – chhoti chhoti baat pe stress; lagatar awaaz se patience khatam hoti hai',
        'Concentration nahi hona – kaam, padhai mein mann nahi lagta; brain awaaz pe focus karta rehta hai',
        'Social withdrawal – log shor se bachte hain to aur akele rehne lagte hain; anxiety ka cycle shuru hota hai',
      ],
    },
  ],

  ccrhEvidence: 'CCRH (Central Council for Research in Homoeopathy) ke Annual Reports 2018-2022 mein nervous system aur ENT conditions mein homeopathic treatment se meaningful improvement documented hai. PubMed pe published systematic review mein homeopathic tinnitus treatment pe positive evidence noted hai. Indian Journal of Otolaryngology and Head & Neck Surgery (2020) mein tinnitus prevalence aur integrative treatment approaches pe research published hai.',

  homeopathyBenefits: {
    explanation: 'Tinnitus mein homeopathy is liye effective hai kyunki ye sirf awaaz band karne ki koshish nahi karta – balki aapke nervous system ki hypersensitivity, blood circulation, aur inner ear inflammation ko address karta hai. Homeopathic treatment mein ye dekha jaata hai ki awaaz kaisi hai (seeti, bhanbhanahat, ghanti), kab zyada aati hai (raat ko, tension mein), aur aapke baaki health patterns kaisa hai. Ye individualized approach hi homeopathy ko tinnitus mein kaargaar banati hai jab conventional medicine sirf "manage karo" bolti hai.',
    bullets: [
      'Nervous system hypersensitivity ko calm karta hai – awaaz ki intensity dheemi padti hai',
      'Sleep aur anxiety dono ek saath address hote hain – jo conventional mein alag alag treat hote hain',
      'Side-effect free – elderly aur BP patients ke liye bhi safe; long-term use possible',
      'Stress-triggered flare-ups mein turant relief milti hai – nervous system pe seedha action',
      'Long-term use mein hearing sensitivity stabilize hoti hai – deterioration slow hoti hai',
    ],
  },

  medicines: [
    {
      _key: 'med1',
      name: 'Chininum Sulphuricum',
      bestFor: 'Jinhein kaan mein tej seeti ya ghanti jaisi awaaz aati hai, saath mein vertigo (chakkar) bhi ho, aur hearing loss ho rahi ho. Meniere\'s jaisi condition ya quinine-related tinnitus ke liye sabse pehchana remedy.',
      keyIndications: [
        'Tej seeti ya ringing awaaz – high-pitched, continuous; saath mein chakkar bhi aata hai; hearing loss bhi ho sakti hai',
        'Vertigo ke saath tinnitus – Meniere\'s disease type; inner ear fluid imbalance ka picture',
        'Quinine ya chloroquine medicines se badha tinnitus – medicine-induced type mein specifically helpful',
      ],
    },
    {
      _key: 'med2',
      name: 'Kali Muriaticum',
      bestFor: 'Jab kaan band sa lagta ho, bhanbhanahat ho, aur Eustachian tube block ho – aksar cold ya sinus ke baad. Congestion-based tinnitus jisme pressure feel hota hai.',
      keyIndications: [
        'Kaan band sa lagta hai – pressure aur fullness; sardi ya sinusitis ke baad shuru hua tinnitus',
        'Bhanbhanahat – buzzing type awaaz; Eustachian tube blockage ka picture; sunne mein bhi thodi kami',
        'Mucus congestion type – naak bhi band; glands swollen; Kali Mur ka mucus pe khaas action',
      ],
    },
    {
      _key: 'med3',
      name: 'Natrum Salicylicum',
      bestFor: 'Low-pitched roaring ya buzzing awaaz, saath mein vertigo aur slight hearing loss – especially aspirin ya salicylates se badha tinnitus. Inner ear aur cochlear nerve pe specific action.',
      keyIndications: [
        'Low-pitched roaring ya buzzing – dono kaanon mein; seeti nahi, gehri bhanbhanahat jaisi awaaz',
        'Aspirin ya salicylate medicines se tinnitus badha ho – medicine-induced type mein specific',
        'Saath mein vertigo aur slight hearing loss – inner ear fluid ka involvement; Meniere\'s alternate remedy',
      ],
    },
    {
      _key: 'med4',
      name: 'Graphites',
      bestFor: 'Crackling, hissing ya seeti jaisi awaaz – saath mein kaan mein dryness, eczema history, constipation, aur obesity tendency wale patients. Constitutional medicine jisme inner ear circulation improve hoti hai.',
      keyIndications: [
        'Crackling ya hissing awaaz – paper rustle ya static jaisi; kaan ke andar dryness bhi feel hoti hai',
        'Skin complaints ke saath tinnitus – eczema, dryness, thick discharges ka history; constitutional picture',
        'Constipation aur obesity tendency – overall sluggish metabolism wale patients; inner ear circulation kharab',
      ],
    },
    {
      _key: 'med5',
      name: 'Coffea Cruda',
      bestFor: 'Jab tinnitus ke saath extreme nervousness, racing thoughts, neend nahi aati – zyaadatar stress aur overexcitement se badha tinnitus. Nervous system ki overactivity ko calm karta hai.',
      keyIndications: [
        'Stress se badha tinnitus – exam, tension, overwork ke baad zyada; raat ko aur worst',
        'Racing thoughts ke saath neend nahi – mind continuously active; tinnitus aur anxiety dono saath',
        'Overexcitement ya sudden joy se bhi trigger – nervous system hypersensitive; noise se bahut disturbed',
      ],
    },
  ],

  dietInclude: [
    {
      _key: 'di1',
      category: 'Blood Circulation Badhane Wale Foods',
      emoji: '🩸',
      items: [
        'Lahsun (Garlic) – blood circulation improve karta hai; inner ear ko better blood supply milti hai; roz 2-3 kacha',
        'Adrak (Ginger) – anti-inflammatory hai; ear inflammation aur vertigo mein helpful; chai mein add karein',
        'Haldi (Turmeric) – curcumin nerve inflammation kam karta hai; tinnitus ki intensity ghata sakta hai',
      ],
    },
    {
      _key: 'di2',
      category: 'Magnesium aur Zinc Rich Foods',
      emoji: '🥦',
      items: [
        'Paalak, Methi, Haraa saag – magnesium se auditory nerve damage protect hoti hai; roz saag khaayein',
        'Kaddu ke beej (Pumpkin seeds) – zinc se inner ear cell repair support hoti hai; snack ke taur pe',
        'Kale Chane, Rajma – zinc aur B vitamins dono; hearing nerve ke liye zaroori nutrients',
      ],
    },
    {
      _key: 'di3',
      category: 'Anti-Inflammatory aur Nerve-Friendly',
      emoji: '🐟',
      items: [
        'Machhali (omega-3 rich – rohu, singhada) – nerve inflammation kam karta hai; hafte mein 2-3 baar',
        'Akhrot (Walnuts) – omega-3 aur antioxidants se auditory neuron health badhti hai; roz 4-5',
        'Amla, Nimbu – Vitamin C se oxidative stress ghata hai jo ear damage accelerate karta hai',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'Salt aur Caffeine',
      emoji: '☕',
      items: [
        'Namak zyada – fluid retention badhata hai; inner ear pressure badh jaata hai; Meniere\'s mein especially khatarnaak',
        'Chai, Coffee zyada (3+ cups) – caffeine blood vessels constrict karta hai; tinnitus louder lagta hai; 1-2 cup tak limit',
        'Energy drinks – high caffeine + sugar combo; tinnitus aur anxiety dono badhata hai; strictly avoid',
      ],
    },
    {
      _key: 'da2',
      category: 'Processed aur Fried Foods',
      emoji: '🚫',
      items: [
        'Maida products (bread, biscuit, namkeen) – inflammation badhate hain; circulation kharab karte hain',
        'Packaged chips, namkeen – salt overload plus preservatives; ear pressure aur inflammation dono',
      ],
    },
    {
      _key: 'da3',
      category: 'Alcohol aur Sugar',
      emoji: '🍬',
      items: [
        'Alcohol – blood flow pattern disturb karta hai; inner ear mein fluid imbalance hota hai',
        'Meetha zyada (mithai, cold drinks) – blood sugar spike se nerve function affected hoti hai',
        'Artificial sweeteners – aspartame kuch logon mein tinnitus trigger karta hai; avoid better hai',
      ],
    },
  ],

  dos: [
    'Roz 7-8 ghante neend lein – neend mein brain tinnitus signals process karta hai; kam neend se awaaz louder lagti hai',
    'White noise ya nature sounds (rain, fan) raat ko chalayein – tinnitus mask hoti hai aur neend aati hai; white noise app use karein',
    'BP aur blood sugar regular monitor karein – ye dono tinnitus ke sabse common hidden causes hain; control mein rakho',
    'Stress management seekhein – meditation, anulom-vilom 10 min daily – nervous system calm hota hai; tinnitus automatically kam hoti hai',
    'Hearing protection use karein – noisy jagah pe earplugs – concerts, factories, construction sites pe zaroori',
    '60/60 rule follow karein headphones ke liye – 60% volume, maximum 60 minute continuously; over-ear headphones earbuds se safer',
    'Ek qualified homoeopath se milein poori history batake – individualized treatment best result deta hai',
    'Jaw exercises aur neck stretching daily karein – somatic tinnitus mein direct relief milti hai; TMJ tension kam hoti hai',
  ],

  donts: [
    'Headphones ya earbuds 60% se zyada volume pe mat chalao – cochlear damage permanent hota hai; koi pain nahi hota pehle',
    'Cotton bud (earbuds) kaan mein mat daalo – wax andar dhak jaati hai; pressure aur tinnitus badhta hai',
    'Pulsatile tinnitus ignore mat karo (heartbeat-sync awaaz) – ye serious vascular sign ho sakta hai; turant doctor dikhao',
    'Khud se aspirin ya pain killers zyada mat lo – ye medicines khud tinnitus cause karti hain; doctor se confirm karein',
    'Zyada shor wali jagah bina protection ke mat jao – ek baar ka loud exposure bhi damage de sakta hai',
    'Sirf "adjust kar lo" wali advice accept mat karo – tinnitus treatable hai; proper treatment se quality of life dramatically improve hoti hai',
    'Sirf ek kaan mein tinnitus ho to ignore mat karo – acoustic neuroma rule out karna zaroori hai; ENT se milein',
    'Dehydrated mat raho – 8-10 glass paani roz; dehydration blood viscosity badhati hai; inner ear circulation affect hoti hai',
  ],

  seasonalCare: {
    summer: 'Dehydration se blood viscosity badhti hai – ear circulation affected hoti hai. Roz 8-10 glass paani zaroor piyein – inner ear fluid balance theek rehta hai. AC ka direct thanda hawa kaan pe nahi padna chahiye – blood vessel spasm ho sakta hai; kaan dhakein rakhein.',
    monsoon: 'Ear infection risk highest hota hai – tinnitus jo infection-based ho wo flare ho sakta hai. Kaan mein paani nahi jaana chahiye – swimming mein ear plug use karein. Humidity mein BP fluctuate karta hai – BP monitor karte rehein; tinnitus badh sakta hai.',
    winter: 'Blood pressure sardi mein naturally thoda badh jaata hai – tinnitus aur tej ho sakta hai. Kaan dhakein bahar jaate waqt – thandi hawa se ear canal irritation. Garm soup, ginger chai (kam caffeine) – circulation warm rakhti hai; inner ear better perfused rehta hai.',
  },

  faqs: [
    {
      _key: 'faq1',
      question: 'Kaan mein seeti jaisi awaaz kyun aati hai?',
      answer: 'Kaan mein seeti jaisi awaaz – jise Tinnitus kehte hain – tab aati hai jab aapke auditory nerve ya inner ear mein koi disturbance hoti hai. Ye awaaz bahari nahi hoti – aapka brain khud generate karta hai jab hearing system mein imbalance hota hai. Sabse common causes hain: loud noise exposure, high BP, kaan ka infection, ya stress.',
    },
    {
      _key: 'faq2',
      question: 'Tinnitus ka permanent ilaaj kya hai?',
      answer: 'Tinnitus mein permanent control bilkul possible hai. Treatment ka goal hai underlying cause address karna: BP control karo, stress manage karo, ear wax clean karo. Homeopathy mein nervous system sensitivity aur circulation dono address hote hain jisse awaaz ki intensity dhire dhire kam hoti hai. Jo log treatment pe tike rehte hain unka quality of life dramatically improve hota hai.',
    },
    {
      _key: 'faq3',
      question: 'Kya tinnitus apne aap theek ho jaata hai?',
      answer: 'Acute tinnitus (jaise ek loud concert ke baad) kuch ghanton ya dino mein apne aap theek ho sakta hai. Lekin chronic tinnitus – jo 3 mahine se zyada rahe – apne aap nahi jaati, treatment chahiye. Agar 2 hafte se zyada lagataar awaaz aa rahi hai, ENT ya homeopathic doctor se zaroor milein.',
    },
    {
      _key: 'faq4',
      question: 'Tinnitus mein kya khaana chahiye aur kya nahi?',
      answer: 'Khaayein: paalak, lahsun, haldi, kaddu ke beej, omega-3 wali machhali – ye inner ear blood flow aur nerve function support karte hain. Avoid karein: zyada namak (inner ear pressure badhata hai), caffeine zyada (chai, coffee), alcohol, aur processed/packaged foods. Ye changes akele bhi awaaz ki intensity mein noticeable fark la sakte hain.',
    },
    {
      _key: 'faq5',
      question: 'Kaan mein awaaz aur chakkar saath mein aaye to kya karein?',
      answer: 'Tinnitus ke saath agar chakkar (vertigo) bhi aaye to ye Meniere\'s Disease ho sakti hai – inner ear fluid imbalance ki condition. Ye combination serious hai aur turant doctor ko dikhana chahiye. Homeopathy mein Chininum Sulphuricum, Natrum Salicylicum tinnitus aur vertigo dono address karti hain. Lekin pehle ENT specialist se diagnosis confirm karein.',
    },
    {
      _key: 'faq6',
      question: 'Kya homeopathy tinnitus mein kaam karta hai?',
      answer: 'Haan – homeopathy tinnitus mein effective approach hai, especially jab treatment individualized ho. Homeopathy ka unique faayda ye hai ki ye sirf awaaz nahi – saath mein neend, anxiety, aur stress bhi address karta hai jo tinnitus ko aur badhaate hain. Underlying vascular causes mein conventional treatment ke saath complementary use aur better hota hai.',
    },
    {
      _key: 'faq7',
      question: 'Tinnitus ki homeopathic medicine kaun si hai?',
      answer: 'Tinnitus ke liye commonly used medicines: Chininum Sulphuricum (seeti + chakkar ke saath), Natrum Salicylicum (roaring awaaz + hearing loss), Kali Muriaticum (kaan band + congestion), Graphites (crackling awaaz + skin issues), aur Coffea Cruda (stress se badha tinnitus + neend nahi). Ye medicines aapke liye kaunsi sahi hai, sirf qualified homoeopath decide kar sakta hai.',
    },
    {
      _key: 'faq8',
      question: 'Kaan mein bhanbhanahat ya buzzing kyun hoti hai?',
      answer: 'Kaan mein bhanbhanahat (buzzing) tinnitus ka ek common type hai. Ye tab hoti hai jab auditory nerve ya cochlea mein electrical signals irregular ho jaate hain. Common triggers hain: noisy environment, high stress, caffeine zyada, ya hearing nerve damage. Agar bhanbhanahat ke saath kaan bhaari lagta ho ya sunai kam de – ear wax ya infection bhi check karein.',
    },
    {
      _key: 'faq9',
      question: 'Tinnitus aur hearing loss mein kya connection hai?',
      answer: 'Jab inner ear ke cochlear cells damage hote hain – loud noise ya age se – to brain "missing sounds" compensate karne ke liye apne aap signals generate karne lagta hai. Yahi tinnitus hai. Isliye hearing loss wale 90% logo mein tinnitus hota hai. Hearing test (audiometry) zaroor karwaani chahiye – cause pata chalta hai.',
    },
    {
      _key: 'faq10',
      question: 'Raat ko kaan mein awaaz zyada kyun hoti hai?',
      answer: 'Raat ko tinnitus is liye zyada feel hoti hai kyunki daytime ke background noises khatam ho jaate hain – tinnitus relatively louder lagti hai. Solution: white noise machine, ceiling fan, ya nature sounds app use karein – tinnitus mask hoti hai aur neend aane mein help milti hai. Anxiety bhi raat mein badhti hai jo tinnitus aur amplify karta hai.',
    },
    {
      _key: 'faq11',
      question: 'Kya headphones se tinnitus ho sakta hai?',
      answer: '60% volume se zyada, 60 minute se zyada daily headphone use – cochlear hair cells damage karna shuru kar deta hai. Ye damage silent hota hai – pehle koi pain nahi hota. Golden rule: "60/60 rule" follow karein – 60% volume, maximum 60 minute continuously. Over-ear headphones earbuds se safer hain.',
    },
    {
      _key: 'faq12',
      question: 'Kya tinnitus stress se badh jaata hai?',
      answer: 'Bilkul haan – stress aur tinnitus ka direct connection hai. Jab stressed hote hain, nervous system hyperactive hoti hai, blood vessels tighten hote hain, inner ear circulation ghatti hai – tinnitus louder ho jaati hai. Exam, family tension, job pressure mein tinnitus zyada hona common complaint hai. Stress management tinnitus treatment ka core part hai.',
    },
    {
      _key: 'faq13',
      question: 'Tinnitus aur high BP mein kya sambandh hai?',
      answer: 'High BP pulsatile tinnitus (heartbeat-sync awaaz) ka most common cause hai. BP badha hone se blood vessels mein turbulence hoti hai aur ye inner ear mein sound generate karta hai. Agar awaaz dhadkan ke saath aati-jaati hai – turant BP check karwaayein. BP control karne se is type ka tinnitus significantly improve ya band ho jaata hai.',
    },
    {
      _key: 'faq14',
      question: 'Kya tinnitus cancer ya serious bimari ki nishani hai?',
      answer: 'Zyaadatar cases mein tinnitus serious nahi hoti. Lekin ye warning signs hain jab turant doctor dikhana chahiye: sirf ek kaan mein tinnitus (unilateral), awaaz heartbeat ke saath ho (pulsatile), saath mein face numbness ho, ya sunai achanak band ho jaaye. Ye signs acoustic neuroma ya vascular issue indicate kar sakte hain – rare hain lekin rule out karna zaroori hai.',
    },
    {
      _key: 'faq15',
      question: 'Tinnitus mein kaan mein tel daalna chahiye kya?',
      answer: 'Ghar par kaan mein koi bhi tel ya drops khud nahi daalna chahiye – jab tak doctor ne prescribe nahi kiya ho. Agar kaan mein infection ya perforated eardrum ho to tel nuksaan kar sakta hai. Cotton bud bilkul na karein. Agar wax suspect hai – doctor se ear syringing ya microsuction karwaayein.',
    },
    {
      _key: 'faq16',
      question: 'Tinnitus aur thyroid ka kya rishta hai?',
      answer: 'Hypothyroidism mein tinnitus ek common complaint hai. Thyroid hormones inner ear fluid balance aur cochlear blood supply regulate karte hain. Thyroid low hone par circulation slow hoti hai. Agar tinnitus ke saath thakaan, vajan badhna, ya baalon ka girna ho – thyroid test zaroor karwaayein. Thyroid treat hone se tinnitus bhi significantly improve hoti hai.',
    },
    {
      _key: 'faq17',
      question: 'Bacchon mein kaan mein awaaz aaye to kya karein?',
      answer: 'Bacchon mein tinnitus often ear infection, wax blockage, ya high decibel noise se hoti hai. "Kaan mein awaaz aati hai" – ignore nahi karein. ENT doctor se milein – hearing test aur ear examination zaroori hai. Zyaadatar bacchon mein cause treatable hota hai. Homeopathy bacchon ke liye safe option hai – side effects nil hain.',
    },
    {
      _key: 'faq18',
      question: 'Kya kaan mein awaaz pregnancy mein normal hai?',
      answer: 'Pregnancy mein hormonal changes aur blood volume increase se kuch women ko tinnitus experience hoti hai – ye zyaadatar harmless hoti hai aur delivery ke baad theek ho jaati hai. Lekin agar awaaz tej ho, sirf ek kaan mein ho, ya BP high ho – doctor ko zaroor bataayein. Homeopathy pregnancy mein safe alternative hai.',
    },
    {
      _key: 'faq19',
      question: 'Tinnitus mein MRI ya koi test zaroori hai?',
      answer: 'Routine tinnitus mein MRI immediately zaroori nahi. ENT doctor typically karega: audiometry, tympanometry, aur BP check. MRI tab zaroori hoti hai jab: sirf ek kaan mein tinnitus ho, pulsatile type ho, ya hearing suddenly loss ho gayi ho. Homeopathic doctor bhi ye tests review karke treatment personalize karta hai.',
    },
    {
      _key: 'faq20',
      question: 'Kitne time mein tinnitus theek hoti hai?',
      answer: 'Wax-related tinnitus: ek procedure ke baad ghanton mein. Infection-related: 1-2 hafte mein. Stress-triggered: 4-8 hafte mein significant improvement. Chronic tinnitus (noise-induced ya age-related): 3-6 mahine ka treatment – intensity aur frequency dono kam hoti hain. Lifestyle changes + homeopathic treatment dono saath karne par results fastest aate hain.',
    },
    {
      _key: 'faq21',
      question: 'Kya tinnitus ke liye koi exercise hai?',
      answer: 'Haan. Jaw exercises (mouth open-close, side to side) – TMJ-related tinnitus mein direct relief. Neck stretching – somatic tinnitus mein, neck tension awaaz trigger karta hai. Deep breathing aur progressive muscle relaxation – nervous system calm karta hai. Roz 30 min walk – circulation improve karta hai. Yoga mein shavasana aur pranayam specifically helpful hain.',
    },
    {
      _key: 'faq22',
      question: 'Kya ek kaan mein hi tinnitus hona zyada khatarnak hai?',
      answer: 'Haan – unilateral tinnitus pe attention zaroori hai. Dono kaan mein tinnitus zyaadatar systemic cause hai (BP, stress, wax). Sirf ek kaan mein lagatar tinnitus – acoustic neuroma ya sudden sensorineural hearing loss ka sign ho sakta hai. Agar ek hafte se zyada sirf ek kaan mein awaaz ho – doctor se milein.',
    },
    {
      _key: 'faq23',
      question: 'Kya kaan mein awaaz wale ko chai peena band karna chahiye?',
      answer: 'Poori tarah band karna zaroori nahi – quantity reduce karein. 3-4 cup se 1-2 cup par laayein aur 2-3 hafte mein fark dekkhein. Herbal tea (tulsi, ginger) better option hai – anti-inflammatory bhi hai. Ek cup subah ki chai practically koi nuksaan nahi karta – moderation is key.',
    },
    {
      _key: 'faq24',
      question: 'Neend nahi aati tinnitus ki wajah se – kya karein?',
      answer: 'Sound masking – raat ko ceiling fan, white noise app, ya nature sounds play karein. Bedtime routine – same time so jaao, screen band karo 1 hour pehle. Brain ko tinnitus ko "background" mein relegates karne mein waqt lagta hai – accept karo, fight mat karo. Homeopathy mein Coffea Cruda ya Ignatia specifically tinnitus-related anxiety aur insomnia dono address karti hain.',
    },
    {
      _key: 'faq25',
      question: 'Tinnitus mein kab turant doctor ke paas jaana chahiye?',
      answer: 'Ye warning signs nazar aayein to turant jaayein: (1) Achanak ek ya dono kaan mein sunai band ho jaaye – 24-48 ghante mein treat na ho to permanent ho sakta hai. (2) Tinnitus ke saath face ka ek side numb ya kamzor ho – stroke sign. (3) Pulsatile tinnitus shuru ho aur BP high ho. (4) Kaan mein dard + fever + tinnitus. (5) Chakkar itna zyada ho ki chalna mushkil ho.',
    },
  ],

  relatedDiseases: ['Vertigo', 'Recurrent Ear Infection', 'Allergic Rhinitis', 'Anxiety', 'Hypertension'],
}

async function seed() {
  try {
    const result = await client.createOrReplace(doc)
    console.log('✅ Tinnitus created/updated:', result._id)
    console.log('🌐 Live at: https://homeopedia.in/diseases/tinnitus')
  } catch (err) {
    console.error('❌ Error:', err)
  }
}

seed()
