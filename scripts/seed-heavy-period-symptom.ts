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
  _id: 'symptom-heavy-period',
  _type: 'symptom',
  title: 'Heavy Period (Zyada Bleeding)',
  hindiName: 'Zyada Maasik Dharm / Havy Bleeding',
  slug: { _type: 'slug', current: 'heavy-period' },
  bodySystem: 'Women\'s Health',
  shortDescription: 'Har ghante pad bheeg jaana, bade clots, 8 din se zyada bleeding — heavy period (menorrhagia) ka karan PCOD, fibroids, thyroid ya hormonal imbalance ho sakta hai.',
  metaTitle: 'Heavy Period in Hindi — Karan, Ilaaj aur Homeopathy | HomeoPedia.in',
  metaDescription: 'Heavy period (zyada bleeding) ke karan, severity aur ghar pe safe steps — simple Hinglish mein. Verified info, Dr. Shadab reviewed.',
  reviewDate: 'May 2026',

  heroText: `Har mahine period aata hai — lekin kuch logon ke liye ye sirf "period" nahi hota. Itna zyada flow hota hai ki ek ghante mein pad bhi full ho jaata hai, thakaan itni hoti hai ki uthna bhi mushkil lagta hai, aur zindagi thodi der ke liye ruk jaati hai.

Agar aapko bhi aisa lagta hai ki period ke din zyada se zyada mushkil hote ja rahe hain — toh ye sirf aapke saath nahi ho raha. Heavy period (Medically: Menorrhagia) India mein bahut common complaint hai, aur iske peeche kaafi baar ek clear wajah hoti hai jo treat ki ja sakti hai.

WHO ke mutabik, duniya bhar mein heavy menstrual bleeding reproductive age ki mahilaon mein ek bahut common gynecological concern hai — aur India mein anemia ke cases mein iska bada role hai.

Ye page aapko batayega: aapka case serious hai kya, ghar pe kya karna chahiye, aur agli step kya hai.`,

  severityScale: {
    level1: {
      label: 'Ghar Pe Manage Karo',
      signs: [
        'Period 5-7 din ka hai, flow thoda zyada hai lekin manage ho raha hai normal pad se',
        'Har 2-3 ghante mein pad change karna padta hai — baar baar nahi',
        'Thodi thakaan hai lekin kaam-kaj normal chal raha hai',
        'Koi clot nahi hai ya bahut chhota (coin se chhota) hai',
        'Yahi pattern pichle kuch mahino se chal raha hai, badh nahi raha',
      ],
    },
    level2: {
      label: 'Is Hafte Doctor Se Milein',
      signs: [
        'Har ghante mein pad bheeg jaata hai — do ghante se kam mein',
        'Raat ko bhi baar baar uthna padta hai pad change ke liye',
        'Clots aa rahe hain jo size mein 50 paise ke sikke se bade hain',
        'Period 8 din se zyada chal raha hai',
        'Thakaan itni zyada hai ki chakkar aa rahe hain',
        'Pichle kuch mahino mein flow dheere dheere badh raha hai',
      ],
    },
    level3: {
      label: 'Turant Hospital Jaao',
      signs: [
        'Har 30 minute mein pad bheeg raha hai — kuch ghanton se',
        'Saath mein tez bukhaar (101°F+) hai — infection ka sign',
        'Pregnancy possible thi — ye miscarriage ya ectopic pregnancy ho sakta hai',
        'Itni kamzori hai ki khade hone par behosh hone jaisi feeling',
        'Saath mein severe pet dard jo kisi bhi position mein kam nahi ho raha',
      ],
    },
  },

  timeline: [
    {
      duration: 'Pehli Baar — Ya Pichle 1-2 Cycle Se',
      advice: 'Body mein koi change ho sakta hai — hormones, thyroid, ya stress. Ek cycle dekho agar Level 1 hai. Level 2 signs hain to is hafte doctor. Agar aap 40+ hain ya perimenopause mein hain — ek baar check zaroor karwao.',
    },
    {
      duration: 'Pichle 3-6 Mahine Se',
      advice: 'Ye pattern establish ho raha hai. Body kuch signal de rahi hai — fibroids, hormonal imbalance, ya koi aur wajah ho sakti hai. Ye wait karne ka time nahi hai — doctor appointment lo is hafte. Anemia check karna zaroori hai agar thakaan bhi hai.',
    },
    {
      duration: 'Saalon Se',
      advice: 'Agar ye purani problem hai aur aap iske saath ji rahi hain — ye normal nahi hai. "Meri ammi ko bhi hota tha" iska matlab ye nahi ki treat nahi ho sakta. Underlying cause find karke treat karna zaroori hai. Doctor se milein, complete evaluation karwain.',
    },
  ],

  lifestyleCauses: [
    {
      title: 'Stress aur Sleep Deprivation',
      recognition: 'Flow khaaskar un mahino mein zyada hota hai jab kaam ka pressure zyada tha ya neend kharaab thi? Ye stress-related hormonal disruption ka pattern hai.',
      description: 'Zyada stress hone par body cortisol naam ka hormone zyada banati hai. Cortisol badhne se estrogen aur progesterone ka balance bigad jaata hai. Jab progesterone kam hota hai, uterus ki lining zyada badhti hai — aur period mein ye zyada tissue shed hoti hai, jisse flow heavy hota hai.',
    },
    {
      title: 'Weight Changes — Sudden Gain Ya Loss',
      recognition: 'Weight change ke baad hi periods zyada huye hain? Pehle normal the? Ye weight-related hormonal imbalance ka classic sign hai.',
      description: 'Body fat estrogen store karta hai. Agar weight achanak badha ya ghata — estrogen level mein disruption hoti hai. Ye uterine lining ko affect karta hai. Zyada weight hone par bhi aur zyada kam hone par bhi — dono mein heavy periods aa sakte hain.',
    },
    {
      title: 'Thyroid Underactivity (Hypothyroidism)',
      recognition: 'Saath mein thakaan, thand zyada lagna, baal girna, weight gain? Ye hypothyroidism ke saath aane wale signs hain — TSH test se confirm hota hai.',
      description: 'Thyroid gland ek hormonal regulator hai. Hypothyroidism mein thyroid hormones kam bante hain — iska seedha asar menstrual cycle pe padta hai. Uterus ki lining theek se shed nahi hoti, flow irregular aur heavy ho jaata hai.',
    },
    {
      title: 'Perimenopause (40-50 Ki Umar Ke Aaspaas)',
      recognition: '40+ umar, periods ka pattern badal raha hai — kabhi jaldi kabhi late, kabhi bahut heavy kabhi normal? Ye perimenopause ka classic hormonal fluctuation pattern hai.',
      description: 'Menopause se pehle ke 5-10 saalon mein ovarian function irregular hone lagta hai. Kuch cycles mein ovulation nahi hoti — is mein progesterone nahi banta. Bina progesterone ke estrogen akela uterine lining badhata rehta hai — aur period mein zyada bleeding hoti hai.',
    },
  ],

  medicalCauses: [
    {
      diseaseName: 'Uterine Fibroids (Rasoli)',
      diseaseHindiName: 'Bachi Mein Ganth / Rasoli',
      diseaseSlug: '',
      isAvailable: false,
      description: 'Fibroids uterus mein benign (non-cancerous) growths hain. Ye uterine lining ka surface area badha dete hain — jisse period mein zyada tissue shed hoti hai aur heavy bleeding hoti hai. Saath mein clots bhi aate hain. Pelvic pressure bhi rehta hai.',
      recognition: 'Pet mein heaviness ya pressure feel hona, baar baar urination, periods mein bade bade clots — ultrasound se confirm hota hai.',
    },
    {
      diseaseName: 'PCOD / PCOS',
      diseaseHindiName: 'Andashayon Mein Cysts / PCOD',
      diseaseSlug: '',
      isAvailable: false,
      description: 'PCOD mein ovulation irregular hoti hai — kuch cycles mein hoti hi nahi. Jab ovulation nahi hoti, progesterone nahi banta. Uterine lining zyada der tak badhti rehti hai aur phir ek saath shed hoti hai — heavy aur irregular periods aate hain.',
      recognition: 'Irregular periods, weight gain, face ya body pe zyada baal, pimples — ye PCOD ke signs hain. Ultrasound + blood test se confirm hota hai.',
    },
    {
      diseaseName: 'Endometriosis',
      diseaseHindiName: 'Bachi Ke Andar Ki Parat Ka Bahar Banana',
      diseaseSlug: '',
      isAvailable: false,
      description: 'Uterus ki andar ki lining (endometrium) bahar bhi grow karne lagti hai — ovaries, tubes ke aaspaas. Ye tissue period ke time pe bhi bleeding karta hai — lekin bahar nahi nikal sakta. Isse inflammation hoti hai aur uterine bleeding bhi zyada ho jaati hai.',
      recognition: 'Bahut tez cramps jo period se 2-3 din pehle shuru hote hain, intercourse mein dard, periods ke baad bhi pelvic pain — ye endometriosis ke specific signs hain.',
    },
    {
      diseaseName: 'Adenomyosis',
      diseaseHindiName: 'Uterus Ki Deewar Mein Lining Ka Ghusna',
      diseaseSlug: '',
      isAvailable: false,
      description: 'Endometrial tissue uterus ki muscle wall ke andar grow karne lagta hai. Isse uterus bada hota hai aur period ke time zyada blood aata hai. Uterus mein khoon aur tissue dono zyada shed hote hain. Dard bhi tez hota hai.',
      recognition: 'Period mein dard jo paracetamol se kam nahi hota, uterus thoda bada lagta hai press karne pe, 35-50 saal ki umar mein zyada hota hai.',
    },
    {
      diseaseName: 'Hypothyroidism',
      diseaseHindiName: 'Thyroid Ki Kami',
      diseaseSlug: 'thyroid',
      isAvailable: true,
      description: 'Thyroid hormone menstrual cycle ko regulate karta hai. Jab thyroid underactive hota hai, uterine lining theek se shed nahi hoti aur flow heavy aur irregular ho jaata hai. Hypothyroidism heavy menstrual bleeding ke top treatable causes mein se ek hai.',
      recognition: 'Heavy period ke saath thakaan, thand zyada lagna, baal girna, ya weight gain — TSH test se confirm karo.',
    },
  ],

  redFlags: [
    'Uterine Cancer ya Endometrial Hyperplasia — agar 45+ umar hai aur periods achanak heavy ho gaye hain, beech mein bhi spotting ho rahi hai, ya menopause ke baad bleeding — turant gynecologist se milein.',
    'Pregnancy Complications — agar period late tha aur ab bahut heavy aa rahi hai, ya clots zyada hain — miscarriage ya ectopic pregnancy ho sakti hai. Turant hospital.',
    'Platelet Disorders — agar body mein kaheen bhi choti chot pe zyada khoon aata hai, ya easily bruise ho jaati ho — blood disorder ka sign. Blood test zaroori hai.',
  ],

  homeSteps: [
    {
      step: 'Hips Ke Neeche Tak Pair Thoda Upar Rakhein',
      reason: 'Legs ko slight elevation dene se pelvic area mein blood pressure thoda kam hota hai — cramping mein temporary relief milti hai. Ek pillow pair ke neeche rakh lo.',
    },
    {
      step: 'Garam Paani Ki Bottle Ya Warm Compress Pet Pe Rakhein',
      reason: 'Heat uterine muscles ko relax karti hai — cramping aur discomfort mein relief milti hai. Hot water bottle ko kapde mein lapetkar pait pe rakho — seedha skin pe nahi.',
    },
    {
      step: 'Paani Zyada Piyo — Har Ghante Ek Glass',
      reason: 'Zyada bleeding mein body fluids lose karti hai. Hydration se chakkar aur kamzori kam hoti hai. Paani aur nariyal paani dono achhe hain.',
    },
    {
      step: 'Heavy Flow Ke Din Zyada Chal-Phir Mat — Aaraam Karo',
      reason: 'Physically active rehne se temporarily flow thoda zyada ho sakta hai. Rest se body ka energy conservation hota hai. Light kaam theek hai, vigorous exercise ke din mein baad mein.',
    },
    {
      step: 'Iron-Rich Khaana Khao — Khana Chhodo Mat',
      reason: 'Heavy bleeding mein iron loss hoti hai. Khana nahi khaoge to kamzori aur badhegi. Regular meals se blood sugar stable rehti hai aur thakaan thodi kam hoti hai.',
    },
  ],

  homeopathyAngle1: 'Heavy period ka naam ek hai — lekin har aurat ka heavy period alag hota hai. Kisi ko sirf zyada flow hota hai bina dard ke, kisi ko clots aate hain, kisi ko dard itna zyada hota hai ki bed se nahi uth sakti. Kisi ko raat ko zyada hota hai, kisi ko pehle din mein. Homeopathy mein ye saari cheezein matter karti hain — aapka specific pattern, kab badhta hai, kya se better hota hai — ye sab milake treatment decide hota hai.',

  homeopathyAngle2: 'Baar baar heavy period hona — aur har baar sirf pain reliever lena — problem solve nahi karta. Homeopathy ka approach ye hai ki ye zyada bleeding kyun ho rahi hai — hormonal imbalance hai, uterine issue hai, ya koi aur wajah — wahan kaam karna. Waqt ke saath flow ka pattern theek hone lagta hai. Results individual hote hain, aur chronic cases mein research limited hai — lekin clinical experience mein regular evaluation ke saath ye approach useful raha hai.',

  homeopathyAngle3: 'Reproductive years mein, perimenopause mein, ya jab kai aur dwaiyaan chal rahi hon — homeopathy ek safe complementary option hai. Adolescent girls mein aur breastfeeding mothers mein bhi carefully use kiya ja sakta hai. Lekin ek baat clearly samjho: severe bleeding, anemia, ya koi underlying condition hai to conventional evaluation PEHLE zaroori hai — homeopathy uss ke saath saath chal sakti hai, uski jagah nahi.',

  homeopathyIsFor: [
    'Aap root cause treat karna chahti hain — sirf har mahine bleeding band karne ka jugaad nahi dhundh rahi',
    'Aapka heavy period hormonal imbalance ya PCOD se linked hai aur aap long-term pattern theek karna chahti hain',
    'Aap conventional treatment ke saath ek safe complementary approach add karna chahti hain',
    'Aap perimenopause mein hain aur natural approach prefer karti hain',
  ],

  homeopathyNotFor: [
    'Is waqt itna zyada khoon ja raha hai ki weakness aa rahi hai — pehle emergency care lein',
    'Fibroids ya endometriosis ka surgical treatment decide ho chuka hai — surgery ke baad recovery mein homeopathy saath chal sakti hai',
    'Hemoglobin bahut gir chuka hai — iron supplementation conventional treatment ke saath zaroori hai, pehle woh lo',
  ],

  homeopathyDiseaseLinks: [
    { diseaseName: 'Thyroid (Hypothyroidism)', diseaseSlug: 'thyroid', diseaseHindiName: 'Thyroid Ki Kami' },
  ],

  linkedDiseaseCards: [
    {
      diseaseName: 'Uterine Fibroids',
      diseaseHindiName: 'Bachi Mein Ganth / Rasoli',
      diseaseSlug: '',
      isAvailable: false,
    },
    {
      diseaseName: 'PCOD / PCOS',
      diseaseHindiName: 'Andashayon Mein Cysts',
      diseaseSlug: '',
      isAvailable: false,
    },
    {
      diseaseName: 'Endometriosis',
      diseaseHindiName: 'Bachi Ke Andar Ki Parat Ka Bahar Banana',
      diseaseSlug: '',
      isAvailable: false,
    },
    {
      diseaseName: 'Adenomyosis',
      diseaseHindiName: 'Uterus Ki Deewar Mein Lining Ka Ghusna',
      diseaseSlug: '',
      isAvailable: false,
    },
    {
      diseaseName: 'Hypothyroidism',
      diseaseHindiName: 'Thyroid Ki Kami',
      diseaseSlug: 'thyroid',
      isAvailable: true,
    },
  ],

  faqs: [
    {
      question: 'Heavy period matlab exactly kitna zyada — kaise pata chalega?',
      answer: 'Medically "heavy period" tab hota hai jab ek cycle mein 80ml se zyada blood ja raha ho — ya practical terms mein: har ghante mein pad bheeg jaata hai do ghante se kam mein.\n\nAgar raat ko bhi baar baar uthna padta hai, agar bade clots aa rahe hain (50 paise se bade), ya period 8 din se zyada chal raha hai — ye heavy period hai.\n\nAgar sirf flow thoda zyada lagta hai lekin pad 2-3 ghante mein change karna padta hai — ye borderline hai, monitor karo. Agar chakkar aa rahe hain, bahut thakaan hai, ya pattern worse ho raha hai — doctor se milein.',
    },
    {
      question: 'Heavy period kyun hota hai — sabse common wajah kya hai?',
      answer: 'Heavy period ke peeche ek nahi kaafi saari wajahein ho sakti hain — aur yahi confusion ki wajah hai. Sabse zyada common causes hain:\n- Hormonal imbalance (estrogen-progesterone mein garbad)\n- PCOD / PCOS\n- Uterine fibroids (rasoli)\n- Thyroid underactivity (hypothyroidism)\n- Perimenopause (40+ umar mein)\n- Endometriosis\n\nIndia mein ek aur wajah jo ignore hoti hai wo hai stress aur neend ki kami — ye directly hormones affect karte hain. Diagnosis ke bina sirf "heavy period hai" bolna kaafi nahi — wajah pata karna zaroori hai, tabhi sahi treatment ho sakti hai.',
    },
    {
      question: 'Heavy period mein clots kyun aate hain?',
      answer: 'Period mein chote chote clots — coin size ke — normal hain. Ye isliye bante hain kyunki body blood ko jaldi bahar nikalna chahti hai aur coagulation (jamne ki process) complete nahi hoti.\n\nLekin bade clots — 50 paise ya usse bade — ab normal nahi hain. Bade clots aksar fibroids, adenomyosis, ya endometriosis ka sign hain jahan uterine lining zyada moti ho gayi hoti hai.\n\nAgar har cycle mein bade clots aa rahe hain — ultrasound zaroor karwao.',
    },
    {
      question: 'Heavy period kitne din tak rehna chahiye?',
      answer: 'Normal period 3-7 din hota hai. 8 din se zyada chal raha hai aur flow heavy bhi hai — ye evaluate karna chahiye.\n\nSirf ek do din zyada hona aur flow thoda zyada hona — borderline hai, ek cycle observe karo. Pattern consistently zyada ho raha hai — is hafte gynecologist.\n\nTeen din ke andar bahut heavy flow aur phir normal ya khatam — ye bhi hormonal issue ka sign ho sakta hai. Agar heavy period ki wajah thyroid hai — treat hone ke baad duration bhi normal hone lagta hai.',
    },
    {
      question: 'Heavy period se anemia ho sakta hai kya?',
      answer: 'Haan — aur ye India mein bahut common problem hai jo under-diagnosed hai. Har mahine zyada khoon jane se iron bhi zyada jaata hai. Agar body utna iron khaane se nahi bana paa rahi jitna ja raha hai — hemoglobin girne lagta hai, anemia hoti hai.\n\nSigns: bahut zyada thakaan, saans phoolna, chakkar, concentration mein takleef, rang thoda peela lagna.\n\nAgar aapko heavy period ke saath ye sab bhi hota hai — blood test (CBC + serum ferritin) zaroor karwao. Iron supplementation ke saath heavy period ki wajah bhi treat karna zaroori hai — sirf iron lene se problem solve nahi hogi.',
    },
    {
      question: 'Teenagers mein heavy period — kya normal hai?',
      answer: 'Periods shuru hone ke pehle 1-2 saal mein irregular aur thoda heavy hona normal hai — cycle establish ho rahi hoti hai.\n\nLekin agar har ghante pad bheeg raha hai, school miss ho raha hai, ya bahut zyada thakaan hai — ye normal nahi hai.\n\nTeens mein heavy period ke specific causes hain: Von Willebrand disease (clotting problem — blood test se pata chalta hai), thyroid issues, ya hormonal imbalance.\n\n"Pehle kuch saal aisa hota hai" bolke ignore mat karo — ek gynecologist se milein. Homeopathy teens ke liye safe complementary option hai.',
    },
    {
      question: 'Pregnancy ke baad ya C-section ke baad heavy period — kya karna chahiye?',
      answer: 'Delivery ke baad pehle 2-3 periods thoda zyada hona common hai — body recovery mein hai.\n\nLekin agar har ghante pad bheeg raha hai, clots bade hain, ya 3 mahine baad bhi pattern same hai — ye evaluate karna chahiye. C-section ke baad uterine wall mein scar tissue ban sakta hai jo bleeding affect kar sakta hai. Thyroid bhi postpartum affect hota hai aksar.\n\nEk OB-GYN se milna zaroori hai. Breastfeeding chal rahi hai to bhi homeopathy safely use ho sakti hai — lekin cause pata karna pehla step hai.',
    },
    {
      question: 'Perimenopause mein heavy period — normal hai kya?',
      answer: '40-50 ki umar mein periods ka heavy ya irregular hona perimenopause ka ek common feature hai — lekin "common" ka matlab "harmless" nahi hota.\n\nIs umar mein fibroids, polyps, ya endometrial changes bhi possible hain — jo similar symptoms dete hain. Agar aap 40+ hain aur periods zyada heavy hue hain — ek baar gynecological evaluation zaroor karwao.\n\nUltrasound + endometrial assessment rule out karega ki koi serious issue toh nahi. Perimenopause ki heavy bleeding mein homeopathy ka constitutional approach helpful raha hai — results individual hote hain.',
    },
    {
      question: 'Stress se heavy period ho sakta hai?',
      answer: 'Haan — ye connection real hai. Chronic stress cortisol badhata hai, jo progesterone kam karta hai. Jab progesterone kam hota hai, uterine lining zyada grow karti hai aur period heavy ho jaata hai. Ye sirf "dimag ki baat" nahi — ye actual hormonal mechanism hai.\n\nExams ke waqt, job pressure mein, ya kisi emotional trauma ke baad periods zyada heavy hona is wajah se hota hai.\n\nLekin agar stress kam bhi ho aur period heavy rahe — toh aur wajah bhi dekh li jaani chahiye.',
    },
    {
      question: 'Kya homeopathy heavy period mein kaam karta hai?',
      answer: 'Ye depend karta hai cause pe — aur yahi honest jawaab hai.\n\nHormonal imbalance aur PCOD se linked heavy periods mein homeopathy ka constitutional approach useful raha hai — clinical experience mein cycle ka pattern theek hone lagta hai. Thyroid-related heavy bleeding mein conventional treatment ke saath saath homeopathy complementary role mein help kar sakti hai.\n\nStructural issues jaise fibroids ya adenomyosis mein — size aur severity matter karti hai. Chhoti growths mein conservative approach ke saath homeopathy saath chal sakti hai. Badi fibroids ya surgical cases mein conventional route zaroori hai.\n\n"Permanent cure" ka vaada koi bhi system honestly nahi kar sakta — jo realistic hai: sahi diagnosis ke baad homeopathic constitutional treatment se cycle ka pattern improve hona.',
    },
    {
      question: 'Heavy period mein kaunsa test karwana chahiye?',
      answer: 'Doctor ye tests suggest kar sakti hain:\n- CBC (Complete Blood Count) — anemia check karne ke liye\n- Serum Ferritin — iron stores check karne ke liye\n- TSH (Thyroid test) — thyroid rule out karne ke liye\n- Hormonal panel — LH, FSH, estrogen, progesterone\n- Pelvic Ultrasound — fibroids, PCOD, endometriosis ke liye\n- Sonohysterography ya Hysteroscopy — uterine lining ke liye agar ultrasound mein kuch dikh raha ho\n\nPehle 4 tests basic screening hain — inhe pehle karwao. Ultrasound agle step mein. Cause pata chalega to treatment clear ho jaayegi.',
    },
    {
      question: 'Heavy period mein kya khayein — khaane se koi farak padta hai kya?',
      answer: 'Honest jawaab ye hai ki heavy period ka cause khaane se directly nahi badalta, lekin khaana body ko support karta hai.\n\nIron-rich khaana (palak, chane, rajma, anaar) anemia se bachata hai. Vitamin C ke saath iron better absorb hota hai. Tea aur coffee period ke din thodi kam lo — ye iron absorption reduce karta hai. Processed aur junk food se inflammation badh sakti hai jo cramping badha sakti hai.\n\nLekin diet se heavy period "theek" nahi hoga — cause treat karna zaroori hai. Diet is journey mein support hai, solution nahi.',
    },
  ],

  quickFacts: [
    'Heavy period (Menorrhagia) tab hota hai jab ek cycle mein 80ml se zyada blood aata hai — ya har ghante pad change karna padta ho.',
    'Heavy menstrual bleeding India mein reproductive age women mein anemia ka ek major contributing factor hai.',
    'Agar har ghante pad bheeg raha hai, clots bade hain, ya chakkar aa rahe hain — turant gynecologist se milein.',
  ],

  relatedSymptoms: [
    { title: 'Period Mein Dard (Dysmenorrhea)', slug: 'period-pain' },
    { title: 'Irregular Periods', slug: 'irregular-periods' },
    { title: 'PCOD Ke Lakshan', slug: 'pcod-symptoms' },
    { title: 'Weakness & Fatigue (Thakaan)', slug: 'weakness-fatigue' },
  ],

  sources: [
    { title: 'WHO — Menstrual Health (2023)', url: 'https://www.who.int/news-room/fact-sheets/detail/menstrual-health' },
    { title: 'Mayo Clinic — Menorrhagia (Heavy Menstrual Bleeding): Symptoms & Causes (2024)', url: 'https://www.mayoclinic.org/diseases-conditions/menorrhagia/symptoms-causes/syc-20352829' },
    { title: 'NCBI / NIH — Heavy Menstrual Bleeding (HMB): A Practical Guide (2021)', url: 'https://www.ncbi.nlm.nih.gov/books/NBK279294/' },
    { title: 'NHS UK — Heavy Periods: Causes, Diagnosis and Treatment (2023)', url: 'https://www.nhs.uk/conditions/heavy-periods/' },
  ],
}

async function seed() {
  console.log('Seeding heavy-period symptom...')
  const result = await client.createOrReplace(symptom)
  console.log('Done:', result._id)
}

seed().catch(console.error)
