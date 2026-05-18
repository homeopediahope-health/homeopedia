import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'symptom-dandruff',
  _type: 'symptom',

  name: 'Dandruff',
  hindiName: 'रूसी (Rusi)',
  hinglishName: 'Dandruff / Rusi',
  slug: { _type: 'slug', current: 'dandruff' },
  bodySystem: 'Skin',

  metaTitle: 'Dandruff in Hindi — Rusi Ke Karan Aur Homeopathy | Homeopedia',
  metaDescription: 'Dandruff (rusi) ke karan, severity aur ghar pe safe steps — simple Hinglish mein. Verified info, Dr. Shadab reviewed.',
  publishedAt: new Date('2026-05-19').toISOString(),

  whatIsThis: `Subah uthke pillow pe ya kaandhon pe safed safed teri (flakes) — ye pehli cheez hai jo dandruff wale patient ko notice hoti hai. Koi dard nahi, koi badi bimari ka darr nahi — bas ek annoying, embarrassing cheez jo khatam hi nahi hoti.

Dandruff, jise Hindi mein रूसी (rusi) kehte hain, India mein scalp ki sabse common problem hai.

Ye page aapko 2 minute mein batayega: aapka dandruff kyun ho raha hai, serious hai ya nahi, aur aage kya karna chahiye.`,

  indiaContext: 'India mein approximately 50% adults apni life mein kisi na kisi point pe dandruff se pareshaan hote hain. Sardi ke mahine aur pollution wale sheher — dono mein ye zyada common hai.',
  indiaContextSource: 'NCBI — Malassezia and Dandruff: A Pathophysiological Perspective 2015; Indian Dermatology Online Journal — Prevalence of Scalp Disorders in India 2016',

  severityLevel1: [
    'Scalp pe halki safed ya grey teri (flakes) — kaandhon pe dikhti hain',
    'Scalp mein halki khujli — tolerable, raat ko thodi zyada',
    'Koi redness ya sujan nahi scalp pe',
    'Sirf baalon mein dikhta hai — face ya body pe nahi',
  ],
  severityLevel2: [
    'Scalp pe moti moti yellowish ya oily teri — sirf safed nahi',
    'Scalp pe redness aur sujan bhi saath mein hai',
    'Bhaunhon (eyebrows), naak ke aas paas bhi teri aane lagi',
    'Regular shampoo se 4-6 hafte mein koi fark nahi aa raha',
    'Khujli zyada ho gayi hai — neend ya kaam affect ho raha hai',
  ],
  severityLevel3: [
    'Scalp pe bade bade thick patches — skin tight ya cracked lagti hai — dermatologist se milein',
    'Khujli ke saath scalp se paani ya khoon aa raha ho — dermatologist se milein',
    'Baal tezi se girne lage hon saath mein — dermatologist se milein',
    'Poore sharir pe skin problems ek saath shuru ho gayi hon — dermatologist se milein',
  ],

  timeline3Days: 'Dandruff achanak shuru hota hai — mausam badal, new shampoo, ya stress ke wajah se. Is stage mein body ka natural response hai. Ghar pe gentle care karo. Agar 2-3 hafte mein better nahi hua to Level 2 mein aao.',
  timeline4Weeks: 'Agar dandruff ek hafte se zyada ho gaya aur shampoo se relief nahi aa raha — ye signal hai ki koi underlying trigger hai. Is hafte doctor se milein. Seborrheic dermatitis ya scalp psoriasis rule out karna zaroori ho sakta hai.',
  timelineMonthPlus: 'Chronic dandruff ek imbalance ka sign hota hai — scalp skin ka, ya internally bhi. Doctor ya dermatologist se diagnosis zaroori hai. Homeopathy is stage mein root cause address karne ke liye ek sahi complementary option ho sakti hai.',

  lifestyleCauses: [
    {
      _key: 'lc1',
      causeName: 'Dry Scalp (Rookha Sar)',
      mechanism: 'Scalp ki skin, bilkul chehra ki skin ki tarah, moisture maintain karti hai. Sardi mein ya AC wale ghar mein hawa bahut dry ho jaati hai. Scalp ki skin dry hoke choti choti teri ke roop mein ukhad ne lagti hai — ye dandruff ka sabse simple form hai.',
      howToIdentify: 'Teri (flakes) bilkul safed aur barik hoti hain. Scalp khijchti si lagti hai. Naha ke baad ya sardiyon mein zyada hoti hai.',
    },
    {
      _key: 'lc2',
      causeName: 'Zyada Tel Ya Oily Scalp',
      mechanism: 'Scalp mein sebaceous glands tel (sebum) banati hain. Kuch logon mein ye glands zyada active hoti hain — ya purani tel theek se nahi utarti. Is oily environment mein Malassezia naam ka ek natural fungus zyada tezi se badhta hai. Ye fungus skin cells ko tezi se shed karta hai — aur yellowish, chipchipa dandruff banta hai.',
      howToIdentify: 'Flakes yellowish aur thodi oily lagti hain. Scalp jaldi greasy ho jaata hai. Sirf dry scalp wala dandruff nahi — texture alag hoti hai.',
    },
    {
      _key: 'lc3',
      causeName: 'Shampoo Galat Tarike Se Ya Kum Karna',
      mechanism: 'Agar baal baar baar dhoe nahi jaate, to tel, dead skin cells, aur product buildup scalp pe jam jaata hai. Ye yeast ke liye perfect environment banata hai. Ulta — bahut zyada harsh shampoo scalp ki natural oils chheen leta hai, jo aur irritation karta hai.',
      howToIdentify: 'Teri sirf tab zyada hoti hai jab dhone mein gap aa jaata ho. Ya naye shampoo switch ke baad shuru hua ho.',
    },
    {
      _key: 'lc4',
      causeName: 'Stress',
      mechanism: 'Chronic stress body mein cortisol level badhata hai. Cortisol skin ki inflammation ko regulate karne ki capacity ko affect karta hai — scalp ka immune response kamzor ho jaata hai. Malassezia fungus is situation mein zyada badhta hai.',
      howToIdentify: 'Exam time, job pressure, ya kisi emotional situation ke baad dandruff achanak badh gaya ho — ye stress-triggered dandruff hai.',
    },
  ],

  medicalCauses: [
    {
      _key: 'mc1',
      diseaseName: 'Seborrheic Dermatitis',
      diseaseHindiName: 'Seborrik Jild Ki Bimari',
      howSymptomPresents: 'Ye dandruff ka ek serious form hai. Sirf scalp nahi — chehra (naak ke kinare, bhaunhein, kaan ke peeche) bhi affected hota hai. Flakes moti, yellowish, aur oily hoti hain. Redness bhi hoti hai.',
      howToIdentify: 'Agar dandruff sirf sar pe nahi — face pe bhi hai, aur redness ke saath hai — to simple dandruff nahi, seborrheic dermatitis ho sakti hai.',
      homeopediaSlug: '',
      isAvailable: false,
    },
    {
      _key: 'mc2',
      diseaseName: 'Psoriasis (Chambal — Scalp Type)',
      diseaseHindiName: 'Sar Ki Chambal',
      howSymptomPresents: 'Scalp psoriasis mein thick, silvery white patches hote hain — sirf teri nahi. Skin kaafi dry aur cracked ho sakti hai. Hairline pe, kaano ke peeche, aur gardan pe bhi patches aa sakte hain.',
      howToIdentify: 'Teri sirf soft nahi — thick aur cheenti hoti hain. Khujli bahut zyada ho sakti hai. Nakhun se khurachne par thick layer utarti hai.',
      homeopediaSlug: 'psoriasis',
      isAvailable: true,
    },
    {
      _key: 'mc3',
      diseaseName: 'Dandruff (Chronic / Recurrent)',
      diseaseHindiName: 'Baar Baar Aane Wali Rusi',
      howSymptomPresents: 'Baar baar aane wala dandruff jo kisi bhi shampoo se permanently control nahi hota — ye Malassezia fungus ke imbalance ka chronic form ho sakta hai jisme dermatologist se diagnosed treatment zaroori hai.',
      howToIdentify: 'Medicated shampoo se temporarily theek hota hai — band karo to wapas aata hai. Scalp pe mild redness bhi rehti hai.',
      homeopediaSlug: 'dandruff',
      isAvailable: true,
    },
  ],

  redFlags: [
    'Scalp Psoriasis — agar scalp pe thick silvery patches hain aur kaafi zyada khujli hai to sirf dandruff nahi — dermatologist se milein.',
    'Contact Dermatitis — naye hair dye ya chemical product ke baad teri ke saath jalan aur redness shuru ho to turant product band karo aur doctor dikhao.',
    'Fungal Infection (Tinea Capitis) — agar bacche mein dandruff ke saath baal girne lage aur scalp pe gol patches dikhen — ye ringworm ho sakta hai, turant doctor zaroori.',
  ],

  homeSteps: [
    {
      _key: 'hs1',
      action: 'Scalp Ko Gentle Massage Do',
      whyItWorks: 'Halki ungli se circular motion mein massage karne se blood circulation badhta hai. Dead skin cells naturally dhile pdte hain — shampoo karte waqt asaani se nikalti hain.',
    },
    {
      _key: 'hs2',
      action: 'Shampoo Ka Tarika Sahi Karo',
      whyItWorks: 'Shampoo sirf baalon pe nahi — scalp pe lagao aur 2-3 minute chhodo. Achhe se rinse karo — koi bhi residue scalp pe mat rehne do. Incomplete rinse dandruff ka ek common hidden cause hai.',
    },
    {
      _key: 'hs3',
      action: 'Garam Paani Ki Jagah Lukewarm Paani Use Karo',
      whyItWorks: 'Bahut garam paani scalp ki natural oils kho deta hai, jisse scalp aur dry ho jaati hai — aur dandruff cycle shuru hota hai. Lukewarm ya thanda paani scalp ki moisture balance maintain karta hai.',
    },
    {
      _key: 'hs4',
      action: 'Tight Scarves Ya Caps Seedha Scalp Pe Mat Rakho',
      whyItWorks: 'Scalp ko breathe karne ki zaroorat hai. Synthetic fabric ke tight head coverings se scalp pe humidity aur sweat trap hoti hai — yeast ke liye perfect environment. Loose, cotton kapda use karo agar covering zaroori ho.',
    },
  ],

  homeopathyIndividualization: `Dandruff ka naam ek hai — lekin har insaan ki dandruff alag hoti hai. Kisi ki dry aur barik hoti hai, kisi ki oily aur chipchapi. Kisi ko sardi mein badhti hai, kisi ko garmi mein. Kisi ko stress mein zyada ho jaati hai. Homeopathy mein sirf "dandruff" nahi dekha jaata — aapki dandruff kaise hai, kab badhti hai, kya se better hoti hai — ye sab milke aapka treatment decide karta hai. Isliye do logon ko ek hi symptom mein bilkul alag medicines ho sakti hain.`,

  homeopathyRootCause: `Baar baar aane wala dandruff aksar sirf scalp ka nahi — ek deeper imbalance ka signal hota hai. Homeopathy mein sirf flakes band karna goal nahi — jo cheez isko baar baar la rahi hai, wajah chahe stress ho, digestive issue ho, ya skin immunity — usse address kiya jaata hai. Waqt ke saath dandruff ki frequency aur intensity dono kam hoti hain. Research is area mein limited hai aur results individual hote hain.`,

  homeopathySafety: `Homeopathy highly diluted medicines use karti hai — practically side-effect free approach hai. Isliye ye bacchon mein bhi aur skin-sensitive logon mein bhi safely use ho sakti hai jo harsh chemical shampoos se pareshan hain. Severe scalp infections ya suspected psoriasis mein conventional dermatologist treatment pehle. Homeopathy complementary role mein kaam karti hai — replacement nahi.`,

  isForYouIf: [
    'Aap root cause treat karna chahte hain — sirf shampoo se manage nahi karna',
    'Aapko baar baar dandruff aata hai aur koi shampoo permanently kaam nahi karta',
    'Aap chemical-free, side-effect free option prefer karte hain',
  ],

  notForYouIf: [
    'Aapko ek-do din mein event ke liye quick fix chahiye — medicated shampoo faster option hai, homeopathy ke saath baad mein start karo',
    'Scalp pe koi serious infection ya wounds hain — pehle dermatologist se milein, homeopathy recovery mein saath chal sakti hai',
  ],

  homeopathyDiseaseLinks: [
    { _key: 'hdl1', diseaseName: 'Dandruff ka poora ilaaj',          diseaseSlug: 'dandruff'  },
    { _key: 'hdl2', diseaseName: 'Psoriasis (Chambal) ka poora ilaaj', diseaseSlug: 'psoriasis' },
  ],

  linkedDiseaseCards: [
    { _key: 'ldc1', title: 'Seborrheic Dermatitis', hindiName: 'Seborrik Jild Ki Bimari', slug: '',          isAvailable: false },
    { _key: 'ldc2', title: 'Psoriasis',             hindiName: 'Sar Ki Chambal',          slug: 'psoriasis', isAvailable: true  },
    { _key: 'ldc3', title: 'Dandruff (Chronic)',    hindiName: 'Baar Baar Aane Wali Rusi', slug: 'dandruff',  isAvailable: true  },
  ],

  faqs: [
    {
      _key: 'faq1',
      faqType: 'common-cause',
      question: 'Dandruff kyun hota hai — asli wajah kya hai?',
      answer: `Dandruff ki sabse common wajah scalp pe Malassezia naam ke ek natural yeast ka zyada badhna hai. Ye yeast scalp ki dead skin cells ko tezi se shed karta hai — aur wo flakes ban ke dikhti hain.\n\nYe yeast sab ke scalp pe hoti hai — kuch logon mein ye zyada active kyun hoti hai? Kyunki unki scalp zyada oily hai, ya immunity thodi sensitive hai.\n\nDry scalp bhi ek alag wajah hai — isme yeast ka role nahi hota, sirf moisture ki kami hoti hai. Homeopathy mein in dono ke liye alag approach hoti hai.`,
    },
    {
      _key: 'faq2',
      faqType: 'india-specific',
      question: 'Sardi mein dandruff zyada kyun ho jaata hai?',
      answer: `Sardi mein do cheezein ek saath hoti hain — hawa dry ho jaati hai aur log garam paani se nahate hain. Dry hawa scalp ki moisture chheen leti hai. Garam paani scalp ki natural oils hatata hai. Dono milke scalp ko extra dry ya extra irritated banate hain — aur dandruff ki frequency badh jaati hai.\n\nIs season mein lukewarm paani use karo aur scalp ko zyada harsh shampoo se avoid karo.\n\nAgar sardi mein hi badhta hai aur summer mein kam hota hai — ye seasonal pattern doctor ko zaroor batao.`,
    },
    {
      _key: 'faq3',
      faqType: 'bacchon-mein',
      question: 'Bacchon mein dandruff kyun hota hai?',
      answer: `Chote bacchon (2-12 saal) mein scalp dry hone ki wajah se dandruff hota hai — fungal reason usually teenagers mein zyada hota hai jab sebaceous glands active ho jaati hain.\n\nBacchon mein agar scalp pe gol gol patches hain ya baal jhadte hain saath mein — ye sirf dandruff nahi, Tinea Capitis (scalp ringworm) ho sakta hai. Ye contagious hai aur doctor se diagnose karwana zaroori hai.\n\nBachche ke liye harsh anti-dandruff shampoo avoid karo — gentle formula use karo. Homeopathy bacchon ke liye safe option hai lekin pehle doctor se confirm karo ki wajah kya hai.`,
    },
    {
      _key: 'faq4',
      faqType: 'normal-vs-serious',
      question: 'Dandruff normal hai ya doctor zaroori hai?',
      answer: `Halka dandruff — safed barik teri, thodi khujli — normal hai aur ghar pe manage ho sakta hai.\n\nDoctor zaruri hai agar:\n- Flakes thick aur yellowish hain ya oily lagti hain\n- Scalp pe redness, sujan hai\n- Face ya bhaunhon pe bhi teri aa rahi hai\n- 4-6 hafte ke regular shampoo ke baad bhi koi fark nahi\n- Baal bhi gir rahe hain saath mein\n\nIn mein se koi bhi ho to dermatologist se milein — seborrheic dermatitis ya scalp psoriasis rule out karna zaroori hota hai.`,
    },
    {
      _key: 'faq5',
      faqType: 'baar-baar',
      question: 'Shampoo karne ke baad bhi dandruff kyun nahi jaata?',
      answer: `Iska matlab hai ki sirf external cleaning se problem solve nahi ho rahi — koi deeper trigger hai.\n\nKuch common reasons:\n- Scalp pe yeast imbalance hai jo sirf shampoo se control nahi hota\n- Shampoo theek se rinse nahi ho raha — residue scalp pe irritation karta hai\n- Shampoo aapki skin type ke liye galat hai — oily scalp ke liye different formula chahiye\n- Seborrheic dermatitis hai jo medicated treatment maangti hai\n\nAgar 4-6 hafte regular anti-dandruff shampoo use karke bhi koi fark nahi — doctor se milein.`,
    },
    {
      _key: 'faq6',
      faqType: 'baar-baar',
      question: 'Ek dum se dandruff zyada kyun ho gaya?',
      answer: `Achanak badha dandruff aksar ek trigger ka sign hota hai. Sabse common triggers:\n- Naya shampoo, hair dye, ya chemical product — contact irritation ho sakti hai\n- Zyada stress — cortisol scalp ki immunity affect karta hai\n- Mausam ka achanak badlna — sardi ya barish ka aana\n- Beemar hone ke baad ya antibiotics lene ke baad — gut aur skin microbiome affect hoti hai\n\nTrigger identify karo — aur us cheez ko temporarily band karo. Agar 2 hafte mein better nahi hua to doctor dikhao.`,
    },
    {
      _key: 'faq7',
      faqType: 'normal-vs-serious',
      question: 'Aankhon ki bhaunhon (eyebrows) pe bhi dandruff kyun hota hai?',
      answer: `Bhaunhon pe dandruff hona simple dandruff nahi — ye seborrheic dermatitis ka sign hai.\n\nSeborrheic dermatitis sirf scalp pe nahi hoti — wo body ke un hisson ko affect karti hai jahan sebaceous (tel) glands zyada hoti hain. Bhaunhein, naak ke kinare, kaan ke peeche — ye sab affected ho sakte hain.\n\nAgar scalp ke saath in jagahon pe bhi teri ya redness hai — dermatologist se milein. Ye treatable condition hai lekin proper diagnosis zaroori hai.`,
    },
    {
      _key: 'faq8',
      faqType: 'permanent-solution',
      question: 'Dandruff se hamesha ke liye chutkara milega?',
      answer: `"Permanent cure" ka vaada koi bhi system honestly nahi kar sakta — aur koi kare to doubt karo.\n\nJo realistic hai:\n- Dry scalp wala dandruff — lifestyle changes se genuinely khatam ho sakta hai\n- Malassezia ya seborrheic dermatitis wala dandruff — manage ho sakta hai, flare-ups kum ho sakte hain\n\nHomeopathy mein root cause address karne ke baad baar baar aana genuinely kam hota hai — lekin results individual hote hain. Long-term management ka mindset rakhein — quick fix ki expectation nahi.`,
    },
    {
      _key: 'faq9',
      faqType: 'homeopathy',
      question: 'Kya homeopathy dandruff mein kaam karti hai?',
      answer: `Haan, homeopathy dandruff mein kaam kar sakti hai — khaaskar un cases mein jo baar baar aate hain ya jo stress, internal imbalance, ya skin sensitivity se linked hain.\n\nHomeopathy ka fayda ye hai ki sirf dandruff band nahi karta — jo cheez isko trigger kar rahi hai usse address karta hai. Kisi ko stress se hota hai, kisi ko oily scalp se, kisi ko seborrheic tendency se — treatment alag hoti hai.\n\nResearch is area mein limited hai aur results individual hote hain. Severe infections ya suspected psoriasis mein dermatologist pehle — homeopathy saath mein complementary role mein chal sakti hai.`,
    },
    {
      _key: 'faq10',
      faqType: 'test-diagnosis',
      question: 'Dandruff mein kaunsa test karwana chahiye?',
      answer: `Zyada tar dandruff ko test ki zaroorat nahi hoti — visual examination kaafi hoti hai.\n\nDoctor tab test recommend kar sakte hain jab:\n- Fungal culture — agar Tinea Capitis (ringworm) suspect ho, khaaskar bacchon mein\n- Skin biopsy — agar scalp psoriasis aur seborrheic dermatitis mein fark karna mushkil ho\n- Blood test — agar hormonal ya nutritional deficiency suspect ho (thyroid, zinc, Vitamin D)\n\nKhud se test karwane ki zaroorat nahi — doctor ki recommendation pe hi karein.`,
    },
    {
      _key: 'faq11',
      faqType: 'india-specific',
      question: 'Garmiyoon mein dandruff kyun hota hai?',
      answer: `Garmiyoon mein dandruff badhne ka main reason — paseena (sweat). Garam mausam mein scalp pe nami aur sweat zyada hota hai. Ye Malassezia yeast ke badhne ke liye bilkul perfect condition hai.\n\nIske alawa:\n- Baahar dhoop mein rehne ke baad scalp pe salt aur pollution jam jaata hai\n- AC aur dhoop ka rapid temperature change scalp ko confuse karta hai\n- Garam paani se daily nahana scalp dry karta hai\n\nGarmiyoon mein baal zyada baar dhoein — lekin harsh shampoo se nahi, gentle formula se.`,
    },
    {
      _key: 'faq12',
      faqType: 'test-diagnosis',
      question: 'Dandruff aur scalp psoriasis mein fark kya hai?',
      answer: `Ye dono alag conditions hain — aur fark karna zaroori hai kyunki treatment alag hai.\n\nDandruff:\n- Flakes barik, safed ya yellowish\n- Khujli — mild to moderate\n- Scalp pe sirf teri — thick patches nahi\n- Anti-dandruff shampoo se aata jaata rehta hai\n\nScalp Psoriasis:\n- Flakes moti, silvery white\n- Khujli zyada — kabhikabhi bahut intense\n- Hairline, kaanon ke peeche, gardan pe bhi patches\n- Nakhun se khurachne par thick layer utarti hai\n- Shampoo se control nahi hota\n\nAgar doubt ho to dermatologist se milein — ye professional examination se hi confirm hota hai.`,
    },
  ],

  relatedSymptoms: [
    { _key: 'rs1', name: 'Hair Fall',      hindiName: 'Baal Girna',      slug: 'hair-fall'     },
    { _key: 'rs2', name: 'Scalp Itching',  hindiName: 'Sar Mein Khujli', slug: 'scalp-itching' },
    { _key: 'rs3', name: 'Oily Scalp',     hindiName: 'Chikna Sar',      slug: 'oily-scalp'    },
    { _key: 'rs4', name: 'Dry Skin',       hindiName: 'Rookhi Twacha',   slug: 'dry-skin'      },
  ],

  sources: [
    { _key: 's1', name: 'Mayo Clinic — Dandruff: Symptoms & Causes',                                    year: '2024', url: 'https://www.mayoclinic.org/diseases-conditions/dandruff/symptoms-causes/syc-20353850' },
    { _key: 's2', name: 'NCBI — Malassezia and Dandruff: A Pathophysiological Perspective',             year: '2015', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4557126/' },
    { _key: 's3', name: 'NHS UK — Dandruff',                                                            year: '2023', url: 'https://www.nhs.uk/conditions/dandruff/' },
    { _key: 's4', name: 'Indian Dermatology Online Journal — Prevalence of Scalp Disorders in India',  year: '2016', url: 'https://www.idoj.in/article.asp?issn=2229-5178;year=2016;volume=7;issue=2;spage=84;epage=87' },
  ],

  quickFactSymptom: 'Dandruff ek skin condition hai jo scalp ki dead skin cells ke tezi se shed hone ki wajah se hoti hai — contagious nahi hai.',
  quickFactIndiaStats: 'Approximately 50% Indian adults apni life mein kisi point pe dandruff experience karte hain.',
  quickFactDoctorWhen: 'Agar dandruff ke saath redness, face pe teri, ya baal girna bhi ho — dermatologist se milein.',
  reviewDate: 'May 2026',

  doctorNote: 'Maine apni practice mein dekha hai ki dandruff ke jo patients aate hain, unme se bahut zyada cases mein cause dry scalp ya oily scalp type ka hota hai — lekin log dono ko same samajh lete hain aur same shampoo use karte hain. Dry scalp wale ko moisturizing approach chahiye, oily scalp wale ko antifungal. Ye ek consultation mein clear ho jaata hai. Homeopathy mein constitutional history se trigger — stress, digestion, ya seasonal pattern — identify hota hai jo shampoo brand change karne se kabhikabhi miss ho jaata hai.',
}

async function seed() {
  console.log('🌱 Seeding Dandruff symptom page...')
  await client.createOrReplace(doc)
  console.log('✅ Symptom seeded — homeopedia.in/symptoms/dandruff')
}

seed().catch(console.error)
