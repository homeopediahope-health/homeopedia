import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
})

const widal = {
  _id: 'labtest-widal',
  _type: 'labTest',
  name: 'Widal Test (Typhoid Serology)',
  fullForm: 'Widal Agglutination Test',
  hindiName: 'Typhoid Jaanch',
  slug: { _type: 'slug', current: 'widal-test' },
  category: 'Blood',
  metaTitle: 'Widal Test Kya Hai? Normal Range, High/Low & Kab Karaye (2026)',
  metaDescription: 'Widal Test ka normal range, positive matlab, kab karaye. Complete guide, verified, doctor-reviewed. Typhoid detect kaise hota hai. Homeopedia.in',
  reviewDate: 'May 2026',

  heroText: `Widal Test ek blood test hai jo aapke khoon mein Salmonella typhi aur Salmonella paratyphi bacteria ke against bane antibodies detect karta hai. Ye test Typhoid aur Paratyphoid Fever ki presumptive diagnosis ke liye kiya jaata hai.

Jab aap typhoid-causing bacteria (Salmonella) se infected hote hain toh aapka immune system us bacteria ke against antibodies banata hai. In antibodies ko agglutinins kehte hain. Widal test in antibodies ko measure karta hai serum mein do antigens ke against. O Antigen yaani Somatic antigen bacteria ki body hai, aur H Antigen yaani Flagellar antigen bacteria ki tail hai.

Report mein aapko S. Typhi O, S. Typhi H, S. Paratyphi AH aur S. Paratyphi BH jaise values dikhenge aur saath mein titer value hogi jaise 1:20, 1:80, 1:160, 1:320. Jitna bada number, utna zyada antibody, matlab infection ki zyada possibility.

Ek important baat: Widal test sirf ek presumptive test hai. Ye typhoid ka final proof nahi. Blood Culture is se zyada accurate hoti hai. Isliye positive report aane pe ghabrao mat. Doctor saath mein doosre tests bhi consider karte hain.`,

  whenToTest: [
    '5-7 din se zyada se bukhaar hai jo aatak nahi raha',
    'Bukhaar ke saath pet mein dard, marod ya constipation ya diarrhea ho',
    'Badan mein kamzori, thakaan aur bhookh na lagna ho',
    'Sir dard aur muscle pain ke saath fever ho',
    'Nausea, ulti ya khaana na pacha raha ho',
    'Kisi typhoid patient ke saath close contact hua ho',
    'Bahar ka khaana ya contaminated paani pine ka doubt ho',
    'Fever ke 7-14 din ke beech mein diagnosis ke liye',
  ],

  whatItDetects: `Is test se pata chalta hai ki Salmonella typhi ya paratyphi bacteria ke against antibodies present hain ya nahi. Infection fresh (active) hai ya pehle ka (past) hai ye bhi indicate karta hai. Treatment ke baad infection kum hua ya nahi track hota hai. Paratyphoid fever toh nahi hai ye AH aur BH antigens se pata chalta hai.

Ye test nahi detect karta: Direct bacteria nahi pakadta, sirf unke against bane antibodies detect karta hai. Dengue, Malaria, HIV aur Cancer ke liye bilkul alag tests hote hain.`,

  normalRanges: [
    { _key: 'to',   parameter: 'S. Typhi O (Adults)',      normalRange: '< 1:80',  unit: 'Titer', highBrief: 'Active/Current Infection',    lowBrief: 'No current Typhoid' },
    { _key: 'th',   parameter: 'S. Typhi H (Adults)',      normalRange: '< 1:80',  unit: 'Titer', highBrief: 'Past Infection ya Immunity',   lowBrief: 'No significant exposure' },
    { _key: 'ah',   parameter: 'S. Paratyphi AH (Adults)', normalRange: '< 1:80',  unit: 'Titer', highBrief: 'Paratyphoid A Infection',      lowBrief: 'Normal' },
    { _key: 'bh',   parameter: 'S. Paratyphi BH (Adults)', normalRange: '< 1:80',  unit: 'Titer', highBrief: 'Paratyphoid B Infection',      lowBrief: 'Normal' },
    { _key: 'child',parameter: 'Children',                 normalRange: '< 1:80',  unit: 'Titer', highBrief: 'Possible Infection',           lowBrief: 'Normal' },
    { _key: 'preg', parameter: 'Pregnancy',                normalRange: '< 1:80',  unit: 'Titer', highBrief: 'Needs immediate doctor consult', lowBrief: 'Normal' },
    { _key: 'bord', parameter: 'Borderline',               normalRange: '1:160',   unit: 'Titer', highBrief: 'Doctor se consult zaroori',    lowBrief: '' },
    { _key: 'pos',  parameter: 'Positive',                 normalRange: '>= 1:320', unit: 'Titer', highBrief: 'Active infection possible',   lowBrief: '' },
  ],

  pregnancyInfo: {
    applicable: true,
    normalRange: 'Technically wahi range hai, < 1:80 normal maana jaata hai. Lekin pregnancy mein immune system naturally alag behave karta hai isliye koi bhi elevated value doctor ke saamne rakhna zaroori hai.',
    riskNote: `Test sirf blood draw hai, bilkul safe hai pregnancy mein. Lekin result ki interpretation zyada carefully ki jaati hai kyunki pregnancy mein typhoid zyada serious ho sakta hai. Antibiotics ka selection carefully kiya jaata hai, kuch antibiotics pregnancy-safe nahi hote. Tez bukhaar se baby ko risk ho sakta hai.`,
    whenDoctor: 'Prolonged fever yaani 5 din se zyada, dehydration ke signs, stomach pain ya loose motions ke saath fever, ya contaminated food ya water exposure ka doubt ho toh doctor zaroor likhte hain. Ghabrao mat. Early detection mein hi treatment easy hoti hai.',
  },

  highMeans: [
    'Active Typhoid Fever yaani Salmonella typhi infection, sabse common kaaran',
    'Active Paratyphoid Fever agar AH ya BH high ho',
    'Pehle kabhi typhoid hua tha aur antibodies abhi bhi hain (past exposure ke residual antibodies)',
    'Typhoid vaccine liya hua hai recently, vaccine se H antigen high ho sakta hai permanently',
    'Cross-reaction, kuch aur infections jaise Malaria, Brucellosis ya Liver disease mein bhi Widal false positive aa sakta hai',
    'Endemic area mein rehne ki wajah se baseline titer already high hota hai kuch logon mein, India mein especially',
  ],

  highReassurance: 'Ghabrao mat. Ek high Widal value se directly ye diagnose nahi hota ki typhoid hai. India typhoid-endemic country hai. PMC ke ek Indian study mein 42.6% healthy volunteers ka Widal positive aa gaya tha bina active infection ke. Doctor symptoms, fever duration aur Blood Culture saath mein dekhte hain. Sirf Widal ke basis pe treatment shuru karna sahi nahi.',

  lowMeans: [
    'Typhoid infection abhi nahi hai ya abhi detect nahi hua',
    'Salmonella se infected nahi hain (most likely)',
    'Test bahut jaldi karaaya ho, infection ke pehle 7 din mein Widal negative aa sakta hai kyunki antibodies banne mein waqt lagta hai',
    'Antibiotics pehle se le rahe ho toh false negative aa sakta hai',
  ],

  lowConcern: 'Negative matlab bilkul normal aur safe hai, ye reassuring result hai. Lekin agar strong symptoms hain aur Widal negative hai toh doctor Blood Culture recommend kar sakte hain jo gold standard test hai. Antibodies 2nd week mein zyada detect hoti hain.',

  redFlags: [
    'Bukhaar 104 degree F yaani 40 degree C ya usse zyada ho',
    'Bukhaar 7 din se zyada lag raha ho aur kum nahi ho raha',
    'Widal 1:320 ya usse zyada aaye',
    'Bukhaar ke saath bada pet dard aur rigid abdomen ho (intestinal perforation ka sign)',
    'Bahut zyada kamzori, behoshi jaisi halat ho',
    'Dehydration ke signs, bahut kam paani peena aur aankhon ka dhansna',
    'Rose spots yaani rash aur bukhaar saath mein (typhoid ka sign)',
    'Blood in stool ya urine',
  ],

  emergencyLevel: 'Extremely high fever with confusion, severe abdominal pain with rigid abdomen, ya unconsciousness ho toh turant emergency room jaao. Ye intestinal perforation ya severe typhoid ke signs ho sakte hain.',

  selfTreatWarning: 'Report dekhkar khud treatment mat shuru karo. Antibiotics ka dose aur duration doctor decide karta hai. Galat antibiotic ya incomplete course se antibiotic resistance ho sakti hai jo zyada dangerous hai.',

  preparation: {
    fastingRequired: false,
    fastingHours: 0,
    bestTime: 'Bimari shuru hone ke 7-14 din ke beech mein test karwaana sabse accurate result deta hai. Pehle hafte mein test karaye toh false negative aa sakta hai kyunki antibodies abhi puri nahi banti. Subah ya shaam, koi fark nahi.',
    whatToEat: 'Kuch bhi khaane ki restriction nahi hai. Normal khaana khao. Paani peena bilkul theek hai, in fact encouraged hai taki nadi achhe se dikhey aur sample collection easy ho.',
    whatToAvoid: 'Agar antibiotics chal rahi hain toh doctor ko batao, antibiotics result affect kar sakti hain. Typhoid vaccine recent liya ho toh doctor ko batao, H antigen high aa sakta hai vaccine ki wajah se.',
    medicineNote: 'Koi bhi medicine khud band mat karo. Doctor ko batao aapko kya chal raha hai. Woh decide karenge kya hold karna hai test se pehle.',
    accuracyNote: 'Bimari ke 7-14 din ke beech ka test sabse reliable hota hai. Single Widal test se final diagnosis nahi hoti, India mein endemic area mein healthy logon mein bhi 1:40 tak titer mil sakta hai.',
  },

  sampleInfo: {
    sampleType: 'Blood (Serum, venous, arm ki nadi se)',
    sampleAmount: 'Sirf 2-3 mL blood, ek chhoti si matra',
    reportTime: 'Slide Method (rapid): Same day, kuch ghante mein. Tube Method (zyada accurate): Same day ya next day by 6 PM.',
    onlineAvailable: true,
  },

  myths: [
    {
      _key: 'myth1',
      myth: 'Widal test ke liye khali pet rehna zaroori hai',
      truth: 'Bilkul nahi. Widal test ke liye fasting ki koi zaroorat nahi. Khaana khane ke baad bhi sample de sakte ho, result same aata hai.',
    },
    {
      _key: 'myth2',
      myth: 'Widal test positive matlab pakka typhoid hai',
      truth: 'Widal ek presumptive test hai, confirm nahi. India mein healthy logon mein bhi pehle ke exposure ya vaccination se antibodies hoti hain. Blood Culture final confirm karta hai.',
    },
    {
      _key: 'myth3',
      myth: 'Widal test bahut painful hota hai',
      truth: 'Sirf ek chhoti needle se blood draw hota hai, 2-3 second ka kaam. Usse zyada kuch nahi. Chhote bachon mein bhi easily ho jaata hai.',
    },
    {
      _key: 'myth4',
      myth: 'Widal se cancer, HIV ya dengue bhi pata chalta hai',
      truth: 'Bilkul nahi. Widal test sirf Salmonella ke antibodies detect karta hai. Cancer, HIV aur dengue ke liye completely alag tests hain.',
    },
    {
      _key: 'myth5',
      myth: 'Widal negative aaya matlab main definitely safe hoon',
      truth: 'Pehle hafte mein antibodies puri tarha ban nahi paayi hoti hain isliye false negative aa sakta hai. Symptoms hain toh doctor se dobara discuss karo aur blood culture consider karo.',
    },
    {
      _key: 'myth6',
      myth: 'Widal positive aane pe ghar mein khaana band kar do aur sirf liquid piyo',
      truth: 'Khaane ka decision aur diet restriction doctor decide karta hai, symptoms aur severity ke hisaab se. Khud se koi bhi extreme decision mat lo report dekh ke.',
    },
    {
      _key: 'myth7',
      myth: 'Widal test se pehle paani bhi nahi peena chahiye',
      truth: 'Paani peena bilkul theek hai, in fact encouraged hai taki nadi achhe se dikhey aur sample collection easy ho.',
    },
  ],

  comparisons: [
    {
      _key: 'comp1',
      comparedTest: 'Typhidot Test',
      comparedTestSlug: '',
      differencePoints: [
        'Kya detect karta hai | O aur H antigen ke antibodies | IgM aur IgG antibodies specifically',
        'Accuracy | Moderate 53-73% sensitivity | Better, 93% sensitivity',
        'Best time | 2nd week of fever | 1st week se bhi useful',
        'False positive risk | Zyada chance India mein | Kam chance',
        'India mein availability | Most common, har jagah available | Better choice for early cases',
      ],
    },
    {
      _key: 'comp2',
      comparedTest: 'Blood Culture',
      comparedTestSlug: '',
      differencePoints: [
        'Kya detect karta hai | O aur H antibodies (indirect) | Direct bacteria pakadta hai',
        'Accuracy | Moderate | Highest, Gold Standard',
        'Best time | 2nd week mein | 1st week mein best',
        'False positive | Haan, India mein common | Nahi hota',
        'Report time | Few hours | 48-72 ghante',
      ],
    },
    {
      _key: 'comp3',
      comparedTest: 'CBC Test',
      comparedTestSlug: 'cbc',
      differencePoints: [
        'Kya detect karta hai | Typhoid-specific antibodies | Overall blood count',
        'Typhoid mein role | Primary diagnostic test | Infection severity aur complications dekhne ke liye',
        'Specificity | Typhoid-specific | Non-specific, general infection indicator',
        'Kab saath karein | Dono saath mein better picture | Typhoid workup mein dono zaroori',
        'Fasting | Nahi | Nahi',
      ],
    },
  ],

  repeatInfo: `Initial test negative aaya lekin symptoms continue hain toh 3-5 din baad dobara karaye. Antibody levels ab detect ho sakti hain.

Treatment ke baad doctor 2-4 hafte baad repeat test likh sakte hain confirm karne ke liye ke infection khatam hua. Note: Treatment ke baad bhi H antigen months tak elevated reh sakta hai, ye normal hai, active infection nahi.

Normal result tha aur fir se symptoms aaye toh doctor ki salah se 2-4 hafte baad repeat karein.

Typhoid carrier monitoring mein doctor long-term monitoring ke liye periodically test karte hain.

Healthy logon mein routine check ke liye Widal test recommended nahi. Sirf symptoms hone pe.`,

  linkedDiseases: [
    { _key: 'ld1', diseaseName: 'Typhoid Fever', diseaseSlug: 'typhoid', isAvailable: false },
    { _key: 'ld2', diseaseName: 'Paratyphoid Fever', diseaseSlug: 'paratyphoid', isAvailable: false },
    { _key: 'ld3', diseaseName: 'Enteric Fever', diseaseSlug: 'enteric-fever', isAvailable: false },
  ],

  relatedTests: [
    { _key: 'rt1', testName: 'CBC (Complete Blood Count)', testSlug: 'cbc', isAvailable: true },
    { _key: 'rt2', testName: 'LFT (Liver Function Test)', testSlug: 'liver-function-test-lft', isAvailable: true },
    { _key: 'rt3', testName: 'Blood Culture Test', testSlug: 'blood-culture', isAvailable: false },
    { _key: 'rt4', testName: 'Typhidot Test', testSlug: 'typhidot-test', isAvailable: false },
    { _key: 'rt5', testName: 'Dengue NS1 + IgM Test', testSlug: 'dengue-test', isAvailable: false },
    { _key: 'rt6', testName: 'Malaria Test', testSlug: 'malaria-test', isAvailable: false },
  ],

  homeopathyAngle: `Ghabrao mat. Ek elevated Widal value akele koi diagnosis nahi deti.

Pehla step: Apni poori report, symptoms aur fever duration lekar ek doctor se milein. Woh Blood Culture ya Typhidot test saath mein le sakte hain confirm karne ke liye.

Agar baar baar typhoid ya enteric fever ho raha hai ya antibiotics ke baad bhi weakness continue hai toh homeopathy underlying immunity ko strengthen karne mein helpful ho sakti hai. Conventional treatment symptoms treat karta hai jabki homeopathy root cause yaani immune system ki weakness ko address karne ki koshish karta hai. Individualized treatment mein poori health history dekhi jaati hai. Side effects practically nil hote hain.

Apni report lekar Dr. Shadab Khan se consult karein.`,

  faqs: [
    {
      _key: 'faq1',
      question: 'Widal test kya hai?',
      answer: 'Widal test ek blood test hai jo Typhoid aur Paratyphoid fever ke liye blood mein Salmonella bacteria ke antibodies detect karta hai. Ye O (somatic) aur H (flagellar) antigens ke against antibodies measure karta hai, titer values ke roop mein jaise 1:80, 1:160, 1:320.',
    },
    {
      _key: 'faq2',
      question: 'Widal test ka full form kya hai?',
      answer: 'Widal koi abbreviation nahi hai. Ye test French bacteriologist Georges Fernand Isidor Widal ke naam pe rakha gaya hai jinhone 1896 mein ise develop kiya tha. Full naam hai Widal Agglutination Test ya Widal Serology Test.',
    },
    {
      _key: 'faq3',
      question: 'Widal test kaunsi bimari ke liye hota hai?',
      answer: 'Primarily Typhoid Fever (Salmonella typhi) aur Paratyphoid Fever (Salmonella paratyphi A aur B) ke liye. Ye koi aur bimari detect nahi karta.',
    },
    {
      _key: 'faq4',
      question: 'Widal test ki normal range kya hai?',
      answer: 'Normal range hai 1:80 se kam yaani 1:20 aur 1:40 normal hain. 1:160 borderline hai aur 1:320 ya usse zyada positive consider kiya jaata hai. Lekin India mein healthy logon mein bhi 1:40 tak common ho sakta hai pehle ke exposure ki wajah se.',
    },
    {
      _key: 'faq5',
      question: 'Widal test mein O aur H ka kya matlab hai?',
      answer: 'O matlab Somatic antigen yaani bacteria ki body ka ek part. H matlab Flagellar antigen yaani bacteria ki tail. Dono ke against antibodies alag alag measure ki jaati hain. O antigen active infection aur H antigen past infection ya vaccination indicate kar sakta hai.',
    },
    {
      _key: 'faq6',
      question: 'Widal test 1:80 matlab kya hai?',
      answer: '1:80 matlab aapke blood mein Salmonella antibodies ka titer 1:80 hai. India-specific context mein ye usually normal range ke andar maana jaata hai, active typhoid infection nahi. Lekin agar symptoms bhi hain toh doctor se zaroor discuss karo.',
    },
    {
      _key: 'faq7',
      question: 'Widal test positive kya hota hai?',
      answer: 'Jab O ya H antigen ka titer 1:160 ya usse zyada ho toh generally positive maana jaata hai. Iska matlab active ya recent Salmonella infection possible hai. Lekin ye confirm nahi, Blood Culture se confirm karna chahiye.',
    },
    {
      _key: 'faq8',
      question: 'Widal test negative ka matlab kya hai?',
      answer: 'Negative matlab significant Salmonella antibodies present nahi hain yaani active typhoid nahi hai ya detect nahi hua. Pehle 7 din mein false negative common hai kyunki antibodies abhi puri nahi banti.',
    },
    {
      _key: 'faq9',
      question: 'Widal positive aaya toh ghabrana chahiye?',
      answer: 'Ghabrao mat. India mein Widal ke bahut false positives aate hain, pehle ke exposure, vaccination ya cross-reactions se. Doctor saath mein symptoms aur Blood Culture dekhte hain diagnosis ke liye. Khud treatment mat shuru karo.',
    },
    {
      _key: 'faq10',
      question: 'Widal test ke liye khali pet rehna zaroori hai?',
      answer: 'Nahi, bilkul nahi. Fasting ki koi zaroorat nahi hai Widal test ke liye. Khaana khane ke baad bhi test karaa sakte ho.',
    },
    {
      _key: 'faq11',
      question: 'Widal test ka best time kab hai?',
      answer: 'Bimari shuru hone ke 7-14 din ke beech mein. Pehle hafte mein antibodies puri nahi banti isliye test miss ho sakta hai. Second week mein zyada accurate result aata hai.',
    },
    {
      _key: 'faq12',
      question: 'Widal test se pehle koi medicine band karni chahiye?',
      answer: 'Khud se koi medicine band mat karo. Doctor ko batao kya le rahe ho, khaaskar antibiotics jo result affect kar sakti hain aur fever medicines. Doctor decide karenge.',
    },
    {
      _key: 'faq13',
      question: 'Kya Widal test se cancer, dengue ya HIV pata chalta hai?',
      answer: 'Bilkul nahi. Widal sirf Salmonella ke antibodies detect karta hai. Cancer ke liye alag markers hain, dengue ke liye NS1 ya IgM test aur HIV ke liye ELISA ya Western Blot. Ye bilkul alag tests hain.',
    },
    {
      _key: 'faq14',
      question: 'Widal test aur Typhidot test mein kya fark hai?',
      answer: 'Widal O aur H antibodies measure karta hai, widely available aur India mein most common. Typhidot IgM aur IgG antibodies detect karta hai, zyada sensitive hai khaaskar early infection mein, false positive kam. Blood Culture gold standard hai dono se.',
    },
    {
      _key: 'faq15',
      question: 'Pregnancy mein Widal test safe hai?',
      answer: 'Haan, sirf blood draw hai, bilkul safe. Lekin result interpretation zyada carefully ki jaati hai kyunki pregnancy mein typhoid serious ho sakta hai aur antibiotics ka selection different hota hai.',
    },
    {
      _key: 'faq16',
      question: 'Widal test ki report kitne time mein aati hai?',
      answer: 'Slide method (rapid): Few hours, same day. Tube method jo zyada accurate hai: Same day evening ya next day by 6 PM. Most major labs online ya WhatsApp pe bhi bhejte hain.',
    },
    {
      _key: 'faq17',
      question: 'Kya Widal test ghar pe ho sakta hai?',
      answer: 'Test lab mein hota hai. Lekin blood sample collection ghar pe ho sakta hai. Dr Lal PathLabs, Metropolis aur Redcliffe jaise labs trained phlebotomist ghar bhejte hain.',
    },
    {
      _key: 'faq18',
      question: 'Widal test ke baad treatment shuru kab karein?',
      answer: 'Kabhi bhi khud se shuru mat karo. Doctor result dekhkar, symptoms assess karke aur zaroorat pe Blood Culture karke decision lenge. Galat antibiotic ya incomplete course se antibiotic resistance hoti hai jo zyada dangerous hai.',
    },
  ],
}

async function seed() {
  try {
    const result = await client.createOrReplace(widal)
    console.log('✅ Widal Test seeded:', result._id)
  } catch (err) {
    console.error('❌ Error:', err)
    process.exit(1)
  }
}

seed()
