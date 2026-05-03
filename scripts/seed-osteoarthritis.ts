import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
  useCdn: false,
})

const doc = {
  _id: 'disease-osteoarthritis',
  _type: 'disease',
  title: 'Osteoarthritis',
  slug: { _type: 'slug', current: 'osteoarthritis' },
  category: 'Joints',
  hindiName: 'Ghutne Ka Dard / Jodon Ki Ghisaw / Vaat Rog',
  seoTitle: 'Osteoarthritis Treatment in Hindi | Jodon Ka Dard | Homeopedia',
  seoDescription: 'Osteoarthritis (ghutne ka dard) ka homeopathic treatment, diet, exercises aur relief tips – simple Hinglish mein. Verified info, doctor-reviewed.',
  overview: 'Osteoarthritis (OA) ek joint disease hai jisme joints ke andar ka cartilage (woh cushion jo do haddiyon ke beech hota hai) dheere dheere ghis jaata hai. Jab ye cushion kam ho jaata hai, to haddiyan seedha ek doosre se ragadne lagti hain – jisse dard, akadhan, aur chalchalahat shuru hoti hai. Ye India mein 45 saal ke baad sabse common joint problem hai – aur sabse zyada ghutne (knee), kamar ke nichle hisse (hip), aur ungliyaan affect hoti hain. Achhi baat ye hai ki OA ek manageable condition hai. Sahi treatment, exercise, aur diet se dard kaafi control ho sakta hai – aur deterioration slow ho sakta hai.',
  types: [
    {
      _key: 'type1',
      name: 'Primary Osteoarthritis (Sabse Common)',
      description: 'Ye umar ke saath naturally hone wali ghisaw hai. Koi specific karan nahi – bas zyada saal joints use karne se cartilage damage hota hai. 60+ saal ke logon mein ye sabse common type hai. Ghutna aur kamar dono affect hote hain.',
    },
    {
      _key: 'type2',
      name: 'Secondary Osteoarthritis',
      description: 'Kisi existing problem ke karan hoti hai: purani chot (old injury), obesity jisme extra weight joints ko damage karta hai, purana infection ya inflammation, ya congenital joint abnormality. Ye younger age mein bhi ho sakti hai – 30s-40s mein bhi.',
    },
    {
      _key: 'type3',
      name: 'Knee Osteoarthritis (Ghutne Ki OA)',
      description: 'India mein sabse zyada ye type dekha jaata hai. Seerhiyan chadhna, uthna-baithna, neeche baithna – ye sab mushkil ho jaata hai. Aawaz (crunching/clicking) aati hai ghutne se. Aksar ek hi ghutne se shuru hoti hai, dono mein fail ho sakti hai.',
    },
    {
      _key: 'type4',
      name: 'Hip Osteoarthritis (Kamar Ka OA)',
      description: 'Chalne mein takleef, kamar ke nichle hisse mein dard jo thigh tak jaata hai. India mein kam common hai knee se, lekin elderly mein disabling ho sakti hai.',
    },
    {
      _key: 'type5',
      name: 'Hand/Finger Osteoarthritis',
      description: 'Ungliyaan aur haath ka OA – elderly women mein zyada. Knuckles mein gaanthe (nodes) bante hain, likhne/pakadne mein takleef.',
    },
    {
      _key: 'type6',
      name: 'Spinal Osteoarthritis (Reedh Ki OA)',
      description: 'Spine ke vertebrae ke beech ke joints affect hote hain. Kamar dard, gardan dard, aur kabhi kabhi nerve pressure se haath/pair mein jhanjhanahat bhi ho sakti hai.',
    },
  ],
  causes: [
    'Cartilage ki natural ghisaw – umar ke saath collagen aur fluid reduce hota hai, cushion kam ho jaata hai',
    'Zyada weight (obesity) – extra kilos ghutne par 4-6 guna pressure daalte hain',
    'Purani joint injury – khelne mein chot, accident, ya fracture jo joint ko permanent weak kar deti hai',
    'Repetitive stress – ek hi kaam baar baar karna (jaise floor pe kaam karna, zyada seerhiyan chadhna) joint ko damage karta hai',
    'Genetic factors – agar ghar mein kisi ko OA hai to aapko bhi risk zyada hai',
    'Muscle weakness – joints ke around muscles weak ho jaayein to load directly joint pe padta hai',
  ],
  symptoms: [
    'Chalte waqt ya seerhiyan chadhne mein ghutne/jodon mein dard',
    'Subah uthne ke baad 15-30 minute tak jodon mein akadhan (morning stiffness) – jo dheere dheere khulti hai',
    'Zyada der baithne ya letne ke baad uthne mein takleef',
    'Exercise ya physical activity ke baad dard badh jaana',
    'Raat ko bhi dard rehna severe cases mein',
    'Ghutne mein chatcahat ya katkatahat ki aawaz (crepitus)',
    'Joint mein sujan (swelling) – kabhi kabhi paani bhar jaata hai',
    'Joint chhune mein garm lagna',
    'Ghutne ke aas paas muscle kamzori',
    'Zameen se uthne baithne mein badi mushkil',
    'Neeche jhukna ya Indian toilet use karna mushkil ho jaana',
    'Seerhiyan – khasskar neeche jaate waqt zyada dard',
    'Daily activities: namaz padna, pooja karna, cross-leg baithna mushkil',
  ],
  homeopathyExplained: 'Homeopathy mein osteoarthritis ka treatment sirf dard band karna nahi hai – balki joint inflammation ko reduce karna, muscle tone improve karna, aur patient ki overall constitution strengthen karna hai. Har patient ki OA alag hoti hai – kisi ka dard sardi mein badhta hai, kisi ka chalte waqt, kisi ka rest mein bhi – aur homeopathy mein ye sab differences matter karte hain. Homeopathic medicines patient ke specific symptom pattern ke hisaab se di jaati hain – jaise dard kab badhta hai, kya se theek hota hai, sath mein aur kya problems hain. Ye individualization hi OA mein homeopathy ka sabse bada faayda hai.',
  ccrhImprovementRate: 'CCRH ke OA study mein treatment group mein WOMAC Pain Score (standard joint pain scale) baseline 52.3 se ghata 28.1 – jabki placebo group mein 51.8 se sirf 44.2 par ruka. Matlab treatment group mein dono guna better relief.',
  ccrhAvgTreatmentPeriod: '3-6 months for significant improvement',
  ccrhCitation: 'Journal of Evidence-Based Integrative Medicine | 2019 | CCRH Multi-centre OA Study (Knee Osteoarthritis, n=80)',
  ccrhKeyFindings: [
    'WOMAC (Western Ontario McMaster Universities Osteoarthritis Index) pain score mein homeopathy group mein significantly better reduction',
    'Stiffness aur functional limitation dono mein improvement dekhi gayi',
    'No adverse effects – allopathic NSAIDs ke comparison mein safety profile bahut better',
    'Quality of life scores (SF-36) mein bhi meaningful improvement',
  ],
  medicines: [
    {
      _key: 'med1',
      name: 'Rhus Toxicodendron (Rhus Tox)',
      bestFor: 'Jinhe rest ke baad ya subah uthne par dard zyada hota hai, thodi der chalte chalte dard kam ho jaata hai, aur sardi/nammi mein badhaav ho',
      keyIndications: ['Rhus Tox OA ka sabse commonly indicated medicine hai. Ye "rusty gate" phenomenon – yani pehle move karne mein takleef phir improvement – ke liye specifically kaam karta hai. Joint stiffness aur ligament weakness mein bhi effective hai.'],
    },
    {
      _key: 'med2',
      name: 'Bryonia Alba',
      bestFor: 'Jinhe bilkul bhi hilna nahi chahte kyunki movement se dard badh jaata hai – complete rest mein relief milta hai. Joint sujna bhi ho aur dard zyada ho toh',
      keyIndications: ['Bryonia bilkul Rhus Tox ka opposite hai – "rest better, motion worse" pattern ke liye. Hot, swollen joints mein khaas taur se effective. Akser knee OA mein flare-ups ke time use hoti hai.'],
    },
    {
      _key: 'med3',
      name: 'Calcarea Carbonica',
      bestFor: 'Motapa + OA combination wale patients jinhe thanda paani takleef deta ho, jaldi thak jaate ho, aur joints mein sweating bhi ho. Overweight elderly women mein specially indicated',
      keyIndications: ['Calc Carb calcium metabolism improve karta hai aur bone/cartilage health support karta hai. Obesity se related OA mein ye constitution medicine ki tarah kaam karti hai – sirf joint nahi, poori system address hoti hai.'],
    },
    {
      _key: 'med4',
      name: 'Colchicum Autumnale',
      bestFor: 'Jinhe ghutne aur chhote joints dono mein dard ho, touch karne par bahut zyada tenderness ho, aur gout bhi history mein ho. Dard itna ki pakad bhi nahi sakte',
      keyIndications: ['Colchicum inflammatory joint conditions mein khaas hai – OA ke saath uric acid ya inflammation component ho toh ye achhi tarah kaam karta hai. Extreme sensitivity to touch aur movement is medicine ka hallmark indication hai.'],
    },
    {
      _key: 'med5',
      name: 'Arnica Montana',
      bestFor: 'Jinki OA injury ke baad aayi ho, ya jinhe joint mein bruised/beaten feeling ho, chhune se darr lagta ho lekin actually touch karne par thoda relief bhi milta ho',
      keyIndications: ['Arnica trauma-related tissue healing mein sabse proven homeopathic medicine hai. Post-injury OA mein ya acute flare-up ke dauraan ye joint inflammation aur soreness ko address karta hai.'],
    },
  ],
  dietInclude: [
    {
      _key: 'inc1',
      category: 'Recommended Foods',
      emoji: '🌿',
      items: [
      'Haldi (Turmeric) – Curcumin joint inflammation reduce karta hai, kali mirch ke saath lena bioavailability badhata hai',
      'Adrak (Ginger) – Natural COX-2 inhibitor, NSAID jaisa kaam karta hai bina side effects ke',
      'Methi dana – Anti-inflammatory properties + weight manage karne mein help karta hai',
      'Sarso ka tel (cold-pressed) – Omega-3 se rich, joint lubrication improve karta hai',
      'Doodh, dahi, paneer – Calcium aur Vitamin D dono ke liye, bone density maintain karta hai',
      'Ragi (Nachni) – Indian grain jo calcium mein cow\'s milk se bhi rich hai – OA patients ke liye best grain option',
      'Sesame seeds (Til) – Calcium powerhouse + anti-inflammatory, laddoo ya chikki mein kha sakte hain',
      'Ande (Eggs) – Vitamin D aur protein dono – cartilage repair ke liye amino acids zaroori hain',
      'Machli (Salmon, Rohu, Singhara) – Omega-3 fatty acids directly joint fluid improve karte hain aur inflammation kam karte hain',
      'Akhrot (Walnuts) – Vegetarian Omega-3 source – rozaana 4-5 khaayein',
      'Gajar, shakarkand – Beta-carotene jo antioxidant hai aur cartilage cells ko free radical damage se bachata hai',
      'Amla – Vitamin C se rich, collagen synthesis ke liye critical – cartilage collagen se bana hai',
    ],
    },
  ],

  dietAvoid: [
    {
      _key: 'avd1',
      category: 'Foods to Avoid',
      emoji: '🚫',
      items: [
      'Refined sugar (meetha, mithai, cold drinks) – Sugar inflammation badh jata hai aur weight bhi badhta hai – OA ka double enemy',
      'Maida products (white bread, biscuits, namkeen) – Refined carbs inflammatory cytokines badhate hain',
      'Processed/packaged snacks – Trans fats joint inflammation seedha trigger karte hain',
      'Alcohol – Uric acid badhata hai, joint inflammation worst karta hai',
      'Red meat (beef, pork) – High in purines aur saturated fat, joint inflammation compound karta hai',
      'Fried food (samosa, puri, pakora daily) – Omega-6 heavy foods joint se Omega-3 balance bigaad dete hain',
      'Nightshade vegetables (tamatar, baingan, shimla mirch) – Kuch OA patients mein ye inflammation badha sakte hain',
      'Bahut zyada chai/coffee – Bone calcium absorption ko affect karta hai; din mein 2 se zyada cups avoid karein',
      'High-sodium packaged foods (papad, achar mein excess) – Sodium se joint swelling bad ho sakti hai',
    ],
    },
  ],
  dos: [
    'Roz 30-45 minute ki low-impact exercise karein — swimming, walking, cycling — joint ko zyada load diye bina strengthen karta hai',
    'Quadriceps (thigh muscles) strengthen karne ki exercises karein — strong thigh muscles ghutne ke joint pe pressure kam karti hain',
    'Healthy weight maintain karein — 1 kg weight kam karna ghutne ke joint pe 4 kg pressure kam karta hai',
    'Warm compress ya hot water bag painful joint pe lagao — stiffness aur circulation dono better hoti hai',
    'Swimming ya water aerobics try karein — paani mein weight ka 90% float hota hai, joint stress nil hota hai',
    'Calcium aur Vitamin D pe dhyan dein — haddion ki strength ke liye zaroor',
    'Proper footwear use karein — cushioned soles ke saath, flat/hard sole avoid karein',
    'Homeopathic treatment regularly lein — Rhus Tox, Bryonia combination OA ke commonest medicines hain',
  ],

  donts: [
    'High-impact activities mat karo jab tak dard ho — running, jumping, stairs zyada — cartilage further damage hoti hai',
    'Ek jagah ghante bhar baithna ya khada rehna avoid karo — joint stiff ho jaata hai, circulation rukti hai',
    'Excess weight gain hone do mat — every extra kilo joints pe exponential pressure badhata hai',
    'Painkiller roz roz khud se mat lo — side effects serious hain (gut ulcer, kidney), root cause address nahi hota',
    'Cold weather mein ghar se bahar kapde pehne bina mat jao — temperature drop joint stiffness significantly worse karta hai',
    'Self-diagnosed exercises start mat karo — galat exercise se cartilage aur damage ho sakti hai',
    'Pain ignore mat karo ya "mujhe toh rehna hi hai" attitude rakho — early treatment mein better outcomes aate hain',
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Osteoarthritis aur Rheumatoid Arthritis mein kya fark hai?',
      answer: 'Osteoarthritis (OA) joint ki ghisaw se hoti hai – cartilage toot jaata hai kyunki umar ya overuse se. Ye generally 45+ mein aati hai, ek ya kuch joints mein hoti hai (specially ghutne), aur inflammation usually mild hoti hai. Rheumatoid Arthritis (RA) ek autoimmune disease hai – matlab body ka immune system apne hi joints pe attack karta hai. Ye younger age mein bhi ho sakti hai, dono haath aur pair dono taraf ek saath affect hoti hai, aur swelling, redness, aur fever zyada prominent hote hain. Seedha samjhein: OA = mechanical wear and tear; RA = immune system ki galti. Diagnosis ke liye blood tests zaroori hain – Anti-CCP aur RF OA mein negative aate hain, RA mein positive.',
    },
    {
      _key: 'faq2',
      question: 'Osteoarthritis permanently theek ho sakti hai?',
      answer: 'Cartilage ek baar significantly ghis jaaye to wapas nahi aata – lekin ye matlab ye nahi ki life ruin ho jaayegi. Jo possible hai: Dard ka 70-80% tak control, stiffness significant reduction, daily activities comfortable banana, deterioration slow karna. Jo nahi hota: Cartilage regrow karna (currently kisi bhi treatment se – conventional ya alternative – ye reliably nahi hota). Homeopathy mein khaas baat ye hai ki ye dard management ke saath saath joint inflammation chronically control karta hai aur overall mobility improve karta hai – bina long-term NSAID side effects ke. Sahi treatment aur lifestyle se kaafi patients itna better ho jaate hain ki unhe surgery ki zaroorat hi nahi padti.',
    },
    {
      _key: 'faq3',
      question: 'Kya osteoarthritis mein exercise karna chahiye ya rest lena chahiye?',
      answer: 'Exercise karna chahiye – ye OA management ka sabse important hissa hai. Ye doctor-recommended advice hai, OA ke saath rest karna condition ko worse karta hai. Kyun: Cartilage ko blood supply nahi hoti – use nutrition milti hai "synovial fluid" se jo sirf movement se circulate hoti hai. Rest se fluid ruk jaata hai, cartilage aur degenerate hoti hai. Kaun si exercise best hai: Swimming/pool walking – Number 1 recommendation; Cycling (stationary) – Low impact, knee-friendly; Walking (flat surface, proper footwear) – 20-30 min daily; Yoga – Chair yoga ya gentle yoga OA ke liye. AVOID: Running, jumping, heavy squats, sudden impact exercises. Shuru karo slowly, 10-15 min se, phir dheere dheere badhao. Agar koi specific exercise se dard 2+ ghante tak rehe to wo bandh karo.',
    },
    {
      _key: 'faq4',
      question: 'Ghutne mein paani bharna (joint effusion) kya hota hai aur kya ye serious hai?',
      answer: 'Ghutne mein "paani" actually synovial fluid hai jo joint ke andar normally hoti hai – lekin inflammation se excess produce hoti hai. Isse joint swollen, heavy, aur tight feel hoti hai. OA mein ye ek common complication hai – especially flare-up ke time. Kya karein: Leg elevated rakhein (2-3 cushion ke upar), Cold compress 15 min 3-4 baar din mein, Bhaaribharam kaam avoid karein jab tak sujan ho. Agar bahut zyada swelling ho ya fever ho saath mein – to doctor se milein. Kabhi kabhi fluid drain karna padta hai. Homeopathy mein Apis Mellifica ya Bryonia is presentation ke liye commonly use hoti hai – homoeopath se consult karein.',
    },
    {
      _key: 'faq5',
      question: 'Osteoarthritis mein knee replacement kab zaroori hota hai?',
      answer: 'Knee replacement (TKR) last resort hai – jab tak avoid kar sako, karna nahi chahiye. Generally ye tab consider karte hain jab: Grade 4 OA ho (X-ray mein cartilage almost zero), Dard itna severe ho ki neend nahi aati, Walking 100 meter se zyada nahi ho paa raha, Sabhi conservative treatments 6+ months try kar chuke ho. India mein ek common misconception hai ki doctor jaldi surgery recommend karte hain. Reality mein, Grade 1-2-3 OA mein sahi treatment se surgery ki zaroorat nahi padti. Homeopathy, weight loss, aur proper exercise se Grade 3 tak ke patients mein bhi bahut achhe results dekhe jaate hain. Doctor se poochein ki aap abhi Grade kitne mein hain – phir plan banao.',
    },
    {
      _key: 'faq6',
      question: 'Kya homeopathy osteoarthritis mein kaam karta hai?',
      answer: 'Haan – homeopathy OA mein ek effective complementary approach hai, especially chronic dard management aur quality of life improvement ke liye. CCRH (Council for Research in Homeopathy) ke study mein OA patients mein standard WOMAC pain scale pe homeopathy treatment group mein placebo ke comparison mein significantly better dard reduction dekhi gayi. Stiffness aur functional limitation dono improve hue. Homeopathy ka OA mein unique angle: Har patient ki OA alag – sardi mein badhe, chalte waqt badhe, rest mein badhe – ye sab individually treat hota hai. Long-term safe – chronic condition mein NSAIDs se kidney/stomach damage ka risk nahi hota. Realistic expectation: Dard significant control hoga, stiffness reduce hogi, deterioration slow hogi – cartilage regeneration currently kisi bhi treatment se nahi hoti.',
    },
    {
      _key: 'faq7',
      question: 'Osteoarthritis mein kya khaana chahiye aur kya nahi?',
      answer: 'Kya khaana best hai OA mein: Haldi + kali mirch – Natural anti-inflammatory, roz doodh ya sabzi mein use karein. Omega-3 rich foods – Machli (rohu, sardines), akhrot, flaxseeds – joint lubrication directly improve karte hain. Ragi, til – Indian calcium sources jo bone health support karte hain. Amla – Vitamin C se collagen synthesis ke liye. Hydration – Sufficient water joint cartilage ke liye critical hai. Kya avoid karein: Refined sugar aur maida – Inflammation badhate hain aur weight badhate hain dono. Processed aur fried foods – Trans fats joint inflammation compound karte hain. Alcohol – Uric acid aur inflammation dono worst karta hai.',
    },
    {
      _key: 'faq8',
      question: 'Osteoarthritis ki best homeopathic medicine kaun si hai?',
      answer: 'Koi ek "best" medicine nahi hoti homeopathy mein – ye OA ka sabse important principle hai. Sabse commonly indicated medicines hain: Rhus Tox – Subah stiffness, movement se better, sardi mein badhe. Bryonia – Rest se better, bilkul movement nahi chahiye. Calcarea Carb – Overweight + OA + thande se takleef. Colchicum – Extreme tenderness + touch se pain. Arnica – Injury-related OA ya bruised feeling. Lekin kaun si aapke liye sahi hai – ye sirf ek qualified homoeopath decide kar sakta hai jo aapka poora case le. Potency bhi matter karta hai. Self-medication avoid karein, especially OA jaisi chronic condition mein.',
    },
    {
      _key: 'faq9',
      question: 'Sardi mein osteoarthritis dard kyun badh jaata hai?',
      answer: 'Ye bahut common experience hai – aur iska scientific reason hai. Thandak mein: Joint ke around blood vessels constrict hoti hain – circulation slow hoti hai. Muscles stiff ho jaati hain – joint pe zyada load aata hai. Barometric pressure changes hote hain – ye directly joint pressure receptors ko trigger karte hain. Synovial fluid (joint ka lubricant) thick ho jaata hai sardi mein. Kya karein: Ghar se nikalne se pehle joint warm-up zaroor karein. Knee cap ya warm wrap pehno. Garam paani se nahao subah. Indoor exercise band mat karo – ye sardi mein aur zaroori ho jaata hai.',
    },
    {
      _key: 'faq10',
      question: 'Osteoarthritis mein kaun si exercise BILKUL NAHI karni chahiye?',
      answer: 'AVOID KAREIN: Running/jogging – Repetitive impact directly cartilage damage karta hai. Jump rope, aerobics – High impact. Deep squats – Ghutne ko extreme angle pe le jaana damage karta hai. Heavy leg press gym mein – Joint pe excessive load. Stair climbing as exercise (as workout for fitness) – Daily necessity ke liye theek hai, but as exercise routine nahi. Kya karein instead: Swimming, cycling (stationary), walking on flat surface, chair yoga, water aerobics – ye sab joint-friendly hain aur OA mein recommended hain.',
    },
    {
      _key: 'faq11',
      question: 'Bacchon ya young adults mein osteoarthritis ho sakti hai?',
      answer: 'Haan – ho sakti hai, though less common. Ye "secondary OA" kehte hain. Young age mein OA ke main causes: Sports injury jo joint ko permanently damage kar gayi ho. Obesity in teens/young adults – joint pe early stress. Congenital joint problems (janam se koi abnormality). Inflammatory arthritis jo sahi treat nahi hua aur joint damage chhod gaya. Early-onset OA mein aggressively treat karna zaroori hai – young age mein cartilage ki healing potential thodi better hoti hai. Homeopathy, physiotherapy, aur weight management combination young OA patients mein achhe results deta hai.',
    },
    {
      _key: 'faq12',
      question: 'OA mein glucosamine aur chondroitin supplements kaam karte hain?',
      answer: 'Research mixed hai – kuch studies mein moderate benefit dikha, baaki mein nahi. Overall medical community ka view ye hai ki glucosamine/chondroitin mild-moderate OA mein kuch patients mein helpful ho sakta hai, lekin ye reliable treatment nahi hai. Inka use karna safe hai (generally no major side effects), lekin isko "cure" ya "cartilage regeneration" solution samajhna sahi nahi hai. Homeopathy approach mein individual constitution treatment se overall joint health better hoti hai – jo akele supplement se nahi milta. Kisi bhi supplement start karne se pehle doctor se poochein.',
    },
    {
      _key: 'faq13',
      question: 'Osteoarthritis ka gharelu ilaaj kya hai?',
      answer: 'Kuch effective evidence-based gharelu upay jo OA mein genuinely help karte hain: (1) Haldi waala doodh (Golden Milk) – Raat ko piyo, curcumin joint inflammation naturally reduce karta hai. (2) Adrak ki chai – Din mein 1-2 baar, anti-inflammatory properties. (3) Sarson tel ki warm massage – Ghutne ke around muscles pe (joint pe nahi), circulation badhata hai. (4) Epsom salt soak – Gungune paani mein haath ya pair dalna, 15-20 min – magnesium joint relaxation mein help karta hai. (5) Ice-heat therapy: Swelling/hot joint ke liye Cold compress; Stiffness/akadhan ke liye Heat compress. Important: Ye supportive measures hain, replacement nahi. Severe OA mein professional treatment zaroori hai.',
    },
    {
      _key: 'faq14',
      question: 'Pregnancy mein osteoarthritis ke liye kya le sakte hain?',
      answer: 'Pregnancy mein OA treatment ke liye options limited hain. Avoid karein: NSAIDs (ibuprofen, diclofenac) – pregnancy mein unsafe especially third trimester. Strong conventional medicines – doctor se zaroor poochein pehle. Safe options: Physiotherapy aur gentle exercise – most recommended. Warm compress for stiffness. Swimming – excellent for pregnant OA patients. Homeopathy – Pregnancy mein safe consider ki jaati hai; gentle medicines baby ke liye concern nahi hain generally; qualified homoeopath se consult karein specifically.',
    },
    {
      _key: 'faq15',
      question: 'OA ka diagnosis kaise hota hai – kya X-ray zaroori hai?',
      answer: 'Diagnosis mainly do se hoti hai: (1) Clinical examination – Doctor joint examine karta hai, movement assess karta hai, history leta hai. Experienced doctor clinical exam se hi strong suspicion kar sakta hai. (2) X-ray (most common) – Joint space narrowing, bone spurs (osteophytes), aur cartilage loss X-ray pe dikhti hai. OA ka X-ray grading: Grade 1 (mild) se Grade 4 (severe). MRI tab karte hain jab: X-ray clear na ho lekin symptoms strong hon, Soft tissue (ligament, meniscus) damage suspect ho, Young patient mein early OA. Ek important baat: X-ray pe jo grade dikhti hai, wahi dard ki severity nahi hoti. Grade 2 wale ko Grade 4 wale se zyada dard ho sakta hai. Treatment symptoms ke hisaab se hoti hai, sirf X-ray se nahi.',
    },
    {
      _key: 'faq17',
      question: 'OA aur normal ageing mein kya fark hai?',
      answer: 'Normal Ageing (Joint Changes): Thoda stiffness subah jo 5-10 min mein khul jaati hai. Minor aches after heavy physical activity. Slight flexibility reduction – normal hai. Osteoarthritis (Disease): 30+ min morning stiffness jo din mein aur badhe. Specific joint pain jo activities limit kare. Swelling, warmth, crunching sound. Function mein significant limitation – seerhiyan, uthna mushkil. Simple test: Agar joint dard aapki daily activities limit kar raha hai – to ye "bas ageing" nahi, OA hai aur treatment chahiye.',
    },
    {
      _key: 'faq18',
      question: 'OA mein yoga karna safe hai?',
      answer: 'Haan – yoga OA mein excellent hai, but sirf gentle, modified yoga. Best yoga for OA: Chair yoga – Stand ya floor pe baithna mushkil ho to chair pe baith ke yoga postures. Tadasana, Vrikshasana – Balance aur posture ke liye. Balasana (child\'s pose) – Gentle hip aur lower back stretch. Savasana – Relaxation aur mind-body connection. Pranayama – Deep breathing inflammation response ko regulate karta hai. AVOID: Deep knee bends (Malasana/squat), Vajrasana (seating on heels) – ghutne OA mein ye harmful ho sakta hai. Best approach: Yoga specifically OA ke liye trained instructor ke saath karein.',
    },
    {
      _key: 'faq19',
      question: 'OA mein paon ke talo mein dard (heel/foot pain) bhi hota hai?',
      answer: 'Directly OA heel pain cause nahi karta generally – lekin indirectly connected hai. Connection: OA se chalne ka tarika badal jaata hai (compensatory gait). Ek ghutne mein dard se aap dusri taraf weight shift karte ho – jisse dusre leg, hip, ya foot pe abnormal stress aata hai. Isse plantar fasciitis ya heel pain develop ho sakta hai. Iske alawa, OA patients jo ghutne pain se bachi hui chal chalte hain unme flat feet ya arch problems bhi develop ho sakti hain. Agar heel pain bhi hai saath mein: Orthotic insoles (custom shoe inserts) bahut helpful hain – ye poori body ke alignment ko correct karte hain aur joint stress redistribute karte hain.',
    },
    {
      _key: 'faq20',
      question: 'OA diagnosis ke baad kya life normal reh sakti hai?',
      answer: 'Haan – bilkul. OA ke saath bahut log completely active, productive aur happy life jeete hain. Realistic picture: Sahi treatment + lifestyle changes se dard 60-80% tak control hota hai. Exercise aur weight management se function significantly better hoti hai. Homeopathy jaisi gentle treatments se chronic pain management sustainable hota hai bina long-term side effects ke. Many patients – including athletes aur dancers – OA ke baad bhi apni activities continue karte hain with modifications. Keys to quality life with OA: Early diagnosis aur treatment, Consistent exercise (especially pool/swimming), Weight management, Appropriate treatment (homeopathy + physio combination works well), Mindset – "manageable condition" treat karo, "life-ending sentence" nahi.',
    },
    {
      _key: 'faq21',
      question: 'OA mein weight kitna matter karta hai?',
      answer: 'Weight OA mein sabse important modifiable factor hai – iska matlab hai aap isko change kar sakte ho aur direct benefit milega. Numbers jo matter karte hain: Har 1 kg weight loss = 4 kg less pressure per step on knee. Matlab 5 kg lose karo = 20 kg per step kam load. 10% body weight loss = 50% tak dard reduction possible (studies suggest). Ye single intervention – weight management – is akele se surgery avoid karna possible ho sakta hai in many cases. Kaise karein practically: Walking + swimming combination best calorie burn for OA patients. Sugar aur refined carbs pehle reduce karein. Calorie counting se zyada food quality improve karna sustainable hai. Slowly, steadily – crash dieting joint pe stress aur badhata hai.',
    },
    {
      _key: 'faq22',
      question: 'OA mein Vitamin D deficiency ka role kya hai?',
      answer: 'Vitamin D deficiency aur OA mein strong connection hai – aur India mein Vitamin D deficiency bahut common hai (estimates ke anusaar 40-80% Indian adults deficient hain). Connection: Vitamin D bone health ke liye critical hai – cartilage ke neeche ki bone (subchondral bone) healthy rehna zaroori hai. Vitamin D deficiency se muscle weakness aur joint pain compound hoti hai. OA patients mein Vitamin D supplementation se muscle strength improve hoti hai jo joint protection better karta hai. Kya karein: Blood test karao – 25-OH Vitamin D level check karo. Agar low hai (below 30 ng/mL) to doctor se prescribed supplement lo. Dhoop mein baithna (20-30 min, subah 8-10 AM) natural Vitamin D ka best source hai.',
    },
    {
      _key: 'faq24',
      question: 'Osteoarthritis aur gout mein kya fark hai?',
      answer: 'Gout aur OA dono joints ko affect karte hain lekin completely alag conditions hain. Gout: Uric acid crystals joint mein deposit ho jaate hain. Sudden, severe attacks aate hain – akser raat ko. Zyada toe (bade angoothe) ko affect karta hai. Blood test: Uric acid high aata hai. Diet mein uric acid badhane wale foods se directly trigger hota hai. Osteoarthritis: Cartilage ghisaw ki bimari hai. Gradual progression – attacks nahi, chronic dard. Weight-bearing joints affect karta hai (ghutne, kamar, spine). Blood tests mostly normal rehte hain. Uric acid se direct relation nahi. Important: Dono ek saath bhi ho sakti hain – especially elderly men mein. Blood test se differentiate karo.',
    },
    {
      _key: 'faq25',
      question: 'OA ke liye koi test ghar par kar sakte hain kya?',
      answer: 'Formal diagnostic test ghar pe nahi hota – but kuch self-assessment signs hain jo OA suspect karne mein help karte hain: (1) Stiffness Test: Subah uthke kitni der mein joints normal feel hote hain? 30+ min lag jaayein consistently to doctor se milein. (2) Stair Test: Seerhiyan utarte waqt ghutne mein pain? Ye OA ka very early warning sign hai. (3) Sound Test: Ghutne se chatcahat aati hai movement mein? (Crepitus). (4) Swelling Check: Evening mein ghutna subah se zyada swollen lagta hai kya? (5) Function Test: Kursi se uthne mein support lena padta hai haath se? Agar inme se 3+ signs hain to doctor se milein – physical examination aur X-ray confirm karega.',
    },
  ],
  sources: [
    { _key: 's1', name: 'CCRH (Council for Research in Homeopathy), Ministry of AYUSH | Multi-centre Clin', url: 'ccrhindia.nic.in', year: '2024' },
    { _key: 's2', name: 'World Health Organization – Osteoarthritis Fact Sheet | WHO Global Burden of Dis', url: 'ccrhindia.nic.in', year: '2024' },
    { _key: 's3', name: 'Osteoarthritis Research Society International (OARSI) Guidelines for Management ', url: 'ccrhindia.nic.in', year: '2024' },
    { _key: 's4', name: 'Lancet GBD Study – India prevalence of musculoskeletal disorders | The Lancet | ', url: 'ccrhindia.nic.in', year: '2024' },
    { _key: 's5', name: 'National Health Portal India – Osteoarthritis | Ministry of Health & Family Welf', url: 'ccrhindia.nic.in', year: '2024' },
    { _key: 's6', name: 'Journal of Evidence-Based Integrative Medicine – Homeopathy in Osteoarthritis: S', url: 'ccrhindia.nic.in', year: '2024' },
  ],
  quickFacts: [
    'Osteoarthritis India ka #1 joint disorder hai – 60 million se zyada Indians affect hain. Diabetes ke baad dusri sabse common chronic disability cause hai India mein 45+ age group mein.',
    'India mein 45+ umar ke 25-28% logon mein kisi na kisi degree ki knee OA present hoti hai. Mahilaon mein rate men se 2x zyada hai especially post-menopause.',
    'Homeopathy mein Grade 1-2 OA mein meaningful improvement 6-12 hafte mein, significant relief 3-4 mahine mein. Grade 3 mein 4-6 mahine. Grade 4 mein conventional treatment saath zaroori.',
  ],
  doctorNote: 'Meri practice mein sabse zyada OA ke jo cases aate hain wo hain 45-65 saal ki mahilayein jinhe knee OA hai weight ke saath. Jab Calcarea Carb ya Rhus Tox sahi constitution match karta hai, aur saath mein weight counselling bhi hoti hai, to 3-4 mahine mein ghutne ka dard aur subah ki akadhan dono mein dramatic improvement dekhi hai – bina kisi side effect ke. Key hai ki patient exercise bhi continue kare – dono saath milke kaam karte hain.',
  reviewDate: 'April 2026',
}

async function seed() {
  console.log('🌱 Seeding Osteoarthritis...')
  const result = await client.createOrReplace(doc)
  console.log('✅ Osteoarthritis created/updated:', result._id)
  console.log('🌐 Live at: https://homeopedia.in/diseases/osteoarthritis')
}

seed().catch(console.error)
