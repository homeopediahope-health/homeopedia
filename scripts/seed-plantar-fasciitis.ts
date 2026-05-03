import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-plantar-fasciitis',
  _type: 'disease',
  slug: { _type: 'slug', current: 'plantar-fasciitis' },
  title: 'Plantar Fasciitis',
  hindiName: 'Edi Ka Dard / Paon Ki Tali Ka Dard / Paon Ke Tale Mein Dard',
  category: 'Joints',
  seoTitle: 'Plantar Fasciitis – Heel Pain Ka Homeopathic Treatment Guide',
  seoDescription: 'Plantar Fasciitis (edi ka dard) ke causes, types, homeopathic treatment, diet chart aur exercise guide – verified, doctor-reviewed Hinglish mein.',
  whatIsIt: `Plantar Fasciitis ek aisi condition hai jisme paon ke tale ki ek moti, strong tissue band — jise "plantar fascia" kehte hain — mein inflammation (sujan) aa jaati hai. Ye tissue heel bone (calcaneus) se shuru hokar angliyon tak jaati hai. Jab ye tissue zyada stretch hoti hai ya overloaded hoti hai, to isme micro-tears aate hain aur dard shuru ho jaata hai. India mein yeh ek bahut common problem hai — khaaskar unme jinhe lambe waqt tak khade rehna padta hai ya jinke paon flat hain. Sabse badi pehchaan ye hai ki subah bistar se uthte hi pehla qadam rakhte waqt edi mein bahut tez dard hota hai.`,

  types: [
    {
      _key: 'type1',
      name: 'Acute Plantar Fasciitis',
      description: 'Ye naya aur sudden onset wala dard hota hai — typically 1-3 mahine purana. Kisi bhi activity ke baad ya subah uthke tez dard. Is stage mein treatment sabse fast response deta hai — 3-8 hafte mein significant improvement possible hai.',
    },
    {
      _key: 'type2',
      name: 'Chronic Plantar Fasciitis',
      description: '6 mahine ya usse zyada purana persistent heel dard. Ye aksar tab hota hai jab acute stage ka proper treatment nahi hua. Isme tissue thicker ho jaati hai aur healing slow hoti hai. 3-6 mahine ka realistic timeline hai.',
    },
    {
      _key: 'type3',
      name: 'Bilateral Plantar Fasciitis',
      description: 'Jab dono paon mein ek saath hota hai. Yeh aksar systemic conditions ke saath — jaise obesity, rheumatoid arthritis, ya hormonal changes — linked hota hai. Sirf local treatment se kaam nahi chalta, root cause treat karna zaroori hai.',
    },
    {
      _key: 'type4',
      name: 'Insertional Plantar Fasciitis',
      description: 'Jab inflammation exactly wahan hoti hai jahan plantar fascia heel bone se judti hai. Isme often heel spur (calcaneal spur) bhi saath hota hai. Zyada stubborn hoti hai kyunki movement mein hamesha wahi spot stressed hota rehta hai.',
    },
    {
      _key: 'type5',
      name: 'Non-Insertional / Athletic Plantar Fasciitis',
      description: 'Inflammation fascia ke beech wale hisse mein hoti hai — heel se thodi door. Runners, sportsmen, ya sudden intense exercise start karne wale. Age aksar younger (20-40). Recovery fast hoti hai agar activity modify ki jaaye — complete rest zaroori nahi, smart rest zaroori hai.',
    },
  ],

  causes: [
    'Plantar fascia pe baar baar excessive stress aana — jaise zyada chalna, daudna ya lambe waqt khade rehna',
    'Achilles tendon ka tight hona — jab calf muscles tense hoti hain to puri tali pe extra load aata hai',
    'Flat feet (pes planus) ya high arches (pes cavus) — dono mein fascia ka biomechanics disturb hota hai',
    'Galat footwear — cushioning aur arch support ke bina zyada waqt chalna',
    'Achanak weight gain ya obesity — fascia pe load suddenly badh jaata hai',
    'Hard surfaces pe lambe waqt khada rehna — khas tor pe concrete ya tile pe bina proper footwear ke',
  ],

  riskFactors: [
    '40-60 saal ke adults — is umar mein fascia tissue mein elasticity kam hoti hai',
    'Jo log zyada waqt standing jobs mein hain — teachers, nurses, factory workers, hawkers',
    'Runners aur athletes — especially jinhe training load suddenly badhana ho',
    'Overweight ya obese log — every extra kilo heel pe extra pressure dalti hai',
    'Flat feet ya high arch wale — abnormal weight distribution ki wajah se',
    'Pregnant women — weight gain aur hormonal changes dono fascia ko affect karte hain',
  ],

  complications: [
    'Chronic heel pain — dard permanent roop le sakta hai jo daily walking bhi mushkil bana de',
    'Gait (chaal) mein badlav — dard ki wajah se log unconsciously chalne ka tarika badal lete hain, jisse knee, hip aur lower back mein naya dard shuru hota hai',
    'Heel spur (calcaneal spur) develop hona — heel bone pe bony growth jo surgery tak naubat la sakti hai',
    'Activity limitation aur quality of life mein giravat — khas tor pe active logon mein depression aur frustration bhi aata hai',
  ],

  symptomGroups: [
    {
      _key: 'sg1',
      groupName: 'Heel Pain Ke Typical Signs',
      symptoms: [
        'Subah bistar se uthte hi pehla qadam rakhne par tez, cutting-type dard — ye plantar fasciitis ki sabse khas pehchaan hai',
        'Heel ke neeche ya beech mein dard — exact location fascia ke type pe depend karta hai',
        'Lambe waqt baithne ke baad uthne par phir se dard — jaise office mein kaam karte waqt ya car se nikalte waqt',
        'Touch karne par edi ke neeche sensitivity ya tenderness',
      ],
    },
    {
      _key: 'sg2',
      groupName: 'Dard Ka Pattern Aur Behavior',
      symptoms: [
        'Thodi der chalne ke baad dard thoda kam hota hai (warm-up effect) — lekin zyada derne par phir badhta hai',
        'Seedhi ya tilted surface pe chalne mein difference feel hona',
        'Zyada activity wale din raat ko heel mein thakan aur heaviness',
        'Stairs chadhne utarne mein difficulty aur dard',
      ],
    },
    {
      _key: 'sg3',
      groupName: 'Associated Signs',
      symptoms: [
        'Paon ke arch mein tightness ya pulling sensation',
        'Calf muscles mein tightness (Achilles tendon tight hona)',
        'Subah uthne ke baad paon mein stiffness jo kuch qadam ke baad thodi theek hoti hai',
        'Kuch cases mein mild swelling heel ke aaspaas',
      ],
    },
  ],

  homeopathyNote: `Plantar Fasciitis mein asli problem hai fascia tissue ka baar baar micro-damage hona aur iska properly heal na hona. Homeopathy is healing process ko strengthen karti hai — inflammation ko reduce karti hai, tissue repair ko stimulate karti hai, aur chronic cases mein fascia ki sensitivity ko address karti hai. Sirf dard band karna nahi, homeopathy ka goal hai ki fascia ki underlying tendency baar baar inflame hone ki kam ho.\n\nCCRH Clinical Verification Programme ke musculoskeletal pain studies mein Rhus Toxicodendron aur Ruta Graveolens based individualized treatment mein chronic heel pain patients ki pain score mein meaningful reduction dekhi gayi. Homeopathic treatment group mein morning stiffness aur first-step pain dono mein improvement conventional analgesic group ke comparison mein comparable thi — bina side effects ke. Calcaneal spur associated cases mein Hekla Lava ka use documented hai.\n\nHOMEOPATHY BENEFITS: Subah ki stiffness aur first-step pain — jo conventional painkillers se properly address nahi hoti — ismein homeopathy targeted relief deta hai. No dependency, no gastric side effects — jo long-term NSAIDs use mein hote hain. Elderly patients aur pregnant women ke liye safe option.`,

  medicines: [
    {
      _key: 'med1',
      name: 'Rhus Toxicodendron',
      bestFor: 'Jin logon ka dard rest ke baad — khaaskar subah uthke — bahut zyada hota hai lekin thodi activity ke baad thoda better feel hota hai. "First movement mein bahut dard, phir thoda theek" — ye inka typical pattern hai.',
      keyIndications: [
        'Jin logon ka dard rest ke baad — khaaskar subah uthke — bahut zyada hota hai lekin thodi activity ke baad thoda better feel hota hai. "First movement mein bahut dard',
        'phir thoda theek" — ye inka typical pattern hai.',
      ],
      hopeReason: 'Rhus Tox ka classic action hai stiffness aur tearing pain on first motion jo warm-up se better ho. Plantar fasciitis ka morning dard bilkul isi pattern pe fit baithta hai. Tissue level pe inflammation aur micro-damage ki healing mein bhi documented use hai.',
    },
    {
      _key: 'med2',
      name: 'Ruta Graveolens',
      bestFor: 'Jinhein tendons aur ligaments ki weakness ya injury ki history ho — heel mein bruised, sore, achy feeling ho. Khas tor pe jinhe zyada physical activity ke baad pain badhe.',
      keyIndications: [
        'Jinhein tendons aur ligaments ki weakness ya injury ki history ho — heel mein bruised',
        'sore',
        'achy feeling ho. Khas tor pe jinhe zyada physical activity ke baad pain badhe.',
      ],
      hopeReason: 'Ruta specifically tendons, ligaments aur periosteum (bone covering) pe kaam karta hai. Plantar fascia ek tough ligamentous band hai — Ruta is tissue type ke liye homeopathy ka most specific remedy hai.',
    },
    {
      _key: 'med3',
      name: 'Calcarea Fluorica',
      bestFor: 'Jinhein calcaneal spur (heel bone growth) confirmed ho ya jin cases mein fascia bahut thick aur hard ho gayi ho. Chronic cases jinhein badhne mein zyada waqt laga ho.',
      keyIndications: [
        'Jinhein calcaneal spur (heel bone growth) confirmed ho ya jin cases mein fascia bahut thick aur hard ho gayi ho. Chronic cases jinhein badhne mein zyada waqt laga ho.',
      ],
      hopeReason: 'Calcarea Fluor bony tissues aur fibrous tissue ki hardness ko address karta hai. Spur-associated cases mein aur fascia ke chronic thickening mein iska documented clinical use hai.',
    },
    {
      _key: 'med4',
      name: 'Hekla Lava',
      bestFor: 'Calcaneal spur ke cases jinmein X-ray pe bony growth confirm ho aur dard constant ho — especially touchy, nodular tenderness heel pe ho.',
      keyIndications: [
        'Calcaneal spur ke cases jinmein X-ray pe bony growth confirm ho aur dard constant ho — especially touchy',
        'nodular tenderness heel pe ho.',
      ],
      hopeReason: 'Hekla Lava bone growths aur exostoses (extra bony deposits) ke liye specific action rakhta hai. Dental aur calcaneal bony overgrowth dono mein historically aur clinically use hota hai.',
    },
    {
      _key: 'med5',
      name: 'Bryonia Alba',
      bestFor: 'Jinhein any movement se dard bahut badhe — bilkul rest mein hi better feel ho. Pressure se thoda relief milta ho. Ye Rhus Tox se ulta pattern hai.',
      keyIndications: [
        'Jinhein any movement se dard bahut badhe — bilkul rest mein hi better feel ho. Pressure se thoda relief milta ho. Ye Rhus Tox se ulta pattern hai.',
      ],
      hopeReason: 'Bryonia "worse by every motion, better by rest and pressure" ka classical remedy hai. Kuch plantar fasciitis patients ka exact pattern ye hota hai — especially acute inflammatory phase mein.',
    },
  ],

  dietInclude: [
    {
      _key: 'di1',
      category: 'Anti-Inflammatory Foods',
      items: [
        'Haldi (Turmeric) wala doodh ya khana — curcumin ek powerful natural anti-inflammatory hai jo fascia ki sujan kam karne mein help karta hai',
        'Adrak (Ginger) chai ya sabzi mein — gingerol compound inflammation pathway ko block karta hai',
        'Omega-3 rich foods: Akhrot, flaxseeds, sardines — ye prostaglandins (inflammation chemicals) ko modulate karte hain',
        'Palak, methi, broccoli — magnesium aur antioxidants se bhari, muscle aur tissue recovery support karti hain',
      ],
    },
    {
      _key: 'di2',
      category: 'Bone & Tissue Healing Foods',
      items: [
        'Dahi aur paneer — calcium aur Vitamin D ka good source jo bone healing mein important hai',
        'Anaar aur amla — Vitamin C se bhari, collagen synthesis ke liye critical (fascia collagen-based tissue hai)',
        'Moong dal aur chana — plant protein jo tissue repair ke liye building blocks deta hai',
        'Til (Sesame) — calcium aur zinc se bhari, bone aur connective tissue ke liye',
      ],
    },
    {
      _key: 'di3',
      category: 'Hydration & Weight Management',
      items: [
        'Paryapt paani — 8-10 glass daily, tissue hydration se fascia ki flexibility maintain rehti hai',
        'Coconut water — electrolyte balance, muscle cramping prevent karta hai jo indirect pain badha sakta hai',
        'Green tea — antioxidant rich, systemic inflammation kam karta hai',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'Inflammatory Foods',
      items: [
        'Maida aur processed foods (biscuits, white bread, instant noodles) — refined carbs inflammatory cytokines badhate hain',
        'Deep fried foods, dalda, vanaspati — trans fats se body mein inflammation increase hoti hai',
        'Packaged snacks, chips — sodium aur unhealthy fats ka double problem',
      ],
    },
    {
      _key: 'da2',
      category: 'Foods That Worsen Tissue Health',
      items: [
        'Zyada chai aur coffee — calcium absorption interfere karta hai jisme bone healing slow hoti hai (2 cups se zyada mat lo)',
        'Cold drinks aur sugary beverages — sugar inflammatory response trigger karta hai',
        'Alcohol — collagen synthesis ko slow karta hai aur healing delay hoti hai',
      ],
    },
    {
      _key: 'da3',
      category: 'Weight Gain Triggering Foods',
      items: [
        'Zyada meetha — weight gain se heel pe load badhta hai, dard ka sabse bada aggravator',
        'Heavy late-night meals — weight management ke liye nahi sahi, heel pain worst hota hai overweight mein',
        'Ultra-processed ready-to-eat meals — sodium retention se swelling badh sakti hai',
      ],
    },
  ],

  dos: [
    'Arch support wale comfortable shoes ya sandals hardam pehnen — flat footwear se bilkul bachein, ghar mein bhi cushioned slippers use karein — bare feet pe chalna fascia pe direct load hoti hai',
    'Silicone heel cups ya orthotic insoles use karein — inhe medically proven benefit hai heel pain mein, online ya pharmacy pe milte hain',
    'Roz subah uthne se pehle bistar mein hi calf stretches aur towel stretches karein (2-3 min) — pehla dard-bhara qadam dramatically kam hoga waqt ke saath',
    '"Frozen water bottle rolling" exercise karein — ek frozen bottle ko paon ke neeche rakh ke 10 min roll karein — ice therapy + massage ka double benefit',
    'Seated calf raises aur toe curls throughout the day — fascia aur supporting muscles strengthen hoti hain',
    'Agar overweight hain to weight management priority banao — 5 kg bhi weight kam karne se heel pe load significantly kam ho jaata hai',
    'Homeopathic treatment ke saath physiotherapy ka combination lein — fastest results ke liye',
  ],

  donts: [
    'Subah uthke seedha hard floor pe nanga pair mat rakho — pehla qadam rakhne se pehle bed pe hi feet warm karo ya slippers ready rakho',
    'NSAIDs (pain killers jaise ibuprofen, diclofenac) daily aur long-term mat lo — short term relief milti hai lekin fascia healing actually slow ho jaati hai aur gastric problems bhi hote hain',
    'High heels ya completely flat footwear dono avoid karein — heel ko neutral position mein rakhna zaroori hai, dono extreme wrong hain',
    'Hard concrete ya tile pe lambe waqt khada mat raho bina proper footwear ke — khas tor pe kitchen mein kaam karte waqt rubber mat use karein',
    'Dard mein "push through karke" exercise mat karo — runners aur gym-goers yahi galti karte hain, isse chronic damage hota hai',
    'Bina treatment ke mahine tak ignore mat karo — acute plantar fasciitis agar 3-4 hafte mein address ho jaaye to chronic hone se bachti hai, phir treatment zyada mushkil hoti hai',
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Plantar fasciitis kya hoti hai aur iska heel spur se kya connection hai?',
      answer: 'Plantar fasciitis ek aisi condition hai jisme paon ke tale ki strong tissue band (plantar fascia) mein inflammation aa jaati hai — khas tor pe heel bone ke paas. Heel spur (calcaneal spur) ek alag cheez hai — yeh heel bone pe develop hone wali bony growth hai. Dono aksar saath saath hote hain (lagbhag 50% plantar fasciitis cases mein heel spur bhi hota hai), lekin zaroori nahi ki saath ho. Interesting baat ye hai ki kuch logon mein bada spur hota hai phir bhi koi dard nahi — aur kuch logon mein spur nahi but bahut dard hota hai. Treatment dono cases mein similar hai — lekin spur wale chronic cases mein thoda zyada time lagta hai.',
    },
    {
      _key: 'faq2',
      question: 'Plantar fasciitis mein subah uthke edi mein itna dard kyun hota hai?',
      answer: 'Yeh is condition ki sabse khas aur diagnostic sign hai. Raat bhar jab aap sote hain, paon relaxed position mein hote hain aur plantar fascia naturally thodi shorten ho jaati hai. Subah jab pehla qadam uthate hain to ye suddenly stretch hoti hai — aur jab ek inflamed tissue suddenly stretch hoti hai to intense pain hoti hai. Thodi der chalne ke baad fascia warm ho jaati hai aur dard thoda kam lagta hai — yahi "warm up" effect hai. Agar aapke saath bhi yehi ho raha hai to yeh plantar fasciitis ka classic sign hai — doctor se confirmation zaroori hai.',
    },
    {
      _key: 'faq3',
      question: 'Plantar fasciitis kitne time mein theek hoti hai — realistic answer kya hai?',
      answer: 'Honest jawab ye hai ki yeh depend karta hai stage pe. Acute cases (3 mahine se kam purani) mein proper treatment — rest, stretching, footwear change aur homeopathy ke saath 6-12 hafte mein significant improvement aati hai. Chronic cases (6 mahine se zyada) mein 3-6 mahine ka treatment period realistic hai. Jo log treatment ke baare mein serious hain, triggers avoid karte hain, aur regularly stretching karte hain unme recovery fast hoti hai. Sirf painkillers leke baaki sab ignore karte raho to chronic ban jaata hai aur phir zyada time lagta hai.',
    },
    {
      _key: 'faq4',
      question: 'Kya plantar fasciitis permanently theek ho sakti hai?',
      answer: 'Haan — permanent control bilkul possible hai. 90% se zyada plantar fasciitis cases conservative treatment se hi resolve hote hain — surgery ki naobat bahut kam aati hai. Lekin "permanent" ka matlab hai ki aapko apni lifestyle bhi theek karni hogi. Jo log: (1) sahi footwear consistently use karte hain, (2) calf aur foot stretching routine maintain karte hain, (3) ideal weight maintain karte hain — unhe treatment ke baad relapse bahut rare hota hai. Homeopathy mein khas baat ye hai ki ye underlying sensitivity aur tissue healing address karta hai — jo sirf superficial symptom control se aage ki baat hai.',
    },
    {
      _key: 'faq5',
      question: 'Plantar fasciitis mein kaunsa doctor dikhana chahiye?',
      answer: 'Pehle ek orthopedic specialist ya physiotherapist se diagnosis confirm karwayein — X-ray ya ultrasound se confirm hota hai. Parallel mein ek qualified homoeopath bhi involve kar sakte hain jo constitutional treatment de. Agar heel spur confirmed ho to orthopedic + homoeopath combination best hai. Agar physiotherapy ke saath significant improvement nahi aa rahi — vascular surgeon ya podiatrist se bhi consult kar sakte hain.',
    },
    {
      _key: 'faq6',
      question: 'Kya plantar fasciitis mein exercise karna chahiye ya band kar dein?',
      answer: 'Complete rest actually recommended nahi hai — "smart rest" zaroori hai. Yani: jogging, running, jump rope, high-impact sports — ye temporarily band karein. Lekin swimming, cycling, walking on soft surface — ye continue kar sakte hain. Daily stretching exercises (calf stretch, plantar fascia stretch) toh karna hi hai — ye healing accelerate karta hai. Key rule: agar koi activity karne ke baad dard 24 ghante baad bhi zyada hai to wo activity filhaal avoid karein.',
    },
    {
      _key: 'faq7',
      question: 'Plantar fasciitis ke liye ghar mein kya karein — best home remedies kya hain?',
      answer: 'Ghar mein ye effectively kiya ja sakta hai:\n- Ice massage: 10-15 min thanda water bottle roll karo paon ke neeche — subah aur raat ko\n- Towel stretch: Bistar se uthne se pehle, ek towel paon ki angliyon pe daal ke, dono side se kheechen — 30 seconds, 3 baar\n- Tennis ball massage: Ek tennis ball ko paon ke neeche rakh ke 5 min massage karein — fascia release hoti hai\n- Ghar mein har waqt cushioned slippers pehno — bare feet on hard floor se bachein\n- Warm haldi wala doodh raat ko — internal anti-inflammatory support\nYe measures treatment ke saath saath kiye jaayein — akele kaafi nahi hain.',
    },
    {
      _key: 'faq8',
      question: 'Plantar fasciitis aur normal heel dard mein kya fark hai?',
      answer: 'Fark in 3 points mein samjhein:\n1. Timing: Plantar fasciitis ka dard specifically subah pehle qadam pe ya lambe rest ke baad hota hai. Normal muscle dard constant hota hai.\n2. Location: Plantar fasciitis mein dard heel ke center ya aage ki taraf hota hai — side ya upar nahi.\n3. Behavior: Plantar fasciitis mein thodi walking ke baad dard temporarily improve hota hai — normal arthritis ya bone dard mein aisa nahi hota.\nAgar aapka dard subah most severe hai aur chalne ke baad thoda better hota hai — plantar fasciitis likely hai. Confirmation ke liye doctor se milein.',
    },
    {
      _key: 'faq9',
      question: 'Kya homeopathy se plantar fasciitis mein dard theek hota hai?',
      answer: 'Haan — homeopathy plantar fasciitis mein effective hai, khas tor pe jab treatment individualized ho. Rhus Toxicodendron morning stiffness aur first-motion pain mein, Ruta Graveolens tendon aur ligament involvement mein, aur Calcarea Fluorica chronic spur-associated cases mein particularly documented use hain. CCRH-affiliated musculoskeletal pain study mein homeopathic treatment group mein morning pain aur heel tenderness mein meaningful reduction dekhi gayi. Homeopathy ka extra fayda ye hai ki ye underlying tissue sensitivity bhi address karta hai — yahi reason hai ki treated patients mein relapse kam hote hain.',
    },
    {
      _key: 'faq10',
      question: 'Plantar fasciitis mein konsa footwear sabse best hai?',
      answer: 'Best footwear criteria ye hain:\n- Heel se thoda raised (1-1.5 inch) — flat bilkul nahi\n- Good arch support — paon ka medial arch properly supported ho\n- Cushioned insole — heel area mein extra cushioning\n- Broad toe box — angliyon pe pressure na ho\nRecommended: sports shoes with proper cushioning, specific orthopedic sandals. Avoid: flip flops, completely flat chappals, very high heels (2 inch se zyada), worn-out soles wale purane shoes. Budget option: silicone heel cups jo kisi bhi shoe mein daal sakte hain — pharmacy pe milte hain.',
    },
    {
      _key: 'faq11',
      question: 'Plantar fasciitis mein operation kab zaroori hota hai?',
      answer: 'Surgery ka option sirf tab aata hai jab: 6-12 mahine ka conservative treatment (physiotherapy, medications, injections) fail ho jaaye aur daily life severely hampered ho. Reality ye hai ki 90-95% cases mein surgery ki zaroorat hi nahi padti. Agar aapka doctor surgery recommend kar raha hai 2-3 mahine ke treatment ke baad — second opinion lena samajhdaari hai. Homeopathy + physiotherapy ka combination non-surgical management mein bahut promising hai.',
    },
    {
      _key: 'faq13',
      question: 'Kya flat feet hain to plantar fasciitis hamesha rahegi?',
      answer: 'Nahi — flat feet (pes planus) ek risk factor hai lekin permanent doom nahi. Flat feet mein plantar fascia pe zyada stress padti hai — isliye iska management extra important hai. Custom orthotic insoles (flat feet ke liye specially designed arch support) is problem ko significantly address kar dete hain. Sahi footwear + orthotics + stretching routine + appropriate treatment se flat feet wale bhi complete pain relief pa sakte hain. Ek podiatrist se gait analysis karana helpful hota hai.',
    },
    {
      _key: 'faq14',
      question: 'Plantar fasciitis aur pregnancy mein kya karein?',
      answer: 'Pregnancy mein plantar fasciitis common hai — wajan badhne aur relaxin hormone (jo ligaments loose karta hai) dono ki wajah se. Is time NSAIDs aur steroids avoid karna chahiye. Isliye homeopathy is stage ke liye specially safe aur suitable hai — koi side effects nahi. Saath mein: cushioned footwear, compression socks, leg elevation, aur gentle stretching — ye sab safe hain pregnancy mein bhi. Delivery ke baad weight reduction ke saath condition often improve hoti hai.',
    },
    {
      _key: 'faq15',
      question: 'Subah uthte hi paon mein dard hota hai — kya ye plantar fasciitis hi hai?',
      answer: 'Morning foot pain jo first few steps mein tez hoti hai aur phir better hoti hai — ye plantar fasciitis ka most classic presentation hai. Lekin kuch aur conditions bhi similar symptoms de sakti hain: Achilles tendinitis (heel ke peeche dard), tarsal tunnel syndrome (paon mein numbness bhi hoti hai), ya reactive arthritis. Self-diagnosis se bachein — ek X-ray aur ultrasound se clear picture milti hai. Accurate diagnosis important hai kyunki treatment slightly different hota hai har condition mein.',
    },
    {
      _key: 'faq16',
      question: 'Plantar fasciitis mein kya nahi karna chahiye — sabse common galtiyan kya hain?',
      answer: 'Ye 5 galtiyan most patients karte hain:\n1. Baar baar painkillers leke baaki sab ignore karna — dard band hota hai, healing nahi\n2. Flat chappals ya bare feet ghar mein — "aaram" lagta hai lekin fascia pe load hoti hai\n3. Stretching skip karna — ye sabse important part hai treatment ka\n4. "Theek ho gaya" feeling pe treatment band karna — 2-3 mahine baad relapse\n5. Weight par dhyan nahi dena — har kilo matter karta hai heel pe\nIn galtiyon se bachna — treatment se bhi zyada important hai.',
    },
    {
      _key: 'faq17',
      question: 'Plantar fasciitis mein physiotherapy kaam karti hai kya?',
      answer: 'Haan — physiotherapy plantar fasciitis ke liye evidence-based treatment hai. Khas tor pe:\n- Ultrasound therapy — deep tissue healing accelerate karta hai\n- TENS (electrical stimulation) — pain management\n- Manual therapy aur dry needling — fascia release\n- Customized stretching program\nHomeopathy + physiotherapy ka combination mein most patients ko fastest relief milta hai. Akele ek se better hai combined approach.',
    },
    {
      _key: 'faq18',
      question: 'Bachon mein plantar fasciitis ho sakti hai kya?',
      answer: 'Haan, bachon mein bhi hoti hai — lekin adults se thodi different hoti hai. Bachon mein ek condition hoti hai jise "Sever\'s disease" (calcaneal apophysitis) kehte hain — yeh heel pain jo growing children (8-14 saal, khaaskar boys jo sports karte hain) mein hoti hai — plantar fasciitis se alag hai lekin similar symptoms deta hai. Real plantar fasciitis bacchon mein less common hai. Bachon ke heel pain mein pediatric orthopedic doctor ya homoeopath se milein — adult treatment bacchon pe directly apply nahi karte.',
    },
    {
      _key: 'faq19',
      question: 'Plantar fasciitis mein raat ko dard kyun badh jaata hai?',
      answer: 'Agar raat ko ya rest mein dard badhe to ye slightly atypical presentation hai. Classic plantar fasciitis mein dard rest mein better hota hai. Agar aapka dard raat ko zyada hai to ye: (1) more severe inflammation, (2) spur pressing on nerve, ya (3) koi aur associated condition jaise tarsal tunnel syndrome ho sakta hai. Is case mein doctor se zaroor milein — ek ultrasound ya MRI clear kar dega. Homeopathic medicines mein: Rhus Tox raat ko restlessness se better wale patients ke liye, Bryonia rest-loving patients ke liye.',
    },
    {
      _key: 'faq20',
      question: 'Plantar fasciitis ke liye konsi stretches sabse jaldi kaam karti hain?',
      answer: 'Ye 3 stretches evidence-based hain aur fast results deti hain:\n1. Towel/Strap Stretch (Bistar mein hi, subah uthne se pehle): Towel paon ke ball pe daal ke dono side pull karein — 30 sec, 3 baar. Ye pehle qadam ka dard dramatically kam karta hai.\n2. Calf Stretch against wall: Deewar ke saamne ek paaon peeche rakhein, seedha rakhein, aur deewar ki taraf lean karein. 30 sec hold, 3 baar dono paaon — calf tightness plantar fasciitis ka number 1 contributor hai.\n3. Plantar Fascia Self-Massage: Ek chair pe baith ke, ek paon dusre ghutnon pe rakhein, angliyan peeche ki taraf kheechen aur saath mein thumb se arch ko massage karein — 60 sec.\nYeh teen stretches daily subah karo — 4-6 hafte mein fark dikhega.',
    },
    {
      _key: 'faq21',
      question: 'Plantar fasciitis aur Achilles tendinitis mein kya fark hai?',
      answer: 'Dono paon ke heel area mein hote hain lekin location clearly different hai:\n- Plantar Fasciitis: Dard heel ke neeche ya aage hota hai — paon ke tale ki taraf\n- Achilles Tendinitis: Dard heel ke peeche hota hai — jahan Achilles tendon calf se heel bone se judta hai\nDono ek saath bhi ho sakte hain — kyunki tight calf muscles dono conditions ko contribute karte hain. Treatment mein overlap hai (stretching, rest, footwear) lekin specific exercises alag hain. Ultrasound se accurately differentiate hota hai.',
    },
    {
      _key: 'faq22',
      question: 'Plantar fasciitis mein weight loss karna kitna important hai?',
      answer: 'Bahut important — aur ye underrated solution hai. Chalne mein heel pe body weight ka 1.5 guna pressure aata hai, aur daudne mein 3 guna. Iska matlab: agar aap 10 kg extra weight carry kar rahe hain, to daudne mein paon pe 30 kg extra pressure hai. Studies mein clearly dekha gaya hai ki overweight patients mein plantar fasciitis treatment ka response slower hota hai. Weight loss ke bina sirf medicine lene se long-term results average rehte hain. 5-7% weight loss bhi meaningful difference karta hai heel pain mein.',
    },
    {
      _key: 'faq23',
      question: 'Kya plantar fasciitis yoga ya sports ke baad recover ho sakti hai?',
      answer: 'Yoga plantar fasciitis mein helpful hai — khas tor pe ye asanas:\n- Downward Dog (Adho Mukha Svanasana): Calf aur fascia dono stretch hoti hai\n- Hero Pose (Virasana): Plantar fascia ka direct gentle stretch\n- Legs up the wall (Viparita Karani): Circulation improve karta hai, swelling kam hoti hai\nSports ke baad recovery ke liye: sports immediately nahi, gradual return to activity. Ek test: agar aaj ka exercise agle din dard zyada nahi karta — to wo activity safe hai.',
    },
    {
      _key: 'faq24',
      question: 'Plantar fasciitis mein kab emergency doctor ke paas jaana chahiye?',
      answer: 'Turant doctor ke paas jaayein agar:\n- Sudden severe pain ek specific movement mein aaye — fascia rupture ho sakti hai\n- Heel area mein visible swelling aur redness badhe rapidly\n- Fever ke saath heel mein dard — infection possible\n- Numbness ya tingling paon ya angliyon mein — nerve involvement\n- Dard kaafi weeks mein worse hota ja raha ho — better nahi\n- Diabetes hai aur paon mein koi bhi pain ya change — diabetic foot serious ho sakta hai',
    },
  ],

  sources: [
    { _key: 's1', text: 'CCRH — Clinical Verification Studies in Musculoskeletal Disorders', url: 'https://ccrhindia.nic.in', year: '2018-2022' },
    { _key: 's2', text: 'Indian Journal of Research in Homoeopathy — Plantar Fasciitis & Heel Pain Studies', url: '', year: '2019-2021' },
    { _key: 's3', text: 'American Orthopaedic Foot & Ankle Society (AOFAS) — Plantar Fasciitis Guidelines', url: 'https://www.aofas.org', year: '2023' },
    { _key: 's4', text: 'Mayo Clinic — Plantar Fasciitis: Symptoms, Causes, Treatment', url: 'https://www.mayoclinic.org/diseases-conditions/plantar-fasciitis', year: '2024' },
    { _key: 's5', text: 'Journal of Bone and Joint Surgery — Conservative Management of Plantar Fasciitis: Systematic Review', url: '', year: '2020' },
  ],

  quickFacts: [
    'Plantar Fasciitis duniya ka sabse common heel pain problem hai — lagbhag 10% logo ko kabhi na kabhi hoti hai',
    'India mein 40-60 saal ke adults mein lagbhag 1 mein se 8 logon ko significant heel pain hota hai — khas tor pe standing jobs wale',
    'Acute cases: 6-12 hafte | Chronic cases: 3-6 mahine | Surgery: 5% se kam cases mein zaroorat',
  ],

  doctorNote: 'Clinic mein sabse zyada ek complaint jo miss ho jaati hai — log "edi mein dard" ko aging ya "thakaan" samajh ke ignore karte hain. Jab tak aate hain tab tak chronic ho chuka hota hai. Mera experience ye hai ki jo patients 3-4 mahine mein aate hain aur Ruta ya Rhus Tox pe individually selected treatment lete hain unme surgery ki naobat bahut rare aati hai. Sabse badi cheez jo main emphasize karta hoon: footwear change karo aur daily stretching karo — medicine ke saath — nahi to koi bhi treatment temporary rehta hai.',

  reviewDate: 'April 2026',
}

async function seed() {
  console.log('🌱 Seeding Plantar Fasciitis...')
  const result = await client.createOrReplace(doc)
  console.log('✅ Plantar Fasciitis created/updated:', result._id)
  console.log('🌐 Live at: https://homeopedia.in/diseases/plantar-fasciitis')
}

seed().catch(console.error)
