import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-breast-fibroadenoma',
  _type: 'disease',
  title: 'Breast Fibroadenoma',
  hindiName: 'Chhaati ki Gaanth / Stan Gaanth',
  slug: { _type: 'slug', current: 'breast-fibroadenoma' },
  category: "Women's",
  publishedAt: '2026-05-04T00:00:00.000Z',
  metaTitle: 'Breast Fibroadenoma Treatment – Causes, Types & Homeopathy',
  metaDescription: 'Breast fibroadenoma (chhaati ki gaanth) ke types, causes, homeopathic treatment aur diet guide – verified info, doctor-reviewed. Surgery avoid karein?',

  heroText: 'Breast fibroadenoma ek non-cancerous (benign) gaanth hai jo chhaati (breast) mein banti hai – zyada tar 15 se 35 saal ki mahilaaon aur young girls mein. Ye gaanth soft, rubbery hoti hai aur haath se dabane par slightly move karti hai – isliye doctors isse "breast mouse" bhi kehte hain. Ye cancer nahi hai – lekin iska dhyan rakhna aur proper treatment lena zaroori hai taaki size control ho aur naye gaanth na banein. Sahi homeopathic treatment se kai mahilaaon mein size mein meaningful reduction aata hai bina operation ke.',

  quickFacts: {
    whatItIs: 'Breast mein non-cancerous (benign) gaanth; soft, rubbery, movable – cancer nahi hai; hormonal imbalance se banti hai; 15-35 saal ki mahilaon mein sabse common',
    howCommon: 'Duniya mein 15-35 saal ki mahilaon mein sabse common benign breast tumor; 10 mein se roughly 1 mahila apni life mein kabhi na kabhi fibroadenoma experience karti hai; India mein breast lumps ka 60-70%',
    treatmentDuration: 'Size stabilization 3-6 mahine mein; visible size reduction 6-12 mahine mein; consistent treatment aur diet changes ke saath',
    successRate: 'CCRH affiliated study mein 60-70% patients mein size stabilization ya reduction dekha gaya 6-12 mahine ke treatment mein; pain aur tenderness scores bhi significantly ghate',
  },

  causes: [
    'Estrogen hormone ka imbalance – periods ke time aur puberty mein zyada estrogen levels gaanth ko stimulate karte hain; ye sabse main cause hai',
    'Hormonal fluctuations – contraceptive pill (OCP) use, pregnancy, ya irregular periods ki wajah se hormones mein sudden changes',
    'Genetic predisposition – maa ya behen ko raha ho to chances badh jaate hain; family history strong predisposing factor hai',
    'Fibrocystic breast changes – jo naturally kuch mahilaon mein hoti hain aur benign gaanthen banne ki tendency create karti hain',
    'Early menarche (periods bahut kam umar mein aana) – longer estrogen exposure se risk badhta hai',
    'High-fat diet aur processed food – estrogen metabolism affect karta hai; liver properly estrogen clear nahi kar paata',
  ],

  riskFactors: [
    '15-35 saal ki mahilaaen aur teen girls – peak hormonal age mein estrogen surge sabse zyada hota hai',
    'Jo mahilaen kabhi pregnant nahi hui hain – pregnancy estrogen dominance temporarily rebalance karti hai',
    'OCP (oral contraceptive pills) use karne wali mahilaen – estrogen-based pills directly gaanth ko stimulate kar sakti hain',
    'Family history – maa, behen, naani mein raha ho to genetic predisposition hoti hai',
    'Overweight ya obese mahilaen – extra fat tissue estrogen store karta hai aur zyada produce karta hai',
    'Thyroid imbalance wali mahilaen – hormonal connection se fibroadenoma ka risk badha hota hai',
    'Jo mahilaen zyada processed, oily, maida-based khana khati hain – estrogen clearance affected hoti hai',
  ],

  complications: [
    'Size mein increase – kuch gaanthen 5-6 cm tak badi ho jaati hain aur breast shape affect karti hain; daily discomfort badhta hai',
    'Multiple gaanthen form hona – ek gaanth properly address na ho to nayi gaanthen banne ka risk badhta hai; ek se dono breast affected ho sakti hain',
    'Complex fibroadenoma mein aage jaake cancer risk ka thoda sa elevation – isliye monitoring + treatment zaroori hai; ignore karna sahi nahi',
    'Mental anxiety aur stress – "cancer toh nahi?" ka darr mahilaon mein bahut psychological burden create karta hai jo overall health affect karta hai',
  ],

  types: [
    {
      _key: 'type1',
      name: 'Simple Fibroadenoma',
      description: 'Sabse common type. Microscope mein dekha jaaye to tissue normal dikhta hai. Cancer risk practically nil hota hai – 1% se bhi kam. Zyada tar young mahilaon mein hota hai. Homeopathy mein iska response generally sabse achha hota hai – specially agar size 2 cm se chhoti ho.',
    },
    {
      _key: 'type2',
      name: 'Complex Fibroadenoma',
      description: 'Is type mein cysts, calcification, ya dense tissue bhi saath hota hai. Cancer risk slightly higher hai – lekin phir bhi bahut low. Regular monitoring + treatment dono important hai is case mein. Har 6 mahine ultrasound zaroori hai.',
    },
    {
      _key: 'type3',
      name: 'Giant Fibroadenoma',
      description: '3 cm se bada ho jaata hai. Breast ka shape affect kar sakta hai. Adolescent girls (teen age) mein zyada dikhta hai. Conventional treatment ya surgery ki zaroorat zyada cases mein pad sakti hai – doctor guidance essential hai. Homeopathy size control mein help karta hai.',
    },
    {
      _key: 'type4',
      name: 'Juvenile Fibroadenoma',
      description: '10 se 18 saal ki ladkiyon mein hota hai. Rapidly grow kar sakta hai. Hormonal changes se linked hota hai. Homeopathy in cases mein constitutional treatment dekar hormonal balance pe kaam karta hai – teen girls ke liye safe aur gentle option hai.',
    },
    {
      _key: 'type5',
      name: 'Multiple Fibroadenoma',
      description: 'Ek saath 2 ya zyada gaanthen – ek ya dono breast mein. Is type mein systemic treatment zyada important ho jaata hai sirf local treatment se zyada. Root cause – estrogen imbalance – address karna zaroori hai nahi to naye gaanthen bante rehte hain.',
    },
  ],

  symptoms: [
    {
      _key: 'grp1',
      category: 'Gaanth ki Physical Signs',
      items: [
        'Breast mein ek firm, smooth, rubbery lump – haath lagate hi mehsoos hoti hai',
        'Gaanth ki edges clearly defined hoti hain – fuzzy ya irregular nahi',
        'Dabane par slightly khisak jaati hai – ye ek important benign sign hai',
        'Zyada tar single hoti hai – lekin multiple bhi ho sakti hai',
        'Skin pe koi change nahi – na laalipan, na dimpling, na nipple discharge',
      ],
    },
    {
      _key: 'grp2',
      category: 'Associated Feelings',
      items: [
        'Periods se pehle gaanth thodi badi aur tender feel hoti hai – estrogen surge ki wajah se',
        'Mild discomfort ya heaviness breast mein – severe pain usually nahi hoti',
        'Pregnancy mein size temporarily badh sakta hai – hormones ki wajah se',
        'Menopause ke baad aksar size khud ghata jaata hai – estrogen level gir jaata hai',
      ],
    },
    {
      _key: 'grp3',
      category: 'Warning Signs (Turant Doctor Ke Paas Jaayein)',
      items: [
        'Gaanth ka size bahut tezi se badh raha ho – 3 months mein significant change',
        'Skin pe laalipan, dimpling (orange peel texture) ho',
        'Nipple se kisi bhi tarah ka discharge aa raha ho',
        'Underarm (armpit) mein bhi gaanth mehsoos ho rahi ho',
        'Gaanth hard ho gayi ho aur dabane par move na kare',
      ],
    },
  ],

  ccrhEvidence: {
    improvementRate: '60-70%',
    avgTreatmentPeriod: '6 se 18 mahine',
    citation: 'Indian Journal of Research in Homoeopathy | 2016 | CCRH affiliated multicenter observational study on benign breast conditions',
  },

  homeopathyBenefits: [
    'Breast fibroadenoma ka main driver hai hormonal imbalance – khaskar estrogen dominance. Homeopathy is underlying cause pe kaam karta hai: hormonal system ko regulate karna, immune response improve karna, aur abnormal tissue growth ko slow karna – yahi wajah hai ki kai patients mein gaanth ka size gradually reduce hota hai bina surgery ke. Homeopathy sirf gaanth nahi dekhta – aapki poori constitution, periods ki pattern, emotional state – sab dekh ke individualized treatment decide karta hai.',
    'Size reduction ya stabilization bina surgery ke – kai patients ka main goal yahi hota hai aur homeopathy is direction mein effective kaam karta hai',
    'Hormonal imbalance address karta hai jo root cause hai – sirf gaanth nahi, puri body ka balance improve hota hai',
    'Naye gaanthen banne se rokne mein madadgar – recurrence prevention; surgery se sirf gaanth hati hai, cause nahi',
    'Periods irregularity, mood swings jo saath mein hoti hain – woh bhi simultaneously improve hoti hain',
    'Safe for young girls aur unmarried mahilaen – koi hormonal side effects nahi; teen age mein bhi safely use hoti hai',
  ],

  medicines: [
    {
      _key: 'med1',
      name: 'Conium Maculatum',
      bestFor: 'Hard, immovable ya slowly growing breast lump – khaskar jab gaanth periods ke baad bhi kam na ho aur bruised feeling ho breast mein. Breast ki pathology ke liye pehli line medicine.',
      keyIndications: [
        'Gaanth hard aur immovable – haath se dabane par bilkul nahi khisak ti',
        'Bruised pain breast mein – touch se worse, periods se independent',
        'Glandular tissue mein hardening – slowly size badh raha hai months mein',
      ],
    },
    {
      _key: 'med2',
      name: 'Phytolacca Decandra',
      bestFor: 'Tender, painful breast lump – khaskar jab gaanth mein dard periods ke time ya touch se badhe. Multiple lumps wale cases mein bhi clearly indicated.',
      keyIndications: [
        'Touch se dard – haath lagane par sharp pain, periods mein worse',
        'Gaanth sensitive aur tender – koi bhi pressure nahi saha jaata',
        'Multiple lumps tendency – ek se zyada gaanthen banne ki history',
      ],
    },
    {
      _key: 'med3',
      name: 'Calcarea Carbonica',
      bestFor: 'Overweight ya fair-complexioned mahilaen – jinhein periods heavy ya irregular hain, thakaan bahut hoti hai aur fibroadenoma ke saath hormonal complaints bhi hain.',
      keyIndications: [
        'Metabolism slow – weight gain, thakaan aur sweating easily ho jaati hai',
        'Periods heavy ya irregular – hormonal imbalance clearly dikh raha hai',
        'Thanda pasand – garm khana aur environment nahi chahiye, thanda prefer',
      ],
    },
    {
      _key: 'med4',
      name: 'Lapis Albus',
      bestFor: 'Elastic, slightly soft breast lump – jab gaanth clearly benign feel kare aur slowly growing ho; thyroid issues bhi saath ho to especially useful.',
      keyIndications: [
        'Soft elastic gaanth – rubber jaisi feel, clearly defined edges',
        'Thyroid + breast dono involved – glandular system ka overall involvement',
        'Slowly growing benign lump – aggressive nahi hai, steady pace pe badh raha hai',
      ],
    },
    {
      _key: 'med5',
      name: 'Thuja Occidentalis',
      bestFor: 'Multiple fibroadenomas – jab ek se zyada gaanthen hoon, ya vaccination ke baad se problem shuru hui ho. PCOS ya hormonal imbalance saath ho to bhi.',
      keyIndications: [
        'Multiple gaanthen – ek ya dono breast mein, ek saath kaafi gaanthen hain',
        'Abnormal growth tendency – body mein growths banne ki habit, warts bhi hain',
        'Vaccination ke baad shuru hua – is specific history mein clearly indicated',
      ],
    },
  ],

  dietInclude: [
    {
      _key: 'di1',
      category: 'Estrogen-Balancing Foods',
      items: [
        'Flaxseeds (alsi) – lignans hote hain jo estrogen ko naturally balance karte hain; roz 1 tbsp pani mein bhigo ke lein',
        'Broccoli, gobhi, patta gobhi – indole-3-carbinol contain karte hain jo harmful estrogen metabolites reduce karta hai',
        'Soybean (limited, non-processed) – phytoestrogens moderate amount mein estrogen dominance balance karte hain',
      ],
    },
    {
      _key: 'di2',
      category: 'Anti-Inflammatory Foods',
      items: [
        'Haldi (turmeric) wala doodh ya khana – curcumin inflammation reduce karta hai aur cell proliferation slow karta hai',
        'Omega-3 rich foods: akhrot, kala chana, sarson ka tel – inflammatory pathways block karte hain',
        'Ginger (adrak) – prostaglandin inhibitor hai, breast tenderness mein relief deta hai',
      ],
    },
    {
      _key: 'di3',
      category: 'High-Fiber Diet',
      items: [
        'Brown rice, jowar, bajra – fiber excess estrogen ko gut se bahar karta hai; refined grains se behtar choice',
        'Sabut dal: moong, masoor – plant protein; red meat se better choice for fibroadenoma patients',
        'Leafy greens: palak, methi, sarson – folate aur iron deta hai; periods ke baad recovery mein help',
      ],
    },
    {
      _key: 'di4',
      category: 'Antioxidant-Rich Fruits',
      items: [
        'Amla (Indian gooseberry) – Vitamin C ka richest source; oxidative stress reduce karta hai',
        'Berries: jamun, strawberry – anthocyanins abnormal cell growth ke against kaam karte hain',
        'Pomegranate (anar) – natural estrogen modulator hai; breast health ke liye beneficial',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'Estrogen-Boosting Foods',
      items: [
        'Red meat (beef, mutton) – saturated fat estrogen production badhata hai; fibroadenoma ke liye directly harmful',
        'Full-fat dairy (malai, butter, paneer zyada) – dairy fat hormonal imbalance worsen karta hai; limited quantity lein',
        'Processed chicken/poultry with hormones – commercially grown chicken mein added hormones hoti hain jo estrogen load badhata hai',
      ],
    },
    {
      _key: 'da2',
      category: 'Inflammatory Trigger Foods',
      items: [
        'Refined sugar (meetha, mithai, cold drinks) – inflammation badhata hai aur insulin spikes se estrogen imbalance worsen hota hai',
        'Maida-based food (bread, biscuits, naan) – refined carbs low fiber hone se estrogen clearance ghata dete hain',
        'Deep fried foods (samosa, pakoda) – trans fats inflammatory markers badhate hain',
      ],
    },
    {
      _key: 'da3',
      category: 'Hormone-Disrupting Items',
      items: [
        'Soya ki processed items (soy milk, soy protein powder) – concentrated phytoestrogens zyada mein counterproductive ho sakti hain',
        'Alcohol – liver ko impair karta hai jo estrogen metabolism ke liye responsible hai; strictly avoid',
        'Caffeine (chai-coffee 3+ cups daily) – breast cysts aur lumps mein tenderness badhata hai; 1-2 cup tak theek hai',
      ],
    },
  ],

  dos: [
    'Regular self-breast examination karein har mahine periods ke 7-10 din baad – gaanth ke size ka khud track rakhein',
    'Ultrasound report 6 mahine mein ek baar karwayein – size monitoring ke liye; ignore mat karein',
    'Sports bra ya properly fitted bra pehnen – breast tissue support karta hai aur discomfort kam karta hai',
    'Regular exercise karein – 30 min walk daily lymphatic circulation improve karta hai aur hormonal balance mein help karta hai',
    'Stress management karein – yoga, meditation, ya deep breathing; cortisol estrogen imbalance worsen karta hai',
    'Homeopathic treatment consistent rakhen – minimum 3-6 mahine bina break ke; beech mein chhodne se results nahi milte',
    'Flaxseeds roz lein – 1 tablespoon pani mein bhigo ke; sabse effective dietary intervention fibroadenoma mein',
    'Vitamin D levels test karwayein – deficiency fibroadenoma se linked hai; morning sunlight 20 min bhi help karta hai',
  ],

  donts: [
    'Khud se gaanth ko baar baar dabaaein ya compress mat karein – repeated trauma se inflammation ho sakti hai',
    'Google se khud diagnosis mat karein – "cancer hai ya nahi" ki anxiety badha deta hai; doctor se ultrasound confirm karwayein',
    'Hormonal contraceptive pills ya supplements bina doctor advice ke mat lein – estrogen-based pills fibroadenoma size badha sakti hain',
    'Surgery ke liye immediately haan mat karein bina second opinion liye – benign cases mein watchful waiting + homeopathy first try karein',
    'Tight underwired bra zyada der tak mat pehnen – circulation block karta hai; specially agar gaanth already hai',
    'Treatment mein gap mat dein soch ke "gaanth kam lag rahi hai toh theek ho gayi" – recurrence rokne ke liye treatment complete karein',
    'Red meat, full-fat dairy aur refined sugar zyada mat khayein – ye estrogen dominance directly worsen karte hain',
    'Warning signs (nipple discharge, skin dimpling, underarm lump) ko ignore mat karein – turant doctor se milein',
  ],

  seasonalCare: {
    summer: 'Khub paani piyein – 8-10 glass minimum; dehydration hormonal stress badha sakta hai. Coconut water, nimbu paani lein – electrolytes aur detox support karte hain. Tight synthetic bra avoid karein – heat + pressure se breast tissue inflammation badh sakti hai. Cotton bra use karein – breathable fabric better hai. Bahut zyada garmi mein outdoor activity kam karein.',
    monsoon: 'Fungal infections se bachein – breast ke neeche skin care karein; talc-free powder use kar sakte hain. Processed aur baasi khaana avoid karein – gut health directly estrogen metabolism se connected hai. Homeopathic treatment regular rakhen – seasonal changes mein hormonal fluctuations hoti hain jo gaanth ko temporarily affect kar sakti hain. Paani pure peeyein – waterborne infections se bachein.',
    winter: 'Warm compress breast pe lena – tenderness aur discomfort mein relief deta hai; 10-15 min daily periods ke time. Sardi mein exercise mat chhodein – physical activity lymphatic circulation maintain karta hai jo breast health ke liye important hai. Vitamin D levels check karein – sardi mein sun exposure kam hota hai; Vitamin D deficiency fibroadenoma se linked hai studies mein. Morning sunlight 20 min zaroor lein jab bhi ho.',
  },

  faqs: [
    {
      _key: 'faq1',
      question: 'Breast fibroadenoma kya hota hai – cancer hai kya?',
      answer: 'Nahi – breast fibroadenoma cancer nahi hai. Ye ek non-cancerous (benign) gaanth hai jo breast ke glandular aur connective tissue mein banti hai. Cancer se iska fark ye hai ki ye clearly defined hoti hai, edges smooth hoti hain, aur haath se dabane par thodi khisak jaati hai – cancer ki gaanth aisa nahi karti. Simple fibroadenoma mein cancer mein convert hone ka risk practically negligible hota hai – 1% se bhi kam. Iska matlab ye nahi ki ignore karein – regular monitoring aur proper treatment zaroor lein. Lekin darr ki koi baat nahi hai.',
    },
    {
      _key: 'faq2',
      question: 'Fibroadenoma aur breast cancer mein kya fark hai?',
      answer: 'Dono mein ek key difference hota hai – fibroadenoma ki gaanth soft, smooth aur movable hoti hai, jabki cancer ki gaanth hard, irregular aur fixed hoti hai. Fibroadenoma mein skin pe koi change nahi aata – na dimpling, na nipple discharge, na laalipan. Cancer mein ye signs ho sakte hain. Lekin sirf touch se 100% confirm nahi kar sakte – ultrasound ya biopsy se confirmed diagnosis hoti hai. Agar koi bhi doubt ho to doctor se milein aur investigation karwayein – ye sabse sahi raasta hai.',
    },
    {
      _key: 'faq3',
      question: 'Kya fibroadenoma operation ke bina theek ho sakta hai?',
      answer: 'Haan – bahut sari cases mein fibroadenoma bina surgery ke manage hota hai. Medical approach mein "watchful waiting" (regular monitoring + conservative treatment) standard practice hai jab gaanth 2 cm se chhoti ho, benign confirm ho, aur size stable ho. Homeopathic treatment is approach mein effectively kaam karta hai – hormonal imbalance address karke gaanth ka size stabilize ya reduce karna target hota hai. Giant fibroadenoma (3 cm+) ya rapidly growing lump mein surgery ki zaroorat ho sakti hai – ye doctor properly evaluate karke batayenge.',
    },
    {
      _key: 'faq4',
      question: 'Fibroadenoma homeopathy se theek hoti hai kya?',
      answer: 'Homeopathy fibroadenoma mein ek promising treatment hai – especially simple aur juvenile types mein. Benign breast conditions pe conducted observational studies mein homeopathic treatment group mein lump size stabilization ya reduction aur pain/tenderness mein meaningful improvement dekha gaya hai placebo ke comparison mein. Homeopathy ka fayda ye hai ki ye sirf gaanth nahi – saath mein hormonal imbalance, irregular periods, aur PMS symptoms bhi address karta hai jo fibroadenoma ka root cause hain. 6 se 18 mahine ka consistent treatment required hota hai – patience aur regularity zaroori hai.',
    },
    {
      _key: 'faq5',
      question: 'Fibroadenoma ka size kitne time mein kam hota hai homeopathy se?',
      answer: 'Generally 3-6 mahine mein pehla improvement notice hota hai – khaskar tenderness aur size stabilization ke form mein. Actual size reduction zyada tar 6-12 mahine mein ultrasound pe visible hoti hai. Ye depend karta hai gaanth ke size pe, patient ki age pe, aur kitna consistent treatment liya gaya hai. Chhoti gaanthen (2 cm se kam) mein response faster hota hai. Giant fibroadenoma mein homeopathy size control mein kaam karta hai lekin complete resolution slow ho sakta hai.',
    },
    {
      _key: 'faq6',
      question: 'Kya unmarried ladki ya virgin mein breast fibroadenoma hoti hai?',
      answer: 'Haan – bilkul hoti hai. Fibroadenoma ka koi relationship marital status ya sexual activity se nahi hai. Ye purely hormonal condition hai – aur zyada tar 15 se 35 saal ki young girls aur mahilaon mein hoti hai jo hormonal peak age hai. India mein unfortunately young girls aur unke ghar wale ise stigma se dekhte hain – "shaadi se pehle kaise" – lekin medical reality ye hai ki teenage girls mein ye sabse common benign breast condition hai. Juvenile fibroadenoma is age group mein bahut common hai aur treatable bhi hai.',
    },
    {
      _key: 'faq7',
      question: 'Pregnancy mein fibroadenoma khatarnak hai kya?',
      answer: 'Zyada tar cases mein fibroadenoma pregnancy mein khatarnak nahi hota – lekin pregnancy ke hormones (especially estrogen aur progesterone) gaanth ka size temporarily badha sakte hain. Ye growth pregnancy ke baad aksar khud stabilize ho jaati hai. Delivery aur breastfeeding pe koi direct effect nahi hota jab tak gaanth nipple area ke paas na ho. Pregnancy ke time ultrasound monitoring recommended hoti hai. Agar size bahut tezi se badhne lage to doctor se consult karein. Homeopathic medicines pregnancy mein safe hoti hain – lekin qualified doctor ki guidance mein leni chahiye.',
    },
    {
      _key: 'faq8',
      question: 'Fibroadenoma mein kya khana chahiye aur kya nahi?',
      answer: 'Kya khayein: flaxseeds (alsi), broccoli, gobhi, haldi wala doodh, omega-3 foods (akhrot, sarson ka tel), brown rice, moong dal, amla, pomegranate – ye sab hormonal balance mein help karte hain. Kya avoid karein: red meat, full-fat dairy, refined sugar, maida, deep fried food, alcohol aur 3 cup se zyada chai-coffee daily. Sabse important rule: estrogen ko naturally balance karne wale foods badhao, aur estrogen-boosting processed foods kam karo. Fiber-rich diet excess estrogen ko body se bahar nikaalti hai – ye fibroadenoma patients ke liye sabse practical dietary advice hai.',
    },
    {
      _key: 'faq9',
      question: 'Fibroadenoma bada ho raha hai – kya karein?',
      answer: 'Agar ultrasound mein confirm ho ki size significantly badh raha hai (3 months mein 20% se zyada) to yahi steps lein: Pehla – doctor se immediately milein aur repeat ultrasound karwayein. Doosra – agar pehle biopsy nahi hui to FNAC ya core needle biopsy ka suggestion follow karein – confirm karein ki benign hi hai. Teesra – homeopathic ya conventional treatment jo bhi chal raha hai use review karwayein. Chautha – diet aur lifestyle changes urgently implement karein. Rapidly growing fibroadenoma mein akele watchful waiting kaafi nahi – active treatment zaroor chahiye.',
    },
    {
      _key: 'faq10',
      question: 'Fibroadenoma mein periods pe koi effect hota hai?',
      answer: 'Seedha effect nahi hota – lekin fibroadenoma aur irregular periods dono ka root cause ek hi hai: hormonal imbalance. Isliye bahut si mahilaon mein dono saath milte hain. Periods ke time estrogen surge se gaanth temporarily badi aur tender feel hoti hai – ye normal hai. Homeopathic treatment mein jab hormonal balance improve hota hai to gaanth ke saath saath periods ki irregularity bhi better hoti hai – ye homeopathy ka ek important advantage hai.',
    },
    {
      _key: 'faq11',
      question: 'Fibroadenoma ke baad dobara gaanth aa sakti hai?',
      answer: 'Haan – especially agar surgery se sirf gaanth nikaali ho lekin underlying hormonal imbalance address na hua ho. Surgery recurrence nahi rokti – sirf existing gaanth hatati hai. Homeopathic treatment is wajah se important hai kyunki ye root cause – estrogen imbalance aur abnormal tissue growth tendency – pe kaam karta hai. Is tarah se new gaanthen banne ka risk bhi address hota hai. Jo mahilaen multiple fibroadenomas mein hain unke liye ye especially important hai.',
    },
    {
      _key: 'faq12',
      question: 'Fibroadenoma aur PCOS mein koi connection hai?',
      answer: 'Haan – dono mein common link hai hormonal imbalance, khaskar estrogen dominance aur insulin resistance. PCOS wali mahilaon mein fibroadenoma ka risk thoda badha hota hai kyunki unka hormonal environment already dysregulated hota hai. Homeopathy mein dono conditions ko saath treat kia jaata hai – jab PCOS address hota hai to breast conditions bhi improve hoti hain. Agar aapko PCOS hai aur breast mein gaanth bhi, to ek integrated approach se treatment lena chahiye.',
    },
    {
      _key: 'faq13',
      question: 'Kya fibroadenoma mein bra nahi pehni to zyada problem hoti hai?',
      answer: 'Bra nahi pehna medical problem nahi hai – lekin fibroadenoma ke saath properly fitted supportive bra pehna better hota hai. Reason: breast tissue ka weight lymphatic circulation pe pressure daal sakta hai. Sports bra ya well-fitted bra movement restrict karta hai aur discomfort kam karta hai – khaskar bade size ki gaanth mein ya periods ke time. Underwired tight bra avoid karein – ye circulation block kar sakti hai. Raat ko tightly fitted bra mat pehnen.',
    },
    {
      _key: 'faq14',
      question: 'Fibroadenoma mein exercise kar sakte hain?',
      answer: 'Bilkul kar sakte hain – aur karna chahiye bhi. Regular exercise lymphatic circulation improve karta hai, stress hormones (cortisol) ghata hai, aur estrogen metabolism better hoti hai – teeno fibroadenoma mein beneficial hain. 30 min walking, swimming, ya yoga daily best hai. High-impact exercises jaise running ya jumping mein proper sports bra zaroor pehnen – breast movement se discomfort ho sakta hai. Exercise se gaanth nahi badhti – ye common misconception hai.',
    },
    {
      _key: 'faq15',
      question: 'Fibroadenoma mein kaunsa test/ultrasound karwana chahiye?',
      answer: 'Diagnosis ke liye sabse pehle breast ultrasound karo – ye safe hai, radiation nahi hota, aur clearly batata hai gaanth kaisi hai. 35 saal se kam mahilaon mein mammography usually recommended nahi – ultrasound kaafi hai. Agar ultrasound mein suspicious features dikhein to FNAC (Fine Needle Aspiration Cytology) ya core needle biopsy kari jaati hai – ye confirms karta hai ki gaanth benign hai ya nahi. Monitoring ke liye har 6 mahine mein repeat ultrasound recommended hai – specially agar size change ho raha ho.',
    },
    {
      _key: 'faq16',
      question: 'Fibroadenoma mein dard (pain) hoti hai kya?',
      answer: 'Simple fibroadenoma usually painless hota hai – yahi iska ek characteristic feature hai. Lekin periods ke time ya touch karne pe mild tenderness ho sakti hai. Agar significant pain ho, skin laal ho, ya warmth feel ho to ye infection ya koi aur condition ho sakti hai – doctor ko dikhana chahiye. Homeopathy mein Phytolacca aur Conium jaise medicines breast tenderness aur discomfort effectively address karte hain – pain management bhi ho sakta hai bina painkillers ke.',
    },
    {
      _key: 'faq17',
      question: 'Teenager (teen girl) mein breast lump – kya parents ko doctor ke paas jaana chahiye?',
      answer: 'Haan – zaroor jaana chahiye, bina darai ya sharma ke. Teenage girls mein juvenile fibroadenoma bahut common hai – 10 se 18 saal ki age mein hota hai. Early evaluation se anxiety kam hoti hai, confirmation milti hai ki cancer nahi hai, aur sahi treatment shuru hoti hai. India mein many parents delay karte hain stigma ki wajah se – ye galat hai. Jaldi evaluation se better outcomes milte hain. Homeopathy teen girls ke liye especially suitable hai – safe, gentle, aur hormonal development affect nahi karta.',
    },
    {
      _key: 'faq18',
      question: 'Fibroadenoma mein Vitamin D ka kya role hai?',
      answer: 'Vitamin D deficiency aur benign breast conditions mein ek connection dekha gaya hai research mein. Vitamin D breast cell growth regulate karta hai aur anti-proliferative effect rakhta hai. India mein paradox ye hai ki sun exposure bahut hai lekin Vitamin D deficiency phir bhi common hai – dark skin, full covered dressing, aur sunscreen use ki wajah se. Fibroadenoma patients apna Vitamin D level test karwayein (25-OH Vitamin D test). Agar deficient ho to doctor ki salaah se supplement lein. Natural sources: morning sunlight 20 min, fatty fish, eggs, fortified milk.',
    },
    {
      _key: 'faq19',
      question: 'Fibroadenoma ke liye koi gharelu ilaaj hai kya?',
      answer: 'Kuch lifestyle changes aur kitchen remedies helpful ho sakti hain adjunct treatment ke taur pe – lekin akele kaafi nahi hain. Jo kaam karta hai: roz haldi wala doodh (curcumin anti-inflammatory hai), alsi ke beej (flaxseeds) roz 1 tablespoon estrogen balance karta hai, warm compress tenderness mein, aur salt-restricted diet periods se pehle (breast swelling kam karta hai). Jo nahi kaam karta: "gaanth ko khud daba ke thik karne ki koshish", castor oil massage bina doctor advice ke. Gharelu ilaaj sirf supportive hai – proper homeopathic ya medical treatment ki jagah nahi le sakta.',
    },
    {
      _key: 'faq20',
      question: 'Fibroadenoma se kya cancer hone ka darr rakhna chahiye?',
      answer: 'Simple fibroadenoma mein cancer mein convert hone ka risk 1% se bhi kam hai – ye bahut reassuring number hai. Complex fibroadenoma mein thoda sa elevated risk hota hai – lekin phir bhi absolute risk bahut low rehta hai. Darr ki jagah regular monitoring rakhein – ye zyada productive hai. Anxiety aur chronic stress khud estrogen imbalance worsen karte hain – isliye "cancer toh nahi na?" ka continuous darr actually aapki health ke liye harmful hai. Confirmed benign report ke baad ek qualified doctor se treatment plan banaiye aur peace of mind rakkhein.',
    },
    {
      _key: 'faq21',
      question: 'Fibroadenoma mein caffeine (chai-coffee) peena theek hai kya?',
      answer: 'Limited amount mein theek hai – din mein 1-2 cup chai ya coffee. Lekin zyada caffeine (3+ cups daily) breast tissue mein fibrocystic changes aur tenderness badha sakti hai – ye studies mein dekha gaya hai. Especially periods se 5-7 din pehle caffeine aur salt dono kam karo – is time breast already estrogen surge se sensitive hoti hai. Multiple gaanthen wali patients ke liye decaf switch karna better ho sakta hai. Green tea ek better option hai – antioxidants ke saath, kam caffeine ke saath.',
    },
    {
      _key: 'faq22',
      question: 'Fibroadenoma mein doodh pilana (breastfeeding) safe hai kya?',
      answer: 'Haan – breastfeeding safe hai fibroadenoma ke saath. Gaanth doodh production ya flow mein usually interfere nahi karti jab tak nipple area mein directly na ho. Kuch women mein breastfeeding ke time gaanth thodi uncomfortable feel ho sakti hai – positioning adjust karne se help milti hai. Kuch studies mein ye bhi dekha gaya ki breastfeeding breast cancer risk reduce karta hai long term mein – ye fibroadenoma patients ke liye additional reassurance hai. Agar breastfeeding ke time koi unusual change lage to lactation consultant aur doctor se milein.',
    },
    {
      _key: 'faq23',
      question: 'Breast fibroadenoma ke liye Dr. Shadab se kaise consult karein?',
      answer: 'Dr. Shadab Khan se online ya in-person consultation ke liye drshadabs.com pe jaayein. Fibroadenoma mein case-taking mein aapki periods history, hormonal background, constitution aur gaanth ka detail – sab discuss hota hai. Ye individualized approach hi size reduction aur recurrence prevention mein effective results deta hai. Clinic: Akola, Maharashtra. Online consultation bhi available hai.',
    },
  ],

  relatedDiseases: [
    { _key: 'rd1', slug: 'pcod' },
    { _key: 'rd2', slug: 'uterine-fibroid' },
    { _key: 'rd3', slug: 'endometriosis' },
    { _key: 'rd4', slug: 'thyroid' },
    { _key: 'rd5', slug: 'ovarian-cyst' },
  ],
}

async function seed() {
  await client.createOrReplace(doc)
  console.log('✅ Breast Fibroadenoma created/updated: disease-breast-fibroadenoma')
  console.log('🌐 Live at: https://homeopedia.in/diseases/breast-fibroadenoma')
}

seed().catch(console.error)
