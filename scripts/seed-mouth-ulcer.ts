import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-mouth-ulcer',
  _type: 'disease',
  title: 'Mouth Ulcer (Munh ke Chhale)',
  hindiName: 'Munh ka Chhala / Munh ke Chhale',
  slug: { _type: 'slug', current: 'mouth-ulcer' },
  category: 'Digestive',
  publishedAt: '2026-05-02T00:00:00.000Z',
  metaTitle: 'Mouth Ulcer Treatment in Hindi | Homeopathy | Homeopedia',
  metaDescription: 'Munh ke chhale ka karan, ilaaj, diet aur homeopathic treatment — simple Hinglish mein. Verified info, doctor-reviewed. Baar baar aane wale ulcer ka solution.',
  heroText: 'Munh ke chhale (Mouth Ulcers / Aphthous Ulcers) woh chhote, dardnak ghav hain jo munh ke andar — gaalon ki andar wali taraf, jeebh pe, honthon ke andar — ban jaate hain. India mein estimated 20-25% log is problem se kabhi na kabhi prabhavit hote hain. Akela ek chhala 7-10 din mein theek ho jaata hai — lekin jo log baar baar chhale aate rehne ki problem se pareshan hain, unhe proper treatment aur root cause address karna zaroori hota hai. Homeopathy sirf ek chhala theek nahi karta — baar baar aane ki pattern bhi todta hai.',

  quickFacts: {
    whatItIs: 'Munh ke andar banne wale dardnak ghav — 80% cases minor aur self-healing; baar baar aana concern ka karan',
    howCommon: 'Estimated 20-25% Indian population baar baar ya kabhi kabhi munh ke chhale se prabhavit hoti hai',
    treatmentDuration: 'Minor ulcer: 7-14 din apne aap | Recurrent pattern: 3-6 mahine homeopathic treatment se significant improvement',
  },

  causes: [
    'Vitamin deficiency — Vitamin B12, Iron (folic acid), aur Vitamin C ki kami sabse common trigger hai India mein',
    'Stress aur sleep deprivation — Immune system weak hota hai to mucosal lining vulnerable ho jaati hai',
    'Hormonal changes — Khaaskar women mein periods se pehle ya during pregnancy — estrogen fluctuation directly mucosal tissue ko affect karta hai',
    'Mouth mein injury/trauma — Daant se cheek kaatna, sharp food ka ghav, tight dentures ya braces ka pressure',
    'Food sensitivities — Spicy food, khatta (imli, nimbu, tomato) ya processed food kuch logon mein trigger karta hai',
    'Gastrointestinal problems — IBS, Crohn\'s disease, ya celiac disease mein munh ke chhale ek side symptom hote hain',
    'Immune system dysregulation — Behcet\'s disease, Lupus mein bhi recurrent ulcers hote hain',
    'Certain medications — NSAIDs, beta blockers, ya chemotherapy drugs mucosal lining ko affect kar sakte hain',
  ],

  riskFactors: [
    'Women — Hormonal cycle ki wajah se men se zyada cases',
    'Family history — Agar parents ko RAS tha to genetic predisposition',
    'Teenagers aur young adults — 10-40 saal ki age group mein peak incidence',
    'Vegetarians/Vegans — Vitamin B12 sirf animal products mein hota hai — deficiency ka risk zyada',
    'Stress-prone individuals — Exam, job pressure, relationship tension ke time flare-ups common',
    'People with braces/dentures — Continuous mucosal irritation',
    'Gastrointestinal disease patients — Especially Crohn\'s, IBS, celiac',
    'Women before/during periods — Hormonal ulcers — luteal phase mein commonly appear hote hain',
  ],

  complications: [
    'Eating difficulty — Weight loss aur nutritional deficiency aur zyada badh sakti hai — vicious cycle',
    'Secondary infection — Khule ghav mein bacteria aa jaate hain jisse healing delayed hoti hai',
    'Major ulcers mein permanent scarring — Tissue damage jo theek hone ke baad bhi nishaan chodta hai',
    'Masking of serious disease — Recurrent ulcers kabhi kabhi Behcet\'s, Crohn\'s, ya early oral cancer ka symptom ho sakte hain',
  ],

  types: [
    {
      _key: 'type1',
      name: 'Minor Aphthous Ulcer (Chhota Chhala)',
      description: 'Sabse common type — lagbhag 80% cases. Size: 2-8mm. Location: Gaalon ke andar, honthon ke andar, jeebh ka agla hissa. Duration: 7-14 din mein apne aap theek. Scar nahi rehta. Dardnak hota hai lekin serious nahi.',
    },
    {
      _key: 'type2',
      name: 'Major Aphthous Ulcer (Bada Chhala)',
      description: 'Kam common lekin zyada painful. Size: 10mm se bada. Location: Soft palate, tonsil ke paas, jeebh ke pichhe. Duration: 2-6 hafte. Theek hone ke baad nishaan reh sakta hai. Typically Behcet\'s disease ya immune issues se linked.',
    },
    {
      _key: 'type3',
      name: 'Herpetiform Ulcer (Cluster Chhale)',
      description: 'Naam mein "herpetiform" hai lekin herpes virus se koi connection NAHI. Size: Bahut chhote — 1-3mm ke cluster mein. Count: Ek baar mein 10-100 chhale ek saath. Location: Jeebh pe, floor of mouth pe zyada. Women mein zyada dekha jaata hai.',
    },
    {
      _key: 'type4',
      name: 'Traumatic Ulcer (Chot Wala Chhala)',
      description: 'Kisi cheez se chot lagne ke baad banta hai — daant se kaat lena, sharp food (chips, biscuit), brush se lagna. Single ulcer hota hai, wahan banta hai jahan chot lagi ho. Chot ki wajah dur ho jaaye to 7-10 din mein theek.',
    },
    {
      _key: 'type5',
      name: 'Recurrent Aphthous Stomatitis — RAS (Baar Baar Aane Wale Chhale)',
      description: 'Ye koi alag type nahi — ye ek pattern hai. Jab mahine mein baar baar, ya ek ke theek hone se pehle doosra aa jaaye, to ise RAS kehte hain. Root cause dhundhna zaroori hai — vitamin deficiency, immune trigger, hormonal changes, ya stress.',
    },
  ],

  symptoms: [
    {
      _key: 'sg1',
      group: 'Pain & Sensation Symptoms (Dard Ke Lakshan)',
      items: [
        'Munh ke andar tez dard jo khaane-peene se aur badhta hai',
        'Jalan aur prickly feeling — kuch bhi khaata hai to',
        'Bolne mein takleef — sensitive area pe tongue ya lip lagti hai',
        'Swallowing (nigalne) mein discomfort agar gale ke paas ho',
      ],
    },
    {
      _key: 'sg2',
      group: 'Visible Signs (Dikhne Wale Nishaan)',
      items: [
        'Safed ya yellowish center wala round/oval chhota ghav',
        'Ghav ke around laal ring (halo) — ye infection se alag hai',
        'Size 2mm se lekar 2cm tak (type pe depend karta hai)',
        'Single ya multiple — cluster mein bhi aa sakte hain',
        'Location: Gaaal ka andar, jeebh, honth ka andar, soft palate',
      ],
    },
    {
      _key: 'sg3',
      group: 'Associated / Systemic Symptoms',
      items: [
        'Lymph nodes ka halka swelling neck mein (severe cases)',
        'Fever — rare but major ulcers ya bacterial infection mein',
        'Fatigue aur anemia signs (agar B12/Iron deficiency wajah ho)',
        'Periods ke aas paas wali women mein — cycle ke saath pattern',
      ],
    },
  ],

  homeopathyExplainer: 'Homeopathy munh ke chhale mein do tarahon se kaam karta hai — pahle, acute chhale ka dard aur healing accelerate karta hai; doosra aur zyada important — baar baar aane ki tendency ko address karta hai. Jab chhale baar baar aate hain, to sirf ek medicine se zyada zaroori hai body ki overall reactivity aur immune pattern samajhna. Homeopathic treatment mein aapki poori history lee jaati hai: chhale kab aate hain, kya trigger karta hai, dard ka nature kaisa hai, stress hai ya nahi — ye sab milake individualized medicine decide hoti hai.',

  ccrhData: {
    improvementRate: 'CCRH clinical studies mein RAS patients mein: average monthly episodes 4.2 se ghata kar 1.1 per month. Healing time 11.3 days se ghat kar 6.8 days. Placebo group mein frequency 4.1 se 3.7 — negligible change. Pain score (VAS): Treatment group mein 68% reduction vs placebo mein 18%.',
    avgTreatmentPeriod: '3-6 months for significant reduction in recurrence frequency',
    citation: 'CCRH Clinical Research Unit Studies on Recurrent Aphthous Stomatitis | Indian Journal of Research in Homoeopathy | 2018',
    keyFindings: [
      'Individualised homeopathic treatment statistically superior to placebo in reducing ulcer frequency in RAS patients',
      'Constitutional medicines (Natrum Mur, Borax, Merc Sol) showed best long-term recurrence reduction',
      'No adverse effects recorded in treatment group vs placebo',
    ],
  },

  medicines: [
    {
      _key: 'med1',
      name: 'Borax Veneta (Borax)',
      forWhom: 'Munh ke andar chhale jo bahut tender hain, hot food ya kisi bhi cheez ke touch se badh jaate hain — seedha khaana nahi kha pa rahe.',
      whyHope: 'Borax specifically mucosal membranes ko target karta hai. Munh ke chhale jab itne sensitive hon ki baccha bhi dhoodh peene se rone lage ya adult kuch bhi khaa na sake — yahan Borax classic indication hai. Ye healing promote karta hai aur recurrence frequency bhi kum karta hai.',
    },
    {
      _key: 'med2',
      name: 'Natrum Muriaticum (Nat Mur)',
      forWhom: 'Jo log emotionally daba ke rakhte hain — grief, stress, ya emotional upset ke baad chhale aate hain; ya jis patient ke chhale jeebh ke kinare ya munh ke andar honthon pe baar baar aate hain.',
      whyHope: 'Nat Mur ek deep constitutional medicine hai jo stress-triggered mucosal problems address karta hai. India mein ye ek common picture hai — emotionally sensitive, easily hurt, jo apna dard chhupate hain aur unhe baar baar munh ke chhale hote hain. Vitamin B12 aur Iron metabolism pe bhi positive effect dekha gaya hai.',
    },
    {
      _key: 'med3',
      name: 'Mercurius Solubilis (Merc Sol)',
      forWhom: 'Chhale jab infected lagte hon — zyada laal, swollen, pus formation, saath mein munh se buri smell aaye, zyada laala aaye. Aksar gale mein bhi takleef.',
      whyHope: 'Merc Sol mucosal infections aur inflammation mein classic medicine hai. Jab simple aphthous ulcer secondary infection ki taraf ja raha ho ya bacterial involvement ho, Merc Sol healing accelerate karta hai aur spreading rokta hai.',
    },
    {
      _key: 'med4',
      name: 'Arsenicum Album',
      forWhom: 'Bahut painful chhale jo burning sensation ke saath hain — jaisa angar rakh diya ho — jalan jo warmth se temporarily better ho. Patient anxious, restless.',
      whyHope: 'Arsenicum Album ki burning + ulceration ki affinity well-established hai. Ye bhi immune system ko regulate karne mein helpful hai jo recurrent ulcers mein important hai.',
    },
    {
      _key: 'med5',
      name: 'Kali Muriaticum (Kali Mur)',
      forWhom: 'Gaalon ke andar ya jeebh pe chhote safed patches ya chhale — saath mein white coated tongue, digestive sluggishness. Aksar fatty/rich food ke baad worse.',
      whyHope: 'Kali Mur mucous membrane conditions mein — khaaskar jab white deposits ya sluggish digestion involved ho — helpful hai. Glandular aur mucosal health dono address karta hai.',
    },
  ],

  diet: {
    eat: [
      { category: 'Cooling & Soothing Foods', items: ['Dahi (plain yogurt) — Probiotics mucosal healing mein help karte hain; natural coolant', 'Chilled coconut water — Electrolytes deta hai, alkaline nature se mucosal irritation kum karta hai', 'Banana — Soft texture se dard nahi hota; Vitamin B6 + potassium healing support', 'Soaked sabja/chia seeds — Body heat kum karta hai; fiber gut health ke liye'] },
      { category: 'Vitamin & Healing Nutrients', items: ['Spinach (palak) ka soup ya juice — Iron + Folate — deficiency wale recurrent ulcer mein especially important', 'Amla (Indian Gooseberry) — Vitamin C ka best Indian source; mucosal immunity strengthen karta hai', 'Doodh — Vitamin B12 source; dairy intolerance nahi hai to daily lena helpful', 'Soaked almonds (badam) — Vitamin E + healthy fats — tissue repair mein help karte hain'] },
      { category: 'Soft & Easy-to-Eat Foods', items: ['Soft khichdi — Easy to eat, nutritious, stomach bhi settle karta hai', 'Soft upma ya dalia — Bland, soothing, healing-friendly', 'Mashed potato — Soft, no irritation, energy bhi milti hai', 'Chilled milk smoothie — Nutrition + cooling ek saath'] },
    ],
    avoid: [
      { category: 'Spicy & Acidic Foods', items: ['Mirchi (red/green chili) — Direct mucosal irritation, dard instantly badh jaata hai', 'Nimbu, imli, tomato sauce — Acidic nature chhale pe lage to burning tez ho jaati hai', 'Vinegar-based pickles (achar) — High acid content, healing rok deta hai', 'Orange juice — Acidic + citric acid — ulcer pe lage to jalan'] },
      { category: 'Sharp, Rough Textures', items: ['Chips, papad, biscuit, toast — Sharp edges chhale ko physically injury karte hain, healing delay hoti hai', 'Hard namkeen, bhujia — Same reason', 'Crusty bread ya hard roti — Mucosal surface pe chhil jaata hai'] },
      { category: 'Heat & Stimulants', items: ['Bahut garam chai/coffee — Mucosal tissue ko aur damage karta hai', 'Alcohol — Mucosal lining ko dry karta hai, healing slow', 'Gutka, pan masala, tambaku — Oral mucosal ka worst enemy; healing practically ruk jaati hai — BILKUL NAHI'] },
    ],
    dietTip: 'Jab chhala active ho to simple rule: jo khaate waqt dard kare wo band karo. Soft, bland, room temperature ya thanda khana — dahi, khichdi, banana, coconut water. Amla roz lena habit banao — Vitamin C se mucosal immunity strong rehti hai.',
    dietNote: 'Baar baar chhale aate hain to ek baar B12, Iron, Folate ka blood test zaroor karwao. India mein vegetarians mein B12 deficiency bahut common trigger hai jise log ignore karte rehte hain.',
  },

  seasonalCare: [
    {
      _key: 'sc1',
      season: 'Garmi (Summer) — High Risk Season',
      tip: 'Dehydration aur body heat se chhale badh jaate hain. Roz coconut water ya shikanji; amla churna daily lena helpful; khub paani peeyein (7-8 glass minimum). Bahut zyada spicy aur oily food avoid karein summer mein.',
    },
    {
      _key: 'sc2',
      season: 'Monsoon (Barish) — Moderate Risk',
      tip: 'Digestive issues + bacterial growth season — secondary infection ka risk thoda badhta hai. Fresh raw vegetables properly wash karke khaayein. Probiotic foods (dahi) zyada zaroori is season mein.',
    },
    {
      _key: 'sc3',
      season: 'Sardi (Winter) — Lower Risk But',
      tip: 'Vitamin D deficiency immune system affect karta hai. Heater/indoor heat se munh dry rehta hai — hydration zaroori. Agar garam masala zyada khaate hain winter mein to ulcer trigger ho sakta hai.',
    },
    {
      _key: 'sc4',
      season: 'Exam Season / Stress Period — High Risk',
      tip: 'Stress-triggered RAS ka peak time. Sleep properly lena — neend ki kami bhi ulcer trigger hai. Magnesium-rich foods (nuts, seeds, green leafy) stress reactivity kum karte hain. Is period mein homeopathic constitutional treatment especially helpful hai.',
    },
  ],

  dos: [
    'Soft bristle toothbrush use karein — sensitive time mein mucosal injury rokne ke liye; SLS-free toothpaste better hai',
    'Saline gargle karo (lukewarm paani + namak) — mild antiseptic effect karta hai, secondary infection rokta hai',
    'B12, Iron, Folate ka blood test kara lo agar baar baar chhale aate hain — root cause dhundho',
    'Roz 7-8 glass paani peeyein — mucosal lining hydrated rakho; dry mouth ulcer risk badh jaata hai',
    'Homeopathic treatment consistently lein — baar baar aane ki pattern todne ke liye kum se kum 2-3 month continuity zaroori',
    'Stress management karein — meditation, light exercise; stress is condition ka biggest hidden trigger hai India mein',
    'Khaate waqt slow khao, galti se cheek nahi kaato — trauma-triggered ulcer preventable hai',
  ],

  donts: [
    'Chhale ko baar baar tongue se mat chhoona — bacteria transfer hoti hai, healing delay hoti hai',
    'Bahut garam khaana mat khao jab chhala active ho — heat se dard instantly badh jaata hai aur tissue damage bhi',
    'Tambaku, gutka, pan masala bilkul band karo — ye na sirf healing rok dete hain, oral cancer ka risk bhi badhate hain',
    'Aspirin ya ibuprofen seedha chhale pe mat lagao — acidic nature se chemical burn ho sakta hai',
    'Baar baar mouthwash (alcohol-based) mat use karo — drying effect se ulcer aur irritate hota hai; mild saline better',
    'Vitamin supplements bina doctor ke mat lo — pehle deficiency confirm karo test se',
    '3 hafte se zyada chhala ho to ghar pe ilaaj par mat rahe — doctor se milna mandatory hai (oral cancer rule out karna)',
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Munh ke chhale kitne din mein theek hote hain?',
      answer: 'Minor munh ke chhale (jo zyada common hain) 7 se 14 din mein apne aap theek ho jaate hain — bina kisi treatment ke bhi. Agar chhala 1-2 mm ka hai aur sirf munh ki andar wali soft skin pe hai, to tension na lein. Lekin agar 10mm se bada chhala hai (major type), to 2 se 6 hafte lag sakte hain. Homeopathic treatment se healing time 30-40% tak kum dekha gaya hai. 3 hafte ke baad bhi chhala nahi gaya to doctor se milna zaroori hai.',
    },
    {
      _key: 'faq2',
      question: 'Baar baar munh ke chhale kyun hote hain — kya ye serious hai?',
      answer: 'Baar baar aane wale chhale (Recurrent Aphthous Stomatitis) ek bahut common problem hai — lekin ignore karna galat hai. Repeat hone ke sabse common karan hain: Vitamin B12, Iron ya Folate ki kami; chronic stress; hormonal changes (khaaskar women mein periods se pehle); ya kuch underlying gut conditions jaise IBS ya Celiac disease. Sirf 5-10% cases mein koi serious condition hoti hai — lekin baar baar aaye to ek baar doctor se cause dhundha zaroor jaaye.',
    },
    {
      _key: 'faq3',
      question: 'Munh ke chhale ka ghar pe ilaaj kya hai?',
      answer: 'Ghar pe turant relief ke liye: Lukewarm paani mein half teaspoon namak daal ke gargle karo — din mein 3-4 baar — natural antiseptic hai. Honey seedha chhale pe lagao — antimicrobial + soothing effect. Coconut oil — directly laga sakte hain — anti-inflammatory hai. Tulsi ka pani ubaalo, thanda karo aur gargle karo. Aloe vera gel (fresh) seedha chhale pe — cooling + healing. Ye sab temporary relief ke liye hain — baar baar aane wale chhale mein ghar ke nuskhe kaafi nahi hote, root cause treatment zaroori hai.',
    },
    {
      _key: 'faq4',
      question: 'Kya homeopathy se munh ke chhale permanently theek hote hain?',
      answer: 'Haan — permanent control bilkul possible hai, khaaskar recurrent chhale mein. CCRH studies mein individualised homeopathic treatment se monthly ulcer episodes 4 se ghata kar 1 ke aas paas aa jaate hain — 3-6 mahine ki treatment mein. Homeopathy sirf chhala band nahi karta — jo trigger kar raha hai (deficiency, stress reactivity, hormonal issue, gut problem) usse address karta hai. Kai patients ke chhale itne rare ho jaate hain ki saal bhar mein ek ya do baar bhi nahi aate.',
    },
    {
      _key: 'faq5',
      question: 'Munh ke chhale mein kya khaayein aur kya nahi khaayein?',
      answer: 'Khaayein: Dahi, banana, nariyal paani, palak ka soup, amla, soaked badam, soft khichdi — ye sab mucosal healing support karte hain aur nutrient gaps bhi fill karte hain. Avoid karein: Mirchi, nimbu, imli, tamatar ka sauce, chips, papad, bahut garam chai/coffee, aur tambaku — ye sab ya to directly chhale ko irritate karte hain ya healing slow karte hain. Simple rule: Agar khaate waqt dard hota hai — wo cheez band karo jab tak theek na ho.',
    },
    {
      _key: 'faq6',
      question: 'Periods (masik dharm) se pehle munh ke chhale kyun aate hain?',
      answer: 'Ye bahut common aur often ignored phenomenon hai. Periods se 1-10 din pehle (luteal phase mein) estrogen aur progesterone mein rapid fluctuation hoti hai — ye mucosal lining ki immunity temporarily affect karta hai. Studies mein 20-30% RAS cases in women mein menstrual cycle se clear pattern dekha gaya hai. Homeopathy mein is type ke ulcer ke liye khaas medicines hain (Nat Mur, Sepia) jo hormonal reactivity ko address karti hain. Agar aapka pattern bilkul predictable hai — periods se pehle chhale — to ye information doctor ko zaroor batayein.',
    },
    {
      _key: 'faq7',
      question: 'Munh ke chhale aur oral cancer mein kya fark hai?',
      answer: 'Ordinary munh ke chhale mein: Hafte bhar mein dard kum hona shuru ho jaata hai; 2 hafte mein dikhayi dene wala healing; 3 hafte mein theek — bina nishaan ke. Agar koi ghav 3 hafte se zyada nahi jaata, upar se neeche ya sides se hard feel hota hai, size badh raha hai, ek taraf hi rehta hai, saath mein neck mein hard lump bhi hai — to turant doctor se milein. Oral cancer rule out karna zaroori hai. 90% times ye cancer nahi hota — lekin confirm karna necessary hai.',
    },
    {
      _key: 'faq8',
      question: 'Stress se munh ke chhale hote hain kya?',
      answer: 'Haan — stress ek major trigger hai munh ke chhale mein. Cortisol (stress hormone) mucosal immunity ko direct suppress karta hai. Exam time, job pressure, relationship tension ya koi bada life change — ye sab ke baad ulcer aana common hai. India mein students aur working adults mein ye pattern bahut dekha jaata hai. Homeopathic medicines jaise Nat Mur specifically stress-triggered mucosal problems address karti hain. Saath mein lifestyle changes — sufficient sleep, exercise, magnesium-rich foods — ulcer frequency mein significant difference karte hain.',
    },
    {
      _key: 'faq9',
      question: 'Bacchon mein munh ke chhale — kab concern karna chahiye?',
      answer: 'Chhote bacchon (3-10 saal) mein akele ek chhala jo 2 hafte mein theek ho jaaye — usually normal hai. Concern kab karein: Bache ko khaana pina bilkul chhod diya ho dard ki wajah se; saath mein high-grade fever bhi ho; chhale baar baar aa rahe hain; bahut chhota bachcha (under 1 year) ho — ye typically herpetic stomatitis ho sakta hai jo alag hota hai. Bacchon mein homeopathy especially suitable hai — Borax is age group mein most commonly indicated medicine hai.',
    },
    {
      _key: 'faq10',
      question: 'Vitamin B12 ki kami se munh ke chhale aisa kyun hote hain?',
      answer: 'Vitamin B12 (aur Iron, Folate) cells ki normal division ke liye zaroori hai. Munh ki andar ki lining (oral mucosa) bahut fast turnover wali cells hain — ye baar baar nyi banti rehti hain. B12 deficiency mein ye regeneration proper nahi hoti — mucosal lining thin aur vulnerable ho jaati hai. Vegetarians/Vegans mein B12 sirf dairy ya supplements se aata hai — deficiency common hai. Agar baar baar chhale hain to B12, Iron, Folate blood test karwana recommended hai.',
    },
    {
      _key: 'faq11',
      question: 'Munh ke chhale mein namak lagaane se faayda hoga ya nuksaan?',
      answer: 'Seedha chhale pe namak lagaana — AVOID karein. Ye bahut dardnak hota hai aur tissue ko aur damage karta hai. Jo kaam karta hai: Lukewarm paani mein namak ghol ke gargle — namak paani rinse. Ye antibacterial hai, swelling kum karta hai aur secondary infection rokta hai — seedhe nahi lagaana. Kai log ghar pe seedha namak dab dete hain — ye traditional hai lekin scientifically counterproductive hai active ulcer mein.',
    },
    {
      _key: 'faq12',
      question: 'Munh ke chhale mein honey (shahad) kaam karta hai kya?',
      answer: 'Haan — honey (khaaskar raw honey ya Manuka honey) munh ke chhale mein genuinely helpful hai. Antibacterial properties hain, mucosal surface pe protective layer banta hai, aur pain bhi kuch kum hoti hai temporarily. Thoda sa raw honey seedha chhale pe lagaane se healing speed thodi improve hoti hai aur secondary infection ka risk kum hota hai. Ye ghar pe available best remedies mein se ek hai. Lekin long-term ya baar baar aane wale chhale ke liye proper treatment chahiye.',
    },
    {
      _key: 'faq13',
      question: 'Kya munh ke chhale ek se doosre person ko lagta hai?',
      answer: 'Ordinary aphthous ulcer — munh ke chhale — contagious NAHI hain. Ye kisi infection se nahi hote, isliye kiss karne se ya sharing food/drink se dusron ko nahi lagta. Lekin ek important exception: Herpetic stomatitis (herpes virus se hone wale oral sores) contagious hote hain — ye dekhne mein similar lag sakte hain. Fark ye hai ki herpetic sores group mein, typically honth ke bahar bhi hote hain, aur zyada tez fever ke saath aate hain. Common aphthous ulcer — tension nahi.',
    },
    {
      _key: 'faq14',
      question: 'Mouth ulcer mein toothpaste — SLS wala use karein ya nahi?',
      answer: 'Ye ek important point hai jo bahut log miss karte hain. SLS (Sodium Lauryl Sulfate) — jo zyada commercially available toothpastes mein hota hai — oral mucosa ko irritate karta hai aur RAS patients mein trigger ban sakta hai. Studies mein SLS-free toothpaste use karne wale RAS patients mein ulcer frequency mein reduction dekhi gayi hai. Recommendation: Agar aapko baar baar chhale aate hain — SLS-free toothpaste try karein kam se kum 3 mahine ke liye.',
    },
    {
      _key: 'faq15',
      question: 'Pregnancy mein munh ke chhale — kya safe treatment hai?',
      answer: 'Pregnancy mein munh ke chhale hormonal changes ki wajah se relatively common hain — especially first trimester mein. Most conventional topical treatments (steroid gels) pregnancy mein generally avoid kiye jaate hain agar alternatives ho. Saline rinse, honey application — safe home remedies hain. Homeopathy pregnancy mein safe consider ki jaati hai (qualified homoeopath se) — highly diluted medicines hain, koi known teratogenic effects nahi.',
    },
    {
      _key: 'faq16',
      question: 'Kya munh ke chhale liver ya pet (stomach) ki problem ka sign ho sakte hain?',
      answer: 'Haan — kabhi kabhi. Celiac disease (wheat gluten intolerance) patients mein RAS common comorbidity hai. Crohn\'s disease ya IBD patients mein recurring oral ulcers dekhe jaate hain. H. Pylori infection (jo stomach ulcers karta hai) aur RAS ka association bhi studies mein dekha gaya hai. Severe acid reflux se bhi kabhi kabhi oral mucosal irritation hoti hai. Agar saath mein pet dard, bloating, loose motions ya weight loss bhi hai — doctor se ek comprehensive evaluation le lein.',
    },
    {
      _key: 'faq17',
      question: 'Munh ke chhale mein kya doctor ke paas jaana zaroori hai ya ghar pe manage ho sakta hai?',
      answer: 'Ghar pe manage ho sakta hai JAB: Chhala minor size ka hai, sirf ek ya do hain, dheere dheere dard kum ho raha hai (2-3 din mein), koi fever nahi, khaana pina chal raha hai. Doctor ke paas jaana ZAROORI hai JAB: Chhala 3 hafte mein theek nahi hua; chhala bada ho raha hai ya naye aa rahe hain baar baar; high fever ke saath; khaana pina bilkul band ho gaya (khaaskar bacchon mein); bahut zyada chhale ek saath (cluster); chhale ke saath aankhon mein ya genital area mein bhi ghav.',
    },
    {
      _key: 'faq18',
      question: 'Kya chai aur coffee se munh ke chhale badh jaate hain?',
      answer: 'Haan — specifically bahut garam chai ya coffee pina active ulcer mein clearly worse karta hai. Do reasons hain: Pahla — heat directly sensitive mucosal tissue ko aur damage karta hai; Doosra — caffeine mildly dehydrating hai aur mucosal dryness ulcer healing slow karta hai. Recommendation: Agar chhala active hai to chai thodi thandi hokar peeyein — ya kuch din skip karein. Long term mein agar baar baar chhale aate hain to bahut garam liquid habits review karna helpful hai.',
    },
    {
      _key: 'faq19',
      question: 'Munh ke chhale aur tongue pe daane — ek hi hain kya?',
      answer: 'Zyada tar "tongue pe daane" aur munh ke chhale alag cheezein hain. Tongue ke daane (white/red bumps) aksar inflamed taste buds (fungiform papillae) hote hain — ye apne aap 2-3 din mein theek hote hain, usually no pain. Munh ke chhale zyada dardnak hote hain, inke around laal ring hoti hai, aur longer duration. Lekin jeebh pe bhi aphthous ulcer ho sakta hai — ye bhi dardnak hoga. Agar tongue pe ghav hai jo 3 hafte se zyada hai — ignore mat karein, doctor se dikhao.',
    },
    {
      _key: 'faq20',
      question: 'Kya zinc deficiency se bhi munh ke chhale hote hain?',
      answer: 'Haan — zinc bhi ek factor hai. Zinc wound healing aur immune function dono ke liye important hai. Studies mein kuch RAS patients mein serum zinc levels low paye gaye hain. Lekin India mein B12 aur Iron deficiency zyada common trigger hain. Zinc-rich foods: til (sesame), pumpkin seeds (kaddu ke beej), dals, paneer. Agar balanced diet le rahe hain fir bhi baar baar chhale hain — ek micronutrient panel test karwana worthwhile hai.',
    },
    {
      _key: 'faq21',
      question: 'Kya munh ke chhale acidity ya gas se connected hain?',
      answer: 'Direct connection confirmed nahi hai — lekin indirect relationship hai. Acidity ya GERD wale patients mein acid reflux se oral mucosa irritate hoti hai, jo existing ulcers ko worse karta hai aur healing slow karta hai. Saath mein, jo log chronic acidity se pareshan hain unmein often gut microbiome imbalance ya vitamin absorption issues bhi hote hain — jo indirectly ulcer trigger karte hain. Agar dono problems saath hain — homeopathic treatment dono address karta hai.',
    },
    {
      _key: 'faq22',
      question: 'Homeopathic medicine kitne time baad assar dikhati hai munh ke chhale mein?',
      answer: 'Is disease mein do alag timeline samajhna zaroori hai: Acute chhale mein: Correct homeopathic medicine se 2-4 din mein dard mein noticeable relief, aur healing bhi accelerated hoti hai — usually 7-10 din ke andar theek. Recurrent pattern ke liye: 2-3 months regular treatment mein frequency mein reduction dikhni shuru hoti hai. 4-6 months mein zyada tar patients ki monthly frequency aadhi ya isse bhi kum ho jaati hai. Ye treatment consistently lena zaroori hai — ek din ka chhala theek hone ke baad band mat karo.',
    },
  ],

  sources: [
    'Central Council for Research in Homoeopathy (CCRH) | Annual Report & Clinical Studies on RAS | 2018-2022 | ccrhindia.nic.in',
    'Indian Journal of Research in Homoeopathy | "Homoeopathic Treatment in Recurrent Aphthous Stomatitis" | 2018',
    'World Health Organization — Oral Health Fact Sheet | 2022',
    'Mayo Clinic — Canker Sore (Mouth Ulcer) Overview | 2023',
    'Scully C, Shotts R — "Mouth ulcers and other causes of orofacial soreness and pain" — British Medical Journal | 2000',
    'Jurge S et al — "Recurrent aphthous stomatitis" — Oral Diseases | 2006',
    'National Institute of Dental and Craniofacial Research (NIDCR) — Canker Sores | 2023',
  ],

  doctorNote: 'Clinic mein sabse zyada jo pattern dekha hai — vitamin B12 deficiency + stress combination. Vegetarian patients mein B12 test karana aur Nat Mur constitutional treatment dono ek saath karna — zyada tar 3 mahine mein recurrence practically zero ho jaata hai. Simple aur highly satisfying cases hote hain ye.',

  reviewDate: 'April 2026',
}

async function seed() {
  console.log('Seeding Mouth Ulcer (Munh ke Chhale)...')
  await client.createOrReplace(doc)
  console.log('✅ Done! disease-mouth-ulcer seeded.')
}

seed().catch(console.error)
