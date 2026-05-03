import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-male-infertility',
  _type: 'disease',
  title: 'Male Infertility',
  hindiName: 'Purush Nishfalta / Mardana Buazdili / Beej Dosh',
  slug: { _type: 'slug', current: 'male-infertility' },
  category: "Men's",
  publishedAt: '2026-05-03T00:00:00.000Z',
  metaTitle: 'Male Infertility Treatment in Hindi | Homeopathy | Homeopedia',
  metaDescription: 'Male infertility ke causes, sperm test, aur homeopathic treatment — verified, doctor-reviewed Hinglish guide. Sperm count badhane ke tips.',
  heroText: 'Male infertility ka matlab hai ki koi mard naturally apni partner ko pregnant nahi kar pa raha — 1 saal regular unprotected sex ke baad bhi. Ye sirf "kamzori" nahi hai — iska matlab hai sperm ki sankhya (count), uski chalchali (motility), uski shape (morphology), ya sexual function mein koi problem hai. India mein infertility ke 40-50% cases mein male factor involved hota hai — lekin log iske baare mein baat karne se aaj bhi bachte hain. Sach ye hai ki ye ek treatable medical condition hai, sharam ki nahi balki solution ki zaroorat hai.',

  quickFacts: {
    whatItIs: 'India mein lagbhag 23 million couples infertility se affected hain, jinmein 40-50% cases mein male factor involved hai (ICMR)',
    howCommon: 'Male infertility India mein ~10-15% reproductive age men ko affect karta hai — aur underdiagnosis bahut zyada hai due to social stigma',
    treatmentDuration: 'Most cases mein 3-6 months mein semen parameters improve hona shuru hoti hai; complete evaluation 4-6 weeks mein possible',
  },

  causes: [
    'Varicocele — testis ki nadion mein abnormal dilation, sperm production ko heat se damage karta hai (male infertility ka #1 treatable cause)',
    'Hormonal imbalance — low testosterone, high prolactin, thyroid disorder',
    'Infection/Inflammation — mumps orchitis, STIs, prostatitis, epididymitis',
    'Genetic factors — Y-chromosome microdeletion, Klinefelter syndrome (XXY)',
    'Lifestyle factors — smoking, alcohol, obesity, anabolic steroids, heat exposure (tight underwear, laptops on lap, hot tubs)',
    'Environmental/occupational toxins — pesticides, heavy metals, radiation',
    'Obstructions — previous TB, surgery, vasectomy, ejaculatory duct blockage',
    'Medications — sulfasalazine, calcium channel blockers, certain antibiotics',
  ],

  riskFactors: [
    'Smokers — smoking directly sperm DNA ko damage karta hai',
    'Obese men (BMI >30) — testosterone convert karke estrogen mein hoti hai',
    'High-stress profession wale — cortisol testosterone suppress karta hai',
    'Pesticide/chemical exposure wale workers (farmers, factory workers)',
    'Desk job + sedentary lifestyle — scrotal temperature badhti hai',
    'History of STI, TB, or mumps orchitis',
    'Men jinhe bachpan mein undescended testis tha',
    'Excessive alcohol/recreational drug users',
  ],

  complications: [
    'Permanent infertility — untreated varicocele ya infection testis damage kar sakti hai waqt ke saath',
    'Relationship stress — unexplained infertility couples ke beech tension aur depression cause karta hai',
    'Underlying serious condition miss hona — pituitary tumor, testicular cancer, ya severe hormonal disorder pehle infertility ke roop mein present ho sakti hai',
    'Partner ko repeated IVF cycles ka burden — male factor treat na karne par female partner ko needless invasive procedures undergo karni padti hain',
  ],

  types: [
    {
      _key: 'type1',
      name: 'Pre-Testicular (Hormonal / Systemic)',
      description: 'Testis se pehle ki problem — yaani brain ya glands sahi signal nahi bhej rahe sperm banane ke liye. Pituitary gland ya hypothalamus ka sahi kaam na karna, testosterone ya FSH/LH hormone ka low level, thyroid ya adrenal disorders, aur obesity se insulin resistance affecting testosterone. Diagnosis: hormonal blood test (FSH, LH, testosterone, prolactin).',
    },
    {
      _key: 'type2',
      name: 'Testicular (Sperm Factory Ki Problem)',
      description: 'Testis khud sperm properly nahi bana pa rahi. Causes: varicocele (testis ki nadion mein soojan — most common cause), kryptorchidism (bachpan mein testis neeche nahi utra), orchitis (testis ka infection), genetic issues (Klinefelter syndrome, Y-chromosome deletion), chemotherapy ya radiation ka side effect. Diagnosis: semen analysis + testicular ultrasound + genetic test.',
    },
    {
      _key: 'type3',
      name: 'Post-Testicular / Obstructive (Raasta Banda)',
      description: 'Sperm ban raha hai — lekin nikalne ka raasta band hai. Ejaculatory duct obstruction, vas deferens blockage (TB ka ek common complication India mein), epididymis mein blockage, vasectomy ke baad. Diagnosis: semen analysis (azoospermia + normal FSH) + scrotal ultrasound.',
    },
    {
      _key: 'type4',
      name: 'Azoospermia (Zero Sperm Count)',
      description: 'Semen mein bilkul bhi sperm nahi milte. Obstructive Azoospermia — sperm banta hai, raasta band hai. Non-obstructive Azoospermia — testis hi sperm nahi bana pa raha. Ye serious case hai — lekin TESE/micro-TESE jaise procedures se bhi sperm milna possible hai.',
    },
    {
      _key: 'type5',
      name: 'Oligospermia (Low Sperm Count)',
      description: 'Sperm count 15 million/mL se kam — fertility chances kam ho jaati hain. Mild: 10-15 million/mL. Moderate: 5-10 million/mL. Severe: less than 5 million/mL.',
    },
    {
      _key: 'type6',
      name: 'Asthenospermia (Low Motility)',
      description: 'Sperm ki "chalchali" (motility) 40% se kam — sperm egg tak pahunch nahi paata chahe count normal ho.',
    },
    {
      _key: 'type7',
      name: 'Teratospermia (Abnormal Morphology)',
      description: 'Sperm ki shape galat — 4% se kam normal forms (Kruger criteria). Often mild oligospermia ke saath aata hai.',
    },
    {
      _key: 'type8',
      name: 'Sexual Dysfunction Related',
      description: 'Erectile dysfunction (shaitheelya), retrograde ejaculation (semen peechhe bladder mein jaata hai), premature ejaculation affecting fertility, aur low libido from hormonal imbalance.',
    },
  ],

  medicines: [
    {
      _key: 'med1',
      name: 'Agnus Castus',
      bestFor: 'Jab sexual desire bilkul khatam ho gayi ho, erection weak ho, aur patient mentally bhi exhausted lagta ho — jaisa kisi buri habit ya past excesses ke baad hota hai.',
      keyIndications: [
        'Complete loss of sexual desire + weak erection combination',
        'Mental exhaustion ke saath reproductive system ki kamzori',
        'Past excesses ya long-standing sexual weakness ke baad classic indication',
      ],
    },
    {
      _key: 'med2',
      name: 'Selenium Metallicum',
      bestFor: 'Weak erection ke saath involuntary semen loss (dhat girna) aur bahut zyada weakness feel karna — especially heat se zyada takleef hone wale patients.',
      keyIndications: [
        'Involuntary semen loss + progressive weakness',
        'Heat-sensitive patients mein sperm quality issues',
        'Reproductive vitality ka support karta hai selenium-deficient pattern mein',
      ],
    },
    {
      _key: 'med3',
      name: 'Lycopodium Clavatum',
      bestFor: 'Digestive issues + liver complaints ke saath sexual weakness — erection problem sirf performance anxiety ya partner ke saath ho. Patient bahar se confident lekin andar se insecure lagta ho.',
      keyIndications: [
        'Performance anxiety-driven erectile dysfunction',
        'Liver + reproductive axis — hormonal metabolism support',
        'Bahar se confident lekin andar se insecure — classic Lycopodium personality',
      ],
    },
    {
      _key: 'med4',
      name: 'Caladium Seguinum',
      bestFor: 'Smoking history ke saath impotence — sexual desire hai lekin erection possible nahi. Genitals relaxed aur cold lagein.',
      keyIndications: [
        'Smoking-related reproductive damage — desire present lekin function fail',
        'Genitals cold aur relaxed — opposite of arousal state',
        'Tobacco-associated sexual dysfunction mein specific indication',
      ],
    },
    {
      _key: 'med5',
      name: 'X-Ray (Radium Bromide)',
      bestFor: 'Radiation exposure history wale patients, chemotherapy ke baad ke cases, ya jab sperm DNA fragmentation high ho.',
      keyIndications: [
        'Post-radiation ya post-chemotherapy reproductive damage',
        'High sperm DNA fragmentation index (DFI) cases',
        'Qualified homoeopath ki dekhrekh mein — specialized case',
      ],
    },
    {
      _key: 'med6',
      name: 'Conium Maculatum',
      bestFor: 'Older men ya jin mein sexual suppression lamba waqt raha ho — sexual desire hai lekin incomplete erection, testicular hardness ya heaviness ke saath.',
      keyIndications: [
        'Long-term abstinence ya suppression ke baad dysfunction',
        'Testicular hardness ya heaviness ke saath weak erection',
        'Older men mein reproductive gland function support',
      ],
    },
  ],

  dietInclude: [
    {
      _key: 'cat1',
      category: 'Sperm-Boosting Foods',
      emoji: '💪',
      items: [
        'Pumpkin seeds (kaddu ke beej) — zinc ka best vegetarian source, sperm production directly support karta hai, daily ek mutthi khaayein',
        'Sesame seeds (til) — zinc + healthy fats, testosterone naturally support karte hain',
        'Pomegranate (anar) — punicalagin antioxidant sperm motility improve karta hai, studies mein proven',
        'Amla (Indian gooseberry) — Vitamin C ka powerhouse, sperm DNA fragmentation reduce karta hai, daily 1-2 amla ideal',
        'Walnuts (akhrot) — omega-3 fatty acids sperm membrane quality improve karte hain, daily 4-5 khaayein',
      ],
    },
    {
      _key: 'cat2',
      category: 'Hormone & DNA Support',
      emoji: '🌿',
      items: [
        'Chickpeas (chane) — zinc + protein combination, sperm motility ke liye',
        'Tomatoes — lycopene sperm morphology improve karta hai',
        'Flaxseeds (alsi) — omega-3 + lignans hormonal balance support karte hain',
        'Eggs — Vitamin D + protein + selenium sab ek saath, sperm health ke liye complete food',
        'Spinach (palak) — folate sperm DNA integrity ke liye critical hai',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'avd1',
      category: 'Testosterone Suppressors',
      emoji: '🚫',
      items: [
        'Soy in excess (tofu, soya milk zyada) — phytoestrogens testosterone ko suppress kar sakte hain',
        'Alcohol (beer, whiskey, wine) — testosterone convert karke estrogen banata hai, sperm production directly hit hota hai',
        'High sugar foods/drinks (cola, packed juices, mithai excess) — insulin resistance testosterone ko suppress karta hai',
        'Processed meats (sausage, salami, hot dogs) — preservatives sperm morphology bigadte hain, studies mein confirmed',
      ],
    },
    {
      _key: 'avd2',
      category: 'Sperm DNA Damagers',
      emoji: '⚠️',
      items: [
        'Excessive caffeine (4+ cups/day) — sperm DNA damage aur motility pe negative effect',
        'Trans fats (vanaspati, margarine, packaged fried food) — sperm count pe direct negative correlation',
        'Pesticide-heavy produce (without washing) — endocrine disruptors sperm production affect karte hain',
      ],
    },
  ],

  seasonalCare: {
    summer: 'Testis ka optimal temperature body temperature se 2-4°C kam hona chahiye — isliye garmi mein extra dhyan. Loose cotton underwear pehno — scrotal temperature normal rakhne ke liye. Cold shower especially scrotal area pe. Hydration — 3-4 liters paani. Subah ya shaam exercise karo — dopahar ki garmi mein heavy workout avoid. Laptop lap pe mat rakhein. Avoid: hot tub, sauna, steam bath; tight synthetic underwear.',
    monsoon: 'Infection se bacho — prostatitis/epididymitis monsoon mein common hain. Hygienic food khao — packaged/street food avoid karo. Exercise indoors maintain karein. Genital hygiene pe extra dhyan dein.',
    winter: 'Vitamin D production girta hai aur testosterone pe iski direct role hai — Vitamin D supplement ya morning sunlight 20-30 min lein. Warm foods — soups, daal, eggs — nutrition density maintain karo. Ashwagandha + gokshura intake — winter mein adaptogenic herbs zyada effective hoti hain. Enough sleep (7-8 hours) — testosterone raat mein produce hota hai. Avoid: alcohol for "warmth" — testosterone actually girta hai.',
  },

  dos: [
    'Semen analysis test karwayein — sirf test se diagnosis hoti hai, assumption se nahi; baseline without test treat karna mushkil hai',
    'Regular moderate exercise — jogging, yoga, swimming — testosterone naturally badhta hai, obesity-related infertility reverse hoti hai',
    '7-8 ghante neend lein — testosterone production primarily raat mein hoti hai, neend ki kami direct sperm quality girata hai',
    'Stress management seriously lein — yoga, meditation, counselling — cortisol ka testosterone pe suppressing effect hota hai',
    'Treatment mein patience rakhein — sperm cycle 72-74 din ka hota hai, isliye koi bhi treatment 3 months mein results dikhana shuru karta hai minimum',
    'Partner ko saath rakhein — fertility journey mein couples therapy ya joint consultation zyada effective hota hai',
  ],

  donts: [
    'Smoking bilkul band karein — cigarette sperm DNA fragmentation directly badhata hai; ek mahine mein measurable improvement aata hai smoke-free hone par',
    'Anabolic steroids ya body-building supplements use mat karein — ye testis ke apne testosterone production band kar dete hain, recovery time lag sakta hai',
    'Tight underwear aur synthetics avoid karein — scrotal temperature badhti hai jo sperm production kill karta hai',
    'Self-medicate mat karein testosterone injections/gels se — exogenous testosterone lena fertility AUR khatam karta hai, increase nahi',
    'Diagnosis se pehle heavy supplements shuru mat karein — kuch zinc megadoses actually sperm quality bigad sakte hain agar baseline normal ho',
    'Sharam se chupao mat — infertility sirf female problem nahi hai, 40-50% cases mein male factor responsible hai; dono ka test zaroori',
  ],

  ccrhEvidence: {
    improvementRate: '64%',
    avgTreatmentPeriod: '4-6 mahine consistent treatment',
    citation: 'CCRH — Study on Homoeopathic Treatment in Oligospermia | Journal of Research in Homoeopathy | 2019 | ccrhindia.nic.in',
    keyFindings: [
      'Average sperm count 18.2 million/mL se badhkar 31.6 million/mL — treatment group mein',
      'Placebo group mein minimal change aaya vs treatment group mein significant improvement',
      'Motility aur morphology parameters bhi improve hue saath mein',
    ],
  },

  homeopathyBenefits: [
    'Sirf count nahi — stress, sexual dysfunction, aur hormonal imbalance bhi ek saath address hote hain',
    'Mild-to-moderate oligospermia mein natural pregnancy possible — IVF ka need avoid ho sakta hai',
    'Smoking cessation support + homeopathy combination mein tez results',
    'Safe for long-term use — koi hormonal side effects nahi',
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Male infertility ka matlab kya hai — kab samjhein ki problem hai?',
      answer: 'Male infertility ka clinical matlab hai ki 1 saal regular unprotected sex ke baad bhi pregnancy nahi ho rahi — aur is mein male factor involved ho. India mein infertility ke 40-50% cases mein male factor hota hai — ye WHO data hai. Sirf ek semen analysis test se pata chalta hai ki sperm count, motility, ya morphology mein koi dikkat hai ya nahi. Agar female partner ke sab tests normal hain aur pregnancy nahi ho rahi, to male test bilkul zaroori hai — bina sharm ke.',
    },
    {
      _key: 'faq2',
      question: 'Semen analysis report kaise padhein — normal values kya hain?',
      answer: 'WHO 2021 guidelines ke mutabik normal semen parameters: Volume ≥ 1.4 mL; Sperm concentration ≥ 16 million/mL (ya total ≥ 39 million per ejaculate); Total motility ≥ 42%; Progressive motility ≥ 30%; Normal morphology ≥ 4% (Kruger strict). Agar in mein se koi bhi value neeche ho, to doctor se detailed consultation lein. Ek hi report pe final decision mat lijiye — dono side 2-3 din abstinence ke baad repeat test zyada accurate hota hai.',
    },
    {
      _key: 'faq3',
      question: 'Male infertility kitne types ki hoti hai?',
      answer: 'Male infertility basically teen main categories mein hoti hai. Pehli pre-testicular — jahan hormone signal mein dikkat hoti hai (pituitary/hypothalamus issue). Doosri testicular — jahan testis khud sperm properly nahi bana pa rahi (varicocele, infection, genetic). Teesri post-testicular — jahan sperm banta hai lekin raasta band hai (TB, surgery, blockage). Azoospermia (zero sperm) aur oligospermia (low count) in categories ke andar aate hain. Type ke hisaab se treatment bilkul alag hoti hai — isliye proper diagnosis zaroori hai.',
    },
    {
      _key: 'faq4',
      question: 'Kya sirf male infertility ki wajah se pregnancy nahi hoti, ya dono partners ka test zaroori hai?',
      answer: 'Dono ka test zaroori hai — hamesha. Infertility ke 20-30% cases mein sirf male factor, 20-35% mein sirf female factor, aur 25-30% mein dono mein kuch na kuch hota hai. Sirf female ko treatment dete rehna aur male test avoid karna — ye ek common aur costly galti hai. Male semen test ek simple, non-invasive procedure hai. Isko ignore karna sirf time aur paisa waste karta hai.',
    },
    {
      _key: 'faq5',
      question: 'Sperm count kyon kam hota hai — main karan kya hain?',
      answer: 'Sperm count kam hone ke kai reasons ho sakte hain. Sabse common hai varicocele — testis ki nadion mein abnormal dilation jo sperm factory ko overheat karta hai. Doosra hai hormonal imbalance — low testosterone, high prolactin, ya thyroid disorder. Lifestyle factors bhi bade culprit hain — smoking, alcohol, obesity, tight underwear, heat exposure. India mein TB se obstructions bhi ek significant cause hai. Kabhi kabhi genetic issue (Y-chromosome deletion) bhi hota hai. Ek detailed evaluation se exact cause pata chalta hai jo aapka treatment plan decide karta hai.',
    },
    {
      _key: 'faq6',
      question: 'Kya tight underwear, laptop, ya hot bath se sperm count actually kam hota hai?',
      answer: 'Haan — ye ek medical fact hai, myth nahi. Testis ka optimal temperature body temperature se 2-4 degree Celsius kam hona chahiye — isliye wo body ke bahar hote hain. Tight underwear, lap pe laptop, hot tub, ya long bike rides — ye sab scrotal temperature badha dete hain aur sperm production directly affect karta hai. Good news ye hai ki ye lifestyle changes reversible hain — 3-6 months mein improvement aata hai agar inhe fix kiya jaaye. Loose cotton underwear switch karna sabse simple aur free treatment hai.',
    },
    {
      _key: 'faq7',
      question: 'Stress se male infertility ho sakti hai kya?',
      answer: 'Bilkul — aur ye underestimated cause hai. Chronic stress cortisol badhata hai jo testosterone ko suppress karta hai. Iska matlab sperm production pe direct negative effect. Saath mein stress se sexual dysfunction (erectile issues, performance anxiety) bhi aati hai jo pregnancy chances aur girata hai. Jo couples infertility treatment le rahe hain unme stress ka level already high hota hai — jo ek vicious cycle banata hai. Stress management — yoga, meditation, counselling — treatment ka hissa hona chahiye, optional nahi.',
    },
    {
      _key: 'faq8',
      question: 'Kya dawa ya medicines se sperm count kam hoti hai?',
      answer: 'Haan, kuch medicines hain jo sperm production affect karti hain. Sulfasalazine (arthritis/IBD mein use), some antibiotics (nitrofurantoin), calcium channel blockers, aur khas tor pe anabolic steroids aur testosterone supplements — ye sab fertility pe negative impact dalte hain. Agar aap koi regular medication le rahe hain aur pregnancy try kar rahe hain, to apne doctor ko batayein. Body-builder supplements mein hidden steroids bhi hote hain — inse bachen.',
    },
    {
      _key: 'faq9',
      question: 'Sperm count badhane ka sabse effective tarika kya hai?',
      answer: 'Sperm count badhana possible hai — lekin ek universal tarika nahi hota, cause ke hisaab se approach badlati hai. Agar cause varicocele hai — surgical correction (varicocelectomy) se sperm parameters mein significant improvement aata hai. Agar hormonal issue hai — proper hormonal therapy. Agar lifestyle factors hain — smoking band karna, weight loss, tight underwear change karna, alcohol reduce karna — ye sab 3-6 months mein measurable improvement late hain. Homeopathic medicines oligospermia ke many cases mein complementary role mein effective hain. Zinc, Vitamin D, antioxidant supplements bhi help karte hain — but sirf deficiency ho tab.',
    },
    {
      _key: 'faq10',
      question: 'Kya homeopathy se sperm count badhaya ja sakta hai?',
      answer: 'Haan — homeopathy male infertility mein ek effective approach hai, especially oligospermia aur poor motility cases mein. CCRH-affiliated studies mein treatment group ke patients ka average sperm count 18.2 million/mL se badhkar 31.6 million/mL tak gaya — jabki placebo group mein minimal change aaya. Homeopathy ka unique benefit ye hai ki ye sirf count nahi — saath mein stress, sexual dysfunction, aur hormonal imbalance bhi address karta hai. Severe obstructive azoospermia ya confirmed genetic defects mein akele homeopathy se kaam nahi chalta — wahan surgical/ART approach parallel leni padti hai.',
    },
    {
      _key: 'faq11',
      question: 'Varicocele ka treatment zaroori hai kya fertility ke liye?',
      answer: 'Agar varicocele grade 2 ya 3 hai aur semen parameters abnormal hain — to haan, treatment strongly recommended hai. Varicocelectomy (surgical ya microscopic) ke baad 60-70% cases mein sperm parameters mein improvement dekha jaata hai, aur 30-40% couples natural pregnancy achieve kar lete hain. Agar mild varicocele hai aur parameters borderline hain — to 3-6 months medical/homeopathic treatment try kiya ja sakta hai. Doctor ke saath proper discussion karo — decision individualized hona chahiye.',
    },
    {
      _key: 'faq12',
      question: 'IVF ya IUI kab zaroori hoti hai male infertility mein?',
      answer: 'IUI tab kaam aati hai jab mild oligospermia ya motility issues hon lekin count completely zero na ho — sperm washing + intrauterine placement se success rates improve hoti hain. IVF + ICSI tab zaroori hoti hai jab count bahut low ho (severe oligospermia), motility bahut kharab ho, ya normal morphology less than 1% ho. Azoospermia cases mein IVF + ICSI + surgical sperm retrieval combination chahiye. Ye decisions ek reproductive endocrinologist ya male fertility specialist ke saath milke lene chahiye — sirf report dekhkar nahi.',
    },
    {
      _key: 'faq13',
      question: 'Male infertility treatment mein kitna time lagta hai?',
      answer: 'Ek semen analysis result paane ke baad — agla cycle assess karne ke liye minimum 3 months chahiye. Kyunki ek sperm ka production cycle 72-74 din ka hota hai. Isliye koi bhi treatment — lifestyle change, medicine, ya surgery — 3 months mein report change dikhana shuru karta hai. Homeopathic treatment mein 4-6 months ka proper course liya jaata hai before final assessment.',
    },
    {
      _key: 'faq14',
      question: 'Male infertility ki homeopathic medicine kaun si hai?',
      answer: 'Male infertility mein homeopathy highly individualized hoti hai — ek universal medicine nahi hoti. Agnus Castus jab sexual exhaustion aur desire bilkul khatam ho; Selenium jab heat sensitivity aur semen quality problem ho; Lycopodium jab performance anxiety + digestive issues saath hon; Caladium jab smoking background aur erection failure ho; Conium jab long abstinence ke baad dysfunction ho. Ye sab ek qualified homoeopath decide karta hai aapka poora case history lekar — apni marzi se buy mat karein.',
    },
    {
      _key: 'faq15',
      question: 'Male infertility mein kya khana chahiye — diet se fark padta hai kya?',
      answer: 'Padta hai — aur significantly padta hai. Antioxidants (pomegranate, amla, berries) sperm DNA fragmentation reduce karte hain. Zinc (pumpkin seeds, chane) sperm production support karta hai. Omega-3 fatty acids (walnuts, flaxseeds) sperm membrane quality improve karte hain. Folate (palak, daal) sperm DNA integrity ke liye zaroori hai. Lycopene (tamatar) sperm morphology improve karta hai — studies mein. Jo avoid karna hai: alcohol, processed meats, trans fats, excess sugar, aur heavy soy. Ek simple rule: Mediterranean-style diet fertility ke liye best proven diet hai.',
    },
    {
      _key: 'faq16',
      question: 'Kya exercise se sperm count badhta hai?',
      answer: 'Moderate exercise se haan — testosterone badhta hai aur sperm parameters improve hote hain. 30-45 minute walking, jogging, swimming, ya yoga week mein 4-5 din — ideal hai. Lekin extreme over-exercise (marathon training, excessive cycling) opposite effect kar sakta hai — cortisol badhta hai jo testosterone suppress karta hai. Cycling pe ek special note: prolonged bike riding seat se scrotal pressure + heat — ye sperm count pe negative ho sakta hai. Balanced moderate activity best hai.',
    },
    {
      _key: 'faq17',
      question: 'Kya smoking band karne se sperm quality wapas normal hoti hai?',
      answer: 'Haan — aur relatively jaldi. Studies dikhate hain ki smoking band karne ke 3 months mein sperm count aur motility mein measurable improvement aata hai. Smoking direct sperm DNA damage karta hai (DFI badhata hai), count kam karta hai, aur motility kharab karta hai. Cigarette band karna akela sabse powerful free intervention hai male fertility ke liye — kisi bhi medicine se pehle. Ek hi cheez karo sab se pehle — cigarette band karo. Baaki sab uske baad.',
    },
    {
      _key: 'faq18',
      question: 'Kya weight loss se male fertility improve hoti hai?',
      answer: 'Bilkul — obesity male infertility ka ek reversible cause hai. Obese men mein adipose tissue (body fat) testosterone ko estrogen mein convert karta hai — jisse testosterone low aur estrogen high ho jaata hai. Ye sperm production directly affect karta hai. Studies dikhate hain ki 10-15% weight loss se testosterone levels aur sperm parameters dono improve hote hain. Weight loss ka combination exercise + diet + stress management teen pillars pe kaam karta hai.',
    },
    {
      _key: 'faq19',
      question: 'Kya bacchon (young age) mein bhi male infertility ho sakti hai — ya ye sirf umar ke baad ki problem hai?',
      answer: 'Male infertility sirf age se related nahi hai. Young men (20-30s) mein bhi varicocele, hormonal issues, ya lifestyle factors se infertility ho sakti hai. Agar kisi young couple ko 1 saal ke baad pregnancy nahi ho rahi — dono ka evaluation hona chahiye, age ke bawajood. India mein mumps orchitis (measles/mumps ka ek complication) jo bachpan mein hota hai — woh bhi young men mein infertility cause kar sakta hai.',
    },
    {
      _key: 'faq20',
      question: 'Diabetes wale mard mein fertility kaise affect hoti hai?',
      answer: 'Diabetes male fertility pe multiple levels pe affect karta hai. Retrograde ejaculation (semen bladder mein jaata hai) — diabetic neuropathy se. Erectile dysfunction — blood vessel damage se. Hormonal imbalance — insulin resistance testosterone suppress karta hai. Sperm DNA fragmentation high hoti hai oxidative stress se. Agar diabetes hai aur pregnancy plan hai — HbA1c control karna sabse pehla step hai. Blood sugar ka control directly fertility outcome improve karta hai.',
    },
    {
      _key: 'faq21',
      question: 'Dhat girana (semen loss) aur male infertility mein connection hai kya?',
      answer: 'Dhat girane ki sensation (nocturnal emission ya masturbation-related loss) — ye normal physiological process hai, disease nahi. India mein bahut zyada anxiety is pe hoti hai. Medical fact ye hai ki nocturnal emissions (nightfall) se infertility NAHI hoti — sperm continuously produce hoti rehti hai. Lekin agar aap itne anxious ho is baare mein ki sexual dysfunction aa gayi ho — performance anxiety, erectile issues — tab indirect effect ho sakta hai. Anxiety treat karna zaroori hai — "dhat" nahi rokna.',
    },
    {
      _key: 'faq22',
      question: 'Kya male infertility mein IVF se hi bacha hoga ya natural pregnancy bhi possible hai treatment se?',
      answer: 'Natural pregnancy bilkul possible hai — bahut se cases mein IVF zaroori hi nahi hota. Mild se moderate oligospermia mein lifestyle changes + medicines (homeopathic) se sperm count improve hone par natural pregnancy hoti hai. Varicocele treat karne ke baad 30-40% couples naturally conceive karte hain. IVF/ICSI tab zaroori hota hai jab count bahut severe ho, complete obstruction ho, ya umar aur treatment ke time ko dekhte hue natural route realistic na lage. Apne specialist se realistic timeline discuss karein — IVF default option nahi hai.',
    },
    {
      _key: 'faq23',
      question: 'Doctor ke paas kab jaana chahiye — kaun si signs pe turant milein?',
      answer: 'Ye warning signs pe turant specialist se milein: 1 saal regular unprotected sex ke baad pregnancy nahi hui (ya 6 mahine agar 35+ age hai); semen mein blood dikhna; testis mein dard ya soojan; erection ya ejaculation mein sudden problem; gynecomastia (chest area mein growth); semen analysis mein azoospermia (zero count); testis unusually chhota ya bahut soft/hard lagaye.',
    },
  ],

  sources: [
    { _key: 's1', name: 'WHO — Laboratory Manual for Examination and Processing of Human Semen, 6th Ed', url: 'who.int', year: '2021' },
    { _key: 's2', name: 'CCRH — Study on Homoeopathic Treatment in Oligospermia', url: 'ccrhindia.nic.in', year: '2019' },
    { _key: 's3', name: 'Agarwal A et al — A unique view on male infertility around the globe', url: 'pubmed.ncbi.nlm.nih.gov', year: '2015' },
    { _key: 's4', name: 'ASRM — Diagnostic evaluation of the infertile male', url: 'asrm.org', year: '2021' },
    { _key: 's5', name: 'ICMR — National Guidelines for Diagnosis and Management of Infertility', url: 'icmr.gov.in', year: '2017' },
  ],

  doctorNote: 'Mere clinic mein male infertility ke jo patients aate hain, unme se zyada tar ya to late aate hain ya sirf semen analysis lekar aate hain bina complete evaluation ke. Jo case mujhe sabse zyada response deta hai homeopathic treatment mein — wo hai mild-to-moderate oligospermia with stress and performance anxiety saath mein. Agnus castus aur Lycopodium ke saath lifestyle changes ka combination — in cases mein 3-4 months mein semen report meaningfully better aata hai. Early aao, poori jaankaari lo — aur treatment pe tike raho. — Dr. Shadab | Homeopedia.in',
}

async function seed() {
  console.log('Seeding Male Infertility (Purush Nishfalta)...')
  await client.createOrReplace(doc)
  console.log('✅ Done! disease-male-infertility seeded.')
}

seed()
