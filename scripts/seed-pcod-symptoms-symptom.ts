import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'symptom-pcod-symptoms',
  _type: 'symptom',

  name: 'PCOD / PCOS Symptoms',
  hindiName: 'PCOD / PCOS ke Lakshan',
  hinglishName: 'PCOD ke Symptoms',
  slug: { _type: 'slug', current: 'pcod-symptoms' },
  bodySystem: "Women's",

  metaTitle: 'PCOD Symptoms in Hindi — Lakshan, Karan aur Homeopathy',
  metaDescription: 'PCOD ke lakshan (PCOD symptoms) ke karan, severity aur ghar pe safe steps — simple Hinglish mein. Verified info, Dr. Shadab reviewed.',
  publishedAt: new Date('2026-05-19').toISOString(),

  whatIsThis: `Periods irregular ho gaye hain — kabhi aate hain, kabhi nahi. Chehra, chin ya chest pe achanak baal aa gaye hain. Weight bina kisi wajah ke badh rahi hai. Aur doctor ne bola — "PCOD hai." Ab ye page aapko 2 minute mein batayega ki ye hota kya hai, serious hai ya nahi, aur aage kya karna chahiye.

PCOD yaani Polycystic Ovarian Disease ek hormonal condition hai jisme ovaries mein chhote chhote cysts ban jaate hain aur hormones ka balance bigad jaata hai. PCOS (Polycystic Ovarian Syndrome) is ka thoda advanced version hai — dono related hain, aur aksar ek hi condition ke do naam samjhe jaate hain.

Ye aaj ke waqt mein India mein bahut common ho gaya hai. Aap akeli nahi hain — aur ye samajhna zaruri hai ki ye manage kiya ja sakta hai.`,

  prevalence: 'India mein reproductive age ki 1 se 5 mein se 1 mahila ko PCOD/PCOS hai — ye WHO ke data ke mutabiq duniya ki sabse common hormonal disorder hai women mein.\nSource: WHO | World Health Organization — PCOS Factsheet | 2023',

  severityLevels: [
    {
      _key: 'sl1',
      level: 'green',
      title: 'Level 1 — Ghar Pe Manage Karo',
      signs: [
        'Periods sirf thodi der (2-3 din) late hain — aur ye pehli baar ho raha hai',
        'Chehra ya chin pe thode extra baal aa rahe hain lekin koi aur takleef nahi',
        'Periods thode irregular hain — lekin completely band nahi hue',
      ],
    },
    {
      _key: 'sl2',
      level: 'yellow',
      title: 'Level 2 — Is Hafte Doctor Se Milein',
      signs: [
        'Periods 2 mahine ya zyada se band hain',
        'Achanak bahut zyada weight badh rahi hai — bina kisi obvious wajah ke',
        'Chehra/chest pe bahut zyada baal aa rahe hain — tezi se',
        'Pimples jo theek hi nahi hote — mahino se',
      ],
    },
    {
      _key: 'sl3',
      level: 'red',
      title: 'Level 3 — Turant Hospital Jaao',
      signs: [
        'Pet mein achanak ek taraf bahut tej dard — cyst rupture ho sakti hai',
        '6 mahine ya zyada se periods bilkul nahi — aur pregnancy test negative hai',
        'Pregnancy try kar rahi hain 1 saal se aur nahi ho rahi — specialist zaroori hai ab',
      ],
    },
  ],

  timeline: [
    {
      _key: 'tl1',
      duration: '1 se 3 Mahine',
      label: 'Nayi Takleef',
      advice: 'Agar pehli baar periods irregular hue hain ya baal thode badhe hain — ye stress, sudden weight change ya thyroid ki wajah se bhi ho sakta hai. Doctor se checkup zarur karwao — PCOD confirm karna pehla step hai. Agar teen mahine mein better nahi hua to Level 2 mein aao.',
    },
    {
      _key: 'tl2',
      duration: '3 Mahine se 1 Saal',
      label: 'Chalti Aa Rahi',
      advice: 'Ab ye zaruri hai ki diagnosis clear ho. Sirf "PCOD hai" sunna enough nahi — actual hormone levels check karwana, ultrasound karna, aur long-term plan banana zaruri hai. Specialist yaani gynecologist ya endocrinologist se milna is stage mein smart decision hai.',
    },
    {
      _key: 'tl3',
      duration: '1 Saal Ya Zyada',
      label: 'Purani Problem',
      advice: 'Ye chronic condition hai — ek baar ki dawai se khatam nahi hogi. Root cause pe kaam karna zaroori hai: lifestyle, hormones, aur agar pregnancy chahiye to wo bhi plan karna. Homeopathy is stage mein ek sustainable, long-term approach ke roop mein consider ki ja sakti hai.',
    },
  ],

  lifestyleCauses: [
    {
      _key: 'lc1',
      title: 'Insulin Resistance (Sugar Processing Problem)',
      mechanism: 'Jab body ka insulin sahi kaam nahi karta, to blood mein sugar aur insulin dono badhte hain. Ye extra insulin ovaries ko signal deta hai zyada androgens (male hormones) banane ka. Ye androgens hi periods irregular karte hain, baal badhate hain aur acne laate hain. 70-80% PCOD patients mein insulin resistance hoti hai — chahe weight normal ho.',
      patientSigns: 'Khaane ke baad thakaan aati hai. Meetha khaane ki craving bahut zyada rehti hai. Weight petke aaspaas badhti hai.',
    },
    {
      _key: 'lc2',
      title: 'Chronic Stress (Lambe Waqt Ka Tanaav)',
      mechanism: 'Stress hormone cortisol ka level badh jaata hai. Cortisol directly sex hormones ke balance ko bigaadta hai — LH aur FSH (ovulation ke liye zaruri hormones) ki ratio gadbad ho jaati hai. Ovulation rukne lagta hai, periods late hone lagte hain.',
      patientSigns: 'Symptoms waqt ke saath aaye hain — aur us waqt life mein koi bada stress bhi tha (exam, breakup, job, relocation).',
    },
    {
      _key: 'lc3',
      title: 'Sedentary Lifestyle + Processed Food',
      mechanism: 'Zyada baithna aur ultra-processed, high-sugar khana insulin resistance ko aur badhata hai. Ye ek cycle hai — insulin resistance → androgen → weight gain → aur zyada insulin resistance. Ek cheez doosri ko trigger karti rehti hai.',
      patientSigns: 'Symptoms slowly aaye hain — saalon mein. Lifestyle pehle se sedentary rahi hai.',
    },
    {
      _key: 'lc4',
      title: 'Family History (Genetic Predisposition)',
      mechanism: 'Agar maa, behen, mausi ya nani ko PCOD tha to genetic risk rahta hai. Genes kuch specific receptors aur hormone pathways ko predispose karte hain.',
      patientSigns: 'Family mein kisi ko PCOD/PCOS ya diabetes hai. Ya early menopause ka history hai family mein.',
    },
  ],

  redFlags: [
    'Ovarian Cyst Rupture — agar achanak ek taraf pet mein bahut tej dard ho, nausea ho, bukhaar ho to turant emergency.',
    'Endometrial Hyperplasia — agar periods bahut zyada time tak band rahe aur phir bahut heavy bleeding ho — ye lining ke abnormal thickening ka sign ho sakta hai, turant doctor.',
    'PCOD + Severe Insulin Resistance — Type 2 Diabetes Risk — agar fasting sugar 100 se zyada aaye, ya HbA1c 5.7 se upar — diabetes prevention ke liye turant endocrinologist.',
  ],

  linkedDiseaseCards: [
    {
      _key: 'ldc1',
      title: 'PCOD',
      hindiName: 'Ovaries Mein Chhoti Ganthe',
      description: 'PCOD mein ovaries mein multiple small follicles ban jaate hain jo poori tarah mature nahi hote. Is wajah se periods irregular, skip ya heavy hote hain.',
      homeopediaSlug: 'pcod',
      isAvailable: true,
    },
    {
      _key: 'ldc2',
      title: 'PCOS',
      hindiName: 'Ovaries Ka Hormonal Disorder',
      description: 'PCOS mein sirf cysts nahi, balki hormonal symptoms (excess androgens) bhi clearly present hote hain. Blood test mein LH:FSH ratio abnormal aata hai, testosterone elevated hota hai.',
      homeopediaSlug: 'pcod',
      isAvailable: true,
    },
    {
      _key: 'ldc3',
      title: 'Thyroid Disorder',
      hindiName: 'Thyroid Gland Ki Kamzori',
      description: 'Thyroid mein periods irregular, weight gain, thakaan aur baalon ka jharna PCOD jaisa hi lagta hai. TSH test se clear ho jaata hai. 20-40% PCOD patients mein thyroid issue bhi hota hai.',
      homeopediaSlug: 'thyroid',
      isAvailable: true,
    },
    {
      _key: 'ldc4',
      title: 'Hormonal Imbalance',
      hindiName: 'Hormones Ka Bigda Hua Balance',
      description: 'Kabhi kabhi PCOD se alag bhi hormonal imbalance hoti hai — estrogen dominance, progesterone deficiency ya adrenal issues. Ultrasound normal aata hai lekin symptoms hain.',
      homeopediaSlug: '',
      isAvailable: false,
    },
  ],

  homeCareSteps: [
    {
      _key: 'hcs1',
      stepNumber: 1,
      title: 'Roz 30-45 Minute Walk Ya Light Movement',
      instruction: 'Roz 30-45 minute walk ya koi light movement — ye PCOD ke liye sabse effective ghar pe step hai.',
      reason: 'Physical movement insulin sensitivity improve karta hai — ye PCOD ka ek key trigger hai. Walk se muscles glucose ko zyada efficiently use karte hain, insulin ka burden kam hota hai.',
    },
    {
      _key: 'hcs2',
      stepNumber: 2,
      title: 'Neend Ka Schedule Fix Karo — Raat 11 Baje Se Pehle',
      instruction: 'Roz same time pe sone aur uthne ki koshish karo — raat 11 baje se pehle soye.',
      reason: 'Neend ki kami cortisol badhati hai. Cortisol directly LH-FSH ratio bigadta hai — jo ovulation rok deta hai. Consistent sleep timing se hormonal rhythm slowly theek hoti hai.',
    },
    {
      _key: 'hcs3',
      stepNumber: 3,
      title: 'Stress Reduction — Koi Bhi Ek Practiced Method',
      instruction: 'Breathing, journaling, prayer — jo bhi aapko suit kare, roz 10-15 minute karo.',
      reason: 'Chronic stress aur PCOD ek loop mein hain — ek doosre ko trigger karte hain. Koi bhi proven stress-reduction practice is loop ko todne mein help karti hai.',
    },
    {
      _key: 'hcs4',
      stepNumber: 4,
      title: 'Periods Ka Diary Rakho',
      instruction: 'Date, flow, aur koi nayi symptom note karo — simple calendar ya diary mein.',
      reason: 'Doctor ke liye sabse useful data ye hi hai. Irregular patterns track karna — bina kisi app ke bhi — treatment ke decisions ko bahut asaan banata hai.',
    },
  ],

  homeopathyAngles: [
    {
      _key: 'ha1',
      angle: 'Individualization',
      content: 'PCOD ka naam ek hai — lekin har mahila mein ye alag tarah dikhta hai. Kisi ke sirf periods irregular hain. Kisi ko weight gain hai. Kisi ko baal aur acne. Kisi ko infertility. Homeopathy mein ye sab alag-alag angle hain — "PCOD ka treatment" nahi, "aapka treatment" hota hai. Kisi ko raat ko zyada takleef hoti hai, kisi ke symptoms stress mein badhte hain, kisi mein cold weather trigger hai — ye sab matter karta hai treatment mein.',
    },
    {
      _key: 'ha2',
      angle: 'Root Cause',
      content: 'Baar baar aane wali PCOD ki problems aksar ek deeper hormonal imbalance ka hissa hoti hain. Homeopathy mein sirf symptoms band karna goal nahi — jo cheez baar baar hormonal cycle ko disturb kar rahi hai usse address kiya jaata hai. Waqt ke saath periods ki regularity, baalon ki problem aur weight — in sab mein improvement aati hai. Dhyan rahe: research is area mein limited hai aur results individual hote hain — especially chronic cases mein.',
    },
    {
      _key: 'ha3',
      angle: 'Safety',
      content: 'PCOD reproductive age ki mahilaon ko hota hai — jinmein se kai ya to pregnancy plan kar rahi hoti hain ya doosri medicines chal rahi hoti hain. Homeopathy ek safe complementary option hai jo conventional treatment ke saath saath chal sakti hai — koi interaction nahi hota. Ek zaroori baat: severe hormonal cases ya fertility treatment mein conventional management pehle — homeopathy uske saath support ke roop mein le sakte hain.',
    },
  ],

  homeopathyDiseaseLinks: [
    { _key: 'hdl1', title: 'PCOD / PCOS', slug: 'pcod' },
    { _key: 'hdl2', title: 'Thyroid Disorder', slug: 'thyroid' },
  ],

  homeopathyIsFor: [
    'Aap root cause treat karna chahti hain — sirf har mahine pills leke periods laana nahi',
    'Aap sustainable, long-term hormonal balance chahti hain',
    'Aap side-effect free option prefer karti hain — especially agar pregnancy plan kar rahi hain ya koi doosri medicine chal rahi hai',
  ],

  homeopathyNotFor: [
    'Aapko turant pregnancy chahiye — fertility treatment pehle lein, homeopathy saath mein support ke roop mein le sakti hain',
    'Severe insulin resistance ya diabetes ka serious risk hai — endocrinologist se conventional management pehle',
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'PCOD aur PCOS mein kya fark hai?',
      answer: 'PCOD aur PCOS related hain lekin ek nahi hain. PCOD (Polycystic Ovarian Disease) mein ovaries mein chhote cysts hote hain aur periods irregular hote hain — ye thoda milder condition hai. PCOS (Polycystic Ovarian Syndrome) mein in cysts ke saath clear hormonal signs bhi hote hain: excess androgen (male hormones) ka blood mein hona, jisse baal zyada aate hain, acne hoti hai, aur ovulation rukta hai. Dono mein lifestyle aur hormonal management zaroori hai. Fark ye hai ki PCOS mein lab reports bhi abnormal aate hain — sirf ultrasound nahi. Doctor se test karwana zaruri hai dono mein fark samajhne ke liye.',
    },
    {
      _key: 'faq2',
      question: 'PCOD ke symptoms kab normal hain aur kab doctor zaroori hai?',
      answer: 'Ek-do baar late period — stress ya weight change ki wajah se — normal ho sakta hai. Doctor tab zaroori hai jab: Periods 2 mahine ya zyada se band hain. Chehra ya chin pe zyada baal aayen, tezi se. Achanak weight pet ke aaspaas badhe. Pimples mahino se theek na hon. Aur turant doctor tab jayen jab pet mein ek taraf achanak tej dard ho — ye cyst rupture ka sign ho sakta hai.',
    },
    {
      _key: 'faq3',
      question: 'PCOD ke lakshan kyun hote hain — asli wajah kya hai?',
      answer: 'PCOD ke symptoms ki asli wajah hai hormonal imbalance — khaas kar LH (Luteinizing Hormone) aur FSH (Follicle Stimulating Hormone) ka ratio bigadna. Jab LH zyada ho jaata hai, ovaries zyada androgens (male hormones) banane lagte hain. Ye androgens ovulation rokta hai, cysts banata hai, aur baaki symptoms laata hai — irregular periods, baal, acne, weight gain. Is imbalance ki wajah genetic bhi ho sakti hai, insulin resistance bhi, aur chronic stress bhi. Aksar teen-chaar factors milke trigger karte hain. Agar sirf ek wajah lage to doctor se poori history discuss karo — accurate cause pata chalna sahi treatment ka pehla step hai.',
    },
    {
      _key: 'faq4',
      question: 'Kya PCOD ke symptoms bina periods ki problem ke bhi hote hain?',
      answer: 'Haan — aur ye ek common confusion hai. Kuch mahilaon mein PCOD mein periods regular rehte hain lekin doosre symptoms hote hain: baal badh rahe hain, weight gain ho rahi hai, acne hai. Isko "asymptomatic PCOD" ya "PCOS without menstrual irregularity" bolte hain. Doctors estimate karte hain ki kafi cases is wajah se diagnose hi nahi hote — mahila periods normal samajhke attention nahi deti. Agar doosre symptoms hain — baal, weight, acne — to sirf periods normal hone ka matlab ye nahi ki PCOD nahi hai. Doctor se hormone panel test zarur karwao.',
    },
    {
      _key: 'faq5',
      question: 'PCOD symptoms kitne waqt mein theek hote hain?',
      answer: 'Ye depend karta hai kitne waqt se hai aur treatment kya hai. Lifestyle changes (regular walk, sleep, stress management) se 3-6 mahine mein periods ki regularity mein improvement dikhne lagne lagti hai. Conventional medicines (Metformin, birth control pills) se symptoms 1-3 mahine mein control hote hain — lekin band karne pe wapas aa sakte hain. Homeopathic treatment mein improvement slower but more sustained hoti hai — typically 3-6 mahine consistent treatment ke baad results dikhte hain. Koi bhi system ek hafte mein fix nahi karta PCOD ko. Jo bhi approach lo — patience aur consistency zaruri hai.',
    },
    {
      _key: 'faq6',
      question: 'Kya homeopathy PCOD symptoms mein kaam karti hai?',
      answer: 'Homeopathy PCOD ke symptoms mein helpful rahi hai — khaas kar periods ki regularity, weight, aur hormonal balance mein. Fayda ye hai ki ye approach root cause pe kaam karti hai — sirf symptoms suppress nahi karti. Ek zaroori baat: results individual hote hain, aur research is area mein limited hai. Jo kisi ek patient pe kaam karta hai wo doosre pe exactly same nahi hoga — kyunki homeopathy mein treatment aapki poori picture dekh ke choose hoti hai. Conventional treatment ke saath bhi homeopathy safely chal sakti hai — koi interaction nahi hota.',
    },
    {
      _key: 'faq7',
      question: 'PCOD mein weight gain kyun hoti hai aur kya karein?',
      answer: 'PCOD mein weight gain ki asli wajah hai insulin resistance. Jab cells insulin ko sahi se respond nahi karte, to body zyada insulin banata hai — aur ye extra insulin fat storage ko trigger karta hai, khaas kar pet ke aaspaas. Ye normal dieting se mushkil ho jaata hai — "main itna nahi khati aur phir bhi weight badhta hai" ye real experience hai. Kya karna chahiye: Refined carbs aur sugar kam karo — roti, chawal suddenly band mat karo, slowly reduce karo. Roz 30-45 min walk — ye insulin sensitivity improve karta hai sabse effectively. Neend sahi rakho — neend ki kami bhi insulin resistance badhati hai. Doctor se fasting insulin test karwao — sirf blood sugar se insulin resistance nahi pakad mein aati.',
    },
    {
      _key: 'faq8',
      question: 'PCOD se pregnancy mein koi problem hoti hai?',
      answer: 'PCOD fertility ko affect kar sakta hai — kyunki irregular ovulation ya ovulation na hone se pregnancy mushkil hoti hai. Lekin "PCOD = infertility" ye bilkul sahi nahi hai — kaafi PCOD patients naturally conceive karti hain. Kuch important baatein: Agar 1 saal se try kar rahi hain aur nahi ho raha — fertility specialist se milein, ab der mat karo. Agar diagnosed PCOD hai aur pregnancy plan hai — pehle se doctor ko batao, wo pre-conception care plan denge. Weight loss (sirf 5-10%) bhi ovulation improve kar sakta hai PCOD patients mein — ye clinically proven hai. Pregnancy mein PCOD uncontrolled rahe to gestational diabetes aur preeclampsia ka risk thoda badh jaata hai — isliye regular monitoring zaroori hai.',
    },
    {
      _key: 'faq9',
      question: 'PCOD symptoms aur thyroid ke symptoms mein fark kya hai?',
      answer: 'Dono mein bahut overlap hota hai — isliye ye sawaal bahut zaroori hai. Symptoms jo dono mein hote hain: Irregular periods, Weight gain, Thakaan, Baalon ka jharna. Symptoms jo sirf hypothyroidism mein hote hain: Bahut zyada thanda lagta hai, Haath-pair thande rehte hain, Awaz bhaari ho jaati hai, Constipation. Symptoms jo sirf PCOD mein zyada hote hain: Chehra/chin/chest pe baal aana (hirsutism), Acne severe hona, Ovarian cysts ultrasound mein dikhna. Diagnosis ke liye: TSH test (thyroid ke liye) aur pelvic ultrasound + hormone panel (PCOD ke liye) — dono ek saath karawana smart hai kyunki 20-40% PCOD patients mein thyroid issue bhi hota hai.',
    },
    {
      _key: 'faq10',
      question: 'PCOD baar baar kyun aata hai — theek hone ke baad bhi?',
      answer: 'PCOD "ek baar theek aur khatam" wali bimari nahi hai — ye ek chronic hormonal tendency hai. Jab aap treatment pe hoti hain (dawai, lifestyle) — symptoms control rehte hain. Band karne pe wapas aa sakte hain — kyunki underlying hormonal predisposition wahi rehti hai. Isliye: "Periods normal ho gayi — dawai band" ye approach safe nahi hai bina doctor ke salah ke. Long-term lifestyle — walk, stress management, sleep — sabse zyada sustainable results deti hai. Homeopathy is pattern ko todne mein helpful hai — kyunki ye underlying tendency pe kaam karta hai, results individual hote hain.',
    },
    {
      _key: 'faq11',
      question: 'Kya PCOD ke symptoms hamesha ke liye theek ho sakte hain?',
      answer: '"Permanent cure" ka vaada koi bhi system honestly nahi kar sakta PCOD ke liye — aur koi kare to doubt karo. Jo realistic hai: PCOD symptoms itne control mein aa sakte hain ki daily life normal ho jaaye — periods regular, weight stable, skin clear. Kuch mahilaon mein menopause ke baad symptoms naturally kam ho jaate hain — kyunki ovarian function change hoti hai. Sahi lifestyle + consistent treatment se symptoms 10-20 saal tak controlled reh sakte hain. Goal ye nahi ki "PCOD khatam ho jaaye" — goal ye hai ki "PCOD meri life control na kare."',
    },
    {
      _key: 'faq12',
      question: 'Ghar pe PCOD symptoms mein kya safe steps hain?',
      answer: 'Symptoms mild hain — periods thode late hain ya weight thodi badh rahi hai — to ghar pe ye karo: Roz 30-45 min walk — most effective step hai. Neend 7-8 ghante consistent — same time pe sona. Stress pe kaam karo — koi bhi practiced method. Periods diary rakho — dates, flow, koi nayi symptom. Ye ghar pe karo — lekin doctor appointment bhi lo. PCOD ko "dekhte hain" karke 6 mahine nahi ignore karna chahiye — early intervention better results deti hai.',
    },
  ],

  relatedSymptoms: [
    { _key: 'rs1', name: 'Irregular Periods', hindiName: 'Irregular Masik Dharm', slug: 'irregular-periods' },
    { _key: 'rs2', name: 'Excessive Hair Growth (Hirsutism)', hindiName: 'Zyada Baal Aana', slug: 'excessive-hair-growth' },
    { _key: 'rs3', name: 'Unexplained Weight Gain', hindiName: 'Bina Wajah Weight Badna', slug: 'unexplained-weight-gain' },
    { _key: 'rs4', name: 'Acne (Persistent)', hindiName: 'Baar Baar Pimple Aana', slug: 'persistent-acne' },
  ],

  sources: [
    { _key: 'src1', title: 'WHO — Polycystic Ovary Syndrome (PCOS) Factsheet', year: '2023', url: 'https://www.who.int/news-room/fact-sheets/detail/polycystic-ovary-syndrome' },
    { _key: 'src2', title: 'Mayo Clinic — Polycystic Ovary Syndrome (PCOS): Symptoms & Causes', year: '2024', url: 'https://www.mayoclinic.org/diseases-conditions/pcos/symptoms-causes/syc-20353439' },
    { _key: 'src3', title: 'NCBI / PubMed — Insulin Resistance in Polycystic Ovary Syndrome', year: '2021', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8107616/' },
    { _key: 'src4', title: 'NHS — Polycystic Ovary Syndrome (PCOS)', year: '2022', url: 'https://www.nhs.uk/conditions/polycystic-ovary-syndrome-pcos/' },
  ],

  quickFacts: [
    'PCOD sirf periods ki problem nahi hai — ye ek metabolic + hormonal disorder hai jisme insulin, androgens aur ovarian function teeno affect hote hain.',
    'India mein reproductive age ki approximately 20% mahilaon ko PCOD/PCOS hai — WHO ke mutabiq.',
    'Kab doctor zaruri: Agar periods 2 mahine se band hain, ya pet mein ek taraf achanak tej dard ho — turant doctor.',
  ],

  reviewDate: '2026-05',
}

async function seed() {
  console.log('🌱 Seeding PCOD Symptoms symptom page...')
  await client.createOrReplace(doc)
  console.log('✅ Symptom seeded — homeopedia.in/symptoms/pcod-symptoms')
}

seed().catch(console.error)
