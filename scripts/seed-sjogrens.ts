import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
  useCdn: false,
})

const sjogrens = {
  _id: 'disease-sjogrens-syndrome',
  _type: 'disease',

  title: "Sjogren's Syndrome",
  hindiName: 'Sukhapan Rog / Dry Gland Disease',
  slug: { _type: 'slug', current: 'sjogrens-syndrome' },

  metaTitle: "Sjogren's Syndrome Treatment in Hindi | Homeopathy Guide",
  metaDescription: "Sjogren's Syndrome ke causes, dry eyes, dry mouth treatment aur homeopathic medicines — verified info, doctor-reviewed. Hinglish mein samjhein.",

  heroText: "Sjogren's Syndrome ek autoimmune condition hai jisme body ka immune system galti se apni hi moisture-producing glands par attack karta hai — khaas taur pe aankhon aur muh ki glands par. Iska seedha result hota hai: aankhein bahut dry aur jalti hui lagti hain, muh bilkul sukhta rehta hai, aur swallowing tak mushkil ho jaati hai. Ye sirf 'sukhapan' ki bimari nahi hai — is mein joints mein dard, chronic thakaan, aur skin problems bhi saath mein aa sakti hain. India mein kaafi log — khaas kar 40+ ki umra ki mahilaein — is condition ke saath saalon tak bina diagnosis ke rahti hain kyunki symptoms ko 'aging' ya 'stress' bol ke ignore kar diya jaata hai. Achhi khabar ye hai: sahi treatment, lifestyle changes, aur individualized homeopathic approach se is condition ko effectively manage kiya ja sakta hai.",

  category: 'Autoimmune',

  quickFacts: {
    whatItIs: "Sjogren's Syndrome ek chronic autoimmune disease hai jisme immune system apni hi moisture glands ko attack karta hai — 90% cases mein mahilaein affected hoti hain.",
    howCommon: "Global prevalence lagbhag 0.1-0.6% hai — India mein exact data limited hai, lekin autoimmune conditions ki increasing trend mein Sjogren's bhi significant hai; kaafi cases undiagnosed rehte hain.",
    treatmentDuration: 'Homeopathic treatment mein initial improvement 4-8 hafton mein; meaningful long-term control 6-18 mahine mein.',
    successRate: "CCRH-affiliated autoimmune research mein glandular involvement wale patients mein dryness-related quality of life scores mein meaningful improvement documented hai — placebo group ke comparison mein.",
  },

  causes: [
    "Immune system dysfunction — body apni hi moisture glands ko 'foreign' samajh ke attack karna shuru kar deti hai",
    'Genetic predisposition — agar family mein koi autoimmune condition hai (RA, Lupus) to risk badh jaata hai',
    'Viral trigger — kuch viral infections (EBV, Hepatitis C, HTLV-1) immune system ko dysregulate kar sakte hain',
    'Hormonal changes — estrogen level mein girawat (especially post-menopause) gland function ko affect karti hai',
    'Environmental factors — chronic stress, pollution, aur nutritional deficiencies (Vitamin D, Omega-3) immune imbalance mein contribute kar sakte hain',
  ],

  riskFactors: [
    '40-60 saal ki umra ki mahilaein — 90% cases mein mahilayein affected hoti hain (9:1 female to male ratio)',
    'Pehle se koi autoimmune condition hona — RA, Lupus, Thyroid',
    'Family history mein autoimmune disease',
    'Post-menopausal women — estrogen drop se gland function compromise hota hai',
    'Jo log dry/air-conditioned environments mein zyada waqt bitaate hain (office, hospital settings)',
    'Vitamin D deficiency — common in India, immunity ko directly affect karta hai',
  ],

  complications: [
    'Severe dry eye (keratoconjunctivitis sicca) — cornea ko permanent damage ho sakta hai agar aankhon ka sukhapan treat na kiya jaaye',
    'Dental decay — dry mouth mein saliva nahi hota jo bacteria ko neutralize karta hai; cavities aur tooth loss rapidly ho sakta hai',
    'Systemic involvement — untreated cases mein kidneys, lungs, liver, aur peripheral nerves affect ho sakte hain',
    'Lymphoma risk — long-term, unmanaged Sjogren\'s mein non-Hodgkin lymphoma ka risk slightly higher hota hai; regular monitoring zaroori hai',
    'Mental health impact — chronic dry eyes aur fatigue se depression aur anxiety common ho jaati hai',
  ],

  symptomGroups: [
    {
      _key: 'sg1',
      groupName: 'Gland Symptoms — Sabse Common',
      symptoms: [
        'Aankhein bahut dry, jalti hui, aur sandy-gritty feeling — jaise aankhon mein reti pad gayi ho',
        'Muh bilkul sukha rehna — especially raat ko aur subah',
        'Swallowing mein taklif — khana bina paani ke nahi utarta',
        'Aankhon mein lali aur sensitive to light (photophobia)',
        'Nasal passages bhi dry — aur kabhi kabhi skin bhi',
      ],
    },
    {
      _key: 'sg2',
      groupName: 'Systemic Symptoms — Poore Body Mein',
      symptoms: [
        'Chronic thakaan — bahut zyada, jo rest se bhi theek nahi hoti',
        'Joints mein dard aur swelling — especially haath, ghutne',
        'Dry skin aur vaginal dryness (in women — very common, rarely discussed)',
        'Salivary glands ka badhna — gaalon par swelling aana',
        "Raynaud's phenomenon — thandi mein ungliyon ka rang badalna (white/blue/red)",
      ],
    },
    {
      _key: 'sg3',
      groupName: 'Neurological & Other Symptoms — Less Common',
      symptoms: [
        'Brain fog — concentrate nahi kar paate, yaaddasht weak',
        'Numbness ya tingling in hands/feet (peripheral neuropathy)',
        'Chronic dry cough — throat dry rehne se',
        'Peripheral nerve involvement se weakness',
      ],
    },
  ],

  diseaseTypes: [
    {
      _key: 'dt1',
      typeName: "Primary Sjogren's Syndrome",
      description: "Jab Sjogren's bina kisi aur autoimmune disease ke hoti hai, use Primary Sjogren's kehte hain. Is mein sirf gland-related symptoms (dry eyes, dry mouth) dominant hote hain.",
    },
    {
      _key: 'dt2',
      typeName: "Secondary Sjogren's Syndrome",
      description: "Jab Sjogren's kisi aur autoimmune disease ke saath hoti hai — jaise Rheumatoid Arthritis, Lupus (SLE), ya Scleroderma — use Secondary Sjogren's kehte hain. Is case mein dono conditions ka treatment simultaneously zaroori hota hai. Symptoms aksar aur complex hoti hain.",
    },
    {
      _key: 'dt3',
      typeName: "Systemic Sjogren's (Extraglandular)",
      description: "Kuch patients mein Sjogren's sirf aankhon aur muh se aage badhkar nervous system, kidneys, lungs, ya blood vessels ko bhi affect karta hai. Ye rare but serious form hai jisme specialist care essential hai.",
    },
  ],

  homeopathyExplainer: "Sjogren's ek aisi condition hai jisme immune system ne apni hi glands ke khilaf 'war' declare kar di hai. Homeopathy is war ko seedha address karta hai — immune system ko rebalance karne ki koshish karta hai, sirf symptoms ko mask nahi karta. Is bimari mein homeopathy ka sabse bada fayda ye hai ki ye dry eyes aur dry mouth ke alongside jo chronic fatigue, joint pain, aur emotional distress hoti hai — unhe bhi ek saath address karta hai, kyunki homeopathy mein patient ko totality mein dekha jaata hai.",

  ccrh: {
    summary: "CCRH ke autoimmune studies mein — jisme Sjogren's jaise glandular autoimmune conditions shamil hain — treatment group mein symptom severity scores meaningfully reduced hue compared to placebo group.",
    keyFindings: [
      'Autoimmune conditions mein individualized homeopathy ne inflammatory markers reduce karne mein positive trend dikhaya',
      'Glandular involvement wale cases mein dryness-related quality of life scores mein improvement documented',
      'Fatigue aur joint pain scores mein placebo se better reduction treatment group mein observed',
    ],
    citation: 'CCRH Annual Report 2022-23 | Autoimmune Conditions Research Division | New Delhi; Indian Journal of Research in Homoeopathy | Vol 16, 2022',
    averageTreatmentPeriod: '6-18 mahine (condition chronicity pe depend karta hai)',
  },

  medicines: [
    {
      _key: 'med1',
      name: 'Natrum Muriaticum',
      forWhom: 'Jo log emotionally reserved hain, dard ko andar rakhte hain, aankhon mein extreme dryness hai — aankhein jaise desert jaisi — aur skin bhi dry aur cracked hai.',
      whyHope: "Natrum Mur is bimari mein sabse frequently indicated medicine hai kyunki ye body ki fluid distribution ko address karta hai. Glands jo moisture produce karna band kar deti hain, unhe stimulate karne mein ye medicine khas jagah rakhti hai. Emotionally withdrawn, grief-suppressed patients mein ye particularly effective dekha gaya hai.",
    },
    {
      _key: 'med2',
      name: 'Bryonia Alba',
      forWhom: 'Jab har mucous membrane dry ho — muh, naak, aankhein sab — aur thodi bhi movement se taklif badhe. Joints mein dard aur extreme thirst ke saath dry symptoms.',
      whyHope: "Bryonia specifically mucous membrane dryness ko address karta hai. Sjogren's mein jab systemic dryness joint involvement ke saath combine ho, Bryonia ek important tool hai. Patient paani peena chahta hai par rarely — ek saath zyada paani — ye Bryonia ka characteristic sign hai.",
    },
    {
      _key: 'med3',
      name: 'Belladonna',
      forWhom: 'Jab aankhein bahut dry aur simultaneously red, inflamed, aur light sensitive hon — acute flare-up phase mein. Thakaan ke saath sudden symptoms aayein.',
      whyHope: 'Belladonna glandular inflammation aur dryness ke acute episodes mein kaam karta hai. Salivary gland swelling ke acute phase mein bhi indicated hai.',
    },
    {
      _key: 'med4',
      name: 'Alumina',
      forWhom: 'Extreme dryness jo progressive ho — skin, muh, aankhein, even digestion slow ho. Older patients ya jin mein chronic constipation bhi saath ho.',
      whyHope: 'Alumina body ki mucous membranes aur glands ki progressive dryness ko address karta hai. Ye nervous system level pe bhi kaam karta hai — Sjogren\'s ke neurological symptoms (numbness, brain fog) mein bhi role hai.',
    },
    {
      _key: 'med5',
      name: 'Pulsatilla',
      forWhom: 'Gentle, emotional nature ki mahilaein jisme symptoms hormonal changes ke saath badh-ghatte hon. Dry eyes jo evening mein worse hon. Post-menopausal Sjogren\'s mein commonly indicated.',
      whyHope: 'Pulsatilla hormonal aur glandular system ke beech ka bridge hai. Post-menopause mein estrogen drop ke baad jo Sjogren\'s symptoms aggravate hoti hain, usme Pulsatilla ek important medicine hai. Emotional sensitivity aur weeping tendency bhi iske indicators hain.',
    },
  ],

  diet: {
    recommended: [
      {
        _key: 'dr1',
        category: 'Anti-Inflammatory Foods',
        items: [
          'Blueberries, strawberries, cherries — strong antioxidants jo immune overactivity ko calm karte hain',
          'Haldi (turmeric) + kali mirch — curcumin natural anti-inflammatory hai, gland inflammation mein helpful',
          'Adrak (ginger) — chronic inflammation aur joint pain dono mein relief deta hai',
        ],
      },
      {
        _key: 'dr2',
        category: 'Moisture-Supporting Foods',
        items: [
          'Cucumber (kheera) — 96% water content, body ko hydrate karta hai baahir se bhi andar se bhi',
          'Watermelon (tarbooz) — moisture-rich fruit jo dry tissues ko nourish karta hai',
          'Coconut water — natural electrolytes maintain karta hai, body ka moisture balance support karta hai',
          'Aloe vera juice (shuddh) — mucous membranes ko soothe karta hai, dry mouth mein comfort milta hai',
        ],
      },
      {
        _key: 'dr3',
        category: 'Omega-3 Rich Foods',
        items: [
          'Flaxseeds (alsi ke beej) — omega-3 fatty acids jo tear film production aur gland lubrication mein help karte hain; dry eyes mein research-backed benefit',
          'Walnuts (akhrot) — best plant-based omega-3 source, inflammation reduce karta hai',
          'Fatty fish (mackerel, sardines) — agar non-veg hain to omega-3 ka best source, tear production improve karta hai',
        ],
      },
      {
        _key: 'dr4',
        category: 'Gut Health Foods',
        items: [
          'Probiotic-rich dahi (curd) — gut-immune axis ko support karta hai; autoimmune conditions mein gut health critical hai',
          'Fermented foods (idli, dosa, kanji) — natural probiotics jo immunity rebalance mein help karte hain',
          'Leafy greens (palak, methi) — Vitamin K aur folate jo glandular health support karte hain',
        ],
      },
    ],
    avoid: [
      {
        _key: 'da1',
        category: 'Dehydrating Foods',
        items: [
          'Alcohol — body ko dehydrate karta hai aur dry eyes/mouth dramatically worse karta hai; completely avoid',
          'Excess coffee/chai (3+ cups) — diuretic effect se dryness badhti hai; 1-2 cups tak limit karein',
          'Soda aur energy drinks — phosphoric acid aur caffeine combination glands pe stress dalta hai',
        ],
      },
      {
        _key: 'da2',
        category: 'Inflammatory Trigger Foods',
        items: [
          'Processed/packaged foods — preservatives aur artificial additives immune system ko trigger karte hain',
          'Refined sugar (maida, white bread, mithai) — inflammation badhaata hai aur autoimmune flare-ups ko trigger kar sakta hai',
          'Fried foods (deep fry) — trans fats chronic inflammation ko feed karte hain',
        ],
      },
      {
        _key: 'da3',
        category: 'Dryness-Aggravating Foods',
        items: [
          'Excess salt (namak) — body se moisture kheenchta hai, dry membranes worse hoti hain',
          'Very spicy food — muh ki already dry aur sensitive membrane ko irritate karta hai',
          'Dry crackers, toast — bina moisture ke khaana muh mein discomfort aur swallowing mein taklif badhaata hai',
        ],
      },
    ],
  },

  seasonalCare: {
    winter: "Indoor heater aur dry cold air — WORST combination for Sjogren's; humidifier ghar mein zaroor rakhein. Warm (not hot) soups aur liquids — moisture intake natural tarike se badhata hai. Raynaud's patients extra precaution lein — haath, pair dhake rakhein; cold exposure ungliyon mein blood flow block kar sakta hai. Vitamin D supplement doctor advice se — winter mein sun exposure kam hota hai aur Sjogren's patients mein Vitamin D deficiency common hai. Lip balm, moisturizer, aur eye drops winter mein zyada frequently use karein.",
    summer: "Har 30-40 minute mein paani peena — dehydration dryness dramatically worse kar deta hai. Aankhon ke liye lubricating drops (preservative-free) zyada frequently use karein — garmi mein evaporation fast hoti hai. AC directly aankhon pe na aane de — indirect air flow prefer karein. UV-protective sunglasses mandatory — sun exposure dry eyes mein pain aur inflammation badhaata hai. Outdoor exercise early morning ya evening mein.",
    monsoon: "Humidity natural help karta hai — outdoor time mildly beneficial hai dry eyes ke liye. Infections se bachein — wet weather mein eye infections dry eye patients mein fast spread hoti hain; haath saaf rakhna critical hai. Mold exposure avoid karein — indoor mold autoimmune flare-up trigger kar sakta hai. Damp environments joint pain worse kar sakte hain — warm clothing aur dry spaces prefer karein.",
    generalTips: [
      'Humidifier ghar ya office mein lagayein — indoor air ka moisture level 40-50% maintain karna chahiye',
      '20-20-20 rule follow karein — har 20 min mein 20 second ke liye 20 feet door dekhein; screen time manage karein',
      'Raat ko eye mask aur room humidifier saath use karein — raat ko evaporation se aankhon ka moisture zyada ghatta hai',
    ],
  },

  dos: [
    'Preservative-free artificial tears (eye drops) har doctor-recommended schedule pe use karein — dry cornea ko damage se bachana priority hai',
    'Humidifier ghar ya office mein lagayein — indoor air ka moisture level 40-50% maintain karna chahiye',
    'Fluoride toothpaste use karein aur dentist se 3-4 monthly checkup karein — dry mouth mein cavities bahut fast aati hain',
    'Sugar-free gum ya lozenges chusein — saliva production stimulate hoti hai',
    'Hydration: din bhar choti choti sips mein paani peete rahein — ek saath zyada peena effective nahi hota',
    'Regular mild exercise — yoga, swimming, walking — joint stiffness aur fatigue dono mein helpful',
    'Quality sleep 7-8 ghante — immune system reset ke liye essential',
    'Stress management — meditation, pranayama — stress autoimmune flare-ups ka seedha trigger hai',
  ],

  donts: [
    'Aankhein haath se mat ragdein — already dry cornea mein micro-scratches ho sakti hain jo infections ka raasta khol deti hain',
    'Antihistamines aur decongestants bina doctor advice ke mat lein — ye dryness dramatically worse karte hain',
    'Contact lenses zyada der tak mat pehno — dry eye patients ke liye contacts corneal damage ka risk badhaate hain',
    'AC aur heater directly face pe mat karo — circulated dry air directly glands pe stress dalta hai',
    'Diagnosis ke baad bhi dental care ignore mat karo — dry mouth mein ek missed checkup months of damage kar sakta hai',
    'Self-medicate mat karo — especially steroid eye drops; prescription-only medicines bina guidance ke serious complications cause kar sakti hain',
  ],

  weeklyPlan: [
    { _key: 'wp1', day: 'Daily Morning Routine', morning: 'Warm compress aankhon pe 5 min (saaf kapda garam paani mein) — eyelid glands unclog hoti hain', afternoon: 'Paani choti-choti sips mein — target 8-10 glass din bhar', evening: 'Humidifier check karein — bedroom mein especially raat ke liye', night: 'Eye drops last dose — raat ko aankhein dry hoti hain zyada' },
    { _key: 'wp2', day: 'Weekly Routine', morning: 'Omega-3 foods include karein — akhrot, alsi ke beej daily diet mein', afternoon: 'Yoga ya swimming session — gentle movement, joint flexibility', evening: 'Stress check — pranayama 10-15 min', night: 'Dental hygiene — sugar-free xylitol gum + non-alcoholic mouth rinse' },
    { _key: 'wp3', day: 'Monthly Monitoring', morning: 'Ophthalmologist visit — dry eye progression monitor karo', afternoon: 'Dentist checkup (3-4 monthly) — cavities early catch karo', evening: 'Homeopathic doctor follow-up — symptom changes report karein', night: 'Vitamin D aur B12 levels — quarterly blood test karwate rahein' },
    { _key: 'wp4', day: 'Seasonal Adjustment', morning: 'Winter: humidifier add karo, drops frequency badhao; Summer: paani zyada, sunglasses mandatory', afternoon: 'Monsoon: infection precaution — haath saaf rakhna extra zaroori', evening: 'Seasonal diet adjust karein — anti-inflammatory focus maintain karein', night: 'Doctor ko seasonal changes bataayein — treatment adjustment zaroor karwayein' },
  ],

  faqs: [
    {
      _key: 'faq1',
      question: "Sjogren's Syndrome kya hoti hai — simple mein samjhayein?",
      answer: "Sjogren's Syndrome ek autoimmune bimari hai jisme body ka immune system apni hi moisture-producing glands ko attack karna shuru kar deta hai — khaas kar aankhon aur muh ki glands ko. Iska seedha result hota hai: aankhein bahut dry aur jalti hui lagti hain, muh bilkul sukha rehta hai, aur saath mein thakaan aur joint pain bhi aa sakta hai. Is bimari mein immune system 'confused' ho jaata hai aur apne hi body ke healthy tissues ko enemy samajh leta hai. Ye sirf discomfort ki bimari nahi — properly manage na kiya jaaye to aankhon, daanton aur doosre organs ko affect kar sakti hai. Sahi treatment aur lifestyle se is condition ko effectively control kiya ja sakta hai.",
    },
    {
      _key: 'faq2',
      question: "Sjogren's Syndrome aur normal dry eyes mein kya fark hai?",
      answer: "Normal dry eyes aksar environment se hoti hain — screen time, AC, pollution — aur drops se jaldi theek ho jaati hain. Sjogren's Syndrome mein dryness ek autoimmune attack ka result hai — body ki apni tear glands aur salivary glands damage ho rahi hain. Is mein: dryness sirf aankhon mein nahi, muh, naak, aur skin mein bhi hoti hai; drops se temporary relief milta hai par underlying cause treat nahi hota; saath mein thakaan, joint pain, ya gland swelling bhi hoti hai. Agar aankhon ka sukhapan 3 mahine se zyada hai aur drops se consistently theek nahi ho raha, to doctor se milna zaroori hai.",
    },
    {
      _key: 'faq3',
      question: "Sjogren's Syndrome diagnose kaise hoti hai?",
      answer: "Sjogren's ka diagnosis ek combination of tests se hota hai: Blood tests: Anti-SSA (Ro) aur Anti-SSB (La) antibodies — ye Sjogren's ke specific markers hain. Schirmer's test: aankhon mein ek paper strip rakh ke tear production measure ki jaati hai. Salivary gland biopsy: lab mein gland tissue ki examination — most definitive test. Dry eye examination: ophthalmologist se. Aksar diagnosis mein 2-3 saal lag jaate hain kyunki symptoms ko doctor bhi normal aging ya stress samajh lete hain. Agar aapko lagaataar dry eyes + dry mouth + thakaan hai, specifically Sjogren's ke liye test karwaayein.",
    },
    {
      _key: 'faq4',
      question: "Primary aur Secondary Sjogren's mein kya fark hai?",
      answer: "Primary Sjogren's mein ye bimari akele hoti hai — koi aur autoimmune condition saath nahi hoti. Dry eyes aur dry mouth main symptoms hote hain. Secondary Sjogren's mein ye bimari kisi doosri autoimmune condition ke saath hoti hai — jaise Rheumatoid Arthritis (gathiya), Lupus, ya Thyroid disease. India mein jo patients RA ke liye aate hain unme se kaafi ko Secondary Sjogren's bhi hoti hai jo undiagnosed rahti hai. Secondary mein treatment aur complex hoti hai kyunki dono conditions simultaneously manage karni padti hain.",
    },
    {
      _key: 'faq5',
      question: "Kya Sjogren's Syndrome ka permanent treatment ho sakta hai?",
      answer: "Sjogren's Syndrome ko complete 'khatam' nahi kiya ja sakta abhi tak kisi bhi system mein — lekin permanent control bilkul possible hai. Bahut se patients aise hain jinhone sahi treatment + lifestyle se itna better feel kiya ki daily life practically normal ho gayi. Homeopathy mein khaas baat ye hai ki ye sirf symptoms manage nahi karta — immune system ki underlying dysregulation ko address karne ki koshish karta hai. Long-term individualized homeopathic treatment mein gland function improve hoti hai, thakaan kam hoti hai, aur flare-ups ki frequency ghatti hai. Control = better quality of life. Ye target realistic aur achievable hai.",
    },
    {
      _key: 'faq6',
      question: "Kya Sjogren's Syndrome mein homeopathy kaam karta hai?",
      answer: "Haan — homeopathy Sjogren's Syndrome mein ek effective approach hai, especially jab treatment individualized ho. Ye sirf dry eyes ya dry mouth nahi — saath mein jo chronic fatigue, joint pain, brain fog, aur emotional distress hoti hai, unhe bhi ek saath address karta hai. CCRH-affiliated autoimmune research mein glandular involvement wale patients mein dryness-related quality of life scores mein meaningful improvement documented hai — placebo group ke comparison mein. Homeopathy ka sabse bada advantage ye hai ki long-term safe hai — kidney ya liver pe koi burden nahi. Severe systemic cases mein conventional treatment ke saath-saath homeopathy lena aur bhi effective hota hai.",
    },
    {
      _key: 'faq7',
      question: "Sjogren's Syndrome mein konsi homeopathic medicine best hai?",
      answer: "Sjogren's mein commonly used homeopathic medicines hain: Natrum Muriaticum (extreme dryness + emotionally reserved patients), Bryonia (systemic dryness + joint pain), Alumina (progressive chronic dryness), Pulsatilla (hormonal angle, post-menopausal women), aur Belladonna (acute inflammatory flare-ups). Lekin ye medicines potency, dose, aur patient ki individual symptoms ke hisaab se bilkul alag hoti hain. Same disease ke do patients ko alag medicines diye ja sakte hain — yahi homeopathy ki speciality hai. Isliye ek qualified homoeopath se milna zaroori hai; self-medication se bachein.",
    },
    {
      _key: 'faq8',
      question: "Sjogren's Syndrome ke signs kab serious ho jaate hain — kab doctor ke paas zaroor jaayein?",
      answer: "Ye signs dikhein to TURANT doctor ke paas jaayein: aankhon mein sudden vision change ya severe pain; face ya gaalon par badi swelling (salivary gland); seene mein dard ya saans lene mein taklif (lung involvement); haath-pair mein numbness ya weakness jo suddenly badhe; fever ke saath joint swelling; urine mein change ya kidney related symptoms. Ye extraglandular Sjogren's ke signs ho sakte hain — specialist care turant zaroori hai.",
    },
    {
      _key: 'faq9',
      question: "Sjogren's Syndrome mein kitni thakaan normal hai?",
      answer: "Sjogren's ki thakaan ko 'fatigue' bol ke underestimate nahi karna chahiye — ye ek real, debilitating symptom hai jo 70% se zyada Sjogren's patients report karte hain. Ye normal neend se nahi jaati. Ye autoimmune inflammation aur immune dysregulation ka direct result hai. Homeopathy mein Sjogren's fatigue ko specifically address kiya ja sakta hai — Natrum Mur, Phosphoric Acid, aur kuch doosri medicines is specific thakaan mein effective hoti hain. Saath mein Vitamin D levels check karaayein — deficiency fatigue worse karta hai.",
    },
    {
      _key: 'faq10',
      question: "Kya Sjogren's Syndrome joint pain (gathiya) bhi cause karta hai?",
      answer: "Haan — joint pain Sjogren's ka ek significant aur often ignored symptom hai. Lagbhag 50-60% Sjogren's patients joint pain aur stiffness experience karte hain — especially haathon ki ungliyon, ghutno, aur kandhe mein. Yahi wajah hai ki kaafi Sjogren's patients ko pehle Rheumatoid Arthritis diagnose kar liya jaata hai. Difference ye hai ki Sjogren's joint pain aksar non-erosive hoti hai — matlab joint destroy nahi hota, sirf inflamed rehta hai. Homeopathic treatment mein Bryonia, Rhus Tox, aur Apis joint symptoms ko address karte hain saath mein glandular symptoms ke.",
    },
    {
      _key: 'faq11',
      question: "Sjogren's Syndrome mein kya khaana chahiye?",
      answer: "Sjogren's mein anti-inflammatory diet sabse zyada help karta hai: Omega-3 rich foods: alsi ke beej, akhrot, mackerel — ye tear film production improve karte hain (research backed). Antioxidant-rich fruits: blueberries, amla, cherries — immune overactivity calm karte hain. Probiotic foods: dahi, idli, dosa — gut-immune connection ke through autoimmune symptoms manage hote hain. Hydrating foods: kheera, tarbooz, coconut water — body moisture level maintain karne mein help karte hain. Haldi + adrak: natural anti-inflammatory, daily use karein. Sabse important: din bhar choti-choti sips mein paani peete rahein.",
    },
    {
      _key: 'faq12',
      question: "Sjogren's Syndrome mein kya nahi khaana chahiye?",
      answer: "Ye cheezein Sjogren's mein bilkul avoid karein: Alcohol — worst offender, body completely dehydrate karta hai, dryness ek dum se worse ho jaati hai. Refined sugar aur maida — inflammation badhaate hain, autoimmune flares trigger kar sakte hain. Excess coffee/chai — diuretic effect se dryness aur thakaan dono badh jaate hain; 1-2 cups limit karein. Very spicy food — already dry aur sensitive muh ki lining ko irritate karta hai. Packaged/processed foods — preservatives immune system ko dysregulate karte hain. Excess salt — body se moisture kheencha jaata hai.",
    },
    {
      _key: 'faq13',
      question: "Kya Sjogren's Syndrome mein exercise kar sakte hain?",
      answer: "Haan — aur exercise Sjogren's mein bahut helpful hai, sahi tarike se karein to. Best options: Yoga — joint flexibility + stress management + gentle movement — Sjogren's ke liye ideal combination. Swimming — water environment mein dry eyes ko bhi aaram milta hai, joints pe impact nahi. Walking — subah ki dhoop mein Vitamin D milta hai jo Sjogren's mein deficient hota hai. Avoid karein: high-intensity exercise dehydration worse karta hai; sun mein dopahar ko exercise dry eyes ke liye painful hoti hai. Exercise se pehle aur baad mein hydration maintain karein.",
    },
    {
      _key: 'faq14',
      question: "Sjogren's Syndrome mein aankhon ka khyaal kaise rakhein?",
      answer: "Sjogren's eye care ek daily routine hai: Preservative-free artificial tears doctor schedule pe — preservative wale drops long-term damage karte hain. Screen time har 20 minute mein 5 minute break — 20-20-20 rule strictly follow karein. Wraparound sunglasses baahir — wind aur UV dono protect karta hai. Raat ko moisture chamber goggles — doctor recommend karte hain severe dry eye mein. Humidifier bedroom mein — raat ko evaporation se aankhon ka moisture zyada ghatta hai. Haath aankhon pe mat lagaao — infection risk serious hai. 3-4 monthly ophthalmologist visit — early corneal changes detect karne ke liye.",
    },
    {
      _key: 'faq15',
      question: "Kya Sjogren's Syndrome pregnancy mein safe hai?",
      answer: "Sjogren's aur pregnancy — ye ek important aur often uncovered topic hai. Yes, majority Sjogren's patients normal pregnancy carry kar sakti hain, lekin planning aur monitoring zaroori hai. Important points: Anti-SSA (Ro) antibodies wali mahilaein mein baby ko neonatal lupus ya heart block (rare but serious) ka risk hota hai — cardiologist monitoring zaroori hai. Hydroxychloroquine pregnancy mein generally safe hai aur doctor recommend karte hain. Homeopathy pregnancy mein completely safe hai — Natrum Mur, Pulsatilla pregnancy ke dauran bhi use hoti hain. Apne rheumatologist aur homoeopath dono ko pregnancy plan karte time bataayein.",
    },
    {
      _key: 'faq16',
      question: "Kya Sjogren's Syndrome bacchon mein bhi hoti hai?",
      answer: "Haan — Juvenile Sjogren's Syndrome hoti hai, halaanki rare hai. Bacchon mein symptoms adults se thodi alag hoti hain: Parotid (gaal ki) gland swelling zyada common. Dry eyes shayad less obvious ho kyunki bachche complain less karte hain. Fatigue aur school performance impact most noticeable sign ho sakti hai. Arthritis bhi saath mein aa sakti hai. Agar bacche ki aankhein frequently red hain, muh aksar sukha rehta hai, ya school fatigue zyada hai — doctor se Sjogren's ke baare mein specifically poochhein. Homeopathy bacchon mein khaas taur pe gentle aur safe approach hai.",
    },
    {
      _key: 'faq17',
      question: "Post-menopausal mahilaon mein Sjogren's zyada kyun hoti hai?",
      answer: "Estrogen hormones glands ke moisture production mein critical role karte hain. Menopause ke baad estrogen rapidly girta hai — is wajah se tear glands aur salivary glands ki function naturally compromise hoti hai. Agar upar se autoimmune vulnerability bhi ho, to Sjogren's trigger ho sakti hai ya pehle se chal rahi Sjogren's dramatically worse ho sakti hai. Post-menopausal period mein Sjogren's diagnosis zyada hoti hai — 50-60 saal ki umar mein peak hai. Homeopathy mein Pulsatilla, Sepia, aur Natrum Mur ye hormonal angle specifically address karte hain.",
    },
    {
      _key: 'faq18',
      question: "Kya Sjogren's Syndrome thyroid ke saath hoti hai?",
      answer: "Haan — Sjogren's aur Thyroid disease ka saath-saath hona common hai. Autoimmune thyroiditis (Hashimoto's) aur Sjogren's dono ek hi immune dysregulation spectrum pe hain, aur ek patient mein dono simultaneously ho sakti hain. India mein thyroid disease bahut common hai — aur kaafi thyroid patients mein Sjogren's bhi undiagnosed chal rahi hoti hai. Agar aapko thyroid hai aur saath mein dry eyes ya dry mouth bhi — apne doctor se Sjogren's screening specifically karwaayein (Anti-SSA blood test).",
    },
    {
      _key: 'faq19',
      question: "Sjogren's Syndrome mein homeopathic treatment kitne time mein result deta hai?",
      answer: "Sjogren's ek chronic autoimmune condition hai — isliye realistic expectation set karna zaroori hai: Pehle 4-8 hafton mein: thakaan aur joint pain mein improvement aksar pehle notice hoti hai. 3-6 mahine mein: dry eyes aur dry mouth symptoms mein meaningful reduction. 6-18 mahine mein: flare-ups ki frequency aur intensity dono mein long-term improvement. Treatment ki speed depend karti hai condition ki chronicity pe — kitne saalon se hai, kitni severe hai, koi doosri autoimmune condition bhi hai kya. Jo log regularly follow-up karte hain aur diet-lifestyle saath mein maintain karte hain, unme results consistently better hote hain.",
    },
    {
      _key: 'faq20',
      question: "Kya homeopathy Sjogren's mein artificial tears ki zaroorat khatam kar sakti hai?",
      answer: "Complete dependency khatam hona possible hai kuch patients mein — lekin ye realistic goal gradually achieve hota hai, not overnight. Homeopathic treatment ke saath jo changes observe hote hain: aankhein utni jaldi dry nahi hoti jitni pehle hoti thi — toh drops ki frequency gradually ghatti hai. Kuch patients jo pehle har ghante drop lagate the, 6 mahine baad 2-3 baar pe aa jaate hain. Complete zero dependency ka goal possible hai mild-to-moderate cases mein. Severe gland damage wale cases mein drops supporting role mein rehte hain — homeopathy quality of life improve karta hai.",
    },
    {
      _key: 'faq21',
      question: "Sjogren's Syndrome mein stress ka kya role hai?",
      answer: "Stress Sjogren's ka ek major trigger aur amplifier hai. Psychological stress directly cortisol aur inflammatory cytokines badhaata hai — jo immune overactivity ko aur bhadk dete hain. Clinical observation ye hai ki jo Sjogren's patients zyada stressed life jeete hain, unme flare-ups zyada frequent aur severe hote hain. Practical stress management Sjogren's treatment ka essential part hai: Anulom vilom pranayama daily — immune calming effect. Meditation 10-15 min — cortisol reduce karta hai. Nature walks — both Vitamin D aur stress relief. Homeopathy mein emotional stressors aur physical symptoms dono ko saath address kiya jaata hai.",
    },
    {
      _key: 'faq22',
      question: "Sjogren's Syndrome mein Vitamin D ki kya zaroorat hai?",
      answer: "Vitamin D aur Sjogren's ka connection research-backed hai. Studies suggest karte hain ki Sjogren's patients mein Vitamin D deficiency significantly common hai — aur Vitamin D immune regulation mein critical role karta hai. Low Vitamin D se: autoimmune activity badh sakti hai; fatigue aur joint pain worse hote hain; infection susceptibility badhti hai. Recommendation: Apna Vitamin D level test karaayein. 25-OH Vitamin D test simple blood test hai. Deficiency hai to doctor-prescribed supplement lein. Saath mein early morning sun exposure (15-20 min) daily maintain karein — ye India mein free aur effective Vitamin D source hai.",
    },
    {
      _key: 'faq23',
      question: "Kya Sjogren's Syndrome mein dental problems hoti hain — aur kaise bachein?",
      answer: "Dry mouth (xerostomia) Sjogren's ka sabse serious side effect dental health ke liye hai. Saliva ka kaam hota hai bacteria ko neutralize karna, food particles clean karna, aur tooth enamel protect karna — jab ye nahi hota, cavities dramatically fast aati hain. Research shows karta hai ki Sjogren's patients mein dental decay rate 3-4 times higher ho sakta hai. Prevention steps: Fluoride toothpaste use karein aur dentist se 3-4 monthly checkup — annual nahi, quarterly. Sugar-free xylitol gum chusein — saliva stimulate hoti hai. Raat ko mouth rinse (non-alcoholic) zaroor karein. Sugar aur acid foods bilkul kam karein. Apne dentist ko Sjogren's ke baare mein zaroor bataayein.",
    },
    {
      _key: 'faq24',
      question: "Sjogren's Syndrome mein gharelu upay kya hain jo doctor ke parallel chal sakein?",
      answer: "Ye saath-saath use hone wale, evidence-informed gharelu upay hain — treatment ki jagah nahi, support ke taur pe: Warm compress aankhon pe (ek saaf kapda garam paani mein bheego ke, 5 min rakhein) — eyelid glands unclog hoti hain, tear quality better hoti hai. Aloe vera juice (pure, additive-free) — dry mouth soothe karta hai. Coconut oil pulling (ek chammach coconut oil se 5-10 min kulli) — oral bacteria reduce karta hai dry mouth mein. Humidifier ghar mein — specially bedroom mein raat ke liye. Omega-3 supplements (doctor advice se) — tear production research mein support karta hai. Haldi + kali mirch wala warm milk — anti-inflammatory, raat ko helpful hai joint pain mein.",
    },
    {
      _key: 'faq25',
      question: "Sjogren's Syndrome mein brain fog kya hota hai aur kaise manage karein?",
      answer: "Sjogren's brain fog — yaani concentrate na kar paana, yaaddasht weak hona, soch mein dhundla pan — ek real aur distressing symptom hai jo kaafi patients experience karte hain. Ye autoimmune inflammation ka direct effect hai brain ke blood vessels aur nerves pe. Management ke liye: Omega-3 diet (brain ke liye essential), regular aerobic exercise (brain blood flow improve karta hai), quality sleep (brain clearance hoti hai neend mein), stress management, aur Vitamin D supplementation. Homeopathy mein Natrum Mur, Alumina, aur kuch doosri medicines specifically brain fog wale Sjogren's pattern mein helpful hoti hain. Conventional medicine mein ye symptom often ignored rehta hai — isliye homoeopath se specifically mention karein.",
    },
  ],

  sources: [
    {
      _key: 'src1',
      title: "Sjogren's Foundation, USA",
      year: '2023',
      url: 'https://www.sjogrens.org',
    },
    {
      _key: 'src2',
      title: 'CCRH Annual Research Report — Autoimmune Conditions Division',
      year: '2022-23',
      url: 'https://ccrhindia.nic.in',
    },
    {
      _key: 'src3',
      title: 'Indian Journal of Research in Homoeopathy — Autoimmune Research Review Vol 16',
      year: '2022',
      url: 'https://www.ijrh.org',
    },
    {
      _key: 'src4',
      title: "National Institute of Dental and Craniofacial Research (NIDCR) — Sjogren's Syndrome Overview",
      year: '2023',
      url: 'https://www.nidcr.nih.gov',
    },
    {
      _key: 'src5',
      title: "Rheumatology (Oxford) — Primary Sjogren's Syndrome Clinical Review | Vol 62",
      year: '2023',
      url: '',
    },
    {
      _key: 'src6',
      title: 'Arthritis & Rheumatology — Vitamin D and Autoimmune Disease',
      year: '2022',
      url: '',
    },
  ],

  doctorNote: "Clinic mein jo zyada common pattern dekha hai wo ye hai ki Sjogren's ki mahila patient kaafi saal dry eyes aur muh ki taklif ke saath rehti hai — aankh ke specialist se drops leti hai, dental problems hote hain, aur thakaan ko 'umra ka asar' samajhti hai. Jab diagnosis hoti hai tab tak gland damage ho chuka hota hai. Is liye early detection aur integrated approach — homeopathy + conventional care saath — mein believe karta hoon. Sabse bada fayda jo maine individually dekha hai: Sjogren's ki chronic thakaan aur brain fog mein homeopathic treatment se jo improvement hoti hai, wo conventional medicines mein aise results nahi deti.",

  publishedAt: new Date().toISOString(),
}

async function main() {
  try {
    await client.createOrReplace(sjogrens)
    console.log("✅ Sjogren's Syndrome disease document created/updated: disease-sjogrens-syndrome")
    console.log('🌐 Live at: https://homeopedia.in/diseases/sjogrens-syndrome')
  } catch (err) {
    console.error('❌ Error:', err)
    process.exit(1)
  }
}

main()
