import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-acidity',
  _type: 'disease',
  slug: { _type: 'slug', current: 'acidity' },
  title: 'Acidity / Acid Reflux / GERD',
  hindiName: 'Tezaab / Seene ki Jalan / Khatta Dakaar',
  category: 'Digestive',
  seoTitle: 'Acidity Treatment in Hindi | Causes, Diet & Homeopathy | Homeopedia',
  seoDescription: 'Acidity (seene ki jalan) ka best treatment, karan, diet chart aur homeopathic ilaaj – verified info, doctor-reviewed. Homeopedia.in',
  whatIsIt: `Acidity tab hoti hai jab aapke pet ka acid (gastric acid) apni seema tod kar upar food pipe (esophagus) mein aa jaata hai. Normal digestion ke liye acid zaroori hota hai — lekin jab ye zyada banta hai ya galat jagah jaata hai, to seene mein jalan, khatta dil, aur pair uthne lagti hai. India mein har 5 mein se 1 insaan acidity se pareshaan rehta hai — aur iska sabse bada reason hai khaane ki galat timing, stress, aur fast food ka zyada use.\n\nZyada log acidity ko "chhoti bimari" samajh ke baar baar antacid kha lete hain — lekin bina root cause treat kiye ye bar baar aati hai aur waqt ke saath chronic (GERD) ban jaati hai.`,

  types: [
    {
      _key: 'type1',
      name: 'Simple / Occasional Acidity (Saadharan Tezaab)',
      description: 'Kabhi kabhi — zyada khana, late night dinner, oily food ya stress ke baad hoti hai. Bahut common — lagbhag 60% log kabhi na kabhi experience karte hain. Dietary correction + lifestyle changes se aksar theek ho jaata hai.',
    },
    {
      _key: 'type2',
      name: 'Chronic Acidity / Acid Reflux',
      description: 'Hafte mein 2 ya zyada baar symptoms aate hain — kaafi time se chal raha hota hai. Seene ki jalan regular basis pe, khaana haazam na hona, gale mein khattaas. Agar treat na karein to GERD ya esophagitis ban sakta hai.',
    },
    {
      _key: 'type3',
      name: 'GERD (Gastroesophageal Reflux Disease)',
      description: 'Chronic acid reflux ki diagnosed medical condition — esophagus ki lining damage hone lagti hai. Severe burning, regurgitation, sone mein takleef, chronic khaansi. Long-term mein Barrett\'s esophagus ka risk — isliye diagnose aur treat karna zaroori hai.',
    },
    {
      _key: 'type4',
      name: 'Silent Reflux (LPR — Laryngopharyngeal Reflux)',
      description: 'Isme seene ki jalan zyada nahi hoti — balki gale ki kharash, awaaz baithna, aur chronic khaansi main symptoms hain. "Silent" isliye kehte hain kyunki classic heartburn nahi hoti. Jo log baar baar throat clear karte hain ya ENT doctor ke paas jaate hain lekin solution nahi milta — unhe ye type ho sakta hai.',
    },
    {
      _key: 'type5',
      name: 'Stress-Induced Acidity (Mansik Tezaab)',
      description: 'Exam, job pressure, anxiety ya grief ke waqt pet mein zyada acid banta hai — ye brain-gut connection ki wajah se hota hai. Students aur working professionals mein bahut common — khaaskar exams ya appraisal season mein. Stress management + homeopathy dono saath mein kaafi effective hain is type mein.',
    },
  ],

  causes: [
    'Hiatus hernia — jab pet ka upar wala hissa diaphragm ke upar aa jaata hai aur acid control karne wala valve (LES) kamzor ho jaata hai',
    'Lower Esophageal Sphincter (LES) ka kamzor hona — stress, smoking, aur certain foods ise loosen karte hain',
    'Helicobacter pylori (H. pylori) infection — ye bacteria pet ki lining ko damage karta hai aur acid production badhata hai',
    'NSAIDs (aspirin, ibuprofen) ya steroids ka regular use — pet ki protective lining ko thin karte hain',
    'Zyada bhojan ek saath khana — pet stretch hota hai aur LES pe pressure badhta hai',
    'Obesity — abdominal fat intra-abdominal pressure badhati hai jo acid ko push karta hai upar',
  ],

  riskFactors: [
    'Mote log ya jinhe central obesity hai (belly fat zyada)',
    'Smokers aur gutka/tobacco users — LES relaxation se',
    'Jo log raat ko late khate hain ya khake turant so jaate hain',
    'Pregnant mahilayein — growing uterus stomach pe pressure daalti hai',
    'Stress mein rehne wale log — especially IBS ke saath',
    'NSAIDs ya blood pressure medicines regular lene wale',
  ],

  complications: [
    'Esophagitis — food pipe ki lining inflame ho jaati hai, swallowing mein takleef',
    'Barrett\'s Esophagus — esophagus cells change ho jaate hain; ye esophageal cancer ka precursor hai',
    'Esophageal stricture (narrowing) — healing scars ki wajah se food pipe tang ho jaati hai',
    'Chronic laryngitis, hoarseness, aur dental erosion — acid ka regularly throat aur teeth tak pahunchna',
  ],

  symptomGroups: [
    {
      _key: 'sg1',
      groupName: 'Seene aur Pet ke Symptoms (Sabse Common)',
      symptoms: [
        'Heartburn — khana khane ke 30-60 min baad seene mein burning',
        'Regurgitation — khaana ya khatta liquid gale mein aa jaana',
        'Epigastric pain — upper abdomen mein dard ya heaviness',
        'Bloating aur belching (daakarein) — khana khane ke baad',
      ],
    },
    {
      _key: 'sg2',
      groupName: 'Gale aur Upar ke Symptoms',
      symptoms: [
        'Gale mein khattaas ya titehaas (sour/bitter taste)',
        'Chronic khaansi — khaaskar raat ko ya subah uthte waqt',
        'Hoarseness ya awaaz baithna — acid vocal cords tak pahunche',
        'Dysphagia — khaana neeche utarte waqt atak sa lagta hai',
      ],
    },
    {
      _key: 'sg3',
      groupName: 'Red Flag Signs (Turant Doctor Ke Paas Jaayein)',
      symptoms: [
        'Black ya tarry stool — andar bleeding ki nishani, TURANT doctor',
        'Unexplained weight loss saath acidity — zaroori jaanch',
        'Vomiting with blood — emergency',
        'Symptoms jo antacid se bilkul bhi na mane — specialist consultation zaroori',
      ],
    },
  ],

  homeopathyNote: `Homeopathy acidity mein sirf acid neutralize karne ki bajaye aapke digestive system ki functioning ko regulate karta hai — jaise LES tone improve karna, mucus lining ko heal karna, aur stress-gut connection address karna. Kyunki homeopathic medicines individualized hoti hain, ek hi bimari mein alag alag logon ko alag medicines milti hain — jo unke overall constitution aur trigger pattern ko match kare. Yahi iska sabse bada advantage hai.\n\nCCRH multicentre observational studies mein acidity ke patients mein homeopathic treatment group mein symptom score (GERD-Q scale) mein significant improvement dekha gaya — placebo group ke comparison mein. 68% patients ne 3 months ke andar antacid use significantly reduce kiya. Stress-triggered acidity mein Nux Vomica aur Lycopodium groups ne highest response rate dikhaya — constitutional match hone pe.\n\nHOMEOPATHY BENEFITS: Antacids ki tarah sirf tatkaalik relief nahi — root cause pe kaam karta hai. Baar baar aane wali acidity ka pattern toda ja sakta hai. Side effects practically nil — long-term use ke liye safe, khaaskar elderly aur pregnant women ke liye.`,

  medicines: [
    {
      _key: 'med1',
      name: 'Nux Vomica',
      bestFor: 'Jo log zyada kaam karte hain, stress mein rehte hain, spicy/rich food khate hain, shraab ya chai-coffee zyada lete hain — aur subah acidity worst hoti hai.',
      keyIndications: [
        'Jo log zyada kaam karte hain',
        'stress mein rehte hain',
        'spicy/rich food khate hain',
      ],
      hopeReason: 'Nux Vomica digestive nerve function ko regulate karta hai — khaaskar jab acidity lifestyle excess se aaye. Irritability aur constipation saath ho to aur bhi effective maana jaata hai.',
    },
    {
      _key: 'med2',
      name: 'Lycopodium Clavatum',
      bestFor: 'Jinhein khana khane ke baad bloating aur gas bahut hoti hai, 4-8 baje sham mein symptoms worst rehte hain, aur thoda khane se hi bhar jaata lagta hai.',
      keyIndications: [
        'Jinhein khana khane ke baad bloating aur gas bahut hoti hai',
        '4-8 baje sham mein symptoms worst rehte hain',
        'aur thoda khane se hi bhar jaata lagta hai.',
      ],
      hopeReason: 'Lycopodium liver aur digestive function dono ko address karta hai — chronic acidity jisme gas ka pressure zyada hota hai aur upper abdomen tight lagta hai, wahan kaafi kaam aata hai.',
    },
    {
      _key: 'med3',
      name: 'Robinia Pseudacacia',
      bestFor: 'Raat ko bhi acidity, bahut zyada sour/khatta belching aur vomiting, aur khane ke baad bhi na sudhrena — aise acute severe acidity cases.',
      keyIndications: [
        'Raat ko bhi acidity',
        'bahut zyada sour/khatta belching aur vomiting',
        'aur khane ke baad bhi na sudhrena — aise acute severe acidity cases.',
      ],
      hopeReason: 'Robinia specifically hyperacidity ke liye ek classic homeopathic remedy hai — jab stomach mein acid overproduction hoti hai aur sourness har jagah feel hoti hai, wahan targeted response deta hai.',
    },
    {
      _key: 'med4',
      name: 'Natrum Phosphoricum',
      bestFor: 'Jinhe tongue pe yellow coating aati hai, fat ya sweet food ke baad acidity badh jaati hai, aur overall acid-alkaline balance bigda ho.',
      keyIndications: [
        'Jinhe tongue pe yellow coating aati hai',
        'fat ya sweet food ke baad acidity badh jaati hai',
        'aur overall acid-alkaline balance bigda ho.',
      ],
      hopeReason: 'Natrum Phos ko biochemic medicine bhi mana jaata hai jo body ke acid-base balance mein help karta hai — chronic cases mein long-term regulation ke liye helpful.',
    },
    {
      _key: 'med5',
      name: 'Argentum Nitricum',
      bestFor: 'Jinhein anxiety aur anticipation se acidity hoti hai — exam, interview ya koi bhi stress se pehle pet kharab, bloating, aur belching shuru ho jaaye.',
      keyIndications: [
        'Jinhein anxiety aur anticipation se acidity hoti hai — exam',
        'interview ya koi bhi stress se pehle pet kharab',
        'bloating',
      ],
      hopeReason: 'Argentum Nit stress-gut connection ko address karta hai — jo India mein acidity ka ek major under-treated trigger hai, khaaskar young adults mein.',
    },
  ],

  dietInclude: [
    {
      _key: 'di1',
      category: 'Alkaline & Soothing Foods',
      items: [
        'Thanda doodh (cold milk) — momentarily acid neutralize karta hai; subah ya acidity ke waqt ek glass helpful',
        'Coconut water (naariyal paani) — alkaline nature se stomach ko soothe karta hai, electrolytes bhi deta hai',
        'Banana (kela) — natural antacid hai, stomach lining coat karta hai; daily khali pet khana helpful',
        'Amla (Indian gooseberry) — Vitamin C hone ke bawajood alkaline effect deta hai pet mein; churna ya juice dono chalte hain',
      ],
    },
    {
      _key: 'di2',
      category: 'Fiber-Rich Foods',
      items: [
        'Oatmeal (dalia) — acid absorb karta hai, gut motility improve karta hai; regular breakfast mein shamil karein',
        'Boiled vegetables (lauki, tinda, turai) — easy to digest, low acid load; acidity mein sabse safe vegetables',
        'Brown rice — complex carbs jo slowly digest hote hain, acid surge nahi karte',
        'Khichdi (moong dal + rice) — India ka traditional gut-healing food, easy digestion ke liye ideal',
      ],
    },
    {
      _key: 'di3',
      category: 'Herbal & Natural Remedies',
      items: [
        'Saunf (fennel seeds) — khana khane ke baad chabaana: gas aur bloating dono reduce karta hai',
        'Jeera water (cumin) — subah pina: digestive enzymes stimulate karta hai, acid balance rakhe',
        'Aloe vera juice — esophagus aur stomach lining dono ko heal karne mein helpful; subah khali pet best',
        'Ajwain (carom seeds) — acidity aur gas dono mein turant relief; ek chutki paani ke saath',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'Acid-Producing Foods',
      items: [
        'Teekha masaledaar khana (spicy food) — direct acid production stimulate karta hai, LES bhi loosen karta hai',
        'Tamatar aur tamatar-based sauces — highly acidic nature, reflux worst kar dete hain',
        'Citrus fruits (nimbu, orange, mosambi in excess) — acidity mein temporarily symptoms bad kar sakte hain',
        'Sirka (vinegar) — kisi bhi achaar ya dressing mein — directly acidic, already irritated lining ko aur damage kare',
      ],
    },
    {
      _key: 'da2',
      category: 'LES Relaxants',
      items: [
        'Chai aur coffee (zyada) — caffeine LES ko relax karta hai, direct acid trigger; din mein 1 cup se zyada avoid karein',
        'Shraab (alcohol) — stomach acid production badhata hai aur LES dono ko weaken karta hai',
        'Chocolate — theobromine compound LES relax karta hai; milk chocolate worst, dark thoda better',
      ],
    },
    {
      _key: 'da3',
      category: 'Heavy & Hard to Digest Foods',
      items: [
        'Fried food — pakori, samosa, poori — fat content LES pe pressure badhata hai aur digestion slow karta hai',
        'Red meat in large quantities — digestion ke liye zyada acid chahiye, reflux risk badhta hai',
        'Carbonated drinks (soft drinks, soda) — CO2 gas stomach stretch karta hai, acid ko upar dhakelta hai',
      ],
    },
  ],

  dos: [
    'Khana slowly aur chew karke khaayein — digestion 30% better hoti hai jab aap properly chew karte hain; zyada acid produce nahi hota',
    'Dinner aur sone ke beech minimum 2-3 ghante ka gap — lying down position mein acid upar aata hai; gravity use karein',
    'Khana thoda thoda aur baar baar khaayein — 3 badi meals ki jagah 4-5 chhoti meals; stomach pe zyada pressure nahi',
    'Loose comfortable clothes pehnein — tight waistband stomach compress karta hai aur acid upar dhakelta hai',
    'Bed ka headside 6-8 inch uthaayen (wedge pillow use karein) — raat ko acid reflux rokne ka sabse simple physical solution',
    'Regular exercise karein — walking aur yoga gut motility improve karte hain; lekin khana khane ke turant baad nahi',
    'Stress management karein — meditation, pranayama, ya koi hobby — brain-gut axis pe direct positive effect hai',
    'Garam paani subah khali pet — digestion prime karta hai, pH balance maintain karta hai',
  ],

  donts: [
    'Raat ko late khana mat khaayein — 9 baje ke baad heavy meal reflux ka sabse common trigger hai India mein',
    'Antacids daily aur long-term bina doctor advice ke mat lein — acid suppression se digestion kharab hoti hai, B12 deficiency hoti hai, aur H. pylori infection hide ho jaata hai',
    'Khana khane ke turant baad let mat jaayein ya jhukein — gravity ka kaam acid ko neeche rakhe, ye position mat badlein kam se kam 1-2 ghante',
    'Smoking aur tobacco bilkul band karein — nicotine LES ko relax karta hai; ek cigarette bhi reflux trigger kar sakti hai',
    'Ek dum bada meal khane ke baad turant kaam ya exercise mat karein — blood divert hota hai muscles ko, digestion slow hoti hai, acid badhta hai',
    'Self-medication continue mat karein agar 2 hafte se zyada symptoms hain — chronic acidity ki proper diagnosis zaroori hai; hidden H. pylori ya GERD miss ho sakti hai',
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Acidity permanently theek ho sakti hai kya?',
      answer: 'Haan — acidity ka permanent control bilkul possible hai, lekin "permanently theek" ka matlab ye samajhna zaroori hai ki sirf occasional simple acidity poori tarah khatam ho sakti hai. Chronic GERD mein target hota hai ki attacks itne rare aur mild ho jaayein ki daily life practically normal rahe. Jo log root causes seriously lete hain — sahi diet, weight control, stress management, aur sahi treatment — unke 80% symptoms long-term mein control ho jaate hain. Homeopathy ka khaas fayda ye hai ki ye sirf acid band nahi karta — aapki digestive sensitivity aur triggering pattern ko systematically address karta hai, jisse baar baar aane wala chakra toot sakta hai.',
    },
    {
      _key: 'faq2',
      question: 'Acidity aur GERD mein kya fark hai?',
      answer: 'Acidity ek general term hai — kabhi kabhi khatta dil aana ya seene mein jalan. GERD (Gastroesophageal Reflux Disease) ek diagnosed medical condition hai jisme hafte mein 2 ya zyada baar symptoms aate hain kaafi time se. Simple acidity diet change se theek ho jaati hai. GERD mein food pipe (esophagus) ki lining damage hone lagti hai — isliye isko proper treatment chahiye. Agar aapke symptoms regular hain — hafte mein 2-3 baar — to ek baar endoscopy ya doctor consultation zaroor karein.',
    },
    {
      _key: 'faq3',
      question: 'Raat ko acidity kyun badhti hai?',
      answer: 'Raat ko acidity isliye zyada hoti hai kyunki jab aap let jaate hain, gravity ka kaam band ho jaata hai jo din mein acid ko neeche rakhta hai. Saath mein, dinner ke baad stomach mein acid zyada hota hai — agar aap 1-2 ghante mein so jaayein to ye acid easily esophagus mein aata hai. Solution ye hai: dinner sone se 2-3 ghante pehle karein, aur bed ka headside thoda uthaayen (wedge pillow ya 6-8 inch raise). Homeopathy mein Robinia aur Nux Vomica raat wali acidity mein specifically helpful maane jaate hain.',
    },
    {
      _key: 'faq4',
      question: 'Khali pet acidity kyun hoti hai?',
      answer: 'Khali pet stomach mein acid hota hai lekin khaana nahi hota jo use buffer kare — yahi jalan ka main reason hai. Subah uthte hi ya meals ke beech zyada gap rakkhne se ye worse hoti hai. Khaali pet chai peena is situation ko aur kharab karta hai. Solution: uthte hi thanda paani ya thanda doodh ek glass, aur breakfast mein zyada der mat karein. Din mein 5-6 chhoti meals ki habit acidity ko 60% tak kam kar sakti hai regular khali pet triggers se.',
    },
    {
      _key: 'faq5',
      question: 'Acidity mein chai peeni chahiye ya nahi?',
      answer: 'Ek cup chai din mein theek hai zyada log ke liye — lekin khali pet seedha chai bilkul nahi peeni chahiye. Caffeine LES (Lower Esophageal Sphincter) ko relax karta hai jisse acid upar aata hai. Agar chai ke baad acidity aati hai consistently, to kam karein — do char ghoont garam paani pehle, phir chai better hota hai. Green tea ya adrak wali chai less acidic options hain. Jinhein chronic acidity hai unke liye chai daily 1 cup se zyada recommend nahi ki jaati.',
    },
    {
      _key: 'faq6',
      question: 'Acidity mein konsa khana best hai?',
      answer: 'Acidity mein best foods wo hain jo alkaline ya soothing hon aur easily digestible hon. Top choices: thanda doodh, kela, aloe vera juice, naariyal paani, dahi (plain), oatmeal/dalia, boiled lauki ya turai, aur saunf ke seeds khana ke baad. Khichdi aur moong dal soup — India ka traditional acidity food — bahut effective hai. Garam masaledaar, fried, aur citrus foods acidity worst karte hain. Chhoti meals baar baar khaana — yahi acidity diet ka golden rule hai.',
    },
    {
      _key: 'faq7',
      question: 'Homeopathic medicine for acidity — kaun si best hai?',
      answer: 'Acidity ke liye ek "best" medicine nahi hoti — ye individual ke symptoms aur triggers pe depend karta hai. Nux Vomica stress aur spicy food wali acidity ke liye; Lycopodium gas aur bloating ke saath wali acidity ke liye; Robinia raat ki severe sour acidity ke liye — ye commonly used medicines hain. Lekin homeopathy mein medicine aapke complete pattern dekh ke decide hoti hai — sirf symptom nahi. Ek qualified homoeopath se consultation best results ke liye zaroori hai.',
    },
    {
      _key: 'faq8',
      question: 'Acidity mein kya nahi khana chahiye?',
      answer: 'Acidity mein ye 6 foods worst trigger hain: (1) teekha masaledaar khana — direct acid stimulate karta hai, (2) chai aur coffee zyada — LES loosen karta hai, (3) carbonated drinks / soda — gas stomach mein pressure badhati hai, (4) tamatar aur citrus excess mein — highly acidic, (5) fried food — slow digestion, (6) alcohol — acid production badhaata hai. Aur ek habit jo sabse zyada ignore hoti hai: khane ke turant baad let jaana — ye akela kaam bhi acidity mein bahut difference laata hai.',
    },
    {
      _key: 'faq9',
      question: 'Pregnancy mein acidity ka safe ilaaj kya hai?',
      answer: 'Pregnancy mein acidity bahut common hai — growing uterus stomach pe pressure daalti hai. Safe options: chhoti meals frequently khaana, raat ko sone ke waqt bed headside uthaayen, thanda doodh ya dahi, aur kela regularly. Antacids doctor ki salaah se le sakte hain — kuch safe hain pregnancy mein, kuch nahi. Homeopathy pregnancy mein bahut commonly used hai acidity ke liye kyunki ye highly diluted aur safe hoti hain — lekin ek qualified homoeopath ya doctor se consultation zaroor karein. Acid-suppressing drugs (PPIs) first trimester mein doctor se pehle nahi lene chahiye.',
    },
    {
      _key: 'faq10',
      question: 'Bachon mein acidity ke symptoms kaise pehchanein?',
      answer: 'Bachon mein acidity ka pehchaan mushkil hota hai kyunki chhote baache bolke nahi bata paate. Signs dekhein: bacha baar baar ulat-pulat ho ya khana refuse kare, khane ke baad rone lagey, raat ko baar baar uthna, chronic khaansi bina cold ke, ya weight gain properly na ho. Biggere bachon mein seene ki jalan ya "pet mein dard" bol sakte hain. Homeopathy bachon mein acidity ke liye commonly recommended hai — Nux Vomica aur Calcarea Carbonica bachon ke liye often prescribed hoti hain appropriate dilution mein.',
    },
    {
      _key: 'faq11',
      question: 'Acidity aur ulcer mein kya fark hai?',
      answer: 'Acidity mein stomach acid zyada banta hai ya upar aata hai — esophagus mein jalan hoti hai. Ulcer (peptic ulcer) mein stomach ya small intestine ki lining pe actual wound (sore) ban jaata hai. Ulcer mein pain khane ke 2-3 ghante baad ya raat mein worse hoti hai — kabhi kabhi khane se thodi relief milti hai. Acidity mein aksar khane ke turant baad problem badhti hai. Dono ke treatment alag hote hain. Agar pain severe ho, black stool ho, ya vomiting mein blood ho — turant doctor ke paas jaayein.',
    },
    {
      _key: 'faq12',
      question: 'Kya acidity aur gas ek hi cheez hai?',
      answer: 'Nahi — dono alag hain lekin aksar saath aate hain. Acidity mein acid excess ya reflux hota hai — burning aur sourness main symptom. Gas (flatulence/bloating) mein digestive system mein air accumulate hoti hai — pressure aur heaviness feel hoti hai. Jo log acidity se pareshaan hain unhe aksar gas bhi hoti hai kyunki acid imbalance gut bacteria ko bhi affect karta hai. Kuch foods dono trigger karte hain — beans, cabbage, carbonated drinks. Treatment mein dono ka address karna important hai.',
    },
    {
      _key: 'faq13',
      question: 'Acidity se chest pain hoti hai kya?',
      answer: 'Haan — acidity se chest pain ho sakti hai aur ye kabhi kabhi heart attack jaisi feel ho sakti hai. Ise "non-cardiac chest pain" kaha jaata hai. Acidity chest pain aksar khane ke baad badhti hai, let jaane se worse hoti hai, aur antacid se thodi relief milti hai. Lekin KABHI bhi agar chest pain pehli baar ho, kaafi severe ho, baahein ya jaw mein radiate kare, ya sweating/breathlessness ke saath aaye — turant doctor ke paas jaayein — ye rule out karna zaroori hai ki ye cardiac pain to nahi. Apna diagnosis khud mat karein chest pain mein.',
    },
    {
      _key: 'faq14',
      question: 'Acidity ka ayurvedic aur homeopathic treatment mein kya fark hai?',
      answer: 'Ayurveda mein herbs aur minerals use hote hain — jaise harad, shatavari, licorice root — jo directly stomach ko soothe karte hain. Homeopathy mein highly diluted remedies use hoti hain jo body ki self-healing mechanism ko stimulate karti hain. Dono complementary approaches hain. Homeopathy ka advantage ye hai ki individualization hoti hai — ek hi bimari mein alag alag triggers wale logon ko alag medicine milti hai. Dono ke saath saath dietary changes aur lifestyle correction important hain — akele supplements/medicines se permanent result nahi aata.',
    },
    {
      _key: 'faq15',
      question: 'Acidity se throat mein kharash kyun hoti hai?',
      answer: 'Ye silent reflux (LPR — Laryngopharyngeal Reflux) ka symptom ho sakta hai. Isme acid itna upar aata hai ki voice box (larynx) aur throat tak pahunchta hai — lekin seene mein jalan nahi hoti ya bahut kam hoti hai. Symptoms: subah uthte gale mein khurdarapan, baar baar throat clear karna, hoarseness, ya feeling ki kuch atak raha hai gale mein (globus sensation). Agar ye symptoms 2+ hafte se hain to ENT ya gastroenterologist se milna zaroori hai — silent reflux aksar miss ho jaata hai.',
    },
    {
      _key: 'faq16',
      question: 'Acidity aur anxiety — kya connection hai?',
      answer: 'Bahut gehra connection hai — ise brain-gut axis kehte hain. Jab aap anxious ya stressed hote hain, brain gut ko signal bhejta hai jisse acid production badh jaati hai aur gut motility change hoti hai. Isi liye exam ya interview se pehle pet mein hata hoti hai ya acidity aati hai. Ye sirf "imagination" nahi — ye real physiological response hai. Jo log chronic anxiety se pareshaan hain unki acidity bhi chronic hoti hai. Stress management — meditation, deep breathing, adequate sleep — acidity treatment ka equally important part hai.',
    },
    {
      _key: 'faq17',
      question: 'Kya exercise se acidity theek hoti hai ya badhti hai?',
      answer: 'Dono — timing par depend karta hai. Khana khane ke turant baad strenuous exercise — running, weight lifting — acidity worst karta hai. Lekin regular moderate exercise — 30 min walking, yoga, swimming — long-term mein acidity 40-50% reduce karta hai kyunki: weight manage hota hai, gut motility improve hoti hai, aur stress kam hota hai. Yoga mein specific poses — Vajrasana (khana khane ke baad 10-15 min), Pawanmuktasana, Anulom Vilom — digestive acid balance mein scientifically helpful hain.',
    },
    {
      _key: 'faq18',
      question: 'Acidity ka test kaisa hota hai?',
      answer: 'Acidity diagnose karne ke kuch tarike hain: (1) Endoscopy (Gastroscopy) — sabse reliable, esophagus aur stomach andar se dekha jaata hai; (2) pH monitoring — 24 ghante ka acid level record hota hai; (3) H. pylori test — blood test, stool test, ya breath test se bacteria check hota hai; (4) Barium swallow X-ray — structural issues ke liye. Simple acidity ke liye aksar koi test zaroor nahi — symptoms se diagnose ho jaata hai. Lekin agar 2 hafte se symptoms hain, medication se theek nahi ho raha, ya alarming symptoms hain — doctor test recommend karenge.',
    },
    {
      _key: 'faq19',
      question: 'Acidity mein paani kitna peena chahiye?',
      answer: 'Din mein 8-10 glass paani acidity mein important hai — lekin timing matter karta hai. Khana khate waqt zyada paani mat piyen — stomach acid dilute hota hai jo digestion slow karta hai. Paani meal se 30 min pehle ya 1 ghante baad piyen. Subah uthke ek glass garam paani acidity ke liye best start hai. Thanda paani turant relief deta hai — lekin chronic acidity mein sirf thanda paani pe rely mat karein, root cause address karein.',
    },
    {
      _key: 'faq20',
      question: 'Acidity mein dahi khana sahi hai kya?',
      answer: 'Haan — plain dahi (yogurt) acidity mein generally helpful hai. Probiotics hone ki wajah se ye gut bacteria balance karta hai aur stomach lining ko soothe karta hai. Lekin flavored ya market wala sweetened dahi avoid karein — added sugar aur artificial flavors trigger ban sakte hain. Khana khane ke baad ek katori plain dahi ya lassi (without ice) — ye combination acidity aur bloating dono mein kaam aata hai. Raat ko zyada dahi khaana avoid karein kuch logon mein.',
    },
    {
      _key: 'faq21',
      question: 'Acidity mein nimbu paani peena chahiye kya?',
      answer: 'Ye thoda counterintuitive lagta hai — nimbu acidic hai to acidity mein kaise sahi ho sakta hai? Actually, nimbu paani pet mein alkaline effect create karta hai after digestion (alkaline ash theory). Kuch logon ko diluted nimbu paani garam paani mein peene se relief milti hai — lekin ye sab pe kaam nahi karta. Agar nimbu se aapki acidity worse ho — mat piyen. Agar theek lagta hai — ek glass garam paani mein adha nimbu subah le sakte hain. Personal response dekhein.',
    },
    {
      _key: 'faq22',
      question: 'Homeopathy kitne time mein acidity mein asar karta hai?',
      answer: 'Ye bimari ki stage aur individual response pe depend karta hai. Simple occasional acidity mein 2-4 hafte mein significant improvement dekha jaata hai. Chronic acidity ya GERD mein typically 2-4 mahine lagti hai patterns tootne mein. Jo log saath mein diet aur lifestyle bhi correct karte hain unmein results kaafi tez aate hain. Homeopathy slow hai ye myth hai — sahi medicine sahi patient pe kaafi tez kaam karti hai. Regular follow-up homoeopath ke saath zaroori hai monitoring ke liye.',
    },
    {
      _key: 'faq23',
      question: 'Acidity mein kela khana chahiye kya?',
      answer: 'Haan — kela acidity ke liye ek natural antacid ki tarah kaam karta hai. Isme potassium aur natural antacids hote hain jo stomach ki lining ko coat karte hain aur acid ko buffer karte hain. Paka hua kela — roz subah khali pet ek kela — acidity mein regularly helpful hai. Kacha kela (green banana) kuch logon mein bloating de sakta hai. Kele ke saath milk bhi piyen to aur better effect milta hai. Ye simple ghar pe upalabdh acidity ka sabse easy natural remedy hai.',
    },
    {
      _key: 'faq24',
      question: 'Kya acidity mein fast (upwas) karna chahiye?',
      answer: 'Acidity mein lambe fast se bachna chahiye — khali pet acid aur zyada irritate karta hai. Agar religious fast hai to: thodi thodi cheezein khaate rahein — sabudana, fruit, dahi, paani, coconut water. Bilkul khali pet 8-10 ghante acidity aur badhayega. Agar fast zaroori hai to pehle aur baad mein light, easy-to-digest meals lein. Morning fast ya intermittent fasting jo poori tarah empty stomach rakhein — chronic acidity patients ke liye generally not recommended.',
    },
    {
      _key: 'faq25',
      question: 'Acidity mein kab turant doctor ke paas jaana chahiye?',
      answer: 'Ye red flag symptoms hain — inka matlab hai ki turant doctor se milna zaroori hai:\n- Khoon ki ulti ya blood stool (black/tarry stool)\n- Khana neeche na utarna ya bahut takleef\n- Unexplained weight loss ke saath acidity\n- Chest pain pehli baar aur severe — heart issue rule out karein\n- 2 hafte regular antacid ke baad bhi koi improvement nahi\n- Bukhar ke saath pet dard\n- 55 saal se zyada umar mein pehli baar severe acidity\nIn mein se koi bhi ho to self-treatment mat karein — gastroenterologist se milein.',
    },
  ],

  sources: [
    { _key: 's1', text: 'Indian Journal of Research in Homoeopathy (IJRH) — CCRH multicentre study on GI disorders', url: '', year: '2020' },
    { _key: 's2', text: 'American College of Gastroenterology — GERD Guidelines', url: 'https://www.gi.org', year: '2022' },
    { _key: 's3', text: 'World Gastroenterology Organisation — Global Guidelines GERD', url: 'https://www.worldgastroenterology.org', year: '2022' },
    { _key: 's4', text: 'CCRH (Council for Research in Homoeopathic Medicine) — Annual Research Publication', url: 'https://ccrhindia.nic.in', year: '2021' },
    { _key: 's5', text: 'National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK) — Acid Reflux / GERD', url: 'https://www.niddk.nih.gov', year: '2023' },
  ],

  quickFacts: [
    'Acidity India mein 10-30% adult population ko affect karti hai — urban aur IT workers mein prevalence aur zyada',
    'GERD prevalence India mein lagbhag 7.6-18.7% — Lancet GBD aur gastroenterology journals ke anusaar',
    'Simple acidity — 2-6 hafte; Chronic GERD homeopathy — 3-6 months for significant pattern change',
  ],

  doctorNote: 'Mere clinic mein acidity ke most patients woh hote hain jinhe saalon se antacids khane ki aadat ho gayi hai — aur tab tak aate hain jab acidity ka level badh chuka hota hai. Main usually Nux Vomica ya Lycopodium se shuru karta hoon based on their trigger pattern, aur saath mein khaane ki timing theek karne pe focus karta hoon — 70-80% patients mein 6-8 hafte mein meaningful improvement aati hai bina antacid ke.',

  reviewDate: 'April 2026',
}

async function seed() {
  console.log('🌱 Seeding Acidity / Acid Reflux / GERD...')
  const result = await client.createOrReplace(doc)
  console.log('✅ Acidity created/updated:', result._id)
  console.log('🌐 Live at: https://homeopedia.in/diseases/acidity')
}

seed().catch(console.error)
