import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
  useCdn: false,
})

const eczema = {
  _id: 'disease-eczema',
  _type: 'disease',

  title: 'Eczema',
  hindiName: 'Khujli ki Bimari / Chamdi ki Sujan / Daad-Khaj',
  slug: { _type: 'slug', current: 'eczema' },

  metaTitle: 'Eczema Treatment in Hindi — Karan, Ilaaj aur Homeopathy',
  metaDescription: 'Eczema ke karan, skin pe sujan, khujli ka ilaaj, diet aur homeopathic treatment — simple Hinglish mein. Verified info, doctor-reviewed.',

  heroText: 'Eczema ek chronic skin condition hai jisme skin par red, dry, aur itchy patches ho jaate hain jo baar baar wapas aate hain. Ye koi infection nahi hai — ye immune system ka overreaction hai jisme skin apni natural barrier thik se nahi bana paati. India mein, khaaskar humid aur dusty areas mein, ye bimari bahut common hai — bacchon se lekar adults tak, koi bhi affected ho sakta hai. Sahi ilaaj aur lifestyle se isko effectively control kiya ja sakta hai.',

  category: 'Skin',

  quickFacts: {
    whatItIs: 'Eczema ek chronic immune condition hai — baar baar aata hai, contagious bilkul nahi',
    howCommon: 'India mein roughly 2-3% adults aur 10-15% bacche affected hain — humid aur polluted cities mein rate zyada',
    treatmentDuration: 'Mild-moderate: 3-6 mahine | Severe/chronic: 6-12+ mahine | Consistent treatment se quality of life significantly improve hoti hai',
    successRate: 'CCRH study: SCORAD index treatment group mein 50% improvement vs placebo mein sirf 14% (IJRH 2018)',
  },

  causes: [
    'Immune system dysregulation — body baahri cheezein (dust, pollen, soap) ko threat samajhkar overreact karti hai',
    'Genetic factor — agar parents ko eczema, asthma, ya allergic rhinitis hai to risk zyada',
    'Skin barrier defect — filaggrin protein ki kami se skin moisture hold nahi kar paati',
    'Environmental triggers — pollution, synthetic fabrics, harsh soaps, weather changes',
    'Stress aur anxiety — cortisol badhne se flare-ups trigger hote hain',
    'Gut-skin connection — digestive imbalance aur food sensitivities eczema ko worsen karte hain',
  ],

  riskFactors: [
    'Jinhe family mein kisi ko eczema, asthma, ya hay fever hai',
    'Chhote bacche — especially 0-5 saal ke (India mein 10-15% bacche affected)',
    'Jinki skin naturally dry rehti hai saal bhar',
    'Jo log harsh chemicals ya detergents se regularly kaam karte hain (nurses, cleaners, mechanics)',
    'Jo log bahut zyada AC environments mein rehte hain (dry indoor air)',
    'Jinhe food allergies hain — dairy, eggs, gluten triggers ho sakte hain',
  ],

  complications: [
    'Neurodermatitis — constant scratching se skin thick aur leathery ho jaati hai (lichenification)',
    'Secondary bacterial infection — khujlane se S. aureus bacteria skin mein ghus jaata hai, festering wounds bante hain',
    'Sleep disturbance aur mental health impact — chronic itch se anxiety aur depression ka risk badhta hai',
    'Eczema herpeticum — rare lekin serious viral infection jo untreated eczema pe spread hoti hai — turant doctor zaroor',
  ],

  symptoms: [
    {
      _key: 'sym1',
      category: 'Skin Pe Dikhaai Dene Wale Signs',
      items: [
        'Dry, scaly patches — usually cheeks, hands, feet, inner elbows, back of knees pe',
        'Redness aur inflammation — skin hot feel hoti hai touch karne pe',
        'Crust ya oozing — jab flare severe ho, patches se clear ya yellow fluid nikal sakta hai',
      ],
    },
    {
      _key: 'sym2',
      category: 'Feel Karne Wale Symptoms',
      items: [
        'Intense itching (khaaskar raat ko) — ye eczema ka sabse distressing symptom hai',
        'Burning sensation — especially naha ne ke baad ya sweating ke baad',
        'Skin ka tightly khichna — jaise skin choti pad rahi ho',
      ],
    },
    {
      _key: 'sym3',
      category: 'Bacchon Mein Khaas Signs',
      items: [
        'Cheeks, forehead, aur scalp pe red, weeping patches',
        'Irritability aur neend na aana — itching ki wajah se bachcha rota rehta hai',
        'Rash jo diaper area ke siwa poore body pe ho sakta hai',
      ],
    },
  ],

  ccrhEvidence: {
    improvementRate: 'SCORAD index 38 se ghatakar 19 — roughly 50% improvement vs placebo mein sirf 14%',
    avgTreatmentPeriod: '3 se 6 mahine (mild-to-moderate cases)',
    citation: 'Indian Journal of Research in Homoeopathy | 2018 | CCRH Multi-centre study on Atopic Dermatitis',
    keyFindings: [
      'SCORAD (Scoring Atopic Dermatitis) index mein treatment group ka significant improvement',
      'Itching VAS score treatment group mein placebo ke comparison mein zyada kama',
      'Quality of life (DLQI score) mein bhi improvement — sirf skin nahi, zindagi better hui',
    ],
  },

  homeopathyBenefits: [
    'Individualized treatment — aapka eczema pattern, triggers, aur constitution dekh kar medicine milti hai',
    'Steroid-free relief — no skin thinning, no dependency jo topical steroids ke saath hoti hai',
    'Recurrence kam karta hai — sirf flare treat nahi karta, future attacks ki frequency bhi ghatata hai',
    'Child-safe — bacchon ke liye completely safe, no harsh side effects',
    'Saath mein asthma/hay fever bhi address hota hai — jo often eczema ke saath aate hain (atopic triad)',
  ],

  medicines: [
    {
      _key: 'med1',
      name: 'Graphites',
      potency: '',
      keyIndications: [
        'Skin pe thick, sticky, honey-like discharge — khaskar kaan ke peeche, fingers ke beech ya genitals pe',
        'Skin crack karke ooze karti hai',
        'Cold applications se thodi rahat milti hai — classic weeping eczema',
      ],
      bestFor: 'Thode mote patients jinhein skin pe honey-like oozing ho aur cold se better feel ho',
    },
    {
      _key: 'med2',
      name: 'Sulphur',
      potency: '',
      keyIndications: [
        'Bahut intense burning itching — khaskar raat mein ya naha ne ke baad',
        'Skin generally dirty-looking aur rough lagti hai',
        'Body ke elimination channels stimulate karta hai — eczema andar se bahar nikalta hai',
      ],
      bestFor: 'Intense burning itching wale chronic cases jisme skin rough aur unhealthy dikhti ho',
    },
    {
      _key: 'med3',
      name: 'Mezereum',
      potency: '',
      keyIndications: [
        'Scalp ya face pe thick crusts jiske neeche pus ho',
        'Cold air se itching badhti ho',
        'Conventional treatment ke baad eczema ek jagah se doosri jagah shift ho jaata ho',
      ],
      bestFor: 'Thick crusty eczema scalp ya face pe — jo treatment ke baad shift karta ho',
    },
    {
      _key: 'med4',
      name: 'Arsenicum Album',
      potency: '',
      keyIndications: [
        'Skin bahut dry aur scaly, burning sensation jo warm applications se better feel ho',
        'Anxious ya restless nature ke patients',
        'Allergy-driven eczema — especially jab asthma ya hay fever bhi saath ho',
      ],
      bestFor: 'Anxious patients jinhein dry burning eczema ho aur saath mein asthma/hay fever bhi',
    },
    {
      _key: 'med5',
      name: 'Natrum Muriaticum',
      potency: '',
      keyIndications: [
        'Grief ya emotional stress ke baad eczema worse hota ho',
        'Hairline pe ya body ke edges pe dry, scaly rash',
        'Skin-emotion connection — suppressed emotion ka clearly pattern',
      ],
      bestFor: 'Emotional stress ya grief ke baad worse hone wala eczema — hairline aur body edges pe',
    },
  ],

  dietInclude: [
    {
      _key: 'di1',
      category: 'Anti-Inflammatory Foods',
      emoji: '🥦',
      items: [
        'Haldi (turmeric) — curcumin skin inflammation ko andar se kam karta hai',
        'Amla (Indian gooseberry) — Vitamin C se bharpur, immune system balance karta hai',
        'Palak, methi, sarson — iron aur folate se skin repair faster hoti hai',
      ],
    },
    {
      _key: 'di2',
      category: 'Gut-Healing Foods',
      emoji: '🥣',
      items: [
        'Dahi (plain, sugar-free) — probiotics gut-skin axis ko heal karte hain',
        'Moong dal — easy to digest, skin ke liye zinc provide karta hai',
        'Ghee (desi) — skin barrier ko strengthen karta hai andar se',
      ],
    },
    {
      _key: 'di3',
      category: 'Hydrating Skin Foods',
      emoji: '💧',
      items: [
        'Nariyal paani — electrolytes aur skin hydration dono',
        'Kheera (cucumber) — high water content, skin ko cool aur hydrated rakhta hai',
        'Omega-3 rich foods — alsi ke beej (flaxseeds), akhrot — skin inflammation reduce karte hain',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'Common Trigger Foods',
      emoji: '🚫',
      items: [
        'Cow\'s milk aur dairy products — casein protein eczema flares ka top trigger hai India mein',
        'Eggs — especially egg whites, jinme high allergenic protein hoti hai',
        'Maida aur processed bakery items — gut inflammation badhata hai jo skin pe dikhta hai',
      ],
    },
    {
      _key: 'da2',
      category: 'Inflammatory Foods',
      emoji: '🌶️',
      items: [
        'Bahut zyada teekha khana — body heat badhti hai, itching worse hoti hai',
        'Refined sugar (mithai, cold drinks) — inflammation badhti hai, skin barrier weak hoti hai',
        'Alcohol — skin dehydrate karta hai aur immune response aggravate karta hai',
      ],
    },
    {
      _key: 'da3',
      category: 'Hidden Triggers',
      emoji: '⚠️',
      items: [
        'Packaged snacks — preservatives aur artificial colors eczema trigger karte hain',
        'Soya products (kuch patients mein) — soy allergy eczema se linked ho sakti hai',
        'Fast food aur trans fats — skin oil balance bigadhata hai aur chronic inflammation karta hai',
      ],
    },
  ],

  dietTip: '2-3 hafte ek suspicious food (especially dairy) band karke dekhen ki skin better hoti hai ya nahi — trigger food identify karna eczema management ka sabse powerful tool hai.',
  dietNote: 'Har patient ka trigger alag hota hai — cow\'s milk India mein #1 trigger hai, lekin eggs, gluten ya soya bhi ho sakta hai. Elimination diary rakhein.',

  dos: [
    'Har roz moisturizer lagayen — naha ne ke 3 minute ke andar; yahi skin barrier maintain karne ka sabse proven tarika hai',
    'Cotton ke dhile kapde pehnen — synthetic fabric pe skin rub karti hai aur itching trigger hoti hai',
    'Room mein cool aur humid environment rakhein — AC se skin dry hoti hai, humidifier use karein',
    'Trigger diary rakhein — note karein kab, kahan, aur kya khaane ke baad flare hota hai; pattern milne pe management easy ho jaata hai',
    'Nails chhote rakhein — especially bacchon ke — scratch karne se infection ka darwaza khulta hai',
  ],

  donts: [
    'Khujlana bilkul mat — skin damage hoti hai, infection enter karta hai, aur itch-scratch cycle aur bad hoti hai',
    'Hot shower mat lein — garam paani skin ka natural oil strip karta hai; lukewarm paani use karein',
    'Harsh soaps ya detergents use mat karein — fragrance-free, pH-balanced cleansers hi use karein',
    'Stress ko ignore mat karein — eczema aur stress ka direct link hai; meditation ya deep breathing daily karein',
    'Bina doctor ki salaah ke strong steroid cream zyada time tak mat lagayen — skin thinning aur dependency ka risk hai',
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Eczema aur normal dry skin mein kya fark hai — kaise pehchanein?',
      answer: 'Normal dry skin sirf moisturizer lagane se theek ho jaati hai aur itching mild hoti hai. Eczema mein skin sirf dry nahi hoti — red, inflamed, cracked patches hote hain jo baar baar wapas aate hain, aur itching itni intense hoti hai ki neel pad jaata hai ya neend tak nahi aati. Agar aapki skin pe ek specific jagah baar baar rash aata hai, intense khujli hoti hai, ya patches se fluid nikalta hai — ye eczema ke signs hain, sirf dryness nahi. Ek dermatologist ya homoeopath se ek baar confirm karwa lein.',
    },
    {
      _key: 'faq2',
      question: 'Eczema kab theek hota hai — kitne time mein ilaaj kaam karta hai?',
      answer: 'Bacchon mein eczema often 60-70% cases mein puberty tak significantly improve ya practically resolve ho jaata hai. Adults mein permanent control possible hai — aur ye zyada realistic goal hai sirf "cure" se. Homeopathic treatment mein generally 3-6 mahine mein meaningful improvement dikhaai deta hai — itching kam hoti hai, flares kam frequent hote hain, aur skin ki overall condition better hoti hai.',
    },
    {
      _key: 'faq3',
      question: 'Kya homeopathy eczema mein permanent ilaaj kar sakti hai?',
      answer: 'Homeopathy eczema ko root cause pe address karta hai — sirf skin nahi, woh immune sensitivity jo baar baar flare karti hai. CCRH-affiliated studies mein eczema patients ke SCORAD (severity) score mein 50% tak improvement dekhi gayi — placebo group ke comparison mein. Jo patients triggers seriously control karte hain aur treatment consistently lete hain, unme flares itne rare ho jaate hain ki life practically normal ho jaati hai.',
    },
    {
      _key: 'faq4',
      question: 'Bacchon ke eczema mein kya karein — kya homeopathy safe hai chhote bacchon ke liye?',
      answer: 'Haan — homeopathy chhote bacchon ke liye bilkul safe hai, koi side effects nahi hote. India mein 0-5 saal ke bacchon mein eczema bahut common hai — khaskar cheeks, scalp, aur diaper area ke aas paas. Bacchon ke liye treatment mein trigger identification sabse zaroori hai — common triggers hain cow\'s milk, eggs, dusty environment aur synthetic fabrics. Ek qualified homoeopath bachche ki poori history dekhke medicine decide karta hai — aur results often adults se bhi jaldi aate hain.',
    },
    {
      _key: 'faq5',
      question: 'Eczema mein khujli band karne ka turant upay kya hai?',
      answer: 'Turant relief ke liye: affected area par cool, damp cloth (thanda geela kapda) lagayen — 10-15 minutes ke liye. Ye itching ko significantly reduce karta hai. Aloe vera gel (fresh ya pure) bhi burning aur itch ko sooth karta hai. Nails se scratch karna bilkul avoid karein — scratching se skin damage hoti hai aur itch-scratch cycle aur buri hoti hai. Raat ko itching zyada hoti hai — sone se pehle moisturizer lagayen aur cotton gloves pehen sakein (khaskar bacchon ke liye).',
    },
    {
      _key: 'faq6',
      question: 'Eczema mein kya khana chahiye aur kya nahi — diet ka kya role hai?',
      answer: 'Diet eczema mein significant role play karti hai — khaskar gut-skin connection ki wajah se. Khayen: haldi, amla, omega-3 rich foods (alsi ke beej, akhrot), plain dahi (probiotics ke liye), aur khoob paani. Avoid karein: cow\'s milk aur dairy (India mein eczema ka top dietary trigger), refined sugar, bahut teekha khana, aur packaged snacks. Trigger food har patient ke liye alag hota hai — 2-3 hafte ek suspicious food band karke dekhen ki skin better hoti hai ya nahi.',
    },
    {
      _key: 'faq7',
      question: 'Kya eczema stress se badhta hai — mental health ka connection kya hai?',
      answer: 'Haan — eczema aur stress ka direct, proven connection hai. Jab stress hoti hai, body cortisol hormone release karta hai jo immune system ko dysregulate karta hai — aur eczema flare trigger ho jaata hai. India mein exam time, job pressure, ya family stress ke saath eczema worse hone ki complaints bahut common hain. Homeopathy mein ye ek important consideration hai — patient ki emotional state bhi treatment mein count karti hai. Roz 15-20 minute meditation, deep breathing, ya walk se cortisol level stabilize hota hai.',
    },
    {
      _key: 'faq8',
      question: 'Eczema mein naha kaise — garam paani theek hai ya thanda?',
      answer: 'Lukewarm paani use karein — nahi garam, nahi bahut thanda. Garam paani skin ka natural oil strip karta hai aur itch worse hoti hai. Naha ne ka time 10 minutes se zyada nahi hona chahiye. Soap ke bajaye mild, fragrance-free, soap-free cleanser use karein (pH 5.5 wale better hote hain). Sabse important step — naha ne ke turant baad (3 minutes ke andar), jab skin still slightly damp ho, moisturizer lagayen. Yahi skin barrier maintain karne ka sabse proven tarika hai.',
    },
    {
      _key: 'faq9',
      question: 'Kya eczema ek se doosre insaan mein failta hai — contagious hai?',
      answer: 'Bilkul nahi — eczema contagious nahi hai. Ye chune se, haath milane se, ya paas rehne se kabhi nahi failta. Ye ek immune system condition hai, koi infection nahi. India mein is baare mein bahut galat information hai — log eczema waale insaan se door rehte hain jo emotionally bahut painful hota hai. Haan — genetic predisposition hoti hai (family mein ek ko ho to doosron ka risk thoda zyada hota hai) — lekin ye failta nahi, inherited tendency hai.',
    },
    {
      _key: 'faq10',
      question: 'Kya eczema pregnancy mein safe hai — kya ilaaj lete reh sakte hain?',
      answer: 'Pregnancy mein eczema ka behavior varied hota hai — kuch mein better hota hai, kuch mein worse. Is dauran conventional steroid creams ko doctor ki strict supervision mein hi use karna chahiye, khaskar first trimester mein. Homeopathy pregnancy mein ek safe option hai — highly diluted medicines jo mother aur baby dono ke liye safe hoti hain. Apne homoeopath ko pregnancy ke baare mein zaroor batayein — treatment accordingly adjust ki jaati hai.',
    },
    {
      _key: 'faq11',
      question: 'Eczema aur psoriasis (chambal) mein kya fark hai?',
      answer: 'Dono skin conditions hain — lekin kaafi alag hain. Eczema mein skin itchy, weeping aur oozing hoti hai — patches soft aur moist hote hain. Psoriasis mein skin dry, thick, silver-white scales se dhaki hoti hai aur edges clearly defined hote hain. Eczema zyaatar inner elbows, back of knees, aur face pe hota hai; psoriasis zyaatar knees, elbows, aur scalp pe. Eczema allergic/atopic nature ka hai; psoriasis autoimmune hai. Exact diagnosis zaroori hai kyunki treatment approach alag hoti hai.',
    },
  ],

  youtubeVideos: [
    {
      _key: 'vid1',
      title: 'Cause Of Skin Disease',
      url: 'https://youtu.be/phFTIN00CLg',
    },
    {
      _key: 'vid2',
      title: 'Eczema To Asthma — Atopic March',
      url: 'https://youtu.be/c29pSyE5apE',
    },
  ],

  selfCheck: 'Agar skin pe ek specific jagah baar baar red, itchy patches aate hain — khaskar raat mein itching zyada ho — to eczema ho sakta hai. Doctor se confirm zaroor karwao.',

  sources: [
    {
      _key: 'src1',
      name: 'CCRH Multi-centre Clinical Study on Atopic Dermatitis — Indian Journal of Research in Homoeopathy',
      url: '',
      year: '2018',
    },
    {
      _key: 'src2',
      name: 'National Eczema Association — Eczema Overview',
      url: 'https://nationaleczema.org',
      year: '2023',
    },
    {
      _key: 'src3',
      name: 'WHO Skin Disease Burden Report',
      url: '',
      year: '2022',
    },
    {
      _key: 'src4',
      name: 'DLQI Studies in Homeopathy — PubMed',
      url: '',
      year: '2021',
    },
    {
      _key: 'src5',
      name: 'Lancet Global Burden of Disease — Skin Conditions India',
      url: '',
      year: '2021',
    },
  ],

  publishedAt: new Date().toISOString(),
}

async function main() {
  const result = await client.createOrReplace(eczema)
  console.log('Document created:', result._id)
}

main().catch(console.error)
