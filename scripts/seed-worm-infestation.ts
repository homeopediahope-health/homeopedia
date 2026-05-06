import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-worm-infestation',
  _type: 'disease',
  title: 'Worm Infestation in Children',
  hindiName: 'Bacchon Mein Keede – Pet Ke Keede',
  slug: { _type: 'slug', current: 'worm-infestation' },
  category: 'Digestive',
  publishedAt: '2026-05-06T00:00:00.000Z',
  metaTitle: 'Bacchon Ke Pet Ke Keede – Homeopathic Ilaaj',
  metaDescription: 'Bacchon ke pet ke keede ka homoeopathic ilaaj – prakar, karan, diet chart, sezon care aur 25 zaruri sawaal. Safe, natural, side-effect free.',

  heroText: 'Bacchon ke pet mein alag-alag prakar ke keede (intestinal worms / parasites) paaye jaate hain jo unke pet, aant, ya liver mein rehte hain aur shareer ka poshan chura lete hain. India mein yeh ek bahut common condition hai – khaaskar 2 se 14 saal ke bacchon mein. Gandi mitti, doosha paani, ya bina dhule haath se khana khane se yeh keede body mein aate hain. Sahi homoeopathic treatment se in keedo ko naturally bahar nikala ja sakta hai aur bacche ki immunity bhi mazboot hoti hai.',

  quickFacts: {
    whatItIs: 'Bacchon ki aant mein keede (intestinal parasites) – poshan chura lete hain, immunity treatment se permanent protection milti hai',
    howCommon: 'WHO ke anusaar India mein lagbhag 22 crore bacche soil-transmitted worm infestation ke risk mein hain',
    treatmentDuration: 'Halke cases: 2-4 hafte | Constitutional / recurrent cases: 2-3 mahine',
    successRate: 'Constitutional homoeopathic treatment se bacche baar baar worm infestation se naturally protected ho jaate hain – immunity build hoti hai',
  },

  causes: [
    'Gandi ya bina dhuli mitti mein khel kar haath munh mein daalna',
    'Bina dhule fruits, vegetables ya street food khana',
    'Doosha / unfiltered paani peena',
    'Nange paon bahar chalna – hookworm ke liye',
    'Adhpaka maas ya fish khana – tapeworm ke liye',
    'Sankramit bacche ke saath haath dhoe bina contact – pinworm spreading ke liye',
  ],

  riskFactors: [
    '2 se 12 saal ke school-going bacche',
    'Rural ya semi-urban areas mein rehne waale',
    'Open defecation zones ke paas rehne waale bacche',
    'Jo bacche mitti mein bahut khelte hain',
    'Jin ghar mein saaf paani ki suvidha nahi',
    'Jinke ghar mein pehle kisi ko worm infestation raha ho',
  ],

  complications: [
    'Anemia (khoon ki kami) – hookworm se khoon chosne ke karan',
    'Malnutrition aur stunted growth – poshan absorb nahi hota',
    'Intestinal blockage – bahut zyada roundworms se aant band ho sakti hai',
    'Cognitive delay – brain development slow ho jaata hai poshan ki kami se',
    'Liver / lungs involvement – kuch worms migrate kar lete hain',
  ],

  types: [
    {
      _key: 'type1',
      name: 'Roundworm (Golai Wala Keeda)',
      description: 'India mein sabse zyada paya jaane wala intestinal worm – 15-35 cm tak lamba ho sakta hai. Pet mein dard, bhook zyada ya kam, ulti jaisi feeling. Bahut bade infestation mein aant mein blockage ka khatra.',
    },
    {
      _key: 'type2',
      name: 'Pinworm / Threadworm (Sutli Keeda)',
      description: 'Sabse zyada bacchon mein – school-going age. Raat ko guda (anus) ke paas bahut tez khujli hoti hai. Neend kharab hoti hai, bachcha chidchida rehta hai. Bahut jaldi ek se doosre bacche mein failta hai.',
    },
    {
      _key: 'type3',
      name: 'Hookworm (Ankada Keeda)',
      description: 'Nange paon mitti mein chalne se skin ke zariye andar aata hai. Khoon chosta hai – anemia ka sabse bada karan. Bachcha pale, kamzor, thaka-thaka rehta hai.',
    },
    {
      _key: 'type4',
      name: 'Tapeworm (Patta Keeda)',
      description: 'Adhpaka maas ya machli khane se aata hai. Aant mein metres tak pahunch sakta hai. Weight ghatna, ulta motaapa nahi. Pakhane mein safed tukde dikhai dete hain.',
    },
    {
      _key: 'type5',
      name: 'Whipworm aur Giardia',
      description: 'Whipworm gandi mitti ya doosha paani se failta hai – khoon mix pakhana, growth ruk jaati hai. Giardia (protozoa) paani se failta hai – yellow, badbu-daar loose motions, pet fulna, gas, kamzori.',
    },
  ],

  symptoms: [
    {
      _key: 'sym1',
      category: 'Pet Ke Nishaan (Digestive Signs)',
      items: [
        'Baar baar pet mein dard – naabhi ke aas paas',
        'Pakhana pahle pakka phir loose hona',
        'Baar baar gas banana aur pet fulna',
        'Bhook zyada ya ek dum khatam ho jaana',
        'Ulti ki ichha ya kabhi kabhi actual vomiting',
      ],
    },
    {
      _key: 'sym2',
      category: 'Neend Aur Behavior Ke Nishaan',
      items: [
        'Raat ko uthna aur rone lagta hai – khaaskar pinworm mein',
        'Guda ke aas paas raat ko tez khujli',
        'Din mein chidchidapan, mood swing',
        'Concentration ki kami – school mein dhyan nahi lagta',
        'Daant peesna (bruxism) – worm cases se joda jaata hai',
      ],
    },
    {
      _key: 'sym3',
      category: 'Shareer Par Dikhaai Dene Wale Nishaan',
      items: [
        'Wajan ghatna ya bilkul na badhna',
        'Pale skin, aankhon ke neeche kala daag',
        'Zyada thakaan, energy ki kami',
        'Pakhane mein safed dhage ya tukde dikhai dena',
        'Naak mein baar baar ungali daalna – classic sign',
      ],
    },
  ],

  ccrhEvidence: {
    improvementRate: 'Halke cases mein 2-4 hafte mein clearly fark | Pinworm ki raat wali khujli mein 48-72 ghante mein relief',
    avgTreatmentPeriod: '2-4 hafte mild cases | 2-3 mahine constitutional / recurrent cases',
    citation: "Clarke's Dictionary of Practical Materia Medica | Allen's Keynotes | Indian Journal of Pediatrics 2019",
    keyFindings: [
      'Cina – irritable child with worms – sabse pehla socha jaane wala remedy, aant ki irritation address karta hai',
      'Constitutional treatment (Calcarea Carb) se baar baar hone wali infestations mein immunity build hoti hai',
      'Homoeopathic deworming mein koi liver/kidney load nahi – chote bacchon ke liye completely safe',
    ],
  },

  homeopathyBenefits: [
    'Chemical dewormers se alag – liver ya kidneys par koi load nahi',
    'Baar baar aane wale worm infestations mein immunity build karta hai',
    'Pinworm ki raat wali khujli mein bahut jaldi relief milti hai',
    'Bhook theek karta hai – jo malnutrition ka ek bada cause hai',
    'Anemia recovery mein bhi saath saath help milti hai',
    'Bacche ka overall growth pattern sudhar jaata hai',
  ],

  homeopathyLimitations: [
    'Bahut severe infestation (intestinal blockage) mein pehle conventional emergency treatment zaroori hai',
    'Tapeworm ke kuch cases mein anti-parasitic drugs ke saath combine karna better hota hai – qualified doctor se milein',
  ],

  medicines: [
    {
      _key: 'med1',
      name: 'Cina',
      bestFor: 'Chidchida, naak mein ungali daalne wala, neend mein daant peesne wala bachcha – roundworm ya pinworm infestation ke saath.',
      keyIndications: [
        'Extreme irritability aur chidchidapan – worm irritation ka classic picture',
        'Naak mein baar baar ungali daalna aur naak kharochna',
        'Neend mein daant peesna (bruxism) – worm cases mein characteristic sign',
      ],
    },
    {
      _key: 'med2',
      name: 'Santoninum',
      bestFor: 'Jab pakhane mein keede clearly dikh rahe hon, pet mein ainth aur raat ko neend nahi – roundworm ke confirmed cases.',
      keyIndications: [
        'Pakhane mein keede clearly visible – roundworm expulsion',
        'Pet mein ainth aur cramping – aant ki motility increase karta hai',
        'Raat ko neend nahi – worm irritation se disturbed sleep',
      ],
    },
    {
      _key: 'med3',
      name: 'Teucrium Marum',
      bestFor: 'Raat ko guda mein tez khujli – pinworm / threadworm ke liye specifically indicated medicine.',
      keyIndications: [
        'Raat ko guda mein intense khujli – pinworm egg-laying se',
        'Rectal irritation dominant – scratching se thodi relief',
        'Nasal itching bhi saath mein – worm irritation nose tak',
      ],
    },
    {
      _key: 'med4',
      name: 'Spigelia',
      bestFor: 'Naabhi ke aas paas tez dard, dil ki tez dhadkan wala bachcha – jab worm infestation ke saath anemia ke nishaan bhi hon.',
      keyIndications: [
        'Naabhi ke aas paas severe cramping – worm-related abdominal pain',
        'Palpitations – worm infestation ke saath weakness aur anemia',
        'Left side symptoms dominant – Spigelia ka characteristic pattern',
      ],
    },
    {
      _key: 'med5',
      name: 'Calcarea Carbonica',
      bestFor: 'Mote, flabby, bahut jaldi thak jaane wale bacche – jo baar baar worm infestation ke shikaar hote hain, immunity build karne ke liye.',
      keyIndications: [
        'Baar baar worm infestation – constitutional remedy, immunity build karta hai',
        'Slow, phlegmatic baccha – sar mein paseena, thanda pasand',
        'Worm infestations plus calcium metabolism issue – daant late, growth slow',
      ],
    },
  ],

  dietInclude: [
    {
      _key: 'di1',
      category: 'Pet Ko Saaf Rakhne Wale Khane',
      emoji: '🥗',
      items: [
        'Kachcha lahsun (2-3 kali roz) – natural anti-parasitic, worms ko hostile environment milta hai',
        'Kaddu ke beej (pumpkin seeds) – cucurbitacin compound worms ko paralyze karta hai',
        'Gajar (raw carrot) – fiber se aant saaf rehti hai, worms ka residence khatam hota hai',
      ],
    },
    {
      _key: 'di2',
      category: 'Immunity Badhane Wale Khane',
      emoji: '🍋',
      items: [
        'Nimbu paani (unsweetened) – acidic environment parasites ko pasand nahi',
        'Papaya (paka hua) – papain enzyme parasite ke outer layer ko todta hai',
        'Haldi wala doodh – curcumin ki anti-inflammatory aur anti-parasitic activity',
      ],
    },
    {
      _key: 'di3',
      category: 'Poshan Wapas Laane Wale Khane',
      emoji: '🌾',
      items: [
        'Dal aur rajma – iron aur protein replacement for hookworm anemia',
        'Palak – khoon ki kami poori karta hai jo worms ke karan hoti hai',
        'Dahi (plain probiotic) – gut bacteria balance restore karta hai jo treatment ke baad zaroori hai',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'Meetha Aur Maida',
      emoji: '🍬',
      items: [
        'Cheeni aur mithaai – worms sugar par thrive karte hain, infestation aur badh sakta hai',
        'Maida roti / white bread – aant mein sluggishness, worm environment better hota hai',
        'Packaged biscuits / cakes – hidden sugar + maida ka combination',
      ],
    },
    {
      _key: 'da2',
      category: 'Bahar Ka Khaana',
      emoji: '🌮',
      items: [
        'Street food (gol gappe, chaat) – contamination ka sabse bada source, reinfestation ka khatra',
        'Adhpaka maas ya chicken – tapeworm aur other parasites ka direct source',
        'Bahar ka cut fruit ya juice – unclean water/hands se banana',
      ],
    },
    {
      _key: 'da3',
      category: 'Irritant Foods',
      emoji: '🌶️',
      items: [
        'Bahut zyada mirch masala – pehle se irritated aant ko aur nuqsaan karta hai',
        'Cold drinks aur soda – gut bacteria harm karta hai jo recovery ke liye zaroori hain',
        'Junk food chips – salt + oil aant ki healing ko slow karta hai',
      ],
    },
  ],

  dietTip: 'Rooz subah khali pet 2-3 kachi lahsun ki kaliyan dena + raat ko haldi doodh – yeh combination worm environment ko naturally hostile rakhta hai.',
  dietNote: 'Treatment ke baad probiotic dahi daily zaroor dein – worm infestation ke baad gut microbiome ko restore karna bahut zaroori hai.',

  dos: [
    'Khana khane se pehle aur baad haath zaroor dhulaayein – worm eggs haath se hi munh mein jaati hain',
    'Pani filtered ya ubla hua dein – contaminated water Giardia aur hookworm ka no. 1 source hai',
    'Bacche ke nails chote rakkhein aur weekly kaatein – worm eggs nails ke neeche survive karti hain',
    'Pakhane mein agar keede dikh jayein to immediately doctor ko dikhayein – type confirm ho to treatment zyada effective',
    'School se aate hi haath dhulaayein aur tiffin box ghar pe sanitize karein',
    'Raat ko sone se pehle guda area clean rakhein – pinworm mein egg-laying raat ko hoti hai',
  ],

  donts: [
    'Bahar ka cut fruit, gol gappe ya open juice mat khilayein – reinfestation ka sabse common karan India mein',
    'Nange paon khet ya gili mitti mein mat chalne dein – hookworm skin ke zariye andar ghusta hai',
    'Khud se koi bhi allopathic deworming medicine mat dein bina doctor ke – overdose ya wrong medicine se side effects',
    'Bachche ko rooz naha ke alag kapde pehnaayein – pinworm ke eggs kapdon par chipke rehte hain',
    'Ek ghar mein infestation ho to sirf ek bacche ka ilaaj mat karein – sab family members check karwaayein',
  ],

  seasonalCare: {
    summer: 'Garmi mein bacche bahar ka thanda paani / sherbet peete hain – contamination ka risk. Ghar ka filtered paani dein, nimbu paani ghar pe banayein. Street food consumption badh jaata hai – strict supervision zaroori. Is season mein routine deworming consider karein.',
    winter: 'Immunity thodi low rehti hai – existing worm infestation flare ho sakta hai. Haldi wala doodh rooz raat ko dein. Lahsun aur adrak khane mein include karein. School se aate hi haath dhone ki aadat zyada important.',
    monsoon: 'Sabse dangerous season. Barish ka paani naaliyon mein mix – contamination highest. Bahar ka paani BILKUL mat peene dein. Nange paon bahar NAHI – hookworm ka season. School mein tiffin box aur haath ki safaai double karein.',
  },

  faqs: [
    {
      _key: 'faq1',
      question: 'Bacche ke pet mein worms hone ki pehchaan kaise karein?',
      answer: 'Sabse common signs hain – raat ko guda mein tez khujli, pakhane mein safed dhage ya tukde, naabhi ke paas baar baar dard, naak mein baar baar ungali daalna, aur neend mein daant peesna. Agar ye signs dikh rahein to ek homoeopathic ya general physician se milein aur stool test karwayein.',
    },
    {
      _key: 'faq2',
      question: 'Bacchon ke pet ke worms ka homoeopathic ilaaj kitne din mein kaam karta hai?',
      answer: 'Halke cases mein 2-4 hafte mein clearly fark dikhne lagta hai. Baar baar hone wale cases mein 2-3 mahine ka constitutional treatment chahiye hota hai. Pinworm ki raat wali khujli mein toh aksar 48-72 ghante mein hi relief shuru ho jaati hai.',
    },
    {
      _key: 'faq3',
      question: 'Kya homoeopathic deworming safe hai chote bacchon ke liye – 1-2 saal ke?',
      answer: 'Haan, homoeopathic medicines chhote bacchon ke liye safe hain kyunki inhe ultra-diluted form mein diya jaata hai. Koi harsh chemicals nahi – liver ya kidneys par koi load nahi. Lekin hamesha ek qualified homoeopath ki guidance se dein, khud se mat dein.',
    },
    {
      _key: 'faq4',
      question: 'Baar baar worms aa jaate hain – koi permanent solution hai?',
      answer: 'Baar baar aane ka matlab hai ki immunity weak hai ya source khatam nahi hua. Homoeopathy mein iska permanent solution constitutional treatment hai – Calcarea Carb jaise remedies immunity itni strong karti hain ki body khud future infestations rok le. Saath hi hygiene aur diet change bhi zaroori hai.',
    },
    {
      _key: 'faq5',
      question: 'Kya bacche ke saath ghar ke bade logon ko bhi keede ho sakte hain?',
      answer: 'Bilkul. Khaaskar pinworm bahut tezi se ek se doosre family member mein failta hai. Agar ghar mein ek bacche ko hai to sabko check karwaana chahiye – warna cycle khatam nahi hogi aur bachche ko baar baar ho jaayega.',
    },
    {
      _key: 'faq6',
      question: 'Pet mein worms hone par bachcha itna chidchida kyun ho jaata hai?',
      answer: 'Worms aant ki inner lining ko irritate karte hain, raat ko neend kharab karte hain aur nutrition ka ek bada hissa khud le lete hain. Yeh teen cheezein milke bacche ko physically aur mentally restless banati hain. Cina jaisi homoeopathic remedy seedha is irritability ko target karti hai.',
    },
    {
      _key: 'faq7',
      question: 'Kya keede se bachche ka weight nahi badh raha ho sakta hai?',
      answer: 'Haan, yeh ek common aur important connection hai. Worms bacche ke khaane se poshan chura lete hain – chahe bachcha kitna bhi khaye, woh absorb nahi hota. Ilaaj ke baad poshan sundar tarike se absorb hona shuru hota hai aur weight badhta hai.',
    },
    {
      _key: 'faq8',
      question: 'Roundworm aur pinworm mein kya fark hai?',
      answer: 'Roundworm bada hota hai (15-35cm), pet mein dard aur ulti jaise signs deta hai, aur pakhane mein large worms dikh sakte hain. Pinworm chota, sutli jaisa hota hai – iski pehchaan raat ko guda ki tez khujli se hoti hai. Dono ka treatment alag hota hai isliye doctor se type confirm karwana zaroori hai.',
    },
    {
      _key: 'faq9',
      question: 'Nange paon chalne se keede kaise aate hain?',
      answer: 'Hookworm ki larvae gili mitti ya gande paani mein hoti hain. Jab bachcha nange paon chalta hai, yeh larvae seedha skin ke zariye andar ghus jaati hain – specifically pair ke taalon se. Isiliye nange paon bahar khilana, khaaskar monsoon mein, avoid karein.',
    },
    {
      _key: 'faq10',
      question: 'Bacche ke pakhane mein safed dhage jaise dikhein – kya karein?',
      answer: 'Yeh pinworm ya tapeworm ke segment ho sakte hain. Ghabrayein nahi – ek clean container mein sample lein aur doctor ko dikhaayein. Type identify hone par homoeopathic ya aur koi treatment sahi se select ki ja sakti hai.',
    },
    {
      _key: 'faq11',
      question: 'Kya homoeopathy mein worm ka ilaaj bina test ke bhi hota hai?',
      answer: 'Haan, homoeopathy mein doctor saari symptoms ke hisaab se treat karta hai – stool test zaroor helpful hota hai type jaanne ke liye, lekin agar test nahi karwa sakte to bhi classical symptoms dekh ke treatment di ja sakti hai. Stool test karwana better hota hai.',
    },
    {
      _key: 'faq12',
      question: 'Worm ke karan anemia kyun hota hai?',
      answer: 'Hookworm seedha aant ki deewar se chipak ke khoon peeta hai. Ek hookworm roz 0.2ml khoon peeta hai – bahut worms ho to anemia (khoon ki kami) ho jaata hai. Bachcha pale, thaka, aur kamzor rehta hai. Iron-rich diet aur homoeopathic treatment milke anemia theek karte hain.',
    },
    {
      _key: 'faq13',
      question: 'Raat ko hi kyun zyada khujli hoti hai – koi reason hai?',
      answer: 'Pinworm female worms raat ko sone ke time guda ke paas aa ke eggs deti hain – is process se intense itching hoti hai. Yahi wajah hai ki din mein koi taklif nahi lekin raat ko bachcha rota rehta hai. Teucrium aur Cina is raat wali khujli mein specifically kaam karti hain.',
    },
    {
      _key: 'faq14',
      question: 'Giardia kya hai – kya yeh bhi worm hai?',
      answer: 'Giardia technically ek protozoa hai worm nahi, lekin iske signs worm infestation jaisi hoti hain – yellow loose motions, pet fulna, gas, aur kamzori. Paani se failta hai. Homoeopathic treatment mein Podophyllum aur Aloe jaisi remedies helpful hoti hain.',
    },
    {
      _key: 'faq15',
      question: 'Worm ke ilaaj ke dauran kya bacche ko school jaana chahiye?',
      answer: 'Haan, school jaana band karne ki zaroorat nahi – lekin khaaskar pinworm mein ek din ke liye teacher ko bata dein aur bacche ki personal cheezein (towel, tiffin) alag rakhein. Haath dhone ki strict aadat maintain karein.',
    },
    {
      _key: 'faq16',
      question: 'Kya kele ya doodh se worms badhte hain?',
      answer: 'Yeh ek common misconception hai. Kele ya doodh se keede nahi badhte. Keede sugar-rich aur maida-based diet se thrive karte hain – jaise cheeni, maida, packaged snacks. Kela aur doodh nutrition ke liye faydemand hain.',
    },
    {
      _key: 'faq17',
      question: 'Pet ke worms ka homoeopathic ilaaj allopathy se behtar kyun hai?',
      answer: 'Allopathic dewormers jaise Albendazole ek baar mein worms ko maar dete hain lekin immunity build nahi karte – isliye baar baar infestation hota rehta hai. Homoeopathic treatment immunity ko mazboot karta hai aur long-term protection deta hai. Dono ke apne apne use hain – severe ya emergency cases mein allopathy bhi zaroori ho sakti hai.',
    },
    {
      _key: 'faq18',
      question: 'Kaun si laboratory test se worm diagnose jaate hain?',
      answer: 'Stool examination (Ova & Parasite test) sabse common test hai. Pinworm ke liye "Scotch tape test" hota hai – sone ke baad subah guda ke paas transparent tape lagao, lab mein jaao, woh eggs dekh lete hain microscope se. Yeh tests government hospitals mein bhi available hain.',
    },
    {
      _key: 'faq19',
      question: 'Kya bachche ke daant peesne ka worms se sach mein sambandh hai?',
      answer: 'Yeh ek commonly observed clinical sign hai – khaaskar Ayurveda aur homoeopathy mein is connection ko accept kiya jaata hai. Scientific evidence mixed hai lekin bahut se practitioners ne notice kiya hai ki worm treatment ke baad bruxism (daant peesna) kam hota hai.',
    },
    {
      _key: 'faq20',
      question: 'Kya lahsun se keede sach mein nikalte hain?',
      answer: 'Lahsun mein Allicin hota hai jo anti-parasitic properties rakhta hai. Research ne dikhaaya hai ki yeh worm environment ko hostile banata hai – completely cure nahi karta lekin bahut effective adjunct therapy hai. Rooz subah 2-3 kachi kaliyan bacche ko de sakte hain.',
    },
    {
      _key: 'faq21',
      question: 'Ghar ki safai mein kya karna chahiye jab bacche ko keede hon?',
      answer: 'Roz ghar ka floor disinfect karein. Bacche ke kapde, bedsheet aur underwear roz garam paani mein dhoyein. Toilet seat regular sanitize karein. Nails sab ki choti karein. Bathroom towels alag rakhein. Yeh steps reinfestation cycle todne ke liye zaroori hain.',
    },
    {
      _key: 'faq22',
      question: 'Kya pumpkin seeds se keede nikalte hain – ghar ka nuskha?',
      answer: 'Haan – pumpkin seeds (kaddu ke beej) mein Cucurbitacin hota hai jo worms ko temporarily paralyze karta hai. Khali pet 2-3 chamach peese beej dein, 2 ghante baad castor oil thoda dein – yeh ek traditional aur research-backed gharelu ilaaj hai. Lekin yeh single treatment nahi hai – doctor ki guidance ke saath karein.',
    },
    {
      _key: 'faq23',
      question: 'Kya ek baar keede theek hone ke baad dobara aate hain?',
      answer: 'Haan, agar source nahi hataya to aate hain. Hygiene improve nahi ki, reinfestation guaranteed hai. Isliye homoeopathy mein sirf worms kill karna nahi, immunity banana bhi treatment ka hissa hai – taaki body future attacks khud rok le.',
    },
    {
      _key: 'faq24',
      question: 'Worm infestation mein bacche ki naak se khoon kyun aata hai?',
      answer: 'Yeh directly worms se nahi hota usually – lekin hookworm anemia se naak dry ho jaati hai aur bleeding ho sakti hai. Kuch severe roundworm cases mein worms migrate karke nasal passage tak pahunch sakte hain – yeh rare hai lekin emergency hai. Aisi situation mein turant doctor ke paas jayein.',
    },
  ],

  sources: [
    { _key: 'src1', name: 'WHO – Soil-transmitted helminthiases fact sheet', url: 'https://www.who.int/news-room/fact-sheets/detail/soil-transmitted-helminth-infections', year: '2024' },
    { _key: 'src2', name: 'NCBI – Intestinal Parasitic Infections in Indian Children | Tropical Medicine Reports', url: 'https://pubmed.ncbi.nlm.nih.gov', year: '2021' },
    { _key: 'src3', name: 'Indian Journal of Pediatrics – Prevalence of Intestinal Parasites in School Children', url: 'https://www.springer.com/journal/12098', year: '2019' },
    { _key: 'src4', name: "Clarke's Dictionary of Practical Materia Medica – Cina, Santoninum, Teucrium", url: 'https://www.homeoint.org', year: '2023' },
    { _key: 'src5', name: "Allen's Keynotes – Spigelia, Calcarea Carbonica", url: 'https://www.homeoint.org', year: '2023' },
  ],

  relatedDiseases: [
    'Constipation (Kabz)',
    'IBS',
    'Gastritis',
    'Recurrent Cold / Weak Immunity',
    'Delayed Milestones',
  ],

  selfCheck: 'Agar bachcha raat ko guda kharochta hai, pakhane mein safed dhage dikhein, ya weight nahi badh raha – stool test karwayein aur homoeopath se milein.',
}

async function seed() {
  try {
    const result = await client.createOrReplace(doc)
    console.log('✅ Worm Infestation created/updated:', result._id)
    console.log('🌐 Live at: https://homeopedia.in/diseases/worm-infestation')
  } catch (err) {
    console.error('❌ Error:', err)
  }
}

seed()
