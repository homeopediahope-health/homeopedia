import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-bronchitis',
  _type: 'disease',
  title: 'Bronchitis',
  hindiName: 'Shwas Nali Ki Sujan / Khansi Ki Bimari',
  slug: { _type: 'slug', current: 'bronchitis' },
  category: 'Respiratory',
  publishedAt: '2026-05-03T00:00:00.000Z',
  metaTitle: 'Bronchitis Treatment in Hindi | Homeopathy | Homeopedia',
  metaDescription: 'Bronchitis ke causes, types, homeopathic treatment aur diet guide — simple Hinglish mein. Verified info, doctor-reviewed. Turant relief ke upay.',
  heroText: 'Bronchitis ek respiratory condition hai jisme bronchial tubes — yaani wo naliyan jo aapke lungs tak hawa pohonchaati hain — inflamed (suji hui) ho jaati hain. Jab ye inflammation hoti hai to aapka body zyada mucus (balgam) produce karta hai, jisse khansi, chest tightness aur saans lene mein takleef hoti hai. Ye bimari do tarah ki hoti hai — ek jo kuch hafte mein theek ho jaati hai (acute), aur ek jo mahino-salon tak rehti hai (chronic). India mein pollution, mausam badlaav aur smoking ki wajah se ye bimari bahot common ho gayi hai — khaaskar sardi ke mausam mein.',

  quickFacts: {
    whatItIs: 'Bronchial tubes ki inflammation jisme baar baar balgam wali khansi, chest tightness aur saans ki takleef hoti hai',
    howCommon: 'Lagbhag 1.5 crore acute bronchitis cases annually India mein — khaaskar sardi ke 3 mahine mein (GBD Study data)',
    treatmentDuration: 'Acute: 2-3 hafte | Chronic: long-term management (months to years)',
  },

  causes: [
    'Viral infection — 90% acute bronchitis cases mein rhinovirus, influenza ya RSV virus zimmedaar hota hai',
    'Bacterial infection — Mycoplasma pneumoniae, Bordetella pertussis jaise bacteria (ye kam common hai, but serious)',
    'Cigarette smoking — chronic bronchitis ka no. 1 cause; smoke bronchial lining ko direct damage karta hai',
    'Air pollution aur dust — India ke cities mein PM2.5 level itna zyada hai ki non-smokers ko bhi chronic bronchitis ho rahi hai',
    'Chemical fumes aur occupational exposure — factories, painting, construction workers mein zyada',
    'Weak immunity — jo log baar baar cold/flu se pareshan rehte hain unhe bronchitis ka risk zyada hota hai',
  ],

  riskFactors: [
    'Smokers aur ex-smokers — lungs ki natural cleaning system damage ho jaati hai',
    '50+ age ke log — immune response slow ho jaata hai',
    'Chhote bachche (under 5) — immune system still developing hai',
    'GERD (acid reflux) patients — stomach acid bronchial tubes ko irritate karta hai',
    'Air pollution wale areas mein rehne wale — Delhi, Mumbai, Pune, Kanpur jaise cities',
    'Occupation-related exposure wale — miners, farmers, textile workers',
    'Asthma ya allergy history wale — already sensitive airways',
  ],

  complications: [
    'Pneumonia — infection lungs ke deeper tissues tak pahunch jaati hai; ye medical emergency hai',
    'COPD (Chronic Obstructive Pulmonary Disease) — chronic bronchitis ko ignore karne ka worst outcome; iska koi complete cure nahi hota',
    'Respiratory failure — severe cases mein oxygen level dangerously low ho sakta hai',
    'Frequent lung infections — ek baar bronchitis ke baad lungs vulnerable ho jaate hain; infections baar baar aate hain',
  ],

  types: [
    {
      _key: 'type1',
      name: 'Acute Bronchitis (Tezi Se Aane Wali)',
      description: 'Ye sabse common type hai. Zyaadatar viral infection (cold ya flu virus) ki wajah se hoti hai. Achanak shuru hoti hai aur usually 1-3 hafte mein theek ho jaati hai. Symptoms mein tez khansi (pehle sukhi, phir balgam ke saath), halka bukhaar, chest mein dard aur thakaan shamil hain. Antibiotics sirf tab zaroori hain jab bacterial infection ho — jo sirf 5-10% cases mein hota hai. Homeopathy acute bronchitis mein badi tezi se kaam karti hai.',
    },
    {
      _key: 'type2',
      name: 'Chronic Bronchitis (Purani, Baar Baar Aane Wali)',
      description: 'Jab productive khansi (balgam wali) lagaataar 3 mahine tak, aur ye 2 saal tak repeat ho — tab ise chronic bronchitis kehte hain. Ye COPD ka ek part bhi ho sakti hai. Symptoms mein roz subah balgam wali khansi, saans phoolna, thodi si mehnat mein thakaan aur baar baar chest infections shamil hain. Chronic bronchitis mein sirf symptoms treat karna kaafi nahi — root cause (smoking, pollution, immunity) address karna padta hai. Homeopathy yahan long-term management mein specially effective hai.',
    },
    {
      _key: 'type3',
      name: 'Recurrent Bronchitis (Baar Baar Aane Wali — Bacchon Mein)',
      description: 'Bachche jinhe baar baar — saal mein 3-4 baar — bronchitis ho jaati hai. Ye aksar low immunity, allergy ya undiagnosed asthma ki nishaani hoti hai. Har thodi thand mein ya mausam badlaav pe khansi, saans mein wheeling (seeti jaisi awaaz) aur balgam ka baar baar banana iske symptoms hain. Homeopathy recurrent cases mein immunity strengthen karke frequency clearly kam karti hai.',
    },
    {
      _key: 'type4',
      name: 'Allergic Bronchitis (Allergy Se Hone Wali)',
      description: 'Dust, pollen, pollution ya pet dander jaisi cheezein bronchial tubes ko trigger karti hain. Aksar asthma ke saath overlap hoti hai. Khaas jagah ya mausam mein khansi badhna, naak behna aur aankhon mein khujli ke saath khansi iske characteristic symptoms hain. Allergen identify karna sabse zaroori step hai.',
    },
  ],

  medicines: [
    {
      _key: 'med1',
      name: 'Antimonium Tartaricum',
      bestFor: 'Jinhein chest mein balgam bahot zyada ho lekin nikle nahi — rattling sound aaye saans mein, kamzori feel ho, khansi se thak jaayein.',
      keyIndications: [
        'Chest mein rattling sound — balgam bhara hua hai lekin expel nahi ho raha',
        'Bahut kamzori ke saath khansi — "choked" chest ki feeling',
        'Cough reflex weak, balgam loosen hona mushkil — especially elderly ya debilitated patients',
      ],
    },
    {
      _key: 'med2',
      name: 'Bryonia Alba',
      bestFor: 'Dry, painful khansi — khansi aane pe chest mein aur sar mein dard ho. Patient hilne se bachta ho, let ke better feel kare. Balgam nahi ya bahut thick balgam.',
      keyIndications: [
        'Koi bhi movement dard badhaaye — rest se complete relief',
        'Dry, tearing type khansi jo hilne se worse ho',
        'Mucous membranes dry, thick balgam easily nahi nikalta',
      ],
    },
    {
      _key: 'med3',
      name: 'Hepar Sulphuris Calcareum',
      bestFor: 'Balgam wali khansi jisme balgam thick aur yellow/green ho — bacterial type bronchitis ka pattern. Thand se condition worse ho, warm cheezein better karein. Irritable patient.',
      keyIndications: [
        'Infected bronchitis — purulent yellow/green balgam',
        'Bark jaisi khansi, thand se symptoms worse',
        'Body ke natural defense ko support karta hai infected cases mein',
      ],
    },
    {
      _key: 'med4',
      name: 'Pulsatilla',
      bestFor: 'Balgam zyada aur thick yellowish-green, subah aur raat khansi worse. Open air mein better feel kare. Zyaadatar bachche ya mild temperament wale adults.',
      keyIndications: [
        'Yellowish-green thick mucus, open air se relief',
        'Morning aur evening khansi worse, fresh air se better',
        'Bacchon ke recurrent cases mein especially helpful',
      ],
    },
    {
      _key: 'med5',
      name: 'Phosphorus',
      bestFor: 'Khansi jo voice loss ke saath aaye, chest mein burning feel ho. Cold drinks se better, warm se worse. Tall, thin, sensitive personality wale patients.',
      keyIndications: [
        'Voice loss ke saath chest ki khansi — laryngeal involvement',
        'Chest mein burning sensation, cold drinks se temporary relief',
        'Tall, thin, sensitive patients mein bronchial inflammation',
      ],
    },
  ],

  dietInclude: [
    {
      _key: 'cat1',
      category: 'Mucus-Thinning & Anti-Inflammatory',
      emoji: '🫁',
      items: [
        'Garam paani (subah uthke khali pet) — mucus thin karta hai aur throat clear karne mein help karta hai',
        'Chicken ya vegetable soup — anti-inflammatory properties; sodium content nasal congestion mein bhi help karta hai',
        'Adrak-tulsi ki chai (sugar kam) — adrak bronchial inflammation kam karta hai; tulsi natural antibacterial hai',
        'Haldi doodh (turmeric milk) — curcumin ka anti-inflammatory effect lungs ko soothe karta hai, raat ko peena best hai',
        'Honey (shahed) — natural cough suppressant; sore throat soothe karta hai; WHO bhi recommend karta hai',
      ],
    },
    {
      _key: 'cat2',
      category: 'Immunity & Healing Support',
      emoji: '🌿',
      items: [
        'Lahsun (garlic) — allicin compound natural antimicrobial hai; raw ya cooked dono effective',
        'Amla (Indian gooseberry) — Vitamin C ka best source; white blood cell production boost karta hai',
        'Hara patta wali sabziyan (palak, methi) — antioxidants aur iron dono milte hain jo recovery support karta hai',
        'Citrus fruits (narangi, lemon) — Vitamin C respiratory infections ki duration kam karta hai',
        'Omega-3 rich foods (akhrot, flaxseeds) — bronchial inflammation ko systemically reduce karta hai',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'avd1',
      category: 'Mucus-Producing Foods',
      emoji: '🚫',
      items: [
        'Full-fat milk aur cream — mucus production increase karte hain; bronchitis mein avoid karna best hai',
        'Ice cream, cold desserts — throat ko irritate karte hain aur balgam thicken kar dete hain',
        'Cold drinks, iced water — bronchial spasm trigger kar sakte hain; bronchoconstriction ka risk',
      ],
    },
    {
      _key: 'avd2',
      category: 'Inflammatory & Immune-Suppressing',
      emoji: '⚠️',
      items: [
        'Bahut zyada teekha khaana — already inflamed airways ko aur irritate karta hai',
        'Processed aur packaged foods — preservatives aur additives inflammation badhate hain',
        'Alcohol — immune system suppress karta hai; mucous membrane dehydrate karta hai',
        'Refined sugar (zyada matra mein) — white blood cells ki infection-fighting ability temporarily reduce karta hai',
        'Maida based foods (white bread, biscuits) — inflammatory hain aur immunity compromise karte hain',
      ],
    },
  ],

  seasonalCare: {
    summer: 'Cooler ke directly saamne mat baithein — cold air blast bronchial tubes ko trigger karta hai. Bahut thand AC aur garm bahar ke bich baar baar jaana avoid karein — temperature shock airways ko stress deta hai. Dehydration se bachein — garmi mein mucus thick ho jaata hai; paani khub peeyein. Pollen allergy wale logon ko is mausam mein zyada dhyan rakhna hai — allergic bronchitis ka risk peak pe hota hai.',
    monsoon: 'Bheegne se bachein — gile kapdon mein rehne se chest infection ka risk bahut badhta hai. Mold aur fungus wale ghar — barish mein ye common hai; ye bronchitis trigger kar sakta hai; ventilation zaroori. Air purifier ya indoor plants (aloe vera, spider plant) rakhein — indoor air quality maintain hoti hai.',
    winter: 'Ghar se nikalne se pehle chest aur gala cover karein — scarf ya muffler zaroori hai. Subah 6 baje wali thand mein bahar exercise avoid karein — ye bronchial spasm ka peak time hai. Ghar mein heater use karein to humidifier bhi rakhen — dry heated air airways ko irritate karti hai. Steam inhalation raat ko sone se pehle — mucus loosen hota hai aur raat ki neend better hoti hai. Agar previous winter mein bronchitis hua tha, September se hi homeopathic preventive treatment shuru kar sakte hain.',
  },

  dos: [
    'Din mein 8-10 glass garam ya lukewarm paani peeyein — hydration mucus ko thin rakhta hai jisse khansi mein aasaani hoti hai',
    'Steam inhalation (bhap lena) din mein 2-3 baar karein — eucalyptus oil ki 2-3 drops daalne se aur bhi effective hota hai',
    'Poora aaram karein — body ko infection se ladne ke liye energy chahiye; forced activity recovery slow karti hai',
    'Humidifier use karein ghar mein — dry air airways ko irritate karti hai; humid air mein breathing easier hoti hai',
    'Chest physiotherapy (gentle patting on back) — family member se karwa sakte hain; mucus loosening mein help karta hai',
    'Gala aur chest garam rakhen — cold exposure se bronchial spasm aur symptoms worse hote hain',
    'Doctor se regular follow-up karein — especially chronic bronchitis mein spirometry se progress track karna zaroori hai',
  ],

  donts: [
    'Smoking bilkul band karein (ya passive smoke bhi avoid karein) — ye bronchitis ka root cause hai; ek cigarette bhi recovery ko weeks peeche dhakelta hai',
    'Khud se antibiotics mat lo — viral bronchitis mein antibiotic kaam nahi karta; ulta antibiotic resistance create karta hai',
    'Cough suppressant syrups avoid karein — khansi body ka mechanism hai balgam bahar karne ka; rokne se mucus andar reh jaata hai',
    'Exercise ya mehnat wala kaam fever aur active infection mein mat karein — heart aur lungs pe extra stress padta hai',
    'AC ya cooler mein seedha hawa mat lein — direct cold air bronchial spasm trigger karta hai',
    'Dhool, chemical fumes, agarbatti ya dhoope ke paas mat jaayein — already inflamed airways ke liye ye triggers hain',
    'Symptoms ko ignore mat karein — 3 hafte se zyada wait mat karein; pneumonia ka risk real hai',
  ],

  ccrhEvidence: {
    improvementRate: '72%',
    avgTreatmentPeriod: 'Acute: 2-3 hafte | Chronic: 3-6 mahine',
    citation: 'CCRH — Quarterly Bulletin on Respiratory Diseases | 2018 | ccrhindia.nic.in',
    keyFindings: [
      'Cough frequency aur mucus production score dono mein placebo se better improvement',
      'Recurrent bronchitis patients mein frequency aur severity dono kam hui treatment group mein',
      'Antibiotic use treatment group mein significantly kam — no resistance created',
    ],
  },

  homeopathyBenefits: [
    'Sirf is baar ki khansi nahi — bronchial sensitivity aur immunity address hoti hai taaki baar baar na aaye',
    'Antibiotic resistance ka koi risk nahi — natural healing approach',
    'Bacchon ke recurrent cases mein 4-6 mahine mein frequency clearly drop hoti hai',
    'Safe for all ages — elderly, pregnant women, aur children mein bhi use possible',
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Bronchitis kya hoti hai — aur ye normal khansi se alag kyun hoti hai?',
      answer: 'Normal khansi 3-5 din mein theek ho jaati hai — bronchitis mein khansi 1-3 hafte tak ya isse zyada rehti hai kyunki actual bronchial tubes (lungs ki hawa ki naliyan) inflamed ho jaati hain. Isme sirf gala nahi, chest mein balgam, tightness aur saans phoolna bhi hota hai. Agar aapki khansi 10 din se zyada hai aur balgam aa raha hai — ye bronchitis ke clear signs hain, normal khansi nahi.',
    },
    {
      _key: 'faq2',
      question: 'Acute bronchitis aur chronic bronchitis mein kya fark hai?',
      answer: 'Acute bronchitis suddenly aati hai — mostly viral infection ki wajah se — aur 2-3 hafte mein theek ho jaati hai. Chronic bronchitis baar baar aane wali, long-term condition hai: lagaataar 3 mahine productive khansi (balgam ke saath) aur ye pattern 2 consecutive saalon mein — tab diagnosis hoti hai. Chronic bronchitis COPD ka hissa ban sakti hai. Dono ka treatment approach alag hota hai isliye pehle doctor se confirm karna zaroori hai ki aapko kaun sa type hai.',
    },
    {
      _key: 'faq3',
      question: 'Bronchitis aur pneumonia mein kya fark hai — kaise pata chalega?',
      answer: 'Bronchitis mein infection airways (tubes) mein hoti hai — pneumonia mein actual lung tissue (air sacs) infected ho jaate hain. Practically difference ye hai ki pneumonia mein bukhaar 103°F se zyada hota hai, saans bahut zyada phoolti hai even at rest, aur X-ray mein lung infiltrates dikhte hain. Bronchitis mein generally patient walk-around illness hoti hai — pneumonia mein serious debility hoti hai. Agar doubt ho to doctor se milna aur chest X-ray karana zaroori hai — ye differentiation ghar pe impossible hai.',
    },
    {
      _key: 'faq4',
      question: 'Bronchitis contagious hoti hai — kya doosron ko ho sakti hai mujhse?',
      answer: 'Haan — acute viral bronchitis contagious hoti hai. Jo virus isse cause karta hai (rhinovirus, influenza) — wo coughing, sneezing ya infected surfaces touch karne se spread hota hai. Pehle 3-5 din mein spread ka risk sabse zyada hota hai. Isliye is period mein ghar pe raho, mask pahno, haath frequently dhoye, aur bacchon aur elderly ke paas jaane se bachen. Chronic bronchitis (smoking/pollution se) non-contagious hoti hai.',
    },
    {
      _key: 'faq5',
      question: 'Bronchitis kitne din ya hafte mein theek hoti hai?',
      answer: 'Acute bronchitis mein khansi 2-3 hafte mein significantly better hoti hai, lekin halki khansi 6-8 hafte tak bhi rah sakti hai — ye normal hai. Agar 3 hafte baad bhi koi improvement nahi hai, ya symptoms worse ho rahe hain, to doctor se milna zaroori hai — ya to bacterial infection hai ya koi aur underlying issue. Chronic bronchitis mein "complete cure" nahi hoti — management hoti hai; regular treatment se exacerbations kam hote hain aur quality of life better hoti hai.',
    },
    {
      _key: 'faq6',
      question: 'Chronic bronchitis permanently theek ho sakti hai?',
      answer: 'Chronic bronchitis completely reverse nahi hoti agar lung damage ho chuka ho — lekin iska matlab ye nahi ki aap helpless hain. Agar smoking band ho jaaye aur pollution exposure kam ho jaaye, toh symptoms dramatically better hote hain aur further damage ruk jaata hai. Homeopathy mein khaas baat ye hai ki ye baar baar hone wale flare-ups ki frequency aur severity dono kam karne mein help karta hai waqt ke saath. Jo log consistently treatment pe rehte hain unki life practically normal ho jaati hai — regular khansi nahi, active rehna possible ho jaata hai.',
    },
    {
      _key: 'faq7',
      question: 'Bronchitis mein kitna bukhaar hona chahiye — kab serious hai?',
      answer: 'Bronchitis mein halka bukhaar — 100-101°F (37.8-38.3°C) — normal hai, khaaskar pehle 2-3 din mein. 102°F tak bhi manageable hai ghar pe rest aur fluids se. Lekin agar bukhaar 103°F (39.4°C) se upar jaaye, ya bukhaar 5 din se zyada rahe, ya khansi ke saath chest pain aur saans phoolna combine hoon — ye pneumonia ya bacterial infection ka signal hai, turant doctor ke paas jaana chahiye.',
    },
    {
      _key: 'faq8',
      question: 'Kya homeopathy bronchitis mein kaam karta hai?',
      answer: 'Haan — homeopathy bronchitis mein, khaaskar acute aur recurrent cases mein, effective approach hai. CCRH-affiliated studies mein treatment group mein cough frequency aur mucus production score dono mein placebo group se better improvement dekhi gayi hai. Homeopathy ka sabse bada advantage ye hai ki ye sirf is baar ki khansi nahi — aapki bronchial sensitivity aur immunity address karta hai taaki bronchitis baar baar na aaye.',
    },
    {
      _key: 'faq9',
      question: 'Bronchitis ki best homeopathic medicine kaun si hai?',
      answer: 'Ye seedha jawab dena mushkil hai kyunki homeopathy mein "best medicine" woh hoti hai jo aapke specific symptoms se match kare — sirf disease se nahi. Jaise: chest mein balgam bhari ho lekin nikle nahi — Antimonium Tartaricum; dry, painful khansi — Bryonia; thick green-yellow balgam + bacterial type — Hepar Sulph; bacchon mein recurrent cases — Pulsatilla ya Bacillinum. Isliye ek qualified homoeopath se milna zaroori hai jo aapki poori history dekhke medicine decide kare — self-medication se long-term results nahi milte.',
    },
    {
      _key: 'faq10',
      question: 'Bronchitis mein homeopathy kitne din mein asar karta hai?',
      answer: 'Acute bronchitis mein — agar sahi medicine di jaaye — 24-48 ghante mein improvement feel hona shuru ho sakta hai, khaaskar balgam thin hona aur khansi ki frequency kam hona. Full recovery mein 2-4 hafte lagte hain. Chronic bronchitis mein patience chahiye — 3-4 mahine ki consistent treatment ke baad meaningful difference aata hai. Recurrent bronchitis mein 6 mahine ka course zyaadatar sufficient hota hai frequency significantly reduce karne ke liye. Har patient ka response alag hota hai.',
    },
    {
      _key: 'faq11',
      question: 'Bronchitis mein kya khana chahiye aur kya nahi?',
      answer: 'Khaane ke liye best cheezein: garam liquids (adrak chai, soup, turmeric milk), lahsun, amla, Vitamin C rich fruits aur honey — ye sab balgam thin karte hain aur immunity boost karte hain. Avoid karne wali cheezein: cold drinks, ice cream, zyada dairy (milk, cream, cheese), alcohol aur bahut zyada processed foods. Sabse important rule: din mein 8-10 glass garam paani — ye mucus thin rakhta hai aur body ke natural healing mechanism ko support karta hai.',
    },
    {
      _key: 'faq12',
      question: 'Bronchitis mein doodh (milk) peena chahiye ya nahi?',
      answer: 'Is baare mein evidence mixed hai — scientific studies definitively prove nahi karti ki dairy directly mucus increase karta hai. Lekin clinical experience aur anek patients ki feedback hai ki full-fat milk, cream aur heavy dairy bronchitis mein symptoms worse karte hain — throat mein heavy ya thick feel aata hai. Simple approach: agar aapko lagta hai doodh se khansi ya balgam worse ho rahi hai — 1-2 hafte ke liye band karke dekhen. Haldi waala doodh (turmeric milk) is rule ka exception hai — uske anti-inflammatory benefits zyada important hain.',
    },
    {
      _key: 'faq13',
      question: 'Bronchitis mein steam (bhap) lena chahiye — sahi tarika kya hai?',
      answer: 'Haan — steam therapy bronchitis mein ek best home remedy hai. Sahi tarika: ek bartan mein ubalta paani lo, 2-3 drops eucalyptus oil ya Vicks add karo, sar ke upar towel se tent banao, aur 8-10 minute naak aur mooh se gehri saans lo. Din mein 2-3 baar karo, khaaskar subah aur sone se pehle. Ye bronchial tubes ko dilate karta hai, mucus thin karta hai, aur saans lena easier banata hai. Bacchon ke liye — direct steam nahi; bathroom mein hot shower se steam fill karo aur unhe andar baithao.',
    },
    {
      _key: 'faq14',
      question: 'Bacchon mein baar baar bronchitis kyun hoti hai — kya karna chahiye?',
      answer: 'Bacchon mein baar baar bronchitis (saal mein 3+ baar) ko "normal" mat samjhein — ye underlying issue ki nishaani hai. Common causes: undiagnosed asthma, dust/food allergy, low immunity, ya adenoid/tonsil problems. Pediatric allergist ya pulmonologist se evaluate karwayein. Homeopathy yahan specifically helpful hai kyunki ye bachche ki overall immunity aur bronchial hypersensitivity dono address karta hai — long-term mein episode frequency clearly kam hoti hai.',
    },
    {
      _key: 'faq15',
      question: 'Pregnancy mein bronchitis ho to kya karein?',
      answer: 'Pregnancy mein bronchitis alag isliye hai kyunki kaafi conventional medicines safe nahi hoti. Ghar pe: poora aaram, bahut paani, steam, garam liquids aur honey. Fever 102°F se upar ho ya saans ki takleef ho to doctor se turant milein — treatment delay bilkul mat karein. Homeopathy pregnancy mein safe option hai — highly diluted medicines se fetus pe koi documented harmful effect nahi. Lekin homeopathic doctor ko pregnancy clearly batayein taaki appropriate medicines select hoon.',
    },
    {
      _key: 'faq16',
      question: 'Elderly log (senior citizens) mein bronchitis zyada serious kyun hoti hai?',
      answer: '65+ age mein immune system weaker hota hai, lung capacity natural decline pe hoti hai, aur zyaadatar log pehle se heart ya diabetes jaise conditions mein hote hain — is combination mein bronchitis quickly pneumonia ya worse conditions mein convert ho sakti hai. Isliye elderly mein bronchitis ke symptoms mein bilkul delay mat karein — doctor visit first 2-3 din mein hi karein. Flu aur pneumococcal vaccine bhi recommend ki jaati hai.',
    },
    {
      _key: 'faq17',
      question: 'Bronchitis mein kaun se tests karwane chahiye?',
      answer: 'Simple acute bronchitis mein zyaadatar koi test zaroori nahi hota — doctor physical examination se diagnose karta hai. Lekin ye conditions mein tests karwayein: Chest X-ray — agar pneumonia ki possibility ho ya symptoms 3 hafte se zyada ho; Sputum culture — agar bacterial infection suspect ho (green/yellow thick mucus, high fever); Spirometry — chronic bronchitis aur COPD evaluate karne ke liye; CBC (blood test) — WBC count se infection type pata chalti hai. Khud test mat choose karein — doctor decide karega kya zaroori hai.',
    },
    {
      _key: 'faq18',
      question: 'Bronchitis mein antibiotic leni chahiye ya nahi?',
      answer: 'Zyaadatar cases mein — NAHI. 90% acute bronchitis viral hoti hai, jis pe antibiotics bilkul kaam nahi karti. WHO aur CDC dono clearly recommend karti hain ki uncomplicated acute bronchitis mein antibiotics unnecessary hain — aur ye antibiotic resistance ka bada cause hain India mein. Antibiotics sirf tab — jab proven bacterial infection ho (sputum culture se), bukhaar 5 din se zyada rahe, ya high-risk patient ho (elderly, immunocompromised). Apne aap se antibiotic lena — ye ek common aur dangerous practice hai. Doctor ko decide karne do.',
    },
    {
      _key: 'faq19',
      question: 'Bronchitis ka ghar pe kya ilaaj karein — effective home remedies kya hain?',
      answer: 'Sabse effective home remedies: (1) Garam paani + honey + adrak din mein 3 baar — mucus thin karta hai, throat soothe karta hai. (2) Steam therapy eucalyptus oil ke saath din mein 2-3 baar — 8-10 minute. (3) Haldi doodh raat ko sone se pehle — anti-inflammatory. (4) Salt water gargle — gala saaf karta hai, bacterial load kam karta hai. (5) Humidifier raat ko room mein — dry air symptoms worse karta hai. Important: Ye remedies mild-moderate symptoms ke liye hain. High fever, saans ki takleef ya 3 hafte se zyada symptoms — doctor se milna zaroori hai.',
    },
    {
      _key: 'faq20',
      question: 'Bronchitis mein chest mein pain kyun hota hai aur kya karna chahiye?',
      answer: 'Bronchitis mein chest pain do reasons se hoti hai: ek, constant khansi se chest muscles sore ho jaate hain (muscular pain) — ye normal hai. Doosra, bronchial inflammation itself ek dull, heavy feeling create karta hai. Muscular chest pain ke liye warm compress lagao. Lekin agar chest pain sharp ho, saans mein worse ho, ya bahut intense ho — ye pneumonia ya pleurisy ka sign ho sakta hai; doctor se milein immediately. Dono ke beech difference ye hai — bronchitis ka dard cough karne pe worse hota hai, pleurisy ka dard breathing pe worse hota hai.',
    },
    {
      _key: 'faq21',
      question: 'Bronchitis se bachne ke liye kya karein — prevention kya hai?',
      answer: 'Bronchitis prevention ke 5 most important steps: (1) Smoking band karein — ye single biggest risk factor hai. (2) Annual flu vaccine lein — influenza ek common bronchitis trigger hai. (3) Haath frequently dhoye, especially flu season mein — viral spread rokne ka best tarika. (4) Pollution mask (N95 type) use karein outdoor mein agar aap high-pollution city mein rehte hain. (5) Immunity strengthen karein — adequate sleep, balanced diet, regular exercise. Homeopathy preventive approach bhi le sakti hai — jo log baar baar bronchitis se pareshan hain unke liye pre-winter (September-October) mein preventive treatment beneficial hota hai.',
    },
  ],

  sources: [
    { _key: 's1', name: 'WHO — Acute Respiratory Infections Management Guidelines', url: 'www.who.int/publications', year: '2019' },
    { _key: 's2', name: 'CCRH — Quarterly Bulletin on Respiratory Diseases', url: 'ccrhindia.nic.in', year: '2018' },
    { _key: 's3', name: 'Journal of Evidence-Based Complementary & Alternative Medicine — Homoeopathic Management of URTI', url: 'pubmed.ncbi.nlm.nih.gov', year: '2019' },
    { _key: 's4', name: 'Global Burden of Disease Study (Lancet) — Respiratory Disease Burden in India', url: 'thelancet.com/gbd', year: '2019' },
    { _key: 's5', name: 'CDC — Antibiotic Prescribing for Acute Bronchitis', url: 'cdc.gov/antibiotic-use', year: '2021' },
  ],

  doctorNote: 'Meri practice mein Antimonium Tartaricum un patients mein remarkable kaam karta hai jinhe "bhara hua chest" feel hota hai — balgam zyada lekin nikal nahi raha. Bacchon ke recurrent bronchitis mein 4-6 mahine ki homeopathic treatment se frequency clearly drop hoti hai — parents ko ye result sabse zyada motivate karta hai treatment continue rakhne ke liye. — Dr. Shadab, Homeopedia.in',
}

async function seed() {
  console.log('Seeding Bronchitis (Shwas Nali Ki Sujan)...')
  await client.createOrReplace(doc)
  console.log('✅ Done! disease-bronchitis seeded.')
}

seed()
