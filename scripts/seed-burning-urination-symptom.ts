import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

const symptom = {
  _id: 'symptom-burning-urination',
  _type: 'symptom',
  title: 'Burning Urination (Peshab Mein Jalan)',
  hindiName: 'Peshab Mein Jalan',
  slug: { _type: 'slug', current: 'burning-urination' },
  metaTitle: 'Burning Urination in Hindi – Karan, Ilaaj aur Homeopathy',
  metaDescription:
    'Peshab mein jalan (burning urination) ke karan, severity aur ghar pe safe steps – simple Hinglish mein. Verified info, Dr. Shadab reviewed.',
  heroText:
    'Peshab karte waqt ya baad mein ek tez jalan – jaise andar se kuch jal raha ho. Kabhi kabhi saath mein bar bar jaane ki urge bhi hoti hai, aur jaana padta hai lekin nikal kuch nahi. Ye sensation bahut uncomfortable hoti hai – aur samajh nahi aata ki serious hai ya nahi.\n\nPeshab mein jalan (burning urination) India mein ek bahut common complaint hai – khaskar garm mausam mein aur women mein. Ye aksar UTI (urinary tract infection) ki wajah se hoti hai, lekin hamesha nahi – aur yahi confusion paida karta hai.\n\nYe page aapko 2 minute mein batayega: kya ho raha hai, serious hai kya, aur kya karna chahiye.',

  indiaContext:
    'WHO ke data ke mutabik, urinary tract infections duniya mein sabse zyada common bacterial infections mein se ek hain – India mein har saal croro log is complaint ke saath doctor ke paas jaate hain, khaskar 20-45 saal ki women.',
  indiaContextSource: 'WHO Global Report on Urinary Tract Infections',

  severityLevel1: [
    'Jalan sirf peshab karte waqt hai, baad mein nahi',
    'Pehli baar ho rahi hai ya bahut kum hoti hai',
    'Bukhaar bilkul nahi hai',
    'Peshab ka rang thoda gehra hai – dark yellow',
    'Pet ya peeth mein dard nahi hai',
    '1-2 din se hai, mild hai',
  ],
  severityLevel2: [
    'Jalan 3 din se zyada se hai aur better nahi hui',
    'Baar baar peshab jaana pad raha hai – din mein 10+ baar',
    'Peshab mein thodi badbu aa rahi hai ya rang alag hai',
    'Lower abdomen mein dard ya pressure feel ho raha hai',
    'Pregnancy mein koi bhi burning – turant doctor',
  ],
  severityLevel3: [
    'Peshab mein khoon aa raha hai – pink ya red color',
    'Tej bukhaar ke saath jalan – 101°F se zyada',
    'Peeth ke nichle hisse (kidney area) mein tej dard',
    'Ulti ke saath jalan aur bukhaar saath hain',
    'Peshab bilkul nahi nikal raha – complete blockage',
  ],

  timeline3Days:
    'Body kisi infection ke against react kar rahi hai, ya dehydration ki wajah se urine concentrated hai. Paani zyada peeyen – din mein 8-10 glass. Agar 2 din mein relief nahi mili to Level 2 pe aao – doctor zaruri hai.',
  timeline4Weeks:
    'Ye signal hai ki infection ya koi aur underlying cause hai – akele ghar pe treat karna mushkil ho sakta hai. Is hafte doctor se milna zaroori hai. Urine test (urine culture) se exact cause pata chalega.',
  timelineMonthPlus:
    'Baar baar aane wali burning chronic hai – repeated UTIs, kidney issue, ya bladder sensitivity ho sakti hai. Sirf antibiotics se kaam nahi chalega. Root cause dhundna zaroori hai – homeopathy yahan helpful hoti hai recurrence rokne mein.',

  lifestyleCauses: [
    {
      _key: 'lc1',
      causeName: 'Paani Kam Peena (Dehydration)',
      mechanism:
        'Jab body mein paani kam hota hai, kidneys urine ko zyada concentrate karti hain – matlab zyada waste, kam fluid. Ye concentrated urine urethra (peshab ki nali) ki sensitive lining ko irritate karti hai, jisse jalan hoti hai. Yahi wajah hai garm mausam mein ye zyada hota hai.',
      howToIdentify:
        'Peshab ka rang dark yellow ya amber hoga. Jalan mild hogi – koi bukhaar nahi.',
    },
    {
      _key: 'lc2',
      causeName: 'Spicy Ya Acidic Khana',
      mechanism:
        'Kuch foods – red chilli, tomato, citrus, coffee, alcohol – urine ki acidity badha dete hain. Ye acidic urine jab urethra se guzarti hai, toh sensitive tissues mein jalan create karta hai. Khaana khaane ke kuch ghante baad ye zyada notice hota hai.',
      howToIdentify:
        'Khana khane ke 2-4 ghante baad jalan badhti hai. Infection ke koi aur signs nahi hote – sirf jalan hi complaint hoti hai.',
    },
    {
      _key: 'lc3',
      causeName: 'Naye Soap, Wash Ya Chemical Se Irritation',
      mechanism:
        'Genital area ki skin bahut sensitive hoti hai. Naya soap, feminine wash, ya synthetic kapde is area mein chemical irritation create kar sakte hain. Ye external irritation feel se lagti hai – andar se nahi.',
      howToIdentify:
        'Koi naya product use kiya ho – bath product, detergent, ya pad brand – aur tabse problem start hui ho. Irritation sirf outside feel hoti hai, andar nahi.',
    },
    {
      _key: 'lc4',
      causeName: 'Urine Rokna – Bahut Der Tak',
      mechanism:
        'Peshab rokne se bacteria ko bladder mein multiply karne ka time milta hai. Normal pee mein bacteria flush out ho jaate hain. Jab ye nahi hota, bladder ki lining irritate hoti hai aur infection ka risk badh jaata hai.',
      howToIdentify:
        'Jo log travel mein ya office mein bathroom avoid karte hain unhe ye zyada hoti hai. Pehle mild discomfort, phir jalan.',
    },
  ],

  medicalCauses: [
    {
      _key: 'mc1',
      diseaseName: 'UTI – Urinary Tract Infection',
      diseaseHindiName: 'Peshab Ki Nali Ka Infection',
      howSymptomPresents:
        'Burning urination ka sabse common medical cause hai UTI. Bacteria – aksar E. coli – urethra se bladder mein enter karte hain aur infection create karte hain. Jalan kaafi tez hoti hai, bar bar jaana padta hai, aur thoda sa nikal ke aata hai.',
      howToIdentify:
        'Jalan ke saath frequency bohot zyada hoti hai. Peshab mein smell aati hai, kabhi kabhi thoda cloudy dikhta hai. Women mein zyada common.',
      homeopediaSlug: '',
      isAvailable: false,
    },
    {
      _key: 'mc2',
      diseaseName: 'Kidney Stone',
      diseaseHindiName: 'Gurde Ki Pathri',
      howSymptomPresents:
        'Jab stone ureter ya urethra mein move karta hai, toh urine ki normal flow disrupt hoti hai aur tez jalan aur dard hota hai. Ye jalan aksar sudden aur severe hoti hai – UTI se alag.',
      howToIdentify:
        'Peeth ke ek taraf ya lower abdomen mein cramping dard ke saath jalan. Peshab mein kabhi kabhi blood. Dard waves mein aata hai.',
      homeopediaSlug: 'kidney-stone',
      isAvailable: true,
    },
    {
      _key: 'mc3',
      diseaseName: 'Prostate Problems (Men mein)',
      diseaseHindiName: 'Prostate Ki Samasya',
      howSymptomPresents:
        'Enlarged prostate (BPH) ya prostatitis mein bladder pe pressure badh jaata hai – jisse urine flow weak hoti hai, aur jalan hoti hai. 40+ saal ke men mein common.',
      howToIdentify:
        'Peshab shuru karne mein time lagta hai, flow weak hai, raat ko baar baar uthna padta hai. Burning ke saath ye signs hon to prostate cause likely hai.',
      homeopediaSlug: '',
      isAvailable: false,
    },
    {
      _key: 'mc4',
      diseaseName: 'STI – Sexually Transmitted Infection',
      diseaseHindiName: 'Youn Sanbandhi Sankraman (Gonorrhoea, Chlamydia)',
      howSymptomPresents:
        'Gonorrhoea ya Chlamydia mein urethra infect hoti hai – jalan tez hoti hai aur discharge bhi ho sakta hai. UTI jaisi symptoms hoti hain lekin cause alag hota hai.',
      howToIdentify:
        'Discharge (white/yellow) ke saath jalan. Partner mein bhi symptoms hon to STI ruled out nahi hona chahiye.',
      homeopediaSlug: '',
      isAvailable: false,
    },
    {
      _key: 'mc5',
      diseaseName: 'Interstitial Cystitis',
      diseaseHindiName: 'Bladder Mein Chronic Sujan',
      howSymptomPresents:
        'Bladder ki lining chronically inflamed hoti hai – bina infection ke. Ye ek frustrating condition hai kyunki urine test normal aata hai lekin jalan aur frequency rehti hai.',
      howToIdentify:
        'Baar baar UTI diagnosis lekin culture negative aata hai. Jalan constant rehti hai. Women mein zyada.',
      homeopediaSlug: '',
      isAvailable: false,
    },
  ],

  redFlags: [
    'Pyelonephritis (Kidney Infection) – agar bukhaar ke saath peeth mein dard ho, jalan ho, aur uthke khade hone mein takleef ho to turant hospital – kidney tak infection pahunch sakta hai',
    'Bladder Tumor – agar 40+ saal mein bina dard ke peshab mein baar baar khoon aaye, saath mein jalan ho, to delay mat karo – early detection critical hai',
    'Urethral Stricture – agar peshab ki dhaar bahut thin ho gayi hai aur jalan ke saath blockage jaisi feel ho to urology consult zaroori hai',
  ],

  homeSteps: [
    {
      _key: 'hs1',
      action: 'Paani Zyada Peeyen – Immediately',
      whyItWorks:
        'Zyada paani peeye se urine dilute hoti hai – acidity aur concentration kam hoti hai. Bacteria bhi flush out hote hain. Din mein 10-12 glass target rakho jab ye problem ho.',
    },
    {
      _key: 'hs2',
      action: 'Tightly Fitting Kapde Avoid Karein',
      whyItWorks:
        'Synthetic ya tight underwear us area mein moisture aur heat trap karta hai – bacteria ko grow karne ke liye ideal environment. Loose, cotton kapde is situation mein help karte hain.',
    },
    {
      _key: 'hs3',
      action: 'Genital Area Ko Gently Clean Rakhein',
      whyItWorks:
        'Sirf plain paani se – koi soap ya chemical use mat karein jab jalan ho. Strong chemicals irritation aur badhate hain.',
    },
    {
      _key: 'hs4',
      action: 'Jab Lagey Tabhi Peshab Karein – Rokein Mat',
      whyItWorks:
        'Urine rokne se bacteria ko multiply karne ka time milta hai. Immediately jaana unhe flush karne ka natural tarika hai.',
    },
    {
      _key: 'hs5',
      action: 'Warm Compress Lower Abdomen Pe',
      whyItWorks:
        'Ek warm cloth ya hot water bag lower abdomen pe rakhne se bladder spasm se temporary relief milti hai aur discomfort thoda kam hota hai. Temperature comfortable rakhein – bahut garam nahi.',
    },
  ],

  homeopathyIndividualization:
    'Burning urination ka naam ek hai – lekin feel har insaan mein alag hoti hai. Kisi ko peshab karte waqt jalan hoti hai, kisi ko baad mein. Kisi ki jalan garam cheez se badhti hai, kisi ko thandi cheez se better lagta hai. Kisi ko raat ko zyada hoti hai, kisi ko subah. Homeopathy mein sirf "burning" nahi dekhi jaati – aapki burning kaisi hai, kab hai, kaun se signs saath hain – ye sab milake treatment decide hoti hai. Isliye do logon ko same symptom mein bilkul alag medicines ho sakti hain.',
  homeopathyRootCause:
    'Jo log baar baar UTI ya burning urination se pareshan hain – unhe pata hai ki antibiotics thodi der ke liye kaam karte hain, phir wahi problem wapas. Ye baar baar aana ek deeper imbalance ka signal hai – immune response weak hai, ya bladder ki lining baar baar vulnerable hai. Homeopathy mein sirf is baar ka infection band karna goal nahi – body ki underlying tendency ko address kiya jaata hai. Waqt ke saath episodes ki frequency aur severity dono kam hoti hain. Research limited hai is area mein aur results individual hote hain – lekin jo patients constitutional treatment pe hain unhe recurrence zyada kam hoti hai.',
  homeopathySafety:
    'Pregnancy mein burning urination zyada common hoti hai – aur zyada carefully treat karni padti hai. Homeopathy is stage mein ek safe complementary option hai jo conventional treatment ke saath chal sakti hai. Severe cases mein, emergency mein – conventional treatment pehle. Homeopathy complementary role mein hai – replacement nahi.',

  homeopathyDiseaseLinks: [
    {
      _key: 'hdl1',
      diseaseName: 'Kidney Stone (Gurde Ki Pathri)',
      diseaseSlug: 'kidney-stone',
    },
  ],

  isForYouIf: [
    'Aap baar baar UTI se pareshan hain aur sirf antibiotics se thak gaye hain',
    'Aap root cause treat karna chahte hain – recurrence permanently kam karna chahte hain',
    'Pregnancy mein ya bacche mein safe option chahiye jo conventional ke saath chal sake',
  ],
  notForYouIf: [
    'Aapko bukhaar ke saath tez jalan hai – abhi conventional treatment zaroori hai, homeopathy recovery mein baad mein saath chalao',
    'Kidney infection ya blockage ka shak hai – pehle emergency care lein, homeopathy baad mein',
  ],

  linkedDiseaseCards: [
    {
      _key: 'ldc1',
      title: 'Kidney Stone',
      hindiName: 'Gurde Ki Pathri',
      slug: 'kidney-stone',
    },
  ],

  quickFactSymptom:
    'Peshab mein jalan ko medical language mein "Dysuria" ya "Burning Micturition" kehte hain.',
  quickFactIndiaStats:
    'India mein UTI har saal lakho logon ko affect karti hai – women mein lifetime mein 50-60% probability hai kum se kum ek UTI ka hona. (WHO data)',
  quickFactDoctorWhen:
    'Agar jalan ke saath bukhaar aaye, peshab mein khoon aaye, ya peeth mein dard ho – tabhi turant doctor.',

  faqs: [
    {
      _key: 'faq1',
      faqType: 'general',
      q: 'Peshab mein jalan ka sabse common karan kya hai?',
      a: 'Peshab mein jalan ka sabse common karan hai UTI (Urinary Tract Infection) – yaani peshab ki nali mein bacterial infection. Is infection mein E. coli jaisi bacteria urethra se bladder mein enter karti hai aur wahan multiply hoti hai. Iske alawa, dehydration bhi ek bahut common cause hai – jab paani kam peete ho toh urine bahut concentrated ho jaati hai aur urethra ko irritate karti hai. Spicy khana, naye soap ya chemical products bhi jalan ka karan ban sakte hain bina kisi infection ke. Agar jalan ke saath baar baar jaane ki urge, badbudar peshab, ya bukhaar ho – toh doctor se milna zaroori hai.',
    },
    {
      _key: 'faq2',
      faqType: 'general',
      q: 'Peshab mein jalan kab normal hai aur kab serious?',
      a: 'Mild jalan 1-2 din ke liye jo sirf peshab karte waqt ho – aur koi bukhaar, blood, ya tez dard na ho – ye aksar dehydration ya irritation se hoti hai. Paani zyada peene se improve hoti hai. Ye usually serious nahi hoti. Ye signs hon to doctor zaroori hai: jalan ke saath bukhaar (100°F se upar), peshab mein blood – pink ya red color, peeth ya lower abdomen mein tej dard, 3 din se zyada jalan ho aur better na ho, pregnancy mein koi bhi burning, ya peshab bilkul band ho jaaye. Ye signs upar ki taraf infection badh rahi hai ya kidney involve ho rahi hai – is situation mein delay khatarnak ho sakta hai.',
    },
    {
      _key: 'faq3',
      faqType: 'general',
      q: 'Peshab mein jalan kitne din tak rehti hai?',
      a: 'Ye depend karta hai cause pe. Dehydration se hone wali jalan 24-48 ghante mein better ho jaati hai – bas paani zyada peeyen. UTI ki jalan antibiotics shuru karne ke 2-3 din mein better honi chahiye, lekin poora course finish karna zaroori hai. Agar 3 din mein koi improvement nahi – ya jalan better hoke phir wapas aaye – toh urine culture test karwana chahiye. Yahi test batata hai ki exact bacteria kaun sa hai aur konsa antibiotic kaam karega. Antibiotics blindly lene se zyada helpful hai ye test. Bina treatment ke chronic infection kidney tak pahunch sakta hai – isliye wait mat karo.',
    },
    {
      _key: 'faq4',
      faqType: 'general',
      q: 'Ghar pe peshab ki jalan mein kya karein?',
      a: 'Agar jalan mild hai, bukhaar nahi hai, aur pehle se 3 din se kam time se hai – ye karo: paani bahut zyada peeyen – din mein 10-12 glass, spicy khana, coffee, aur alcohol 2-3 din avoid karein, tight synthetic kapde na pehnein, jab feel ho tabhi peshab karein – bilkul mat rokein, lower abdomen pe warm compress rakhein discomfort ke liye. Ye steps symptoms ko ease karte hain. Lekin agar 48 ghante mein better nahi hua, ya bukhaar aa jaaye, ya peshab mein blood aaye – turant doctor ke paas jaao. Ghar pe management infection ko cure nahi karta.',
    },
    {
      _key: 'faq5',
      faqType: 'general',
      q: 'Women mein peshab mein jalan zyada kyun hoti hai?',
      a: 'Women mein peshab ki nali (urethra) chhoti hoti hai – sirf 3-4 cm. Men mein ye 20 cm ki hoti hai. Chhoti urethra ka matlab hai bacteria bladder tak jaldi pahunch jaate hain. Saath mein, urethra ka opening anus ke bahut paas hota hai – jo bacteria ke transfer ko easy banata hai. Isliye women ko UTI aur jalan men ki comparison mein 10 guna zyada hoti hai. Pregnancy mein aur menopause ke baad hormonal changes bhi bladder ko zyada vulnerable banate hain. Isi wajah se women ke liye hygiene aur paani peena extra important hai.',
    },
    {
      _key: 'faq6',
      faqType: 'general',
      q: 'Pregnancy mein peshab mein jalan – normal hai kya?',
      a: 'Pregnancy mein mild frequency badhna normal hai – baby uterus bladder pe pressure dalta hai. Lekin jalan – burning sensation – normal nahi hai aur isko ignore nahi karna chahiye. Pregnancy mein UTI zyada common ho jaata hai kyunki hormones aur growing uterus urine flow ko slow karte hain. Pregnancy mein UTI agar treat na ho toh kidney infection (pyelonephritis) ka risk hota hai – jo preterm labor ka cause ban sakta hai. Isliye pregnancy mein koi bhi burning ho toh us hafte doctor se milein – apne aap treat mat karein. Urine routine test pregnancy checkups ka hissa hona chahiye.',
    },
    {
      _key: 'faq7',
      faqType: 'general',
      q: 'Bacchon mein peshab mein jalan – kya karna chahiye?',
      a: 'Bachon mein peshab ki jalan ko seriously lena chahiye. Chhote bacche aksar clearly express nahi kar paate – but signs hain: peshab karte waqt rone lagein, bar bar jaana chahein, pants geeli ho jaayein jo pehle nahi hoti thi, ya peshab mein badbu aaye. School-age bacchon mein UTI common hai – khaskar ladkiyon mein. Agar in signs ke saath bukhaar bhi ho, toh aaj hi doctor ko dikhao. Bacchon mein kidney infection jaldi badh sakti hai. Diagnosis ke liye urine test zaroori hai – ghar pe treat mat karein.',
    },
    {
      _key: 'faq8',
      faqType: 'general',
      q: 'Kya UTI ke bina bhi peshab mein jalan ho sakti hai?',
      a: 'Haan – UTI burning urination ka sabse common cause hai, lekin hamesha nahi hoti. Aur causes hain: dehydration – concentrated urine se irritation, spicy ya acidic food – urine ki acidity badhna, chemical irritation – new soap, wash, condom, kidney stones – stone move karte waqt, interstitial cystitis – bina infection ke chronic bladder inflammation, STIs – gonorrhoea ya chlamydia, prostate issues (men mein). Agar aapka urine culture negative aata hai lekin jalan rehti hai – tab doctor se in alternatives discuss karein. "UTI nahi hai" ka matlab "sab theek hai" nahi hota.',
    },
    {
      _key: 'faq9',
      faqType: 'general',
      q: 'Peshab mein jalan mein kaunsa test karwana chahiye?',
      a: 'Pehla test hota hai urine routine examination (urine R/E) – isme white blood cells, red blood cells, bacteria check hote hain. Ye basic test hai jo most clinics mein hota hai. Agar infection confirm ho, toh urine culture aur sensitivity test karo – ye batata hai exact bacteria kaun sa hai aur kaunsa antibiotic best kaam karega. Antibiotics blindly lene se zyada helpful hai ye test. Agar recurrent episodes hain, ya kidney stone ka shak ho, toh ultrasound pelvis suggest ho sakta hai. Baar baar hone pe blood tests (kidney function) bhi relevant ho sakte hain.',
    },
    {
      _key: 'faq10',
      faqType: 'general',
      q: 'Garam mausam mein peshab mein jalan zyada kyun hoti hai?',
      a: 'Garam mausam mein do cheezein hoti hain jo burning urination badhati hain. Pehli: paani ka loss zyada hota hai – sweating se body fluid lose karti hai, aur agar utna peete nahi to urine concentrate ho jaata hai. Ye concentrated urine urethra ko irritate karta hai. Doosri: garm aur humid weather bacteria ke grow hone ke liye ideal conditions hai – skin ke paas zyada moisture, zyada bacteria multiply karna. India ke garm regions mein April se July mein UTI cases significantly badhte hain. Solution simple hai: garm mausam mein paani peena double kar do – minimum 3-4 litre per day.',
    },
    {
      _key: 'faq11',
      faqType: 'homeopathy',
      q: 'Kya homeopathy peshab ki jalan mein kaam karti hai?',
      a: 'Homeopathy burning urination mein – specifically recurrent cases mein – helpful rahi hai. Single episode UTI mein conventional antibiotics tezi se kaam karte hain – aur jab infection active aur tez ho, pehle wahi zaroori hai. Homeopathy ka real role hai recurrence rokne mein. Jo log baar baar same infection se guzarte hain, unke liye homeopathy constitutional treatment body ki resistance badhaata hai aur episodes ki frequency kam karti hai. Ye mechanism based approach hai – har patient ki specific symptom pattern, triggers, aur history ke hisaab se treatment decide hoti hai. Results individual hote hain. Severe ya acute cases mein conventional treatment pehle lein – homeopathy complementary role mein best kaam karti hai.',
    },
    {
      _key: 'faq12',
      faqType: 'homeopathy',
      q: 'Peshab mein jalan hamesha ke liye kaise theek hogi?',
      a: '"Permanent cure" ka vaada koi bhi system honestly nahi kar sakta – aur koi kare to doubt karo. Jo realistic hai: sahi treatment se burning urination ke episodes itne kam ho sakte hain ki life practically normal ho jaaye. Single UTI mein antibiotics ka complete course – urine culture ke hisaab se – effective hai. Recurrent UTIs ke liye: zyada paani peena, cotton kapde, peshab rokne ki aadat chhodni, aur post-coital urination helpful hain. Agar lifestyle changes ke baad bhi baar baar ho raha hai – toh root cause dekho. Constitutional homeopathic treatment, underlying immune response ko address karke, recurrence significantly kam karne mein kaam karti hai. Long-term results ke liye proper case assessment zaroori hai.',
    },
  ],

  relatedSymptoms: [
    {
      _key: 'rs1',
      title: 'Frequent Urination (Baar Baar Peshab Aana)',
      hindiName: 'Baar Baar Peshab',
      slug: 'frequent-urination',
    },
    {
      _key: 'rs2',
      title: 'Blood in Urine (Peshab Mein Khoon)',
      hindiName: 'Peshab Mein Khoon',
      slug: 'blood-in-urine',
    },
    {
      _key: 'rs4',
      title: 'Back Pain (Peeth Dard)',
      hindiName: 'Kamar Dard',
      slug: 'back-pain',
    },
  ],

  sources: [
    {
      _key: 'src1',
      name: 'Mayo Clinic – Painful urination (dysuria): Causes & When to see a doctor | 2024',
    },
    {
      _key: 'src2',
      name: 'World Health Organization – Urinary Tract Infections | 2023',
    },
    {
      _key: 'src3',
      name: 'NCBI / National Library of Medicine – Dysuria: Evaluation and Differential Diagnosis in Adults | 2015',
    },
    {
      _key: 'src4',
      name: 'NHS UK – Burning or Painful Urination | 2023',
    },
  ],
}

async function seed() {
  console.log('🌱 Seeding Burning Urination symptom page...')
  await client.createOrReplace(symptom)
  console.log('✅ Symptom seeded — homeopedia.in/symptoms/burning-urination')
}

seed().catch(console.error)
