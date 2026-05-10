import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-chronic-otitis-media',
  _type: 'disease',
  title: 'Chronic Otitis Media',
  hindiName: 'Kaan ka Purana Dard / Kaan Bahar (Pus wala Kaan)',
  slug: { _type: 'slug', current: 'chronic-otitis-media' },
  category: 'ENT',
  publishedAt: '2026-05-10T00:00:00.000Z',
  metaTitle: 'Chronic Otitis Media – Kaan Infection Ka Sahi Ilaaj',
  metaDescription: 'Kaan se pani ya pus aana, sunai dena kam – karan, prakar, homeopathic ilaaj aur diet guide. Verified info, doctor-reviewed. Homeopedia.in',

  heroText: 'Chronic Otitis Media (COM) ek aisi condition hai jisme kaan ka andar wala hissa (middle ear) teen mahine ya usse zyada samay tak infected rehta hai ya baar baar infection hota rehta hai. Is mein aksar kaan ke parde (eardrum) mein ched ho jaata hai jisse pus ya paani bahar aata hai – ise "kaan bahar hona" bhi kehte hain. Yeh sirf dard ki problem nahi hai – agar ilaaj nahi kiya to sunai dena bhi dhire dhire kam ho sakta hai. India mein yeh condition khaaskar un bacchon aur adults mein zyada dekhi jaati hai jinhe baar baar naak ya gale ki takleef rehti hai. Sahi treatment se is bimari ko control mein laana bilkul possible hai.',

  quickFacts: {
    whatItIs: 'Kaan ka middle ear mein teen mahine se zyada chalne wala ya baar baar aane wala infection – aksar kaan ke parde mein ched ke saath',
    howCommon: 'WHO ke anusaar South-East Asia region mein Chronic Suppurative Otitis Media ki prevalence 7.8% hai; India mein rural areas aur poor sanitation zones mein cases zyada hain',
    treatmentDuration: 'Mild to moderate CSOM mein homeopathic treatment ka response 3 se 6 mahine mein dekhna uchit hai; severe ya cholesteatoma cases mein surgical evaluation pehle',
    successRate: 'Jo patients naak ki allergy aur kaan ko ek integrated case ki tarah treat karaate hain unme discharge ki frequency aur intensity dono mein 3-4 mahine mein meaningful fark aata hai',
  },

  causes: [
    'Baar baar acute ear infection (acute otitis media) ka sahi ilaaj na hona – infection chronic ho jaata hai',
    'Naak band rehna, adenoids (naak ke peeche ki granthi) ka bada hona – Eustachian tube theek se kaam nahi karti',
    'Baar baar naak, gala ya sinus ka infection – bacteria wahi se kaan mein pahunchte hain',
    'Eardrum mein purana ched jo properly heal nahi hua',
    'Allergies (khaaskar nasal allergies) jo Eustachian tube ko band rakhti hain',
    'Immunity kamzori – zyada infections jhelte hain',
  ],

  riskFactors: [
    'Chhote bachhe (5 saal se kam) – Eustachian tube seedhi aur chhoti hoti hai, infection aasani se pahunchta hai',
    'Jo log bottle se doodh pilaye gaye hon – breastfeeding protective hoti hai',
    'Daycare ya school mein zyada bachon ke saath rehna – infections jaldi failte hain',
    'Cigarette smoke ke paas rehna (ghar mein smoking) – Eustachian tube irritate hoti hai',
    'Cleft palate wale bachhe – anatomical reason se zyada risk',
    'Allergy patients – nasal congestion se Eustachian tube block',
    'Socioeconomic factors – overcrowded ghar, poor nutrition, delayed treatment',
  ],

  complications: [
    'Permanent hearing loss – middle ear ki hadiyan damage ho sakti hain; yeh damage reversible nahi hoti',
    'Cholesteatoma formation – skin ka abnormal growth jo surrounding structures destroy karta hai',
    'Mastoiditis – kaan ke peeche ki haddi mein infection failna – bohot serious condition',
    'Meningitis ya brain abscess – bahut rare, lekin serious neglect mein; yeh emergency hai',
    'Bachon mein speech aur language development mein delay – sunai dena kam ho to seekhna bhi mushkil hota hai',
  ],

  types: [
    {
      _key: 'type1',
      name: 'Chronic Suppurative Otitis Media (CSOM) – Safe / Tubotympanic Type',
      description: 'Sabse common type. Isme kaan ke parde ke beech wale hisse mein ched hota hai aur baar baar pus ya paani bahar aata hai, lekin infection ear ke zyada andar nahi jaata. Ise "safe" isliye kehte hain ki hearing loss moderate hoti hai aur serious complications kam hote hain. Pehchaan: Kaan se durgandh wala ya bina durgandh ka paani/pus baaharna + sunai dena thoda kam hona. Dard aam taur par zyada nahi hota.',
    },
    {
      _key: 'type2',
      name: 'Chronic Suppurative Otitis Media – Unsafe / Atticoantral Type (Cholesteatoma ke saath)',
      description: 'Yeh zyada serious type hai. Isme kaan ke parde ke upar wale hisse se ek khas skin ka gola (cholesteatoma) ban jaata hai jo andar ki haddiyon ko damage karta rehta hai. Ise "unsafe" kehte hain. Pehchaan: Kaan se badbu wala pus aana + kaan mein kuch band hone jaisa feel + sunai dena tezi se kam hona. Ye type kabhi bhi ignore nahi karni chahiye – turant specialist ki zaroorat hai.',
    },
    {
      _key: 'type3',
      name: 'Chronic Otitis Media with Effusion (Glue Ear)',
      description: 'Isme kaan ke parde mein ched nahi hota, lekin middle ear mein pani jaisi ya chipchipa (glue-like) fluid bhar jaati hai. Pus bahar nahi aata lekin sunai dena bohot kam ho jaata hai. Pehchaan: Kaan mein bhaari pan, awaazon ka daba hua sunai dena, bachon mein school performance girna – ye symptoms aksar parents miss kar dete hain.',
    },
  ],

  symptoms: [
    {
      _key: 'sym1',
      category: 'Kaan Se Baaharna (Most Common Signs)',
      items: [
        'Kaan se paani ya pus baaharna – kabhi kabhi badbu ke saath, kabhi bina',
        'Pus ka rang peela, safed ya khoon mila ho sakta hai',
        'Yeh discharge nahaate waqt ya naak sainate ke baad zyada ho sakta hai',
        'Kaan ke bahar chamdi mein khujli ya jalan (discharge se)',
      ],
    },
    {
      _key: 'sym2',
      category: 'Sunai Dene Ki Takleef',
      items: [
        'Sunai dena dhire dhire kam hona – aksar patient ko pehle pata hi nahi chalta',
        'Kaan mein bhaari pan ya band hone jaisa feel',
        'Apni awaaz zyada sunai dena (autophony)',
        'Tinnitus – kaan mein seeti jaisi ya ghunghanahat ki awaaz',
      ],
    },
    {
      _key: 'sym3',
      category: 'Dard Aur Doosre Symptoms',
      items: [
        'Kaan mein halka ya moderate dard (tez dard chronic mein kam hota hai)',
        'Sar mein bhaari pan ya halka chakkar',
        'Naak band rehna ya baar baar naak behna (saath mein)',
        'Bacchon mein chidchidaahat, neend mein takleef, TV volume zyada karna',
      ],
    },
  ],

  homeopathyBenefits: [
    'Baar baar aane wale ear infections ki pattern todni mein madadgar – sirf ek episode ka ilaaj nahi, root cause address',
    'Nasal allergies aur Eustachian tube dysfunction – dono ek saath treat hote hain',
    'Bachon ke liye safe – highly diluted medicines, antibiotic resistance ka koi sawaal nahi',
    'Immunity overall improve hoti hai – doosre infections bhi kam hote hain',
    'Pus discharge mein reduction aur kaan ke parde ki healing mein support',
  ],

  medicines: [
    {
      _key: 'med1',
      name: 'Pulsatilla Nigricans',
      bestFor: 'Jinke kaan se thick, yellow-green pus aata ho aur jo rote zyada hain, milnasaar swabhav ke hain, thanda paani nahi peena pasand, khule mein better feel karte hain. Bacchon mein aksar ye pattern milti hai.',
      keyIndications: [
        'Thick yellow-green pus discharge – kaan, naak, aur sinuses teeno se',
        'Milnasaar, rote zyada – emotional pattern prominent',
        'Nasal-ear connection involved – naak aur kaan dono saath affected',
      ],
    },
    {
      _key: 'med2',
      name: 'Calcarea Carbonica',
      bestFor: 'Mote ya thoda heavy build ke bachhe ya adults – jinhe baar baar ear infections hote hain, sweating zyada hoti hai especially sar pe, aur jinki immunity generally weak lagti hai. Dairy products se problems ho sakti hain.',
      keyIndications: [
        'Baar baar ear infections – "har sezon mein kaan bahar" jaisi pattern',
        'Sweating zyada – especially sar pe, raat ko',
        'Basal immunity strengthen karne ke liye – long-term constitutional medicine',
      ],
    },
    {
      _key: 'med3',
      name: 'Silicea (Silica)',
      bestFor: 'Jinke kaan se baar baar pus aata ho, wounds ya infections jaldi theek nahi hote, body mein purani infection ka koi na koi hissa hamesha rehta hai. Often thin, delicate build wale patients.',
      keyIndications: [
        'Purani infection jo heal nahi ho rahi – chronic non-healing discharge',
        'Thin, delicate build – wounds jaldi theek nahi hote',
        'Body ke "push out" mechanism ko stimulate karta hai – dead tissue bahar nikalne mein madadgar',
      ],
    },
    {
      _key: 'med4',
      name: 'Hepar Sulphuris Calcareum',
      bestFor: 'Jinke kaan mein tez dard ke saath pus ho, thandi hawa bilkul bardaasht nahi hoti, chidchidaahat zyada rehti hai, aur thodi si bhi hawa kaan ya gardan pe lagne se problem badhti hai.',
      keyIndications: [
        'Active infection ke saath dard – suppurative condition with sharp pain',
        'Thandi hawa se worse – har draft se problem badhti hai',
        'Acute exacerbation of chronic case – jab infection active flare pe ho',
      ],
    },
    {
      _key: 'med5',
      name: 'Kali Muriaticum',
      bestFor: 'Jinke kaan mein glue-like fluid ho (Otitis Media with Effusion / Glue Ear), kaan band lagein, sunai dena kam ho, lekin pus baaharna nahi ho. Nigalne mein bhi takleef ho sakti hai.',
      keyIndications: [
        'Glue Ear type – thick white/light fluid, kaan band',
        'Sunai dena kam – bina discharge ke bhi',
        'Thick white ya light-colored mucous – middle ear fluid ke liye specific',
      ],
    },
  ],

  dietInclude: [
    {
      _key: 'di1',
      category: 'Immunity Badhane Wale Khane',
      emoji: '🌡️',
      items: [
        'Lahsun (Garlic) – natural antimicrobial hai, ear infections ki frequency kam karne mein madadgar',
        'Adrak (Ginger) – anti-inflammatory properties hain, nasal congestion aur throat ko bhi help karta hai',
        'Haldi wala doodh (Golden milk) – curcumin inflammation kam karta hai, raat ko sone se pehle lena best hai',
      ],
    },
    {
      _key: 'di2',
      category: 'Vitamin C Rich Foods',
      emoji: '🍊',
      items: [
        'Amla – India ka sabse accessible Vitamin C source, immunity ke liye top pick',
        'Nimbu (Lemon) – paani mein milakar peena, white blood cell production boost karta hai',
        'Guava (Amrood) – ek guava mein kisi bhi citrus fruit se zyada Vitamin C – local aur sasta bhi',
      ],
    },
    {
      _key: 'di3',
      category: 'Anti-Inflammatory Grains & Proteins',
      emoji: '🥣',
      items: [
        'Daliya (Oats) – beta-glucan naam ka compound hota hai jo immunity strong karta hai',
        'Moong dal – light on digestion, protein deta hai, body ko recover karne mein help karta hai',
        'Sarson ka saag + Makki ki roti (winter mein) – omega-3 se bharpoor, inflammation kam karta hai',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'Mucus Badhane Wale Khane',
      emoji: '❌',
      items: [
        'Doodh aur dairy products (zyada matra mein) – mucus production badhate hain, Eustachian tube aur zyada block ho sakti hai',
        'Maida aur processed bakery items – inflammation promote karte hain, immunity pe negative effect',
      ],
    },
    {
      _key: 'da2',
      category: 'Allergy Trigger Karne Wale',
      emoji: '🚫',
      items: [
        'Bahut zyada thanda paani ya ice – Eustachian tube constriction ho sakti hai, infection flare ho sakta hai',
        'Packaged juices aur cold drinks – sugar zyada hoti hai, bacteria ke liye breeding ground banta hai middle ear mein',
      ],
    },
    {
      _key: 'da3',
      category: 'Infection Ko Badhane Wale',
      emoji: '⚠️',
      items: [
        'Bahut zyada namak wala khana – fluid retention badhata hai, ear pressure worse ho sakta hai',
        'Tez masale aur oily fried food – nasal congestion trigger kar sakte hain jo Eustachian tube block karta hai',
        'Alcohol (adults mein) – immune response compromise karta hai, infection control mushkil hoti hai',
      ],
    },
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Kaan se paani aana (kaan bahar hona) – yeh kya hota hai aur kab serious hota hai?',
      answer: 'Kaan se paani ya pus aana – jise log "kaan bahar hona" kehte hain – ye middle ear mein infection ka sign hai. Jab kaan ke parde mein ched ho jaata hai to discharge bahar aata hai. Agar yeh discharge sirf ek ya do baar hua ho aur theek ho gaya – to acute infection tha. Lekin agar yeh baar baar ho raha hai ya teen mahine se zyada chal raha hai – to yeh Chronic Otitis Media hai aur doctor se milna zaroori hai. Badbu wala pus, sunai dena kam hona, ya kaan ke peeche sujan aana – ye sab serious signs hain jisme bina der kiye ENT ya homoeopath se milein.',
    },
    {
      _key: 'faq2',
      question: 'Chronic Otitis Media aur normal kaan ke dard mein kya fark hai?',
      answer: 'Normal kaan ka dard (Acute Otitis Media) aksar achanak aata hai, tez hota hai, aur 1-2 hafte mein theek ho jaata hai – aksar sardi ya throat infection ke saath. Chronic Otitis Media mein dard utna tez nahi hota, lekin problem band hi nahi hoti – baar baar pus aana, sunai dena thoda kam hona, aur kaan mein bhaari pan mahine bhar chalte rehte hain. Chronic mein kaan ke parde mein ched hota hai jo heal nahi ho raha – yahi sabse bada fark hai.',
    },
    {
      _key: 'faq3',
      question: 'Kaan ka parda (eardrum) khud theek ho sakta hai kya?',
      answer: 'Haan – chhote chhed (small perforations) aksar khud theek ho jaate hain, especially agar infection properly treat ho jaaye aur kaan sukha rakha jaaye. Lekin bade chhed, ya jo infection baar baar aane ki wajah se theek nahi ho pa rahe, unhe medical ya surgical help chahiye. Homeopathy mein ear drum healing ke liye kuch medicines (Silicea, Calcarea Carbonica) use ki jaati hain jo body ki natural healing process support karte hain. Lekin khud decide mat karein – audiometry test se ched ka size aur hearing loss dono check hone chahiye.',
    },
    {
      _key: 'faq4',
      question: 'Kya Chronic Otitis Media se permanent hearing loss ho sakti hai?',
      answer: 'Haan – yeh ek real risk hai, aur isliye is bimari ko ignore nahi karna chahiye. Middle ear ki chhoti hadiyan (ossicles) infection se damage ho sakti hain, aur yeh damage reversible nahi hota. Lekin yeh necessarily hoga – yeh zaroor nahi hai. Jo log jaldi ilaaj karaate hain, kaan sukha rakhte hain, aur baar baar aane wale infections ko root cause pe treat karte hain – unme hearing loss ka risk bahut kam ho jaata hai. Isliye jab bhi discharge baar baar aaye – audiometry test zaroor karwayein.',
    },
    {
      _key: 'faq5',
      question: 'Bachon mein baar baar kaan bahar kyun hota hai? Kya koi permanent solution hai?',
      answer: 'Bachon mein Chronic Otitis Media ka sabse common reason hai – Eustachian tube ka chhota aur seedha hona, adenoids (naak ke peeche ki granthi) ka bada rehna, aur daycare ya school se baar baar respiratory infections aana. Permanent solution ke liye sirf kaan ka ilaaj kaafi nahi – root cause dekhna zaroori hai. Agar adenoids bade hain – unka ilaaj chahiye. Agar allergy trigger kar rahi hai – wo address honi chahiye. Homeopathy mein yeh integrated approach use hoti hai – kaan ke saath naak, immunity, aur badhne wale triggers sab ko ek saath treat kiya jaata hai.',
    },
    {
      _key: 'faq6',
      question: 'Kya homeopathy Chronic Otitis Media mein kaam karta hai?',
      answer: 'Haan – homeopathy Chronic Otitis Media mein ek useful approach hai, khaaskar jab focus sirf symptom control pe nahi, balki baar baar aane ki pattern todni pe ho. Homeopathy mein sirf kaan ko nahi, aapki poori profile ko treat kiya jaata hai – allergy hai, immunity kaisi hai, naak ka haal kya hai, infections kab zyada hote hain – sab milaakar medicine decide hoti hai. Jo patients mein antibiotics se infection control ho jaata hai par baar baar wapas aata hai – unme individualized homeopathic treatment se recurrence mein meaningful reduction possible hai. Cholesteatoma ya severe structural damage ke cases mein surgery se bachna mushkil hota hai – wahaan homeopathy supportive role mein kaam karta hai.',
    },
    {
      _key: 'faq7',
      question: 'Chronic Otitis Media ka permanent ilaaj kya hai – kya yeh hamesha ke liye theek ho sakta hai?',
      answer: 'Haan – Chronic Otitis Media ko long-term control mein laana bilkul possible hai, aur kai cases mein complete resolution hoti hai. "Permanent theek" ka matlab hai – kaan se discharge band ho jaana, eardrum ka theek ho jaana, aur infections ka baar baar na aana. Yeh tab hota hai jab sirf surface treatment nahi, underlying causes – allergy, immunity weakness, nasal problems – sab address hoon. Homeopathy mein yahi approach use hoti hai. Cholesteatoma ya bahut bade chhed ke cases mein surgical intervention bhi zaroor pad sakti hai – lekin post-surgery mein bhi homeopathy healing mein help karta hai.',
    },
    {
      _key: 'faq8',
      question: 'Kaan mein infection ke liye gharelu ilaaj – kya ghar pe kuch kiya ja sakta hai?',
      answer: 'Kuch safe supportive steps ghar pe ki ja sakti hain – lekin ye medical treatment ki jagah nahi hain. Kaan ko sukha rakho – yeh sabse important step hai, paani mat jaane do bilkul. Warm compress (halka garm kapda) kaan ke bahar laganaa – dard mein aaram deta hai. Saline nasal wash – naak saaf rakhna kaan ko indirect help karta hai. Sabse zaroori: Kaan ke andar koi bhi cheez mat daalo – til ka tel, onion juice, ya cotton bud. Ye sab harm karte hain. Doctor ya homoeopath se milna replace nahi hota.',
    },
    {
      _key: 'faq9',
      question: 'Kaan mein homeopathic medicine kaun si best hai?',
      answer: 'Chronic Otitis Media mein commonly use hone wali homeopathic medicines hain – Pulsatilla (thick yellow-green pus ke liye), Silicea (baar baar discharge, healing na ho), Calcarea Carbonica (immunity weak, baar baar infections), Hepar Sulphuris (dard ke saath active infection), aur Kali Muriaticum (Glue Ear, kaan band). Lekin – aapke liye kaun si medicine sahi hai yeh sirf ek qualified homoeopath decide kar sakta hai jo aapki poori case history sunke medicine choose karta hai. Self-medication effective nahi hoti is condition mein.',
    },
    {
      _key: 'faq10',
      question: 'Kaan ke infection mein swimming kar sakte hain kya?',
      answer: 'Agar kaan ka parda (eardrum) intact hai aur koi active discharge nahi hai – to doctor ki permission se swimming possible hai, ear plugs ke saath. Lekin agar Chronic Otitis Media hai aur kaan ka parda theek nahi hua – to swimming strict mana hai. Swimming pool ka paani (chlorinated bhi) kaan mein jaane se infection rapidly worse ho sakta hai. Yeh sirf pool ka paani nahi – nahate waqt, baarish mein bhi kaan mein paani jaana avoid karna hai. ENT ya homoeopath se specifically poochein apni situation mein.',
    },
    {
      _key: 'faq11',
      question: 'Kaan mein seeti jaisi awaaz (tinnitus) Chronic Otitis Media mein kyun aati hai aur kya theek hoti hai?',
      answer: 'Chronic Otitis Media mein middle ear mein fluid ya infection hone se inner ear aur hearing nerve pe pressure aata hai – jis wajah se tinnitus (kaan mein ghunghanahat, seeti, ya sansanahat) hoti hai. Jab underlying infection aur fluid treat hota hai, tinnitus mein bhi sudhaar aata hai aksar. Lekin agar infection lamba chala ho aur inner ear damage hua ho – to tinnitus kuch cases mein persist karti hai. Homeopathy mein Silicea, Kali Mur, Calcarea Carbonica ye sab tinnitus wale COM cases mein use hote hain.',
    },
    {
      _key: 'faq12',
      question: 'Kya Chronic Otitis Media mein surgery zaroori hai?',
      answer: 'Har case mein nahi – lekin kuch situations mein surgery best option hai. Cholesteatoma (Unsafe type of CSOM) mein surgery zaroori hai – yeh condition medicine se theek nahi hoti. Bahut bada eardrum perforation jo khud heal nahi ho raha (Myringoplasty surgery hoti hai). Repeated infections jo har treatment ke baad wapas aa rahe hain aur hearing deteriorate ho rahi ho. Glue Ear jo 3 mahine se zyada raha aur hearing affected ho (Grommets lagaaye jaate hain). Jo cases mein kaan ka chhed chhota hai, infection controllable hai, aur hearing stable – unme medical aur homeopathic treatment se achhe results milte hain.',
    },
    {
      _key: 'faq13',
      question: 'Kaan ka infection sinus ya naak se connected kaise hai?',
      answer: 'Bahut directly connected hai – Eustachian tube naam ki ek nali hoti hai jo middle ear ko naak ke peeche se jodhti hai. Is tube ka kaam hai middle ear ka pressure balance karna aur fluid drain karna. Jab naak band rehti hai – allergy se, sinus infection se, adenoids se – Eustachian tube ki drainage block ho jaati hai. Middle ear mein fluid rukta hai, bacteria milta hai, infection shuru. Isliye jo log kehte hain "sirf kaan theek karo" – unka approach incomplete hai. Nasal allergy aur sinus health seedhe ear infection ki frequency se relate hain.',
    },
    {
      _key: 'faq14',
      question: 'Pregnancy mein kaan ka infection ho jaaye to kya karein?',
      answer: 'Pregnancy mein Chronic Otitis Media ka ilaaj thoda careful approach maangta hai. Regular antibiotics ka first trimester mein use cautiously kiya jaata hai – doctor decide karta hai. Homeopathy pregnancy mein zyada preferred option hai – Pulsatilla, Calcarea Carbonica jaisi medicines conventionally safe mani jaati hain. Decongestants aur antihistamines pregnancy mein khud se mat lo. ENT aur homoeopath dono se milna – coordinated approach best hai. Kaan se discharge ho, sunai dena kam ho – ignore mat karein pregnancy mein.',
    },
    {
      _key: 'faq15',
      question: 'Kaan ke infection mein sar dard kyun hota hai?',
      answer: 'Chronic Otitis Media mein sar dard ke kai reasons ho sakte hain – middle ear mein pressure aur fluid hone se nerve irritation hoti hai, Eustachian tube blockage se sinus-type pressure feel hota hai, ya tinnitus se related tension. Ye sab common aur manageable hain. Lekin agar sar dard bahut tez ho, stiff neck ho, bukhaar ho, ya sar ke peeche hissa dard kare – ye infection ke brain tak phailne ke warning signs hain – seedha hospital jaayein. Normal "bhaari sar" feel ordinary hai, lekin tez throbbing headache ke saath kaan dard – emergency hai.',
    },
    {
      _key: 'faq16',
      question: 'Baar baar antibiotics se Chronic Otitis Media theek kyun nahi hoti?',
      answer: 'Kyunki antibiotics sirf active bacterial infection kill karte hain – woh root cause nahi address karte. Agar Eustachian tube ka drainage problem hai (allergy, adenoids, anatomical reason se) – to antibiotics khatam hote hi wahi environment wapas aa jaata hai jisme infection phir ban jaata hai. Phir agar bacteria antibiotic-resistant ban gaye hoon to wo antibiotic bhi kaam nahi karta. Isliye jo patients "antibiotics se theek hota hai, do hafte baad wapas" keh rahe hain – unhe root cause ka ilaaj chahiye, baar baar antibiotics nahi. Homeopathy mein yahi gap fill hota hai – underlying susceptibility ko address kiya jaata hai.',
    },
    {
      _key: 'faq17',
      question: 'Kaan mein tela ya oil daalna chahiye – Chronic Otitis Media mein?',
      answer: 'Nahi – agar Chronic Otitis Media hai aur kaan ka parda theek nahi hua – koi bhi oil andar mat daalo. Yeh ek common galat notion hai. Sarson ka tel, coconut oil, lahsun tel – koi bhi. Yeh sab bacteria ke liye moist warm environment create karte hain – infection aur badhti hai. Bahar ki chamdi par (kaan ke entrance tak) agar khujli ho – tab doctor ki advice se koi antibiotic ear drop use ho sakta hai. Andar ka ilaaj sirf prescription se hona chahiye.',
    },
    {
      _key: 'faq18',
      question: 'Chronic Otitis Media mein naak ki davaai kyun di jaati hai?',
      answer: 'Kyunki naak aur kaan directly Eustachian tube se connected hain. Agar naak band hai – Eustachian tube ka drainage block hai – middle ear mein fluid build up hoga. Isliye COM ke treatment mein nasal decongestants, saline nasal wash, ya nasal allergy treatment alag se di jaati hai. Kuch cases mein naak ki medicine se hi kaan ka pressure normal ho jaata hai. Homeopathy mein yeh aur bhi integrated hota hai – ek medicine naak, kaan, aur immunity teeno pe simultaneously kaam karti hai.',
    },
    {
      _key: 'faq19',
      question: 'Kaan ke parde ka ched – kitne samay mein theek hota hai?',
      answer: 'Chhota perforation (ched) – agar infection control ho jaaye aur kaan sukha rakha jaaye – 2 se 6 hafte mein apne aap theek ho sakta hai. Medium size – 2 se 3 mahine tak lag sakte hain. Bada ched jo baar baar infection se repeatedly torn hota hai – wo aksar khud theek nahi hota, surgical repair (Myringoplasty) ki zaroorat padti hai. Homeopathy mein – Silicea, Calcarea Phosphorica jaisi medicines healing process support karti hain. Important: Yeh tab possible hai jab kaan bilkul sukha rakha jaaye – paani ka ek drop bhi ek hafte ki healing undo kar sakta hai.',
    },
    {
      _key: 'faq20',
      question: 'Ghar mein koi dhoomrapat (smoking) karta hai – kya kaan ke infection se relation hai?',
      answer: 'Haan – directly relation hai. Cigarette smoke (chahe seedha na pi ho – secondhand smoke bhi) mein hazaar se zyada chemicals hote hain jo Eustachian tube ki lining ko irritate aur damage karte hain. Eustachian tube ki cilia (barikiya baal jo fluid sweep karti hain) damage hoti hain – drainage ruk jaati hai – infection ka chance badhta hai. Studies consistently dikhate hain ki ghar mein smoker hone se bachchon mein ear infections ki frequency significantly zyada hoti hai. Agar ghar mein koi pita hai – ghar ke bahar ya enclosed area se door – kaan ke patient ke liye yeh ek concrete step hai jo fark dalta hai.',
    },
    {
      _key: 'faq21',
      question: 'Kya kaan bahar hone wala bacha school ja sakta hai?',
      answer: 'Agar sirf discharge hai aur bukhaar nahi, tez dard nahi – to school ja sakta hai generally. Lekin swimming ya water sports – strictly avoid. Agar dono kaano mein discharge ho aur sunai dena kaafi kam ho – to school mein padhai affect ho sakti hai, teacher ko inform karna chahiye. Agar bukhaar, sar dard, ya bahut tez dard ho – tab ghar pe rest aur doctor.',
    },
    {
      _key: 'faq22',
      question: 'Kaan ki saafai ke liye cotton bud (earbud) use karna chahiye?',
      answer: 'Nahi – cotton buds kaan ke liye helpful nahi hain, harmful hain. Yeh earwax ko andar push karte hain, kaan ka parda damage kar sakte hain – especially Chronic Otitis Media mein jahan parda pehle se weak ya perforated ho. Bahar ka paani ya discharge soft cloth se gently bahar tak saaf karo. Andar ki saafai kaan khud karta hai – koi external help nahi chahiye. "Clean ear = cotton bud" yeh myth hai – please avoid.',
    },
    {
      _key: 'faq23',
      question: 'Kaan mein bhaari pan aur sunai dena kam – kya yeh theek ho sakta hai?',
      answer: 'Haan – agar reason middle ear fluid ya infection hai (Otitis Media with Effusion / Glue Ear), to treatment se significant improvement possible hai. Fluid drain hone ke baad ya Eustachian tube theek kaam karne lagti hai to hearing wapas normal ho jaati hai aksar. Lekin agar yeh bhaari pan kaafi time se hai aur audiometry mein significant hearing loss show kare – tab ENT specialist se milna zaroori hai. Homeopathy mein Kali Mur, Pulsatilla aur Calcarea Carbonica ye teen medicines Glue Ear type COM mein commonly aur effectively use ki jaati hain – discharge ya visible pus ke bina bhi.',
    },
  ],

  sources: [
    'World Health Organization (WHO) – Chronic Suppurative Otitis Media: Burden of Illness and Management Options | 2004',
    'American Academy of Otolaryngology – Clinical Practice Guidelines: Tympanostomy Tubes | 2013 (Updated)',
    'NCBI / PubMed – Otitis Media: Global Burden, Treatment Approaches and Outcomes Review',
    'Jacobs J. et al. – Homeopathy in the treatment of Otitis Media in children – Pilot findings referenced in Pediatric complementary medicine literature',
    'Ministry of Health & Family Welfare, India – National Programme for Prevention and Control of Deafness (NPPCD) | Ongoing',
  ],

  doctorNote: 'Meri clinic mein jo parents aate hain "kaan bahar" wale bachon ke saath – unme se bahut se pehle sirf antibiotics karwa ke thak jaate hain. Jo mujhe consistently dikhta hai – jab hum naak ki allergy aur ear ko ek integrated case ki tarah treat karte hain, discharge ki frequency aur intensity dono mein 3-4 mahine mein meaningful fark aata hai. Kali Mur aur Calcarea Carbonica mere sabse zyada use hone wale medicines hain is type mein – but har case alag hota hai. — Dr. Shadab, Homeopedia.in',
}

async function seed() {
  const result = await client.createOrReplace(doc)
  console.log('✅ Chronic Otitis Media created/updated:', result._id)
  console.log('🌐 Live at: https://homeopedia.in/diseases/chronic-otitis-media')
}

seed().catch(console.error)
