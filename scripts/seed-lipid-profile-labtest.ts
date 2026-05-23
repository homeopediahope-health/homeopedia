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

const lipid = {
  _id: 'labtest-lipid-profile',
  _type: 'labTest',
  name: 'Lipid Profile',
  fullForm: 'Lipid Panel / Cholesterol Profile',
  hindiName: 'Cholesterol Jaanch / Lipid Jaanch',
  slug: { _type: 'slug', current: 'lipid-profile' },
  category: 'Blood',
  metaTitle: 'Lipid Profile Kya Hai? Normal Range, High/Low & Kab Karaye (2026)',
  metaDescription: 'Lipid Profile ka normal range, high/low matlab, kab karaye — complete guide. Verified info, doctor-reviewed. | Homeopedia.in',
  reviewDate: 'May 2026',

  heroText: `Lipid Profile (jise Lipid Panel ya Cholesterol Profile bhi kehte hain) ek blood test hai jo aapke khoon mein maujood fats — cholesterol aur triglycerides — ke alag-alag types ko measure karta hai. Ye test basically aapke dil ki sehat ka "report card" hai.

Is ek test mein paanch cheezein ek saath check hoti hain: Total Cholesterol (khoon mein sab milake kitna cholesterol hai), LDL (Low-Density Lipoprotein — "bura" cholesterol jo arteries band kar sakta hai), HDL (High-Density Lipoprotein — "acha" cholesterol jo dil ko bachata hai), Triglycerides (ek aur type ka fat jo khane se aata hai), aur VLDL (Very Low-Density Lipoprotein — ek aur "bura" type).

Simple bhasha mein: jaise aap ghar ki safai mein check karte ho ki kitni gandagi hai aur kahan hai — waise hi Lipid Profile check karta hai ki aapke khoon ki "naaliyon" mein kitna chhapna (plaque) jam raha hai.

IMPORTANT for Indians: Indian population mein cardiovascular disease zyada early age pe hoti hai aur zyada severe hoti hai. Iska bada kaaran hai "Atherogenic Dyslipidemia" — yaani HDL kam aur Triglycerides zyada hona — jo Indian diet aur lifestyle mein common hai. Isliye Indians ke liye ye test aur bhi zaroori hai.`,

  whenToTest: [
    'Chest pain, seene mein tightness, ya saans lene mein takleef ho — heart risk check karo',
    'Family mein kisi ko dil ki bimari, heart attack, ya stroke hua ho — genetic risk hota hai',
    'Diabetes (sugar ki bimari) ho — diabetes wale logon mein lipid check karna zaroori hai',
    'High blood pressure (hypertension) ho — dono milke dil pe zyada load daalte hain',
    'Cigarette/bidi peete ho ya alcohol zyada lete ho — lipid badha deta hai',
    'Motapan ho (obesity) ya wazan bahut zyada ho',
    'Routine health checkup ke part mein — especially 35 saal ke baad',
    'Cholesterol-lowering medicines chal rahi ho — treatment ka effect check karne ke liye',
    'Thyroid problem (hypothyroidism) ho — thyroid kam kaam kare toh cholesterol badh jaata hai',
    'Kidney ya liver ki bimari ho — ye organs lipid metabolism affect karte hain',
  ],

  whatItDetects: `Lipid Profile in conditions ka pata lagata hai: Hyperlipidemia (high cholesterol/triglycerides), atherosclerosis ka risk (arteries mein plaque jamna jo heart attack ka kaaran banta hai), cardiovascular disease (CVD) ka early risk assessment, diabetes management mein routine monitoring, Familial Hypercholesterolemia (genetic high cholesterol), aur pancreatitis ka risk (jab triglycerides bahut zyada badhein).

Agar aapke ghar mein kisi ko 50 saal se pehle dil ki bimari ya heart attack hua ho, ya aapko khud chest pain ya weakness ho — toh doctor ye test zaroor likhega. Is report se pata chalta hai ki aapka dil aane wale saalon mein kitne risk mein hai.`,

  normalRanges: [
    // Total Cholesterol
    { _key: 'tc-desirable',   parameter: 'Total Cholesterol — Desirable',     normalRange: '<200',       unit: 'mg/dL', highBrief: 'Borderline risk shuru',     lowBrief: 'Ideal range' },
    { _key: 'tc-borderline',  parameter: 'Total Cholesterol — Borderline',    normalRange: '200 – 239',  unit: 'mg/dL', highBrief: 'Heart disease risk',        lowBrief: 'Monitor karo' },
    { _key: 'tc-high',        parameter: 'Total Cholesterol — High',          normalRange: '≥240',       unit: 'mg/dL', highBrief: 'High heart disease risk',   lowBrief: '—' },
    // LDL
    { _key: 'ldl-optimal',    parameter: 'LDL (Bura Cholesterol) — Optimal',  normalRange: '<100',       unit: 'mg/dL', highBrief: 'Artery blockage risk',      lowBrief: 'Ideal range' },
    { _key: 'ldl-near',       parameter: 'LDL — Near Optimal',                normalRange: '100 – 129',  unit: 'mg/dL', highBrief: 'Monitor lifestyle',         lowBrief: '—' },
    { _key: 'ldl-borderline', parameter: 'LDL — Borderline High',             normalRange: '130 – 159',  unit: 'mg/dL', highBrief: 'Lifestyle change zaroor',   lowBrief: '—' },
    { _key: 'ldl-high',       parameter: 'LDL — High',                        normalRange: '160 – 189',  unit: 'mg/dL', highBrief: 'Doctor se milein',          lowBrief: '—' },
    { _key: 'ldl-very-high',  parameter: 'LDL — Very High',                   normalRange: '≥190',       unit: 'mg/dL', highBrief: 'Immediate attention',       lowBrief: '—' },
    // HDL
    { _key: 'hdl-optimal',    parameter: 'HDL (Acha Cholesterol) — Optimal',  normalRange: '≥60',        unit: 'mg/dL', highBrief: 'Rare concern',              lowBrief: 'Protective level' },
    { _key: 'hdl-average',    parameter: 'HDL — Average',                     normalRange: '40 – 59',    unit: 'mg/dL', highBrief: '—',                         lowBrief: 'Acceptable range' },
    { _key: 'hdl-low-men',    parameter: 'HDL — Low (Mard)',                  normalRange: '<40',        unit: 'mg/dL', highBrief: '—',                         lowBrief: 'Heart disease risk' },
    { _key: 'hdl-low-women',  parameter: 'HDL — Low (Aurat)',                 normalRange: '<50',        unit: 'mg/dL', highBrief: '—',                         lowBrief: 'Heart disease risk' },
    // Triglycerides
    { _key: 'tg-normal',      parameter: 'Triglycerides — Normal',            normalRange: '<150',       unit: 'mg/dL', highBrief: 'Borderline risk',           lowBrief: 'Ideal range' },
    { _key: 'tg-borderline',  parameter: 'Triglycerides — Borderline',        normalRange: '150 – 199',  unit: 'mg/dL', highBrief: 'Heart + pancreas risk',    lowBrief: '—' },
    { _key: 'tg-high',        parameter: 'Triglycerides — High',              normalRange: '200 – 499',  unit: 'mg/dL', highBrief: 'High heart risk',           lowBrief: '—' },
    { _key: 'tg-very-high',   parameter: 'Triglycerides — Very High',         normalRange: '≥500',       unit: 'mg/dL', highBrief: 'Pancreatitis risk',         lowBrief: '—' },
    // VLDL & Non-HDL
    { _key: 'vldl',           parameter: 'VLDL Cholesterol',                  normalRange: '5 – 30',     unit: 'mg/dL', highBrief: 'Artery fat buildup',        lowBrief: 'Usually okay' },
    { _key: 'non-hdl',        parameter: 'Non-HDL Cholesterol',               normalRange: '<130',       unit: 'mg/dL', highBrief: 'High ASCVD risk',           lowBrief: 'Good range' },
    // Children & Pregnancy
    { _key: 'tc-children',    parameter: 'Total Cholesterol — Children (<18)', normalRange: '<170',       unit: 'mg/dL', highBrief: 'Borderline 170–199',        lowBrief: 'Ideal' },
    { _key: 'preg-note',      parameter: 'Pregnancy (physiological rise)',     normalRange: 'TC +30–50%', unit: '—',     highBrief: 'Normal pregnancy change',   lowBrief: 'Doctor evaluate karega' },
  ],

  pregnancyInfo: {
    applicable: true,
    normalRange: 'Total Cholesterol 30–50% badh jaata hai | Triglycerides 50–100% | HDL 20–40% badh sakta hai — ye physiological change hai',
    riskNote: `Pregnancy mein lipid values naturally badh jaati hain — ye normal physiological change hai, ghabrao mat. Total Cholesterol 30–50% tak badh sakta hai, Triglycerides 50–100% tak badh sakte hain, aur HDL bhi thoda badhta hai jo baby ke growth ke liye zaroori hai.

Agar report pregnancy mein "borderline high" dikhe toh ye usually normal change hai. Lekin bahut zyada badhna — especially Triglycerides >500 mg/dL — concern ho sakta hai. Ye test completely safe hai pregnancy mein — sirf blood sample lena hota hai, baby pe koi effect nahi.`,
    whenDoctor: 'Agar pehle se diabetes ya hypertension ho, family mein cholesterol ki history ho, gestational diabetes diagnose ho, ya preeclampsia ka risk ho — tab doctor pregnancy mein Lipid Profile likhte hain.',
  },

  highMeans: [
    'Zyada oily, fried, ya processed food khane se — Indian diet mein common issue',
    'Regular exercise nahi karna — sedentary lifestyle se LDL aur triglycerides badhte hain',
    'Familial Hypercholesterolemia — genetic condition jisme cholesterol naturally zyada hota hai',
    'Hypothyroidism — thyroid gland kam kaam kare toh LDL badh jaata hai',
    'Diabetes — sugar control nahi ho toh lipids bhi bigadte hain',
    'Kidney disease (Nephrotic Syndrome) — cholesterol zyada ho jaata hai',
    'Kuch medicines — steroids, certain BP medicines, kuch contraceptives',
    'Pregnancy — physiological rise, usually normal hai',
    'Zyada meetha, maida, rice, ya alcohol — triglycerides specifically badhte hain',
    'Smoking — HDL kam karta hai aur LDL badhne mein contribute karta hai',
    'Aging — umar ke saath LDL thoda badhta hai, especially post-menopause women mein',
  ],
  highReassurance: 'High Lipid Profile matlab ye nahi ki aapko pakka heart attack hoga. Ye ek WARNING sign hai — lifestyle change karo, doctor se milao, aur sahi management karo. Lakho log high cholesterol ke saath healthy life jite hain — sahi care se. Ghabrao mat.',

  lowMeans: [
    'Total Cholesterol bahut low — Malnutrition ya bahut kam fat wali diet',
    'Total Cholesterol bahut low — Hyperthyroidism (thyroid overactive) ho sakta hai',
    'Total Cholesterol bahut low — Liver disease (liver cholesterol banata hai, bimari mein kam hota hai)',
    'HDL low — Smoking karna (HDL ka sabse common dushman)',
    'HDL low — Exercise bilkul nahi karna',
    'HDL low — Motapan (obesity) — especially belly fat se HDL girta hai',
    'HDL low — Type 2 Diabetes ya insulin resistance',
    'Triglycerides low — Usually acha sign hai, koi concern nahi',
  ],
  lowConcern: 'HDL consistently <35 mg/dL ho ya Total Cholesterol <100 mg/dL ho bina kisi obvious reason ke — toh doctor se milein. HDL "acha cholesterol" hai — iska bahut zyada girna bhi theek nahi.',

  redFlags: [
    'Seene mein dard ya pressure — especially left side mein — seedha hospital jaao',
    'Saans lene mein achanak takleef — emergency sign',
    'Bahut zyada dizziness ya behoshi jaisi feeling',
    'Ek taraf ka haath ya chehra akad jaana — stroke ka sign, EMERGENCY',
    'Total Cholesterol ≥240 mg/dL — doctor ko zaroor dikhao',
    'LDL ≥190 mg/dL — high risk, immediate consultation zaroori',
    'Triglycerides ≥500 mg/dL — pancreatitis ka serious risk',
    'HDL <35 mg/dL — very high heart disease risk',
  ],
  emergencyLevel: 'Chest pain + saans lene mein takleef + behoshi — turant emergency. Triglycerides ≥500 mg/dL — pancreatitis risk, same day doctor. LDL ≥190 + family history of heart disease — urgent consultation zaroori.',
  selfTreatWarning: 'Report dekhkar khud cholesterol ki medicine (statin) shuru mat karo. Ye medicines doctor ki prescription ke baad hi leni chahiye — galat dose ya galat indication se side effects ho sakte hain. Doctor se milein pehle.',

  preparation: {
    fastingRequired: true,
    fastingHours: 12,
    bestTime: 'Subah 7-10 baje — raat bhar ke natural fast ke baad. Pichli raat 8-9 baje ke baad kuch mat khao aur subah test dene jaao. Ye BEST time hai accurate results ke liye.',
    whatToEat: 'Test se pehle raat ko halka khana khao — bahut zyada oily ya fatty dinner avoid karo. Saada paani zaroor peeyein — dehydration se values thodi affect hoti hain.',
    whatToAvoid: 'Chai, coffee, juice, milk — fasting mein bilkul nahi. Cigarette/bidi — test se pehle avoid karein. Alcohol — test se kam se kam 24 ghante pehle bilkul nahi. Bahut zyada oily ya fatty dinner raat ko avoid karein.',
    medicineNote: 'Apne doctor se zaroor poochhein — kuch medicines (steroids, statins, certain BP medicines) result affect kar sakti hain. Doctor ki permission ke bina koi medicine band mat karo.',
    accuracyNote: '10-12 ghante ke proper fast ke baad liya hua sample sabse accurate hota hai — especially Triglycerides aur LDL ke liye. Modern guidelines mein non-fasting bhi acceptable hai kuch situations mein — doctor decide karega.',
  },

  sampleInfo: {
    sampleType: 'Blood (Venous — haath ki nadi/vein se)',
    sampleAmount: '3 mL — bahut kam, ek chhoti tube',
    reportTime: 'Same day — 4 se 6 ghante mein. Kuch labs next working day',
    onlineAvailable: true,
  },

  myths: [
    {
      _key: 'myth-1',
      myth: 'Lipid Profile ke liye sirf 2-4 ghante ka fast kaafi hai',
      truth: 'Nahi — 10 se 12 ghante ka fast ZAROORI hai, especially Triglycerides aur LDL ke accurate result ke liye. Sirf 2-4 ghante mein liya report misleading ho sakti hai. Raat 8-9 baje se subah test tak khali pet rehna sahi tarika hai.',
    },
    {
      _key: 'myth-2',
      myth: 'Lipid Profile high matlab zaroor heart attack hoga',
      truth: 'High Lipid Profile ek RISK FACTOR hai, guaranteed heart attack nahi. Lakho log high cholesterol ke saath decades tak healthy rehte hain — sahi lifestyle aur treatment se. Ghabrao mat, doctor se milao. Ye ek warning signal hai, final verdict nahi.',
    },
    {
      _key: 'myth-3',
      myth: 'Sirf mote logon ko cholesterol hota hai — main toh patla hoon',
      truth: 'Patle logon ko bhi high cholesterol ho sakta hai — especially genetic ya diet reasons se. India mein bahut se patle logon ka LDL ya Triglycerides high milta hai. Weight aur cholesterol ka seedha rishta hamesha nahi hota. "Thin fat" condition bahut common hai Indians mein.',
    },
    {
      _key: 'myth-4',
      myth: 'Ek baar cholesterol normal aa gaya — phir check karne ki zarurat nahi',
      truth: 'Cholesterol lifestyle ke saath change hota rehta hai. 35 saal ke baad har 1-2 saal mein Lipid Profile karwana recommended hai — especially agar risk factors ho. Ek baar normal aana guarantee nahi hai ki hamesha normal rahega.',
    },
    {
      _key: 'myth-5',
      myth: 'Lipid Profile cancer detect karta hai',
      truth: 'Nahi — Lipid Profile sirf cholesterol aur fats measure karta hai. Cancer ke liye alag specific tests hote hain (biopsy, tumor markers, imaging). Ye test specifically cardiovascular health ke liye hai — cancer se iska koi direct relation nahi.',
    },
    {
      _key: 'myth-6',
      myth: 'Pregnancy mein Lipid Profile nahi karwani chahiye — baby ko nuksan hoga',
      truth: 'Ye test completely safe hai pregnancy mein — sirf blood sample lena hota hai, baby pe koi effect nahi. Agar doctor ne likha hai toh zaroor karwao. Pregnancy mein cholesterol naturally badh jaata hai — ye baby ke brain aur hormone development ke liye zaroori hai.',
    },
    {
      _key: 'myth-7',
      myth: 'Lipid Profile bahut painful test hai',
      truth: 'Sirf ek chhoti needle se khoon nikalta hai — 2-3 second ka process. Thoda sa pinch lagta hai, koi dard nahi rehta baad mein. Bilkul normal blood test jaisa hi hai.',
    },
  ],

  comparisons: [
    {
      _key: 'vs-cbc',
      comparedTest: 'CBC (Complete Blood Count)',
      comparedTestSlug: 'cbc',
      differencePoints: [
        'Lipid Profile cholesterol aur triglycerides measure karta hai — heart disease risk ke liye. CBC red cells, white cells, aur platelets check karta hai — infection aur anemia ke liye',
        'Lipid Profile ke liye 10-12 ghante fasting zaroori hai. CBC ke liye fasting bilkul zaroori nahi',
        'Lipid Profile dil ke risk ka primary marker hai. CBC blood ki overall health aur infection detect karta hai',
        'Dono tests aksar routine health checkup mein saath likhे jaate hain — ye ek doosre ke complementary hain',
      ],
    },
    {
      _key: 'vs-crp',
      comparedTest: 'CRP (C-Reactive Protein)',
      comparedTestSlug: 'crp',
      differencePoints: [
        'Lipid Profile cholesterol aur fats measure karta hai — long-term artery blockage risk. CRP body mein acute inflammation measure karta hai',
        'Lipid Profile primary cardiovascular risk marker hai. CRP secondary inflammation marker hai — dono milake better heart risk picture dete hain',
        'Doctor aksar Lipid Profile + CRP dono saath likhta hai — jab comprehensive heart risk assessment karni ho',
        'Fasting: Lipid Profile mein 10-12 ghante zaroori, CRP ke liye nahi',
      ],
    },
  ],

  repeatInfo: `Normal result aya — aage kab check karein:
35 saal se pehle (koi risk factor nahi): Har 5 saal mein ek baar kaafi.
35-50 saal ke beech: Har 1-2 saal mein recommended.
50 saal ke baad ya risk factors ho: Har saal.

Treatment shuru karne ke baad:
Lifestyle change ke baad: 3 mahine baad repeat karein — dekho kitna fark pada.
Statin (cholesterol ki medicine) shuru ki ho: 4-6 hafte baad TSH check karein, aur 3 mahine mein Lipid Profile repeat.
Diabetes mein: Har 6 mahine mein Lipid Profile karwana recommended.

Doctor ne kuch concern bataya: Jo bhi frequency doctor bataye — wahi follow karein. Kabhi bhi report khud dekhkar decision mat lo.`,

  linkedDiseases: [
    { _key: 'ld-hyperlipidemia',    diseaseName: 'High Cholesterol (Hyperlipidemia)',    diseaseSlug: 'high-cholesterol',    isAvailable: false },
    { _key: 'ld-heart-disease',      diseaseName: 'Heart Disease (Cardiovascular Disease)', diseaseSlug: 'heart-disease',      isAvailable: false },
    { _key: 'ld-obesity',            diseaseName: 'Obesity (Motapan)',                    diseaseSlug: 'obesity',              isAvailable: false },
    { _key: 'ld-diabetes',           diseaseName: 'Diabetes (Sugar Ki Bimari)',           diseaseSlug: 'diabetes',             isAvailable: false },
    { _key: 'ld-hypothyroidism',     diseaseName: 'Hypothyroidism',                      diseaseSlug: 'hypothyroidism',       isAvailable: false },
    { _key: 'ld-kidney-disease',     diseaseName: 'Kidney Disease (Nephrotic Syndrome)', diseaseSlug: 'kidney-disease',       isAvailable: false },
  ],

  relatedTests: [
    { _key: 'rt-cbc',          testName: 'CBC (Complete Blood Count)',    testSlug: 'cbc',                 isAvailable: true  },
    { _key: 'rt-tsh',          testName: 'Thyroid Profile (TSH, T3, T4)', testSlug: 'thyroid-profile-tsh', isAvailable: true  },
    { _key: 'rt-esr',          testName: 'ESR Test',                     testSlug: 'esr',                 isAvailable: true  },
    { _key: 'rt-blood-sugar',  testName: 'Blood Sugar (Fasting + PP)',    testSlug: 'blood-sugar-fasting', isAvailable: false },
    { _key: 'rt-crp',          testName: 'CRP (C-Reactive Protein)',      testSlug: 'crp',                 isAvailable: false },
    { _key: 'rt-lft',          testName: 'Liver Function Test (LFT)',     testSlug: 'lft',                 isAvailable: false },
    { _key: 'rt-hba1c',        testName: 'HbA1c (Glycated Hemoglobin)',  testSlug: 'hba1c',               isAvailable: false },
  ],

  homeopathyAngle: `Ghabrao mat — ek abnormal Lipid Profile matlab aapka dil kal band nahi ho jaayega. Ye ek early warning hai, aur early warning milna acha hai.

Conventional medicines symptoms aur values manage karti hain — magar homeopathy underlying cause address karne mein helpful ho sakti hai. Agar baar baar Lipid Profile abnormal aa raha ho, toh sirf number control karna kaafi nahi — root cause dekhna zaroori hai.

Homeopathy mein poori health history dekhi jaati hai — lifestyle, family history, stress, digestion sab kuch — aur uske hisab se individualized treatment di jaati hai. Side effects practically nil hote hain. Apni report lekar Dr. Shadab Khan se consult karein.`,

  faqs: [
    { _key: 'faq-1',  question: 'Lipid Profile test kya hai?', answer: 'Lipid Profile ek blood test hai jo aapke khoon mein maujood fats — Total Cholesterol, LDL (bura cholesterol), HDL (acha cholesterol), Triglycerides, aur VLDL — ko measure karta hai. Ye test heart disease aur artery blockage ke risk ko assess karne ke liye kiya jaata hai. Ek hi test mein 5 important values ek saath milti hain.' },
    { _key: 'faq-2',  question: 'Lipid Profile aur Cholesterol test mein kya fark hai?', answer: 'Cholesterol test sirf Total Cholesterol measure karta hai — ek single number. Lipid Profile zyada comprehensive hai — LDL, HDL, Triglycerides, VLDL sab alag-alag measure hote hain. Lipid Profile se zyada detailed aur accurate cardiovascular risk assessment hoti hai. Doctor aksar Lipid Profile prefer karte hain sirf cholesterol ke bajaye.' },
    { _key: 'faq-3',  question: 'Lipid Profile ka normal range kya hai?', answer: 'Normal ranges: Total Cholesterol <200 mg/dL (desirable), LDL <100 mg/dL (optimal), HDL ≥60 mg/dL (ideal), Triglycerides <150 mg/dL, VLDL 5-30 mg/dL, Non-HDL <130 mg/dL. Ye NCEP ATP III guidelines hain jo Indian labs follow karti hain. Apni report mein diye reference values se compare karein aur doctor se salah lein.' },
    { _key: 'faq-4',  question: 'Lipid Profile ke liye kitne ghante ka fast karna chahiye?', answer: '10 se 12 ghante ka fast zaroori hai accurate results ke liye, especially Triglycerides aur LDL ke liye. Raat ko 8-9 baje ke baad kuch mat khao aur subah test dene jaao. Paani peena allowed hai — aur zaroori bhi hai. Chai, coffee, juice, milk — fasting mein bilkul nahi.' },
    { _key: 'faq-5',  question: 'Fasting mein paani pee sakte hain Lipid Profile ke liye?', answer: 'Haan — saada paani zaroor peeyein. Paani peene se test ke results affect nahi hote. Lekin chai, coffee, juice, milk — bilkul nahi. Paani peete rehna zaroori bhi hai kyunki dehydration se blood sample lena mushkil ho jaata hai aur values bhi thodi affect hoti hain.' },
    { _key: 'faq-6',  question: 'Lipid Profile high hone ka matlab kya hai?', answer: 'High Lipid Profile yaani Total Cholesterol, LDL, ya Triglycerides ka normal se zyada hona. Iska matlab hai heart disease, stroke, ya artery blockage ka risk badh gaya hai. Magar ghabrao mat — ye ek risk indicator hai, pakka diagnosis nahi. Doctor se milao, lifestyle sudharo. Lakho log high cholesterol ke saath decades tak healthy rehte hain.' },
    { _key: 'faq-7',  question: 'HDL low hona kitna dangerous hai?', answer: 'HDL "acha cholesterol" hai — ye arteries se fat utha ke liver tak le jaata hai. HDL <40 mg/dL (men) ya <50 mg/dL (women) hona heart disease ka ek independent risk factor hai. Smoking chhodni, regular exercise karna, aur healthy diet se HDL naturally badhta hai. Doctor se poochhein ki aapke liye kya best hai.' },
    { _key: 'faq-8',  question: 'Triglycerides high hone ka matlab kya hai?', answer: 'Triglycerides ≥150 mg/dL borderline high hai, ≥200 high, aur ≥500 bahut dangerous hai — pancreatitis ka risk hota hai. Triglycerides zyada tab badhte hain jab zyada meetha, maida, rice, ya alcohol lete ho. Diabetes mein bhi Triglycerides uncontrolled badhte hain. Diet aur lifestyle change se ye kaafi improve hota hai.' },
    { _key: 'faq-9',  question: 'Kya Lipid Profile se cancer detect hota hai?', answer: 'Nahi — bilkul nahi. Lipid Profile sirf blood mein fats measure karta hai. Cancer ke liye alag specific tests hote hain (biopsy, tumor markers, imaging etc.). Ye ek common misconception hai. Lipid Profile specifically cardiovascular health ke liye hai.' },
    { _key: 'faq-10', question: 'Lipid Profile ka normal range pregnancy mein alag kyu hota hai?', answer: 'Haan — pregnancy mein Total Cholesterol 30-50%, Triglycerides 50-100%, aur HDL 20-40% tak naturally badh jaate hain. Ye fetal development ke liye zaroori physiological change hai — abnormal nahi hai. Agar report pregnancy mein borderline high dikhe toh ghabrao mat. Lekin bahut zyada high hone pe doctor se zaroor poochhein.' },
    { _key: 'faq-11', question: 'Men aur women mein Lipid Profile normal range alag hai kya?', answer: 'Thodi difference hai. HDL ka cutoff alag hai: men mein <40 mg/dL aur women mein <50 mg/dL ko "low" maana jaata hai. Women mein premenopause phase mein HDL naturally thoda better hota hai. Baaki parameters ke ranges mostly same hain. Post-menopause women mein LDL badhne ka risk hota hai.' },
    { _key: 'faq-12', question: 'Kaunsi bimari mein Lipid Profile test kiya jaata hai?', answer: 'High Cholesterol, Heart Disease, Obesity, Diabetes, Hypothyroidism, Kidney Disease, Pancreatitis — in sab mein Lipid Profile kiya jaata hai. Ye test cardiovascular risk assess karne ka sabse important tool hai. Agar chest pain, family history of heart disease, ya diabetes ho — toh ye test routine mein hona chahiye.' },
    { _key: 'faq-13', question: 'Kya Lipid Profile se heart disease detect hoti hai?', answer: 'Lipid Profile directly heart disease detect nahi karta — lekin dil ke liye risk assess karta hai. High LDL aur low HDL se arteries mein plaque jamne ka risk hota hai. Actual heart disease ke liye ECG, Echo, stress test, aur other tests bhi kiye jaate hain. Lipid Profile ek preventive screening tool hai.' },
    { _key: 'faq-14', question: 'Lipid Profile report kitne time mein aati hai?', answer: 'Zyada tar NABL-accredited labs mein same day report milti hai — 4 to 6 ghante mein. Kuch labs next working day report dete hain. Major labs (Lal PathLabs, Metropolis, Thyrocare) ki online report available hoti hai — app ya website pe download kar sakte ho. Home collection bhi available hai.' },
    { _key: 'faq-15', question: 'Ghar pe Lipid Profile test ho sakta hai?', answer: 'Haan — Lal PathLabs, Metropolis, Thyrocare, Redcliffe jaise major labs mein home collection service available hai. Phlebotomist ghar aake blood sample leta hai. Fasting properly karna zaroori hai ghar pe test ke liye bhi — raat 8-9 baje ke baad kuch nahi khana.' },
    { _key: 'faq-16', question: 'Kitni baar Lipid Profile karwana chahiye?', answer: '35 saal se pehle (no risk factors): har 5 saal mein. 35 saal ke baad ya risk factors ho: har 1-2 saal mein. Diabetes, heart disease, ya high cholesterol ho: har 6 mahine ya doctor ki salah se. Treatment chal rahi ho: 3-6 mahine mein repeat karein doctor ki guidance mein.' },
    { _key: 'faq-17', question: 'Kya ek din oily khana khane se Lipid Profile bigad jaata hai?', answer: 'Triglycerides ek heavy meal ke baad temporarily badh jaate hain — isliye fasting sample liya jaata hai. Ek din ke khane se LDL ya Total Cholesterol permanently nahi badalta. Lekin agar consistently oily khate ho mahino tak — toh zaroor fark padta hai. Test se pehle raat ko halka khana khao aur proper fasting karo.' },
  ],
}

async function main() {
  console.log('Seeding Lipid Profile Lab Test...')
  try {
    const result = await client.createOrReplace(lipid)
    console.log(`✅ Lipid Profile seeded: ${result._id}`)
  } catch (err) {
    console.error('❌ Error:', err)
    process.exit(1)
  }
}

main()
