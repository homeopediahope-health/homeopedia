import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-molluscum-contagiosum',
  _type: 'disease',
  title: 'Molluscum Contagiosum',
  hindiName: 'Chechak Jaisi Phunsiyan / Pani Wale Daane / Viral Skin Bumps',
  slug: { _type: 'slug', current: 'molluscum-contagiosum' },
  category: 'Skin',
  publishedAt: '2026-05-03T00:00:00.000Z',
  metaTitle: 'Molluscum Contagiosum Treatment in Hindi | Homeopedia',
  metaDescription: 'Molluscum Contagiosum ke daane ka homeopathic treatment, types, diet aur care — verified info, doctor-reviewed. Bacchon aur adults dono ke liye.',
  heroText: 'Molluscum Contagiosum ek viral skin infection hai jo Molluscum Contagiosum Virus (MCV) se hoti hai. Is mein skin pe chote, gol, chamkile daane nikalte hain — bilkul moti jaise, beech mein ek gehri dot ke saath. Ye daane face, neck, chest, arms, aur intimate areas pe ho sakte hain. Ye bimari chune se ya infected cheez share karne se failti hai — isliye bacchon mein bahut common hai. Akele mein bhi theek ho sakti hai, lekin sahi treatment se jaldi aur cleanly resolve hoti hai.',

  quickFacts: {
    whatItIs: 'Ek common viral skin infection jo kisi bhi age mein ho sakti hai — lekin 1-14 saal ke bacchon mein sabse zyada dikhti hai',
    howCommon: 'India mein dermatology OPDs mein molluscum cases tropical climate aur overcrowded living conditions ki wajah se western countries se zyada dikhte hain',
    treatmentDuration: 'Homeopathic treatment se average 3-6 mahine mein significant resolution — self-resolution ke wait mein 1-2 saal lag sakte hain',
  },

  causes: [
    'Molluscum Contagiosum Virus (MCV) — ye Poxvirus family ka member hai, 4 types hote hain (MCV-1 sabse common, especially bachon mein)',
    'Direct skin-to-skin contact — infected person se haath milana, hug karna, ya intimate contact',
    'Contaminated objects share karna — towel, kapde, swimming pool toys, razor, gym equipment',
    'Auto-inoculation — khud apne daane khujlane se virus dusri jagah failna',
    'Sexual contact — adults mein genital molluscum ka main cause',
    'Compromised immunity — HIV, immunosuppressant medicines, ya chronic illness se body ki virus-fighting capacity kam hoti hai',
  ],

  riskFactors: [
    '1 se 10 saal ke bachche — skin zyada sensitive, immunity nayi hoti hai',
    'Atopic dermatitis (eczema) ke patients — skin barrier weak hoti hai jisse virus aasaani se ghus jaata hai',
    'HIV/AIDS ya other immunodeficiency conditions',
    'Wrestlers, swimmers, gymnasts — shared equipment aur close contact',
    'Tropical aur humid climate mein rehne wale — India mein monsoon season mein cases significantly badhte hain',
    'Daycare ya school-going bachche — close contact environment',
  ],

  complications: [
    'Secondary bacterial infection — khujlane se wound mein bacteria ghus sakta hai, impetigo ya cellulitis ho sakti hai',
    'Scarring — agar daane baar baar khujaye ya forcefully tode jaayein',
    'Spreading to large body areas — auto-inoculation se pura upper body ya face affected ho sakta hai',
    'Conjunctivitis — aankh ke paas daane hon to aankh ki infection ka risk',
    'Psychological impact — especially teens aur adults mein, genital location hone par embarrassment aur anxiety',
  ],

  types: [
    {
      _key: 'type1',
      name: 'Classical Molluscum (Bacchon Mein Sabse Zyada)',
      description: 'Age group: 1 se 14 saal. Body parts: face, neck, arms, trunk. Cause: infected bachche se direct contact ya shared towel/toys. Appearance: flesh-colored, 2-5 mm, central dimple wale daane. Ye sabse common type hai.',
    },
    {
      _key: 'type2',
      name: 'Adult-onset / Sexually Transmitted Molluscum',
      description: 'Age group: 15-45 saal (sexually active adults). Body parts: groin, inner thighs, lower abdomen, genitals. Cause: sexual contact ya intimate skin-to-skin contact. Same gol daane but cluster mein aane ki zyada tendency.',
    },
    {
      _key: 'type3',
      name: 'Immunocompromised Molluscum (Sabse Difficult Type)',
      description: 'Kise hota hai: HIV+ patients, transplant patients, ya long-term steroid users. Daane zyada bade, zyada sankhya mein, aur face pe typically hote hain. Treatment response slower hoti hai — systemic immune support zaroori hai. Constitutional homeopathic treatment yahaan particularly helpful hai.',
    },
    {
      _key: 'type4',
      name: 'Atopic / Eczema-associated Molluscum',
      description: 'Jo patients pehle se eczema se pareshan hain unhe molluscum zyada easily pakad leta hai aur zyada failta hai. Scratching se auto-inoculation — ek se doosri jagah failna main challenge hai. Eczema aur molluscum dono saath treat karne chahiye.',
    },
    {
      _key: 'type5',
      name: 'Eyelid / Periocular Molluscum',
      description: 'Location: aankh ke paas ya eyelid pe daane. Risk: agar treat na ho to chronic conjunctivitis ho sakta hai. Is type mein ophthalmologist se bhi milna chahiye.',
    },
  ],

  medicines: [
    {
      _key: 'med1',
      name: 'Thuja Occidentalis',
      bestFor: 'Bachche aur adults jisme daane soft, wart-jaisi surface ke saath hain aur general immunity low lagti ho — infections baar baar aate hain.',
      keyIndications: [
        'Viral wart-type lesions — smooth, gol, flesh-colored daane jo slow resolution dete hain',
        'Low general immunity — har mauzam mein koi na koi infection pakad leta hai',
        'MCV jaisi growth-producing viral infections mein antiviral + immune-stimulating action',
      ],
    },
    {
      _key: 'med2',
      name: 'Calcarea Carbonica',
      bestFor: 'Fair skin, easily sweating, slightly overweight bachche ya adults — jo baar baar infections pakad lete hain, physically sluggish lagte hain.',
      keyIndications: [
        'Sluggish, easily fatigued constitution — baar baar viral infections ka pattern',
        'Sweat especially head pe — chilly, cold-sensitive patient',
        'Immune system ki underlying weakness address karna jisse molluscum baar baar aata hai',
      ],
    },
    {
      _key: 'med3',
      name: 'Silicea (Silica)',
      bestFor: 'Thin, chilly, easily tired patients — jinhe pus-forming infections tendency ho aur daane mein whitish cheesy content zyada ho.',
      keyIndications: [
        'Body mein foreign material ko bahar nikalne ki process stimulate karta hai (expulsion)',
        'Cheesy viral content ki natural resolution mein help — secondary infection risk wale cases',
        'Thin, chilly, nervous constitution — slow healing tendency wale patients',
      ],
    },
    {
      _key: 'med4',
      name: 'Natrum Muriaticum',
      bestFor: 'Adults ya older kids jisme molluscum emotionally stressful situations ke baad aaya ho — grief, loneliness, ya repeated disappointment history.',
      keyIndications: [
        'Viral infections jo stress ya grief ke trigger ke baad appear hoti hain',
        'Emotional suppression se linked immune dysregulation',
        'Reserved, introverted nature — consoles se worse; alone rehna prefer karta hai',
      ],
    },
    {
      _key: 'med5',
      name: 'Dulcamara',
      bestFor: 'Jinke daane wet season (monsoon) ya damp cold environment mein badh jaate hain — seasonal aggravation clear ho.',
      keyIndications: [
        'Skin conditions jo humidity aur dampness se trigger ya worsen hoti hain',
        'India ke monsoon mein molluscum spread — classic pattern match',
        'Cold, wet, damp weather mein aggravation — warmth se relief',
      ],
    },
  ],

  dietInclude: [
    {
      _key: 'inc1',
      category: 'Antiviral Immunity Boosters',
      emoji: '🛡️',
      items: [
        'Amla (Indian gooseberry) — Vitamin C ka powerhouse, antiviral immunity strong karta hai',
        'Lahsun (garlic) — allicin compound mein proven antiviral properties, daily use helpful',
        'Tulsi tea — natural antiviral, specially MCV jaisi viral infections mein body ki defense improve karta hai',
        'Haldi (turmeric) milk — curcumin antiviral aur anti-inflammatory, viral infection se ladne mein support',
        'Coconut water — natural antiviral medium-chain fatty acids (lauric acid) provide karta hai',
      ],
    },
    {
      _key: 'inc2',
      category: 'Skin Healing & Immune Support',
      emoji: '🌿',
      items: [
        'Gajar (carrot) aur sweet potato — beta-carotene se bharpoor, skin cell repair aur viral clearance mein help',
        'Palak aur hare patte — zinc aur iron provide karte hain jo skin immunity ke liye zaroori minerals hain',
        'Sprouts (moong, chana) — zinc aur B-vitamins se rich, viral infections mein recovery speed up karte hain',
        'Pumpkin seeds — zinc ka excellent source, skin healing aur antiviral immunity ke liye critical',
        'Dahi (plain yogurt) — probiotics gut microbiome balance karte hain jo directly immune response affect karta hai',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'avd1',
      category: 'Immune Suppressors',
      emoji: '🚫',
      items: [
        'Refined sugar (mithai, cold drinks, candy) — sugar directly immune cells ki efficiency ghata deta hai',
        'Maida based foods (white bread, biscuits) — gut inflammation badhate hain, immune function disturb karta hai',
        'Deep-fried foods (pakode, chips) — inflammatory oils skin barrier damage karte hain, healing slow hoti hai',
        'Cold drinks aur ice cream — immunity weak karti hain, especially monsoon mein avoid karein',
        'Alcohol (adults) — immune suppression directly karta hai, viral shedding period bada ho sakta hai',
      ],
    },
    {
      _key: 'avd2',
      category: 'Skin Irritants',
      emoji: '⚠️',
      items: [
        'Packaged fruit juices — high sugar + preservatives = immune suppression + skin inflammation',
        'Processed meats — preservatives aur additives viral recovery mein interference karte hain',
        'Excess full-fat dairy — kuch children mein mucus production aur immune dysregulation se link hai',
      ],
    },
  ],

  seasonalCare: {
    summer: 'Garmi (March - May) — Sweating se skin maceration, virus aasaani se enters. Outdoor play mein bacchon ke beech direct contact zyada. Precautions: loose, breathable cotton kapde pehnao; sweat ke baad turant wash karein; sunscreen lagao — UV se skin barrier weak hoti hai.',
    monsoon: 'Monsoon (June - September) — Highest Risk Season. Humidity aur dampness mein MCV virus zyada survive karta hai. Shared pools, gym, aur wet surfaces pe risk double. Swimming pool aur public water sources se door rahein. Wet clothes turant change karein. Daily shower mandatory, sharing kuch bhi nahi. Thuja ya Dulcamara constitutional support is season mein helpful.',
    winter: 'Sardi (November - February) — Direct molluscum risk kam, lekin eczema flare se molluscum risk badh jaata hai. Dry skin scratching se existing daane fail sakte hain. Coconut oil ya mild moisturizer use karein (non-shared bottle). Woolen clothes directly skin pe mat pehnao — itch badhti hai. Eczema patients mein winter mein preventive homeopathy continue rakho.',
  },

  dos: [
    'Daane ko clean, dry rakho — rozana gentle sabun se wash karo, seedha sun exposure se bachao',
    'Alag towel use karo — family mein infection failne se rokta hai, ek ka towel dusra kabhi na use kare',
    'Nails short rakho (especially bacchon ke) — scratching se auto-inoculation aur secondary bacterial infection dono rokta hai',
    'Homeopathic doctor se complete history dilvao — aapka overall health, stress pattern, eczema history sab bataao',
    'Regular follow-up karo — daane mein change track karo, nayi lesions ka pattern monitor karo',
    'Infected area pe loose clothing pehnao — tight kapde rubbing karte hain jo auto-spread badhata hai',
    'Bacche ke school ko briefly inform karo — contact sport restrictions ke baare mein; normal activities mein koi restriction nahi',
  ],

  donts: [
    'Daane mat chero, dabo, ya khujlao — ye sabse bada mistake hai, virus fingers pe aata hai aur dusri jagah failta hai',
    'Kisi aur ke towel, kapde ya razor share mat karo — MCV surfaces pe kuch ghante survive kar sakta hai',
    'Over-the-counter cryotherapy ya acid kits ghar mein mat lagao — galat use se permanent scarring ho sakta hai',
    'Daane khud needle se mat phatao — bacterial infection ka serious risk, scar bhi rah sakta hai',
    'Swimming pool mein mat jaao jab tak daane active hain — public pool mein infection failti hai',
    'Stress ignore mat karo — viral infections mein stress ek major trigger hai',
    'Beech mein treatment band mat karo — molluscum 3-6 mahine ka process hai, incomplete treatment mein relapse common hai',
  ],

  ccrhEvidence: {
    improvementRate: '70%',
    avgTreatmentPeriod: '3-5 mahine constitutional treatment',
    citation: 'CCRH — Annual Research Report 2018-19 | New Delhi | ccrhindia.nic.in',
    keyFindings: [
      'Thuja-based constitutional treatment ne bachon mein 3-5 mahine mein scar-free resolution di',
      'Cryotherapy ya curettage se avoid — homeopathy gentle resolution without procedural pain',
      'Eczema ke saath molluscum cases mein constitutional treatment se dono conditions improve',
    ],
  },

  homeopathyBenefits: [
    'Painful procedures (freezing, curettage) se bachata hai — specially bachon ke liye bahut better option',
    'Sirf daane nahi, underlying immune weakness bhi address hoti hai — recurrence rate kam',
    'Eczema + molluscum combination mein ek constitutional medicine dono ko cover karti hai',
    'No scarring risk — gentle resolution hoti hai, skin marks nahi rehte',
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Molluscum Contagiosum ka homeopathic treatment kitne din mein kaam karta hai?',
      answer: 'Molluscum Contagiosum ka homeopathic treatment generally 6 hafte se 6 mahine tak kaam karta hai — daano ki sankhya, patient ki immunity, aur infection kitni purani hai iske hisaab se vary karta hai. Pehle 2-3 mahine mein naye daane aana band hote hain, phir existing daane chhote hokar resolve hone lagte hain. Bachon mein generally adults se jaldi response milta hai. Jo patients eczema ke saath molluscum laate hain unhe thoda zyada waqt lag sakta hai — isliye treatment beech mein band nahi karni chahiye.',
    },
    {
      _key: 'faq2',
      question: 'Kya Molluscum Contagiosum apne aap theek ho jaata hai?',
      answer: 'Haan — molluscum theoretically "self-limiting" infection hai aur 2 saal mein apne aap resolve ho sakta hai. Lekin "2 saal" ek bahut lamba waqt hai, aur is dauraan infection school, family, aur naye body parts mein fail sakta hai. Bacchon aur active adults mein wait karna practically mushkil hota hai. Homeopathic treatment se ye resolution period 3-6 mahine mein aa sakta hai — infection bhi ruk jaati hai aur immune system bhi strengthen hota hai.',
    },
    {
      _key: 'faq3',
      question: 'Molluscum Contagiosum treatment ke liye kaunsi homeopathic medicine best hai?',
      answer: 'Sab patients ke liye ek "best medicine" nahi hoti — homeopathy individualized approach follow karta hai. Thuja Occidentalis sabse commonly prescribed medicine hai viral skin lesions mein. Calcarea Carbonica weak immunity wale, easily sick hone wale patients ke liye. Silicea cheesy discharge tendency aur slow healing ke liye. Lekin aapke symptoms, body type, aur complete health history dekh ke hi sahi medicine decide hoti hai — self-medication avoid karein.',
    },
    {
      _key: 'faq4',
      question: 'Bacchon mein Molluscum Contagiosum ka treatment safe hai kya?',
      answer: 'Haan — homeopathy bacchon ke molluscum treatment ke liye ek safe option hai. Conventional methods jaise cryotherapy (freezing) ya curettage (scraping) painful hote hain aur chhote bachche bardasht nahi kar paate. Homeopathic medicines highly diluted hoti hain — koi harsh chemicals ya painful procedures nahi. Iske saath gentle hygiene routine (alag towel, nails short) follow karna zaroori hai.',
    },
    {
      _key: 'faq5',
      question: 'Molluscum Contagiosum aur chickenpox (chechak) mein kya fark hai?',
      answer: 'Molluscum aur chickenpox dono viral infections hain lekin bilkul alag viruses se. Chickenpox ke daane pani se bhare, zyada itchy, aur poore body pe ek saath nikalte hain — aur fever, thakaan bhi aati hai. Molluscum ke daane firm, gol, beech mein dimple wale hote hain — koi fever nahi, aur aahista aahista nikalte hain, touch se failte hain. Chickenpox ek baar hoti hai, molluscum baar baar fail sakti hai agar immunity weak ho.',
    },
    {
      _key: 'faq6',
      question: 'Kya Molluscum Contagiosum se daag (scars) rehte hain?',
      answer: 'Agar daane apne aap ya treatment se naturally resolve hote hain to daag rehne ka risk bahut kam hai. Daag tab badhta hai jab daane khujlaaye jaayein ya forcefully tode jaayein, secondary bacterial infection ho jaaye, ya cryotherapy/curettage galat tarike se ki jaaye. Homeopathic treatment mein gentle resolution hoti hai isliye scarring risk kam rehta hai. Agar daane ek saath aadhe se zyada najaiz tore gaye ho to chhoti discolouration 6-12 mahine mein fade ho jaati hai.',
    },
    {
      _key: 'faq7',
      question: 'Molluscum Contagiosum contagious hai — school bhejein ya nahi?',
      answer: 'Molluscum direct skin contact se failta hai — casual contact se nahi. Iska matlab ye hai ki class mein baithna, padhna, baat karna bilkul safe hai. Restrict karna sirf contact sports (wrestling, gymnastics), shared pool ya shared towels ke liye chahiye. Daane covered rakho (loose clothing se), nails short rakho, aur school ko briefly inform karo. Zyada restrictions ki zaroorat nahi — life normal chalti rehni chahiye.',
    },
    {
      _key: 'faq8',
      question: 'Molluscum Contagiosum gharelu ilaaj — kya ghar pe kuch kar sakte hain?',
      answer: 'Ghar pe kuch supportive cheezein zaroor kar sakte hain: Tea tree oil (diluted — 5% in coconut oil): mild antiviral, daane pe laga sakte hain par seedha nahi; Coconut oil: lauric acid ki wajah se mild antiviral effect hai. Ye sirf supportive hain — primary treatment doctor se leni chahiye. Ghar pe needle, pin ya forceful pressing KABHI nahi karna chahiye.',
    },
    {
      _key: 'faq9',
      question: 'Eczema hai aur Molluscum Contagiosum bhi ho gaya — ab kya karein?',
      answer: 'Ye combination thoda challenging hai kyunki eczema ki wajah se skin barrier weak hoti hai — molluscum zyada aasaani se fail jaata hai. Sabse pehle khujlana band karein — eczema ki itch scratch karne se molluscum dusri jagah pohnch jaata hai. Homeopathy mein dono conditions ek saath address ki ja sakti hain — ek constitutional medicine often dono ko cover karti hai. Ek experienced homoeopath se milein jo dono ki history saath le.',
    },
    {
      _key: 'faq10',
      question: 'Molluscum Contagiosum face pe ho jaaye to kya karein?',
      answer: 'Face ke molluscum mein khaas dhyan chahiye kyunki yahan conventional aggressive treatments (strong acids, large cryotherapy) skin ko nuksaan de sakti hain. Homeopathic treatment face molluscum ke liye zyada gentle option hai — no scarring risk, no hyperpigmentation. Agar daane aankh ke bilkul paas hain to ophthalmologist se bhi milein — eye molluscum se chronic conjunctivitis ka risk hota hai. Chehra chune ke baad haath dhona aur face towel alag rakhna zaroori hai.',
    },
    {
      _key: 'faq11',
      question: 'Molluscum Contagiosum swimming pool se failta hai kya?',
      answer: 'Swimming pool se molluscum failne ke strong evidence hain — khaaskar shared pool floats, kickboards, ya pool side seating se. Chlorinated paani virus ko immediately kill nahi karta. Active molluscum mein pool mein jaana avoid karein — dusron ke liye bhi risk hai, apne daane bhi zyada fail sakte hain water contact se. Daane completely resolve hone ke 4-6 hafte baad pool jaana safer hai.',
    },
    {
      _key: 'faq12',
      question: 'Molluscum Contagiosum pregnancy mein dangerous hai kya?',
      answer: 'Pregnancy mein molluscum generally serious nahi hoti — lekin treatment thodi careful honi chahiye. Conventional treatments (salicylic acid, retinoids) pregnancy mein avoid karte hain. Homeopathy yahaan ek reasonable option hai — highly diluted medicines hain. Lekin koi bhi treatment lene se pehle apne OB/GYN aur homeopathic doctor dono se consult zaroor karein.',
    },
    {
      _key: 'faq13',
      question: 'Kya Molluscum Contagiosum sexually transmitted disease (STD) hai?',
      answer: 'Adults mein genital molluscum sexually transmitted ho sakti hai — isliye isko STI category mein rakha jaata hai. Lekin iska matlab ye nahi ki har case sexual contact se hai — bachon mein to ye bilkul innocently towel ya play contact se hoti hai. Genital area mein molluscum dikhne pe panic mat karein — doctor se open discussion karein, STI panel check karwayein agar zaroorat ho, aur treatment start karein.',
    },
    {
      _key: 'faq14',
      question: 'Molluscum Contagiosum ke liye kya koi test hota hai?',
      answer: 'Zyada cases mein test ki zaroorat nahi hoti — experienced doctor clinical examination se hi diagnose kar leta hai. Daane ki specific appearance (central dimple + firm texture) almost diagnostic hai. Agar doubt ho to dermatoscopy (magnified skin view) helpful hai. Immunocompromised patients mein ya atypical presentation mein skin biopsy confirm kar sakti hai.',
    },
    {
      _key: 'faq15',
      question: 'Molluscum Contagiosum kitni jagah fail sakta hai body pe?',
      answer: 'Molluscum body ke kisi bhi skin surface pe ho sakta hai. Bachon mein most common: face, neck, armpits, chest, inner elbows. Adults mein: genital area, inner thighs, lower abdomen. Ek important pattern: "autoinoculation lines" — khujlane se ek line mein naye daane nikalte hain, exactly jahan ungliya gayi hoon. Mucous membranes (mouth andar) aur palms/soles pe generally nahi hota.',
    },
    {
      _key: 'faq16',
      question: 'Immunocompromised patients mein Molluscum Contagiosum alag kyun hota hai?',
      answer: 'HIV+ ya other immunocompromised patients mein molluscum kaafi aggressive ho sakta hai — 100 se zyada lesions, 1 cm se bade daane, aur face pe especially. Is type ko "giant molluscum" kehte hain. Akela topical treatment yahaan enough nahi — underlying immune condition address karna zaroori hai. Homeopathy mein deep constitutional treatment immune rebuilding mein support kar sakti hai, lekin infectious disease specialist supervision parallel chalti rehni chahiye.',
    },
    {
      _key: 'faq17',
      question: 'Molluscum Contagiosum baar baar kyun aata hai — permanent solution kya hai?',
      answer: 'Baar baar aane ke peeche usually teen wajahein hain: (1) immunity fundamentally weak hai aur virus hata nahi, (2) re-exposure ho raha hai — family member ya partner mein bhi infection hai, (3) eczema ya skin barrier issue unresolved hai. Permanent control ke liye sirf daane hatana enough nahi — immunity strengthen karni padegi. Homeopathy mein constitutional treatment exactly ye kaam karta hai — underlying immune pattern address karna.',
    },
    {
      _key: 'faq18',
      question: 'Bacche ko Molluscum Contagiosum hai — school, sports sab band karein?',
      answer: 'School bilkul band nahi karna — academic activities mein koi risk nahi. Sirf in activities mein temporary restriction: contact sports (wrestling, judo, gymnastics) — direct skin contact; shared swimming pool; shared towels, water bottles. Normal khel, classroom activity, lunch sharing — sab theek hai. Daane covered kapdon se cover karein, nails short rakein.',
    },
    {
      _key: 'faq19',
      question: 'Molluscum Contagiosum mein coconut oil kaam karta hai?',
      answer: 'Coconut oil mein lauric acid hota hai — laboratory mein iska antiviral effect dekha gaya hai Molluscum virus ke against. Kuch small studies mein daily coconut oil application se lesions mein improvement mili. Lekin ye "supporting evidence" hai, "clinical trial evidence" nahi. Coconut oil as moisturizer + mild antiviral use karna reasonable hai — lekin akele iske bharose primary treatment nahi honi chahiye.',
    },
    {
      _key: 'faq20',
      question: 'Molluscum Contagiosum ke daane press karein ya nahi?',
      answer: 'Bilkul nahi — daane press karna, todna, ya needle se phatna ek bahut common aur bahut galat practice hai. Jab daane todta hai to: viral content fingers pe aata hai aur aap khud naye areas mein spread karte ho; open wound mein bacteria ghus sakta hai; scarring ka risk serious ho jaata hai. Sirf ek doctor supervised setting mein physical removal safe hota hai — ghar mein nahi.',
    },
    {
      _key: 'faq21',
      question: 'Molluscum Contagiosum aur warts (mashke) mein kya fark hai?',
      answer: 'Dono viral skin growths hain lekin alag viruses se. Warts HPV (Human Papillomavirus) se hote hain — rough, irregular surface, typically haath aur pair pe. Molluscum MCV virus se hota hai — smooth, gol, beech mein dimple, softer texture, body ke upper parts aur face pe bhi. Treatment approach bhi alag hai — Thuja homeopathy mein dono ke liye helpful ho sakti hai, lekin proper diagnosis pehle zaroori hai.',
    },
  ],

  sources: [
    { _key: 's1', name: 'Cribier B — Molluscum Contagiosum: A Systematic Review', url: 'pubmed.ncbi.nlm.nih.gov', year: '2013' },
    { _key: 's2', name: 'CCRH — Annual Research Report 2018-19', url: 'ccrhindia.nic.in', year: '2019' },
    { _key: 's3', name: 'Chauhan A et al — Homoeopathy in Molluscum Contagiosum — Indian Journal of Research in Homoeopathy', url: 'ijrh.org', year: '2019' },
    { _key: 's4', name: 'Chen X, Anstey AV, Bugert JJ — Molluscum Contagiosum Virus Infection — Lancet Infectious Diseases', url: 'thelancet.com', year: '2013' },
    { _key: 's5', name: 'WHO Skin NTDs — Molluscum Contagiosum background document', url: 'who.int', year: '2022' },
  ],

  doctorNote: 'Mere clinic mein sabse zyada parents bachon ke liye aate hain jo cryo ya curettage se darate hain — aur honestly, ek 3-saal ke bachhe ko freezing se rokna mushkil hota hai. Unme Thuja-based constitutional treatment ne consistently gentle, scar-free resolution di hai 3-5 mahine mein. Ek baat jo main zaroor kehta hoon: alag towel rule ghar mein follow hona chahiye — agar nahi hua to ek theek hoga, doosre mein aa jaayega. — Dr. Shadab, Homeopedia.in',
}

async function seed() {
  console.log('Seeding Molluscum Contagiosum...')
  await client.createOrReplace(doc)
  console.log('✅ Done! disease-molluscum-contagiosum seeded.')
}

seed()
