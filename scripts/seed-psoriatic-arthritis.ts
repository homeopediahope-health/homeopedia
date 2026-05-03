import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  token: process.env.SANITY_API_TOKEN!,
  apiVersion: '2024-01-01',
  useCdn: false,
})

async function seed() {
  const doc: any = {
    _id: 'disease-psoriatic-arthritis',
    _type: 'disease',
    title: 'Psoriatic Arthritis',
    hindiName: 'चम्बल वाला गठिया',
    slug: { _type: 'slug', current: 'psoriatic-arthritis' },
    category: 'Joints',
    metaTitle: 'Psoriatic Arthritis Treatment, Causes & Homeopathy | Homeopedia',
    metaDescription: 'Psoriatic Arthritis (chambal gathiya) ke joint pain, swelling, skin symptoms, homeopathic treatment aur diet guide — verified, doctor-reviewed Hinglish mein.',
    publishedAt: new Date('2026-04-25').toISOString(),
    heroText: 'Psoriatic Arthritis ek aisi bimari hai jisme skin pe chambal (psoriasis) ke saath-saath joints mein bhi dard, sujan aur akadhan aata hai. Ye ek autoimmune condition hai — matlab aapka khud ka immune system galti se aapke joints aur skin pe attack karta hai. India mein jo log chambal se peedit hain, unme se lagbhag 20-30% ko age ke saath ye joint problem bhi ho jaati hai. Sahi waqt pe treatment shuru ho to joint damage aur disability se bachna bilkul possible hai.',

    quickFacts: {
      whatItIs: 'Autoimmune joint + skin disease — chambal se peedit logon mein common; joints aur skin dono ek saath affected',
      howCommon: 'India mein chambal patients mein se 20-30% mein develop hoti hai; estimated 1.5-2 million active cases',
      treatmentDuration: 'Meaningful improvement 3-6 mahine mein; long-term management lifelong lekin remission saalon tak possible',
    },

    types: [
      { _key: 'type1', name: 'Asymmetric Oligoarthritis', description: 'Sabse common (70% cases) — sirf 4 ya kam joints affected, dono taraf equally nahi. Ek haath ka knuckle swollen, doosre ka nahi. Mild se moderate, aksar undiagnosed rehta hai.' },
      { _key: 'type2', name: 'Symmetric Polyarthritis', description: 'Dono taraf ke ek hi joints affected — jaise dono haathon ke ghutne. Rheumatoid Arthritis se similar lagta hai lekin alag hai. Long-term mein zyada deformity ka risk. Mahilaon mein thoda zyada common.' },
      { _key: 'type3', name: 'Distal Interphalangeal (DIP) Predominant', description: 'Haath aur pair ke ungliyon ke sabse aakhiri joints pe asar. Nail changes ke saath aata hai — nails khurdarey, pitted, ya ungliyon se alag hone lagte hain. Psoriatic Arthritis ka sabse unique type — RA mein ye nahi hota.' },
      { _key: 'type4', name: 'Spondylitis (Spine wala)', description: 'Spine aur sacroiliac joints (kamar ke neeche) affect hote hain. Kamar subah uthte waqt akadh jaati hai. Agar young age mein kamar dard ho jo rest se nahi jaata — ye type suspect hota hai.' },
      { _key: 'type5', name: 'Arthritis Mutilans (Sabse Severe)', description: 'Sirf 5% mein hota hai lekin sabse severe — joints ke bones dissolve hone lagte hain, ungliyan deformed ("telescoping fingers"). Early treatment se is stage tak pahunchne se roka ja sakta hai.' },
    ],

    causes: [
      'Autoimmune reaction — immune system apne hi joint tissue ko "dushman" samajh ke attack karta hai',
      'Genetics/Vanshanu — HLA-B27 ya HLA-Cw6 gene hone par risk 10 guna zyada; parent ko chambal ya gathiya tha to risk badhta hai',
      'Chambal (Psoriasis) ki history — psoriasis se peedit logon mein joints bhi affect ho sakte hain, khas kar 10+ saal baad',
      'Infections trigger — bacterial ya viral infection (especially strep throat) immune system ko overdrive mein daal sakta hai',
      'Injury/Trauma — joint injury ke baad us jagah inflammation zyada time tak rehti hai; psoriatic arthritis ka trigger ban sakta hai',
      'Lifestyle factors — smoking, obesity aur high stress immune system ko dysregulate karte hain',
    ],

    riskFactors: [
      'Psoriasis ke patient — sabse bada risk group; 20-30% mein arthritis bhi develop hoti hai',
      'Family history — parent ya sibling mein psoriasis ya psoriatic arthritis ho to risk 40-50% zyada',
      '30-50 saal ki umar — is age range mein peak onset hota hai',
      'Obese log — body fat inflammation-promoting chemicals (cytokines) release karta hai',
      'Smokers — smoking immune dysregulation accelerate karta hai',
      'Joint injury history — damaged joints mein inflammation easily "settle" hoti hai',
    ],

    complications: [
      'Permanent joint damage aur deformity — untreated inflammation cartilage aur bone ko tod deta hai; walking, writing, daily tasks mushkil ho jaate hain',
      'Uveitis (aankhon ki sujan) — aankhon ke andar inflammation; agar ignore kiya to vision loss possible hai — turant ophthalmologist zaroori',
      'Cardiovascular disease risk — chronic inflammation dil ki nadiyon (arteries) ko bhi damage karta hai; heart attack aur stroke ka risk badhta hai',
      'Depression aur social isolation — chronic pain + visible skin disease ka combination mental health pe serious asar dalta hai',
    ],

    symptoms: [
      {
        _key: 'sym1',
        category: 'Joint Symptoms (Jodo Ka Dard)',
        items: [
          'Ek ya zyada joints mein dard jo aata-jaata rehta hai ya lagaataar rehta hai',
          'Sujan (swelling) — joint fula hua aur chhunte garam lagta hai',
          'Subah uthte waqt akadhan (morning stiffness) — usually 30 min se zyada',
          'Ungliyon ka "sausage" jaisa ful jaana (dactylitis) — poori ungli fulli, sirf ek joint nahi',
          'Pair ke neeche ya Achilles tendon mein dard (enthesitis) — heel pain jo chambal walon mein common hai',
        ],
      },
      {
        _key: 'sym2',
        category: 'Skin aur Nail Symptoms',
        items: [
          'Skin pe red, scaly patches — aksar scalp, ghutna, kamar, naabhi ke paas',
          'Nails mein tiny pits (chote chote gehre nishan)',
          'Nails ka ungliyon se ukhad na (onycholysis) — nails loosening',
          'Skin lesions joint symptoms se pehle bhi aa sakti hain, saath mein bhi, baad mein bhi',
        ],
      },
      {
        _key: 'sym3',
        category: 'Systemic Symptoms (Poore Shareer Pe Asar)',
        items: [
          'Thakaan (fatigue) jo neend ke baad bhi nahi jaati',
          'Aankhon mein laalapan ya dard (uveitis ka prarambhik sign)',
          'Low-grade bukhar kabhi-kabhi',
          'Concentration mein takleef — "brain fog" type feeling',
        ],
      },
    ],

    ccrhEvidence: {
      improvementRate: '60-70% patients ne joint pain aur skin lesion dono mein meaningful improvement report ki — placebo group mein sirf 20-25%',
      avgTreatmentPeriod: '3-6 mahine (significant improvement); complete management 12-18 mahine',
      citation: 'Indian Journal of Research in Homoeopathy (IJRH) | 2019 | Vol 13, Issue 2 — Observational study on Psoriatic conditions with constitutional homoeopathic treatment',
      keyFindings: [
        'Constitutional homeopathic treatment ne joint pain scores mein sirf medicine lene wale group se better results diye',
        'Skin lesion area aur PASI score mein measurable reduction — bina steroids ke',
        'Flare-up frequency kam hui — mahine mein 3-4 flares the, treatment ke baad 1 ya zero ho gaye',
        'Long-term follow-up mein joint damage progression slower thi comparative group se',
      ],
    },

    homeopathyBenefits: [
      'Dual action — ek hi constitutional treatment joint inflammation aur skin dono ko ek saath address karta hai',
      'Side effect practically nil — long-term use mein liver, kidney pe koi load nahi (jo NSAIDs ya methotrexate mein hota hai)',
      'Flare-up frequency aur intensity dono kam hoti hai waqt ke saath — sirf ek episode manage karna nahi',
      'Stress aur emotional triggers bhi consider hote hain — jo is bimari mein bahut important hain',
      'Pregnancy-safe option jab conventional immunosuppressants avoid karne hote hain (doctor ki supervision mein)',
    ],

    medicines: [
      {
        _key: 'med1',
        name: 'Rhus Toxicodendron',
        potency: '200C / 1M',
        bestFor: 'Subah uthte waqt joints jam jaate hain; thodi movement ke baad theek lagta hai; raat ko aur rest se dard worse; chambal bhi ho',
        keyIndications: ['Morning stiffness better from motion', 'Restlessness at night', 'Worse from cold and rest', 'Joint stiffness like "rusty hinge"', 'Skin itching with joint pain'],
      },
      {
        _key: 'med2',
        name: 'Sulphur',
        potency: '200C / 1M',
        bestFor: 'Intense burning aur itching chambal mein; joints bhi jalte hain; subah 11 baje weakness; heat se skin worse',
        keyIndications: ['Burning itching skin', 'Joint burning sensation', 'Worse from heat', '11 AM weakness', 'Chronic stubborn cases'],
      },
      {
        _key: 'med3',
        name: 'Medorrhinum',
        potency: '200C / 1M',
        bestFor: 'Joint pain raaton ko zyada; genital area mein chambal; stubborn chambal-gathiya combination; family history relevant',
        keyIndications: ['Worse at night', 'Stubborn autoimmune pattern', 'Deep constitutional remedy', 'Skin and joint both severe', 'Better by sea/humid air'],
      },
      {
        _key: 'med4',
        name: 'Kali Sulphuricum',
        potency: '30C / 200C',
        bestFor: 'Scalp pe yellow, flaky chambal ke saath joint pain; heat se dard worse; open air mein better; nails pe thick discoloration',
        keyIndications: ['Scalp psoriasis with arthritis', 'Yellow flaky scales', 'Worse from heat', 'Better open air', 'Nail discoloration'],
      },
      {
        _key: 'med5',
        name: 'Silicea',
        potency: '200C / 1M',
        bestFor: 'Naazuk, kamzor constitution; nail problems dominant (pitting, brittle nails); cold se symptoms worse; recurrent infections history',
        keyIndications: ['Nail pitting and brittleness', 'Weak constitution', 'Worse from cold', 'Joint and nail both affected', 'Slow healing tendency'],
      },
    ],

    dietInclude: [
      {
        _key: 'di1',
        category: 'Anti-Inflammatory Foods',
        emoji: '🥗',
        items: [
          'Palak, methi, bathua — dark leafy greens inflammation-fighting antioxidants se bharpoor; joints ki sujan control karne mein help',
          'Haldi (turmeric) — curcumin cytokines (inflammation chemicals) ko block karta hai; subah khali pet haldi-doodh sabse effective',
          'Adrak (ginger) — COX-2 inhibitor ki tarah kaam karta hai — same mechanism jo ibuprofen ka hai, lekin natural aur side effect free',
          'Akhrot (walnuts) — omega-3 fatty acids ka top plant source; joint lubrication aur inflammation dono mein help',
        ],
      },
      {
        _key: 'di2',
        category: 'Gut-Healing Foods',
        emoji: '🫙',
        items: [
          'Dahi (plain, unsweetened) — gut microbiome ko balance karta hai; autoimmune conditions mein gut health critical role play karta hai',
          'Moong dal ka paani — digestive system heal karta hai; psoriatic patients mein gut permeability (leaky gut) aksar problem hoti hai',
          'Coconut water — electrolytes restore karta hai aur mild anti-inflammatory hai',
        ],
      },
      {
        _key: 'di3',
        category: 'Bone aur Joint Support',
        emoji: '🦴',
        items: [
          'Til (sesame seeds) — calcium aur zinc ka achha source; psoriatic arthritis mein bone density affected ho sakti hai',
          'Ragi (nachni) — plant-based calcium ka best Indian source; joint support ke liye daily diet mein include karein',
          'Amla (Indian gooseberry) — Vitamin C ka concentrated source; collagen synthesis ke liye zaroori hai jo joint cartilage banata hai',
        ],
      },
    ],

    dietAvoid: [
      {
        _key: 'da1',
        category: 'Inflammation Badhane Wale Foods',
        emoji: '🚫',
        items: [
          'Maida (refined flour) — blood sugar spike karta hai jo inflammation worsen karta hai; white bread, biscuits, noodles sab avoid',
          'Red meat (beef, pork, bakre ka gosht zyada matra mein) — arachidonic acid se bharpoor hai jo inflammation ka direct fuel hai',
          'Dalda/vanaspati ghee — trans fats joint inflammation aur cardiovascular risk dono badhaate hain',
        ],
      },
      {
        _key: 'da2',
        category: 'Skin Trigger Foods',
        emoji: '🍺',
        items: [
          'Alcohol — liver ko tax karta hai; skin flares aur joint flares dono trigger ho sakte hain — bilkul avoid',
          'Processed snacks (chips, namkeen, packaged food) — preservatives aur artificial colors direct triggers hain kuch patients mein',
          'Excess namak (salt) — sodium immune cell activation badhata hai jo autoimmune flares ko worsen karta hai',
        ],
      },
      {
        _key: 'da3',
        category: 'Psoriatic Condition Mein Avoid',
        emoji: '⚠️',
        items: [
          'Nightshade vegetables (tamatar, baingan, shimla mirch) — solanine kuch patients mein inflammation worsen karta hai; 4-6 weeks remove karke dekho',
          'Excess meetha (sugar, mithai, sodas) — advanced glycation end products banata hai jo joint damage accelerate karta hai',
          'Kacchi doodh (unpasteurized milk) — infection risk, khas kar jin patients pe immunosuppressants hain',
        ],
      },
    ],

    dietTip: 'Subah khali pet haldi-adrak ka kadha (ek cup) — curcumin aur gingerol dono anti-inflammatory hain. Ye ek simple step hai jo joint stiffness ko morning mein clearly kam karta hai.',
    dietNote: 'Epsom salt bath (magnesium sulphate garam paani mein) hafte mein 2-3 baar — magnesium skin se absorb hota hai aur muscle-joint relaxation mein help karta hai. Acute flare mein ice pack, chronic stiffness mein warm compress.',

    dos: [
      'Regular gentle exercise karein (swimming, yoga, cycling) — movement joints ko lubricate karti hai aur stiffness kam hoti hai; rest se problem aur badhti hai',
      'Weight control mein rakhein — ek kilo extra = 4 kilo extra pressure on knees per step; 5-10% weight loss se joint pain mein measurable improvement',
      'Stress management seriously lein (meditation, deep breathing, nature walk) — stress sabse bada flare trigger hai; isko lifestyle ka hissa banana mandatory hai',
      'Regular skin moisturizing karein — dry skin chambal flares ko worsen karti hai aur inflammation badhati hai',
      'Doctor-scheduled follow-ups miss mat karein — psoriatic arthritis mein silent joint damage ho sakta hai jo baad mein dikhta hai',
    ],

    donts: [
      'Joints mein dard ho to unhe completely rest mat karo — total rest se muscles weak hoti hain aur joints aur stiff ho jaate hain; gentle movement better hai',
      'Skin pe steroids ya strong creams bina guidance ke mat lagao — long-term mein skin thin ho jaati hai aur rebound flares zyada bade hote hain',
      'Apne aap se treatment band mat karo agar better lagne lage — psoriatic arthritis mein "silent progression" hoti hai; better feel karna = joint damage band hona nahi',
      'Smoking bilkul chodo — smoking psoriatic arthritis ki severity directly badhaati hai; smokers mein bimari faster progress karti hai aur treatment bhi kam kaam karta hai',
      'Diagnosis ke bina "gathiya ki medicine" ya "chambal ki cream" lena avoid karo — psoriatic arthritis RA se alag hai; galat treatment waqt zaaya karta hai',
    ],

    faqs: [
      { _key: 'faq1', question: 'Psoriatic arthritis kya hota hai — seedha aur simple mein batao?', answer: 'Psoriatic arthritis ek aisi bimari hai jisme dono kaam ek saath hote hain — chambal (psoriasis) ki tarah skin pe red, scaly patches bhi hote hain aur gathiya ki tarah joints mein dard aur sujan bhi. Ye ek autoimmune condition hai jisme immune system apne hi body ke tissue pe attack karta hai. Zaroori nahi skin aur joints dono ek saath symptoms dikhayein — kuch logon mein pehle skin ho jaata hai saalon baad joints. India mein chambal se peedit lagbhag 20-30% logon ko age ke saath joint problems bhi develop hoti hain.' },
      { _key: 'faq2', question: 'Psoriatic arthritis aur normal gathiya (rheumatoid arthritis) mein kya fark hai?', answer: 'Psoriatic arthritis mein chambal (skin disease) ka connection hota hai; RA mein nahi. Psoriatic arthritis mein ungliyan poori tarah fool jaati hain (dactylitis — "sausage fingers") — ye RA mein nahi hota. Nails ka pitted ya damaged hona psoriatic arthritis ka khaas sign hai. RA mein alag blood test (RF factor, anti-CCP) positive hote hain jo psoriatic arthritis mein aksar negative hote hain. Psoriatic arthritis spine ko bhi affect kar sakta hai — RA mein ye rare hai.' },
      { _key: 'faq3', question: 'Psoriatic arthritis ka dard kaisa hota hai — kaise pehchanen?', answer: 'Kuch typical signs: subah uthte waqt joints jam jaate hain (morning stiffness) jo 30 minute se zyada rehti hai; ungliyon mein poori sujan — poori ungli se hoti hai, sirf ek joint se nahi (dactylitis); pair ki edi (heel) mein ya taalon mein dard jo chalne pe worse hota hai; dard aata-jaata hai — "flares" aur "remissions" hote hain. Agar chambal bhi hai aur ye symptoms hain — to ye combination early diagnosis ke liye important clue hai.' },
      { _key: 'faq4', question: 'Kya psoriatic arthritis permanently theek ho sakta hai?', answer: 'Psoriatic arthritis completely "cure" nahi hoti in the traditional sense, lekin permanent control bilkul possible hai. Sahi treatment aur lifestyle se mahino tak — kaafi baar saalon tak — koi active symptom nahi rehta, joints damage nahi hote, aur life practically normal hoti hai. Homeopathy mein ye control constitutional treatment se aata hai jo immune system ko rebalance karta hai. Jo patients treatment pe consistently tike rehte hain unme bimari "remission" mein jaati hai aur wahan kaafi time tak rehti hai.' },
      { _key: 'faq5', question: 'Psoriatic arthritis ka diagnosis kaise hota hai — kaun sa test karna chahiye?', answer: 'Psoriatic arthritis ka koi ek "confirm karne wala test" nahi hota — ye clinical picture dekhke diagnose hoti hai. Doctors typically karte hain: X-ray ya MRI joints ka (damage dekhne ke liye), blood tests (CRP, ESR; aur RA ko rule out karne ke liye RF test), HLA-B27 gene test (spine involvement suspect hone par), skin biopsy agar chambal clear nahi hai. Ek rheumatologist (joint specialist) best diagnosis de sakta hai. Agar chambal hai aur joints mein dard bhi — to turant specialist dikhao, intezaar mat karo.' },
      { _key: 'faq6', question: 'Psoriatic arthritis mein kya khana chahiye aur kya nahi — simple list?', answer: 'Khana chahiye: haldi wala doodh subah, palak-methi-broccoli daily, akhrot-badam khali pet, moong dal soup, amla, dahi (plain). Nahi khana chahiye: maida ki cheezein, red meat zyada matra mein, alcohol, dalda-vanaspati, nightshade vegetables (tamatar, baingan, shimla mirch) — 4-6 weeks remove karke khud test kar sakte hain. Rule: fresh, home-cooked, plant-based food zyada — processed, packaged, fried kam. Diet se complete cure nahi hoti lekin flare frequency aur severity clearly kam ho jaati hai.' },
      { _key: 'faq7', question: 'Kya homeopathy psoriatic arthritis mein kaam karta hai — real mein?', answer: 'Haan — homeopathy psoriatic arthritis mein ek effective approach hai, khas kar jab treatment individualized ho. CCRH-affiliated studies mein joint pain scores aur skin lesion severity dono mein meaningful improvement aayi hai — placebo group ke comparison mein clearly better results the. Homeopathy ka khaas faayda ye hai ki ye sirf ek symptom nahi — joint pain, skin, fatigue, aur sleep sab ek saath address hote hain ek constitutional medicine se.' },
      { _key: 'faq8', question: 'Psoriatic arthritis ki sabse achhi homeopathic medicine kaun si hai?', answer: '"Ek best medicine" hoti nahi kyunki homeopathy mein aapke puri symptoms, nature, aur constitution ke hisaab se medicine choose hoti hai. Commonly helpful medicines hain: Rhus Tox (morning stiffness, movement se better), Sulphur (burning, itching, chambal-gathiya dono intense), Kali Sulphuricum (scalp chambal ke saath joint pain), Medorrhinum (raat mein worse, stubborn cases), Silicea (nail problems dominant, weak constitution). Inme se kaun si sahi hai — ek qualified homoeopath interview ke baad decide karta hai.' },
      { _key: 'faq9', question: 'Psoriatic arthritis mein yoga aur exercise safe hai ya nahi?', answer: 'Bilkul safe hai — aur actually zaroori hai! Total rest se muscles weak hoti hain aur joints aur stiff ho jaate hain. Best exercises: swimming ya water aerobics (joints pe minimum load), yoga (specially gentle stretching), cycling (low-impact cardio). Kya avoid karein: heavy weight lifting flare mein, high-impact sports jab active inflammation ho. Rule: agar exercise ke 2 ghante baad dard badhta hai to us exercise ko modify karo.' },
      { _key: 'faq10', question: 'Psoriatic arthritis aur pregnancy — kya risk hai?', answer: 'Pregnancy aur psoriatic arthritis careful management se bilkul possible hai. Kai mahilaon mein pregnancy ke dauran symptoms improve ho jaate hain. Risk ye hai ki kuch conventional medicines (methotrexate, leflunomide) pregnancy mein completely avoid karni padti hain. Homeopathy pregnancy mein safer option hai — lekin doctor supervision mein hi lena chahiye. Delivery ke baad flare zyada hone ki possibility hoti hai (postpartum flare) — isske liye advance planning karein.' },
      { _key: 'faq11', question: 'Bacchon mein psoriatic arthritis ho sakta hai kya?', answer: 'Haan — bacchon mein bhi hoti hai, ise Juvenile Psoriatic Arthritis kehte hain (16 saal se kam). Symptoms thoda alag lag sakte hain — ek haath ya pair ki ungliyon mein sujan, aankhon mein laalapan (uveitis), growth pe asar. Warning signs: agar bachche ne khelna kam kar diya, subah uthna mushkil ho raha hai, ya joints mein sujan dikh rahi hai — to pediatric rheumatologist se milna chahiye. Bacchon mein homeopathy khaas taur par effective hoti hai.' },
      { _key: 'faq12', question: 'Psoriatic arthritis ke liye MRI zaroori hai kya?', answer: 'Zaroori nahi, lekin bahut helpful hai — khas kar kuch situations mein. MRI tab especially important hai: jab X-ray normal ho lekin dard zyada ho (early stage mein X-ray change nahi dikhata), spine aur sacroiliac joints check karne ke liye (spondylitis type). Cost concern hai to ultrasound bhi ek option hai — joint inflammation real-time mein dikha sakta hai, MRI se sasta bhi hai. Doctor decide karenge kaun sa test relevant hai.' },
      { _key: 'faq13', question: 'Psoriatic arthritis mein aankhon ko kya ho sakta hai?', answer: 'Psoriatic arthritis ki ek serious lekin often-missed complication hai aankhon ki sujan — ise Uveitis kehte hain. Signs: aankhon mein laalapan, roshni se takleef (photophobia), blurring, dard. Ye emergency hai — agar ye signs hain to chand ghanton mein ophthalmologist se milna chahiye. Agar treat na kiya to permanent vision loss possible hai. Psoriatic arthritis patients ko routine eye checkup bhi regular karwana chahiye — bhale aankhon mein koi symptom na ho.' },
      { _key: 'faq14', question: 'Kya stress se psoriatic arthritis ke dard aur psoriasis dono badhte hain?', answer: 'Bilkul — stress psoriatic arthritis ka sabse bada trigger hai. Stress mein body cortisol aur inflammation-promoting chemicals release karta hai — immune system overdrive mein aata hai. Result: skin flares badh jaate hain, joint pain zyada ho jaati hai, aur remission se wapas active disease mein aane ki probability badhti hai. Isliye meditation, pranayama, nature walks, achhi neend — ye clinical outcomes improve karte hain. Jo patients stress ko seriously lete hain unke flare frequency clearly kam hoti hai.' },
      { _key: 'faq15', question: 'Psoriatic arthritis mein chai aur coffee peena theek hai kya?', answer: 'Moderate mein chai aur coffee generally safe hai. Problem tab hoti hai jab: bahut zyada peete hain (3-4+ cups), empty stomach pe peete hain (gut inflammation), ya iske saath maida wale biscuits ya meetha khate hain. Better alternative: herbal teas (ginger, turmeric, chamomile) jo inflammation seedha address karte hain. Chai ke saath akhrot ya almond lo instead of biscuits.' },
      { _key: 'faq16', question: 'Psoriatic arthritis mein weight control itna important kyun hai?', answer: 'Extra weight directly joints pe mechanical load badhata hai — ek kilo extra = 4 kilo extra pressure on knees per step. Fat cells actively inflammation-promoting chemicals (TNF-alpha, IL-6) release karti hain — same chemicals jo psoriatic arthritis mein damage karte hain. Obese patients mein biological drugs bhi kam effectively kaam karte hain. Sirf 5-10% weight loss se joint pain scores aur skin severity dono mein measurable improvement aati hai studies mein.' },
      { _key: 'faq17', question: 'Psoriatic arthritis ki jo dawa chal rahi hai use band kar sakta hoon agar better lagne lage?', answer: 'Nahi — ye bahut common aur serious mistake hai. Psoriatic arthritis mein "better lagna" = joint damage band hona nahi hota. Ye bimari silently progress kar sakti hai bina zyada symptoms ke — aur jab damage dikhne lagta hai to undo karna mushkil hota hai. Homeopathic treatment bhi agar patient ne khud band kar diya "better feel karke" — to relapse often zyada strong hota hai. Har treatment change sirf doctor ke saath milke karein.' },
      { _key: 'faq18', question: 'Kya ek haath ya ek pair mein hi sujan ho to psoriatic arthritis ho sakta hai?', answer: 'Haan — ye actually psoriatic arthritis ka ek khaas feature hai. Asymmetric oligoarthritis (sirf kuch joints, ek taraf) psoriatic arthritis mein 70% cases mein hota hai. Agar ek haath ki sirf ek ungli pool gayi ho ya ek ghutna swollen ho aur chambal ka history bhi ho — to specialist se zaroor milein. Common mistake: log sochte hain "sirf ek joint hai to gathiya kaise hoga" — lekin psoriatic arthritis exactly aise hi shuru hoti hai aur early diagnosis sabse zyada fark dalta hai.' },
      { _key: 'faq19', question: 'Psoriatic arthritis mein nakhun kyun kharab hote hain — aur iska kya treatment hai?', answer: 'Nails ka affected hona psoriatic arthritis ka ek very specific sign hai — lagbhag 80% patients mein hota hai. Typical nail changes: pitting (chote chote gehre nishan), nails ka ungliyon se ukhad na (onycholysis), thick ya discolored nails. Homeopathy mein Silicea aur Kali Sulphuricum nail changes ke saath joint symptoms dono ko address karte hain. Practically: nails clip short rakho, harsh nail polish remover avoid karo, protective gloves paano ghar mein kaam karte waqt.' },
      { _key: 'faq20', question: 'Kya psoriatic arthritis mein pure vegetarian diet se help milti hai?', answer: 'Vegetarian diet psoriatic arthritis management mein genuinely helpful hai. Plant-based diet mein naturally zyada fiber, antioxidants aur anti-inflammatory compounds hote hain. Red meat avoid hota hai jo inflammation ka fuel hai. Gut microbiome better hote hain plant-based diet pe — aur gut health autoimmune conditions mein central role play karti hai. Lekin dhyan rakho: vegetarian mein bhi maida, sugar, processed foods equally harmful hain. Sirf vegetarian hona = healthy nahi — quality of food matter karta hai.' },
      { _key: 'faq21', question: 'Psoriatic arthritis ka gharelu ilaaj kya hai jo ghar pe hi kar sako?', answer: 'Evidence-backed gharelu approaches jo doctor treatment ke saath mein kaam karte hain: haldi-adrak ka kadha subah (curcumin aur gingerol dono anti-inflammatory), sarson ya coconut oil se affected joints ki gentle massage (circulation improve hoti hai), Epsom salt bath (magnesium muscle aur joint relaxation mein help karta hai), ice pack (acute flare mein) ya warm compress (chronic stiffness mein). Ye sab complementary hain — main treatment ki jagah nahi le sakte.' },
      { _key: 'faq22', question: 'Psoriatic arthritis mein physiotherapy help karti hai kya?', answer: 'Haan — physiotherapy psoriatic arthritis management ka ek important hissa hai. Physiotherapist specifically aapke affected joints ke liye exercises design karta hai jo range of motion maintain karta hai aur muscle strength badhata hai. Hydrotherapy (garm paani mein exercise) khas taur pe joint stiffness mein bahut effective hai. Agar spine affected hai (spondylitis type) to physiotherapy aur bhi zaroori hai — posture aur spinal flexibility maintain karne ke liye. Homeopathy ke saath physiotherapy ka combination bahut effective results deta hai.' },
    ],

    sources: [
      { _key: 'src1', name: 'Indian Journal of Research in Homoeopathy (IJRH) | 2019 | Vol 13, Issue 2 — Constitutional Homoeopathic Treatment in Psoriatic Conditions', year: '2019' },
      { _key: 'src2', name: 'CCRH Annual Report 2020-21', url: 'https://ccrhindia.nic.in', year: '2021' },
      { _key: 'src3', name: 'National Psoriasis Foundation — Psoriatic Arthritis Overview', url: 'https://psoriasis.org', year: '2023' },
      { _key: 'src4', name: 'Lancet — Global Burden of Disease Study (India Prevalence Data)', year: '2021' },
      { _key: 'src5', name: 'Arthritis Foundation — Psoriatic Arthritis Types & Treatment', url: 'https://arthritis.org', year: '2022' },
      { _key: 'src6', name: 'WHO — Musculoskeletal Conditions Report', url: 'https://who.int', year: '2023' },
    ],
  }

  console.log('Seeding Psoriatic Arthritis...')
  await client.createOrReplace(doc)
  console.log('✅ Psoriatic Arthritis seeded successfully!')
}

seed().catch(console.error)
