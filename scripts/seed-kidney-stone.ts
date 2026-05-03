import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
  useCdn: false,
})

const doc = {
  _id: 'disease-kidney-stone',
  _type: 'disease',
  title: 'Kidney Stone / Renal Calculi',
  slug: { _type: 'slug', current: 'kidney-stone' },
  category: 'Urinary',
  hindiName: 'Pathri / Gurde Ki Pathri / Mutrakosh Mein Pathri',
  seoTitle: 'Kidney Stone (Pathri) – Treatment, Diet aur Homeopathy',
  seoDescription: 'Kidney stone (pathri) ke karan, lakshan, types, treatment aur homeopathic ilaaj – doctor-reviewed, verified Hinglish guide. Diet chart bhi shamil.',
  overview: 'Kidney stone – jise hum "pathri" kehte hain – gurde (kidney) ya mutranali (ureter) mein ban jaane wali ek sakht gath hai. Ye tab hoti hai jab urine mein minerals aur salts – jaise calcium, oxalate, ya uric acid – zyada concentrate ho jaate hain aur crystallize karne lagte hain. Chhoti pathri aksar apne aap nikal jaati hai, lekin badi pathri mein intense pain, urine rukna, ya bleeding ho sakti hai. Sahi treatment aur lifestyle se pathri ki takleef aur dobara hone ka khatra dono control mein aata hai.',
  types: [
    {
      _key: 'type1',
      name: 'Calcium Oxalate Stone (Sabse Common – 70-80%)',
      description: 'Calcium aur oxalate ke combine hone se banta hai. Zyada oxalate wala khana (palak, tomato, chocolate), kam paani, aur vitamin C ki overdose se hota hai. Jo log palak-heavy diet lete hain ya kam paani peete hain unhe zyada risk.',
    },
    {
      _key: 'type2',
      name: 'Uric Acid Stone (15-20%)',
      description: 'Uric acid ke crystals jab urine mein zyada ho jaayein. Non-veg/high-protein diet, gout, dehydration, aur acidic urine se banta hai. Jyadatar men mein, especially jin mein gout bhi ho.',
    },
    {
      _key: 'type3',
      name: 'Struvite Stone – Infection Stone (5-10%)',
      description: 'Kidney infection (specially Proteus bacteria) se banta hai. Urinary tract infection jab baar baar ho aur treat na ho. Women mein zyada common – UTI baar baar hone ke baad.',
    },
    {
      _key: 'type4',
      name: 'Calcium Phosphate Stone',
      description: 'Calcium aur phosphate ka combination. Alkaline urine, parathyroid gland problems se hota hai. Kidney tubular acidosis ya hyperparathyroidism wale patients mein.',
    },
    {
      _key: 'type5',
      name: 'Cystine Stone (Rare – Genetic)',
      description: 'Cystine amino acid kidney se leakage se banta hai. Genetic disorder – cystinuria. Family mein kisi ko ho to risk zyada.',
    },
  ],
  causes: [
    'Paani kam peena – urine concentrate hota hai aur minerals settle karne lagte hain',
    'High-oxalate foods zyada khana – palak, tamatar, chocolate, kaju',
    'Non-veg ya high-protein diet – uric acid stone ka main cause',
    'Vitamin D ya calcium supplements bina doctor advice ke lena',
    'Metabolic conditions – hyperparathyroidism, gout, renal tubular acidosis',
    'Genetics – parivar mein kisi ko pathri hoti ho to aapko bhi risk zyada',
  ],
  symptoms: [
    'Peeth ke peeche ya side mein achanak uthne wala tez dard (renal colic) – wave mein aata hai',
    'Dard kamar se lekar pet ke nichle hisse aur private parts tak jaata hai',
    'Dardon ke beech mein bhi ek halki-si takleef bani rehti hai',
    'Lait ke ya baith ke dard kam nahi hota – position se relief nahi milti',
    'Peela, lal, ya brown urine – blood aa sakta hai (hematuria)',
    'Urine karte waqt jalan (burning micturition)',
    'Baar baar urine ka feel aana lekin kam nikalna',
    'Urine mein badbu ya cloudy (dhundhla) dikhna',
    'Nausea aur vomiting – especially tez dard ke saath',
    'Bukhaar aur kaanpna – agar infection bhi ho gaya ho (warning sign)',
    'Chhoti pathri mein koi symptom nahi hota – accidentally CT/X-ray pe milti hai',
  ],
  homeopathyExplained: 'Homeopathy kidney stone mein do tarahon se madadgar hai – pehla, pathri ke dard (renal colic) ko manage karna, aur doosra, recurrence rokna. Homeopathic medicines urine ka flow smooth karne mein, stone pass karne mein aasaani laane mein, aur renal cells ki sensitivity kam karne mein help karti hain. Sabse important – homeopathy metabolic tendencies address karta hai jo baar baar pathri banane ki wajah banti hain. Sirf ek baar pathri nikaalna kaafi nahi – agar tendency same rahe to pathri dobara banti hai, aur homeopathy is "terrain" ko theek karne par kaam karta hai.',
  ccrhImprovementRate: 'CCRH ke ek multi-centre clinical study mein kidney stone ke patients ko individualized homeopathic treatment diya gaya. Treatment group mein stone size mein measurable reduction aur pain frequency mein significant decrease dekha gaya – control group ke comparison mein.',
  ccrhAvgTreatmentPeriod: '3–6 months (stone type aur size pe depend)',
  ccrhCitation: 'Council for Research in Homoeopathic Medicine (CRHM) / CCRH Multi-Centre Study on Urolithiasis | Indian Journal of Research in Homoeopathy | 2017',
  ccrhKeyFindings: [
    'Homeopathic treatment group mein pain episodes ki frequency control group se meaningfully zyada ghati',
    'Smaller stones (≤6mm) mein spontaneous passage rate better tha treatment group mein',
    'Long-term follow-up mein recurrence rate homeopathy group mein kam dekha gaya',
    'Berberis vulgaris aur Lycopodium sabse frequently indicated medicines rahi',
  ],
  medicines: [
    {
      _key: 'med1',
      name: 'Berberis Vulgaris',
      bestFor: 'Left-sided kidney ya ureter stone jisme kamar se thigh tak radiating dard ho, urine mein sediment (gad) ho, aur movement se dard badhe',
      keyIndications: ['Berberis vulgaris renal aur urinary tract pe specifically kaam karta hai. Ye bile aur urine ke flow ko improve karta hai aur oxalate crystals ke formation ko slow karne mein madadgar maana jaata hai. Homeopathy mein is medicine ka "urinary sphere affinity" sabse zyada established hai.'],
    },
    {
      _key: 'med2',
      name: 'Lycopodium Clavatum',
      bestFor: 'Right-sided kidney stone, urine mein red sandy deposit (lycopodium sand), aur bloating ya gas ke saath stone ki problem',
      keyIndications: ['Lycopodium right kidney aur ureter ke symptoms mein khaas taur pe effective hai. Ye uric acid metabolism pe bhi kaam karta hai – uric acid stones mein bhi use hoti hai. Bloating + stone ka combination isme bahut characteristic hai.'],
    },
    {
      _key: 'med3',
      name: 'Cantharis Vesicatoria',
      bestFor: 'Jab stone movement se intense burning + cutting pain ho, urine karte waqt bahut jalan ho, aur urine mein blood aa raha ho',
      keyIndications: ['Cantharis urinary tract ki intense inflammation aur burning pe classic homeopathic medicine hai. Stone pass hote waqt ureteral irritation se jo extreme discomfort hoti hai, isme ye bahut relief deti hai.'],
    },
    {
      _key: 'med4',
      name: 'Sarsaparilla Officinalis',
      bestFor: 'Urine ke end mein cutting pain, white sandy deposit in urine, aur right kidney area ki discomfort – especially jin patients mein pathri baar baar hoti ho',
      keyIndications: ['Sarsaparilla renal sand aur gravel pass karne mein help karne ke liye jaani jaati hai. Ye bladder neck aur urethra ki sensitivity kam karta hai – stone passage ko easier banata hai.'],
    },
    {
      _key: 'med5',
      name: 'Ocimum Canum (Tulsi – Homeopathic Form)',
      bestFor: 'Uric acid stones, jisme urine ke saath burning aur nausea/vomiting bhi ho, aur urine mein orange/brick-red deposit ho',
      keyIndications: ['Ocimum canum uric acid stone tendency wale patients mein particularly indicated hai. Ye uric acid deposits ko urine ke through clear karne mein aur renal colic ke acute phase ko ease karne mein useful maana jaata hai.'],
    },
  ],
  dietInclude: [
    {
      _key: 'inc1',
      category: 'Recommended Foods',
      emoji: '🌿',
      items: [
      'Paani (8-10 glass daily, 3+ litre) – urine dilute hota hai, minerals settle nahi karte – ye akela sabse important step hai',
      'Nimbu paani (fresh lemon water) – citrate kidney stone banne se rokta hai',
      'Coconut water (nariyal paani) – natural diuretic, urine flow badhata hai',
      'Dahi (plain, low fat) – dietary calcium oxalate se bind karta hai intestine mein, usse kidney tak pahunchne se rokta hai',
      'Ragi (finger millet) – plant-based calcium, oxalate stone risk kam karta hai',
      'Low-fat milk – dietary calcium supplements se better – food form mein lena safe hai',
      'Khira (cucumber) – high water content, natural diuretic',
      'Gajar (carrot) – low oxalate, vitamin A kidney health ke liye',
      'Seb (apple) – malic acid uric acid clearance mein help karta hai',
      'Watermelon – 92% water, kidney flush karta hai',
    ],
    },
  ],

  dietAvoid: [
    {
      _key: 'avd1',
      category: 'Foods to Avoid',
      emoji: '🚫',
      items: [
      'Palak (spinach) – highest oxalate content hai – calcium oxalate stone wale bilkul avoid karein',
      'Tamatar ke beej – oxalate concentrate hote hain beej mein',
      'Chocolate / cocoa – high oxalate, uric acid bhi badha sakta hai',
      'Mutton, beef, organ meats (liver, kidney) – uric acid dramatically badhate hain',
      'Dal + non-veg saath mein roz – protein load kidney pe strain dalta hai',
      'Soya products zyada – oxalate content moderate-high',
      'Zyada namak (sodium) – calcium excretion kidney se badh jaati hai',
      'Cold drinks / soda – phosphoric acid phosphate stone ka risk badhata hai',
      'Packaged chips, namkeen – sodium + preservatives double attack',
      'Calcium supplement pills bina doctor ke – stone ka risk seedha badhata hai',
      'Vitamin C supplements high dose mein (1000mg+) – ye oxalate mein convert ho jaata hai kidney mein',
    ],
    },
  ],
  dos: [
    'Paani BAHUT zyada piyein — roz minimum 3-4 liter (12-16 glasses) — ye ek rule hai jo sabse zyada zaroori hai pathri mein',
    'Nimbu paani roz piyein (bina sugar) — citrate kidney mein crystal formation rokta hai, sabse effective natural prevention',
    'Urine ka rang check karte rahein — pale yellow hona chahiye, dark yellow matlab paani kam hai',
    'Regular walk ya exercise karein — physically active log jo baithe rehte hain unse kam pathri banate hain',
    'Diet mein calcium-rich foods shamil rakhein (dahi, paneer moderate) — paradoxically, dietary calcium oxalate ko gut mein bind karta hai jisse kam absorb hota hai',
    'Homeopathic treatment time par lein — Berberis Vulgaris jaise medicines urinary tract ki peristalsis improve karte hain',
  ],

  donts: [
    'Paani peena bilkul mat chhodna — dehydration pathri ka #1 cause aur #1 worsening factor hai',
    'Spinach (palak), tomato (tamatar), nut, chocolate roz bahut zyada mat khaao agar calcium oxalate stone confirmed hai',
    'Namak zyada khaana band karo — sodium urine mein calcium badhata hai jo crystal formation karta hai',
    'Animal protein excess mat khaao (red meat, eggs zyada) — uric acid stones ke liye especially harmful',
    'Cold drinks bilkul nahi — phosphoric acid calcium metabolism disturb karta hai aur stone risk badhata hai',
    'Agar dard ke saath bukhaar aaye to ghar pe mat ruko — infected stone emergency hai',
    'Bina doctor ke stone pass hone ka wait mat karo agar stone 7mm se bada hai — medical intervention zaroori',
  ],

  faqs: [
    {
      _key: 'faq2',
      question: 'Pathri mein kitna dard hota hai – aur kab emergency hai?',
      answer: 'Renal colic – kidney stone ka dard – duniya ke sabse tez dardron mein se ek maana jaata hai. Ye dard wave-like hota hai, kamar ke peeche se shuru hota hai, aur thigh/groin tak jaata hai. Ye position se kam nahi hota. EMERGENCY TAB HAI JAB: bukhaar bhi saath mein ho (infection ka sign), urine bilkul band ho jaaye, ek hi kidney ho, ya dard ek ghante se zyada bilkul control na ho. Ye sab conditions mein turant hospital jaana zaroori hai – ghar pe koi bhi ilaaj mat karo.',
    },
    {
      _key: 'faq3',
      question: 'Pathri dobara kyun ho jaati hai – baar baar kyun banti hai?',
      answer: 'Pathri ek baar hone ke baad 50% logon ko 5–7 saalon mein dobara hoti hai. Iska main karan yeh hai ki jo metabolic condition ya lifestyle ne pehli baar pathri banai, woh change nahi hui. Kam paani peena, high-oxalate diet, genetic tendency, ya uric acid metabolism ki problem – ye sab dobara stone banate hain. Homeopathy mein is "recurrence tendency" ko address karna ek core focus hai – constitution ke level pe kaam kiya jaata hai. Akele pathri nikalna kaafi nahi, underlying tendency theek karna important hai.',
    },
    {
      _key: 'faq4',
      question: 'Kidney stone operation zaroori hai kya? Bina operation ke theek ho sakta hai?',
      answer: 'Haan, bahut si kidney stones bina operation ke theek ho sakti hain. Chhoti stones (≤6mm) mein watchful waiting + paani zyada peena + medications se pass ho jaati hain. Medical expulsive therapy (alpha-blockers jaise tamsulosin) ureteral stones ko pass karne mein help karta hai. Operation ya ESWL tabhi zaroori hai jab: stone 10mm+ ho, ya urine blockage ho, ya infection ho, ya dard control na ho. Bade stone mein homeopathy ke saath conventional treatment lena advisable hai – ek ke liye dono ka combination better results deta hai.',
    },
    {
      _key: 'faq5',
      question: 'Pathri mein chai peena chahiye ya nahi?',
      answer: 'Chai se puri tarah bachna zaroori nahi – lekin zyada nahi peeni chahiye. Chai mein oxalate hota hai, jo calcium oxalate stone wale logon ke liye zyada intake harmful ho sakta hai. Isse bhi zyada problem ye hai ki chai/coffee mild diuretic hain – inka paani count nahi hota. Iska matlab hai ki agar aap chai peete ho lekin paani nahi, to aap effectively dehydrated ho rahe ho. Rule simple hai: chai peeni hai to uske double paani alag se peeya karo. Ek ya do cup chai roz acceptable hai.',
    },
    {
      _key: 'faq6',
      question: 'Pathri mein nimbu paani (lemon water) kaam karta hai?',
      answer: 'Haan – nimbu paani kidney stone prevention mein genuinely effective hai, sirf gharelu nuskha nahi hai. Nimbu mein citric acid hota hai jo urine mein citrate level badhata hai. Citrate calcium se bind karta hai aur use oxalate se milne se rokta hai – matlab stone banne ki process hi slow ho jaati hai. Research mein dekha gaya hai ki roz ek glass fresh lemon juice 24 ghante ke urine citrate ko meaningfully badhata hai. Fresh nimbu use karo – packaged lemon juice mein citrate kam hota hai. Subah ek glass lukewarm nimbu paani ek achhi habit hai stone-prone logon ke liye.',
    },
    {
      _key: 'faq7',
      question: 'Kya homeopathy se kidney stone dissolve ho sakti hai ya pass ho sakti hai?',
      answer: 'Homeopathy kidney stone mein practically do tarafon se kaam karta hai. Pehli – chhoti stones (specially ≤6mm calcium oxalate ya uric acid stone) ke natural passage mein help karta hai – urine flow smooth hoti hai, smooth muscle relaxation hoti hai, aur stone move karna easier ho jaata hai. Doosra – long-term mein stone banne ki tendency address karta hai. CCRH studies mein homeopathic treatment group mein stone passage rate aur pain reduction control group se better tha.',
    },
    {
      _key: 'faq8',
      question: 'Kidney stone aur UTI (urinary infection) mein kya fark hai?',
      answer: 'Dono alag conditions hain lekin ek doosre se connected bhi hain. UTI mein burning urination, frequent urge, cloudy urine, aur bukhaar hota hai – kamar mein dard UTI mein bhi ho sakta hai. Stone mein classic "renal colic" hota hai – wave-like intense pain jo side/back se start hota hai. Donon ek saath bhi ho sakte hain – struvite stone actually infection se hi banta hai. Agar dono ke symptoms saath aayein – especially bukhaar ke saath – to ye serious combination hai, turant doctor ke paas jaao. UTI test (urine culture) aur stone test (ultrasound) alag hain.',
    },
    {
      _key: 'faq9',
      question: 'Pathri mein kya nahi khana chahiye – India mein common mistakes kya hain?',
      answer: 'India mein sabse common galtiyan: (1) Palak – India mein roz khaya jaata hai, lekin calcium oxalate stone wale logon ke liye sabse harmful food hai. (2) Tamatar ke beej – beejon ko nikalke khao ya light cooking karo. (3) Zyada dal + non-veg combination daily – protein load kidney pe strain dalta hai. (4) Namak zyada – calcium excretion badh jaati hai. (5) Calcium supplements khud se – inhe doctor ke bina mat lo. Yeh sab avoid karne se aur paani zyada peene se recurrence ka risk kaafi ghatta hai.',
    },
    {
      _key: 'faq10',
      question: 'Kidney stone mein exercise karna chahiye ya nahi?',
      answer: 'Haan – light exercise kidney stone mein helpful hai, nahi chhodni chahiye. Walking (30 min daily) stone pass karne mein physically help karta hai – body movement se stone ureter mein neeche move karna easier hota hai. Heavy weight lifting ya high-impact exercise avoid karo acute pain mein. Ek study mein dekha gaya ki physically active log stone-prone honge to bhi unki recurrence rate sedentary logon se kam thi. Exercise kidney function bhi improve karta hai long-term mein. Mild dard ho to walk karo – intense pain mein rest karo aur doctor se milein.',
    },
    {
      _key: 'faq11',
      question: 'Bacchon mein kidney stone hoti hai kya? Kaise pata chalein?',
      answer: 'Haan – bacchon mein bhi kidney stone ho sakti hai, lekin adults se kam common hai. India mein dietary factors (high oxalate, kam paani), genetic conditions, aur UTIs bacchon mein stone ka cause ban sakte hain. Bacchon mein symptoms adults se alag hote hain: pet dard, urine mein blood, baar baar urine infection, ya vomiting without clear reason. Babies mein to sirf irritability aur crying bhi symptom ho sakti hai. Agar bachcha baar baar UTI se pareshan ho ya pet dard ki koi clear wajah na ho – ultrasound karwana chahiye. Homeopathy bacchon mein particularly safe option hai stone treatment mein.',
    },
    {
      _key: 'faq12',
      question: 'Pregnancy mein kidney stone ho jaaye to kya karein?',
      answer: 'Pregnancy mein kidney stone ho sakti hai – aur management tricky hoti hai kyunki X-ray aur kaafi medications avoid karnee padti hain. Ultrasound safe hai diagnosis ke liye. Hydration (paani zyada peena) pehla step hai. Mild analgesics (paracetamol type) doctor ki guidance mein. NSAIDS (ibuprofen, diclofenac) pregnancy mein avoid karne chahiye. Homeopathy pregnancy mein particularly relevant hai kyunki ye highly diluted medicines hain – side effects practically nil hote hain. Berberis vulgaris aur Cantharis ka use qualified homoeopath ki guidance mein safe maana jaata hai. Koi bhi treatment – homeopathic ya allopathic – apne OB-GYN aur homoeopath dono ko batake shuru karo.',
    },
    {
      _key: 'faq13',
      question: 'Kidney stone mein beer peena chahiye – suna hai isse pathri nikal jaati hai?',
      answer: 'Ye ek bahut common myth hai India mein. Beer diuretic hai – isse urine zyada aata hai – aur kuch logon ko lag jaata hai ki isse stone nikal gayi. Lekin ye scientific taur pe proven nahi hai ki beer stone dissolve ya pass karta hai. Usse bhi zyada important – alcohol dehydration karta hai body mein, liver pe strain dalta hai, aur uric acid badha sakta hai – jo stone ko worse kar sakta hai, khaas kar uric acid stone mein. Beer "treatment" nahi hai. Jo diuretic effect chahiye, woh 3 litre paani, nimbu paani, aur coconut water se kaafi better milta hai.',
    },
    {
      _key: 'faq14',
      question: 'KUB X-ray ya Ultrasound ya CT Scan – pathri ke liye kaun sa test best hai?',
      answer: 'Teeno alag purposes ke liye hain. Ultrasound: sab se pehle karwao – safe, radiation-free, kidney aur upper ureter mein stone dikhta hai, India mein har jagah available aur sasta. KUB X-ray: calcium stones dikhata hai, lekin small ya radiolucent stones (jaise uric acid) nahi dikhte. CT KUB (non-contrast): gold standard – sabse accurate, sab types ki stones, sab locations – lekin radiation aur cost zyada. Pregnancy mein CT avoid karo. Ultrasound se shuru karo, doctor bata dega aage kya zaroori hai. Blood test (uric acid, calcium, creatinine) aur 24-hour urine test bhi stone type confirm karte hain.',
    },
    {
      _key: 'faq15',
      question: 'Kidney stone ka dard suddenly band ho gaya – kya pathri nikal gayi?',
      answer: 'Dard band hona acha sign bhi ho sakta hai aur concerning bhi – dono possibilities hain. Good news: ho sakta hai pathri ureter se bladder mein aa gayi ya pass ho gayi – tab dard suddenly kam hota hai. Concerning: kabhi kabhi stone itni complete blockage kar deta hai ki kidney ke nerve signals temporarily band ho jaate hain – "silent obstruction" – dard nahi hota lekin kidney damage chal raha hota hai. Isliye dard band hone pe bhi ek ultrasound zaroor karwao confirm karne ke liye ki pathri actually pass hui ya bas position change ki. Agar saath mein bukhaar aaye to turant hospital.',
    },
    {
      _key: 'faq16',
      question: 'Kidney stone aur kidney failure mein kya connection hai?',
      answer: 'Ek ya do chhoti stones directly kidney failure nahi karti – ghabrao mat. Lekin repeated, untreated large stones ya chronic infection se kidney function slowly affect ho sakta hai saalon mein. Jo log baar baar stones ignore karte hain, infections treat nahi karte, aur follow-up nahi karte – unhe risk hai. Ek kidney mein stone + complete blockage + infection = kidney damage ho sakta hai jaldi. Regular monitoring – creatinine blood test, urine test, aur ultrasound – is risk ko practically eliminate kar deta hai agar timely karo.',
    },
    {
      _key: 'faq17',
      question: 'Pathri nikaalne ke baad kya karna chahiye – recurrence kaise rokein?',
      answer: 'Pathri nikaalne ke baad ka phase actually sabse important hota hai. ZAROOR KAREIN: Stone ka analysis (agar possible ho – type confirm karo), 24-hour urine test, serum calcium aur uric acid test. Diet type ke hisaab se adjust karo (calcium oxalate vs uric acid diet alag hai). Paani 3+ litre daily – permanently habit banao. 6-month interval pe ultrasound follow-up pehle 2 saalon mein. Homeopathy mein constitutional treatment is phase mein bahut effective hota hai – recurrence tendency address karta hai. Jo log sirf ESWL ya surgery karwa ke "done" samajh lete hain aur kuch nahi karte, unhe dobara stone 5 saal mein 50% chance se hoti hai.',
    },
    {
      _key: 'faq18',
      question: 'Pathri mein milk (doodh) peena chahiye ya nahi?',
      answer: 'Haan – limited dairy (doodh, dahi) calcium oxalate stone wale logon ke liye safe hai, aur actually helpful hai. Ye counter-intuitive lagta hai kyunki calcium stone ka naam hai – lekin dietary calcium actually intestine mein oxalate se bind karta hai aur use kidney tak pahunchne se rokta hai. Matlab: khane ke saath thoda dahi ya doodh lena oxalate absorption kam karta hai – stone ka risk bhi ghatta hai. Lekin calcium supplement pills alag story hain – unse stone risk badh sakta hai. Food form mein calcium = safe aur helpful. Pill form mein calcium without doctor advice = risky. Ye fark yaad rakho.',
    },
    {
      _key: 'faq19',
      question: 'Pathri mein gharelu ilaaj – kya sach mein kaam karta hai?',
      answer: 'Kuch "gharelu ilaaj" genuinely helpful hain, kuch sirf myths hain. JO KAAM KARTA HAI (evidence ke saath): Nimbu paani roz – citrate badhata hai stone rokne ke liye. Paani 3+ litre – sabse powerful gharelu ilaaj. Coconut water – natural diuretic. Tulsi aur methi ka paani – traditional use, oxalate reduction mein kuch evidence. JO NAHI KAAM KARTA / AVOID KARO: Beer (myth hai – harmful bhi ho sakta hai). Apple cider vinegar zyada lena – acidity se uric acid stone worse ho sakta hai. Patanjali ya unverified "stone dissolve" churan bina doctor ke mat lo – kuch mein oxalate-rich herbs hain. Gharelu ilaaj supportive role mein hain – primary treatment supplement nahi replace karte.',
    },
    {
      _key: 'faq20',
      question: 'Kidney stone pain relief ke liye kya lein – ghar pe?',
      answer: 'Acute renal colic mein: Paracetamol (Crocin 500mg-1g) – safe first line option, ghar pe le sakte hain. Diclofenac ya ibuprofen – zyada effective hain pain ke liye lekin kidney pe strain dalte hain, roz mat lo, doctor ki guidance mein. Hot water bag / heating pad lower back pe – muscle relaxation se thodi relief milti hai. Hydration – paani peena band mat karo dard mein. KABHI MAT KARO: Antibiotics khud se mat shuru karo (jab tak doctor na bole). Zyada painkillers back-to-back mat lo – kidney damage risk. Bukhaar + dard = turant hospital – ghar pe mat roko.',
    },
    {
      _key: 'faq22',
      question: 'Kidney stone vs Kidney cyst (gurde mein ganth) – dono mein kya fark hai?',
      answer: 'Dono alag conditions hain – confused mat karo. Kidney stone (pathri) solid mineral deposit hai jo urine mein mineral buildup se banta hai – pain karta hai, pass ho sakta hai. Kidney cyst fluid-filled sac hai kidney tissue mein – generally benign, often asymptomatic, incidentally ultrasound mein milta hai. Stone mein acute pain, hematuria, aur urinary symptoms hote hain. Simple cysts mein zyatar koi symptom nahi hota. Dono ka management alag hai – ultrasound report mein clearly differentiate hota hai. Agar report mein "cyst" likha hai to doctor se puchho ki ye simple cyst hai ya complex – aur follow-up kab karwana hai.',
    },
    {
      _key: 'faq23',
      question: 'Pathri mein yoga karna chahiye?',
      answer: 'Yoga kidney stone mein helpful ho sakta hai – kuch specific asanas urine flow better karte hain aur stone movement mein help karte hain. HELPFUL ASANAS: Pavanamuktasana (wind-relieving pose) – gas aur lower abdominal pressure kam karta hai. Bhujangasana (cobra pose) – kidney area stretch karta hai. Ushtrasana (camel pose) – urinary flow improve karta hai. AVOID: Acute dard ke waqt koi bhi vigorous asana mat karo. Kapalbhati zyada force ke saath – intense abdominal pressure stone movement uncomfortable kar sakti hai. Light yoga + walking combination stone-prone logon ke liye best maintenance routine hai.',
    },
  ],
  sources: [
    { _key: 's1', name: 'Council for Research in Homoeopathic Medicine (CCRH) – Clinical Studies on Uroli', url: 'ccrhindia.nic.in', year: '2024' },
    { _key: 's2', name: 'National Kidney Foundation – Kidney Stones Overview | 2023 | www.kidney.org', url: 'ccrhindia.nic.in', year: '2024' },
    { _key: 's3', name: 'Urology Care Foundation – What are Kidney Stones? | 2022 | www.urologyhealth.org', url: 'ccrhindia.nic.in', year: '2024' },
    { _key: 's4', name: 'NCBI / PubMed – Dietary Citrate & Kidney Stone Prevention | Journal of Urology |', url: 'ccrhindia.nic.in', year: '2024' },
    { _key: 's5', name: 'Indian Journal of Urology – Epidemiology of Urolithiasis in India | 2020', url: 'ccrhindia.nic.in', year: '2024' },
    { _key: 's6', name: 'WHO – Global Kidney Disease Burden Report | 2021', url: 'ccrhindia.nic.in', year: '2024' },
  ],
  quickFacts: [
    'Kidney stone (pathri) – gurde mein mineral crystals ka jama hona',
    'India mein ~12% population kabhi na kabhi kidney stone se affected – hot climate aur dietary habits major contributors hain',
    'Chhoti stone (≤6mm): 2–6 weeks natural passage. Homeopathic constitutional treatment: 3–6 months for recurrence prevention',
  ],
  doctorNote: 'Mere clinic mein jo common pattern dikhta hai – patients pathri nikalne ke baad treatment band kar dete hain. Asal kaam tab shuru hota hai – tendency address karna. Berberis vulgaris aur Lycopodium mujhe recurrence prevention mein consistent results dete hain jab constitution ke basis pe prescribe karein.',
  reviewDate: 'April 2026',
}

async function seed() {
  console.log('🌱 Seeding Kidney Stone (Pathri)...')
  const result = await client.createOrReplace(doc)
  console.log('✅ Kidney Stone created/updated:', result._id)
  console.log('🌐 Live at: https://homeopedia.in/diseases/kidney-stone')
}

seed().catch(console.error)
