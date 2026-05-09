import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-vertigo',
  _type: 'disease',
  title: 'Vertigo & Meniere\'s Disease',
  hindiName: 'Chakkar Aana / Sar Ghoomna',
  slug: { _type: 'slug', current: 'vertigo' },
  category: 'Neurological',
  publishedAt: '2026-05-04T00:00:00.000Z',
  metaTitle: 'Vertigo Treatment in Hindi – Chakkar, Causes & Homeopathy',
  metaDescription: 'Vertigo aur Meniere\'s disease ke causes, types, homeopathic treatment aur diet guide – simple Hinglish mein. Verified info, doctor-reviewed.',

  heroText: 'Vertigo ek aisi condition hai jisme aapko lagta hai ki aap ya aapke aas-paas ki cheezein ghoom rahi hain – jabki actually kuch hil nahi raha. Ye sirf "chakkar" nahi hai – isme balance bigad jaata hai, ulti jaisi feeling aati hai, aur chalna-phirna bhi mushkil ho jaata hai. Meniere\'s disease ek specific type hai jisme inner ear mein fluid imbalance hoti hai – iske saath sunta kam ho jaata hai aur kaan mein awaaz bhi aati hai. India mein ye problem adults mein bahut common hai, especially 40+ age ke logon mein – aur baar baar aane wale attacks life ko seriously affect karte hain. Sahi diagnosis aur treatment se permanent control bilkul possible hai.',

  quickFacts: {
    whatItIs: 'Inner ear ya nervous system ka balance disorder – room ghoomne ka ehsaas, nausea aur unsteadiness ke saath; BPPV sabse common type hai India mein',
    howCommon: 'India mein general population ka lagbhag 5-10% vertigo se affect hota hai; 40+ age group mein ye rate higher hai',
    treatmentDuration: 'BPPV: 1-3 sessions; Meniere\'s: long-term management; Homeopathic treatment: 3-6 months for meaningful frequency reduction',
    successRate: 'CCRH-affiliated studies mein chronic vertigo patients mein treatment group ne attack frequency aur severity scores mein placebo se notably better results dikhaaye',
  },

  causes: [
    'Inner ear mein fluid pressure imbalance (endolymph) – Meniere\'s disease ka main reason',
    'BPPV – kaan ke andar calcium crystals (otoconia) apni jagah se hil jaate hain aur head movement pe false signals brain ko bhejte hain',
    'Vestibular neuritis – ear ki nerve mein viral infection se inflammation; cold/flu ke baad aksar',
    'Migraine-associated vertigo – migraine attack ke saath ya uske bina bhi chakkar aata hai',
    'Blood pressure mein sudden change – high ya low dono; postural hypotension ek common India-specific cause',
    'Cervical spondylosis – gardan ki nerves ka pressure brain ko confused signals deta hai',
  ],

  riskFactors: [
    '40 se 60 saal ke adults – Meniere\'s is age mein peak hoti hai',
    'Chronic stress mein rehne wale – cortisol inner ear fluid balance ko directly bigaadta hai',
    'High salt intake – sodium retention inner ear mein fluid pressure badhata hai',
    'Migraine patients – vestibular migraine ek alag type ka vertigo deta hai, often undiagnosed',
    'Diabetic patients – nerve aur circulation issues ear ko affect karte hain',
    'Pehle ear infection ka history – nerve damage ka risk badhta hai',
  ],

  complications: [
    'Falls aur injuries – acute attack mein balance bilkul chala jaata hai; ghar mein girne ki injuries serious ho sakti hain',
    'Permanent hearing loss – Meniere\'s mein sunta dheere dheere permanently kam ho sakta hai agar untreated',
    'Anxiety aur social withdrawal – baar baar chakkar aane ka darr patients ko ghar mein band kar deta hai',
    'Depression – chronic vertigo patients mein clinical depression ka risk significantly zyada hota hai',
  ],

  types: [
    {
      _key: 'type1',
      name: 'BPPV – Benign Paroxysmal Positional Vertigo',
      description: 'Sabse common type – lagbhag 50% vertigo cases. Kaan ke andar tiny calcium crystals (otoconia) apni jagah se hil jaate hain aur head movement pe false signals brain ko bhejte hain. Lete se uthna, bed pe karwat lena – bas itne se hi room ghoomne lagta hai. 30 second se 2 minute ka attack. Khaas baat: Epley maneuver (physical repositioning) BPPV mein 85-90% patients mein effective hota hai – aur homeopathy uske saath milake recurrence rokti hai.',
    },
    {
      _key: 'type2',
      name: 'Meniere\'s Disease – Inner Ear Fluid Disorder',
      description: 'Inner ear mein endolymph fluid ka pressure abnormally badhta hai. Ye sirf chakkar nahi – iske saath hearing loss, kaan mein fullness, aur tinnitus bhi aate hain. Attack 20 minute se lekar poore din tak chal sakta hai. India mein 40-60 age group mein zyada dekhi jaati hai. Meniere\'s chronic condition hai – low-sodium diet aur long-term management zaroori hai.',
    },
    {
      _key: 'type3',
      name: 'Vestibular Neuritis / Labyrinthitis',
      description: 'Viral infection (cold/flu ke baad aksar) se inner ear ki nerve ya poori labyrinth inflame ho jaati hai. Acutely bahut severe chakkar aata hai – kai baar hospital jaana padta hai. Ek baar acute phase guzarne ke baad months tak imbalance rehti hai. Vestibular rehabilitation exercises recovery mein critical role nibhati hain is type mein.',
    },
    {
      _key: 'type4',
      name: 'Vestibular Migraine – India Mein Underdiagnosed',
      description: 'Migraine attack ke saath ya uske bina bhi vertigo aata hai – sometimes sirf chakkar aata hai, sir dard nahi. Patients ko pata hi nahi hota ki unka vertigo actually migraine se related hai. India mein ye sabse zyada miss-diagnosed vertigo type hai. Migraine + vertigo history dono ek saath dekh ke diagnosis hoti hai.',
    },
    {
      _key: 'type5',
      name: 'Cervicogenic Vertigo – Gardan Se Aane Wala',
      description: 'Gardan (cervical spine) ki muscles ya joints se signals brain ko confused karte hain. Jo log desk pe ghante ghante baithte hain ya mobile zyada dekha karte hain – unme ye common ho raha hai. Gardan hilane par chakkar, stiffness saath mein. Neck exercises, posture correction aur homeopathy combination isme well-documented help deta hai.',
    },
    {
      _key: 'type6',
      name: 'Central Vertigo – Serious (Turant Doctor)',
      description: 'Brain ke kisi hisse mein (cerebellum ya brainstem) problem se aata hai. Ye kam common hai lekin serious hai. Agar vertigo ke saath double vision, bolne mein takleef, ek taraf weakness, ya face numbness ho – turant emergency mein jaayein. MRI zaroori hai is type ko rule out karne ke liye – self-treat bilkul nahi.',
    },
  ],

  symptoms: [
    {
      _key: 'sym1',
      category: 'Main Vertigo Symptoms (Sab Se Common)',
      items: [
        'Spinning sensation – lagta hai poori duniya ghoom rahi hai; jhule jaisi feeling',
        'Balance problems – chalna ya seedha khada rehna mushkil lagta hai, girne ka darr',
        'Nausea aur vomiting – chakkar ke saath ulti jaisi feeling ya actual vomiting',
        'Nystagmus – aankhein involuntarily ek side hilne lagti hain attack ke dauran',
      ],
    },
    {
      _key: 'sym2',
      category: 'Meniere\'s Disease Ke Khaas Symptoms',
      items: [
        'Tinnitus – kaan mein ghanti bajna ya seeti/bhunbhunaahat; Meniere\'s ka defining feature',
        'Hearing loss – pehle ek kaan mein, aur attack ke waqt zyada; progressive ho sakti hai',
        'Kaan mein pressure ya fullness – jaise kaan band ho gayi ho, pani bhara ho',
        'Episodes jo 20 min se 24 ghante tak chal sakti hain – unpredictable timing',
      ],
    },
    {
      _key: 'sym3',
      category: 'Associated Symptoms',
      items: [
        'Sweating aur pale face – acute attack mein; body ka stress response',
        'Headache ya migraine – especially vestibular migraine type mein',
        'Concentration problem – foggy feeling, kuch bhi focus nahi hota attack ke baad',
        'Extreme anxiety – next attack ka darr jo social withdrawal mein badal jaata hai',
      ],
    },
  ],

  ccrhEvidence: {
    improvementRate: 'Chronic vertigo patients mein treatment group ne attack frequency aur severity scores mein placebo se notably better results dikhaaye',
    avgTreatmentPeriod: '3 se 6 mahine (mild to moderate cases ke liye)',
    citation: 'Council for Research in Homoeopathic Medicine (CRHM) Clinical Studies on Vestibular Disorders | Indian Journal of Research in Homoeopathy | 2018-2022',
    keyFindings: [
      'Vertigo attack frequency treatment group mein placebo se significantly kam rahi',
      'Tinnitus aur ear pressure mein subjective improvement observed in Meniere\'s patients',
      'Quality of life scores (balance, daily activity) mein measurable gain – especially Meniere\'s patients mein',
      'Anxiety aur sleep quality bhi improved – secondary outcomes jo conventional treatment address nahi karta',
    ],
  },

  homeopathyBenefits: [
    'Homeopathy vertigo mein sirf chakkar band karne ki koshish nahi karta – ye dekha jaata hai ki aapka vertigo kis wajah se aata hai, kab aata hai, kya se badhta hai',
    'Har patient ka vertigo alag hota hai – kisi ka aankhein band karne se badhta hai, kisi ka movement se, kisi ka subah uthne par – homeopathy ye individual pattern address karta hai',
    'Inner ear ki sensitivity aur nervous system ki overreaction dono ko stabilize karne mein kaam karti hain – attack ki frequency aur intensity dono mein meaningful improvement hoti hai',
    'Individualized treatment – aapka vertigo "kab, kaise, kyun" hota hai, usi pattern ke hisaab se medicine decide hoti hai',
    'No drowsiness – allopathic anti-vertigo medicines se neend aati hai; homeopathic medicines mein ye side effect nahi',
    'Tinnitus address hota hai – jo conventional treatment mein aksar neglect hota hai; Meniere\'s mein ye valuable hai',
    'Anxiety aur fear jo chakkar ke baad rehta hai – wo bhi treatment mein shamil hota hai; sirf physical nahi, mental-emotional bhi',
  ],

  medicines: [
    {
      _key: 'med1',
      name: 'Conium Maculatum',
      bestFor: 'Jinhe horizontally ya vertically sir hilane se ya lete se uthne par chakkar aata hai – especially elderly patients. BPPV jaise positional vertigo cases mein particularly relevant.',
      keyIndications: [
        'Lete hue ya karwat lene par chakkar – position change se triggered',
        'Slow, gradual movement se better – jaldi hilne par worse',
        'Elderly patients mein peripheral nerve circulation issues ke saath',
      ],
    },
    {
      _key: 'med2',
      name: 'Gelsemium Sempervirens',
      bestFor: 'Jinhe vertigo ke saath weakness, heavy eyes, aur lagta hai ki fall ho jayenge – anxiety se vertigo trigger hota ho. Stress ya anticipation se aane wale vertigo episodes mein strong role.',
      keyIndications: [
        'Weakness aur heaviness ke saath vertigo – "legs give way" feeling',
        'Anxiety aur anticipation se trigger – darr ki wajah se attack',
        'Nervous system ka "overwhelm" state – bahut zyada load feel hona',
      ],
    },
    {
      _key: 'med3',
      name: 'Cocculus Indicus',
      bestFor: 'Travel sickness, motion se vertigo, nausea prominent – neend puri na ho, caretakers (jo raat jagkar dekhbhal karte hain). Vestibular system ki motion sensitivity ko target karta hai.',
      keyIndications: [
        'Motion sickness – gaadi, train, flight mein chakkar aur nausea',
        'Sleep deprivation ke baad vertigo – raat jagke kaam karne wale',
        'Nausea dominant – chakkar ke saath ulti ki feeling prominent',
      ],
    },
    {
      _key: 'med4',
      name: 'Chininum Sulphuricum',
      bestFor: 'Meniere\'s disease ke patients – khaaskar jinhe tinnitus (kaan mein tez awaaz) aur sunta kam ho raha ho saath mein. Inner ear ke fluid dynamics aur auditory nerve irritation dono pe focused.',
      keyIndications: [
        'Meniere\'s classic triad – vertigo + tinnitus + hearing loss teeno saath',
        'Kaan mein loud ringing ya buzzing – tez tinnitus dominant feature',
        'Inner ear fluid imbalance – endolymph pressure issues',
      ],
    },
    {
      _key: 'med5',
      name: 'Belladonna',
      bestFor: 'Sudden, intense vertigo attacks – saath mein throbbing headache, face laal ho jaaye, roshni se takleef ho. Acute vascular-type vertigo jisme blood flow to the head suddenly fluctuate karta hai.',
      keyIndications: [
        'Sudden, violent onset – abruptly aata hai aur intense hota hai',
        'Throbbing headache + red face + photophobia – characteristic combination',
        'Vascular vertigo – blood pressure fluctuation se triggered',
      ],
    },
  ],

  dietInclude: [
    {
      _key: 'di1',
      category: 'Low-Sodium Foods',
      emoji: '🧂',
      items: [
        'Ghar ka saada khana (kam namak) – inner ear mein fluid pressure control karne ka sabse practical tarika; Meniere\'s patients ke liye non-negotiable',
        'Daliya / Oats – low sodium, complex carbs jo blood sugar stable rakhte hain aur vertigo triggers kam karte hain',
        'Homemade dal without extra salt – protein + low sodium combination; packaged dal mixes avoid karein',
      ],
    },
    {
      _key: 'di2',
      category: 'Hydrating & Nerve-Supportive Foods',
      emoji: '💧',
      items: [
        'Naariyal paani – natural electrolytes jo inner ear fluid balance support karte hain; roz subah ek glass',
        'Kheera (cucumber) – high water content, blood pressure gentle karta hai; vertigo triggers kam karta hai',
        'Amla (Indian gooseberry) – Vitamin C se vestibular nerve health improve hoti hai; roz ek amla ya juice',
        'Soaked almonds (badam) – magnesium aur Vitamin E nerve function ke liye; 8-10 roz bheegoke',
      ],
    },
    {
      _key: 'di3',
      category: 'Anti-Inflammatory Foods',
      emoji: '🌿',
      items: [
        'Haldi wala doodh (turmeric milk) – curcumin se inner ear inflammation reduce hoti hai; raat ko peena beneficial',
        'Ginger (adrak) tea – nausea aur vomiting ko natural tarike se control karta hai; vertigo-associated nausea mein especially helpful',
        'Palak, methi, saag – B vitamins aur magnesium nerve aur vestibular health ke liye essential',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'High Sodium / Salt',
      emoji: '🚫',
      items: [
        'Packaged snacks (chips, namkeen) – sodium spike se inner ear fluid pressure badhta hai; Meniere\'s mein worst trigger',
        'Pickles (achar) aur papad – bahut zyada sodium; vertigo frequency badh sakti hai',
        'Ketchup, sauces, processed foods – hidden sodium hota hai; labels check karo',
      ],
    },
    {
      _key: 'da2',
      category: 'Caffeine aur Stimulants',
      emoji: '⚠️',
      items: [
        'Zyada chai / coffee – caffeine inner ear blood vessels constrict karta hai aur tinnitus worse karta hai',
        'Energy drinks – caffeine + sodium ka double impact; strictly avoid',
        'Alcohol – vestibular system directly affect karta hai; Meniere\'s mein strictly avoid; hearing damage karta hai',
      ],
    },
    {
      _key: 'da3',
      category: 'Trigger Foods',
      emoji: '🔴',
      items: [
        'Cheese, paneer zyada quantity mein – tyramine content vestibular migraine trigger kar sakta hai',
        'Refined sugar + maida – blood sugar fluctuation circulation ko affect karta hai, vertigo worse hoti hai',
        'Chocolate zyada matra mein – migraine-vertigo link ki wajah se moderate karein',
      ],
    },
  ],

  dos: [
    'Uthne mein jaldi mat karo – bed pe 30 second baithne ke baad uthna chahiye; khoon ka daura adjust ho jaata hai aur BPPV attack ka chance kam hota hai',
    'Din mein 8-10 glass paani piyein – dehydration vertigo ka top trigger hai; ye sabse aasaan prevention step hai',
    'Roz subah neck exercises karo (doctor-guided) – cervical muscles loosen hoti hain; cervicogenic vertigo rokta hai',
    'Ghar mein grab bars ya support rails lagwao – bathroom aur seediyon pe – attack mein girne ki injury prevent karna zaroori hai',
    'Neend ka time fix rakho – irregular sleep Meniere\'s ke attacks frequency badhata hai; 7-8 ghante regular sleep important',
    'Stress management apnao – meditation, deep breathing; cortisol inner ear ko directly affect karta hai',
  ],

  donts: [
    'Sar ko jhatke se mat hilao ya suddenly gardan mat moro – BPPV mein crystal disturb karta hai aur attack trigger hota hai',
    'Namak zyada mat khao – din mein 1500-2000mg se zyada sodium Meniere\'s mein inner ear fluid badhata hai',
    'Attack ke time akele mat rehna – baithna ya lete rehna safe hota hai; chalna ya drive karna nahi',
    'Zyada mobile / screen mat dekho continuously – blue light aur neck posture dono vestibular stress dete hain',
    'Self-medicate mat karo – alag alag pills lene se medicine interaction aur central vertigo masking ho sakta hai',
    'Alcohol bilkul mat lo agar Meniere\'s diagnosed hai – directly fluid balance bigaadta hai aur hearing damage karta hai',
  ],

  seasonalCare: {
    summer: 'Dehydration vertigo ka common summer trigger hai – din mein 8-10 glass paani zaroor piyein. Tez dhoop mein nikalte waqt naariyal paani saath rakho. AC se seedha bahar mat jaayein – temperature shock circulation bigaadta hai. ORS ya nimbu pani electrolytes ke liye. Summer mein alcohol bilkul nahi – double dehydration effect.',
    winter: 'Sardi-khansi ke baad ear infection risk – vestibular neuritis trigger ho sakta hai; ear ko warm rakhein. Gardan (neck) warm rakhna – cervicogenic vertigo se bachav; scarf zaroor pehnen. Room heater se andar ka air dry hota hai – hydration zyada zaruri hai winter mein. Cold air se kaan dhakein bahar jaate waqt.',
    monsoon: 'Infections zyada – ear mein paani mat jaane do; swimming ya baarish mein ear protect karo. Pressure changes aur weather shifts Meniere\'s ko trigger kar sakte hain – dhyan rakho. Is season mein stress management extra important – cortisol aur weather changes combination dangerous hai. Bahar ka paani avoid – filtered paani piyo.',
  },

  faqs: [
    {
      _key: 'faq1',
      question: 'Vertigo ka permanent ilaaj kya hai?',
      answer: 'Vertigo ko permanently control karna bilkul possible hai – aur bahut se patients saalon tak attack-free rehte hain. Permanent control ka matlab hai: sahi diagnosis (kaunsa type hai?), type ke hisaab se treatment, aur lifestyle changes jo triggers rok sake. BPPV mein Epley maneuver se 85-90% patients theek ho jaate hain. Meniere\'s mein low-sodium diet + homeopathy se long-term remission milti hai. "Permanent cure" koi magic pill nahi – ye ek combination hai jo aapki specific condition pe depend karta hai.',
    },
    {
      _key: 'faq2',
      question: 'Vertigo aur normal chakkar mein kya fark hai?',
      answer: 'Normal chakkar usually ek-do second ka hota hai – khana na khane par, dhoop mein, ya thakaan se. Vertigo mein aapko strongly lagta hai ki room ghoom raha hai ya aap khud ghoom rahe hain – bilkul jhule jaisi feeling, 30 seconds se lekar ghanton tak. Saath mein nausea, balance problems, ya kaan mein awaaz bhi ho sakti hai. Vertigo ki "spinning" feeling clearly alag hoti hai. Agar baar baar aaye ya 20 minute se zyada rahe – ye normal chakkar nahi, diagnosis zaroor karwao.',
    },
    {
      _key: 'faq3',
      question: 'Vertigo kitne time tak rehta hai – ek attack?',
      answer: 'Ye depend karta hai type par: BPPV – 30 second to 2 minute, sar hilane par aata hai. Meniere\'s – 20 minutes to 24 hours, unpredictably. Vestibular neuritis – severe phase 1-3 din, imbalance weeks tak. Vestibular migraine – 5 minutes se 72 hours tak vary karta hai. Agar pehli baar hua ho aur zyada der tak raha – doctor se milna zaroori hai; central vertigo (brain issue) rule out karna padta hai.',
    },
    {
      _key: 'faq4',
      question: 'Kya homeopathy vertigo mein kaam karta hai?',
      answer: 'Haan – homeopathy vertigo mein effective complementary approach hai, especially recurring aur chronic cases mein. CCRH-affiliated studies mein vertigo patients ke attack frequency aur severity mein treatment group ne placebo se better results dikhaaye. Homeopathy ka advantage ye hai ki ye sirf chakkar nahi – tinnitus, anxiety, sleep problems jo vertigo ke saath aate hain – sab address hote hain. Medicines individualized hoti hain – aapka vertigo kab, kaise aur kyu aata hai, usi hisaab se choose ki jaati hain.',
    },
    {
      _key: 'faq5',
      question: 'Vertigo mein kya khana chahiye aur kya nahi?',
      answer: 'Kya khayein: kam namak wala ghar ka khaana, naariyal paani, adrak ki chai (nausea ke liye best), soaked almonds, haldi wala doodh. Hydration sabse zaruri – din mein 8-10 glass. Kya nahi: namkeen chips/snacks, achar, zyada chai-coffee, alcohol, cheese ya chocolate zyada matra mein. Low-sodium diet Meniere\'s ke patients ke liye practically non-negotiable hai – namak seedha inner ear fluid pressure badhata hai.',
    },
    {
      _key: 'faq6',
      question: 'Meniere\'s disease kya hoti hai – vertigo se kaise alag hai?',
      answer: 'Meniere\'s disease ek specific inner ear disorder hai jisme fluid (endolymph) ka pressure abnormally badhta hai. Ye vertigo ka ek type hai – lekin sirf chakkar nahi hota: hearing loss (usually ek kaan mein), kaan mein ghanti bajna (tinnitus), aur kaan mein pressure – ye teeno saath mein aate hain. Attack 20 minute se poore din tak chal sakta hai. Normal vertigo sirf spinning hoti hai. Agar ye teeno symptoms saath aa rahe hain – Meniere\'s test zaroori hai.',
    },
    {
      _key: 'faq7',
      question: 'Kya vertigo apne aap theek ho jaata hai?',
      answer: 'BPPV aksar apne aap improve hota hai weeks-months mein – lekin Epley maneuver se 1-2 sessions mein hi theek ho sakta hai, intezaar kyun karna. Vestibular neuritis ka acute phase 2-3 hafton mein settle hota hai – par imbalance months tak rehti hai. Meniere\'s apne aap nahi jaati – baar baar aati hai, hearing permanent damage ho sakta hai. Isliye "wait and watch" sirf safe tab hai jab doctor ne confirm kiya ho.',
    },
    {
      _key: 'faq8',
      question: 'Vertigo mein kaun sa test hota hai?',
      answer: 'Sabse pehle doctor physical examination karta hai – Dix-Hallpike test (BPPV identify karta hai), eye movement test. Iske baad zarurat ho to: Audiometry (hearing test) – Meniere\'s ke liye. MRI brain – central vertigo ya acoustic neuroma rule out. ENG/VNG (electronystagmography) – vestibular function. Blood tests – anemia, thyroid, diabetes check. Sirf chakkar ke liye MRI har baar zaroori nahi – doctor decide karta hai symptoms ke hisaab se.',
    },
    {
      _key: 'faq9',
      question: 'Vertigo ka gharelu ilaaj kya hai – koi quick relief?',
      answer: 'Ginger (adrak) tea vertigo-associated nausea ke liye sabse proven gharelu upay hai. Lete rehna aankhein band karke – attack mein ye immediate help deta hai. Epley maneuver ghar mein seekh sakte ho BPPV ke liye – physiotherapist se seekho. Sar ko jhatke se hilana mat – ye worse karta hai. Hydration – paani piyein. Ye sab quick relief ke liye hain – root treatment ke liye qualified doctor se milna zaroori hai.',
    },
    {
      _key: 'faq10',
      question: 'Vertigo aur BP ka koi connection hai kya?',
      answer: 'Haan – dono directions mein. High BP brain aur inner ear circulation affect karta hai. Low BP (especially postural hypotension – jaldi uthne par) ek bahut common vertigo cause hai India mein. Agar aapko baithne ya lete se uthne par chakkar aata hai to BP check zaroor karwao. Diabetes patients mein bhi BP fluctuation + nerve issues combine karke vertigo ka risk badhate hain. BP control karna vertigo management ka important part hai.',
    },
    {
      _key: 'faq11',
      question: 'Pregnancy mein vertigo hona normal hai kya?',
      answer: 'Pregnancy mein halka chakkar aana common hai – especially pehle trimester mein – blood pressure aur blood volume mein changes ki wajah se. Lekin agar room ghoomne jaisi strong vertigo ho, sunai kam de, ya kaan mein awaaz aaye – ye normal nahi, doctor ko immediately batao. Pregnancy mein conventional anti-vertigo medicines safe nahi hoti – isliye homeopathy ek safer complementary option ban jaata hai.',
    },
    {
      _key: 'faq12',
      question: 'Bacchon mein vertigo ho sakta hai kya?',
      answer: 'Haan – bacchon mein bhi vertigo hoti hai, par often diagnose nahi hoti. Bachcha aksar clearly "room ghoomna" express nahi kar paata – wo balance bigad jaata hai, gir jaata hai, ya neend se uthke rota hai. Bacchon mein vestibular migraine most common cause hai. Agar bachcha baar baar "sir ghoomna" bol raha ho, school mein girta ho, ya car sick bahut ho – evaluation zaroori hai. Bacchon ke liye homeopathy ek gentle aur safe approach hai.',
    },
    {
      _key: 'faq13',
      question: 'Vertigo mein kya driving karna safe hai?',
      answer: 'Nahi – active vertigo attacks mein driving bilkul nahi. Ek sudden attack wheel pe aaye – ye serious road accident ka risk hai. Agar aapko pata ho ki roz subah attack aata hai ya unpredictable attacks hain – doctor ka clearance lena zaroori hai. Jab symptoms stabilize ho jaayein aur attacks rare ho jaayein tab driving ke baare mein discuss karo apne doctor se.',
    },
    {
      _key: 'faq14',
      question: 'Cervical spondylosis se vertigo aata hai kya?',
      answer: 'Haan – ye bahut common aur underdiagnosed connection hai. Cervical spondylosis mein neck ki muscles tense rehti hain aur nerves pe pressure aata hai jo brain ko balance ki galat information deta hai. Office mein hours baithne wale, mobile pe jhuke rehne wale – unme ye zyada hota hai. Symptoms: neck hilane par chakkar, subah uthne par. Neck exercises, posture correction aur homeopathy combination isme well-documented help deta hai.',
    },
    {
      _key: 'faq15',
      question: 'Vertigo mein MRI ya CT scan zaroori hai kya?',
      answer: 'Har vertigo case mein nahi. BPPV aur Meniere\'s ka diagnosis clinical examination se hota hai – MRI zaroori nahi. Lekin agar: vertigo sudden severe ho aur pehli baar ho, saath mein double vision ya ek side weakness ho, hearing suddenly bilkul chali jaaye, ya 60+ age mein pehli baar attack ho – to doctor MRI ya CT scan recommend karenge central cause rule out karne ke liye. Ye doctor ko decide karne do.',
    },
    {
      _key: 'faq16',
      question: 'Stress se vertigo ho sakta hai kya?',
      answer: 'Bilkul – stress vertigo ka ek major trigger hai. Cortisol (stress hormone) inner ear ke fluid balance ko directly affect karta hai. Meniere\'s ke patients mein aksar notice hota hai ki stressful period mein attacks zyada hote hain. Anxiety bhi vestibular system ko hypersensitive karta hai. Isliye vertigo ke treatment mein sirf ear nahi – stress management bhi equally important part hai. Meditation, breathing exercises, aur adequate sleep – ye sab treatment ka hissa hain.',
    },
    {
      _key: 'faq17',
      question: 'Kya vertigo patients ko exercise karni chahiye?',
      answer: 'Zaroor – lekin sahi exercise. Vestibular rehabilitation exercises (doctor ya physiotherapist se seekho) specially designed hoti hain balance system retrain karne ke liye. Yoga – shavasana, simple breathing, gentle stretches safe hain. Tez cardio ya head-down positions acute phase mein avoid karo. Swimming bhi good hai – lekin ear mein paani nahi jaana chahiye. Regular gentle movement recovery accelerate karta hai – bed rest se problem worse hoti hai long term mein.',
    },
    {
      _key: 'faq18',
      question: 'Vertigo aur anxiety ka connection kya hai?',
      answer: 'Dono ek doosre ko trigger karte hain – ye "vicious cycle" hai. Chakkar aata hai – anxiety hoti hai – anxiety se vestibular system aur hypersensitive hoti hai – aur chakkar aata hai. Bahut se chronic vertigo patients mein agoraphobia (bahar jaane ka darr) develop ho jaati hai. Homeopathy mein ye dual aspect – physical vertigo + anxiety pattern – dono ek saath address hote hain. Isko sirf psychological mat samjho – ye real physical-psychological loop hai.',
    },
    {
      _key: 'faq19',
      question: 'Vertigo mein flight travel safe hai kya?',
      answer: 'Mild, stable vertigo mein flight generally safe hai – par kuch precautions zaroori hain. Cabin pressure change Meniere\'s patients ko affect kar sakta hai. Descending phase mein kaan mein pressure feel hota hai. Tips: hydrated rehna, khali pet mat jaao, antiemetic carry karo, doctor se clearance lo. Acute attack phase mein travel plan postpone karna better hai. Airline ko pehle batao agar special assistance chahiye.',
    },
    {
      _key: 'faq20',
      question: 'Tinnitus (kaan mein awaaz) aur vertigo ka kya rishta hai?',
      answer: 'Meniere\'s disease mein tinnitus aur vertigo dono inner ear ki same fluid problem se aate hain – isliye aksar saath aate hain. Tinnitus alone bhi vestibular system ko destabilize kar sakta hai. Aur vertigo ke attacks ke waqt tinnitus usually worse ho jaata hai. Homeopathy mein Chininum Sulphuricum jaise medicines is dual problem – tinnitus + vertigo – ko simultaneously address karti hain.',
    },
    {
      _key: 'faq21',
      question: 'Ek baar vertigo theek ho jaaye to dobara aata hai?',
      answer: 'Depend karta hai type par. BPPV – 30-50% patients mein 1 saal mein dobara aa sakta hai agar triggers continue hain. Meniere\'s – chronic condition hai, management necessary hai. Vestibular neuritis – usually ek baar hoti hai, par brain compensate seekh jaata hai. Prevention ke liye: low-sodium diet (Meniere\'s), triggers avoid karna, posture correct karna, aur regular homeopathic follow-up. Recurrence significantly reduce kiya ja sakta hai.',
    },
    {
      _key: 'faq22',
      question: 'Vertigo mein kya khaas neend ki position leni chahiye?',
      answer: 'BPPV patients ke liye: apna "affected side" ek-do ghante upar rakho – uthne mein "good side" se utha. Raat mein ek extra pillow rakho head slightly elevated. Flat lete rehne se BPPV worse ho sakta hai. Meniere\'s patients: sone mein koi strict restriction nahi – par uthne mein jaldi mat karo. Cervicogenic vertigo: flat pillow use karo – zyada high pillow neck bend karta hai. Subah bistar se uthne se pehle 30 second side pe karwat lekar baithein, phir uthein.',
    },
    {
      _key: 'faq23',
      question: 'Vertigo mein kya ayurvedic treatment bhi kaam karta hai?',
      answer: 'Ayurveda mein "Bhrama" (vertigo) ke liye treatments hain – Brahmi, Ashwagandha, Shankhpushpi, aur Panchakarma therapies. Ye nervous system aur inner ear ko support karte hain. Kuch patients ko Ayurveda + Homeopathy combination se benefit milta hai. Important: Koi bhi herbal medicine apne aap mat lo – kuch herbs conventional medicines ke saath interact karti hain. Doctor ki guidance mein integrated approach better hai.',
    },
  ],

  relatedDiseases: [
    'Migraine',
    'Cervical Spondylosis',
    'Anxiety',
    'Sinusitis',
    'Hypothyroidism',
  ],
}

async function seed() {
  try {
    const result = await client.createOrReplace(doc)
    console.log('✅ Vertigo & Meniere\'s Disease created/updated:', result._id)
    console.log('🌐 Live at: https://homeopedia.in/diseases/vertigo')
  } catch (err) {
    console.error('❌ Error:', err)
  }
}

seed()
