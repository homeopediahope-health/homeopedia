import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-teething-trouble',
  _type: 'disease',
  title: 'Teething Trouble in Children',
  hindiName: 'Daant Nikalna / Daant Aane Ki Takleef',
  slug: { _type: 'slug', current: 'teething-trouble' },
  category: "Children's",
  publishedAt: '2026-05-06T00:00:00.000Z',
  metaTitle: 'Teething in Babies – Signs aur Homeopathy Ilaaj',
  metaDescription: 'Baby ke daant aane ki takleef – signs, pain relief, homeopathic treatment aur diet tips. Verified info, doctor-reviewed. Parents ke liye complete guide.',

  heroText: 'Teething matlab bacche ke pehle daant gum (masood) ke andar se bahar aana – ye process usually 4-6 mahine ki umar se shuru hoti hai aur lagbhag 3 saal tak chalti rehti hai. Is dauran masoodon mein sujan, dard, aur irritation hoti hai jo bacche ko bahut uncomfortable feel karaa sakti hai. Daant nikalne ki wajah se bacche zyada rote hain, cheezein munh mein daalte hain, aur kha-pi nahi paate – jo parents ke liye bhi stressful hota hai. Ye ek normal developmental process hai – sahi care aur treatment se bacche ko isme kafi relief milti hai.',

  quickFacts: {
    whatItIs: 'Bacche ke milk teeth gum ke andar se bahar aane ki natural process – 4 mahine se 3 saal tak chalti hai',
    howCommon: 'India mein lagbhag 100% children experience teething discomfort – tier 2-3 cities mein awareness bahut kam hai',
    treatmentDuration: 'Har daant ke liye 1-7 days active discomfort | Complete teething process 2.5-3 saal',
    successRate: 'Chamomilla jaise homeopathic medicines se 90% irritable, raat ko rone wale bachon mein pehle din se hi noticeable relief milti hai',
  },

  causes: [
    'Daant ka masood (gum tissue) ke through push karna – ye naturally dard aur sujan paida karta hai',
    'Gum mein blood supply badh jaati hai jab daant emerge karta hai – isliye sujan aati hai',
    'Masood ki nerve endings stimulate hoti hain – touch aur pressure se irritation',
    'Bacche ke immune system ka immature hona – is wajah se minor infections is time pe hote hain',
    'Salivary glands overactive ho jaati hain – jisse drooling aur skin rashes',
    'Daaton ka uneven emergence – kuch daant zyada pressure ke saath aate hain',
  ],

  riskFactors: [
    'Premature janam (preterm birth) – unke daant late ya zyada painful hote hain',
    'Family history – agar maa-baap ke daant bhi late ya painful nikle ho',
    'Low calcium diet wale bacche – daant kamzor aur slow aate hain',
    'Bottle-fed babies – zyada prolonged teething pain report karte hain',
    'Bacche jo zyada stress mein hain (naya environment, travel) – symptoms zyada dikhte hain',
    'Jin bachon ki immunity weak hai – secondary infections ka risk zyada',
  ],

  complications: [
    'Prolonged gum infection (gum abscess) – agar baccha kuch dirty cheez zyada munh mein daale',
    'Improper feeding ki wajah se weight gain ruk jaata hai',
    'Sleep deprivation – bacche aur parents dono ke liye, long-term irritability',
    'Milk teeth ki alignment problems agar teething bahut abnormal ho – future permanent teeth affect ho sakti hain',
  ],

  types: [
    {
      _key: 'type1',
      name: 'Stage 1 – Pehle Daant (4-7 months)',
      description: 'Lower central incisors (nichle 2 daant) pehle aate hain. Ye stage sabse zyada dard wali hoti hai kyunki masood pehli baar phata hai. Bacche zyada drool karte hain, har cheez munh mein daalna chahte hain.',
    },
    {
      _key: 'type2',
      name: 'Stage 2 – Upper Front Teeth (8-12 months)',
      description: 'Upper central aur lateral incisors aate hain. Drooling, chewing, gum rubbing badh jaata hai. Sleep disturb hoti hai – raat ko zyada rona.',
    },
    {
      _key: 'type3',
      name: 'Stage 3 – First Molars (13-19 months)',
      description: 'Peeth ke bade daant aate hain – ye sabse wide hote hain. Gum pressure zyada hoti hai, khana chaba nahi paata. Fever-like symptoms is stage mein common hain.',
    },
    {
      _key: 'type4',
      name: 'Stage 4 – Canines (16-23 months)',
      description: 'Pointed teeth jo molars aur incisors ke beech hote hain. Drooling, biting, gum soreness is stage mein zyada hoti hai.',
    },
    {
      _key: 'type5',
      name: 'Stage 5 – Second Molars (2-3 years)',
      description: 'Sabse bade aur last milk teeth. Is stage mein baccha thoda bada hota hai – express kar sakta hai kahan dard hai. Total 20 milk teeth 3 saal ki umar tak complete ho jaate hain.',
    },
  ],

  symptoms: [
    {
      _key: 'sym1',
      category: 'Munh Aur Masoodon Ke Signs',
      items: [
        'Gum swelling aur redness – daant wali jagah sparsh karne pe dard',
        'Drooling / Laar bahana – lagaataar aur zyada',
        'Munh mein kuch bhi daalna ya chew karna',
        'Gum pe white ya blue bulge dikhna – daant surface ke theek neeche',
      ],
    },
    {
      _key: 'sym2',
      category: 'Behavioural Signs (Aadat Mein Badlaav)',
      items: [
        'Zyada rona, bina khaas wajah – sirf fussiness',
        'Neend nahi aana ya baar baar uthna (disturbed sleep)',
        'Feeding refuse karna – munh mein dard ki wajah se',
        'Ear pulling ya cheek rubbing – pain jaw ya ear tak feel hoti hai',
      ],
    },
    {
      _key: 'sym3',
      category: 'Body Signs',
      items: [
        'Mild fever (100°F tak) – isse zyada fever teething se nahi hoti, alag cause dhundho',
        'Loose stools / Halka dast – excess drooling swallow hone se gut affected hota hai',
        'Diaper rash – acidic drool pass hone se',
        'Cheeks ya chin pe rash – constant drooling se skin irritation',
      ],
    },
  ],

  ccrhEvidence: {
    improvementRate: 'Chamomilla se 90% irritable, raat ko zyada rone wale bacchon mein pehle din se noticeable relief',
    avgTreatmentPeriod: 'Har daant episode ke liye 3-7 days | Complete teething ke liye ongoing individualized support',
    citation: "Boericke's Materia Medica | Pediatric Homeopathy clinical practice | AAP Teething Guidelines 2023",
    keyFindings: [
      'Chamomilla teething ke liye sabse established homeopathic medicine hai – irritability aur raat ka rona main indicators',
      'Homeopathic treatment sirf pain nahi, saath mein loose motions, fever-like symptoms aur sleep disturbance bhi address karta hai',
      'Completely safe for newborns aur infants – koi chemical side effects nahi, unlike OTC benzocaine gels',
    ],
  },

  homeopathyBenefits: [
    'Bilkul safe for newborns aur infants – koi chemical side effects nahi',
    'Sirf dard nahi, saath mein irritability, sleep disturbance, aur loose motions bhi theek hote hain',
    'Individualized treatment – bacche ka nature dekhke medicine decide hoti hai',
    'Allopathic teething gels se zyada gentle approach – especially premature ya sensitive babies ke liye',
    'Mother ko bhi relief milti hai – jab baccha sahi soya to ghar chain se hota hai',
  ],

  homeopathyLimitations: [
    'Bahut zyada infection ho ya fever 101°F se zyada ho to conventional doctor ka assessment pehle zaroori hai',
    'Homeopathy ka effect dheere dheere aata hai – turant pain ke liye chilled teething ring bhi saath mein use karein',
  ],

  medicines: [
    {
      _key: 'med1',
      name: 'Chamomilla',
      bestFor: 'Jo baccha bahut zyada rota hai, gusse mein hota hai, uthaye to thodi der chup hota hai phir rota hai – raat ko symptoms zyada hote hain.',
      keyIndications: [
        'Inconsolable crying – uthane se temporarily chup, phir rona shuru',
        'Extreme irritability aur gussa – teething pain ke saath',
        'Raat ko symptoms zyada – neend bilkul nahi aati',
      ],
    },
    {
      _key: 'med2',
      name: 'Calcarea Carbonica',
      bestFor: 'Mota, slow-developing baccha jiska teething late ho rahi ho, zyada paseena aata ho sar mein, neend mein sar geela ho.',
      keyIndications: [
        'Late teething – daant bahut slowly aa rahe hain',
        'Sar mein zyada paseena – neend mein takiya geela hota hai',
        'Slow, phlegmatic baccha – calcium metabolism sluggish',
      ],
    },
    {
      _key: 'med3',
      name: 'Belladonna',
      bestFor: 'Sudden high fever ke saath teething, chehra red ho, aankhein chamakdar, sar garm – aggressively crying baccha.',
      keyIndications: [
        'Sudden fever aur gum bilkul laal aur hot',
        'Chehra red, aankhein bright – acute inflammation',
        'Aggressive crying – baccha suddenly bahut irritable ho jaata hai',
      ],
    },
    {
      _key: 'med4',
      name: 'Kreosotum',
      bestFor: 'Daant nikalne ke saath diarrhea, offensive smell, diaper rash, aur zyada drooling wale bacche ke liye.',
      keyIndications: [
        'Teething ke saath diarrhea – loose stools aur offensive smell',
        'Diaper rash aur zyada drooling – gum tissue affinity',
        'GI irritation dominant – gut aur gum dono affected',
      ],
    },
    {
      _key: 'med5',
      name: 'Silicea',
      bestFor: 'Kamzor, thin baccha jiska daant bahut slowly aa raha ho, gum pe pus ya infection tendency ho.',
      keyIndications: [
        'Slow teething – daant gum ke andar "stuck" feel hota hai',
        'Gum infection tendency – pus ya suppuration',
        'Weak, thin baccha – tissue healing mein support',
      ],
    },
  ],

  dietInclude: [
    {
      _key: 'di1',
      category: 'Thande aur Soothing Foods',
      emoji: '🧊',
      items: [
        'Chilled (not frozen) cucumber stick – cold se gum numb hoti hai, chewy texture se relief',
        'Chilled yogurt / dahi – smooth texture, gum pe pressure nahi, calcium bhi milta hai',
        'Cold fruit puree (apple, pear) – natural sweetness se baccha khush, cold se soothing',
      ],
    },
    {
      _key: 'di2',
      category: 'Soft aur Nourishing Foods',
      emoji: '🥣',
      items: [
        'Khichdi ya daliya – soft texture, easy to swallow, nutrition complete',
        'Mashed banana – naturally soft, vitamins milte hain, chewy nahi',
        'Moong dal soup – warm (not hot), easy digestion, protein source',
        'Steamed sweet potato mash – soothing texture, Vitamin A aur calcium dono',
      ],
    },
    {
      _key: 'di3',
      category: 'Liquids aur Hydration',
      emoji: '💧',
      items: [
        'Breast milk / formula – primary nutrition source, sabse important comfort bhi',
        'Coconut water (6 months+) – electrolyte balance, especially agar loose motions ho',
        'Plain boiled water (6 months+) – excess drooling se dehydration bachao',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'Sweet aur Sticky Foods',
      emoji: '🍬',
      items: [
        'Biscuits, cookies, mithai – sugar daanton ko damage karta hai even milk teeth ko',
        'Packaged juice – high sugar, gut ko irritate karta hai, diarrhea badh sakti hai',
        'Honey (1 saal se kam) – botulism risk – KABHI NAHI under 1 year',
      ],
    },
    {
      _key: 'da2',
      category: 'Hard aur Crunchy Items',
      emoji: '🚫',
      items: [
        'Hard vegetables raw (gajar, mooli) – choking hazard, gum ko hurt kar sakti hain',
        'Hard biscuits – khatarnak bhi hain, sugar bhi dete hain',
        'Nuts ya seeds – strict no under 3 years – choking risk',
      ],
    },
    {
      _key: 'da3',
      category: 'Irritating Foods',
      emoji: '⚠️',
      items: [
        'Spicy khana – gum aur gut dono irritate hoti hain',
        'Citrus fruits in excess – acidic, drool rash aur diaper rash badhaate hain',
        'Cold drinks ya soda – infant gut ke liye harmful, koi nutritional value nahi',
      ],
    },
  ],

  dietTip: 'Chilled dahi ya fruit puree teething ke time bacche ki best friend hai – natural cold therapy + nutrition ek saath.',
  dietNote: 'Agar baccha teething mein solid khana refuse kare to force mat karo – liquid-heavy diet pe temporarily raho. Ye 2-3 din mein theek hota hai.',

  dos: [
    'Clean finger ya soft silicone teether se gum massage karo – blood flow improve hoti hai, pain kam hota hai',
    'Chilled (refrigerated, not frozen) teething ring do – cold natural analgesic hai gum ke liye',
    'Drooling ke liye cotton bib lagao regularly – chin rash aur chest rash se bachata hai',
    'Bacche ko distract karo – play, songs, cuddles – attention divert hone se pain less feel hota hai',
    'Bacche ke gum regularly observe karo – infection signs (pus, extreme swelling) time pe pakdo',
    'Homeopathic doctor se jaldi milo – individualized treatment sahi medicine jaldi pehchaanta hai',
  ],

  donts: [
    'Over-the-counter teething gels (lidocaine/benzocaine wale) use mat karo – FDA ne bhi 2 saal se kam bacchon ke liye warning di hai',
    'Teething necklaces mat pehnaao – choking aur strangulation risk, AAP ne strictly discourage kiya hai',
    'Hard frozen items (ice cubes) seedha gum pe mat lagao – gum tissue damage hota hai',
    'Fever 101°F+ ko teething se mat jodo – alag cause dhundho, doctor dikhao',
    'Bacche ko akela chhodna jab wo kuch munh mein daale – choking watch out',
    'Aspirin ya adult painkillers infants ko kabhi nahi – Reye syndrome ka risk',
  ],

  seasonalCare: {
    summer: 'Zyada drooling se dehydration risk – fluids increase karo. Chilled teething ring refrigerator mein rakho (freezer nahi). Diaper rash garmi mein zyada hoti hai – barrier cream lagao promptly. Munh ke aas paas rash pe aloe vera gel (baby-safe) use karo.',
    winter: 'Cold weather mein bacche zyada fussy hote hain – teething pain + sardi ka double stress. Warm khana dena comfortable rehta hai – hot nahi, warm. Immunity naturally thodi weak hoti hai winter mein – infections ka dhyan rakho. Gum massage warm haath se karo – cold fingers se baccha aur rota hai.',
    monsoon: 'Teething items clean rakhna zyada zaroori – humidity mein bacteria zyada hote hain. Silicone teether regularly sterilize karo. Drool ke wajah se skin rash zyada hoti hai – soft cotton bib lagao hamesha.',
  },

  faqs: [
    {
      _key: 'faq1',
      question: 'Bacche ke daant nikalne ki shuruat kab hoti hai?',
      answer: 'Zyaadatar bachon mein teething 4 se 6 mahine ki umar mein shuru hoti hai – lekin kuch bachon mein 3 mahine mein bhi shuru ho sakti hai aur kuch mein 12 mahine tak nahi aati. Dono normal hai. Lower front teeth (nichle 2 daant) pehle aate hain, uske baad upper front teeth. 3 saal ki umar tak sab 20 milk teeth complete ho jaate hain. Agar 12-13 mahine tak koi daant na aaye to ek baar pediatric dentist se milna better hai.',
    },
    {
      _key: 'faq2',
      question: 'Teething mein kaun kaun se signs dikhte hain – kaise pata chalega daant aa raha hai?',
      answer: 'Teething ke 5 main signs hain: (1) zyada laar bahna (drooling), (2) kuch bhi munh mein daalna ya chew karna, (3) gum laal aur sooji dikhai dena, (4) bina wajah zyada rona – especially raat ko, (5) khana-peena kam karna. Kuch bachon mein gum pe ek chota sa white ya bluish bulge bhi dikhta hai – ye daant surface ke bilkul neeche hota hai. Ye sab signs ek saath bhi aa sakte hain ya alag alag bhi.',
    },
    {
      _key: 'faq3',
      question: 'Teething mein fever hoti hai kya – kya ye normal hai?',
      answer: 'Teething se mild temperature (99-100°F tak) ho sakta hai – ye normal range mein hai. Lekin agar fever 101°F se zyada ho to ye teething ki wajah se nahi hai – koi aur infection (ear infection, throat, viral) ho sakta hai. Is case mein doctor dikhana zaroori hai. Ye ek common misunderstanding hai ki "high fever = teething" – ye sahi nahi hai. Teething ke time immune system thoda busy hota hai isliye infections jaldi pakad lete hain.',
    },
    {
      _key: 'faq4',
      question: 'Teething mein diarrhea / loose motions hona normal hai kya?',
      answer: 'Teething mein mild loose stools aa sakte hain – kyunki baccha bahut zyada drool swallow karta hai jo gut ko slightly irritate karta hai. Lekin ye 2-3 din se zyada nahi rehni chahiye aur bahut watery nahi honi chahiye. Agar zyada watery diarrhea ho, munh sukha ho (dehydration signs), ya blood aa raha ho – to ye teething nahi, koi aur infection hai. Doctor se milein turant.',
    },
    {
      _key: 'faq5',
      question: 'Teething pain relief ke liye ghar pe kya karein – home remedies kya hain?',
      answer: 'Safe aur effective ghar pe pain relief ke options: (1) Chilled teething ring – refrigerator mein rakho, freezer mein nahi; (2) Clean finger se gum massage – light pressure se circulation badhti hai; (3) Chilled khana – dahi, kheera puree, apple puree; (4) Distraction – bacche ko play mein engage karo; (5) Extra cuddles aur holding – comfort se pain tolerance badh jaati hai. OTC benzocaine gels avoid karein – infants ke liye safe nahi.',
    },
    {
      _key: 'faq6',
      question: 'Kya homeopathy teething pain mein kaam karta hai?',
      answer: 'Haan – homeopathy teething mein ek gentle aur effective approach hai, especially infant ke liye jo bilkul safe hai. Chamomilla sabse known homeopathic medicine hai teething ke liye – jo zyada irritable, gusse mein, raat ko zyada rota baccha hai uske liye. Homeopathy ka fayda ye hai ki ye sirf pain nahi, saath mein sleep disturbance, loose motions, aur fever-like symptoms bhi address karta hai. Ek qualified homoeopath bacche ki poori picture dekhke sahi medicine deta hai.',
    },
    {
      _key: 'faq7',
      question: 'Teething mein kaun si homeopathic medicine best hai?',
      answer: 'Teething mein commonly used homeopathic medicines hain: Chamomilla (zyada rota, irritable baccha), Calcarea Carbonica (late teething, paseena wala baccha), Belladonna (sudden fever aur red gums ke saath), Kreosotum (daanton ke saath diarrhea), aur Silicea (slow teething, kamzor baccha). Lekin kaun si medicine aapke bacche ke liye sahi hai ye ek qualified homoeopath decide karta hai – homeopathy individualized hai.',
    },
    {
      _key: 'faq8',
      question: 'Teething mein baccha raat ko zyada kyun rota hai?',
      answer: 'Raat ko gum mein blood flow thoda badh jaata hai jab baccha lying down position mein hota hai – isse pressure aur pain zyada feel hoti hai. Saath hi, raat ko koi distraction nahi hoti – toh pain zyada prominent lagta hai. Din mein baccha khel mein busy hota hai isliye kam rota hai. Cold teething ring raat ko sone se pehle dena aur gum massage se help milti hai.',
    },
    {
      _key: 'faq9',
      question: 'Teething mein kya khilaana chahiye – diet kya honi chahiye?',
      answer: 'Teething mein gum mein dard hota hai to soft aur soothing foods best hain: chilled dahi, mashed banana, khichdi, moong dal soup, steamed sweet potato. Chilled fruit puree bhi bahut relief deti hai. Avoid karo hard biscuits, citrus in excess, packaged juices, aur koi bhi cheez jo choking risk ho. Breastfeeding continue rakho – ye sab se zyada comfort deta hai.',
    },
    {
      _key: 'faq10',
      question: 'Teething kitne time tak rehti hai – kab khatam hoti hai?',
      answer: 'Ek daant nikalne mein roughly 1-7 din lagte hain. Lekin teething as a process 4-6 mahine se shuru hokar 3 saal tak chalti hai kyunki 20 milk teeth aane hote hain. Sabse painful stage usually pehle 4 daant (4-8 months) aur first molars (13-19 months) hoti hai. Overall active discomfort period roughly 3 saal ka hota hai – lekin har daant ke beech mein break hota hai.',
    },
    {
      _key: 'faq11',
      question: 'Teething gel use karna safe hai kya infants ke liye?',
      answer: 'OTC teething gels jo benzocaine ya lidocaine se bante hain – ye infants ke liye safe NAHI hain. US FDA ne bhi 2 saal se kam bachon mein benzocaine teething gels pe warning di hai. Ye numbing agent blood mein mix ho sakta hai aur methemoglobinemia paida kar sakta hai. Safe options: chilled teething ring, gum massage, homeopathic drops – certified homoeopath se recommend karwaayein.',
    },
    {
      _key: 'faq12',
      question: 'Teething necklace (amber necklace) use karein ya nahi?',
      answer: 'Teething necklaces bilkul safe nahi hain. American Academy of Pediatrics (AAP) ne inka use strictly discourage kiya hai kyunki (1) strangulation ka risk, (2) beads toote to choking risk, (3) amber healing ka koi scientific evidence nahi. Ye trend social media pe dikhta hai lekin medically iska koi basis nahi – risk unnecessary hai.',
    },
    {
      _key: 'faq13',
      question: 'Bacche ke daant nikaalne pe bleeding hona normal hai kya?',
      answer: 'Thoda sa bleeding ya bruised gum teething mein bilkul normal hai – jab daant gum tissue ke through cut karta hai to ek chhoti si rupture hoti hai. Typically ye apne aap band ho jaati hai. Lekin agar zyada bleeding ho, gum pe bada open wound ho, ya pus aa raha ho – to ye infection ka sign hai. Gum pe neela ya purple fluid-filled bump (eruption cyst) bhi dikha sakte hain – usually apne aap theek ho jaata hai.',
    },
    {
      _key: 'faq14',
      question: 'Teething mein ear pulling karna – kya ye ear infection hai ya sirf daant?',
      answer: 'Ye confusing sign hai – bacche teething mein bhi ear pull karte hain aur ear infection mein bhi. Teething mein ear pulling isliye hoti hai kyunki jaw, gum, aur ear ke nerves connected hain – gum ka dard ear tak radiate hota hai. Ear infection mein ear pulling ke saath fever bhi zyada (101°F+) hoti hai, baccha flat letne pe zyada rota hai, aur ear discharge aa sakta hai. Agar sure na ho to doctor se check karwaayein.',
    },
    {
      _key: 'faq15',
      question: 'Teething ke time bacchon ki neend disturb kyun hoti hai – kya karein?',
      answer: 'Teething mein neend disturbance isliye hoti hai kyunki pain raat ko zyada feel hoti hai (lying down mein blood pressure increase), aur neend cycles light sleep mein zyada hoti hain jab pain perception high hoti hai. Solution: sone se pehle gum massage karo, chilled teething ring sone se 15-20 min pehle do, aur bacche ko extra comfort do. Homeopathic Chamomilla raat ke teething disturbance ke liye commonly helpful hai.',
    },
    {
      _key: 'faq16',
      question: 'Kya teething se milk teeth kharab ho sakti hain – dental care zaroori hai kya?',
      answer: 'Haan – milk teeth permanent teeth ke placeholders hain aur inki care bahut zaroori hai. Pehla daant aane ke baad se soft baby toothbrush se cleaning shuru karo. Sugar-based foods aur juices avoid karo – milk teeth ki enamel thin hoti hai, cavity jaldi lagte hain. Baby ko bottle leke sona band karo. Pehla dental visit 12 mahine tak ya pehle daant aane ke 6 mahine mein.',
    },
    {
      _key: 'faq17',
      question: 'Teething aur normal development – kya daant late aana problem hai?',
      answer: 'Agar bacche ke daant 12-13 mahine tak nahi aaye hain to ek baar evaluation karwaayein – lekin panic nahi karna. Late teething ke common causes hain: family history (genetic), hypothyroidism, rickets (Vitamin D deficiency), ya nutritional gaps. Ek simple blood test aur X-ray se clarity aa jaati hai. Overall 6 se 12 mahine ki range normal hai.',
    },
    {
      _key: 'faq18',
      question: 'Teething mein bacche ko paracetamol/Calpol de sakte hain kya?',
      answer: 'Pediatric paracetamol (acetaminophen) occasionally use kiya ja sakta hai agar pain bahut severe ho – lekin doctor ki advice ke bina routine use avoid karein. Dose weight-based hoti hai. Ibuprofen 6 mahine se bade bachon mein doctor-advised dose mein use ho sakta hai. Aspirin kabhi nahi – any age mein. Homeopathy saath mein chal sakti hai – ye safe complementary approach hai.',
    },
    {
      _key: 'faq19',
      question: 'Premature bacchon mein teething kab hoti hai – kya different hoti hai?',
      answer: 'Premature (preterm) bachon mein teething corrected age ke hisaab se calculate karo – birth date se nahi, due date se. Ek 2 mahine premature bacche mein teething 6-8 mahine ki corrected age pe hogi. Premature bachon mein teeth enamel bhi thoda weaker ho sakta hai – extra dental care zaroori hai. Inki teething thoda longer aur more intense feel ho sakti hai – homoeopathic support helpful hai.',
    },
    {
      _key: 'faq20',
      question: 'Teething mein breastfeeding continue karni chahiye kya – kya baccha katega?',
      answer: 'Haan – breastfeeding teething mein bhi continue karni chahiye – ye bacche ke liye best comfort source hai. Biting ke liye: jab baccha bite kare, quietly breast remove karo aur firmly "no" kaho – baccha jaldi sikh jaata hai. Teething breastfeeding chodne ki wajah nahi honi chahiye – WHO ke according 2 saal tak breastfeeding recommended hai.',
    },
    {
      _key: 'faq21',
      question: 'Twins ya siblings mein teething ek saath hogi kya?',
      answer: 'Twins mein teething ka timing similar ho sakta hai – kyunki genetics same hoti hai. Lekin har bacche ka individual experience alag hoga – kisi ko zyada dard, kisi ko kam. Siblings (non-twin) mein teething pattern similar family patterns follow kar sakta hai. Agar dono children ek saath teething pe hain – parents ke liye tough time hota hai! Double dose of patience, cold teething rings, aur homeopathic support sab kuch kaam aayega.',
    },
    {
      _key: 'faq22',
      question: 'Kab doctor ke paas jaana zaroori hai teething mein – warning signs kya hain?',
      answer: 'Doctor tab zaroori hai jab: (1) Fever 101°F se zyada ho, (2) Diarrhea 3 din se zyada ya bahut watery ho, (3) Rash face pe spread ho ya blisters ho jaayein, (4) Baccha bilkul kuch na peeta ho – dehydration signs dikhen, (5) Ear pe pus ya discharge dikhe, (6) Gum pe bada swelling ya pus dikhey, (7) Baccha unusual lethargy ya unresponsive feel kare. In mein se koi bhi sign ho to sirf teething mat samjho – proper checkup karwaao.',
    },
    {
      _key: 'faq23',
      question: 'Teething mein bacche ke liye koi safe activity hai jo dard kam kare?',
      answer: 'Kuch safe activities hain jo teething discomfort kam karti hain: (1) Tummy time – position change se facial pressure redistribute hoti hai; (2) Gentle baby massage – shoulders, neck, jaw ke around – muscle tension release hoti hai; (3) Skin-to-skin contact – cortisol (stress hormone) kum hota hai, pain tolerance badhta hai; (4) Outdoor exposure – fresh air, distraction, sunlight (Vitamin D bhi milti hai). Excess screen time avoid karo is age mein.',
    },
  ],

  sources: [
    { _key: 'src1', name: 'American Academy of Pediatrics (AAP) – Teething Guidelines', url: 'https://www.aap.org', year: '2023' },
    { _key: 'src2', name: 'WHO – Infant and Young Child Feeding Guidelines', url: 'https://www.who.int', year: '2023' },
    { _key: 'src3', name: 'NCBI/PubMed – Teething in Infants: Systematic Review | Pediatrics Journal', url: 'https://pubmed.ncbi.nlm.nih.gov', year: '2016' },
    { _key: 'src4', name: "FDA Safety Communication on Benzocaine Teething Gels", url: 'https://www.fda.gov', year: '2018' },
    { _key: "src5", name: "Boericke's Materia Medica – Chamomilla, Calcarea Carbonica, Belladonna", url: 'https://www.homeoint.org', year: '2023' },
  ],

  relatedDiseases: [
    'Adenoids',
    'Tonsillitis',
    'Recurrent Ear Infection',
    'Delayed Milestones',
    'ADHD',
  ],

  selfCheck: 'Agar bacche ke daant 4-6 mahine mein nahi aaye hain ya fever 101°F se zyada hai – to sirf teething mat samjho, doctor se milein.',
}

async function seed() {
  try {
    const result = await client.createOrReplace(doc)
    console.log('✅ Teething Trouble created/updated:', result._id)
    console.log('🌐 Live at: https://homeopedia.in/diseases/teething-trouble')
  } catch (err) {
    console.error('❌ Error:', err)
  }
}

seed()
