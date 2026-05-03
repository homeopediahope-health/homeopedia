import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-varicose-veins',
  _type: 'disease',
  slug: { _type: 'slug', current: 'varicose-veins' },
  title: 'Varicose Veins',
  hindiName: 'Naso Ki Sujan / Phuli Hui Naasein / Vein Sujan',
  category: 'Circulatory',
  seoTitle: 'Varicose Veins Treatment in Hindi | Homeopathy | Homeopedia',
  seoDescription: 'Varicose veins ke causes, types, homeopathic treatment, diet aur leg care – verified info, doctor-reviewed. Paon ki sujan aur dard ka ilaaj jaanein.',
  whatIsIt: `Varicose veins woh condition hai jisme paon ya tangon ki naasein (veins) phool jaati hain, mudi-tedi dikhai deti hain, aur skin ke upar blue ya purple color mein nazar aati hain. Normally veins ka kaam hota hai blood ko heart ki taraf wapas bhejana — lekin jab in naason ke andar ke valves (chhote darwaze) kamzor ho jaate hain, to blood neeche ki taraf ikattha hone lagta hai. Isse veins pe pressure badhta hai, woh stretch ho jaati hain aur swelling aa jaati hai. Ye sirf cosmetic problem nahi hai — agar dhyan na diya jaaye to dard, thakaan, aur serious complications bhi ho sakti hain.`,

  types: [
    {
      _key: 'type1',
      name: 'Trunk Varicose Veins',
      description: 'Ye sabse common aur clearly visible type hai. Tangon ki main veins — Great Saphenous Vein ya Small Saphenous Vein — mein hoti hai. Skin ke upar moti, uthri hui, twisted veins dikhti hain. Dard aur heaviness zyada hoti hai is type mein.',
    },
    {
      _key: 'type2',
      name: 'Reticular Varicose Veins',
      description: 'Ye veins thodi choti hoti hain — blue-green color mein, skin ke neeche flat nazar aati hain. Itni zyada uthri hui nahi hoti lekin discomfort deti hain. Aksar ghutne ke peeche ya tange ke baahi taraf hoti hain.',
    },
    {
      _key: 'type3',
      name: 'Telangiectasia (Spider Veins / Makadijaala Naasein)',
      description: 'Ye sabse choti, web ya star jaisi pattern mein dikhai dene wali veins hain — red, purple ya blue rang mein. Mainly cosmetic concern hai, pain kam hota hai. Face, thigh ya ghutne pe common.',
    },
    {
      _key: 'type4',
      name: 'Pelvic Varicose Veins',
      description: 'Ye pelvic area mein hoti hain — aksar women mein pregnancy ke baad develop hoti hain. Chronic pelvic pain, discomfort ya heavy feeling de sakti hain.',
    },
    {
      _key: 'type5',
      name: 'Vulvar Varicose Veins',
      description: 'Pregnancy ke dauran ya baad mein vulva area mein swollen veins — mostly delivery ke baad theek ho jaati hain lekin kuch cases mein treatment chahiye.',
    },
  ],

  causes: [
    'Weak ya damaged vein valves — jab valves theek se band nahi hote, blood neeche pool hone lagta hai aur pressure se veins phool jaati hain',
    'Prolonged standing ya sitting — jo log ghanton khade rehte hain (teachers, shopkeepers, surgeons) unme blood circulation slow pad jaata hai',
    'Pregnancy — uterus ka pressure pelvic veins pe badhta hai, plus blood volume increase hota hai; hormonal changes bhi vein walls ko relax karte hain',
    'Heredity / Family history — agar parents ya grandparents mein varicose veins thi, to risk significantly zyada hai',
    'Obesity / Excess weight — extra body weight veins pe constant pressure dalta hai, especially lower limb veins pe',
    'Age-related vein wall weakening — umar ke saath vein walls aur valves dono ki elasticity kam hoti jaati hai',
    'Hormonal factors — estrogen aur progesterone vein walls ko soft karte hain; OCP (birth control pills) ya HRT se bhi risk badhta hai',
  ],

  riskFactors: [
    'Mahilayen (Women) — hormonal changes ki wajah se men ke mukable 2-3 guna zyada risk',
    '40+ age group — umar ke saath valve weakness badhti hai',
    'Jo log din bhar khade rehkar kaam karte hain — traffic police, teachers, hospital staff, salon workers',
    'Obese ya overweight individuals — BMI 30 se zyada',
    'Multiple pregnancies wali women — har pregnancy mein veins pe extra strain',
    'Family history wale log — genetic predisposition strong factor hai',
    'Sedentary lifestyle — jo din bhar baithe rehte hain, exercise nahi karte',
    'Tight clothing pehanne ki aadat — groin ya waist pe tight kapde blood flow rokte hain',
  ],

  complications: [
    'Chronic Venous Insufficiency (CVI) — veins itni weak ho jaati hain ki blood properly wapas hi nahi jaata, continuous swelling aur skin damage hoti hai',
    'Venous Ulcers (Khule Zakhm) — ankles ke aaspaas skin breakdown hoti hai, jo heal nahi hote — ye serious medical condition hai, turant treatment chahiye',
    'Superficial Thrombophlebitis — vein mein clot ban jaata hai aur inflammation hoti hai, redness aur pain ke saath',
    'Deep Vein Thrombosis (DVT) — kuch cases mein deeper veins mein clot ban sakta hai jo lung tak ja sakta hai — life-threatening ho sakta hai',
    'Bleeding — bahut phuli hue veins kabhi kabhi skin ke neeche ya bahar se bleed kar sakti hain, especially injury pe',
  ],

  symptomGroups: [
    {
      _key: 'sg1',
      groupName: 'Visible Signs (Jo Dikhai Deta Hai)',
      symptoms: [
        'Tangon mein blue, purple ya green color ki uthri hui, twisted veins',
        'Spider veins — makadijaala jaisi pattern skin pe',
        'Ankle aur paon mein sujan (shaam ko zyada)',
        'Skin ka rang badalna — brownish ya leathery feel',
        'Calf area mein skin tight ya hard feel hona',
      ],
    },
    {
      _key: 'sg2',
      groupName: 'Pain & Discomfort Symptoms (Jo Feel Hota Hai)',
      symptoms: [
        'Tangon mein heaviness ya bhaari bhaari feeling — khaas taur pe shaam ko',
        'Khada rehne ya baithne ke baad burning ya throbbing sensation',
        'Muscle cramps — raat ko zyada, neend todne wale',
        'Restless legs — legs mein kuch crawling ya uncomfortable feeling',
        'Itching (khujli) — varicose vein ke aaspaas skin',
        'Fatigue in legs — thodi der chalne ke baad bhi taangin thak jaati hain',
      ],
    },
    {
      _key: 'sg3',
      groupName: 'Progressive / Advanced Symptoms',
      symptoms: [
        'Ankle ke paas skin ka darkening (hyperpigmentation)',
        'Eczema-like rash veins ke aaspaas (Varicose Eczema)',
        'Atrophie Blanche — white, scarred skin patches ankles ke paas',
        'Lipodermatosclerosis — skin hardening aur tightening lower leg mein',
        'Venous ulcer formation — jo heal nahi hota',
      ],
    },
  ],

  homeopathyNote: `Varicose veins mein homeopathy ka kaam sirf sujan band karna nahi hai — ye vein walls ki lost elasticity ko restore karne, blood circulation improve karne, aur valve function support karne ki koshish karta hai. Homeopathy mein aapki poori picture dekhi jaati hai — kitni der se problem hai, konsi taang zyada affected hai, dard kab badhta hai, aur saath mein kaun si aur takleef hai — is sab ke hisaab se individualized medicine di jaati hai. Is wajah se early to moderate stage ke varicose veins mein homeopathy meaningful improvement dikhaata hai.\n\nCCRH-affiliated clinical observations mein varicose veins ke patients mein pain score, heaviness, aur visible vein engorgement teeno mein improvement dekhi gayi treatment group mein — placebo group ke comparison mein. Recurrence rate treatment group mein kam paayi gayi jo follow-up period mein monitored rahe.\n\nHONEST LIMITATIONS: Large, severely twisted trunk varicose veins mein akele homeopathy sufficient nahi — surgical ya laser treatment (EVLA) zyada effective hai. DVT (Deep Vein Thrombosis) ya venous ulcers mein conventional emergency treatment PEHLE zaroori hai — homeopathy complementary role mein.`,

  medicines: [
    {
      _key: 'med1',
      name: 'Hamamelis Virginica',
      bestFor: 'Jinhein tangon mein bruised, sore feeling ho, veins dard karti hon, aur touch se takleef badhti ho — varicose veins ke saath bleeding tendency bhi ho to.',
      keyIndications: [
        'Jinhein tangon mein bruised',
        'sore feeling ho',
        'veins dard karti hon',
      ],
      hopeReason: 'Hamamelis venous circulation ka ek classic homeopathic remedy hai — ye vein walls ko tone karne aur blood pooling reduce karne mein madadgar maana jaata hai; particularly jab veins tender aur engorged hon.',
    },
    {
      _key: 'med2',
      name: 'Pulsatilla Pratensis',
      bestFor: 'Mostly women patients — jinhein pregnancy ke dauran ya periods ke time varicose veins worse ho jaati hain; legs mein heaviness aur pain jo movement se thoda better ho, open air se acha lage.',
      keyIndications: [
        'Mostly women patients — jinhein pregnancy ke dauran ya periods ke time varicose veins worse ho jaati hain',
        'legs mein heaviness aur pain jo movement se thoda better ho',
        'open air se acha lage.',
      ],
      hopeReason: 'Pulsatilla venous congestion aur hormonal triggers se associated varicose veins ke liye ek widely used remedy hai — especially jab symptoms emotionally sensitive, mild nature ke saath aayein.',
    },
    {
      _key: 'med3',
      name: 'Calcarea Fluorica',
      bestFor: 'Jinhein vein walls ki chronic weakness ho, jo log lamba time khade rehte hain, aur veins hard ya knotty feel hon — tissue nutrition aur elasticity loss ke cases mein.',
      keyIndications: [
        'Jinhein vein walls ki chronic weakness ho',
        'jo log lamba time khade rehte hain',
        'aur veins hard ya knotty feel hon — tissue nutrition aur elasticity loss ke cases mein.',
      ],
      hopeReason: 'Calcarea Fluorica connective tissue aur vein wall strength ke liye ek important tissue salt hai — chronic venous insufficiency aur hardening tendency wale cases mein iska use classic hai.',
    },
    {
      _key: 'med4',
      name: 'Carbo Vegetabilis',
      bestFor: 'Jinhein legs mein extreme heaviness aur bluish discoloration ho, circulation very sluggish lage, aur varicose veins ke saath general weakness bhi ho — elderly patients ya debilitated state mein.',
      keyIndications: [
        'Jinhein legs mein extreme heaviness aur bluish discoloration ho',
        'circulation very sluggish lage',
        'aur varicose veins ke saath general weakness bhi ho — elderly patients ya debilitated state mein.',
      ],
      hopeReason: 'Carbo Veg venous stasis aur oxygen deficiency ke saath associated complaints ke liye indicated hai — jab legs cold, bluish, aur engorged veins ke saath zyada distress ho.',
    },
    {
      _key: 'med5',
      name: 'Vipera Berus',
      bestFor: 'Jinhein leg neeche latkane pe unbearable dard ho aur upar uthane pe relief mile — varicose veins mein severe pain aur swelling ke cases mein.',
      keyIndications: [
        'Jinhein leg neeche latkane pe unbearable dard ho aur upar uthane pe relief mile — varicose veins mein severe pain aur swelling ke cases mein.',
      ],
      hopeReason: 'Vipera is specifically indicated for varicose veins with intense bursting pain — jab patient legs neeche hang karne se hi dard feel kare, ye symptom picture is remedy ke liye characteristic hai.',
    },
  ],

  dietInclude: [
    {
      _key: 'di1',
      category: 'Vein-Strengthening Foods',
      items: [
        'Blueberries, jamun, angoor (dark) — flavonoids se bharpoor jo vein wall ko strong karte hain aur inflammation kam karte hain',
        'Amla (Indian Gooseberry) — Vitamin C ka powerhouse jo collagen production support karta hai, veins ki elasticity ke liye zaroori',
        'Cherries aur strawberries — anthocyanins se bhari jo capillary fragility kam karti hain',
        'Citrus fruits (mosambi, orange, nimbu) — bioflavonoids jo vein tone improve karte hain',
      ],
    },
    {
      _key: 'di2',
      category: 'Anti-Inflammatory & Circulation Foods',
      items: [
        'Lehsun (Garlic) — blood thinning effect aur circulation improve karta hai, clot risk kam karta hai',
        'Adrak (Ginger) — anti-inflammatory, blood viscosity reduce karta hai',
        'Haldi (Turmeric) — curcumin venous inflammation aur pain dono mein helpful',
        'Palak, methi, broccoli — Vitamin K aur magnesium se bhari, healthy blood flow support karte hain',
      ],
    },
    {
      _key: 'di3',
      category: 'Hydration & Fiber',
      items: [
        'Pani — din mein 8-10 glass; dehydration blood ko thick karta hai aur circulation slow karta hai',
        'Oats, daliya, whole wheat — fiber se bharpur jo constipation rokta hai; pushing during constipation veins pe pressure dalta hai',
        'Moong, masoor dal — plant protein jo tissue repair mein help karta hai',
        'Coconut water — natural electrolytes jo leg cramps aur muscle fatigue mein helpful',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'Salt & Processed Foods',
      items: [
        'Namak zyada — sodium water retention badhata hai, paon aur ankles ki sujan worse hoti hai',
        'Packaged chips, namkeen, instant noodles — sodium overload',
        'Pickles aur papad zyada — preservation mein excessive salt',
      ],
    },
    {
      _key: 'da2',
      category: 'Junk Food & Fried Items',
      items: [
        'Maida products (bread, biscuits, bakery) — refined carbs circulation slow karte hain aur weight gain promote karte hain',
        'Fried food, fast food — trans fats blood viscosity badhate hain aur vein walls ko weak karte hain',
        'Excess sugar, mithai, cold drinks — inflammation badhti hai, weight badhta hai jo veins pe pressure dalta hai',
      ],
    },
    {
      _key: 'da3',
      category: 'Circulation Inhibitors',
      items: [
        'Alcohol zyada — veins dilate karta hai aur blood pooling worse karta hai',
        'Caffeine excess (3+ cups chai/coffee) — dehydration aur vein constriction',
        'Red meat zyada — saturated fat blood flow impair karta hai',
      ],
    },
  ],

  dos: [
    'Compression stockings ya socks pehno — doctor ki salaah se sahi pressure class chunein; ye blood ko upar push karne mein help karta hai aur symptoms significantly kam karta hai',
    'Legs upar karke baitho ya soyo — deewar ke saath ya pillow pe — raat ko ya rest time pe; gravity se blood wapas heart jaata hai',
    'Regular walking karo — din mein 30 minute; calf muscles pump ki tarah kaam karti hain aur venous return improve hoti hai',
    'Leg exercises karo — ankle rotation, calf raises, cycling in air — even chair pe baithe baithe',
    'Weight manage karo — healthy BMI maintain karna veins pe pressure kam karta hai; ek kg bhi kam hona helpful hai',
    'Loose, breathable clothing pehno — especially lower body mein; tight jeans ya leggings avoid karo',
    'Regular homeopathic follow-up karo — treatment ka full course lena zaroori hai; beech mein band karne se progress ruk jaati hai',
    'Skin moisturise karo — varicose veins ke aaspaas dry skin eczema aur ulcer risk badhati hai',
  ],

  donts: [
    'Ghanton khade ya baithe mat raho bina movement ke — har 30-45 minute mein chhota walk ya ankle movement karo; blood pooling ka sabse bada cause ye hai',
    'Tight clothing mat pehno — tight belt, tight jeans, knee-high tight socks — ye blood flow restrict karte hain',
    'High heels mat pehno regularly — flat ya slight heel footwear better hai; heels calf muscle pump ko reduce karti hain',
    'Hot baths ya sauna avoid karo — extreme heat veins ko dilate karta hai aur symptoms worse karta hai (warm water theek hai, hot water nahi)',
    'Varicose veins ko khud mat dabaao ya scratch karo — infection aur bleeding ka risk',
    'Constipation ignore mat karo — straining during bowel movement veins pe pressure badhata hai; high fiber diet aur pani zaroori hai',
    'Smoking mat karo — nicotine blood vessels damage karta hai aur circulation seriously impair karta hai',
    'Self-medication se potent blood thinners mat lo — doctor advice ke bina aspirin ya supplements bhi risk ho sakta hai',
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Varicose veins ka permanent ilaaj kya hai?',
      answer: 'Varicose veins ka permanent ilaaj possible hai — options mein homeopathy, compression therapy, laser treatment (EVLA), sclerotherapy, aur surgery shamil hain. Early stage mein homeopathy aur compression stockings se significant control milta hai aur disease progression ruki rehti hai. Moderate-severe cases mein minimally invasive laser treatment ya sclerotherapy kafi effective hoti hai aur recurrence bhi kam hoti hai. Koi bhi method chunein — lifestyle changes (walking, weight control, leg elevation) ke bina sirf treatment se long-term results nahi milte. Ek qualified doctor se evaluation karwaayein jo aapki veins ki stage ke hisaab se best option suggest karein.',
    },
    {
      _key: 'faq2',
      question: 'Varicose veins mein konsi exercise best hai?',
      answer: 'Walking varicose veins ke liye sabse best exercise hai — din mein 30 minute ki brisk walk calf muscles ko activate karti hai jo veins se blood pump karne ka kaam karti hain. Uske alawa: ankle circles (chair pe baithe baithe), calf raises (khade hokar uthna-baithna), swimming (excellent — koi pressure nahi), aur cycling (actual ya stationary dono). Ek cheez yaad rahe — high-impact exercises jisme zyada jumping ho initially avoid karo — ye veins pe extra pressure daalte hain. Yoga mein "legs up the wall" pose (Viparita Karani) specifically varicose veins ke liye bahut helpful hai.',
    },
    {
      _key: 'faq3',
      question: 'Kya varicose veins mein compression stockings zaroori hain?',
      answer: 'Haan — compression stockings varicose veins treatment ka ek foundational part hain aur doctor aksar pehla step isiliye recommend karte hain. Ye specially designed stockings ankles pe zyada pressure daalti hain aur gradually upar jaake kam hoti hain — is se blood ko heart ki taraf push karne mein help milti hai. Din bhar pehno — subah uthte hi, leg upar karte waqt pehno aur sone se pehle utaaro. Market mein different compression classes hain (Class 1, 2, 3) — doctor ki advice ke bina zyada tight na lo. Regular stockings se approximately 6-8 ghante tak relief rahta hai aur swelling bhi kam hoti hai.',
    },
    {
      _key: 'faq4',
      question: 'Varicose veins pregnancy mein kya karna chahiye?',
      answer: 'Pregnancy mein varicose veins common hai — especially second aur third trimester mein. Zyada ghabraane ki zaroorat nahi — delivery ke baad 3-4 months mein aksar khud better ho jaati hain. Iss waqt safe options hain: maternity compression stockings, left side pe letna, zyada time legs upar rakhna, gentle walking, aur cold water splash. Strong medicines avoid karo. Homeopathy is time ek safe option hai — Pulsatilla aur Hamamelis jaise remedies pregnancy-safe hain. Agar bohot dard ho ya ek leg mein achanak sujan aaye to turant doctor ko dikhao — DVT risk hota hai pregnancy mein.',
    },
    {
      _key: 'faq5',
      question: 'Kya varicose veins surgery ke bina theek ho sakti hain?',
      answer: 'Early to moderate stage mein varicose veins surgery ke bina significant improvement possible hai. Compression therapy, regular exercise, weight management, aur homeopathic treatment — ye combination early stage cases mein disease progression rokne aur symptoms substantially kam karne mein effective hai. Key baat ye hai ki "surgery ke bina" approach tabhi kaam karta hai jab consistently follow kiya jaaye — akeli medicine ya sirf stocking se nahi, sab saath mein karna padta hai.',
    },
    {
      _key: 'faq6',
      question: 'Varicose veins mein laser treatment ya homeopathy — kya choose karein?',
      answer: 'Dono ke apne apne roles hain — ye competition nahi, complementary approaches hain. Laser treatment (EVLA) ya sclerotherapy physically visible, large veins ko close karti hai — quick, effective, minimally invasive. Homeopathy underlying vein wall weakness, circulation improvement, aur recurrence prevention pe kaam karta hai. Agar veins bahut badi aur symptomatic hain — laser ya sclerotherapy pehle karao. Uske baad homeopathic constitutional treatment recurrence rokne mein help karta hai. Early stage ya spider veins mein akele homeopathy + compression achhe results de sakti hai.',
    },
    {
      _key: 'faq7',
      question: 'Varicose veins mein paon mein dard ka kya ilaaj hai?',
      answer: 'Paon ka dard varicose veins ka ek major symptom hai. Turant relief ke liye: legs upar uthao, cold compress ankles pe, compression stocking pehno. Homeopathic medicines — Hamamelis, Vipera, Pulsatilla — venous pain mein specifically effective hain aur side effects practically nahi. Pain killers short term mein le sakte ho lekin ye root cause treat nahi karte. Raat ko cramps ke liye: magnesium-rich foods (banana, nuts), calf stretching before sleep. Agar dard achanak bahut zyada ho, ek taang mein aur warmth ke saath aaye — DVT rule out karne ke liye immediately doctor ke paas jaao.',
    },
    {
      _key: 'faq8',
      question: 'Varicose veins aur DVT mein kya fark hai?',
      answer: 'Ye dono alag conditions hain. Varicose veins superficial veins mein hoti hain — visible, phuli hui, twisted. DVT (Deep Vein Thrombosis) deeper veins mein blood clot hai — ye aksar dikhti nahi lekin bahut dangerous hai. DVT ke warning signs: ek taang mein achanak bahut dard + sujan + laal rang + warmth — aur agar clot lung mein pahunch jaaye to chest pain + saans takleef. DVT kabhi kabhi varicose veins ki complication ke taur pe develop ho sakti hai. Isliye jab bhi ek taang mein achanak aur asymmetric changes ho — emergency room jaao, delay mat karo.',
    },
    {
      _key: 'faq9',
      question: 'Varicose veins ke liye ghar pe kya kar sakte hain?',
      answer: 'Ghar pe ye karo — subah uthte hi compression stocking pehno, din mein 2-3 baar 10 minute ke liye legs upar karo, din mein 20-30 minute walk karo, raat ko calf massage karo (ankles se upar ki taraf — gentle), cold water splash karo legs pe, aur pani zyada piyo. Diet mein: berries, amla, citrus, garlic, ginger add karo — ye natural vein-supportive foods hain. Witch Hazel (Hamamelis ka botanical source) topically varicose veins pe laga sakte ho, swelling aur discomfort mein relief milti hai. In sab ke saath professional treatment jaari rakhna zaroor hai.',
    },
    {
      _key: 'faq10',
      question: 'Varicose veins kitni jaldi badh sakti hain?',
      answer: 'Varicose veins ki progression slow hoti hai lekin consistent hoti hai agar koi step nahi liya. Mild symptoms aane ke baad bina treatment ke usually 2-5 saal mein moderate stage aati hai, aur 5-10+ saal mein severe complications (ulcers, thrombosis) possible hain. Progression speed depend karti hai: kitna time khade rehte ho, weight, pregnancy, genetic factors pe. Jo log early stage mein hi compression therapy aur exercise shuru kar dete hain unme progression significantly ruk jaati ya slow ho jaati hai. "Abhi dard nahi, baad mein dekhenge" — ye sochna galat hai; early intervention bahut better outcomes deta hai.',
    },
    {
      _key: 'faq11',
      question: 'Kya varicose veins mein koi ayurvedic ya ghar ka nuskha kaam karta hai?',
      answer: 'Kuch ghar ke nuskhe supportive role mein helpful hain — lekin akele kafi nahi. Jo faydemand hain: Apple Cider Vinegar (diluted) leg pe lagana — mild anti-inflammatory; Witch Hazel (Hamamelis ka botanical source) — topically varicose veins pe laga sakte ho; Horse Chestnut extract (Aesculus) — research-backed, veins ki tone improve karta hai. Garam sarson ka tel se massage avoid karo — heat veins dilate karti hai aur worse ho sakti hai. Coconut oil ya calendula oil gentley apply karna safer hai. Ye nuskhe adjuncts hain, primary treatment ki jagah nahi le sakte.',
    },
    {
      _key: 'faq12',
      question: 'Varicose veins mein konsi homeopathic medicine best hai?',
      answer: '"Best" ek hi medicine nahi hoti — homeopathy mein medicine symptoms ke pattern ke hisaab se choose hoti hai. Agar dard bursting/sore type ka ho to Hamamelis; agar legs mein bhaaripan ho aur hormonal link ho to Pulsatilla; agar chronic weakness aur vein walls hard feel hon to Calcarea Fluorica; agar extreme bluishness aur circulation bahut slow lage to Carbo Vegetabilis; agar legs neeche hang karne se unbearable dard ho to Vipera. Ye sirf general guide hai — qualified homoeopath aapki poori history dekhke individual remedy select karta hai. Khud se potency fix karke mat lo.',
    },
    {
      _key: 'faq13',
      question: 'Varicose veins mein khana kya khayein aur kya nahi?',
      answer: 'Khaayein: berries, amla, citrus fruits — ye bioflavonoids dete hain jo vein walls strengthen karti hain. Garlic, ginger, haldi — circulation improve karte hain. Pani 8-10 glass — blood thin rakhna zaroori hai. High fiber (oats, dals, sabzi) — constipation se bachne ke liye. Avoid karein: namak zyada (water retention aur sujan), maida products, fried food, alcohol, aur caffeine zyada. Processed meats aur red meat bhi limit karo. Diet se veins theek nahi hoti lekin symptoms significantly manageable hoti hain aur progression slow hoti hai.',
    },
    {
      _key: 'faq14',
      question: 'Kya high heels pehenna varicose veins ke liye nuksaandeh hai?',
      answer: 'Haan — regular high heels wearing varicose veins ko definitely worse karta hai. Calf muscles ek natural pump ka kaam karti hain jo veins se blood wapas heart tak push karti hain — jab aap high heels pehante ho to ye muscle pump properly activate nahi hota aur blood neeche pool hone lagta hai. Occasional wearing (1-2 ghante ek baar) manageable hai lekin daily wear avoid karo. Best footwear: flat ya 1-inch heel, comfortable sole, ankle support wale shoes.',
    },
    {
      _key: 'faq15',
      question: 'Varicose veins mein swimming safe hai?',
      answer: 'Swimming varicose veins ke liye best exercises mein se ek hai — actually recommended hai. Paani ka pressure ek natural compression ka kaam karta hai jo circulation improve karta hai. Swimming mein calf muscles bhi active rehti hain lekin weight-bearing nahi hota — to veins pe stress nahi. Pani thanda ho to aur bhi better — veins constrict hoti hain aur blood flow improve hota hai. Week mein 3-4 baar 30 minute swimming significant improvement de sakti hai symptoms mein.',
    },
    {
      _key: 'faq16',
      question: 'Varicose veins kya wapas aa sakti hain treatment ke baad?',
      answer: 'Treated veins (laser ya sclerotherapy se) wapas nahi aati — kyunki woh close ho jaati hain. Lekin varicose veins ki underlying tendency — weak vein valves aur genetic predisposition — treat nahi hoti, isliye NEW veins affected ho sakti hain waqt ke saath. Recurrence rate surgery ke baad 5-7 saal mein roughly 20-30% hoti hai. Recurrence rokne ke liye: lifestyle changes maintain karo aur homeopathic constitutional treatment post-procedure bhi jaari rakho jo underlying vein wall weakness address karta hai.',
    },
    {
      _key: 'faq17',
      question: 'Kya varicose veins pain ke bina bhi dangerous ho sakti hain?',
      answer: 'Haan — aur ye ek common myth hai ki "dard nahi to theek hai." Varicose veins pain ke bina bhi complications develop kar sakti hain — especially skin changes (darkening, eczema), superficial thrombophlebitis, aur gradually venous ulcers. Kuch patients mein DVT bhi bina obvious symptoms ke ho sakti hai. Iska matlab ye hai ki agar aapko visible varicose veins hain — chahe dard ho ya na ho — ek vascular doctor ya physician se ek baar evaluation karwaana chahiye. Doppler ultrasound se pata chalta hai ki veins ke andar blood flow kaisa hai.',
    },
    {
      _key: 'faq18',
      question: 'Varicose veins mein Doppler test kyun karwate hain?',
      answer: 'Doppler Ultrasound varicose veins ka sabse important diagnostic test hai. Is test mein doctor dekh sakte hain: veins mein blood kis direction mein ja raha hai, valves sahi kaam kar rahe hain ya nahi, koi clot (DVT) to nahi, aur agar surgery ya laser ki zaroorat hai to treatment planning ke liye mapping. Test dardnaa nahi hota — ek gel lagake probe se scan karte hain. Iska kharcha typically 500-1500 rupaye range mein hota hai. Har varicose veins patient mein zaroori nahi — doctor suggest karein to zaroor karwaayein.',
    },
    {
      _key: 'faq19',
      question: 'Varicose veins mein konsa yoga karna chahiye?',
      answer: 'Yoga varicose veins ke liye excellent hai. Best poses: Viparita Karani (Legs Up the Wall) — best pose for varicose veins, 10-15 minute daily karo; Setu Bandhasana (Bridge Pose) — lower body circulation improve karta hai; Tadasana (Mountain Pose) — balance aur calf activation; Pavanmuktasana (Wind-Relieving Pose) — pelvic circulation ke liye; Anulom-Vilom pranayama — overall circulation. Avoid karo: poses jisme legs neeche fold ho aur pressure pad raha ho. Yoga instructor ko pehle bataao ki varicose veins hain — woh accordingly modify karenge.',
    },
    {
      _key: 'faq20',
      question: 'Kya weight lose karne se varicose veins mein fark padta hai?',
      answer: 'Bilkul padta hai — aur ye ek most impactful lifestyle change hai. Extra body weight — especially abdominal obesity — pelvic veins pe continuous pressure daalti hai. Studies mein paya gaya hai ki 5-10% weight loss bhi lower limb heaviness, swelling, aur pain mein noticeable improvement deta hai. Iska matlab ye nahi ki weight lose ho to veins normal ho jaayengi — damaged valves naturally repair nahi hote. Lekin new veins affect hone ka risk kam hota hai aur compression therapy bhi zyada effective hoti hai. Gradual weight loss 0.5-1 kg per week — crash dieting nahi.',
    },
    {
      _key: 'faq21',
      question: 'Varicose veins mein raat ko dard kyon badhta hai?',
      answer: 'Raat ko varicose veins ka dard ya restless leg feeling badhna common complaint hai. Iske kuch karan hain: din bhar blood pool hone ke baad veins stretch aur engorged hoti hain — raat tak ye cumulative effect hota hai; horizontal position mein blood redistribution hoti hai; neend mein movement nahi hoti to calf pump inactive hota hai; aur dehydration se blood thoda thick hota hai. Solutions: sone se pehle 15 minute legs elevated rakhein, calf stretch karo, magnesium-rich dinner (banana, nuts, dal), pani piyo, aur cold compress ankles pe.',
    },
    {
      _key: 'faq22',
      question: 'Varicose veins mein job pe kaise dhyan rakhen jo ghanton ki khadi rehne wali ho?',
      answer: 'Standing jobs (teachers, retail workers, surgeons, police) mein varicose veins ka risk aur symptoms dono zyada hote hain. In tips ko daily follow karo: Grade 1 compression stockings subah ghar se nikalne se pehle pehno; har 30-40 minute mein 2-3 minute chhoti walk ya ankle rotation karo; anti-fatigue mat use karo; weight ek leg se doosre leg pe shift karte raho; lunch break mein zaroor baitho aur legs stretch karo; ghar aake 10 minute legs upar karo; raat ko cold water splash. Comfortable, supportive shoes — heels nahi.',
    },
    {
      _key: 'faq24',
      question: 'Varicose veins ka ilaaj na karein to kya hoga?',
      answer: 'Untreated varicose veins gradually worse hoti hain. Timeline roughly ye hai: First stage — cosmetic concern, thodi heaviness. 2-3 saal — ankle swelling, significant pain, skin changes shuru. 5+ saal — chronic venous insufficiency, skin hyperpigmentation, eczema. 10+ saal mein severe cases mein — venous ulcers (khule zakhm) jo heal nahi karte, infection, aur DVT risk. Ek baar venous ulcer ho jaaye to treatment much longer aur difficult hoti hai. Isliye "baad mein dekhenge" actually future treatment cost aur difficulty dono badhata hai. Early intervention always better outcomes deta hai.',
    },
    {
      _key: 'faq25',
      question: 'Varicose veins ki homeopathic treatment mein kitna waqt lagta hai?',
      answer: 'Honest answer ye hai — depends on stage aur individual response. Early stage (mild spider veins ya small varicose veins, symptoms kam): 3-4 mahine mein significant improvement — pain, heaviness, aur swelling mein noticeable change. Moderate stage (clearly visible veins, regular discomfort): 6-9 mahine ka course; aur phir maintenance dose. Advanced stage ya chronic cases: 12+ mahine, aur conventional treatment ke saath parallel lena better. Homeopathy mein improvement gradual hota hai — ek dum se overnight result nahi milta. Jo log consistent rehte hain — medicine bhi aur lifestyle bhi — unhe sustained long-term results milte hain.',
    },
  ],

  sources: [
    { _key: 's1', text: 'CCRH (Council for Research in Homoeopathy) — Venous Disorders Clinical Observations', url: 'https://ccrhindia.nic.in', year: '2018-2022' },
    { _key: 's2', text: 'Indian Journal of Research in Homoeopathy — Venous Disorders Studies', url: '', year: '2020' },
    { _key: 's3', text: 'National Heart, Lung, and Blood Institute (NHLBI) — Varicose Veins', url: 'https://www.nhlbi.nih.gov', year: '2023' },
    { _key: 's4', text: 'Journal of Vascular Surgery — Varicose Veins Epidemiology India', url: '', year: '2019' },
    { _key: 's5', text: 'European Venous Forum — Guidelines for Management of Chronic Venous Disease', url: '', year: '2022' },
    { _key: 's6', text: 'Cochrane Review — Compression Therapy for Varicose Veins', url: '', year: '2021' },
  ],

  quickFacts: [
    'Varicose veins ek chronic venous disorder hai jisme leg veins ke valves weak ho jaate hain aur blood neeche pool hone lagta hai',
    'India mein approximately 10-15% adults mein varicose veins hai — standing occupation wale logon mein ye 25-30% tak ho sakta hai',
    'Early stage homeopathic treatment: 3-6 mahine; Laser/Sclerotherapy: 1-3 sittings; Surgical stripping: ek procedure',
  ],

  doctorNote: 'Hamari practice mein varicose veins ke jo patients Hamamelis aur Calcarea Fluorica pe consistent treatment karte hain unme 4-6 mahine mein leg heaviness aur swelling mein clearly measurable improvement aati hai — khaas taur pe wo patients jinmein surgical intervention abhi indicated nahi tha. Compression stockings saath mein consistently pehnaana results aur double karta hai.',

  reviewDate: 'April 2026',
}

async function seed() {
  console.log('🌱 Seeding Varicose Veins...')
  const result = await client.createOrReplace(doc)
  console.log('✅ Varicose Veins created/updated:', result._id)
  console.log('🌐 Live at: https://homeopedia.in/diseases/varicose-veins')
}

seed().catch(console.error)
