import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-dysmenorrhoea',
  _type: 'disease',
  title: 'Dysmenorrhoea',
  hindiName: 'Maasik Dard / Period Dard / Masik Dharma Ka Dard',
  slug: { _type: 'slug', current: 'dysmenorrhoea' },
  category: "Women's Health",
  publishedAt: '2026-05-03T00:00:00.000Z',
  metaTitle: 'Dysmenorrhoea – Period Pain Treatment & Homeopathy | Homeopedia',
  metaDescription: 'Period pain (dysmenorrhoea) ka permanent relief – causes, types, homeopathic treatment, diet chart aur lifestyle guide. Doctor-reviewed, verified info.',

  heroText: 'Dysmenorrhoea matlab periods ke time hone wala dard – jo sirf "thoda takleef" nahi hota, balki kai ladkiyon aur mahilaon ke liye itna tez hota hai ki school, office ya ghar ka kaam band ho jaata hai. Ye India mein ek bahut common problem hai lekin log isse "normal" samajhke chhod dete hain – jo galat hai. Is dard ki do main types hoti hain: ek wo jo koi underlying bimari ke bina aati hai (Primary Dysmenorrhoea), aur ek wo jo kisi aur problem ki wajah se hoti hai jaise endometriosis ya fibroids (Secondary Dysmenorrhoea). Homeopathy is condition mein isliye effective hai kyunki ye sirf dard band nahi karta – balki uterus ki sensitivity, hormonal imbalance, aur bimari ki root cause ko address karta hai.',

  quickFacts: {
    whatItIs: 'Periods ke time uterine cramping aur dard – mild discomfort se alag, ye treatable condition hai jo millions of Indian women ko affect karti hai',
    howCommon: 'Lagbhag 50-90% menstruating women in India kuch degree of period pain report karti hain; 15-20% mein severe form hota hai jo daily activities disrupt kare',
    treatmentDuration: 'Homeopathic treatment mein typically 3-6 cycles mein improvement; complete relief ke liye 6-12 months',
    successRate: 'CCRH clinical study mein treatment group mein VAS pain score 7.2 se 2.8 par aaya – jabki placebo group mein sirf 7.1 se 5.9 par ruka',
  },

  causes: [
    'Prostaglandins ka zyada banana – ye chemicals uterus ko contract karte hain, zyada ho to cramping tez hoti hai (primary type mein main cause)',
    'Hormonal imbalance – estrogen aur progesterone ratio mein problem, irregular ovulation',
    'Endometriosis ya adenomyosis – uterine lining ka abnormal growth, secondary type ka common cause',
    'Uterine fibroids ya polyps – physical obstruction se blood flow aur dard dono affect',
    'Pelvic Inflammatory Disease (PID) – chronic infection se uterus aur tubes inflamed rehna',
    'Cervical stenosis – cervix ka narrow hona, blood flow properly na hona, pressure build-up',
    'PCOD – irregular cycles aur hormonal fluctuations se prostaglandin surge',
    'Nutritional deficiencies – khaaskar magnesium, vitamin D, aur omega-3 ki kami',
  ],

  riskFactors: [
    'Early menarche (11 saal se pehle periods shuru hona) – earlier onset, zyada risk',
    'Family history – maa ya behen ko bhi severe period pain ho to risk zyada',
    'Smoking karne wali women – prostaglandin levels badhata hai, pain worse karta hai',
    'Sedentary lifestyle – exercise bilkul na karna, blood circulation poor rehna',
    'High stress, anxiety – pain perception significantly badh jaati hai chronic stress mein',
    'Obesity ya underweight dono – hormonal balance affect hota hai dono extremes mein',
    'IUD (Copper T) use – especially pehle 3-6 months mein cramping zyada hoti hai',
    'Diet mein processed food, trans fats zyada aur fruits-vegetables kam – inflammation badhti hai',
  ],

  complications: [
    'Quality of life par serious impact – school, college, office miss karna, social withdrawal, depression ke signs',
    'Underlying condition ka advance hona – endometriosis ya fibroids ka waqt pe diagnose na hona future fertility affect kar sakta hai',
    'Chronic pelvic pain mein convert hona – pain sirf periods tak seema nahi rehta, non-period days mein bhi aata hai',
    'Mental health pe asar – severe chronic pain se anxiety aur depression ka real risk badhta hai',
  ],

  types: [
    {
      _key: 'type1',
      name: 'Primary Dysmenorrhoea',
      description: 'Sabse common type – especially teenage girls aur young women mein. Isme koi underlying uterine disease nahi hoti. Dard prostaglandins ke zyada banne se hota hai jo uterus ko strongly contract karta hai. Period shuru hone ke 1-2 din pehle ya pehle din shuru hota hai, usually 48-72 ghante mein theek ho jaata hai. Age ke saath ya delivery ke baad aksar better ho jaata hai. Homeopathy is type mein sabse effective hai – Magnesia Phosphorica, Colocynthis, Viburnum Opulus common choices hain.',
    },
    {
      _key: 'type2',
      name: 'Secondary Dysmenorrhoea',
      description: 'Isme dard kisi underlying condition ki wajah se aata hai – endometriosis, uterine fibroids, adenomyosis, PID, PCOD, ya IUD use. Ye zyada concerning type hai. Dard period se kaafi pehle (1 week bhi) shuru ho sakta hai, zyada intense aur long-lasting hota hai, age ke saath worse hota jaata hai (primary ke opposite). Agar dard 25-30 saal ke baad suddenly badhe ya period ke alawa bhi pelvic pain ho – turant gynaecologist se milein. Homeopathy mein Sepia, Pulsatilla, Lachesis deeper level pe kaam karti hain.',
    },
    {
      _key: 'type3',
      name: 'Membranous Dysmenorrhoea (Rare)',
      description: 'Is type mein uterine lining ke pieces period blood ke saath nikalne ki koshish karte hain – jisse bahut tez cramping hoti hai. Ye relatively rare hai lekin bahut painful hoti hai. Passing of membrane-like tissue ke saath severe spasmodic pain is type ki pehchaan hai. Proper diagnosis aur specialist evaluation zaroori hai is type mein.',
    },
    {
      _key: 'type4',
      name: 'Congestive Dysmenorrhoea',
      description: 'Period se 1-2 din pehle shuru hone wala dull, heavy type dard – pelvic heaviness, bloating, aur lower back pain ke saath. Actual flow shuru hone par dard thoda better ho jaata hai. Ye congestion-type dysmenorrhoea hai jisme blood circulation aur pelvic drainage main issue hoti hai. Sepia aur Pulsatilla is pattern ke liye commonly indicated hain homeopathy mein.',
    },
  ],

  symptoms: [
    {
      _key: 'sym1',
      category: 'Dard Ke Types (Pain Symptoms)',
      items: [
        'Lower abdomen mein cramping – period shuru hone se 1-2 din pehle ya saath mein shuru hota hai',
        'Dard jo thighs aur lower back tak phailta hai – radiation pattern, secondary type mein zyada',
        'Spasmodic pain – aata jaata rehta hai, waves mein aata hai, prostaglandins ke bursts se',
        'Dull aching pain throughout the day – khaaskar congestive type mein, lagatar bana rehta hai',
        'Pelvic pressure aur heaviness ka feeling – jaise andar kuch bhaari ho',
      ],
    },
    {
      _key: 'sym2',
      category: 'Associated Physical Symptoms',
      items: [
        'Nausea aur kabhi kabhi vomiting – prostaglandins gut ko bhi affect karte hain',
        'Loose motions ya diarrhoea – periods ke pehle din common, prostaglandin effect',
        'Headache ya migraine – hormonal fluctuation se, khaaskar periods ke pahle din',
        'Bloating aur gas – abdomen mein fullness jo already cramping ko worse karta hai',
        'Fatigue aur kamzori – especially heavy flow ke saath, iron loss se',
        'Breast tenderness (mastalgia) – period se pehle hormonal changes se',
      ],
    },
    {
      _key: 'sym3',
      category: 'Emotional / Pre-Menstrual Symptoms',
      items: [
        'Irritability aur mood swings – period se 2-7 din pehle, progesterone drop se',
        'Anxiety ya low mood – especially progesterone fall ke time, PMS overlap',
        'Concentration mein problem – brain fog, kaam ya padhai mein dhyan nahi lagta',
        'Sleep disturbance – discomfort aur dard se neend poori nahi hoti',
      ],
    },
  ],

  ccrhEvidence: {
    improvementRate: 'Treatment group mein VAS pain score 7.2 se ghata 2.8 par aaya – placebo group mein sirf 7.1 se 5.9 par ruka',
    avgTreatmentPeriod: '3 se 6 menstrual cycles mein noticeable improvement; root cause treatment ke liye 6-12 months recommended',
    citation: 'CCRH (Central Council for Research in Homoeopathy) – "A Multicentre Clinical Verification Study on Dysmenorrhoea" | Indian Journal of Research in Homoeopathy | 2017-2018 | ccrhindia.nic.in',
    keyFindings: [
      'Treatment group mein VAS (Visual Analogue Scale) pain score mein statistically significant reduction – placebo group ke comparison mein',
      'NSAIDs (painkiller) ki zaroorat in patients mein treatment period ke dauraan markedly kam hui',
      'Cycle regularity aur flow character mein bhi improvement observed ki gayi',
      'Quality of life scores (daily activity, work capacity, absenteeism) mein measurable gain dekha gaya',
    ],
  },

  homeopathyBenefits: [
    'Homeopathy dysmenorrhoea mein ye samjhta hai ki aapka dard kaisa hai, kab hota hai, kya se better ya worse hota hai – sirf dard band karne ki koshish nahi karta',
    'Prostaglandin sensitivity, hormonal balance, aur uterine spasms – teeno pe simultaneously kaam hota hai – ye ek dimension pe kaam karne wale painkillers se fundamentally alag approach hai',
    'Regular treatment ke baad aksar cycles naturally better hone lagti hain – body khud apni prostaglandin response regulate karne lagti hai',
    'Individualized treatment – cramping hai ya dull aching, left side hai ya right, heat se better ya worse – ye sab medicine selection mein matter karta hai',
    'Hormonal cycle ko gently regularize karne mein madadgar – synthetic hormones ya contraceptive pills ke bina',
    'PCOD + dysmenorrhoea combo cases mein constitutional medicines dono conditions pe ek saath kaam karti hain',
    'Teenagers ke liye specially safe – no side effects, no hormonal interference, growing body ke liye ideal',
  ],

  medicines: [
    {
      _key: 'med1',
      name: 'Magnesia Phosphorica',
      bestFor: 'Cramping, spasmodic dard jo warm application (hot water bag) se significantly better ho, aur pressure ya doubling up (aage jhukne) se relief mile. Primary dysmenorrhoea ki sabse common presentation.',
      keyIndications: [
        'Cramping dard jo heat se dramatically better – hot water bag lagao to relief',
        'Doubling up ya abdomen pe pressure se better – forward bend karne se aaram',
        'Spasmodic, wave-type pain – aata jaata rehta hai, sudden onset',
      ],
    },
    {
      _key: 'med2',
      name: 'Colocynthis',
      bestFor: 'Bahut tez cramping dard jo forward bend karne ya abdomen pe pressure dene se better ho, irritability ke saath, typically sudden onset wala dard. Magnesia Phos se compare kiya jaata hai – dono heat + pressure better, lekin Colocynthis mein anger/irritability zyada prominent.',
      keyIndications: [
        'Extreme cramping – bilkul Mag Phos jaisa lekin anger aur irritability prominent',
        'Abdomen ko haath se dabane ya ghutne mein daba lene se better',
        'Sudden, violent cramping – alag alag waves mein, rest ke beech bhi dard',
      ],
    },
    {
      _key: 'med3',
      name: 'Pulsatilla',
      bestFor: 'Irregular, shifting pain – kabhi yahan kabhi wahan; emotional, weepy nature; zyada chalne phirne ya fresh air se thoda better; late ya scanty periods ke saath dysmenorrhoea. PCOD-associated cases mein bhi frequently indicated.',
      keyIndications: [
        'Shifting, changeable pain – ek jagah nahi rehta, nature bhi changing',
        'Scanty ya late periods ke saath – cycle irregular, flow thoda',
        'Weepy, emotional, warmth se worse – room mein daba mahsoos karna',
      ],
    },
    {
      _key: 'med4',
      name: 'Sepia',
      bestFor: 'Bearing down sensation – jaise sab kuch bahar aa jaayega; exhaustion aur indifference; periods late aur painful; irritability zyada lekin weeping nahi; lower back dard ke saath. Secondary dysmenorrhoea especially adenomyosis ya hormonal imbalance cases mein.',
      keyIndications: [
        'Bearing down pelvic sensation – jaise sab kuch neeche khich raha ho',
        'Extreme exhaustion aur indifference – kuch karne ka mann nahi, sab se alag rehna chahti hain',
        'Late, painful periods + lower back dard + hormonal burnout pattern',
      ],
    },
    {
      _key: 'med5',
      name: 'Viburnum Opulus',
      bestFor: 'Cramp-like dard jo thighs tak utar jaaye, period aane se pehle shuru ho aur flow ke saath better ho, occasional faintness ke saath. Radiation of pain aur pre-menstrual onset is medicine ka key signature hai.',
      keyIndications: [
        'Dard thighs tak radiate kare – characteristic radiation pattern',
        'Period shuru hone SE PEHLE zyada dard – flow aane ke baad better',
        'Faintness ya weakness ke saath cramping – severe cases mein',
      ],
    },
  ],

  dietInclude: [
    {
      _key: 'di1',
      category: 'Anti-Inflammatory Foods',
      emoji: '🥗',
      items: [
        'Haldi (turmeric) wala doodh – curcumin prostaglandin production naturally kam karta hai; daily lena beneficial',
        'Adrak (ginger) ki chai – powerful natural anti-inflammatory; period ke time nausea bhi kam karta hai',
        'Palak, methi, sarson saag – iron aur magnesium dono; blood loss aur cramping dono address hota hai',
        'Flaxseeds (alsi) – omega-3 fatty acids jo prostaglandin balance karte hain; roz 1 tbsp lein',
      ],
    },
    {
      _key: 'di2',
      category: 'Magnesium-Rich Foods',
      emoji: '🌰',
      items: [
        'Kela (banana) – magnesium + potassium; muscle cramps mein direct relief',
        'Badam aur akhrot – magnesium se bharpoor; hormonal health ke liye zaroori',
        'Dark chocolate (70%+ cocoa) – magnesium source; mood bhi better karta hai – thoda khao, period ke time natural comfort',
        'Rajma, chole, masoor dal – magnesium aur B-vitamins dono ek saath',
      ],
    },
    {
      _key: 'di3',
      category: 'Hormonal Balance Foods',
      emoji: '🥬',
      items: [
        'Broccoli, gobhi, patta gobhi – indole-3-carbinol jo estrogen metabolism theek rakhta hai; secondary dysmenorrhoea mein helpful',
        'Dahi aur lassi (probiotic) – gut health + hormonal balance; periods ke time digestion disturbed hoti hai',
        'Til (sesame seeds) – phytoestrogens naturally cycle ko support karte hain',
        'Aam, amrud, santra – vitamin C jo iron absorption badhata hai aur inflammation kam karta hai',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'Inflammatory Foods',
      emoji: '🚫',
      items: [
        'Maida aur processed food (biscuit, namkeen, chips) – inflammation badhata hai aur bloating worse karta hai',
        'Refined sugar – prostaglandin production badhata hai, mood swings aur cramps dono worse karta hai',
        'Fried food (samosa, poori, deep fry) – trans fats prostaglandin dysregulation karte hain',
      ],
    },
    {
      _key: 'da2',
      category: 'Hormonal Disruptors',
      emoji: '⚠️',
      items: [
        'Dairy zyada (full fat milk, cream, paneer excess) – arachidonic acid prostaglandin synthesis badhata hai; dard worse ho sakta hai',
        'Soya products excess – phytoestrogen overload; secondary dysmenorrhoea mein especially avoid karein',
        'Alcohol – prostaglandin levels badhata hai aur liver estrogen clearance affect karta hai',
      ],
    },
    {
      _key: 'da3',
      category: 'Bloating aur GI Triggers',
      emoji: '🔴',
      items: [
        'Caffeine (chai, coffee, cola) – uterine contractions aur anxiety dono badhata hai periods ke time; limit zaroor karein',
        'Carbonated drinks – gas aur bloating seriously badhata hai period ke time, jo cramps ko worse karta hai',
        'Thanda paani aur ice cream – vasoconstriction se cramping worse hoti hai, warm cheezein prefer karein',
      ],
    },
  ],

  dos: [
    'Period se 2-3 din pehle se hot water bag use karna shuru karein – blood circulation theek rehti hai aur spasm anticipate karne ke pehle hi address hota hai',
    'Regular exercise karo – especially periods ke beech ke dino mein yoga, walking, swimming; endorphins natural pain relievers hain',
    'Magnesium aur vitamin D levels check karaao – deficiency period pain ka major hidden cause hai, supplement karein doctor ke under',
    'Stress management seriously lo – meditation, deep breathing, journaling; cortisol dysmenorrhoea ko seriously worse karta hai',
    'Periods ka diary rakho – kab dard aaya, kaisa tha, kya khaya tha – pattern samajhne se doctor ko bhi aur aapko bhi madad milti hai',
    'Timely homeopathic treatment shuru karo – 3-6 cycles mein difference clearly dikhai deta hai agar proper constitutional medicine mili ho',
    'Gynae checkup karaao agar dard 25+ saal ki umar mein suddenly badha ho – underlying cause rule out karna zaroori hai',
  ],

  donts: [
    'Period pain ko "normal" keh ke ignore mat karo – mild discomfort alag baat hai, lekin kaam band ho jaaye aisa dard normal nahi aur treatable hai',
    'Har baar painkiller (mefenamic acid, ibuprofen) mat lo – long term NSAIDs se gut lining damage, kidney issues aur paradoxically worse dysmenorrhoea ho sakta hai',
    'Cold drinks aur ice cream period ke dino mein mat lo – vasoconstriction se cramps worse hoti hain',
    'Periods ke time tight jeans ya synthetic tight leggings mat pehno – blood circulation restrict hoti hai aur discomfort badhta hai',
    'Endometriosis ya fibroids ka doubt ho aur diagnose na karwa lo – delay se fertility affect ho sakti hai',
    'Self-medicate mat karo homeopathy mein bhi – bina qualified doctor ke medicines mat leni, especially agar pregnant ho ya try kar rahi ho',
  ],

  seasonalCare: {
    winter: 'Sardion mein blood circulation naturally slow hota hai aur muscles stiffen hoti hain – period cramps winter mein zyada intense feel ho sakti hain. Period ke din garme kapde pehno, lower abdomen aur lower back covered rakho. Hot water bag ka use regularly karein. Warm liquids zyada – methi dana chai, ginger tea, warm haldi doodh. Cold water se bath avoid karein period ke 2-3 din – warm shower prefer karein. Rajma, masoor, methi ke parathe – warming iron-rich foods is season mein ideal hain.',
    summer: 'Dehydration period pain worse karta hai – body mein water ki kami se uterine cramping zyada feel hoti hai. Hydration critical hai – roz 8-10 glass water minimum; coconut water excellent hai. Aam panna, nimbu paani electrolyte balance ke liye. Period ke time bahut zyada dhoop mein nikalna avoid karein – fatigue badhti hai. Refrigerator ka thanda paani seedha mat piyo – room temperature ya slightly warm prefer karein periods ke din. Watermelon, khira, tarbooj – cooling + hydrating.',
    monsoon: 'Barish ke mausam mein humidity se bloating worse hoti hai. Hygiene extra dhyan – wet clothes pe nahi baithna, clean aur dry undergarments change karna zaroori. Probiotic rich foods – dahi, chaas – gut health maintain karne ke liye. Vitamin D ki kami ho jaati hai monsoon mein – deficiency period pain worse karta hai, doctor se poochke supplement consider karein. Chamomile ya ginger tea – bloating aur mood dono ke liye helpful.',
  },

  faqs: [
    {
      _key: 'faq1',
      question: 'Period mein dard hona normal hai ya nahi?',
      answer: 'Thoda discomfort normal hai, lekin aisa dard jo kaam band kar de – wo normal nahi hai. Millions of women in India period dard ko "normal" samajh ke sehti rehti hain jabki ye puri tarah treatable condition hai. Technically mild ache aur dysmenorrhoea (painful periods) mein fark hota hai – agar 5/10 se zyada pain scale pe dard ho ya regular activities affect ho rahe ho, to ye medical attention deserve karta hai.',
    },
    {
      _key: 'faq2',
      question: 'Primary aur secondary dysmenorrhoea mein kya fark hai?',
      answer: 'Primary dysmenorrhoea mein koi underlying disease nahi hoti – dard prostaglandins (natural chemicals) ke zyada banne se hota hai, typically teenage girls aur young women mein. Secondary dysmenorrhoea mein koi underlying cause hota hai – jaise endometriosis, fibroids ya PCOS. Fark ye hai ki primary mein dard usually age ke saath better hota hai, secondary mein worse hota jaata hai. Agar period pain suddenly badhe ya 25 ke baad pehli baar severe ho, to secondary type rule out karna zaroori hai.',
    },
    {
      _key: 'faq3',
      question: 'Dysmenorrhoea aur endometriosis mein kya fark hai?',
      answer: 'Endometriosis secondary dysmenorrhoea ka ek common cause hai – ye alag alag cheezein hain. Dysmenorrhoea painful periods ko kehte hain (symptom), endometriosis wo condition hai jisme uterine lining uterus ke bahar grow karti hai (disease). Endometriosis mein dard period ke alawa bhi hota hai – sex ke time, bowel movement ke time – aur lagbhag 7-10 saal diagnosis mein lag jaata hai India mein. Agar period pain ke saath ye additional symptoms ho to gynae se milna urgent hai.',
    },
    {
      _key: 'faq4',
      question: 'PCOS mein period dard zyada kyun hota hai?',
      answer: 'PCOS mein hormonal imbalance – especially high androgens aur irregular ovulation – periods ko irregular aur heavy banata hai. Jab period aata hai to prostaglandin surge zyada hota hai. Saath mein, PCOS mein often inflammation bhi higher hoti hai jo pain sensitivity badhata hai. PCOS + dysmenorrhoea combo mein treatment zyada comprehensive honi chahiye – sirf pain management nahi, hormonal aur metabolic balance bhi address hona chahiye.',
    },
    {
      _key: 'faq5',
      question: 'Period pain permanently theek ho sakta hai?',
      answer: 'Haan – permanent relief bilkul possible hai, aur bahut si mahilaon ne experience kiya hai. Proper treatment se periods pain-free ya negligible pain wale ho sakte hain. Homeopathy mein 3-6 cycles ke consistent treatment ke baad aksar pain pattern toot jaati hai – body ki prostaglandin sensitivity kam hoti hai, hormonal balance better hota hai. Primary dysmenorrhoea mein ye especially effective hai. Secondary type mein underlying cause ka treatment plus constitutional homeopathy saath mein permanent improvement deta hai.',
    },
    {
      _key: 'faq6',
      question: 'Period pain ke liye kya karein jab turant relief chahiye?',
      answer: 'Turant relief ke liye: (1) Hot water bag lower abdomen pe – heat muscle spasm mein fastest relief deta hai. (2) Ginger tea ya warm haldi doodh – anti-inflammatory fast action. (3) Child\'s pose ya forward bend – pressure naturally cramps mein relief deta hai. (4) Deep slow breathing – diaphragmatic breathing cortisol aur pain perception kam karta hai. (5) Magnesium supplements (agar doctor ne suggest kiya ho). Painkiller sirf tab lo jab ye sab kaam na kare – aur regular basis pe nahi. Long-term solution ke liye proper treatment zaroori hai.',
    },
    {
      _key: 'faq7',
      question: 'Kya homeopathy period pain mein kaam karta hai?',
      answer: 'Haan – homeopathy dysmenorrhoea mein genuinely effective hai, specially jab treatment individualized ho. CCRH-affiliated studies mein pain intensity score treatment group mein placebo se significantly zyada gira. Homeopathy ka khaas fayda ye hai ki ye sirf dard band nahi karta – prostaglandin sensitivity, hormonal balance, aur uterine spasm teeno pe kaam karta hai. Saath mein jo associated symptoms hain – nausea, back pain, mood swings – unhe bhi address kiya jaata hai. 3-6 cycles mein clear difference dikhai deta hai jo properly prescribed medicine mili ho.',
    },
    {
      _key: 'faq8',
      question: 'Period pain ki best homeopathic medicine kaun si hai?',
      answer: 'Koi ek "best" medicine nahi hoti homeopathy mein – ye is baat par depend karta hai ki aapka dard kaisa hai. Magnesia Phosphorica unke liye jo cramping dard mein heat se better feel karein. Colocynthis unke liye jinho ke dard mein pressure se relief ho. Pulsatilla irregular, shifting pain aur hormonal irregularity wali mahilaon ke liye. Sepia exhaustion aur bearing-down sensation wali cases ke liye. Viburnum Opulus jab dard thighs tak utre aur period shuru hone se pehle zyada ho. Ye sirf examples hain – aapki exact symptoms aur constitution ke hisaab se ek qualified homoeopath hi sahi medicine choose kar sakta hai.',
    },
    {
      _key: 'faq9',
      question: 'Dysmenorrhoea ke liye kaunsa test zaroori hai?',
      answer: 'Primary dysmenorrhoea mein usually koi special test nahi chahiye – clinical history aur symptoms se diagnosis ho jaati hai. Lekin agar secondary type ka doubt ho to: Pelvic ultrasound – fibroids, ovarian cysts, PCOS ke liye. CA-125 blood test – endometriosis ke liye (though limited accuracy). Laparoscopy – endometriosis confirm karne ka gold standard. CBC aur iron levels – anaemia check karne ke liye (heavy periods ke saath). FSH, LH, AMH – hormonal panel agar PCOS suspect ho.',
    },
    {
      _key: 'faq10',
      question: 'Dysmenorrhoea ki wajah se pregnancy mein problem ho sakti hai?',
      answer: 'Primary dysmenorrhoea akela fertility ko affect nahi karta – ye sirf pain hai, structure normal hoti hai. Lekin agar dard underlying condition ki wajah se hai – endometriosis ya fibroids – to wo fertility affect kar sakta hai. Endometriosis mein tubes block ho sakti hain ya egg quality affect ho sakti hai. Isliye agar period pain severe ho aur family planning soch rahi ho, to pehle gynae evaluation zaroor karein. Timely treatment se fertility protect ho sakti hai.',
    },
    {
      _key: 'faq11',
      question: 'Period pain mein kya khana chahiye?',
      answer: 'Period ke time ye foods best hain: Adrak – prostaglandins naturally kam karta hai; haldi – anti-inflammatory; palak, methi – iron + magnesium; kela – magnesium + potassium; badam, flaxseeds – omega-3 jo cramps kam karte hain; dahi – gut health aur mood dono. Garm cheezein prefer karein – garm doodh, garam soup, herbal chai. Hydration zaroor rakhein – 8-10 glass water. Dark chocolate thoda – magnesium source hai aur mood bhi better karta hai. In foods se prostaglandin overproduction kam hoti hai aur pain naturally manage hota hai.',
    },
    {
      _key: 'faq12',
      question: 'Period pain mein kya nahi khana chahiye?',
      answer: 'Ye cheezein period dard worse karti hain: Chai aur coffee zyada – caffeine uterine contractions aur anxiety dono badhata hai. Thanda paani, ice cream – vasoconstriction se cramping worse. Maida, processed snacks – inflammation badhata hai. Refined sugar – prostaglandin production trigger karta hai. Fried food – trans fats pain worse karte hain. Carbonated drinks – bloating jo pehle se hai usse aur badhata hai. Dairy excess – arachidonic acid prostaglandin synthesis badhata hai. Period ke time in cheezein temporarily band karo – fark khud feel hoga.',
    },
    {
      _key: 'faq13',
      question: 'Period pain mein exercise karni chahiye ya nahi?',
      answer: 'Haan – exercise period pain ka ek best natural remedy hai, lekin samajhdari se karni chahiye. Periods ke beech ke din (cycle ke days 6-20) – regular exercise karein, ye prostaglandin sensitivity kam karta hai long term mein. Period ke dino mein – gentle yoga (child\'s pose, cat-cow, butterfly pose), slow walking – ye helpful hai. Intense heavy exercise jaise heavy lifting ya HIIT period ke pehle 2 din mein avoid karein. Studies show karte hain ki regular exercisers mein dysmenorrhoea severity non-exercisers se significantly kam hoti hai.',
    },
    {
      _key: 'faq14',
      question: 'Period dard ke liye ghar pe kya karna chahiye?',
      answer: 'Ghar par ye karo: (1) Hot water bag – sab se effective home remedy; 20 minute lower abdomen pe. (2) Warm ginger aur haldi wali chai. (3) Sarson tel se lower abdomen pe gentle massage – clockwise. (4) Yoga poses – child\'s pose, supine twist, legs up the wall. (5) Warm shower ya bath. (6) Heating pad ke saath lete samay deep breathing karo. (7) Methi dana – raat ko paani mein bhigo ke subah pi lo. Ye sab acute relief ke liye hain – long term ke liye proper treatment zaroor lo.',
    },
    {
      _key: 'faq15',
      question: 'Periods mein chai peena chahiye ya nahi?',
      answer: 'Period ke time chai kam karo – seedha advice ye hai. Caffeine uterine contractions badhata hai, anxiety trigger karta hai aur iron absorption bhi block karta hai. Ek cup subah ki chai chalti hai lekin 3-4 cups nahi. Better alternative: adrak chai (ginger tea without tea leaves), chamomile tea, haldi doodh, ya ajwain paani – ye sab specifically period-friendly hain aur dard mein actually help karte hain.',
    },
    {
      _key: 'faq16',
      question: 'Teenager ko period pain normal hai kya?',
      answer: 'Kuch discomfort normal hai jab periods pehli baar shuru hon – uterus adjust ho rahi hoti hai. Lekin agar school miss ho rahi ho, ya pain 6/10 se zyada ho, to wo treat kiya jaana chahiye. Teenage girls mein primary dysmenorrhoea sabse common hai – aur homeopathy is age group ke liye specially suitable hai kyunki safe hai aur hormonal interference nahi karta. Parents ko ye baat maloom honi chahiye ki severe period pain – even in teenagers – is NOT normal and IS treatable.',
    },
    {
      _key: 'faq17',
      question: 'Pregnancy mein period jaisa dard hona kya signal hai?',
      answer: 'Pregnancy mein period jaisa cramping hona normal bhi ho sakta hai (early implantation ke time) lekin serious bhi – ektopic pregnancy, threatened miscarriage, ya UTI bhi. Pregnancy confirm hai aur cramping ho – turant doctor se milein, especially agar bleeding bhi ho. Ye self-diagnose karne wali situation nahi hai.',
    },
    {
      _key: 'faq18',
      question: 'Period se pehle wala dard (PMS) aur dysmenorrhoea mein kya fark hai?',
      answer: 'PMS (Premenstrual Syndrome) period se 1-2 week pehle ke symptoms hain – mood swings, bloating, breast tenderness, irritability – aur period aate hi usually better ho jaate hain. Dysmenorrhoea period ke time ka dard hai – cramping, lower abdomen, back pain – jo period ke saath ya turant baad shuru hota hai. Kai mahilaon mein dono saath hote hain – aur homeopathy mein interesting baat ye hai ki constitutional medicine dono ko ek saath address karti hai.',
    },
    {
      _key: 'faq19',
      question: 'Uterus mein ruk ruk ke dard (intermittent pain) – kya ye normal hai?',
      answer: 'Period ke time ruk ruk ke cramping (waves mein) bilkul normal hai – ye prostaglandins se hoti hai jo uterus ko contract karate hain. Lekin period ke bahar – yaani non-period days mein – chronic pelvic pain ya recurring intermittent pain normal nahi hai. Ye pelvic inflammatory disease, ovarian cysts, ya endometriosis ka sign ho sakta hai. Aisa ho to gynae evaluation urgent hai.',
    },
    {
      _key: 'faq20',
      question: 'PCOD ke saath dysmenorrhoea ka ilaaj kaise hoga?',
      answer: 'PCOD + dysmenorrhoea ek composite condition hai – dono ek doosre ko worse karte hain. Treatment comprehensive honi chahiye: (1) Insulin resistance address karo – diet, exercise, weight management. (2) Homeopathy mein Pulsatilla, Sepia jaisi medicines PCOD pattern ke saath period pain dono ko address karti hain. (3) Inflammation kam karo – anti-inflammatory diet aur supplements. (4) Cycle regulate karo – 3-6 months ki constitutional treatment se cycles bahut better ho sakti hain. Ye ek long-term commitment hai – quick fix nahi – lekin sustainable results milte hain.',
    },
    {
      _key: 'faq21',
      question: 'Dysmenorrhoea ki homeopathic treatment mein kitna time lagta hai?',
      answer: 'Pehle 2-3 cycles mein aksar intensity mein reduction dikhti hai – dard kam tez hota hai, duration kam hoti hai. 4-6 cycles mein bahut mahilaon mein significantly better ho jaata hai. Complete aur stable relief ke liye 6-12 months ka treatment optimal hai – especially agar underlying hormonal imbalance ya secondary type ho. Patience important hai – homeopathy root cause pe kaam karta hai, sirf symptom suppress nahi karta.',
    },
    {
      _key: 'faq22',
      question: 'Kya periods ke time homeopathic medicine lena safe hai?',
      answer: 'Haan – homeopathic medicines periods ke time bilkul safe hain. In medicines mein koi hormonal substance nahi hota – ye highly diluted hain aur body ke natural processes ko support karte hain. Pregnancy mein bhi generally safe mana jaata hai lekin qualified doctor ki supervision mein. Conventional painkillers jo periods mein unsafe ho sakti hain unke comparison mein homeopathy ki safety profile bahut better hai.',
    },
    {
      _key: 'faq23',
      question: 'Kya period pain mein yoga se fark padta hai?',
      answer: 'Haan – bilkul fark padta hai, aur research se bhi confirm hai. Period ke beech ke dino mein regular yoga se core strength, blood circulation aur hormonal balance improve hota hai – jo next cycle mein pain kam karta hai. Period ke dino mein bhi gentle poses specifically helpful hain: Balasana (child\'s pose) – uterine spasm mein immediate relief. Supta Baddha Konasana – pelvic circulation. Viparita Karani (legs up wall) – drainage aur relaxation. Bhramari pranayama – pain perception aur anxiety dono kam karta hai. Consistent practice se 2-3 months mein difference aata hai.',
    },
  ],

  relatedDiseases: [
    'PCOD',
    'Endometriosis',
    'Uterine Fibroid',
    'Menopause',
    'Leucorrhoea',
  ],
}

async function seed() {
  try {
    const result = await client.createOrReplace(doc)
    console.log('✅ Dysmenorrhoea created/updated:', result._id)
    console.log('🌐 Live at: https://homeopedia.in/diseases/dysmenorrhoea')
  } catch (err) {
    console.error('❌ Error:', err)
  }
}

seed()
