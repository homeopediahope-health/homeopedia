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
  _id: 'symptom-hair-thinning',
  _type: 'symptom',
  title: 'Hair Thinning (Balon Ka Patla Hona)',
  hindiName: 'Balon Ka Patla Hona / Baal Jhadna',
  slug: { _type: 'slug', current: 'hair-thinning' },
  bodySystem: 'Skin',
  shortDescription: 'Baal patla hona — density kam lagna ya scalp dikhna — iron deficiency, thyroid, PCOS ya stress ki wajah se ho sakta hai.',
  metaTitle: 'Hair Thinning in Hindi — Karan aur Homeopathy | Homeopedia',
  metaDescription: 'Baal patla hona (hair thinning) ke karan, severity aur ghar pe safe steps — simple Hinglish mein. Verified info, doctor-reviewed.',
  isAvailable: true,
  reviewDate: 'May 2026',

  heroText: `Subah uthkar aaina dekho — ya kaanghte waqt haath mein baalon ka ek guchha nazar aaye — ye moment kaafi unsettling hoti hai.

Hair thinning matlab ye nahi ki baal toot rahe hain. Iska matlab hai ki naye baal ugne ki speed, girne ki speed se kam ho gayi hai — aur dhire dhire density kam lagti hai. Scalp zyada dikhne lagti hai, hairline peeche jaati lagti hai, ya ponytail pehle se patli lagne lagti hai.

Ye bahut common problem hai — India mein hamare diet, stress levels, aur hormonal changes ki wajah se hair thinning teens se lekar 50+ saal tak kisi bhi age mein ho sakti hai.

Ye page aapko 2 minute mein batayega: aapka case normal hai ya doctor zaroori hai, wajah kya ho sakti hai, aur ghar pe safe steps kya hain.`,

  severityScale: {
    level1: {
      label: 'Ghar Pe Manage Karo',
      signs: [
        'Din mein 50-100 baal girna — ye normal hair cycle hai',
        'Seasonal shedding — October-November ya post-summer mein zyada baal girna',
        'Kaanghte ya nhaate waqt kuch baal aana — pattern consistent ho',
        'Ponytail thodi patli lagi — lekin scalp clearly dikhti nahi hai',
        'Stress ya beemar padne ke 2-3 mahine baad shedding badhi — ye Telogen Effluvium hai, aksar reversible',
      ],
    },
    level2: {
      label: 'Is Hafte Doctor Se Milein',
      signs: [
        'Din mein 150+ baal gir rahe hain — clearly zyada ho gaya',
        'Hairline peeche ja rahi hai — temples ya maang ke paas gap zyada',
        'Scalp ke beech mein part lena mushkil ho raha — wo jagah dikhne lagi',
        '3 mahine se zyada se hair thinning ho rahi hai aur ruk nahi rahi',
        'Saath mein thakaan, weight change, ya irregular periods bhi hain',
      ],
    },
    level3: {
      label: 'Turant Doctor Jaao',
      signs: [
        'Patchy baldness — round ya oval shape mein ek saath baal gaye (Alopecia Areata)',
        'Scalp pe intense itching, redness, scaling ya pustules ke saath baal girna',
        'Eyebrows ya eyelashes bhi girne lage hain saath mein',
        'Sudden severe shedding — hafte mein achanak bahut zyada — saath mein bukhaar ya koi illness',
      ],
    },
  },

  timeline: [
    {
      duration: '2 Se 6 Hafte',
      label: 'Nayi Takleef',
      description: 'Achanak zyada baal girna shuru hua — ye aksar ek trigger ki wajah se hota hai: koi illness, surgery, delivery ke 2-3 mahine baad, ya sudden stress. Isko Telogen Effluvium kehte hain. Body shock mein jaati hai aur hair follicles rest mode mein chale jaate hain. Ye aksar 3-6 mahine mein khud theek hoti hai. Abhi ghabraane ki zarurat nahi — trigger identify karo.',
    },
    {
      duration: '2 Se 4 Mahine',
      label: 'Chalti Aa Rahi',
      description: 'Agar teen mahine se baal girna nahi ruka — trigger se zyada kuch aur chal raha hai. Is waqt thyroid, iron deficiency, ya hormonal imbalance rule out karna zaroori hai. Doctor se milna sahi rahega — basic blood tests se pata chalega.',
    },
    {
      duration: '6 Mahina Ya Zyada',
      label: 'Purani Problem',
      description: 'Agar 6 mahine se zyada se baal patle ho rahe hain — ye chronic hair thinning hai. Is level pe sirf ghar pe steps enough nahi. Underlying cause (genetic, hormonal, ya nutritional) identify karke treat karna padega. Homeopathy is stage pe constitutional approach se kaam karta hai — sirf symptom nahi, root imbalance address karta hai.',
    },
  ],

  lifestyleCauses: [
    {
      title: 'Nutritional Deficiency (Iron, Zinc, Vitamin D, Biotin)',
      description: 'Hair follicle ek continuously active structure hai — isko constant nutrients chahiye. Jab blood mein iron (ferritin) ya zinc ki matra kam hoti hai, to body prioritization karta hai — vital organs pehle, baal baad mein. Follicle "rest mode" mein chala jaata hai. Ye diffuse thinning hai — poore scalp pe ek saath density kam lagti hai.',
      recognition: 'Saath mein thakaan, haath pair thande rehna, ya nakhun kamzor hona — iron deficiency ke signs hain. Sunlight kam milti hai to Vitamin D bhi suspect karo.',
    },
    {
      title: 'Stress (Physical ya Emotional)',
      description: 'Stress ke waqt cortisol hormone badhta hai. High cortisol hair follicle ki active growth phase (Anagen) ko short karke rest phase (Telogen) mein shift kar deta hai. Result: 2-3 mahine baad suddenly zyada baal girne lagte hain. Isliye stress aur hair fall ka connection turant nahi dikhta — delay hota hai.',
      recognition: '2-3 mahine pehle koi bada event tha — exam, job change, beemaari, family crisis, ya major surgery? Tab se baal girne shuru hue hain?',
    },
    {
      title: 'Chemical aur Heat Damage',
      description: 'Repeated bleaching, straightening, rebonding, ya hair dryer ka daily use — ye sab hair shaft ki outer protective layer (cuticle) ko damage karte hain. Damaged shaft easily break hota hai. Ye thinning nahi, breakage hai — broken baal chhote chhote pieces mein girte hain, roots se nahi.',
      recognition: 'Baal midway break ho rahe hain — nahi ki roots se. Aur primarily jin balon par chemical ya heat use hua hai wohi affected hain.',
    },
    {
      title: 'Tight Hairstyles (Traction Alopecia)',
      description: 'Baar baar tight braid, ponytail, ya bun — ye hairstyles scalp pe continuous traction (khinchaav) daalte hain. Ye traction follicle ko physically damage karta hai. Pehle reversible hota hai — lekin agar saalon tak jaari rahe to follicle permanently damage ho sakta hai.',
      recognition: 'Thinning primarily hairline ke paas hai — temples pe ya jahan se hairstyle ki tension aati hai. Scalp pe tightness ya headache bhi feel hoti hai kabhi kabhi.',
    },
  ],

  medicalCauses: [
    {
      diseaseName: 'Thyroid Disorder (Hypothyroidism / Hyperthyroidism)',
      diseaseHindiName: 'Thaayroid Ki Bimari',
      mechanism: 'Thyroid hormone puri body ki cell activity regulate karta hai — hair follicle bhi included. Hypothyroidism mein follicle cycle slow ho jaata hai, diffuse thinning aati hai — poore scalp pe. Eyebrows ka outer third bhi thin ho sakta hai — ye thyroid ka specific sign hai.',
      recognition: 'Saath mein weight gain, thakaan, skin dry, ya constipation — hypothyroidism suspect karo. Weight loss, anxiety, heartbeat fast — hyperthyroidism.',
    },
    {
      diseaseName: 'PCOS (Polycystic Ovary Syndrome)',
      diseaseHindiName: 'PCOS / Ovary Mein Chhote Chhote Daane',
      mechanism: 'PCOS mein androgens (male hormones) ka level females mein badh jaata hai. Ye hormones hair follicle ko sensitive banate hain aur DHT ka effect badh jaata hai — follicle chhotey hote jaate hain, baal patley hote hain. Pattern: temples se aur crown (upar) se thinning.',
      recognition: 'Irregular periods, face ya chin pe baal aana, acne — PCOS ke signs hain saath mein.',
    },
    {
      diseaseName: 'Alopecia Areata',
      diseaseHindiName: 'Chakatta / Jaga Jaga Baal Girna',
      mechanism: 'Ye ek autoimmune condition hai jisme immune system apne hi hair follicles pe attack karta hai. Round ya oval patches mein achanak baal girte hain — ek din mein poora patch khali ho sakta hai. Diffuse thinning nahi — localized baldness.',
      recognition: 'Smooth, skin-coloured bald patch — ek ya zyada. Koi redness ya scaling nahi. Achanak hua, gradually nahi.',
    },
    {
      diseaseName: 'Androgenetic Alopecia (Male/Female Pattern Baldness)',
      diseaseHindiName: 'Vanshanugatik Baal Girna / Genetic Hair Loss',
      mechanism: 'Genetics aur DHT hormone dono milke kaam karte hain. Males mein hairline peeche jaati hai aur crown khali hota hai. Females mein part zyada chodi lagne lagti hai — diffuse thinning crown pe. Ye progressive hai — waqt ke saath zyada badh sakta hai agar treat na karein.',
      recognition: 'Family history hai — baap ya nana/nani ko bhi baal kam the? Pattern symmetric hai — ek side nahi, dono sides pe equally.',
    },
    {
      diseaseName: 'Iron Deficiency Anemia',
      diseaseHindiName: 'Anemia / Khoon Ki Kami',
      mechanism: 'Ferritin (stored iron) ka low level hair thinning ka ek major aur aksar miss kiya jaane wala cause hai. Baal girne ke liye hemoglobin low hona zaruri nahi — sirf ferritin low hona enough hai. Ye diffuse thinning hai — poore scalp pe ek saath.',
      recognition: 'Thakaan, pale skin, neend ke baad bhi freshness na lagna — iron deficiency ke signs. Blood test mein CBC ke saath ferritin level specifically check karwao.',
    },
  ],

  redFlags: [
    'Scalp Infection (Tinea Capitis / Ringworm): Scalp pe round patches mein baal girna, saath mein itching ya scaly skin — ye fungal infection hai, TURANT dermatologist ke paas jaao. Contagious hai.',
    'Autoimmune Disease (Lupus, etc.): Agar hair thinning ke saath butterfly rash cheeks pe, joint pain, ya frequent mouth ulcers hain — doctor se milna urgent hai, simple hair problem nahi ho sakta.',
    'Sudden Massive Shedding Without Trigger: Agar hafte bhar mein achanak bahut zyada baal gaye bina kisi obvious reason ke — ye kisi serious systemic illness ka sign ho sakta hai. Blood tests immediate.',
  ],

  homeSteps: [
    {
      step: 'Scalp Massage (Gentle Circular Motion)',
      reason: 'Roz 5 minute — fingertips se (nakhun nahi), light pressure se circular motion mein scalp massage karo. Scalp mein blood circulation badhta hai aur follicle tak zyada nutrients pahunchen — ye mechanically proven hai.',
    },
    {
      step: 'Kaanghna — Sahi Tarika',
      reason: 'Wide-tooth comb use karo — fine-tooth nahi. Pehle tips se suljhao, phir upar aaao. Geelay balon mein kaanghna avoid karo — ye breakage badh jaata hai kyunki geelay baal zyada elastic aur fragile hote hain.',
    },
    {
      step: 'Heat aur Chemical Se Kuch Hafte Ka Break',
      reason: 'Hair dryer, straightener, curler — chhod do kuch hafte ke liye. Damaged cuticle ko recover karne ka time milta hai. Breakage kam hone se hair visually thicker lagti hai even agar new growth mein waqt lage.',
    },
    {
      step: 'Tight Hairstyles Se Rahat',
      reason: 'Kuch hafte ke liye tight braid, ponytail ya bun band karo. Traction alopecia mein follicle pe physical pressure kum hota hai — early stages mein ye reversible hoti hai.',
    },
    {
      step: 'Sleep aur Stress Management',
      reason: '7-8 ghante ki neend roz — ye non-negotiable hai. 10-15 minute ki daily light walk ya breathing exercise — cortisol levels naturally control hoti hain. Neend ke waqt hair follicle active repair phase mein hota hai.',
    },
  ],

  homeopathyAngle1: 'Hair thinning ka naam ek hai — lekin wajah aur pattern har insaan mein bilkul alag hota hai. Kisi ke baal temples se peeche ja rahe hain, kisi ke crown se, kisi ke poore scalp pe ek saath diffuse thinning hai. Kisi ko raat ko zyada girte hain, kisi ko nhaate waqt, kisi ko stress mein. Homeopathy mein sirf "hair thinning" nahi dekha jaata — aapka thinning kaisa hai, kab se hai, trigger kya tha, saath mein kya aur symptoms hain, aapki overall health kaisi hai — ye sab treatment decide karta hai.',

  homeopathyAngle2: 'Baar baar aane wali ya barhti hui hair thinning aksar sirf baalon ki problem nahi hoti — ye body ke andar kisi imbalance ka signal hoti hai. Kabhi hormonal, kabhi nutritional, kabhi systemic. Homeopathy mein sirf baalon ko treat karne ki koshish nahi ki jaati — jo cheez is imbalance ko paidar kar rahi hai use address kiya jaata hai. Constitutional treatment se waqt ke saath thinning ki progression dhimi hoti hai. Research is area mein limited hai aur results individual hote hain.',

  homeopathyAngle3: 'Homeopathy ki highly diluted medicines ka use hair thinning ke cases mein ki jaati hain — isliye ye approach teens, pregnant women, aur elderly patients ke liye bhi suitable hai jahan aggressive treatments avoid karne hote hain.',

  homeopathyIsFor: [
    'Aap sirf baalon ko band nahi karna chahte — root cause samajhna chahte hain',
    'Aapko sustainable, long-term approach chahiye',
    'Aap pregnant hain, teenager hain, ya doosri medicines chal rahi hain',
    'Conventional treatment ke saath complementary option chahiye',
  ],

  homeopathyNotFor: [
    'Aapko scalp infection hai ya autoimmune condition diagnose hui hai — pehle specialist se milein, baad mein homeopathy saath chal sakti hai',
    'Aap ek hafte mein dramatic result chahte hain — hair growth cycle minimum 3-4 mahine ka hota hai, koi bhi system instant result nahi deta',
  ],

  linkedDiseaseCards: [
    {
      diseaseName: 'Thyroid Disorder',
      diseaseHindiName: 'Thaayroid Ki Bimari',
      diseaseSlug: 'thyroid',
      isAvailable: true,
    },
    {
      diseaseName: 'PCOS (Polycystic Ovary Syndrome)',
      diseaseHindiName: 'PCOS / Ovary Ki Bimari',
      diseaseSlug: 'pcod',
      isAvailable: true,
    },
    {
      diseaseName: 'Alopecia Areata',
      diseaseHindiName: 'Chakatta Baal Girna',
      diseaseSlug: 'alopecia',
      isAvailable: true,
    },
    {
      diseaseName: 'Androgenetic Alopecia',
      diseaseHindiName: 'Vanshanugatik Baal Girna',
      diseaseSlug: '',
      isAvailable: false,
    },
    {
      diseaseName: 'Iron Deficiency Anemia',
      diseaseHindiName: 'Khoon Ki Kami / Anemia',
      diseaseSlug: '',
      isAvailable: false,
    },
  ],

  homeopathyDiseaseLinks: [
    { _type: 'reference', _ref: 'disease-thyroid' },
    { _type: 'reference', _ref: 'disease-pcod' },
    { _type: 'reference', _ref: 'disease-alopecia' },
  ],

  faqs: [
    {
      question: 'Hair thinning kab normal hoti hai aur kab doctor zaroori hai?',
      answer: 'Din mein 50-100 baal girna bilkul normal hai — ye natural hair cycle ka hissa hai. Normal hai agar seasonal change ke waqt thodi zyada shedding ho, ya delivery ke 2-3 mahine baad shedding badhi ho (Telogen Effluvium). Doctor zaruri hai agar din mein 150+ baal consistently gir rahe hain, patchy baldness aayi, 3 mahine se zyada se chal rahi hai, ya saath mein thakaan, irregular periods, ya weight change hai.',
    },
    {
      question: 'Hair thinning kitne waqt tak rehti hai?',
      answer: 'Trigger ke hisaab se duration alag hoti hai. Telogen Effluvium (stress ya illness ke baad): 3-6 mahine mein khud better hoti hai agar trigger dur ho gaya. Nutritional deficiency se: deficiency treat hone ke baad 4-6 mahine mein improvement dikhna shuru hota hai. Hormonal causes (thyroid, PCOS): underlying condition treat hone ke baad thinning stabilize hoti hai. Genetic pattern baldness: ye progressive hai — agar treat nahi kiya to waqt ke saath badh sakti hai.',
    },
    {
      question: 'Hair thinning ka sabse common karan kya hai?',
      answer: 'India mein hair thinning ke teen sabse common causes hain: (1) Iron deficiency — specially females mein, ferritin low hona hemoglobin normal hone ke bawajood. (2) Stress-induced Telogen Effluvium — bada life event ke 2-3 mahine baad. (3) Thyroid imbalance — hypothyroidism India mein underdiagnosed hai aur hair thinning pehla sign hota hai. PCOS females mein aur genetic causes dono genders mein bhi very common hain.',
    },
    {
      question: 'Achanak itne baal kyun girne lage — koi disease to nahi?',
      answer: 'Achanak zyada baal girna zyada tar Telogen Effluvium hota hai — disease nahi, body ka ek reaction hota hai. Koi bhi bada stress — physical ya emotional — zyada follicles ko Telogen mein bhej deta hai. 2-3 mahine baad jab ye baal girte hain to achanak zyada lagta hai. Common triggers: delivery ke baad, major illness ya surgery, crash diet, ya emotional trauma. Ye aksar reversible hai agar trigger hat gaya ho. Agar saath mein scalp pe redness ya round patches hain — turant dermatologist.',
    },
    {
      question: 'Kya homeopathy hair thinning mein kaam karta hai?',
      answer: 'Homeopathy hair thinning mein kaam karta hai — lekin ye "baal uga dene ki dawa" nahi hai. Homeopathy ka approach hai ki jo underlying imbalance baalon ko girva raha hai — thyroid, hormones, stress response — usse address karo. Jab body ka overall balance theek hota hai, hair follicle naturally apni growth phase mein wapas aata hai. Results individual hote hain aur waqt lagta hai (minimum 3-4 mahine). Research is area mein limited hai. Homeopathy conventional diagnosis ke baad complementary option ke roop mein zyada effective hai.',
    },
    {
      question: 'Hair thinning mein kaunsa test karwana chahiye?',
      answer: 'Pehla step — basic blood panel: CBC + Ferritin level (iron stores), TSH (Thyroid Stimulating Hormone), Vitamin D3 level, aur females mein hormonal panel (LH, FSH, testosterone) agar PCOS suspect ho. Ye sab pathlab mein Rs. 800-1500 ke beech ho jaate hain combined. Dermatologist additional kar sakta hai: trichoscopy (scalp ka magnified examination) ya pull test (active shedding kitna hai). Pehle basic panel karo — zyada tar wahi diagnosis de deta hai.',
    },
    {
      question: 'Teenage ladkiyon aur ladkon mein hair thinning kyun hoti hai?',
      answer: 'Teens mein hair thinning ke causes adults se alag ho sakte hain. Ladkiyon mein: iron deficiency (periods start hone ke baad), crash diet ya extreme calorie restriction, PCOS early onset, ya excessive heat styling. Ladkon mein: early onset genetic pattern baldness agar family history ho, anabolic supplements mein hormonal compounds, ya nutritional deficiency. Teen mein sudden patchy hair loss (round patches) — Alopecia Areata ho sakta hai — paediatric dermatologist se milein.',
    },
    {
      question: 'Pregnancy ke baad hair thinning — normal hai kya?',
      answer: 'Haan — delivery ke 2-4 mahine baad hair thinning/shedding bilkul normal hai. Isko Postpartum Telogen Effluvium kehte hain. Pregnancy mein high estrogen levels baalon ko growth phase mein lock rakhte hain — delivery ke baad estrogen gir jaata hai aur ye saare "held back" baal ek saath Telogen mein jaate hain aur girne lagte hain. Ye aksar 6-12 mahine mein khud theek ho jaata hai. Agar 12 mahine baad bhi nahi ruka — thyroid check karo. Breastfeeding mein koi bhi supplement lene se pehle doctor se zaroor poochho.',
    },
    {
      question: 'Garmi ya sardi mein baal zyada kyun girte hain?',
      answer: 'Seasonal hair shedding ek real phenomenon hai. October-November mein hair shedding naturally peak pe hoti hai — ye research-backed observation hai. Summer mein scalp zyada sweat karti hai aur follicle opening block ho sakta hai. Dry winter mein scalp ki moisture kam hoti hai. India mein additional factor: AC waale mahaul mein zyada time bitana scalp ko dry karta hai aur indoor stay se Vitamin D deficiency badh sakti hai. Agar sirf season change pe zyada baal girte hain aur normal ho jaate hain — chinta nahi. Agar season ke baad bhi nahi ruke — tab investigate.',
    },
    {
      question: 'Kya baal patla hona baldness ki taraf jaata hai?',
      answer: 'Zaroori nahi — ye cause pe depend karta hai. Agar hair thinning ka cause reversible hai (stress, nutrition, hormones) aur treat ho jaaye — to hair density wapas aa sakti hai, baldness nahi hogi. Agar cause genetic hai (Androgenetic Alopecia) — to ye progressive hai aur eventually baldness ho sakti hai. Lekin treatment se progression dhimi ki ja sakti hai. Key point: jitni jaldi pata chale aur treat ho — utna better prognosis. 6+ mahine wait karna follicles ko permanently damage karne ka risk badhata hai.',
    },
    {
      question: 'Hair thinning se hamesha ke liye chutkara milega?',
      answer: '"Permanent cure" ka vaada koi bhi system honestly nahi kar sakta. Jo realistic hai: reversible causes (nutrition, stress, hormones) treat ho jaayein to baal wapas aa sakte hain. Genetic pattern baldness ko permanently rokna possible nahi — lekin progression significantly slow karna possible hai. Alopecia areata mein remission possible hai — recurrence bhi possible. Sahi goal: thinning ko rok lena, jo hain unhe achha rakhna, aur agar cause treatable hai to wapas laana. Homeopathy underlying cause address karne mein help kar sakti hai — results individual hote hain.',
    },
    {
      question: 'Doctor pe jaana zaruri hai ya ghar pe try kar sakte hain?',
      answer: 'Depends karta hai kab se hai aur kaisi hai. Ghar pe manage karo (1-2 mahine try karo): trigger pata hai (recent stress, delivery, illness), 3 mahine se kam se ho rahi hai, severity mild hai. Doctor pe jaao: 3 mahine se zyada ho rahi hai, trigger nahi pata, patchy baldness dikhi, ya saath mein koi aur symptom hai (thakaan, irregular periods, weight change). Blood tests ke bina ghar pe try karna aksar time waste karta hai — agar cause deficiency ya hormonal hai to bina treatment ke improvement nahi aayegi.',
    },
  ],

  relatedSymptoms: [
    { _type: 'reference', _ref: 'symptom-dandruff' },
    { _type: 'reference', _ref: 'symptom-hair-fall' },
    { _type: 'reference', _ref: 'symptom-weakness-fatigue' },
    { _type: 'reference', _ref: 'symptom-irregular-periods' },
  ],

  quickFacts: [
    'Hair thinning aur hair loss alag hain — thinning mein baal diameter chhota hota hai, loss mein follicle khatam hota hai.',
    'India mein 20% females PCOS se affected hain — jinmein hair thinning ek common symptom hai. (Source: ICMR)',
    '3 mahine se chal rahi hai aur cause pata nahi — blood tests zaruri hain.',
  ],

  sources: [
    { label: 'American Academy of Dermatology — Hair Loss: Who Gets and Causes | 2024', url: 'https://www.aad.org/public/diseases/hair-loss/causes/18-causes' },
    { label: 'Mayo Clinic — Hair Loss: Symptoms and Causes | 2024', url: 'https://www.mayoclinic.org/diseases-conditions/hair-loss/symptoms-causes/syc-20372926' },
    { label: 'NCBI / NIH — Androgenetic Alopecia and Telogen Effluvium: Overview | 2023', url: 'https://www.ncbi.nlm.nih.gov/books/NBK513005/' },
    { label: 'NHS UK — Hair Loss: Overview and Causes | 2023', url: 'https://www.nhs.uk/conditions/hair-loss/' },
  ],
}

async function seed() {
  console.log('Seeding hair-thinning...')
  const result = await client.createOrReplace(symptom)
  console.log('Done:', result._id)
}

seed().catch(console.error)
