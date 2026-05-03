import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-recurrent-cold',
  _type: 'disease',
  title: 'Recurrent Cold / Frequent Infections',
  hindiName: 'Baar Baar Sardi-Zukam / Weak Immunity',
  slug: { _type: 'slug', current: 'recurrent-cold' },
  category: 'Respiratory',
  publishedAt: '2026-05-02T00:00:00.000Z',
  metaTitle: 'Recurrent Cold Treatment | Immunity Boost | Homeopedia',
  metaDescription: 'Baar baar sardi-zukam ka homeopathic treatment, causes, immunity boost diet aur prevention tips — verified info, doctor-reviewed.',
  heroText: 'Baar baar sardi-zukam — yaani ek saal mein 6 se zyada baar naak behna, gala kharaab hona, bukhar aana — akele sirf mausam ka kasar nahi hai. Ye body ki immune system (rog pratirodha shakti) ki weakness ka signal hai. Jab immunity weak hoti hai, toh chhote se virus ya bacteria bhi body ko baar baar infect kar lete hain. Children mein yeh thoda zyada normal hai — lekin adults mein baar baar hona aur jaldi theek na hona, dono warning signs hain. Homeopathy is problem ko ek alag nazar se dekhta hai: sirf agle infection ko treat nahi karta, balki immunity ki underlying weakness ko address karta hai.',

  quickFacts: {
    whatItIs: 'Saal mein 5-6+ baar respiratory infections = immune system ki weakness; adults ke liye 2-3 baar normal, usse zyada evaluation chahiye',
    howCommon: 'Acute respiratory infections India mein healthcare visits ka 40%+ cause hain; recurrent pattern approximately 15-20% adults mein',
    treatmentDuration: 'Constitutional homeopathic treatment: 3-6 months meaningful improvement; 6-12 months sustained immunity change',
  },

  causes: [
    'Weak/dysregulated immune system — body ka defense mechanism usse kaam nahi karta jaisa karna chahiye',
    'Nutritional deficiencies — Vitamin C, D, Zinc, Iron ki kami bohot common cause hai India mein',
    'Chronic stress aur poor sleep — cortisol badhta hai, immunity girti hai',
    'Environmental exposure — polluted air, dust, mold, crowded schools/offices mein zyada risk',
    'Antibiotic overuse — gut microbiome disturb hota hai jisse natural immunity weak padti hai',
    'Uncontrolled diabetes, thyroid ya autoimmune conditions — secondary immune weakness create karte hain',
    'Allergic conditions (allergic rhinitis) — naak/gala baar baar sensitive rehta hai, infections easily settle hote hain',
  ],

  riskFactors: [
    'Chhote bacche (2-8 saal) — immune system still developing',
    'School ya daycare mein jaane wale bachche — close contact mein zyada viral exposure',
    'Smokers aur jinke ghar mein smoking hoti hai',
    'Air pollution wale sheher mein rehne wale — Delhi, Mumbai',
    'Jo log bahut zyada antibiotics le chuke hain — gut flora disturbed',
    'Nutritional deficiency wale adults — vegetarians with poor diet',
    'Diabetics aur thyroid patients — secondary immune suppression',
    'High stress jobs wale adults — IT, healthcare workers',
  ],

  complications: [
    'Acute infections chronic ban jaati hain — chronic sinusitis, chronic tonsillitis, chronic bronchitis',
    'Bacchon mein hearing loss — repeated ear infections se',
    'Antibiotic resistance — baar baar antibiotics lene se bacteria resistant ho jaate hain, future treatment mushkil',
    'Quality of life badly affected — school/office miss karna, weakness, fatigue constant rehna',
    'Secondary complications — untreated recurrent strep throat rheumatic fever ya kidney damage cause kar sakti hai',
  ],

  types: [
    {
      _key: 'type1',
      name: 'Recurrent Upper Respiratory Infections (URTI)',
      description: 'Sabse common type. Baar baar naak behna, sinus bhar jaana, gala kharaab hona, khansi. Adults mein saal mein 4+ baar aana problematic hai. Ye immune system ki mucosal weakness ko reflect karta hai.',
    },
    {
      _key: 'type2',
      name: 'Recurrent Lower Respiratory Infections',
      description: 'Baar baar chest infection, bronchitis, ya pneumonia. Zyada serious — lungs involve hote hain. Timely evaluation zaroori hai. Ye upper respiratory recurrence se alag aur zyada concerning hai.',
    },
    {
      _key: 'type3',
      name: 'Recurrent Ear Infections (Otitis Media)',
      description: 'Bacchon mein bohot common — baar baar kaan dard, pus, hearing problems. Repeatedly hone par ENT evaluation important hai. Homeopathy is type mein surgical intervention avoid karne mein helpful ho sakti hai.',
    },
    {
      _key: 'type4',
      name: 'Recurrent Throat Infections / Tonsillitis',
      description: 'Baar baar gale mein infection, tonsils soojna. School-age bacchon mein common. Homeopathy tonsil surgery se bachne mein helpful ho sakti hai — Baryta Carbonica aur Calcarea Carbonica is type ke liye specific medicines hain.',
    },
    {
      _key: 'type5',
      name: 'Recurrent Skin & Gut Infections',
      description: 'Immunity weak hone par fungal infections, diarrhea, aur GI infections bhi baar baar hone lagte hain. Ye systemic immune weakness ka broader sign hai.',
    },
    {
      _key: 'type6',
      name: 'Recurrent Fever of Unknown Origin',
      description: 'Baar baar bukhar aana, koi clear source nahi. Detailed evaluation zaroori — underlying cause dhundna important. Kuch cases mein rare immune deficiency ya hidden infection hoti hai.',
    },
  ],

  medicines: [
    {
      _key: 'med1',
      name: 'Tuberculinum',
      bestFor: 'Jo log baar baar chest aur respiratory infections se thak gaye hain — thin, always tired, sardi jaldi lagti hai.',
      keyIndications: [
        'Chronic respiratory weakness — recurrent chest, throat, sinus infections ka deep pattern',
        'Thin, restless, easily chilled patients — hamesha thake hue, weight nahi badhta',
        'Immunity ko deep level par rebalance karna — infections ki frequency todna',
      ],
    },
    {
      _key: 'med2',
      name: 'Arsenicum Album',
      bestFor: 'Jinhe baar baar naak behna, sneezing, watery discharge hoti hai — anxiety bhi hoti hai, restless rehte hain.',
      keyIndications: [
        'Mucosal immunity strengthen karna — naak aur upper respiratory tract mein burning discharges',
        'Anxiety + restlessness + burning sensations — hallmark presentation',
        'Allergic aur infectious respiratory conditions dono mein effective',
      ],
    },
    {
      _key: 'med3',
      name: 'Calcarea Carbonica',
      bestFor: 'Mote, thande patient — bacche ya adult — jinhein sardi jaldi lagti hai, sweat zyada aata hai, infections slow recovery wale hote hain.',
      keyIndications: [
        'Sluggish immunity — fair, chilly, sweating (especially head), slow recovery wale patients',
        'Children with repeated ear and throat infections — tonsils bhi baar baar soonje',
        'Deep-acting constitutional medicine jo slow, phlegmatic constitutions mein system activate karta hai',
      ],
    },
    {
      _key: 'med4',
      name: 'Baryta Carbonica',
      bestFor: 'Bacche jinhein baar baar tonsil infection hoti hai, mentally bhi thoda slow development — shy, hesitant.',
      keyIndications: [
        'Tonsils aur lymphatic system ki chronic weakness — surgical intervention avoid karne mein madadgar',
        'Shy, timid, slow-to-develop children — adenoid aur tonsil problems',
        'Recurrent tonsillitis ka deep constitutional tendency address karna',
      ],
    },
    {
      _key: 'med5',
      name: 'Natrum Muriaticum',
      bestFor: 'Jo log emotionally suppress karte hain — grief ya stress ke baad immunity weak ho gayi ho, baar baar cold sores ya naak ka infection.',
      keyIndications: [
        'Stress-linked immune weakness — emotional suppression ke baad recurrent infections',
        'Post-viral weakness mein bhi effective — grief, loss, disappointment history',
        'Reserved, salt-craving patients — cold sores (herpes) tendency bhi',
      ],
    },
  ],

  dietInclude: [
    {
      _key: 'inc1',
      category: 'Immunity Superfoods',
      emoji: '🛡️',
      items: [
        'Amla (Indian gooseberry) — India ka sabse powerful Vitamin C source, immunity ke liye number one superfood',
        'Tulsi — natural antiviral, ek patte ka kadha roz peeyen',
        'Lahsun (garlic) — allicin compound natural antibiotic jaise kaam karta hai',
        'Haldi (turmeric) — curcumin ek natural immune modulator hai, har din use karein',
        'Adrak (ginger) — antimicrobial + anti-inflammatory, chai ya kadha mein daily lein',
        'Garm kadha (tulsi + ginger + black pepper + honey) — preventive drink especially monsoon aur winter mein',
      ],
    },
    {
      _key: 'inc2',
      category: 'Zinc, Vitamin C & Gut Health',
      emoji: '💪',
      items: [
        'Nimbu (lemon) — roz garam paani mein nimbu, mucosal immunity strong karta hai',
        'Guava — ek guava mein orange se 4 guna Vitamin C, readily available aur sasta',
        'Til (sesame seeds) — zinc ka achha plant source, immunity cells banane ke liye zaroori',
        'Pumpkin seeds (kaddu ke beej) — zinc powerhouse, immunity ke liye specifically helpful',
        'Moong dal / chana dal — iron aur zinc dono, easy to digest',
        'Homemade dahi (curd) — live cultures gut microbiome support karte hain, immunity naturally improve hoti hai',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'avd1',
      category: 'Immune Suppressors',
      emoji: '🚫',
      items: [
        'Refined sugar — white blood cells ki activity 2-5 ghante ke liye significantly reduce hoti hai sugar lene ke baad',
        'Maida products (bread, biscuits, noodles) — inflammation badhate hain, gut microbiome damage karte hain',
        'Cold drinks / packaged juices — sugar + preservatives, immunity ka double dushman',
        'Packaged chips, namkeen — trans fats immunity ko suppress karte hain',
        'Alcohol — immune cells ke function ko directly impair karta hai, recovery slow hoti hai',
      ],
    },
    {
      _key: 'avd2',
      category: 'Mucus & Inflammation Triggers',
      emoji: '⚠️',
      items: [
        'Ice cream, cold water, fridge se nikala thanda khaana — especially rainy/winter season mein ya already beemar hone par',
        'Dairy in excess — kuch logon mein mucus production badhata hai baar baar naak infection mein',
        'Bakery items with artificial colors/preservatives — allergic load badhate hain',
      ],
    },
  ],

  seasonalCare: {
    summer: 'Garmi (March - June) — Hydration sabse important — dehydration immunity ko kamzor karti hai. AC se bahar ki garmi mein sudden aana-jaana avoid karein — temperature shock immunity stress create karta hai. Nimbu pani, coconut water, aam panna — natural electrolytes. Cooler ke filters clean rakhein — mold growth site, respiratory infections ka common cause.',
    monsoon: 'Monsoon (July - September) — Sabse Risky Season. Bahar ka khaana bilkul band karein — street food infection risk highest. Paani ubaal ke piyein ya filtered water use karein. Geele kapde jaldi change karein. Ghar mein tulsi-ginger kadha roz — preventive dose. Bacchon ke shoes/socks baar baar check karein. Homeopathic preventive dose (doctor se puchh ke) monsoon se pehle le sakte hain.',
    winter: 'Sardi (November - February) — Vitamin D supplement zaroor lein — sardi mein sunlight kam, deficiency immunity girata hai. Garm khaana hamesha — cold food avoid karein. Raat ko muh band karke soyein — naak se breathing warm air le. Chest aur pair warm rakhein — ye body parts infection ke liye most vulnerable hain cold mein. Sarson ka tel ya coconut oil naak mein lagana (nasya) — traditional protection against dry air infections.',
  },

  dos: [
    'Roz 7-8 ghante ki neend zaroor lein — sleep deprivation immunity ko sabse fast girata hai; neend mein hi cytokines (infection-fighting proteins) bante hain',
    'Din mein 8-10 glass paani piyein — mucosal surfaces hydrated rehti hain aur virus/bacteria easily stuck nahi hote',
    'Roz 30 min walk ya exercise karein — moderate exercise NK cells (natural killer cells) badhati hai',
    'Stress management seriously lein — pranayam, meditation, ya koi bhi relaxation technique; cortisol immunity girata hai',
    'Hath baar baar dhona — 80% respiratory infections haath se spread hoti hain; sabse simple prevention',
    'Ghar mein fresh air aur sunlight — ventilation zaroori hai, closed stuffy rooms mein virus concentration zyada hota hai',
    'Vitamin D levels check kara lein — India mein 70%+ log deficient hain; deficiency = weak immunity',
    'Regular dental hygiene — oral bacteria respiratory infections mein directly contribute kar sakti hain',
  ],

  donts: [
    'Har baar sardi mein khud se antibiotic mat lein — resistance badhti hai, gut flora toot jaata hai, aur next infection aur bura ho sakta hai',
    'Thande paani se nhaana ya ice cold drinks mat piyein agar pehle se weak feel ho — mucosal immunity aur temporarily weak hoti hai',
    'Thakaan mein exercise zyada mat karein — overexertion cortisol spike karta hai aur immunity suppress hoti hai',
    'Beemar logon ke saath close contact mat rakho — haath dhao baad mein, mask use karein crowded places mein',
    'Neend sacrifice mat karo work ke liye — even 1-2 ghante kam neend immune response significantly reduce karta hai',
    'Dhoop mein nikalna band mat karo — Vitamin D ke liye subah ki 20 min dhoop zaroori hai',
    'Self-medication se antibiotics mat lete raho — doctor se milein aur proper diagnosis karein',
  ],

  ccrhEvidence: {
    improvementRate: '67%',
    avgTreatmentPeriod: '3-6 mahine constitutional treatment',
    citation: 'CCRH — Annual Research Reports 2014-2019 | New Delhi | ccrhindia.nic.in',
    keyFindings: [
      'Recurrent respiratory infection patients mein homeopathic constitutional treatment group mein significantly kam infections reported',
      'Antibiotic use bhi treatment group mein approximately 45% kam hua follow-up period mein',
      'Children mein tonsillectomy avoid karne mein Baryta Carbonica aur Calcarea Carbonica clinically effective rahi',
    ],
  },

  homeopathyBenefits: [
    'Sirf agle infection nahi, immunity ki underlying weakness address hoti hai — frequency aur severity dono kam hoti hai',
    'Antibiotic dependency kam hoti hai — gut flora bachta hai, resistance nahi badhti',
    'Bacchon mein tonsil surgery aur ear tubes avoid karne mein helpful — conservative approach',
    'Stress-immune connection bhi address hota hai — Natrum Mur, Tuberculinum jaise medicines physical aur emotional dono treat karti hain',
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Baar baar sardi-zukam kyun hoti hai — koi serious bimari toh nahi hai?',
      answer: 'Baar baar sardi-zukam hona mostly weak immune system ka sign hai — koi ek serious bimari ka nahi. Ek healthy adult ko saal mein 2-3 baar normal cold ho sakti hai. Agar 5-6+ baar ho rahi hai aur har baar 1-2 hafte lagte hain theek hone mein, toh yeh immune system ki weakness hai. Common reasons: Vitamin D ya zinc ki kami, chronic stress, poor sleep, ya antibiotic overuse se gut flora disturbed hona. Kuch rare cases mein diabetes ya thyroid bhi immune weakness create karte hain — isliye ek baar doctor se thorough checkup kara lena accha hai.',
    },
    {
      _key: 'faq2',
      question: 'Bacchon ko baar baar sardi kyun hoti hai — kya yeh normal hai?',
      answer: 'Chhote bacchon (2-6 saal) ko saal mein 6-8 baar cold hona medically normal maana jaata hai — unka immune system abhi develop ho raha hai aur school/daycare mein exposure zyada hota hai. Lekin agar har baar 2+ hafte lag rahe hain theek hone mein, chest mein infections aa rahe hain, weight nahi badh raha, ya baccha hamesha thaka hua rehta hai — toh yeh beyond normal hai aur evaluation zaroori hai. Homeopathy bacchon ki recurrent infections mein especially useful hai — Calcarea Carbonica ya Baryta Carbonica jaise constitutional medicines bachche ki immune system ko strengthen karte hain.',
    },
    {
      _key: 'faq3',
      question: 'Weak immunity ke lakshan kya hote hain — kaise pata chalega?',
      answer: 'Weak immunity ke clear signs hain: saal mein 5+ baar respiratory infections, infections normal log se zyada time mein theek hon, chhoti cheez se bhi fever aa jaaye, wounds ya cuts slow heal hoon, hamesha thakaan aur energy low rehna, digestion problems — baar baar loose motions ya bloating, baar baar mouth ulcers ya cold sores. Agar in mein se 3-4 aap mein hain, toh immunity seriously compromised hai. Blood tests (CBC, Vitamin D, Zinc levels, IgE) se picture clear ho sakti hai.',
    },
    {
      _key: 'faq4',
      question: 'Immunity boost karne ka sabse fast tarika kya hai?',
      answer: 'Yeh changes 4-6 hafte mein noticeable difference laate hain: Vitamin D supplement shuru karein (doctor-guided dose) — India mein deficiency bohot common hai, yeh akela step bahut fark laata hai. Roz raat ko 7-8 ghante ki neend — sirf yeh ek cheez immune cells production 40% badha sakti hai. Roz garam nimbu pani ya tulsi-ginger kadha — mucosal immunity support. Dahi (curd) roz — gut immunity ke liye. Sugar drastically kam karein. Homeopathic constitutional treatment ke saath yeh lifestyle changes combination mein 3-4 months mein sustained immunity improvement dete hain.',
    },
    {
      _key: 'faq5',
      question: 'Kya homeopathy se immunity genuinely badh sakti hai ya sirf marketing hai?',
      answer: 'Yeh ek fair sawaal hai. Homeopathy ki immune-modulating ability ke liye clinical evidence grow ho raha hai. CCRH studies mein recurrent respiratory infection patients mein homeopathic constitutional treatment group ne — placebo group ke comparison mein — significantly kam infections report kiye follow-up period mein. Antibiotic use bhi treatment group mein approximate 45% kam hua. Homeopathy ka approach "immunity boost" se zyada "immune system ko rebalance karna" hai — jo overdrive (allergy) ya underdrive (frequent infections) dono situations mein kaam karta hai.',
    },
    {
      _key: 'faq6',
      question: 'Baar baar sardi mein homeopathic medicine kaun si leni chahiye?',
      answer: 'Recurrent cold ke liye ek single "best medicine" nahi hoti — homeopathy mein medicine patient ke complete profile ke hisaab se decide hoti hai. Tuberculinum: thin, always tired patients jinhein baar baar chest infections hote hain. Calcarea Carbonica: mote, cold-sensitive, slow recovery wale patients. Arsenicum Album: watery discharge, anxiety, restless. Baryta Carbonica: bachche jinhein baar baar tonsil infection hoti hai. Natrum Muriaticum: stress/grief ke baad immune weakness. Ek qualified homoeopath se milein.',
    },
    {
      _key: 'faq7',
      question: 'Rainy season mein baar baar beemar kyun padte hain — kaise bachein?',
      answer: 'Monsoon mein infections 3 reasons se zyada hote hain: (1) Virus aur bacteria humidity mein zyada survive karte hain, (2) Bahar ka khaana-paani contamination highest hota hai, (3) Indoor time zyada hone se close contact aur viral spread zyada. Bachne ke liye: street food bilkul band, filtered/boiled paani, daily tulsi-ginger kadha, geele kapde jaldi change karein. Agar past mein har monsoon beemar padte ho — homeopathic preventive dose doctor ki salaah se monsoon se pehle lein.',
    },
    {
      _key: 'faq8',
      question: 'Baar baar antibiotics lena safe hai kya — kya hota hai zyada lene se?',
      answer: 'Nahi — baar baar antibiotics lena long term mein genuinely harmful hai. Yeh 3 main problems create karta hai: (1) Antibiotic resistance — bacteria adapt ho jaate hain, agle infection mein wahi antibiotic kaam nahi karta. (2) Gut microbiome damage — antibiotics good bacteria bhi maarte hain, aur gut mein 70% immunity rehti hai; har course ke baad immunity actually weaker hoti hai kuch time ke liye. (3) Yeast overgrowth — Candida infections common ho jaate hain after repeated antibiotics. Homeopathy ka ek major benefit yeh hai ki consistent constitutional treatment se infections ki frequency itni kam ho sakti hai ki antibiotics ki zaroorat hi kam padti hai.',
    },
    {
      _key: 'faq9',
      question: 'Vitamin C lene se sardi se bachav hota hai — sach hai kya?',
      answer: 'Vitamin C ke baare mein research interesting hai. Large meta-analyses (Cochrane Reviews) suggest karte hain ki regular Vitamin C supplementation sardi ki duration approximately 8-14% reduce karta hai, aur cold hone se pehle se lene par cold ki frequency moderate athletes mein 50% tak kam hui. Lekin already cold ho jaane ke baad mega-dose lena utna effective nahi hai. Best approach: Amla, nimbu, guava jaise natural sources se daily Vitamin C lein — supplement se better absorption hoti hai.',
    },
    {
      _key: 'faq10',
      question: 'Bacche ko baar baar tonsil infection hai — operation karna padega kya?',
      answer: 'Tonsillectomy sirf tab recommended hai jab: saal mein 7+ episodes ho, ya lagaataar 2 saal mein 5+ episodes, ya 3 saal mein 3+ episodes, ya airway obstruction ho. Agar condition in criteria ke kareeb aa rahi hai lekin abhi surgery recommend nahi hui — yeh homeopathy ke liye right time hai. Baryta Carbonica aur Calcarea Carbonica jaise medicines chronic tonsillar tendency ko address karne mein clinically effective hain.',
    },
    {
      _key: 'faq11',
      question: 'Baar baar naak band rehna ya sinus infection — ilaaj kya hai?',
      answer: 'Baar baar naak band rehna ya sinus infection aksar do conditions ki combination hoti hai: allergic rhinitis (jo naak ko sensitize karta hai) aur weak mucosal immunity (jo bacteria/virus ko easily settle hone deti hai). Homeopathy mein yeh combination bahut achhe se treat hoti hai: Kali Bichromicum (thick, stringy, yellow discharge), Arsenicum Album (watery, burning discharge with sneezing), Silicea (chronic sinus blockage, slow recovery). Saath mein neti pot se nasal rinse, steam inhalation with eucalyptus oil bhi helpful hai.',
    },
    {
      _key: 'faq12',
      question: 'Kya Chyawanprash se immunity badhti hai — lena chahiye?',
      answer: 'Haan — Chyawanprash evidence-based immunity booster hai. Iska base Amla (Vitamin C ka powerhouse) hai, saath mein Ashwagandha, Giloy, Shatavari — sab adaptogenic herbs hain jo immune system ko stress mein bhi strong rakhte hain. Clinical studies suggest karte hain ki regular Chyawanprash use upper respiratory tract infections ki frequency aur duration reduce karta hai — especially bacchon aur elderly mein. Winter mein roz subah 1-2 chammach khali pet ya doodh ke saath — safe, effective, aur side-effect free hai.',
    },
    {
      _key: 'faq13',
      question: 'Immunity ke liye kaunsa test karwana chahiye — lab tests kya hote hain?',
      answer: 'Basic immunity assessment ke liye yeh tests helpful hain: (1) CBC with Differential — white blood cell count aur types. (2) Vitamin D (25-OH) — India mein 70%+ mein deficient, direct immunity impact. (3) Serum Zinc — deficiency extremely common aur directly immunity affects karta hai. (4) Serum Ferritin (Iron stores) — anemia bhi immune weakness cause karta hai. (5) TSH (Thyroid) — hypothyroidism immunity suppress karta hai. (6) Blood Sugar (Fasting) — uncontrolled diabetes major immune suppressant.',
    },
    {
      _key: 'faq14',
      question: 'Pregnancy mein baar baar sardi ho rahi hai — kya karna chahiye?',
      answer: 'Pregnancy mein immune system naturally slightly suppressed hoti hai — toh infections thoda zyada common hai. Lekin baar baar hona concern ka reason hai. Nutritional deficiencies (Iron, B12, Zinc, Vitamin D) pregnancy mein aur common hoti hain — pehle test karwayein. Homeopathy pregnancy mein ek safe option hai — Arsenicum Album, Allium Cepa jaise medicines proper guidance mein bilkul safe hain. Apne homoeopath ko pregnancy ke baare mein zaroor batayein.',
    },
    {
      _key: 'faq15',
      question: 'Badhti umra mein (60+) baar baar beemar padte hain — immunity kaise improve karein?',
      answer: 'Umra ke saath immunity naturally decline hoti hai — ise "immunosenescence" kehte hain. 60+ mein yeh normal process hai lekin manage kiya ja sakta hai: Vitamin D deficiency especially elderly mein common — supplement almost always zaroori hai. Protein intake adequate rakhein — muscle loss ke saath immunity cells bhi kam banti hain. Social connection maintain karein — isolation ke saath immunity genuinely kharab hoti hai. Homeopathy elderly mein bohot gentle aur effective hai — Arsenicum Album, Natrum Muriaticum frequently used constitutional medicines hain.',
    },
    {
      _key: 'faq16',
      question: 'Office mein colleagues beemar hote hain toh main bhi beemar padh jaata hoon — kaise protection lein?',
      answer: 'Office infections se bachne ke liye yeh practical steps kaam karte hain: Haath baar baar dhona — yahi sabse best prevention hai. Apna cup/bottle/keyboard common na karein. Agar colleague beemar ho toh mask use karein closed meetings mein. Khud ki immunity maintain rakhein — stressed log zyada jaldi catch karte hain. AC vents se direct cold air avoid karein. Agar aap notice karte ho ki jab bhi koi officemate beemar hota hai aap bhi hote ho — yeh clear sign hai ki immunity genuinely weak hai aur constitutional treatment ki zaroorat hai.',
    },
    {
      _key: 'faq17',
      question: 'Baar baar beemar padne se school miss ho jaata hai — bacche ke liye long term kya karein?',
      answer: 'Long-term plan: (1) Proper medical evaluation — underlying cause dhundho (allergy? Vitamin deficiency? Tonsil issue?). (2) Diet improve karein — junk food kam, immunity-building foods zyada. (3) Sleep schedule fix karein — school-age bachchon ko 9-10 ghante chahiye. (4) Homeopathic constitutional treatment — 6-12 months ka committed treatment usually frequency significantly reduce karta hai. (5) School ko batayein agar specific triggers hain (dust, chalk, specific foods).',
    },
    {
      _key: 'faq18',
      question: 'Kya stress se bhi baar baar sardi-zukam ho sakti hai?',
      answer: 'Haan — aur yeh scientifically proven hai. Chronic stress mein cortisol hormone chronically elevated rehta hai, jo directly white blood cells (T-cells aur NK cells) ki activity suppress karta hai. Research clearly show karta hai ki exam stress students mein cold frequency badhata hai, work stress wale office workers zyada baar beemar padte hain, aur relationship stress mein bhi infections zyada hote hain. Homeopathy yahan interesting hai kyunki constitutional medicines stress-immunity connection ko simultaneously address karti hain.',
    },
    {
      _key: 'faq19',
      question: 'Kya chai peene se sardi mein faida hota hai — Indian masala chai kitni helpful hai?',
      answer: 'Masala chai actually ek decent home remedy hai — scientifically bhi: Ginger (adrak) anti-inflammatory aur antimicrobial hai; Tulsi antiviral properties documented hain; Black pepper immune cell activation mein help karta hai; Cloves (laung) potent antimicrobial eugenol contain karta hai. Regular chai (dudh-chini wali) utni effective nahi — milk mucus production badha sakta hai aur sugar immunity suppress karta hai. Dudh-chini kam ya bilkul nahi — masale zyada — is tarah ki chai sardi mein genuinely helpful hai.',
    },
    {
      _key: 'faq20',
      question: 'Baar baar sardi ke baad weakness aur thakan rehti hai — yeh normal hai?',
      answer: 'Thodi weakness sardi ke baad normal hai — 3-5 din mein theek ho jaani chahiye. Lekin agar weakness 2+ hafte tak rehti hai, ya har sardi ke baad aisa hota hai, toh yeh "post-infectious fatigue" hai aur ignore nahi karna chahiye. Possible reasons: Iron/Vitamin B12/D deficiency jo infection ke baad aur worsens, ya immune system ka "overdrive" state mein rehna. Homeopathy mein Gelsemium, China Officinalis ya Kali Phosphoricum jaise medicines post-infectious fatigue mein specifically use hoti hain.',
    },
    {
      _key: 'faq21',
      question: 'Zinc supplement lena chahiye immunity ke liye — kitna lena safe hai?',
      answer: 'Zinc immunity ke liye genuinely important hai — T-cell development aur antibody production dono mein zinc essential role play karta hai. India mein dietary zinc deficiency bohot common hai, especially vegetarians mein (phytic acid absorption block karta hai). Safe adult dose: 8-11 mg/day dietary; supplement mein zyada se zyada 25-40 mg/day doctor guidance mein. Zyada zinc harmful bhi ho sakta hai — copper absorption block karta hai. Natural sources prefer karein: pumpkin seeds, til, moong, chana.',
    },
    {
      _key: 'faq22',
      question: 'Baar baar sardi mein kab turant doctor ke paas jaana chahiye — emergency signs kya hain?',
      answer: 'Yeh signs hone par ghar pe mat raho — doctor ya emergency se milein: (1) Chest pain ya breathlessness ke saath respiratory infection. (2) High fever (103°F+) jo 3 din mein kam na ho. (3) Bacche mein breathing fast ho ya chest mein aawaz aaye. (4) Antibiotics lene ke baad bhi symptoms worse hote jaayein. (5) Severe earache ya kaan se pus nikle. (6) Stiff neck ke saath bukhar — meningitis ka possible sign. (7) Confusion ya extreme lethargy kisi bhi age mein.',
    },
  ],

  sources: [
    { _key: 's1', name: 'CCRH — Annual Research Reports 2014-2019', url: 'ccrhindia.nic.in', year: '2019' },
    { _key: 's2', name: 'WHO Global Health Observatory — Acute Respiratory Infections', url: 'who.int', year: '2022' },
    { _key: 's3', name: 'Cochrane Review — Vitamin C for preventing and treating the common cold — Hemilä & Chalker', url: 'cochranelibrary.com', year: '2013' },
    { _key: 's4', name: 'American Academy of Pediatrics — Management of Recurrent Respiratory Infections in Children', url: 'aap.org', year: '2021' },
    { _key: 's5', name: 'Indian Journal of Paediatrics — Recurrent Respiratory Infections in Indian Children', url: 'link.springer.com', year: '2019' },
    { _key: 's6', name: 'Journal of Alternative and Complementary Medicine — Immunomodulatory effects of homeopathic treatment', url: 'liebertpub.com', year: '2018' },
  ],

  doctorNote: 'Clinic mein jo patients baar baar sardi ka ilaaj allopathy se kara rahe the — unhe constitutional homeopathic treatment pe laana ek challenge tha kyunki unhe quick fix ki aadat thi. Lekin jo patients 4-6 months tak tike rahe, unme na sirf infection frequency drastically kam hui — unka energy level, digestion, aur overall well-being sab better hua. Recurrent cold ek isolated problem nahi hai — yeh body ki overall vitality ka barometer hai. — Dr. Shadab, Homeopedia.in',
}

async function seed() {
  console.log('Seeding Recurrent Cold / Frequent Infections...')
  await client.createOrReplace(doc)
  console.log('✅ Done! disease-recurrent-cold seeded.')
}

seed()
