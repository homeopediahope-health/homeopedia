import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
  useCdn: false,
})

const disease = {
  _id: 'disease-arthritis',
  _type: 'disease',
  title: 'Arthritis',
  hindiName: 'Gathiya / Vaat Rog / Jodon Ka Dard',
  slug: { _type: 'slug', current: 'arthritis' },
  category: 'Joints',
  seoTitle: 'Arthritis Treatment in Hindi | Gathiya Ka Ilaaj | Homeopedia',
  seoDescription: 'Arthritis (Gathiya) ke types, causes, homeopathic treatment aur diet guide — doctor-reviewed, verified Hinglish mein. Jodon ke dard ka ilaaj.',
  heroText: 'Arthritis matlab jodon (joints) mein inflammation (sujan) aur dard — ye koi ek bimari nahi, balki 100 se zyada conditions ka ek group hai. Sabse common hain Osteoarthritis (OA) jisme joint ka cartilage (cushion) ghis jaata hai, aur Rheumatoid Arthritis (RA) jisme body ka immune system apne hi joints pe attack karta hai. India mein lagbhag 18 crore log arthritis se affected hain — aur ye sirf budhape ki bimari nahi hai, young adults aur bacche bhi iske shikaar ho sakte hain. Jodon mein dard, akadpan, aur sujan ye teeno milke daily life mushkil bana dete hain. Sahi treatment, diet, aur lifestyle se in sab pe effective control mumkin hai.',

  quickFacts: {
    whatItIs: 'Jodon mein inflammation aur dard — 100+ conditions ka group; OA, RA aur Gout sabse common types',
    howCommon: 'India mein lagbhag 18 crore log affected; mahilaon mein purushon se 2x zyada',
    treatmentDuration: 'Homeopathic treatment 3-6 mahine — type aur severity ke hisaab se',
  },

  types: [
    {
      _key: 'dt1',
      name: 'Osteoarthritis (OA) — Ghisne Wala Gathiya',
      description: 'Sabse common type. Jab joint ka protective cartilage dheere dheere ghis jaata hai to bones directly ek doosre se ragdati hain. Kise zyada: 45+ umar ke log, overweight log. Kaun se joints: Ghutna, kamar, reedh ki haddi, ungliyan. Khaas baat: Subah ki stiffness 30 minute se kam rehti hai.',
    },
    {
      _key: 'dt2',
      name: 'Rheumatoid Arthritis (RA) — Immune System Ka Arthritis',
      description: 'Ek autoimmune disease — body apni hi joints ki lining pe galti se attack karta hai. Sirf joints nahi, aankhein, lungs aur dil bhi affect ho sakte hain. Kise zyada: 30-60 saal ki women, smokers. Khaas baat: Subah ki stiffness 1 ghante se zyada, thakaan, halka bukhar bhi.',
    },
    {
      _key: 'dt3',
      name: 'Gout — Uric Acid Gathiya',
      description: 'Blood mein uric acid zyada ho jaata hai aur joints mein crystals jam jaate hain — achanak bahut tez dard, aksar raat ko. Kise zyada: Purush, zyada meat/seafood khaane wale, sharab pine wale. Kaun sa joint: Aksar pehla angootha, ankle, ghutna.',
    },
    {
      _key: 'dt4',
      name: 'Psoriatic Arthritis — Chambal Se Juda Gathiya',
      description: 'Jo log psoriasis (chambal) se affected hain, unme se 30% ko ye joint problem bhi hoti hai. Skin aur joints dono mein inflammation. Kaun se joints: Ungliyon ke top joints, reedh ki haddi, dono taraf asymmetric.',
    },
    {
      _key: 'dt5',
      name: 'Ankylosing Spondylitis — Reedh Ka Gathiya',
      description: 'Spine ke joints mein chronic inflammation — aage jhukne mein takleef, kamar ka akadpan. Kise zyada: Young men, 20-40 saal. Khaas baat: Raat ko dard zyada, exercise se thoda aaram milta hai.',
    },
    {
      _key: 'dt6',
      name: 'Juvenile Arthritis — Bacchon Ka Gathiya',
      description: '16 saal se kam umar mein — sabse common JIA (Juvenile Idiopathic Arthritis). Khaas baat: Bacche zyada complain nahi karte, dekhna padta hai limp ya joint swelling ke liye.',
    },
  ],

  causes: [
    'Cartilage ka ghisna — umar ke saath joint cushion dheere dheere khatam hota jaata hai (OA ka main reason)',
    'Immune system malfunction — body apne hi joint tissues ko "dushman" samajhke attack karna shuru karta hai (RA, Psoriatic)',
    'Uric acid crystal deposit — blood mein uric acid high hone se crystals joints mein jam jaate hain (Gout)',
    'Genetics / Family history — kuch arthritis types hereditary hote hain; family mein ho to risk zyada',
    'Joint injury ya overuse — purani chot, sports injury, ya ek hi kaam baar baar karne se cartilage damage',
    'Hormonal changes — women mein menopause ke baad estrogen kamne se OA risk badh jaata hai',
    'Infections — kuch bacterial/viral infections (e.g., reactive arthritis) joint inflammation trigger kar sakte hain',
  ],

  riskFactors: [
    'Umar 45+ — OA ka risk har decade ke saath badhta hai',
    'Mahilayein — RA aur OA dono mein women zyada affected',
    'Motapa / Overweight — har 1 kg extra weight se ghutne pe 4 kg extra pressure',
    'Family history — parents ko gathiya tha to aapko bhi risk zyada',
    'Pehle koi joint injury — sports ya accident se joints damage; future OA risk',
    'Purana smoking habit — RA ka risk smokers mein 2x zyada',
    'Sedentary lifestyle — exercise na karna; muscles kamzor, joints unstable',
    'Certain occupations — construction, farming, heavy lifting; joints pe zyada stress',
  ],

  complications: [
    'Joint deformity — RA mein treat na hone pe joints permanently bend ya twist ho jaate hain',
    'Permanent disability — ghutne ya kamar ka OA untreated rehne pe normal chalna-phirna impossible',
    'Cardiovascular risk — RA patients mein heart disease ka risk significantly zyada hota hai',
    'Osteoporosis — chronic inflammation se bones kamzor hoti hain; fracture risk badh jaata hai',
    'Mental health impact — chronic dard se anxiety aur depression',
    'Social isolation — uthna-baithna, bahar jaana mushkil hone se log ghar mein band ho jaate hain',
  ],

  symptoms: [
    {
      _key: 'sg1',
      category: 'Joint Ke Direct Signs (Sabse Common Complaints)',
      items: [
        'Jodon mein dard — chalte, baithe, uthte waqt (aksar ghutne, kamar, haath)',
        'Subah ki akadpan (morning stiffness) — uthne ke baad 15 min se lekar 1-2 ghante tak',
        'Joint mein sujan aur garam hona — chhune pe dard, kuch arthritis mein laalapan bhi',
        'Joint movement mein takleef — poora moda nahi jaata, "locking" feel hoti hai',
        'Jodon mein crackling/grinding awaaz — chalte waqt "khar khar" sound',
      ],
    },
    {
      _key: 'sg2',
      category: 'General Body Symptoms (RA aur Gout Mein Zyada)',
      items: [
        'Thakaan aur kamzori — chhoti si activity pe bahut thak jaana',
        'Halka bukhar (low-grade fever) — RA mein immune system overactive hone se',
        'Bhook na lagna, wazn girna — RA mein systemic inflammation ka effect',
        'Subah uthne pe poori body mein stiffness — sirf joints nahi, puri body stiff',
      ],
    },
    {
      _key: 'sg3',
      category: 'Gout-Specific Symptoms (Suddenly Aate Hain)',
      items: [
        'Raat ko achanak tez dard — bina kisi warning ke, aksar angoothe mein',
        'Joint ka laal, garam, aur sujna — chhune pe bhi dard',
        'Dard 24-48 ghante mein peak pe — phir dheere dheere kam hota hai',
      ],
    },
  ],

  ccrhEvidence: {
    summary: 'Homeopathy arthritis mein ek individualized approach follow karta hai — sirf joint nahi, poori body aur mind ko dekhta hai. Aapka dard kab zyada hota hai, kaisi sujan hai, saath mein kya aur hota hai — ye sab milke medicine decide karta hai. Ye approach sirf pain relief nahi deta, inflammation reduce karta hai aur joints ke aage ghisne ki process ko slow karne mein madad karta hai.',
    keyFindings: [
      'Osteoarthritis patients mein VAS (pain scale) score mein clinically significant reduction — 6.8 se ghata 3.2 (placebo mein 6.7 se 5.9)',
      'WOMAC (joint function) score mein treatment group mein placebo se 40% better improvement',
      'RA patients mein morning stiffness duration aur DAS-28 score dono mein meaningful reduction',
      'Side effects practically nil — elderly patients ke liye especially safe',
    ],
    citation: 'Indian Journal of Research in Homeopathy — Arthritis Studies | 2014, 2019 | CCRH, Ministry of AYUSH | ccrhindia.nic.in',
    averageTreatmentPeriod: '3-6 mahine (type aur severity ke hisaab se)',
  },

  medicines: [
    {
      _key: 'med1',
      name: 'Rhus Toxicodendron',
      bestFor: 'Jinhe rest mein dard zyada hota hai, hilne-dulne se thoda aaram milta hai, sardi/nami mein takleef badhti hai',
      keyIndications: [

        'Ye medicine "restlessness with relief from motion" ke pattern pe kaam karti hai — arthritis ka yahi typical pattern hai. Subah ki akadpan aur nami se badhne wale dard mein khaas taur pe helpful.',

      ],
    },
    {
      _key: 'med2',
      name: 'Bryonia Alba',
      bestFor: 'Jinhe hilne-dulne se dard bilkul badh jaata hai, aur rest mein aaram milta hai — bilkul Rhus Tox ka ulta',
      keyIndications: [

        'Joints mein stitching, tearing type ka dard, sujan ke saath — chhote se movement pe bhi tez dard. Ye medicine acute inflammatory phase mein especially effective hai.',

      ],
    },
    {
      _key: 'med3',
      name: 'Calcarea Carbonica',
      bestFor: 'Overweight, thoda slow aur thaki hui tabiyat wale log, jinhe nami aur thandi hawa bardaasht nahi hoti, ghutne ke OA mein',
      keyIndications: [

        'Constitutional medicine hai — sirf joints nahi, overall metabolism aur body weight bhi address karta hai. OA mein cartilage ghisne ki process pe slow-down effect.',

      ],
    },
    {
      _key: 'med4',
      name: 'Colchicum Autumnale',
      bestFor: 'Gout patients — aksar angoothe ya ankle mein achanak tez dard, chhone se bhi dard, thoda sa hilne pe bhi takleef',
      keyIndications: [

        'Gout ke acute attacks mein uric acid crystal deposition se hone wale dard ke liye classic homeopathic medicine. Attack ki frequency aur intensity dono pe kaam.',

      ],
    },
    {
      _key: 'med5',
      name: 'Actaea Spicata',
      bestFor: 'Chote joints — haath ki ungliyan, kalaai ka arthritis, thakaan se dard badhna, thodi si activity pe sujan',
      keyIndications: [

        'Small joints ke arthritis mein, especially haath ki ungliyon ki deformity rokne mein aur sujan kam karne mein.',

      ],
    },
    {
      _key: 'med6',
      name: 'Causticum',
      bestFor: 'Reedh ka arthritis (Ankylosing Spondylitis), chronic cases jisme joints stiff aur contracted ho chuki hoon, muscles aur tendons mein tightness',
      keyIndications: [

        'Chronic, long-standing joint stiffness aur contractures mein helpful — joint flexibility gradually improve hone ke chances.',

      ],
    },
  ],

  dietInclude: [
    {
      _key: 'di1',
      category: 'Anti-Inflammatory Foods',
      emoji: '🌿',
      items: [
        'Haldi (Turmeric) — curcumin se bharpoor, joint inflammation directly kam karta hai; roz raat ko haldi wala doodh piyein',
        'Adrak (Ginger) — gingerol compound arthritis pain aur swelling dono pe kaam karta hai; chai mein dalein ya raw chaba ke',
        'Lehsun (Garlic) — allicin compound immune response regulate karta hai — RA ke liye khaas useful',
        'Methi dana — joints ko lubricate karta hai, anti-inflammatory properties hain; roz subah bheega hua khaayein',
      ],
    },
    {
      _key: 'di2',
      category: 'Omega-3 Rich Foods',
      emoji: '🐟',
      items: [
        'Akhrot (Walnuts) — plant-based omega-3 se bharpoor, joint inflammation reduce karta hai',
        'Alsi ke beej (Flaxseeds) — omega-3 ALA + lignans — RA mein immune modulation mein helpful',
        'Machli (Fish — especially Rohu, Surmai) — omega-3 fatty acids joint stiffness kam karte hain',
      ],
    },
    {
      _key: 'di3',
      category: 'Bone & Joint Strengthening Foods',
      emoji: '🥛',
      items: [
        'Dahi (Curd/Yogurt) — calcium + probiotics — gut health se joint inflammation ka connection hai',
        'Til (Sesame seeds) — calcium aur magnesium dono — bones ko strong rakhta hai',
        'Palak, methi, saag — vitamin K + calcium — bone density maintain karta hai',
        'Santra, amla, nimbu — Vitamin C se collagen banta hai — cartilage repair mein helpful',
      ],
    },
    {
      _key: 'di4',
      category: 'Hydration & Detox',
      emoji: '💧',
      items: [
        'Paani — minimum 8-10 glass/din — joints ke synovial fluid ke liye zaroori',
        'Nariyal paani — electrolytes + anti-inflammatory, uric acid flush karta hai (Gout mein khaas)',
        'Green tea — antioxidants jo joint inflammation slow karte hain',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'High Uric Acid Foods (Gout Mein Extra Avoid)',
      emoji: '🚫',
      items: [
        'Red meat (mutton, beef) — purines se uric acid banta hai — gout attacks trigger karta hai',
        'Seafood (prawns, crab) — high purines — uric acid spike karta hai',
        'Organ meats (kidney, liver) — purines ka concentrated source — strictly avoid',
        'Alcohol (especially beer) — uric acid production increase + kidney excretion block karta hai',
      ],
    },
    {
      _key: 'da2',
      category: 'Inflammatory Foods',
      emoji: '❌',
      items: [
        'Maida aur processed foods (biscuits, bread, noodles) — refined carbs inflammation badhaate hain',
        'Fried foods, pakode, samose — trans fats joint inflammation ko trigger karte hain',
        'Sugar aur meetha (cola, mithai, juices) — high sugar = inflammation markers increase',
        'Processed/packed snacks — sodium zyada + preservatives — joint swelling badhaate hain',
      ],
    },
    {
      _key: 'da3',
      category: 'Aur Kya Bachein',
      emoji: '⚠️',
      items: [
        'Cold drinks / Soda — phosphoric acid bone density kam karta hai',
        'Urad, masoor dal excess mein — high purines — gout patients especially avoid karein',
        'Bahut zyada namak — sodium water retention aur inflammation ko worsen karta hai',
        'Tomato (tamatar) — kuch arthritis patients mein nightshade vegetables pain badha sakti hain — observe karein',
      ],
    },
  ],

  dos: [
    'Roz halki exercise karein (swimming, walking, yoga) — joints ka movement zaroori hai; muscles strong hoti hain jo joints ko support karti hain',
    'Weight control karein — har 1 kg wazn kam karne se ghutne pe 4 kg ka pressure kam hota hai; ye sabse powerful arthritis management tool hai',
    'Warm compress use karein OA/chronic stiffness mein — blood flow improve hota hai, subah ki akadpan kam hoti hai',
    'Physiotherapy ya joint exercise regularity se karein — guided movements se joint range of motion maintain hoti hai',
    'Sahi posture maintain karo — baithe waqt, uthte waqt, seedhe chalte waqt — spinal aur knee arthritis mein posture key hai',
    'Homeopathic treatment consistent rakho — 3-6 mahine continuous treatment results dikhata hai; beech mein mat chodo',
    'Uric acid check karwao agar Gout suspect ho — blood test se confirm hota hai, treatment plan change hota hai',
  ],

  donts: [
    'Pahalwan wali exercise ya high-impact workout mat karo — running, jumping joints pe shock dete hain aur damage fast karte hain',
    'Dard mein bhi exercise mat band karo poori tarah — complete rest se muscles atrophy hoti hain, joints aur kamzor hote hain',
    'Self-medication se painkillers roz mat khaao — NSAIDs long-term lene se kidney, stomach seriously damage hoti hai',
    'Overweight rehne do mat — ye ek bhi point follow karo to joints pe pressure immediate kam hoga',
    'Sardi/thandi ke season mein joints cover karna mat bhoolo — temperature drop directly joint stiffness aur dard badhaata hai',
    'Ek hi position mein ghante bhar mat baitho ya khade raho — regularly position change karo — stiffness badh jaati hai',
    'Diagnosis ke bina type assume mat karo — OA, RA, Gout ka treatment alag hota hai; doctor se confirm karo',
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Q1. Arthritis aur normal joint pain mein kya fark hai? Kaise pata chalega?',
      answer: 'Normal joint pain usually kisi chot, thakaan, ya zyada kaam ke baad hota hai — aur 2-3 din mein apne aap theek ho jaata hai. Arthritis mein dard 6 hafte se zyada rehta hai, subah uthte hi akadpan hoti hai, aur kai baar sujan bhi hoti hai. Agar aapka joint dard persistent hai aur daily kaam mein problem ho rahi hai — chalte waqt takleef, seedhiyan chadna mushkil, ya haath se kaam nahi hota — to ye arthritis ke signs ho sakte hain. Blood tests (RA factor, CRP, uric acid) aur X-ray se confirm ho sakta hai.',
    },
    {
      _key: 'faq2',
      question: 'Q2. Gathiya (Arthritis) permanently theek ho sakti hai?',
      answer: 'Arthritis ka permanent control bilkul possible hai. Sahi treatment, diet, aur lifestyle se zyada log aise point pe pahunch jaate hain jahan months tak koi dard ya attack nahi aata aur life practically normal hoti hai. OA mein cartilage jo ghis chuka hai wo wapas nahi aata — lekin aage ghisne ki speed slow ki ja sakti hai aur quality of life significantly improve hoti hai. RA mein homeopathy se remission possible hai. Gout mein uric acid control karke attacks rokna genuinely possible hai.',
    },
    {
      _key: 'faq3',
      question: 'Q3. Arthritis ki best homeopathic medicine kaun si hai?',
      answer: 'Arthritis mein koi ek "best" medicine nahi hoti — homeopathy mein medicine aapki individual symptoms ke hisaab se choose hoti hai. Rhus Toxicodendron unke liye jinhein hilne-dulne se aaram milta hai; Bryonia unke liye jinhe rest mein aaram aur movement se dard badhta hai; Colchicum Gout ke acute attacks ke liye; Calcarea Carbonica overweight aur thaki hui constitution ke liye. Ek qualified homoeopath aapka poora case dekh ke — aapka dard kaisa hai, kab badhta hai, saath mein aur kya hota hai — ye sab consider karke medicine decide karta hai.',
    },
    {
      _key: 'faq4',
      question: 'Q4. Kya arthritis mein exercise karni chahiye ya nahi?',
      answer: 'Haan — exercise arthritis mein absolutely zaroor karni chahiye, lekin sahi type ki. Hamare yahan aam galti ye hoti hai ki dard mein log bilkul exercise band kar dete hain — ye joint ko aur weak karta hai. Swimming sabse safe aur effective hai — joints pe zero pressure. Cycling (stationary), yoga, aur brisk walking bhi achhe options hain. High-impact exercise (running, jumping, heavy weight lifting) avoid karni hai. Golden rule: "Move without pain" — agar koi movement dard badhe to wo specifically skip karo. Roz 30-40 minute ka low-impact exercise arthritis mein pain, stiffness, aur mobility teeno pe positive effect deta hai.',
    },
    {
      _key: 'faq5',
      question: 'Q5. Arthritis mein kya khana chahiye aur kya nahi?',
      answer: 'Arthritis mein anti-inflammatory diet focus karo. Khaao: haldi, adrak, lehsun (daily), akhrot, alsi ke beej, machli (omega-3), saag-sabzi, aur khub paani. Gout mein specially avoid karein: red meat, seafood, beer/alcohol — ye uric acid directly badhate hain. Sab mein avoid karein: maida, fried foods, cola, excessive sugar, aur zyada namak — ye inflammation badhaate hain. Haldi wala doodh raat ko aur methi dana subah bheega hua khaana — ye do Indian habits arthritis ke liye genuinely helpful hain.',
    },
    {
      _key: 'faq6',
      question: 'Q6. Kya homeopathy rheumatoid arthritis (RA) mein kaam karta hai?',
      answer: 'Haan — homeopathy RA mein ek effective approach hai, especially long-term management ke liye. CCRH-affiliated research mein RA patients mein morning stiffness duration aur joint tenderness score dono mein meaningful improvement dekhi gayi placebo ke comparison mein. Homeopathy ka khaas fayda ye hai ki RA sirf joints ki nahi, full-body immune system ki bimari hai — aur homeopathy ye poori picture dekhke treat karta hai. Severe RA flares mein conventional medicines ke saath saath homeopathy lena better results deta hai.',
    },
    {
      _key: 'faq7',
      question: 'Q7. Ghutne ke arthritis ka ilaaj kya hai? Surgery ke bina theek ho sakta hai?',
      answer: 'Ghutne ka OA (knee arthritis) surgery ke bina manage karna bahut haad tak possible hai. Effective non-surgical approach: (1) Wazn kam karo — har 1 kg se 4 kg knee pressure reduce hota hai. (2) Physiotherapy — quad-strengthening exercises joint support improve karte hain. (3) Homeopathic treatment — dard aur inflammation dono pe. (4) Knee support use karo. (5) Swimming ya cycling roz karo. Surgery (knee replacement) tab consider kiya jaata hai jab arthritis "bone on bone" stage pe aa jaaye aur walking impossible ho — ye stage saalon mein aati hai, months mein nahi.',
    },
    {
      _key: 'faq8',
      question: 'Q8. Uric acid zyada hone pe kya karein? Gout ka ilaaj kya hai?',
      answer: 'Gout ka ilaaj do levels pe hota hai — acute attack manage karna aur long-term uric acid control. Acute attack mein: Colchicum (homeopathic), cold compress, aur complete rest affected joint ko. Long-term: Uric acid badhane wali cheezein band karein — red meat, seafood, beer, organ meats. Roz khub paani piyo (3-4 litre) — uric acid flush out hota hai. Nariyal paani aur cherry juice uric acid reduce karne mein natural help karte hain. Blood mein uric acid 6 mg/dL se neeche rakho — iske liye 3-6 mahine ka consistent treatment chahiye.',
    },
    {
      _key: 'faq9',
      question: 'Q9. Arthritis mein subah ki akadpan (morning stiffness) kaise kam karein?',
      answer: 'Morning stiffness arthritis ki most common complaint hai. Sone se pehle: affected joints pe warm compress lagao. Uthne ke baad: Seedhe mat uthho — pehle bistar mein hi 5 minute gentle ankle rotation, knee bend, wrist rotation karo. Khade hone ke baad: Warm pani se naho ya shower lo — heat se joints quickly loosen hoti hain. Haldi-adrak ka paani ya chai piyo. OA mein morning stiffness 15-30 minute rehti hai, RA mein 1 ghante se zyada — agar aapki 1 ghante se zyada rehti hai to RA check karwao.',
    },
    {
      _key: 'faq10',
      question: 'Q10. Kya bacchon ko bhi arthritis ho sakti hai?',
      answer: 'Haan — Juvenile Idiopathic Arthritis (JIA) naam ki condition 16 saal se kam umar ke bacchon mein hoti hai. India mein iske cases miss hote hain kyunki parents aur doctors dono isko "growing pains" ya vitamin deficiency samajh lete hain. Red flags: ek ya zyada joint mein baar baar sujan jo khud se kam nahi hoti, subah ki akadpan, bachcha joint pe weight daalne se inkaar kare ya limp kare, aankhon mein bina reason laalapan. JIA early treat hone pe outcomes bahut acche hote hain.',
    },
    {
      _key: 'faq11',
      question: 'Q11. Arthritis aur physiotherapy — kya sach mein kaam karta hai?',
      answer: 'Physiotherapy arthritis management ka ek scientifically proven part hai — sirf optional nahi. Sahi exercises se muscles strong hoti hain jo joints ko support karti hain, joint range of motion maintain rehti hai, aur pain gradually reduce hota hai. TENS therapy, ultrasound therapy, aur specific joint mobilization techniques — professionally done physiotherapy mein ye sab hota hai. Ek certified physiotherapist se pehle guide karwao — galat exercise karna joint damage badha sakta hai. Physiotherapy + homeopathy combination arthritis mein bahut effective paaya jaata hai.',
    },
    {
      _key: 'faq12',
      question: 'Q12. Arthritis test kaun se karwaane chahiye?',
      answer: 'Arthritis type confirm karne ke liye ye tests important hain: Blood tests — RA Factor, Anti-CCP (RA ke liye), CRP aur ESR (inflammation markers), Uric Acid (Gout ke liye), ANA (autoimmune ke liye). Imaging — X-ray: cartilage aur bone damage dekhta hai; MRI: soft tissue, early damage dekhta hai. Synovial fluid test — joint se fluid nikaalna: crystal deposits aur infection rule out karna. Sab tests ek saath nahi chahiye — doctor symptoms dekhke relevant tests suggest karta hai.',
    },
    {
      _key: 'faq13',
      question: 'Q13. Arthritis mein pregnancy safe hai? Kya treatment continue kar sakte hain?',
      answer: 'Pregnancy mein arthritis management carefully karna padta hai. RA mein ek interesting phenomenon hota hai — kuch women ko pregnancy mein natural "remission" milti hai hormonal changes se, lekin delivery ke baad flare aa sakta hai. OA pregnancy mein weight badhne se worse ho sakti hai — especially knees aur back. Homeopathic medicines pregnancy mein generally safe hoti hain — sirf qualified homoeopath ki guidance mein. Conventional RA medicines mein se kai pregnancy mein safe nahi hoti — doctor se necessarily discuss karo.',
    },
    {
      _key: 'faq14',
      question: 'Q14. Gathiya mein yoga kaun sa karna chahiye?',
      answer: 'Yoga arthritis ke liye ek excellent low-impact option hai. Best poses: Tadasana (Mountain pose), Virabhadrasana (Warrior — hip aur knee strength), Setu Bandhasana (Bridge — lower back aur hip), Balasana (Child\'s pose — gentle back stretch), Trikonasana (Triangle — overall joint mobility). Kya avoid karein: Padmasana — aggressive knee bend; headstands ya any inverted pose agar cervical arthritis ho. Important: Yoga ek certified instructor ke saath shuru karo jo arthritis ke baare mein jaanta ho — pain mein force mat karo.',
    },
    {
      _key: 'faq15',
      question: 'Q15. Kya arthritis mein chai peena theek hai?',
      answer: 'Regular chai (adrak-elaichi wali) arthritis mein mostly OK hai — aur adrak hone se anti-inflammatory bhi hoti hai. Lekin zyada chai peene se calcium absorption mein interference hoti hai — din mein 2-3 cup tak theek hai. Green tea arthritis ke liye actually beneficial hai — EGCG compound inflammation reduce karta hai. Simple tip: Ek cup chai mein half inch fresh adrak daal dein — taste bhi accha, anti-inflammatory benefit bhi milegi.',
    },
    {
      _key: 'faq16',
      question: 'Q16. Arthritis mein weight loss kyun zaroori hai? Kitna farak padta hai?',
      answer: 'Weight loss arthritis management ka sabse underrated lekin effective tool hai. Research clearly dikhaata hai: Har 1 kg body weight kam karne se ghutne ke joints pe 4 kg pressure reduce hota hai. Yani sirf 5 kg wazn kam karo — knee arthritis mein 20 kg ka load chhoot jaata hai. Is single change se: Dard significantly reduce hota hai, medicines ki zaroorat kam ho sakti hai, physiotherapy better kaam karti hai, aur surgery ki naubat rok sakte ho. Realistic target: 3-6 mahine mein 5-10% body weight.',
    },
    {
      _key: 'faq17',
      question: 'Q17. Arthritis aur osteoporosis mein kya fark hai?',
      answer: 'Dono alag conditions hain lekin saath aa sakti hain. Arthritis = joints ki bimari (cartilage, synovium affected, dard + sujan hoti hai). Osteoporosis = bones ki bimari (bone density kam hoti hai, bones brittle ho jaati hain, aksar koi symptoms nahi hote jab tak fracture na ho). Arthritis patients ko osteoporosis ka risk zyada hota hai — chronic inflammation bones kamzor karti hai. DEXA scan se bone density check hoti hai. Dono ek saath manage karna padta hai.',
    },
    {
      _key: 'faq18',
      question: 'Q18. Kya herbal/desi ilaaj arthritis mein kaam karte hain?',
      answer: 'Kuch Indian herbs arthritis mein scientifically studied hain aur helpful paaye gaye hain. Evidence-supported options: Haldi (curcumin) — multiple studies mein anti-inflammatory effect confirmed; Adrak (ginger) — pain aur stiffness dono pe positive data; Shallaki / Boswellia — CCRH studies mein OA mein meaningful results; Ashwagandha — RA mein immune modulation pe research. Honest baat: Ye adjuncts hain, standalone treatment nahi. Best approach: Herbal remedies + homeopathic treatment + lifestyle changes — combination approach effective hai.',
    },
    {
      _key: 'faq19',
      question: 'Q19. Arthritis mein swimming kyun best exercise hai?',
      answer: 'Swimming arthritis ke liye gold standard exercise hai. Paani mein body ka weight 90% kam hota hai — yani joints pe practically zero impact. Lekin muscles full resistance mein kaam karti hain — strength building hoti hai bina joint stress ke. Warm water pool (28-30°C) ho to aur bhi better — joint stiffness kam hoti hai. Har arthritis type ke liye suitable: ghutne ka OA, kamar ka arthritis, RA, reedh ka arthritis — sab mein safe. Alternative: Stationary cycling bhi second best option hai. Haftey mein 3-4 baar 30 minute karo.',
    },
    {
      _key: 'faq20',
      question: 'Q20. Arthritis ki wajah se neend nahi aati — kya karein?',
      answer: 'Arthritis mein sleep problems bahut common hain — chronic dard neend todta hai, aur neend ki kami pain sensitivity badhaati hai (vicious cycle). Ye kaam karte hain: Joint-friendly mattress use karein. Affected joint ko comfortable position dein — ghutne ke neeche pillow rakho. Sone se pehle warm bath ya shower — joint pain kam karta hai. Haldi wala doodh sone se 30 min pehle. Bedroom ka temperature comfortable rakho. Agar neend consistently nahi aa rahi to doctor ko zaroor batao — ye treated honi chahiye.',
    },
    {
      _key: 'faq21',
      question: 'Q21. Arthritis mein kaunsa oil massage best hai?',
      answer: 'Oil massage arthritis mein relief deta hai — lekin technique aur oil dono matter karte hain. Best oils: Til ka tel (Sesame oil) warm karke — traditional Ayurvedic choice, joint circulation improve karta hai. Nariyal tel mein haldi + camphor powder mix karke — anti-inflammatory combination. Castor oil — ricinoleic acid mein anti-inflammatory properties hain, warm karke lagao. Technique: Gentle circular massage — ghisna mat, dard mein bhi pressure nahi. Kab nahi: Acute swelling aur garam joint mein massage mat karo.',
    },
    {
      _key: 'faq22',
      question: 'Q22. Monsoon mein arthritis zyada kyun badh jaata hai?',
      answer: 'Barsat ke mausam mein arthritis patients ko zyada takleef hoti hai — scientific wajah hai. Barometric pressure change hone se joint tissue expand aur contract karta hai — nerve endings pe pressure padta hai aur dard badhta hai. Humidity bhi joint stiffness contribute karti hai. Kya karein monsoon mein: Ghar ko dry rakho. Geele kapde aur joote turant badlo. Anti-inflammatory diet mein haldi, adrak aur zyada lo. Indoor exercise prefer karo. Proactive: Monsoon aane se ek mahine pehle checkup plan karo aur treatment optimized karo.',
    },
    {
      _key: 'faq23',
      question: 'Q23. Arthritis patients ke liye sardi ka mausam manage kaise karein?',
      answer: 'Sardi arthritis patients ke liye sabse challenging season hota hai. Cold temperature synovial fluid thick karta hai, blood circulation slow hoti hai, muscles stiffen karte hain. Effective winter protocol: Subah uthte hi bistar mein 5 minute gentle joint exercises. Affected joints pe woolen support raat ko bhi rakho. Warm pani se nahaao. Haldi-adrak tea daily. Ghar ka temperature constant rakho. Outdoor activity agar karni ho to sab se warm time chunno — 11 AM se 2 PM ke beech. Winter mein homeopathic treatment ke results sometimes better hote hain consistent treatment se.',
    },
    {
      _key: 'faq24',
      question: 'Q24. Kya stress se arthritis badh sakta hai?',
      answer: 'Haan — stress aur arthritis ka direct biological connection hai. RA mein khaas taur pe: stress hormones immune system ko further dysregulate karte hain — flares stress periods mein more common hote hain. OA mein: Stress se pain perception badh jaati hai — same dard zyada feel hota hai stressed state mein. Kuch patients mein life stress ke baad first arthritis episode aata hai ya existing condition suddenly worse hoti hai. Kya karein: Meditation ya pranayama roz — 10 minute bhi enough. Homeopathy ka advantage: Stress, anxiety, aur physical symptoms teeno ko address karta hai.',
    },
    {
      _key: 'faq25',
      question: 'Q25. Arthritis ke liye doctor kab dikhana bilkul zaroori hai?',
      answer: 'Ye signs ho to doctor se milna immediately zaroor hai: Joint mein achanak bahut tez sujan, laalapan, aur garmahat — infectious arthritis ho sakta hai, urgent treatment chahiye. Bukhar ke saath joint dard — infection ya RA flare serious ho sakta hai. Reedh ka dard jo raat ko zyada hota hai aur exercise se thoda theek hota hai — Ankylosing Spondylitis possible. Aankhon mein bina reason laalapan ya dard — RA aur juvenile arthritis mein eye involvement. Chest mein dard ya breathlessness arthritis patient mein — RA cardiac complications rule out karna zaroori. 6 hafte ya zyada se persistent joint dard — basic assessment zaroor karwao.',
    },
  ],

  sources: [
    { _key: 's1', name: 'Council for Scientific & Industrial Research in Homeopathy (CCRH) | 2014, 2019 | ccrhindia.nic.in' },
    { _key: 's2', name: 'Indian Journal of Research in Homeopathy — Arthritis Studies | 2014' },
    { _key: 's3', name: 'WHO Global Report on Arthritis | 2023' },
    { _key: 's4', name: 'American College of Rheumatology (ACR) — Arthritis Guidelines | 2022' },
    { _key: 's5', name: 'Lancet GBD Study — India musculoskeletal burden | 2019' },
    { _key: 's6', name: 'AIIMS Clinical Data on Osteoarthritis in India | 2020' },
    { _key: 's7', name: 'PubMed — Curcumin and Arthritis meta-analysis | 2021' },
  ],
}

async function seed() {
  console.log('🌱 Seeding Arthritis...')
  await client.createOrReplace(disease)
  console.log('✅ Arthritis created/updated: disease-arthritis')
  console.log('🌐 Live at: https://homeopedia.in/diseases/arthritis')
}

seed().catch(console.error)
