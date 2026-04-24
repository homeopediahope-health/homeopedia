import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
  useCdn: false,
})

const insomnia = {
  _id: 'disease-insomnia',
  _type: 'disease',

  title: 'Insomnia',
  hindiName: 'Neend Na Aana / Anidra',
  slug: { _type: 'slug', current: 'insomnia' },

  metaTitle: 'Insomnia Treatment in Hindi — Neend Na Aana, Karan aur Homeopathy',
  metaDescription: 'Insomnia (neend na aana) ke karan, types, natural sleep solutions aur homeopathic treatment — verified info, doctor-reviewed. India ke liye.',

  heroText: 'Insomnia ek aisi condition hai jisme ya to neend aati hi nahi, ya baar baar toot jaati hai, ya subah bahut jaldi aankh khul jaati hai — aur aap fresh feel nahi karte. India mein lagbhag 33% adults kisi na kisi form ki neend ki problem se guzarte hain. Ye sirf "tension" nahi hai — brain aur nervous system ka ek actual imbalance hai jo treatment se theek ho sakta hai. Agar 3 hafte se zyada neend theek nahi ho rahi, to ye serious attention maangti hai.',

  category: 'Mental',

  quickFacts: {
    whatItIs: 'Chronic insomnia = hafte mein 3+ raat, 3+ mahine tak neend ki problem',
    howCommon: 'India mein lagbhag 33% adults kisi na kisi neend problem se affected — NIMHANS study',
    treatmentDuration: 'Homeopathic treatment mein average 6-12 hafte mein significant improvement',
    successRate: 'CCRH study: sleep onset latency 48 min se ghata 22 min — placebo group mein 47 se sirf 41 par ruka (JECAM 2018)',
  },

  causes: [
    'Stress aur anxiety — office tension, relationship problems, financial pressure — brain "alert mode" mein rehta hai',
    'Poor sleep hygiene — late night screen time, irregular sleep schedule, heavy dinner, bright lights sone se pehle',
    'Mental health conditions — depression, anxiety disorder, PTSD — insomnia inke saath almost hamesha aata hai',
    'Medicines aur substances — certain blood pressure tablets, steroids, caffeine (chai/coffee), alcohol, nicotine',
    'Medical conditions — thyroid disorder, chronic pain, acidity/GERD, sleep apnea, restless leg syndrome',
    'Life changes — jet lag, shift work, menopause, pregnancy, retirement — circadian rhythm (body clock) bigad jaata hai',
  ],

  riskFactors: [
    'Mahilayein — hormonal changes (periods, pregnancy, menopause) neend zyada affect karti hain',
    '60+ age group — sleep architecture naturally change hoti hai umar ke saath',
    'High-stress jobs ya shift workers — body clock constantly disturbed rehti hai',
    'History of depression ya anxiety — in dono ka insomnia se direct link hai',
    'Chronic disease patients — diabetes, asthma, arthritis wale',
    'Zyada smartphone/screen use karne wale — especially raat ko — blue light melatonin suppress karta hai',
  ],

  complications: [
    'Daytime functioning severely affect hoti hai — driving accidents, work errors, concentration problems',
    'Mental health deteriorate hoti hai — untreated insomnia se depression aur anxiety ka risk 2-3 guna badhta hai',
    'Immune system weak hoti hai — frequent infections, slow healing',
    'Cardiovascular risk badhta hai — long-term sleep deprivation se blood pressure aur heart disease ka connection confirm hua hai',
    'Quality of life — relationships, social life, aur professional performance — sab pe seedha asar padta hai',
  ],

  symptoms: [
    {
      _key: 'sym1',
      category: 'Raat Ki Neend Ki Problem',
      items: [
        '30+ minute lag jaate hain bistar pe jaane ke baad neend aane mein',
        'Raat mein baar baar aankh khulna aur phir neend na aana',
        'Subah scheduled time se bahut pehle uthna — 3-4 baje',
        'Neend aaye to bhi "halki" rehna — bechain, unsatisfying sleep',
      ],
    },
    {
      _key: 'sym2',
      category: 'Din Mein Iska Asar',
      items: [
        'Poori raat sone ke baad bhi thaka hua, "fresh" feel na karna',
        'Din mein neend aana, "brain fog" — concentration nahi ho raha',
        'Irritability, mood swings, choti baat pe gussa',
        'Anxiety — "aaj bhi neend nahi aayegi" — ye darr hi neend nahi aane deta',
      ],
    },
    {
      _key: 'sym3',
      category: 'Body Pe Physical Signs',
      items: [
        'Headache — especially subah uthne par',
        'Aankhon mein jalan, bhaaripan',
        'Energy zero — din bhar lethargy, kuch karne ka mann nahi',
        'Digestive issues — insomnia gut health ko bhi affect karta hai',
      ],
    },
  ],

  types: [
    {
      _key: 'type1',
      name: 'Acute Insomnia (Short-Term)',
      typeSlug: 'acute-insomnia',
      percentage: 'Sabse common type — lagbhag har insaan ko kabhi na kabhi',
      description: 'Kuch din ya weeks ki neend problem — kisi stress, exam, travel, ya buri news ke baad.',
      fullDescription: 'Acute insomnia ek short-term condition hai jo kisi specific trigger ke baad hoti hai — exam pressure, job interview, family tension, ya buri news. Ye aksar kuch din se kuch hafte tak rehti hai aur cause khatam hone par akele bhi resolve ho sakti hai. Agar properly manage na ki jaaye to chronic ban sakti hai.',
      specificSymptoms: ['Neend aane mein der', 'Specific stress ke saath link', 'Few days to few weeks duration', 'Cause khatam hone par self-resolving'],
      treatmentApproach: 'Sleep hygiene improve karo, screen time band karo, 4-7-8 breathing try karo. Agar 3 hafte se zyada ho to treatment zaroori hai.',
    },
    {
      _key: 'type2',
      name: 'Chronic Insomnia (Long-Term)',
      typeSlug: 'chronic-insomnia',
      percentage: 'India mein 10-15% adults',
      description: 'Hafte mein 3 ya zyada raat, 3 mahine se zyada time tak neend problem rehna.',
      fullDescription: 'Chronic insomnia mein neend ki problem hafte mein 3 ya zyada raat hoti hai aur 3 mahine se zyada time tak chalti hai. Ye depression, anxiety, chronic pain, ya poor sleep habits ki wajah se hoti hai. Is mein proper treatment — homeopathy ya CBT-I — zaroori hai.',
      specificSymptoms: ['3+ mahine se neend problem', 'Hafte mein 3+ raat affected', 'Daytime functioning impact', 'Often linked to mental health'],
      treatmentApproach: 'Individualized homeopathy (Coffea, Nux Vomica, Ignatia aadi) + sleep hygiene + root cause treatment. 6-12 hafte ka consistent treatment.',
    },
    {
      _key: 'type3',
      name: 'Onset Insomnia (Neend Aane Mein Dikkat)',
      typeSlug: 'sleep-onset-insomnia',
      percentage: 'Young adults mein bahut common',
      description: 'Bistar pe jaane ke baad 30-45 minute tak neend na aana.',
      fullDescription: 'Sleep onset insomnia mein bistar pe jaane ke baad neend aane mein bahut time lagta hai — 30-45 minute ya zyada. Main triggers hain: racing mind, anxiety, excess screen time, aur irregular sleep schedule. Coffea Cruda aur Passiflora is type ke liye commonly effective hain.',
      specificSymptoms: ['30+ min neend aane mein', 'Racing thoughts bistar pe', 'Screen time se worse', 'Anxiety "kya aaj neend aayegi"'],
      treatmentApproach: 'Screen off 1 ghante pehle, fixed sleep time, 4-7-8 breathing. Homeopathy: Coffea Cruda ya Passiflora racing thoughts ke liye.',
    },
    {
      _key: 'type4',
      name: 'Maintenance Insomnia (Raat Ko Baar Baar Uthna)',
      typeSlug: 'sleep-maintenance-insomnia',
      percentage: '40+ age group mein common',
      description: 'Neend aati hai lekin baar baar tooti rehti hai — 2-3 baje uthna aur phir neend na aana.',
      fullDescription: 'Maintenance insomnia mein neend to aa jaati hai lekin raat ke beech mein baar baar toot jaati hai. 2-3 baje uthna aur phir ek ghante ya zyada tak neend na aana — ye iska classic pattern hai. 40+ age group, hormonal changes (menopause), aur depression mein common hai.',
      specificSymptoms: ['Raat ko 2-3 baje uthna', 'Phir neend na aana', 'Multiple awakenings', 'Light, non-restorative sleep'],
      treatmentApproach: 'Nux Vomica (3-4 AM waking pattern), Arsenicum Album (anxiety-based midnight waking). Blood sugar aur thyroid check karwao.',
    },
    {
      _key: 'type5',
      name: 'Early Morning Awakening',
      typeSlug: 'early-morning-awakening',
      percentage: 'Depression se strong link',
      description: 'Neend 2-3 ghante pehle toot jaati hai aur phir aati nahi.',
      fullDescription: 'Early morning awakening mein neend scheduled time se 2-3 ghante pehle khul jaati hai — jaise 4 baje sona ho aur 2 baje hi aankh khul jaaye. Phir neend nahi aati. Is type ka depression se bahut gehra connection hai. Agar is pattern ke saath mood consistently low ho to doctor se milna urgent hai.',
      specificSymptoms: ['2-3 ghante pehle uthna', 'Phir neend bilkul nahi', 'Depression ka strong sign', 'Hopelessness feeling in early morning'],
      treatmentApproach: 'Depression screen zaroori — Ignatia Amara ya Natrum Muriaticum emotional aspect ke liye. Sirf sleep medicine nahi, poora evaluation chahiye.',
    },
    {
      _key: 'type6',
      name: 'Comorbid Insomnia',
      typeSlug: 'comorbid-insomnia',
      percentage: 'Chronic disease patients mein common',
      description: 'Kisi aur bimari — asthma, arthritis, diabetes, anxiety — ke saath saath aane wali neend ki problem.',
      fullDescription: 'Comorbid insomnia kisi underlying condition ki wajah se hoti hai — chronic pain (arthritis), breathing issues (asthma), blood sugar fluctuations (diabetes), ya mental health conditions (anxiety, depression). Yahan underlying disease treat karna bhi zaroori hai — sirf insomnia treat karne se poori relief nahi milti.',
      specificSymptoms: ['Underlying disease ke saath', 'Pain ya discomfort se uthna', 'Multiple causes', 'Treating root condition important'],
      treatmentApproach: 'Underlying condition simultaneously treat karo. Homeopathy ka fayda ye hai ki constitutional remedy often dono — insomnia aur underlying condition — dono ko address karta hai.',
    },
    {
      _key: 'type7',
      name: 'Psychophysiological Insomnia',
      typeSlug: 'psychophysiological-insomnia',
      percentage: 'Chronic insomnia ka common subtype',
      description: 'Bed ko "jaagne ki jagah" maanna — jo anxiety create karta hai bistar dekhte hi. Habit-based insomnia.',
      fullDescription: 'Psychophysiological insomnia mein brain ne bed ko "jaagne ki jagah" se associate kar liya hota hai. Bistar dekhte hi anxiety shuru ho jaati hai — "kya aaj neend aayegi?" — aur yahi darr hi neend nahi aane deta. Jo log neend ke baare mein bahut zyada sochte rehte hain unme ye common hai. CBT-I (Cognitive Behavioural Therapy for Insomnia) is type mein especially effective hai.',
      specificSymptoms: ['Bed dekhke anxiety', 'Doosri jagah neend aa jaati hai', 'Overthinking about sleep', 'Long duration — often years'],
      treatmentApproach: 'Sleep restriction therapy + stimulus control (bed sirf sone ke liye). Homeopathy: Coffea ya Argentum Nitricum anticipatory anxiety ke liye.',
    },
  ],

  ccrhEvidence: {
    improvementRate: '65-70% patients mein meaningful improvement documented',
    avgTreatmentPeriod: '6-12 hafte regular treatment',
    citation: 'Journal of Evidence-Based Complementary & Alternative Medicine | 2018 | CCRH Multi-centre Study on Sleep Disorders',
    keyFindings: [
      'Sleep onset latency (neend aane ka time) 48 min se ghata 22 min — placebo group mein 47 se sirf 41 par ruka',
      'Raat ko uthne ki frequency treatment group mein significantly ghati',
      'Pittsburgh Sleep Quality Index (PSQI) score mein clinically meaningful improvement dekha gaya',
      'No significant adverse effects reported — safety profile excellent',
    ],
  },

  homeopathyBenefits: [
    'Non-habit-forming — sleeping pills ki tarah dependency nahi banati',
    'Root cause address karta hai — anxiety, grief, overthinking — jo neend nahi aane de raha, wo treat hota hai',
    'Daytime drowsiness nahi — allopathic sleeping pills jaise hangover effect nahi hota',
    'Individualized — chronic insomnia ke har case mein alag approach',
    'Safe for elderly, pregnant women, aur children — jab qualified doctor ke under liya jaaye',
  ],

  homeopathyLimitations: [
    'Sleep apnea mein homeopathy adequate nahi — CPAP machine ya ENT evaluation zaroori hai',
    'Severe depression-linked insomnia mein psychiatric evaluation pehle zaroori hai — homeopathy supporting role mein kaam karta hai',
  ],

  medicines: [
    {
      _key: 'med1',
      name: 'Coffea Cruda',
      potency: '',
      keyIndications: [
        'Dimag raat ko race karta hai — racing thoughts neend nahi lene dete',
        'Achhi khabar ya excitement ke baad bhi neend nahi aati',
        'Coffee bean se banta hai — "like cures like" — ultra-diluted form neend dilata hai',
      ],
      bestFor: 'Racing thoughts se insomnia — overactive mind jo sone nahi deta',
    },
    {
      _key: 'med2',
      name: 'Nux Vomica',
      potency: '',
      keyIndications: [
        'Bahut busy, workaholic — raat ko sochte rehte hain kal kya karna hai',
        '3-4 baje uthna aur phir subah alarm se pehle bhaari neend',
        'Overworked, stressed, type-A personality',
      ],
      bestFor: 'Workaholic stressed patients — 3-4 AM waking pattern, digestive issues ke saath insomnia',
    },
    {
      _key: 'med3',
      name: 'Ignatia Amara',
      potency: '',
      keyIndications: [
        'Emotional shock, breakup, bereavement ke baad neend kharaab',
        'Suppressed grief ke baad insomnia',
        'Nervous system jo "locked" ho jaata hai emotional trauma ke baad',
      ],
      bestFor: 'Grief ya emotional shock ke baad insomnia — loss ke baad neend na aana',
    },
    {
      _key: 'med4',
      name: 'Passiflora Incarnata',
      potency: '',
      keyIndications: [
        'Neend aati hi nahi — restless rehna, baar baar karavat badalna',
        'Koi specific emotional cause bhi nahi',
        'Natural sedative properties — nervine tonic',
      ],
      bestFor: 'General restlessness aur sleeplessness — bina specific emotional cause ke',
    },
    {
      _key: 'med5',
      name: 'Arsenicum Album',
      potency: '',
      keyIndications: [
        'Anxiety-based insomnia — baar baar darr rehta hai ki kuch bura hoga',
        'Midnight ke baad uthna aur bechain rehna, sab cheez ki chinta',
        'Perfectionist ya health anxiety wale log',
      ],
      bestFor: 'Anxiety-driven insomnia — midnight restlessness, chinta aur darr ke saath',
    },
  ],

  dietInclude: [
    {
      _key: 'di1',
      category: 'Sleep-Boosting Foods',
      emoji: '🌙',
      items: [
        'Kela (Banana) — magnesium aur tryptophan hota hai jo melatonin (neend ka hormone) banata hai',
        'Badam (Almonds) — magnesium se bharpoor, muscles relax karta hai jisse neend achhi aati hai',
        'Akhrot (Walnuts) — natural melatonin contain karta hai — raat ko 4-5 akhrot khaana helpful hai',
      ],
    },
    {
      _key: 'di2',
      category: 'Soothing Drinks',
      emoji: '🍵',
      items: [
        'Chamomile tea — light natural sedative effect, sone se 30 min pehle',
        'Warm turmeric milk (haldi wala doodh) — serotonin aur melatonin dono ko support karta hai',
        'Tart cherry juice (khatta cherry) — melatonin ka ek rare natural source',
      ],
    },
    {
      _key: 'di3',
      category: 'Light Dinner Foods',
      emoji: '🍚',
      items: [
        'Brown rice ya daliya (oats) — tryptophan brain tak pahunchane mein help karta hai',
        'Moong dal khichdi — light, digestible — pet bhaari nahi hoga to neend achhi hogi',
        'Sabzi-roti light dinner — simple, early (7-8 baje) dinner sleep quality dramatically improve karta hai',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'Stimulants Bilkul Band',
      emoji: '☕',
      items: [
        'Chai aur coffee shaam 4 baje ke baad — caffeine 6-8 ghante tak body mein rehti hai aur neend uda deti hai',
        'Cola drinks aur energy drinks — hidden caffeine + sugar — double damage',
        'Dark chocolate (sone se pehle) — thodi caffeine hoti hai jo sensitive logon ko affect karti hai',
      ],
    },
    {
      _key: 'da2',
      category: 'Heavy & Fried Foods',
      emoji: '🍟',
      items: [
        'Fried snacks, pakode, samosa raat ko — digestion slow hoti hai aur body neend ke bajaye khana pachane mein busy',
        'Heavy non-veg dinner — mutton, red meat — digest hone mein 4-5 ghante lagte hain',
        'Spicy food raat ko — acidity aur discomfort se neend toot sakti hai',
      ],
    },
    {
      _key: 'da3',
      category: 'Hidden Culprits',
      emoji: '⚠️',
      items: [
        'Alcohol — bahut log sochte hain neend aati hai, asliyat mein sleep quality kharab karta hai — REM sleep disrupt hoti hai',
        'Sugar — blood sugar spike karta hai jo raat mein 2-3 baje uthne ki wajah ban sakta hai',
        'Excess water sone se pehle — baar baar bathroom jaane se neend toot jaayegi',
      ],
    },
  ],

  dietTip: 'Sone se 30 min pehle ek cup chamomile tea ya warm haldi doodh — ye combination cortisol kam karta hai aur melatonin badhata hai. 2 hafte consistently try karo — difference clearly feel hoga.',
  dietNote: 'Chai/coffee shaam 4 baje ke baad bilkul band karo — caffeine 6-8 ghante active rehti hai. Ye ek change akela bahut logon ki insomnia 30-40% improve kar deta hai.',

  dos: [
    'Roz ek hi time pe sona aur uthna — weekends pe bhi — body clock set hoti hai, neend natural aane lagti hai',
    'Sone se 1 ghante pehle screen band karo — phone, TV, laptop — blue light melatonin destroy karta hai',
    'Bedroom sirf sone ke liye — kaam mat karo, khana mat khao, TV mat dekho room mein — brain "bed = neend" association seekhta hai',
    'Roz 20-30 min walk ya light exercise — lekin sone se 3-4 ghante pehle — body temperature regulate hoti hai',
    '4-7-8 breathing try karo sote waqt — naak se 4 sec breathe in, 7 sec hold, 8 sec breathe out — nervous system instantly calm hoti hai',
  ],

  donts: [
    'Dopahar ko 3 baje ke baad soona mat — raat ki neend directly affect hoti hai',
    'Bistar pe jaake phone mat dekho — "sirf 5 minute" ka chakkar 1 ghante mein badal jaata hai',
    'Sleeping pills khud se mat shuru karo bina doctor ke — dependency bahut jaldi lagti hai aur band karna mushkil',
    '"Aaj bhi neend nahi aayegi" wali soch mat aane do — ye anxiety hi insomnia ka sabse bada fuel hai',
    'Raat ko ghadi mat dekho baar baar — "2 baj gaye, ab sirf 4 ghante bache" — ye thought hi neend udaa deta hai',
  ],

  faqs: [
    { _key: 'faq1', question: 'Insomnia kya hota hai aur normal neend na aana kab serious ho jaata hai?', answer: 'Insomnia ek sleep disorder hai jisme aapko neend aane mein mushkil hoti hai, raat ko baar baar uthna padta hai, ya subah bahut jaldi aankh khul jaati hai — aur aap fresh feel nahi karte. Agar ye 3 din tak ho tab "normal stress" hai. Lekin agar hafte mein 3 ya zyada raat aisa ho aur 3 hafte se zyada chale — to ye chronic insomnia hai jisme treatment zaroori hai. Din mein kaam karne mein takleef, mood swings, ya concentration ki problem ho — to bilkul doctor se milein.' },
    { _key: 'faq2', question: 'Insomnia ke kya karan hote hain?', answer: 'Insomnia ke sabse common karan hain — stress aur anxiety (office, paise, relationship), poor sleep habits (late night phone, irregular timing), depression, caffeine ka zyada use (chai/coffee shaam ko bhi), aur thyroid ya chronic pain jaise medical conditions. Bahut baar multiple causes saath hoti hain. Ek homoeopath ya doctor aapki poori history dekhke root cause identify kar sakta hai — tabhi sahi treatment milegi.' },
    { _key: 'faq3', question: 'Insomnia ka gharelu ilaaj kya hai jo sach mein kaam kare?', answer: 'Kuch evidence-based home remedies jo kaam karti hain: Haldi wala warm doodh sone se 30 min pehle, chamomile tea, 4-7-8 breathing technique (naak se 4 sec in, 7 hold, 8 out), sone se 1 ghante pehle screen band karna, fixed sleep-wake time roz — weekends pe bhi. Ye sab acute insomnia mein achhe kaam karte hain. Chronic insomnia mein proper treatment ke saath ye lifestyle changes mile to results bahut better aate hain.' },
    { _key: 'faq4', question: 'Insomnia kitne time tak rehta hai aur kya khatam ho sakta hai?', answer: 'Haan — insomnia bilkul theek ho sakti hai. Acute insomnia cause khatam hone par akele bhi resolve ho sakti hai. Chronic insomnia mein proper treatment — homeopathy ya CBT-I — aur lifestyle changes se 6-12 hafte mein significant improvement dekhne ko milti hai. Jo log treatment seriously lete hain unke liye neend normal hona perfectly achievable hai — sirf patience chahiye.' },
    { _key: 'faq5', question: 'Kya homeopathy insomnia mein kaam karta hai?', answer: 'Haan — homeopathy insomnia mein kaam karta hai, khaas tur par jab treatment individualized ho. Studies mein sleep onset latency aur raat ko uthne ki frequency dono mein meaningful reduction documented hai. Sabse badi baat — homeopathy neend na aane ki wajah treat karta hai: anxiety hai to alag medicine, grief hai to alag, overthinking hai to alag. Sleeping pills ki tarah sirf "knock out" nahi karta — root cause address hoti hai. Dependency ka koi risk nahi — ye sabse bada fayda hai.' },
    { _key: 'faq6', question: 'Insomnia ki best homeopathic medicine kaun si hai?', answer: 'Ye aapki specific neend ki problem par depend karta hai: Coffea Cruda — jab racing thoughts neend nahi lene dete. Nux Vomica — workaholics jinhe 3-4 baje uthna padta hai. Ignatia Amara — grief ya emotional shock ke baad insomnia. Passiflora — general restlessness, neend bilkul nahi aati. Arsenicum Album — anxiety aur midnight restlessness ke liye. Potency aur dose sirf ek qualified homoeopath determine kar sakta hai aapki poori case history dekhke.' },
    { _key: 'faq7', question: 'Kya insomnia depression ki nishani ho sakti hai?', answer: 'Haan — aur ye connection bahut important hai. Insomnia aur depression dono ek doosre ko trigger karte hain. Early morning awakening (subah 3-4 baje uthna aur phir neend na aana) depression ka ek characteristic sign hai. Agar insomnia ke saath mood consistently low ho, kisi cheez mein interest na raha ho, ya hopelessness feel ho — to doctor se milna urgent hai. Sirf neend ki medicine nahi, proper evaluation zaroori hai is case mein.' },
    { _key: 'faq8', question: 'Insomnia mein kya nahi khana chahiye?', answer: 'Kuch cheezein insomnia seedha trigger ya worsen karti hain: Chai/coffee shaam 4 baje ke baad — caffeine 6-8 ghante active rehti hai. Alcohol — neend aati lagti hai lekin quality kharab hoti hai. Heavy, fried, ya spicy dinner raat ko. Sugar — blood sugar spike midnight wakeup cause karta hai. Cola aur energy drinks. Early, light dinner (7-8 baje) khana aur sone se 2 ghante pehle kuch bhi nahi — ye ek simple change hai jo bahut logon ki neend improve kar deta hai.' },
    { _key: 'faq9', question: 'Insomnia mein kya khana chahiye neend ke liye?', answer: 'Kuch foods sleep naturally improve karte hain: Kela — tryptophan aur magnesium, melatonin banata hai. Badam, akhrot — magnesium aur natural melatonin. Chamomile tea ya warm haldi doodh — sone se 30 min pehle. Brown rice, daliya, moong khichdi — light dinner jo digestion load nahi karta. Tart cherry juice — natural melatonin source. Diet change alone se mild insomnia mein significant improvement aata hai 2-3 hafte mein.' },
    { _key: 'faq10', question: 'Insomnia ki wajah se pregnancy mein kya problem ho sakti hai?', answer: 'Pregnancy mein insomnia bahut common hai — khaas tur par pehle aur teesre trimester mein. Causes hain: hormonal changes, frequent urination, back pain, aur anxiety about delivery. Agar manage na ho to gestational hypertension ka risk aur postpartum depression ka chance badhta hai. Pregnant women ke liye homeopathy ek safe option hai — no chemical sedatives, no side effects for baby. Lekin koi bhi treatment pregnancy mein doctor ki salaah se hi leni chahiye.' },
    { _key: 'faq11', question: 'Bachon mein insomnia — kaise pehchanen aur kya karein?', answer: 'Bachon mein insomnia ke signs: raat ko bahut der se neend aana, school ke liye uthna mushkil hona, din mein hyperactive ya bahut irritable rehna, baar baar nightmare aana. Causes: screen time, exam stress, school anxiety, ya koi emotional problem. Bachon mein sleeping pills bilkul nahi deni chahiye. Sleep hygiene — fixed bedtime, screen-free bedroom, bedtime routine — pehle try karein. Agar 2-3 hafte mein theek na ho to paediatrician se milein. Homeopathy bachon mein particularly safe aur gentle option hai.' },
    { _key: 'faq12', question: 'Insomnia mein koi test karana chahiye?', answer: 'Zyaadatar cases mein koi test zaroori nahi hota — doctor aapki history aur sleep pattern se diagnosis kar leta hai. Lekin kuch cases mein test zaroor karein: Thyroid test — thyroid disorder insomnia ka hidden cause ho sakta hai. Blood sugar — diabetes insomnia trigger karti hai. Polysomnography (Sleep Study) — agar sleep apnea suspect ho. Ferritin (iron) levels — restless leg syndrome mein. Routine checkup bhi helpful hota hai yadi insomnia 3 mahine se zyada ho.' },
    { _key: 'faq13', question: 'Sleeping pills leni chahiye ya nahi insomnia mein?', answer: 'Sleeping pills short-term mein kaam karti hain lekin inke problems hain: dependency (habit lagti hai), daytime drowsiness (hangover effect), aur band karne par insomnia aur bhi bura ho jaata hai (rebound insomnia). Long-term solutions ke liye — CBT-I, homeopathy (non-habit-forming), aur sleep hygiene — ye milake better results dete hain. Sleeping pills ko sirf short-term, doctor-supervised use karein — khud se shuru mat karein.' },
    { _key: 'faq14', question: 'Insomnia aur neend poori na hone mein kya fark hai?', answer: 'Neend poori na hona (sleep deprivation) tab hota hai jab aapko time hi nahi milta sone ka — late kaam, night shifts, baby ki wajah se. Insomnia tab hota hai jab time hota hai, bistar bhi hai, lekin neend aati nahi ya toot jaati hai. Sleep deprivation mein mauka milne par neend aa jaati hai — insomnia mein nahi. Dono ke solutions alag hain — isiliye sahi pehchaan zaroori hai.' },
    { _key: 'faq15', question: 'Insomnia aur anxiety ka kya connection hai?', answer: 'Ye dono circular relationship mein hain — anxiety insomnia cause karti hai, aur insomnia anxiety badhata hai. "Kya aaj neend aayegi?" — ye sawaal hi anxiety trigger karta hai jo neend nahi aane deta. Iska naam hai "psychophysiological insomnia." Treatment mein dono ko address karna zaroori hai — sirf neend ke liye kuch lo aur anxiety ignore karo — ye kaam nahi karta. Homeopathy is dono ko ek saath address karta hai jo iska ek bada advantage hai.' },
    { _key: 'faq16', question: 'Insomnia mein exercise karni chahiye ya nahi?', answer: 'Haan — roz 20-30 min moderate exercise insomnia ke liye proven effective hai. Studies mein sleep onset latency 55% tak reduce hui hai regular exercisers mein. Lekin timing matter karta hai — sone se 3-4 ghante pehle exercise karein. Raat 9-10 baje intense workout — body temperature aur adrenaline badhata hai jo neend nahi aane deta. Subah ki walk ya shaam ko yoga — insomnia ke liye best combination.' },
    { _key: 'faq17', question: 'Insomnia ka yoga aur pranayam se ilaaj ho sakta hai?', answer: 'Yoga aur pranayam insomnia management mein bahut helpful hain: Shavasana — full body relaxation, roz 10 min sone se pehle. Yoga Nidra — scientific "body scan" technique, neend aane mein dramatically help karta hai. Anulom Vilom — 10 min subah aur raat — nervous system balance karta hai. 4-7-8 breathing — instant anxiety relief sote waqt. Ye alone chronic insomnia fix nahi karenge lekin treatment ke saath results bahut faster aate hain.' },
    { _key: 'faq18', question: 'Insomnia aur thyroid ka kya connection hai?', answer: 'Hyperthyroidism (thyroid zyada active) mein neend nahi aati — racing heart, anxiety, aur nervous energy insomnia directly cause karte hain. Hypothyroidism mein bhi sleep architecture disturb hoti hai. Agar insomnia ke saath weight change, thakaan, hair fall, ya heart racing ho — to thyroid test zaroor karwayein. Thyroid treat hone ke baad akser insomnia khud improve ho jaata hai.' },
    { _key: 'faq19', question: 'Kya insomnia se weight badhta hai?', answer: 'Haan — ye connection real hai. Neend poori na hone par: Ghrelin (bhookh ka hormone) badhta hai, Leptin (pet bhara hone ka signal) kam hota hai — result: din bhar zyada khaane ki craving hoti hai, khaas tur par sugary aur fatty foods. Plus, thakaan ki wajah se exercise nahi hoti. Studies mein 5-6 ghante se kam sone wale logon mein obesity ka risk significantly higher paya gaya hai.' },
    { _key: 'faq20', question: 'Raat ko 3-4 baje uthna — kya ye insomnia hai?', answer: 'Haan — maintenance insomnia ka ye ek classic pattern hai. Raat ko 3-4 baje uthna aur phir neend na aana — ye especially depression se strongly linked hai. Lekin other causes bhi hain: blood sugar drop, stress hormones (cortisol) ka peak time (3-4 AM hota hai), ya prostate problems mein frequent urination. Agar ye pattern consistently ho raha hai — 3 hafte se zyada — to doctor se milna zaroori hai.' },
    { _key: 'faq21', question: 'Insomnia permanent theek ho sakti hai ya baar baar aayegi?', answer: 'Permanent control bilkul possible hai. Jo log root cause address karte hain — anxiety, poor sleep habits, underlying health condition — aur treatment consistently follow karte hain, unmein attacks itne rare ho jaate hain ki life practically normal ho jaati hai. Homeopathy ka poora course complete karo, sirf theek hote hi band mat karo — pattern todna zaroori hai.' },
    { _key: 'faq22', question: 'Insomnia aur sleep apnea mein kya fark hai?', answer: 'Ye do alag conditions hain. Insomnia mein neend aati nahi ya toot jaati hai — lekin saas theek se chalti hai. Sleep apnea mein neend ke dauraan saas baar baar ruk jaati hai — jiske karan body khud jaag jaati hai. Sleep apnea ke signs: bahut zyada kharraate, subah uthne par sar dard, partner ne report kiya ki saas ruk ruki. Sleep apnea ka treatment alag hai — CPAP machine ya ENT evaluation. Dono ke baare mein doubt ho to sleep study karwaayein.' },
  ],

  selfCheck: 'Hafte mein 3+ raat neend nahi aati ya toot jaati hai, aur 3 hafte se zyada ho raha hai — to ye chronic insomnia hai. Doctor ya homoeopath se milein.',

  sources: [
    { _key: 'src1', name: 'American Academy of Sleep Medicine — Clinical Practice Guidelines for Chronic Insomnia', url: 'https://aasm.org', year: '2017' },
    { _key: 'src2', name: 'CCRH — Research on Sleep Disorders', url: 'https://ccrhindia.nic.in', year: '2018' },
    { _key: 'src3', name: 'Lancet Global Burden of Disease Study — Sleep Disorders in South Asia', url: '', year: '2019' },
    { _key: 'src4', name: 'National Sleep Foundation — Sleep Guidelines & Research', url: 'https://www.sleepfoundation.org', year: '2022' },
    { _key: 'src5', name: 'Ministry of AYUSH — Homoeopathy Evidence Review', url: 'https://www.ayush.gov.in', year: '2021' },
  ],

  publishedAt: new Date().toISOString(),
}

async function main() {
  const result = await client.createOrReplace(insomnia)
  console.log('Document created:', result._id)
}

main().catch(console.error)
