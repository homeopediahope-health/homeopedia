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
    _id: 'disease-hairfall',
    _type: 'disease',
    title: 'Hair Fall',
    hindiName: 'बाल झड़ना / गंजापन',
    slug: { _type: 'slug', current: 'hairfall' },
    category: 'Hair',
    metaTitle: 'Hair Fall Treatment in Hindi — Karan, Ilaaj aur Homeopathy',
    metaDescription: 'Baal jhadne ke karan, gharelu ilaaj, diet tips aur homeopathic treatment — simple Hinglish mein. Verified info, doctor-reviewed by Dr. Shadab Khan MD.',
    publishedAt: new Date('2026-04-25').toISOString(),
    heroText: 'Hair fall ek aam samasya hai jisme rozana 50-100 baal girna normal maana jaata hai — lekin jab ye sankhya badh jaaye, scalp dikhne lage, ya baal patle hone lage, to ye ek medical condition ban jaati hai jise Alopecia kehte hain. Ye sirf cosmetic problem nahi hai — iske peeche hormonal imbalance, nutritional deficiency, thyroid disorder, ya genetic factors ho sakte hain. India mein lagbhag 60% purush aur 40% mahilayein apni life mein kisi na kisi stage pe noticeable hair loss experience karte hain. Sahi wajah pata karna treatment ka pehla step hai.',

    quickFacts: {
      whatItIs: 'Hair follicles ka weak hona ya girna — 50-100/din normal; isse zyada Alopecia hai. India mein 60% men aur 40% women affected.',
      howCommon: 'Androgenetic Alopecia — 58% men by age 50; Iron-deficiency related hair fall premenopausal Indian women mein very common',
      treatmentDuration: '4-8 mahine visible improvement; 12 mahine complete assessment ke liye',
    },

    types: [
      { _key: 'type1', name: 'Androgenetic Alopecia (Pattern Baldness)', description: 'Sabse common type — genetic aur hormonal (DHT hormone). Purushon mein aage ya upar se baal jaate hain (M-shape). Mahilaon mein beech ki maang chodi hoti jaati hai. Dheere dheere hota hai — saalon mein. Treatment se progress rok sakte hain ya slow kar sakte hain.' },
      { _key: 'type2', name: 'Telogen Effluvium (Sudden Shedding)', description: 'Sudden stress ke baad — surgery, delivery, beemari, ya emotional shock ke 2-3 mahine baad zyada baal girna shuru hote hain. Typically temporary hota hai. New moms mein bahut common (postpartum hair fall). COVID recovery ke baad bhi bahut log experience karte hain.' },
      { _key: 'type3', name: 'Alopecia Areata (Chakte Padna)', description: 'Baalon mein golakar ya irregular chakte pad jaate hain (patches). Autoimmune condition hai — immune system baal roots ko attack karta hai. Beard, eyebrows, eyelashes bhi affected ho sakte hain. Homeopathy is type mein khaas effective maani jaati hai.', diseasePageSlug: 'alopecia' },
      { _key: 'type4', name: 'Traction Alopecia (Khenchne se)', description: 'Tight ponytail, braids, ya juda bandhne se hairline damage hoti hai. Temples aur sides pe zyada dikhta hai. Early stage mein reversible hai — habit badalne se improvement hoti hai.' },
      { _key: 'type5', name: 'Scarring Alopecia', description: 'Scalp mein infection ya inflammation se hair follicles permanently damage ho jaate hain. Is type mein regrowth mushkil hoti hai — early treatment zaroori hai.' },
      { _key: 'type6', name: 'Nutritional Alopecia (Kami se)', description: 'Iron, Zinc, Vitamin D, Biotin, Protein ki kami se hota hai. India mein women mein bahut common — especially vegetarian diet pe. Blood test se confirm hota hai — supplementation se sudhar milta hai.' },
      { _key: 'type7', name: 'Medical / Drug-Induced', description: 'Thyroid problem, PCOD/PCOS, chemotherapy, BP medicines se. Underlying condition treat hone pe baal wapas aa sakte hain.' },
    ],

    causes: [
      'Genetic ya family history — Androgenetic Alopecia ka sabse bada factor',
      'Hormonal badlaav — thyroid disorder, PCOD, pregnancy, menopause',
      'Nutritional deficiency — Iron, Zinc, Biotin, Vitamin D, Protein ki kami',
      'Chronic stress, anxiety ya sudden emotional shock — Telogen Effluvium ka main cause',
      'Scalp infections — dandruff (seborrheic dermatitis), fungal infection',
      'Harsh chemical treatments — coloring, rebonding, perming',
      'Autoimmune disorder — Alopecia Areata mein immune system follicles ko attack karta hai',
      'Certain medicines — blood thinners, antidepressants, BP drugs',
      'Excessive heat styling — straightener, curler, dryer se follicle damage',
    ],

    riskFactors: [
      'Family mein baldness ki history — genetics sabse strong factor hai',
      '30+ age ke purush aur 40+ mahilayein — hormonal changes se',
      'PCOD/PCOS waali mahilayein — excess androgens baal giraten hain',
      'Thyroid patients — hypothyroid ya hyperthyroid dono mein hair fall',
      'Strict dieting ya crash diet followers — protein/iron crash hoti hai',
      'Rozana tight hairstyle banane wale — traction alopecia risk',
      'Smokers — scalp blood flow reduce hoti hai',
      'High stress jobs ya chronic anxiety wale log',
      'Vegetarians jo balanced diet nahi lete — especially protein deficit',
    ],

    complications: [
      'Permanent baldness — advanced Androgenetic Alopecia mein follicles dead ho jaate hain, phir treatment bhi kaam nahi karta',
      'Psychological impact — anxiety, depression, low self-confidence especially young women aur teenagers mein serious mental health issue',
      'Scarring Alopecia mein scalp tissue permanently damage ho sakta hai',
      'Underlying disease miss ho jaana — thyroid ya iron deficiency detect na hone se aur health problems badh sakti hain',
    ],

    symptoms: [
      {
        _key: 'sym1',
        category: 'Baalon Ka Girna (Shedding Signs)',
        items: [
          'Subah uthne pe takiye pe bahut baal dikhna',
          'Nahane ke baad drain mein baalon ka guchcha',
          'Kanghi karte waqt 100+ baal aana rozana',
          'Hairbrush mein baalon ka zyada jamna',
          'Ponytail ki thickness pehle se thin ho gayi ho',
        ],
      },
      {
        _key: 'sym2',
        category: 'Scalp Aur Baalon Ki Badlaav (Visual Changes)',
        items: [
          'Maang chodi dikhne lagni — mahilaon mein common sign',
          'Hairline peeche hona ya M-shape banana — purushon mein',
          'Scalp pe golakar chakte — hair-free patches (Alopecia Areata)',
          'Baal pehle se patale aur kamzor feel hona',
          'Temples ya crown pe baal visible thinning',
        ],
      },
      {
        _key: 'sym3',
        category: 'Saath Ke Aur Symptoms (Underlying Cause Ke Signs)',
        items: [
          'Scalp pe itching, redness ya flaking — dandruff/infection sign',
          'Baal dry, brittle aur jaldi toot ne wale — nutritional deficiency',
          'Nails kamzor ya ridged hona — zinc/biotin deficiency sign',
          'Fatigue, weight gain — thyroid involvement ka sign',
          'Irregular periods ya acne — PCOD connection',
        ],
      },
    ],

    youtubeVideos: [
      { _key: 'yt1', url: 'https://youtu.be/-YpWYZnx1D0', title: 'Hair Fall — Causes aur Homeopathic Treatment' },
    ],

    ccrhEvidence: {
      improvementRate: 'Alopecia Areata ke 68% patients mein 6 mahine mein visible regrowth — placebo group mein sirf 19%',
      avgTreatmentPeriod: '4-8 mahine (type aur severity ke hisaab se)',
      citation: 'Indian Journal of Research in Homoeopathy, 2018; CCRH Multi-center study on Alopecia Areata, 2019',
      keyFindings: [
        'SALT score (Severity of Alopecia Tool) 6 mahine mein average 47% improve hua homeopathic group mein',
        'Placebo group mein sirf 12% improvement tha',
        'Side effects practically nil — long-term use safe raha',
        'Patients mein anxiety aur stress levels bhi reduce hue — jo ek indirect hair fall trigger tha',
      ],
    },

    homeopathyBenefits: [
      'Alopecia Areata (chakte) mein khaas promising results — immune system ko rebalance karta hai',
      'Hormonal hair fall (PCOD, thyroid, postpartum) mein constitutional treatment se root cause address hota hai',
      'Stress-induced hair fall mein mind + body dono ko saath treat karta hai',
      'Safe for long term — steroid-free, no scalp side effects',
      'Children aur pregnant mahilaon mein bhi safe use ki ja sakti hai',
    ],

    homeopathyLimitations: [
      'Scarring Alopecia (daag wali ganjapan) mein results limited ho sakte hain — follicles permanently damaged hoti hain',
      'Nutrient deficiency se hone wale hair fall mein supplementation ke saath homeopathy better kaam karti hai — akele nahi',
    ],

    medicines: [
      {
        _key: 'med1',
        name: 'Lycopodium Clavatum',
        potency: '200C / 1M',
        bestFor: 'Genetic/hormonal hair fall — digestive problem bhi ho (gas, acidity), baal sides aur crown pe girte hon',
        keyIndications: ['Pattern baldness', 'Hair fall with digestive weakness', 'Hormonal imbalance', 'Sides and crown thinning', 'DHT-driven genetic baldness'],
      },
      {
        _key: 'med2',
        name: 'Phosphoric Acid',
        potency: '30C / 200C',
        bestFor: 'Grief, stress ya emotional shock ke baad baal girna — mentally aur physically thaka hua patient',
        keyIndications: ['Hair fall after grief or shock', 'Telogen Effluvium', 'Mental exhaustion', 'Weakness with hair loss', 'Postpartum hair fall'],
      },
      {
        _key: 'med3',
        name: 'Silicea',
        potency: '6X / 30C',
        bestFor: 'Kamzor, patale, dry aur brittle baal — jaldi toot jaate hain; nails bhi kamzor hon; patient thanda rehta ho',
        keyIndications: ['Brittle breaking hair', 'Weak nails with hair fall', 'Cold constitution', 'Nutritional absorption weakness', 'Slow hair growth'],
      },
      {
        _key: 'med4',
        name: 'Natrum Muriaticum',
        potency: '200C',
        bestFor: 'Grief ya long-term emotional pain ke baad hair fall — mahilaon mein common; andar se dard chhupane wale patients',
        keyIndications: ['Hair fall from suppressed grief', 'Emotional hair loss in women', 'Dry skin with hair loss', 'Hormonal stress response', 'Post-breakup or loss hair fall'],
      },
      {
        _key: 'med5',
        name: 'Thuja Occidentalis',
        potency: '200C',
        bestFor: 'Chemical treatments, harsh shampoos ya post-vaccination hair fall — scalp pe dandruff bhi ho, baal oily roots pe kamzor hon',
        keyIndications: ['Chemical-induced hair fall', 'Post-vaccination alopecia', 'Dandruff with hair loss', 'Oily scalp weak roots', 'Scalp follicle damage'],
      },
      {
        _key: 'med6',
        name: 'Wiesbaden (Aqua Wiesbaden)',
        potency: '30C / 200C',
        bestFor: 'Scalp pe excessive dandruff ke saath hair fall — baal fall hone ke baad slow regrowth',
        keyIndications: ['Dandruff with hair fall', 'Slow regrowth after shedding', 'Scalp circulation weakness', 'New hair growth stimulation', 'Scalp health restoration'],
      },
      {
        _key: 'med7',
        name: 'Calcarea Carbonica',
        potency: '200C / 1M',
        bestFor: 'Overweight patients, thyroid ya PCOD se connected hair fall — thande rehte hain, sweating zyada, baal roots se kamzor',
        keyIndications: ['Thyroid-related hair fall', 'PCOD hair loss', 'Cold sweaty constitution', 'Metabolic weakness', 'Roots weak from hormonal imbalance'],
      },
    ],

    dietInclude: [
      {
        _key: 'di1',
        category: 'Protein Rich Foods',
        emoji: '🥚',
        items: [
          'Ande (Eggs) — Biotin aur protein dono ek saath, jo baal ki keratin structure banata hai',
          'Moong dal / Masoor dal — vegetarians ke liye best protein source; iron bhi milta hai jo scalp circulation improve karta hai',
          'Paneer / Tofu — calcium aur protein combination baalon ko andar se mazbooti deta hai',
          'Chicken / Fish (non-veg) — complete amino acids jo baal ki growth ke liye direct building blocks hain',
        ],
      },
      {
        _key: 'di2',
        category: 'Iron & Zinc Sources',
        emoji: '🥬',
        items: [
          'Palak (Spinach) — iron + folate + Vitamin C combination; scalp ko oxygen milta hai',
          'Kaju, Badam, Akhrot — zinc aur selenium dono; DHT ko naturally control karte hain, baal roots nourish karte hain',
          'Chaulai (Amaranth) / Ragi — iron se bharpoor Indian grain; anemia se hone wale hair fall mein helpful',
          'Til (Sesame seeds) — calcium aur zinc; roz 1 chammach khane se fark padta hai',
        ],
      },
      {
        _key: 'di3',
        category: 'Vitamin D & Omega-3 Sources',
        emoji: '🐟',
        items: [
          'Fatty fish (Salmon, Mackerel, Sardines) — Omega-3 scalp inflammation kam karte hain, follicles healthy rakhte hain',
          'Flaxseeds / Chia seeds — veg Omega-3 source; hair follicle ke around inflammation reduce karta hai',
          'Mushrooms — Vitamin D ka natural plant source; Vitamin D ki kami hair fall ka overlooked karan hai',
          'Doodh + Ghee (limited) — fat soluble vitamins absorb hone mein madad karte hain',
        ],
      },
      {
        _key: 'di4',
        category: 'Vitamin C & Antioxidants',
        emoji: '🍊',
        items: [
          'Amla (Indian Gooseberry) — Vitamin C ka richest source; collagen banata hai jo baal ko root se mazboot rakhta hai',
          'Guava, Kiwi, Bell Peppers — Vitamin C iron absorption badhata hai; iron ka sirf khana kaafi nahi, absorption zaroori hai',
          'Haldi (Turmeric) + Kali Mirch — anti-inflammatory; scalp inflammation jo follicles damage karta hai wo kam hoti hai',
        ],
      },
      {
        _key: 'di5',
        category: 'Gut Health & Biotin Sources',
        emoji: '🥦',
        items: [
          'Curd / Yogurt (Dahi) — probiotics gut health improve karte hain; nutrient absorption aur immune function dono better hote hain',
          'Oats — biotin + silica + zinc ek saath; ek baar mein teen nutrients',
          'Sprouts (any) — bioavailability highest hoti hai sprouted form mein; roz 1 katori baalon ke liye best habit',
        ],
      },
    ],

    dietAvoid: [
      {
        _key: 'da1',
        category: 'Sugar & Refined Carbs',
        emoji: '🍬',
        items: [
          'Maida products (bread, biscuits, pasta) — blood sugar spike se insulin rise hota hai jo DHT production badhata hai',
          'Mithai, cold drinks, packaged juices — fructose aur refined sugar se inflammation badhti hai jo follicles ko damage karta hai',
          'White rice in excess — glycemic index high; prefer brown rice ya jowar/bajra instead',
        ],
      },
      {
        _key: 'da2',
        category: 'Crash Diet & Extreme Restriction',
        emoji: '🚫',
        items: [
          'Very low calorie diets — body "survival mode" mein jaata hai aur baalon ko non-essential maankar nutrition cut karta hai',
          'No-fat diets — fat soluble vitamins (A, D, E, K) absorb nahi hote; ye sab baalon ke liye zaroori hain',
          'Protein-free diets — baal pure protein se bane hain; kami mein pehle baal jaate hain',
        ],
      },
      {
        _key: 'da3',
        category: 'Inflammatory Foods',
        emoji: '🍺',
        items: [
          'Deep fried / junk food — trans fats scalp ke sebaceous glands clog karte hain, follicle health kharab karta hai',
          'Excess alcohol — zinc aur folic acid deplete karta hai; dono hair growth ke liye critical hain',
          'Processed meat (sausages, cold cuts) — preservatives aur excess sodium scalp blood flow reduce karte hain',
        ],
      },
      {
        _key: 'da4',
        category: 'Specific Habits That Worsen Hair Fall',
        emoji: '⚠️',
        items: [
          '4+ cups chai/coffee — excess caffeine cortisol badhata hai aur iron absorption bhi reduce karta hai; 1-2 cups tak theek hai',
          'Namak (salt) in excess — scalp mein micro-circulation affect hoti hai',
          'Raw egg whites — Avidin protein biotin ko bind karke usse absorb nahi hone deta; cooked eggs theek hain, raw nahi',
        ],
      },
    ],

    dietTip: 'Subah khali pet 1 glass gunguna paani + nimbu + haldi — ye combination liver detox karta hai aur inflammation reduce karna shuru karta hai. Saath mein Amla (1 fresh ya 30ml juice) — Vitamin C se iron absorption double ho jaati hai.',
    dietNote: 'Blood test zaroori hai pehle — Iron (Ferritin), Vitamin D3, Zinc, Thyroid (TSH). Agar Serum Ferritin 30 se kam ho to sirf diet se iron level theek karna baalon mein 3 mahine mein dramatic improvement la sakta hai. Supplement tab hi lo jab deficiency confirm ho — random biotin lena thyroid test ko affect karta hai.',

    weeklyPlan: [
      {
        _key: 'wp1',
        day: 'Monday',
        breakfast: 'Oats porridge + 1 tbsp alsi powder + 1 amla (ya juice)',
        midMorning: 'Akhrot (4-5) + 1 apple',
        lunch: '2 chapati + moong dal + palak sabzi + dahi + salad',
        evening: 'Adrak ki chai (1 cup) + roasted chana',
        dinner: '2 roti + masoor dal + bhindi sabzi + 1 katori sprouts salad',
      },
      {
        _key: 'wp2',
        day: 'Tuesday',
        breakfast: '2 boiled eggs + multigrain toast + 1 orange',
        midMorning: 'Chia seeds soaked in water + coconut water',
        lunch: '2 roti + chana dal + broccoli sabzi + dahi',
        evening: 'Mixed seeds (alsi + sunflower + til) + green tea',
        dinner: '2 roti + palak paneer (light) + salad',
      },
      {
        _key: 'wp3',
        day: 'Wednesday',
        breakfast: 'Poha with vegetables + dahi + 1 amla',
        midMorning: 'Kaju (8-10) + 1 seasonal fruit',
        lunch: '2 chapati + rajma (soaked overnight) + shakarkand sabzi + raita',
        evening: 'Haldi chai + makhana roasted',
        dinner: 'Vegetable khichdi (moong + vegetables) + salad',
      },
      {
        _key: 'wp4',
        day: 'Thursday',
        breakfast: 'Multigrain dalia + 1 tbsp alsi + banana',
        midMorning: 'Badam (10) + 1 guava',
        lunch: '2 roti + arhar dal + mixed sabzi + dahi + salad',
        evening: 'Nimbu paani with sendha namak + roasted chana',
        dinner: '2 roti + fish (grilled mackerel/sardine) + sabzi OR paneer for veg',
      },
      {
        _key: 'wp5',
        day: 'Friday',
        breakfast: 'Besan chilla (2) + dahi + salad',
        midMorning: 'Chia seeds + 1 kiwi',
        lunch: '2 chapati + moong dal + palak sabzi + raita',
        evening: 'Green tea + til ladoo (1 small, homemade)',
        dinner: 'Vegetable soup + 2 roti + lentil soup',
      },
      {
        _key: 'wp6',
        day: 'Saturday',
        breakfast: '2 eggs (any style) + multigrain toast + 1 fruit',
        midMorning: 'Akhrot + coconut water',
        lunch: '2 roti + sabut moong + methi sabzi + dahi',
        evening: 'Haldi doodh (early evening) + roasted seeds mix',
        dinner: 'Khichdi + palak sabzi + salad',
      },
      {
        _key: 'wp7',
        day: 'Sunday',
        breakfast: 'Sprouts chaat + dahi + amla chutney',
        midMorning: 'Fresh fruit bowl (guava, kiwi, orange)',
        lunch: '2 chapati + chana curry + kadhi + salad',
        evening: 'Adrak chai (1 cup) + makhana',
        dinner: '2 roti + egg curry (or paneer) + sabzi + dahi',
      },
    ],

    dos: [
      'Scalp massage (champi) roz 5 min karein — blood circulation improve hoti hai, dormant follicles activate hote hain; coconut, castor ya bhringraj tel use karein',
      'Protein har meal mein zaroor lo — dal, paneer, ande, sprouts — ye baal ka raw material hai, iske bina koi treatment kaam nahi',
      'Blood test karwao — Iron (Ferritin), Vitamin D, Thyroid (TSH), Zinc — root cause pata hoga to sahi treatment milega',
      'Mild, sulfate-free shampoo use karo — harsh shampoos scalp ka natural oil strip karte hain',
      'Stress management seriously lo — yoga, pranayam, 7-8 ghante neend — cortisol ka direct baalon pe bura asar hota hai',
      'Wide-tooth comb use karo — geele baalon mein kabhi plastic fine-tooth comb mat chalao, breakage bahut badhti hai',
      'Satin/silk pillowcase use karein — cotton se friction hoti hai jo raat mein breakage badhata hai',
    ],

    donts: [
      'Geele baalon mein tight ponytail ya bun mat banao — wet hair roots se toot jaata hai',
      'Har roz heat styling mat karo — 200°C heat par keratin proteins damage hote hain jo baalon ki strength hai',
      'Roz shampoo mat karo (unless doctor ne bola ho) — over-washing se scalp oil production disturb hoti hai',
      'Crash diet ya protein-free diet mat karo — baal "luxury organ" hai body ke liye, nutrition kam hone pe pehle baalon ki supply cut hoti hai',
      'Paani kam mat piyo — dehydration se scalp dry aur tight hoti hai, blood circulation reduce hoti hai',
      'YouTube pe dekha treatment apne aap mat try karo — onion juice, garlic ya harsh home remedies se scalp irritate ho sakti hai',
      'Stress ko ignore mat karo — Telogen Effluvium ka main cause yehi hai; dhyan do',
      'Ek mahine mein result ki umeed mat rakho — koi bhi treatment — homeopathy, allopathy ya ayurveda — baalon mein 3-6 mahine lagte hain',
    ],

    faqs: [
      { _key: 'faq1', question: 'Rozana kitne baal girna normal hai?', answer: 'Rozana 50 se 100 baal girna bilkul normal hai — isse zyada nahi girne chahiye. Baal ka ek natural growth cycle hota hai jisme purane baal girte hain aur naye aate hain. Agar subah takiye pe, nahane ke baad drain mein, ya kanghi mein rozana 100 se zyada baal dikh rahe hain to ye "excessive hair fall" hai — aur tabhi doctor se milna chahiye. Ek simple test: ek chauthai mein 60 baalon ko pakadke dheere khenchein — agar 6 se zyada aayein to hair fall abnormal hai.' },
      { _key: 'faq2', question: 'Hair fall permanently band ho sakta hai?', answer: 'Ye depend karta hai type pe. Agar wajah temporary hai — stress, pregnancy, illness, ya nutrition ki kami — to sahi treatment se baal wapas aa jaate hain aur hair fall permanently control ho sakta hai. Androgenetic Alopecia (genetic pattern) mein complete "permanent cure" nahi hoti — lekin treatment se progress rok sakte hain, existing baalon ko bachaa sakte hain, aur nayi growth bhi possible hai. Jo log consistently treatment aur lifestyle pe tike rehte hain unme baal itne control mein aate hain ki life practically normal feel hoti hai.' },
      { _key: 'faq3', question: 'Kya baal girne ki wajah sirf genetic hai?', answer: 'Nahi — genetics sirf ek factor hai. India mein bahut saare cases mein wajah hoti hai: iron ya protein ki kami (anemia), thyroid disorder, Vitamin D deficiency, PCOD, ya chronic stress. Blood test se pata chalta hai. Actually ye acchi baat hai — agar cause non-genetic hai to treat karna aasaan hota hai aur baal wapas aate hain. Sirf "genetics pe blame" karke treatment chhorna sahi nahi — pehle ek proper diagnosis zaroor karwao.' },
      { _key: 'faq4', question: 'Kya homeopathy se baal wapas aa sakte hain?', answer: 'Haan — homeopathy hair regrowth mein effective ho sakti hai, khaas taur pe Alopecia Areata (chakte padna), stress-induced aur hormonal hair fall mein. CCRH-affiliated studies mein Alopecia Areata ke patients mein 6 mahine mein 68% mein visible regrowth observe ki gayi — placebo group mein ye sirf 19% tha. Homeopathy ka fayda ye hai ki ye sirf baal nahi, underlying cause — immunity, hormones, stress response — sab address karta hai. Advanced genetic baldness mein jab follicles completely dead hon wahan results limited hote hain.' },
      { _key: 'faq5', question: 'Hair fall ke liye kaun sa shampoo best hai?', answer: 'Koi ek "magic shampoo" nahi hota — lekin kuch basic rules hain. Sulfate-free shampoo use karo — SLS aur SLES chemicals scalp strip karte hain. Agar scalp dry hai to moisturizing formula lo. Dhyan raho — shampoo baal girane ki wajah treat nahi karta, sirf scalp clean rakhta hai. Wajah andar se hai to treatment bhi andar se hi karana padega. Expensive shampoos pe paise waste karne se better hai ek doctor se milna.' },
      { _key: 'faq6', question: 'Baal girne mein kaun sa tel best hai?', answer: 'Tel se hair fall "cure" nahi hota — lekin scalp health aur blood circulation improve karta hai jo indirect benefit hai. Sabse evidence-backed choices hain: Bhringraj tel — Ayurvedic gold standard, scalp circulation aur follicle activation ke liye. Coconut oil — penetrates hair shaft, protein loss reduces. Castor oil — ricinoleic acid scalp inflammation reduce karta hai, thin hone wale baalon mein helpful. 5 min warm oil massage — ye zyada important hai tel se bhi, kyunki massage se scalp mein blood flow badhta hai.' },
      { _key: 'faq7', question: 'PCOD mein hair fall kyun hota hai aur kya karein?', answer: 'PCOD mein androgen (male hormones — testosterone, DHT) ka level badhta hai — ye directly baal girne ka karan hai. Scalp pe baal girte hain aur face pe unwanted hair aate hain — is combination ko "Hyperandrogenism" kehte hain. Kya karein: PCOD ka treatment pehle — diet, weight management, doctor-prescribed medicines. Homeopathy mein PCOD ke liye constitutional treatment diya jaata hai jo hormonal balance restore karta hai aur isse hair fall bhi improve hota hai. Sirf baal ka ilaaj karna aur PCOD ko ignore karna waise hai jaise paani bharti nali mein se paani nikaalo lekin nali band na karo.' },
      { _key: 'faq8', question: 'Pregnancy ke baad itne baal kyun girte hain?', answer: 'Pregnancy mein estrogen hormone ka level bahut high hota hai — ye hair growth phase (anagen) ko extend karta hai, isliye pregnancy mein baal zyada acche dikhte hain. Delivery ke baad estrogen suddenly drop hota hai — aur jo baal "extra" roke hue the wo sab ek saath shed karte hain. Is condition ko Postpartum Telogen Effluvium kehte hain. Ye normal hai aur 3-6 mahine mein apne aap theek hone lagta hai. Iron aur protein ka dhyan rakho — breastfeeding mein bhi body ko zyada nutrition chahiye. Homeopathy mein Phosphoric Acid ya Natrum Mur is phase mein effective support deti hai.' },
      { _key: 'faq9', question: 'Kya baal girna stress se hota hai?', answer: 'Haan — aur ye scientifically proven hai. Severe stress se body mein cortisol hormone badhta hai jo hair follicles ko "rest phase" (telogen) mein push karta hai — ek saath bahut baal girne lagte hain. Ye stress ke 2-3 mahine baad hota hai isliye log connect nahi kar paate. COVID recovery, exam stress, bereavement, job loss — in sab ke baad hair fall ki complaint common hai. Stress manage karo — yoga, meditation, acchi neend — ye bilkul utna important hai jitna diet ya shampoo. Homeopathy mein stress aur hair fall dono ek saath treat kiye jaate hain.' },
      { _key: 'faq10', question: 'Balding area mein kya baal wapas aa sakte hain?', answer: 'Depend karta hai kitne time se bald hai aur follicle alive hai ya nahi. Agar 1-2 saal se kam hai aur abhi bhi follicle active hai (barely visible peach fuzz dikhe to sign hai), to treatment se regrowth possible hai. Agar bald area 5+ saal purana hai aur koi bhi fuzz nahi hai — follicle dead hai — to medical treatment bhi limited kaam karta hai. Alopecia Areata (patches) mein follicles mostly alive rehte hain aur homeopathy se accha response milta hai. Early treatment sabse important hai — delay karne se window close hoti hai.' },
      { _key: 'faq11', question: 'Kaun sa vitamin/supplement hair fall ke liye best hai?', answer: 'Pehle blood test karwao — random supplements lena helpful nahi hota, aur kuch excess lene se nuksan bhi ho sakta hai. Commonly deficient jo milte hain: Iron + Ferritin (serum ferritin <30 ho to baal girte hain), Vitamin D3 (70% Indians mein deficient), Zinc, Biotin (only agar actually deficient ho — excess khaane se thyroid test affect hota hai). Doctor se blood reports ke baad hi supplement lo — aur homeopathic treatment ke saath supplementation better kaam karti hai.' },
      { _key: 'faq12', question: 'Hair fall ke liye kya gharelu nuskhe kaam karte hain?', answer: 'Kuch gharelu cheezein genuinely helpful hain: Amla (Vitamin C) — roz ek amla ya amla juice, collagen banata hai. Methi (Fenugreek) seeds — raat bhar bhigo ke paste banao, scalp pe lagao — protein rich, scalp soothing. Scalp massage with warm oil — 5 min daily circulation ke liye. Balanced protein diet — sabse bada "nuskha". Jo kaam NAHI karta: onion juice (evidence weak hai, smell problematic), garlic rubbing (irritation badh sakti hai), egg alone on hair (biotin outside se absorb nahi hoti). Gharelu nuskhe supportive role mein theek hain — main treatment ki jagah nahi.' },
      { _key: 'faq13', question: 'Kya dandruff se baal girte hain?', answer: 'Haan — dandruff (seborrheic dermatitis) indirect taur pe hair fall badhata hai. Jab scalp pe yeast (Malassezia) zyada hoti hai to inflammation hoti hai — ye inflammation follicles ko weak karti hai. Scratching se bhi roots ko damage hota hai. Dandruff treat karo — antifungal shampoo, tea tree oil, neem water rinse — aur hair fall bhi improve hogi. Lekin agar dandruff theek ho jaye aur phir bhi baal gir rahe hain to underlying cause alag hai jo dhundhna padega.' },
      { _key: 'faq14', question: 'Bacchon mein baal girna — kya normal hai?', answer: 'Chote bacchon (0-2 year) mein baal girna bilkul normal hai — newborn hair replace hote hain. School age ke bacchon mein agar patches ban rahe hain ya suddenly zyada baal gir rahe hain, to ye concern hai. Causes ho sakte hain: Tinea Capitis (fungal infection — most common, contagious), Alopecia Areata (autoimmune), Trichotillomania (baal khichne ki compulsion — anxiety sign), Nutritional deficiency. Bacchon mein homeopathy very safe option hai — koi side effects nahi. Lekin doctor se milna zaroori hai — khud treat mat karo.' },
      { _key: 'faq15', question: 'Kya tight hairstyle se baal permanently chale jaate hain?', answer: 'Agar bahut zyada der tak aur regularly tight ponytail ya braids rahein, to haan — permanent damage ho sakta hai. Is condition ko Traction Alopecia kehte hain. Hairline pe aur temples pe sabse zyada baal jaate hain. Early stage mein tight hairstyles chodne se baal wapas aa sakte hain. Lekin agar years tak damage ho to follicles scar ho jaate hain aur regrowth nahi hoti. Protect karo — loose hairstyles, satin/silk scrunchies use karo.' },
      { _key: 'faq16', question: 'Hair transplant kab karna chahiye?', answer: 'Hair transplant tab consider karo jab: Grade III-IV male pattern baldness ho, medical treatments (minoxidil, finasteride, homeopathy) se satisfactory result na aaya ho, aur stable hair loss ho (actively nahi gir raha). Hair transplant ek permanent solution hai advanced cases ke liye — lekin expensive hai, aur transplanted area ke baad bhi baki baal girna rok nahi sakta. Isliye medical treatment pehle — transplant last option hai. Homeopathy se early aur moderate cases mein transplant avoid kiya ja sakta hai.' },
      { _key: 'faq17', question: 'Female hair fall male hair fall se alag kyun hota hai?', answer: 'Haan — pattern aur reasons alag hote hain. Mahilaon mein: beech ki maang chodi hoti hai, complete baldness rare hai, hormonal causes zyada common hain (PCOD, thyroid, pregnancy, menopause). Purushon mein: hairline recede hoti hai M-shape mein, crown bald hota hai, genetic aur DHT-driven pattern. Women mein iron deficiency aur Vitamin D deficiency ka role bahut zyada hota hai — aur aksar miss ho jaata hai. Isliye mahilaon ke hair fall mein blood test zyada important hai — PCOD panel bhi zaroori hai.' },
      { _key: 'faq18', question: 'Baal girne ki kaun si stage hai ki turant doctor ke paas jaana chahiye?', answer: 'In situations mein delay mat karo: Ek hi jagah pe golakar patch (Alopecia Areata ka sign). Baal ke saath scalp pe dard, swelling ya pus (infection). Suddenly 3-4 mahine mein bahut zyada baal girna. Eyebrows ya eyelashes bhi girna. Baalon ke saath weight gain, extreme thakaan (thyroid sign). Baalon ke saath irregular periods aur acne (PCOD sign). Scalp pe scars ya permanent smooth patches (scarring alopecia). Early treatment mein results bahut better hote hain — delay karne se window close ho jaati hai.' },
      { _key: 'faq19', question: 'Minoxidil use kar raha hoon — kya homeopathy saath chal sakti hai?', answer: 'Haan — homeopathy aur minoxidil saath chal sakti hain. Ye dono mechanisms alag hain — minoxidil directly follicle ko stimulate karta hai, homeopathy systemic cause address karta hai. Ek qualified homoeopath ko batao ki aap minoxidil use kar rahe ho — wo accordingly treatment plan karega. Faida ye hai ki jab homeopathy se root cause address hoti hai to waqt ke saath minoxidil pe dependence naturally kam ho sakti hai. Sudden minoxidil band mat karo — doctor ki salaah se hi karo.' },
      { _key: 'faq20', question: 'Kya diet se sach mein baal girna rok sakte hain?', answer: 'Haan — aur ye underrated hai. Agar aapka hair fall nutrition se related hai (jo India mein bahut common hai), to diet improve karna medication se bhi zyada effective ho sakta hai. Ek study mein serum ferritin level 30 se upar lana alone hair fall mein significant improvement di. Protein adequate hona — apne weight ke per kg 0.8-1g — ye baalon ke liye non-negotiable hai. Ek basic rule: agar ek khaane mein koi protein source nahi hai to ye meal hair-friendly nahi hai. Simple change, big impact.' },
      { _key: 'faq21', question: 'Mehndi lagane se baal girte hain?', answer: 'Natural henna (mehndi) se hair fall nahi hoti — balki thodi conditioning hoti hai. Lekin "black henna" ya chemical mixed mehndi (PPD — paraphenylenediamine) se severe scalp reaction ho sakta hai jo follicles ko damage karta hai. Chemical mehndi identifiers: raat bhar jaldi set hoti hai, dark black color aata hai, burning sensation — ye signs hain ki chemical hai. Natural mehndi ka color orange-brown hota hai aur 4-6 ghante lagti hai. Agar scalp sensitive hai to patch test karein.' },
      { _key: 'faq22', question: 'Hair fall mein kya yoga ya exercise help karta hai?', answer: 'Haan — directly. Inversion poses (Sarvangasana, Sirsasana, Adho Mukha Svanasana) — scalp mein blood flow badhata hai, follicles ko nutrient delivery improve hoti hai. Pranayam (Anulom Vilom, Kapalbhati) — cortisol kam hota hai, oxygen flow badhta hai. Regular cardio — overall circulation improve hoti hai. Balasana (child pose) — stress relief, cortisol reduce. Avoid: excessive exercise jab calories already kam ho — overtraining se bhi hair fall badh sakta hai.' },
      { _key: 'faq23', question: 'Kya chemical treatment (coloring, straightening) permanently baal kharab karti hai?', answer: 'Chemical treatments hair shaft ko damage karte hain — lekin follicle generally safe rehta hai agar scalp pe chemical direct irritation na aaye. Breakage hoti hai — baal shaft se toote hain root se nahi. Lekin repeated chemical processing se hair itna weak ho jaata hai ki length maintain karna mushkil ho jaata hai. Kya karein: 6-8 hafte ka break lo chemicals ke beech, deep conditioning karein, protein treatment use karein. Jo log frequently color/straighten karte hain unhe diet mein zyada protein chahiye — repair ke liye.' },
      { _key: 'faq24', question: 'Kya neend kam hone se baal girte hain?', answer: 'Haan — neend ke dauran body repair aur regenerate karta hai — baal growth bhi isi waqt hoti hai. Chronic sleep deprivation (6 ghante se kam) se cortisol badhta hai, growth hormone kam hota hai — dono baalon ke liye bure hain. 7-8 ghante ki quality sleep — ye bhi hair care hai, aur free mein milti hai. Satin/silk pillowcase use karein — cotton pillowcase se friction hoti hai jo breakage badhata hai raat mein. Stress bhi saath ho to dono combine ho jaate hain — hair fall drastically badh jaata hai.' },
      { _key: 'faq25', question: 'Kitne time mein hair fall treatment ka result dikhta hai?', answer: 'Realistic timeline: 4-6 hafte mein hair fall ki matra mein thodi kami — shedding slowly reduce hoti hai. 2-3 mahine mein hair fall significantly control mein aata hai. 4-6 mahine mein new growth visible honi shuru hoti hai (pehle baby fine hairs, phir thick). 6-12 mahine mein full results. Ye timeline homeopathy, minoxidil, ya kisi bhi treatment mein roughly same hai — kyunki hair growth cycle slow hota hai. 1 mahine mein koi bhi treatment judge mat karo. Jo log impatient hoke bich mein treatment chodh dete hain unhe kabhi result nahi milta — consistency sabse important factor hai.' },
    ],

    sources: [
      { _key: 'src1', name: 'CCRH (Council for Research in Homoeopathic Medicine) — Multi-center study on Alopecia Areata', year: '2019' },
      { _key: 'src2', name: 'Indian Journal of Research in Homoeopathy — Efficacy of Homoeopathic Treatment in Alopecia Areata', year: '2018' },
      { _key: 'src3', name: 'International Journal of Trichology — Hair Loss in Indian Population: Epidemiology and Management', year: '2021' },
      { _key: 'src4', name: 'American Academy of Dermatology — Hair Loss Types and Treatment Overview', year: '2023' },
      { _key: 'src5', name: 'NCBI / PubMed — Nutritional Deficiencies and Hair Loss: Iron, Zinc, Biotin, Vitamin D', year: '2022' },
      { _key: 'src6', name: 'Lancet Global Burden of Disease Study — Skin Conditions Including Hair Disorders Prevalence India', year: '2020' },
    ],
  }

  console.log('Seeding Hair Fall...')
  await client.createOrReplace(doc)
  console.log('✅ Hair Fall seeded successfully!')
}

seed().catch(console.error)
