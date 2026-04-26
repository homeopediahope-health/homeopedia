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
    heroText: 'Allergic Rhinitis ek aisi condition hai jisme aapki naak ke andar ki membrane — kisi bhi allergy trigger (jaise pollen, dust, pets, mold) ke sampark mein aane par — over-react karti hai. Is reaction mein histamine release hoti hai, jis se naak behna, chheenkein, aankhon mein khujli aur naak band hona shuru ho jaata hai. Ye koi "mausami nazla" nahi hai — ye immune system ki ek trained galat pratikriya hai jo baar baar trigger hoti rehti hai. India mein lagbhag 20-30% adults aur 40% bacche is problem se pareshaan hain.',

    quickFacts: {
      whatItIs: 'Immune system ki over-reaction jisme naak, aankhein aur gala affect hote hain — contagious NAHI hai',
      howCommon: 'India mein 20-30% adults aur 35-40% school-age bacche affected — WHO/ARIA data',
      treatmentDuration: 'Mild: 2-3 mahine, Moderate: 4-6 mahine, Severe/Chronic: 8-12 mahine homeopathic treatment',
    },

    types: [
      {
        _key: 'type1',
        name: 'Seasonal Allergic Rhinitis (Hay Fever)',
        description: 'Khaas mausum mein hoti hai — February-April (spring) aur September-November (post-monsoon). Cause: Pollen (tree, grass, weed), mold spores. Symptoms zyada intense lekin limited time ke liye. India mein Parthenium (congress grass) ek major trigger hai.',
      },
      {
        _key: 'type2',
        name: 'Perennial Allergic Rhinitis',
        description: 'Saal bhar rehti hai — koi specific season nahi. Cause: House dust mites, cockroach droppings, pet dander, mold inside home. Symptoms daily rehte hain, subah uthne par zyada.',
      },
      {
        _key: 'type3',
        name: 'Occupational Allergic Rhinitis',
        description: 'Kaam ki jagah ke allergens se hoti hai — kisaan (crop dust), bakery workers (flour dust), healthcare workers (latex). Weekends ya chhuti mein better feel hoti hai — ye ek diagnostic clue hai.',
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

    symptomGroups: [
      {
        _key: 'sg1',
        groupName: 'Naak Ke Symptoms (Nasal Signs)',
        symptoms: [
          'Paani jaisi naak (thin, watery discharge) — baar baar poochna padta hai',
          'Lagaataar ya jhund mein chheenkein — 5-10 ek saath',
          'Naak band rehna (nasal congestion) — khaskar raat aur subah',
          'Naak mein khujli — andar se',
          'Smell kam aana ya bilkul band hona',
        ],
      },
      {
        _key: 'sg2',
        groupName: 'Aankhon Ke Symptoms (Eye Signs)',
        symptoms: [
          'Aankhon mein pani aana (watery eyes)',
          'Aankhon mein lali aur khujli (allergic conjunctivitis)',
          'Aankhein swollen ya heavy lagni',
          'Bright light se discomfort',
        ],
      },
      {
        _key: 'sg3',
        groupName: 'Aam Pareshaniyan (General Signs)',
        symptoms: [
          'Kaan mein fullness ya blocked feel — Eustachian tube se connected hai',
          'Gale mein khujli ya dry cough (post-nasal drip se)',
          'Sar bhari rehna / mild headache',
          'Thakan aur irritability — especially bacchon mein',
        ],
      },
    ],

    seasonalCare: [
      {
        _key: 'sc1',
        season: 'February – April (Spring / Vasant Ritu)',
        advice: 'Pollen season peak — subah 5-10 baje bahar nikalna avoid karein. Kapde dhoop mein mat sukhao — pollen chipak jaata hai. Ghar ki khidkiyan band rakhein.',
      },
      {
        _key: 'sc2',
        season: 'June – September (Monsoon)',
        advice: 'Humidity se mold spores badh jaate hain. Ghar ke andar moisture control karna important hai. Bathroom exhaust fan use karo, leaking walls fix karo.',
      },
      {
        _key: 'sc3',
        season: 'October – November (Post-Monsoon)',
        advice: 'Weed pollen peak par — Diwali ka smoke aur patakhe symptoms bhad kate hain. N95 mask bahar nikalne par helpful hai.',
      },
      {
        _key: 'sc4',
        season: 'December – January (Winter)',
        advice: 'Cold air nasal membranes dry karta hai — congestion worse hoti hai. Indoor dust mite exposure zyada. Heater se air dry hoti hai — humidifier help karta hai.',
      },
    ],

    homeopathyExplainer: 'Allergic Rhinitis mein problem sirf naak mein nahi — immune system ki over-sensitivity mein hai. Homeopathy ka approach ye hai ki ye triggers se symptomatic relief ke saath-saath immune system ki galat pratikriya ko dheere-dheere recalibrate karta hai. Conventional antihistamines histamine block karte hain — homeopathy pehle hi aisi reaction reduce karne par kaam karta hai. Isliye results dheere aate hain lekin zyada sustainable hote hain.',

    ccrhData: {
      improvementRate: '55-60% nasal symptom score (TNSS) improvement — placebo group mein sirf 15-20%',
      studyDetails: 'CCRH multicentric study mein 3 months individualized homeopathic treatment ke baad real drug effect clearly confirmed hua — quality of life scores mein bhi significant improvement',
      avgTreatmentPeriod: '3-6 mahine (moderate cases)',
      keyFindings: [
        'Individualized treatment ne standard symptom scores mein meaningful reduction dikhai — placebo controlled',
        'Quality of life (QoL) scores mein bhi significant improvement',
        'Recurrence rate lower tha un patients mein jo full course complete kiya',
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
        forWhom: 'Jinhe naak se paani jaisi dhaar behti hai, aankhon mein jalan ho lekin naak mein jalan na ho — seedha onion jaisa reaction.',
        whyHope: 'Onion ke properties se bani ye medicine "likes cures likes" ke principle par kaam karti hai — nasal discharge aur chheenkon ke pattern ko normalize karti hai. Seasonal rhinitis mein aksar pehla choice hoti hai.',
      },
      {
        _key: 'm2',
        name: 'Sabadilla',
        forWhom: 'Jab chheenkein rukti hi nahi — 10-15 ek saath, naak mein itching aur burning ho, aur bahar jaane par symptoms worse ho jaayein (pollen exposure).',
        whyHope: 'Hay fever type allergies mein khaas — chheenkon ki frequency aur nasal itching dono par kaam karta hai.',
      },
      {
        _key: 'm3',
        name: 'Arsenicum Album',
        forWhom: 'Naak behna lekin saath mein anxiety bhi, raat ko symptoms worse, warm rooms mein thoda better — aur patient restless rehta ho.',
        whyHope: 'Immune system ki over-reactivity ke saath anxiety pattern combine ho to ye medicine bahut effective hai. Perennial rhinitis mein khas use hoti hai.',
      },
      {
        _key: 'm4',
        name: 'Natrum Muriaticum',
        forWhom: 'Shuru mein paani jaisi naak, phir naak band — khaas kar subah mein. Saath mein thakaan, headache, aur khud ko aloof rakhne wale log.',
        whyHope: 'Chronic perennial cases mein zyada kaam aati hai jahan naak ka pattern predictable ho — subah bharne ki complaint bahut common hai is type mein.',
      },
      {
        _key: 'm5',
        name: 'Euphrasia',
        forWhom: 'Jab naak se zyada aankhein affect hon — aankhon mein paani, jalan, lali zyada ho naak ke discharge se. Allergic conjunctivitis ke saath rhinitis.',
        whyHope: 'Aankhon aur naak dono ko ek saath address karta hai — allergic rhinitis ke saath conjunctivitis ka combination bahut common hai aur Euphrasia is combination ke liye khaas jaani jaati hai.',
      },
    ],

    diet: {
      include: [
        {
          _key: 'di1',
          category: 'Immunity Boosters',
          items: [
            'Amla (Indian Gooseberry) — Vitamin C ka best natural source, histamine response naturally moderate karta hai',
            'Haldi wala doodh (Turmeric milk) — Curcumin strong anti-inflammatory hai, nasal inflammation kam karta hai',
            'Adrak ki chai (Ginger tea) — Natural antihistamine effect, nasal congestion relief deta hai',
          ],
        },
        {
          _key: 'di2',
          category: 'Anti-Inflammatory Foods',
          items: [
            'Palak, methi, sarson — Quercetin rich vegetables jo histamine release naturally block karte hain',
            'Omega-3 rich foods — Akhrot (walnuts), alsi ke beej (flaxseeds) — inflammation pathway mein kaam karte hain',
            'Lahsun (Garlic) — Allicin compound immune modulation mein help karta hai',
          ],
        },
        {
          _key: 'di3',
          category: 'Hydration & Gut Health',
          items: [
            'Garam paani — Mucus thin karta hai, nasal passage clear rehti hai',
            'Homemade dahi (probiotic) — Gut microbiome balance se immune over-reaction kam hoti hai',
            'Coconut water — Electrolytes deta hai, dehydration se symptoms worse hote hain',
          ],
        },
      ],
      avoid: [
        {
          _key: 'da1',
          category: 'Histamine Rich Foods',
          items: [
            'Fermented foods (excess) — Old cheese, wine, vinegar, commercially packaged achaar — histamine release badha dete hain',
            'Processed meat (salami, sausage) — Preservatives aur histamine dono problem karte hain',
            'Canned seafood — High histamine content, nasal symptoms trigger kar sakta hai',
          ],
        },
        {
          _key: 'da2',
          category: 'Inflammatory Triggers',
          items: [
            'Refined sugar (maida, mithai, cold drinks) — Immune inflammation amplify karta hai, avoid during peak allergy season',
            'Dairy (doodh) — Kuch patients mein mucus production badha deta hai — observe karein khud pe',
            'Fried & spicy food — Nasal membranes irritate karte hain, congestion worse hoti hai',
          ],
        },
        {
          _key: 'da3',
          category: 'Seasonal Specific Avoidance',
          items: [
            'Raw unripe fruits during high pollen season — Cross-reactive allergens ho sakte hain (Oral Allergy Syndrome)',
            'Alcohol — Histamine release karta hai, vasodilation se nasal congestion instantly badh jaati hai',
            'Cold drinks aur ice cream — Nasal lining ko irritate karte hain, especially winter mein',
          ],
        },
      ],
      weeklyPlan: [
        { _key: 'wp1', day: 'Monday', meals: 'Subah: Amla juice + adrak chai | Dopahar: Dal chawal + kaccha pyaaz salad | Raat: Palak sabzi + roti + haldi doodh' },
        { _key: 'wp2', day: 'Tuesday', meals: 'Subah: Warm lemon honey water + poha | Dopahar: Moong dal + brown rice + lahsun tadka | Raat: Methi sabzi + roti' },
        { _key: 'wp3', day: 'Wednesday', meals: 'Subah: Ginger turmeric tea + upma | Dopahar: Rajma chawal + cucumber salad | Raat: Lauki sabzi + roti + haldi doodh' },
        { _key: 'wp4', day: 'Thursday', meals: 'Subah: Amla murabba + dalia | Dopahar: Chana dal + roti + hari chutney | Raat: Baingan bharta + roti' },
        { _key: 'wp5', day: 'Friday', meals: 'Subah: Tulsi-adrak chai + idli sambar | Dopahar: Mix veg sabzi + brown rice | Raat: Dahi (homemade) + roti + sabzi' },
        { _key: 'wp6', day: 'Saturday', meals: 'Subah: Warm water + soaked akhrot + poha | Dopahar: Palak paneer + roti | Raat: Moong dal khichdi + ghee' },
        { _key: 'wp7', day: 'Sunday', meals: 'Subah: Amla juice + besan chilla | Dopahar: Dal makhani (light) + roti + salad | Raat: Vegetable soup + roti + haldi doodh' },
      ],
      dietNote: 'Jal Neti (saline nasal rinse) daily karo — ye diet ke saath sabse powerful combination hai allergy control mein. Subah khali pet Amla ya warm lemon water se shuruat karo.',
    },

    dos: [
      'Nasal saline rinse (Jal Neti ya saline spray) daily karein — allergens aur mucus mechanical way se saaf hote hain, medication ki zaroorat kam hoti hai',
      'Ghar mein HEPA air purifier use karein — dust mites aur pet dander 99.97% filter karta hai, indoor allergy ka game changer hai',
      'Subah 5-10 baje bahar nikalna avoid karein pollen season mein — is waqt pollen count peak par hota hai',
      'Gadde aur takiye pe dust-mite proof covers lagaao — bedroom mein dust mite exposure sabse zyada hoti hai',
      'Bahar se ghar aate hi haath-mooh dhoyen aur kapde badalein — pollen aur dust body par chipka rehta hai',
    ],

    donts: [
      'AC filter change mat bhoolna — mahine mein ek baar saaf karein, warna AC ek allergen reservoir ban jaata hai',
      'Cigarette smoke ke paas mat rahein — active ya passive dono — nasal lining damage karta hai, symptoms 3x worse hoti hain',
      'OTC antihistamines bina doctor salaah ke mahino tak mat lein — dependency banta hai, drowsiness se kaam kharab hoti hai',
      'Ghar mein agarbatti, dhoop, synthetic room freshener mat jalao — particulate matter nasal passages irritate karta hai',
      'Allergy test karwaaye bina andaaze se treatment mat karein — specific triggers pata hon to avoidance zyada effective hoti hai',
    ],

    faqs: [
      { _key: 'f1', question: 'Allergic Rhinitis kya hota hai — kya ye sirf naak ki problem hai?', answer: 'Nahi — Allergic Rhinitis sirf naak ki bimari nahi hai, ye immune system ki over-reaction hai jisme naak, aankhein, gala aur kaan sab affect hote hain. Jab aap kisi allergen (jaise pollen, dust, pet ke baal) ke sampark mein aate hain, aapka immune system use "khatre" maan leta hai aur histamine release karta hai — jis se chheenkein, naak behna aur aankhon mein khujli shuru hoti hai. Is liye ise sirf "nazla" samajhna galat hai — ye ek treatable immune condition hai jisme sahi diagnosis aur treatment se kaafi fark padta hai.' },
      { _key: 'f2', question: 'Allergic Rhinitis aur normal sardi (cold) mein kya fark hai?', answer: 'Sardi mein fever aata hai, body ache hoti hai, aur 7-10 din mein theek ho jaata hai. Allergic Rhinitis mein fever nahi hota, chheenkein zyada hoti hain, aankhon mein bhi khujli hoti hai, aur ye weeks-months tak rehta hai ya baar baar aata hai. Sardi mein naak ka rang peela/green ho jaata hai — allergy mein discharge usually paani jaisa aur clear rehta hai. Agar aapko "sardi" baar baar aati hai ya specific jagah ya season mein — allergy ka test zaroor karwaayein.' },
      { _key: 'f3', question: 'Kya Allergic Rhinitis permanently theek ho sakti hai?', answer: 'Permanent control bilkul possible hai — attacks itne kam ho jaate hain ki practically life normal ho jaati hai. Complete cure ki guarantee koi nahi de sakta kyunki ye genetic predisposition pe bhi depend karta hai — lekin jo log triggers seriously identify karte hain, allergen avoidance karte hain, aur proper treatment complete karte hain, unme symptoms 80-90% tak control ho jaate hain. Homeopathy mein khaas baat ye hai ki long-term treatment se immune sensitivity dheere-dheere normalize hoti hai, jo relapse rate kam karta hai.' },
      { _key: 'f4', question: 'Kya Allergic Rhinitis se Asthma ho sakta hai?', answer: 'Haan — ye connection real hai aur medically "Allergic March" ya "United Airway Disease" kehte hain. Research ke mutabiq Allergic Rhinitis ke lagbhag 30-40% patients mein aage jaake asthma develop hone ka risk hota hai, especially agar treat na kiya jaaye. Naak aur phephde same airway system ka hissa hain — naak mein chronic inflammation neeche spread ho sakta hai. Isliye Allergic Rhinitis ko kabhi "choti problem" mat samjho — timely treatment asthma se bachne mein genuinely help karta hai.' },
      { _key: 'f5', question: 'Kya Allergic Rhinitis bacchon mein bhi hoti hai?', answer: 'Haan — aur actually bacchon mein zyada common hai. India mein school-age bacchon mein lagbhag 35-40% ko kisi na kisi form ki nasal allergy hoti hai. Bacchon mein symptoms thode alag dikhte hain — baar baar naak poochhna ("allergic salute"), aankhon ke neeche dark circles (allergic shiners), mooh se saans lena, aur raat ko neend kharab hona common hai. Homeopathy bacchon ke liye especially safe hai — no drowsiness, no side effects.' },
      { _key: 'f6', question: 'Allergic Rhinitis mein kaun sa test karwaayein?', answer: 'Skin Prick Test (SPT) ya Specific IgE Blood Test (RAST) — ye dono allergist tests hain jo specific triggers identify karte hain. SPT mein forearm pe thodi si allergy substance lagaate hain aur reaction dekhte hain — results 20-30 minutes mein. Blood test mein IgE antibodies measure karte hain. Agar aapko nasal symptoms hain lekin trigger pata nahi — ye test karwaana bahut helpful hai kyunki sahi allergen pata ho to avoidance se hi 50% improvement possible hai.' },
      { _key: 'f7', question: 'Kya Allergic Rhinitis mein Homeopathy kaam karta hai?', answer: 'Haan — CCRH-affiliated studies mein Allergic Rhinitis patients ko 3 mahine individualized homeopathic treatment se nasal symptom score (TNSS) mein placebo se significantly zyada improvement mili. Homeopathy ka fayda ye hai ki ye sirf chheenkein band nahi karta — immune system ki over-sensitivity address karta hai jo allergy ka root cause hai. Antihistamines ki tarah drowsiness nahi, aur long-term use bhi safe hai.' },
      { _key: 'f8', question: 'Dust allergy aur Allergic Rhinitis mein kya fark hai?', answer: '"Dust allergy" actually Allergic Rhinitis hi hai — sirf trigger dust hai. Allergic Rhinitis ka matlab hai naak ki allergic inflammation — jo kisi bhi allergen se ho sakti hai: pollen, dust, mold, pets. Jab trigger specifically house dust mites (microscopic insects jo gadde mein rehte hain) hote hain — use "Dust Mite Allergy" ya "Perennial Allergic Rhinitis" kehte hain. Gadde ka cover change karna, pillow washable cover lagaana — simple steps hain jo kaafi fark dalte hain.' },
      { _key: 'f9', question: 'Allergic Rhinitis mein kya khana chahiye — best diet konsa hai?', answer: 'Quercetin-rich foods — palak, pyaaz (kaccha), seb — natural antihistamine ka kaam karte hain. Haldi wala doodh ya adrak ki chai inflammation kam karte hain. Amla Vitamin C ka achha source hai jo immune response moderate karta hai. Probiotic foods (homemade dahi) gut health ke zariye immune system balance karte hain. Zyada histamine wale foods avoid karein — packed/processed meat, wine, fermented cheese, alcohol. Warm water aur hydration mucus thin rakhti hai.' },
      { _key: 'f10', question: 'Allergic Rhinitis ki best homeopathic medicine kaun si hai?', answer: 'Ye patient ke specific symptoms pe depend karta hai — isliye "best" medicine ek nahi hoti. Allium Cepa unke liye jisme paani jaisi naak behti hai. Sabadilla unke liye jisme chheenkon ki jhadi lagti hai. Arsenicum Album unke liye jisme raat ko symptoms worse hote hain. Euphrasia unke liye jisme aankhein zyada affect hon. Natrum Muriaticum unke liye jisme subah naak band rehti hai. Sahi medicine sirf ek qualified homoeopath choose kar sakta hai.' },
      { _key: 'f11', question: 'Kya Allergic Rhinitis mein surgery hoti hai?', answer: 'Allergic Rhinitis mein directly surgery nahi hoti — ye ek medical condition hai jo medicines se control hoti hai. Lekin agar allergy ki wajah se complications develop ho jaayein — jaise nasal polyps ya deviated septum — tab ENT surgeon surgery suggest kar sakte hain. Important baat ye hai ki surgery root cause (allergy) theek nahi karta — isliye post-surgery bhi allergy management zaroori rehta hai.' },
      { _key: 'f12', question: 'Pregnant women mein Allergic Rhinitis — kya karna chahiye?', answer: 'Pregnancy mein Allergic Rhinitis ek common aur tricky situation hai. Hormonal changes nasal congestion vaise bhi badha dete hain — allergy hoti ho to aur bura hota hai. Kaafi conventional antihistamines pregnancy mein safe nahi — isliye doctor ki salaah ke bina kuch mat lein. Safe options: saline nasal rinse (Jal Neti) completely safe hai, HEPA purifier use karna, pollen/dust avoid karna. Homeopathy pregnancy mein safe alternative consider kiya jaata hai — lekin qualified homoeopath se hi lein.' },
      { _key: 'f13', question: 'Kya Allergic Rhinitis ka gharelu ilaaj possible hai?', answer: 'Gharelu upay symptoms manage karne mein helpful hain — lekin ye condition ka complete treatment nahi hain. Kya kaam karta hai: daily saline nasal rinse (Jal Neti) se allergen saaf hote hain — ye most effective home remedy hai. Adrak-shahad-tulsi ki chai congestion mein relief deti hai. Steam inhalation nasal passages kholta hai. Haldi wala doodh raat ko pine se inflammation thodi kam hoti hai. In sabse symptoms 30-40% tak manage ho sakte hain — lekin recurrent ya severe allergy mein proper homeopathic ya medical treatment zaroori hai.' },
      { _key: 'f14', question: 'Kya Allergic Rhinitis mein yoga aur exercise theek hai?', answer: 'Haan — lekin carefully. Indoor exercise (yoga, gym) — completely safe hai aur actually helpful hai kyunki stress allergic response worsen karta hai aur exercise stress kam karta hai. Pranayama — khaas kar Anulom-Vilom aur Bhramari — nasal passage ko strengthen karte hain. Outdoor running peak pollen hours (subah 5-10) mein avoid karein. High-pollution days mein outdoor exercise nahi.' },
      { _key: 'f15', question: 'Allergic Rhinitis aur Sinusitis mein kya relation hai?', answer: 'Allergic Rhinitis sinusitis ka ek major cause hai — dono directly connected hain. Jab allergy se nasal passages mein inflammation aati hai, sinuses ka drainage block ho jaata hai. Is blocked drainage mein bacteria/virus easily infect kar lete hain — aur sinusitis ho jaati hai. Agar Allergic Rhinitis properly treat ho — sinusitis bhi automatically kam ho jaati hai. Recurrent sinusitis ka matlab often untreated allergy hota hai.' },
      { _key: 'f16', question: 'Allergic Rhinitis mein naak band rehne ka kya karein?', answer: 'Saline nasal rinse (1/4 tsp salt + 1 cup warm water) — congestion se immediate relief milti hai. Steam inhalation — garma paani ke bhap se 5-10 minute — mucus thin hota hai. Sar uthaakar soein — head slightly elevated rakho. Avoid karo — decongestant nasal sprays (Otrivin types) 3 din se zyada mat use karo — "rebound congestion" ho jaati hai jisme band hona aur worse ho jaata hai.' },
      { _key: 'f17', question: 'Kya Allergic Rhinitis mein dimaag par asar padta hai?', answer: 'Seedha "brain damage" nahi — lekin quality of life pe kaafi asar padta hai. Research dikhata hai ki untreated Allergic Rhinitis mein concentration aur memory affected hoti hai, exam mein performance kam hoti hai, anxiety aur mood changes zyada hote hain, sleep quality kharab hoti hai. Children ka school performance genuinely impact hota hai — isliye allergy ko "choti problem" mat samjho.' },
      { _key: 'f18', question: 'Allergic Rhinitis ek baar hone ke baad hamesha rehti hai?', answer: 'Zaroor nahi — pattern person se person vary karta hai. Kuch logon mein age ke saath allergy khud kam ho jaati hai. Kuch logon mein zyada hoti jaati hai. Jo cheez sure hai: sahi treatment, allergen avoidance aur healthy immune system se attacks ki frequency aur intensity control hoti hai. Homeopathy immune sensitivity pe kaam karta hai — kuch patients mein long-term mein symptoms significantly reduce ho jaate hain.' },
      { _key: 'f19', question: 'Kya air purifier se Allergic Rhinitis mein fark padta hai?', answer: 'Haan — real aur measurable fark padta hai. HEPA filter wale purifiers dust mites, pollen, pet dander, mold spores — sab 99.97% tak filter karte hain. Studies dikhate hain ki bedroom mein HEPA purifier lagaane se raat ke symptoms aur subah ki congestion significantly kam hoti hai. Best placement — bedroom mein, apne bed ke paas. Akele purifier full treatment nahi hai — lekin as part of allergy management, ye ek important tool hai.' },
      { _key: 'f20', question: 'Allergic Rhinitis mein school-age bacche kaise dhyan rakhein?', answer: 'School bag mein tissue aur saline spray rakhein. Teacher ko inform karein — window seat se door rakhein pollen season mein. Ghar mein bedroom allergy-proof banao — dust-proof mattress cover, weekly hot wash bedsheets. Homeopathy bacchon mein safe aur effective hai — drowsy nahi karta jo school performance affect kare.' },
      { _key: 'f21', question: 'Kya Allergic Rhinitis mein sense of smell waapis aa sakti hai?', answer: 'Haan — mostly yes. Allergic Rhinitis mein smell jaana usually temporary hoti hai — nasal inflammation ki wajah se smell receptors properly kaam nahi karte. Jaise hi allergy control hoti hai, smell dheere-dheere waapis aati hai. Agar long-term severe inflammation se nasal polyps ban gaye hain — tab recovery slower hoti hai. COVID-19 wali smell loss alag mechanism hai.' },
      { _key: 'f22', question: 'Kya Allergic Rhinitis contagious hai — doosron ko lagti hai kya?', answer: 'Bilkul nahi — Allergic Rhinitis contagious nahi hoti. Ye ek person ki immune system ka personal reaction hai — doosre ko share nahi hoti. Ye genetic predisposition hoti hai (parents se mil sakti hai genes ke zariye — lekin hawa ke zariye nahi). Ek hi ghar mein kuch logon ko allergy hoti hai aur kuch ko nahi — same dust exposure ke baad.' },
      { _key: 'f23', question: 'Allergic Rhinitis diagnosis kaise hoti hai — kya test zaroori hai?', answer: 'Diagnosis mainly clinical hoti hai — doctor symptoms aur history dekhke suspected karte hain. Confirm karne ke liye: Skin Prick Test (SPT) — skin pe 20 common allergens laga ke reaction dekhte hain, 20 min mein result. RAST/Specific IgE Blood Test — blood mein allergy antibodies measure karte hain. ENT specialist nasal endoscopy se directly check karte hain.' },
      { _key: 'f24', question: 'Delhi, Mumbai, Pune mein Allergic Rhinitis zyada kyun hoti hai?', answer: 'High-pollution Indian cities mein Allergic Rhinitis literally epidemic level par hai. PM2.5 aur ozone particles nasal lining damage karte hain — jis se allergens easier entry paate hain. Parthenium weed (jo Delhi-NCR mein everywhere uga hua hai) ek potent allergen hai. Air pollution alone allergy trigger nahi karta lekin existing allergy 3-5x worse karta hai. N95 mask outdoors mein help karta hai — surgical mask nahi.' },
      { _key: 'f25', question: 'Allergic Rhinitis mein kab doctor ke paas jaana zaroori hai?', answer: 'Ye symptoms dikhein to turant doctor ke paas jaayein: saans lene mein takleef ya saans phoolna, aankhon mein severe swelling ya vision affect hona, chehre ya gale mein swelling, naak se blood-tinged ya brown discharge, fever ke saath forehead pe severe pain (sinusitis indicator), neend bilkul nahi aa rahi. Anaphylaxis (rare severe allergic reaction) mein skin pe hives, saans ki takleef, chakkar — sab ek saath aayein to nearest hospital jaayein.' },
    ],

    sources: [
      { _key: 's1', name: 'CCRH, Multicentric Study on Allergic Rhinitis', year: '2013-2015' },
      { _key: 's2', name: 'Nayak C. et al., Homoeopathy Journal — A multicentric double-blind randomised controlled trial', year: '2012' },
      { _key: 's3', name: 'World Allergy Organization (WAO), White Book on Allergy', year: '2013' },
      { _key: 's4', name: 'Bousquet J. et al., Allergic Rhinitis and its Impact on Asthma (ARIA) Guidelines', year: '2020' },
      { _key: 's5', name: 'ICMR India — Prevalence of Allergic Diseases in India', year: '2019' },
    ],

    doctorNote: 'Clinic mein sabse common case jo aata hai wo hai — patient 5-6 saal se har mausam mein zyada pareshaan hota hai, antihistamine leke "manage" kar raha hota hai, aur sochta hai allergy ka koi ilaaj nahi. Jab hum poori case history lete hain — triggers identify karte hain, individualized medicine dete hain aur dust avoidance guide karte hain — 3-4 mahine mein seasonal attacks ki frequency genuinely half ho jaati hai. Key hai — sirf medicine nahi, lifestyle + medicine milke kaam karta hai.',
  }

  console.log('Seeding Allergic Rhinitis...')
  await client.createOrReplace(doc)
  console.log('✅ Allergic Rhinitis seeded successfully!')
}

seed().catch(console.error)
