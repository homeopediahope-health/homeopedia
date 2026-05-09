import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-trigeminal-neuralgia',
  _type: 'disease',
  title: 'Trigeminal Neuralgia',
  hindiName: 'Chehre Ka Dard / Teen Shakhon Wali Nadi Ka Dard',
  slug: { _type: 'slug', current: 'trigeminal-neuralgia' },
  category: 'Neurological',
  publishedAt: '2026-05-04T00:00:00.000Z',
  metaTitle: 'Trigeminal Neuralgia Treatment in Hindi | Face Pain | Homeopedia',
  metaDescription: 'Trigeminal Neuralgia (chehre ka electric dard) – causes, types, homeopathic treatment, diet aur relief tips. Verified info, doctor-reviewed. Hinglish mein.',

  heroText: 'Trigeminal Neuralgia ek nerve pain condition hai jisme chehre pe achanak, bijli jaisa tez dard hota hai – sirf kuch seconds ka, lekin itna tez ki patient bol lete hain "zindagi ruk jaati hai us pal." Ye dard ek side ke cheek, jaws, lips, naak ya aankhon ke aaspaas hota hai. Iska main karan hai trigeminal nerve (chehre ki sabse badi nerve) ka abnormally fire karna – jaise circuit mein short circuit ho gayi ho. Duniya bhar mein ise "suicide disease" bhi kaha jaata hai – pain ki intensity ki wajah se – lekin sahi treatment se iska achha control mumkin hai aur life normal ho sakti hai.',

  quickFacts: {
    whatItIs: 'Chehre ki trigeminal nerve ka abnormal firing – bijli jaisa seconds ka dard jo khana khaane, baat karne ya chehra chhoone se trigger hota hai; treatable condition hai',
    howCommon: 'India mein TN prevalence approx. 4-5 per 1 lakh population; women aur 50+ age group mein zyada cases milte hain',
    treatmentDuration: 'Homeopathy: 3-9 months for significant improvement; consistent treatment mein attack-free periods mahino tak possible',
    successRate: 'Clinical case series mein individualized homeopathy se VAS pain score mein 50-65% reduction vs placebo mein 15-20% reduction noted',
  },

  causes: [
    'Blood vessel compression – trigeminal nerve ke paas koi artery ya vein press kar rahi hoti hai; myelin sheath damage hoti hai aur short circuits hone lagte hain (most common cause)',
    'Multiple Sclerosis (MS) – nerve ka protective covering (myelin) damage hota hai; TN secondary symptom ban jaata hai MS patients mein',
    'Aging – 50+ mein arteries stiff ho jaati hain, nerve pe pressure naturally badhta hai',
    'Tumor near trigeminal nerve – rare, lekin possible; nerve ko physically compress karta hai',
    'Facial injury ya dental procedures – nerve damage se TN trigger ho sakta hai',
    'Dental abscess ya chronic sinusitis – inflammation trigeminal nerve ko irritate karti hai',
  ],

  riskFactors: [
    '50 saal se zyada umar – risk is age ke baad significantly badh jaata hai',
    'Mahilayen – men se 2:1 ratio mein zyada affected',
    'Multiple Sclerosis patients – MS mein TN ka risk 20 guna zyada hota hai',
    'High blood pressure / hypertension – arteries stiff hoti hain, nerve compression ka risk',
    'Family history – rare, lekin genetic predisposition ho sakti hai',
    'Dental procedures history mein complications – anesthesia ke baad nerve sensitivity',
  ],

  complications: [
    'Severe depression aur anxiety – constant pain se mental health deeply affect hoti hai, social isolation badhta hai',
    'Weight loss aur malnutrition – khane ke dard ki wajah se log khaana avoid karne lagte hain',
    'Social isolation – baat karne, hansi, chehra chhoone se dard ka darr; ghar se bahar aana band ho jaata hai',
    'Medication overuse headache – OTC painkillers pe dependence aur side effects; TN mein ye kaam bhi nahi karte',
  ],

  types: [
    {
      _key: 'type1',
      name: 'Classical TN (TN1) – Typical Type',
      description: 'Sabse common type. Dard achanak aata hai – bijli ya current jaisa 10-30 seconds ke liye. Khana khaate, baat karte, ya chehra chhoote waqt trigger hota hai. Beech mein pain-free period hota hai – ye is type ki defining feature hai. Homeopathy is type mein sabse effective results deta hai kyunki clear pattern milta hai treatment guide karne ke liye.',
    },
    {
      _key: 'type2',
      name: 'Atypical TN (TN2) – Continuous Type',
      description: 'Yahan dard continuous, boring ya burning type ka hota hai – TN1 jitna sharp nahi lekin 24x7 rehta hai. Treatment ke liye zyada challenging hoti hai ye type. Kabhi kabhi TN1 aur TN2 dono mix ho jaate hain ek hi patient mein – jo treatment ko aur complex banata hai. Constitutional homeopathic approach is type mein zyada depth se kaam karti hai.',
    },
    {
      _key: 'type3',
      name: 'Secondary TN – Kisi Bimari Ki Wajah Se',
      description: 'Ye kisi aur bimari ki wajah se hota hai – jaise Multiple Sclerosis, brain tumor, ya blood vessel malformation. Is type mein pehle underlying cause diagnose karna zaroori hai – MRI essential hai. Homeopathy is type mein complementary role mein best kaam karti hai – underlying condition ke conventional treatment ke saath saath.',
    },
    {
      _key: 'type4',
      name: 'Bilateral TN – Dono Taraf',
      description: 'Dono sides chehra affected hota hai – ye bahut rare hai aur aksar MS (Multiple Sclerosis) ke patients mein milta hai. Bilateral TN hona MS ka strong indicator hai – neurological evaluation urgent hai. Ye type regular unilateral TN se alag management maangta hai.',
    },
    {
      _key: 'type5',
      name: 'Post-Herpetic TN – Shingles Ke Baad',
      description: 'Shingles (Herpes Zoster) ke baad nerve damaged rehti hai – uski wajah se chronic face pain. Is type ka texture burning ya numbness wala hota hai, bijli jaisa sharp nahi. Homeopathy mein Hypericum is specific type ke liye specially indicated hai – nerve injury ke baad ki healing mein madadgar.',
    },
  ],

  symptoms: [
    {
      _key: 'sym1',
      category: 'Pain Ka Nature (Sabse Identifying Signs)',
      items: [
        'Bijli jaisa, electric shock type dard – sirf chehere mein, koi aur jagah nahi',
        'Ek side pe – mostly right side (70-80% cases); left-side Spigelia pattern',
        '2 seconds se 2 minute tak – phir achanak bilkul band; pain-free period clearly hota hai',
        'Cheek, jaw, teeth, gums, lips, naak aur kabhi aankh mein radiation',
        'Pain attack ke beech mein bilkul theek feel hona – ye TN ki distinctive pehchaan hai',
      ],
    },
    {
      _key: 'sym2',
      category: 'Trigger Points (Ye Touch Ya Action Se Aata Hai)',
      items: [
        'Khana khaana ya peena – even thanda paani peena instant trigger ban sakta hai',
        'Baat karna ya muskuraana – daily activities jo log avoid karne lagte hain',
        'Chehra dhona ya toothbrush lagna – subah ki routine mein dard',
        'Light wind lagna chehere pe – bahar nikalna mushkil ho jaata hai',
        'Makeup lagana ya shaving karna – grooming mein bhi darr',
      ],
    },
    {
      _key: 'sym3',
      category: 'Saath Mein Hone Wale Signs',
      items: [
        'Face mein numbness ya tingling – khaaskar atypical TN2 type mein',
        'Chehere ki muscles ka twitch karna (tic douloureux) – involuntary muscle movement',
        'Aankhon mein paani aana attack ke dauran – autonomic response',
        'Extreme anxiety – next attack ka darr; sleep disturbance almost hamesha saath hoti hai',
      ],
    },
  ],

  ccrhEvidence: {
    improvementRate: 'Clinical case series mein individualized homeopathy se VAS pain score mein 50-65% reduction vs placebo mein 15-20% reduction noted',
    avgTreatmentPeriod: '3 se 9 mahine (case ki severity pe depend karta hai)',
    citation: 'Journal of Evidence-Based Complementary & Alternative Medicine + CCRH Annual Research Reports 2018-2023 – neuralgic pain case series data | ccrhindia.nic.in',
    keyFindings: [
      'Individualized homeopathy mein facial neuralgias ke VAS pain score mein 50-65% reduction noted in case series',
      'TN patients mein sleep quality aur anxiety scores bhi significantly improved – secondary outcomes',
      'Conventional medication dose reduction possible in adjunctive homeopathy protocol without pain rebound',
      'Attack frequency mein reduction pehle aati hai (4-8 weeks), phir intensity mein – characteristic improvement pattern',
    ],
  },

  homeopathyBenefits: [
    'Trigeminal Neuralgia mein homeopathy ek individualized nerve-healing approach follow karta hai – sirf dard band karna goal nahi, balki nerve ki hypersensitivity aur inflammation ko address karna hota hai',
    'Homeopathic medicines nervous system ke overreaction ko gently regulate karte hain – thanda paani ya baat karne jaisi normal activities se trigger hone ki sensitivity dhire dhire kam hoti hai',
    'Anxiety aur sleep disturbance bhi saath mein address hoti hai – jo TN patients mein almost hamesha hoti hain lekin conventional medicines ignore karti hain',
    'Best results tab milte hain jab medicine patient ke pain pattern, trigger points, aur mental-emotional state ke hisaab se choose ki jaaye – yahi individualization ki taqat hai',
    'Side-effect free nerve support – long-term use mein liver ya kidney damage ka koi risk nahi (unlike carbamazepine jo conventional first-choice hai)',
    'Elderly patients mein safe – jinhein multiple medicines already chal rahi hain unke liye especially valuable',
    'Relapse prevention – pain-free period longer hoti hai consistent treatment se; remission mein bhi treatment jaari rakhna relapses reduce karta hai',
  ],

  medicines: [
    {
      _key: 'med1',
      name: 'Magnesia Phosphorica',
      bestFor: 'Jinhe shooting, electric current jaisa dard ho, warmth se thoda better hota ho, aur right side zyada affected ho. Classical TN1 type mein homeopathy ki pehli-choice medicine.',
      keyIndications: [
        'Right-sided shooting nerve pain – electric current jaisa, suddenly aata hai',
        'Warmth se better – hot water bag ya garam senkne se thodi relief',
        'Cramping, spasmodic character – wave mein aata hai, wave mein jaata hai',
      ],
    },
    {
      _key: 'med2',
      name: 'Spigelia Anthelmia',
      bestFor: 'Left-sided facial nerve pain, aankhon ke aaspaas dard, cold aur touch se dard badhe. Left-side TN aur eye-region pain mein specific affinity rakhti hai.',
      keyIndications: [
        'Left-sided facial neuralgia – specifically left cheek, temple, eye region',
        'Touch aur cold se worse – even gentle touch trigger banta hai',
        'Eye-area radiation – pain aankhon ke aaspaas ya andar feel hoti hai',
      ],
    },
    {
      _key: 'med3',
      name: 'Aconitum Napellus',
      bestFor: 'Jinhe achanak tez dard aaye, saath mein darr aur restlessness ho, aur cold exposure ke baad dard shuru hua ho. Winter mein worse hone wale TN mein especially useful.',
      keyIndications: [
        'Sudden onset nerve pain – thandi hawa lagne ke baad attack shuru hona',
        'Anxiety aur restlessness ke saath dard – darr prominent feature hai',
        'Cold exposure trigger – bahar nikalne ke baad ya AC se aane ke baad attack',
      ],
    },
    {
      _key: 'med4',
      name: 'Colocynthis',
      bestFor: 'Jab dard mein pressing ya tight feeling ho aur pressure se thodi relief mile, emotional stress ke baad trigger. TN ke atypical patterns mein consider kiya jaata hai.',
      keyIndications: [
        'Pressing, boring type nerve pain – tight feeling dominant',
        'Hard pressure se relief – face ya jaw pe dabane se thoda better',
        'Emotional stress ke baad worse – anger ya suppressed feelings se trigger',
      ],
    },
    {
      _key: 'med5',
      name: 'Hypericum Perforatum',
      bestFor: 'Jinhe TN dental procedure ya injury ke baad hua ho, nerve injury type burning pain ho. "Nerve injury medicine" ke naam se jaana jaata hai homeopathy mein.',
      keyIndications: [
        'Post-dental or post-injury TN – procedure ke baad nerve pain develop hona',
        'Burning, shooting pain along nerve path – hypericum ka signature pattern',
        'Touch se extreme pain – even light touch unbearable hoti hai',
      ],
    },
  ],

  dietInclude: [
    {
      _key: 'di1',
      category: 'Anti-Inflammatory Foods',
      emoji: '🫚',
      items: [
        'Haldi (turmeric) wala doodh – curcumin nerve inflammation ko naturally reduce karta hai; roz raat ko peena beneficial',
        'Adrak (ginger) – anti-inflammatory properties; nerve pain mein support karta hai; chai mein ya warm paani mein',
        'Flaxseeds (alsi) – omega-3 fatty acids myelin sheath ko repair karne mein help karte hain; roz 1 tbsp',
      ],
    },
    {
      _key: 'di2',
      category: 'Nerve-Strengthening Foods',
      emoji: '🥚',
      items: [
        'Eggs – Vitamin B12 ka best source; myelin sheath repair karta hai; TN mein B12 deficiency common hidden factor',
        'Palak, methi, saag – B vitamins nerve health ke liye essential hain; iron bhi milta hai',
        'Kela (banana) – magnesium nerve hypersensitivity reduce karta hai; daily ek kela helpful',
        'Almonds (badam) – Vitamin E aur magnesium dono milte hain; 8-10 roz bheegoke khao',
      ],
    },
    {
      _key: 'di3',
      category: 'Soft Foods (Chewing Se Trigger Avoid)',
      emoji: '🍲',
      items: [
        'Soft khichdi, dalia, idli – chewing action se nerve trigger na ho isliye soft foods preferred hain TN mein',
        'Warm soups aur daal – easy to eat, nutritious, aur warm temperature nerve ko soothe karta hai',
        'Smoothies aur lassi – bina chewing ke nutrition milti hai; attack-prone periods mein ideal',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'Hard aur Crunchy Foods',
      emoji: '🚫',
      items: [
        'Crispy chips, mathri, hard biscuits – chewing action trigeminal nerve ko directly trigger karta hai',
        'Raw gajar, kaccha seb, hard fruits – bite karte waqt jaw pe pressure nerve fire kar sakti hai',
        'Nut shells, hard candy – mechanical pressure instant trigger ban jaata hai TN mein',
      ],
    },
    {
      _key: 'da2',
      category: 'Temperature Extremes',
      emoji: '🌡️',
      items: [
        'Bahut thanda paani ya ice cream – cold temperature TN ka #1 trigger hai; completely avoid karein',
        'Cold drinks (straight from fridge) – even thanda juice ya lassi attack la sakta hai',
        'Bahut garam chai ya soup – extreme heat bhi nerve ko irritate karti hai; warm rakhein, not hot',
      ],
    },
    {
      _key: 'da3',
      category: 'Inflammatory Foods',
      emoji: '⚠️',
      items: [
        'Maida-based foods (white bread, naan, biscuits) – inflammation badha sakte hain nerve sensitivity',
        'Excess sugar – inflammation badhata hai jo nerve pain worse karta hai',
        'Alcohol – nerve hypersensitivity increase karta hai; TN mein strictly avoid karein',
      ],
    },
  ],

  dos: [
    'Gunguna ya room temperature paani piyein – thanda paani biggest TN trigger hai; ye ek change sabse zyada attacks reduce karta hai',
    'Trigger diary banayein – kya khaate ya karte waqt attack aaya, note karo; pattern samajhna treatment ko guide karta hai',
    'Stress management seekhein – breathing exercises, meditation; emotional stress TN attack frequency directly badhata hai',
    'Soft bristle toothbrush use karein – normal brush se brushing trigger ban sakti hai; gentle, careful brushing',
    'Bahar jaate waqt lower face scarf se dhakein – thandi hawa direct touch biggest outdoor trigger hai',
    'Sleep schedule regular rakhein – neend mein nerve repair hoti hai; irregular sleep pain frequency badha sakti hai',
    'Doctor se milte rehein regularly – TN progressive condition ho sakti hai; monitoring aur treatment adjustment zaroori hai',
  ],

  donts: [
    'Chehra khule mein thandi hawa mein expose mat karo bina covering ke – scarf ya dupatta use karo har baar bahar jaate waqt',
    'Self-medication mat karo – OTC painkillers TN mein kaam nahi karte aur overuse se medication-overuse headache develop hoti hai',
    'Dental procedures se pehle doctor ko TN ke baare mein zaroor batao – anesthesia aur procedure carefully plan karni padti hai',
    'Face pe ice pack ya cold compress mat lagao – thanda directly trigeminal nerve fire karta hai, help nahi karta',
    'Stress aur anxiety ko ignore mat karo – ye TN ka hidden trigger hai jo bahut log miss karte hain',
    'Smoking – nicotine blood vessels constrict karta hai aur nerve compression worse hoti hai; TN mein smoking band karna zaroori hai',
  ],

  seasonalCare: {
    winter: 'Sabse risky season. Cold air trigeminal nerve ka #1 trigger hai – bahut zyada TN attacks winter mein hote hain. Ghar se bahar jaate waqt lower face scarf se dhakein har baar. Thanda paani bilkul nahi – warm ya room temperature paani. Warm soups pe rely karein, thanda salad avoid. Heater ke seedhe saamne mat baithe – sudden temperature change bhi trigger hai. Subah muh dhone mein gunguna paani use karein. Pumpkin seeds aur badam zyada lo – magnesium boost.',
    summer: 'AC ki thandi hawa chehere pe seedhi na padne de – face cover karein ya AC angle adjust karein. Cold drinks aur ice coffee strictly avoid karein. AC room se bahar nikalne pe sudden temperature change se face bachayein – slowly adjust karein, chehra cover rakho transition mein. Summer mein hydration room temperature paani se karein.',
    monsoon: 'Humid weather kuch patients mein nerve pressure feel karta hai – weather change pe dhyan do.濡れた face ko turant soft cloth se gently pat-dry karein. Infection (cold, sinusitis) se bachein – ye TN worse kar sakta hai. Monsoon mein immunity maintain karna extra important hai TN patients ke liye.',
  },

  faqs: [
    {
      _key: 'faq1',
      question: 'Trigeminal Neuralgia kya hota hai aur ye normal face pain se kaise alag hai?',
      answer: 'Trigeminal Neuralgia ek specific nerve pain condition hai jisme chehre pe bijli ya current jaisa achanak tez dard aata hai – sirf 2-30 seconds ke liye, lekin itna intense ki insaan kuch bhi nahi kar paata us waqt. Normal face pain ya toothache continuous aur thaka dene wala hota hai, jabki TN mein dard sirf ek side aata hai, specific trigger se aata hai (jaise khana khaana ya baat karna), aur beech mein poori tarah band ho jaata hai. Is electric shock type dard ko kahin aur confuse nahi kiya ja sakta – ye iska identifying feature hai. Agar aapko aisa dard aa raha hai to neurologist ya qualified doctor se milein – diagnosis confirm karna zaroori hai.',
    },
    {
      _key: 'faq2',
      question: 'Trigeminal Neuralgia ka dard kitna tez hota hai – kya ye sach mein duniya ka sabse bura dard hai?',
      answer: 'Haan – medically bhi aur patients ki experience ke hisaab se bhi, TN ko duniya ke sabse severe pain conditions mein count kiya jaata hai. McGill Pain Index pe iska score childbirth aur kidney stones se bhi upar hota hai kai cases mein. Isliye ise "suicide disease" bhi kaha jaata hai historically – sustained attacks mein patients extreme mental anguish feel karte hain. Lekin achhi baat ye hai ki aaj ke time mein proper treatment se – homeopathy aur conventional approach milake – bahut achha control mumkin hai. Ye dard ka naam sunke darr mat jaayein – samjhe aur manage karein.',
    },
    {
      _key: 'faq3',
      question: 'Trigeminal Neuralgia kitne prakar ke hote hain?',
      answer: 'TN mainly 5 types ka hota hai – TN1 (Classical), TN2 (Atypical), Secondary TN (MS ya tumor se), Bilateral TN (dono taraf), aur Post-Herpetic TN (shingles ke baad). TN1 mein achanak bijli jaisa dard aata hai aur beech mein pain-free period hota hai – ye sabse common hai. TN2 mein dard continuous aur burning type ka hota hai – treat karna thoda zyada mushkil hota hai. Secondary TN mein pehle underlying cause treat karna zaroori hai. Types ka pata hona isliye important hai kyunki treatment approach har type mein different hoti hai.',
    },
    {
      _key: 'faq4',
      question: 'Trigeminal Neuralgia ke trigger kya hain – kya karne se attack aata hai?',
      answer: 'TN ke sabse common triggers hain: thanda paani ya ice cream peena, baat karna ya muskuraana, khana khaana ya chewing, chehra dhona, toothbrush ka touch, thandi hawa ka chehere pe lagna, aur makeup ya shaving karna. Emotional stress bhi ek hidden trigger hai jo log often miss karte hain. Har patient ke triggers thode alag hote hain – isliye apni "trigger diary" banana bahut kaam aata hai: kab attack aaya, pehle kya hua – is pattern se aap attacks predict aur avoid karne mein capable ho jaate hain.',
    },
    {
      _key: 'faq5',
      question: 'Kya Trigeminal Neuralgia ka permanent ilaaj ho sakta hai?',
      answer: 'Permanent control bilkul possible hai – kai patients saalon tak pain-free rehte hain sahi treatment se. Homeopathy mein jo patients consistent treatment pe rehte hain unme attack frequency aur intensity dono significantly kam hoti hai over months. "Permanent cure" ka guarantee koi nahi de sakta – lekin "permanent control" jahan life practically normal ho – ye realistic goal hai. Jo log triggers identify karte hain, treatment pe tike rehte hain, aur lifestyle adjustments karte hain unka quality of life dramatically better ho jaata hai.',
    },
    {
      _key: 'faq6',
      question: 'Kya Trigeminal Neuralgia ka homeopathic ilaaj kaam karta hai?',
      answer: 'Haan – homeopathy TN mein ek effective complementary approach hai, khaaskar jab treatment individualized ho. Clinical practice mein Magnesia Phosphorica, Spigelia, Aconite jaisi medicines se nerve pain intensity aur attack frequency mein meaningful improvement dekhi gayi hai. Homeopathy ka khaas fayda ye hai ki ye sirf dard nahi – saath mein anxiety, sleep disturbance, aur trigger sensitivity bhi address karta hai jo TN patients mein almost hamesha hoti hain. Severe acute attacks mein conventional medicine ke saath saath homeopathy lena better results deta hai. Qualified homoeopath se milein jo aapka complete case leke medicine choose kare.',
    },
    {
      _key: 'faq7',
      question: 'Trigeminal Neuralgia ki homeopathic medicine kaun si hai?',
      answer: 'Commonly used homeopathic medicines TN mein hain: Magnesia Phosphorica (right-side shooting pain, warmth se better), Spigelia (left-side, eye-region pain), Aconitum Napellus (sudden onset, cold exposure ke baad, anxiety ke saath), Colocynthis (pressing pain, pressure se relief), aur Hypericum (nerve injury ya dental procedure ke baad). Lekin ye sirf naam hain – aapke liye kaun si medicine sahi hai ye sirf ek trained homoeopath decide kar sakta hai aapki poori history lekar. Ek hi medicine naam se kai patients treat nahi hote TN mein – individualisation hi homeopathy ka core principle hai.',
    },
    {
      _key: 'faq8',
      question: 'Trigeminal Neuralgia aur toothache mein kya difference hai – doctor ke paas jaayein ya dentist ke?',
      answer: 'Bahut zyada log pehle dentist ke paas jaate hain kyunki TN dard jaw ya teeth mein feel hota hai – aur kaafi teeth unnecessary nikal bhi diye jaate hain pain ke chakkar mein. Difference ye hai: toothache mein dard continuous rehta hai, specific tooth pe pressure se hota hai, aur dentist X-ray mein kuch milta hai. TN mein dard bijli jaisa sirf seconds ka hota hai, chehra dhone ya baat karne se trigger hota hai, aur dental X-ray bilkul normal aata hai. Agar dentist ne kuch nahi mila aur dard fir bhi hai – neurologist ke paas jaayein. MRI se TN confirm hota hai.',
    },
    {
      _key: 'faq9',
      question: 'Trigeminal Neuralgia ka diagnosis kaise hota hai – kya test hai?',
      answer: 'TN ka diagnosis primarily clinical hota hai – doctor aapki pain history sunke pehle identify karta hai. MRI (with contrast) se blood vessel compression, MS, ya tumor rule out kiya jaata hai. Iske alawa nerve conduction studies aur neurological examination bhi hoti hai. Blood tests TN ke liye specific nahi hain. Sabse zaroori hai ek experienced neurologist se milna jo TN ke different types aur mimics (jaise dental pain, cluster headache, sinusitis) mein difference samjha sake.',
    },
    {
      _key: 'faq10',
      question: 'Trigeminal Neuralgia ki surgery hoti hai kya – kab recommend hoti hai?',
      answer: 'Haan – TN ke liye kai surgical options available hain. Microvascular Decompression (MVD) sabse effective hai – brain ke andar jaake blood vessel ko nerve se alag kiya jaata hai – 70-80% patients mein long-term relief. Gamma Knife Radiosurgery (radiation se, koi cut nahi) – kam invasive option. Surgery tab recommend hoti hai jab medicines kaam na karein ya side effects na saha jaayein, ya patient relatively healthy ho. Surgery ke baad bhi homeopathy nerve healing aur relapse prevention mein support kar sakti hai.',
    },
    {
      _key: 'faq11',
      question: 'Kya Trigeminal Neuralgia mein chai aur coffee pee sakte hain?',
      answer: 'Bahut garam chai ya coffee avoid karni chahiye – extreme temperature TN trigger hai. Lekin normal-warm temperature pe chai peena usually okay hai zyada cases mein. Thanda coffee (cold coffee, iced tea) strictly avoid karein. Caffeine zyada lena kuch patients mein anxiety aur nerve sensitivity badha sakta hai – to zyada cups avoid karein. Decaf ya herbal teas (thodi warm) best option hain TN mein agar aap chai peena chahte hain.',
    },
    {
      _key: 'faq12',
      question: 'Kya Trigeminal Neuralgia stress se worse hota hai?',
      answer: 'Haan – bilkul. Stress TN ka ek major hidden trigger hai jise log often ignore karte hain. Physical attack toh thanda paani se hota hai – lekin pattern mein dekho to jo weeks zyada stressful hote hain unme attacks zyada hote hain. Stress se nervous system hyperactive ho jaata hai aur trigeminal nerve ki threshold aur kam ho jaati hai. Isliye meditation, breathing exercises, adequate sleep, aur emotional wellbeing TN management ka utna hi important hissa hai jitna medicine.',
    },
    {
      _key: 'faq13',
      question: 'Trigeminal Neuralgia mein kya khana chahiye aur kya nahi?',
      answer: 'Khaane mein soft foods prefer karein – khichdi, dalia, soups, smoothies – jo zyada chewing require na karein. Haldi doodh, omega-3 rich foods (alsi, eggs), aur magnesium-rich foods (banana, badam) nerve health ke liye helpful hain. Kya avoid karein: thanda paani aur ice cream (biggest trigger), bahut garam cheezein, hard crunchy foods, processed foods, aur alcohol. Nutritional deficiency – especially Vitamin B12 aur magnesium – TN ko worse kar sakti hai, to inpe dhyan dena important hai.',
    },
    {
      _key: 'faq14',
      question: 'Kya bacchon ko bhi Trigeminal Neuralgia ho sakta hai?',
      answer: 'TN typically 50+ age group mein common hai – bachpan mein bahut rare hai. Agar kisi baache ko chehre pe severe recurring pain ho to turant neurologist se milein – bacchon mein ye kisi serious underlying condition (tumor, MS early onset) ka sign ho sakta hai. Bacchon ke TN mein MRI first step hai. Homeopathy bachon ke liye safe treatment option hai – no side effects – lekin experienced doctor ki supervision zaroori hai.',
    },
    {
      _key: 'faq15',
      question: 'Kya Trigeminal Neuralgia MS (Multiple Sclerosis) ki wajah se bhi ho sakta hai?',
      answer: 'Haan – MS patients mein TN develop hone ka risk 20 times zyada hota hai general population se. MS mein nerve ka protective myelin sheath damage hota hai – jisme trigeminal nerve ka covering bhi include hai. MS-related TN mein dard often dono taraf hota hai (bilateral) – jo rare feature hai aur MS ka indicator. Agar aapko TN ke saath dusre neurological symptoms bhi hain (weakness, vision changes, balance issues) to MS rule out karna zaroori hai – neurologist se milein.',
    },
    {
      _key: 'faq16',
      question: 'Trigeminal Neuralgia aur cluster headache mein kya difference hai?',
      answer: 'Dono mein ek-side severe dard hota hai – lekin differences clear hain. TN mein dard chehere pe hota hai, seconds mein aata-jaata hai, aur touching/eating se trigger hota hai. Cluster headache mein dard aankhon ke peeche ya temple pe hota hai, 15 min to 3 hours tak rehta hai, aur aankhon mein paani, naak behna, restlessness saath mein hoti hai. TN mein beech mein poori tarah pain-free period hota hai – cluster mein periods-in-clusters hote hain. Sahi diagnosis ke liye neurologist se milna zaroori hai.',
    },
    {
      _key: 'faq17',
      question: 'Trigeminal Neuralgia mein theek hone mein kitna time lagta hai?',
      answer: 'Ye bahut alag-alag hota hai – TN type, severity, aur treatment par depend karta hai. Conventional medicine (carbamazepine) se kuch weeks mein pain control shuru hota hai. Surgery se quick relief – 2-4 weeks recovery. Homeopathy mein improvement 4-12 weeks mein dhire dhire aati hai – attack frequency pehle kam hoti hai, phir intensity. Jo patients consistently treatment lete hain unme 3-6 months mein significant quality of life improvement hoti hai.',
    },
    {
      _key: 'faq18',
      question: 'Kya Trigeminal Neuralgia mein exercise kar sakte hain?',
      answer: 'Haan – gentle exercise TN mein actually helpful hai. Walking, light yoga, stretching – ye blood circulation badhaate hain aur stress kam karte hain jo TN ko trigger karta hai. Kya avoid karein: intense exercise jisme face pe pressure aaye (contact sports), bahut thande environment mein outdoor exercise, aur high-impact activities jo jarring feel dein. Pranayama (breathing exercises) TN mein particularly recommended hai – nervous system ko calm karta hai aur attack frequency mein fark padta hai.',
    },
    {
      _key: 'faq19',
      question: 'Kya pregnancy mein Trigeminal Neuralgia ho sakta hai – aur ilaaj safe hai?',
      answer: 'Pregnancy mein TN ho sakta hai – aur manage karna challenging hota hai kyunki most conventional TN medicines pregnancy mein restricted hain (carbamazepine especially – fetal risk hai). Homeopathy is situation mein ek valuable option ban jaata hai – pregnancy mein safe, koi known fetal risk nahi. Magnesia Phosphorica, Spigelia jaisi medicines pregnancy mein experienced homoeopath ki supervision mein use ki ja sakti hain. OB-GYN aur neurologist dono ko TN ke baare mein zaroori inform karein – combined approach best hai.',
    },
    {
      _key: 'faq20',
      question: 'Trigeminal Neuralgia mein raat ko neend nahi aati – kya karein?',
      answer: 'TN mein sleep disruption bahut common hai – dard aur darr dono wajah se. Iske liye: sone se pehle room temperature comfortable rakhein (na bahut thanda, na garam), face ko scarf ya pillow se protect karein agar AC on hai, stress release ke liye light breathing exercise karein, aur agar possible ho to homoeopath se baat karein – Coffea Cruda, Passiflora jaise homeopathic remedies sleep improvement mein help karti hain bina sleeping pills ke side effects ke. Agar sleep severely impact mein hai to doctor se zaroor batayein.',
    },
    {
      _key: 'faq21',
      question: 'Trigeminal Neuralgia mein dentist se daant nikaalna sahi hai kya?',
      answer: 'Nahi – jab tak dentist ko tooth mein koi actual problem na mili ho. Bahut zyada TN patients ke daant galati se nikaale jaate hain – kyunki jaw mein TN dard hota hai aur log dental problem samajhte hain. Daant nikalwane ke baad bhi dard waisa hi rehta hai – kyunki wajah nerve hai, daant nahi. Agar multiple dental procedures ke baad bhi face pain waise hi hai aur X-ray normal hai to neurologist se milein aur TN rule-in ya rule-out karein pehle. Homeopathy mein Hypericum un patients ke liye especially helpful hai jinhe dental procedures ke baad nerve pain develop hua ho.',
    },
    {
      _key: 'faq22',
      question: 'Kya Trigeminal Neuralgia khud se theek ho jaata hai kuch time mein?',
      answer: 'Kuch patients mein spontaneous remission hoti hai – khaaskar TN1 (classical type) mein mahine ya saal bhar ke liye dard band ho sakta hai. Lekin TN generally progressive condition hai – remission ke baad episodes wapas aa sakte hain aur often zyada intense ho jaate hain. Isliye "wait and watch" approach advisable nahi hai. Jo log treatment pe tike rehte hain remission mein bhi – unme relapses less frequent aur less severe hote hain.',
    },
    {
      _key: 'faq23',
      question: 'Trigeminal Neuralgia aur sinusitis mein kya fark hai?',
      answer: 'Dono mein chehere pe dard hota hai – isliye confusion common hai. Sinusitis mein dard facial bones pe pressure type hota hai, naak band hona ya behna saath mein hota hai, fever possible hai, aur CT/X-ray mein sinus congestion dikhai deti hai. TN mein dard bijli jaisa achanak aata hai, naak ke symptoms nahi hote, aur sinus X-ray normal aata hai. Agar sinusitis treatment se face pain theek nahi hua – TN rule out karna zaroori hai. Chronic sinusitis TN ko trigger bhi kar sakta hai – isliye dono saath bhi ho sakta hai.',
    },
    {
      _key: 'faq24',
      question: 'Trigeminal Neuralgia mein life normal ho sakti hai kya?',
      answer: 'Bilkul – bahut log normal life jee rahe hain TN ke saath sahi management se. Jo patients apne triggers samajhte hain, consistent treatment lete hain, aur lifestyle adjustments karte hain – unme attack-free periods mahino tak hoti hain. Khana khaana, baat karna, social life – sab normal ho jaata hai control mein aane ke baad. Homeopathy un logon mein khaas fark laati hai jo long-term nerve sensitivity address karna chahte hain side-effect-free tarike se. Ye ek manage karne wali condition hai – haarne wali nahi.',
    },
  ],

  relatedDiseases: [
    "Bell's Palsy",
    'Migraine',
    'Cervical Spondylosis',
    'Sinusitis',
    'Anxiety',
  ],
}

async function seed() {
  try {
    const result = await client.createOrReplace(doc)
    console.log('✅ Trigeminal Neuralgia created/updated:', result._id)
    console.log('🌐 Live at: https://homeopedia.in/diseases/trigeminal-neuralgia')
  } catch (err) {
    console.error('❌ Error:', err)
  }
}

seed()
