import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'symptom-irregular-periods',
  _type: 'symptom',

  name: 'Irregular Periods',
  hindiName: 'अनियमित माहवारी (Aniyamit Mahavari)',
  hinglishName: 'Aniyamit Periods',
  slug: { _type: 'slug', current: 'irregular-periods' },
  bodySystem: "Women's",

  metaTitle: 'Irregular Periods in Hindi — Karan, Ilaaj aur Homeopathy | Homeopedia',
  metaDescription: 'Irregular periods (aniyamit mahavari) ke karan, severity aur ghar pe safe steps — simple Hinglish mein. Verified info, Dr. Shadab reviewed.',
  publishedAt: new Date('2026-05-19').toISOString(),

  whatIsThis: `Kabhi cycle 28 din ka hota hai, kabhi 40 din baad aata hai — aur kabhi 2-3 mahine tak kuch hota hi nahi. Poora plan biga jaata hai, tension rehti hai, aur andar se ek dar sa rehta hai — "kuch theek nahi hai kya?"

Irregular periods — yaani aniyamit mahavari — India mein bahut common problem hai, lekin hona common iska matlab ye nahi ki normal hai. Ye body ka ek signal hai.

Ye page aapko 2 minute mein batayega: aapka case ghar pe manage ho sakta hai ya doctor zaruri hai — aur aage kya karna chahiye.`,

  prevalence: 'WHO ke anusaar globally lagbhag 14-25% reproductive age ki mahilaon ko irregular periods ki problem hoti hai. India mein PCOS aur thyroid ki badh rahi cases ki wajah se ye percentage aur zyada estimate ki jaati hai.\nSource: WHO — Menstrual Health: Global Landscape | 2023',

  severityLevels: [
    {
      _key: 'sl1',
      level: 'green',
      title: 'Level 1 — Ghar Pe Manage Karo',
      signs: [
        'Cycle 21 se 35 din ke beech aa raha hai — thoda aage-peeche ho raha hai lekin regular direction mein hai',
        'Pichle 1-2 mahine mein hi irregular hua hai — koi nayi stress, travel, ya diet change thi',
        'Periods aa rahi hain — sirf timing thodi upar-neeche ho rahi hai, flow normal hai',
        'Koi aur symptom nahi — sirf timing ka issue hai',
      ],
    },
    {
      _key: 'sl2',
      level: 'yellow',
      title: 'Level 2 — Is Hafte Doctor Se Milein',
      signs: [
        '3 ya zyada mahine se cycle 35+ din ka ho gaya hai',
        'Pehle regular thi, achanak 2+ mahine se irregular ho gayi',
        'Periods ke saath unusual hair growth (face/body pe), acne badh gayi, ya weight achanak badha-ghata hai',
        'Bahut zyada ya bahut kam bleeding ho rahi hai — normal se clearly alag',
      ],
    },
    {
      _key: 'sl3',
      level: 'red',
      title: 'Level 3 — Turant Hospital Jaao',
      signs: [
        '3 mahine se zyada se periods bilkul band hain aur pregnancy test negative hai (ya confirm nahi kiya)',
        'Periods ke saath itna zyada bleeding ki ek ghante mein ek se zyada pad change karna pad raha hai',
        'Periods ke saath severe pelvic pain jo normal nahi lagti — chakar aa rahe hain, behoshi jaisi feeling',
        'Pregnancy suspected hai aur irregular/heavy bleeding ho rahi hai',
      ],
    },
  ],

  timeline: [
    {
      _key: 'tl1',
      duration: '1 se 2 Mahine',
      label: 'Nayi Takleef',
      advice: 'Body external changes pe react karti hai — stress, travel, exam, diet change, ya exercise mein sudden badlaav se ek-do cycles irregular ho jaana common hai. Ye aksar khud theek ho jaata hai jab woh trigger khatam hota hai. Agar 2 mahine mein cycle wapas track pe nahi aayi to Level 2 mein jao — doctor se milein.',
    },
    {
      _key: 'tl2',
      duration: '2 se 4 Mahine',
      label: 'Chalti Aa Rahi',
      advice: 'Ye ab sirf "stress ki wajah se" ki category se bahar ho chuka hai. Is duration mein hormones properly check karna zaroori hai. PCOS, thyroid, ya hormonal imbalance rule out karna chahiye. Is hafte hi doctor appointment lo — delay mat karo.',
    },
    {
      _key: 'tl3',
      duration: '4 Mahine Se Zyada',
      label: 'Purani Problem',
      advice: 'Agar irregularity 4+ mahine se chal rahi hai to ye chronic hai. Iska matlab hai ki body mein koi deeper imbalance hai jo sirf "wait and watch" se theek nahi hoga. Doctor se milna aur proper diagnosis lena ab optional nahi — mandatory hai.',
    },
  ],

  lifestyleCauses: [
    {
      _key: 'lc1',
      title: 'Stress aur Anxiety',
      mechanism: 'Brain mein hypothalamus gland hormones ka schedule control karta hai — specifically GnRH hormone release karta hai jo ovulation trigger karta hai. Jab chronic stress hoti hai to cortisol (stress hormone) is process ko disrupt karta hai. Hypothalamus signal dena band ya slow kar deta hai. Ovulation late ya skip hoti hai — aur isliye period late ya miss ho jaata hai.',
      patientSigns: 'Irregularity kisi besar ya stressful period ke saath coincide karti hai — exams, breakup, job change, family tension. Jab stress kam hoti hai cycle slowly better hoti hai.',
    },
    {
      _key: 'lc2',
      title: 'Sudden Weight Change (Zyada Badhna Ya Ghatta)',
      mechanism: 'Body fat (adipose tissue) estrogen produce karta hai. Jab weight bahut tezi se badhta ya ghatta hai — crash diet, intense gym, ya bimari ke baad — estrogen level abruptly change ho jaata hai. Yahi imbalance ovulation aur periods ko irregular karta hai.',
      patientSigns: 'Irregularity weight change ke 1-3 mahine baad start hoti hai. BMI normal range se bahut upar ya neeche hone pe zyada hota hai.',
    },
    {
      _key: 'lc3',
      title: 'Extreme Exercise',
      mechanism: 'Bahut zyada intense workout — specially jab calorie intake kam ho — body ko "survival mode" mein daal deta hai. Brain decide karta hai ki reproduction abhi zaruri nahi. LH aur FSH hormones suppress ho jaate hain. Ye "exercise-induced amenorrhea" ya "athletic triad" ka hissa hai.',
      patientSigns: 'Marathon training, intense dance, ya gym daily 2+ ghante karne ke baad cycles miss hone lagi hain. Weight bhi neeche hai.',
    },
    {
      _key: 'lc4',
      title: 'Sleep Disruption (Raat Ko Jaagna)',
      mechanism: 'Melatonin aur cortisol ke natural rhythms hormonal clock ke saath directly linked hain. Night shifts, screen time raat ko, ya irregular sleep pattern se circadian rhythm bigad jaati hai — aur iska seedha asar menstrual cycle pe padta hai.',
      patientSigns: 'Jo log night shift mein hain, students jo raat ko jagte hain, ya recent travel ke baad (jet lag) irregularity notice karte hain.',
    },
  ],

  redFlags: [
    'Pregnancy Complications — agar sexually active hain aur periods miss hain to pehle pregnancy test karo. Irregular bleeding pregnancy mein serious ho sakti hai — agar bleeding ke saath cramping ho to turant emergency.',
    'Uterine Fibroids ya Polyps — agar irregular periods ke saath bloating, pelvic pressure, ya bahut heavy bleeding ho to yeh uterine conditions ho sakti hain — ultrasound se pata chalta hai, delay mat karo.',
    'Premature Ovarian Insufficiency (POI) — 40 saal se kam mein periods permanently irregular ya band ho jaayein, hot flashes, vaginal dryness ke saath — ye serious condition hai, specialist se milna zaroori hai.',
  ],

  linkedDiseaseCards: [
    {
      _key: 'ldc1',
      title: 'PCOD',
      hindiName: 'Andiyon Mein Chhoti Ganthe',
      description: 'PCOD mein ovulation regular nahi hoti isliye cycle track nahi rehta. Saath mein acne, face ya body pe extra hair growth, aur weight gain aksar hota hai.',
      homeopediaSlug: 'pcod',
      isAvailable: true,
    },
    {
      _key: 'ldc2',
      title: 'PCOS',
      hindiName: 'Andiyon Ki Bimari (Hormonal)',
      description: 'PCOS mein zyada hormonal imbalance hoti hai — testosterone elevated hota hai, insulin resistance bhi aa sakti hai. Periods kai mahine tak miss ho sakte hain.',
      homeopediaSlug: 'pcod',
      isAvailable: true,
    },
    {
      _key: 'ldc3',
      title: 'Thyroid Disorder',
      hindiName: 'Thayraid Ki Bimari',
      description: 'Hypothyroidism mein periods heavy aur irregular hoti hain. Hyperthyroidism mein periods bahut kam ya miss ho sakti hain. TSH blood test se confirm hota hai.',
      homeopediaSlug: 'thyroid',
      isAvailable: true,
    },
    {
      _key: 'ldc4',
      title: 'Hormonal Imbalance',
      hindiName: 'Harmon Ki Gadbadi',
      description: 'Estrogen, progesterone, prolactin, ya FSH/LH ka ratio bigad jaane se cycle poori tarah untrack ho jaati hai. Mood swings, breast tenderness, aur bloating common hain.',
      homeopediaSlug: '',
      isAvailable: false,
    },
  ],

  homeCareSteps: [
    {
      _key: 'hcs1',
      stepNumber: 1,
      title: 'Sleep Schedule Regular Karo',
      instruction: 'Raat 10-11 baje sone ki koshish karo — ek fixed time choose karo. Irregular sleep hormonal clock ko directly disturb karti hai.',
      reason: 'Melatonin aur cortisol ke levels normalize hote hain — jo hypothalamus ke hormonal signals ko stabilize karte hain. Sirf 2-3 hafte ki consistent sleep se bhi cycle better hone lag sakti hai.',
    },
    {
      _key: 'hcs2',
      stepNumber: 2,
      title: 'Stress Ko Identify Karo — Ignore Mat Karo',
      instruction: 'Sirf 10-15 minute daily — chahe slow walk ho, deep breathing ho, ya diary likhna ho.',
      reason: 'Stress ka acknowledgement hi cortisol ko kam karne ki taraf pehla step hai. Hypothalamus pe cortisol ka load kam hota hai — GnRH signal better hota hai.',
    },
    {
      _key: 'hcs3',
      stepNumber: 3,
      title: 'Warm Compress Abdomen Pe (Period Ke Waqt)',
      instruction: 'Agar periods aa rahi hain lekin painful ya irregular flow hai to lower abdomen pe warm water bottle rakhein — 15-20 minute.',
      reason: 'Pelvic area mein blood flow better hota hai — cramping aur discomfort kam hoti hai.',
    },
    {
      _key: 'hcs4',
      stepNumber: 4,
      title: 'Hydration Maintain Karo',
      instruction: 'Din mein 8-10 glass paani. Dehydration hormonal processes ko slow karta hai — aksar simple cheez hoti hai jo log ignore karte hain.',
      reason: 'Cellular processes aur hormone transport dono ke liye adequate hydration zaroori hai.',
    },
    {
      _key: 'hcs5',
      stepNumber: 5,
      title: 'Cycle Track Karo — Guess Mat Karo',
      instruction: 'Ek simple calendar ya period tracking app (Flo, Clue) use karo. Dates likhna shuru karo.',
      reason: 'Pattern visible hota hai — trigger identify karna aasaan hota hai. Jab doctor ke paas jaoge to ye data unke liye bahut helpful hoga.',
    },
  ],

  homeopathyAngles: [
    {
      _key: 'ha1',
      angle: 'Individualization',
      content: 'Irregular periods ka naam ek hai — lekin wajah aur presentation har mahila mein alag hoti hai. Kisi ko periods 2 mahine baad aati hain — kaafi heavy. Kisi ko 3-4 mahine miss hoti hain — aur jab aati hain to bahut painful. Kisi ko cycle chhota ho gaya hai — 18-20 din. Homeopathy mein sirf "irregular periods" nahi dekha jaata — aapka pattern, kab kaise badalta hai, kya cheez se better ya worse hoti hai, kitne saal se hai, saath mein kya aur hota hai — ye sab treatment decide karta hai.',
    },
    {
      _key: 'ha2',
      angle: 'Root Cause',
      content: 'Jo mahilayein kaafi saalon se irregular periods se pareshan hain unhe aksar sirf hormone pills diye jaate hain — jo band karne ke baad problem wapas aa jaati hai. Homeopathy ka approach ye hai ki irregular periods sirf ek symptom hai — uski wajah (PCOS, thyroid, stress-driven hormonal shift) ko address karna zaroori hai. Sirf cycle regular dikhaana goal nahi hota — underlying pattern ko sambhalna hota hai. Research limited hai aur results individual hote hain — lekin constitutional approach mein long-term improvement aksar dekhi jaati hai.',
    },
    {
      _key: 'ha3',
      angle: 'Safety',
      content: 'Irregular periods aksar young girls, newly married mahilaon, ya pregnancy plan kar rahi mahilaon mein aati hai — in sab situations mein koi strong hormonal intervention sahi nahi lagti. Homeopathy highly diluted medicines use karta hai — side effects practically nahi hote. Ye conventional treatment ke saath saath bhi safely chal sakti hai. Important: Severe cases mein — jaise 6+ mahine se periods nahi, ya ultrasound mein kuch significant hai — conventional diagnosis aur treatment pehle aani chahiye. Homeopathy complementary role mein hai — replacement nahi.',
    },
  ],

  homeopathyDiseaseLinks: [
    { _key: 'hdl1', title: 'PCOD / PCOS', slug: 'pcod' },
    { _key: 'hdl2', title: 'Thyroid Disorder', slug: 'thyroid' },
  ],

  homeopathyIsFor: [
    'Aap root cause treat karna chahti hain — sirf cycle ko temporarily track pe laana nahi',
    'Aap sustainable, long-term improvement chahti hain — ek mahine mein nahi, lekin lasting',
    'Aap side-effect free option prefer karti hain — specially agar pregnancy planning chal rahi hai ya doosri medicines already chal rahi hain',
  ],

  homeopathyNotFor: [
    '6+ mahine se periods bilkul band hain — pehle gynaecologist se milein, diagnosis ke baad homeopathy saath mein shuru kar sakte hain',
    'Surgical condition confirm hui hai jaise large fibroid — surgery ke baad recovery mein homeopathy help kar sakti hai',
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Irregular periods ka sabse common karan kya hai?',
      answer: 'India mein irregular periods ka sabse common karan PCOD/PCOS aur thyroid disorder hai — followed by stress aur sudden weight change. PCOD mein ovulation regular nahi hoti isliye cycle track nahi rehta. Thyroid mein metabolic rate ka hormones pe seedha asar padta hai — dono conditions mein periods bahut unpredictable ho jaati hain. Agar irregularity 2+ mahine se hai to ek simple blood test (TSH, LH, FSH, prolactin) aur ultrasound se cause bahut hadd tak clear ho jaata hai.',
    },
    {
      _key: 'faq2',
      question: 'Irregular periods kab normal hoti hain aur kab doctor zaroori hai?',
      answer: 'Irregular periods tab "normal" category mein hoti hain jab cycle 21-35 din ke beech ho aur 1-2 mahine se zyada na chali ho. Doctor zaruri hai jab: Cycle 3+ mahine consistently 35+ din ka ho. Periods 3+ mahine skip hoti jaayein (pregnancy rule out karne ke baad bhi). Bahut heavy bleeding ho — ghante mein ek se zyada pad. Irregular periods ke saath weight gain, hair fall, acne, ya fatigue bhi ho. Teenage mein 2-3 saal se zyada irregular ho. Sirf "wait karo" wala approach 3 mahine ke baad sahi nahi rehta.',
    },
    {
      _key: 'faq3',
      question: 'Teenagers mein irregular periods kyun hoti hain?',
      answer: 'Teenage mein pehle 2-3 saal irregular periods hona normal hai — kyunki hormonal axis abhi mature ho rahi hai. Brain, pituitary, aur ovaries ka coordination set hone mein time lagta hai. Lekin ye situations mein doctor zaroori hai: 15 saal tak periods shuru hi na hon. 3 saal se zyada ho gaye periods shuru hue lekin har baar 60+ din ka gap ho. Periods ke saath bahut zyada pain ya heavy bleeding ho. Saath mein acne, weight gain, ya body pe extra hair growth ho — PCOS early sign ho sakta hai. Teenage mein lifestyle factors bhi role nibhate hain — dieting, intense sports, ya stress se cycles disrupt ho sakti hain.',
    },
    {
      _key: 'faq4',
      question: '40 ke baad irregular periods kya perimenopause hai?',
      answer: '40 ke baad irregular periods ho sakti hain do wajah se — perimenopause (menopause se pehle ka phase) ya koi treatable condition jaise thyroid ya hormonal imbalance. Perimenopause mein cycles typically irregular hone lagti hain — kabhi jaldi kabhi der se, kabhi heavy kabhi light. Ye normal transition hai. Lekin 40 mein automatically "perimenopause" assume karna sahi nahi hai. Agar periods 45 saal se pehle 6+ mahine se band ho jaayein, hot flashes aur vaginal dryness ke saath ho, ya suddenly cycle kaafi irregular ho gayi ho — to gynaecologist se milna zaroori hai. Premature Ovarian Insufficiency (POI) rule out karna padega. Homeopathy perimenopause ke symptoms mein madadgar rahi hai — results individual hote hain.',
    },
    {
      _key: 'faq5',
      question: 'Delivery ke baad irregular periods kyun hoti hain?',
      answer: 'Delivery ke baad irregular periods hona expected aur normal hai — specially agar breastfeeding chal rahi hai. Breastfeeding mein prolactin hormone (jo milk banata hai) ovulation suppress karta hai. Isliye periods kai mahine tak nahi aati ya bahut irregular rehti hain. Breastfeeding chhod dene ke baad 1-2 mahine mein cycle wapas normal hone lagti hai. Lekin delivery ke baad irregular periods problematic hain agar: 6 mahine ho gaye breastfeeding nahi kar rahi aur periods wapas regular nahi huin. Delivery ke baad se periods kabhi aai hi nahi. Bahut heavy ya painful periods aa rahi hain. C-section ke baad bhi same timeline follow hoti hai — surgery ka seedha asar periods pe nahi hota.',
    },
    {
      _key: 'faq6',
      question: 'Irregular periods mein kya test karwane chahiye?',
      answer: 'Doctor aksar ye tests recommend karta hai: Blood Tests — TSH (thyroid), LH, FSH, Prolactin, Estradiol (E2), AMH — ye hormonal panel hai. Fasting Insulin aur Blood Sugar — PCOS mein insulin resistance check ke liye. CBC (Complete Blood Count) — anemia rule out karne ke liye. Ultrasound (pelvis) — ovarian cysts, uterine structure dekhne ke liye. Pregnancy Test — agar sexually active hain to pehle ye. Ye sab tests ekdum zaroori nahi — doctor symptoms ke hisaab se decide karta hai kaunsa pehle karna hai. Khud se random tests mat karwao — pehle doctor se milein.',
    },
    {
      _key: 'faq7',
      question: 'Kya homeopathy se irregular periods theek ho sakti hain?',
      answer: 'Homeopathy irregular periods mein madadgar rahi hai — specially jab cause stress, mild PCOD, ya hormonal imbalance ho. Homeopathy ka fayda ye hai ki ye sirf cycle ko track karna nahi — underlying cause address karta hai. Results individual hote hain aur research is area mein limited hai. Realistic expectation ye hai: sahi constitutional treatment se 3-6 mahine mein cycles mein improvement dikhe — frequency, regularity, aur associated symptoms (pain, mood) dono mein. Ye conventional treatment ka replacement nahi hai — specially PCOS ya thyroid jaise diagnosed conditions mein conventional treatment saath mein chale. Homeopathy complementary role mein bahut effectively kaam karta hai.',
    },
    {
      _key: 'faq8',
      question: 'Irregular periods mein kab tak ghar pe reh sakte hain?',
      answer: 'Sirf 1-2 mahine ki irregularity mein — agar koi red flag nahi hai — ghar pe wait karna theek hai. Ghar pe wait karo agar: Cycle 21-35 din ke beech hai. Koi stress ya lifestyle change recent mein hui hai. No heavy bleeding, no severe pain. No other symptoms (acne, hair fall, weight change). Doctor ke paas jaao agar: 2 mahine se zyada se irregular hai. Periods 3+ mahine se miss hain. Upar ke koi symptoms saath mein hain. Ghar pe wait karne ka matlab ye nahi ki cycle track karna bhi chhod do — cycle track karo zaroor.',
    },
    {
      _key: 'faq9',
      question: 'C-section ke baad irregular periods normal hai kya?',
      answer: 'Haan — C-section ke baad irregular periods hona normal hai. C-section khud directly periods pe asar nahi karta lekin delivery ke baad body ko recover karne mein time lagta hai. Hormonal levels — especially estrogen aur progesterone — normal hone mein 2-3 mahine lagte hain. Agar breastfeeding nahi kar rahi hain to typically 6-8 hafte mein pehli periods aati hai. Breastfeeding kar rahi hain to kaafi months tak nahi aati — ye normal hai. Agar 4-5 mahine ho gaye breastfeeding nahi chal rahi aur periods wapas regular nahi huin — tab ek baar doctor se milein.',
    },
    {
      _key: 'faq10',
      question: 'Irregular periods baar baar kyun aati hain — theek kyun nahi hoti?',
      answer: 'Baar baar irregular periods aana aksar ek deeper hormonal pattern ka signal hai jo sirf "ek treatment" se fix nahi hota. Common reasons: Root cause treat nahi hui — sirf hormone pills se cycle regulate kiya, lekin PCOS ya thyroid address nahi ki. Lifestyle factors continue hain — chronic stress, disturbed sleep, weight fluctuation. Treatment incomplete rahi — symptoms gaye to pills band kar di. Baar baar irregular hona body ka ye message hai ki kuch deeply address karna hai — sirf symptom manage nahi. Is wajah se holistic approach — jo root cause address kare — zyada sustainable hota hai.',
    },
    {
      _key: 'faq11',
      question: 'Irregular periods se hamesha ke liye kaise chutkara milega?',
      answer: '"Permanent cure" ka vaada koi bhi system honestly nahi kar sakta — aur koi kare to doubt karo. Jo realistic hai: PCOS ya thyroid ka sahi treatment mila to cycles kaafi regular ho jaati hain — years tak. Stress aur lifestyle address kiya to hormonal axis khud stabilize hoti hai. Consistent treatment (3-6+ mahine) ke baad majority mahilaon mein significant improvement hoti hai. Kuch cases mein — jaise POI ya early menopause — "permanent" regular cycle wapas nahi aati, lekin management se life quality improve hoti hai. Goal "permanent fix" se shift karein "long-term stable management" pe — ye realistic aur achievable hai.',
    },
    {
      _key: 'faq12',
      question: 'Irregular periods mein chai ya garam paani peena theek hai?',
      answer: 'Chai ya garam paani directly irregular periods cause nahi karta — aur moderate chai peene se nahi rokna chahiye. Lekin kuch cheezein dhyan mein rakhein: Excessive caffeine (4+ cups chai/coffee daily) se cortisol level badh sakta hai — jo hormones pe asar karta hai, moderate rakhein. Periods ke waqt garam paani ya warm herbal tea (ginger tea, chamomile) comfort de sakti hai — cramping mein help hoti hai. "Garam cheezein periods late karti hain" ya "irregular karti hain" — ye myth hai. Diet directly cycle timing nahi badal sakti itni simply.',
    },
  ],

  relatedSymptoms: [
    { _key: 'rs1', name: 'Heavy Periods (Menorrhagia)', hindiName: 'Zyada Bleeding', slug: 'heavy-periods' },
    { _key: 'rs2', name: 'Painful Periods (Dysmenorrhea)', hindiName: 'Dardnaak Mahavari', slug: 'painful-periods' },
    { _key: 'rs3', name: 'Missed Periods (Amenorrhea)', hindiName: 'Mahavari Band Hona', slug: 'missed-periods' },
    { _key: 'rs4', name: 'Bloating', hindiName: 'Pet Phoolna', slug: 'bloating' },
  ],

  sources: [
    { _key: 'src1', title: 'WHO — Menstrual Health: A Global Landscape', year: '2023', url: 'https://www.who.int/publications/i/item/9789240062115' },
    { _key: 'src2', title: 'Mayo Clinic — Irregular Periods: Causes, Symptoms & Treatment', year: '2024', url: 'https://www.mayoclinic.org/symptoms/irregular-periods/' },
    { _key: 'src3', title: 'NCBI / PubMed — Menstrual Cycle Irregularities and Their Association with PCOS, Thyroid, and Stress', year: '2023', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
    { _key: 'src4', title: 'NHS UK — Irregular Periods: Patient Information', year: '2023', url: 'https://www.nhs.uk/conditions/irregular-periods/' },
  ],

  quickFacts: [
    'Ek normal menstrual cycle 21-35 din ka hota hai. Isse bahar jaana consistently = irregular.',
    'India mein PCOS — irregular periods ka ek major cause — reproductive age ki 1 mein se 5 mahila ko affect karta hai.',
    'Kab doctor zaruri: 3 consecutive cycles skip hone pe, ya 2+ mahine consistently 35+ din ka cycle hone pe.',
  ],

  reviewDate: '2026-05',
}

async function seed() {
  console.log('🌱 Seeding Irregular Periods symptom page...')
  await client.createOrReplace(doc)
  console.log('✅ Symptom seeded — homeopedia.in/symptoms/irregular-periods')
}

seed().catch(console.error)
