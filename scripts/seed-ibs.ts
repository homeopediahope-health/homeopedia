import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
  useCdn: false,
})

const ibs = {
  _id: 'disease-ibs',
  _type: 'disease',

  title: 'IBS (Irritable Bowel Syndrome)',
  hindiName: 'Aanton Ki Takleef / Ulajhi Aantein',
  slug: { _type: 'slug', current: 'ibs' },

  metaTitle: 'IBS Treatment in Hindi — Karan, Ilaaj aur Homeopathy',
  metaDescription: 'IBS ke symptoms, karan, diet plan aur homeopathic treatment — simple Hinglish mein. Verified info, doctor-reviewed. Stomach relief guide.',

  heroText: 'IBS yaani Irritable Bowel Syndrome ek common digestive condition hai jisme aapki aantein theek se kaam nahi karti — kabhi bahut zyada dast (loose motions), kabhi kaafi dino tak constipation, aur beech-beech mein pet mein dard aur gas. Is bimari mein aanton mein koi physical damage ya infection nahi hota — problem ye hai ki aanton ki nerves zyada sensitive ho jaati hain aur brain-gut connection disturb ho jaata hai. India mein ye bahut common hai — stress, kharaab diet aur irregular lifestyle iske main triggers hain. Sahi treatment aur diet se is condition ko control karna bilkul possible hai.',

  category: 'Digestive',

  quickFacts: {
    whatItIs: 'IBS koi structural damage nahi karta — aantein normal dikhti hain, sirf function disturbed hota hai',
    howCommon: 'India mein lagbhag 4-6 crore log IBS se affected hain — urban population mein especially common',
    treatmentDuration: 'Homeopathy se 3-6 mahine mein meaningful improvement; lifestyle changes se long-term control',
    successRate: 'CCRH studies: pain score, stool frequency aur quality of life — teeno mein placebo se considerably better improvement',
  },

  causes: [
    'Brain-gut connection mein disturbance — aanton ki nerves brain ke signals ko galat read karti hain',
    'Gut microbiome imbalance — aanton mein achhe bacteria kam ho jaate hain, haazme ka balance bigdta hai',
    'Past infection ya gastroenteritis — ek baar severe stomach infection ke baad IBS develop ho sakta hai (post-infectious IBS)',
    'Chronic stress aur anxiety — mental pressure seedha gut motility pe asar karta hai',
    'Food sensitivity — kuch khaane (dairy, gluten, oily food) aantein handle nahi kar paatein',
    'Hormonal changes — especially women mein periods ke aaspaas symptoms badh jaate hain',
  ],

  riskFactors: [
    'Women — purushon ke mukable do guna zyada risk, especially 20-45 saal ki umar mein',
    'Anxiety ya depression wale log — mental health aur gut ka seedha connection hai',
    'Jo log bahut irregular khaate hain — bahar ka khaana, skip meals, late-night eating',
    'Family history — agar parents ya siblings ko IBS hai to risk badhta hai',
    'Antibiotic overuse — gut bacteria ka balance bigad jaata hai',
    'Sedentary lifestyle — physical inactivity digestion slow karti hai',
  ],

  complications: [
    'Chronic malnutrition aur weakness — khana properly absorb nahi hota',
    'Social anxiety aur isolation — public places ya travel se darne lagte hain log, quality of life gir jaati hai',
    'Haemorrhoids (bawaseer) — baar baar straining ya loose motions se risk badhta hai',
    'Mental health deterioration — untreated IBS anxiety aur depression ko aur bada karta hai',
  ],

  symptoms: [
    {
      _key: 'sym1',
      category: 'Pet Dard aur Cramping (Sabse Common)',
      items: [
        'Nabhi ke aaspaas ya lower abdomen mein cramping pain — potty ke baad kuch relief milta hai',
        'Bloating (pet phula hua lagta hai) — din mein badhta hai, subah thoda better hota hai',
        'Pet mein gurgling aur gas — aksar embarrassing situations create karta hai',
      ],
    },
    {
      _key: 'sym2',
      category: 'Potty Mein Badlaav (IBS ka Main Sign)',
      items: [
        'IBS-D (Diarrhea type): Subah uthte hi urgent loose motions — ek baar mein 3-4 baar jaana padta hai',
        'IBS-C (Constipation type): Kaafi effort ke baad bhi potty nahi aati, hard stool, incomplete feeling',
        'IBS-M (Mixed type): Kabhi dast, kabhi constipation — same week mein dono ho sakte hain',
      ],
    },
    {
      _key: 'sym3',
      category: 'Associated Symptoms (Jo Log Miss Kar Dete Hain)',
      items: [
        'Khane ke baad turant bathroom jaane ki urgency',
        'Mucus in stool (potty mein safed-si coating)',
        'Thakaan aur energy ki kami — khana absorb nahi hone se',
      ],
    },
  ],

  ccrhEvidence: {
    improvementRate: 'Pain score, stool frequency aur quality of life — teeno mein placebo ke mukable considerably higher improvement',
    avgTreatmentPeriod: '3 se 6 mahine (severity ke hisaab se)',
    citation: 'Indian Journal of Research in Homoeopathy | 2017-2019 studies | CCRH',
    keyFindings: [
      'IBS-D patients mein stool frequency aur urgency mein measurable reduction milti hai homeopathic treatment se',
      'Pain aur bloating scores treatment group mein placebo ke mukable significantly better the',
      'Quality of life (QoL) index — anxiety aur daily functioning dono mein improvement dekhi gayi',
    ],
  },

  homeopathyBenefits: [
    'Stress-triggered IBS ke liye khaas fayda — kyunki homeopathy mental aur gut dono ko ek saath address karta hai',
    'No dependency — conventional antispasmodics ki tarah baar baar lene ki zaroorat nahi',
    'IBS ke saath aane wali anxiety, sleep issues bhi treat hoti hain — all-round better feeling',
    'Pregnancy ya bacchon mein bhi safe — highly diluted medicines, practically no side effects',
    'Long-term remission possible — symptoms sirf dabte nahi, pattern tootti hai',
  ],

  homeopathyLimitations: [
    'IBS-D ke severe acute episodes mein conventional ORS aur antidiarrheals faster relief dete hain — homeopathy parallel ya baad mein add karna practical hai',
    'IBD (Crohn\'s, Ulcerative Colitis) se pehle clearly differentiate karna zaroori hai — colonoscopy se rule out karo, phir homeopathy shuru karo',
  ],

  medicines: [
    {
      _key: 'med1',
      name: 'Nux Vomica',
      potency: '',
      keyIndications: [
        'Bahut stressed, irritable aur workaholic patients',
        'IBS subah uthte hi ya office jaane se pehle badh jaata hai',
        'Constipation ke baad thoda dast, spasmodic pain',
      ],
      bestFor: 'Stressed Indian office-goers jinka IBS morning mein ya kaam ke pressure mein badh jaata hai',
    },
    {
      _key: 'med2',
      name: 'Argentum Nitricum',
      potency: '',
      keyIndications: [
        'Exam, interview, travel ya koi important event se pehle diarrhea — "anticipatory diarrhea"',
        'Anxious, nervous patients — "sochke hi bathroom jaate hain"',
        'Gas aur bloating bhi saath mein',
      ],
      bestFor: 'Anticipation anxiety se triggered diarrhea — event se pehle bathroom ki urgency',
    },
    {
      _key: 'med3',
      name: 'Colocynthis',
      potency: '',
      keyIndications: [
        'Sudden cramping pain jo press karne ya aage jhukne se thoda theek hota hai',
        'Anger ke baad symptoms badh jaate hain',
        'IBS-D mein sudden, doubled-over pain',
      ],
      bestFor: 'Gut spasms — IBS-D mein jo aage jhukne ya pressure se better ho',
    },
    {
      _key: 'med4',
      name: 'Lycopodium',
      potency: '',
      keyIndications: [
        'Bloating bahut zyada — thoda khaane ke baad pet bhara lagta hai',
        'Gas bhari hoti hai, constipation aur flatulence dono saath',
        'Evening mein symptoms worse',
      ],
      bestFor: 'IBS-C ya mixed type jisme bloating dominant symptom ho — evening mein worse',
    },
    {
      _key: 'med5',
      name: 'Podophyllum',
      potency: '',
      keyIndications: [
        'Subah early hours mein urgent, gushing loose motions',
        'Painless ya thoda pain ke saath, baad mein weakness',
        'Early morning explosive diarrhea pattern',
      ],
      bestFor: 'IBS-D — subah early morning gushing diarrhea jo baad mein weakness de',
    },
  ],

  dietInclude: [
    {
      _key: 'di1',
      category: 'Gut-Friendly Grains',
      emoji: '🌾',
      items: [
        'Chawal (white rice) — easily digestible, aanton pe stress nahi deta, diarrhea mein specially helpful',
        'Oats (daliya) — soluble fiber jo constipation type IBS mein bowel movement smooth karta hai',
        'Jowar/Bajra roti — gluten-free options jo IBS mein wheat se better tolerate hoti hain',
      ],
    },
    {
      _key: 'di2',
      category: 'Safe Vegetables',
      emoji: '🥕',
      items: [
        'Lauki (bottle gourd) — gut ke liye sabse soothing vegetable, bloating kam karta hai',
        'Gajar (carrot) — paka hua, soluble fiber se bhara, loose motions mein stool bind karta hai',
        'Kaddu (pumpkin) — anti-inflammatory, gut lining ko soothe karta hai',
      ],
    },
    {
      _key: 'di3',
      category: 'Probiotics & Hydration',
      emoji: '💧',
      items: [
        'Homemade chhachh (buttermilk, unsalted) — gut bacteria balance karta hai, IBS ke liye traditional Indian superfood',
        'Coconut water — hydration ke saath gut ko alkaline rakhta hai',
        'Banana (paka hua) — diarrhea mein stool firm karta hai, potassium replenish karta hai',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'Gas Badhane Wali Cheezein',
      emoji: '🚫',
      items: [
        'Rajma, chhole, urad dal — high FODMAP legumes, IBS mein gas aur bloating dramatically badhate hain',
        'Patta gobhi (cabbage), broccoli — fermentable fibers jo gut mein excess gas produce karte hain',
        'Carbonated drinks (cola, soda) — gas seedha aanton mein jaati hai, cramping badh jaati hai',
      ],
    },
    {
      _key: 'da2',
      category: 'Gut Irritants',
      emoji: '🌶️',
      items: [
        'Bahut tez mirch wala khaana — gut nerves directly irritate karta hai, diarrhea trigger karta hai',
        'Maida se bani cheezein (white bread, biscuits, samosa) — low fiber, gut motility disturb karta hai',
        'Processed aur packaged food (chips, namkeen) — preservatives aur additives IBS mein common triggers hain',
      ],
    },
    {
      _key: 'da3',
      category: 'Dairy & Caffeine',
      emoji: '⚠️',
      items: [
        'Full-fat milk — lactose IBS patients mein often poorly tolerated, bloating badh jaata hai',
        'Chai ya coffee zyada — caffeine gut motility speed up karta hai, diarrhea type IBS mein worst trigger',
        'Ice cream aur cheese — high fat + lactose combination, gut spasms trigger kar sakta hai',
      ],
    },
  ],

  dietTip: 'Khane se 30 min pehle aur 45 min baad paani piyein — khane ke saath paani peene se digestive juices dilute hote hain aur IBS symptoms badh sakte hain.',
  dietNote: 'Har IBS patient ka trigger food alag hota hai — 2 hafte ki food diary rakhein. Rajma/chhole India mein IBS ka #1 food trigger hai, 2-3 hafte band karke dekho.',

  dos: [
    'Khana chew karke slowly khayein — fast eating se air swallow hoti hai jo bloating badhata hai; 20-30 chews per bite ideal hai',
    'Stress management zaroor karein (yoga, pranayam, meditation) — gut aur brain directly connected hain, stress control se IBS 40-50% better ho sakta hai',
    'Food diary banayein — 2 hafte likhein kya khaya aur kaisa feel hua, trigger foods identify ho jaate hain',
    'Paani ka timing maintain karein — khane ke beech mein nahi, khane se 30 min pehle aur 45 min baad paani piyein',
    'Regular walking ya light exercise karein — 30 min daily walk gut motility improve karta hai naturally',
    'Fixed meal times rakho — irregular khaana khane se IBS symptoms 2x worse ho jaate hain',
  ],

  donts: [
    'Khana skip mat karein — bhauke rehne se gut mein acid aur spasm dono badhte hain',
    'Ek dum badi portion mein mat khayein — teen bade khane ki jagah 5-6 chhote meals better hain IBS mein',
    'Self-medication mat karein (antacids, antibiotics khud se) — gut microbiome aur disturb ho jaata hai',
    'Late-night heavy khaana avoid karein — raat mein gut ki motility slow hoti hai, food ferment hota hai, subah worse hota hai',
    'Khaate waqt phone ya TV nahi — distracted eating mein zyada air swallow hoti hai aur hunger signals miss ho jaate hain',
    'Laxatives ya anti-diarrheal pills baar baar khud se mat lo — dependency bann jaati hai aur root cause solve nahi hota',
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'IBS aur normal pet dard mein kya fark hai — kaise pehchanein?',
      answer: 'Normal pet dard kuch ghanton mein theek ho jaata hai — IBS ka dard bar bar aata hai, aur potty ke baad kuch relief milta hai. IBS ka sabse bada sign ye hai ki aapke bowel habits badal gaye hain — kabhi dast, kabhi constipation, ya dono baar baar aate hain — aur ye silsila 3 mahine se zyada chal raha ho. Agar dard ke saath bloating, gas, aur pet mein gurgling bhi hai aur khaane ke baad symptoms badh jaate hain — to ye IBS ke clear signs hain. Blood in stool ya sudden weight loss IBS mein nahi hona chahiye — woh hone par turant doctor ke paas jaayein.',
    },
    {
      _key: 'faq2',
      question: 'IBS permanently theek ho sakta hai ya hamesha rahega?',
      answer: 'IBS ka permanent control bilkul possible hai — aur bahut se patients mein saalon tak koi symptom nahi aata jab wo sahi treatment aur lifestyle follow karte hain. Ye "permanent cure" ke nahi balki "long-term remission" ki baat hai — matlab triggers avoid karein, stress manage karein, aur treatment lein to life practically normal ho jaati hai. Homeopathy mein ye fayda hai ki ye IBS ki underlying sensitivity aur brain-gut pattern ko address karta hai — sirf symptoms dabata nahi — isliye relapse bhi kam hota hai.',
    },
    {
      _key: 'faq3',
      question: 'IBS mein kya khana chahiye aur kya bilkul nahi — quick guide?',
      answer: 'Khayein: chawal, daliya, lauki, gajar, paka kela, chhachh, coconut water — ye sab gut ke liye safe aur soothing hain. Avoid karein: rajma/chhole, gobhi/broccoli, maida, bahut tez mirch, caffeine, full-fat dairy, aur soda drinks — ye IBS ke sabse common Indian food triggers hain. Sabse important: koi bhi food har IBS patient ko alag affect karta hai — 2 hafte ki food diary rakhein aur apne personal triggers dhundein.',
    },
    {
      _key: 'faq4',
      question: 'Kya homeopathy IBS mein kaam karti hai — aur kitne time mein result milta hai?',
      answer: 'Haan — homeopathy IBS mein ek effective approach hai, especially jab treatment individualized ho. CCRH-linked studies mein IBS patients mein pain score, stool frequency aur quality of life — teeno mein placebo ke mukable better results mile hain. Homeopathy ka unique fayda ye hai ki ye stress, anxiety, aur gut sensitivity teeno ko ek saath address karta hai — jo IBS ke actual root causes hain. Zyaatar patients mein 4-8 hafte mein clear improvement shuru ho jaati hai, aur 3-6 mahine mein sustainable relief milti hai.',
    },
    {
      _key: 'faq5',
      question: 'IBS mein stress ka kya role hai — aur manage kaise karein?',
      answer: 'IBS ek brain-gut disorder hai — matlab aapka gut literally aapke dimag ki tarah sochta hai. Stress ya anxiety hone par brain signals aanton tak jaate hain aur unhe ya zyada fast ya bahut slow chalate hain — tabhi diarrhea ya constipation hoti hai. Isiliye exam, interview, ya koi tension se pehle bathroom ki urgency feel hoti hai. Manage karne ke liye: daily 10-15 min pranayam ya deep breathing, regular light walk, aur 7-8 ghante neend — ye teeno IBS symptoms mein clinically proven improvement dete hain.',
    },
    {
      _key: 'faq6',
      question: 'IBS aur IBD (Crohn\'s, Ulcerative Colitis) mein kya fark hai — kaise jaanein?',
      answer: 'IBS mein aanton mein koi physical damage ya inflammation nahi hoti — colonoscopy normal aati hai. IBD (Crohn\'s ya Ulcerative Colitis) mein aanton mein actual inflammation ya ulcers hote hain — blood in stool, significant weight loss, aur raat ko bhi symptoms aana IBD ke signs hain. IBS ka dard potty ke baad improve hota hai — IBD mein aisa nahi hota. Agar aapko blood in stool, fever ke saath dard, ya bina koshish ke weight loss ho raha hai — to pehle gastroenterologist se milein aur colonoscopy karwayein.',
    },
    {
      _key: 'faq7',
      question: 'IBS mein konsa test karwana chahiye — kya koi blood test ya scan hota hai?',
      answer: 'IBS ki koi ek specific test nahi hoti — ye ek "diagnosis of exclusion" hai, matlab pehle dusri serious conditions ko rule out kiya jaata hai. Doctor generally karvate hain: CBC (blood test), thyroid profile, stool routine test, aur kabhi kabhi colonoscopy — especially 40 saal ke upar ke patients mein. Agar in sab mein koi problem nahi aati aur Rome IV criteria ke symptoms 6 mahine se hain — tab IBS diagnose hota hai.',
    },
    {
      _key: 'faq8',
      question: 'Bacchon mein IBS hoti hai kya — aur kaise pehchanein?',
      answer: 'Haan — bacchon mein IBS hoti hai aur aksar school stress ya diet changes se trigger hoti hai. Bachche usually kehte hain "pet mein dard hai school jaane se pehle" ya "khaane ke baad ulti jaisi lagti hai" — aur weekend pe symptoms suddenly better ho jaate hain (stress kam hota hai isliye). IBS wala dard nabhi ke aaspaas ya lower abdomen mein hota hai aur potty ke baad kuch better hota hai. 5 saal se upar ke bacchon mein ye pattern baar baar aaye to homoeopath ya paediatric gastroenterologist se milein. Homeopathy bacchon ke liye especially safe option hai.',
    },
    {
      _key: 'faq9',
      question: 'IBS mein chai aur coffee band karni chahiye kya?',
      answer: 'Completely band karna zaroori nahi — lekin dramatically kam karna chahiye, especially IBS-D (diarrhea type) mein. Caffeine gut ke muscles ko stimulate karta hai aur motility speed up kar deta hai — isliye chai peete hi bathroom jaana padta hai. Agar aap IBS-C (constipation type) hain to ek cup subah ki chai actually helpful bhi ho sakti hai. Safe alternative: jeera water, saunf chai (fennel tea), ya adrak-tulsi ki herbal chai — ye gut-friendly hain aur IBS symptoms mein soothing hain.',
    },
    {
      _key: 'faq10',
      question: 'IBS mein exercise karni chahiye ya rest?',
      answer: 'Exercise zaroor karni chahiye — IBS mein rest recommended nahi hai. 30 minute ki brisk walk daily gut motility improve karti hai, stress hormones kam karti hai, aur bloating reduce hoti hai — teen kaam ek saath. Studies suggest karte hain ki jo IBS patients regularly exercise karte hain unke symptoms 50% tak less severe hote hain. Bas avoid karein: bahut intense gym workout ya heavy lifting during active flare-up. Yoga especially IBS ke liye acha hai — Pawanmuktasana, Balasana aur Vajrasana digestion ke liye proven hai.',
    },
    {
      _key: 'faq11',
      question: 'Pregnancy mein IBS ho jaaye to kya karein?',
      answer: 'Pregnancy mein IBS common hai — hormonal changes gut motility affect karte hain aur stress bhi hota hai. Pehli baat: doctor ko zaroor batayein ki aapko IBS hai — pregnancy mein treatment choices carefully select ki jaati hain. Diet mein: fiber-rich khana, chhachh, coconut water, aur small frequent meals best hain. Exercise mein: prenatal yoga aur light walking safe hai. Homeopathy pregnancy mein ek safe option hai — qualified homoeopath se milein jo pregnancy-safe medicines select kare.',
    },
    {
      _key: 'faq12',
      question: 'IBS se permanently chutkara paane ke liye kya karna chahiye — complete plan?',
      answer: 'IBS control ke liye ek all-round approach chahiye. Pehla: trigger foods identify karo — food diary 2 hafte rakhein. Doosra: stress management — daily pranayam, proper neend, aur workload balance. Teesra: consistent treatment — homeopathy ya conventional, jo bhi doctor recommend kare, 3-6 mahine tak continuity zaroori hai — beech mein band mat karo jab thoda theek lage. Chautha: gut microbiome theek karo — chhachh, fermented foods, aur probiotic supplements doctor ki salaah se. Jo log ye sab seriously lete hain unki life practically normal ho jaati hai.',
    },
  ],

  youtubeUrl: 'https://youtu.be/44gt-Fu1XdU',

  sources: [
    {
      _key: 'src1',
      name: 'CCRH (Council for Research in Homoeopathy)',
      url: 'https://ccrh.nic.in',
      year: '2019',
    },
    {
      _key: 'src2',
      name: 'Rome Foundation — IBS Rome IV Diagnostic Criteria',
      url: 'https://romecriteria.org',
      year: '2016',
    },
    {
      _key: 'src3',
      name: 'Indian Journal of Research in Homoeopathy — IBS studies',
      url: '',
      year: '2019',
    },
    {
      _key: 'src4',
      name: 'WHO Global Disease Burden Report — Functional GI Disorders',
      url: '',
      year: '2021',
    },
    {
      _key: 'src5',
      name: 'Mayo Clinic — Irritable Bowel Syndrome Overview',
      url: 'https://www.mayoclinic.org',
      year: '2023',
    },
  ],

  publishedAt: new Date().toISOString(),
}

async function main() {
  const result = await client.createOrReplace(ibs)
  console.log('Document created:', result._id)
}

main().catch(console.error)
