import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
  useCdn: false,
})

const disease = {
  _id: 'disease-frozen-shoulder',
  _type: 'disease',
  title: 'Frozen Shoulder (Adhesive Capsulitis)',
  hindiName: 'Kaphi Hua Kandha / Jama Hua Kandha / Kandhe Ka Dard',
  slug: { _type: 'slug', current: 'frozen-shoulder' },
  category: 'Joints',
  seoTitle: 'Frozen Shoulder Treatment in Hindi — Dard, Karan aur Homeopathy Ilaaj',
  seoDescription: 'Frozen shoulder ke causes, stages, homeopathic treatment, exercise aur diet guide — simple Hinglish mein. Verified info, doctor-reviewed.',
  heroText: 'Frozen shoulder — jise doctors "Adhesive Capsulitis" bolte hain — ek aisi condition hai jisme kandha (shoulder joint) dheere dheere akad jaata hai aur utha nahi paata. Ye akadat itni badhti hai ki ek waqt aata hai jab haath ooper uthana, peeth khujaana, ya bra ka hook lagaana bhi mushkil ho jaata hai. Is condition mein shoulder ke aas paas jo capsule (covering) hoti hai woh sikh (scar tissue) jaati hai — isi wajah se movement band hoti jaati hai. Aksar log sochtein hain ki "dard thak jayega" — lekin frozen shoulder khud se theek bahut dheere hoti hai, aur bina treatment ke kuch logon mein 2-3 saal tak bani rehti hai.',

  quickFacts: {
    whatItIs: 'Shoulder joint ki capsule mein adhesions (scar tissue) ban jaate hain jo movement block karte hain — Adhesive Capsulitis',
    howCommon: 'Roughly 2-5% adults affected; diabetes wale logon mein 10-30% tak; mahilaon mein purushon se 3 guna zyada',
    treatmentDuration: '6 mahine se 2 saal (stage aur treatment pe depend karta hai); homeopathy se recovery faster hoti hai',
  },

  types: [
    {
      _key: 'dt1',
      name: 'Primary (Idiopathic) Frozen Shoulder',
      description: 'Koi clear wajah nahi hoti. Ye apne aap develop hoti hai — mostly 40-60 saal ke logon mein. Diabetes, thyroid, ya hormonal changes iske peeche ho sakti hain lekin exactly kuch prove nahi hota.',
    },
    {
      _key: 'dt2',
      name: 'Secondary Frozen Shoulder',
      description: 'Kisi injury ke baad aata hai — rotator cuff tear, fracture, surgery ke baad jab haath lamba time rest mein raha ho. Is case mein shoulder capsule akadne lagti hai kyunki koi movement nahi thi.',
    },
    {
      _key: 'dt3',
      name: 'Diabetic Frozen Shoulder',
      description: 'Diabetes ke patients mein bahut zyada hoti hai — aur usually dono kandhon mein ho sakti hai. Ye zyada stubborn hoti hai aur treatment ka time bhi zyada lagta hai.',
    },
    {
      _key: 'dt4',
      name: 'Stage 1 — Freezing Stage (2-9 months)',
      description: 'Kandha dard karna shuru karta hai — raat ko aur movement pe zyada. Slowly movement kam hoti jaati hai.',
    },
    {
      _key: 'dt5',
      name: 'Stage 2 — Frozen Stage (4-12 months)',
      description: 'Dard thoda kam ho jaata hai lekin movement bahut zyada restricted ho jaati hai. Ye sabse frustrating stage hoti hai.',
    },
    {
      _key: 'dt6',
      name: 'Stage 3 — Thawing Stage (5-24 months)',
      description: 'Movement wapas aane lagti hai — dheere dheere. Kuch logon mein bina treatment ke bhi ho jaata hai, lekin bahut time lagta hai.',
    },
  ],

  causes: [
    'Shoulder joint ka capsule inflame ho jaata hai aur sikh (fibrous tissue) banane lagti hai — movement block hoti hai',
    'Lamba time haath ko rest mein rakhna (fracture ke baad, surgery ke baad, paralysis mein)',
    'Diabetes mellitus — high blood sugar tissue ko affect karta hai aur capsule stiffen hoti hai',
    'Thyroid problems — hypothyroidism frozen shoulder ka risk badhata hai',
    'Rotator cuff injury ya tear jiske baad proper rehab nahi hua',
    'Cervical spondylosis — neck se connected nerve irritation shoulder mein jaati hai',
    'Autoimmune ya inflammatory conditions jaise rheumatoid arthritis',
  ],

  riskFactors: [
    '40 se 65 saal ke adults — is age group mein sabse common',
    'Mahilayein — purushon se 3 guna zyada hoti hai unhe',
    'Diabetic patients — 10-30% diabetics mein frozen shoulder develop hoti hai',
    'Thyroid disorder wale patients (hypo ya hyper dono)',
    'Jo log office mein ghanton tak ek hi position mein kaam karte hain',
    'Previous shoulder injury ya surgery ka history',
    'Cervical spondylosis ke patients — neck aur shoulder closely connected hain',
    'Jo log dil ka dora (heart attack) ya stroke ke baad haath nahi hila paaye lamba time',
  ],

  complications: [
    'Complete shoulder stiffness — haath bilkul nahi uthega, neeche girna bhi mushkil',
    'Muscle wasting (atrophy) — kandhe ki muscles kamzor pad jaati hain lamba time mein',
    'Cervical spine pe extra load — frozen shoulder mein log gardan ko compensate karte hain, jisse neck pain badh jaata hai',
    'Sleep disturbance — raat ka dard neend kharab karta hai jo mental health affect karta hai',
    'Depression aur anxiety — chronic pain jo 2-3 saal tak rahe, log frustrated ho jaate hain',
  ],

  symptoms: [
    {
      _key: 'sg1',
      category: 'Dard Ke Lakshan (Pain Symptoms)',
      items: [
        'Kandhe mein thoda thoda dard jo dheere dheere badhta jaata hai',
        'Raat ko dard zyada — so nahi paate ya baar baar uthna padta hai',
        'Haath ooper uthane pe ya peeth ke peechhe le jaane pe sharp pain',
        'Ek hi side ka kandha zyada prabhavit (usually non-dominant side bhi hoti hai)',
      ],
    },
    {
      _key: 'sg2',
      category: 'Akadhat Ke Lakshan (Stiffness Symptoms)',
      items: [
        'Haath ooper uthana mushkil — kamar se ooper nahi jaata',
        'Shirt pehenna, baal banana, bra ka hook lagaana — routine kaam bhi takleef deta hai',
        'Kandha ghuma nahi paata — rotation bilkul kam ho jaati hai',
        'Slowly movement itni kam hoti hai ki doctor ke liye bhi clearly visible hoti hai',
      ],
    },
    {
      _key: 'sg3',
      category: 'Associated Symptoms (Saath Mein Jo Aata Hai)',
      items: [
        'Gardan mein akadhat (cervical stiffness) — kyunki log neck se compensate karte hain',
        'Haath mein numbness ya pins-and-needles (agar nerve involved ho)',
        'Weakness — kandhe ki muscles dhire dhire kamzor lagti hain',
        'Fatigue — chronic dard se body thaki rehti hai',
      ],
    },
  ],

  ccrhEvidence: {
    summary: 'Frozen shoulder mein homeopathy teen levels pe kaam karti hai — pehle dard ko manage karti hai jo rozmarra ki zindagi mushkil banata hai, phir inflammation aur scar tissue formation ko dheemi karti hai, aur finally movement restore karne mein shoulder ko naturally help karti hai. Homeopathy mein sirf shoulder nahi, poora patient dekha jaata hai.',
    keyFindings: [
      'Joint pain aur stiffness ke cases mein VAS (Visual Analog Scale) scores mein significant reduction',
      'Rheumatic conditions mein patient-reported quality of life improvement',
      'Long-term follow up mein relapse rate kam raha compared to no-treatment group',
      'Diabetic patients ke liye safe — blood sugar pe koi asar nahi',
    ],
    citation: 'CCRH Annual Report 2019-20 | Indian Journal of Research in Homoeopathy — Musculoskeletal Studies | 2018 | ccrhindia.nic.in',
    averageTreatmentPeriod: '3-6 mahine (stage ke hisaab se)',
  },

  medicines: [
    {
      _key: 'med1',
      name: 'Rhus Toxicodendron',
      forWhom: 'Jinhe rest pe zyada dard hota hai, thodi movement se dard kam ho jaata hai, subah uthne pe akadhat bahut hoti hai',
      whyHope: 'Ye medicine joints aur connective tissue pe kaam karti hai — especially wahan jahan "rust ki tarah" akadhat ho aur warmth se aaram mile. Frozen shoulder ke initial stage mein bahut useful mani jaati hai.',
    },
    {
      _key: 'med2',
      name: 'Bryonia Alba',
      forWhom: 'Jinhe movement se dard zyada badh jaata hai — bilkul bhi hilana nahi chahte, rest pe better feel hota hai, dard stitching type ka ho',
      whyHope: 'Ye medicine inflammation aur sharp pain mein use hoti hai jahan har movement pain badha de. Frozen stage mein jab movement minimum hoti hai, Bryonia kaafi helpful hai.',
    },
    {
      _key: 'med3',
      name: 'Ferrum Metallicum',
      forWhom: 'Kandhe ka dard jo raat ko letne pe aur bhi badh jaaye, haath neeche latkane pe thoda relief mile, anemia ya weakness bhi saath mein ho',
      whyHope: 'Shoulder joint pe iska specific effect hai — especially raat ke dard mein aur patients jo anemic ya generally weak hain unme kaafi kaam karti hai.',
    },
    {
      _key: 'med4',
      name: 'Sanguinaria Canadensis',
      forWhom: 'Right-sided frozen shoulder, raat ko karvat nahi le paate right side pe, dard shoulder se neeche haath ki taraf jaata ho',
      whyHope: 'Is medicine ka right shoulder aur brachial region pe specific action dono practitioners aur literature mein extensively documented hai. Right-sided cases mein khaas kaam karti hai.',
    },
    {
      _key: 'med5',
      name: 'Causticum',
      forWhom: 'Lamba time se frozen shoulder, muscles tighten ho gayi hoon, patient elderly ho ya diabetes ho, tendons aur fibrous tissue involvement',
      whyHope: 'Causticum fibrous tissue aur chronic contractures mein kaam karta hai — jo frozen shoulder mein hoti hai. Thawing stage mein movement wapas laane mein help karta hai.',
    },
  ],

  dietInclude: [
    {
      _key: 'di1',
      category: 'Anti-Inflammatory Foods',
      emoji: '🌿',
      items: [
        'Haldi (Turmeric) — curcumin inflammation kam karta hai, joint healing mein help karta hai',
        'Adrak (Ginger) — natural anti-inflammatory, joint stiffness mein faydemand',
        'Lahsun (Garlic) — sulfur compounds joints ke liye protective hain',
      ],
    },
    {
      _key: 'di2',
      category: 'Protein & Collagen Sources',
      emoji: '💪',
      items: [
        'Paneer / Dahi / Eggs — collagen repair ke liye protein zaroori hai',
        'Fish (mackerel, sardines) — omega-3 fatty acids joint inflammation kam karte hain',
        'Dal aur legumes — plant-based protein jo muscle recovery mein help kare',
      ],
    },
    {
      _key: 'di3',
      category: 'Bone & Joint Support',
      emoji: '🦴',
      items: [
        'Til (Sesame seeds) — calcium aur magnesium ka achha source, joint health ke liye',
        'Saag aur dark leafy vegetables — Vitamin K jo bone density maintain karta hai',
        'Anar ka juice — polyphenols joint inflammation mein evidence-based benefit dete hain',
      ],
    },
    {
      _key: 'di4',
      category: 'Hydration & Vitamins',
      emoji: '💧',
      items: [
        'Nariyal paani — electrolytes muscle cramps aur stiffness mein help karte hain',
        'Amla — Vitamin C jo collagen synthesis ke liye zaroori hai',
        'Warm water with lemon — anti-inflammatory aur digestive health',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'Inflammatory Foods',
      emoji: '❌',
      items: [
        'Maida aur processed foods (bread, biscuits, instant noodles) — inflammation badhate hain',
        'Fried foods aur deep fry snacks — trans fats joint inflammation worsen karte hain',
        'Bakery items aur refined sugar — pro-inflammatory response trigger karte hain',
      ],
    },
    {
      _key: 'da2',
      category: 'Joint Ko Nuksaan Pahunchane Wale',
      emoji: '⚠️',
      items: [
        'Cold drinks aur packaged juices — sugar spike se inflammation badh sakta hai',
        'Alcohol — pain perception badh jaata hai aur healing slow hoti hai',
        'Excess namak (salt) — body mein water retention badhta hai, tissue swelling mein role',
      ],
    },
    {
      _key: 'da3',
      category: 'Diabetic Frozen Shoulder Mein Extra Avoid',
      emoji: '🚫',
      items: [
        'Meetha — diabetic patients mein blood sugar control zaroori hai (sugar se frozen shoulder worse hoti hai)',
        'White rice in excess — glycemic index high hai, diabetes management mein barrier',
        'Fruit juices without fiber — aam ya angoor ka juice quickly sugar spike karta hai',
      ],
    },
  ],

  dos: [
    'Regular physiotherapy exercises karein — pendulum exercise, wall walking, towel stretch — roz 15-20 min, consistency zaroori hai',
    'Heat therapy use karein shoulder pe — warm compress ya heating pad 15-20 min, exercise se pehle karo',
    'Neend ki position sahi rakhein — affected side pe nahi sona, pillow kandhe ke neeche rakhein support ke liye',
    'Homeopathic treatment ke saath physiotherapy saath mein chalate rehein — dono milke better results dete hain',
    'Diabetes ya thyroid hai to unka regular monitoring karein — underlying condition control hogi to frozen shoulder bhi jaldi theek hogi',
    'Doctor se regular follow-up karein — stage change hone pe treatment adjust hoti hai',
  ],

  donts: [
    'Dard hone pe bilkul haath band mat karo — complete rest se adhesions aur badh jaate hain, gentle movement zaroori hai',
    'Self-manipulation mat karo — kisi ne bola "haath zordar ghuma do" to mat karo — capsule tear ho sakti hai',
    'Painkiller pe akele depend mat karo lamba time tak — stomach aur kidney ke liye nuksaan deh hai, aur root cause treat nahi hota',
    'Sone ki galat position — roz affected side pe sone se raat ka dard aur badh jaata hai',
    '"No pain no gain" frozen shoulder pe apply nahi hota — pain se zyada movement dangerous hai, gentle exercises hi karein',
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Q1. Frozen shoulder kya hoti hai — bilkul simple mein samjhayein?',
      answer: 'Frozen shoulder ek aisi condition hai jisme kandha (shoulder joint) dheere dheere akad jaata hai aur haath ooper uthana ya ghuma nahi paata. Iska medical naam "Adhesive Capsulitis" hai — matlab shoulder ke aas paas jo capsule (covering) hoti hai woh tighten aur sikh jaati hai, jisse movement block ho jaati hai. Ye condition aksar 40-60 saal ke logon mein hoti hai — especially mahilaon mein, diabetes mein, aur unme jo lamba time haath ko rest mein rakha ho. Bina treatment ke 2-3 saal bhi chal sakti hai.',
    },
    {
      _key: 'faq2',
      question: 'Q2. Frozen shoulder aur normal kandhe ka dard — kya fark hai?',
      answer: 'Normal kandhe ka dard muscle khichne ya thakaan se aata hai aur 1-2 hafte mein theek ho jaata hai. Frozen shoulder mein dard ke saath haath ki movement bhi kam hoti jaati hai — aur ye dheere dheere badhta hai mahino tak. Agar aap haath kamar se ooper nahi utha pa rahe, baal banana ya shirt pehenna mushkil ho gaya hai, aur dard 6 hafte se zyada se hai — to ye normal muscle pain nahi, frozen shoulder ho sakta hai. Doctor se zaroor milein.',
    },
    {
      _key: 'faq3',
      question: 'Q3. Frozen shoulder ke 3 stages kya hote hain — aur kitna time lagta hai?',
      answer: 'Frozen shoulder teen stages mein hoti hai. Pehla stage "Freezing" — is mein 2 se 9 mahine lagta hai jisme dard shuru hota hai aur movement dheere khatam hoti hai. Doosra stage "Frozen" — 4 se 12 mahine, is mein dard thoda kam hota hai lekin haath bilkul nahi hilta. Teesra stage "Thawing" — 5 se 24 mahine, is mein movement dheere dheere wapas aane lagti hai. Total 1.5 se 3 saal lag sakte hain bina treatment ke. Homeopathy aur physiotherapy se ye process tez ho sakta hai.',
    },
    {
      _key: 'faq4',
      question: 'Q4. Frozen shoulder ka homeopathic treatment kya hai — kya kaam karta hai?',
      answer: 'Haan — homeopathy frozen shoulder mein ek effective complementary treatment hai, especially jab stages ke hisaab se individualized medicine di jaaye. Homeopathy mein sirf shoulder nahi, poora patient dekha jaata hai — kya raat ko dard zyada hai, kya movement se badh jaata hai ya rest pe, kya diabetes hai — sab milake sahi medicine choose hoti hai. Rhus Tox, Bryonia, Ferrum Met, Sanguinaria aur Causticum — ye common medicines hain lekin potency aur dose sirf qualified homoeopath decide karta hai. Physiotherapy ke saath mila ke aur zyada results milte hain.',
    },
    {
      _key: 'faq5',
      question: 'Q5. Frozen shoulder mein kaun si exercise karni chahiye — ghar pe?',
      answer: 'Frozen shoulder mein gentle movement exercises sabse zaroori hain — complete rest se condition aur kharab hoti hai. Ghar pe ye exercises karein: (1) Pendulum exercise — aage jhukke haath ko gravity se circle mein ghoomne do, force mat lagao. (2) Wall walking — deewar pe ungliyaan rakh ke dheere dheere ooper chadhaao. (3) Towel stretch — peeth ke peechhe towel pakad ke dono haathon se gentle stretch do. Exercise se pehle 10 minute warm compress zaroor lagao — isse muscles loose hoti hain aur dard kam hota hai. Roz 2 baar, 15-20 minute karein.',
    },
    {
      _key: 'faq6',
      question: 'Q6. Frozen shoulder mein kya khaana chahiye aur kya nahi?',
      answer: 'Frozen shoulder mein anti-inflammatory diet kaafi help karti hai. Khaana: Haldi wala doodh ya chai, adrak, lahsun, omega-3 rich fish (mackerel), til, amla, dark leafy vegetables, dahi aur paneer (collagen repair ke liye protein). Nahi khaana: Maida se bani cheezein (bread, biscuits), fried food, cold drinks, alcohol, aur bahut zyada meetha. Agar diabetes ke saath frozen shoulder hai — to sugar aur maida bilkul control mein rakhein kyunki high blood sugar frozen shoulder ko aur stubborn banata hai.',
    },
    {
      _key: 'faq7',
      question: 'Q7. Frozen shoulder kitne time mein theek hoti hai?',
      answer: 'Bina treatment ke frozen shoulder 1.5 se 3 saal tak reh sakti hai — aur kuch cases mein poori movement wapas nahi aati. Homeopathy ke saath typically 6 months se 1 saal mein meaningful improvement aati hai — khaaskar agar treatment pehle stage mein shuru ho. Diabetic patients mein thoda zyada time lag sakta hai. Isliye jitni jaldi treat karein — utna jaldi recovery. "Khud theek ho jaayega" soch ke wait mat karein.',
    },
    {
      _key: 'faq8',
      question: 'Q8. Kya frozen shoulder permanently theek ho sakti hai?',
      answer: 'Haan — frozen shoulder mein complete recovery possible hai, khaaskar agar sahi treatment aur physiotherapy mili ho. Zyaadatar patients mein shoulder movement 70-90% recover ho jaati hai. Kuch logon mein thodi residual stiffness reh sakti hai especially agar treatment bahut late shuru hui ho ya diabetes uncontrolled thi. Homeopathy ka fayda ye hai ki ye recovery ko natural tarike se support karta hai — scar tissue loosening mein aur pain management mein — jo long-term outcome better karta hai.',
    },
    {
      _key: 'faq9',
      question: 'Q9. Diabetes mein frozen shoulder kyun zyada hoti hai — aur kya karna chahiye?',
      answer: 'Diabetic patients mein frozen shoulder 10-30% cases mein hoti hai — general population se kaafi zyada. Reason ye hai ki high blood sugar collagen aur tissue ko affect karta hai, shoulder capsule stiffen ho jaati hai. Aur diabetic frozen shoulder dono kandhon mein ho sakti hai aur zyada stubborn hoti hai. Kya karna chahiye: Sabse pehle blood sugar control mein rakho — HbA1c 7% ke neeche. Phir homeopathy aur physiotherapy dono shuru karo. Causticum aur Rhus Tox diabetic frozen shoulder mein commonly indicated medicines hain — homoeopath se milein.',
    },
    {
      _key: 'faq10',
      question: 'Q10. Frozen shoulder ki homeopathic medicine — Rhus Tox ya kuch aur?',
      answer: 'Rhus Toxicodendron frozen shoulder ki sabse commonly used homeopathic medicine hai — khaaskar jab subah akadhat bahut ho, thodi movement se dard kam ho, aur warmth se aaram mile. Lekin sirf Rhus Tox se kaam nahi chalega har case mein. Agar dard movement se badh jaata hai to Bryonia, agar right kandha zyada affected hai to Sanguinaria, agar chronic aur lamba time se hai to Causticum better hai. Sahi medicine stage, symptoms, aur patient ki overall health dekh ke decide hoti hai — self-medication avoid karein.',
    },
    {
      _key: 'faq11',
      question: 'Q11. Frozen shoulder ka operation zaroori hai kya?',
      answer: 'Zyaadatar cases mein operation zaroori nahi hota — 90% se zyada frozen shoulder cases conservative treatment se theek ho jaati hain. Operation (Manipulation Under Anesthesia ya Arthroscopic Capsular Release) sirf tab suggest hota hai jab 12-18 mahine aggressive conservative treatment ke baad bhi koi response nahi aaya. Homeopathy + physiotherapy + patient ki dedication — ye combination kaafi cases mein surgery tak pahuche bina kaam kar deta hai.',
    },
    {
      _key: 'faq12',
      question: 'Q12. Raat ko frozen shoulder ka dard kyun zyada hota hai — kya karein?',
      answer: 'Raat ko frozen shoulder ka dard isliye zyada hota hai kyunki letne pe capsule pe pressure badhta hai, aur body ki cortisol (natural anti-inflammatory hormone) raat mein low hoti hai. Kya karein: Affected side pe nahi sona — dusri side ya peeth ke bhal soyein. Kandhe ke neeche thin pillow rakhein support ke liye. Sone se pehle warm compress lagao 15-20 minute. Homeopathic medicines Ferrum Met aur Rhus Tox raat ke dard mein specifically help karte hain — homoeopath se discuss karein.',
    },
    {
      _key: 'faq13',
      question: 'Q13. Kya frozen shoulder mein massage karni chahiye?',
      answer: 'Haan — lekin sahi tarike se. Frozen shoulder mein gentle massage (kisi trained physiotherapist ya massage therapist se) kaafi faydemand hoti hai — muscles ko relax karti hai aur blood circulation badhati hai jo healing mein help karta hai. Khud se ya daba daba ke aggressive massage nahi karni chahiye — isse capsule irritate ho sakti hai aur dard badh sakta hai. Warm oil se (til ka tel ya sarson ka tel) gentle circular motion mein massage karein — physiotherapist ki guidance mein.',
    },
    {
      _key: 'faq14',
      question: 'Q14. Frozen shoulder mein kya MRI karwana chahiye?',
      answer: 'Haan — agar doctor suggest kare to MRI useful hoti hai. X-ray se sirf bones dikhti hain — soft tissue (capsule, rotator cuff, tendons) MRI se clearly dikhte hain. MRI se pata chalta hai ki frozen shoulder hai, rotator cuff tear hai, ya kuch aur. Ye important hai kyunki treatment dono conditions mein alag hoti hai — rotator cuff tear mein surgical evaluation pehle hogi, jab ki pure frozen shoulder mein conservative treatment prefer hoti hai. Agar 6 hafte se zyada dard hai aur movement limit hai — doctor ko MRI ke baare mein poochein.',
    },
    {
      _key: 'faq15',
      question: 'Q15. Bachon ya young age (30 se kam) mein frozen shoulder ho sakti hai?',
      answer: 'Bahut rare hai — frozen shoulder mostly 40-65 saal ke adults mein hoti hai. 30 saal se kam mein agar kandhe mein movement limit ho aur dard ho, to typically rotator cuff injury, labral tear, ya koi aur condition hoti hai — frozen shoulder nahi. Isliye young patients mein proper diagnosis zaroori hai — MRI ya specialist se milein — frozen shoulder assume mat karein. Agar hoti bhi hai young age mein, to typically koi injury ya trauma background mein hota hai.',
    },
    {
      _key: 'faq16',
      question: 'Q16. Frozen shoulder aur cervical spondylosis mein kya connection hai?',
      answer: 'Dono ek saath bahut common combination hai — aur log aksar confuse ho jaate hain kaunsa dard kahaan se aa raha hai. Cervical spondylosis mein neck ki nerves irritate hoti hain jo shoulder tak jaati hain — isse shoulder mein bhi dard aata hai. Frozen shoulder mein sirf shoulder capsule problem hai. Dono ek saath bhi ho sakti hain. Doctor se milke proper examination karwayein — treatment dono mein alag hoti hai. Homeopathy mein dono ko simultaneously treat kiya ja sakta hai — ek trained homoeopath poori picture dekhta hai.',
    },
    {
      _key: 'faq17',
      question: 'Q17. Pregnant mahila ko frozen shoulder ho jaaye to kya karein?',
      answer: 'Pregnancy mein frozen shoulder rare hai lekin ho sakti hai — especially postpartum period mein bacha uthane ke wajah se haath pe zyada stress aaya ho. Pregnancy mein NSAIDs (painkiller tablets) safe nahi hote — isliye homeopathy ek safe option hai. Arnica, Rhus Tox, Ruta — ye pregnancy mein bhi commonly used medicines hain lekin sirf qualified homoeopath ki supervision mein. Physiotherapy exercises bhi safe hain — specially designed for pregnant women. Self-medication avoid karein.',
    },
    {
      _key: 'faq18',
      question: 'Q18. Ek kandha theek hone ke baad doosre mein bhi frozen shoulder ho sakti hai?',
      answer: 'Haan — ye possible hai, especially diabetic patients mein. Studies suggest karte hain ki ek frozen shoulder ke baad 15-20% chance hota hai doosre shoulder mein bhi develop hone ka, usually 5 saal ke andar. Isliye ek shoulder theek hone ke baad bhi regular shoulder exercises aur diabetes control maintain karna zaroori hai. Preventive care zyada aasaan hai — treatment ke muqable mein.',
    },
    {
      _key: 'faq19',
      question: 'Q19. Frozen shoulder mein steroid injection leni chahiye — ya nahi?',
      answer: 'Corticosteroid injection dard aur inflammation mein turant relief de sakti hai — khaaskar freezing stage mein. Lekin ye sirf temporary solution hai — scar tissue ko treat nahi karti, aur lamba time ya baar baar injection lene ke side effects hain (diabetes worsen ho sakti hai, bone density pe asar). Homeopathy ka angle ye hai ki ye symptom suppress karne ke bajaye underlying inflammation aur healing process pe kaam karta hai — zyada holistic approach.',
    },
    {
      _key: 'faq20',
      question: 'Q20. Frozen shoulder mein heat lagani chahiye ya ice?',
      answer: 'Frozen shoulder mein generally heat (warm compress, heating pad) zyada faydemand hoti hai — khaaskar exercise se pehle, aur raat ko sone se pehle. Heat muscles ko relax karti hai, blood flow badhata hai aur movement easier hoti hai. Ice typically acute injury mein use hoti hai jahan swelling ho — frozen shoulder mein direct joint swelling usually nahi hoti. Agar koi specific spot bahut inflamed feel ho to ice 10 minute use kar sakte hain. Simple rule: exercise se pehle heat, baad mein agar dard zyada ho to thodi ice.',
    },
    {
      _key: 'faq21',
      question: 'Q21. Frozen shoulder mein Ayurveda ya gharelu nuskhe kaam karte hain?',
      answer: 'Kuch gharelu nuskhe supporting role mein helpful hain — Ayurveda aur homeopathy ke saath. Sarson ke tel mein lahsun garam karke massage — circulation badhata hai. Haldi wala doodh raat ko — anti-inflammatory. Adrak ki chai — joint dard mein faydemand. Lekin sirf gharelu nuskhe se frozen shoulder theek nahi hogi — ye supporting therapy hai, primary treatment nahi. Agar aap homeopathy le rahe hain to homoeopath se poochhein kaunse gharelu nuskhe safe hain aapke case mein.',
    },
    {
      _key: 'faq22',
      question: 'Q22. Frozen shoulder mein yoga kar sakte hain?',
      answer: 'Haan — selected yoga poses frozen shoulder recovery mein bahut helpful hain. Recommended poses: Gomukhasana (cow face pose — lekin gentle version), Garudasana arms only, shoulder rotation in Tadasana. Bilkul mat karein: Aggressive backward bends, Chaturanga, ya koi bhi pose jisme kandhe pe full body weight aaye. Yoga class join karne se pehle instructor ko batayein ki frozen shoulder hai — woh modified poses suggest karenge. Bikram ya hot yoga frozen shoulder mein better kaam karta hai because of the warmth.',
    },
    {
      _key: 'faq23',
      question: 'Q23. Frozen shoulder mein swimming kar sakte hain?',
      answer: 'Haan — swimming frozen shoulder ke liye ek of the best exercises hai! Paani mein body ka weight reduce hota hai, resistance se muscle strength badhti hai, aur shoulder ki full range of motion use hoti hai bina injury risk ke. Warm pool prefer karein — cold water stiffness badha sakta hai. Breaststroke aur backstroke better hain — freestyle mein overhead movement dard de sakti hai initially. Swimming shuru karne se pehle ek baar physiotherapist se poochhein ki aap kis stage mein hain.',
    },
    {
      _key: 'faq24',
      question: 'Q24. Office mein baithe baithe frozen shoulder ka dard kaise manage karein?',
      answer: 'Office workers ke liye: Har ghante mein 5 minute break lein aur shoulder rotation karein — sirf chair pe baithe baithe. Monitor ki height aankh ke level pe ho — ooper ya neeche screen se neck aur shoulder stressed hoti hai. Ergonomic chair aur proper armrest use karein. Mouse wale haath pe zyada pressure mat do — dono haathon se alternately kaam karein jab possible ho. Ek small warm compress pack office mein rakhein — break mein 10 minute lagao. Aur lunch mein 10 minute gentle exercises karein.',
    },
    {
      _key: 'faq25',
      question: 'Q25. Frozen shoulder mein kab turant doctor ke paas jaana chahiye?',
      answer: 'Ye signs hain jab bilkul der nahi karni chahiye — turant doctor ko dikhayein: (1) Haath bilkul seedha nahi utha pa rahe — complete loss of movement. (2) Dard itna severe ho ki raat ko ek minute bhi so nahi pa rahe. (3) Haath mein numbness ya weakness aayi ho — nerve involvement ho sakti hai. (4) Fever ke saath shoulder dard ho — infection ya serious condition ho sakti hai. (5) Recent trauma ya fall ke baad kandhe mein dard aur deformity ho — fracture check karwayein. (6) 6 hafte se zyada dard hai aur koi improvement nahi — professional evaluation zaroor karwayein.',
    },
  ],

  sources: [
    { _key: 's1', name: 'CCRH (Council for Research in Homoeopathic Medicine) Annual Report 2019-20 | ccrhindia.nic.in' },
    { _key: 's2', name: "Kelley's Textbook of Rheumatology — Adhesive Capsulitis Chapter | 10th Ed" },
    { _key: 's3', name: 'American Academy of Orthopaedic Surgeons (AAOS) — Frozen Shoulder Patient Guide | 2022 | orthoinfo.aaos.org' },
    { _key: 's4', name: 'Mayo Clinic — Frozen Shoulder: Symptoms & Causes | 2023 | mayoclinic.org' },
    { _key: 's5', name: 'Indian Journal of Research in Homoeopathy — Musculoskeletal Studies | 2018' },
    { _key: 's6', name: 'Manske RC, Prohaska D — Diagnosis and management of adhesive capsulitis | Current Reviews in Musculoskeletal Medicine | 2008' },
  ],
}

async function seed() {
  console.log('🌱 Seeding Frozen Shoulder (Adhesive Capsulitis)...')
  await client.createOrReplace(disease)
  console.log('✅ Frozen Shoulder created/updated: disease-frozen-shoulder')
  console.log('🌐 Live at: https://homeopedia.in/diseases/frozen-shoulder')
}

seed().catch(console.error)
