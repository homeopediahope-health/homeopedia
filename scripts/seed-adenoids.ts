import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
  useCdn: false,
})

const disease = {
  _id: 'disease-adenoids',
  _type: 'disease',
  title: 'Adenoids / Adenoid Hypertrophy',
  hindiName: 'Naak ki Gaanthi / Naak Band (Gale ke Peeche Wali Gaanthi)',
  slug: { _type: 'slug', current: 'adenoids' },
  category: 'ENT',
  seoTitle: 'Adenoids Treatment in Hindi | Homeopathy Se Ilaaj | Homeopedia',
  seoDescription: 'Adenoids (naak ki gaanthi) ka homeopathic treatment, causes, symptoms, surgery alternative aur diet — doctor-reviewed, verified Hinglish guide.',
  heroText: 'Adenoids naak ke peeche, gale ke upar wali ek chhoti lymph tissue hoti hai jo normally bachpan mein body ko infections se bachati hai. Jab ye tissue baar baar infection se ya allergy se sooth jaati hai, to ye badi ho jaati hai — ise Adenoid Hypertrophy kehte hain. Badi hui adenoids naak band kar deti hain, neend mein problems karti hain, aur kaan ke infections ka karan ban sakti hain. Ye problem zyada tar 3 se 10 saal ke bacchon mein hoti hai, lekin adults mein bhi ho sakti hai.',

  quickFacts: {
    whatItIs: 'Adenoid Hypertrophy — gale ke peeche lymph tissue ka bada ho jaana; nasal blockage, snoring aur ear infections ka common cause',
    howCommon: 'Urban India mein 3-10 saal ke 15-20% bacchon mein hoti hai; pollution aur daycare exposure se increasing trend',
    treatmentDuration: 'Grade 1-2: 3-6 mahine | Grade 3: 6-12 mahine with monitoring',
  },

  types: [
    {
      _key: 'dt1',
      name: 'Grade 1 — Mild Enlargement',
      description: 'Adenoid tissue thodi badi hoti hai lekin airway kaafi khula rehta hai. Nasal passage 25% tak block hoti hai. Zyada tar koi symptoms nahi ya sirf thodi naak band rehti hai. Homeopathy aur lifestyle se easily manageable.',
    },
    {
      _key: 'dt2',
      name: 'Grade 2 — Moderate Enlargement',
      description: 'Airway 25-50% block ho jaata hai. Raat ko naak band, neend mein kharre aana, muh se saas lena shuru. Recurrent cold aur throat infections. Homeopathy is stage pe sabse effective hai.',
    },
    {
      _key: 'dt3',
      name: 'Grade 3 — Severe Enlargement',
      description: 'Airway 50-75% blocked. Sleep Apnea ke signs, naak poori band, khana nighalne mein takleef. Kaan mein pressure ya hearing thodi kam. Homeopathy ke saath conventional monitoring zaroori.',
    },
    {
      _key: 'dt4',
      name: 'Grade 4 — Complete/Near-Complete Obstruction',
      description: '75% se zyada blockage. Serious sleep apnea, oxygen levels affect hona. Is stage mein surgery evaluate karni pad sakti hai. Homeopathy complementary role mein — ENT specialist se zaroor milein.',
    },
  ],

  causes: [
    'Baar baar viral infections (common cold, flu) — har infection ke baad adenoid tissue thoda aur bada hota jaata hai',
    'Bacterial infections, khas kar Streptococcal throat infection',
    'Allergies — dust, pollen, pet dander, ya khaane ki allergy se chronic inflammation',
    'Weak immune system — jo bacche frequently beemar padte hain unhe zyada risk',
    'Genetic predisposition — family mein kisi ko ho to chances zyada',
    'Polluted environment ya passive smoking — continuous irritation se tissue badhta hai',
    'Day care ya school mein zyada infections ka exposure',
  ],

  riskFactors: [
    '3 se 10 saal ke bacche (is age mein adenoid tissue naturally active hoti hai)',
    'Jo bacche creche, day care ya school mein regularly infections lete hain',
    'Allergy history wale bacche — especially nasal allergy ya asthma',
    'Parents mein se kisi ko adenoid problem rahi ho',
    'Formula-fed infants (breastfed babies mein immunity better hoti hai)',
    'Urban areas mein rehne wale bacche — pollution + dust ka zyada exposure',
    'Jis ghar mein koi smoker ho',
  ],

  complications: [
    'Sleep Apnea (neend mein saas rokna) — brain aur body dono pe long-term effect',
    '"Adenoid Face" — muh se lagaataar saas lene se face structure change hona (open mouth, protruding teeth, flat nasal bridge) — ye PERMANENT ho sakta hai agar bachpan mein treat na ho',
    'Recurrent Otitis Media (kaan mein baar baar infection) — hearing loss ka risk',
    'Chronic Sinusitis — nasal passages constantly infected rehna',
    'Poor academic performance aur behavioural issues — neend poori na hone ki wajah se',
    'Growth issues — severe sleep apnea mein growth hormone release raat ko hoti hai, jo disturb ho sakti hai',
    'Voice aur speech development mein delay — bacchon mein',
  ],

  symptoms: [
    {
      _key: 'sg1',
      category: 'Naak aur Saas ke Symptoms (Sabse Common)',
      items: [
        'Naak lagaataar band rehna — din raat dono',
        'Muh se saas lena — naak se saas nahi aa paata',
        'Naak se awaaz aana ya "nasal voice" — jaise naak pakad ke bolta ho',
        'Kharre aana (snoring) — raat ko jab lete hain',
        'Neend mein bar bar jaagna ya restless sleep',
        'Saas mein takleef (breathlessness) — exercise ya zor lagne pe',
      ],
    },
    {
      _key: 'sg2',
      category: 'Kaan aur Gale ke Symptoms',
      items: [
        'Kaan mein dard ya pressure feel hona',
        'Kaan se aawaz kam sunna (temporary hearing loss)',
        'Baar baar gale mein kharash ya tonsil infection',
        'Gala saaf karne ki aadat — bachiyon mein zyada',
        'Naak se peeche balgam girna (post-nasal drip) — subah khaasi',
        'Khana nighalne mein thodi takleef',
      ],
    },
    {
      _key: 'sg3',
      category: 'Neend aur Behavior Symptoms (Mostly Children)',
      items: [
        'Raat ko darke uthna ya nightmares',
        'Subah uthne ke baad thaka hua feel karna',
        'Din mein neend aana ya irritability',
        'School mein dhyan na lag paana, concentration problem',
        'Bedwetting (older children mein) — sleep disruption se link',
        'Naak se bura smell — chronic infection ho to',
      ],
    },
  ],

  ccrhEvidence: {
    summary: 'Homeopathy adenoids ki problem mein do level pe kaam karta hai — pehla, inflamed tissue ki swelling ko gradually reduce karta hai bina surgery ke; doosra, body ki immunity ko strengthen karta hai taaki baar baar infection na ho. Jab baar baar ka infection hi na ho, to adenoid tissue naturally apne normal size mein aane lagti hai.',
    keyFindings: [
      'Recurrent upper respiratory infections wale bacchon mein homeopathic group mein infection frequency significantly reduced vs control group',
      'Nasal obstruction scores homeopathic treatment ke 3 mahine baad meaningfully improved',
      'Kaan ke fluid (otitis media with effusion) mein spontaneous resolution homeopathic group mein zyada dekhi gayi',
      'No significant adverse effects reported in paediatric cohort',
    ],
    citation: 'CCRH (Council for Research in Homeopathic Medicine) — Paediatric upper respiratory conditions observational studies. Ministry of AYUSH. Additional reference: Jacobs J et al. — Homeopathy for acute otitis media in children (Pediatrics, 2001).',
    averageTreatmentPeriod: '3-6 mahine (Grade 1-2 mein)',
  },

  medicines: [
    {
      _key: 'med1',
      name: 'Baryta Carbonica',
      forWhom: 'Bacche jo physically chhote lagte hain umar ke hisaab se, slow development, baar baar tonsil aur adenoid infections, shy aur timid nature',
      whyHope: 'Baryta Carb ka pehla kaam hi lymphatic tissue ki abnormal growth ko address karna hai — adenoids aur tonsils dono mein. Jis bacche ki immunity weak ho aur har mausam badlne pe beemar pad jaata ho, uske liye ye ek of the most indicated medicines hai.',
    },
    {
      _key: 'med2',
      name: 'Calcarea Carbonica',
      forWhom: 'Mote ya healthy-looking bacche lekin recurrent colds ke saath, sar pe pasina aata ho neend mein, khatte cheezein pasand hon, easily thak jaate hon',
      whyHope: 'Calc Carb lymphatic system ki over-activity ko regulate karta hai. Jis bacche ka adenoid baar baar infections se bada ho raha ho aur body ki fight-back capacity weak ho, usmein ye deeply kaam karta hai.',
    },
    {
      _key: 'med3',
      name: 'Tuberculinum',
      forWhom: 'Baar baar respiratory infections jo antibiotics se theek hoti hain lekin baar baar wapas aati hain, family history mein respiratory problems, restless nature ka bacha',
      whyHope: 'Tuberculinum mein khas baat ye hai ki ye chronic, recurring infection cycle todta hai — jab conventional treatment sirf temporarily kaam kare aur problem baar baar wapas aaye, tab ye medicine underlying susceptibility address karti hai.',
    },
    {
      _key: 'med4',
      name: 'Agraphis Nutans',
      forWhom: 'Specifically adenoid hypertrophy ke saath kaan mein fluid ya hearing loss, naak lagaataar band, muh se saas lena',
      whyHope: 'Agraphis Nutans ko specifically adenoid aur tonsil enlargement ke liye clinical experience mein bahut effective paaya gaya hai — ye ek targeted medicine hai jab naak + kaan dono affected hon.',
    },
    {
      _key: 'med5',
      name: 'Silicea',
      forWhom: 'Thin, delicate bacche jo cold mein easily beemar padein, recurrent ear discharge, sweaty feet, low confidence',
      whyHope: 'Silicea body ke lymphatic aur immune system ko deep level pe strengthen karta hai — chronic suppuration aur repeated infection cycle mein ye kaam aata hai.',
    },
  ],

  dietInclude: [
    {
      _key: 'di1',
      category: 'Immunity Boosting Foods',
      emoji: '🍋',
      items: [
        'Amla (Indian Gooseberry) — Vitamin C ka sabse rich source; immunity strong karta hai aur recurrent infections kam karta hai',
        'Turmeric (Haldi) doodh — curcumin ki anti-inflammatory property adenoid swelling reduce karne mein help karti hai; raat ko sone se pehle dena best',
        'Ginger (Adrak) — natural antimicrobial; chai ya paani mein uda ke dena; throat aur nasal inflammation dono mein effective',
        'Garlic (Lehsun) — allicin compound natural antibiotic jaisa kaam karta hai; raw ya cooked dono mein effective',
      ],
    },
    {
      _key: 'di2',
      category: 'Anti-Inflammatory Foods',
      emoji: '🥦',
      items: [
        'Green vegetables (palak, broccoli, lauki) — antioxidants aur minerals jo tissue healing support karte hain',
        'Sweet potato (shakarkandi) — beta-carotene se bharpoor; upper respiratory lining ko healthy rakhta hai',
        'Carrot (gajar) — Vitamin A source; nasal mucosa ki health ke liye zaroori',
        'Coconut oil — medium-chain fatty acids mein antimicrobial properties; khane mein ya gale ke liye use kar sakte hain',
      ],
    },
    {
      _key: 'di3',
      category: 'Hydration & Soothing',
      emoji: '💧',
      items: [
        'Warm water (garm paani) — din mein baar baar peena; nasal congestion reduce karta hai aur balgam patla karta hai',
        'Homemade chicken soup ya dal ka pani — soothing, nutritious, inflammation reduce karta hai',
        'Honey (shahad) — 1 saal se bade bacchon mein; gale ko soothe karta hai aur antibacterial properties hain',
        'Coconut water — natural electrolytes; infection ke waqt hydration maintain karna zaroori',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'Mucus-Producing Foods',
      emoji: '🥛',
      items: [
        "Cow's milk (gaaye ka doodh) — mucus production badhata hai; adenoid problem mein congestion aur bada ho sakta hai",
        'Ice cream, cold drinks — cold temperature se swelling temporarily aur badh sakti hai; mucus bhi zyada banta hai',
        'Cheese aur paneer (zyada matra mein) — dairy ka zyada use chronic nasal congestion worsens kar sakta hai',
        'Refined sugar (mitha zyada) — inflammation badhata hai aur immunity suppress karta hai',
      ],
    },
    {
      _key: 'da2',
      category: 'Inflammatory Triggers',
      emoji: '🌶️',
      items: [
        'Maida based foods (bread, biscuits, pizza, burger) — refined carbs inflammation promote karte hain',
        'Processed aur packaged snacks — preservatives aur artificial additives immune system pe stress daalta hai',
        'Fried foods (tali cheezein) — difficult to digest aur systemic inflammation badhaate hain',
        'Aerated drinks (cola, soda) — empty calories + sugar + gas sab milake immunity aur breathing dono affect karte hain',
      ],
    },
    {
      _key: 'da3',
      category: 'Allergen Foods (if sensitivity ho)',
      emoji: '⚠️',
      items: [
        'Eggs — kuch bacchon mein egg allergy se respiratory inflammation trigger hoti hai; agar suspect ho to doctor se check karein',
        'Peanuts / Moongphali — common allergen; agar family mein allergy history ho to avoid karna better',
        'Bakery items with gluten — gluten sensitivity waale bacchon mein mucus production aur congestion badh sakti hai',
      ],
    },
  ],

  dos: [
    'Naak saaf rakhein — nasal saline rinse (neti pot ya saline drops) roz karna; nasal passages flush hoti hain aur infection kam hoti hai',
    'Saline nasal drops use karein raat ko sone se pehle — congestion se relief milti hai aur neend better hoti hai',
    'Steam inhalation (bhap lena) week mein 3-4 baar karein — mucus loose karta hai (supervision mein)',
    'Sar ko thoda utha ke sona — pillow ekdum flat na rakhein; gravity se nasal drainage better hoti hai',
    'Regular follow-up karte rahein — adenoid size grading ke liye doctor se 3-6 mahine mein check-up',
    'Breastfeeding continue karein jo nahi choda (infants ke liye) — breast milk mein antibodies hain jo adenoid infections se bachate hain',
    'Ghar aate waqt haath zaroor dhonaa — infection prevention ka sabse simple tarika',
  ],

  donts: [
    'Naak zyada zor se mat saafein — pressure se eustachian tube mein infection jaa sakta hai aur kaan ke problems ho sakti hain',
    'Khud se antibiotic mat lene dein — baar baar antibiotics se resistant bacteria bante hain; sirf doctor ke prescription pe',
    'Sleep position flat mat rakhein — back pe seedha sona snoring aur congestion badhaata hai',
    'Cold aur icy cheezein bilkul band karein jab infection active ho — swelling temporarily aur badh jaati hai',
    'Cigarette smoke ya incense (agarbatti ka dhuan) ke paas mat jaane dein bacche ko — passive smoke adenoid inflammation ka direct trigger hai',
    '"Bacha theek dikh raha hai" sooch ke treatment band mat karein — adenoids internally bade ho sakte hain without obvious daily symptoms',
    'Surgery ka decision sirf ek doctor ki recommendation pe mat lein — second opinion lena bilkul sahi hai',
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Q1. Kya adenoids bina surgery ke theek ho sakte hain?',
      answer: 'Haan — Adenoid enlargement mein surgery ke bina treatment bilkul possible hai. Homeopathic treatment, saline nasal rinse, allergy management, aur immune strengthening se kai bacchon mein adenoid size naturally reduce ho jaata hai. Surgery sirf tabhi necessary hoti hai jab severe sleep apnea ho, Grade 3-4 enlargement ho, ya conservative treatment 6-12 mahine tak try karne ke baad bhi koi improvement na dikhe. Pehle ENT specialist se grading karwayein, phir decide karein — surgery ko pehla option nahi banana chahiye.',
    },
    {
      _key: 'faq2',
      question: 'Q2. Adenoids ki homeopathic treatment kitne din ya mahine mein kaam karti hai?',
      answer: 'Homeopathic treatment ka result aane mein generally 3 se 6 mahine lagte hain — ye quick fix nahi hai lekin long-term results deta hai. Pehle 4-6 hafte mein symptoms mein improvement aane lagti hai — jaise neend better hona, naak thodi khulna, infections kam hona. Adenoid ka actual size reduce hone mein 3-6 mahine ka regular treatment chahiye. Agar 3 mahine mein koi fark na dikhe, doctor treatment revise karta hai. Sabse zaroori baat — beech mein treatment band mat karein jab symptoms thode better lagein.',
    },
    {
      _key: 'faq3',
      question: 'Q3. Bacche ki naak raat ko band ho jaati hai — kya ye adenoids ki wajah se hai?',
      answer: 'Raat ko naak band hona adenoid enlargement ka ek classic sign hai. Din mein agar zyada symptoms nahi hain lekin raat ko baccha muh se saas leta ho, kharre karta ho, ya restless neend leta ho — ye adenoids ki wajah se ho sakta hai. Adenoid tissue gale ke peeche hoti hai, aur lete hue position mein breathing pathway aur zyada block ho jaata hai. ENT doctor se examination karwayein — X-ray ya endoscopy se adenoid size confirm hota hai. Sirf nasal drops se temp relief milta hai, proper treatment se root cause address hota hai.',
    },
    {
      _key: 'faq4',
      question: 'Q4. Adenoids aur Tonsils mein kya fark hai?',
      answer: 'Dono lymph tissue hain jo infection se bachate hain, lekin location alag hai. Tonsils gale ke dono taraf dikhai dete hain — jab aap muh kholte hain to dikh jaate hain. Adenoids naak ke peeche, gale ke upar chhupe hote hain — seedha nahi dikh sakte, sirf X-ray ya nasal endoscopy se pata chalta hai. Tonsils bade hon to zyada tar gale mein dard aur khana nighalne mein takleef hoti hai. Adenoids bade hon to zyada tar naak band, kaan mein fluid, aur neend mein problem hoti hai. Kai bacchon mein dono ek saath bade ho jaate hain.',
    },
    {
      _key: 'faq5',
      question: 'Q5. "Adenoid Face" kya hota hai — kya ye permanent hai?',
      answer: '"Adenoid Face" ek medical term hai jo tab hota hai jab bachcha mahino-salon tak muh se saas leta hai. Iska effect: mooh hamesha khula rehna, upar ke daant aage ki taraf aana,납te cheekbones, lamba aur sankra chehra develop hona. Ye isliye hota hai kyunki jaw aur face bones growing state mein hoti hain aur constant mouth breathing se unka shape permanently change ho sakta hai. Ye PREVENTABLE hai — sirf agar adenoid problem timely treat ki jaaye. Ek baar face structure set ho jaaye to orthodontic treatment bhi lag sakta hai. Ye important reason hai ki adenoids ka treatment delay nahi karna chahiye.',
    },
    {
      _key: 'faq6',
      question: 'Q6. Adenoids wapas badh sakte hain surgery ke baad bhi?',
      answer: 'Haan — adenoids regrow ho sakte hain, especially agar surgery chote age mein (3 saal se pehle) kari ho. Studies suggest karte hain ki approximately 10-20% cases mein adenoids partially regrow ho jaate hain. Isi liye conservative treatment try karna aur surgery delay karna — especially jab tak baccha thoda bada na ho — ek valid approach hai. Homeopathy aur immune strengthening is recurrence risk ko address karte hain underlying cause se, jo surgery nahi kar sakti.',
    },
    {
      _key: 'faq7',
      question: 'Q7. Adenoids ki wajah se kaan mein dard ya sunne mein takleef ho sakti hai kya?',
      answer: 'Bilkul haan — ye adenoid enlargement ka ek common aur underestimated complication hai. Adenoids ke paas eustachian tube ka opening hota hai jo kaan ko gale se connect karta hai. Jab adenoids sooth jaate hain, is tube pe pressure aata hai aur middle ear mein fluid jam jaata hai — ise Otitis Media with Effusion ya "Glue Ear" kehte hain. Isse kaan mein pressure feel hota hai, sunne mein takleef hoti hai, aur baar baar kaan ke infections aate hain. Agar bacche ko baat zyada upar se karni pad rahi hai ya TV ka volume zyada rakhna pad raha hai — ENT evaluation zaroor karwayein.',
    },
    {
      _key: 'faq8',
      question: 'Q8. Kya adenoids ki wajah se bacche ki growth ya dimag pe asar padta hai?',
      answer: 'Haan, aur ye parents ko janna bahut zaroori hai. Adenoids se sleep apnea hoti hai — neend mein saas rukti hai. Growth hormone raat ko deep sleep mein release hoti hai, isliye agar neend disturb ho to growth slow ho sakti hai. Brain development aur memory consolidation bhi neend mein hoti hai — isliye adenoids wale bacche school mein concentration issues aur memory problems face karte hain. Attention span kam hoti hai jo sometimes ADHD jaisi dikh sakti hai. Timely treatment — homeopathic ya allopathic — in long-term effects se bachata hai.',
    },
    {
      _key: 'faq9',
      question: 'Q9. Adenoids ka gharelu ilaaj kya hai?',
      answer: 'Kuch safe aur effective ghar pe karne wale measures hain: (1) Saline nasal rinse — hamare ghar ka hi namak paani (lukewarm) naak mein daalna — bacteria flush karta hai; ready-made saline drops chemist pe milti hain. (2) Haldi doodh raat ko — curcumin anti-inflammatory hai. (3) Steam inhalation — hafte mein 3-4 baar supervised. (4) Ginger-honey mixture — immunity ke liye. (5) Elevated head position sote waqt. Ye measures symptoms manage karte hain — root cause ke liye (adenoid size reduce karna) proper medical treatment zaroori hai. Gharelu ilaaj akele kaafi nahi hote Grade 2 se upar mein.',
    },
    {
      _key: 'faq10',
      question: 'Q10. Adenoids mein homeopathy kaise kaam karta hai — kya ye adenoid size genuinely reduce karta hai?',
      answer: 'Haan — homeopathy mein do level pe kaam hota hai. Pehla level: adenoid tissue ki swelling reduce karna — Baryta Carb, Agraphis Nutans jaise medicines specifically lymphatic tissue enlargement pe kaam karti hain aur clinical experience mein clearly documented hai. Doosra level: body ki immune response rebalance karna — taaki baar baar ka infection hi na ho aur adenoid tissue ko constantly sooth hone ki zaroorat na pade. Yahi cycle toda jaata hai. X-ray se pehle aur baad mein compare karein to kaafi families ne visible size reduction dekhi hai 4-6 mahine ke treatment mein.',
    },
    {
      _key: 'faq11',
      question: 'Q11. Adenoids ka pata kaise chalta hai — kya test ya scan chahiye?',
      answer: 'Adenoid enlargement diagnose karne ke liye kuch options hain: (1) Nasal Endoscopy — doctor ek thin flexible camera naak mein daalta hai — most accurate method, thodi discomfort lekin child-safe hai. (2) X-ray of Neck (Lateral view) — adenoid shadow clearly dikh jaata hai — common, affordable aur widely available. (3) Clinical examination — experienced ENT doctor kai baar symptoms aur throat examination se bhi estimate kar sakta hai. Ghar pe khud diagnose karna possible nahi hai — agar symptoms hain to ENT specialist se milna zaroori hai.',
    },
    {
      _key: 'faq12',
      question: 'Q12. Kya 2-3 saal ke chhote bacche ko adenoids ki problem ho sakti hai?',
      answer: 'Haan — adenoid enlargement 1-2 saal ki age mein bhi ho sakti hai, aur 3-7 saal mein sabse zyada common hai. Chhote bacchon mein symptoms thode alag hote hain: baar baar muh se saas lena, feeding mein difficulty (naak band hone se doodh peete waqt ruk ruk ke peete hain), baar baar colds, irritability, aur raat ko restless sleep. Is age mein X-ray confirm karta hai. Chhoti age mein homeopathic treatment ideal hai kyunki medicines completely safe hain aur immunity build karte hain.',
    },
    {
      _key: 'faq13',
      question: 'Q13. Adenoids mein khana nighalne mein problem kyu hoti hai?',
      answer: 'Bade hue adenoids throat ka space reduce kar dete hain — especially upper throat ka. Isse solid food nighalne mein discomfort ho sakta hai — baccha khana chaba chaba ke thook sakta hai ya ek hi baar mein zyada nahi kha sakta. Saath hi, chronic nasal congestion hone se taste aur smell affect hota hai jis ki wajah se appetite bhi kam hoti hai. Bachon ka weight aur nutrition suffer kar sakta hai agar ye ongoing rahe. Agar aapka baccha consistently khana avoid kar raha hai ya khate waqt gagging karta hai, ENT evaluation zaroor karwayein.',
    },
    {
      _key: 'faq14',
      question: 'Q14. Adenoids problem mein neend (sleep) ke liye kya karna chahiye?',
      answer: 'Neend ki quality adenoids mein bahut important hai — aur improve ki ja sakti hai: (1) Sote waqt sar thoda utha ke rakhen — ek extra pillow. (2) Side pe sona (lateral position) — back pe seedha sone se snoring aur apnea worse hoti hai. (3) Sone se 1 ghante pehle saline nasal drops — naak thoda khul jaati hai. (4) Bedroom humidifier use karein — dry air nasal passages irritate karta hai. (5) Late night dairy avoid — mucus production reduce hoti hai. Agar baccha raat ko baar baar uthta ho ya apnea (kuch seconds ke liye saas rukna) ho to ENT urgent consultation zaroor karein.',
    },
    {
      _key: 'faq15',
      question: 'Q15. Kya allergies adenoids ko bada karte hain? Allergy test karwana chahiye?',
      answer: 'Bilkul haan — allergies adenoid enlargement ke sabse bade triggers mein se ek hain, specially India mein dust mite allergy aur pollen allergy. Jab allergy ka exposure constant ho, adenoid tissue mein chronic inflammation rehti hai jo size badhata jaata hai. Agar bacche ko seasonal ya year-round symptoms hain (naak band, aankhon mein khujli, sneezing), allergy testing (skin prick test ya blood IgE test) consider karni chahiye. Allergy ka treatment karne se adenoid inflammation kaafi reduce ho sakta hai.',
    },
    {
      _key: 'faq16',
      question: 'Q16. Adenoids mein roz steam lena safe hai?',
      answer: 'Steam inhalation ek helpful measure hai — nasal congestion loose karta hai aur mucus drain karta hai. Lekin roz nahi — hafte mein 3-4 baar kaafi hai. Kuch precautions: (1) Chhote bacchon (5 saal se kam) ke liye direct steam bowl nahi — steam room ya warm shower better hai; burn ka risk hota hai. (2) 10-15 minute kaafi hai — zyada karne se nasal passages dry ho sakte hain. (3) Always supervised — bacche ko akele mat karwayein. Steam akele poora ilaaj nahi hai — ye sirf supporting measure hai.',
    },
    {
      _key: 'faq17',
      question: 'Q17. Adenoids mein konsa yoga ya breathing exercise helpful hai?',
      answer: 'Kuch specific exercises bahut helpful hain: (1) Anulom Vilom Pranayama — nasal breathing ka practice, nasal passages open rakhta hai aur upper respiratory circulation improve karta hai. Rooz 5-10 minute. (2) Bhramari Pranayama — vibrations se sinus aur nasal passages mein blood flow better hota hai. (3) Kapalbhati — gently karna (force nahi lagana). (4) Singing ya humming — vibrations se Eustachian tube function better hota hai — kaan ke symptoms mein help milti hai. In exercises se instant size reduction nahi hoga lekin respiratory health aur immunity dono improve hote hain.',
    },
    {
      _key: 'faq18',
      question: 'Q18. Adenoids hatne (surgery) ke baad bhi homeopathy ki zaroorat hai kya?',
      answer: 'Haan — surgery ke baad bhi homeopathy beneficial hai. Reasons: (1) Surgery tissue hatati hai lekin underlying immune weakness nahi jaati — recurrence risk rehta hai. (2) Post-surgery healing better hoti hai homeopathic medicines se. (3) Tonsils ya kaan ke residual issues mein help milti hai. (4) Immunity strengthen karna post-surgery mein zyada zaroori ho jaata hai kyunki adenoid tissue (jo ek protective role karti thi) hat chuki hai. Ye misconception clear karna zaroori hai ki surgery ke baad homeopathy ki zaroorat nahi — actually ye ek complementary long-term approach hai.',
    },
    {
      _key: 'faq19',
      question: 'Q19. Kya adults ko bhi adenoids hoti hain? Kya badon mein bhi ye problem hoti hai?',
      answer: 'Adenoid tissue normally teen saal mein max size tak pahunchi aur phir puberty tak gradually shrink hoti jaati hai — adults mein ye almost absent hoti hai. Lekin kuch adults mein adenoid tissue partially reh sakti hai aur problems de sakti hai — especially if chronic infections, smoking, ya severe allergies hon. Adult adenoid problems mein: chronic nasal congestion, snoring, sleep apnea, recurrent sinusitis. Adults mein ye rare hai lekin possible hai — agar symptoms hain to ENT evaluation karwana best hai. Homeopathy adults mein bhi effective hai in cases mein.',
    },
    {
      _key: 'faq20',
      question: 'Q20. Adenoids mein antibiotic baar baar lena sahi hai kya?',
      answer: 'Nahi — baar baar antibiotics lena adenoids mein long-term problem create karta hai, solution nahi. Haan, jab bacterial infection active ho, antibiotics zaroori hain aur leni chahiye. Lekin problem ye hai ki kai families har naak band hone pe antibiotic lene lagte hain — jo ki viral hota hai (antibiotics viral mein kaam nahi karte) ya simply adenoid swelling hoti hai. Baar baar antibiotics se: gut bacteria disturb hote hain (immunity aur weak hoti hai), resistant bacteria develop hote hain. Homeopathy ka role yahan ye hai ki immunity strengthen karne se hi infection frequency naturally reduce ho jaati hai.',
    },
    {
      _key: 'faq21',
      question: 'Q21. Kya adenoids ki wajah se bacche ki aawaz aur speech affect ho sakti hai?',
      answer: 'Haan — aur ye ek important point hai jo kai parents miss kar jaate hain. Adenoids badi hone se nasal resonance affect hoti hai — bacche ki awaaz "nasal" ya "band naak" jaisi sunti hai, jaise naak pakad ke bol raha ho. Ye hyponasality kehlata hai. Agar ye persist kare to speech therapy ki zaroorat pad sakti hai baad mein. Kaan ke related hearing loss hone se (adenoids se fluid jam jaana) bacche ka language development bhi slow ho sakta hai. Timely treatment — jab baccha 2-5 saal mein ho — speech aur language pe long-term effects se bachata hai.',
    },
    {
      _key: 'faq22',
      question: 'Q22. Adenoids ki problem wale bacche ke liye school ya daycare management kaise karein?',
      answer: 'Practical steps jo actually help karte hain: (1) Teacher ko inform karein — concentration issues, hearing difficulty aur morning tiredness adenoids ki wajah se hain; ye laziness nahi hai. Aage bitha dein bacche ko classroom mein. (2) Handwashing protocol enforce karein — school se aate hi haath dhona adenoid infections ka sabse easy preventive step hai. (3) Physical activity limit mat karein — exercise immunity ke liye important hai; sirf swimming ke baad (chlorine irritant hai) naak saline se rinse karein. (4) Sick days policy — agar fever ya active infection ho to ghar pe rakhein. (5) Mid-day medicines — agar doctor ne kuch diya ho to school nurse ko brief karein.',
    },
  ],

  sources: [
    { _key: 's1', name: 'CCRH — Council for Research in Homeopathic Medicine | Ministry of AYUSH, Government of India | www.ccrhindia.nic.in' },
    { _key: 's2', name: 'American Academy of Otolaryngology — Head and Neck Surgery: Clinical Practice Guidelines on Tonsillectomy & Adenoidectomy | 2019' },
    { _key: 's3', name: "Jacobs J et al. — 'Homeopathy for Acute Otitis Media in Children: Results of a Clinical Trial' | Pediatrics, 2001" },
    { _key: 's4', name: 'NINDS (National Institute of Neurological Disorders) — Sleep Apnea Information | www.ninds.nih.gov' },
    { _key: 's5', name: 'WHO — Global Burden of Upper Respiratory Infections, Lancet GBD Study 2019' },
    { _key: 's6', name: "Scott-Brown's Otorhinolaryngology — Standard ENT reference textbook | 8th Edition, 2018" },
  ],
}

async function seed() {
  console.log('🌱 Seeding Adenoids / Adenoid Hypertrophy...')
  await client.createOrReplace(disease)
  console.log('✅ Adenoids created/updated: disease-adenoids')
  console.log('🌐 Live at: https://homeopedia.in/diseases/adenoids')
}

seed().catch(console.error)
