import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-lactose-intolerance',
  _type: 'disease',
  title: 'Lactose Intolerance',
  hindiName: 'Doodh Na Pachna / Dugdh Asahanshilta',
  slug: { _type: 'slug', current: 'lactose-intolerance' },
  category: 'Digestive',
  publishedAt: '2026-05-10T00:00:00.000Z',
  metaTitle: 'Lactose Intolerance – Doodh Ke Dard Ka Ilaaj | Homeopedia',
  metaDescription: 'Lactose intolerance (doodh na pachna) ka ilaaj, diet chart, homeopathic treatment aur gharelu upay – simple Hinglish mein. Verified, doctor-reviewed.',

  heroText: 'Lactose intolerance ek digestive condition hai jisme body doodh aur dairy products mein paaya jaane wala sugar – jise "lactose" kehte hain – theek se digest nahi kar paati. Jab ye undigested lactose aapki large intestine tak pahunchta hai, to bacteria usse ferment karte hain aur gas, bloating, aur diarrhea hota hai. Ye koi allergy nahi hai – isme immune system involve nahi hota, sirf ek enzyme (lactase) ki kami hoti hai. India mein ye condition bahut common hai – kuch studies ke anusaar 60-70% South Asian adults mein lactase ki activity umar ke saath kam hoti hai.',

  quickFacts: {
    whatItIs: 'Lactase enzyme ki kami ki wajah se doodh ka sugar (lactose) digest na ho pana – genetic ya gut damage ki wajah se; ye allergy nahi hai',
    howCommon: 'Lagbhag 60-70% South Asian adults mein adult-onset lactose intolerance – India mein ye ek bahut common lekin underdiagnosed condition hai',
    treatmentDuration: 'Dietary management lifelong; secondary type mein gut heal hone par 4-8 hafte mein improvement possible',
    successRate: 'Jo patients dahi aur ghee ko doodh ki jagah use karte hain aur gut sensitivity ke liye homeopathic treatment lete hain, unki quality of life dramatically better ho jaati hai bina dairy poori tarah chhode',
  },

  causes: [
    'Lactase enzyme ki kami – small intestine sufficient lactase produce nahi kar paati',
    'Genetics – South Asian, African, East Asian ancestry mein genetically common hai',
    'Intestinal injury ya infection – gastroenteritis, celiac disease, ya Crohn\'s se intestinal lining damage hona',
    'Umar badhna – adult hone ke saath lactase production naturally reduce hoti hai',
    'Surgery ya chemotherapy – kuch intestinal surgeries ke baad enzyme production affect hoti hai',
    'Long-term antibiotic use – gut bacteria aur intestinal cells pe negative impact',
  ],

  riskFactors: [
    'South Asian, African, ya East Asian ancestry – genetic predisposition sabse zyada',
    '20-40 saal ki umar ke adults – is umar mein symptoms aana common hai',
    'Jo log recent mein severe gastroenteritis se guzre hon',
    'Celiac ya Crohn\'s disease patients – intestine already compromised hoti hai',
    'Jo log bahut zyada dairy ek saath lete hain – body gradually less enzyme banati hai',
    'Premature babies – lactase enzyme develop nahi hoti',
  ],

  complications: [
    'Calcium deficiency – dairy avoid karne se calcium intake dramatically girta hai, jo haddiyon ke liye nuksandeh hai',
    'Osteoporosis ka risk – khaaskar women mein, long-term low calcium se bone density ghatti hai',
    'Vitamin D deficiency – dairy ek main source hai, iska bhi impact padta hai',
    'Poor quality of life – social events, travel, functions mein khana skip karna padta hai jo mental health affect karta hai',
  ],

  types: [
    {
      _key: 'type1',
      name: 'Primary Lactose Intolerance (Sabse Common)',
      description: 'Ye sabse zyada paaya jaane wala type hai. Bachpan mein body bahut lactase enzyme banati hai, lekin umar badhne ke saath – khaskar 5-7 saal ke baad – lactase production naturally kam hoti jaati hai. Genetic factor mainly responsible hai. South Asian, African, aur East Asian ancestry walon mein ye zyada common hai. India mein jo log kehte hain "pehle doodh thik lagta tha, ab nahi lagta" – wo mostly is type ke patient hote hain.',
    },
    {
      _key: 'type2',
      name: 'Secondary Lactose Intolerance',
      description: 'Ye kisi aur bimari ya antibiotic treatment ke baad hota hai. Jab small intestine ki inner lining damage hoti hai – jaise gastroenteritis, celiac disease, Crohn\'s disease, ya heavy antibiotic course ke baad – lactase banane wali cells temporarily ya permanently khatam ho jaati hain. Isme original disease theek hone ke baad lactose intolerance bhi sudhar sakta hai. Ye type bacchon mein bhi dikh sakta hai – viral diarrhea ke baad.',
    },
    {
      _key: 'type3',
      name: 'Congenital Lactose Intolerance (Janm Se)',
      description: 'Bahut rare hai. Naye paida hue bacche mein bhi lactase enzyme bilkul nahi hoti – ye ek genetic mutation ki wajah se hota hai. Aisa baccha breastfeeding ya normal formula pe bhi react karta hai. Ye medical emergency ki tarah treat hota hai aur turant specialist ki zaroorat hoti hai.',
    },
    {
      _key: 'type4',
      name: 'Developmental / Premature Lactose Intolerance',
      description: 'Jo bacche samay se pehle (premature) paida hote hain, unke small intestine mein lactase enzyme poori tarah develop nahi hui hoti. Lekin jaisa jaisa baccha barhta hai, ye aksar theek ho jaata hai.',
    },
  ],

  symptoms: [
    {
      _key: 'sym1',
      category: 'Pet Ke Symptoms (Digestive Complaints)',
      items: [
        'Pet mein dard ya marodh – especially doodh ya dairy ke 30 min se 2 ghante baad',
        'Bloating – pet phula hua, tight feel hona',
        'Gas aur badi – bahut zyada flatulence',
        'Diarrhea – loose, watery motions, sometimes urgent',
        'Nausea – ulti jaisi feeling, khaskar khali pet dairy lene ke baad',
      ],
    },
    {
      _key: 'sym2',
      category: 'Timing-Based Symptoms (Kab Aate Hain)',
      items: [
        '30 minutes se 2 ghante ke andar symptoms start hote hain dairy lene ke baad',
        'Raat ko symptoms worse ho sakte hain agar dinner mein dairy li ho',
        'Khali pet doodh lena worst hota hai – symptoms zyada intense hote hain',
        'Thodi matra mein kuch log theek rehte hain – zyada quantity mein symptoms trigger hote hain',
      ],
    },
    {
      _key: 'sym3',
      category: 'Quantity-Dependent Symptoms',
      items: [
        'Kuch logo ko sirf ek cup doodh se hi symptoms hote hain',
        'Kuch 2-3 cups tak tolerate kar lete hain',
        'Fermented dairy (dahi, paneer) zyada tolerable hoti hai – lactose partially already break ho chuka hota hai',
        'Ice cream aur soft cheese mein zyada lactose hota hai – symptoms zyada trigger hote hain',
      ],
    },
  ],

  homeopathyBenefits: [
    'Gut ki hypersensitivity aur reactivity kam karna – jo dairy se trigger hoti hai',
    'Secondary lactose intolerance mein original gut damage ke healing mein support',
    'Gas, bloating, aur pet dard mein symptomatic relief',
    'Stress-triggered digestive issues address karna – stress se gut permeability badhti hai',
    'Long-term gut health improve karna – recurrence ki tendency reduce karna',
  ],

  medicines: [
    {
      _key: 'med1',
      name: 'China Officinalis (Cinchona)',
      bestFor: 'Jo patient dairy ke baad extreme bloating, gas aur weakness feel kare – pet bahut phula hua lagta hai lekin gas nahi nikal paati, aur khane ke baad exhausted feel hote hain.',
      keyIndications: [
        'Extreme abdominal distension – pet bahut phula lekin gas pass nahi hoti',
        'Weakness after eating – khane ke baad drained feel hona',
        'Nutrients properly absorb nahi hote – body exhausted rehti hai',
      ],
    },
    {
      _key: 'med2',
      name: 'Natrum Muriaticum',
      bestFor: 'Jo patient emotionally reserved ho, stress mein zyada rehta ho, aur dairy lene ke baad diarrhea ke saath nausea feel kare – khaaskar subah ke waqt symptoms zyada hon.',
      keyIndications: [
        'Subah ke waqt zyada symptoms – subah dairy ke baad diarrhea aur nausea',
        'Stress aur emotional suppression se digestive issues – gut-brain connection prominent',
        'Emotionally reserved patients mein digestive sensitivity',
      ],
    },
    {
      _key: 'med3',
      name: 'Pulsatilla',
      bestFor: 'Jo patient fatty dairy items – ice cream, cream, full-fat doodh – ke baad zyada suffer kare, aur jise open air mein better feel ho, symptoms mein variability ho.',
      keyIndications: [
        'Fatty dairy ke baad symptoms – ice cream, cream, full-fat milk worst triggers',
        'Symptoms changeable – kabhi diarrhea, kabhi bloating, kabhi nausea',
        'Open air mein better – stuffy room mein symptoms worse',
      ],
    },
    {
      _key: 'med4',
      name: 'Carbo Vegetabilis',
      bestFor: 'Jo patient dairy ke baad bahut zyada gas aur bloating se pareshan ho – upper aur lower abdomen dono phule hue lagte hon, eructation (dakar) se thodi rahat mile.',
      keyIndications: [
        'Extreme flatulence – upper aur lower abdomen dono mein gas',
        'Dakar se thodi rahat milti hai – eructation relieving',
        'Sluggish digestion ke saath thakan – digestive system slow lagti hai',
      ],
    },
    {
      _key: 'med5',
      name: 'Lycopodium Clavatum',
      bestFor: 'Jo patient thodi matra mein dairy se bhi bloating feel kare, lower abdomen mein gas zyada ho, aur shaam 4-8 baje symptoms worse hon – liver aur digestion dono slow hon.',
      keyIndications: [
        'Thoda khaane se pet bahut bhar jaata hai – even small amounts cause fullness',
        'Shaam 4-8 baje symptoms worse – characteristic timing',
        'Lower abdomen mein gas zyada – rumbling aur distension lower mein',
      ],
    },
  ],

  dietInclude: [
    {
      _key: 'di1',
      category: 'Calcium-Rich Dairy Alternatives',
      emoji: '🥛',
      items: [
        'Ragi (finger millet) – India ka apna calcium powerhouse, 100g mein 344mg calcium',
        'Til (sesame seeds) – calcium se bhari, chikki ya chutney mein lein',
        'Fortified soy milk (soya doodh) – dairy jaisi calcium aur protein, lactose bilkul nahi',
        'Rajma aur chana – plant-based calcium aur protein dono',
        'Saag (palak, methi, sarson) – iron ke saath calcium bhi milta hai',
      ],
    },
    {
      _key: 'di2',
      category: 'Tolerable Dairy Options',
      emoji: '🧀',
      items: [
        'Dahi (curd/yogurt) – fermentation se lactose 25-50% pehle se break ho jaata hai, zyada tolerable',
        'Ghee – lactose practically zero hoti hai pure ghee mein, India mein easily available',
        'Lactose-free doodh – same nutrition, lactase enzyme se pehle hi break ki gayi lactose',
      ],
    },
    {
      _key: 'di3',
      category: 'Gut-Friendly Foods',
      emoji: '🌾',
      items: [
        'Banana – pectin gut lining soothe karta hai, gas bhi kam karta hai',
        'Adrak (ginger) – anti-inflammatory, nausea aur bloating mein turant rahat',
        'Jeera (cumin) water – digestive enzyme secretion stimulate karta hai',
        'Boiled vegetables (lauki, tinda, tori) – light aur gut pe minimum stress',
        'Rice (chawal) – light, easily digestible, gas nahi banata',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'High Lactose Dairy',
      emoji: '❌',
      items: [
        'Full cream doodh (regular milk) – lactose content sabse zyada, worst trigger',
        'Ice cream – lactose + fat combination – double trouble for digestion',
        'Cream soups aur cream-based gravies – hidden lactose, restaurant mein dhyan rakhein',
        'Soft cheeses (ricotta, cottage cheese) – lactose zyada hoti hai',
      ],
    },
    {
      _key: 'da2',
      category: 'Hidden Lactose Wale Foods',
      emoji: '⚠️',
      items: [
        'Biscuits aur cookies – milk powder use hoti hai, label zaroor padein',
        'Bread aur bakery items – milk solids common ingredient hai',
        'Instant soups aur packet gravies – whey powder (dairy byproduct) hota hai',
        'Milk chocolate – milk solids zyada; dark chocolate better option hai',
      ],
    },
    {
      _key: 'da3',
      category: 'Gas-Triggering Combinations (Dairy Ke Saath Avoid Karein)',
      emoji: '💨',
      items: [
        'Beans + dairy ek saath – double gas production, avoid combination',
        'Carbonated drinks (soda, cola) ke saath dairy – already gas produce karte hain',
        'Fried foods ke saath dairy – digestion slow hota hai, lactose longer gut mein rehti hai',
        'Cauliflower (gobhi) + dairy – gobhi already gas producer hai',
      ],
    },
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Lactose intolerance kya hoti hai aur ye milk allergy se kaise alag hai?',
      answer: 'Lactose intolerance ek digestive condition hai jisme body lactase enzyme ki kami ki wajah se doodh ka sugar (lactose) digest nahi kar paati – result hota hai gas, bloating, aur diarrhea. Milk allergy bilkul alag cheez hai – isme immune system milk protein ke against react karta hai, jisse skin rash, wheezing, ya severe allergic reaction ho sakta hai. Lactose intolerance mein immune system involve nahi hota – ye sirf ek enzyme ki kami hai. Agar aapko rash, saans lene mein takleef, ya severe reaction ho to ye allergy ho sakti hai – turant doctor se milein. Agar sirf gas aur bloating ho dairy ke baad to likely intolerance hai.',
    },
    {
      _key: 'faq2',
      question: 'Kya lactose intolerance permanently theek ho sakti hai?',
      answer: 'Primary lactose intolerance (genetic/age-related) mein enzyme permanently wapas nahi aati – lekin life practically normal ho sakti hai sahi management se. Bahut se log ek cup doodh ya dahi tolerate karte hain bina koi symptom ke – clue ye hai ki threshold find karo aur ussi ke hisaab se khao. Secondary lactose intolerance – jo gut infection ya antibiotic ke baad hoti hai – mein original problem theek hone ke baad lactose tolerance wapas aa sakti hai. Homeopathy secondary type mein gut healing support karne mein madadgar ho sakti hai. Overall goal "cure" se zyada "control" hai – aur control mein aap normal life ji sakte hain.',
    },
    {
      _key: 'faq3',
      question: 'Kya dahi (curd) lactose intolerant log kha sakte hain?',
      answer: 'Haan – zyada tar lactose intolerant log dahi tolerate kar sakte hain. Dahi banane ki process mein bacteria lactose ko ferment karte hain, jisse dahi ka lactose content significantly kam ho jaata hai – roughly 25-50% pehle se break ho chuka hota hai. Fresh, homemade dahi best hai – store-bought flavored dahi mein added milk solids ho sakte hain. Raat ko dahi heavy ho sakta hai – din mein lein. Agar phir bhi dahi se problem ho to matra kam karein – 2-3 tablespoon se start karein.',
    },
    {
      _key: 'faq4',
      question: 'Lactose intolerance mein calcium kahan se milega – agar doodh nahi pee sakte?',
      answer: 'Calcium ke best non-dairy Indian sources hain: Ragi (nachni) – 344mg calcium per 100g, jo almost doodh ke barabar hai. Til (sesame) – 975mg per 100g, sabse rich plant source. Rajma, chana, moong – 60-130mg per cup. Saag (palak, methi, sarson) – 100-150mg per cup cooked. Fortified soy milk ya oat milk – companies specially calcium add karti hain. In sources ko variety mein lene se calcium ka target easily pura ho jaata hai. Vitamin D bhi zaroor lein – dhoop mein baithein – kyunki calcium absorb karne ke liye Vitamin D chahiye.',
    },
    {
      _key: 'faq5',
      question: 'Kya ghee mein bhi lactose hoti hai?',
      answer: 'Practically nahi – pure ghee mein lactose almost zero hoti hai. Ghee clarified butter hai – banate waqt milk solids (jisme lactose hoti hai) alag ho jaate hain aur sirf pure fat bachta hai. Isliye jo log doodh bilkul tolerate nahi kar paate, wo ghee comfortably use kar sakte hain. Ghee India ka traditional superfood hai aur lactose intolerant patients ke liye ek safe dairy option hai. Condition: ghee pure hona chahiye – desi, pure ghee ya trusted brand ka ghee use karein.',
    },
    {
      _key: 'faq6',
      question: 'Chai (tea with milk) peena band karna hoga kya lactose intolerance mein?',
      answer: 'Zaroorat nahi ki poori band karein – adjustment karo. Sabse acha option: oat milk ya soy milk se chai banao – taste almost same rehta hai. Lactose-free doodh (Amul ya similar brands) use kar sakte hain – same taste, zero problem. Ya doodh ki matra bahut kam kar do – half cup chai mein 2-3 tablespoon doodh kuch logon ko bilkul fine hota hai. Jo log bahut kam matra mein tolerate karte hain, unhe ek-do chamach doodh waali chai se problem nahi hoti. Experiment karo – apna threshold janno.',
    },
    {
      _key: 'faq7',
      question: 'Lactose intolerance mein paneer kha sakte hain?',
      answer: 'Ye individual pe depend karta hai. Paneer mein doodh se kam lactose hoti hai – banane ki process mein whey (jisme zyada lactose hoti hai) alag ho jaati hai. Kuch lactose intolerant log 50-100g paneer easily tolerate karte hain, kuch nahi. Test karo: thodi matra (30g) se shuru karo, dekhein reaction aata hai ya nahi. Agar 1-2 ghante mein koi problem nahi, to aap comfortable threshold pe hain. Ghar ka fresh paneer market se zyada better hota hai.',
    },
    {
      _key: 'faq8',
      question: 'Pet mein doodh ke baad gas aur dard ka kya ilaaj hai – turant rahat ke liye?',
      answer: 'Turant rahat ke liye: Adrak wala paani peeein – adrak gas aur spasm mein effective hai. Jeera ko dry roast karke chaba lein ya jeera paani peeein. Heating pad ya hot water bottle pet pe rakhein – muscle spasm mein rahat milti hai. Thodi chehalkadmi karein – movement gas ko move karne mein help karti hai. Hing ek chutki ghee mein warm water mein mix karein – traditional Indian remedy jo actually kaam karti hai. Yeh sab symptomatic relief ke liye hain. Long-term ke liye dietary changes aur homeopathic treatment se root cause address karna zaroori hai.',
    },
    {
      _key: 'faq9',
      question: 'Kya lactose intolerance bacchon mein bhi hoti hai?',
      answer: 'Haan, lekin type pe depend karta hai. Congenital lactose intolerance (janm se) bahut rare hai lekin serious hai – newborn bhi breastmilk pe react karta hai, ye medical emergency hai. Secondary lactose intolerance bacchon mein common hai – viral diarrhea ya gastroenteritis ke baad temporarily develop ho sakti hai; gut heal hone ke baad 2-4 hafte mein tolerance wapas aa sakti hai. Primary (genetic) type usually 5-7 saal ke baad develop hoti hai. Agar chhota baccha (6 months se kam) doodh pe react kar raha hai – rash, severe diarrhea, weight gain nahi – to doctor se milna zaroori hai.',
    },
    {
      _key: 'faq10',
      question: 'Kya pregnancy mein lactose intolerance safe hai – baby pe koi asar?',
      answer: 'Pregnancy mein lactose intolerance mein baby directly affect nahi hota – lekin calcium intake pe dhyan dena bahut zaroori hai. Pregnancy mein calcium ki zaroorat badh jaati hai (1000mg/day) aur agar dairy avoid kar rahe hain to alternative sources zaroor lein – ragi, til, rajma, fortified plant milks. Calcium ki kami se baby apni zaroorat ke liye ma ki haddiyon se calcium lega – jo ma ke liye osteoporosis risk badhata hai. Good news: kuch women mein pregnancy ke dauran lactose tolerance temporarily improve hoti hai – hormonal changes ki wajah se.',
    },
    {
      _key: 'faq11',
      question: 'Lactose intolerance ka test ghar pe ho sakta hai ya hospital jaana padega?',
      answer: 'Ghar pe ek simple elimination test kar sakte hain – 2 hafte dairy completely band karo aur symptoms note karo. Agar 2 hafte mein symptoms significantly kam ho jaayein aur wapas dairy lene pe aayein – to ye strongly suggest karta hai lactose intolerance. Lekin proper diagnosis ke liye: Hydrogen Breath Test sabse accurate aur most recommended hai. Available: most metro cities ki labs mein (SRL, Metropolis, Thyrocare). Cost: approximately Rs. 800-1500. IBS ya celiac disease rule out karna bhi zaroori hai kyunki symptoms similar hote hain.',
    },
    {
      _key: 'faq12',
      question: 'Lactose-free milk normal doodh se better hai – kya ye real hai ya marketing?',
      answer: 'Ye real hai, marketing nahi. Lactose-free milk mein wohi nutrients hain jo regular milk mein hote hain – calcium, protein, Vitamin D – sirf lactose nahi hai. Banate waqt lactase enzyme add ki jaati hai jo lactose ko pehle se break kar deti hai. Taste thoda zyada meetha lagta hai kyunki broken lactose naturally sweeter hoti hai. Amul, Mother Dairy jaisi brands India mein lactose-free variants laanchi hain – price thoda zyada hai lekin benefit real hai. Jo log doodh miss karte hain – chai, coffee, sweets mein – lactose-free milk unke liye best solution hai.',
    },
    {
      _key: 'faq13',
      question: 'Kya lactose intolerance aur IBS ek saath ho sakti hain?',
      answer: 'Haan – aur ye bahut common combination hai. Lactose intolerance aur IBS ke symptoms almost identical lagte hain – bloating, gas, diarrhea, pet dard. Difference: IBS stress aur various foods se trigger hoti hai – dairy ke alawa bhi. Lactose intolerance specifically dairy ke baad symptoms deta hai. Dono ek saath bhi ho sakti hain – IBS mein gut sensitivity badh jaati hai jisse lactose intolerance ke symptoms worse ho jaate hain. Homeopathy dono conditions mein gut sensitivity aur reactivity address karne mein helpful hai.',
    },
    {
      _key: 'faq14',
      question: 'Kya lactase enzyme ki tablet ya supplement le sakte hain?',
      answer: 'Haan – lactase enzyme supplements actually kaam karte hain aur medically supported hain. Ye tablets dairy khaane/peene se pehle leni hoti hain – externally lactase provide karti hain jo body nahi bana sakti. India mein ye pharmacy pe available hain. Mildly intolerant logon mein excellent results milte hain. Severely intolerant mein bhi kaafi help karta hai. Ye supplement dietary change ka replacement nahi hai – puri management ke ek part ke roop mein use karein.',
    },
    {
      _key: 'faq15',
      question: 'Kya stress se lactose intolerance worse ho sakti hai?',
      answer: 'Bilkul haan – aur ye bahut important lekin underreported connection hai. Stress gut ki permeability badhaata hai aur intestinal motility affect karta hai – jisse jo lactose already partially tolerable thi, wo bhi symptoms trigger karne lagti hai. Gut-brain axis (brain aur gut ka direct connection via vagus nerve) real aur scientifically proven hai. Practical implication: agar aap stress mein ho, us waqt dairy intake aur bhi carefully manage karein. Homeopathy is connection ko specifically address karta hai – emotional state aur gut health ko ek saath treat karna homeopathy ka core principle hai.',
    },
    {
      _key: 'faq16',
      question: 'Doodh se pet mein dard ka gharelu ilaaj kya hai – turant kya karein?',
      answer: 'Turant relief ke liye ye gharelu upay try karein: Adrak + Shehad – ek inch adrak ka ras aur ek chamach shehad warm paani mein – gas aur spasm mein effective. Hing ka paani – ek chutki hing warm paani mein – India ka traditional anti-gas remedy, actually kaam karta hai. Saunf (fennel seeds) chaba lein ya saunf ka paani peeein – digestive antispasmodic hai. Jeera paani – jeera boil karo aur ghoot ghoot peeein – enzyme secretion stimulate karta hai. Pet pe clockwise direction mein gentle massage – gas movement mein help karta hai.',
    },
    {
      _key: 'faq17',
      question: 'Kya lactose intolerance mein Indian sweets (mithai) kha sakte hain?',
      answer: 'Zyada tar Indian mithai lactose intolerant patients ke liye challenging hai – kyunki khoya, mawa, condensed milk – sab high lactose ingredients hain. Avoid karein: Gulab jamun (khoya-based), barfi, peda, rasgulla, kheer. Safer options: Besan ke laddoo (bina doodh ke), halwa agar pure ghee se bana ho, dark chocolate, mango ya fruit-based desserts. Ghar pe dairy-free versions bana sakte hain – soy milk se kheer, coconut milk se payasam. Bahar events mein: thodi matra mein khao aur lactase supplement pehle le lena ek practical strategy hai.',
    },
    {
      _key: 'faq18',
      question: 'Kya yogurt/probiotic lena lactose intolerance mein helpful hai?',
      answer: 'Haan – aur ye evidence-backed hai. Probiotic-rich dahi (curd with live cultures) do kaam karta hai: lactose digest karne mein help karta hai (bacteria lactase produce karte hain in situ) aur gut microbiome improve karta hai jo overall digestion better karta hai. Fresh, homemade dahi mein live cultures zyada hote hain – pasteurized store dahi mein kam. Kanji (fermented black carrot drink, North Indian), idli-dosa fermented batter, aur kombucha bhi gut-friendly options hain.',
    },
    {
      _key: 'faq19',
      question: 'Lactose intolerance ke liye kaunse tests hote hain aur kahan karwayein?',
      answer: 'Teen main diagnostic tests available hain. Hydrogen Breath Test – sabse accurate aur most recommended; aap lactose solution peete hain, phir breath sample dete hain; available: most metro cities ki labs mein (SRL, Metropolis, Thyrocare); cost: approximately Rs. 800-1500. Lactose Tolerance Blood Test – lactose solution peene ke baad blood glucose check hoti hai; less accurate. Elimination Diet (ghar pe) – 2 hafte dairy band karo, symptoms monitor karo. Agar celiac ya IBS ka doubt hai, to additional tests doctor suggest karenge.',
    },
    {
      _key: 'faq20',
      question: 'Kya regular exercise lactose intolerance mein koi fark karta hai?',
      answer: 'Direct enzyme production pe exercise ka koi direct effect nahi hota – exercise lactase nahi badhaata. Lekin indirect benefits hain: regular exercise gut motility improve karti hai – food faster move hota hai, fermentation kam hoti hai. Stress reduction hoti hai – aur stress gut sensitivity badhaata hai. Practical tip: dairy-containing meal ke baad 15-20 minute light walk karo – digestion speed karta hai aur bloating reduce hoti hai. Vigorous exercise right after eating avoid karein.',
    },
    {
      _key: 'faq21',
      question: 'Kya India mein lactose intolerance common hai – kitne log hain?',
      answer: 'Haan – India mein ye bahut zyada common hai aur awareness bahut kam hai. Research ke anusaar South Asian population mein adult-onset lactose intolerance ki prevalence 60-70% tak ho sakti hai – matlab 10 mein se 6-7 adults mein lactase activity umar ke saath kam hoti hai. Ye global comparison mein high hai – Northern Europeans mein ye 5-17% hai. Fir bhi India mein ye "diagnosis" rarely hoti hai kyunki doodh se problem ko log normal maante hain. Khaaskar South India aur East India mein genetic predisposition aur zyada hai. Ye ek underdiagnosed condition hai – agar aapko regular dairy ke baad symptoms hain, test karwana worth it hai.',
    },
  ],

  sources: [
    'National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK), NIH | 2023 | niddk.nih.gov',
    'Misra A, et al. – Nutrition and metabolic diseases in South Asians | Lancet Diabetes & Endocrinology | 2017',
    'Suri S, et al. – Lactase persistence and milk consumption in Indian populations | Indian Journal of Gastroenterology | 2018',
    'Swagerty DL, Walling AD, Klein RM. Lactose Intolerance | American Family Physician | 2002',
    'CCRH – Clinical Research in Gastrointestinal Disorders (Functional Dyspepsia, IBS) | CCRH Bulletin | 2019',
  ],

  doctorNote: 'Clinic mein jo sabse common story sunne ko milti hai: "Doctor saab, doodh pehle fine lagta tha, ab bahut gas hoti hai" – ye Primary Lactose Intolerance ka classic presentation hai. Mera experience ye raha hai ki jo patients dahi aur ghee ko doodh ki jagah use karte hain aur homeopathic treatment le lete hain gut sensitivity ke liye, unki quality of life dramatically better ho jaati hai bina dairy ko poori tarah chhode. Secondary type – jo gastroenteritis ke baad develop hua ho – mein mujhe homeopathy se achhe results mile hain gut healing mein support ke liye. — Dr. Shadab, Homeopedia.in',
}

async function seed() {
  const result = await client.createOrReplace(doc)
  console.log('✅ Lactose Intolerance created/updated:', result._id)
  console.log('🌐 Live at: https://homeopedia.in/diseases/lactose-intolerance')
  console.log('🎉 100 DISEASES COMPLETE — MILESTONE ACHIEVED!')
}

seed().catch(console.error)
