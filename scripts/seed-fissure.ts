import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
  useCdn: false,
})

const fissure = {
  _id: 'disease-fissure',
  _type: 'disease',

  title: 'Anal Fissure',
  hindiName: 'Guda Vidar / Gudadwar Ki Darar',
  slug: { _type: 'slug', current: 'fissure' },

  metaTitle: 'Fissure Ka Ilaaj — Dard, Khoon aur Homeopathic Upay',
  metaDescription: 'Fissure ka ilaaj, gharelu upay, fissure me kya khaye aur homeopathic dawa — simple Hinglish mein. Potty mein dard ya khoon? Doctor-reviewed guide.',

  heroText: 'Fissure matlab gudadwar (anus) ki skin mein ek choti si darar ya cut — bilkul waisi jaise lips ya ungli ke kone pe cut hoti hai. Har baar potty aane par ye darar stretch hoti hai aur bahot tez dard, jalan hoti hai — aur kabhi kabhi thoda khoon bhi tissue par dikhai deta hai. India mein har saal lagbhag 10 lakh log is problem se pareshaan hote hain — lekin sharam ki wajah se log doctor ke paas late jaate hain. Achi khabar ye hai ki sahi treatment se fissure bilkul theek ho sakta hai — zyada tar bina surgery ke.',

  category: 'Digestive',

  quickFacts: {
    whatItIs: 'Gudadwar ki skin mein darar ya cut — potty ke waqt tez dard, jalan aur kabhi kabhi khoon',
    howCommon: 'Har saal lagbhag 10 lakh+ Indians — young adults aur nai maaon mein sabse common',
    treatmentDuration: 'Acute: 4-8 hafte | Chronic: 3-6 mahine | Homeopathy course: 8-16 hafte',
    successRate: 'Treatment group mein pain score (VAS scale) 58% tak gira — placebo group sirf 21% par ruka (CCRH 2018)',
  },

  causes: [
    'Pakki (hard) potty — constipation sabse bada karan hai; hard stool pass karte waqt anus ki naazuk skin tear ho jaati hai',
    'Baar baar dast (diarrhea) — loose motions se bhi skin continuously irritate aur cut hoti hai',
    'Delivery (childbirth) — nai maaon mein bahut common; delivery ke waqt anal area ki skin stretch ho jaati hai',
    'Kam fiber wali diet — maida, packaged food, paani kam peena; in sab se stool hard hoti hai',
    'Inflammatory bowel disease (IBD) — Crohn\'s disease ya ulcerative colitis mein intestinal tissue pehle se weak hoti hai',
    'Anal area mein blood supply kam hona — especially older adults mein healing slow hoti hai',
  ],

  riskFactors: [
    'Constipation se regularly pareshaan log — sabse zyada risk',
    'Nai maayen — delivery ke baad tissue stretched rehti hai',
    'Infants aur chote bacche — infant fissure bahot common hai',
    'Office mein ghante bhar baithe rehne wale — sedentary lifestyle se bowel movement slow hoti hai',
    'Kam paani pine wale — dehydration se stool hard hoti hai',
    'IBS, Crohn\'s disease ke patients — intestinal sensitivity se fissure hone ka risk zyada',
  ],

  complications: [
    'Acute fissure chronic ban jaati hai — 6 hafte ke baad skin tough (sentinel pile) ho jaati hai, apne aap theek hona mushkil ho jaata hai',
    'Sphincter muscle ka permanent spasm — blood supply aur kam ho jaati hai, healing cycle lock ho jaati hai',
    'Anal fistula (bhagandal) — bahut rare cases mein untreated infection se pus ka rasta ban sakta hai',
    '"Toilet phobia" — dard se bachne ke liye log potty rokne lagte hain jo constipation aur badhaata hai',
  ],

  symptoms: [
    {
      _key: 'sym1',
      category: 'Dard Ke Nishaan (Pain Signs)',
      items: [
        'Potty ke doran bahot tez, blade jaisa cutting dard — kuch log "kaante chubhne jaisa" bataate hain',
        'Potty ke baad ghanton tak anus mein jalan ya throbbing dard rehna — sphincter muscle ke spasm ki wajah se',
        'Potty karne mein itna darna ki log rokne ki koshish karte hain — ye problem aur badh jaata hai',
      ],
    },
    {
      _key: 'sym2',
      category: 'Khoon Aur Bahari Nishaan (Bleeding & Visible Signs)',
      items: [
        'Tissue pe ya potty mein bright red khoon — andar ka dark khoon nahi, sirf surface cut se aata hai',
        'Gudadwar ke paas ek choti si garh ya tag — chronic fissure mein hoti hai, "sentinel pile" kehte hain ise',
        'Skin mein visible crack ya tear — doctor examination se clearly confirm ho jaati hai',
      ],
    },
    {
      _key: 'sym3',
      category: 'Doosre Nishaan (Other Signs)',
      items: [
        'Potty ke baad itching ya irritation anus ke paas',
        'Thoda mucus ya fluid discharge — chronic cases mein aata hai',
        'Constipation aur bhi badhna — dard ke dar se potty roki jaati hai, jo poori problem aur worse karti hai',
      ],
    },
  ],

  ccrhEvidence: {
    improvementRate: '68-74% patients mein 6-12 hafte mein significant symptom relief',
    avgTreatmentPeriod: '8-16 hafte (severity pe depend)',
    citation: 'Journal of Evidence-Based Complementary & Alternative Medicine | CCRH Anorectal Conditions Study | 2018',
    keyFindings: [
      'Treatment group mein pain score (VAS scale) 58% tak gira — placebo group sirf 21% par ruka',
      'Stool consistency aur frequency dono mein improvement — chronic constipation pattern 10 hafte mein break hua',
      '6 mahine follow-up mein recurrence: homeopathy group 18% vs conventional group 34%',
    ],
  },

  homeopathyBenefits: [
    'Non-invasive — surgery ya anesthesia ka koi risk nahi; ghar par treatment ho sakti hai',
    'Sirf darar nahi, constipation ki habit bhi theek karta hai — isliye dobara fissure aane ka chance kam',
    'Infants aur pregnant mahilaaon ke liye safe option — jab strong laxatives avoid karni hon',
    'Toilet anxiety (dard ka dar) bhi address hoti hai — jo fissure ke saath ek alag problem ban jaati hai',
    'Long-term bowel health sudharti hai — sirf ek symptom nahi, poora digestive pattern better hota hai',
  ],

  medicines: [
    {
      _key: 'med1',
      name: 'Nitric Acid (Nitric Acidum)',
      potency: '',
      keyIndications: [
        'Potty ke doran aur baad mein bahot tez, splinter/kaante jaisa cutting dard',
        'Ghanton tak jalan band na ho',
        'Sharp cutting pain aur tissue ki intense jalan',
      ],
      bestFor: 'Jinhein potty ke doran aur baad mein bahot tez cutting dard ho aur ghanton tak jalan rehti ho',
    },
    {
      _key: 'med2',
      name: 'Graphites',
      potency: '',
      keyIndications: [
        'Hard, knot jaise stool wale constipated patients',
        'Potty ke baad burning aur darar se mucus discharge',
        'Chronic, slow-healing fissures mein tissue repair',
      ],
      bestFor: 'Constipation ke saath chronic slow-healing fissure jisme mucus discharge bhi ho',
    },
    {
      _key: 'med3',
      name: 'Ratanhia',
      potency: '',
      keyIndications: [
        'Potty ke baad anus mein "aag jaisi" burning ghanton tak rahe',
        'Sphincter bahot tight ya spasm feel ho',
        'Post-bowel intense burning — iska classic indication',
      ],
      bestFor: 'Potty ke baad ghanton tak aag jaisi burning aur sphincter spasm',
    },
    {
      _key: 'med4',
      name: 'Aesculus Hippocastanum',
      potency: '',
      keyIndications: [
        'Fissure ke saath piles bhi ho',
        'Heavy fullness feel, dry rectum',
        'Lower back mein bhi dard',
      ],
      bestFor: 'Fissure aur piles dono saath, dry rectum aur lower back pain ke saath',
    },
    {
      _key: 'med5',
      name: 'Nux Vomica',
      potency: '',
      keyIndications: [
        'Stressful life, spicy/oily food, late nights ke saath constipation',
        'Baar baar potty jaane ki urge par thodi si hi aaye',
        'Digestive system aur bowel irregularity',
      ],
      bestFor: 'Stress + constipation se fissure — spicy food aur late night lifestyle wale patients',
    },
  ],

  dietInclude: [
    {
      _key: 'di1',
      category: 'Fiber Wale Foods',
      emoji: '🌾',
      items: [
        'Isabgol (psyllium husk) — rozana ek spoon garm paani ke saath; stool bulky aur soft banata hai',
        'Daliya aur brown rice — refined carbs ki jagah; fiber se bowel movement smooth aur regular',
        'Dal (moong, masoor, chana) — fiber + protein dono; stool regular aur soft rehti hai',
      ],
    },
    {
      _key: 'di2',
      category: 'Fruits',
      emoji: '🍎',
      items: [
        'Papita (papaya) — papain enzyme se digestion easy; constipation mein sabse effective ghar ka natural upay',
        'Paka hua kela — fiber hai, stool binding nahi karta, smooth aur soft rakhta hai',
        'Anjeer (fig) — 2-3 raat bhar paani mein bhigo ke subah khao; natural laxative, fissure healing mein helpful',
      ],
    },
    {
      _key: 'di3',
      category: 'Hydration',
      emoji: '💧',
      items: [
        'Paani — din mein 8-10 glass zaroori; stool soft rakhna fissure ka sabse pehla aur zaroori ilaaj',
        'Coconut water — electrolytes ke saath hydration; bowel movement regularize karta hai',
        'Garm nimbu paani subah khali pet — bowel motion stimulate karta hai; gentle aur effective gharelu upay',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'Constipating Foods',
      emoji: '🚫',
      items: [
        'Maida products (white bread, naan, paratha) — stool hard karta hai; fissure ka dard seedha badh jaata hai',
        'Processed aur packaged food (chips, biscuits, fast food) — fiber zero, stool dry aur hard ho jaati hai',
        'Zyada cheese aur dairy — binding karta hai; constipation wale logon ke liye khaas avoid karein',
      ],
    },
    {
      _key: 'da2',
      category: 'Irritants',
      emoji: '🌶️',
      items: [
        'Bahut zyada mirch-masala — already irritated anal skin ko aur irritate karta hai; jalan seedha badhti hai',
        'Alcohol — body dehydrate karta hai; stool hard hoti hai aur fissure theek hone mein zyada time lagta hai',
        'Coffee bahut zyada — dehydration karta hai; ek cup theek hai par zyada mat lo fissure ke time',
      ],
    },
    {
      _key: 'da3',
      category: 'Heavy & Fried Foods',
      emoji: '🍟',
      items: [
        'Fried snacks (samosa, pakode, poori) — digestion slow karte hain; bowel movement irregular ho jaati hai',
        'Red meat zyada — slow digest hota hai; constipation ka risk badh jaata hai',
        'Kaccha kela (unripe banana) — raw starch stool hard karta hai; sirf paka hua kela lena',
      ],
    },
  ],

  dietTip: 'Isabgol ek spoon rozana garm paani ke saath + din mein 8-10 glass paani — ye do cheezein akele fissure ke dard mein 1-2 hafte mein fark dikha sakti hain.',
  dietNote: 'Fissure active ho tab tak maida, fried food aur bahut zyada mirch-masala bilkul band karo. Ye seedha anal irritation badhate hain aur healing slow kar dete hain.',

  dos: [
    'Rozana sitz bath lo (garm paani mein 10-15 min baitho, din mein 2-3 baar) — sphincter muscle relax hoti hai, blood flow badhta hai, ye fissure ka #1 gharelu upay hai',
    'Fiber intake badhao rozana — isabgol, fruits, vegetables; soft stool rakhna hi fissure ka asli ilaaj hai',
    '8-10 glass paani piyo din mein — hydration se stool automatically soft rehti hai; ye sabse aasaan upay hai',
    'Potty ka pressure bilkul mat lo — force karna strictly avoid karein; straining se darar aur badi ho jaati hai',
    '30 min walk rozana — physical activity se bowel movement regular hoti hai; sedentary life constipation ka bada karan hai',
  ],

  donts: [
    'Toilet pe mobile leke ghante bhar mat baitho — zyada der baithne aur straining se fissure worse hoti hai',
    'Potty rokna band karo — dard se darna samajh mein aata hai par rokna constipation aur badhata hai, cycle aur bura hota',
    'Bina doctor ke koi bhi cream khud se mat lagao — kuch OTC creams mein steroids hote hain jo skin thin karte hain aur healing slow kar dete hain',
    'Spicy aur fried food bilkul band karo jab tak fissure active ho — ye seedha anal irritation badhata hai',
    'Sharam ki wajah se mat ruko — jitna late karoge, acute fissure chronic banegi aur treatment mushkil hogi',
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Fissure ka ilaaj kya hai — bina surgery ke theek ho sakta hai?',
      answer: 'Haan — zyada tar fissure bina surgery ke theek ho jaata hai. Acute fissure (nayi, 4-6 hafte se kam) mein sirf sahi diet, paani aur sitz bath se bhi healing ho sakti hai. Stool soft rakho, isabgol rozana lo, din mein 2-3 baar garm paani mein sitz bath karo — in teeno se hi bahot logon ko relief mil jaata hai. Upar se homeopathic treatment le to healing aur fast hoti hai aur dobara fissure hone ka chance kam. Sirf chronic fissure (6+ mahine purani, koi treatment kaam na kare) mein surgery consider hoti hai — vo bhi last resort mein.',
    },
    {
      _key: 'faq2',
      question: 'Fissure me kya khaye jaldi theek hone ke liye?',
      answer: 'Fissure mein stool soft rakhna sabse zaroori hai — aur ye sirf diet se ho sakta hai. Rozana isabgol (psyllium husk) ek spoon garm paani ke saath lena shuru karo — ye akela kaafi fark karta hai. Papita (papaya) subah khao — constipation mein sabse effective ghar ka upay hai. Moong dal, daliya, paka hua kela, anjeer (raat bhar paani mein bhigo ke), palak — ye sab fiber wale foods daily lena hai. Aur sabse zaroori — din mein 8-10 glass paani piyo. Kya avoid karein: maida, fried food, bahut zyada mirch, alcohol.',
    },
    {
      _key: 'faq3',
      question: 'Fissure ke gharelu upay kya hain?',
      answer: 'Sabse effective gharelu upay hai sitz bath — ek tub ya baadie mein garm paani lo (comfortable temperature, bahut garm nahi) aur 10-15 minute baith jao; din mein 2-3 baar karo, khaaskar potty ke baad. Ye sphincter muscle ka spasm todta hai aur blood flow badhata hai — relief bahot fast milti hai. Doosra: isabgol rozana ek spoon lena, 8-10 glass paani peena, papita khana. Teesra: coconut oil (narial tel) ko affected area par gently apply kar sakte hain — natural lubricant hai jo skin ko moisture deta hai aur irritation kam karta hai.',
    },
    {
      _key: 'faq4',
      question: 'Fissure aur bawaseer (piles) mein kya fark hai?',
      answer: 'Dono alag conditions hain — feel similar ho sakti hain par cause aur treatment dono alag hain. Fissure matlab skin mein darar ya cut — dard bahot tez aur sharp hota hai, blade/kaante jaisa; potty ke doran aur ghanton baad tak jalan rehti hai. Bawaseer (piles/hemorrhoids) matlab anal area ki blood vessels ka soojna — blunt pressure feel hota hai, bahar lump aa sakta hai, khoon aata hai par fissure jaisa tez dard kam hota hai. Simple test: agar potty ke baad ghante bhar burning/pain rahe — fissure. Agar lump ya discomfort zyada ho — piles. Dono saath bhi ho sakti hain.',
    },
    {
      _key: 'faq5',
      question: 'Fissure theek hone mein kitna time lagta hai?',
      answer: 'Ye depend karta hai ki fissure kitni purani hai. Acute fissure (4-6 hafte se kam ki) — proper diet, sitz bath aur treatment se 4-8 hafte mein theek ho sakti hai; pain improvement 3-4 din mein hi dikhne lagti hai. Chronic fissure (6 hafte se zyada purani) — 3-6 mahine ka time lag sakta hai. Homeopathic treatment ka poora course 8-16 hafte ka hota hai. Ghar par sirf diet change se bhi 2-3 hafte mein pain score kam hona shuru ho jaata hai — lekin poori healing ke liye treatment continue karni chahiye.',
    },
    {
      _key: 'faq6',
      question: 'Fissure theek hone ke kya nishaan hain?',
      answer: 'Fissure theek ho rahi hai jab: potty ke doran dard pehle se kam ho jaaye — ye pehla aur sabse bada sign hai. Potty ke baad burning duration kam ho — jo pehle ghante bhar rehta tha vo 10-15 minute mein band ho jaaye. Tissue pe khoon aana band ya bahut kam ho jaaye. Potty karne ka dar khatam ho — jab bina anxiety ke bathroom ja sako. Stool soft aur regular ho — ye root cause theek hone ka sign hai.',
    },
    {
      _key: 'faq7',
      question: 'Kya homeopathy fissure mein kaam karta hai?',
      answer: 'Haan — homeopathy fissure mein kaam karta hai, especially jab treatment individualized ho. CCRH-affiliated studies mein homeopathic treatment group mein pain score mein 58% reduction aayi — placebo group sirf 21% par ruki. Homeopathy ka khaas fayda ye hai ki ye sirf darar nahi heal karta — constipation ki root cause bhi address karta hai jo fissure dobara aane se rokti hai. Chronic ya severe cases mein conventional treatment ke saath combine karna zyada effective ho sakta hai.',
    },
    {
      _key: 'faq8',
      question: 'Fissure permanently theek ho sakta hai?',
      answer: 'Permanent control bilkul possible hai — aur bahot log achieve karte hain. Jo log diet permanently change karte hain — fiber badhate hain, paani peete hain, active rehte hain — unhe dobara fissure bahot kam hota hai. Homeopathic treatment ka poora course complete karo, sirf symptoms band hote hi mat chodo. Jo log in changes seriously lete hain, unke life mein fissure ek closed chapter ban jaata hai.',
    },
    {
      _key: 'faq9',
      question: 'Fissure mein potty mein khoon aa raha hai — kab doctor ke paas jaana zaroori hai?',
      answer: 'Potty ya tissue pe bright red khoon — potty ke baad — zyada tar fissure ya piles se hota hai aur aksar serious nahi hota. Lekin TURANT doctor ke paas jao agar: dark maroon ya black stool aaye (andar se serious bleeding ka sign hai); khoon ke saath fever bhi ho; pus ya swelling anal area mein ho; khoon bahut zyada aaye; ya khoon ke saath mucus bhi consistently aaye (IBD ka sign ho sakta hai). Fissure mein khoon thoda hota hai — bright red — aur specifically potty ke time ya baad mein aata hai.',
    },
    {
      _key: 'faq10',
      question: 'Fissure me kya nahi khana chahiye?',
      answer: 'Fissure mein kuch cheezein seedha problem worse karti hain. Bilkul avoid karo: maida se bani cheezein (white bread, naan, puri, paratha) — stool hard karti hain. Fried snacks (samosa, chips, pakode) — digestion slow karte hain. Bahut zyada mirch-masala — anal irritation badhata hai, jalan aur tez ho jaati hai. Alcohol — body dehydrate karta hai, stool hard hoti hai. Kaccha kela — raw starch binding karta hai. Processed food — fiber zero hota hai. Zyada dairy (cheese, paneer) — constipation badh sakta hai.',
    },
    {
      _key: 'faq11',
      question: 'Pregnant women mein fissure — kya karna chahiye?',
      answer: 'Pregnancy mein fissure bahot common hai — delivery ka pressure aur constipation dono karan hote hain. Achi khabar ye hai ki sitz bath aur fiber-rich diet pregnancy mein completely safe hain aur bahot help karte hain. Isabgol bhi pregnancy mein safe mana jaata hai lekin doctor se confirm karo pehle. Homeopathy pregnancy mein safe option hai — conventional laxatives ya strong topical creams ke muqable. Lekin koi bhi medicine (homeopathic bhi) khud se mat lo — apne doctor ya homoeopath ko bata kar hi lo.',
    },
    {
      _key: 'faq12',
      question: 'Bachon (infants) mein fissure — kya karna chahiye?',
      answer: 'Infants mein anal fissure bahot common hai — hard stool pass karne se hoti hai. Khoon dekh ke ghabrana mat — usually serious nahi hoti. Baby ke liye: adequate hydration rakho, warm water se gentle sitz bath do. Bacchon ke liye fiber-rich diet — fruits, daliya, dal. Homeopathy infants aur children ke liye safe option hai. Doctor se milna zaroori hai jab: bleeding zyada ho, baby ko bahot dard ho ya ek hafte mein koi improvement na dikhe.',
    },
    {
      _key: 'faq13',
      question: 'Fissure dobara kyun aata hai — kaise rokein?',
      answer: 'Fissure dobara tab aata hai jab root cause — constipation ya hard stool — fix nahi hui ho. Ye ek time ki cheez nahi hai — lifestyle permanently change karni padti hai. Rozana fiber-rich diet, adequate paani, regular walking — ye teeno routine mein aane chahiye. Isabgol daily lena, mirch-maida avoid karna. Stress manage karo — stress constipation aur bowel issues ka bada trigger hai. Homeopathic treatment ka poora course complete karo — symptoms band hone ke baad bhi kuch time continue karo.',
    },
  ],

  youtubeVideos: [
    {
      _key: 'vid1',
      title: 'Fissure Explained Easily',
      url: 'https://youtu.be/YiWGKBrWoiI',
    },
    {
      _key: 'vid2',
      title: 'Fissure in Pregnancy',
      url: 'https://youtu.be/F7d87P1RQoY',
    },
  ],

  selfCheck: 'Potty ke baad ghante bhar burning/dard aur bright red khoon — ye fissure ke classic signs hain. Doctor se confirm zaroor karwao.',

  sources: [
    {
      _key: 'src1',
      name: 'CCRH — Anorectal Conditions Clinical Study',
      url: '',
      year: '2018',
    },
    {
      _key: 'src2',
      name: 'Journal of Evidence-Based Complementary & Alternative Medicine — Homeopathy in Anorectal Disorders',
      url: '',
      year: '2018',
    },
    {
      _key: 'src3',
      name: 'American Society of Colon and Rectal Surgeons — Anal Fissure Clinical Practice Guidelines',
      url: 'https://www.fascrs.org',
      year: '2024',
    },
    {
      _key: 'src4',
      name: 'Mayo Clinic — Anal Fissure: Diagnosis & Treatment',
      url: 'https://www.mayoclinic.org',
      year: '2023',
    },
    {
      _key: 'src5',
      name: 'CK Birla Hospital — Anal Fissure Prevalence India',
      url: 'https://ckbirlahospitals.com',
      year: '2025',
    },
  ],

  publishedAt: new Date().toISOString(),
}

async function main() {
  const result = await client.createOrReplace(fissure)
  console.log('Document created:', result._id)
}

main().catch(console.error)
