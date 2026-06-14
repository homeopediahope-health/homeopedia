import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

const symptom = {
  _id: 'symptom-mouth-ulcer',
  _type: 'symptom',
  title: 'Mouth Ulcer (Munh ka Chhala)',
  hindiName: 'Munh ka Chhala',
  slug: { _type: 'slug', current: 'mouth-ulcer' },
  metaTitle: 'Mouth Ulcer in Hindi – Karan, Ilaaj aur Homeopathy | Homeopedia',
  metaDescription:
    'Munh ka chhala (mouth ulcer) ke karan, severity aur ghar pe safe steps – simple Hinglish mein. Verified info, doctor-reviewed.',
  heroText:
    'Khaana khaate waqt achanak ek jagah pe ek tez, jalne jaisi takleef – aur phir aap samjhe ki munh mein ek chhota sa chhala ho gaya hai. Mouth ulcer (munh ka chhala) ek white ya yellowish se gol zakhm hota hai jo munh ke andar – gaal ki andar wali taraf, hont ke neeche, ya jeebh pe – hota hai. Khaana, paani peena, bolna – sab thoda mushkil ho jaata hai. Aap akele nahi hain – India mein har 5 mein se 1 insaan ko kabhi na kabhi mouth ulcer hota hai, aur bahut logon ko ye baar baar aata hai.\n\nYe page aapko 2 minute mein batayega: ghar pe rukein ya doctor jaayein, wajah kya ho sakti hai, aur kya karna chahiye.',

  indiaContext:
    'India mein 20-25% population ko kabhi na kabhi recurrent mouth ulcers hoti hain. Ye duniya mein sabse common oral conditions mein se ek hai.',
  indiaContextSource: 'NCBI / PubMed – Recurrent Aphthous Stomatitis: A Review | 2020',

  severityLevel1: [
    'Ek ya do chhote chhale (5mm se chhote) munh ke andar',
    'Dard sirf khaate ya touch karte waqt hota hai',
    'Koi bukhaar nahi, koi sojan nahi bahar se',
    '7-10 din mein theek hone ki shuruaat ho rahi hai',
    'Pehle bhi aisa hua tha aur khud theek ho gaya tha',
  ],
  severityLevel2: [
    'Chhala 10mm se bada hai – "major aphthous" ho sakta hai',
    'Teen ya zyada chhale ek saath',
    '2 hafte se zyada ho gaye hain lekin theek nahi ho raha',
    'Bukhaar bhi saath mein hai',
    'Bacche mein baar baar ho raha hai ya khana-paana band kar diya hai',
    'Munh ke andar ya bahar sojan aa gayi hai',
  ],
  severityLevel3: [
    'Chhala bahut tezi se bada ho raha hai – kuch dinon mein',
    'Chhale ke saath khoon aa raha hai bina touch kiye',
    '3 hafte se zyada se ek hi chhala hai jo theek hi nahi ho raha',
    'Chhale ke saath gaale ya gardan mein ghaav ya gath hai',
    'Munh khulna mushkil ho gaya hai – jaw stiff lag raha hai',
    'Chhale ke saath bahut tez bukhaar (102°F se upar)',
  ],

  timeline3Days:
    'Naya chhala pehle ek haara-sa ya white spot se shuru hota hai, phir round shape mein aa jaata hai. Ye healing process ki shuruaat hai – body khud repair mein lagi hai. Abhi garm, teekha, ya khattas khaana avoid karo – chhale ko irritate karta hai. Agar 3 din mein dard kam nahi hua, Level 2 pe aao.',
  timeline4Weeks:
    'Zyada tar simple mouth ulcer 7-14 din mein theek ho jaata hai. Agar 2 hafte ke andar behtar nahi ho raha – ya nayi jagah nayi ulcer aa gayi – to ye signal hai ki kuch underlying trigger hai jo khatam nahi hua. Is hafte doctor se milein.',
  timelineMonthPlus:
    'Agar aapko har 2-4 hafte mein nayi ulcers aati rehti hain, ya ek chhala 3+ hafte se hai – to ye Recurrent Aphthous Stomatitis (RAS) ya koi deeper cause ka sign hai. Iska ilaaj possible hai – lekin doctor ya homeopathic physician ki zarurat padegi. Sirf cream lagaate rehne se ye cycle nahi tutegi.',

  lifestyleCauses: [
    {
      _key: 'lc1',
      causeName: 'Nutritional Deficiency (Vitamins ki Kami)',
      mechanism:
        'Munh ki andar wali skin – oral mucosa – ek bahut thin layer hai jise repair hone ke liye Vitamin B12, B9 (Folate), Iron, aur Zinc chahiye. Jab ye nutrients kam hote hain – partial ya crash diet se, ya properly absorb na hone ki wajah se – munh ki skin ka baar baar healing mechanism slow ho jaata hai. Chhota sa trauma bhi chhala bana deta hai.',
      howToIdentify:
        'Baar baar mouth ulcer + thakaan + haath-pair mein jhunjhunahat – ye combination B12 deficiency ki taraf point karta hai. Blood test se confirm hota hai.',
    },
    {
      _key: 'lc2',
      causeName: 'Stress aur Neend ki Kami',
      mechanism:
        'High stress mein body cortisol hormone zyada release karti hai. Cortisol immune system ka balance bigaad deta hai – kuch immune cells hyperactive ho jaate hain aur oral tissue ko unnecessarily inflame kar dete hain. Ye hi kaaran hai ki exam time, shaadi, ya kisi bade kaam ke pehle mouth ulcer suddenly aa jaata hai.',
      howToIdentify:
        'Ulcer ek stressful event ke 2-4 din ke andar aata hai. Koi nutritional problem nahi hoti. Theek hone ke baad kuch hafte tak wapas nahi aata.',
    },
    {
      _key: 'lc3',
      causeName: 'Munh Mein Chot Lagana – Mechanical Trauma',
      mechanism:
        'Tez brush karna, daanton se gaal kaatna, koi sharp food (chips, papad), ya naya brace/dental work – munh ki andar wali skin ko physically damage kar deta hai. Is zakhm ko body patch karne ki koshish mein chhale ka roop deta hai. Ye chhala sirf usi jagah hota hai jahan chot lagi.',
      howToIdentify:
        'Ek hi chhala, ek specific jagah pe, kuch ghante baad ya ek din mein dikha. Koi baar baar hone ki history nahi. Aksar 5-7 din mein theek.',
    },
    {
      _key: 'lc4',
      causeName: 'Kuch Khaane ki Cheezein – Food Triggers',
      mechanism:
        'Kuch logon mein acidic foods (nimbu, imli, ananas, tomatoes) ya certain spices munh ki inner lining mein local irritation create karte hain. Ye full allergy nahi – ek sensitivity hoti hai jo munh ko zyada reactive banati hai.',
      howToIdentify:
        'Ek khaas food khane ke 12-24 ghante ke andar chhala aata hai, aur jab wo cheez band karo to nahi aata.',
    },
  ],

  medicalCauses: [
    {
      _key: 'mc1',
      diseaseName: 'Recurrent Aphthous Stomatitis (RAS)',
      diseaseHindiName: 'Baar Baar Munh Ke Chhale',
      howSymptomPresents:
        'Ye ek condition hai jahan binaa kisi wajaah ke baar baar munh mein chhale hote hain – mahine mein ek ya zyada baar. Chhale round, white/yellow center ke saath, red border ke saath hote hain. Ye sabse common type ki recurrent mouth ulcer hai.',
      howToIdentify:
        'Baar baar aana, koi obvious reason nahi hona, aur family mein bhi kisi ko hona – ye RAS ki pehchaan hai.',
      homeopediaSlug: '',
      isAvailable: false,
    },
    {
      _key: 'mc2',
      diseaseName: 'Iron Deficiency Anemia',
      diseaseHindiName: 'Khoon ki Kami / Anemia',
      howSymptomPresents:
        'Anemia mein munh ki lining pale aur thin ho jaati hai – chhoti si chot ya friction bhi chhala bana deti hai. Chhale aksar andar gaale ya hont pe aate hain aur theek hone mein zyada waqt lagte hain.',
      howToIdentify:
        'Mouth ulcer ke saath thakaan, chakkar, pale lips ya nails – ye combination anemia check karne ka signal.',
      homeopediaSlug: '',
      isAvailable: false,
    },
    {
      _key: 'mc3',
      diseaseName: 'Vitamin B12 / Folate Deficiency',
      diseaseHindiName: 'B12 ya Folic Acid ki Kami',
      howSymptomPresents:
        'B12 aur Folate cell repair ke liye zaroori hain. Inka level kam hone pe munh mein baar baar chhale aana, jeebh pe jalan (burning tongue), aur munh ka andar se raw feel karna – ye symptoms aate hain.',
      howToIdentify:
        'Strict vegetarians, elderly, ya log jo B12 absorb nahi kar paate – unhe ye zyada hota hai. Blood test se confirm hota hai.',
      homeopediaSlug: '',
      isAvailable: false,
    },
    {
      _key: 'mc4',
      diseaseName: 'Celiac Disease',
      diseaseHindiName: 'Gluten se Sensitivity',
      howSymptomPresents:
        'Celiac disease mein body gluten (gehun, maida mein paaya jaata hai) ko tolerate nahi kar paati – isse nutrients absorb nahi hote aur munh ke chhale baar baar aate hain. Kuch logon mein mouth ulcers Celiac ka pehla ya sirf symptom hota hai.',
      howToIdentify:
        'Baar baar mouth ulcer + pet ki takleef + weight loss – ye combination Celiac screen karne ka signal.',
      homeopediaSlug: '',
      isAvailable: false,
    },
    {
      _key: 'mc5',
      diseaseName: "Behcet's Disease",
      diseaseHindiName: 'Behcet Bimari (Rare Inflammatory Condition)',
      howSymptomPresents:
        'Ye ek rare condition hai jisme munh mein, private parts par, aur aankhon mein baar baar ulcers aate hain. Mouth ulcers is bimari mein bahut painful hote hain aur baar baar recur karte hain – aksar 3 ya zyada ek saath.',
      howToIdentify:
        'Sirf munh mein nahi – aankh ki problems ya skin ke rashes bhi saath mein hain to doctor zaroor dikhao. Rare hai lekin diagnose hona zaroori hai.',
      homeopediaSlug: '',
      isAvailable: false,
    },
  ],

  redFlags: [
    'Oral Cancer – agar ek hi chhala 3 hafte se theek nahi ho raha, uski edges hard hain, ya woh bada ho raha hai bina cause ke – turant dentist ya doctor dikhao. Cancer early stage mein asymptomatic dikha sakta hai.',
    'Viral Infection (Herpes / Hand Foot Mouth Disease) – agar chhale munh ke bahar (hont pe) bhi hain, ya bachche ko haath aur pairon pe bhi chhale hain, ya tez bukhaar ke saath aaya hai – ye viral hai, ek se zyada logon mein spread ho sakta hai.',
    'Immunodeficiency – agar baar baar mouth ulcer ke saath frequently infections ho rahe hain (baar baar sardi, fungal infections) – to immune system check karna zaroori hai.',
  ],

  homeSteps: [
    {
      _key: 'hs1',
      action: 'Theek se Kulli Karo – Salt Water Rinse',
      whyItWorks:
        'Halka salt water (warm) munh ko saaf rakhta hai aur chhale ke aas paas bacteria kam karta hai – infection prevent hoti hai aur healing mein help milti hai. Dard aur irritation thoda kam karta hai.',
    },
    {
      _key: 'hs2',
      action: 'Khaana Khaate Waqt Dhyaan Rakho',
      whyItWorks:
        'Garm, teekha, aur bahut khattas khaana chhale ko baar baar irritate karta hai aur healing slow ho jaati hai. Thoda bland, thanda (room temperature) khaana chhale ki healing mein disturb nahi karta.',
    },
    {
      _key: 'hs3',
      action: 'Toothbrush Soft Use Karo – Theeke se Brush Karo',
      whyItWorks:
        'Hard brushing ya rough bristles chhale ko aur damage kar sakte hain ya nayi jagah trauma create kar sakte hain. Soft bristle brush aur gentle technique – chhale ke upar direct brush mat karo.',
    },
    {
      _key: 'hs4',
      action: 'Rest Lo – Stress Kam Karo',
      whyItWorks:
        'Stress mouth ulcer ka ek major trigger hai. Neend poori karna aur stress thoda manage karna – body ki healing capacity natural taur pe improve hoti hai.',
    },
    {
      _key: 'hs5',
      action: 'Munh Ko Dry Mat Rehne Do',
      whyItWorks:
        'Dry mouth mein chhale zyada taklif dete hain aur healing slow hoti hai. Thoda zyada paani peena – munh moist rehne se chhala zyada comfortable feel hota hai.',
    },
  ],

  homeopathyIndividualization:
    'Munh mein chhala ek naam hai – lekin har insaan ka chhala alag hota hai. Kisi ko raat ko dard zyada hota hai, kisi ko touch karne pe, kisi ko sirf khaate waqt. Kisi ka chhala stress se aata hai, kisi ka vitamin ki kami se, kisi ka baar baar kisi khas cheez khaane ke baad. Homeopathy mein sirf "mouth ulcer" nahi dekha jaata – aapka chhala kaisa hai, kab hota hai, kya trigger karta hai, aur aapki overall health kaisi hai – ye sab milke treatment decide karta hai. Do logon ko ek jaisa chhala ho sakta hai – aur unka treatment bilkul alag ho sakta hai.',
  homeopathyRootCause:
    'Baar baar aane wala mouth ulcer usually ek deeper imbalance ka signal hota hai – nutritional, immune, ya stress-related. Sirf chhale pe cream lagaana ya topical relief lena cycle nahi todta – agle mahine phir wahi. Homeopathy ka approach ye hai ki jo cheez baar baar chhale la rahi hai – usse address kiya jaaye. Waqt ke saath frequency aur intensity dono kam hoti hain. Research is area mein limited hai aur results individual hote hain – lekin recurrent cases mein ye approach long-term ke liye more sustainable hai.',
  homeopathySafety:
    'Bacchon mein ya pregnancy mein munh ke chhale ke liye safe options ki zarurat hoti hai. Homeopathy highly diluted medicines use karta hai – practically side-effect free hoti hain. Isliye ye groups mein bhi safely consider kiya ja sakta hai conventional treatment ke saath-saath. Emergency ya bahut painful conditions mein, ya agar chhala 3 hafte se zyada se hai – pehle doctor ya dentist se milein. Homeopathy complementary role mein hai – replacement nahi.',

  homeopathyDiseaseLinks: [],

  isForYouIf: [
    'Aapko baar baar munh mein chhale ho rahe hain aur sirf topical relief se kaam nahi chal raha',
    'Aap root cause address karna chahte hain – sirf symptom baar baar band nahi karna',
    'Aap bacche hain, pregnant hain, ya kai doosri medicines chal rahi hain – safe option chahiye',
  ],
  notForYouIf: [
    'Aapka chhala bahut tez dard kar raha hai aur abhi isi waqt relief chahiye – emergency mein pehle conventional treatment lein, homeopathy baad mein saath chalao',
    'Aapka chhala 3 hafte se zyada se hai ya bada ho raha hai – pehle doctor ya dentist se malignancy rule out karayen',
  ],

  linkedDiseaseCards: [],

  quickFactSymptom:
    'Munh ka chhala (aphthous ulcer) munh ke andar ka ek chhota painful zakhm hota hai – usually round, white/yellow center, red border ke saath.',
  quickFactIndiaStats:
    'India mein 20-25% population ko kabhi na kabhi recurrent mouth ulcers hoti hain. (NCBI 2020)',
  quickFactDoctorWhen:
    'Agar chhala 3 hafte se zyada hai, bada ho raha hai, ya munh ke bahar bhi hai – doctor zaroor dikhao.',

  faqs: [
    {
      _key: 'faq1',
      faqType: 'general',
      q: 'Munh ka chhala kab normal hota hai aur kab doctor zaroori hai?',
      a: 'Normal mouth ulcer – jo gaal ke andar, 5mm se chhota, 1-2 hain, aur 7-14 din mein theek ho jaate hain – ghar pe manage ho sakta hai. Doctor zaroori hai jab: chhala 3 hafte se zyada ho aur theek na ho; chhala bada hota ja raha ho; 3 ya zyada chhale ek saath hon; bukhaar saath mein ho; ya munh ke bahar hont pe chhale hon. Baar baar aane wala (mahine mein ek baar se zyada) bhi doctor ko dikhana chahiye. Ye signs rare hain – majority cases simple hote hain.',
    },
    {
      _key: 'faq2',
      faqType: 'general',
      q: 'Mouth ulcer kitne din mein theek hota hai?',
      a: 'Simple aphthous ulcer (sabse common type) generally 7 se 14 din mein theek ho jaata hai – bina kisi treatment ke bhi. Pehle 3-4 din dard zyada hota hai, phir dheere dheere thanda hota hai. Agar 2 hafte ke andar better nahi ho raha to doctor se milein. Major aphthous ulcer (jo bade hote hain) 4-6 hafte tak reh sakte hain – inke liye doctor zaroor dikhao. Healing ke signs: chhale ka size chhota hona, white coating hata ke pink skin dikhai dena, dard kam hona.',
    },
    {
      _key: 'faq3',
      faqType: 'general',
      q: 'Munh mein baar baar chhala kyun hota hai?',
      a: 'Baar baar mouth ulcer (Recurrent Aphthous Stomatitis) ka sabse common reason hai nutritional deficiency – specially Vitamin B12, Iron, ya Folate ki kami. Doosra bada reason hai chronic stress. Kuch logon mein khaane ki sensitivity (gluten, acidic foods) bhi trigger hoti hai. Hormonal changes – specially women mein periods ke aas paas – bhi baar baar chhale la sakti hain. Agar mahine mein 2 baar se zyada ho raha hai to sirf topical treatment se kaam nahi chalega – ek blood test se pata chalega ki koi deficiency hai ya nahi. Homeopathy is recurring cycle ko address karne mein help kar sakti hai – results individual hote hain.',
    },
    {
      _key: 'faq4',
      faqType: 'general',
      q: 'Mouth ulcer se cancer hota hai kya?',
      a: 'Zyada tar common mouth ulcer (aphthous ulcer) cancer se bilkul alag hoti hai – aur cancer nahi banta. Lekin ek chhala jo 3 hafte se zyada se theek nahi ho raha, jo slowly bada ho raha hai, jiske edges hard ya irregular hain, ya jiske saath gaale mein gath hai – use zaroor doctor ya dentist se dikhao. Ye Oral Cancer ka early sign ho sakta hai, aur early detection mein treatment bahut effective hoti hai. Zyada tar cases mein yahi hota hai ki chhala innocent hota hai – lekin 3-hafte wala rule kabhi ignore mat karo.',
    },
    {
      _key: 'faq5',
      faqType: 'general',
      q: 'Bacchon mein munh ka chhala kyun hota hai?',
      a: 'Bacchon mein mouth ulcer ke common reasons alag hain: daanton se gaal kaatna ya lip kaatna (bahut common); koi cheez munh mein daalne ki aadat se trauma; Hand Foot Mouth Disease (viral infection jo 5 saal se chhote bacchon mein common hai – haath, pair aur munh pe chhale); ya nutritional deficiency. Bacche mein agar chhale ke saath bukhaar ho, haath ya pairon pe bhi chhale hon, ya khana-paana bilkul band kar diya ho – to doctor zaroor dikhao. Simple cases mein soft khaana do aur salt water se dhulwao. 7-10 din mein theek ho jaata hai.',
    },
    {
      _key: 'faq6',
      faqType: 'general',
      q: 'Pregnancy mein munh ka chhala normal hai kya?',
      a: 'Pregnancy mein mouth ulcer zyada common ho jaata hai – hormonal changes, Iron aur Folate ki badhti zarurat, aur immune system ka change is wajah se hai. Sirf ek-do simple chhale jo 2 hafte mein theek ho jaayein – usually normal hai. Lekin pregnancy mein apne OB/GYN ya doctor ko zaroor batao agar: baar baar ho raha ho, chhale bade hon, ya khaana-paana mushkil ho. Iron aur Folate deficiency – jo pregnancy mein common hai – mouth ulcer ka cause ho sakta hai. Homeopathy pregnancy mein safe supplementary option hai – lekin koi bhi medicine lene se pehle doctor se zaroor poochho.',
    },
    {
      _key: 'faq7',
      faqType: 'general',
      q: 'Kya mouth ulcer khud theek ho sakta hai?',
      a: 'Haan – simple aphthous ulcer bina kisi treatment ke khud theek ho jaata hai, generally 7-14 din mein. Body ka natural healing mechanism kaam karta hai. Ghar pe jo karna chahiye: salt water rinse, soft khaana, stress avoid karna, aur munh ko clean rakhna. In sab se healing mein speed nahi aati drastically – lekin discomfort kam hoti hai aur infection ka risk kam rehta hai. Topical gels temporary pain relief ke liye use hote hain – healing accelerate nahi karte. Agar 14 din mein better nahi – doctor se milein.',
    },
    {
      _key: 'faq8',
      faqType: 'general',
      q: 'Mouth ulcer mein kaunsa test karwana chahiye?',
      a: 'Ek ya do simple mouth ulcer mein koi test zaruri nahi – ye clinically diagnose hota hai. Lekin baar baar aane wale chhale mein doctor in tests suggest kar sakta hai: CBC (Complete Blood Count) – anemia aur WBC check; Serum B12, Folate, Iron, Ferritin – nutritional deficiency; Blood Sugar – diabetes connection; Thyroid – hypothyroidism bhi trigger ho sakta hai; Anti-tTG antibody (Celiac screen) – baar baar aane wale cases mein; Biopsy – sirf jab chhala 3 hafte+ se ho aur suspicious lage. Test ki zarurat doctor decide karega – khud se test mat karwate rahe.',
    },
    {
      _key: 'faq9',
      faqType: 'general',
      q: 'Kya mouth ulcer ek se doosre ko lag sakta hai?',
      a: 'Zyada tar common mouth ulcer (aphthous stomatitis) contagious nahi hoti – ek insaan se doosre ko nahi lagti. Lekin agar chhala Herpes Simplex Virus (HSV) ki wajah se hai – jo mostly hont ke bahar ya corners pe aata hai – to wo contagious hai aur kissing ya sharing utensils se spread ho sakta hai. Bacchon mein Hand Foot Mouth Disease bhi viral aur contagious hai. Agar aapka chhala sirf munh ke andar hai (gaal, jeebh, gums pe) aur simple white/yellow hai – to worry mat karo. Hont ke bahar wala blistery sore doctor se dikhao.',
    },
    {
      _key: 'faq10',
      faqType: 'homeopathy',
      q: 'Homeopathy mouth ulcer mein kaam karti hai kya?',
      a: 'Homeopathy mouth ulcer mein help kar sakti hai – specially recurrent cases mein jahan baar baar aane ka cycle todna goal hai. Ek-do simple ulcer jo khud theek ho jaate hain, unke liye homeopathy ki utni zarurat nahi. Lekin baar baar aane wale, stress ya nutrition se linked cases mein, homeopathy ka individualized approach – sirf symptom nahi, trigger address karna – useful raha hai clinic mein. Research is area mein limited hai aur results individual hote hain. Ek homeopathic physician properly case history le ke decide karta hai – self-medication se zyada yahi effective hota hai.',
    },
    {
      _key: 'faq11',
      faqType: 'homeopathy',
      q: 'Mouth ulcer se hamesha ke liye kaise chutkara milega?',
      a: '"Permanent cure" ka vaada koi bhi system honestly nahi kar sakta – aur koi kare to doubt karo. Jo realistic hai: sahi cause identify ho to baar baar aana bahut kam ho jaata hai. Agar B12 ki kami hai – supplement se cycle ruk jaata hai. Agar stress trigger hai – stress management se frequency significantly kam hoti hai. Agar food sensitivity hai – us food ko avoid karne se. Homeopathy recurrent cases mein underlying pattern address karta hai – log report karte hain ki frequency aur intensity dono kam hoti hain. Complete aur permanent guarantee koi nahi de sakta – lekin practically normal life possible hai sahi approach se.',
    },
    {
      _key: 'faq12',
      faqType: 'general',
      q: 'Chai peene ke baad mouth ulcer kyun badhta hai?',
      a: 'Bahut common complaint hai ye India mein. Chai (specially garam aur strong chai) munh ke andar wali thin skin ko directly irritate karta hai – jab chhala pehle se ho to ye irritation aur pain badhata hai aur healing slow karta hai. Acidic tannins jo chai mein hote hain bhi mucosal lining ko sensitive banate hain. Iska matlab ye nahi ki chai se chhala hota hai – lekin jab chhala ho to thanda ya halka garam paani prefer karo. Chai se break lena chhale ko theek hone ki jagah deta hai.',
    },
  ],

  relatedSymptoms: [
    {
      _key: 'rs1',
      title: 'Sore Throat (Gale Mein Kharash)',
      hindiName: 'Gale Mein Dard ya Kharash',
      slug: 'gale-mein-dard',
    },
    {
      _key: 'rs2',
      title: 'Bad Breath (Munh ki Badbu)',
      hindiName: 'Munh ki Badbu',
      slug: 'bad-breath',
    },
    {
      _key: 'rs3',
      title: 'Tongue Pain (Jeebh mein Dard)',
      hindiName: 'Jeebh mein Dard ya Jalan',
      slug: 'tongue-pain',
    },
    {
      _key: 'rs4',
      title: 'Dry Mouth',
      hindiName: 'Munh Sukha Rehna',
      slug: 'dry-mouth',
    },
  ],

  sources: [
    {
      _key: 'src1',
      name: 'Mayo Clinic – Canker Sore (Mouth Ulcer): Symptoms & Causes | 2024',
    },
    {
      _key: 'src2',
      name: 'NHS UK – Mouth Ulcers: Overview | 2023',
    },
    {
      _key: 'src3',
      name: 'NCBI / PubMed – Recurrent Aphthous Stomatitis: A Review | 2020',
    },
    {
      _key: 'src4',
      name: 'WHO – Oral Health: Key Facts | 2023',
    },
  ],
}

async function seed() {
  console.log('🌱 Seeding Mouth Ulcer symptom page...')
  await client.createOrReplace(symptom)
  console.log('✅ Symptom seeded — homeopedia.in/symptoms/mouth-ulcer')
}

seed().catch(console.error)
