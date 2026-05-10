import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-dry-eye-syndrome',
  _type: 'disease',
  title: 'Dry Eye Syndrome',
  hindiName: 'Aankhon Ki Jalan / Sukhi Aankhein / Aankhon Ka Sukhapan',
  slug: { _type: 'slug', current: 'dry-eye-syndrome' },
  category: 'Eye',
  publishedAt: '2026-05-10T00:00:00.000Z',
  metaTitle: 'Dry Eye Syndrome – Aankhon Ki Jalan Ka Ilaaj',
  metaDescription: 'Aankhon mein jalan, sukhapan aur thakan ka ilaaj – dry eye ke types, causes, homeopathic treatment aur diet guide. Doctor-reviewed, verified info.',

  heroText: 'Dry Eye Syndrome ek aisi condition hai jisme aankhein poori tarah ya sahi tarah aansu nahi bana paati – ya jo aansu bante hain wo jaldi sukh jaate hain. Natiija: aankhon mein jalan, khujli, "kuch pada hai" jaisa ehsaas, ya achanak zyada paani aana. Aajkal screen pe ghante bitane wale, AC mein kaam karne wale, aur contact lens pahanne wale logon mein ye bahut tezi se badh rahi hai. Sahi treatment aur lifestyle changes se isko effectively control kiya ja sakta hai.',

  quickFacts: {
    whatItIs: 'Aankhein ya to kam aansu banati hain, ya aansu jaldi evaporate ho jaate hain – dono se aankhon ki protective film kharab hoti hai',
    howCommon: 'India mein 30-40% urban adults (especially screen workers aur women 40+) kisi na kisi degree ka dry eye experience karte hain – under-diagnosed hai',
    treatmentDuration: 'Lifestyle changes se mild-moderate mein 6-12 hafte mein significant improvement | Chronic MGD ya autoimmune: 3-6 mahine ongoing management',
    successRate: 'Warm compress + omega-3 + screen discipline combination se 2-3 mahine mein screen ghante baith sakte hain bina jalan ke – clinically visible improvement',
  },

  causes: [
    'Meibomian Gland Dysfunction (MGD) – eyelid ki oil glands kaam band kar deti hain, tear film ki oily layer nahi banti',
    'Screen overuse (phones, laptops, TV) – blink rate ghad jaata hai, aansu jaldi evaporate hote hain',
    'AC / fans / dry environments – hawa aankhon ki naami kheench leti hai',
    'Hormonal changes – menopause, pregnancy, ya thyroid dysfunction mein tear production affect hoti hai',
    'Medicines ke side effects – antihistamines, antidepressants, blood pressure ki kuch dawaiyan tear production ghata deti hain',
    'Autoimmune conditions – Sjogren\'s syndrome, rheumatoid arthritis, lupus mein lacrimal glands par asar padta hai',
    'Vitamin A ki kami – tear glands ko vitamin A chahiye hota hai sahi kaam ke liye',
    'Contact lens ka zyada use – lens aankhon ki oxygen supply aur tear film dono affect karta hai',
  ],

  riskFactors: [
    '40+ umar ke log – tear production umra ke saath naturally ghatti hai',
    'Mahilayein – hormonal changes (menopause, pregnancy, contraceptive pills) ke karan zyada risk',
    'Screen workers – IT professionals, data entry, students – 6+ ghante screen ke saamne daily',
    'Contact lens users – lens wear se aankhon ka natural tear cycle affect hota hai',
    'Dusty / polluted environments mein rehne wale – tier 2-3 cities mein road dust bada factor hai',
    'Air-conditioned offices mein 8+ ghante bitane wale',
    'Diabetic patients – diabetes nerve damage se tear production affect kar sakta hai',
    'Jo log pehle LASIK surgery karwa chuke hain – surgery ke baad dry eye ek common side effect hai',
  ],

  complications: [
    'Corneal damage – aankhon ki surface pe scratches aur ulcers jo permanent vision loss ka risk banate hain',
    'Recurrent eye infections – lubrication na hone se bacteria aur infection ka risk badh jaata hai',
    'Chronic light sensitivity (photophobia) – aankhein roshni sehne mein taklif hoti hai permanently',
    'Vision fluctuation – aankhon ki roshni clear nahi rehti, padhne ya driving mein dikkat hoti hai',
    'Severe cases mein corneal scarring – jis se roshni permanent roop se affect ho sakti hai',
  ],

  types: [
    {
      _key: 'type1',
      name: 'Aqueous Deficient Dry Eye (Paani Ki Kami Wali)',
      description: 'Aankhon ki tear glands (lacrimal glands) poori tarah aansu nahi bana paati. Aankhon ko lubricant milta hi nahi – bahut tez jalan aur redness. Zyada tar Sjogren\'s syndrome, radiation therapy, ya Vitamin A ki kami wale patients mein hoti hai. Schirmer\'s test mein 5mm se kam aansu 5 minutes mein.',
    },
    {
      _key: 'type2',
      name: 'Evaporative Dry Eye (Jaldi Sukhne Wali – Sabse Common)',
      description: 'Aansu bante hain lekin unki oily layer (lipid layer) theek nahi hoti – isliye aansu jaldi evaporate ho jaate hain. India mein ye sabse common type hai. Screen pe kaam karne wale, AC mein rehne wale, aur Meibomian Gland Dysfunction wale logon mein zyada. TBUT test mein 10 seconds se kam aata hai.',
    },
    {
      _key: 'type3',
      name: 'Mixed Dry Eye (Dono Ka Combination)',
      description: 'Paani ki kami bhi hai aur oily layer bhi theek nahi – dono saath mein hote hain. Ye cases mein theek hone mein thoda zyada waqt lagta hai aur combined approach chahiye hoti hai.',
    },
    {
      _key: 'type4',
      name: 'Meibomian Gland Dysfunction (MGD)',
      description: 'Evaporative dry eye ka ek major cause – alag se mention zaroori hai kyunki bahut common hai. Meibomian glands eyelids ke andar hoti hain jo oily layer banati hain. Jab ye glands block ho jaati hain, lipid layer nahi banti. Pehchaan: eyelids pe yellowish crust, subah aankhein chipakna. Treatment: sirf eye drops se kaam nahi – warm compress aur lid massage specific aur effective hai.',
    },
  ],

  symptoms: [
    {
      _key: 'sym1',
      category: 'Jalan Aur Discomfort Ke Signs',
      items: [
        'Aankhon mein ek continuous jalan, chubhan ya khujli',
        '"Kuch giraa hua hai aankhon mein" jaisa ehsaas (foreign body sensation)',
        'Aankhein laal rehna, particularly evening mein',
        'Papalton ka bhaari mahsoos hona – aankhein kholi rehna mushkil lagta hai',
      ],
    },
    {
      _key: 'sym2',
      category: 'Drishti Se Judi Problems',
      items: [
        'Padhte waqt ya screen dekhte waqt vision blurry hona – blink karne pe thodi der ke liye theek ho jaata hai',
        'Tez roshni sehna mushkil hona (photophobia / light sensitivity)',
        'Raat ko gaadi chalana mushkil – lights ke aage halos dikhna',
        'Lagaataar kaam karne mein aankhein jaldi thak jaana',
      ],
    },
    {
      _key: 'sym3',
      category: 'Paradoxical Signs (Jo Confusing Lagte Hain)',
      items: [
        'Achanak bahut zyada aansu aana – ye dry eye ka hi symptom hai; sukhi aankhein reflex se zyada aansu produce karti hain',
        'Subah aankhein chipakna ya crusty hona',
        'Hawa, dhuan ya AC ke seedhe samne aankhein aur zyada jalti hain',
      ],
    },
  ],

  homeopathyBenefits: [
    'Individualized treatment – aapki dry eye ka exact pattern dekh ke medicine select hoti hai (jalan kab zyada, light sensitivity hai ya nahi)',
    'Hormonal aur autoimmune root cause address karna – Sjogren\'s ya menopause-related dry eye mein body ke systemic response ko modulate karna',
    'Safe for long-term use – artificial tears pe lifelong dependency reduce karna possible hai complementary homeopathy se',
    'Screen-induced, environment-triggered dry eye mein symptoms control mein help milti hai',
    'Children aur elderly ke liye safe – practically no systemic side effects',
  ],

  medicines: [
    {
      _key: 'med1',
      name: 'Euphrasia Officinalis',
      bestFor: 'Jinhe aankhon mein jalan ke saath bahut zyada aansu aate hain (watery eyes paradox), aankhein laal rehti hain, subah chipakti hain, aur hawa ya dhuaan se jalan aur badh jaati hai.',
      keyIndications: [
        'Reflex tearing ke saath jalan – aansu zyada, aankhein phir bhi dry',
        'Subah aankhein chipakna – discharge ke saath redness',
        'Hawa ya dhuaan se worse – aankhon ki mucous membrane pe specific action',
      ],
    },
    {
      _key: 'med2',
      name: 'Natrum Muriaticum',
      bestFor: 'Jinhe aankhon mein jalan ke saath photophobia ho, aankhein subah bahut dry feel hon, aur jo emotionally reserved ya stressed rehte hain – especially grief ya long-term tension wale.',
      keyIndications: [
        'Photophobia ke saath morning dryness – subah worst',
        'Emotional ya hormonal trigger – menopause, grief, long-term stress',
        'Body mein fluid balance level pe kaam – systemic constitutional remedy',
      ],
    },
    {
      _key: 'med3',
      name: 'Belladonna',
      bestFor: 'Jab aankhein suddenly bahut laal ho jaayein, tez jalan ho, roshni se darr lagta ho (intense photophobia), aankhein khushk aur hot feel hon – aur symptoms abruptly aaye hoon.',
      keyIndications: [
        'Sudden onset – abruptly aayi redness, jalan aur dryness',
        'Intense photophobia – roshni bilkul nahi sehti',
        'Aankhein hot aur dry – acute inflammatory response mein fast-acting',
      ],
    },
    {
      _key: 'med4',
      name: 'Silicea',
      bestFor: 'Jab dry eye ke saath eyelids pe baar baar stye (aankhon ki phunsi) bante hon, pus ya discharge ho, aur aankhon ke corners mein ganda jam jaata ho – weak immune system wale patients.',
      keyIndications: [
        'Dry eye + recurrent stye – blocked Meibomian glands ke saath',
        'Weak immunity – immunity aur glandular function dono address karta hai',
        'Aankhon ke corners mein discharge – chronic glandular blockage',
      ],
    },
    {
      _key: 'med5',
      name: 'Pulsatilla',
      bestFor: 'Mahilayein jisme dry eye hormonal changes (irregular periods, menopause) ke saath aaya ho, aankhon se thick discharge ho, symptoms khule mein ya thandi hawa mein better hon.',
      keyIndications: [
        'Hormonal dry eye – puberty se menopause tak ki women mein',
        'Thick discharge – thandi hawa se better, warm room mein worse',
        'Mucous membranes aur hormonal system pe constitutional action',
      ],
    },
  ],

  dietInclude: [
    {
      _key: 'di1',
      category: 'Omega-3 Rich Foods',
      emoji: '🐟',
      items: [
        'Alsi ke beej (flaxseeds) – omega-3 se bharpoor, Meibomian glands ki oil quality sudharte hain; roz 1 tsp pees ke paani ya dahi mein lo',
        'Akhrot (walnuts) – omega-3 ka acha plant-based source jo aankhon ki oily layer ke liye zaroori hai',
        'Sarson ka tel – cooking mein use karo; omega-3 content se Indian diet mein aasaani se supplement hota hai',
        'Macchi (rahu, rohu, tuna) – jo log khate hain unke liye best omega-3 source; study suggest karte hain fish khane walon mein dry eye less severe',
      ],
    },
    {
      _key: 'di2',
      category: 'Vitamin A & Antioxidants',
      emoji: '🥕',
      items: [
        'Gajar (carrots) – beta-carotene se bhara, body mein vitamin A mein convert hota hai; tear glands support karta hai',
        'Paalak (spinach) – lutein aur zeaxanthin; retina aur tear film dono ke liye protective',
        'Shakarkand (sweet potato) – vitamin A ka excellent source; weekly 2-3 baar khao',
        'Aam (mango) – natural vitamin A source; season mein roz khao',
      ],
    },
    {
      _key: 'di3',
      category: 'Hydration & Anti-Inflammatory',
      emoji: '💧',
      items: [
        'Paani – minimum 2.5-3 litre daily; dehydration directly tear production ghata deta hai – sabse simple aur powerful step',
        'Nariyal paani – electrolytes ke saath hydration; dry eye mein roz subah piyo',
        'Blueberries / Jamun – anthocyanins se bhare; eye inflammation reduce karne mein help karte hain',
        'Haldi wala doodh – curcumin anti-inflammatory; raat ko piyo',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'Dehydrating Foods',
      emoji: '❌',
      items: [
        'Chai aur coffee zyada – caffeine diuretic hai, body ka paani nikalta hai jo tear production ghata deta hai; din mein 1-2 cup se zyada nahi',
        'Alcohol – strongly dehydrating; aankhon ki surface pe seedha asar; dry eye severe ho jaati hai',
      ],
    },
    {
      _key: 'da2',
      category: 'Inflammatory Triggers',
      emoji: '🌶️',
      items: [
        'Maida ya processed white flour foods – inflammation badhata hai; biscuits, bread, pasta limit karo',
        'Zyada namak (sodium) – fluid retention aur redistribution affect karta hai, tear quality pe asar',
        'Refined vegetable oils (refined sunflower, vanaspati) – omega-6 zyada; inflammatory pathway activate karta hai; aankhon ki oily layer kharab hoti hai',
        'Trans fats (chips, namkeen, fried snacks) – Meibomian gland blockage badhate hain; dry eye ka direct trigger',
      ],
    },
    {
      _key: 'da3',
      category: 'Allergy Triggers (Observe Karein)',
      emoji: '⚠️',
      items: [
        'Dairy products (kuch logon mein) – agar aankhon mein jalan dairy ke baad zyada hoti hai to limited karo; allergy-related dry eye mein common trigger',
        'Excess sugar (mithai, cold drinks) – blood sugar fluctuation tear gland ko affect karta hai; diabetic patients ke liye especially avoid karo',
      ],
    },
  ],

  dietTip: 'Omega-3 foods (alsi, akhrot, sarson tel) se 6-8 hafte mein tear film quality mein measurable improvement possible hai – ye dry eye ka sabse proven dietary intervention hai.',
  dietNote: 'Dairy aur sugar sabke liye trigger nahi hote – pehle 2-3 hafte observe karo ki aankhon mein jalan kisi specific food ke baad badh rahi hai ya nahi. Personal pattern jaanna zyada helpful hai.',

  dos: [
    '20-20-20 Rule follow karein – har 20 minutes screen ke baad, 20 feet door kisi cheez ko 20 seconds dekhein; blink rate normalize karta hai',
    'Deliberately blink karein – screen pe kaam karte waqt consciously blink karo; dry eye ka no. 1 self-help tip hai',
    'Warm compress daily lagayein – saaf kapda ya warm compress bag ko 5-10 minutes aankhon pe rakho; Meibomian glands unclog hoti hain',
    'Omega-3 daily lo – alsi, akhrot ya supplement ke form mein; tear film ki quality 6-8 hafte mein sudhar sakti hai',
    'Paani 2.5-3 litre daily piyein – dehydration aur dry eye directly linked hain',
    'Sunglasses bahar pahno – UV aur hawa dono se protection; wraparound style best hai dry eye ke liye',
    'Humidifier room mein use karo – especially AC wale rooms mein; ideal humidity 40-60% hai',
  ],

  donts: [
    'Aankhon ko haath se mat maleo – rubbing se cornea pe micro-scratches hote hain aur inflammation aur badh jaata hai',
    'Raat ko contact lens mat pahno – oxygen aur lubrication dono khatam; infection risk bahut high',
    'AC ya fan seedhe aankhon pe mat chalne do – blower direct face pe mat karo; vent aankhon se door rakho',
    'Bina doctor advice ke steroid ya antibiotic eye drops mat dalo – galat drops se condition worse ho sakti hai',
    'Zyada screen brightness mat rakho – high brightness tear evaporation speed badhati hai; ambient light ke barabar rakho',
    'Khula aankhein rakhke wind wali jagah mat baitho – two-wheeler chalate waqt helmet with visor ya eyewear zaroor use karo',
  ],

  seasonalCare: {
    summer: 'AC aur fan ka direct use tear film ko fastest evaporate karta hai. Humidifier use karo ya ek bowl paani AC ke saath rakhna bhi help karta hai. Bahar wraparound sunglasses pahno – UV protection bhi, hawa bhi seedhi nahi aati. Paani 3+ litre daily garmi mein. Basant (spring) mein pollen count high ho to khidkiyan band rakhein; ghar aane ke baad haath aur chehra dhoyein.',
    winter: 'Indoor heaters aur closed environments aankhon ko dry banate hain. Room mein humidifier use karo ya geela kapda rakhna bhi kaam karta hai. Bahar scarf se aankhon ko hawa se protect karo. Omega-3 intake is season mein zyada rakhein. Warm compress roz raat ko – 5-10 minutes; Meibomian glands ko active rakhta hai.',
    monsoon: 'Infections aur allergy ka risk badh jaata hai. Aankhon ko gande haathon se bilkul mat chhuon. Puddles ya wet surfaces se aane ke baad haath zaroor dhoyein. Contact lens users is mausam mein extra caution – lens infection ka risk zyada hota hai.',
  },

  faqs: [
    {
      _key: 'faq1',
      question: 'Dry Eye kya hota hai – simple bhasha mein samjhao?',
      answer: 'Dry Eye Syndrome tab hota hai jab aapki aankhon mein ya to poori tarah aansu nahi bante, ya jo aansu bante hain wo jaldi sukh jaate hain. Aansu sirf rona nahi – ye ek protective film hai jo har second aapki aankhon ko saaf, hydrated aur infection-free rakhti hai. Jab ye film kharab ho jaati hai to aankhon mein jalan, khujli, lali ya "kuch pada hai" jaisa ehsaas hota hai. Aajkal screen pe zyada waqt bitane walon aur AC mein kaam karne walon mein ye bimari bahut common ho gayi hai.',
    },
    {
      _key: 'faq2',
      question: 'Dry Eye aur normal aankhon ki jalan mein kya fark hai?',
      answer: 'Normal aankhon ki jalan tab hoti hai jab kuch dhool pad jaaye ya thake hue hon – ghante bhar mein theek ho jaati hai. Dry Eye mein jalan din bhar rehti hai ya baar baar aati hai – sirf paani se dhone se ya rest se theek nahi hoti. Sabse bada difference: dry eye mein aankhon mein ek "grated" ya "scratchy" feeling lagaataar rehti hai, roshni buri lagti hai, aur screen ya padhna karne pe jaldi thakaan aati hai. Agar ye symptoms 2 hafte se zyada rahein to doctor se milna zaroori hai.',
    },
    {
      _key: 'faq3',
      question: 'Kya mobile aur laptop se dry eye ho sakta hai?',
      answer: 'Haan – ye sabse common cause banta ja raha hai, especially India mein. Jab hum screen dekhte hain to hamari blink rate normally 15-20 baar per minute se ghad ke 5-7 baar per minute ho jaati hai. Blink kam matlab tear film baar baar refresh nahi hoti – aansu evaporate hote hain aur sukhi aankhein ho jaati hain. 6 ghante se zyada screen use karne walon mein dry eye ka risk significantly zyada hota hai. Solution: 20-20-20 rule aur deliberate blinking se ye control ho sakta hai.',
    },
    {
      _key: 'faq4',
      question: 'Aankhon mein jalan ho to ghar pe kya karna chahiye?',
      answer: 'Ghar pe dry eye control karne ke liye proven steps: Pehla – warm compress: ek saaf kapde ko gungune paani mein bhigokar 5-10 minute aankhon pe rakho – daily karo. Doosra – 20-20-20 rule: har 20 minute pe screen band karo aur 20 feet door dekho, 20 seconds. Teesra – paani zyada piyo – 3 litre daily. Chautha – alsi ke beej ya akhrot roz khao – omega-3 tear film banata hai. Agar ek mahine mein improvement na ho to doctor se milein.',
    },
    {
      _key: 'faq5',
      question: 'Dry Eye permanently theek ho sakta hai?',
      answer: 'Ye depend karta hai cause pe. Agar dry eye ka karan curable cheez hai – jaise Vitamin A ki kami, koi medicine, ya hormonal changes – to cause treat karne se dry eye bhi theek ho jaata hai. Agar cause chronic hai (MGD, autoimmune, aging) to permanent control bilkul possible hai – sahi treatment, lifestyle changes aur homeopathy combination se majority patients ki life practically normal ho jaati hai. Goal "cure" se zyada "control jo life disrupt na kare" hona chahiye.',
    },
    {
      _key: 'faq6',
      question: 'Kya dry eye mein homeopathy kaam karta hai?',
      answer: 'Haan – homeopathy dry eye mein ek useful complementary approach hai, especially chronic ya recurrent cases mein. Homeopathy mein sirf aankhon ka symptom nahi, poori picture dekhi jaati hai – aapka dry eye kab zyada hota hai, kisse badhta hai, saath mein hormonal ya stress related issue hai ya nahi. Euphrasia, Natrum Mur, Belladonna jaise remedies case studies mein meaningful improvement dikhate hain. Homeopathy artificial tears ki jagah nahi – lekin long-term pattern todne aur frequency-severity ghataane mein sahayak hai.',
    },
    {
      _key: 'faq7',
      question: 'Dry Eye mein kaun si eye drops use karein?',
      answer: 'Over-the-counter lubricating eye drops (artificial tears) dry eye mein safe aur effective hain – preservative-free drops better hote hain frequent use ke liye. Ye dhyan rakho: lubricating drops symptom management hai, cure nahi. "Redness remover" drops dry eye ke liye nahi hain – baar baar lagane se dependence ho sakti hai. Steroid ya antibiotic drops bina doctor ke mat lo. Agar din mein 4-5 baar se zyada drops daalni pad rahi hain to doctor se milein.',
    },
    {
      _key: 'faq8',
      question: 'Aankhon mein sukhapan aur paani aana saath mein kyun hota hai?',
      answer: 'Ye bahut common confusion hai. Jab aankhein sukhi hoti hain, to aankhon ki nerve ends stimulate hoti hain – ye brain ko signal bhejti hain ki "aankhein khatare mein hain." Response mein brain suddenly bahut zyada aansu produce karta hai – isse reflex tearing kehte hain. Isliye dry eye mein aankhon se achanak bahut paani aata hai, phir phir dry ho jaata hai. Ye paradox dry eye ka ek classic sign hai.',
    },
    {
      _key: 'faq9',
      question: 'Contact lens se dry eye hota hai kya – aur kya lens band karna padega?',
      answer: 'Haan – contact lens dry eye ka ek major risk factor aur trigger hai. Lens tear film ko do layers mein tod deta hai, oxygen supply ghata deta hai, aur blink reflex affect karta hai. Lekin iska matlab ye nahi ki lens hamesha ke liye band karna padega. Shorter wear time (8 ghante se kam), daily disposable lenses, aur lens-compatible lubricating drops se zyada tar logon ka dry eye manage ho jaata hai.',
    },
    {
      _key: 'faq10',
      question: 'Dry Eye ke liye konsa test hota hai – diagnosis kaise hoti hai?',
      answer: 'Dry Eye diagnose karne ke liye: Schirmer\'s Test – aankhon ke nichle hisse mein paper strip 5 minute ke liye; dekha jaata hai kitna aansu produce hota hai. TBUT Test (Tear Break-Up Time) – ek dye dali jaati hai aur slit lamp se dekha jaata hai aansu ki film kitni jaldi toot ti hai – 10 seconds se kam aana dry eye ka sign hai. Meibomian Gland Evaluation – eyelids ko examine karke oil glands block hain ya nahi. Ye sab ophthalmologist ya trained MBBS doctor karte hain.',
    },
    {
      _key: 'faq11',
      question: 'Dry Eye ka gharelu ilaaj kya hai – bina dawai ke kaise theek karein?',
      answer: 'Evidence-based ghar ke nuskhe: Warm compress (gunguna kapda 10 minute roz raat ko) – Meibomian glands unclog hoti hain, tear quality sudharta hai. Lid massage (doctor se sikh ke) – warm compress ke baad eyelids ko gently massage karna oil flow better karta hai. Alsi ke beej 1 tsp roz – omega-3 tear film repair karta hai. Humidifier wale kamre mein kaam karna. 20-20-20 rule aur deliberate blinking. In sab ko milake 6-8 hafte karo – majority mild cases mein significant relief milta hai.',
    },
    {
      _key: 'faq12',
      question: 'Dry Eye mein kya khaana chahiye aur kya nahi?',
      answer: 'Khaana chahiye: Omega-3 foods – alsi, akhrot, sarson tel, macchi. Vitamin A ke liye – gajar, paalak, shakarkand. Antioxidants ke liye – aam, blueberries, haldi waala doodh. Paani – 3 litre daily. Nahi khaana chahiye: Zyada chai-coffee (caffeine dehydrate karta hai), alcohol, chips aur fried namkeen (trans fats Meibomian glands block karte hain), maida products, aur excess sugar. Diet se 2-3 months mein tear film quality mein measurable improvement possible hai.',
    },
    {
      _key: 'faq13',
      question: 'Aankhon mein sukhapan aur sir dard saath mein ho to kya karna chahiye?',
      answer: 'Dry Eye aur sar dard ka combination kaafi common hai – do main reasons: aankhein constantly strain karne se eye muscles thak jaati hain jo temporal region mein dard deti hain; aur dehydration dono ka common cause hai. Kya karein: screen band karo, warm compress lagao, paani piyo aur ek ghante rest karo. Agar ye dono regularly saath mein hon to ophthalmologist se milein – kabhi kabhi refractive error bhi is combination ka reason hota hai.',
    },
    {
      _key: 'faq14',
      question: 'Bachchon mein dry eye ho sakta hai kya?',
      answer: 'Haan – bachcho mein dry eye ab uncommon nahi raha. Tablets, phones, aur TV ka zyada use bacchon ki blink rate ghata deta hai. Symptoms thoda alag dikh sakte hain – bachcha aankhein malega, school mein board dekhne mein takleef bolega, ya baar baar aankhein mimicha ke kholega. Agar 5 saal se bada bachcha ye sab kar raha hai to eye examination karwao – unchecked eye problems padhne aur school performance dono affect karte hain.',
    },
    {
      _key: 'faq15',
      question: 'Dry Eye mein LASIK surgery karwa sakte hain kya?',
      answer: 'Ye bahut important sawaal hai. Dry Eye ek contraindication hai LASIK ke liye – agar surgery se pehle dry eye hai to LASIK ke baad dry eye aur severe ho sakta hai kyunki surgery mein corneal nerves temporarily affected hoti hain jo tear production regulate karti hain. Agar LASIK karwana chahte ho aur dry eye hai to: pehle dry eye ka proper treatment karo, 3-6 months ke baad re-evaluate, aur surgeon ko poori history batao.',
    },
    {
      _key: 'faq16',
      question: 'Pregnancy mein dry eye zyada kyun hoti hai – kya karna chahiye?',
      answer: 'Pregnancy mein hormonal changes (estrogen aur progesterone fluctuations) tear production aur tear film quality dono ko affect karte hain. Delivery ke baad hormones settle hone par ye better hota hai. Kya karein: preservative-free lubricating drops – generally safe, lekin doctor se confirm karo. Warm compress aur omega-3 diet safe alternatives hain. Homeopathy pregnancy mein safe option – experienced homoeopath se safe remedies milti hain bina systemic side effects ke.',
    },
    {
      _key: 'faq17',
      question: 'Aankhon mein jalan ke saath roshni mein takleef (photophobia) kyun hoti hai?',
      answer: 'Dry Eye mein aankhon ki surface pe jo protective tear film hoti hai wo irregular ho jaati hai – roshni cornea se sahi tarah se refract nahi hoti. Isse aankhon mein achanak tez roshni "cut" karti hui lagti hai. Fluorescent lights, sunlight aur headlights sabse zyada affect karte hain. Kya kare: wraparound sunglasses bahar, screen brightness kam, anti-glare screen filter. Agar photophobia bahut severe ho ya achanak aayi ho to turant doctor se milein.',
    },
    {
      _key: 'faq18',
      question: 'Dry Eye ke liye warm compress kaise lagayen – sahi tarika?',
      answer: 'Sahi tarika: saaf kapde ko garam (gunguna – hot nahi) paani mein bhigoyen, nichod lo, band aankhon pe 5-10 minute rakhho. 2-3 baar doharaye jab kapda thanda ho. Iske baad aankhon ko gently saaf kapde se bahar se andar ki taraf saaf karo – dead cells aur debris hata jaate hain. Raat ko sone se pehle daily karo – ek mahine mein MGD-related dry eye mein clearly fark dikta hai. Market mein reusable warm compress pads bhi available hain.',
    },
    {
      _key: 'faq19',
      question: 'Kya aankhon mein sukhapan thyroid se ho sakta hai?',
      answer: 'Haan – thyroid aur aankhon ka seedha sambandh hai. Hypothyroidism mein blink reflex slow ho sakta hai aur tear production ghad sakti hai. Graves\' disease (hyperthyroidism) mein "Thyroid Eye Disease" (TED) hoti hai jisme aankhein bahari taraf ubharti hain, eyelids theek se band nahi hoti aur cornea exposed rehti hai – ye severe dry eye ka cause hai. Agar thyroid problem hai aur saath mein aankhon mein jalan hai to ophthalmologist ko thyroid history zaroor batayein.',
    },
    {
      _key: 'faq20',
      question: 'Dry Eye diabetes mein alag kyun hoti hai?',
      answer: 'Diabetic patients mein dry eye zyada common aur zyada serious hoti hai. Diabetes mein corneal nerves damage hoti hain – in nerves ka kaam hai aankhon ko stimulate karna ki blink karo aur tears banao. Jab ye nerves damage hoti hain to blink reflex aur tear production dono ghad jaate hain. Diabetic logon ko routine eye checkup ke saath specifically dry eye evaluation bhi karwana chahiye. Blood sugar control directly dry eye severity pe asar karta hai.',
    },
    {
      _key: 'faq21',
      question: 'Meibomian Gland Dysfunction (MGD) kya hoti hai?',
      answer: 'MGD dry eye ka sabse common underlying cause hai. Meibomian glands eyelids ke andar hoti hain – ye oily substance banati hain jo aansu ke upar ek protective layer banata hai jiski wajah se aansu jaldi evaporate nahi hote. Jab ye glands block ho jaati hain ya thickened oil produce karti hain to ye layer nahi banti – aansu jaldi sukh jaate hain – dry eye ho jaata hai. MGD ka treatment sirf eye drops se nahi hota – warm compress, lid massage, aur gland expression important hai.',
    },
    {
      _key: 'faq22',
      question: 'Dry Eye mein doctor ke paas kab jaana chahiye?',
      answer: 'Ghar pe manage kar sakte ho jab: jalan mild ho, sirf screen use ke baad ho, warm compress se temporary relief mile, aur vision bilkul clear ho. Turant doctor ke paas jaao jab: aankhon mein bahut tez dard ho (jalan nahi – dard), vision suddenly blurry ho jaaye, aankhon mein lali ke saath yellow/green discharge ho, contact lens mein sudden severe jalan ho, ya warm compress se bhi 2 hafte mein koi relief na mile. Ye corneal infection ya injury ke signs ho sakte hain.',
    },
  ],

  sources: [
    { _key: 'src1', name: 'American Academy of Ophthalmology – Dry Eye Syndrome Overview', url: 'https://www.aao.org', year: '2023' },
    { _key: 'src2', name: 'DEWS II Report – Tear Film & Ocular Surface Society | Ocular Surface Journal', url: 'https://www.tearfilm.org', year: '2017' },
    { _key: 'src3', name: 'Indian Journal of Ophthalmology – Dry Eye epidemiology in Indian population', url: 'https://www.ijo.in', year: '2021' },
    { _key: 'src4', name: 'Mayo Clinic – Dry Eyes: Symptoms & Causes', url: 'https://www.mayoclinic.org', year: '2023' },
    { _key: 'src5', name: 'National Eye Institute (NEI), USA – Dry Eye', url: 'https://www.nei.nih.gov', year: '2022' },
    { _key: 'src6', name: 'WHO – Visual Impairment and Eye Care', url: 'https://www.who.int', year: '2023' },
  ],

  relatedDiseases: [
    'Stye (Guheri)',
    'Sjogren\'s Syndrome',
    'Allergic Rhinitis',
    'Hypothyroidism',
    'Rheumatoid Arthritis',
  ],

  selfCheck: 'Agar aankhon mein lagaataar jalan, "kuch pada hai" jaisa ehsaas, screen pe thakaan, ya achanak zyada aansu aate hain – to dry eye evaluation zaroor karwayein. Warm compress aur 20-20-20 rule abhi se shuru karein.',
}

async function seed() {
  try {
    const result = await client.createOrReplace(doc)
    console.log('✅ Dry Eye Syndrome created/updated:', result._id)
    console.log('🌐 Live at: https://homeopedia.in/diseases/dry-eye-syndrome')
  } catch (err) {
    console.error('❌ Error:', err)
  }
}

seed()
