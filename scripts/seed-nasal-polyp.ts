import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-nasal-polyp',
  _type: 'disease',
  title: 'Nasal Polyp',
  hindiName: 'Naak Ki Rasoli / Naak Ki Gaanth / Naak Ka Maas',
  slug: { _type: 'slug', current: 'nasal-polyp' },
  category: 'Respiratory',
  publishedAt: '2026-05-02T00:00:00.000Z',
  metaTitle: 'Nasal Polyp Treatment in Hindi | Homeopathy Ilaaj | Homeopedia',
  metaDescription: 'Nasal Polyp (naak ki rasoli) ka permanent treatment, surgery alternatives, homeopathic medicines aur diet guide — doctor-reviewed, verified info.',
  heroText: 'Nasal Polyp ek naram, dard-rahit gaanth hai jo naak ke andar ya sinuses ki lining pe hoti hai — teardrop shape ki, jaise angoori angoor. Ye cancerous nahi hoti, lekin jab badh jaati hai to breathing problem, smell loss, aur lagaataar naak band rehna shuru hota hai. India mein 1-4% adults mein hoti hai. Surgery se sirf existing polyp hata sakti hai, lekin underlying tendency address nahi hoti — isliye 70-80% cases mein surgery ke baad bhi polyp wapas aata hai. Homeopathy usi recurrence tendency pe kaam karta hai.',

  quickFacts: {
    whatItIs: 'Naak ke andar naram, non-cancerous growth — chronic inflammation ya allergy se develop hoti hai',
    howCommon: 'India mein estimated 1-4% adult population mein — asthma/allergy patients mein 10-20% tak',
    treatmentDuration: 'Symptoms mein improvement: 6-8 hafte | Polyp size reduction: 3-4 mahine | Complete: 4-6 mahine',
  },

  causes: [
    'Chronic inflammation of nasal lining — lagaataar swelling se tissue growth shuru hoti hai',
    'Allergic rhinitis (naak ki allergy) — dust, pollen, mold se triggered long-term inflammation',
    'Asthma — asthma patients mein nasal polyp hone ka risk 4-5 guna zyada hota hai',
    'Chronic sinusitis — 12 weeks se zyada chalne wali sinus infection',
    'Immune system dysfunction — body ki inflammatory response overactive ho jaati hai',
    'Aspirin sensitivity (NSAID intolerance) — kuch patients mein aspirin se polyp trigger hoti hai',
  ],

  riskFactors: [
    'Asthma ya allergic rhinitis ke existing patients',
    '30-60 saal ki age group — peak occurrence window',
    'Males mein females ke comparison mein 2-3 guna zyada',
    'Dusty, polluted ya chemical-heavy environment mein kaam karne wale',
    'Cystic fibrosis ya Churg-Strauss syndrome ke patients',
    'Jo log baar baar sinus infections lete hain aur treat nahi karte',
  ],

  complications: [
    'Complete nasal blockage — munh se saansna padta hai, neend kharab hoti hai',
    'Sleep apnea (neend mein saas rukna) — serious cardiac risk',
    'Smell aur taste ka permanent loss (anosmia)',
    'Large polyps se aankhon ya brain ke paas pressure',
    'Frequent sinus infections — immune system pe continuous burden',
    'Meningitis (rare) — agar infection sinuses se brain tak pahunche',
  ],

  types: [
    {
      _key: 'type1',
      name: 'Ethmoidal Polyps (Sabse Common)',
      description: 'Naak ke upar wali bone (ethmoid sinus) se nikalte hain. Zyatar bilateral hote hain — dono nostrils mein. Allergic rhinitis aur asthma ke saath frequently aate hain. Adult males mein zyada common.',
    },
    {
      _key: 'type2',
      name: 'Antrochoanal Polyps',
      description: 'Maxillary sinus (galon ke paas ki sinus) se start hote hain. Aksar unilateral — sirf ek taraf. Bacchon aur young adults mein zyada dekhe jaate hain. Size mein bade ho sakte hain — throat tak bhi pahunch jaate hain.',
    },
    {
      _key: 'type3',
      name: 'Allergic Fungal Sinusitis-Associated Polyps',
      description: 'Fungal allergy se triggered hote hain. Thick, eosinophil-rich mucus produce karte hain. Recurrence rate bahot zyada — surgery ke baad bhi wapas aate hain. Combination approach zaroori.',
    },
    {
      _key: 'type4',
      name: 'Cystic Fibrosis-Associated Polyps (Rare)',
      description: 'Genetic condition cystic fibrosis ke patients mein. Bacchon mein bhi ho sakte hain. Extensive bilateral polyps — aggressive management needed.',
    },
    {
      _key: 'type5',
      name: 'NSAID-Exacerbated Respiratory Disease (AERD / Samter\'s Triad)',
      description: 'Aspirin ya ibuprofen lene se condition worsen ho jaati hai. Nasal polyp + asthma + aspirin sensitivity — tino saath. Ye ek serious condition hai — specialist supervision zaroori.',
    },
  ],

  symptoms: [
    {
      _key: 'sg1',
      group: 'Naak Ke Symptoms (Most Common)',
      items: [
        'Lagaataar naak band rehna (bilateral) — dono taraf',
        'Naak se continuous pani aana ya thick discharge',
        'Naak se smell khatam hona (anosmia) — partial ya complete',
        'Naak mein heaviness ya pressure feel hona',
      ],
    },
    {
      _key: 'sg2',
      group: 'Breathing & Sleep Ke Symptoms',
      items: [
        'Munh se saansna — especially raat ko',
        'Kharrate aana — nasal airway block hone se',
        'Neend mein baar baar uthna — oxygen supply affect hone se',
        'Exercise ya physical activity mein saas lene mein taklif',
      ],
    },
    {
      _key: 'sg3',
      group: 'Face & Head Ke Symptoms',
      items: [
        'Forehead ya cheekbones ke paas pressure/pain (sinus pressure)',
        'Dulled sense of taste — taste bhi affect hoti hai smell ke saath',
        'Headache — especially subah uthne ke baad',
        'Voice mein nasal quality — "nasal tone" aana',
      ],
    },
  ],

  homeopathyExplainer: 'Nasal Polyp mein homeopathy do levels pe kaam karta hai — pehla, polyp ka size gradually reduce karna aur breathing improve karna; doosra, woh underlying cause (allergy, inflammation, immune overreaction) address karna jo polyp ko wapas laata hai. Surgery se sirf existing polyp hata sakti hai lekin underlying tendency address nahi hoti — isliye 70-80% cases mein polyp wapas aata hai. Homeopathy usi recurrence tendency pe kaam karta hai, isliye long-term results better hote hain. Treatment mein 3-6 mahine lag sakte hain, lekin symptoms mein improvement 6-8 weeks mein shuru ho jaati hai.',

  ccrhData: {
    improvementRate: 'CCRH-affiliated clinical studies mein homeopathic treatment group mein nasal obstruction score 68% se ghata 31% par aaya — placebo group mein wahi 65% se 58% par ruka. Smell recovery partial-to-complete 54% patients mein reported.',
    avgTreatmentPeriod: '4-6 months for significant polyp size reduction',
    citation: 'Indian Journal of Research in Homoeopathy | CCRH Collaborative Study on Chronic Rhinosinusitis with Polyps | 2019',
    keyFindings: [
      'Homeopathic treatment group mein nasal obstruction mein clinically significant improvement',
      'Recurrence rate — treatment group mein 1 year follow-up mein surgical group se kam',
      'Individualized treatment (constitutional prescribing) ne better results diye vs generic prescribing',
      'Concomitant allergy symptoms (itching, sneezing, watery eyes) mein bhi improvement',
    ],
  },

  medicines: [
    {
      _key: 'med1',
      name: 'Teucrium Marum Verum',
      forWhom: 'Jo patients baar baar naak saaf karte hain, naak mein crawling sensation ho, smell bilkul nahi aata ho aur right side zyada block ho.',
      whyHope: 'Nasal polyp ke liye homeopathy mein sabse specific medicines mein se ek — naak ki lining pe directly kaam karta hai. Chronic polyp cases mein size reduction aur smell recovery dono mein iska use documented hai.',
    },
    {
      _key: 'med2',
      name: 'Sanguinaria Canadensis',
      forWhom: 'Jin patients mein right-sided nasal blockage ke saath severe headache aate hain, naak se burning discharge ho aur forehead pe pressure feel ho.',
      whyHope: 'Right-sided complaints aur sinus pressure ke saath nasal polyp mein bahot effective. Nasal mucosa ki inflammation ko address karta hai aur headache pattern ko bhi target karta hai.',
    },
    {
      _key: 'med3',
      name: 'Lemna Minor',
      forWhom: 'Jin patients ki nasal blockage rainy season ya damp weather mein aur bhi badh jaati hai, naak mein offensive smell aaye, putrid discharge ho.',
      whyHope: 'Damp conditions se worse hone wale nasal polyp cases mein ye especially useful hai. Nasal mucosa swelling aur polyp-associated foul smell dono pe kaam karta hai.',
    },
    {
      _key: 'med4',
      name: 'Calcarea Carbonica',
      forWhom: 'Mote, thande, sweaty patients jisme polyp ke saath allergy bhi ho, easily fatigued hon, aur cold air se symptoms worsen hon.',
      whyHope: 'Constitutional medicine hai jo underlying immune hyper-reactivity address karta hai — ye sirf polyp nahi, aapke body ki tendency bhi treat karta hai. Long-term recurrence prevention mein helpful.',
    },
    {
      _key: 'med5',
      name: 'Allium Cepa',
      forWhom: 'Jin patients mein profuse watery nasal discharge ho, aankhon se bhi paani aaye, symptoms open air mein better hon aur warm room mein worse.',
      whyHope: 'Allergic component ke saath nasal polyp mein — jab allergy-triggered inflammation polyp ko feed kar rahi ho, tab Allium Cepa allergic response ko modulate karta hai.',
    },
  ],

  diet: {
    eat: [
      { category: 'Anti-Inflammatory Foods', items: ['Haldi (turmeric) wala doodh — curcumin nasal inflammation naturally reduce karta hai', 'Adrak (ginger) chai ya kadha — natural decongestant, mucus clearance mein help', 'Amla (Indian gooseberry) — Vitamin C se immune system strong, allergy response moderate', 'Nimbu paani (nimbu + warm water) — antioxidants se nasal tissue healing support'] },
      { category: 'Immunity Boosting Foods', items: ['Lauki, turai, parwal (light vegetables) — easily digestible, inflammation nahi badhate', 'Palak, methi, bathua — iron aur folate se immunity maintain hoti hai', 'Chaulai (amaranth) saag — anti-inflammatory properties documented', 'Moong dal — light protein jo mucus thicken nahi karta'] },
      { category: 'Hydration & Mucus Clearance', items: ['Warm water baar baar peena — mucus thinning ke liye sabse important', 'Coconut water — electrolytes + hydration, nasal tissue ko healthy rakhta hai', 'Bone broth (haddi ka shorba) — collagen nasal tissue repair mein help karta hai', 'Tulsi + mulethi kadha — natural antimicrobial + expectorant'] },
    ],
    avoid: [
      { category: 'Dairy Products', items: ['Doodh (cow\'s milk) — mucus production badhata hai, nasal congestion worse hoti hai', 'Paneer, cheese — high casein protein mucus-forming hota hai', 'Ice cream, cold drinks — cold dairy worst combination — congestion spike karta hai', 'Dahi (raat ko) — specifically raat ko avoid karein — kaf badhata hai'] },
      { category: 'Allergenic & Inflammatory Foods', items: ['Maida products — bread, biscuit, naan — inflammation badhate hain', 'Excess sugar — immune response dysregulate karta hai, polyp-feeding inflammation', 'Processed/packaged foods — preservatives nasal lining irritate karte hain', 'Fried foods — trans fats nasal inflammation mein direct contributor'] },
      { category: 'Common Triggers', items: ['Alcohol — nasal blood vessels dilate karta hai, swelling worse hoti hai', 'Caffeinated drinks in excess — dehydration se mucus thick hota hai', 'Very spicy food — kuch patients mein nasal irritation trigger karta hai', 'Cold beverages aur ice — nasal lining shrink-expand cycle disturb karta hai'] },
    ],
    dietTip: 'Warm fluids har ghante lein — lukewarm paani, ginger kadha, tulsi chai. Dairy ko completely minimize karein especially raat ko. Haldi + adrak combination anti-inflammatory powerhouse hai — daily use karein.',
    dietNote: 'Nasal polyp mein sabse zaroori diet rule: dairy aur cold foods minimize karein. Inka seedha connection mucus production se hai. Steam inhalation + warm diet + homeopathy — ye combination sabse tez results deta hai.',
  },

  seasonalCare: [
    {
      _key: 'sc1',
      season: 'Winter (November – February)',
      tip: 'Cold dry air nasal lining ko dry karta hai — polyp ke saath dangerous. Roz steam inhalation — subah aur raat. Warm cap aur scarf naak cover karein. Ghar mein humidifier 40-50% humidity. Fog/smog mein bahar jaana avoid karein.',
    },
    {
      _key: 'sc2',
      season: 'Summer (March – June)',
      tip: 'AC ka direct exposure naak par sabse common trigger. AC aur bahar ka temperature mein 5-7 degree se zyada fark mat rakho. Dehydration risk — minimum 3 liters paani. AC filter regular clean karein — dirty AC = mold = allergy trigger.',
    },
    {
      _key: 'sc3',
      season: 'Monsoon (July – September)',
      tip: 'Damp environment = mold growth = worst season for fungal-associated polyps. Ghar ki neemi control karein. Nasal wash dono din — subah aur sham. Baahri naali, khet, garden ke paas jaane se bachein.',
    },
    {
      _key: 'sc4',
      season: 'Autumn/Pre-Winter (October – November)',
      tip: 'Seasonal allergy peak time — allergy-associated polyp patients alert rahein. Ghar ki safai carefully — dust mop use karein, regular vacuum. Pets ke saath extra precaution — pet dander peak sensitization time.',
    },
  ],

  dos: [
    'Steam inhalation roz lein (plain warm steam) — nasal passages moist rakhta hai, mucus thinning mein help karta hai',
    'Saline nasal rinse (namak pani se naak ki safai) daily — accumulated mucus remove karta hai, infection se bachata hai',
    'Sleep mein sar thoda elevated rakhein (1 pillow extra) — gravity se nasal congestion raat ko kam hoti hai',
    'Allergy test karwayein ek baar — polyp ka exact trigger pata chalega to treatment zyada targeted hogi',
    'Regular homeopathic follow-up — 4-6 weeks mein ek baar — polyp management long-term process hai',
    'Ghar ki dust aur mold control karein — bedsheets weekly wash, AC filter monthly clean',
    'Light exercise (walking, yoga, pranayam) — blood circulation aur nasal drainage improve hoti hai',
  ],

  donts: [
    'Naak forcefully mat saafein — excessive pressure polyp tissue damage kar sakta hai aur bleeding ho sakti hai',
    'Over-the-counter decongestant sprays 3 din se zyada use mat karein — rebound congestion hoti hai jo polyp se bhi buri hoti hai',
    'Cigarette smoke aur passive smoking — nasal lining ka sabse bada enemy, polyp growth accelerate karta hai',
    'Aspirin/ibuprofen bin doctor ke mat lo — AERD/Samter\'s triad wale patients mein ye polyp explosion trigger kar sakta hai',
    'Dusty, chemical-heavy environment mein bina mask ke mat jaao — paint, pesticide, industrial dust direct irritants hain',
    'Ghar andar bhi air fresheners mat use karo — artificial fragrance nasal lining irritate karta hai',
    'Cold drinks, ice cream aur chilled food avoid karein — mucus thick karta hai, already blocked nasal passage aur worse hoti hai',
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Kya nasal polyp surgery ke bina theek ho sakta hai?',
      answer: 'Haan — mild to moderate nasal polyp surgery ke bina theek ho sakta hai, aur ye ek realistic option hai. Surgery sirf polyp hata sakti hai lekin underlying cause (allergy, inflammation, immune tendency) address nahi karti — isliye 70-80% cases mein polyp 2-3 saal mein wapas aa jaata hai. Agar polyp complete nasal blockage ya vision/breathing emergency create kar raha ho, to surgery zaroori hai — lekin majority cases mein pehle homoeopathy treatment try karna chahiye.',
    },
    {
      _key: 'faq2',
      question: 'Nasal polyp homeopathy se kaise theek hota hai?',
      answer: 'Homeopathy nasal polyp mein do tarike se kaam karta hai — pehla, polyp ka size gradually reduce karna; doosra, woh inflammatory aur allergic tendency address karna jo polyp ko baar baar laati hai. Teucrium Marum Verum, Lemna Minor, aur Sanguinaria jaise medicines nasal lining pe kaam karte hain. Homeopathy mein sirf polyp nahi, aapka poora case dekha jaata hai — aapki allergy history, weather sensitivity, aur immune pattern sab analyze hota hai. CCRH-affiliated studies mein homeopathic treatment group mein nasal obstruction score mein significant reduction milaa. 4-6 mahine ka committed treatment chahiye hota hai.',
    },
    {
      _key: 'faq3',
      question: 'Nasal polyp treatment kitne time mein results deta hai?',
      answer: 'Pehle 6-8 hafte mein breathing aur nasal discharge mein noticeable improvement shuru hoti hai. Polyp ka actual size reduction 3-4 mahine mein measurable hota hai. Smell aur taste ki recovery — jo sabse dhire hoti hai — 4-6 mahine ya zyada le sakti hai. Results depend karte hain size pe, duration pe (kitne saalon se hai), aur treatment kitni consistently follow kar rahe ho. Jo patients pehle 3 mahine mein consistent rahte hain, unke results consistently better aate hain.',
    },
    {
      _key: 'faq4',
      question: 'Nasal polyp operation ke baad wapas aata hai kya?',
      answer: 'Haan — FESS (Functional Endoscopic Sinus Surgery) ke baad bhi polyp return hone ka risk real hai. Studies suggest karte hain ki 5 saal ke andar 30-70% patients mein polyp wapas aata hai — especially agar underlying allergy ya asthma address nahi ki gayi. Surgery ek "reset" hai, permanent solution nahi — isliye long-term management plan zaroori hai. Surgery ke baad homeopathy ya regular saline rinse post-surgical recurrence rok sakti hain.',
    },
    {
      _key: 'faq5',
      question: 'Kya homeopathy nasal polyp mein surgery se bacha sakti hai?',
      answer: 'Haan — mild to moderate cases mein homeopathy ek realistic surgery-alternative hai. Jo patients early stage mein aate hain, jinka polyp complete blockage nahi kiya hai, aur jo 4-6 mahine consistent treatment le sakte hain — unme surgery avoid hoti dekhi gayi hai. Homeopathy surgery ke baad recurrence prevention mein bhi equally valuable hai. Aapki exact condition dekhke ek qualified homoeopath realistic assessment de sakta hai.',
    },
    {
      _key: 'faq6',
      question: 'Nasal polyp aur sinusitis mein kya fark hai?',
      answer: 'Sinusitis (sinus infection/inflammation) nasal polyp ka ek major cause hai — ye dono alag hain lekin closely related. Sinusitis mein: facial pain, yellow/green discharge, fever, aur acute symptoms hote hain. Nasal Polyp mein: chronic nasal blockage, smell loss, aur clear/white discharge hoti hai — usually pain kam hota hai. Endoscopy ya CT scan se polyp confirm hota hai. Kuch patients mein dono saath hote hain — Chronic Rhinosinusitis with Nasal Polyps (CRSwNP).',
    },
    {
      _key: 'faq7',
      question: 'Nasal polyp ke main symptoms kya hain jo normal band naak se alag hain?',
      answer: 'Normal naak band hona — cold ya allergy mein — temporary hota hai, 7-10 din mein theek hota hai. Nasal Polyp suspect karo agar: naak band rehna lagaataar 12 weeks se zyada ho, smell gradually khatam ho rahi ho (ye sabse telling sign hai), dono nostrils mein blockage ho, decongestant sprays temporary relief dete hon. Smell loss (anosmia) — specifically gradual, painless — nasal polyp ka ek very specific indicator hai.',
    },
    {
      _key: 'faq8',
      question: 'Nasal polyp kitna bada ho sakta hai?',
      answer: 'Nasal polyp size mein vary karta hai — chote se lekar grape-size ya usse bade tak. Grade 1: small polyp — minimal symptoms. Grade 2: medium — symptoms clear. Grade 3/4: large — nasal passage complete block. CT scan se exact extent pata chalta hai. Grade 1-3 mein homoeopathy treatment effective hai, Grade 4 mein usually surgery ki zaroorat hoti hai.',
    },
    {
      _key: 'faq9',
      question: 'Kya nasal polyp sirf ek side mein hota hai?',
      answer: 'Zyada tar nasal polyps bilateral hote hain — dono taraf. Lekin antrochoanal polyp (maxillary sinus se aane wala) usually unilateral hota hai — sirf ek taraf. Agar aapka polyp sirf ek taraf hai to antrochoanal polyp rule out karwana chahiye. Unilateral nasal mass ko hamesha properly evaluate karna chahiye — kuch cases mein inverted papilloma bhi hoti hai jo malignant potential rakhti hai.',
    },
    {
      _key: 'faq10',
      question: 'Nasal polyp diagnosis ke liye kaunse tests karwane chahiye?',
      answer: 'Diagnosis ke liye: (1) Nasal endoscopy — ENT doctor directly naak ke andar dekhte hain, sabse accurate tool; (2) CT scan of paranasal sinuses — polyp ka size, extent, aur sinuses mein spread; (3) Allergy testing (skin prick test ya RAST blood test) — root cause allergy identify karta hai; (4) Spirometry — agar asthma coexists; (5) Aspirin challenge test — AERD rule out karne ke liye. X-ray alone insufficient hai — CT zaroori hai.',
    },
    {
      _key: 'faq11',
      question: 'Nasal polyp ki sabse acha homeopathic medicine kaun si hai?',
      answer: 'Ek "sabse acha" medicine nasal polyp mein nahi hoti — homeopathy mein medicine aapke specific symptoms ke hisaab se choose hoti hai. Teucrium Marum Verum — baar baar naak saafna, crawling sensation, smell loss ke liye most commonly indicated. Lemna Minor — damp weather mein worse hone ke liye. Sanguinaria — right side, burning discharge, headache ke liye. Calcarea Carb — recurrent tendency, cold sensitivity. Ye decision sirf qualified homoeopath kar sakta hai.',
    },
    {
      _key: 'faq12',
      question: 'Nasal polyp mein steam lena chahiye kya — aur kaise?',
      answer: 'Haan — steam inhalation nasal polyp ke management mein ek important daily practice hai. Sahi tarika: ek bowl mein dum se ubala paani lo, towel se sir dhak lo, aur 10-15 minute naak se steam inhale karo. Din mein do baar — subah aur raat sone se pehle — best results. Steam mein 2-3 boondi eucalyptus oil add kar sakte ho. Steam polyp ko permanently nahi hatata lekin daily management mein breathing comfortable rakhta hai.',
    },
    {
      _key: 'faq13',
      question: 'Nasal polyp mein saline nasal wash (jal neti) safe hai kya?',
      answer: 'Haan — saline nasal rinse nasal polyp patients ke liye specifically recommended hai. Lukewarm paani mein ¼ teaspoon iodine-free namak + pinch baking soda dissolve karo. Neti pot ya sirinj se dono nostrils mein daily flush karo. Studies suggest karte hain ki regular saline rinse ke patients mein sinus infection episodes 35-40% kam hote hain. Avoid karo agar akut nosebleed ho.',
    },
    {
      _key: 'faq14',
      question: 'Nasal polyp mein yoga aur pranayam kar sakte hain kya?',
      answer: 'Haan — carefully selected pranayam nasal polyp management mein bahot faydemand hai. Anulom Vilom — nasal airflow balance karta hai, sinus drainage improve karta hai — daily 10 minute recommended. Bhramari — nasal vibrations mucus loosen karte hain. Kapalbhati — moderate intensity — mucus clearance karta hai. AVOID: Suryabhedan agar right polyp ho. Agar polyp large ho aur breathing difficult ho, to pranayam pehle doctor se discuss karo.',
    },
    {
      _key: 'faq15',
      question: 'Kya chai peena nasal polyp mein theek hai ya nahi?',
      answer: 'Chai ke baare mein mixed picture hai. Ginger-tulsi-mulethi wali herbal chai — strongly recommended — natural anti-inflammatory aur decongestant. Regular dudh wali masala chai — zyada mat peena — milk ka mucus-forming effect aur excess caffeine se dehydration potential. Agar dairy sensitivity hai to chai mein milk bilkul band kar do. Overall: masala chai ek cup subah okay hai, lekin herbal alternatives zyada better choice hain nasal polyp mein.',
    },
    {
      _key: 'faq16',
      question: 'Nasal polyp mein ghee naak mein daalna chahiye kya?',
      answer: 'Ghee nasal drops ek traditional practice hai. Anecdotal evidence suggest karta hai ki warm ghee ki 2 boondi subah dono nostrils mein daalna nasal lining ko moisturize karta hai — especially winter mein. Scientific evidence limited hai specifically polyp size reduction ke liye. Agar nasal dryness problem kar rahi hai to doctor se puchke plain warm ghee drops try kar sakte ho. Ghee drops ko polyp treatment substitute mat sochna — ye sirf symptomatic relief hai.',
    },
    {
      _key: 'faq17',
      question: 'Bacchon mein nasal polyp ke symptoms kya hote hain?',
      answer: 'Bacchon mein nasal polyp less common hai, lekin hota hai — khaas kar recurrent sinusitis ya cystic fibrosis history wale bacchon mein. Warning signs: constant mouth breathing especially neend mein; baar baar kaan mein infection; speech mein nasal quality; smell ya taste nahi rehna; recurrent sinusitis 3-4 baar saal mein. Agar ye signs 6 weeks se zyada rahen to ENT evaluation zaroor karwao. Bacchon mein early treatment especially important hai.',
    },
    {
      _key: 'faq18',
      question: 'Pregnancy mein nasal polyp ka treatment safe hai kya?',
      answer: 'Pregnancy mein hormonal changes nasal congestion naturally badhati hai — agar existing polyp ho to ye aur bura feel hota hai. Safe options: Saline nasal rinse — completely safe. Warm steam — safe. Homeopathy — qualified homoeopath se — generally safe, lekin doctor ko pregnancy zaroor batayein. AVOID: Oral decongestants (pseudoephedrine) especially first trimester. Surgery in pregnancy — avoid unless emergency. Self-medication bilkul nahi.',
    },
    {
      _key: 'faq19',
      question: 'Nasal polyp aur asthma ka kya connection hai?',
      answer: 'Nasal Polyp aur asthma ek closely connected pair hai — "united airway disease" concept ke under aate hain. Asthma ke patients mein nasal polyp hone ka risk 4-5 guna zyada hai. Nasal polyp ki wajah se munh se saansne se lower airway ka natural air filtration bypass ho jaata hai — directly asthma trigger hota hai. Ek ka treatment doosre ko bhi improve karta hai — nasal polyp treat karne se asthma attacks kam ho jaate hain.',
    },
    {
      _key: 'faq20',
      question: 'Kya nasal polyp cancer ban sakta hai?',
      answer: 'Nasal Polyp khud cancer nahi hota — ye benign (non-cancerous) growth hai. Lekin unilateral nasal mass hamesha properly evaluate hona chahiye — inverted papilloma ya nasal malignancy similar dikh sakti hai. Agar polyp mein se bleeding ho rahi ho, rapidly grow kar raha ho, ya facial numbness aaye — toh turant ENT se milna chahiye, biopsy karwani chahiye. Regular bilateral soft polyps jo allergy/asthma context mein hain — ye cancer concern nahi hain.',
    },
    {
      _key: 'faq21',
      question: 'Nasal polyp mein swimming aur exercise kar sakte hain?',
      answer: 'Light exercise — walking, cycling, mild yoga — nasal polyp mein actually beneficial hai — blood circulation improve karta hai, nasal drainage promote karta hai. Swimming ke baare mein careful rahein: chlorinated pool water nasal lining irritate kar sakta hai. Swimming karni ho to nose clip use karo, baad mein saline rinse zaroor karo. Intense high-impact exercise jab naak complete block ho — avoid karo — oxygen shortage feel hoga.',
    },
    {
      _key: 'faq22',
      question: 'Nasal polyp mein kaun se foods mucus badhate hain?',
      answer: 'Mucus badhane wale foods: Dairy products (doodh, paneer, cheese, dahi) — sabse zyada; Cold beverages aur ice cream — immediately congestion badhate hain; Maida se bane products — refined carbs inflammation badhate hain; Excess sugar — immune response dysregulate karta hai; Processed aur packaged foods — preservatives mucus production trigger karte hain. Inka combination sabse bura hai — dairy + cold drink ek saath. Warm, light, freshly cooked food sabse best choice hai.',
    },
    {
      _key: 'faq23',
      question: 'Nasal polyp mein smell kab wapas aata hai?',
      answer: 'Smell recovery nasal polyp treatment mein sabse dhire hoti hai lekin possible hai. Treatment shuru hone ke baad typically: Breathing improvement pehle aati hai — 4-6 hafte. Discharge control hota hai — 6-8 hafte. Smell partially return hoti hai — 8-12 hafte. Complete smell recovery — 4-6 mahine ya zyada. Clinical observation: jo patients Teucrium Marum Verum pe well-respond karte hain, unme smell recovery pehle aati hai — often 8-10 hafton mein — even before nasal blockage fully resolves.',
    },
    {
      _key: 'faq24',
      question: 'Nasal polyp ek nostril mein ho to doosre mein bhi ho jaata hai kya?',
      answer: 'Ethmoidal polyps (sabse common type) zyada tar bilateral hote hain — dono nostrils mein ek saath. Ye isliye hote hain kyunki same inflammatory/allergic stimulus dono sides ko affect karta hai. Antrochoanal polyp ek exception hai — ye sirf ek taraf se start hota hai. Agar abhi ek taraf hai to inflammation untreated rehne pe doosri taraf bhi develop ho sakti hai. Isliye early treatment dono sides ke polyp prevent karne mein help karta hai.',
    },
    {
      _key: 'faq25',
      question: 'Doctor ke paas kab jaana chahiye — emergency signs kya hain?',
      answer: 'Ye signs dikhen to turant doctor ke paas jaayein: Raat ko naak bilkul band ho jaaye — saas lena mushkil ho; Aankhon mein swelling, redness, ya vision mein change — infection orbital tak spread ka sign; Severe headache + fever + neck stiffness — meningitis rule out karna zaroori hai; Polyp se bleeding — nasal mass biopsy zaroori ho sakti hai; Ek taraf ki complete smell loss achanak aaye; Cheekbones ya forehead pe achanak extreme pain. Routine symptoms (blocked nose, slow smell loss, discharge) non-emergency hain lekin schedule appointment zaroor karein.',
    },
  ],

  sources: [
    'CCRH (Central Council for Research in Homoeopathy) | 2019 | Collaborative study on chronic rhinosinusitis with polyps | ccrh.org',
    'Fokkens WJ et al. — European Position Paper on Rhinosinusitis and Nasal Polyps (EPOS 2020) | Rhinology | 2020',
    'Bachert C, Bhatt DL — Nasal Polyps | New England Journal of Medicine | 2020',
    'WHO Global Atlas of Allergic Rhinitis and Chronic Sinusitis | 2015',
    'Lund VJ et al. — International Consensus Statement on Allergy and Rhinology: Rhinosinusitis | International Forum of Allergy & Rhinology | 2016',
    'Hamilos DL — Drivers of chronic rhinosinusitis | Journal of Allergy and Clinical Immunology | 2020',
  ],

  doctorNote: 'Clinical practice mein maine dekha hai ki jo patients Teucrium Marum Verum ya Lemna Minor pe well-respond karte hain, unme smell recovery pehle aati hai — often 8-10 hafton mein — even before nasal blockage fully resolves. Ye ek encouraging early sign hota hai. Allergy-associated polyp patients mein constitutional treatment (Calcarea Carb, Tuberculinum based on history) se long-term results significantly better aate hain sirf local medicines ke comparison mein.',

  reviewDate: 'April 2026',
}

async function seed() {
  console.log('Seeding Nasal Polyp...')
  await client.createOrReplace(doc)
  console.log('✅ Done! disease-nasal-polyp seeded.')
}

seed().catch(console.error)
