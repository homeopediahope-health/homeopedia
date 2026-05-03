import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-gastritis',
  _type: 'disease',
  title: 'Gastritis',
  hindiName: 'Pet Ki Sujan / Aantrik Shotha / Pait Dard',
  slug: { _type: 'slug', current: 'gastritis' },
  category: 'Digestive',
  publishedAt: '2026-05-03T00:00:00.000Z',
  metaTitle: 'Gastritis Treatment in Hindi | Pet Dard ka Homeopathy Ilaaj',
  metaDescription: 'Gastritis (pet ki sujan) ka treatment, karan, diet chart aur homeopathic medicines — verified info, doctor-reviewed. Turant relief ke upay bhi.',
  heroText: 'Gastritis ek aisi condition hai jisme aapke stomach ki andar ki lining (mucosa) mein sujan aa jaati hai. Normally ye lining ek layer of mucus se covered hoti hai jo acid se protect karti hai — jab ye layer weak ya damage ho jaati hai, to acid directly lining pe attack karta hai aur sujan paida hoti hai. Is wajah se khana khane ke baad ya khali pet mein jalan, dard, ya bloating hoti hai. Kai baar gastritis thodi der ke liye hoti hai (acute), aur kai baar ye mahino-salon tak bani rehti hai (chronic) — lekin dono mein sahi treatment se kafi better feel hota hai.',

  quickFacts: {
    whatItIs: 'Stomach ki andar ki protective lining mein sujan — acid aur bacteria se damage hoti hai; common lekin manageable',
    howCommon: 'India mein roughly 25-30% urban population kisi na kisi form ki chronic gastritis se affected hai (WGO data); H. pylori 50-70% adults mein',
    treatmentDuration: 'Acute: 1-2 hafte | Chronic: 3-6 mahine | H. pylori: 2-4 hafte antibiotics + healing time',
  },

  causes: [
    'H. pylori bacterial infection — India mein gastritis ka sabse common karan; ye bacteria stomach lining ko dheere dheere damage karta hai',
    'Zyada NSAIDs lena (ibuprofen, aspirin, diclofenac) — ye medicines stomach ki protective lining ko kamzor karti hain',
    'Alcohol ya caffeinated drinks ka zyada sevan — stomach acid production badh jaati hai aur lining irritate hoti hai',
    'Stress aur anxiety — nervous system gut ke kaam ko directly affect karta hai; India mein ye ek major trigger hai',
    'Autoimmune reaction — body apni hi stomach lining ke against antibodies banane lagti hai (Type A gastritis)',
    'Bile reflux — liver se aane wala bile stomach mein aa jaata hai aur lining ko chemically damage karta hai',
  ],

  riskFactors: [
    '40 saal se upar ke log — stomach lining naturally thinner hoti jaati hai umar ke saath',
    'Jo log regularly pain killers lete hain (arthritis, back pain ke liye) — NSAIDs ka zyada use',
    'Zyada chai, coffee ya alcohol peene waale — acid secretion chronically high rehta hai',
    'Jo log bahut stressed rehte hain ya irregular khaana khaate hain — especially IT/corporate workers',
    'Smokers — nicotine stomach ki blood supply reduce karta hai aur healing slow karta hai',
    'Jo log H. pylori se infected hain — India mein roughly 50-70% adults mein ye bacteria hota hai',
  ],

  complications: [
    'Peptic Ulcer Disease — stomach ya small intestine mein gahre ghav ban jaate hain, jisme kafi tez dard hota hai',
    'Chronic Blood Loss — erosive gastritis mein dheere dheere khoon ka seepna, anemia ki taraf le jaata hai',
    'Stomach Cancer Risk — chronic atrophic gastritis (especially H. pylori wali) mein long-term risk badh jaata hai — regular monitoring zaroori',
    'Pernicious Anemia — autoimmune gastritis mein Vitamin B12 absorb nahi hota, nervous system bhi affect ho sakta hai',
  ],

  types: [
    {
      _key: 'type1',
      name: 'Acute Gastritis (Achanak Aane Wali)',
      description: 'Achanak pet mein tez dard ya jalan shuru hoti hai. Kharaab khaana, alcohol, ya NSAID medicines (jaise ibuprofen) se trigger hoti hai. Chand din mein theek ho sakti hai agar cause remove ho jaaye. Ye sabse manageable form hai.',
    },
    {
      _key: 'type2',
      name: 'Chronic Gastritis (Lamba Chalane Wali)',
      description: 'Dheere dheere develop hoti hai, mahino ya salon mein. H. pylori infection ya autoimmune causes se hoti hai. Symptoms mild ho sakte hain lekin andar se lining damage hoti rehti hai. Teen subtypes hain: Type A (Autoimmune), Type B (H. pylori — sabse common), Type C (Chemical/Reactive — bile reflux ya medicines se).',
    },
    {
      _key: 'type3',
      name: 'Erosive Gastritis',
      description: 'Stomach lining pe chhote ghav (erosions) ban jaate hain. Zyada serious form — agar treat na ho to ulcer ban sakta hai. Symptoms mein blood vomiting ya kaala latrine aa sakta hai — ye emergency signs hain.',
    },
    {
      _key: 'type4',
      name: 'Atrophic Gastritis',
      description: 'Chronic gastritis ka advanced form. Stomach cells dheere dheere khatam hone lagte hain. Vitamin B12 absorption mein problem hoti hai. Long-term mein stomach cancer ka risk slightly badh jaata hai — regular monitoring aur endoscopy follow-up zaroori hai.',
    },
    {
      _key: 'type5',
      name: 'Eosinophilic Gastritis (Rare)',
      description: 'Immune cells (eosinophils) stomach wall mein jama ho jaate hain. Allergies ya food sensitivity se linked. Ye rare type hai lekin proper evaluation zaroori hai kyunki treatment approach different hoti hai.',
    },
  ],

  medicines: [
    {
      _key: 'med1',
      name: 'Nux Vomica',
      bestFor: 'Jo log irregular khaana khaate hain, zyada spicy/oily food lete hain, stressful life hai, subah uthke ulti ya nausea feel hoti hai — especially office-goers aur jo raat ko late khaate hain.',
      keyIndications: [
        'Stress-triggered gastritis — irritable, overworked patients',
        'Subah nausea, raat ko late khaana, alcohol ya spicy food ke baad worse',
        'Liver aur stomach dono pe kaam karta hai — gastric nerve irritation settle karta hai',
      ],
    },
    {
      _key: 'med2',
      name: 'Arsenicum Album',
      bestFor: 'Jalan bahut zyada ho, raat ko 1-2 baje dard badhe, thodi thodi matra mein paani piye, anxiety bhi saath ho aur patient restless feel kare.',
      keyIndications: [
        'Raat ko 1-3 baje symptoms worst — characteristic aggravation time',
        'Burning stomach pain + anxiety + restlessness ka combination',
        'Thodi matra mein paani peena — food/drink se temporarily relief phir phir worse',
      ],
    },
    {
      _key: 'med3',
      name: 'Carbo Vegetabilis',
      bestFor: 'Khana khate hi pet phool jaaye, gas bahut bane, upar ki taraf belching aaye, thakaan feel ho — especially bade ya debilitated patients mein.',
      keyIndications: [
        'Extreme bloating aur gas — "want to be fanned" feeling',
        'Sluggish digestion, fermentation type feeling in stomach',
        'Debilitated ya elderly patients mein gas aur belching dominant',
      ],
    },
    {
      _key: 'med4',
      name: 'Lycopodium',
      bestFor: 'Thoda khaate hi pet bhar jaaye, shaam ko 4-8 baje symptoms zyada ho, sour belching, aur liver area mein discomfort feel ho.',
      keyIndications: [
        'Evening 4-8 PM aggravation — classic Lycopodium time',
        'Early satiety — thoda khaate hi bhara lagta hai',
        'Liver-digestive axis involvement ke saath gastritis',
      ],
    },
    {
      _key: 'med5',
      name: 'Pulsatilla',
      bestFor: 'Oily, fatty, ya rich khaana khane ke baad symptoms badh jaayein, patient emotional ho, thanda paani ya khula hawa chahiye, usually women ya mild temperament wale log.',
      keyIndications: [
        'Fatty food intolerance — rich khaane ke baad immediate worse',
        'Thirst nahi hona — dry mouth bhi nahi lagta',
        'Open air se relief, warm room mein worse — changeable symptoms',
      ],
    },
  ],

  dietInclude: [
    {
      _key: 'cat1',
      category: 'Stomach-Soothing Foods',
      emoji: '🫶',
      items: [
        'Daliya (Oats porridge) — stomach lining ko coat karta hai, acid ko soothe karta hai; subah ke liye best',
        'Sada chawal (Plain rice) — easy to digest, stomach pe bilkul load nahi, acute episodes mein pehla option',
        'Banana — natural antacid, coating effect deta hai; H. pylori ke against bhi mildly protective',
        'Plain cold milk (thodi matra mein) — thodi si matra mein acid burning ko temporarily soothe karta hai',
        'Coconut water — electrolytes + alkaline pH; nausea mein bhi helpful',
      ],
    },
    {
      _key: 'cat2',
      category: 'Healing & Anti-Inflammatory',
      emoji: '🌿',
      items: [
        'Lauki (Bottle gourd) — cooling effect hai, alkaline nature se stomach acid neutralize karta hai',
        'Gajar (Carrot) — beta-carotene stomach lining repair mein help karta hai; steamed ya boiled lein',
        'Boiled egg whites — protein without fat; gastritis mein protein healing ke liye zaroori hai',
        'Aloe vera juice (unsweetened) — stomach mucosa ki healing mein evidence hai; subah khali pet lein',
        'Ginger tea (halki) — anti-inflammatory, nausea ke liye effective; zyada concentrated mat banao',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'avd1',
      category: 'Direct Stomach Irritants',
      emoji: '🚫',
      items: [
        'Mirch masala (spicy food) — directly stomach mucosa ko irritate karta hai, jalan badh jaati hai',
        'Sirka / Imli / Khatta achaar — high acid content jo already inflamed lining pe aur attack karta hai',
        'Citrus fruits (nimbu, orange) — healthy logon ke liye theek hai lekin gastritis mein acid overload karta hai',
        'Alcohol — stomach lining ka chemical enemy; ek glass bhi flare-up trigger kar sakta hai',
        'Carbonated drinks (soda, cola) — gas + acidity dono ek saath; gastritis ka sabse quick trigger',
      ],
    },
    {
      _key: 'avd2',
      category: 'Inflammatory & Slow-Digesting',
      emoji: '⚠️',
      items: [
        'Chai aur coffee zyada — caffeine acid secretion badhaata hai; din mein 1 cup se zyada avoid karo',
        'Fried food (pakode, chips, samose) — fat digestion slow karta hai, stomach mein zyada der rehta hai',
        'Maida-based items (pav, white bread, biscuits) — inflammatory, gut bacteria ka balance bigaadte hain',
      ],
    },
  ],

  seasonalCare: {
    summer: 'Bahut zyada thanda paani ya ice cream achanak lena — stomach ko shock deta hai. Bahar ka khana (street food) — H. pylori contamination ka risk garmi mein zyada hota hai. Dehydration se stomach acid concentration badh jaati hai. CARE: Coconut water, chilled aloe juice; bahar ka khana avoid karo; paani regularly peete raho.',
    monsoon: 'Street food mein contamination ka peak time — gastritis flare-up most common is season mein. Nami ki wajah se fungal/bacterial growth badhta hai khaane mein. CARE: Ghar ka khaana priority; bahar ka khaana bilkul avoid; haath dhona zaroor. Probiotic foods (dahi, kanji) is season mein extra helpful hain.',
    winter: 'Hot beverages ka overuse — chai, coffee zyada peena acid trigger karta hai. Heater rooms mein dry air — hydration neglect hoti hai. Fatty, rich foods zyada khaate hain — digestive load badh jaata hai. CARE: Herbal teas prefer karo; halka warm khaana lein; ginger-tulsi tea helpful. Transition season (March, October) mein immune dip hota hai — probiotic foods regularly lein.',
  },

  dos: [
    'Chhote chhote meals lein — din mein 4-5 baar thoda thoda; ek baar bahut zyada khaana stomach pe pressure badhaata hai',
    'Khaana slowly chhabao — aadha digestion muh mein hi hoti hai; rushed eating se acid overload hota hai',
    'Stress management karein (yoga, deep breathing, walk) — stress directly stomach acid ko trigger karta hai',
    'Subah uthke ek glass normal temperature paani piyein — stomach ko activate karta hai, acidity flush hoti hai',
    'Doctor se H. pylori test karwaayein (stool antigen ya breath test) — agar chronically suffer kar rahe hain',
    'Khaane ke baad 30 min straight baithein — turant let jaana acid reflux badhata hai',
  ],

  donts: [
    'Khali pet chai mat piyein — subah ke time stomach acid ko tez karta hai; pehle kuch halka kha lein',
    'Self-medication mein pain killers mat lein (ibuprofen, combiflam) — ye directly stomach lining ko damage karte hain',
    'Raat ko late khaana mat khaayein — sone se 2-3 ghante pehle khaana ho jaana chahiye',
    'Smoking mat karein — nicotine stomach ki healing significantly slow karta hai',
    'Ek dum bahut thanda ya bahut garam cheez mat khayein/piyein — temperature shock stomach ke liye harmful hai',
    'Bina doctor ke antacids pe dependent mat bano — ye symptom mask karte hain, root cause fix nahi karte',
  ],

  ccrhEvidence: {
    improvementRate: '71%',
    avgTreatmentPeriod: 'Acute: 2-3 hafte | Chronic: 3-4 mahine',
    citation: 'CCRH — Journal of Research in Homoeopathy | 2019 | Available via AYUSH portal',
    keyFindings: [
      'Gastric symptom scores mein homeopathy group mein meaningful reduction vs placebo',
      'H. pylori associated gastritis mein probiotic + homeopathy combination better outcomes',
      'Antacid dependence treatment group mein significantly kam hua follow-up mein',
    ],
  },

  homeopathyBenefits: [
    'Sirf acid suppress nahi karta — stomach lining ki healing, stress component, aur digestion ki overall function address hoti hai',
    'Long-term antacid dependence se bachne ka genuine option',
    'Stress-gut connection ko simultaneously address karta hai — jo India mein most common trigger hai',
    'H. pylori cases mein antibiotic ke saath complementary role mein effective',
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Gastritis kya hoti hai — simple language mein samjhaiye?',
      answer: 'Gastritis ek aisi condition hai jisme aapke stomach ki andar ki protective lining (mucosa) mein sujan aa jaati hai. Normally ye lining ek layer of mucus se covered hoti hai jo acid se protect karti hai — jab ye layer weak ya damage ho jaati hai, to acid directly lining pe attack karta hai aur sujan paida hoti hai. Is wajah se jalan, dard, aur nausea feel hoti hai. Achi baat ye hai ki sahi treatment aur khaane ki thodi si care se gastritis mein kafi improvement hoti hai.',
    },
    {
      _key: 'faq2',
      question: 'Gastritis aur normal acidity mein kya fark hai?',
      answer: 'Normal acidity mein sirf excess acid banta hai jo reflux ya heartburn deta hai — lekin stomach lining intact rehti hai. Gastritis mein stomach lining khud inflamed ya damaged hoti hai, jo sirf acid control karne se theek nahi hoti. Iska matlab hai gastritis mein symptoms more persistent hote hain — khana khane ke baad bhi dard rehta hai, nausea zyada hoti hai, aur kai baar bina khaaye bhi discomfort hoti hai. Proper diagnosis ke liye doctor se milna zaroori hai.',
    },
    {
      _key: 'faq3',
      question: 'Gastritis ke symptoms kya hote hain — kaise pata chalega?',
      answer: 'Gastritis ke main symptoms hain: upper abdomen (pet ke upar, navel ke upar) mein burning ya gnawing dard, khaana khane ke baad bloating ya bhari feeling, nausea ya ulti jaisa lagana, aur kabhi kabhi bhook kam hona. Kuch logon mein symptoms bahut mild hote hain — sirf gas ya thodi discomfort. Severe case mein blood vomiting ya kaala latrine bhi ho sakta hai — ye emergency sign hai, turant doctor ke paas jaayein.',
    },
    {
      _key: 'faq4',
      question: 'Gastritis kitne time mein theek hoti hai?',
      answer: 'Acute gastritis (jo achanak aai ho) mein sahi treatment se 1-2 hafte mein kafi better feel hota hai. Chronic gastritis (jo months se chal rahi ho) mein complete improvement mein 2-6 mahine lag sakte hain — depending on cause aur treatment consistency. Symptoms jaldi better feel hone lagte hain, lekin andar healing complete hone mein time lagta hai — treatment beech mein band mat karein.',
    },
    {
      _key: 'faq5',
      question: 'Gastritis mein kya khaana chahiye aur kya nahi?',
      answer: 'Gastritis mein khaayein: daliya, plain rice, banana, lauki, coconut water, low-fat dahi, aloe vera juice, aur boiled vegetables. Avoid karein: mirch-masala, chai-coffee zyada, alcohol, carbonated drinks, fried food, khatta achaar, aur citrus fruits. Sabse important rule hai — chhote chhote meals lein, ek dum zyada mat khayein. Subah khali pet chai sirf mat piyein — pehle thoda kuch halka kha lein.',
    },
    {
      _key: 'faq6',
      question: 'Kya gastritis permanently theek ho sakti hai?',
      answer: 'Haan — gastritis ka root cause address karne par permanent control bilkul possible hai. H. pylori treat ho jaaye, NSAIDs band ho jaayein, stress manage ho — to lifestyle-triggered gastritis mein months tak koi episode nahi aata. Homeopathy mein consistent treatment se chronic gastritis ki frequency aur severity dono kam hoti hain aur recurrence bahut rare ho jaata hai. Sirf antacid pe dependent rehna long-term solution nahi — cause fix karna zaroor hai.',
    },
    {
      _key: 'faq7',
      question: 'Kya homeopathy gastritis mein kaam karta hai?',
      answer: 'Haan — homeopathy gastritis mein effective approach hai, especially chronic aur recurring cases mein. CCRH-affiliated studies mein gastric symptom scores mein homeopathy group mein meaningful reduction dekhi gayi vs placebo group. Homeopathy ka khaas fayda ye hai ki ye sirf acid suppress nahi karta — stomach lining ki healing, stress component, aur digestion ki overall function ko address karta hai. Long-term antacid dependence se bachne ka ye ek genuine option hai.',
    },
    {
      _key: 'faq8',
      question: 'Gastritis ki best homeopathic medicine kaun si hai?',
      answer: 'Gastritis mein Nux Vomica, Arsenicum Album, Carbo Vegetabilis, Lycopodium, aur Pulsatilla commonly indicated medicines hain — lekin "best" medicine aapke specific symptoms pe depend karti hai. Nux Vomica stress aur spicy food triggers mein, Arsenicum raat ko jalan aur anxiety mein, Carbo Veg bloating aur gas mein helpful maani jaati hai. Potency aur medicine ka selection ek qualified homoeopath hi kar sakta hai — aapki poori picture dekhkar. Self-medication se results limited hote hain.',
    },
    {
      _key: 'faq9',
      question: 'Gastritis mein doodh peena chahiye ya nahi?',
      answer: 'Thandi milk thodi matra mein temporarily stomach ki jalan soothe kar sakti hai — lekin ye permanent solution nahi hai. Bahut zyada milk lene se actually acid rebound ho sakti hai (milk initially neutralize karta hai phir aur acid stimulate karta hai). Low-fat milk ya coconut milk better option hai. Full-fat dairy gastritis mein slow digestion karti hai — avoid karna better hai. Agar dahi (probiotic) lein to low-fat plain version theek hai — gut bacteria ke liye bhi helpful hai.',
    },
    {
      _key: 'faq10',
      question: 'Gastritis mein ghar pe kya karein — turant relief ke upay?',
      answer: 'Turant relief ke liye: ek glass thanda paani ya coconut water peeyein, banana khaayein, ya thoda sa thanda low-fat milk lein. Ginger ki halki chai (bahut concentrated nahi) nausea mein help karti hai. Loose clothes pehno — tight kapde pet pe pressure daalte hain. Seedhe baithein — let mat jaayein. Ye upay temporary relief ke liye hain; agar symptoms baar baar ho rahe hain to proper diagnosis zaroor karaayein.',
    },
    {
      _key: 'faq11',
      question: 'Kya chai peene se gastritis hoti hai?',
      answer: 'Haan — zyada chai peena, khaaskar subah khali pet, gastritis ka ek common trigger hai. Chai mein caffeine aur tannins hote hain jo stomach acid secretion badhaate hain aur lining ko irritate karte hain. Din mein 1-2 cup khaane ke baad lena usually manageable hai — problem subah uthke sabse pehle chai peene se hoti hai. Agar aap chai bilkul nahi chhor sakte, to pehle thoda kuch halka khayein phir chai lein. Green tea ya ginger-tulsi tea better alternatives hain.',
    },
    {
      _key: 'faq12',
      question: 'Kya gastritis mein exercise karna chahiye?',
      answer: 'Haan — moderate exercise gastritis mein helpful hai, khaaskar stress component address karne ke liye. Light walking (20-30 min daily), yoga, aur stretching gut motility improve karte hain aur stress hormones kam karte hain. Lekin intense exercise khaane ke turant baad nahi karni chahiye — blood stomach se divert hoti hai aur digestion slow ho jaati hai. Khaane ke 1.5-2 ghante baad exercise theek hai.',
    },
    {
      _key: 'faq13',
      question: 'Bacchon mein gastritis ke symptoms kya hote hain?',
      answer: 'Bacchon mein gastritis thoda alag present ho sakti hai. Pet dard sabse common symptom hai — khaane se pehle ya baad mein, aur kabhi kabhi school se bachne ka reason bhi ban jaata hai. Nausea, bhook na lagna, aur weakness bhi dikhti hai. Chhote bacchon mein symptoms describe karna mushkil hota hai — woh sirf pet pakad ke roye ya khana se muh fera lein. Agar 2 hafte se zyada pet dard ho ya weight kam ho raha ho, to doctor se zaroor milein.',
    },
    {
      _key: 'faq14',
      question: 'Gastritis mein pregnancy ke dauran kya karein?',
      answer: 'Pregnancy mein gastritis ya acidity bahut common hai — hormones stomach acid ko affect karte hain aur growing baby upar se pressure daalti hai. Chhote chhote meals lein, khane ke baad seedha letne se bachein, aur trigger foods avoid karein. OTC antacids lene se pehle doctor se zaroor poochein — kuch ingredients pregnancy mein safe nahi hote. Homeopathy pregnancy mein safe complementary option hai — doctor supervision mein use kar sakte hain.',
    },
    {
      _key: 'faq15',
      question: 'H. pylori aur gastritis mein kya connection hai?',
      answer: 'H. pylori (Helicobacter pylori) ek bacteria hai jo stomach mein rahta hai aur lining ko dheere dheere damage karta hai — ye India mein chronic gastritis ka sabse common cause hai. Rough estimate ke mutabik India mein 50-70% adults mein ye bacteria hota hai (Lancet study). Lekin sab log symptomatic nahi hote. Agar gastritis symptoms chronic hain to stool antigen test ya urea breath test se H. pylori check karana zaroori hai.',
    },
    {
      _key: 'faq16',
      question: 'Kya stress se gastritis ho sakti hai — kaise?',
      answer: 'Haan — ye connection real hai aur medically proven hai. Stress ke waqt body "fight or flight" mode mein jaati hai — cortisol aur adrenaline release hote hain. Ye hormones stomach acid production badhaate hain, gut ki blood supply kam karte hain (healing slow hoti hai), aur stomach emptying slow ho jaata hai. Jo log psychologically highly stressed hain unme H. pylori bhi zyada symptomatic hoti hai. Isliye gastritis treatment mein stress management — yoga, mindfulness, proper sleep — utna hi zaroori hai jitna diet control.',
    },
    {
      _key: 'faq17',
      question: 'Gastritis mein endoscopy zaroori hai kya?',
      answer: 'Har gastritis patient ko endoscopy ki zaroorat nahi hoti. Doctor pehle clinical diagnosis se treatment shuru karte hain. Endoscopy tab recommend hoti hai jab: symptoms 4-6 hafte ke treatment mein better nahi hue, blood vomiting ya kaala latrine ho, unexplained weight loss ho, ya umar 45+ ho aur naye symptoms start hue hon. Endoscopy se stomach lining directly dekhi jaati hai aur biopsy se H. pylori ya serious conditions rule out hoti hain.',
    },
    {
      _key: 'faq18',
      question: 'Gastritis ka Ayurvedic ya ghar ka ilaaj kya hai?',
      answer: 'Ghar ke kuch proven-helpful options hain: aloe vera juice (subah khali pet, unsweetened), banana, coconut water, aur ginger-honey ki halki chai. Amla (Indian gooseberry) stomach lining ke liye protective maana jaata hai — fresh amla ya amla powder thoda paani mein. Mulethi (licorice root) — stomach lining healing ke liye traditional use hai, lekin zyada time tak high dose nahi lena chahiye. Lekin ghar ka ilaaj mild cases mein supporting role mein theek hai — chronic ya severe gastritis mein proper diagnosis aur treatment bypass mat karein.',
    },
    {
      _key: 'faq19',
      question: 'Kya antacids lena safe hai gastritis mein?',
      answer: 'Short term mein antacids symptom relief dete hain — bilkul safe hain occasional use ke liye. Lekin long-term dependency problematic hai. Zyada samay tak antacids lene se mineral absorption (calcium, magnesium) affect hoti hai, gut bacteria ka balance bigad sakta hai, aur root cause mask hoti rehti hai. Homeopathy is perspective se ek better long-term companion hai — acid suppress kiye bina healing approach karta hai.',
    },
    {
      _key: 'faq20',
      question: 'Gastritis mein khali pet rehna theek hai ya nahi?',
      answer: 'Gastritis mein khali pet rehna bilkul avoid karein — ye symptoms aur worse kar deta hai. Jab stomach mein khaana nahi hota, acid lining pe directly attack karta hai. Isliye din mein 4-5 baar chhote meals lena aur khaane ke beech zyada gap nahi rakhna gastritis management ka golden rule hai. Subah uthke 30 min ke andar thoda kuch zaroor khaayein — ek banana ya daliya perfect hai. Fasting ya crash diets gastritis mein specifically harmful hain.',
    },
    {
      _key: 'faq21',
      question: 'Kya gastritis se pet ka cancer ho sakta hai?',
      answer: 'Ye darr kaafi common hai — lekin seedha jawab ye hai ki generic gastritis se cancer ka risk bahut low hota hai. Risk mainly two specific situations mein slightly badhta hai: pehla, long-standing H. pylori infection jo decades tak untreated rahe; doosra, atrophic gastritis jisme stomach lining ki cells dheere dheere khatam hone lagti hain. In conditions ka regular monitoring aur treatment kiya jaaye to risk significantly manageable rehta hai. Chronic gastritis ke patients mein periodic endoscopy follow-up recommended hai — ye preventive step hai, ghabrahat ki wajah nahi.',
    },
    {
      _key: 'faq22',
      question: 'Gastritis mein raat ko dard zyada kyun hota hai?',
      answer: 'Raat ko gastritis symptoms zyada feel hone ke kuch wajah hain: letne se acid esophagus mein aasani se aata hai (gravity ka effect nahi hota), raat mein stomach khaali hoti hai to acid lining pe directly kaam karta hai, aur body ka cortisol level (jo kuch anti-inflammatory hota hai) raat mein low hota hai. Raat ke dard ke liye: sone se 2-3 ghante pehle khaana khaayein, pillow thoda utha lein (head elevated rakhein), aur raat ke khaane mein heavy ya oily cheezein avoid karein.',
    },
    {
      _key: 'faq23',
      question: 'Kya gastritis mein dahi khaana theek hai?',
      answer: 'Haan — plain, low-fat homemade dahi gastritis mein actually helpful hai. Dahi mein probiotics (Lactobacillus) hote hain jo gut bacteria ka balance maintain karte hain aur stomach lining ki healing mein support karte hain. Studies suggest karte hain ki H. pylori associated gastritis mein probiotic-rich dahi saath mein lene se antibiotic treatment ki effectiveness bhi better ho sakti hai. Lekin full-fat flavored ya sweetened packaged yogurt avoid karein. Ghar ka plain dahi, thoda sa, meals ke saath lena best hai.',
    },
    {
      _key: 'faq24',
      question: 'Gastritis mein paani kitna peena chahiye?',
      answer: 'Gastritis mein adequate hydration bahut zaroori hai — din mein 8-10 glasses paani (approximately 2-2.5 litres). Paani stomach lining ko hydrated rakhta hai aur acid ko dilute karta hai. Lekin timing matter karti hai: khane ke saath ya turant baad bahut zyada paani mat piyein — ye digestive enzymes dilute karta hai. Khaane se 30 min pehle ya 1 ghante baad piyein. Room temperature ya halka garm paani — ice-cold nahi (especially khali pet). Subah uthte hi ek glass normal temperature paani peena stomach ke liye bahut achha hai.',
    },
  ],

  sources: [
    { _key: 's1', name: 'CCRH — Journal of Research in Homoeopathy', url: 'ccrhindia.nic.in', year: '2019' },
    { _key: 's2', name: 'World Gastroenterology Organisation — Global Guideline on H. pylori', url: 'worldgastroenterology.org', year: '2021' },
    { _key: 's3', name: 'Lancet Regional Health — Prevalence of H. pylori in India', url: 'thelancet.com', year: '2022' },
    { _key: 's4', name: 'Mayo Clinic — Gastritis: Diagnosis and Treatment', url: 'mayoclinic.org', year: '2023' },
    { _key: 's5', name: 'AYUSH National Treatment Protocol for Gastritis', url: 'ayush.gov.in', year: '2020' },
  ],

  doctorNote: 'Mere clinic mein jo patients regularly chai-coffee zyada lete hain aur late raat khaate hain unme chronic gastritis bahut common hai — aur khaas baat ye hai ki sirf Nux Vomica se start karke diet correction ke saath aksar 4-6 hafte mein bahut achha response milta hai. H. pylori test mai practically sab chronic gastritis patients mein karata hoon — bahut baar ye miss hoti hai aur patient sirf antacids pe chalta rehta hai bina root cause jaane. — Dr. Shadab, Homeopedia.in',
}

async function seed() {
  console.log('Seeding Gastritis (Pet Ki Sujan)...')
  await client.createOrReplace(doc)
  console.log('✅ Done! disease-gastritis seeded.')
}

seed()
