import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
  useCdn: false,
})

const disease = {
  _id: 'disease-acne',
  _type: 'disease',
  title: 'Acne',
  hindiName: 'Muhase / Pimples / Daane',
  slug: { _type: 'slug', current: 'acne' },
  category: 'Skin',
  seoTitle: 'Acne Treatment in Hindi | Muhase Hatane ke Upay | Homeopedia',
  seoDescription: 'Acne (muhase) ke causes, types, homeopathic treatment, diet chart aur seasonal care — verified info, doctor-reviewed. Homeopedia.in',
  heroText: 'Acne (muhase ya pimples) ek common skin condition hai jisme chehre, peeth, seene ya kaandhon pe daane, blackheads, whiteheads ya gahrein cysts nikal aate hain. Ye tab hota hai jab skin ke pores dead skin cells, oil (sebum), aur bacteria se band ho jaate hain. Sirf teenagers ko nahi — aaj kal adults, khaaskar mahilaaon mein 30-40 saal ki umar mein bhi acne common ho gayi hai. Sahi treatment se na sirf daane band hote hain — daag bhi bahut kam ho jaate hain.',

  quickFacts: {
    whatItIs: 'Duniya ki #1 most common skin disease — globally 80-85% log apni life mein kisi na kisi point pe acne experience karte hain',
    howCommon: 'India mein 25-35 age group ki mahilaaon mein adult acne last decade mein significantly increase hui hai — PCOS prevalence ke saath closely linked',
    treatmentDuration: 'Homeopathy mein avg improvement: 3-6 months — consistent treatment se majority patients mein substantial control aata hai',
  },

  types: [
    {
      _key: 'dt1',
      name: 'Comedonal Acne (Sabse Common, Mild)',
      description: 'Blackheads (open comedones): pore khula rehta hai, andar ki cheez kaali dikhti hai — oxidation se hoti hai, gandagi se nahi. Whiteheads (closed comedones): pore band rehta hai, white ya skin-colored chhota sa daana. Mild type hai, jaldi treat ho jaata hai.',
    },
    {
      _key: 'dt2',
      name: 'Inflammatory Acne (Moderate)',
      description: 'Papules: laal, soojen wale chhote daane — dard hota hai. Pustules: pus-filled daane (peke hue muhase) — white/yellow tip dikhti hai. Is type mein treatment thodi aggressive chahiye hoti hai.',
    },
    {
      _key: 'dt3',
      name: 'Severe / Nodular Acne',
      description: 'Nodules: skin ke andar bade, sakht, dardnaak daane — deep hote hain, squeeze karne se aur bada ho jaata hai. Cystic Acne: sabse severe form — pus se bhare bade cysts, daag (scars) chhodne ki sabse zyada chance. Turant treatment zaroori hai.',
    },
    {
      _key: 'dt4',
      name: 'Hormonal Acne',
      description: 'Mainly jawline, chin aur lower cheeks pe. Periods se pehle bhadti hai. PCOS, thyroid ya hormone imbalance se linked. 25-35 saal ki mahilaaon mein zyada common. Sirf face products se theek nahi hoti — root cause treat karna zaroori.',
    },
    {
      _key: 'dt5',
      name: 'Adult Acne (Post-25)',
      description: 'Stress, hormones, cosmetics ya gut health se triggered. Often chin aur jawline pe. Teenagers wali acne se different treat karna padta hai — cause alag hoti hai. India mein 54% adult women 25 ke baad acne experience karti hain.',
    },
    {
      _key: 'dt6',
      name: 'Back & Body Acne (Bacne)',
      description: 'Peeth, seene, kaandhe — ye areas bhi common hain. Tight kapde, sweating, sunscreen clog se bhadti hai. Face wali acne se thoda alag treat hota hai — wahan skin thicker hoti hai.',
    },
  ],

  causes: [
    'Excess sebum (oil) production — skin ke oil glands zyada active ho jaate hain, pores clog hote hain',
    'Propionibacterium acnes bacteria — clogged pores mein multiply karta hai, inflammation aati hai',
    'Dead skin cells ka accumulation — pores band ho jaate hain',
    'Hormonal changes — puberty, periods, PCOS, pregnancy, stress hormones (cortisol) skin oil badha dete hain',
    'Gut health issues — leaky gut, poor digestion bhi skin pe inflammatory acne ke roop mein dikhai deti hai',
    'Wrong skincare / comedogenic products — heavy creams, oily makeup pores band karti hain',
  ],

  riskFactors: [
    'Teenagers aur young adults (puberty mein hormone surge)',
    'PCOS ya thyroid wali mahilaaen',
    'Family history — acne genetic bhi hoti hai',
    'High stress lifestyle — cortisol oil production badhata hai',
    'High glycemic diet — maida, sugar, dairy se flare-ups badhte hain',
    'Oily skincare ya heavy makeup users',
    'Humid climate — India mein garmi + humidity = pore blockage',
    'Steroid ya lithium-type medicines ka use',
  ],

  complications: [
    'Permanent acne scars (daag) — nodular aur cystic acne mein zyada risk — chehre pe lifelong nishan',
    'Post-inflammatory hyperpigmentation (PIH) — kale daag, khaaskar Indian skin tone pe zyada',
    'Psychological impact — acne se self-confidence, social anxiety, depression ka seedha rishta research mein proven hai',
    'Severe cystic acne mein deep tissue damage — agar bahut late treat karein',
  ],

  symptoms: [
    {
      _key: 'sg1',
      category: 'Face Pe Dikhne Wale Common Signs',
      items: [
        'Blackheads (naak aur chin pe zyada)',
        'Whiteheads (forehead aur cheeks pe)',
        'Chhote laal daane (papules) jo touch karne pe dard karein',
        'Pus-filled pimples (pustules)',
      ],
    },
    {
      _key: 'sg2',
      category: 'Severe Acne Ke Signs',
      items: [
        'Bade, sakht, dardnaak lumps (nodules) — jo squeeze nahi hote',
        'Bade pus-filled cysts — aksar jaw aur cheeks pe',
        'Daane ke baad kale ya red daag rehna',
        'Touch karne pe skin mein tenderness ya warmth',
      ],
    },
    {
      _key: 'sg3',
      category: 'Hormonal Acne Ke Khaas Signs',
      items: [
        'Har month periods se 5-7 din pehle flare-up',
        'Daane mainly jawline, chin aur lower face pe',
        'Acne ke saath oily skin aur hair loss (PCOS sign)',
        'Adult age mein teen-type acne',
      ],
    },
  ],

  ccrhEvidence: {
    summary: 'Homeopathy acne mein sirf daane nahi sukhata — andar ki wajah treat karta hai. Hormonal imbalance ho, gut issue ho, ya stress se triggered acne ho — homeopathic medicines poori body ki sensitivity ko address karti hain. Isliye same jagah pe baar baar aane wale daane dheere dheere band hone lagte hain.',
    keyFindings: [
      'Inflammatory lesion count treatment group mein 58% tak ghata — placebo group mein sirf 18% par ruka',
      'Sebum secretion mein meaningful reduction homeopathic group mein',
      'Patient-reported quality of life score significantly improved',
      'Hormonal acne ke cases mein individualized treatment ne better long-term outcomes diye',
    ],
    citation: 'CCRH — "Homoeopathy in Dermatological Conditions" | 2019 | Ministry of AYUSH Annual Report',
    averageTreatmentPeriod: '3–6 months (type aur severity pe dependent)',
  },

  medicines: [
    {
      _key: 'med1',
      name: 'Sulphur',
      bestFor: 'Oily, dirty-looking skin wale jo garmi bardaasht nahi karte; blackheads aur recurring pimples; washing ke baad bhi face oily lagta hai',
      keyIndications: [

        'Sulphur skin ke chronic inflammatory tendencies ko address karta hai — sebum overproduction aur pore inflammation dono pe kaam karta hai. Recurrent acne mein foundational medicine mani jaati hai.',

      ],
    },
    {
      _key: 'med2',
      name: 'Hepar Sulphuris Calcareum',
      bestFor: 'Pus-filled, dardnaak pimples jo touch karne pe bahut hurt karte hain; cystic acne; baar baar naye daane nikalte hain',
      keyIndications: [

        'Pus ko resolve karne aur tissue healing mein help karta hai — infected, painful acne ke liye especially useful.',

      ],
    },
    {
      _key: 'med3',
      name: 'Pulsatilla',
      bestFor: 'Young girls aur mahilaaen jinki acne periods se pehle bhadti hai; hormonal, cycle-linked pimples; mild, emotional nature',
      keyIndications: [

        'Hormonal fluctuations se linked acne ko address karta hai — PCOS ya irregular periods wali mahilaaon mein particularly helpful.',

      ],
    },
    {
      _key: 'med4',
      name: 'Silicea',
      bestFor: 'Slow-healing, deep pimples jo scar chhod jaate hain; skin easily infected ho jaaye; weak immune response',
      keyIndications: [

        'Tissue repair aur slow-healing tendency improve karta hai — acne scars banana kam karta hai. Recurrent cystic acne mein useful.',

      ],
    },
    {
      _key: 'med5',
      name: 'Kali Bromatum',
      bestFor: 'Face, chest aur peeth pe bade daane; acne ke baad kale aur permanent daag; stress se bhadne wali acne',
      keyIndications: [

        'Deep acne aur post-acne pigmentation dono pe kaam karta hai — especially jab scars prominent hon.',

      ],
    },
    {
      _key: 'med6',
      name: 'Berberis Aquifolium',
      bestFor: 'Acne ke baad kale daag (PIH), dull aur uneven skin tone',
      keyIndications: [

        'Skin ka natural tone aur texture improve karne mein helpful — post-acne marks ke liye commonly used.',

      ],
    },
  ],

  dietInclude: [
    {
      _key: 'di1',
      category: 'Skin-Healing Foods',
      emoji: '🫐',
      items: [
        'Blueberries, amla, nimbu — antioxidants skin inflammation ghataate hain; Vitamin C collagen banata hai jo scars heal karta hai',
        'Palak, methi, broccoli — zinc aur iron rich; zinc sebum production regulate karta hai',
        'Gajar, shakkarkand — beta-carotene skin cell renewal improve karta hai',
      ],
    },
    {
      _key: 'di2',
      category: 'Gut-Friendly Foods',
      emoji: '🌿',
      items: [
        'Dahi (plain, unsweetened) — probiotics gut bacteria balance karte hain; gut-skin axis se acne directly linked hai',
        'Moong dal, masoor dal — plant protein + fiber, digestion improve karta hai jo skin pe dikhta hai',
        'Sabut anaaj (brown rice, jowar, bajra) — low glycemic; insulin spike nahi aata jo acne trigger karta hai',
      ],
    },
    {
      _key: 'di3',
      category: 'Anti-Inflammatory Fluids',
      emoji: '💧',
      items: [
        'Haldi wala paani/doodh — curcumin inflammation ghataata hai',
        'Green tea — EGCG compound sebum aur acne bacteria dono ghataata hai; research-backed',
        'Plain paani — 2.5-3 litre daily; toxins flush hote hain, skin hydrated rehti hai',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'High Glycemic Foods',
      emoji: '🚫',
      items: [
        'White bread, maida products, biscuits — blood sugar spike karte hain, insulin badhta hai, sebum production badhti hai',
        'Sugar, cold drinks, packaged juice — same mechanism; Indian mithai bhi zyada khane se acne bhadti hai',
        'White rice (refined) — glycemic index high; brown rice better alternative hai',
      ],
    },
    {
      _key: 'da2',
      category: 'Dairy Concerns',
      emoji: '🥛',
      items: [
        'Full-fat milk — IGF-1 hormone contain karta hai jo sebum badhata hai; studies mein acne ka strong link hai',
        'Cheese aur butter (zyada) — saturated fat + dairy hormones combination; limited karo',
        'Processed dairy desserts (ice cream) — sugar + dairy double trigger',
      ],
    },
    {
      _key: 'da3',
      category: 'Inflammatory Triggers',
      emoji: '🌶️',
      items: [
        'Fried aur junk food — trans fats inflammation badhate hain; chips, fries, burger regularly avoid karo',
        'Excess chai/coffee — caffeine cortisol badhata hai; acne stress-related ho to flare-up',
        'Oily masaledar food daily — gut inflammation aur skin oiliness dono pe impact',
      ],
    },
  ],

  dos: [
    'Non-comedogenic (oil-free, pore-clogging free) products use karein — har cream, sunscreen, foundation ka label check karein',
    'Gentle, sulfate-free face wash din mein sirf 2 baar — zyada washing skin dry karta hai aur oil zyada banta hai',
    'Moisturizer zaroor lagaein (even oily skin ko) — oil-free, gel based choose karein (niacinamide wala best hai)',
    'Sunscreen daily — SPF 30+ minimum — bina sunscreen ke daag (PIH) aur kale ho jaate hain',
    '7-8 ghante ki neend — growth hormone raat ko skin repair karta hai; neend ki kami = acne flare',
    'Exercise regular karein — blood circulation badhti hai, toxins sweat se nikalta hai; exercise ke baad turant face wash zaroor',
    'Stress management seriously lein — yoga, meditation ya deep breathing; cortisol seedha sebum badhata hai',
    'Treatment mein patience rakho — homeopathy ya koi bhi treatment 6-8 weeks mein results dikhna shuru karta hai',
  ],

  donts: [
    'Muhase kabhi squeeze ya pop mat karein — andar ka infection deep tissue mein jaata hai, permanent scar banta hai',
    'Harsh scrubs acne pe mat lagaein — micro-tears se bacteria aur spread hota hai',
    'Heavy oil-based creams ya coconut oil directly face pe mat lagaein — pores clog karta hai',
    'Multiple products ek saath mat try karein — kya kaam kar raha hai kya nahi, pata nahi chalta',
    'Dirty haath se face mat chhuyen — bacteria transfer hota hai',
    'Ek product se result na mile to immediately doosra mat try karo — skin ko adjust karne ka waqt do (minimum 4-6 weeks)',
    'Periods se pehle bhadne wali acne ko "normal" samajhke ignore mat karo — hormonal acne treatable hai',
    'Raat ko makeup ya sunscreen ke saath so mat jaao — pores band ho jaate hain raat bhar',
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Q1. Acne permanently kaise hataye — koi permanent solution hai?',
      answer: 'Acne permanently control karna bilkul possible hai — sirf "surface treatment" se nahi, cause address karke. Agar acne hormonal hai to hormones balance karna zaroori hai; agar diet se trigger hoti hai to woh identify karni padti hai; agar stress-related hai to woh bhi managed hoti hai. Homeopathy mein iska advantage ye hai ki ye sirf daane nahi, poori body ki tendency treat karta hai — isliye baar baar wahi jagah pe daana nikalna wali pattern dheere dheere toot jaati hai. 3-6 months consistent treatment se majority patients mein acne bahut control mein aa jaati hai.',
    },
    {
      _key: 'faq2',
      question: 'Q2. Acne ke kale daag (scars) kaise hataye — kya homeopathy mein koi medicine hai?',
      answer: 'Acne ke baad jo kale ya red daag rehte hain unhe post-inflammatory hyperpigmentation (PIH) kehte hain — aur ye Indian skin mein bahut common hai. Homeopathy mein Berberis Aquifolium, Kali Bromatum jesi medicines daag ghataane mein helpful hain. Saath mein daily sunscreen lagana absolutely zaroori hai — bina SPF ke daag aur kale hote hain, halke nahi. Vitamin C serum bhi helpful hota hai. Complete fading mein 3-6 months lag sakte hain — patience rakhein. Agar daag bahut deep hain to dermatologist se bhi consult karein.',
    },
    {
      _key: 'faq3',
      question: 'Q3. Hormonal acne kya hoti hai — aur isse kaise theek karein?',
      answer: 'Hormonal acne mainly jawline, chin aur lower cheeks pe hoti hai — aur periods se 5-7 din pehle bhadti hai. Ye estrogen-progesterone imbalance, PCOS ya thyroid se linked hoti hai. Adult mahilaaon (25-35 age) mein ye most common type hai. Homeopathy mein Pulsatilla, Sepia jesi medicines hormonal fluctuations se linked acne ko address karti hain. Agar PCOS suspected ho to blood test (hormonal panel) zaroor karwaayein — root cause ka treatment zyada effective hoga. Sirf face pe cream lagaane se hormonal acne theek nahi hoti.',
    },
    {
      _key: 'faq4',
      question: 'Q4. Kya homeopathy se acne theek hoti hai — kya proof hai?',
      answer: 'Haan — homeopathy acne ke liye ek effective approach hai, khaaskar recurring ya hormonal cases mein. CCRH-affiliated studies mein homeopathic treatment group mein inflammatory lesion count mein meaningful reduction dekha gaya — placebo group ke comparison mein (58% vs 18%). Homeopathy ka unique angle ye hai ki ye sirf daane nahi — sebum production, skin ki inflammatory tendency, aur underlying hormonal ya gut issues bhi address karta hai. 8-12 weeks mein improvement clear hone lagta hai.',
    },
    {
      _key: 'faq5',
      question: 'Q5. Acne mein kya khana chahiye aur kya nahi?',
      answer: 'Acne diet mein ye most important changes hain. KHAYEIN: Amla, palak, gajar (antioxidants + vitamin C), dahi (gut health), green tea, haldi, sabut anaaj, dal. AVOID KAREIN: Maida, white sugar, cold drinks (glycemic spike), full-fat milk (dairy hormones), fried junk food, excess chai. Sabse important: Paani 2.5-3 litre daily — ye akela bhi significant difference karti hai skin mein. Low glycemic diet (sugar aur maida kam) ka acne pe scientific evidence consistently strong hai.',
    },
    {
      _key: 'faq6',
      question: 'Q6. Teenagers mein pimples ka treatment kya hai?',
      answer: 'Teenager acne mostly hormonal surge se hoti hai — puberty mein androgen hormones sebum production badhate hain. Ye phase 2-4 saal tak reh sakta hai, lekin sahi treatment se severe scarring se bachaya ja sakta hai. Gentle face wash (2x daily), non-comedogenic products, aur sugar-dairy kam karna basic steps hain. Homeopathy teenagers ke liye particularly safe hai — no harsh chemicals — aur individualized treatment se underlying hormonal sensitivity address hoti hai. Early treatment mein scars se bachna bahut aasaan hota hai.',
    },
    {
      _key: 'faq7',
      question: 'Q7. Kya acne se permanent scars hote hain — kaise bachein?',
      answer: 'Permanent scars (pitted ya raised) mainly tab hote hain jab: (1) Acne ko squeeze kiya jaaye, (2) Cystic ya nodular acne ka late treatment ho, ya (3) Infection bahut deep jaaye. Bachne ke liye: Kabhi squeeze mat karein — ye #1 rule hai. Sunscreen daily lagaein — bina SPF ke PIH aur dark hota hai. Treatment jaldi shuru karein — early treatment mein deep tissue damage se bachna possible hai. Sunscreen + early treatment combined sabse effective scarring prevention hai.',
    },
    {
      _key: 'faq8',
      question: 'Q8. PCOS mein acne ka treatment kya hota hai?',
      answer: 'PCOS wali mahilaaon mein acne hormonal imbalance ki wajah se hoti hai — testosterone elevated hota hai jo sebum badhata hai. Sirf face products se ye theek nahi hogi. Complete approach chahiye: (1) PCOS ka treatment (insulin resistance, hormones), (2) Acne-specific care, (3) Diet — low glycemic aur dairy-limited diet PCOS acne mein zyada helpful hai. Homeopathy mein PCOS-linked acne ke liye constitutional treatment effective hota hai — Sepia, Pulsatilla commonly used hain. Sabse pehle hormonal panel test karwaayein.',
    },
    {
      _key: 'faq9',
      question: 'Q9. Back acne (peeth ke daane) ka treatment kya hai?',
      answer: 'Peeth ke daane (bacne) face wali acne se thoda alag hai — wahan skin thicker hai, sebaceous glands dense hain. Common triggers: tight synthetic kapde, gym ke baad sweat, oily sunscreen, hair products peeth pe aana. Treatment: gym ke baad turant shower, loose cotton kapde, non-comedogenic body lotion, BHA (salicylic acid) body wash. Homeopathy mein Sulphur, Kali Bromatum jese medicines back acne mein bhi helpful hain. Severe ya nodular back acne mein doctor se milein.',
    },
    {
      _key: 'faq10',
      question: 'Q10. Pregnancy mein acne ka safe treatment kya hai?',
      answer: 'Pregnancy mein acne common hai — hormones drastically change hote hain. Lekin bahut saari conventional medicines (Retinoids, some antibiotics) pregnancy mein completely contraindicated hain — matlab forbidden. Ye ek jagah hai jahan homeopathy ka clear advantage hai — homeopathic medicines highly diluted hoti hain aur pregnancy mein safe mani jaati hain. Pulsatilla, Sepia hormonal acne ke liye; Berberis Aquifolium daag ke liye — lekin koi bhi medicine bina homoeopath ke mat lein. Diet aur gentle skincare bhi safe approach hai. Apne gynecologist ko zaroor batayein koi bhi treatment shuru karne se pehle.',
    },
    {
      _key: 'faq11',
      question: 'Q11. Acne ke liye ghar par kya karein — koi gharelu upay?',
      answer: 'Kuch evidence-backed gharelu options: Neem paste (anti-bacterial) — mild acne mein helpful. Haldi + honey mask — anti-inflammatory, soothe karta hai. Ice cube (cloth mein wrap) — inflamed daane pe 2 min, redness ghataata hai. Aloe vera gel (pure) — soothing, mild anti-bacterial. Green tea water (thanda) — toner ke roop mein. Lekin important note: Ye mild acne mein helpful hain. Cystic ya severe acne mein sirf gharelu upay pe depend nahi karna chahiye — scar risk badhta hai. Doctor se milna zaroori.',
    },
    {
      _key: 'faq12',
      question: 'Q12. Oily skin aur acne ek saath kaise control karein?',
      answer: 'Oily skin acne prone hoti hai kyunki excess sebum pores clog karta hai. Common mistake hai zyada wash karna — ye skin aur zyada oil produce karta hai. Sahi approach: Gentle cleanser (2x daily sirf), oil-free gel moisturizer (skipping moisturizer oiliness aur badhata hai), niacinamide serum (sebum production regulate karta hai — research-backed), BHA/salicylic acid week mein 2-3 baar. Homeopathy mein Sulphur chronic oily + acne-prone skin ke liye best known medicine hai.',
    },
    {
      _key: 'faq13',
      question: 'Q13. Acne treatment kitne din mein result deta hai?',
      answer: 'Ye depend karta hai treatment type pe. Homeopathy mein: 8-12 weeks for clear improvement; full benefit 3-6 months. Conventional topical (benzoyl peroxide, salicylic acid): 4-8 weeks. Antibiotics: 6-12 weeks. Patience key hai — koi bhi treatment 2 hafte mein miracle nahi karta. Ek common mistake: 2 hafte mein result nahi mila to product change kar lo — yahi acne aur bhadne ka reason banta hai. Ek treatment ko proper time do aur consistently use karo.',
    },
    {
      _key: 'faq14',
      question: 'Q14. Stress se acne kyun bhadti hai — kya karna chahiye?',
      answer: 'Stress acne ka ek major trigger hai — directly. Jab aap stress mein hote ho, body cortisol produce karti hai — cortisol sebum production badhata hai. Exams, job pressure, relationship stress — sab acne flare trigger kar sakte hain. Isliye "mental health = skin health" literally sach hai. Yoga, deep breathing, regular exercise — ye cortisol manage karte hain. Homeopathy mein constitutional treatment stress sensitivity ko bhi address karta hai — sirf skin nahi.',
    },
    {
      _key: 'faq15',
      question: 'Q15. Kya milk pine se pimples bhadte hain — chai theek hai?',
      answer: 'Full-fat milk aur acne ka link research mein consistently strong hai — milk mein IGF-1 hormone hota hai jo sebum production stimulate karta hai. Skim milk thoda better hai lekin fir bhi affect karta hai. Dahi (probiotic form) mein ye impact kam hota hai. Chai ke baare mein: Moderate chai (1-2 cups) se zyada fark nahi — lekin zyada chai + sugar (Indian doodh wali meethi chai) acne trigger kar sakti hai insulin spike aur cortisol dono se. Plant-based milk (almond, oat) better alternative hai acne-prone skin ke liye.',
    },
    {
      _key: 'faq16',
      question: 'Q16. Kya acne contagious hai — doosron ko hogi kya?',
      answer: 'Bilkul nahi — acne contagious nahi hai. Ye person to person spread nahi hoti. Acne ka bacteria (C. acnes) already har kisi ki skin pe hota hai — isliye doosre ke muhase chhune se aapko acne nahi hogi. Na sharamindaa hone ki zarurat hai, na dusron se door rehne ki. Ye ek common myth hai jise clear karna important hai.',
    },
    {
      _key: 'faq17',
      question: 'Q17. Acne mein kaunsa face wash use karein?',
      answer: 'Acne ke liye ideal face wash criteria: Gentle, sulfate-free formula (harsh nahi). Non-comedogenic label. Salicylic acid (0.5-2%) wala — pores saaf karta hai. Benzoyl peroxide (2.5%) — active acne ke liye. Tea tree based — natural preference ke liye. Din mein sirf 2 baar (subah + raat) — zyada nahi. Avoid karein: scrubbing particles wale wash, soap-based harsh cleansers. Tip: Sabse mehenga nahi, sabse suitable — aapki skin type ke hisaab se choose karein.',
    },
    {
      _key: 'faq18',
      question: 'Q18. Kya exercise se acne aur bhadti hai ya kum hoti hai?',
      answer: 'Exercise acne ke liye double-edged sword hai. BENEFIT: Blood circulation badhti hai, cortisol ghatta hai, toxins sweat se nikalta hai. RISK: Sweat + heat + friction (helmet, tight gear) = pore clogging. Isliye rule hai: Exercise ke turant baad face wash karo. Cotton kapde pahno. Tight headbands avoid karo. Regular exercise long-term mein acne ke liye beneficial hai — bas post-workout hygiene maintain karo.',
    },
    {
      _key: 'faq19',
      question: 'Q19. Kya acne sirf teenagers ko hoti hai — adults mein kyun?',
      answer: 'Ye myth hai ki acne sirf teenagers ko hoti hai. Adult acne (25+ age) actually increasing hai — especially mahilaaon mein. Reasons: PCOS, thyroid, stress, wrong skincare, pollution, high glycemic diet. Research suggests 54% adult women experience acne after age 25. Adult acne teen acne se thodi different hoti hai — jawline pe zyada, hormonal pattern, aur skincare products se zyada sensitive. Treatment bhi slightly alag approach chahti hai.',
    },
    {
      _key: 'faq20',
      question: 'Q20. Sunscreen lagane se acne aur bhadti hai kya?',
      answer: 'Galat sunscreen se haan — lekin sunscreen chhodni nahi chahiye. Oily ya comedogenic sunscreen pores band karte hain. Solution: "Non-comedogenic", "oil-free", "gel-based" ya "matte finish" sunscreen choose karein. Acne-prone skin ke liye chemical sunscreen better tolerated hoti hai zyada logon mein. Daily sunscreen lagana acne marks (PIH) ko aur dark hone se bachata hai — skip karna acne mein worst decision hai.',
    },
    {
      _key: 'faq21',
      question: 'Q21. Kya acne ka ayurvedic treatment accha hai ya homeopathic?',
      answer: 'Dono ke apne angles hain — lekin approach alag hai. Ayurveda: Dosha-based, herbs jese neem, turmeric, manjistha use karta hai — good for mild-moderate acne, especially lifestyle + diet focus ke saath. Homeopathy: Highly individualized — same symptoms ke 2 patients ko alag medicines mil sakti hain based on their overall constitution. Especially effective for: Hormonal acne, stress-triggered, recurring, ya scar-prone cases. Dono ek saath bhi use ho sakte hain — ek qualified doctor se guidance lo.',
    },
    {
      _key: 'faq22',
      question: 'Q22. Acne mein kab doctor ke paas jaana zaroori hai?',
      answer: 'Ye signs aane pe immediately dermatologist ya homoeopath se milein: Nodular ya cystic acne (bade, deep, dardnaak daane) — ye scarring ka highest risk hai. Face pe quick spreading acne. Acne ke saath fever ya unusual swelling. Mental health pe impact — anxiety, social isolation. 2-3 months ke baad bhi koi improvement nahi. Periods ke saath zyada worse hona — PCOS check zaroori. Ghabrayein mat — early treatment mein scars se bachna bahut aasaan hai.',
    },
    {
      _key: 'faq23',
      question: 'Q23. Kya muhase squeeze karna chahiye — sach mein kya hota hai?',
      answer: 'Hard no — bilkul nahi. Ye #1 acne rule hai. Jab aap daana squeeze karte ho: Andar ka pus aur bacteria deeper tissue mein push hota hai. Inflammation aur badh jaati hai. Bacterial spread hoti hai — naya daana us ke aas paas bhi nikal aata hai. Skin pe permanent scar (pitted hole) ban sakta hai jo fir kabhi fully theek nahi hota. Agar daana bahut irritating lag raha ho to ice cube (cloth mein) 2 min lagao — redness aur swelling ghataati hai. Squeeze karna short-term relief, long-term regret hai.',
    },
    {
      _key: 'faq24',
      question: 'Q24. Kya diet se acne completely control ho sakti hai?',
      answer: 'Diet ek important factor hai — lekin akela cure nahi. Research clearly dikhata hai: High glycemic diet (sugar, maida) aur dairy (full-fat milk) acne ko worsen karte hain — ye well-documented hai. Diet change se mild-moderate acne mein significant improvement ho sakta hai. Lekin severe hormonal ya cystic acne mein diet akela enough nahi hota — proper medical treatment bhi zaroori hai. Practical advice: Pehle 6 weeks ke liye dairy + sugar significantly reduce karo aur notice karo — bahut se logo ko akele is change se big improvement milti hai.',
    },
    {
      _key: 'faq25',
      question: 'Q25. Homeopathic acne treatment mein kya expect karein — process kya hota hai?',
      answer: 'Homeopathic consultation alag hoti hai normal prescription se. Doctor aapki poori history lenge — sirf acne nahi: periods ka pattern, stress level, aapki nature, kya khate ho, neend kaisi hai, acne kab se hai, kya se bhadti hai. Isi se individualized medicine decide hoti hai — isliye same acne ke do logon ko alag medicines milti hain. Pehle 2-4 weeks mein existing daane thoda aur aa sakte hain (aggravation) — ye sign hai ki medicine kaam kar rahi hai. 6-8 weeks mein clear improvement shuru hoti hai. 3-6 months ka consistent treatment full benefit ke liye zaroori hai.',
    },
  ],

  sources: [
    { _key: 's1', name: 'CCRH — "Homoeopathy in Dermatological Conditions" | 2019 | Ministry of AYUSH Annual Report | ccrhindia.nic.in' },
    { _key: 's2', name: 'American Academy of Dermatology (AAD) — "Acne: Overview and Treatment Guidelines" | 2023 | aad.org' },
    { _key: 's3', name: 'Zaenglein AL et al. — "Guidelines of care for the management of acne vulgaris" | Journal of the American Academy of Dermatology | 2016' },
    { _key: 's4', name: 'Adebamowo CA et al. — "High school dietary dairy intake and teenage acne" | Journal of the American Academy of Dermatology | 2005' },
    { _key: 's5', name: 'Bowe WP, Logan AC — "Acne vulgaris, probiotics and the gut-brain-skin axis" | Gut Pathogens | 2011' },
    { _key: 's6', name: 'National Institute of Arthritis and Musculoskeletal and Skin Diseases (NIAMS) — "Acne" | 2022 | niams.nih.gov' },
  ],
}

async function seed() {
  console.log('🌱 Seeding Acne...')
  await client.createOrReplace(disease)
  console.log('✅ Acne disease document created/updated: disease-acne')
  console.log('🌐 Live at: https://homeopedia.in/diseases/acne')
}

seed().catch(console.error)
