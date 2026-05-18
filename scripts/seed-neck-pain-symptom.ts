import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'symptom-neck-pain',
  _type: 'symptom',

  name: 'Neck Pain',
  hindiName: 'गर्दन में दर्द',
  hinglishName: 'Gardan Ka Dard / Gardan Mein Dard',
  slug: { _type: 'slug', current: 'neck-pain' },
  bodySystem: 'Musculoskeletal',

  metaTitle: 'Neck Pain in Hindi — Karan, Ilaaj aur Homeopathy | Homeopedia',
  metaDescription: 'Gardan mein dard (neck pain) ke karan, severity aur ghar pe safe steps — simple Hinglish mein. Verified info, Dr. Shadab reviewed.',
  publishedAt: new Date('2026-05-18').toISOString(),

  whatIsThis: `Subah uthte hi gardan ghoomti nahi — ek taraf jhuki hui rehti hai, hilane pe dard ka jhatka lagta hai. Kabhi screen ke saamne ghante bithaye, kabhi takia galat pada — aur gardan ne hartal kar di. Gardan mein dard (neck pain) ek aam takleef hai jo India mein karodon logon ko hoti hai — aap akele nahi hain is mein.

Ye page aapko 2 minute mein batayega: aapka case serious hai ya ghar pe manage ho sakta hai, aur agli sahi step kya hai.`,

  indiaContext: 'WHO ke anusar musculoskeletal conditions — jisme neck pain bhi aata hai — duniya mein disability ka doosra sabse bada karan hain. India mein desk jobs, mobile use, aur poor posture ki wajah se ye problem tezi se badh rahi hai.',
  indiaContextSource: 'WHO — Musculoskeletal Health Fact Sheet 2023; NCBI — Epidemiology of Neck Pain and Its Risk Factors 2020',

  severityLevel1: [
    'Gardan thodi akdi hui hai — subah uthke ya zyada der baithne ke baad',
    'Halka dard sirf gardan ya kaandhon mein — haath, ungliyon tak nahi gaya',
    'Mobile ya laptop pe zyada der ke baad hota hai — rest se better ho jaata hai',
    '1-2 din se hai, bukhaar ya dizziness bilkul nahi',
  ],
  severityLevel2: [
    'Dard 1 hafte se zyada ho gaya hai, better nahi ho raha',
    'Dard kaandhe tak ya haath ki ungliyon tak ja raha hai (numbness ya jhanjhanahat)',
    'Sar dard bhi saath mein hai jo roz hota hai',
    'Raat ko neend mein bhi dard rehta hai',
  ],
  severityLevel3: [
    'Koi accident ya fall ke baad gardan mein dard — chahe halka lage — turant hospital',
    'Dard ke saath haath ya pair mein kamazori ya numbness — turant hospital',
    'Peshab ya potty pe control na reh jaaye — turant emergency',
    'Gardan itni akdi ki bilkul hil nahi rahi saath mein bukhaar — meningitis sign, turant hospital',
    'Sine mein dard bhi saath mein — cardiac emergency rule out zaroori, turant hospital',
  ],

  timeline3Days: 'Zyada tar naya neck pain kisi ek cheez ki wajah se hota hai — galat position, thand lagna, ya achanak jhatka. Body muscles mein temporary spasm hota hai. Abhi rest, halki warm compress, aur posture theek karna hi kaafi hai. Agar teen din mein significantly better na ho to Level 2 mein aao.',
  timeline4Weeks: 'Ek hafte se zyada ka neck pain aksar underlying issue ki taraf ishaara karta hai — muscle weakness, disc issue, ya postural imbalance. Ghar pe aram kafi nahi — is hafte doctor se milein. X-ray ya MRI ki zarurat pata chalegi.',
  timelineMonthPlus: 'Chronic neck pain — jo mahine bhar se hai ya baar baar aata rehta hai — sirf rest se theek nahi hoga. Ye structural ya inflammatory cause ho sakti hai jo proper diagnosis maangti hai. Doctor se milein, aur long-term management ke liye homeopathy ek considered option hai.',

  lifestyleCauses: [
    {
      _key: 'lc1',
      causeName: 'Poor Posture — Mobile Neck / Forward Head Posture',
      mechanism: 'Jab hum mobile ya laptop pe jhuk ke dekhte hain, sar aage ki taraf jhuk jaata hai. Har inch aage jhukne par gardan pe 4-5 kilo extra weight pad jaata hai. Is continuous stress se gardan ki muscles tight ho jaati hain, aur disc pe pressure badhta hai. Dheere dheere muscles aur ligaments dono thak jaate hain aur pain chronic ho jaata hai.',
      howToIdentify: 'Dard subah kam hota hai, din mein screen dekhte dekhte badhta hai. Kaandhe bhi tight lagte hain. Aksar "gardan akad gayi" wali feeling hoti hai.',
    },
    {
      _key: 'lc2',
      causeName: 'Galat Takia Ya Sone Ki Position',
      mechanism: 'Raat bhar gardan ek awkward angle pe rehe — muscles aur cervical spine ko unnatural stretch milti hai. Subah uthte hi ek position mein "lock" ho jaate hain. Bahut uncha, bahut nichla, ya bahut sakht takia — teeno problem karte hain.',
      howToIdentify: 'Dard subah uthte hi hota hai — kisi specific dard wali jagah ke bina. Din mein thoda better ho jaata hai. "Sone ke baad gardan mein dard" exact description hai.',
    },
    {
      _key: 'lc3',
      causeName: 'Muscle Tension — Stress Aur Kaam Ka Bojh',
      mechanism: 'Emotional stress ke waqt body muscles involuntarily tighten ho jaati hain — khaaskar gardan, kaandhe aur jaw ki muscles. Ye ek protective response hai — lekin chronic stress mein ye tightness kabhi release nahi hoti aur dard mein badal jaati hai. Office pressure ya family tension iska trigger hota hai.',
      howToIdentify: 'Dard mushkil situations mein zyada hota hai. Kaandhe "ears tak uthe hue" lagte hain. Headache bhi saath mein hota hai.',
    },
    {
      _key: 'lc4',
      causeName: 'Sedentary Work — Ek Hi Position Mein Ghante Baithe Rehna',
      mechanism: 'Jab hum movement nahi karte, gardan ki muscles mein blood circulation kam ho jaata hai. Muscles mein lactic acid build up hoti hai. Screen ka angle theek na ho to ek hi side ke muscles pe zyada zor padta hai — aur asymmetric pain hota hai.',
      howToIdentify: 'Dard lunch ke baad ya sham ko badhta hai. Sirf ek taraf — left ya right — zyada hota hai. Thodi walk ke baad better feel hota hai.',
    },
  ],

  medicalCauses: [
    {
      _key: 'mc1',
      diseaseName: 'Cervical Spondylosis',
      diseaseHindiName: 'Gardan Ki Haddi Ka Ghisaav / Cervical Arthritis',
      howSymptomPresents: 'Ye age-related wear aur tear hai cervical discs aur bones mein. Gardan ka dard chronic hota hai — aksar peeche ki taraf, jo kaandhe aur haath mein bhi jaata hai. Subah akdahat zyada hoti hai, movement limited ho jaati hai. Jhanjhanahat ya numbness haath mein sign hai ki nerve dab rahi hai.',
      howToIdentify: '40+ age mein zyada. Dard sirf ek-do din nahi — hafton se hai. Haath hilate waqt dard badh jaata hai. X-ray mein changes dikhte hain.',
      homeopediaSlug: 'cervical-spondylosis',
      isAvailable: true,
    },
    {
      _key: 'mc2',
      diseaseName: 'Spondylitis (Ankylosing Spondylitis)',
      diseaseHindiName: 'Meru Dand Ki Sujan',
      howSymptomPresents: 'Ye ek inflammatory condition hai jisme spine mein chronic inflammation hoti hai. Gardan ka dard plus kamar ka dard — dono saath aate hain. Subah akdahat 30-60 minute se zyada rehti hai. Rest se better nahi hota — halki movement se better hota hai, jo isko simple muscle pain se alag banata hai.',
      howToIdentify: 'Young age mein bhi ho sakta hai (20-30 saal). Raat ke doosre half mein dard badhta hai. HLA-B27 blood test positive aata hai.',
      homeopediaSlug: '',
      isAvailable: false,
    },
    {
      _key: 'mc3',
      diseaseName: 'Frozen Shoulder (Adhesive Capsulitis)',
      diseaseHindiName: 'Kandha Jam Jaana',
      howSymptomPresents: 'Directly shoulder ki problem hai — lekin gardan ke paas hone ki wajah se gardan mein referred pain hota hai. Kaandha upar nahi uthta, peeth peeche nahi jaata. Dard raat ko zyada hota hai. Gardan khud theek hogi lekin shoulder stiffness remain karegi.',
      howToIdentify: 'Haath utha ke kaandha check karo — movement limit hai. Gardan khud move karti hai — kaandha nahi.',
      homeopediaSlug: 'frozen-shoulder',
      isAvailable: true,
    },
  ],

  redFlags: [
    'Cervical Disc Herniation (Slip Disc) — agar gardan ke saath haath ya ungliyon mein electric shock jaisa dard ya numbness ho — turant neurologist se milein. Nerve dab rahi hai.',
    'Meningitis — agar gardan bilkul aakad gayi ho aur saath mein tez bukhaar aur roshni se takleef ho — ye emergency hai, turant hospital.',
    'Trauma Ke Baad Fracture — koi bhi accident, fall, ya impact ke baad gardan mein dard — chahe halka lage — X-ray pehle. Assume mat karo ki theek hai.',
  ],

  homeSteps: [
    {
      _key: 'hs1',
      action: '20-20-20 Rule + Screen Break',
      whyItWorks: 'Har 20 minute pe screen se nazar hatakar 20 second ke liye 20 feet door dekhne se eye muscles aur gardan dono ko rest milti hai. Prolonged static posture hi problem ka root hai — break is static load ko interrupt karta hai.',
    },
    {
      _key: 'hs2',
      action: 'Warm Compress (Garam Sekai)',
      whyItWorks: 'Garam sekai se muscles mein blood flow badhta hai, jo tight muscle fibers ko relax karne mein help karta hai. Kapda garam paani mein bheego ke 15-20 minute roz lagaao — do ya teen baar. Sirf muscle dard mein — agar swelling ya recent injury hai to cold use karo.',
    },
    {
      _key: 'hs3',
      action: 'Chin Tuck Exercise (Gently)',
      whyItWorks: 'Ye ek simple movement hai jisme thoodi ko seedha andar ki taraf kheenchte hain — jaise double chin banana ho. Ye forward head posture ko correct karta hai aur deep cervical muscles ko activate karta hai. Roz 10-15 repetitions — gently, force nahi.',
    },
    {
      _key: 'hs4',
      action: 'Sone Ka Trika Theek Karo',
      whyItWorks: 'Ek medium-height pillow jo gardan ki natural curve ko support kare — na bahut uncha, na bilkul flat. Side sleeping mein pillow gardan ko neutral position mein rakhta hai. Pet ke baal sona — prone position — gardan ke liye sabse bura hai, avoid karo.',
    },
    {
      _key: 'hs5',
      action: 'Paani Poora Peeyo — 8-10 Glass Daily',
      whyItWorks: 'Intervertebral discs — jo gardan ki haddiyon ke beech cushion ka kaam karte hain — predominantly water se bane hote hain. Dehydration mein ye discs shrink hoti hain aur shock absorption kam ho jaata hai. Roz 8-10 glass pani gardan ki disc health ke liye zaroori hai.',
    },
  ],

  homeopathyIndividualization: `Gardan dard ka naam ek hai — lekin har insaan ka experience alag hota hai. Kisi ka dard subah uthke hota hai, kisi ko sar ghoomane pe hota hai, kisi ko sirf bayan taraf, kisi ko neeche jhukne pe. Kisi ko garam sekai se aram milta hai, kisi ko thande se. Homeopathy mein sirf "gardan dard" nahi dekha jaata — aapka dard kaisa hai, kab badhta hai, kya se better hota hai — ye sab milake treatment decide hota hai. Isliye ek hi symptom ke liye do alag logon ka treatment bilkul alag ho sakta hai.`,

  homeopathyRootCause: `Baar baar aane wala gardan dard sirf muscle ka masla nahi hota — aksar ye ek underlying structural ya inflammatory imbalance ka signal hota hai. Homeopathy mein sirf is baar ka dard band karna goal nahi hai — jo pattern isko baar baar la raha hai, usse address karna goal hai. Waqt ke saath episodes ki frequency aur intensity dono mein fark aata hai. Research is area mein limited hai aur results individual hote hain — lekin jo patients long-term symptom management dhundh rahe hain unke liye ye ek considered option hai.`,

  homeopathySafety: `Homeopathic medicines highly diluted hoti hain — isliye ye practically side-effect free hain aur doosri medicines ke saath bhi safely use ho sakti hain. Ye woh patients ke liye especially relevant hai jo pehle se pain killers le rahe hain ya jinhe acidity ki problem hai. Lekin: severe cases mein ya jab nerve involvement ho — conventional treatment pehle. Homeopathy complementary role mein hai — replacement nahi.`,

  isForYouIf: [
    'Aap root cause treat karna chahte hain — sirf dard band karne ki tablet nahi',
    'Aap long-term, sustainable relief dhundh rahe hain',
    'Aap pain killers pe dependent ho gaye hain aur alternative chahiye',
    'Doosri medicines chal rahi hain aur safe complementary option chahiye',
  ],

  notForYouIf: [
    'Aapko abhi isi waqt relief chahiye — acute severe pain mein pehle conventional treatment lein, homeopathy baad mein saath chalao',
    'Aapki condition surgical hai (jaise severe disc herniation) — surgery ke baad recovery mein homeopathy help kar sakti hai, pehle surgeon se milein',
    'Koi accident ke baad dard hai — pehle X-ray, conventional assessment zaroori hai',
  ],

  homeopathyDiseaseLinks: [
    { _key: 'hdl1', diseaseName: 'Cervical Spondylosis (Gardan Ki Haddi Ka Ghisaav) ka poora ilaaj', diseaseSlug: 'cervical-spondylosis' },
    { _key: 'hdl2', diseaseName: 'Frozen Shoulder (Kandha Jam Jaana) ka poora ilaaj',               diseaseSlug: 'frozen-shoulder'       },
  ],

  linkedDiseaseCards: [
    { _key: 'ldc1', title: 'Cervical Spondylosis', hindiName: 'Gardan Ki Haddi Ka Ghisaav', slug: 'cervical-spondylosis', isAvailable: true  },
    { _key: 'ldc2', title: 'Spondylitis',          hindiName: 'Meru Dand Ki Sujan',         slug: '',                    isAvailable: false },
    { _key: 'ldc3', title: 'Frozen Shoulder',      hindiName: 'Kandha Jam Jaana',           slug: 'frozen-shoulder',     isAvailable: true  },
  ],

  faqs: [
    {
      _key: 'faq1',
      faqType: 'common-cause',
      question: 'Gardan mein dard ka sabse common karan kya hai?',
      answer: `Gardan dard ka sabse common karan India mein aaj poor posture hai — khaaskar mobile aur laptop ka zyada use. Jab hum screen pe jhuk ke dekhte hain, gardan pe normal se 3-4 guna zyada weight pad jaata hai. Muscles is extra load ko uthate uthate thak jaati hain aur tighten ho jaati hain — aur dard shuru ho jaata hai.\n\nIske alawa galat takia, stress-related muscle tension, aur ghante bhar ek hi position mein baithna bhi bahut common karan hain. Age ke saath cervical spondylosis bhi add ho jaata hai.\n\nGardan dard (gardan me dard) ka koi ek karan nahi hota — isliye theek treatment ke liye cause samajhna zaroori hai.`,
    },
    {
      _key: 'faq2',
      faqType: 'normal-vs-serious',
      question: 'Gardan dard kab normal hai aur kab doctor zaroori hai?',
      answer: `1-3 din ka gardan dard — jo zyada der baithne ya galat position mein sone ke baad hua ho aur rest se better ho — normal category mein aata hai. Ghar pe manage ho sakta hai.\n\nDoctor zaroori hai agar:\n- Dard 1 hafte se zyada ho aur better nahi ho raha\n- Dard haath ya ungliyon mein bhi ja raha ho — numbness ya jhanjhanahat ke saath\n- Gardan ke saath roz sar dard hota ho\n- Koi accident ke baad dard hua ho\n\nTurant emergency hai agar gardan bilkul akad jaaye aur saath mein bukhaar ho, ya haath-pair mein kamazori aaye.`,
    },
    {
      _key: 'faq3',
      faqType: 'common-cause',
      question: 'Sone ke baad gardan mein dard kyun hota hai?',
      answer: `Sone ke baad gardan dard hona zyada tar galat takia ya sone ki position ki wajah se hota hai.\n\nRaat bhar gardan ek unnatural angle pe rehe — chahe thodi si bhi — to muscles aur ligaments strain mein rehte hain. Subah uthne pe muscles locked feel hoti hain.\n\nBahut uncha ya bahut sakht takia, ya pet ke baal sona — prone sleeping — sabse zyada problem karta hai. Medium-height supportive takia aur side ya back sleeping better hota hai.\n\nAgar ye roz hota hai aur takia badalne ke baad bhi nahi gaya — to cervical spine check karwana chahiye.`,
    },
    {
      _key: 'faq4',
      faqType: 'baar-baar',
      question: 'Roz roz gardan mein dard kyun rehta hai?',
      answer: `Roz ka gardan dard zyada tar ek chronic underlying cause ki wajah se hota hai — sirf ek din ki wajah se nahi.\n\nSabse common reasons hain: prolonged screen use without breaks, weak neck muscles jo daily load nahi utha paati, ya early cervical spondylosis jo abhi mild hai. Emotional stress bhi ek bada factor hai — jin logon ka kaam ya life stress mein hai unhe chronic neck tension zyada hoti hai.\n\nEk baar doctor se milein — X-ray ya posture assessment se actual cause pata chalega. Sirf pain killer lena solution nahi — cause address karna zaroori hai.`,
    },
    {
      _key: 'faq5',
      faqType: 'common-cause',
      question: 'Gardan dard ke saath sar dard kyun hota hai?',
      answer: `Gardan aur sar ka connection seedha hai — cervical spine ki nerves aur muscles seedha sar ke peeche tak jaati hain. Jab gardan ki muscles tight hoti hain — tension ya posture ki wajah se — wo sar ke peeche ki muscles ko bhi pull karti hain.\n\nIsse cervicogenic headache hota hai — gardan se aane wala sar dard. Ye dard zyada tar sar ke peeche se shuru hota hai aur aage temple tak ja sakta hai.\n\nAgar sar dard ke saath aankhon mein bhi takleef ho ya light se — to doctor se milein. Chronic tension headache mein homeopathy madadgar ho sakti hai — root cause address karne se dono mein improvement aati hai.`,
    },
    {
      _key: 'faq6',
      faqType: 'ghar-pe-wait',
      question: 'Gardan dard mein ghar pe kab tak reh sakte hain?',
      answer: `Teen din tak ghar pe wait karna reasonable hai — agar dard sirf gardan ya kaandhe mein hai, koi numbness nahi, aur koi accident nahi hua.\n\nIs dauraan rest, warm sekai, posture correction, aur screen breaks karo.\n\nTeen din mein significantly better na ho to doctor se milein. Ek hafte se zyada bilkul ghar pe mat raho.\n\nAur agar haath mein numbness, jhanjhanahat, ya gardan bilkul hilane mein takleef ho — to ek din bhi nahi, turant doctor ke paas jao.`,
    },
    {
      _key: 'faq7',
      faqType: 'homeopathy',
      question: 'Kya homeopathy gardan dard mein kaam karta hai?',
      answer: `Gardan dard mein homeopathy ka faida tab sabse zyada hota hai jab cause chronic ya recurrent ho — jaise cervical spondylosis, stress-related tension, ya spondylitis.\n\nHomeopathy sirf dard ki jagah nahi — dard ka pattern, wajah, aur body ki overall response dekh ke treatment decide karta hai. Results individual hote hain — kuch patients mein achhi improvement aati hai episodes ki frequency aur intensity mein.\n\nResearch is area mein limited hai, aur acute severe cases mein conventional treatment ke saath milake use karna zyada practical approach hai.\n\nAgar aap months se pain killers pe hain aur alternative dhundh rahe hain — homeopathic consultation ek logical next step hai.`,
    },
    {
      _key: 'faq8',
      faqType: 'india-specific',
      question: 'Females mein gardan dard zyada kyun hota hai?',
      answer: `Females mein gardan dard zyada hone ke kuch specific reasons hain.\n\nPehla — hormonal changes, especially menopause mein, joint aur muscle health affect karte hain. Doosra — females mein neck muscles average mein thoda weaker hoti hain compared to males, isliye same posture load zyada feel hota hai. Teesra — stress aur anxiety females mein muscle tension zyada trigger karta hai.\n\nPregnancy mein bhi gardan pe extra load aata hai posture changes ki wajah se. Kaam aur ghar dono ki zimmedari carrying mein bhi postural strain aati hai.\n\nAgar dard menstrual cycle ke saath pattern dikhaye — hormonal connection ho sakta hai — doctor se discuss karein.`,
    },
    {
      _key: 'faq9',
      faqType: 'test-diagnosis',
      question: 'Gardan dard mein kaunsa test karwana chahiye?',
      answer: `Test ki zarurat cause pe depend karti hai:\n\n- X-ray Cervical Spine: Pehla test — bone changes, spondylosis, alignment check karta hai\n- MRI Cervical Spine: Agar numbness ya haath mein dard ho — nerve aur disc detail ke liye\n- Blood Tests (CBC, ESR, CRP, HLA-B27): Agar inflammatory cause — spondylitis — suspect ho\n\nHar gardan dard mein test zaruri nahi — agar 1-2 hafte mein better ho jaaye to test ki zarurat nahi. Agar chronic hai ya nerve symptoms hain — tab doctor decide karta hai kaun sa test pehle.`,
    },
    {
      _key: 'faq10',
      faqType: 'baar-baar',
      question: 'Gardan dard baar baar kyun aata hai?',
      answer: `Baar baar aane wala gardan dard aksar ek "trigger pattern" follow karta hai — jaise zyada screen time, stress zyada hone ke periods, ya koi specific kaam.\n\nLekin underlying wajah hoti hai jo isko baar baar possible banati hai — weak muscles, cervical disc changes, ya chronic inflammation.\n\nSirf baar baar pain killer lena is pattern ko nahi todta — root cause nahi address hoti. Doctor se ek baar proper evaluation karwao — X-ray aur posture assessment dono. Wahan se targeted approach milegi — exercises, lifestyle changes, ya treatment — jo pattern todne mein kaam aaye.`,
    },
    {
      _key: 'faq11',
      faqType: 'permanent-solution',
      question: 'Gardan dard se hamesha ke liye kaise chutkara milega?',
      answer: `"Hamesha ke liye" ka vaada koi bhi system honestly nahi kar sakta — aur koi kare to doubt karo.\n\nJo realistic hai: sahi treatment se gardan dard ki frequency aur intensity itni kam ho sakti hai ki life practically normal ho jaaye.\n\nIske liye zaruri hai:\n- Cause pata hona (posture, disc, inflammation)\n- Root cause address karna (sirf pain management nahi)\n- Daily habits mein change (screen time, exercise, pillow)\n- Patience — chronic problem ki solution chronic fix maangti hai, ek raat mein nahi hoti\n\nHomeopathy chronic aur recurrent cases mein long-term management mein helpful ho sakti hai — results individual hote hain.`,
    },
    {
      _key: 'faq12',
      faqType: 'bacchon-mein',
      question: 'Bacchon mein gardan dard kyun hota hai?',
      answer: `Bacchon mein gardan dard ka sabse common karan aaj school bags ka zyada bojh aur mobile/tablet ka use hai. Heavy schoolbags se cervical spine pe stress padta hai. Lambe waqt tak same position mein tablet ya phone dekhna muscles tighten kar deta hai.\n\nKabhi kabhi gardan ki lymph nodes swell ho jaati hain infection mein — jo pain lagti hai. Rare mein torticollis (gardan ek taraf jhuki rehna) ho sakti hai.\n\nBacche mein gardan dard agar ek din mein theek na ho, ya bukhaar ke saath aaye — doctor zaruri hai. Meningitis bacchon mein serious hai — gardan ki akdahat aur bukhaar ka combination ignore mat karo.`,
    },
  ],

  relatedSymptoms: [
    { _key: 'rs1', name: 'Shoulder Pain', hindiName: 'Kaandhe Ka Dard',        slug: 'shoulder-pain' },
    { _key: 'rs2', name: 'Headache',      hindiName: 'Sar Dard',               slug: 'headache'      },
    { _key: 'rs3', name: 'Back Pain',     hindiName: 'Kamar Dard',             slug: 'back-pain'     },
    { _key: 'rs4', name: 'Arm Numbness',  hindiName: 'Haath Mein Jhanjhanahat', slug: 'arm-numbness'  },
  ],

  sources: [
    { _key: 's1', name: 'WHO — Musculoskeletal Health Fact Sheet',                      year: '2023', url: 'https://www.who.int/news-room/fact-sheets/detail/musculoskeletal-conditions' },
    { _key: 's2', name: 'Mayo Clinic — Neck Pain: Symptoms & Causes',                  year: '2024', url: 'https://www.mayoclinic.org/diseases-conditions/neck-pain/symptoms-causes/syc-20375581' },
    { _key: 's3', name: 'NCBI / PubMed — Epidemiology of Neck Pain and Its Risk Factors', year: '2020', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7364201/' },
    { _key: 's4', name: 'NHS UK — Neck Pain and Stiff Neck',                           year: '2023', url: 'https://www.nhs.uk/conditions/neck-pain-and-stiff-neck/' },
  ],

  quickFactSymptom: 'Gardan mein 7 haddiyaan hoti hain — cervical vertebrae — jo sar ka poora bojh uthati hain.',
  quickFactIndiaStats: 'Desk job workers mein 70% se zyada logon ko neck pain ek baar zaroor hota hai.',
  quickFactDoctorWhen: 'Agar haath mein numbness ya jhanjhanahat ho — 24 ghante wait mat karo.',
  reviewDate: 'May 2026',

  doctorNote: 'Maine apni practice mein dekha hai ki gardan dard ke jo patients aate hain, unme se bahut bade hisse mein actually cause cervical spondylosis hoti hai — lekin wo khud sirf muscle pain samajhkar pain killer khaate rehte hain. Ek aur common pattern jo mujhe dikhta hai: IT aur desk job professionals — 30-45 umar — jinka dard sirf gardan mein nahi, kaandhe aur haath ki ungliyon mein bhi hota hai, jo clear cervical nerve involvement ka sign hai. Homeopathy mein constitutional assessment se hi pata chalta hai ki kis level pe intervene karna hai.',
}

async function seed() {
  console.log('🌱 Seeding Neck Pain symptom page...')
  await client.createOrReplace(doc)
  console.log('✅ Symptom seeded — homeopedia.in/symptoms/neck-pain')
}

seed().catch(console.error)
