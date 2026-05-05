import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-allergic-rhinitis',
  _type: 'disease',
  title: 'Allergic Rhinitis',
  hindiName: 'Naak Ki Allergy / Pratishedhi Nazla',
  slug: { _type: 'slug', current: 'allergic-rhinitis' },
  category: 'Respiratory',
  publishedAt: '2026-05-05T00:00:00.000Z',
  metaTitle: 'Naak Ki Allergy Ka Homeopathic Ilaj | Allergic Rhinitis Treatment',
  metaDescription: 'Naak ki allergy (Allergic Rhinitis) se permanent relief paayein. Homeopathic treatment se jad se theek karein – bina side effects ke. Expert guide.',

  heroText: 'Allergic Rhinitis ek aisi condition hai jisme naak ki andar ki skin – kisi allergen (jaise dust, pollen, dhool, pet ke baal) ke sampark mein aane par – sujan aur irritation se react karti hai. Iska matlab yeh hai ki aapka immune system un chezon ko "khatra" samajhta hai jo actually harmless hain, aur woh chemicals release karta hai jo naak behne, aankhen paani aane aur saans mein takleef jaisi problems create karte hain. India mein yeh ek bahut common problem ban gayi hai – khaaskar cities mein air pollution, dust mites aur seasonal pollen ki wajah se. Agar sahi samay par treatment na li jaye toh yeh condition asthma tak badh sakti hai.',

  quickFacts: {
    whatItIs: 'Naak ki andar ki lining ka allergens (dust, pollen, pet dander) se over-react karna; immune system ka harmless chezon ko "khatra" samajhna; naak ki allergy ka medical naam',
    howCommon: 'India mein 40%+ doctors ne clinic mein 21-40% patient load allergic rhinitis ka report kiya hai; sheher mein air pollution se cases badh rahe hain',
    treatmentDuration: 'Mild cases – 3-6 mahine | Chronic/long-standing cases – 1-2 saal; allergen control saath karne se treatment faster hoti hai',
    successRate: 'Homeopathic treatment + allergen control ke saath chronic cases mein long-term relief rate conventional treatment se better documented hai; World Allergy Organization pilot study 2013',
  },

  causes: [
    'Pollen allergy – trees, grass aur weeds ka pollen; February se May peak hota hai India mein; outdoor exposure se instantly symptoms trigger',
    'Dust Mites – bistar, gadde, purdey mein rahne wale microscopic keede; India ke humid climate mein bahut common; raat ko symptoms worse hone ki wajah',
    'Air Pollution & Smoke – sheher ki gaadi ka dhuan, factories ka dhuan; immune system ko zyada sensitive bana deta hai long term mein',
    'Pet Dander – billi, kuttey, rabbit ke baal aur skin cells; ghar ke andar ka major allergen; bedroom mein pets sone dena sabse bada mistake',
    'Mold & Fungus – bathroom, kitchen ya geeli deewaaron mein; monsoon ke baad peak; invisible spores naak mein jaate hain',
    'Hereditary Sensitivity – agar parents ko allergy hai toh bacchon ko 50-70% chance hai; genetic predisposition strong factor hai',
  ],

  riskFactors: [
    'City dwellers – air pollution zyada; immune system constantly stressed rehta hai',
    'Jin ke ghar mein pets hain (cat ya dog) – constant dander exposure',
    'Dust wali jagah kaam karne wale – construction, farming, carpentry, bakery workers',
    'Bacchey aur young adults (20-40 saal) – sabse zyada affected age group',
    'Jinhe pehle se asthma, eczema ya koi aur allergy ho – atopic march risk',
    'AC offices mein late rehne wale – dry air + dirty filter dust recirculation',
    'Smoking environment mein rehne wale – chemical fumes nasal lining damage karte hain',
  ],

  complications: [
    'Asthma mein escalation – 30-80% allergic rhinitis patients ko asthma develop hone ka risk; "one airway, one disease" – naak aur lungs connected hain',
    'Sinusitis (chronic) – permanent band naak se bacteria breeding site banti hai; face pe pressure aur sar dard chronic ho jaata hai',
    'Sleep apnea aur chronic fatigue – raat ko saans ki takleef, din bhar thakaan; sleep quality severely affected',
    'Middle ear problems – bacchon mein kaan bhar jaana, sunayi kam dena; school performance pe direct asar',
    'Quality of life pe asar – school/office performance, concentration, mental stress; bacchon mein irritability common',
  ],

  types: [
    {
      _key: 'type1',
      name: 'Seasonal Allergic Rhinitis (Mousami Allergy)',
      description: 'Khaas season mein hoti hai – February-March (spring, pollen season), October-November (monsoon ke baad jab mold/fungus badhta hai). Trigger: pollen (phoolon ka dust), ghaas ka dust, mold spores. Season khatam toh symptoms theek – lekin agli baar wapas. India mein sabse common type; grass pollen aur weed pollen main triggers hain.',
    },
    {
      _key: 'type2',
      name: 'Perennial Allergic Rhinitis (Saal Bhar Ki Allergy)',
      description: 'Poore saal, koi bhi season ho – kabhi kam kabhi zyada lekin band nahi hoti. Trigger: house dust mites, cockroach dust, pet dander (billi/kuttey ke baal), mold. India mein zyada common – kyunki garam aur humid climate mein dust mites bahut paaye jaate hain. Indoor allergen exposure main wajah hai.',
    },
    {
      _key: 'type3',
      name: 'Occupational Allergic Rhinitis (Kaam Ki Jagah Wali Allergy)',
      description: 'Kaam ke waqt hoti hai – factory, farm, lab, bakery mein. Trigger: chemicals, grain dust, lab animals, wood dust. Office mein zyada, ghar pe better – yeh classic pattern hai. Kaun: kisan, baker, carpenter, lab technicians, construction workers. Kaam chhodne par symptoms improve hona strong clue hai.',
    },
    {
      _key: 'type4',
      name: 'Mixed Type (Seasonal + Perennial Dono)',
      description: 'Bahut common – 40% patients mein seasonal + perennial dono hote hain. Season ke waqt aur bhi bura ho jaata hai, baaki time bhi rahta hai. Severity: Mild (neend aur kaam theek, thodi takleef) ya Moderate/Severe (neend kharab, school/office miss, quality of life severely affect). Is type mein systemic treatment sabse zaroori hai.',
    },
  ],

  symptoms: [
    {
      _key: 'grp1',
      category: 'Naak Ke Symptoms (Nasal Symptoms)',
      items: [
        'Lagaatar paani aana naak se – clear, watery discharge jo rok nahi sakte',
        'Baar baar chhink – multiple sneezes ek saath, series mein aati hain',
        'Naak band rehna – ek ya dono tarf; raat ko zyada',
        'Naak ke andar khujli hona – restless feeling, baar baar naak malte rehna',
        'Saans lene mein takleef – khaaskar raat ko ya exercise ke baad',
      ],
    },
    {
      _key: 'grp2',
      category: 'Aankh aur Gale Ke Symptoms',
      items: [
        'Aankhon mein paani aur khujli (allergic conjunctivitis) – naak ke saath saath',
        'Aankhon ka laal hona – rubbing se aur bura hota hai',
        'Gale mein kharash ya khujli – post-nasal drip ki wajah se',
        'Kaaan mein bharaapan ya khujli – Eustachian tube blockage',
        'Peeche se naak ka behna (post-nasal drip) – jo chronic khansi banaata hai',
      ],
    },
    {
      _key: 'grp3',
      category: 'General Symptoms (Puri Body)',
      items: [
        'Sar bhaari rehna ya dard – sinus pressure se',
        'Thakaan aur weakness – raat ki kharab neend ki wajah se',
        'Neend puri na hona – raat ko naak band se munh se saans lena padta hai',
        'Smelling power kam hona (hyposmia) – khana beswada lagne lagta hai',
        'Chidchidaapan ya mood kharaab – khaaskar bacchon mein clearly dikh ta hai',
      ],
    },
  ],

  ccrhEvidence: {
    improvementRate: 'Pilot study mein meaningful improvement; conventional vs homeopathy comparison favorable',
    avgTreatmentPeriod: '3 se 6 mahine (mild) | 1 se 2 saal (chronic)',
    citation: 'World Allergy Organization Journal | 2013 | Homeopathy in Allergic Rhinitis Pilot Study | Homoeopathic Journal Systematic Review | 2024',
  },

  homeopathyBenefits: [
    'Allergic Rhinitis mein problem yeh hai ki immune system over-react karta hai – yeh asliyat mein immune dysregulation hai. Conventional antihistamines sirf symptoms dabate hain, lekin Homeopathy ka approach alag hai – yeh immune system ko retrain karta hai taaki woh harmless chezon par itna react na kare. Homeopathic medicines patient ki individual nature – jaise kab zyada hoti hai, kis cheez se, kaisa discharge, kaisi personality – in sab ko dekh kar choose ki jaati hain. Long-term use se body ki reactivity hi kam hoti hai, na sirf temporarily symptoms.',
    'Antihistamines ki tarah neend aur drowsiness nahi aati – kaam aur school performance affect nahi hota',
    'Chronic cases mein acute episodes ki frequency kam hoti hai – bar bar aana rog ka band hota hai',
    'Steroid-based nasal sprays ke side effects se bachata hai – nasal lining thin nahi hoti',
    'Children ke liye safe – long-term bhi; school-age kids mein especially suitable',
    'Asthma mein convert hone se rokne mein madad – "one airway, one disease" approach',
  ],

  medicines: [
    {
      _key: 'med1',
      name: 'Allium Cepa',
      bestFor: 'Jab naak se paani ki tarah behna zyada ho, aankhen bhi watery hon – thandi hawa se ya damp weather mein zyada. Watery discharge dominant type patients.',
      keyIndications: [
        'Naak se paani ki tarah behna – aankhein bhi saath mein watery; tissue har minute lagaani padti hai',
        'Thandi hawa se ya bahar jaane se symptoms worse – ghar mein thoda better',
        'Discharge bland naak se lekin aankhon mein burning – Euphrasia se ulta pattern',
      ],
    },
    {
      _key: 'med2',
      name: 'Arsenicum Album',
      bestFor: 'Burning discharge naak se, raat ko zyada, anxiety aur restlessness ke saath, thande se bura hona. Raat 12-2 baje peak symptoms type.',
      keyIndications: [
        'Naak se burning watery discharge – tissue lagne par skin mein jalan',
        'Raat 12-2 baje symptoms worst – restlessness ke saath uthna padta hai',
        'Thande se worse, garm cheez se aaram – garm paani, garm kamra better lagta hai',
      ],
    },
    {
      _key: 'med3',
      name: 'Natrum Muriaticum',
      bestFor: 'Subah uthne par chhink ki series aaye, discharge pehle watery phir thick ho jaye, naak baar baar band ho – aur emotionally sensitive patient ho.',
      keyIndications: [
        'Morning sneezing fits – subah uthne par lagaatar 10-20 chhinkein aati hain',
        'Discharge pehle paani jaisa phir thick white hota hai – "egg white" jaisi consistency',
        'Naak ek taraf band ek taraf khuli – alternate side mein badlata hai',
      ],
    },
    {
      _key: 'med4',
      name: 'Sabadilla',
      bestFor: 'Continuous chhink jo ruk hi na jaaye, naak mein bahut khujli, phoolon ya pollen se allergy – thandi hawa se zyada bura hona. Spasmodic sneezing type.',
      keyIndications: [
        'Spasmodic chhink jo rokna impossible – series 20-30 tak jaati hai',
        'Naak mein intense khujli aur tickling – chhinkne se thodi der ke liye relief',
        'Pollen trigger clearly identified – outdoors mein worst, indoors mein better',
      ],
    },
    {
      _key: 'med5',
      name: 'Pulsatilla',
      bestFor: 'Thick yellow-green discharge, khule hawa mein aaram, garam kamre mein zyada takleef – mild aur emotional nature ke patient. Discharge ka nature change hone wale cases.',
      keyIndications: [
        'Thick yellow-green discharge – watery se badal gaya; congestion zyada',
        'Khule hawa mein aaram – garam closed room mein worse; fan chahiye',
        'Emotionally sensitive – weeps easily, reassurance chahiye; thirst kam hoti hai',
      ],
    },
  ],

  dietInclude: [
    {
      _key: 'di1',
      category: 'Immunity Boost Karne Wale Khane',
      emoji: '🛡️',
      items: [
        'Haldi wala doodh (Golden Milk) – curcumin natural anti-inflammatory hai, histamine response kam karta hai',
        'Adrak ki chai ya kadha – ginger natural decongestant hai, naak kholta hai aur inflammation kam karta hai',
        'Amla (Indian Gooseberry) – Vitamin C se bharpoor, allergy ke immune response ko moderate karta hai',
      ],
    },
    {
      _key: 'di2',
      category: 'Anti-Inflammatory Foods',
      emoji: '🥗',
      items: [
        'Omega-3 rich khana: flaxseeds, walnuts, fish (mackerel/sardine) – inflammation ka response kam karta hai',
        'Leafy greens (palak, methi, moringa) – antioxidants se immune system ko balance karte hain',
        'Garlic (lahasun) – quercetin hota hai jo natural antihistamine ka kaam karta hai',
      ],
    },
    {
      _key: 'di3',
      category: 'Hydration aur Gut Health',
      emoji: '💧',
      items: [
        'Garm paani ya garam soup – mucus thin karta hai, naak khulti hai; raat ko sone se pehle zaroor',
        'Probiotic foods: dahi, buttermilk (chhach) – gut bacteria balance se immune dysregulation kam hoti hai',
        'Local raw shehad (Raw Honey) – local pollen ke trace amounts; body ko dheere dheere desensitize karta hai',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'Histamine Badhane Wale Khane',
      emoji: '🚫',
      items: [
        'Fermented foods (achar, vinegar, alcohol) – direct histamine badhate hain, symptoms immediately worse',
        'Processed meats (salami, sausage) – preservatives aur histamine dono nasal symptoms trigger karte hain',
        'Old cheese (processed cheese) – high histamine content; dairy sensitivity ke saath double problem',
      ],
    },
    {
      _key: 'da2',
      category: 'Mucus Badhane Wale Khane',
      emoji: '🥛',
      items: [
        'Dairy in excess (zyada doodh, paneer) – kuch patients mein mucus production badhti hai, khaskar raat ko',
        'Maida aur refined carbs (white bread, pasta) – inflammation badhata hai, immune overreaction worse',
        'Fried aur oily food – pro-inflammatory hain, histamine response worse karte hain',
      ],
    },
    {
      _key: 'da3',
      category: 'Allergy Symptoms Worse Karne Wale Items',
      emoji: '❄️',
      items: [
        'Cold drinks aur ice cream – throat aur nasal lining irritate karte hain; symptoms immediately badh jaate hain',
        'Zyada meetha ya sugar – immune function suppress karta hai; candida overgrowth bhi possible',
        'Shellfish (agar seafood allergy bhi ho) – cross-reactivity ho sakti hai; avoid peak allergy mein',
      ],
    },
  ],

  dos: [
    'Nasal saline rinse daily karein – allergens flush hote hain; congestion mein instant relief milti hai',
    'HEPA air purifier bedroom mein lagayein – 80% airborne allergens remove karta hai; raat ka exposure kam hoga',
    'Gadde aur pillow pe allergy-proof covers lagayein – dust mites se direct protection; weekly hot water wash',
    'Baahar se aatey hi kapde alag karein aur haath-munh dhoyen – pollen ka indoor entry rokein',
    'Homeopathic treatment regularly lein – ek-do din miss mat karein; jad se theek karne ke liye complete course',
    'Allergen trigger identify karein (allergy test) – doctor ko exact triggers batayein; exposure avoid easier hoga',
    'Subah 6-10 baje pollen season mein bahar jaane se bachein – pollen count sabse zyada is time hota hai',
    'AC filter har 2-3 hafte saaf karein – dirty filter major allergen source ban jaata hai ghar mein',
  ],

  donts: [
    'Khud se antihistamines ya steroids regularly mat lein – drowsiness, dry nose aur long-term dependency ka risk',
    'Pets ko bedroom mein mat sulayein – 8 ghante allergen ke paas sona matlab continuous exposure',
    'Dhuan, agarbatti ya room freshener sprays andar mat jalayein – direct nasal irritant hain; allergy amplify hoti hai',
    'Cold drinks aur ice cream peak allergy mein mat lo – symptoms immediately badh jaate hain',
    'Treatment season khatam hone par band mat karo – jad se theek karne ke liye continue zaroori hai',
    'Carpets ya curtains ko mahino tak bina vacuum kiye mat rakho – dust mite reservoir ban jaate hain',
    'Allergen exposure hote rehne ko "thoda chalega" mat samjho – threshold exceed hote hi symptoms severe ho jaate hain',
    'Symptoms ignore karke asthma mein convert hone ka wait mat karo – early treatment se serious complications rukti hain',
  ],

  seasonalCare: {
    summer: 'February-May: POLLEN PEAK season – sabse zyada caution is time. Subah 6-10 baje bahar jaane se bachein, pollen count highest hota hai. Bahar se aane ke baad haath-munh dhoyen aur kapde badlein. Windows band rakhein – AC use karein filter ke saath. Sunglasses pehnen bahar – aankhon mein pollen kam aaye. Season se 4-6 hafte PEHLE homeopathic treatment shuru karein – pre-seasonal approach sabse effective hai.',
    monsoon: 'June-September: MOLD PEAK season – geeli deewaaren, bathroom, stored grain mein mold badhta hai. Ghar mein moisture control karein – dehumidifier ya silica gel use karein. Geele kapde ya jutte ghar ke andar mat rakho. AC filter clean karein – monsoon mein mold spores filter mein collect hote hain. Bathroom regular bleach se clean karein. Warm soups aur kadha immunity ke liye daily rakhein.',
    winter: 'December-January: Indoor allergens + dry air double problem. Log andar rehte hain – dust mites aur pet dander exposure zyada. Saline nasal rinse (Jal Neti ya saline spray) – nasal lining moist rakhein; dry air se bleeding aur cracking rok te hain. Heater ke paas humidifier use karein. Wool/blanket dhoop mein rakhein regular – dust mites sun mein nahi rehte. October-November: Weed pollen + dust mites dono active; gadde aur pillow covers hot water mein dhoyen.',
  },

  faqs: [
    {
      _key: 'faq1',
      question: 'Naak ki allergy permanently theek ho sakti hai ya sirf daba sakti hai?',
      answer: 'Conventional medicines (antihistamines, steroids) sirf symptoms dabaati hain – ye band karo toh wapas aata hai. Homeopathy ka goal immune system ko retrain karna hai taaki body allergens par itna over-react na kare. Bahut se patients mein – khaaskar early stage mein treatment start karein toh – long-term aur permanent relief milti hai. Chronic ya zyada saalon wale cases mein complete cure time le sakta hai lekin quality of life zaroor bahut better hoti hai.',
    },
    {
      _key: 'faq2',
      question: 'Kya naak ki allergy aur sardi mein farq hota hai? Kaise pehchanein?',
      answer: 'Haan, fark hota hai. Sardi (viral cold) aksar 5-7 din mein theek ho jaati hai aur saath mein bukhaar ya body ache bhi hota hai. Allergy mein – discharge saaf paani jaisa hota hai, baar baar chhink aati hai, aankhen bhi khujlati hain, aur yeh bar bar aata hai ek hi season ya situation mein. Agar aapki "sardi" har February-March aati hai ya ghar saaf karne par hoti hai – toh allergy hai, virus nahi.',
    },
    {
      _key: 'faq3',
      question: 'Kya naak ki allergy se asthma ho sakta hai?',
      answer: 'Ji haan – yeh ek serious aur documented connection hai. Research kehti hai ki 30 se 80% allergic rhinitis patients mein asthma develop hone ka risk hai agar treatment na ho. Naak aur lungs ek hi airway system ka hissa hain – isliye "one airway, one disease" kaha jaata hai. Isliye sirf naak ki allergy ko ignore nahi karna chahiye – sahi treatment se asthma mein convert hone se roka ja sakta hai.',
    },
    {
      _key: 'faq4',
      question: 'Bacche ki naak se hamesha paani behta hai – kya yeh allergy hai?',
      answer: 'Bacchon mein allergic rhinitis bahut common hai lekin diagnose nahi hoti. Agar yeh sirf thandi mein hota hai toh normal ho sakta hai, lekin agar – subah uthne par chhink ki series aati ho, aankhen khujlati hon, baar baar sar uthana padta ho, ya raat ko munh se saans ho – toh allergy test aur homeopathic evaluation zaroor karwayein. Early treatment se future mein serious complications rok sakte hain.',
    },
    {
      _key: 'faq5',
      question: 'Dust allergy ke liye ghar mein kya karna chahiye?',
      answer: 'Ghar mein in chezon par focus karein: (1) Gadde aur pillow mein allergy-proof covers lagayein, (2) Bedsheets hot water mein weekly dhoyen, (3) Carpets ki jagah hard floors use karein, (4) HEPA vacuum cleaner use karein, (5) Pets ko bedroom se bahar rakhein, (6) Curtains ki jagah blinds use karein. Ye practical changes medicines ke saath mil ke bahut faster results deti hain.',
    },
    {
      _key: 'faq6',
      question: 'Kya allergy test karwaana zaroori hai homeopathy treatment ke liye?',
      answer: 'Homeopathy mein allergy test zaroori nahi hota – lekin helpful ho sakta hai taaki exact trigger pata chale. Homeopath aapke symptoms, triggers, timing, discharge ka type, nature aur personality dekh kar medicine choose karta hai. Allergy test (skin prick ya IgE blood test) karwaana ek achha idea hai kyunki isse aap allergen exposure avoid kar sakte hain – jo treatment ko faster banaata hai.',
    },
    {
      _key: 'faq7',
      question: 'Kya AC use karna naak ki allergy badhaata hai?',
      answer: 'AC khud allergy nahi badhata – lekin dirty AC filter ek major allergen source ban jaata hai. AC dust, mold aur bacteria collect karta hai filter mein. Agar filter saaf na ho toh AC use karte samay ye sab andar aata hai. Isliye – AC filter har 2-3 hafte saaf karein, aur agar ho sake toh HEPA filter wala AC use karein. Sahi maintain ki AC toh help karti hai – allergen-laden hawa ko filter karti hai.',
    },
    {
      _key: 'faq8',
      question: 'Pregnancy mein allergy ki dawai safe hai? Kya homeopathy le sakte hain?',
      answer: 'Pregnancy mein conventional antihistamines – khaaskar first trimester mein – sahi nahi hoti hain. Yahi wajah hai ki pregnant women mein homeopathy ek safe alternative hai. Homeopathic medicines extreme dilution mein hoti hain aur inhone decades se safe use ka record dikhaya hai. Lekin koi bhi treatment – homeopathic bhi – pregnancy mein sirf qualified doctor ke guidance mein leni chahiye. Khud se experiment mat karein.',
    },
    {
      _key: 'faq9',
      question: 'Naak ki allergy kitne time mein theek hoti hai homeopathy se?',
      answer: 'Yeh depend karta hai ki condition kitni purani hai. Nayi allergy (1-2 saal se) – 3-6 mahine mein significant improvement. Purani allergy (5+ saal) – 1-2 saal ka proper treatment lagta hai. Lekin zyaadatar patients ko 4-8 hafte mein hi kuch improvement mehsoos hoti hai – jaise chhink kam honi, naak khulna, neend better hona. Important yeh hai ki patient allergen exposure bhi kam kare saath mein.',
    },
    {
      _key: 'faq10',
      question: 'Kya homeopathy aur allopathy saath le sakte hain allergy mein?',
      answer: 'Ji haan – safely le sakte hain. Homeopathic medicines conventional drugs ke saath koi chemical interaction nahi karti. Aksar hota yeh hai ki jab homeopathy shuru hoti hai, antihistamine ki zaroorat dheere dheere kam hoti jaati hai. Lekin koi bhi medicine band karna sirf apne doctor ki salah se karein. Apni marzi se band mat karein.',
    },
    {
      _key: 'faq11',
      question: 'Mujhe hamesha subah uthke chhink aati hai – kya yeh allergy hai?',
      answer: 'Morning sneezing – jise "sneezing fits on waking" bolte hain – allergic rhinitis ka ek classic sign hai. Raat bhar dust mites ke saath bed share karne aur phir subah khule hawa mein aane se nasal lining trigger hoti hai. Agar yeh regularly ho, saath mein watery eyes, naak behna, ya khujli bhi ho – toh yeh definitely allergy evaluate karwaani chahiye. Homeopathic medicine Natrum Muriaticum khaaskar morning sneezing cases mein bahut kaam aati hai.',
    },
    {
      _key: 'faq12',
      question: 'Kya khane se bhi naak ki allergy badh sakti hai?',
      answer: 'Haan, kuch foods histamine release karte hain ya inflammation badhate hain jisse allergy symptoms worse lagte hain – jaise achar, vinegar, fermented foods, processed meats, bahut zyada dairy, cold drinks. Iska matlab yeh nahi ki yeh sab hamesha ke liye band karein – lekin allergy bad days mein in se bachna symptoms control mein help karta hai. Saath mein anti-inflammatory foods badhayein – haldi, adrak, amla, garlic.',
    },
    {
      _key: 'faq13',
      question: 'Naak ki allergy ki wajah se neend kharaab hoti hai – kya karein?',
      answer: 'Sleep se pehle nasal saline rinse karein – yeh mucosal irritants saaf karta hai. Sar thoda upar kar ke soyen (extra pillow). Bedroom mein air purifier lagayein. AC filter saaf rakhen. Pets ko bahar rakhein. Homeopathy mein jo medicines raat ko symptoms worse hone par dete hain – unhe specifically night-time worsening ke liye target kiya jaata hai. Neend bahut important hai immunity ke liye – iska treatment zaroor karwayein.',
    },
    {
      _key: 'faq14',
      question: 'Kya yoga ya pranayama allergy mein help karta hai?',
      answer: 'Haan – specifically Anulom Vilom aur Bhramari Pranayama nasal airflow improve karte hain aur nasal lining ki reactivity dheere dheere kam hoti hai regular practice se. Neti (Jal Neti ya sutra neti) ek classical technique hai jo nasal allergens flush karti hai. Lekin Kapalbhati – bahut intense hone par – acute allergy mein upar se irritation badha sakta hai. Shuru karein Anulom Vilom se, daily 10-15 minute.',
    },
    {
      _key: 'faq15',
      question: 'Kya shehad (honey) allergy mein help karta hai?',
      answer: 'Raw, local shehad – matlab jo aapke area ke phoolon se bana ho – usme local pollen ke trace amounts hote hain. Yeh ek natural desensitization ki tarah kaam karta hai – body dheere dheere local pollens ko tolerate karna seekh jaati hai. Packaged ya supermarket wala processed shehad kaam nahi karega. Daily ek chammach subah lena – long term mein seasonal pollen allergy mein faida deta hai. Lekin yeh treatment ka substitute nahi, ek supplement hai.',
    },
    {
      _key: 'faq16',
      question: 'Children mein allergy ki wajah se school performance kharaab hoti hai – kya karein?',
      answer: 'Bilkul sach hai – allergic rhinitis bacchon mein concentration, memory aur alertness affect karta hai. Raat ko neend kharaab, din mein antihistamine ki neend – school mein dhyan nahi lagta. Homeopathy mein yeh advantage hai ki medicines sedating nahi hoti. Parents ko sirf symptoms nahi, bacche ki overall quality of life – energy, mood, concentration – mein bhi improvement dekhni chahiye. Teacher ko bhi batayein ki bacche ki issue kya hai.',
    },
    {
      _key: 'faq17',
      question: 'Kya allergy hamesha ke liye rahti hai ya apne aap theek bhi ho sakti hai?',
      answer: 'Kuch cases mein – khaaskar bacchon mein – allergy age ke saath improve ho sakti hai. Lekin zyaadatar adults mein untreated allergic rhinitis worsens hoti rehti hai aur asthma ya sinusitis mein convert ho sakti hai. Apne aap theek hone ki umeed mein wait karna risky hai – better hai proper treatment lo jo immune system ko actually retrain kare. Homeopathy is angle par kaam karta hai.',
    },
    {
      _key: 'faq18',
      question: 'Seasonal allergy ke liye season se pehle treatment start karein ya aane par?',
      answer: 'Season se 4-6 hafte PEHLE treatment shuru karna sabse smart approach hai – isko "pre-seasonal treatment" kehte hain. Agar aapko pata hai ki har February-March pollen allergy aati hai – toh January end mein hi homeopathic consultation le lo. Isse body pre-conditioned hoti hai aur reaction bahut kam aur manageable hoti hai. Season mein shuru karein toh bhi kaam karta hai lekin thoda time zyada lagta hai.',
    },
    {
      _key: 'faq19',
      question: 'Sinusitis aur allergic rhinitis mein kya fark hai?',
      answer: 'Allergic Rhinitis sirf nasal lining ki inflammation hai – jisme chhink, paani, khujli hoti hai. Sinusitis tab hoti hai jab ye inflammation sinuses (naak ke paas ke air pockets) tak pahunch jaati hai – usme face pe pressure, sar dard, thick colored mucus aur kabhi kabhi bukhaar bhi hota hai. Allergic Rhinitis agar treat na ho toh Sinusitis mein convert ho sakti hai – isliye dono linked hain lekin alag conditions hain.',
    },
    {
      _key: 'faq20',
      question: 'Naak ka operation (surgery) se allergy theek hoti hai?',
      answer: 'Naak ki surgery – jaise septoplasty ya turbinate reduction – structural problems (deviated septum, nasal polyps) ke liye hoti hai. Allergy ek immune system ka problem hai, structural nahi – isliye surgery allergy ko theek nahi karti. Haan agar structural problem bhi ho – toh surgery + homeopathy dono mil ke kaam karte hain. Sirf allergy ke liye surgery unnecessary hai aur doctor bhi recommend nahi karte.',
    },
    {
      _key: 'faq21',
      question: 'Kya ek allergy se doosri allergy ho sakti hai – dust ke saath food allergy bhi?',
      answer: 'Haan – ise "polysensitization" kehte hain. Ek allergy wala person zyada sensitive immune system ka hota hai – toh naye allergens par bhi react karne ki probability zyada hoti hai. Isko "atopic march" bhi kehte hain – eczema, food allergy, allergic rhinitis, asthma – ek ke baad ek. Isliye ek allergy ko seriously lena chahiye – sirf symptom control nahi, immune dysregulation ko address karna chahiye.',
    },
    {
      _key: 'faq22',
      question: 'Kya air purifier khareedna zaruri hai allergy mein?',
      answer: 'Zaruri nahi lekin highly recommended hai – khaaskar bedroom ke liye. HEPA air purifier 0.3 micron tak ke particles pakad leta hai – dust mites ke waste products, pollen, pet dander, mold spores. Studies mein dikha hai ki bedroom mein HEPA purifier se allergy symptoms significantly reduce hote hain, khaaskar raat ko. Aapka total allergen load kam hoga toh medicines bhi faster kaam karengi.',
    },
    {
      _key: 'faq23',
      question: 'Kya allergy test se exact medicine pata chalti hai?',
      answer: 'Allergy test se pata chalta hai ki aap kis cheez ke allergic hain – dust mites, pollen, cat dander etc. Isse allergen avoid karna easy ho jaata hai. Lekin homeopathic medicine choose karna in tests par nahi, balki aapke individual symptom picture par hoti hai – discharge kaisa, kab zyada, kaisi chhink, patient ki nature kaisi. Dono information mil ke sabse effective treatment plan banane mein help karti hain.',
    },
    {
      _key: 'faq24',
      question: 'Naak ki allergy mein weight bhi badh sakta hai kya?',
      answer: 'Direct link toh nahi, lekin indirect connection hai. Naak band hone se neend kharaab hoti hai, aur poor sleep hormonal imbalance karta hai jisme ghrelin (hunger hormone) badhta hai – jisse weight gain ho sakta hai. Kuch log antihistamines se bhi weight gain report karte hain. Naak ki allergy ki wajah se exercise bhi kam ho jaati hai – sab milake weight pe asar pad sakta hai. Allergy treat karein toh overall health better hogi.',
    },
    {
      _key: 'faq25',
      question: 'Homeopathic doctor ko kya kya batana chahiye allergy ke liye?',
      answer: 'Ek achhe consultation ke liye doctor ko batayein: (1) Exactly kab hoti hai – season, subah/raat, kahan; (2) Exact triggers – dust, pollen, pet, perfume; (3) Discharge ka type – watery, thick, yellow, burning; (4) Konsi side zyada band hoti hai; (5) Kya khaakar ya karne se better/worse hota hai; (6) Kya family mein allergy ya asthma ka history hai; (7) Overall nature – aap kaise insaan hain – yeh bhi important hai homeopathy mein.',
    },
  ],

  relatedDiseases: [
    'Asthma',
    'Sinusitis',
    'Recurrent Cold',
    'Allergy',
    'Bronchitis',
  ],
}

async function seed() {
  await client.createOrReplace(doc)
  console.log('✅ Allergic Rhinitis created/updated: disease-allergic-rhinitis')
  console.log('🌐 Live at: https://homeopedia.in/diseases/allergic-rhinitis')
}

seed().catch(console.error)
