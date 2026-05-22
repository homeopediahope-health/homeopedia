import { createClient } from 'next-sanity'
import * as dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  token: process.env.SANITY_API_TOKEN!,
  useCdn: false,
})

const symptom = {
  _id: 'symptom-numbness-tingling',
  _type: 'symptom',
  title: 'Numbness & Tingling (Sunn Hona aur Jhunjhunahat)',
  hindiName: 'Haath Paon Sunn Hona / Jhunjhunahat',
  slug: { _type: 'slug', current: 'numbness-tingling' },
  bodySystem: 'Neurological',
  shortDescription: 'Haath ya paon mein sunn hona ya jhunjhunahat — nerve signal problem hai. Posture se bhi hoti hai, diabetes ya cervical spondylosis se bhi.',
  metaTitle: 'Numbness Tingling in Hindi — Karan, Ilaaj aur Homeopathy',
  metaDescription: 'Numbness tingling (haath paon ka sunn hona ya jhunjhunahat) ke karan, severity aur safe steps — Hinglish mein. Verified info, doctor-reviewed.',
  reviewDate: 'May 2026',

  heroText: `Kabhi kabhi haath ya paon mein ek ajeeb sa feeling aata hai — jaise sau suiyaan ek saath chubb rahi hon, ya wo area bilkul sunn ho gaya ho, koi feeling hi nahi. Seedha baithe raho to thodi der mein thak jaata hai, raat ko neend mein haath kaata hai ya paon mein jhunjhunahat se neend uchad jaati hai.

Ye sensation — jise doctors "numbness and tingling" kehte hain aur hum "sunn hona ya jhunjhunahat" — ek nerve signal hai. Body ka nervous system kuch bata raha hai — kabhi simple posture se, kabhi kisi deeper reason se.

India mein ye ek bahut common complaint hai — khaas taur pe desk job karne walon mein, diabetic patients mein, aur pregnancy ke dauran. Aap akele nahi hain.

Diabetes — India mein numbness ka sabse bada cause — ke lagbhag 7.7 crore patients hain (WHO, 2023), aur unme se 50% tak ko kabhi na kabhi numbness-tingling hoti hai.`,

  severityScale: {
    level1: {
      label: 'Ghar Pe Manage Karo',
      signs: [
        'Ek position mein zyada der baithne ya letne ke baad numbness aayi — aur position change karte hi 5-10 minute mein theek ho gayi',
        'Raat ko sokar uthne pe haath sunn tha — thoda hilane pe normal ho gaya',
        'Sirf ek specific area mein — jaise ek ungali ya ek haath ki side',
        'Din mein ek ya do baar — aur koi aur takleef nahi',
        'Koi weakness, balance problem, ya face mein numbness nahi',
      ],
    },
    level2: {
      label: 'Is Hafte Doctor Se Milein',
      signs: [
        'Numbness baar baar aa rahi hai — roz ya almost roz',
        'Position change karne ke bawajood 15-20 minute se zyada rehti hai',
        'Dono haath ya dono paon mein ek saath — ya ek taraf ka poora haath',
        'Saath mein halki weakness ya chhoti cheezon ko pakad na paana',
        'Neck, kamar, ya back mein dard ke saath numbness aa rahi hai',
        'Symptoms raat ko zyada hote hain aur neend affect ho rahi hai',
      ],
    },
    level3: {
      label: 'Turant Hospital Jaao',
      signs: [
        'Achanak — bina kisi obvious reason ke — ek puri taraf ke haath, paon, aur chehra saath mein sunn ho jaayein',
        'Numbness ke saath bolne mein takleef ya bolna band ho jaaye',
        'Aankhon ki roshni achanak dhundli ya ek aankhon se nahi dikhe',
        'Numbness ke saath confuse feel ho raha ho, balance bigad raha ho',
        'Numbness ke saath seene mein dard ya saans lene mein takleef',
        'Bladder ya bowel control achanak chala jaaye',
      ],
    },
  },

  timeline: [
    {
      duration: 'Nayi Takleef — 1 se 3 Din',
      advice: 'Agar aaj ya kal se shuru hui hai — aur ek jagah position change karne ke baad theek ho jaati hai — to ye posture ya pressure se nerve dabne ka common case ho sakta hai. Position theek karo, thoda chalo, aur dekho. Agar 3 din mein bilkul theek ho jaaye to worry ki baat nahi. Agar baar baar aa rahi hai ya position change karne pe bhi nahi jaati — to Level 2 ke hisaab se doctor se milein.',
    },
    {
      duration: 'Chalti Aa Rahi — 1 se 4 Hafte',
      advice: 'Ek hafte se zyada chal rahi numbness posture ka nahi, kuch aur ka signal hai. Nerve compression, vitamin deficiency, ya koi underlying condition ho sakti hai. Ye self-resolve hone wali takleef nahi rahi. Is hafte doctor se milein — test karwana zaroori hoga. Delay karne se nerve damage permanent ho sakta hai.',
    },
    {
      duration: 'Purani Problem — 1 Mahina Ya Zyada',
      advice: 'Agar mahine ya saalon se chal rahi hai — ye chronic neuropathy ka case ho sakta hai. Chronic numbness mein turant koi emergency nahi hoti — lekin treatment shuru karna zaruri hai. Nerve damage agar lamba chale to recover hone mein waqt lagta hai. Abhi doctor se milein, detailed diagnosis karwayein, aur long-term plan banayein. Homeopathy is stage mein complementary role mein saath chal sakti hai.',
    },
  ],

  lifestyleCauses: [
    {
      title: 'Galat Posture ya Nerve Dabna (Pressure Neuropathy)',
      recognition: 'Position change karne ke baad theek ho jaaye — yahi sabse clear sign hai. Baar baar wahi position lene se phir aata hai.',
      description: 'Jab hum ek hi position mein zyada der baithte hain — crossed legs, haath ke neeche sar rakh ke sona, ya desk pe apna elbow tikaye rehna — to us jagah ki nerve pe pressure padta hai. Nerve temporarily blood supply aur signal transmission dono kho deti hai. Brain tak signal nahi pahunchta — aur ye experience numbness ya pins-and-needles ke roop mein hota hai. Position change karte hi blood flow resume hota hai aur 5-10 minute mein normal ho jaata hai.',
    },
    {
      title: 'Vitamin B12 ki Kami (Deficiency)',
      recognition: 'Dono haath aur dono paon ki ungliyon mein equally — symmetric pattern. Saath mein thakaan, memory weak hona, ya tongue mein sensation bhi ho sakta hai.',
      description: 'Vitamin B12 nerve cells ke upar ek protective layer — myelin sheath — banata hai. Ye layer electric wire ke insulation ki tarah hai. Jab B12 kam hoti hai — vegetarians mein, elderly mein, ya jo antacids ya metformin lete hain unme — ye protective layer damage hone lagti hai. Damaged myelin mein se signals theek se nahi nikalte — aur result hota hai jhunjhunahat ya sunn hona, khaas taur pe haath aur paon ki ungliyon mein.',
    },
    {
      title: 'Zyada Der Tak Ek Kaam Karna — Repetitive Stress',
      recognition: 'Kaam karte waqt ya karne ke baad zyada hoti hai. Wrist ko hila ke dekho — agar jhunjhunahat badhe to carpal tunnel ka sign hai. Raat ko sote waqt bhi hoti hai.',
      description: 'Jo log ek hi movement baar baar karte hain — typing, mobile scrolling, stitching, ya koi factory work — unke tendons aur muscles baar baar ek jagah swell karte hain. Ye swelling aas-paas ki nerve ko compress karti hai. Carpal tunnel syndrome isi se hota hai — wrist mein ek narrow passage hai, swelling se nerve dabti hai, aur haath ki 3-4 ungliyon mein numbness aane lagti hai.',
    },
    {
      title: 'Vitamin D ya Magnesium ki Kami',
      recognition: 'Aam taur pe widespread — sirf ek jagah nahi. Saath mein muscle cramps, weakness, ya thakaan bhi hoti hai.',
      description: 'Vitamin D nerve signal transmission mein role karta hai — aur India mein, jahan bahut log ghar ke andar rehte hain, deficiency bahut common hai. Magnesium muscle aur nerve relaxation ke liye zaroori hai. Dono ki kami mein nerves extra sensitive ho jaati hain — chhoti si bhi cheez se jhunjhunahat trigger ho sakti hai.',
    },
  ],

  medicalCauses: [
    {
      diseaseName: 'Diabetes Mellitus (Diabetic Neuropathy)',
      diseaseHindiName: 'Madhumeh / Sugar Ki Bimari',
      diseaseSlug: '',
      isAvailable: false,
      description: 'High blood sugar dhire dhire nerve fibers ko damage karta hai — khaas taur pe paon ki nerves pehle. Paon mein burning, jhunjhunahat, ya bilkul feeling na hona — ye diabetic neuropathy ke classic signs hain. Raat ko zyada hoti hai. Bahut advanced cases mein patient ko chhot lag jaati hai aur pata bhi nahi chalta.',
      recognition: 'Numbness paon ke talne aur ungliyon se shuru hoti hai — "glove and stocking" pattern. Diabetes ka history ho, ya thakaan, zyada pyaas, zyada urine aane ke signs hon to yahi reason likely hai.',
    },
    {
      diseaseName: 'Cervical Spondylosis',
      diseaseHindiName: 'Gardan Ki Haddi Ka Ghisna',
      diseaseSlug: 'cervical-spondylosis',
      isAvailable: true,
      description: 'Gardan ki discs ya bones jab nerves ko dabne lagti hain — to haath ki ungliyon mein, haath mein, ya kabhi kabhi pure haath mein numbness aane lagti hai. Ye cervical radiculopathy kehlaata hai. Ek haath mein — aur position ya movement se worse hona — iska khaas pattern hai.',
      recognition: 'Numbness ke saath gardan mein dard ya stiffness hogi. Sar ko peeche ya ek taraf jhukane se numbness badh jaaye. Umar 35+ aur desk/phone use zyada ho to ye common cause hai.',
    },
    {
      diseaseName: 'Carpal Tunnel Syndrome',
      diseaseHindiName: 'Kalai Ki Nali Ka Syndrome',
      diseaseSlug: 'carpal-tunnel-syndrome',
      isAvailable: true,
      description: 'Wrist mein ek narrow tunnel hai jisme se median nerve nikalti hai. Swelling, overuse, ya pregnancy se ye tunnel narrow ho jaati hai. Result: thumb, index finger, middle finger aur ring finger ki aadhi side — inme jhunjhunahat aur numbness. Raat ko kafi zyada hoti hai — log neend mein haath hila kar jaag jaate hain.',
      recognition: 'Haath ko 1 minute ke liye flex (neeche moda) rakho — agar numbness badhe to Phalen\'s test positive hai. Typing, sewing, ya zyada mobile use karte hon to risk zyada.',
    },
    {
      diseaseName: 'Hypothyroidism',
      diseaseHindiName: 'Thyroid Gland Ki Kami',
      diseaseSlug: 'thyroid',
      isAvailable: true,
      description: 'Jab thyroid hormone kam hoti hai to body mein ek general slowdown aata hai — nerves bhi slow ho jaati hain. Carpal tunnel syndrome ka risk badhta hai, aur nerve conduction slow hone se haath paon mein jhunjhunahat common ho jaati hai. Ye peripheral neuropathy thyroid se bhi ho sakti hai.',
      recognition: 'Numbness ke saath weight gain, thakaan, baalon ka jhadna, aur thandi lagni ho — to thyroid check zaroori hai. Mahilaon mein zyada common.',
    },
    {
      diseaseName: 'Sciatica / Lumbar Disc Herniation',
      diseaseHindiName: 'Kamar Ki Slip Disc / Sciatica',
      diseaseSlug: 'sciatica',
      isAvailable: true,
      description: 'Kamar ki disc jab khisakti hai to woh sciatic nerve ya doosri lumbar nerves ko dabne lagti hai. Ye dard aur numbness ek pair (leg) mein neeche tak jaati hai — buttock se ghutne tak, kabhi kabhi paon tak.',
      recognition: 'Sirf ek pair mein — aur peeth ya kamar ke dard ke saath. Uthne baithne se worse hoti hai, letne pe thoda better. Seedha pair uthane se numbness ya dard zyada ho to disc problem likely hai.',
    },
  ],

  redFlags: [
    'Stroke ya TIA (Mini Stroke) — agar achanak ek hi side ka chehra, haath aur pair ek saath sunn ho jaayein — bina kisi karan ke — ye stroke ka classic sign hai. Iske saath bolne mein dikkat ya aankhon ki problem ho to ye medical emergency hai. Ek minute mat ruko — 108 pe call karo.',
    'Multiple Sclerosis (MS) — ek neurological condition jisme nerve ki protective layer immune system khud kharab karne lagta hai. Numbness episodes aate aur jaate hain — aankhon mein problem, balance bigadna, aur extreme thakaan bhi saath ho sakti hai. Young adults mein agar bina reason ke baar baar numbness aaye to MS rule out karna zaroori hai.',
    'Spinal Cord Compression — agar numbness dono paon ya dono haath mein ek saath ho — aur bladder ya bowel control kam ho jaaye — to spinal cord pe pressure ho sakta hai. Ye neurosurgical emergency hai. Turant hospital.',
  ],

  homeSteps: [
    {
      step: 'Position Change Karo — Turant',
      reason: 'Numbness ka sabse common reason nerve pe pressure hai. Haath ya pair ki position badlo — straight karo, stretch karo, thoda walk karo. Blood flow resume hoga aur 5-10 minute mein sensation wapas aayegi.',
    },
    {
      step: 'Gentle Circular Movement — Affected Area Ka',
      reason: 'Slow circular movement (wrist ya ankle rotate karna) blood circulation improve karta hai. Nerve pe se pressure hata ke micro-circulation badhti hai — tingling faster resolve hoti hai. Sharp ya forced movement mat karo — gentle circles hi karo.',
    },
    {
      step: 'Warm (Garam) Paani Mein Haath Ya Paon Rakhna',
      reason: 'Moderate warmth blood vessels dilate karta hai — circulation badhata hai. Chronic numbness mein temporary relief deta hai. Dhyan rakho — paani bahut garam na ho, especially agar diabetes hai to feeling kam hoti hai aur jalne ka risk hai. Lukewarm rakho.',
    },
    {
      step: 'Apni Posture Aur Sleeping Position Check Karo',
      reason: 'Agar raat ko haath sunn hota hai — pillow ka arrangement dekho, ya haath ke neeche kuch na rakhein. Din mein screen ke saamne kaam karte waqt haath ki height check karo — elbow 90 degree hona chahiye. Ek simple posture fix se chronic numbness resolve ho sakti hai.',
    },
    {
      step: 'Ek Jagah Zyada Der Mat Baithein — Har 45 Minute Mein Uthein',
      reason: 'Prolonged sitting ya ek position mein rehna nerve compression ka biggest lifestyle cause hai. Har 45 minute mein 2-5 minute walk ya stretch — ye simple habit desk workers mein numbness dramatically kam karti hai. Alarm laga lo agar bhoolte ho.',
    },
  ],

  homeopathyAngle1: 'Numbness tingling ka naam ek hai — lekin har insaan mein alag hoti hai. Kisi ko raat ko haath sunn hota hai, kisi ko chalna shuru karte hi paon mein jhunjhunahat, kisi ko sirf thandi mein badhti hai, kisi ko garmi mein. Kisi ki fingertips mein hai, kisi ka poora haath. Homeopathy mein sirf "numbness" dekh ke treatment nahi hoti — aapki numbness kaisi hai, kab badhti hai, kya karne se better hoti hai, kitni der se hai, saath mein aur kya symptoms hain — ye sab milake aapka treatment decide hota hai.',

  homeopathyAngle2: 'Baar baar aane wali numbness aksar ek deeper imbalance ka signal hoti hai — nerve ki health, circulation, ya underlying condition se. Homeopathy mein sirf numbness ko temporarily band karna goal nahi hota. Jo system usse baar baar la raha hai — nerve function, circulation, ya overall vitality — usse address kiya jaata hai. Research is area mein limited hai aur results individual hote hain — lekin jo patients chronic numbness ke saath aate hain, unme se kaafi logon mein frequency aur intensity waqt ke saath kam hoti dekhi gayi hai.',

  homeopathyAngle3: 'Highly diluted medicines hone ki wajah se homeopathy practically side-effect free hai — isliye ye elderly patients mein, jinhe kai doosri medicines chal rahi hain, aur jo long-term treatment mein safe complementary option chahte hain, unke liye suitable hai. Severe ya acute numbness mein — especially Level 3 signs mein — pehle conventional emergency treatment lein. Diagnosis pehle hona zaroori hai — cause jane bina treatment sahi nahi hogi.',

  homeopathyIsFor: [
    'Aap root cause treat karna chahte hain — sirf temporary relief nahi',
    'Aapki numbness chronic hai aur conventional treatment ke saath kuch aur add karna chahte hain',
    'Aap side-effect free complementary option dhundh rahe hain — especially agar already kai medicines chal rahi hain',
    'Aap long-term nerve health pe dhyan dena chahte hain',
  ],

  homeopathyNotFor: [
    'Aapko abhi isi waqt Level 3 symptoms hain — stroke ke signs — turant emergency mein conventional treatment lein',
    'Aapki numbness ka cause abhi tak diagnose nahi hua — pehle proper diagnosis, phir treatment',
    'Surgical condition hai jaise severe disc prolapse — surgery pehle, homeopathy baad mein recovery mein saath chal sakti hai',
  ],

  homeopathyDiseaseLinks: [
    { diseaseName: 'Cervical Spondylosis', diseaseSlug: 'cervical-spondylosis', diseaseHindiName: 'Gardan Ki Haddi Ka Ghisna' },
    { diseaseName: 'Carpal Tunnel Syndrome', diseaseSlug: 'carpal-tunnel-syndrome', diseaseHindiName: 'Kalai Ki Nali Ka Syndrome' },
    { diseaseName: 'Sciatica / Lumbar Disc', diseaseSlug: 'sciatica', diseaseHindiName: 'Kamar Ki Slip Disc' },
  ],

  linkedDiseaseCards: [
    {
      diseaseName: 'Diabetes Mellitus (Diabetic Neuropathy)',
      diseaseHindiName: 'Madhumeh / Sugar Ki Bimari',
      diseaseSlug: '',
      isAvailable: false,
    },
    {
      diseaseName: 'Cervical Spondylosis',
      diseaseHindiName: 'Gardan Ki Haddi Ka Ghisna',
      diseaseSlug: 'cervical-spondylosis',
      isAvailable: true,
    },
    {
      diseaseName: 'Carpal Tunnel Syndrome',
      diseaseHindiName: 'Kalai Ki Nali Ka Syndrome',
      diseaseSlug: 'carpal-tunnel-syndrome',
      isAvailable: true,
    },
    {
      diseaseName: 'Hypothyroidism',
      diseaseHindiName: 'Thyroid Gland Ki Kami',
      diseaseSlug: 'thyroid',
      isAvailable: true,
    },
    {
      diseaseName: 'Sciatica / Lumbar Disc Herniation',
      diseaseHindiName: 'Kamar Ki Slip Disc',
      diseaseSlug: 'sciatica',
      isAvailable: true,
    },
  ],

  faqs: [
    {
      question: 'Numbness aur Tingling kab normal hoti hai aur kab doctor zaroori hai?',
      answer: 'Agar numbness ek position mein zyada der rehne ke baad aayi ho aur position change karte hi 10 minute mein theek ho jaaye — to ye normal hai, doctor ki zarurat nahi.\n\nLekin agar numbness bina kisi obvious reason ke baar baar aaye, 15-20 minute se zyada rahe, dono taraf ek saath ho, ya chehra-haath-pair ek saath sunn ho jaayein — to ye serious ka sign hai. Achanak aane wali one-sided numbness toh TURANT emergency hai — stroke ho sakta hai.\n\nSimple rule: "Position change karne pe gaya — normal. Nahi gaya — doctor."',
    },
    {
      question: 'Numbness aur Tingling kitne din mein theek hoti hai?',
      answer: 'Ye cause pe depend karta hai:\n- Posture se aayi numbness: 5-10 minute mein theek\n- B12 ya vitamin deficiency se: supplements shuru hone ke 4-8 hafte mein improvement shuru hoti hai\n- Carpal tunnel syndrome: treatment ke saath 6-12 hafte\n- Diabetic neuropathy: long-term management zaroori — completely reverse hona mushkil hai, lekin progression rok sakte hain\n- Cervical/lumbar disc se: physiotherapy aur treatment se 6-12 hafte\n\n"Kitne din mein theek hogi" ka honest jawab yahi hai: cause jaane bina timeline nahi pata. Ek hafte se zyada chal rahi ho — doctor se milein.',
    },
    {
      question: 'Numbness aur Tingling ka sabse common karan kya hai?',
      answer: 'India mein teen sabse common causes hain:\n1. Posture ya nerve compression — ek position mein zyada der rehna\n2. Vitamin B12 ki kami — khaas taur pe vegetarians aur elderly mein\n3. Diabetes (diabetic neuropathy) — India mein 7.7 crore+ diabetic patients hain, aur neuropathy unme bahut common complication hai\n\nIske baad cervical spondylosis (desk workers mein), carpal tunnel syndrome (typing/mobile users mein), aur thyroid underactivity bhi common causes hain.\n\nCause ke hisaab se treatment bilkul alag hoti hai — isliye diagnosis pehle zaroori hai.',
    },
    {
      question: 'Haath Paon Sunn Hona — Ghar Pe Kitne Din Reh Sakte Hain?',
      answer: 'Agar numbness clearly posture se hai aur position change karne pe theek ho jaaye — ghar pe theek hai.\n\nAgar: ek hafte se chal rahi hai bina improvement ke, baar baar aa rahi hai, dono taraf ek saath, ya kisi bhi underlying condition (diabetes, thyroid) ka history hai — to aur wait karna sahi nahi. Nerve damage zyada waqt mein reverse hona mushkil ho jaata hai. Is hafte doctor se milein.',
    },
    {
      question: 'Kya Homeopathy Numbness Aur Tingling Mein Kaam Karta Hai?',
      answer: 'Homeopathy numbness-tingling mein kuch khaas kaam karta hai — specially tab jab cause chronic ho ya underlying condition se linked ho.\n\nHomeopathic approach mein sirf numbness ko band karna nahi — aapka specific pattern dekha jaata hai. Numbness kaise hai, kab badhti hai, saath mein aur kya symptoms hain — ye sab combine karke treatment decide hoti hai.\n\nChronic neuropathy ke cases mein — jaise diabetic neuropathy ya post-cervical numbness — homeopathy conventional treatment ke saath complementary role mein saath chal sakti hai. Research limited hai aur results individual hote hain — lekin side-effect free hone ki wajah se ye ek reasonable addition hai.',
    },
    {
      question: 'Numbness Aur Tingling Mein Kaunsa Test Karwana Chahiye?',
      answer: 'Doctor ke hisaab se cause suspect hoga — aur test decide hoga:\n- Blood tests: CBC, Vitamin B12, Vitamin D, Thyroid (TSH), Blood sugar (fasting + HbA1c), Kidney function\n- Nerve conduction study (NCS/EMG): nerve damage aur location check karta hai — carpal tunnel ya neuropathy ke liye\n- MRI ya X-ray (cervical/lumbar): disc ya bone problem check karne ke liye\n- Doppler: agar circulation issue suspect ho\n\nSab tests har case mein nahi hote — doctor examination ke baad decide karta hai. Self-diagnose mat karo.',
    },
    {
      question: 'Raat Ko Haath Sunn Kyon Hota Hai?',
      answer: 'Raat ko haath sunn hona bahut common complaint hai — aur iske teen main reasons hain:\n\n1. Sone ki position: haath ke neeche sir rakhna, ya ek side pe letna jisse haath dabta hai — nerve pe pressure se numbness. Ye sabse common cause hai.\n2. Carpal tunnel syndrome: raat ko naturally wrist ki position flex ho jaati hai — isse carpal tunnel ki nerve zyada dab jaati hai. Yahi wajah hai carpal tunnel mein raat ko symptoms zyada hote hain.\n3. Circulation: lait rehne se haath ka blood flow thoda slow hota hai — already tight nerves wale area mein numbness trigger ho sakti hai.\n\nAgar roz raat ko hota hai aur subah ka kaam affect ho raha hai — doctor se milna zaroori hai.',
    },
    {
      question: 'Pregnancy Mein Haath Sunn Hona Normal Hai Kya?',
      answer: 'Pregnancy mein haath ka sunn hona — khaas taur pe teesre trimester mein — relatively common hai. Iska main reason hai body mein fluid retention badhna, jisse carpal tunnel ki nerve zyada dab jaati hai.\n\nLekin "common" matlab "ignore karo" nahi:\n- Agar sirf haath ki 3-4 ungliyon mein hai — carpal tunnel likely, doctor se batao, generally delivery ke baad theek ho jaata hai\n- Agar chehra, lips, ya ek puri side sunn ho — turant doctor ya hospital\n- Agar numbness ke saath severe headache, vision change, ya swelling bahut zyada — preeclampsia rule out karna zaroori hai\n\nPregnancy mein koi bhi nayi symptom doctor ko batao — self-diagnose nahi.',
    },
    {
      question: 'Kya Sugar (Diabetes) Se Haath Paon Sunn Ho Jaate Hain?',
      answer: 'Haan — diabetes numbness ka India mein sabse bada medical cause hai. Ise "Diabetic Neuropathy" kehte hain.\n\nHigh blood sugar dhire dhire nerve fibers ko damage karta hai — aur ye damage pehle paon ki nerves mein shuru hoti hai. Paon ke talne mein burning, jhunjhunahat, ya bilkul feeling na hona — ye classic signs hain.\n\nKhaas baat: Diabetic neuropathy mein feeling itni kam ho jaati hai ki injury lag jaaye aur pata bhi na chale — isi wajah se diabetic foot ulcer hota hai.\n\nAgar diabetes hai aur paon mein koi bhi numbness hai — apne doctor ko zaroor batao. HbA1c control karna aur regular foot check — ye dono critical hain.',
    },
    {
      question: 'Numbness Aur Tingling Baar Baar Kyun Aati Hai?',
      answer: 'Baar baar aane wali numbness ka matlab hai ki koi underlying cause hai jo resolve nahi ho raha:\n- Posture repeatedly wahi galat — nerve baar baar dab rahi hai\n- B12 ya vitamin deficiency chal rahi hai — nerve function continuously affected hai\n- Diabetes uncontrolled hai — neuropathy progress ho rahi hai\n- Cervical disc ka pressure ongoing hai — nerve continuously irritated hai\n\n"Ye hota hai, thodi der mein theek ho jaata hai" waali soch neuropathy mein dangerous hai. Baar baar aana = progressive nerve damage ka sign. Ek baar properly diagnose karwao — cause dhundho, treat karo.',
    },
    {
      question: 'Kya Numbness Aur Tingling Se Hamesha Ke Liye Chhutkara Mil Sakta Hai?',
      answer: '"Permanent cure" ka vaada koi bhi system honestly nahi kar sakta — aur koi kare to doubt karo.\n\nJo realistic hai:\n- Posture se: position fix karo — numbness wapas nahi aayegi. Ye practically "cured" hai.\n- B12 deficiency se: supplements se 3-6 mahine mein nerve health significantly improve ho sakti hai — agar nerve damage severe nahi hua.\n- Carpal tunnel: early stage mein wrist splinting aur physiotherapy se relief. Advanced mein surgery needed ho sakti hai — jo highly effective hai.\n- Diabetic neuropathy: complete reversal mushkil hai — lekin blood sugar control karo to progression rukti hai.\n- Cervical disc: physiotherapy, posture correction, aur treatment se bahut logon ko lasting relief milti hai.\n\nJo pehle pakad lo, uska treatment itna simple hoga. Delay karne se nerve damage permanent hone ka risk badhta hai.',
    },
    {
      question: 'Kaunsa Doctor Dikhana Chahiye Numbness Aur Tingling Mein?',
      answer: 'Pehla step: General Physician (GP) ya Family Doctor — initial evaluation, basic blood tests, aur referral.\n\nPhir cause ke hisaab se:\n- Neurology: unexplained numbness, multiple areas, recurring episodes\n- Orthopedics ya Spine Specialist: cervical/lumbar disc issue\n- Endocrinologist: diabetes ya thyroid se related neuropathy\n- Hand Surgeon: carpal tunnel syndrome — advanced cases\n\nAgar stroke ke symptoms hain (achanak one-sided numbness + face + speech) — seedha Emergency / 108. Koi doctor dhundhne ka time nahi.',
    },
  ],

  quickFacts: [
    'Numbness & Tingling (Sunn Hona / Jhunjhunahat) — nerve signal problem hai. Posture, B12 kami, ya diabetes sabse common causes hain.',
    'India mein diabetes, B12 deficiency, aur cervical spondylosis — teen sabse common causes hain numbness ke.',
    'Ek hafte se zyada, baar baar aaye, ya achanak one-sided — turant doctor ya emergency.',
  ],

  relatedSymptoms: [
    { title: 'Back Pain (Kamar Dard)', slug: 'back-pain' },
    { title: 'Joint Pain (Jodo Ka Dard)', slug: 'joint-pain' },
    { title: 'Weakness aur Fatigue (Thakaan)', slug: 'weakness-fatigue' },
    { title: 'Headache (Sir Dard)', slug: 'headache' },
  ],

  sources: [
    { title: 'Mayo Clinic — Numbness: Symptoms & Causes (2024)', url: 'https://www.mayoclinic.org/symptoms/numbness/basics/causes/sym-20050938' },
    { title: 'World Health Organization — Global Diabetes Report (2023)', url: 'https://www.who.int/publications/i/item/9789240015128' },
    { title: 'NINDS — Peripheral Neuropathy Fact Sheet (2024)', url: 'https://www.ninds.nih.gov/health-information/disorders/peripheral-neuropathy' },
    { title: 'NHS UK — Pins and Needles (Paraesthesia) (2023)', url: 'https://www.nhs.uk/conditions/pins-and-needles/' },
  ],
}

async function seed() {
  console.log('Seeding numbness-tingling...')
  const result = await client.createOrReplace(symptom)
  console.log('Done:', result._id)
}

seed().catch(console.error)
