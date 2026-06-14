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
  _id: 'symptom-shoulder-pain',
  _type: 'symptom',
  title: 'Shoulder Pain (Kandhe Ka Dard)',
  hindiName: 'Kandhe Ka Dard / Kandhe Mein Dard',
  slug: { _type: 'slug', current: 'shoulder-pain' },
  metaTitle: 'Kandhe Mein Dard (Shoulder Pain) — Karan aur Ilaaj | Homeopedia',
  metaDescription:
    'Kandhe mein dard kyun hota hai? Frozen shoulder, rotator cuff ya posture — sab karan, lakshan aur homeopathic upay Hindi mein. Homeopedia pe padho.',
  heroText:
    'Kabhi kabhi ek kaam karte waqt kandha uthao – aur ek teez jhurjhuri si. Ya subah uthne pe pata chale ki daaya ya baaya kandha hilta hi nahi. Shoulder pain sirf dard nahi – ye routine kaam bhi rok deta hai: kapde pehanna, gaadi chalana, ek glass uthana bhi mushkil ho jaata hai.\n\nShoulder ek bahut complex joint hai – teen haddiyan, kai muscles, aur tendons ek saath kaam karte hain. Issi wajah se kandhe mein dard ke causes bhi zyada hain – aur akser log samajh nahi paate ki ye kab apne aap theek hoga aur kab doctor zaroori hai.\n\nYe page aapko 2 minute mein batayega: aapka kandhe ka dard kahan se aa raha hai, kitna serious hai, aur aapko abhi kya karna chahiye.',

  indiaContext:
    'India mein approximately 67% adults apni life mein kabhi na kabhi significant shoulder pain experience karte hain – jo isse ek bahut common musculoskeletal complaint banata hai.',
  indiaContextSource: 'NCBI / Indian Journal of Orthopaedics',

  severityLevel1: [
    'Dard mild hai – normal kaam ho raha hai, sirf discomfort hai',
    'Ek specific movement se hota hai (jaise haath upar karna)',
    'Injury ke baad 1-2 din ki stiffness – koi sujan nahi',
    'Raat ko sone ki position se hota hai – position badlne pe kam hota hai',
    'Garam takaiye ya rest se thoda relief milta hai',
  ],
  severityLevel2: [
    'Kandha 2 hafte se zyada dard kar raha hai, better nahi ho raha',
    'Haath sirf thoda upar tak uthta hai – poora range khatam ho raha hai',
    'Raat ko neend uchad jaati hai dard ki wajah se',
    'Dard baazoo mein utar raha hai – haath tak sunn-pan aa raha hai',
    'Kandhe ki jagah sujan dikh rahi hai ya wo jagah garam lag rahi hai',
    'Pehle injury hui thi jo properly theek nahi hui',
  ],
  severityLevel3: [
    'Bayan (left) kandhe mein achanak teez dard – saath mein saans ki takleef, pasina, seene mein kasav – ye heart attack ka sign ho sakta hai',
    'Kandhe pe directly chot lagi ho aur wo seedha nahi dikh raha (dislocation)',
    'Bahut teez dard ke saath bukhar bhi hai – infection ho sakta hai',
    'Kandhe mein feeling bilkul nahi – poora sunn-pan',
    'Pregnancy mein right shoulder mein achanak teez dard – ye ectopic pregnancy ya liver problem ka sign ho sakta hai',
  ],

  timeline3Days:
    'Koi chot lagi ho, ya galat position mein neend gayi ho, ya zyada kaam kiya ho – tab acutely muscles aur tendons mein inflammation aa jaati hai. Body khud heal karne ki koshish karta hai. Abhi rest karo, garam ya thanda compress lagao, zyada movement avoid karo. Agar teen din mein better nahi ho raha to Level 2 mein aao.',
  timeline4Weeks:
    'Agar 1-2 hafte ke baad bhi same dard hai – to koi deeper issue ho sakta hai. Rotator cuff injury, bursitis, ya frozen shoulder ki shuruaat ho sakti hai. Is stage pe doctor se milna sahi hoga – physiotherapy ya imaging doctor decide karega.',
  timelineMonthPlus:
    'Agar kandha 1 mahine se zyada se dard kar raha hai – to ye chronic condition ban chuki hai. Frozen shoulder, arthritis, ya cervical (gardan) se aane wali problem ho sakti hai. Ab sirf rest se kaam nahi chalega – proper evaluation zaroori hai. Homeopathy is stage pe ek effective complementary approach ho sakti hai jo underlying cause pe kaam karti hai.',

  lifestyleCauses: [
    {
      _key: 'lc1',
      causeName: 'Galat Posture (Jhukke Baithna)',
      mechanism:
        'Aajkal zyada tar log ghanton tak mobile ya laptop pe jhukke kaam karte hain. Isse gardan aur kandhe ki muscles ek hi position mein "lock" ho jaati hain. Time ke saath ye muscles tighten hoti hain, blood flow kam hota hai, aur inflammation build up hota hai – jo dard ke roop mein result karta hai. Office workers aur students mein ye sabse common pattern hai.',
      howToIdentify:
        'Din ke end mein dard badhta hai. Ek ya dono kandhe tighten feel hote hain. Gardan ghuma to kandha bhi harc karta hai.',
    },
    {
      _key: 'lc2',
      causeName: 'Overuse Injury (Ek Hi Kaam Baar Baar Karna)',
      mechanism:
        'Kandhe ki muscles aur tendons baar baar same movement se thak jaati hain – jaise painting karna, cricket khelta, ya swimming. Ye micro-tears create karta hai tissue mein jo aaram nahi milne par cumulative damage bante hain.',
      howToIdentify:
        'Specific activity ke baad dard badhta hai. Rest pe better hota hai. Ek particular direction mein dard zyada hota hai.',
    },
    {
      _key: 'lc3',
      causeName: 'Galat Position Mein Neend',
      mechanism:
        'Raat bhar ek hi side pe sone se kandhe ki joint ek awkward angle pe compressed rehti hai. Isse blood vessels aur nerves pe pressure padta hai – subah uthne pe stiffness aur dard hota hai.',
      howToIdentify:
        'Subah uthne pe dard hota hai jo thodi movement ke baad kam ho jaata hai. Jis side pe soye usi taraf ka kandha zyada dard karta hai.',
    },
    {
      _key: 'lc4',
      causeName: 'Achanak Heavy Lifting',
      mechanism:
        'Bina warm-up ke ya galat technique se bhaar uthana shoulder muscles aur rotator cuff tendons ko strain karta hai. Jab muscle ki capacity se zyada force lagayi jaati hai to fibres tear ho sakte hain.',
      howToIdentify:
        'Ek specific incident yaad hai jab se dard shuru hua. Haath upar karne mein takleef hai. Sujan dikh sakti hai.',
    },
  ],

  medicalCauses: [
    {
      _key: 'mc1',
      diseaseName: 'Frozen Shoulder (Adhesive Capsulitis)',
      diseaseHindiName: 'Jama Hua Kandha / Frozen Shoulder',
      howSymptomPresents:
        'Ye ek progressive condition hai – pehle dard, phir kandha hilna dheere dheere kam hota jaata hai, aur eventually kandha ek jagah "freeze" ho jaata hai. Teez dard hota hai kisi bhi direction mein hilane pe.',
      howToIdentify:
        'Haath sirf thoda upar uthta hai. Peeth peeche le jaana mushkil. Diabetes ke patients mein zyada common.',
      homeopediaSlug: 'frozen-shoulder',
      isAvailable: true,
    },
    {
      _key: 'mc2',
      diseaseName: 'Cervical Spondylosis',
      diseaseHindiName: 'Gardan Ki Haddi Ki Bimari / Cervical',
      howSymptomPresents:
        'Gardan ki nass compress hoti hai to dard gardan se kandhe mein aur kabhi kabhi haath tak jaata hai. Jhunjhunahat bhi ho sakti hai.',
      howToIdentify:
        'Gardan ghuma to dard badhta hai. Haath mein sunn-pan. Sone ke baad stiffness. 40+ umar mein zyada.',
      homeopediaSlug: 'cervical-spondylosis',
      isAvailable: true,
    },
    {
      _key: 'mc3',
      diseaseName: 'Rotator Cuff Injury',
      diseaseHindiName: 'Rotator Cuff Tear / Kandhe Ki Patt Ka Chot',
      howSymptomPresents:
        'Rotator cuff shoulder ke 4 muscles ka group hai jo joint ko stable rakhta hai. Inka tear hone pe dard hota hai specifically haath upar uthane pe ya peeth peeche le jaane pe. Raat ko dard zyada.',
      howToIdentify:
        'Haath upar uthate waqt kamzori feel hoti hai. Raat ko sone mein pareshaani. Sports ya heavy work karte log zyada affected.',
      homeopediaSlug: '',
      isAvailable: false,
    },
    {
      _key: 'mc4',
      diseaseName: 'Arthritis (Kandhe Ki Joint Mein)',
      diseaseHindiName: 'Gathiya / Sandhivaata',
      howSymptomPresents:
        'Joint ki cartilage (cushion) ghis jaati hai. Haddiyan ek doosre se rasne lagti hain. Dard chronic hota hai, subah stiffness, movement ke saath crackling sound.',
      howToIdentify:
        'Dard hamesha ka hai – koi ek incident nahi tha. Umar ke saath badhta hai. Dono joints gradually affected hote hain.',
      homeopediaSlug: 'arthritis',
      isAvailable: true,
    },
    {
      _key: 'mc5',
      diseaseName: 'Bursitis',
      diseaseHindiName: 'Kandhe Ki Thaili Ki Sujan',
      howSymptomPresents:
        'Shoulder joint mein fluid-filled sac (bursa) hoti hai jo cushion ka kaam karti hai. Jab ye inflamed hoti hai to haath upar uthane pe – especially side se – bahut dard hota hai.',
      howToIdentify:
        'Specific angle pe haath uthana bahut dard karta hai. Kandhe ko press karne pe dard hota hai. Rest pe better, movement pe worse.',
      homeopediaSlug: '',
      isAvailable: false,
    },
  ],

  redFlags: [
    'Heart Disease – Bayan kandhe mein dard agar seene mein kasav, pasina, ya saans lene mein takleef ke saath aaye to turant emergency mein jaao – ye heart attack ka sign ho sakta hai.',
    'Ectopic Pregnancy – Pregnancy mein dakne (right) kandhe mein achanak teez dard agar aaye to ye internal bleeding ka sign ho sakta hai – hospital jaao usi waqt.',
    'Shoulder Infection (Septic Arthritis) – Agar dard ke saath kandha laal ho, garam ho, aur bukhar 101°F se zyada ho – infection ho sakta hai jo serious hai, turant doctor.',
  ],

  homeSteps: [
    {
      _key: 'hs1',
      action: '48 Ghante Rest – But Complete Nahi',
      whyItWorks:
        'Kandha bilkul band karna (complete immobilization) aur bilkul chhod dena dono galat hain. Mild gentle movement blood flow rakhti hai. Sirf heavy lifting aur painful movements rokein.',
    },
    {
      _key: 'hs2',
      action: 'Ice Ya Warm Compress – Sahi Waqt Pe Sahi Cheez',
      whyItWorks:
        'Pehle 48-72 ghante mein nayi injury pe ice pack (towel mein lapet ke, seedha skin pe nahi) 15-20 minute ke liye sujan kam karta hai. Us ke baad – aur chronic pain mein – garam compress muscles ko relax karta hai aur blood flow badhata hai.',
    },
    {
      _key: 'hs3',
      action: 'Sleeping Position Adjust Karo',
      whyItWorks:
        'Raat ko kandhe pe kuch bhi pressure nahi padna chahiye. Dard waali side pe mat soye. Ek pillow haath ke neeche rakh ke sone se joint ka angle sahi rehta hai aur raat bhar dard nahi badhta.',
    },
    {
      _key: 'hs4',
      action: 'Gardan Aur Kandhe Ko Gentle Circular Moves Karo',
      whyItWorks:
        'Bilkul baith ke kandhe ko aage-peechhe aur upar-neeche circular movement karna – very slowly – stiffness kam karta hai. Ye muscles ko active rakhta hai bina strain ke. Agar dard hota hai to rok do.',
    },
    {
      _key: 'hs5',
      action: 'Kaam Ka Angle Theek Karo (Ergonomics)',
      whyItWorks:
        'Mobile use karte waqt ya laptop pe kaam karte waqt screen eye level pe honi chahiye. Kandha jhukka hua mat rakho. Har ghante 5 minute ka break lo – sirf itne se chronic shoulder pain kaafi had tak kam hota hai.',
    },
  ],

  homeopathyIndividualization:
    'Shoulder pain ka naam ek hai – lekin aapki story alag hai. Kisi ka dard raat ko badhta hai, kisi ka garam mausam mein, kisi ka specific movement se, kisi ka rest mein bhi nahi jaata. Homeopathy mein sirf "kandha dard karta hai" ka treatment nahi hota – aapki khaas takleef ka treatment hota hai. Do logon ko frozen shoulder ho sakta hai aur dono ka treatment bilkul alag ho sakta hai. Aapka pattern aapka treatment decide karta hai.',
  homeopathyRootCause:
    'Baar baar aane wala kandhe ka dard sirf mechanical problem nahi hai – wo aksar kisi deeper imbalance ka signal hai. Homeopathy mein sirf dard band karna goal nahi hota – jo cheez baar baar la rahi hai usse address kiya jaata hai. Frozen shoulder, arthritis, ya chronic bursitis mein – waqt ke saath movement better hoti hai aur dard ki frequency kam hoti hai. Research is area mein limited hai aur results individual hote hain.',
  homeopathySafety:
    'Diluted medicines hone ki wajah se homeopathy practically side-effect free hai – isliye ye elderly patients mein, un logon mein jinhe pehle se kai medicines chal rahi hain, aur long-term use ke liye safe complementary option hai. Emergency situations mein conventional treatment pehle – homeopathy baad mein saath chal sakti hai, replacement nahi hai.',

  homeopathyDiseaseLinks: [
    {
      _key: 'hdl1',
      diseaseName: 'Frozen Shoulder (Jama Hua Kandha)',
      diseaseSlug: 'frozen-shoulder',
    },
    {
      _key: 'hdl2',
      diseaseName: 'Cervical Spondylosis (Gardan Ki Haddi)',
      diseaseSlug: 'cervical-spondylosis',
    },
    {
      _key: 'hdl3',
      diseaseName: 'Arthritis (Gathiya)',
      diseaseSlug: 'arthritis',
    },
  ],

  isForYouIf: [
    'Aap sirf dard killer tablets se thak gaye hain – root cause samajhna chahte hain',
    'Aapka shoulder pain chronic hai – baar baar aata hai ya saal bhar se hai',
    'Aap elderly hain ya kai medicines chal rahi hain – side-effect free option chahiye',
    'Long-term, sustainable improvement chahiye',
  ],
  notForYouIf: [
    'Aapka kandha dislocate ho gaya hai ya fracture ka doubt hai – pehle emergency, homeopathy baad mein',
    'Aapko abhi isi waqt teez dard se relief chahiye – us waqt conventional pain management lein, homeopathy baad mein complementary roop mein chalao',
    'Rotator cuff ka complete tear hai jo surgery recommend kiya gaya hai – surgery ke baad recovery mein homeopathy help kar sakti hai',
  ],

  linkedDiseaseCards: [
    {
      _key: 'ldc1',
      title: 'Frozen Shoulder',
      hindiName: 'Jama Hua Kandha',
      slug: 'frozen-shoulder',
    },
    {
      _key: 'ldc2',
      title: 'Cervical Spondylosis',
      hindiName: 'Gardan Ki Haddi Ka Dard',
      slug: 'cervical-spondylosis',
    },
    {
      _key: 'ldc3',
      title: 'Arthritis',
      hindiName: 'Gathiya',
      slug: 'arthritis',
    },
  ],

  quickFactSymptom:
    'Shoulder 3 haddiyon se bana hai – Clavicle, Scapula, aur Humerus. Ye body ki sabse zyada movable joint hai – isliye injury ka risk bhi zyada hai.',
  quickFactIndiaStats:
    'Approximately 67% adults apni life mein kabhi significant shoulder pain experience karte hain. Working-age adults (30-50 saal) mein zyada common.',
  quickFactDoctorWhen:
    'Agar 2 hafte mein better nahi hua, ya bayan kandhe ka dard seene ke symptoms ke saath aaya – turant doctor.',

  faqs: [
    {
      _key: 'faq1',
      faqType: 'general',
      q: 'Kandhe mein dard kyun hota hai?',
      a: 'Kandhe ka dard aksar muscles, tendons, ya joint mein inflammation ki wajah se hota hai. Sabse common karan hain – galat posture se muscles tighten hona, rotator cuff (kandhe ko move karne waali nassen) mein injury, ya frozen shoulder ki shuruaat. Gardan ki nass dabne se bhi dard kandhe mein aa sakta hai. Simple cases mein rest, posture theek karna, aur garam compress se better hota hai. Agar 2 hafte mein better na ho – doctor se milein.',
    },
    {
      _key: 'faq2',
      faqType: 'general',
      q: 'Raat ko kandhe ka dard kyun badhta hai?',
      a: 'Raat ko kandhe ka dard isliye badhta hai kyunki neend mein aap ek hi position mein ghanton tak rehte hain – jis side pe sote hain uss kandhe pe pressure padta rehta hai. Gravity aur compression se bursa ya rotator cuff pe load badhta hai jo din mein movement se kam tha. Frozen shoulder aur bursitis mein raat ka dard zyada badname hai. Solution: dard waali side pe mat soye, haath ke neeche pillow rakho, ya peeth ke bhar soye. Agar raat ka dard 1 hafte se zyada hai – ye kisi underlying condition ka sign ho sakta hai.',
    },
    {
      _key: 'faq3',
      faqType: 'general',
      q: 'Kandhe ka dard kab normal hai aur kab doctor zaroori hai?',
      a: 'Normal hai agar: ek specific injury ke baad 2-3 din ki stiffness, galat position mein sone ke baad subah ki takleef, ya zyada kaam ke baad ka dard – jo rest se 3-5 din mein better ho. Doctor zaroori hai agar: 2 hafte mein better nahi hua, haath upar uthana mushkil ho raha hai, sujan ya lagatar raat ka dard hai, baazoo mein sunn-pan ya jhunjhunahat aa rahi hai. Turant hospital: bayan kandha + seene mein kasav + pasina = heart attack possible – ek minute mat ruko.',
    },
    {
      _key: 'faq4',
      faqType: 'general',
      q: 'Neend mein kandhe ka dard – ghar pe kya karein?',
      a: 'Sone ki position sabse pehle badlo – dard waali side pe bilkul mat soye. Haath ke neeche ek folded blanket ya pillow rakho jisse joint ka angle neutral rahe. Sone se pehle garam compress 15 minute de sakto hain – muscles relax hoti hain. Agar ye 5-7 din mein better nahi hua to doctor se milna chahiye – chronic raat ka dard aksar bursitis ya rotator cuff issue ki taraf point karta hai.',
    },
    {
      _key: 'faq5',
      faqType: 'general',
      q: 'Mahilaon mein kandhe ka dard zyada kyun hota hai?',
      a: 'Mahilaon mein frozen shoulder diabetes ke bina bhi relatively zyada common hai – hormonal changes (especially menopause ke aas paas) joint capsule ko affect karti hain. Ghar ka kaam – jhukke bartan dhona, kapde dhona, roti banana – repetitive shoulder movements create karte hain. Breastfeeding mein awkward positioning se bhi short-term shoulder strain hota hai. Is sab se muscles aur tendons pe cumulative stress badhta hai. Agar dard dheere dheere badh raha hai aur movement kam ho rahi hai – frozen shoulder rule out karo.',
    },
    {
      _key: 'faq6',
      faqType: 'general',
      q: 'Kandhe ka dard baazoo mein kyun utarta hai?',
      a: 'Dard jo kandhe se baazoo mein – kabhi kabhi haath tak – utarta hai, aksar nerve involvement ka sign hai. Gardan ki disc (cervical disc) press hone se nerve ka dard us nerve ke poore raaste mein feel hota hai – jise radiculopathy kehte hain. Rotator cuff tear mein bhi dard upper arm tak aa sakta hai. Agar saath mein haath mein sunn-pan ya kamzori bhi ho – to test zaroori hai. Sirf shoulder ka dard samajh ke treat mat karo agar baazoo bhi involve hai.',
    },
    {
      _key: 'faq7',
      faqType: 'homeopathy',
      q: 'Kya homeopathy kandhe ke dard mein kaam karti hai?',
      a: 'Homeopathy chronic shoulder pain mein – jaise frozen shoulder, arthritis, ya bursitis – mein ek helpful complementary approach ho sakti hai. Homeopathy ka fayda ye hai ki ye sirf dard mask nahi karta – cause ko address karta hai. Acute injury ya inflammation mein conventional treatment fast relief deta hai; homeopathy tab better kaam karta hai jab koi chronic ya recurring pattern ho. Results individual hote hain. Koi bhi medicine lene se pehle qualified homeopath se consultation recommend kiya jaata hai – self-medication se bachein.',
    },
    {
      _key: 'faq8',
      faqType: 'general',
      q: 'Kandhe ka dard kitne din tak rehta hai?',
      a: 'Ye cause pe depend karta hai: muscle strain (overuse, galat posture) – 5-10 din; bursitis – 2-4 hafte, treatment ke saath; rotator cuff injury – 4-6 hafte to 3 mahine; frozen shoulder – kuch mahine se 1-2 saal (stages mein hota hai); arthritis – chronic, manage hota hai, completely jaata nahi. Agar 2 hafte mein significant improvement nahi – evaluation zaroori hai.',
    },
    {
      _key: 'faq9',
      faqType: 'general',
      q: 'Kandhe ke dard mein kaunsa doctor dikhana chahiye?',
      a: 'Pehla doctor: General physician / family doctor – initial assessment ke liye. Agar further zarurat ho: Orthopedic specialist (bone and joint specialist) ya Physiotherapist. Agar nerve involvement lag rahi ho: Neurologist. Koi specific test – X-ray (fracture/arthritis dekhne ke liye), MRI (rotator cuff, frozen shoulder ke liye), ya ultrasound (bursitis) – doctor decide karega case ke hisaab se.',
    },
    {
      _key: 'faq10',
      faqType: 'general',
      q: 'Kandhe ka dard baar baar kyun aata hai?',
      a: 'Baar baar aane wala shoulder pain aksar underlying cause ka signal hai jo properly address nahi hua. Common reasons: posture nahi badla, rotator cuff weak raha, ya chronic condition (arthritis, bursitis) properly manage nahi hui. Ek aur karan: sirf dard band karna – cause nahi dekhna. Homeopathy ka approach yahi hai ki baar baar aane waale pattern ko tod ke underlying cause pe kaam karo. Research limited hai lekin chronic cases mein ye approach sustainable improvement deti hai – results individual hote hain.',
    },
    {
      _key: 'faq11',
      faqType: 'homeopathy',
      q: 'Kya kandhe ka dard hamesha ke liye theek ho sakta hai?',
      a: '"Permanent cure" ka vaada koi bhi system honestly nahi kar sakta – aur koi kare to doubt karo. Jo realistic hai: muscle strain ya bursitis – proper treatment se completely better ho sakta hai; frozen shoulder – full movement wapis aa sakti hai (12-18 mahine); arthritis – manage ho sakta hai, progression rok sakte hain; rotator cuff tear – depends on severity, some need surgery. Homeopathy chronic cases mein frequency aur intensity dono kaafi kam kar sakti hai – individual results vary karte hain. Sahi diagnosis ke baad realistic expectation set karo.',
    },
    {
      _key: 'faq12',
      faqType: 'general',
      q: 'Bayan kandhe mein dard – kya ye dil ki bimari ka sign hai?',
      a: 'Left (bayan) kandhe mein dard aksar musculoskeletal reasons se hota hai – galat posture, cervical, frozen shoulder. Lekin agar ye signs bhi hain – turant emergency mein jaao: seene mein dard ya kasav, saans lene mein takleef, pasina, chakkar, ya bina kisi injury ke achanak teez left shoulder pain. Dono symptoms saath hain to wait mat karo – ye heart attack ka warning sign ho sakta hai. Sirf left shoulder dard bina kisi aur symptom ke usually heart problem nahi hai – lekin agar doubt ho to doctor se milna sahi hai.',
    },
  ],

  relatedSymptoms: [
    {
      _key: 'rs1',
      title: 'Neck Pain (Gardan Ka Dard)',
      hindiName: 'Gardan Mein Dard',
      slug: 'neck-pain',
    },
    {
      _key: 'rs2',
      title: 'Back Pain (Peeth Ka Dard)',
      hindiName: 'Peeth Mein Dard',
      slug: 'back-pain',
    },
    {
      _key: 'rs3',
      title: 'Arm Numbness (Haath Mein Sunn-Pan)',
      hindiName: 'Haath Mein Sunn-Pan',
      slug: 'arm-numbness',
    },
    {
      _key: 'rs4',
      title: 'Joint Stiffness (Jodo Ki Akad)',
      hindiName: 'Jodo Ki Akad',
      slug: 'joint-stiffness',
    },
  ],

  sources: [
    {
      _key: 'src1',
      name: 'Mayo Clinic – Shoulder Pain: Causes and Treatments | 2024',
    },
    {
      _key: 'src2',
      name: 'NHS UK – Shoulder Pain: Causes, Treatment and Exercises | 2023',
    },
    {
      _key: 'src3',
      name: 'NCBI / National Library of Medicine – Shoulder Pain Epidemiology | 2020',
    },
    {
      _key: 'src4',
      name: 'WHO – Musculoskeletal Health: Key Facts | 2023',
    },
  ],
}

async function seed() {
  console.log('🌱 Seeding Shoulder Pain symptom page...')
  await client.createOrReplace(symptom)
  console.log('✅ Symptom seeded — homeopedia.in/symptoms/shoulder-pain')
}

seed().catch(console.error)
