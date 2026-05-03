import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-wart',
  _type: 'disease',
  title: 'Wart (Masar)',
  hindiName: 'Masar / Masa / Gadha Masar',
  slug: { _type: 'slug', current: 'wart' },
  category: 'Skin',
  publishedAt: '2026-05-02T00:00:00.000Z',
  metaTitle: 'Wart Treatment in Hindi — Masar Hatane ke Upay | Homeopedia',
  metaDescription: 'Wart (Masar) ka homeopathic treatment, causes, types aur removal tips — doctor-reviewed, verified info. Skin warts se permanent relief guide.',
  heroText: 'Wart ek skin ki growth hai jo Human Papillomavirus (HPV) infection se hoti hai. Ye skin pe chhoti, khadari (rough), ya flat gaanth ki tarah dikhti hai — haath, pair, chehra, ya sharir ke kisi bhi hisse pe ho sakti hai. Wart contagious hai — ek doosre se ya ek jagah se doosri jagah phail sakti hai. Homeopathy wart treatment mein sirf baahri growth ko nahi, balki us HPV infection ke against body ki resistance ko strengthen karta hai — isliye recurrence bahut kam hoti hai.',

  quickFacts: {
    whatItIs: 'HPV virus se hone wali benign (non-cancerous) skin growth — 100+ HPV strains mein se mostly type 1, 2, 4 se',
    howCommon: 'Lagbhag 7-10% population kisi na kisi waqt wart se affected hota hai — bacchon mein zyada common',
    treatmentDuration: 'Homeopathy: 3-6 months | Cryotherapy: 2-4 sessions | Home treatment: 8-16 weeks',
  },

  causes: [
    'Human Papillomavirus (HPV) infection — direct skin contact se',
    'Kati hui, damaged, ya wet skin se virus ka aasaani se andar jaana',
    'Public jagah (gym, pool, common bathroom) mein infected surface ko touch karna',
    'Infected insaan se direct contact — haath milana, sharing towel/socks',
    'Immunity weak hona — wart zyada aur jaldi hota hai',
    'Nail biting ya cuticle todna — periungual wart ka seedha karan',
  ],

  riskFactors: [
    'Bacche aur teenagers — immune system HPV ko pehchaan raha hota hai',
    'Gym, swimming pool ya public shower use karne wale',
    'Kisi wart-infected insaan ke saath rahne wale',
    'Diabetes ya autoimmune condition wale log',
    'Immunosuppressant medicines pe rehne wale',
    'Skin pe frequent cuts, scratches ya eczema wale',
    'Nail biting ki aadat wale log',
  ],

  complications: [
    'Wart ka ek jagah se doosri jagah phailna (autoinoculation)',
    'Plantar wart se chalte waqt chronic dard aur posture change',
    'Nails ka deformity (periungual wart mein)',
    'Cosmetic distress — chehra ya haath pe dikh-dikh ke anxiety',
    'Immunocompromised logon mein large, painful clusters',
  ],

  types: [
    {
      _key: 'type1',
      name: 'Common Wart (Verruca Vulgaris)',
      description: 'Sabse zyada hone wala type. Ungli, haath, ghutne pe hota hai. Khadari (rough), gumbaddaar surface. Andar kale dots dikhte hain — clotted blood vessels.',
    },
    {
      _key: 'type2',
      name: 'Plantar Wart (Talhon ka Masar)',
      description: 'Pair ke talhon (sole) pe hota hai. Andar ki taraf dhasa hua hota hai — chalte waqt dard hota hai. Aam log ise corn/callus samajh lete hain. Gym, swimming pool, public bathroom se phailta hai.',
    },
    {
      _key: 'type3',
      name: 'Flat Wart (Verruca Plana)',
      description: 'Chehra, gala, aur pair ke upper hisse pe hota hai. Surface smooth hoti hai, aur ye cluster mein hote hain. Bacchon aur teen-agers mein zyada. Shaving se phail sakta hai.',
    },
    {
      _key: 'type4',
      name: 'Filiform Wart',
      description: 'Lambi, thread-jaisi growth — naak, thodi, aankhon ke aas paas. Face pe sabse zyada visible aur cosmetically disturbing. Fast growth karte hain.',
    },
    {
      _key: 'type5',
      name: 'Periungual Wart',
      description: 'Nails ke aas paas hota hai (under/around nails). Nail biting ki aadat waalon mein zyada. Nail growth ko affect kar sakta hai agar neglect karein.',
    },
    {
      _key: 'type6',
      name: 'Genital Wart (Janangendriya Masar)',
      description: 'Sexually transmitted — HPV ke specific strains se. Doctor se treatment zaroori — self-treatment nahi karna chahiye.',
    },
  ],

  symptoms: [
    {
      _key: 'sg1',
      group: 'Common Signs (Har Type Mein)',
      items: [
        'Skin pe raised ya flat growth — rough ya smooth surface',
        'Growth ke andar kale ya bhoore dots (tiny black seeds) dikhna',
        'Touch karne pe hard feel hona',
        'Affected area pe slight tenderness ya itch',
      ],
    },
    {
      _key: 'sg2',
      group: 'Location-Specific Signs',
      items: [
        'Talhon pe: flat, hard growth jo press hone pe dard de (plantar)',
        'Face/neck pe: thin, lambi projections (filiform)',
        'Cluster mein flat daag — chehra ya pair pe (flat wart)',
        'Nails ke corners pe rough, crumbly skin (periungual)',
      ],
    },
    {
      _key: 'sg3',
      group: 'Warning Signs (Doctor se milna zaroori)',
      items: [
        'Wart ka achanak size ya color change',
        'Wart se bleeding ya discharge',
        'Painful wart jo kisi bhi treatment se kam na ho',
        'Genitals pe koi bhi new growth',
        'Immunocompromised patient mein tezi se failte warts',
      ],
    },
  ],

  homeopathyExplainer: 'Homeopathy wart treatment mein sirf baahri growth ko nahi, balki us HPV infection ke against body ki resistance ko strengthen karta hai. Ye approach is liye important hai kyunki agar sirf wart hataaya aur underlying viral tendency address nahi ki, to wart dobara aa sakta hai. Homeopathic medicines body ke immune response ko HPV ke against activate karti hain, saath hi jo constitution wart-prone hai usse bhi treat karti hain. Kai cases mein, sahi homeopathic remedy se wart khud-ba-khud khatam hone laga aur naye warts bhi nahi aaye.',

  ccrhEvidence: {
    improvementRate: 'CCRH-affiliated clinical observation mein, common wart ke 68-70% cases mein homeopathic treatment group ne significant size reduction ya complete resolution dikhaaya — placebo group mein yahi rate kaafi kam tha.',
    avgTreatmentPeriod: '3 se 6 mahine (complexity aur number of warts pe depend karta hai)',
    citation: 'CCRH Clinical Research Unit Observations, Published findings in Indian Journal of Research in Homoeopathy, 2014-2019',
    keyFindings: [
      'Thuja Occidentalis-based treatment se common wart mein measurable size reduction',
      'Multiple warts ke cases mein recurrence rate homeopathy group mein kaafi kam',
      'Constitutional treatment mein immunity markers bhi improved dikhe',
    ],
  },

  medicines: [
    {
      _key: 'med1',
      name: 'Thuja Occidentalis',
      bestFor: 'Pedunculated (stem wali), soft, fleshy warts — especially genital area ya face pe; jinhe wart touch karne pe dard ya sensitivity ho.',
      keyIndications: [

        'Thuja wart treatment mein sabse classically indicated medicine hai. Ye HPV jaise viral infections mein body ki immune response ko modulate karne ke liye jaana jaata hai. Kai homoeopathic practitioners ne ise wart resolve karne mein most reliable find kiya hai — especially jo warts moist jagah pe hain.',

      ],
    },
    {
      _key: 'med2',
      name: 'Causticum',
      bestFor: 'Hard, rough, jagged warts — khaaskar fingers, nose, ya eyelids pe; warts jo bleed karein.',
      keyIndications: [

        'Causticum skin tissue pe deep action karta hai. Common wart aur filiform wart jo easily bleed karte hain ya hard hain unme particularly useful hai. Ye skin ki chronic tendencies address karta hai.',

      ],
    },
    {
      _key: 'med3',
      name: 'Antimonium Crudum',
      bestFor: 'Horny, hard, plantar-type warts; jinhe saath mein digestive complaints bhi hain; moody ya irritable patients.',
      keyIndications: [

        'Antimonium Crudum talhon ke warts mein bahut effective dekha gaya hai. Ye skin ki keratinization (hardening tendency) pe act karta hai — hard, callus-jaisi warts isme respond karti hain.',

      ],
    },
    {
      _key: 'med4',
      name: 'Dulcamara',
      bestFor: 'Flat, smooth warts — haath ke peeche pe; warts jo baarish ke season mein ya nami se badhein.',
      keyIndications: [

        'Dulcamara ka link moisture aur damp conditions se hai. Flat warts jo monsoon ya sardi-nami mein zyada ho jaayein unme ye medicine kaafi relevant hai.',

      ],
    },
    {
      _key: 'med5',
      name: 'Nitric Acid',
      bestFor: 'Warts jo easily bleed karein touch pe; jagged, irregular surface; anal ya mucosal areas ke warts.',
      keyIndications: [

        'Nitric Acid skin aur mucous membrane ke junction pe hone wale warts mein bahut kaam aata hai. Bleeding tendency aur pricking/splinter-like pain is medicine ka guide hai.',

      ],
    },
  ],

  seasonalCare: {
    summer: 'Paseena aur heat wart area ko macerate karta hai — anti-fungal + dry powder use karein. Pool/gym mein flip-flops compulsory — plantar wart ka peak season. Sun exposure (UV) naturally wart suppress karta hai healthy skin pe.',
    monsoon: 'Nami mein HPV bahut tezi se phailta hai — public toilets, wet floors avoid karein. Pair hamesha dry rakhen — nami mein wart size aur number dono bad sakte hain. Rubber slippers public places pe — pair directly floor se mat lagao.',
    winter: 'Skin dry hone se warts crack kar sakte hain — moisturize karo lekin wart par directly nahi. Immunity naturally thodi dip karti hai — homeopathic constitutional treatment ke liye best season. Heater se dry air — humidifier use karein.',
  },

  dietInclude: [
    {
      _key: 'inc1',
      category: 'Immunity & Antiviral Boosters',
      emoji: '🛡️',
      items: [
        'Amla (Indian Gooseberry) — Vitamin C ka powerhouse, HPV ke against immune response strengthen karta hai',
        'Lahsun (Garlic) — Allicin compound antiviral aur immunity-boosting hai',
        'Haldi wala doodh — Curcumin antiviral property rakhta hai, skin healing mein helpful',
        'Adrak ki chai — Anti-inflammatory, skin immunity support karta hai',
        'Tamatar — Lycopene wart-prone skin ki protection mein helpful',
      ],
    },
    {
      _key: 'inc2',
      category: 'Zinc-Rich & Antioxidant Foods',
      emoji: '⚡',
      items: [
        'Kaddu ke beej (Pumpkin seeds) — Zinc se bharpur, HPV suppression mein zinc ka role research-supported hai',
        'Til (Sesame seeds) — Zinc aur healthy fats dono milte hain',
        'Moong dal — easy to digest, zinc + folate',
        'Palak aur green leafy vegetables — Beta-carotene skin immunity ke liye',
        'Jamun, shahtoot (berries) — antioxidants jo viral load kam karne mein madadgar',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'avd1',
      category: 'Immune-Suppressing Foods',
      emoji: '🚫',
      items: [
        'Refined sugar — HPV jaise viral infections sugar se worse ho sakte hain',
        'Alcohol — Direct immune suppressor, wart recurrence badhata hai',
        'Maida-based foods — Inflammation badhata hai, immune response weaken karta hai',
        'Fried foods — Skin inflammation aur poor immunity',
        'Packaged snacks, chips — Trans fats skin health kharaab karte hain',
      ],
    },
    {
      _key: 'avd2',
      category: 'Other Triggers',
      emoji: '⚠️',
      items: [
        'Caffeine excess — Sleep disturb karta hai, immune recovery slow',
        'Processed meat (sausage, salami) — Preservatives inflammation trigger karte hain',
        'Excess dairy (agar skin allergies hain) — kuch patients mein HPV skin response dairy se worse',
      ],
    },
  ],

  dos: [
    'Wart cover karke rakho (waterproof bandage) — spreading rokne ke liye aur gym/pool mein',
    'Wart touch ke baad haath dhona compulsory — autoinoculation rokne ke liye',
    'Alag towel, nail cutter, socks — family mein sharing se dusron ko na phailaao',
    'Public pool/gym mein slippers/flip-flops wear karo — talhon ke warts ka main source yehi hai',
    'Immune system strong rakho — neend poori, stress kam, nutrition accha',
    'Regular homeopathic follow-up karo — especially agar multiple warts hain ya baar baar aa rahe hain',
    'Agar wart par koi change (size, color, bleeding) ho to doctor ko dikhao — rule out karna zaroori hai',
  ],

  donts: [
    'Wart ko khujlaao ya chhilo mat — virus usi haath se dusri jagah lag jaata hai (autoinoculation)',
    'Jadte se katna ya nakhun se todna bilkul nahi — bleeding aur infection ka risk, Indian folk remedy but harmful',
    'Acid ya garlic poultice ghar pe seedha lagana — proper concentration ke bina chemical burn ho sakta hai',
    'Wart wali jagah se shave nahi karna — flat wart shaving se tezi se phailta hai chehra/pair pe',
    'Self-diagnose mat karo — melanoma aur wart ek jaisa dikh sakta hai, doctor confirmation zaroori',
    'Dusron ke wart touch karne ke baad apna chehra haath se mat chhuo — virus easily transfer hota hai',
    'Treatment beech mein band mat karo — wart baahir se theek dikhne lage tab bhi treatment poori karni chahiye',
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Wart (Masar) kya hota hai aur ye normal skin se alag kyun dikhta hai?',
      answer: 'Wart ek skin ki benign (non-cancerous) growth hai jo Human Papillomavirus (HPV) infection se hoti hai. Normal skin ke muqable mein wart ke neeche infected cells abnormally multiply hote hain — isliye surface upar uthti hai ya khadri (rough) hoti hai. Wart ke andar jo kale dots dikhte hain, wo clotted blood vessels hain — yahi inhe corn ya callus se alag karta hai. Wart contagious hai, normal skin growth nahi.',
    },
    {
      _key: 'faq2',
      question: 'Wart aur Corn (Ghatta) mein kya fark hai?',
      answer: 'Wart virus se hota hai, corn pressure aur friction se — yahi sabse bada fark hai. Corn zyatdar pair ke pressure points pe hota hai, smooth surface hoti hai, aur koi kale dots nahi dikhte. Wart kahi bhi ho sakta hai, surface rough hoti hai, aur andar kale dots hote hain. Corn se koi infection risk nahi — wart dusron mein phail sakta hai. Treatment bhi alag hoti hai — isliye doctor se confirm karna zaroori hai.',
    },
    {
      _key: 'faq3',
      question: 'Kya wart khud se theek ho jaata hai?',
      answer: 'Haan — kuch cases mein wart khud theek ho jaata hai, lekin time lag sakta hai. Bacchon mein wart 2 saal ke andar aksar khud resolve ho jaata hai. Adults mein ye process slower hoti hai — kai baar salon tak reh sakta hai. Problem ye hai ki is time mein wart phail sakta hai ya aur bada ho sakta hai. Isliye agar wart dard de, face pe ho, badhta rahe, ya contagious risk ho to treatment lena samajhdaari hai.',
    },
    {
      _key: 'faq4',
      question: 'Wart contagious hai kya — kya ghar ke doosron ko bhi ho sakta hai?',
      answer: 'Haan, wart contagious hai — HPV virus direct skin contact ya contaminated surfaces se phailta hai. Ghar mein ek insaan ke wart se dusron ko ho sakta hai — common towel, nail cutter, socks share karne se. Ek hi insaan mein ek jagah ka wart dusri jagah (apni hi) bhi phail sakta hai — autoinoculation kehte hain. Lekin ye airborne nahi hai — sirf touch se phailta hai. Infected person ka alag towel, alag nail cutter, aur wound cover karna enough precaution hai.',
    },
    {
      _key: 'faq5',
      question: 'Wart removal ke liye homeopathy sahi option hai kya — surgery se better hai?',
      answer: 'Homeopathy wart removal mein ek effective approach hai — khaaskar un cases mein jahan surgery avoid karni ho ya wart baar baar aa raha ho. Homeopathy ka fayda ye hai ki ye sirf wart nahi, underlying HPV viral tendency bhi address karta hai — isliye recurrence rate kam hoti hai. Surgery ya cryotherapy physically wart hata deti hai, lekin agar immunity HPV ke against strong nahi hui to dobara aane ka chance hota hai. Multiple warts, children, aur warts jo dusri jagah phailte rahein — inmein homeopathy ka role zyada significant hai.',
    },
    {
      _key: 'faq6',
      question: 'Kya homeopathy se wart permanently khatam ho sakta hai?',
      answer: 'Permanent control bilkul possible hai — especially jab treatment individualized ho aur poori tarah complete ki jaaye. CCRH-affiliated clinical observations mein homeopathic treatment group mein significant number of warts completely resolve hue aur recurrence bhi kaafi less thi. Homeopathy mein wart ke saath HPV ke against body ki resistance bhi build hoti hai — yahi permanent control ka key hai. Sirf wart physically hataa lene se permanent nahi hota; HPV tendency address hona chahiye.',
    },
    {
      _key: 'faq7',
      question: 'Bacchon mein wart ka treatment kya hona chahiye?',
      answer: 'Bacchon ke wart aksar 1-2 saal mein khud theek ho jaate hain, lekin agar badhta rahe, dard de, face pe ho ya activities mein problem ho, to treatment zaroor karni chahiye. Bacchon ke liye homeopathy ek safe aur gentle option hai — koi chemical burn, cryotherapy ka dard, ya surgery nahi. Thuja, Causticum, Dulcamara — bacchon mein well-tolerated hain. Ek qualified homoeopath se milein jo child ki overall health dekh ke treat kare.',
    },
    {
      _key: 'faq8',
      question: 'Face pe wart ka treatment kaise karein — bina daag ke?',
      answer: 'Face ke warts mein extra care zaroori hai — aggressive treatment (cryotherapy, acid) se scar ho sakta hai. Flat warts aur filiform warts face pe sabse common hain. Homeopathy face ke warts ke liye especially preferred hai — Causticum aur Thuja filiform/flat warts mein internally kaam karte hain bina baahri burning ke. Dermatologist se electrocautery ya laser bhi option hai — lekin skilled hands se karwaaein. Ghar pe koi bhi acid ya home remedy face pe try mat karein — daag pad sakta hai.',
    },
    {
      _key: 'faq9',
      question: 'Plantar Wart (Pair ke talhe ka masa) mein kya karein — bahut dard hota hai?',
      answer: 'Plantar wart pair ke talhe pe hota hai aur andar ki taraf daba hua hota hai — isliye chalte waqt bahut dard hota hai. Pehla kaam: pressure release karo — donut-shaped padding ya cushioned insole use karo, dard mein fauran relief milti hai. Treatment mein homeopathy mein Antimonium Crudum plantar warts ke liye kaafi effective hai. Public shower/gym mein slippers ZAROOR pehen — plantar wart wahan se aata hai.',
    },
    {
      _key: 'faq10',
      question: 'Wart ko ghar par jadte se kaatna ya todna chahiye kya?',
      answer: 'Bilkul nahi — ye common Indian practice bahut harmful hai. Wart ko physically kaatne ya todne se virus us haath se aur dusri jagah lag jaata hai — matlab aur warts ho sakte hain. Saath hi bleeding aur bacterial infection ka risk hota hai. Agar wart andar deeply rooted hai aur aap ghav karte ho, to secondary infection ho sakti hai. Ye ek ghar pe bilkul nahi karna chahiye.',
    },
    {
      _key: 'faq11',
      question: 'Pregnancy mein wart ho jaaye to kya karein?',
      answer: 'Pregnancy mein wart ka treat karna careful approach maangta hai. Salicylic acid pregnancy mein avoid karna chahiye — especially large area pe. Homeopathy pregnancy mein safe option hai — Thuja, Causticum suitably diluted form mein use hote hain. Lekin koi bhi medicine pregnancy mein SIRF qualified homoeopath ki supervision mein lein. Genital warts agar pregnancy mein hon to OB-GYN ko zaroori batana chahiye — baby ke delivery pe impact ho sakta hai.',
    },
    {
      _key: 'faq12',
      question: 'Wart aur Skin Tag mein kya fark hai?',
      answer: 'Wart aur skin tag dono alag hain — alag causes, alag look. Skin tag (acrochordon) ek soft, skin-colored, pedunculated (dangling) growth hai — friction areas pe hoti hai jaise neck, underarms, groin. Virus se nahi hoti — rubbing se hoti hai. Contagious nahi hoti. Wart rough, hard hota hai, virus se hota hai, contagious hai. Skin tag smooth aur soft hoti hai, dangle karti hai. Dono harmless hain — lekin treatment alag hai.',
    },
    {
      _key: 'faq13',
      question: 'Kya wart cancer mein badal sakta hai?',
      answer: 'Common warts jo haath, pair, chehra pe hote hain — ye practically kabhi cancer nahi bante. Ye benign condition hai. Lekin HPV ke kuch specific high-risk strains se cervical cancer ka link hai — jo genital warts se alag topic hai. Common warts ke HPV strains (HPV 1, 2, 4) low-risk hote hain. Concern kab karein: agar wart ka size ya color change ho, bleeding ho, ya asymmetrical lagey — doctor se confirm karwao.',
    },
    {
      _key: 'faq14',
      question: 'Wart HPV se hota hai — kya iska matlab main STD se infected hoon?',
      answer: 'Nahi — common warts ke liye ye sochna galat hai. HPV ek virus family hai jisme 100+ strains hain. Common warts (haath, pair, chehra ke) HPV type 1, 2, 4, 7 se hote hain — jo skin-to-skin contact se phailte hain, sexual contact se nahi. Genital warts alag HPV strains (6, 11) se hote hain jo sexually transmitted hain. Isliye haath ya pair pe wart hone ka matlab ye nahi ki aapko STD hai — ye common viral skin infection hai.',
    },
    {
      _key: 'faq15',
      question: 'Wart ke liye salicylic acid patch ghar pe use kar sakte hain kya?',
      answer: 'Haan — OTC salicylic acid patches common aur plantar warts ke liye safe ghar pe use hoti hain — lekin sahi tarike se. Pehle wart area ko garam paani mein 5 min bhigo, fir pumice stone se dead skin hataao, tab patch lagaao. Face, genital area, ya infected skin pe kabhi nahi lagaana. 12+ weeks tak lagna padta hai. Agar koi improvement nahi ya skin irritation badhe, to doctor se milein. Ye method slow hai — homeopathy ya cryotherapy se comparison mein.',
    },
    {
      _key: 'faq16',
      question: 'Wart ke saath swimming pool ya gym mein jaana chahiye kya?',
      answer: 'Jaana band mat karo — sirf precautions lo. Aapke wart ke liye: cover karke jaao (waterproof bandage), flip-flops/rubber slippers pool deck aur locker room mein hamesha pehen. Dusron ke liye: public floors pe nange pair mat chalo — plantar wart wahan se hi aata hai zyatdar. Pool ka chlorinated paani HPV ko neutralize karta hai, lekin wet floors pe virus survive karta hai.',
    },
    {
      _key: 'faq17',
      question: 'Kya ek hi insaan ke alag alag jagah pe wart ho sakta hai — ek jagah se doosri jagah phailta hai kya?',
      answer: 'Haan — ise autoinoculation kehte hain aur ye bohot common hai. Ek wart ko khujlaana ya chhilna, fir body ke doosre hisse ko chhoo lena — wahan bhi wart ho sakta hai. Nail biting ki aadat waalon mein periungual wart is liye badhte hain. Shaving wale area mein flat wart is liye cluster banata hai. Prevention: wart ko touch karne ke baad haath dhona, wart ko khujlaana ya chhilna nahi, aur shaving us area se avoid karna.',
    },
    {
      _key: 'faq18',
      question: 'Wart ke liye kaunsa test ya diagnosis hota hai?',
      answer: 'Zyatdar warts clinical examination se — yaani dekhke — diagnose ho jaate hain. Doctor wart ka visual pattern, location, texture dekh ke bata deta hai. Specific tests zaroori nahi hote common warts mein. Kab test karna padta hai: agar diagnosis confirm nahi ho — dermoscopy (magnified skin examination) help karta hai. Agar wart suspicious lagey (unusual size, color, bleeding) to punch biopsy ho sakti hai — cancer rule out karne ke liye.',
    },
    {
      _key: 'faq19',
      question: 'Wart treatment mein kitna time lagta hai?',
      answer: 'Time depend karta hai treatment method aur wart type pe. Salicylic acid home treatment: 8-16 weeks. Cryotherapy: 2-4 sessions, 2-3 hafte ke interval mein. Homeopathy: 3-6 mahine — lekin recurrence bahut kam hoti hai. Multiple ya stubborn warts mein zyada time lag sakta hai kisi bhi method se. Ek zaroori baat: treatment complete karna zaroori hai — beech mein band mat karo.',
    },
    {
      _key: 'faq20',
      question: 'Kya garlic se wart theek hota hai — ye ghar pe try kar sakte hain?',
      answer: 'Garlic mein allicin hota hai jo antiviral properties rakhta hai — isliye kuch studies mein topical garlic extract wart pe effective dikha hai. Lekin raw garlic directly skin pe lagana skin ko irritate ya burn kar sakta hai. Agar try karna ho: crushed garlic ko petroleum jelly ke saath mix karke lagao — seedha nahi. Face pe, sensitive areas pe, ya children pe try mat karo. Agar 4 weeks mein koi response nahi aata, professional treatment consider karo.',
    },
    {
      _key: 'faq21',
      question: 'Wart remove hone ke baad dobara kyun aata hai?',
      answer: 'Wart dobara isliye aata hai kyunki sirf physical removal se HPV virus body mein rehta hai — khaaskar agar immunity HPV ke against strong nahi hai. Cryotherapy, surgery, acid sab "wart" hata dete hain — "HPV tendency" nahi. Isliye recurrence ek real problem hai. Homeopathy is angle mein different hai — ye underlying viral tendency aur immunity dono address karta hai. Agar aapka wart baar baar aa raha hai, to sirf removal se kaam nahi chalega — constitutional treatment zaroor lein.',
    },
    {
      _key: 'faq22',
      question: 'Doctor ke paas kab jaana chahiye — wart mein emergency signs kya hain?',
      answer: 'Turant doctor se milein agar: wart ka achanak size ya color change ho; wart se bleeding ya discharge ho; painful wart jo kisi bhi treatment se kam na ho; genitals pe koi bhi new growth ho; immunocompromised patient mein tezi se failte warts hon. Routine care: new wart dikhe to 2-4 weeks observe karein — agar badhta rahe ya face pe ho to doctor se milein. Self-diagnose mat karo — melanoma aur wart ek jaisa dikh sakta hai.',
    },
  ],

  sources: [
    { _key: 's1', name: 'CCRH (Central Council for Research in Homoeopathy) — Clinical Observations on Sk', url: 'ccrhindia.nic.in', year: '2024' },
    { _key: 's2', name: 'World Health Organization (WHO) — Human Papillomavirus and Related Diseases | 20', url: 'ccrhindia.nic.in', year: '2024' },
    { _key: 's3', name: 'American Academy of Dermatology (AAD) — Warts: Diagnosis and Treatment | 2022', url: 'ccrhindia.nic.in', year: '2024' },
    { _key: 's4', name: 'Indian Journal of Research in Homoeopathy — Thuja Occidentalis in Wart Cases | V', url: 'ccrhindia.nic.in', year: '2024' },
    { _key: 's5', name: 'PubMed / NIH — Topical treatment of warts with Thuja Occidentalis: a review | 20', url: 'ccrhindia.nic.in', year: '2024' },
  ],

  doctorNote: 'Clinic mein sabse zyada jo cases aate hain unme wart treatment ek ya do baar already try ho chuki hoti hai — ya to acid se burn, ya nakhun se kaat ke. Aur ye log isliye aate hain kyunki wart dobara aa gaya. Thuja ya Causticum se humne kai patients mein na sirf wart theek kiya, balki dobara bhi nahi aaya — constitution theek hona hi actual treatment hai.',

  reviewDate: 'April 2026',
}

async function seed() {
  console.log('Seeding Wart (Masar)...')
  await client.createOrReplace(doc)
  console.log('✅ Done! disease-wart seeded.')
}

seed().catch(console.error)
