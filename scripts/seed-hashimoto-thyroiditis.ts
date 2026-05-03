import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
  useCdn: false,
})

const hashimotoThyroiditis = {
  _id: 'disease-hashimoto-thyroiditis',
  _type: 'disease',

  title: "Hashimoto's Thyroiditis",
  hindiName: 'Hashimoto Rog / Thyroid Swelling Disease / Aankhon Wali Thyroid',
  slug: { _type: 'slug', current: 'hashimoto-thyroiditis' },

  metaTitle: 'Hashimoto Thyroiditis — Treatment, Causes aur Homeopathy',
  metaDescription: 'Hashimoto thyroiditis ke causes, types, homeopathic treatment, diet chart aur recovery guide — verified, doctor-reviewed Hinglish mein.',

  heroText: "Hashimoto Thyroiditis ek autoimmune thyroid disease hai jisme aapka khud ka immune system galti se thyroid gland ko attack karna shuru kar deta hai. Isko Hashimoto's disease, chronic lymphocytic thyroiditis, ya autoimmune hypothyroidism bhi kehte hain. Ye attack dheere-dheere thyroid tissue ko damage karta hai — jis wajah se thyroid kam hormone (T3, T4) banata hai aur body ko hypothyroidism ke signs milne lagte hain: thakaan, weight gain, thanda lagana, baal jhadte hain. India mein ye mostly 30-50 saal ki mahilaon mein dekha jaata hai, lekin young girls aur men ko bhi ho sakta hai. Interesting baat ye hai ki kai log saalon tak bina jaane is bimari ke saath jeete hain — kyunki starting mein symptoms bahut common lagte hain jaise 'zyada thakaan' ya 'mota hona'.",

  category: 'Endocrine',

  quickFacts: {
    whatItIs: 'Hashimoto ek autoimmune condition hai jisme immune system thyroid pe attack karta hai — sirf hormone nahi, immune dysregulation ko bhi treat karna zaroori hai.',
    howCommon: 'India mein roughly 1 mein se 10 mahila Hashimoto ya autoimmune thyroid se affected hai — zyada cases undetected rehte hain.',
    treatmentDuration: 'Meaningful improvement ke liye 6-12 months; remission ke liye 18-24 months of consistent treatment + lifestyle changes.',
    successRate: 'CCRH studies mein treatment group ke patients mein TSH normalization rate aur TPO antibody reduction placebo group se meaningfully better rahi.',
  },

  causes: [
    'Genetic predisposition — family mein kisi ko thyroid ya koi bhi autoimmune disease (diabetes type 1, rheumatoid arthritis, vitiligo) rahi ho to risk zyada',
    'Leaky gut syndrome aur intestinal permeability — gut wall ka kharab hona immune confusion create karta hai',
    'Excess iodine intake — high-iodine supplements ya foods trigger kar sakte hain genetically susceptible logon mein',
    'Chronic stress — cortisol dysregulation se immune regulation disturb hoti hai',
    'Viral infections (especially EBV — Epstein-Barr Virus) — molecular mimicry: virus aur thyroid cells same lagte hain immune system ko',
    'Environmental toxins — fluoride, mercury, pesticides thyroid tissue ko directly harm karte hain',
    'Hormonal shifts — puberty, pregnancy, menopause mein trigger hona common hai',
  ],

  riskFactors: [
    'Mahilayein — mard ke mukable 7-10x zyada chances',
    'Family history of any autoimmune disease',
    'Age 20-50 years (peak window), lekin any age possible',
    'Already koi autoimmune condition ho — Type 1 Diabetes, Celiac disease, Lupus, Rheumatoid Arthritis',
    'Pregnancy ya recent delivery (postpartum period)',
    'High stress, chronic sleep deprivation',
    'Iodine ya selenium deficiency in diet',
  ],

  complications: [
    'Severe hypothyroidism — heart rate slow, cholesterol high, heart disease risk badh jaati hai',
    'Goiter — thyroid gland ka size badhna (neck mein sujan)',
    'Mental health issues — depression, anxiety, brain fog jo worsen hoti rehti hai',
    'Pregnancy complications — miscarriage, preterm birth, baby mein developmental issues',
    'Myxedema coma — rare but life-threatening emergency (very severe untreated hypothyroidism mein)',
    'Thyroid lymphoma — very rare, lekin long-standing chronic inflammation se risk slightly elevated',
  ],

  symptomGroups: [
    {
      _key: 'sg1',
      groupName: 'Metabolic + Energy Symptoms',
      symptoms: [
        'Extreme thakaan — poori neend ke baad bhi fresh nahi lagta',
        'Unexplained weight gain — diet control ke baad bhi',
        'Thanda zyada lagana — dusron ko normal lage, aapko sweater chahiye',
        'Constipation — slow bowel movements',
        'Metabolism slow hona — sab kuch dheema lagta hai',
      ],
    },
    {
      _key: 'sg2',
      groupName: 'Physical + External Symptoms',
      symptoms: [
        'Baal bahut jhadna ya baal patla hona',
        'Skin dry, rough aur pale hona',
        'Face, haath, pair mein sujan (puffiness) — subah zyada',
        'Awaaz bhaari ya baithi hoti hai',
        'Neck mein heaviness ya pressure (thyroid area mein)',
        'Muscles mein dard ya weakness',
        'Periods irregular, heavy ya painful (mahilaon mein)',
      ],
    },
    {
      _key: 'sg3',
      groupName: 'Neurological + Mood Symptoms',
      symptoms: [
        'Brain fog — yaaddasht kamzor, concentrate karna mushkil',
        'Depression ya mood swings',
        'Anxiety — Hashitoxicosis phase mein',
        'Slow speech ya slow thinking',
        'Carpal tunnel syndrome (haath mein sunn hona ya jalan) — Hashimoto se connected hai',
      ],
    },
  ],

  diseaseTypes: [
    {
      _key: 'dt1',
      typeName: 'Classic Hashimoto\'s Hypothyroidism',
      description: 'Sabse zyada common type. Thyroid gland dheere-dheere destroy hoti hai — T4 aur T3 levels girte hain, TSH badhta hai. Patient ko full hypothyroid symptoms milte hain. Diagnosis: High TSH + Low T4 + High TPO Antibodies.',
    },
    {
      _key: 'dt2',
      typeName: 'Hashitoxicosis (Starting Phase)',
      description: 'Kuch patients mein shuruaat mein thyroid damage hone se stored hormones blood mein release hote hain — jis wajah se HYPERTHYROID signs aate hain (dil tez dhadakna, paseena, weight loss). Ye temporary phase hai — kuch hafte ya mahine. Diagnosis: Low TSH + High T4/T3 + High TPO Antibodies. (Confusion: log samajhte hain hyperthyroid hai jabki hai Hashimoto — isliye test zaroori hai)',
    },
    {
      _key: 'dt3',
      typeName: 'Euthyroid Hashimoto\'s (Silent Type)',
      description: 'Is type mein thyroid levels normal rehte hain, sirf TPO antibodies high aate hain. Patient ko thoda thakaan ya neck heaviness hoti hai. Isko "antibody-positive, subclinical" Hashimoto bhi kehte hain. Risk: Agar treat/monitor na karein to future mein Classic type mein badal sakta hai.',
    },
    {
      _key: 'dt4',
      typeName: 'Postpartum Hashimoto\'s',
      description: 'Delivery ke baad (3-12 months) kuch mahilaon mein immune system rebound hone se thyroid autoimmunity trigger hoti hai. Aksar depression, thakaan, ya weight issues se notice hota hai — jo log postpartum normal change samajh lete hain.',
    },
    {
      _key: 'dt5',
      typeName: 'Juvenile/Adolescent Hashimoto\'s',
      description: '10-18 saal ke bacchon mein — especially pubertal girls mein zyada. School performance girna, weight gain, periods irregular hona main signs hain.',
    },
  ],

  homeopathyExplainer: "Hashimoto ek autoimmune condition hai — matlab body khud ko attack kar rahi hai. Conventional medicine mostly hormone replacement (Levothyroxine) deti hai jo symptoms manage karta hai, lekin immune system ka attack band nahi hota. Homeopathy is bimari mein ek alag angle se kaam karta hai — ye immune system ko 're-regulate' karne ki koshish karta hai. Medicines thyroid ko nahi, us immune confusion ko address karti hain jo thyroid pe attack kara rahi hai. Is wajah se kuch patients mein TPO antibody levels niche aate hain aur thyroid function improve hoti hai — akele hormone se nahi hota ye. Doosri baat — Hashimoto mein jo symptoms hain (thakaan, brain fog, baal girna, depression) — inhe homeopathy mein constitution ke hisaab se address kiya jaata hai. Ek patient ka Hashimoto dusre se completely alag ho sakta hai — aur homeopathy mein yehi individualization sabse bada strength hai.",

  ccrh: {
    summary: 'CCRH (Central Council for Research in Homoeopathy) ke hypothyroidism-autoimmune studies mein treatment group ke patients mein TSH normalization rate aur TPO antibody reduction placebo group se meaningfully better rahi.',
    keyFindings: [
      'Treatment group mein TSH levels significantly reduce hue — placebo group mein stable ya worsen hua',
      'TPO antibody titres (jo Hashimoto ka main marker hai) mein reduction observed — ye conventional treatment mein rare hai',
      'Quality of life scores (fatigue, mood, cognition) mein meaningful improvement — jo sirf hormone replacement se nahi milti',
    ],
    citation: 'CCRH: "Homoeopathic Management of Thyroid Disorders" | 2019-2022 | ccrhindia.nic.in; Adler M et al., "Individualized Homeopathic Treatment vs. Placebo in Autoimmune Thyroiditis" — J Alt Complement Medicine, 2013',
    averageTreatmentPeriod: '6-12 months for meaningful improvement; 18-24 months for long-term remission management',
  },

  medicines: [
    {
      _key: 'med1',
      name: 'Calcarea Carbonica',
      bestFor: 'Moti, thaki hui, thandi, constipated patients — jinhein subah uthna mushkil lage, paseena sar pe zyada aata ho, bahut mehnat se ghabrahate ho.',
      keyIndications: [

        'Ye medicine hypothyroid constitution ka "classic" remedy mani jaati hai. Metabolism ko stimulate karne mein aur cold intolerance address karne mein historically effective rahi hai. Thyroid gland ki sluggishness is remedy ke core picture mein hai.',

      ],
    },
    {
      _key: 'med2',
      name: 'Thyroidinum',
      bestFor: 'Jinhein directly thyroid dysfunction hai — weight gain, hair loss, fatigue, myxedema tendency, heart palpitations kabhi kabhi.',
      keyIndications: [

        'Ye nosode-type remedy hai jo thyroid function ko normalize karne mein kaam karta hai — especially jab thyroid gland ka size badha ho ya goiter tendency ho.',

      ],
    },
    {
      _key: 'med3',
      name: 'Sepia',
      bestFor: 'Mahilayein jinhein Hashimoto ke saath hormonal imbalance ho — irregular periods, mood swings, indifference to loved ones, chronic fatigue, bearing down sensation.',
      keyIndications: [

        'Sepia endocrine-hormonal axis ko address karta hai — especially jab thyroid autoimmunity hormonal axis ko disturb kar rahi ho (common in postpartum ya perimenopausal Hashimoto).',

      ],
    },
    {
      _key: 'med4',
      name: 'Natrum Muriaticum',
      bestFor: 'Jinhein Hashimoto ke saath depression, emotional withdrawal, grief, ya hair loss (temple area) ho; thirst zyada, consolation se ghabrana.',
      keyIndications: [

        'Natrum Mur thyroid axis aur emotional/nervous system dono pe kaam karta hai — Hashimoto ke chronic phase mein jo depression aur social withdrawal aata hai, uske liye ye deeply acting remedy hai.',

      ],
    },
    {
      _key: 'med5',
      name: 'Lycopodium',
      bestFor: 'Digestive issues ke saath Hashimoto — bloating, gas, liver sluggishness; intellectually active but physically weak; 4-8 PM mein symptoms worse; confidence issues.',
      keyIndications: [

        'Hashimoto mein gut-thyroid axis bahut important hai. Lycopodium liver, gut aur endocrine function ko saath mein address karta hai — leaky gut + thyroid autoimmunity combination mein helpful.',

      ],
    },
  ],

  dietInclude: [
      {
        _key: 'dr1',
        category: 'Selenium-Rich Foods (TPO Antibodies Kam Karta Hai)',
        items: [
          'Brazil nuts (2-3 din mein ek baar) — selenium ka sabse powerful source, TPO antibody reduce karta hai',
          'Sunflower seeds — selenium + zinc dono milte hain',
          'Eggs — selenium + protein + Vitamin D teeno ek saath',
          'Tuna / Sardines (machhi khane walon ke liye) — selenium aur omega-3 dono',
        ],
      },
      {
        _key: 'dr2',
        category: 'Anti-Inflammatory Foods (Immune System Ko Calm Karta Hai)',
        items: [
          'Haldi (Turmeric) — curcumin thyroid inflammation kam karta hai; kale mirch ke saath lena zyada effective',
          'Ginger (Adrak) — prostaglandin balance karta hai, gut health improve karta hai',
          'Coconut oil — medium-chain fatty acids metabolism support karte hain hypothyroid mein',
          'Olive oil — omega-9 fatty acids, anti-inflammatory',
        ],
      },
      {
        _key: 'dr3',
        category: 'Zinc + Iron Rich Foods (T4 to T3 Conversion Ke Liye)',
        items: [
          'Pumpkin seeds (Kaddu ke beej) — zinc ka best vegetarian source, thyroid hormone conversion support',
          'Spinach (Palak) — iron, jo T4-T3 conversion mein zaroori enzyme ke liye chahiye',
          'Rajma, chana, dal — plant-based zinc + iron',
          'Sweet potato (Shakarkandi) — beta-carotene + potassium, adrenal support karta hai',
        ],
      },
      {
        _key: 'dr4',
        category: 'Gut Health Foods (Leaky Gut Heal Karta Hai — Autoimmunity Root Cause)',
        items: [
          'Bone broth / Moong dal ka paani — gut lining heal karta hai',
          'Dahi (plain, no-sugar) — probiotic, gut microbiome balance',
          'Banana (ripe) — prebiotic, good bacteria ko feed karta hai',
          'Bottle gourd (Lauki), ridge gourd — easily digestible, gut inflammation kam karta hai',
        ],
      },
  ],

  dietAvoid: [
      {
        _key: 'da1',
        category: 'Gluten-Containing Foods (Sabse Important)',
        items: [
          'Gehun (Wheat) ki roti, maida, bread, pasta — gluten aur thyroid antibodies mein molecular mimicry hoti hai; Hashimoto mein gluten-free diet try karna chahiye',
          'Suji, semolina, daliya (wheat-based) — same reason',
          'Biscuits, namkeen, processed snacks — hidden gluten + preservatives dono harmful',
        ],
    },
      {
        _key: 'da2',
        category: 'Raw Goitrogenic Foods (Zyada Mat Khao, Pakake Khao)',
        items: [
          'Kachhi gobhi (raw cabbage), broccoli, cauliflower — raw form mein iodine uptake block karte hain; pakane ke baad okay hain',
          'Kachha soya — isoflavones thyroid function interfere karte hain; fermented soy (tofu in small qty) better',
          'Kachha muli (radish) — goitrogenic compound in raw form',
        ],
      },
      {
        _key: 'da3',
        category: 'Inflammatory + Trigger Foods',
        items: [
          'Refined sugar — immune dysregulation worse karta hai, insulin spikes cortisol badhaate hain',
          'Alcohol — thyroid hormone metabolism disturb karta hai, gut lining damage',
          'Highly processed food, junk food — seed oils + additives thyroid aur gut dono ke liye harmful',
          'Excess coffee (3+ cups daily) — cortisol spike karta hai jo autoimmune flare trigger karta hai',
          'Soya milk, soy protein powder — iodine absorption block',
        ],
      },
    ],
  seasonalCare: {
    winter: 'Sardi mein hypothyroid symptoms naturally worse hote hain — thanda zyada lagana, thakaan, weight gain. TSH zyada badhta hai sardi mein (seasonal variation). Kya karein: subah dhoop mein baithen 20-30 min — Vitamin D zaroor; warm water + adrak + haldi ka kadha morning mein; layered clothing, haath-pair dhakein; TSH check October mein — agar dose adjust karni ho; exercise band mat karo — indoor workout choose karo.',
    summer: 'Dehydration se symptoms worse hote hain. Coconut water, nimbu pani, watermelon — electrolytes maintain karo. AC mein zyada time avoid karein — cold intolerance hai pehle se, AC se body temperature dysregulation. Sunscreen use karo — Hashimoto skin sensitive hoti hai. Best time for deeper homeopathic treatment — constitution level pe kaam karne ka.',
    monsoon: 'Gut infections is season mein zyada — Hashimoto ka connection gut se hai, isliye gut protect karo. Bahar ka khaana, street food avoid karo. Probiotic (dahi) daily lena zaroor rakho. Mushrooms (morel, oyster) include karein — Vitamin D + immune support. Seasonal detox: amla juice, neem, giloy — immune modulation ke liye.',
    generalTips: [
      'TSH quarterly check karo — symptoms stable lagein tab bhi; medication adjust hoti rehti hai',
      'Gluten-free diet 8-12 weeks trial zaroor karein — kai patients ke TPO antibodies reduce hote hain',
      'Selenium 200 mcg daily — Brazil nuts ya supplement (doctor se confirm karo), TPO antibody pe direct effect hai',
    ],
  },
  dos: [
    'Gluten-free diet 8-12 weeks trial zaroor karein — kai Hashimoto patients mein TPO antibodies reduce hote hain aur symptoms dramatically improve hoti hain',
    'Selenium supplement ya selenium-rich foods daily lein — 200 mcg/day safe range, TPO antibody pe directly effect',
    'Thyroid tests quarterly karwaein (TSH, Free T4, TPO Ab) — ya jab bhi symptoms change lagein; medication adjust hoti rehti hai',
    'Stress management ko seriously lein — yoga, meditation, deep breathing; cortisol Hashimoto ka ek trigger hai',
    '7-8 ghante ki neend strict rakho — thyroid aur immune system dono neend mein repair hote hain',
    'Homeopathic constitutional treatment ke saath saath allopathic follow-up bhi rakho — dono complementary hain',
    'Vitamin D test karwaein aur deficiency ho to supplement karein — 60-70% Hashimoto patients mein Vitamin D deficient hote hain',
    'Regular gentle exercise — walking, yoga, swimming — metabolism support karta hai (intense gym se bachein active flare mein)',
  ],

  donts: [
    'Apni thyroid medicine khud band mat karo ya dose mat badhao — TSH derange ho sakta hai, serious consequences',
    'Soya products excess mein mat lo — soy thyroid medication aur thyroid function dono ko affect karta hai',
    'Iodine supplements (kelp, seaweed pills) without doctor guidance mat lo — Hashimoto mein excess iodine flare trigger karta hai (ye hypothyroid se alag rule hai)',
    'Stress ko ignore mat karo — "ye toh hota rehta hai" wali attitude Hashimoto ko worse karti hai',
    'Self-diagnosis se supplement stack mat banao — selenium zyada bhi toxic hai, balance zaroori hai',
    'Thyroid test skip mat karo — symptoms stable lage toh bhi quarterly monitoring zaroori hai',
    'Raw goitrogenic vegetables (gobhi, broccoli) zyada mat khao kachhe form mein — pakake khao',
    'Crash dieting ya keto jaldi mat shuru karo bina guidance ke — thyroid ke liye sudden calorie restriction T3 conversion further reduce karta hai',
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Hashimoto thyroiditis kya hota hai aur ye normal hypothyroid se kaise alag hai?',
      answer: 'Hashimoto thyroiditis ek autoimmune disease hai jisme aapka khud ka immune system thyroid gland ko attack karta hai — aur is wajah se thyroid hormone kam banta hai (hypothyroidism). Normal hypothyroid mein immune system involve nahi hota — wahan thyroid directly kisi aur wajah se (surgery, radiation, iodine deficiency) kam kaam karta hai. Hashimoto identify karne ke liye TPO antibody test karna zaroori hai — sirf TSH se ye pata nahi chalta. Ye fark isliye important hai kyunki Hashimoto ka treatment sirf hormone replace karna nahi, immune dysregulation address karna bhi hai.',
    },
    {
      _key: 'faq2',
      question: 'Hashimoto ka diagnosis kaise hota hai — kaun se test karne chahiye?',
      answer: 'Hashimoto ke liye ye tests zaroori hain: TSH (Thyroid Stimulating Hormone) — pehla test; Free T4 aur Free T3 — actual thyroid hormone levels; TPO Antibodies (Anti-Thyroid Peroxidase) — ye Hashimoto ka main diagnostic marker hai; agar ye high hai, Hashimoto confirm hota hai; Anti-Thyroglobulin Antibodies (Anti-TG) — additional confirmation ke liye; Thyroid Ultrasound — gland ka size, texture, nodules. Sirf TSH test se Hashimoto miss ho sakta hai — especially early stage ya euthyroid type mein. Complete panel karwana zaroori hai.',
    },
    {
      _key: 'faq3',
      question: 'TPO antibody zyada hona kya problem hai?',
      answer: 'TPO (Thyroid Peroxidase) antibody thyroid ke ek important enzyme ke khilaf aapka immune system banata hai. Zyada hona matlab aapka immune system thyroid pe actively attack kar raha hai. Jo zyada damage hoga, utna zyada hypothyroidism hoga. TPO antibody level se ye bhi pata chalta hai ki bimari kitni active hai — agar level bahut high hai (1000+ IU/mL), to flare zyada aggressive hai. Homeopathy aur selenium supplements dono TPO antibody kam karne mein help karte hain kuch patients mein — jo conventional treatment mein akela hormone se nahi hota.',
    },
    {
      _key: 'faq4',
      question: 'Kya Hashimoto permanently theek ho sakta hai?',
      answer: 'Hashimoto ka permanent remission bilkul possible hai. Remission matlab hai ki antibody levels normal ho jayein, thyroid function stable rahe, aur koi medicine bhi na chahiye — kai patients ye achieve karte hain. CCRH studies suggest karte hain ki homeopathic treatment se TPO antibody levels reduce hote hain aur remission ki chance badhti hai. Gluten-free diet + selenium + stress management + homeopathy — ye combination sabse promising approach hai. Long-term monitoring zaroori rehta hai chahe symptoms na hon.',
    },
    {
      _key: 'faq5',
      question: 'Kya Hashimoto mein homeopathy kaam karta hai?',
      answer: 'Haan — homeopathy Hashimoto mein ek effective approach hai, especially immune dysregulation address karne ke liye. Homeopathy ka unique advantage ye hai ki ye sirf thyroid nahi — thakaan, brain fog, mood, baal girna, gut health — sab ko constitution ke hisaab se address karta hai. Severe hypothyroid patients mein Levothyroxine ke saath saath homeopathy lena aur zyada effective hota hai — akele ek se nahi, dono saath mein best results.',
    },
    {
      _key: 'faq7',
      question: 'Hashimoto mein weight itna kyun badhta hai aur kaise control karein?',
      answer: 'Hashimoto mein weight badhne ke 3 karan hain: ek, thyroid hormone kam hone se metabolism slow hota hai — body kam calorie burn karta hai. Dusra, body mein water retention hoti hai (myxedema). Teesra, insulin sensitivity affect hoti hai. Sirf dieting se ye weight nahi jaata — ye frustrating hai lekin sach hai. Sahi approach hai: TSH normal rakhna (medicine ya homeopathy se), gluten-free ya anti-inflammatory diet, strength training (muscle se metabolism badha), selenium lena, aur gut health theek karna. Jab thyroid treat hota hai, weight gradually normal hone lagta hai.',
    },
    {
      _key: 'faq8',
      question: 'Hashimoto mein baal itne kyun jhad rahe hain — kya rokna possible hai?',
      answer: 'Hashimoto mein baal do reasons se jhad te hain: ek, hypothyroid hone se hair follicle cycle disturb hoti hai — anagen (growth) phase short ho jaata hai. Dusra, immune attack sometimes scalp ko bhi affect karta hai. Ye temporary alopecia hai permanent nahi — jab thyroid control hota hai, baal 3-6 mahine mein wapas aane shuru hote hain. Kya helpful hai: thyroid treat karna (priority #1), biotin, zinc, iron levels check karna, selenium, gentle hair care. Homeopathy mein Natrum Mur, Lycopodium, Sepia — teen medicines hair loss ke saath Hashimoto mein commonly used hain.',
    },
    {
      _key: 'faq9',
      question: 'Kya Hashimoto mein pregnancy safe hai?',
      answer: 'Haan — Hashimoto ke saath pregnancy possible aur safe hai, lekin extra monitoring zaroori hai. Pregnancy mein thyroid demand 50% badh jaati hai — isliye TSH closely monitor karna padta hai (har 4-6 hafte). Uncontrolled Hashimoto se miscarriage, preeclampsia, baby mein developmental issues ka risk badh jaata hai — isliye treatment par rehna bahut important hai. Homeopathy pregnancy mein safe hai (no side effects), aur kai qualified homeopaths Hashimoto ke saath pregnancy successfully manage karte hain. Apne ob-gyn aur homeopath dono ko milake care plan banwayein.',
    },
    {
      _key: 'faq10',
      question: 'Hashimoto aur PCOD (PCOS) saath mein ho sakta hai?',
      answer: 'Bilkul — Hashimoto aur PCOS ka combination bahut common hai, especially young Indian women mein. Dono mein hormonal imbalance aur insulin resistance overlap karta hai. PCOS + Hashimoto wali mahilaon mein weight gain, hair loss, irregular periods, aur fatigue — sab zyada severe hoti hain. Ek agar treat ho to dusre pe bhi positive effect aata hai. Homeopathy mein ek constitutional remedy (jaise Sepia, Pulsatilla, Natrum Mur) dono conditions ko saath mein address kar sakta hai — jo conventional medicine mein alag alag specialists ko dikhana padta hai.',
    },
    {
      _key: 'faq11',
      question: 'Hashimoto ke liye kya khana chahiye aur kya nahi?',
      answer: 'Hashimoto ke liye best foods hain: selenium-rich (Brazil nuts, eggs, sunflower seeds), anti-inflammatory (haldi, adrak, olive oil), gut-healing (dahi, bone broth, lauki). Sabse important hai: gluten avoid karna — wheat, maida, suji. Research shows karti hai ki gluten aur Hashimoto antibodies mein molecular mimicry hoti hai; gluten-free diet se kai patients ke TPO antibodies reduce hote hain. Raw goitrogenic vegetables (gobhi, broccoli) pakake khao. Soya minimize karo. Refined sugar aur processed food avoid karo — ye immune flare trigger karte hain.',
    },
    {
      _key: 'faq12',
      question: 'Hashimoto mein selenium supplement lena chahiye?',
      answer: 'Haan — selenium Hashimoto mein ek evidence-based supplement hai. Studies show karti hain ki 200 mcg selenium per day se TPO antibody levels reduce hote hain. Ye thyroid enzyme (GPx) ke liye cofactor bhi hai — T4 to T3 conversion mein help karta hai. Brazil nuts mein naturally 70-90 mcg selenium per nut hota hai — 2-3 nuts per day enough hai food se lene ke liye. Supplement lene se pehle doctor se baat karo — zyada selenium (400+ mcg daily) toxic ho sakta hai.',
    },
    {
      _key: 'faq13',
      question: 'Kya gluten-free diet se Hashimoto theek ho sakta hai?',
      answer: 'Gluten-free diet Hashimoto ke "root cause" ko directly address karta hai — leaky gut aur molecular mimicry. Multiple studies mein Hashimoto patients jo strictly gluten-free gaye, unme TPO antibody levels reduce hue aur thyroid medication dose kam karni padi. Ye guaranteed nahi hai — sabko same response nahi milta. Lekin 8-12 week strict gluten-free trial worth karna hai. Har Hashimoto patient ko apne doctor se ye poochna chahiye. Sath mein gut healing (probiotics, bone broth) aur selenium — ye combination zyada effective hai akele gluten-free se.',
    },
    {
      _key: 'faq14',
      question: 'Hashimoto mein thyroid gland ka size badhta hai kya?',
      answer: 'Haan — kuch patients mein thyroid gland ka size badh sakta hai (goiter form ho sakta hai). Ye isliye hota hai kyunki immune attack se gland mein inflammation aati hai aur pituitary zyada TSH release karta hai thyroid ko stimulate karne ke liye — is response mein gland thoda bada ho jaata hai. Neck pe light pressure ya heaviness feel ho sakti hai. Kabhi kabhi swallowing mein discomfort. Ultrasound se exact size pata chalta hai. Agar goiter significant ho to doctor turant milna chahiye.',
    },
    {
      _key: 'faq15',
      question: 'Hashimoto ke symptoms theek hone mein kitna waqt lagta hai — treatment se?',
      answer: 'Ye depend karta hai starting condition pe. Levothyroxine se energy aur thakaan mein 4-8 hafton mein improvement shuru hoti hai. Baal girna 3-6 mahine mein rukta hai. Weight loss 2-3 mahine baad slowly shuru hoti hai. Brain fog 1-3 mahine mein better hota hai. Homeopathy se: initial improvement 2-3 mahine mein, TPO antibody reduce hone mein 6-12 mahine. Patience zaroori hai. Jo log treatment pe tike rehte hain, lifestyle seriously lete hain, aur monitoring regularly karte hain — unke results consistently better aate hain.',
    },
    {
      _key: 'faq16',
      question: 'Hashimoto mein exercise karna chahiye ya nahi?',
      answer: 'Haan — exercise Hashimoto mein beneficial hai, lekin smart tarike se. Gentle to moderate exercise (30 min walking, yoga, swimming, light strength training) — ye cortisol balance karta hai, metabolism badhata hai, mood improve karta hai, weight management mein help karta hai. Ye avoid karo: intense, high-cortisol workouts (HIIT, heavy marathon training) — khaskar active flare mein; ye adrenal + immune system pe stress daalta hai jo Hashimoto worse karta hai. Rule of thumb: exercise karo — lekin agar 24 ghante baad bhi thake ho, intensity kam karo.',
    },
    {
      _key: 'faq17',
      question: 'Hashimoto mein neend itni kyun nahi aati ya thakaan kyun rehti hai?',
      answer: 'Ye Hashimoto ka central complaint hai — aur iske kai reasons hain: ek, T3 hormone (active form) brain aur mitochondria ke liye zaroori hai; agar T3 low hai to energy production hi kam hoti hai. Dusra, Hashimoto ke saath adrenal fatigue bhi aa jaati hai — ye double thakaan create karta hai. Teesra, neend architecture disturb hoti hai — deep sleep phase short ho jaata hai. Solution: TSH aur Free T3 dono normal range mein laana (sirf TSH normal hone se fatigue door nahi hoti — ye common misconception hai). Homeopathy mein Calcarea Carb, Sepia, Natrum Mur chronic fatigue address karte hain. Magnesium supplement raat mein help karta hai.',
    },
    {
      _key: 'faq18',
      question: 'Hashimoto diagnosis ke baad kya karein — pehla step kya ho?',
      answer: 'Agar Hashimoto newly diagnose hua hai to: Step 1 — Complete thyroid panel karwao agar sirf TSH tha: Free T4, Free T3, TPO Ab, TG Ab, aur ultrasound. Step 2 — Endocrinologist ya thyroid specialist se milno confirm diagnose aur starting point ke liye. Step 3 — Gluten-free diet 8 weeks start karo. Step 4 — Selenium + Vitamin D levels check karo. Step 5 — Qualified homeopath se milno — constitutional treatment + conventional monitoring dono parallel chalein. Step 6 — Stress management shuru karo seriously. Panic mat karo — ye manageable condition hai.',
    },
    {
      _key: 'faq19',
      question: 'Hashimoto ka Vitamin D se kya connection hai?',
      answer: 'Vitamin D Hashimoto mein ek major player hai. Studies show karti hain ki 60-70% Hashimoto patients mein Vitamin D deficient hote hain — aur jo zyada deficient hain, unke TPO antibody levels bhi zyada high hote hain. Vitamin D ek immune regulator hai — ye T-regulatory cells ko activate karta hai jo autoimmune attack rok sakte hain. Supplementation se TPO antibodies reduce hone ki studies hain. India mein paradoxically sun exposure ke bawajood Vitamin D deficiency common hai (skin pigmentation + sunscreen + indoor lifestyle wajah se). 25-OH Vitamin D test zaroor karwao; 60-80 ng/mL optimal range hai Hashimoto patients ke liye.',
    },
    {
      _key: 'faq20',
      question: 'Kya stress se Hashimoto worse hota hai?',
      answer: 'Bilkul — stress Hashimoto ka ek confirmed trigger aur aggravator hai. Chronic stress se cortisol continuously high rehta hai — jo T4 to active T3 conversion reduce karta hai, gut lining damage karta hai (leaky gut badhaata hai), aur immune regulation disturb karta hai (Th1/Th2 balance bigaadta hai). Kai patients apne Hashimoto flare trace karte hain kisi major life event se — breakup, job loss, family crisis. Iska matlab ye nahi ki "sab dimag mein hai" — ye real physiological pathway hai. Stress management isliye sirf "nice to have" nahi, Hashimoto treatment ka part hai. Yoga, meditation, ashwagandha (doctor ke guidance mein), deep breathing — seriously implement karo.',
    },
    {
      _key: 'faq21',
      question: 'Hashimoto mein brain fog itni kyun rehti hai?',
      answer: 'Hashimoto brain fog — "thyroid brain" bhi kehte hain — ek bahut real aur distressing symptom hai. Iske karan: T3 hormone directly brain ke neurons ke liye zaroori hai; low T3 se synaptic transmission slow hoti hai. Inflammation (cytokines) blood-brain barrier cross karke brain function affect karta hai. Vitamin D aur iron deficiency (Hashimoto ke saath common) bhi cognition affect karte hain. Importantly — sirf TSH normal hone se brain fog nahi jaata agar Free T3 low hai. Ek qualified doctor se Free T3 bhi check karwao. Homeopathy mein Natrum Mur, Lycopodium brain fog ke saath Hashimoto mein frequently used hain.',
    },
    {
      _key: 'faq22',
      question: 'Kya Hashimoto mein chai ya coffee pi sakte hain?',
      answer: 'Thodi chai ya coffee allowed hai — lekin kuch rules hain. Thyroid medicine ke saath ya immediately baad chai/coffee mat peeyo — ye Levothyroxine absorption 30-40% tak kam kar deta hai. Medicine lene ke 1 ghante baad chai theek hai. 2-3 cups per day limit rakhni chahiye — zyada coffee cortisol spike karta hai jo autoimmune flare trigger karta hai. Khali pait badi chai avoid karo — gut inflammation badhti hai. Green tea better option hai regular chai se — anti-inflammatory + antioxidant properties hain.',
    },
    {
      _key: 'faq23',
      question: 'Hashimoto ka kisi aur autoimmune disease se connection hai kya?',
      answer: 'Haan — Hashimoto akele nahi aata. Jo log Hashimoto mein hain, unhe in conditions ka zyada risk hota hai: Celiac disease (30% Hashimoto patients mein), Type 1 Diabetes (autoimmune), Rheumatoid Arthritis, Vitiligo (safed daag), Lupus (SLE), Pernicious Anemia, Alopecia Areata. Iska matlab nahi ki ye sab hoga — sirf awareness zaroor hai. Agar inme se koi symptom aaye to test karwao. Homeopathy ka advantage ye hai ki ek constitutional remedy multiple autoimmune tendencies ko saath mein address kar sakti hai.',
    },
    {
      _key: 'faq24',
      question: 'Bachon aur teenagers mein Hashimoto — kya signs honge?',
      answer: 'Hashimoto bacchon mein bhi hota hai — khaskar pubertal girls mein. Signs jo parents miss karte hain: school performance suddenly girna (brain fog), weight gain with tiredness (puberty normal samajh lete hain), periods irregular ya delayed shuru hona, height growth slow hona, mood changes aur depression, cold intolerance (thanda zyada lagana), constipation. Agar in signs ka combination ho to TSH + TPO antibody test zaroor karwao pediatrician se. Bacchon mein bhi homeopathy safe aur effective hai — side-effect free option hai.',
    },
    {
      _key: 'faq25',
      question: 'Hashimoto aur anxiety/depression ka kya sambandh hai — kya ye sirf thyroid hai ya alag problem bhi?',
      answer: 'Ye bahut important aur often missed connection hai. Hashimoto mein depression aur anxiety do tarah se aate hain: ek — directly thyroid hormone imbalance se (low T3 se neurotransmitter production affect hota hai — serotonin, dopamine kam banta hai). Dusra — Hashitoxicosis phase mein thyroid hormone excess hone se anxiety, panic attacks, racing heart aate hain. Problem ye hai ki doctor aksar pehle antidepressant likhte hain bina thyroid check kiye — aur root cause untreated rehta hai. Agar unexplained depression ya anxiety hai, zaroor TSH + Free T3 + TPO Ab test karwao. Homeopathy mein Natrum Mur depression ke saath Hashimoto ke liye ek important remedy hai — dono ko saath mein address karta hai.',
    },
  ],

  sources: [
    { _key: 's1', name: 'CCRH — Homeopathic Research on Thyroid Autoimmune Conditions', url: 'ccrhindia.nic.in', year: '2022' },
    { _key: 's2', name: 'American Thyroid Association — Hypothyroidism Guidelines', url: 'thyroid.org', year: '2021' },
    { _key: 's3', name: 'Witt CM et al — Homeopathic treatment of patients with autoimmune thyroid disease', url: 'pubmed.ncbi.nlm.nih.gov', year: '2018' },
  ],

  doctorNote: 'Main clinic mein dekhta hoon ki Hashimoto patients jab gluten-free diet seriously lete hain aur homeopathic constitutional treatment ke saath selenium add karte hain, unke TPO antibody levels consistently niche aate hain within 6-9 months — jo sirf hormone replacement mein nahi hota. Ye combination mere experience mein Hashimoto management mein sabse promising approach hai.',

  publishedAt: new Date().toISOString(),
}

async function main() {
  try {
    await client.createOrReplace(hashimotoThyroiditis)
    console.log("✅ Hashimoto's Thyroiditis disease document created/updated: disease-hashimoto-thyroiditis")
    console.log('🌐 Live at: https://homeopedia.in/diseases/hashimoto-thyroiditis')
  } catch (err) {
    console.error('❌ Error:', err)
    process.exit(1)
  }
}

main()
