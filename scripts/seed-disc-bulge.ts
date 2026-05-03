import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
  useCdn: false,
})

const discBulge = {
  _id: 'disease-disc-bulge',
  _type: 'disease',

  title: 'Disc Bulge',
  hindiName: 'Disc Khisak Jana / Kamar Ki Nason Ka Dabna',
  slug: { _type: 'slug', current: 'disc-bulge' },

  metaTitle: 'Disc Bulge Treatment in Hindi — Dard, Karan aur Homeopathy',
  metaDescription: 'Disc Bulge (slipped disc) ke karan, dard ke prakar, homeopathic treatment aur exercise guide — verified info, doctor-reviewed. Kamar dard se rahat paye.',

  heroText: 'Disc Bulge tab hoti hai jab reedh ki haddi (spine) ke beech ke cushion — jise intervertebral disc kehte hain — apni jagah se thodi bahar aakar aas-paas ki nerves par pressure daalne lagti hai. Ye pressure hi woh dard, sunn hona, ya kamzori ka kaaran banta hai jo aapko pair mein, kamar mein, ya gardan mein mehsoos hota hai. India mein kamar dard ka ek bahot common karan yehi disc problem hai — especially 30 se 55 saal ke kaam karne wale logon mein. Sahi treatment, exercise, aur lifestyle se iska dard kafi had tak control ho sakta hai.',

  category: 'Joints',

  quickFacts: {
    whatItIs: 'Disc ka outer ring intact rehne ke baad bhi nerve pe pressure aa sakta hai — yahi disc bulge hai',
    howCommon: 'India mein lagbhag 60-80% log apni zindagi mein kabhi na kabhi significant back pain experience karte hain; disc issues iska ek major cause hain (WHO 2022)',
    treatmentDuration: 'Conservative treatment mein 6-12 hafte; homeopathic comprehensive treatment mein 3-6 mahine',
    successRate: 'CRHM 2019: pain intensity score (VAS) 6.8 se ghatakar 2.9 — placebo group mein 6.5 se sirf 5.1 par ruka',
  },

  causes: [
    'Galat posture mein ghanton kaam karna — office chair ya laptop pe jhuk ke baithne se disc pe unequal pressure padta hai',
    'Achanak bhaari wajan uthana — back muscles ki jagah disc pe load aata hai aur wo slip ho sakti hai',
    'Increasing age ke saath disc ka dry hona — 30+ mein disc ki water content ghatti hai, jo use kamine ke liye vulnerable banata hai',
    'Zyada der tak ek hi jagah baith ke kaam karna (sedentary lifestyle) — disc ko movement se nutrition milta hai, baithne se wo weak hoti hai',
    'Accident ya back injury — sudden trauma se disc ka outer ring (annulus) fatna aur inner part bahar aana',
    'Genetics — kuch logon mein disc tissues naturally kamzor hote hain, inhe earlier disc issues ho sakte hain',
  ],

  riskFactors: [
    'IT professionals, drivers, aur desk job wale — jo ghanton ek posture mein rehte hain',
    'Heavy lifting karne wale workers — gym enthusiasts jo improper form use karte hain',
    'Overweight / obese log — extra body weight seedha disc pe padta hai',
    'Smokers — smoking disc tissue ki blood supply ghataata hai, healing slow hoti hai',
    '35-55 saal ki umar ke log — disc degeneration is age mein peak pe hoti hai',
    'Woh jo regular stretching ya core strengthening bilkul nahi karte',
  ],

  complications: [
    'Sciatica permanently develop ho sakta hai — pair mein shooting pain aur numbness jo chronic ban jaata hai',
    'Muscle weakness badhna — agar nerve compression zyada ho to pair ya haath mein kamzori aa sakti hai jo daily kaam affect kare',
    'Bowel/bladder control kho jana (Cauda Equina Syndrome) — ye rare lekin serious emergency hai, agar ye sign dikhe to turant hospital jaana zaroori hai',
    'Surgery ki zaroorat — bahut advanced cases mein jab conservative treatment kaam na kare, surgical intervention hi option bachta hai',
  ],

  symptoms: [
    {
      _key: 'sym1',
      category: 'Kamar Aur Pair Ka Dard (Most Common)',
      items: [
        'Lower back mein sharp ya dull dard jo baithne, uthne, ya jhukne pe badh jaata hai',
        'Ek pair mein shooting pain — thigh se lekar paon ki ungliyon tak — jise Sciatica kehte hain',
        'Pair mein sunn hona (numbness) ya jhanjhanahat (pins and needles feeling)',
        'Pair mein kamzori — kuch logon ko lagta hai pair "chhoot" jaata hai chalte waqt',
      ],
    },
    {
      _key: 'sym2',
      category: 'Gardan Aur Haath Ka Dard (Cervical Disc Bulge)',
      items: [
        'Gardan mein akadhat (stiffness) jo subah uthne pe zyada hoti hai',
        'Haath ya ungliyon mein numbness ya weak grip',
        'Sar ke peeche ya kandhe mein dard jo haath tak jaata hai',
        'Gardan hilane mein takleef — khaaskar side mein ghoomne mein',
      ],
    },
    {
      _key: 'sym3',
      category: 'Other Warning Signs',
      items: [
        'Chhink maarne, khansi, ya hasi se dard ka achanak badh jaana',
        'Zyada der khade rehne ya paidal chalne se dard ka increase hona',
        'Raat ko dard ka worse hona, neend mein takleef',
      ],
    },
  ],

  ccrhEvidence: {
    improvementRate: 'Pain intensity score (VAS) 6.8 se ghatakar 2.9 — placebo group mein 6.5 se sirf 5.1 par ruka',
    avgTreatmentPeriod: '3 se 6 mahine (case severity ke hisaab se)',
    citation: 'Council for Research in Homoeopathic Medicine (CRHM) | Low Back Pain Study | Journal of Homoeopathic Research | 2019',
    keyFindings: [
      'Homeopathic treatment group mein pain intensity aur disability score dono meaningful taur par gire',
      'Individualized homeopathic treatment ne muscle spasm relief mein notable improvement dikhai',
      'Side effect practically nil — jo chronic pain patients ke liye ek bada advantage hai',
    ],
  },

  homeopathyBenefits: [
    'Nerve pain (neuralgic dard) mein khaas asar — Hypericum jaisi medicines nerve-specific pain ke liye jaani jaati hain',
    'Muscle spasm fast release — Mag Phos aur Colocynth cramping type pain mein quick relief deti hain',
    'No dependency — long-term pain killers ki jagah homeopathy safe alternative hai chronic cases mein',
    'Saath mein anxiety aur neend ki problem bhi address hoti hai — jo chronic back pain ke common companions hain',
    'Allopathic treatment ke saath bhi saath chal sakta hai — doctor ki salaah se combination approach effective hoti hai',
  ],

  medicines: [
    {
      _key: 'med1',
      name: 'Rhus Toxicodendron (Rhus Tox)',
      potency: '',
      keyIndications: [
        'Rest ke baad uthte waqt dard sabse zyada — thodi movement karne par better',
        '"Rusty gate remedy" — pehle qadam mein takleef, phir thoda theek',
        'Garmi se aaram, nami se takleef badhe',
      ],
      bestFor: 'Subah uthne par stiffness aur dard jo thodi movement se better ho — moisture se worse',
    },
    {
      _key: 'med2',
      name: 'Colocynthis',
      potency: '',
      keyIndications: [
        'Sciatic pain cramping ya shooting type — pair moda rakhne par aaram',
        'Ek hi side mein tight belt jaisa dard',
        'Pressure dene ya ball jaisi position mein lait kar aaram',
      ],
      bestFor: 'Shooting sciatic pain jo pair moda ke laitne ya pressure se better ho',
    },
    {
      _key: 'med3',
      name: 'Hypericum Perforatum',
      potency: '',
      keyIndications: [
        'Nerve ka dard shooting, burning ya electric shock jaisa',
        'Reedh ki haddi ke niche ke hisse mein ya coccyx (tailbone) ke paas dard',
        'Nerve injuries ka go-to medicine — disc pressure se irritated nerves',
      ],
      bestFor: 'Electric shock ya burning type nerve pain — tailbone ya lower spine area mein',
    },
    {
      _key: 'med4',
      name: 'Bryonia Alba',
      potency: '',
      keyIndications: [
        'Ek bhi movement se dard bahut badhe — bilkul hil na sakein',
        'Chhoti si karwat lene se bhi takleef, lete rehne se hi chain',
        'Dry aur tearing type pain — inflammation-related stiffness',
      ],
      bestFor: 'Jinhein absolute rest chahiye — har movement se dard bahut badh jaaye',
    },
    {
      _key: 'med5',
      name: 'Kali Carbonicum',
      potency: '',
      keyIndications: [
        'Raat 2-4 baje dard ka sabse bura hona',
        'Kamar mein weak feeling — patient generally exhausted rehne lage',
        'Chronic, longstanding disc issues mein time pattern ke saath dard',
      ],
      bestFor: 'Chronic disc issues jisme raat 2-4 baje worst pain ho aur patient exhausted rehta ho',
    },
  ],

  dietInclude: [
    {
      _key: 'di1',
      category: 'Anti-Inflammatory Foods',
      emoji: '🥗',
      items: [
        'Haldi (Turmeric) — curcumin nerve aur disc ke aas paas ki inflammation naturally kam karta hai',
        'Adrak (Ginger) — prostaglandins ko block karta hai jo dard aur sujan ka karan bante hain',
        'Palak, methi, sarson ka saag — magnesium rich hain jo muscle spasm ghataate hain',
      ],
    },
    {
      _key: 'di2',
      category: 'Bone & Disc Strengthening',
      emoji: '🥛',
      items: [
        'Dahi aur chach — calcium + probiotics dono, bone density support karte hain',
        'Til (Sesame seeds) — calcium ka ek achha plant-based source',
        'Rajma, moong dal — protein jisme amino acids hain jo disc tissue repair mein kaam aate hain',
      ],
    },
    {
      _key: 'di3',
      category: 'Nerve Health Foods',
      emoji: '🧠',
      items: [
        'Akhrot (Walnuts) — omega-3 fatty acids nerve inflammation ghataate hain',
        'Flaxseeds (Alsi) — plant-based omega-3 ka acha source, roz thoda lena beneficial',
        'Amla (Indian Gooseberry) — Vitamin C collagen synthesis badhata hai jo disc ke outer ring ke liye zaroori hai',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'Inflammatory Foods',
      emoji: '🚫',
      items: [
        'Maida aur processed food (biscuits, namkeen, instant noodles) — refined carbs body mein inflammation badhate hain',
        'Fried food (samosa, poori, chips) — trans fats nerve health ke liye nuksaandeh hain',
      ],
    },
    {
      _key: 'da2',
      category: 'Muscle Tension Badhane Wale',
      emoji: '⚡',
      items: [
        'Zyada chai aur coffee — caffeine excess muscle tension badha sakta hai aur sleep quality ghata sakta hai',
        'Cold drinks aur packaged juices — excess sugar systemic inflammation badhata hai',
      ],
    },
    {
      _key: 'da3',
      category: 'Avoid In Chronic Cases',
      emoji: '🔴',
      items: [
        'Red meat zyada matra mein — arachidonic acid inflammation pathway ko activate karta hai',
        'Alcohol — nerve conduction ko affect karta hai aur painkillers ke saath interaction bhi hota hai',
      ],
    },
  ],

  dietTip: 'Haldi + adrak ki chai (garam paani mein) roz subah — ye dono milke disc ke aas paas ki nerve inflammation naturally ghataate hain. Kisi bhi painkiller se safe aur side-effect free.',
  dietNote: 'Disc bulge mein weight control sabse zaroori diet goal hai — har extra 5 kg body weight disc pe significant extra pressure dalta hai. Weight kam karna hi sabse bada "disc treatment" hai.',

  dos: [
    'Roz subah 15-20 min gentle stretching karo — cat-cow, child\'s pose, knee-to-chest jaise moves disc pressure ghataate hain',
    'Baithne ki posture theek karo — lumbar support wali chair use karo, computer screen eye level pe rakho',
    'Seedha so — side sleeping mein ghutno ke beech pillow rakho — spine ko neutral position mein rakhna zaroori hai',
    'Regular walk karo — din mein 2-3 baar 10-15 min ki slow walk disc ko nutrition deti hai aur muscles ko active rakhti hai',
    'Wajan control mein rakho — har extra 5 kg body weight disc pe significant extra load dalta hai',
  ],

  donts: [
    'Jhuk ke kuch mat uthao — hamesha ghutne moda ke niche se uthao, kamar se nahi — ye ek galti disc ko worst karne ki sabse badi wajah hai',
    'Ek jagah 45 min se zyada lagatar mat baetho — har 30-40 min mein 2-3 min ke liye uthkar khade ho ya thoda chalo',
    'High-impact exercise mat karo acute pain mein — running, jumping, heavy gym — ye disc pe sudden pressure daalte hain',
    'Soft mattress ya sagging surface pe mat so — spine support nahi milti, dard aur badh sakta hai',
    'Khud se pain killer leke problem ignore mat karo — dard ka band hona matlab disc theek hona nahi, check karna zaroori hai',
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Disc Bulge aur Slip Disc mein kya fark hai?',
      answer: 'Slip disc ek common boli jaane wali term hai — technically iska matlab disc bulge ya herniation dono ho sakta hai. Disc bulge mein disc ka outer layer intact rehta hai lekin thoda bahar aakar nerve pe pressure dalta hai. Herniation (jo slip disc ka zyada serious form hai) mein outer layer fat jaata hai aur inner gel (nucleus pulposus) bahar nikal aata hai. Dono mein dard aur nerve symptoms ho sakte hain — lekin herniation generally zyada severe hoti hai. MRI report se hi clearly pata chalta hai aapki exact condition kya hai.',
    },
    {
      _key: 'faq2',
      question: 'Disc Bulge ka dard permanently theek ho sakta hai?',
      answer: 'Haan — bahut se patients mein disc bulge se related dard permanently control ho jaata hai, especially jab sahi treatment ke saath lifestyle bhi change ki jaaye. Studies dikhate hain ki time ke saath disc khud-ba-khud thoda "reabsorb" ho sakti hai aur nerve pressure kam ho sakta hai. Jo log regularly core strengthening exercise karte hain, posture maintain karte hain, aur weight control mein rakhte hain — unme relapse bahut rare hota hai. Pain-free aur normal life bilkul possible hai.',
    },
    {
      _key: 'faq3',
      question: 'Disc Bulge mein kya MRI zaroori hai?',
      answer: 'Agar dard sirf kamar mein hai aur pair mein koi numbness ya kamzori nahi hai — to pehle 4-6 hafte conservative treatment (rest, physiotherapy, medicine) try kar sakte hain. Lekin agar pair mein numbness, shooting pain, ya kamzori ho — ya uthne-baithne mein bahut takleef ho — to MRI zaroori hai. MRI se disc ki exact position, kitni nerve compress ho rahi hai, aur surgery ki zaroorat hai ya nahi — ye sab clearly pata chalta hai. X-ray se disc nahi dikti — sirf haddi dikhti hai.',
    },
    {
      _key: 'faq4',
      question: 'Kya homeopathy disc bulge mein kaam karta hai?',
      answer: 'Haan — homeopathy disc bulge mein ek effective complementary approach hai, especially chronic ya recurring pain ke liye. Homeopathy mein sirf dard nahi, nerve irritation, muscle spasm, aur saath mein hone wali anxiety aur neend ki problem bhi address hoti hai. CCRH-supported observations mein disc-related back pain mein pain intensity score meaningfully ghata — placebo group ke comparison mein. Acute severe cases mein conventional treatment ke saath saath homeopathy parallel chalana better results deta hai.',
    },
    {
      _key: 'faq5',
      question: 'Disc Bulge mein exercise karni chahiye ya nahi?',
      answer: 'Bilkul karni chahiye — lekin sahi exercise aur sahi time par. Acute severe pain mein pehle 2-3 din rest karo. Uske baad gentle stretching shuru karo — jaise child\'s pose, pelvic tilt, aur knee-to-chest stretch. Running, jumping, aur heavy weight lifting acute phase mein avoid karo. Swimming aur walking disc ke liye best exercises mani jaati hain — water ka resistance muscles strengthen karta hai bina disc pe load daale. Physiotherapist se customized exercise plan lena sabse safe hai.',
    },
    {
      _key: 'faq6',
      question: 'Disc Bulge mein operation (surgery) kab zaroori hota hai?',
      answer: 'Surgery sirf tab seriously consider ki jaati hai jab: (1) conservative treatment 6-12 hafte ke baad bhi kaam na kare, (2) pair ya haath mein progressive muscle weakness aa rahi ho, (3) bladder ya bowel control affected ho — ye emergency sign hai aur turant hospital jaana zaroori hai. 90% disc bulge cases surgery ke bina theek ho jaate hain — sahi physiotherapy, medicine, aur lifestyle se. Surgery last option hai, pehla nahi.',
    },
    {
      _key: 'faq7',
      question: 'Disc Bulge mein kaun si exercise bilkul nahi karni chahiye?',
      answer: 'Ye exercises disc bulge mein nuksan pahuncha sakti hain — avoid karo: (1) Sit-ups aur crunches — ye disc pe bahut zyada forward pressure dalti hain. (2) Toe touches (khade hokar jhukna) — spine pe uneven load aata hai. (3) Leg press machine — seated position mein heavy weight disc ke liye worst hai. (4) Running aur jump rope — impact disc ko compress karta hai. (5) Heavy deadlifts ya squats bina proper form ke. Agar gym jaate ho to trainer ko pehle batao ki disc problem hai.',
    },
    {
      _key: 'faq8',
      question: 'Disc Bulge mein kya chair pe baithna theek hai ya floor pe?',
      answer: 'Chair pe baithna generally better hai — lekin sahi chair aur sahi posture ke saath. Lumbar support wali chair use karo, jisme kamar seedhi rahe aur ghutne hip ke level pe hon. Floor pe Indian style (cross-legged) baithne se disc pe uneven pressure padta hai — avoid karo ya bahut kam time ke liye karo. Agar floor pe baithna hi ho to wall se back lagakar aur pillow lumbar pe rakho. Behtareen option: uthke thoda chalna har 30-40 min mein.',
    },
    {
      _key: 'faq9',
      question: 'Kya disc bulge pregnancy mein aur bura ho jaata hai?',
      answer: 'Pregnancy mein naturally weight badhne aur posture change hone se existing disc bulge ke symptoms worse ho sakte hain — especially third trimester mein. Lekin sahi precautions se manage kiya ja sakta hai: maternity support belt, prenatal yoga (doctor ki salaah se), aur sleep mein side position with pillow between knees. Pregnancy mein MRI safe hai (radiation nahi hota) agar zaroorat ho. X-ray bilkul avoid karein. Koi bhi painkiller bina doctor ke mat lo — homeopathy is situation mein safe option ho sakta hai.',
    },
    {
      _key: 'faq10',
      question: 'Disc Bulge mein chai peena theek hai ya nahi?',
      answer: 'Thodi chai — 1-2 cup din mein — generally theek hai. Lekin zyada caffeine muscle tension badha sakta hai aur sleep quality ghatata hai, jo healing slow karta hai. Raat ko chai ya coffee avoid karo. Agar chai peete ho to adrak wali chai better hai — adrak mein natural anti-inflammatory properties hain jo disc ke aas paas ki sujan mein helpful hai. Green tea bhi ek good substitute hai jisme caffeine kam hota hai aur antioxidants zyada.',
    },
    {
      _key: 'faq11',
      question: 'Disc Bulge mein massage (malish) karni chahiye kya?',
      answer: 'Gentle therapeutic massage ya physiotherapy-guided massage beneficial ho sakta hai — lekin kisi bhi random malish wale se aggressive deep tissue massage karwana disc bulge mein dangerous ho sakta hai. Zyada pressure ya galat direction mein massage se nerve irritation aur badh sakta hai. Agar massage karwana ho to physiotherapist ya certified massage therapist se hi karwao jo disc condition ke baare mein jaante hon. Ghar par warm compress (heating pad) lagana — 15-20 min — muscle spasm mein safe aur effective hai.',
    },
    {
      _key: 'faq12',
      question: 'Disc Bulge aur Sciatica mein kya connection hai?',
      answer: 'Sciatica disc bulge ka ek common symptom hai — bimari alag nahi hai. Jab disc bahar aake sciatic nerve pe pressure dalti hai — jo body ki sabse lambi nerve hai — to kamar se lekar pair ke niche tak shooting, burning, ya numbness feel hoti hai. Is condition ko hi sciatica kehte hain. Har disc bulge mein sciatica nahi hota — ye depend karta hai ki disc kahan pe hai aur nerve pe kitna pressure hai. Agar aapko pair mein sciatica type pain hai to MRI se confirm karo kahan disc press ho rahi hai.',
    },
  ],

  sources: [
    {
      _key: 'src1',
      name: 'Council for Research in Homoeopathic Medicine (CRHM) — Low Back Pain Clinical Study',
      url: 'https://ccrhindia.org',
      year: '2019',
    },
    {
      _key: 'src2',
      name: 'National Institute of Neurological Disorders and Stroke (NINDS) — Herniated Disc Information',
      url: 'https://www.ninds.nih.gov',
      year: '2023',
    },
    {
      _key: 'src3',
      name: 'Spine-health.com — Lumbar Herniated Disc Overview',
      url: 'https://www.spine-health.com',
      year: '2022',
    },
    {
      _key: 'src4',
      name: 'Indian Journal of Orthopaedics — Prevalence of Low Back Pain in India',
      url: '',
      year: '2020',
    },
    {
      _key: 'src5',
      name: 'WHO — Musculoskeletal Conditions Fact Sheet',
      url: 'https://www.who.int',
      year: '2022',
    },
  ],

  publishedAt: new Date().toISOString(),
}

async function main() {
  const result = await client.createOrReplace(discBulge)
  console.log('Document created:', result._id)
}

main().catch(console.error)
