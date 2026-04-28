import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
  useCdn: false,
})

const disease = {
  _id: 'disease-leucorrhoea',
  _type: 'disease',
  title: 'Leucorrhoea',
  hindiName: 'Safed Paani / Shwet Pradar',
  slug: { _type: 'slug', current: 'leucorrhoea' },
  category: "Women's Health",
  seoTitle: 'Leucorrhoea Treatment in Hindi | Safed Paani Ka Ilaaj | Homeopedia',
  seoDescription: 'Leucorrhoea (safed paani) ka homeopathic treatment, causes, types, diet chart aur complete guide — verified, doctor-reviewed. Homeopedia.in',
  heroText: 'Leucorrhoea — jise log "safed paani aana" ya "shwet pradar" kehte hain — ek aisi condition hai jisme vagina se white ya off-white colored discharge hota hai. Thoda sa normal discharge female body mein naturally hota hai, lekin jab ye zyada ho jaaye, badbu aaye, colour change ho, ya saath mein jalan/khujli ho — to ye medical condition hai jiska ilaaj zaroori hai. Homeopathy mein sirf discharge band nahi karta — underlying cause address karta hai.',

  quickFacts: {
    whatItIs: 'Vaginal discharge disorder — normal physiological ya pathological (infection/hormonal) ho sakti hai',
    howCommon: 'Approx. 25–40% Indian reproductive-age women affected — underreported due to social stigma (NHP India)',
    treatmentDuration: 'Acute infection: 7–14 days | Chronic/Constitutional: 3–6 months',
  },

  types: [
    {
      _key: 'dt1',
      name: 'Physiological Leucorrhoea (Normal)',
      description: 'Sharir ki natural cleaning process, koi infection nahi. Kab hota hai: puberty mein, ovulation ke time, pregnancy mein, breastfeeding ke dauran. Discharge white ya slightly clear, odorless ya mild smell. Generally treatment zaroori nahi.',
    },
    {
      _key: 'dt2',
      name: 'Inflammatory Leucorrhoea (Infection-Based)',
      description: 'Bacterial, fungal ya viral infection ki wajah se. Common cause: Bacterial Vaginosis (BV), Candida (fungal), Trichomonas. Discharge yellow/green/grey colour, strong badbu, saath mein jalan ya khujli. Treatment zaroori hai.',
    },
    {
      _key: 'dt3',
      name: 'Cervical Leucorrhoea',
      description: 'Cervix (uterus ka lower part) mein infection ya inflammation se. Cause: Cervicitis, STIs, ya cervical erosion. Discharge mucus jaise, kabhi kabhi blood-tinged bhi. Gynaecologist evaluation aur targeted therapy zaroori.',
    },
    {
      _key: 'dt4',
      name: 'Vaginal / Atrophic Leucorrhoea',
      description: 'Vaginal walls ki lining mein problem — atrophy ya infection. Common in menopausal women (estrogen drop ki wajah se). Thin, watery discharge. Hormonal balance plus homeopathic support helpful.',
    },
    {
      _key: 'dt5',
      name: 'Constitutional / Chronic Leucorrhoea',
      description: 'Long-standing weakness, poor immunity, anemia, ya hormonal imbalance se. Common in young girls, malnourished women, post-delivery women. Discharge thin, watery, sometimes offensive, prolonged. Constitutional homeopathic treatment sabse zyada effective yahan.',
    },
  ],

  causes: [
    'Hormonal imbalance — estrogen aur progesterone levels mein change (puberty, pregnancy, menopause)',
    'Bacterial / fungal / parasitic infection — Candida, Bacterial Vaginosis, Trichomonas',
    'Poor hygiene ya synthetic undergarments — moisture trap se infection friendly environment banta hai',
    'Immune system ki kamzori — diabetes, anemia, ya prolonged illness ke baad',
    'Cervical issues — cervical erosion, polyps, ya cervicitis',
    'Stress aur poor nutrition — body ki natural defence mechanism kamzor karti hai',
  ],

  riskFactors: [
    'Reproductive age ki mahilayein (15–45 years) — most common age group',
    'Diabetic women — high sugar vaginal infections ka risk badha deta hai',
    'Pregnant women — hormonal changes natural discharge badha dete hain',
    'Poor hygiene practices — tight synthetic clothes, scented soaps ka overuse',
    'Multiple sexual partners — STI risk increase',
    'Anemic ya malnourished women — immunity low rehti hai',
  ],

  complications: [
    'Pelvic Inflammatory Disease (PID) — infection uterus aur fallopian tubes tak pahunch sakti hai',
    'Infertility ka risk — chronic untreated PID reproduction pe affect karta hai',
    'Pregnancy complications — preterm labour, low birth weight',
    'Cervical damage — long-standing cervicitis se precancerous changes possible',
  ],

  symptoms: [
    {
      _key: 'sg1',
      category: 'Discharge Ke Characteristics',
      items: [
        'White, off-white, yellow, green ya grey colour ka vaginal discharge',
        'Discharge normal se zyada matra mein aana',
        'Badbu — mild se strong tak',
        'Thick ya watery texture, cloth pe stain',
      ],
    },
    {
      _key: 'sg2',
      category: 'Saath Wale Symptoms (Associated)',
      items: [
        'Vaginal itching (khujli) aur burning (jalan)',
        'Pelvic area mein dard ya heaviness',
        'Lower back pain (kamar dard) jo periods mein zyada ho',
        'Urination ke time jalan (dysuria)',
      ],
    },
    {
      _key: 'sg3',
      category: 'Systemic / Body Symptoms',
      items: [
        'Thakaan aur kamzori — especially chronic cases mein',
        'Appetite mein kami',
        'Pale face, leg cramps — anemia ke signs jo leucorrhoea ke saath aa sakte hain',
      ],
    },
  ],

  ccrhEvidence: {
    summary: 'Homeopathy leucorrhoea mein sirf discharge band nahi karta — underlying cause address karta hai. Agar hormonal imbalance hai to hormonal pattern balance hota hai. Agar constitutional weakness hai (anemia, low immunity) to overall vitality improve hoti hai.',
    keyFindings: [
      'Discharge severity score treatment group mein baseline se significantly ghata',
      'Itching aur burning symptoms placebo group ke comparison mein faster resolve hue',
      'Constitutional treatment mein overall energy levels aur menstrual regularity bhi improve hui',
      'Recurrence rate homeopathy group mein follow-up period mein lower rahi',
    ],
    citation: 'CCRH Annual Report 2019–20 | Indian Journal of Research in Homoeopathy, Vol 8, 2014',
    averageTreatmentPeriod: '3–6 months (chronic cases mein 6–12 months)',
  },

  medicines: [
    {
      _key: 'med1',
      name: 'Calcarea Carbonica',
      forWhom: 'Milky white, thick, profuse discharge — especially puberty ya post-delivery mein; patient thaki hui, motapa prone, zyada sweating',
      whyHope: 'Ye medicine constitutional weakness aur hormonal setup address karti hai. Jo mahilayein physically sluggish hain, jinhein cold aur damp weather mein zyada problem hoti hai — un mein discharge frequency aur intensity dono improve hote hain.',
    },
    {
      _key: 'med2',
      name: 'Sepia',
      forWhom: 'Yellow-greenish discharge saath bearing down sensation (neeche kuch gir raha ho aisa feel) — irritable mood, indifferent to family, exhausted',
      whyHope: 'Sepia uterine aur pelvic congestion address karta hai. Hormonal imbalance se jo chronic leucorrhoea hoti hai — especially post-pregnancy ya menopausal women mein — wahan effective.',
    },
    {
      _key: 'med3',
      name: 'Pulsatilla',
      forWhom: 'Mild, non-irritating, changeable discharge — colour kabhi white kabhi yellowish; patient emotional, weepy, warmth se symptoms worse',
      whyHope: 'Pulsatilla hormonal fluctuation ke saath aane wali leucorrhoea pe kaam karta hai. Puberty ya cycle irregularity se linked cases mein — discharge stabilize hoti hai saath mein mood bhi.',
    },
    {
      _key: 'med4',
      name: 'Kreosotum',
      forWhom: 'Offensive, corrosive discharge jisse skin pe jalan ho — cloth pe yellow stain — intense itching jo raat ko zyada ho',
      whyHope: 'Ye medicine severe inflammatory type leucorrhoea mein kaam karti hai jahan discharge tissue irritation create kar raha ho. Infections ke baad chronic discharge jo strongly offensive ho — wahan effective.',
    },
    {
      _key: 'med5',
      name: 'Hydrastis Canadensis',
      forWhom: 'Thick, ropy (khichne wala), tenacious yellow discharge — cervical involvement waale cases; saath mein backache prominent',
      whyHope: 'Cervical aur vaginal mucous membrane pe direct action. Thick, sticky discharge jo easily theek nahi hoti — wahan mucous secretion normalize karne mein helpful hai.',
    },
  ],

  dietRecommended: [
    {
      _key: 'dr1',
      category: 'Probiotics & Gut Health',
      emoji: '🥛',
      items: [
        'Dahi (plain, unsweetened curd) — vaginal flora balance karne mein help karta hai, good bacteria support karta hai',
        'Chaach (buttermilk) — digestion improve karta hai aur body ko cool rakhta hai',
        'Fermented foods (idli, dosa) — gut bacteria healthier banate hain jo indirect immunity support karta hai',
      ],
    },
    {
      _key: 'dr2',
      category: 'Immunity & Healing Foods',
      emoji: '🥦',
      items: [
        'Haldi (turmeric) milk — natural anti-inflammatory aur anti-infective properties',
        'Lauki, tinda, tori (gourd vegetables) — cooling, easy digestion, body detox',
        'Amla (Indian gooseberry) — Vitamin C ka best source, immunity aur tissue healing ke liye',
        'Methi dana (fenugreek seeds) — hormonal balance mein help karta hai, leucorrhoea ke traditional use ke saath',
      ],
    },
    {
      _key: 'dr3',
      category: 'Iron & Strength Foods',
      emoji: '🌿',
      items: [
        'Palak, methi, chaulai (leafy greens) — iron deficiency se anemia leucorrhoea worse karti hai',
        'Anaar (pomegranate) — iron aur antioxidants dono, blood purification ke liye',
        'Chana, rajma, moong — protein aur iron dono, overall strength ke liye',
        'Til (sesame seeds) — iron-rich, hormonal support ke liye traditional use',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'Sugar & Refined Carbs',
      emoji: '🚫',
      items: [
        'Maida se bane items (white bread, naan, biscuits) — blood sugar spike karte hain jo yeast infection ka risk badhate hain',
        'Meetha zyada — Candida sugar pe thrive karta hai, fungal leucorrhoea worse ho sakti hai',
        'Packaged juices — hidden sugar, vaginal pH disturb karta hai',
      ],
    },
    {
      _key: 'da2',
      category: 'Spicy, Fried & Processed Foods',
      emoji: '🚫',
      items: [
        'Bahut zyada mirch, masala — vaginal tissues irritate karta hai, jalan badh sakti hai',
        'Fried snacks, chips, junk food — inflammation badhate hain, healing slow hoti hai',
        'Pickles (achaar) — high salt + acidity, vaginal environment disturb karta hai',
      ],
    },
    {
      _key: 'da3',
      category: 'Foods That Worsen Dampness',
      emoji: '💧',
      items: [
        'Cheese, paneer zyada matra mein — heavy dairy leucorrhoea worse kar sakti hai',
        'Alcohol — immunity kamzor karta hai, hormonal balance disturb karta hai',
        'Bakery items — trans fats + refined sugar combined worst combination',
      ],
    },
  ],

  dos: [
    'Cotton undergarments exclusively pehno — synthetic se nahi, cotton se bacteria nahi palete',
    'Roz hafif garam paani se clean karo — mild, unscented wash, inside nahi sirf outside',
    'Dahi daily lo (plain, unsweetened) — vaginal flora naturally balance rehti hai',
    'Apne discharge ka colour, smell, aur pattern note karo — doctor ko ye information helpful hoti hai',
    'Periods ke baad extra hygiene maintain karo — infection risk is time pe highest hota hai',
    'Treatment mein continuity rakho — homeopathic treatment kuch mahine ka hota hai, beech mein band mat karo',
    'Agar partner ko koi symptoms hain to unka bhi treatment zaroor karwao — reinfection cycle rokne ke liye',
    'Annual gynaecological check-up karwao — cervical health monitor karne ke liye',
  ],

  donts: [
    'Vagina ke andar soap ya douche mat dalo — vaginal flora completely disturb ho jaata hai',
    'Scented pads, scented wipes, deodorant sprays vaginal area pe mat use karo — chemical irritation',
    'Tight jeans ya leggings regularly mat pehno — moisture trap, infection friendly environment',
    'Discharge dekhke khud se antibiotic ya antifungal mat lo — wrong treatment situation worse karta hai',
    'Sharm ki wajah se doctor ko avoid mat karo — leucorrhoea treatable hai, untreated hai to complications',
    'Ek hi pad ya pantyliner ko zyada der tak mat rakho — bacteria ka breeding ground banta hai',
    'Stress ko ignore mat karo — chronic stress directly hormonal imbalance aur leucorrhoea worsen karta hai',
    'Self-diagnosis apps ya Google diagnosis pe depend mat ho — proper pelvic exam zaroori hai',
  ],

  faqs: [
    // CATEGORY A — Definition & Understanding
    {
      _key: 'faq1',
      question: 'Q1. Leucorrhoea kya hota hai — safed paani aana normal hai ya problem?',
      answer: 'Thoda safed ya clear discharge normal hai — ye vagina ki natural cleaning hai. Problem tab hoti hai jab discharge zyada ho, badbu aaye, colour change ho (yellow/green/grey), ya saath mein khujli ya jalan ho. Is case mein ye leucorrhoea hai aur doctor se milna zaroori hai. Normal discharge odorless ya mildly acidic smell wala hota hai aur cloth pe koi strong stain nahi chodta.',
    },
    {
      _key: 'faq2',
      question: 'Q2. Leucorrhoea ke kitne types hote hain?',
      answer: 'Leucorrhoea ke mainly 5 types hote hain — (1) Physiological: normal, hormones ki wajah se; (2) Inflammatory: bacterial ya fungal infection se; (3) Cervical: cervix ki problem se; (4) Atrophic: menopause ke baad estrogen drop se; (5) Constitutional: chronic weakness ya anemia ki wajah se. Har type ki alag treatment hoti hai — isliye discharge ka colour, smell aur timing doctor ko zaroor batana chahiye.',
    },
    {
      _key: 'faq3',
      question: 'Q3. Safed paani aur normal discharge mein kya fark hai?',
      answer: 'Normal discharge clear ya slightly white hota hai, odorless ya mild smell, aur usually ovulation ke time zyada hota hai. Leucorrhoea mein discharge thick hota hai, colour off-white se yellow ya green ho sakta hai, smell badbu wali hoti hai, aur saath mein itching ya burning bhi hoti hai. Agar cloth pe strong stain ho ya lagatar zyada discharge aaye — to ye normal nahi hai.',
    },
    {
      _key: 'faq4',
      question: 'Q4. Leucorrhoea kitni common hai India mein?',
      answer: 'India mein reproductive age (15–45 years) ki mahilayein leucorrhoea se sabse zyada pareshaan hoti hain. Studies suggest karte hain ki rural India mein 30–40% mahilayein kabhi na kabhi pathological leucorrhoea experience karti hain — lekin sharm ki wajah se majority doctor ke paas nahi jaati. Ye delay aage complications create karta hai.',
    },
    // CATEGORY B — Treatment & Cure
    {
      _key: 'faq5',
      question: 'Q5. Leucorrhoea permanently theek ho sakta hai?',
      answer: 'Haan — leucorrhoea ka permanent control bilkul possible hai. Physiological type khud se balance ho jaata hai. Infection-based type proper treatment se theek ho jaata hai. Chronic ya constitutional leucorrhoea — jisme root cause hormonal imbalance ya immunity weakness hai — us mein 3–6 months ki homoeopathic treatment se long-term relief milti hai. Jo log treatment complete karte hain aur lifestyle maintain rakhte hain, unhe recurrence bahot kam hoti hai.',
    },
    {
      _key: 'faq6',
      question: 'Q6. Leucorrhoea ka sabse effective treatment kya hai?',
      answer: 'Treatment type depend karta hai cause pe — Bacterial ya fungal infection mein antibiotic/antifungal fastest relief deta hai. Chronic ya recurrent leucorrhoea mein — jahan cause hormonal ya constitutional hai — homeopathic treatment root cause address karta hai aur long-term mein recurrence reduce karta hai. Many cases mein dono saath chalte hain — doctor ki salaah se combined approach sabse effective hoti hai.',
    },
    {
      _key: 'faq7',
      question: 'Q7. Kya homeopathy leucorrhoea mein kaam karta hai?',
      answer: 'Haan — homeopathy chronic aur recurrent leucorrhoea mein especially effective hai. CCRH-affiliated observations mein homeopathic treatment group ne discharge frequency, intensity aur associated symptoms (itching, burning, backache) mein placebo group ke comparison mein significant improvement show ki. Homeopathy ka fayda ye hai ki ye discharge ke colour, smell, texture aur patient ki overall health sab consider karke individualized treatment deta hai — isliye root cause pe kaam karta hai, sirf symptom suppress nahi karta.',
    },
    {
      _key: 'faq8',
      question: 'Q8. Leucorrhoea ki homeopathic medicine kaun si hai?',
      answer: 'Leucorrhoea mein Calcarea Carbonica, Sepia, Pulsatilla, Kreosotum, aur Hydrastis commonly use hoti hain — lekin kaunsi medicine aapke liye sahi hai ye discharge ka type, colour, smell, aur aapki overall constitution par depend karta hai. Ek qualified homoeopath consultation zaroori hai — self-medication se galat medicine lena beneficial nahi hoga.',
    },
    {
      _key: 'faq9',
      question: 'Q9. Leucorrhoea treatment mein kitna time lagta hai?',
      answer: 'Acute infection se hone wali leucorrhoea 3–7 days mein homoeopathic treatment se theek ho jaati hai. Chronic ya recurrent leucorrhoea mein homeopathic treatment 3–6 months ka period maangta hai. Constitutional weakness ya long-standing hormonal imbalance mein 6–12 months bhi lag sakte hain — lekin is dauran improvement stage by stage hoti rehti hai. Treatment beech mein band karna symptoms wapas la sakta hai.',
    },
    {
      _key: 'faq10',
      question: 'Q10. Leucorrhoea mein doctor ke paas kab jaana chahiye?',
      answer: 'Inme se koi bhi ho to turant doctor se milein: Discharge ka colour green, grey, ya blood-tinged ho; Strong, unpleasant smell aaye; Pelvic ya lower abdominal pain ho; Fever ke saath discharge ho; Pregnancy mein abnormal discharge ho; 2 hafte se zyada symptoms rah rahe ho. Ye signs infection ya PID ke ho sakte hain jo delay se worse hoti hai.',
    },
    // CATEGORY C — Pregnancy & Special Conditions
    {
      _key: 'faq11',
      question: 'Q11. Pregnancy mein safed paani aana normal hai?',
      answer: 'Haan — pregnancy mein discharge (leukorrhea) increase hona NORMAL hai. Ye vaginal walls ka circulation badh jaane ki wajah se hota hai. Normal pregnancy discharge white ya clear, mild smell, aur non-irritating hota hai. Lekin agar discharge yellow/green ho, strong smell aaye, ya saath mein itching/burning ho — to ye infection ka sign hai aur gynecologist ko turant dikhana chahiye, kyunki pregnancy mein infection se preterm labour ka risk rehta hai.',
    },
    {
      _key: 'faq12',
      question: 'Q12. Periods ke baad leucorrhoea zyada kyon ho jaata hai?',
      answer: 'Periods ke baad vaginal pH temporarily disturb hota hai — blood alkaline hota hai jo normally acidic vaginal environment ko temporarily change karta hai. Ye bacteria aur fungi ke liye temporarily friendly environment bana deta hai. Isi liye post-menstrual period mein discharge zyada hoti hai. Cotton undergarments pehno, hygiene maintain karo, aur agar ye zyada din tak rahe ya badbu aaye to doctor se milna zaroori hai.',
    },
    {
      _key: 'faq13',
      question: 'Q13. Bacchiyon ya teenage ladkiyon mein leucorrhoea kya karna chahiye?',
      answer: 'Puberty mein hormonal changes ki wajah se mild white discharge bilkul normal hai — ye vaginal flora establish hone ki process hai. Lekin agar discharge bahot zyada ho, smell aaye, ya khujli ho to ye physiological nahi hai. Teenage girls mein awareness zaroori hai — unhe samjhao ki ye tabiyat ki baat hai, sharm ki nahi. Ek female doctor ya gynaecologist se milwa do — early management future complications se bachata hai.',
    },
    {
      _key: 'faq14',
      question: 'Q14. Menopause ke baad leucorrhoea kyon hoti hai?',
      answer: 'Menopause ke baad estrogen levels dramatically girte hain jisse vaginal walls thin aur dry ho jaati hain. Is se atrophic vaginitis aur associated thin, watery discharge ho sakti hai. Ye normal aging process hai lekin agar discharge thick ho ya smell aaye to infection rule out karna zaroori hai. Homeopathy is type mein constitutional support deta hai — Sepia aur Calcarea is age group mein often helpful hoti hai.',
    },
    // CATEGORY D — Diet & Lifestyle
    {
      _key: 'faq15',
      question: 'Q15. Leucorrhoea mein kya khana chahiye aur kya nahi?',
      answer: 'Kya khayein: Plain dahi (daily — vaginal flora ke liye), hara saag (palak, methi — iron ke liye), amla (immunity ke liye), methi dana (hormonal support), haldi milk (anti-infective). Kya avoid karein: Zyada meetha — fungal infection worst enemy hai sugar. Maida, white bread, packaged juices — ye bhi blood sugar spike karte hain. Bahut zyada mirch — tissue irritation. Dahi daily khana leucorrhoea management ka sabse simple aur effective dietary step hai.',
    },
    {
      _key: 'faq16',
      question: 'Q16. Leucorrhoea mein chai peena theek hai?',
      answer: '1–2 cups chai din mein koi bada problem nahi karta. Lekin zyada chai — especially zyada sugar wali — unhelpful hai kyunki sugar fungal infections ko feed karti hai. Zyada caffeine stress hormones badhata hai jo indirect hormonal balance affect karta hai. Better alternative: adrak + haldi wali herbal chai, ya tulsi tea — ye anti-inflammatory hain aur leucorrhoea mein helpful bhi.',
    },
    {
      _key: 'faq17',
      question: 'Q17. Leucorrhoea mein exercise karna chahiye ya nahi?',
      answer: 'Haan — moderate exercise leucorrhoea management mein actually helpful hai. Walking, yoga, pranayama — ye sab blood circulation improve karte hain aur hormonal balance support karte hain. Pelvic floor exercises (Kegel exercises) especially helpful hain — pelvic tone aur vaginal health improve hoti hai. Avoid karo: Hot yoga ya bahut heavy exercise jisme bahut paseena aaye — synthetic clothes pehno nahi, cotton wear karo exercise ke time.',
    },
    // CATEGORY E — Gharelu Ilaaj & Home Care
    {
      _key: 'faq18',
      question: 'Q18. Leucorrhoea ke liye ghar pe kya kiya ja sakta hai?',
      answer: 'Ye home care steps genuinely helpful hain: Daily plain dahi khao — vaginal flora ke liye most effective home step. Haldi milk raat ko — anti-infective, healing support. Cotton undergarments exclusively — nahi synthetic. Mild, unscented water se cleanliness — no soap inside. Methi dana (1 tsp) pani mein boilkar thanda karke pine se hormonal support milta hai. Adequate sleep aur stress management — immune system ke liye. Lekin ye home care mild cases aur prevention ke liye hai — infection ya severe symptoms mein doctor consultation ZAROOR hai.',
    },
    {
      _key: 'faq19',
      question: 'Q19. Safed paani rokne ka upay kya hai?',
      answer: '"Rokna" se zyada sahi goal "balance karna" hai — kyunki kuch discharge normal aur zaroori hai. Infection-based discharge rokne ke liye: proper treatment + hygiene + diet (probiotic foods, no excess sugar). Hormonal discharge — jo ovulation ya periods ke around hoti hai — natural hai aur "rokni" nahi chahiye. Chronic leucorrhoea mein homeopathic constitutional treatment discharge ko normal range mein laata hai, completely band nahi karta — kyunki discharge band hona actually unhealthy hai.',
    },
    // CATEGORY F — Infections & Differentiation
    {
      _key: 'faq20',
      question: 'Q20. Leucorrhoea aur yeast infection (fungal) mein kya fark hai?',
      answer: 'Leucorrhoea ek broader term hai jisme har type ka abnormal vaginal discharge aata hai. Yeast infection (Candida) leucorrhoea ka ek specific cause hai — jisme white, thick, cottage cheese jaise discharge hoti hai saath mein intense khujli, jo raat ko worse hoti hai. Yeast infection ka koi specific smell nahi hota ya slightly yeasty hoti hai. Antibiotic ya steroid use ke baad, ya diabetes mein ye zyada hoti hai. Antifungal treatment fast works, plus homeopathy recurrence prevention mein helpful.',
    },
    {
      _key: 'faq21',
      question: 'Q21. Bacterial vaginosis (BV) kya hai aur leucorrhoea se kaise alag hai?',
      answer: 'Bacterial vaginosis (BV) leucorrhoea ka ek common cause hai — jisme vaginal bacteria ka natural balance disturb ho jaata hai. BV ki pehchaan: Grey-white, thin discharge, fishy smell — especially sex ke baad worse. Usually itching kam hoti hai compared to yeast infection. Ye STI nahi hai lekin sexually active women mein common hai. Antibiotic treatment fast works — homeopathy BV ke chronic ya recurrent cases mein relapse prevention mein helpful hai.',
    },
    {
      _key: 'faq22',
      question: 'Q22. Leucorrhoea se infertility ho sakti hai?',
      answer: 'Leucorrhoea khud infertility cause nahi karta — lekin jo underlying infection cause kar rahi hai woh kar sakti hai. Untreated Chlamydia, Trichomonas, ya severe BV se Pelvic Inflammatory Disease (PID) ho sakti hai jo fallopian tubes affect karti hai. Issi wajah se leucorrhoea ka timely treatment infertility prevention ke liye bhi zaroori hai. Agar leucorrhoea ke saath irregular periods, pelvic pain ya conception mein delay ho — to gynaecologist se urgent consultation karein.',
    },
    // CATEGORY G — Myths & Misconceptions
    {
      _key: 'faq23',
      question: 'Q23. Kya leucorrhoea sirf uncleanliness ki wajah se hoti hai?',
      answer: 'Nahi — ye ek myth hai. Leucorrhoea hormonal changes, immune system weakness, diabetes, stress — kai causes se ho sakti hai, sirf cleanliness ka issue nahi. Actually, zyada cleaning — especially scented soaps vagina ke andar use karna — vaginal pH disturb karta hai aur leucorrhoea worse kar sakta hai. Appropriate hygiene zaroori hai, obsessive cleaning harmful hai. Bimari se sharm nahi, doctor se milne mein sharm nahi karni chahiye.',
    },
    {
      _key: 'faq24',
      question: 'Q24. Kya leucorrhoea contagious hai — partner ko bhi ho sakta hai?',
      answer: 'Leucorrhoea khud contagious nahi hai. Lekin agar cause ek sexually transmitted infection hai (jaise Trichomonas ya Chlamydia) — to woh partner ko transfer ho sakti hai. Isi liye agar STI-based leucorrhoea diagnose ho to partner ka bhi treatment zaroor karwao — warna treatment ke baad reinfection cycle chalta rahega. Physiological ya fungal leucorrhoea generally partner ko transfer nahi hoti.',
    },
    {
      _key: 'faq25',
      question: 'Q25. Ek baar leucorrhoea theek hone ke baad wapas aa sakti hai?',
      answer: 'Haan — agar underlying cause address nahi hua to recurrence possible hai. Hormonal imbalance, diabetes, ya poor immunity wali women mein recurrence common hai. Recurrence rokne ke liye: underlying condition treat karo (thyroid, diabetes), probiotic foods daily lo, cotton undergarments, stress manage karo, aur agar homeopathic constitutional treatment chal raha hai to complete karo — aadha chhodna recurrence ka biggest reason hai. Jo patients full course complete karte hain unme recurrence significant lower hoti hai.',
    },
  ],

  sources: [
    { _key: 's1', name: 'Council for Research in Homoeopathy (CCRH) | Annual Report 2019–20 | ccrh.gov.in' },
    { _key: 's2', name: 'Indian Journal of Research in Homoeopathy | Vol 8, Issue 1 | 2014' },
    { _key: 's3', name: 'WHO — Vaginal discharge: causes and management | who.int' },
    { _key: 's4', name: 'PubMed — Bacterial Vaginosis and Homeopathy: Case Observations | 2018' },
    { _key: 's5', name: 'National Health Portal India — Leucorrhoea | nhp.gov.in' },
    { _key: 's6', name: 'NCBI — Vaginal flora and leucorrhoea pathophysiology review | 2021' },
  ],
}

async function seed() {
  console.log('🌱 Seeding Leucorrhoea...')
  await client.createOrReplace(disease)
  console.log('✅ Leucorrhoea disease document created/updated: disease-leucorrhoea')
  console.log('🌐 Live at: https://homeopedia.in/diseases/leucorrhoea')
}

seed().catch(console.error)
