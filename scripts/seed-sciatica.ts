import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
  useCdn: false,
})

const sciatica = {
  _id: 'disease-sciatica',
  _type: 'disease',

  title: 'Sciatica',
  hindiName: 'Gridhrasi (गृध्रसी) / Kamar se Pair Tak Ka Dard',
  slug: { _type: 'slug', current: 'sciatica' },

  metaTitle: 'Sciatica in Hindi — Symptoms, Causes aur Homeopathy Treatment',
  metaDescription: 'Sciatica (Gridhrasi) ke symptoms, causes, diet tips aur homeopathic treatment — simple Hinglish mein. Verified info, doctor-reviewed.',

  heroText: 'Sciatica ek aisi condition hai jisme kamar (lower back) se shuru hokar ek dard seedha ek taraf ke kamar, jaangh, ghutne, aur kabhi kabhi pair ki angliyon tak jaata hai. Ye dard sciatic nerve ki wajah se hota hai — jo body ki sabse lambi aur moti nerve hai. Jab ye nerve kisi wajah se dabti ya irritate hoti hai, to ek taraf mein jallan, soonapan, ya bijli jaise jhatke feel hote hain. Ayurveda mein ise "Gridhrasi" kaha gaya hai kyunki patient chalte waqt gidh (vulture) jaisa chalta hai.',

  category: 'Joints',

  quickFacts: {
    whatItIs: 'Sciatic nerve body ki sabse lambi nerve hai — lower back se pair ki angliyon tak jaati hai. Iska dabna kamar se pair tak bijli jaisa dard deta hai.',
    howCommon: 'India mein lagbhag 10-40% adults apni zindagi mein kabhi na kabhi sciatica experience karte hain; desk workers aur drivers mein ye number aur zyada hai.',
    treatmentDuration: 'Acute cases: 4-8 hafte | Chronic cases: 3-6 mahine treatment se significant improvement',
    successRate: 'CCRH study: pain score 7.2 se 3.1 (treatment group) vs 7.0 se 5.8 (placebo) — 68% patients ne marked improvement report kiya',
  },

  causes: [
    'Herniated Disc (Slip Disc) — reedh ki haddi ke beech ki disc khisak jaati hai aur sciatic nerve par dabaav daalti hai (sabse common cause — 90% cases mein)',
    'Spinal Stenosis — reedh ki nali (spinal canal) sankar ho jaati hai, nerve pe pressure badhta hai (zyaatar 50+ age mein)',
    'Piriformis Syndrome — back ki piriformis muscle tight hokar nerve ko dabati hai (runner\'s sciatica bhi kehte hain)',
    'Spondylolisthesis — ek vertebra doosri par thodi khisak jaati hai, nerve compress hoti hai',
    'Degenerative Disc Disease — age ke saath disc ghis jaati hai, nerve space kam hota hai',
    'Injury ya Trauma — kamar mein chot, fall, ya accident se nerve directly damage ho sakti hai',
  ],

  riskFactors: [
    '30 se 50 saal ke log — disc problems is age mein peak pe hoti hain',
    'Zyada der tak baithne wale — IT professionals, drivers, desk workers',
    'Heavy lifting jobs — construction workers, warehouse staff',
    'Motapa (obesity) — extra weight spine par pressure dalta hai',
    'Pregnant women — growing uterus sciatic nerve par press karta hai',
    'Diabetic patients — nerve damage (neuropathy) sciatica jaisa sensation de sakti hai',
  ],

  complications: [
    'Permanent Nerve Damage — lambe time tak nerve dabne se pair mein numbness ya weakness permanently baith sakti hai',
    'Muscle Weakness (Drop Foot) — paon uthaane mein taaqat kam ho jaati hai, chalna mushkil hota hai',
    'Bladder/Bowel Control Loss — severe cases mein peshab ya latrine par control kamzor ho sakta hai (ye emergency sign hai — turant doctor ke paas jayein)',
    'Quality of Life Impact — chronic dard se neend, mood, aur daily activities sabse pehle prabhavit hote hain',
  ],

  symptoms: [
    {
      _key: 'pain',
      category: 'Pain Symptoms — Dard ke Signs',
      items: [
        'Kamar se niche ek taraf shooting/jabbing dard — bijli jaisi feeling',
        'Sitting ya standing se dard aur badh jaata hai',
        'Chalne ya laitne par thodi rahat milti hai',
        'Sneeze ya khaansi se dard ek dam tez ho jaata hai',
      ],
    },
    {
      _key: 'nerve',
      category: 'Nerve Symptoms — Tingling & Numbness',
      items: [
        'Pair ya angliyon mein jhunjhuni (pins and needles sensation)',
        'Soonapan — jaangh ya pair ka koi hissa "so jaana"',
        'Jallan jaisi feeling — jaise gorom paani daal diya ho',
        'Kabhi kabhi pair mein kamzori — utha nahi paate',
      ],
    },
    {
      _key: 'mobility',
      category: 'Movement & Mobility Symptoms',
      items: [
        'Ek side se jhuk nahi paate ya mushkil hoti hai',
        'Seedha pair upar uthaana (SLR test) dard deta hai',
        'Lambi walk ke baad dard tez ho jaata hai',
        'Raat ko laitne par bhi dard nahi jaata (severe cases mein)',
      ],
    },
  ],

  ccrhEvidence: {
    improvementRate: '68% patients ne 3 mahine baad marked improvement report kiya; pain score 7.2 se ghata 3.1 (placebo mein sirf 7.0 se 5.8)',
    avgTreatmentPeriod: '3 se 6 mahine (severity ke hisaab se)',
    citation: 'Central Council for Research in Homoeopathy (CCRH) | Indian Journal of Research in Homoeopathy | 2019',
    keyFindings: [
      'VAS pain score treatment group mein 7.2 se ghata 3.1 — placebo group mein 7.0 se sirf 5.8 par ruka',
      'Colocynthis aur Rhus Tox sabse zyada frequently indicated medicines paayi gayin',
      '68% patients ne 3 mahine ke baad "marked improvement" report kiya',
      'Side effects practically nil — sab patients ne treatment tolerate kiya',
    ],
  },

  homeopathyBenefits: [
    'Individualized treatment — aapka sciatica unique hai; ek taraf ka dard, kaun si position mein bura lagta hai, kab se hai — ye sab dekhke medicine milti hai',
    'Nerve inflammation address karta hai — sirf dard mask nahi karta, root irritation pe kaam karta hai',
    'Muscle spasm ko bhi target karta hai — tight piriformis ya spinal muscles relax hone mein help milti hai',
    'Safe for long-term use — chronic sciatica mein jahan pain killers side effects de rahe hon, homeopathy ek safe option hai',
    'Stress-triggered sciatica mein especially effective — jab anxiety se muscle tension badh jaata hai to homeopathy doosre level par kaam karti hai',
  ],

  medicines: [
    {
      _key: 'colocynthis',
      name: 'Colocynthis',
      potency: '',
      bestFor: 'Left-sided sciatica — pair modhne ya dabane se rahat milti ho',
      keyIndications: [
        'Left side mein zyada dard',
        'Pair ko modhna (flexing) ya daba ke rakhne se thodi rahat milti ho',
        'Dard itna tez ki patient curled up ho jaaye',
        'Nerve ki shooting pain aur cramping',
        'Cramping type dard jo ek line mein niche aaye',
      ],
    },
    {
      _key: 'rhustox',
      name: 'Rhus Toxicodendron',
      potency: '',
      bestFor: 'Subah uthte stiff, movement se better — cold aur damp mein dard badhta ho',
      keyIndications: [
        'Rest mein dard bura, thodi movement se better',
        'Subah uthte waqt bahut stiffness, chalte chalte better',
        'Cold aur damp mausam mein dard badhta ho',
        'Morning stiffness wale chronic cases',
        'Classic "rusted gate" pattern — pehle movement mushkil, phir loose hona',
      ],
    },
    {
      _key: 'magnesiaphos',
      name: 'Magnesia Phosphorica',
      potency: '',
      bestFor: 'Right-sided sciatica — warm compress se aur dabane se rahat mile',
      keyIndications: [
        'Right side ka sciatica',
        'Dard cramping ya shooting type ka ho',
        'Warm compress lagane se rahat mile',
        'Dabane se (pressure) better feel ho',
        'Muscle aur nerve ki spasmodic pain',
      ],
    },
    {
      _key: 'gnaphalium',
      name: 'Gnaphalium Polycephalum',
      potency: '',
      bestFor: 'Dard aur intense soonapan saath saath — alternating pain aur numbness',
      keyIndications: [
        'Dard ke saath saath intense numbness (soonapan) bhi ho',
        'Pair "so gaya" jaisa feel ho',
        'Pain aur numbness alternating aate jaate hon — ek aaye to doosra jaaye',
        'Ye specific combination jab hota hai tab ye medicine khaas consider hoti hai',
      ],
    },
    {
      _key: 'arnica',
      name: 'Arnica Montana',
      potency: '',
      bestFor: 'Injury/accident ke baad shuru hoi sciatica — bruised feeling ho',
      keyIndications: [
        'Sciatica kisi injury, fall, ya accident ke baad shuru hua ho',
        'Dard mein bruised/beaten up feeling ho',
        'Choone par dard badh jaaye',
        'Trauma ke baad tissue healing mein help karta hai',
        'Injury-triggered sciatica mein pehli choice',
      ],
    },
  ],

  dietInclude: [
    {
      _key: 'antiinflammatory',
      category: 'Anti-Inflammatory Foods',
      emoji: '🥗',
      items: [
        'Haldi (turmeric) wala doodh — curcumin nerve inflammation naturally kam karta hai',
        'Adrak (ginger) chai ya sabji mein — gingerol nerve pain mein helpful hai',
        'Akhrot (walnuts) — omega-3 fatty acids nerve myelin sheath ko strengthen karte hain',
      ],
    },
    {
      _key: 'magnesium',
      category: 'Magnesium-Rich Foods',
      emoji: '🥬',
      items: [
        'Palak (spinach) aur methi — magnesium muscle spasm kam karta hai jo sciatic nerve ko compress kar raha hota hai',
        'Kela (banana) — potassium aur magnesium dono hain, muscle cramps mein instant help karta hai',
        'Til (sesame seeds) — calcium aur magnesium ka natural source, nerve health ke liye achha',
      ],
    },
    {
      _key: 'hydrating',
      category: 'Hydrating & Light Foods',
      emoji: '💧',
      items: [
        'Nariyal paani — electrolyte balance nerve conduction ke liye zaroori hai',
        'Dalein (moong dal) — protein se disc repair support milta hai, digest bhi asaan hai',
        'Khira (cucumber) aur lauki — hydration se spinal disc cushioning better rehti hai',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'inflammatory',
      category: 'Inflammatory Foods',
      emoji: '🚫',
      items: [
        'Maida aur bakery products — refined carbs inflammation badhate hain, nerve irritation worse hoti hai',
        'Processed/packaged snacks (chips, namkeen) — trans fats inflammation trigger karte hain',
      ],
    },
    {
      _key: 'nerveagg',
      category: 'Nerve-Aggravating Items',
      emoji: '☕',
      items: [
        'Zyada chai ya coffee — caffeine muscles tighten karta hai aur sleep disturb karta hai jo healing mein rukawat hai',
        'Alcohol — nerve damage accelerate karta hai aur pain perception mein interference karta hai',
        'Cold drinks aur ice cream — cold aggravates most sciatica cases (Rhus Tox type especially)',
      ],
    },
    {
      _key: 'heavy',
      category: 'Heavy & Hard-to-Digest Foods',
      emoji: '🧀',
      items: [
        'Tala hua khana (deep fried) — weight badhata hai, spine par extra pressure aata hai',
        'Red meat zyada — arachidonic acid se inflammation badh sakti hai',
        'Zyada namak — water retention se swelling aur nerve pressure dono increase ho sakte hain',
      ],
    },
  ],

  dos: [
    'Roz 20-30 min walk karein — sciatica mein gentle walking recovery ko double fast karti hai, dard mein sirf rest mat karo',
    'Sone ka tarika theek karein — side mein soyen, ghutno ke beech ek pillow rakhen — spine neutral position mein rehti hai',
    'Warm compress (heating pad) lagayein — muscle spasm relax hoti hai aur dard mein rahat milti hai',
    'Physiotherapist se McKenzie exercises seekhein — evidence-based exercises jo disc pressure reduce karti hain',
    'Paani khub piyein (8-10 glass) — spinal discs 80% water se bani hain, hydration cushioning maintain karta hai',
  ],

  donts: [
    'Ek jagah zyada der tak mat baithen — har 30-40 minute mein uthkar 2 min chalein, nerve compression temporarily relieve hoti hai',
    'Seedha aage jhukkar vajan mat uthayein — disc par maximum pressure is position mein hota hai, herniation worse ho sakti hai',
    'Kadak mattress ya zameen par mat soyen — spine natural curve kho deti hai aur morning stiffness aur badh jaati hai',
    'Self-treatment mein heavy massage mat karwaein — untrained massage sciatic nerve aur irritate kar sakti hai',
    'Pain ke bawajood intense exercise mat karein — "push through the pain" approach sciatica mein dangerous hai',
  ],

  faqs: [
    { _key: 'faq1', question: 'Sciatica aur normal kamar dard mein kya fark hai?', answer: 'Normal kamar dard sirf kamar mein rehta hai — uthte baitho to better ho jaata hai. Sciatica mein dard ek line mein niche aata hai: kamar → nitamb → jaangh → kabhi kabhi ghutne ya pair tak. Iske saath jhunjhuni, jallan, ya soonapan bhi hota hai — jo normal backache mein nahi hota. Sciatica mein seedha pair utha nahi paate bina dard ke — ye ek simple ghar par test (SLR test) hai jo fark batata hai.' },
    { _key: 'faq2', question: 'Sciatica kitne din ya mahine mein theek hoti hai?', answer: 'Zyaatar acute sciatica cases (pehli baar, disc mild) 4 se 8 hafte mein apne aap ya treatment se settle ho jaate hain. Jo log timely treatment, rest aur exercises lete hain unka dard aur jaldi jaata hai. Chronic ya recurrent sciatica — jo baar baar aati hai — mein 3 se 6 mahine ka consistent treatment lagta hai. Homeopathic treatment mein 3 mahine baad significant improvement zyaatar patients ko dikhti hai.' },
    { _key: 'faq3', question: 'Kya sciatica permanently theek ho sakti hai?', answer: 'Haan — zyaatar cases mein permanent control bilkul possible hai. Jo log triggers seriously lete hain (long sitting avoid karna, exercises regular karna, weight manage karna) aur proper treatment lete hain, unhe mahino tak attack nahi aata — life practically normal ho jaati hai. Structural causes (jaise badi disc herniation ya spinal stenosis) mein "management" better word hai — lekin quality of life bahut achhi ho sakti hai.' },
    { _key: 'faq4', question: 'Kya homeopathy sciatica mein kaam karta hai?', answer: 'Haan — homeopathy sciatica mein ek effective approach hai, especially jab treatment individualized ho. CCRH ke study mein sciatica patients ka pain score (VAS) treatment group mein 7.2 se ghata 3.1 — placebo group mein wahi 7.0 se sirf 5.8 par ruka. 68% patients ne marked improvement report kiya. Homeopathy ka fayda ye hai ki ye sirf dard mask nahi karta — nerve irritation, muscle spasm, aur jo underlying sensitivity hai — ye sab ek saath address hota hai.' },
    { _key: 'faq5', question: 'Sciatica mein kaun si homeopathic medicine best hai?', answer: 'Ye seedha answer dena mushkil hai kyunki homeopathy mein "best medicine" exist nahi karti — sahi medicine aapke symptoms par depend karti hai. Left side dard mein Colocynthis, right side warm-better mein Magnesia Phos, "motion se rahat" wale mein Rhus Tox, aur dard ke saath soonapan mein Gnaphalium — ye sab sciatica ki common medicines hain lekin har case mein alag hoti hai. Ek qualified homoeopath aapki poori history sunke decide karta hai — self-medication yahan effective nahi hogi.' },
    { _key: 'faq6', question: 'Sciatica mein kya exercise karein aur kya nahi?', answer: 'Karein: Gentle walking (flat surface pe, roz 20-30 min), knee-to-chest stretch laitke, piriformis stretch, swimming ya water therapy. MAT karein: Sit-ups/crunches — disc par direct pressure, toe-touches khadte hoke — nerve stretch hoti hai aur dard badh sakta hai, heavy weight lifting bina proper form ke. Physiotherapist se disease-specific exercise plan zaroor banwayein — generic YouTube videos sab ke liye safe nahi hote.' },
    { _key: 'faq7', question: 'Pregnancy mein sciatica ho jaaye to kya karein?', answer: 'Pregnancy mein sciatica bahut common hai — badhta hua uterus sciatic nerve par press karta hai. Is situation mein most pain medications safe nahi hoti — isliye homeopathy ek particularly useful option ban jaata hai (highly diluted, no known teratogenic effects). Bellis Perennis aur Kali Carb pregnancy-related sciatica mein commonly used hain. Side-sleeping position (left side preferred), maternity pillow between knees, aur prenatal physiotherapy bhi bahut help karti hai.' },
    { _key: 'faq8', question: 'Sciatica mein kab turant doctor ke paas jaana chahiye?', answer: 'Ye signs emergency hain — turant doctor ya emergency mein jayein: Pair mein sudden complete numbness ya weakness aa jaaye; Peshab ya latrine par control kam ho jaaye (bladder/bowel incontinence) — ye cauda equina syndrome ho sakta hai; Dono pair mein ek saath symptoms hon; Kisi injury ya accident ke baad sciatica shuru ho; Fever ke saath kamar dard — infection possible.' },
    { _key: 'faq9', question: 'Kya office mein kaam karte waqt sciatica manage kar sakte hain?', answer: 'Haan — kuch simple changes bahut fark karti hain: Ergonomic chair use karein jisme lumbar support ho; Screen aankh ke level par rakhen — aage jhukna avoid ho; Har 30-40 minute mein 2-3 min ke liye uthein aur chalein; Seat mein baithte waqt dono pair zameen par flat rakhen; Crossing legs avoid karein — piriformis aur tight hoti hai. Standing desk option ho to 2-3 ghante khade kaam karein.' },
    { _key: 'faq10', question: 'Sciatica mein MRI zaroori hai kya?', answer: 'Pehli baar ki mild-moderate sciatica mein MRI zaroori nahi — 4-6 hafte ka conservative treatment pehle try hota hai. MRI tab chahiye jab: dard 6 hafte mein better na ho, pair mein weakness aa jaaye, bladder/bowel symptoms hon, ya cancer ya infection suspect ho. MRI disc ki exact condition, nerve compression ka level, aur severity clearly batata hai — surgical decision ke liye zaroori hota hai.' },
  ],

  sources: [
    { _key: 'ccrh', name: 'Central Council for Research in Homoeopathy (CCRH) — Clinical Verification of Homoeopathic Medicines in Sciatica', url: 'https://ijrh.org', year: '2019' },
    { _key: 'ninds', name: 'National Institute of Neurological Disorders and Stroke (NINDS, NIH) — Sciatica Information Page', url: 'https://www.ninds.nih.gov', year: '2023' },
    { _key: 'cochrane', name: 'Cochrane Review — Bed rest for acute low-back pain and sciatica', url: 'https://cochranelibrary.com', year: '2010' },
    { _key: 'boericke', name: 'Boericke\'s Materia Medica — William Boericke, MD (9th Edition)', url: '', year: '' },
    { _key: 'who', name: 'WHO Global Burden of Disease Study — Low Back Pain & Radiculopathy Prevalence Data | Lancet', url: '', year: '2020' },
  ],

  youtubeUrl: 'https://youtu.be/F-naeSttY5M',

  selfCheck: 'Seedha pair zameen par laitke upar uthaayein — agar 30-40 degree pe dard ya jhunjhuni aaye to ye sciatica ka sign hai. Agar pair mein kamzori ya peshab/latrine par control kam ho to turant doctor ke paas jayein.',

  publishedAt: new Date().toISOString(),
}

async function main() {
  try {
    const result = await client.createOrReplace(sciatica)
    console.log('✅ Sciatica disease document created/updated:', result._id)
    console.log('🌐 Live at: https://homeopedia.in/diseases/sciatica')
  } catch (err) {
    console.error('❌ Error:', err)
    process.exit(1)
  }
}

main()
