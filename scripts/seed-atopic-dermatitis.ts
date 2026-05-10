import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-atopic-dermatitis',
  _type: 'disease',
  title: 'Atopic Dermatitis',
  hindiName: 'Khujli-Sujan Rog / Eczema',
  slug: { _type: 'slug', current: 'atopic-dermatitis' },
  category: 'Skin',
  publishedAt: '2026-05-10T00:00:00.000Z',
  metaTitle: 'Atopic Dermatitis – Eczema Homeopathy Treatment',
  metaDescription: 'Atopic Dermatitis (Eczema) ke causes, types, symptoms, diet aur homeopathic treatment – simple Hinglish mein. Verified info, doctor-reviewed.',

  heroText: 'Atopic Dermatitis – jise aap log eczema ke naam se bhi jaante hain – ek chronic skin condition hai jisme skin baar baar dry, red, aur bahut zyada itchy ho jaati hai. Ye bimari immune system ki overreaction ki wajah se hoti hai, jab body bina kisi asli threat ke hi skin mein inflammation shuru kar deti hai. India mein ye bacchon mein sabse common chronic skin disease hai, lekin adults ko bhi hoti hai. Sahi treatment aur lifestyle se is par kaafi had tak control paaya ja sakta hai.',

  quickFacts: {
    whatItIs: 'Chronic immune-mediated skin condition – baar baar dry, red, aur itchy skin; bacchon mein sabse common chronic skin disease',
    howCommon: 'India mein 2-10% bacche aur 1-3% adults affected; urban areas mein rural se zyada cases',
    treatmentDuration: 'Acute flare: 4-6 hafte mein control | Constitutional homeopathic treatment: 6-12 mahine consistent follow-up',
    successRate: 'Consistent 6-12 month treatment se SCORAD (eczema severity score) mein significant reduction; flare frequency aur intensity dono ghatti hai',
  },

  causes: [
    'Immune System Dysfunction – Body ke immune cells (Th2 pathway) abnormally activate hote hain aur skin mein unnecessary inflammation create karte hain',
    'Skin Barrier Defect – Filaggrin gene mutation ki wajah se skin ka protective layer kamzor hota hai; allergens aur irritants easily andar ghus jaate hain',
    'Genetic Inheritance – Agar parents mein se kisi ko eczema, asthma, ya allergic rhinitis hai to bacche mein risk 50-80% tak badh jaata hai',
    'Environmental Triggers – Dust mites, pet dander, pollen, mold, detergents, synthetic fabrics, extreme temperature – ye sab flare-up karte hain',
    'Gut-Skin Axis – Gut microbiome imbalance eczema ki severity badhata hai, especially early childhood mein',
    'Stress & Hormonal Changes – Mental stress cortisol badhata hai jo inflammation worse karta hai; hormonal changes bhi flare cause karte hain',
  ],

  riskFactors: [
    'Family history mein eczema, asthma, ya hay fever (atopic triad)',
    'Shehri areas mein rehne wale bacche – pollution aur hygiene hypothesis',
    'Early antibiotic exposure – microbiome disturb hota hai',
    'Jo log chemical-heavy occupations mein hain – nurses, hairdressers, cleaners',
    'Mothers jo pregnancy mein high-stress mein thin',
    'India mein hard water use, harsh soap aur desi sabun ka zyada use',
  ],

  complications: [
    'Skin Infections – Khujlane se skin break hoti hai; bacteria (Staph aureus), fungal ya viral infections andar ghus jaate hain',
    'Sleep Deprivation – Chronic itching raat mein neend kharab karti hai; bacchon mein growth aur adults mein mental health affect hoti hai',
    'Psychological Impact – Chronic eczema se anxiety, depression, aur social isolation ka risk; especially visible areas pe hone par',
    'Atopic March – Untreated infant eczema aage chalkar asthma aur allergic rhinitis mein convert ho sakta hai',
  ],

  types: [
    {
      _key: 'type1',
      name: 'Infantile Eczema (Shishu Eczema)',
      description: '0 se 2 saal ke bacchon mein cheeks, scalp, aur limbs pe red, weeping rashes hote hain. Bahut zyada itching se baccha baar baar rota hai, neend nahi aati. Aksar 2-3 saal ki age mein apne aap better ho jaata hai.',
    },
    {
      _key: 'type2',
      name: 'Childhood Eczema (Bachpan Ka Eczema)',
      description: '2 se 12 saal mein elbow ke andar, ghutne ke peeche, neck pe dry, scaly patches hote hain. Skin mota aur rough ho jaata hai (lichenification). School-going age mein concentration aur sleep dono affect hoti hain.',
    },
    {
      _key: 'type3',
      name: 'Adult Eczema (Bado Ka Eczema)',
      description: '12+ saal ke baad hands, neck, face, aur eyelids pe zyada hota hai. Occupational exposure (chemicals, detergent) se worse hota hai. Stress ek bada trigger hota hai adults mein – flare-ups ka pattern samajhna zaroori hai.',
    },
    {
      _key: 'type4',
      name: 'Nummular Eczema',
      description: 'Coin jaise round patches skin pe ban jaate hain. Legs, arms, torso pe zyada hota hai. Bahut dry skin wale logon mein zyada common hai. Bacterial infection aksar is type ko trigger ya worsen karta hai.',
    },
    {
      _key: 'type5',
      name: 'Dyshidrotic Eczema',
      description: 'Haathon aur pairon ki ungliyon ke side mein chhote, fluid-filled blisters hote hain. Intense itching aur burning hoti hai. Garmi ya stress se flare-up hota hai. Is type mein homeopathy Rhus Tox se particularly help milti hai.',
    },
    {
      _key: 'type6',
      name: 'Seborrhoeic Eczema',
      description: 'Scalp, naak ke side, eyebrows pe oily, yellowish flaky skin hoti hai. Dandruff se related hota hai. Yeast (Malassezia) is mein role karta hai. Baar baar aane wali dandruff aur itchy scalp is type ki pehli nishaani hoti hai.',
    },
  ],

  symptoms: [
    {
      _key: 'sym1',
      category: 'Skin Pe Dikhne Wale Signs (Jo Dikhte Hain)',
      items: [
        'Intense redness (erythema) – patches pe',
        'Dry, flaky, ya scaly skin – especially elbows, knees, neck pe',
        'Skin mota, rough, leathery ho jaana (lichenification – chronic cases mein)',
        'Chhote fluid-filled blisters jo phoot ke weep karte hain (acute phase)',
        'Skin pe scratch karne ke marks / dark patches (post-inflammatory hyperpigmentation)',
      ],
    },
    {
      _key: 'sym2',
      category: 'Feeling Ke Lakshan (Jo Mehsoos Hote Hain)',
      items: [
        'Intense itching (pruritus) – raat ko aur zyada badh jaati hai',
        'Burning ya stinging sensation patches pe',
        'Skin tight ya stretchy feel hona',
        'Raat ko neend na aana itching ki wajah se',
        'Flare-up ke dauran overall discomfort aur irritability',
      ],
    },
    {
      _key: 'sym3',
      category: 'Associated Signs (Saath Mein Jo Hota Hai)',
      items: [
        'Dennie-Morgan lines – aankhon ke neeche ek extra fold (eczema ka classic sign)',
        'Allergic shiners – aankhon ke neeche dark circles',
        'Keratosis Pilaris – arms/thighs pe rough bumps (often eczema ke saath aata hai)',
      ],
    },
  ],

  ccrhEvidence: {
    improvementRate: 'Consistent 6-12 month treatment se SCORAD index mein significant reduction; flare frequency aur severity dono mein meaningful improvement',
    avgTreatmentPeriod: '6-12 mahine constitutional treatment | Acute flare control: 4-6 hafte',
    citation: 'Indian Journal of Research in Homoeopathy – Case series on atopic skin conditions | 2021',
    keyFindings: [
      'Constitutional homeopathic treatment se flare-up frequency aur SCORAD score dono mein significant reduction',
      'Itch-sleep disruption cycle mein improvement – neend behtar hoti hai',
      'Safe for children – koi steroid nahi, long-term side effects practically nil',
    ],
  },

  homeopathyBenefits: [
    'Baar baar aane wale flare-ups ki frequency aur severity dono mein waqt ke saath meaningful reduction – sirf suppress nahi karta, root pe kaam karta hai',
    'Itch-sleep disruption cycle todne mein helpful – neend behtar hoti hai jo life quality dramatically improve karta hai',
    'Bacchon ke liye safe – koi steroid nahi, long-term side effects practically nil',
    'Skin ke saath digestive sensitivity, allergies, aur stress bhi address hoti hai – whole constitution treat hoti hai',
    'Adults mein occupational eczema ya stress-triggered flares pe bhi kaam karta hai',
  ],

  homeopathyLimitations: [
    'Results mein time lagta hai – 6-12 mahine consistent treatment ke baad improvement aata hai; quick fix nahi hai',
    'Severe infected eczema ya very high fever mein conventional treatment pehle zaroori hai',
    'Steroid cream achanak band nahi karna – doctor ki guidance mein gradually taper karna chahiye',
  ],

  medicines: [
    {
      _key: 'med1',
      name: 'Graphites',
      bestFor: 'Jinke skin se thick, honey-like sticky discharge aati hai, skin bahut rough aur cracked hai (kaan ke peeche, haath ki ungliyon mein), aur saath mein constipation bhi rehti hai.',
      keyIndications: [
        'Sticky honey-like discharge – skin cracks behind ears, hands, fingers',
        'Overweight tendency – constipation ke saath skin problem',
        'Rough, thick, leathery skin – moisture bilkul nahi rehti',
      ],
    },
    {
      _key: 'med2',
      name: 'Sulphur',
      bestFor: 'Jinhe raat mein bahut intense itching hoti hai, nahaane ya garam paani se itching aur badh jaati hai, aur jinki skin mein baar baar suppression ho chuki ho (steroid creams se).',
      keyIndications: [
        'Intense itching – garam paani se worse, raat ko worst',
        'Chronic suppressed eczema – steroid creams se baar baar dabaya gaya ho',
        'Skin dry ya burning – generally unhealthy looking',
      ],
    },
    {
      _key: 'med3',
      name: 'Mezereum',
      bestFor: 'Jinke scalp aur face pe thick crusts ban jaate hain, crust ke neeche pus ya serum hota hai, aur itching warmth se worse hoti hai – especially infantile eczema mein.',
      keyIndications: [
        'Thick crusts – scalp aur face pe, neeche weeping hoti hai',
        'Intense itching – warmth se aur worse hoti hai',
        'Infantile eczema ka specific picture – bacchon mein khaas kaam aata hai',
      ],
    },
    {
      _key: 'med4',
      name: 'Arsenicum Album',
      bestFor: 'Jinki skin dry, scaly aur bahut burning karti hai, raat ko 12-2 baje worst hoti hai, saath mein anxiety aur restlessness ho, aur asthma bhi saath mein ho.',
      keyIndications: [
        'Burning itching – raat ko 12-2 baje worst, warm application se better',
        'Atopic triad – eczema + asthma + anxiety saath mein',
        'Restless, anxious patient – stress se flares trigger hote hain',
      ],
    },
    {
      _key: 'med5',
      name: 'Rhus Toxicodendron',
      bestFor: 'Jinke skin pe fluid-filled blisters (vesicles) hain, intense itching ke saath, movement se thodi rahat milti hai, aur cold mein worse hote hain – especially dyshidrotic eczema mein.',
      keyIndications: [
        'Vesicles (fluid-filled blisters) – intense itching ke saath',
        'Rest se worse, motion se better – restless patient',
        'Dyshidrotic type – haath aur pair ki ungliyon pe blisters',
      ],
    },
  ],

  dietInclude: [
    {
      _key: 'di1',
      category: 'Gut-Friendly Foods',
      emoji: '🥦',
      items: [
        'Dahi (probiotic, unsweetened) – gut microbiome balance karta hai jo directly skin inflammation pe asar dalta hai',
        'Moong dal ka paani / soup – light, anti-inflammatory; eczema patients ki gut sensitivity ko suit karta hai',
        'Lauki (bottle gourd) – cooling effect; digestion easy; skin ko andar se hydrate rakhne mein help',
        'Ghee (thodi matra mein) – anti-inflammatory fatty acids; gut lining repair karta hai',
      ],
    },
    {
      _key: 'di2',
      category: 'Anti-Inflammatory Foods',
      emoji: '🐟',
      items: [
        'Flaxseeds (alsi) – omega-3 fatty acids se bharpoor; skin barrier repair mein scientifically helpful',
        'Walnuts (akhrot) – omega-3 ka vegetarian source; skin dryness kam karta hai',
        'Amla (Indian gooseberry) – Vitamin C ka powerhouse; collagen production badhata hai jo skin barrier strengthen karta hai',
        'Haldi wala doodh (low-fat, no sugar) – curcumin anti-inflammatory; raat ko lene se itching bhi kam aur neend bhi behtar',
      ],
    },
    {
      _key: 'di3',
      category: 'Hydration & Skin Repair',
      emoji: '💧',
      items: [
        'Nariyal paani – electrolytes + hydration; skin ko andar se moist rakhta hai',
        'Kheera (cucumber) – skin hydration aur internal cooling dono',
        'Palak, methi – iron aur folate se skin healing fast hoti hai',
        'Green tea – antioxidants skin inflammation kam karte hain',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'Common Triggers',
      emoji: '❌',
      items: [
        'Cow\'s milk aur dairy products – casein protein ek common eczema trigger hai, especially bacchon mein; 2-4 week dairy-free trial helpful',
        'Eggs – albumen (egg white) protein eczema flare-up karta hai; common allergen bacchon mein',
        'Gluten (wheat, maida, suji) – kuch eczema patients mein gluten sensitivity hoti hai jo skin flares se linked hai',
      ],
    },
    {
      _key: 'da2',
      category: 'Inflammatory Foods',
      emoji: '🌶️',
      items: [
        'Processed snacks aur packaged food – preservatives, artificial colors, trans fats sab inflammation badhate hain',
        'Maida se bane products (bread, biscuits, samosa) – high glycemic index; insulin spike inflammation trigger karta hai',
        'Zyada mirch-masala aur spicy food – skin mein heat aur itching badh sakti hai, especially acute flare mein',
      ],
    },
    {
      _key: 'da3',
      category: 'Hidden Triggers',
      emoji: '⚠️',
      items: [
        'Refined sugar aur meethai – gut bacteria imbalance karte hain; yeast overgrowth promote karta hai jo skin worse karta hai',
        'Soy products – kuch patients mein soy bhi trigger hai; apni body observe karein',
        'Alcohol – skin dehydrate karta hai aur immune response disturb karta hai',
      ],
    },
  ],

  dietTip: 'Gut health aur skin health directly connected hain – gut-friendly diet (dahi, moong dal, ghee) is condition mein khaas role play karti hai. 2-4 week food diary banao – apna personal trigger pattern jaanna general advice se zyada helpful hai.',
  dietNote: 'Dairy, eggs, aur gluten sabke liye trigger nahi hote. Pehle ek cheez hatao, 3-4 hafte observe karo, phir conclusion nikalo. Random elimination se nutrition compromise ho sakti hai.',

  dos: [
    'Moisturizer din mein minimum 2 baar lagayein – specially nahaane ke 3 minute ke andar; ye skin barrier ka kaam karta hai aur itching dramatically kam karta hai',
    'Nails chhoti rakhein – khujlate waqt skin ko deep damage hone se bachata hai aur secondary infection ka risk kam karta hai',
    'Apna personal trigger diary maintain karein – kya khaya, kya pehna, mausam kaisa tha, stress level kaisa tha; pattern samajhne se flare-up rokna easy hota hai',
    '100% cotton ya bamboo fabric pehno – synthetic aur tight kapde sweat trap karte hain jo direct irritant hai',
    'Fragrance-free, hypoallergenic soap aur detergent use karein – regular soap skin ka natural pH aur oils destroy karta hai',
    'Stress management ko treatment ka hissa maano – pranayam, meditation, ya walk; cortisol kam hogi to flares bhi kam honge',
  ],

  donts: [
    'Khujlana – ye sabse zaroori rule hai; scratching se skin break hoti hai, infection hoti hai, aur itch-scratch cycle aur buri ho jaati hai; cold pack ya moisturizer better alternative hai',
    'Hot shower ya bath mat lo – hot water skin ke natural oils strip karta hai, dryness aur badhti hai aur eczema flare karta hai',
    'New products (soap, cream, perfume) bina patch test ke mat lagao – ek chhotisi jagah pe 24 ghante test karo pehle',
    'Bina doctor ki salaah ke steroids baar baar mat lagao – short-term relief dete hain lekin skin thin ho jaati hai aur long-term mein condition worse ho sakti hai',
    'Stress ignore mat karo – eczema ek psychosomatic component rakhta hai; emotional health treat karna utna hi zaroori hai jitna skin',
  ],

  seasonalCare: {
    summer: 'Sweat ek major trigger hai – light breathable cotton kapde pehno. Sunscreen use karein lekin fragrance-free formula chunein. AC mein zyada mat raho – skin aur dry hoti hai; humidifier lagao. Pool mein swimming ke baad turant fresh water se nahaao – chlorine trigger hai. Basant (spring) mein pollen se allergic eczema worse ho sakti hai – windows band rakhein peak hours mein aur outdoor activity ke baad nahaao.',
    winter: 'Sabse mushkil season – skin extreme dry hoti hai, itching worst hoti hai. Hot water se mat nahaao – lukewarm, 10-15 min bath maximum. Immediately after bath (3 min ke andar) heavy moisturizer lagao. Wool aur synthetic fabric seedhe skin pe mat pehno – cotton layer pehle. Heaters skin se moisture remove karte hain – humidifier zaroori hai.',
    monsoon: 'Humidity se fungal infections ka risk badh jaata hai – skin dry rakhna zaroori hai. Geele kapde na pehno – moisture bacteria promote karta hai. Anti-fungal dusting powder sweaty areas mein use karein. Mold se bachao – ghar mein seepage hai to address karein. Wet surfaces pe dhyan se baitho.',
  },

  faqs: [
    {
      _key: 'faq1',
      question: 'Atopic Dermatitis aur normal khujli mein kya fark hai?',
      answer: 'Atopic Dermatitis sirf aam khujli nahi hai – ye ek chronic immune-mediated skin condition hai jisme skin baar baar dry, red, aur inflamed hoti hai, aur ye pattern mahine ya saalon tak repeat hota rehta hai. Normal itching ek baar hoti hai aur thodi der mein khatam – eczema mein flare-ups aate jaate rehte hain, especially triggers ke baad. Agar khujli ke saath redness, rashes, aur raat ko worse hona ho, to eczema evaluate karna chahiye.',
    },
    {
      _key: 'faq2',
      question: 'Atopic Dermatitis (Eczema) ka permanent ilaj kya hai?',
      answer: 'Permanent control bilkul possible hai – sahi treatment, trigger avoidance, aur consistent skincare se mahino tak flare-up nahi aata. "Cure" ke bajaay goal ye rakhna chahiye ki itching nahi, skin hydrated rahe, aur quality of life normal ho. Homeopathy is disease mein deep constitutional treatment se flare-up frequency aur severity dono kam karta hai. Bacchon mein aksar age badhne ke saath condition naturally improve bhi hoti hai.',
    },
    {
      _key: 'faq3',
      question: 'Kya eczema contagious hai – kya dusron ko ho sakta hai?',
      answer: 'Nahi – Atopic Dermatitis bilkul contagious nahi hai. Ye touch se, haath milane se, ya saath rehne se nahi failta. Ye ek immune system aur genetic condition hai – bahar se kisi infection ki wajah se nahi hoti. Aksar logon mein galat dharna hoti hai ki skin pe rashes ho toh "chhoot jaayega" – eczema ke case mein aisa bilkul nahi hai.',
    },
    {
      _key: 'faq4',
      question: 'Kya eczema stress se badh sakta hai?',
      answer: 'Haan – stress atopic dermatitis ka ek proven trigger hai. Jab stress hota hai to body cortisol hormone badhata hai jo immune system ko dysregulate karta hai aur skin mein inflammation worse hoti hai. Exams, job pressure, family tension – ye sab flare-up la sakte hain. Isliye treatment mein sirf medicine nahi, stress management bhi zaroori hai. Pranayam, deep breathing, ya counseling – jo bhi aapko suit kare – ek effective part of treatment hai.',
    },
    {
      _key: 'faq5',
      question: 'Atopic Dermatitis mein kya khana chahiye aur kya nahi?',
      answer: 'Anti-inflammatory foods jaise flaxseeds, walnuts, amla, moong dal, aur nariyal paani helpful hain. Dahi (probiotic) gut health ke through skin ko better karta hai. Avoid karna chahiye: dairy (especially cow\'s milk), eggs, maida, processed snacks, refined sugar, aur zyada mirch-masala. Har patient ke triggers alag hote hain – isliye 2-4 week food diary banao aur dekhein kya khane ke baad skin worse hoti hai.',
    },
    {
      _key: 'faq6',
      question: 'Bacchon ko eczema kyon hota hai – kya ye theek ho sakta hai?',
      answer: 'Bacchon mein eczema ka main reason genetic predisposition + immature immune system hai. Agar parents ya grandparents mein eczema, asthma, ya allergies hain to risk zyada hota hai. Achi baat ye hai ki bahut se bacche 7-10 saal ki age mein apne aap better ho jaate hain – infant eczema ke 60-70% cases childhood mein resolve ho jaate hain. Homeopathy bacchon ke liye safe option hai – steroids se bachne ka natural alternative hai.',
    },
    {
      _key: 'faq7',
      question: 'Eczema raat mein zyada kyun itching karta hai?',
      answer: 'Raat mein itching zyada hone ke kai reasons hain: skin ki natural repair mechanism raat mein active hoti hai jisse blood flow badhta hai; cortisol (jo itch suppress karta hai) raat mein low hoti hai; bed sheets aur heat trigger ban sakti hai; aur distractions nahi hone se itching aur buri lagti hai. Isse tackle karne ke liye: cotton bedsheets, cool room temperature, raat ko moisturizer lagao, aur doctor se antihistamine ya homeopathic treatment discuss karein.',
    },
    {
      _key: 'faq8',
      question: 'Kya homeopathy eczema mein kaam karta hai?',
      answer: 'Haan – homeopathy Atopic Dermatitis mein ek effective complementary approach hai, especially jab treatment individualized ho. Homeopathy ka fayda ye hai ki ye sirf skin nahi, poori constitution address karta hai – aapki skin ka type, triggers, stress response, digestive health – sab milake medicine choose hoti hai. Jo logon ne consistently 6-12 month homeopathic treatment liya, unke flare-up frequency aur SCORAD score mein meaningful improvement dekhi gayi hai.',
    },
    {
      _key: 'faq9',
      question: 'Eczema ke liye best moisturizer kaun sa hai?',
      answer: 'Fragrance-free, hypoallergenic emollient creams best hain – jaise Vaseline (petroleum jelly), Cetaphil, ya doctor-prescribed emollient. Key rule: moisturizer nahaane ke 3 minute ke andar lagao jab skin abhi slightly moist ho – ye moisture lock karta hai. Din mein minimum 2 baar lagana chahiye. Fragrance wale products, alcohol-based lotions, aur "herbal" creams jinka composition pata nahi – ye avoid karo.',
    },
    {
      _key: 'faq10',
      question: 'Kya eczema mein steroid cream lagana safe hai?',
      answer: 'Steroid creams doctor ki supervision mein, short term, aur sahi jagah pe lagana safe hai – lekin baar baar aur bina guidance ke long-term use karna nahi chahiye. Long-term steroid use se skin thin hoti hai, stretch marks aa sakte hain, aur underlying condition worse ho sakti hai (rebound effect). Homeopathy ek alternative hai jo steroid dependence khatam karne mein help kar sakta hai – lekin steroids band karna gradually aur doctor ki salaah se hi karna chahiye.',
    },
    {
      _key: 'faq11',
      question: 'Eczema aur psoriasis mein kya fark hai?',
      answer: 'Dono chronic skin conditions hain lekin kaafi alag hain. Eczema mein skin itchy, dry, aur weeping hoti hai – aur typically elbows/knees ke andar hota hai. Psoriasis mein thick, silvery scaly plaques hote hain – aur elbows/knees ke upar hota hai. Eczema aksar childhood mein shuru hota hai aur allergies se linked hai; psoriasis autoimmune hai aur adults mein zyada common hai. Diagnosis ke liye dermatologist se milna zaroori hai.',
    },
    {
      _key: 'faq12',
      question: 'Kya eczema se asthma bhi ho sakta hai?',
      answer: 'Haan – isko "Atopic March" kehte hain. Infant eczema jo timely treat nahi hoti, aage chalkar allergic rhinitis aur asthma mein develop ho sakti hai – especially genetic predisposition hone pe. Ye progression automatic nahi hai, aur timely treatment is risk ko substantially kam kar sakti hai. Agar bacche ko early age mein eczema hai to doctor se poochein ki allergic march ka risk hai ki nahi.',
    },
    {
      _key: 'faq13',
      question: 'Pregnancy mein eczema handle kaise karein?',
      answer: 'Pregnancy mein eczema kuch women mein worse hoti hai (hormonal changes ki wajah se) aur kuch mein better. Steroids use karna pregnancy mein sirf doctor ki supervision mein karna chahiye. Moisturizer daily lagana safe aur zaroori hai. Homeopathy pregnancy mein relatively safe option hai – lekin qualified homoeopath ko pregnancy ke baare mein batana zaroori hai. Stress manage karna aur triggers avoid karna particularly important hai.',
    },
    {
      _key: 'faq14',
      question: 'Atopic Dermatitis ka diagnosis kaise hota hai – koi test hai?',
      answer: 'Atopic Dermatitis mainly clinical diagnosis hai – matlab doctor skin dekh ke aur history sune ke diagnose karta hai. Koi specific blood test nahi hota. Kuch cases mein doctor IgE levels check kar sakta hai – high IgE atopic conditions mein common hai. Patch test specific contact allergens identify karne ke liye hota hai. Skin biopsy rarely zaroorat padti hai – sirf jab diagnosis unclear ho.',
    },
    {
      _key: 'faq15',
      question: 'Eczema mein nahaana chahiye ya nahi – kitne der nahaana chahiye?',
      answer: 'Nahaana chahiye – lekin sahi tarike se. Roz nahaana theek hai lekin: lukewarm paani (hot water avoid), 10-15 minute se zyada nahi, gentle fragrance-free soap sirf zaroorat ki jagah pe, towel se dheere thap-thap ke dry karein (rub mat karein), aur nahaane ke 3 minute ke andar moisturizer ZAROOR lagao. Ye "soak and seal" method skin barrier maintain karne ka best tarika hai.',
    },
    {
      _key: 'faq16',
      question: 'Kya eczema diet se theek ho sakti hai?',
      answer: 'Diet se fully "cure" nahi hoti, lekin sahi diet se flare-ups significantly kam kiye ja sakte hain. Approximately 30-40% eczema patients mein food triggers hote hain – common ones hain dairy, eggs, gluten, aur soy. 2-4 week elimination diet se apne personal triggers identify kar sakte hain. Anti-inflammatory diet (omega-3 rich foods, probiotic-rich foods) eczema management mein scientifically helpful hai.',
    },
    {
      _key: 'faq17',
      question: 'Kya eczema ke liye koi gharelu upay kaam karta hai?',
      answer: 'Kuch evidence-based gharelu approaches helpful hain: Coconut oil – antimicrobial aur moisturizing; gentle virgin coconut oil eczema mein soothing hai. Oatmeal bath – colloidal oatmeal itching aur inflammation kam karta hai; lukewarm paani mein oatmeal powder daal ke 15 min bath. Aloe vera (pure, fragrance-free) – cooling aur soothing. Ye skin ko soothe karte hain lekin treatment replace nahi karte – qualified doctor se concurrent treatment zaroor lein.',
    },
    {
      _key: 'faq18',
      question: 'Eczema wale bacche ko school kaise bhejein?',
      answer: 'Kuch practical steps: teacher ko condition ke baare mein batao; school bag mein moisturizer rakhein; uniform cotton ka ho; hot aur sweaty activities se flare-up pe note karo; lunch box mein known triggers avoid karo; agar antihistamine le raha hai to drowsiness pe nazar rakhna; aur bacche ko khud samjhao ki scratching se control karna seekhna hai – positive reinforcement se behtar result milta hai.',
    },
    {
      _key: 'faq19',
      question: 'Eczema mein swimming kar sakte hain kya?',
      answer: 'Kar sakte hain, lekin precautions ke saath. Pool mein chlorine ek strong irritant hai – swimming se pehle skin pe liberal moisturizer lagao (protective barrier banata hai), turant baad fresh water se nahaao, aur immediately emollient lagao. Sea water (salt water) kuch patients mein soothing hota hai aur kuch mein worse – apni skin observe karein.',
    },
    {
      _key: 'faq20',
      question: 'Eczema adult mein suddenly kyon shuru ho sakta hai – pehle kabhi nahi tha?',
      answer: 'Adult-onset eczema possible hai – especially 20-40 age group mein. Common reasons: job change jisme chemicals ka exposure badhna (occupational eczema), significant stress, hormonal changes (thyroid, PCOS), koi new product use karna, ya prolonged antibiotic course ke baad gut microbiome disruption. Adult onset eczema mein triggers identify karna particularly important hai.',
    },
    {
      _key: 'faq21',
      question: 'Eczema ke liye kaun sa doctor dikhana chahiye – dermatologist ya homoeopath?',
      answer: 'Ye disease ki severity pe depend karta hai. Mild-moderate eczema ke liye qualified homoeopath se start karna ek good option hai – individualized treatment, no steroid, long-term improvement pe focus. Severe, infected, ya extensive eczema mein pehle dermatologist se urgent care zaroor lein – stabilize hone ke baad homeopathy concurrent mein add kar sakte hain. Dono approaches complementary hain.',
    },
    {
      _key: 'faq22',
      question: 'Kya eczema se skin cancer ka risk hai?',
      answer: 'Direct risk nahi hai – Atopic Dermatitis skin cancer ka known risk factor nahi hai. Lekin chronic scratching se skin trauma hoti hai aur prolonged steroid use se skin changes hote hain jo separately monitor karne chahiye. Agar skin pe koi unusual growth, non-healing patch, ya color change ho to dermatologist se zaroor milein. Eczema ek benign chronic condition hai – properly managed rahe to quality of life excellent ho sakti hai.',
    },
    {
      _key: 'faq23',
      question: 'Eczema aur fungal infection mein kya fark hai – kaise pata chalega?',
      answer: 'Dono aksar confuse ho jaate hain. Fark ye hai: fungal infection mein rash ka ek clear round/oval border hota hai (ring shape common), center thoda better lagta hai, aur typically warm moist areas pe hota hai. Eczema mein irregular patches hote hain, dry/scaly texture hoti hai, aur atopic sites pe hota hai (elbow inside, knees behind). Agar sure nahi hain to doctor se diagnose karna zaroori hai – dono ka treatment alag hota hai.',
    },
    {
      _key: 'faq24',
      question: 'Eczema itching ke liye turant kya karein – 5 minute mein relief kaise milegi?',
      answer: 'Jab itching unbearable ho: Cold compress (ice pack kapde mein wrap karke) – cold sensation itching ka signal temporarily block karta hai. Thick moisturizer ya petroleum jelly turant lagao. Wet wrap therapy – moisturizer lagao phir bhigoye kapde se dhako. AC ya fan se thanda rakhein room ko. Scratching se literally kuch seconds relief milti hai lekin baad mein worse hota hai – cold compress better alternative hai.',
    },
    {
      _key: 'faq25',
      question: 'Eczema aur food allergy mein kya connection hai – allergy test karwana chahiye?',
      answer: 'Connection real hai – approximately 35% bacchon ke eczema mein food allergy role karti hai (adults mein kam). Common allergens: cow\'s milk, eggs, peanuts, wheat, fish. Allergy testing (skin prick test ya IgE blood test) helpful ho sakta hai lekin perfect nahi – test positive aaye aur symptom na ho to eliminate karna zaroorat nahi. Best approach: 4 week elimination karo aur observe karo. Certified doctor ki guidance mein karna safest hai.',
    },
  ],

  sources: [
    { _key: 'src1', name: 'National Eczema Association (NEA) – Patient Education Resources', url: 'https://www.nationaleczema.org', year: '2024' },
    { _key: 'src2', name: 'Indian Journal of Dermatology – Atopic Dermatitis in India: Epidemiology and Management', url: 'https://www.e-ijd.org', year: '2022' },
    { _key: 'src3', name: 'Journal of Allergy and Clinical Immunology – Filaggrin gene mutations and atopic march', url: 'https://www.jacionline.org', year: '2019' },
    { _key: 'src4', name: 'Cochrane Review – Emollients and moisturisers for eczema', url: 'https://www.cochranelibrary.com', year: '2022' },
    { _key: 'src5', name: 'Indian Journal of Research in Homoeopathy – Case series on atopic skin conditions', url: 'https://www.ijrh.org', year: '2021' },
    { _key: 'src6', name: 'WHO – Skin Conditions Global Burden Data', url: 'https://www.who.int', year: '2023' },
  ],

  relatedDiseases: [
    'Psoriasis',
    'Urticaria (Hives)',
    'Allergic Rhinitis',
    'Asthma',
    'Seborrhoeic Dermatitis',
  ],

  selfCheck: 'Agar skin baar baar dry, red, aur raat ko intense itching kare – especially elbows/knees ke andar, haath, ya gale pe – to Atopic Dermatitis ho sakti hai. Ek qualified homoeopath ya dermatologist se jaldi milein.',
}

async function seed() {
  try {
    const result = await client.createOrReplace(doc)
    console.log('✅ Atopic Dermatitis created/updated:', result._id)
    console.log('🌐 Live at: https://homeopedia.in/diseases/atopic-dermatitis')
  } catch (err) {
    console.error('❌ Error:', err)
  }
}

seed()
