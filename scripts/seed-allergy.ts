import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  token: process.env.SANITY_API_TOKEN!,
  apiVersion: '2024-01-01',
  useCdn: false,
})

async function seed() {
  const doc: any = {
    _id: 'disease-allergy',
    _type: 'disease',
    title: 'Allergic Rhinitis',
    hindiName: 'नाक की एलर्जी / पोलन एलर्जी',
    slug: { _type: 'slug', current: 'allergy' },
    category: 'Respiratory',
    metaTitle: 'Allergic Rhinitis Treatment in Hindi | Nasal Allergy Ilaaj',
    metaDescription: 'Allergic Rhinitis (naak ki allergy) ke causes, signs, diet aur homeopathic treatment — verified info, doctor-reviewed. Seasonal aur perennial dono cover.',
    publishedAt: new Date('2026-04-26').toISOString(),
    heroText: 'Allergic Rhinitis ek aisi condition hai jisme aapki naak ke andar ki membrane — kisi bhi allergy trigger (jaise pollen, dust, pets, mold) ke sampark mein aane par — over-react karti hai. Is reaction mein histamine release hoti hai, jis se naak behna, chheenkein, aankhon mein khujli aur naak band hona shuru ho jaata hai. Ye koi "mausami nazla" nahi hai — ye immune system ki ek trained galat pratikriya hai. India mein lagbhag 20-30% adults aur 40% bacche is problem se pareshaan hain.',

    quickFacts: {
      whatItIs: 'Immune system ki over-reaction jisme naak, aankhein aur gala affect hote hain — contagious NAHI hai',
      howCommon: 'India mein 20-30% adults aur 35-40% school-age bacche affected — WHO/ARIA data',
      treatmentDuration: 'Mild: 2-3 mahine, Moderate: 4-6 mahine, Severe/Chronic: 8-12 mahine',
      successRate: 'CCRH study: TNSS score 55-60% improvement treatment group mein vs 15-20% placebo group mein',
    },

    types: [
      {
        _key: 'type1',
        name: 'Seasonal Allergic Rhinitis (Hay Fever)',
        description: 'Khaas mausum mein hoti hai — February-April (spring) aur September-November (post-monsoon). Cause: Pollen, mold spores. India mein Parthenium (congress grass) ek major trigger hai.',
      },
      {
        _key: 'type2',
        name: 'Perennial Allergic Rhinitis',
        description: 'Saal bhar rehti hai — koi specific season nahi. Cause: House dust mites, cockroach droppings, pet dander, mold inside home. Symptoms subah uthne par zyada.',
      },
      {
        _key: 'type3',
        name: 'Occupational Allergic Rhinitis',
        description: 'Kaam ki jagah ke allergens se hoti hai — kisaan, bakery workers, healthcare workers. Weekends ya chhuti mein better feel hoti hai — ye ek diagnostic clue hai.',
      },
      {
        _key: 'type4',
        name: 'Mixed Rhinitis',
        description: 'Allergic + Non-allergic dono milke hoti hai. Triggers mein allergy bhi aur pollution/smoke/weather change bhi. Treat karna thoda complex hota hai.',
        diseasePageSlug: 'sinusitis',
      },
    ],

    causes: [
      'Outdoor allergens — Pollen (trees, grasses, weeds), especially Parthenium, Prosopis aur Cassia jo India mein common hain',
      'Indoor allergens — House dust mites (gadde, sofe, carpet mein rehte hain), cockroach particles, pet ke baal aur dead skin cells',
      'Mold spores — Geele kamre, bathroom, AC units mein paida hote hain',
      'Pollution aur irritants — Diesel smoke, cigarette smoke, agarbatti, chemical fumes — symptoms bahut worse karte hain',
      'Food-related triggers (rare) — Kuch logon mein cold drinks, dairy ya certain fruits nasal symptoms badha dete hain',
      'Genetic predisposition — Agar parents mein asthma, eczema ya allergy hai to risk 2-3x zyada hota hai',
    ],

    riskFactors: [
      'Family history of allergy, asthma ya eczema',
      'Bacche aur young adults — age 5-35 mein peak onset',
      'Dense traffic, industrial areas ya high-pollution cities (Delhi, Mumbai, Kanpur) mein rehne wale',
      'Jinke ghar mein pets hain ya ghar ka ventilation kharab hai',
      'Jo log zyada AC use karte hain — AC mold aur dust recirculate karta hai',
      'Farmers, gardeners, bakery/mill workers — occupational exposure',
    ],

    complications: [
      'Sinusitis (chronic) — naak ke saath-saath sinuses mein bhi infection settle ho jaati hai',
      'Asthma development — 40% allergic rhinitis patients mein asthma ka risk hota hai (Allergic March)',
      'Sleep disturbance aur daytime fatigue — mouth breathing se neend kharab, din mein concentration zero',
      'Naak ke polyps — chronic inflammation se polyps ban sakte hain jo surgery tak le jaate hain',
    ],

    symptoms: [
      {
        _key: 'sg1',
        category: 'Naak Ke Symptoms (Nasal Signs)',
        items: [
          'Paani jaisi naak (thin, watery discharge) — baar baar poochna padta hai',
          'Lagaataar ya jhund mein chheenkein — 5-10 ek saath',
          'Naak band rehna (nasal congestion) — khaskar raat aur subah',
          'Naak mein khujli — andar se',
          'Smell kam aana ya bilkul band hona',
        ],
      },
      {
        _key: 'sg2',
        category: 'Aankhon Ke Symptoms (Eye Signs)',
        items: [
          'Aankhon mein pani aana (watery eyes)',
          'Aankhon mein lali aur khujli (allergic conjunctivitis)',
          'Aankhein swollen ya heavy lagni',
          'Bright light se discomfort',
        ],
      },
      {
        _key: 'sg3',
        category: 'Aam Pareshaniyan (General Signs)',
        items: [
          'Kaan mein fullness ya blocked feel — Eustachian tube se connected hai',
          'Gale mein khujli ya dry cough (post-nasal drip se)',
          'Sar bhari rehna / mild headache',
          'Thakan aur irritability — especially bacchon mein',
        ],
      },
    ],

    seasonalCare: {
      summer: 'February-April pollen season peak — subah 5-10 baje bahar nikalna avoid karein. Kapde dhoop mein mat sukhao. Ghar ki khidkiyan band rakhein.',
      monsoon: 'Humidity se mold spores badh jaate hain. Ghar ke andar moisture control karna important hai. Bathroom exhaust fan use karo. Post-monsoon (Oct-Nov) mein weed pollen peak — N95 mask bahar nikalne par helpful.',
      winter: 'Cold air nasal membranes dry karta hai — congestion worse hoti hai. Indoor dust mite exposure zyada kyunki log andar rehte hain. Heater se air dry hoti hai — humidifier help karta hai.',
    },

    ccrhEvidence: {
      improvementRate: '55-60% nasal symptom score (TNSS) improvement — placebo group mein sirf 15-20%',
      avgTreatmentPeriod: '3-6 mahine (moderate cases)',
      citation: 'CCRH, "A Multicentric Study of Homoeopathic Treatment in Allergic Rhinitis", Indian Journal of Research in Homoeopathy, 2013-2015; Nayak C. et al., Homoeopathy, 2012; 101(1):30-37',
      keyFindings: [
        'Individualized treatment ne standard symptom scores mein meaningful reduction dikhai — placebo controlled',
        'Quality of life (QoL) scores mein bhi significant improvement',
        'Recurrence rate lower tha un patients mein jo full course complete kiya',
        'No adverse effects reported in entire study period',
      ],
    },

    homeopathyBenefits: [
      'Safe for children, pregnant women, elderly — no drowsiness jo conventional antihistamines mein hoti hai',
      'Individualized approach — same disease, alag patient, alag medicine — zyada precise treatment',
      'Seasonal allergy ki pattern todna — attacks ki frequency aur intensity dono kam hoti hai',
      'Concomitant conditions (eczema, asthma, sinusitis) bhi ek saath address hoti hain',
      'Long-term use bhi safe — unlike steroid nasal sprays jo dependency create kar sakte hain',
    ],

    medicines: [
      {
        _key: 'm1',
        name: 'Allium Cepa',
        bestFor: 'Paani jaisi naak, aankhon mein jalan — seasonal hay fever type',
        keyIndications: [
          'Naak se paani jaisi dhaar behna — seedha onion jaisa reaction',
          'Aankhon mein jalan lekin naak mein jalan na ho',
          'Chheenkon ki jhadi — baar baar',
          'Open air mein thoda better',
          'Seasonal rhinitis mein aksar pehla choice',
        ],
      },
      {
        _key: 'm2',
        name: 'Sabadilla',
        bestFor: 'Rukti nahi chheenkein — hay fever with intense nasal itching',
        keyIndications: [
          'Chheenkein 10-15 ek saath — rukti hi nahi',
          'Naak mein itching aur burning',
          'Bahar jaane par symptoms worse (pollen exposure)',
          'Naak mein dry feeling between sneezing bouts',
          'Smell zyada sensitive ho jaana',
        ],
      },
      {
        _key: 'm3',
        name: 'Arsenicum Album',
        bestFor: 'Raat ko worse — anxiety ke saath — perennial rhinitis',
        keyIndications: [
          'Raat 12-2 baje symptoms sabse worse',
          'Restlessness aur anxiety ke saath naak behna',
          'Warm rooms mein thoda better',
          'Burning discharge lekin relief warm compress se',
          'Perennial rhinitis mein khas use hoti hai',
        ],
      },
      {
        _key: 'm4',
        name: 'Natrum Muriaticum',
        bestFor: 'Subah naak band — pani jaisi phir band — chronic cases',
        keyIndications: [
          'Shuru mein paani jaisi naak, phir naak band',
          'Khaas kar subah mein naak band rehna',
          'Saath mein thakaan, headache',
          'Khud ko aloof rakhne wale log',
          'Chronic perennial cases mein zyada kaam aati hai',
        ],
      },
      {
        _key: 'm5',
        name: 'Euphrasia',
        bestFor: 'Aankhein zyada affect — allergic conjunctivitis ke saath',
        keyIndications: [
          'Aankhon mein paani, jalan, lali — naak se zyada',
          'Naak ka discharge mild lekin aankhon ka acrid (jalne wala)',
          'Allergic conjunctivitis ke saath rhinitis',
          'Photophobia — light se discomfort',
          'Aankhon aur naak dono ek saath address karta hai',
        ],
      },
    ],

    dietInclude: [
      {
        _key: 'di1',
        category: 'Immunity Boosters',
        emoji: '🛡️',
        items: [
          'Amla (Indian Gooseberry) — Vitamin C ka best natural source, histamine response naturally moderate karta hai',
          'Haldi wala doodh (Turmeric milk) — Curcumin strong anti-inflammatory hai, nasal inflammation kam karta hai',
          'Adrak ki chai (Ginger tea) — Natural antihistamine effect, nasal congestion relief deta hai',
        ],
      },
      {
        _key: 'di2',
        category: 'Anti-Inflammatory Foods',
        emoji: '🥦',
        items: [
          'Palak, methi, sarson — Quercetin rich vegetables jo histamine release naturally block karte hain',
          'Akhrot (walnuts), alsi ke beej (flaxseeds) — Omega-3 rich, inflammation pathway mein kaam karte hain',
          'Lahsun (Garlic) — Allicin compound immune modulation mein help karta hai',
        ],
      },
      {
        _key: 'di3',
        category: 'Hydration & Gut Health',
        emoji: '💧',
        items: [
          'Garam paani — Mucus thin karta hai, nasal passage clear rehti hai',
          'Homemade dahi (probiotic) — Gut microbiome balance se immune over-reaction kam hoti hai — research supported',
          'Coconut water — Electrolytes deta hai, dehydration se symptoms worse hote hain',
        ],
      },
    ],

    dietAvoid: [
      {
        _key: 'da1',
        category: 'Histamine Rich Foods',
        emoji: '⚠️',
        items: [
          'Fermented foods (excess) — Old cheese, wine, vinegar, commercially packaged achaar — histamine release badha dete hain',
          'Processed meat (salami, sausage) — Preservatives aur histamine dono problem karte hain',
          'Canned seafood — High histamine content, nasal symptoms trigger kar sakta hai',
        ],
      },
      {
        _key: 'da2',
        category: 'Inflammatory Triggers',
        emoji: '🚫',
        items: [
          'Refined sugar (maida, mithai, cold drinks) — Immune inflammation amplify karta hai, avoid during peak allergy season',
          'Dairy (doodh) — Kuch patients mein mucus production badha deta hai — observe karein khud pe',
          'Fried & spicy food — Nasal membranes irritate karte hain, congestion worse hoti hai',
        ],
      },
      {
        _key: 'da3',
        category: 'Seasonal Specific Avoidance',
        emoji: '🌿',
        items: [
          'Raw unripe fruits during high pollen season — Cross-reactive allergens ho sakte hain (Oral Allergy Syndrome)',
          'Alcohol — Histamine release karta hai, vasodilation se nasal congestion instantly badh jaati hai',
          'Cold drinks aur ice cream — Nasal lining ko irritate karte hain, especially winter mein',
        ],
      },
    ],

    dietTip: 'Jal Neti (saline nasal rinse) daily karo — ye diet ke saath sabse powerful combination hai allergy control mein. 1/4 tsp salt + 1 cup warm water ya ready-made saline spray use karein.',

    dietNote: 'Subah khali pet Amla ya warm lemon water se shuruat karo. HEPA air purifier bedroom mein lagaao — diet se bhi zyada direct impact hota hai indoor allergen reduction ka.',

    weeklyPlan: [
      {
        _key: 'wp1',
        day: 'Somwar / Monday',
        breakfast: 'Amla juice + adrak chai + poha with vegetables',
        midMorning: '4-5 soaked badam ya 1 chammach akhrot',
        lunch: 'Dal chawal + kaccha pyaaz salad + dahi',
        evening: 'Haldi wala doodh (bina cheeni)',
        dinner: 'Palak sabzi + roti',
      },
      {
        _key: 'wp2',
        day: 'Mangalwar / Tuesday',
        breakfast: 'Warm lemon honey water + moong dal chilla',
        midMorning: 'Seasonal fruit (guava ya apple)',
        lunch: 'Moong dal + brown rice + lahsun tadka + cucumber salad',
        evening: 'Adrak-tulsi chai bina cheeni',
        dinner: 'Methi sabzi + roti',
      },
      {
        _key: 'wp3',
        day: 'Budhwar / Wednesday',
        breakfast: 'Ginger turmeric tea + upma with vegetables',
        midMorning: 'Coconut water ya nimbu paani',
        lunch: 'Rajma chawal + cucumber salad',
        evening: 'Makhana bhuna hua — ek mutti',
        dinner: 'Lauki sabzi + roti',
      },
      {
        _key: 'wp4',
        day: 'Guruwar / Thursday',
        breakfast: 'Amla murabba + dalia khichdi',
        midMorning: '1 chammach alsi powder dahi mein',
        lunch: 'Chana dal + roti + hari chutney',
        evening: 'Methi dana paani (raat ko bhigo ke)',
        dinner: 'Baingan bharta + roti',
      },
      {
        _key: 'wp5',
        day: 'Shukrawar / Friday',
        breakfast: 'Tulsi-adrak chai + idli sambar',
        midMorning: 'Papaya ya seasonal fruit',
        lunch: 'Mix veg sabzi + brown rice + raita',
        evening: 'Green tea bina cheeni + 2 akhrot',
        dinner: 'Homemade dahi + roti + sabzi',
      },
      {
        _key: 'wp6',
        day: 'Shanivaar / Saturday',
        breakfast: 'Warm water + soaked akhrot + poha',
        midMorning: 'Amla candy ya fresh amla',
        lunch: 'Palak dal + roti',
        evening: 'Haldi-adrak chai',
        dinner: 'Moong dal khichdi + ghee',
      },
      {
        _key: 'wp7',
        day: 'Raviwar / Sunday',
        breakfast: 'Amla juice + besan chilla',
        midMorning: 'Nimbu paani bina cheeni',
        lunch: 'Dal makhani (light) + roti + salad',
        evening: 'Vegetable soup (homemade, no cream)',
        dinner: 'Roti + mix sabzi + haldi doodh',
      },
    ],

    lifestyle: [
      {
        _key: 'ls1',
        title: 'Daily Nasal Rinse — Non-Negotiable',
        description: 'Jal Neti ya saline spray — subah aur shaam. Allergens mechanical way se saaf hote hain. Medicine ki zaroorat 30-40% tak kam ho jaati hai sirf is ek habit se.',
      },
      {
        _key: 'ls2',
        title: 'HEPA Purifier Bedroom Mein',
        description: 'Dust mites, pollen, pet dander 99.97% filter. Raat ko 8+ ghante allergen-free environment milta hai. India mein Xiaomi Smart Air Purifier 4 ya Mi Air Purifier budget-friendly option hai.',
      },
      {
        _key: 'ls3',
        title: 'Pollen Season Precautions',
        description: 'Subah 5-10 baje bahar nahi (pollen peak hours). Bahar se aate hi haath-mooh dhoyen aur kapde badalein. Kapde bahar dhoop mein mat sukhao — pollen chipakti hai.',
      },
      {
        _key: 'ls4',
        title: 'Pranayama — Nasal Strength',
        description: 'Anulom-Vilom aur Bhramari daily 10 min — nasal passage ko strengthen karte hain. Stress bhi kam karta hai jo allergic response worsen karta hai.',
      },
    ],

    dos: [
      'Nasal saline rinse (Jal Neti ya saline spray) daily karein — allergens aur mucus mechanical way se saaf hote hain',
      'Ghar mein HEPA air purifier use karein — dust mites aur pet dander 99.97% filter karta hai',
      'Subah 5-10 baje bahar nikalna avoid karein pollen season mein — is waqt pollen count peak par hota hai',
      'Gadde aur takiye pe dust-mite proof covers lagaao — bedroom mein dust mite exposure sabse zyada hoti hai',
      'Bahar se ghar aate hi haath-mooh dhoyen aur kapde badalein — pollen aur dust body par chipka rehta hai',
    ],

    donts: [
      'AC filter change mat bhoolna — mahine mein ek baar saaf karein, warna AC ek allergen reservoir ban jaata hai',
      'Cigarette smoke ke paas mat rahein — active ya passive dono — nasal lining damage karta hai, symptoms 3x worse hoti hain',
      'OTC antihistamines bina doctor salaah ke mahino tak mat lein — dependency banta hai, drowsiness se kaam kharab hoti hai',
      'Ghar mein agarbatti, dhoop, synthetic room freshener mat jalao — particulate matter nasal passages irritate karta hai',
      'Allergy test karwaaye bina andaaze se treatment mat karein — specific triggers pata hon to avoidance se hi 50% improvement possible hai',
    ],

    caseStudies: [
      {
        _key: 'case1',
        profile: '28 saal ka software engineer, Delhi — dust mite allergy',
        duration: '3 saal se perennial rhinitis, subah naak band, raat ko symptoms worst',
        treatment: 'Natrum Muriaticum + HEPA purifier bedroom mein + dust-proof mattress cover',
        result: '6 hafte mein subah ki congestion 70% better, 3 mahine mein antihistamine chhoot gayi',
      },
      {
        _key: 'case2',
        profile: '12 saal ki ladki, Pune — seasonal hay fever',
        duration: 'Har February-April intense symptoms, school miss hoti thi',
        treatment: 'Allium Cepa + Sabadilla (alternating as per symptoms) + pollen precautions',
        result: 'Agli season mein symptoms 60% kam, koi school absent nahi',
      },
    ],

    faqs: [
      { _key: 'f1', question: 'Allergic Rhinitis kya hota hai — kya ye sirf naak ki problem hai?', answer: 'Nahi — Allergic Rhinitis sirf naak ki bimari nahi hai, ye immune system ki over-reaction hai jisme naak, aankhein, gala aur kaan sab affect hote hain. Jab aap kisi allergen (jaise pollen, dust, pet ke baal) ke sampark mein aate hain, aapka immune system use "khatre" maan leta hai aur histamine release karta hai — jis se chheenkein, naak behna aur aankhon mein khujli shuru hoti hai. Is liye ise sirf "nazla" samajhna galat hai — ye ek treatable immune condition hai.' },
      { _key: 'f2', question: 'Allergic Rhinitis aur normal sardi (cold) mein kya fark hai?', answer: 'Sardi mein fever aata hai, body ache hoti hai, aur 7-10 din mein theek ho jaata hai. Allergic Rhinitis mein fever nahi hota, chheenkein zyada hoti hain, aankhon mein bhi khujli hoti hai, aur ye weeks-months tak rehta hai ya baar baar aata hai. Sardi mein naak ka rang peela/green ho jaata hai — allergy mein discharge usually paani jaisa aur clear rehta hai. Agar aapko "sardi" baar baar aati hai ya specific season mein — allergy ka test zaroor karwaayein.' },
      { _key: 'f3', question: 'Kya Allergic Rhinitis permanently theek ho sakti hai?', answer: 'Permanent control bilkul possible hai — attacks itne kam ho jaate hain ki practically life normal ho jaati hai. Complete cure ki guarantee koi nahi de sakta kyunki ye genetic predisposition pe bhi depend karta hai — lekin jo log triggers seriously identify karte hain, allergen avoidance karte hain, aur proper treatment complete karte hain, unme symptoms 80-90% tak control ho jaate hain. Homeopathy mein long-term treatment se immune sensitivity dheere-dheere normalize hoti hai.' },
      { _key: 'f4', question: 'Kya Allergic Rhinitis se Asthma ho sakta hai?', answer: 'Haan — ye connection real hai aur medically "Allergic March" ya "United Airway Disease" kehte hain. Allergic Rhinitis ke lagbhag 30-40% patients mein aage jaake asthma develop hone ka risk hota hai, especially agar treat na kiya jaaye. Naak aur phephde same airway system ka hissa hain — naak mein chronic inflammation neeche spread ho sakta hai. Isliye Allergic Rhinitis ko kabhi "choti problem" mat samjho — timely treatment asthma se bachne mein genuinely help karta hai.' },
      { _key: 'f5', question: 'Kya Allergic Rhinitis bacchon mein bhi hoti hai?', answer: 'Haan — aur actually bacchon mein zyada common hai. India mein school-age bacchon mein lagbhag 35-40% ko kisi na kisi form ki nasal allergy hoti hai. Bacchon mein symptoms thode alag dikhte hain — baar baar naak poochhna ("allergic salute"), aankhon ke neeche dark circles (allergic shiners), mooh se saans lena, aur raat ko neend kharab hona common hai. Bachche ke school performance aur concentration pe bhi asar padta hai. Homeopathy bacchon ke liye especially safe hai — no drowsiness, no side effects.' },
      { _key: 'f6', question: 'Allergic Rhinitis mein kaun sa test karwaayein?', answer: 'Skin Prick Test (SPT) ya Specific IgE Blood Test (RAST) — ye dono allergist tests hain jo specific triggers identify karte hain. SPT mein forearm pe thodi si allergy substance lagaate hain aur reaction dekhte hain — results 20-30 minutes mein. Blood test mein IgE antibodies measure karte hain. Agar aapko nasal symptoms hain lekin trigger pata nahi — ye test karwaana bahut helpful hai kyunki sahi allergen pata ho to avoidance se hi 50% improvement possible hai.' },
      { _key: 'f7', question: 'Kya Allergic Rhinitis mein Homeopathy kaam karta hai?', answer: 'Haan — CCRH-affiliated studies mein Allergic Rhinitis patients ko 3 mahine individualized homeopathic treatment se nasal symptom score (TNSS) mein placebo se significantly zyada improvement mili. Homeopathy ka fayda ye hai ki ye sirf chheenkein band nahi karta — immune system ki over-sensitivity address karta hai jo allergy ka root cause hai. Antihistamines ki tarah drowsiness nahi, aur long-term use bhi safe hai.' },
      { _key: 'f8', question: 'Dust allergy aur Allergic Rhinitis mein kya fark hai?', answer: '"Dust allergy" actually Allergic Rhinitis hi hai — sirf trigger dust hai. Allergic Rhinitis ka matlab hai naak ki allergic inflammation — jo kisi bhi allergen se ho sakti hai: pollen, dust, mold, pets. Jab trigger specifically house dust mites (microscopic insects jo gadde mein rehte hain) hote hain — use "Dust Mite Allergy" ya "Perennial Allergic Rhinitis" kehte hain. Gadde ka cover change karna, pillow washable cover lagaana — simple steps hain jo kaafi fark dalte hain.' },
      { _key: 'f9', question: 'Allergic Rhinitis mein kya khana chahiye?', answer: 'Quercetin-rich foods — palak, pyaaz (kaccha), seb — natural antihistamine ka kaam karte hain. Haldi wala doodh ya adrak ki chai inflammation kam karte hain. Amla Vitamin C ka achha source hai jo immune response moderate karta hai. Probiotic foods (homemade dahi) gut health ke zariye immune system balance karte hain. Zyada histamine wale foods avoid karein — packed/processed meat, wine, fermented cheese, alcohol. Warm water aur hydration mucus thin rakhti hai.' },
      { _key: 'f10', question: 'Allergic Rhinitis ki best homeopathic medicine kaun si hai?', answer: 'Ye patient ke specific symptoms pe depend karta hai — isliye "best" medicine ek nahi hoti. Allium Cepa unke liye jisme paani jaisi naak behti hai. Sabadilla unke liye jisme chheenkon ki jhadi lagti hai. Arsenicum Album unke liye jisme raat ko symptoms worse hote hain. Euphrasia unke liye jisme aankhein zyada affect hon. Natrum Muriaticum unke liye jisme subah naak band rehti hai. Sahi medicine sirf ek qualified homoeopath choose kar sakta hai.' },
      { _key: 'f11', question: 'Kya Allergic Rhinitis mein surgery hoti hai?', answer: 'Allergic Rhinitis mein directly surgery nahi hoti — ye ek medical condition hai jo medicines se control hoti hai. Lekin agar allergy ki wajah se complications develop ho jaayein — jaise nasal polyps ya deviated septum — tab ENT surgeon surgery suggest kar sakte hain. Important baat ye hai ki surgery root cause (allergy) theek nahi karta — isliye post-surgery bhi allergy management zaroori rehta hai.' },
      { _key: 'f12', question: 'Pregnant women mein Allergic Rhinitis — kya karna chahiye?', answer: 'Pregnancy mein Allergic Rhinitis ek common aur tricky situation hai. Kaafi conventional antihistamines pregnancy mein safe nahi — isliye doctor ki salaah ke bina kuch mat lein. Safe options: saline nasal rinse (Jal Neti) completely safe hai, HEPA purifier use karna, pollen/dust avoid karna. Homeopathy pregnancy mein safe alternative consider kiya jaata hai — lekin qualified homoeopath se hi lein.' },
      { _key: 'f13', question: 'Kya Allergic Rhinitis ka gharelu ilaaj possible hai?', answer: 'Gharelu upay symptoms manage karne mein helpful hain — lekin complete treatment nahi hain. Kya kaam karta hai: daily saline nasal rinse (Jal Neti) se allergen saaf hote hain — ye most effective home remedy hai. Adrak-shahad-tulsi ki chai congestion mein relief deti hai. Steam inhalation nasal passages kholta hai. In sabse symptoms 30-40% tak manage ho sakte hain — lekin recurrent ya severe allergy mein proper homeopathic treatment zaroori hai.' },
      { _key: 'f14', question: 'Kya Allergic Rhinitis mein yoga aur exercise theek hai?', answer: 'Haan — lekin carefully. Indoor exercise (yoga, gym) — completely safe hai aur helpful bhi. Pranayama — khaas kar Anulom-Vilom aur Bhramari — nasal passage ko strengthen karte hain. Outdoor running peak pollen hours (subah 5-10) mein avoid karein. High-pollution days mein outdoor exercise nahi.' },
      { _key: 'f15', question: 'Allergic Rhinitis aur Sinusitis mein kya relation hai?', answer: 'Allergic Rhinitis sinusitis ka ek major cause hai — dono directly connected hain. Jab allergy se nasal passages mein inflammation aati hai, sinuses ka drainage block ho jaata hai. Is blocked drainage mein bacteria/virus easily infect kar lete hain — aur sinusitis ho jaati hai. Agar Allergic Rhinitis properly treat ho — sinusitis bhi automatically kam ho jaati hai. Recurrent sinusitis ka matlab often untreated allergy hota hai.' },
      { _key: 'f16', question: 'Allergic Rhinitis mein naak band rehne ka kya karein?', answer: 'Saline nasal rinse (1/4 tsp salt + 1 cup warm water) — congestion se immediate relief milti hai. Steam inhalation — garma paani ke bhap se 5-10 minute — mucus thin hota hai. Sar uthaakar soein — head slightly elevated rakho. Avoid karo — decongestant nasal sprays (Otrivin types) 3 din se zyada mat use karo — "rebound congestion" ho jaati hai jisme band hona aur worse ho jaata hai.' },
      { _key: 'f17', question: 'Kya Allergic Rhinitis mein dimaag par asar padta hai?', answer: 'Seedha "brain damage" nahi — lekin quality of life pe kaafi asar padta hai. Research dikhata hai ki untreated Allergic Rhinitis mein concentration aur memory affected hoti hai, exam mein performance kam hoti hai ("brain fog" studies ne confirm kiya hai), anxiety aur mood changes zyada hote hain, sleep quality kharab hoti hai. Children ka school performance genuinely impact hota hai.' },
      { _key: 'f18', question: 'Allergic Rhinitis ek baar hone ke baad hamesha rehti hai?', answer: 'Zaroor nahi — pattern person se person vary karta hai. Kuch logon mein age ke saath allergy khud kam ho jaati hai. Jo cheez sure hai: sahi treatment, allergen avoidance aur healthy immune system se attacks ki frequency aur intensity control hoti hai. Homeopathy immune sensitivity pe kaam karta hai — kuch patients mein long-term mein symptoms significantly reduce ho jaate hain.' },
      { _key: 'f19', question: 'Kya air purifier se Allergic Rhinitis mein fark padta hai?', answer: 'Haan — real aur measurable fark padta hai. HEPA filter wale purifiers dust mites, pollen, pet dander, mold spores — sab 99.97% tak filter karte hain. Studies dikhate hain ki bedroom mein HEPA purifier lagaane se raat ke symptoms aur subah ki congestion significantly kam hoti hai. Best placement — bedroom mein, apne bed ke paas.' },
      { _key: 'f20', question: 'Allergic Rhinitis mein school-age bacche kaise dhyan rakhein?', answer: 'School bag mein tissue aur saline spray rakhein. Teacher ko inform karein — window seat se door rakhein pollen season mein. Ghar mein bedroom allergy-proof banao — dust-proof mattress cover, weekly hot wash bedsheets. Homeopathy bacchon mein safe aur effective hai — drowsy nahi karta jo school performance affect kare.' },
      { _key: 'f21', question: 'Kya Allergic Rhinitis mein sense of smell waapis aa sakti hai?', answer: 'Haan — mostly yes. Allergic Rhinitis mein smell jaana usually temporary hoti hai — nasal inflammation ki wajah se smell receptors properly kaam nahi karte. Jaise hi allergy control hoti hai, smell dheere-dheere waapis aati hai. Agar long-term severe inflammation se nasal polyps ban gaye hain — tab recovery slower hoti hai.' },
      { _key: 'f22', question: 'Kya Allergic Rhinitis contagious hai?', answer: 'Bilkul nahi — Allergic Rhinitis contagious nahi hoti. Ye ek person ki immune system ka personal reaction hai — doosre ko share nahi hoti. Ye genetic predisposition hoti hai (parents se mil sakti hai genes ke zariye — lekin hawa ke zariye nahi).' },
      { _key: 'f23', question: 'Allergic Rhinitis diagnosis kaise hoti hai?', answer: 'Diagnosis mainly clinical hoti hai — doctor symptoms aur history dekhke suspected karte hain. Confirm karne ke liye: Skin Prick Test (SPT) — skin pe 20 common allergens laga ke reaction dekhte hain, 20 min mein result. RAST/Specific IgE Blood Test — blood mein allergy antibodies measure karte hain. ENT specialist nasal endoscopy se directly check karte hain.' },
      { _key: 'f24', question: 'Delhi, Mumbai, Pune mein Allergic Rhinitis zyada kyun hoti hai?', answer: 'High-pollution Indian cities mein Allergic Rhinitis literally epidemic level par hai. PM2.5 aur ozone particles nasal lining damage karte hain — jis se allergens easier entry paate hain. Parthenium weed (jo Delhi-NCR mein everywhere uga hua hai) ek potent allergen hai. Air pollution alone allergy trigger nahi karta lekin existing allergy 3-5x worse karta hai. N95 mask outdoors mein help karta hai — surgical mask nahi.' },
      { _key: 'f25', question: 'Allergic Rhinitis mein kab doctor ke paas jaana zaroori hai?', answer: 'Ye symptoms dikhein to turant doctor ke paas jaayein: saans lene mein takleef ya saans phoolna, aankhon mein severe swelling ya vision affect hona, chehre ya gale mein swelling, naak se blood-tinged ya brown discharge, fever ke saath forehead pe severe pain (sinusitis indicator). Anaphylaxis (rare severe allergic reaction) mein skin pe hives, saans ki takleef, chakkar — sab ek saath aayein to nearest hospital jaayein.' },
    ],

    selfCheck: 'Agar aapko baar baar chheenkein aati hain, naak behti ya band rehti hai, aankhon mein khujli hoti hai — aur ye symptoms specific season mein ya specific jagah (ghar, office) mein zyada hote hain — to Allergic Rhinitis possible hai. ENT doctor ya allergist se milein, skin prick test karwayein.',

    sources: [
      { _key: 's1', name: 'CCRH, Multicentric Study on Allergic Rhinitis', url: 'https://ccrhindia.nic.in', year: '2013' },
      { _key: 's2', name: 'Nayak C. et al., Homoeopathy Journal — A multicentric double-blind randomised controlled trial', url: '', year: '2012' },
      { _key: 's3', name: 'World Allergy Organization (WAO), White Book on Allergy', url: '', year: '2013' },
      { _key: 's4', name: 'Bousquet J. et al., Allergic Rhinitis and its Impact on Asthma (ARIA) Guidelines', url: '', year: '2020' },
      { _key: 's5', name: 'ICMR India — Prevalence of Allergic Diseases in India', url: '', year: '2019' },
    ],

    doctorNote: 'Clinic mein sabse common case jo aata hai wo hai — patient 5-6 saal se har mausam mein zyada pareshaan hota hai, antihistamine leke "manage" kar raha hota hai, aur sochta hai allergy ka koi ilaaj nahi. Jab hum poori case history lete hain — triggers identify karte hain, individualized medicine dete hain aur dust avoidance guide karte hain — 3-4 mahine mein seasonal attacks ki frequency genuinely half ho jaati hai. Key hai — sirf medicine nahi, lifestyle + medicine milke kaam karta hai.',
  }

  console.log('Seeding Allergic Rhinitis...')
  await client.createOrReplace(doc)
  console.log('✅ Allergic Rhinitis seeded successfully!')
}

seed().catch(console.error)
