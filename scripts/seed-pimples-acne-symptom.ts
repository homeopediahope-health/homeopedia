import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

const symptom = {
  _id: 'symptom-pimples-acne',
  _type: 'symptom',
  title: 'Pimples / Acne (Muhase)',
  hindiName: 'Muhase / Phunsi',
  slug: { _type: 'slug', current: 'pimples-acne' },
  metaTitle: 'Acne Pimples in Hindi – Karan, Ilaaj aur Homeopathy | Homeopedia',
  metaDescription:
    'Muhase (acne pimples) ke karan, severity aur ghar pe safe steps – simple Hinglish mein. Verified info, doctor-reviewed. | Homeopedia',
  heroText:
    'Subah uthke aaine mein dekha – aur kal ka ek daana aaj teen ban gaya. Chehra theek karna tha, aur ab aur bura lagta hai khud ko. Ye sirf aapke saath nahi hota – muhase (acne pimples) India mein ek sabse common skin complaint hai, khaaskar 15-35 saal ke logon mein.\n\nAcne tab hota hai jab skin ke chhote chhote pores – yaani rone (chhidra) – block ho jaate hain. Andar ka tel (sebum), dead skin cells, aur bacteria milke is blockage ko banate hain. Result: woh dikhne wala daana jo aap nahi chahte the.\n\nYe page aapko 2 minute mein batayega: aapka case serious hai kya, ghar pe kya karein, aur kab doctor ke paas jaana chahiye.',

  indiaContext:
    'WHO ke anusaar globally 85% log apni zindagi mein kisi na kisi waqt acne ka anubhav karte hain. India mein humidity, oily skin types, aur hormonal patterns ki wajah se ye aur common hai – khaaskar Tier 2-3 cities mein jahan pollution bhi ek factor hai.',
  indiaContextSource: 'World Health Organization – Skin Conditions Global Burden | 2023',

  severityLevel1: [
    '1-5 chhote daane hain, mostly maatha ya naak pe',
    'Koi dard nahi, sirf thodi irritation hai',
    'Pehle kabhi bhi aisa hua hai aur apne aap theek ho gaya',
    'Koi redness ya sujan nahi jiske aaspaas',
  ],
  severityLevel2: [
    'Chehra ya peethe pe zyada daane hain – 10+ se zyada',
    'Kuch daane bade aur dard-nak hain (cystic type lag raha hai)',
    'Pimple todne ke baad daag reh gaye jo 3-4 hafte se zyada hain',
    'Naye medicines ya supplements shuru kiye ke baad breakout aaya',
  ],
  severityLevel3: [
    'Pimple ke saath bukhaar aur bohot zyada dard – ye infection ka sign ho sakta hai',
    'Face ka bada hissa ekdam sujan gaya – allergic reaction ya severe cellulitis ho sakta hai',
    'Chehra aur aankhon ke paas rapid spreading redness – ye genuinely urgent hai',
  ],

  timeline3Days:
    'Aksar ek sudden breakout hota hai – hormonal change, oily food zyada, ya koi naya cosmetic use kiya hoga. Body khud adjust kar sakti hai. Chehra saaf paani se dhoyein, touch mat karein, wait karein. Agar 5 din mein better nahi hua to Level 2 mein aao.',
  timeline4Weeks:
    'Ye signal hai ki koi cheez trigger kar rahi hai – diet, stress, hormones ya skin routine. Ek pattern dekho: kab badhti hai acne, kya khaate ho, kab aata hai. Yahan dermatologist se milna helpful rahega. Homeopathy is phase mein trigger address karne ka kaam shuru karta hai. Agar 2 hafte mein koi improvement nahi – doctor zaruri hai.',
  timelineMonthPlus:
    'Ye chronic acne hai. Aksar iska connection hormones, gut health, ya ek underlying condition se hota hai. Sirf cream lagana kaafi nahi – andar se kuch address karna padega. Is phase mein homeopathy constitutional treatment ke roop mein helpful raha hai. Doctor se milna is waqt mandatory hai – delay mat karo.',

  lifestyleCauses: [
    {
      _key: 'lc1',
      causeName: 'Excess Sebum (Zyada Tel Banana)',
      mechanism:
        'Skin mein sebaceous glands hoti hain jo tel (sebum) banati hain. Jab ye glands zyada active ho jaati hain – hormones, genetics, ya humidity ki wajah se – ye tel pores ko band kar deta hai. Band pore ke andar bacteria (P. acnes) paida hote hain jo inflammation yaani sujan create karte hain. Yahi sujan aapka dikhne wala daana ban jaata hai.',
      howToIdentify:
        'T-zone (maatha, naak, thodi) pe zyada daane. Skin touch karo – tel sa feel aata hai, khaaskar dopahar ke baad.',
    },
    {
      _key: 'lc2',
      causeName: 'Dead Skin Cells Ka Buildup',
      mechanism:
        'Har 28-30 din mein skin apni upar wali layer naturally replace karti hai. Jab ye dead cells puri tarah shed nahi hoti – khaaskar oily skin ya thick moisturizers ki wajah se – ye tel ke saath milke pore ko block kar deti hain. Is blockage ko comedo kehte hain – whitehead ya blackhead ban sakta hai.',
      howToIdentify:
        'Skin rough ya uneven lagti hai. Blackheads ya whiteheads zyada hain compared to red pimples ke.',
    },
    {
      _key: 'lc3',
      causeName: 'Wrong Skincare Products',
      mechanism:
        'Kuch products "comedogenic" hote hain – matlab ye pores block karte hain. Heavy oils, silicones, aur kuch moisturizers is category mein aate hain. India mein bahut log skin type match kiye bina products use karte hain – oily skin pe heavy cream lagana seedha breakout invite karna hai.',
      howToIdentify:
        'Naya product shuruu kiya aur kuch dinon mein breakout aaya. Ya sirf specific face area pe acne hai jahan aap product apply karte hain.',
    },
    {
      _key: 'lc4',
      causeName: 'Stress Aur Neend Ki Kami',
      mechanism:
        'Stress mein body cortisol hormone release karti hai. Cortisol sebaceous glands ko signal deta hai – zyada tel banao. Saath hi, neend kam hone se skin ka repair cycle disturb hota hai. Dono milke acne ke liye perfect environment banate hain.',
      howToIdentify:
        'Exam season, office deadline, ya personal stress ke waqt breakout aaya. Raat ko 6 ghante se kam soo rahe hain aur acne zyada ho raha hai.',
    },
  ],

  medicalCauses: [
    {
      _key: 'mc1',
      diseaseName: 'Acne Vulgaris',
      diseaseHindiName: 'Muhase ki Bimari',
      howSymptomPresents:
        'Ye sabse common medical cause hai. Iska matlab hai ki acne sirf ek occasional pimple nahi – ek chronic inflammatory skin condition ban gayi hai. Chehra, peetha, kaandhe – teeno pe simultaneously daane hote hain, alag-alag types ke: whiteheads, blackheads, papules, pustules.',
      howToIdentify:
        'Sirf face pe nahi – peethe, kaandhe pe bhi daane hain. Baar baar aate hain, apne aap nahi jaate.',
      homeopediaSlug: 'acne',
      isAvailable: true,
    },
    {
      _key: 'mc2',
      diseaseName: 'Rosacea',
      diseaseHindiName: 'Rosacea (Chehra Laal Rehna)',
      howSymptomPresents:
        'Rosacea mein acne-jaisi red bumps hoti hain – lekin asli pimple nahi hote. Chehra permanently laal dikhta hai, khaaskar naak aur gaalon ke aaspaas. Dhoop, garam paani, ya spicy khana khane ke baad aur bura hota hai.',
      howToIdentify:
        'Pimple-jaisi cheez hai lekin saath mein chehra ekdam laal rehta hai – sirf daano ke aaspaas nahi, poora gaal. 30+ saal ki age pe shuruu hoti hai aksar.',
      homeopediaSlug: '',
      isAvailable: false,
    },
    {
      _key: 'mc3',
      diseaseName: 'PCOS (Polycystic Ovary Syndrome)',
      diseaseHindiName: 'Bahugranthishthi Andashay Rog (Mahilaon Mein)',
      howSymptomPresents:
        'PCOS mein androgen hormones zyada bante hain – ye sebaceous glands ko zyada active kar deta hai. Result: stubborn jawline aur chin acne jo period ke aaspaas aur bura ho jaata hai. Sirf creams se ye kabhi properly theek nahi hoti.',
      howToIdentify:
        'Jawline aur thodi pe zyada daane – khaaskar period se pehle. Irregular periods bhi hain. Wazan badhna, chehra pe extra baal – in signs ke saath acne hai.',
      homeopediaSlug: 'pcod',
      isAvailable: true,
    },
    {
      _key: 'mc4',
      diseaseName: 'Seborrheic Dermatitis',
      diseaseHindiName: 'Seboreik Dermatitis (Scalp Aur Face Pe Oily Flaky Skin)',
      howSymptomPresents:
        'Ye fungal condition hai jo sebum-heavy areas – hairline, naak ke aaspaas, bhauon ke beech pe hoti hai. Is mein acne-jaisi red bumps ke saath flaky skin bhi hoti hai. Aksar acne samajhke galat treat kiya jaata hai.',
      howToIdentify:
        'Daane hairline ke paas ya bhauon mein hain. Saath mein skin se chhilne wale flakes bhi hain. Antifungal shampoo ya cream se thoda aaram milta hai.',
      homeopediaSlug: '',
      isAvailable: false,
    },
    {
      _key: 'mc5',
      diseaseName: 'Folliculitis',
      diseaseHindiName: 'Folliculitis (Baalon Ki Jad Ka Infection)',
      howSymptomPresents:
        'Jab baalon ki jad (follicle) mein bacterial ya fungal infection ho jaata hai – ye pimple-jaisi red bumps banata hai. Jawline pe razor use karne ke baad, ya peethe pe tight kapde pehanne ke baad aksar hota hai. Isko acne samjhke treat karna galat hai.',
      howToIdentify:
        'Daane ek line mein hain ya jahan razor/tight kapda touch karta hai wahan hain. Daanon ke beech mein ek chota baal dikh sakta hai.',
      homeopediaSlug: '',
      isAvailable: false,
    },
  ],

  redFlags: [
    'Cystic Acne (Bade Dard-nak Daane): Agar pimple upar se nahi aata, skin ke andar bada aur dard-nak hai – ye cyst hai. Isko squeeze karna bilkul nahi – andar infection aur bura ho jaata hai aur permanent daag pad sakta hai. Doctor zaruri.',
    'Acne Inversa (Hidradenitis Suppurativa): Agar daane armpit, groin ya buttocks area mein bhi hain chehra ke saath – ye alag condition hai. Saath mein pus drainage ho to turant dermatologist.',
    'Medicine-Induced Acne: Agar nayi medicine shuruu ki – steroids, lithium, ya kuch birth control pills – aur uske baad breakout aaya. Is pattern ko miss mat karo. Doctor ko batao ki naya medication kab shuruu kiya.',
  ],

  homeSteps: [
    {
      _key: 'hs1',
      action: 'Chehra Din Mein Sirf 2 Baar Dhoyein',
      whyItWorks:
        'Zyada dhona skin ki natural moisture khatam karta hai – skin phir aur zyada tel banati hai. Subah aur raat – bas itna kaafi hai. Hatheli se gentle circular motion mein dhoyein, koi scratching nahi.',
    },
    {
      _key: 'hs2',
      action: 'Hands-Off Policy Rakhein',
      whyItWorks:
        'Haath mein bacteria hote hain. Bar bar chehra touch karne se – aur khaaskar pimple todne se – bacteria andar jaate hain, inflammation badhti hai, aur daag padne ka risk 3x zyada ho jaata hai. Pimple khud nahi toda to wo sirf ek daag nahi chhod-ta – todne se do-teen chhod sakta hai.',
    },
    {
      _key: 'hs3',
      action: 'Clean Pillowcase Weekly Badlein',
      whyItWorks:
        'Pillowcase pe raat bhar tel, dead skin, aur bacteria collect hote hain. Har hafte fresh pillowcase acne ke naye triggers ko kam karta hai – simple lekin effective.',
    },
    {
      _key: 'hs4',
      action: 'Garmi Aur Direct Dhoop Se Bachein',
      whyItWorks:
        'Garam temperature sebum production badhata hai. Agar sun exposure hoga to SPF 30+ lightweight (non-comedogenic) sunscreen lagayein – bina is ke chehra pe pigmentation aur zyada hogi acne ke daagon pe.',
    },
    {
      _key: 'hs5',
      action: 'Neend Puri Karein – 7-8 Ghante',
      whyItWorks:
        'Neend mein skin ka repair mode on hota hai. Growth hormones release hote hain jo inflamed skin ko heal karte hain. Neend kam hogi to cortisol zyada – aur cortisol acne ka ek main driver hai.',
    },
  ],

  homeopathyIndividualization:
    'Pimples ka naam ek hai – lekin wajah har insaan mein alag hoti hai. Kisi ko stress mein breakout hota hai. Kisi ko period se pehle daane aate hain. Kisi ko sirf maatha pe hota hai, kisi ko jawline pe. Kisi ka pimple dard-nak hai, kisi ka sirf cosmetic problem hai. Homeopathy mein sirf "acne" nahi dekha jaata – aapka acne kaisa hai, kab badhta hai, kya se better hota hai, kitne waqt se hai – ye sab milake aapka individual treatment decide karta hai. Isliye do patients ko ek hi complain ho sakti hai aur unka treatment bilkul alag ho sakta hai.',
  homeopathyRootCause:
    'Baar baar aane wala acne aksar ek deeper imbalance ka signal hota hai – hormonal, digestive, ya inflammatory. Sirf cream ya antibiotic se upar se band ho sakta hai – andar kuch waqt ke liye. Homeopathy mein goal hai ki jo cheez baar baar breakout la rahi hai – use address kiya jaaye. Waqt ke saath frequency aur intensity dono kam hoti hain. Is area mein research limited hai aur results individual hote hain – lekin chronic acne mein root cause approach zyada sense banata hai.',
  homeopathySafety:
    'Diluted medicines hone ki wajah se homeopathy practically side-effect free hai – isliye ye teenage patients mein, pregnancy ke dauran (jab kai topical creams avoid karni hoti hain), aur long-term use ke liye bhi safe rehti hai. Emergency ya severe allergic reaction mein pehle conventional treatment lein – homeopathy complementary role mein hai, replacement nahi.',

  homeopathyDiseaseLinks: [
    {
      _key: 'hdl1',
      diseaseName: 'Acne Vulgaris (Muhason Ki Bimari)',
      diseaseSlug: 'acne',
    },
    {
      _key: 'hdl2',
      diseaseName: 'PCOD / PCOS (Hormonal Acne)',
      diseaseSlug: 'pcod',
    },
  ],

  isForYouIf: [
    'Aap acne ke root cause ko address karna chahte hain – sirf upar se cream lagana nahi',
    'Aapko long-term sustainable skin chahiye – ek mahine mein nahi, lekin lasting',
    'Aap side-effect free option prefer karte hain – khaaskar agar teenager hain, pregnant hain, ya kai medicines chal rahi hain',
    'Aapko baar baar antibiotic lena pad raha hai acne ke liye – aur aap isse break karna chahte hain',
  ],
  notForYouIf: [
    'Aapko kal kisi event ke liye turant result chahiye – emergency mein dermatologist se milein, phir homeopathy long-term saath chala sakte hain',
    'Aapki acne severe cystic hai jisme surgical drainage zaroori hai – pehle dermatologist, phir recovery mein homeopathy complementary kaam karti hai',
  ],

  linkedDiseaseCards: [
    {
      _key: 'ldc1',
      title: 'Acne',
      hindiName: 'Muhase Ki Bimari',
      slug: 'acne',
    },
    {
      _key: 'ldc2',
      title: 'PCOD / PCOS',
      hindiName: 'Bahugranthishthi Andashay Rog',
      slug: 'pcod',
    },
  ],

  quickFactSymptom:
    'Acne sirf teenagers ko nahi – 30+ adults mein bhi common hai, khaaskar women mein hormonal causes ki wajah se.',
  quickFactIndiaStats:
    'WHO ke anusaar globally 85% log kabhi na kabhi acne experience karte hain. India mein humidity aur oily skin types ye number aur badhate hain.',
  quickFactDoctorWhen:
    'Agar 8 hafte mein koi improvement nahi, ya daane dard-nak aur cyst-like hain – turant dermatologist.',

  faqs: [
    {
      _key: 'faq1',
      faqType: 'general',
      q: 'Pimples aur Acne mein kya fark hai?',
      a: 'Ek pimple acne ka ek part hai – acne ek puri condition hai. Pimple ek single inflamed spot hota hai – jo kisi ko bhi kabhi kabhi ho sakta hai. Acne tab hota hai jab pimples baar baar aate hain, kai jagah hote hain, ya alag-alag types mein aate hain – whiteheads, blackheads, cysts. Ek do pimple = acne nahi. Chehra pe consistently multiple spots hona, peethe ya kaandhe pe bhi hona – ye acne ki category mein aata hai. Kab doctor zaruri: Agar pimples 3-4 hafte mein apne aap theek nahi ho rahe, baar baar ek hi jagah aa rahe hain, ya dard-nak hain – tab dermatologist se milein.',
    },
    {
      _key: 'faq2',
      faqType: 'general',
      q: 'Acne pimples ka sabse common karan kya hai?',
      a: 'Sabse common karan hai: pores ka block hona – sebum (skin ka natural tel), dead skin cells, aur bacteria milke karte hain ye. Lekin har insaan mein trigger alag hota hai. Kuch common triggers: hormonal changes – puberty, periods, pregnancy, PCOS; wrong skincare products – pores block karne wale (comedogenic); stress – cortisol hormone sebum production badhata hai; oily ya sweaty skin without proper cleansing; certain medications – steroids, kuch antibiotics. India mein ek aur common factor: high humidity aur pollution jo open pores mein directly settle karta hai. Homeopathy mein sirf trigger hi nahi – skin ki sensitivity aur individual response bhi address ki jaati hai.',
    },
    {
      _key: 'faq3',
      faqType: 'general',
      q: 'Acne pimples kitne din mein theek hote hain?',
      a: 'Ek single pimple aksar 3-7 din mein apne aap theek ho sakta hai – agar touch ya pop nahi kiya. Acne ki bimari mein: ye timeline kaafi alag hai. Mild acne treatment ke saath 4-8 hafte mein better hota hai. Moderate-severe acne mein 3-6 mahine lag sakte hain consistent treatment se. Sabse badi galti: 2 hafte mein results na dekhke treatment switch karna. Skin ka cycle 28-30 din ka hota hai – koi bhi treatment ko kam se kam 4-6 hafte dene chahiye. Agar 6-8 hafte mein koi improvement nahi – dermatologist se milein, approach revisit karein.',
    },
    {
      _key: 'faq4',
      faqType: 'general',
      q: 'Kab normal hai aur kab doctor zaroori?',
      a: 'NORMAL hai: puberty mein ya periods ke aaspaas 1-5 daane aana, naya cosmetic ya food try karne ke baad chhota breakout, 3-5 din mein apne aap resolve ho jaaye. DOCTOR ZARURI hai: 10+ daane ek saath chehra ya peethe pe, dard-nak skin ke andar bade daane (cysts), koi bhi treatment 6-8 hafte mein kaam nahi kar rahi, daag pad rahe hain jo 3-4 hafte se zyada hain, jawline acne ke saath irregular periods (PCOS possible), chehra ekdam laal rehta hai – rosacea ho sakti hai. Jaldi diagnosis = kam daag. Delay mat karo.',
    },
    {
      _key: 'faq5',
      faqType: 'homeopathy',
      q: 'Kya homeopathy acne pimples mein kaam karta hai?',
      a: 'Haan – lekin honest answer chahiye to ye samjho: homeopathy acne mein ek din mein kaam nahi karta. Ye ek systemic approach hai jo skin ke andar ke imbalance ko address karta hai. Jo patients isko most helpful paate hain: jinhe baar baar antibiotics lene pad rahe hain aur phir bhi acne return karta hai. Ya jinhe hormonal acne hai – periods ke aaspaas zyada breakout. Ya jinhe side-effect ke bina long-term approach chahiye. Is area mein research limited hai aur results individual hote hain – lekin root cause approach mein homeopathy ki philosophy logically sound hai. Realistic expectation: 8-12 hafton mein improvement begin hona – consistency zaruri hai.',
    },
    {
      _key: 'faq6',
      faqType: 'general',
      q: 'Achanak breakout kyun hota hai – koi obvious reason nahi?',
      a: 'Ye frustrating situation hai – aur bahut common bhi. Kuch hidden triggers jo log miss karte hain: phone screen jo rooz chehra ke saath touch hota hai – bacteria direct transfer hota hai; pillowcase – agar weekly nahi badle to bacteria ka bed ban jaata hai; hair products – gel, oil, spray jo forehead ya jawline pe aa jaate hain; dehydration – body zyada tel banati hai compensation mein; sudden diet change – zyada dairy ya high-glycemic food; hormone fluctuations jo test mein bhi nahi dikhati lekin skin react karti hai. Ek "symptom diary" rakhein – 2-3 hafte track karein kya khaaya, kab breakout aaya. Pattern dikhta hai.',
    },
    {
      _key: 'faq7',
      faqType: 'general',
      q: 'Bacchon aur teenagers mein pimples kyun zyada hote hain?',
      a: 'Puberty mein androgen hormones surge karte hain – dono boys aur girls mein. Ye hormones sebaceous glands ko directly stimulate karte hain zyada tel banane ke liye. Isiliye 12-18 saal ke beech acne itna common hai. Teen acne aksar 18-22 ke baad apne aap reduce hota hai – lekin sab mein nahi. Agar severe hai, daag pad rahe hain, ya self-confidence pe asar ho raha hai – tab wait mat karein. Homeopathy teenagers mein especially safe hai kyunki long-term antibiotics ke side effects nahi hote. Lekin diagnosis zaroori hai – sirf koi bhi medicine self-prescribe mat karein. Doctor se milein agar: daane bade, dard-nak, aur chehra/peethe dono pe hain.',
    },
    {
      _key: 'faq8',
      faqType: 'general',
      q: '30 ke baad bhi pimples kyun aate hain?',
      a: 'Ye adult acne hai – aur ye teenage acne se alag hoti hai. 30 ke baad acne ke common reasons: hormonal changes – pregnancy, perimenopause, ya PCOS; chronic stress – cortisol zyada = sebum zyada; wrong skincare switch – aging skin ke liye products change kiye jo pores block karne wale hain; gut health issues – kuch research mein gut-skin connection dikhta hai; certain supplements – biotin supplements aksar adult acne trigger karte hain. India mein 30+ women mein acne aksar PCOS se linked hota hai – agar saath mein weight gain, irregular periods, ya facial hair hai to gynecologist se milein. Homeopathy is age group mein especially relevant hai – long-term antibiotic alternatives explore karne ke liye.',
    },
    {
      _key: 'faq9',
      faqType: 'general',
      q: 'Kya pimple todne se acne aur bura ho jaata hai?',
      a: 'Haan – almost hamesha aur bura hota hai. Kya hota hai jab pop karte hain: pimple ke andar ka material (bacteria + sebum) skin ke andar aur deeper push ho sakta hai. Surrounding tissue inflame hoti hai. Permanent indented scar ka risk kaafi zyada ho jaata hai. Ek simple rule: touch nahi, pop nahi – sirf saaf karo aur hone do. Agar pimple bahut dard-nak hai aur khud se resolve nahi ho raha – dermatologist ke paas jaao. Woh properly drain karte hain sterile conditions mein – aap ghar pe nahi kar sakte wo. Daag ke baad treatment mushkil aur expensive hoti hai – pehle se bachna kaafi asaan hai.',
    },
    {
      _key: 'faq10',
      faqType: 'general',
      q: 'Acne mein kaunsa test karwana chahiye?',
      a: 'Zyada-tar cases mein koi test zaruri nahi – dermatologist skin dekh ke diagnose karte hain. Lekin kuch situations mein tests helpful hain: hormonal panel (testosterone, DHT, estrogen, progesterone) – agar jawline acne hai, periods irregular hain; PCOS evaluation (ultrasound + hormones) – agar upar ke symptoms hain aur weight bhi badh raha hai; thyroid function test – agar fatigue + acne + weight change saath hain; skin culture – agar antibiotic se better nahi ho raha – bacteria resistant ho sakta hai. Doctor ko batao exactly kab aur kahan acne hota hai – is information se wo decide karte hain kaunsa test helpful hoga. Khud se test order mat karein – cost aur confusion dono badh sakti hai.',
    },
    {
      _key: 'faq11',
      faqType: 'general',
      q: 'Kya acne ke daag hamesha ke liye rehte hain?',
      a: 'Sabse pehle: "hamesha ke liye" ka vaada koi bhi system honestly nahi kar sakta. Jo realistic hai: post-inflammatory hyperpigmentation (PIH) – yaani red ya brown daag jo pimple ke baad rehte hain – ye aksar 3-6 mahine mein fade hote hain sunscreen use karne se. Deeper pitted scars (atrophic scars) – ye naturally kam fade hote hain. Inke liye dermatological procedures help karte hain – chemical peels, microneedling, laser. Jo aap khud kar sakte hain daag reduce karne ke liye: SPF 30+ sunscreen roz – dhoop daag aur dark karta hai; active acne jaldi treat karo – daag tab padta hai jab inflammation zyada aur zyada der ho; pop mat karo – ye golden rule hai daag prevention ka. Homeopathy daag treatment ke liye sirf complementary hai – deep scars ke liye dermatologist primary care provider hain.',
    },
    {
      _key: 'faq12',
      faqType: 'homeopathy',
      q: 'Acne se long-term relief kaise milegi?',
      a: '"Permanent cure" ka vaada koi bhi system honestly nahi karta. Jo realistic improvement hai – aur jo achieve karna possible hai: breakouts ki frequency itni kam ho jaaye ki months beet jaayein bina major flareup ke; jab hota bhi ho to mild ho – severe cysts nahi; skin overall stable aur less reactive ho. Iske liye kya kaam karta hai: consistent skincare routine – gentle, non-comedogenic products; trigger identify karo aur avoid karo (diary method); hormonal causes treat karo agar hain (PCOS, thyroid); stress management – ye seriously acne pe asar karta hai; long-term approach – 3-6 mahine minimum dena padta hai. Homeopathy is long-term framework mein helpful role play kar sakti hai – khaaskar baar baar antibiotic ke beech cycle todne mein. Results individual hote hain aur qualified homeopath ke saath consultation zaruri hai.',
    },
  ],

  relatedSymptoms: [
    {
      _key: 'rs1',
      title: 'Oily Skin',
      hindiName: 'Chikni Twacha',
      slug: 'oily-skin',
    },
    {
      _key: 'rs2',
      title: 'Skin Rash',
      hindiName: 'Chamdi pe Daane/Lali',
      slug: 'skin-rash',
    },
    {
      _key: 'rs3',
      title: 'Blackheads',
      hindiName: 'Kaale Bindu',
      slug: 'blackheads',
    },
    {
      _key: 'rs4',
      title: 'Face Pigmentation',
      hindiName: 'Chehra Kala Padna',
      slug: 'hyperpigmentation',
    },
  ],

  sources: [
    {
      _key: 'src1',
      name: 'World Health Organization – Skin Conditions: Burden & Needs | 2023',
    },
    {
      _key: 'src2',
      name: 'Mayo Clinic – Acne: Symptoms & Causes | 2024',
    },
    {
      _key: 'src3',
      name: 'NCBI / PubMed – Pathogenesis of Acne Vulgaris: Recent Advances | 2022',
    },
    {
      _key: 'src4',
      name: 'NHS UK – Acne: Overview, Causes and Treatment | 2023',
    },
  ],
}

async function seed() {
  console.log('🌱 Seeding Pimples/Acne symptom page...')
  await client.createOrReplace(symptom)
  console.log('✅ Symptom seeded — homeopedia.in/symptoms/pimples-acne')
}

seed().catch(console.error)
