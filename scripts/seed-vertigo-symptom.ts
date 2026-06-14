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
  _id: 'symptom-vertigo',
  _type: 'symptom',
  title: 'Vertigo (Chakkar Aana)',
  hindiName: 'Chakkar Aana / Sar Ghumna',
  slug: { _type: 'slug', current: 'vertigo' },
  bodySystem: 'Neurological',
  shortDescription: 'Duniya ghumti hui lagti hai — position change karne pe khataak se chakkar aana. India mein BPPV aur cervical-related vertigo sabse common causes hain.',
  metaTitle: 'Chakkar Aana (Vertigo) — Karan, Lakshan aur Ilaaj | Homeopedia',
  metaDescription: 'Chakkar kyun aata hai? BPPV, inner ear ya BP — vertigo ke karan, lakshan aur homeopathic upay Hindi mein. Homeopedia pe padho.',
  reviewDate: 'May 2026',

  heroText: `Achanak sar ghoomne lagta hai — jaise zameen khisak rahi ho ya kamra ghoom raha ho. Uthne ki koshish karo to lagta hai kahin gir na jaao. Raat ko pehlu badlo to sar mein ek jhatka sa aata hai. Ye vertigo hai — aur ye sirf "dizziness" nahi hai.

Vertigo mein duniya aapko ghumti hui lagti hai — jabki aap bilkul khade ya baithe hain. Ye ek sensation hai jo inner ear ya brain ka signal hota hai. India mein ye ek bahut common complaint hai — specially 40+ ke log aur women is symptom se zyada affected hote hain.

Ye page aapko batayega: aapka chakkar normal hai ya doctor zaroori hai, kab tak ghar pe reh sakte hain, aur next step kya hona chahiye.`,

  severityScale: {
    level1: {
      label: 'Ghar Pe Manage Karo',
      signs: [
        'Chakkar sirf position change karne pe aata hai — letne se uthne pe, ya pehlu badalne pe',
        'Kuch seconds mein khud theek ho jaata hai',
        'Koi nausea ya ulti nahi',
        'Pehle bhi aisa hua hai aur doctor ne check kiya tha',
        'Chakkar ka episode ek baar aaya aur ruk gaya',
      ],
    },
    level2: {
      label: 'Is Hafte Doctor Se Milein',
      signs: [
        'Chakkar baar baar aa raha hai — din mein 2-3 baar ya zyada',
        'Chakkar ke saath ulti ya jee machalna bhi hai',
        'Chakkar zyada der tak rehta hai — 5-10 minute ya usse zyada',
        'Sunaai kam aa raha hai ya kaan mein awaaz aa rahi hai',
        'Gale mein dard, sar ka dard saath mein hai',
      ],
    },
    level3: {
      label: 'Turant Hospital Jaao',
      signs: [
        'Chakkar ke saath ek taraf ka haath ya paon kamzor ho gaya ho',
        'Bolne mein takleef aa rahi ho ya baat ulajh rahi ho',
        'Aankhon ke saamne andhera chhane laga ho ya nazar dhundhli ho gayi ho',
        'Sar mein achanak bahut tez dard aaya ho aur saath chakkar bhi ho',
        'Behoshi jaisi halat ho rahi ho',
      ],
    },
  },

  timeline: [
    {
      duration: 'Nayi Takleef — 1 se 3 Din',
      advice: 'Agar pehli baar aaya hai to aksar viral infection ya inner ear mein sudden disturbance hoti hai. Zyada activities avoid karo, suddenly mat utho. Agar teen din mein better nahi hua ya symptoms worsen ho rahe hain to doctor se milein — BPPV ya viral cause dono mein early evaluation helpful hoti hai.',
    },
    {
      duration: 'Chalti Aa Rahi — 1 se 4 Hafte',
      advice: 'Ek hafte se zyada ka chakkar signal deta hai ki cause clear karna zaroori hai. BPPV (most common type) ho sakta hai — jo treatable hai physical maneuver se. Ab doctor ki visit necessary hai — diagnosis ke bina ghar pe manage karna sahi nahi. Is hafte appointment lo.',
    },
    {
      duration: 'Purani Problem — 1 Mahina Ya Zyada',
      advice: 'Agar chakkar recurring hai ya ek mahine se zyada se hai — ye chronic condition ka sign hai. Meniere\'s disease, cervical issue, ya koi underlying cause ho sakta hai jo properly address karna zaroori hai. Doctor se detailed evaluation aur constitutional treatment dono sath chalana beneficial ho sakta hai.',
    },
  ],

  lifestyleCauses: [
    {
      title: 'Dehydration aur Low Blood Pressure',
      recognition: 'Chakkar sirf tab aata hai jab achanak uthte hain — baith ke ya letke se? Thodi der mein khud se theek ho jaata hai? Ye dehydration ya orthostatic hypotension ka classic pattern hai.',
      description: 'Jab body mein fluid kam ho jaata hai — ya achanak khade hone pe blood pressure momentarily drop karta hai — brain ko blood supply thodi der ke liye kam milti hai. Is momentary drop ki wajah se inner ear aur brain ke balance centers galat signal receive karte hain, jisse spinning sensation hoti hai. Garm mausam mein, fast rakhne ke baad, ya zyada garmi mein kaam karne ke baad ye zyada hota hai.',
    },
    {
      title: 'Screen Time aur Aankhon Ka Overuse',
      recognition: 'Chakkar screen use ke baad ya long drive ke baad aata hai? Band aankhon se ya rest karne pe better ho jaata hai? Ye visual vertigo ya screen-induced imbalance ka sign hai.',
      description: 'Lambe samay tak screen pe concentrate karne se aankhon ki muscles tense ho jaati hain. Brain aankhon aur inner ear dono se balance information leta hai. Jab ye dono signals mismatch karte hain — jaise screen ghoomti hai lekin body stable hai — brain confuse hota hai. Ye "visual vertigo" ya motion sickness jaisi feeling deta hai.',
    },
    {
      title: 'Neend Ki Kami aur Stress',
      recognition: 'Chakkar zyada tab hota hai jab neend kharab rahi ho ya mentally bahut thaka hua mehsoos karo? Weekends pe ya rest ke baad thoda better hota hai? Ye stress-induced vestibular sensitivity ka pattern hai.',
      description: 'Neend mein brain aur inner ear apne signals recalibrate karte hain. Chronic sleep deprivation is process ko disturb karta hai. Saath hi stress hormones — specially cortisol — inner ear ke fluid pressure ko temporarily affect karte hain, jisse imbalance feel hoti hai.',
    },
    {
      title: 'Cervical Problem (Gardan Ki Takleef)',
      recognition: 'Chakkar ke saath gardan mein dard ya stiffness hoti hai? Sar ko ek specific direction mein ghumaane pe chakkar badhta hai? Ye cervicogenic vertigo ka pattern hai.',
      description: 'Cervical spine (gardan ki haddiyaan) mein jab nerves ya blood vessels compress hoti hain — to brain ko balance ke liye zaroori signals properly nahi milte. Cervical spondylosis ya muscle spasm mein ye kaafi common hai. IT aur office workers mein hours phone dekhna ya laptop pe jhuke rehna isko trigger karta hai.',
    },
  ],

  medicalCauses: [
    {
      diseaseName: 'BPPV — Benign Paroxysmal Positional Vertigo',
      diseaseHindiName: 'Sthiti Se Hone Wala Chakkar',
      diseaseSlug: '',
      isAvailable: false,
      description: 'Ye vertigo ka sabse common cause hai. Inner ear mein chhote crystal (otoliths) apni jagah se hil jaate hain aur wrong fluid canal mein aa jaate hain. Position change karne pe — khataak se chakkar aana. Subah uthte waqt, pehlu badalne pe, ya sar jhukane pe ye zyada hota hai. Episode sirf kuch seconds se minute ka hota hai lekin bahut intense hota hai.',
      recognition: 'Chakkar strictly position-dependent hai. Lying still rehne pe bilkul nahi hota.',
    },
    {
      diseaseName: 'Cervical Spondylosis',
      diseaseHindiName: 'Gardan Ki Haddi Ka Ghasna',
      diseaseSlug: '',
      isAvailable: false,
      description: 'Cervical vertebrae ke beech ki disc jab wear ho jaati hai to nerves aur blood vessels pe pressure padta hai. Vertebral arteries — jo brain ko blood supply karti hain — affect hoti hain. Isse "cervicogenic vertigo" aata hai jo neck movement pe worse hota hai.',
      recognition: 'Chakkar ke saath gardan mein stiffness, kaandhon mein dard, ya haath mein numbness bhi ho sakti hai.',
    },
    {
      diseaseName: 'Meniere\'s Disease',
      diseaseHindiName: 'Kaan Ka Pressure Disorder',
      diseaseSlug: '',
      isAvailable: false,
      description: 'Inner ear ke fluid (endolymph) ka pressure abnormal ho jaata hai. Isse intense vertigo attacks aate hain jo ghanton tak chal sakte hain — saath mein ek kaan mein sunai kam aana aur "fullness" ka feeling bhi hota hai.',
      recognition: 'Vertigo ke saath kaan mein pressure ya bhaari pan, tinnitus (kaan mein seeti jaisi awaaz), aur hearing loss.',
    },
    {
      diseaseName: 'Vestibular Neuritis / Labyrinthitis',
      diseaseHindiName: 'Kaan Ki Andar Ki Sujan',
      diseaseSlug: '',
      isAvailable: false,
      description: 'Inner ear ya vestibular nerve mein viral infection se sujan aati hai. Isse achanak ek din mein intense vertigo shuru ho jaata hai jo din bhar rehta hai. Walk karna mushkil ho jaata hai, ulti hoti hai. Aksar sardi-zukhaam ke baad aata hai.',
      recognition: 'Vertigo bohot sudden aur severe hota hai — saath mein hearing normally theek rehti hai.',
    },
    {
      diseaseName: 'Vestibular Migraine',
      diseaseHindiName: 'Migren Se Aane Wala Chakkar',
      diseaseSlug: '',
      isAvailable: false,
      description: 'Kuch migraine patients mein sar dard ke saath ya usse pehle vertigo aata hai — isko "vestibular migraine" kehte hain. Brain ke wo areas jo pain aur balance dono control karte hain — unhe migren attack affect karta hai. Light sensitivity aur sound sensitivity bhi saath hoti hai.',
      recognition: 'Vertigo migraine history wale mein aata hai — ya sar dard ke kuch ghante pehle ya baad mein.',
    },
  ],

  redFlags: [
    'Stroke ya TIA — agar vertigo ke saath ek taraf kamzori, bolne mein takleef, ya nazar dhundhli ho to turant emergency mein jaao. Ye stroke ka sign ho sakta hai.',
    'Brain Tumor ya Central Nervous System Issue — agar vertigo constant hai (position se independent), dheere dheere badh raha hai, aur neurological symptoms saath hain to MRI zaruri hai.',
    'Severe Inner Ear Infection — agar vertigo ke saath kaan mein tez dard, fever, ya discharge ho to ENT immediately. Untreated inner ear infection permanent hearing damage kar sakti hai.',
  ],

  homeSteps: [
    {
      step: 'Achanak Mat Utho — "Slow Position Change" Karo',
      reason: 'Vertigo ke majority cases mein position change pe brain ko balance signals adjust karne mein waqt lagta hai. Dheere se pehle baith jaao, kuch second ruko, phir utho — is simple step se 60-70% episodes ki intensity kam ho jaati hai.',
    },
    {
      step: 'Ek Fixed Point Pe Nazar Tiko — "Fixation Point Technique"',
      reason: 'Brain balance ke liye aankhon ka bhi use karta hai. Ek stable object pe nazar fix karne se visual system brain ko signal deta hai ki duniya actually nahi ghoom rahi — spinning sensation reduce hoti hai.',
    },
    {
      step: 'Paas Mein Baithkar Sar Ko Haath Se Support Do',
      reason: 'Sar ki movement restrict karne se inner ear mein misplaced signals kam signal generate karte hain. Couch ki back pe ya wall pe sar tikaa ke baith jaana episode ko shorter bana sakta hai.',
    },
    {
      step: 'Paani Piyo — Hydration Check Karo',
      reason: 'Dehydration blood pressure drop karta hai jo vertigo ko worse banata hai. Room temperature ka paani dheere dheere piyo. Agar ulti ho rahi hai to chhote ghoomt mein ORS ya plain water lein.',
    },
    {
      step: 'Episode Ke Baad Driving Aur Height Pe Kaam Avoid Karo',
      reason: 'Driving, height pe kaam, ya sharp tools use karna vertigo episode ke dauran ya baad mein dangerous hai. Jab tak balance stable na ho, rest karo — ye practical safety step hai.',
    },
  ],

  homeopathyAngle1: 'Vertigo ek naam hai — lekin experience har insaan ka alag hota hai. Kisi ka chakkar sirf subah uthne pe aata hai, kisi ka ghoomne pe, kisi ka kahin bhi. Kisi ke saath ulti hoti hai, kisi ko sirf unsteadiness hoti hai. Kisi ka chakkar garam mausam mein badhta hai, kisi ka stress mein. Homeopathy mein sirf "chakkar" treat nahi kiya jaata — aapka chakkar kab, kaise, kis situation mein aur kya se better ya worse hota hai — ye sab assess karke treatment decide hota hai.',

  homeopathyAngle2: 'Baar baar aane wala vertigo aksar sirf inner ear ka problem nahi hota — cervical tension, digestive issue, stress response, ya underlying systemic imbalance — ye sab vertigo ko trigger ya maintain kar sakte hain. Homeopathy mein sirf episode ko rokna goal nahi hota — jo cheez isko baar baar trigger kar rahi hai usse address kiya jaata hai. Waqt ke saath episodes ki frequency aur severity dono kam hoti hain. Research is area mein limited hai aur results individual hote hain.',

  homeopathyAngle3: 'Highly diluted medicines hone ki wajah se homeopathy practically side-effect free hai — isliye elderly patients mein, jahan multiple medicines chal rahi hoti hain, ye ek safe complementary option hai. Vertigo elderly mein falls ka risk badhata hai — is angle se safe supportive treatment important ho jaata hai. Severe episodes mein pehle emergency conventional treatment zaruri hai — homeopathy complementary role mein hai.',

  homeopathyIsFor: [
    'Aapka vertigo recurring hai — baar baar aata hai aur conventional treatment sirf temporary relief de rahi hai',
    'Aap root cause address karna chahte hain — na ki sirf episode management',
    'Aap elderly hain ya multiple medicines chal rahi hain aur side-effect free option chahiye',
    'Aapka vertigo cervical ya stress-related hai — jahan constitutional treatment zyada relevant hoti hai',
  ],

  homeopathyNotFor: [
    'Abhi severe episode chal raha hai — pehle stable ho jaao, emergency mein conventional treatment lein',
    'Stroke ya TIA ke signs hain — seedha hospital',
    'Aapko recent diagnosis leni hai — diagnosis pehle, treatment baad mein',
  ],

  homeopathyDiseaseLinks: [],

  linkedDiseaseCards: [
    {
      diseaseName: 'BPPV',
      diseaseHindiName: 'Sthiti Se Hone Wala Chakkar',
      diseaseSlug: '',
      isAvailable: false,
    },
    {
      diseaseName: 'Cervical Spondylosis',
      diseaseHindiName: 'Gardan Ki Haddi Ka Ghasna',
      diseaseSlug: '',
      isAvailable: false,
    },
    {
      diseaseName: 'Meniere\'s Disease',
      diseaseHindiName: 'Kaan Ka Pressure Disorder',
      diseaseSlug: '',
      isAvailable: false,
    },
    {
      diseaseName: 'Vestibular Neuritis',
      diseaseHindiName: 'Kaan Ki Andar Ki Sujan',
      diseaseSlug: '',
      isAvailable: false,
    },
    {
      diseaseName: 'Vestibular Migraine',
      diseaseHindiName: 'Migren Se Aane Wala Chakkar',
      diseaseSlug: '',
      isAvailable: false,
    },
  ],

  faqs: [
    {
      question: 'Vertigo aur normal dizziness mein kya fark hai?',
      answer: 'Vertigo mein duniya ghumti hui lagti hai — ye sirf halka sa chakkar nahi, spinning ya tilting sensation hai. Normal dizziness mein aap "lightheaded" feel karte ho — jaise blood pressure drop hua ho ya uthne se maathe mein ghum aaya ho.\n\nVertigo zyada intense hota hai, aur aksar position change se trigger hota hai. Agar sirf lightheadedness hai jo kuch second mein theek ho — kaafi common hai. Agar duniya genuinely ghoomti nazar aaye, saath ulti ho, ya chalte waqt balance bigde — to ye vertigo ke signs hain aur doctor se milna zaroori hai.',
    },
    {
      question: 'Vertigo kitne din mein theek hota hai?',
      answer: 'Ye cause pe depend karta hai. BPPV (sabse common type) mein ek episode kuch seconds se minute ka hota hai — aur proper Epley maneuver se kuch sessions mein kaafi better ho sakta hai.\n\nViral vestibular neuritis mein intense phase 1-3 din ka hota hai, complete recovery mein kuch hafte lagte hain. Cervical ya stress-related vertigo mein jab tak underlying cause address nahi hoga, tab tak episodes aate rehte hain.\n\nEk mahine se zyada ka recurring vertigo self-resolving nahi hota — is case mein detailed evaluation zaruri hai.',
    },
    {
      question: 'Vertigo ka sabse common karan kya hai?',
      answer: 'India mein vertigo ka sabse common cause BPPV hai — Benign Paroxysmal Positional Vertigo. Ismein inner ear ke chhote crystals apni jagah se hil jaate hain aur balance signals disturb karte hain. Ye kisi bhi age mein ho sakta hai lekin 50+ mein zyada common hai.\n\nDoosra common cause cervical spondylosis hai — especially jo patients desk job pe ghante baithe rehte hain ya neck stiffness ki complaint hai.\n\nTeesra common cause stress aur neend ki kami hai — ye vestibular system ko sensitize kar deta hai. In teen causes mein se ek hona kaafi common hai — diagnosis se pehle ghabrana zaruri nahi.',
    },
    {
      question: 'Subah uthne pe chakkar kyun aata hai?',
      answer: 'Subah ka chakkar aksar BPPV ka sign hai. Raat bhar lete rehne se inner ear ke crystals ek specific position mein aa jaate hain — jab khataak se uthte ho to ye crystals wrong canal mein shift hote hain aur intense spinning aati hai jo usually seconds mein khatam hoti hai.\n\nIske alawa, subah uthne pe blood pressure momentarily low hona (orthostatic hypotension) bhi chakkar ka cause hai — ye elderly mein zyada hota hai.\n\nAgar subah ka chakkar baar baar ho raha hai — ENT ya neurologist se Dix-Hallpike test karwana helpful hota hai.',
    },
    {
      question: 'Kya homeopathy vertigo mein kaam karta hai?',
      answer: 'Homeopathy vertigo mein — specially recurring aur cervical-related cases mein — supportive role nibaata hai. Homeopathy ka advantage ye hai ki wo sirf chakkar ko address nahi karta — jo cheez isko baar baar trigger kar rahi hai, usse bhi assess kiya jaata hai: stress, cervical tension, digestive imbalance, sleep issues.\n\nIs constitutional approach se chronic vertigo ki frequency aur intensity time ke saath improve ho sakti hai. Research limited hai is area mein lekin clinically chronic vertigo patients mein improvement dekhi gayi hai. Results individual hote hain — aur severe ya acute episodes mein conventional treatment parallel chalana zaruri ho sakta hai.',
    },
    {
      question: 'Vertigo mein kaunsa test karwana chahiye?',
      answer: 'Vertigo ke diagnosis ke liye koi ek "universal" test nahi hota — doctor history sunke decide karta hai. Common evaluations:\n- Dix-Hallpike Test: BPPV ke liye — physical examination, koi machine nahi\n- Audiometry: Hearing test — Meniere\'s ya labyrinthitis rule out karne ke liye\n- MRI Brain: Agar central cause suspect ho — stroke ya tumor rule out\n- Cervical X-ray ya MRI: Agar cervical involvement lag rahi ho\n- Blood pressure check: Standing aur lying dono mein\n\nDoctor pehle clinical examination karta hai — tab zarurat ke hisaab se tests recommend karta hai.',
    },
    {
      question: 'Pregnancy mein chakkar normal hai kya?',
      answer: 'Pregnancy mein halka chakkar — specially pehle trimester mein — relatively common hai. Hormonal changes blood pressure ko affect karte hain aur blood sugar fluctuate hoti hai — dono se dizziness ho sakti hai. Ye aksar normal hai.\n\nLekin intense spinning vertigo, ek taraf sunaai band hona, ya fainting ke saath chakkar — ye normal nahi hai pregnancy mein bhi.\n\nSevere vertigo Hyperemesis Gravidarum ya hypertension-related bhi ho sakta hai — is case mein doctor se milna mandatory hai. Pregnancy mein homeopathy ek safe complementary option ho sakti hai — lekin kisi bhi treatment se pehle OB/Gyn se consult zaroori hai.',
    },
    {
      question: 'Bacchon mein chakkar kyun aata hai?',
      answer: 'Bacchon mein vertigo adults se alag hota hai. Common causes:\n- Benign Paroxysmal Vertigo of Childhood: Sudden episodes jo seconds mein theek ho jaate hain — migraine family history wale bacchon mein zyada\n- Motion Sickness: Car ya travel mein zyada visible hoti hai bachpan mein\n- Middle Ear Infections (Otitis Media): Kaan ke infection ke baad balance disturb hota hai\n- Viral Infections: Flu ke baad temporary vertigo ho sakta hai\n\nAgar bacha achanak ghoom ke girta hai, baar baar ye hota hai, ya vertigo ke saath hearing loss ho — ENT evaluation zaroori hai.',
    },
    {
      question: 'Vertigo mein ghar pe kab tak reh sakte hain?',
      answer: 'Pehla episode hai, mild hai, aur position change pe ek-do minute mein theek ho jaata hai — to 2-3 din ghar pe observe kar sakte hain. Hydration rakho, sudden movements avoid karo, driving mat karo episode ke dauran.\n\nLekin in situations mein ghar pe mat raho — seedha doctor:\n- Episode ek hafte se zyada chal raha ho\n- Baar baar aa raha ho — din mein 2+ baar\n- Ulti nahi ruk rahi ya severe nausea hai\n- Balance bilkul nahi hai — chalna mushkil hai\n- Stroke ke koi bhi signs hain (Level 3 dekho)',
    },
    {
      question: 'Vertigo baar baar kyun aata hai?',
      answer: 'Recurring vertigo ka matlab hai ki koi underlying cause address nahi hua hai. Common reasons:\n- BPPV mein crystals ek baar theek ho gaye lekin phir shift ho gaye (re-occurrence common hai)\n- Cervical tension resolve nahi hui — neck muscles tight rehte hain\n- Meniere\'s disease ka unmanaged pressure\n- Stress aur neend ki kami jo vestibular system ko sensitize kiye rakhti hai\n- Migraine triggers control nahi kiye — caffeine, sleep deprivation\n\nRecurring vertigo ka ilaj one-time episode se alag hota hai. Homeopathy mein recurring pattern address karna zyada relevant hota hai — constitutional assessment se trigger pattern pehchana jaata hai.',
    },
    {
      question: 'Kya vertigo hamesha ke liye theek ho sakta hai?',
      answer: '"Permanent cure" ka vaada koi bhi system honestly nahi kar sakta — aur koi kare to doubt karo.\n\nJo realistic hai:\n- BPPV: Epley maneuver se kaafi patients ko lasting relief milta hai — lekin recurrence possible hai (roughly 30-50% cases mein first year mein)\n- Cervical vertigo: Cervical cause properly treat ho to vertigo significantly better hota hai\n- Meniere\'s: Manage kiya jaata hai — quality of life significantly improve hoti hai\n- Stress/lifestyle related: Triggers remove karo to episodes bahut kam hote hain\n\nPractical goal: vertigo ki frequency itni kam ho jaaye ki daily life normal ho. Bahut se patients is goal tak pahunche hain.',
    },
    {
      question: 'India mein vertigo ke specific triggers kya hain?',
      answer: 'Kuch India-specific patterns jo vertigo ko trigger ya worsen karte hain:\n- Garmi aur dehydration: March se June mein vertigo complaints badhti hain. Pani kam peena + garmi = blood pressure drop = chakkar\n- Long fasts: Religious fasts mein blood sugar drop vertigo trigger kar sakta hai — khali pet lambi puja ke baad chakkar aana common complaint hai\n- Desk jobs aur phone: IT aur office workers mein cervical vertigo cases badh rahe hain — hours phone dekhna ya laptop pe jhuke rehna neck ko affect karta hai\n- Late night heavy dinner: Digestive system overload kuch patients mein vestibular sensitivity badhata hai\n\nIn patterns ko identify karna vertigo management ka simple lekin effective part hai.',
    },
  ],

  quickFacts: [
    'Vertigo mein duniya ghumti hui lagti hai — ye sirf dizziness nahi, ek specific spinning sensation hai.',
    'India mein cervical spondylosis-related vertigo cases tezi se badh rahe hain — especially 30-50 age group mein.',
    'Vertigo ke saath ek taraf kamzori, bolne mein takleef, ya achanak tez sar dard — ye emergency signs hain.',
  ],

  relatedSymptoms: [
    { title: 'Tinnitus (Kaan Mein Awaaz)', slug: 'tinnitus' },
    { title: 'Sar Dard (Headache)', slug: 'headache' },
    { title: 'Gardan Ka Dard (Neck Pain)', slug: 'neck-pain' },
  ],

  sources: [
    { title: 'Mayo Clinic — Vertigo: Symptoms & Causes (2024)', url: 'https://www.mayoclinic.org/symptoms/vertigo/basics/definition/sym-20050796' },
    { title: 'NHS UK — Vertigo (2023)', url: 'https://www.nhs.uk/conditions/vertigo/' },
    { title: 'NCBI — Benign Paroxysmal Positional Vertigo (2023)', url: 'https://www.ncbi.nlm.nih.gov/books/NBK470308/' },
    { title: 'WHO — Deafness and Hearing Loss / Vestibular Disorders Overview (2024)', url: 'https://www.who.int/news-room/fact-sheets/detail/deafness-and-hearing-loss' },
  ],
}

async function seed() {
  console.log('Seeding vertigo symptom...')
  const result = await client.createOrReplace(symptom)
  console.log('Done:', result._id)
}

seed().catch(console.error)
