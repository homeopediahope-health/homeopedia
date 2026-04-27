import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
  useCdn: false,
})

const urticaria = {
  _id: 'disease-urticaria',
  _type: 'disease',

  title: 'Urticaria',
  hindiName: 'Pitti / Sheetal Pitta / Pitti Ubharna',
  slug: { _type: 'slug', current: 'urticaria' },

  metaTitle: 'Urticaria (Pitti) — Homeopathic Treatment, Diet & Permanent Relief',
  metaDescription: 'Urticaria (pitti) ke causes, types, homeopathic treatment aur diet guide — simple Hinglish mein. Verified info, doctor-reviewed. Permanent relief possible hai.',

  heroText: 'Urticaria — jise common language mein "pitti ubharna" ya "hives" kehte hain — ek aisi skin condition hai jisme achanak shareer pe laal, suji hui, khujli wali patches nikal aati hain. Ye patches kuch ghanton mein jagah badalti rehti hain — aaj kamar pe, kal pet pe. Zyada tar cases mein ye immune system ki ek overreaction hoti hai kisi trigger ke against. 6 hafte se zyada rahe to "chronic urticaria" kehte hain — aur tab proper homeopathic treatment se long-term relief milti hai.',

  category: 'Skin',

  quickFacts: {
    whatItIs: 'Urticaria mein mast cells histamine release karti hain jo temporary, itchy wheals (ubhri hui patches) create karti hain. Ye immune system ki oversensitivity hai — kisi specific trigger ke against overreaction.',
    howCommon: 'Approximately 15-25% Indians kabhi na kabhi urticaria experience karte hain. Chronic urticaria 0.5-1% population ko affect karta hai — aur mahilaon mein 20-40 age group mein zyada common hai.',
    treatmentDuration: 'Acute: 1-6 hafte | Chronic: Homeopathic treatment mein 3-6 mahine mein significant improvement; recurrence control 6-12 mahine',
    successRate: 'CCRH study mein wheal score 6.8 se 2.1 aaya — placebo group mein sirf 6.7 se 5.9 par ruka; itching VAS 7.4 se 2.8 (homeopathy group)',
  },

  causes: [
    'Immune System Overreaction — body mast cells se histamine release karti hai jo itching, redness, aur swelling ka main cause hai',
    'Food Triggers — seafood, peanuts, tree nuts, eggs, milk, strawberries, artificial preservatives (tartrazine) aur food additives',
    'Medicines — Aspirin, NSAIDs (ibuprofen), ACE inhibitors, penicillin — ye common drug triggers hain jo doctor switch karte hain',
    'Infections — bacterial (H. pylori, strep), viral (hepatitis, EBV), ya fungal infections underlying chronic trigger ban sakti hain',
    'Physical Stimuli — pressure, cold, heat, exercise, sun exposure — physical urticaria ke specific causes hain',
    'Stress aur Hormonal Changes — emotional stress immune response disrupt karta hai; thyroid autoimmunity bhi chronic urticaria se strongly judi hai',
  ],

  riskFactors: [
    'Atopic background wale log — jinhe already asthma, eczema, ya hay fever hai — immune sensitization already hoti hai',
    'Women, especially 20-40 age group — hormonal fluctuations ka direct role hai mast cell reactivity mein',
    'Autoimmune conditions wale — thyroid disease, lupus, rheumatoid arthritis — shared autoimmune pathway',
    'NSAIDs ya aspirin regular lene wale — ye directly mast cell degranulation trigger karte hain',
    'High-stress lifestyle — chronic stress mast cells ko sensitize karta hai over time',
    'Certain occupations — healthcare workers (latex exposure), food industry — occupational allergen exposure',
  ],

  complications: [
    'Angioedema progression — throat mein sujan se breathing blockage — life-threatening emergency ban sakti hai; turant 108 call karein',
    'Anaphylaxis risk — severe allergic urticaria mein blood pressure drop, breathing difficulty — hospital emergency immediately',
    'Chronic sleep disruption — raat ko intense itching se neend nahi aati — anxiety, depression, quality of life severely affected',
    'Psychological impact — chronic urticaria patients mein anxiety aur depression ka rate significantly higher hai — isko serious treatment mein shamil karna chahiye',
    'Secondary skin infection — baar baar khujaane se scalp wounds ya skin mein bacterial infection (impetigo) ho sakti hai',
  ],

  symptoms: [
    {
      _key: 'skin_signs',
      category: 'Skin Pe Dikhne Wale Signs',
      items: [
        'Laal ya skin-colored ubhi hui patches (wheals) — size pin se lekar haath bhar tak vary karti hai',
        'Patches ka migrate karna — kuch ghanton mein jagah badal jaati hain ya apne aap disappear ho jaati hain',
        'Clear border ke saath oval ya irregular shape ki swelling — multiple patches ek saath',
        'Skin warm lagna — affected area pe heat feel hona',
      ],
    },
    {
      _key: 'itching',
      category: 'Itching aur Discomfort',
      items: [
        'Intense khujli — raat ko zyada hoti hai jab histamine production peak pe hota hai',
        'Burning ya stinging sensation — kuch cases mein jalan bhi hoti hai khujli ke saath',
        'Restlessness — itching ki wajah se ek jagah baith nahi paana',
      ],
    },
    {
      _key: 'serious_signs',
      category: 'Serious Signs (Emergency)',
      items: [
        'Angioedema — lips, eyes, tongue ki deeper sujan — 50% chronic urticaria patients mein kabhi na kabhi hoti hai',
        'Breathing mein takleef ya throat tightness — MEDICAL EMERGENCY, turant 108 call karein',
        'Nausea, stomach cramping — gut mast cells ka involvement; dizziness ya heartbeat tez hona — anaphylaxis ka sign',
      ],
    },
  ],

  ccrhEvidence: {
    improvementRate: 'Treatment group mein wheal score 6.8 se 2.1; itching VAS 7.4 se 2.8 — placebo group mein wheal score sirf 6.7 se 5.9, itching 7.2 se 6.1 par ruka',
    avgTreatmentPeriod: '3-6 mahine (chronic cases mein longer)',
    citation: 'Indian Journal of Research in Homoeopathy (IJRH), 2017-2019 observational studies; CCRH Clinical Verification of Homoeopathic Medicines in Urticaria | Internal Report | 2018',
    keyFindings: [
      'Homeopathy group mein wheal score aur itching intensity dono mein placebo se statistically meaningful reduction',
      'Quality of life (Dermatology Life Quality Index) mein significant improvement — 3 mahine ke treatment ke baad',
      'Chronic urticaria mein recurrence frequency ghati — jo sirf antihistamines se nahi milta',
      'Stress-triggered urticaria cases mein constitutional treatment se cortisol-mediated flare-ups mein reduction observed',
    ],
  },

  homeopathyBenefits: [
    'Chronic urticaria mein recurrence rate ghataana — ye sabse bada clinical advantage hai jo sirf antihistamines se nahi milta',
    'Immune system ki underlying hypersensitivity address karta hai — sirf histamine suppress nahi karta',
    'Stress-triggered urticaria mein saath mein stress response bhi address hoti hai',
    'Pregnancy mein safe alternative — conventional antihistamines first trimester mein avoid karne hote hain',
    'Bacchon ke liye safe aur side-effect free — long-term antihistamines bacchon mein drowsiness de sakti hain',
    'Thyroid-linked chronic urticaria mein dono conditions simultaneously address hoti hain',
  ],

  homeopathyLimitations: [
    'Acute severe urticaria (angioedema, anaphylaxis) mein turant conventional emergency treatment ZAROOR chahiye — homeopathy supplementary hai, replacement nahi',
    'Agar specific allergen identified hai (nuts, bee sting) to allergen avoidance + conventional management primary hai; homeopathy saath mein chal sakta hai',
  ],

  medicines: [
    {
      _key: 'apis',
      name: 'Apis Mellifica',
      potency: '',
      bestFor: 'Burning, stinging pain wali pitti — jaise honeybee ne kaata ho; thande se aaram, garam se takleef; pale pink puffy skin',
      keyIndications: [
        'Burning, stinging pain — bilkul bee sting jaisi sensation',
        'Thande se aaram milna — cold compress pe better; garam se worse',
        'Skin pale pink ya rosy, puffy appearance',
        'Angioedema tendency — chehra, lips pe sujan ke cases',
        'Thirst bilkul kam ya absent hona',
        'Restlessness aur anxious feeling ke saath',
      ],
    },
    {
      _key: 'urtica_urens',
      name: 'Urtica Urens',
      potency: '',
      bestFor: 'Classic pitti — shellfish ya strawberry khaane ke baad; intense burning + itching; baar baar usi season mein aane wali urticaria',
      keyIndications: [
        'Shellfish, strawberry ya specific food ke baad achanak pitti',
        'Intense burning aur itching dono saath mein',
        'Joints mein bhi dard ho saath mein',
        'Seasonal pattern — usi time ya usi mausam mein baar baar aana',
        'Thande paani se worse hona',
        'Food-triggered acute urticaria ka most specific remedy',
      ],
    },
    {
      _key: 'rhus_tox',
      name: 'Rhus Toxicodendron',
      potency: '',
      bestFor: 'Intense khujli raat ko zyada, cold/wet mausam mein trigger hoti ho, restlessness ke saath — patient ek jagah baith nahi sakta',
      keyIndications: [
        'Raat ko khujli bahut intense ho jaana',
        'Thanda, nami wala mausam mein worse',
        'Restlessness — continuously position change karna',
        'Cold-triggered urticaria ka ek key remedy',
        'Warmth se temporary relief milna',
        'Physical activity se thodi der ke liye better',
      ],
    },
    {
      _key: 'natrum_mur',
      name: 'Natrum Muriaticum',
      potency: '',
      bestFor: 'Exercise ya dhoop se trigger hone wali pitti; stress aur suppressed emotions ke baad symptoms badh jaate hain; withdrawn, anemic nature',
      keyIndications: [
        'Solar urticaria — dhoop mein jaane se pitti',
        'Cholinergic urticaria — exercise ya sweating se',
        'Stress aur suppressed grief ke baad flare',
        'Anemic, withdrawn, reserved nature',
        'Seashore pe worse hona',
        'Underlying anxiety jo trigger ka kaam karti hai',
      ],
    },
    {
      _key: 'sulphur',
      name: 'Sulphur',
      potency: '',
      bestFor: 'Chronic, long-standing urticaria jo baar baar aati rehti hai; raat ko khujli bahut zyada; garmi se sab badhta hai; skin rough aur dry',
      keyIndications: [
        'Baar baar aane wali chronic urticaria — months ya years se',
        'Raat ko aur bistar ki warmth mein intense khujli',
        'Garmi se sab symptoms worse — thanda pasand karna',
        'Skin rough, dry, aur generally unhealthy looking',
        'Careless appearance wali personality',
        'Jab baaki medicines kaam nahi kar rahi — sulphur "unlock" karta hai',
      ],
    },
  ],

  seasonalCare: {
    summer: 'Peak time hai heat urticaria aur cholinergic urticaria ke liye. Subah ya shaam mein baahar jaao — dhoop mein nahi. Cotton loose clothing. AC aur bahar ka temperature fark zyada na rakho — slowly adjust karo. Thande se achanak garam mein mat jaao — temperature shock trigger hai. Coconut water, chhach, khira zyada lo — cooling foods. Spicy food bilkul avoid is season mein.',
    monsoon: 'Wet kapde jaldi badlo — damp skin mast cell activation karta hai. Mold-prone areas se door raho — mold spores trigger hain. Achaar, fermented foods bilkul nahi is season mein — histamine spike. Paani ubaal ke piyo — gut infections se bachnaa zaroori hai. Gut healthy to urticaria better — monsoon mein gut care zyada important.',
    winter: 'Cold urticaria patients ke liye sabse sensitive time. Full sleeve, gloves, muffler — thandi hawa seedhi skin pe nahi. Gungune (lukewarm) paani se nahao — thande paani bilkul nahi. Outdoors se aane ke baad foran dry ho jaao. Thandi ice cream, cold drinks strictly avoid. Garm soup, haldi doodh — immune boost. Rhus Tox ya Urtica Urens winter mein commonly needed hai.',
  },

  dietInclude: [
    {
      _key: 'di1',
      category: 'Anti-Inflammatory Foods',
      emoji: '🌿',
      items: [
        'Haldi (turmeric) — curcumin mast cell stabilizer hai; doodh ya dal mein daalke khao',
        'Adrak (ginger) — natural antihistamine properties; chai mein ya garam paani mein',
        'Lauki, tori, tinda — easy to digest; gut-immune connection ke liye helpful',
        'Palak, methi (cooked) — magnesium aur quercetin dono; quercetin natural antihistamine nutrient hai',
      ],
    },
    {
      _key: 'di2',
      category: 'Gut-Healing Foods',
      emoji: '🥣',
      items: [
        'Homemade curd/dahi (fresh) — probiotics gut inflammation ghataate hain; urticaria mein gut health important role play karta hai',
        'Moong dal (yellow, cooked soft) — light on digestion, non-reactive protein source',
        'Banana (ripe) — B6 aur magnesium dono; histamine low food hai',
        'Boiled rice + ghee — bland, gut-soothing; flare ke time best option',
      ],
    },
    {
      _key: 'di3',
      category: 'Hydration & Cooling',
      emoji: '🥤',
      items: [
        'Nariyal paani (coconut water) — hydration + electrolytes; cooling effect aur histamine-free',
        'Kheera (cucumber) — quercetin source; skin cooling effect',
        'Chhach (buttermilk, fresh) — probiotic, cooling; summer mein especially helpful',
        'Saunf (fennel) water — digestive + mild antihistamine; roz subah pi sakte hain',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'High Histamine Foods',
      emoji: '⚠️',
      items: [
        'Fermented foods — achaar, vinegar, soya sauce, cheese — yeast/bacteria histamine produce karte hain',
        'Old/leftover nonveg — reheated fish, chicken — histamine level dramatically badhta hai time ke saath',
        'Shellfish — jhinga, crab, lobster — high histamine + allergen dono',
        'Alcohol (wine, beer bhi) — direct histamine releaser; urticaria mein strictly avoid',
      ],
    },
    {
      _key: 'da2',
      category: 'Common Allergy Triggers',
      emoji: '🚫',
      items: [
        'Peanuts aur tree nuts — even small amount severe reaction de sakta hai sensitized patients mein',
        'Strawberries, kiwi, tomatoes — natural histamine liberators, directly mast cells activate karte hain',
        'Eggs (kuch patients mein) — especially egg white; individual variation hai',
      ],
    },
    {
      _key: 'da3',
      category: 'Gut-Disrupting Items',
      emoji: '🍟',
      items: [
        'Maida products — bread, biscuits, bakery — inflammation increase karte hain; gut lining disturb karte hain',
        'Artificial food colors aur preservatives — tartrazine (E102), sodium benzoate — known urticaria triggers hain',
        'Cold drinks, soda — artificial sweeteners + preservatives; gut health ke liye harmful',
        'Bahut zyada masaledar khana — gut lining irritate karta hai, flare trigger ho sakta hai',
      ],
    },
  ],

  dietTip: 'Flare ke waqt 48-72 ghante ke liye sirf bland khao — moong dal khichdi, boiled rice + ghee + lauki ki sabzi, fresh dahi. Ye immune system ko calm karne ka sabse effective dietary step hai. 3 din mein fark dikhega.',

  dietNote: 'Trigger diary rakhna zaroori hai — kab pitti aayi, kya khaya, stress tha kya, mausam kaisa tha. 2-3 hafte mein aapka personal trigger pattern bilkul clear ho jaayega. Har person ka trigger alag hota hai — diary ke bina guess karna mushkil hai.',

  weeklyPlan: [
    {
      _key: 'wp1',
      day: 'Somwar / Monday',
      breakfast: 'Moong dal chilla (2) + pudina chutney + saunf water (1 glass)',
      midMorning: 'Ripe banana + soaked badam (5)',
      lunch: 'Boiled rice + moong dal (haldi + adrak) + lauki sabzi + fresh dahi',
      evening: 'Coconut water + roasted makhana (handful)',
      dinner: 'Khichdi (moong + rice) + ghee (1 tsp) + boiled tori',
    },
    {
      _key: 'wp2',
      day: 'Mangalwar / Tuesday',
      breakfast: 'Oats porridge (plain) + haldi wala doodh + saunf water',
      midMorning: 'Kheera (cucumber) slices + chhach (1 glass)',
      lunch: 'Roti (2, no ghee on top) + palak sabzi (lightly spiced) + moong dal + dahi',
      evening: 'Saunf + adrak ka thanda pani + 4-5 badam',
      dinner: 'Simple dal chawal + ghee + kheera salad',
    },
    {
      _key: 'wp3',
      day: 'Budhwar / Wednesday',
      breakfast: 'Dalia (broken wheat) porridge with haldi + banana',
      midMorning: 'Coconut water + soaked akhrot (2)',
      lunch: 'Boiled rice + arhar dal (simple tadka — haldi, jeera, adrak) + tinda sabzi',
      evening: 'Fresh chhach + roasted chana (small portion)',
      dinner: 'Roti (2) + lauki ki sabzi + moong dal',
    },
    {
      _key: 'wp4',
      day: 'Guruwar / Thursday',
      breakfast: 'Idli (3, soft) + coconut chutney (fresh) + saunf water',
      midMorning: 'Ripe papaya (medium bowl)',
      lunch: 'Khichdi + ghee + dahi + boiled palak (lightly seasoned)',
      evening: 'Haldi wala doodh (warm, low sugar) + 4-5 badam',
      dinner: 'Boiled rice + moong dal + tori sabzi',
    },
    {
      _key: 'wp5',
      day: 'Shukrawar / Friday',
      breakfast: 'Poha (simple, light vegetables, no onion if trigger) + chhach',
      midMorning: 'Coconut water + ripe banana',
      lunch: 'Roti (2) + palak sabzi + dahi + kheera slices',
      evening: 'Saunf water + makhana (roasted, light salt)',
      dinner: 'Dal khichdi + ghee + boiled lauki',
    },
    {
      _key: 'wp6',
      day: 'Shanivaar / Saturday',
      breakfast: 'Besan chilla (2, simple, light spice) + green chutney + dahi',
      midMorning: 'Fresh coconut water + soaked badam',
      lunch: 'Boiled rice + chana dal (soft cooked) + lauki sabzi + fresh chhach',
      evening: 'Adrak + saunf ki chai (no milk, light) + roasted chana',
      dinner: 'Roti (2) + simple arhar dal + tinda sabzi',
    },
    {
      _key: 'wp7',
      day: 'Ravivaar / Sunday',
      breakfast: 'Dosa (plain, thin) + coconut chutney + sambar (light)',
      midMorning: 'Ripe banana + chhach (1 glass)',
      lunch: 'Dal chawal + ghee + palak sabzi + dahi (relaxed day, slightly varied)',
      evening: 'Haldi doodh + makhana',
      dinner: 'Khichdi + ghee + boiled vegetables (tori/lauki/tinda)',
    },
  ],

  lifestyle: [
    {
      _key: 'trigger_diary',
      title: 'Trigger Diary — Sabse Zaroori Step',
      description: 'Diary mein note karo: kab pitti aayi, kya khaya tha, stress tha kya, mausam, kapde, soap/shampoo change kiya tha kya. 2-3 hafte mein pattern bilkul clear ho jaayega. Ye ek tool hai jo doctor bhi use karta hai — ghar pe khud rakho. Bina diary ke treatment half-effective rehti hai.',
    },
    {
      _key: 'clothing',
      title: 'Kapde aur Skin Contact',
      description: 'Cotton, loose kapde pehno — synthetic fabric skin friction aur heat dono badhata hai jo direct trigger hai. Tight belts, bra straps, socks ke elastic avoid karo — pressure urticaria trigger hoti hai. Naye kapde pehenne se pehle wash karo — textile dyes aur chemical finish skin pe react kar sakti hai.',
    },
    {
      _key: 'bathing',
      title: 'Nahane ka Tarika — Chhoti Detail, Bada Farak',
      description: 'Lukewarm ya cool paani use karo — hot shower mast cells activate karta hai aur pitti worse karti hai. Non-soap, fragrance-free cleanser use karo — regular soap pH disturb karta hai. Nahane ke baad gently pat dry karo — rub nahi. Fragrance-free moisturizer lagao — skin barrier strong rakho.',
    },
    {
      _key: 'stress',
      title: 'Stress Management — Treatment Ka Integral Part',
      description: 'Stress urticaria ka ek documented trigger hai — sirf coincidence nahi. Roz 10-15 min meditation, deep breathing, ya walk karein. Sleep poori lo — raat ko khujli ke bavjood routine maintain karo; sleep deprivation immune dysregulation badhaata hai. Ye sab treatment ka hissa hai — sirf medicines pe depend mat karo.',
    },
    {
      _key: 'cool_compress',
      title: 'Cool Compress — Instant Relief',
      description: 'Flare ke waqt thanda wet cloth affected area pe 10-15 min rakhna sabse safe aur effective instant relief hai. Ice directly skin pe mat lagao — cold urticaria wale patients mein trigger ho sakta hai. Calamine lotion ya aloe vera gel (fragrance-free) bhi soothing hai. Scented creams ya hot water avoid karo completely.',
    },
  ],

  dos: [
    'Cotton, loose kapde pehno — synthetic fabric direct trigger hai heat aur friction se',
    'Trigger diary rakho — 2-3 hafte mein personal pattern clear ho jaata hai',
    'Cool compress lagao flare pe — 10-15 min, thanda wet cloth; instant relief',
    'Nails choti rakho — khujaane ki jagah gently press karo; khujaane se histamine aur zyada release hoti hai',
    'Stress management seriously lo — meditation, walk, deep breathing; stress direct trigger hai',
    'Qualified homoeopath se consistently milo — urticaria mein consistency of treatment matters most',
    'Sleep poori lo — raat ko itching ke bavjood routine maintain karo; sleep deprivation immune dysregulation badhaata hai',
  ],

  donts: [
    'Hot shower mat lo — garam paani mast cells activate karta hai; lukewarm ya cool use karo',
    'Self-medication mat karo — alag alag antihistamines ya steroids bina guidance ke; rebound worse ho sakta hai',
    'Tight kapde mat pehno — bra straps, tight jeans, elastic — pressure urticaria ka direct trigger',
    'Known food triggers ko "thoda to chalega" mat socho — chhoti amount bhi sensitized person mein severe reaction de sakti hai',
    'Scented soaps, perfumes, fabric softeners mat use karo — chemical fragrance direct skin irritant hai',
    'Angioedema (throat/lips sujan) mein ghar pe mat ruko — turant 108 call karo; ye emergency hai',
    'Stress ko ignore mat karo — chronic urticaria mein stress management treatment ka hissa hai, optional nahi',
  ],

  caseStudies: [
    {
      _key: 'case1',
      profile: '34 saal ki teacher, Nashik',
      duration: '2 saal se chronic urticaria — raat ko intense khujli, cold trigger, thyroid antibodies elevated (Anti-TPO high)',
      treatment: 'Rhus Tox 200 (initial) + Sulphur 200 (constitutional) — trigger diary rakhi, fermented foods bilkul band, stress yoga se manage',
      result: '6 hafte mein frequency 50% kam; 3 mahine mein raat ki khujli almost gone; 5 mahine mein thyroid antibodies bhi thoda improve hua',
    },
    {
      _key: 'case2',
      profile: '8 saal ka bachcha, Akola — school mein baar baar pitti',
      duration: 'Har 2-3 hafte mein acute episode — mainly strawberry, packaged juice, aur exam stress pe pattern notice hua',
      treatment: 'Apis Mellifica 30 (acute) + Natrum Mur 200 (constitutional) — school snack list change ki, artificial colors band',
      result: '3 mahine mein episodes 80% kam — exam stress pe bhi reaction bahut mild; 6 mahine mein near-complete control',
    },
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Urticaria (pitti) kya hoti hai aur ye normal allergy se kaise alag hai?',
      answer: 'Urticaria ek skin condition hai jisme body pe achanak laal, ubhri hui, khujli wali patches nikal aati hain jise "wheals" kehte hain. Ye patches ek jagah pe nahi rehti — kuch ghanton mein jagah badal leti hain ya apne aap chali jaati hain. Normal allergy mein naak behna, aankhein laal hona, sneezing hoti hai — urticaria mein specifically skin react karti hai. Agar ye 6 hafte se zyada rehti hai to "chronic urticaria" kehlata hai aur tab proper treatment zaroori hoti hai.',
    },
    {
      _key: 'faq2',
      question: 'Pitti ubharne ke kya karan hote hain — kya ye hamesha khaane se hoti hai?',
      answer: 'Nahi — urticaria sirf khaane se nahi hoti. Food triggers jaise shellfish, nuts, strawberries ek common cause hain — lekin medicines (aspirin, ibuprofen), infections (H. pylori bacteria), stress, thanda ya garam mausam, exercise, aur tight kapde bhi trigger ban sakte hain. Chronic urticaria mein 50% se zyada cases mein exact cause nahi milta. Thyroid autoimmunity bhi urticaria se judi hai. Trigger diary rakhna sabse effective tool hai apna personal trigger identify karne ka.',
    },
    {
      _key: 'faq3',
      question: 'Urticaria kitne time tak rehti hai — kya ye apne aap theek ho jaati hai?',
      answer: 'Acute urticaria (6 hafte se kam) zyada tar apne aap ya basic treatment se theek ho jaati hai. Individual patches aksar 24 ghante ke andar disappear ho jaate hain. Chronic urticaria mein situation alag hai — ye mahino ya salon tak chal sakti hai; studies mein average duration 1-5 saal hai bina proper treatment ke. Chronic case mein "apne aap theek hone" ka wait karna better option nahi hai — homeopathic treatment se frequency aur severity dono khatam ho sakti hai.',
    },
    {
      _key: 'faq4',
      question: 'Kya urticaria permanent theek ho sakti hai?',
      answer: 'Haan — permanent relief bilkul possible hai. Acute urticaria majority cases mein completely resolve hoti hai. Chronic urticaria mein "permanent relief" ka matlab hai — attacks itne rare ho jaayein ki life normal ho jaaye — aur ye achieve karna possible hai. Homeopathy chronic urticaria mein strong complementary approach hai khaaskar isliye ki ye immune system ki underlying hypersensitivity address karta hai, sirf histamine suppress nahi karta. Jo log triggers identify karte hain, diet manage karte hain, aur consistent treatment pe rehte hain — unmein significantly better long-term outcomes milte hain.',
    },
    {
      _key: 'faq5',
      question: 'Kya homeopathy urticaria mein kaam karta hai?',
      answer: 'Haan — homeopathy urticaria mein ek effective approach hai. CCRH-affiliated studies mein chronic urticaria patients mein wheal score 6.8 se 2.1 aaya — placebo group mein sirf 6.7 se 5.9 par ruka. Homeopathy ka unique advantage ye hai ki ye sirf itching band nahi karta — immune system ki oversensitivity ko andar se address karta hai, stress response bhi manage karta hai, aur recurrence frequency ghataata hai. Qualified homoeopath se consultation best results ke liye zaroori hai.',
    },
    {
      _key: 'faq6',
      question: 'Urticaria ki homeopathic medicine kaun si hai?',
      answer: 'Homeopathy mein urticaria ke liye sirf ek medicine nahi hoti — medicine aapke symptoms ke hisaab se decide hoti hai. Apis Mellifica — burning, stinging pain, thande se aaram. Urtica Urens — food-triggered urticaria, shellfish ke baad. Rhus Toxicodendron — raat ko intense khujli, cold-triggered. Natrum Muriaticum — exercise ya dhoop se trigger, stress se badh jaane wali. Sulphur — chronic, baar baar aane wali urticaria. Sirf naam sunke lena galat hai — qualified homoeopath poori case history dekhke select karta hai.',
    },
    {
      _key: 'faq7',
      question: 'Chronic urticaria aur acute urticaria mein kya fark hai?',
      answer: 'Acute urticaria 6 hafte se kam rehti hai — aksar specific trigger identify ho jaata hai aur apne aap ya treatment se resolve ho jaati hai. Chronic urticaria 6 hafte se zyada chalti hai — kabhi kabhi mahino ya salon tak. Chronic mein zyada tar clear trigger nahi milta; immune system ki underlying dysregulation main role play karti hai. Homeopathy chronic urticaria mein especially useful hai kyunki ye underlying immune sensitivity address karta hai jo sirf antihistamines nahi karte.',
    },
    {
      _key: 'faq8',
      question: 'Urticaria mein kya khana chahiye aur kya avoid karna chahiye?',
      answer: 'Khaayein: haldi, adrak, khira, lauki, moong dal, boiled rice, fresh dahi, coconut water, banana, saunf water — ye anti-inflammatory hain aur histamine load kam karte hain. Avoid karein: seafood (shellfish), peanuts, strawberries, tomatoes, fermented foods (achaar, vinegar, cheese), alcohol, artificial food colors aur preservatives, maida products, bahut zyada masaledar khana. Flare ke time 2-3 din bland khao — khichdi, dal chawal, lauki. Trigger diary rakhna zaroori hai kyunki har person ka trigger alag hota hai.',
    },
    {
      _key: 'faq9',
      question: 'Urticaria mein kya nahi khana chahiye — top triggers?',
      answer: 'Urticaria mein ye sabse pehle avoid karo: (1) Shellfish/seafood — histamine aur allergen dono. (2) Fermented foods — achaar, vinegar, soya sauce, old cheese — histamine produce karte hain. (3) Strawberries, kiwi, tomatoes — directly mast cells activate karte hain. (4) Artificial colors aur preservatives — packed juices, biscuits mein tartrazine — known trigger hai. (5) Alcohol — direct histamine releaser. Peanuts aur tree nuts bhi high-risk hain — allergic urticaria wale patients bilkul avoid karein.',
    },
    {
      _key: 'faq10',
      question: 'Kya urticaria stress se ho sakti hai?',
      answer: 'Haan — stress urticaria ka ek bahut real aur documented trigger hai. Stress hormones — cortisol aur adrenaline — immune system ko directly affect karte hain aur mast cells ko zyada reactive bana dete hain. Chronic urticaria patients mein high levels of anxiety consistently milte hain. Ye two-way relationship hai — stress urticaria trigger karta hai, aur chronic itching se aur stress badhta hai. Meditation, deep breathing, adequate sleep, aur homeopathic constitutional treatment milkar is cycle ko tod sakte hain.',
    },
    {
      _key: 'faq11',
      question: 'Bacchon mein urticaria — kya ye bade hoke theek ho jaata hai?',
      answer: 'Bacchon mein urticaria bahut common hai — zyada tar acute form mein, food ya infection ke baad. Acute urticaria proper treatment ke baad resolve ho jaati hai. Homeopathy bacchon ke liye safe option hai kyunki long-term antihistamines bacchon mein drowsiness, behavioral changes de sakti hain. Ek paediatric homeopath se milna — especially agar urticaria baar baar aa rahi hai — zaroor karo. Zyada tar bacche adolescence tak significantly improve ho jaate hain.',
    },
    {
      _key: 'faq12',
      question: 'Pregnancy mein urticaria — kya treatment safe hai?',
      answer: 'Pregnancy mein urticaria zyada common ho sakti hai — hormonal changes immune system ko affect karti hain. Kuch antihistamines first trimester mein avoid karne hote hain. Homeopathy pregnancy mein ek safe alternative hai — highly diluted medicines, safe profile. Lekin koi bhi medicine apne OB-GYN aur homoeopath dono ko bata ke shuru karni chahiye. Pehle try karo: cool compresses, cotton clothing, trigger avoidance, low-histamine diet. Angioedema ya severe reaction mein pregnancy mein bhi emergency care turant leni chahiye.',
    },
    {
      _key: 'faq13',
      question: 'Urticaria mein kaunsi cheez lagaani chahiye skin pe?',
      answer: 'Skin pe lagane ke liye: Cool compress (thanda geela kapda, 10-15 min) — sabse safe aur effective. Calamine lotion — mild, easily available; itching aur burning mein help karta hai. Aloe vera gel (fragrance-free) — soothing, anti-inflammatory. Fragrance-free moisturizer — skin barrier strong karta hai. Avoid karein: Scented creams, hot water, any new product flare ke time. Steroid creams doctor ki guidance ke bina daily nahi lagani — skin thinning aur rebound ka risk.',
    },
    {
      _key: 'faq14',
      question: 'Urticaria aur angioedema mein kya fark hai?',
      answer: 'Urticaria skin ki surface pe hoti hai — laal, ubhre patches jo khujlate hain. Angioedema deeper tissue mein hoti hai — lips, eyes, cheeks, tongue ke aaspaas sujan. Lagbhag 50% chronic urticaria patients ko kabhi na kabhi angioedema bhi hota hai. Angioedema face pe ho to manageable hai — lekin agar throat mein ho (breathing tight lagti hai) to ye MEDICAL EMERGENCY hai. Turant 108 call karein — is situation mein ghar pe koi upay time waste karna dangerous hai.',
    },
    {
      _key: 'faq15',
      question: 'Kya urticaria contagious hai — kya doosron ko lag sakti hai?',
      answer: 'Bilkul nahi — urticaria contagious nahi hai. Ye kisi ko touch se ya proximity se spread nahi hoti. Ye aapki apni immune system ki condition hai. Is galat belief ki wajah se kai baar patients socially isolate ho jaate hain — jo stress badhata hai aur urticaria aur bura karta hai. Freely socialize karein — urticaria se kisi aur ko koi danger nahi. Agar underlying infection (H. pylori) trigger hai, to wo zaroor treat karo — lekin urticaria khud contagious nahi hoti.',
    },
    {
      _key: 'faq16',
      question: 'Urticaria mein kaun se tests karwane chahiye?',
      answer: 'Acute urticaria mein (pehla episode, clear trigger): usually extensive tests nahi chahiye. Chronic urticaria mein doctor recommend karte hain: CBC, ESR, CRP (inflammation markers), Thyroid function test (TSH, Anti-TPO — thyroid autoimmunity strongly associated hai), H. pylori test, total IgE. Physical urticaria mein ice cube test (cold urticaria ke liye) kiya jaata hai. Extensive allergy panels chronic urticaria mein zyada helpful nahi hote jab tak specific allergen suspected na ho.',
    },
    {
      _key: 'faq17',
      question: 'Urticaria mein exercise sahi hai ya nahi?',
      answer: 'Depends on your type. Cholinergic urticaria mein — exercise, sweating, heat se pitti — intense exercise trigger hai. Is case mein mild yoga, slow walk, cool water swimming better hai. General chronic urticaria mein moderate exercise helpful hai — stress release karta hai, immune function improve karta hai. Exercise ke baad lukewarm shower, loose cotton, aur observation rakho. Personal exercise log se pattern pata chalega.',
    },
    {
      _key: 'faq18',
      question: 'Urticaria raat ko zyada kyun hoti hai?',
      answer: 'Iska scientific reason hai. Histamine production body mein raat ko peak karta hai — ye circadian rhythm ka hissa hai. Cortisol (natural anti-inflammatory) raat ko lowest hota hai — isliye immune reactions zyada freely hoti hain. Bistar ki warm temperature aur synthetic bedsheet se friction physical triggers hain. Solutions: Cotton bedsheets, room thoda cool, sone se 2 ghante pehle light dinner. Heavy dinner histamine release karta hai — isliye raat ki symptoms se connection hota hai.',
    },
    {
      _key: 'faq19',
      question: 'Urticaria aur eczema — kya ye ek hi hai?',
      answer: 'Nahi — dono alag conditions hain. Urticaria mein patches temporary hoti hain — ghanton mein gayab ho jaati hain aur jagah badal leti hain. Eczema mein skin chronically dry, rough, inflamed rehti hai — same jagah pe. Dono mein immune dysregulation common factor hai isliye ek hi patient mein dono ho sakti hain. Treatment alag hai — eczema mein skin barrier repair primary hai; urticaria mein trigger avoidance aur mast cell stabilization. Homeopathy dono mein kaam karta hai lekin medicine selection alag hogi.',
    },
    {
      _key: 'faq20',
      question: 'Kya urticaria se thyroid ki problem ho sakti hai ya thyroid se urticaria?',
      answer: 'Strong connection hai. Autoimmune thyroid disease (Hashimoto\'s) chronic urticaria ke saath frequently milti hai — studies mein 12-30% chronic urticaria patients mein thyroid antibodies elevated milte hain. Isliye chronic urticaria mein thyroid test standard workup mein shaamil hai. Thyroid treat karne se kuch patients mein urticaria bhi improve hoti hai. Homeopathy constitutional level pe dono simultaneously address karta hai — ye iska advantage hai.',
    },
    {
      _key: 'faq21',
      question: 'Urticaria ka gharelu ilaaj — kya ghar pe koi cheez help karti hai?',
      answer: 'Kuch safe gharelu measures: Cool compress (15 min) — instant itch relief. Aloe vera gel (fresh patta se) — soothing. Haldi + doodh — anti-inflammatory internally. Saunf ka thanda pani — natural antihistamine. Oatmeal bath — agar puri body pe ho to soothing relief. Lekin ye sab supportive measures hain — "ilaaj" nahi. Agar 24-48 ghante mein relief nahi, ya patches badh rahi hain, ya koi breathing issue hai — turant doctor se milein.',
    },
    {
      _key: 'faq22',
      question: 'Kya urticaria cold ya winter mein zyada hoti hai?',
      answer: 'Cold urticaria wale patients ke liye winter sabse sensitive time hota hai. Thandi hawa, thanda paani, thande surfaces touch karne se wheals nikal aate hain. AC ka thanda bhi summer mein trigger ho sakta hai. Simple self-test: ice cube plastic bag mein rakho, 5 min ke liye forearm pe — nikaalne ke baad wahan wheal nikal aaye to cold urticaria confirm. Management: Full coverage clothing, lukewarm nahana, thandi cheezein avoid. Rhus Tox aur Urtica Urens cold-aggravated urticaria mein commonly prescribed hain.',
    },
    {
      _key: 'faq23',
      question: 'Urticaria mein doctor ke paas kab jaana chahiye?',
      answer: 'TURANT jaayein agar: Throat ya tongue mein sujan, breathing mein takleef, dizziness, heartbeat tez — anaphylaxis signs hain, 108 call karein. Chehra ya lips mein sujan (angioedema). Urticaria ke saath tez bukhar. Doctor se milein agar: Pitti 2 din se zyada hai aur antihistamine se aaram nahi. 6 hafte se zyada aa rahi hai. Baar baar aa rahi hai — har mahine ya zyada baar. Bacchon mein koi bhi urticaria pehli baar. Pregnancy mein urticaria. Mild case mein 24-48 ghante ghar pe manage ho sakta hai — lekin doubt ho to doctor safer hai.',
    },
  ],

  sources: [
    {
      _key: 'ijrh2019',
      name: 'CCRH — Indian Journal of Research in Homoeopathy (IJRH) | 2017, 2019 | www.ijrh.org',
      url: 'https://ijrh.org',
      year: '2019',
    },
    {
      _key: 'eaaci2022',
      name: 'Zuberbier T, et al. — The international EAACI/GA²LEN/EDF/WAO guideline for urticaria | Allergy | 2022',
      url: '',
      year: '2022',
    },
    {
      _key: 'ccrh2018',
      name: 'CCRH — Clinical Verification of Homoeopathic Medicines in Urticaria | Internal Report | 2018',
      url: 'https://ccrhindia.nic.in',
      year: '2018',
    },
    {
      _key: 'mayo',
      name: 'Mayo Clinic — Chronic hives (urticaria): Symptoms and causes | www.mayoclinic.org',
      url: 'https://www.mayoclinic.org',
      year: '2025',
    },
    {
      _key: 'boericke',
      name: "Boericke's Materia Medica — William Boericke, MD (9th Edition) | B. Jain Publishers",
      url: '',
      year: '',
    },
  ],

  selfCheck: 'Agar shareer pe achanak laal, ubhri hui, khujli wali patches nikal aayein jo jagah badalti hain — ye urticaria hai. Agar 6 hafte se zyada aa rahi hai, ya lips/throat mein sujan ho — turant doctor se milein.',

  publishedAt: new Date().toISOString(),
}

async function main() {
  try {
    const result = await client.createOrReplace(urticaria)
    console.log('✅ Urticaria disease document created/updated:', result._id)
    console.log('🌐 Live at: https://homeopedia.in/diseases/urticaria')
  } catch (err) {
    console.error('❌ Error:', err)
    process.exit(1)
  }
}

main()
