import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'symptom-knee-pain',
  _type: 'symptom',

  name: 'Knee Pain',
  hindiName: 'घुटने में दर्द (Ghutne Mein Dard)',
  hinglishName: 'Ghutne Ka Dard',
  slug: { _type: 'slug', current: 'knee-pain' },
  bodySystem: 'Joints',

  metaTitle: 'Knee Pain in Hindi — Ghutne Ka Dard, Karan aur Homeopathy',
  metaDescription: 'Ghutne mein dard (knee pain) ke karan, severity aur ghar pe safe steps — simple Hinglish mein. Verified info, Dr. Shadab reviewed.',
  publishedAt: new Date('2026-05-19').toISOString(),

  whatIsThis: `Seedhiyan chadhte waqt achanak ghutne mein ek tez dard — ya subah uthtey hi ghutna itna akda hua ki pehla qadam bhi mushkil lage. Ye ghutne ka dard (knee pain) ek bahut common takleef hai jo kisi ko bhi ho sakti hai — jawaan ho ya buzurg, active ho ya ghar pe baithne wale.

Ghutne mein dard ka matlab sirf chot nahi hota. Aksar andar ki haddi, cartilage (jodon ke beech ka cushion), ya muscles mein koi problem hoti hai — jo dheere dheere develop hoti hai.

Aap akele nahi hain — India mein karodo log ghutno me dard se rozana guzarte hain. Ye page 2 minute mein batayega: aapka case serious hai ya nahi, aur agli step kya honi chahiye.`,

  prevalence: 'WHO ke mutabiq musculoskeletal conditions — jisme ghutne ka dard bhi aata hai — globally disability ka doosra sabse bada karan hain. India mein 40 saal ke upar ki population mein osteoarthritis se related ghutne ka dard bahut common hai — khaaskar mahilaon mein.\nSource: WHO, Musculoskeletal Health, 2023',

  severityLevels: [
    {
      _key: 'sl1',
      level: 'green',
      title: 'Level 1 — Ghar Pe Manage Karo',
      signs: [
        'Dard halka hai — chalte firte manage ho jaata hai',
        'Koi sujan nahi ya bahut kam hai',
        'Ek-do din mein thoda better lagta hai',
        'Seedhiyan utarne ke baad ya zyada chalke hua tha',
        'Koi fever nahi, ghutna garam nahi lag raha',
      ],
    },
    {
      _key: 'sl2',
      level: 'yellow',
      title: 'Level 2 — Is Hafte Doctor Se Milein',
      signs: [
        'Dard 1 hafte se zyada ho gaya, better nahi ho raha',
        'Ghutna sooja hua hai — kaafi visible hai',
        'Seedhiyan chadhne ya utarne mein badi problem ho rahi hai',
        'Kareeb 40 saal se zyada age hai aur dard baar baar aata hai',
        'Ghutna chalte waqt "click" ya "crack" karta hai saath mein dard bhi',
      ],
    },
    {
      _key: 'sl3',
      level: 'red',
      title: 'Level 3 — Turant Hospital Jaao',
      signs: [
        'Ghutna bilkul straight ya bend nahi ho raha — lock ho gaya',
        'Ek dum se chot lagi aur ghutna bahut sooj gaya — kaafi fast',
        'Ghutne pe wajan nahi utha paate — bilkul bhi',
        'Ghutne mein numbness (sunn ho jaana) ya bahut tez jalan',
        'Tez bukhaar ke saath ghutna laal aur garam ho gaya',
      ],
    },
  ],

  timeline: [
    {
      _key: 'tl1',
      duration: '1 se 3 Din',
      label: 'Nayi Takleef',
      advice: 'Aksar koi physical activity, galat position, ya halki chot ki wajah se hota hai. Body apne aap ko repair karne ki koshish kar rahi hai. Rest karo, ice lagao. Agar 3 din mein better nahi hua to Level 2 mein aao.',
    },
    {
      _key: 'tl2',
      duration: '1 se 4 Hafte',
      label: 'Chalti Aa Rahi',
      advice: 'Ye signal hai ki sirf muscle strain nahi hai — andar kuch aur chal raha hai. Cartilage, tendon, ya koi underlying condition ho sakti hai. Is hafte doctor se milna zaroori hai.',
    },
    {
      _key: 'tl3',
      duration: '1 Mahina Ya Zyada',
      label: 'Purani Problem',
      advice: 'Ye chronic condition ka sign hai — osteoarthritis ya rheumatoid arthritis sabse common causes hain is stage pe. Doctor se milna aur proper diagnosis lena zaroori hai. Homeopathy chronic ghutne ke dard mein — jab cause clear ho — root level pe kaam karti hai, results individual hote hain.',
    },
  ],

  lifestyleCauses: [
    {
      _key: 'lc1',
      title: 'Zyada Wajan (Obesity)',
      mechanism: 'Ghutne pe body ka pura wajan padta hai. Sirf 5 kg extra wajan ghutne ke joints pe 15-20 kg extra pressure daalta hai — ye WHO research suggest karta hai. Cartilage baar baar is pressure se ghis jaati hai.',
      patientSigns: 'Dono ghutne dard karte hain. Chalte chalte ya seedhiyan utarne ke baad zyada hota hai.',
    },
    {
      _key: 'lc2',
      title: 'Kum Physical Activity / Muscles Ka Kamzor Hona',
      mechanism: 'Ghutne ke ird-gird ki muscles — khaaskar thigh muscles — ghutne ko support karti hain. Agar in muscles mein strength nahi hai to poora load joint pe aata hai, dheere dheere dard badhta hai.',
      patientSigns: 'Seedhiyan chadhne mein zyada problem. Kaafi der baithe rehne ke baad uthte waqt dard.',
    },
    {
      _key: 'lc3',
      title: 'Galat Posture Ya Footwear',
      mechanism: 'High heels, flat chappals bina support ke, ya galat tarike se chalte rehna — ye sab ghutne ke alignment pe asar daalta hai. Over time joint uneven tarike se ghis-ta hai.',
      patientSigns: 'Ek hi ghutna zyada dard karta hai. Jab footwear badlate hain to thoda fark padata hai.',
    },
    {
      _key: 'lc4',
      title: 'Zyada Use / Overexertion',
      mechanism: 'Galat technique se exercise karna — jaise deep squats, running on hard surface bina proper shoes ke — tendons aur ligaments pe strain daalta hai. Ye aksar young aur active logon mein hota hai.',
      patientSigns: 'Exercise ke baad ya agle din dard hota hai. Rest se better hota hai.',
    },
  ],

  redFlags: [
    'Septic Arthritis (Joint Infection) — agar ghutna bahut laal, garam ho aur saath mein tez bukhaar ho to turant hospital. Ye rare hai lekin serious hai.',
    'Bone Tumor — agar raat ko uthane wala dard ho, bina kisi activity ke, aur wajan bhi gir raha ho — doctor se milein.',
    'DVT (Deep Vein Thrombosis) — agar ghutne ke peeche (back of knee) aur paanv mein saath mein sujan ho to emergency le jaao — ye blood clot ka sign ho sakta hai.',
  ],

  linkedDiseaseCards: [
    {
      _key: 'ldc1',
      title: 'Arthritis',
      hindiName: 'Gathiya / Jodon Ki Sujan',
      description: 'Sujan ke saath dard hota hai — ghutna garam bhi lagta hai. Subah akadpan zyada rehta hai. Dono ghutne aksar dard karte hain.',
      homeopediaSlug: 'arthritis',
      isAvailable: true,
    },
    {
      _key: 'ldc2',
      title: 'Osteoarthritis',
      hindiName: 'Haddi Ka Ghisna',
      description: 'Dheere dheere develop hota hai — pehle seedhiyan mein, phir chalte waqt bhi. Ghutna chalte waqt creak karta hai. 50 saal se upar age mein zyada common.',
      homeopediaSlug: 'osteoarthritis',
      isAvailable: true,
    },
    {
      _key: 'ldc3',
      title: 'Gout',
      hindiName: 'Vaat Rog / Yoorik Acid',
      description: 'Achanak bahut tez dard — aksar raat ko. Ghutna bahut laal aur garam ho jaata hai. Uric acid blood test mein high aata hai.',
      homeopediaSlug: 'gout',
      isAvailable: true,
    },
    {
      _key: 'ldc4',
      title: 'Ligament Injury',
      hindiName: 'Ligament Ki Chot',
      description: 'Chot ke fauran baad tez dard aur sujan. Ghutna unstable lagta hai. Sports ya accident ke baad hota hai, MRI se confirm hota hai.',
      homeopediaSlug: '',
      isAvailable: false,
    },
  ],

  homeCareSteps: [
    {
      _key: 'hcs1',
      stepNumber: 1,
      title: 'RICE Method — Pehle 48-72 Ghante',
      instruction: 'R = Rest (ghutne ko aaraam do), I = Ice (20 min har 2 ghante cold pack), C = Compression (light bandage), E = Elevation (ghutne ko thoda upar rakhein soote waqt).',
      reason: 'Sujan aur inflammation ko fauran control karta hai. Joint ko heal hone ka waqt milta hai.',
    },
    {
      _key: 'hcs2',
      stepNumber: 2,
      title: 'Ghutne Ko Seedha Rakhne Wali Position',
      instruction: 'Soote waqt ghutne ke neeche ek folded towel ya pillow rakhein.',
      reason: 'Ghutne ka pressure reduce hota hai. Muscles relax hoti hain — healing mein help milti hai.',
    },
    {
      _key: 'hcs3',
      stepNumber: 3,
      title: 'Garam Paani Ki Senkaan (Sirf Swelling Na Ho Tab)',
      instruction: 'Agar sujan nahi hai — sirf dard hai — to warm compress lagaao 15-20 minute ke liye.',
      reason: 'Garam senkaan muscles ko relax karti hai aur blood circulation badhati hai.',
    },
    {
      _key: 'hcs4',
      stepNumber: 4,
      title: 'Chair Pe Baith Ke Gentle Leg Raise',
      instruction: 'Seedha baithein, ek paanv ko slowly upar uthaein aur 5 second rokein, phir neeche laayein. 10 baar karein.',
      reason: 'Thigh muscles ko activate karta hai bina ghutne pe direct pressure daale. Support badhta hai.',
    },
    {
      _key: 'hcs5',
      stepNumber: 5,
      title: 'Seedhiyan Charhne Se Temporarily Bachein',
      instruction: 'Jab tak dard hai, seedhiyan minimize karein.',
      reason: 'Seedhiyan ghutne pe sabse zyada pressure daalta hai — rest karne se faster recovery.',
    },
  ],

  homeopathyAngles: [
    {
      _key: 'ha1',
      angle: 'Individualization',
      content: 'Ghutne ke dard ka naam ek hai — lekin wajah aur experience har insaan mein alag hoti hai. Kisi ka dard subah zyada hota hai — "jab tak chalein thoda loose ho jaata hai." Kisi ka raat ko uthata hai. Kisi ko garm mausam mein zyada, kisi ko sardi mein. Kisi ko chalne se better hota hai, kisi ko rest se. Homeopathy mein ye sab differences matter karte hain — aapka ghutne ka dard aapke jaisa hai, treatment bhi aapke hisaab se hogi.',
    },
    {
      _key: 'ha2',
      angle: 'Root Cause',
      content: 'Ghutne ka dard baar baar aana — ya chronically rehna — sirf joint ka issue nahi hota. Aksar puri body mein koi deeper imbalance hota hai — inflammatory response, uric acid metabolism, ya immune system — jo surface pe ghutne ke roop mein dikhta hai. Homeopathy mein sirf dard band karna goal nahi — us cheez ko address karna hota hai jo is pattern ko baar baar la rahi hai. Waqt ke saath frequency aur intensity dono kam hoti hain. Research is area mein limited hai aur results individual hote hain.',
    },
    {
      _key: 'ha3',
      angle: 'Safety',
      content: 'Elderly patients mein ya jin logon ko pehle se kaafi medicines chal rahi hain — homeopathy ek safe complementary approach hai. Highly diluted medicines hone ki wajah se practically koi side effects nahi hote. Important caveat: Severe cases mein, surgical conditions mein, ya emergency mein pehle conventional treatment lein. Homeopathy complementary role mein hai — replacement nahi.',
    },
  ],

  homeopathyDiseaseLinks: [
    { _key: 'hdl1', title: 'Arthritis (Gathiya)', slug: 'arthritis' },
    { _key: 'hdl2', title: 'Osteoarthritis (Haddi Ka Ghisna)', slug: 'osteoarthritis' },
    { _key: 'hdl3', title: 'Gout (Yoorik Acid)', slug: 'gout' },
  ],

  homeopathyIsFor: [
    'Aap sirf dard killers pe nahi rehna chahte — root cause samajhna chahte hain',
    'Aapko chronic knee pain hai jo baar baar aata hai',
    'Aap pregnancy mein hain ya elderly hain aur safe option chahiye conventional ke saath saath',
    'Long-term sustainable improvement chahiye',
  ],

  homeopathyNotFor: [
    'Aapka ghutna lock ho gaya hai ya tez chot lagi hai — pehle emergency ya orthopedic le jaao',
    'Ligament injury hai aur surgery recommend hui hai — surgery ke baad recovery mein homeopathy saath chal sakti hai',
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Ghutne mein dard kyun hota hai — sabse common karan kya hai?',
      answer: 'Ghutne mein dard ka sabse common karan hai cartilage ka ghisna — jise osteoarthritis kehte hain — aur muscles ka kamzor hona. India mein 40 saal ke upar ke logon mein ye sabse zyada dikhta hai. Cartilage woh cushion hai jo ghutne ki haddiyon ke beech hota hai — jab ye ghis jaata hai to haddiyan seedha aapas mein ragad khaati hain, dard hota hai. Iske alawa, uric acid badhne se gout, zyada wajan se joint stress, aur kisi purani chot ka theek na hona bhi common causes hain. Agar dard 1 hafte se zyada ho to doctor se milna zaroori hai — cause clear hone ke baad hi sahi treatment possible hai.',
    },
    {
      _key: 'faq2',
      question: 'Mahilaon mein ghutne ka dard zyada kyun hota hai?',
      answer: 'Mahilaon mein ghutne ka dard zyada hone ke kuch specific reasons hain. Estrogen hormone ka level menopause ke baad kam hota hai — ye hormone cartilage ko protect karta tha, ab protection kam ho jaati hai. Mahilaon ka pelvis (kamar ki haddi) thoda choda hota hai jis se ghutne ka angle alag hota hai — joint pe uneven stress padta hai. Bone density bhi menopause ke baad kam hoti hai. Isliye 45-50 saal ke baad mahilaon mein osteoarthritis aur ghutne ka dard commonly dikhta hai. Regular doctor check-up is age ke baad zaroori hai.',
    },
    {
      _key: 'faq3',
      question: 'Bina chot lage ghutne mein dard kyun hota hai?',
      answer: 'Bina kisi obvious chot ke ghutne mein dard hona actually bahut common hai. Iska matlab ye nahi ki serious problem nahi hai — matlab hai ki cause andar se hai. Sabse common causes: Osteoarthritis — cartilage dheere dheere ghisna. Gout — uric acid crystals joint mein jam jaana. Bursitis — joint ke cushioning sac mein sujan. Rheumatoid arthritis — immune system ka joint pe attack. Agar dard 5-7 din se zyada ho, sujan ho, ya raat ko uthata ho to doctor se milein — bina injury ke dard ko ignore nahi karna chahiye.',
    },
    {
      _key: 'faq4',
      question: 'Raat ko ghutne mein dard kyun badhta hai?',
      answer: 'Raat ko ghutne ka dard badhne ke kuch reasons hain. Din bhar chalte firte waqt joints active rehte hain aur blood flow achha rehta hai — raat ko lete waqt circulation slow hoti hai. Iske alawa, din bhar ke accumulated inflammation raat ko zyada feel hoti hai. Gout ka dard khaaskar raat ko uthata hai — kyunki body temperature raat ko thodi kam hoti hai jis se uric acid crystals settle karne ki tendency badhti hai. Agar raat ko uthane wala dard consistent pattern hai — doctor se milein, test karwaein.',
    },
    {
      _key: 'faq5',
      question: 'Budhaape mein ghutne ka dard normal hai kya?',
      answer: 'Budhaape mein thodi joint stiffness common hai — lekin "normal" nahi keh sakte. Ye body ka wear and tear hai aur ise manage kiya ja sakta hai — accept nahi karna padta. 60+ age mein ghutne ka dard aksar osteoarthritis hota hai. Ye painful hota hai aur mobility affect karta hai — lekin sahi approach se quality of life kaafi better reh sakti hai. Doctor se milein, diagnosis lo, aur appropriate treatment shuru karo. "Umar ho gayi kuch nahi hoga" — ye galat assumption hai.',
    },
    {
      _key: 'faq6',
      question: 'Ghutne mein dard aur akadpan saath mein kyun hote hain?',
      answer: 'Dard aur akadpan (stiffness) saath aana arthritis ka classic sign hai. Subah uthne ke baad ghutna akda hua lagta hai — thodi der chalte hain to loose hota hai — ye osteoarthritis aur rheumatoid arthritis dono mein hota hai. Akadpan isliye hoti hai kyunki raat bhar rest mein synovial fluid (joint lubricant) kum circulate hoti hai. Subah ki akadpan agar 30 minute mein theek ho jaaye — osteoarthritis likely. Agar 1 ghante se zyada rahe — rheumatoid arthritis possible. Doctor se milein.',
    },
    {
      _key: 'faq7',
      question: 'Ghutne ka dard kitne waqt mein theek hota hai?',
      answer: 'Ye cause pe depend karta hai. Simple muscle strain ya overexertion: 3-7 din mein theek. Ligament strain (tear nahi): 2-6 hafte. Gout episode: Proper treatment se 3-10 din. Osteoarthritis: Ye chronic condition hai — "theek" nahi hoti lekin sahi management se dard kaafi manage hota hai. Ligament tear (surgical): Surgery + 3-6 mahine rehab. Agar 1 hafte se zyada basic rest ke baad bhi better nahi hua — doctor se milna zaroori hai. Delay karne se condition worse ho sakti hai.',
    },
    {
      _key: 'faq8',
      question: 'Kya homeopathy ghutne ke dard mein kaam karti hai?',
      answer: 'Homeopathy ghutne ke chronic dard mein — jab cause inflammatory ya metabolic ho jaise arthritis ya gout — madadgar rahi hai kaafi patients ke liye. Ye approach ek cause-based hai: sirf dard band karna goal nahi, jo cheez dard baar baar la rahi hai usse address karna hota hai. "Homeopathy kaam karta hai kya" ka honest jawab ye hai: acute injuries ya surgical conditions mein conventional treatment pehle zaroori hai. Chronic conditions mein homeopathy conventional ke saath complementary tarike se use hoti hai aur kaafi patients mein dard ki frequency aur intensity mein fark dikhta hai. Research is area mein limited hai aur results individual hote hain.',
    },
    {
      _key: 'faq9',
      question: 'Ghutne ke dard mein ghar pe kab tak ruk sakte hain?',
      answer: 'Ghar pe ruk sakte hain agar: Dard halka hai aur chalte firte manage ho raha hai. Koi visible sujan nahi hai. Bukhar nahi hai. Dard 1-3 din se zyada nahi hua. Turant doctor ke paas jaayein agar: Ghutna lock ho gaya ho. Sujan achanak bahut zyada ho. Tez bukhar ke saath dard ho. Wajan uthana bilkul na ho sake. 3 din rest ke baad bhi better nahi — is hafte doctor dikhao.',
    },
    {
      _key: 'faq10',
      question: 'Ghutne mein dard baar baar kyun aata hai?',
      answer: 'Baar baar aane wala ghutne ka dard ek deeper pattern ka signal hai — sirf ek episode nahi. Common reasons: Underlying condition treat nahi hui — jaise osteoarthritis ya gout jo sirf painkillers se manage ho rahi hai. Root cause address nahi hua — weight, posture, muscle weakness — ye kaaran bane hain aur bante rahenge. Uric acid level control mein nahi hai (gout ke case mein). Baar baar aane ka matlab hai ki proper diagnosis aur root-cause based treatment zaroori hai. Sirf pain killer se ye pattern nahi tutega — ye honestly samajhna zaroori hai.',
    },
    {
      _key: 'faq11',
      question: 'Ghutne ke dard se hamesha ke liye kaise chutkara milega?',
      answer: '"Permanent cure" ka vaada koi bhi system honestly nahi kar sakta — aur koi kare to shak karo. Jo realistic hai: Osteoarthritis mein: Dard ki frequency itni kam ho sakti hai ki daily life practically normal ho jaaye — sahi weight, exercise, aur treatment se. Gout mein: Uric acid levels control rehein to episodes khatam ho sakte hain — completely possible hai. Ligament injury mein: Sahi rehab ke baad poori recovery bahut cases mein hoti hai. Sustainable improvement ke liye: cause ka pata lagana, weight manage karna, muscles strengthen karna, aur consistent treatment — ye sab saath mein kaam karte hain.',
    },
    {
      _key: 'faq12',
      question: 'Ghutne ke dard mein kaunsa test karwana chahiye?',
      answer: 'Doctor typically ye tests suggest karta hai: X-Ray — Joint space dekhne ke liye, osteoarthritis mein helpful. MRI — Ligament, cartilage, meniscus ki detailed picture, soft tissue injuries mein. Blood Test — Uric acid (gout ke liye), RA factor, CRP (inflammation marker). Synovial Fluid Test — Agar joint mein fluid bhara ho to needle se sample lena, infection ya gout confirm karta hai. Kaunsa test zaroori hai ye doctor decide karega case history ke baad. Khud se sirf blood test karwana enough nahi hoga agar symptoms clear nahi hain.',
    },
  ],

  relatedSymptoms: [
    { _key: 'rs1', name: 'Joint Pain (Multiple Joints)', hindiName: 'Jodon Mein Dard', slug: 'joint-pain' },
    { _key: 'rs2', name: 'Leg Pain', hindiName: 'Pair Mein Dard', slug: 'leg-pain' },
    { _key: 'rs3', name: 'Morning Stiffness', hindiName: 'Subah Ki Akadpan', slug: 'morning-stiffness' },
    { _key: 'rs4', name: 'Swollen Joints', hindiName: 'Jodon Mein Sujan', slug: 'swollen-joints' },
  ],

  sources: [
    { _key: 'src1', title: 'WHO — Musculoskeletal Health Fact Sheet', year: '2023', url: 'https://www.who.int/news-room/fact-sheets/detail/musculoskeletal-conditions' },
    { _key: 'src2', title: 'Mayo Clinic — Knee Pain: Symptoms and Causes', year: '2024', url: 'https://www.mayoclinic.org/symptoms/knee-pain/basics/causes/sym-20050688' },
    { _key: 'src3', title: 'NCBI / NIH — Osteoarthritis Overview', year: '2023', url: 'https://www.ncbi.nlm.nih.gov/books/NBK482326/' },
    { _key: 'src4', title: 'NHS — Knee Pain', year: '2023', url: 'https://www.nhs.uk/conditions/knee-pain/' },
  ],

  quickFacts: [
    'Ghutne mein dard India ki 40+ age group mein sabse common joint complaint hai.',
    'WHO ke mutabiq 15% se zyada adults musculoskeletal pain se affected hain jisme knee pain bhi shamil hai.',
    'Kab doctor zaruri: 1 hafte se zyada dard, sujan, ya ghutna lock ho — turant doctor.',
  ],

  reviewDate: '2026-05',
}

async function seed() {
  console.log('🌱 Seeding Knee Pain symptom page...')
  await client.createOrReplace(doc)
  console.log('✅ Symptom seeded — homeopedia.in/symptoms/knee-pain')
}

seed().catch(console.error)
