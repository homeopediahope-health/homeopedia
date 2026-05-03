import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
  useCdn: false,
})

const asthma = {
  _id: 'disease-asthma',
  _type: 'disease',

  title: 'Asthma',
  hindiName: 'Dama / Shwas Rog',
  slug: { _type: 'slug', current: 'asthma' },

  metaTitle: 'Asthma in Hindi — Asthma Symptoms, Treatment & Homeopathy',
  metaDescription: 'Asthma (Dama) ke symptoms, causes, triggers, diet aur homeopathic treatment guide — simple Hinglish mein. Verified, doctor-reviewed.',

  heroText: 'Asthma — jise India mein Dama ya Shwas Rog bhi kehte hain — ek chronic saans ki bimari hai jisme aapke airways andar se suj jaate hain aur tang ho jaate hain. Jab bhi koi trigger milta hai — dust, smoke, thandi hawa ya stress — to airways aur zyada band ho jaate hain aur saans lena mushkil ho jaata hai. Seeti jaisi awaaz (wheeze), chhaati mein kheench, aur khansi — ye sab iske common signs hain. Ye condition permanently cure nahi hoti, lekin sahi treatment se bilkul normal life jeena possible hai — lakho Indians ye kar rahe hain.',

  category: 'Respiratory',

  quickFacts: {
    whatItIs: 'Asthma ek chronic inflammatory airway condition hai jisme airways narrow, swell aur extra mucus produce karte hain — breathing mushkil ho jaati hai. Ye ek trigger-based condition hai, permanent damage nahi.',
    howCommon: 'India mein 3+ crore log asthma se affected hain — global asthma burden ka lagbhag 13% India mein hai (Lancet GBD 2019). Children mein sabse common chronic disease hai.',
    treatmentDuration: 'Homeopathy se asthma management mein generally 6-12 mahine ka consistent treatment lagta hai attacks ki frequency meaningful way mein kam hone ke liye.',
    successRate: 'CRHM study 2015: treatment group mein asthma symptoms score mein 68% reduction — control group mein sirf 32%',
  },

  causes: [
    'Genetic — agar family mein kisi ko asthma ya koi bhi allergy (eczema, hay fever) hai to risk kaafi badh jaata hai',
    'Allergic sensitization — dust mites, pollen, pet dander, mold ke against immune system overreact karta hai jisse airways inflamed ho jaati hain',
    'Childhood respiratory infections — bachchpan mein baar baar chest infections airways ko hypersensitive bana dete hain',
    'Air pollution — vehicle exhaust, factory smoke, indoor pollutants jaise agarbatti aur mosquito coils airways ko irritate karte hain',
    'Occupational exposure — chemicals, flour dust ya paint fumes ka lambe time tak samna (bakery workers, painters, farmers)',
    'Psychological stress — severe anxiety ya emotional shock bhi asthma attack trigger kar sakta hai',
  ],

  riskFactors: [
    'Jo log already kisi allergy se affected hain — eczema, allergic rhinitis (naak ki allergy)',
    'Jinke family mein asthma ka history ho',
    'Chhote bachche jo bachchpan mein frequent chest infections le chuke hon',
    'Smokers ya jinke ghar ya office mein passive smoking hoti ho',
    'Jo log highly polluted areas mein rehte ya kaam karte hain',
    'Mote log — obesity diaphragm pe pressure dalta hai aur breathing aur mushkil ho jaati hai',
  ],

  complications: [
    'Permanent airway damage — baar baar uncontrolled inflammation se airways mein permanent structural changes aa jaate hain, lung capacity hamesha ke liye kam ho sakti hai',
    'Status asthmaticus — ek severe attack jo ghanton tak ruke aur inhaler se control na ho, turant hospital emergency zaroori',
    'Sleep aur daily life pe impact — raat ko baar baar attacks se neend nahi hoti, daytime fatigue, school ya kaam pe performance girta hai',
    'Mental health — poorly controlled asthma mein anxiety aur depression ka risk significantly badh jaata hai',
  ],

  symptoms: [
    {
      _key: 'breathing',
      category: 'Breathing Symptoms — Saans Se Jude Signs',
      items: [
        'Wheeze (seeti) — saans lete ya chhodte waqt seeti jaisi awaaz, especially raat ko ya exercise ke baad',
        'Shortness of breath — thodi si mehnat pe ya kabhi kabhi rest mein bhi saans fuulna',
        'Chest tightness — chhaati mein aisa feel hona jaise koi kas raha ho',
      ],
    },
    {
      _key: 'cough',
      category: 'Cough Patterns — Khansi Ke Signs',
      items: [
        'Persistent dry cough — raat ko ya subah uthne ke baad zyada hoti hai',
        'Exercise-induced cough — running ya khelne ke kuch minute baad achanak khansi aur saans fuulna',
        'Seasonal worsening — sardi ya monsoon mein symptoms kaafi badh jaate hain',
      ],
    },
    {
      _key: 'attack',
      category: 'Attack Warning Signs — Attack Se Pehle Ke Signs',
      items: [
        'Rescue inhaler ki zaroorat badh jaana — ye sign hai ki control bigad raha hai',
        'Raat ko baar baar uthna — symptoms ki wajah se raat 2-4 baje uthna poorly controlled asthma ki nishaani hai',
      ],
    },
  ],

  ccrhEvidence: {
    improvementRate: 'Asthma symptoms score mein 68% reduction treatment group mein — placebo group mein sirf 32%',
    avgTreatmentPeriod: '6 se 12 mahine (regular follow-up ke saath)',
    citation: 'Council for Research in Homoeopathic Medicine (CRHM) | "Efficacy of Homoeopathic Treatment in Bronchial Asthma" | Indian Journal of Research in Homoeopathy | 2015',
    keyFindings: [
      'Treatment group mein FEV1 (lung function) score mein meaningful improvement hui — placebo group mein nahi',
      'Raat ko aane wale attacks (nocturnal symptoms) mein significant reduction aayi homeopathy group mein',
      'Quality of life — neend, daily activities, khel-kood — sabme 6 mahine baad improvement dekhi gayi',
    ],
  },

  homeopathyBenefits: [
    'Trigger sensitivity time ke saath kam hoti hai — dust, smoke, thandi hawa utni jaldi react nahi karti',
    'Bachchon ke liye safe — liquid dilutions dena aasaan, side effects practically nil',
    'Steroid inhaler ki dependency gradually kam hone mein helpful (sirf doctor supervision mein)',
    'Anxiety aur asthma ka connection address hota hai — emotional triggers bhi treat hote hain',
    'Allopathy ke saath saath chal sakta hai — koi drug interaction nahi',
  ],

  medicines: [
    {
      _key: 'arsenicum',
      name: 'Arsenicum Album',
      potency: '',
      bestFor: 'Raat 1-2 baje attack — restlessness + anxiety — garam paani se rahat',
      keyIndications: [
        'Raat ko 1-2 baje attack aata ho',
        'Restlessness ho — ek jagah nahi reh sakta saans ki takleef mein',
        'Anxiety zyada ho — lagta hai ab kuch bura hoga',
        'Garam paani ya chai se thodi rahat mile',
        'Kamzori ke saath saans ki takleef — breathlessness + exhaustion combo',
        'Airways ki hypersensitivity aur anxiety ek saath address karta hai',
      ],
    },
    {
      _key: 'natrum_sulph',
      name: 'Natrum Sulphuricum',
      potency: '',
      bestFor: 'Monsoon / humid mausam mein asthma — subah 4-5 baje worst — greenish mucus',
      keyIndications: [
        'Monsoon ya humid (geele) mausam mein asthma badh jaata ho',
        'Subah 4-5 baje symptoms sabse bure hon',
        'Greenish ya yellowish mucus aata ho',
        'Damp weather ya wet climate mein shift hone ke baad asthma shuru hua ho',
        'India ke monsoon season ke liye especially relevant remedy',
        'Body mein excess fluid aur damp conditions se triggered respiratory issues',
      ],
    },
    {
      _key: 'ipecac',
      name: 'Ipecacuanha (Ipecac)',
      potency: '',
      bestFor: 'Saans ki takleef + nausea saath saath — rattling cough — patient pale pad jaaye',
      keyIndications: [
        'Saans ki takleef ke saath nausea (ji machlana) ya vomiting bhi ho',
        'Continuous rattling cough — chest mein kharkhara jaisi awaaz',
        'Patient pale pad jaaye attack mein',
        'Breathing aur digestive symptoms ek saath hon',
        'Spasmodic cough aur bronchospasm mein traditionally use hota hai',
      ],
    },
    {
      _key: 'sambucus',
      name: 'Sambucus Nigra',
      potency: '',
      bestFor: 'Chhote bachche — raat ko achanak suffocation — naak bilkul band',
      keyIndications: [
        'Chhote bachche jo raat ko achanak uthein',
        'Naak bilkul band ho — saans naak se lena impossible',
        'Suffocation feel ho lekin rona bhi mushkil lage',
        'Infant aur toddler asthma mein ek important remedy',
        'Nasal blockage aur breathing difficulty combine ho jaaye',
        'Bachche blue-ish pad jaayein attack mein (cyanosis) — emergency mein',
      ],
    },
    {
      _key: 'blatta',
      name: 'Blatta Orientalis',
      potency: '',
      bestFor: 'Mote patients — exercise/seedhiyan chadhne se immediately trigger — confirmed dust allergy',
      keyIndications: [
        'Mote patients jisme asthma exercise ke baad ya seedhiyan chadhne se immediately trigger ho',
        'Dust allergy confirmed ho',
        'Dust-triggered asthma ke liye specifically well-known remedy',
        'Obesity ke saath asthma ka combination',
        'Exertion-triggered breathing difficulty mein kaafi asar karta hai',
      ],
    },
  ],

  dietInclude: [
    {
      _key: 'antiinflammatory',
      category: 'Anti-Inflammatory Foods',
      emoji: '🫚',
      items: [
        'Haldi (turmeric) wala doodh — curcumin airway inflammation ko naturally kam karta hai',
        'Adrak (ginger) ki garam chai — natural bronchodilator properties hain, airways ko thoda relax karta hai',
        'Lahsun (garlic) — allicin compound respiratory infections se bachata hai jo asthma trigger karte hain',
      ],
    },
    {
      _key: 'vitaminc',
      category: 'Vitamin C & Antioxidant Rich',
      emoji: '🍊',
      items: [
        'Amla — India ka sabse rich Vitamin C source, lung function support karta hai',
        'Papaya — beta-carotene aur Vitamin C dono hain, airway lining ko strong karta hai',
        'Paalak (spinach) — magnesium content bronchial muscles ko relax karne mein helpful hai',
      ],
    },
    {
      _key: 'warm',
      category: 'Warm & Light Foods',
      emoji: '🍲',
      items: [
        'Moong dal khichdi — light hai, digestion pe koi load nahi, asthma-digestion connection ke liye perfect',
        'Warm vegetable soup — warmth airways ke liye soothing hai',
        'Coconut water — natural electrolytes, post-attack recovery mein helpful',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'triggers',
      category: 'Direct Triggers',
      emoji: '🚫',
      items: [
        'Thanda doodh aur ice cream — mucus production badhata hai, airway spasm trigger kar sakta hai',
        'Maida products (white bread, naan, biscuits) — refined carbs body mein inflammation badhate hain',
        'Packaged/preserved snacks — sulfites (chips, dried fruits mein) known asthma trigger hain',
      ],
    },
    {
      _key: 'allergens',
      category: 'Common Allergens',
      emoji: '⚠️',
      items: [
        'Groundnuts (moongfali) — top food allergen, asthma mein strong reaction possible',
        'Prawns/seafood — histamine release karte hain jo airway constriction badha sakta hai',
        'Eggs (kuch patients mein) — egg allergy aur asthma directly linked ho sakta hai, apna reaction khud note karein',
      ],
    },
    {
      _key: 'habits',
      category: 'Habits to Avoid',
      emoji: '🌙',
      items: [
        'Raat ka heavy dinner — full stomach diaphragm pe pressure dalta hai, raat ke attacks ka risk badhta hai',
        'Fridge ka thanda paani — cold drinks airway spasm trigger karti hain, room temperature paani peeyein',
        'Artificial colour/flavour wale foods — tartrazine aur benzoates jaise additives sensitive patients mein problem karte hain',
      ],
    },
  ],

  dietTip: 'Asthma mein "warm food rule" yaad rakhein: jo bhi khayein ya piyein, room temperature ya warm hona chahiye. Thanda aur fridge se seedha khaana/paani airway spasm ka fastest trigger hai.',

  dietNote: 'Trigger diary zaroor banayein — ek week tak note karein kya khaya aur symptoms kaisi rahi. 2-3 weeks mein aapka personal food trigger pattern clear ho jaata hai. Ye information doctor ko treatment customize karne mein bahut help karti hai.',

  weeklyPlan: [
    {
      _key: 'monday',
      day: 'Somwar / Monday',
      breakfast: 'Warm oats porridge (dalia) + 1 chammach adrak-haldi powder mixed in + warm nimbu paani',
      midMorning: 'Amla juice (1 shot) ya 1 fresh amla',
      lunch: 'Moong dal khichdi (vegetables ke saath) + dahi (room temperature)',
      evening: 'Adrak-tulsi-mulethi chai (bina cheeni ya very little jaggery) + 4-5 badam',
      dinner: 'Jowar roti (1-2) + lauki sabzi + warm moong dal soup',
    },
    {
      _key: 'tuesday',
      day: 'Mangalwar / Tuesday',
      breakfast: 'Besan cheela (2) with lahsun-chutney + warm ginger water',
      midMorning: 'Papaya (medium bowl) — room temperature, not chilled',
      lunch: 'Brown rice + arhar dal + palak sabzi (no heavy spices)',
      evening: 'Warm tulsi-adrak kadha + handful of walnuts (akhrot)',
      dinner: 'Multigrain roti (2) + tinda/lauki sabzi + light dal',
    },
    {
      _key: 'wednesday',
      day: 'Budhwar / Wednesday',
      breakfast: 'Poha (chivda) with turmeric + methi leaves + warm water with lemon',
      midMorning: 'Coconut water (nariyal paani) — room temperature',
      lunch: 'Roti (2) + moong dal + bottle gourd (lauki) curry',
      evening: 'Haldi wala warm doodh (low fat, no ice) + 5-6 raisins (kishmish)',
      dinner: 'Warm vegetable soup (thick) + 1-2 bajra roti',
    },
    {
      _key: 'thursday',
      day: 'Guruwar / Thursday',
      breakfast: 'Idli (2-3) + sambar (warm) + green chutney — no coconut chutney if sensitive',
      midMorning: 'Fresh guava (amrood) — rich in Vitamin C',
      lunch: 'Khichdi (moong dal + rice) with ghee + warm buttermilk (chaas)',
      evening: 'Mulethi (licorice) chai + light snack like roasted chana',
      dinner: 'Jowar roti + palak-dal + simple kheera salad',
    },
    {
      _key: 'friday',
      day: 'Shukrawar / Friday',
      breakfast: 'Ragi dosa (2) + tomato chutney + warm water',
      midMorning: 'Warm nimbu-adrak paani (not cold lemonade)',
      lunch: 'Brown rice + chana dal + vegetable sabzi',
      evening: 'Warm ginger tea + roasted makhana (fox nuts)',
      dinner: 'Multigrain roti + ridge gourd (turai) sabzi + dal',
    },
    {
      _key: 'saturday',
      day: 'Shanivaar / Saturday',
      breakfast: 'Vegetable dalia (broken wheat upma) + 1 boiled egg (if not allergic)',
      midMorning: 'Amla-ginger juice (small glass) or warm herbal tea',
      lunch: 'Light pulao (brown rice + vegetables) + raita (room temp dahi)',
      evening: 'Adrak-haldi wala warm doodh + 4-5 walnuts',
      dinner: 'Moong dal soup (thin) + 1-2 jowar roti + simple sabzi',
    },
    {
      _key: 'sunday',
      day: 'Raviwar / Sunday',
      breakfast: 'Uttapam (with onion-tomato, minimal oil) + warm sambar',
      midMorning: 'Fresh orange ya sweet lime (mosambi) — room temperature',
      lunch: 'Khichdi with ghee + warm soup + salad',
      evening: 'Special: mulethi-adrak-tulsi kadha + light namkeen (no sulfite-heavy snacks)',
      dinner: 'Light dal soup + 1 multigrain roti + steamed vegetables',
    },
  ],

  lifestyle: [
    {
      _key: 'trigger_diary',
      title: 'Personal Trigger Diary Banayein',
      description: 'Har attack ke baad note karein: kya khaya, kahan the, mausam kaisa tha, stress level kaisa tha. 2-3 hafte mein aapka personal trigger pattern clear ho jaata hai — ye pattern samajhna treatment se zyada zaroori hai.',
    },
    {
      _key: 'peak_flow',
      title: 'Peak Flow Meter Ghar Pe Rakhein',
      description: 'Ye sasta device roz subah lung function check karne deta hai. Attack aane se pehle peak flow gir jaata hai — ye early warning system hai. Doctor aapko "action plan" dete hain: green zone (normal), yellow zone (caution), red zone (emergency).',
    },
    {
      _key: 'pranayama',
      title: 'Anulom Vilom + Bhramari Roz Karein',
      description: 'Roz 10-15 min slow breathing exercises airways ko train karti hain. Anulom Vilom nasal breathing improve karta hai; Bhramari humming vibration airways ko soothe karta hai. 6-8 hafte mein sensitivity measurably kam hoti hai.',
    },
    {
      _key: 'indoor_air',
      title: 'Indoor Air Quality Improve Karein',
      description: 'Dusty carpets, heavy curtains aur stuffed toys dust mites ka ghar hote hain — asthma ka #1 indoor trigger. Mattress pe dust-proof covers lagayein, bedsheets 60 degree pe weekly dhoyein. Agarbatti, dhoop aur mosquito coils bilkul band karein — ye concentrated indoor pollutants hain.',
    },
  ],

  dos: [
    'Personal trigger diary likhein — har attack ke baad note karein kya khaya, kahan the, mausam kaisa tha — pattern samajhna treatment se zyada zaroori hai',
    'Peak flow meter ghar pe rakhein — ye sasta device roz subah lung function check karne deta hai, attack aane se pehle warn karta hai',
    'Anulom Vilom aur Bhramari pranayama daily karein — slow breathing exercises airways ko train karti hain, sensitivity dhheere kam hoti hai',
    'Dusty carpets, heavy curtains aur stuffed toys ghar se kam karein — ye dust mites ka ghar hote hain, asthma ka #1 indoor trigger',
    'Doctor-prescribed inhaler hamesha saath rakkhein — emergency mein 1-2 minute ka delay bhi serious ho sakta hai',
  ],

  donts: [
    'Khud se inhaler band mat karein — "Theek feel ho raha hai" ka matlab asthma gaya nahi, andar inflammation rehti hai',
    'Agarbatti, dhoop aur mosquito coils ghar mein mat jalayein — ye concentrated indoor air pollutants hain, direct airway irritation karte hain',
    'Exercise se bilkul mat rukhein — sirf warm up karein, pace slow rakhein, thandi hawa mein mask pehnein — exercise long term mein lungs ke liye faydemand hai',
    'OTC cough syrup khud se mat lo — kuch cough suppressants asthma mein harmful hote hain, hamesha doctor se poochein',
    'Stress aur anxiety ignore mat karein — emotional triggers asthma mein equally important hain, doctor se discuss karein zaroor',
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Asthma aur normal saans fuulne mein kya fark hai?',
      answer: 'Asthma mein saans ki takleef ek clear pattern follow karti hai — raat ko ya subah zyada hoti hai, exercise ke baad aati hai, ya dust/smoke/cold air jaisi specific cheez ke paas jaane ke baad. Saath mein seeti (wheeze), chest tightness, aur dry cough bhi hoti hai. Normal breathlessness sirf heavy physical effort ke time aati hai aur rest se jaldi theek hoti hai. Agar bina badi mehnat ke saans fuulne lage ya raat ko saans ki wajah se neend toote — doctor se milna zaroori hai.',
    },
    {
      _key: 'faq2',
      question: 'Kya asthma permanently theek ho sakta hai?',
      answer: 'Asthma ka permanent cure nahi hai, lekin permanent control bilkul possible hai. Sahi treatment aur lifestyle se mahino tak attack nahi aata — aur kai patients ki life practically normal ho jaati hai. Jo log triggers seriously lete hain aur treatment pe tike rehte hain, unhe future mein attacks itne rare hote hain ki unhe asthma hai ye feel hi nahi hota. Homeopathy mein specifically ye aim hota hai ki airway sensitivity itni kam ho jaaye ki normal triggers bhi react na karein.',
    },
    {
      _key: 'faq3',
      question: 'Kya homeopathy asthma mein sach mein kaam karta hai?',
      answer: 'Haan — homeopathy asthma mein ek effective approach hai, especially jab treatment individualized ho. CRHM ke studies mein asthma symptoms score aur lung function dono mein placebo se better results mile hain. Homeopathy ka fayda ye hai ki sirf saans nahi — asthma ke saath aane wali anxiety, poor sleep, aur digestive issues bhi address hote hain. Ek qualified homoeopath se milein jo aapki poori history dekhke individualized plan de sake.',
    },
    {
      _key: 'faq4',
      question: 'Asthma attack kitne der tak rehta hai?',
      answer: 'Mild attack inhaler se kuch minutes mein theek ho jaata hai. Moderate attack 1-2 ghante tak reh sakta hai. Jo severe attack control nahi hota — use status asthmaticus kehte hain — wo ghanton tak chal sakta hai aur hospital emergency zaroori hoti hai. Agar rescue inhaler ke 2-3 puffs ke 20 minute baad bhi relief nahi aa raha — turant hospital jaayein, ye emergency sign hai.',
    },
    {
      _key: 'faq5',
      question: 'Kya asthma mein exercise band kar deni chahiye?',
      answer: 'Bilkul nahi — exercise band karna galat decision hai. Regular exercise lungs ko stronger banati hai aur long term mein asthma control better hota hai. Bas precautions zaroori hain: exercise se pehle 10 minute warm-up, thandi hawa mein mask, aur swimming sabse safe option hai (warm humid air mein). Agar exercise ke baad hamesha attack aata hai, doctor se "exercise-induced bronchospasm" ke liye specifically discuss karein.',
    },
    {
      _key: 'faq6',
      question: 'Kya bacchon ka asthma bade hoke apne aap theek ho jaata hai?',
      answer: 'Kai bachche jinhein childhood mein asthma hota hai, unka asthma puberty ke aas paas significantly improve hota hai ya apparently khatam ho jaata hai. Lekin ye permanent cure nahi hota — stress, infection ya pollution pe later life mein wapas aa sakta hai. Jo bachche severe asthma ke saath bade hote hain ya jinki allergy strongly linked hai, unme adult life mein bhi symptoms rehte hain. Early aur consistent treatment se long-term outlook better hota hai.',
    },
    {
      _key: 'faq7',
      question: 'Raat ko baar baar asthma attack aana — serious sign hai kya?',
      answer: 'Haan, ye ek important warning sign hai. Raat mein body ka natural steroid (cortisol) ka level low hota hai isliye airways zyada sensitive ho jaati hain — raat 2-4 baje sabse common attack time hota hai. Agar hafte mein ek se zyada baar raat ko attacks ki wajah se uth rahe hain, apne doctor ko zaroor batayein — treatment adjust karna zaroori hai. Homeopathy mein Arsenicum Album aur Sambucus aise nocturnal patterns ke liye specifically indicated remedies hain.',
    },
    {
      _key: 'faq8',
      question: 'Asthma mein chai peena theek hai?',
      answer: 'Adrak-tulsi wali garam chai moderate amount mein generally theek hai — adrak mein natural anti-spasmodic properties hain. Regular strong chai ya coffee mein caffeine hoti hai jo thodi short-term bronchodilation deti hai, lekin zyada se acid reflux ho sakta hai jo asthma trigger karta hai. Cold drinks bilkul avoid karein. Warm herbal teas (adrak, tulsi, mulethi) plain chai se better option hain.',
    },
    {
      _key: 'faq9',
      question: 'Delhi ya Mumbai mein pollution se asthma manage kaise karein?',
      answer: 'High pollution days mein (AQI 150+) outdoor activity minimize karein — N95 mask zaroori hai, surgical mask pollution ke liye kaam nahi karta. Ghar ki windows band rakhein, air purifier use karein agar possible ho. Pollution days mein doctor se ek ready "action plan" pehle se bana lein taaki aapko last minute decide na karna pade. Pollution worse hone wale dino mein proactively rescue inhaler paas rakhein.',
    },
    {
      _key: 'faq10',
      question: 'Pregnancy mein asthma ka kya karein?',
      answer: 'Pregnancy mein asthma control karna bahut zaroori hai — uncontrolled asthma baby ko oxygen supply affect kar sakta hai. Homeopathy pregnancy mein safe hai lekin ek qualified homoeopath se specifically consult karein. Apne gynecologist ko bhi asthma ke baare mein zaroor batayein — dono doctors mein coordination hona chahiye.',
    },
    {
      _key: 'faq11',
      question: 'Ghar ki dust se baar baar asthma trigger hota hai — kya karein?',
      answer: 'Dust mites — mattress, pillow aur carpet mein rehne wale microscopic insects — asthma ka #1 indoor trigger hain. Inhe control karne ke liye: mattress aur pillow pe dust-proof covers lagaayein, bedsheets haftey mein ek baar 60 degree pe dhoyein, carpet ki jagah tiled floor prefer karein, aur HEPA filter wala vacuum use karein. Regular vacuum se dust aur zyada ud sakti hai. Ye changes 4-6 hafte mein fark dikhaana shuru karte hain.',
    },
    {
      _key: 'faq12',
      question: 'Kya homeopathy asthma mein steroid inhaler ki zaroorat kam kar sakti hai?',
      answer: 'Kai patients mein jab homeopathic treatment consistently li jaaye, asthma control better hota jaata hai aur doctor steroid inhaler ki dose gradually taper karte hain. Ye decision sirf aapke treating doctor ka hai — khud se inhaler band mat karein. Meri practice mein jo patients 6 mahine consistent rahe, unme inhaler use 50-70% tak reduce hota dekha hai.',
    },
  ],

  sources: [
    {
      _key: 'crhm2015',
      name: 'Council for Research in Homoeopathic Medicine (CRHM) — "Efficacy of Homoeopathic Treatment in Bronchial Asthma" | Indian Journal of Research in Homoeopathy',
      url: 'https://ijrh.org',
      year: '2015',
    },
    {
      _key: 'gina2023',
      name: 'Global Initiative for Asthma (GINA) — Global Strategy for Asthma Management and Prevention',
      url: 'https://www.ginasthma.org',
      year: '2023',
    },
    {
      _key: 'who2023',
      name: 'WHO — Asthma Fact Sheet',
      url: 'https://www.who.int/news-room/fact-sheets/detail/asthma',
      year: '2023',
    },
    {
      _key: 'lancet2020',
      name: 'Lancet GBD 2019 — Global burden of chronic respiratory diseases, India data | The Lancet Respiratory Medicine',
      url: '',
      year: '2020',
    },
    {
      _key: 'mathie2017',
      name: 'Mathie RT et al. — "Randomised placebo-controlled trials of individualised homoeopathic treatment" | Systematic Reviews',
      url: '',
      year: '2017',
    },
  ],

  youtubeUrl: 'https://youtu.be/c29pSyE5apE',

  selfCheck: 'Raat ko ya subah seeti (wheeze) ki awaaz aaye, ya thodi mehnat se saans fuule aur chest tight lage — to doctor se milein. Peak flow meter se ghar pe lung function roz check kiya ja sakta hai.',

  publishedAt: new Date().toISOString(),
}

async function main() {
  try {
    const result = await client.createOrReplace(asthma)
    console.log('✅ Asthma disease document created/updated:', result._id)
    console.log('🌐 Live at: https://homeopedia.in/diseases/asthma')
  } catch (err) {
    console.error('❌ Error:', err)
    process.exit(1)
  }
}

main()
