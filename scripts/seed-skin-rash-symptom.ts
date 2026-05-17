import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'symptom-skin-rash',
  _type: 'symptom',

  name: 'Skin Rash',
  hindiName: 'Twacha Pe Daane / Laal Dhabbe',
  hinglishName: 'skin pe daane ya laal dhabbe',
  slug: { _type: 'slug', current: 'skin-rash' },
  bodySystem: 'Skin',

  metaTitle: 'Skin Rash in Hindi — Karan, Ilaaj aur Homeopathy',
  metaDescription: 'Skin rash (twacha pe daane/laal dhabbe) ke karan, severity aur ghar pe safe steps — simple Hinglish mein. Verified info, doctor-reviewed.',
  publishedAt: new Date('2026-05-17').toISOString(),

  whatIsThis: `Kabhi achanak skin pe laal dhabbe aa jaate hain — kabhi daane, kabhi sujan, kabhi sirf kharish. Koi ek jagah hoti hai, kabhi poore badan pe fail jaate hain. Kuch rashes seedha dikhte hain, kuch andar khujlate rehte hain — dikh-te kuch nahi.

Ye sensation alag hoti hai — kabhi jalan, kabhi khujli, kabhi tightness. Aap sochte hain: "Ye kya ho gaya suddenly?"

Skin rash India mein ek bahut common complaint hai — garmi, humidity, pollution, aur allergies milke skin ko react karne pe majboor karte hain. Aap akele nahi hain.

Ye page aapko 2 minute mein batayega: aapka rash serious hai kya, kab doctor zaruri hai, aur aage kya karna chahiye.`,

  indiaContext: 'WHO ke anusar skin conditions — jisme rash bhi shaamil hai — developing countries mein outpatient visits ke top 5 reasons mein aate hain. India mein garmi aur humid climate ye aur common banata hai.',
  indiaContextSource: 'WHO — Skin Conditions Overview 2023',

  severityLevel1: [
    'Rash sirf ek choti jagah pe hai — haath, pair, ya kisi ek body part pe',
    'Rash 1-2 din mein khud kam ho raha hai',
    'Khujli hai lekin sahne layak hai — neend nahi uchad rahi',
    'Koi sujan nahi, koi jalan nahi',
    'Koi nayi soap, cream, ya kapda use kiya tha — clearly wajah samajh aa rahi hai',
    'Bukhar nahi, thakaan nahi, aur koi aur takleef nahi',
  ],
  severityLevel2: [
    'Rash 3-4 din se zyada se hai aur better nahi ho raha',
    'Poore badan pe fail raha hai — ek jagah se doosri jagah',
    'Khujli itni hai ki raat ko neend nahi hoti',
    'Rash ke saath halka bukhar bhi hai',
    'Aankhon ke aas paas ya private parts pe rash aa gaya hai',
    'Bacche mein rash hai — kisi bhi umar mein (infant mein toh 24 ghante ke andar doctor)',
    'Baar baar same jagah ya same season mein aata hai',
  ],
  severityLevel3: [
    'Rash ke saath saans lene mein takleef ho rahi hai',
    'Gale mein sujan lag rahi hai ya nigalne mein problem hai',
    'Chehra, honth, ya jeebh suji hui hai',
    'Rash bahut tezi se — ghanton mein — poore badan pe fail gaya hai',
    'Rash ke saath tej bukhar (102°F/39°C se upar) hai',
    'Rash mein se pus nikal raha hai ya bohot dard hai',
    'Rash dekhne mein "pinpoint red dots" jaise hain jo dabane se gayab nahi hote — ye Meningitis ka sign ho sakta hai, TURANT hospital',
  ],

  timeline3Days: 'Naya rash aksar ek trigger ka reaction hota hai — naya detergent, khaana, dhoop, sweat, ya contact. Body reaction de rahi hai kisi cheez ko. Trigger hatao — observe karo. Agar Level 1 signs hain to 2-3 din watch karo. Agar 72 ghante mein better nahi hua ya badhne laga — Level 2 mein shift ho jaata hai, doctor dikhao.',
  timeline4Weeks: 'Ek hafte se zyada ka rash usually sirf reaction nahi — ya to koi skin condition develop ho rahi hai (Eczema, Psoriasis, Contact Dermatitis), ya koi internal cause hai. Is hafte doctor se milein — observe karna ab enough nahi hai. Skin conditions mein early treatment better results deta hai.',
  timelineMonthPlus: 'Chronic rash — jo aata jaata rehta hai ya hamesha rehta hai — ek deeper signal hai. Sirf cream lagaate rehna kaam nahi aayega. Root cause jaanna zaroori hai — blood tests, allergy tests ya patch tests ho sakti hain. Homeopathy is stage pe especially relevant hai — chronic skin conditions mein constitutional approach kaam karta hai. Doctor se milein — delay mat karo.',

  lifestyleCauses: [
    {
      _key: 'lc1',
      causeName: 'Contact Irritation (Kisi Cheez Ko Touch Karne Se)',
      mechanism: 'Skin ke bahar ek natural protective barrier hoti hai. Jab koi irritating substance — harsh soap, detergent, synthetic fabric, metal (nickel wali jewellery), ya chemical — is barrier ko tod deta hai, skin mein inflammation shuru ho jaati hai. Immune cells rush karte hain — aur ye reaction skin pe rash ke roop mein dikhti hai. Ye "Contact Dermatitis" kehlata hai.',
      howToIdentify: 'Rash exactly wahan hota hai jahan wo cheez touch hui thi — wristwatch ke neeche, bra strap ke neeche. Naya product use karne ke 12-48 ghante baad shuru hota hai.',
    },
    {
      _key: 'lc2',
      causeName: 'Heat Rash (Ghamoriya / Prickly Heat)',
      mechanism: 'Garmi mein sweat glands se nikalne wala pasina skin ki surface pe block ho jaata hai — jab kapde tight hon, humidity zyada ho, ya bahut zyada pasina aaye. Ye blocked sweat glands mein collect hota hai — sujan aur tiny red bumps banate hain. India ki garmi mein ye extremely common hai.',
      howToIdentify: 'Gale ke paas, kaankhon mein, peeth pe ya jahan bhi kapde tight the. Garmi mein badhta hai, AC mein ya thanda paani lagane pe better hota hai.',
    },
    {
      _key: 'lc3',
      causeName: 'Allergic Reaction (Allergy Se)',
      mechanism: 'Body ka immune system kisi specific cheez ko — khaane ki cheez, dawaai, dhool, pollen, pet hair — "threat" samajhta hai. Immune cells Histamine release karte hain — ek chemical jo blood vessels ko dilate karta hai, skin mein fluid laata hai — aur ye hives ya widespread rash ke roop mein dikhta hai. Reaction minutes se ghanton mein aa sakti hai.',
      howToIdentify: 'Rash achanak aata hai — khane ke baad, dawaai ke baad. Hives mein rash thodi der mein jagah change kar leta hai — ek jagah gayab, doosri jagah aata hai.',
    },
    {
      _key: 'lc4',
      causeName: 'Sweat + Friction (Pasine Aur Ragad Se)',
      mechanism: 'Jahan bhi skin fold hoti hai — thighs ke beech, kaankhon mein, pet ke neeche — pasina aur skin ki ragad milke skin ko irritate karti hai. Bacteria bhi warm moist areas mein badh jaate hain — rash aur infection ka risk dono badhte hain.',
      howToIdentify: 'Folds mein hota hai — inner thighs, underarms, under breast area. Garmi mein ya exercise ke baad badhta hai. Redness ke saath kabhi kabhi raw feel hoti hai skin ko.',
    },
  ],

  medicalCauses: [
    {
      _key: 'mc1',
      diseaseName: 'Psoriasis',
      diseaseHindiName: 'Chambal',
      howSymptomPresents: 'Skin cells normal se 10x tezi se banti hain — dead cells ki thick, silvery-white plaques bann jaati hain. Neeche skin laal aur inflamed hoti hai. Zyaatar kohnon pe, ghunton pe, aur sir ki khaal pe.',
      howToIdentify: 'Sirf laal rash nahi — upar silver/white scaly coating hoti hai. Scratch karne pe "candle wax" jaisi cheez nikti hai. Chronic hai — aata jaata rehta hai.',
      homeopediaSlug: 'psoriasis',
      isAvailable: true,
    },
    {
      _key: 'mc2',
      diseaseName: 'Eczema (Atopic Dermatitis)',
      diseaseHindiName: 'Khujli Ki Bimari / Atopic Dermatitis',
      howSymptomPresents: 'Skin ka natural moisture barrier weak ho jaata hai — skin dry, itchy, aur inflamed rehti hai. Flare-ups aate hain — kuch din bahut bura, phir thoda better. Bacchon mein zyada common — cheeks, kohnon ki crease, ghunton ki crease pe.',
      howToIdentify: 'Chronic khujli jo scratching ke baad aur badhti hai. Skin thick aur leathery ho jaati hai purani jagahon pe. Family mein asthma ya allergies ki history hoti hai.',
      homeopediaSlug: 'eczema',
      isAvailable: true,
    },
    {
      _key: 'mc3',
      diseaseName: 'Urticaria (Hives / Pitti)',
      diseaseHindiName: 'Pitti / Chhapaki / Hives',
      howSymptomPresents: 'Achanak wheals (raised welts) bante hain — kuch minute mein kahi bhi. Kuch ghanton mein ek jagah se gayab hokar doosri jagah aa jaate hain. Intense khujli hoti hai.',
      howToIdentify: 'Rash jagah change karta hai — ye urticaria ki identifying feature hai. Dabaane pe white hota hai. Allergic trigger dhundhna zaroori hai.',
      homeopediaSlug: 'urticaria',
      isAvailable: true,
    },
    {
      _key: 'mc4',
      diseaseName: 'Lichen Planus',
      diseaseHindiName: 'Lichen Planus',
      howSymptomPresents: 'Purple-violet, flat-topped bumps hote hain — zyaatar kaalaaiyon pe (wrists), pair ki anguliyon ke paas, ya munh ke andar. Bumps pe white lines dikhti hain — "Wickham\'s striae".',
      howToIdentify: 'Purple color aur flat-topped bumps — ye identify karne wali feature hai. Munh mein bhi white patches ho sakti hain. Khujli moderate hoti hai.',
      homeopediaSlug: 'lichen',
      isAvailable: true,
    },
    {
      _key: 'mc5',
      diseaseName: 'Contact / Seborrheic Dermatitis',
      diseaseHindiName: 'Twacha Ki Sujan / Dermatitis',
      howSymptomPresents: 'Contact Dermatitis mein jabhi koi cheez touch kari wahan rash. Seborrheic Dermatitis mein scalp, chehre pe — eyebrows, nose ke sides — oily, flaky patches bante hain.',
      howToIdentify: 'Contact type mein rash ki exact boundary us cheez se match karti hai jo touch ki. Seborrheic type mein dandruff ke saath chehre pe bhi flaky redness hoti hai.',
      homeopediaSlug: '',
      isAvailable: false,
    },
  ],

  redFlags: [
    'Meningococcal Infection — Agar rash pinpoint red/purple dots jaise dikhe jo dabane pe gayab na hon, aur saath mein stiff neck ya tej bukhar ho — ye Meningitis ka sign ho sakta hai, TURANT hospital.',
    'Severe Allergic Reaction (Anaphylaxis) — Agar rash ke saath gale mein tightness, saans lene mein takleef, ya chehra sujna shuru ho — ye life-threatening allergy hai, ek minute bhi mat ruko.',
    'Steven-Johnson Syndrome — Agar dawaai lene ke baad rash shuru ho aur skin blistering ya peeling lagni shuru ho — ye rare but serious drug reaction hai, turant hospital.',
  ],

  homeSteps: [
    {
      _key: 'hs1',
      action: 'Trigger Hatao — Pehla Kaam Ye Hai',
      whyItWorks: 'Sochao pichle 24-48 ghante mein kya naya tha — naya soap, detergent, khaana, kapda, ya dhoop. Wo cheez turant hatao. Agar trigger hata diya to body ki inflammatory response apne aap slow honi shuru ho jaati hai — bina kisi dawaai ke.',
    },
    {
      _key: 'hs2',
      action: 'Cool Compress Lagao',
      whyItWorks: 'Ek saaf kapde ko thande paani mein bhigo ke rash wali jagah pe rakhein — 10-15 minute, teen-chaar baar din mein. Thanda temperature se blood vessels contract hoti hain — local inflammation aur khujli dono thodi kam hoti hai. Ice directly skin pe mat lagao.',
    },
    {
      _key: 'hs3',
      action: 'Dhile, Suti Kapde Pahno',
      whyItWorks: 'Synthetic fabric, tight clothes — ye skin ko aur irritate karte hain. Loose cotton breathable hai — sweat nahi rokta, friction kam karta hai, skin ko heal hone ka chance milta hai.',
    },
    {
      _key: 'hs4',
      action: 'Rash Wali Jagah Ko Scratch Mat Karo',
      whyItWorks: 'Scratching se skin ki protective layer toot jaati hai aur infection ka risk bahut badh jaata hai. Scratching se histamine release aur badhta hai — matlab khujli aur badhegi, kam nahi hogi. Nails kaat lo is waqt.',
    },
    {
      _key: 'hs5',
      action: 'Neem Ya Sandalwood Paste (Sirf Mild Cases Mein)',
      whyItWorks: 'Saaf neem paste ya chandan paste thodi relief de sakta hai mild heat rash ya contact rash mein. Neem mein anti-inflammatory properties hain. Lekin agar rash open wound ya blisters ke saath ho — ye mat lagao, doctor se milein.',
    },
  ],

  homeopathyIndividualization: `Skin rash ka naam ek hai — lekin appearance, feeling, aur wajah har insaan mein alag hoti hai. Kisi ki rash raat ko badhti hai — kisi ki garm kamre mein. Kisi ko rash ke saath jalan hoti hai — kisi ko sirf khujli, koi dard nahi. Kisi ko scratch karne pe better lagta hai — kisi ko aur bura. Homeopathy mein sirf "rash" nahi dekha jaata — aapka rash exactly kaisa hai, kab badhta hai, kya khaate hain, stress ka koi role hai — ye sab milake treatment decide karta hai. Isliye do patients ko same dikhne wali skin condition mein bilkul alag approach ho sakti hai.`,

  homeopathyRootCause: `Bahut log saalon se cream lagate rehte hain — rash thodi der ke liye band hoti hai, phir wapas aati hai. Ye cycle thaka deta hai. Homeopathy mein goal sirf rash band karna nahi hota — jo cheez baar baar rash la rahi hai, us underlying tendency ko address kiya jaata hai. Chronic skin conditions mein waqt ke saath frequency aur intensity dono kam hoti hain. Research is area mein limited hai aur results individual hote hain — lekin constitutional approach chronic cases mein ek reasonable option hai.`,

  homeopathySafety: `Bacchon mein skin rash bahut common hai — lekin strong topical steroids bacchon ki skin ke liye ideal nahi hote long-term mein. Homeopathy highly diluted medicines use karta hai — practically side-effect free, isliye bacchon mein aur pregnancy mein bhi safely use ho sakti hai. Zaroori caveat: Severe allergic reaction ya Level 3 signs mein conventional emergency treatment pehle. Homeopathy complementary role mein kaam karti hai — acute emergency mein pehle hospital.`,

  isForYouIf: [
    'Aap baar baar aane wali skin rash se thak gaye hain — sirf suppression nahi, root cause samajhna chahte hain',
    'Long-term sustainable relief chahiye — quick fix nahi',
    'Aap pregnant hain, baccha hai, ya doosri medicines chal rahi hain — side-effect free option chahiye',
    'Aapko diagnosis pata hai (Eczema, Psoriasis, Urticaria) aur aap complementary approach try karna chahte hain',
  ],
  notForYouIf: [
    'Level 3 signs hain — turant hospital, homeopathy baad mein discuss karte hain',
    'Rash infected hai (pus, fever, spreading fast) — pehle infection control, phir constitutional treatment',
    'Aapko abhi isi waqt itching relief chahiye — acute relief ke liye pehle conventional option lein',
  ],

  homeopathyDiseaseLinks: [
    { _key: 'hdl1', diseaseName: 'Eczema (Chambal) ka poora ilaaj',        diseaseSlug: 'eczema'    },
    { _key: 'hdl2', diseaseName: 'Psoriasis ka poora ilaaj',               diseaseSlug: 'psoriasis' },
    { _key: 'hdl3', diseaseName: 'Urticaria (Pitti/Chhapaki) ka poora ilaaj', diseaseSlug: 'urticaria' },
    { _key: 'hdl4', diseaseName: 'Lichen Planus ka poora ilaaj',           diseaseSlug: 'lichen'    },
  ],

  linkedDiseaseCards: [
    { _key: 'ldc1', title: 'Psoriasis',          hindiName: 'Chambal',                    slug: 'psoriasis' },
    { _key: 'ldc2', title: 'Eczema',             hindiName: 'Atopic Dermatitis',          slug: 'eczema'    },
    { _key: 'ldc3', title: 'Urticaria',          hindiName: 'Pitti / Chhapaki / Hives',  slug: 'urticaria' },
    { _key: 'ldc4', title: 'Lichen Planus',      hindiName: 'Lichen Planus',              slug: 'lichen'    },
  ],

  faqs: [
    {
      _key: 'faq1', faqType: 'common-cause',
      question: 'Skin rash ka sabse common karan kya hai?',
      answer: `Skin rash ka sabse common karan Contact Dermatitis hai — matlab kisi cheez ko touch karne se reaction. Naya soap, detergent, fabric, jewellery, ya cosmetic — skin ise irritant ya allergen samajhti hai aur react karti hai.\n\nIndia mein iske baad heat rash (ghamoriya) second most common hai — garmi aur humidity mein sweat glands block ho jaati hain. Teen number pe allergic reactions aate hain — khaane, dawaai, ya environment se.\n\nAgar koi obvious trigger nahi dikh raha aur rash baar baar aa raha hai — to skin condition (Eczema, Psoriasis) ya internal cause ho sakta hai. Tab doctor se diagnosis zaroori hai.`,
    },
    {
      _key: 'faq2', faqType: 'normal-vs-serious',
      question: 'Skin rash normal hai ya serious — kab doctor zaroori hai?',
      answer: `Ek simple rash — jo ek jagah pe hai, khud se better ho raha hai, aur koi aur symptoms nahi — usually serious nahi hota.\n\nDoctor ZAROOR dikhao agar:\n- Rash 3-4 din mein better nahi hua\n- Poore badan pe fail raha hai\n- Rash ke saath bukhar, saans mein takleef, ya chehra sujna\n- Rash mein blisters ban rahe hain ya skin peeling ho rahi hai\n- Infant ya chote bacche mein koi bhi rash\n\nTurant hospital agar saans lene mein takleef ho, gala suje, ya pinpoint red dots jo dabane pe nahi jaate — ye seriously dangerous signs hain.`,
    },
    {
      _key: 'faq3', faqType: 'duration',
      question: 'Skin rash kitne din mein theek hota hai?',
      answer: `Ye cause pe depend karta hai:\n\n- Heat rash / Contact Dermatitis — trigger hatane ke baad 2-5 din mein usually better\n- Allergic reaction (hives) — 24-72 ghante mein mostly clear\n- Viral rash (Chickenpox jaisi) — 1-2 hafte\n- Chronic conditions (Eczema, Psoriasis) — ye baar baar aate rehte hain, management ki zarurat hoti hai\n\nAgar 1 hafte mein better nahi hua — doctor se milein. Agar 4 hafte se zyada ho gaya — chronic ho sakta hai, tab zaroor evaluation karwao.`,
    },
    {
      _key: 'faq4', faqType: 'bacchon-mein',
      question: 'Bacchon mein skin rash kyun hota hai?',
      answer: `Bacchon ki skin adults se zyada sensitive hoti hai — barrier thodi weak hoti hai, immune system still develop ho raha hota hai.\n\nCommon causes bacchon mein:\n- Diaper rash — moisture aur friction se\n- Viral rashes — Roseola, Hand-Foot-Mouth disease\n- Eczema — family mein asthma/allergy history ho to zyada\n- Heat rash — India ki garmi mein bahut common\n- Food allergies — naye khaane introduce karte waqt\n\nInfant mein (1 saal se kam) koi bhi rash ho — 24 ghante mein doctor dikhao. Delay mat karo.`,
    },
    {
      _key: 'faq5', faqType: 'pregnancy',
      question: 'Pregnancy mein skin rash normal hai kya?',
      answer: `Pregnancy mein hormonal changes se kuch skin conditions aur badhti hain — ya pehli baar aati hain.\n\nNormal ho sakta hai: Mild itching, stretch marks wali jagah pe redness — ye common hai.\n\nDoctor se milein: Agar rash saath mein intense itching — especially haath ki hatheli aur paon ke talon pe — ho, to ye ICP (Intrahepatic Cholestasis of Pregnancy) ho sakta hai — ek liver condition jo baby ke liye risk create karta hai.\n\nPUPPP aur Pemphigoid Gestationis — in dono mein bhi doctor evaluation mandatory hai.\n\nPregnancy mein koi bhi new rash — please doctor ko zaroor dikhao. Self-diagnose ya ghar pe treat karne ki koshish mat karo.`,
    },
    {
      _key: 'faq6', faqType: 'normal-vs-serious',
      question: 'Bina khujli ke bhi skin rash ho sakta hai?',
      answer: `Haan — aur iska matlab ye nahi ki wo serious nahi.\n\nKuch rashes jo itchy nahi hote:\n- Viral rashes (measles, roseola) — itching kam hoti hai\n- Lichen Planus — moderate itching, sometimes mild\n- Drug reaction rashes — sometimes painless\n- Lupus (butterfly rash) — cheeks pe redness, itching usually nahi hoti\n\nAgar rash itchy nahi hai lekin days se hai, ya saath mein joint pain, bukhar, ya fatigue hai — to doctor dikhana zyada zaroori ho jaata hai.`,
    },
    {
      _key: 'faq7', faqType: 'ghar-wait',
      question: 'Skin rash mein ghar pe kab tak reh sakte hain?',
      answer: `Ghar pe raho agar:\n- Rash ek jagah pe hai, trigger samajh aa raha hai\n- Khujli sahne layak hai, neend theek hai\n- Koi bukhar, sujan, ya spreading nahi\n- 24-48 ghante mein thoda better lag raha hai\n\nDoctor ko call karo agar 72 ghante mein zero improvement na ho, ya rash spread kare, ya bukhar aaye.\n\nTurant hospital — Level 3 signs pe. Ghar pe wait karna wahan option nahi hai.`,
    },
    {
      _key: 'faq8', faqType: 'test-diagnosis',
      question: 'Skin rash mein kaunsa test karwana chahiye?',
      answer: `Test cause pe depend karta hai — doctor decide karega. Common tests:\n\n- Patch Test — Contact allergy identify karne ke liye\n- Skin Prick Test — Environmental aur food allergies\n- Blood Tests — CBC, IgE levels, liver/kidney function agar internal cause suspected ho\n- KOH Test — Fungal infection confirm karne ke liye\n- Skin Biopsy — Agar diagnosis unclear ho (Psoriasis, Lichen Planus, Lupus mein)\n\nPehle doctor se milein — wo symptoms dekh ke decide karega kaunsa test actually zaroori hai. Khud se test mat karwao.`,
    },
    {
      _key: 'faq9', faqType: 'india-specific',
      question: 'Garmi mein skin rash kyun badhta hai — India mein ye itna common kyun hai?',
      answer: `India ki heat + humidity ek perfect skin-irritation environment banate hain. Teen cheezein milti hain:\n\n1. Zyada pasina — sweat glands overwork, block ho sakti hain — heat rash\n2. Skin fold areas damp rehte hain — bacteria aur fungus ke liye ideal condition\n3. Pollution + dust — outdoor workers aur city mein rahne walo ki skin constantly exposed hai irritants se\n\nIs liye India mein summer skin rash complaints dramatically badhti hain. Loose cotton, hydration, aur sweat manage karna practical prevention hai.`,
    },
    {
      _key: 'faq10', faqType: 'baar-baar',
      question: 'Skin rash baar baar kyun aata hai?',
      answer: `Baar baar aane wali rash usually ek signal hai ki sirf trigger nahi — ek underlying sensitivity ya condition hai.\n\nCommon reasons:\n- Unidentified allergy — jo baar baar samne aa rahi hai\n- Chronic skin condition — Eczema, Psoriasis — ye flare-up pattern follow karte hain\n- Stress — Urticaria aur Eczema mein stress ek known trigger hai\n- Gut-skin connection — kuch cases mein gut health ka role hota hai\n\nHomeopathy mein chronic recurring rash ke liye constitutional assessment karta hai — pattern todni ki koshish ki jaati hai, sirf flare-up suppress nahi.`,
    },
    {
      _key: 'faq11', faqType: 'homeopathy',
      question: 'Kya homeopathy skin rash mein kaam karta hai?',
      answer: `Homeopathy skin rash mein is tarah kaam karta hai:\n\nAcute simple rashes (heat rash, mild allergic reaction) mein homeopathy comfort de sakti hai — lekin ye sirf symptom management hai.\n\nChronic skin conditions (Eczema, Psoriasis, chronic Urticaria) mein homeopathy ka real value hai — in conditions mein constitutional approach, jo aapki overall health, stress level, sleep, aur individual symptom pattern dekhta hai, flare-ups ki frequency aur intensity dono kam kar sakta hai.\n\n"Permanent cure" ka vaada koi bhi system honestly nahi kar sakta. Jo realistic expect kar sakte hain: baar baar aane wali rash ki frequency kaafi kam ho — life practically better ho. Results individual hote hain.`,
    },
    {
      _key: 'faq12', faqType: 'permanent',
      question: 'Skin rash se permanently chutkara milega?',
      answer: `Ye depend karta hai cause pe.\n\nContact dermatitis ya trigger-based rash — agar trigger permanently remove ho jaye, rash nahi aati.\n\nChronic conditions (Eczema, Psoriasis) — inhein "permanently cure" karna ab bhi medicine ka active research area hai. Jo realistic hai: sahi management se rash itni controlled ho sakti hai ki life practically normal feel ho. Long remissions possible hain.\n\nHomeopathy mein bhi — "permanent cure" ka claim karna honest nahi hoga. Jo koshish hoti hai: body ki tendency ko address karna taaki flare-ups rare aur mild hon.\n\nKisi bhi system se agar "100% guarantee" mile — doubt karo. Realistic aur honest doctor ko trust karo.`,
    },
  ],

  relatedSymptoms: [
    { _key: 'rs1', name: 'Itching All Over Body', hindiName: 'Poore Sharir Mein Khujli', slug: 'itching-all-over-body' },
    { _key: 'rs2', name: 'Dry Skin',              hindiName: 'Rookhi Twacha',            slug: 'dry-skin'            },
    { _key: 'rs3', name: 'Hives / Urticaria',     hindiName: 'Pitthi / Chhapaki',        slug: 'hives-urticaria'     },
    { _key: 'rs4', name: 'Skin Swelling',         hindiName: 'Twacha Pe Sujan',          slug: 'skin-swelling'       },
  ],

  sources: [
    { _key: 's1', name: 'Mayo Clinic — Rashes: Causes, Symptoms & Treatment',                        year: '2024', url: 'https://www.mayoclinic.org/symptoms/skin-rash/basics/definition/sym-20050944' },
    { _key: 's2', name: 'WHO — Skin Conditions Overview',                                             year: '2023', url: 'https://www.who.int/news-room/fact-sheets/detail/skin-conditions'             },
    { _key: 's3', name: 'NCBI / PubMed — Mechanisms of contact dermatitis and allergic skin reactions', year: '2023', url: 'https://pubmed.ncbi.nlm.nih.gov/'                                           },
    { _key: 's4', name: 'NHS UK — Rashes in children: When to seek help',                            year: '2024', url: 'https://www.nhs.uk/conditions/rashes-babies-and-children/'                   },
  ],

  quickFactSymptom:    'Skin rash ek symptom hai — bimari nahi. Cause kai tarah ka ho sakta hai.',
  quickFactIndiaStats: 'Skin conditions — including rash — dermatology OPD visits ka #1 reason hain India mein',
  quickFactDoctorWhen: 'Agar rash 1 hafte mein better nahi hua, ya Level 3 signs aayein — turant doctor',
  reviewDate: 'May 2026',

  doctorNote: 'Maine apni practice mein dekha hai ki skin rash ke jo patients aate hain — unme se majority ko contact dermatitis ya allergy hoti hai lekin wo khud samajhte hain ki "koi bimari ho gayi hai." Ek detailed case history lene se hi trigger samajh aata hai — aksar wahi naya soap ya synthetic dupatta nikalta hai jo unhone 1-2 hafte pehle use karna shuru kiya tha. Chronic cases mein Eczema aur Psoriasis sabse zyada aate hain — aur inka constitutional treatment best results deta hai jab patient patience rakhta hai.',
}

async function seed() {
  console.log('🌱 Seeding Skin Rash symptom page...')
  await client.createOrReplace(doc)
  console.log('✅ Symptom seeded — homeopedia.in/symptoms/skin-rash')
}

seed().catch(console.error)
