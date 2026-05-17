import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'symptom-itching-all-over-body',
  _type: 'symptom',

  name: 'Itching All Over Body',
  hindiName: 'Poore Sharir Mein Khujli',
  hinglishName: 'poore badan mein khujli',
  slug: { _type: 'slug', current: 'itching-all-over-body' },
  bodySystem: 'Skin',

  // SEO
  metaTitle: 'Body Itching in Hindi — Karan, Ilaaj aur Homeopathy',
  metaDescription: 'Poore sharir mein khujli (body itching) ke karan, severity aur ghar pe safe steps. Verified Hinglish guide, Dr. Shadab reviewed.',
  publishedAt: new Date('2026-05-17').toISOString(),

  // Opening
  whatIsThis: `Kabhi kabhi achanak poore badan mein khujli shuru ho jaati hai — koi rash nahi, koi dikhi cheez nahi — bas ek restless, irritating sensation jo chain nahi lene deti. Raat ko neend uchad jaati hai, din mein concentrate nahi hota. Poore sharir mein khujli (body itching) India mein ek bahut common complaint hai.

Is symptom ke peeche kai wajahaat ho sakti hain — simple dry skin se lekar andar ki kisi bimari tak. Aksar log cream lagaate rehte hain mahino tak bina ye jaane ki actual wajah kya hai.

Ye page aapko 2 minute mein batayega: aapka case ghar pe manage ho sakta hai ya doctor zaruri hai, aur kya chal raha hai aapke body mein.`,

  indiaContext: 'WHO ke anusar generalized pruritus — yaani poore body ki khujli — worldwide adult population ke lagbhag 7-8% logon ko kisi na kisi point pe affect karta hai. India mein dry climate, paani ki hardness, aur allergy prevalence ki wajah se ye ek bahut common presenting complaint hai dermatology aur general practice dono mein.',
  indiaContextSource: 'WHO Skin Conditions Data | Mayo Clinic — Pruritus Overview',

  // Severity Scale
  severityLevel1: [
    'Khujli ek-do din se hai, mild hai, life disturb nahi kar rahi',
    'Koi rash, sujan, ya skin pe bade changes nahi hain',
    'Haal hi mein naya soap, detergent, kapda ya khaana shuru kiya tha',
    'Mausam badla — bahut dry ya bahut garm ho gaya',
    'Naha ke baad ya raat ko thoda zyada hoti hai lekin manage ho raha hai',
  ],
  severityLevel2: [
    'Khujli ek hafte se zyada se chal rahi hai aur better nahi ho rahi',
    'Saath mein skin ya aankhon ka peela hona dikh raha hai',
    'Raat ko neend poori tarah uchad jaati hai khujli ki wajah se',
    'Rash ke saath fever bhi aa raha hai',
    'Scratch karne ki jagahon pe infection ke signs hain — pus, bahut lal hona, ya warmth',
  ],
  severityLevel3: [
    'Khujli ke saath saans lene mein takleef ya gala band hona',
    'Chehra, honth, ya jeebh ki sujan khujli ke saath',
    'Achanak poore badan pe bade hives aur chakkar aana ek saath',
    'Chest mein dard ya dhadkan tez hona khujli ke saath',
  ],

  // Timeline
  timeline3Days: 'Body aksar kisi naye soap, kapde, khane, ya mausam ke badlaav ke liye temporarily react karti hai. Ye stage mein trigger dhundhne ki koshish karo — kya naya shuru kiya tha? Ghar pe cold compress aur plain moisturizer se manage karo. Agar teen din mein better nahi hua to Level 2 mein aao.',
  timeline4Weeks: 'Ab ye simple temporary reaction nahi hai. Body koi persistent signal de rahi hai. Ya to underlying skin condition hai — eczema, psoriasis, fungal infection — ya andar ki koi cheez active hai — liver, thyroid, ya allergy. Is stage pe doctor se milna sahi decision hai. Sirf cream se ye theek nahi hogi.',
  timelineMonthPlus: 'Ye chronic ho gayi hai. Iska matlab hai ki ek systemic cause hai jo abhi tak address nahi hua. Dermatologist ya homeopath se detailed case history zaroori hai. Sirf symptom treat karte rehna is stage pe long-term solution nahi hai.',

  // Causes — Part A Lifestyle
  lifestyleCauses: [
    {
      _key: 'lc1',
      causeName: 'Dry Skin (Rookhi Twacha)',
      mechanism: 'Skin ki upar wali layer ek protective barrier ka kaam karti hai. Jab is layer mein moisture kam hoti hai — sardi mein, AC wale kamron mein, ya garam paani se baar baar nahane se — skin crack hone lagti hai. In cracks mein nerve endings expose ho jaati hain. Ye exposed nerve endings brain ko "danger" ka signal bhejti hain — aur brain iska anubhav khujli ke roop mein karta hai. Koi infection nahi, koi allergy nahi — sirf moisture barrier toot gaya.',
      howToIdentify: 'Khujli ke saath skin tight ya khinchi hui lagti hai. Koi rash nahi hota. Naha ke fauran baad ya raat ko zyada hoti hai — jab skin sabse zyada dry hoti hai.',
    },
    {
      _key: 'lc2',
      causeName: 'Contact Allergy / Chemical Reaction',
      mechanism: 'Naya soap, shampoo, washing powder, synthetic kapda, ya parfume skin ke contact mein aata hai. Skin ke immune cells (mast cells) in chemicals ko "threat" samajhte hain. Ye cells histamine naam ka ek chemical release karte hain. Histamine nerve endings ko irritate karta hai — aur khujli shuru ho jaati hai.',
      howToIdentify: 'Kuch naya use kiya tha haal hi mein — product badla ya kapda naya tha. Jab wo cheez band karo, 2-3 din mein khujli khud kam hone lagti hai.',
    },
    {
      _key: 'lc3',
      causeName: 'Heat / Garm Mausam (Heat Rash / Prickly Heat)',
      mechanism: 'Bahut garm ya humid mein sweat glands se paasina baahir nahi nikal paata — glands block ho jaati hain. Trapped sweat skin ke andar ek inflammatory reaction create karta hai. Choti choti pimple-type sensation ke saath khujli hoti hai — jise log "ghamoriya" kehte hain.',
      howToIdentify: 'Garm kapdon mein ya dhoop mein zyada hoti hai. AC ya thandi jagah jaane pe khud better ho jaati hai. Garm aur humid mausam mein — especially May-June mein India mein — ye bahut common hai.',
    },
    {
      _key: 'lc4',
      causeName: 'Stress aur Anxiety',
      mechanism: 'High stress mein body cortisol hormone release karta hai. Cortisol skin ki nerve endings ki sensitivity badha deta hai. Kuch logon mein nervous system directly skin pe signals bhejne lagta hai — bina kisi physical cause ke. Ye psychosomatic response hai — real khujli hai, imagination nahi — lekin trigger mental hai.',
      howToIdentify: 'Jab tense ya anxious hote hain tab zyada hoti hai. Exam ke time, kisi badi problem ke dauran. Relaxed ya chutti pe khud better ho jaati hai.',
    },
  ],

  // Causes — Part B Medical
  medicalCauses: [
    {
      _key: 'mc1',
      diseaseName: 'Eczema (Atopic Dermatitis)',
      diseaseHindiName: 'Chambal / Atopic Eczema',
      howSymptomPresents: 'Intense, relentless khujli jo raat ko bahut badhti hai. Skin dry, red, aur scaly ho jaati hai. Typically kuhni ke andar, ghutnon ke peeche, haathon pe — lekin severe cases mein poore body pe aa sakti hai. Scratch karne pe skin aur irritate ho jaati hai aur ek "scratch-itch cycle" ban jaata hai.',
      howToIdentify: 'Family mein asthma, hayfever ya allergies ki history aksar hoti hai. Thandi ya dry air mein flare-up hote hain. Bachpan se ya young age mein shuru hoti hai zyaadatar.',
      homeopediaSlug: 'eczema',
      isAvailable: true,
    },
    {
      _key: 'mc2',
      diseaseName: 'Urticaria (Hives / Pitthi)',
      diseaseHindiName: 'Pitthi / Chhapaki',
      howSymptomPresents: 'Achanak ubhre hue, lal ya pale raised patches — jo ek jagah se hat ke doosri jagah appear hote hain. Bahut intense khujli ke saath. Ye patches aate hain aur kuch ghanton mein khud chale jaate hain — lekin doosri jagah naye aa jaate hain.',
      howToIdentify: '"Moving" patches hallmark hain. Aksar khaane ki allergy (seafood, peanuts, dairy), kisi dawa, ya infection ke baad trigger hoti hai. Kuch logon mein cause kabhi pata nahi chalta — isko "idiopathic urticaria" kehte hain.',
      homeopediaSlug: 'urticaria',
      isAvailable: true,
    },
    {
      _key: 'mc3',
      diseaseName: 'Psoriasis',
      diseaseHindiName: 'Safed Chamdi Ki Bimari',
      howSymptomPresents: 'Thick, silvery-white scaly patches pe khujli hoti hai — jo mostly sir, kohni, ghutnon, aur lower back pe hoti hai. Skin bahut dry aur cracked feel hoti hai. Ye ek chronic autoimmune condition hai — flare-up aur remission hote rehte hain.',
      howToIdentify: 'Scaling bahut prominent hoti hai — skin pe white ya silver flakes. Stress, skin injury ya koi infection ke baad flare-ups trigger hote hain. Family history aksar hoti hai.',
      homeopediaSlug: 'psoriasis',
      isAvailable: true,
    },
    {
      _key: 'mc4',
      diseaseName: 'Fungal Infection (Dermatophytosis)',
      diseaseHindiName: 'Daad / Ringworm',
      howSymptomPresents: 'Ring-shaped rash ke saath intense khujli — typically groin area, inner thighs, underarms, ya skin folds mein. Garm aur humid conditions mein bahut zyada hoti hai.',
      howToIdentify: 'Clear outer border wala ring pattern jo thoda raised hota hai — ye daad ki pehchaan hai. Garm ya sweaty hone pe aur bhadti hai. Gym, swimming pool, ya shared towels se spread hoti hai.',
      homeopediaSlug: 'ringworm',
      isAvailable: true,
    },
    {
      _key: 'mc5',
      diseaseName: 'Scabies',
      diseaseHindiName: 'Khaaj / Khurna',
      howSymptomPresents: 'Raat ko extreme khujli — aisi ki neend bilkul nahi aati. Sarcoptes scabiei naam ka ek mite skin ke andar burrow karta hai. Fingers ke beech ki gaps, wrists, waist, aur buttocks pe typical patterns hote hain.',
      howToIdentify: 'Raat ko extreme hona — ye hallmark hai. Ghar ke doosre log bhi affected ho rahe hain to scabies strongly suspect karo. Ye highly contagious hai — direct skin contact se spread hoti hai.',
      homeopediaSlug: '',
      isAvailable: false,
    },
  ],

  // Causes — Part C Red Flags
  redFlags: [
    'Liver Disease (Jigar Ki Bimari): Jab liver blood toxins properly filter nahi kar paata, to bile salts skin mein deposit ho jaate hain aur intense khujli hoti hai. Agar khujli ke saath skin ya aankhon ka peela pana ho — turant doctor.',
    'Thyroid Disorder: Hypothyroidism (thyroid kam kaam karna) skin ko bahut dry aur itching-prone bana deta hai. Agar saath mein bahut zyada thakan, wajan badhna, ya abnormal thand lagna ho — thyroid test karwao.',
    'Chronic Kidney Disease: Dialysis patients mein ya advanced kidney disease mein intense generalized itching hoti hai — uremic pruritus kehte hain isse. Ye andar ke toxins ka signal hai.',
    'Polycythemia Vera (Blood Disorder): Ek rare blood condition jisme garam paani ke contact se intense khujli hoti hai — aquagenic pruritus. Agar garm pani se naha ke turant extreme khujli ho — blood count karwao.',
  ],

  // Home Steps
  homeSteps: [
    {
      _key: 'hs1',
      action: 'Cold Compress Lagao',
      whyItWorks: 'Thanda temperature skin ki nerve endings ko temporarily numb karta hai — khujli ka signal brain tak kam intensity se jaata hai. Ek clean kapda thande paani mein bheego ya ice pack ek toli mein lapet ke 10-15 minute affected area pe rakho.',
    },
    {
      _key: 'hs2',
      action: 'Scratch Mat Karo — Gentle Pressure Do',
      whyItWorks: 'Scratching se skin damage hoti hai aur infection ka risk badhta hai. Iske saath ek "scratch-itch cycle" banta hai — scratch karne pe skin aur histamine release karti hai, aur khujli aur badhti hai. Kapde se gentle firm pressure dena zyada helpful hai.',
    },
    {
      _key: 'hs3',
      action: 'Loose, Cotton Kapde Pehno',
      whyItWorks: 'Synthetic fabrics skin ke saath friction create karte hain aur already irritated nerve endings ko aur trigger karte hain. Loose cotton breathable hota hai — skin ko friction aur heat dono se bachata hai.',
    },
    {
      _key: 'hs4',
      action: 'Thande Ya Lukewarm Kamre Mein Raho',
      whyItWorks: 'Garm temperature blood vessels dilate karta hai aur histamine release badhti hai — khujli zyada hoti hai. Thanda environment is response ko dampen karta hai.',
    },
    {
      _key: 'hs5',
      action: 'Nahane Ke Fauran Baad Unscented Moisturizer Lagao',
      whyItWorks: 'Garm paani skin ki natural oils strip karta hai. Nahane ke 2-3 minute ke andar — jab skin thodi wet ho — plain unscented moisturizer lagao. Ye moisture lock karta hai aur nerve endings ko cover karta hai. Koi scented ya fancy cream nahi — plain petroleum jelly ya fragrance-free lotion.',
    },
  ],

  // Homeopathy
  homeopathyIndividualization: `Ek regular doctor ko aap bologe "poore badan mein khujli hai" — wo ek standard antihistamine dega. Homeopathy mein ek hi symptom ke liye alag alag patients ka treatment bilkul alag hoga. Kyun? Kyunki homeopathy mein ye sab matter karta hai: khujli kaisi hai — burning hai, tingling hai, ya pure scratch karne ki urge hai? Kab badhti hai — raat ko, garm mein, thandi mein, naha ke baad? Kya se better hoti hai — thande se, garmi se, scratch karne se? Ye information ek trained homeopath ko specific medicine select karne mein help karti hai — sirf "itching ki medicine" nahi.`,

  homeopathyRootCause: `Jo patients baar baar khujli se aate hain — kaafi baar unka pattern hota hai: kuch hafte theek, phir wapas aati hai. Cream lagao, theek, phir wapas. Homeopathy ka goal is pattern ko todna hai. Is approach mein sirf khujli band karna target nahi hota. Underlying immune response, allergy tendency, ya organ imbalance — jo baar baar khujli la raha hai — usse address kiya jaata hai. Jo patients chronic skin conditions ke liye homeopathic treatment pursue karte hain, unka experience aksar ye hota hai ki frequency aur intensity dono gradually kam hoti hai. Ye ek process hai — ek ghante ya ek din mein nahi hota.`,

  homeopathySafety: `Homeopathic medicines highly diluted hoti hain — isliye conventional medicines ke saath interaction nahi hota. Ye especially relevant hai pregnancy mein jab most conventional antihistamines carefully avoid ki jaati hain, chhote bacchon mein, elderly patients mein jab already kai medicines chal rahi hain, aur jab kisi ko long-term steroid creams se bachna hai. Severe allergic reactions ya emergency situations mein conventional emergency treatment pehle.`,

  isForYouIf: [
    'Khujli baar baar aati hai aur root cause address karna chahte hain',
    'Long-term sustainable approach dhundh rahe hain — quick fix nahi',
    'Side-effect free option chahiye — especially pregnancy, bachpan, ya multiple medications ke case mein',
    'Conventional treatment ke saath ek complementary approach jodna chahte hain',
  ],

  notForYouIf: [
    'Severe allergic reaction ho rahi hai — turant emergency mein jaao, homeopathy baad mein shuru karo',
    'Aapko abhi isi ghante relief chahiye — antihistamine faster kaam karega acute mein',
  ],

  homeopathyDiseaseLinks: [
    { _key: 'hdl1', diseaseName: 'Eczema (Chambal) ka poora ilaaj',        diseaseSlug: 'eczema'    },
    { _key: 'hdl2', diseaseName: 'Urticaria (Pitthi/Chhapaki) ka poora ilaaj', diseaseSlug: 'urticaria' },
    { _key: 'hdl3', diseaseName: 'Psoriasis ka poora ilaaj',               diseaseSlug: 'psoriasis' },
  ],

  // Section 7 — Disease Cards
  linkedDiseaseCards: [
    { _key: 'ldc1', title: 'Eczema',            hindiName: 'Chambal / Atopic Dermatitis', slug: 'eczema'    },
    { _key: 'ldc2', title: 'Urticaria',          hindiName: 'Pitthi / Chhapaki / Hives',  slug: 'urticaria' },
    { _key: 'ldc3', title: 'Psoriasis',          hindiName: 'Safed Twacha Ki Bimari',     slug: 'psoriasis' },
    { _key: 'ldc4', title: 'Fungal Infection',   hindiName: 'Daad / Ringworm',            slug: 'ringworm'  },
  ],

  // FAQs
  faqs: [
    {
      _key: 'faq1',
      faqType: 'normal-vs-serious',
      question: 'Poore sharir mein khujli kab normal hai aur kab doctor zaroori hai?',
      answer: `Ek ya do din ki mild khujli jab koi naya product use kiya ho, mausam badla ho, ya skin dry ho — ye usually temporary reaction hai jo khud theek ho jaati hai.\n\nDoctor zaruri hai jab:\n- Khujli ek hafte se zyada se chal rahi ho aur improve nahi kar rahi\n- Skin ya aankhon mein yellowness aa rahi ho\n- Raat ko neend poori tarah uchad jaaye\n- Scratch ki jagahon pe infection ke signs hon — pus, swelling, bahut lal hona\n\nTurant hospital jaao agar: khujli ke saath saans lene mein takleef, chehra-honth ki sujan, ya severe dizziness ho — ye severe allergic reaction ke signs hain.`,
    },
    {
      _key: 'faq2',
      faqType: 'duration',
      question: 'Poore sharir mein khujli kitne din tak rehti hai?',
      answer: `Ye cause pe depend karta hai.\n\nSimple trigger se — naya soap, dry mausam, mild contact allergy — khujli 2 se 5 din mein khud theek ho jaati hai jab trigger hat jaaye.\n\nAllergic reaction (urticaria type) mein: individual hives 24 ghante mein resolve hote hain lekin naye aa sakte hain — cycle 1-2 hafte chal sakti hai.\n\nUnderlying skin condition (eczema, psoriasis) mein: flare-up hafte bhar chal sakta hai — proper treatment ke bina theek nahi hota.\n\nAgar 2 hafte se zyada chal rahi hai aur koi obvious cause nahi — doctor se milna zaroori hai.`,
    },
    {
      _key: 'faq3',
      faqType: 'common-cause',
      question: 'Poore sharir mein khujli ka sabse common karan kya hai?',
      answer: `India mein dermatology practice mein sabse zyada cases in wajahaat se aate hain:\n\n1. Dry skin — especially sardi mein ya AC mein rehne wale logon mein\n2. Contact allergy — naya soap, detergent, synthetic kapda\n3. Heat rash — garm aur humid mausam mein (India mein April-June)\n4. Allergic reaction — khaane ya dawai se\n\nSkin conditions mein sabse common: eczema, urticaria, aur fungal infections.\n\nBina rash ke persist karne wali khujli mein — liver, thyroid, ya blood disorders rule out karna zaroori hai.`,
    },
    {
      _key: 'faq4',
      faqType: 'duration',
      question: 'Raat ko poore sharir mein khujli kyun badhti hai?',
      answer: `Raat ko khujli ka badhna sirf imagination nahi — iska biological reason hai.\n\nRaat ko body temperature thodi badhti hai — jo skin ki nerve endings ko zyada sensitive banata hai. Cortisol — body ka natural anti-inflammatory hormone — raat ko naturally low hota hai. Kam cortisol matlab kam natural anti-itch protection.\n\nScabies mein ye pattern sabse zyada marked hota hai — raat ko extreme khujli scabies ka hallmark sign hai. Eczema mein bhi raat ko significant worsening hota hai. Agar raat ki khujli bahut intense hai aur ghar ke doosre logon ko bhi ho rahi hai — scabies rule out zaroor karo.`,
    },
    {
      _key: 'faq5',
      faqType: 'normal-vs-serious',
      question: 'Bina rash ke poore badan mein khujli kyun hoti hai?',
      answer: `Bina rash ke generalized khujli aksar andar ke causes ki taraf point karti hai, skin ki surface pe nahi.\n\nCommon reasons:\n- Dry skin — skin pe kuch nahi dikhta lekin nerve endings exposed hoti hain\n- Liver disease — bile salts blood mein accumulate hote hain\n- Chronic kidney disease — uremic toxins ka effect\n- Thyroid imbalance — hypothyroidism skin ko dry aur sensitive banata hai\n- Iron deficiency (anemia)\n- Anxiety ya stress\n\nAgar bina rash ke khujli 2 hafte se zyada chal rahi hai — blood tests zaroor karwao. CBC, liver function, thyroid, aur blood sugar — ye basic panel hai.`,
    },
    {
      _key: 'faq6',
      faqType: 'homeopathy',
      question: 'Kya homeopathy poore sharir ki khujli mein kaam karta hai?',
      answer: `Seedha jawab: Depends karta hai — kis wajah se khujli hai aur kab se hai.\n\nJahan homeopathy zyada relevant hai:\n- Baar baar aane wali khujli jisme pattern clearly hai\n- Chronic skin conditions — eczema, urticaria, psoriasis — jahan long-term management zaroori hai\n- Jab koi obvious external trigger nahi hai — systemic cause suspected ho\n- Pregnancy ya bachon mein jab conventional options limited hon\n\nHomeopathy ka approach ye hai ki khujli ke specific character ko — kab hoti hai, kaise hoti hai, kya se better ya worse hoti hai — use detailed treatment selection mein use kiya jaata hai.\n\nResults individual hote hain. Detailed consultation se hi pata chalega ki aapke specific case mein ye approach kitni helpful hogi.`,
    },
    {
      _key: 'faq7',
      faqType: 'pregnancy',
      question: 'Pregnancy mein poore sharir mein khujli normal hai kya?',
      answer: `Pregnancy mein mild khujli — especially pet aur breast area pe jahan skin stretch hoti hai — common aur normal hai.\n\nLekin: poore body mein intense khujli — specially haathon ki hatheli aur pairon ke tale pe — Intrahepatic Cholestasis of Pregnancy (ICP) ka sign ho sakti hai. Ye ek liver condition hai jo pregnancy mein hoti hai aur baby ke liye risk factor ho sakta hai.\n\nICP mein koi rash nahi hota — sirf intense itching, especially raat ko.\n\nPregnancy mein kisi bhi persistent ya intense generalized khujli ko ignore mat karo — apne OB-GYN se milein aur liver function test karwao.`,
    },
    {
      _key: 'faq8',
      faqType: 'bacchon-mein',
      question: 'Bacchon mein poore sharir mein khujli kyun hoti hai?',
      answer: `Bacchon mein sabse common causes:\n\n- Dry skin: Especially sardi mein — bacchon ki skin adults se zyada sensitive hoti hai\n- Scabies: School ya daycare se spread hoti hai — raat ko extreme khujli, fingers ke beech typical pattern\n- Chickenpox: Saath mein fever aur characteristic fluid-filled blisters\n- Eczema: Usually 2-5 saal ki umar mein shuru hoti hai — dry, red, scaly patches ke saath khujli\n- Allergic reaction: Naya khaana, kapda, ya soap\n\nAlert kab hona chahiye: Agar poore family mein ya class ke doosre bachon mein bhi khujli aa rahi hai — scabies strongly suspect karo.`,
    },
    {
      _key: 'faq9',
      faqType: 'test-diagnosis',
      question: 'Poore sharir mein khujli mein kaunsa test karwana chahiye?',
      answer: `Test cause pe depend karta hai. Sab ek saath nahi karwane chahiye — doctor clinical examination ke baad guide karega.\n\nAgar khujli 2 hafte se zyada hai aur cause nahi pata:\n- CBC (Complete Blood Count) — anemia ya blood disorders\n- Liver function tests (LFT)\n- Thyroid profile (TSH, T3, T4)\n- Fasting blood sugar — diabetes\n- Serum creatinine — kidney function\n- IgE level — overall allergic tendency\n\nSkin-specific tests:\n- Patch test — contact allergy identify karna\n- Skin scraping — scabies ya fungal infection confirm karna\n\nSabse pehle: Doctor se milein. Wo decide karega kaunsa test zaruri hai aapke specific presentation ke liye.`,
    },
    {
      _key: 'faq10',
      faqType: 'baar-baar',
      question: 'Poore sharir mein khujli baar baar kyun aata hai?',
      answer: `Baar baar aana — theek hoti hai, kuch hafte baad wapas — iska matlab hai ki underlying trigger abhi bhi active hai.\n\nCommon reasons:\n- Untreated skin condition — eczema, psoriasis jo flare-up karte rehte hain\n- Ongoing allergen exposure — ghar mein dust mites, pet dander, specific foods jo chhute nahi\n- Chronic internal condition — liver ya thyroid jo consistently unmanaged hai\n- Stress pattern — agar stressful periods ke saath khujli aati hai consistently\n\nIs pattern ke liye zaruri hai:\n1. Trigger diary rakhna — jab khujli aayi, tab kya khaaya, kya stress tha, kya badla\n2. Doctor se underlying cause rule out karwana\n3. Agar skin condition hai — proper long-term management plan`,
    },
    {
      _key: 'faq11',
      faqType: 'permanent',
      question: 'Poore sharir mein khujli se permanent relief kaise milegi?',
      answer: `"Permanent cure" ka vaada koi bhi system honestly nahi kar sakta — aur koi kare to doubt karo.\n\nJo realistic hai:\n- Cause identify ho jaaye to trigger avoidance se most cases mein frequency bahut kam ho jaati hai\n- Chronic skin conditions (eczema, psoriasis) mein "remission" possible hai — active disease nahi rehti lekin management ongoing rehti hai\n- Allergy-based khujli mein — allergen identify aur avoid karne ke baad substantial improvement hoti hai\n\nHomeopathy mein is pattern ke liye: Constitutional treatment — sirf symptom nahi, pura patient — approach hai. Kuch patients mein flare-ups ki frequency aur intensity significantly reduce hoti hai waqt ke saath. Ye gradual process hai.\n\nJo clear hai: Sirf symptom suppress karte rehna — bina cause address kiye — long-term mein kaam nahi karta.`,
    },
    {
      _key: 'faq12',
      faqType: 'india-specific',
      question: 'Garam paani se nhaane ke baad khujli kyun badhti hai?',
      answer: `Ye India mein bahut common complaint hai — aur iska seedha biological explanation hai.\n\nGaram paani do kaam karta hai jo khujli badhata hai:\n1. Skin ki natural oils (sebum) strip ho jaati hain — protective barrier toot jaati hai, nerve endings expose hoti hain\n2. Blood vessels dilate hoti hain — histamine release trigger hoti hai — especially allergy-prone ya eczema patients mein\n\nSolution:\n- Lukewarm ya thanda paani use karo — garam nahi\n- Nhaane ka time kam karo — 5-10 minute enough hai\n- Nahane ke fauran baad (2-3 minute ke andar) unscented moisturizer lagao\n\nEk interesting note: Agar garm paani se contact pe khujli bahut intense hoti hai — polycythemia vera rule out karna worth it hai. Ye rare hai lekin ye specific pattern iska hallmark hai.`,
    },
  ],

  // Related Symptoms (pages abhi nahi hain — future mein banenge)
  relatedSymptoms: [
    { _key: 'rs1', name: 'Skin Rash',        hindiName: 'Twacha Pe Daane',   slug: 'skin-rash'       },
    { _key: 'rs2', name: 'Dry Skin',          hindiName: 'Rookhi Twacha',     slug: 'dry-skin'        },
    { _key: 'rs3', name: 'Hives / Urticaria', hindiName: 'Pitthi / Chhapaki', slug: 'hives-urticaria' },
    { _key: 'rs4', name: 'Scalp Itching',     hindiName: 'Sir Ki Khujli',     slug: 'scalp-itching'   },
  ],

  // Sources
  sources: [
    { _key: 's1', name: 'Mayo Clinic — Itching (Pruritus): Symptoms & Causes', year: '2024', url: 'https://www.mayoclinic.org/symptoms/itching/basics/definition/sym-20050594' },
    { _key: 's2', name: 'NCBI / PubMed — Pruritus: Progress Toward Pathogenesis and Treatment', year: '2021', url: 'https://pubmed.ncbi.nlm.nih.gov/35483929/' },
    { _key: 's3', name: 'NHS — Itching', year: '2023', url: 'https://www.nhs.uk/conditions/itching/' },
    { _key: 's4', name: 'WHO — Skin Conditions Overview', year: '2023', url: 'https://www.who.int/news-room/fact-sheets/detail/skin-conditions' },
  ],

  quickFactSymptom: 'Poore sharir ki khujli ka medical term "Generalized Pruritus" hai',
  quickFactIndiaStats: 'WHO ke anusar 7-8% adults kisi na kisi point pe generalized itching se affect hote hain',
  quickFactDoctorWhen: 'Agar khujli 2 hafte se zyada ho ya bina rash ke ho — blood tests zaroori',
  reviewDate: 'May 2026',

  doctorNote: 'Maine apni practice mein dekha hai ki poore badan ki khujli ke jo patients aate hain, unme se bahut zyada log mahino se sirf cream ya antihistamine se manage karte aa rahe hain — bina cause jaane. Jab detailed case history lete hain — kab hoti hai, kaise hoti hai, kya khaaya, stress pattern kya hai — tab aksar clear hota hai ki allergy hai, liver mein kuch hai, ya ek chronic skin condition hai jo address nahi hui. Homeopathy mein is symptom ke liye constitutional assessment hi treatment ko effective banati hai — sirf "khujli ki medicine" se lasting results nahi aate.',
}

async function seed() {
  console.log('🌱 Seeding Itching All Over Body symptom page...')
  await client.createOrReplace(doc)
  console.log('✅ Symptom seeded — homeopedia.in/symptoms/itching-all-over-body')
}

seed().catch(console.error)
