import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-recurrent-ear-infection',
  _type: 'disease',
  title: 'Recurrent Ear Infection',
  hindiName: 'Baar Baar Kaan Ka Dard / Kaan Pakna / Kaan Bahna',
  slug: { _type: 'slug', current: 'recurrent-ear-infection' },
  category: 'Respiratory',
  publishedAt: '2026-05-05T00:00:00.000Z',
  metaTitle: 'Kaan Dard Ka Homeopathic Ilaaj | Homeopedia',
  metaDescription: 'Recurrent ear infection (baar baar kaan dard) ke causes, types, homeopathic treatment aur diet – verified, doctor-reviewed Hinglish guide.',

  heroText: 'Kaan ka infection – jise medical language mein Otitis Media ya Otitis Externa kehte hain – tab hota hai jab kaan ke andar bacteria ya virus enter karte hain aur infection paida karte hain. Jab ye infection baar baar – yaani teen mahine mein teen se zyada baar, ya ek saal mein chaar se zyada baar aaye – to ise "Recurrent Ear Infection" kehte hain. Ye bimari India mein bachon mein sabse zyada dekhi jaati hai, lekin adults ko bhi hoti hai – khaaskar unhe jinhe allergies, sinus, ya immunity ki samasya hai. Samay par aur sahi ilaaj na ho to kaan ki sunne ki taqat bhi prabhavit ho sakti hai.',

  quickFacts: {
    whatItIs: 'Recurrent = 3+ ear infections in 3 months ya 4+ per year; kaan ke beech ya bahar ke hisse mein bacterial ya viral infection; Eustachian tube dysfunction aksar root cause hoti hai',
    howCommon: 'India mein lagbhag 6.3% school-age children chronic ear problems se affected hain (GBD 2021); CSOM prevalence ~7% in some rural cohorts; bacchon mein second most common infection after cold',
    treatmentDuration: 'Acute episode: 7-10 din | Constitutional homeopathic treatment: 3-6 mahine; recurrence pattern 3-4 mahine mein tootna shuru hota hai',
    successRate: 'European Journal of Integrative Medicine (2019) mein children otitis media mein homeopathic treatment se significant reduction in recurrence documented; CCRH Annual Report 2019-22 mein bhi ENT cases mein improvement noted',
  },

  causes: [
    'Bacterial ya viral upper respiratory infection – sardi, flu, throat infection jo Eustachian tube ke zariye kaan tak pahunch jaati hai; sabse common route',
    'Eustachian tube ka chhota ya horizontal angle hona – isliye babies aur chote bachon mein zyada common; anatomy hi vulnerability create karti hai',
    'Allergic rhinitis – naak ki allergy jo Eustachian tube ko block karti hai; allergy control kiye bina recurrence nahi rukta',
    'Adenoids ka bada hona – naak ke peeche ke tissue bacteria ko store karte hain aur Eustachian tube block karte hain; bacchon ka hidden culprit',
    'Kaan mein paani girna – swimming ya baath ke baad paani andar rehna; Otitis Externa ka main cause',
    'Immunity ka kamzor hona – diabetes, malnutrition ya recurrent illness se; baar baar aane ka matlab immune response insufficient hai',
  ],

  riskFactors: [
    '6 mahine se 2 saal ke bacche – Eustachian tube anatomy ki wajah se sabse vulnerable age group',
    'Daycare ya creche mein rehne wale bacche – zyada infections ka exposure; group settings mein chain transmission',
    'Bottle-fed babies – breastfeeding nahi milne se immunity aur tube function dono affect hote hain',
    'Jinhe perennial allergies ya sinusitis hai – permanent inflammation Eustachian tube ko hamesha block rakhti hai',
    'Passive smokers – ghar mein koi cigarette peeta ho to bacche mein risk double; nasal lining damage hoti hai',
    'Cotton buds ya kaan saaf karne ki galat aadat wale adults – skin scratch hoti hai jo infection ka raasta kholti hai',
  ],

  complications: [
    'Hearing loss – temporary ya permanent – middle ear fluid se conductive hearing loss; bachon mein speech delay aur school performance affect hota hai',
    'Kaan ka parda fat jaana (CSOM) – chronic discharge shuru ho jaata hai; India mein ye bahut common neglected complication hai',
    'Mastoiditis – kaan ke peeche ki haddi mein infection phailna; serious condition jo hospital admission maangti hai',
    'Cholesteatoma – kaan ke andar abnormal tissue growth; surgery zaroori; baar baar untreated infection ka long-term result',
  ],

  types: [
    {
      _key: 'type1',
      name: 'Otitis Media – Middle Ear Infection',
      description: 'Kaan ke beech ke hisse mein infection. Sabse common type – khaaskar 6 mahine se 2 saal ke bachon mein. Aksar sardi-khansi ke baad aata hai. AOM (Acute) mein achanak dard aur bukhaar; OME ("Glue Ear") mein andar paani ya mucus jama ho jaata hai – dard kam lekin sunne mein zyada takleef – ye "silent" type hai jo aksar miss ho jaata hai.',
    },
    {
      _key: 'type2',
      name: 'Otitis Externa – Swimmer\'s Ear',
      description: 'Kaan ke bahari hisse ya kaan ki nali mein infection. Paani girne ke baad, cotton bud use karne ke baad, ya humid mausam mein zyada hoti hai. Kaan mein khujli, dard aur discharge aata hai. Monsoon aur swimming pool season mein peak hota hai.',
    },
    {
      _key: 'type3',
      name: 'CSOM – Kaan Bahna (Chronic)',
      description: 'Kaan ke parde (tympanic membrane) mein chhed ho jaata hai aur baar baar discharge – paani ya mawad – aata rehta hai. India ke tier 2-3 cities mein ye bahut common hai. Agar timely treat na ho to permanent hearing loss ka risk. Homeopathy discharge frequency aur amount dono mein meaningful improvement deti hai.',
    },
    {
      _key: 'type4',
      name: 'Eustachian Tube Dysfunction (ETD)',
      description: 'Kaan aur naak ko jodne wali tube band ho jaati hai – usually allergies ya sinusitis ki wajah se. Kaan mein bhaari pan, pressure, ya "band" feel hota hai. Recurrent infection ka yahi root cause aksar hota hai – ise address kiye bina sirf infections treat karna short-term solution hai.',
    },
  ],

  symptoms: [
    {
      _key: 'sg1',
      groupName: 'Dard aur Pressure',
      items: [
        'Kaan ke andar ya aaspaas tez ya thoda-thoda dard – aksar raat ko zyada; lait ne pe worse hona common',
        'Kaan mein bhari-bhari feeling, "band" ya "plugged" feel – jaise cotton laga ho; pressure change pe worse',
        'Chote bacche baar baar kaan ko kheenchte ya pakdte hain – ye unka "kaan mein dard" express karne ka tarika hai; saath mein irritability aur raat ko uthna',
      ],
    },
    {
      _key: 'sg2',
      groupName: 'Discharge aur Sunaai Dene Ki Takleef',
      items: [
        'Kaan se paani, pus (mawad) ya thoda khoon aana – ye kabhi normal nahi; turant doctor dikhao',
        'Sunne mein kami – awaaz dooron se ya "cotton mein" aati lagti hai; bacche mein TV ki awaaz zyada karna',
        'Kaan mein seeti ki awaaz (tinnitus) – infection se auditory nerve pe pressure; infection theek hone ke baad bhi rahe to ENT se milein',
      ],
    },
    {
      _key: 'sg3',
      groupName: 'Saath Mein Aane Wale Signs',
      items: [
        'Bukhaar – aksar 100-102°F tak acute episode mein; 102°F se zyada ho ya 2-3 din na jaaye to emergency',
        'Naak behna, band naak, gale mein kharaash – upper respiratory infection se ear infection ka seedha connection',
        'Chote bacchon mein neend ki takleef, feeding problems, zyada rona – ye sab ear pain ke indirect signs hain',
      ],
    },
  ],

  ccrhEvidence: 'CCRH (Council for Research in Homoeopathy) ke Annual Report 2019-22 mein ENT aur recurrent respiratory infections ke cases mein homeopathic constitutional treatment se meaningful improvement documented hai. European Journal of Integrative Medicine (2019) mein children ke otitis media cases mein homeopathic treatment se recurrence mein significant reduction paaya gaya. Adenoid aur Eustachian tube cases mein Kali Mur aur Pulsatilla jaisi medicines ka clinical evidence growing hai.',

  homeopathyBenefits: {
    explanation: 'Homeopathy recurrent ear infection mein sirf ek episode treat nahi karta – balki ye poochta hai ki ye baar baar kyun aata hai. Aapki immunity, allergy tendency, Eustachian tube ki sensitivity – sab ko address karta hai. Isiliye jo baccha har 2 mahine mein antibiotics leta hai, uski "infection ki frequency" homeopathic constitutional treatment se significantly kam ho sakti hai. Saath mein acute episodes mein bhi dard, bukhaar aur discharge mein relief milta hai.',
    bullets: [
      'Recurrence todna – baar baar antibiotic cycle se bachana; root cause address karna',
      'Adenoids aur Eustachian tube dysfunction ko naturally address karna – jo antibiotics nahi karte',
      'Bachon ke liye completely safe – koi side effects, koi drowsiness, koi antibiotic resistance',
      'Allergy aur immunity dono pe saath mein kaam karna – ek treatment, multiple benefits',
      'Adults mein chronic CSOM (kaan bahna) mein discharge control karna aur healing promote karna',
    ],
  },

  medicines: [
    {
      _key: 'med1',
      name: 'Pulsatilla',
      bestFor: 'Jis bacche ya adult ka kaan band feel ho, discharge thick aur yellow-green ho, raat ko zyada takleef ho, aur jo bahut clingy ya emotional ho – especially sardi ke baad aaya infection. Glue ear aur OME mein bhi.',
      keyIndications: [
        'Kaan band feel hona – pressure aur fullness; Eustachian tube blockage type; sardi ke baad directly ear problem shuru',
        'Thick yellow-green discharge – congestion type infection; outdoors ya fresh air mein thoda better lagta hai',
        'Raat ko zyada takleef, bahut clingy bachha – emotional aur physical symptoms ka combination; consolation chahiye',
      ],
    },
    {
      _key: 'med2',
      name: 'Belladonna',
      bestFor: 'Jab infection achanak aaye – tez dard, tez bukhaar, kaan mein throbbing, chehra laal ho. Acute Otitis Media ke pehle 24-48 ghante ka sabse common remedy.',
      keyIndications: [
        'Achanak tez dard – throbbing ya beating – kaan ke andar; raat ko suddenly shuru hona common',
        'Tez bukhaar ke saath chehra laal – intense inflammatory picture; touch se dard worse',
        'Acute stage – infection ek dum peak par hai; iske baad Hepar ya Pulsatilla ki zaroorat pad sakti hai',
      ],
    },
    {
      _key: 'med3',
      name: 'Hepar Sulphuris Calcareum',
      bestFor: 'Jab kaan mein mawad (pus) ban raha ho ya aa raha ho, infection suppurative stage mein ho, patient bahut touch-sensitive aur irritable ho, thand se takleef zyada. CSOM aur discharge wale cases.',
      keyIndications: [
        'Pus ya discharge aa raha hai – suppurative stage; thodi si thand se ya draught se bhi dard badh jaata hai',
        'Bahut touch-sensitive – kaan ko haath lagao to patient jump kare; extreme irritability ke saath',
        'CSOM ya recurrent discharge – pus formation resolve karna ya discharge control karna is medicine ka kaam',
      ],
    },
    {
      _key: 'med4',
      name: 'Kali Muriaticum',
      bestFor: '"Glue Ear" (OME) wale cases – andar paani ya mucus jama ho, sunne mein kami, naak band, glands swollen. Adenoid problems ke saath aane wale recurrent ear infections mein specifically helpful.',
      keyIndications: [
        'Middle ear mein fluid jama – "glue ear" type; sunne mein kami par dard khaas nahi; silent type infection',
        'Naak band aur adenoids bade – Eustachian tube block hone ki wajah andar se hai; adenoid + ear combo',
        'Recurrent infections mein root cause address – mucus viscosity aur tube blockage dono pe kaam karta hai',
      ],
    },
    {
      _key: 'med5',
      name: 'Mercurius Solubilis',
      bestFor: 'Jab kaan se badbudar discharge aaye, raat ko dard zyada ho, saath mein gala bhi kharab ho, aur paet pe sweating ho. Throat-ear-lymph nodes saath mein involve wale chronic recurring infections.',
      keyIndications: [
        'Badbudar discharge – offensive smell ke saath pus; raat ko dard significantly worse hota hai',
        'Gala bhi kharab saath mein – tonsils, lymph nodes swollen – Eustachian tube se aayi infection ka picture',
        'Chronic recurring pattern – har baar same type of infection; constitutional role mein bahut helpful',
      ],
    },
  ],

  dietInclude: [
    {
      _key: 'di1',
      category: 'Immunity Boosters',
      emoji: '🛡️',
      items: [
        'Haldi waala doodh – curcumin mein natural anti-inflammatory aur antimicrobial properties hain; raat ko piyen',
        'Adrak ki chai (no milk) – ginger infection ke against immune response strengthen karta hai; din mein 2 baar',
        'Lahsun (2-3 kacha roz) – allicin compound bacteria ke against natural agent hai; khane mein mix karein',
        'Amla / Indian gooseberry – Vitamin C ka best source; immunity ke liye; roz 1-2 amla ya juice',
      ],
    },
    {
      _key: 'di2',
      category: 'Anti-Inflammatory Foods',
      emoji: '🥗',
      items: [
        'Palak, methi, saag – zinc aur Vitamin A se bharpur; tissue healing mein help karte hain',
        'Sweet potato / shakarkandi – beta-carotene naak aur kaan ki mucus membrane ko strong karta hai',
        'Akhrot aur badam – omega-3 se inflammation kam hoti hai; roz 4-5 akhrot helpful',
      ],
    },
    {
      _key: 'di3',
      category: 'Hydration & Mucus Thinning',
      emoji: '💧',
      items: [
        'Zyada paani – 8-10 glass – Eustachian tube ka mucus patla rehta hai; tube khuli rehti hai',
        'Warm soups (tomato, dal shorba) – steam aur warmth tube ko open rakhte hain; sardi ke doran especially',
        'Nimbu paani – Vitamin C aur hydration dono saath; infections ke doran immunity support',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'Dairy (Infection Ke Doran)',
      emoji: '🥛',
      items: [
        'Doodh, paneer, dahi (infection active ho to) – dairy mucus production badhata hai; Eustachian tube aur zyada block hoti hai',
        'Ice cream, cold drinks, thande products – thand se tube aur sikar jaati hai; infection worse hoti hai',
      ],
    },
    {
      _key: 'da2',
      category: 'Refined & Sugary Foods',
      emoji: '🍬',
      items: [
        'Maida, white bread, packaged biscuits – refined carbs immune response kamzor karte hain',
        'Meetha – candy, chocolate, sugary drinks – bacteria ko "feed" karte hain, inflammation badhti hai',
      ],
    },
    {
      _key: 'da3',
      category: 'Allergy Triggers',
      emoji: '🚫',
      items: [
        'Jo food personally allergy karta ho (common: eggs, peanuts) – allergic response Eustachian tube inflammation trigger karti hai',
        'Bahut teekha khana (infection ke doran) – irritation badhta hai; adults mein alcohol bhi avoid karein',
      ],
    },
  ],

  dos: [
    'Poora treatment course complete karo – dard band hone ke baad bhi medicine band mat karo; infection andar rehti hai aur resist ho jaati hai',
    'Naak saaf rakhna – nasal saline rinse ya steam regularly; Eustachian tube open rehti hai; raat ko sone se pehle karo',
    'Breastfeeding zaroor karwao babies ko (agar possible ho) – ear infection ka risk significantly kam hota hai; ye proven protection hai',
    'Ear check follow-up regularly karwao – khaaskar recurrent cases mein hearing test bhi 3-6 mahine par; sunne ki kami pakad mein aaye',
    'Ghar mein smoking band karo ya bahar se karo – passive smoke ear infection ka major risk factor hai; bacchon ke liye especially important',
    'Swimming ke baad kaan tilt karke paani nikalo – cotton bud nahi; sirf gentle tilt; ear plug ka option bhi consider karein',
    'Adenoids check karwaao agar bacche ki naak hamesha band hai – adenoid connection treat kiye bina recurrence nahi rukti',
    'Steam lo regularly sardi ke doran – Eustachian tube pressure kam rehti hai; naak clear rehti hai to kaan safe rehta hai',
  ],

  donts: [
    'Cotton bud (ear bud) kaan ke andar mat ghusao – wax andar push hoti hai aur skin scratch hoti hai; infection ka raasta khulta hai',
    'Kaan mein koi bhi ghar ka tel khud mat dalo bina doctor ki salaah ke – perforated eardrum mein tel serious damage kar sakta hai',
    'Antibiotic khud mat shuru karo – without prescription antibiotic resistance badhti hai; mild cases mein zaroori bhi nahi hoti',
    'Swimming pool mein jaana infection active hone ke doran – paani andar jaata hai, worse hota hai; theek hone ke 2 hafte baad jaayein',
    'Dard ko "apne aap theek hoga" sochke ignore mat karo – children mein 3 din se zyada dard ya bukhaar ho to turant doctor',
    'Kaan ke peeche sujan, sar mein tez dard, ya gardan akad jaaye to ghar mat baitho – ye mastoiditis ya meningitis signs hain; emergency hai',
    'Incomplete antibiotic course band mat karo – resistance create hoti hai aur next infection treat karna mushkil ho jaata hai',
    'Sirf ek doctor ke paas mat ruko agar baar baar ho raha hai – ENT + homeopath ka combination approach best results deta hai',
  ],

  seasonalCare: {
    summer: 'Swimming pool mein jaane ke baad kaan zaroor sukhao. AC se achanak temperature change – immunity stress se infection possible. Dusty environment mein nose-mouth cover karo – naak se infection kaan tak pahunchti hai. Paani khub piyo – hydration Eustachian tube mucus patla rakhta hai.',
    monsoon: 'Highest risk season – humidity se kaan ki nali mein fungal ya bacterial growth zyada. Swimming ke baad kaan tilt karke paani nikalo, cotton bud nahi. Naak band ho to doctor se milein – Eustachian tube block se ear infection ka risk. Baalon ko jaldi sukhao – kaan ke paas moisture mat rehne do.',
    winter: 'Sardi-khansi ke saath ear infection ka highest risk – school-going bachon mein especially. Gunguna paani pilao, cold drinks bilkul band. Raat ko sone se pehle naak saaf karwao (nasal saline drops help karte hain). Agar baccha baar baar kaan pakde – delay mat karo, doctor dikhao.',
  },

  faqs: [
    {
      _key: 'faq1',
      question: 'Baar baar kaan mein dard kyun hota hai – kya ye serious hai?',
      answer: 'Baar baar kaan mein dard aana – yaani 3 mahine mein 3 se zyada baar ya saal mein 4+ baar – isse recurrent ear infection kehte hain aur ye ignore karne wali bimari nahi hai. Iska matlab hai ki underlying problem – allergy, Eustachian tube dysfunction, ya immunity – treat nahi ho rahi. Sirf dard band karna kaafi nahi; root cause address karna zaroori hai.',
    },
    {
      _key: 'faq2',
      question: 'Bachon mein baar baar kaan ka infection kyun hota hai?',
      answer: 'Bachon mein – khaaskar 6 mahine se 2 saal ke – Eustachian tube chhoti aur horizontal hoti hai, isliye naak ka infection aasani se kaan tak pahunch jaata hai. Daycare mein rehne wale, bottle-fed, ya passive smoking wale bachon mein risk aur zyada hota hai. Breastfeeding, ghar mein smoking band, aur har episode properly treat karna – ye teen sabse important steps hain.',
    },
    {
      _key: 'faq3',
      question: 'Kaan mein dard ka ghar par ilaaj kya hai?',
      answer: 'Ghar par turant relief ke liye: gunguna kapda (warm compress) kaan ke bahar lagao – 10-15 min, ye dard kam karta hai. Paani zyada piyo. Steam lo – Eustachian tube pressure kam hoti hai. Lekin ye sirf temporary relief hai – agar dard 24-48 ghante mein theek na ho, bukhaar aaye, ya discharge aaye to turant doctor ke paas jaana zaroori hai. Kaan mein koi bhi tel bina doctor ki salaah ke mat dalo.',
    },
    {
      _key: 'faq4',
      question: 'Kaan se paani aana – kya ye khatarnak hai?',
      answer: 'Kaan se paani aana kabhi bhi normal nahi hota – ye doctor ko turant dikhane ka sign hai. Transparent paani aa raha hai to tube leak ho sakti hai; yellow-green ya badbudar discharge ho to bacterial infection active hai; khoon aa raha ho to kaan ka parda fat sakta hai. India mein CSOM bahut common hai aur agar saalon tak ignore karein to permanent hearing loss ho sakti hai.',
    },
    {
      _key: 'faq5',
      question: 'Kaan ka infection kitne din mein theek hota hai?',
      answer: 'Acute ear infection – agar sahi treatment mile – 7-10 din mein kaafi better ho jaata hai. Lekin andar ka fluid (glue ear) 4-12 hafte tak bhi reh sakta hai jisme sunne mein kami rehti hai. Homeopathic treatment mein acute episode 5-7 din mein controlled ho sakta hai; lekin baar baar aane wale infections ke liye constitutional treatment 3-6 mahine leti hai.',
    },
    {
      _key: 'faq6',
      question: 'Kya homeopathy ear infection mein kaam karta hai – ya antibiotics hi sahi hain?',
      answer: 'Homeopathy ear infection mein kaam karta hai – khaaskar recurrent cases mein. Homeopathy ka unique fayda ye hai ki ye sirf ek episode treat nahi karta – Eustachian tube dysfunction, allergy aur immune sensitivity – sab pe saath mein kaam karta hai. Antibiotics acute severe cases mein faster aur zaroori hain – homeopathy unka dushman nahi, complementary hai.',
    },
    {
      _key: 'faq7',
      question: 'Kaan ke infection mein kaun si homeopathic medicine sahi hai?',
      answer: 'Medicine symptom aur patient ke type par depend karti hai – isliye ek qualified homoeopath se milna zaroori hai. Commonly Pulsatilla (blocked feeling, yellow discharge, emotional bacche), Belladonna (sudden tez dard, bukhaar), Hepar Sulph (pus, discharge), Kali Mur (glue ear, fluid), aur Mercurius (badbudar discharge, raat ko zyada dard) use ki jaati hain.',
    },
    {
      _key: 'faq8',
      question: 'Kaan ka infection permanently theek ho sakta hai?',
      answer: 'Permanent control bilkul possible hai – aur ye homeopathy ka sabse bada advantage hai is bimari mein. Jo log sirf antibiotics lete hain wo har naya episode treat karte hain – root cause nahi. Homeopathic constitutional treatment immune system aur Eustachian tube sensitivity address karta hai. 6-12 mahine mein episodes itne rare ho jaate hain ki practically normal life hoti hai.',
    },
    {
      _key: 'faq9',
      question: 'Kaan ka infection aur hearing loss – kya dono related hain?',
      answer: 'Haan – recurrent ear infection aur hearing loss directly related hain. Middle ear mein fluid jama rehne se conductive hearing loss hoti hai. Bachon mein ye zyada serious hai – agar hearing loss 6 mahine se zyada rahe to speech delay aur school performance affect ho sakta hai. Har ear infection episode properly treat karna aur regular hearing test zaroori hai.',
    },
    {
      _key: 'faq10',
      question: 'Kaan ke andar kharish aur band feel – kya ye bhi infection hai?',
      answer: 'Kaan mein kharish + band feel allergy (allergic otitis), early fungal infection (otomycosis), ya Eustachian tube dysfunction ho sakti hai. Har baar ye bacterial infection nahi hoti – isliye antibiotic lena zaroori nahi aur galat bhi ho sakta hai. Homeopathy mein iska bahut achha response milta hai. Agar saath mein sunne mein kami, discharge ya bukhaar ho to doctor zaroor dikhao.',
    },
    {
      _key: 'faq11',
      question: 'Kaan ka infection aur adenoids – kya connection hai?',
      answer: 'Bahut gehri connection hai – especially bachon mein. Adenoids bade ho jaate hain to Eustachian tube ka opening block karte hain aur bacteria ke liye "reservoir" ban jaate hain. Jo baccha baar baar ear infection se pareshan hai aur saath mein naak bhi band rehti hai, bolne mein nasal tone aata hai – adenoids check karana zaroori hai. Homeopathy adenoid hypertrophy mein early cases mein kaam karta hai.',
    },
    {
      _key: 'faq12',
      question: 'Kaan ka infection sirf bachon ko hota hai ya adults ko bhi?',
      answer: 'Adults ko bhi hota hai – aur adults mein aksar diagnose hi nahi hota. Adults mein zyada chances: jinhe allergic rhinitis hai, jo bahut swim karte hain, jinki immunity kamzor hai. Adults mein symptom thoda alag – tez dard ki jagah "fullness", "muffled hearing" ya tinnitus zyada feel hoti hai. Baar baar sardi ke baad sunne mein takleef aaye to ear check zaroori hai.',
    },
    {
      _key: 'faq13',
      question: 'Kaan bandh feel hota hai sardi ke baad – kya karein?',
      answer: 'Ye Eustachian tube dysfunction hai – sardi ke baad tube band ho jaati hai. Ghar par: steam lo, nasal saline use karo, gunguna paani piyo, aur naak bahut zor se mat saafko. Agar 2 hafte mein better nahi hua, ya sunne mein kami feel ho – doctor dikhao. Homeopathy mein Kali Mur aur Pulsatilla is specific problem ke liye bahut helpful hain.',
    },
    {
      _key: 'faq14',
      question: 'Kaan ka infection aur swimming – kya pool mein jaana safe hai?',
      answer: 'Active ear infection mein swimming bilkul nahi – paani andar jaana infection worse karta hai aur kaan ka parda risk mein pad sakta hai. Theek ho jaane ke baad: 2 hafte wait karo before going back to pool. Ear plug use karo. Swimming ke baad kaan tilt karke paani nikalo – cotton bud nahi.',
    },
    {
      _key: 'faq15',
      question: 'Baccha baar baar kaan pakadta hai – kya check karein?',
      answer: 'Chota baccha seedha "kaan mein dard" nahi bol sakta – ye signs dekho: baar baar kaan kheenchna (specially feeding ke baad ya lait ke), zyada rone lag jaana, raat ko neend khulna, TV ki awaaz zyada karna, naam lekar bulane par response nahi dena. Ye sab signs hain ki kaan mein kuch hai. Doctor ke paas le jaao – delay mat karo.',
    },
    {
      _key: 'faq16',
      question: 'Kya dono kaanon mein ek saath infection ho sakta hai?',
      answer: 'Haan – ise Bilateral Otitis Media kehte hain. Ye usually tab hota hai jab upper respiratory infection bahut strong ho ya immunity kamzor ho. Uni-lateral infection se thoda zyada serious hota hai kyunki hearing loss risk dono sides pe hoti hai. Treatment same hai lekin follow-up aur monitoring zyada closely chahiye.',
    },
    {
      _key: 'faq17',
      question: 'Kaan mein tel daalna chahiye ya nahi?',
      answer: 'Common Indian practice hai – sarson ka tel ya naariyal tel kaan mein daalna – lekin ye GALAT hai agar kaan ka parda sahi hai ya nahi pata. Agar parda fat gaya hai (perforated) to tel andar jaake aur infection badha sakta hai. Bina doctor ki salaah ke kaan mein kuch nahi daalna chahiye. Doctor specifically ear drops prescribe kare – unhi ka use karo.',
    },
    {
      _key: 'faq18',
      question: 'Kaan saaf kaise karein sahi tarike se?',
      answer: 'Sahi tarika: sirf bahari hissa – kaan ke muh tak – soft kapde ya tissue se saaf karo. Wax natural protective layer hai – khud nikaalna zaroori nahi. Cotton buds bilkul nahi andar – wax andar push hoti hai aur skin scratch hoti hai. Agar wax zyada feel ho – doctor se ear syringing karwaao. Bathing ke baad paani ko sirf head tilt se nikalo.',
    },
    {
      _key: 'faq19',
      question: 'Kaan ke infection mein bukhaar kitna normal hai?',
      answer: '100-102°F (37.8-38.9°C) tak ka bukhaar acute ear infection mein normal hai – immune response hai. Paracetamol se ye control ho jaata hai. Lekin 102°F se zyada bukhaar jo 2-3 din mein control na ho, ya kaan ke peeche sujan, sar dard, ya gardan akad jaaye – ye serious signs hain. Turant doctor dikhao – mastoiditis rule out karna padega.',
    },
    {
      _key: 'faq20',
      question: 'Kaan ke infection mein konse tests karwaane chahiye?',
      answer: 'Doctor usually: Otoscopy (kaan ke andar dekhna) – basic aur most important. Tympanometry – eardrum ka movement aur pressure check, fluid hai ya nahi bata ta hai. Audiometry (hearing test) – khaaskar recurrent cases mein zaroori. Agar discharge hai – culture sensitivity test. X-ray ya CT scan – sirf mastoiditis suspect ho to.',
    },
    {
      _key: 'faq21',
      question: 'Pregnancy mein ear infection ka kya karein?',
      answer: 'Pregnancy mein ear infection zyada hoti hai – hormonal changes se nasal congestion badh jaata hai. Safe options: paracetamol for pain (doctor se confirm karein), saline nasal rinse, steam inhalation. Homeopathy pregnancy mein excellent option hai – Pulsatilla, Kali Mur jaise medicines completely safe hain aur ENT ke saath complementary use ho sakti hain.',
    },
    {
      _key: 'faq22',
      question: 'Ear infection mein kya antibiotic zaroor leni chahiye?',
      answer: 'Har ear infection mein antibiotic zaroori nahi. International guidelines ke mutabiq mild to moderate acute otitis media mein – especially 2+ saal ke bachon mein – "watchful waiting" (48-72 ghante bina antibiotic ke dekhna) recommended hai. Agar better nahi hua, tez bukhaar hai, ya dono kaanon mein infection hai – tab antibiotic leni chahiye.',
    },
    {
      _key: 'faq23',
      question: 'Kaan ka infection baar baar hota hai – kya surgery karwaani chahiye?',
      answer: 'Baar baar ear infection mein doctor kabhi kabhi grommet tubes (tympanostomy tubes) suggest karte hain – kaan ke parde mein ek chhota tube daala jaata hai jo fluid drain karta hai. Ye sirf tab consider hota hai jab 6 mahine mein 3 baar ya 1 saal mein 4+ baar infection aaye. Homeopathic treatment pehle try karna recommended hai – kaafi cases mein surgery tak ki naubat nahi aati.',
    },
    {
      _key: 'faq24',
      question: 'Kaan mein seeti ya awaaz kyun aati hai – kya ye infection hai?',
      answer: 'Kaan mein seeti ya awaaz – tinnitus – ear infection mein hoti hai jab fluid ya inflammation auditory nerve ko affect karta hai. Aksar temporary hoti hai aur infection theek hone ke saath chali jaati hai. Lekin agar infection ke baad bhi seeti rehti hai ya sunne mein kami rahe – ENT aur audiologist se milna zaroori hai.',
    },
    {
      _key: 'faq25',
      question: 'India mein Kaan Bahna (CSOM) itna common kyun hai – kya permanently theek hota hai?',
      answer: 'India mein CSOM bahut common hai – early childhood mein ear infections untreated ya incomplete treat hone ki wajah se. Homeopathy CSOM mein discharge frequency aur amount dono significantly kam karta hai. Permanent healing possible hai – khaaskar fresh perforations mein. Bade aur purane chheds mein surgical repair (myringoplasty) ka option ENT se poochna chahiye – homeopathy post-surgical healing mein bahut helpful rehta hai.',
    },
  ],

  relatedDiseases: ['Adenoids', 'Allergic Rhinitis', 'Sinusitis', 'Recurrent Cold', 'Tonsillitis'],
}

async function seed() {
  try {
    const result = await client.createOrReplace(doc)
    console.log('✅ Recurrent Ear Infection created/updated:', result._id)
    console.log('🌐 Live at: https://homeopedia.in/diseases/recurrent-ear-infection')
  } catch (err) {
    console.error('❌ Error:', err)
  }
}

seed()
