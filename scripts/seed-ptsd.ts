import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-ptsd',
  _type: 'disease',
  title: 'PTSD',
  hindiName: 'Aaghaati Manas Rog / Mansik Aaghat Vikaar',
  slug: { _type: 'slug', current: 'ptsd' },
  category: 'Mental',
  publishedAt: '2026-05-05T00:00:00.000Z',
  metaTitle: 'PTSD ka Homeopathic Ilaj | Mansik Aaghat Recovery',
  metaDescription: 'PTSD ke liye homeopathic treatment, types, causes, diet aur recovery tips – Homeopedia.in par puri guide Hindi mein padhe.',

  heroText: 'PTSD yaani Post-Traumatic Stress Disorder ek aisi mansik avastha hai jisme koi bahut bada dardnaak haadsa – jaise accident, hinsa, sexual assault, yudh, ya kissi priyajan ki maut – ke baad insaan ka dimag us ghatna ko baar baar jeeta rehta hai. Neend nahi aati, dar lagta hai, gussa aata hai, aur duniya se kaatne ka mann hota hai. Ye sirf "weak hona" nahi hai – ye ek real bimari hai jiska proper ilaaj hota hai. Homeopathy is bimari mein patient ke poore mann, dar, aur nature ko dekhkar constitutional treatment deti hai – bina sedation ke, bina dependency ke.',

  quickFacts: {
    whatItIs: 'Traumatic haadse ke baad dimag ka us ghatna mein atka rehna; flashbacks, nightmares, avoidance aur hyperarousal ki combination; ek real treatable mental health condition',
    howCommon: 'India mein estimated 5-8% adults kabhi na kabhi PTSD se guzarte hain; 80% cases unreported rehte hain kyunki log ise kamzori samajhte hain',
    treatmentDuration: 'Acute PTSD – 3-6 mahine | Chronic PTSD – 6-18 mahine | Complex PTSD – 1-3 saal; sahi treatment se improvement har stage mein hoti hai',
    successRate: 'CCRH observational studies (2018-2022) mein anxiety aur trauma disorders mein homeopathic treatment se significant symptomatic improvement documented hai; koi dependency risk nahi',
  },

  causes: [
    'Koi bada physical ya emotional haadsa – accident, rape, attack, natural disaster, war – jab life ya safety ko seedha khatra ho',
    'Bachpan mein physical, emotional ya sexual abuse – lambe samay tak repeated trauma ka asar sabse gehri jad pakadta hai',
    'Kisi priyajan ki achanak ya hinsakpurna maut – accident, suicide, murder – witness karna ya suddenly khabar sunna',
    'Lambe samay tak domestic violence ya neglect – insaan kabhi safe feel hi nahi kar pata, nervous system hamesha alert mode mein rehti hai',
    'Medical trauma – ICU mein rehna, painful surgery, near-death experience, ya serious illness ka shock',
    'Frontline kaam – soldiers, police, ambulance workers, doctors jo baar baar doosron ka trauma dekhte hain',
  ],

  riskFactors: [
    'Pehle se anxiety ya depression ho – nervous system already sensitized hoti hai toh trauma aur jaldi impact karta hai',
    'Family history of mental illness – genetic predisposition stress response ko vulnerable banati hai',
    'Social support kam ho – akela feel karna trauma ke baad sabse bada risk factor hai; koi baat karne wala na ho',
    'Haadse ke baad proper help na milna – jab acute phase mein support nahi milti toh symptoms chronic ho jaate hain',
    'Mahilayein – research kehti hai domestic violence aur sexual trauma ke karan zyada risk hota hai',
    'Substance use – alcohol/drugs se cope karne ki koshish PTSD ko aur worse karti hai long term mein',
    'Bachpan mein trauma ya neglect – early life adversity adult PTSD ka strongest predictor hai',
  ],

  complications: [
    'Depression aur suicidal thoughts – PTSD patients mein major depression ka risk 3 guna zyada; serious complication jo turant attention chahti hai',
    'Relationships toot jaati hain – irritability, withdrawal, intimacy se darna; family, friendships, work relationships sabpe asar',
    'Alcohol ya drug dependency – cope karne ke liye shuru karte hain, fir dependency ban jaati hai; double diagnosis common',
    'Physical health kharaab – chronic stress se BP, heart problems, low immunity, gut issues; body bhi suffer karti hai',
    'Kaam ya padhai mein bilkul concentration nahi – brain threat mode mein hota hai, focus possible hi nahi',
    'Doosre anxiety disorders develop ho sakte hain – panic disorder, social anxiety, OCD ke saath PTSD ka overlap common',
  ],

  types: [
    {
      _key: 'type1',
      name: 'Acute PTSD',
      description: 'Haadse ke 1 mahine ke andar shuru hota hai aur 3 mahine tak rehta hai. Accidents, sudden loss, physical assault ke baad most common. Jaldi identify ho toh treatment sabse tezi se kaam karti hai aur recovery better hoti hai.',
    },
    {
      _key: 'type2',
      name: 'Chronic PTSD',
      description: '3 mahine se zyada time tak rehne wala PTSD. War veterans, abuse survivors, aur long-term neglect victims mein common. Ilaaj lambe samay ka hota hai par hota zaroor hai – sahi treatment se meaningful recovery possible hai.',
    },
    {
      _key: 'type3',
      name: 'Delayed-onset PTSD',
      description: 'Haadse ke 6 mahine ya saalon baad bhi shuru ho sakta hai. Confusing isliye lagta hai kyunki patient samajh nahi paata ki achanak ye problems kyun aa rahi hain. Koi doosri mushkil ya similar situation purani yaad wapas le aati hai aur PTSD trigger ho jaata hai.',
    },
    {
      _key: 'type4',
      name: 'Complex PTSD (C-PTSD)',
      description: 'Lambe samay tak baar baar trauma – jaise bachpan mein abuse, domestic violence, captivity – ke baad hota hai. Normal PTSD se alag kyunki identity confusion, emotional dysregulation, aur relationships mein bahut zyada mushkil hoti hai. Treatment mein zyada time aur patience chahiye.',
    },
    {
      _key: 'type5',
      name: 'Secondary / Vicarious PTSD',
      description: 'Doctors, nurses, journalists, rescue workers jo doosron ka trauma regularly dekhte hain unhe hota hai. Khud ko kuch nahi hua fir bhi dar, neend nahi, kaam se mann uthna jaise symptoms aate hain. Aksar missed diagnosis hota hai kyunki log sochte hain "mujhe toh kuch nahi hua tha".',
    },
  ],

  symptoms: [
    {
      _key: 'sg1',
      groupName: 'Flashback & Re-experiencing – Yaad ka baar baar aana',
      items: [
        'Haadse ki vivid yaadein achanak dimag mein aana – din ke beech mein bhi, bina kisi warning ke',
        'Nightmares – raat ko darawne sapne jisme haadsa baar baar hota hai; subah uthke bhi dar rehta hai',
        'Triggers se heart racing, sweating, panic – koi similar smell, jagah, awaaz, ya chehra yaad dila de toh body waise hi react karti hai jaise haadsa ho raha ho',
      ],
    },
    {
      _key: 'sg2',
      groupName: 'Avoidance – Bhagna chahna',
      items: [
        'Us jagah, insaan, ya baat se door bhagna jo haadse ki yaad dilaye – raste badalna, logo se katna',
        'Logo se milna band kar dena, ghar se nahi niklana – social withdrawal itna bad jaata hai ki isolation hi safe lagta hai',
        'Un topics par baat karne se mana karna – family baat kare toh aggressive ho jaana ya room chhod jaana',
      ],
    },
    {
      _key: 'sg3',
      groupName: 'Hyperarousal & Mood Changes – Hamesha alert aur disturbed rehna',
      items: [
        'Hamesha danger feel karna, bahut jaldi chaunkna – door ka koi awaaz bhi sehmi deta hai, koi pighe se aaye toh shock',
        'Neend nahi aana ya baar baar tootna – brain raat ko bhi guard mode mein rehta hai, deep sleep possible nahi',
        'Gussa, irritability, hopelessness – khud ko ya duniya ko blame karna, kisi cheez mein interest nahi, apne aap ko numb feel karna',
      ],
    },
  ],

  ccrhEvidence: 'CCRH (Council for Research in Homoeopathy) ke anxiety aur trauma disorders ke observational studies (2018-2022) mein patients mein sleep quality, anxiety levels, aur emotional reactivity mein significant improvement document ki gayi hai. Constitutional homeopathic approach – jo patient ke poore emotional pattern, fears, aur trauma response ko consider karta hai – PTSD jaise complex conditions mein specially effective paaya gaya hai. Studies ccrhindia.nic.in pe available hain.',

  homeopathyBenefits: {
    explanation: 'Homeopathy PTSD mein is liye alag approach hai kyunki ye sirf symptoms nahi, insaan ke poore emotional pattern ko dekhti hai – kitna dar hai, kaise react karta hai, neend kaisi hai, sapne kaise aate hain, kab zyada takleef hoti hai. Constitutional remedies dimag ke stress response ko gehraayi se address karti hain. Koi sedation nahi, koi withdrawal nahi, koi dependency nahi – aur dheere dheere natural recovery hoti hai jisme patient khud bhi strong feel karta hai.',
    bullets: [
      'Koi sedation ya "numb" feeling nahi – patient alert rehta hai, sirf emotional reactivity normalize hoti hai',
      'Nightmares aur sleep disturbance pe directly kaam karta hai – neend mein sudhar aksar sabse pehla sign hota hai',
      'Long-term dependency ka koi risk nahi – psychiatric medicines ki tarah wean-off ki zaroorat nahi',
      'Child PTSD mein bhi safe – bachon ke liye bahut gentle treatment possible hai',
      'Doosri medicines ke saath complementary approach possible – psychiatric treatment chal rahi ho toh saath le sakte hain',
    ],
  },

  medicines: [
    {
      _key: 'med1',
      name: 'Aconite Napellus',
      bestFor: 'Sudden trauma ke baad – accident, attack – jab heart racing ho, baar baar marne ka dar ho, raat ko panic attacks aayein. Body abhi bhi flight mode mein hai – ye acute shock state ka sabse pehchana remedy hai.',
      keyIndications: [
        'Heart racing, saans phoolna, marne ka dar – haadse ke turant baad shuru hue hon; fresh trauma ka acute state',
        'Raat ko panic attacks – andheron mein aur akele rehne pe zyada darna, neend mein achanak uth baithna chaunke ke saath',
        'Paseena, kaampna, hamesha danger feel karna – body ka flight response haadse ke kaafi baad bhi band nahi hua',
      ],
    },
    {
      _key: 'med2',
      name: 'Ignatia Amara',
      bestFor: 'Grief aur loss ke baad PTSD – kisi priyajan ki maut, breakup, betrayal – jahaan patient rota nahi par andar se toot gaya ho. Suppressed emotional shock aur grief ka pehla remedy.',
      keyIndications: [
        'Andar toot gaya hai par rota nahi logon ke saamne – emotions ko bahut gehri daba ke rakha hai; public mein control',
        'Kaampna, saans mein gap, gale mein lump – jab emotional pain physical symptoms mein badal jaata hai',
        'Baar baar wahi yaad aana – jo kho gaya ya jo hua – grief cycle mein atke rehna, consolation se aur worse hona',
      ],
    },
    {
      _key: 'med3',
      name: 'Stramonium',
      bestFor: 'Bahut intense nightmares, raat mein chillana, andheron se extreme fear, violence ya accident ke baad jo patient hamesha dar mein rehta ho – hyperarousal ka sab se intense state.',
      keyIndications: [
        'Raat ko vivid violent sapne – chillana, uthkar bhagna, subah tak dar feel karna; sapne mein haadsa baar baar repeat hota hai',
        'Andhere aur akele rehne se extreme panic – light aur kisi ke saath rehne pe hi thoda safe lagta hai',
        'Flashbacks bahut intense hain – haadsa dobara ho raha hai jaisa feel hota hai; body physically react karti hai',
      ],
    },
    {
      _key: 'med4',
      name: 'Natrum Muriaticum',
      bestFor: 'Jo patient dard andar chhupata hai, rota nahi logon ke saamne, akela rehna chahta hai, puraani yaadein pakde rehta hai. Chronic ya delayed-onset PTSD aur C-PTSD ke liye.',
      keyIndications: [
        'Saalon purana dard chhupa ke rakha hai – C-PTSD ya delayed onset mein jahaan suppress karna aadat ban gayi',
        'Akele rehna chahta hai – comfort bhi aur isolation bhi dono chahiye; doosron ki sympathy se aur takleef hoti hai',
        'Puraani yaadein baar baar aana – bhoolna chahta hai par dimag rehne nahi deta; consolation se worse hona',
      ],
    },
    {
      _key: 'med5',
      name: 'Opium',
      bestFor: 'Extreme fear ke baad jab patient emotionally freeze ho jaata hai, kuch feel nahi karta, numb ho jaata hai. Dissociation aur emotional shutdown – recovery ka pehla kadam shuru karne ke liye.',
      keyIndications: [
        'Trauma ke baad emotional numbness – kuch feel nahi hota, sab kuch flat aur distant lagta hai; andar khaali khaali',
        'Dissociation – khud se alag lagana, jaise bahar se apne aap ko dekh rahe hain; reality se connection toot gaya',
        'Shock itna bada tha ki dimag ne sab kuch band kar diya – pehle feel karna shuru karna zaroori hai, tab aage ka ilaaj',
      ],
    },
  ],

  dietInclude: [
    {
      _key: 'di1',
      category: 'Brain-Calming Foods',
      emoji: '🧠',
      items: [
        'Akhrot (Walnuts) – Omega-3 se bhara, brain ke stress response ko calm karta hai; roz 4-5 akhrot khaayein',
        'Flaxseeds (Alsi) – Serotonin production support karta hai jo mood stabilize karta hai; roti mein mix kar sakte hain',
        'Fatty fish (Rohu, Salmon) – DHA aur EPA dimag ki inflammation kam karte hain; hafte mein 2-3 baar',
      ],
    },
    {
      _key: 'di2',
      category: 'Mood & Sleep Support',
      emoji: '🌙',
      items: [
        'Banana – Tryptophan hota hai jo serotonin banata hai; mood aur neend dono ke liye; raat ko ek banana helpful',
        'Doodh (warm milk raat ko) – Calcium aur tryptophan se natural neend aati hai; sone se 30 min pehle',
        'Dates (Khajoor) – Magnesium aur natural sugar; anxiety ke waqt instant calm aur energy; din mein 2-3 khajoor',
        'Dark chocolate (70%+) – Cortisol (stress hormone) kam karta hai; thoda daily lena sahi hai',
      ],
    },
    {
      _key: 'di3',
      category: 'Gut-Brain Connection',
      emoji: '🥗',
      items: [
        'Dahi (plain, unsweetened) – Gut bacteria theek rakhti hai jo directly mood aur anxiety pe asar karti hai',
        'Haldi wala doodh – Curcumin brain inflammation aur depression dono pe kaam karta hai; raat ko piyen',
        'Green vegetables (palak, methi) – Folate depression aur anxiety management mein helpful; roz saag khaayein',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'Stimulants',
      emoji: '☕',
      items: [
        'Zyada chai/coffee – Caffeine cortisol badhata hai aur already hyperaroused nervous system aur trigger ho jaata hai',
        'Energy drinks – High caffeine + sugar = anxiety aur panic attack ka risk double; bilkul avoid karein',
      ],
    },
    {
      _key: 'da2',
      category: 'Relaxation Ke Dushman',
      emoji: '🍺',
      items: [
        'Alcohol – Short term calm lagta hai par PTSD symptoms worse karta hai; depression, flashbacks badhte hain; dependency risk',
        'Refined sugar (mithai, biscuits, cold drinks) – Blood sugar peaks aur crashes mood swings badhaate hain',
      ],
    },
    {
      _key: 'da3',
      category: 'Inflammatory Foods',
      emoji: '🍟',
      items: [
        'Fried food, junk food – Brain inflammation badhata hai jo recovery slow karta hai; processed snacks bhi include hain',
        'Processed meats (sausage, packaged food) – Preservatives aur additives nervous system ko disturb karte hain',
      ],
    },
  ],

  dos: [
    'Roz ek fixed routine banayein – uthne, khaane, sone ka time fix karna nervous system ko safety signal deta hai; routine PTSD ka sabse bada dushman hai',
    'Daily 20-30 min walk ya yoga – exercise PTSD mein cortisol naturally kam karta hai; proven hai ki movement healing mein help karti hai',
    'Kisi trusted insaan se baat karein – isolation sabse bada dushman hai; ek safe person ka hona bahut zaroori hai; din mein ek baar zaroor baat karo',
    'Journaling karein – jo feel hota hai kagaz pe likho; dimag halka hota hai aur patterns samajh aate hain; kuch bhi likhna zaroori nahi, bas express karo',
    'Homeopath se regular follow-up karein – PTSD mein medicine progress ke saath adjust hoti rehti hai; dono direction ki communication zaroori hai',
    '4-7-8 breathing practice karein – 4 sec inhale, 7 hold, 8 exhale; anxiety ke moment mein bahut kaam aati hai; din mein 2-3 baar practice karo',
    'Room bright rakhein aur subah dhoop mein baithein – 20-30 min natural light mood aur sleep cycle dono theek karti hai',
    'Professional counseling bhi saath lein – homeopathy aur therapy milke bahut achha kaam karti hain; trauma-focused CBT specially helpful hai',
  ],

  donts: [
    'Alcohol ya drugs se cope mat karein – lagta hai relief mil raha hai par PTSD 3 guna worse ho jaata hai; dependency ka risk alag se',
    'Akele mat raho lambe time tak – forced isolation recovery ko rok deti hai; ghar pe koi na ho to phone pe baat karo',
    'Triggering news, violent movies, ya social media ratko scroll mat karo – ye flashbacks aur nightmares badhata hai; sone se 1 ghante pehle screens band',
    'Kisi ki baat pe "sab theek hai" mat kaho jab nahi ho – masking symptoms treatment delay karta hai; apne homeopath se sach bolna zaroori hai',
    'Dose khud se mat badhao ya band mat karo – homeopathic treatment mein continuity bahut zaroori hai; bina pooche changes mat karo',
    'Haadse ke baare mein khud ko baar baar sochne pe majboor mat karo – rumination healing nahi hai; distract karna bhi theek hai',
    'Trigger jagah ya insaan se avoidance ko permanent mat banao – thoda thoda exposure (guided therapy mein) healing ka hissa hai; complete avoidance long term mein worse karta hai',
    'Professional help lene mein der mat karo – "waqt se theek ho jaayega" ka intezaar mat karo; early treatment se recovery faster aur better hoti hai',
  ],

  seasonalCare: {
    summer: 'Heat se irritability aur anger episodes badh sakte hain. Hydration bahut zaroori – dehydration anxiety trigger karta hai. Dopahar mein bahar nahi jaana better. Coconut water, nimbu paani – natural cooling aur minerals. AC mein zyada time na bitayein – sudden temperature change panic trigger kar sakta hai.',
    monsoon: 'Ghar mein band rehne se isolation aur dark thoughts aa sakte hain – indoor light arrangements zaroori hain. Creative activities – drawing, journaling, music – monsoon mein specially helpful. Mold aur dampness se chest discomfort ho sakti hai jo anxiety trigger karta hai – ghar saaf rakhein.',
    winter: 'PTSD mein winter depression zyada hoti hai – sunlight ki kami mood kharaab karti hai. Subah 20-30 min dhoop mein zaroor baithein. Warmth important hai – garm food, social contact maintain karein. Nightmares winter mein zyada ho sakte hain – sone se pehle warm milk aur light relaxing routine help karta hai.',
  },

  faqs: [
    {
      _key: 'faq1',
      question: 'PTSD kya hota hai aur ye normal stress se alag kaise hai?',
      answer: 'Normal stress kisi bhi mushkil ke baad hota hai aur thodi der mein theek ho jaata hai. PTSD tab hota hai jab ek bahut bada traumatic haadsa – accident, violence, sexual assault, ya kisi ki maut – ke baad bhi insaan ka dimag uss ghatna mein atka rehta hai. 1 mahine se zyada time tak flashbacks, nightmares, dar aur avoid karna PTSD ke signs hain. Ye weakness nahi, ek real bimari hai.',
    },
    {
      _key: 'faq2',
      question: 'PTSD ke liye homeopathic treatment kitne din mein kaam karna shuru karta hai?',
      answer: 'Neend ki quality aur anxiety mein sudhar aksar 3-6 weeks mein dikhai deta hai. Flashbacks aur emotional reactivity mein kami 2-3 mahine mein aati hai. Complex ya chronic PTSD mein 6-18 mahine lagaan normal hai. Har patient alag hai – kuch zyada jaldi, kuch thoda time lete hain.',
    },
    {
      _key: 'faq3',
      question: 'Kya PTSD sirf soldiers ya accident survivors ko hota hai?',
      answer: 'Bilkul nahi. PTSD kisi ko bhi ho sakta hai jisne koi bhi traumatic experience jiya ho – domestic violence, sexual assault, bachpan mein abuse, hospital mein near-death experience, ya kisi priyajan ki hinsakpurna maut. India mein bahut se cases unreported rehte hain kyunki log ise "kamzori" samajhte hain.',
    },
    {
      _key: 'faq4',
      question: 'PTSD mein neend kaise theek hogi – koi natural tarika hai?',
      answer: 'Sone se 1 ghante pehle screen band karo. Warm milk ya chamomile chai lo. Room temperature cool rakho. Ek relaxation routine banao – same time, same steps. Homeopathic treatment mein Stramonium aur Aconite jaise remedies nightmares aur disturbed sleep pe seedha kaam karti hain. Niyamit ilaaj se neend mein sudhar sabse pehla aane wala sign hota hai.',
    },
    {
      _key: 'faq5',
      question: 'Kya PTSD ka homeopathic ilaaj psychiatric medicines ke saath liya ja sakta hai?',
      answer: 'Haan, homeopathic medicines generally safe hain aur usually psychiatric medicines ke saath lene mein koi takraar nahi hoti. Lekin apne dono doctors ko batana zaroori hai – homeopath ko bhi aur psychiatrist ko bhi – taaki sahi coordination ho sake. Abruptly koi bhi medicine band mat karein.',
    },
    {
      _key: 'faq6',
      question: 'PTSD ka ghar pe kya ilaaj kar sakte hain – recovery ke liye kya karein?',
      answer: 'Ghar pe ye zaroor karein: roz subah dhoop mein baithna, haldi wala doodh raat ko, journaling, 20 min walk, trusted insaan se daily baat. Trigger se thoda distance – news, violent content se door rehna. Ye sab homeopathic treatment ke saath milke bahut achha kaam karte hain.',
    },
    {
      _key: 'faq7',
      question: 'Complex PTSD aur normal PTSD mein kya fark hai?',
      answer: 'Normal PTSD ek specific haadse ke baad hota hai. Complex PTSD (C-PTSD) tab hota hai jab trauma lambe samay tak baar baar hua ho – jaise saalon ki domestic violence, bachpan mein abuse, ya captivity. C-PTSD mein identity aur relationships zyada prabhavit hoti hain, aur ilaaj zyada time leta hai.',
    },
    {
      _key: 'faq8',
      question: 'PTSD mein panic attacks aate hain kya aur unhe kaise control karein?',
      answer: 'Haan, PTSD mein panic attacks bahut common hain – heart racing, saans lena mushkil, us dum sab kuch khatam hone jaisa lagta hai. Is waqt 4-7-8 breathing karo – 4 sec inhale, 7 hold, 8 exhale. Haath ko chest pe rakho aur feel karo. Khud se kaho "main safe hoon, ye guzar jaayega." Homeopathic Aconite acute panic mein bahut helpful hoti hai – doctor se zaroor poochho.',
    },
    {
      _key: 'faq9',
      question: 'PTSD se bachne ka koi tarika hai – Prevention kya hai?',
      answer: 'Trauma ke baad jitni jaldi support milti hai, utna achha hota hai. Trusted logon se baat karna, professional help lena, akela nahi rehna – ye sab acute phase mein PTSD banne se rok sakte hain ya usse kam kar sakte hain. Pehle se mental health ko strong rakhna – yoga, neend, social connections – bhi protective hai.',
    },
    {
      _key: 'faq10',
      question: 'Kya bacchon ko bhi PTSD ho sakta hai aur unke symptoms kaise alag hote hain?',
      answer: 'Haan, bacchon ko bhi hota hai. Par unke symptoms adults se alag dikhte hain – woh baat se nahi kehte, par khel mein haadse ko dobara perform karte hain, baar baar nightmare aate hain, school se mana karte hain, bedwetting wapas shuru ho jaati hai, ya bahut clingy ho jaate hain. Bachon mein homeopathic treatment bahut gentle aur safe hoti hai.',
    },
    {
      _key: 'faq11',
      question: 'PTSD mein sharab peena kyun dangerous hai?',
      answer: 'Bahut se log PTSD mein alcohol se "relax" karne ki koshish karte hain. Short term mein lagta hai kaam kar raha hai par alcohol actually PTSD ko worse karta hai – flashbacks zyada hote hain, depression badhta hai, neend kharab hoti hai, aur dependency ka risk bahut zyada hota hai. Ilaaj bhi slow ho jaata hai.',
    },
    {
      _key: 'faq12',
      question: 'PTSD ka recovery mein kitna samay lagta hai?',
      answer: 'Ye depend karta hai trauma ke type aur duration pe, treatment kitni jaldi shuru hui, aur patient ka support system kaisa hai. Acute PTSD mein 3-6 mahine mein significant recovery possible hai. Chronic ya Complex PTSD mein 1-3 saal tak treatment chal sakti hai. Lekin recovery hoti zaroor hai – time aur sahi treatment se.',
    },
    {
      _key: 'faq13',
      question: 'PTSD mein rishte kyon toot jaate hain aur kya family help kar sakti hai?',
      answer: 'PTSD mein patient irritable rehta hai, withdraw karta hai, intimacy se darta hai – isse partners aur family hurt aur confused feel karte hain. Family ki sabse badi help ye hai: judge mat karo, baar baar trauma ke baare mein mat poochho, patient ko safe feel karao. Yaad rakho – ye bimari hai, character flaw nahi.',
    },
    {
      _key: 'faq14',
      question: 'PTSD aur depression mein kya fark hai?',
      answer: 'Depression mein sadness, hopelessness, energy ki kami hoti hai. PTSD mein specifically ek traumatic event ke baad flashbacks, nightmares, trigger reactions, aur avoidance hoti hai. Dono saath bhi ho sakte hain – jo PTSD ke 60% patients mein hota hai. Homeopathy dono ko saath mein address karne ki koshish karta hai.',
    },
    {
      _key: 'faq15',
      question: 'Kya PTSD waali mahila pregnancy mein homeopathic ilaaj le sakti hai?',
      answer: 'Homeopathic medicines bahut diluted hoti hain aur generally safe mani jaati hain, par pregnancy mein koi bhi treatment apne doctor ki guidance se hi leni chahiye. Apne homeopath ko zaroor batayein ki aap pregnant hain – woh accordingly safe remedies choose karega.',
    },
    {
      _key: 'faq16',
      question: 'Kya sirf homeopathy se PTSD theek ho sakta hai ya koi aur cheez bhi chahiye?',
      answer: 'Homeopathy ek powerful part hai treatment ka, par akela kaafi nahi hota. Saath mein chahiye: ek trusted support system, daily routine, professional counseling ya therapy (specially trauma-focused), lifestyle changes (diet, exercise, sleep). Ye sab milke recovery ko zyada fast aur lasting banate hain.',
    },
    {
      _key: 'faq17',
      question: 'Nightmares aur flashbacks mein kya fark hai?',
      answer: 'Flashbacks din mein bhi hote hain – achanak lagta hai jaise haadsa abhi ho raha hai. Heart racing, sweating, sab kuch real lagta hai. Nightmares sirf neend mein aate hain. Dono PTSD ke core symptoms hain. Homeopathy dono ko address karta hai – alag alag type ke patients ke liye alag medicines work karti hain.',
    },
    {
      _key: 'faq18',
      question: 'PTSD patient ko akele kaise handle karein jab doctor nahi hai?',
      answer: 'Emergency mein: safe jagah jaao, kisi trusted insaan ko call karo, breathing exercise karo. iCall helpline: 9152987821. Vandrevala Foundation: 1860-2662-345 (24x7). Khud ko nuksaan pahunchane ka khayal aaye to SNEHI: 044-24640050. Akele mat raho aur doctor se jaldi appointment lo.',
    },
    {
      _key: 'faq19',
      question: 'PTSD mein yoga aur meditation actually kaam karte hain kya?',
      answer: 'Haan, research se confirmed hai. Specifically trauma-sensitive yoga, body-based breathing, aur grounding techniques PTSD mein nervous system ko calm karte hain. Regular practice se cortisol kam hota hai. Par dhyan rakho – kuch meditation styles trigger bhi kar sakte hain. Kisi trained instructor se ya doctor ki guidance mein shuru karo.',
    },
    {
      _key: 'faq20',
      question: 'PTSD mein job aur kaam pe kaise concentrate karein?',
      answer: 'PTSD mein brain literally threat mode mein hota hai – concentration naturally mushkil hota hai. Ye tips help karte hain: ek waqt mein sirf ek kaam, pomodoro technique (25 min kaam, 5 min break), quiet environment, colleagues ko zaroorat ke hisaab se batana. Treatment shuru ho jaaye to concentration apne aap sudharne lagti hai.',
    },
    {
      _key: 'faq21',
      question: 'Kya PTSD ek baar theek hone ke baad wapas aata hai?',
      answer: 'Kuch patients mein triggers se temporary relapse ho sakta hai – jaise anniversary of trauma, similar situation. Lekin iska matlab ye nahi ki treatment fail hui. Early warning signs pehchanna aur homeopath se regular follow-up is risk ko bahut kam karta hai. Relapse prevention bhi treatment ka hissa hoti hai.',
    },
    {
      _key: 'faq22',
      question: 'PTSD mein self-harm ya suicidal thoughts aayein to kya karein?',
      answer: 'Agar kisi ko khud ko nuksaan pahunchane ke khayal aa rahe hain – turant kisi trusted insaan ko batao. Vandrevala Foundation: 1860-2662-345 (24x7). iCall: 9152987821. Ye feelings PTSD ka hissa hain – aap kamzor nahi hain, aur help milna zaroori hai. Aapka homeopath aur psychiatrist dono milkar emergency mein zyada achhi help kar sakte hain.',
    },
  ],

  relatedDiseases: ['Anxiety', 'Depression', 'Insomnia', 'OCD', 'Chronic Fatigue Syndrome'],
}

async function seed() {
  try {
    const result = await client.createOrReplace(doc)
    console.log('✅ PTSD created/updated:', result._id)
    console.log('🌐 Live at: https://homeopedia.in/diseases/ptsd')
  } catch (err) {
    console.error('❌ Error:', err)
  }
}

seed()
