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

const ana = {
  _id: 'labtest-ana',
  _type: 'labTest',
  name: 'ANA Test (Antinuclear Antibody)',
  fullForm: 'Antinuclear Antibody Test',
  hindiName: 'Antinuclear Antibody Jaanch',
  slug: { _type: 'slug', current: 'ana-test' },
  category: 'Blood',
  metaTitle: 'ANA Test Kya Hota Hai — Normal Range aur Matlab | Homeopedia',
  metaDescription: 'ANA test kyun hota hai, positive ANA ka matlab kya hai, aur kaunsi bimariyan detect hoti hain? Puri jaankari Hindi mein doctor se. Homeopedia pe padho.',
  reviewDate: 'May 2026',

  heroText: `ANA ya Antinuclear Antibody Test ek blood test hai jo aapke khoon mein anti-nuclear antibodies ki presence detect karta hai. Ye woh antibodies hain jo galti se aapke apne body ke cells ke nucleus pe attack karne lagte hain.

Normally, hamare immune system mein antibodies hote hain jo bahari cheezein jaise bacteria aur viruses se ladte hain. Lekin kuch logon mein immune system confused ho jaata hai aur apne hi healthy cells ke nucleus ko dushman samajh kar unpe antibodies chodne lagta hai. In ghalat antibodies ko antinuclear antibodies ya ANA kehte hain.

ANA test yahi detect karta hai, ki kya aapke khoon mein ye galat antibodies hain ya nahi, aur kitni maatra mein hain. Ye test akela diagnosis nahi deta, lekin doctor ko sahi direction mein aage jaane mein help karta hai, khaaskar jab autoimmune bimari ka doubt ho.

Ye test mainly Lupus (SLE), Rheumatoid Arthritis, Sjogren's Syndrome, Scleroderma aur doosri autoimmune conditions ke screening ke liye kiya jaata hai. Ek important baat: thoda ANA hona normal bhi hai. Problem tab hoti hai jab bahut zyada ya bahut high titer mein ho, aur saath mein symptoms bhi ho.`,

  whenToTest: [
    'Lambe samay se joint pain, akadahat ya sujan, khaaskar haathon ya ghutnon mein',
    'Bahut zyada aur bina wajah ki thakan jo rest se theek na ho',
    'Cheeks ya naak pe butterfly-shaped rash (Lupus ka common sign)',
    'Dhoop mein nikalne pe skin pe reaction (photosensitivity)',
    'Bina wajah bukhaar aana baar baar',
    'Mouth ulcers baar baar aana',
    'Baalon ka bahut zyada girna',
    'Raynaud\'s phenomenon, thandi mein ungliyan nili ya safed pad jaana',
    'Aankhein ya mooh bahut dry rehna',
    'Kidneys ya heart se related unexplained problems',
    'Family mein kisi ko pehle se autoimmune disease ho',
    'Baar baar miscarriage ya preeclampsia ka history ho',
  ],

  whatItDetects: `Is test se pata chalta hai ki kya aapka immune system apne hi cells pe attack kar raha hai. Ye mainly Lupus (SLE) ke liye screening karta hai, aur Sjogren's Syndrome, Scleroderma, Mixed Connective Tissue Disease ki possibility bhi check karta hai.

Agar positive aaye toh doctor aage ANA profile, ENA panel ya anti-dsDNA jaise aur specific tests karta hai. Already diagnosed autoimmune patients mein disease activity monitor karne ke liye bhi ye test hota hai.`,

  normalRanges: [
    { _key: 'neg',    parameter: 'Negative (Normal)',      normalRange: '< 1:40',         unit: 'Titer', highBrief: 'Possible autoimmune sign',       lowBrief: 'Normal, reassuring' },
    { _key: 'bord',   parameter: 'Borderline Low',         normalRange: '1:40 – 1:80',    unit: 'Titer', highBrief: '5-15% healthy log bhi positive', lowBrief: 'Usually not significant' },
    { _key: 'mod',    parameter: 'Moderate Positive',      normalRange: '1:160',          unit: 'Titer', highBrief: 'Further tests zaroori',          lowBrief: '' },
    { _key: 'high',   parameter: 'High Positive',          normalRange: '>= 1:320',       unit: 'Titer', highBrief: 'Rheumatology evaluation needed',  lowBrief: '' },
    { _key: 'vhigh',  parameter: 'Very High',              normalRange: '>= 1:640',       unit: 'Titer', highBrief: 'Active autoimmune disease likely', lowBrief: '' },
    { _key: 'elisa',  parameter: 'ELISA Method Negative',  normalRange: '< 1.0',          unit: 'IU/mL', highBrief: 'Lab-specific cutoff vary karta hai', lowBrief: 'Negative, normal' },
    { _key: 'elisab', parameter: 'ELISA Borderline',       normalRange: '1.0 – 3.0',     unit: 'IU/mL', highBrief: 'Repeat ya clinical correlation',  lowBrief: '' },
    { _key: 'elisap', parameter: 'ELISA Positive',         normalRange: '> 3.0',          unit: 'IU/mL', highBrief: 'Further workup recommended',     lowBrief: '' },
  ],

  pregnancyInfo: {
    applicable: true,
    normalRange: 'Low positive (1:40 – 1:80) pregnancy mein temporary ho sakta hai. High titers pe (1:160 aur above) specialist monitoring zaroori hai.',
    riskNote: `Pregnancy khud ek physiological stress hai jisme immune system thoda alag behave karta hai. Kuch pregnant women mein low-positive ANA temporary aata hai jo delivery ke baad normal ho sakta hai.

ANA positive pregnant women mein, khaaskar high titers pe, miscarriage, preterm birth ya neonatal lupus ka thoda risk ho sakta hai. Lekin bahut si ANA positive maaein healthy babies deliver karti hain. Ghabrao mat, doctor properly monitor karenge.`,
    whenDoctor: 'Baar baar miscarriage ya preeclampsia ka history ho toh zaroor test karwao. Agar positive aaye toh doctor anti-dsDNA, anti-Ro/SSA, anti-La/SSB jaise specific antibodies bhi check karta hai. Specialist se milein aur monitoring mein koi khasoorat mat chodo.',
  },

  highMeans: [
    'Systemic Lupus Erythematosus (SLE), sabse common ANA-positive condition',
    'Sjogren\'s Syndrome, dry eyes aur dry mouth',
    'Scleroderma, skin aur connective tissue ka stiffening',
    'Rheumatoid Arthritis, joints mein inflammation',
    'Mixed Connective Tissue Disease (MCTD)',
    'Autoimmune Hepatitis, liver pe immune attack',
    'Polymyositis ya Dermatomyositis, muscles pe attack',
    'Hashimoto\'s Thyroiditis, thyroid autoimmune condition',
    'Kuch viral infections jaise mononucleosis ya hepatitis C',
    'Certain medicines jaise hydralazine, procainamide, isoniazid (drug-induced ANA)',
    'Advancing age, 60 se upar ke logon mein low positive common hai',
    'Healthy individuals mein bhi 5-10% mein low positive mil sakta hai',
  ],

  highReassurance: 'ANA high hona seedha koi bimari confirm nahi karta. Ye sirf screening result hai, diagnosis nahi. Low titer bina symptoms ke usually koi problem nahi. Doctor symptoms aur additional specific tests se final picture banate hain. Akele ANA se judgment mat karein.',

  lowMeans: [
    'Antinuclear antibodies detect nahi hue, ye reassuring result hai',
    'Lupus ya most autoimmune diseases ki possibility significantly kam ho jaati hai',
    'ANA negative se Sjogren\'s, Scleroderma ya Antiphospholipid Syndrome 100% rule out nahi hoti',
    'Kuch conditions kabhi kabhi ANA negative pe bhi ho sakti hain',
    'Symptoms strong hain toh doctor clinical picture ke basis pe aur specific tests kar sakte hain',
  ],

  lowConcern: 'Negative ANA generally good news aur reassuring hai. Lekin agar symptoms strong hain jaise joint pain, rash aur fatigue toh negative result ke bawajood doctor se zaroor milein. Clinical picture bhi utni hi important hai jitna lab result.',

  redFlags: [
    'Joint mein bahut tez sujan ya dard aur chalpe firne mein takleef',
    'Face pe red butterfly-shaped rash achanak aaye',
    'Thakan itni zyada ho ki daily kaam mushkil ho jaaye',
    'Unexplained bukhaar baar baar aaye',
    'Urine mein khoon aaye (kidney involvement sign)',
    'Chest pain ya saans lene mein takleef (heart ya lung involvement)',
    'Aankhon ya mooh mein severe dryness aaye',
    'ANA titer >= 1:160 ke saath koi bhi symptoms',
  ],

  emergencyLevel: 'ANA >= 1:320 ya usse zyada aur saath mein unexplained kidney, lung ya blood problems ho toh turant rheumatologist se milein. Koi bhi titer ke saath organ involvement ke signs emergency mein treat karein.',

  selfTreatWarning: 'Report dekhkar khud treatment shuru mat karo. ANA result interpret karna complex hai, sirf doctor hi sahi guide kar sakte hain apni poori clinical picture dekh ke. Lab report starting point hai, treatment plan nahi.',

  preparation: {
    fastingRequired: false,
    fastingHours: 0,
    bestTime: 'Koi specific time nahi, subah, dopahar ya shaam kab bhi test ho sakta hai. Agar saath mein koi fasting test bhi likha ho toh subah khali pet jaana better rahega.',
    whatToEat: 'Normal khana kha ke ja sakte hain. ANA test ke liye koi dietary restriction nahi hai.',
    whatToAvoid: 'Koi specific dietary restriction nahi hai. Apni koi medicine doctor ki advice ke bina band mat karein test se pehle.',
    medicineNote: 'Doctor ko zaroor batao aapne kaunsi medicines le rahe hain. Hydralazine, procainamide, isoniazid jaise medicines ANA result affect kar sakti hain. Immunosuppressants ya steroids le rahe hain toh zaroor batao.',
    accuracyNote: 'ANA ek antibody test hai jisme timing aur food se khas farak nahi padta. NABL-accredited lab se test karwaane pe reliable result aata hai. Agar koi supplement ya herbal medicine le rahe hain toh doctor ko batao.',
  },

  sampleInfo: {
    sampleType: 'Blood (venous, arm ki nadi se)',
    sampleAmount: 'Sirf 3-5 mL blood, bahut thoda sa',
    reportTime: 'EIA/ELISA method: 24-48 ghante. IFA (HEp-2) gold standard: 2-3 business days. Full ANA profile ya ENA panel: 3-5 business days.',
    onlineAvailable: true,
  },

  myths: [
    {
      _key: 'myth1',
      myth: 'ANA positive matlab zaroor Lupus hai',
      truth: 'ANA positive sirf ek screening result hai. 5-10% healthy log bhi ANA positive hote hain. Lupus diagnose karne ke liye aur specific tests jaise anti-dsDNA aur anti-Smith aur clinical symptoms zaroori hain. Akele ANA se koi bimari confirm nahi hoti.',
    },
    {
      _key: 'myth2',
      myth: 'ANA test ke liye khali pet rehna zaroori hai',
      truth: 'Bilkul nahi. ANA test ke liye fasting ki koi zarurat nahi. Normal khana kha ke ja sakte hain. Agar saath mein koi fasting test ho toh alag baat hai.',
    },
    {
      _key: 'myth3',
      myth: 'ANA positive matlab cancer hai',
      truth: 'ANA test primarily autoimmune diseases ke liye hai, cancer detect karne ke liye nahi. Kuch rare cases mein cancers mein bhi ANA positive aa sakta hai lekin ye exception hai, rule nahi. Cancer check karne ke liye alag dedicated tests hote hain.',
    },
    {
      _key: 'myth4',
      myth: 'ANA test bahut painful hota hai',
      truth: 'Ye ek simple blood test hai. Ek chhoti si needle prick, 2-3 second ka kaam. Bahut log is test se darr ke nahi karwate, aisa mat karein.',
    },
    {
      _key: 'myth5',
      myth: 'ANA result ek baar positive aaya toh zindagi bhar positive rahega',
      truth: 'ANA titer time ke saath badh ya ghhat sakta hai. Kuch cases mein treatment se ya infection theek hone ke baad improve bhi hota hai. Regular monitoring zaroori hai, ek baar ka result final verdict nahi hai.',
    },
    {
      _key: 'myth6',
      myth: 'Low positive ANA (1:40 ya 1:80) matlab bimari pakki hai',
      truth: 'Low titer ANA practically 15% healthy adults mein milta hai, khaaskar 50 se upar ke logon mein. Bina symptoms ke low positive ANA ka mostly koi clinical significance nahi hota.',
    },
    {
      _key: 'myth7',
      myth: 'ANA negative aaya matlab autoimmune disease bilkul nahi ho sakti',
      truth: 'ANA negative aana mostly reassuring hai, lekin 100% rule out nahi hota. Kuch autoimmune conditions ANA negative pe bhi ho sakti hain. Symptoms strong hain toh doctor aur tests karwayenge.',
    },
  ],

  comparisons: [
    {
      _key: 'comp1',
      comparedTest: 'ENA Panel Test',
      comparedTestSlug: 'ena-panel',
      differencePoints: [
        'Kya hai | Broad screening test | Specific follow-up panel (8-18 antigens)',
        'Kab hota hai | Pehle hota hai | ANA positive ke baad',
        'Result format | Titer + Pattern | Individual specific antibodies',
        'Diseases | Multiple autoimmune | Specific autoimmune types identify karta hai',
        'Report time | 1-2 din | 3-5 business days',
      ],
    },
    {
      _key: 'comp2',
      comparedTest: 'Anti-dsDNA Test',
      comparedTestSlug: 'anti-dsdna',
      differencePoints: [
        'Kya hai | General autoimmune screening | Lupus-specific antibody test',
        'Sensitivity for Lupus | 98% high sensitivity | 70% moderate sensitivity',
        'Specificity | Low, many conditions positive | High, mostly Lupus specific',
        'Kab kiya jaata hai | Pehle kiya jaata hai | ANA positive hone ke baad',
        'Report time | 24-48 ghante | 24-48 ghante',
      ],
    },
    {
      _key: 'comp3',
      comparedTest: 'Rheumatoid Factor (RF)',
      comparedTestSlug: 'rheumatoid-factor',
      differencePoints: [
        'Primary use | Lupus aur multiple autoimmune | Rheumatoid Arthritis diagnosis',
        'ANA mein overlap | RA mein bhi positive ho sakta hai | Kuch other conditions mein positive',
        'Best for | Autoimmune broad screening | RA diagnosis',
        'Fasting | Nahi chahiye | Nahi chahiye',
        'Report time | 24-48 ghante | 24-48 ghante',
      ],
    },
  ],

  repeatInfo: `Pehli baar positive aane ke baad doctor jo specific tests likhein wo pehle complete karein, phir ANA repeat ki baat hogi.

Already diagnosed autoimmune patients mein monitoring ke liye: active disease mein har 3 se 6 mahine, stable ya remission mein saal mein ek baar doctor ki salah pe. Medicines change ke 3 mahine baad effect check karne ke liye repeat ho sakta hai.

Agar ANA negative aaya lekin symptoms persist karein toh 6 se 12 mahine mein dobara karwao. Kuch conditions late mein positive hoti hain.

Pregnancy mein har trimester pe doctor decide karta hai frequency. Normal aur koi symptoms nahi hain toh routine repeat ki zarurat nahi, doctor bolein tab hi repeat karein.`,

  linkedDiseases: [
    { _key: 'ld1', diseaseName: 'Lupus (SLE)', diseaseSlug: 'lupus', isAvailable: false },
    { _key: 'ld2', diseaseName: 'Rheumatoid Arthritis', diseaseSlug: 'rheumatoid-arthritis', isAvailable: false },
    { _key: 'ld3', diseaseName: 'Sjogren\'s Syndrome', diseaseSlug: 'sjogrens-syndrome', isAvailable: false },
    { _key: 'ld4', diseaseName: 'Scleroderma', diseaseSlug: 'scleroderma', isAvailable: false },
    { _key: 'ld5', diseaseName: 'Hashimoto\'s Thyroiditis', diseaseSlug: 'hashimotos-thyroiditis', isAvailable: false },
    { _key: 'ld6', diseaseName: 'Autoimmune Hepatitis', diseaseSlug: 'autoimmune-hepatitis', isAvailable: false },
    { _key: 'ld7', diseaseName: 'Mixed Connective Tissue Disease', diseaseSlug: 'mctd', isAvailable: false },
  ],

  relatedTests: [
    { _key: 'rt1', testName: 'ESR Test', testSlug: 'esr-test', isAvailable: true },
    { _key: 'rt2', testName: 'CBC (Complete Blood Count)', testSlug: 'cbc-test', isAvailable: true },
    { _key: 'rt3', testName: 'CRP Test', testSlug: 'crp-test', isAvailable: false },
    { _key: 'rt4', testName: 'ENA Panel Test', testSlug: 'ena-panel', isAvailable: false },
    { _key: 'rt5', testName: 'Anti-dsDNA Test', testSlug: 'anti-dsdna', isAvailable: false },
    { _key: 'rt6', testName: 'Rheumatoid Factor (RF)', testSlug: 'rheumatoid-factor', isAvailable: false },
    { _key: 'rt7', testName: 'KFT (Kidney Function Test)', testSlug: 'kft-test', isAvailable: false },
    { _key: 'rt8', testName: 'TSH (Thyroid)', testSlug: 'thyroid-profile-tsh', isAvailable: true },
  ],

  homeopathyAngle: `ANA positive hona ek warning signal hai, koi final diagnosis nahi. Ghabrao mat aur report lekar doctor se milein.

Conventional treatment aksar symptoms ko suppress karta hai jaise steroids ya immunosuppressants. Homeopathy underlying immune dysregulation ko address karne ki koshish karta hai, root cause pe kaam. Baar baar abnormal aata hai ya conventional medicines se side effects ho rahe hain toh individualized homeopathic treatment ek option ho sakta hai. Har patient ki poori health history, lifestyle aur constitution dekhi jaati hai. Side effects practically nil hoti hain.

Apni report lekar Dr. Shadab Khan se consult karein.`,

  faqs: [
    {
      _key: 'faq1',
      question: 'ANA test kya hota hai?',
      answer: 'ANA ya Antinuclear Antibody test ek blood test hai jo aapke blood mein wo antibodies detect karta hai jo galti se apne body ke cells ke nucleus pe attack karte hain. Ye autoimmune diseases, khaaskar Lupus, ke screening ke liye hota hai. Akela ye test diagnosis nahi karta, starting point hai.',
    },
    {
      _key: 'faq2',
      question: 'ANA test ka normal range kya hai?',
      answer: 'Normal: Negative, yaani < 1:40 titer. 1:40-1:80 borderline hai jo healthy logon mein bhi milta hai. 1:160 aur usse upar clinically meaningful mana jaata hai. ELISA method mein < 1.0 IU negative hota hai. Apni lab ke reference values se compare karein.',
    },
    {
      _key: 'faq3',
      question: 'ANA test positive ka matlab kya hai?',
      answer: 'Positive matlab blood mein antinuclear antibodies hain. Ye autoimmune disease ki possibility indicate karta hai lekin confirm nahi karta. Low titer (1:40-1:80) healthy logon mein bhi milta hai. High titer plus symptoms ho toh doctor se milein aur further tests hote hain.',
    },
    {
      _key: 'faq4',
      question: 'ANA test negative ka matlab kya hai?',
      answer: 'Negative matlab antinuclear antibodies detect nahi hue. Ye generally reassuring result hai aur Lupus ya major autoimmune disease ki possibility kam hoti hai. Lekin 100% rule out nahi hota. Strong symptoms pe doctor further evaluate kar sakte hain.',
    },
    {
      _key: 'faq5',
      question: 'ANA test khali pet hota hai kya?',
      answer: 'Nahi. ANA test ke liye fasting ki koi zarurat nahi. Aap normal khana kha ke ja sakte hain. Subah, dopahar ya shaam, koi bhi waqt test ho sakta hai.',
    },
    {
      _key: 'faq6',
      question: 'ANA test kab karwana chahiye?',
      answer: 'Jab doctor likhein, khaaskar joint pain, unexplained fatigue, skin rash (butterfly rash), dry eyes ya mouth, baar baar miscarriage ya family history of autoimmune disease ho. Apne mann se test mat karwao, doctor ki recommendation zaroori hai.',
    },
    {
      _key: 'faq7',
      question: 'ANA test pregnancy mein safe hai kya?',
      answer: 'Haan, safe hai. Ek simple blood test hai. Pregnancy mein kuch women mein temporary low-positive ANA aa sakta hai. Agar positive aaye toh doctor properly monitor karta hai. Bahut si ANA positive maaein healthy pregnancies complete karti hain.',
    },
    {
      _key: 'faq8',
      question: 'ANA test kitne din mein report aati hai?',
      answer: 'Standard EIA ya ELISA method: 24-48 ghante. IFA (HEp-2) method: 2-3 business days. Full ANA profile ya ENA panel: 3-5 business days. Major labs online ya WhatsApp pe report bhejte hain.',
    },
    {
      _key: 'faq9',
      question: 'ANA test aur ENA test mein kya fark hai?',
      answer: 'ANA ek broad screening test hai jo batata hai ki antibodies hain ya nahi. ENA panel ek specific follow-up test hai jo identify karta hai ki exactly kaunse antigens pe antibodies hain aur kaunsi disease ho sakti hai. Usually ANA positive ke baad ENA kiya jaata hai.',
    },
    {
      _key: 'faq10',
      question: 'Kya ANA test se cancer pata chalta hai?',
      answer: 'Nahi primarily. ANA test autoimmune diseases ke liye hai. Kuch rare cancers mein bhi ANA positive aa sakta hai lekin cancer ke liye alag dedicated tests hote hain. ANA positive aane se seedha cancer mat sochein.',
    },
    {
      _key: 'faq11',
      question: 'ANA titer 1:80 ka matlab kya hai?',
      answer: '1:80 ek low borderline positive hai jo 5-15% healthy adults mein milta hai, khaaskar 50 se upar ki age mein. Bina symptoms ke ye mostly clinically significant nahi hota. Symptoms hain toh doctor further tests karega. Akele 1:80 se koi autoimmune disease confirm nahi hoti.',
    },
    {
      _key: 'faq12',
      question: 'ANA high hone ke kya kaaran ho sakte hain?',
      answer: 'Possible causes mein Lupus, Sjogren\'s Syndrome, Scleroderma, Rheumatoid Arthritis, certain infections, kuch medicines jaise hydralazine aur isoniazid aur age-related increase shamil hain. Doctor symptoms ke basis pe cause dhundhte hain.',
    },
    {
      _key: 'faq13',
      question: 'Kya ANA test baar baar karwana padta hai?',
      answer: 'Already diagnosed autoimmune patients ko doctor ki advice pe regular monitoring zaroori hai, usually har 3-6 mahine ya saal mein ek baar. Pehli baar positive aaye toh specific follow-up tests pehle, phir repeat ka plan doctor banata hai. Healthy logon ko routine ANA testing ki zarurat nahi.',
    },
    {
      _key: 'faq14',
      question: 'Kya ANA test ka result change ho sakta hai?',
      answer: 'Haan. ANA titer time ke saath badh aur ghhat sakta hai, treatment se, infection theek hone pe ya spontaneously. Ek baar ka result permanent nahi hota. Isliye monitoring mein regular tests important hain.',
    },
    {
      _key: 'faq15',
      question: 'ANA test ke baad kaun sa test hota hai?',
      answer: 'Agar ANA positive aaye toh typically ENA panel, Anti-dsDNA (Lupus ke liye), Rheumatoid Factor, CRP, ESR, CBC aur Kidney Function Test hote hain. Ye doctor decide karta hai, symptoms aur ANA titer pattern ke hisaab se. Sabka ek saath hona zaroori nahi.',
    },
  ],
}

async function seed() {
  try {
    const result = await client.createOrReplace(ana)
    console.log('✅ ANA Test seeded:', result._id)
  } catch (err) {
    console.error('❌ Error:', err)
    process.exit(1)
  }
}

seed()
