import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-scalp-psoriasis',
  _type: 'disease',
  title: 'Scalp Psoriasis',
  hindiName: 'Sar Ki Chambal / Baalon Wali Chambal',
  slug: { _type: 'slug', current: 'scalp-psoriasis' },
  category: 'Skin',
  publishedAt: '2026-05-05T00:00:00.000Z',
  metaTitle: 'Scalp Psoriasis Homeopathy Treatment | Sar Ki Chambal',
  metaDescription: 'Scalp psoriasis ka permanent homeopathic treatment, causes, types, diet chart, seasonal care aur 25+ FAQs – Homeopedia.in',

  heroText: 'Scalp psoriasis ek chronic skin condition hai jisme sir ki khaal par mothi, safed ya silver rang ki paratein (scales) jam jaati hain aur neeche ki tvacha laal aur suji hui hoti hai. Ye ek auto-immune problem hai – yaani body ki apni immune system hi skin cells ko zyada tezi se banane lagti hai, jo scale aur plaque ke roop mein nazar aata hai. Ye sar ke kisi ek hisse mein ho sakta hai ya poore sir pe phail sakta hai – kabhi kabhi mathe, kaanon ke peeche aur gardan pe bhi aa jaata hai. Ye bimari contagious nahi hai, lekin baar baar wapas aana iska sabse bada challenge hai.',

  quickFacts: {
    whatItIs: 'Sir ki tvacha par thick silver scales aur laal plaques – ek auto-immune condition, contagious nahi, treatable hai',
    howCommon: 'India mein approx 2-3% population psoriasis se affected hai; scalp sabse zyada commonly affected site hai',
    treatmentDuration: 'Mild: 4-8 hafte | Moderate-Severe: 3-6 mahine ka consistent homeopathic treatment',
    successRate: 'CCRH aur homoeopathic clinical studies mein psoriasis patients mein 3-6 month mein significant reduction in flare-up frequency reported',
  },

  causes: [
    'Immune system disorder – T-cells galti se healthy skin cells par attack karti hain jisse over-production hoti hai',
    'Genetic / Family history – agar parents ko hai to chances zyada hote hain',
    'Chronic stress aur emotional tension – scalp psoriasis ka major trigger',
    'Scalp par fungal ya bacterial infection – flare-up start kar sakti hai',
    'Harsh chemical shampoos, hair dyes ya treatments se scalp ki skin damage',
    'Kuch medicines – lithium, beta-blockers, antimalarials – psoriasis trigger ya worsen kar sakte hain',
  ],

  riskFactors: [
    'Jinhe family mein psoriasis ya eczema ka history ho',
    'Jo log high-stress jobs ya emotional trauma mein hain',
    'Winters mein – dhoop kam milti hai, skin dry rehti hai',
    'Jo log alcohol regularly lete hain',
    'Smokers – nicotine immune response bigaad deta hai',
    'Jo log baar baar scalp scratch karte hain – Koebner phenomenon se nayi jagah bhi psoriasis ban sakta hai',
  ],

  complications: [
    'Permanent ya long-term hair thinning agar follicles baar baar damage hon',
    'Secondary bacterial/fungal infection khujli aur bleeding ki wajah se',
    'Psychological impact – anxiety, depression, social withdrawal',
    'Psoriatic arthritis develop hone ka risk – joints mein dard aur sujan',
    'Self-esteem aur quality of life pe gahra asar',
  ],

  types: [
    {
      _key: 'type1',
      name: 'Mild Scalp Psoriasis (Halki Chambal)',
      description: 'Sirf chhote chhote patchy areas mein scale aur lali hoti hai. Zyada khujli nahi, baal jhadte nahi. Aksar sar ke ek hisse mein seemit rehta hai. Sahi treatment se jaldi control mein aata hai.',
    },
    {
      _key: 'type2',
      name: 'Moderate Scalp Psoriasis (Madhyam Chambal)',
      description: 'Sar ke bade hisse mein thick plaques aur silver scales hoti hain. Khujli zyada hoti hai, aur scratching se bleeding bhi ho sakti hai. Baalon ka patla hona shuru ho sakta hai.',
    },
    {
      _key: 'type3',
      name: 'Severe Scalp Psoriasis (Gambhir Chambal)',
      description: 'Pura sar dhaka hua hota hai thick scales aur inflammation se. Intense itching, pain aur dandruff jaisi heavy shedding hoti hai. Baal toot sakte hain (temporary hair loss). Neend kharab hoti hai. Face, kaan ke peeche aur gardan pe bhi phailna shuru hota hai.',
    },
    {
      _key: 'type4',
      name: 'Scalp Psoriasis with Psoriatic Arthritis',
      description: 'Skin ke saath saath joints mein bhi dard aur sujan aane lagti hai – haath, ghutne ya kamar mein. Ye ek serious combination hai jisme full systemic treatment zaroori hai.',
    },
    {
      _key: 'type5',
      name: 'Erythrodermic Scalp Psoriasis (Rare)',
      description: 'Sabse gambhir form – sar ke saath poore sharir ki tvacha laal aur peeling ho jaati hai. Taapman control bigad sakta hai. Ye medical emergency hai, turant doctor consultation zaroori.',
    },
  ],

  symptoms: [
    {
      _key: 'sym1',
      category: 'Scalp Pe Dikhne Wale Changes',
      items: [
        'Sir par laal, raised aur suji hui patches (plaques)',
        'Patches par mothi silver-white ya grey scales',
        'Scales jo baalon mein aur kaandhon par girtin hain – dandruff se zyada mothi aur chipki hoti hain',
        'Mathe, kaanon ke peeche ya gardan tak plaques ka failna',
      ],
    },
    {
      _key: 'sym2',
      category: 'Khujli aur Dard',
      items: [
        'Sar par intense khujli – raat mein zyada',
        'Scratching se bleeding aur zakhm',
        'Sar ki skin mein jalan ya burning sensation',
        'Baal kaancha karte waqt dard',
      ],
    },
    {
      _key: 'sym3',
      category: 'Baalon Par Asar',
      items: [
        'Baalon ka patla hona ya tootna (temporary)',
        'Affected areas mein baalon ki growth slow hona',
        'Baal oily ya dusty lagna despite washing',
      ],
    },
  ],

  ccrhEvidence: {
    improvementRate: '70-75% patients mein 3-6 month mein flare-up frequency aur intensity mein significant reduction',
    avgTreatmentPeriod: '3-6 months for sustained improvement in moderate-severe cases',
    citation: 'CCRH Clinical Studies on Psoriasis | Indian Journal of Dermatology | British Homeopathic Association 2023',
    keyFindings: [
      'Individualized homoeopathic treatment group mein itching score aur scaling mein significant reduction',
      'Flare-up frequency time ke saath kam hoti gayi – jo purely symptomatic treatment mein nahi hota',
      'No adverse effects – long-term use safe, unlike topical steroids jisme rebound effect hota hai',
    ],
  },

  homeopathyBenefits: [
    'Khujli aur jalan mein relief – bina steroid ke',
    'Scale formation ki speed ko slow karta hai',
    'Hair fall jo psoriasis ki wajah se ho raha ho, usmein support',
    'Stress-triggered flare-ups mein mental aur physical dono levels par kaam karta hai',
    'Side effects nahi – long-term use safe hai, steroid rebound ka koi risk nahi',
    'Immune system ko andar se regulate karta hai – sirf symptoms mask nahi karta',
  ],

  homeopathyLimitations: [
    'Results mein time lagta hai – quick fix nahi hoti, 4-8 hafte consistent treatment ke baad improvement aata hai',
    'Erythrodermic ya very severe cases mein conventional emergency care pehle zaroori hai',
    'Psoriatic arthritis ke saath aane par longer treatment course chahiye',
  ],

  medicines: [
    {
      _key: 'med1',
      name: 'Graphites',
      bestFor: 'Jin logon ke scalp par sticky, honey jaisi discharge wali thick scales hon aur skin phat rahi ho; jo log overweight aur thoda sad/lazy nature ke hon.',
      keyIndications: [
        'Sticky, honey-like discharge wali thick scales – skin crack hoti hai',
        'Skin ki over-production – patches chipchipe aur rough hote hain',
        'Overweight patients mein scalp psoriasis – sluggish metabolism ke saath',
      ],
    },
    {
      _key: 'med2',
      name: 'Arsenic Album',
      bestFor: 'Jo patients bahut anxious, restless aur perfectionist ho; jinhe raat mein 1-3 baje symptoms zyada ho; skin dry aur burning feel kare.',
      keyIndications: [
        'Raat ko 1-3 baje scalp khujli aur burning worse – restlessness ke saath',
        'Dry, scaly scalp – anxiety-driven trigger se flare-ups',
        'Perfectionist, fearful nature – stress scalp psoriasis directly trigger karta hai',
      ],
    },
    {
      _key: 'med3',
      name: 'Sulphur',
      bestFor: 'Jinhe bahut intense itching ho, garmi mein zyada symptoms bade, skin generally unhealthy lage aur jo log thoda philosophical/lazy nature ke hon.',
      keyIndications: [
        'Intense, intolerable itching – garmi aur raat mein worse hoti hai',
        'Scalp generally unhealthy – scale ki baar baar wapas aana',
        'Warm se worse – nhaane se bhi khujli temporarily badi ho jaati hai',
      ],
    },
    {
      _key: 'med4',
      name: 'Mezereum',
      bestFor: 'Jinke scalp par bahut thick crust ban jaaye, neeche pus ya serum ho, baal us area mein chipak jaayein; sardi mein symptoms worse ho.',
      keyIndications: [
        'Thick crusty scales – neeche infection ya serum discharge hoti hai',
        'Baal scales mein chipak jaate hain – matted appearance',
        'Winter mein worse – thand se scalp psoriasis aggravate hoti hai',
      ],
    },
    {
      _key: 'med5',
      name: 'Kali Arsenicosum',
      bestFor: 'Jinhe severe, intolerable itching ho jo raat ko zyada ho; jo bahut anxious aur fearful nature ke ho; skin par large scaly patches hon.',
      keyIndications: [
        'Severe intolerable itching – raat ko zyada, neend kharab hoti hai',
        'Large scaly patches – immune over-reactivity dominant feature',
        'Anxious, fearful temperament – chronic psoriasis with mental anxiety',
      ],
    },
  ],

  dietInclude: [
    {
      _key: 'di1',
      category: 'Omega-3 Rich Foods',
      emoji: '🐟',
      items: [
        'Alsi ke beej (Flaxseeds) – scalp inflammation kam karne wale omega-3 fatty acids se bharpoor',
        'Akhrot (Walnuts) – anti-inflammatory compounds jo skin barrier support karte hain',
        'Sarson ka tel (Mustard oil, cold-pressed) – omega-3 aur vitamin E dono milte hain',
      ],
    },
    {
      _key: 'di2',
      category: 'Anti-Inflammatory Vegetables',
      emoji: '🥦',
      items: [
        'Karela (Bitter gourd) – blood purification mein help karta hai, psoriasis triggers ko reduce karne mein traditional use',
        'Palak aur hara saag – folate aur antioxidants skin repair mein help karte hain',
        'Lauki (Bottle gourd) – alkaline nature body inflammation balance karne mein help karta hai',
        'Broccoli – sulforaphane content skin healing support karta hai',
      ],
    },
    {
      _key: 'di3',
      category: 'Healing Fruits & Hydration',
      emoji: '🍎',
      items: [
        'Amla (Indian Gooseberry) – vitamin C se bharpoor, immune system ko balance karta hai',
        'Papaya – papain enzyme skin detox aur repair mein helpful',
        'Naariyal paani – scalp ko andar se hydrate karta hai, inflammation reduce karne mein help',
        'Haldi wala doodh (Turmeric milk) – curcumin powerful anti-inflammatory agent hai',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'Inflammatory Foods',
      emoji: '🚫',
      items: [
        'Maida aur processed foods – blood sugar spike karte hain jo psoriasis flare-up trigger karta hai',
        'Tala hua khaana (Deep fried food) – pro-inflammatory fats immune response bigaad dete hain',
        'Fast food aur junk food – trans fats aur additives skin ko andar se nuksaan karte hain',
      ],
    },
    {
      _key: 'da2',
      category: 'Psoriasis Triggers',
      emoji: '🍺',
      items: [
        'Alcohol – psoriasis ka sabse bada dietary trigger; liver pe load daalta hai jo skin detox process rok deta hai',
        'Red meat (especially processed meats) – arachidonic acid se inflammation badhti hai',
        'Dairy products (zyada matra mein) – kuch patients mein dairy sensitivity psoriasis flare karti hai',
      ],
    },
    {
      _key: 'da3',
      category: 'Scalp-Specific Avoid List',
      emoji: '⚠️',
      items: [
        'Namak zyada (High sodium) – water retention badhata hai, inflammation worse hoti hai',
        'Caffeine zyada (Zyada chai/coffee) – skin dehydrate karti hai aur scalp dryness badhti hai',
        'Sugar aur meetha zyada – refined sugar systemic inflammation badhata hai jo psoriasis directly trigger karta hai',
      ],
    },
  ],

  dietTip: 'Anti-inflammatory diet + stress management ek powerful combination hai scalp psoriasis ke liye. Sirf khaana badlo – flare-ups ki frequency mein fark aayega 4-6 hafte mein.',
  dietNote: 'Har patient ke dietary triggers alag ho sakte hain. Ek "food diary" banao – 2 hafte kya khaya, kab flare hua – pattern samajh aayega.',

  dos: [
    'Neem ya tea tree oil based gentle shampoo use karein – scalp ko antifungal support milta hai aur pH balance rehta hai',
    'Subah ki dhoop mein 10-15 min baithen – natural vitamin D milti hai jo psoriasis mein therapeutic effect rakhti hai',
    'Baalon ko gently comb karein (wide-tooth comb) – scratching se Koebner effect hota hai jo nayi jagah psoriasis bana deta hai',
    'Roz raat ko ek glass haldi doodh piyen – curcumin andar se inflammation control karta hai',
    'Homeopathic doctor se regular follow-up karein aur symptoms ki diary rakhein – triggers identify karne mein help milti hai',
    'Raat ko coconut ya neem oil se halka massage karein – subah gentle shampoo se dhoyein',
    'Yoga aur pranayama daily karein – cortisol levels kam hote hain jo psoriasis ka proven trigger hai',
    'Vitamin D supplement doctor se poochh ke lein – especially winter mein',
  ],

  donts: [
    'Scales ko nochein ya khujao mat – bleeding, infection aur naye patches ka risk badhta hai',
    'Harsh chemical shampoos, keratin ya hair smoothening mat karo – scalp ki protective barrier destroy ho jaati hai',
    'Stress ko ignore mat karo – psoriasis aur stress ka direct link hai, stress management zaroor karo',
    'Alcohol aur smoking bilkul band karein – ye dono psoriasis ke sabse bade systemic triggers hain',
    'Baal bahut tight baandhna mat karein – traction se scalp irritation badhti hai aur psoriasis aggravate hota hai',
    'Self-medication (steroids ya OTC creams) without doctor advice mat karein – rebound effect bahut khatarnak hota hai',
    'Raat ko zyada der tak wet baalon ke saath mat soye – fungal growth ka risk badhta hai',
    'Hot oil treatment avoid karein – heat inflamed scalp ke liye irritating hoti hai',
  ],

  seasonalCare: {
    summer: 'Garmi mein dhoop se kuch patients improve feel karte hain lekin pasina psoriasis ko trigger karta hai. Subah 10-15 min dhoop lein – but zyada avoid karein. Sweat ke baad scalp ko saaf paani se rinse karein. Light breathable kapde pahnein.',
    winter: 'Scalp psoriasis ke liye sabse mushkil season. Dhoop (vitamin D) kam milti hai, heaters se scalp dry hota hai. Coconut ya olive oil se raat ko halka massage karein. Gardan aur kaan dhakein. Vitamin D supplement doctor se poochh ke lein.',
    monsoon: 'Humidity aur fungal growth ka combination scalp ke liye risky hota hai. Wet scalp fungal infection aur flare-up dono ka risk. Baal jaldi sukhaayein, wet sar pe towel zyada der tak mat rakhein. Neem water rinse hafte mein ek baar use kar sakte hain.',
  },

  faqs: [
    {
      _key: 'faq1',
      question: 'Scalp psoriasis aur dandruff mein kya fark hai?',
      answer: 'Dandruff mein scales chikni, yellowish aur oily hoti hain, aur zyada tar sirf itching hoti hai. Scalp psoriasis mein scales mothi, silvery-white aur dry hoti hain, neeche ki skin laal aur raised hoti hai, aur ye mathe ya kaanon ke peeche bhi phail sakta hai. Dandruff sirf hygiene ya fungal issue se hota hai; psoriasis ek auto-immune condition hai. Dono ka treatment bilkul alag hai – is liye sahi diagnosis zaroori hai.',
    },
    {
      _key: 'faq2',
      question: 'Kya scalp psoriasis se permanent hair loss hota hai?',
      answer: 'Zyada tar cases mein hair loss temporary hota hai. Jab inflammation aur scaling control mein aati hai, baal wapas aane lagte hain. Lekin agar bahut lambe waqt tak scalp mein severe inflammation rahe aur baar baar scratching se follicles damage hon, tab hair loss thoda zyada time le sakta hai. Timely treatment se permanent loss ka risk bahut kam ho jaata hai.',
    },
    {
      _key: 'faq3',
      question: 'Kya scalp psoriasis contagious hai – ek se doosre ko lagti hai?',
      answer: 'Bilkul nahi. Scalp psoriasis contagious nahi hai – na touch se, na baalon se, na towel share karne se. Ye ek immune system ki internal problem hai jo skin pe dikhti hai. Doosre ko nahi lagti. Haan, genetic link hota hai – agar parents mein hai to bachon mein chances hain, lekin ye transmission nahi, ye inheritance hai.',
    },
    {
      _key: 'faq4',
      question: 'Scalp psoriasis ka homeopathic treatment kitne time mein asardar hota hai?',
      answer: 'Results patient ke case ki severity, duration aur individual response par depend karte hain. Mild cases mein 4-8 hafte mein noticeable improvement aane lagta hai. Moderate se severe cases mein 3-6 mahine ka consistent treatment typically lagta hai. Homeopathy mein quick fix nahi hoti – lekin jo improvement aati hai wo sustainable hoti hai aur flare-ups ki frequency time ke saath kam hoti hai.',
    },
    {
      _key: 'faq5',
      question: 'Scalp psoriasis ke liye koi ghar par use karne wala tel sahi hai?',
      answer: 'Coconut oil scalp ko moisturize karta hai aur scaling thodi soft karta hai – gentle massage helpful hoti hai. Neem oil mein anti-inflammatory properties hain. Tea tree oil (diluted) scalp ko antifungal support deta hai. Lekin koi bhi oil psoriasis ko cure nahi karta – ye sirf symptomatic relief dete hain. Proper treatment ke saath in oils ka use karna sahi approach hai.',
    },
    {
      _key: 'faq6',
      question: 'Kya scalp psoriasis ke liye baalon ko hatana padta hai?',
      answer: 'Nahi, baal hatane ki zaroorat nahi. Psoriasis baalon ke neeche hota hai aur baal uski visibility kam kar dete hain, lekin treatment ke liye baalon ko cut karne ki zaroorat generally nahi hoti. Homeopathic treatment andar se kaam karta hai, scalp par directly lagane ki zaroorat nahi.',
    },
    {
      _key: 'faq7',
      question: 'Kya khane se scalp psoriasis trigger hota hai?',
      answer: 'Haan, kuch foods psoriasis flare-up trigger kar sakte hain. Sabse common triggers hain – alcohol, red meat, maida aur processed foods, zyada sugar aur dairy (kuch patients mein). Har patient ke triggers thode alag ho sakte hain – ek "trigger diary" banana helpful hai jisme aap note karein ki kya khaane ke baad symptoms bade. Anti-inflammatory diet overall bahut helpful hoti hai.',
    },
    {
      _key: 'faq8',
      question: 'Scalp psoriasis stress se kaise connected hai?',
      answer: 'Stress scalp psoriasis ka ek major trigger hai – ye medically well-established hai. Emotional stress ya tension body mein cortisol hormone badhata hai jo immune system ko dysregulate karta hai, aur psoriasis flare ho jaata hai. Bahut patients report karte hain ki exams, job stress ya family problems ke baad unka psoriasis bhadha. Isliye treatment mein stress management equally important hai.',
    },
    {
      _key: 'faq9',
      question: 'Kya scalp psoriasis winters mein zyada badh jaata hai?',
      answer: 'Haan, majority patients mein scalp psoriasis winter mein worse hota hai. Iski do wajahein hain – pehli, dhoop (vitamin D / UV rays) kam milti hai jo psoriasis ke liye natural therapeutic agent hai; doosri, dry aur cold air scalp ko aur zyada dry kar deti hai. Is liye winter mein extra moisturizing aur vitamin D attention zaroori hai.',
    },
    {
      _key: 'faq10',
      question: 'Kya psoriasis sirf sir par rehta hai ya body pe bhi aata hai?',
      answer: 'Scalp psoriasis kisi mein sirf sir tak seemit rehta hai, lekin kai patients mein ye body ke doosre parts pe bhi hota hai ya baad mein phailta hai – elbow, ghutne, kamar, pet ke neeche. Kareeb 25-30% scalp psoriasis patients mein eventually body ke kisi aur hisse par bhi psoriasis develop hota hai. Saath mein joints mein dard bhi ho sakta hai (psoriatic arthritis).',
    },
    {
      _key: 'faq11',
      question: 'Kya scalp psoriasis mein baalon ko dye ya colour karna safe hai?',
      answer: 'Scalp psoriasis active hone par hair dye lagana strongly avoid karna chahiye. Chemical dyes mein harsh substances (ammonia, hydrogen peroxide) hote hain jo inflamed scalp ko aur irritate karte hain aur flare-up trigger kar sakte hain. Agar psoriasis control mein hai, tab dermatologist se poochh ke hi dye karein – patch test pehle karein.',
    },
    {
      _key: 'faq12',
      question: 'Kya bachon ko bhi scalp psoriasis ho sakta hai?',
      answer: 'Haan, scalp psoriasis bachon mein bhi hota hai – yahan tak ki infants mein bhi. Bachon mein ye often throat infection (streptococcal) ke baad trigger hota hai. Bachon ke liye homeopathy ek gentle aur effective option hai kyunki isme harsh chemicals nahi hote. Parents ko sahi diagnosis ke liye qualified doctor se milna chahiye.',
    },
    {
      _key: 'faq13',
      question: 'Scalp psoriasis mein konsa shampoo use karna chahiye?',
      answer: 'Medicated shampoos jisme coal tar, salicylic acid ya ketoconazole ho, woh conventional treatment mein use hote hain – lekin ye long-term use ke liye suitable nahi aur scalp dry kar sakte hain. Herbal options mein neem-based, tea tree based ya aloe vera based gentle shampoos better hain daily use ke liye. Sulphate-free formula choose karein. Shampoo ko scalp par 2-3 minute rehne dein pehle dhone se.',
    },
    {
      _key: 'faq14',
      question: 'Kya yoga ya meditation se scalp psoriasis mein fark padta hai?',
      answer: 'Haan, research bhi support karta hai ki stress-reduction practices psoriasis management mein directly helpful hoti hain. Pranayama, anulom-vilom aur meditation cortisol levels kam karte hain – jo psoriasis ka ek known trigger hai. Patients jo regularly yoga karte hain unme flare-ups ki frequency kam hoti hai. Ye treatment ka substitute nahi – complement hai.',
    },
    {
      _key: 'faq15',
      question: 'Scalp psoriasis mein swimming ya pool mein jaana chahiye ya nahi?',
      answer: 'Swimming pool ke paani mein chlorine hoti hai jo sensitive scalp ko irritate kar sakti hai aur psoriasis flare kar sakti hai. Agar jaana ho to pehle scalp ko coconut oil se coat karein (barrier banane ke liye), swim karne ke baad turant fresh paani se achhi tarah dhoyein aur moisturize karein. Samundar ka paani (salt water) kuch patients mein actually helpful hota hai.',
    },
    {
      _key: 'faq16',
      question: 'Kya scalp psoriasis poori tarah theek ho sakti hai?',
      answer: 'Scalp psoriasis ek chronic condition hai – iska matlab ye nahi ki kabhi theek nahi hogi, lekin ye manage karne ki bimari hai. Kai patients lambe waqt tak complete remission (symptom-free period) mein rehte hain, khaaskar jab sahi treatment, diet aur lifestyle follow karein. Homeopathy ka goal sirf symptoms control karna nahi – immune system ko andar se balance karna hai taaki flare-ups ki frequency aur intensity dono kam hon.',
    },
    {
      _key: 'faq17',
      question: 'Kya scalp psoriasis ke saath keratin treatment karwa sakte hain?',
      answer: 'Active flare mein bilkul nahi. Jab psoriasis remission mein ho, tab bhi doctor ki salah zaroori hai. Keratin treatments mein formaldehyde jaise chemicals hote hain jo scalp ko damage kar sakte hain. Agar bahut zaroori ho to natural henna (pure, without chemicals) ek safer option ho sakta hai – lekin pehle patch test zaroor karein.',
    },
    {
      _key: 'faq18',
      question: 'Scalp psoriasis mein anti-dandruff cream ya lotion lagana chahiye kya?',
      answer: 'Anti-dandruff products dandruff ke liye hote hain, psoriasis ke liye nahi. Ye products scalp ko aur dry kar sakte hain aur agar psoriasis inflamed hai to irritation badh sakti hai. Scalp psoriasis ke liye specifically formulated gentle products ya doctor-prescribed treatment zaroor lein.',
    },
    {
      _key: 'faq19',
      question: 'Kya scalp psoriasis mein raat ko zyada khujli kyun hoti hai?',
      answer: 'Raat ko skin ki natural oil (sebum) production kam hoti hai aur body temperature slightly badh jaati hai, jisse inflammation ka sensation zyada feel hota hai. Saath hi, din mein kaam-kaaj mein dhyan hota hai toh khujli ignore hoti hai – raat mein silence mein zyada mahsoos hoti hai. Arsenic Album jaisi homeopathic medicines specifically raat ko worse hone wale symptoms ke liye consider ki jaati hai.',
    },
    {
      _key: 'faq20',
      question: 'Kya neem ke paani se scalp dhona faydemand hai?',
      answer: 'Haan, neem mein nimbidin aur azadirachtin jaise compounds hote hain jo anti-inflammatory aur antifungal properties rakhte hain. Neem ki pattiyaan ubaal ke thanda karke us paani se baal dhona scalp ko soothe karta hai aur secondary infections se bachata hai. Ye ek supportive home remedy hai – main treatment ka substitute nahi.',
    },
    {
      _key: 'faq21',
      question: 'Scalp psoriasis mein baalon mein tel lagana chahiye ya nahi?',
      answer: 'Gentle oiling helpful hai lekin sahi tarike se. Raat ko warm coconut oil ya neem oil se halki massage karein aur subah gentle shampoo se dhoyein. Zyada tel raat bhar chhodna band karo – ye pores block karta hai aur fungal growth ka risk badh sakta hai. Hot oil treatment bhi avoid karein – heat inflamed scalp ke liye irritating hoti hai.',
    },
    {
      _key: 'faq22',
      question: 'Agar ek bachche ko scalp psoriasis hai to kya school mein doosron ko lagega?',
      answer: 'Nahi, bilkul nahi. Scalp psoriasis contagious nahi hai – na direct contact se, na towel, comb ya topi share karne se. Doosre bacchon ko koi risk nahi hai. School jaana completely safe hai. Bacche ko sirf itching manage karne aur scratching avoid karne ke baare mein guide karein.',
    },
    {
      _key: 'faq23',
      question: 'Kya blood purification ya detox se scalp psoriasis theek hoti hai?',
      answer: '"Blood purifier" supplements ya detox drinks ek popular concept hain lekin psoriasis ek immune system disorder hai – sirf blood purification se ye theek nahi hoti. Haan, liver aur gut health support karna (jo amla, karela, haldi se hota hai) indirectly immune system ko better karta hai. Lekin koi bhi detox product psoriasis ka standalone treatment nahi hai.',
    },
    {
      _key: 'faq24',
      question: 'Kya thyroid ya diabetes hone par scalp psoriasis zyada hoti hai?',
      answer: 'Haan, ek connection hai. Thyroid disorders aur diabetes dono immune system ko affect karte hain – aur psoriasis ek immune condition hai. In dono conditions mein body mein systemic inflammation already badhi hoti hai jo psoriasis ko worse kar sakti hai. Agar aapko thyroid ya diabetes hai aur psoriasis bhi hai, to doctor ko dono conditions ek saath manage karni chahiye.',
    },
    {
      _key: 'faq25',
      question: 'Homeopathy mein scalp psoriasis ke liye sabse best medicine kaun si hai?',
      answer: 'Homeopathy mein koi "universal best medicine" nahi hoti – ye har patient ke individual symptoms, nature, triggers aur history ke hisaab se alag hoti hai. Graphites, Sulphur, Arsenic Album, Mezereum aur Kali Arsenicosum kuch commonly used medicines hain, lekin kaun si aapke liye sahi hai, ye sirf ek qualified homoeopathic doctor examine karke decide kar sakta hai. Self-medication se results nahi aate – aur kabhi kabhi galat medicine condition worse kar sakti hai.',
    },
  ],

  sources: [
    { _key: 'src1', name: 'National Psoriasis Foundation', url: 'https://www.psoriasis.org', year: '2024' },
    { _key: 'src2', name: 'American Academy of Dermatology (AAD)', url: 'https://www.aad.org', year: '2023' },
    { _key: 'src3', name: 'Indian Journal of Dermatology, Venereology and Leprology – Psoriasis in India review', url: 'https://www.ijdvl.com', year: '2022' },
    { _key: 'src4', name: 'British Homeopathic Association – Psoriasis overview', url: 'https://www.britishhomeopathic.org', year: '2023' },
    { _key: 'src5', name: 'NCBI / PubMed – Stress and Psoriasis: Pathophysiology', url: 'https://pubmed.ncbi.nlm.nih.gov', year: '2021' },
  ],

  relatedDiseases: [
    'Psoriasis',
    'Psoriatic Arthritis',
    'Eczema',
    'Dandruff',
    'Alopecia Areata',
  ],

  selfCheck: 'Agar sar par thick silver-white scales hain aur neeche laal skin hai jo dandruff se alag lage – doctor se milein. Khujli aur baal jhadna bhi saath ho to urgent hai.',
}

async function seed() {
  try {
    const result = await client.createOrReplace(doc)
    console.log('✅ Scalp Psoriasis created/updated:', result._id)
    console.log('🌐 Live at: https://homeopedia.in/diseases/scalp-psoriasis')
  } catch (err) {
    console.error('❌ Error:', err)
  }
}

seed()
