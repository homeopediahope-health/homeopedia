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

const hbsag = {
  _id: 'labtest-hbsag',
  _type: 'labTest',
  name: 'HbsAg Test',
  fullForm: 'Hepatitis B Surface Antigen',
  hindiName: 'Hepatitis B Jaanch',
  slug: { _type: 'slug', current: 'hbsag' },
  category: 'Blood',
  metaTitle: 'HbsAg Test Kya Hai? Normal Range, High/Low Matlab & Kab Karaye (2026)',
  metaDescription: 'HbsAg (Hepatitis B Surface Antigen) test ka normal range, positive matlab, kab karaye — complete guide. Verified info, doctor-reviewed. | Homeopedia.in',
  reviewDate: 'May 2026',

  heroText: `HbsAg ya Hepatitis B Surface Antigen ek blood test hai jo aapke khoon mein Hepatitis B virus ki surface protein dhundhta hai — agar ye protein milti hai toh iska matlab hai aapke shareer mein Hepatitis B virus maujood hai ya tha.

Ye test duniya mein sabse zyada kiye jaane wale liver infection tests mein se ek hai. India mein lagbhag 4-5 crore log chronic Hepatitis B se prabhavit hain — aur inhe pata hi nahi hota jab tak test nahi kiya jaata.

HbsAg ka full form hai Hepatitis B Surface Antigen. Ye ek protein hai jo Hepatitis B virus (HBV) ki outer surface — yaani uski "skin" pe hoti hai. Jab ye virus aapke shareer mein ghusta hai, toh ye protein aapke khoon mein aane lagti hai.

Simple bhasha mein — ek chor ghar mein ghusa. HbsAg test us chor ke fingerprints dhundh raha hai. Agar fingerprints mile — matlab chor (Hepatitis B virus) andar hai ya tha.

Ye test batata hai: kya aap abhi Hepatitis B se infected hain, kya aap carrier hain bina symptoms ke, ya kya chronic Hepatitis B hai jo 6 mahine se zyada chal rahi hai.`,

  whenToTest: [
    'Jaundice ho — aankhein ya skin pili ho jaaye',
    'Baar baar thakaan, kamzori, bhookh na lagna',
    'Pet ke daayen taraf dard — liver area mein',
    'Kaala ya dark rang ka peshab, ulti ya nausea',
    'Surgery se pehle routine screening mein',
    'Pregnancy check-up mein — prenatal care mein mandatory hai',
    'Healthcare workers ka routine annual test',
    'Dialysis patients ka regular check',
    'HIV positive logon ki co-infection screening',
    'Blood ya organ donate karne se pehle',
    'Kisi infected insaan ke saath blood contact hua ho',
    'Immunosuppressive therapy shuru karne se pehle — jaise cancer treatment',
  ],

  whatItDetects: `HbsAg test specifically Hepatitis B Surface Antigen detect karta hai. Is ek test se pata chalta hai:

Acute Hepatitis B — nayi, short-term infection jo khud theek ho sakti hai. Chronic Hepatitis B — 6 mahine se zyada chalne wali infection. Hepatitis B Carrier State — virus hai, symptoms nahi, lekin doosron ko de sakte ho. Hepatitis B Reactivation — pehle band hua infection dobara active hua (chemotherapy ke baad). Co-infection — Hepatitis B ke saath HIV ya Hepatitis C bhi hai.

Sirf is ek test se diagnosis complete nahi hoti — doctor aage HBV DNA, HBeAg, LFT tests likhte hain. Lekin screening ka sabse zaroori pehla test yahi hai.`,

  normalRanges: [
    {
      _key: 'qualitative-nonreactive',
      parameter: 'HbsAg Qualitative — Normal',
      normalRange: 'NON-REACTIVE (Not Detected)',
      unit: '—',
      highBrief: '—',
      lowBrief: 'Hepatitis B nahi hai',
    },
    {
      _key: 'qualitative-reactive',
      parameter: 'HbsAg Qualitative — Abnormal',
      normalRange: 'REACTIVE (Detected)',
      unit: '—',
      highBrief: 'Active/Chronic HBV infection',
      lowBrief: '—',
    },
    {
      _key: 'quantitative-normal',
      parameter: 'HbsAg Quantitative — Normal',
      normalRange: '< 0.90',
      unit: 'IU/mL',
      highBrief: '—',
      lowBrief: 'No infection (Non-Reactive)',
    },
    {
      _key: 'quantitative-borderline',
      parameter: 'HbsAg Quantitative — Borderline',
      normalRange: '0.90 – 1.0',
      unit: 'IU/mL',
      highBrief: 'Grey Zone — Repeat karo',
      lowBrief: '—',
    },
    {
      _key: 'quantitative-reactive',
      parameter: 'HbsAg Quantitative — Reactive',
      normalRange: '>= 1.0',
      unit: 'IU/mL',
      highBrief: 'Active HBV infection',
      lowBrief: '—',
    },
    {
      _key: 'sco-ratio',
      parameter: 'S/CO Ratio Format',
      normalRange: '< 1 s/co = Negative | 1-5 = Borderline | > 5 = Positive',
      unit: 's/co',
      highBrief: '>5 = Reactive',
      lowBrief: '<1 = Non-Reactive',
    },
    {
      _key: 'pregnancy',
      parameter: 'Pregnancy (Prenatal Screening)',
      normalRange: 'NON-REACTIVE hona chahiye',
      unit: '—',
      highBrief: 'REACTIVE — turant doctor se milein',
      lowBrief: 'Safe for baby',
    },
    {
      _key: 'children',
      parameter: 'Bachche (Children)',
      normalRange: 'NON-REACTIVE hona chahiye',
      unit: '—',
      highBrief: 'Infection — vaccine history check karein',
      lowBrief: 'Normal — HBV vaccine diya hua hai?',
    },
  ],

  pregnancyInfo: {
    applicable: true,
    normalRange: 'NON-REACTIVE — Hepatitis B surface antigen detect nahi hona chahiye',
    riskNote: `Agar pregnant mein HbsAg REACTIVE aaye toh Hepatitis B virus maa se bachche mein delivery ke time transfer ho sakta hai — ise "vertical transmission" kehte hain. India mein HBV transmission ka ye sabse common tarika hai. Baby ko birth ke 12 ghante ke andar Hepatitis B Immunoglobulin (HBIG) injection aur pehla HBV vaccine diya jaata hai — ye combination 85-95% tak baby ko protect karta hai. Ghabrao mat — proper management se baby ko protect kiya ja sakta hai.`,
    whenDoctor: `Har pregnancy mein first trimester mein HbsAg test kiya jaata hai — ye India aur WHO prenatal care guidelines mein mandatory hai. Agar Reactive aaye toh doctor HBV DNA, HBeAg, LFT aur possibly antiviral treatment ka plan bataenge.`,
  },

  highMeans: [
    'Acute Hepatitis B infection — nayi, 2-6 mahine ki infection, 90% adults mein khud theek ho jaati hai',
    'Chronic Hepatitis B — 6 mahine se zyada infection chal rahi hai',
    'Hepatitis B Carrier State — aap virus carry kar rahe ho bina symptoms ke, doosron ko de sakte ho',
    'Hepatitis B Reactivation — chemotherapy ya immunosuppressive drugs ke baad band infection dobara active',
    'False Positive (rare) — confirmatory test zaroori hota hai borderline cases mein',
  ],

  highReassurance: `Ghabrao mat — HbsAg Reactive aana life sentence nahi hai. Millions of people chronic Hepatitis B ke saath normal, healthy zindagi jite hain. Doctor ke saath milkar proper management — monitoring, lifestyle changes, aur zarurat padne pe antiviral treatment — se liver damage rok sakte ho. Khud diagnosis ya treatment mat karo.`,

  lowMeans: [
    'Aapko kabhi Hepatitis B nahi hua',
    'Aapko Hepatitis B tha lekin theek ho gaya — anti-HBs antibodies develop ho gayi hain',
    'Aapne vaccine liya hai aur protected ho',
    'Infection "window period" mein hai — exposure ke 1-12 weeks ke beech test kiya toh false negative aa sakta hai',
  ],

  lowConcern: `Agar recent exposure ka doubt ho — needle sharing, unprotected sex with HBV positive person — toh 6-8 weeks baad dobara test karwao. Window period 1-12 weeks hoti hai. Agar liver ke symptoms hain lekin HbsAg negative hai toh doctor Hepatitis A, C ya aur causes check karenge.`,

  redFlags: [
    'Aankhein ya skin pili ho gayi — Jaundice',
    'Pet ke daayen taraf severe dard',
    'Ulti rokne se nahi aa rahi',
    'Bahut dark (kaala) peshab, light-coloured stool',
    'Confusion ya behoshi',
    'HbsAg Reactive aaya — 24-48 ghante mein doctor se milna zaroori hai',
  ],

  emergencyLevel: `Jaundice + severe pet dard + behoshi = Emergency — turant hospital jaao. HbsAg Reactive aaya aur symptoms hain = Usi din doctor se milo. Asymptomatic Reactive result = 24-48 ghante mein appointment lo.`,

  selfTreatWarning: `HbsAg report dekhkar khud koi medicine mat shuru karo — akele report se diagnosis nahi hoti. Doctor ko report dikhao aur unki salah ke bina koi dawa mat lo. Koi bhi "liver tonic" ya herbal supplement bina doctor ke mat lo.`,

  preparation: {
    fastingRequired: false,
    fastingHours: 0,
    bestTime: 'Kisi bhi waqt — subah, dopahar, shaam — koi farq nahi',
    whatToEat: 'Kuch bhi kha sakte ho — fasting ki zarurat bilkul nahi. Paani peete raho — hydrated rehna blood draw aasaan banata hai.',
    whatToAvoid: 'Alcohol ek din pehle se avoid karo. Intense exercise test se pehle mat karo.',
    medicineNote: 'Doctor ko apni saari medicines zaroor batao — especially liver medicines, immunosuppressants, ya biotin supplements. Aksar koi specific restriction nahi hoti HbsAg ke liye.',
    accuracyNote: 'ELISA-based test sabse accurate hai — 98-99% sensitivity. Rapid card test slightly less sensitive hoti hai. Borderline result mein ELISA confirmatory test zaroor karo. Window period (exposure ke 1-12 weeks) mein test karne se false negative aa sakta hai.',
  },

  sampleInfo: {
    sampleType: 'Blood — venous blood (haath ki nali/vein se)',
    sampleAmount: '2-3 mL — ek chhoti si test tube jitna',
    reportTime: 'Rapid Card Test: 20-30 minute | ELISA: Same day (4-8 ghante) | Confirmatory: 24-48 ghante',
    onlineAvailable: true,
  },

  myths: [
    {
      _key: 'm1',
      myth: 'HbsAg positive matlab puri zindagi bimaar rehna hoga',
      truth: 'Bahut se log chronic HBV ke saath normal, healthy zindagi jite hain. Proper monitoring aur treatment se liver damage rok sakte ho. Acute infection toh 90% cases mein khud theek ho jaata hai.',
    },
    {
      _key: 'm2',
      myth: 'HbsAg test ke liye khali pet rehna zaroori hai',
      truth: 'Bilkul nahi. Ye test antigen detect karta hai — khaane ka iss pe koi asar nahi padta. Kisi bhi waqt test karwa sakte ho.',
    },
    {
      _key: 'm3',
      myth: 'HbsAg positive matlab cancer pakka ho gaya',
      truth: 'HbsAg Hepatitis B infection dikhata hai, cancer nahi. Haan, untreated chronic HBV se liver cancer ka risk badhta hai — lekin ye decades mein hota hai aur proper management se rokha ja sakta hai.',
    },
    {
      _key: 'm4',
      myth: 'HbsAg positive insaan ke saath khaana khane se infection hoti hai',
      truth: 'HBV khane-peene, haath milane, gale lagane, ya share kiye khaane se nahi failta. Ye sirf blood, sexual contact aur maa se bachche mein (delivery time) failta hai.',
    },
    {
      _key: 'm5',
      myth: 'Vaccine liya hua hai toh HbsAg test ki zarurat nahi',
      truth: 'Vaccine lene ke baad bhi ek baar anti-HBs test karwana chahiye — confirm karo ki vaccine ne immunity di ya nahi. Kuch logon mein booster dose bhi zaroori hoti hai.',
    },
    {
      _key: 'm6',
      myth: 'HbsAg negative aaya toh Hepatitis B kabhi nahi hoga',
      truth: 'Negative result usi waqt ki situation batata hai. Agar aap high-risk mein hain — vaccine lena zaroori hai future protection ke liye.',
    },
    {
      _key: 'm7',
      myth: 'Ek baar HbsAg test kaafi hai',
      truth: 'High-risk groups — healthcare workers, partners of HBV patients — ke liye regular screening zaroori hai. Pregnant women ke liye har pregnancy mein test hota hai.',
    },
  ],

  comparisons: [
    {
      _key: 'c1',
      comparedTest: 'Anti-HBs (HBsAb)',
      comparedTestSlug: 'anti-hbs',
      differencePoints: [
        'HbsAg detect karta hai virus ka antigen (protein) = Active infection',
        'Anti-HBs detect karta hai aapke antibodies = Recovery ya vaccine immunity',
        'HbsAg positive + Anti-HBs negative = Active infection chal rahi hai',
        'HbsAg negative + Anti-HBs positive = Recovered ya vaccinated hain',
      ],
    },
    {
      _key: 'c2',
      comparedTest: 'HBV DNA PCR',
      comparedTestSlug: 'hbv-dna',
      differencePoints: [
        'HbsAg detect karta hai antigen (protein) — screening ke liye',
        'HBV DNA actual virus ka genetic material detect karta hai — viral load',
        'HbsAg positive ke baad HBV DNA kiya jaata hai monitoring ke liye',
        'HBV DNA zyada sensitive hai — window period mein bhi detect ho sakta hai',
      ],
    },
    {
      _key: 'c3',
      comparedTest: 'Anti-HBc (Core Antibody)',
      comparedTestSlug: 'anti-hbc',
      differencePoints: [
        'HbsAg dikhata hai current active infection',
        'Anti-HBc dikhata hai past ya current exposure — window period mein bhi positive ho sakta hai',
        'Dono milake complete Hepatitis B status pata chalta hai',
        'Anti-HBc negative + HbsAg negative = Kabhi Hepatitis B nahi hua',
      ],
    },
    {
      _key: 'c4',
      comparedTest: 'LFT (Liver Function Test)',
      comparedTestSlug: 'liver-function-test-lft',
      differencePoints: [
        'HbsAg batata hai virus hai ya nahi — cause detect karta hai',
        'LFT batata hai liver ko kitna damage hua — effect detect karta hai',
        'HbsAg Reactive aane ke baad LFT zaroor kiya jaata hai',
        'Dono tests saath mein complete picture dete hain',
      ],
    },
  ],

  repeatInfo: `HbsAg Reactive aaya ho toh 6 mahine baad repeat karein — acute infection resolve hua ya nahi check karne ke liye. Chronic Hepatitis B mein har 6-12 mahine monitoring. Healthy individual ke liye har 3-5 saal mein screening kaafi. High-risk group ke liye har saal. Window period doubt ho toh 6-8 weeks baad dobara. Pregnant women mein har pregnancy mein test — chahe pichli baar negative tha. Vaccine ke baad 1-2 mahine mein Anti-HBs test karke immunity confirm karo.`,

  linkedDiseases: [
    { _key: 'ld1', diseaseName: 'Fatty Liver', diseaseSlug: 'fatty-liver', isAvailable: true },
    { _key: 'ld2', diseaseName: 'Jaundice', diseaseSlug: 'jaundice', isAvailable: true },
    { _key: 'ld3', diseaseName: 'Liver Cirrhosis', diseaseSlug: 'liver-cirrhosis', isAvailable: true },
    { _key: 'ld4', diseaseName: 'Hepatitis B', diseaseSlug: 'hepatitis-b', isAvailable: false },
    { _key: 'ld5', diseaseName: 'HIV/AIDS', diseaseSlug: 'hiv-aids', isAvailable: false },
    { _key: 'ld6', diseaseName: 'Liver Cancer', diseaseSlug: 'liver-cancer', isAvailable: false },
  ],

  linkedSymptoms: [
    { _key: 'ls1', symptomName: 'Jaundice (Peeli Aankhein)', symptomSlug: 'jaundice' },
    { _key: 'ls2', symptomName: 'Weakness & Fatigue', symptomSlug: 'weakness-fatigue' },
    { _key: 'ls3', symptomName: 'Loss of Appetite', symptomSlug: 'loss-of-appetite' },
    { _key: 'ls4', symptomName: 'Nausea & Vomiting', symptomSlug: 'nausea-vomiting' },
  ],

  linkedDiets: [
    { _key: 'ldi1', dietName: 'Fatty Liver Diet', dietSlug: 'fatty-liver' },
    { _key: 'ldi2', dietName: 'Liver Cirrhosis Diet', dietSlug: 'liver-cirrhosis' },
  ],

  relatedTests: [
    { _key: 'rt1', testName: 'LFT (Liver Function Test)', testSlug: 'liver-function-test-lft', isAvailable: true },
    { _key: 'rt2', testName: 'CBC', testSlug: 'cbc', isAvailable: true },
    { _key: 'rt3', testName: 'HBeAg Test', testSlug: 'hbeag', isAvailable: false },
    { _key: 'rt4', testName: 'Anti-HBs Test', testSlug: 'anti-hbs', isAvailable: false },
    { _key: 'rt5', testName: 'HBV DNA PCR', testSlug: 'hbv-dna', isAvailable: false },
    { _key: 'rt6', testName: 'Anti-HCV (Hepatitis C)', testSlug: 'anti-hcv', isAvailable: false },
  ],

  homeopathyAngle: `Conventional antivirals viral replication ko control karte hain — ye zaroori hai severe cases mein. Lekin baar baar liver ki takleef ya immunity ki weakness ke liye homeopathy root cause pe kaam karti hai. Har insaan ki history, lifestyle, stress aur symptoms dekhkar individualized treatment diya jaata hai — sirf ek number nahi dekha jaata. Kuch commonly used remedies like Chelidonium, Lycopodium, Carduus marianus liver support ke liye use hoti hain — lekin ye sirf certified homeopathic doctor ki guidance mein leni chahiye. Side effects practically nil hote hain.`,

  faqs: [
    {
      _key: 'faq1',
      question: 'HbsAg kya hota hai?',
      answer: 'HbsAg ya Hepatitis B Surface Antigen ek protein hai jo Hepatitis B virus ki outer surface pe hoti hai. Jab ye blood test mein detect hoti hai toh iska matlab hai aapke blood mein Hepatitis B virus hai ya tha. Ye liver infection ka sabse important screening test hai.',
    },
    {
      _key: 'faq2',
      question: 'HbsAg test kyu kiya jaata hai?',
      answer: 'Ye test Hepatitis B infection diagnose karne ke liye, pregnancy mein baby ko protect karne ke liye, surgery se pehle screening ke liye, aur chronic liver disease monitor karne ke liye kiya jaata hai. India mein prenatal care mein ye mandatory test hai.',
    },
    {
      _key: 'faq3',
      question: 'HbsAg ka normal range kya hai?',
      answer: 'HbsAg ek qualitative test hai — iska numeric range nahi hota. Normal result hota hai NON-REACTIVE ya Not Detected. Agar REACTIVE aaya toh doctor se milein. Quantitative test mein < 0.90 IU/mL normal maana jaata hai.',
    },
    {
      _key: 'faq4',
      question: 'HbsAg positive ka matlab kya hai?',
      answer: 'Positive ya Reactive matlab — aapke blood mein Hepatitis B surface antigen detect hua hai. Ye acute (nayi) ya chronic (purani) infection ho sakti hai. Ek Reactive result se ghabrao mat — doctor aage ke tests se confirm karenge situation kya hai.',
    },
    {
      _key: 'faq5',
      question: 'HbsAg test ke liye khali pet rehna zaroori hai kya?',
      answer: 'NAHI. HbsAg test ke liye fasting bilkul zaruri nahi. Khaana khake bhi test karwa sakte ho. Kisi bhi waqt — subah, dopahar, shaam — test ho sakta hai.',
    },
    {
      _key: 'faq6',
      question: 'HbsAg test pregnancy mein kyu hota hai?',
      answer: 'Hepatitis B maa se bachche mein delivery ke time ja sakta hai — ise vertical transmission kehte hain. Agar maa HbsAg Reactive hai, toh baby ko birth ke 12 ghante mein HBIG injection aur pehla vaccine diya jaata hai jo 85-95% protection deta hai.',
    },
    {
      _key: 'faq7',
      question: 'HbsAg Reactive aane ke baad kya karna chahiye?',
      answer: 'Turant doctor se milein. Ghabrao mat — ek Reactive result puri diagnosis nahi hai. Doctor HBV DNA, HBeAg, LFT test likhenge aur situation ke hisaab se plan banayenge.',
    },
    {
      _key: 'faq8',
      question: 'Kya HbsAg kabhi negative ho sakta hai agar pehle positive tha?',
      answer: 'Haan — Acute infection mein zyaatar log 6 mahine ke andar HbsAg clear kar dete hain. Ise "HbsAg seroconversion" kehte hain. Chronic infection mein ye harder hota hai lekin treatment se possible hai.',
    },
    {
      _key: 'faq9',
      question: 'HbsAg test aur HBV DNA test mein kya fark hai?',
      answer: 'HbsAg test dikhata hai ki virus hai ya nahi (presence). HBV DNA test quantify karta hai — kitna virus hai (viral load). HbsAg screening ke liye, HBV DNA monitoring aur treatment decisions ke liye hota hai.',
    },
    {
      _key: 'faq10',
      question: 'Kya Hepatitis B khaane ya chhune se failta hai?',
      answer: 'NAHI. HBV haath milane, khaana share karne, khaansi, ya thukne se nahi failta. Ye only blood, sexual contact, aur maa se bachche mein (delivery time) failta hai.',
    },
    {
      _key: 'faq11',
      question: 'HbsAg test report time kitna hai?',
      answer: 'Rapid test: 20-30 minute. Standard ELISA: Same day (4-8 ghante). Report aksar online portal pe bhi milti hai. Confirmatory test: 24-48 ghante.',
    },
    {
      _key: 'faq12',
      question: 'HbsAg non-reactive aaya — kya Hepatitis B vaccine lena chahiye?',
      answer: 'Agar aap high-risk group mein ho (healthcare worker, partner of HBV carrier) toh doctor se pucho. Non-reactive ka matlab ye nahi ki future mein infection nahi hogi — vaccine future protection deta hai.',
    },
    {
      _key: 'faq13',
      question: 'HbsAg test kitna accurate hai?',
      answer: 'ELISA-based HbsAg test ki sensitivity aur specificity 98-99% hai. Rapid card test thodi kam sensitive hoti hai. Borderline result mein confirmatory test zaroor karo.',
    },
    {
      _key: 'faq14',
      question: 'Window period kya hota hai HbsAg mein?',
      answer: 'Exposure ke baad 1-12 weeks (average 4 weeks) mein HbsAg blood mein detect hone lagta hai. Agar recent exposure tha — 6-8 weeks baad dobara test karo.',
    },
    {
      _key: 'faq15',
      question: 'HbsAg test ka sample blood ya urine se hota hai?',
      answer: 'Sirf BLOOD. Haath ki nali (vein) se blood liya jaata hai. Ye urine test nahi hai. Sample chhota sa hota hai — 2-3 mL.',
    },
    {
      _key: 'faq16',
      question: 'Kya HbsAg test pe medicine ka asar padta hai?',
      answer: 'Kuch specific situations mein — doctor ko apni medicines zaroor batao. Especially liver medicines, immunosuppressants, ya biotin supplements ke baare mein inform karo. Warna aksar koi restriction nahi hoti.',
    },
    {
      _key: 'faq17',
      question: 'HbsAg aur HBsAb mein kya fark hai?',
      answer: 'HbsAg — virus ka antigen (protein) detect karta hai = Active infection. HBsAb (Anti-HBs) — aapke body ke antibodies detect karta hai = Recovery ya vaccine se immunity. Dono alag cheez hain.',
    },
    {
      _key: 'faq18',
      question: 'Kya ek baar HbsAg positive aaye toh blood donate kar sakte hain?',
      answer: 'NAHI. HbsAg positive history wale log — chahe theek ho gaye ho — blood donation nahi kar sakte. India mein Blood Transfusion guidelines mein ye clearly mentioned hai.',
    },
    {
      _key: 'faq19',
      question: 'HbsAg test ghar pe ho sakta hai kya?',
      answer: 'Haan — zyaatar labs aaj home collection service deti hain. Phlebotomist ghar aata hai blood le jaata hai aur report online milti hai.',
    },
    {
      _key: 'faq20',
      question: 'Kya HbsAg aur Hepatitis A test ek hi hain?',
      answer: 'Nahi — bilkul alag tests hain. HbsAg sirf Hepatitis B detect karta hai. Hepatitis A ke liye alag test (Anti-HAV IgM) hota hai. Dono alag viruses hain, alag tarah failte hain, alag treatment hoti hai.',
    },
  ],
}

async function main() {
  console.log('Seeding HbsAg lab test...')
  const result = await client.createOrReplace(hbsag)
  console.log('✅ Created:', result._id)
}

main().catch(console.error)
