import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-prediabetes',
  _type: 'disease',
  title: 'Prediabetes / Insulin Resistance',
  hindiName: 'Preshugur / Madhumeh Se Pehle Ki Avastha',
  slug: { _type: 'slug', current: 'prediabetes' },
  category: 'Endocrine',
  publishedAt: '2026-05-04T00:00:00.000Z',
  metaTitle: 'Prediabetes Treatment in Hindi – Control, Diet aur Homeopathy',
  metaDescription: 'Prediabetes aur insulin resistance ke symptoms, causes, diet chart aur homeopathic treatment – simple Hinglish mein. Verified, doctor-reviewed.',

  heroText: 'Prediabetes ek warning stage hai jisme aapka blood sugar normal se zyada hota hai – lekin itna nahi ki use "diabetes" kaha ja sake. Is stage mein pancreas insulin to banata hai, lekin body usse achi tarah use nahi kar paati – ise insulin resistance kehte hain. Agar is stage ko seriously liya jaye aur lifestyle improve ki jaye, to Type 2 diabetes ko rokna bilkul possible hai. India mein 136 million log prediabetic hain (ICMR-INDIAB 2023) – aur zyada tar ko pata nahi. Ye "line cross karne se pehle ka ek golden chance" hai.',

  quickFacts: {
    whatItIs: 'Fasting blood sugar 100-125 mg/dL ya HbA1c 5.7-6.4% – diabetes se pehle ki reversible stage; cells insulin ka signal sahi se receive nahi karti (insulin resistance)',
    howCommon: 'India mein 136 million log prediabetic – ICMR-INDIAB 2023; zyada tar ko pata nahi; har saal 5-10% prediabetics diabetes mein convert hote hain',
    treatmentDuration: 'Lifestyle changes se 3-6 mahine mein noticeable improvement; homeopathic treatment 6-12 mahine; 12-18 mahine mein full reversal possible',
    successRate: 'CCRH multicenter study mein fasting blood sugar average 148 se 118 mg/dL tak aaya (treatment group) vs. 148 se 142 (control group); HbA1c aur fatigue dono mein meaningful improvement',
  },

  causes: [
    'Pancreas ka overload – saalon tak refined carbs aur sugar khaane se cells "deaf" ho jaati hain insulin signal ke liye; insulin resistance ka root cause',
    'Belly fat (visceral fat) – kamar ke aas paas jama fat liver aur muscles mein insulin resistance create karta hai; ye sabse dangerous type ki fat hai',
    'Sedentary lifestyle – muscles glucose ka sabse bada "sponge" hain; exercise na karne se muscles glucose absorb karna band kar deti hain',
    'Chronic stress + cortisol – baar baar stress hormone (cortisol) release hone se blood sugar naturally badh jaata hai; office stress, family tension sab count hoti hai',
    'Sleep deprivation – 6 ghante se kam neend se bhi insulin sensitivity directly kam hoti hai; studies mein ye clearly demonstrated hai',
    'Genetic predisposition – agar parents ya siblings ko diabetes hai to risk 2-3 guna zyada hota hai; family history strong risk factor hai',
  ],

  riskFactors: [
    '35+ umar ke log especially jinhe belly fat hai – age ke saath insulin sensitivity naturally ghatti hai',
    'PCOS wali mahilaayein – insulin resistance PCOS ka root cause bhi hoti hai; 70% PCOS cases mein insulin resistance hoti hai',
    'Jo log din mein 8+ ghante baithke kaam karte hain – sedentary desk jobs high-risk category hai',
    'Jo log roz maida, white rice, meetha, cold drinks lete hain – high GI diet consistent insulin resistance driver hai',
    'Jinhe pehle kabhi gestational diabetes (pregnancy diabetes) raha ho – lifelong risk remain karta hai',
    'Jo log regularly neend poori nahi karte (6 ghante se kam) – chronic sleep debt metabolic syndrome ka trigger hai',
    'High stress jobs ya chronic anxiety wale log – cortisol-driven blood sugar elevation common hai',
  ],

  complications: [
    'Type 2 Diabetes – untreated prediabetes mein 5-10 saal mein full diabetes; har saal 5-10% prediabetics convert hote hain; isliye abhi action zaroori hai',
    'Heart Disease – insulin resistance akela hi heart attack aur stroke ka independent risk factor hai; diabetes aane ka intezaar mat karo',
    'NAFLD (Non-Alcoholic Fatty Liver) – liver pe fat jamne lagti hai jo liver damage tak le ja sakti hai; fatty liver + prediabetes combination aaj common presentation hai',
    'Nerve Damage – early insulin resistance mein bhi pairon mein jhanjhanahat aur kamzori shuru ho sakti hai; neuropathy diabetes se pehle bhi start ho sakti hai',
  ],

  types: [
    {
      _key: 'type-ifg',
      name: 'Impaired Fasting Glucose (IFG) – Khali Pet Sugar Zyada',
      description: 'Fasting blood sugar 100–125 mg/dL ke beech aata hai. Subah khali pet test karne par ye value aati hai. Body raat bhar ka glucose properly clear nahi kar paati. Ye sabse common early detection type hai – routine health checkup mein aksar pata chalta hai.',
    },
    {
      _key: 'type-igt',
      name: 'Impaired Glucose Tolerance (IGT) – Khana Khane Ke Baad Sugar Zyada',
      description: '75g glucose pine ke 2 ghante baad blood sugar 140–199 mg/dL ke beech aata hai. Khana khane ke baad pancreas ka response slow hota hai. Ye type post-meal symptoms se pehchana jaata hai – khaane ke baad unusual thakaan is type ki pehchaan hai.',
    },
    {
      _key: 'type-combined',
      name: 'Combined IFG + IGT – Dono Milake (Highest Risk)',
      description: 'Dono tests mein abnormal values – ye highest risk category hai. Agar ye combination hai to doctor se milna aur aggressive lifestyle change karna zaroori hai. Is type mein diabetes conversion fastest hoti hai agar intervention na kiya jaaye.',
    },
    {
      _key: 'type-metabolic',
      name: 'Insulin Resistance with Metabolic Syndrome',
      description: 'Blood sugar ke saath-saath belly fat, high triglycerides, low HDL cholesterol, aur high BP bhi hota hai. Ye metabolic syndrome kehlata hai aur heart disease ka bhi risk badha deta hai. Is type mein sirf blood sugar nahi – poori metabolic picture treat karni padti hai.',
    },
  ],

  symptoms: [
    {
      _key: 'sym-early',
      category: 'Early Warning Signs (Jo Log Ignore Kar Dete Hain)',
      items: [
        'Khaana khane ke 1-2 ghante baad thakaan – "food coma" feel karna; especially high-carb meal ke baad',
        'Meethe ki craving jo bhadti jaaye – khana khane ke baad bhi mithai chahiye; willpower se nahi ruk paate',
        'Kamar ke aas paas fat badhna jo diet se nahi ghatta – visceral fat ka sign',
        'Subah uthne pe bhi thaka hua feel karna – raat bhar neend ke baad bhi freshness nahi',
      ],
    },
    {
      _key: 'sym-moderate',
      category: 'Moderate Stage Symptoms',
      items: [
        'Baar baar pyaas – 2-3 litre paani pine ke baad bhi pyaas lag rahi hai',
        'Baar baar peshab – raat ko bhi uthna pad raha hai; nocturia',
        'Aankhon ki roshni thodi dhundli ya blurry – khaas kar shaam ko; fluctuating vision',
        'Haath-pairon mein jhanjhanahat ya numbness – early neuropathy ka sign; serious signal hai',
      ],
    },
    {
      _key: 'sym-skin',
      category: 'Skin & Other Signs (Bahut Se Log Nahi Jaante)',
      items: [
        'Acanthosis Nigricans – gaarden, kaankhon (armpits), ya godon ke peeche kali, moti, velvet jaisi skin; insulin resistance ka classic skin sign',
        'Skin tags – gaarden ya kaankhon pe chhoti chhoti skin ki extra growths; insulin resistance se linked',
        'Baar baar fungal infections – mahilaon mein vaginal infections ya mard/aurat dono mein jock itch; high sugar environment fungus ko encourage karta hai',
      ],
    },
  ],

  ccrhEvidence: {
    improvementRate: 'Fasting blood sugar 148 → 118 mg/dL (treatment group); control group mein sirf 148 → 142',
    avgTreatmentPeriod: '6 se 12 mahine (prediabetes management ke liye)',
    citation: 'Journal of Evidence-Based Complementary & Alternative Medicine | 2019 | CCRH Multicenter Study | www.ccrhindia.nic.in',
    keyFindings: [
      'Homeopathic treatment group mein fasting glucose aur HbA1c dono mein meaningful reduction – control group se significantly better',
      'Fatigue aur energy levels mein subjective improvement reported – patients ki daily functioning better hui',
      'Side effects practically nil – conventional treatment group ke comparison mein no liver/kidney burden',
    ],
  },

  homeopathyBenefits: [
    'Prediabetes mein homeopathy is liye effective hai kyunki ye sirf blood sugar ka number nahi dekha – ye aapki poori metabolic picture dekhta hai. Jaise: aap kitna thake rehte hain, aapko kya craving hai, aapki digestive pattern kaisi hai, aap stress ko kaise handle karte hain – ye sab milake ek individualized treatment decide karta hai jo pancreatic function aur insulin sensitivity dono pe kaam karta hai. Is stage mein – jab disease reversible hai – homeopathy sabse zyada effective hoti hai.',
    'Pancreatic function support – kuch homeopathic medicines direct pancreatic beta cells pe kaam karti hain jo insulin secretion regulate karte hain',
    'Meethe ki excessive craving directly target hoti hai – willpower ka sawaal nahi reh jaata; homeopathy mein craving ek treatable symptom hai',
    'Stress hormone (cortisol) control – cortisol-driven blood sugar spikes ko address karna; especially agar stress trigger hai',
    'PCOS + Prediabetes combination – mahilaon mein dono ek saath aate hain; individualized treatment dono ko ek saath address kar sakta hai',
  ],

  medicines: [
    {
      _key: 'med-syzygium',
      name: 'Syzygium Jambolanum',
      bestFor: 'Baar baar pyaas + peshab, clear blood sugar symptoms',
      keyIndications: [
        'Baar baar pyaas aur peshab ki shikayat ke saath blood sugar control karna chahte hain',
        'Sugar ke symptoms clearly feel ho rahe hon – thirst, frequent urination, thakaan',
        'Jamun (Indian blackberry) se bani hai – ayurvedic tradition mein bhi blood sugar ke liye use',
        'CCRH studies mein pancreatic function support ke liye documented use',
      ],
    },
    {
      _key: 'med-uranium-nit',
      name: 'Uranium Nitricum',
      bestFor: 'Excessive hunger, weight gain despite eating less, abdominal bloating',
      keyIndications: [
        'Khana khane ke baad bhi excessive hunger – thakaan aur abdominal bloating saath mein',
        'Weight badhta ja raha ho despite khaane ki kaatna – metabolic dysfunction',
        'Digestive weakness ke saath blood sugar issue – insulin resistance early stages',
        'Metabolic processes ko regulate karne mein kaam karta hai specifically',
      ],
    },
    {
      _key: 'med-phos-acid',
      name: 'Phosphoric Acid',
      bestFor: 'Mental + physical thakaan, stress-triggered prediabetes, hair loss saath',
      keyIndications: [
        'Mental aur physical thakaan ek saath – grief, emotional stress, ya overwork ki wajah se',
        'Sweet craving ke saath hair loss bhi ho – combination symptom',
        'Nervous exhaustion aur metabolic weakness dono address karti hai',
        'Prediabetes mein jab stress trigger hai aur patient mentally "washed out" feel karta hai',
      ],
    },
    {
      _key: 'med-lycopodium',
      name: 'Lycopodium Clavatum',
      bestFor: 'Fatty liver + prediabetes combination, evening sugar craving, bloating',
      keyIndications: [
        'Shaam 4-8 baje ke beech sugar ya chai ki craving badh jaaye – Lycopodium ka khas time',
        'Pet mein gas aur bloating ho, liver area mein discomfort',
        'Fatty liver + prediabetes combination – aaj bahut common presentation',
        'Liver aur digestive function dono pe kaam karta hai – top candidate is profile mein',
      ],
    },
    {
      _key: 'med-natrum-sulph',
      name: 'Natrum Sulphuricum',
      bestFor: 'Liver-driven insulin resistance, humidity mein worsening, yellowish skin',
      keyIndications: [
        'Humidity aur garam mausam mein symptoms zyada badhen',
        'Liver problem history ho ya skin pe yellowish tinge aaye',
        'Liver cells ki detox capacity support karta hai – blood sugar metabolism ke liye zaroori',
        'Fatty liver + prediabetes profile ke liye Lycopodium ke saath consider kiya jaata hai',
      ],
    },
  ],

  dietInclude: [
    {
      _key: 'di-grains',
      category: 'Low Glycemic Grains & Carbs',
      emoji: '🌾',
      items: [
        'Jowar (Sorghum) – maida se 3x slow digestion, sugar spike nahi karta, fiber-rich; roti ke roop mein best',
        'Bajra (Pearl Millet) – magnesium rich hai jo insulin sensitivity directly improve karta hai; winter mein especially',
        'Oats (saabut) – beta-glucan fiber hai jo glucose absorption slow karta hai; subah breakfast ke liye ideal',
        'Brown rice – white rice se better fiber content; small katori hi lein, zyada nahi',
      ],
    },
    {
      _key: 'di-vegetables',
      category: 'Vegetables & Greens',
      emoji: '🥦',
      items: [
        'Karela (Bitter Gourd) – naturally blood sugar lower karne ka proven effect; khali pet juice sabse effective, saptah mein 3-4 baar',
        'Methi (Fenugreek) – seeds mein soluble fiber hai jo post-meal sugar spikes rokta hai; raat ko bhigo ke subah khao',
        'Palak, Kale – magnesium + chromium dono hain jo insulin function ke liye zaroori nutrients',
        'Bhindi (Okra) – mucilaginous fiber hai jo gut mein sugar absorption slow karta hai; sabzi ya stew mein',
      ],
    },
    {
      _key: 'di-protein',
      category: 'Proteins & Healthy Fats',
      emoji: '🥚',
      items: [
        'Moong dal – low GI, easy to digest, protein aur fiber dono; prediabetes ke liye best dal',
        'Ande (Eggs) – pure protein, zero carbs, insulin spike bilkul nahi karte; roz ek poora anda safe hai',
        'Akhrot (Walnuts) – omega-3 hai jo inflammation aur insulin resistance dono ghataata hai; mutthi bhar roz',
        'Dahi (plain, unsweetened) – gut bacteria improve karta hai jo insulin sensitivity se directly linked hai',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da-high-gi',
      category: 'High GI Carbs & Sugar',
      emoji: '🍬',
      items: [
        'White rice (zyada matra mein) – GI 72+ hai, turant blood sugar spike karta hai; brown rice ya jowar prefer karein',
        'Maida (white flour) – roti, bread, biscuits, naan sab avoid karo; zero fiber, maximum spike',
        'Cold drinks, packaged juices – 1 can mein 8-10 teaspoon sugar; "healthy" fruit juice bhi spike karta hai',
        'Meethai, mithai, gulab jamun – direct sugar load, koi nutrition nahi; special occasions pe bhi limit karein',
      ],
    },
    {
      _key: 'da-processed',
      category: 'Processed & Packaged Foods',
      emoji: '📦',
      items: [
        'Namkeen, chips, crackers – hidden sugar + refined starch combination; snack time ka worst choice',
        '"Diabetic" biscuits aur cookies – marketing trick hai; inme bhi sugar alcohols hote hain jo spike karte hain',
        'Instant noodles, flavored instant oats – artificial additives gut bacteria pe bura asar karte hain',
        'Packaged breakfast cereals – "healthy" dikhne wale cornflakes ka GI bhi 80+ hai; avoid karo',
      ],
    },
    {
      _key: 'da-drinks',
      category: 'Drinks & Extras',
      emoji: '🚫',
      items: [
        'Chai mein 2+ teaspoon cheeni – roz 3-4 cup mein 30+ gram sugar; stevia ya kuch nahi use karein',
        'Alcohol – liver ko distract karta hai glucose production se; fasting sugar badhaata hai',
        'Energy drinks – caffeine + sugar ka bomb; insulin resistance ke liye worst combination',
      ],
    },
  ],

  dos: [
    'Roz 30-45 min walk karo – muscles bina insulin ke bhi glucose absorb karti hain; prediabetes reversal ka #1 tool hai; medication ke barabar effective',
    'Khane ke baad 10-15 min chehel qadmi zaroor karo – post-meal sugar spike 20-30% tak ghataati hai; dinner ke baad bhi',
    'Neend poori karo (7-8 ghante) – neend ki kami se cortisol aur ghrelin dono badhte hain jo blood sugar directly affect karte hain',
    'Blood sugar ghar pe track karo – glucometer lo (500-800 rs); khane ke pehle aur 2 ghante baad reading lo; kaunsa khana spike karta hai jaano',
    'Stress management roz 10 min – pranayama, anulom vilom, ya deep breathing; cortisol control matlab blood sugar control',
    '3 mahine mein ek baar HbA1c test zaroor karwao – 3 mahine ka average batata hai; progress track karo',
    'Paani khane se 20-30 min pehle piyo – hunger regulate hota hai aur overeating kam hoti hai',
  ],

  donts: [
    'Khaana skip mat karo – khaas kar breakfast; 4-5 ghante bhooka rehne se liver emergency glucose release karta hai; "diet" ke naam pe bhooka rehna prediabetes mein ulta kaam karta hai',
    'Sirf fasting sugar dekh ke relax mat ho jaao – post-meal sugar (2hr after food) zyada dangerous hota hai arteries ke liye; dono track karo',
    '"Diabetic products" pe paise mat waste karo – "sugar-free" biskut mein bhi refined starch hoti hai jo blood sugar badhata hai',
    'TV ya phone dekhte khana mat khao – mindless eating se 30-40% zyada khate hain; blood sugar spikes dramatically',
    'Late night khaana mat khao (9 PM ke baad) – raat ko pancreas ka response slow hota hai; fat storage zyada hoti hai',
    'Doctor ki salaah ke bina koi bhi supplement ya herbal medicine mat lo – kuch diabetes supplements real medicines se interact karte hain',
  ],

  seasonalCare: {
    summer: 'Dehydration blood sugar concentrate kar sakta hai – din mein 10-12 glass paani zaroori. Coconut water (nariyal paani) – 1 glass natural, without added sugar – electrolytes ke liye excellent. Cold drinks bilkul band karo – garmi mein craving zyada hoti hai, alternatives tayyar rakho (nimbu paani, jeera paani). Exercise subah 5-7 AM karo – garmi mein baad mein karna mushkil hota hai.',
    monsoon: 'Fungal infections ka risk badh jaata hai – dry rehna aur synthetic fabrics avoid karo. Bahar ka fried street food avoid karo – pakoda, samosa tempting hote hain lekin maida + oil combination hai. Exercise indoor option rakhna – gym ya home workout plan karo. Adraki chai mein cheeni mat daalo – ginger blood sugar ke liye helpful hai, cheeni nahi.',
    winter: 'Physical activity naturally ghatti hai – sardi mein diabetes progression fastest hoti hai; exercise consistency sabse zaroori. Morning walk maintain karo – 15 min dhoop mein zaroor niklo (Vitamin D ke liye; deficiency insulin resistance se linked hai). Root vegetables (gajar, shalgam) – healthy options hain moderate matra mein. Annual blood test schedule karo – HbA1c, fasting glucose, lipid profile; transition months mein stress zyada hota hai.',
  },

  faqs: [
    {
      _key: 'faq-1',
      question: 'Prediabetes kya hota hai aur normal sugar se kaise alag hai?',
      answer: 'Prediabetes mein fasting blood sugar 100–125 mg/dL ke beech hoti hai – normal 70-99 hai aur diabetes 126+ hai. Ye danger zone hai, lekin wapas aane ka raasta khula hai. Normal sugar mein body glucose perfectly process karti hai. Prediabetes mein body ki cells insulin ka signal theek se receive nahi karti – ise insulin resistance kehte hain. Ye condition "disease" nahi hai abhi – ye ek warning light hai. Lifestyle changes se 60% tak prediabetics apni sugar normal range mein wapas la sakte hain.',
    },
    {
      _key: 'faq-2',
      question: 'Prediabetes ke symptoms kya hote hain – kaise pata chalega?',
      answer: 'Prediabetes ek "silent" condition hai – zyada tar log koi obvious symptom feel nahi karte. Lekin kuch common signs hain: khaana khane ke baad unusual thakaan, meethe ki zyada craving, kamar ke aas paas fat badhna jo nahi ghatta, gaarden ya kaankhon pe kali moti skin (acanthosis nigricans), aur baar baar fungal infections. Sabse reliable sign: ye tab pata chalta hai jab routine blood test karo. Agar aap 35+ hain aur belly fat hai – saal mein ek baar fasting sugar test zaroor karwao.',
    },
    {
      _key: 'faq-3',
      question: 'Kya prediabetes permanently theek ho sakti hai?',
      answer: 'Haan – prediabetes REVERSIBLE hai, ye diabetes se alag hai. Jo log seriously lifestyle change karte hain unme blood sugar normal range mein wapas aati hai aur saalon tak normal rehti hai. American Diabetes Prevention Program study mein jo log 7% weight lose karte hain aur week mein 150 min walk karte hain, unme diabetes ka risk 58% tak ghata. Homeopathy is journey mein support karta hai – cravings control, energy improve, aur metabolic function address karke. Koi shortcut nahi – lekin possible zaroor hai.',
    },
    {
      _key: 'faq-4',
      question: 'Kya homeopathy prediabetes aur insulin resistance mein kaam karta hai?',
      answer: 'Haan – prediabetes ke liye homeopathy ek effective approach hai, khaas kar jab treatment individualized ho. Homeopathy ka fayda sirf blood sugar number se nahi hai – ye poori metabolic picture dekh ke kaam karta hai: aapki fatigue, cravings, digestive pattern, stress response sab address hote hain. CCRH multicenter study mein early-stage patients mein fasting glucose average 148 se 118 mg/dL tak aaya – control group mein sirf 148 se 142. Energy levels aur HbA1c dono mein improvement dikhi hai.',
    },
    {
      _key: 'faq-5',
      question: 'Prediabetes mein kya khana chahiye aur kya nahi khana chahiye?',
      answer: 'Khao: Jowar, bajra, oats, brown rice (kam matra mein), karela, methi, palak, moong dal, eggs, dahi, akhrot. Ye sab blood sugar slowly raise karte hain. Nahi khao: Maida, white rice, packaged biscuits, cold drinks, juice (even fruit juice), meethai, aur kuch bhi jisme refined sugar ya starch ho. 1 rule jo sab se zyada kaam karta hai: plate ka aadha hissa vegetables rakho, quarter protein, quarter grain – aur meetha khatam karo.',
    },
    {
      _key: 'faq-6',
      question: 'Kya exercise se prediabetes control ho sakti hai?',
      answer: 'Exercise prediabetes reversal ka #1 tool hai – blood sugar medication ke barabar effective hai kuch cases mein. Muscles body ki glucose ki sabse badi consumer hain. Jab aap chalta hain ya exercise karte hain, muscles bina insulin ke bhi glucose absorb karti hain – matlab insulin resistance bypass ho jaati hai. Roz 30 min walk + khane ke baad 10-15 min chehel qadmi – ye combination fasting aur post-meal dono sugar zyada effectively control karta hai. Sirf 4-6 hafte mein results blood test mein dikhenge.',
    },
    {
      _key: 'faq-7',
      question: 'Prediabetes ka HbA1c kitna hota hai aur test kab karwana chahiye?',
      answer: 'HbA1c 5.7%–6.4% = Prediabetes range. 5.7% se kam = normal. 6.5%+ = Diabetes. HbA1c test 3 mahine ka average blood sugar batata hai – ek din ka nahi. Isliye ye zyada reliable hai daily fasting sugar se. Test kabhi karwao: pehla test abhi – agar 35+ hain ya risk factors hain. Fir har 3 mahine mein jab tak normal range mein wapas na aao. Agar normal ho jaao: saal mein ek baar maintain karo.',
    },
    {
      _key: 'faq-8',
      question: 'Prediabetes mein kaunse tests zaroori hain?',
      answer: 'Minimum 4 tests karo ek saath: Fasting Blood Glucose (normal: <100 mg/dL), HbA1c (normal: <5.7%), Fasting Insulin (normal: <10 uIU/mL – ye insulin resistance directly dikhata hai), Lipid Profile (triglycerides, HDL). Bonus: Vitamin D level – deficiency insulin resistance se linked hai aur India mein 70%+ log deficient hain. Ye sab tests ek saath 600-800 rupees mein ho jaate hain. Doctor se milne se pehle ye results le jaao – discussion zyada meaningful hogi.',
    },
    {
      _key: 'faq-9',
      question: 'Kya prediabetes se PCOS aur thyroid bhi hota hai?',
      answer: 'Haan – ye teeno ek doosre se deeply connected hain. Insulin resistance akela PCOS ka main driver hai 70% cases mein. Thyroid (hypothyroidism) mein bhi metabolism slow hone se insulin resistance badhti hai. Aur prediabetes akela weight gain aur irregular periods create kar sakta hai jo phir PCOS aur thyroid ko aur worsen karta hai – ek vicious cycle hai. Isi liye agar aapko PCOS ya thyroid hai to prediabetes test zaroor karwao – aur vice versa. Homeopathy mein ye teeno ek saath address karna possible hai.',
    },
    {
      _key: 'faq-10',
      question: 'Kya prediabetes mein doodh, chai aur chai-patti pi sakte hain?',
      answer: 'Doodh – haan, kam fat wala dahi ya doodh theek hai moderate matra mein; cheeni nahi. Chai – haan, lekin cheeni zero ya stevia; 2-3 cup din mein theek hai. Chai mein adrak, dalchini (cinnamon), ya elaichi dalo – cinnamon blood sugar ke liye genuinely helpful hai studies mein. Packaged tea with sugar ya chai masala premix – bilkul nahi. Ek practical rule: chai mein cheeni band karo – ye ek change akele monthly sugar mein noticeable difference la sakti hai.',
    },
    {
      _key: 'faq-11',
      question: 'Prediabetes mein weight loss kitna zaroori hai aur kaise karein?',
      answer: '5-7% weight loss bhi significant hai – 70 kg ke insaan ko sirf 3.5-5 kg ghataana hai. Is level pe insulin sensitivity measurably improve hoti hai. Crash diet mat karo – slowly lose weight: 0.5 kg per week ideal hai. Best combination: calorie restriction (200-300 cal/day kam) + daily walk + week mein ek baar strength training (pushups, squats). Belly fat pehle ghatta hai jab blood sugar improve hoti hai – ye aapko encourage karega.',
    },
    {
      _key: 'faq-12',
      question: 'Kya prediabetes reversible hai ya hamesha ke liye rehti hai?',
      answer: 'Bilkul reversible hai – aur ye diabetes se sabse badi difference hai. Studies mein dekha gaya hai ki jo log genuinely lifestyle improve karte hain, unme normal blood sugar 5+ saalon tak maintain hoti hai. Lekin "reverse" ka matlab yeh nahi ki phir kuch bhi khao – tendency rehti hai. Sahi lifestyle maintain karo to practical terms mein aap normal insaan ki tarah jeete ho. Doctor se regular checkup karte rehna zaroori hai – saal mein ek baar HbA1c once stabilize.',
    },
    {
      _key: 'faq-13',
      question: 'Prediabetes mein kaun se fruits kha sakte hain?',
      answer: 'Safe fruits (moderate mein): Guava (amrood) – low GI, fiber rich; Papaya – medium GI lekin fiber badhiya; Apple ya Pear – skin ke saath khao; Berries – blueberry, strawberry – excellent. Avoid karo: Mango (aam), banana (kela), grapes (angoor), chikoo, lychee – ye sabhi high sugar fruits hain. Golden rule: Fruit poora khao – juice nahi. Pura fruit mein fiber hai jo sugar absorption slow karta hai. Juice mein sirf sugar bacha rehta hai.',
    },
    {
      _key: 'faq-14',
      question: 'Kya prediabetes mein ghee aur coconut oil kha sakte hain?',
      answer: 'Haan – pure ghee small amounts mein (1-2 tsp/day) actually beneficial hai. Studies suggest karte hain ki ghee mein short-chain fatty acids hain jo insulin sensitivity pe positive effect rakhte hain. Coconut oil (virgin) bhi moderate amount mein theek hai. Asli problem refined vegetable oils hain – sunflower, soybean, corn oil – ye inflammation badhate hain jo insulin resistance ka root cause hai. Avoid: hydrogenated oils (vanaspati), margarine, repeated-heating oil.',
    },
    {
      _key: 'faq-15',
      question: 'Prediabetes aur diabetes mein kya farak hai?',
      answer: 'Prediabetes: Fasting sugar 100-125, HbA1c 5.7%-6.4% – REVERSIBLE stage. Diabetes: Fasting sugar 126+, HbA1c 6.5%+ – manageable but not reversible. Prediabetes mein pancreas abhi bhi insulin bana raha hai – sirf cells sun nahi rahi (insulin resistance). Diabetes mein ya to pancreas kam insulin banata hai ya cells bilkul response nahi deti. Isliye prediabetes pe react karna zaroori hai – ye woh stage hai jab body wapas normal ho sakti hai.',
    },
    {
      _key: 'faq-16',
      question: 'Prediabetes mein stress ka kitna role hai?',
      answer: 'Bahut bada – jo log samajhte nahi. Cortisol (stress hormone) direct blood sugar raise karta hai – liver glucose release karta hai emergency fuel ke taur pe. Agar aap chronically stressed hain (job, family, financial) – aapka fasting sugar baar baar elevated milega chahe diet perfect ho. Homeopathy is perspective se khas helpful hai – stress aur metabolic issues ko ek saath address karna individual treatment mein possible hai. Roz 10 min deep breathing ya anulom vilom – clinically proven hai ki cortisol ghata deta hai.',
    },
    {
      _key: 'faq-17',
      question: 'Prediabetes mein neend ka kya connection hai?',
      answer: 'Direct aur strong connection hai. Sirf ek raat 4-5 ghante neend se aglo din insulin sensitivity significantly ghatti hai. Chronic sleep deprivation se ghrelin (hunger hormone) badh jaata hai aur leptin (fullness hormone) ghatta hai – matlab zyada khaoge aur meetha khaoge. Neend mein growth hormone release hoti hai jo tissue repair aur metabolism dono ke liye zaroori hai. Target: 7-8 ghante neend – prediabetes management mein ye medication ke barabar important hai.',
    },
    {
      _key: 'faq-18',
      question: 'Kya bacchon ko bhi prediabetes ho sakti hai?',
      answer: 'Haan – aur ye badhta ja raha hai India mein. Junk food, screen time, physical inactivity wale bachche – khaas kar jo overweight hain – unhe risk hai. Bachpan mein symptoms: weight gain especially belly area, darkening skin in neck/armpits (acanthosis), bahut zyada thakaan. Agar bachche ka BMI high hai ya family history strong hai, to 10+ age pe blood test karwao. Prevention: school-age se hi physical activity aur ghar ka khana.',
    },
    {
      _key: 'faq-19',
      question: 'Prediabetes mein alcohol kab aur kitna?',
      answer: 'Simple answer: avoid karo jab tak control na aaye. Alcohol liver ko busy rakhta hai – liver tab glucose release karna band kar deta hai, fasting sugar abnormal ho jaati hai. Beer aur sweet cocktails worst hain – direct sugar load. Dry red wine worst nahi hai mein se – lekin phir bhi limited. Agar aap serious ho results ke baare mein – 3 mahine alcohol band karo aur blood test karo – difference khud dikhega.',
    },
    {
      _key: 'faq-20',
      question: 'Kya prediabetes mein vitamin supplements khaane chahiye?',
      answer: '3 supplements genuinely evidence-backed hain prediabetes mein: Vitamin D (especially India mein 70%+ log deficient hain – 2000 IU daily reasonable hai), Magnesium (insulin receptor function ke liye directly zaroori – 300-400 mg/day), Berberine (natural compound – HbA1c pe metformin ke barabar effect dikhaya hai kuch studies mein). Baaki supplements ke baare mein doctor se pooch ke lo. Bina test ke Vitamin D megadose mat lo.',
    },
    {
      _key: 'faq-21',
      question: 'Prediabetes mein kab turant doctor ke paas jaana chahiye?',
      answer: 'Turant jaao agar: Fasting sugar consistently 130+ aa raha ho, bahut zyada pyaas + baar baar peshab ek saath ho, weight unexpectedly ghatt raha ho bina koshish ke, aankhon ki roshni suddenly dhundli ho, haath-pairon mein numbness ya tingling badh rahi ho, ya koi wound ya cut bahut slow heal ho raha ho. Ye signs bata rahe hain ki diabetes aa chuka hai ya complications shuru ho rahi hain – immediate evaluation zaroori hai.',
    },
    {
      _key: 'faq-22',
      question: 'Intermittent fasting prediabetes mein kaam karta hai kya?',
      answer: 'Haan – research strongly support karta hai. 16:8 method (16 ghante fast, 8 ghante mein khana) insulin levels dramatically lower karta hai aur insulin sensitivity improve karta hai. India ke liye practical version: raat 8 baje se subah 12 baje tak kuch nahi – phir 12-8 PM window mein khana. Lekin: agar blood pressure medications le rahe ho ya kaafi weak feel karo – pehle doctor se pooch lo. Shuruat mein 12:12 se karo – gradually badhao.',
    },
    {
      _key: 'faq-23',
      question: 'Homeopathic treatment ke saath kya lifestyle changes sabse zaroori hain?',
      answer: 'Teen changes jo homeopathy ke saath milake sabse powerful results dete hain: Pehla – roz subah 30 min walk (insulin sensitivity ke liye single most effective action). Doosra – raat ka khana 7-8 PM tak khatam karo (circadian rhythm-aligned eating insulin regulation mein massive difference karta hai). Teesra – cheeni aur maida completely band karo pehle 3 mahine. Homeopathy in changes ko support karta hai – cravings control karke, energy de ke, aur body ki overall metabolic response improve karke.',
    },
    {
      _key: 'faq-24',
      question: 'Prediabetes diagnosis ke baad kya pehla kadam uthana chahiye?',
      answer: 'Ek hafte mein ye 5 kaam karo: Glucometer ghar le aao (500-800 rupees mein milta hai – basic zaroori tool hai), apna HbA1c karwao agar nahi kiya to, ek registered dietitian ya doctor se ek baar milke personalized meal plan banwao, roz 30 min walk start karo – chahe slowly, aur ek qualified homoeopath se milke apna individual profile discuss karo. Prediabetes mein jitni jaldi action lete ho, utna aasan hai wapas normal aana – "dekhte hain" attitude yahaan kaam nahi karta.',
    },
  ],

  relatedDiseases: [
    { _type: 'reference', _ref: 'disease-thyroid' },
    { _type: 'reference', _ref: 'disease-pcod' },
    { _type: 'reference', _ref: 'disease-fatty-liver' },
    { _type: 'reference', _ref: 'disease-acanthosis-nigricans' },
    { _type: 'reference', _ref: 'disease-hashimoto-thyroiditis' },
  ],
}

async function seed() {
  try {
    const result = await client.createOrReplace(doc)
    console.log('✅ Prediabetes / Insulin Resistance created/updated:', result._id)
    console.log('🌐 Live at: https://homeopedia.in/diseases/prediabetes')
  } catch (err) {
    console.error('❌ Error:', err)
  }
}

seed()
