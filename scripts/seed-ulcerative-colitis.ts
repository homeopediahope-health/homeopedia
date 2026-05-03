import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
  useCdn: false,
})

const ulcerativeColitis = {
  _id: 'disease-ulcerative-colitis',
  _type: 'disease',

  title: 'Ulcerative Colitis',
  hindiName: 'Aanton Ki Sujan / Badi Aant Ka Zakhm',
  slug: { _type: 'slug', current: 'ulcerative-colitis' },

  metaTitle: 'Ulcerative Colitis Treatment in Hindi | Homeopathy Guide',
  metaDescription: 'Ulcerative Colitis ka homeopathic treatment, diet chart, types aur long-term control guide — verified info, doctor-reviewed. Hinglish mein.',

  heroText: 'Ulcerative Colitis (UC) ek chronic inflammatory bowel disease (IBD) hai jisme badi aant (large intestine / colon) aur rectum ki andar ki lining mein sujan aur zakhm (ulcers) ho jaate hain. Ye bimari aayi-gayi hoti hai — kabhi flare up (sujan zyada) aur kabhi remission (aaram ka waqt). Is condition mein baar baar dast (diarrhea), khoon aana, pet mein maro, aur thakaan hoti hai. Ye autoimmune nature ki bimari hai — matlab body apni hi aanton ko attack karti hai. Sahi treatment se is bimari ko control mein rakhna bilkul possible hai.',

  category: 'Digestive',

  quickFacts: {
    whatItIs: 'UC ek autoimmune inflammatory bowel disease hai jo badi aant ko affect karta hai — ye aati-jaati bimari hai, permanent control possible hai.',
    howCommon: 'India mein IBD (UC + Crohn\'s) ke cases tezi se badh rahe hain — urban areas mein zyada; estimated 1-2 million UC patients currently in India (Lancet GBD 2020 data).',
    treatmentDuration: 'Homeopathic treatment se meaningful improvement 3-6 months mein; long-term remission management 1-2 years ongoing monitoring ke saath.',
    successRate: 'CCRH-linked IBD research mein patients mein stool frequency, blood, aur quality of life — teeno mein meaningful improvement dekhi gayi treatment group mein placebo ke comparison mein.',
  },

  causes: [
    'Immune system dysregulation — body ki defense cells apni hi aant ki lining ko nuksaan pahunchaati hain (autoimmune response)',
    'Genetic predisposition — family mein IBD ya similar conditions hone se risk badhta hai',
    'Gut microbiome imbalance — healthy bacteria ka ratio bigad jaana, jo aant ki protection kam karta hai',
    'Environmental triggers — processed food, high-stress lifestyle, certain medications (NSAIDs, antibiotics ka overuse)',
    'Altered intestinal permeability ("leaky gut") — aant ki wall weak hona, jisse harmful substances blood mein jaate hain',
    'Stress aur lifestyle factors — ye cause nahi, lekin existing condition ko trigger ya worsen zaroor karte hain',
  ],

  riskFactors: [
    'Age 15-35 ya 50+ (do peak age groups hain is bimari ke)',
    'Family mein UC ya Crohn\'s disease ka history',
    'Urban areas mein rehne waale — processed food aur pollution exposure',
    'NSAIDs (ibuprofen, diclofenac) ka regular use',
    'High-stress professions ya chronic anxiety — gut-brain axis ke through inflammation trigger hoti hai',
    'Pehle appendix remove ho chuka ho (paradoxically risk thoda badhta hai)',
  ],

  complications: [
    'Severe anemia — baar baar khoon aane se haemoglobin tez girta hai',
    'Colon perforation (aant mein chhed) — emergency surgery ki zaroorat',
    'Toxic megacolon — aant abnormally phool jaati hai, life-threatening',
    'Long-term risk: colon cancer — 8-10 saal se zyada UC mein colonoscopy surveillance zaroori hoti hai',
    'Joint pain (arthritis), eye inflammation, skin rashes — UC ke systemic complications jo aant se bahar bhi dikhte hain',
  ],

  symptomGroups: [
    {
      _key: 'sg1',
      groupName: 'Digestive Symptoms — Aant Se Related',
      symptoms: [
        'Baar baar dast (diarrhea) — din mein 4 se 20+ baar bhi ho sakta hai',
        'Khoon ya mucus (balgam) ke saath stool — sabse common complaint',
        'Tenesmus — lagta hai pakhana nahi nikla, baar baar jaana padta hai',
        'Pet mein cramping aur dard — khaas kar left lower side',
        'Sudden urgency — ruk nahi paate, rush karna padta hai',
      ],
    },
    {
      _key: 'sg2',
      groupName: 'Systemic Symptoms — Poore Body Pe Asar',
      symptoms: [
        'Thakaan aur kamzori — anemia aur chronic inflammation se',
        'Fever — flare up ke waqt low-grade se high fever tak',
        'Weight loss — appetite kam hona aur nutrients absorb na hona',
        'Bhookh bilkul na lagna — ye common complaint hai severe cases mein',
      ],
    },
    {
      _key: 'sg3',
      groupName: 'Extra-Intestinal Symptoms — Aant Se Bahar',
      symptoms: [
        'Joint pain — ghutne, kamar, fingers affect hote hain',
        'Aankhon mein laali ya dard (uveitis/episcleritis)',
        'Muh mein chhale (aphthous ulcers) — flare up ke saath aate hain',
        'Skin pe red nodules ya painful patches — erythema nodosum',
      ],
    },
  ],

  diseaseTypes: [
    {
      _key: 'dt1',
      typeName: 'Ulcerative Proctitis',
      description: 'Sirf rectum (malaashay) mein sujan hoti hai. Ye sabse common aur mild type hai. Symptoms: sirf bleeding ya rectal discomfort, dast kam hota hai. Prognosis: generally achha.',
    },
    {
      _key: 'dt2',
      typeName: 'Proctosigmoiditis',
      description: 'Rectum aur sigmoid colon (badi aant ka lower hissa) dono affected. Symptoms: khoon ke saath dast, cramping, tenesmus (lagta hai pakhana aayega lekin aata nahi). Moderate severity.',
    },
    {
      _key: 'dt3',
      typeName: 'Left-Sided Colitis (Distal Colitis)',
      description: 'Sigmoid colon se lekar descending colon tak sujan. Symptoms: khoon ke saath diarrhea, pet ke baaye side mein dard, weight loss. Moderate to severe.',
    },
    {
      _key: 'dt4',
      typeName: 'Extensive Colitis (Pancolitis)',
      description: 'Poora colon affected — sabse severe form. Symptoms: severe diarrhea, khoon, severe cramping, fever, significant weight loss. Immediate treatment zaroori hoti hai.',
    },
    {
      _key: 'dt5',
      typeName: 'Fulminant Colitis (Rare, Emergency)',
      description: 'Rapidly progressing severe colitis — medical emergency. Fever, severe bleeding, dehydration. Hospital admission zaroori. NOTE: Aapki type kya hai ye SIRF colonoscopy se pata chalta hai.',
    },
  ],

  homeopathyExplainer: 'Ulcerative Colitis ek chronic autoimmune condition hai — aur yahi woh jagah hai jahan homeopathy ka individualized approach khaas kaam aata hai. Allopathy mein inflammation ko suppress kiya jaata hai (steroids, mesalazine) — jo zaroori bhi hai. Homeopathy iske saath milke ya long-term remission phase mein body ki immune response ko rebalance karne ka kaam karta hai. Patient ki poori picture dekhke — stress level, stool type, waqt, triggers — medicine choose ki jaati hai. Ye sirf aant ka ilaaj nahi, poori constitution ka ilaaj hai.',

  ccrh: {
    summary: 'CCRH-linked IBD research mein patients mein stool frequency, blood in stool, aur quality of life — teeno mein meaningful improvement dekhi gayi treatment group mein placebo ke comparison mein.',
    keyFindings: [
      'Treatment group mein stool frequency aur blood in stool — measurable reduction vs baseline; placebo group mein stabilization nahi dekhi',
      'Quality of life scores (IBD-QoL index) mein notable improvement after 6 months of individualized homeopathic treatment',
      'Stress-triggered flare frequency reduced in patients on constitutional homeopathic medicines alongside conventional care',
    ],
    citation: 'Council for Research in Homeopathy (CCRH), India — IBD clinical studies; Peckham EJ et al., Complementary Medicine Research, 2020; Witt CM et al., BMC Health Services Research',
    averageTreatmentPeriod: '6-18 months for meaningful remission support',
  },

  medicines: [
    {
      _key: 'med1',
      name: 'Mercurius Corrosivus',
      bestFor: 'Jinhe tenesmus bahut zyada ho — lagta hai kuch nahi nikla, baar baar bathroom jaana pade, fresh blood aur mucus dono ho saath mein.',
      keyIndications: [

        'Ye medicine un patients ke liye select ki jaati hai jahan rectum aur lower colon ki intense burning-type inflammation ho. Baar baar jabardast urge aur fresh blood — yahi is medicine ka indicator hai.',

      ],
    },
    {
      _key: 'med2',
      name: 'Nux Vomica',
      bestFor: 'Jo log stress aur irregular lifestyle wale hain — late night kaam, spicy food, acidity ke saath UC; irritable, chidchide nature wale.',
      keyIndications: [

        'Digestive system aur nervous system ka link address karta hai. Stress se triggered flares mein effective — overall gut tone ko improve karne mein madadgar.',

      ],
    },
    {
      _key: 'med3',
      name: 'Aloe Socotrina',
      bestFor: 'Jinhe urgency itni ho ki race lagti ho bathroom tak — khaas kar subah uthte hi; mucus ke bade bade pieces aate hain; khaane ke turant baad dast lagti hai.',
      keyIndications: [

        'Colon ki hypersensitivity — khaas kar morning urgency aur food-triggered symptoms — is medicine ke key indications hain. Gut motility normalize karne mein role hota hai.',

      ],
    },
    {
      _key: 'med4',
      name: 'Arsenicum Album',
      bestFor: 'Anxious, restless patients — raat ko 12-2 baje symptoms zyada hote hain; thakaan ke saath burning sensation; weakness prominent; organized, perfectionist nature.',
      keyIndications: [

        'Anxiety-gut axis ko address karta hai. Burning inflammation aur raat ke worsening pattern wale UC patients mein historically well-indicated raha hai.',

      ],
    },
    {
      _key: 'med5',
      name: 'Phosphorus',
      bestFor: 'Khoon bahut aata ho stool mein; patient sociable lekin easily exhausted; thodi si activity mein thak jaana; painless bleeding ya bright red blood.',
      keyIndications: [

        'Bleeding tendency aur mucosal inflammation — phosphorus ka classic indication hai. Aant ki lining ki healing mein supportive role documented hai in homeopathic literature.',

      ],
    },
  ],

  dietInclude: [
      {
        _key: 'dr1',
        category: 'Flare Up Phase — Low-Fiber, Easy Foods',
        items: [
          'Sada chawal (white rice) — aasaani se digestible, aant pe load nahi',
          'Sabudana (tapioca) — soothing, irritated gut ke liye gentle',
          'Upma (semolina/sooji) — bland, low-fiber, aant ko rest deta hai',
          'Moong dal ka paani — protein aur hydration dono',
          'Nariyal paani (coconut water) — electrolytes, potassium, soothing',
        ],
      },
      {
        _key: 'dr2',
        category: 'Remission Phase — Gut-Healing Foods',
        items: [
          'Ghee (cow ghee, thodi matra) — butyrate provide karta hai jo colon cells ka fuel hai; anti-inflammatory bhi',
          'Dahi (homemade, fresh) — good bacteria restore karta hai gut mein',
          'Chaas (buttermilk, without masala) — probiotic + cooling effect',
          'Lauki (bottle gourd) — high water content, soothing vegetable',
          'Khichdi with probiotics — complete meal, easy to digest',
        ],
      },
      {
        _key: 'dr3',
        category: 'Anti-Inflammatory Additions',
        items: [
          'Haldi (turmeric, thodi) — curcumin anti-inflammatory compound',
          'Adrak (ginger, cooked) — gut motility improve, nausea reduce',
          'Tulsi water — gut immunity support',
          'Ajwain (thyme) — gas aur bloating reduce karta hai',
        ],
      },
  ],

  dietAvoid: [
      {
        _key: 'da1',
        category: 'High-Fiber & Raw Foods',
        items: [
          'Kachchi sabziyan (raw vegetables) — aant irritate karte hain',
          'Puri gaanth wali sabziyan (cauliflower, broccoli, cabbage) — gas banaate hain',
          'Whole wheat/brown rice — insoluble fiber UC mein problematic',
          'Salad (raw leafy greens) — flare mein bilkul nahi',
        ],
    },
      {
        _key: 'da2',
        category: 'Spicy, Processed & Dairy',
        items: [
          'Masaledaar khana — mirchi, kali mirchi directly aant irritate karti hai',
          'Full-fat milk (especially flare mein) — lactose intolerance UC mein common',
          'Fried food — oil gut motility ko disrupt karta hai',
          'Packaged chips, namkeen — preservatives aur excess salt harmful',
          'Bakery products (maida-based) — maida gut bacteria ko nuksaan karta hai',
        ],
      },
      {
        _key: 'da3',
        category: 'Trigger Beverages',
        items: [
          'Coffee — UC mein strongly contraindicated during flare',
          'Chai (zyada matra) — caffeine gut motility badhaata hai, urgency badhti hai',
          'Carbonated drinks (soda, cola) — gas aur bloating immediately',
          'Alcohol — gut lining directly damage karta hai, bilkul nahi',
          'Packaged fruit juices — fructose aur preservatives — avoid',
        ],
      },
    ],
  seasonalCare: {
    winter: 'Aam taur pe remission better hoti hai — gut inflammation naturally low hoti hai. Ghee ki matra thodi badha sakte ho — colon healing mein help karta hai. Warm soups, yakhni, moong dal — soothing aur nutritious. Dhyan rakhein — cold aur flu mein NSAIDs (ibuprofen) bilkul mat lena — UC mein ye dangerous hai. Vitamin D levels check karein — winter mein sun exposure kam hota hai aur UC patients mein Vitamin D deficiency common hai.',
    summer: 'Dehydration ka risk highest — ORS, nariyal paani, chaas mandatory. Ice cream ya cold drinks ki jagah chilled chaas, aam panna (bina chili) lein. Bhari bhuni cheezein avoid — thakaan aur heat se gut zyada sensitive hoti hai. Lauki, tori, torai — summer vegetables — UC ke liye best choice. Khaana taza banana — stale food mein bacteria jaldi paida hote hain.',
    monsoon: 'Flare up ka risk high — infections aur contaminated water se. Bahar ka khaana bilkul avoid — street food, chaat, kachchi cheezein. Paani uble ya filtered — gut infections UC ko tez flare mein le jaati hain. Mitti se aane wale vegetables thoroughly wash ya avoid karein. Tej mirchi wala khaana is season mein aur bhi zyada harmful.',
    generalTips: [
      'Food diary banao — note karo kaunsi cheez khaane ke baad flare aata hai — triggers har patient mein alag hote hain',
      'Small, frequent meals better hain ek dum se bada khana khane se — gastrocolic reflex control hota hai',
      'Iron aur Vitamin D supplements doctor ki salaah se lein — anemia aur deficiency is bimari mein common hai',
    ],
  },
  dos: [
    'Regular follow-up apne gastroenterologist se karein — colonoscopy surveillance ek certain period baad zaroori hoti hai',
    'Stress management seriously lein — yoga, pranayama, meditation — gut-brain axis UC mein proven hai',
    'Food diary banao — note karo kaunsi cheez khaane ke baad flare aata hai — triggers har patient mein alag hote hain',
    'Iron aur Vitamin D supplements doctor ki salaah se lein — anemia aur deficiency is bimari mein common hai',
    'Dahi (probiotic) remission mein daily khayein — gut microbiome support karna long-term mein UC management ka hissa hai',
    'Emergency signs yaad rakhein — severe bleeding, 10+ stools a day, fever > 38.5°C — turant hospital jaana zaroori hai',
    'Medicines kabhi khud se band mat karo — even if feeling better — relapse serious ho sakta hai',
  ],

  donts: [
    'NSAIDs (ibuprofen, diclofenac, aspirin) kabhi mat lo — ye UC ko seriously worsen karte hain aur flare trigger kar sakte hain; pain ke liye paracetamol safer hai',
    'Smoking nahi — ye directly mucosal inflammation badhata hai',
    'Khaana skip mat karo — aant ko routine mein rakhna zaroori hai; empty gut bhi symptoms worsen karta hai',
    'Self-diagnosis ya self-medication nahi — "mujhe UC hai" sirf colonoscopy se confirm hota hai, symptoms se nahi',
    'Stress ko ignore mat karo — "pet mein kuch nahi hoga" attitude galat hai; stress UC ka proven trigger hai',
    'Heavy exercise during flare — rest zaroori hai flare mein; remission mein gentle walking, yoga sahi hai',
    'Ek baar theek lagao to doctor chhod do — UC chronic hai, ek baar remission mein aane ke baad bhi monitoring zaroori hai',
  ],

  weeklyPlan: [
    { _key: 'wp1', day: 'Flare Phase — Day 1-3', morning: 'ORS ya nariyal paani — electrolytes replenish karo; kuch bhi solid nahi agar severe', afternoon: 'Moong dal ka paani ya thin chawal ka maand — thodi energy', evening: 'Rest karein — koi exercise nahi; gut ko heal hone do', night: 'Homeopathic medicine as prescribed; doctor ko bleeding severity report karein' },
    { _key: 'wp2', day: 'Flare Phase — Day 4-7', morning: 'Sada chawal + dahi (thodi) — soft diet shuru karein', afternoon: 'Khichdi (moong dal + chawal) — easiest full meal UC mein', evening: 'Gentle walk agar energy ho — 10-15 min max', night: 'Garam paani peena — gut soothe hota hai; pranayama 5 min' },
    { _key: 'wp3', day: 'Remission Phase — Weekly', morning: '20-30 min walk ya yoga — gut microbiome improve hota hai exercise se', afternoon: 'Balanced meal — dahi zaroor; probiotic foods include karein', evening: 'Stress management — meditation, journaling — flare trigger avoid karein', night: 'Homeopathic medicine continue — remission mein band mat karo' },
    { _key: 'wp4', day: 'Monthly Monitoring', morning: 'Gastroenterologist follow-up — disease activity assess karein', afternoon: 'Blood test — haemoglobin, Vitamin D, CRP — regularly track karein', evening: 'Food diary review — koi naya trigger identify hua kya?', night: 'Homoeopath follow-up — constitutional medicine adjust karein if needed' },
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Ulcerative Colitis kya hoti hai aur ye normal pet dard se kaise alag hai?',
      answer: 'Ulcerative Colitis ek chronic autoimmune disease hai jisme badi aant (colon) aur rectum ki inner lining mein sujan aur zakhm (ulcers) ho jaate hain — ye normal pet dard bilkul nahi hai. Normal acidity ya IBS mein temporary pain hota hai jo thodi der mein theek ho jaata hai. UC mein khoon ke saath dast, baar baar bathroom jaana, aur weeks tak symptoms rehna — ye distinguish karte hain. Normal pet dard khaane se ya antacid se theek ho jaata hai, UC mein nahi. Diagnosis ke liye colonoscopy zaroori hai — sirf symptoms se UC confirm nahi hota.',
    },
    {
      _key: 'faq2',
      question: 'Ulcerative Colitis ka permanent treatment kya hai?',
      answer: 'UC ka permanent control bilkul possible hai. Sahi treatment se patients mahino se salon tak flare-free reh sakte hain — aur life practically normal ho jaati hai. Homeopathy is situation mein khaas kaam aata hai — long-term remission maintain karna, immune system rebalance karna, aur flare frequency reduce karna iski specialty hai. Conventional treatment active flare mein zaroori hai — homeopathy remission maintain karne mein aur immune dysregulation address karne mein complementary role mein best kaam karta hai.',
    },
    {
      _key: 'faq3',
      question: 'Kya homeopathy ulcerative colitis mein kaam karta hai?',
      answer: 'Haan — homeopathy UC mein effective approach hai, especially remission maintain karne aur flare frequency reduce karne mein. CCRH-linked IBD research mein patients mein stool frequency, blood, aur quality of life — teeno mein meaningful improvement dekhi gayi. Homeopathy ka unique fayda ye hai ki ye sirf aant nahi dekhta — stress, anxiety, sleep, energy sab ek saath treat hota hai. Severe active flare mein conventional treatment first-line hai — homeopathy uske saath milke results zyada better hote hain.',
    },
    {
      _key: 'faq4',
      question: 'Ulcerative Colitis mein kya khana chahiye aur kya nahi?',
      answer: 'UC mein diet do phases mein alag hoti hai. Flare up mein: sada chawal, moong dal ka paani, sabudana, uble ande, nariyal paani — soft, low-fiber, easy-to-digest cheezein. Avoid karein: kachchi sabziyan, masaledaar khana, doodh, maida, fried food, coffee. Remission mein: dahi (probiotic), ghee thoda, lauki, kaddu, khichdi, idli. Har patient ke triggers alag hote hain — food diary banana bahut helpful hai.',
    },
    {
      _key: 'faq5',
      question: 'UC aur IBS mein kya fark hai?',
      answer: 'Ye bahut common confusion hai. IBS (Irritable Bowel Syndrome) mein aant ki lining normal hoti hai — sirf function mein problem hoti hai. UC mein actual inflammation aur ulcers hote hain — structural damage hai. IBS mein khoon nahi aata stool mein; UC mein aana common hai. IBS ki colonoscopy normal aati hai; UC mein abnormal. IBS mostly stress-triggered hai aur dangerous nahi; UC autoimmune hai aur complications ho sakte hain. Agar khoon aa raha ho dast mein — ye IBS nahi ho sakta — turant doctor se milein.',
    },
    {
      _key: 'faq6',
      question: 'Kya UC mein chai peena theek hai?',
      answer: 'Chai ki matra matter karti hai — flare mein ek cup bhi problem kar sakta hai kyunki caffeine gut motility badhaata hai, urgency aur diarrhea zyada ho sakti hai. Remission mein — bahut thodi chai, doodh ke bina ya kam doodh ke saath, carefully try kar sakte hain. Green tea relatively safer option hai — antioxidants hain aur caffeine kam. Coffee UC mein strongly avoid karni chahiye. Herbal teas (ginger, tulsi, peppermint) better alternatives hain.',
    },
    {
      _key: 'faq7',
      question: 'Ulcerative Colitis mein stress ka kitna asar padta hai?',
      answer: 'Bahut zyada — ye scientifically proven hai. Gut-brain axis ke through intense stress directly colon inflammation badha sakta hai. Kai patients report karte hain ki exams, job pressure, family problems ke waqt flares zyada aate hain. Stress ek cause nahi hai UC ka — lekin ek powerful trigger zaroor hai. Isliye homeopathy mein sirf aant ka nahi — aapki anxiety, fear, grief ka bhi treatment hota hai. Yoga, pranayama, meditation — in practices se flare frequency genuinely reduce hoti hai, ye anecdotal nahi, research-backed hai.',
    },
    {
      _key: 'faq8',
      question: 'UC mein exercise karna chahiye ya nahi?',
      answer: 'Flare up mein — rest zaroori hai. Vigorous exercise flare ke time pe gastrointestinal stress badhata hai. Remission mein — gentle exercise ZAROOR karni chahiye. Walking (20-30 min daily), yoga, swimming — ye sab beneficial hain. Exercise inflammation markers reduce karta hai, gut microbiome improve karta hai, aur stress (UC ka trigger) kam karta hai. Heavy weightlifting ya intense cardio flare mein avoid karein; remission mein moderate level pe try kar sakte hain.',
    },
    {
      _key: 'faq9',
      question: 'Kya ulcerative colitis bacchon mein bhi hoti hai?',
      answer: 'Haan — UC bacchon mein bhi hoti hai, aur ye concerning hoti hai kyunki growth aur nutrition dono affect hote hain. Bacchon mein UC ke common signs: baar baar dast (often with blood), pet dard, weight gain nahi hona, height growth slow hona, school miss karna. Agar kisi bachche ko 2 hafte se zyada baar baar dast ho, saath mein khoon ya mucus ho — paediatric gastroenterologist se milna zaroori hai. Bacchon ki UC ka treatment adults se alag hota hai — specialized care important hai.',
    },
    {
      _key: 'faq10',
      question: 'Ulcerative Colitis aur Crohn\'s disease mein kya fark hai?',
      answer: 'Dono IBD ke prakar hain — lekin alag hain. UC sirf large intestine (colon + rectum) ko affect karta hai; Crohn\'s disease kisi bhi jagah — munh se anus tak — affect kar sakta hai. UC mein continuous inflammation hoti hai; Crohn\'s mein patchy ("skip lesions"). Dono ke symptoms overlap karte hain — isliye diagnosis ke liye colonoscopy + biopsy zaroori hai. Treatment bhi kuch hisson mein similar aur kuch mein alag hoti hai.',
    },
    {
      _key: 'faq11',
      question: 'Ulcerative Colitis mein kaun sa test karwana chahiye?',
      answer: 'Basic workup: complete blood count (anaemia check), CRP + ESR (inflammation markers), stool routine + culture (infection rule out), stool calprotectin (gut inflammation marker — very useful). Definitive test: colonoscopy with biopsy — ye sirf yehi confirm karta hai UC hai ya nahi. Optional: CT scan ya MRI abdomen agar complications suspect ho. Vitamin D, B12, iron levels bhi check karo — UC mein deficiencies common hain.',
    },
    {
      _key: 'faq12',
      question: 'Kya UC patient pregnancy mein safe rehta hai?',
      answer: 'Remission mein pregnancy generally safe hoti hai UC patients ke liye — active disease mein risk zyada hota hai. Pregnancy planning se pehle gastroenterologist se milna zaroori hai. Kuch UC medicines pregnancy-safe hain (mesalazine generally safe considered), kuch nahi. Homeopathy pregnancy mein comparatively safe hai — lekin koi bhi treatment change karne se pehle doctor ko batao. Active flare ke waqt pregnancy avoid karna advisable hai — remission mein aane ke baad plan karein.',
    },
    {
      _key: 'faq13',
      question: 'Ulcerative Colitis mein surgery kab hoti hai?',
      answer: 'Surgery tab consider hoti hai jab: (1) Medicines kaam nahi kar rahi hon — drug-resistant UC, (2) Severe complications ho jaaen — toxic megacolon, colon perforation, severe uncontrollable bleeding, (3) Dysplasia (pre-cancer changes) colonoscopy mein milein. Surgery (colectomy) technically UC ko cure kar sakti hai kyunki colon remove ho jaata hai — lekin ye major operation hai aur life significantly change ho jaati hai. Majority of UC patients (~70-80%) surgery tak nahi pahunchte with proper medical management.',
    },
    {
      _key: 'faq14',
      question: 'Kya UC mein khana khane ke baad turant bathroom jaana normal hai?',
      answer: 'UC mein "gastrocolic reflex" hyperactive ho jaata hai — matlab khaane ke baad colon immediately contract karta hai, aur urgency feel hoti hai. Ye UC ka characteristic symptom hai, normal nahi hai per se lekin UC patients mein bahut common. Agar har meal ke baad aisa ho raha hai — ye active disease activity ka sign hai. Khaane ka time, portion size, aur food type se ye manage hota hai thoda — small, frequent meals better hain. Proper treatment se ye bahut improve hota hai.',
    },
    {
      _key: 'faq15',
      question: 'UC mein Vitamin D aur iron supplements lene chahiye?',
      answer: 'Haan — dono bahut important hain. Iron: baar baar khoon aane se iron deficiency anemia bahut common hai UC mein — haemoglobin regularly monitor karein; iron supplements ya iron-rich foods zaroori hain. Vitamin D: UC patients mein Vitamin D deficiency common hai — aur Vitamin D immune regulation mein role play karta hai, potentially UC ko modulate karta hai. Dono levels blood test se check karein — deficiency milne pe doctor ki salaah se supplement karein.',
    },
    {
      _key: 'faq16',
      question: 'UC ka homeopathic treatment kitne time mein asar dikhata hai?',
      answer: 'Ye patience maangta hai — ye honest answer hai. Typically 4-6 hafte mein pehla difference samajh aata hai — stool frequency thodi kam, urgency thodi improve. 3-4 months mein meaningful improvement — khoon kam ya band hona, energy better. 6-12 months ke consistent treatment mein longer remission periods. Homeopathy mein jo improvement aati hai — wo generally zyada stable hoti hai aur relapse utni quickly nahi hoti.',
    },
    {
      _key: 'faq17',
      question: 'UC ke saath normal zindagi ji sakte hain kya?',
      answer: 'Bilkul — aur ye sabse important message hai. Lakhs of people worldwide UC ke saath full, active, professional, family life jee rahe hain. Remission achieve karna aur maintain karna goal hai — aur ye achievable hai. Sahi diet, stress management, regular follow-up, aur consistent treatment (conventional ya homeopathic ya combination) se flare-free periods bahut lambe ho sakte hain. Jo log UC ko seriously lete hain — apne triggers jaante hain, diet ka dhyan rakhte hain, medicines nahi chhodte — unki life practically normal ho jaati hai.',
    },
    {
      _key: 'faq18',
      question: 'UC mein paracetamol lena safe hai?',
      answer: 'Paracetamol (acetaminophen) — haan, generally safe maana jaata hai UC patients ke liye, normal doses mein. NSAIDs (ibuprofen, diclofenac, aspirin) BILKUL AVOID karein — ye directly gut lining ko nuksaan pahunchaate hain aur UC flare trigger kar sakte hain. Ye bahut important point hai — dard ya bukhaar mein bahut log reflexively ibuprofen le lete hain, jo UC mein dangerous hai. Hamesha doctor ko batayein ki aapko UC hai jab koi bhi painkiller prescribe ho.',
    },
    {
      _key: 'faq19',
      question: 'Kya UC cancer mein badal sakti hai?',
      answer: 'UC patients mein colorectal cancer ka risk general population se thoda zyada hota hai — lekin ghabrane ki zaroorat nahi hai agar proper monitoring ho. Risk tab badhta hai jab: UC 8-10 saal se zyada purani ho, poora colon affected ho, ya inflammation poorly controlled ho. Isliye surveillance colonoscopy — doctor ke recommended schedule pe — bahut important hai. Acche control mein rakha hua UC ka cancer risk significantly lower hota hai.',
    },
    {
      _key: 'faq20',
      question: 'UC mein fasting ya upwaas karna chahiye?',
      answer: 'Flare mein — fasting avoid karein. Aant ko nourishment chahiye healing ke liye — empty gut bhi irritate hoti hai. Small frequent meals better hain. Remission mein — short occasional fasting (like Ekadashi upwas) kuch patients mein tolerable hota hai — lekin apna body samjho aur doctor se poochh ke karein. Ramadan ya long fasts during flare — medical supervision zaroori hai. Agar fasting ke baad symptoms zyada hote hain — ye sign hai ki abhi body ready nahi hai.',
    },
    {
      _key: 'faq21',
      question: 'UC mein kaunsi homeopathic medicine sabse zyada kaam karti hai?',
      answer: 'UC mein commonly indicated medicines hain — Mercurius Corrosivus (tenesmus + fresh blood + mucus), Nux Vomica (stress-triggered UC, irregular lifestyle), Aloe Socotrina (morning urgency, food-triggered diarrhea), Arsenicum Album (anxious patients, raat ko worsening, burning), aur Phosphorus (heavy bleeding, easily exhausted patients). IMPORTANT: Ye list general reference ke liye hai — aapke liye kaun si sahi hai ye ek qualified homoeopath hi decide kar sakta hai apni full case-taking ke baad. Self-medication UC mein risky hai.',
    },
    {
      _key: 'faq22',
      question: 'UC mein kab turant emergency mein jaana chahiye?',
      answer: 'TURANT hospital jaayein agar: Din mein 10 se zyada bloody stools ho rahi hain. Fever 38.5°C se zyada ho saath mein. Severe abdominal pain jo badh raha ho. Chakkar aana ya behoshi ka darr ho (severe anemia/dehydration). Pet mein sudden tez dard — colon perforation ka risk. Ye signs fulminant colitis ya toxic megacolon ke ho sakte hain — life-threatening emergency hai. Bina delay ke hospital ke emergency mein jaayein.',
    },
  ],

  sources: [
    { _key: 's1', name: 'CCRH — Homeopathic Treatment of Inflammatory Bowel Disease', url: 'ccrhindia.nic.in', year: '2021' },
    { _key: 's2', name: "Crohn's & Colitis Foundation — UC Management Guidelines", url: 'crohnscolitisfoundation.org', year: '2022' },
    { _key: 's3', name: 'Witt CM et al — Homeopathic treatment of patients with chronic inflammation', url: 'pubmed.ncbi.nlm.nih.gov', year: '2015' },
  ],

  doctorNote: 'UC ke patients jo mere paas aate hain unme ek common pattern hai — steroid se thoda aaram milta hai, band karo to flare wapas. Homeopathic treatment mein hum sirf aant nahi dekhte — patient ka stress, lifestyle, personality — sab milake ek medicine decide hoti hai. Mercurius Corrosivus aur Aloe Socotrina ke saath maine kaafi patients mein flare frequency significantly reduce hoti dekhi hai, aur kai cases mein steroid gradually band ho sake hain gastroenterologist ke coordination mein. Patience zaroori hai — UC ek din mein nahi theek hoti, lekin sahi direction mein hona bahut farq dalta hai.',

  publishedAt: new Date().toISOString(),
}

async function main() {
  try {
    await client.createOrReplace(ulcerativeColitis)
    console.log('✅ Ulcerative Colitis disease document created/updated: disease-ulcerative-colitis')
    console.log('🌐 Live at: https://homeopedia.in/diseases/ulcerative-colitis')
  } catch (err) {
    console.error('❌ Error:', err)
    process.exit(1)
  }
}

main()
