import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'symptom-dry-skin',
  _type: 'symptom',

  name: 'Dry Skin',
  hindiName: 'Rookhi / Rukhi Twacha',
  hinglishName: 'Rookhi Twacha, Dry Skin',
  slug: { _type: 'slug', current: 'dry-skin' },
  bodySystem: 'Skin',

  metaTitle: 'Dry Skin in Hindi — Karan, Ilaaj aur Homeopathy | Homeopedia',
  metaDescription: 'Rookhi twacha (dry skin) ke karan, severity aur ghar pe safe steps — simple Hinglish mein. Verified info, Dr. Shadab reviewed.',
  publishedAt: new Date('2026-05-17').toISOString(),

  whatIsThis: `Chahe sardi ho ya garmi — twacha khichi-khichi rehti hai, kabhi kabhi chhilne lagti hai, aur kharoench lagne pe dard bhi hota hai. Chehere pe tight-sa feel, haathon pe dararein, aur kabhi kabhi halki khujli bhi. Ye dry skin hai — aur India mein ye ek bohot common problem hai jise log aksar ignore kar dete hain ya sirf cream lagate rehte hain.

Dry skin sirf cosmetic problem nahi hoti. Skin body ki sabse badi protective barrier hai — jab ye barrier dry hoti hai, toh uski protection kam ho jaati hai aur problems badhne lagti hain.

Ye page aapko 2 minute mein batayega: aapki rookhi twacha ka kya karna chahiye, serious hai ya nahi, aur kya options hain.`,

  indiaContext: 'WHO ke anusar, dry skin (xerosis) duniya ki sabse common skin complaints mein se ek hai — India mein dry + semi-arid climate zones mein rehne wale logon mein ye problem especially zyada hoti hai, aur sardi ke mahine mein cases 3-4 guna badh jaate hain.',
  indiaContextSource: 'WHO — Skin conditions overview | 2023',

  severityLevel1: [
    'Twacha thodi tight ya khichi-khichi lagti hai lekin dard nahi',
    'Halki safed parchhain si utha rahi hain skin pe',
    'Nahaane ke baad ya sardi mein zyada hoti hai, baaki waqt theek rehti hai',
    'Koi bleeding, cracking ya infection ke signs nahi hain',
    'Koi naya symptom saath mein nahi — sirf dry skin hai',
  ],
  severityLevel2: [
    'Skin mein dararein pad gayi hain (cracked skin) jo band nahi ho rahi',
    'Khujli itni hai ki raat ko neend kharab ho rahi hai',
    'Puri body pe ho rahi hai — sirf haath ya chehre pe nahi',
    'Pichle 3-4 hafte se hai aur cream lagate rehne ke baad bhi koi fark nahi pad raha',
    'Twacha pe lal patches aa rahe hain ya thoda sujan sa hai',
  ],
  severityLevel3: [
    'Dry skin ke saath skin pe khoon aa raha hai ya skin phat rahi hai aur theek nahi ho raha',
    'Poore shareer mein intense khujli hai saath mein aankhon ka peela pan — liver signal ho sakta hai, turant doctor',
    'Skin pe infection ke signs hain — pus, bahut zyada lali, bukhaar saath mein',
    'Dry skin suddenly aayi hai saath mein bohot zyada thakaan, weight gain, aur thand lagana — thyroid emergency, test karwao',
  ],

  timeline3Days: 'Nayi dry skin aksar ek specific trigger ki wajah se hoti hai — naya soap, detergent, garmi ka mausam, ya AC ka exposure. Body ki natural oils temporarily disturb hoti hain. Zyada tar cases mein trigger hata do aur basic moisturizing karo — teen se paanch din mein better hona chahiye. Agar teen din mein koi fark nahi — Level 2 mein aao.',
  timeline4Weeks: 'Ek hafte se zyada wali dry skin aksar ek underlying issue ki taraf point karti hai — wrong skincare routine, koi allergy, ya body mein koi internal imbalance. Sirf cream ka kaam nahi karega ab. Is week mein ek dermatologist ya homeopathic doctor se milein — cause jaanna zaroori hai. Agar khujli bhi hai saath mein, to Level 2 severity check karo.',
  timelineMonthPlus: 'Ek mahine se zyada ki dry skin chronic hai. Ye aksar eczema, psoriasis, ya thyroid disorder jaisi bimariyoon ka sign hoti hai. Cream temporary help karti hai — lekin root cause bina dekhey ye baar baar aata rahega. Ek detailed consultation zaroor karein — aur disease page pe jaayein specific condition ke liye.',

  lifestyleCauses: [
    {
      _key: 'lc1',
      causeName: 'Galat Soap Ya Cleanser',
      mechanism: 'Skin ki upar wali layer ek Natural Moisture Barrier (NMB) banati hai — natural oils aur proteins se. Harsh soaps aur chemical-laden cleansers is barrier ko tod dete hain. Baar baar use karne pe body ki oils regenerate hone ki speed se zyada damage hoti hai — result: rookhi, tight skin.',
      howToIdentify: 'Nahaane ke fauran baad skin bahut tight lagti hai. Chehre pe ya haathon pe zyada hoti hai jahan zyada soap use hota hai.',
    },
    {
      _key: 'lc2',
      causeName: 'Hot Water Se Baar Baar Nahana',
      mechanism: 'Garam paani skin ke natural lipids (fats) ko dissolve kar deta hai — bilkul waise jaise hot water grease hataata hai. Roz garam paani se nahane pe ye lipids itni tezi se nahi bante jitni tezi se hataaye jaate hain. Skin ka protective layer dheere dheere kam hota jaata hai.',
      howToIdentify: 'Nahane ke baad skin lal aur bahut dry lagti hai. Sardi ke mahine mein worst hoti hai jab log aur bhi garam paani use karte hain.',
    },
    {
      _key: 'lc3',
      causeName: 'Low Humidity Environment',
      mechanism: 'AC, desert climate, ya centrally heated rooms — ye sab air ki moisture kheench lete hain. Skin continuously air mein moisture release karti hai. Jab surrounding air mein pehle se koi moisture nahi, ye process aur tez ho jaati hai — skin "dehydrated" hoti jaati hai.',
      howToIdentify: 'Office ya AC kamre mein rehne ke baad zyada mehsoos hoti hai. Haath aur chehra sabse pehle affected hote hain.',
    },
    {
      _key: 'lc4',
      causeName: 'Dehydration — Paani Kam Peena',
      mechanism: 'Skin ki cells ko hydrated rehne ke liye body ke andar se bhi paani chahiye. Jab body overall dehydrated hoti hai, skin cells mein bhi water content kam ho jaata hai — resulting in dull, dry, easily-cracking skin.',
      howToIdentify: 'Dry skin ke saath lips bhi dry rehte hain, urine yellow rehta hai, aur skin gently pinch karne pe slowly wapas jaati hai.',
    },
  ],

  medicalCauses: [
    {
      _key: 'mc1',
      diseaseName: 'Eczema (Atopic Dermatitis)',
      diseaseHindiName: 'Chambal (ek type)',
      howSymptomPresents: 'Eczema mein skin ki natural barrier genetically weak hoti hai — isliye ye log normally bhi zyada dry rehte hain. Dry skin ke saath intense khujli aur lal patches aate hain — typically kohniyon ke peeche, ghutnon ke neeche, ya haathon pe.',
      howToIdentify: 'Sirf dry skin nahi — saath mein khujli, redness aur thickened skin bhi hoti hai. Typically bachpan se hoti hai ya allergy history hoti hai.',
      homeopediaSlug: 'eczema',
      isAvailable: true,
    },
    {
      _key: 'mc2',
      diseaseName: 'Psoriasis',
      diseaseHindiName: 'Psoriasis (Chaal Rog)',
      howSymptomPresents: 'Psoriasis mein skin cells bahut tezi se banati aur marti hain — normal ke muqable 10 guna zyada tezi se. Is wajah se silver-white scales aur uske neeche dry, red plaques bante hain. Ye dry skin with scales jaisi dikhti hai lekin normal dry skin nahi hoti.',
      howToIdentify: 'Dry patches pe safed ya silver scales. Ghutne, kohni, ya sir pe zyada hota hai. Scratching pe bleeding ho sakti hai.',
      homeopediaSlug: 'psoriasis',
      isAvailable: true,
    },
    {
      _key: 'mc3',
      diseaseName: 'Contact Dermatitis',
      diseaseHindiName: 'Sparsh Janya Chambal',
      howSymptomPresents: 'Koi specific cheez — perfume, metal, rubber, chemical — se skin ka reaction hota hai. Uss specific jagah pe skin dry, red aur irritated ho jaati hai. Body jo cheez react kar rahi hai usse "allergen" kehte hain.',
      howToIdentify: 'Sirf specific jagah pe hoti hai — jahan allergen laga ho. Nayi jewelry, new cream, ya naye kapde ke baad shuru hui.',
      homeopediaSlug: '',
      isAvailable: false,
    },
    {
      _key: 'mc4',
      diseaseName: 'Thyroid Disorder (Hypothyroidism)',
      diseaseHindiName: 'Thyroid Ki Kami',
      howSymptomPresents: 'Thyroid hormone skin ki natural oil glands ko regulate karta hai. Jab thyroid hormone kam hota hai (hypothyroidism), oil glands slow ho jaati hain — result: poore shareer pe dry, rough, scaly skin. Ye sirf ek symptom hoti hai — baaki symptoms bhi hote hain saath mein.',
      howToIdentify: 'Dry skin ke saath weight gain, thakaan, thand zyada lagana, aur baal jhadna bhi hota hai. Akela dry skin thyroid nahi hota — combination check karo.',
      homeopediaSlug: 'thyroid',
      isAvailable: true,
    },
  ],

  redFlags: [
    'Liver Disease (Jaundice se pehle) — agar dry skin ke saath aankhon mein ya skin pe yellowness aaye, pet mein discomfort ho, ya urine dark ho to turant doctor',
    'Kidney Disease (Uremic Pruritus) — agar dry skin ke saath bahut intense khujli ho jo raat ko aur badhey, saath mein thakaan aur zyada ya kam urine aaye to kidney function test zaroori',
    'Diabetes — agar dry skin kaafi waqt se hai, pairon pe zyada hai, aur wounds ya cracks jaldi theek nahi hote to blood sugar check karwao',
  ],

  homeSteps: [
    {
      _key: 'hs1',
      action: 'Nahaane Ke Fauran Baad Moisturizer Lagao',
      whyItWorks: 'Nahaane ke baad skin mein jo thodi moisture hoti hai wo 3-5 minute mein evaporate hone lagti hai. Isi window mein ek thick moisturizer (cream ya ointment — lotion nahi) lagane se moisture "lock in" ho jaati hai. Timing sabse important hai — ek ghante baad lagaana utna kaam nahi karta.',
    },
    {
      _key: 'hs2',
      action: 'Paani Ka Temperature Lukewarm Rakho',
      whyItWorks: 'Garam paani natural skin oils dissolve karta hai — ye simple physics hai. Lukewarm paani se nahana aur 5-7 minute mein nahaana (zyada der nahi) skin ki oils ko zyada preserve karta hai.',
    },
    {
      _key: 'hs3',
      action: 'Ghar Mein Humidifier Ya Paani Ke Bartan Rakho',
      whyItWorks: 'AC ya heater wale kamron mein humidity bahut kam ho jaati hai — 20-30% tak. Ek humidifier ya simply khule paani ke bartan rakhne se indoor humidity 40-50% tak aa sakti hai, jisse skin mein moisture natural taur pe zyada rehti hai.',
    },
    {
      _key: 'hs4',
      action: 'Paani Zyada Piyo — Din Mein 8-10 Glass',
      whyItWorks: 'Skin ki hydration ka ek hissa bahar se aata hai, ek hissa andar se. Paani ki kami mein cream theek se kaam nahi karti — body ki cells ko hydrated rehna zaroor hai.',
    },
    {
      _key: 'hs5',
      action: 'Tight Synthetic Kapde Avoid Karo Temporarily',
      whyItWorks: 'Synthetic fabric se friction hoti hai jo already irritated dry skin pe aur problem create karta hai. Loose cotton kapde skin ko breathe karne dete hain aur irritation reduce karte hain.',
    },
  ],

  homeopathyIndividualization: `Dry skin ka naam ek hai — lekin har insaan ki dry skin alag hoti hai. Kisi ki sardi mein badhti hai, kisi ki garmiyoon mein bhi rehti hai. Kisi ke haathon pe zyada hai, kisi ke chehere pe. Kisi ko khujli bhi saath mein hai, kisi ko sirf tightness. Homeopathy mein sirf "dry skin" ka treatment nahi hota — aapki dry skin kab badhti hai, kya se better hoti hai, kahan zyada hai, kitni purani hai — ye sab decide karta hai ki aapka treatment kya hoga. Isliye ek hi symptom mein do alag patients ko alag approach milta hai.`,

  homeopathyRootCause: `Baar baar aayi dry skin — jo cream lagate rehne ke bawajood wapas aati hai — aksar andar ki kisi imbalance ka signal hoti hai. Kabhi thyroid, kabhi digestive system, kabhi skin ki own immunity. Homeopathy mein sirf skin ko repair karna goal nahi hota — jo cheez isko baar baar laa rahi hai usse address kiya jaata hai. Chronic dry skin cases mein, sahi constitutional treatment se skin ki natural barrier dhire dhire better hone lagti hai. Research is area mein limited hai aur results individual hote hain — lekin jo patients root cause identify karwa ke treat hote hain, unhe long-term relief better milti hai.`,

  homeopathySafety: `Homeopathy highly diluted medicines use karti hai — practically koi side effects nahi hote. Isliye dry skin ke liye ye approach bacchon mein, pregnant women mein, aur elderly mein bhi safely try ki ja sakti hai. Agar doosri medicines chal rahi hain to bhi interference nahi hoti. Zaroori baat: Severe infections ya emergency skin conditions mein conventional treatment pehle leni chahiye. Homeopathy complementary role mein hai — replacement nahi.`,

  isForYouIf: [
    'Aap sirf baar baar moisturizer laga ke thak gaye hain — root cause samajhna chahte hain',
    'Aapki dry skin chronic hai (1 mahine se zyada) aur conventional creams se temporary hi relief milti hai',
    'Aap side-effect free option chahte hain — especially agar baccha hai, pregnant hain, ya multiple medicines chal rahi hain',
  ],
  notForYouIf: [
    'Aapki skin pe infection hai ya khoon aa raha hai — pehle dermatologist se milein, phir homeopathy saath mein start kar sakte hain',
    'Aapko skin condition ke saath koi medical emergency hai — pehle emergency treatment lein',
  ],

  homeopathyDiseaseLinks: [
    { _key: 'hdl1', diseaseName: 'Eczema (Chambal) ka poora ilaaj',    diseaseSlug: 'eczema'    },
    { _key: 'hdl2', diseaseName: 'Psoriasis ka poora ilaaj',           diseaseSlug: 'psoriasis' },
    { _key: 'hdl3', diseaseName: 'Thyroid Disorder ka poora ilaaj',    diseaseSlug: 'thyroid'   },
  ],

  linkedDiseaseCards: [
    { _key: 'ldc1', title: 'Eczema',           hindiName: 'Chambal (Atopic Type)',  slug: 'eczema'    },
    { _key: 'ldc2', title: 'Psoriasis',         hindiName: 'Chaal Rog',             slug: 'psoriasis' },
    { _key: 'ldc3', title: 'Hypothyroidism',    hindiName: 'Thyroid Ki Kami',       slug: 'thyroid'   },
  ],

  faqs: [
    {
      _key: 'faq1', faqType: 'normal-vs-serious',
      question: 'Rookhi twacha (dry skin) kab normal hai aur kab doctor zaruri hai?',
      answer: `Dry skin tab normal hai jab wo ek specific trigger ke baad aayi ho — jaise sardi ka mausam, naya soap, ya zyada garam paani se nahana — aur basic moisturizing se 2-3 din mein better ho jaaye.\n\nDoctor zaruri hai jab: dry skin ke saath khujli ho jo raat ko neend kharab kare, skin mein dararein pad gayi hon jo theek nahi ho rahi, koi lal ya thick patches aa rahe hon, ya 3-4 hafte se hai aur cream se koi fark nahi pad raha.\n\nAgar dry skin ke saath aankhon mein peela pan, zyada thakaan, ya baal jhadna bhi ho — to turant doctor se milein, ye kisi bimari ka sign ho sakta hai.`,
    },
    {
      _key: 'faq2', faqType: 'duration',
      question: 'Dry skin kitne din tak rehti hai?',
      answer: `Ye trigger pe depend karta hai. Agar koi specific cause hai — jaise naya soap, sardi ka mausam, ya dehydration — aur aap cause hata ke moisturize karo, toh 3 se 7 din mein significant improvement aani chahiye.\n\nAgar ek hafte ke baad bhi theek nahi hua, toh koi underlying cause ho sakta hai — eczema, thyroid, ya koi reaction. Aur agar 3-4 hafte se zyada ho gayi hai aur persist kar rahi hai — toh ye chronic xerosis (purani dry skin) hai jisme doctor ki salah zaruri hai.\n\nChronic dry skin cream se manage hoti hai lekin cure ke liye root cause treatment chahiye.`,
    },
    {
      _key: 'faq3', faqType: 'common-cause',
      question: 'Dry skin ka sabse common karan kya hai?',
      answer: `India mein dry skin ka sabse common karan hai galat skincare habits — specifically garam paani se nahana, harsh soaps ka use, aur moisturizer na lagana.\n\nIs ke baad common causes hain:\n- Low humidity — AC, desert climate, sardi\n- Paani kam peena (dehydration)\n- Aging — 40 saal ke baad skin naturally zyada dry hone lagti hai\n- Medicines — kuch BP, cholesterol, aur diuretic medicines skin dry kar sakti hain\n\nMedically, eczema, thyroid ki kami, aur diabetes bhi common causes hain agar dry skin chronic ho aur cream se better na ho.`,
    },
    {
      _key: 'faq4', faqType: 'ghar-wait',
      question: 'Dry skin mein ghar pe kab tak reh sakte hain?',
      answer: `Agar dry skin mild hai — thodi tightness, koi bleeding nahi, koi intense khujli nahi, aur koi saath mein aur symptom nahi — toh ghar pe 5-7 din try karo.\n\nKaro ye: nahaane ke turant baad thick moisturizer (cream ya ointment) lagao, garam paani avoid karo, zyada paani piyo, aur harsh soap band karo.\n\nAgar 5-7 din mein clearly better nahi hua, ya khujli badhne lage, skin crack ho, ya redness aayi — ghar pe ruk ke mat dekho, doctor se milo.`,
    },
    {
      _key: 'faq5', faqType: 'homeopathy',
      question: 'Kya homeopathy dry skin mein kaam karta hai?',
      answer: `Homeopathy dry skin ke liye, specifically chronic ya recurring cases mein, ek useful complementary approach raha hai. Iska fayda ye hai ki ye sirf skin pe cream lagane jaisi surface-level treatment nahi karti — case history leke underlying cause address karne ki koshish karta hai.\n\nAgar dry skin eczema, thyroid, ya kisi internal imbalance ki wajah se hai — toh homeopathy constitutional level pe kaam kar sakti hai. Results individual hote hain — kuch logon ko 2-3 mahine mein clearly better lagta hai, kuch mein zyada time lagta hai.\n\nImportant: Homeopathic medicines ka naam ya potency khud decide mat karo — ek qualified homeopathic doctor se consultation zaroor lein. Sahi medicine sirf detailed case history se tay hoti hai.`,
    },
    {
      _key: 'faq6', faqType: 'test-diagnosis',
      question: 'Dry skin mein kaunsa test karwana chahiye?',
      answer: `Agar dry skin 4 hafte se zyada hai ya saath mein aur symptoms hain, toh ye tests ho sakti hain:\n- Thyroid Function Test (T3, T4, TSH) — thyroid se related dry skin rule out karne ke liye\n- Blood Sugar (Fasting + PP) — diabetes check ke liye\n- Kidney Function Test — agar intense khujli bhi saath mein ho\n- Patch Test (Dermatologist karta hai) — agar contact allergy suspect hai\n\nSirf dry skin ke liye koi "standard test" nahi hota — doctor symptoms dekhke decide karega kaunsa test zaruri hai. Apne aap se test order mat karo — pehle doctor se milo.`,
    },
    {
      _key: 'faq7', faqType: 'bacchon-mein',
      question: 'Bacchon mein dry skin kyun hoti hai?',
      answer: `Bacchon ki skin adults ke muqable naturally zyada sensitive aur thin hoti hai — barrier function weaker hota hai. Common reasons:\n- Adult soaps ya shampoos ka use (too harsh)\n- Zyada garam paani se nahana\n- Synthetic kapde\n- Paani kam peena\n- Eczema — bacchon mein ye bahut common hai, aksar 2-5 saal ki umar mein start hoti hai\n\nAgar bachche ki dry skin sirf ek jagah pe hai, intense khujli ke saath hai, ya theek nahi ho rahi — ek pediatric dermatologist ya homeopathic doctor se dikhao. Bacchon ke liye cream choose karte waqt bhi doctor se poochho — adult moisturizers suitable nahi hote.`,
    },
    {
      _key: 'faq8', faqType: 'india-specific',
      question: 'Garmiyoon mein bhi dry skin kyun rehti hai?',
      answer: `Ye India mein common confusion hai. Log sochte hain dry skin sirf sardi mein hoti hai — lekin garmiyoon mein bhi hoti hai, aur kuch log zyada suffer karte hain.\n\nGarmi mein dry skin ke reasons:\n- AC ka zyada use — AC room ki humidity bahut kam kar deta hai\n- Paseena aata hai lekin log paani kam peete hain — overall dehydration\n- Baar baar nahana — garmi mein 2-3 baar nahane ki aadat natural oils hata deti hai\n- Sunburn — sun damage skin barrier ko damage karta hai\n\nAgar garmiyoon mein bhi dry skin hai — AC use kam karo ya humidifier rakho, paani zyada piyo, aur after-shower moisturizing skip mat karo.`,
    },
    {
      _key: 'faq9', faqType: 'common-cause',
      question: 'Haathon aur pairon pe dry skin zyada kyun hoti hai?',
      answer: `Haath aur pair dono sabse zyada exposure mein hote hain — aur dono mein naturally oil glands (sebaceous glands) body ke baaki hisson ke muqable kam hoti hain.\n\nHaathon pe: baar baar haath dhona, dishwashing liquid ka contact, aur kaafi kaam ke wajah se barrier baar baar damage hoti hai.\n\nPairon pe: closed shoes mein moisture aur friction, ya bilkul dry air exposure (sandals) — dono opposite situations mein moisture problem hoti hai. Pindliyon pe skin naturally thin hoti hai aur circulation bhi thoda less hota hai.\n\nAgar pair ki dry skin mein dararein bahut deep hain ya wound ho — diabetes rule out karwao.`,
    },
    {
      _key: 'faq10', faqType: 'baar-baar',
      question: 'Dry skin baar baar kyun aati hai?',
      answer: `Agar dry skin baar baar aa rahi hai — cream lagao, theek ho, phir wapas aa jaaye — toh root cause address nahi ho raha.\n\nCommon reasons for recurrence:\n- Trigger continue ho raha hai — same harsh soap, same AC environment\n- Koi underlying condition hai (eczema, thyroid) jo treat nahi hua\n- Seasonal pattern — agar sirf sardi mein aati hai, toh ye environmental dry skin hai — moisturizing routine saal bhar maintain karni hogi\n- Skin barrier permanently weakened ho gayi hai — chronic eczema ya aging mein ye hota hai\n\nBaar baar aane wali dry skin ke liye surface-level treatment se zyada, ek doctor se ek baar root cause evaluation zaroor karwao.`,
    },
    {
      _key: 'faq11', faqType: 'permanent',
      question: 'Dry skin se hamesha ke liye kaise chutkara milega?',
      answer: `"Hamesha ke liye cure" ka vaada koi bhi system honestly nahi kar sakta — aur koi kare toh doubt karo. Jo realistic hai:\n\n- Agar cause environmental ya lifestyle hai: trigger hatate hi dry skin khatam ho jaati hai aur dobara aana band ho sakta hai agar routine theek rakho\n- Agar eczema ya psoriasis hai: complete disappearance rarely hota hai, lekin sahi treatment se flare-ups bahut kam ho jaate hain — life practically normal ho jaati hai\n- Agar thyroid cause hai: thyroid treat hone pe dry skin automatically improve hoti hai\n\nHomeopathy chronic dry skin ki underlying pattern todne mein madadgar rahi hai — results individual hote hain, lekin jo log constitutional treatment complete karte hain unhe typically long-term improvement milti hai.`,
    },
    {
      _key: 'faq12', faqType: 'lifestyle',
      question: 'Rookhi twacha mein kya khaana chahiye?',
      answer: `Diet ke baare mein ek important baat: dry skin ke liye andar se hydration barabar zaroori hai bahar ki cream se. Paani zyada piyo — din mein 8-10 glass minimum.\n\nOmega-3 fatty acids (walnuts, flaxseeds, fish) skin barrier ke liye helpful hain — ye generally safe aur beneficial hain.\n\nSpecific diet chart ya food restrictions ke liye — jo aapki condition specific ho — pehle doctor se milo. Diet advice bhi individual hoti hai.`,
    },
  ],

  relatedSymptoms: [
    { _key: 'rs1', name: 'Itching All Over Body', hindiName: 'Poore Badan Mein Khujli', slug: 'itching-all-over-body' },
    { _key: 'rs2', name: 'Skin Rash',             hindiName: 'Twacha Pe Daane',         slug: 'skin-rash'            },
    { _key: 'rs3', name: 'Hair Loss',             hindiName: 'Baal Jhadna',             slug: 'hair-loss'            },
    { _key: 'rs4', name: 'Fatigue',               hindiName: 'Thakaan',                 slug: 'fatigue'              },
  ],

  sources: [
    { _key: 's1', name: 'World Health Organization — Skin conditions: Overview of common conditions', year: '2023', url: 'https://www.who.int/news-room/fact-sheets/detail/skin-conditions'                        },
    { _key: 's2', name: 'Mayo Clinic — Dry skin (Xerosis cutis): Symptoms & Causes',                year: '2024', url: 'https://www.mayoclinic.org/diseases-conditions/dry-skin/symptoms-causes/syc-20353885' },
    { _key: 's3', name: 'NCBI — Skin Barrier Function and Moisturizers',                           year: '2022', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6497707/'                                  },
    { _key: 's4', name: 'NHS UK — Dry skin: Causes, Treatment and Self-care',                      year: '2023', url: 'https://www.nhs.uk/conditions/dry-skin/'                                                 },
  ],

  quickFactSymptom:    'Dry skin sirf cosmetic problem nahi — ye skin ke protective barrier ka weak hona hai.',
  quickFactIndiaStats: 'Sardi ke mahine mein aur AC environments mein dry skin cases significantly badhte hain.',
  quickFactDoctorWhen: '4 hafte se zyada dry skin jo cream se better na ho — doctor evaluation zaruri hai.',
  reviewDate: 'May 2026',

  doctorNote: 'Maine apni practice mein dekha hai ki dry skin ke jo patients aate hain, unme se kaafi logo ko pata hi nahi hota ki unki twacha ki problem andar se hai — thyroid ya digestive system se. Wo saalon se cream lagate rehte hain, temporary relief milti hai, aur wapas aa jaata hai. Ek detailed case history mein hi pata chalta hai ki trigger bahar se hai ya andar se. Homeopathy mein ye constitutional assessment hi dry skin ke treatment ko sirf temporary se permanent direction deta hai.',
}

async function seed() {
  console.log('🌱 Seeding Dry Skin symptom page...')
  await client.createOrReplace(doc)
  console.log('✅ Symptom seeded — homeopedia.in/symptoms/dry-skin')
}

seed().catch(console.error)
