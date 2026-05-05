import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-delayed-milestones',
  _type: 'disease',
  title: 'Delayed Milestones / Global Developmental Delay',
  hindiName: 'Vikas Mein Deri / Bachche Ka Dheere Badhna',
  slug: { _type: 'slug', current: 'delayed-milestones' },
  category: 'Neurological',
  publishedAt: '2026-05-05T00:00:00.000Z',
  metaTitle: 'Bachche Ka Vikas Rokna – Homeopathic Treatment | Homeopedia',
  metaDescription: 'Bachche ke chalne, bolne, ya baithne mein deri? Jaanein delayed milestones ke karan, prakar, diet, aur homeopathic treatment ke baare mein.',

  heroText: 'Jab ek bachcha apni umar ke hisaab se expected skills – jaise baithna, khada hona, chalna, bolna, ya cheezein pakadna – expected time pe achieve nahi karta, isse Delayed Milestones ya Global Developmental Delay (GDD) kehte hain. Ye koi ek bimari nahi hai, balki ek aisi condition hai jisme bachche ka nervous system, muscles, ya brain development normal speed se nahi hota. India mein approximately 10-15% bacchon mein kisi na kisi prakar ki developmental delay dekhi jaati hai. Sahi samay pe diagnosis aur treatment shuru ho to bahut se bacchon mein remarkable improvement possible hai – homeopathy is process mein nervous system ko naturally support karne mein help karta hai.',

  quickFacts: {
    whatItIs: 'Bachche ka apni umar ke hisaab se expected milestones (chalna, bolna, baithna) late achieve karna; nervous system, brain ya muscle development ki slowness; early intervention se remarkable improvement possible',
    howCommon: 'India mein approximately 10-15% bacchon mein kisi na kisi prakar ki developmental delay; WHO estimate ke hisaab se 13 million+ children India mein some form of developmental disability ke saath',
    treatmentDuration: 'Mild cases – 3-6 mahine mein noticeable improvement; moderate cases – 1-2 saal consistent treatment; 0-3 saal ki age mein brain plasticity highest – early intervention sabse effective',
    successRate: 'Early intervention (0-3 years) mein best results; mild to moderate delay wale majority bacche proper treatment se normal ya near-normal life jite hain; combination approach (homeopathy + therapy) fastest progress',
  },

  causes: [
    'Genetic ya chromosomal conditions (jaise Down Syndrome, Fragile X) – specific chromosomal changes brain aur body development ko directly affect karte hain',
    'Pregnancy ke dauran infection, alcohol, ya medications ka exposure – first trimester mein brain formation pe sabse zyada asar',
    'Premature birth ya birth ke time oxygen ki kami (birth asphyxia) – brain ka oxygen-sensitive tissue damage ho sakta hai',
    'Severe malnutrition – especially iodine, iron, zinc ki kami jo brain development ke liye directly zaroori hain',
    'Brain injury ya serious illness in early childhood – meningitis/encephalitis ke baad neurological complications',
    'Unknown/Idiopathic cause – bahut se cases mein koi specific reason nahi milta; investigation ke baad bhi cause unclear rehta hai',
  ],

  riskFactors: [
    'Premature babies (37 weeks se pehle janam lene wale) – brain fully developed nahi hota; corrected age se assess karna chahiye',
    'Close family mein similar delay ki history – genetic predisposition kuch conditions mein',
    'Maa ko pregnancy mein thyroid, diabetes, ya infection – placenta ke through fetal brain pe impact',
    'Birth ke time NICU mein rehe bacche – prolonged hospitalization aur complications ka risk',
    'Low birth weight (2.5 kg se kam) – nutrition adequacy at birth directly linked hai development se',
    'Early childhood mein brain fever (meningitis/encephalitis) ke baad – recovery ke baad bhi neurological sequelae ho sakte hain',
  ],

  complications: [
    'School age tak seekhne mein bahut mushkil – academic problems, special education ki zaroorat; peer gap badhta jaata hai',
    'Social isolation aur peer interaction mein takleef – dost banana mushkil, group mein participate karna awkward lagta hai',
    'Self-esteem aur confidence ka khatam hona – baar baar fail hone ka feeling lifelong impact karta hai agar addressed na ho',
    'Adulthood mein independent living mein difficulty – early intervention se ye complication significantly reduced hoti hai',
  ],

  types: [
    {
      _key: 'type1',
      name: 'Motor Delay (Shareerik Vikas Mein Deri)',
      description: 'Jab bachcha baithna, khada hona, chalna, ya haath-pair chalana expected umar ke baad bhi nahi seekh pata. Muscles ki weakness ya nerve signals mein problem hoti hai. Mild (1-2 mahine ki deri – therapy se jaldi sudhar), Moderate (3-6 mahine ki deri – regular intervention zaroori), Severe (6+ mahine ki deri – often neurological cause involved).',
    },
    {
      _key: 'type2',
      name: 'Speech & Language Delay (Bolne Mein Deri)',
      description: 'Jab bachcha bolna, samajhna, ya apni baat express karna late seekhta hai. 2 saal tak 50 words aur 2-word sentences na aana is category mein aata hai. Expressive Delay (samajhta hai lekin bol nahi pata), Receptive Delay (bolna aur samajhna dono affected), Mixed Language Delay (dono areas mein pichhadapan).',
    },
    {
      _key: 'type3',
      name: 'Cognitive Delay (Samajhne Ki Shakti Mein Deri)',
      description: 'Problem-solving, cheezein yaad rakhna, nayi skills seekhna – ye sab normal speed se nahi hota. Intellectual Disability is category ka advanced form hai. Early cognitive stimulation aur structured learning se significant improvement possible hai.',
    },
    {
      _key: 'type4',
      name: 'Social & Emotional Delay (Samajik Vikas Mein Deri)',
      description: 'Bachcha logon se aankhein nahi milata, khelne mein interest nahi, emotions samajhna mushkil lagta hai. Often Autism Spectrum se overlap karta hai – isliye professional evaluation important hai. Social play aur peer interaction therapy mein focus hoti hai.',
    },
    {
      _key: 'type5',
      name: 'Global Developmental Delay – GDD',
      description: 'Jab ek saath 2 ya zyada areas (motor + speech + cognitive etc.) mein delay ho to isse Global Developmental Delay kehte hain. Ye sabse complex type hai aur isme multi-disciplinary treatment most effective hoti hai – developmental pediatrician, speech therapist, physiotherapist, aur homeopath saath milke kaam karein.',
    },
    {
      _key: 'type6',
      name: 'Fine Motor Delay (Chhoti Haath ki Movements Mein Deri)',
      description: 'Pencil pakadna, button lagana, cheezein arrange karna – ye sab fine motor skills hain. Inme deri alag se ya doosre delays ke saath aa sakti hai. Occupational therapy fine motor skills ke liye most effective intervention hai; homeopathy overall nerve aur muscle tone support karta hai.',
    },
  ],

  symptoms: [
    {
      _key: 'grp1',
      category: 'Red Flag Signs: Birth to 12 Months',
      items: [
        'Birth to 3 months: Awaz pe koi reaction nahi, chehra dekhne par muskurana nahi, sar bilkul nahi uthata',
        '4-6 months: Objects aankhon se track nahi karta, khud se awaazein (cooing/babbling) nahi karta',
        '7-12 months: 9 mahine tak koi gesture (wave/point) nahi, apna naam sunke react nahi karta, koi bhi chiz pakadne ki koshish nahi',
      ],
    },
    {
      _key: 'grp2',
      category: 'Red Flag Signs: 1 to 3 Years',
      items: [
        '1-2 years: 16 mahine tak ek bhi word nahi, 24 mahine tak 2-word phrases nahi, chalna 18 mahine tak shuru nahi',
        '2-3 years: Strangers ko samajhne wali baat nahi karta, simple instructions follow nahi kar pata',
        '2-3 years: Peers ke saath khelna nahi aata, eye contact avoid karta hai, repetitive behaviors',
      ],
    },
    {
      _key: 'grp3',
      category: 'General Developmental Concerns',
      items: [
        'Skills seekhne ke baad bhool jaana (regression) – pehle jo aata tha woh bhi chala gaya',
        'Bahut zyada ya bahut kam muscle tone – floppy baby ya extremely stiff movements',
        'Feeding problems – nipple/bottle se sahi se nahi chooste, solids nahi khate expected age pe',
        'Sleep patterns abnormal – bahut zyada ya bahut kam; restless nights',
        'Sensory issues – touch, sound, light se ya to bahut sensitive ya bilkul react nahi karta',
      ],
    },
  ],

  ccrhEvidence: {
    improvementRate: 'Complementary use mein promising results; nervous system support aur overall vitality improvement documented',
    avgTreatmentPeriod: '6 mahine se 2 saal (delay ki severity aur type ke hisaab se)',
    citation: 'Boericke\'s Materia Medica | Classical Homeopathic Reference | IAP Developmental Guidelines 2022 | WHO Global Child Development Guidelines 2023',
  },

  homeopathyBenefits: [
    'Homeopathy mein har bachche ko ek unique individual maana jaata hai – ek hi condition mein alag-alag bacchon ko alag dawaiyan di jaati hain, unki nature, physical built, aur developmental pattern ke hisaab se. Homeopathic medicines nervous system ko stimulate karti hain, brain ke connections improve karne mein help karti hain, aur overall vitality badhati hain – bina kisi chemical side effects ke. Ye physiotherapy, speech therapy, ya occupational therapy ke saath saath diya ja sakta hai aur bahut se cases mein complementary approach bahut effective rahi hai.',
    'Completely safe – no side effects, no dependency, suitable from birth; infants aur newborns mein bhi safely use hoti hai',
    'Constitutional treatment jo sirf delay nahi, pure child ko improve karta hai – immunity, energy, sleep, appetite sab better hoti hai',
    'Physiotherapy aur speech therapy ke saath saath le sakte hain – koi conflict nahi; therapies ka response better hota hai',
    'Long-term results – ek baar milne wala sudhar tikai rehta hai; relapse nahi hota agar properly treated ho',
  ],

  medicines: [
    {
      _key: 'med1',
      name: 'Baryta Carbonica',
      bestFor: 'Mentally aur physically dono mein bahut slow bachche – bolna, chalna, samajhna sab dheere. Shy, strangers se darate hain, akele nahi rehna chahte.',
      keyIndications: [
        'Overall growth ruka hua – physically bhi chhota lagta hai, mentally bhi slow; dono saath',
        'Strangers se bahut darta hai – chhupta hai, peeche chala jaata hai; shyness extreme level pe',
        'Bolna aur samajhna dono delayed – simple instructions bhi baar baar repeat karne padte hain',
      ],
    },
    {
      _key: 'med2',
      name: 'Calcarea Carbonica',
      bestFor: 'Mota, gol, fair skin wala bachcha jo milestones late achieve karta hai – dant late aana, chalna late seekhna. Bahut paseena aata hai sir pe, thanda pasand hai.',
      keyIndications: [
        'Paseena bahut – especially sir pe raat ko; pillow wet ho jaata hai',
        'Dant late aaye, chalna late seekha – calcium metabolism slow; physical milestones delay',
        'Mota aur fair – easily thak jaata hai; appetite achha hai lekin physically weak',
      ],
    },
    {
      _key: 'med3',
      name: 'Silicea',
      bestFor: 'Patla, kamzor, stubborn bachcha – muscles weak hain, easily thak jaata hai. Spine aur bones ka development slow, physical weakness primary concern.',
      keyIndications: [
        'Physically weak aur patla – muscles flabby, strength nahi; gir jaata hai easily',
        'Stubborn aur obstinate – apni baat nahi manenge; firm pe weak body pe contrast',
        'Infections baar baar – immunity weak; cold, cough, skin infections repeat hote hain',
      ],
    },
    {
      _key: 'med4',
      name: 'Aethusa Cynapium',
      bestFor: 'Bolne mein bilkul deri, communication almost nahi. Milk nahi pachta, easily anxious, concentrated nahi rehta – brain-gut connection disturbed.',
      keyIndications: [
        'Speech bilkul absent ya bahut delayed – expression minimum; frustration se ro deta hai',
        'Concentration zero – ek jagah nahi baithta, easily distracted, focus nahi',
        'Milk nahi pachta – vomiting ya loose motions; gut aur brain dono affected',
      ],
    },
    {
      _key: 'med5',
      name: 'Medorrhinum',
      bestFor: 'Hyperactive ya extremely restless bachche mein, social interaction difficult, milestones unpredictably delayed – superficial medicines kaam nahi karti.',
      keyIndications: [
        'Hyperactive aur restless – ek jagah nahi baithta, constantly move karta hai',
        'Social interaction difficult – peers ko ignore karta hai, eye contact avoid',
        'Deep-acting constitutional – jab baaki medicines kaam nahi karti; chronic stubborn cases',
      ],
    },
  ],

  dietInclude: [
    {
      _key: 'di1',
      category: 'Brain-Boosting Foods',
      emoji: '🧠',
      items: [
        'Akhrot (Walnuts) – Omega-3 fatty acids se bharpoor; brain cell development ke liye sabse zaroori; roz 2-3 (powder form if small child)',
        'Egg yolk – Choline provide karta hai jo neurotransmitter acetylcholine banane mein help karta hai; daily ek egg yolk',
        'Fatty fish (Rohu, Salmon) – DHA provide karta hai jo brain myelin sheath banata hai; hafte mein 2-3 baar',
        'Pumpkin seeds – Zinc aur magnesium; nerve signal transmission improve karta hai; snack mein dein',
      ],
    },
    {
      _key: 'di2',
      category: 'Iron & Hemoglobin ke liye',
      emoji: '🩸',
      items: [
        'Palak, methi, drumstick leaves – Iron ki kami se brain oxygen supply reduce hoti hai; daily sabzi mein shamil karein',
        'Chane, rajma, moong dal – plant-based iron + protein combination; lunch mein zaroor dein',
        'Dates (Khajoor) – Iron + natural sugar; energy aur hemoglobin dono ke liye; 2-3 roz',
      ],
    },
    {
      _key: 'di3',
      category: 'Gut Health & Absorption ke liye',
      emoji: '🫁',
      items: [
        'Homemade curd/dahi – gut bacteria balance karta hai jisse nutrients ka absorption improve hota hai; roz lunch mein',
        'Banana – easy to digest, potassium se nerve function support; afternoon snack',
        'Sweet potato – beta-carotene se Vitamin A; brain tissue protection; boiled ya baked dein',
        'Ragi (finger millet) – calcium, iron aur amino acids; khichdi ya laddoo form mein',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'Processed & Junk Food',
      emoji: '🚫',
      items: [
        'Chips, biscuits, noodles, packaged snacks – empty calories, koi nutrition nahi; brain ke liye harmful artificial preservatives',
        'Cold drinks, packaged juice – sugar spike se brain function disrupt hoti hai; fruit juice bhi fresh nikaala hua hi dein',
        'Maida-based food (white bread, pizza base) – gut inflammation badhata hai, nutrient absorption rokta hai',
      ],
    },
    {
      _key: 'da2',
      category: 'Artificial Additives Wali Cheezein',
      emoji: '🎨',
      items: [
        'Artificial food colors (red, yellow candy, colored drinks) – ADHD aur hyperactivity se linked; developmental delay worsen kar sakte hain',
        'MSG wale snacks (instant noodles, chips) – neurological toxicity se linked in sensitive children',
        'Market-made baby foods with preservatives – fresh homemade food always better; labels check karein',
      ],
    },
    {
      _key: 'da3',
      category: 'Allergy-Triggering Foods',
      emoji: '⚠️',
      items: [
        'Cow\'s milk (if intolerant) – gut inflammation se nutrient absorption block hoti hai; signs: bloating, loose motions, crankiness',
        'Gluten (wheat) if sensitivity hai – kuch bacchon mein cognitive delay aur gluten sensitivity linked hoti hai',
        'Too much sugar – zinc absorption block karta hai jo brain development ke liye critical hai; natural sweeteners better',
      ],
    },
  ],

  dos: [
    'Developmental pediatrician se early evaluation karwayein – jitni jaldi diagnosis, utni jaldi help milti hai; 2 mahine bhi delay mat karein',
    'Speech therapy, physiotherapy, ya occupational therapy regularly attend karein – homeopathy ke saath complementary hai; dono saath better',
    'Bachche ke saath zyada se zyada baat karein – language exposure brain connections banata hai; har kaam mein describe karte rahein',
    'Sensory play encourage karein – sand, water, clay, blocks – brain ke different areas activate hote hain; screen se zyada zaroori hai',
    'Routine maintain karein – same time pe khana, sona, therapy – brain routine se seekhta hai; changes confuse karte hain',
    'Har choti progress celebrate karein – bachche ki self-confidence ke liye zaroori hai; compare mat karein',
    'Parents khud bhi counseling ya support group join karein – caregiver stress bachche pe direct impact karta hai; akele mat rahein',
    'Subah ki dhoop mein 20-30 min zaroor baithao – Vitamin D brain development aur muscle strength ke liye critical hai',
  ],

  donts: [
    'Bachche ki comparison doosre bacchon se mat karein – har bachche ki apni pace hoti hai; comparison se anxiety badhti hai',
    'Screen time 2 saal se chhote bacchon ko bilkul mat dein – brain development ke critical years mein screen harmful hai; 2-5 years mein bhi limit 1 hour',
    '"Apne aap theek ho jayega" soch ke wait mat karein – early intervention se results drastically better hote hain; window miss mat karo',
    'Ek hi doctor ya therapy pe depend mat rahein – second opinion lena aur multi-disciplinary approach best hai',
    'Bachche pe zyada pressure mat daalein – forced learning se regression ho sakta hai; play-based learning better hai',
    'Homeopathic medicine beech mein khud se band mat karein – constitutional treatment mein time lagta hai; improvement slow dikhti hai par steady hoti hai',
    'Social activities se bachche ko isolate mat karein – peer interaction development ke liye critical hai; special needs groups bhi helpful hain',
    'Boys ke liye "late bolte hain" ya "apne aap aa jayega" myths pe believe mat karein – scientific evidence nahi; evaluation zaroor karwayein',
  ],

  seasonalCare: {
    summer: 'April-June: Bachche ko hydrated rakhein – din mein 6-8 bar liquid zaroor dein. Coconut water, aam panna, nimbu paani natural electrolytes ke liye. Heavy therapy sessions ko morning mein rakhein – heat stroke se bachao; brain pe directly effect padta hai. Fresh fruits zyada dein – watermelon, mango, cucumber. AC-dependent mat banao – natural air better hai development ke liye. Heat mein outdoor sensory play – sand, water play morning mein karwayein.',
    monsoon: 'July-September: Infection se bachao – school/therapy center mein hygiene important. Wet clothes se bachao – viral fever brain pe impact karta hai; fever 102F+ pe turant doctor. Fresh cooked food hi dein – bahar ka ya stale food avoid. Vitamin C foods zyada karein – amla, orange, guava – immunity ke liye. Outdoor activity safer jagah pe karein – slip injuries se bachao. Monsoon mein indoor sensory activities: clay, painting, puzzles – brain stimulation jaari rakhein.',
    winter: 'November-February: Vitamin D ke liye subah ki dhoop mein zaroor baithao – 20-30 min daily; sardi mein deficiency bahut common hai. Ghee, sesame (til), bajra – winter mein brain aur body nutrition ke liye best. Respiratory infections se bachao – development slow hoti hai beemari mein; flu vaccine consider karein. Agar therapy sessions outdoors hain to warm clothing zaroori. Sleep time badhao – brain growth sleep mein hoti hai; 10-12 ghante bachche ke liye. March aur October mein routine changes avoid karein – new therapy start karne ka best time hai.',
  },

  faqs: [
    {
      _key: 'faq1',
      question: 'Mere 18 mahine ke bachche ne abhi tak chalna shuru nahi kiya – kya ye normal hai?',
      answer: '12-15 mahine mein chalna expected hota hai. 18 mahine tak nahi chalna ek red flag hai aur developmental pediatrician se evaluation zaroori hai. Lekin ghabrayein nahi – physiotherapy aur timely treatment se bahut se bacche normal ho jaate hain. Jitni jaldi evaluation, utna better outcome.',
    },
    {
      _key: 'faq2',
      question: 'Delayed milestones aur autism mein kya fark hai?',
      answer: 'Developmental delay sirf motor ya speech mein ho sakta hai, aur kai cases mein koi social problem nahi hoti. Autism mein social communication, eye contact, repetitive behaviors – ye specifically affected hote hain. Dono overlap kar sakte hain, isliye professional diagnosis zaroori hai. Bina evaluation ke ghar pe assume karna sahi nahi hai.',
    },
    {
      _key: 'faq3',
      question: 'Kya delayed milestones wala bachcha normal life ji sakta hai?',
      answer: 'Haan, majority of children with mild to moderate delay with proper early intervention normal ya near-normal life jite hain. School attend karte hain, dost banate hain, aur grow karte hain. Severe cases mein bhi quality of life significantly improve hoti hai sahi support se.',
    },
    {
      _key: 'faq4',
      question: 'Homeopathic treatment mein kitna time lagta hai delayed milestones mein?',
      answer: 'Yeh bachche ki condition, age, aur delay ke type pe depend karta hai. Mild cases mein 3-6 mahine mein noticeable improvement dikh sakti hai. Moderate cases mein 1-2 saal ka consistent treatment effective hota hai. Ek qualified homeopath regular follow-up ke saath progress monitor karta hai.',
    },
    {
      _key: 'faq5',
      question: 'Kya physiotherapy ke saath homeopathy le sakte hain?',
      answer: 'Haan, bilkul. Homeopathy aur physiotherapy/speech therapy mein koi conflict nahi hai. In fact, bahut se parents ko combination approach mein faster progress milti hai. Homeopathy nervous system aur overall vitality support karta hai, jo therapies ka response better banata hai.',
    },
    {
      _key: 'faq6',
      question: 'Delayed milestones ka karan sirf genes hota hai ya kuch aur bhi?',
      answer: 'Genes ek factor hain, lekin sirf genes nahi. Birth complications, premature birth, nutrition ki kami, pregnancy mein infection, thyroid issues – ye sab bhi delay cause kar sakte hain. Genetic testing sirf tab recommend hoti hai jab clear genetic pattern ho ya chromosomal issue suspect ho.',
    },
    {
      _key: 'faq7',
      question: 'Mobile aur TV se developmental delay ka kya connection hai?',
      answer: 'Screen time 2 saal se chhote bacchon mein brain development slow karti hai – ye research proven hai. Screen par language passive hoti hai, real interaction active hoti hai. Active real-world play aur conversation se bahut zyada brain connections bante hain. Screen se bachao – especially 0-3 years mein.',
    },
    {
      _key: 'faq8',
      question: 'Agar mera bachcha speech delay mein hai to ghar pe kya karein?',
      answer: 'Har kaam karte waqt bachche se baat karte rahein ("ab hum haath dhoyenge", "yeh lal ball hai"). Songs, rhymes, aur storytime daily rakhein. Eye contact maintain karein. Simple, clear words use karein – ek baar mein zyada words mat bolein. Speech therapist se guided home program lein – ghar pe practice double effective hai.',
    },
    {
      _key: 'faq9',
      question: 'Kya delayed milestones hereditary hota hai?',
      answer: 'Kuch specific causes (jaise chromosomal conditions) hereditary hote hain. Lekin majority of cases mein delay genetic nahi hoti – it\'s due to birth factors, nutrition, or environment. Family history hone se risk thoda badh sakta hai, isliye second child mein zyada alert rehna chahiye.',
    },
    {
      _key: 'faq10',
      question: '2 saal ka bachcha abhi tak nahi bol raha – kab tak wait karein?',
      answer: 'Bilkul wait nahi karein. 16 mahine tak ek bhi meaningful word na hona aur 24 mahine tak 2-word phrases na hona – dono red flags hain. Speech therapist aur developmental pediatrician se immediately evaluation karwayein. "Boys late bolte hain" ya "apne aap aa jayega" – ye common myths hain, scientific truth nahi.',
    },
    {
      _key: 'faq11',
      question: 'Kya premature baby ko delayed milestones ka risk zyada hota hai?',
      answer: 'Haan. Premature babies mein corrected age use karte hain (actual age minus prematurity weeks). For example, 2 mahine premature bachcha 12 mahine mein 10 mahine ki performance expect karta hai. Agar corrected age se bhi peeche ho, tab concern hona chahiye. Preemies ko regular developmental checkups zaroori hain.',
    },
    {
      _key: 'faq12',
      question: 'Kya Vitamin D ki kami se developmental delay ho sakta hai?',
      answer: 'Haan, Vitamin D deficiency – jo India mein bahut common hai – se brain development, muscle strength, aur motor skills pe negative impact padta hai. Regular sunlight exposure (subah ki dhoop 20-30 min) aur doctor-advised Vitamin D supplementation helpful hai.',
    },
    {
      _key: 'faq13',
      question: 'Bachche ka IQ test kab karwana chahiye?',
      answer: '4-5 saal se pehle standard IQ testing reliable nahi hoti. Isse pehle developmental assessments (Bayley Scale, Denver Developmental Screening) use hote hain. Ek developmental pediatrician ya child psychologist sahi time pe sahi test recommend karega.',
    },
    {
      _key: 'faq14',
      question: 'Kya homeopathic treatment se brain ka development improve hota hai?',
      answer: 'Homeopathy constitutional level pe kaam karta hai – body ki overall vitality aur healing mechanism ko activate karta hai. Specific medicines like Baryta Carb, Calcarea Carb jo slow development ke liye use hoti hain – ye nervous system ke natural development ko gently support karti hain, neuroplasticity ko facilitate karti hain, bina kisi direct chemical action ke.',
    },
    {
      _key: 'faq15',
      question: 'Kya delayed milestones mein school mein problems aayengi?',
      answer: 'Jaise delay hai waise impact hoga. Mild delay wale bachche often mainstream school attend karte hain with some support. Moderate to severe mein special education ya inclusive classroom better hota hai. Early intervention (before school age) se school ke liye bachcha kaafi better prepare ho jaata hai.',
    },
    {
      _key: 'faq16',
      question: 'Kya diet change se developmental delay improve hoti hai?',
      answer: 'Nutrition ek important supporting factor hai. Specifically iron, zinc, iodine, Omega-3, aur Vitamin D ki kami se brain development directly impact hota hai. Diet improvement se in deficiencies ko correct karne se noticeable improvement possible hai – especially jab delay nutritional cause se ho. Diet akele treatment nahi hai, lekin important supporting role hai.',
    },
    {
      _key: 'faq17',
      question: 'Mera bachcha 3 saal ka hai aur abhi walk nahi kar raha – kya homeopathy help kar sakta hai?',
      answer: 'Haan, lekin pehle cause identify karna zaroori hai. CP (Cerebral Palsy), muscle disorders, ya spine issues rule out hone chahiye. Cause ke hisaab se homeopathic constitutional treatment, physiotherapy ke saath milke, muscle tone aur nerve function improve karne mein help kar sakta hai.',
    },
    {
      _key: 'faq18',
      question: 'Ek hi bachche mein multiple delays hain – treatment kahan se shuru karein?',
      answer: 'Global Developmental Delay mein multi-disciplinary team best hoti hai – developmental pediatrician, speech therapist, physiotherapist, occupational therapist, aur homeopath saath milke kaam karein. Pehle sabse zyada impact wala area identify karein (usually motor ya speech) aur wahan se shuru karein.',
    },
    {
      _key: 'faq19',
      question: 'Kya Special Olympics ya group therapy delayed kids ke liye helpful hai?',
      answer: 'Bilkul. Group activities se social skills, confidence, aur peer interaction develop hoti hai. Special Olympics ya inclusive sports programs se physical development ke saath mental wellbeing bhi improve hoti hai. Isolation se door rakhna – especially 3+ years mein – bahut important hai.',
    },
    {
      _key: 'faq20',
      question: 'Delayed milestones ke liye government mein kya facilities available hain India mein?',
      answer: 'India mein RBSK (Rashtriya Bal Swasthya Karyakram) scheme ke tahat free developmental screening hoti hai school-age children ke liye. District Early Intervention Centers (DEICs) free therapy provide karte hain. NIMHANS, AIIMS, aur state government hospitals mein developmental pediatrics departments hain. Right to Education Act (RTE) mein special needs children ke liye provisions bhi hain.',
    },
    {
      _key: 'faq21',
      question: 'Ek bachche ki delay maa ko kaise pata chalti hai – ghar pe kya observe karein?',
      answer: 'Monthly WHO/IAP milestone chart check karein. Age-appropriate tasks try karwayein – jaise 1 saal mein peek-a-boo, 2 saal mein blocks stack karna. Agar clearly 2+ mahine peeche ho consistently – evaluation karwayein. Trust your instinct – maa ka gut feeling bahut important indicator hai.',
    },
    {
      _key: 'faq22',
      question: 'Kya stress ya traumatic event se bachche ka development ruk sakta hai?',
      answer: 'Haan, early childhood trauma aur extreme chronic stress (adversity) – jaise neglect, domestic violence, ya severe illness – brain development pe negative impact dal sakte hain. Isko "Toxic Stress" kehte hain. Safe, nurturing environment provide karna treatment ka ek zaroori hissa hai.',
    },
    {
      _key: 'faq23',
      question: 'Delay mein kaunse tests zaroori hain?',
      answer: 'Developmental assessment (Bayley/Griffiths/Denver), hearing test (BERA), vision test, MRI brain (agar neurological cause suspect), thyroid test, genetic karyotype (agar indicated), CBC aur iron/Vitamin D/B12 levels – ye basic workup hota hai. Doctor clinical picture dekh ke decide karta hai kya specific tests zaroori hain.',
    },
    {
      _key: 'faq24',
      question: 'Agar mera ek bachcha delayed hai to doosra bhi hoga kya?',
      answer: 'Ye cause pe depend karta hai. Agar cause specific genetic condition hai to risk badha hua hai – genetic counseling helpful hoti hai. Agar cause birth-related ya nutritional tha, to doosre bachche ka risk utna zyada nahi. Second pregnancy se pehle doctor se discuss karna best hai.',
    },
    {
      _key: 'faq25',
      question: 'Dr. Shadab se delayed milestones ke liye kaise consult karein?',
      answer: 'Dr. Shadab Khan se online ya in-person consultation ke liye drshadabs.com pe jaayein. Delayed milestones mein case-taking mein bachche ki poori pregnancy history, birth details, developmental timeline, aur current abilities – sab discuss hota hai. Individualized constitutional approach hi is condition mein effective results deta hai. Clinic: Akola, Maharashtra. Online consultation bhi available hai.',
    },
  ],

  relatedDiseases: [
    'Autism',
    'ADHD',
    'Hypothyroidism',
    'Recurrent Cold',
    'Anxiety',
  ],
}

async function seed() {
  await client.createOrReplace(doc)
  console.log('✅ Delayed Milestones / Global Developmental Delay created/updated: disease-delayed-milestones')
  console.log('🌐 Live at: https://homeopedia.in/diseases/delayed-milestones')
}

seed().catch(console.error)
