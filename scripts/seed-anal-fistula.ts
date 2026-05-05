import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-anal-fistula',
  _type: 'disease',
  title: 'Anal Fistula',
  hindiName: 'Bhagandhar / Gudabhagandara / Nali Rog',
  slug: { _type: 'slug', current: 'anal-fistula' },
  category: 'Digestive',
  publishedAt: '2026-05-05T00:00:00.000Z',
  metaTitle: 'Bhagandhar Ka Ilaaj Bina Surgery | Homeopedia',
  metaDescription: 'Bhagandhar (Anal Fistula) ka permanent homeopathic treatment. Surgery se bachein, natural healing, no recurrence. Expert guide Hindi mein.',

  heroText: 'Bhagandhar (Anal Fistula) ek aisi nali hoti hai jo guda (anus) ke andar se shuru hokar bahari skin tak aati hai – jaise ek underground tunnel. Yeh nali aksar kisi purani abscess (pus-filled infection) ke theek nahi hone ki wajah se banti hai. Is nali se baar baar pus, paani, ya blood aata rehta hai aur baar baar dard hota hai. Kai logon ko sharm ki wajah se doctor ke paas jaane mein der ho jaati hai jisse problem aur complex ho jaati hai. Homeopathy mein iska treatment bina cheera-faadi ke sambhav hai – khaaskar initial aur moderate stages mein.',

  quickFacts: {
    whatItIs: 'Guda ke andar se bahari skin tak ek tunnel-type nali jo baar baar infection deti hai; 90% cases mein anal abscess ka poora theek na hona cause hota hai',
    howCommon: 'India mein approximately 8.6 per 1 lakh population; men mein women se 2-3 guna zyada; 20-60 saal age group mein most common',
    treatmentDuration: 'Simple fistula: 4-9 mahine | Complex: 9-18 mahine | Post-surgical recurrence: 6-12 mahine | Patience zaroori – healing andar se hoti hai',
    successRate: 'CCRH Multi-centre Study (2018) mein 68-74% patients mein significant improvement bina operation ke; complex fistula mein surgical intervention ki zaroorat 40% tak kam hui jab constitutional treatment diya gaya',
  },

  causes: [
    'Anal Abscess ka poora theek na hona – pus nikal jaata hai lekin nali andar reh jaati hai; 90% cases ki wajah yahi hai',
    'Chronic constipation aur hard stool – baar baar pressure se anal glands damage hoti hain; yeh root cause bhi hai aur complication bhi',
    'Crohn\'s Disease – intestine ki chronic inflammatory condition jo fistula bana sakti hai; complex type zyada hota hai',
    'Tuberculosis (TB) of the gut – India mein yeh ek major aur often missed cause hai; TB test zaroor karwayein',
    'Trauma ya injury – childbirth ke dauran, ya kisi accident mein; anorectal surgery ke baad bhi ho sakta hai',
    'HIV ya immunocompromised condition – infection theek nahi hoti; diabetes wale patients mein bhi healing slow hoti hai',
  ],

  riskFactors: [
    'Jo log baar baar anal abscess se guzre hain – har abscess fistula banne ka risk le kar aata hai',
    'Chronic constipation ke patients – pakhana bahut tight aata hai; baar baar straining se anal glands damage',
    'Crohn\'s disease ya IBD wale – intestinal inflammation seedha anorectal region ko affect karti hai',
    'Diabetic patients – immunity aur healing dono slow hoti hain; infection control mushkil hoti hai',
    'Sedentary lifestyle – ghanton baithna padta ho (office workers, drivers); blood flow reduce hoti hai',
    'Jo log treatment mein bahut zyada der karte hain – simple fistula complex hoti jaati hai waqt ke saath',
  ],

  complications: [
    'Fistula tract complex ho jaata hai – simple se horseshoe ban jaata hai jo surgery mein bhi mushkil hota hai; isliye jaldi treatment zaroori',
    'Sphincter damage – stool control karne ki kshamta khatam ho sakti hai (incontinence); surgery mein bhi ye risk hoti hai',
    'Fistula-in-ano carcinoma – bahut purani untreated fistula (10+ saal) mein rare par serious cancer ka risk',
    'Sepsis – infection blood mein pahunch sakta hai; life-threatening; iska seedha connection delayed treatment se hai',
  ],

  types: [
    {
      _key: 'type1',
      name: 'Intersphincteric Fistula (Sabse Common – 70%)',
      description: 'Internal aur external anal sphincter ke beech se guzarne wali fistula. Tract simple aur seedha hota hai. Homeopathic treatment mein sabse achha response deta hai. Guda ke paas ek chhota sa opening hoti hai jisse pus ya paani aata rehta hai. Agar jaldi treatment mile toh surgery ki zaroorat aksar nahi padti.',
    },
    {
      _key: 'type2',
      name: 'Transsphincteric Fistula (20-25%)',
      description: 'External sphincter ko cross karta hai – thoda complex hota hai. Surgery ke baad bhi recurrence ka darr rehta hai. Homeopathy mein Silicea aur Calcarea Sulph isme effective hain. Monitoring zaroori – homeopathy + surgical backup ka plan rakhein.',
    },
    {
      _key: 'type3',
      name: 'Horseshoe Fistula',
      description: 'Jab fistula dono sides pe phail jaata hai – U-shape mein. Recurrence rate zyada hoti hai. Long-term constitutional homeopathic treatment zyada helpful. Post-surgical recurrence mein bhi ye type aata hai. 12+ mahine ki treatment expect karein.',
    },
    {
      _key: 'type4',
      name: 'TB-Related Fistula',
      description: 'India mein aksar missed diagnosis. Intestinal TB se bani fistula normal treatment se theek nahi hoti. Mantoux, IGRA ya biopsy se confirm karein. Anti-TB therapy ke saath homeopathic support se results achhe hote hain.',
    },
    {
      _key: 'type5',
      name: 'Post-Surgical Recurrence',
      description: 'Surgery ke baad wapas aane wala fistula – 10-30% cases mein hota hai. Yahan homeopathy sabse zyada kaam aata hai kyunki surgery sirf nali band karti hai, root cause nahi. Constitutional treatment se dobara hone se rokna possible hai.',
    },
    {
      _key: 'type6',
      name: 'Blind Fistula (Incomplete)',
      description: 'Sirf ek hi opening hoti hai – andar ya bahar. Kabhi kabhi ye band bhi ho jaata hai lekin andar infection rehti hai. Pus andar jama hota rehta hai jo dobara abscess aur fistula ka risk banata hai. Treatment zyada zaroori hai isme.',
    },
  ],

  symptoms: [
    {
      _key: 'sg1',
      groupName: 'Bahari Nishaniyan – Jo Dikh Sakti Hain',
      items: [
        'Guda ke paas ek chhota sa chhed ya ubhaar – jahan se continuous ya baar baar discharge hota hai',
        'Wahan se paani, pus ya blood aana – kapdey ya underwear mein daag; kabhi patient ko khud pata nahi chalta',
        'Skin ka laal hona, sujan, kabhi kabhi khujli – area sensitive aur irritated rehta hai',
      ],
    },
    {
      _key: 'sg2',
      groupName: 'Dard aur Takleef',
      items: [
        'Baithne mein dard – khaaskar seedhi surface pe; ghanton baithna mushkil ho jaata hai',
        'Pakhana karte waqt dard ya jalan – aur cleaning ke time bhi; raat ko dard zyada hona common',
        'Chhune pe extreme sensitivity – area bahut tender hoti hai; examination mein bhi takleef',
      ],
    },
    {
      _key: 'sg3',
      groupName: 'Andar Ki Garbadhat',
      items: [
        'Baar baar bukhar aana – chronic infection ki wajah se; thakan aur kamzori bhi saath mein',
        'Kabhi kabhi pait mein dard ya akadhan – khaaskar Crohn\'s ya TB-related cases mein',
        'Stool ke saath pus ya blood – andar infection active hone ka sign; turant doctor se milein',
      ],
    },
  ],

  ccrhEvidence: 'CCRH (Council for Research in Homoeopathy) ke 2018 multi-centre clinical study on anorectal diseases mein 68-74% patients ko significant improvement mili bina operation ke. Silicea aur Calcarea Sulph ne pus discharge aur tract healing mein significant results diye. Complex fistula mein bhi surgical intervention ki zaroorat 40% tak kam hui jab constitutional treatment diya gaya. Recurrence rate homeopathic patients mein surgical patients se kaafi kam thi. Indian Journal of Research in Homoeopathy (2016-2020) mein bhi fistula management ke promising results documented hain.',

  homeopathyBenefits: {
    explanation: 'Bhagandhar mein homeopathy do kaam karta hai – pehla, jo nali bani hui hai usse andar se heal karta hai; doosra, body ki apni immunity ko itna strong karta hai ki woh nali band kar sake aur dobara na banay. Allopathy mein sirf operation hota hai lekin kai cases mein fistula wapas aa jaata hai. Homeopathy mein patient ka poora swabhav, khaan-paan, digestive history dekha jaata hai aur uss hisaab se medicine di jaati hai jo root cause par kaam karti hai.',
    bullets: [
      'Bina operation ke tract ko andar se heal karna – khaaskar simple aur early stage fistula mein',
      'Pus discharge band karna aur infection control karna – jo patient ki quality of life sabse pehle improve karta hai',
      'Recurrence rokna – jo surgery ka sabse bada failure hai; root cause address hota hai',
      'Crohn\'s ya TB-related fistula mein bhi effective – conventional treatment ke saath complementary role mein',
      'Post-surgical recurrence mein sabse zyada kaam aata hai – jahan surgery fail ho chuki ho',
    ],
  },

  medicines: [
    {
      _key: 'med1',
      name: 'Silicea',
      bestFor: 'Jinke fistula se baar baar pus aata hai, jinka healing slow hai, jo thanda zyada feel karte hain, kamzor immunity wale – khaaskar jo bahut zyada constipated rehte hain. "Surgical knife of homeopathy" kaha jaata hai.',
      keyIndications: [
        'Baar baar pus discharge – slow healing; pehle discharge thoda badh sakta hai phir band hona shuru; ye purging phase hai',
        'Thanda bahut lagta hai – hamesha thanda feel karna; thand se discharge aur dard worse; kamzor immunity ka overall picture',
        'Chronic constipation ke saath fistula – hard stool aur straining from the beginning; constipation hi root cause mein tha',
      ],
    },
    {
      _key: 'med2',
      name: 'Calcarea Sulphurica',
      bestFor: 'Jab pus yellow aur thick ho, jab ek opening se zyada discharge ho, jab healing bilkul nahi ho rahi. Pus ke final stage mein kaam karta hai – tract clean karke healing start karta hai.',
      keyIndications: [
        'Yellow thick pus – formed pus jo bahar nahi nikal pa rahi; tract khud drain nahi kar pa rahi effectively',
        'Multiple openings ya zyada discharge – complex type ya recurrent cases jahan discharge bahut zyada ho',
        'Healing bilkul nahi ho rahi – wound open rehta hai; Silicea ke baad ya Silicea ke alternative ke taur pe',
      ],
    },
    {
      _key: 'med3',
      name: 'Myristica Sebifera',
      bestFor: 'Bhagandhar ka sabse direct aur specific medicine – jo surgery avoid karna chahte hain unke liye pehli soch. "Homeopathic Knife" kaha jaata hai. Fistula ki nali ko natural tarike se drain karta hai.',
      keyIndications: [
        'Active fistula tract jo drain nahi ho rahi – ye medicine natural drainage accelerate karti hai bina cheere ke',
        'Anorectal region ka specific remedy – guda ke aaspaas infection, abscess ya fistula mein seedha action',
        'Surgery avoid karna chahte hain – early ya simple fistula mein surgery se pehle zaroori try karna chahiye',
      ],
    },
    {
      _key: 'med4',
      name: 'Berberis Vulgaris',
      bestFor: 'Jab fistula ke saath kidney ya urinary complaints bhi hon, ya pait ke left side mein dard ho, ya stool mein zyada mucus aata ho. Powerful detoxifier – liver, kidneys aur intestines saath mein.',
      keyIndications: [
        'Fistula ke saath left side pait mein dard – radiating pain; Berberis ka characteristic left-sided action',
        'Saath mein urinary complaints – burning urination ya kidney area mein discomfort fistula ke saath',
        'Stool mein zyada mucus – anal drainage improve karna; multi-system involvement wale complex cases',
      ],
    },
    {
      _key: 'med5',
      name: 'Hepar Sulphuris Calcareum',
      bestFor: 'Jab fistula bahut sensitive ho, chhune pe zyada dard ho, pus mein khatta-sa smell aaye, patient bahut chidchida aur thanda ho. Infection control karta hai aur dard mein quick relief deta hai.',
      keyIndications: [
        'Extreme touch sensitivity – halka haath lagao to bhi jump kare; examination mein bhi takleef hoti hai',
        'Pus mein offensive smell – khatta ya cheese-jaisi smell; infection active aur strong hai',
        'Thand se worse – drafts se, khule button se bhi dard badh jaata hai; bahut chidchida patient',
      ],
    },
  ],

  dietInclude: [
    {
      _key: 'di1',
      category: 'High Fibre Foods',
      emoji: '🌾',
      items: [
        'Isabgol (Psyllium Husk) – roz raat ko paani ke saath; stool soft rehta hai aur tract pe pressure nahi padta',
        'Brown Rice / Jowar / Bajra Roti – maida ki jagah; zyada fibre, easy to digest; gut movement regular',
        'Oats – subah breakfast mein; gut movement regular karta hai; constipation door rakhta hai',
      ],
    },
    {
      _key: 'di2',
      category: 'Healing Vegetables',
      emoji: '🥦',
      items: [
        'Lauki (Bottle Gourd) – gut ko thanda rakhti hai; healing support; sab se safe vegetable is condition mein',
        'Tinda / Tori – light aur easy digestible; inflammation kam karta hai; roz khaa sakte hain',
        'Palak – iron aur healing nutrients; moong dal ke saath light khichdi best option hai',
      ],
    },
    {
      _key: 'di3',
      category: 'Healing Liquids',
      emoji: '💧',
      items: [
        'Coconut Water – roz ek glass; body hydrate karta hai aur infection se ladhne mein madad',
        'Chach / Buttermilk – probiotics deta hai; gut bacteria healthy rakhta hai; dahi se better option',
        'Haldi Wala Paani – anti-inflammatory; healing accelerate karta hai; subah khali pet piyen',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'Maida aur Processed Foods',
      emoji: '🚫',
      items: [
        'White Bread / Maida Roti / Biscuits / Noodles – constipation badhaata hai; stool hard karta hai',
        'Packaged snacks – refined flour se stool hard hota hai; koi fibre nahi, gut ko nuksaan',
      ],
    },
    {
      _key: 'da2',
      category: 'Spicy aur Fried Foods',
      emoji: '🌶️',
      items: [
        'Mirchi zyada / Pickle / Achaar – anal region mein jalan badhaata hai; discharge trigger karta hai',
        'Fried snacks (Samosa, Pakoda) / Alcohol – inflammation badhaata hai; tissue healing seedha rokta hai',
      ],
    },
    {
      _key: 'da3',
      category: 'Heavy Non-Veg',
      emoji: '🥩',
      items: [
        'Red Meat (Mutton, Beef) – digest hone mein zyada time; constipation ka major cause',
        'Fried Chicken / Fast Food – trans fats se inflammation badhti hai; eggs zyada bhi kai patients mein constipation trigger',
      ],
    },
  ],

  dos: [
    'Roz subah warm water se sitz bath karein (10-15 min) – anal area clean rehta hai aur blood circulation badhta hai jo healing karta hai; Epsom salt mila sakte hain',
    'Roz 3-4 litre paani peeyein – stool soft rehta hai, pressure nahi padta; dehydration healing slow karta hai',
    'Cotton underwear hi pehno – soft material se irritation nahi hoti; synthetic avoid; roz change karein',
    'Doctor se time pe follow-up karein – homeopathic treatment progress dekha jaata hai aur medicine adjust hoti rehti hai',
    'Pakhane ke baad gentle cleaning karein – tissue se nahi, paani se ya wet wipes se; wound ko protect karta hai',
    'Roz halki walk ya yoga (Pawanmuktasana) karein – gut movement improve hoti hai aur constipation door rehti hai',
    'Har 45-60 minute mein uthein aur thoda chalo agar office job hai – ek jagah ghanton baithne se blood flow ruk jaata hai',
    'Isabgol roz raat ko lein – ek chamach ek glass paani mein; yeh treatment ka hissa hai, sirf diet nahi',
  ],

  donts: [
    'Pakhana rokein nahi – pressure badhta hai jo tract pe strain dalti hai aur healing slow hoti hai; jab aaye tab jaayein',
    'Self-medication ya internet se pooja-treatment mat karein – wrong medicine se tract aur complex ho sakta hai',
    'Zyada tight ya synthetic underwear mat pehno – friction se infection badh sakti hai; donut cushion use karein chair pe',
    'Ek jagah ghanton mat baitho – pressure direct anal region pe padta hai jo blood flow rokta hai; stand-up breaks zaroori',
    'Spicy aur fried food continue mat karo sochke ki thoda chalega – har cheat meal healing ko 2-3 din peeche dhakelta hai',
    'Treatment beech mein band mat karo jab thoda theek lage – discharge band hona end nahi hai; andar healing aur honi chahiye',
    'Kaan mein tel daalne jaisi galat practice – kaan mein ya fistula tract mein ghar ka koi bhi tel ya liquid mat dalo bina doctor ki salaah ke',
    'TB ya Crohn\'s rule out kiye bina sirf local treatment pe depend mat raho – agar normal treatment se theek nahi ho raha to wajah dhundho',
  ],

  seasonalCare: {
    summer: 'Dehydration se stool hard ho jaata hai – roz 3-4 litre paani zaroor. Coconut water, nimbu paani, chach lein. Zyada paseena aane se anal area mein infection ka risk – clean aur dry rakhein. Light cotton underwear pehno. Zyada mirchi wala khana is mausam mein zyada harm karta hai.',
    monsoon: 'Infection ka risk sabse zyada is mausam mein hota hai. Bahar ka khaana avoid karein – street food se infection. Humidity se fungal infection ka bhi darr – sookha rakho anal area; undergarments zyada baar change karein. Doctor se regular follow-up rakhein is season mein.',
    winter: 'Paani kam peete hain – yaad se peeyein; constipation badhta hai. Sardiyon mein body healing slow hoti hai – medicine regular rakhein. Warm foods lein – lauki soup, khichdi, moong dal – easy to digest. Sardi mein infection phailne ka darr kam hota hai – healing ka achha waqt.',
  },

  faqs: [
    {
      _key: 'faq1',
      question: 'Kya Bhagandhar bina operation ke theek ho sakta hai?',
      answer: 'Haan – early aur simple fistula mein bina surgery ke theek hona possible hai. Homeopathy mein Silicea, Myristica, aur Calc Sulph jaise medicines tract ko andar se heal karte hain. CCRH ke studies mein 68-74% patients ko significant improvement mili bina operation ke. Lekin yeh fistula ki complexity aur stage pe depend karta hai. Jitna jaldi treatment shuru ho, utna better result.',
    },
    {
      _key: 'faq2',
      question: 'Bhagandhar ki surgery ke baad wapas aa gaya – ab kya karein?',
      answer: 'Yeh bahut common complaint hai – studies kehte hain ki 10-30% cases mein fistula surgery ke baad wapas aata hai. Kyunki surgery sirf nali ko band karti hai, root cause nahi. Yahan homeopathy sabse zyada kaam aata hai – post-surgical recurrence mein constitutional treatment root cause tak pahunchta hai. Calcarea Sulph aur Silicea ka combination kaafi effective hai.',
    },
    {
      _key: 'faq3',
      question: 'Bhagandhar mein discharge kab band hoga?',
      answer: 'Homeopathic treatment mein discharge alag tarike se band hota hai – pehle thoda badh sakta hai (purging phase), fir dheere dheere kam hone lagta hai. Aksar 4-8 hafton mein visible improvement aata hai agar medicine sahi ho. Complete discharge band hona 3-9 mahine le sakta hai. Important: discharge ka achanak band hona ACHHA NAHI hota – matlab andar infection ruk gayi.',
    },
    {
      _key: 'faq4',
      question: 'Bhagandhar aur Piles (Bawaseer) mein kya fark hai?',
      answer: 'Dono alag bimariyaan hain. Piles mein guda ke andar ya bahar maas ke guchhe hote hain jo khoon dete hain – koi nali nahi hoti. Bhagandhar mein guda ke andar aur bahari skin ke beech ek tunnel-type nali banti hai jisme se pus ya paani aata hai. Dono ek saath bhi ho sakti hain. Doctor se examination se pata chalta hai.',
    },
    {
      _key: 'faq5',
      question: 'Kya Bhagandhar TB ki wajah se bhi hota hai?',
      answer: 'Haan – India mein yeh ek important aur aksar missed diagnosis hai. Intestinal TB se fistula ban sakti hai. Agar aapko baar baar fistula ho raha hai ya normal treatment se theek nahi ho raha, toh TB test (Mantoux, IGRA, biopsy) zaroor karwayein. Aise patients mein homeopathic treatment Anti-TB therapy ke saath diya jaata hai.',
    },
    {
      _key: 'faq6',
      question: 'Bhagandhar mein kaunsa diet plan follow karein?',
      answer: 'Sabse important hai FIBER aur WATER. Roz isabgol ek glass paani ke saath, brown rice ya jowar roti, lauki-tori jaise light vegetables, aur roz 3-4 litre paani. Completely avoid karein: maida, spicy food, alcohol, red meat, aur fried snacks. Subah khali pet haldi wala paani piyen. Diet treatment ka part hai – diet sahi na ho toh medicine ka asar bhi kam hota hai.',
    },
    {
      _key: 'faq7',
      question: 'Sitz Bath kaise karein aur kitna fayda hota hai?',
      answer: 'Sitz bath matlab guda ke area ko warm paani mein 10-15 minute baithna. Ek chhoti tub ya bucket mein garam (comfortable) paani lein, usme thoda Epsom salt mila sakte hain. Roz subah ya pakhane ke baad karein. Blood circulation badhti hai, dard kam hota hai, infection ka risk kam hota hai. Homeopathic treatment ke saath sitz bath results ko 30-40% zyada improve karta hai.',
    },
    {
      _key: 'faq8',
      question: 'Kitne time mein Bhagandhar completely theek hoga?',
      answer: 'Fistula ke type aur complexity pe depend karta hai: Simple (Type 1) fistula: 4-9 mahine | Complex fistula: 9-18 mahine | Post-surgical recurrence: 6-12 mahine | TB-related fistula: 12-24 mahine. Patience zaroori hai – homeopathy mein healing andar se hoti hai, bahar se nahi.',
    },
    {
      _key: 'faq9',
      question: 'Bhagandhar mein kya exercise kar sakte hain?',
      answer: 'Roz 20-30 minute ki walk gut movement ko regular rakhti hai. Yoga mein Pawanmuktasana, Malasana, aur deep breathing faydemand hain. Avoid karein: heavy weight lifting, prolonged cycling, aur koi bhi exercise jisme direct pressure anal region pe padta ho. Swimming bhi good option hai – agar pool hygiene achhi ho.',
    },
    {
      _key: 'faq10',
      question: 'Kya Bhagandhar cancer ban sakta hai agar treat na karein?',
      answer: 'Haan – yeh rare hai lekin real risk hai. Bahut purani, untreated anal fistula (10+ saal) mein Fistula-associated Adenocarcinoma develop ho sakta hai. Isliye Bhagandhar ko kabhi ignore nahi karna chahiye. Regular monitoring se iska risk kaafi kam ho jaata hai.',
    },
    {
      _key: 'faq11',
      question: 'Guda ke paas nali se paani aana – kya yeh Bhagandhar hai?',
      answer: 'Aksar haan – guda ke paas se baar baar paani, pus, ya blood aana fistula ka classic sign hai. Kabhi kabhi ek chhoti si opening dikhti hai skin pe. Lekin yeh Pilonidal Sinus (coccyx ke paas) bhi ho sakta hai – dono alag hain. Doctor se proper examination karwayein – Anoscopy ya MRI fistula confirm karta hai.',
    },
    {
      _key: 'faq12',
      question: 'Bhagandhar mein MRI kyun kiya jaata hai?',
      answer: 'MRI fistula ka "map" banata hai – kahan se shuru ho rahi hai nali, kahan khatam, kitni complex hai, sphincter ko affect kar rahi hai ya nahi. Yeh surgery se pehle zaroori hota hai. Homeopathic doctor bhi MRI ka use karte hain yeh decide karne ke liye ki sirf homeopathy kaafi hai ya surgical backup bhi chahiye. MRI mein koi radiation nahi hoti.',
    },
    {
      _key: 'faq13',
      question: 'Kya Bhagandhar ka operation safe hai?',
      answer: 'Modern fistula surgery (LIFT procedure, Laser Fistulotomy) relatively safe hai. Lekin main concern hai recurrence – 30-40% patients mein wapas aata hai. Aur risk hai sphincter damage ka. Isliye simple fistula mein homeopathic option pehle try karna recommended hai. Agar surgery zaroor ho toh homeopathy baad mein recurrence rokne ke liye continue ki jaati hai.',
    },
    {
      _key: 'faq14',
      question: 'Bhagandhar mein garam ya thanda khaana theek hai?',
      answer: 'Garam aur easy-to-digest food better hai – jaise khichdi, moong dal soup, lauki, tinda. Thanda (refrigerated) khaana immediately nahi khaana chahiye – digestive fire slow hoti hai aur stool hard hoti hai. Room temperature ya freshly cooked food best hai. Zyada garam mirchi wala khaana bhi avoid karein – anal region mein irritation badhti hai.',
    },
    {
      _key: 'faq15',
      question: 'Kya Bhagandhar mein dahi khana chahiye?',
      answer: 'Haan – dahi achhi hai lekin moderate amount mein. Chach (diluted buttermilk) aur better option hai – zyada probiotic, kam fat. Avoid karein: market wala flavored yogurt (sugar zyada hoti hai), aur raat ko dahi. Plain fresh dahi din mein theek hai.',
    },
    {
      _key: 'faq16',
      question: 'Bhagandhar ke saath office job kar sakte hain – ghanton baithna hoga?',
      answer: 'Haan, job continue kar sakte hain lekin adjustments karein. Har 45-60 minute mein uthein aur thoda chalo. Soft cushion ya donut-shaped pillow use karein chair pe – direct pressure kam hoti hai. Sitz bath lunch break mein ya shaam ko karein. Kaam karte karte healing slow nahi hoti agar care rakhein.',
    },
    {
      _key: 'faq17',
      question: 'Bacchon mein Bhagandhar hota hai kya?',
      answer: 'Haan – infants aur chhote bacchon mein bhi hota hai, usually pehle saal mein. Infant mein anal abscess se fistula ban sakta hai. Chhote bacchon mein yeh zyada complex nahi hota aur aksar simple treatment se theek ho jaata hai. Homeopathic treatment bacchon mein bahut safe hai. Agar 6 mahine mein theek na ho toh pediatric surgeon se consult karein.',
    },
    {
      _key: 'faq18',
      question: 'Bhagandhar mein konse tests karwaane chahiye?',
      answer: 'Initial diagnosis ke liye: Physical examination (digital rectal exam), Proctoscopy / Anoscopy (andar dekhne ke liye), MRI Pelvis with contrast (gold standard fistula map), CBC aur ESR (infection severity), Mantoux Test ya IGRA (TB rule out – India mein important), Biopsy (agar cancer suspect ho ya chronic non-healing fistula ho).',
    },
    {
      _key: 'faq19',
      question: 'Homeopathic treatment ke dauran koi side effect hoti hai?',
      answer: 'Homeopathic medicines ke koi toxic side effects nahi hote. Lekin ek common experience hota hai – initial aggravation. Matlab pehle 1-2 hafte mein discharge thoda badh sakta hai ya dard thoda zyada feel ho sakta hai. Yeh achha sign hai – body healing mode mein aa rahi hai. Agar bahut zyada takleef ho toh doctor ko bataayein – medicine adjust ki ja sakti hai.',
    },
    {
      _key: 'faq20',
      question: 'Bhagandhar aur Pilonidal Sinus mein kya fark hai?',
      answer: 'Ye dono alag hain: Bhagandhar (Anal Fistula) – guda ke andar se shuru hoti hai; discharge guda ke bilkul paas. Pilonidal Sinus – buttocks ke beech mein, tailbone (coccyx) ke paas; aksar baalon se trigger; guda se door hota hai. Dono mein pus discharge hota hai isliye confuse hote hain. Doctor ek simple examination se bata sakta hai.',
    },
    {
      _key: 'faq21',
      question: 'Bhagandhar mein weight loss kyun hoti hai?',
      answer: 'Agar fistula mein chronic infection ho ya TB-related ho, toh body continuous infection se ladne mein bahut energy lagaati hai – isse appetite kam hoti hai aur weight loss hoti hai. Crohn\'s-related fistula mein bhi malabsorption se weight loss hoti hai. Agar unexplained weight loss ke saath fistula hai toh TB aur Crohn\'s rule out zaroori hai.',
    },
    {
      _key: 'faq22',
      question: 'Kya gharelu nuskhe se Bhagandhar theek hota hai?',
      answer: 'Partially helpful hain, completely cure nahi karte. Sitz bath, haldi ka use – yeh discomfort kam karte hain. Neem ke paani se washing – antimicrobial. Lekin koi bhi ghar ka nuskha fistula tract ko andar se heal nahi kar sakta. Treatment mein der se fistula complex ho jaata hai – proper homeopathic ya medical treatment chahiye.',
    },
    {
      _key: 'faq23',
      question: 'Bhagandhar mein pregnancy mein kya hoga?',
      answer: 'Pregnancy mein Bhagandhar manage karna thoda tricky hota hai. Surgery pregnancy mein avoid ki jaati hai except emergency mein. Homeopathy pregnancy mein safe hai – discharge control aur infection management constitutional medicine se ho sakta hai. Apne homoeopath aur gynecologist dono ko bata dein – combined care milegi.',
    },
    {
      _key: 'faq24',
      question: 'Bhagandhar mein kya yoga ya walk helpful hai?',
      answer: 'Haan – roz 20-30 minute ki walk gut movement regular rakhti hai jo constipation door karta hai. Pawanmuktasana (Wind-Relieving Pose) aur Malasana specially helpful hain. Deep breathing se abdominal circulation improve hoti hai. Heavy weight lifting aur prolonged cycling avoid karein. Yoga + homeopathy + diet – teeno milke best results dete hain.',
    },
  ],

  relatedDiseases: ['Piles', 'Anal Fissure', 'IBS', 'Constipation', 'Ulcerative Colitis'],
}

async function seed() {
  try {
    const result = await client.createOrReplace(doc)
    console.log('✅ Anal Fistula created/updated:', result._id)
    console.log('🌐 Live at: https://homeopedia.in/diseases/anal-fistula')
  } catch (err) {
    console.error('❌ Error:', err)
  }
}

seed()
