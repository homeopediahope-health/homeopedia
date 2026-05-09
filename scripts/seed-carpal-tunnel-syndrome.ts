import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-carpal-tunnel-syndrome',
  _type: 'disease',
  title: 'Carpal Tunnel Syndrome',
  hindiName: 'Hath ka Dard / Kami Nass Dabna / Karpal Tunal',
  slug: { _type: 'slug', current: 'carpal-tunnel-syndrome' },
  category: 'Joints',
  publishedAt: '2026-05-03T00:00:00.000Z',
  metaTitle: 'Carpal Tunnel Syndrome – Treatment, Relief aur Homeopathy',
  metaDescription: 'Carpal Tunnel Syndrome ke karan, haath mein jhanjhanahat, numbness ka treatment aur homeopathic relief – verified info, doctor-reviewed.',

  heroText: 'Carpal Tunnel Syndrome – yaani "karpal tunal" – ek aisi condition hai jisme haath ki kaalaai (wrist) mein ek chhoti si tunnel hoti hai jiske andar ek important nerve (median nerve) guzarti hai. Jab is tunnel mein swelling ya pressure badh jaata hai, to ye nerve dab jaati hai – aur result hota hai haath mein jhanjhanahat, sunn hona, aur kamzori. Ye zyada tab hoti hai jab aap keyboard type karte hain, phone scrollte hain, ya ek hi position mein ghanton haath use karte hain. India mein IT professionals, housewives, stitching karne wale – sab is bimari ke shikar hote hain. Sahi time pe treatment ho to surgery ki zaroorat hi nahi padti.',

  quickFacts: {
    whatItIs: 'Haath ki wrist mein median nerve dabne se jhanjhanahat, numbness aur weakness – repair possible hai without surgery in most cases',
    howCommon: 'India mein IT sector workers mein lagbhag 15-20% mein CTS ke symptoms mile hain – urban working population mein tezi se badhti condition',
    treatmentDuration: 'Mild: 6-12 hafte | Moderate: 3-6 months | Severe (surgery ke baad recovery): 4-8 hafte',
    successRate: 'Homoeopathic treatment studies mein patients ne 6-8 weeks mein pain aur tingling mein noticeable improvement report kiya – individualized prescription ke saath',
  },

  causes: [
    'Wrist ki repetitive movements – daily keyboard typing, mouse use, phone scrolling se median nerve par continuous pressure',
    'Wrist mein swelling – injury, fractures, ya inflammation se tunnel ki jagah aur kam ho jaati hai',
    'Hormonal changes – pregnancy aur menopause mein body mein fluid retention badhta hai jo tunnel mein pressure create karta hai',
    'Diabetes – nerve damage (diabetic neuropathy) already weak nerves ko aur vulnerable banati hai',
    'Hypothyroidism (thyroid gland underactive hona) – tissue swelling se CTS ka risk badhta hai',
    'Arthritis (joint inflammation) – wrist joint ki swelling directly tunnel ko compress karti hai',
  ],

  riskFactors: [
    'Women – men se 3 guna zyada risk, especially pregnancy aur menopause mein',
    'IT professionals / office workers – 6+ ghante daily typing wale',
    'Housewives – kapde nikalna, bartan dhona, atta goondna – repetitive wrist use',
    'Diabetics – already compromised nerve circulation wale',
    'Overweight / obese individuals – wrist ke aaspaas extra tissue pressure badhata hai',
    '40-60 age group – nerve conduction naturally slow hoti hai is umar mein',
  ],

  complications: [
    'Permanent nerve damage – timely treatment se bachna possible hai, lekin neglect karne pe thenar muscles permanently weak ho jaati hain',
    'Thumb ki pakad khatam hona – routine kaam jaise button lagana, pen pakadna mushkil ho jaata hai',
    'Sleep disturbance – raat ko uthkar haath hilane ki zaroorat se neend toot jaati hai, jo overall health affect karta hai',
    'Bilateral spread – pehle ek haath, fir dono haath mein ho sakta hai agar root cause address na ho',
  ],

  types: [
    {
      _key: 'type1',
      name: 'Mild CTS – Shuruaati Stage',
      description: 'Thodi jhanjhanahat, especially raat ko ya subah uthne pe. Symptoms aate-jaate rehte hain – kabhi hote hain kabhi nahi. Is stage mein homeopathy sabse effective hoti hai. Surgery ki zaroorat bilkul nahi.',
    },
    {
      _key: 'type2',
      name: 'Moderate CTS – Beech ki Stage',
      description: 'Lagatar jhanjhanahat, cheezein girane lagna, grip weak hona. Poori din rehta hai, raat ko aur bura. Wrist splint + treatment urgent hai. Conservative treatment se abhi bhi response milta hai.',
    },
    {
      _key: 'type3',
      name: 'Severe CTS – Advanced Stage',
      description: 'Permanent numbness, thumb ki muscles khatam hona (thenar atrophy), haath se koi cheez pakad na paana. Lagatar, rest se bhi nahi jaata. Specialist consultation urgent – surgery evaluation zaroori. Homeopathy is stage mein complementary role mein.',
    },
    {
      _key: 'type4',
      name: 'Pregnancy-Associated CTS',
      description: 'Pregnancy ke 2nd-3rd trimester mein fluid retention se tunnel mein pressure badhta hai. Delivery ke baad mostly apne aap theek ho jaata hai. Homeopathy is type mein especially suitable hai – painkillers aur steroids avoid karne hote hain.',
    },
    {
      _key: 'type5',
      name: 'Metabolic CTS (Kisi Aur Bimari ki Wajah Se)',
      description: 'Diabetes, hypothyroidism, rheumatoid arthritis, kidney failure – in conditions mein secondary CTS hoti hai. Yahan root cause treat karna aur bhi important ho jaata hai. Occupational CTS bhi is category mein – IT workers, typists, seamstresses, assembly line workers.',
    },
  ],

  symptoms: [
    {
      _key: 'sym1',
      category: 'Nerve Pressure Ke Direct Signs',
      items: [
        'Jhanjhanahat (tingling / pins-and-needles) – thumb, index, middle finger mein',
        'Sunn hona (numbness) – especially raat ko ya subah uthte waqt',
        'Burning sensation – finger tips ya palm mein jalan jaisi feeling',
        'Electric shock feeling – fingers mein achanak current jaisa lagna',
      ],
    },
    {
      _key: 'sym2',
      category: 'Weakness Aur Functional Problems',
      items: [
        'Grip weak hona – cup ya bottle pakad ke gir jaana',
        'Cheezein chhaad dena – haath apne aap items drop karne lagta hai',
        'Buttons lagane ya kholne mein taklif – fine motor work mushkil ho jaata hai',
        'Pen ya stylus pakad ke likhne mein dard',
      ],
    },
    {
      _key: 'sym3',
      category: 'Pain Patterns (CTS Ka Khas Dard)',
      items: [
        'Raat ko dard zyada hona – lait ke haath mein blood pooling se pressure badhta hai',
        'Haath hilane se relief – is liye log raat ko haath jhakaar sote hain',
        'Dard kaalaai se upar shoulder tak jaana – referred pain pattern',
        'Thandi cheezon ko pakadne par aur bura lagna',
      ],
    },
  ],

  ccrhEvidence: {
    improvementRate: 'Patients ne 6-8 weeks mein pain aur tingling mein noticeable improvement report kiya',
    avgTreatmentPeriod: '3-6 months for sustained improvement',
    citation: 'Journal of Evidence-Based Complementary & Alternative Medicine | CCRH Clinical Research Unit studies on peripheral neuropathy & musculoskeletal conditions | 2018-2022',
    keyFindings: [
      'Individualized homoeopathic treatment group mein pain score mein significant reduction – control group se better at 8-week mark',
      'Tingling aur numbness frequency mein reduction – especially nocturnal symptoms mein',
      'No adverse effects reported – making it suitable even for pregnant patients and diabetics',
    ],
  },

  homeopathyBenefits: [
    'CTS mein problem nerve compression aur surrounding tissue inflammation ka combination hai – homeopathy in dono ko simultaneously address karta hai',
    'Local swelling kam karke nerve par pressure reduce hota hai, aur saath hi body ki overall inflammation sensitivity bhi address hoti hai',
    'Ye sirf pain mask nahi karta – balki nerve ki healing environment better banata hai jo long-term improvement ke liye zaroori hai',
    'Mild-to-moderate cases mein genuine non-surgical option hai – especially agar root cause (thyroid, diabetes, pregnancy) bhi saath mein manage ho rahi ho',
    'Pregnancy mein safe – jab painkillers aur steroids avoid karne hote hain, homeopathy ek reliable alternative ban jaata hai',
    'Diabetes mein complementary – neuropathy-prone patients mein nerve health support karta hai bina side effects ke',
    'Root cause treatment – agar CTS thyroid ya arthritis ke karan hai, to homeopathy systemic level pe kaam karta hai',
  ],

  medicines: [
    {
      _key: 'med1',
      name: 'Ruta Graveolens',
      bestFor: 'Jinke haath aur wrist mein zyada kaam karne ke baad dard aur stiffness hoti hai – repetitive strain type CTS – computer workers aur stitching wali mahilaon mein khaas taur pe.',
      keyIndications: [
        'Repetitive strain se wrist aur forearm mein dard aur stiffness',
        'Tendons aur ligaments mein weakness – zyada kaam ke baad worse',
        'Computer workers, typists, stitching workers – yahi pattern',
      ],
    },
    {
      _key: 'med2',
      name: 'Causticum',
      bestFor: 'Jab haath ki muscles progressively weak hoti ja rahi hon, grip kaafi kam ho gayi ho, aur cheezein baar baar girti hon – moderate-to-severe CTS type.',
      keyIndications: [
        'Progressive muscular weakness – grip kaafi kam ho gayi',
        'Cheezein baar baar girna – haath control kho raha hai',
        'Nerve weakness dominant feature – function loss zyada',
      ],
    },
    {
      _key: 'med3',
      name: 'Hypericum Perforatum',
      bestFor: 'Jab fingers mein burning, electric-shock jaisi shooting pain ho – nerve pain dominant cases mein, touch se pain worse ho.',
      keyIndications: [
        'Burning, shooting nerve pain – electric shock jaisi sensation',
        'Fingers mein cutting ya stabbing pain',
        'Touch se dard worse – nerve compression ka direct result',
      ],
    },
    {
      _key: 'med4',
      name: 'Rhus Toxicodendron',
      bestFor: 'Jinhe rest se dard zyada hota hai, thoda hilane-chalane se better lagta hai, subah stiffness zyada hoti hai – "rusty gate" pattern.',
      keyIndications: [
        'Rest se worse, motion se better – classic Rhus Tox pattern',
        'Subah uthke wrist aur fingers stiff aur dard karti hain',
        'Warm se relief – garam paani soak se aaram aata hai',
      ],
    },
    {
      _key: 'med5',
      name: 'Calcarea Fluorica',
      bestFor: 'Long-standing, chronic CTS – jahan wrist mein hardness aa gayi ho, tissues tighten ho gaye hon, ya bony changes bhi ho rahe hon.',
      keyIndications: [
        'Chronic CTS – saalon se chal raha hai, tissues tight aur hard',
        'Fibrous changes – wrist ki flexibility kam ho gayi',
        'Calcification tendency – bone spurs ya hard deposits wale cases',
      ],
    },
  ],

  dietInclude: [
    {
      _key: 'di1',
      category: 'Anti-Inflammatory Foods',
      emoji: '🥗',
      items: [
        'Haldi (turmeric) – curcumin mein strong anti-inflammatory properties, nerve swelling kam karta hai',
        'Adrak (ginger) – natural COX-2 inhibitor, wrist ki swelling aur dard mein help',
        'Palak, methi, saag – magnesium aur B6 ke best sources, nerve health ke liye zaroori',
        'Akhrot (walnuts) – omega-3 fatty acids nerve myelin sheath ko protect karte hain',
      ],
    },
    {
      _key: 'di2',
      category: 'Nerve Health Foods',
      emoji: '🥚',
      items: [
        'Anday (eggs) – Vitamin B12 ka achha source, nerve signal transmission ke liye',
        'Dahi / chhachh – Vitamin B6 aur probiotics, nerve function support',
        'Machli (rohu, hilsa) – omega-3 nerve inflammation reduce karta hai',
        'Kela (banana) – potassium, muscle cramps aur nerve firing regulate karta hai',
      ],
    },
    {
      _key: 'di3',
      category: 'Hydration & Mineral Support',
      emoji: '💧',
      items: [
        'Naariyal paani – natural electrolytes, tissue fluid balance maintain karta hai',
        'Til (sesame seeds) – calcium aur magnesium, muscle-nerve coordination ke liye',
        'Chickpeas (chane) – Vitamin B6 ka excellent source',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'Inflammatory Foods',
      emoji: '🚫',
      items: [
        'Maida products – biscuits, bread, noodles – inflammation badhate hain',
        'Refined sugar, mithai, cold drinks – blood sugar spike se nerve inflammation trigger',
        'Packaged/processed snacks (namkeen, chips) – high sodium se fluid retention badhti hai',
      ],
    },
    {
      _key: 'da2',
      category: 'Circulation Hamper Karne Wale',
      emoji: '🔴',
      items: [
        'Zyada chai-coffee – caffeine blood vessel constriction karta hai, nerve circulation affect',
        'Alcohol – vitamin B depletion karta hai, nerve health ke liye worst enemy',
        'Red meat zyada matra mein – arachidonic acid se body mein inflammation badhti hai',
      ],
    },
    {
      _key: 'da3',
      category: 'CTS Triggers In Disguise',
      emoji: '⚠️',
      items: [
        'Bahut thanda paani ya cold drinks – wrist ki blood vessels constrict hoti hain, symptoms worse',
        'Zyada namak wala khaana – sodium fluid retain karta hai, tunnel ki swelling badhti hai',
        'Soya products zyada matra mein – estrogen mimicking effect, hormonal CTS mein trigger',
      ],
    },
  ],

  dos: [
    'Wrist splint (specially raat ko) pahanein – sleep mein wrist bent rehne se pressure badhta hai, splint neutral position rakhta hai',
    'Nerve gliding exercises daily karein – median nerve ko tunnel mein freely move karne ki training, 5 min subah-shaam',
    'Typing setup ergonomic banayein – keyboard wrist level pe ya thoda neeche, mouse wrist-straight position mein',
    'Har 30-45 minute kaam ke baad wrist rotation aur break lein – blood flow return karta hai',
    'Subah 10 min garam paani mein haath soak karein – circulation improve karta hai, morning stiffness mein instant relief',
    'Vitamin B6 aur B12 doctor ki salaah se lein – nerve regeneration mein proven benefit hai CTS patients mein',
    'Weight control karein – zyada weight directly wrist tissue pressure badhata hai',
  ],

  donts: [
    'Wrist ko zyada backwards bend (hyperextension) mat karein – yahi position tunnel mein maximum pressure create karti hai',
    'Ek haath se heavy weight mat uthao – 2 haath use karo, nerve pe sudden pressure se symptoms flare hote hain',
    'Self-medication – steroid creams ya painkillers khud mat lo – root cause bina address kiye sirf symptoms mask hoti hain',
    'Phone zyada der ek position mein pakad ke use mat karo – mobile use mein wrist bent rehti hai, CTS ka no. 1 modern trigger',
    'Typing mein wrist ko table pe ragar ke mat rakho – friction aur pressure direct tunnel pe jaata hai',
    'Raat ko haath neeche latkaana nahi – short-term relief deta hai lekin nerve pe mechanical stress badhta hai',
    'Symptoms ignore mat karo – shuruati stage mein treatment effective hai, severe stage mein options limited ho jaate hain',
  ],

  seasonalCare: {
    winter: 'Thande mein nerve conduction slow hoti hai – CTS symptoms winter mein zyada intense hote hain. Haath garam rakhne ke liye fingerless gloves use karein. Subah warm water soak ZAROOR karein – is season mein sabse zyada helpful hai. Exercise break aur zyada frequent rakhein, har 20-25 min pe.',
    summer: 'Hydration extra zaroor hai – dehydration fluid retention pattern odd karta hai. AC mein zyada ghante kaam karne wale – room temperature 22-24°C ideal, bahut thanda bhi nerve ke liye acha nahi. Paseena aane se electrolyte loss – potassium aur magnesium diet se lein (banana, coconut water).',
    monsoon: 'Humidity mein fluid retention naturally zyada hoti hai – namak kam khaana is season mein aur bhi important hai. Wet hands se tools ya handles pakadna – extra grip force lagate hain, nerve stress badhti hai. Arthritis-associated CTS walon ko monsoon mein zyada dhyan dena chahiye.',
  },

  faqs: [
    {
      _key: 'faq1',
      question: 'Carpal Tunnel Syndrome kya hota hai? Simple mein samjhaiye.',
      answer: 'Carpal Tunnel Syndrome ek condition hai jisme haath ki kaalaai mein ek chhoti si tunnel (carpal tunnel) ke andar se guzarne wali median nerve dab jaati hai. Is dabav se thumb, index, middle finger aur ring finger mein jhanjhanahat, sunn hona, aur dard shuru ho jaata hai. India mein ye bimari keyboard users, housewives, stitching workers, sab mein aam hoti ja rahi hai.',
    },
    {
      _key: 'faq2',
      question: 'Haath mein jhanjhanahat CTS hai ya koi aur problem?',
      answer: 'Haath mein jhanjhanahat sirf CTS mein nahi – cervical spondylitis, diabetes neuropathy, vitamin B12 deficiency – sab mein ho sakta hai. CTS ki khas pehchaan ye hai: sirf thumb, index, middle aur aadhi ring finger mein jhanjhanahat – pinky (chhoti ungli) mein nahi. Raat ko zyada hona aur haath hilane se thoda aaram – ye CTS ke signature symptoms hain. Accurate diagnosis ke liye NCV (Nerve Conduction Velocity) test sabse reliable hai.',
    },
    {
      _key: 'faq3',
      question: 'CTS raat ko kyun zyada hoti hai? Neend mein haath sunn kyun ho jaata hai?',
      answer: 'Raat ko CTS zyada is liye hota hai kyunki sote waqt haath ek position mein bent rehta hai – aur is position mein carpal tunnel mein pressure maximum hota hai. Saath hi, lait ne se haath neeche hang nahi karta to fluid pool hota hai. Yahi reason hai ki log raat ko uth ke haath jhaaarte hain – haath hilane se fluid redistribute hota hai aur nerve ka pressure temporarily kam hota hai. Is liye raat ko wrist splint pahanke sona CTS management ka most important step hai.',
    },
    {
      _key: 'faq4',
      question: 'Kya homeopathy se CTS theek ho sakti hai? Surgery se bacha ja sakta hai?',
      answer: 'Haan – homeopathy CTS mein ek genuine non-surgical option hai, especially mild aur moderate stages mein. Homeopathic treatment nerve compression ke saath-saath surrounding tissue inflammation bhi address karta hai – dono cheezein simultaneously. Jo patients time pe aate hain aur 3-6 month consistently treatment lete hain, unme se kaafi patients surgery tak nahi pahunchte. Severe stage mein – jahan muscle wasting ho chuki ho – surgery ki evaluation zaroori hai, lekin wahan bhi homeopathy complementary role mein help karti hai.',
    },
    {
      _key: 'faq5',
      question: 'CTS ki homeopathic medicine kaun si hai?',
      answer: 'Homeopathy mein CTS ke liye medicine patient ki individual symptoms pe decide hoti hai – sabke liye ek hi medicine nahi hoti. Commonly indicated medicines hain: Ruta Graveolens (repetitive strain type), Hypericum (burning nerve pain type), Causticum (weakness dominant), Rhus Toxicodendron (stiffness, motion se better), Calcarea Fluorica (chronic, fibrous changes). Kaun si sahi hai ye ek qualified homoeopath aapki poori history dekh ke decide karta hai.',
    },
    {
      _key: 'faq6',
      question: 'CTS mein kya khana chahiye aur kya nahi?',
      answer: 'CTS mein anti-inflammatory diet sabse zyada help karti hai. Khana chahiye: haldi-adrak wala khaana, palak-methi saag, akhrot, machli, dahi – ye sab nerve inflammation kam karte hain. Vitamin B6 aur B12 especially important hain – inka deficiency nerve function affect karta hai. Nahi khana: zyada maida, packaged food, alcohol, bahut zyada namak (jo fluid retention badhata hai), aur zyada chai-coffee.',
    },
    {
      _key: 'faq7',
      question: 'Pregnancy mein haath sunn hona – CTS hai kya? Safe treatment kya hai?',
      answer: 'Pregnancy mein haath sunn hona – especially 2nd aur 3rd trimester mein – majority cases mein CTS hi hoti hai. Body mein fluid retention badhne se carpal tunnel mein pressure increase hota hai. Good news: delivery ke baad mostly apne aap theek ho jaata hai. Treatment ke liye: wrist splint raat ko, nerve gliding exercises safe hain, aur homeopathy pregnancy mein safe alternative option hai. Painkillers, steroids avoid karo – doctor ki guidance zaroori hai.',
    },
    {
      _key: 'faq8',
      question: 'Diabetes mein haath jhanjhanahat – CTS hai ya diabetic neuropathy?',
      answer: 'Diabetic neuropathy mein: both hands AND feet mein jhanjhanahat, generally soles pe zyada, "stocking-glove" pattern. CTS mein: sirf haath, sirf thumb side ke specific fingers, raat ko zyada, haath hilane se better. Kisi ek ki symptom pattern doosre se overlap bhi kar sakti hai – is liye NCV test se accurate diagnosis zaroor karwaayein. Diabetes mein CTS ka risk 2-3 guna zyada hota hai. Dono ek saath bhi ho sakti hain.',
    },
    {
      _key: 'faq9',
      question: 'Housewife ko haath dard – CTS ho sakta hai?',
      answer: 'Bilkul. India mein CTS ka ek major underdiagnosed group housewives hain. Bartan dhona, kapde nikalna aur nichorana, atta goondna, jhadu-pochha – ye sab repetitive wrist movements exactly wahi strain karte hain jo CTS trigger karta hai. Zyada tar sochte hain "haath mein dard toh hoga hi kaam se" – lekin ye sochna galat hai. Agar jhanjhanahat bhi hai, raat ko haath sunn hota hai – to ye CTS ho sakta hai aur treat karna chahiye.',
    },
    {
      _key: 'faq10',
      question: 'CTS mein surgery ki zaroorat kab padti hai?',
      answer: 'Surgery ka decision specific condition mein hota hai: jab 6 month proper non-surgical treatment ke baad bhi improvement nahi ho, ya severe nerve damage ho (NCV pe conduction almost absent ho), ya thenar muscle wasting ho rahi ho. Surgery (carpal tunnel release) ek relatively simple procedure hai – local anesthesia mein hoti hai, 15-30 minute. Darna nahi chahiye – lekin surgery sirf tab karwani chahiye jab genuinely zaroori ho. Early treatment se surgery tak pahunchna hi nahi – yahi goal hona chahiye.',
    },
    {
      _key: 'faq11',
      question: 'CTS kitne time mein theek hoti hai?',
      answer: 'Mild CTS jo shuruati stage mein pakdi gayi ho – 6 to 12 hafte mein significant improvement ho sakta hai with proper treatment, rest aur exercises. Moderate cases mein 3-6 month ka time lag sakta hai. Important baat: jitni jaldi treatment shuru karo, utna jaldi aur completely theek hone ke chances zyada hain. Ignore karne pe symptoms chronic ho jaate hain.',
    },
    {
      _key: 'faq12',
      question: 'CTS mein homeopathy aur physiotherapy saath mein chal sakte hain?',
      answer: 'Bilkul haan – aur ye combination asar zyada karta hai. Physiotherapy nerve gliding, ultrasound therapy, aur splinting se local level pe kaam karta hai. Homeopathy systemic level pe – body ki inflammation response aur nerve health dono address karta hai. Dono ek doosre ko block nahi karte. Doctor ki salaah se dono simultaneously use karna mild-moderate CTS mein excellent results de sakta hai.',
    },
    {
      _key: 'faq13',
      question: 'CTS permanent theek ho sakti hai ya baar baar aati rehti hai?',
      answer: 'Agar root cause address ho jaaye – permanent control bilkul possible hai. Agar CTS sirf ergonomics theek karne se, ya pregnancy ke baad, ya thyroid treat karne se theek hui – to wapas nahi aati. Agar cause ongoing hai (jaise profession change nahi hua, diabetes uncontrolled hai) – to symptoms manage hote hain but wapas aa sakte hain. Isliye treatment mein sirf nerve decompression nahi – root cause identification sabse important step hai.',
    },
    {
      _key: 'faq14',
      question: 'CTS mein exercise kaun si karein? Ghar pe kya kar sakte hain?',
      answer: 'CTS ke liye 3 types of exercises most effective hain: (1) Nerve gliding exercises – haath seedha rakho, phir gradually fingers aur wrist ko different positions mein move karo. (2) Wrist stretches – ek haath seedha rakho, dusre haath se fingers ko gentle backward push do, 15-20 seconds hold, 5 baar. (3) Tendon gliding – fingers ko flat, hook, fist, straight fist position mein cycle karo. 5-10 minute subah aur shaam consistently follow karo. Zyada force nahi lagani, gentle stretch enough hai.',
    },
    {
      _key: 'faq15',
      question: 'CTS mein mobile phone aur laptop use karna chahiye ya nahi?',
      answer: 'Completely band karna realistic nahi – lekin smart use ZAROOR karein. Mobile: Phone ko surface pe rakho ya stand use karo – haath mein 30 minute se zyada continuously pakad ke scroll nahi karna. Voice typing use karo. Laptop: Keyboard height wrist-neutral position pe rakho, external keyboard aur wrist rest pad use karo. Har 30-45 minute pe 5 min break lo. India mein CTS cases mein mobile use ek growing trigger hai.',
    },
    {
      _key: 'faq16',
      question: 'CTS aur cervical spondylitis mein kya fark hai?',
      answer: 'CTS: Problem wrist level pe hai – median nerve compress hoti hai. Numbness sirf haath mein, specific fingers mein, raat ko zyada. Cervical Spondylitis: Problem gardan/neck mein hai – numbness haath mein bhi, lekin saath mein gardan dard, shoulder se lekar fingers tak dard. Dono ek saath ek hi patient mein ho sakte hain – ise "double crush syndrome" kehte hain. NCV aur MRI spine se dono differentiate hote hain.',
    },
    {
      _key: 'faq17',
      question: 'NCV test kya hota hai? CTS ke liye zaroori hai?',
      answer: 'NCV – Nerve Conduction Velocity – test measure karta hai ki aapki nerve mein signal kitni speed se travel kar raha hai. CTS mein median nerve slow hoti hai – NCV test precisely ye measure karta hai. Kab zaroor karwayein: Agar symptoms 3-4 hafte se zyada hain, agar weakness aa gayi hai, agar surgery discuss ho rahi hai – tab NCV mandatory hai. Ye confirm karta hai ki actually CTS hai aur kitna severe hai.',
    },
    {
      _key: 'faq18',
      question: 'Kya CTS dono haathon mein ek saath ho sakti hai?',
      answer: 'Haan – bilateral CTS (dono haath) possible hai aur actually uncommon nahi. Zyada tar pehle dominant hand mein shuru hota hai. Agar root cause systemic ho – jaise diabetes, hypothyroidism, ya fluid retention – to dono hands simultaneously ya sequentially affect ho sakte hain. Agar dono haathon mein symptoms hain to underlying cause ka pata lagana aur bhi zaroor ho jaata hai.',
    },
    {
      _key: 'faq19',
      question: 'Weight loss se CTS theek ho sakti hai?',
      answer: 'Haan – agar aapka weight zyada hai to weight loss genuinely CTS mein help karta hai. Overweight hone se wrist ke aaspaas extra fatty tissue tunnel pe pressure badhata hai. Studies mein dekha gaya hai ki meaningful weight loss (5-10% body weight) ke baad CTS symptoms mein significant improvement hota hai. Sirf CTS nahi, overall nerve health, diabetes control, aur joint health sab improve hoti hai weight loss se.',
    },
    {
      _key: 'faq20',
      question: 'Child ya teenager ko CTS ho sakta hai?',
      answer: 'Bachon mein CTS bahut rare hai – lekin hota hai. India mein ab teenagers mein mobile aur gaming se related cases aa rahe hain – 5-6 ghante daily gaming, constantly bent wrist position mein. Agar kisi teenager ke haath mein consistent numbness ya tingling hai, serious lena chahiye – pediatric specialist se evaluation karwayein. Gaming breaks, wrist neutral position – early prevention se protect kiya ja sakta hai.',
    },
  ],

  relatedDiseases: [
    'Cervical Spondylosis',
    'Rheumatoid Arthritis',
    'Hypothyroidism',
    'Diabetes',
    'Tennis Elbow',
  ],
}

async function seed() {
  try {
    const result = await client.createOrReplace(doc)
    console.log('✅ Carpal Tunnel Syndrome created/updated:', result._id)
    console.log('🌐 Live at: https://homeopedia.in/diseases/carpal-tunnel-syndrome')
  } catch (err) {
    console.error('❌ Error:', err)
  }
}

seed()
