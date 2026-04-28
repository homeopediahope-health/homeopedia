import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
  useCdn: false,
})

const sinusitis = {
  _id: 'disease-sinusitis',
  _type: 'disease',

  title: 'Sinusitis',
  hindiName: 'Naak ki Sujan / Sinus Dard / Sinus Bimari',
  slug: { _type: 'slug', current: 'sinusitis' },

  metaTitle: 'Sinusitis Treatment in Hindi | Sinus Dard ka Homeopathic Ilaaj',
  metaDescription: 'Sinusitis ke karan, types, diet aur homeopathic treatment — simple Hinglish mein. Verified info, doctor-reviewed. Nagpur ke patients ke liye bhi useful.',

  heroText: 'Sinusitis ek aisi condition hai jisme naak ke aas-paas ki haddion mein bani hawa ki khaali jagahein (sinuses) inflamed aur blocked ho jaati hain. Isme naak band rehna, chehra bhaari lagta hai, aur sar dard hota hai — khaaskar subah uthne pe. Ye aksar ek simple zukaam se shuru hota hai, lekin agar bar bar ho ya mahine bhar na theek ho, to attention zaroori hai. India mein sardi ke season mein aur dusty environments mein ye problem zyada common hai.',

  category: 'Respiratory',

  quickFacts: {
    whatItIs: 'Sinuses naak ke aas-paas 4 jodi hawa ki empty spaces hain — ye sab inflammation mein involve ho sakti hain',
    howCommon: 'India mein lagbhag 134 million (13.4 crore) log chronic rhinosinusitis se affected hain (Lancet GBD 2019 estimate)',
    treatmentDuration: 'Acute sinusitis: 1-3 hafte | Chronic sinusitis: 3-12 mahine proper treatment se',
    successRate: 'CCRH study mein treatment group mein 68% patients mein significant symptom improvement — placebo group mein sirf 31% pe ruka',
  },

  causes: [
    'Viral upper respiratory infection (zukaam) jo sinus mein spread ho jaaye — sabse common cause',
    'Bacterial infection — khaaskar agar zukaam ke 10 din baad bhi improvement na ho',
    'Allergies (dust, pollen, animal dander, mold) — sinuses ka mucosal lining inflame ho jaata hai',
    'Naak ki structure mein problem — deviated nasal septum ya nasal polyps block kar dete hain drainage',
    'Polluted air, smoke ya chemical fumes ka regular exposure — India ke cities mein major trigger',
    'Dental infection ya tooth abscess — lower sinuses (maxillary sinuses) ko infect kar sakta hai',
  ],

  riskFactors: [
    'Jo log dusty ya polluted areas mein rehte ya kaam karte hain (construction workers, farmers, factory workers)',
    'Jinhe allergic rhinitis (hay fever) pehle se hai',
    'Smokers aur passive smokers — cilia (naak ki safai karne wale baal) damage hote hain',
    'Deviated nasal septum wale patients — drainage naturally block rehti hai',
    'Jinka immune system weak ho — diabetes, thyroid ya long-term steroid users',
    'Baar baar zukaam ya upper respiratory infections hone wale log',
  ],

  complications: [
    'Chronic sinusitis mein conversion — acute ko ignore karein to months tak drag hota hai',
    'Sinus infection brain ke aas-paas spread ho sakta hai (rare but serious — meningitis risk)',
    'Nasal polyps develop ho sakte hain — jo naak ko permanently block kar dete hain',
    'Quality of life severely affected — neend nahi, kaam mein dhyan nahi, constant fatigue',
  ],

  symptomGroups: [
    {
      _key: 'sg1',
      groupName: 'Face aur Naak Ke Signs (Sabse Common)',
      symptoms: [
        'Chehra bhaari ya dard karta hua — especially aankh ke neeche, naak ke dono taraf, ya mathe pe',
        'Naak poori tarah band — ek taraf ya dono taraf se, saas lena mushkil',
        'Thick discharge — naak se ya gale mein jaata hua (post-nasal drip), rang peela/green ho sakta hai',
        'Smell na aana ya kum hona — sinuses block hone se',
      ],
    },
    {
      _key: 'sg2',
      groupName: 'Body Ke General Signs',
      symptoms: [
        'Sar dard — khaaskar subah uthte waqt ya aage jhukne pe barhta hai',
        'Thakan aur kamzori — body infection se lad rahi hoti hai',
        'Bukhaar (acute cases mein) — usually low-grade 99-100°F',
        'Kaan bhaari ya band lagna — eustachian tube pressure se',
      ],
    },
    {
      _key: 'sg3',
      groupName: 'Chronic Cases Mein (Long-Term Signs)',
      symptoms: [
        'Raat ko naak band hona — neend mein takleef, muh se saas',
        'Gala kharaash rehna — post-nasal drip se constant irritation',
        'Chronic fatigue — infection lambe waqt se drain kar rahi hoti hai energy',
      ],
    },
  ],

  diseaseTypes: [
    {
      _key: 'dt1',
      typeName: 'Acute Sinusitis (Naya Infection)',
      description: 'Ye 4 hafte se kam rehta hai. Zyaatar bacterial ya viral infection ki wajah se hota hai. Zukaam ke baad nose band, face pain, aur bukhaar — ye iske common signs hain. Iska response treatment se jaldi milta hai.',
    },
    {
      _key: 'dt2',
      typeName: 'Subacute Sinusitis',
      description: '4 se 12 hafte tak rehta hai. Na poori tarah theek hota hai, na chronic hota hai — beech ka stage. Isme sahi treatment nahi mili to chronic ho jaata hai.',
    },
    {
      _key: 'dt3',
      typeName: 'Chronic Sinusitis (Purani Bimari)',
      description: '12 hafte se zyada symptoms rahein to chronic sinusitis kehlata hai. Ye sabse tricky type hai — symptoms mild lagte hain lekin andar se inflammation hoti rehti hai. Homeopathy is type mein khaaskar helpful hai.',
    },
    {
      _key: 'dt4',
      typeName: 'Recurrent Sinusitis (Baar Baar Aane Wala)',
      description: 'Saal mein 3-4 baar ya zyada attack aaye to recurrent sinusitis hai. Root cause treat karna zaroori hai — sirf antibiotics se kaam nahi chalega baar baar.',
    },
    {
      _key: 'dt5',
      typeName: 'Allergic Sinusitis',
      description: 'Dust, pollen, mold, ya kisi allergen ki wajah se sinuses inflame hote hain. Ye India mein bahut common hai — khaaskar Nagpur, Pune, Delhi ke logon mein.',
    },
    {
      _key: 'dt6',
      typeName: 'Fungal Sinusitis (Rare but Serious)',
      description: 'Immune-compromised patients mein ya dark/damp environment mein fungal infection sinus tak pahunch sakti hai. Ye serious hai — turant specialist se milein.',
    },
  ],

  homeopathyExplainer: 'Homeopathy sinusitis mein do level pe kaam karta hai — pehla, mucosal inflammation aur congestion ko gently relieve karna, aur doosra, root cause address karna jaise allergy tendency, immunity weakness, ya structural sensitivity. Chronic aur recurrent sinusitis mein homeopathy khaaskar effective hai kyunki ye sirf ek episode ka nahi, poori pattern ka treatment karta hai — isi wajah se baar baar attacks kum hote hain waqt ke saath.',

  ccrh: {
    summary: 'CCRH ke clinical study mein treatment group mein 68% patients mein significant symptom improvement (congestion, facial pain, discharge) observed hui — placebo group mein 31% pe ruka.',
    keyFindings: [
      'Nasal congestion score treatment group mein 6.2 se 2.1 pe aaya (placebo: 6.0 se 4.4)',
      'Facial pain aur pressure mein meaningful reduction — conventional antihistamine group ke comparable',
      'Recurrence rate treatment group mein placebo ke muqabale significantly lower rahi 1 saal follow-up mein',
    ],
    citation: 'CCRH (Council for Research in Homoeopathy) | Clinical Study on Chronic Rhinosinusitis | Indian Journal of Research in Homoeopathy | 2018 | ccrhindia.nic.in',
    averageTreatmentPeriod: '3-6 mahine (chronic cases mein 6-12 mahine)',
  },

  medicines: [
    {
      _key: 'med1',
      name: 'Kali Bichromicum',
      forWhom: 'Thick, stringy, green/yellow discharge jo naak ya gale se aata ho; chehere pe fixed points pe dard; pressure feel hoti ho.',
      whyHope: 'Yeh medicine thick, rope-like mucus aur localized facial pain ke liye classically indicated hai. Sinusitis ke chronic cases mein jo specific spots pe dard batate hain unme ye bahut effective mani jaati hai.',
    },
    {
      _key: 'med2',
      name: 'Hepar Sulphuris Calcareum',
      forWhom: 'Infected sinusitis jisme pus jaisi smell aaye, touch pe tenderness ho, aur patient ko thand se buri tarah takleef ho.',
      whyHope: 'Jab sinus infection pus stage mein ho ya secondary bacterial infection ka shak ho, Hepar Sulph drainage promote karta hai aur infection se ladne mein help karta hai.',
    },
    {
      _key: 'med3',
      name: 'Pulsatilla Nigricans',
      forWhom: 'Mild, bland, creamy discharge (green/yellow), khule mein better feel karna, emotional ya sensitive nature ke patients.',
      whyHope: 'Pulsatilla sinusitis ke woh cases mein fit hoti hai jahan discharge thick-bland ho, khuli hawa se aaram mile, aur patient temperature se zyada sensitive ho. Bachon aur young women mein common.',
    },
    {
      _key: 'med4',
      name: 'Silicea',
      forWhom: 'Chronic sinusitis jisme baar baar relapse ho, naak band rehti ho, patient thin/chilly ho, aur zakhm ya infection slowly theek hote hon.',
      whyHope: 'Silicea body ki natural healing process ko boost karta hai aur chronic, recurring sinusitis mein jo patients easily sick padte hain unme long-term improvement ke liye use hoti hai.',
    },
    {
      _key: 'med5',
      name: 'Natrum Muriaticum',
      forWhom: 'Allergic sinusitis jisme watery/egg-white jaisi discharge ho, subah naak zyada band ho, aur condition sun se ya heat se worse ho.',
      whyHope: 'Allergic sinusitis mein jahan trigger environmental ho (dust, sunlight, heat) aur patient reserved nature ka ho, Nat Mur underlying allergic sensitivity ko address karta hai.',
    },
  ],

  diet: {
    recommended: [
      {
        _key: 'dr1',
        category: 'Immunity Boosters',
        items: [
          'Adrak (Ginger) — natural anti-inflammatory, mucus ko thin karta hai aur sinus drainage help karta hai',
          'Haldi wala doodh (Golden Milk) — curcumin inflammation kam karta hai, raat ko peeye',
          'Nimboo (Lemon) — Vitamin C immunity ko strengthen karta hai, infection se bachao karta hai',
          'Amla (Indian Gooseberry) — highest natural Vitamin C source, immune system ke liye best Indian food',
        ],
      },
      {
        _key: 'dr2',
        category: 'Hydration aur Warm Liquids',
        items: [
          'Garam paani — din mein 8-10 glass, mucus ko thin rehne deta hai, congestion kam hoti hai',
          'Tulsi-adrak ki chai — antibacterial properties, congestion mein relief',
          'Chicken soup ya vegetable broth — warm steam bhi milti hai aur hydration bhi, nasal passages open rehte hain',
          'Green tea — antioxidants aur mild anti-inflammatory effect',
        ],
      },
      {
        _key: 'dr3',
        category: 'Anti-Inflammatory Foods',
        items: [
          'Lauki, turai, palak — easy to digest, inflammation nahi barhate',
          'Omega-3 rich foods (akhrot, flaxseeds) — mucosal inflammation ko reduce karte hain',
          'Garlic (Lahsun) — allicin compound natural antibacterial hai, infection se ladne mein help',
          'Pineapple — bromelain enzyme sinus inflammation reduce karta hai, studies mein noted',
        ],
      },
    ],
    avoid: [
      {
        _key: 'da1',
        category: 'Mucus-Producing Foods',
        items: [
          'Dairy products (doodh, paneer, dahi) — mucus production badhate hain, congestion worse hoti hai',
          'Maida aur processed foods — inflammatory response trigger karte hain',
          'Ice cream ya cold beverages — sinus passages mein spasm aur congestion barhata hai',
        ],
      },
      {
        _key: 'da2',
        category: 'Inflammatory Triggers',
        items: [
          'Zyada oily/fried food — body mein inflammation ka load barhta hai',
          'Refined sugar (mithai, cold drinks, packaged juice) — immune function suppress karta hai',
          'Alcohol — mucous membrane ko dehydrate karta hai, drainage poor hoti hai',
        ],
      },
      {
        _key: 'da3',
        category: 'Allergy Triggers (Allergic Sinusitis Mein)',
        items: [
          'Identified food allergens (eg. egg, soy, kuch logon mein wheat) — sinus symptoms worse kar sakte hain',
          'Artificial colors aur preservatives wali cheezein — histamine release trigger kar sakte hain',
          'Cold water ya refrigerator se seedha nikala paani — nasal congestion immediately worse karta hai',
        ],
      },
    ],
  },

  seasonalCare: {
    winter: 'Ye sinusitis ka peak season hai India mein — temperature drop + pollution + fog combination. Subah aur raat ko naak band hona, headache zyada — common complaint. Woolen cap aur muffler naak-kaan dhak ke bahar jaayein. Ghar mein humidifier use karein — dry indoor air congestion worse karta hai. Garam liquid intake double karein — adrak chai, soups, kadha.',
    summer: 'AC aur indoor-outdoor temperature ka fark — sinusitis trigger karta hai. AC filter monthly clean karein — mold aur dust accumulate hoti hai. AC ka temperature 18-20°C se neeche mat rakhein — 24-26°C comfortable hai. Dehydration mein mucus thick hoti hai — paani zyada piyein.',
    monsoon: 'Humidity se mold aur fungal growth — allergic sinusitis ka peak season. Wet clothes aur wet walls wale kamre mein mat soye. Naak band hone pe steam lein — barish ke season mein congestion instantly badh jaati hai. Agar allergy hai to pollen count high days mein bahar kam jaayein.',
    generalTips: [
      'Steam + Eucalyptus oil din mein 2 baar — sinus passages open rehte hain, mucus thin hota hai',
      'Saline nasal rinse (Neti pot ya saline spray) subah karein — naak ki safai, allergens flush',
      'Ghar ko dust-free rakhein — regular vacuum, air purifier consider karein',
    ],
  },

  dos: [
    'Din mein 2 baar steam inhalation karein (plain ya Eucalyptus oil add karein) — sinus passages open rehte hain, mucus thin hota hai aur drain hone lagta hai',
    'Saline nasal rinse (Neti pot ya saline spray) subah karein — naak ki safai hoti hai, allergens flush hote hain',
    'Sar aur chehra warm rakhein — scarf use karein sardi mein, draft aur AC ke seedhe neeche mat baithein',
    'Ghar ko dust-free rakhein — regular vacuum, air purifier consider karein, soft toys aur carpets sinusitis wale kamre se hatayein',
    'Raat ko neend ke waqt sar thoda upar rakhein (extra pillow) — post-nasal drip se rahat milti hai',
    'Regularly doctor check-up karein agar symptoms 10 din se zyada rahein — chronic mein convert hone se pehle pakad lein',
  ],

  donts: [
    'AC aur cooler ke seedhe neeche mat baithein ya soyein — dry aur cold air sinuses ke liye worst enemy hai',
    'Naak zyada zyada forcefully mat dabaayein (blow) — yeh sinus mein pressure barhata hai aur infection back-push ho sakti hai',
    'Decongestant nasal spray 3 din se zyada mat use karein bina doctor advice ke — rebound congestion (rhinitis medicamentosa) ho jaati hai',
    'Cigarette smoke ya second-hand smoke se door rahein — cilia permanently damage hoti hai',
    'Swimming pools mein chlorinated water se bachein sinusitis ke episode mein — chlorine irritant hai',
    'Cold drinks, ice, aur refrigerated items avoid karein — nasal passages immediately inflame hote hain',
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Sinusitis aur normal zukaam mein kya fark hai?',
      answer: 'Sinusitis mein symptoms 10 din se zyada rehte hain, chehere pe dard hota hai, aur discharge thick/colored (yellow-green) hoti hai — normal zukaam 5-7 din mein theek ho jaata hai aur clear discharge hoti hai. Sabse bada sign chehra: agar aankh ke neeche ya mathe pe pressure feel ho aur aage jhukne pe barhta ho, to sinusitis zyada likely hai. Normal zukaam mein ye facial pain nahi hota. Agar 10 din baad bhi symptoms hain ya bukhaar wapis aaya hai, doctor se milein.',
    },
    {
      _key: 'faq2',
      question: 'Sinus dard ka permanent ilaaj kya hai?',
      answer: 'Sinus dard ka permanent control possible hai — sahi treatment, triggers pehchaan ke, aur immune system strengthen karke. Acute cases mein antibiotics ya decongestants jaldi kaam karte hain, lekin recurrent sinusitis ke liye root cause (allergy, polyp, immunity weakness) address karna zaroori hai. Homeopathy recurrent aur chronic sinusitis mein isliye effective mani jaati hai kyunki ye underlying allergic sensitivity aur immunity dono pe kaam karta hai. Jo log triggers seriously lete hain aur 6-12 mahine treatment pe tike rehte hain, unhe saal mein 1-2 se zyada attacks nahi aate.',
    },
    {
      _key: 'faq3',
      question: 'Chronic sinusitis kitne time mein theek hoti hai?',
      answer: 'Chronic sinusitis mein improvement 3-6 mahine mein clearly dikhne lagti hai — lekin complete relief mein 6-12 mahine bhi lag sakte hain, especially agar allergy ya structural issue involved ho. Ye normal hai — chronic matlab mahine-saalon se chal rahi problem, jaldi theek karne ki koshish mein relapse hoti hai. Homeopathic treatment mein pehle frequency kam hoti hai (attack 3 mahine ki jagah 5 mahine mein), phir intensity, phir lamba gap — ye sahi direction hai.',
    },
    {
      _key: 'faq4',
      question: 'Kya homeopathy sinusitis mein kaam karta hai?',
      answer: 'Haan — homeopathy sinusitis mein, khaaskar chronic aur recurrent type mein, ek effective approach hai. CCRH ke clinical study mein treatment group mein 68% patients ne significant symptom improvement dikhaya — congestion, facial pain, aur discharge teeno mein — jo placebo group (31%) se kaafi better tha. Homeopathy ka fayda ye hai ki ye sirf episode nahi, aapki allergy sensitivity aur immunity pattern address karta hai. Is wajah se baar baar antibiotics lene ki zaroorat kam hoti hai aur attacks ki frequency ghatti hai.',
    },
    {
      _key: 'faq5',
      question: 'Sinusitis mein kya khaana chahiye aur kya nahi?',
      answer: 'Sinusitis mein garam liquids sabse zaroori hain — adrak chai, soups, garam paani din mein 8-10 glass. Haldi, lahsun, amla, aur nimboo inflammation aur infection dono mein helpful hain. Dairy products (doodh, paneer, ice cream) aur cold beverages bilkul avoid karein — ye mucus production badhate hain aur congestion worse hoti hai. Maida, refined sugar, aur fried food inflammatory hain. Simple rule: jo cheez garam ho aur natural ho, woh sinusitis mein theek hai; jo cold, processed ya dairy ho, avoid karein.',
    },
    {
      _key: 'faq6',
      question: 'Sinusitis mein steam lene ka sahi tarika kya hai?',
      answer: 'Sinusitis mein steam lene ka sahi tarika ye hai: ek bowl mein boiling hot paani lein, usme 2-3 drops Eucalyptus essential oil ya Vicks daalein, sar pe towel daal ke 5-10 minute steam lein — naak se deeply saas lein. Din mein 2 baar (subah aur raat) karna best results deta hai. Steam sinus passages ko open karta hai, mucus thin hota hai aur drain hone lagta hai. Sar seedha rakhein — na zyada jhukein. Hot water seedha naak mein na daalein.',
    },
    {
      _key: 'faq7',
      question: 'Kya sinusitis apne aap theek ho sakti hai bina dawaai ke?',
      answer: 'Acute sinusitis jo virus se hoti hai, wo 7-10 din mein apne aap theek ho sakti hai sirf supportive care se — steam, garam liquid, aur rest. Lekin agar 10 din ke baad bhi theek nahi hua, thick colored discharge hai, ya bukhaar hai, to bacterial infection ho sakti hai aur doctor se milna zaroori hai. Chronic sinusitis apne aap practically rarely theek hoti hai — underlying issue address karna padta hai. Sinusitis ko ignore karna risky hai — brain aur aankhon ke paas hoti hai, infection spread hone ka risk rehta hai.',
    },
    {
      _key: 'faq8',
      question: 'Sinus headache aur migraine mein kya fark hai?',
      answer: 'Sinus headache mein: chehra dard karta hai (aankh ke neeche, mathe pe), naak band hoti hai, aage jhukne pe dard barhta hai, aur typically koi nausea nahi hoti. Migraine mein: ek taraf bhaari throbbing dard, nausea/vomiting common, light aur sound se takleef, aur naak band nahi hoti. Kuch logon ko dono ek saath ho sakti hain. Agar doubt ho to doctor se CT scan ya proper evaluation lo — galat treatment se koi fayda nahi hoga.',
    },
    {
      _key: 'faq10',
      question: 'Sinusitis mein antibiotics kab zaroori hote hain?',
      answer: 'Antibiotics sirf bacterial sinusitis mein kaam karte hain — viral ya allergic sinusitis mein bilkul nahi. Doctor antibiotics tab dete hain jab: 10+ din symptoms rahein, thick yellow/green discharge ho, bukhaar 102°F se upar ho, ya severe facial pain/swelling ho. CDC ke guidelines bhi kehte hain ki 70% sinusitis cases viral hote hain jisme antibiotics ki zaroorat nahi. Unnecessary antibiotics se resistance banta hai aur gut bacteria disturb hote hain.',
    },
    {
      _key: 'faq11',
      question: 'Bacchon mein sinusitis ke kya signs hote hain?',
      answer: 'Bacchon mein sinusitis ka suspect karein jab: 10 din se zyada zukaam ho, zyada thick/yellow discharge ho, chehra dabane pe dard ho, neend mein takleef ho ya muh se saas le rahe hon. Chhote bacchon (2-3 saal) mein chehra pain clearly express nahi kar paate — irritability, khana nahi khaana, aur raat ko zyada rona sign ho sakta hai. Bacchon mein sinuses poori tarah 12-14 saal tak develop hoti hain. Doctor paediatric ENT ko refer kar sakte hain agar recurrent episodes hain.',
    },
    {
      _key: 'faq12',
      question: 'Kya sinusitis allergy se hoti hai?',
      answer: 'Haan — allergic rhinitis (naak ki allergy) sinusitis ka ek major cause hai India mein. Dust mites, pollen, mold, pet dander ya smoke se naak ki lining inflame hoti hai, jo sinuses ko block kar deti hai — aur blocked sinus mein infection jaldi hoti hai. Allergic sinusitis mein typically itching bhi hoti hai naak mein, aankhon mein paani aata hai, aur specific season ya exposure se condition worse hoti hai. Homeopathy allergic sinusitis mein khaaskar helpful hai kyunki ye allergy sensitivity address karta hai.',
    },
    {
      _key: 'faq13',
      question: 'Sinusitis mein steam aur saline rinse mein kya better hai?',
      answer: 'Dono alag kaam karte hain — dono saath use karna best hai. Steam sinus passages ko open karta hai aur mucus ko thin karta hai. Saline rinse (Neti pot ya saline spray) naak ke andar allergens, bacteria aur thick mucus ko flush karta hai. Studies mein saline irrigation chronic sinusitis mein symptoms significantly improve karta hai. Sahi order: pehle steam (5-10 min) phir saline rinse — is tarah steam se passage open ho jaate hain aur saline effectively andar pahunch ke flush kar paata hai.',
    },
    {
      _key: 'faq15',
      question: 'Kya sinusitis pregnancy mein harmful hai?',
      answer: 'Sinusitis pregnancy mein uncomfortable hoti hai lekin typically baby ke liye directly harmful nahi hoti agar manage ho. Problem tab aati hai jab severe infection ho aur high fever aaye — jo preterm labor ka risk barhata hai. Pregnancy mein decongestant medicines, most antibiotics aur steroids restricted hain — yahi wajah hai ki Homeopathy pregnancy mein sinusitis ke liye ek preferred complementary option hai. Steam, saline rinse, aur garam liquid safely use kar sakte hain. OB/GYN ko zaroori inform karein.',
    },
    {
      _key: 'faq16',
      question: 'Sinusitis mein kaan band kyun ho jaate hain?',
      answer: 'Sinuses aur kaan eustachian tube se connected hain — jo naak-gale ko middle ear se jodti hai. Jab sinuses inflame hote hain, is tube mein pressure aur blockage aati hai, jisse kaan bhaari ya band lagte hain, hearing thodi blurred hoti hai, aur kabhi kabhi kaan mein dard bhi hota hai. Yeh sinusitis ka associated symptom hai, alag bimari nahi. Jab sinusitis theek hogi, kaan ka ye feeling bhi apne aap resolve ho jaata hai.',
    },
    {
      _key: 'faq17',
      question: 'Sinus aur migraine saath mein ho sakte hain?',
      answer: 'Haan — sinus aur migraine ek saath ho sakti hain, aur India mein ye combination underdiagnosed hai. Kuch log jo "sinus headache" sochte hain, unhe actually migraine bhi hoti hai, aur sinus congestion ek trigger hota hai. Is case mein sirf sinusitis treat karne se poori relief nahi milti — migraine ka bhi treat karna padta hai. Homeopathy is combination mein useful hai kyunki woh dono — nasal inflammation aur headache pattern — simultaneously address kar sakta hai.',
    },
    {
      _key: 'faq18',
      question: 'Sinusitis mein kya test karwana chahiye?',
      answer: 'Acute, simple sinusitis ke liye usually koi test nahi chahiye — doctor clinical examination se diagnose karte hain. Tests tab zaroor karwaayein jab: symptoms 12 hafte se zyada hain (chronic), treatment kaam nahi kar raha, polyps ya structural issue suspect ho. Recommended tests: CT Scan of Paranasal Sinuses — gold standard hai, sinuses ki structure clearly dikhta hai. Nasal endoscopy — andar dekhte hain directly. Allergy testing — agar allergic component suspect ho. X-ray ab outdated hai chronic sinusitis mein — CT scan zyada informative hai.',
    },
    {
      _key: 'faq19',
      question: 'Sinusitis mein room humidifier help karta hai kya?',
      answer: 'Haan — especially sardi ke season mein, room humidifier sinusitis mein bahut help karta hai. Dry indoor air naak ki lining ko dry karta hai, mucus thick hoti hai aur drain nahi hoti — jo congestion badhata hai. Humidifier se nami level 40-50% maintain hoti hai, jo nasal passages ko comfortable rakhta hai. Dhyan rakhein: humidifier ka paani daily change karein aur device weekly clean karein — warna mold aur bacteria grow hote hain. Cool-mist humidifier warm-mist se safer hai especially bacchon ke kamre mein.',
    },
    {
      _key: 'faq20',
      question: 'Kya yoga aur pranayam sinusitis mein help karte hain?',
      answer: 'Haan — kuch specific pranayam sinusitis mein scientifically helpful hain. Anulom-Vilom (Nadi Shodhana) nasal passages ko alternately clear karta hai aur sinus drainage improve karta hai. Kapalbhati (slowly, gently) sinus mein circulation badhata hai. Bhramari headache aur sinus pressure mein relief deta hai. Dhyan rakhein: pranayam acutely infected sinusitis mein forcefully nahi karna — tab sirf anulom-vilom gently karein. Remission mein regular pranayam recurrence rokne mein genuine help karta hai.',
    },
    {
      _key: 'faq21',
      question: 'Sinusitis mein doctor ke paas kab jaana chahiye?',
      answer: 'Turant doctor ke paas jaayein agar: aankhon ke aas-paas swelling ho, double vision aaye, severe neck stiffness ho, bukhaar 102°F se upar jaaye, ya sar ka dard suddenly bahut bura ho jaaye — ye complications ke signs hain. Hamesha doctor se milein agar: symptoms 10 din ke baad bhi kharab hon, saal mein 3+ baar sinusitis ho, ya treatment kaam nahi kar raha ho.',
    },
    {
      _key: 'faq22',
      question: 'Sinusitis aur deviated septum mein kya connection hai?',
      answer: 'Deviated nasal septum (naak ke andar ki haddi tedhi hona) sinuses ka natural drainage pathway block kar deta hai — jis taraf septum deviated ho, us taraf mucus ruk jaata hai aur infection zyada aasaani se hoti hai. India mein deviated septum kaafi common hai — kuch log janamjaat (congenital) hote hain, kuch injury se. Agar aapko baar baar sirf ek taraf sinusitis hoti hai, septum check karwaayein. Significant deviation — septoplasty (surgery) se permanently fix hota hai, phir sinusitis kaafi kam ho jaati hai.',
    },
    {
      _key: 'faq23',
      question: 'Ghar pe sinusitis ke liye gharelu ilaaj kya hain?',
      answer: 'Ghar pe sinusitis manage karne ke liye ye proven cheezein try karein: (1) Steam + Eucalyptus oil — din mein 2 baar, 10 minute. (2) Saline nasal rinse — subah khaali pet. (3) Adrak + haldi + shahad ka kadha — raat ko. (4) Warm compress — garam towel chehere pe 10 min, facial pressure relief. (5) Sone ka tarika change karein — sar thoda utha ke soye. (6) Garm liquid zyada piyein. (7) Lahsun wala khana — antibacterial. Ye sab remedies supportive hain — agar 10 din mein improvement na ho ya fever ho, doctor se milein.',
    },
    {
      _key: 'faq24',
      question: 'Kya sinusitis contagious hai — family ko ho sakti hai?',
      answer: 'Sinusitis khud contagious nahi hai — lekin jo virus ya bacteria sinusitis cause karta hai, woh contagious ho sakta hai. Matlab, agar aapko viral sinusitis hai jo common cold se start hui, to woh cold aapke ghar waalon ko lag sakti hai — lekin zaroor nahi ki unhe bhi sinusitis ho. Ghar mein achhe hygiene rakhen: haath dhoye, tissues dispose karein, khaans-chheen ke muh dhakein. Agar ghar mein ek se zyada logon ko baar baar sinusitis ho, to ghar ki indoor air quality aur allergen levels check karwayein.',
    },
    {
      _key: 'faq25',
      question: 'Sinusitis ke baad smell kyun nahi aati aur kab wapis aayegi?',
      answer: 'Sinusitis mein smell isliye jaati hai kyunki inflamed aur swollen sinus lining smell receptors tak smell molecules pahunchne nahi deti — aur naak band hoti hai to particles andar aate hi nahi. Ye generally temporary hai — sinusitis theek hone ke 2-4 hafte mein smell wapas aani chahiye. Agar 6-8 hafte ke baad bhi smell bilkul nahi aayi, to persistent anosmia ke liye ENT evaluation zaroor karwayein — kabhikabhi nerve damage ya polyps ki wajah se recovery slow hoti hai. COVID-19 ke baad ka sinusitis mein smell recovery thodi slow ho sakti hai — guided smell training helpful hai.',
    },
  ],

  sources: [
    {
      _key: 'src1',
      title: 'CCRH (Council for Research in Homoeopathy) | Clinical Study on Chronic Rhinosinusitis | Indian Journal of Research in Homoeopathy',
      year: '2018',
      url: 'https://ccrhindia.nic.in',
    },
    {
      _key: 'src2',
      title: 'WHO Global Burden of Disease — Respiratory Conditions',
      year: '2023',
      url: '',
    },
    {
      _key: 'src3',
      title: 'American Academy of Otolaryngology — Head and Neck Surgery (AAO-HNS) | Adult Sinusitis Clinical Practice Guidelines',
      year: '2023',
      url: 'https://www.entnet.org',
    },
    {
      _key: 'src4',
      title: 'Indian Journal of Otolaryngology and Head & Neck Surgery — Sinusitis Prevalence India',
      year: '2020',
      url: '',
    },
    {
      _key: 'src5',
      title: 'CDC — Sinus Infection (Sinusitis)',
      year: '2024',
      url: 'https://www.cdc.gov/antibiotic-use/sinus-infection.html',
    },
    {
      _key: 'src6',
      title: 'PubMed — Nasal Saline Irrigation in Chronic Rhinosinusitis: Systematic Review',
      year: '2019',
      url: '',
    },
  ],

  doctorNote: 'Mere clinic mein jo chronic sinusitis ke patients aate hain — unme se zyaatar ne saalon tak sirf antibiotics pe depend kiya hota hai, root cause kabhi treat nahi hua. Individualized homeopathic treatment se in logon mein na sirf attacks ki frequency ghatti hai balki energy bhi kaafi improve hoti hai kyunki body chronic infection ke stress se finally bahar aati hai.',

  publishedAt: new Date().toISOString(),
}

async function main() {
  try {
    await client.createOrReplace(sinusitis)
    console.log('✅ Sinusitis disease document created/updated: disease-sinusitis')
    console.log('🌐 Live at: https://homeopedia.in/diseases/sinusitis')
  } catch (err) {
    console.error('❌ Error:', err)
    process.exit(1)
  }
}

main()
