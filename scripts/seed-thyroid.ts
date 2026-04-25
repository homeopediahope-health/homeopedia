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
    _id: 'disease-thyroid',
    _type: 'disease',
    title: 'Hypothyroidism',
    hindiName: 'थायरॉइड की कमी',
    slug: { _type: 'slug', current: 'thyroid' },
    category: 'Endocrine',
    metaTitle: 'Hypothyroidism Ka Homeopathic Ilaj — Causes, Diet & Treatment',
    metaDescription: 'Hypothyroidism (thyroid ki kami) ke causes, weight gain, thakan, diet chart aur homeopathic treatment — verified info by Dr. Shadab Khan MD Homoeopathy.',
    publishedAt: new Date('2026-04-25').toISOString(),
    heroText: 'Hypothyroidism ek aisi condition hai jisme thyroid gland — jo gaale mein butterfly shape ki hoti hai — kafi kam hormones (T3, T4) banati hai. Ye hormones body ki poori metabolism control karte hain: energy, weight, heartbeat, body temperature, mood — sab kuch. Jab ye hormones kam hote hain to body literally "slow ho jaati hai" — aap thake hue rehte hain, weight badhta hai, yaaddasht kamzor hoti hai, aur kabj rehti hai. India mein 42 million log thyroid disorders se prabhavit hain — khaskar mahilaon mein ye 5-8 guna zyada hoti hai.',

    quickFacts: {
      whatItIs: 'Thyroid ki kami — jisme T3/T4 hormones kam bante hain aur metabolism slow ho jaati hai',
      howCommon: 'India mein lagbhag 42 million affected; women mein purushon se 5-8 guna zyada',
      treatmentDuration: 'Subclinical cases: 6-18 mahine; overt hypothyroidism: long-term management',
    },

    types: [
      { _key: 'type1', name: 'Primary Hypothyroidism', description: 'Sabse common (95% cases) — seedha thyroid gland kaam nahi karta. India mein Hashimoto\'s thyroiditis (autoimmune) aur iodine deficiency main causes hain.' },
      { _key: 'type2', name: 'Secondary Hypothyroidism', description: 'Rare — pituitary gland TSH nahi banati, isliye thyroid ko signal nahi milta. Brain tumour, injury ya pituitary disease iska karan ban sakti hai.' },
      { _key: 'type3', name: 'Tertiary Hypothyroidism', description: 'Bahut rare — hypothalamus se TRH nahi aata, poori hormonal chain fail ho jaati hai.' },
      { _key: 'type4', name: 'Subclinical Hypothyroidism', description: 'TSH thoda elevated, T3/T4 abhi bhi normal. Symptoms mild ya absent hote hain. Ye stage treat karna future complications se bachata hai — homeopathy yahan sabse effective hai.' },
      { _key: 'type5', name: 'Congenital Hypothyroidism', description: 'Bachche janm se hi is condition ke saath paida hote hain. Newborn screening zaroori — jaldi pakad liya to normal development possible hai.' },
      { _key: 'type6', name: 'Hashimoto\'s Thyroiditis', description: 'India mein hypothyroidism ka #1 karan. Body ki immune cells thyroid tissue ko attack karti hain. TPO antibodies se confirm hota hai. Homeopathy is type mein khaas kaam karta hai kyunki ye immune system ko address karta hai.' },
      { _key: 'type7', name: 'Postpartum Hypothyroidism', description: 'Delivery ke baad kuch mahilaaon ki thyroid temporarily ya permanently underactive ho jaati hai. Depression jaisi symptoms hoti hain isliye kai baar misdiagnose ho jaata hai.' },
      { _key: 'type8', name: 'Drug-Induced Hypothyroidism', description: 'Lithium, amiodarone jaise medicines thyroid function suppress kar sakte hain. Doctor ko saari dawaaon ke baare mein batana zaroori hai.' },
    ],

    causes: [
      'Hashimoto\'s Thyroiditis: Sabse badi wajah — autoimmune attack on thyroid gland; body apni hi cells ko destroy karti hai',
      'Iodine Deficiency: Rural India mein aaj bhi prevalent; iodized salt na use karna thyroid ko impact karta hai',
      'Radiation ya Surgery: Neck radiation ya thyroid surgery ke baad gland properly function nahi karta',
      'Certain Medicines: Lithium, amiodarone, interferon aisi dawaaon se thyroid slow ho sakta hai',
      'Pituitary Gland Problem: TSH nahi banta to thyroid ko signal nahi milta — secondary hypothyroidism',
      'Pregnancy: Kuch mahilaon mein delivery ke baad thyroid function kharaab ho jaata hai (postpartum thyroiditis)',
    ],

    riskFactors: [
      'Mahilaayen — purushon ke comparison mein 5-8 guna zyada risk',
      '40+ age — umar badhne ke saath thyroid slow ho sakta hai',
      'Family history — agar maa ya didi ko thyroid hai to risk zyada',
      'Autoimmune conditions — type 1 diabetes, rheumatoid arthritis, lupus waale logon mein common',
      'Iodine deficiency waale areas ke rehne waale',
      'Previous thyroid surgery ya radiation treatment waale log',
    ],

    complications: [
      'Goiter (Ghengha): Thyroid gland abnormal roop se barhne lagta hai — gaale mein swelling dikhai deti hai',
      'Heart Problems: Cholesterol badh jaata hai, heart rate slow hoti hai — cardiovascular risk significantly increase hota hai',
      'Infertility aur Pregnancy Complications: Miscarriage, preterm birth, aur baby ke brain development mein problem ka risk',
      'Myxedema Coma (Rare Emergency): Extreme untreated case mein body temperature aur blood pressure itna girta hai ki emergency treatment zaroori',
      'Mental Health Impact: Depression, anxiety, memory problems chronic ho jaate hain agar thyroid control na ho',
    ],

    symptoms: [
      {
        _key: 'sym1',
        category: 'Fatigue & Weight (Sabse Common Complaints)',
        items: [
          'Hamesha thaka thaka feel karna — neend ke baad bhi rest nahi milta',
          'Bina kuch khaye weight badhna, especially belly fat',
          'Body mein heavy, slow feeling — kuch karne ka mann nahi karta',
          'Bahut zyada neend aana, din mein bhi so jaana',
        ],
      },
      {
        _key: 'sym2',
        category: 'Skin, Hair & Body (Physical Signs)',
        items: [
          'Baal bahut jhadte hain — mushti bhar baal nahate waqt',
          'Skin dry, rough, aur pale ho jaati hai',
          'Chehra phula hua lagta hai — khaskar aankhon ke neeche',
          'Nails brittle ho jaate hain — jaldi tootte hain',
          'Awaaz bhaari ya husky ho jaati hai',
          'Thandi bahut zyada lagti hai — jab doosron ko normal ho',
        ],
      },
      {
        _key: 'sym3',
        category: 'Hormonal, Mood & Digestive (Often Ignored)',
        items: [
          'Periods irregular hote hain ya bahut heavy aate hain',
          'Kabj (constipation) chronic rehti hai',
          'Yaaddasht kamzor hoti hai — cheezein bhool jaana',
          'Depression, anxiety, ya mood swings rehte hain',
          'Muscles mein dard ya stiffness feel hoti hai',
          'Cholesterol report mein LDL badha hua aata hai',
        ],
      },
    ],

    ccrhEvidence: {
      improvementRate: 'TSH levels mein meaningful reduction aur symptom score improvement observed',
      avgTreatmentPeriod: '6-18 mahine',
      citation: 'CCRH Clinical Research Programme on Hypothyroidism | Indian Journal of Research in Homoeopathy | 2018-2022',
      keyFindings: [
        'Subclinical hypothyroidism mein homeopathic treatment group ke TSH levels control group se better normalize hue',
        'Hashimoto\'s cases mein TPO antibody titres mein reduction observe kiya gaya kuch patients mein',
        'Quality of life parameters — energy, mood, bowel function — mein significant improvement reported',
      ],
    },

    homeopathyBenefits: [
      'Autoimmune modulation: Hashimoto\'s thyroiditis mein immune overreaction ko calm karna — jo conventional treatment mein seedha address nahi hota',
      'Side-effect free: Long-term use safe hai — elderly aur pregnant women ke liye bhi safe complementary option',
      'Constitutional treatment: Sirf TSH nahi, baal jhadna, mood, weight, constipation — sab ek saath address hota hai',
      'Conventional ke saath compatible: Thyroxine ke saath saath homeopathy chal sakti hai — dono compete nahi karte',
      'Prevention of progression: Subclinical stage mein treat karein to overt hypothyroidism mein convert hone se bachaya ja sakta hai',
    ],

    homeopathyLimitations: [
      'Overt hypothyroidism (TSH >10, T4 clearly low) mein levothyroxine se fast aur reliable results milte hain — homeopathy is case mein complementary role mein hai',
      'Congenital hypothyroidism mein conventional hormone replacement absolutely zaroori hai — sirf homeopathy se kaam nahi chalega, bachche ka brain development risk pe aa sakta hai',
    ],

    medicines: [
      {
        _key: 'med1',
        name: 'Calcarea Carbonica',
        potency: '200C / 1M',
        bestFor: 'Mote ya thule-thule log, slow metabolizer, thandi zyada lagti hai, constipation, extreme fatigue',
        keyIndications: ['Sluggish metabolism', 'Weight gain', 'Cold intolerance', 'Chronic constipation', 'Excessive head sweating'],
      },
      {
        _key: 'med2',
        name: 'Thyroidinum',
        potency: '3X / 30C',
        bestFor: 'TSH elevated, T4 low — direct thyroid function symptoms; cold intolerance, extreme fatigue, hair fall',
        keyIndications: ['Elevated TSH', 'Extreme fatigue', 'Hair fall', 'Cold intolerance', 'Weight gain with weakness'],
      },
      {
        _key: 'med3',
        name: 'Lycopodium Clavatum',
        potency: '200C',
        bestFor: 'Digestive problems dominant — bloating, gas, kabj; liver sluggish; high cholesterol; weak confidence',
        keyIndications: ['Bloating & gas', 'Constipation', 'High cholesterol', 'Liver sluggishness', 'Anxiety with low confidence'],
      },
      {
        _key: 'med4',
        name: 'Sepia Officinalis',
        potency: '200C',
        bestFor: 'Mahilayen — postpartum thyroid, menopause-onset thyroid, irregular periods, extreme thakaan jo rest se theek na ho',
        keyIndications: ['Postpartum thyroid', 'Hormonal imbalance', 'Irregular/heavy periods', 'Depression & indifference', 'Bearing-down sensation'],
      },
      {
        _key: 'med5',
        name: 'Graphites',
        potency: '200C',
        bestFor: 'Mote, chilly patients — dry cracked skin, eczema bhi ho; kabj, hair fall, irregular periods',
        keyIndications: ['Dry cracked skin', 'Obesity with coldness', 'Constipation', 'Hair fall', 'Nail brittleness'],
      },
    ],

    dietInclude: [
      {
        _key: 'di1',
        category: 'Iodine-Rich Foods',
        emoji: '🧂',
        items: [
          'Iodized salt — thyroid hormone production ke liye sabse zaroori mineral; har roz use karein',
          'Seafood (mackerel, sardines) — natural iodine ka best source; thyroid ko directly support karta hai',
          'Eggs (especially yolk) — iodine + selenium dono milte hain, T4 to T3 conversion mein help karta hai',
        ],
      },
      {
        _key: 'di2',
        category: 'Selenium-Rich Foods',
        emoji: '🌰',
        items: [
          'Brazil nuts (1-2 daily) — selenium ka concentrated source, thyroid enzyme function ke liye critical',
          'Sunflower seeds — selenium + healthy fats, thyroid health support karte hain',
          'Mushrooms — selenium aur vitamin D dono milte hain, Hashimoto\'s mein helpful',
        ],
      },
      {
        _key: 'di3',
        category: 'Anti-Inflammatory & Gut-Healthy',
        emoji: '🥦',
        items: [
          'Cooked vegetables (gajar, lauki, tinda) — raw se better; cooking goitrogens reduce karta hai',
          'Ginger (adrak) — anti-inflammatory, gut motility improve karta hai, constipation mein help',
          'Haldi + kaali mirch — curcumin autoimmune inflammation reduce karta hai, Hashimoto\'s ke liye beneficial',
          'Fermented foods (dahi, idli, kanji) — gut health improve hoti hai jo thyroid antibodies se linked hai',
        ],
      },
      {
        _key: 'di4',
        category: 'High-Fiber Foods',
        emoji: '🌾',
        items: [
          'Roti (gehun ka atta) — fiber se kabj control hoti hai jo hypothyroidism ka common symptom hai',
          'Moong dal — easy to digest, protein + fiber dono milte hain',
          'Flaxseeds (alsi) 1 tbsp daily — omega-3 + fiber, constipation aur inflammation dono address karta hai',
        ],
      },
    ],

    dietAvoid: [
      {
        _key: 'da1',
        category: 'Raw Goitrogenic Vegetables',
        emoji: '🥬',
        items: [
          'Kachchi gobhi, broccoli, kale (raw mein) — goitrogens thyroid hormone production rok sakte hain; hamesha pakaakar khayein',
          'Kachcha soy (soya milk, unprocessed tofu) — isoflavones thyroid medication absorption rokti hain; thyroxine ke 4 ghante baad hi soy lena',
          'Kaccha shalgam (turnip) — goitrogen content high; pakaakar hi use karein',
        ],
      },
      {
        _key: 'da2',
        category: 'Processed & Sugary Foods',
        emoji: '🍬',
        items: [
          'Maida (refined flour) — blood sugar spike, inflammation, weight gain — tino thyroid ko worse karte hain',
          'Packaged snacks (chips, biscuits, namkeen) — trans fats + excess sodium; thyroid medication absorption mein barrier',
          'Sugary drinks (cold drinks, packaged juice) — instant blood sugar spike jo metabolism aur weight ko aur kharaab karta hai',
        ],
      },
      {
        _key: 'da3',
        category: 'Medicine Interfering Foods',
        emoji: '⚠️',
        items: [
          'Coffee/chai thyroxine ke saath subah — absorption bahut kam ho jaati hai; medicine ke 30-60 min baad piyen',
          'High-calcium foods (milk, paneer) levothyroxine ke saath — 4 ghante ka gap rakhein',
          'Walnuts (akhrot) large amounts mein — tannins medicine absorption rokti hain',
          'Alcohol — thyroid hormone metabolism disturb karta hai aur liver load badhata hai',
        ],
      },
      {
        _key: 'da4',
        category: 'Excess Iodine Sources',
        emoji: '🚨',
        items: [
          'Kelp ya seaweed supplements — iodine overdose ho sakta hai jo Hashimoto\'s mein aur damage kar sakta hai; sirf doctor advice pe lena',
        ],
      },
    ],

    dietTip: 'Thyroxine lete hain to subah khali pet medicine lein, phir 30-60 minute wait karein chai/food ke liye. Ye ek step thyroid treatment ki effectiveness 30% tak bada sakta hai.',
    dietNote: 'Goitrogenic vegetables (gobhi, broccoli) se darna nahi — bas pakaakar khayein. Cooking se goitrogen content 90% tak reduce ho jaata hai. Completely band karna zaroori nahi.',

    weeklyPlan: [
      {
        _key: 'wp1',
        day: 'Monday',
        breakfast: '2 boiled eggs + 2 multigrain toast + 1 orange',
        midMorning: 'Mixed seeds (alsi + sunflower) + 1 apple',
        lunch: '2 chapati + moong dal + cooked lauki sabzi + dahi + salad',
        evening: 'Roasted chana + green tea',
        dinner: 'Moong dal khichdi + cooked vegetable + clear soup',
      },
      {
        _key: 'wp2',
        day: 'Tuesday',
        breakfast: 'Poha (iodized salt se banaya) + 1 katori dahi',
        midMorning: '2 Brazil nuts + 1 seasonal fruit',
        lunch: '2 chapati + masoor dal + gajar sabzi + raita',
        evening: 'Makhana (roasted) + haldi chai',
        dinner: '2 roti + palak sabzi + dal',
      },
      {
        _key: 'wp3',
        day: 'Wednesday',
        breakfast: 'Multigrain dalia (porridge) + 1 boiled egg + seasonal fruit',
        midMorning: '1 tbsp alsi + 1 kiwi',
        lunch: '2 chapati + chana dal + tinda sabzi + dahi + salad',
        evening: 'Roasted makhana + green tea',
        dinner: 'Khichdi + vegetable soup',
      },
      {
        _key: 'wp4',
        day: 'Thursday',
        breakfast: '2 scrambled eggs + multigrain toast + 1 orange (fresh)',
        midMorning: 'Sunflower seeds + 1 banana',
        lunch: '2 roti + moong dal + cooked sabzi + dahi',
        evening: 'Roasted chana + adrak chai',
        dinner: '2 roti + mixed vegetable sabzi + dal + salad',
      },
      {
        _key: 'wp5',
        day: 'Friday',
        breakfast: 'Upma (iodized salt ke saath) + 1 katori dahi',
        midMorning: '2 Brazil nuts + 1 apple',
        lunch: '2 chapati + rajma (soaked overnight) + cooked sabzi + raita',
        evening: 'Makhana + green tea',
        dinner: 'Vegetable soup + 2 roti + dal',
      },
      {
        _key: 'wp6',
        day: 'Saturday',
        breakfast: 'Moong dal chilla (2-3) + dahi + salad',
        midMorning: 'Mixed seeds + 1 seasonal fruit',
        lunch: '2 roti + arhar dal + aloo gobhi (cooked pakka hua) + dahi',
        evening: 'Roasted chana + haldi chai',
        dinner: 'Khichdi + cooked vegetable + soup',
      },
      {
        _key: 'wp7',
        day: 'Sunday',
        breakfast: '2 eggs (any style) + multigrain toast + 1 fruit',
        midMorning: '2 Brazil nuts + 1 tbsp alsi powder',
        lunch: '2 chapati + moong dal + mixed vegetable + dahi + salad',
        evening: 'Roasted makhana + green tea',
        dinner: '2 roti + sabzi + dal + haldi doodh before bed',
      },
    ],

    dos: [
      'Thyroxine (agar prescribed ho) hamesha subah khali pet lein — stomach empty ho aur koi aur food/medicine saath na ho',
      'Har 3-6 mahine blood test karwayein (TSH, T3, T4) — thyroid levels fluctuate karte hain, regular monitoring zaroori hai',
      'Iodized salt use karein — ek simple aur effective step; market se confirmed iodized salt hi khareeden',
      'Regular low-intensity exercise karein (30 min daily) — walking, yoga, swimming; metabolism boost karta hai',
      'Stress management seriously lein — chronic stress TSH disrupt karta hai; meditation, deep breathing, proper neend zaroori hain',
      'Doctor ko saari medicines batayein — kuch supplements thyroid function ya absorption affect karti hain',
      'Selenium-rich foods daily lein — T4 to active T3 mein convert karne ke liye zaroori mineral hai',
    ],

    donts: [
      'Thyroxine khud se band ya dose change mat karein — symptoms theek lagein tab bhi; thyroid lab values se control hota hai, feelings se nahi',
      'Koi bhi supplement thyroxine ke saath khali pet mat lein — calcium, iron, vitamins absorption rokti hain; 4 ghante ka gap rakhein',
      'Raw goitrogenic vegetables zyada mat khayein — kachchi gobhi, broccoli, soy raw form mein thyroid hormone production mein barrier bante hain',
      'Crash diet ya starvation mat karein — calorie restriction T3 aur T4 aur kam kar deta hai; slow weight loss hi safe hai',
      'Unverified "thyroid cure" supplements mat lein — market mein bahut claims hain; sirf doctor-recommended supplements safe hain',
      'Blood test ke bina self-assessment mat karein — symptoms misleading ho sakte hain; actual thyroid levels sirf blood test se pata chalte hain',
    ],

    faqs: [
      { _key: 'faq1', question: 'Hypothyroidism aur normal thakaan mein kya fark hai — kaise pata chalega ki thyroid hai?', answer: 'Normal thakaan kuch ghante aram ke baad theek ho jaati hai. Hypothyroidism ki thakaan alag hoti hai — poori raat neend ke baad bhi body heavy lagti hai, din mein kaam karte karte aankhen band hone lagti hain. Iske saath agar weight bhi badh raha hai bina khaana badhaaye, baal jhadh rahe hain, thandi bahut lagti hai, ya constipation rehti hai — to ye signs hain ki thyroid blood test zaroori hai. Sirf ek simple TSH test se confirm ho jaata hai.' },
      { _key: 'faq2', question: 'Hypothyroidism mein kitna weight badh sakta hai aur kya ye weight wapas aa sakta hai?', answer: 'Hypothyroidism mein typically 2-5 kg extra weight aa sakta hai — lekin 10-15 kg ya zyada bhi possible hai agar condition kaafi waqt se untreated ho. Bahut hissa water retention hoti hai — isliye chehra aur haath phoole lagte hain. Sahi treatment se metabolism normal hoti hai aur weight dhire dhire normalize ho jaata hai — usually 3-6 mahine mein. Lekin sirf thyroid control karna enough nahi — diet aur exercise bhi zaroori hai.' },
      { _key: 'faq3', question: 'Hypothyroidism permanently theek ho sakta hai — kya koi permanent solution hai?', answer: 'Ye type pe depend karta hai. Subclinical hypothyroidism mein kuch patients mein lifestyle changes, iodine correction aur homeopathic treatment se TSH normalize ho jaata hai permanently. Hashimoto\'s thyroiditis mein "permanent cure" nahi hoti, lekin "permanent control" bilkul possible hai — sahi treatment se years tak TSH normal reh sakta hai, symptoms nahi aate. Thyroxine band karna dangerous ho sakta hai bina doctor advice ke — levels normal lage to bhi medicine continue karna padti hai jab tak doctor clear na kare.' },
      { _key: 'faq4', question: 'Kya hypothyroidism mein pregnancy ho sakti hai — kya problem hoti hai?', answer: 'Haan, hypothyroidism mein pregnancy possible hai — lekin controlled thyroid ke saath pregnancy healthy hoti hai, uncontrolled ke saath serious risks hain. Uncontrolled hypothyroidism mein miscarriage, premature delivery, preeclampsia, aur baby ke brain development mein problem ho sakti hai. Planning se pehle TSH 2.5 se kam hona chahiye. Pregnant hone ke baad thyroxine dose usually badhaana padta hai — gynecologist aur thyroid doctor dono se milna zaroori hai.' },
      { _key: 'faq5', question: 'Hypothyroidism ki homeopathic treatment kya hai — kaam karta hai kya?', answer: 'Haan — homeopathy hypothyroidism mein kaam karta hai, khaskar subclinical stage mein aur Hashimoto\'s autoimmune cases mein. CCRH ke clinical observations mein TSH improvement aur symptom score reduction dono dekhe gaye. Homeopathy ka fayda ye hai ki ye sirf TSH number nahi, balki baal jhadna, thakaan, constipation, mood — sab ek saath address karta hai. Overt hypothyroidism mein conventional thyroxine ke saath complementary use better results deta hai.' },
      { _key: 'faq6', question: 'Thyroid test mein kya-kya check karta hai — sirf TSH enough hai kya?', answer: 'TSH akela test starting ke liye theek hai. Lekin agar TSH high hai ya symptoms hain to complete panel zaroori hai: TSH (Thyroid Stimulating Hormone), T4 (Thyroxine) free, T3 (Triiodothyronine) free, aur TPO Antibodies — jo Hashimoto\'s confirm karta hai. Kuch cases mein thyroid ultrasound bhi kiya jaata hai gland ki size aur texture dekhne ke liye. Routine mein sirf TSH check karte rehna adequate monitoring hai agar diagnosis already confirm hai.' },
      { _key: 'faq7', question: 'Hypothyroidism ke liye subah konsa exercise sahi hai — gym jaana chahiye kya?', answer: 'Hypothyroidism mein exercise bilkul zaroori hai — lekin intense gym workout se start nahi karna chahiye jab thakaan zyada ho. Best starting point hai 30 minute brisk walking daily — metabolism boost karta hai aur mood bhi improve hota hai. Yoga — especially Sarvangasana, Halasana, Matsyasana — direct thyroid area pe circulation improve karte hain. Jab energy improve ho (treatment ke baad), tab weight training add kar sakte hain — ye long-term mein metabolism ke liye best hai.' },
      { _key: 'faq8', question: 'Hypothyroidism mein baal kab tak jharte rehte hain — ruk jaayenge kya?', answer: 'Hypothyroidism mein baal isliye jhadte hain kyunki thyroid hormones hair follicle growth cycle control karte hain. Jab thyroid levels normal ho jaate hain — to baal jhadna usually 3-6 mahine mein ruk jaata hai. Naye baal aane mein 6-12 mahine lag sakte hain — patience zaroori hai. Agar TSH normal ho gaya fir bhi baal jhadh rahe hain, to iron deficiency, vitamin D ki kami, ya Hashimoto\'s ka active inflammation bhi cause ho sakta hai.' },
      { _key: 'faq9', question: 'Hypothyroidism aur depression mein connection kya hai — kya thyroid theek hone se mood theek ho jaata hai?', answer: 'Haan — direct connection hai. Thyroid hormones brain mein serotonin aur dopamine production regulate karte hain. Jab thyroid hormones kam hote hain, ye chemicals bhi kam bante hain — low mood, anxiety, lack of motivation result mein milte hain. Bahut saare patients jinhe depression diagnose hua hota hai unka asli cause untreated hypothyroidism nikalta hai. Sahi thyroid treatment ke 2-3 mahine ke andar mood mein significant improvement aati hai.' },
      { _key: 'faq10', question: 'Hypothyroidism mein kya khana chahiye aur kya nahi — seedha bataiye?', answer: 'Khaane ki simple guide — Haan mein: iodized namak, pakki hui sabziyan, eggs, dahi, moong dal, alsi (flaxseeds), haldi, adrak, aur 1-2 Brazil nuts daily. Nahi mein: kachchi gobhi/broccoli, kachcha soy, maida ke products, packaged snacks, aur thyroxine ke saath chai/coffee/calcium. Sabse important: thyroxine lete hain to subah khali pet medicine, phir 30-60 min baad hi kuch khayein — ye absorption ke liye critical hai.' },
      { _key: 'faq11', question: 'Kya thyroid mein chai aur coffee pee sakte hain — band karni padegi kya?', answer: 'Band karne ki zaroorat nahi — bas timing important hai. Thyroxine lene waale: medicine khali pet paani ke saath lo, phir 30-60 minutes baad hi chai ya coffee piyo. Tannins aur caffeine medicine absorption rok dete hain. Baaki din mein chai/coffee normal amount mein theek hai. Green tea ek better option hai — antioxidants zyada, tannins thode kam.' },
      { _key: 'faq12', question: 'Hypothyroidism mein weight loss kaise karein — kuch nahi hota koshish karne pe bhi?', answer: 'Pehla step: TSH control karna — thyroid levels normal karo; warna koi bhi diet kaam nahi karega. Phir: high-fiber, moderate-protein diet — processed food nahi, sugar zero. Exercise mein strength training add karo thyroid normal hone ke baad. Realistic expect karo: 0.5-1 kg per month weight loss normal hai hypothyroid mein; crash dieting se T3 aur bhi gir jaata hai. Homeopathy mein Calcarea Carb aur Lycopodium slow metabolism ko address karte hain.' },
      { _key: 'faq13', question: 'Bacchon mein hypothyroidism ke kya symptoms hote hain — kaise pata chalega?', answer: 'Chote bacchon (congenital) mein: feeding mein problem, constipation, bahut zyada neend. Bade bacchon mein: school mein concentration na hona, height growth slow hona, late puberty, bahut thak jaana, weight badh jaana. India mein newborn screening (heel prick test) hoti hai — agar hospital mein nahi hua to 2-4 hafton mein test karwayein. Early detection zaroori hai kyunki untreated congenital hypothyroidism bachche ke brain development ko permanently affect kar sakta hai.' },
      { _key: 'faq14', question: 'Thyroid test ke liye khali pet rehna zaroori hai — kab test karwayein?', answer: 'TSH test ke liye khali pet rehna technically zaroori nahi — food se TSH directly affect nahi hota. Lekin zyaadatar labs subah 8-10 AM ka time recommend karti hain kyunki TSH levels din mein naturally fluctuate karte hain. Ek important rule: thyroxine lete hain to test se pehle medicine mat lo — blood draw ke baad lena; warna T4 temporarily artificially high aayega jo result mislead kar sakta hai.' },
      { _key: 'faq15', question: 'Kya thyroid ka gharelu ilaaj hota hai — ghar pe kya kar sakte hain?', answer: 'Kuch evidence-based gharelu steps helpful hain — lekin ye medicine ki jagah nahi, saath mein kaam karte hain: iodized namak har roz, haldi + kaali mirch subah ya doodh mein, adrak ki chai, alsi 1 tablespoon daily, daily 15-20 minute dhoop mein rehna — vitamin D ke liye. Ye sab supportive hai — main treatment (homeopathic ya conventional) ke saath kaam karte hain.' },
      { _key: 'faq16', question: 'Hypothyroidism mein neend bahut aati hai — kya koi solution hai?', answer: 'Pehla aur sabse effective solution: TSH control karo — treatment se levels normal hone par usually 4-8 hafton mein neend normalization aati hai. Ghar pe: fixed sleep schedule (10 PM-6 AM), din mein 15 min se zyada sona avoid karo, subah dhoop mein 15 min niklo — circadian rhythm reset karta hai. Agar treatment ke baad bhi neend ka problem ho to sleep apnea rule out karwayein — hypothyroidism ke saath sleep apnea bhi ho sakta hai.' },
      { _key: 'faq17', question: 'Hashimoto\'s thyroiditis kya hai — ye hypothyroidism se kaise alag hai?', answer: 'Hashimoto\'s thyroiditis India mein hypothyroidism ka sabse common karan hai. Fark ye hai: Hashimoto\'s ek autoimmune disease hai — body ki immune system thyroid gland ko attack karti hai. Is attack ki wajah se thyroid dhire dhire destroy hoti jaati hai, aur hypothyroidism ban jaata hai. Blood test mein TPO antibodies positive aate hain jo Hashimoto\'s confirm karte hain. Homeopathy Hashimoto\'s mein khaskar useful hai kyunki ye immune system modulation pe kaam karta hai.' },
      { _key: 'faq18', question: 'Thyroid mein iodine supplements leni chahiye ya nahi — safe hai kya?', answer: 'Iodine supplements seedha nahi lene chahiye bina doctor advice ke. Hashimoto\'s thyroiditis mein high-dose iodine autoimmune inflammation aur bhadha sakta hai. Safe tarika: iodized namak har roz use karo — isse adequate iodine milta hai without overdose risk. Agar iodine deficiency confirmed hai (rural India mein rare) to doctor ki guidance mein supplements lena. "More is better" approach avoid karna chahiye.' },
      { _key: 'faq19', question: 'Kya hypothyroidism ke liye yoga kaam karta hai — kaun se asanas kare?', answer: 'Haan — yoga specifically thyroid conditions ke liye helpful hai. Sabse effective: Sarvangasana (Shoulder Stand) — thyroid area mein blood flow improve; Halasana (Plough Pose) — thyroid pe gentle stretch; Matsyasana (Fish Pose) — throat area stimulate; Ustrasana (Camel Pose) — throat ka forward stretch. Pranayama — Kapalabhati aur Nadi Shodhana metabolism aur stress hormones normalize karte hain. 20-30 min daily yoga saal bhar consistently meaningful improvement la sakta hai.' },
      { _key: 'faq20', question: 'Hypothyroidism mein periods kab normal hote hain — treatment ke baad kitna time lagta hai?', answer: 'Hypothyroidism mein periods heavy (menorrhagia), irregular, ya bahut kam ho jaate hain — kyunki thyroid hormones sex hormones ke balance ko directly affect karte hain. TSH normal hone ke baad periods usually 3-6 months mein improve hone lagte hain. Agar thyroid treat hone ke baad bhi irregular periods continue karein to gynecologist se milna zaroori hai — separate hormonal evaluation needed ho sakti hai, khaskar agar PCOS bhi saath ho.' },
      { _key: 'faq21', question: 'Hypothyroidism mein cholesterol kyun badhta hai — dono ka connection kya hai?', answer: 'Direct connection hai — thyroid hormones liver mein cholesterol metabolism regulate karte hain. Jab thyroid hormones kam hote hain, liver LDL (bad cholesterol) ko properly process nahi kar paata aur blood mein accumulate hone lagta hai. Thyroid treat hone ke baad, bina alag cholesterol medicine ke bhi, LDL significantly kam ho jaata hai usually. Isliye hypothyroid patients ko sirf thyroid nahi, saath mein lipid profile bhi check karni chahiye — saal mein ek baar.' },
      { _key: 'faq22', question: 'Subclinical hypothyroidism — kya treat karna zaroori hai ya wait kar sakte hain?', answer: 'Zaroor treat karo agar: TSH >10 hai, pregnancy plan hai, symptoms hain, TPO antibodies positive hain, ya heart disease ka risk hai. Wait-and-watch okay hai agar: TSH 2.5 se 10 ke beech, no symptoms, no antibodies, young aur healthy patient. Homeopathy subclinical stage mein sabse zyada useful hai — TSH normalize karne aur Hashimoto\'s ko progression se rokne mein. Regular monitoring (6 monthly TSH) zaroori hai.' },
      { _key: 'faq23', question: 'Kya thyroxine medicine life-long leni padti hai — band ho sakti hai kabhi?', answer: 'Permanent hypothyroidism (surgical removal, radioiodine treatment, ya severe Hashimoto\'s ke baad) mein generally life-long medicine zaroori hai. Transient hypothyroidism (postpartum, certain medicines ki wajah se) mein kuch cases mein carefully tapered off ki ja sakti hai doctor supervision mein. Kabhi bhi khud se medicine band mat karo — TSH rapidly badh sakta hai. Doctor se discuss karein jo aapki history dekhke decide karein.' },
      { _key: 'faq24', question: 'Hypothyroidism mein stress ka kya role hai — kya stress thyroid ko aur kharab karta hai?', answer: 'Haan — direct aur significant connection hai. Chronic stress cortisol badhata hai. High cortisol T4 ko active T3 mein convert karne se rokta hai (reverse T3 banata hai jo kaam nahi karta), aur TSH secretion ko disrupt karta hai. Hashimoto\'s patients mein stress autoimmune flare trigger kar sakta hai. Isliye stress management ek medical necessity hai — meditation, pranayama, adequate sleep, aur social connection thyroid health ke part hain.' },
      { _key: 'faq25', question: 'Hypothyroidism mein Vitamin D ka kya role hai — lena chahiye kya?', answer: 'Vitamin D aur thyroid ka connection strong hai — khaskar Hashimoto\'s autoimmune thyroiditis mein. Research shows karta hai ki Hashimoto\'s patients mein Vitamin D deficiency bahut common hai, aur low Vitamin D autoimmune activity ko badhata hai. Thyroid test ke saath 25-OH Vitamin D level bhi check karwayein. Level 40-60 ng/mL maintain karna target hai. Daily 15-20 minute arms aur legs expose karke dhoop mein rehna — free aur effective source. Supplementation doctor ki guidance mein — usually Vitamin D3 + K2 combination better absorb hoti hai.' },
    ],

    sources: [
      { _key: 'src1', name: 'CCRH Clinical Research Programme on Hypothyroidism | Indian Journal of Research in Homoeopathy | 2018-2022', url: 'https://ccrhindia.nic.in', year: '2022' },
      { _key: 'src2', name: 'American Thyroid Association — Guidelines for Diagnosis and Management of Hypothyroidism', url: 'https://thyroid.org', year: '2019' },
      { _key: 'src3', name: 'JAPI — Thyroid Disorders in Indian Population: Epidemiology and Management', year: '2021' },
      { _key: 'src4', name: 'WHO — Iodine Deficiency Disorders: Global Coverage Report', url: 'https://who.int', year: '2023' },
      { _key: 'src5', name: 'PubMed — Hashimoto\'s Thyroiditis and Homeopathy: Systematic Review of Clinical Evidence', url: 'https://pubmed.ncbi.nlm.nih.gov', year: '2020' },
    ],
  }

  console.log('Seeding Hypothyroidism...')
  await client.createOrReplace(doc)
  console.log('✅ Hypothyroidism seeded successfully!')
}

seed().catch(console.error)
