import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-dyspepsia',
  _type: 'disease',
  title: 'Dyspepsia',
  hindiName: 'Badhazmi / Apach / Ajeerna',
  slug: { _type: 'slug', current: 'dyspepsia' },
  category: 'Digestive',
  publishedAt: '2026-05-05T00:00:00.000Z',
  metaTitle: 'Badhazmi Ka Permanent Ilaaj | Homeopedia',
  metaDescription: 'Badhazmi, pet mein jalan, gas, bloating – jaanein Dyspepsia ke karan, prakar, aur Homeopathy se permanent relief kaise milti hai. Expert guide.',

  heroText: 'Dyspepsia – jise aam bhasha mein Badhazmi ya Apachan kehte hain – ek aisi paachan sambandhit sthiti hai jisme khana khane ke baad pet mein bhari, taklif, jalan, ya dard mehsoos hota hai. Ye koi ek baar ki problem nahi – jab ye baar baar aaye aur hafte-hafte chale to ise Chronic Dyspepsia kehte hain. India mein har 5 mein se 1 vyakti is samasya se pareshan hai, phir bhi zyaadatar log ise sirf "gas ki problem" samajhkar chhod dete hain. Sahi treatment se is bimari mein permanent relief milna possible hai.',

  quickFacts: {
    whatItIs: 'Khana khane ke baad pet mein bhaari pan, jalan, gas, ya dard – baar baar aaye to Chronic Dyspepsia; sirf "gas ki problem" nahi – paachan tantra ki real bimari',
    howCommon: 'Approximately 20-30% adults India mein Dyspepsia se affected hain; ICMR 2021 data; zyaadatar antacid se kaam chalate hain aur root cause treat nahi karte',
    treatmentDuration: 'Acute cases: 1-3 din | Chronic dyspepsia: 4-12 hafte consistent treatment; diet aur lifestyle saath mein theek karein to results jaldi aate hain',
    successRate: 'Homeopathy mein Functional Dyspepsia (jisme tests normal aate hain) ke cases mein constitutional treatment se meaningful improvement documented hai; Boericke\'s Materia Medica – classic reference for digestive remedies',
  },

  causes: [
    'H. pylori Bacterial Infection – stomach mein ek khaas bacteria jo lining ko damage karta hai aur acid imbalance create karta hai; India mein bahut common',
    'Gastric Acid Imbalance – stomach mein acid zyada ya kam hona jis wajah se khana theek se hazm nahi hota; antacid sirf temporarily cover karta hai',
    'Irregular Eating Habits – waqt pe na khana, ek baar mein bahut zyada khana, ya raat ko bhari khana lekar sona; digestive clock disturb hoti hai',
    'Chronic Stress aur Anxiety – brain aur gut ka direct connection hota hai; stress mein digestive enzymes kam bante hain; Functional Dyspepsia ka main cause',
    'Long-Term Painkiller / Antibiotic Use – NSAIDs, Aspirin, antibiotics stomach ki protective lining ko weaken karti hain; drug-induced type',
    'Underlying Conditions – GERD, peptic ulcer, IBS, fatty liver, ya gallbladder ki problem se bhi dyspepsia ho sakti hai; Organic Dyspepsia',
  ],

  riskFactors: [
    '40 saal se upar ke log – digestive enzymes naturally kam hone lagte hain; acid production bhi slow hoti hai',
    'Jo log roz spicy, oily, ya processed food khate hain – gut lining continuously irritated rehti hai',
    'Smokers aur alcohol peene wale – stomach lining directly damage hoti hai; bile secretion bhi disturb hoti hai',
    'Office workers aur students – sedentary lifestyle + high stress combination; gut-brain axis pe seedha asar',
    'Jo log khana jaldi jaldi nigalte hain bina chhabane ke – hawa bhi andar jaati hai; amylase ka kaam nahi hota',
    'Diabetes, thyroid, ya liver disease ke patients – digestive system pehle se hi stressed; metabolism slow hoti hai',
  ],

  complications: [
    'Peptic Ulcer Disease – acid se stomach ya small intestine mein ghav ban sakte hain jo aage jaake serious ho sakte hain; bleeding ka risk',
    'Nutritional Deficiencies – khana theek se hazm na hone par iron, B12, zinc jaise zaroori tattva body ko nahi milte; thakaan aur kamzori',
    'GERD aur Esophagitis – chronic acid reflux se food pipe ki lining damage ho sakti hai; long-term cancer risk bhi',
    'Mental Health Impact – chronic pet ki taklif anxiety aur depression ko aur badha deti hai – ek vicious cycle ban jaata hai',
  ],

  types: [
    {
      _key: 'type1',
      name: 'Functional Dyspepsia (Sabse Common)',
      description: 'Sabse common type – koi bhi test normal aata hai (endoscopy, ultrasound sab theek) phir bhi taklif hoti rehti hai. Iska seedha sambandh gut-brain axis aur stress se hai. Anxiety, depression, ya high-stress lifestyle wale zyada affected. Homeopathy is type mein sabse zyada effective hai.',
    },
    {
      _key: 'type2',
      name: 'Epigastric Pain Syndrome (EPS)',
      description: 'Khane ke baad ya bhookhe pet mein upar ke hisse mein tej dard ya jalan. Iska sambandh aksar stomach acid se hota hai. Jo log khali pet chai peete hain, ya irregular timing se khate hain, unhe zyada hota hai.',
    },
    {
      _key: 'type3',
      name: 'Postprandial Distress Syndrome (PDS)',
      description: 'Thoda khate hi pet bhar jaane ka ehsaas (early satiety) aur khane ke baad pet mein bhaari pan. Stress mein rehne wale log aur jaldi jaldi khane wale zyada affected. Lycopodium is type mein specifically helpful hai.',
    },
    {
      _key: 'type4',
      name: 'Organic Dyspepsia',
      description: 'Kisi underlying cause ki wajah se hoti hai – jaise H. pylori infection, gastric ulcer, GERD, ya gallstones. Diagnosis: endoscopy ya specific tests se confirm hota hai. 40+ age, alcohol users, NSAIDs lene wale zyada prone hain.',
    },
    {
      _key: 'type5',
      name: 'Drug-Induced Dyspepsia',
      description: 'Kuch dawaiyaan – jaise painkillers (Ibuprofen, Aspirin), antibiotics, iron tablets – stomach lining ko irritate karti hain. Jo log frequently allopathic painkillers lete hain unhe ye type common hai. Medicine band karne ya change karne se often improve hota hai.',
    },
  ],

  symptoms: [
    {
      _key: 'sg1',
      groupName: 'Khane ke Baad Ki Taklif',
      items: [
        'Pet mein bhaari bhaari ya bhari hua sa lagana (Bloating) – khana wahan ka wahan baitha hai ki feeling',
        'Thoda sa khate hi pet bhar jaana (Early Satiety) – upar pet mein pressure ya tightness saath mein',
        'Khana haazm na hone ki feeling – pura din heaviness rehti hai; activity karna mushkil lagta hai',
      ],
    },
    {
      _key: 'sg2',
      groupName: 'Acid aur Jalan Se Judi Taklif',
      items: [
        'Seene ya upar pet mein jalan (Heartburn / Epigastric Burning) – khane ke baad ya khaali pet dono mein',
        'Muh mein khatta ya khadwa paani aana (Acid Reflux) – khaali pet subah ya letne pe worse',
        'Gale mein khich khich ya khansi ka ehsaas – acid food pipe mein aane ki wajah se; raat mein zyada',
      ],
    },
    {
      _key: 'sg3',
      groupName: 'Gas aur Pait Se Judi Taklif',
      items: [
        'Zyada dakarein (Belching / Burping) aur pet mein gurgurana – fermentation ki wajah se gas accumulation',
        'Kabhi kabhi ulti jaisi feeling (Nausea) – khaas taur pe subah ya khaane ke turant baad',
        'Kabz ya loose motions ka baar baar aana – gut motility disturb hone ki wajah se; IBS ke saath overlap',
      ],
    },
  ],

  ccrhEvidence: 'ICMR (Indian Council of Medical Research) ke gastrointestinal disease burden data (2021) mein Dyspepsia India ki sabse common digestive complaints mein se ek documented hai. Rome IV Criteria (2016) ke mutabiq Functional Dyspepsia – jisme tests normal hote hain – ek real condition hai jisme gut-brain axis treatment effective hoti hai. Homeopathic constitutional approach is axis pe address karta hai jo conventional medicine mein often miss hota hai. Boericke\'s Materia Medica mein Nux Vomica, Lycopodium, Carbo Veg ke digestive action pe extensive clinical documentation hai.',

  homeopathyBenefits: {
    explanation: 'Homeopathy Dyspepsia ko sirf symptoms dabane ki jagah uski root cause tak jaati hai. Jaise – agar badhazmi stress ki wajah se hai to medicine alag hogi, agar acid imbalance hai to alag, agar food intolerance hai to alag. Homeopathic medicines stomach ki natural digestive capacity ko restore karti hain, gut lining ko heal karti hain, aur liver-pancreas ke digestive enzyme secretion ko balance karti hain. Isiliye results sirf temporary nahi hote – sahi treatment se patient ko long-term relief milti hai bina kisi side effect ke.',
    bullets: [
      'Functional Dyspepsia mein – jahan koi test positive nahi aata – homeopathy sabse zyada effective; gut-brain axis address hoti hai',
      'Stress-induced badhazmi ke liye constitutional treatment – sirf pet hi nahi, poori body ko calm karti hai',
      'Long-term use bilkul safe – liver pe koi burden nahi, koi habit nahi, koi dependency nahi',
      'H. pylori-associated dyspepsia mein complementary treatment – stomach lining healing mein support karta hai',
      'Bache, budhe, pregnant women – sabke liye safe treatment option; koi harsh chemicals nahi',
    ],
  },

  medicines: [
    {
      _key: 'med1',
      name: 'Nux Vomica',
      bestFor: 'Jo log zyada spicy, oily khana khate hain, raat ko late khate hain, sedentary job hai, aur subah uthke pet mein heaviness ya nausea feel karte hain. Liver ki bile secretion improve karta hai.',
      keyIndications: [
        'Subah uthke pet mein heaviness aur nausea – raat ka late dinner ka seedha asar; khaali pet worse feel hota hai',
        'Khane ke baad bloating aur upar pet ki jalan – especially sedentary office workers mein; exercise karne pe better',
        'Anger ya irritability ke saath dyspepsia – stress aur gusse se jalan aur gas instantly badhti hai',
      ],
    },
    {
      _key: 'med2',
      name: 'Lycopodium Clavatum',
      bestFor: 'Jinka pet thoda khate hi bhar jaata hai, zyada gas banti hai, aur shaam ko 4-8 baje taklif zyada badh jaati hai. Liver aur lower digestive tract function support karta hai.',
      keyIndications: [
        'Thoda khate hi early satiety – "pet bhar gaya" abhi naya shuru kiya tha; upar se pressure feel hota hai',
        'Shaam 4-8 baje symptoms worst – ye specific time aggravation Lycopodium ka pehchaan hai',
        'Gas aur flatulence zyada – khana khate hi banne lagti hai; dakarein aur bowel gas dono affected',
      ],
    },
    {
      _key: 'med3',
      name: 'Carbo Vegetabilis',
      bestFor: 'Jinhe khana khane ke thodi der baad hi bahut gas bane, dakarein aayein, pet tight lagey, aur relief sirf dakar aane par ho. Sluggish digestion aur gas accumulation wale patients.',
      keyIndications: [
        'Khane ke baad bahut gas – pet tight aur distended feel hota hai; dakar aane par hi relief milti hai',
        'Sluggish digestion – khana digest hi nahi hota; heavy feeling kaafi ghante tak rehti hai',
        'Weakness aur air hunger ke saath – fan chahiye, khula atmosphere chahiye; aaram se worse hota hai',
      ],
    },
    {
      _key: 'med4',
      name: 'Pulsatilla',
      bestFor: 'Jinhe fatty, rich khana – ghee, makkhan, mithai – khane ke baad taklif hoti hai; thakaan aur mood changes bhi saath hote hain. Biliary system regulate karta hai; women mein zyada effective.',
      keyIndications: [
        'Fatty ya rich khana khane ke baad taklif – ghee, mithai, makkhan; immediately ya 1-2 ghante mein',
        'Pyaas bilkul nahi aur muh sukha nahi – Pulsatilla ka characteristic; emotionally needy patient',
        'Khula hawa chahiye, garam room mein worse – fresh air se better; mood swings bhi saath mein',
      ],
    },
    {
      _key: 'med5',
      name: 'Arsenicum Album',
      bestFor: 'Jinhe khana khane ke baad burning sensation hoti hai stomach mein, anxiety zyada rehti hai, restlessness hoti hai, aur raat ko taklif badhti hai. Anxiety-driven ya food poisoning ke baad ki dyspepsia.',
      keyIndications: [
        'Stomach mein burning sensation – raat ko zyada; thoda thoda paani pine se thoda better; restless',
        'Anxiety ke saath pet ki taklif – "kuch bura ho jaayega" ki feeling saath mein; perfectionist type patient',
        'Food poisoning ke baad badhazmi – nausea, burning, diarrhea ka combination; Arsenicum ka classic picture',
      ],
    },
  ],

  dietInclude: [
    {
      _key: 'di1',
      category: 'Aasaan Paachan Wale Anaaj',
      emoji: '🌾',
      items: [
        'Daliya (Oatmeal) – easily digestible hai; gut lining ko soothe karta hai; slow energy release deta hai',
        'Khichdi (Chawal + Moong Dal) – light on stomach; protein aur carbs balanced; digestive enzymes pe zyada load nahi',
        'Brown Rice – fiber rich hai; bowel movement regulate karta hai; bloating kam karta hai',
      ],
    },
    {
      _key: 'di2',
      category: 'Probiotics aur Gut Healers',
      emoji: '🥛',
      items: [
        'Dahi (Plain Curd) – Lactobacillus se good bacteria restore hota hai; roz din mein ek baar',
        'Lassi (meethi, bina masale ki) – gut ko cool karta hai; acidity kam karta hai; khana theek se process hota hai',
        'Papaya – papain enzyme se protein digestion directly help hoti hai; subah khane par best',
      ],
    },
    {
      _key: 'di3',
      category: 'Healing Sabziyan aur Fruits',
      emoji: '🥦',
      items: [
        'Lauki (Bottle Gourd) – water content zyada; easy to digest; pet ki jalan aur gas mein relief',
        'Banana (pakka hua) – stomach lining pe protective coating; acid neutralize karta hai; gut-friendly',
        'Ginger (Adrak) – digestive motility improve karta hai; nausea mein proven relief; chai mein add karein',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'Acid Triggers',
      emoji: '☕',
      items: [
        'Chai / Coffee khaali pet – acid secretion dramatically badhata hai; jalan aur ulcer risk; kuch khane ke baad piyen',
        'Carbonated Drinks (Cold Drinks) – CO2 gas stomach mein pressure create karta hai; bloating badhata hai',
        'Alcohol – stomach lining ko directly irritate karta hai; digestive enzymes ki efficiency ghata deta hai',
      ],
    },
    {
      _key: 'da2',
      category: 'Heavy aur Inflammatory Foods',
      emoji: '🍟',
      items: [
        'Fried / Deep Fried Foods – digest hone mein bahut time; bile system pe overload dalte hain',
        'Maida se bani cheezein (Bread, Biscuits, Pasta) – gut bacteria balance bigaadte hain; bloating increase',
      ],
    },
    {
      _key: 'da3',
      category: 'Spice aur Irritants',
      emoji: '🌶️',
      items: [
        'Bahut zyada Mirch Masala – stomach acid trigger karta hai; already irritated lining ko aur damage',
        'Packaged / Ultra-Processed Snacks – preservatives aur additives gut microbiome ko damage karte hain',
      ],
    },
  ],

  dos: [
    'Roz ek fixed time pe khana khayein – digestive clock set hoti hai; acid secretion timing par hoti hai, random nahi',
    'Khana dheeray dheeray chhabakar khayein (ek niwala 20-25 baar) – saliva mein amylase hota hai jo digestion ka pehla step hai',
    'Subah uthke 1-2 glass gunguna paani peeyein – gut movement start hoti hai; toxins bahar aate hain',
    'Raat ka khana sone se kam se kam 2.5-3 ghante pehle karein – letne pe acid reflux ka direct risk hota hai',
    'Daily 30-40 minute walk ya yoga karein – gut motility improve hoti hai; stress-related dyspepsia mein bada fark',
    'Stress management pe dhyan dein – meditation, deep breathing, ya koi bhi hobby – gut-brain connection real hai',
    'Chhote chhote 5-6 meals prefer karein – digestive system pe kam load; early satiety type mein specially helpful',
    'Khane ke baad 10-15 minute Vajrasana mein baithein – blood flow stomach tak badhta hai; digestion improve hoti hai',
  ],

  donts: [
    'Khaali pet chai ya coffee bilkul mat peeyein – stomach mein acid ki pehli dose kuch hazm hone se pehle; ulcer risk',
    'Khane ke turant baad mat let jaayein – gravity ka role hai; let jaane se acid upar aata hai; raat ko especially nahi',
    'Bina doctor ki salah ke baar baar antacid mat khayein – sirf temporary relief; long-term mein acid balance bigaad ta hai; bones pe asar',
    'Ek baar mein bahut bada meal mat khayein – digestive system pe overload; instead 5-6 chhote meals prefer karein',
    'Tension aur gusse mein khana mat khayein – negative emotions mein digestive enzyme secretion ruk jaata hai',
    'Khana jaldi jaldi nahi nigalna – hawa andar jaati hai; amylase kaam nahi karta; 20-25 baar chhabayein',
    'Fridge ka thanda paani khane ke saath mat piyen – digestive enzymes ki activity slow hoti hai; room temperature better',
    'Chronic badhazmi ko "normal" mat samjho – permanent solution milta hai; sirf antacid pe depend mat raho',
  ],

  seasonalCare: {
    summer: 'Badhazmi aur food poisoning ka risk sabse zyada – heat mein bacteria tezi se paida hote hain. Bahar ka khana (street food, cut fruit) bilkul band karein. ORS ya coconut water se hydration banaye rakhein. Khana fresh pakayein aur 2 ghante se zyada bahar na chhoden.',
    monsoon: 'Gut infections (viral gastroenteritis, waterborne) ka peak season – paani ubaal ke peeyein. Leafy vegetables carefully wash karein. Fried snacks is mausam mein tempting lagte hain lekin stomach infection ka combination dangerous. Probiotic intake (dahi, lassi) is mein badhaayein.',
    winter: 'Digestion naturally slow hoti hai – blood body ko warm rakhne mein busy hota hai. Khana thoda chhota portion mein, thodi thodi der pe khayein. Warm soups, kadha, aur garam paani stomach ko active rakhte hain. Exercise kam hone se constipation ho sakta hai – daily walk zaroor rakhein.',
  },

  faqs: [
    {
      _key: 'faq1',
      question: 'Badhazmi ka permanent ilaj kya hai?',
      answer: 'Badhazmi ka permanent ilaj tab milta hai jab uski root cause dhundhi jaaye – sirf symptoms nahi. Agar wajah stress hai, toh lifestyle + homeopathy best kaam karti hai. Homeopathy mein constitutional treatment diya jaata hai jo patient ki puri health history dekhkar diya jaata hai – results long-lasting hote hain. Sirf antacid lene se permanent solution nahi milta.',
    },
    {
      _key: 'faq2',
      question: 'Pet mein gas aur jalan ka ghar ka ilaj kya hai?',
      answer: 'Turant relief ke liye – ek glass gungune paani mein adha nimbu nichodkar aur 1 chutki sendha namak milakar peeyein. Ginger tea (adrak ki chai bina doodh ke) bhi gas aur jalan mein jaldi kaam karti hai. Long-term relief ke liye regular meal timing, walk, aur stress management zaroori hai. Agar taklif har roz ho rahi hai, homoeopath se milein.',
    },
    {
      _key: 'faq3',
      question: 'Khana khane ke baad pet dard kyun hota hai?',
      answer: 'Khane ke baad pet dard hona Postprandial Dyspepsia ka main sign hai. Ye tab hota hai jab stomach proper acid produce nahi kar rahi, ya digestive enzymes kam hain, ya khana zyada jaldi khaya ho. Fatty ya heavy khane ke baad hone wala dard aksar gallbladder ya liver se related hota hai. Agar roz ho raha hai – doctor se milna zaroori hai.',
    },
    {
      _key: 'faq4',
      question: 'Homeopathy se badhazmi mein kitne time mein fark aata hai?',
      answer: 'Acute cases mein – jaise suddenly ek din ki badhazmi – homeopathic medicine 30-60 minute mein relief de sakti hai. Chronic dyspepsia – jo mahino ya saalon se hai – mein 4-8 hafte ka regular treatment lagta hai. Diet aur lifestyle bhi saath mein theek karne wale patients ko jaldi results milte hain.',
    },
    {
      _key: 'faq5',
      question: 'Kya antacid roz lena safe hai?',
      answer: 'Nahi – roz antacid lena safe nahi hai. Long-term use se body ki natural acid production affect hoti hai, calcium absorption kam hota hai (bones weak ho sakti hain), aur kidney pe load aata hai. Antacid sirf jalan cover karta hai – kyun ho rahi hai ye nahi dhundta. Root cause treatment zaroori hai.',
    },
    {
      _key: 'faq6',
      question: 'Stress se pet kharab kyun hota hai?',
      answer: 'Gut aur brain ka direct nerve connection hai – ise Gut-Brain Axis kehte hain. Jab aap stressed hote hain, brain ek signal bhejta hai jo stomach ki acid production aur digestive enzyme secretion dono ko disturb kar deta hai. Chronic stress mein ye problem daily ho jaati hai – isse Functional Dyspepsia develop ho sakti hai jisme koi test bhi positive nahi aata.',
    },
    {
      _key: 'faq7',
      question: 'Kya Dyspepsia aur GERD ek hi hain?',
      answer: 'Nahi – dono alag hain lekin related hain. Dyspepsia ek broader term hai jisme pet ke upar hisse ki discomfort aati hai. GERD mein acid specifically food pipe mein aata hai aur wahan jalan karta hai. GERD dyspepsia ka ek karan ban sakta hai – lekin har dyspepsia GERD nahi hoti. GERD confirm karne ke liye endoscopy zaroori hai.',
    },
    {
      _key: 'faq8',
      question: 'Kya thyroid se badhazmi hoti hai?',
      answer: 'Haan – Hypothyroidism mein digestion slow ho jaata hai kyunki metabolism slow hota hai. Khana bahut dheere process hota hai, constipation aur bloating common hota hai. Agar badhazmi ke saath thakaan, weight gain, sardee zyada lagna, ya baal jhadna bhi ho – thyroid test zaroor karaayein.',
    },
    {
      _key: 'faq9',
      question: 'Bacchon mein badhazmi ka ilaj kya hai?',
      answer: 'Bacchon mein Dyspepsia aksar junk food, cold drinks, irregular meals, ya exam stress ki wajah se hoti hai. Ghar ke level pe: khana ek fixed time pe dein, cold drinks band karein, aur meal mein dahi ya lassi zaroor rakhein. Homeopathy bacchon ke liye safe option hai – koi harsh chemicals nahi hote.',
    },
    {
      _key: 'faq10',
      question: 'Pregnancy mein badhazmi ka kya karein?',
      answer: 'Pregnancy mein hormones digestive system slow karte hain aur growing uterus stomach pe pressure dalta hai – badhazmi bahut common hai. Safe options: thodi thodi matra mein baar baar khayein, sone se 3 ghante pehle khana khatam karein, sir thoda upar karke soyein. Homeopathic medicines pregnancy mein generally safe hain – lekin doctor ya homoeopath se zaroor baat karein.',
    },
    {
      _key: 'faq11',
      question: 'Pet mein gas hamesha kyun banti hai?',
      answer: 'Hamesha gas banna – Chronic Flatulence – aksar inki wajah se hota hai: zyada maida ya processed food khana, khana jaldi nigalna (hawa bhi andar jaati hai), gut bacteria imbalance (Dysbiosis), ya food intolerance (jaise lactose ya gluten). Dakarein zyada aayein aur pet phula rehta ho – Lycopodium ya Carbo Veg type ki homeopathic medicines helpful hain, lekin homoeopath ki salah se lein.',
    },
    {
      _key: 'faq12',
      question: 'Khana hazm na hone ki dawa – kya homeopathy mein hai?',
      answer: 'Haan – homeopathy mein kai medicines hain jo digestive capacity directly improve karti hain. Nux Vomica liver aur bile secretion ke liye, Lycopodium lower gut ke liye, Chelidonium fatty liver-related digestion ke liye. Ye antacid ki tarah sirf cover nahi karti – digestive system ko actually zyada efficient banane ki koshish karti hain. Homoeopath ki guidance zaroori hai.',
    },
    {
      _key: 'faq13',
      question: 'Badhazmi aur ulcer mein kya fark hai?',
      answer: 'Badhazmi mein discomfort aati-jaati rehti hai. Peptic Ulcer mein dard zyada sharp aur specific jagah pe hota hai – khaali pet ya khane ke baad pattern specific hota hai. Ulcer mein kabhi kabhi kale rang ka pakhana bhi aa sakta hai – ye serious sign hai, turant doctor ke paas jaayein. Endoscopy se confirm hota hai.',
    },
    {
      _key: 'faq14',
      question: 'Liver weak hone se badhazmi kaise hoti hai?',
      answer: 'Liver bile banata hai jo fat ko digest karne ke liye zaroori hai. Agar liver overloaded hai – fatty food, alcohol, ya toxins ki wajah se – bile production ya flow disturb hota hai. Isse fatty food ke baad bloating, nausea, aur heaviness hoti hai. Muh mein kadwaahat – khaas taur pe subah uthke – liver-related digestion problem ka sign hai.',
    },
    {
      _key: 'faq15',
      question: 'Kya yoga se badhazmi theek hoti hai?',
      answer: 'Haan – Pawanmuktasana (gas release pose), Vajrasana (khane ke baad baithna), Trikonasana, aur Bhramari Pranayama stress-related dyspepsia mein bahut effective hain. Sirf 15-20 minute daily yoga regular rakhein – medicines ke saath combination mein results jaldi aate hain.',
    },
    {
      _key: 'faq16',
      question: 'Kya ek hi jagah pet dard hona khatarnak hai?',
      answer: 'Haan – ek specific jagah pe hamesha dard hona serious ho sakta hai. Upar daayein taraf: liver/gallbladder. Upar baayein taraf: stomach/pancreas. Naabhi ke aas paas: intestine ya appendix. Agar dard 2-3 din se hai aur khaane ke baad bhi nahi jaata – ultrasound aur doctor consultation zaroori hai.',
    },
    {
      _key: 'faq17',
      question: 'Badhazmi mein konsa paani peena chahiye?',
      answer: 'Room temperature ya gunguna paani sabse best hai. Fridge ka thanda paani digestive enzymes ki activity slow kar deta hai aur pet ki muscles contract karta hai. Khane ke saath thodi paani theek hai – lekin bahut zyada ek saath mat piyen. Gunguna paani subah khali pet bahut helpful hai.',
    },
    {
      _key: 'faq18',
      question: 'Raat ko pet mein jalan kyun hoti hai?',
      answer: 'Raat ko letne par acid food pipe mein wapas aata hai (reflux) – isiliye raat mein jalan badh jaati hai. Fix: raat ka khana sone se 3 ghante pehle karein, sir thoda upar karke soyein, left side karwat zyada better hai acid reflux mein. Oily ya spicy raat ka khana bhi trigger karta hai.',
    },
    {
      _key: 'faq19',
      question: 'Kya badhazmi genetic hoti hai?',
      answer: 'Haan – family history role karti hai. Agar parents ko Peptic Ulcer, GERD, ya IBS hai, toh aapko bhi higher risk hai. Iska matlab guaranteed nahi – lekin lifestyle ka dhyan rakhna aur jaldi treatment lena zyada zaroori ho jaata hai. Homeopathy mein genetic predisposition ko miasmatic treatment se address kiya jaata hai.',
    },
    {
      _key: 'faq20',
      question: 'Kya weight loss se badhazmi theek ho sakti hai?',
      answer: 'Haan – overweight logon mein stomach pe extra pressure hota hai jo acid reflux aur dyspepsia dono badhata hai. 5-10% weight kam karne se GERD aur functional dyspepsia mein significant improvement hoti hai. Lekin crash diet bilkul nahi – irregular khana khud badhazmi ka karan hai. Slow, sustainable weight loss sahi raah hai.',
    },
    {
      _key: 'faq21',
      question: 'Badhazmi ki wajah se muh mein kadwaahat kyun aati hai?',
      answer: 'Muh mein kadwaahat – khaas taur pe subah – bile reflux ka sign hai. Jab bile stomach se upar aata hai, muh mein bahut khadwa feel hota hai. Ye normal acid reflux se alag hota hai – liver aur gallbladder function theek se nahi ho raha. Homoeopath is case mein Chelidonium ya Berberis type ki medicines consider karta hai.',
    },
    {
      _key: 'faq22',
      question: 'Kya coffee ek baar bhi nahi peena chahiye badhazmi mein?',
      answer: 'Completely band karna zaroori nahi – lekin khaali pet bilkul nahi. Pehle kuch khaa lo – banana, biscuit, ya daliya – fir piyen. Quantity kam karein aur dekhein 2-3 hafte mein fark aata hai kya. Herbal tea (tulsi, ginger) better option hai. Ek cup subah ki chai kuch khane ke baad practically koi nuksaan nahi karta.',
    },
    {
      _key: 'faq23',
      question: 'Badhazmi mein konsi test karaayen?',
      answer: 'Agar symptoms 2 hafte se zyada hain ya severe hain: (1) H. pylori test (breath test ya stool antigen), (2) Upper GI Endoscopy – 40+ age ya alarming symptoms mein, (3) Abdominal Ultrasound – gallbladder, liver, pancreas, (4) Thyroid profile – thakaan aur weight changes bhi hon to, (5) Liver Function Test – peelapan ya right side dard mein. Ye tests decide karte hain ki Functional hai ya Organic Dyspepsia.',
    },
    {
      _key: 'faq24',
      question: 'Badhazmi agar bahut saalon se hai toh kya theek hogi?',
      answer: 'Haan – saalon purani badhazmi bhi theek ho sakti hai, lekin time zyada lagta hai. Chronic conditions mein body mein bahut patterns set ho chuke hote hain – gut bacteria, acid sensitivity, muscle reflexes sab affected. Homeopathy mein constitutional treatment inka address karti hai systematically. 3-6 mahine ka regular treatment, saath mein diet aur lifestyle change – combination mein best results milte hain.',
    },
  ],

  relatedDiseases: ['Acidity', 'GERD', 'Gastritis', 'IBS', 'Constipation'],
}

async function seed() {
  try {
    const result = await client.createOrReplace(doc)
    console.log('✅ Dyspepsia created/updated:', result._id)
    console.log('🌐 Live at: https://homeopedia.in/diseases/dyspepsia')
  } catch (err) {
    console.error('❌ Error:', err)
  }
}

seed()
