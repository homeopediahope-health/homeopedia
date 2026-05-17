import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'symptom-dark-circles',
  _type: 'symptom',

  name: 'Dark Circles',
  hindiName: 'Aankhon Ke Neeche Kaala Rang / Kalapan',
  hinglishName: 'Dark Circles',
  slug: { _type: 'slug', current: 'dark-circles' },
  bodySystem: 'Skin',

  metaTitle: 'Dark Circles in Hindi — Karan, Ilaaj aur Homeopathy | Homeopedia',
  metaDescription: 'Aankhon ke neeche dark circles ke karan, severity aur ghar pe safe steps — simple Hinglish mein. Verified info, Dr. Shadab reviewed.',
  publishedAt: new Date('2026-05-17').toISOString(),

  whatIsThis: `Subah uthke aaina dekhte hain to aankhon ke neeche woh kaala, thaka hua rang — jo poori raat sone ke baad bhi nahi jaata. Dark circles sirf neend ki kami nahi hote — ye aankhon ke aaspaas ki skin ke neeche se blood vessels ya pigmentation show karne laga hai.

India mein ye ek bahut common complaint hai — especially 20-45 saal ki umar ke logon mein.

Ye page aapko 2 minute mein batayega: aapke dark circles kyun hain, serious hain ya nahi, aur kya karna chahiye.`,

  indiaContext: 'India mein dark circles ek bohot common cosmetic aur health concern hai — research suggests ki yeh har umar ke logon ko prabhavit karta hai, lekin working age adults (20-45 saal) mein sabse zyada dekha jaata hai, khaskar un logon mein jahan stress, anaemia, aur irregular sleep common hai.',
  indiaContextSource: 'WHO Global Health Observatory; NCBI — "Periorbital Hyperpigmentation" review',

  severityLevel1: [
    'Dark circles pehle se hain, pigment-based hain (brownish/bluish tint), koi naya change nahi',
    'Sirf thakaan ya neend ki kami ke baad aaye hain — aaram karne pe thoda better hote hain',
    'Koi dard, sujan, ya vision change nahi hai',
    'Aankhon ke aas paas skin normal lagti hai — sirf colour change hai',
  ],
  severityLevel2: [
    'Dark circles achanak zyada dark ho gaye hain — bina kisi apparent reason ke',
    'Saath mein thakaan, chakkar, ya saans phoolna bhi ho raha hai (anaemia ka signal)',
    'Aankhon ke neeche saath mein sujan (puffiness) bhi aa gayi hai jo roz rehti hai',
    'Skin dry, patchy ya itchy ho gayi hai aankhon ke aas paas',
  ],
  severityLevel3: [
    'Dark circles ke saath aankhon mein achanak dard ya vision blurry hona — turant doctor',
    'Face ka ek taraf sujna ya numbness — stroke ka sign ho sakta hai, turant hospital',
    'Aankhon ke aas paas skin mein achanak redness, warmth aur fever — infection ho sakta hai',
  ],

  timeline3Days: 'Achanak aaye dark circles aksar lifestyle trigger ka result hote hain — raat bhar jaagna, zyada screen time, ya koi stressful event. Body thaki hoti hai to aankhon ke aaspaas blood vessels dilate ho jaati hain jo dark colour create karti hai. Ek hafte rest, hydration, aur sleep schedule theek karke dekhein — agar better hote hain to concern nahi. Agar ek hafte mein koi farak nahi pada to Level 2 mein jaao.',
  timeline4Weeks: 'Agar dark circles kaafi waqt se hain ya consistently aate-jaate rehte hain, toh yeh aksar koi underlying pattern ka signal hai — anaemia, thyroid imbalance, stress, ya twacha ki kaisi aadat. Doctor se ek general checkup karwana helpful hoga. Sirf concealer se kaam nahi chalega — root cause samajhna zaroori hai. Agar har subah ye pehle se bada lagta hai to is hafte appointment lo.',
  timelineMonthPlus: 'Yeh chronic dark circles hain. Iska matlab hai koi systemic issue hai — anaemia, hormonal imbalance, ya genetic factor — jo properly address nahi hua. Doctor se milna zaroor karo aur ek blood test karwao (Hb, thyroid). Homeopathy is category mein sabse effective hai kyunki yahan root cause treatment ka time hota hai. Sirf cosmetic treatment se ye permanently nahi jaate.',

  lifestyleCauses: [
    {
      _key: 'lc1',
      causeName: 'Neend Ki Kami (Sleep Deprivation)',
      mechanism: 'Jab aap poori neend nahi lete, to body mein blood circulation slow ho jaata hai. Aankhon ke aaspaas ki skin body ki sabse patli skin hoti hai — yahaan ki blood vessels zyada visible hoti hain. Thakaan mein ye vessels dilate ho jaati hain aur neeche se dark purple-blue tint show karti hain. Neend mein fluid redistribution bhi hoti hai — na sone se fluid aankhon ke neeche ikattha ho jaata hai jo shadow create karta hai.',
      howToIdentify: 'Subah zyada dark hote hain, raat ko thodi neend ke baad. Jab achhi neend liya ho to thoda better lagte hain.',
    },
    {
      _key: 'lc2',
      causeName: 'Screen Time Aur Eye Strain',
      mechanism: 'Ghanton tak phone ya laptop dekhne se aankhon ke muscles strain hote hain aur blood vessels mein pressure badhta hai. Ye pressure aankhon ke aaspaas ki capillaries (choti blood vessels) mein blood pool karata hai — jo dark ring ki tarah dikhti hai.',
      howToIdentify: 'Kaam ke din mein zyada, weekends ya holidays mein thoda kam. Aankhon mein thakaan ya burning feel hoti hai.',
    },
    {
      _key: 'lc3',
      causeName: 'Dehydration (Paani Ki Kami)',
      mechanism: 'Jab body mein paani ki kami hoti hai to skin shrink karti hai — khaskar aankhon ke neeche ki patli skin. Yahan ki skin zyada sunken dikhne lagti hai jo dark hollow create karta hai. Ye vascular darkness nahi hai — structural shadow hai.',
      howToIdentify: 'Dark circles ke saath skin dry lagti hai, muh mein khushki rehti hai, ya peshab ka rang gahre peele hota hai.',
    },
    {
      _key: 'lc4',
      causeName: 'Sun Exposure Aur Pigmentation',
      mechanism: 'Baar baar UV rays ke exposure se aankhon ke neeche ki skin mein melanin (pigment) zyada banna shuru ho jaata hai. Ye India mein bahut common wajah hai — outdoor kaam karne walon mein, ya jo log sunscreen use nahi karte. Ye brownish-black pigmentation hoti hai jo blue-dark se alag hai.',
      howToIdentify: 'Rang brownish hota hai (neele ya purple nahi). Dhoop mein rehne ke baad zyada dark lagte hain.',
    },
  ],

  medicalCauses: [
    {
      _key: 'mc1',
      diseaseName: 'Anaemia (Khoon Ki Kami)',
      diseaseHindiName: 'Khoon Ki Kami',
      howSymptomPresents: 'Jab blood mein haemoglobin (oxygen carrier) kam hota hai, to skin pale aur tired dikhne lagti hai. Aankhon ke neeche ka area zyada transparent ho jaata hai — underlying blood vessels zyada dark aur visible ho jaati hain. Ye dark circles typically bluish hote hain aur saath mein thakaan bhi hoti hai.',
      howToIdentify: 'Dark circles ke saath thakaan, chakkar, saans phoolna, ya nakhoon pale hona — Hb test se confirm hota hai.',
      homeopediaSlug: '',
      isAvailable: false,
    },
    {
      _key: 'mc2',
      diseaseName: 'Insomnia (Neend Na Aana)',
      diseaseHindiName: 'Neend Ki Bimari / Anidra',
      howSymptomPresents: 'Chronic insomnia mein daily neend poor hoti hai — jo lambe waqt tak aankhon ke aaspaas blood circulation aur fluid balance ko disturb karti hai. Sirf ek-do raat nahi, hafte-mahine ki neend ki kami dark circles ko permanent-si shap dene lagti hai.',
      howToIdentify: 'Regularly raat ko neend aane mein takleef, ya beech raat uthna — even jab thak ke so gaye hon.',
      homeopediaSlug: 'insomnia',
      isAvailable: true,
    },
    {
      _key: 'mc3',
      diseaseName: 'Thyroid Disorder',
      diseaseHindiName: 'Thyroid Ki Samasya',
      howSymptomPresents: 'Hypothyroidism (slow thyroid) mein face pe puffiness aur fluid retention hoti hai — khas taur pe aankhon ke aas paas. Ye sujan shadow create karti hai. Saath mein skin dry aur thakan bhi hoti hai jo dark circles aur bura dikhata hai.',
      howToIdentify: 'Dark circles ke saath weight gain, thandi lagna, bal girna, ya awaz bhari hona — TSH test se pata chalta hai.',
      homeopediaSlug: 'thyroid',
      isAvailable: true,
    },
    {
      _key: 'mc4',
      diseaseName: 'Stress / Anxiety (Mansik Tanav)',
      diseaseHindiName: 'Tanaav / Chinta / Anxiety',
      howSymptomPresents: 'Chronic stress aur anxiety mein cortisol hormone badhta hai jo blood vessels pe asar karta hai — khas taur pe aankhon ke aaspaas ki sensitive vessels pe. Stress-anxiety mein neend bhi kharab hoti hai — dono milke dark circles deep kar dete hain.',
      howToIdentify: 'Stress ya anxiety ke waqt dark circles zyada nazar aate hain. Saath mein sar dard, jaw tightness, ya neend kharab hona.',
      homeopediaSlug: 'anxiety',
      isAvailable: true,
    },
  ],

  redFlags: [
    'Kidney Disease (Gurdey Ki Bimari) — agar dark circles ke saath aankhon mein/neeche consistent sujan hai jo subah zyada hoti hai aur paon bhi soojan hain to turant doctor ke paas jaao — fluid retention ka sign ho sakta hai',
    'Severe Nutritional Deficiency — agar dark circles ke saath nakhoon kharab ho rahe hain, muh mein chale, ya bal zyada gir rahe hain to B12 ya iron deficiency severe level pe ho sakti hai — delay mat karo',
    'Orbital Fat Herniation — agar aankhon ke neeche prominently bulge aa gaya hai jo press karne pe move karta hai — yeh cosmetic concern hai lekin doctor se confirm karwana chahiye, rarely koi deeper issue hota hai',
  ],

  homeSteps: [
    {
      _key: 'hs1',
      action: 'Neend Ka Time Fix Karo',
      whyItWorks: 'Regular sleep schedule se body ka repair cycle normalize hota hai — aankhon ke neeche ka fluid drain hota hai aur blood vessels normal state mein return hoti hain. Roz ek hi waqt sona-uthna body clock set karta hai.',
    },
    {
      _key: 'hs2',
      action: 'Thanda Compress Lagao',
      whyItWorks: 'Cold temperature se blood vessels temporarily constrict hoti hain — dark appearance reduce hota hai. Saath hi sujan bhi kam hoti hai. Thanda paani mein bheega kapda ya chilled cucumber slices — 10-15 minute roz subah rakho.',
    },
    {
      _key: 'hs3',
      action: 'Paani Zyada Piyo — Din Mein 8-10 Glass',
      whyItWorks: 'Hydration se skin ka volume maintain rehta hai — aankhon ke neeche ka hollow/sunken appearance reduce hota hai jo shadow effect create karta hai.',
    },
    {
      _key: 'hs4',
      action: 'Screen Se Aankhon Ko Aaraam Do — 20-20-20 Rule',
      whyItWorks: 'Har 20 minute screen ke baad 20 second kisi door cheez ko dekhna aankhon ki blood vessels pe pressure kam karta hai — dark circles ka ek major cause reduce hota hai.',
    },
    {
      _key: 'hs5',
      action: 'Sar Thoda Unchaai Pe Rakho Sote Waqt',
      whyItWorks: 'Ek ya do takiya extra se head slightly elevated rehta hai — raat bhar aankhon ke neeche fluid ikattha nahi hota. Subah ke dark circles aur puffiness dono mein farak aata hai.',
    },
  ],

  homeopathyIndividualization: `Dark circles ka naam ek hai — lekin wajah har insaan mein alag hoti hai. Kisi ke dark circles neend ki kami se hain, kisi ke pigmentation se, kisi ke anaemia se — aur kisi ke genetic hain. Homeopathy mein sirf "dark circles" nahi dekha jaata — aapke dark circles kaisa rang hai, kab zyada hote hain, kya aur bhi saath mein hai, kitne waqt se hain — ye sab treatment decide karta hai. Isi wajah se do logon ke dark circles ek jaisa dikh sakte hain lekin unka treatment bilkul alag ho sakta hai.`,

  homeopathyRootCause: `Baar baar aane wale ya kaafi waqt se hone wale dark circles aksar ek deeper imbalance ka signal hote hain — anaemia, thyroid, ya chronic stress. Homeopathy mein sirf aankhon ke neeche ke rang ko address karna goal nahi — jo cheez isko baar baar la rahi hai usse treat kiya jaata hai. Waqt ke saath dark circles ki intensity aur consistency dono mein sudhaar aata hai. Research limited hai is area mein aur results individual hote hain — isliye patience aur proper case history zaroori hai.`,

  homeopathySafety: `Highly diluted homeopathic medicines practically side-effect free hoti hain — isliye ye bacchon mein, elderly patients mein, aur jab kai doosri medicines chal rahi hon tab bhi safely use ho sakti hain. Severe cases mein — jaise anaemia ya thyroid — homeopathy complementary role mein hai, pehle conventional diagnosis zaruri hai. Emergency situations mein conventional treatment pehle — homeopathy saath mein chalti hai, replacement nahi hai.`,

  isForYouIf: [
    'Aap dark circles ki root cause treat karna chahte hain — sirf concealer se hide nahi karna',
    'Aap sustainable, long-term improvement dhundh rahe hain — ek raat mein nahi, lekin lasting',
    'Aap side-effect free approach prefer karte hain — khaskar agar baccha hai, elderly hain, ya doosri medicines chal rahi hain',
  ],
  notForYouIf: [
    'Aapko kal ki party ya event ke liye turant result chahiye — cosmetic concealer faster option hai',
    'Aapke dark circles purely genetic hain aur aap cosmetic procedure chahte hain — plastic surgeon se milein, homeopathy isme surgical option replace nahi karti',
  ],

  homeopathyDiseaseLinks: [
    { _key: 'hdl1', diseaseName: 'Insomnia (Neend Ki Takleef) ka poora ilaaj', diseaseSlug: 'insomnia' },
    { _key: 'hdl2', diseaseName: 'Thyroid Disorder ka poora ilaaj',            diseaseSlug: 'thyroid'  },
  ],

  linkedDiseaseCards: [
    { _key: 'ldc1', title: 'Insomnia',  hindiName: 'Neend Ki Bimari',    slug: 'insomnia' },
    { _key: 'ldc2', title: 'Thyroid',   hindiName: 'Thyroid Ki Samasya', slug: 'thyroid'  },
  ],

  faqs: [
    {
      _key: 'faq1', faqType: 'common-cause',
      question: 'Dark circles kyun hote hain — asli wajah kya hai?',
      answer: `Dark circles ka sabse common karan hamare lifestyle mein hai — neend ki kami, zyada screen time, aur dehydration. Aankhon ke neeche ki skin body ki sabse patli skin hoti hai — yahan ki blood vessels bahut close to surface hoti hain. Jab body thaki hoti hai ya blood circulation slow hota hai, ye vessels dilate hoti hain aur dark colour create karti hain.\n\nPigmentation wali dark circles mein melanin overproduction hota hai — jo India mein sun exposure ki wajah se common hai.\n\nMedical causes mein anaemia, thyroid, aur chronic stress bhi dark circles create karte hain — in cases mein dark circles aksar thakaan, chakkar, ya balon ke girne ke saath aate hain. Agar lifestyle fix hone ke baad bhi dark circles nahi sudharte to ek blood test (Hb, TSH) kaafi helpful hota hai.`,
    },
    {
      _key: 'faq2', faqType: 'normal-vs-serious',
      question: 'Dark circles kab normal hote hain aur kab doctor zaroori hai?',
      answer: `Dark circles tab normal maane jaate hain jab: raat bhar jaagne ke baad aaye hon, stress ke waqt bade hon, ya family mein sab ko hain (genetic). Agar rest, hydration aur neend theek karne pe kuch sudhaar aata hai — to ye lifestyle-related dark circles hain aur foran concern nahi.\n\nDoctor ke paas tab jaao jab:\n- Dark circles ke saath thakaan, chakkar, saans phoolna, ya weight change ho (anaemia/thyroid ka signal)\n- Achanak zyada dark ho gaye ho bina kisi obvious reason ke\n- Aankhon ke neeche consistent sujan bhi ho\n\nAnaemia ya thyroid mein sirf cosmetic treatment kaafi nahi — root cause blood test se pakda jaata hai.`,
    },
    {
      _key: 'faq3', faqType: 'duration',
      question: 'Dark circles kitne waqt mein theek ho sakte hain?',
      answer: `Ye depend karta hai cause pe.\n\n- Neend ki kami ya dehydration se aaye dark circles: 1-2 hafte mein sahi neend aur paani peene se clearly better ho sakte hain\n- Pigmentation-based dark circles: 4-8 hafte lagte hain consistent sun protection aur treatment se\n- Anaemia ya thyroid se linked dark circles: jab tak underlying condition treat nahi hoti, dark circles bhi nahi jayenge — isme 2-3 mahine ya zyada lag sakte hain\n- Genetic dark circles: completely nahi jaate, lekin proper treatment se significantly improve hote hain\n\nAgar 6-8 hafte ke consistent efforts ke baad koi farak nahi pada — doctor se milna zaroori hai.`,
    },
    {
      _key: 'faq4', faqType: 'baar-baar',
      question: 'Poori neend lene ke baad bhi dark circles kyun rehte hain?',
      answer: `Ye ek bahut common frustration hai — "main poora sota hoon, phir bhi dark circles nahi jaate." Iska matlab neend sirf ek factor hai — actual cause kuch aur bhi ho sakta hai.\n\n- Anaemia: haemoglobin kam hota hai to skin properly oxygenated nahi hoti — neend se farak nahi padta\n- Thyroid imbalance: fluid retention hoti hai aankhon ke aaspaas — neend se nahi jaata\n- Pigmentation: melanin overproduction hai — ye sirf sleep se nahi hata\n- Genetic thinning: kuch logon ki periorbital skin naturally patli hoti hai — vessels zyada visible hain chahe kitna bhi soo lein\n- Dehydration chronically: agar regularly paani kam peete hain to skin sunken rehti hai\n\nIs case mein ek simple blood test — Hb, TSH — kaafi kuch clear kar deta hai.`,
    },
    {
      _key: 'faq5', faqType: 'bacchon-mein',
      question: 'Bacchon mein dark circles kyun hote hain?',
      answer: `Bacchon mein dark circles dekhna parents ko dar deta hai — lekin aksar cause manageable hota hai.\n\nSabse common reasons:\n- Allergies (nasal congestion se) — naak band rehne se aankhon ke aaspaas venous drainage slow hoti hai, dark circles bante hain. Ise "allergic shiners" kehte hain\n- Anaemia — India mein bacchon mein iron deficiency common hai, khaskar jo vegetarian diet pe hain\n- Kharab neend pattern — bacche bhi screens se neend kharab karte hain\n- Genetic thinning — family mein sabko hai to likely hereditary\n\nKab doctor zaruri: agar allergies ke aur signs hain (naak behna, aankhein kharishna), ya thakaan + pale skin ke saath dark circles hain — doctor se milna appropriate hai.`,
    },
    {
      _key: 'faq6', faqType: 'common-cause',
      question: 'Dark circles aur hollow eyes saath kyun aate hain?',
      answer: `Dark circles ke saath aankhon ka sunken/hollow dikhna ek alag situation hai — sirf pigmentation nahi, structural change bhi hai. Iska matlab hai aankhon ke neeche ka fat aur volume kam ho raha hai — jo teen reasons se hota hai.\n\n- Dehydration severe hone pe skin aur underlying tissue shrink karte hain\n- Weight loss rapid hone pe facial fat loss hoti hai — aankhein andar dhans jaati hain\n- Age-related fat loss — jab facial fat redistribute hoti hai\n\nKhaskar agar achanak aaya ho — weight check karo, paani intake dekhna aur doctor se milna helpful hoga. Chronic dehydration aur nutritional deficiency dono is issue ko create karte hain.`,
    },
    {
      _key: 'faq7', faqType: 'ghar-wait',
      question: 'Ghar pe dark circles ke liye kya kar sakte hain?',
      answer: `Ghar pe ye safe steps try kar sakte hain — koi medicine nahi, sirf physical comfort.\n\n- Thanda compress: thande paani mein bheega kapda ya cucumber slices — 10-15 minute subah roz\n- Neend schedule fix karo: roz same time sona-uthna — body ko repair time milta hai\n- Hydration: din mein 8-10 glass paani\n- Head elevated karke soo: ek extra takiya — raat bhar fluid eye area mein pool nahi hota\n- Screen breaks: 20-20-20 rule — eye strain se blood vessel pressure kam hota hai\n- Dhoop mein jaate waqt sunglasses aur sunscreen: pigmentation wale dark circles sun exposure se zyada dark hote hain\n\nYe steps 2-4 hafte consistently karo. Agar farak nahi aaya — blood test aur doctor consultation next step hai.`,
    },
    {
      _key: 'faq8', faqType: 'homeopathy',
      question: 'Kya homeopathy se dark circles theek hote hain?',
      answer: `Homeopathy dark circles mein tab zyada effective hai jab cause internal ho — anaemia, thyroid imbalance, chronic stress, ya insomnia. Sirf cosmetic pigmentation mein homeopathy ki role limited hai.\n\nHomeopathy ka approach ye hai ki aankhon ke neeche ka dark ring aksar body ke andar ki cheez ka bahar ka sign hai — twacha ka issue nahi, systemic issue hai. Isliye treatment mein uss underlying cause ko address kiya jaata hai.\n\nResults individual hote hain aur research is area mein limited hai — patience aur proper case history zaroori hai. Pure cosmetic/genetic dark circles ke liye dermatologist ke options (chemical peel, laser) zyada effective hain — dono saath bhi chal sakte hain.`,
    },
    {
      _key: 'faq9', faqType: 'test-diagnosis',
      question: 'Dark circles mein kaunsa test karwana chahiye?',
      answer: `Agar dark circles ke saath koi aur symptom bhi hai ya kaafi waqt se hain, to ye basic blood tests helpful hain:\n\n- Complete Blood Count (CBC): Haemoglobin check hota hai — anaemia rule out ya confirm\n- Serum Ferritin + Iron Studies: Iron stores check hota hai — especially agar vegetarian diet pe hain ya periods heavy hain\n- TSH (Thyroid Stimulating Hormone): Thyroid function — especially agar weight change ya thakaan bhi hai\n- Vitamin B12 + D levels: Deficiency bhi dark circles aur thakaan cause kar sakti hai\n- Blood Sugar (Fasting): Diabetes mein skin aur circulation affected hoti hai\n\nYe sab ek basic health checkup mein aa jaate hain — koi complex test nahi. Results doctor ko context dete hain treatment ke liye.`,
    },
    {
      _key: 'faq10', faqType: 'baar-baar',
      question: 'Dark circles achanak kyun aa jaate hain?',
      answer: `Achanak aaye dark circles ka matlab usually koi acute trigger hai — ek bade stressful event ke baad, raat bhar jaagne ke baad, ya kisi nayi medicine ya food allergy ke baad.\n\nSabse common acute causes:\n- Severe sleep deprivation (ek ya do raat bhar jaagna)\n- Rapid dehydration\n- Nasal congestion ya cold (naak se drainage block hone se)\n- Alcohol intake (severely dehydrating + blood vessels dilate karta hai)\n\nAgar 3-5 din mein trigger hata ke better nahi hote — to doctor se milna appropriate hai. Agar saath mein face ka ek taraf numb ho ya vision change ho — turant hospital jaao, ye serious sign hai.`,
    },
    {
      _key: 'faq11', faqType: 'bacchon-mein',
      question: 'Teen se pandrah saal ke bacche mein dark circles — normal hai?',
      answer: `Is age mein dark circles hona bahut common hai — lekin "normal" consider karne se pehle cause samajhna zaroori hai.\n\nIs age mein common causes:\n- Allergic rhinitis (nasal allergy) — sabse common cause India mein\n- Iron deficiency anaemia — especially in vegetarian teens\n- Screen time aur irregular sleep (exams, phone)\n- Genetic thinning\n\nYe kab concern hai:\n- Naak frequently band rehti hai, aankhein khujlati hain (allergy)\n- Thakaan + pale skin ke saath dark circles (anaemia)\n- Sudden weight loss\n\nIs age mein ek CBC test kaafi kuch clear kar deta hai — anaemia rule out ho jaata hai. Cosmetic concern zyada nahi sochna — cause treat karo, dark circles khud better hote hain.`,
    },
    {
      _key: 'faq12', faqType: 'permanent',
      question: 'Dark circles se permanently kaise chutkara milega?',
      answer: `"Permanent cure" ka vaada koi bhi system honestly nahi kar sakta — aur koi kare to doubt karo.\n\nJo realistic hai:\n- Agar cause lifestyle hai (neend, screen, dehydration): consistently fix karo — 4-8 hafte mein significant improvement aata hai aur tab tak rehta hai jab tak habits rahein\n- Agar cause medical hai (anaemia, thyroid): cause treat karo — dark circles automatically better hote hain\n- Agar cause genetic/structural hai: cosmetic dermatology (chemical peel, laser toning, fillers) effective hai\n\nHomeopathy is mein internal cause ko address karne mein madad karta hai — especially jab multiple factors involved hon (stress + neend + anaemia saath). Long-term improvement realistic hai.`,
    },
  ],

  relatedSymptoms: [
    { _key: 'rs1', name: 'Fatigue',    hindiName: 'Thakaan / Kamzori',   slug: 'fatigue'      },
    { _key: 'rs2', name: 'Hair Fall',  hindiName: 'Baal Jhadna',         slug: 'hair-fall'    },
    { _key: 'rs3', name: 'Headache',   hindiName: 'Sir Dard',            slug: 'headache'     },
    { _key: 'rs4', name: 'Dry Skin',   hindiName: 'Rookhi Twacha',       slug: 'dry-skin'     },
  ],

  sources: [
    { _key: 's1', name: 'Mayo Clinic — Dark Circles (Periorbital Hyperpigmentation): Symptoms & Causes', year: '2023', url: 'https://www.mayoclinic.org/symptoms/dark-circles/' },
    { _key: 's2', name: 'NCBI / PubMed — Periorbital Hyperpigmentation: A Comprehensive Review',        year: '2020', url: 'https://pubmed.ncbi.nlm.nih.gov/32754329/'          },
    { _key: 's3', name: 'NHS UK — Tired Eyes and Dark Circles: Causes and Management',                  year: '2022', url: 'https://www.nhs.uk/conditions/tired-eyes/'           },
    { _key: 's4', name: 'WHO Global Health Observatory — Anaemia Prevalence in India',                  year: '2023', url: 'https://www.who.int/data/gho/data/themes/topics/anaemia_in_women_and_children' },
  ],

  quickFactSymptom:    'Dark circles aankhon ke neeche ki thin skin ke neeche blood vessels ya pigmentation se hote hain — ye sirf cosmetic nahi, aksar body ki andar ki cheez ka signal hote hain.',
  quickFactIndiaStats: 'India mein dark circles ka ek major cause allergic rhinitis (nasal allergy) hai — jo "allergic shiners" create karta hai — bahut kam logon ko ye pata hota hai.',
  quickFactDoctorWhen: 'Agar dark circles ke saath thakaan, chakkar, ya weight change ho — blood test zaroori hai, yeh anaemia ya thyroid ho sakta hai.',
  reviewDate: 'May 2026',

  doctorNote: 'Maine apni practice mein dekha hai ki dark circles ke jo patients aate hain, unme se bahut zyada log sirf neend ya stress ko blame karte hain — lekin jab case history lete hain to aksar anaemia ya nasal allergy nikalta hai jo saalon se undetected thi. Aurat patients mein — khaskar jo heavy periods hain — iron deficiency bahut common cause hai jo cosmetic treatment se kuch nahi hoga. Homeopathy mein constitutional assessment se root cause pakda jaata hai — tabhi dark circles genuinely better hoti hain, cream se sirf dabti hain.',
}

async function seed() {
  console.log('🌱 Seeding Dark Circles symptom page...')
  await client.createOrReplace(doc)
  console.log('✅ Symptom seeded — homeopedia.in/symptoms/dark-circles')
}

seed().catch(console.error)
