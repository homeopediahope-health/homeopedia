import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
  useCdn: false,
})

const doc = {
  _id: 'disease-fatty-liver',
  _type: 'disease',
  title: 'Fatty Liver Disease / NAFLD',
  slug: { _type: 'slug', current: 'fatty-liver' },
  category: 'Digestive',
  hindiName: 'Fatty Liver / Jigar mein Charbi',
  seoTitle: 'Fatty Liver Treatment in Hindi | Diet, Causes & Homeopathy',
  seoDescription: 'Fatty Liver ke causes, grades, diet chart aur homeopathic treatment – simple Hinglish mein. Verified info, doctor-reviewed. NAFLD se kaise bachein.',
  overview: 'Fatty liver matlab aapke jigar (liver) mein zaroorat se zyada charbi (fat) jama ho gayi hai. Normal liver mein thodi fat hoti hai – lekin jab ye 5% se zyada ho jaaye, toh use fatty liver kehte hain. Ye aaj India mein har 4 mein se 1 adult ko hoti hai – aur zyada tar logon ko pata hi nahi hota kyunki shuruat mein koi dard ya symptom nahi hota. Sahi diet, lifestyle aur treatment se ye condition reverse bhi ho sakti hai – especially early stages mein.',
  types: [
    {
      _key: 'type1',
      name: 'Non-Alcoholic Fatty Liver Disease (NAFLD)',
      description: 'Ye sabse common type hai India mein. Sharab nahi pine wale logon mein hoti hai. Aksar diabetes, obesity, ya high cholesterol ke saath aati hai.',
    },
    {
      _key: 'type2',
      name: 'Alcoholic Fatty Liver Disease (AFLD)',
      description: 'Zyada alcohol pine ki wajah se hoti hai. Alcohol band karne se aksar improve hoti hai.',
    },
    {
      _key: 'type3',
      name: 'Grade 1 – Mild NAFLD',
      description: 'Liver mein fat ki shuruat – minimal inflammation. Bahut kum ya koi symptom nahi. Fully reversible hai sahi lifestyle se. Homeopathy + diet: best results is stage mein.',
    },
    {
      _key: 'type4',
      name: 'Grade 2 – Moderate NAFLD',
      description: 'Fat zyada ho gayi, halki inflammation bhi shuru. Fatigue, bloating, RUQ discomfort feel ho sakta hai. Treatment zaroori – lifestyle + medicine dono.',
    },
    {
      _key: 'type5',
      name: 'Grade 3 – Severe / NASH',
      description: 'Non-Alcoholic Steatohepatitis – liver cells damage honi shuru, inflammation active hai. Symptoms clearly feel hone lagte hain. Conventional + complementary treatment dono important. Homeopathy saath mein supportive role mein useful.',
    },
    {
      _key: 'type6',
      name: 'Grade 4 – Cirrhosis (Advanced)',
      description: 'Liver permanently scarred hone lagi. Specialist hepatologist zaroori. Homeopathy: palliative/supportive role mein, primary nahi.',
    },
  ],
  causes: [
    'Unhealthy diet – maida, refined sugar, fried food, processed food ki zyada quantity',
    'Sedentary lifestyle – physical activity practically nil',
    'Obesity ya overweight – abdominal fat especially dangerous hai liver ke liye',
    'Type 2 Diabetes ya insulin resistance',
    'High triglycerides / High LDL cholesterol',
    'Thyroid disorders (hypothyroidism se fat metabolism slow hoti hai)',
    'Alcohol consumption – even moderate, kuch logon mein trigger karta hai',
    'Certain medications – steroids, methotrexate, tamoxifen',
    'Rapid weight loss ya crash dieting (ye bhi liver pe stress dalta hai)',
  ],
  symptoms: [
    'Hamesha thakaan rehna – kaam ke baad bhi rest se theek na hona (Silent Stage)',
    'Pet ke upar daayein taraf halka bhaari pan ya discomfort (Silent Stage)',
    'Subah uthke bhi fresh na rehna (Silent Stage)',
    'Bina reason ke wajan badh jaana (Silent Stage)',
    'Bloating aur gas – khaane ke baad pet bhaari lagta hai (Moderate Stage)',
    'Appetite mein kami – khaane ka mann nahi karta (Moderate Stage)',
    'Nausea – especially fatty food ke baad (Moderate Stage)',
    'Skin ya aankhon mein halki peelaahat – jaundice ka early sign (Moderate Stage)',
    'Paon ya tobbon mein sujan – water retention (Advanced Stage)',
    'Aankhein ya skin clearly yellow hona (Advanced Stage)',
    'Dark urine – chaay jaise rang ka peshab (Advanced Stage)',
    'Severe abdominal pain (Advanced Stage)',
    'Confusion ya mental fog extreme level par (Advanced Stage)',
  ],
  homeopathyExplained: 'Homeopathy mein fatty liver ka treatment sirf liver ko target nahi karta – poore metabolism ko address kiya jaata hai. Aapka khaan-paan, stress pattern, digestion, sleep quality, aur body ka fat handle karne ka tarika – ye sab milke problem banate hain, aur homeopathy mein ye sab milke treat hote hain. Chelidonium, Carduus Marianus, Lycopodium jaisi medicines liver cells ki functioning improve karne mein, fat metabolism normalize karne mein aur inflammation reduce karne mein madadgar hain – especially Grade 1 aur Grade 2 mein where liver is still reversible.',
  ccrhImprovementRate: 'CCRH-affiliated studies mein NAFLD patients ke liver enzyme levels (SGPT/SGOT) treatment group mein significant reduction show kiya – placebo group ke comparison mein improvement clinically meaningful tha.',
  ccrhAvgTreatmentPeriod: '3–6 months (Grade 1-2 ke liye)',
  ccrhCitation: 'CCRH, New Delhi – Clinical Research Studies on Hepatic Conditions | 2018–2022',
  ccrhKeyFindings: [
    'Homeopathic treatment group mein SGPT levels mein meaningful reduction – placebo group mein minimal change',
    'Liver size normalization (ultrasound-confirmed) treatment group mein zyada common tha',
    'Patients ne fatigue aur bloating mein subjective improvement report kiya – 8-12 weeks mein',
  ],
  medicines: [
    {
      _key: 'med1',
      name: 'Chelidonium Majus',
      bestFor: 'Jigar ki daayein taraf bhaari pan feel karne wale, hamesha thake hue, jaundice tendency wale, RUQ discomfort wale patients',
      keyIndications: ['Chelidonium directly liver aur bile duct pe kaam karta hai. Bile flow improve karta hai, liver congestion kam karta hai aur SGPT/SGOT reduce karne mein madadgar maana jaata hai.'],
    },
    {
      _key: 'med2',
      name: 'Carduus Marianus (Milk Thistle)',
      bestFor: 'Jo log alcohol ya junk food ki wajah se fatty liver develop kar chuke hain, ya jinhein liver ka bhaari pan bloating ke saath rehta hai',
      keyIndications: ['Silymarin-like action – liver cells ko protect karta hai aur unki regeneration support karta hai. Toxin exposure ke baad liver recovery mein ek strong classical choice.'],
    },
    {
      _key: 'med3',
      name: 'Lycopodium Clavatum',
      bestFor: 'Khaane ke baad pet phoolne wale, gas ki problem, right side pe discomfort, stress aur anxiety se liver symptoms worse hone wale patients',
      keyIndications: ['Lycopodium liver + digestive system dono ka saath mein classical medicine hai. Jab fatty liver ke saath IBS-type symptoms aur anxiety bhi ho – ye type bahut closely match karta hai.'],
    },
    {
      _key: 'med4',
      name: 'Nux Vomica',
      bestFor: 'Office-goers jinki sedentary lifestyle hai, jo zyada chai/coffee/spicy food khaate hain, jo stress mein hote hain aur jinhein subah nausea feel hoti hai',
      keyIndications: ['Modern urban lifestyle se bani fatty liver ke liye ek bahut commonly matching medicine. Liver ki functional sluggishness aur toxic overload mein classical choice.'],
    },
    {
      _key: 'med5',
      name: 'Phosphorus',
      bestFor: 'Fatty liver jo aage badh ke inflammation ya early fibrosis ki taraf ja raha ho, liver enlargement wale cases, saath mein weakness aur weight loss bhi ho',
      keyIndications: ['Advanced liver pathology mein phosphorus ek important liver-specific medicine hai – cells ki degeneration slow karne mein aur overall liver function support karne mein madadgar.'],
    },
  ],
  dietInclude: [
    {
      _key: 'inc1',
      category: 'Recommended Foods',
      emoji: '🌿',
      items: [
      'Karela (Bitter Gourd) – liver enzymes normalize karne mein scientifically proven, bile production stimulate karta hai',
      'Lauki (Bottle Gourd) – light, alkaline, liver cooling vegetable – fatty liver mein classic choice',
      'Palak, Methi, Saag – chlorophyll-rich greens liver detox support karte hain',
      'Broccoli, Gobhi (steamed) – sulforaphane liver fat reduce karne mein helpful',
      'Oats – beta-glucan fiber liver fat reduce karta hai, cholesterol bhi',
      'Bajra, Jowar roti – refined wheat se better, glycemic index low',
      'Moong dal (yellow/green) – easily digestible, protein + fiber balanced',
      'Rajma, Chana (boiled, not fried) – plant protein jo liver pe load nahi dalta',
      'Akhrot (Walnuts) – omega-3 fatty acids liver inflammation reduce karte hain',
      'Flaxseeds (1 tbsp daily) – ALA omega-3 source, liver ke liye beneficial',
      'Olive oil / Sarson ka tel (cold-pressed) – healthy fat jo liver fat accumulation reduce karta hai',
      'Amla (Indian Gooseberry) – Vitamin C + antioxidants, liver cells protect karte hain',
      'Haldi wala doodh – curcumin liver inflammation kum karta hai',
      'Dalchini wali chai – insulin sensitivity improve karta hai',
      'Nimboo pani (no sugar) – liver flush ka natural support',
    ],
    },
  ],

  dietAvoid: [
    {
      _key: 'avd1',
      category: 'Foods to Avoid',
      emoji: '🚫',
      items: [
      'Maida (white flour) – directly liver fat mein convert hota hai – naan, puri, samosa, bread sab',
      'Refined sugar, chocolates, mithai – fructose liver mein directly fat ke roop mein store hoti hai',
      'Cold drinks, packaged juices – liquid sugar ka worst form hai liver ke liye',
      'Biscuits, cookies, namkeen (packaged) – trans fat + refined carbs = liver enemy',
      'Fried food – samosa, pakoda, chips, french fries – saturated + trans fat overload',
      'Dalda/Vanaspati (hydrogenated oils) – liver cells ko directly damage karta hai',
      'Red meat – high saturated fat, liver pe zyada load',
      'Processed meats (sausage, salami) – preservatives + fat ka deadly combo',
      'Alcohol – bilkul band karna zaroori hai – even beer/wine',
      'Packaged food with preservatives – liver ko detox karne mein zyada kaam padta hai',
      'Excess salt – water retention badhata hai, liver stress add karta hai',
    ],
    },
  ],
  dos: [
    'Subah uthte hi gunguna nimboo pani peeyein — liver detox naturally activate hota hai',
    'Roz 30-45 min brisk walk ya moderate exercise karein — akeli walking bhi liver fat reduce karti hai',
    'Raat ka khana 7-8 baje tak finish karein — late eating liver pe fat accumulation badhata hai',
    'Kapalbhati 10-15 min daily karein — abdominal organs stimulate hote hain, fat metabolism boost hota hai',
    'Amla ya amla juice daily lein — Vitamin C + antioxidants liver cells protect karte hain',
    'Khana choti plates mein aur slow chaba ke khaayein — portion control aur digestion dono improve hote hain',
    'Har 3 mahine mein LFT test aur har 6 mahine mein ultrasound karwaayein — actual progress track karo',
    'Thyroid aur blood sugar control mein rakhein — ye dono fatty liver ke drivers hain',
  ],

  donts: [
    'Alcohol bilkul band karein — alcoholic ya non-alcoholic fatty liver dono mein zero tolerance',
    'Maida, packaged biscuits, cold drinks aur mithai avoid karein — ye liver mein fat directly store karte hain',
    'Dalda/Vanaspati (hydrogenated oil) mein bana khana band karein — trans fat liver cells damage karta hai',
    'Crash diet ya rapid weight loss mat karein — weekly 1 kg se zyada weight loss NASH trigger kar sakta hai',
    'Raat 10 baje ke baad heavy khana mat khaao — liver ko repair ka time chahiye, late meal se kaam badh jaata hai',
    'Self-medicate mat karein "liver tonics" se — bina doctor advice ke market products se nuksaan ho sakta hai',
    'Fried food aur processed meats avoid karein — saturated fat + preservatives = liver enemy combo',
    'Thakaan ya koi symptom feel ho to ignore mat karein — regular monitoring essential hai Grade 2+ mein',
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Fatty liver kya hota hai aur ye kitna dangerous hai?',
      answer: 'Fatty liver matlab aapke liver mein normal se zyada fat jama ho gayi hai – jab ye 5% se zyada ho. Ye India ki sabse common liver condition hai, har 4 mein se 1 adult ko hoti hai. Dangerous kab hoti hai – jab treat na kiya jaaye. Grade 1 aur Grade 2 mein ye almost completely reversible hai sahi lifestyle aur treatment se. Grade 3-4 mein complications serious ho sakte hain. Isliye early detection aur action lena hi sabse bada weapon hai.',
    },
    {
      _key: 'faq2',
      question: 'Fatty liver grade 1, 2, aur 3 mein kya fark hota hai?',
      answer: 'Grade 1 (Mild): Liver mein sirf thodi fat hai – koi symptoms nahi, fully reversible. Grade 2 (Moderate): Fat badh gayi, thodi inflammation bhi – thakaan, bloating feel hoti hai, treatment se theek hota hai. Grade 3 (Severe/NASH): Liver cells damage hone lagte hain – serious treatment zaroori. Grade 4 (Cirrhosis): Permanent scarring – specialist ki zaroorat. Ultrasound report mein jo grade aaye, usi ke hisaab se treatment plan banta hai. Grade 1-2 mein doctor se milein aur aggressively lifestyle change karein – ye stages sabse responsive hain.',
    },
    {
      _key: 'faq3',
      question: 'Fatty liver ke symptoms kya hote hain? Kaise pata chalega?',
      answer: 'Shuruat mein fatty liver mein koi symptoms nahi hote – yahi iska sabse bada trap hai. Zyada tar logon ko routine checkup ya ultrasound mein pata chalta hai. Jo symptoms aate hain wo hain: pet ke upar daayein taraf bhaari pan ya discomfort, hamesha thakaan rehna, khaane ke baad bloating, aur wajan ka bina reason badhna. Agar skin ya aankhein yellow hone lagein, paon mein sujan aaye ya urine dark ho – ye advanced signs hain, turant doctor se milein. Ek simple blood test (LFT) aur ultrasound se diagnosis ho jaata hai.',
    },
    {
      _key: 'faq4',
      question: 'Fatty liver mein kya khana chahiye aur kya nahi khana chahiye?',
      answer: 'Kya khayein: Karela, lauki, palak, methi, oats, moong dal, akhrot, amla, haldi – ye sab liver ki healing mein directly help karte hain. Kya na khayein: Maida, refined sugar, cold drinks, fried food, packaged biscuits/namkeen, alcohol – ye sab liver mein fat badhate hain. Diet mein sabse badi galti log karte hain – white rice aur roti to theek hai kehke refined carbs khaate rehte hain. Actually total carb load aur sugar intake kam karna sabse zyada fark dalta hai. Ek simple rule: Jo bhi packet mein aaye ya deep fry ho – avoid karo.',
    },
    {
      _key: 'faq5',
      question: 'Fatty liver kya permanently theek ho sakta hai?',
      answer: 'Grade 1 aur Grade 2 fatty liver completely reverse ho sakti hai – ye medically proven hai. Sahi diet, regular exercise aur treatment ke combination se 3-6 months mein ultrasound pe fat khatam ho sakta hai aur liver enzymes normal ho sakte hain. Grade 3 (NASH) mein full reversal harder hota hai lekin progression rokna aur improvement possible hai. Grade 4 (Cirrhosis) mein permanent damage hoti hai – wahan reversal nahi hoti, lekin quality of life improve ki ja sakti hai. Summary: Jitna pehle treat karein, utna better outcome – derai mat karo.',
    },
    {
      _key: 'faq6',
      question: 'Fatty liver mein kaunsi exercise karni chahiye?',
      answer: 'Moderate aerobic exercise – roz 30-45 minute brisk walking – ye akela fatty liver mein sabse effective lifestyle change maana jaata hai. Studies mein 12 weeks ki regular walking se liver fat mein measurable reduction dekhi gayi. Yoga bhi bahut effective hai – specially Kapalbhati, Ardha Matsyendrasana (spine twist), aur Pawanmuktasana liver function improve karte hain. Heavy weight lifting avoid karein starting mein – pehle cardio foundation banao. Ek important baat: Exercise se weight na bhi ghate, phir bhi liver fat kam hoti hai – isliye weighing scale se zyada exercise consistency matter karta hai.',
    },
    {
      _key: 'faq7',
      question: 'Kya homeopathy fatty liver mein kaam karta hai?',
      answer: 'Haan – homeopathy fatty liver mein, especially Grade 1 aur Grade 2 mein, ek effective approach hai. Chelidonium, Carduus Marianus (Milk Thistle), Lycopodium jaisi medicines liver enzymes (SGPT/SGOT) normalize karne mein aur liver congestion reduce karne mein clinically useful hain. CCRH-affiliated studies mein homeopathic treatment group mein liver enzyme levels mein meaningful reduction dekhi gayi – placebo group ke comparison mein. Homeopathy ka sabse bada fayda ye hai ki ye sirf liver nahi – saath mein digestion, metabolism, stress aur insulin resistance bhi address karta hai jo fatty liver ke actual feeders hain. Sahi diet ke saath lena zaroori hai – sirf medicine se kaam nahi hoga.',
    },
    {
      _key: 'faq8',
      question: 'Fatty liver ki homeopathic medicine kaun si hai?',
      answer: 'Fatty liver mein commonly used homeopathic medicines hain: Chelidonium (liver heaviness, bile issues ke liye), Carduus Marianus / Milk Thistle (liver protection aur regeneration), Lycopodium (gas, bloating, liver ke saath digestive issues), Nux Vomica (sedentary lifestyle, stress, junk food wali fatty liver), aur Phosphorus (advanced stages ya liver enlargement mein). Lekin ye zaroor note karein – kaun si medicine aapke liye sahi hai ye sirf ek qualified homoeopath decide kar sakta hai ek detailed case history ke baad. Same disease mein alag-alag patients ko alag medicines milti hain – ye homeopathy ka USP hai.',
    },
    {
      _key: 'faq9',
      question: 'Fatty liver mein kya chai peena theek hai?',
      answer: 'Haan – green tea ya dalchini chai (cinnamon tea) fatty liver mein faydemand hai. Green tea ke antioxidants liver fat reduce karne mein help karte hain – studies mein positive results hain. Dalchini insulin sensitivity improve karta hai. Milk tea – agar sugar kam hai aur regular quantity mein hai – okay hai. Lekin kya avoid karein: 4-5 cup milk tea daily (especially with full sugar), market chai wala, aur tea ke saath biscuits/namkeen combo – ye zyada harm karta hai chai se. Best morning drink: Warm lemon water ya amla juice pehle, chai baad mein.',
    },
    {
      _key: 'faq10',
      question: 'Fatty liver mein kitne time mein theek hota hai?',
      answer: 'Grade 1 fatty liver: 2-3 months mein significant improvement possible hai agar diet aur exercise strict ho. Grade 2: 3-6 months proper treatment se liver enzymes normal aane lagte hain, fat reduce hoti hai. Grade 3 (NASH): 6-12 months ya zyada, consistent treatment ke saath. Har 3 mahine mein LFT test aur har 6 mahine mein ultrasound karwaana important hai – actual progress dikhti hai. Log jaldi discouraged ho jaate hain – fatty liver years mein bana, kuch mahine consistently kaam karoge toh result aayega. Ek LFT report mein SGPT normal aa gaya – iska matlab ye nahi ki treatment band kar do.',
    },
    {
      _key: 'faq11',
      question: 'Fatty liver mein weight loss zaroor karna chahiye?',
      answer: 'Haan – aur ye sabse powerful treatment hai. Studies clearly show karti hain ki sirf 5-10% body weight ka loss bhi liver fat mein dramatic improvement deta hai. Matlab agar aap 80 kg hain toh sirf 4-8 kg kam karna bhi liver ko heal kar sakta hai. Lekin – CRASH DIET mat karo. Rapid weight loss (weekly 1 kg se zyada) actually liver mein inflammation badhata hai aur NASH trigger kar sakta hai. Slow aur steady – weekly 300-500 gram – ye liver-safe rate hai. Regular exercise + controlled diet = sustainable weight loss = healthy liver.',
    },
    {
      _key: 'faq12',
      question: 'Kya fatty liver mein alcohol bilkul band karna padta hai?',
      answer: 'Alcoholic fatty liver (AFLD) mein – absolutely haan, no compromise. Alcohol bilkul band. Non-alcoholic fatty liver (NAFLD) mein bhi – alcohol strongly avoid karna chahiye. Kyun? Already compromised liver pe alcohol ka extra toxic load serious inflammation trigger kar sakta hai, bhale hi aap "thoda" piyein. "Occasional drinking" bhi already fatty liver ko NASH ki taraf push kar sakta hai. Simple rule: Fatty liver diagnosis aane ke baad alcohol = zero tolerance.',
    },
    {
      _key: 'faq13',
      question: 'Kya fatty liver se liver cancer hota hai?',
      answer: 'Directly NAFLD se cancer ka risk bahut kam hai – lekin agar fatty liver ka NASH mein aur phir cirrhosis mein conversion ho jaaye, toh cirrhosis se liver cancer ka risk kuch percent hota hai. Ye progressive journey hai – NAFLD → NASH → Cirrhosis → possible cancer – aur har step pe rok sakte ho is journey ko. Isliye early stage mein serious ho jaana is liye important hai. Zyada tar log jo Grade 1-2 mein seriously treat kar lete hain woh kabhi NASH tak nahi pahunchte. Toh fear nahi – action lo.',
    },
    {
      _key: 'faq14',
      question: 'Fatty liver mein kaunse tests karaane chahiye?',
      answer: 'Basic tests: LFT (Liver Function Test) – SGPT, SGOT, Bilirubin, Alkaline Phosphatase dekhe jaate hain. Ultrasound abdomen – fat ka grade aur liver size dikhata hai. FBS/HbA1c – diabetes check. Lipid profile – cholesterol aur triglycerides. Advanced (agar Grade 2+ hai): FibroScan – liver fibrosis/stiffness measure karta hai bina biopsy ke. Repeat testing: LFT har 3 month, Ultrasound har 6 month – jab tak normal na aaye.',
    },
    {
      _key: 'faq15',
      question: 'Fatty liver aur PCOD ka kya connection hai?',
      answer: 'Bahut strong connection hai. PCOD wali mahilaon mein insulin resistance hoti hai – aur insulin resistance fatty liver ka ek major driver hai. India mein PCOD-positive women mein fatty liver prevalence much higher hai general population se. Dono conditions ek doosre ko worse karte hain – PCOD se fatty liver badhti hai, fatty liver se insulin resistance aur badhti hai. Treatment mein dono ko saath address karna zaroori hai – sirf ek treat karne se dusri theek nahi hogi. Homeopathy mein dono ko ek saath treat karna possible hai kyunki individualized approach liya jaata hai.',
    },
    {
      _key: 'faq16',
      question: 'Kya fatty liver mein ghee aur tel khana chodna padta hai?',
      answer: 'Nahi – bilkul band nahi karna. Ghee ko completely band karna ek common galat belief hai. Limited ghee (1-2 tsp daily) okay hai – unhealthy fats nahi hain. Kya actually avoid karna hai: Dalda/Vanaspati (hydrogenated oils), deep frying ka tel, packaged food mein trans fats. Healthy fats zaroor khaayein: Olive oil ya cold-pressed mustard oil cooking mein, walnuts, flaxseeds, almonds – ye omega-3 se bhare hain aur liver fat actually kam karte hain. Fat ka type matter karta hai, not fat ki presence.',
    },
    {
      _key: 'faq17',
      question: 'Bacchon mein fatty liver ho sakta hai kya?',
      answer: 'Haan – aur ye India mein increasingly common ho raha hai, specially overweight bacchon mein. Junk food, cold drinks, screen time, aur exercise nahi – ye combination bacchon mein bhi NAFLD create kar sakta hai. Agar bachche ka wajan zyada hai, hamesha thakaan rehti hai, ya routine test mein liver enzymes high aayein – paediatrician se milein. Bacchon mein Grade 1-2 lifestyle change se bahut quickly reverse hoti hai – unka metabolism adults se zyada responsive hota hai.',
    },
    {
      _key: 'faq18',
      question: 'Fatty liver ka gharelu ilaj kya hai?',
      answer: 'Kuch effective gharelu approaches hain: Subah gunguna nimboo pani, amla juice daily, karela ki sabzi hafte mein 2-3 baar, haldi wala doodh raat ko. Giloy kadha ya churn hafte mein 2-3 baar liver ke liye traditional tonic hai. Roz subah 30-45 min brisk walk. Raat 8 baje tak khana band. Ye sab Grade 1 mein effective supporting measures hain. Lekin ye sirf "support" hain – Grade 2+ mein doctor-guided treatment ke saath karo, replace nahi. Aur market mein jo "liver detox syrup" ya "liver tonic" milte hain – bina doctor advice ke mat lo, kuch mein harmful ingredients hoti hain.',
    },
    {
      _key: 'faq19',
      question: 'Fatty liver mein papaya khana chahiye ya nahi?',
      answer: 'Haan – papaya fatty liver mein ek excellent fruit hai. Papain enzyme digestion improve karta hai, liver ko toxins process karne mein help karta hai aur fiber-rich hone se fat metabolism support karta hai. Subah khali pet papaya especially beneficial hai. Kaun se fruits avoid karein: Mango aur banana high sugar hone ki wajah se limited rakhein (poori tarah band nahi, lekin ek din mein 1 serving se zyada nahi). Fruits jaise apple, pear, amla, guava – freely kha sakte hain.',
    },
    {
      _key: 'faq20',
      question: 'Fatty liver mein sugar bilkul band karna padta hai?',
      answer: 'Refined/added sugar haan – dramatically reduce karna chahiye, ideally near-zero. Khaas kar fructose (jo cold drinks, packaged juices aur processed sweets mein hoti hai) – ye directly liver mein fat ke roop mein store hoti hai. Natural sugar (fruits mein fructose) – limited quantity mein okay. Jaggery (gur) – refined sugar se better hai kyunki minerals hain, lekin woh bhi limited. Diabetes ya insulin resistance ke saath fatty liver hai toh – sugar control aur strict honi chahiye. Meetha chhod nahi sakte? Cinnamon, cardamom aur small quantity jaggery se healthy alternatives banao.',
    },
    {
      _key: 'faq21',
      question: 'Fatty liver mein kaun sa yoga karna chahiye?',
      answer: 'Kuch yoga asanas fatty liver ke liye specifically helpful hain: Kapalbhati Pranayama (10-15 min daily) – liver aur abdominal area stimulate karta hai, fat metabolism boost. Ardha Matsyendrasana (Half Spinal Twist) – liver aur spleen directly compress-release hote hain, detox mein help. Pawanmuktasana (Wind Relieving Pose) – bloating aur gas relief, digestive fire improve. Bhujangasana (Cobra Pose) – abdominal organs ko stimulate karta hai. Setu Bandhasana – overall metabolism boost. Kapalbhati se shuruat karo – sirf 10 minute daily, 3 months mein fark mehsoos hoga. Note: GERD ya hernia hai toh kapalbhati se pehle doctor se poochein.',
    },
    {
      _key: 'faq22',
      question: 'Fatty liver mein thyroid ka kya role hai?',
      answer: 'Bahut important connection hai. Hypothyroidism (low thyroid) mein metabolism slow hota hai, fat burning kum hoti hai, aur liver mein fat accumulation zyada hota hai. India mein hypothyroidism aur fatty liver ka combination bahut common hai – specially 35+ age ki mahilaon mein. Agar fatty liver ke saath weight gain, thakaan, baal girna, ya constipation bhi ho – thyroid test zaroori hai (TSH, T3, T4). Thyroid theek hone par fatty liver bhi improve hoti hai. Treatment plan mein dono conditions simultaneously address karna chahiye.',
    },
    {
      _key: 'faq23',
      question: 'Kya homeopathy aur allopathy saath mein le sakte hain fatty liver mein?',
      answer: 'Haan – bilkul le sakte hain. Homeopathy aur conventional treatment parallel mein kaam kar sakte hain – ye complementary approaches hain, opponents nahi. Agar doctor ne koi liver medication ya diabetes/cholesterol ki dawa di hai – band mat karo. Homeopathic doctor ko batao ki aap kya le rahe ho – qualified homoeopath accordingly treatment plan karega. Homeopathy ka goal hai ki over time conventional medicines ki dependency reduce ho sake – lekin ye gradual process hai aur qualified supervision mein hona chahiye.',
    },
    {
      _key: 'faq24',
      question: 'Fatty liver mein kaunsa fruit khana chahiye aur kaunsa nahi?',
      answer: 'Kha sakte ho: Papaya, apple, pear, amla, guava, jamun, orange, mosambi – ye sab high fiber, antioxidant-rich aur low-glycemic hain. Limit karo: Banana aur mango – natural sugar zyada hai, din mein ek serving se zyada nahi. Avoid karo: Packaged fruit juices (fibre hati hai, sirf sugar bachti hai), canned/tinned fruits (syrup mein), aur too many high-sugar fruits ek saath. Best rule: Sabut fruit khaao, juice mat piyo – fiber liver ke liye zaroori hai.',
    },
    {
      _key: 'faq25',
      question: 'Fatty liver ka pata kaise chalta hai – kya koi test hai?',
      answer: 'Diagnosis do tarike se hoti hai: Ultrasound Abdomen – sabse common aur reliable test. Fat ki grade bhi batata hai. LFT (Liver Function Test) – SGPT aur SGOT elevated hona liver stress ka sign hai, lekin normal LFT ka matlab ye nahi ki liver theek hai (early fatty liver mein LFT normal bhi ho sakta hai). FibroScan – advanced, non-invasive test jo liver stiffness batata hai – fibrosis check ke liye. Annual health checkup mein abdominal ultrasound include karwana chahiye – especially agar overweight hain, diabetes hai ya cholesterol high hai. Early detection = early reversal.',
    },
  ],
  sources: [
    { _key: 's1', name: 'CCRH (Central Council for Research in Homoeopathy) | Clinical Studies on Hepatic', url: 'ccrhindia.nic.in', year: '2024' },
    { _key: 's2', name: 'World Health Organization – Global Hepatitis Report | 2022 | who.int', url: 'ccrhindia.nic.in', year: '2024' },
    { _key: 's3', name: 'Lancet GBD Study – India Liver Disease Burden | 2023', url: 'ccrhindia.nic.in', year: '2024' },
    { _key: 's4', name: 'American Liver Foundation – NAFLD Information | liverfoundation.org', url: 'ccrhindia.nic.in', year: '2024' },
    { _key: 's5', name: 'PubMed – ', url: 'ccrhindia.nic.in', year: '2024' },
    { _key: 's6', name: ' | 2021', url: 'ccrhindia.nic.in', year: '2024' },
    { _key: 's7', name: 'Indian Journal of Gastroenterology – NAFLD Prevalence India | 2022', url: 'ccrhindia.nic.in', year: '2024' },
  ],
  quickFacts: [
    'NAFLD affects approximately 25% of Indian adults – India mein sabse underdiagnosed liver condition',
    'Har 4 mein se 1 adult ko fatty liver hai – urban areas mein ratio aur zyada',
    'Grade 1: 2-3 months | Grade 2: 4-6 months | Strict lifestyle + treatment se reversal possible',
  ],
  doctorNote: 'Mere clinic mein fatty liver ke jo patients seriously diet + homeopathy combination pe chale hain – unke 3-month LFT mein SGPT normalization bahut commonly dekha hai. Jo cheez most patients miss karte hain: raat ka khana late khaate hain aur sugar ka hidden intake (chai ke saath biscuits, shaam ka namkeen). In dono ko pehle theek karo – liver khud help karna shuru kar deta hai.',
  reviewDate: 'April 2026',
}

async function seed() {
  console.log('🌱 Seeding Fatty Liver...')
  const result = await client.createOrReplace(doc)
  console.log('✅ Fatty Liver created/updated:', result._id)
  console.log('🌐 Live at: https://homeopedia.in/diseases/fatty-liver')
}

seed().catch(console.error)
