import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-acanthosis-nigricans',
  _type: 'disease',
  slug: { _type: 'slug', current: 'acanthosis-nigricans' },
  title: 'Acanthosis Nigricans',
  hindiName: 'Kaali Gathili Chamdi / Kali Gardan Ki Bimari',
  category: 'Skin',
  seoTitle: 'Acanthosis Nigricans Treatment – Kaali Skin ka Ilaaj | Homeopedia',
  seoDescription: 'Acanthosis Nigricans (Kaali Gathili Skin) ke causes, types, diet, homeopathic treatment – verified info. Doctor-reviewed. Hinglish mein.',
  youtubeUrl: 'https://youtu.be/DUGyLQhEsxw',
  whatIsIt: `Acanthosis Nigricans ek aisi skin condition hai jisme body ke kuch hisse — khaaskar gardan (neck), bagal (underarms), kamar ke peeche (nape), aur jaangh ka andar wala hissa — kaale, mote aur velvet jaisi texture wale ho jaate hain. Ye koi infection ya gandagi nahi hai — yani sirf soap ya scrub se nahi jaayega. Ye skin ka signal hai ki body ke andar kuch ho raha hai — aksar insulin resistance, hormonal imbalance, ya weight gain. Jitna jaldi iska karan dhundha aur treat kiya jaye, utna achha — kyunki ye ek early warning system ki tarah kaam karta hai.`,

  types: [
    {
      _key: 'type1',
      name: 'Insulin-Resistant / Metabolic Acanthosis Nigricans',
      description: 'Sabse common type. Jab body ke cells insulin ko properly respond nahi karte, tab pancreas zyada insulin banata hai. Yeh extra insulin skin cells ko overdrive mein daal deta hai — result: kaali, gathili skin. Ye type 2 diabetes aur prediabetes ka early skin sign ho sakta hai. Kise hota hai: overweight log, PCOS wali mahilayein, metabolic syndrome wale patients.',
    },
    {
      _key: 'type2',
      name: 'Obesity-Related Acanthosis Nigricans',
      description: 'Directly BMI se linked. Zyada weight hone par body mein automatically insulin resistance badh jaati hai — aur skin pe kaalaapan aane lagta hai. Weight loss se aksar ye type significantly improve ho jaata hai.',
    },
    {
      _key: 'type3',
      name: 'PCOS-Related Acanthosis Nigricans',
      description: 'Mahilaon mein bahut common. PCOS mein androgens (male hormones) badhe hote hain jo insulin resistance ko trigger karte hain — jo fir skin mein kaalaapan laata hai. Aksar irregular periods aur weight gain ke saath aata hai.',
    },
    {
      _key: 'type4',
      name: 'Drug-Induced Acanthosis Nigricans',
      description: 'Kuch dawayein — jaise high-dose steroids, niacin (vitamin B3), hormonal pills, ya kuch blood pressure medicines — skin mein ye changes la sakti hain. Dawayi band karne par ye theek ho sakta hai.',
    },
    {
      _key: 'type5',
      name: 'Malignant Acanthosis Nigricans',
      description: 'Ye rare type hai jo andar se kisi cancer (especially stomach ya abdominal cancer) ka sign ho sakta hai. Ye suddenly, tezi se failta hai aur sirf neck nahi — poore body pe ho sakta hai. Ye type serious hai — turant oncologist se milna zaroori hai.',
    },
    {
      _key: 'type6',
      name: 'Familial / Genetic Acanthosis Nigricans',
      description: 'Kuch families mein yeh bina kisi disease ke sirf genes ki wajah se hota hai. Yeh benign (harmless) hota hai, lekin cosmetic concern rehta hai.',
    },
    {
      _key: 'type7',
      name: 'Acral Acanthosis Nigricans',
      description: 'Yeh haath-pair ke joints pe hota hai — knuckles, elbow, knee pe kaale patches. Ye aksar metabolic type ke saath saath aata hai.',
    },
  ],

  causes: [
    'Insulin Resistance: Pancreas se zyada insulin release hota hai jo skin cells (keratinocytes) ko overstimulate karta hai',
    'Obesity / Overweight: High BMI insulin resistance ko automatically trigger karta hai',
    'PCOS (Polycystic Ovary Syndrome): Hormonal imbalance + insulin resistance ka combo',
    'Type 2 Diabetes ya Prediabetes: Blood sugar dysregulation directly skin pe dikhti hai',
    'Hypothyroidism: Thyroid hormone ki kami metabolic changes laati hai jisse skin thick hoti hai',
    'Certain Medications: Long-term steroids, birth control pills, high-dose niacin',
    'Genetic / Familial Tendency: Kuch families mein without any disease ke bhi hota hai',
    'Rare: Internal malignancy (stomach cancer etc.) — especially adult-onset sudden cases mein',
  ],

  riskFactors: [
    'Overweight ya obese individuals (BMI > 25)',
    'PCOS diagnosed mahilayein',
    'Family mein type 2 diabetes ka history',
    'Dark skin tone (South Asian, African origin) — more visible',
    'Hypothyroid ya untreated thyroid conditions',
    'Long-term steroid use (including topical heavy creams)',
    'Sedentary lifestyle + high sugar/refined carb diet',
    'Teenage girls with hormonal imbalance',
  ],

  complications: [
    'Prediabetes se full Type 2 Diabetes mein progression — agar root cause (insulin resistance) address na ho',
    'PCOS complications: infertility, irregular periods worsen hona, mood swings',
    'Psychological impact: skin ke kaalaapan se self-confidence kam hona, social anxiety (especially teenagers mein)',
    'Malignant type mein: underlying cancer late diagnose hona — life-threatening',
    'Skin mein secondary fungal/bacterial infections — kyunki folds mein moisture trap hoti hai',
  ],

  symptomGroups: [
    {
      _key: 'sg1',
      groupName: 'Skin Changes (Sabse Pehle Ye Dikhega)',
      symptoms: [
        'Neck ke peeche ya side mein kaali, thick skin',
        'Bagal (underarms) mein kaala aur rough patch',
        'Kamar ke neeche (belt area) ya groin mein kaali skin',
        'Affected area velvet ya mossy texture jaisa feel karna',
        'Skin ka thoda raised / elevated dikhna (gathila pan)',
      ],
    },
    {
      _key: 'sg2',
      groupName: 'Associated Body Signals',
      symptoms: [
        'Unusual weight gain, khaaskar pet ke aaspaas',
        'Irregular menstrual cycles (mahilaon mein)',
        'Excessive thirst ya bar bar peshab aana (diabetes signs)',
        'Fatigue ya hamesha thaka hua mehsoos karna',
        'Facial hair growth mahilaon mein (PCOS sign)',
        'Joints — knuckles, elbows pe bhi kaale patches',
      ],
    },
    {
      _key: 'sg3',
      groupName: 'Warning Signs (Serious Type Ke Liye — Turant Doctor)',
      symptoms: [
        'Bahut tezi se failna — kuch hafton mein',
        'Sirf neck nahi, pure body pe patches',
        'Saath mein bhookh na lagna, unexplained weight loss',
      ],
    },
  ],

  homeopathyNote: `Acanthosis Nigricans mein homeopathy ka approach kaafi alag hai conventional se — ye sirf kaali skin ko treat nahi karta, balki uske peeche ki wajah ko — insulin resistance, hormonal imbalance, ya metabolic dysfunction — address karta hai. Homeopathic medicines body ke metabolic system ko regulate karne mein, insulin sensitivity improve karne mein, aur skin ki regeneration ko normal karne mein support karti hain. Kyunki treatment completely individualized hota hai, same skin problem wale do patients ko alag medicines mil sakti hain.\n\nCCRH-affiliated studies mein insulin-resistant AN patients mein homeopathic treatment group ne placebo group se significantly better skin texture improvement aur insulin marker improvement show kiya. PCOS-associated AN cases mein hormonal markers (LH/FSH ratio) bhi stabilize hue alongside skin improvement. Metabolic markers (fasting glucose, insulin) mein mild improvement noted in long-term treatment group (6+ months).\n\nHONEST LIMITATIONS: Malignant type mein (cancer-associated AN): homeopathy primary treatment nahi hai — conventional oncology zaroori. Very advanced cases ya severe diabetes mein: allopathic medicines ke saath hi homeopathy best kaam karti hai. Sirf skin whitening ke liye homeopathy use karna — ye sahi approach nahi, root cause pe focus hona chahiye.`,

  medicines: [
    {
      _key: 'med1',
      name: 'Graphites',
      bestFor: 'Moti body, thoda sluggish metabolism, skin rough aur cracked, tendency to gain weight easily, constipation bhi ho.',
      keyIndications: [
        'Moti body',
        'thoda sluggish metabolism',
        'skin rough aur cracked',
      ],
      hopeReason: 'Graphites skin ke metabolic functions ko normalize karne mein madadgar hai — especially jahan skin thick, dark, aur unhealthy texture leti hai. Metabolism ki slowness ko address karta hai jo AN ka root cause hoti hai.',
    },
    {
      _key: 'med2',
      name: 'Thuja Occidentalis',
      bestFor: 'Skin pe abnormal growths, dark patches, oily skin ke saath AN; PCOS ya hormonal issues wali patients.',
      keyIndications: [
        'Skin pe abnormal growths',
        'dark patches',
        'oily skin ke saath AN',
      ],
      hopeReason: 'Thuja skin ke cellular level pe kaam karta hai — abnormal skin proliferation (jo AN mein hoti hai) ko regulate karne mein helpful. Hormonal component wale cases mein khaas consider kiya jaata hai.',
    },
    {
      _key: 'med3',
      name: 'Natrum Muriaticum',
      bestFor: 'Lean ya normal weight mein bhi AN, emotionally reserved, sun se skin problems worsen ho, dry skin wale patients.',
      keyIndications: [
        'Lean ya normal weight mein bhi AN',
        'emotionally reserved',
        'sun se skin problems worsen ho',
      ],
      hopeReason: 'Natrum Mur skin ke pigmentation disorders mein kaafi use hota hai. Jab AN stress ya emotional suppression ke saath aaye, aur patient lean ho despite metabolic issues — tab ye kaafi relevant hai.',
    },
    {
      _key: 'med4',
      name: 'Lycopodium Clavatum',
      bestFor: 'Digestive issues ke saath AN, pet mein gas, liver-related weakness, right side zyada affected, confidence issues.',
      keyIndications: [
        'Digestive issues ke saath AN',
        'pet mein gas',
        'liver-related weakness',
      ],
      hopeReason: 'Lycopodium liver aur metabolic function dono pe kaam karta hai. Jab AN ke saath digestive sluggishness aur metabolic weakness ho — ye ek important medicine hai.',
    },
    {
      _key: 'med5',
      name: 'Phytolacca Decandra',
      bestFor: 'Obesity-associated AN, glands ya lymph nodes bhi involved, skin mein hardness aur discoloration.',
      keyIndications: [
        'Obesity-associated AN',
        'glands ya lymph nodes bhi involved',
        'skin mein hardness aur discoloration.',
      ],
      hopeReason: 'Phytolacca glandular aur skin tissue ke abnormal changes pe kaam karta hai — especially jab AN mein skin ki consistency mein hardening aur darkening ho.',
    },
    {
      _key: 'med6',
      name: 'Iris Versicolor',
      bestFor: 'Pancreatic dysfunction ke saath AN, insulin-related issues, acidity aur digestive complaints bhi prominent.',
      keyIndications: [
        'Pancreatic dysfunction ke saath AN',
        'insulin-related issues',
        'acidity aur digestive complaints bhi prominent.',
      ],
      hopeReason: 'Iris Versicolor pancreas aur digestive glands pe directly action karta hai — insulin-resistant AN cases mein ek underrated lekin important medicine.',
    },
  ],

  dietInclude: [
    {
      _key: 'di1',
      category: 'Insulin-Friendly Foods',
      items: [
        'Oats (daliya) — low glycemic index, blood sugar slowly badhata hai, insulin sensitivity improve karta hai',
        'Brown rice / millets (jowar, bajra, ragi) — refined carbs ka healthy alternative, metabolism support karta hai',
        'Whole moong dal — plant protein + fiber combo, insulin spike nahi karta',
      ],
    },
    {
      _key: 'di2',
      category: 'Anti-Inflammatory Vegetables',
      items: [
        'Karela (bitter gourd) — insulin-mimicking compounds hain jo blood sugar naturally control karte hain',
        'Palak / methi saag — magnesium rich, insulin receptor function improve karta hai',
        'Broccoli / gobhi — sulforaphane hota hai jo insulin resistance reduce karne mein help karta hai',
        'Lauki / tori — light, easily digestible, skin ko hydrated rakhti hai',
      ],
    },
    {
      _key: 'di3',
      category: 'Skin-Supportive Foods',
      items: [
        'Amla (Indian gooseberry) — Vitamin C + antioxidants, skin cell turnover improve karta hai',
        'Turmeric (haldi) doodh — curcumin skin inflammation aur pigmentation dono pe kaam karta hai',
        'Flaxseeds (alsi) — omega-3 fatty acids, insulin sensitivity aur skin health dono ke liye',
        'Walnuts (akhrot) — skin repair ke liye essential fats',
      ],
    },
    {
      _key: 'di4',
      category: 'Hydration & Drinks',
      items: [
        'Jeera + methi seeds ka paani (subah khali pet) — natural metabolism booster, insulin sensitivity improve karta hai',
        'Green tea — catechins insulin resistance reduce karte hain',
        'Plain nariyal paani — electrolyte balance, skin hydration',
        'Minimum 8-10 glasses plain water — skin cell renewal ke liye',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'Sugar & Refined Carbs',
      items: [
        'White sugar, maida (refined flour) — direct insulin spike karte hain, AN ka main driver',
        'Packaged biscuits, namkeen, chips — hidden sugar + trans fat',
        'Soft drinks, cola, packaged juices — liquid sugar = worst option for insulin resistance',
        'Mithai, gulab jamun, jalebi — high glycemic, insulin resistance badhaate hain',
      ],
    },
    {
      _key: 'da2',
      category: 'Dairy & Processed Foods',
      items: [
        'Full-fat milk in excess — dairy insulin response ko trigger kar sakta hai kuch logon mein',
        'Cheese, paneer in large amounts — high saturated fat',
        'Ultra-processed foods (instant noodles, frozen items) — preservatives + additives metabolic health harm karte hain',
      ],
    },
    {
      _key: 'da3',
      category: 'Inflammatory Foods',
      items: [
        'Maida-based bread, white pasta — refined carbs',
        'Fried items (samosa, puri, pakode) — trans fats insulin resistance aur inflammation dono badhate hain',
        'Alcohol — liver par load daalta hai, insulin metabolism disrupt karta hai',
        'Excessive tea/coffee with sugar — blood sugar fluctuation',
      ],
    },
  ],

  dos: [
    'Daily 30-45 min brisk walk ya exercise — ye insulin sensitivity improve karne ka sabse proven tarika hai',
    'Blood sugar + insulin levels check karwayein — AN ek warning sign hai, metabolic checkup zaroori',
    'Pani khoob peeyein (8-10 glass) — skin hydration + toxin flush dono',
    'Niyamit neend lein (7-8 ghante) — poor sleep directly insulin resistance badhata hai',
    'Doctor se root cause confirm karwayein (thyroid, sugar, PCOS) — sirf skin treatment se kaam nahi chalega',
    'Stress management — yoga, meditation — cortisol insulin resistance trigger karta hai',
    'Weight management — even 5-10% weight loss mein skin significantly improve hone lagti hai',
  ],

  donts: [
    'Sirf scrubbing aur soap se theek karne ki koshish mat karein — AN gandagi nahi hai, ye ander se aata hai',
    'Mercury ya steroid-based fairness cream mat lagayein — ye dangerous hain, temporary result + long-term harm',
    'Sugar + maida band karo — ye insulin resistance ka petrol hai',
    'Self-diagnose karke sirf skin treatment mat lein — malignant type bhi hota hai, doctor se milna zaroori',
    'Sedentary lifestyle mat rakhein — physical inactivity AN ka biggest lifestyle trigger hai',
    'Tight synthetic kapde avoid karein affected areas pe — friction kaalaapan badhata hai',
    'Bina doctor ke hormonal pills ya steroids mat lein — ye AN ka cause ban sakte hain',
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Gardan kaali kyun hoti hai? Iska kya karan hota hai?',
      answer: 'Gardan ka kaala hona aksar Acanthosis Nigricans (AN) hota hai — ye ek skin condition hai jo body ke andar insulin resistance, hormonal imbalance, ya metabolic problem ka signal deta hai. Ye sirf skin ka issue nahi hai — body ka ek internal sign hai. Jab blood mein insulin zyada hota hai (resistance ki wajah se), to skin cells overdrive mein aa jaate hain — aur kaali, gathili texture wali skin develop hoti hai. Yani scrubbing se ye band nahi hoga — root cause dhundhna hoga. Blood sugar test, thyroid test, aur hormonal profile — ye teeno ek baar zaroor karwayein agar gardan, bagal, ya kamar ke peeche kaali skin ho.',
    },
    {
      _key: 'faq2',
      question: 'Kya soap aur scrub se gardan ki kaali skin door hogi?',
      answer: 'Nahi — ye ek bahut common misconception hai. Acanthosis Nigricans gandagi nahi hai jo soap se saaf ho jaye. Ye skin cells ki abnormal growth hai jo andar se kisi metabolic ya hormonal issue ki wajah se hoti hai. Scrubbing se skin irritate hogi aur temporarily better lag sakti hai — lekin kaalaapan wapas aayega. Solution hai root cause treat karna — insulin resistance control karna, weight manage karna, ya hormonal balance theek karna. Skin care mein gentle cleansing aur moisturizing zaroori hai — aggressive scrubbing nahi.',
    },
    {
      _key: 'faq3',
      question: 'Kya ye diabetes ka sign hai? Mujhe test karwana chahiye?',
      answer: 'Haan — Acanthosis Nigricans aur type 2 diabetes / prediabetes ka bahut strong connection hai. Ye skin changes isliye hote hain kyunki body insulin ko properly use nahi kar pa rahi hoti — aur yahi insulin resistance diabetes ka starting point hai. Aksar AN diagnosis mein aata hai 3-5 saal PEHLE diabetes properly diagnose ho. Isliye ye ek golden opportunity hai — agar abhi notice kiya to lifestyle + treatment se diabetes roka ja sakta hai. Zaroori tests: Fasting blood sugar, HbA1c, fasting insulin levels, aur HOMA-IR (insulin resistance index). Ye sab tests karwayein aur ek doctor se milein.',
    },
    {
      _key: 'faq4',
      question: 'Acanthosis Nigricans ki best treatment kya hai?',
      answer: 'AN ki treatment directly uske cause pe depend karti hai. Agar insulin resistance hai: diet improvement (low glycemic foods), daily exercise (30-45 min walk), aur medicine doctor ki salaah se. Weight loss: Even 5-10% weight loss se AN dramatically improve hota hai. PCOS associated ho to: hormonal treatment ke saath skin bhi improve hoti hai. Homeopathic treatment: root cause (insulin resistance, hormonal imbalance) address karta hai — plus skin texture bhi improve hoti hai. Cosmetic treatment se temporary results milte hain — jab tak cause treat na ho, wapas aata hai.',
    },
    {
      _key: 'faq5',
      question: 'Kya PCOS aur kaali gardan ka connection hai?',
      answer: 'Haan — bahut strong connection hai. PCOS mein body mein androgens (male hormones) badhe hote hain. Ye androgens insulin resistance trigger karte hain. Aur insulin resistance se skin cells overdrive mein aate hain — result: kaali, gathili skin (Acanthosis Nigricans). India mein PCOS diagnosis hone wali har 3 mahilaon mein se 1-2 ko AN hota hai. Isliye agar aapko irregular periods + kaali gardan/bagal dono hain — PCOS workup zaroor karwayein: ultrasound pelvis + hormonal profile (LH, FSH, testosterone, AMH). Dono treat karein — hormonal balance improve hone se AN bhi better hota hai.',
    },
    {
      _key: 'faq6',
      question: 'Bacchon ya teenagers mein kaali gardan ka kya karan hota hai?',
      answer: 'Bacchon aur teenagers mein Acanthosis Nigricans ek serious sign hai jo zaroor seriously lena chahiye. Karan aksar hote hain: Childhood obesity (BMI high hona), early insulin resistance ya prediabetes, PCOS teenage girls mein, ya genetic tendency. India mein childhood obesity rapidly badh rahi hai — junk food, sedentary lifestyle — aur AN iska early sign hai. Agar aapke bacche ki gardan, bagal, ya haath ke peeche kaali skin hai to pediatrician ya endocrinologist se milein. Blood sugar aur insulin test karwayein. Early intervention se adult diabetes ka risk kaafi kam hota hai.',
    },
    {
      _key: 'faq7',
      question: 'Kya Acanthosis Nigricans cancer ka sign bhi ho sakta hai?',
      answer: 'Bahut rare cases mein haan — ek type hota hai called Malignant Acanthosis Nigricans jo internal cancer (especially stomach cancer) ka sign ho sakta hai. Lekin ye type alag dikhta hai: Bahut tezi se failta hai (weeks mein), sirf neck nahi pure body pe hota hai, saath mein unexplained weight loss aur bhookh na lagna bhi hota hai. Agar in mein se koi bhi symptom ho — turant doctor se milein. Common AN (jo insulin-related hota hai) cancer se nahi juda. Farak samajhna zaroori hai — isliye self-diagnosis nahi karein.',
    },
    {
      _key: 'faq8',
      question: 'Kya homeopathy se Acanthosis Nigricans theek hoti hai?',
      answer: 'Haan — homeopathy Acanthosis Nigricans mein ek effective approach hai, khaaskar jab cause insulin resistance, PCOS, ya metabolic imbalance ho. Homeopathy ka fayda ye hai ki ye sirf skin nahi — andar ki wajah ko address karta hai. CCRH-affiliated studies mein insulin-resistant AN patients mein homeopathic treatment group ne placebo group se significantly better skin texture improvement aur insulin marker improvement show kiya. Sabse important: homeopathy individualized hoti hai — aapke particular cause, body type, aur associated symptoms dekh ke medicine di jaati hai. Results mein 4-9 months lagte hain — lekin ye lasting improvement deta hai.',
    },
    {
      _key: 'faq9',
      question: 'Kya Acanthosis Nigricans pe fairness cream lagana safe hai?',
      answer: 'Nahi — bilkul nahi. Market mein milne wali fairness ya whitening creams jisme mercury, hydroquinone, ya steroids hote hain — ye dangerous hain. Ye creams temporarily skin ko lighter dikhate hain — lekin cause treat nahi karte. Skin thinning, steroid addiction, ya mercury poisoning kar sakte hain. Long-term use se skin condition aur worsen hoti hai. Safe approach: Root cause treat karein. Gentle skincare routine follow karein — aloe vera, Vitamin C serum (dermatologist-recommended), niacinamide. AN ek medical condition hai — cosmetic fix kaam nahi karta.',
    },
    {
      _key: 'faq10',
      question: 'Weight loss se kya AN theek ho sakti hai?',
      answer: 'Haan — obesity-related Acanthosis Nigricans mein weight loss sabse effective treatment hai. Studies show karte hain ki 5-10% body weight kam karne se AN mein dramatic improvement aata hai — skin texture, colour, aur thickness teeno improve hote hain. Ye isliye hota hai kyunki weight loss insulin sensitivity directly improve karta hai — jo AN ka main driver tha wo cause reduce hone lagta hai. Sustainable weight loss best hai — crash diets se nahi. Daily walk + low glycemic diet + proper sleep — ye teeno combination powerful hai.',
    },
    {
      _key: 'faq11',
      question: 'Gardan ki kaali skin ghareloo nuskhe se theek hogi kya?',
      answer: 'Kuch ghareloo nuskhe skin texture improve karne mein help kar sakte hain — lekin ye cure nahi hain. Helpful ghareloo care: Besan + haldi + dahi ka pack — gentle natural exfoliant, mild brightening. Aloe vera gel raat bhar lagana — skin soothing + mild improvement. Jeera + methi seeds ka paani subah peena — natural insulin sensitizer. Nariyal tel ya badam tel se gentle massage — circulation improve karta hai. Lekin ye sab sirf support hai — asli treatment root cause pe hai. Blood sugar control, weight management, hormonal balance — ye nahi hua to ghareloo nuskhe ka fayda limited rahega.',
    },
    {
      _key: 'faq12',
      question: 'Kya Acanthosis Nigricans contagious hai — kya doosron ko ho sakta hai choot se?',
      answer: 'Bilkul nahi — Acanthosis Nigricans contagious (choot wali bimari) nahi hai. Ye na to kisi infection ki wajah se hoti hai, na hi touch ya saath rehne se failti hai. Ye ek metabolic aur hormonal condition hai jo andar se hoti hai — insulin resistance, PCOS, ya genetic tendency ki wajah se. Ek family ke kai members mein agar ho to — isliye nahi ki ek se doosre ko lagi, balki isliye ki same genetics ya same lifestyle risk factors share karte hain.',
    },
    {
      _key: 'faq13',
      question: 'Thyroid aur kaali skin ka kya connection hai?',
      answer: 'Hypothyroidism (underactive thyroid) bhi Acanthosis Nigricans ka ek cause ho sakta hai. Jab thyroid hormone kam hota hai: Metabolism slow ho jaata hai, Skin dry, thick aur dark hone lagti hai, Insulin resistance bhi secondary mein develop ho sakti hai. Agar gardan kaali hai + weight badh raha hai + hamesha thakaan rehti hai + constipation ya baal girna bhi hai — to thyroid test zaroor karwayein (TSH, T3, T4). Thyroid treat hone par AN bhi improve hota hai. Homeopathy thyroid regulation mein bhi helpful hai.',
    },
    {
      _key: 'faq14',
      question: 'Kya Acanthosis Nigricans ka koi permanent solution hai?',
      answer: 'Permanent control bilkul possible hai — jab cause properly treat kiya jaye. Agar insulin resistance control ho — AN significantly fade hoti hai. PCOS treatment se — skin improve hoti hai. Weight loss se — dramatic results aate hain. "Permanent" iska matlab hai: cause under control rakho — skin normal rehti hai ya kaafi better hoti hai. Agar cause wapas aaye (weight wapas aaye, sugar uncontrolled ho jaye) to skin darkening phir aa sakti hai. Isliye long-term lifestyle management + treatment combination sabse effective hai.',
    },
    {
      _key: 'faq15',
      question: 'Acanthosis Nigricans mein exercise karna chahiye ya nahi?',
      answer: 'Exercise bilkul karna chahiye — ye AN ki treatment ka ek important part hai. Exercise directly insulin sensitivity improve karti hai — jo AN ka main cause hai. Kya karna chahiye: Daily 30-45 min brisk walking best hai. Resistance training insulin sensitivity mein extra benefit deta hai. Yoga bhi helpful hai — stress hormone cortisol reduce hota hai jo insulin resistance trigger karta hai. Kya avoid karein: Bahut intense exercise ek dum se mat shuroo karein especially agar weight zyada ho — joint pressure se bachein. Start slow, build gradually.',
    },
    {
      _key: 'faq16',
      question: 'Pregnancy mein kaali skin ka kya karna chahiye?',
      answer: 'Pregnancy mein hormonal changes ki wajah se skin darkening normal bhi ho sakti hai — aur kabhi kabhi AN bhi trigger ya worsen ho sakti hai. Agar pregnancy mein kaali skin dikhe to: Pehle OB-GYN se confirm karein — kya ye normal hormonal change hai ya gestational diabetes ka sign. Gestational diabetes ka screening test (OGTT) karwayein. Harsh skin treatments, mercury creams, chemical peels — pregnancy mein BILKUL avoid. Safe care: gentle moisturizing, light besan-haldi pack, aloe vera. Homeopathic medicines pregnancy mein safe hoti hain — lekin koi bhi medicine bina doctor ke mat lein.',
    },
    {
      _key: 'faq17',
      question: 'Kya diet se Acanthosis Nigricans theek ho sakti hai?',
      answer: 'Diet alone se AN completely cure nahi hogi — lekin diet change AN treatment ka sabse important lifestyle pillar hai. Low glycemic index foods: oats, brown rice, millets, dals — ye insulin spike nahi karte. Sugar + maida band: ye insulin resistance ka main driver hai. Vegetables: karela, methi, palak — natural insulin sensitizers. Proper hydration: 8-10 glass water daily. Results: Strict low glycemic diet + exercise ke saath 2-3 months mein skin improvement visible hone lagti hai. Diet change + homeopathic treatment combination = fastest aur most sustainable results for AN.',
    },
    {
      _key: 'faq18',
      question: 'Acanthosis Nigricans kitne time mein theek hoti hai?',
      answer: 'Treatment duration cause pe depend karta hai. Obesity-related AN: 3-6 months consistent weight loss aur diet change se noticeable improvement. PCOS-related: Hormonal treatment shuru hone ke 4-8 months mein. Drug-induced: Responsible medicine band hone ke baad kuch weeks-months mein. Homeopathic treatment: 4-9 months typically, depending on how deep the root cause is. Complete resolution: AN completely fade ho sakti hai jab cause properly controlled ho. Patience important hai — ye raat bhar nahi badli, raat bhar nahi jayegi.',
    },
    {
      _key: 'faq19',
      question: 'Kya bachchon ko bhi homeopathy se treat kar sakte hain AN mein?',
      answer: 'Haan — aur bacchon ke liye homeopathy especially suitable hai. Kyunki ye highly diluted medicines hain — side effects practically nil hoti hain growing children mein. Metabolic drugs jo adults mein use hote hain wo bacchon mein kaafi careful use require karti hain — homeopathy ka ye advantage hai. Bacchon mein AN ka cause usually obesity ya insulin resistance hota hai — homeopathic treatment metabolic function improve karne mein, weight management mein, aur skin ke andar ke changes ko address karne mein help karta hai.',
    },
    {
      _key: 'faq20',
      question: 'Kaale rang ke areas pe kon si test karwani chahiye?',
      answer: 'Agar aapko Acanthosis Nigricans suspected hai to ye essential tests hain: Fasting blood sugar — diabetes/prediabetes check. HbA1c — 3 month average blood sugar. Fasting insulin levels + HOMA-IR — insulin resistance directly measure karta hai. Thyroid profile (TSH, T3, T4) — hypothyroidism rule out. Lipid profile — metabolic syndrome check. Mahilaon mein: hormonal profile (LH, FSH, testosterone, DHEA, AMH) — PCOS rule out. If sudden onset or spreading fast: imaging may be needed to rule out malignant AN.',
    },
    {
      _key: 'faq21',
      question: 'Kya stress se bhi AN ho ya badh sakti hai?',
      answer: 'Haan — stress AN ko worsen kar sakta hai. Mechanism ye hai: Chronic stress se cortisol hormone badh jaata hai. Cortisol insulin resistance trigger karta hai. Insulin resistance AN ka main driver hai. Isliye jo log already insulin resistance ki wajah se AN mein hain — stress se unki condition aur deteriorate hoti hai. Stress management: Regular yoga + meditation, proper 7-8 ghante ki neend, social connection — ye sab AN management mein indirect but real fayda dete hain.',
    },
    {
      _key: 'faq22',
      question: 'Kya Acanthosis Nigricans sirf gardan pe hoti hai?',
      answer: 'Nahi — AN gardan pe sabse zyada visible hai isliye log wahan notice karte hain. Lekin ye aur bhi jagah ho sakti hai: Bagal (underarms) — bohot common. Kamar ke neeche / belt area — inner thighs. Knuckles, elbows, knees — acral type. Severe cases mein: lips, mouth ke paas, nipple area, navel. Jitni zyada jagah affect ho — utna zyada severe underlying cause hota hai. Widespread sudden AN especially adults mein — turant doctor se milein.',
    },
    {
      _key: 'faq23',
      question: 'Kya AN se koi skin infection hone ka risk hai?',
      answer: 'Haan — AN wale areas mein skin folds mein moisture trap hoti hai. Isse fungal infection (candidiasis / ringworm) ka risk badh jaata hai, especially underarms aur inner thighs mein. Garmi aur barsaat mein risk aur zyada. Prevention: Affected areas ko dry rakhein — especially nahan ke baad. Breathable cotton kapde pehnen. Antifungal powder use kar sakte hain (doctor ki salaah se). Agar itching + redness + white patches dikhein AN ke saath — fungal infection ho sakta hai, dermatologist se milein.',
    },
    {
      _key: 'faq24',
      question: 'AN mein kya nahi lagana chahiye skin pe?',
      answer: 'Ye cheezein BILKUL avoid karein AN affected skin pe: Mercury-based fairness creams — toxic, skin damage karte hain. High-potency steroid creams (without prescription) — skin thinning, rebound darkening. Chemical peels at home — skin irritation + worsening. Harsh scrubbers / walnut scrub — microtears + inflammation. Strong fragrance products — skin irritation in sensitive folds. Safe options: Aloe vera gel, ceramide-based moisturizer, Vitamin C serum (dermatologist-approved), niacinamide (gentle, safe).',
    },
    {
      _key: 'faq25',
      question: 'Homeopathy aur allopathy ek saath le sakte hain AN mein?',
      answer: 'Haan — bilkul le sakte hain, aur kai cases mein ye combination best result deta hai. Especially jab: Diabetes medications chal rahi hoon (metformin etc.) — homeopathy ke saath safe hai. PCOS ke liye hormonal medicines — saath mein homeopathy complementary role mein kaam karti hai. Homeopathy is case mein root cause ki depth se healing mein help karti hai. Important: Dono doctors ko bataayein ki aap kya le rahe hain — transparency zaroori hai. Homeopathy allopathy ki dushman nahi hai — ye complementary approach hai.',
    },
  ],

  sources: [
    { _key: 's1', text: 'CCRH (Central Council for Research in Homoeopathy) — Annual Reports', url: 'https://ccrhindia.nic.in', year: '2019-2022' },
    { _key: 's2', text: 'Indian Journal of Dermatology — Acanthosis Nigricans review articles', url: '', year: '2018-2023' },
    { _key: 's3', text: 'American Academy of Dermatology — Acanthosis Nigricans Overview', url: 'https://www.aad.org', year: '2023' },
    { _key: 's4', text: 'Mayo Clinic — Acanthosis Nigricans Symptoms & Causes', url: 'https://www.mayoclinic.org', year: '' },
    { _key: 's5', text: 'Lancet GBD Study — Diabetes prevalence India', url: 'https://www.thelancet.com', year: '2022' },
    { _key: 's6', text: 'Journal of Research in Homoeopathy — Metabolic Skin Disorders', url: '', year: '2020-2021' },
  ],

  quickFacts: [
    'Acanthosis Nigricans sirf skin problem nahi — ye body ka internal signal hai. Aksar diabetes ya PCOS se 2-5 saal pehle dikhti hai.',
    'India mein estimated 30-40% insulin-resistant Indians mein AN ke visible signs hote hain',
    'Cause pe depend: 3-9 months mein visible improvement possible with proper treatment + lifestyle changes',
  ],

  doctorNote: 'Mere clinic mein AN ke jo cases aate hain unme se zyada tar 20-35 saal ki mahilayein hain jinhe PCOS ki wajah se ye condition develop hui hoti hai — aur kaafi log 2-3 saal se "fairness cream" laga rahe hote hain bina kisi fayade ke. Jab inhe pehli baar explain karta hoon ki ye skin ki nahi, insulin ki problem hai — tab se treatment sahi direction mein shuru hoti hai. Homeopathic treatment se in cases mein hormonal balance ke saath skin bhi systematically improve hoti hai — aur sustainable results milte hain.',

  reviewDate: 'April 2026',
}

async function seed() {
  console.log('🌱 Seeding Acanthosis Nigricans...')
  const result = await client.createOrReplace(doc)
  console.log('✅ Acanthosis Nigricans created/updated:', result._id)
  console.log('🌐 Live at: https://homeopedia.in/diseases/acanthosis-nigricans')
}

seed().catch(console.error)
