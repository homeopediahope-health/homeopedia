import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-post-covid-syndrome',
  _type: 'disease',
  title: 'Post-COVID Syndrome / Long COVID',
  hindiName: 'Post-Corona Thakaan Rog / Long COVID',
  slug: { _type: 'slug', current: 'post-covid-syndrome' },
  category: 'Respiratory',
  publishedAt: '2026-05-04T00:00:00.000Z',
  metaTitle: 'Post-COVID Syndrome Treatment in Hindi | Long COVID Recovery | Homeopedia',
  metaDescription: 'Post-COVID fatigue, brain fog, breathlessness ka homeopathic treatment – verified info, doctor-reviewed. Long COVID se recovery kaise karein.',

  heroText: 'Post-COVID Syndrome – jise Long COVID bhi kehte hain – woh condition hai jisme COVID-19 infection theek ho jaane ke baad bhi, 4 hafte ya usse zyada time tak symptoms rehte hain ya naye symptoms aane lagte hain. Iska matlab ye nahi ki virus abhi bhi body mein hai – balki COVID ke baad immune system aur nervous system mein jo changes aaye hain, unka asar continue karta hai. India mein COVID recover karne waale lakho log is problem se guzar rahe hain – kuch ko sirf thakaan hoti hai, kuch ko saanch lene mein takleef, kuch ko yaaddasht aur concentration ki problem. Ye symptoms serious nahi lagte lekin daily life aur kaam pe gehri asar daalta hai. Sahi treatment, rest, aur nutrition se recovery bilkul possible hai.',

  quickFacts: {
    whatItIs: 'COVID-19 theek hone ke 4+ hafte baad bhi symptoms rehna; immune system aur nervous system dysregulation se; WHO-recognized medical condition hai',
    howCommon: 'India mein COVID recover hue logon mein lagbhag 15-20% log Post-COVID symptoms report karte hain – millions of people affected',
    treatmentDuration: '3-6 mahine (severity ke hisaab se); early treatment (pehle 3 mahine mein) shuru karne waale 40-50% faster recover karte hain',
    successRate: 'Majority (70-80%) patients sahi treatment se 6-12 mahine mein significant ya complete recovery karte hain; CCRH study mein fatigue score aur sleep quality mein meaningful improvement',
  },

  causes: [
    'COVID-19 ke baad immune system dysregulation – body khud ke tissues ke against mildly react karne lagti hai (autoimmune-like response)',
    'Nervous system inflammation (neuroinflammation) – brain aur nerves pe COVID ka direct ya indirect asar jo brain fog aur mood changes cause karta hai',
    'Mitochondrial dysfunction – body ki energy production cells (mitochondria) ka sahi kaam na karna, isliye extreme thakaan jo rest se nahi jaati',
    'Gut microbiome imbalance – COVID gut bacteria ko affect karta hai jo immunity aur mood dono pe asar daalta hai',
    'Persistent viral reservoirs – kuch researchers mante hain virus ke traces body ke kuch parts mein reh jaate hain (ongoing research hai)',
    'Vascular (blood vessel) damage – COVID se micro-clots ya inflammation jo oxygen supply ko affect karta hai',
  ],

  riskFactors: [
    'Jo log COVID mein moderate-to-severe ill the (hospitalization waale) – zyada organ involvement mein Long COVID risk zyada',
    '40 saal se upar ki umar – immune recovery slow hoti hai; body ko rebalance karne mein zyada time lagta hai',
    'Women – research suggest karti hai female hormones aur immune response ka connection Long COVID risk badhata hai',
    'Pre-existing conditions waale: diabetes, thyroid, autoimmune disease – pehle se dysregulated immune system aur vulnerable hoti hai',
    'Jo log COVID mein steroids ya multiple medicines le chuke hain – gut flora aur immune modulation affected hoti hai',
    'Jo log recovery ke baad bahut jaldi kaam ya exercise pe wapas gaye – rest period properly nahi liya to recovery incomplete rehti hai',
  ],

  complications: [
    'Chronic Fatigue Syndrome (ME/CFS) mein convert ho sakta hai – ek long-term debilitating condition jo kaam karne ki ability permanently affect kar sakti hai',
    'Mental health complications – depression, anxiety disorder permanent ho sakti hai agar early treatment na mile',
    'Cardiac complications – undetected heart inflammation age ke saath zyada problem create kar sakti hai',
    'Work disability – kaafi Long COVID patients kaam pe wapas nahi ja paate bina proper treatment ke; income aur career hit hoti hai',
    'Quality of life severe impact – relationships, social life, daily functioning sab affect hota hai',
  ],

  types: [
    {
      _key: 'type1',
      name: 'Fatigue-Dominant Long COVID',
      description: 'Sabse common type. COVID ke baad extreme thakaan jo rest karne ke baad bhi nahi jaati. Seedha seedha Post-Exertional Malaise (PEM) kehte hain isko – matlab thodi bhi mehnat se symptoms zyada bad jaate hain. Aksar ME/CFS (Chronic Fatigue Syndrome) jaise symptoms hote hain. Kise zyada: Ghar par kaam karne waali mahilayein, 40+ umar ke log.',
    },
    {
      _key: 'type2',
      name: 'Respiratory Long COVID',
      description: 'COVID ke baad bhi saanch lene mein takleef, seene mein bhaari pan, khaansi. Aksar oxygen level normal hoti hai lekin feeling aise jaisi nahi. Pulmonologist aur homeopathy dono ki zaroorat hoti hai. Kise zyada: Jo log COVID mein severe pneumonia se guzre hain.',
    },
    {
      _key: 'type3',
      name: 'Neurological Long COVID (Brain Fog)',
      description: 'Yaaddasht kamzor, concentrate nahi ho paata, words bhool jaana, sochne mein takleef – isko "Brain Fog" kehte hain. Aksar anxiety aur depression bhi saath mein aata hai. Kise zyada: Young professionals, students.',
    },
    {
      _key: 'type4',
      name: 'Cardiac Long COVID',
      description: 'Dil ki dhadkan fast ya irregular feel honi (Palpitations), seene mein dard, thodi si chehlein pe bhi dil ka tez dhadakna. Cardiologist evaluation zaroori hai is type mein. Kise zyada: Jin logon ko COVID mein bhi cardiac involvement tha.',
    },
    {
      _key: 'type5',
      name: 'Multisystem Long COVID',
      description: 'Upar ke saare ya kaafi symptoms ek saath hain. Ye sabse challenging type hai aur integrated treatment (homeopathy + specialist) sabse effective hai.',
    },
  ],

  symptoms: [
    {
      _key: 'grp1',
      category: 'Energy & Fatigue Symptoms (Thakaan aur Kamzori)',
      items: [
        'Extreme tiredness jo raat bhar sone ke baad bhi nahi jaati',
        'Thodi bhi physical activity se symptoms zyada ho jaana (PEM – Post-Exertional Malaise)',
        'Subah uthne mein bahut takleef, body bhaari feel hona',
        'Kaam ya conversation ke baad bhi thakaan',
        'Muscles mein dard aur weakness',
      ],
    },
    {
      _key: 'grp2',
      category: 'Neurological Symptoms (Dimag aur Neend)',
      items: [
        'Brain Fog – concentration, memory aur word-finding mein problem',
        'Neend mein gadbad – ya to neend hi nahi aati ya bahut zyada',
        'Sar dard jo painkiller se kam nahi hota',
        'Anxiety, irritability, mood swings',
        'Tingling ya numbness (haath-pair mein)',
      ],
    },
    {
      _key: 'grp3',
      category: 'Respiratory & Cardiac Symptoms (Saanch aur Dil)',
      items: [
        'Saanch lene mein takleef ya shortness of breath bina mehnat ke',
        'Seene mein bhaari pan ya mild dard',
        'Dil ki tez ya irregular dhadkan (palpitations) achanak',
        'Khaansi jo COVID ke baad bhi baaki hai',
        'Oxygen level thodi giraawat (pulse oximeter se check karein)',
      ],
    },
    {
      _key: 'grp4',
      category: 'Digestive & Other Symptoms',
      items: [
        'Appetite kam hona ya taste/smell abhi bhi sahi nahi',
        'Stomach mein gadbad – loose motions ya constipation',
        'Hair fall jo COVID ke 2-3 mahine baad shuru ho',
        'Skin rashes ya itching (kuch patients mein)',
        'Joints mein dard',
      ],
    },
  ],

  ccrhEvidence: {
    improvementRate: '68% (brain fog improvement); fatigue score FSS 6.2 se 3.8 pe aaya',
    avgTreatmentPeriod: '3 se 6 mahine',
    citation: 'CCRH Post-COVID Study | 2021-2022 | Journal of Evidence-Based Integrative Medicine | European Journal of Integrative Medicine 2023',
  },

  homeopathyBenefits: [
    'Post-COVID Syndrome ek "multi-system" problem hai – matlab isme ek system nahi, poori body ka balance bigda hua hai. Homeopathy ki khaas baat ye hai ki ye ek akela medicine nahi deta – aapki poori picture dekhi jaati hai: kaisi thakaan hai, neend kaisi hai, mood kaisa hai, aur COVID se pehle aap kaaise the – sab matter karta hai. Is individualized approach se body ko apni natural recovery mein help milti hai.',
    'Fatigue ka root cause address karta hai – sirf stimulant nahi deta; mitochondrial dysfunction aur immune dysregulation dono pe kaam karta hai',
    'Anxiety aur brain fog dono ek saath treat ho sakte hain – alag alag medicines nahi leni; nervous system stabilization ek saath hota hai',
    'Long-term use safe hai – steroid ya immunosuppressant ke side effects nahi; body pe koi extra load nahi',
    'Gut health bhi support hota hai jo COVID ke baad disturbed rehti hai – microbiome recovery mein help',
    'Sleep normalization naturally hoti hai – sedative dependency nahi; body ki natural sleep cycle restore hoti hai',
  ],

  medicines: [
    {
      _key: 'med1',
      name: 'Arsenicum Album',
      bestFor: 'Jo log COVID ke baad extreme weakness, anxiety aur restlessness se guzar rahe hain – raat ko zyada takleef, saanch lene mein bhi takleef. Post-viral exhaustion type patients.',
      keyIndications: [
        'Extreme restlessness ke saath thakaan – uthne ki koshish karte hain lekin lete rehna padta hai',
        'Raat 12-2 baje symptoms zyada badh jaate hain – sleep disturbed',
        'Saanch lene mein takleef saath mein burning sensation – respiratory lingering type',
      ],
    },
    {
      _key: 'med2',
      name: 'Gelsemium Sempervirens',
      bestFor: 'Jab extreme fatigue aisa ho ki legs bhaari lagein, uthne ka mann hi nahi kare, neend zyada aaye, aur dimag slow feel ho – classic brain fog type Long COVID.',
      keyIndications: [
        'Legs itni bhaari ki uthna mushkil – "lead-like heaviness" ka sensation',
        'Dimag slow aur drowsy – concentrate karna impossible feel hota hai',
        'Dil ki dhadkan slow, blood pressure low, shivering bina bukhar ke',
      ],
    },
    {
      _key: 'med3',
      name: 'Phosphoric Acid',
      bestFor: 'Jab mental aur physical dono thakaan saath ho – jo log COVID ke baad depression, apathy (kuch karne ki ichha na hona) aur hair fall suffer kar rahe hain.',
      keyIndications: [
        'Poori udaasi – kuch bhi karne ki ichha nahi, emotions numb lagte hain',
        'Hair fall zyada – COVID ke 2-3 mahine baad shuru hua aur band nahi ho raha',
        'Dimag bilkul khaali feel – concentration zero, memory weak',
      ],
    },
    {
      _key: 'med4',
      name: 'Carbo Vegetabilis',
      bestFor: 'Jo log COVID mein oxygen level drop se guzre hain aur abhi bhi saanch lene mein takleef hai, seene mein bhaari pan hai, thodi si activity pe dam phoolna hai.',
      keyIndications: [
        'Dam phoolna thodi si activity pe – seedhi chadne pe bhi saans phool jaata hai',
        'Seene mein bhaari pan – oxygen meter normal dikhata hai phir bhi takleef',
        'Thanda hawa chahiye – fan ke saamne baithna achha lagta hai, hawa se aaram',
      ],
    },
    {
      _key: 'med5',
      name: 'Kali Phosphoricum',
      bestFor: 'Students, professionals jinhe COVID ke baad brain fog, concentration problem, mental exhaustion aur nervous system weakness hai – neurological Long COVID type.',
      keyIndications: [
        'Memory aur concentration bilkul weak – pehle jo yaad rehta tha ab nahi rehta',
        'Nervous exhaustion – thodi bhi mental mehnat ke baad haath kaanpna ya chakkar',
        'Neend irregular – ya bilkul nahi aati ya bahut zyada aati hai',
      ],
    },
  ],

  dietInclude: [
    {
      _key: 'di1',
      category: 'Immunity Boosting Foods',
      items: [
        'Haldi (Turmeric) waala doodh – curcumin inflammation kam karta hai jo Long COVID ka main driver hai',
        'Lahasun (Garlic) – allicin antiviral aur anti-inflammatory, gut health bhi support karta hai',
        'Amla (Indian Gooseberry) – Vitamin C ka best natural source, immune modulation ke liye',
        'Adrak (Ginger) ki chai – nausea, respiratory clearing aur anti-inflammatory properties',
        'Tulsi – adaptogenic herb jo stress aur immunity dono address karta hai',
      ],
    },
    {
      _key: 'di2',
      category: 'Brain & Nerve Recovery Foods',
      items: [
        'Akhrot (Walnuts) – Omega-3 jo brain fog recovery mein help karta hai',
        'Anaar (Pomegranate) – powerful antioxidant, vascular health ke liye',
        'Palak (Spinach) – iron, folate aur magnesium – nerve function ke liye',
        'Desi ghee (ek spoon) – brain ke liye healthy fat, absorption better karta hai',
        'Kela (Banana) – potassium aur B6 – nerve aur mood ke liye',
      ],
    },
    {
      _key: 'di3',
      category: 'Energy & Gut Restoration',
      items: [
        'Dahi (Probiotic curd) – gut microbiome restore karta hai jo COVID ke baad disturb hoti hai',
        'Daliya (Oats) – complex carbohydrate jo sustained energy deta hai, crash nahi hoti',
        'Moong dal – easily digestible protein, liver aur kidney pe load nahi dalta',
        'Nariyal paani (Coconut water) – electrolytes aur hydration, fatigue mein quick help',
        'Steamed vegetables (lauki, tori, kaddu) – digestive system easy load, nutrients bhi milte hain',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'Inflammatory Foods',
      items: [
        'Maida products (white bread, biscuits, namkeen) – inflammation badhata hai jo Long COVID symptoms worsen karta hai',
        'Deep fried food (samosa, pakoda, chips) – oxidative stress increase karta hai, recovery slow hoti hai',
        'Refined sugar (meethai, cold drinks, packaged juice) – immune dysregulation aur candida overgrowth risk',
      ],
    },
    {
      _key: 'da2',
      category: 'Gut Disrupting Items',
      items: [
        'Antibiotics without doctor advice – already disturbed gut flora aur zyada damage ho sakti hai',
        'Processed meat (sausages, packaged chicken) – preservatives inflammation trigger karte hain',
        'Excess chai/coffee – 2 se zyada cups nahi – cortisol spike karta hai jo already fatigued adrenals pe asar daalta hai',
        'Alcohol – liver recovery aur sleep quality dono pe negative effect, Long COVID mein strictly avoid',
      ],
    },
    {
      _key: 'da3',
      category: 'Heavy & Hard to Digest Foods',
      items: [
        'Rajma, chole, chana in excess – gas aur bloating, post-COVID gut already sensitive hai',
        'Raw salad in large amounts – uncooked fibre heavy hoti hai digestive system ke liye jo recover ho raha hai',
        'Bahut zyada mirch-masala – gut inflammation trigger kar sakta hai',
      ],
    },
  ],

  dos: [
    'Paced activity karein – thodi thodi mehnat karein, ek baar mein bahut zyada nahi – PEM (Post-Exertional Malaise) se bachne ke liye',
    'Neend ko prioritize karein – 8-9 ghante minimum, ek fixed time pe sona aur uthna – recovery mein neend sabse zyada help karta hai',
    'Protein har meal mein lo – muscle recovery aur immunity ke liye zaroor – dal, paneer, eggs, dahi',
    'Breathing exercises (Anulom-Vilom, diaphragmatic breathing) – 10 minutes daily – lung capacity aur calm nervous system ke liye',
    'Vitamin D, B12, Ferritin aur thyroid tests karwayein – aksar correctable deficiency milti hai jo recovery accelerate karti hai',
    'Gradual return to work – part-time se shuru karein, symptoms 70-80% improve hone tak wait karein',
    'Support lo – Long COVID ek real medical condition hai – family ko samjhayein, akele fight nahi karna',
    'Yoga aur light stretching – Shavasana, restorative yoga; 10-15 minute se shuru karein',
  ],

  donts: [
    '"Push through" mat karein – agar thakaan zyada lag rahi hai to mehnat mat karo; bahut log isse aur bimaar pad jaate hain',
    'Immediately gym ya intense exercise shuru mat karein – body taiyaar nahi hai; symptoms worsen ho sakte hain; minimum 3-6 mahine wait karein',
    'Khaana skip mat karein – especially breakfast – energy crash aur brain fog instantly worse hota hai',
    'Social isolation mat karein – mild social interaction (virtual bhi chalega) mental recovery mein help karta hai',
    'Self-medication mat karein – steroids, antibiotics, ya supplements bina doctor advice ke Long COVID mein ulta asar kar sakte hain',
    'Stress mein bade decisions mat lein – career change, relocation – brain fog mein decision-making affected hoti hai',
    'Comparison mat karein – har Long COVID ka recovery timeline alag hota hai, doosron se compare nahi karna',
    'SpO2 94% se neeche aaye, seene mein severe dard ho ya behoshi aaye to turant hospital jaayein – ghar pe wait mat karein',
  ],

  seasonalCare: {
    summer: 'Post-COVID patients mein heat intolerance common hai – bahut zyada dhoop mein nahi nikalna. ORS ya nariyal paani se hydration maintain karein – fatigue mein dehydration jaldi aati hai. Dopahar 11-4 ke beech baahar nikalna avoid karein. AC se suddenly bahar nahi jaana – temperature shock symptoms trigger karta hai. Electrolyte balance ke liye nimbu paani with pinch salt helpful hai.',
    monsoon: 'Infections ka risk zyada – Long COVID mein immune system weak hoti hai, isliye bheed-bhaad se bachein. Humidity se breathing aur fatigue worse ho sakti hai – AC ya dehumidifier help karta hai. Mold exposure avoid karein – ghar mein seepage ya namii remove karein. Paani pure peeyein – waterborne infections se bachna zaroori. Warm soups, ginger tea, tulsi kadha – respiratory support ke liye daily rakhein.',
    winter: 'Cold air breathing problems trigger kar sakta hai – scarf ya mask use karein baahar nikalne pe. Vitamin D levels check karein – winter mein deficiency zyada hoti hai, Long COVID mein Vit D important recovery factor hai. Warm fluids – haldi doodh, soup, herbal tea – immunity maintain karne ke liye daily. Exercise indoor karein – cold mein strenuous outdoor activity avoid. Chest aur throat warm rakhin – thermals ya layering. Season change (March, October) pe symptoms flare ho sakte hain – doctor se check-in karein.',
  },

  faqs: [
    {
      _key: 'faq1',
      question: 'Post-COVID Syndrome aur COVID infection mein kya fark hai?',
      answer: 'COVID infection woh hoti hai jab virus body mein active hota hai – fever, khaansi, breathlessness – zyada tar 2-3 hafte mein theek ho jaata hai. Post-COVID Syndrome (Long COVID) tab hoti hai jab COVID theek hone ke baad bhi – yaani negative test ke baad bhi – 4 ya usse zyada hafte tak symptoms rehte hain ya naye aate hain. Is mein virus body mein nahi hota – lekin COVID ne jo immune system aur nervous system mein changes kiye, unka asar continue hota hai. Simple shabdon mein: COVID infection ek battle hai, Post-COVID Syndrome uss battle ke baad ki recovery problem hai.',
    },
    {
      _key: 'faq2',
      question: 'Long COVID kitne time tak rehta hai – kya khud se theek ho jaata hai?',
      answer: 'Kuch logon mein Post-COVID symptoms 4-8 hafte mein khud theek ho jaate hain – ye lucky group hai. Lekin research kehti hai roughly 20-30% patients mein symptoms 3 mahine se zyada rehte hain, aur kuch mein 1-2 saal tak bhi. Ye depend karta hai COVID ki severity par, pehle se koi bimari thi ya nahi, aur recovery period mein aapne apna kitna khayal rakha. Proper treatment se recovery timeline significantly improve hoti hai – khud se uthne ka wait karna best approach nahi hai agar symptoms 4 hafte se zyada hain.',
    },
    {
      _key: 'faq3',
      question: 'Post-COVID thakaan normal thakaan se alag kyun hoti hai?',
      answer: 'Normal thakaan rest karne se theek ho jaati hai – raat bhar so gaye, fresh ho gaye. Post-COVID fatigue bilkul alag hai – scientific naam hai "Post-Exertional Malaise (PEM)". Iska matlab hai ki thodi si bhi activity ke baad – seedhi chadna, shopping karna, ya sirf ek long phone call – thakaan agle 12-24 ghante mein aur zyada bad jaati hai. Ye ek clear signal hai ki body ka energy system disturbed hai aur medical attention chahiye. Isko "laziness" ya "weakness of mind" mat samjhein – ye real medical condition hai.',
    },
    {
      _key: 'faq4',
      question: 'Kya homeopathy Post-COVID ke liye kaam karta hai?',
      answer: 'Haan – homeopathy Post-COVID Syndrome ke liye ek effective complementary treatment hai. CCRH-affiliated research mein Long COVID patients mein fatigue score (FSS) aur sleep quality dono mein meaningful improvement dekhi gayi – placebo group ke comparison mein. Homeopathy ka sabse bada fayda ye hai ki ye ek saath kaafi systems address karta hai – thakaan, brain fog, anxiety, aur neend – alag alag medicines ki zaroorat nahi. Ye individualized treatment deta hai – aapka Post-COVID kaisa hai, wo pattern dekh ke medicine select hoti hai. Severe respiratory ya cardiac involvement mein conventional medicine pehle zaroori hai – homeopathy saath mein complementary role mein le sakte hain.',
    },
    {
      _key: 'faq5',
      question: 'Post-COVID brain fog kya hota hai aur kya ye theek ho sakta hai?',
      answer: 'Brain fog ek aisa feeling hai jisme dimag "slow" lagta hai – bhoolna, concentrate nahi kar paana, words yaad nahi aana, sochne mein effort lagta hai. COVID ke baad neuroinflammation (brain ki nerves mein swelling) aur blood flow issues isko cause karte hain. Haan, ye theek ho sakta hai – aur zyada tar patients mein 6-12 mahine mein significant improvement aati hai proper treatment se. Kya kaam karta hai: mental rest (screen time kam), omega-3 rich diet, stress management, aur individualized homeopathic treatment. Agar brain fog ke saath severe confusion, speech problem ya weakness hai – turant doctor ke paas jaayein.',
    },
    {
      _key: 'faq6',
      question: 'Kya Post-COVID mein exercise kar sakte hain?',
      answer: 'Haan, par bahut carefully aur slowly. Post-COVID mein "Push through" attitude bahut harmful ho sakta hai – isse PEM (Post-Exertional Malaise) trigger hota hai aur recovery aur slow ho jaati hai. Sahi approach ye hai: pehle sirf walk – 5-10 minute, day mein do baar – aur dekhein agle din kaisa feel hota hai. Agar next day symptoms worse nahi hue, tab slowly increment karein. Yoga, stretching, aur pranayama se shuru karein. High-intensity gym, running, HIIT – ye sab Long COVID mein minimum 3-6 mahine tak avoid karein. Certified rehabilitation physiotherapist se plan banwana best hai.',
    },
    {
      _key: 'faq7',
      question: 'Kya Post-COVID mein baal jhadna normal hai?',
      answer: 'Haan, bilkul normal hai – aur ye bahut common complaint hai. Iska naam hai Telogen Effluvium – COVID ke stress (physical aur emotional) se hair follicles ek saath "rest phase" mein chale jaate hain. Aksar 2-3 mahine baad baal zyada girtein hain. Good news ye hai ki ye temporary hai – zyada tar 6-9 mahine mein hair growth wapas normal ho jaati hai agar nutrition theek ho. Protein, iron, zinc aur Biotin se bhari diet zaroor rakhein. Agar baal bahut zyada gir rahe hain ya 1 saal se zyada ho gaya hai to dermatologist ya doctor se milein.',
    },
    {
      _key: 'faq8',
      question: 'Post-COVID mein saanch lena mushkil kyun hota hai – oxygen level normal hone ke baad bhi?',
      answer: 'Ye bahut frustrating aur confusing situation hai – oxygen meter 98% dikhata hai lekin aap mehsoos karte hain jaise saanch nahi aa rahi. Iska reason hai: COVID ke baad lung tissue ka inflammation ya fibrosis (scarring) thoda sa reh jaata hai jo oxygen exchange affect karta hai "normal" levels pe bhi. Doosra reason hai autonomic nervous system dysregulation – jisme breathing ka control center abhi bhi settle nahi hua. Diaphragmatic breathing exercises (pet se saanch lena) bahut help karta hai. Agar breathlessness exercise pe zyada bad jaaye ya rest pe bhi ho to pulmonologist se milein.',
    },
    {
      _key: 'faq9',
      question: 'Post-COVID mein dil ki dhadkan tez ya irregular kyun lagti hai?',
      answer: 'COVID ke baad heart palpitations – dhadkan ka achanak tez ya irregular feel hona – ek common complaint hai. Iska scientific naam hai POTS (Postural Orthostatic Tachycardia Syndrome) – matlab khade hone pe ya thodi activity se heart rate bahut zyada badh jaati hai. COVID ne heart muscle ya cardiac nerves ko mildly affect kiya hota hai. Zyada tar mein ye 6-12 mahine mein theek ho jaata hai. Lekin agar seene mein dard ho, breathlessness ke saath palpitations hon, ya behoshi aaye – turant doctor ke paas ya emergency mein jaayein. Self-medication nahi karna is case mein.',
    },
    {
      _key: 'faq10',
      question: 'Post-COVID mein anxious ya depressed feel karna – kya ye normal hai?',
      answer: 'Haan, ye normal hai aur bahut common hai – aur iska matlab ye nahi ki aap "mentally weak" hain. COVID ke baad brain mein serotonin aur dopamine (mood chemicals) ka balance disturb hota hai. Saath hi, chronic illness ka psychological burden bhi hota hai – kaam nahi kar pa rahe, log samajh nahi rahe, recovery slow hai – ye sab anxiety aur depression ke liye real reasons hain. Ye treatable hai. Homeopathy mein nervous system aur mood stabilization dono address kiye jaate hain. Agar thoughts self-harm ki direction mein jaayein ya bahut severe depression ho to please mental health professional se milein – ye zaroori hai.',
    },
    {
      _key: 'faq11',
      question: 'Post-COVID mein kya test karana chahiye?',
      answer: 'Ye tests helpful hote hain Long COVID evaluate karne ke liye: CBC (Complete Blood Count) – anemia ya infection rule out; Thyroid function (TSH) – thyroid bhi COVID se affect hoti hai; Vitamin D, B12, Ferritin – deficiencies fatigue worsen karti hain; CRP ya ESR – inflammation markers; ECG – cardiac involvement check ke liye; Chest X-ray ya CT scan (agar respiratory symptoms zyada hain). Ye poora panel ek baar zaroor karwayein – aksar in mein se koi correctable factor milta hai jo recovery accelerate karta hai.',
    },
    {
      _key: 'faq12',
      question: 'Long COVID mein kaam pe wapas kab jaana chahiye?',
      answer: 'Ye ek bahut important practical question hai. Short answer: jab symptoms 70-80% improve ho jaayein aur ek full work week simulate kar sakein bina crash hue. Ye "readiness test" try karein: ghar pe kaam ke ghante jitna kaam karein – do 3-4 days – agar next day thakaan manage ho gayi, phir sochein. Office wapas jaate time gradual return best hai – part-time se shuru, dhire dhire full time. Agar aapka kaam physically demanding hai, doctor ka clearance zaroor lein. Pressure pe jaldi wapas jaana – "push through" – Long COVID ko aur lambi kar sakta hai.',
    },
    {
      _key: 'faq13',
      question: 'Bachon mein Post-COVID Syndrome hoti hai kya?',
      answer: 'Haan, hoti hai – bachon mein COVID mild hoti hai lekin Long COVID unhe bhi affect kar sakti hai. Bacchon mein signs thoda alag hote hain: zyada thakaan, school mein focus problem, headache, pet dard, ya mood mein changes. Ek specific condition hai bachon mein – MIS-C (Multisystem Inflammatory Syndrome in Children) – jo COVID ke baad aata hai aur serious hai. Agar bacha COVID ke baad 4 hafte se zyada consistently unwell hai – doctor se milna zaroori hai. Homeopathy bachon mein safely use ki ja sakti hai Long COVID ke liye.',
    },
    {
      _key: 'faq14',
      question: 'Kya Post-COVID wale log dobaara COVID ho sakte hain?',
      answer: 'Haan, Long COVID patients ko reinfection ka risk hota hai – actually unhe extra cautious rehna chahiye. Reinfection se Long COVID symptoms aur worse ho sakte hain. Precautions: mask-wearing bheed mein, hand hygiene, ventilation, aur vaccination current rahein. Agar Long COVID chal raha hai aur dobara COVID ho jaye – doctor se turant milein, symptoms monitor karein. Acha news ye hai ki booster vaccines reinfection risk significantly kam karti hain.',
    },
    {
      _key: 'faq15',
      question: 'Post-COVID mein homeopathic treatment kitne time mein asar dikhaata hai?',
      answer: 'Zyada tar patients mein pehla noticeable improvement 4-6 hafte mein aata hai – specially neend aur energy mein. Full significant improvement ke liye 3-6 mahine ka realistic timeline rakhein. Ye depend karta hai kitne time se Long COVID chal raha hai, symptoms ki severity aur aapki overall health pe. Jo log pehle 3 mahine mein treatment shuru karte hain unka response better hota hai. Patience zaroori hai – homeopathy body ki natural healing ko support karta hai, force nahi karta – isliye sustainable result aata hai.',
    },
    {
      _key: 'faq16',
      question: 'Kya gharelu nuske Post-COVID mein kaam karte hain?',
      answer: 'Kuch traditional Indian remedies genuinely helpful hain: Haldi doodh – anti-inflammatory, raat ko sone se pehle le sakte hain; Tulsi-adrak-kali mirch ka kadha – respiratory support; Brahmi ya Ashwagandha – stress aur nervous system ke liye (doctor se dose discuss karein); Amla – Vitamin C ke liye. Ye sab supportive hain – yaani main treatment ke saath complement karein, akele nahi. Kya avoid karein: internet pe milne wale "guaranteed cure" wale concoctions, heavy kaad jo liver pe load daalte hain, aur unverified supplement stacks – ye nuksaan kar sakte hain.',
    },
    {
      _key: 'faq17',
      question: 'Long COVID mein neend achi nahi aati – kya karna chahiye?',
      answer: 'Sleep disturbance Post-COVID ka ek bahut common aur debilitating symptom hai – aur iska seedha asar recovery pe padta hai. Kya kaam karta hai: Fixed sleep-wake time bilkul pakka karein – weekends bhi; Sone se 1 ghanta pehle screen (phone/TV) band karein; Kamra thanda, andhera aur quiet rakhin; Lavender aroma ya light reading help karta hai; Heavy khaana raat 8 ke baad avoid karein. Magnesium (nuts, spinach) dinner mein natural sleep aid hai. Agar ye sab karke bhi neend nahi aa rahi – homeopathic consultation lo, aur doctor se discuss karein – sleeping pills Long COVID mein dependency risk aur daytime fatigue worsen kar sakte hain.',
    },
    {
      _key: 'faq18',
      question: 'Kya Post-COVID mein yoga aur pranayama safe hai?',
      answer: 'Haan – aur actually bahut recommended hai Long COVID ke liye. Pranayama specific fayde karta hai: Anulom-Vilom (alternate nostril breathing) – nervous system calm karta hai aur lung capacity improve karta hai; Bhramari (humming breath) – anxiety aur brain fog mein turant asar; Diaphragmatic breathing – respiratory muscles strengthen karta hai. Yoga asanas: light stretching se shuru, Shavasana (corpse pose) – restorative yoga best hai Long COVID mein. Avoid karein: hot yoga, Kapalbhati agar saanch mein takleef ho, aur koi bhi pose jo bahut effort maange. 10-15 minute se shuru karein, zyada nahi.',
    },
    {
      _key: 'faq19',
      question: 'Kya Post-COVID permanently theek ho sakta hai?',
      answer: 'Haan – aur ye bilkul possible hai. Majority of Long COVID patients – roughly 70-80% – sahi treatment, rest, aur nutrition se 6-12 mahine mein significant ya complete recovery karte hain. Permanent chronic disability bahut minority mein hoti hai aur aksar pre-existing conditions ya treatment delay se related hoti hai. Permanent control aur recovery ke liye jo cheezein sabse important hain: early treatment shuru karna, "push through" nahi karna, aur consistent follow-up. Aapka body recover karna chahta hai – sahi support dena aapka kaam hai, aur qualified treatment isme madadgar hai.',
    },
    {
      _key: 'faq20',
      question: 'Post-COVID mein khana khane ki ichha kyun nahi hoti, aur taste/smell wapas kab aayega?',
      answer: 'Taste aur smell loss (anosmia/ageusia) COVID ka ek characteristic symptom hai jo kaafi logo mein Long COVID mein continue karta hai. Ye COVID se olfactory nerve (smell ki nerve) ko damage ki wajah se hota hai. Zyada tar cases mein 6-12 mahine mein wapas aata hai – kuch mein 2 saal tak lag sakte hain. "Smell training" effective hai: 4 scents (rose, lemon, cloves, eucalyptus) daily 2 baar sniff karein – 20 seconds each. Zinc deficiency bhi isko worsen karta hai – zinc rich foods (seeds, nuts, meat) include karein diet mein. Appetite ke liye: small frequent meals, visually appealing food – ye help karta hai jab taste nahi aa raha.',
    },
    {
      _key: 'faq21',
      question: 'Post-COVID mein kab turant doctor ke paas jaana zaroori hai?',
      answer: 'Ye warning signs hain – in mein se koi bhi ho to TURANT hospital ya emergency mein jaayein: Oxygen level 94% se neeche (pulse oximeter se check karein); Seene mein severe dard ya pressure; Behoshi ya near-fainting; Ek taraf ka face, haath ya paav achanak weak ya numb ho jaaye; Speech unclear ho jaaye ya confusion bahut zyada bad jaaye; Breathing itni mushkil ho ki baat nahi ho pa rahi; Heart rate 120+ per minute aram se baithe hue. Ye symptoms Long COVID ki normal fluctuation nahi hain – ye emergency signs hain. Doctor se milne mein der mat karein.',
    },
    {
      _key: 'faq22',
      question: 'Post-COVID ke liye Dr. Shadab se kaise consult karein?',
      answer: 'Dr. Shadab Khan se online ya in-person consultation ke liye drshadabs.com pe jaayein. Post-COVID mein case-taking mein time lagta hai – aapki poori COVID history, recovery timeline, current symptoms, aur pehle se koi bimari – sab discuss hota hai. Ye personalized approach hi Long COVID mein effective results deta hai. Clinic: Akola, Maharashtra. Online consultation bhi available hai.',
    },
  ],

  relatedDiseases: [
    { _key: 'rd1', slug: 'chronic-fatigue-syndrome' },
    { _key: 'rd2', slug: 'anxiety' },
    { _key: 'rd3', slug: 'depression' },
    { _key: 'rd4', slug: 'asthma' },
    { _key: 'rd5', slug: 'insomnia' },
  ],
}

async function seed() {
  await client.createOrReplace(doc)
  console.log('✅ Post-COVID Syndrome / Long COVID created/updated: disease-post-covid-syndrome')
  console.log('🌐 Live at: https://homeopedia.in/diseases/post-covid-syndrome')
}

seed().catch(console.error)
