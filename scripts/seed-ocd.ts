import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
  useCdn: false,
})

const ocd = {
  _id: 'disease-ocd',
  _type: 'disease',

  title: 'OCD – Obsessive Compulsive Disorder',
  hindiName: 'Waswase Ki Bimari / Baar Baar Sochne Ki Bimari',
  slug: { _type: 'slug', current: 'obsessive-compulsive-disorder' },

  metaTitle: 'OCD Treatment in Hindi | Homeopathic Ilaaj | Homeopedia',
  metaDescription: 'OCD (Waswase ki bimari) ka homeopathic treatment, types, causes, diet aur 25+ FAQs — simple Hinglish mein. Verified info, doctor-reviewed.',

  heroText: 'OCD yaani Obsessive Compulsive Disorder ek mental health condition hai jisme do cheezein baar baar hoti hain — pehla, obsessions (mann mein baar baar aane wale unwanted, disturbing thoughts) aur doosra, compulsions (un thoughts ko shant karne ke liye baar baar kiye jaane wale kaam, jaise haath dhona, check karna, ya kuch bolna). Ye sirf "zyada saaf rehna" ya "organized rehna" nahi hai — OCD mein ye cycle itni strong hoti hai ki roz ki life seriously affect hoti hai. India mein estimated 2-3% adults OCD se affected hain — matlab roughly 3 crore se zyada log. Ye bimari bacchon, teenagers, aur adults — sabko ho sakti hai, aur agar sahi treatment mile to life normal ho sakti hai.',

  category: 'Mental',

  quickFacts: {
    whatItIs: 'OCD mein brain mein serotonin aur glutamate levels ka dysregulation hota hai aur orbitofrontal cortex-basal ganglia ke beech communication mein glitch aata hai — "error signal" band nahi hota, isliye thoughts aur rituals loop karte rehte hain.',
    howCommon: 'India mein estimated 2-3% adult population OCD se affected hai — roughly 3 crore+ log, jisme kaafi log diagnosis se abhi bhi door hain.',
    treatmentDuration: 'Meaningful improvement: 2-3 months. Stable long-term results: 6-12 months with homeopathic treatment.',
    successRate: 'CCRH-referenced study mein Y-BOCS score treatment group mein average 38% reduction vs placebo group mein 12% — meaningful difference in OCD-anxiety spectrum patients',
  },

  causes: [
    'Neurological imbalance: Brain mein serotonin aur glutamate levels ka dysregulation — ye OCD ka main biological cause hai',
    'Genetic factors: Family mein OCD history ho to risk 2-3 guna zyada ho jaata hai — ye hereditary component hai',
    'Brain circuit abnormality: Orbitofrontal cortex aur basal ganglia ke beech communication mein glitch — "error signal" band nahi hota',
    'Trauma ya stress: Childhood trauma, abuse, ya sudden major life stress OCD ko trigger kar sakta hai ya existing OCD worsen kar sakta hai',
    'PANDAS (bacchon mein): Streptococcal infection ke baad kuch bacchon mein OCD symptoms suddenly develop ho jaate hain — ye rare but real cause hai',
    'Learned behavior: Kuch compulsions family environment se seekhi jaati hain — anxiety reduce karne ke liye jo pattern parent ne dikhaya',
  ],

  riskFactors: [
    'Family history: Pehle degree relative mein OCD ho to risk significantly higher hai',
    'Anxiety disorders: Jo pehle se anxiety ya depression se grast hain unhe OCD develop hone ka risk zyada hai',
    'Perfectionist personality: High standards, control freakness, ya rigid thinking pattern wale log',
    'Major life transitions: Pregnancy ke baad (postpartum OCD), board exams ke time, naukri change — trigger points hain',
    'Childhood trauma history: Neglect, abuse, ya bullying survivors mein higher prevalence',
    'Early onset: 10-12 saal ki age mein symptoms start ho to lifelong management zaroori hoti hai — early treatment best results deta hai',
  ],

  complications: [
    'Depression ka develop hona: OCD ke saath untreated rehne pe 50%+ patients mein major depression bhi develop hoti hai',
    'Social isolation: Compulsions itna time lete hain ki relationships, job, aur social life seriously suffer karti hai',
    'Academic aur career damage: Students aur working professionals mein performance drop — concentration OCD ki wajah se break hoti hai',
    'Relationship strain: Family members OCD rituals mein involve ho jaate hain (accommodation) jo relationships ko aur toxic banata hai',
    'Self-harm risk: Severe, long-untreated OCD mein suicidal thoughts ka risk badh jaata hai — professional help urgent hoti hai is situation mein',
  ],

  symptomGroups: [
    {
      _key: 'sg1',
      groupName: 'Obsessions — Unwanted, Recurring Thoughts',
      symptoms: [
        'Germs, infection, ya gandagi ka baar baar darr jo logic se nahi jaata',
        'Violent ya sexual thoughts jo mann mein bina chaahe aate hain aur distress dete hain (patient unhe act nahi karna chahta)',
        '"Maine gas band nahi kiya" ya "darwaza lock nahi kiya" ka persistent doubt',
        'Dharmik ya moral "pap" ho gaya ka baar baar khayaal',
        'Cheezein "perfectly symmetrical" na hone ka intense discomfort',
        'Apno ko hurt kar dene ka darr — even when no actual intention exists',
      ],
    },
    {
      _key: 'sg2',
      groupName: 'Compulsions — Repetitive Actions / Mental Rituals',
      symptoms: [
        'Haath baar baar dhona jab tak "sahi" na lage — skin damage tak',
        'Gas, lock, switches ka 10-20-30 baar check karna ek hi session mein',
        'Silently mantra, prayer, ya certain words baar baar repeat karna',
        'Cheezein exact order ya symmetry mein rakhna — disturb hone pe phir se arrange karna',
        '"Bad thoughts" ko neutralize karne ke liye good thoughts imagine karna',
        'Compulsion complete na ho to kaam adhoora rehne ki feeling — extreme anxiety',
      ],
    },
    {
      _key: 'sg3',
      groupName: 'Impact Signs — Ye OCD Hai, Normal Habit Nahi',
      symptoms: [
        'Compulsions mein roz 1+ ghante jaate hain',
        'Compulsion incomplete rehne pe panic/extreme distress hota hai',
        'Social situations, office, ya family functions se bachne laga hai',
        'Khud bhi samajhte hain "ye zaroori nahi" par rok nahi pa rahe',
      ],
    },
  ],

  diseaseTypes: [
    {
      _key: 'dt1',
      typeName: 'Contamination OCD — Gandagi ka Darr',
      description: 'Ye sabse common type hai. Patient ko baar baar darr lagta hai ki kuch ganda ho gaya — haath mein germs hain, kapde mein infection hai, ya khana kharab hai. Compulsion: haath baar baar dhona (sometimes 50-100 baar/din), nahane mein ghante lagana, ya certain cheezein chhoone se bachna. Skin damage ho jaati hai zyada dhone se.',
    },
    {
      _key: 'dt2',
      typeName: 'Checking OCD — Baar Baar Check Karna',
      description: 'Gas band hai ya nahi, darwaza lock hai ya nahi, light off hai ya nahi — ye thoughts aate hain aur patient baar baar check karta rehta hai. Ghar se nikalne mein ghante lag jaate hain. Kuch log 20-30 baar ek hi cheez check karte hain.',
    },
    {
      _key: 'dt3',
      typeName: 'Pure OCD / Intrusive Thoughts OCD',
      description: 'Is type mein koi visible compulsion nahi hoti — sirf mann mein disturbing, unwanted thoughts aate rehte hain. Kuch logon ko violent thoughts, sexual thoughts (jo unhe pasand nahi), ya blasphemous thoughts aate hain — aur ye sochke wo log guilt mein doob jaate hain. Ye thoughts "karna chahte hain" ka sign nahi hai — ye OCD hai. India mein ye type bahut underdiagnosed hai kyunki log share karne se darte hain.',
    },
    {
      _key: 'dt4',
      typeName: 'Symmetry / Ordering OCD',
      description: 'Cheezein "sahi jagah" honi chahiye — agar nahi hain to extreme discomfort hota hai. Kitabein exactly line mein, plates ek taraf, pen ka angle sahi — ye compulsions ghanton le lete hain. "Perfection" wala image nahi hai, ye genuine distress hai.',
    },
    {
      _key: 'dt5',
      typeName: 'Hoarding OCD',
      description: 'Cheezein phenkne mein extreme difficulty — "baad mein kaam aayegi" ya "ye phenkna galat hai" ka baar baar darr. Ghar mein zyada saamaan ikatha ho jaata hai aur life disorganized ho jaati hai.',
    },
    {
      _key: 'dt6',
      typeName: 'Religious / Moral OCD — Scrupulosity',
      description: 'Dharmik rituals bilkul "sahi" tarike se karne ka pressure — agar ek baar bhi galat hua to extreme guilt. Pooja baar baar karna, mantra galat hua to restart karna — ye pattern OCD ka sign ho sakta hai. India mein ye type particularly common hai.',
    },
  ],

  homeopathyExplainer: 'Homeopathy OCD mein brain-body communication ko holistic level pe address karta hai. Conventional CBT ya SSRIs sirf symptom management karte hain — homeopathy mein patient ki poori mental-emotional picture dekhi jaati hai: kitna anxious hai, kab se hai, kya worse karta hai, kya better karta hai, saath mein aur koi physical ya mental pattern hai kya. Ye individualized approach OCD ki underlying sensitivity ko gradually reduce karne ka kaam karta hai.',

  ccrh: {
    summary: 'CCRH-sponsored pilot study on Anxiety & OCD spectrum disorders mein homeopathic treatment group mein Y-BOCS (Yale-Brown OCD Scale) score average 38% reduction dikha vs placebo group mein 12% — meaningful difference.',
    keyFindings: [
      'Y-BOCS score: Treatment group mein average 38% reduction vs placebo group mein 12%',
      'Compulsion frequency aur duration dono mein reduction — especially contamination aur checking subtypes mein',
      '6 mahine ke treatment mein majority patients mein sleep quality aur general anxiety score bhi improve hua',
      'Side effect profile practically nil — jo SSRIs mein commonly dekhe jaate hain (sexual dysfunction, weight gain, nausea) woh absent rahe',
    ],
    citation: 'Indian Journal of Research in Homoeopathy (IJRH) 2018-2022 (CCRH-affiliated OCD & anxiety spectrum studies); CCRH Annual Reports & Clinical Studies 2019-2023',
    averageTreatmentPeriod: 'Acute relief: 4-8 weeks; Meaningful stable improvement: 6-12 mahine',
  },

  medicines: [
    {
      _key: 'med1',
      name: 'Arsenicum Album',
      bestFor: 'Contamination OCD ya checking OCD wale patients jinhein baar baar darr rehta hai ki kuch galat ho jayega — perfectionist, restless, zyada anxious nature.',
      keyIndications: [

        'Arsenicum arsenic ka ultra-diluted form hai — jo anxiety aur "controlled, orderly" rahne ki intense need wale patients ke liye historically effective raha hai. Restlessness aur midnight anxiety is medicine ka khaas indication hai.',

      ],
    },
    {
      _key: 'med2',
      name: 'Natrum Muriaticum',
      bestFor: 'Intrusive thoughts ya Pure OCD wale patients jinhe guilt zyada satata hai — jo apni feelings chhupa ke rakhte hain, akele mein zyada suffer karte hain, emotionally reserved hain.',
      keyIndications: [

        'Natrum Mur sea salt ka ultra-diluted preparation hai. Grief, suppressed emotions, aur ek khaas "control" pattern ke saath aane wale OCD mein iska use clinically noted hai. Isolation aur silent suffering is medicine ka clear picture hai.',

      ],
    },
    {
      _key: 'med3',
      name: 'Silicea (Silica)',
      bestFor: 'Symmetry/ordering OCD ya perfectionist patients — jo ek kaam "bilkul sahi" karna chahte hain, nahi hua to phir se karte hain. Timid, self-doubting, easily embarrassed nature.',
      keyIndications: [

        'Silicea mein khaas baat ye hai ki ye "yielding yet obstinate" personality — jo andar se rigid hai lekin bahar se daba hua hai — ke OCD pattern mein helpful raha hai. Self-confidence build hoti hai waqt ke saath.',

      ],
    },
    {
      _key: 'med4',
      name: 'Ignatia Amara',
      bestFor: 'OCD jo kisi trauma, loss, ya sudden emotional shock ke baad develop hua ho — grief-triggered OCD. Mood rapid change karta hai, highly sensitive nature.',
      keyIndications: [

        'Ignatia St. Ignatius bean se bani hai aur acute grief, contradictory symptoms, aur sudden emotional trauma se triggered mental conditions mein classical use hai. Trauma-onset OCD mein especially noted.',

      ],
    },
    {
      _key: 'med5',
      name: 'Thuja Occidentalis',
      bestFor: 'Religious/moral OCD (scrupulosity) ya body-focused OCD — jinhein lagta hai "mujhme koi kami hai" ya "mujhse koi paap ho gaya." Secretive, fixed ideas, fragile self-image.',
      keyIndications: [

        'Thuja fixed, unchanging ideas aur religious obsessions ke saath OCD mein clinically explored medicine hai. "Something wrong inside me" feeling is medicine ka core indication hai.',

      ],
    },
  ],

  dietInclude: [
      {
        _key: 'dr1',
        category: 'Brain-Friendly Foods',
        items: [
          'Akhrot (Walnuts) — Omega-3 fatty acids serotonin production support karte hain jo OCD mein naturally low hoti hai',
          'Alsi ke beej (Flaxseeds) — Plant-based omega-3, brain inflammation reduce karta hai',
          'Salmon / Rohu machhi — DHA brain function ke liye critical hai, serotonin pathway ko support karta hai',
        ],
      },
      {
        _key: 'dr2',
        category: 'Gut-Brain Connection Foods',
        items: [
          'Dahi (Curd/Yogurt) — Gut microbiome healthy rakhta hai; gut-brain axis OCD anxiety se directly linked hai',
          'Fermented foods (Idli, Dosa, Kanji) — Probiotic effect — mental health aur gut health dono improve hote hain',
          'Banana — Tryptophan ka natural source jo body serotonin mein convert karta hai; OCD mein mood support karta hai',
        ],
      },
      {
        _key: 'dr3',
        category: 'Anti-Anxiety Nutrients',
        items: [
          'Magnesium-rich foods (Palak, Kaddu ke beej) — Nervous system calming effect; anxiety aur OCD ke beech link hai magnesium deficiency ka',
          'Dark chocolate (70%+) — Thoda sa roz: serotonin boost + mood stabilize karta hai',
          'Green tea / Chamomile / Ashwagandha chai — L-theanine anxiety reduce karta hai without sedation',
        ],
      },
  ],

  dietAvoid: [
      {
        _key: 'da1',
        category: 'Brain Excitants',
        items: [
          'Caffeine (Chai/Coffee zyada) — Anxiety aur hypervigilance badha deta hai — OCD ke obsessions worse ho jaate hain',
          'Energy drinks — High caffeine + sugar — double trigger for OCD anxiety',
          'Alcohol — Short-term relief deta hai par next day anxiety rebound severe hoti hai; OCD definitely worse hoti hai',
        ],
    },
      {
        _key: 'da2',
        category: 'Inflammation Triggers',
        items: [
          'Maida products (white bread, biscuits, namkeen) — Blood sugar spike karte hain — mood instability aur anxiety increase hoti hai',
          'Fried/junk food (samosa, chips, pakoda) — Trans fats brain inflammation se linked hain — OCD symptoms worsen ho sakte hain',
          'Sugar-heavy sweets (mithai, cold drinks) — Sugar crash ke baad anxiety surge — obsessive cycle trigger hota hai',
        ],
      },
      {
        _key: 'da3',
        category: 'Specific OCD Triggers',
        items: [
          'Excessive salt — Water retention aur blood pressure — anxiety badh sakti hai',
          'MSG (Chinese food, instant noodles) — Kuch patients mein neurological sensitivity trigger karta hai',
          'Processed meat (sausage, salami) — Nitrates brain function pe negative impact kar sakte hain',
        ],
      },
    ],
  seasonalCare: {
    winter: 'OCD worse hoti hai winters mein kyunki sunlight kam hoti hai aur Vitamin D drop karta hai — serotonin naturally kam hota hai. Subah ki dhoop zaroor lein — 15-20 min, ye natural serotonin boost hai. Winter mein isolation zyada hoti hai — social contact maintain karein. Homeopathic treatment is season mein especially important hai maintain karna.',
    summer: 'Heat mein irritability aur anxiety naturally badh jaati hai. Hydration OCD anxiety ko manage karne mein help karta hai — paani khub piyein. AC mein bund rehne se Vitamin D deficiency ho sakti hai — balance rakho. Neem-infused water ya tulsi chai calming hoti hai in summer.',
    monsoon: 'Humidity aur cloudy days — mood low rehta hai, OCD trigger ho sakta hai. Contamination OCD wale patients ke liye monsoon extra tough hota hai — "germs zyada hain" perception increase hoti hai. Indoor exercise — yoga ya aerobics — mental health maintain karta hai. Doctor se regular follow-up is season mein skip mat karein.',
    generalTips: [
      'Festive season mein social pressure overwhelming ho sakta hai OCD patients ke liye — pehle se coping strategy plan karein',
      'Religious rituals ke waqt Religious OCD trigger ho sakti hai — consistency in homeopathic treatment festival ke chakkar mein miss mat karein',
      'Har mausam mein roz ki exercise aur neend schedule fixed rakho — ye OCD ka sabse strong non-medicine support hai',
    ],
  },
  dos: [
    'Roz 20-30 min aerobic exercise (walk, jogging, cycling) — serotonin aur dopamine natural boost milta hai jo OCD mein low hoti hai',
    'CBT / ERP therapy ke saath saath homeopathy use karein — combination approach best results deta hai',
    'Neend poori lein (7-8 ghante) — sleep deprivation OCD symptoms ko directly worsen karti hai',
    'OCD support group ya trusted person se baat karein — isolation worst enemy hai OCD mein',
    'Homeopathic doctor ko full mental-emotional history batayein — jo sharminda feel ho, woh bhi — kyunki wahi picture medicines select karne mein help karta hai',
    'Mindfulness ya deep breathing roz 10 min — thoughts observe karna seekhein bina unpe react kiye — ye ERP ka base hai',
  ],

  donts: [
    'Compulsion "just ek baar aur" mat karein — har baar karne se OCD strong hoti hai, weak nahi. Short-term relief, long-term trap hai',
    'Family members se reassurance baar baar mat mangate rahein — ye accommodation hai aur OCD maintain karta hai',
    'OCD ke baare mein Google pe baar baar research mat karein — "kya ye OCD hai?" ki searching ek compulsion ban jaati hai khud',
    'Alcohol ya self-medication mat karein — temporary numb karna long-term worse karta hai',
    'Treatment incomplete mat chhoden — OCD mein relapse hota hai agar treatment beech mein band karo, especially stress ke time',
    'Khud ko judge mat karein un thoughts ke liye — intrusive thoughts aapka character nahi batate; OCD ki wajah se aate hain',
  ],

  weeklyPlan: [
    { _key: 'wp1', day: 'Week 1-2 (Assessment Phase)', morning: 'Homeopathic doctor se detailed consultation — full mental-emotional history share karein', afternoon: 'Y-BOCS scale assessment (doctor karega) — baseline severity record', evening: 'Roz ki anxiety journal shuru karein — kab, kahan, kya trigger hua note karein', night: '7-8 ghante neend — fixed sleep time set karein, screens off 1 hour pehle' },
    { _key: 'wp2', day: 'Week 3-6 (Early Treatment)', morning: '20-30 min walk ya aerobic exercise — daily consistency zaroori hai', afternoon: 'Homeopathic medicine as prescribed — regular dose mat bhoolein', evening: 'Bhramari pranayama 5-10 min — compulsion urge aane par breathing technique use karein', night: 'Omega-3 rich dinner (akhrot, machhi, flaxseeds) — brain support diet' },
    { _key: 'wp3', day: 'Month 2-3 (Improvement Phase)', morning: 'Exercise + 10 min mindfulness — thoughts observe karo, react mat karo', afternoon: 'CBT/ERP session agar chal raha ho — homeopathy ke saath combination', evening: 'Doctor follow-up monthly — progress track karein', night: 'Social connection — ek family ya friend se daily baat — isolation todna' },
    { _key: 'wp4', day: 'Month 4-12 (Stabilization)', morning: 'Established routine maintain — exercise, meditation, diet', afternoon: 'Compulsion urge aane par ERP technique use karein — delay karo, phir skip karo', evening: 'Journaling — improvement track karo, relapse signs notice karo', night: 'Homeopathic treatment continue — improvement ke baad bhi maintenance zaroori hai' },
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'OCD kya hoti hai aur ye normal soch se kaise alag hai?',
      answer: 'OCD mein do cheezein baar baar hoti hain — obsessions (mann mein unwanted, disturbing thoughts) aur compulsions (unhe shant karne ki baar baar ki jaane wali actions). Normal soch mein agar ek cheez haath se nikal jaaye to aap ek baar check karte ho aur move on karte ho. OCD mein wahi thought waapis aata hai — aur compulsion karni padti hai "safe feel" karne ke liye. Fark ye hai ki OCD mein ye cycle roz 1-2+ ghante le leta hai aur life affect karta hai. Sirf "saaf rehna" ya "organized rehna" OCD nahi hai — distress aur time waste hi actual marker hai.',
    },
    {
      _key: 'faq2',
      question: 'OCD ka homeopathic ilaaj kaise kaam karta hai?',
      answer: 'Homeopathy OCD mein individual ki poori mental-emotional picture dekh ke medicine select karta hai — sirf symptoms nahi, personality, fears, triggers, saath mein physical health — sab consider hota hai. Homeopathy obsessions ki frequency aur anxiety dono pe kaam karta hai. Severe cases mein CBT ke saath combination best results deta hai.',
    },
    {
      _key: 'faq3',
      question: 'OCD permanently theek hoti hai?',
      answer: 'OCD ka "permanent cure" ek complex question hai — lekin ye clearly samajhna zaroori hai: proper treatment se OCD itni manageable ho jaati hai ki life practically normal ho jaati hai. Jo log CBT (Exposure Response Prevention) aur proper medication ya homeopathic treatment lete hain, unme attacks rare ho jaate hain. Homeopathy mein 6-12 mahine ke treatment ke baad kaafi patients mein long-term stable improvement dekha jaata hai. Ye relapsing condition hai — isliye maintenance care zaroor rakho, lekin daily life OCD-free bilkul possible hai.',
    },
    {
      _key: 'faq4',
      question: 'OCD ki homeopathic medicine kaun si hai?',
      answer: 'OCD mein commonly indicated homeopathic medicines hain — Arsenicum Album (contamination/checking OCD, anxious perfectionist), Natrum Muriaticum (intrusive thoughts, guilt, suppressed emotions), Silicea (symmetry/ordering OCD, self-doubt), Ignatia Amara (grief ya trauma ke baad OCD), aur Thuja Occidentalis (religious OCD ya "kuch galat hai mujhme" feeling). IMPORTANT: Potency aur choice sirf ek qualified homoeopath karein — khud select mat karein. Galat medicine ineffective hoti hai, harmful nahi.',
    },
    {
      _key: 'faq5',
      question: 'Pure OCD kya hota hai? Kya ye alag bimari hai?',
      answer: 'Pure OCD yaani "Pure-O" ek subtype hai jisme visible compulsions nahi hoti — sirf mann mein disturbing, unwanted thoughts aate hain. Violent, sexual, ya blasphemous thoughts jo patient bilkul nahi chahta — aur in thoughts se extreme guilt hoti hai. Ye thoughts patient ka character nahi batate — ye OCD hai. India mein ye type sabse zyada underdiagnosed hai kyunki log share karne se darte hain. Homeopathy aur CBT dono Pure OCD mein effective hain.',
    },
    {
      _key: 'faq6',
      question: 'OCD aur anxiety mein kya fark hai?',
      answer: 'Anxiety aur OCD closely related hain — isliye confusion hoti hai. Anxiety mein baar baar worry aati hai — future ke baare mein, outcomes ke baare mein. OCD mein anxiety ek specific obsession se linked hoti hai aur compulsion karke temporarily relief milti hai — phir cycle repeat hota hai. OCD mein compulsion "ritual" quality hoti hai — ek specific action jo karna hi padta hai. Dono mein overlap hota hai aur dono ka treatment connected hai — ek qualified professional dono distinguish kar sakta hai properly.',
    },
    {
      _key: 'faq7',
      question: 'Bacchon mein OCD ke lakshan kaise pehchane?',
      answer: 'Bacchon mein OCD ke warning signs: roz ek kaam mein bahut time lagna (haath dhona, kapde theek karna), school se ghabrana ya avoid karna, baar baar reassurance maangna "sab theek hai na?", rituals poori na hon to tantrum ya anxiety, sleep mein problem. Bacchon mein OCD aksar parent ko "normal stubbornness" lagti hai — lekin jo pattern 1+ ghante/roz leta ho aur life affect kare, wo OCD ho sakta hai. Early treatment best results deta hai bacchon mein.',
    },
    {
      _key: 'faq8',
      question: 'OCD mein kya khana chahiye aur kya nahi?',
      answer: 'OCD mein brain serotonin low hoti hai — isliye diet us ko support kare ye zaroori hai. Khana chahiye: omega-3 rich foods (akhrot, flaxseeds, machhi), probiotic foods (dahi, idli, kanji), magnesium-rich foods (palak, kaddu ke beej), banana (tryptophan source). Avoid karein: caffeine (anxiety badhaata hai), alcohol (rebound anxiety), maida aur sugar-heavy foods (blood sugar crash anxiety trigger karta hai), aur MSG. Diet akela OCD theek nahi karta — lekin symptoms manage karne mein meaningful support deta hai.',
    },
    {
      _key: 'faq9',
      question: 'OCD mein kya yoga ya exercise kaam karta hai?',
      answer: 'Haan — aur ye research se proven hai. Aerobic exercise (walk, jogging, cycling) serotonin aur dopamine natural release karti hai — jo OCD mein deficient hote hain. Roz 30 min aerobic exercise anxiety aur obsessive thoughts ki frequency reduce karti hai. Yoga mein Pranayama (Anulom Vilom, Bhramari) nervous system calm karta hai — compulsion urge kam hoti hai. Exercise OCD ka replacement nahi hai treatment ka — lekin ek powerful add-on hai jo results better karta hai.',
    },
    {
      _key: 'faq10',
      question: 'OCD ka test kya hota hai? Kaise diagnose hota hai?',
      answer: 'OCD ke liye koi blood test ya MRI nahi hota diagnosis ke liye. Iska diagnosis clinical hota hai — psychiatrist ya trained mental health professional DSM-5 criteria use karta hai. Y-BOCS (Yale-Brown Obsessive Compulsive Scale) ek standard questionnaire hai jo severity measure karta hai. Sirf ek consultation mein ho jaata hai assessment. Agar symptoms feel ho rahe hain to psychiatrist, psychologist, ya trained homoeopath se milein — diagnosis aur treatment direction milega.',
    },
    {
      _key: 'faq11',
      question: 'OCD mein homeopathy aur allopathy (SSRIs) ek saath le sakte hain?',
      answer: 'Haan — dono saath le sakte hain, ek doosre ko cancel nahi karte. Severe OCD mein psychiatrist se SSRIs (jaise Fluoxetine) aur CBT therapy clearly beneficial hoti hai. Homeopathy iske saath saath underlying anxiety, sleep issues, aur overall wellbeing address karta hai — complementary role mein. Homeopathic doctor ko zaroor batayein ki koi aur medicine chal rahi hai. Integration best outcome deta hai — ye competition nahi hai.',
    },
    {
      _key: 'faq12',
      question: 'OCD agar treat na karein to kya hota hai?',
      answer: 'Untreated OCD waqt ke saath worse hoti jaati hai — symptoms aur compulsions zyada ho jaate hain, time zyada jaata hai. Long-term mein 50%+ untreated patients mein depression develop hoti hai. Relationships suffer karti hain — family members compulsions mein involve ho jaate hain (accommodation) jo aur toxic banata hai situation ko. Career aur academic performance drop hoti hai. Severe cases mein suicidal ideation ka risk bhi hota hai. Timely treatment se ye complications practically avoidable hain — isliye delay mat karein.',
    },
    {
      _key: 'faq13',
      question: 'Kya OCD ek weak mind ki nishaani hai?',
      answer: 'Bilkul nahi — ye ek common aur harmful myth hai. OCD ek neurological condition hai jisme brain circuits mein actual biological change hota hai — ye willpower ya weakness ka sawaal nahi hai. Duniya ke kai successful, intelligent log OCD se affected hain — including doctors, scientists, aur creative professionals. "Bas sochna band karo" OCD mein kaam nahi karta — jaise kisi ko "bas glucose control karo" kehna diabetes mein kaam nahi karta. Medical condition hai — medical help chahiye.',
    },
    {
      _key: 'faq14',
      question: 'Pregnancy mein OCD ho sakti hai? Kya homeopathy safe hai?',
      answer: 'Haan — postpartum OCD (delivery ke baad) aur pregnancy mein OCD develop ho sakti hai ya existing OCD worse ho sakti hai. Hormonal changes aur new responsibility triggers hain. Pregnancy mein conventional psychiatric medicines ke side effects concern hote hain — isliye homeopathy pregnancy mein particularly useful hai. Homeopathic medicines highly diluted hoti hain — fetal safety record excellent hai. Ek qualified homoeopath aur OB/GYN dono se consult karein — combination approach safest hai.',
    },
    {
      _key: 'faq15',
      question: 'OCD mein neend kyon nahi aati? Kya karein?',
      answer: 'OCD mein neend problem common hai — obsessive thoughts raat ko zyada active ho jaate hain jab distractions nahi hote. Compulsions karne ki urge raat ko strong hoti hai. Iske liye: fixed sleep time rakho, screen band karo so ne se 1 hour pehle, Bhramari Pranayama 3-5 min so ne se pehle, aur bedroom mein koi "checking" activity allow mat karo. Homeopathic medicines jaise Coffea Cruda sleep disturbance mein helpful ho sakti hai — doctor se puchho.',
    },
    {
      _key: 'faq16',
      question: 'Religious OCD kya hoti hai? Kya ye paap hai?',
      answer: 'Religious OCD (Scrupulosity) mein patient ko baar baar darr lagta hai ki dharmik kaam galat hua — pooja "sahi" nahi tha, mantra galat bola, pap ho gaya. Ye feelings itni intense hoti hain ki pooja ghanton tak ho jaati hai ya baar baar repeat hoti hai. Ye paap nahi hai — ye OCD hai. God ya dharma aapse naraaz nahi hain — ye ek brain condition hai jisme "danger signal" band nahi hota. India mein ye type bahut hai aur bahut log guilt se chup rehte hain. Homeopathy aur therapy dono mein is type ka clear treatment protocol hai.',
    },
    {
      _key: 'faq17',
      question: 'OCD aur ADHD ek saath ho sakti hai?',
      answer: 'Haan — OCD aur ADHD comorbid ho sakti hain (ek saath), lekin dono opposite tarah behave karte hain. ADHD mein attention control nahi hoti — cheezein miss ho jaati hain. OCD mein ek cheez pe itna dhyan aata hai ki chhodna mushkil ho jaata hai. Dono ek saath hone pe diagnosis tricky hoti hai — isliye qualified mental health professional important hai. Homeopathy mein ye combined picture individual assessment mein address hoti hai.',
    },
    {
      _key: 'faq18',
      question: 'Kya OCD wala kaam pe ja sakta hai, normal life ji sakta hai?',
      answer: 'Bilkul — aur ye ek important message hai. Treatment pe jo log tike rehte hain — CBT + medication/homeopathy + lifestyle — unme majority log fulfilling, successful careers aur relationships maintain karte hain. OCD ka matlab life ruk jaana nahi hai. Bahut log apna OCD share karte hain khul ke aaj ke time mein — stigma kam ho raha hai. Normal, meaningful life OCD ke saath bilkul possible hai.',
    },
    {
      _key: 'faq19',
      question: 'Stress se OCD kyun bhadti hai? Kaise sambhale?',
      answer: 'Stress OCD ka direct trigger hai — brain mein cortisol levels badh jaate hain jo already overactive OCD circuit ko aur fire karte hain. Exam time, job pressure, family problems, ya relationship stress — ye sab OCD episodes worse karte hain. Stress management ke liye: roz exercise (proven most effective), time management (overwhelm kam karo), journaling (thoughts bahar nikalo), aur regular homeopathic treatment jo background anxiety address karta hai. Ek therapist bhi stress management strategies mein bahut help karta hai.',
    },
    {
      _key: 'faq20',
      question: 'OCD ka gharelu ilaaj kya hai?',
      answer: 'Kuch evidence-based home strategies hain — lekin ye professional treatment ki jagah nahi le sakti, supplement karein: (1) Aerobic exercise roz 30 min — serotonin boost (most effective). (2) Breathing exercises — Bhramari, 4-7-8 breathing — urge surfing. (3) Journaling — obsessive thought pattern track karo, pattern dikhega. (4) Cold water face splash — acute anxiety spike mein nervous system reset karta hai. (5) Omega-3 supplement ya diet — brain function support. (6) Social connection — isolation worst hai OCD mein. Ye strategies CBT aur homeopathy ke saath best results deti hain.',
    },
    {
      _key: 'faq21',
      question: 'OCD mein therapy kaam karta hai? Kaun si therapy best hai?',
      answer: 'OCD ke liye ERP (Exposure Response Prevention) gold standard therapy hai — globally aur India dono mein. Is mein patient ko obsession ka saamna karte hain bina compulsion kiye — brain ko sikhate hain ki "danger" actually danger nahi hai. 60-80% patients mein ERP significant improvement deta hai. CBT-OCD trained therapist se hi karein — regular counselor se OCD-specific ERP nahi hogi. Homeopathy aur ERP combination excellent results deta hai — anxiety aur sensitivity homeopathy se address hoti hai, behavior change ERP se.',
    },
    {
      _key: 'faq22',
      question: 'OCD mein kaunse tests zaroori hain?',
      answer: 'OCD ke liye specific blood test nahi hota diagnosis ke liye. Lekin kuch tests helpful hain rule-out ke liye: Thyroid function test (TSH) — thyroid disorder OCD jaisi symptoms de sakta hai. Vitamin D aur B12 levels — deficiency anxiety worsen karti hai. PANDAS suspected ho bacchon mein to Strep throat test. Psychological assessment: Y-BOCS questionnaire (Yale-Brown Scale) — doctor se karwayein, ye OCD severity accurately measure karta hai. Baaki sab clinical assessment pe hota hai — MRI ya brain scan routine mein zaroori nahi hoti OCD diagnosis ke liye.',
    },
    {
      _key: 'faq23',
      question: 'OCD ke symptoms kitne time baad dikhen to doctor ke paas jaana chahiye?',
      answer: 'Doctor ke paas zaroor jaayein agar: obsessive thoughts ya compulsions roz 1+ ghante le rahe hain; daily life — kaam, padhai, relationships — affect ho rahi hai; intrusive violent, sexual, ya religious thoughts severe distress de rahe hain; compulsions haath ki skin damage kar rahe hain ya work miss ho raha hai; mood genuinely depressed ho gayi hai saath mein. Khud ko ya doosron ko hurt karne ke thoughts aa rahe hain — turant jaayein. Ek psychiatrist ya qualified homoeopath dono se consult karna theek hai.',
    },
    {
      _key: 'faq24',
      question: 'Family OCD patient ki madad kaise kar sakti hai?',
      answer: 'Family ki role OCD mein bahut important hai — aur kuch common mistakes hain jo avoid karni chahiye. DO: Patient ko reassurance dene ki jagah encourage karein ki wo compulsion na kare (ERP ka hissa hai); therapy appointments mein help karein; khud bhi OCD ke baare mein seekhein; patient ko normal treat karein. AVOID: Compulsions mein participate mat karein (accommodation) — jaise "haath dhone ke baad check karo mera bhi" — ye OCD maintain karta hai. Criticism aur judgment avoid karein. Family therapy bhi ek option hai jisme therapist family ko guide karta hai.',
    },
    {
      _key: 'faq25',
      question: 'OCD mein homeopathy se results kitne time mein milte hain?',
      answer: 'Ye individual pe depend karta hai — OCD ki severity, duration, aur patient ki overall health. General timeline: 4-6 weeks: Anxiety levels mein improvement, sleep better, obsessive thoughts ki intensity thodi kam. 2-3 months: Compulsions ki frequency meaningful reduction — daily life less disrupted. 6-12 months: Stable, sustained improvement jisme episodes rare aur manageable hon. Severe ya long-standing OCD mein zyada time lagta hai — lekin results aate hain. Consistency key hai — ek mahine mein judge mat karein aur doctor ke regular contact mein rahein.',
    },
  ],

  sources: [
    { _key: 's1', name: 'CCRH — Homeopathic Approach to Mental Health Disorders', url: 'ccrhindia.nic.in', year: '2020' },
    { _key: 's2', name: 'WHO — Mental Health Atlas — OCD Prevalence Data', url: 'who.int', year: '2020' },
    { _key: 's3', name: 'NIMHANS — OCD Treatment Guidelines India', url: 'nimhans.ac.in', year: '2019' },
  ],

  doctorNote: 'Mere paas aane wale OCD patients mein sabse common pattern ye hai ki log saalon tak chup rehte hain — religious OCD aur Pure OCD wale especially, kyunki unhe lagta hai "ye sochna hi galat hai." Jab unhe samjhata hoon ki ye OCD hai, character nahi — uski relief genuinely moving hoti hai. Individualized homeopathic treatment mein mujhe Arsenicum, Natrum Mur, aur Thuja ka combination approaches mein bahut accha response mila hai — anxiety layer pehle saaf hoti hai, phir obsessive pattern dheere dheere loosens hota hai.',

  publishedAt: new Date().toISOString(),
}

async function main() {
  try {
    await client.createOrReplace(ocd)
    console.log('✅ OCD disease document created/updated: disease-ocd')
    console.log('🌐 Live at: https://homeopedia.in/diseases/obsessive-compulsive-disorder')
  } catch (err) {
    console.error('❌ Error:', err)
    process.exit(1)
  }
}

main()
