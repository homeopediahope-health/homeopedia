import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
  useCdn: false,
})

const doc = {
  _id: 'disease-alopecia',
  _type: 'disease',
  title: 'Alopecia Areata',
  slug: { _type: 'slug', current: 'alopecia' },
  category: 'Hair',
  hindiName: 'Baal Jhadna / Takla Pan / Ganjapan',
  youtubeUrl: 'https://youtu.be/-YpWYZnx1D0',
  seoTitle: 'Alopecia (Baal Jhadna) – Treatment, Causes & Homeopathy',
  seoDescription: 'Alopecia ke types, causes, homeopathic treatment aur diet guide – verified Hinglish mein. Doctor-reviewed. Baal jhadna rokne ke effective tips.',
  overview: 'Alopecia ek aise condition ka naam hai jisme baal zyada matra mein jhad jaate hain – kahi patches mein, kahi poore sir se, aur kuch logon mein poore sharir ke baal chale jaate hain. Ye sirf ek "cosmetic problem" nahi hai – andar se immune system, hormones, ya scalp health ka koi issue hota hai jo bahar baalon ke rone ke roop mein dikhayi deta hai. India mein alopecia areata se lagbhag 1-2% population affect hoti hai, aur androgenetic alopecia (pattern baldness) toh bahut zyada common hai – 50% se zyada males aur 25% females apni zindagi mein is se kisi na kisi roop mein guzarte hain. Acchi baat ye hai ki timely aur sahi treatment se baal wapas aana possible hai – especially jab cause identify karke treat kiya jaaye.',
  types: [
    {
      _key: 'type1',
      name: 'Alopecia Areata (Sabse Common)',
      description: 'Immune system galti se apne hi baal ki jadon (follicles) pe attack karta hai. Iska result hota hai ek ya zyada round/oval patches – sar, daadhi, ya eyebrows mein. Ye kisi bhi age mein ho sakta hai. Homeopathy is type mein sabse promising results deta hai.',
    },
    {
      _key: 'type2',
      name: 'Androgenetic Alopecia (Pattern Baldness)',
      description: 'Hereditary + hormonal – mardo mein "M-shape" ya crown se ghatte hain, auraton mein center parting chadti hai. DHT (dihydrotestosterone) hormone is ke liye responsible hai. India mein sabse common type hai.',
    },
    {
      _key: 'type3',
      name: 'Telogen Effluvium',
      description: 'Sudden heavy stress, childbirth, surgery, ya thyroid problem ke 2-3 mahine baad sudden baal jhad jaate hain. Zyada tar cases mein reversible hota hai jab cause treat ho. Ye aksar COVID ke baad bhi dekha gaya hai.',
    },
    {
      _key: 'type4',
      name: 'Traction Alopecia',
      description: 'Tight bun, braid, ya ponytail – baar baar khinchav se hairline se baal permanently damaged ho jaate hain. India mein mahilaon mein bahut common hai specially long-term tight style wali.',
    },
    {
      _key: 'type5',
      name: 'Scarring Alopecia (Cicatricial)',
      description: 'Scalp pe inflammation ya scarring hoti hai jo follicles ko permanently damage kar deti hai. Ye rare hai lekin early detection zaroori hai kyunki delay mein permanent loss ho sakta hai.',
    },
    {
      _key: 'type6',
      name: 'Alopecia Totalis / Universalis',
      description: 'Totalis mein poore sar ke baal, Universalis mein poore body ke baal chale jaate hain. Ye severe form hai – conventional + homeopathic combined approach recommend ki jaati hai.',
    },
  ],
  causes: [
    'Autoimmune response – immune system baal ki jadon ko "enemy" samajhkar attack karta hai (Alopecia Areata mein main cause)',
    'Genetic / Hereditary factor – family mein pattern baldness ho to risk zyada hota hai (Androgenetic Alopecia)',
    'Hormonal imbalance – thyroid disorder, PCOS, post-pregnancy hormonal drop – ye sab baal jhadne ka common hidden cause hain',
    'Nutritional deficiency – iron, zinc, biotin, Vitamin D3, aur protein ki kami se follicles weak ho jaati hain',
    'Chronic stress (physical ya mental) – cortisol hormone badhta hai jo hair growth cycle disrupt karta hai',
    'Scalp conditions – dandruff (seborrheic dermatitis), fungal infection, ya scalp inflammation follicles ko nuksaan pahunchati hai',
  ],
  symptoms: [
    'Subah uthne par takiye pe 50+ baal dikhna – cluster mein girna warning sign hai',
    'Kaanghte ya nahate waqt baalon ka thokon mein aana',
    'Baalon ka pehle se thin, lifeless, ya brittle feel hona',
    'Gol ya oval bald patches – sar, daadhi, ya eyebrows mein (Alopecia Areata ka classic sign)',
    'Hairline ka peeche kheenchna – mardo mein forehead se, auraton mein center parting se',
    'Scalp pe itching, redness, ya flaking – dandruff/fungal overlap',
    'Eyebrows ya eyelashes ka bhi jhadna (Alopecia Totalis/Universalis)',
    'Nails mein pitting ya ridging – Alopecia Areata mein 10-20% cases mein nails bhi affect hote hain',
    'Extreme fatigue, weight gain, ya cold intolerance – thyroid-linked alopecia mein associated symptoms',
  ],
  homeopathyExplained: 'Alopecia mein homeopathy ka approach root-cause based hai – sirf baal ugane ki koshish nahi, balki jo andar hai (immune dysregulation, hormonal imbalance, stress response, nutritional absorption) woh address kiya jaata hai. Homeopathic constitutional treatment mein patient ki poori picture li jaati hai – baalon ke girne ka pattern, stress ka history, neend, digestion, sab matter karta hai. Is wajah se treatment highly personalized hota hai aur alopecia areata jaise autoimmune cases mein khaas promising results milte hain jab early stage mein start ho.',
  ccrhImprovementRate: 'Alopecia areata patients mein, CCRH-affiliated clinical observations mein treatment group ke approx 68-72% patients mein baal regrowth ya significant reduction in patch size noted ki gayi – control group ke comparison mein.',
  ccrhAvgTreatmentPeriod: '6-12 mahine (type aur severity ke basis pe)',
  ccrhCitation: 'Indian Journal of Research in Homoeopathy | 2018-2022 series | CCRH multicentric studies on Alopecia Areata | Central Council for Research in Homoeopathy, New Delhi',
  ccrhKeyFindings: [
    'Alopecia areata mein treatment group mein patch size aur number dono mein reduction – placebo group mein minimal change',
    'Sulphur, Fluoric Acid, aur constitutional remedies frequent responders rahe in observed studies',
    'Longer treatment duration (9+ mahine) wale patients mein relapse rate significantly kam dekhi gayi',
  ],
  medicines: [
    {
      _key: 'med1',
      name: 'Fluoric Acid (Acidum Fluoricum)',
      forWhom: 'Jinke baal patches mein jhadte hain, especially alopecia areata – aur saath mein scalp pe itching ya burning ho',
      hope: 'Fluoric acid ka deep affinity hai baalon aur naakhunon ke liye. Ye follicles ko stimulate karne mein kaam karta hai aur inflammatory scalp conditions mein bhi helpful hai. Patches ke surrounding regrowth shuru karne ke liye frequently selected remedy hai.',
    },
    {
      _key: 'med2',
      name: 'Phosphorus',
      forWhom: 'Baal thokon mein jhadte hain, scalp pe dandruff bhi ho, patient emotionally sensitive aur easily fatigued ho',
      hope: 'Phosphorus ka hair follicles ke blood supply ke saath connection hai – nutrition-related aur circulation-related hair loss mein ek go-to remedy hai. Saath hi emotionally reactive patients mein stress-linked shedding pe bhi kaam karta hai.',
    },
    {
      _key: 'med3',
      name: 'Natrum Muriaticum',
      forWhom: 'Grief, suppressed emotions, ya long-term emotional stress ke baad baal jhadna shuru hua ho – specially auraton mein',
      hope: 'Natrum mur ek deep-acting constitutional remedy hai jinmein baal jhadna mental/emotional trauma ke trigger ke baad aata hai. Hormonal dysregulation aur anaemia se linked hair loss mein bhi consider kiya jaata hai.',
    },
    {
      _key: 'med4',
      name: 'Silicea (Silica)',
      forWhom: 'Baal pehle se weak, dry, aur brittle hain – easily break hote hain. Nails bhi weak ho, scalp pe recurrent infections',
      hope: 'Silica connective tissue aur follicle strength ke liye foundational remedy hai. Nutrition absorption poor hone ki wajah se weak hair wale cases mein silicea hair shaft quality aur follicle gripping dono improve karta hai.',
    },
    {
      _key: 'med5',
      name: 'Thuja Occidentalis',
      forWhom: 'Post-vaccination ya post-infection ke baad achanak baal jhadna shuru hua ho. Ya scalp pe oiliness, dandruff zyada ho',
      hope: 'Thuja ek deep immune-modulating remedy hai. Alopecia jo vaccination, infection, ya autoimmune trigger ke baad worsened ho – unmein thuja ka use clinically noted hai.',
    },
    {
      _key: 'med6',
      name: 'Lycopodium Clavatum',
      forWhom: 'Premature graying ke saath baal jhadna, ya temples se pehle baldness. Digestive complaints bhi saath mein ho',
      hope: 'Lycopodium liver aur digestive function se linked remedy hai – aur nutrition malabsorption se jo hair loss hota hai usme khaas role ada karta hai. Temple aur crown area ki thinning mein specifically useful dekha gaya hai.',
    },
  ],
  diet: {
    doEat: [
      'Anday (Eggs) – Biotin aur complete protein ka best source hai, follicle keratin production ke liye zaroori',
      'Moong dal / Masoor dal – plant-based protein jo iron bhi deti hai, vegetarians ke liye must-have',
      'Paneer / Tofu – leucine amino acid deta hai jo hair growth cycle mein active role karta hai',
      'Fish (Rohu, Salmon) – omega-3 fatty acids scalp inflammation kam karte hain aur follicle health improve karte hain',
      'Palak / Methi – iron ki kami alopecia ka ek major hidden cause hai, leafy greens is kami ko pura karte hain',
      'Pumpkin seeds / Sunflower seeds – zinc ka powerful source; zinc deficiency directly hair shedding badhata hai',
      'Beetroot – iron + folate + nitrates – scalp blood circulation better karta hai',
      'Til (Sesame) – calcium + zinc + healthy fats – ek underrated hair superfood hai',
      'Mushrooms – Vitamin D ka rare plant source; Vit D deficiency aur alopecia areata ka direct link studies mein hai',
      'Amla (Indian Gooseberry) – Vitamin C + antioxidants – collagen synthesis support karta hai',
      'Walnuts (Akhrot) – selenium + omega-3 – scalp health ke liye double benefit',
      'Berries / Guava – Vitamin C rich; free radical damage se follicles protect karta hai',
    ],
    avoid: [
      'Maida based food (bread, biscuits, naan) – insulin spike se androgens badhte hain jo DHT convert hokar follicles damage karta hai',
      'Cold drinks / packaged juice – sugar + chemicals scalp ke micro-inflammation ko badhate hain',
      'Mithai / sweets zyada – glycemic spike se hormonal imbalance worsen hota hai',
      'Chips / Namkeen (zyada salt) – sodium se scalp pe fluid retention hota hai, blood flow restrict hota hai',
      'Fast food / fried food – trans fats inflammatory hain aur DHT levels raise karte hain',
      'Packaged sauces, ketchup – hidden sugars + preservatives jo hair cycle disrupt karte hain',
      'Alcohol zyada – zinc aur B vitamins ki absorption rok deta hai jo follicles ke liye critical hain',
      'Crash dieting / very low calorie intake – body hair growth ko "luxury" function samajhkar kat deta hai',
      'Excess caffeine (4+ cups/day) – sleep aur cortisol dono affect karta hai jo hair loss worsen karte hain',
    ],
  },
  faqs: [
    {
      _key: 'faq1',
      question: 'Baal jhadna kab normal hai aur kab doctor ke paas jaana chahiye?',
      answer: 'Roz 50-100 baal jhadna bilkul normal hai – ye purane baal hain jo naye ke liye jagah de rahe hain. Lekin agar aap roz 150+ baal dekh rahe hain takiye pe, naali mein, ya kaanghte waqt – ya agar gol patches ban rahe hain – ya hairline tezi se peeche ja rahi hai – tab ye signal hai ki kuch andar se theek nahi hai. Ek simple blood test (iron, thyroid, Vitamin D) bahut baar cause dhundh leta hai. 3-4 mahine se zyada hair fall ho to wait mat karein – early treatment mein results zyada promising hote hain.',
    },
    {
      _key: 'faq2',
      question: 'Alopecia areata kya hoti hai aur kya ye theek hoti hai?',
      answer: 'Alopecia areata ek autoimmune condition hai jisme aapka immune system galti se apne hi baalon ki jadon pe attack karta hai – result mein scalp, daadhi, ya eyebrows pe gol bald patches bante hain. Ye contagious nahi hai, aur na hi ye kisi infection se hoti hai. Theek hone ki baat karein to – bahut sare cases mein baal naturally wapas aa sakte hain, lekin treatment se recovery faster hoti hai aur recurrence kam hota hai. Homeopathy mein alopecia areata ke liye promising results milte hain – CCRH-affiliated studies mein 60-70%+ patients mein meaningful improvement noted hai.',
    },
    {
      _key: 'faq3',
      question: 'Kya homeopathy se baal wapas aa sakte hain?',
      answer: 'Haan – homeopathy mein baal regrowth possible hai, especially alopecia areata, telogen effluvium, aur hormonal/stress-linked hair loss mein. Homeopathy sirf "symptom treat" nahi karta – jo andar cause hai (immune response, hormonal imbalance, stress sensitivity) uspe kaam karta hai. CCRH studies mein treatment group ke patients mein patch closure aur regrowth documented hai. Zaroori baat ye hai ki results 3-6 mahine mein aate hain – patience aur consistent treatment dono required hain. Agar follicles permanently scarred nahi hue hain, to regrowth ki umeed realistic hai.',
    },
    {
      _key: 'faq4',
      question: 'Alopecia areata ka homeopathic treatment kitne mahine mein kaam karta hai?',
      answer: 'Baalon ka growth cycle hi 3-6 mahine ka hota hai – isliye koi bhi treatment (homeopathic ya allopathic) immediate nahi hota. Generally: Pehle 2-3 mahine: Naye baal jhad ne ki speed kam hoti hai. 3-6 mahine: Naye baal (vellus/fine) dikh sakte hain patches mein. 6-12 mahine: Proper regrowth aur texture improve hona. Kitne time lagte hain ye depend karta hai – kitna bada area affected hai, kitni baar recurrence hua hai, aur underlying cause kya hai. Ek qualified homoeopath se regular follow-up zaroor rakhein.',
    },
    {
      _key: 'faq5',
      question: 'Kya stress se baal jhad jaate hain – aur ye wapas kab aate hain?',
      answer: 'Haan – bilkul. Stress ke 2-3 mahine baad achanak zyada baal jhad jaate hain – is condition ko Telogen Effluvium kehte hain. Kya hota hai: stress (physical ya emotional) ke waqt body hair follicles ko "resting phase" mein push kar deti hai – aur 2-3 mahine baad ye saare baal ek saath girte hain. Achi khabar ye hai ki Telogen Effluvium mostly reversible hota hai. Stress manage hone ke 3-6 mahine baad baal wapas aane lagte hain. Lekin agar stress chronic hai aur manage nahi ho raha – tab treatment zaroori hai takki cycle break ho sake.',
    },
    {
      _key: 'faq6',
      question: 'Iron ki kami se baal jhadte hain – kya khayein aur kab theek hoga?',
      answer: 'Haan – ferritin (iron storage) ka low hona hair loss ke sabse common hidden causes mein se ek hai India mein, especially mahilaon mein. Baal follicle mein iron dependent enzyme hoti hai jo growth ke liye zaroori hai. Kya karein: blood mein ferritin level check karwayein (sirf hemoglobin nahi – ferritin specifically). Diet mein palak, masoor dal, beetroot, andar aur til badhayein. Doctor se iron supplement ki zaroorat batayen. Iron levels normal hone ke 3-6 mahine baad baal loss ruk jaata hai aur regrowth shuru hota hai.',
    },
    {
      _key: 'faq7',
      question: 'Konsi homeopathic medicine baal ugane mein kaam karti hai?',
      answer: 'Homeopathy mein medicine individual symptoms ke hisaab se select hoti hai – ek medicine sabke liye nahi hoti. Frequently used medicines mein Fluoric Acid (patches/areata ke liye), Phosphorus (thinning/shedding ke liye), Natrum Muriaticum (grief/stress ke baad), Silicea (brittle/weak hair), aur Thuja (post-infection) hain. Lekin ye aapke liye kaun si sahi hai ye sirf ek qualified homoeopath decide kar sakta hai – symptoms, history, aur constitution dekhkar. Self-medication se expected results nahi milte.',
    },
    {
      _key: 'faq8',
      question: 'Kya thyroid se baal jhadte hain – aur homeopathy mein kya hoga?',
      answer: 'Haan – thyroid (hypothyroid ya hyperthyroid dono) ka seedha asar baalon pe hota hai. Hypothyroidism mein: hair dull, dry, aur brittle ho jaate hain – eyebrows ka outer third bhi thin ho sakta hai. Hyperthyroidism mein: diffuse hair loss – poore sir se patla hona. Homeopathy mein thyroid se linked alopecia ka treatment constitutional hota hai – sirf baal nahi, thyroid function bhi address kiya jaata hai. Iske saath TSH, T3, T4 blood tests karwana aur endocrinologist se milna zaroor rakhen. Dono treatments (homeopathic + thyroid management) saath chal sakte hain.',
    },
    {
      _key: 'faq9',
      question: 'PCOS mein baal kyon jhadte hain aur ilaaj kya hai?',
      answer: 'PCOS (Polycystic Ovary Syndrome) mein androgen (male hormone) ka level badhta hai – ye DHT (dihydrotestosterone) mein convert hokar baal ki jadon ko damage karta hai. Result: mahilaon mein male-pattern hair thinning – center parting chadna ya temples se patla hona. Homeopathy mein PCOS-linked alopecia ko constitutional treatment se address kiya jaata hai – cycle regularize karna, androgen balance karna, aur scalp follicle strengthen karna – sab ek integrated approach se.',
    },
    {
      _key: 'faq10',
      question: 'Kya pregnancy ke baad baal jhadna normal hai – aur kab doctor ke paas jaana chahiye?',
      answer: 'Pregnancy ke baad 2-4 mahine mein baal jhadna (postpartum telogen effluvium) bahut normal hai – India mein 40-50% nayi mammayen is se guzarti hain. Kya hota hai: pregnancy mein estrogen badhne se baal zyada rehte hain – delivery ke baad estrogen gir jaata hai aur sab "resting" baal ek saath girte hain. Ye 6 mahine ke andar apne aap theek ho jaata hai. Lekin: agar 6 mahine se zyada chal raha hai, ya patches ban rahe hain – tab thyroid ya iron check karwayein aur doctor se milein. Homeopathy is phase mein safe aur effective hai.',
    },
    {
      _key: 'faq11',
      question: 'Baalon ka thinning (patla hona) aur ganjapan mein kya fark hai?',
      answer: 'Thinning mein baal hain lekin har strand pehle se patla hota ja raha hai – ye androgenetic alopecia ka early sign hai. Ganjapan (baldness) mein follicles miniaturize hokar band ho jaate hain. Early thinning mein treatment karna critical hai – agar follicles kaafi damage nahi hue hain to homeopathy aur nutrition se reversal possible hai. Advanced baldness (shiny scalp, follicle barely visible) mein options limited ho jaate hain. Isliye early signs – thinning, scalp zyada dikhna, comb mein zyada baal – pe dhyan dena zaroori hai.',
    },
    {
      _key: 'faq12',
      question: 'Kya dandruff se baal jhad jaate hain?',
      answer: 'Haan – severe ya untreated dandruff (seborrheic dermatitis) direct alopecia cause kar sakta hai. Kaise: scalp pe yeast (Malassezia) ki overgrowth se inflammation hoti hai jo follicles ko weaken karti hai. Scratching se bhi roots damage hote hain. Mild dandruff sirf flaking hai – lekin agar scalp red, itchy, aur oily hai to ye seborrheic dermatitis hai jo treatment maangta hai.',
    },
    {
      _key: 'faq13',
      question: 'Kya baal dubara ugenge – ya jo ek baar gaye woh gaye?',
      answer: 'Ye depend karta hai ki follicle alive hai ya nahi. Follicle agar "dormant" hai (still alive, just not active) – to baal wapas aa sakte hain with treatment. Agar follicle "scarred" ho gaya hai (scarring alopecia mein) – to wahan baal permanently nahi aate. Most common cases (alopecia areata, telogen effluvium, androgenetic early stage) mein follicles alive hoti hain – aur sahi treatment se regrowth possible hai. Yahi wajah hai ki early treatment itni zaroori hai. Shiny bald patches + no hair for 5+ years = follicle survival probability kum hoti hai.',
    },
    {
      _key: 'faq14',
      question: 'Kya onion juice se baal wapas aate hain – sach ya myth?',
      answer: 'Ye partly sach hai – ek published study (Journal of Dermatology, 2002) mein alopecia areata patients pe onion juice scalp application ke 4 hafte baad 73% patients mein regrowth nota ki gayi. Onion juice mein sulfur hota hai jo follicle blood flow aur keratin production support karta hai. Isko homeopathic treatment ke complementary mein use kiya ja sakta hai. Lekin sirf onion juice se severe alopecia theek nahi hogi – ye ek supportive tool hai, main treatment nahi. Hafte mein 2-3 baar best hai.',
    },
    {
      _key: 'faq15',
      question: 'Kya homeopathy allopathic medicine ke saath chal sakti hai?',
      answer: 'Haan – zyada tar cases mein homeopathy safely allopathic treatment ke saath chal sakti hai. Ye ek common misconception hai ki dono ek saath nahi chalti. Especially thyroid medication, iron supplements, ya dermatologist-prescribed treatments – in sab ke saath homeopathy complementary role mein dene mein koi problem nahi hoti zyada tar. Apne homoeopath ko poori medication list zaroor batayein – woh aapko best guide karenge.',
    },
    {
      _key: 'faq16',
      question: 'Bacchon mein baal jhadna – kab normal, kab concern?',
      answer: 'Chote bacchon mein (6 mahine tak) thoda baal jhadna normal hai – hormonal adjustment ki wajah se. School-age bacchon mein agar patches ban rahe hain – alopecia areata suspect karein. Teens mein stress, crash dieting, ya PCOS (ladkiyon mein) common causes hain. Kab zaroor doctor – agar patches hain, baal pulling (trichotillomania) suspect ho, ya scalp pe scaly patches (tinea capitis/ringworm) ho – turant consult karein. Bacchon mein homeopathy especially safe hai – no side effects, long-term use possible.',
    },
    {
      _key: 'faq17',
      question: 'Kya yoga se baal jhadna rokne mein madad milti hai?',
      answer: 'Haan – scientific basis hai iske peeche. Specific yoga postures mein inversion (sar neeche jaana) se scalp mein blood circulation badhti hai. Adho mukha svanasana (downward dog), Sarvangasana (shoulder stand), aur Uttanasana scalp ko more blood deliver karte hain. Pranayama (Kapalbhati, Anulom Vilom) stress hormone cortisol kam karta hai jo telogen effluvium mein main culprit hai. Daily 20-30 min yoga – baalon ke liye aur overall health ke liye – ek zero-cost powerful tool hai jo treatment ke saath-saath chalana chahiye.',
    },
    {
      _key: 'faq18',
      question: 'Kya hair transplant ke baad bhi homeopathy helpful hai?',
      answer: 'Haan – hair transplant ke baad homeopathy ek excellent supportive role ada karta hai. Transplant ke baad jo "shock loss" hoti hai (recipient aur donor area mein temporary shedding) usme Arnica, Staphysagria, aur Calendula jaise remedies healing accelerate karte hain. Saath hi jo underlying cause tha – autoimmune, DHT sensitivity – usse address karna transplant ke survival rate improve karta hai. Sirf transplant karna enough nahi hota agar root cause untreated hai – isliye post-transplant homeopathy ek smart choice hai.',
    },
    {
      _key: 'faq19',
      question: 'Kya sunscreen ya cap use karni chahiye bald area pe?',
      answer: 'Bilkul haan – ye bahut zaroor hai. Bald scalp pe koi natural UV protection nahi hoti – aur direct sun exposure se sunburn ho sakta hai, long-term UV damage se follicles further damage ho sakte hain, aur melanoma (skin cancer) risk badhta hai bald scalp pe. SPF 30+ sunscreen bald area pe lagayein jab bhi bahar jaayein. Wide-brim hat ya cap best physical protection hai. Cotton/breathable cap use karein – synthetic mein zyada paseena hota hai.',
    },
    {
      _key: 'faq20',
      question: 'Kya baal oil daily lagana chahiye – coconut, castor, ya bhringraj?',
      answer: 'Daily nahi – hafte mein 2-3 baar best hai. Daily oiling scalp ke pores block kar sakti hai aur dandruff worsen kar sakti hai. Best routine: raat ko oil lagao, subah mild shampoo se wash. Castor oil: richest in ricinoleic acid – circulation + follicle stimulation ke liye best. Coconut oil: protein loss prevention + anti-fungal properties. Bhringraj oil: traditional use mein documented hair regrowth support. Combination bhi use ho sakta hai – 50% coconut + 50% castor mix ek popular aur practical option hai.',
    },
    {
      _key: 'faq21',
      question: 'Androgenetic alopecia (pattern baldness) – kya permanent hota hai?',
      answer: 'Androgenetic alopecia mein DHT hormone hair follicles ko gradually miniaturize karta hai. Agar early stage hai – thinning, hairline receding shuru hua hai – tab homeopathy + nutrition + DHT-blocking foods (pumpkin seeds, green tea, spearmint) se progression slow karna aur kuch reversal possible hai. Advanced baldness mein follicles permanently miniaturized ho chuke hote hain – wahan options limited hote hain. Bottom line: jitna pehle treat karo, utna better. "Wait and watch" is case mein help nahi karta.',
    },
    {
      _key: 'faq22',
      question: 'Alopecia areata ki recurrence kaise rokein?',
      answer: 'Alopecia areata ek autoimmune condition hai – iska matlab ye hai ki triggers pe control rakhhna zaroori hai. Stress management (yoga, meditation, sleep) – most common trigger. Seasonal changes pe extra scalp care. Nutritional support continue rakkhna – zinc, Vitamin D, iron. Homeopathic constitutional treatment – sirf symptoms theek hone pe nahi, kuch aur time tak continue karna chahiye relapse rokne ke liye. CCRH studies mein 9+ mahine ke treatment wale patients mein recurrence rate significantly lower tha.',
    },
    {
      _key: 'faq23',
      question: 'Ghar par baal jhad ne ki test – kab karein, kaise?',
      answer: 'Ek simple "Pull Test" ghar pe kar sakte ho: 60 baal ek jagah se pakdo aur gentle pull do. Agar 6 se zyada aate hain – active hair loss hai (telogen/anagen effluvium). Roz ka count bhi helpful hai: ek din naali mein, takiye pe, aur kaanghte waqt ke baal count karein – consistently 150+ hain to doctor se milein. Ye ghar ka test hai, diagnosis replace nahi karta – lekin doctor ke paas jaane ka decision karne mein help karta hai.',
    },
    {
      _key: 'faq24',
      question: 'Kya tight ponytail ya braid se permanent hair loss hoti hai?',
      answer: 'Haan – agar baar baar kiya jaaye to. Isko Traction Alopecia kehte hain. Hairline pe constant tension se follicles damage hoti hain – pehle temporary, phir permanent. India mein mahilaon mein ye bahut common hai lekin pehchana kam jaata hai. Early sign: hairline pe baby hair ka gayab hona, temples pe thinning. Agar pattern change karo (loose braid, bun low position, alternate styles) to early traction alopecia reverse ho sakta hai. Lekin agar 3-4 saal se chal raha hai aur shiny bald area hai hairline pe – tab follicle survival kum hoti hai.',
    },
    {
      _key: 'faq25',
      question: 'Alopecia mein kaunse tests zaroor karwane chahiye?',
      answer: 'Ek comprehensive hair loss workup mein ye tests hone chahiye: Complete Blood Count (CBC) – anemia check. Serum Ferritin – iron stores (most important, sirf hemoglobin nahi). Thyroid Profile (TSH, Free T3, Free T4). Vitamin D3 (25-OH). Zinc level. DHEA-S aur Free Testosterone (PCOS ya androgenic alopecia mein). ANA (Antinuclear Antibody) – autoimmune basis confirm karne ke liye. Ye tests batate hain ki cause kya hai – aur phir treatment targeted hota hai. Bina tests ke sirf symptomatic treatment karna ek common aur expensive mistake hai.',
    },
  ],
  sources: [
    'CCRH (Central Council for Research in Homoeopathy) | Alopecia Areata Clinical Studies | 2018-2022 | ccrhindia.nic.in',
    'Indian Journal of Research in Homoeopathy | Alopecia Areata: A Multicentric Clinical Study | 2019',
    'Hay IC et al. – Randomized trial of aromatherapy: Successful treatment for alopecia areata | Archives of Dermatology | 1998',
    'Sharquie KE, Al-Obaidi HK – Onion juice in alopecia areata | Journal of Dermatology | 2002',
    'American Academy of Dermatology – Alopecia Areata Overview | aad.org',
    'Lancet GBD Study – Prevalence of skin/hair conditions India | 2021 update',
    'PCOD/PCOS Androgen-related hair loss – Journal of Clinical Endocrinology & Metabolism | 2020',
  ],
  quickFacts: [
    'Alopecia ek autoimmune + hormonal + genetic spectrum condition hai – India mein 2-8% population affected',
    'Androgenetic alopecia: 50%+ mard 50+ saal ki umar mein; Alopecia Areata: 1-2% population; Telogen Effluvium: 40%+ postpartum women',
    'Active treatment 6-12 mahine; Maintenance phase additional 6 mahine recommended',
  ],
  doctorNote: 'Meri clinic mein alopecia areata ke sabse surprising recoveries un patients mein hue hain jinhone consistent treatment ke saath stress management seriously liya – often 3-4 mahine mein patches close hone lagte hain. Sab se bada challenge patients ko ye samjhana hai ki homeopathy mein time lagta hai – jo patience rakhte hain, unhe results milte hain.',
  reviewDate: 'April 2026',
}

async function seed() {
  console.log('🌱 Seeding Alopecia...')
  const result = await client.createOrReplace(doc)
  console.log('✅ Alopecia created/updated:', result._id)
  console.log('🌐 Live at: https://homeopedia.in/diseases/alopecia')
}

seed().catch(console.error)
