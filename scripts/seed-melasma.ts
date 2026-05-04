import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-melasma',
  _type: 'disease',
  title: 'Melasma / Facial Pigmentation',
  hindiName: 'Rang Kaala Padna / Chehre Ka Daag / Jhaiyan',
  slug: { _type: 'slug', current: 'melasma' },
  category: 'Skin',
  publishedAt: '2026-05-04T00:00:00.000Z',
  metaTitle: 'Melasma ka Homeopathic Ilaj – Chehre Ki Pigmentation Hatane ka Tarika',
  metaDescription: 'Melasma, dark spots aur chehre ki pigmentation ke liye homeopathic treatment. Karan, prakar, diet chart, seasonal care aur 25+ sawalo ke jawab.',

  heroText: 'Melasma ek skin condition hai jisme chehre par – khaaskar gaalo, mathe, naak, aur thodi par – bhoore ya greyish-brown rang ke dhabbe aa jaate hain. Ye dhabbe symmetric hote hain, matlab dono taraf ek jaise dikhte hain. Is condition mein skin ke andar melanin (rang banana wala pigment) zyada matra mein banna shuru ho jaata hai. India mein yah samasya bahut aam hai – khaaskar un mahilaon mein jinki skin dhoop mein zyada expose hoti hai ya jinhe hormonal changes hote hain. Estimated 25-33% Indian women mein kisi na kisi degree mein melasma hota hai.',

  quickFacts: {
    whatItIs: 'Chehre par symmetric bhoore/greyish patches – melanin overproduction se; hormonal, UV-triggered, aur genetic factors milkar kaam karte hain; cosmetic hai lekin internal imbalance ka bhi signal',
    howCommon: 'India mein estimated 25-33% women affected – khaaskar 25-45 age group mein; medium to dark skin tone (Fitzpatrick III-V) mein zyada common',
    treatmentDuration: 'Epidermal type – 3-4 mahine; Mixed/Dermal type – 6-12 mahine; sun protection lifelong maintenance zaroori',
    successRate: 'CCRH study mein 68-74% patients mein noticeable improvement; hormonal triggers (PCOS, thyroid) address hone par skin improvement faster',
  },

  causes: [
    'Sun exposure (UV rays) – melanocytes zyada active ho jaati hain; India mein yeh sabse bada karan hai; ek din ki garmi mein mahine bhar ki progress kharab ho sakti hai',
    'Hormonal changes – pregnancy, birth control pills, ya thyroid imbalance se estrogen/progesterone fluctuation pigmentation trigger karta hai',
    'Genetic tendency – agar maa ya nani ko tha, to aapko bhi ho sakta hai; family history strong predisposing factor hai',
    'Cosmetic products – chemical-heavy creams, bleaching agents ya harsh face washes skin ko irritate karke melanin production badhate hain; rebound darkening common hai',
    'Stress aur anxiety – cortisol hormone imbalance se skin ke andar inflammatory pathway activate hoti hai; patches stress mein tezi se badhte hain',
    'Nutritional deficiency – Vitamin D, Vitamin C, aur folic acid ki kami melanin control ko weak karti hai',
    'Liver dysfunction – liver properly detox nahi karta to skin pe pigmentation ke roop mein toxic load dikhta hai',
    'Certain medications – kuch antibiotics, anti-epileptics ya BP medicines photosensitivity badha deti hain jo melasma trigger karta hai',
  ],

  riskFactors: [
    'Saanwli ya medium skin tone wali Indian mahilayen (Fitzpatrick type III-V) – melanocytes zyada active hoti hain',
    'Pregnant women aur jo mahilayen hormonal contraceptives use karti hain – estrogen directly melanin production trigger karta hai',
    'Thyroid ya PCOS ki patients – hormonal imbalance melasma ka root driver hai in conditions mein',
    'Jo log roz ghanton dhoop mein rehte hain – outdoor workers, farmers, daily commuters',
    '20-45 saal ki age group – hormonal activity peak pe hoti hai is age mein',
    'Stress-prone lifestyle ya irregular sleep wale log – cortisol chronically elevated rehta hai',
    'Jo log harsh chemical treatments ya steroids face pe use karte hain – rebound darkening ka risk',
  ],

  complications: [
    'Self-confidence aur mental health pe negative impact – depression aur social anxiety common hai; cosmetic problem ka psychological burden serious hota hai',
    'Pigmentation gehri hokar permanent look de sakti hai agar treatment delay ho – dermal melasma reversing mein saalon lag sakte hain',
    'Chemical treatments se side effects – skin thinning, rebound darkening jo original problem se bhi buri ho sakti hai',
    'Underlying thyroid ya PCOS detect nahi ho paati – jo zyada serious health issues le jaati hain; melasma sirf symptom hai, cause alag hai',
  ],

  types: [
    {
      _key: 'type-epidermal',
      name: 'Epidermal Melasma (Upar Ki Skin) – Sabse Common',
      description: 'Pigmentation skin ki sabse upar wali layer (epidermis) mein hoti hai. Rang saaf bhura (tan/brown) hota hai. Wood\'s lamp test mein clearly visible hota hai. Homeopathic aur topical treatment ka sabse achha response milta hai. Ye sabse common type hai aur 3-4 mahine mein improvement dikhti hai.',
    },
    {
      _key: 'type-dermal',
      name: 'Dermal Melasma (Gehri Skin)',
      description: 'Pigmentation skin ki gehri layer (dermis) mein hoti hai. Rang bluish-grey ya ash-grey lagta hai – jaise tattoo sa. Treatment zyada time leta hai, response thoda dheema hota hai. Constitutional homeopathic approach yahan zyada kaam karta hai. 6-12 mahine ka treatment period realistic hai.',
    },
    {
      _key: 'type-mixed',
      name: 'Mixed Melasma (Mila-jula) – India Mein Sabse Zyada',
      description: 'Epidermal aur Dermal dono layers affected hoti hain. Rang mixed hota hai – kuch jagah bhura, kuch jagah greyish. India mein sabse zyada common type hai. Layered approach se treatment karna padta hai – topical + constitutional homeopathy dono.',
    },
    {
      _key: 'type-extra-facial',
      name: 'Extra-Facial Melasma (Chehra Nahi, Body)',
      description: 'Chehra nahi, balki body ke doosre hisse jaise gardan, baazoo, ya chest affected hote hain. Ye rare hai lekin hormonal conditions (thyroid, PCOS) mein zyada dikhta hai. Systemic treatment ki zaroorat hoti hai – sirf topical approach insufficient hoga.',
    },
  ],

  symptoms: [
    {
      _key: 'sym-skin',
      category: 'Chehra Aur Skin Pe Dikhne Wale Nishaan',
      items: [
        'Gaalo par flat, symmetric bhoore ya greyish patches – dono taraf ek jaise; melasma ka characteristic sign',
        'Mathe aur naak ke upar kaale-bhoore dhabbe – centrofacial pattern; 65% cases mein ye pattern hota hai',
        'Jawline ya thodi pe pigmented areas – mandibular pattern; hormonal cases mein zyada',
        'Patches ka size dheere dheere badhna – sun exposure ke saath worse hona; garmiyon mein clearly dark',
      ],
    },
    {
      _key: 'sym-associated',
      category: 'Andar Ki Takleef (Associated Signs)',
      items: [
        'Affected area mein kabhi kabhi mild itching ya burning – sun exposure ke baad; active inflammation ka sign',
        'Skin dry aur dull lagti hai – glow chali jaati hai; melanin accumulation se light reflection change hota hai',
        'Face uneven tone – kuch area fairer, kuch area darker; makeup se hide karna padta hai',
        'Periods irregular hona ya thyroid symptoms saath mein – weight change, thakaan; underlying hormonal cause ka signal',
      ],
    },
    {
      _key: 'sym-triggers',
      category: 'Worsening Triggers (Kab Aur Badh Jaata Hai)',
      items: [
        'Garmiyon mein patches clearly dark ho jaana – UV exposure direct trigger hai',
        'Makeup lagane ke baad irritation ya redness – skin chemicals se sensitive ho jaati hai',
        'Stress ke dauran nayi patches aana ya purane bhadhna – cortisol-melanin connection',
        'Sleep deprivation ke baad skin aur dull dikhna – repair mechanism disturb hoti hai',
      ],
    },
  ],

  ccrhEvidence: {
    improvementRate: '68-74%',
    avgTreatmentPeriod: '4 se 8 mahine (type aur duration ke hisaab se)',
    citation: 'Indian Journal of Research in Homoeopathy | 2018 | CCRH Melasma Study | CCRH (Council for Scientific Research in Homoeopathy) Clinical Guidelines',
    keyFindings: [
      'Constitutional homeopathic treatment ne epidermal melasma mein significant pigmentation reduction dikhaya – control group se better',
      'Hormonal triggers (PCOS, thyroid) ko address karne par skin improvement faster thi – integrated approach effective',
      'No systemic side effects recorded in 6-month follow-up study – chemical treatments ki tarah skin thinning ya rebound nahi',
    ],
  },

  homeopathyBenefits: [
    'Homeopathy sirf chehre ke daag mein nahi, balki unke KARAN mein kaam karta hai. Har patient ki body alag hoti hai – kisi ko hormonal imbalance ki wajah se melasma hai, kisi ko stress se, kisi ko liver sluggishness se. Homeopathy mein doctor pehle patient ki poori history leta hai – periods ka pattern, stress level, digestion, sleep – aur phir ek constitutional medicine select karta hai jo us patient ki body ke overall balance ko theek kare. Is approach se melanin overproduction dheere dheere reduce hota hai, pigmentation fade hoti hai, aur naye patches banna bhi band hote hain.',
    'Hormonal imbalance (PCOS, thyroid, pregnancy-related) ko root level pe balance karta hai – sirf skin nahi, cause address hota hai',
    'Liver function improve karne se internal toxin load reduce hota hai jo pigmentation ka karan banta hai',
    'Side-effect-free – skin thinning, rebound darkening jaisi chemical cream ki problems nahi hoti; long-term safe use',
    'Stress aur anxiety ka bhi treatment hota hai jo melasma ka bada trigger hai – poori body balance hoti hai',
    'Long-term remission – theek hone ke baad dobara hone ki sambhavna kam hoti hai; relapse rate chemical treatments se kaafi better',
  ],

  medicines: [
    {
      _key: 'med-sepia',
      name: 'Sepia Officinalis',
      bestFor: 'Pregnancy/hormonal melasma, saddlelike patches, thakaan + irritability',
      keyIndications: [
        'Pregnancy ke baad ya periods ki problem wali mahilayen – chehre par saddlelike bhoore patches',
        'Saath mein thakaan aur irritability – "kuch nahi karna" wali feeling',
        'Liver aur uterus ke hormonal connection ko target karta hai',
        'Melanin overproduction ko internally regulate karta hai – hormonal pigmentation mein sabse commonly indicated',
      ],
    },
    {
      _key: 'med-lycopodium',
      name: 'Lycopodium Clavatum',
      bestFor: 'Liver-related melasma, right-side worse, digestion kharab',
      keyIndications: [
        'Liver weakness ya acidity wale patients – right-side chehra zyada affected ho',
        'Digestion kharab ho, confidence kam ho – social anxiety bhi ho',
        'Liver ke metabolic functions theek karta hai – melanin accumulation ka pathway address',
        'Fatty liver + melasma combination mein khas useful',
      ],
    },
    {
      _key: 'med-thuja',
      name: 'Thuja Occidentalis',
      bestFor: 'Contraceptive pill ke baad melasma, oily skin, unwanted hair',
      keyIndications: [
        'Pigmentation hormonal contraceptives (pills) lene ke baad aayi ho',
        'Oily skin aur unwanted hair growth bhi ho – PCOS-like picture',
        'Endocrine system ki abnormal activity ko regulate karta hai',
        'Drug-induced ya hormonal melasma mein body ko reset karne mein help',
      ],
    },
    {
      _key: 'med-pulsatilla',
      name: 'Pulsatilla Pratensis',
      bestFor: 'Young girls, PCOS, irregular periods, mild nature',
      keyIndications: [
        'Young girls ya mild, tearful nature ki women – irregular periods, PCOS',
        'Dhoop ke baad chehra dark ho jaata ho – UV-triggered pattern',
        'Hormonal fluctuations ko gently balance karta hai',
        'Pigmentation ke saath menstrual irregularity dono address hoti hai',
      ],
    },
    {
      _key: 'med-sulphur',
      name: 'Sulphur',
      bestFor: 'General skin dullness, itching, failed chemical treatments',
      keyIndications: [
        'Skin mein general dullness ho, itching ho – patient ka complexion dirty-looking',
        'Pehle chemical treatments liye ho jo kaam nahi aaye – rebound darkening',
        'Skin ki cellular cleansing stimulate karta hai',
        'Previous chemical treatments ke side effects clear karne mein help – deep-acting constitutional',
      ],
    },
  ],

  dietInclude: [
    {
      _key: 'di-vitc',
      category: 'Vitamin C Rich Foods',
      emoji: '🍋',
      items: [
        'Amla (Indian Gooseberry) – sabse powerful antioxidant, melanin production naturally control karta hai; roz khaayein',
        'Nimbu pani (bina sugar) – skin ko andar se brighten karta hai, collagen bhi banata hai; subah khali pet best',
        'Guava (Amrood) – Vitamin C orange se 4 guna zyada, skin glow ke liye best fruit; skin ke saath khaayein',
        'Santara aur mosambi – Vitamin C se bhari, skin cells ko repair karta hai; fresh juice better than packaged',
      ],
    },
    {
      _key: 'di-antiinflam',
      category: 'Anti-Inflammatory Foods',
      emoji: '🥦',
      items: [
        'Haldi wala doodh (Golden Milk) – curcumin melanin regulate karta hai aur inflammation kam karta hai; roz raat',
        'Palak, methi, sarson ka saag – folate aur iron se bhari, hormonal balance mein help; weekly 2-3 baar',
        'Broccoli – sulforaphane pigmentation-causing inflammation rokta hai',
        'Adrak ki chai (bina cheeni) – circulation improve karti hai, skin ko poshan milta hai',
      ],
    },
    {
      _key: 'di-liver',
      category: 'Liver Support Foods',
      emoji: '🫒',
      items: [
        'Lauki ka juice (subah khali pet) – liver detox karta hai, skin saaf karti hai; saptah mein 4-5 baar',
        'Beet (Chukandar) – blood purifier, liver function improve karta hai; salad ya juice mein',
        'Kheera (Cucumber) – cooling, skin hydration aur toxin flush karta hai; roz lein',
        'Coriander (Dhaniya) water – liver enzymatic activity improve karta hai; pani mein dhaniya ubaal ke peeyein',
      ],
    },
    {
      _key: 'di-hydration',
      category: 'Hydration & Omega Foods',
      emoji: '💧',
      items: [
        '8-10 glass paani roz – skin ke andar se hydrated rehna pigmentation fade karne mein help karta hai',
        'Akhrot (Walnuts) – Omega-3 fatty acids skin inflammation aur melanin clustering rokta hai; mutthi bhar roz',
        'Flaxseeds (Alsi) – hormonal balance ke liye, khaaskar PCOS mein faayedamund; grind karke lein',
        'Coconut water – electrolytes se bhari, skin ki natural tone maintain karta hai; garmi mein especially',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da-photosensitizing',
      category: 'Inflammatory aur Hormonal Disruptor Foods',
      emoji: '🚫',
      items: [
        'Maida se bani cheezein (bread, biscuits, noodles) – inflammation badhaati hain, hormonal disruption se pigmentation trigger',
        'Refined sugar aur meetha – insulin spike se androgens badhte hain jo melanin production trigger karte hain',
        'Processed dairy (packaged milk, cheese) – hormonal content se PCOS/thyroid wale patients mein pigmentation badh sakti hai',
        'Alcohol – liver pe direct load, melanin metabolism disturb hoti hai; treatment ke dauran avoid',
      ],
    },
    {
      _key: 'da-inflammatory',
      category: 'Fried & Junk Foods',
      emoji: '🍟',
      items: [
        'Fried aur junk food – trans fats se liver ka kaam badh jaata hai, skin pe pigmentation ke roop mein dikhta hai',
        'Spicy food zyada – heat aur inflammation se already sensitive skin aur irritate hoti hai',
        'Excess celery, parsley aur figs – psoralen compound contain karte hain jo skin ko dhoop mein zyada sensitive banate hain',
      ],
    },
    {
      _key: 'da-caffeine',
      category: 'Excess Caffeine',
      emoji: '☕',
      items: [
        'Excess caffeine (5+ cups chai/coffee) – cortisol level badhata hai jo stress-related pigmentation trigger karta hai',
        'Packaged cold coffee, energy drinks – hidden sugar + caffeine combination; double trigger',
      ],
    },
  ],

  dos: [
    'Roz subah Sunscreen (SPF 30+) lagaein – dhoop melasma ka no.1 trigger hai; ghar pe bhi lagaein (khidkiyon se UV rays andar aati hain)',
    'Dupatta, scarf ya wide-brim hat use karein – physical sun protection sunscreen se bhi zyada effective hai pigmentation rokne mein',
    '7-8 ghante neend lein – sleep mein skin ki repair hoti hai aur cortisol balance rehta hai; neend poori = patches kam',
    'Stress management karein – yoga, pranayam ya walk se cortisol kam hota hai jisse naye patches kam bante hain; roz 15-20 min',
    'Chehra gentle way mein dhoyein – harsh scrubbing se inflammation hoti hai jo melanin aur badha deti hai; pat dry karein',
    'Raat ko Aloe Vera gel lagaein – natural cooling agent hai, skin repair karta hai bina side effects ke; fresh gel best hai',
    'Paani zyada piyein – skin hydrated rahegi to pigmentation fade karne mein help milegi; 8-10 glass daily',
    'Homeopathic doctor se poori history batayein – periods, stress, thyroid, medications sab kuch; sahi treatment tabhi milegi',
  ],

  donts: [
    'Mercury ya steroid wali creams use mat karein – short-term mein fair dikhti hain, long-term mein skin damage, thinning, aur rebound darkening',
    'Chemical peels ya laser unqualified jagah par mat karwaayein – galat treatment se dermal melasma worse ho jaata hai; qualified dermatologist zaroor',
    'Ek saath kai tarah ke skin care products use mat karein – overlapping chemicals skin ko irritate karte hain aur results nahi milte',
    'Chehra baar baar nahi kheenchein ya rub mat karein – friction se melanin stimulation hoti hai; pillow cover bhi satin/silk use karein',
    'Doctor ko bataye bina birth control pills band ya shuru mat karein – hormonal changes pigmentation directly affect karte hain',
    'Expensive fairness creams par paise mat waste karein – mostly koi fark nahi padta, kuch ingredients harm karte hain',
    'Treatment beech mein mat chhodein – homeopathic treatment ek continuous process hai; beech mein band karne se results nahi milte',
    'Dhoop mein bina protection ke mat nikalein – ek din ki garmi mein mahine bhar ki progress kharab ho sakti hai',
  ],

  seasonalCare: {
    summer: 'Yeh melasma ka sabse bura mausam hai – UV radiation peak par hoti hai. Ghar se nikalne se 20-30 min pehle SPF 30+ sunscreen zaroor lagaein. Dupatta ya hat use karein – physical protection sunscreen se zyada effective hai. Din mein do baar thanda paani se chehra dhoyein. Subah 10 baje se dopahar 4 baje tak dhoop mein nikalna avoid karein. Khana: zyada paani, coconut water, amla juice – andar se cooling rakhein. Homeopathic medicine iss mausam mein zyada regular leni chahiye.',
    monsoon: 'Garmi kam hoti hai lekin humidity badh jaati hai – skin oily hoti hai. Oily skin mein clogged pores se pigmentation worse ho sakti hai. Gentle, non-comedogenic moisturizer use karein. Sunscreen phir bhi zaroori hai – cloudy din mein bhi UV rays aati hain; kabhi mat chhodein. Fungal infections se bachao – wet skin par infection pigmentation aur badha deta hai. Diet mein haldi wala khana zyada lein, fried cheezein avoid karein.',
    winter: 'UV exposure kam hoti hai – skin thodi recover karti hai. Yeh homeopathic treatment ka BEST time hai – body treatment absorb karne ke liye ready hoti hai. Skin dry ho jaati hai sardiyon mein – moisturize zaroor karein warna pigmented area aur dull dikhta hai. Mild dhoop (subah 8-10 baje) lena beneficial hai – Vitamin D ke liye. Warm ghar ka khana, soups – liver aur immunity strong karti hain. Follow-up aur treatment progress assess karne ka sahi waqt.',
  },

  faqs: [
    {
      _key: 'faq-1',
      question: 'Melasma aur normal dark spots mein kya farak hai?',
      answer: 'Melasma symmetric patches hain – matlab dono taraf ek jaise dhabbe hote hain (jaise dono gaalo par). Normal dark spots (post-acne marks, age spots) akele hote hain, ek jagah, kisi pimple ya injury ke baad. Melasma mainly hormonal aur UV triggered hai, jabki dark spots skin trauma ke baad aate hain. Treatment approach dono ki bilkul alag hoti hai – isliye sahi diagnosis pehle zaroor karein.',
    },
    {
      _key: 'faq-2',
      question: 'Kya melasma permanently theek ho sakta hai ya dobara aata hai?',
      answer: 'Melasma ek chronic condition hai – yaani control ho sakti hai lekin careful rehna padta hai. Sahi treatment aur sun protection se patches bahut fade ho jaate hain. Lekin agar dobara UV exposure ho, hormones change hon ya treatment band kar dein, to patches wapas aa sakte hain. Homeopathy mein jab root cause (hormones, liver, stress) address hota hai, to relapse ka chance kaafi kam ho jaata hai.',
    },
    {
      _key: 'faq-3',
      question: 'Pregnancy ke baad melasma khud chala jaata hai kya?',
      answer: 'Kuch mahilaon mein delivery ke baad hormones normalize hone par melasma fade ho jaata hai – khaaskar epidermal type mein. Lekin bahut si mahilaon mein yeh rehta hai ya skin mein dheere fade hota hai. Breastfeeding ke time treatment limited hoti hai. Homeopathic medicines pregnancy aur breastfeeding mein generally safe hain – lekin doctor se consult zaroor karein.',
    },
    {
      _key: 'faq-4',
      question: 'Kya PCOS ki wajah se chehra kaala padta hai?',
      answer: 'Haan, PCOS melasma ka ek major hormonal trigger hai. PCOS mein androgen hormones elevated hote hain jo directly melanin production badhaate hain. Is case mein sirf skin treat karne se fark nahi padta – PCOS ka treatment hona chahiye tabhi pigmentation properly respond karta hai. Homeopathy dono ko saath mein address kar sakta hai – ye iska sabse bada advantage hai.',
    },
    {
      _key: 'faq-5',
      question: 'Kya mard ko bhi melasma ho sakta hai?',
      answer: 'Haan, males mein bhi ho sakta hai – lekin women mein 90% zyada common hai kyunki main trigger hormonal hai. Mard mein melasma usually sun exposure, certain medications (anti-seizure, blood pressure) ya liver conditions ki wajah se hota hai. Symptoms same hote hain – symmetric brown patches on face. Treatment approach similar hai lekin hormonal angle alag hota hai.',
    },
    {
      _key: 'faq-6',
      question: 'Ghar par melasma ke liye kya lagayen jo safe aur effective ho?',
      answer: 'Kuch natural options jo safe hain: Aloe vera gel (roz raat ko – hyperpigmentation reduce karta hai), raw potato slice (gentle skin lightening), turmeric + milk ka paste (anti-inflammatory), aur rose water (soothing aur tone even karta hai). Ye cheezein result mein slow hain par safe hain. Koi bhi chemical ya market cream khud se mat lagayen bina patch test ke – rebound darkening ka risk hota hai.',
    },
    {
      _key: 'faq-7',
      question: 'Homeopathic treatment lene ke kitne din mein pigmentation fade hoti hai?',
      answer: 'Type, depth aur duration par depend karta hai. Epidermal melasma mein 2-3 mahine mein noticeable fark dikhta hai. Mixed ya dermal type mein 4-8 mahine lag sakte hain. Agar hormonal cause hai (PCOS, thyroid), to pehle 4-6 mahine root cause address hota hai, phir skin improve hoti hai. Har patient ki timeline alag hoti hai – regular follow-up important hai; beech mein mat chhodein.',
    },
    {
      _key: 'faq-8',
      question: 'Kya melasma ke liye laser safe hai?',
      answer: 'Laser kuch cases mein effective hai, lekin melasma ke liye risky bhi ho sakta hai – especially dermal type mein. Agar properly nahi kiya to post-inflammatory hyperpigmentation (PIH) ho sakti hai jo original problem se bhi buri lagti hai. Laser kisi bhi qualified dermatologist se karwana chahiye, aur pehle homeopathic ya topical approach try karna safer rahta hai.',
    },
    {
      _key: 'faq-9',
      question: 'Kya sunscreen lagana zaroori hai agar ghar pe rehte hain?',
      answer: 'Haan! UV rays khidkiyon se bhi andar aati hain – UVA rays glass ke par hoti hain. Aur agar aap mobile ya laptop screen ke paas zyada der tak rehte hain, to blue light bhi melanin stimulation kar sakti hai. Ghar mein bhi sunscreen lagana – khaaskar agar window ke paas baith kar kaam karte hain – melasma management ka important hissa hai.',
    },
    {
      _key: 'faq-10',
      question: 'Kya thyroid ka connection melasma se hai?',
      answer: 'Bilkul hai. Thyroid hormones (T3, T4) skin metabolism aur melanocyte activity ko regulate karte hain. Hypothyroidism (thyroid slow hona) mein skin dry, dull hoti hai aur pigmentation badh sakti hai. Hyperthyroidism mein bhi skin changes hote hain. Is liye melasma ke sath thyroid test (TSH) karwana recommended hai – kyunki thyroid theek hone par skin bhi improve hoti hai.',
    },
    {
      _key: 'faq-11',
      question: 'Kya makeup se melasma aur badh sakta hai?',
      answer: 'Makeup khud melasma nahi badhata – lekin kuch ingredients (fragrances, heavy chemicals) skin ko irritate karte hain jisse inflammation hoti hai jo pigmentation trigger kar sakti hai. Heavy foundation roz ghanton tak lagana aur phir properly saaf nahi karna bhi skin ko harm karta hai. Non-comedogenic, mineral-based makeup choose karein aur raat ko acchi tarah cleanse karein.',
    },
    {
      _key: 'faq-12',
      question: 'Kya stress se chehra kaala pad jaata hai?',
      answer: 'Haan, stress melasma ka ek underrated trigger hai. Chronic stress mein cortisol hormone badh jaata hai jo inflammatory response aur melanin stimulation dono trigger karta hai. Melasma wale patients mein jo zyada stress mein rehte hain, unke patches tezi se badhte hain. Yoga, meditation aur deep breathing practice karna treatment ka ek important hissa hai – sirf medicine nahi.',
    },
    {
      _key: 'faq-13',
      question: 'Kya Vitamin C se pigmentation khatam hoti hai?',
      answer: 'Vitamin C pigmentation fade karne ka ek scientifically proven natural approach hai. Yeh melanin synthesis mein involved ek enzyme (tyrosinase) ko inhibit karta hai. Andar se – amla, nimbu, santara khane se – ka effect sundar aur safe hota hai. Topical Vitamin C serum bhi effective hai lekin concentration aur formulation important hai. Homeopathy ke saath Vitamin C rich diet ek powerful combination hai.',
    },
    {
      _key: 'faq-14',
      question: 'Kya weight loss se melasma theek ho sakta hai?',
      answer: 'Direct connection nahi hai, lekin agar melasma PCOS ya insulin resistance ki wajah se hai, to weight management se hormones balance hote hain aur pigmentation improve ho sakti hai. Obesity mein inflammatory markers badhe hote hain jo skin ko affect karte hain. Balanced diet aur exercise overall hormonal health improve karte hain jisse skin par positive effect padta hai.',
    },
    {
      _key: 'faq-15',
      question: 'Pregnancy mein kaunsa safe treatment hai melasma ke liye?',
      answer: 'Pregnancy mein most chemical treatments (hydroquinone, retinoids, strong acids) avoid ki jaati hain. Safe options hain: SPF 30+ sunscreen (zinc oxide wali physical sunscreen), gentle skin care routine, aloe vera, aur diet mein Vitamin C-rich foods. Homeopathic treatment pregnancy mein generally safe mana jaata hai – lekin doctor se consult zaroor karein. Delivery ke baad zyada options available hoti hain.',
    },
    {
      _key: 'faq-16',
      question: 'Kya melasma blood tests se pata chalta hai?',
      answer: 'Melasma khud blood tests se diagnose nahi hota – yeh clinically (dekhkar) ya Wood\'s lamp se diagnose hota hai. Lekin underlying cause dhundhne ke liye blood tests helpful hain: thyroid (TSH, T3, T4), hormones (FSH, LH, prolactin, testosterone), Vitamin D levels, liver function tests, aur blood sugar. Ye tests treatment direction decide karne mein help karte hain.',
    },
    {
      _key: 'faq-17',
      question: 'Kya bilkul fair skin wale logo ko melasma ho sakta hai?',
      answer: 'Bilkul ho sakta hai, lekin fair skin wale (Fitzpatrick type I-II) mein melasma kam common hai. Indian, Hispanic, aur Middle Eastern skin tones (medium to dark) mein melanocytes zyada active hoti hain isliye melasma zyada hota hai. Fair skin walo mein bhi hormonal triggers (pregnancy, pill) se melasma aa sakta hai.',
    },
    {
      _key: 'faq-18',
      question: 'Kya chehra roz dhona melasma mein helpful hai?',
      answer: 'Roz do baar gentle face wash karna theek hai – skin clean rehti hai. Lekin harsh scrubbing ya zyada baar dhona harmful hai – friction se melanin production stimulate hoti hai. Lukewarm pani use karein (hot water nahi – heat melasma trigger hai), gentle soap-free cleanser use karein, aur moti towel se ragadne ki jagah gentle pat dry karein.',
    },
    {
      _key: 'faq-19',
      question: 'Kya aayurvedic aur homeopathic treatment ek saath le sakte hain?',
      answer: 'Kuch aayurvedic herbs (manjistha, neem, amla) homeopathy ke saath generally compatible hain. Lekin heavy metal-containing aayurvedic preparations (kuch traditional formulations) homeopathic treatment ko disturb kar sakte hain. Apne homeopathic doctor ko sab kuch batayein – woh guide karenge ki kya saath chalega aur kya nahi.',
    },
    {
      _key: 'faq-20',
      question: 'Kya pillow cover change karne se skin par fark padta hai?',
      answer: 'Haan! Cotton pillow cover ke compared to silk ya satin cover se chehra raat bhar rub nahi hota – friction se melanin stimulation aur wrinkles dono avoid hote hain. Dirty pillow cover mein bacteria hote hain jo skin inflammation badha sakte hain. Pillow cover 2-3 din mein badle – especially melasma wale patients ke liye yeh ek simple but effective step hai.',
    },
    {
      _key: 'faq-21',
      question: 'Kya winter mein melasma ki cream lagana band kar sakte hain?',
      answer: 'Sunscreen band karna kabhi nahi chahiye – winter mein bhi UVA rays aati hain. Moisturizing routine badhana chahiye kyunki skin dry ho jaati hai aur dry skin pigmented area aur dull dikhta hai. Homeopathic treatment year-round continue karni chahiye. Winter best time hai treatment ke liye kyunki UV stress kam hoti hai aur body treatment zyada effectively absorb karti hai.',
    },
    {
      _key: 'faq-22',
      question: 'Kya melasma se aankhon ko ya body ko koi aur takleef hoti hai?',
      answer: 'Melasma khud sirf cosmetic hai – yeh dangerous nahi hai aur aankhon ya body ko directly harm nahi karta. Lekin underlying causes (thyroid, PCOS, liver issues) agar untreated rahein to woh serious health problems la sakte hain. Isliye melasma ko sirf ek skin problem mat samjhein – yeh body ke internal imbalance ka bhi signal ho sakta hai.',
    },
    {
      _key: 'faq-23',
      question: 'Kya mobile screen ya laptop se melasma badh sakta hai?',
      answer: 'Haan, yeh ek nayi research area hai. High-energy visible (HEV) light ya Blue Light, jo mobile aur laptop screens se nikalta hai, melanin production trigger kar sakta hai – especially melasma-prone skin mein. Agar aap din mein 6-8+ ghante screen ke saamne hain, to blue light protection wali sunscreen use karein. Screen brightness kam rakhein ya blue light filter use karein.',
    },
    {
      _key: 'faq-24',
      question: 'Kya melasma ek baar sahi ho jaye to diet aur lifestyle chhodna theek hai?',
      answer: 'Bilkul nahi. Melasma mein lifestyle maintenance sabse important hai. Ek baar patches fade hone ka matlab yeh nahi ki condition permanently gayi. Sun protection kabhi nahi chhodni chahiye, stress management aur healthy diet continue karni chahiye. Jo patients apni lifestyle maintain karte hain unme relapse bahut kam hota hai. Homeopathy maintenance dose bhi di jaati hai – jo long-term stability deti hai.',
    },
  ],

  relatedDiseases: [
    { _type: 'reference', _ref: 'disease-pcod' },
    { _type: 'reference', _ref: 'disease-thyroid' },
    { _type: 'reference', _ref: 'disease-acne' },
    { _type: 'reference', _ref: 'disease-vitiligo' },
    { _type: 'reference', _ref: 'disease-eczema' },
  ],
}

async function seed() {
  try {
    const result = await client.createOrReplace(doc)
    console.log('✅ Melasma / Facial Pigmentation created/updated:', result._id)
    console.log('🌐 Live at: https://homeopedia.in/diseases/melasma')
  } catch (err) {
    console.error('❌ Error:', err)
  }
}

seed()
