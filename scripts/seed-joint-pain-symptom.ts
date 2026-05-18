import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'symptom-joint-pain',
  _type: 'symptom',

  name: 'Joint Pain',
  hindiName: 'Jodo Mein Dard',
  hinglishName: 'Jodo Ka Dard',
  slug: { _type: 'slug', current: 'joint-pain' },
  bodySystem: 'Joints',

  metaTitle: 'Joint Pain in Hindi — Karan, Ilaaj aur Homeopathy | Homeopedia',
  metaDescription: 'Jodo mein dard (joint pain) ke karan, severity aur ghar pe safe steps — simple Hinglish mein. Verified info, Dr. Shadab reviewed.',
  publishedAt: new Date('2026-05-18').toISOString(),

  whatIsThis: `Subah uthte hi jodo mein ek ajeeb si akdahat — seedha chalte waqt ghutne mein dard, ya haath uthate waqt kandhe mein cheek. Jodo mein dard (joint pain) ek aisi takleef hai jo aapki rozaana ki zindagi ko dheere dheere mushkil bana deti hai — seedha baithna, seedha uthna, seedha chadna — sab affect hone lagta hai.

Body ke do hadon ke beech jahan junction hota hai — wahan ki cartilage, ligaments ya fluid mein koi problem ho to ye dard shuru hota hai. Ye sirf buzurgon ka masla nahi — India mein young adults bhi tezi se is problem se pareshaan ho rahe hain.

Ye page aapko 2 minute mein batayega — aapka dard ghar pe manage ho sakta hai ya doctor ke paas jaana zaroori hai.`,

  indiaContext: 'WHO ke anusaar India mein arthritis aur joint-related conditions 18 crore se zyada logon ko affect karti hain — ye duniya mein disability ka ek bada karan hai. Khud jodo ka dard ek symptom hai jo in sab conditions mein common hai.',
  indiaContextSource: 'World Health Organization — Musculoskeletal Conditions | 2023',

  severityLevel1: [
    'Dard sirf ek specific movement mein hota hai — rest pe band ho jaata hai',
    'Swelling nahi hai, sirf halki si akdahat hai — khaaskar subah uthke',
    'Kal zyada kaam ya exercise ki thi — fatigue-type dard hai',
    '1-2 din se hai, koi aur sign nahi',
  ],
  severityLevel2: [
    'Ek ya zyada joints mein sujan (swelling) dikh rahi hai',
    'Akdahat 30 minute se zyada rehti hai subah uthke',
    'Dard ek hafte se zyada se hai aur theek nahi ho raha',
    'Bukhaar (100°F tak) ke saath jodo mein dard aa raha hai',
    'Chalne ya roz ke kaam mein dikkat ho rahi hai',
  ],
  severityLevel3: [
    'Joint mein ek dum severe pain aur laal rang — achanak — turant hospital',
    'Bukhaar (102°F+) ke saath ek joint mein intense dard aur sujan — turant hospital',
    'Seene mein dard ya saans lene mein takleef ke saath jodo mein dard — turant hospital',
    'Koi injury ke baad joint mein dard aur shape change ho gayi — turant hospital',
    'Haath ya pair mein feeling/numbness ke saath dard — turant hospital',
  ],

  timeline3Days: 'Aksar koi injury, zyada kaam, ya viral infection ke baad aisa hota hai. Body ki natural inflammatory response chal rahi hoti hai. Rest karo, aur Level 1 signs mein rakho. Agar teen din mein better nahi hua ya Level 2 signs aa gaye — doctor ke paas jaana zaroori hai.',
  timeline4Weeks: 'Ek hafte se zyada ka joint pain signal deta hai ki koi underlying cause hai — sirf rest se solve nahi hoga. Is stage pe doctor se milna zaroori hai taki sahi diagnosis ho sake. Ignore karna iss stage pe condition ko aur serious bana sakta hai.',
  timelineMonthPlus: 'Mahine bhar se zyada ka jodo ka dard chronic category mein aata hai. Is stage pe ek qualified doctor se proper diagnosis aur long-term management plan chahiye. Homeopathy chronic joint conditions mein root cause approach se kaam karti hai — ye stage iske liye suitable hai, lekin pehle diagnosis zaruri hai.',

  lifestyleCauses: [
    {
      _key: 'lc1',
      causeName: 'Overuse ya Repetitive Strain',
      mechanism: 'Jab aap ek hi joint ko baar baar ek hi tarike se use karte ho — jaise office mein ghanton tak typing karna, ya daily ek hi angle pe kaam karna — to joint ke aaspaas ki cartilage aur tendons pe constant microtrauma hota rehta hai. Gradually ye inflammation mein badal jaata hai.',
      howToIdentify: 'Dard sirf ek specific side ya movement mein hota hai. Kaam band karo to better hota hai.',
    },
    {
      _key: 'lc2',
      causeName: 'Mota Hona (Obesity)',
      mechanism: 'Body ka zyada weight directly ghutne (knee) aur kamar (hip) ke joints pe padta hai. Normal chalte waqt ghutne pe body weight ka 3-5 guna load aata hai — matlab agar aap 10 kg zyada hain, ghutna 30-50 kg extra utha raha hai. Is pressure se cartilage tezi se wear hoti hai.',
      howToIdentify: 'Ghutne ya kamar ka dard — khade hone pe, seedha chalte pe zyada. Baith ke aaram mile.',
    },
    {
      _key: 'lc3',
      causeName: 'Kam Paani Peena (Dehydration)',
      mechanism: 'Joint ke andar synovial fluid hoti hai jo cushion ki tarah kaam karti hai. Ye fluid 80% paani se bani hoti hai. Jab body dehydrated hoti hai, ye fluid kam ho jaati hai — joints mein direct bone-on-bone jaisi sensation shuru hoti hai aur friction badhta hai.',
      howToIdentify: 'Subah zyada akdahat, din mein thodi better. Paani peene ke baad kuch ghanton mein thoda fark mehsoos ho.',
    },
    {
      _key: 'lc4',
      causeName: 'Vitamin D aur Calcium Ki Kami',
      mechanism: 'Vitamin D bones mein calcium absorb karne mein help karta hai. India mein, khaaskar jo log ghar ya office mein zyada rehte hain — dhoop nahi milti — unme vitamin D deficiency common hai. Is kami se bones weak hoti hain aur joints mein dard hota hai jo arthritis jaisa lagta hai.',
      howToIdentify: 'Poore sharir ke joints mein dard — ek jagah tak limited nahi. Thakaan bhi saath hoti hai. Blood test mein vitamin D low aata hai.',
    },
  ],

  medicalCauses: [
    {
      _key: 'mc1',
      diseaseName: 'Arthritis (Gathiya)',
      diseaseHindiName: 'Gathiya Bai / Jodo Ki Sujan',
      howSymptomPresents: 'Arthritis ek broad term hai — isme joints mein chronic inflammation hoti hai. Dard constant rehta hai, sujan dikhti hai, aur waqt ke saath joint ka shape change ho sakta hai.',
      howToIdentify: 'Dard sirf ek ya do main joints mein hota hai, aur subah akdahat 30 minute se zyada rehti hai.',
      homeopediaSlug: 'arthritis',
      isAvailable: true,
    },
    {
      _key: 'mc2',
      diseaseName: 'Gout (Vaat Rog)',
      diseaseHindiName: 'Vaat Rog / Uric Acid Ka Dard',
      howSymptomPresents: 'Gout mein uric acid crystals joints mein jam jaate hain — khaaskar bade anguthe ya ankle mein. Dard bahut achanak aata hai, intense hota hai, aur joint laal aur garam ho jaati hai.',
      howToIdentify: 'Raat ko achanak uthta hai, ek joint mein intense burning-type dard, laalipan. Red meat ya alcohol ke baad zyada.',
      homeopediaSlug: 'gout',
      isAvailable: true,
    },
    {
      _key: 'mc3',
      diseaseName: 'Rheumatoid Arthritis (RA)',
      diseaseHindiName: 'Vaat Rakta / Gathiya Ki Severe Form',
      howSymptomPresents: 'Ye ek autoimmune condition hai — body ki immune system khud apne joints pe attack karti hai. Dono haath ya dono pair ke joints symmetrically affect hote hain. Subah ki akdahat 1 ghante se zyada rehti hai.',
      howToIdentify: 'Symmetrical joints — matlab dono haath ke same knuckles. Thakaan, halka bukhaar bhi ho sakta hai.',
      homeopediaSlug: 'rheumatoid-arthritis',
      isAvailable: true,
    },
    {
      _key: 'mc4',
      diseaseName: 'Osteoarthritis (OA)',
      diseaseHindiName: 'Hadon Ka Ghisaav',
      howSymptomPresents: 'Ye wear-and-tear type arthritis hai — cartilage dheere dheere ghisti hai. 45+ age mein zyada common. Ghutne, kamar, haath ki ungliyan zyada affect hoti hain.',
      howToIdentify: 'Dard activity se badhta hai, rest pe better. Joint mein "crunching" ya "clicking" sound aa sakti hai.',
      homeopediaSlug: 'osteoarthritis',
      isAvailable: true,
    },
  ],

  redFlags: [
    'Septic Arthritis (Joint Infection) — agar ek joint mein intense dard ke saath bukhaar 102°F+ ho aur joint garam lage to turant hospital — ye emergency hai',
    'Lupus (SLE) — agar multiple joints ke saath skin rash (khaaskar chehra), baal girna aur thakaan ho saath mein to specialist zaruri',
    'Lyme Disease — agar tick bite ka history ho aur joint pain ke saath sirkular rash, bukhaar ho to doctor se seedha milein',
  ],

  homeSteps: [
    {
      _key: 'hs1',
      action: 'RICE Method — Rest, Ice, Compression, Elevation',
      whyItWorks: 'Naye ya suddenly aaye joint pain mein — pehle 48 ghante RICE best hai. Ice pack (kapde mein lapetke) 15-20 min rakhne se local inflammation kam hoti hai. Affected joint ko thoda upar rakhne se blood pooling kam hoti hai aur swelling reduce hoti hai.',
    },
    {
      _key: 'hs2',
      action: 'Halki, Gentle Movement',
      whyItWorks: 'Bilkul bed pe letna bhi nahi chahiye — complete rest se joints aur stiff ho jaate hain. Halki range-of-motion movement (jaise haath dheere dheere ghumana ya ankles ghoomana bina dard ke) synovial fluid ko circulate karti hai jo joints ko naturally lubricate karta hai.',
    },
    {
      _key: 'hs3',
      action: 'Warm Compress — Chronic Dard Ke Liye',
      whyItWorks: 'Ice acute (nayi) injury ke liye, warm compress chronic dard ke liye. Garam sek se blood circulation badhti hai aur muscles relax hoti hain — joint ke aaspaas ki tightness kam hoti hai.',
    },
    {
      _key: 'hs4',
      action: 'Supportive Footwear Aur Seating Position',
      whyItWorks: 'Galat footwear ya zyada der tak galat posture mein baithna joint pe extra load dalta hai. Ghutne ya kamar ke dard mein flat footwear avoid karo — thodi heel comfortable hoti hai. Baithe waqt back supported rakho.',
    },
    {
      _key: 'hs5',
      action: 'Adequate Rest Aur Sleep',
      whyItWorks: 'Body ki repair maximum neend mein hoti hai. Joint inflammation raat ko naturally repair cycle se guzarti hai. 7-8 ghante ki quality neend chronic joint pain mein significant difference karti hai waqt ke saath.',
    },
  ],

  homeopathyIndividualization: `Jodo ka dard ka naam ek hai — lekin har insaan ka dard bilkul alag hota hai. Kisi ka dard subah uthke zyada hota hai — chalte chalte better hota hai. Kisi ka dard zyada chalte waqt badhta hai — rest pe better. Kisi ka dard garmi mein theek lagta hai, kisi ka thandi se. Homeopathy mein aapka ye specific pattern — kab badhta hai, kab ghata hai, kaunse joint mein, kaisa dard hai — ye sab milake aapka individual treatment decide hota hai. Do logon ko arthritis ho sakti hai — aur unka treatment bilkul alag ho sakta hai.`,

  homeopathyRootCause: `Baar baar aane waala ya chronic joint pain aksar sirf joint ka nahi — deeper metabolic ya immune imbalance ka sign hota hai. Homeopathy mein goal sirf dard band karna nahi hota — jo process isko trigger kar rahi hai usse address kiya jaata hai. Waqt ke saath dard ki frequency aur intensity dono mein fark aata hai. Research is area mein limited hai aur results individual hote hain — lekin chronic cases mein ye approach ek genuine alternative deti hai.`,

  homeopathySafety: `Elderly patients mein — jahan kai doosri medicines already chal rahi hain — ya jab long-term treatment zaruri ho, homeopathy ek safe complementary option hai. Highly diluted medicines hone ki wajah se drug interactions ki tension nahi hoti. Iska matlab ye nahi ki conventional treatment band karo — dono saath chal sakte hain. Severe cases, joint infection, ya emergency situations mein conventional emergency treatment pehle. Homeopathy complementary role mein hai — replacement nahi.`,

  isForYouIf: [
    'Aap root cause treat karna chahte hain — sirf dard killers pe depend nahi rehna',
    'Aapko long-term, sustainable relief chahiye — ek din mein nahi, lekin lasting',
    'Aap kai medicines pe hain aur safe complementary option chahiye',
    'Aapka dard chronic hai aur conventional treatment ke saath extra help chahiye',
  ],

  notForYouIf: [
    'Aapko abhi isi waqt intense pain relief chahiye — pehle doctor se pain management karo, homeopathy baad mein saath chala sakte hain',
    'Joint infection (Septic Arthritis) ya koi surgical condition hai — pehle specialist, phir complementary treatment',
  ],

  homeopathyDiseaseLinks: [
    { _key: 'hdl1', diseaseName: 'Arthritis (Gathiya) ka poora ilaaj',        diseaseSlug: 'arthritis'           },
    { _key: 'hdl2', diseaseName: 'Gout (Vaat Rog / Uric Acid) ka poora ilaaj', diseaseSlug: 'gout'               },
    { _key: 'hdl3', diseaseName: 'Rheumatoid Arthritis ka poora ilaaj',        diseaseSlug: 'rheumatoid-arthritis' },
    { _key: 'hdl4', diseaseName: 'Osteoarthritis ka poora ilaaj',              diseaseSlug: 'osteoarthritis'      },
  ],

  linkedDiseaseCards: [
    { _key: 'ldc1', title: 'Arthritis',             hindiName: 'Gathiya / Jodo Ki Sujan',    slug: 'arthritis',            isAvailable: true },
    { _key: 'ldc2', title: 'Gout',                  hindiName: 'Vaat Rog / Uric Acid',       slug: 'gout',                 isAvailable: true },
    { _key: 'ldc3', title: 'Rheumatoid Arthritis',  hindiName: 'Gathiya Ki Severe Form',     slug: 'rheumatoid-arthritis', isAvailable: true },
    { _key: 'ldc4', title: 'Osteoarthritis',        hindiName: 'Hadon Ka Ghisaav',           slug: 'osteoarthritis',       isAvailable: true },
  ],

  faqs: [
    {
      _key: 'faq1',
      faqType: 'common-cause',
      question: 'Jodo mein dard ka sabse common karan kya hai?',
      answer: `Jodo mein dard ka sabse common karan hai — Osteoarthritis (cartilage ka ghisaav) ya Vitamin D/Calcium ki kami. India mein do zyada common patterns hain: 45+ age mein wear-and-tear se ghutne ya kamar mein dard, aur younger adults mein vitamin D deficiency se poore sharir ke joints mein dard.\n\nLifestyle-related causes mein zyada dair tak baithe rehna, mota hona, aur repetitive movements bhi major role karte hain.\n\nAgar dard ek jagah tak limited hai — to likely ek specific mechanical ya arthritic cause hai. Agar poore sharir ke joints mein hai — to vitamin deficiency ya viral infection check karna zaroori hai.`,
    },
    {
      _key: 'faq2',
      faqType: 'normal-vs-serious',
      question: 'Jodo mein dard kab normal hai aur kab doctor zaroori hai?',
      answer: `Jodo mein dard "normal" tab hota hai jab — kal bahut zyada exercise ki thi, ya koi naya kaam kiya jo body ko use nahi tha — aur ek do din mein apne aap theek ho jaaye.\n\nDoctor zaroori hai jab:\n- Dard ek hafte se zyada ho\n- Sujan (swelling) dikh rahi ho\n- Akdahat 30 minute se zyada subah rehti ho\n- Bukhaar ke saath aaya ho\n- Injury ke baad joint ka shape change lage\n\nIn mein se koi bhi ho to wait mat karo. Agar saans lene mein takleef ke saath joint pain aa raha hai — ye emergency hai, turant hospital jaao.`,
    },
    {
      _key: 'faq3',
      faqType: 'common-cause',
      question: 'Poore sharir ke jodo mein dard kyun hota hai?',
      answer: `Poore sharir ke jodo mein ek saath dard hona — ye usually kisi systemic (pure body ko affect karne wali) wajah se hota hai. Sabse common causes hain:\n- Viral infection (Flu, Chikungunya, Dengue) — aksar bukhaar ke saath\n- Vitamin D ya Calcium ki kami — India mein bahut common\n- Rheumatoid Arthritis — immune system ki problem\n- Fibromyalgia — muscles aur joints dono mein widespread pain\n- Hypothyroidism (thyroid ki problem)\n\nBina kisi ek jagah ke specific dard ke, poore body joints mein pain — blood test se asli karan pata chalta hai. Sirf dard band karne ki koshish karna kafi nahi — diagnosis pehle.`,
    },
    {
      _key: 'faq4',
      faqType: 'duration',
      question: 'Raat ko jodo mein dard kyun badhta hai?',
      answer: `Raat ko jodo mein dard badhna — ye ek specific pattern hai jo kuch conditions mein common hai.\n\nRaat ko body ka cortisol (ek natural anti-inflammatory hormone) level gir jaata hai — isliye jo inflammation din mein control mein thi, raat ko zyada feel hoti hai.\n\nGout mein specifically raat ko achanak intense pain ek joint mein aana classic symptom hai. Osteoarthritis mein bhi raat ko position change na hone se joint stiff ho jaati hai.\n\nAgar raat ka dard neend udaad raha hai ya regularly ho raha hai — ye doctor ko dikhane ka signal hai. Homeopathy mein raat ko badhne wala dard ek important prescribing factor hota hai.`,
    },
    {
      _key: 'faq5',
      faqType: 'baar-baar',
      question: 'Young age mein jodo mein dard kyun hota hai?',
      answer: `Young age (20-35 saal) mein joint pain ka hona normal nahi hai — aur isko ignore bilkul mat karo. Is age mein common causes hain:\n- Vitamin D deficiency — India mein epidemic level pe hai, khaaskar jo indoor jobs karte hain\n- Rheumatoid Arthritis — ye young adults ko bhi hoti hai, khaaskar mahilaon ko\n- Reactive Arthritis — kisi infection ke baad immune response se\n- Overuse injury — gym ya sport se\n- Ankylosing Spondylitis — back aur joints dono mein, young men mein zyada\n\nYoung age mein dard ko "chhota hai, kuch nahi hoga" samajh ke chhodna galat hai. Early diagnosis se long-term joint damage rokna mumkin hai.`,
    },
    {
      _key: 'faq6',
      faqType: 'common-cause',
      question: 'Jodo mein dard aur sujan saath mein kyun hoti hai?',
      answer: `Jab jodo mein dard ke saath sujan (swelling) bhi ho — to ye sirf mechanical problem nahi, inflammation definitely hai. Sujan tab hoti hai jab body us area mein extra fluid aur immune cells bhejti hai — ya joint infection ho, ya autoimmune problem ho, ya injury ho.\n\nRheumatoid Arthritis, Gout, aur Septic Arthritis (joint infection) teeno mein dard ke saath sujan common hai.\n\nEk important distinction: agar swelling ek joint mein hai, laal hai, aur bahut garam hai — ye septic arthritis ya gout ho sakti hai, ye emergency approach mein treat hoti hai. Agar multiple joints mein bilaterally (dono taraf) swelling hai — ye autoimmune condition ka sign hai.\n\nKisi bhi swelling ke case mein doctor se milein.`,
    },
    {
      _key: 'faq7',
      faqType: 'common-cause',
      question: 'Haath aur pair ke jodo mein dard kyun hota hai?',
      answer: `Haath aur pair dono ke joints mein ek saath dard — ye Rheumatoid Arthritis ka classic pattern hai. Is mein choti choti joints (ungliyon ke knuckles) symmetrically — matlab dono haath mein ek saath — affect hoti hain.\n\nIske alawa Psoriatic Arthritis aur Reactive Arthritis bhi haath aur pair dono mein aa sakti hai. Vitamin D deficiency mein bhi kabhi kabhi ye pattern dikhta hai.\n\nAgar ye haath-pair dono pattern hai — blood test (RF Factor, Anti-CCP, Vitamin D) zaroori hai. Sirf pain killer lena enough nahi — underlying cause ka pata lagana important hai.`,
    },
    {
      _key: 'faq8',
      faqType: 'duration',
      question: 'Uthne ke baad jodo mein akdahat kyun hoti hai?',
      answer: `Uthne ke baad jodo mein akdahat (morning stiffness) hona — kitne time tak rehti hai, yahi sabse important question hai.\n\n15-30 minute tak ki stiffness — jo chalte firte theek ho jaaye — ye osteoarthritis ya general dehydration se hoti hai.\n\n30 minute se zyada rehne wali subah ki akdahat — ye Rheumatoid Arthritis ka major diagnostic sign hai.\n\nNeend mein joint fluid circulate nahi hoti — isliye subah akdahat naturally zyada hoti hai. Lekin agar ye 1 ghante se zyada rehti hai, doctor ko dikhana zaroori hai. Homeopathy mein morning stiffness ka pattern — kab better hoti hai, kya karne se — ye important prescribing indicator hai.`,
    },
    {
      _key: 'faq9',
      faqType: 'test-diagnosis',
      question: 'Jodo mein dard mein kaunsa test karwana chahiye?',
      answer: `Joint pain ka sahi diagnosis blood test aur imaging se hota hai. Doctor usually ye tests suggest karte hain:\n- CBC (Complete Blood Count) — infection aur inflammation check\n- ESR aur CRP — inflammation ki intensity\n- RF Factor aur Anti-CCP — Rheumatoid Arthritis ke liye\n- Uric Acid — Gout ke liye\n- Vitamin D aur B12 — deficiency check\n- Thyroid (TSH) — hypothyroidism rule out karne ke liye\n- X-Ray — joint ka structural status\n- Ultrasound ya MRI — zyada detailed view (doctor ki advice pe)\n\nKaunsa test zaruri hai ye symptoms pe depend karta hai — self-testing se pehle doctor se milein.`,
    },
    {
      _key: 'faq10',
      faqType: 'homeopathy',
      question: 'Kya homeopathy jodo ke dard mein kaam karta hai?',
      answer: `Homeopathy joint pain mein — khaaskar chronic cases mein — ek meaningful complementary approach hai. Ye is tarike se kaam karta hai ki sirf symptom ko mask karna goal nahi hota — jo inflammatory ya metabolic process isko trigger kar rahi hai, usse address kiya jaata hai.\n\nResearch is area mein limited hai aur results individual hote hain — ye honestly bolna zaroori hai.\n\nJo cheez homeopathy ko is symptom mein genuinely useful banati hai:\n- Har patient ka joint pain alag hota hai — kisi ka raat ko zyada, kisi ka movement se better — aur ye individuality homeopathic prescription ka core hai\n- Pain killers ka long-term side effect nahi hota\n- Ye conventional treatment ke saath saath chal sakti hai\n\nAgar aapka joint pain chronic hai aur permanent medication se bachna chahte hain — detailed consultation meaningful step hai.`,
    },
    {
      _key: 'faq11',
      faqType: 'permanent',
      question: 'Jodo mein dard se hamesha ke liye kaise chutkara milega?',
      answer: `"Hamesha ke liye theek" ka promise — koi bhi honest system nahi kar sakta, aur koi kare to doubt karo.\n\nJo realistic hai: sahi diagnosis ke baad sahi treatment se joint pain ki frequency aur intensity itni kam ho sakti hai ki life practically normal ho jaaye:\n- Agar cause vitamin deficiency hai — supplement se significant relief sambhav\n- Agar osteoarthritis hai — lifestyle changes + treatment se progression slow ho sakti hai\n- Agar RA hai — early treatment se joint damage rokna sambhav hai\n\nHomeopathy chronic cases mein waqt ke saath improvement deti hai — ek hafte mein nahi, mahino ki consistent treatment se. Realistic goal: dard ki frequency aur intensity mein progressive reduction, aur daily life pe minimal impact.`,
    },
    {
      _key: 'faq12',
      faqType: 'normal-vs-serious',
      question: 'Jodo mein dard aur saans ki takleef saath — kya karna chahiye?',
      answer: `Jodo mein dard ke saath saans lene mein takleef — ye combination turant doctor ko dikhane ka signal hai.\n\nYe do cheezein saath mein ho sakti hain jab heart ya lung problem involve ho — jaise heart disease ya pulmonary hypertension mein joints bhi affect ho sakte hain. Lupus (SLE) ek aur condition hai jo joints aur lungs/heart dono ko affect karti hai.\n\nYe symptom combination LEVEL 3 emergency mein aata hai — ghar pe wait mat karo. Seedha hospital ya emergency department jaao.`,
    },
  ],

  relatedSymptoms: [
    { _key: 'rs1', name: 'Back Pain',         hindiName: 'Kamar Mein Dard',   slug: 'back-pain'         },
    { _key: 'rs2', name: 'Muscle Pain',        hindiName: 'Maanspe Mein Dard', slug: 'muscle-pain'       },
    { _key: 'rs3', name: 'Swelling',           hindiName: 'Sujan',             slug: 'swelling'          },
    { _key: 'rs4', name: 'Morning Stiffness',  hindiName: 'Subah Ki Akdahat',  slug: 'morning-stiffness' },
  ],

  sources: [
    { _key: 's1', name: 'WHO — Musculoskeletal Conditions',            year: '2023', url: 'https://www.who.int/news-room/fact-sheets/detail/musculoskeletal-conditions' },
    { _key: 's2', name: 'Mayo Clinic — Joint Pain: Symptoms & Causes', year: '2024', url: 'https://www.mayoclinic.org/symptoms/joint-pain/basics/causes/sym-20050668' },
    { _key: 's3', name: 'NCBI — Prevalence of Musculoskeletal Disorders in India', year: '2022', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
    { _key: 's4', name: 'NHS UK — Joint Pain',                         year: '2024', url: 'https://www.nhs.uk/conditions/joint-pain/' },
  ],

  quickFactSymptom: 'Jodo mein dard sirf buzurgon ka nahi — India mein 30% adults under 45 mein bhi ye complaint common ho gayi hai.',
  quickFactIndiaStats: 'WHO ke anusaar India mein 18 crore se zyada log musculoskeletal conditions se affected hain — joint pain sabse common complaint hai.',
  quickFactDoctorWhen: 'Agar joint pain ek hafte se zyada ho, sujan ho, ya bukhaar ke saath aaye — wait mat karo.',
  reviewDate: 'May 2026',

  doctorNote: 'Maine apni clinic mein dekha hai ki joint pain ke patients ka ek bahut common pattern hai — wo pehle pain killer khaate rehte hain mahino tak, aur jab relief nahi milti tab aate hain. Tab tak condition aur complex ho chuki hoti hai. Homeopathy mein most effective cases wo hain jo early stage mein aate hain — jahan constitution assess karke root cause pe kaam hota hai. Gout ke patients mein diet change ke saath constitutional treatment milata hun — to results bahut faster aate hain sirf medicine se zyada.',
}

async function seed() {
  console.log('🌱 Seeding Joint Pain symptom page...')
  await client.createOrReplace(doc)
  console.log('✅ Symptom seeded — homeopedia.in/symptoms/joint-pain')
}

seed().catch(console.error)
