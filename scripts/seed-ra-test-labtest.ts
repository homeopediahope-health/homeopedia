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

const raTest = {
  _id: 'labtest-ra-test',
  _type: 'labTest',
  name: 'RA Factor Test (Rheumatoid Factor)',
  fullForm: 'Rheumatoid Arthritis Factor Test',
  hindiName: 'Gathiya Rog Jaanch',
  slug: { _type: 'slug', current: 'ra-test' },
  category: 'Blood',
  metaTitle: 'RA Test Kya Hai? Normal Range, High/Low & Kab Karaye (2026)',
  metaDescription: 'RA (Rheumatoid Arthritis) Factor test ka normal range, high/low matlab, kab karaye. Complete guide, verified, doctor-reviewed. Homeopedia.in',
  reviewDate: 'May 2026',

  heroText: `RA Test ya Rheumatoid Arthritis Factor Test ek blood test hai jo aapke khoon mein Rheumatoid Factor (RF) naam ke ek khaas antibody ki maujoodgi aur uski matra naapata hai. Ye antibody tab banti hai jab immune system galti se apne hi body ke tissues pe attack karne lagta hai.

Seedha samjhein toh RA Factor test ye batata hai ki kya aapke immune system ne apne joints ya doosre tissues ke khilaf antibodies banana shuru kar diya hai ya nahi.

Ye test mainly Rheumatoid Arthritis ki pehchaan ke liye kiya jaata hai jo ek chronic autoimmune bimari hai jisme joints mein sujan, dard aur akdahat aati hai. Lekin sirf RA hi nahi, kai doosri autoimmune bimariyon mein bhi RF elevated milta hai.

RA test do tarah se hota hai. Qualitative (Latex Agglutination) method sirf Positive ya Negative batata hai, titer mein result aata hai jaise 1:80 ya 1:160. Quantitative (Nephelometry ya ELISA) method exact level IU/mL mein batata hai aur ye zyada accurate hota hai. India mein NABL-accredited labs ab quantitative method use karti hain.

Yaad rakhein: RA Factor positive aana matlab pakki bimari nahi hai. Ye sirf ek clue hai jo doctor baaki tests aur symptoms ke saath milake assess karta hai.`,

  whenToTest: [
    'Haath, pair ya kamar ke joints mein dard, khaaskar subah ke waqt akdahat jo 30 minute se zyada rahe',
    'Kai joints mein ek saath sujan ya garmahat',
    'Lambe samay se thakan aur kamzori bina kisi wajah ke',
    'Hafton ya mahinon se joint pain jo theek nahi ho raha',
    'Fingers ya toes mein deformity ya curved hona',
    'Halka bukhaar jo aata-jaata rehta ho',
    'Family mein kisi ko Rheumatoid Arthritis ho',
    'Dry eyes aur dry mouth ke saath joint problems (Sjogren\'s Syndrome ka doubt)',
    'Skin pe nodules ya chhote gaanth mehsoos hon',
    'Joint pain ke saath ESR ya CRP already high aaya ho',
  ],

  whatItDetects: `Is test se Rheumatoid Arthritis ki pehchaan mein help milti hai. Sjogren's Syndrome yaani aankhon aur munh ka sookha rehna bhi ye pakadta hai. Lupus (SLE) mein bhi RF thoda badha milta hai. Chronic infections jaise Hepatitis C ya TB mein RF badha milta hai.

Note: Agar joint pain hai toh doctor sirf RA test nahi likhta. Saath mein Anti-CCP (jo RA ke liye zyada specific hai), ESR, CRP aur ANA bhi likhta hai. Sab milake picture clear hoti hai.`,

  normalRanges: [
    { _key: 'male',    parameter: 'Adult Male (Quantitative)',    normalRange: '< 14',     unit: 'IU/mL', highBrief: 'Autoimmune activity possible', lowBrief: 'Normal, no RF detected' },
    { _key: 'female',  parameter: 'Adult Female (Quantitative)',  normalRange: '< 14',     unit: 'IU/mL', highBrief: 'RA / Sjogren\'s / Infection',  lowBrief: 'Normal, no RF detected' },
    { _key: 'elderly', parameter: 'Elderly (60+ saal)',           normalRange: '< 15-20',  unit: 'IU/mL', highBrief: 'Age-related rise bhi ho sakta', lowBrief: 'Normal' },
    { _key: 'child',   parameter: 'Children',                    normalRange: '< 14',     unit: 'IU/mL', highBrief: 'Juvenile Idiopathic Arthritis',  lowBrief: 'Normal' },
    { _key: 'preg',    parameter: 'Pregnancy',                   normalRange: '< 14',     unit: 'IU/mL', highBrief: 'False positive ho sakta hai',   lowBrief: 'Normal' },
    { _key: 'qual',    parameter: 'Qualitative (Latex method)',   normalRange: 'Negative / < 1:80', unit: 'Titer', highBrief: 'Positive matlab RF present', lowBrief: 'Negative matlab RF absent' },
    { _key: 'mild',    parameter: 'Mildly Elevated',             normalRange: '14 – 60',  unit: 'IU/mL', highBrief: 'Weak positive, further tests',  lowBrief: '' },
    { _key: 'mod',     parameter: 'Moderately Elevated',         normalRange: '60 – 200', unit: 'IU/mL', highBrief: 'RA ya doosri condition possible', lowBrief: '' },
    { _key: 'high',    parameter: 'Highly Elevated',             normalRange: '> 200',    unit: 'IU/mL', highBrief: 'Strong positive, autoimmune likely', lowBrief: '' },
  ],

  pregnancyInfo: {
    applicable: true,
    normalRange: 'Normal range wohi rehti hai yaani < 14 IU/mL. Lekin pregnancy mein immune system naturally thoda shift hota hai jis wajah se RF mildly elevated aa sakta hai bina kisi bimari ke. Ise physiological false positive kehte hain.',
    riskNote: `Test bilkul safe hai, sirf blood draw hota hai. Agar RF positive aaye toh ghabrao mat. Pregnancy mein false positive results zyada common hote hain.

Rheumatoid Arthritis wali kuch mahilaon mein pregnancy ke dauran symptoms temporarily better bhi ho jaate hain due to immune modulation. Lekin postpartum yaani delivery ke baad mein flare ho sakta hai. Doctor se regular monitoring zaroori hai.`,
    whenDoctor: 'Pre-existing joint disease monitor karne ke liye, naye joint symptoms develop hon toh, ya autoimmune risk family mein ho toh baseline ke liye doctor RA test likh sakta hai. Koi bhi result, positive ya negative, apne gynaecologist aur rheumatologist dono ko zaroor dikhayein.',
  },

  highMeans: [
    'Rheumatoid Arthritis (RA), sabse common kaaran',
    'Sjogren\'s Syndrome, dry eyes aur dry mouth wali condition',
    'Systemic Lupus Erythematosus (SLE / Lupus)',
    'Scleroderma, skin aur connective tissue ki bimari',
    'Mixed Connective Tissue Disease (MCTD)',
    'Hepatitis C, liver infection mein temporary elevation',
    'Tuberculosis (TB), lungs ya body mein',
    'Infective Endocarditis, heart valve infection',
    'Chronic bacterial infections ya viral infections',
    'Bujurgi mein (60+ saal), age ke saath RF thoda badh sakta hai bina kisi bimari ke',
    'Liver cirrhosis ya chronic liver disease',
    '5% healthy logon mein bhi RF positive milta hai bina kisi bimari ke',
  ],

  highReassurance: 'RF high hone ka matlab zaroor RA confirm nahi hota. Roughly 80% RA patients mein RF positive milta hai lekin 20% RA patients ka RF negative hota hai (seronegative RA). Doctor aapki poori clinical picture dekhkar hi koi conclusion nikalega. Anti-CCP test RA ke liye zyada specific hota hai.',

  lowMeans: [
    'Khoon mein Rheumatoid Factor nahi mila ya bahut kam hai',
    'Generally iska matlab hai immune system ne ye specific antibodies nahi banaye',
    'Ye reassuring result hai',
    '20% RA patients ka RF negative aata hai, inhe Seronegative RA kehte hain',
    'Early RA mein RF negative aa sakta hai jo kuch mahine baad positive ho sakta hai',
  ],

  lowConcern: 'Agar RF negative hai lekin symptoms strong hain jaise joint pain, sujan aur morning stiffness toh bhi RA ho sakta hai. Doctor se milein aur Anti-CCP antibody test zaroor karwayein jo RA ke liye zyada accurate hai. Negative result ka matlab symptoms ignore karna nahi hai.',

  redFlags: [
    'RF > 60 IU/mL aur saath mein joint swelling, dard aur morning stiffness ho',
    'Multiple joints mein ek saath sujan, haath, kamar aur ghutne',
    'Joint pain ke saath lambi thakan, halka bukhaar ya weight loss',
    'Haathon ki ungliyon mein deformity ya curve aane lage',
    'RF positive aur Anti-CCP dono positive aaye, turant rheumatologist se milein',
    'Achanak ek joint bahut zyada fool jaaye aur garm ho',
    'Bukhaar ke saath joint pain',
    'Chalna-phirna mein takleef ho jaaye',
  ],

  emergencyLevel: 'Agar achanak ek joint bahut zyada fool jaaye aur garm ho aur bukhaar bhi ho toh turant hospital jaao. Ye Septic Arthritis ka sign ho sakta hai jo emergency hai.',

  selfTreatWarning: 'Report dekhkar khud kisi bhi result pe treatment shuru mat karein, chahe result positive ho ya negative. Sirf doctor aapke symptoms, examination aur baaki tests dekh ke sahi decision le sakta hai. RF positive aana matlab zaroor koi serious bimari nahi hai.',

  preparation: {
    fastingRequired: true,
    fastingHours: 10,
    bestTime: 'Subah 7 baje se 10 baje ke beech. Raat ka khana 10 baje tak kha lein aur kal subah khali pet test dein.',
    whatToEat: 'Raat ka khana halka rakhein, oily ya heavy food avoid karein. Paani pee sakte hain, hydrated rehna zaroori hai.',
    whatToAvoid: 'Test se 24-48 ghante pehle alcohol bilkul nahi. Chai aur coffee test ke din avoid karein agar fasting hai.',
    medicineNote: 'Kuch medicines RF levels affect kar sakti hain. Test se pehle apne doctor ko batayein aap kaunsi medicines le rahe hain. Khud koi medicine band mat karein bina doctor ki salah ke.',
    accuracyNote: 'Agar haal hi mein koi infection ya bimari hui ho toh RF temporarily elevated ho sakta hai, doctor ko zaroor batayein. Recent vaccination bhi kuch impact kar sakti hai.',
  },

  sampleInfo: {
    sampleType: 'Blood (venous, arm ki nadi se)',
    sampleAmount: 'Sirf 3-5 mL blood, bahut thoda sa',
    reportTime: 'Qualitative (Latex) test: same day ya 4-6 ghante. Quantitative (Nephelometry/ELISA): 24-48 ghante.',
    onlineAvailable: true,
  },

  myths: [
    {
      _key: 'myth1',
      myth: 'RA test positive aaya matlab zaroor Rheumatoid Arthritis hai',
      truth: 'Bilkul nahi. RF 5% healthy logon mein bhi positive milta hai. Kai doosri bimariyon mein bhi jaise TB aur Hepatitis C aur Sjogren\'s mein RF positive aata hai. Sirf RA test se koi diagnosis confirm nahi hoti. Doctor baaki tests aur symptoms bhi dekhta hai.',
    },
    {
      _key: 'myth2',
      myth: 'RA test negative hai toh Rheumatoid Arthritis pakka nahi hai',
      truth: '20% RA patients ka RF negative hota hai, inhe Seronegative RA kehte hain. Agar symptoms hain toh Anti-CCP test karwana zaroori hai jo RA ke liye zyada accurate hai.',
    },
    {
      _key: 'myth3',
      myth: 'RA test ke liye khali pet rehna zaroori nahi',
      truth: 'Dr Lal PathLabs ke instructions ke anusar 10-12 ghante ki fasting recommended hai. Alag labs ki instructions thodi alag ho sakti hain, apni lab se confirm karein.',
    },
    {
      _key: 'myth4',
      myth: 'RA test bahut painful hota hai',
      truth: 'Sirf ek chhoti needle, 2-3 second ka process. Normal blood test ki tarah hi hota hai. Thoda prick feel hota hai, bas itna hi.',
    },
    {
      _key: 'myth5',
      myth: 'Ek baar RA test normal aaya toh dobara kabhi nahi karwana',
      truth: 'Agar symptoms dobara aayein toh doctor dobara test likh sakta hai. Early RA mein RF negative aata hai aur baad mein positive ho sakta hai. Symptoms hain toh regular follow-up zaroori hai.',
    },
    {
      _key: 'myth6',
      myth: 'RF bahut zyada high hai matlab cancer hai',
      truth: 'RF test cancer ka test nahi hai. Haan kuch rare cancers mein RF elevated ho sakta hai lekin ye directly cancer diagnose karne ka test nahi hai. Cancer ke liye alag specific tests hote hain.',
    },
    {
      _key: 'myth7',
      myth: 'Sirf budhape mein RA hota hai, young logon ka test karna zaroori nahi',
      truth: 'RA kisi bhi umar mein ho sakta hai, young adults, middle age aur elderly sab mein. Bacchon mein bhi hota hai jise Juvenile Idiopathic Arthritis (JIA) kehte hain.',
    },
  ],

  comparisons: [
    {
      _key: 'comp1',
      comparedTest: 'Anti-CCP Test',
      comparedTestSlug: 'anti-ccp-test',
      differencePoints: [
        'Kya detect karta hai | Rheumatoid Factor antibody | Citrullinated Peptide antibodies',
        'RA ke liye specificity | Moderate, kai conditions mein positive | HIGH, RA ke liye zyada specific',
        'False positives | Zyada, 5% healthy mein bhi | Kam, zyada specific',
        'Early RA detection | Late mein positive | RA shuru hone se pehle bhi positive',
        'Dono positive hon toh | RA ki probability bahut zyada | RA ki probability bahut zyada',
      ],
    },
    {
      _key: 'comp2',
      comparedTest: 'ANA Test',
      comparedTestSlug: 'ana-test',
      differencePoints: [
        'Kya detect karta hai | Rheumatoid Factor antibody | Antinuclear antibodies (broad)',
        'RA mein sensitivity | 70-80% | 30-40% only',
        'Best use | RA initial screening | Lupus aur broad autoimmune workup',
        'False positives | 5% healthy mein | Kai conditions mein positive',
        'Kab saath karein | Joint pain workup mein dono | Autoimmune workup mein dono',
      ],
    },
    {
      _key: 'comp3',
      comparedTest: 'ESR Test',
      comparedTestSlug: 'esr',
      differencePoints: [
        'Kya measure karta hai | Specific autoantibody (RF) | General inflammation marker',
        'RA ke liye | Specific marker | Non-specific, sujan hai ya nahi batata',
        'Disease activity | Hamesha treatment ke saath nahi girta | Disease activity ke saath change hota hai',
        'Use | RA diagnose karne mein | Treatment response monitor karne mein',
        'Fasting | 10-12 ghante recommended | Generally nahi',
      ],
    },
  ],

  repeatInfo: `Treatment shuru karne ke baad rheumatologist decide karega ki RF dobara kab test karein. Generally monitoring ke liye ESR aur CRP zyada use hota hai kyunki ye disease activity ke saath zyada change hota hai. RF ke levels hamesha treatment ke saath proportionally nahi girte isliye sirf RF ke liye regular repeat generally recommended nahi hai.

Agar negative aaya lekin symptoms hain toh 3-6 mahine baad repeat ho sakta hai. Early RA mein RF negative aata hai jo baad mein positive ho sakta hai. Anti-CCP bhi zaroor karwayein.

Normal health checkup mein, agar koi symptoms nahi hain toh routine basis pe RF test karne ki zarurat nahi. Sirf doctor ke kehne pe karwayein.`,

  linkedDiseases: [
    { _key: 'ld1', diseaseName: 'Rheumatoid Arthritis', diseaseSlug: 'rheumatoid-arthritis', isAvailable: false },
    { _key: 'ld2', diseaseName: 'Sjogren\'s Syndrome', diseaseSlug: 'sjogrens-syndrome', isAvailable: false },
    { _key: 'ld3', diseaseName: 'Systemic Lupus Erythematosus', diseaseSlug: 'sle-lupus', isAvailable: false },
    { _key: 'ld4', diseaseName: 'Scleroderma', diseaseSlug: 'scleroderma', isAvailable: false },
    { _key: 'ld5', diseaseName: 'Juvenile Idiopathic Arthritis', diseaseSlug: 'juvenile-idiopathic-arthritis', isAvailable: false },
    { _key: 'ld6', diseaseName: 'Hepatitis C', diseaseSlug: 'hepatitis-c', isAvailable: false },
    { _key: 'ld7', diseaseName: 'Tuberculosis', diseaseSlug: 'tuberculosis', isAvailable: false },
  ],

  relatedTests: [
    { _key: 'rt1', testName: 'ESR Test', testSlug: 'esr', isAvailable: true },
    { _key: 'rt2', testName: 'CBC (Complete Blood Count)', testSlug: 'cbc-test', isAvailable: true },
    { _key: 'rt3', testName: 'ANA Test', testSlug: 'ana-test', isAvailable: true },
    { _key: 'rt4', testName: 'Uric Acid Test', testSlug: 'uric-acid-test', isAvailable: true },
    { _key: 'rt5', testName: 'Anti-CCP Test', testSlug: 'anti-ccp-test', isAvailable: false },
    { _key: 'rt6', testName: 'CRP Test', testSlug: 'crp-test', isAvailable: false },
  ],

  homeopathyAngle: `Agar aapka RA Factor elevated aaya hai toh ghabrao mat. Ye ek important clue hai, final verdict nahi.

Pehla kadam: Report lekar ek qualified doctor se milein, ideally ek Rheumatologist jo poori clinical picture dekhega.

Homeopathic perspective mein RA jaisi autoimmune conditions mein sirf joints ka treatment karna kaafi nahi hota. Homeopathy ka approach yahan ye hai ki immune system ki abnormal response ko address kiya jaaye. Aisi individualized treatment jo poori health history, constitution aur body ki overall tendency ko dekhke di jaaye. Conventional approach symptoms manage karta hai, homeopathy underlying immune dysregulation ko address karne mein helpful ho sakti hai. Side effects practically nil hote hain.

Apni report lekar Dr. Shadab Khan se consult karein.`,

  faqs: [
    {
      _key: 'faq1',
      question: 'RA test kya hota hai?',
      answer: 'RA test ya Rheumatoid Arthritis Factor test ek blood test hai jo khoon mein RF (Rheumatoid Factor) antibody ki maujoodgi aur level naapata hai. Ye mainly Rheumatoid Arthritis aur doosri autoimmune bimariyon ki pehchaan mein help karta hai.',
    },
    {
      _key: 'faq2',
      question: 'RA test ka full form kya hai?',
      answer: 'RA ka full form hai Rheumatoid Arthritis. RA Factor test ka poora naam hai Rheumatoid Arthritis Factor Test ya Rheumatoid Factor (RF) Test. Dono same test ke alag naam hain.',
    },
    {
      _key: 'faq3',
      question: 'RA test normal range kitni hoti hai?',
      answer: 'Quantitative test mein normal range < 14 IU/mL hoti hai. Qualitative test mein Negative ya titer < 1:80 normal maana jaata hai. Lab ke hisaab se thoda antar ho sakta hai, apni report mein diya reference range zaroor dekhen.',
    },
    {
      _key: 'faq4',
      question: 'RA test normal range female mein kya hai?',
      answer: 'Mahilaon ke liye bhi normal range < 14 IU/mL hi hai. Lekin elderly women (60+) mein ya pregnancy mein RF thoda elevated aa sakta hai bina kisi bimari ke. Doctor se interpret karwayein.',
    },
    {
      _key: 'faq5',
      question: 'RA test positive ka matlab kya hai?',
      answer: 'RF positive matlab aapke khoon mein 14 IU/mL se zyada Rheumatoid Factor mila. Ye autoimmune activity ka sign ho sakta hai. Lekin 5% healthy logon mein bhi positive aata hai. Akele is result se koi diagnosis confirm nahi hoti.',
    },
    {
      _key: 'faq6',
      question: 'RA test negative ka matlab kya hai?',
      answer: 'Negative matlab RF nahi mila ya bahut kam amount mein hai, generally ye good sign hai. Lekin 20% RA patients ka RF negative hota hai (Seronegative RA). Agar symptoms hain toh bhi doctor se milein aur Anti-CCP test zaroor karwayein.',
    },
    {
      _key: 'faq7',
      question: 'RA test ke liye khali pet rehna zaroori hai?',
      answer: 'Dr Lal PathLabs ke guidelines ke anusar 10-12 ghante ki fasting recommended hai. Paani pee sakte hain. Apni chosen lab se ek baar confirm kar lein kyunki different labs ki instructions thodi alag ho sakti hain.',
    },
    {
      _key: 'faq8',
      question: 'RA test khali pet hota hai ya khana khaake?',
      answer: 'Generally subah khali pet test dena better maana jaata hai. Raat ka khana halka rakhein. Test ke din chai-coffee avoid karein agar fasting hai.',
    },
    {
      _key: 'faq9',
      question: 'RA factor test kyu kiya jaata hai?',
      answer: 'Ye test isliye kiya jaata hai taaki doctor samajh sake ki kya aapka immune system apne joints ya tissues ke khilaf antibodies bana raha hai. Rheumatoid Arthritis ya doosri autoimmune bimari ki pehchaan mein help karta hai. Joint pain, morning stiffness ya autoimmune symptoms mein doctor ye test likhta hai.',
    },
    {
      _key: 'faq10',
      question: 'RA test vs Anti-CCP test, kaunsa better hai?',
      answer: 'Dono alag cheez measure karte hain. Anti-CCP test RA ke liye zyada specific (accurate) hai aur RA shuru hone se pehle bhi positive aa sakta hai. RF test broader hai, kai bimariyon mein positive aata hai. Best approach: dono tests milake dekhen. Agar dono positive hain toh RA ki probability bahut zyada hai.',
    },
    {
      _key: 'faq11',
      question: 'RA test aur RF test mein kya fark hai?',
      answer: 'Koi fark nahi. Dono same test ke alag naam hain. RA Factor, Rheumatoid Factor aur RF Test, sab ek hi test hai.',
    },
    {
      _key: 'faq12',
      question: 'RA test report kitne time mein aati hai?',
      answer: 'Qualitative test: same day ya 4-6 ghante. Quantitative test jo zyada accurate hai: 24-48 ghante. NABL labs mein online report SMS ya email pe bhi milti hai.',
    },
    {
      _key: 'faq13',
      question: 'RA test mein dard hota hai?',
      answer: 'Ek chhoti si needle ka ek prick, 2-3 second ka process. Normal blood draw hai, koi special procedure nahi. Thodi burning feel hoti hai jo turant khatam hoti hai.',
    },
    {
      _key: 'faq14',
      question: 'Kya RA test se Rheumatoid Arthritis confirm ho jaata hai?',
      answer: 'Nahi. RA test sirf ek clue deta hai. Rheumatoid Arthritis ki diagnosis ke liye doctor physical examination, symptoms history, Anti-CCP test, X-ray aur clinical criteria sab milake assess karta hai. Sirf RF positive ya negative se final diagnosis nahi hoti.',
    },
    {
      _key: 'faq15',
      question: 'RA test high hone ke kaaran kya hain?',
      answer: 'Possible causes mein Rheumatoid Arthritis, Sjogren\'s Syndrome, Lupus (SLE), Hepatitis C, Tuberculosis, chronic infections aur Scleroderma hain. Elderly logon mein age-related mild elevation bhi ho sakta hai bina kisi bimari ke.',
    },
    {
      _key: 'faq16',
      question: 'Kya RA test ki accuracy bilkul sahi hai?',
      answer: 'RA test approximately 70-80% sensitive hai RA ke liye. Matlab 20% RA patients mein RF negative aata hai (false negative). Aur RF 5% healthy logon mein bhi positive aa sakta hai (false positive). Isliye akele is test se diagnosis nahi hoti.',
    },
    {
      _key: 'faq17',
      question: 'RA test pregnancy mein safe hai?',
      answer: 'Test bilkul safe hai, normal blood draw hai. Lekin pregnancy mein RF thoda false positive aa sakta hai. Koi bhi result apne gynaecologist aur doctor ko zaroor dikhayein.',
    },
    {
      _key: 'faq18',
      question: 'RA quantitative aur qualitative test mein kya fark hai?',
      answer: 'Qualitative (Latex test) sirf Positive ya Negative batata hai, titer mein result aata hai jaise 1:80. Quantitative (ELISA ya Nephelometry) exact IU/mL mein level batata hai jo zyada accurate aur informative hai. India ki NABL labs ab zyada quantitative test use karti hain.',
    },
    {
      _key: 'faq19',
      question: 'RA test positive aane pe kya karna chahiye?',
      answer: 'Ghabrao mat. Ek Rheumatologist yaani joint specialist se milein. Saath mein Anti-CCP test, ESR aur CRP bhi karwayein. Doctor poori picture dekhkar guide karega.',
    },
    {
      _key: 'faq20',
      question: 'RA test ke baad kab doctor ke paas jaana chahiye?',
      answer: 'Agar RF > 14 IU/mL aaya toh doctor ko dikhayein. Agar RF negative hai lekin joint pain, morning stiffness ya swelling hai toh tab bhi doctor ke paas jaayein aur Anti-CCP test karwayein. Report dekhkar khud koi treatment shuru mat karein.',
    },
  ],
}

async function seed() {
  try {
    const result = await client.createOrReplace(raTest)
    console.log('✅ RA Factor Test seeded:', result._id)
  } catch (err) {
    console.error('❌ Error:', err)
    process.exit(1)
  }
}

seed()
