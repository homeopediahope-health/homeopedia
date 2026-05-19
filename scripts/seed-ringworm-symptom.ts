import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'symptom-ringworm',
  _type: 'symptom',

  name: 'Ringworm',
  hindiName: 'दाद (Daad) / दद्रु (Dadru)',
  hinglishName: 'Daad / Ringworm',
  slug: { _type: 'slug', current: 'ringworm' },
  bodySystem: 'Skin',

  metaTitle: 'Ringworm in Hindi — Daad ke Karan, Ilaaj aur Homeopathy | Homeopedia',
  metaDescription: 'Daad (ringworm) ke karan, severity aur ghar pe safe steps — simple Hinglish mein. Verified info, doctor-reviewed. Homeopathy angle bhi.',
  publishedAt: new Date('2026-05-19').toISOString(),

  whatIsThis: `Ek gol, laal, khinchi hui ring jab skin pe ubharne lagti hai — aur saath mein khujli — tab aksar samajh nahi aata ki ye kya hai. Daad (ringworm) ka naam sun ke log sochte hain koi keeda hoga — lekin actually ye ek fungal infection hai, koi worm nahi.

India mein garmi aur humidity ki wajah se ye bahut common hai aur sahi pehchaan ke bina baar baar wapas aata rehta hai.

Ye page aapko 2 minute mein batayega — serious hai ya nahi, ghar pe kya karein, aur kab doctor zaruri hai.`,

  prevalence: 'WHO ke mutabik, fungal skin infections duniya bhar mein 1.7 billion se zyada logon ko affect karti hain — India mein garm aur humid climate ki wajah se ye number proportionally zyada hai, khaaskar monsoon aur summer mein.\nSource: WHO — Skin Conditions Global Report | 2023',

  severityLevels: [
    {
      _key: 'sl1',
      level: 'green',
      title: 'Level 1 — Ghar Pe Manage Karo',
      signs: [
        'Ek ya do chhoti gol ring — body pe, face pe nahi',
        'Khujli hai lekin jalan ya pus nahi',
        'Naya infection hai — 3-5 din se zyada nahi',
        'Pehle bhi hua hai, karan pata hai (gym, pet, kapde sharing)',
      ],
    },
    {
      _key: 'sl2',
      level: 'yellow',
      title: 'Level 2 — Is Hafte Doctor Se Milein',
      signs: [
        'Ek hafte se zyada hai lekin better nahi ho raha',
        'Rings badhti ja rahi hain — ek se zyada jagah pe faili',
        'Scalp (sir) pe hai — baalon mein ganjapan dikhe',
        'Nail (nakhun) affect ho rahi hai — moti ya discolored',
      ],
    },
    {
      _key: 'sl3',
      level: 'red',
      title: 'Level 3 — Turant Hospital Jaao',
      signs: [
        'Infection ke saath tez bukhaar (101°F+) aa gaya',
        'Pus nikalne laga ya skin pe deep sores ban gaye',
        'Poore sharir pe bahut tezi se fail raha hai — 1-2 din mein',
        'Diabetes ya immunocompromised condition hai aur infection control nahi ho raha',
      ],
    },
  ],

  timeline: [
    {
      _key: 'tl1',
      duration: '1 se 5 Din',
      label: 'Nayi Takleef',
      advice: 'Abhi infection shuru hua hai — skin pe halki redness ya gol ring banna shuru hui hai. Is stage mein proper antifungal hygiene aur ghar pe care se improvement ho sakti hai. Agar 5 din mein koi fark nahi — Level 2 mein jaao.',
    },
    {
      _key: 'tl2',
      duration: '1 se 4 Hafte',
      label: 'Chalti Aa Rahi',
      advice: 'Ek hafte se zyada ho gaya hai lekin poora theek nahi hua — ya baar baar usi jagah pe wapas aa raha hai. Ye signal hai ki sirf surface treatment enough nahi — root cause dhundna zaroori hai. Is stage mein doctor se milna sahi hoga.',
    },
    {
      _key: 'tl3',
      duration: '1 Mahina Ya Zyada',
      label: 'Purani Problem',
      advice: 'Agar ringworm mahino se hai ya baar baar aata hai — ye chronic fungal pattern hai. Sirf cream se permanent relief nahi milega. Doctor se proper diagnosis, possible test, aur long-term treatment plan zaruri hai. Homeopathy is stage mein underlying immunity improve karne mein helpful ho sakti hai.',
    },
  ],

  lifestyleCauses: [
    {
      _key: 'lc1',
      title: 'Zyada Pasina Aur Synthetic Kapde',
      mechanism: 'Dermatophyte fungi (jo ringworm karte hain) warm aur moist environment mein tezi se badhte hain. Jab synthetic fabric pehnte hain — jo pasina absorb nahi karta — skin pe ek continuously humid layer ban jaati hai. Ye layer fungi ke liye ideal breeding ground hai. Gym mein ek ghante bhi synthetic t-shirt mein — agar turant change nahi kiya — infection ka risk badh jaata hai.',
      patientSigns: 'Infection wahi hoti hai jahan kapde skin se zyada tight hote hain — inner thighs, armpits, kamar ke paas. Exercise ke baad worse.',
    },
    {
      _key: 'lc2',
      title: 'Infected Insaan Ya Jaanwar Se Contact',
      mechanism: 'Ringworm highly contagious hai — direct skin contact se, ya infected insaan ke kapde/towel/comb use karne se failta hai. Pets — khaaskar cats aur dogs — ringworm ke common carriers hain. Pet ke saath khelne ke baad agar haath nahi dhoe aur face touch kiya — infection ho sakta hai.',
      patientSigns: 'Infection wahan hoti hai jo body part pet ya kisi infected insaan ke contact mein aaya. Ghar mein ek ko hua hai — doosron ko bhi risk.',
    },
    {
      _key: 'lc3',
      title: 'Public Places — Gym, Pool, Changing Room',
      mechanism: 'Fungi nami zameen pe ghanton tak survive karte hain. Gym ke shower floors, swimming pool ke aaspaas, ya public changing rooms mein nange paon chalna — ya kisi aur ki towel ya equipment share karna — direct transmission ka sabse common reason hai.',
      patientSigns: 'Paon ya groin mein infection gym ya pool jaana shuru karne ke 1-2 hafte baad shuru hoti hai. Tinea pedis (athlete\'s foot) bhi saath ho sakta hai.',
    },
    {
      _key: 'lc4',
      title: 'Kam Immunity Ya Zyada Antibiotic Use',
      mechanism: 'Body ka immune system normal skin flora ko balance mein rakhta hai. Jab immunity gir jaati hai — illness ke baad, zyada stress se, ya antibiotic course ke baad jo good bacteria ko bhi affect karta hai — fungi overgrow karne lagti hain. Aise logon mein infection jaldi failta hai aur treatment se bhi slow response deta hai.',
      patientSigns: 'Infection unusual jagah pe, zyada widespread, ya standard treatment se jaldi theek nahi hota.',
    },
  ],

  redFlags: [
    'Immunocompromised State (HIV, Diabetes, Cancer Treatment) — agar ringworm ke saath baar baar fever aaye ya infection bahut tezi se failne lage — turant doctor.',
    'Kerion (Deep Fungal Abscess) — agar scalp pe ringworm ke jagah pus-filled, painful swollen area ban jaye — ye serious bacterial superinfection hai, turant hospital.',
    'Tinea Unguium (Nail Infection) — agar nakhun mote, yellow aur brittle ho rahe hain aur saath mein skin ringworm bhi hai — ye systemic antifungal treatment chahti hai, sirf cream nahi chalegi.',
  ],

  linkedDiseaseCards: [
    {
      _key: 'ldc1',
      title: 'Ringworm (Daad)',
      hindiName: 'Daad / Dadru',
      description: 'Ringworm ek fungal infection hai jo skin pe gol, scaly ring banati hai. Sahi treatment se poori tarah theek hoti hai — lekin poora course complete karna zaroori hai.',
      homeopediaSlug: 'ringworm',
      isAvailable: true,
    },
    {
      _key: 'ldc2',
      title: 'Tinea Corporis',
      hindiName: 'Sharir Ki Daad',
      description: 'Body ki skin pe ek ya zyada gol, scaly rings banati hai jinka edge raised hota hai aur center thoda clear lagta hai. Classic ring shape — kapdon se dhaki skin pe zyada hoti hai.',
      homeopediaSlug: '',
      isAvailable: false,
    },
    {
      _key: 'ldc3',
      title: 'Tinea Cruris',
      hindiName: 'Groin Ki Daad / Jock Itch',
      description: 'Inner thighs aur groin area mein hoti hai — tez khujli aur burning ke saath. Garmi aur pasine se dramatically worse hoti hai. Men mein zyada common.',
      homeopediaSlug: '',
      isAvailable: false,
    },
    {
      _key: 'ldc4',
      title: 'Eczema',
      hindiName: 'Chambal / Khujli Ki Bimari',
      description: 'Eczema aur ringworm aksar confuse hote hain — dono mein red, itchy skin hoti hai. Eczema mein ring shape nahi hoti — zyada diffuse aur dry patches hoti hain. Eczema wali skin pe fungal infection secondary tarah lag sakti hai.',
      homeopediaSlug: 'eczema',
      isAvailable: true,
    },
    {
      _key: 'ldc5',
      title: 'Psoriasis',
      hindiName: 'Soriasis / Safed Daag',
      description: 'Psoriasis mein bhi skin pe raised, scaly patches hoti hain jo ringworm jaisi dikh sakti hain. Lekin psoriasis mein silver/white thick scales hoti hain — antifungal cream se better nahi hota.',
      homeopediaSlug: 'psoriasis',
      isAvailable: true,
    },
  ],

  homeCareSteps: [
    {
      _key: 'hcs1',
      stepNumber: 1,
      title: 'Infected Area Ko Dry Rakhein',
      instruction: 'Naha ke turant baad infected area ko clean towel se completely dry karein aur hawa lagne dein kuch der.',
      reason: 'Fungi moisture mein badhti hai — jitna dry rakhoge, utna growth slow hogi.',
    },
    {
      _key: 'hcs2',
      stepNumber: 2,
      title: 'Loose, Cotton Kapde Pehno',
      instruction: 'Infected area pe loose fitting cotton kapde pehno — tight synthetic bilkul avoid karein.',
      reason: 'Cotton kapda skin ko breathe karne deta hai — pasina absorb karta hai. Tight synthetic kapde fungus ke liye warm, humid environment banate hain jo infection worse karta hai.',
    },
    {
      _key: 'hcs3',
      stepNumber: 3,
      title: 'Apna Towel, Kapde Aur Comb Alag Rakhein',
      instruction: 'Infection ke dauran sirf apna personal use karein — roz dhote rahein.',
      reason: 'Ringworm towel, kapde aur comb se bahut aasani se doosron mein fail sakti hai — ya aapke hi doosre body parts pe.',
    },
    {
      _key: 'hcs4',
      stepNumber: 4,
      title: 'Infected Area Ko Bar Bar Mat Chhuein Ya Khujaayein',
      instruction: 'Khujli hone pe bhi scratch karne se bachein — kapde se halka press kar sakte hain.',
      reason: 'Khujane se fungal spores haathon mein aate hain — phir aap jo bhi chhute ho wahan fail jaati hai. Khujane se skin breach hoti hai jisse secondary bacterial infection ka risk badhta hai.',
    },
    {
      _key: 'hcs5',
      stepNumber: 5,
      title: 'Bedsheet Aur Pillow Cover Roz Badlein',
      instruction: 'Infection ke dauran bedsheet aur pillow cover roz ya ek din baad badle aur garam paani mein dhoyein.',
      reason: 'Infected skin se fungal spores bedsheet pe aate hain — raat bhar usi sheet mein sone se re-infection hota hai. Roz dhona is cycle ko todta hai.',
    },
  ],

  homeopathyAngles: [
    {
      _key: 'ha1',
      angle: 'Individualization',
      content: 'Daad ka naam ek hai — lekin har insaan mein wajah aur pattern alag hoti hai. Kisi ki daad raat ko zyada khujlati hai, kisi ki garmi mein worse hoti hai, kisi mein scratch karne pe better feel hota hai — kisi mein aur jaldi fail jaati hai. Homeopathy mein sirf "daad hai" itna nahi dekha jaata — aapki daad kaisi hai, kab badhti hai, kab se hai, pehle bhi hua hai ya nahi — ye sab treatment decide karta hai. Isliye do patients ko ek jaisi daad hogi — aur unka treatment bilkul alag hoga.',
    },
    {
      _key: 'ha2',
      angle: 'Root Cause',
      content: 'Baar baar aane wali daad sirf surface ki problem nahi — body ki immunity ka signal hai. Homeopathy mein sirf daad band karna goal nahi hota — jo cheez isko baar baar la rahi hai, immunity mein jo imbalance hai, usse address kiya jaata hai. Waqt ke saath daad ki frequency aur intensity dono kam hoti hain. Research is area mein limited hai aur results individual hote hain.',
    },
    {
      _key: 'ha3',
      angle: 'Safety',
      content: 'Highly diluted medicines hone ki wajah se homeopathy practically side-effect free hai — bacchon mein bhi safely use ho sakti hai jahan strong antifungal medicines ka long-term use concern hota hai. Emergency ya severe infection mein conventional treatment pehle lein — homeopathy complementary role mein hai, replacement nahi.',
    },
  ],

  homeopathyDiseaseLinks: [
    { _key: 'hdl1', title: 'Ringworm (Daad)', slug: 'ringworm' },
    { _key: 'hdl2', title: 'Eczema (Chambal)', slug: 'eczema' },
    { _key: 'hdl3', title: 'Psoriasis', slug: 'psoriasis' },
  ],

  homeopathyIsFor: [
    'Aap root cause treat karna chahte hain — sirf cream lagake baar baar daad ko band nahi karna',
    'Aap sustainable, long-term relief dhundh rahe hain',
    'Side-effect free option chahiye — khaaskar bacchon ke liye',
  ],

  homeopathyNotFor: [
    'Daad bahut tezi se fail rahi hai ya pus aa raha hai — pehle conventional treatment lein, homeopathy baad mein saath chala sakte hain',
    'Scalp ya nail mein deep infection hai — oral antifungal zaruri hai, baad mein homeopathy saath mein add kar sakte hain',
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Ringworm (Daad) kya hoti hai aur ye kaise failti hai?',
      answer: 'Daad koi worm nahi — ye ek fungal infection hai jo Dermatophyte naam ke fungi se hoti hai. "Ringworm" naam isliye pada kyunki skin pe gol ring jaise patch banta hai. Ye fungi infected insaan, jaanwar ya surface se direct contact se failti hai — sharing towel, kapde, comb ya infected pet se touch bhi infection de sakta hai. Garmi aur humidity mein ye tezi se fail jaati hai, isliye India mein summer aur monsoon mein cases zyada hote hain. Ek baar skin pe aa jaaye — aur sahi treatment na mile — to spores doosre body parts pe bhi ja sakte hain.',
    },
    {
      _key: 'faq2',
      question: 'Ringworm (Daad) kab normal hai aur kab doctor zaruri hai?',
      answer: 'Chhoti, nai daad jo clearly ek jagah limited hai — aur khujli ke alawa koi aur symptom nahi — usmein ghar pe care se improvement ho sakti hai. Doctor zaruri hai jab: Ek hafte mein better nahi ho raha. Scalp ya nakhun affected hain. Pus aa raha hai ya bukhaar hai. Baar baar usi jagah wapas aa raha hai. Aap diabetic hain ya immunity weak hai. Ye signs hain ki sirf surface treatment enough nahi.',
    },
    {
      _key: 'faq3',
      question: 'Daad ka sabse common karan kya hai India mein?',
      answer: 'India mein daad ke sabse common karan hain — infected insaan se direct contact, gym ya pool ke public surfaces se, ya pets (khaaskar cats) se. Garmi mein tight synthetic kapde pehenna aur pasina dry nahi karna bhi major trigger hai. Ghar mein ek member ko daad ho — aur towel ya kapde share hon — to baaki sab ko bhi risk rehta hai. Bacchon mein school ya playgrounds se spreading common hai.',
    },
    {
      _key: 'faq4',
      question: 'Daad kitne din mein theek hoti hai?',
      answer: 'Simple daad properly treat ki jaaye to 2-4 hafte mein theek hoti hai. Scalp ya nakhun ki daad zyada time leti hai — 1-3 mahine tak. Lekin agar ring band ho gayi dikhe par treatment band kar di — to usually 1-2 hafte mein wapas aati hai. Isliye symptoms khatam hone ke baad bhi kuch din treatment continue karna zaroori hota hai. Baar baar aane wali daad mein — root cause dekhna zaroori hai — jo homeopathy approach karta hai.',
    },
    {
      _key: 'faq5',
      question: 'Bina dawai ke daad ghar pe theek ho sakti hai?',
      answer: 'Chhoti, nai daad mein strict hygiene steps se improvement ho sakti hai — infected area dry rakhna, cotton kapde, apna towel alag rakhna. Lekin "bina kuch kiye" spontaneously theek hona reliable nahi hai — fungi aise nahi jaate. Agar 5-7 din mein visible improvement nahi — doctor se milein. Scalp, nail, ya private parts ki daad mein ghar pe sirf hygiene se kaam nahi chalega — wahan proper treatment zaruri hai.',
    },
    {
      _key: 'faq6',
      question: 'Daad baar baar kyun aati rehti hai?',
      answer: 'Daad baar baar aane ke do main karan hain — pehla, pehli baar mein poori tarah theek nahi hui aur spores skin ya kapdon mein reh gaye. Doosra — body ki immunity itni strong nahi ki dobara infection rok sake. Agar sirf cream lagate hain aur ring band ho jaaye to treatment band karte hain — to almost confirm hai ki wapas aayegi. Sahi treatment mein infection ka poora course zaroori hai. Homeopathy baar baar aane wali daad mein underlying immunity address karne ki koshish karta hai — results individual hote hain.',
    },
    {
      _key: 'faq7',
      question: 'Bacchon mein daad zyada kyun hoti hai?',
      answer: 'Bacchon ka immune system fully mature nahi hota — aur wo school, playground, aur sports mein closely interact karte hain jahan infection easily failti hai. Objects share karna — comb, cap, towel, sports equipment — bacchon mein common hai. Scalp ringworm (Tinea Capitis) khaaskar bacchon mein zyada hoti hai aur baalon mein ganjapan la sakti hai agar treat na kiya jaaye. Bacchon ki daad mein doctor se milna better hai — strong oral medicines ki zarurat ho sakti hai khaaskar scalp ke liye.',
    },
    {
      _key: 'faq8',
      question: 'Pregnancy mein daad hona khatarnak hai kya?',
      answer: 'Pregnancy mein daad baby ke liye directly dangerous nahi hoti — lekin kuch important baatein hain. Hormonal changes se immunity thodi altered hoti hai jis se fungal infections zyada aasani se hoti hain. Koi bhi antifungal cream ya medicine lene se pehle doctor se consult karna ZAROORI hai — kuch topical antifungals pregnancy mein avoid kiye jaate hain khaaskar pehle teen mahino mein. Homeopathy pregnancy mein safe option ho sakti hai — lekin qualified homeopathic doctor ki supervision mein. Apne obstetrician ko zaroor batayein.',
    },
    {
      _key: 'faq9',
      question: 'Private parts mein daad (Tinea Cruris) kyun hoti hai?',
      answer: 'Groin area mein daad (Jock Itch / Tinea Cruris) isliye zyada hoti hai kyunki ye area hamesha warm aur moist rehta hai — especially India ki garmi mein. Tight undergarments, synthetic fabric, gym ke baad kapde na badalna, ya infected partner se contact — ye common reasons hain. Men mein ye zyada common hai. Agar saath mein feet pe bhi infection hai (Athlete\'s Foot) — to wo bhi treat karna zaroori hai warna ek doosre ko re-infect karte rehte hain. Doctor se milein — private area ki daad bilkul theek hoti hai sahi treatment se.',
    },
    {
      _key: 'faq10',
      question: 'Kya homeopathy se daad permanently theek ho sakti hai?',
      answer: '"Permanent cure" ka vaada koi bhi system honestly nahi kar sakta — aur koi kare to doubt karo. Jo realistic hai: homeopathy baar baar aane wali daad mein body ki underlying immunity aur fungal susceptibility address karne ki koshish karta hai. Regular antifungal cream se sirf surface treat hoti hai — homeopathy root cause approach karta hai. Kuch patients mein frequency aur intensity dono kum hoti hain over time. Results individual hote hain — ek detailed case history ke baad hi treatment decide hoti hai.',
    },
    {
      _key: 'faq11',
      question: 'Daad mein kaunsa test karwana chahiye?',
      answer: 'Zyada tar daad dekhne pe hi diagnose ho jaati hai — special test zaruri nahi hota. Lekin kuch situations mein doctor ye tests suggest kar sakte hain: KOH Test (Potassium Hydroxide) — skin scraping se fungi ka microscope mein confirm karna, simple aur quick test. Fungal Culture — exact species identify karne ke liye, agar standard treatment kaam na kare. Wood\'s Lamp — UV light se scalp ringworm confirm karna. Agar daad baar baar aati hai ya treatment se theek nahi ho rahi — doctor se milein, test helpful hoga.',
    },
    {
      _key: 'faq12',
      question: 'Garam paani se nahane ke baad daad kyun badhti hai?',
      answer: 'Garam paani skin ki natural protective layer (sebum) ko remove karta hai — aur skin ko zyada dry aur cracked bana deta hai. Isse fungi aasani se skin mein penetrate kar sakti hain. Saath hi, hot shower ke baad agar skin properly dry nahi ki — moisture trapped rehta hai jo fungi ke liye ideal environment hai. Daad mein gunguna ya normal temperature paani better hai — hot shower avoid karein khaaskar infected area pe.',
    },
  ],

  relatedSymptoms: [
    { _key: 'rs1', name: 'Khujli (Itching)', hindiName: 'Poore Sharir Mein Khujli', slug: 'itching' },
    { _key: 'rs2', name: 'Skin Rash', hindiName: 'Twacha Pe Daane', slug: 'skin-rash' },
    { _key: 'rs3', name: 'Scalp Itching', hindiName: 'Sar Mein Khujli', slug: 'scalp-itching' },
    { _key: 'rs4', name: 'Fungal Infection', hindiName: 'Fungal Infection', slug: 'fungal-infection' },
  ],

  sources: [
    { _key: 'src1', title: 'Mayo Clinic — Ringworm (Tinea Corporis): Symptoms & Causes', year: '2024', url: 'https://www.mayoclinic.org/diseases-conditions/ringworm-body/symptoms-causes/syc-20353780' },
    { _key: 'src2', title: 'WHO — Skin Conditions (Dermatophytosis)', year: '2023', url: 'https://www.who.int/news-room/fact-sheets/detail/skin-conditions' },
    { _key: 'src3', title: 'NCBI / PubMed — Dermatophytosis: A Review', year: '2020', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7122431/' },
    { _key: 'src4', title: 'NHS UK — Ringworm: Symptoms, Causes, Treatment', year: '2023', url: 'https://www.nhs.uk/conditions/ringworm/' },
  ],

  quickFacts: [
    'Ringworm koi worm nahi — ye Dermatophyte fungi se hoti hai jo skin ki keratin layer pe grow karti hai.',
    'Fungal skin infections India mein monsoon aur summer mein peak pe hote hain — WHO estimates 1.7 billion+ globally affected.',
    'Kab doctor zaruri: Scalp ya nail affect ho, baar baar wapas aaye, ya 1 hafte mein better na ho.',
  ],

  reviewDate: '2026-05',
}

async function seed() {
  console.log('🌱 Seeding Ringworm symptom page...')
  await client.createOrReplace(doc)
  console.log('✅ Symptom seeded — homeopedia.in/symptoms/ringworm')
}

seed().catch(console.error)
