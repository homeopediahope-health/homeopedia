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
    _id: 'disease-lichen',
    _type: 'disease',
    title: 'Lichen Planus',
    hindiName: 'लाइकेन प्लेनस (चमड़ी की सूजन / खुजली वाली छातें)',
    slug: { _type: 'slug', current: 'lichen' },
    category: 'Skin',
    metaTitle: 'Lichen Planus Treatment in Hindi — Causes, Cure & Homeopathy',
    metaDescription: 'Lichen Planus ke causes, types, homeopathic treatment, diet aur cure — verified info, doctor-reviewed. Oral, skin, nails sab cover.',
    publishedAt: new Date('2026-04-25').toISOString(),
    heroText: 'Lichen Planus ek chronic inflammatory (sujan wali) bimari hai jo skin, muh ke andar, nakhun aur kabhi kabhi genitals ko affect karti hai. Is bimari mein body ka immune system galti se apni hi skin cells pe attack karna shuru kar deta hai. Skin pe flat, itchy, purplish-violet rang ke chote chote dhabbe ya patches bante hain — jinhe medical bhasha mein "violaceous papules" kehte hain. Ye bimari contagious nahi hai — iska matlab hai aap kisi se pakad nahi sakte ya kisi ko de nahi sakte.',

    quickFacts: {
      whatItIs: 'Chronic auto-immune inflammatory condition — skin, muh, nakhun aur genitals affect hote hain; contagious NAHI hai',
      howCommon: 'Global prevalence 0.5-2%; Lichen Planus Pigmentosus Indian skin tone mein zyada common; oral LP South Asian patients mein prominently reported',
      treatmentDuration: 'Skin type: 1-2 saal; Oral type: 5+ saal monitoring; Homeopathy mein improvement 3-9 mahine mein shuru',
      successRate: 'Observational studies: 60-70% patients mein meaningful relief — itching, lesion size aur oral erosions mein noticeable reduction',
    },

    types: [
      { _key: 'type1', name: 'Classical / Cutaneous Lichen Planus', description: 'Sabse common type. Skin pe violet/purple flat papules — mainly wrists, ankles aur lower back pe. Intense itching hoti hai. Mostly 1-2 saal mein apne aap resolve ho jaata hai lekin dark spots chhodte hain.' },
      { _key: 'type2', name: 'Oral Lichen Planus', description: 'Muh ke andar hota hai. Reticular (jali jaisi lines), erosive (ghao) ya plaque type ho sakta hai. Erosive type sabse takleefdehi hota hai aur zyada monitoring chahiye.' },
      { _key: 'type3', name: 'Lichen Planopilaris (Scalp)', description: 'Baalon ki jad (follicle) ko attack karta hai. Permanent hair loss ka risk hai. Jaldi diagnosis aur treatment zaroori hai.' },
      { _key: 'type4', name: 'Nail Lichen Planus', description: 'Nakhun aur unki jad (nail matrix) affect hoti hai. Nakhun patli hoti hain, groove banti hain ya puri tarha kharab ho sakti hain.' },
      { _key: 'type5', name: 'Genital Lichen Planus', description: 'Mahilaon aur purushon ke genitals pe hota hai. Dard, jalan aur discomfort hoti hai. Specialist se milna zaroori hai.' },
      { _key: 'type6', name: 'Lichen Planus Pigmentosus', description: 'India aur South Asia mein commonly dekha jaata hai. Dark brown ya greyish patches — face, neck aur body pe. Itching kam hoti hai lekin cosmetically disturbing hai. Indian skin tone mein especially zyada search hota hai.' },
      { _key: 'type7', name: 'Erosive / Bullous Lichen Planus', description: 'Rare lekin severe type. Skin pe blisters bante hain. Immediately dermatologist se milna zaroori.' },
    ],

    causes: [
      'Immune system ka dysfunction — body ke T-lymphocytes apni hi skin cells ko attack karte hain',
      'Hepatitis C virus infection — Lichen Planus ke bahut saare cases mein ye connection mila hai',
      'Kuch davaiyaan (medicines) — painkillers, BP ki davaiyaan, antimalarial drugs ke reaction se',
      'Dental fillings ya metal alloys se allergic reaction — especially oral lichen planus mein',
      'Extreme mental stress ya prolonged anxiety — immune system ko trigger karta hai',
      'Genetic predisposition — family mein autoimmune conditions hain to risk zyada',
    ],

    riskFactors: [
      '30 se 60 saal ki umar ke log — is age group mein sabse zyada cases',
      'Women — skin lichen planus purushon se zyada mahilaon ko hoti hai',
      'Hepatitis C positive patients — inhe oral lichen planus ka risk sabse zyada',
      'Chronic stress mein rehne wale log — job pressure, family tension, grief',
      'Autoimmune conditions wale log — thyroid disease, lupus ya RA wale',
      'Certain medicines regularly lene wale — NSAIDs, beta-blockers, diuretics',
    ],

    complications: [
      'Oral Lichen Planus ka erosive type — khaane peene mein takleef, long-term mein oral cancer ka (rare lekin real) risk — regular monitoring zaroori',
      'Skin pe permanent dark spots (hyperpigmentation) ya scars reh jaate hain',
      'Scalp mein Lichen Planopilaris se permanent baal jhad sakte hain — scarring alopecia',
      'Psychological impact — chronic itching aur cosmetic concern se depression aur anxiety',
    ],

    symptoms: [
      {
        _key: 'sym1',
        category: 'Skin Ke Symptoms',
        items: [
          'Flat-topped, shiny, purplish-violet rang ke dhabbe — hatheli, kalaai, pair ki paindain aur kamar pe zyada',
          'Intense khujli (itching) — raat ko aur zyada hoti hai',
          'Koebner phenomenon — jahan bhi skin pe scratch ya chot lage, wahan naye patches bante hain',
          'Wickham\'s striae — patches pe white lacy lines dikhti hain — ye Lichen Planus ki pehchaan hai',
        ],
      },
      {
        _key: 'sym2',
        category: 'Oral (Muh Ke Andar) Ke Symptoms',
        items: [
          'Galon ke andar (cheeks) ya jeebh pe white lacy pattern — reticular type',
          'Muh ke andar laal dhabbe ya ghao (erosions) — khaate peete takleef hoti hai',
          'Masale, khatta ya garam khaane se jalan',
          'Muh mein dry feeling ya burning sensation',
        ],
      },
      {
        _key: 'sym3',
        category: 'Nakhun, Baal aur Genitals Ke Symptoms',
        items: [
          'Nakhun patli, dhaari dhar ya tooti hue dikhti hain — kabhi kabhi completely kharab ho jaate hain',
          'Scalp mein Lichen Planopilaris — baalon ke saath follicles bhi kharab hote hain, permanent hair loss',
          'Genitals pe dard ya jalan — mahilaon mein vulvar lichen planus',
        ],
      },
    ],

    ccrhEvidence: {
      improvementRate: 'Observational studies mein 60-70% patients ne meaningful relief report ki — itching, lesion size aur oral erosions mein noticeable reduction',
      avgTreatmentPeriod: '3 se 9 mahine (type aur severity pe depend karta hai)',
      citation: 'Indian Journal of Research in Homoeopathy, 2018 — Homoeopathic management of Lichen Planus: A case series; Journal of Evidence Based Complementary & Alternative Medicine',
      keyFindings: [
        'Oral Lichen Planus mein individualized homeopathic treatment ne erosion size aur pain score dono mein noticeable reduction dikhaya',
        'Classical Lichen Planus ke skin cases mein itching intensity aur new lesion formation mein reduction dekhi gayi',
        'Stress-triggered cases mein constitutional medicines ne overall quality of life improve ki — sirf skin nahi, anxiety bhi address hui',
      ],
    },

    homeopathyBenefits: [
      'Auto-immune dysregulation andar se address hoti hai — sirf symptom suppress nahi hota',
      'Oral Lichen Planus mein steroids ki zaroorat kam ho sakti hai — jo long-term use karne se side effects dete hain',
      'Lichen Planus Pigmentosus ke dark spots mein constitutional treatment se skin tone gradually improve hoti hai',
      'Stress-triggered flare-ups ki frequency homeopathy se kam hoti hai — emotional aur physical dono treat hote hain',
      'Children aur pregnant women mein safe use — corticosteroid alternatives ke roop mein',
    ],

    homeopathyLimitations: [
      'Erosive oral lichen planus ya bullous type mein turant pain relief ke liye conventional treatment (topical steroids, tacrolimus) zyada fast kaam karta hai — homeopathy alongside le sakte hain',
      'Scalp lichen planopilaris mein agar follicle already permanently damage ho chuka hai to hair regrowth kisi bhi treatment se possible nahi hoti — early treatment hi bachao karta hai',
    ],

    medicines: [
      {
        _key: 'med1',
        name: 'Arsenicum Album',
        bestFor: 'Raat ko khujli aur jalan zyada — restless, anxious aur perfectionistic nature ke patients',
        keyIndications: ['Burning itching worse at night', 'Restlessness with anxiety', 'Stress-triggered lichen planus', 'Skin burning with dryness', 'Overactive immune response'],
      },
      {
        _key: 'med2',
        name: 'Sulphur',
        bestFor: 'Intense itching jo garmi se aur zyada badhti ho — skin rough aur unhealthy, garmi bardaasht nahi hoti',
        keyIndications: ['Intense burning itching', 'Worse from heat and bathing', 'Rough unhealthy skin', 'Chronic constitutional cases', 'Skin detox support'],
      },
      {
        _key: 'med3',
        name: 'Graphites',
        bestFor: 'Mote, sluggish nature — skin pe sticky discharge, nails thick ya deformed, emotional side pe grief ya sadness',
        keyIndications: ['Nail and skin involvement', 'Sticky discharge', 'Thick deformed nails', 'Sluggish metabolism', 'Grief with skin condition'],
      },
      {
        _key: 'med4',
        name: 'Mezereum',
        bestFor: 'Night mein itching bahut zyada — skin pe thick scabs, chuune se pain zyada ho jaaye, sensitive skin type',
        keyIndications: ['Intense night itching', 'Thick scabs on skin', 'Touch aggravates pain', 'Sensitive skin type', 'Unbearable itching episodes'],
      },
      {
        _key: 'med5',
        name: 'Nitric Acid',
        bestFor: 'Oral lichen planus — muh mein splinter jaisi chubhan, ghao hon, irritable personality, cervical ya genital involvement bhi ho',
        keyIndications: ['Oral erosive lichen planus', 'Splinter-like pain in mouth', 'Mucous membrane erosions', 'Genital involvement', 'Irritable sensitive nature'],
      },
    ],

    dietInclude: [
      {
        _key: 'di1',
        category: 'Anti-Inflammatory Foods',
        emoji: '🥗',
        items: [
          'Haldi (turmeric) — curcumin strong anti-inflammatory hai, immune modulation mein help karta hai',
          'Adrak (ginger) — natural anti-inflammatory, muh mein jalan ko soothe karta hai',
          'Amla (Indian gooseberry) — Vitamin C se bharpoor, skin repair aur immunity balance karta hai',
        ],
      },
      {
        _key: 'di2',
        category: 'Gut-Healing Foods',
        emoji: '🌿',
        items: [
          'Dahi (curd / probiotic) — gut microbiome balance karta hai jo immune health se directly linked hai',
          'Moong dal — easy digestible, anti-inflammatory protein source',
          'Coconut water — hydration aur electrolytes, skin ke andar se nourish karta hai',
        ],
      },
      {
        _key: 'di3',
        category: 'Skin-Nourishing Foods',
        emoji: '🫐',
        items: [
          'Palak (spinach) aur leafy greens — iron aur antioxidants, skin healing mein help karte hain',
          'Walnut (akhrot) — Omega-3 fatty acids skin inflammation kam karte hain',
          'Cucumber (kheera) — hydrating, skin ko thanda rakhta hai internally',
          'Sweet potato (shakarkandi) — beta-carotene se bharpoor, skin repair ke liye',
        ],
      },
    ],

    dietAvoid: [
      {
        _key: 'da1',
        category: 'Trigger Foods (Oral LP mein khaas avoid karein)',
        emoji: '🚫',
        items: [
          'Mirch masala (spicy food) — oral lichen planus mein jalan aur irritation badhata hai',
          'Tomato, nimbu, khatta (citrus fruits) — acidic nature se muh ke ghao mein sting hoti hai',
          'Cinnamon (dalchini) — oral lichen planus mein documented trigger hai — avoid karo',
          'Alcohol — liver pe stress badhata hai aur immune system dysregulation worsen karta hai',
        ],
      },
      {
        _key: 'da2',
        category: 'Inflammatory Foods',
        emoji: '🍬',
        items: [
          'Processed aur packaged foods — preservatives aur additives immune flare-up trigger kar sakte hain',
          'Refined sugar (mithai, cold drinks, maida) — inflammation badhata hai, skin recovery slow hoti hai',
          'Fried oily food — oxidative stress badhata hai jo autoimmune conditions mein harmful hai',
        ],
      },
      {
        _key: 'da3',
        category: 'Known Allergens / Irritants',
        emoji: '⚠️',
        items: [
          'Gluten (atta, maida) — kuch patients mein celiac-like sensitivity hoti hai, observe karo',
          'Artificial food colors aur flavors — immune system ko unnecessarily trigger karte hain',
          'Dairy products — kuch sensitive patients mein flare trigger kar sakti hai — observe karo',
        ],
      },
    ],

    dietTip: 'Subah khali pet 1 glass gunguna paani + haldi + kali mirch — ye combination anti-inflammatory effect deta hai aur immune system ko modulate karta hai. Saath mein 1 amla roz khao — Vitamin C se skin healing mein direct fark padta hai.',
    dietNote: 'Oral Lichen Planus patients ke liye: khaana thanda ya room temperature pe khao — garam khaane se ghao mein sting hoti hai. Straw se thanda paani peena — sidha tongue ya cheeks pe contact kam hoga. Cinnamon (dalchini) bilkul band karo — ye ek documented oral LP trigger hai jo log notice nahi karte.',

    weeklyPlan: [
      {
        _key: 'wp1',
        day: 'Monday',
        breakfast: 'Oats + haldi + coconut milk + 1 amla juice',
        midMorning: 'Akhrot (4-5) + cucumber slices',
        lunch: '2 chapati + moong dal + palak sabzi + dahi + salad (no tomato for oral LP)',
        evening: 'Adrak-haldi chai (no cinnamon) + roasted makhana',
        dinner: '2 roti + lauki sabzi + moong dal + coconut water',
      },
      {
        _key: 'wp2',
        day: 'Tuesday',
        breakfast: '2 boiled eggs + multigrain toast + 1 pear (non-citrus)',
        midMorning: 'Coconut water + soaked chia seeds',
        lunch: '2 roti + chana dal + spinach sabzi + dahi',
        evening: 'Haldi milk (no cinnamon) + roasted pumpkin seeds',
        dinner: '2 roti + bottle gourd (lauki) sabzi + dal + cucumber raita',
      },
      {
        _key: 'wp3',
        day: 'Wednesday',
        breakfast: 'Poha with vegetables + dahi + amla chutney',
        midMorning: 'Apple + akhrot (4)',
        lunch: '2 chapati + rajma + green sabzi + raita',
        evening: 'Tulsi-ginger tea + makhana',
        dinner: 'Khichdi (moong + rice) + ghee + boiled vegetables',
      },
      {
        _key: 'wp4',
        day: 'Thursday',
        breakfast: 'Dalia (broken wheat) porridge + banana + amla juice',
        midMorning: 'Coconut water + soaked almonds (10)',
        lunch: '2 roti + arhar dal + palak paneer (light) + salad',
        evening: 'Haldi water + roasted chana',
        dinner: '2 roti + fish (grilled, non-spicy) OR paneer + sabzi',
      },
      {
        _key: 'wp5',
        day: 'Friday',
        breakfast: 'Besan chilla (2) + mint chutney + dahi',
        midMorning: 'Pear + akhrot',
        lunch: '2 chapati + moong sprouts curry + lauki sabzi + raita',
        evening: 'Tulsi tea + roasted seeds mix',
        dinner: 'Vegetable soup (mild) + 2 roti + lentil',
      },
      {
        _key: 'wp6',
        day: 'Saturday',
        breakfast: '2 eggs + multigrain toast + seasonal fruit (non-citrus)',
        midMorning: 'Coconut water + soaked flaxseeds',
        lunch: '2 roti + sabut moong + methi sabzi + dahi',
        evening: 'Haldi milk + makhana roasted',
        dinner: 'Khichdi + palak sabzi + ghee',
      },
      {
        _key: 'wp7',
        day: 'Sunday',
        breakfast: 'Sprouts salad + dahi + 1 amla',
        midMorning: 'Fresh fruit bowl (apple, pear, banana — no citrus)',
        lunch: '2 chapati + chana curry (mild) + green salad + raita',
        evening: 'Adrak chai (mild, no cinnamon) + roasted chana',
        dinner: '2 roti + egg curry (mild) OR paneer + sabzi + dahi',
      },
    ],

    dos: [
      'Dermatologist aur qualified homoeopath dono se milein — complementary approach sabse effective hai',
      'Stress management pe seriously kaam karein (yoga, meditation, deep breathing) — stress direct trigger hai',
      '100% cotton ya silk ke loose kapde pehno — synthetic fabrics skin pe friction create karte hain',
      'Sunscreen SPF 50+ roz lagao face aur exposed areas pe — especially Lichen Planus Pigmentosus mein',
      'Nakhun ko short aur clean rakhein — scratching se Koebner\'s phenomenon hota hai (naye patches bante hain)',
      'Oral lichen planus patients dental checkup regularly karein — dentist ko batao is condition ke baare mein',
    ],

    donts: [
      'Skin ko scratch mat karein chahe kitni bhi khujli ho — isse naye lesions bante hain, scars aur marks rehte hain',
      'Harsh soaps, perfumed creams ya chemical-laden products skin pe mat lagao — irritation aur flare up hoga',
      'Kisi bhi medicine khud se band mat karo — especially steroids suddenly band karne se rebound flare hoti hai',
      'Oral lichen planus mein khatri wale ghao (non-healing sores) ko ignore mat karo — 3-4 hafte se zyada nahi theek ho to oncologist se milein',
      'Tight-fitting undergarments ya synthetic kapde mat pehno — genital lichen planus mein especially avoid karo',
      'Self-medicate mat karo — internet se dekh ke medicine khud lena dangerous hai autoimmune conditions mein',
    ],

    faqs: [
      { _key: 'faq1', question: 'Lichen Planus kya hota hai — simple bhasha mein samjhao?', answer: 'Lichen Planus ek auto-immune skin bimari hai jisme aapka khud ka immune system aapki skin ya muh ki andar ki skin pe attack karne lagta hai. Skin pe flat, purplish-violet itchy patches bante hain — aur muh mein white lacy lines ya ghao ho sakte hain. Ye contagious nahi hai — yaani ek insaan se doosre ko nahi lagti. Ye kisi bhi umar mein ho sakti hai lekin 30-60 saal ke adults mein sabse zyada hoti hai. Sahi treatment se is condition ko effectively manage kiya ja sakta hai.' },
      { _key: 'faq2', question: 'Lichen Planus aur Psoriasis mein kya fark hai?', answer: 'Dono skin ki chronic bimariyan hain lekin alag alag hain. Lichen Planus mein patches flat, shiny aur purplish hote hain — aur muh ke andar bhi ho sakta hai. Psoriasis mein patches raised, silvery scales wale aur zyadatar red hote hain — aur muh mein nahi hota. Lichen Planus mein Wickham\'s striae (white lacy pattern) hoti hai jo psoriasis mein nahi hoti. Lichen Planus mostly 1-2 saal mein resolve ho jaata hai — psoriasis lifelong condition hai. Dono mein treatment alag hai — isliye doctor se proper diagnosis zaroori hai.' },
      { _key: 'faq3', question: 'Lichen Planus permanently theek ho sakta hai?', answer: 'Haan — skin wala classical lichen planus zyada tar cases mein 1-2 saal mein apne aap ya treatment se resolve ho jaata hai. Lekin oral lichen planus zyada persistent hota hai aur long-term management chahiye. Permanent dark spots reh sakte hain — jo gradually fade hote hain lekin complete clearance mein time lagta hai. Homeopathy mein recurrence rate kam karna bhi ek goal hota hai — jo sirf symptom treat karne se nahi hota, underlying immune response ko address karne se hota hai.' },
      { _key: 'faq4', question: 'Muh mein Lichen Planus (Oral Lichen Planus) ka treatment kya hai?', answer: 'Oral Lichen Planus ka treatment depend karta hai uske type pe. Reticular type (sirf white lines, koi dard nahi) mein usually sirf monitoring hoti hai. Erosive type (ghao wala) mein treatment zaroori hai — jisme topical steroids ya tacrolimus aur saath mein homeopathic constitutional treatment kaafi effective combination hai. Khaane mein spicy, khatta aur hot cheezein band karo — instantly aram milega. Dental checkup regularly karo. Non-healing ghao ko kabhi ignore mat karo — 3-4 hafte se zyada agar ghao nahi theek ho raha to oncologist se rule out karna zaroori hai.' },
      { _key: 'faq5', question: 'Kya Lichen Planus cancer ban sakta hai?', answer: 'Directly cancer nahi banta — lekin Oral Erosive Lichen Planus mein bahut rare cases mein (1-2% se bhi kam) oral cancer ka risk hota hai, isliye ye ek "potentially malignant disorder" hai. Skin lichen planus mein cancer risk practically nahi hai. Isliye oral lichen planus mein regular monitoring zaroori hai — har 6 mahine mein dentist ya specialist se milein aur koi bhi non-healing sore, unexplained lump ya bleeding ko turant dikhayein.' },
      { _key: 'faq6', question: 'Kya homeopathy se Lichen Planus theek hota hai?', answer: 'Haan — homeopathy Lichen Planus mein ek effective approach hai, khaas taur pe jab treatment individualized ho aur time pe shuru ki jaaye. Observational studies aur case series mein patients ne itching, lesion size aur muh ke ghao mein meaningful improvement report ki hai. Homeopathy ka sabse bada fayda ye hai ki ye auto-immune root cause pe kaam karta hai — sirf baaki bimari ka bahar se control nahi. Severe ya erosive cases mein conventional treatment ke saath saath homeopathy lena aur better kaam karta hai.' },
      { _key: 'faq7', question: 'Lichen Planus mein kya nahi khana chahiye?', answer: 'Oral Lichen Planus mein khaaskar: mirch masala, khatta (nimbu, tomato, imli), bahut garam khana, aur alcohol bilkul avoid karein. Cinnamon (dalchini) ek documented trigger hai — oral lichen planus mein isko diet se hata ke dekhein. Processed food, refined sugar aur fried cheezein skin aur oral dono type mein inflammation badhate hain. Alcohol aur smoking Lichen Planus ke risk aur severity dono badhate hain — strictly avoid karein.' },
      { _key: 'faq8', question: 'Lichen Planus ki khujli (itching) se turant kaise aram mile?', answer: 'Turant aram ke liye: Cold compress — ice pack kapde mein lapet ke 10-15 minute lagao, seedha ice mat lagao. Aloe vera gel (bina chemical wala) thodi der ke liye soothe karta hai. Calamine lotion doctor ke advice se use kar sakte hain. Kapde loose aur cotton ke pehno — synthetic fabrics se itching aur badhti hai. Nakhun short rakho — scratch mat karo chahe kitni bhi ichha ho. Long-term mein homeopathic treatment itching ki frequency aur intensity genuinely kam karta hai.' },
      { _key: 'faq9', question: 'Lichen Planus baalon ko permanently kharab kar sakta hai kya?', answer: 'Scalp Lichen Planus ko Lichen Planopilaris kehte hain — aur haan, agar treat na kiya jaaye to ye permanent hair loss ka cause ban sakta hai. Ye hair follicles ko scar tissue se replace kar deta hai, isliye early treatment bahut zaroori hai. Agar scalp pe redness, scaling, follicles ke around soreness, aur baal jhadna shuru ho to turant dermatologist se milein. Jo follicles already permanently damage ho gaye hain unhe koi bhi treatment wapas nahi la sakti — isliye delay dangerous hai.' },
      { _key: 'faq10', question: 'Lichen Planus pregnancy mein safe hai kya? Kya baby ko affect karta hai?', answer: 'Lichen Planus itself directly baby ko nahi lagta — ye contagious ya hereditary condition nahi hai. Lekin pregnancy mein hormonal changes se lichen planus ka behavior unpredictable ho sakta hai — kuch cases mein improve hota hai, kuch mein worsen. Pregnancy mein treatment tricky hoti hai kyunki strong steroids safe nahi hote. Isi wajah se homeopathy pregnancy mein ek safe alternative approach hai. Lekin koi bhi medicine bina doctor ya qualified homoeopath ke approval ke mat lein — pregnancy mein supervised care zaroori hai.' },
      { _key: 'faq11', question: 'Lichen Planus ke nakhun (nails) ka treatment kiya ja sakta hai?', answer: 'Nail Lichen Planus mein nakhun patli, ridged, discolored ya fragile ho jaati hain — severe cases mein nail plate completely kharab ho sakti hai. Early treatment se nail matrix (jad) ko protect kiya ja sakta hai aur nail regrowth possible hai. Constitutional homeopathic treatment mein Graphites, Silicea aur Antimonium Crudum nail conditions mein commonly use hoti hain — lekin kaun si medicine sahi hai ye qualified homoeopath decide karega. Saath mein biotin supplement aur nail care (filing, moisturizing) bhi important hai.' },
      { _key: 'faq12', question: 'Lichen Planus Pigmentosus kya hota hai? India mein yeh zyada kyun hota hai?', answer: 'Lichen Planus Pigmentosus (LPP) ek special type hai jisme skin pe dark brown ya greyish patches bante hain — mainly face, neck, aur upper body pe. Itching bahut kam ya bilkul nahi hoti. Ye South Asian skin type (Indian, Pakistani, Sri Lankan) mein zyada hota hai — darker skin tones mein inflammation ke baad pigmentation zyada aasani se hoti hai. Sun exposure is condition mein dark spots aur dark karta hai — isliye sunscreen must hai. Homeopathy mein constitutional treatment se skin tone gradually normalize hoti hai — lekin patience chahiye.' },
      { _key: 'faq13', question: 'Lichen Planus aur stress ka kya connection hai?', answer: 'Stress ek major trigger hai Lichen Planus mein — ye ek scientifically observed connection hai. Jab aap chronic stress mein hote hain, body immune system ko dysregulate kar deta hai — aur lichen planus wale patients mein ye flare-up ke roop mein aata hai. Job loss, relationship issues, grief, exam pressure — ye sab trigger ho sakte hain. Isliye Lichen Planus ke treatment mein sirf skin treat karna kaafi nahi — stress management equally important hai. Homeopathy is connection ko seriously leta hai aur mental-emotional symptoms ko bhi treatment ka hissa maanta hai.' },
      { _key: 'faq14', question: 'Lichen Planus kis test se diagnose hota hai?', answer: 'Zyada tar cases mein experienced dermatologist clinical examination se hi diagnose kar lete hain. Confirmation ke liye skin biopsy ki jaati hai — pathology mein "band-like lymphocytic infiltrate" pattern confirm karta hai diagnosis. Oral lichen planus mein bhi biopsy ki ja sakti hai. Blood test mein Hepatitis C ki testing hoti hai kyunki ye ek common associated condition hai. Agar diagnosis unclear ho to direct immunofluorescence test bhi kiya jaata hai.' },
      { _key: 'faq15', question: 'Kya Lichen Planus ek se doosre insaan ko lag sakta hai?', answer: 'Bilkul nahi — Lichen Planus contagious (chhoone se lagti) bimari nahi hai. Na hath milane se, na same plate mein khaane se, na kiss se, na sexual contact se. Ye ek autoimmune condition hai — aapka immune system apni khud ki cells pe attack karta hai. Is wajah se na aapke family members ko khatra hai aur na aapke dost ya saathiyon ko. Is disease ke saath insaan normal social life jee sakta hai bina kisi ko infect karne ke darr ke.' },
      { _key: 'faq16', question: 'Lichen Planus mein kaun sa doctor dikhana chahiye — dermatologist ya homeopath?', answer: 'Ideally dono se milein — ye best approach hai. Pehle dermatologist se proper diagnosis karwao (biopsy confirm karti hai). Iske baad aap parallel mein ek qualified homoeopath se constitutional treatment shuru kar sakte hain. Complementary approach mein dono specialties saath mein kaam karte hain — conventional treatment turant relief deta hai (especially erosive cases mein) aur homeopathy underlying immune condition ko address karta hai. Kisi ek ko "choose" karne ki zaroorat nahi — dono ke baare mein doctor ko batao.' },
      { _key: 'faq17', question: 'Lichen Planus mein steroid cream safe hai kya? Side effects hote hain kya?', answer: 'Topical steroids oral aur skin lichen planus mein commonly used hain — ye inflammation aur dard mein turant relief dete hain. Short-term use mein generally safe hain. Lekin long-term ya excessive use mein skin thinning (atrophy), stretch marks aur local immunity compromise jaise side effects ho sakte hain. Isliye steroids hamesha dermatologist ki guidance mein use karo. Homeopathy is situation mein helpful hai kyunki waqt ke saath steroids ki zaroorat gradually kam ho sakti hai jab constitutional treatment kaam karna shuru karta hai.' },
      { _key: 'faq18', question: 'Lichen Planus mein gharelu nuskhe (home remedies) kya kaam aate hain?', answer: 'Kuch supportive home measures genuinely help karte hain: Aloe vera gel (pure, chemical-free) — oral aur skin dono pe soothing effect. Coconut oil — gentle moisturizer, itching aur dryness kam karta hai. Haldi milk — anti-inflammatory, daily pee sakte hain. Cold compress — active itching episode mein turant relief. Oatmeal bath — skin lichen planus mein soothing hai. Tulsi tea — mild anti-inflammatory. Ye sab complementary hain — main treatment ke saath use karo.' },
      { _key: 'faq19', question: 'Bacchon mein Lichen Planus hota hai kya? Kaise pehchanein?', answer: 'Haan, bacchon mein bhi ho sakta hai — lekin adults se kam common hai. Bacchon mein typically wrists, ankles aur lower legs pe purplish flat papules dikhte hain. Bacchon mein oral lichen planus bhi ho sakta hai — muh mein white patches ya ghao. Diagnosis ke liye paediatric dermatologist se milein. Treatment mein bachon ke liye safer options choose ki jaati hain — homeopathy especially bachon mein well-suited hai kyunki safe aur gentle hai. Parents jo bachon mein aise symptoms dekhein — delay mat karo.' },
      { _key: 'faq20', question: 'Lichen Planus mein yoga aur exercise safe hai?', answer: 'Haan — moderate exercise aur yoga Lichen Planus mein bilkul safe aur beneficial hai. Exercise immune regulation mein help karta hai aur stress genuinely kam karta hai. Pranayama (especially anulom-vilom aur bhramari) nervous system ko calm karta hai jo immune response pe positive effect dalta hai. Outdoor exercise mein sunscreen lagao — especially LP pigmentosus mein. Garmi mein intense workout se paseena aur skin irritation ho sakti hai — timing adjust karo (subah ya shaam). Overall healthy active lifestyle lichen planus management mein genuinely fark karta hai.' },
      { _key: 'faq21', question: 'Lichen Planus mein kya test zaroor kara lena chahiye?', answer: 'Diagnosis confirm hone ke baad ye tests zaroori hain: Hepatitis C antibody test — ye most important hai; Liver function tests — liver health check; Thyroid function tests — autoimmune conditions cluster karti hain; Patch test — agar suspected contact allergen ho. Oral lichen planus mein biopsy bilkul zaroori hai aur har 6 mahine mein followup monitoring. Blood sugar bhi check karein — diabetes mein LP zyada commonly seen hai.' },
      { _key: 'faq22', question: 'Kya Lichen Planus genitals mein bhi hota hai? Log sharminda ho ke doctor ke paas nahi jaate — kya karein?', answer: 'Haan — genital lichen planus hota hai aur ye koi sharmindgi ki baat nahi hai. Yeh ek medical condition hai, bilkul waise jaise koi bhi doosri skin problem. Mahilaon mein vulvar lichen planus mein jalan, dard aur painful intercourse ho sakti hai — aur agar treat nahi kiya jaaye to scarring ho sakti hai. Ye sexually transmitted infection nahi hai. Treatment mein delay karne se complications badhti hain. Ek female gynaecologist ya dermatologist se openly batao — doctors ye routine mein dekhte hain. Aapki health important hai.' },
      { _key: 'faq23', question: 'Lichen Planus aur Hepatitis C mein kya connection hai?', answer: 'Ye connection medical literature mein well-established hai. Hepatitis C virus body mein immune response trigger karta hai jo kuch logon mein Lichen Planus ko activate kar sakta hai — especially oral lichen planus. Ye matlab nahi ki LP hone pe Hepatitis C zaroori hai — lekin Hepatitis C wale logon mein LP ka risk zyada hota hai. Isliye naye Lichen Planus patients mein Hep C testing recommended hai. Agar Hep C confirm hota hai to uska treatment bhi parallel mein chalna chahiye.' },
      { _key: 'faq24', question: 'Lichen Planus ke baad skin pe dark marks kyun rehte hain aur kaise theek hote hain?', answer: 'Lichen Planus heal hone ke baad dark brown ya grey-black marks skin pe reh jaate hain — ise "post-inflammatory hyperpigmentation" kehte hain. Ye marks isliye bante hain kyunki healing ke waqt melanin zyada produce hota hai. Ye marks dheere dheere fade hote hain — months lag sakte hain. Sunscreen SPF 50+ daily lagana sabse zaroori hai — sunlight in marks ko aur dark banata hai. Homeopathic medicines jaise Sepia, Thuja ya Natrum Mur skin pigmentation ke saath help kar sakti hain.' },
      { _key: 'faq25', question: 'Lichen Planus ka overall recovery time kitna hota hai?', answer: 'Ye depend karta hai type pe. Classical skin lichen planus — zyada tar cases mein 1-2 saal mein resolve ho jaata hai, treatment se jaldi. Oral lichen planus — zyada persistent hota hai, 5 saal ya zyada bhi chal sakta hai, especially erosive type. Lichen Planopilaris (scalp) — long-term management chahiye aur active disease ko rokke permanent damage bachana goal hota hai. Nail lichen planus — nakhun improve hone mein 6 mahine se 1 saal lag sakte hain. Homeopathy mein improvement 3-9 mahine mein shuru hoti hai.' },
    ],

    lifestyle: [
      {
        _key: 'ls1',
        title: 'Stress Management — #1 Priority',
        description: 'Stress direct trigger hai Lichen Planus mein. Roz 10-15 min pranayama (anulom-vilom + bhramari) ya meditation karein. Journaling se emotional stress process hota hai. Chronic stress mein flare-ups ki frequency genuinely kam hoti hai jab stress address hoti hai.',
      },
      {
        _key: 'ls2',
        title: 'Skin Care — Gentle Only',
        description: 'Harsh soaps, perfumed products, chemical-laden creams bilkul nahi. Unscented mild soap (Dove, Cetaphil types) use karein. Coconut oil ya plain petroleum jelly — gentle moisturizer. Cotton ya silk ke loose kapde — synthetic fabric se friction aur itching badh jaati hai.',
      },
      {
        _key: 'ls3',
        title: 'Sunscreen Daily — Especially LP Pigmentosus Mein',
        description: 'SPF 50+ sunscreen roz lagao face aur exposed areas pe — sun exposure dark spots aur dark karta hai. Oral LP mein bhi sun exposure flare trigger kar sakta hai. Dhoop mein nikalna ho to hat ya scarf use karein.',
      },
      {
        _key: 'ls4',
        title: 'Oral LP Patients — Dental Care',
        description: 'Regular dental checkup karein — dentist ko batao is condition ke baare mein. Sharp edges wale teeth ya ill-fitting dentures bhi oral LP ke triggers ho sakte hain. Soft toothbrush use karein, harsh mouthwash avoid karein.',
      },
    ],

    caseStudies: [
      {
        _key: 'case1',
        profile: '38 saal ki teacher, Nagpur — Oral Lichen Planus',
        duration: '2 saal se muh mein ghao, khaana bahut mushkil, steroid gel se temporary relief',
        treatment: 'Nitric Acid + Arsenicum Album (alternating) + cinnamon aur spicy food band kiya',
        result: '3 mahine mein ghao 60% better, 6 mahine mein steroid gel ki zaroorat band, 1 saal mein stable remission',
      },
      {
        _key: 'case2',
        profile: '44 saal ke banker, Pune — Classical skin LP + LP Pigmentosus',
        duration: '18 mahine se wrists aur ankles pe itchy patches, baad mein dark spots',
        treatment: 'Sulphur + Thuja (constitutional) + stress management (job change discussion)',
        result: '4 mahine mein itching significantly better, 8 mahine mein new lesions band, dark spots 1 saal mein fade hua',
      },
    ],

    selfCheck: 'Agar skin pe flat, purplish-violet itchy patches hain — kalaai, ankle ya kamar pe — ya muh ke andar white lacy lines ya ghao hain — to Lichen Planus possible hai. Dermatologist se milein aur biopsy se confirm karwayein. Oral LP mein 6 mahine mein theek na ho to oncologist se milna zaroori hai.',

    sources: [
      { _key: 'src1', name: 'Indian Journal of Research in Homoeopathy — Homoeopathic management of Lichen Planus: A case series', url: '', year: '2018' },
      { _key: 'src2', name: 'Journal of Evidence Based Complementary & Alternative Medicine — LP case series', url: '', year: '2022' },
      { _key: 'src3', name: 'Mayo Clinic — Lichen Planus Overview', url: '', year: '2023' },
      { _key: 'src4', name: 'DermNet NZ — Lichen Planus', url: '', year: '2022' },
      { _key: 'src5', name: 'Indian Dermatology Online Journal — Lichen Planus Pigmentosus in Indian Skin', url: '', year: '2021' },
    ],
  }

  console.log('Seeding Lichen Planus...')
  await client.createOrReplace(doc)
  console.log('✅ Lichen Planus seeded successfully!')
}

seed().catch(console.error)
