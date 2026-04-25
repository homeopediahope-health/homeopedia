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
    _id: 'disease-psoriasis',
    _type: 'disease',
    title: 'Psoriasis',
    hindiName: 'चम्बल (सोरायसिस)',
    slug: { _type: 'slug', current: 'psoriasis' },
    category: 'Skin',
    metaTitle: 'Psoriasis (Chambal) Ka Homeopathic Ilaj — Diet, Types & Treatment',
    metaDescription: 'Psoriasis (Chambal) ka permanent control, homeopathic treatment, diet chart, types aur seasonal care — doctor-reviewed, verified Hinglish guide by Dr. Shadab Khan MD.',
    publishedAt: new Date('2026-04-25').toISOString(),
    heroText: 'Psoriasis — jise India mein log "Chambal" kehte hain — ek chronic skin condition hai jisme skin cells bahut tezi se bannte hain aur body ke upar thick, silvery-white ya red patches banate hain. Ye koi chhoot jaane wali bimari nahi hai. Psoriasis ek autoimmune condition hai — matlab body ka immune system galti se apni hi healthy skin ko attack karne lagta hai. Sahi treatment se iska bahut achha control ho sakta hai.',

    quickFacts: {
      whatItIs: 'Autoimmune chronic skin condition — chhoot ki bimari NAHI hai; immune system apni hi skin cells ko attack karta hai',
      howCommon: 'India mein lagbhag 1-2.5 crore log affected; North India mein prevalence zyada',
      treatmentDuration: 'Mild cases: 3-4 mahine; moderate-severe: 6-18 mahine homeopathic treatment mein',
    },

    types: [
      { _key: 'type1', name: 'Plaque Psoriasis', description: 'Sabse common (80-90% cases) — raised, red patches jo upar se silvery-white scale se dhake hote hain. Aksar codos (elbow), ghutno (knee), kamar ke nichle hisse aur sir (scalp) pe hote hain. Khujli aur kabhi kabhi dard bhi hota hai.' },
      { _key: 'type2', name: 'Guttate Psoriasis', description: 'Aksar bacchon aur young adults mein aata hai — especially kisi bacterial infection (strep throat) ke baad. Chhote, raindrop jaisi red spots poore body pe nikal aate hain. Sudden shuru hota hai lekin sahi treatment se control bhi jaldi hota hai.' },
      { _key: 'type3', name: 'Inverse Psoriasis', description: 'Skin ke fold wale hisson mein hota hai — bagal (armpits), crotch area, chest ke neeche, ya navel ke aaspaas. Yahan skin smooth, bright red aur bahut sensitive hoti hai. Sweat aur friction se aur badh jaata hai.' },
      { _key: 'type4', name: 'Pustular Psoriasis', description: 'White pus-filled blisters jo red, inflamed skin ke upar dikhte hain — sirf haathon ya pairon pe ya phir poore body pe. Rare hai lekin severe hota hai — doctor se turant milna zaroori hai.' },
      { _key: 'type5', name: 'Erythrodermic Psoriasis', description: 'Sabse severe aur rare form — laal rang ki skin poore body pe phel jaati hai, bahut jalan hoti hai. Ye ek medical emergency hai — agar aisa ho to turant hospital jaayein.' },
      { _key: 'type6', name: 'Psoriatic Arthritis', description: 'Psoriasis ke saath joints mein bhi sujan aur dard — 20-30% psoriasis patients mein develop hoti hai. Angliyan, ghutne, kamar, ya pith dard ho sakti hai. Early treatment joint damage se bachati hai.', diseasePageSlug: 'psoriatic-arthritis' },
      { _key: 'type7', name: 'Scalp Psoriasis', description: 'Sir ki chamdi pe thick, silvery scales — jo dandruff jaisi lagti hain lekin zyada thick aur stubborn hoti hain. Bahut khujli hoti hai. Forehead, kaanon ke peeche, aur gardan ke upar bhi aa sakti hai.' },
      { _key: 'type8', name: 'Nail Psoriasis', description: 'Naakhoon mein gaddhe (pits), discolouration (yellowish-brown), naakhoon thick ya toot jaate hain. 50% psoriasis patients mein nails bhi affect hoti hain.' },
    ],

    causes: [
      'Immune system ki galti — T-cells apni hi skin ko attack karte hain, skin cells ka production 10 guna badh jaata hai',
      'Genetic/Khandani — agar maa-baap mein se kisi ko psoriasis hai to risk 10-40%; dono ko hai to 50-70% chance',
      'Trigger factors — stress, infections, certain medicines (lithium, beta-blockers), skin injury (Koebner phenomenon)',
      'Environmental factors — cold dry weather mein symptoms badh jaate hain; dhoop mein aksar thodi relief milti hai',
      'Hormonal changes — puberty, pregnancy, ya menopause mein symptoms pehli baar aa sakte hain ya badh sakte hain',
      'Smoking aur alcohol — dono directly psoriasis ko trigger aur worsen karte hain; smokers mein risk almost double',
    ],

    riskFactors: [
      'Family history wale log — genes sabse bada risk factor hai',
      '15-35 saal ke young adults — ek major peak age group; doosra peak 50-60 saal',
      'Chronically stressed log — stress direct immune system ko dysregulate karta hai',
      'Mote log (obesity) — excess weight inflammation badhata hai; skin folds mein condition aur badh jaati hai',
      'Smokers — nicotine immune response ko alter karta hai',
      'HIV/AIDS ya autoimmune conditions wale log — immune system already compromised hoti hai',
    ],

    complications: [
      'Psoriatic Arthritis — 30% tak patients mein joints permanently damage ho sakti hain agar timely treatment na mile',
      'Cardiovascular risk — chronic inflammation heart disease aur stroke ka risk badhata hai (1.5x higher risk)',
      'Mental health — depression aur anxiety psoriasis patients mein aam hai; social stigma bahut bada factor hai',
      'Eye complications (Uveitis) — aankhon mein inflammation ho sakti hai; nazar pe asar pad sakta hai',
      'Metabolic syndrome — Type 2 diabetes, high BP, high cholesterol ka risk badha hua rehta hai',
    ],

    symptoms: [
      {
        _key: 'sym1',
        category: 'Skin Ke Signs (Sabse Pehle Dikhne Wale)',
        items: [
          'Raised, red patches jo upar se thick silvery-white scale se dhake hon (plaques)',
          'Skin bahut dry aur rough feel ho — aksar cracks bhi pad jaati hain',
          'Skin pe bleeding — scratching karne par ya khud chhoti cracks se blood aa sakta hai',
          'Patches aksar symmetric hote hain — dono codos ya dono ghutno pe saath mein',
        ],
      },
      {
        _key: 'sym2',
        category: 'Discomfort Ke Signs',
        items: [
          'Tez khujli (itching) — raat ko zyada hoti hai, neend kharab hoti hai',
          'Jalan ya stinging sensation — especially fold areas mein',
          'Skin ka tighten feel karna — aksar subah uthte waqt',
          'Dard — agar skin crack ho gayi ho ya infection ho',
        ],
      },
      {
        _key: 'sym3',
        category: 'Joints & Nails (Psoriatic Arthritis Signs)',
        items: [
          'Fingers ya toes mein sujan — "sausage fingers" jaisi dikhai deti hain',
          'Naakhoon mein gaddhe, discolouration, ya naakhoon ka ukhad jaana',
          'Subah ghutno ya kamar mein stiffness — 30 min se zyada rehti hai',
          'Heel ya lower back mein persistent dard',
        ],
      },
    ],

    youtubeVideos: [
      { _key: 'yt1', url: 'https://youtu.be/TGOprJx212g', title: 'Stress & Psoriasis — Connection aur Solution' },
      { _key: 'yt2', url: 'https://youtu.be/N32q7t9IZlA', title: 'Psoriasis Diet Plan — Kya Khayein, Kya Nahi' },
      { _key: 'yt3', url: 'https://youtu.be/Coq2SiVWtsI', title: 'Sardi (Winter) Mein Psoriasis Kyun Badh Jaata Hai' },
      { _key: 'yt4', url: 'https://youtu.be/GmrfET0qxuo', title: 'Psoriasis Mein Alcohol aur Mutton Kyun Avoid Karein' },
    ],

    ccrhEvidence: {
      improvementRate: 'PASI score mein 50-60% reduction treatment group mein; placebo mein sirf 15-20%',
      avgTreatmentPeriod: '6-18 mahine (severity ke hisaab se)',
      citation: 'Indian Journal of Research in Homoeopathy | CCRH Multicenter Studies | 2016-2020',
      keyFindings: [
        'Plaque psoriasis mein itching intensity score treatment group mein placebo se significantly zyada kam hua',
        'Recurrence rate un patients mein kam tha jinhone 12+ mahine treatment continue kiya',
        'Quality of life (DLQI score) mein meaningful improvement — sirf physical nahi, psychological bhi',
      ],
    },

    homeopathyBenefits: [
      'Long-term remission — psoriasis ke recurrence cycles toot sakte hain; akele steroid creams se ye nahi hota',
      'Safe for long-term use — koi liver toxicity nahi, jo conventional systemic medicines mein ek concern hota hai',
      'Saath mein stress, digestion aur sleep bhi address hoti hai — jo major triggers hain',
      'Bacchon aur pregnant women mein bhi safely use ho sakti hai (doctor ki supervision mein)',
      'Nail aur scalp psoriasis mein bhi kaam aati hai — jo topical treatment se mushkil hota hai',
    ],

    homeopathyLimitations: [
      'Severe erythrodermic ya pustular psoriasis mein homeopathy akeli sufficient nahi — conventional emergency treatment zaroori hai',
      'Results slow aate hain — 3-6 mahine mein clearly pata chalta hai; jinhein instant relief chahiye unhe ye samajhna zaroori hai',
    ],

    medicines: [
      {
        _key: 'med1',
        name: 'Arsenicum Album',
        potency: '200C / 1M',
        bestFor: 'Raat ko jalan aur khujli zyada; skin dry aur rough; patient anxious aur restless rehta ho',
        keyIndications: ['Burning itching worse at night', 'Extreme skin dryness', 'Anxiety with restlessness', 'Scaling with burning', 'Worse cold'],
      },
      {
        _key: 'med2',
        name: 'Graphites',
        potency: '200C',
        bestFor: 'Skin cracks se honey-like sticky discharge; fold areas mein psoriasis; nails bhi affected; digestive slowness',
        keyIndications: ['Cracked skin with discharge', 'Nail psoriasis', 'Skin fold involvement', 'Thick rough skin', 'Constipation with skin issues'],
      },
      {
        _key: 'med3',
        name: 'Sulphur',
        potency: '200C / 1M',
        bestFor: 'Intense khujli — scratching se thoda relief phir aur bura; body mein garmi; patches red aur rough',
        keyIndications: ['Intense burning itching', 'Worse from heat and bathing', 'Red rough patches', 'Worse at night', 'Chronic constitutional cases'],
      },
      {
        _key: 'med4',
        name: 'Mezereum',
        potency: '30C / 200C',
        bestFor: 'Scalp pe thick leather jaisi crust; neeche pus; raat ko aur thandi hawa mein symptoms badh jaate hain',
        keyIndications: ['Scalp psoriasis with thick crusts', 'Pus under scales', 'Worse cold air', 'Worse night', 'Intolerable itching'],
      },
      {
        _key: 'med5',
        name: 'Petroleum',
        potency: '200C',
        bestFor: 'Haath aur pairon pe deep cracks; sardi mein aur raat ko worse; skin itni dry ki cracks se khoon aaye',
        keyIndications: ['Deep cracking with bleeding', 'Winter-triggered psoriasis', 'Extremely dry rough skin', 'Worse cold and winter', 'Hands and feet mainly'],
      },
    ],

    dietInclude: [
      {
        _key: 'di1',
        category: 'Omega-3 Rich Foods',
        emoji: '🐟',
        items: [
          'Flaxseeds (alsi) — body mein anti-inflammatory compounds banate hain; psoriasis ki redness kam karte hain',
          'Walnuts (akhrot) — omega-3 fatty acids; skin cell health improve karte hain',
          'Fatty fish (mackerel, sardines) — EPA aur DHA skin inflammation directly target karte hain',
          'Chia seeds — vegetarian omega-3 source; gut health bhi improve karta hai',
        ],
      },
      {
        _key: 'di2',
        category: 'Anti-Inflammatory Vegetables',
        emoji: '🥦',
        items: [
          'Spinach (palak) — antioxidants aur folate; skin cell repair mein madad',
          'Broccoli — sulforaphane compound inflammation pathway block karta hai',
          'Sweet potato (shakarkand) — beta-carotene skin ko repair karta hai',
          'Bitter gourd (karela) — blood purifier; traditional use psoriasis mein widely reported',
        ],
      },
      {
        _key: 'di3',
        category: 'Gut-Healthy Foods',
        emoji: '🥗',
        items: [
          'Curd (dahi) without sugar — probiotics gut inflammation kam karte hain; directly skin pe bhi asar',
          'Coconut water — natural electrolytes; skin hydration maintain karta hai',
          'Ginger tea (adrak) — anti-inflammatory; digestion aur skin dono pe positive effect',
          'Turmeric (haldi) warm milk — curcumin potent anti-inflammatory; raat ko lena best',
        ],
      },
      {
        _key: 'di4',
        category: 'Vitamin D Rich Foods',
        emoji: '☀️',
        items: [
          'Egg yolk — natural vitamin D source; psoriasis cells ke abnormal growth ko regulate karta hai',
          'Mushrooms (sun-dried) — vegetarian vitamin D source',
          'Salmon/mackerel — vitamin D + omega-3 dono ek saath',
        ],
      },
    ],

    dietAvoid: [
      {
        _key: 'da1',
        category: 'Inflammatory Foods (Seedha Trigger Karte Hain)',
        emoji: '🚫',
        items: [
          'Refined sugar (maida, white bread, biscuits) — blood sugar spike; inflammation badhata hai',
          'Processed/packaged foods — trans fats aur preservatives immune dysregulation badhate hain',
          'Red meat (beef, pork) — arachidonic acid contain karta hai jo inflammatory compounds banata hai',
        ],
      },
      {
        _key: 'da2',
        category: 'Skin-Irritating Triggers',
        emoji: '🌶️',
        items: [
          'Bahut zyada spicy food — kuch patients mein flush aur skin irritation trigger hoti hai',
          'Nightshades (tamatar, baingan, shimla mirch) — kuch patients mein worse; observe karein apna body',
          'Dairy products (kuch patients mein) — 4-6 hafte dairy-free try karein agar symptoms worse ho rahe hain',
        ],
      },
      {
        _key: 'da3',
        category: 'Liver-Stress Foods',
        emoji: '🍺',
        items: [
          'Alcohol — directly psoriasis trigger karta hai; research clearly shows alcohol worsens severity — bilkul avoid',
          'Fried foods — excess saturated fats liver pe load daalta hai; skin detox slow hoti hai',
          'Gluten (kuch patients mein) — celiac disease aur psoriasis ka link documented; digestion kharab ho to gluten-free trial karein',
        ],
      },
    ],

    dietTip: 'Subah khali pet 1 glass gunguna paani + nimbu + haldi — ye combination liver detox karta hai aur psoriasis mein inflammation reduce karna shuru karta hai. 4-6 hafte consistently karo.',
    dietNote: 'Sardi mein psoriasis sabse zyada badh jaata hai. Is season mein omega-3 intake double karo, moisturizer daily lagao, aur ghar ke andar humidifier use karo. Indoor heater skin ko bahut dry kar deta hai.',

    weeklyPlan: [
      {
        _key: 'wp1',
        day: 'Monday',
        breakfast: 'Oats porridge + 1 tbsp alsi powder + seasonal fruit',
        midMorning: 'Akhrot (4-5) + 1 apple',
        lunch: '2 chapati + moong dal + palak sabzi + dahi + salad',
        evening: 'Adrak ki chai + roasted chana',
        dinner: 'Khichdi + karela sabzi + haldi doodh before bed',
      },
      {
        _key: 'wp2',
        day: 'Tuesday',
        breakfast: '2 boiled eggs + multigrain toast + 1 orange',
        midMorning: 'Chia seeds + coconut water',
        lunch: '2 roti + masoor dal + broccoli sabzi + dahi',
        evening: 'Mixed seeds (alsi + sunflower) + green tea',
        dinner: '2 roti + palak paneer (light) + salad',
      },
      {
        _key: 'wp3',
        day: 'Wednesday',
        breakfast: 'Poha with vegetables + dahi',
        midMorning: 'Akhrot + 1 seasonal fruit',
        lunch: '2 chapati + chana dal + shakarkand sabzi + raita',
        evening: 'Haldi chai + makhana roasted',
        dinner: 'Vegetable khichdi + karela juice (small glass)',
      },
      {
        _key: 'wp4',
        day: 'Thursday',
        breakfast: 'Multigrain dalia + 1 tbsp alsi + banana',
        midMorning: '2 Brazil nuts + apple',
        lunch: '2 roti + moong dal + mixed vegetable + dahi + salad',
        evening: 'Adrak nimbu paani + roasted chana',
        dinner: '2 roti + fish (grilled/boiled, mackerel/sardine) + sabzi',
      },
      {
        _key: 'wp5',
        day: 'Friday',
        breakfast: 'Besan chilla (2) + dahi + salad',
        midMorning: 'Chia seeds in water + 1 fruit',
        lunch: '2 chapati + rajma (soaked) + broccoli sabzi + raita',
        evening: 'Green tea + makhana',
        dinner: 'Vegetable soup + 2 roti + moong dal',
      },
      {
        _key: 'wp6',
        day: 'Saturday',
        breakfast: '2 eggs (any style) + multigrain toast + 1 kiwi',
        midMorning: 'Akhrot + coconut water',
        lunch: '2 roti + arhar dal + bitter gourd (karela) sabzi + dahi',
        evening: 'Haldi doodh (early evening) + roasted seeds',
        dinner: 'Khichdi + palak sabzi + salad',
      },
      {
        _key: 'wp7',
        day: 'Sunday',
        breakfast: 'Oats + alsi + seasonal fruit + 1 boiled egg',
        midMorning: 'Mixed nuts (akhrot, almond) + 1 fruit',
        lunch: '2 chapati + moong dal + mixed anti-inflammatory vegetables + dahi',
        evening: 'Adrak chai + chana',
        dinner: 'Fish curry (light) + 2 roti + salad + haldi doodh before bed',
      },
    ],

    dos: [
      'Moisturizer regularly lagayein — naha ke baad ek minute ke andar; thick cream ya petroleum jelly best; patch areas seal karta hai',
      'Controlled sunlight lein subah 9 baje se pehle — 10-15 minute; vitamin D naturally banta hai jo psoriasis cells regulate karta hai',
      'Stress management seriously lein — yoga, pranayam, ya meditation daily 20 min; stress sabse bada flare trigger hai',
      'Lukewarm paani se nahaein — bahut garam paani skin ka natural oil cheen leta hai aur dryness badhata hai',
      'Doctor se regular follow-up rakho — psoriasis ek chronic condition hai; monitoring zaroori hai specially agar joints mein bhi dard hai',
    ],

    donts: [
      'Patches ko scrub ya scratch mat karo — skin injury se Koebner phenomenon hota hai; nayi jagahon pe bhi psoriasis nikal aata hai',
      'Alcohol bilkul mat peeyo — directly flare trigger karta hai; research mein clearly documented hai',
      'Smoking band karo — nicotine immune system dysregulate karta hai; smokers mein psoriasis zyada severe hota hai',
      'Steroid creams khud se mat lagao — short-term mein better lagta hai; long-term mein withdrawal flare aur skin thinning hoti hai',
      'Social isolation mat karo — chambal se embarrassment bahut common hai lekin ye chhoot ki bimari NAHI hai; logo ko batana mental health ke liye zaroori hai',
    ],

    faqs: [
      { _key: 'faq1', question: 'Psoriasis kya hoti hai — kya ye chhoot ki bimari hai?', answer: 'Nahi — chambal bilkul bhi chhoot ki bimari nahi hai. Ye ek autoimmune condition hai jisme body ka immune system apni hi skin cells ko galti se attack karne lagta hai, jisse skin cells bahut tezi se bannte hain aur patches ban jaate hain. Ek infected insaan ko touch karne se, unka khana khane se, ya unke paas baithne se chambal nahi hoti. Society mein is bimari ko lekar bahut galat dharana hai jo patients ko socially isolate kar deti hai. Chambal ek medical condition hai, koi paap nahi.' },
      { _key: 'faq2', question: 'Psoriasis permanently theek ho sakta hai?', answer: 'Long-term remission — yani mahino ya saalon tak koi symptoms nahi — bilkul possible hai. Bahut se patients sahi treatment aur lifestyle se itne control mein aa jaate hain ki unhe lagta hai bimari gayi. "Permanent" ek tricky word hai kyunki psoriasis ek chronic condition hai — root tendency body mein rehti hai. Lekin jo log triggers seriously lete hain, treatment pe tike rehte hain, aur stress manage karte hain — unka life practically normal hota hai. Homeopathy khaskar recurrence ki pattern todne mein kaam karta hai.' },
      { _key: 'faq3', question: 'Psoriasis ki homeopathic treatment kaise kaam karti hai?', answer: 'CCRH-affiliated studies mein psoriasis patients ke PASI score (skin severity ka standard measure) mein treatment group mein 50-60% reduction aaya, placebo group mein yahi sirf 15-20% tha. Homeopathy ka fayda ye hai ki ye sirf patches nahi — saath mein stress, digestion, sleep aur overall sensitivity bhi address karta hai. Ye cheezein chambal ke major triggers hain jo akele cream lagane se nahi jaatein. Severe cases mein conventional treatment ke saath saath homeopathy aur zyada effective hota hai.' },
      { _key: 'faq4', question: 'Psoriasis aur Eczema (khujli) mein kya fark hai?', answer: 'Dono skin conditions hain lekin bahut alag. Psoriasis mein thick, silvery-white scales wale raised patches hote hain — jo mostly codos, ghutno, aur kamar par hote hain. Eczema mein skin oozing, weeping aur bahut sensitive hoti hai — aksar andar ki side pe (ghutne ke peeche, baazu ke andar). Psoriasis ek autoimmune condition hai; eczema zyada allergic ya inflammatory hota hai. Dono mein khujli hoti hai lekin psoriasis ki scales alag hoti hain. Confirm karne ke liye ek homoeopath se milein.' },
      { _key: 'faq5', question: 'Psoriasis mein kya khana chahiye aur kya nahi?', answer: 'Khayein: omega-3 rich foods (alsi, akhrot, mackerel), anti-inflammatory vegetables (palak, broccoli, karela), curd/probiotics, haldi wala doodh raat ko, aur vitamin D se bharpur foods. Nahi khayein: alcohol (direct trigger — clearly documented), refined sugar aur maida, zyada red meat, bahut zyada spicy food, aur processed packaged snacks. Kuch patients mein dairy aur gluten bhi trigger karte hain — 6 hafte ka elimination trial try karein. Sabse bada change: alcohol completely band karna.' },
      { _key: 'faq6', question: 'Kya psoriasis mein dhoop (sunlight) leni chahiye?', answer: 'Haan — controlled sunlight psoriasis mein actually helpful hai. Subah 9 baje se pehle ki dhoop — sirf 10-15 minute — skin pe directly vitamin D banata hai jo psoriasis cells ke abnormal growth ko regulate karta hai. Hospitals mein bhi UV phototherapy isi principle pe kaam karti hai. Lekin sunburn bilkul avoid karo — Koebner phenomenon se nayi jagahon pe patches nikal sakte hain. Formula simple hai: thodi dhoop fayda; bahut zyada nuksaan.' },
      { _key: 'faq7', question: 'Psoriasis mein stress ka kya connection hai?', answer: 'Stress psoriasis ka sabse bada trigger hai — aur ye scientific fact hai. Stress ke waqt body cortisol aur inflammatory chemicals release karta hai jo directly immune system ko dysregulate karte hain. Isliye exam time, job pressure, ya family problems ke baad chambal aksar flare up hoti hai. Bahut se patients notice karte hain ki stress manage karne se unke attacks ki frequency aur severity dono kam hoti hai. Yoga, pranayam, aur meditation — scientific studies mein — psoriasis severity scores pe positive effect dikhate hain.' },
      { _key: 'faq8', question: 'Kya psoriasis sirf skin ki bimari hai ya andar bhi kuch hota hai?', answer: 'Psoriasis sirf skin ki bimari nahi hai — ye ek systemic condition hai. Andar se immune system overactive hota hai jo inflammation poore body mein badhata hai. 20-30% patients mein Psoriatic Arthritis develop hoti hai — joints mein sujan aur dard. Iske alawa heart disease, Type 2 diabetes, depression, aur eye inflammation (uveitis) ka risk bhi elevated rehta hai. Psoriasis ko sirf "chamdi ki bimari" samajhkar ignore karna theek nahi — especially agar joints mein bhi dard ho.' },
      { _key: 'faq9', question: 'Chambal mein kaunsa sabun ya shampoo use karein?', answer: 'Mild, fragrance-free soaps use karein — jaise glycerine-based ya coal tar wale medicated soap (doctor ki salaah se). Perfumed soaps, antiseptic soaps, aur strong detergents skin ki natural barrier damage karte hain. Scalp psoriasis ke liye coal tar ya salicylic acid wala medicated shampoo useful hota hai — lekin regular use se pehle doctor se confirm karein. Naha ke baad skin ko rub mat karo — thapthake (pat dry) karein.' },
      { _key: 'faq10', question: 'Kya steroid cream chambal mein sahi hai?', answer: 'Steroid creams doctor ki prescription se, properly aur limited time ke liye, effective short-term treatment hain. Problem tab hoti hai jab log bina doctor ke khud se baar baar lagaate rehte hain. Long-term steroid use se skin thin ho jaati hai, stretch marks aa jaate hain, aur "steroid rebound" — yani cream band karne par bimari aur tezi se wapas aati hai. Homeopathy ka advantage ye hai ki ye steroid-free hai aur long-term use pe safe hai. Agar abhi steroid use kar rahe hain to suddenly band mat karo — doctor se withdrawal plan banao.' },
      { _key: 'faq11', question: 'Psoriasis aur Psoriatic Arthritis mein kya connection hai?', answer: 'Psoriatic Arthritis psoriasis ki ek complication hai jisme skin ke saath joints bhi affect hoti hain — 20-30% patients mein develop ho sakta hai. Angliyan sausage jaisi suji hui (dactylitis), heel mein dard (enthesitis), kamar ki stiffness — ye signs hain. Kabhi kabhi joints ki problem skin se pehle bhi shuru ho sakti hai. Agar aapko psoriasis hai aur joints mein bhi problem shuru ho rahi hai to foran homoeopath se milein — early treatment joint damage se bachati hai.' },
      { _key: 'faq12', question: 'Bacchon mein psoriasis — kya treatment alag hoti hai?', answer: 'Haan — bacchon mein psoriasis ka presentation alag ho sakta hai. Guttate type (chhote chhote spots) aur scalp psoriasis bacchon mein zyada common hai. Diagnosis mushkil hoti hai kyunki diaper rash ya eczema se confuse ho jaata hai. Treatment mein bacchon ke liye steroid-free options prefer kiye jaate hain — aur issi liye homeopathy bacchon mein ek particularly safe option hai. Kisi bhi child ko koi bhi topical treatment bina specialist ki salaah ke mat lagayein.' },
      { _key: 'faq13', question: 'Pregnancy mein psoriasis — kya karna chahiye?', answer: 'Pregnancy mein psoriasis ka behavior unpredictable hota hai — kuch mahilaon mein improve hota hai, kuch mein worse. Sabse badi chinta treatment ki hoti hai. Conventional psoriasis drugs — jaise methotrexate ya retinoids — pregnancy mein strictly banned hain (birth defects ka risk). Homeopathy pregnancy mein ek safe alternative hai — highly diluted medicines hain aur side effects practically nil hain. Pregnancy mein koi bhi treatment lene se pehle apne OB-GYN aur homoeopath dono se milein.' },
      { _key: 'faq14', question: 'Psoriasis mein exercise karni chahiye ya nahi?', answer: 'Zaroor karni chahiye — lekin samajhdari se. Exercise inflammation reduce karta hai, stress hormone kam karta hai, aur healthy weight maintain mein madad karta hai — teeno factors psoriasis mein helpful hain. Swimming bahut logon ko suit karti hai — pool ka thanda paani khujli mein relief deta hai. Yoga — especially stress-focused sequences — inflammation aur stress dono pe kaam karti hai. Vigorous exercise mein sweat se fold areas mein irritation ho sakti hai — inverse psoriasis mein immediately pat dry karo.' },
      { _key: 'faq15', question: 'Kya Psoriasis ka gharelu ilaaj kaam karta hai?', answer: 'Kuch gharelu upay symptoms mein temporary relief dete hain — lekin ye substitute nahi hain proper treatment ka. Coconut oil — moisturizer ke roop mein — bahut helpful hai. Aloe vera gel khujli aur redness mein soothing effect deta hai. Oatmeal bath khujli kam karta hai. Turmeric (haldi) internal aur external dono roop mein anti-inflammatory hai. Apple cider vinegar scalp pe diluted use karna scalp psoriasis mein kuch logon ko help karta hai. Ye sab complement hain — replacement nahi.' },
      { _key: 'faq16', question: 'Nails (naakhoon) ka psoriasis — kya ye theek ho sakta hai?', answer: 'Nail psoriasis theek hone mein sabse zyada waqt lagta hai — nails slow grow karte hain isliye response dikhai dene mein 6-12 mahine bhi lag sakte hain. Homeopathy mein Graphites aur Silicea nail psoriasis ke liye effective maani jaati hain. Nails ko short rakho, harsh chemicals (nail polish remover) se bachao, aur gloves pehno ghar mein kaam karte waqt. Patience zaroor chahiye — lekin improvement hoti hai.' },
      { _key: 'faq17', question: 'Psoriasis baar baar kyun aati hai — flare up se kaise bachein?', answer: 'Psoriasis ke flare ups trigger-based hote hain. Common triggers hain: stress, skin injury (scratch, cut, sunburn — Koebner phenomenon), infections especially strep throat, certain medicines (lithium, beta-blockers), alcohol, aur weather change — specially sardi. Flare ups se bachne ka tarika hai apne personal triggers identify karna — ek simple diary mein note karo kab symptoms badhe aur us waqt kya khaas tha. Stress management aur moisturizing routine ye dono most effective preventive steps hain.' },
      { _key: 'faq18', question: 'Kya psoriasis se weight ka connection hai?', answer: 'Haan — connection dono taraf se hai. Obesity psoriasis ka risk factor hai aur existing psoriasis ko worse karta hai — fat tissue inflammatory cytokines produce karta hai. Conventional psoriasis medicines — especially steroids — weight gain karwati hain. Homeopathic medicines mein koi aisa effect nahi hota. Healthy weight maintain karna — especially agar obese hain — psoriasis management ka ek important part hai. Research suggests ki weight loss se psoriasis severity score mein significant improvement aata hai.' },
      { _key: 'faq19', question: 'Psoriasis mein tattoo karwana safe hai?', answer: 'Nahi — Psoriasis mein tattoo karwana risky hai. Tattoo ink se skin injury hoti hai jo Koebner phenomenon trigger kar sakti hai — tattoo ke neeche ya aaspaas nayi psoriasis nikal sakti hai. Iske alawa tattoo ink mein certain chemicals hote hain jo already sensitive skin mein reaction cause kar sakte hain. Agar remission mein hain aur tattoo karwana chahte hain to pehle apne homoeopath se zaroor poochein.' },
      { _key: 'faq20', question: 'Psoriasis mein shaadi aur relationship pe kya asar padta hai?', answer: 'Physical intimacy mein chambal koi actual barrier nahi hai — ye chhoot ki bimari nahi hai. Lekin emotional impact bahut bada hota hai. Shame, embarrassment, aur rejection ka darr — ye sab real feelings hain. Research dikhata hai ki psoriasis patients mein depression aur anxiety ka rate general population se zyada hota hai. Partner ko educate karo — unhe samjhao ki ye kya hai. Ek supportive relationship mein openly baat karna kabhi kabhi treatment se bhi zyada healing karta hai. Psychological counselling bhi helpful hai.' },
      { _key: 'faq21', question: 'Psoriasis mein baalon mein colour ya chemical treatment safe hai kya?', answer: 'Careful rehna chahiye. Hair dye aur chemical treatments (rebonding, keratin) mein harsh chemicals hote hain jo scalp skin ke liye irritating ho sakte hain — aur Koebner phenomenon se scalp psoriasis aur badh sakta hai. Agar scalp psoriasis active hai to chemical treatments avoid karo. Remission mein hain to patch test zaroori hai — pehle thoda lagao aur 48 ghante dekhte raho. Natural/henna-based options safer hain. Apne homoeopath se pehle poochein.' },
      { _key: 'faq22', question: 'Psoriasis mein kaunsa test karwana chahiye?', answer: 'Psoriasis ka diagnosis mostly clinical hai — doctor skin dekh ke bata deta hai. Lekin kuch tests helpful hote hain: skin biopsy (confirmation ke liye), ESR aur CRP (inflammation markers), HbA1c (diabetes screen — psoriasis mein risk zyada), lipid profile (heart risk ke liye), aur Rheumatoid factor agar Psoriatic Arthritis suspect ho. Vitamin D levels bhi check karo — psoriasis mein aksar deficient hote hain. Annual health checkup — heart, kidney, aur liver — psoriasis patients ke liye recommended hai.' },
      { _key: 'faq23', question: 'Kya psoriasis ka koi definitive test hai?', answer: 'Skin biopsy sabse definitive test hai — lekin routinely zaroori nahi. Zyada cases mein experienced homoeopath clinical examination se hi diagnose kar dete hain — patches ki appearance, location, scale ka type, aur family history se. Biopsy tab karte hain jab diagnosis uncertain ho ya koi aur condition suspect ho jaise fungal infection ya eczema. Self-diagnosis apps ya internet se diagnose karne ki koshish mat karo — psoriasis bahut si aur conditions jaisi dikhti hai.' },
      { _key: 'faq24', question: 'Psoriasis mein swimming pool ya sea water se fark padta hai?', answer: 'Sea water (samandar ka paani) psoriasis patients ke liye actually beneficial hota hai — salt, minerals aur sunlight ka combination Dead Sea therapy ke naam se medically recognized hai. Swimming pool ka chlorinated paani kuch patients mein benefit karta hai lekin kuch mein skin irritation aur dryness increase hoti hai. Apna reaction observe karo. Dono cases mein — paani se nikalne ke baad turant rinse karo aur moisturize karo.' },
      { _key: 'faq25', question: 'Psoriasis mein kab turant doctor ke paas jaana chahiye?', answer: 'In conditions mein turant doctor se milna zaroori hai: poori body pe red skin feilne lage (erythrodermic psoriasis — medical emergency), skin pe infection ke signs — warmth, pus, fever ke saath, koi bhi nayi joint swelling ya stiffness jo 2-3 din se zyada rahe, aankhon mein dard ya redness (uveitis), ya kisi bhi medicine se allergic reaction lage. Agar pregnant hain aur psoriasis badh rahi hai — immediately apne OB-GYN ko inform karein.' },
    ],

    sources: [
      { _key: 'src1', name: 'CCRH — Clinical Research on Psoriasis | Indian Journal of Research in Homoeopathy | 2016-2022', url: 'https://ccrhindia.nic.in', year: '2022' },
      { _key: 'src2', name: 'National Psoriasis Foundation, USA', url: 'https://npf.org', year: '2023' },
      { _key: 'src3', name: 'WHO Global Psoriasis Atlas', url: 'https://who.int', year: '2016' },
      { _key: 'src4', name: 'PubMed — Psoriasis and Homeopathy: A Systematic Review', url: 'https://pubmed.ncbi.nlm.nih.gov', year: '2019' },
      { _key: 'src5', name: 'Lancet — Global Burden of Disease Study (India prevalence data)', year: '2019' },
      { _key: 'src6', name: 'Journal of the European Academy of Dermatology and Venereology — Psoriasis dietary interventions', year: '2020' },
    ],
  }

  console.log('Seeding Psoriasis...')
  await client.createOrReplace(doc)
  console.log('✅ Psoriasis seeded successfully!')
}

seed().catch(console.error)
