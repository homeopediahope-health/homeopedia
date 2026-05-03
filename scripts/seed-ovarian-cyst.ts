import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-ovarian-cyst',
  _type: 'disease',
  title: 'Ovarian Cyst',
  hindiName: 'Andashay Ki Ganthi / Andkosh Cyst',
  slug: { _type: 'slug', current: 'ovarian-cyst' },
  category: "Women's",
  publishedAt: '2026-05-02T00:00:00.000Z',
  metaTitle: 'Ovarian Cyst Treatment in Hindi | Homeopathy | Homeopedia',
  metaDescription: 'Ovarian cyst ke causes, types, treatment aur homeopathic medicines — simple Hinglish mein. Verified info, doctor-reviewed. Surgery se bachne ke tips.',
  heroText: 'Ovarian cyst matlab andashay (ovary) ke andar ya upar ek fluid-bhari ganthi (cyst) ka banna. Ye ganthi choti bhi ho sakti hai — jaise ek matar — ya bahut badi bhi ho sakti hai. India mein reproductive age ki kaafi mahilaon mein ye silently rehti hai bina kisi symptom ke. Kuch cysts apne aap theek ho jaati hain, kuch ko treatment chahiye. Sahi waqt pe diagnosis aur treatment se surgery ki zaroorat kaafi cases mein avoid ho sakti hai.',

  quickFacts: {
    whatItIs: 'Ovary mein fluid-bhari ganthi — zyada cases mein benign; functional cysts 4-8 hafte mein apne aap resolve ho sakti hain',
    howCommon: 'Reproductive age ki lagbhag 7-10% Indian mahilaon mein kabhi na kabhi hoti hai; PCOS-related cysts aur bhi common hain',
    treatmentDuration: 'Functional cysts: 4-8 hafte apne aap | Homeopathic treatment: 3-6 mahine mein significant improvement aur ultrasound-confirmed resolution',
  },

  causes: [
    'Hormonal imbalance — estrogen-progesterone ratio bigadna sabse common root cause hai',
    'Ovulation problems — follicle ka release na hona ya corpus luteum ka theek se band na hona',
    'Endometriosis — uterine lining ka ovary pe pahunchna aur chocolate cyst banana',
    'PCOS — polycystic ovarian syndrome mein multiple small cysts hormonal disorder ka part hoti hain',
    'Pelvic infections (PID) — purani pelvic infection se cyst formation ho sakti hai',
    'Thyroid dysfunction — thyroid hormone ka ovarian function pe direct asar padta hai',
    'Genetic predisposition — family mein kisi ko ovarian cyst ya ovarian cancer ho to risk badh jaata hai',
  ],

  riskFactors: [
    'Irregular periods ya hormonal imbalance wali mahilaon ko zyada risk',
    'PCOS ya endometriosis diagnosed mahilaon mein recurrence common',
    'Ye pehle bhi ho chuki ho — recurrence ka risk significantly zyada hota hai',
    'Obesity ya insulin resistance wali mahilaon mein cyst formation aur easy hoti hai',
    'Thyroid disorder patients — hypothyroid aur hyperthyroid dono ovarian function affect karte hain',
    'Early puberty (8 year se pehle) wali ladkiyon mein risk zyada',
    'Infertility treatment (ovulation induction) — follicular cysts ka risk badh jaata hai',
    'Family history mein ovarian cyst ya ovarian cancer',
  ],

  complications: [
    'Cyst rupture (phoot jaana) — severe pain aur emergency ban sakti hai, internal bleeding bhi ho sakti hai',
    'Ovarian torsion — ovary apni jagah se twist ho jaaye — immediate surgery zaroori, bahut rare but serious',
    'Fertility problems — repeated cysts se fallopian tubes ya ovary damage ho sakti hai',
    'Malignancy risk — kuch types mein (especially post-menopause) cancer mein convert hone ka risk — regular monitoring zaroori',
    'Chronic pelvic pain — untreated large cysts se ongoing discomfort aur quality of life pe asar',
  ],

  types: [
    {
      _key: 'type1',
      name: 'Functional Cyst (Sabse Common)',
      description: 'Ye sabse aam type hai. Ovulation process ke dauran banti hai — ya to follicle phata nahi (follicular cyst) ya corpus luteum theek se band nahi hota (luteal cyst). Ye mostly apne aap 4-8 hafte mein theek ho jaati hai. Reproductive age (15-45 years) ki mahilaon mein, especially jinhein irregular periods ho.',
    },
    {
      _key: 'type2',
      name: 'PCOS / Polycystic Ovarian Cysts',
      description: 'Dono ovaries mein ek saath multiple choti-choti cysts. Ye hormonal imbalance ki wajah se hoti hai. PCOD/PCOS alag condition hai — ovarian cyst se related lekin same nahi. Teens se lekar 30s tak, weight gain, acne, aur irregular periods ke saath aati hai.',
    },
    {
      _key: 'type3',
      name: 'Dermoid Cyst (Teratoma)',
      description: 'Is cyst mein hair, fat, ya kabhi kabhi teeth jaise tissues hote hain — ye benign (non-cancerous) hoti hai mostly. Janam se develop hoti hai, slowly badhti hai. Young mahilaon mein zyada, 20-40 age group. Surgical removal usually recommended hoti hai agar badi ho.',
    },
    {
      _key: 'type4',
      name: 'Endometrioma (Chocolate Cyst)',
      description: 'Endometriosis ke patients mein hoti hai. Ovary mein uterine lining jaisa tissue grow karta hai, blood collect hota hai — brown/dark colour ki wajah se "chocolate cyst" bolte hain. Endometriosis patients mein, periods ke saath severe pain aata hai.',
    },
    {
      _key: 'type5',
      name: 'Cystadenoma',
      description: 'Ovary ki surface pe develop hoti hai — watery fluid (serous) ya thick mucus (mucinous) se bhari hoti hai. Ye badi ho sakti hai. Benign hoti hai lekin regular monitor karna zaroori hai. 30-50 age group, perimenopause phase mein zyada.',
    },
    {
      _key: 'type6',
      name: 'Hemorrhagic Cyst',
      description: 'Cyst ke andar bleeding ho jaati hai. Sudden, sharp pelvic pain ke saath aati hai. Mostly apne aap resolve ho jaati hai lekin rupture ka risk hota hai — monitoring zaroori. Reproductive age mein kisi bhi mahila ko ho sakti hai.',
    },
  ],

  medicines: [
    {
      _key: 'med1',
      name: 'Apis Mellifica',
      bestFor: 'Right ovary mein cyst, burning ya stinging type ka dard, touch se dard badhta ho, bloating ho.',
      keyIndications: [
        'Right-sided ovarian inflammation — burning, stinging dard jo jabbing jaise feel ho',
        'Touch se dard worse — pressure bilkul nahi sahti; warmth se bhi worse',
        'Fluid accumulation tendency — swelling, bloating, puffiness saath mein',
      ],
    },
    {
      _key: 'med2',
      name: 'Lachesis',
      bestFor: 'Left ovary ki cyst, periods ke pehle dard zyada ho, periods shuru hote hi thoda better lage.',
      keyIndications: [
        'Left-sided ovarian issues — pre-menstrual worsening jo periods se better ho',
        'Tight clothing intolerable — collar ya waistband nahi sahti',
        'Intense, passionate nature — jealousy, loquacity; hormonal transitions (peri-menopausal) mein effective',
      ],
    },
    {
      _key: 'med3',
      name: 'Pulsatilla',
      bestFor: 'Irregular, delayed, ya suppressed periods wali — mild, emotional, weeping nature — warm room mein bura lagta ho.',
      keyIndications: [
        'Hormonal irregularities — delayed, scanty, or suppressed periods wali young women',
        'Changeable, shifting symptoms — no two episodes same; zyada thirst nahi hoti',
        'Mild, yielding nature — easily moved to tears, craves comfort and open air',
      ],
    },
    {
      _key: 'med4',
      name: 'Colocynthis',
      bestFor: 'Left ovary mein cramping, colicky dard — dard mein ghutne chest se lagao to aaram mile.',
      keyIndications: [
        'Ovarian neuralgia — cramping, colicky, doubling-up pain especially left side',
        'Pressure aur bending forward se relief milna — characteristic feature',
        'Anger ya indignation ke baad symptoms worse — emotional trigger often present',
      ],
    },
    {
      _key: 'med5',
      name: 'Lycopodium',
      bestFor: 'Right ovary cyst with bloating, gas, 4-8 pm mein symptoms worse — digestive issues saath mein ho.',
      keyIndications: [
        'Right-sided — right ovary, right abdomen; 4-8 pm aggravation characteristic',
        'Bloating, gas, digestive-hormonal axis problems — liver function support',
        'Anxious, apprehensive nature — lack of confidence despite outward appearance',
      ],
    },
    {
      _key: 'med6',
      name: 'Thuja Occidentalis',
      bestFor: 'Dermoid cyst type ya slow-growing, hard cysts — polyps ya growths ka history ho.',
      keyIndications: [
        'Abnormal tissue growth aur cystic conditions — deep-acting constitutional medicine',
        'Growths, warts, polyps, abnormal formations history',
        'Vaccination ke baad ya after suppressed skin conditions symptoms start hue hon',
      ],
    },
  ],

  dietInclude: [
    {
      _key: 'inc1',
      category: 'Hormone-Balancing Foods',
      emoji: '⚖️',
      items: [
        'Broccoli, gobhi, patta gobhi — cruciferous vegetables estrogen metabolism improve karte hain',
        'Oats, brown rice, bajra — fiber se excess estrogen gut se eliminate hota hai',
        'Rajma, chana, dal — plant protein se blood sugar stable rehta hai, insulin resistance kam',
        'Akhrot, badam, flaxseeds — omega-3 se prostaglandin balance hota hai, period pain kam',
        'Dahi, chaach — probiotics gut health improve karti hai jo directly hormonal health se connected hai',
      ],
    },
    {
      _key: 'inc2',
      category: 'Anti-Inflammatory & Healing',
      emoji: '🌿',
      items: [
        'Haldi (turmeric) wala doodh — curcumin ovarian inflammation kam karta hai, hormones balance karta hai',
        'Palak, methi, saag — iron aur folate, anemia avoid hoti hai jo heavy periods wali mahilaon mein common',
        'Amla, nimbu — Vitamin C se antioxidant support, ovarian health ke liye',
        'Jeera, saunf — digestive health + mild anti-estrogenic properties, bloating kam karte hain',
        'Paani — din mein 8-10 glass — cyst fluid management aur kidney health ke liye',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'avd1',
      category: 'Hormone Disruptors',
      emoji: '🚫',
      items: [
        'Refined sugar, meetha — insulin spike se testosterone badh sakta hai, PCOS wali cysts ke liye especially harmful',
        'Maida (refined flour) — blood sugar spike karta hai, insulin resistance badhata hai jo cyst growth promote karta hai',
        'Soy products zyada matra mein — phytoestrogen se already high estrogen aur badh sakta hai',
        'Red meat zyada matra mein — saturated fat se estrogen levels disturb hote hain',
        'Alcohol — liver ko affect karta hai jo hormones metabolize karta hai',
      ],
    },
    {
      _key: 'avd2',
      category: 'Inflammatory Foods',
      emoji: '⚠️',
      items: [
        'Processed/packaged food — artificial preservatives aur chemicals hormonal system disturb karte hain',
        'Fried food, fast food — trans fats se pelvic inflammation badh sakti hai',
        'Caffeine (chai-coffee limit karo) — cortisol raise karta hai jo ovarian function pe negative asar daalta hai',
      ],
    },
  ],

  seasonalCare: {
    summer: 'Garmi (March - June) — Hydration pe special focus — dehydration se hormonal stress badh sakta hai. Coconut water aur nimbu pani helpful. Tight clothing avoid karein — pelvic area mein heat aur pressure cyst discomfort badha sakta hai. Outdoor exercise early morning mein karein.',
    monsoon: 'Monsoon (July - September) — Infection risk zyada hoti hai — hygiene pe extra dhyan. Fried, bahar ka khana avoid karein. Damp environment mein fungal infections ka risk — cotton underwear use karein. Regular checkup miss mat karo is season mein — hormonal fluctuations monsoon mein common.',
    winter: 'Sardi (October - February) — Period pain sardi mein zyada feel hoti hai — warm compress pelvic area pe helpful. Vitamin D supplement ya dhoop — Vitamin D deficiency ovarian health ko directly affect karta hai. Indoor exercise maintain karein — yoga, walking. Hot water bottles se relief lein — muscle relaxation se cramping kam hoti hai.',
  },

  dos: [
    'Regular ultrasound monitoring karwate raho (3-6 mahine mein) — cyst ka size track karna treatment success ka proof hai',
    'Period diary rakho — date, pain level, flow — doctor ko accurate information milti hai',
    'Yoga aur light exercise regular karo — specifically Baddha Konasana, Supta Virasana, Child\'s pose — pelvic circulation improve hoti hai',
    'Stress kam karo genuinely — cortisol directly ovarian function disturb karta hai, meditation ya deep breathing daily 10 min karein',
    'Healthy weight maintain karo — obesity insulin resistance ke through cyst growth promote karta hai',
    'Homeopathic treatment consistent rakho — 2-3 mahine bina miss kiye lena zaroori hai, beech mein band mat karo',
    'Doctor se poochhe bina koi supplement (even herbal) mat lo — kuch herbs cysts ke saath react kar sakti hain',
  ],

  donts: [
    'Dard mein bhi diagnosis ke bina self-medicate mat karo — painkillers temporarily band karte hain, reason nahi',
    'Ultrasound report ko ignore mat karo — "cyst choti hai" bolke avoid mat karo, monitoring zaroori hai',
    'Sudden severe pelvic pain ko ghar pe mat raho — ye rupture ya torsion sign ho sakta hai, turant hospital jaao',
    'Tight undergarments ya synthetic fabric avoid karo — pelvic circulation restrict hoti hai',
    'Bhukhe rehna ya crash diet mat karo — hormonal balance aur bhi bigad jaata hai',
    'Sirf symptoms band hone pe treatment band mat karo — cyst completely resolve hui ya nahi, ultrasound se confirm karo',
    'Kisi ki dawai apne liye mat lo — even agar same symptoms lagein, homeopathic medicines strictly individualized hoti hain',
  ],

  ccrhEvidence: {
    improvementRate: '69%',
    avgTreatmentPeriod: '3-6 mahine functional/hormonal cysts mein',
    citation: 'CCRH — Clinical Research in Gynaecological Conditions | New Delhi | ccrhindia.nic.in',
    keyFindings: [
      'Functional cysts mein homeopathic treatment se 3-4 mahine mein ultrasound-confirmed resolution common',
      'Hormonal rebalancing se sirf cyst nahi, period irregularity bhi address hoti hai',
      'Recurrence rate kam — underlying hormonal pattern address hone se long-term control better',
    ],
  },

  homeopathyBenefits: [
    'Hormonal root cause address karta hai — sirf cyst dissolve nahi, cause bhi theek hota hai',
    'Surgery avoid ho sakti hai most functional/hormonal cysts mein — non-invasive approach',
    'Period irregularity, pain, aur bloating sab saath mein improve hote hain',
    'Teen ladkiyon mein particularly well responds — early intervention mein excellent results',
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Ovarian cyst kya hoti hai aur ye serious hai kya?',
      answer: 'Ovarian cyst andashay (ovary) mein ek fluid-bhari ganthi hai jo zyada cases mein benign (non-cancerous) hoti hai. India mein reproductive age ki approximately 7-10% mahilaon mein ye kabhi na kabhi hoti hai — aur kaafi baar without any symptom. Zyada cases serious nahi hote — functional cysts to 4-8 hafte mein apne aap resolve ho jaati hain. Lekin kuch types monitoring aur treatment chahti hain. Serious tab hoti hai jab cyst bahut badi ho, rupture ho jaaye, ya malignant ho — isliye diagnosis zaroori hai, panic nahi.',
    },
    {
      _key: 'faq2',
      question: 'Ovarian cyst ke symptoms kya hote hain — kaise pata chalega?',
      answer: 'Ovarian cyst ke common symptoms hain: ek taraf pelvic ya pet ke nichle hisse mein dard ya heaviness, irregular ya painful periods, sex ke waqt pain, bloating, aur kabhi kabhi frequent urination. Kai baar koi symptom hi nahi hota — routine ultrasound mein pata chalta hai. Agar achanak bahut tez dard aaye nausea aur vomiting ke saath — to ye cyst rupture ya torsion ka sign ho sakta hai. Is case mein turant doctor ke paas jaana chahiye.',
    },
    {
      _key: 'faq3',
      question: 'Ovarian cyst treatment — kya options hain?',
      answer: 'Ovarian cyst treatment ke teen main options hain: (1) Watchful waiting — functional cysts mein doctor monitor karte hain, often resolve ho jaati hai. (2) Medications — homeopathic treatment se cyst shrink ya resolve ho sakti hai. (3) Surgery (laparoscopy/laparotomy) — large, persistent, ya suspicious cysts mein. India mein bahut si mahilaen homeopathy ko first try karti hain kyunki ye hormonal rebalancing + cyst resolution dono karta hai surgery se pehle.',
    },
    {
      _key: 'faq4',
      question: 'Kya ovarian cyst bina surgery ke theek ho sakti hai?',
      answer: 'Haan — functional cysts (jo sabse common hain) often bina surgery ke theek ho jaati hain. Homeopathy is mein ek genuine option hai kyunki ye hormonal root cause address karta hai. 3-6 mahine ke regular treatment se cyst size reduce ho sakta hai aur symptoms better hote hain — ultrasound se confirm hota hai. Lekin dermoid cysts, large cystadenomas, ya koi bhi suspicious cyst — wahan surgery usually necessary hoti hai.',
    },
    {
      _key: 'faq5',
      question: 'PCOD aur ovarian cyst mein kya fark hai?',
      answer: 'Ye sabse common confusion hai. PCOD/PCOS ek hormonal disorder hai jisme dono ovaries mein multiple choti cysts hoti hain — yahan cyst symptom hai, condition nahi. Jabki single ovarian cyst alag bimari hai — ek cyst, ek ovary mein. PCOS mein irregular periods, weight gain, acne, aur insulin resistance ke saath aati hain. Single ovarian cyst mein ye sab zaroori nahi — sirf localized cyst hoti hai. Dono ka treatment different hota hai isliye proper diagnosis zaroori hai.',
    },
    {
      _key: 'faq6',
      question: 'Ovarian cyst pregnancy mein affect karti hai kya?',
      answer: 'Mostly functional cysts pregnancy ko affect nahi karti — in fact kuch cysts pregnancy ke pehle teen mahine mein apne aap resolve ho jaati hain. Lekin large cysts (5 cm se badi), dermoid, ya endometriomas fertility pe asar dal sakti hain — eggs release hone mein ya implantation mein problem ho sakti hai. Agar aap pregnant hona chahti hain to ovarian cyst ka treatment pehle zaroori hai. Homeopathy is case mein especially helpful hai kyunki ye fertility-preserving approach hai.',
    },
    {
      _key: 'faq7',
      question: 'Ovarian cyst mein periods irregular kyun hoti hain?',
      answer: 'Cyst hormonal balance bigad deti hai — especially estrogen aur progesterone ka ratio. Jab ye hormones imbalanced hote hain to periods delay, skip, ya irregular ho jaate hain. Kuch cysts (especially PCOS-related) andashay se egg release rok deti hain — jiske bina period regular nahi hoti. Homeopathic treatment mein hormonal rebalancing specifically address hota hai isliye period irregularity mein bhi relief milti hai saath mein.',
    },
    {
      _key: 'faq8',
      question: 'Ovarian cyst ki homeopathic medicine kaun si hai?',
      answer: 'Common homeopathic medicines mein Apis Mellifica (right-sided cyst, burning pain), Lachesis (left-sided, premenstrual worsening), Pulsatilla (irregular periods, mild nature), Colocynthis (severe cramping, left side), Lycopodium (right side, bloating), aur Thuja (dermoid ya slow-growing cysts) hain. Lekin ye generic list hai — aapki cyst ka size, type, location, symptoms aur nature milaakar ek qualified homoeopath hi sahi medicine decide kar sakta hai.',
    },
    {
      _key: 'faq9',
      question: 'Ovarian cyst kitne size tak without surgery manage ho sakti hai?',
      answer: 'Generally 5 cm se choti simple/functional cysts mein watchful waiting ya homeopathy se management possible hai. 5-10 cm — zyada monitoring chahiye, type aur symptoms pe depend karta hai. 10 cm se badi — usually surgery recommend hoti hai. Lekin size akela criterion nahi hai — type bhi matter karta hai. Dermoid ya suspicious cysts 3 cm ki honi pe bhi surgery consider karte hain. Final decision specialist ke saath lein apni ultrasound report dekhkar.',
    },
    {
      _key: 'faq10',
      question: 'Ovarian cyst rupture ho jaaye to kya hota hai?',
      answer: 'Cyst rupture — matlab cyst phoot jaana — mein achanak bahut tez pelvic pain aata hai, kuch cases mein nausea, vomiting, aur weakness bhi. Small ruptures apne aap resolve ho jaate hain. Lekin agar cyst badi thi ya hemorrhagic thi, to internal bleeding ho sakti hai — jo medical emergency hai. Symptoms: severe sudden pain, light-headedness, rapid heartbeat. Ye hone pe ghar pe mat raho — turant emergency mein jaao.',
    },
    {
      _key: 'faq11',
      question: 'Ovarian cyst mein konsa test/ultrasound karana chahiye?',
      answer: 'Diagnosis ke liye Transvaginal Ultrasound (TVS) sabse accurate hota hai — cyst ka size, type, aur character clearly dikh jaata hai. Abdominal ultrasound bhi hota hai. Blood tests mein CA-125 (cancer marker — especially 40+ age ya suspicious cysts mein), hormone panel (LH, FSH, AMH, testosterone — PCOS differentiate karne ke liye), aur CBC (anemia check) zaroor karo. Follow-up ultrasound 6-8 hafte baad treatment assess karne ke liye important hai.',
    },
    {
      _key: 'faq12',
      question: 'Ovarian cyst diet mein kya khana chahiye?',
      answer: 'Ovarian cyst diet mein anti-inflammatory aur hormone-balancing foods focus pe rakhen. Khaas taur pe: haldi, broccoli, palak, aur saag (anti-inflammatory), akhrot/flaxseeds (omega-3 se period pain kam hota hai), rajma/chana (fiber aur plant protein se insulin stable rehta hai), aur dahi (gut-hormone connection ke liye). Refined sugar, maida, processed food, aur zyada chai-coffee se bachein.',
    },
    {
      _key: 'faq13',
      question: 'Kya ovarian cyst wali mahila ko exercise karni chahiye?',
      answer: 'Haan, exercise zaroor karni chahiye — lekin type matter karta hai. Yoga specially recommended hai — Baddha Konasana, Child\'s Pose, aur Supta Virasana pelvic circulation improve karte hain. Walking (30 min daily) safe aur helpful hai. High-impact exercise (intense jumping, heavy lifting) avoid karo especially large cysts mein — torsion ka risk ho sakta hai. Regular moderate exercise insulin resistance kam karta hai, stress hormone cortisol ko regulate karta hai.',
    },
    {
      _key: 'faq14',
      question: 'Ovarian cyst mein pregnancy test positive aata hai kya?',
      answer: 'Ovarian cyst se pregnancy test positive nahi aata — dono alag cheezein hain. Haan, Corpus Luteum Cyst ek type hai jo pregnancy ke pehle teen mahine mein naturally banti hai aur apne aap resolve ho jaati hai — pregnancy ka sign nahi, uska part hai. Agar aapko periods miss hue hain aur ultrasound mein cyst bhi hai — doctor se milein kyunki ectopic pregnancy ka bhi risk ho sakta hai.',
    },
    {
      _key: 'faq15',
      question: 'Ovarian cyst se cancer ho sakta hai kya?',
      answer: 'Zyada cases mein ovarian cyst benign (non-cancerous) hoti hai aur cancer nahi hota. Lekin kuch risk factors hain jinhein seriously lena chahiye: 50+ age ke baad naye cysts, solid components wali ya complex cysts, rapidly growing cyst, ya family history mein ovarian cancer. CA-125 blood test ek marker hai lekin 100% conclusive nahi hota. Agar koi bhi suspicious feature ho to gynecologist se milein aur regular monitoring karayein.',
    },
    {
      _key: 'faq16',
      question: 'Ovarian cyst ki wajah se vomiting aur chakkar kyun aata hai?',
      answer: 'Agar cyst ke saath achanak vomiting, chakkar, ya behoshi aa rahi hai — ye serious sign hai. Possible reasons: cyst rupture ho gayi (internal bleeding), ya ovarian torsion (ovary twist ho gayi). Dono medical emergencies hain. Aisa hone pe ghar pe painkiller leke mat baitho — immediately hospital jaao. Aam halaton mein hormonal changes se mild nausea ho sakta hai jo serious nahi hota — lekin achanak severe nausea + pain ko kabhi ignore mat karo.',
    },
    {
      _key: 'faq17',
      question: 'Kya homeopathy se ovarian cyst permanently theek ho sakti hai?',
      answer: 'Permanent control bilkul possible hai — especially functional aur hormonal cysts mein. Sahi homeopathic treatment se sirf cyst dissolve nahi hoti, jo hormonal imbalance cyst ko baar baar banata hai wo bhi address hota hai. Isliye recurrence rate bhi kam hoti hai. Kai patients mein 3-6 mahine ke treatment mein complete resolution aur normal ultrasound aata hai. Dermoid ya structural cysts mein complete resolution guarantee nahi hai.',
    },
    {
      _key: 'faq18',
      question: 'Ovarian cyst mein periods delay hone pe kya karein?',
      answer: 'Ovarian cyst mein periods delay common hai — hormonal imbalance ki wajah se. Pehle pregnancy test karein (rule out karne ke liye). Phir doctor ko inform karein — bina proper diagnosis ke khud se periods induce mat karein. Homeopathic treatment mein Pulsatilla, Sepia, ya Lycopodium delayed periods ke saath ovarian issues mein kaam karte hain. Proper treatment se 1-3 months mein cycle regular hone lagti hai zyada cases mein.',
    },
    {
      _key: 'faq19',
      question: 'Teen ladkiyon ya bacchiyon mein ovarian cyst — kya normal hai?',
      answer: 'Adolescent girls mein ovarian cysts relatively common hain — zyatar follicular type ki hoti hain aur apne aap resolve ho jaati hain. Lekin agar 5 cm se badi ho, pain zyada ho, ya periods establish nahi ho rahi — to evaluation zaroori hai. Dermoid cysts young age mein bhi ho sakti hain. Good news ye hai ki teenage girls mein homeopathy bahut well respond karti hai — Pulsatilla is age group ki ek classic medicine hai.',
    },
    {
      _key: 'faq20',
      question: 'Ovarian cyst aur back pain — connected hai kya?',
      answer: 'Haan, large ovarian cysts back pain ka cause ban sakti hain — nerves aur structures pe pressure ki wajah se. Specifically lower back pain ya hip area mein dard ho sakta hai. Kuch cases mein sciatic nerve pe pressure se leg mein bhi pain jaata hai. Ye back pain period cycle ke hisaab se vary karta hai — periods ke pehle ya during zyada, periods ke baad kam. Agar aapko lower back pain ke saath irregular periods bhi hain — pelvic ultrasound zaroor karo.',
    },
    {
      _key: 'faq21',
      question: 'Ovarian cyst mein laparoscopy zaroori hai kya? Side effects kya hain?',
      answer: 'Laparoscopy tab zaroori hoti hai jab: cyst 10 cm se badi ho, persist ho 3 months ke baad bhi, suspicious/complex ho, ya severe symptoms ho. Ye minimally invasive surgery hai — bade cut nahi, jaldi recovery. Side effects: temporary bloating, shoulder pain (gas ka effect), fatigue kuch din. Long-term risk: scar tissue (adhesions) jo future fertility affect kar sakti hai — isliye young patients mein doctors conservative (non-surgical) approach pehle try karte hain.',
    },
    {
      _key: 'faq22',
      question: 'Ovarian cyst mein kaunse yoga asanas helpful hain?',
      answer: 'Ovarian cyst mein kuch yoga asanas specially helpful hain: Baddha Konasana (Butterfly Pose) — pelvic circulation improve karta hai. Child\'s Pose (Balasana) — lower back aur pelvic tension release karta hai. Supta Virasana — hormonal glands pe positive effect. Viparita Karani (Legs up the wall) — pelvic congestion reduce karta hai. Pranayama (deep breathing, Anulom Vilom) — cortisol levels balance karta hai. Avoid karein: intense core exercises, deep twists, high-impact poses.',
    },
    {
      _key: 'faq23',
      question: 'Kya weight loss se ovarian cyst theek ho sakti hai?',
      answer: 'Directly "weight loss se cyst theek ho jaayegi" ye nahi keh sakte, lekin weight loss PCOS-related cysts mein hugely helpful hai. Obesity se insulin resistance hoti hai, jo testosterone aur estrogen balance bigaadti hai — jisse cysts form ya worsen hoti hain. 5-10% body weight kam karne se bhi hormonal markers improve hote hain — periods regular hone lagte hain, cyst size reduce hoti hai kuch cases mein. Healthy weight + balanced diet + homeopathy — combined approach best results deta hai.',
    },
    {
      _key: 'faq24',
      question: 'Ovarian cyst mein sex karna safe hai kya?',
      answer: 'Choti functional cysts mein generally sex safe hai. Lekin kuch positions mein deep penetration se dard ho sakta hai — ye dyspareunia (sex mein pain) ovarian pressure ki wajah se hota hai. Large cysts (especially 5 cm se badi) mein sex ke waqt cyst rupture ka low risk hota hai — so caution zaroor rakhein. Apne doctor se honestly poochhen — ye zaroori medical information hai. Treatment se cyst resolve hone ke baad discomfort usually fully theek ho jaata hai.',
    },
    {
      _key: 'faq25',
      question: 'Ovarian cyst ke gharelu upay — kya ghar pe kuch kar sakte hain?',
      answer: 'Kuch supportive home measures helpful hain: (1) Warm compress (hot water bottle) pelvic area pe — muscle spasm aur cramping se relief milti hai. (2) Haldi wala doodh raat ko — curcumin anti-inflammatory hai. (3) Castor oil pack — traditional home remedy, pelvic circulation improve karna. (4) Stress reduction: yoga, deep breathing, adequate sleep. (5) Sugar aur maida band karo. Ye upay supportive hain — PRIMARY treatment replace nahi karte. Ultrasound se diagnosis aur doctor ki guidance ke saath hi gharelu upay karo.',
    },
  ],

  sources: [
    { _key: 's1', name: 'CCRH — Clinical Research in Gynaecological Conditions', url: 'ccrhindia.nic.in', year: '2022' },
    { _key: 's2', name: 'ACOG — Ovarian Cysts Practice Bulletin', url: 'acog.org', year: '2023' },
    { _key: 's3', name: 'NHS — Ovarian Cyst Information', url: 'nhs.uk', year: '2023' },
    { _key: 's4', name: 'WHO — Reproductive Health Data, Global Burden of Disease Study', url: 'who.int', year: '2022' },
    { _key: 's5', name: 'Journal of Minimally Invasive Gynecology — Conservative Management of Ovarian Cysts', url: 'jmig.org', year: '2021' },
    { _key: 's6', name: 'Indian Journal of Homoeopathic Medicine — Case Studies in Gynaecological Conditions', url: 'ijhm.org', year: '2020' },
  ],

  doctorNote: 'Clinic mein ovarian cyst ke zyada cases young unmarried mahilaon mein aate hain jo surgery se bahut darti hain — aur zyada functional type hoti hain jo homeopathy se 3-4 mahine mein ultrasound-confirmed resolve hui hain. Mera observation ye hai ki consistent treatment aur diet compliance jo patients karti hain, unme recurrence bhi bahut kam hoti hai. Ek cheez main zaroor bolti hoon — ek bhi ultrasound follow-up miss mat karo, results dekhe bina treatment adjust nahi ho sakti. — Dr. Shadab, Homeopedia.in',
}

async function seed() {
  console.log('Seeding Ovarian Cyst (Andashay Ki Ganthi)...')
  await client.createOrReplace(doc)
  console.log('✅ Done! disease-ovarian-cyst seeded.')
}

seed()
