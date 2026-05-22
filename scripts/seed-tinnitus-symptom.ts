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
  _id: 'symptom-tinnitus',
  _type: 'symptom',
  title: 'Tinnitus (Kaanon Mein Awaaz)',
  hindiName: 'Kaanon Mein Aawaz / Kaanon Mein Seeti',
  slug: { _type: 'slug', current: 'tinnitus' },
  bodySystem: 'ENT',
  shortDescription: 'Kaan mein ghanti, seeti ya bhunbhunahat jaisi awaaz — jo bahar se nahi, andar se aati hai. Kisi underlying cause ka signal ho sakta hai.',
  metaTitle: 'Tinnitus in Hindi — Karan, Ilaaj aur Homeopathy',
  metaDescription: 'Kaanon mein tinnitus (awaaz/seeti) ke karan, severity aur ghar pe safe steps — simple Hinglish mein. Verified info, doctor-reviewed.',
  reviewDate: 'May 2026',

  heroText: `Kaan mein ek awaaz — ghanti bajne jaisi, seeti jaisi, ya bhunbhunahat jaisi — jo bahar se nahi aa rahi. Sirf aap sun rahe hain. Koi isko band nahi kar sakta, koi headphone se nahi — kyunki ye awaaz kaan ke andar se aa rahi hai. Isko kehte hain tinnitus.

Ye ek symptom hai — koi bimari nahi. Matlab kuch aur chal raha hai body mein, aur kaan us cheez ka signal de raha hai.

India mein tinnitus ek common complaint hai — khaskar un logon mein jo shahar ka shor, earphones ka zyada use, ya work-related noise mein rehte hain. Aap akele nahi hain is mein.

Ye page aapko 2 minute mein batayega: aapka tinnitus serious hai kya, ghar pe kya karna chahiye, aur agli step kya honi chahiye.`,

  severityScale: {
    level1: {
      label: 'Ghar Pe Manage Karo',
      signs: [
        'Awaaz sirf kuch ghante ya ek-do din se hai',
        'Loud concert, headphones, ya noisy area ke baad achanak shuru hua',
        'Sone mein thodi takleef hai lekin din mein koi problem nahi',
        'Koi chakkar, surdard, ya chehra sunna nahi hai',
      ],
    },
    level2: {
      label: 'Is Hafte Doctor Se Milein',
      signs: [
        'Tinnitus ek hafte se zyada se hai aur theek nahi ho raha',
        'Sirf ek kaan mein hai — dono mein nahi',
        'Sone mein lagaatar takleef ho rahi hai, thakaan badh rahi hai',
        'Sunnai dena thoda kam laga hai pehle se',
        'Chakkar bhi aa rahe hain saath mein',
      ],
    },
    level3: {
      label: 'Turant Hospital Jaao',
      signs: [
        'Tinnitus ke saath galti aayi ya chehra ka ek taraf sunna ho gaya',
        'Kaanon mein dhak-dhak (pulsatile) awaaz jo dil ki dhadkan ke saath time pe aati hai',
        'Tinnitus ke saath achanak bahut zyada hearing loss ho gaya',
        'Kaan se koi discharge (paani ya khoon) bhi aa raha hai',
      ],
    },
  },

  timeline: [
    {
      duration: 'Nayi Takleef — 1 se 3 Din',
      advice: 'Inner ear ki hair cells temporary shocked hoti hain — loud sound ya pressure change se. Ye aksar apne aap better ho jaata hai. Pani peete raho, rest karo, headphones bilkul band karo. Agar teen din mein better nahi hua — Level 2 mein aao.',
    },
    {
      duration: 'Chalti Aa Rahi — 1 se 4 Hafte',
      advice: 'Ab ye temporary shock nahi hai — body kuch aur signal de rahi hai. Noise exposure, BP, cervical ya kuch aur underlying cause ho sakta hai. Ek ENT ya homeopathic doctor se milna ab zaruri hai. Iss stage pe sahi treatment se results achhe aate hain.',
    },
    {
      duration: 'Purani Problem — 1 Mahina Ya Zyada',
      advice: 'Chronic tinnitus hai — iska matlab ye nahi ki theek nahi hoga, lekin ab khud se manage karna mushkil ho jaata hai. Root cause diagnose karna zaroori hai. Doctor se milein zaroor. Homeopathy mein chronic tinnitus ke cases mein constitution-based treatment effective rahi hai — results individual hote hain.',
    },
  ],

  lifestyleCauses: [
    {
      title: 'Loud Noise Exposure (Tez Awaaz)',
      recognition: 'Tinnitus achanak start hua — kisi concert ke baad, crackers ke baad, ya DJ party ke baad. Thoda sunnai kam bhi lag sakta hai saath mein.',
      description: 'Kaan ke andar cochlea mein laakhon choti hair cells hoti hain jo sound waves ko brain ke signals mein convert karti hain. Jab bahut tez awaaz aati hai — concert, factory, loud music, crackers — ye cells physically damage ho jaati hain. Damaged cells brain ko galat ya random signals bhejna shuru kar deti hain. Brain un signals ko "awaaz" ki tarah perceive karta hai — isliye seeti ya ghanti sunti hai, jabki bahar koi awaaz nahi.',
    },
    {
      title: 'Earphones/Headphones Ka Zyada Use',
      recognition: 'Subah uthte hi ya earphones utarne ke baad tinnitus feel hota hai. Younger age group mein ye cause zyada common hai.',
      description: 'High volume pe regularly earphones use karne se wahi damage hoti hai jo loud noise se hoti hai — sirf dheere dheere. In-ear earphones zyada risky hain kyunki sound directly ear canal mein jaati hai, dissipate nahi hoti. Roz 1 ghante se zyada high volume pe earphones = chronic hair cell damage ka risk.',
    },
    {
      title: 'Stress aur Sleep Deprivation',
      recognition: 'Tinnitus stressful periods mein zyada hota hai — exams, deadline, personal tension ke waqt. Raat ko zyada feel hota hai.',
      description: 'Chronic stress mein cortisol hormone badhta hai — jo blood vessels ko constrict karta hai, including those supplying the inner ear. Kum blood flow = kum oxygen = nerve signaling mein disturbance = tinnitus. Neend kam hone se nervous system hyperactive rehta hai — chhoti awaazein bhi louder perceive hoti hain.',
    },
    {
      title: 'Kaan Ka Mael (Earwax Blockage)',
      recognition: 'Kaan bhari bhari lagti hai. Awaaz sunne mein thoda dard ya difficulty. Doctor ke paas ek visit se kaafi baar theek ho jaata hai.',
      description: 'Earwax ek natural protective layer hai. Jab ye zyada jam jaata hai — cotton buds se andar dhakela jaaye ya apne aap — to ear canal partially block ho jaata hai. Ye blockage sound transmission ko disturb karta hai aur tinnitus create kar sakta hai. Simple cause hai — aur simple fix bhi.',
    },
  ],

  medicalCauses: [
    {
      diseaseName: "Meniere's Disease",
      diseaseHindiName: 'Inner Ear Ka Disorder',
      diseaseSlug: 'vertigo',
      isAvailable: true,
      description: 'Ek kaan mein low-frequency buzzing ya roaring sound — ghunghanahat jaisi. Aata jaata rehta hai — ek baar mein ghanton tak chal sakta hai. Aksar chakkar (vertigo) ke attacks ke saath aata hai.',
      recognition: "Tinnitus + bhayanak chakkar + ek kaan mein hearing loss — teeno saath aate hain Meniere mein. Sirf tinnitus nahi hota.",
    },
    {
      diseaseName: 'Vertigo / BPPV',
      diseaseHindiName: 'Chakkar Ki Bimari',
      diseaseSlug: 'vertigo',
      isAvailable: true,
      description: 'Inner ear mein calcium crystals (otoliths) displace ho jaate hain. Ye balance nerve ko confuse karta hai — chakkar aata hai aur saath mein tinnitus bhi ho sakta hai.',
      recognition: 'Tinnitus ke saath sar ghumane pe ya baith ke uthne pe chakkar aata hai — kuch seconds mein theek ho jaata hai. Position-related hai.',
    },
    {
      diseaseName: 'Hypertension (High Blood Pressure)',
      diseaseHindiName: 'Uccha Rakt Chap / BP Badhna',
      diseaseSlug: '',
      isAvailable: false,
      description: 'Pulsatile tinnitus — dhadkan ke rhythm mein dhak-dhak type awaaz. Kyunki high BP mein blood vessels mein turbulent flow hota hai — inner ear ke vessels bhi sense karte hain ye disturbance.',
      recognition: 'Tinnitus ki awaaz aapki heartbeat ke saath match karti hai. Sar bhaari rehta hai, aankhen laal hoti hain kabhi kabhi.',
    },
    {
      diseaseName: 'Cervical Spondylosis',
      diseaseHindiName: 'Gardan Ki Haddi Ka Ghisna',
      diseaseSlug: 'cervical-spondylosis',
      isAvailable: true,
      description: 'Cervical spine ki nerves inner ear ko supply karne wale blood vessels ko affect karti hain. Aur cervical tension directly auditory nerve pe pressure bana sakti hai. Tinnitus plus gardan mein akdahat aur sar dard saath aata hai.',
      recognition: 'Tinnitus gardan mujne par ya subah uthne ke baad zyada hota hai. Gardan ka X-ray ya history clearly batata hai.',
    },
    {
      diseaseName: 'Otitis Media',
      diseaseHindiName: 'Kaan Ki Sujan / Kaan Mein Infection',
      diseaseSlug: '',
      isAvailable: false,
      description: 'Middle ear mein infection ya fluid jam jaata hai — ye eardrum aur ossicles ke normal vibration ko block karta hai. Tinnitus ke saath kaan mein dard, bhaari pan, ya fluid ka ehsaas hota hai.',
      recognition: 'Tinnitus ke saath kaan mein dard hai ya discharge hai — to infection ka angle explore karo. Bacchon mein ye sabse common cause hai.',
    },
  ],

  redFlags: [
    "Acoustic Neuroma — agar sirf ek kaan mein tinnitus hai jo badhta ja raha hai, saath mein hearing bhi kam ho rahi hai — turant ENT specialist se milein. Ye rare hai lekin serious hai.",
    'Vascular Disorders — agar tinnitus heartbeat ke saath sync karta hai (pulsatile tinnitus) to blood vessel ki problem possible hai — turant evaluation zaruri hai.',
    'TMJ Disorder (Jaw Joint Problem) — jaw joint (ear ke bilkul paas hoti hai) ki problem se tinnitus ho sakta hai. Khaate waqt jaw click kare ya dard ho to dentist/ENT se milein.',
  ],

  homeSteps: [
    {
      step: 'Sound Masking — Khamoshi Ko Todna',
      reason: 'Tinnitus quiet environment mein louder lagta hai — kyunki brain ke paas aur koi sound process karne ke liye nahi hoti. Soft background sound — fan, white noise, ya soft music — brain ka attention tinnitus se hata deti hai.',
    },
    {
      step: 'Earphones Aur Loud Noise Se Poori Tarah Aaram',
      reason: 'Agar inner ear already irritated hai, aur zyada loud input mile — damage aur badh sakta hai. Kuch din ke liye earphones bilkul band karo. Loud events pe earplugs use karo.',
    },
    {
      step: 'Gardan Aur Jaw Ki Gentle Stretching',
      reason: 'Cervical tension aur jaw tension tinnitus ko worsen karti hai. Subah gentle neck rotations — dheere dheere, koi jerky movement nahi — aur jaw relaxation exercises tension release karti hain jo auditory pathways pe pressure banati hai.',
    },
    {
      step: 'Neend Ka Time Fix Karo',
      reason: 'Neend ki kami mein nervous system hyperactive rehta hai — tinnitus perception badhti hai. Ek fixed sleep schedule — uthne ka waqt fix karo pehle — nervous system calm karta hai aur tinnitus ki intensity perception mein fark aata hai.',
    },
    {
      step: 'Slow, Deep Breathing — 5 Minute Roz',
      reason: 'Tinnitus ka stress se direct loop hai — stress tinnitus badhata hai, tinnitus stress badhata hai. Diaphragmatic breathing (pet se saans lena) parasympathetic nervous system activate karta hai — stress hormones kam hote hain, blood vessels relaxed hote hain, inner ear ka blood flow better hota hai.',
    },
  ],

  homeopathyAngle1: "Tinnitus ka naam ek hai — lekin har insaan mein awaaz alag hoti hai. Kisi ko seeti jaisi, kisi ko ghanti jaisi, kisi ko bhunbhunahat jaisi. Kisi ko raat ko zyada, kisi ko stress mein. Homeopathy mein sirf 'kaan mein awaaz' nahi dekha jaata — aapki awaaz kaisi hai, kab badhti hai, kya se zyada hoti hai aur kya se better — ye sab treatment decide karta hai. Isi liye do logon ko same symptom mein bilkul alag treatment ho sakti hai.",

  homeopathyAngle2: 'Tinnitus jo baar baar aa jaata hai — ya jo mahino se chal raha hai — aksar kisi deeper imbalance ka signal hai. Koi baar baar BP badh raha hai, koi cervical mein tension hai, koi chronic stress mein hai. Homeopathy mein sirf tinnitus band karna goal nahi — jo cheez isko baar baar la rahi hai usse address kiya jaata hai. Research limited hai is area mein aur results individual hote hain — lekin frequency aur intensity mein fark aana realistic expectation hai.',

  homeopathyAngle3: 'Highly diluted medicines hone ki wajah se homeopathy practically side-effect free hai — isliye ye elderly patients mein, aur un logon mein bhi safely use ho sakti hai jinke kaafi doosri medicines chal rahi hain. Ek important baat: severe ya sudden hearing loss, ya pulsatile tinnitus mein pehle conventional emergency evaluation lein — homeopathy complementary role mein kaam karti hai, replacement nahi.',

  homeopathyIsFor: [
    'Aap tinnitus ke root cause ko address karna chahte hain — sirf temporarily daba nahi',
    "Aapka tinnitus months se hai aur conventional treatment mein sirf masking devices ya 'wait and watch' mila hai",
    'Aap side-effect free complementary approach prefer karte hain',
  ],

  homeopathyNotFor: [
    'Aapko sudden hearing loss hua hai ya pulsatile tinnitus hai — pehle turant conventional ENT evaluation lein',
    'Tinnitus kisi active infection (kaan ka dard + discharge) ke saath hai — antibiotic treatment pehle zaroori ho sakti hai',
  ],

  homeopathyDiseaseLinks: [
    { diseaseName: "Vertigo & Meniere's Disease", diseaseSlug: 'vertigo', diseaseHindiName: 'Chakkar Ki Bimari' },
    { diseaseName: 'Cervical Spondylosis', diseaseSlug: 'cervical-spondylosis', diseaseHindiName: 'Gardan Ki Haddi Ka Ghisna' },
  ],

  linkedDiseaseCards: [
    {
      diseaseName: "Meniere's Disease",
      diseaseHindiName: 'Inner Ear Ka Disorder',
      diseaseSlug: 'vertigo',
      isAvailable: true,
    },
    {
      diseaseName: 'Vertigo / BPPV',
      diseaseHindiName: 'Chakkar Ki Bimari',
      diseaseSlug: 'vertigo',
      isAvailable: true,
    },
    {
      diseaseName: 'Hypertension',
      diseaseHindiName: 'Uccha Rakt Chap / BP Badhna',
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
      diseaseName: 'Otitis Media',
      diseaseHindiName: 'Kaan Ka Infection',
      diseaseSlug: '',
      isAvailable: false,
    },
  ],

  faqs: [
    {
      question: 'Tinnitus ka sabse common karan kya hai?',
      answer: 'Tinnitus ka sabse common karan hai loud noise exposure — ya to ek baar ki bahut tez awaaz (concert, crackers, factory) ya regular high-volume earphones ka use. Ye inner ear ki hair cells ko damage karta hai jo brain ko galat signals bhejna shuru kar deti hain — aur brain unhe "awaaz" ki tarah sunta hai.\n\nIske alawa common causes hain: earwax blockage, high blood pressure, stress aur neend ki kami, cervical spine ki problem, aur kaan ka infection.\n\nAgar tinnitus ke saath sunnai bhi kam hua ho ya chakkar bhi aa rahe hon — to sirf noise damage se zyada kuch aur explore karna chahiye. Doctor se milna zaroori hai aise case mein.',
    },
    {
      question: 'Tinnitus kab normal hota hai aur kab doctor zaroori hai?',
      answer: 'Tinnitus "normal" hai — yaani khud theek ho jaata hai — jab: concert ya crackers ke baad kuch ghante ke liye aaya ho, ya sardi ya kaan ke infection ke saath temporarily aaya ho aur infection theek hone ke baad chala gaya ho.\n\nDoctor zaroori hai jab: ek hafte se zyada se chal raha ho, sirf ek kaan mein ho, sunnai bhi kam lag raha ho, chakkar bhi saath mein ho, ya dhak-dhak type awaaz aaye jo heartbeat ke saath sync kare.\n\nEmergency hai jab: achanak ek kaan mein sunai dena bilkul band ho jaaye — ye medical emergency hai.',
    },
    {
      question: 'Tinnitus kitne din tak rehta hai?',
      answer: 'Ye cause pe depend karta hai. Loud noise ke baad aaya tinnitus 24-48 ghante mein aksar kam ho jaata hai. Agar 3 din mein nahi hua, to self-resolve hone ki probability kam hoti jaati hai.\n\nEk hafte se zyada ka tinnitus aksar kisi underlying cause se hai — tab treatment chahiye, wait nahi. Chronic tinnitus (3 mahine se zyada) mein complete cure ka promise koi honestly nahi de sakta — lekin sahi treatment se intensity aur frequency mein significant improvement realistic hai.',
    },
    {
      question: 'Raat ko tinnitus kyun zyada badhta hai?',
      answer: 'Raat ko tinnitus is liye louder lagta hai kyunki background noise bilkul khatam ho jaati hai. Din mein traffic, fan, logon ki awaaz — ye sab natural maskers hain. Raat ko quiet mein brain ke paas koi aur sound process karne ki nahi hoti — puri attention tinnitus pe jaati hai.\n\nIske alawa raat ko blood pressure slightly shift karta hai aur stress hormones ka pattern bhi badalta hai — jo tinnitus perception ko affect karta hai.\n\nPractical tip: Soft fan sound ya white noise raat ko background pe rakhein — sirf itna ki silence na rahe. Isse brain ka attention divide hota hai aur tinnitus less prominent lagta hai.',
    },
    {
      question: 'Kya tinnitus permanent ho sakta hai?',
      answer: 'Haan — kuch cases mein tinnitus permanent ho sakta hai, especially jab inner ear ki hair cells permanently damage ho gayi hon. Lekin "permanent" ka matlab ye nahi ki hamesha equally loud aur disturbing rahega.\n\nJo realistic hai: naya tinnitus (kuch hafton ka) — cause treat karne pe aksar improve hota hai. Chronic tinnitus — complete cure ka vaada koi bhi system honestly nahi de sakta. Jo realistic improvement hai: intensity kam hona, brain ka tinnitus ko ignore karna seekhna (habituation), aur quality of life significantly better hona.\n\nKoi bhi "permanent cure guaranteed" kare to doubt karo. Sahi treatment se life practically normal ho sakti hai — chahe awaaz poori tarah band na ho.',
    },
    {
      question: 'Kya homeopathy tinnitus mein kaam karta hai?',
      answer: 'Homeopathy tinnitus ke kuch causes mein madadgar rahi hai — especially jab: stress-related tinnitus ho, cervical connection ho, chronic repeated tinnitus ho jisme root cause constitutional hai.\n\nHomeopathy ka fayda ye hai ki ye sirf tinnitus ki awaaz band karne ki koshish nahi karta — underlying imbalance ko address karta hai. Is liye ek detailed case history lena zaroori hota hai — aapka tinnitus kaisa hai, kab hota hai, saath kya aata hai — sab matter karta hai.\n\nImportant: Tinnitus ka cause diagnose hona pehle zaroori hai. ENT evaluation ke baad ya saath mein homeopathic treatment lena ideal approach hai.',
    },
    {
      question: 'Tinnitus mein kaunsa test karwana chahiye?',
      answer: 'Tinnitus ke liye ye tests doctor usually suggest karte hain:\n- Pure Tone Audiometry (PTA): sunnai ki taaqat measure karta hai — sabse pehla test hona chahiye\n- Tympanometry: middle ear ka pressure aur eardrum ka function check karta hai\n- Blood Pressure Check: pulsatile tinnitus mein hamesha BP check hona chahiye\n- Cervical X-Ray ya MRI: agar gardan dard ya stiffness saath ho\n- MRI Brain/Internal Auditory Canal: agar sirf ek kaan mein tinnitus hai — acoustic neuroma rule out karna zaroori hai\n- Blood Tests: thyroid, anaemia, sugar — ye sab tinnitus cause ban sakti hain\n\nKaun sa test aapke liye zaroori hai — ye doctor decide karenge case history ke baad.',
    },
    {
      question: 'Kya tinnitus se hearing loss ho sakta hai?',
      answer: 'Tinnitus khud hearing loss nahi karta — lekin dono aksar ek hi cause se hote hain. Jab inner ear ki hair cells damage hoti hain (loud noise se, age se, ya bimari se) — to tinnitus aur hearing loss dono saath aate hain.\n\nEk important baat: agar tinnitus ke saath hearing bilkul achanak kam ho jaaye — ye "sudden sensorineural hearing loss" hai. Ye medical emergency hai — 24-48 ghante ke andar ENT se milna zaroori hai. Is window mein treatment zyada effective hoti hai.',
    },
    {
      question: 'Tinnitus baar baar kyun aata hai?',
      answer: 'Baar baar aane wala tinnitus aksar is liye hota hai kyunki underlying cause treat nahi ki gayi — sirf symptom temporarily better hua. Common patterns:\n- High stress ka lifestyle — tinnitus aata jaata rehta hai stress episodes ke saath\n- Cervical spondylosis — gardan ki chronic problem repeatedly tinnitus trigger karta hai\n- BP control nahi hua properly — BP spikes pe tinnitus flare hota hai\n- Earphones ka use band nahi hua — damage continuously ho rahi hai\n\nBaar baar aane ka matlab hai — pattern todna zaroori hai, sirf ek episode treat karna enough nahi.',
    },
    {
      question: 'Stress se tinnitus hota hai kya?',
      answer: 'Haan — stress tinnitus ka ek well-known trigger hai. Stress mein body "fight or flight" mode mein jaati hai — cortisol aur adrenaline release hote hain. Ye hormones blood vessels ko constrict karte hain — inner ear ka blood supply affect hota hai. Nervous system bhi hyperactive ho jaata hai — external sounds ko zyada amplify karta hai.\n\nStress-tinnitus ek loop mein kaam karta hai: stress tinnitus badhata hai — tinnitus stress badhata hai. Is loop ko todne ke liye sirf tinnitus treatment enough nahi — stress management bhi saath mein kaam karna hoga. Regular relaxation practice — breathing, sleep hygiene — tinnitus management ka important part hai.',
    },
    {
      question: 'Bachon mein tinnitus kyun hota hai?',
      answer: 'Bachon mein tinnitus ka sabse common cause hai kaan ka infection (otitis media). Bacche aksar clearly nahi bata paate — "kaan mein awaaz aa rahi hai" ki jagah wo ear pull karte hain, irritable rehte hain, ya sunnai mein problem dikhate hain.\n\nDoosre causes bachon mein: earwax blockage, loud headphones ya gaming ke through noise exposure, adenoid ya tonsil problem (indirect).\n\nEk important baat: agar baccha school mein concentrate nahi kar pa raha, ya sunnai mein problem lag rahi hai — tinnitus bhi ek possibility hai. ENT se zaroor check karwao. Bachon mein early diagnosis important hai kyunki hearing loss is age mein language development pe bhi affect kar sakta hai.',
    },
    {
      question: 'Tinnitus mein gardan ka exercise karna chahiye kya?',
      answer: 'Haan — agar tinnitus mein cervical connection hai (jo bahut common hai) to gentle gardan ki exercise helpful ho sakti hai. Lekin kuch rules hain:\n\nSafe hai: slow, gentle neck rotations (dheere circle mein), side-to-side neck stretches (kaan ko shoulder ki taraf), subah uthne se pehle bed pe hi kuch gentle movements.\n\nAvoid karo: koi bhi jerky ya fast movements, sar ko peechhe bilkul dabaana, neck cracking karne ki koshish.\n\nAgar gardan mein dard ya tinnitus suddenly worsen ho exercise ke dauran — immediately rok do aur doctor se poochho. Physiotherapy ya yoga-based neck exercises ek trained person ke under seekhna best hai.',
    },
  ],

  quickFacts: [
    'Tinnitus ek sound hai jo bahar se nahi aati — kaan ya auditory nerve se generate hoti hai.',
    'WHO ke anusar globally approximately 14% adults experience tinnitus — India mein urban noise pollution ek major contributing factor hai.',
    'Sirf ek kaan mein tinnitus, ya heartbeat ke saath sync karne wali awaaz — turant ENT evaluation zaroori hai.',
  ],

  relatedSymptoms: [
    { title: 'Headache (Sir Dard)', slug: 'headache' },
    { title: 'Neck Pain (Gardan Dard)', slug: 'neck-pain' },
    { title: 'Anxiety Symptoms (Ghabrahaat)', slug: 'anxiety-symptoms' },
    { title: 'Weakness aur Fatigue', slug: 'weakness-fatigue' },
  ],

  sources: [
    { title: 'World Health Organization — Deafness and hearing loss (2023)', url: 'https://www.who.int/news-room/fact-sheets/detail/deafness-and-hearing-loss' },
    { title: 'Mayo Clinic — Tinnitus: Symptoms & Causes (2024)', url: 'https://www.mayoclinic.org/diseases-conditions/tinnitus/symptoms-causes/syc-20350156' },
    { title: 'NCBI / National Library of Medicine — Tinnitus: Pathophysiology and Treatment', url: 'https://www.ncbi.nlm.nih.gov/books/NBK430809/' },
    { title: 'NHS UK — Tinnitus: Overview (2023)', url: 'https://www.nhs.uk/conditions/tinnitus/' },
  ],
}

async function seed() {
  console.log('Seeding tinnitus...')
  const result = await client.createOrReplace(symptom)
  console.log('Done:', result._id)
}

seed().catch(console.error)
