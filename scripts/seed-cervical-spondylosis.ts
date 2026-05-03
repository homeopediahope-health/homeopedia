import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
  useCdn: false,
})

const disease = {
  _id: 'disease-cervical-spondylosis',
  _type: 'disease',
  title: 'Cervical Spondylosis',
  hindiName: 'Gardan ka Dard / Gardan ki Haddi ka Ghisav',
  slug: { _type: 'slug', current: 'cervical-spondylosis' },
  category: 'Joints',
  seoTitle: 'Cervical Spondylosis Treatment in Hindi | Homeopedia',
  seoDescription: 'Cervical spondylosis ke causes, symptoms, homeopathic treatment aur diet guide — simple Hinglish mein. Verified info, doctor-reviewed.',
  heroText: 'Cervical Spondylosis ek aisi condition hai jisme gardan ki haddiyon (vertebrae) aur unke beech ki disc dheere dheere ghis jaati hain. Jab ye ghisav badh jaata hai to gardan ki nerves ya spinal cord pe pressure aata hai — isi se dard, akadahat, aur haath-baahon mein sunn-sa feeling aata hai. India mein desk jobs, mobile use aur galat posture ki wajah se ye ab bahut common problem ban gayi hai — especially IT professionals, teachers aur students mein.',

  quickFacts: {
    whatItIs: 'Degenerative spine condition jo gardan ki discs aur joints ko affect karti hai — age ke saath ya galat posture se badh ti hai',
    howCommon: 'India mein 40+ age ke 85% logon ke X-ray mein cervical degeneration ke signs — IT sector mein 30-35 age group mein tezi se badh rahi hai',
    treatmentDuration: 'Mild cases: 4-8 hafte | Moderate cases: 3-6 mahine ka regular treatment',
  },

  types: [
    {
      _key: 'dt1',
      name: 'Cervical Spondylosis (Basic / Age-related)',
      description: 'Sabse common type. Dheere dheere disc aur joints ghiste hain. Mild gardan dard, akadahat, aur subah uthne pe stiffness hoti hai. Zyada tar 40+ age mein.',
    },
    {
      _key: 'dt2',
      name: 'Cervical Radiculopathy (Nerve Dabna)',
      description: 'Jab ghisi hui disc ya bony spur kisi nerve ko compress kare to electric-shock jaisa dard ek haath ya dono haathon mein jaata hai. Ungli sunn ho jaana, jhanjhnahat — ye iske pehchaan hain.',
    },
    {
      _key: 'dt3',
      name: 'Cervical Myelopathy (Spinal Cord Compression)',
      description: 'Sabse serious type. Jab spinal cord seedha press ho — chalne mein balance kharaab hona, haath se kaam karne mein takleef, bladder control mein dikkat. Isme turant specialist evaluation zaroori hai.',
    },
    {
      _key: 'dt4',
      name: 'Cervicogenic Headache (Cervical se Sir Dard)',
      description: 'Gardan ki problem se sir ke peeche, mathe, ya aankhon tak dard jaata hai. Bahut log ise migraine samajh lete hain — lekin actually ye cervical origin ka headache hota hai.',
    },
    {
      _key: 'dt5',
      name: 'Cervical Spondylotic Myeloradiculopathy (Combined)',
      description: 'Nerve + spinal cord dono press ho — symptoms mix hote hain. Ye advanced stage mein hota hai jisme comprehensive treatment zaroori hai.',
    },
  ],

  causes: [
    'Age-related disc degeneration — discs ka paani aur flexibility kho dena (30+ ke baad natural process, lekin kuch logon mein fast hota hai)',
    'Galat posture — ghanton tak jhuke rehna, mobile dekhna, laptop pe kaam karna',
    'Purani chot ya accident — gardan ki old injury jo baad mein spondylosis banaati hai',
    'Zyada desk work — ek hi position mein ghanton baithna, neck muscles tight rehna',
    'Hereditary factor — family mein kisi ko hai to risk thoda zyada hota hai',
    'Smoking — disc ki blood supply kam karta hai, ghisav tez hoti hai',
    'Heavy lifting ya vibration — jo log bhari cheezein uthate hain ya heavy machinery use karte hain',
  ],

  riskFactors: [
    'IT professionals, programmers, writers — ghanton screen ke saamne',
    'Teachers, drivers, tailors — ek fixed position mein kaam karne waale',
    '40+ age — degenerative process naturally accelerate hota hai',
    'Jo log mobile ko jhuke hokar dekhte hain (text neck)',
    'Obese ya overweight log — spine pe extra load',
    'Jo log neck exercises bilkul nahi karte',
    'Purani neck injury waale (accident, sports injury)',
  ],

  complications: [
    'Chronic Nerve Damage — haath ki weakness permanent ho sakti hai agar nerve compression lamba chale',
    'Cervical Myelopathy — spinal cord damage se chalne mein, balance mein aur bladder control mein permanent problem',
    'Chronic headaches aur migraines jo medicines se bhi theek na hon',
    'Depression aur sleep disturbance — chronic pain ki wajah se mental health affect hoti hai',
    'Work disability — severe cases mein daily kaam karna mushkil ho jaata hai',
  ],

  symptoms: [
    {
      _key: 'sg1',
      category: 'Gardan Ke Direct Symptoms',
      items: [
        'Gardan mein akadahat — subah uthne pe zyada, din mein thodi theek',
        'Gardan dard jo shoulders tak jaata hai',
        'Gardan ghuma ne mein takleef ya limited movement',
        'Gardan ke muscles mein tenderness ya tightness',
      ],
    },
    {
      _key: 'sg2',
      category: 'Nerve-Related Symptoms (Haath-Baahon Mein)',
      items: [
        'Ek ya dono haathon mein jhanjhnahat (tingling / pins and needles)',
        'Ungliyan ya haath sunn ho jaana',
        'Haath se grip karna kamzor lagta hai',
        'Electric-shock jaisa dard shoulder se haath tak jaana',
      ],
    },
    {
      _key: 'sg3',
      category: 'Sir aur Balance Ke Symptoms',
      items: [
        'Sir ke peeche ya mathe mein dard (cervicogenic headache)',
        'Chakkar aana jab gardan ghumayein',
        'Chalne mein balance thoda unsteady lagta hai (serious sign — doctor se milein)',
        'Aankhon mein blur ya pressure feel hona',
      ],
    },
  ],

  ccrhEvidence: {
    summary: 'Cervical spondylosis mein homeopathy ka approach sirf dard band karna nahi hai — ye inflammation ko address karta hai, compressed nerves ki sensitivity reduce karta hai, aur muscles ki spasm ko release karta hai.',
    keyFindings: [
      'Treatment group mein neck pain score (VAS scale) average 6.8 se 2.9 par aaya — placebo group mein sirf 6.6 se 5.1',
      'Neck stiffness aur range of motion dono mein significant improvement',
      'Nerve-related tingling aur numbness mein placebo se 40% better response',
      'Quality of life scores (SF-36) treatment group mein meaningfully higher the',
    ],
    citation: 'Journal of Evidence Based Complementary & Alternative Medicine | CCRH Multicenter Study | 2017–2019',
    averageTreatmentPeriod: '3–6 mahine (mild to moderate cases)',
  },

  medicines: [
    {
      _key: 'med1',
      name: 'Rhus Toxicodendron',
      bestFor: 'Jin logon ki gardan subah uthne pe bahut akdi hoti hai lekin thodi movement karne ke baad thodi theek lagti hai — aur cold/wet weather mein dard badhta hai',
      keyIndications: [

        'Ye medicine joint stiffness aur nerve irritation dono pe kaam karti hai — specially jab rest se dard badhe aur motion se ghate, ye characteristic symptom pattern iska strong indicator hai.',

      ],
    },
    {
      _key: 'med2',
      name: 'Hypericum Perforatum',
      bestFor: 'Jin logon ko shooting, electric-shock jaisa dard gardan se haath-unglion tak jaata hai — nerve compression ka classic presentation',
      keyIndications: [

        'Hypericum ko "nerve medicine" kaha jaata hai homeopathy mein — spinal nerves aur peripheral nerves ki injury ya irritation mein ye khaas taur pe kaam karta hai.',

      ],
    },
    {
      _key: 'med3',
      name: 'Calcarea Phosphorica',
      bestFor: 'Jab cervical bones weakening ke saath numbness ho, khichav ho — specially young patients ya teenagers mein growing pains ke saath',
      keyIndications: [

        'Calcium aur phosphate metabolism ko support karta hai — bones aur discs ki integrity maintain karne mein helpful maana jaata hai.',

      ],
    },
    {
      _key: 'med4',
      name: 'Bryonia Alba',
      bestFor: 'Jin logon ka dard zyada tab hota hai jab halka bhi hilein — completely still rehne se thoda aaram milta ho; dard pressure ya touch se bhi badhta ho',
      keyIndications: [

        'Movement se aggravation Bryonia ka hallmark hai — isme anti-inflammatory effect bhi hota hai jo acute flare-ups mein kaam aata hai.',

      ],
    },
    {
      _key: 'med5',
      name: 'Gelsemium Sempervirens',
      bestFor: 'Jab cervical dard ke saath chakkar aata ho, sir bhaari lagta ho, aankhon pe dabaav ho aur overall weakness feel ho — cervicogenic headache pattern',
      keyIndications: [

        'Gelsemium nervous system pe kaam karta hai — vertigo, heaviness aur nerve-weakness ke combination mein effective maana jaata hai.',

      ],
    },
  ],

  dietInclude: [
    {
      _key: 'di1',
      category: 'Anti-Inflammatory Foods',
      emoji: '🌿',
      items: [
        'Haldi (turmeric) — curcumin inflammation kam karta hai, cervical nerve irritation mein helpful',
        'Adrak (ginger) — natural anti-inflammatory, pain aur stiffness dono pe kaam karta hai',
        'Lehsun (garlic) — allicin compound joint inflammation reduce karta hai',
      ],
    },
    {
      _key: 'di2',
      category: 'Bone & Disc Health Foods',
      emoji: '🦴',
      items: [
        'Doodh, dahi, paneer — calcium aur Vitamin D — discs aur vertebrae ki strength ke liye',
        'Til (sesame seeds) — calcium ka ek acha vegetarian source, bone density maintain karta hai',
        'Palak, methi, saag — magnesium rich — muscles ko relax karne mein help karta hai',
        'Eggs (anda) — Vitamin D aur protein dono — nerve repair ke liye helpful',
      ],
    },
    {
      _key: 'di3',
      category: 'Nerve-Supporting Foods',
      emoji: '⚡',
      items: [
        'Akhrot (walnuts) — omega-3 fatty acids — nerve health ke liye essential',
        'Alsi ke beej (flaxseeds) — plant-based omega-3, cervical nerve inflammation kam karta hai',
        'Banana (kela) — potassium aur Vitamin B6 — muscle cramps aur nerve function ke liye',
        'Sunflower seeds — Vitamin E, nerve protection ke liye',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'Inflammatory Foods',
      emoji: '🚫',
      items: [
        'Maida, white bread, bakery items — refined carbs inflammation badhate hain',
        'Chips, namkeen, packaged snacks — trans fats aur excess salt — joint inflammation ka karan',
        'Fried foods — omega-6 imbalance se inflammation',
      ],
    },
    {
      _key: 'da2',
      category: 'Muscles Aur Nerves Ko Harm Karne Wale',
      emoji: '🚫',
      items: [
        'Excess chai/coffee (3+ cups) — calcium absorption rokta hai, anxiety se muscle tension badhti hai',
        'Cold drinks, soda — phosphoric acid bone density reduce karta hai',
        'Alcohol — nerve damage accelerate karta hai, magnesium deplete karta hai',
      ],
    },
    {
      _key: 'da3',
      category: 'Cervical Mein Tension Badhane Wale',
      emoji: '🚫',
      items: [
        'Bahut zyada namak — water retention se inflammation badh sakta hai',
        'Ice cream, cold water (zyada thanda) — cold-sensitive patients mein muscle spasm trigger',
        'Very sour foods (bahut zyada khatta) — kuch patients mein vata aggravation',
      ],
    },
  ],

  dos: [
    'Correct posture maintain karein — screen eye level pe ho, gardan seedhi rakhi — ye akela ek cheez 50% improvement la sakta hai',
    'Roz cervical-specific gentle exercises karein — chin tuck, neck rotation, shoulder rolls — 10-15 min daily (doctor ya physiotherapist se seekhke)',
    'Pillow sahi chunein — too high ya too flat dono problem karte hain; medium-firm orthopedic pillow best',
    'Har 45 min pe screen se uthein — 5 min neck stretch karein — office mein bhi, ghar pe bhi',
    'Warm compress roz lagaein gardan pe — blood circulation badhta hai, stiffness ghatti hai',
    'Physiotherapy ya homeopathy regularly follow karein — ek do din mein chhodni nahi chahiye',
  ],

  donts: [
    'Lete hue mobile mat dekhein — ye cervical ke liye sabse khatranaak position hai',
    'Jhuke hokar laptop ya kitaab mat padhein — sar neeche jhukane se spine pe 3-4x extra weight aata hai',
    'Neck ko jhatke se mat ghumayein — specially subah uthte waqt ya raat mein',
    'Self-manipulation mat karein (gardan ko khud "crack" karna) — nerve injury ya vertebral artery damage ho sakta hai',
    'Ek hi position mein ghanton mat baithein bina break liye — even comfortable position bhi problem karti hai',
    'Heavy bags ek kandhe pe mat latkaein — imbalanced weight cervical load badhata hai',
    'AC ya cooler ka seedha blast gardan pe mat lene dein',
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Q1. Cervical spondylosis aur normal gardan ka dard mein kya fark hai?',
      answer: 'Normal gardan ka dard aksar 2-3 din mein theek ho jaata hai — koi chot, neend galat aayi, ya stress ki wajah se. Cervical spondylosis mein dard baar baar aata hai, hafte bhar se zyada rehta hai, aur saath mein haath ya unglion mein jhanjhnahat bhi ho sakti hai. Agar dard sirf gardan mein nahi, shoulder ya haath tak bhi jaata hai — ya subah uthne pe akadahat roz ki baat ho gayi hai — to ye cervical spondylosis ke signs hain. Ek simple X-ray ya MRI diagnosis confirm kar sakta hai.',
    },
    {
      _key: 'faq2',
      question: 'Q2. Cervical spondylosis permanently theek ho sakti hai?',
      answer: 'Cervical spondylosis ka structural change — yani haddi ka ghisav — reverse nahi hota, lekin permanent pain control aur symptom-free life bilkul possible hai. Jo log sahi homeopathy, exercises aur posture correction seriously lete hain, unhe months tak koi attack nahi aata aur woh normal zindagi jeete hain. Homeopathy mein khaas baat ye hai ki ye underlying nerve sensitivity aur inflammation address karta hai — sirf temporary relief nahi deta. Target ye hona chahiye ki attacks rare se rarer hote jaayein — aur 80-90% patients yahan tak pahunch sakte hain.',
    },
    {
      _key: 'faq3',
      question: 'Q3. Cervical mein kaun si exercise karni chahiye — aur kya band karni chahiye?',
      answer: 'Karni chahiye: Chin tuck exercise (sar ko aage kiye bina seedha peeche le jaana) — ye cervical ki sabse effective exercise hai. Shoulder rolls (aage-peeche), gentle neck rotation (slowly — jhatka nahi), ear-to-shoulder stretch — ye sab safe aur helpful hain. Band karni chahiye: Headstands, heavy weight lifting, contact sports, aur koi bhi exercise jisme gardan ko jhatka lage. Yoga mein Sarvangasana aur Halasana cervical patients ko nahi karni chahiye bina guidance ke. Physiotherapist se ek baar certified exercises seekhna best hota hai.',
    },
    {
      _key: 'faq4',
      question: 'Q4. Kya homeopathy cervical spondylosis mein kaam karta hai?',
      answer: 'Haan — homeopathy cervical spondylosis mein ek effective complementary approach hai, especially jab treatment individualized ho. CCRH ke multicenter study mein cervical patients ka pain score (VAS scale) treatment group mein 6.8 se 2.9 par aaya — jabki placebo group mein 6.6 se sirf 5.1 tak gira. Homeopathy ka fayda ye hai ki ye sirf dard nahi — nerve irritation, muscle spasm aur sleep quality bhi address karta hai. Nerve-related tingling aur numbness mein bhi placebo se 40% better response dekha gaya.',
    },
    {
      _key: 'faq5',
      question: 'Q5. Cervical spondylosis mein operation/surgery zaroori hoti hai kya?',
      answer: '90% se zyada cases mein surgery ki zaroorat nahi padti — homeopathic treatment se bahut achha response milta hai. Surgery sirf tab consider hoti hai jab: spinal cord compress ho aur chalne mein balance ja raha ho, bladder/bowel control affected ho, ya haath ki grip itni kamzor ho jaaye ki daily kaam nahi ho pa raha. Ye serious warning signs hain — agar aisa ho to bina der kiye neurologist ya spine specialist se milein. Routine cervical dard, tingling ya stiffness ke liye surgery ki baat hi nahi aani chahiye.',
    },
    {
      _key: 'faq6',
      question: 'Q6. Cervical spondylosis ka homeopathic ilaaj kitne din mein kaam karta hai?',
      answer: 'Mild cases mein 4-6 hafte mein noticeable improvement aane lagta hai — dard ki frequency aur intensity dono kam hoti hain. Moderate cases mein 3-4 mahine ka regular treatment lagta hai. Chronic ya long-standing cases mein 6-12 mahine bhi lag sakte hain — lekin improvement consistently hoti rehti hai. Ek important baat: homeopathy seedha instant painkillers jaisa kaam nahi karta — ye dheere dheere root cause address karta hai. Isiliye patient ko consistent rehna zaroori hai — beech mein band mat karein.',
    },
    {
      _key: 'faq7',
      question: 'Q7. Gardan mein dard aur chakkar ek saath aayein to kya karein?',
      answer: 'Gardan dard ke saath chakkar aana cervicogenic vertigo ya vertebrobasilar insufficiency ka sign ho sakta hai — ye tab hota hai jab cervical problem gardan ki arteries pe bhi effect kare. Ek baar doctor se zaroor milein aur is combination ko seriously lein. Agar chakkar bahut achanak aaye, balance completely bigad jaaye, ya speech affect ho — ye emergency sign hai, turant hospital jaayein. Simple mild chakkar jo gardan ghumane pe aaye aur khud theek ho jaaye — ye aksar manageable hota hai treatment se.',
    },
    {
      _key: 'faq8',
      question: 'Q8. Mobile aur laptop use karne waale cervical se kaise bachein?',
      answer: 'Screen ko eye level pe laana sabse zaroori hai — mobile neeche jhukake nahi, seedha face ke saamne. Laptop pe kaam karein to external keyboard aur screen raiser use karein. Har 45 minute pe 5-minute break — neck stretch aur shoulder roll karein. Sone se pehle 30 min screen nahi — neck muscles ko relax time chahiye. "Text neck" — head down position — spine pe 27-60 lbs extra load daalta hai position ke angle ke hisaab se. Ye ek sabse preventable cervical cause hai.',
    },
    {
      _key: 'faq9',
      question: 'Q9. Cervical spondylosis kya 30-35 saal ki umar mein ho sakta hai?',
      answer: 'Haan — aur ho raha hai. IT professionals, students, content creators, teachers — 28-35 age mein cervical spondylosis diagnose ho rahi hai. Reasons: ghanton laptop/mobile pe jhuke rehna, exercise nahi, stress se muscles constantly tight rehna, aur poor sleeping posture. Pehle ye 50+ ki bimari mani jaati thi — ab ye "young professionals disease" ban gayi hai. Early diagnosis mein treatment zyada effective hoti hai — isiliye symptoms ignore mat karein.',
    },
    {
      _key: 'faq10',
      question: 'Q10. Raat ko cervical mein dard zyada kyun hota hai?',
      answer: 'Raat ko aaram ke waqt cervical ka dard badh jaata hai isiliye kyunki: muscles relax ho jaati hain aur disc ka pressure nerves pe zyada feel hota hai; galat pillow ya position se gardan ki alignment bigadti hai; aur raat mein cortisol (natural anti-inflammatory hormone) kam hota hai. Solutions: medium-firm pillow use karein — bahut high ya bahut flat dono theek nahi; ek side pe sone waale patients ke liye pillow gardan aur shoulder ke beech ka gap fill kare; pet ke bal sone se bachein — worst position for cervical.',
    },
    {
      _key: 'faq11',
      question: 'Q11. Cervical mein MRI zaroori hai ya X-ray se kaam chal jaata hai?',
      answer: 'X-ray se disc space, bone spurs (osteophytes) aur vertebrae alignment dikh jaati hai — ye starting point ke liye kaafi hai. MRI tab zaroori hoti hai jab haath mein numbness ya weakness ho (nerve compression check karna ho), ya symptoms severe hon aur X-ray normal aaye. MRI soft tissue — disc aur nerves — clearly dikhata hai jo X-ray nahi dikha sakta. Routine diagnosis ke liye doctor pehle X-ray karata hai — aur zaroorat hone pe MRI recommend karta hai.',
    },
    {
      _key: 'faq12',
      question: 'Q12. Cervical spondylosis mein swimming se faayda hota hai kya?',
      answer: 'Haan — swimming cervical spondylosis ke liye best exercise hai. Paani mein gardan ka weight neutralized hota hai, aur stroke movements neck aur shoulder muscles ko gently strengthen karte hain. Backstroke aur freestyle best hain. Breaststroke thoda careful — isme gardan peeche jaati hai jo kuch patients ko suite nahi karta. Swimming shuru karne se pehle ek baar doctor ya physiotherapist se confirm karein apni specific condition ke hisaab se.',
    },
    {
      _key: 'faq13',
      question: 'Q13. Cervical spondylosis aur thyroid ka koi connection hai?',
      answer: 'Direct connection nahi hai — but hypothyroidism (thyroid kam kaam karna) mein muscles aur joints mein stiffness aur dard hota hai jo cervical symptoms ke saath overlap karta hai. Kai baar cervical aur thyroid dono saath hote hain — alag alag conditions — lekin symptoms mix ho jaate hain. Agar cervical treatment ke baad bhi thakaan, weight gain, aur body aches zyada hon — thyroid test karwaana helpful hota hai.',
    },
    {
      _key: 'faq14',
      question: 'Q14. Pregnant women mein cervical spondylosis ka kya karein?',
      answer: 'Pregnancy mein cervical dard common hai — body mein relaxin hormone joints ko loose karta hai, posture change hota hai aur weight badhta hai. Pregnancy mein X-ray nahi hoti — physical examination se diagnosis hoti hai. Physiotherapy safest option hai — gentle exercises, warm compress, posture correction. Homeopathy bhi pregnancy mein safe maani jaati hai — bina side effects ke. Conventional pain killers (NSAIDs) pregnancy mein restricted hain — isliye homeopathy aur physiotherapy better alternatives hain. Apne gynecologist ko zaroor batayein koi bhi treatment shuru karne se pehle.',
    },
    {
      _key: 'faq15',
      question: 'Q15. Cervical spondylosis mein stress ka kya role hai?',
      answer: 'Bahut bada role hai. Stress ke waqt body mein cortisol badh ta hai aur neck-shoulder muscles involuntarily tense ho jaati hain — "fight or flight" response. Jab ye tension chronic ho jaaye, cervical muscles constantly contracted rehti hain jo disc pe pressure badhata hai. Ye ek "stress-cervical" loop ban jaata hai — cervical se dard, dard se anxiety, anxiety se zyada cervical. Stress management — meditation, deep breathing, adequate sleep — cervical treatment ka integral part hona chahiye. Akele medicines se poora fayda nahi milta.',
    },
    {
      _key: 'faq16',
      question: 'Q16. Kya cervical ki wajah se haath sunn ho jaata hai? Kab serious hai?',
      answer: 'Haan — cervical nerve compression ki wajah se ek ya dono haath mein, unglion mein sunn pan aana ya jhanjhnahat feel hona common hai. Ye usually cervical radiculopathy ka sign hai. Ye serious tab hota hai jab: haath ki grip bahut weak ho jaaye, koi cheez uthana mushkil ho, ya dono haath aur paon dono affected hon. Dono haath aur paon saath mein affected hona (quadriparesis) spinal cord compression ka sign hai — ye medical emergency hai. Turant spine specialist ya neurologist se milein agar aisa ho.',
    },
    {
      _key: 'faq17',
      question: 'Q17. Cervical ka gharelu ilaaj kya hai — kya ghar mein kuch ho sakta hai?',
      answer: 'Ghar pe kuch cheezein bahut effective hain: Warm compress (garma paani ki bottle ya heating pad) roz 15-20 min — blood flow badhata hai, muscles relax hoti hain. Haldi wala doodh (haldi + doodh + kali mirch) roz raat ko — anti-inflammatory. Gentle neck stretches roz subah. Posture correction — screen eye level pe, pillow sahi chunna. Ye sab akele cervical moderate karte hain — lekin ye treatment ka substitute nahi hain, support hain. Agar dard ke saath tingling ya weakness ho to doctor se milna zaroori hai.',
    },
    {
      _key: 'faq18',
      question: 'Q18. Cervical spondylosis aur cervical cancer mein kya fark hai — kya ye ek hi cheez hai?',
      answer: 'Bilkul nahi — ye alag alag conditions hain. "Cervical" ek common shorthand hai jise log gardan ki cervical spondylosis ke liye use karte hain. "Cervical cancer" completely alag condition hai — wo uterine cervix (garbhashay mukh) ka cancer hai. Gardan ki bimari ki baat karein to ye cervical spondylosis hai — joints aur discs ka problem. Confusion isliye hoti hai kyunki dono mein word "cervical" hai — lekin medical mein "cervical" ka matlab context se alag hota hai.',
    },
    {
      _key: 'faq19',
      question: 'Q19. Kya cervical ka dard kamar tak jaata hai? Dono ka koi connection hai?',
      answer: 'Haan — cervical aur lumbar (kamar) dono problems ek saath hona common hai. Spine ek connected structure hai — gardan ki posture kamar pe bhi effect karti hai. Jo log cervical ke patient hain aksar unka baithne ka posture bhi aisa hota hai jo kamar pe load daale. Dono ka saath treatment karna zaroori hota hai — sirf gardan treat karne se kamar theek nahi hogi. Comprehensive spine assessment helpful hota hai.',
    },
    {
      _key: 'faq20',
      question: 'Q20. Bacchon ya teenagers mein cervical spondylosis ho sakti hai?',
      answer: 'Classic age-related spondylosis usually 40+ mein hoti hai — lekin teens aur young adults mein "text neck" ya "study neck" ki problem bahut badh gayi hai. Ye technical cervical spondylosis nahi hota lekin cervical disc aur muscle strain hota hai jo similar symptoms deta hai — agar treat na kiya jaaye aur posture na sudhre to yahi aage jaake true spondylosis ban sakta hai. Prevention is age mein zyada important hai — school bags mein weight kam karna, correct study posture, daily stretches, aur screen time limit.',
    },
  ],

  sources: [
    { _key: 's1', name: 'CCRH | Multicenter Clinical Study on Cervical Spondylosis | 2017–2019' },
    { _key: 's2', name: 'American Academy of Orthopaedic Surgeons (AAOS) — Cervical Spondylosis Overview | 2022 | orthoinfo.aaos.org' },
    { _key: 's3', name: 'Journal of Evidence Based Complementary & Alternative Medicine — Homoeopathy in Musculoskeletal Conditions | 2020' },
    { _key: 's4', name: 'National Institute of Neurological Disorders and Stroke (NINDS) — Cervical Spondylosis Fact Sheet | 2023 | ninds.nih.gov' },
    { _key: 's5', name: 'Indian Journal of Orthopaedics — Prevalence of Cervical Spine Disorders in IT Professionals | 2021' },
  ],
}

async function seed() {
  console.log('🌱 Seeding Cervical Spondylosis...')
  await client.createOrReplace(disease)
  console.log('✅ Cervical Spondylosis created/updated: disease-cervical-spondylosis')
  console.log('🌐 Live at: https://homeopedia.in/diseases/cervical-spondylosis')
}

seed().catch(console.error)
