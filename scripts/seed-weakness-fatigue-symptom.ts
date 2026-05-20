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
  _id: 'symptom-weakness-fatigue',
  _type: 'symptom',
  title: 'Weakness & Fatigue (Kamzori aur Thakaan)',
  hindiName: 'Kamzori / Thakaan',
  slug: { _type: 'slug', current: 'weakness-fatigue' },
  metaTitle: 'Weakness Fatigue in Hindi – Karan, Ilaaj aur Homeopathy',
  metaDescription:
    'Kamzori aur thakaan (weakness fatigue) ke karan, severity aur ghar pe safe steps – simple Hinglish mein. Verified info, doctor-reviewed.',
  heroText:
    'Subah uthke bhi fresh feel nahi hota – jaise raat bhar soya hi nahi. Din mein kaam karne ki icchaashakti nahi, pair bhaare lagte hain, aur chhoti si cheez karne mein bhi jyada mehnat lagti hai. Kamzori aur thakaan – weakness aur fatigue – India mein ek bahut common complaint hai, lekin iska matlab hamesha ek hi nahi hota.\n\nBody mein energy ek complex system se aati hai – nutrients, hormones, neend, aur organs ka coordination. Jab is system mein kahin bhi kuch out of balance hota hai, tab body "main thak gayi hoon" ka signal deti hai.\n\nYe page aapko 2 minute mein batayega: ghar pe rukein ya doctor jaayein – aur aage kya karein.',

  indiaContext:
    'WHO ke anusaar, generalized fatigue world ki sabse common health complaints mein se ek hai, aur India mein poor nutrition, anemia, aur thyroid disorders iske major drivers hain – specially 25-50 saal ki age group mein.',
  indiaContextSource: 'WHO Global Health Observatory Data',

  severityLevel1: [
    'Kisi ek kaam ke baad thakaan – jaise bhari exercise ya neend poori na hona',
    '1-2 din se hai aur koi aur symptom nahi',
    'Rest lene ke baad better lagta hai',
    'Khaana chhoot gaya tha ya zyada stress tha recently',
  ],
  severityLevel2: [
    '2 hafte se zyada se thakaan hai aur rest se theek nahi ho rahi',
    'Saath mein dizziness ya chakkar bhi aa raha hai',
    'Khane ke baad bhi weakness rehti hai',
    'Pair aur haath mein muscle weakness mahsoos hoti hai',
    'Subah uthne ke baad bhi thaka hua feel karna',
  ],
  severityLevel3: [
    'Extreme weakness ke saath saans lene mein takleef (shortness of breath)',
    'Chest mein dard ya dil ki dharkan bahut tez/irregular hona',
    'Suddenly itni kamzori ki khade hone ya chalane mein problem',
    'Confusion ya behoshi jaisi feeling ke saath thakaan',
    'Weakness ke saath chaaro taraf peela dikhna ya aankhein peeli hona',
  ],

  timeline3Days:
    'Body aksar ek reason se thak jaati hai – bhaari kaam, khaana skip hona, raat bhar jaagna, ya koi infection shuru ho raha ho. Ye common hai. Aaram karo, paani peeo, aur observe karo. Agar teen din mein better nahi hua ya koi nayi sign aa jaye, to Level 2 mein aao.',
  timeline4Weeks:
    'Ye signal hai ki body kuch bata rahi hai jo temporary nahi hai. 2 hafte se zyada ki thakaan almost hamesha ek underlying cause ki taraf point karti hai – nutrition, thyroid, anemia, ya koi aur cheez. Doctor se milna ab postpone mat karo.',
  timelineMonthPlus:
    'Chronic fatigue – 1 mahine ya zyada – ek serious investigation ka reason hai. Sirf "busy hoon" ya "umar ho gayi" se explain mat karo ise. Doctor blood tests karwayenge. Agar root cause address nahi hua to akela rest kafi nahi hoga.',

  lifestyleCauses: [
    {
      _key: 'lc1',
      causeName: 'Neend Ki Kami (Poor Sleep)',
      mechanism:
        'Neend ke dauran body repair hoti hai – muscles recover karti hain, hormones reset hote hain, brain waste products saaf karta hai. Jab raat ko 6-8 ghante ki quality sleep nahi milti – chahe kaam ki wajah se, phone ki wajah se, ya anxiety ki wajah se – body incomplete repair ke saath uth jaati hai. Har agle din thakaan compound hoti rehti hai.',
      howToIdentify:
        'Subah uthke bhi fresh feel nahi hota. Din mein neend aati hai. Raat ko late tak phone ya TV chal raha tha.',
    },
    {
      _key: 'lc2',
      causeName: 'Khaane Ki Kami Ya Galat Khaana',
      mechanism:
        'Energy ka source hai glucose – jo carbohydrates se aata hai. Lekin iron, B12, magnesium, aur protein bhi utne hi zaroori hain. Jab khaana skip hota hai, ya sirf maida aur sugar khaate hain, to body ko proper fuel nahi milta. Result: persistent low energy jo din bhar rehti hai.',
      howToIdentify:
        'Khaane ke baad thodi der ke liye better lagta hai. Subah nashta nahi kiya hota ya khana late khaate ho.',
    },
    {
      _key: 'lc3',
      causeName: 'Zyada Physical Ya Mental Stress',
      mechanism:
        'Prolonged stress mein body "fight-or-flight" mode mein rehti hai. Cortisol (stress hormone) lagaataar release hota rehta hai. Yahi cortisol jo short-term mein energy deta hai, long-term mein adrenal glands ko exhaust kar deta hai. Mental kaam bhi utni hi energy consume karta hai jitna physical kaam – kabhi kabhi zyada.',
      howToIdentify:
        'Kaam ka pressure zyada hai, ya ghar mein emotional stress chal raha hai. Thakaan aksar anxiety ya mood swing ke saath aati hai.',
    },
    {
      _key: 'lc4',
      causeName: 'Pani Ki Kami (Dehydration)',
      mechanism:
        'Blood ka 90% paani hai. Jab body properly hydrated nahi hoti, blood thoda thicker ho jaata hai – aur heart ko zyada mehnat karni padti hai oxygen aur nutrients cells tak pahunchane ke liye. Ye directly fatigue ke roop mein feel hota hai – specially garmi mein ya exercise ke baad.',
      howToIdentify:
        'Peshab ka rang dark yellow hai. Sar halka lagta hai. Din bhar paani kam peete ho.',
    },
  ],

  medicalCauses: [
    {
      _key: 'mc1',
      diseaseName: 'Iron Deficiency Anemia (Khoon Ki Kami)',
      diseaseHindiName: 'Khoon Ki Kami / Anemia',
      howSymptomPresents:
        'Anemia mein red blood cells ya hemoglobin kam hoti hai – matlab oxygen body ke cells tak theek se nahi pahunchti. Har kaam mein zyada effort lagti hai, thakaan har waqt rehti hai, aur chhoti si cheez karne pe bhi saans phool sakti hai.',
      howToIdentify:
        'Haath pair thande rehte hain. Aankhein ya nails pale dikhti hain. Mahilaon mein heavy periods ke baad zyada hota hai. Hemoglobin test se confirm hota hai.',
      homeopediaSlug: '',
      isAvailable: false,
    },
    {
      _key: 'mc2',
      diseaseName: 'Hypothyroidism (Thyroid Ki Kami)',
      diseaseHindiName: 'Thyroid Underactive Hona',
      howSymptomPresents:
        'Thyroid gland metabolism control karti hai – energy kitni banti hai aur kitni use hoti hai. Jab thyroid slow ho jaati hai (hypothyroidism), sab kuch slow ho jaata hai – energy kam, thakaan zyada, weight badhna, aur mood down rehna.',
      howToIdentify:
        'Thakaan ke saath weight badhna, thand zyada lagti hai, baal jhadte hain, constipation hoti hai. TSH blood test se confirm hota hai.',
      homeopediaSlug: 'thyroid',
      isAvailable: true,
    },
    {
      _key: 'mc3',
      diseaseName: 'Diabetes (Madhumeh)',
      diseaseHindiName: 'Cheeni Ki Bimari / Sugar Ki Bimari',
      howSymptomPresents:
        'Diabetes mein body ya to insulin nahi banati ya sahi se use nahi karti. Glucose cells tak nahi pahunchta – blood mein tairti rehti hai, cells bhookhe rehte hain. Iska direct result hai persistent fatigue aur weakness, chahe khaana poora khaao.',
      howToIdentify:
        'Baar baar pyaas lagti hai, baar baar peshab jaana padta hai. Thakaan ke saath aankhon ka dhundhla dikhai dena. Fasting blood sugar test se confirm hota hai.',
      homeopediaSlug: '',
      isAvailable: false,
    },
    {
      _key: 'mc4',
      diseaseName: 'Depression / Anxiety',
      diseaseHindiName: 'Mansik Thakaan / Udaasi Ki Bimari',
      howSymptomPresents:
        'Depression sirf emotional nahi hoti – ye ek physical condition bhi hai. Brain mein neurotransmitters (serotonin, dopamine) ka imbalance physical fatigue create karta hai. Patient physically "theek" hota hai tests mein – lekin energy bilkul nahi hoti.',
      howToIdentify:
        'Thakaan ke saath neend ya to bahut zyada ya bilkul nahi. Kisi cheez mein interest nahi lagta. Kaam ya ghar ke kaam karne ka mann nahi karta. Ye physical thakaan se alag hoti hai.',
      homeopediaSlug: 'depression',
      isAvailable: true,
    },
    {
      _key: 'mc5',
      diseaseName: 'Chronic Fatigue Syndrome',
      diseaseHindiName: 'Purani Thakaan Ki Bimari',
      howSymptomPresents:
        'Chronic Fatigue Syndrome (CFS) mein extreme thakaan 6 mahine ya zyada se rehti hai jo rest se theek nahi hoti. Immune system, nervous system aur hormonal systems sab affected hote hain. Long COVID ke baad bhi ye pattern dekha gaya hai.',
      howToIdentify:
        'Thakaan ke saath memory problems, sar dard, muscle pain, aur light sensitivity. Koi bhi physical activity ke baad thakaan aur bhi badhti hai. Blood tests mein aksar kuch abnormal nahi dikhta – diagnosis clinical hoti hai.',
      homeopediaSlug: 'chronic-fatigue-syndrome',
      isAvailable: true,
    },
  ],

  redFlags: [
    'Heart Disease ya Cardiac Weakness – agar thakaan ke saath saans phoolna, chest mein dard, ya pair sujan aaye – turant hospital. Ye cardiac failure ka sign ho sakta hai.',
    'Sudden Severe Weakness – agar ek taraf ka haath ya pair achanak kamzor ho jaaye, chehra toothey – ye stroke ka sign hai. Ambulance bulao, ek minute mat ruko.',
    'Jaundice ke saath Thakaan – aankhein ya skin peeli ho jaaye saath mein thakaan ho – liver ya blood ka serious issue ho sakta hai. Turant doctor.',
  ],

  homeSteps: [
    {
      _key: 'hs1',
      action: 'Neend Ka Schedule Fix Karo – Roz Same Time',
      whyItWorks:
        'Circadian rhythm theek hone se body repair cycle optimize hoti hai. Ek hafte consistent schedule se hi energy level mein noticeable improvement hoti hai. Weekends pe bhi same time pe utho.',
    },
    {
      _key: 'hs2',
      action: 'Har 3-4 Ghante Kuch Khaao – Meals Skip Mat Karo',
      whyItWorks:
        'Blood sugar ka drop fatigue ka ek major cause hai. Regular small meals se blood sugar stable rehti hai – energy consistent rehti hai din bhar. Subah nashta mandatory hai.',
    },
    {
      _key: 'hs3',
      action: 'Paani Zyada Peeyen – Din Mein 8-10 Glass',
      whyItWorks:
        'Mild dehydration bhi fatigue create karta hai. Ek glass paani pine ke 15-20 minute mein mild thakaan mein improvement feel hoti hai. Chai-coffee ke alawa plain paani zyada zaroori hai.',
    },
    {
      _key: 'hs4',
      action: '15-20 Minute Ki Halki Walk Roz Karein',
      whyItWorks:
        'Counter-intuitive lagta hai – thake hue ho to exercise karo? Lekin halki walk se blood circulation better hoti hai, endorphins release hote hain, aur energy metabolism improve hoti hai. Zyada mat karo – bas halka movement.',
    },
    {
      _key: 'hs5',
      action: 'Screen Time Raat Ko 1 Ghanta Pehle Band Karo',
      whyItWorks:
        'Blue light melatonin release rokti hai – neend ki quality kharab hoti hai. Ek hafte ye change karne se hi subah ki freshness mein fark aata hai. Ye simple step chronic fatigue mein bada role play karta hai.',
    },
  ],

  homeopathyIndividualization:
    'Kamzori aur thakaan ka naam ek hai – lekin har insaan ki thakaan alag hoti hai. Kisi ki thakaan subah zyada hoti hai, kisi ki sham ko. Kisi ko rest se better lagta hai, kisi ko chhota kaam karne ke baad aur zyada thakaan aati hai. Kisi ki thakaan emotional stress se aati hai, kisi ki physical kaam se, kisi ki kisi bimari se. Homeopathy mein sirf "fatigue" nahi dekha jaata – aapki thakaan kaisi hai, kab zyada hoti hai, kya saath mein aata hai, aur aapki overall health kaisi hai – ye sab milake treatment decide karta hai.',
  homeopathyRootCause:
    'Chronic thakaan aksar ek deeper imbalance ka signal hai – nutritional, hormonal, ya psychological. Sirf tonic ya supplement lene se cycle nahi toot-ta – cause address karna padta hai. Homeopathy mein jo pattern baar baar thakaan la raha hai usse address kiya jaata hai. Thyroid se aane wali thakaan alag treatment maangti hai, depression se aane wali alag, anemia se alag. Waqt ke saath energy level aur overall wellbeing better hoti hai. Research is area mein limited hai aur results individual hote hain.',
  homeopathySafety:
    'Pregnancy mein, elderly mein, ya jab pehle se kai medicines chal rahi hon – homeopathy ek safe complementary option hai. Highly diluted medicines ki wajah se practically side-effect free hai. Emergency cases mein – jaise sudden severe weakness, chest pain, ya breathlessness – pehle conventional treatment lein. Homeopathy complementary role mein hai, replacement nahi.',

  homeopathyDiseaseLinks: [
    {
      _key: 'hdl1',
      diseaseName: 'Thyroid (Hypothyroidism)',
      diseaseSlug: 'thyroid',
    },
    {
      _key: 'hdl2',
      diseaseName: 'Depression',
      diseaseSlug: 'depression',
    },
    {
      _key: 'hdl3',
      diseaseName: 'Chronic Fatigue Syndrome',
      diseaseSlug: 'chronic-fatigue-syndrome',
    },
  ],

  isForYouIf: [
    'Aap thakaan ki jaad tak jaana chahte hain – sirf tonic ya supplement nahi lena chahte',
    'Tests normal aa rahe hain lekin thakaan hai – conventional system mein jawab nahi mila',
    'Aapko long-term energy chahiye – ek din ke liye boost nahi, lasting improvement',
    'Aap side-effect free option prefer karte hain – specially agar pregnancy hai, elderly hain, ya kai medicines chal rahi hain',
  ],
  notForYouIf: [
    'Aapki thakaan ke saath chest pain, breathlessness, ya sudden weakness hai – ye emergency hai, turant hospital jaayein',
    'Aapki thakaan anemia ya diabetes se confirmed hai – pehle conventional treatment zaroori hai, homeopathy baad mein complementary role mein',
  ],

  linkedDiseaseCards: [
    {
      _key: 'ldc1',
      title: 'Hypothyroidism',
      hindiName: 'Thyroid Ki Kami',
      slug: 'thyroid',
    },
    {
      _key: 'ldc2',
      title: 'Depression',
      hindiName: 'Gahri Udaasi',
      slug: 'depression',
    },
    {
      _key: 'ldc3',
      title: 'Anxiety Disorder',
      hindiName: 'Chinta Rog',
      slug: 'anxiety',
    },
    {
      _key: 'ldc4',
      title: 'Chronic Fatigue Syndrome',
      hindiName: 'Purani Thakaan Ki Bimari',
      slug: 'chronic-fatigue-syndrome',
    },
  ],

  quickFactSymptom:
    'Weakness aur fatigue alag hain – weakness mein muscles ki strength kam hoti hai, fatigue mein energy aur motivation nahi hoti. Dono saath bhi aa sakte hain.',
  quickFactIndiaStats:
    'India mein anemia, thyroid disorders aur poor nutrition fatigue ke sabse common medical causes hain – khaaskar 25-50 saal ki mahilaon mein.',
  quickFactDoctorWhen:
    'Agar 2 hafte se zyada thakaan hai jo rest se theek nahi hoti, ya saath mein breathlessness, chest pain, ya jaundice ho – turant doctor.',

  faqs: [
    {
      _key: 'faq1',
      faqType: 'general',
      q: 'Kamzori aur thakaan mein kya fark hai?',
      a: 'Ye dono alag cheezein hain jo aksar saath aati hain. Weakness (kamzori) matlab muscles mein physical strength kam hona – haath pair uthana mushkil lagta hai. Fatigue (thakaan) matlab energy aur motivation ka drain hona – karne ki iccha nahi hoti. Koi ek hi ho sakta hai ya dono saath. Agar sirf thakaan hai bina muscle weakness ke – ye aksar sleep, nutrition, ya psychological cause hai. Agar muscles genuinely weak hain – ye neurological, muscular, ya serious medical cause ho sakta hai. Dono cases mein 2 hafte se zyada ho to doctor se milein.',
    },
    {
      _key: 'faq2',
      faqType: 'general',
      q: 'Thakaan kitne din mein normal ho jaati hai?',
      a: 'Ek-do din ki thakaan – jaise heavy exercise ya neend poori na hone ke baad – aam taur par 24-48 ghante mein rest se theek ho jaati hai. Ek hafte ki thakaan – kisi illness ya zyada stress ke baad – 5-7 din mein better honi chahiye. 2 hafte ya zyada se thakaan jo rest ke baad bhi theek nahi hoti – ye investigate karna zaroori hai. Is stage pe akela rest kafi nahi hota – blood tests se cause dhundna padta hai.',
    },
    {
      _key: 'faq3',
      faqType: 'general',
      q: 'Subah uthke thakaan kyun hoti hai?',
      a: 'Subah ki thakaan ke kai common reasons hain. Sabse common: poor sleep quality – neend ki quantity se zyada quality matter karti hai. Sleep apnea – raat ko saans baar baar rukti hai, patient jaag jaata hai lekin yaad nahi hota. Hypothyroidism – thyroid slow hone pe subah uthna mushkil hota hai. Depression – "early morning awakening" ek classic sign hai. Anemia – oxygen supply kam hone se subah extra thakaan. Agar consistently subah uthke thaka hua feel karo – TSH test (thyroid), hemoglobin, aur BP zaroor check karwao.',
    },
    {
      _key: 'faq4',
      faqType: 'general',
      q: 'Ghar pe thakaan mein kab tak wait kar sakte hain?',
      a: 'Agar thakaan 1-3 din ki hai, koi obvious reason hai (heavy kaam, neend nahi, stress), aur koi aur symptom nahi – ghar pe 3-5 din wait kar sakte hain. Agar 1 hafte mein better nahi hua – Level 2 mein aao. Agar 2 hafte se zyada se thakaan hai – doctor zaruri hai, ab wait karna sahi nahi. Turant doctor ke paas jaao agar thakaan ke saath chest pain, breathlessness, ya haath-pair sudden weak hoon – ye emergency signs hain.',
    },
    {
      _key: 'faq5',
      faqType: 'homeopathy',
      q: 'Kya homeopathy weakness aur fatigue mein kaam karta hai?',
      a: 'Homeopathy chronic fatigue aur weakness mein – specially jab conventional tests normal aa rahe hon lekin thakaan hai, ya jab thyroid/hormonal imbalance linked ho – ek useful complementary approach hai. Ye ek din mein energy boost nahi deta – ye ek process hai jo root cause address karta hai waqt ke saath. Thyroid-linked fatigue, stress-related exhaustion, aur post-illness weakness mein homeopathy particularly explored jaati hai. Research limited hai aur results individual hote hain. Qualified homeopath ke saath proper assessment ke baad hi treatment decide hoti hai.',
    },
    {
      _key: 'faq6',
      faqType: 'general',
      q: 'Thakaan mein kaunsa test karwana chahiye?',
      a: 'Doctor typically in tests se shuruat karta hai: CBC (Complete Blood Count) – anemia, infection check; TSH – thyroid function; Fasting Blood Sugar – diabetes; Liver Function Tests; Kidney Function Tests; Vitamin B12 aur Vitamin D; Ferritin (iron stores). In sab se zyada tar causes identify ho jaate hain. Agar ye sab normal hain lekin thakaan hai – doctor aur tests suggest kar sakta hai. Khud se test order mat karein – first step hai GP se milna jo decide kare kaunsa test relevant hai.',
    },
    {
      _key: 'faq7',
      faqType: 'general',
      q: 'Bacchon mein thakaan aur kamzori – kab serious hai?',
      a: 'Bacchon mein thoda thaka hona normal hai – active rahte hain. Lekin ye signs serious hain: subah school ke liye uthna bahut mushkil hona, games mein interest khatam hona, school performance girna, sar dard aur pet dard ke saath thakaan. Bacchon mein anemia (khoon ki kami) aur thyroid problems thakaan ke common causes hain. Agar bachcha 2 hafte se consistently thaka hua dikh raha hai ya activities avoid kar raha hai – paediatrician se milein. Blood test zaroori hai – khud se vitamins mat dene lagin.',
    },
    {
      _key: 'faq8',
      faqType: 'general',
      q: 'Pregnancy mein thakaan normal hai kya?',
      a: 'Pehle trimester mein extreme fatigue bahut common hai – hormonal changes (progesterone zyada) aur body ke naye demands ki wajah se. Ye generally 12-14 hafte ke baad thoda better hota hai. Lekin ye signs normal nahi hain: thakaan ke saath breathlessness, dil ki dhadkan tez, haath pair pale – ye anemia ka sign ho sakta hai jo pregnancy mein common hai. Pregnancy mein iron ki zarurat zyada hoti hai. Iron deficiency anemia aur thakaan saath hone pe doctor ko zaroor batao – supplement adjust ho sakta hai. Homeopathy pregnancy mein safe complementary option hai – lekin sirf doctor ke guidance se.',
    },
    {
      _key: 'faq9',
      faqType: 'general',
      q: 'Garmi mein thakaan zyada kyun hoti hai – India mein?',
      a: 'India ke garm mausam mein thakaan ke do main reasons hain. Pehla: sweating se paani aur electrolytes (sodium, potassium) dono nikalta hai – dehydration fatigue ka fastest cause hai. Doosra: garm temperature mein body ko khud ko cool karne mein energy lagani padti hai – baaki kamon ke liye kam energy bachti hai. Solution: garmi mein paani peena double karo – sirf pyaas lagane pe nahi, schedule se. Coconut water ya nimbu paani electrolytes replace karta hai. Dhoop mein dopahar 12-4 baje kaam avoid karo jitna ho sake.',
    },
    {
      _key: 'faq10',
      faqType: 'general',
      q: 'Baar baar thakaan kyun aati hai – theek hone ke baad phir shuru ho jaati hai?',
      a: 'Baar baar aane wali thakaan ka matlab hai root cause address nahi hua. Common patterns: baar baar iron lena aur chhod dena – level theek hota hai phir gir jaata hai; thyroid medication sahi dose pe nahi; sleep apnea hai jo diagnose nahi hua; chronic stress aur anxiety jo ongoing hai. "Baar baar fatigue" ek pattern hai – is pattern ka trigger dhundho. Diary rakhein: kab zyada thakaan hoti hai, kya kha rahe the, stress kaisa tha, neend kaisi thi. 2-3 hafte mein pattern clear hota hai. Ye information doctor ko accurate diagnosis mein help karti hai.',
    },
    {
      _key: 'faq11',
      faqType: 'homeopathy',
      q: 'Thakaan se hamesha ke liye kaise chutkara milega?',
      a: '"Permanent cure" ka vaada koi bhi system honestly nahi kar sakta. Jo realistic hai: sahi cause identify ho to thakaan bahut kam ho jaati hai. Anemia treat ho to energy level 4-6 hafte mein significantly better hoti hai. Thyroid sahi dose pe ho to 2-3 mahine mein fark aata hai. Lifestyle – neend, nutrition, stress – sahi ho to chronic fatigue ka ek bada hissa practically khatam ho jaata hai. Homeopathy chronic cases mein underlying pattern address karta hai – log report karte hain ki energy level aur overall wellbeing dono better hoti hai. Results individual hote hain – aur qualified homeopath ke saath assessment zaroori hai.',
    },
    {
      _key: 'faq12',
      faqType: 'general',
      q: 'Khana khane ke baad thakaan kyun hoti hai?',
      a: 'Khane ke baad thakaan – "post-meal fatigue" – India mein bahut common complaint hai. Iske reasons: zyada khaana – body sab energy digestion mein lagati hai; high-carb meal – blood sugar spike aur phir crash; diabetes ya pre-diabetes – glucose properly process nahi hota; food sensitivity – kuch logon ko specific foods se fatigue hoti hai. Agar consistently har khane ke baad bahut zyada thakaan ho – blood sugar test zaroor karwao. Solution: chhoti meals zyada baar khaao; refined carbs kam karo; khane ke baad 10-15 minute halki walk karo – blood sugar stable rehti hai.',
    },
  ],

  relatedSymptoms: [
    {
      _key: 'rs1',
      title: 'Insomnia (Neend Na Aana)',
      hindiName: 'Neend Na Aana',
      slug: 'insomnia',
    },
    {
      _key: 'rs2',
      title: 'Headache (Sar Dard)',
      hindiName: 'Sar Dard',
      slug: 'headache',
    },
    {
      _key: 'rs3',
      title: 'Depression Symptoms',
      hindiName: 'Udaasi Ke Lakshan',
      slug: 'depression-symptoms',
    },
    {
      _key: 'rs4',
      title: 'Thyroid Symptoms',
      hindiName: 'Thyroid Ke Lakshan',
      slug: 'thyroid-symptoms',
    },
  ],

  sources: [
    {
      _key: 'src1',
      name: 'WHO Global Health Observatory – Fatigue and Chronic Conditions | 2023',
    },
    {
      _key: 'src2',
      name: 'Mayo Clinic – Fatigue: Causes & When to See a Doctor | 2024',
    },
    {
      _key: 'src3',
      name: 'NCBI / PubMed – Approach to the Patient with Fatigue | 2021',
    },
    {
      _key: 'src4',
      name: 'NHS UK – Tiredness and Fatigue: Causes and Treatment | 2023',
    },
  ],
}

async function seed() {
  console.log('🌱 Seeding Weakness & Fatigue symptom page...')
  await client.createOrReplace(symptom)
  console.log('✅ Symptom seeded — homeopedia.in/symptoms/weakness-fatigue')
}

seed().catch(console.error)
