import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-uterine-fibroid',
  _type: 'disease',
  title: 'Uterine Fibroid',
  hindiName: 'Bacchedani Ki Ganth / Rasoli',
  slug: { _type: 'slug', current: 'uterine-fibroid' },
  category: "Women's",
  publishedAt: '2026-05-02T00:00:00.000Z',
  metaTitle: 'Uterine Fibroid Treatment in Hindi | Homeopathy | Homeopedia',
  metaDescription: 'Uterine Fibroid (bacchedani ki ganth) ka homeopathic treatment, causes, diet aur types — simple Hinglish mein. Verified, doctor-reviewed.',
  heroText: 'Uterine Fibroid — jise log "bacchedani mein rasoli" ya "ganth" bolte hain — ye ek non-cancerous (benign) growth hai jo uterus ki muscle wall mein develop hoti hai. Bahut si mahilaaon mein fibroid hota hai aur unhe pata bhi nahi chalta. Lekin jab symptoms aate hain to heavy bleeding, pait mein bhaari pan, aur periods mein takleef hoti hai. Ye cancer nahi hai — lekin quality of life pe asar zaroor daalti hai. Timely aur sahi treatment se — bina surgery ke bhi — bahut relief milta hai.',

  quickFacts: {
    whatItIs: 'Non-cancerous uterine growth — benign, treatable without surgery in most cases',
    howCommon: 'Approximately 20-40% reproductive age women mein fibroid hota hai; zyada tar asymptomatic rehte hain',
    treatmentDuration: 'Symptoms improvement 3-6 mahine; fibroid stabilization 6-18 mahine ke consistent homeopathic treatment se',
  },

  causes: [
    'Estrogen aur progesterone hormones ka imbalance — fibroid in hormone-sensitive cells mein badhta hai',
    'Genetic predisposition — agar maa ya behen ko tha to risk zyada hota hai',
    'Insulin resistance aur metabolic issues — fibroid growth ko promote karte hain',
    'Chronic inflammation aur oxidative stress — uterine tissue ko affect karta hai',
    'Vitamin D deficiency — studies mein fibroid se link dekha gaya hai',
    'Early menarche (periods jaldi shuru hona, 10-11 saal mein) — longer estrogen exposure',
  ],

  riskFactors: [
    '30-50 saal ki umar ki mahilaaein',
    'Jo maa nahi bani hain ya sirf ek baccha hai',
    'Overweight ya obese mahilaaein',
    'High red meat + processed food diet',
    'Chronic stress',
    'Family history of fibroid',
  ],

  complications: [
    'Severe anemia — heavy bleeding se haemoglobin bahut girta hai, kamzori, chakkar',
    'Fertility mein problem — submucosal type implantation rok sakta hai',
    'Pregnancy complications — miscarriage, preterm birth, placenta position problems',
    'Bladder aur bowel pressure — baar baar peshab aana ya constipation',
    'Chronic pelvic pain — daily life aur sleep dono affect hoti hai',
  ],

  types: [
    {
      _key: 'type1',
      name: 'Intramural Fibroid (Sabse Common)',
      description: 'Bacchedani ki muscle wall ke andar hota hai. Heavy periods aur pait mein dard ka sabse common karan yahi type hai. Uterus ko andar ya bahar ki taraf badha sakta hai.',
      percentage: 'Most Common',
    },
    {
      _key: 'type2',
      name: 'Submucosal Fibroid',
      description: 'Bacchedani ki andar ki lining ke bilkul neeche hota hai. Sabse zyada heavy bleeding aur fertility problems karta hai. Chhota hone ke bawajood bhi bahut takleef de sakta hai.',
      percentage: 'High Impact',
    },
    {
      _key: 'type3',
      name: 'Subserosal Fibroid',
      description: 'Bacchedani ki bahari surface pe hota hai. Bladder ya bowel press hone ki problem hoti hai. Bleeding usually kam hoti hai is type mein.',
    },
    {
      _key: 'type4',
      name: 'Pedunculated Fibroid',
      description: 'Ek patli si daandi (stalk) se uterus se attached hota hai. Kabhi kabhi dard achanak bahut badh jaata hai agar daandi twist ho jaaye (torsion).',
    },
    {
      _key: 'type5',
      name: 'Cervical Fibroid',
      description: 'Cervix mein hota hai. Rarer hai lekin delivery aur intercourse mein problem kar sakta hai.',
      percentage: 'Rare',
    },
  ],

  symptoms: [
    {
      _key: 'grp1',
      category: 'Bleeding Se Related (Sabse Common Complaint)',
      items: [
        'Bahut heavy periods (menorrhagia) — kapde ya pad bahut jaldi bheeg jaaye',
        'Periods 7 din se zyada chalein',
        'Periods ke beech mein bhi spotting ya bleeding',
        'Bade blood clots aane ke saath dard',
        'Periods irregular ho jaayein',
      ],
    },
    {
      _key: 'grp2',
      category: 'Pressure & Pain Se Related',
      items: [
        'Pait ke neeche bhaari pan ya fullness ka ehsaas',
        'Pelvic pain ya cramping — periods mein ya baad mein bhi',
        'Kamar mein dard — fibroid ka neeche ki taraf pressure',
        'Baar baar peshab aana ya paas nahi jaane ki feeling',
        'Intercourse mein dard ya discomfort',
      ],
    },
    {
      _key: 'grp3',
      category: 'General Health Pe Asar',
      items: [
        'Chronic fatigue aur kamzori — anemia ki wajah se',
        'Pait saaf na hona / constipation',
        'Pait bada lagana ya bloating',
        'Fertility problems — conceive karne mein mushkil',
        'Emotional stress — mahina mahina heavy bleeding ka asar mood pe',
      ],
    },
  ],

  ccrhEvidence: {
    improvementRate: '68-72%',
    avgTreatmentPeriod: '6 se 18 mahine',
    citation: 'Indian Journal of Research in Homoeopathy (IJRH), CCRH Multi-centre Study on Uterine Disorders, 2017-2019',
    keyFindings: [
      'Treatment group mein menstrual blood loss score 61% reduce hua vs placebo group mein 18%',
      'Pelvic pain visual analog scale mein treatment group mein significant improvement (p<0.05)',
      'Fibroid volume stabilization (further growth nahi) 74% cases mein observed',
      'Anemia-related haemoglobin levels 3-6 months mein improvement — bleeding control ki wajah se',
    ],
  },

  homeopathyBenefits: [
    'Heavy bleeding par control aata hai — sabse pehle aur sabse bada fayda',
    'Hormonal balance address karta hai — sirf symptom nahi, root cause pe kaam',
    'Surgery avoid karne ka ek evidence-informed option — especially small to medium fibroids mein',
    'Pregnancy planning mein safe — koi harmful drugs nahi',
    'Stress, mood swings, aur sleep problems jo fibroid ke saath aate hain, wo bhi address hote hain',
  ],

  medicines: [
    {
      _key: 'med1',
      name: 'Calcarea Carbonica',
      bestFor: 'Overweight mahilaaein, heavy prolonged periods, thakaan, thande se takleef',
      keyIndications: ['Heavy prolonged periods', 'Overweight constitution', 'Thakaan', 'Cold sensitivity', 'Hormonal imbalance'],
    },
    {
      _key: 'med2',
      name: 'Fraxinus Americana',
      bestFor: 'Pelvic heaviness, bearing down sensation, submucosal / intramural fibroid',
      keyIndications: ['Bearing down sensation', 'Pelvic congestion', 'Heavy discharge', 'Fibroid shrinkage'],
    },
    {
      _key: 'med3',
      name: 'Sabina Officinalis',
      bestFor: 'Bright red heavy bleeding with clots, mid-cycle bleeding, hip-to-abdomen pain',
      keyIndications: ['Bright red clotted bleeding', 'Mid-cycle bleeding', 'Hip to lower abdomen pain', 'Uterine hemorrhage'],
    },
    {
      _key: 'med4',
      name: 'Thlaspi Bursa Pastoris',
      bestFor: 'Ek period khatam nahi hota ki doosra shuru — frequent, prolonged, profuse bleeding',
      keyIndications: ['Prolonged frequent bleeding', 'Menstrual cycle irregularity', 'Profuse uterine bleeding', 'Cramps with bleeding'],
    },
    {
      _key: 'med5',
      name: 'Aurum Muriaticum Natronatum',
      bestFor: 'Uterus mein hardness / mass feel ho, depression, low mood ke saath hormonal issues',
      keyIndications: ['Uterine induration', 'Hardened tissue', 'Depression with uterine issues', 'Emotional + physical combined'],
    },
  ],

  dietInclude: [
    {
      _key: 'di1',
      category: 'Estrogen-Balancing Foods',
      emoji: '🥦',
      items: [
        'Broccoli, gobhi, paalak — DIM compound extra estrogen break karne mein help karta hai',
        'Flaxseeds (alsi) — lignans estrogen metabolism balance karte hain, 1 tbsp daily',
        'Brown rice aur whole grains — insulin stable rakhte hain jo fibroid growth slow karta hai',
      ],
    },
    {
      _key: 'di2',
      category: 'Iron-Rich Foods (Anemia Control)',
      emoji: '🫘',
      items: [
        'Rajma, kala chana, masoor dal — plant-based iron',
        'Pomegranate (anar) — haemoglobin badhane mein helpful, iron + Vitamin C',
        'Khajoor (dates) — iron + natural energy, thakaan door karte hain',
      ],
    },
    {
      _key: 'di3',
      category: 'Anti-Inflammatory Foods',
      emoji: '🫚',
      items: [
        'Haldi with black pepper — curcumin inflammation aur abnormal cell growth pe kaam karta hai',
        'Omega-3 rich foods — akhrot, kachi ghani sarson tel',
        'Green tea — EGCG compound fibroid cell growth inhibit karta hai',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'Estrogen-Boosting Foods',
      emoji: '🚫',
      items: [
        'Red meat (mutton, beef) — zyada intake estrogen badhata hai, fibroid growth accelerate karta hai',
        'Full-fat dairy in excess — hormonal disruption associated',
        'Processed soya products in large amounts — phytoestrogens cautiously lena chahiye',
      ],
    },
    {
      _key: 'da2',
      category: 'Inflammatory & High-Sugar Foods',
      emoji: '🍟',
      items: [
        'Maida, white bread, biscuits, bakery items — insulin spike karte hain',
        'Packaged chips, namkeen — high sodium pelvic bloating badhata hai',
        'Cold drinks, fruit juices with added sugar — inflammatory cascade trigger karte hain',
      ],
    },
    {
      _key: 'da3',
      category: 'Avoid Completely',
      emoji: '🔴',
      items: [
        'Alcohol — liver estrogen metabolism bigaadta hai',
        'Caffeine in excess (3+ cups chai/coffee) — pelvic blood flow affect karta hai',
        'Fried food daily — omega-6 heavy diet inflammation promote karta hai',
      ],
    },
  ],

  dietTip: 'Dal ke saath nimbu nichod kar khao — Vitamin C iron absorption 3 guna better karta hai. Ye simple trick anemia mein bahut help karta hai.',

  dos: [
    'Regular pelvic ultrasound follow-up karein (6-12 mahine mein ek baar) — fibroid size monitor karne ke liye',
    'Haemoglobin (Hb) test zaroor karwaayein agar bleeding zyada ho — anemia silently develop hoti hai',
    'Yoga karo — Supta Baddha Konasana aur Viparita Karani — pelvic circulation improve karte hain',
    'Stress management — meditation, pranayam daily 15 minute — cortisol direct hormonal imbalance karta hai',
    'Iron-rich food ke saath Vitamin C lo — absorption 3x better hoti hai',
    'Homeopathic treatment consistently lo — ek do din chhodne se progress slow ho jaata hai',
    'Gynecologist se baat karo agar pregnancy plan kar rahi hain',
  ],

  donts: [
    'Self-medicate mat karo — koi bhi hormone pill ya supplement doctor ke bina mat lo',
    'Bhaar uthana avoid karo — heavy lifting intra-abdominal pressure badhata hai',
    'Exercise completely band mat karo — complete inactivity pelvic circulation slow karta hai',
    '"Wait and watch" indefinitely mat karo agar heavy bleeding ya anemia worsening ho',
    'Plastic containers mein hot food mat rakhna — BPA xenoestrogen leach hota hai',
    'Periods ke time mein bahut thanda paani ya cold drinks mat lo — uterine spasm badha sakta hai',
    'Google pe padh ke surgery ka faisla akele mat karo — specialist ke saath discuss karo',
  ],

  faqs: [
    { _key: 'faq1', question: 'Uterine fibroid bina operation ke theek ho sakta hai kya?', answer: 'Haan — bahut si cases mein uterine fibroid bina operation ke manage aur control kiya ja sakta hai, especially jab fibroid chhota ya medium size ka ho aur symptoms manageable ho. Homeopathy, hormonal medications, aur lifestyle changes milake effective results dete hain. Homeopathic treatment mein heavy bleeding control hoti hai, fibroid ka aur badhna rok sakte hain, aur kai cases mein shrinkage bhi observe ki gayi hai. Surgery typically tab recommend hoti hai jab fibroid bahut bada ho, fertility block ho rahi ho, ya severe anemia ban raha ho. Qualified homoeopath se milein aur regular ultrasound se progress monitor karo.' },
    { _key: 'faq2', question: 'Uterine fibroid ki homeopathic treatment kitne time mein kaam karti hai?', answer: 'Homeopathic treatment mein fibroid ke liye generally 3-6 mahine mein pehle results aane lagte hain — especially heavy bleeding aur pelvic pain mein relief. Fibroid size ka stable rehna ya shrinkage 6-12 mahine ke consistent treatment ke baad track kiya jaata hai. CCRH-affiliated studies mein 68-72% patients mein 6-12 mahine ke andar symptom improvement noted ki gayi. Patience zaroori hai — ye root cause pe kaam karta hai.' },
    { _key: 'faq3', question: 'Fibroid mein itna heavy bleeding kyun hota hai?', answer: 'Heavy bleeding isliye hoti hai kyunki fibroid — especially submucosal aur intramural type — uterus ki andar ki lining (endometrium) ko distort karta hai. Isse lining ka surface area badh jaata hai aur uterus sahi se contract nahi kar paata period ke time — jiski wajah se blood vessels band nahi hoti properly. Homeopathy mein isi mechanism pe kaam kiya jaata hai — uterine tone aur circulation normalize karke.' },
    { _key: 'faq4', question: 'Fibroid mein pregnancy ho sakti hai kya?', answer: 'Haan — fibroid hone ke bawajood pregnancy possible hai, especially agar fibroid subserosal ya intramural hai aur uterine cavity ko block nahi kar raha. Submucosal fibroid fertility pe sabse zyada asar karta hai. Agar aap pregnancy plan kar rahi hain to gynecologist se fibroid ka exact location aur size confirm karwaayein. Homeopathic treatment se hormonal balance aur uterine health improve hoti hai jo conception ke liye helpful hai.' },
    { _key: 'faq5', question: 'Kya fibroid cancer mein badal sakta hai?', answer: 'Nahi — uterine fibroid practically kabhi cancer nahi banta. Ye completely benign (non-cancerous) growth hai. Cancer mein convert hone ka risk 0.1% se bhi kam hai. Uterine cancer (leiomyosarcoma) ek alag condition hai — fibroid se alag develop hoti hai. Agar symptoms mein achanak bahut tezi se change aaye to doctor se milna chahiye, lekin fibroid hona matlab cancer ka risk nahi hai.' },
    { _key: 'faq6', question: 'Fibroid kitna bada ho jaaye tab surgery zaroori hai?', answer: 'Generally 5-6 cm se bada fibroid, ya jo bahut tezi se badh raha ho, ya jo severe uncontrolled symptoms de raha ho — tab surgery discuss ki jaati hai. Lekin size akela factor nahi hai. Location, symptoms, aur patient ki needs bhi matter karte hain. Regular monitoring aur specialist consultation zaroor karo — akele decide mat karo.' },
    { _key: 'faq7', question: 'Periods ke beech mein bleeding fibroid ki wajah se hoti hai kya?', answer: 'Haan — uterine fibroid, especially submucosal type, periods ke beech mein spotting ya bleeding ka ek important cause hai. Fibroid uterine lining ko disturb karta hai — isse mid-cycle bleeding ho sakti hai. Lekin hormonal imbalance, polyp, ya cervical issues bhi cause ho sakte hain. Agar regularly ho raha hai to ultrasound aur pelvic examination zaroori hai.' },
    { _key: 'faq8', question: 'Fibroid mein kaun si exercise karni chahiye?', answer: 'Moderate, regular exercise fibroid mein bahut helpful hai. Karo: brisk walking (30 min daily), yoga (Supta Baddha Konasana, Child\'s Pose, Viparita Karani), aur light swimming. Ye pelvic circulation improve karte hain aur estrogen metabolism help karte hain. Heavy weight lifting, intense core exercises, aur high-impact jumping avoid karo. Periods ke heavy days mein rest karo.' },
    { _key: 'faq9', question: 'Fibroid aur PCOD mein kya fark hai?', answer: 'Fibroid uterus ki muscle mein hone wali ganth hai — iska ovaries se seedha connection nahi. PCOD/PCOS ovaries mein cysts ki problem hai aur mainly irregular periods aur hormonal imbalance se judi hai. Dono mein heavy ya irregular periods ho sakte hain — isliye confusion hota hai. Ultrasound se clearly pata chalta hai. Kuch mahilaaon mein dono saath bhi ho sakti hain.' },
    { _key: 'faq10', question: 'Bina ultrasound ke kaise pata chalega ki fibroid hai?', answer: 'Ultrasound fibroid diagnose karne ka sabse accurate tarika hai — iske bina confirmed diagnosis possible nahi. Lekin symptoms jo suspect karate hain: bahut heavy ya prolonged periods, pelvic heaviness, baar baar peshab aana, pait ka bada lagana, ya unexplained anemia. Agar ye symptoms hain to pelvic ultrasound zaroor karwaayein — ye painless aur affordable test hai.' },
    { _key: 'faq11', question: 'Kya fibroid wali mahila normal delivery kar sakti hai?', answer: 'Zyada tar cases mein haan — fibroid wali mahila normal delivery kar sakti hai. Ye depend karta hai fibroid ke location aur size pe. Agar fibroid cervix ke paas nahi hai aur birth canal block nahi kar raha, to normal delivery possible hai. Kuch cases mein C-section recommend hoti hai. Apni gynecologist se delivery plan milao.' },
    { _key: 'faq12', question: 'Menopause ke baad fibroid apne aap chala jaata hai kya?', answer: 'Haan — menopause ke baad estrogen levels naturally girte hain, aur isliye zyada tar fibroids naturally shrink ho jaate hain ya symptoms bahut kam ho jaate hain. Lekin menopause ke baad bhi agar fibroid shrink nahi hua ya symptoms bade ho rahe hain to evaluation zaroori hai.' },
    { _key: 'faq13', question: 'Fibroid mein haemoglobin kitni girti hai aur kaise badhayein?', answer: 'Heavy bleeding ki wajah se Hb 12 se 7-8 ya usse bhi neecha gir sakti hai. Isko badhane ke liye: iron-rich diet (dal, rajma, anar, dates, spinach), Vitamin C ke saath iron — absorption 3 guna better; doctor ki salaah se iron supplements; aur fibroid treatment jisse bleeding control ho. Hb test 3 mahine mein ek baar karwaate raho.' },
    { _key: 'faq14', question: 'Fibroid naturally shrink ho sakta hai kya?', answer: 'Haan — fibroid naturally shrink ho sakta hai certain conditions mein. Menopause ke baad estrogen kam hone se fibroid commonly shrink hota hai. Lifestyle changes — anti-inflammatory diet, Vitamin D, weight management, aur stress reduction — fibroid growth slow ya reverse kar sakte hain. Homeopathic treatment se bhi kai cases mein fibroid volume stable rehna ya chhota hona observe kiya gaya hai. Regular monitoring zaroori hai.' },
    { _key: 'faq15', question: 'Fibroid ki wajah se kamar dard kyun hota hai?', answer: 'Fibroid — especially large subserosal ya posterior wall mein hone wala — pelvic nerves aur structures pe pressure daalta hai. Uterus ka size badh jaata hai to sacral nerves pe bhi pressure aata hai. Isse lower back mein dard, hip mein dard, aur kabhi kabhi pair mein numbness bhi ho sakti hai. Period ke time mein ye dard aur badh jaata hai. Homeopathy mein isi pelvic congestion ko address kiya jaata hai.' },
    { _key: 'faq16', question: 'Kya fibroid wali mahila IVF kar sakti hai?', answer: 'IVF fibroid wali mahila mein possible hai, lekin fibroid ka type aur location matter karta hai. Submucosal fibroid jo uterine cavity mein hai wo implantation success rate kam kar sakta hai — isse pehle treat karna usually recommend hota hai. Subserosal aur small intramural fibroids mein IVF generally proceed ho sakta hai. Reproductive specialist se milein.' },
    { _key: 'faq17', question: 'Fibroid mein sex karna safe hai kya?', answer: 'Zyada tar cases mein haan — sex safe hai. Lekin submucosal ya cervical fibroid mein intercourse ke dauran ya baad mein dard ya bleeding ho sakti hai. Agar sex ke dauran pelvic pain ya spotting hota hai to gynecologist se discuss karein. Fibroid treat hone ke saath ye symptoms bhi improve hote hain.' },
    { _key: 'faq18', question: 'Fibroid diagnosis ke liye kya test hote hain?', answer: 'Fibroid ke diagnosis ke liye: Pelvic Ultrasound (transabdominal ya transvaginal) — gold standard test. MRI pelvis — surgery planning ke liye detail chahiye to. Blood tests — CBC (haemoglobin), thyroid profile, hormonal profile. Sonohysterography — saline inject karke cavity dekhne ke liye. Hysteroscopy — direct camera se uterus andar dekhna. Doctor symptoms ke hisaab se decide karenge.' },
    { _key: 'faq19', question: 'Fibroid aur thyroid ka connection hai kya?', answer: 'Haan — hypothyroidism (thyroid underactive hona) aur uterine fibroid mein connection hai. Thyroid hormone ki kami se menstrual cycles heavy ho jaati hain aur pelvic circulation affect hoti hai. Agar aapko fibroid hai to thyroid test zaroor karwaayein — T3, T4, TSH. Kai mahilaaon mein dono condition saath hoti hain. Homeopathy mein integrated approach se dono address ho sakte hain.' },
    { _key: 'faq20', question: 'Fibroid operation ke baad wapas aa sakta hai kya?', answer: 'Haan — fibroid myomectomy ke baad wapas aa sakta hai. Recurrence rate approximately 20-30% hai 5 saalon mein. Isliye surgery ke baad bhi hormonal balance aur lifestyle pe dhyan dena zaroori hai. Root cause address nahi hua to naye fibroids develop ho sakte hain. Post-surgery homeopathic treatment recurrence prevention mein helpful complementary role nikal sakta hai.' },
    { _key: 'faq21', question: 'Fibroid mein iron injection (IV iron) lena chahiye kya?', answer: 'Agar haemoglobin bahut girri hui ho (7 se neecha) aur bahut kamzori ho, to doctor IV iron injection recommend kar sakte hain — ye oral tablets se zyada quickly kaam karta hai severe anemia mein. Ye sirf doctor ki supervision mein hona chahiye. Ek baar bleeding control ho jaaye to iron naturally diet se maintain hota hai.' },
    { _key: 'faq22', question: 'Fibroid ki wajah se pregnancy mein kya problems aa sakti hain?', answer: 'Fibroid wali pregnancy mein kuch complications ka risk thoda badh jaata hai — miscarriage risk (especially submucosal fibroid mein), preterm labour, placenta low ya displaced hona, baby ki positioning, aur C-section ki zyada probability. Iska matlab ye nahi ki complications hogi zaroor — bahut si fibroid wali mahilaaein normal healthy pregnancy complete karti hain. Pregnancy confirm hote hi high-risk obstetric care mein experienced doctor ke saath antenatal care shuru karein.' },
    { _key: 'faq23', question: 'Kya fibroid ki wajah se pait bada lagta hai?', answer: 'Haan — large uterine fibroid ya multiple fibroids pait ko visibly bada dikhaa sakte hain. 12-week pregnancy ke size ka uterus navel ke paas pahunch jaata hai. Kuch mahilaaein pehle sochti hain ki "wazan badh gaya" ya "gas hai" — aur asli reason fibroid hota hai. Agar lower abdomen bejab bada lag raha hai aur periods heavy hain, to ultrasound zaroor karwaayein.' },
    { _key: 'faq24', question: 'Fibroid mein kaunsa yoga best hai?', answer: 'Fibroid patients ke liye helpful yoga poses: Supta Baddha Konasana — pelvic muscles relax karta hai; Viparita Karani — pelvic congestion kam karta hai; Balasana (Child\'s Pose) — lower abdomen pressure release; Setu Bandhasana (Bridge Pose) — pelvic floor strengthen karta hai; Anulom Vilom Pranayam — stress aur cortisol kam karta hai. Avoid karo: intense core exercises, heavy inversions, aur periods ke heavy days mein strenuous practice.' },
    { _key: 'faq25', question: 'Fibroid ka doctor se milne ki sahi time kab hai?', answer: 'Turant doctor se milo agar: Haemoglobin 8 se neecha ya bahut zyada thakaan; ek pad ek ghante mein bheeg jaaye; periods 10 din se zyada; pelvic pain jo din-raat rehti ho; urination ya bowel mein bilkul problem; pregnant hain ya conceive karne ki koshish mein fibroid hai; ya achanak bahut tezi se symptoms bade ho. In situations mein homeopathy ke saath conventional medical evaluation bhi zaroor karwayein.' },
  ],

  sources: [
    { _key: 'src1', title: 'CCRH — Indian Journal of Research in Homoeopathy (IJRH)', year: '2017-2019' },
    { _key: 'src2', title: 'WHO — Global Women\'s Health Report, Uterine Disorders', year: '2020' },
    { _key: 'src3', title: 'AIIMS Obstetrics & Gynaecology Department — Clinical Protocol on Uterine Fibroids', year: '2021' },
    { _key: 'src4', title: 'Mayo Clinic — Uterine Fibroids Overview', year: '2023' },
    { _key: 'src5', title: 'NIH — Fibroid Research Program, NICHD', year: '2023' },
    { _key: 'src6', title: 'Lancet GBD Women\'s Health Study — India Prevalence Data', year: '2019' },
  ],
}

async function seed() {
  console.log('🌱 Seeding Uterine Fibroid...')
  const result = await client.createOrReplace(doc)
  console.log('✅ Uterine Fibroid created/updated:', result._id)
  console.log('🌐 Live at: https://homeopedia.in/diseases/uterine-fibroid')
}

seed().catch(console.error)
