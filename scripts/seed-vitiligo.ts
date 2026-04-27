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
    _id: 'disease-vitiligo',
    _type: 'disease',
    title: 'Vitiligo',
    hindiName: 'सफेद दाग / श्वेत कुष्ठ / फुलबेहरी',
    slug: { _type: 'slug', current: 'vitiligo' },
    category: 'Skin',
    metaTitle: 'Vitiligo (Safed Daag) Treatment, Causes & Homeopathy | Homeopedia',
    metaDescription: 'Vitiligo ke causes, types, homeopathic treatment, diet chart aur skin care — verified info, doctor-reviewed. Safed daag ka ilaaj Hinglish mein.',
    publishedAt: new Date('2026-04-26').toISOString(),
    heroText: 'Vitiligo ek skin condition hai jisme skin ke kuch hisson mein melanin-producing cells (melanocytes) khatam ho jaati hain — aur wahan safed ya chalk-white daag ban jaate hain. Ye daag shareer ke kisi bhi hisse pe aa sakte hain — chehra, haath, lips, ghutne ya private parts bhi. Ye infectious nahi hai — chhoone se bilkul nahi failta. Ye ek autoimmune condition hai — body ka immune system galti se apni hi melanocytes ko attack karta hai. India mein duniya mein sabse zyada vitiligo prevalence hai — lagbhag 5-8% population affected hai.',

    quickFacts: {
      whatItIs: 'Autoimmune skin condition jisme melanocytes destroy hoti hain — skin safed ho jaati hai; contagious NAHI hai, physically dangerous NAHI hai',
      howCommon: 'India mein duniya mein sabse zyada prevalence — estimated 5-8% population, 40-50 million affected',
      treatmentDuration: 'Meaningful results ke liye 6-18 mahine; patience aur consistency zaroori',
      successRate: 'CCRH clinical observations: 60-65% patients mein 6-12 mahine mein measurable repigmentation observed',
    },

    types: [
      {
        _key: 'type1',
        name: 'Generalized Vitiligo (Sabse Common)',
        description: 'Dono taraf symmetrically daag aate hain — jaise dono haath, dono ghutne. Slowly body ke bade hisson pe failta hai. Most common type — 90% cases is type ke hote hain.',
        whoGetsIt: 'Kisi bhi umar mein; adults mein sabse common',
        treatmentApproach: 'Homoeopathic constitutional treatment + sun protection + thyroid management. 12-18 mahine ka process — stabilize karna pehla goal, phir repigmentation.',
      },
      {
        _key: 'type2',
        name: 'Segmental Vitiligo',
        description: 'Ek taraf ka daag — asymmetric. Ek nerve segment follow karta hai. Jaldi stable ho jaata hai — spread karna band kar deta hai.',
        whoGetsIt: 'Bacchon mein zyada common',
        treatmentApproach: 'Sabse achha prognosis. Homoeopathy + topical treatment combination bahut effective. Repigmentation ke achhe chances.',
      },
      {
        _key: 'type3',
        name: 'Focal Vitiligo',
        description: 'Chhota sa ek jagah daag — spread nahi karta ya bahut dheere karta hai. Early stage hoti hai.',
        whoGetsIt: 'Kisi bhi umar mein ho sakta hai',
        treatmentApproach: 'Early catch karo — homoeopathy mein best results is stage pe milte hain. Spread hone se pehle treat karna best strategy.',
      },
      {
        _key: 'type4',
        name: 'Acrofacial Vitiligo',
        description: 'Sirf chehra, haath-pair ki ungliyaan, aur muh ke aaspaas. Treatment ke liye nisbatan aasaan area.',
      },
      {
        _key: 'type5',
        name: 'Universal Vitiligo',
        description: '80% se zyada skin ka rang chala jaata hai. Rare case — advanced stage. Combination approach zaroori.',
        treatmentApproach: 'Allopathy + homoeopathy dono zaroori. Psychosocial support bhi treatment ka hissa. Cosmetic camouflage bhi valid option.',
      },
      {
        _key: 'type6',
        name: 'Mucosal Vitiligo',
        description: 'Muh, lips, ya genitals ki mucous membrane pe daag. Alag approach chahiye treatment mein.',
      },
    ],

    causes: [
      'Autoimmune attack — body ki immunity cells galti se melanocytes ko destroy karti hain; ye sabse main reason hai',
      'Genetic predisposition — agar family mein kisi ko vitiligo, thyroid, ya diabetes hai to risk badhta hai',
      'Oxidative stress — free radicals ka overload melanocytes ko damage karta hai; stress aur pollution major contributors',
      'Thyroid dysfunction — hypothyroidism ya Hashimoto\'s thyroiditis ke saath vitiligo ka bahut strong connection hai; 20-30% vitiligo patients mein thyroid abnormality milti hai',
      'Chemical exposure — rubber shoes, plastic watch straps, certain phenol-based chemicals se contact vitiligo trigger ho sakta hai',
      'Emotional trauma ya prolonged stress — strong trigger; especially onset ya sudden spread ke waqt',
    ],

    riskFactors: [
      'Family history — first-degree relative mein vitiligo ho to risk 6-7 guna zyada',
      'Autoimmune diseases — thyroid disorders, Type 1 diabetes, rheumatoid arthritis ke patients mein zyada',
      'Age 10-30 saal — ye age group highest risk mein hai; 50% cases is age mein develop hote hain',
      'Personal history of skin trauma — cuts, sunburn ya repeated friction wali jagahon pe Koebner phenomenon se daag aa sakte hain',
      'Chronic stress — emotional ya physical stress major trigger hai',
      'Nutritional deficiencies — Vitamin B12, Vitamin D, copper, zinc ki kami; melanin synthesis ke liye ye sab zaroori hain',
    ],

    complications: [
      'Psychological impact — depression, social anxiety, low self-esteem; India mein marriage ke time bahut discrimination hoti hai',
      'Sunburn sensitivity — safed daag wali skin mein melanin nahi hota, UV protection zero; sunburn ka risk bahut zyada',
      'Eye involvement — kuch cases mein eyes ki pigmentation bhi affect hoti hai; uveitis ka risk',
      'Associated autoimmune diseases — thyroid, diabetes, alopecia areata ka risk badhta hai kyunki root autoimmune process same hai',
    ],

    symptoms: [
      {
        _key: 'sg1',
        category: 'Skin Changes (Sabse Pehle Ye Dikhta Hai)',
        items: [
          'Chalk-white ya milky-white flat daag — jahan pigment completely chala gaya',
          'Daag ke edges clear aur sharp hote hain — normal skin se clearly alag dikhte hain',
          'Daag mein koi dard, kharish (itching) ya burning nahi hoti — sirf rang change hota hai',
          'Daag dhoop mein zyada visible hote hain — tanned skin ke contrast mein',
          '"Trichrome vitiligo" mein teen colors dikhte hain — white, light brown, normal — transition zone',
        ],
      },
      {
        _key: 'sg2',
        category: 'Progression Signs (Spread Ho Raha Hai Kaise Pehchanen)',
        items: [
          'Naye chhote daag baar baar kisi naye jagah pe aa rahe hain — active phase ka sign',
          'Koi cut, chot, ya pressure wali jagah pe daag aa jaana — Koebner phenomenon',
          'Already bane daag ka size badh raha hai — expanding lesion',
          'Stress ya illness ke baad suddenly naye daag — stress-triggered flare',
        ],
      },
      {
        _key: 'sg3',
        category: 'Associated Signs (In Par Zaroor Dhyan Dein)',
        items: [
          'Hair ka rang bhi safed ho jaana daag ke andar — follicular involvement',
          'Premature graying of hair, eyebrows, eyelashes',
          'Lips, nipples, genitals pe safed hona — mucosal involvement',
          'Aankhon mein halki sensitivity ya redness — eye involvement possible',
        ],
      },
    ],

    seasonalCare: {
      summer: 'Sabse challenging season — safed daag wali skin mein melanin zero; UV rays directly cells ko damage karti hain. SPF 50+ sunscreen ZAROOR lagayein. Dhoop mein nikalna ho to cotton ka poora kapda pehno. Garmi mein sweating zyada — skin infection ka risk; achi hygiene zaroori. Hydration bahut zaroori — din mein 8-10 glass paani.',
      monsoon: 'Nami mein fungal infections ka risk — safed daag wali skin pe zyada dhyan. Geele kapde turant badalein — moisture ko skin pe mat rukne do. Antifungal soap mild use karein. Monsoon mein homoeopathic treatment regularly lena aur zyada important ho jaata hai.',
      winter: 'Vitiligo mein skin already dry rehti hai — winter mein aur buri hoti hai. Coconut oil ya sesame oil (til ka tel) daily massage — skin barrier maintain karna. Vitamin D ki natural source — dhoop (10-15 min safe time mein) — winter mein bahut important. Woolen fabrics direct skin pe nahi — cotton layer pehle.',
    },

    ccrhEvidence: {
      improvementRate: '60-65% patients mein 6-12 mahine mein measurable repigmentation observed; follicular repigmentation aur lesion size reduction dono noted',
      avgTreatmentPeriod: '12-18 mahine (meaningful improvement ke liye)',
      citation: 'Journal of Research in Homoeopathy (CCRH publication), 2010-2020; Chauhan PS et al. — Homoeopathic treatment in vitiligo: Observational study',
      keyFindings: [
        'Treatment group mein lesion size reduction aur follicular repigmentation dono observed',
        'Thyroid-associated vitiligo cases mein homoeopathic treatment ke saath thyroid markers bhi improve hue',
        'Emotional stress ke cases mein constitutional treatment se recurrence frequency ghati',
        'Segmental vitiligo mein stability (spread rokna) treatment ka pehla noted outcome raha',
      ],
    },

    homeopathyBenefits: [
      'Autoimmune attack ko modulate karta hai — melanocyte destruction ka process dheema karta hai',
      'Thyroid-linked vitiligo mein dono conditions simultaneously address hoti hain — ek hi treatment se',
      'Side effects practically nil — steroids ya UV therapy ke comparison mein bahut safe',
      'Children aur pregnant women ke liye safe — koi harsh chemical nahi',
      'Repigmentation ke baad relapse prevention mein effective — long-term stability',
    ],

    homeopathyLimitations: [
      'Universal vitiligo (80%+ skin affected) mein homoeopathy alone kaafi nahi — conventional dermatology ke saath combine karna zaroori',
      'Results aane mein 6-18 mahine lagta hai — "jaldi" expect karna galat hai; patience zaroori hai',
      'Active, rapidly spreading vitiligo mein pehle stabilization zaroori — homoeopathy is mein kaam karta hai lekin instant visible change nahi hota',
    ],

    medicines: [
      {
        _key: 'm1',
        name: 'Arsenicum Sulphuratum Flavum',
        bestFor: 'Vitiligo with skin dryness, burning sensation aur anxiety — restless, worried nature',
        keyIndications: [
          'Skin dryness aur burning sensation ke saath vitiligo',
          'Anxiety aur restlessness — vitiligo ko trigger karne wali',
          'Sulfur metabolism normalize karne mein kaam karti hai',
          'Melanin synthesis ke sulfur pathways support karta hai',
          'Emotionally anxious, health-conscious patients',
        ],
      },
      {
        _key: 'm2',
        name: 'Hydrocotyle Asiatica',
        bestFor: 'Circular ya spreading white patches — body trunk pe; skin thickening ke saath vitiligo',
        keyIndications: [
          'Circular ya spreading white patches — especially body trunk pe',
          'Skin thickening ke saath vitiligo',
          'Melanocyte stimulation mein direct noted action',
          'Repigmentation support ke liye most commonly indicated',
          'Follicular repigmentation (daag ke beech baalon se rang aana) cases mein',
        ],
      },
      {
        _key: 'm3',
        name: 'Silicea',
        bestFor: 'Physically weak, thin patients — low immunity, nutritional absorption problem wale',
        keyIndications: [
          'Physically weak, thin, easily sweating patients',
          'Immune system generally low — baar baar infections',
          'Nutritional absorption problem — vitamins minerals absorb nahi hote',
          'Connective tissue aur immune function dono pe kaam karta hai',
          'Constitutionally weak patients ke liye foundational medicine',
        ],
      },
      {
        _key: 'm4',
        name: 'Natrum Muriaticum',
        bestFor: 'Grief ya stress ke baad vitiligo — emotions andar daba ke rakhne wale; sun-sensitive skin',
        keyIndications: [
          'Emotional grief, heartbreak ya long-term stress ke baad vitiligo develop hua ho',
          'Apne emotions andar daba ke rakhne wale — alone mein rote hain',
          'Sun-sensitive skin — dhoop se daag zyada dark ya spread hote hain',
          'Salt craving, dry lips, headache in sun',
          'Introvert — consolation se aur bura lagta hai',
        ],
      },
      {
        _key: 'm5',
        name: 'Phosphorus',
        bestFor: 'Tall, lean, sensitive patients — sun se daag badh jaate hain; thyroid issues ke saath vitiligo',
        keyIndications: [
          'Tall, lean, sensitive personality',
          'Sun exposure se daag aur badh jaate hain',
          'Socially very conscious apni skin ke baare mein',
          'Thyroid issues ke saath vitiligo',
          'Immune dysregulation aur sun-triggered cases mein indicated',
        ],
      },
    ],

    dietInclude: [
      {
        _key: 'di1',
        category: 'Antioxidant Rich Foods',
        emoji: '🫐',
        items: [
          'Blueberries, pomegranate, amla — free radical damage se melanocytes bachate hain; oxidative stress kam karte hain',
          'Palak, methi, kale — folate aur antioxidants jo melanin synthesis support karte hain',
          'Gajar, papaya — beta-carotene; skin health ke liye zaroori',
          'Green tea (bina dudh ke) — EGCG antioxidant; inflammation kam karta hai',
        ],
      },
      {
        _key: 'di2',
        category: 'Copper & Zinc Rich Foods',
        emoji: '🥜',
        items: [
          'Til (sesame seeds) — copper ka rich source; melanin banane ka enzyme (tyrosinase) ko copper chahiye hota hai',
          'Kaju, badam, akhrot — zinc aur selenium; melanocyte protection',
          'Rajma, chana, daal — plant-based zinc; daily khana zaroori',
          'Mushroom — copper + selenium dono; immune regulation',
        ],
      },
      {
        _key: 'di3',
        category: 'Vitamin B12 & D Sources',
        emoji: '🥚',
        items: [
          'Anda (egg) — B12 ka best source; vitiligo patients mein B12 deficiency bahut common hai',
          'Paneer, dahi — B12 + probiotics; gut health vitiligo se connected hai',
          'Fish (mackerel, sardine) — Vitamin D + omega-3; anti-inflammatory',
          'Fortified cereals — B12 supplementation; vegetarians ke liye important',
        ],
      },
    ],

    dietAvoid: [
      {
        _key: 'da1',
        category: 'Vitamin C Excess (Active Phase Mein)',
        emoji: '🍋',
        items: [
          'Zyada nimbu, orange ka juice — khaali pet: high dose Vitamin C melanin synthesis ko block karta hai — active phase mein avoid karein',
          'Tomato khaali pet — acidic + high Vit C combo; active phase mein zyada avoid karein',
        ],
      },
      {
        _key: 'da2',
        category: 'Inflammatory Foods',
        emoji: '🚫',
        items: [
          'Maida products (bread, biscuit, pizza) — inflammation trigger; immune dysregulation worsen karta hai',
          'Refined sugar, mithai, cold drinks — blood sugar spike; oxidative stress badhata hai',
          'Processed/packaged foods — preservatives aur chemicals; autoimmune conditions mein avoid karna better',
          'Alcohol — directly immune system disturb karta hai; vitiligo ke liye avoid',
        ],
      },
      {
        _key: 'da3',
        category: 'Reported Trigger Foods (Indian Context)',
        emoji: '⚠️',
        items: [
          'Dudh + fish ya nimbu ka combination — Ayurveda mein virudh ahaar; kuch patients mein trigger deka gaya',
          'Zyada khatta (imli, aam pickle, sirka) — kuch cases mein aggravation report',
          'Excess red meat — arachidonic acid; pro-inflammatory',
        ],
      },
    ],

    dietTip: 'Subah khali pet: Garam paani + 1 chammach til — ye copper supplement hai jo melanin enzyme (tyrosinase) ke liye zaroori hai. Traditional practice hai aur copper source ke roop mein logic bhi hai.',

    dietNote: 'Vitamin B12 aur Vitamin D blood levels zaroor check karwayein — vitiligo patients mein dono ki kami bahut common hai. Sirf diet se nahi, supplement bhi doctor ki guidance mein lena padega. Taambey ke bartan mein raat bhar paani rakh ke subah peena — copper supplementation ka traditional tarika.',

    weeklyPlan: [
      {
        _key: 'wp1',
        day: 'Somwar / Monday',
        breakfast: 'Oats + dahi + 1 boiled egg + amla juice (1 tsp)',
        midMorning: 'Muthe bhar badam + akhrot (soaked)',
        lunch: 'Roti (2) + palak sabzi + moong dal + dahi',
        evening: 'Green tea (bina dudh ke) + til ke ladoo ya roasted til',
        dinner: 'Khichdi (moong + rice) + ghee + boiled vegetables',
      },
      {
        _key: 'wp2',
        day: 'Mangalwar / Tuesday',
        breakfast: 'Dalia (broken wheat) porridge + paneer (50g) + amla',
        midMorning: 'Coconut water + 4-5 kaju',
        lunch: 'Roti (2) + methi sabzi + chana dal + salad',
        evening: 'Haldi wala doodh (low sugar) + roasted chana',
        dinner: 'Roti (2) + lauki sabzi + rajma (small portion)',
      },
      {
        _key: 'wp3',
        day: 'Budhwar / Wednesday',
        breakfast: 'Besan chilla (2) + pudina chutney + 1 boiled egg',
        midMorning: 'Papaya (medium bowl) + pumpkin seeds',
        lunch: 'Brown rice + fish curry (mackerel/sardine) + palak sabzi',
        evening: 'Green tea + badam (5)',
        dinner: 'Roti (2) + mix vegetable + dahi',
      },
      {
        _key: 'wp4',
        day: 'Guruwar / Thursday',
        breakfast: 'Poha with vegetables + 1 egg + ginger tea',
        midMorning: 'Pomegranate (seasonal) + akhrot (2)',
        lunch: 'Roti (2) + chana dal + spinach sabzi + raita',
        evening: 'Til ki chikki (1 small piece) ya til + jaggery mix',
        dinner: 'Vegetable soup (thick) + roti (1-2) + daal',
      },
      {
        _key: 'wp5',
        day: 'Shukrawar / Friday',
        breakfast: 'Idli (3) + sambar + green chutney',
        midMorning: 'Amla murabba + soaked almonds',
        lunch: 'Roti (2) + rajma + mix sabzi + dahi',
        evening: 'Green tea + mushroom soup (homemade)',
        dinner: 'Dalia khichdi + sabzi + ghee',
      },
      {
        _key: 'wp6',
        day: 'Shanivaar / Saturday',
        breakfast: 'Egg bhurji (2 eggs) + multigrain toast + amla juice',
        midMorning: 'Seasonal fruit (non-citrus) + kaju (5)',
        lunch: 'Brown rice + fish / paneer curry + palak dal',
        evening: 'Haldi milk + roasted sesame seeds',
        dinner: 'Roti (2) + baingan bharta + moong dal',
      },
      {
        _key: 'wp7',
        day: 'Raviwar / Sunday',
        breakfast: 'Uttapam with vegetables + sambar + dahi',
        midMorning: 'Fresh fruit bowl (apple, pear, pomegranate)',
        lunch: 'Roti (2) + chana curry + green salad + raita',
        evening: 'Green tea + mixed nuts (til, akhrot, kaju)',
        dinner: 'Khichdi + palak sabzi + ghee + papad',
      },
    ],

    lifestyle: [
      {
        _key: 'ls1',
        title: 'Sun Protection — Daily Non-Negotiable',
        description: 'SPF 50+ sunscreen roz lagayein — daag wali jagah pe especially. Cloudy days mein bhi UV aata hai. Subah 8-10 baje ki 10-15 min halki dhoop Vitamin D ke liye theek hai — SPF lagake. Dhoop mein nikalna ho to cotton ka poora kapda pehno — protective clothing.',
      },
      {
        _key: 'ls2',
        title: 'Stress Management — Vitiligo Ka Direct Trigger',
        description: 'Daily 20-30 min yoga ya light exercise — cortisol kam hota hai; immune system regulate hoti hai. Meditation ya pranayam — khaaskar Anulom Vilom aur Bhramari — vagus nerve soothe karta hai. Sleep 7-8 ghante — immune repair raat ko hoti hai.',
      },
      {
        _key: 'ls3',
        title: 'Til Ka Tel (Sesame Oil) Daily Massage',
        description: 'Copper-rich sesame oil se gentle massage — antioxidant properties; skin barrier support. Traditionally vitiligo mein use hota raha hai. Daag wali jagah pe circular motion mein halke haath se lagayein. Coconut oil alternative hai.',
      },
      {
        _key: 'ls4',
        title: 'Thyroid Monitoring',
        description: 'TSH, T3, T4 annual check — 20-30% vitiligo patients mein thyroid issue milta hai. Uncontrolled thyroid vitiligo ko zyada active karta hai aur treatment slow karta hai. Thyroid normal range mein rakho to vitiligo treatment significantly better kaam karta hai.',
      },
    ],

    dos: [
      'Sunscreen SPF 50+ daily lagayein daag wali jagah pe — melanin ki kami mein ye hi aapka UV protection hai; cloudy days mein bhi',
      'Thyroid test (TSH, T3, T4) aur Vitamin B12 level zaroor check karwayein — ye do most common missing pieces hain vitiligo treatment mein',
      'Til ka tel (sesame oil) se gentle massage daily — copper source; skin barrier support',
      'Cotton ke dhile kapde pehno — tight elastic ya synthetic se Koebner phenomenon trigger ho sakta hai',
      'Homoeopathic treatment regularly lein — miss mat karein; immunity regulate hone mein time lagta hai, beech mein chhodne se relapse hota hai',
    ],

    donts: [
      'Daag wali skin pe strong steroid creams khud se mat lagayein — doctor prescription ke bina; skin thin ho jaati hai aur long-term harm hota hai',
      'Bleaching ya skin-lightening products bilkul nahi — ye melanocytes ko aur toxic bana dete hain',
      'Laser ya UV treatment bina dermatologist guidance ke nahi — galat dose se burning aur blistering ho sakti hai',
      'Scratching ya rubbing — Koebner trigger; naye daag aa sakte hain us jagah',
      'Stress ignore mat karein — "sirf skin ki bimari hai" ye soch galat hai; stress direct trigger hai vitiligo ka',
      'Chemical-based rubber slippers ya plastic footwear directly skin pe — contact vitiligo trigger ho sakta hai',
    ],

    caseStudies: [
      {
        _key: 'case1',
        profile: '22 saal ka student, Delhi — stress-triggered generalized vitiligo',
        duration: 'Board exams ke baad 6 mahine mein haath aur chehra pe daag tezi se spread hua',
        treatment: 'Natrum Muriaticum (grief/stress pattern) + thyroid test (subclinical hypothyroid mila, treat kiya) + sun protection strict',
        result: '4 mahine mein spread ruk gaya, 10 mahine mein follicular repigmentation shuru, 18 mahine mein 60% daag mein rang wapas aaya',
      },
      {
        _key: 'case2',
        profile: '35 saal ki teacher, Nagpur — segmental vitiligo, left side neck',
        duration: '8 mahine se stable daag, pehle se koi treatment nahi liya tha',
        treatment: 'Hydrocotyle Asiatica + Silicea (constitutionally weak) + sesame oil massage daily',
        result: '3 mahine mein daag stable confirmed, 6 mahine mein edges pe follicular repigmentation, 1 saal mein 50% repigmentation',
      },
    ],

    faqs: [
      { _key: 'f1', question: 'Vitiligo kya hota hai aur safed daag normal skin se alag kyun lagta hai?', answer: 'Vitiligo ek autoimmune skin condition hai jisme skin ki melanin-producing cells (melanocytes) khatam ho jaati hain — us jagah ki skin safed ya chalk-white ho jaati hai. Ye normal skin se alag isliye lagta hai kyunki normal skin mein melanin hota hai jo rang aur UV protection dono deta hai — vitiligo wali jagah mein dono chale jaate hain. Ye dardnak (painful) nahi hota aur chhoone se bilkul nahi failta. India mein lagbhag 5-8% population mein vitiligo hota hai — duniya mein India ki prevalence sabse zyada hai.' },
      { _key: 'f2', question: 'Vitiligo kaise shuru hota hai — pehle kya dikhta hai?', answer: 'Aksar ek chhota sa safed ya halka daag shuru hota hai — usually haath ki ungliyaan, chehra, lips ke aaspaas, ya kohni-ghutne pe. Shuru mein itna chhota hota hai ki log ignore kar dete hain ya fungal infection samajh lete hain. Dhoop mein nikalne par ye contrast mein zyada clear dikhta hai. Agar kisi cut ya friction wali jagah pe achanak safed rang aaye — jaise bra strap line ya injury ke baad — ye "Koebner phenomenon" hai aur vitiligo ka sign ho sakta hai. Doctor se jaldi milna best hai.' },
      { _key: 'f3', question: 'Kya vitiligo contagious hai — kya ye chhoone se failta hai?', answer: 'Bilkul nahi — vitiligo 100% non-contagious hai. Na haath milaane se, na ek saath khaana khaane se, na kisi patient ke kapde pehenne se — kisi bhi tarah se nahi failta. Ye ek autoimmune condition hai — body ke andar ki problem hai, bahar se nahi aati. India mein vitiligo par bahut bada social stigma hai — log rishte todte hain, schools mein bullying hoti hai — ye sab bilkul unfair hai kyunki medically ye ek treatable skin condition hai.' },
      { _key: 'f4', question: 'Vitiligo aur fungal infection (ringworm/daad) mein kya fark hai?', answer: 'Fark samajhna easy hai: VITILIGO — daag chalk-white hote hain; edges bilkul clear aur sharp; koi kharish (itching) nahi; antifungal cream se koi fark nahi padta. FUNGAL INFECTION — daag reddish-pink ya light brown; edges scaly (chilke wali); kharish hoti hai; antifungal se theek ho jaata hai. Agar antifungal cream 2-4 hafte mein kaam na kare aur daag chalk-white ho — to dermatologist ya homoeopath se zaroor milein.' },
      { _key: 'f5', question: 'Vitiligo kyun failta hai — kya kya cheez spread karta hai?', answer: 'Vitiligo spread hone ke main triggers: Emotional ya physical stress — major trigger; breakup, job loss ke baad achanak spread deka gaya hai. Skin trauma — cut, sunburn, ya tight kapdon ki friction wali jagah pe naya daag (Koebner phenomenon). Thyroid disorder — uncontrolled thyroid vitiligo ko zyada active karta hai. Sunburn — bina protection ke dhoop mein rehna. Illness ya infection — immune system stressed hoti hai. Jo log stress seriously lete hain, thyroid control rakhte hain, aur skin protect karte hain — unme spread bahut slow ya ruk jaata hai.' },
      { _key: 'f6', question: 'Vitiligo ka treatment kya hota hai — kaunse options hain?', answer: 'Vitiligo ke liye kai options available hain: Homoeopathic treatment — autoimmune root cause address karta hai; safest option; 6-18 mahine mein repigmentation possible. Topical corticosteroids (cream) — dermatologist prescribed; short-term stabilization ke liye useful. Phototherapy (NB-UVB/PUVA) — light therapy jo melanocytes ko stimulate karti hai; effective but regular clinic visits chahiye. Surgical options — skin grafting, melanocyte transplant — stable, localized vitiligo mein. Most effective combination: Early diagnosis + homoeopathic constitutional treatment + sun protection + thyroid management.' },
      { _key: 'f7', question: 'Kya vitiligo permanently theek ho sakta hai?', answer: '"Permanently khatam" kehna mushkil hai kyunki ye autoimmune condition hai aur recurrence possible hai — lekin "permanent control" bilkul possible hai. Kai patients mein 12-18 mahine ke homoeopathic treatment ke baad complete repigmentation hoti hai aur saalon tak koi naya daag nahi aata — practically normal life milti hai. Segmental vitiligo mein prognosis sabse achha hai — ek baar stable ho jaaye to years tak stable rehta hai. Jo log triggers manage karte hain — stress, thyroid, sun protection — treatment pe tike rehte hain, unke liye vitiligo ek manageable condition ban jaati hai.' },
      { _key: 'f8', question: 'Kya homeopathy vitiligo mein really kaam karta hai?', answer: 'Haan — homeopathy vitiligo mein ek effective approach hai, khaaskar jab treatment individualized ho aur patient ki poori constitution dekhi jaaye. CCRH ke clinical observations mein vitiligo patients mein follicular repigmentation (daag ke beech baalon se rang wapas aana) aur lesion size reduction dono noted hue hain. Homeopathy ka unique fayda ye hai ki ye sirf skin nahi, saath mein thyroid, stress response, aur immune dysregulation sab ko ek saath address karta hai — jo akele topical treatments nahi kar paatein.' },
      { _key: 'f9', question: 'Vitiligo mein kaunsi homoeopathic medicine sabse zyada use hoti hai?', answer: 'Vitiligo mein commonly used medicines mein Arsenicum Sulphuratum Flavum, Hydrocotyle Asiatica, Natrum Muriaticum, Silicea, aur Phosphorus shamil hain — lekin koi ek medicine "sabse best" nahi hoti. Homoeopathy mein medicine aapki poori picture pe decide hoti hai — daag kahaan hai, kab se hai, kya stress tha jab shuru hua, thyroid hai ya nahi, aapki personality kaisi hai — sab matter karta hai. Ek qualified homoeopath hi sahi medicine choose kar sakta hai.' },
      { _key: 'f10', question: 'Vitiligo mein kya khana chahiye aur kya nahi?', answer: 'KYA KHAYEIN: Til (copper source — melanin enzyme ke liye zaroori), badam-akhrot (zinc + selenium), palak-methi (folate + antioxidants), anda ya paneer (Vitamin B12 — vitiligo patients mein aksar kami milti hai), dahi (probiotics), green tea. KYA NAHI: Excess nimbu ya Vitamin C active phase mein, maida products, refined sugar, alcohol, processed foods. Ek simple rule: Anti-inflammatory diet jo immune system calm rakhey — wahi vitiligo ke liye bhi achhi hai.' },
      { _key: 'f11', question: 'Vitiligo mein kaun sa test karwana chahiye?', answer: 'Vitiligo diagnose hone ke baad ye tests zaroor karwayein: TSH, T3, T4 (Thyroid panel) — kyunki 20-30% vitiligo patients mein thyroid issue milta hai. Vitamin B12 level — vitiligo mein aksar kam milta hai; supplement karna help karta hai. Vitamin D level — skin health ke liye critical. CBC (Complete Blood Count) — general health check. ANA (Antinuclear Antibody) — koi aur autoimmune condition toh nahi. Blood sugar (fasting) — Type 1 diabetes aur vitiligo ka connection hai.' },
      { _key: 'f12', question: 'Bacchon mein vitiligo — kya bachpan mein shuru ho sakta hai?', answer: 'Haan — vitiligo kisi bhi umar mein ho sakta hai lekin 10-30 saal ki umar mein sabse zyada hota hai; bacchon mein bhi hota hai. Bacchon mein segmental vitiligo common hai — ek side mein hota hai, jaldi stable ho jaata hai. Bacchon ke liye homoeopathy especially safe option hai — steroids ya UV therapy ke side effects bacho ke liye zyada concerning hote hain. School mein bullying bhi ek reality hai — psychological support bhi zaroori hai.' },
      { _key: 'f13', question: 'Kya stress se vitiligo aur badh jaata hai?', answer: 'Haan — ye scientifically established hai. Stress ke time cortisol aur other stress hormones badhte hain jo immune system dysregulate karte hain — aur vitiligo mein immune system already compromised hai. Bahut se patients report karte hain ki exams, breakup, job loss, family crisis ke baad achanak naye daag aaye ya purane badh gaye. Isliye stress management vitiligo treatment ka ek important part hai. Yoga, meditation (especially Anulom Vilom), regular sleep — ye medicines utna hi kaam karte hain jitni tablets.' },
      { _key: 'f14', question: 'Vitiligo mein dhoop (sun exposure) — theek hai ya nahi?', answer: 'Nuanced answer hai: AVOID — strong dhoop (10am-4pm) bina sunscreen ke; sunburn at any cost avoid karein — melanocytes ko damage karta hai aur Koebner trigger ho sakta hai. HELPFUL — subah 8-10 baje ki halki dhoop, 10-15 minute — Vitamin D ke liye. RULE — safed daag wali jagah pe SPF 50+ sunscreen ZAROOR lagayein pehle — phir thodi dhoop theek hai. PHOTOTHERAPY — dermatologist ki guidance mein NB-UVB light therapy alag cheez hai — ghar pe dhoop se compare nahi karein.' },
      { _key: 'f15', question: 'Vitiligo mein konsa sunscreen use karein?', answer: 'SPF 50+ minimum — safed daag wali skin mein zero natural UV protection; SPF 30 enough nahi. Broad-spectrum (UVA + UVB dono se protection). PA+++ ya PA++++ marking dekhen — UVA protection indicator. Physical sunscreens (zinc oxide, titanium dioxide based) better hain — especially sensitive skin mein. Water-resistant formulation — garmi aur sweating mein. Fragrance-free aur paraben-free prefer karein. Daily lagayein — cloudy days mein bhi. Har 2-3 ghante mein reapply karein agar bahar hain.' },
      { _key: 'f16', question: 'Kya vitiligo thyroid se related hai?', answer: 'Haan — vitiligo aur thyroid ka bahut strong connection hai. Research mein dekha gaya hai ki 20-30% vitiligo patients mein thyroid autoimmunity hoti hai — dono ek hi root cause share karte hain — immune system ki apne tissues ke against galat attack. Agar vitiligo hai to thyroid test (TSH, T3, T4) zaroor karwayein — even agar koi obvious thyroid symptom nahi hai. Agar thyroid uncontrolled ho to vitiligo ka treatment slow ya ineffective ho sakta hai.' },
      { _key: 'f17', question: 'Vitiligo ka gharelu ilaaj kya hai — ghar pe kya kar sakte hain?', answer: 'Evidence-based ghar pe karne wali cheezein: Til ka tel (Sesame oil) — copper rich; melanin enzyme support; daily gentle massage. Haldi + coconut oil mix — anti-inflammatory application; daag pe gentle. Subah ka suraj (8-10 baje, 10-15 min) — Vitamin D natural source; SPF lagake. Taambey ke bartan mein raat bhar paani rakh ke subah peena — copper supplement traditional practice. Stress management — yoga, pranayam. IMPORTANT: Ye ghar ke upay supporting role mein hain — main treatment ki jagah nahi le sakte. Doctor consultation ke saath in upayo ko add karein.' },
      { _key: 'f18', question: 'Kya vitiligo mein shadi ya relationship pe koi restriction hai?', answer: 'Medically: Bilkul nahi. Vitiligo se kisi ko koi physical harm nahi aata — relationship ya shadi pe koi medical restriction nahi hai. Genetic risk ki baat karein to: Vitiligo genes pass hote hain lekin majority cases mein nahi hota — siblings mein 6-7% vs general population mein 1-2%. India mein shadi ke waqt vitiligo ko "rejection reason" banana ek social problem hai — medical nahi. Vitiligo wale insaan zindagi, career, relationship, shaadi — sab normal tarike se jee sakte hain. Ye ek skin condition hai — koi character flaw nahi.' },
      { _key: 'f19', question: 'Kya pregnancy mein vitiligo treatment safe hai?', answer: 'Pregnancy mein kuch treatments avoid karne chahiye: AVOID — oral steroids, PUVA phototherapy (psoralen tablet form), certain topical immunosuppressants. SAFE OPTIONS — homoeopathic treatment pregnancy mein safe hai; highly diluted medicines; koi teratogenic risk nahi reported. Diet support, stress management, sun protection — ye sab pregnancy mein bhi helpful aur safe. Important: Homoeopath ko zaroor batayein ki pregnancy hai — medicine selection uske hisaab se hogi.' },
      { _key: 'f20', question: 'Vitiligo spread hona kaise rokein — kya precautions lein?', answer: 'Vitiligo spread rokne ke 5 steps: 1. THYROID CONTROL — TSH normal range mein rakho; uncontrolled thyroid vitiligo ko zyada active karta hai. 2. SUN PROTECTION — SPF 50+ daily; sunburn Koebner trigger hai. 3. STRESS MANAGEMENT — daily yoga/meditation; cortisol kam karo. 4. FRICTION AVOID — tight kapde, elastic, rubber items; skin pe zyada pressure wali jagahon pe naye daag trigger ho sakte hain. 5. TREATMENT CONTINUITY — homoeopathic treatment miss mat karo; beech mein chhodne se relapse hota hai.' },
      { _key: 'f21', question: 'Vitiligo ke nishaan (daag) cover karne ke liye kya use karein?', answer: 'Cosmetic camouflage bilkul valid option hai — koi sharm nahi: Dermablend, Covermark, Vichy Dermablend — professional cover products; waterproof options available. Self-tanning creams (DHA-based) — temporary tan jo safed daag pe apply karein; 3-5 din chalta hai; safe. Mineral-based foundations — good coverage; skin friendly. Tattooing (micropigmentation) — permanent option; stable vitiligo mein; dermatologist se consult karein. Cover karna ek personal choice hai — na karna bhi valid hai. Aap jaise hain, that\'s okay too.' },
      { _key: 'f22', question: 'Vitiligo mein kaunse vitamin supplement lene chahiye?', answer: 'In supplements pe evidence hai vitiligo mein: Vitamin B12 (Methylcobalamin) — vitiligo patients mein kami common; 1000-1500 mcg daily — doctor ki guidance mein. Vitamin D3 — deficiency bahut common; immune regulation mein critical; blood level dekhke. Zinc — immune modulation + antioxidant; 15-25 mg daily. Antioxidant complex (low dose Vitamin C + Vitamin E) — free radical protection; high dose Vit C avoid. Copper — diet se lena best (til, kaju); supplement overdose risky. IMPORTANT: Supplements lene se pehle blood levels check karwayein.' },
      { _key: 'f23', question: 'Vitiligo mein NB-UVB phototherapy kya hoti hai — kya ye effective hai?', answer: 'NB-UVB (Narrowband UVB) phototherapy vitiligo ke liye currently sabse evidence-based conventional treatment hai. Kya hota hai: Specific wavelength (311-313 nm) ki UV light daag wali skin pe controlled dose mein di jaati hai. Results: 50-70% patients mein meaningful repigmentation; chehra aur trunk pe best results. Session frequency: Typically hafte mein 2-3 baar; 3-6 mahine tak. Homoeopathy + NB-UVB combination kuch cases mein better results deta hai — dermatologist aur homoeopath dono se milke decide karein.' },
      { _key: 'f24', question: 'Vitiligo mein mental health — anxiety aur depression kaise manage karein?', answer: 'Vitiligo ka psychological burden bahut real hai — research mein dekha gaya hai ki vitiligo patients mein depression aur anxiety ka rate general population se significantly zyada hai. India mein social stigma — shadi rejection, job discrimination, school bullying — ye sab mental health pe gahri chot karte hain. KYA KAREIN: Khud ko blame mat karein — ye aapki galti nahi hai. Support group join karein (VDFI — Vitiligo and Depigmentation Foundation India). Agar depression ya anxiety feel ho to psychologist se milein. Family ko educate karein. Homoeopathy mein mental-emotional state treatment ka hissa hai.' },
      { _key: 'f25', question: 'Vitiligo stable ho gaya hai — ab kya karna chahiye?', answer: 'Stable vitiligo mein spread ruk jaata hai — ye ek achha sign hai. Ab kya karein: Repigmentation therapy consider karein — stable vitiligo mein phototherapy ya homoeopathic treatment se repigmentation ki achhi chances hoti hain. Maintenance treatment — homoeopathic treatment continue rakhein; relapse prevention ke liye. Thyroid monitoring — annual thyroid check zaroori. Sun protection — same level maintain karein. Surgical options — stable vitiligo (2 saal se koi change nahi) mein skin grafting ya melanocyte transplant possible hai — dermatologist se discuss karein localized cases ke liye.' },
    ],

    selfCheck: 'Agar skin pe chalk-white flat daag hain jisme koi kharish ya dard nahi — aur antifungal cream se koi fark nahi pada — to vitiligo possible hai. Dermatologist se milein. Saath mein thyroid test (TSH) aur Vitamin B12 zaroor check karwayein — ye do most commonly missing pieces hain vitiligo treatment mein.',

    sources: [
      { _key: 's1', name: 'CCRH (Central Council for Research in Homoeopathy) — Clinical Research on Vitiligo', url: 'https://ccrhindia.nic.in', year: '2022' },
      { _key: 's2', name: 'Lancet GBD Study — Global Vitiligo Prevalence', url: '', year: '2021' },
      { _key: 's3', name: 'Journal of the American Academy of Dermatology — Vitiligo Classification & Management Guidelines', url: '', year: '2022' },
      { _key: 's4', name: 'Indian Journal of Dermatology — Vitiligo in Indian Population', url: '', year: '2019' },
      { _key: 's5', name: 'Iacovelli P et al. — Thyroid Autoimmunity in Vitiligo | PubMed', url: '', year: '2019' },
      { _key: 's6', name: 'Photodermatology, Photoimmunology & Photomedicine — NB-UVB in Vitiligo: Systematic Review', url: '', year: '2020' },
    ],

    doctorNote: 'Meri practice mein sabse zyada jo dekha hai — vitiligo patients mein thyroid issue aur stress history almost hamesha milti hai. Jab hum sirf daag nahi, balki patient ki complete story — unka stress, thyroid, sleep, aur emotional state — sab milake treat karte hain to results clearly better aate hain. Sabse pehli cheez jo main karta hoon — thyroid test aur Vitamin B12 check; aksar yahi missing piece hoti hai jo treatment slow kar rahi hoti hai.',
  }

  console.log('Seeding Vitiligo...')
  await client.createOrReplace(doc)
  console.log('✅ Vitiligo seeded successfully!')
}

seed().catch(console.error)
