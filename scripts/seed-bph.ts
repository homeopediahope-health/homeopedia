import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-bph',
  _type: 'disease',
  title: 'BPH (Benign Prostatic Hyperplasia)',
  hindiName: 'Prostate Badhna / Peshab Ki Takleef',
  slug: { _type: 'slug', current: 'bph' },
  category: 'Urinary',
  publishedAt: '2026-05-04T00:00:00.000Z',
  metaTitle: 'BPH Prostate Treatment in Hindi | Homeopathy | Homeopedia',
  metaDescription: 'BPH (prostate badhna) ka ilaaj, causes, diet aur homeopathic treatment – verified info, doctor-reviewed. 40+ mard zaroor padhen.',

  heroText: 'BPH matlab Benign Prostatic Hyperplasia – isme male ki prostate gland umar ke saath badi ho jaati hai. Prostate ek akhrot jitni gland hoti hai jo bladder ke neeche hoti hai aur urethra (peshab ki nali) ko gheri rehti hai. Jab ye gland badi hoti hai, urethra par pressure badhta hai jisse peshab karna mushkil ho jaata hai. 50 saal ke baad lagbhag 50% male aur 70 saal ke baad 70% male is se prabhavit hote hain. Ye cancerous nahi hoti – "Benign" ka matlab hai non-cancerous growth – lekin agar ilaaj na ho to kidney tak problem pahunch sakti hai. Sahi waqt pe treatment se Grade 3-4 tak progression rokna aur surgery se bachna bilkul possible hai.',

  quickFacts: {
    whatItIs: 'Prostate gland ka umar ke saath non-cancerous badhna – peshab ki nali pe pressure se urinary symptoms; Grade 1-2 mein bina operation ke excellent control possible',
    howCommon: 'Lagbhag 2.5 crore Indian men 50+ BPH se prabhavit; 50 saal ke baad har 2 mein se 1 male ko koi na koi BPH symptom hota hai',
    treatmentDuration: 'Grade 1-2 mein 3-6 mahine mein significant improvement; long-term stable results ke liye 6-12 mahine',
    successRate: 'CCRH-affiliated studies mein 60-65% patients mein IPSS score mein clinically significant reduction (5+ points) dekhi gayi',
  },

  causes: [
    'Umar badhna – Testosterone aur DHT (Dihydrotestosterone) ka imbalance prostate cells ko multiply karta hai, ye aging ka natural lekin treatable part hai',
    'Hormonal changes – estrogen aur testosterone ka ratio aging ke saath shift hota hai, jo prostate growth ko trigger karta hai',
    'Genetic factor – agar baap ya bhai ko BPH hai to risk 4 guna zyada; family history sabse strong predictor hai',
    'Sedentary lifestyle – zyada baithna, exercise nahi karna; pelvic blood flow aur hormonal metabolism dono affect hote hain',
    'Chronic inflammation – prostate mein low-grade inflammation BPH progression ko accelerate karti hai',
    'Metabolic syndrome – diabetes, obesity aur high BP wale men mein BPH ka risk aur progression zyada tezi se hota hai',
  ],

  riskFactors: [
    '40 saal se upar ke mard – umar sabse bada risk factor; 50 pe 50%, 70 pe 70% affected',
    'Overweight ya obese men – fat cells estrogen produce karte hain jo prostate growth ko badhata hai',
    'Physically inactive lifestyle – desk job, no exercise; pelvic congestion chronic ho jaati hai',
    'Family history – first-degree relative mein BPH ho to risk double; genetics strong role play karta hai',
    'Diabetes ya insulin resistance – hormonal dysregulation se direct link hai BPH progression se',
    'Heavy alcohol intake – liver metabolism aur hormone balance affect karta hai, BPH ko aggravate karta hai',
    'High-fat, low-fibre diet – khaaskar red meat aur dairy heavy diet; prostate inflammation badhti hai',
  ],

  complications: [
    'Urinary Retention (Peshab Bilkul Band Hona) – emergency situation, catheter lagana pad sakta hai, hospital jaana zaroori',
    'Kidney Damage (Hydronephrosis) – prolonged backpressure se kidney cells permanently damage ho sakti hain',
    'Bladder Stones – residual urine se mineral deposits form hote hain jo infection aur pain dete hain',
    'Recurrent UTI – ruka hua peshab bacteria ke liye breeding ground ban jaata hai, baar baar infection',
    'Bladder Dysfunction – overburdened bladder ki muscle permanently weak ho sakti hai (detrusor failure)',
  ],

  types: [
    {
      _key: 'type1',
      name: 'Grade 1 – Mild BPH',
      description: 'Prostate slightly enlarged (30-40 grams). Peshab thoda slow ya delay se aata hai. Raat mein 1-2 baar uthna padta hai. Rozmarra zindagi pe zyada asar nahi. Is stage pe homeopathy aur lifestyle changes se excellent results milte hain – ye golden window hai jab surgery ki zaroorat nahi padti. IPSS score 0-7 range mein hota hai.',
    },
    {
      _key: 'type2',
      name: 'Grade 2 – Moderate BPH',
      description: 'Prostate 40-60 grams. Bladder poora khali nahi hota (residual urine rehti hai). Baar baar peshab, kabhi kabhi dheela flow. Halka pain ya pressure pelvic area mein. Homeopathy + dietary changes + regular monitoring recommended. IPSS score 8-19 range. Is stage pe bhi conservative treatment se meaningful improvement possible hai.',
    },
    {
      _key: 'type3',
      name: 'Grade 3 – Severe BPH',
      description: 'Prostate 60+ grams. Bladder mein 100ml se zyada urine reh jaati hai. Kabhi kabhi peshab bilkul band bhi ho jaata hai (acute retention). Kidney pe pressure banana shuru ho jaata hai. Is stage pe conventional medical evaluation zaroori – urologist se milna urgent hai. Homeopathy supportive role mein kaam karti hai saath mein. IPSS score 20-35.',
    },
    {
      _key: 'type4',
      name: 'Grade 4 – Very Severe BPH',
      description: 'Prostate bahut badi, kidney aur bladder dono affected. Peshab bilkul nahi aa raha ya bahut painful. Surgical evaluation almost always needed. Homeopathy post-surgical recovery mein madadgar – healing faster hoti hai, inflammation kam hoti hai. Ye stage tab aati hai jab Grade 1-2 mein treatment nahi liya gaya – yahi wajah hai ki early treatment itni important hai.',
    },
  ],

  symptoms: [
    {
      _key: 'sym1',
      category: 'Obstructive Symptoms (Peshab Aane Mein Takleef)',
      items: [
        'Peshab ki dhaar kamzor ya patli ho jaana – pressure pehle jaisi nahi rehti',
        'Peshab shuru karne mein zyada time lagna (hesitancy) – wait karna padta hai',
        'Peshab ke beech-beech mein ruk jaana (intermittency) – flow ruk ruk ke aata hai',
        'Peshab ke baad bhi "ek aur boond" ka ehsaas – bladder khali nahi laga',
        'Peshab karne ke liye jor lagana padna (straining) – effort lagana padta hai',
      ],
    },
    {
      _key: 'sym2',
      category: 'Irritative Symptoms (Baar Baar Peshab)',
      items: [
        'Raat mein baar baar uthna peshab ke liye (nocturia) – 2 ya zyada baar; neend disturb hoti hai',
        'Din mein bahut baar peshab ki zaroorat (frequency) – normal se zyada trips',
        'Achanak zyada tez peshab aana – rok nahi paate (urgency); embarrassing situation',
        'Kabhi kabhi peshab leak ho jaana (urgency incontinence) – control khatam hona',
        'Peshab karne ke baad thodi der mein phir lagana – incomplete emptying ka sign',
      ],
    },
    {
      _key: 'sym3',
      category: 'Advanced Signs (Zyada Takleef Ke Warning Signs)',
      items: [
        'Peshab mein blood aana (hematuria) – kabhi kabhi; turant doctor ko dikhayein',
        'Lower back ya pelvic area mein dull pain – bladder distension ya kidney pressure',
        'Peshab bilkul nahi aa raha – complete retention; ye medical emergency hai',
        'Kidney area mein pressure ya dard – late sign, kidney affect ho rahi hai ka signal',
        'Haath-paon mein sujan – kidney function affect hone ka serious sign',
      ],
    },
  ],

  ccrhEvidence: {
    improvementRate: '60-65% patients mein IPSS (International Prostate Symptom Score) mein clinically significant reduction (5+ points) dekhi gayi',
    avgTreatmentPeriod: '3-6 mahine mein noticeable improvement; 6-12 mahine ke liye sustained long-term benefit',
    citation: 'Central Council for Research in Homoeopathy (CCRH), Clinical Research Unit Studies on BPH | Indian Journal of Research in Homoeopathy | 2018-2022 | ccrhindia.nic.in',
    keyFindings: [
      'IPSS score mein treatment group mein average 6.2 points reduction – placebo group mein sirf 1.8 points',
      'Nocturia (raat ka peshab) mein treatment group mein 42% improvement vs placebo mein 12%',
      'Post-void residual urine volume mein measurable reduction 4-6 months ke baad – kidney backpressure risk kam hua',
      'Quality of life score mein significant improvement – patients ne neend aur daily routine better hone ki report ki',
    ],
  },

  homeopathyBenefits: [
    'Homeopathy BPH mein prostate gland ki abnormal growth ke peeche ki hormonal sensitivity aur inflammatory process ko address karta hai – sirf symptoms nahi, root mechanism pe kaam',
    'Har patient ka BPH alag hota hai – kisi ko raat zyada problem hai, kisi ko flow slow hai, kisi ko urgency zyada hai – homeopathy ye individual pattern dekh ke medicine choose karta hai',
    'Long-term use se prostate ka size reduce hone ke saath bladder muscle ki tone bhi improve hoti hai – poori urinary system ko strengthen karta hai, sirf prostate nahi',
    'Surgery se pehle conservative management option – Grade 1-2 mein excellent results without invasive procedure; surgery tak naubat na aaye yahi goal',
    'Nocturia (raat ka peshab) control mein remarkable improvement – neend aur daily quality of life directly better hoti hai, ye patients ke liye sabse valuable change hota hai',
    'Hormonal sensitivity address karta hai – BPH ki root cause (DHT response) pe kaam karta hai over time',
    'Side-effect free long-term use – elderly patients ke liye especially safe option jab multiple medications already chal rahi hoon',
  ],

  medicines: [
    {
      _key: 'med1',
      name: 'Sabal Serrulata',
      bestFor: 'Peshab shuru karne mein delay, weak stream, raat mein zyada uthna, urethra mein cold sensation – middle-aged men, early BPH Grade 1-2. BPH ki sabse commonly used aur well-studied homeopathic medicine.',
      keyIndications: [
        'Weak, slow stream – shuru karne mein time lagta hai, hesitancy prominent',
        'Nocturia – raat mein 2-3 baar uthna, prostate congestion se',
        'DHT modulation – prostate tissue pe direct affinity; early BPH mein pehli choice',
      ],
    },
    {
      _key: 'med2',
      name: 'Conium Maculatum',
      bestFor: 'Elderly men jahan peshab drops mein aata hai, start-stop flow, flow thoda aata hai phir ruk jaata hai – age-related glandular hardening ke saath. Prostate ke saath dusre glands bhi affected hoon tab especially.',
      keyIndications: [
        'Dribbling, drop-by-drop peshab – elderly men mein characteristic pattern',
        'Start-stop intermittent flow – urethra ki progressive constriction',
        'Glandular hardening – prostate tissues stiff aur fibrous hone lage hain',
      ],
    },
    {
      _key: 'med3',
      name: 'Thuja Occidentalis',
      bestFor: 'BPH ke saath recurrent UTI, peshab mein burning ya foamy character, chronic prostatitis history – khaaskar jo patients zyada oily food aur sedentary lifestyle mein hain. BPH with secondary infection cases.',
      keyIndications: [
        'BPH + recurrent UTI combination – prostate aur urinary tract dono inflamed',
        'Foamy ya foul-smelling urine – chronic infection tendency ke saath',
        'Abnormal tissue growth tendency – prostate ke saath aur growths bhi',
      ],
    },
    {
      _key: 'med4',
      name: 'Chimaphila Umbellata',
      bestFor: 'Peshab ke liye khada hona padta hai, strain karna padta hai, burning sensation peshab ke dauran, prostate area mein fullness ka ehsaas – moderate BPH jab "khada hokar jor lagana" padta ho.',
      keyIndications: [
        'Khade hokar peshab karna padta hai – position-dependent obstruction',
        'Prostate area mein fullness aur pressure – bladder neck obstruction',
        'Burning during urination – bladder neck pe irritation ke saath BPH',
      ],
    },
    {
      _key: 'med5',
      name: 'Lycopodium Clavatum',
      bestFor: 'Right-sided symptoms zyada, peshab se pehle kaafi wait, incomplete emptying, digestive issues (gas, bloating) ke saath BPH – anxious, worried personality wale men jinhe liver-digestive-urinary teeno mein issues hain.',
      keyIndications: [
        'Right-sided preference – right kidney, right ureter, right side pelvic pressure zyada',
        'Incomplete emptying ke saath gas aur bloating – liver-urinary connection',
        'Anxious, anticipatory personality – worry zyada, confidence kam wale men',
      ],
    },
  ],

  dietInclude: [
    {
      _key: 'di1',
      category: 'Prostate-Friendly Vegetables',
      emoji: '🥦',
      items: [
        'Tamatar (pakka hua) – lycopene content prostate health ke liye evidence-based; cooked tomatoes mein zyada absorb hota hai',
        'Broccoli, gobhi, phool gobhi – sulforaphane compound prostate inflammation reduce karta hai; weekly 3-4 baar lo',
        'Palak, methi, saag – zinc aur magnesium dono prostate function ke liye essential; daily green vegetables',
        'Pumpkin seeds (kaddu ke beej) – zinc ka best natural source; prostate health ke liye zinc essential mineral hai; roz ek muthi',
      ],
    },
    {
      _key: 'di2',
      category: 'Prostate-Supporting Fruits & Seeds',
      emoji: '🍎',
      items: [
        'Pomegranate (anar) – antioxidants prostate cells ki oxidative damage reduce karte hain; juice ya whole fruit dono helpful',
        'Flaxseeds (alsi) – omega-3 aur lignans dono prostate inflammation aur DHT activity ko modulate karte hain; powdered form best',
        'Amla (Indian gooseberry) – vitamin C aur antioxidants; prostate inflammation mein naturally helpful; roz ek amla ya juice',
        'Walnuts (akhrot) – anti-inflammatory omega-3; prostate tissue health maintain karta hai; 4-5 roz khaao',
      ],
    },
    {
      _key: 'di3',
      category: 'Fluids aur Hydration',
      emoji: '💧',
      items: [
        'Plain water – 6-8 glasses daily; diluted urine infection risk reduce karta hai; sham 6 baje ke baad intake kam karo (nocturia control ke liye)',
        'Green tea – EGCG catechins prostate cell proliferation slow karte hain; 1-2 cups daily subah; BPH mein beneficial',
        'Coconut water – natural electrolytes; bladder soothing; ek glass subah empty stomach pe',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'Prostate Irritants',
      emoji: '🚫',
      items: [
        'Red meat (mutton, beef) – saturated fat aur hormones prostate growth accelerate karte hain; week mein 1 baar maximum ya completely avoid',
        'Processed meats (sausage, salami) – preservatives aur sodium bladder irritation badhate hain; completely avoid karo',
        'Fried aur oily food – high fat = high estrogen conversion = prostate growth; samosa, pakoda, poori roz bilkul nahi',
      ],
    },
    {
      _key: 'da2',
      category: 'Bladder Irritants',
      emoji: '⚠️',
      items: [
        'Alcohol – diuretic hai (zyada peshab), prostate blood flow badha ke congestion karta hai; BPH mein strictly avoid',
        'Coffee aur strong chai – caffeine bladder irritant hai; urgency aur frequency dono bad hoti hain; max 1 cup subah',
        'Cold drinks aur soda – caffeine + sugar + carbonation; triple bladder irritant; completely avoid karo',
      ],
    },
    {
      _key: 'da3',
      category: 'Foods That Worsen Retention',
      emoji: '🔴',
      items: [
        'Dairy in excess – full-fat dairy mein saturated fat + hormones; BPH progression se linked; dahi ek baar theek, doodh-paneer-butter kam karo',
        'Namak zyada – water retention aur bladder pressure dono badhta hai; dinner mein khaaskar namak kam karo',
        'Refined carbs (maida, white rice) – insulin resistance se hormonal imbalance jo BPH aggravate karta hai; atta aur brown rice switch karo',
      ],
    },
  ],

  dos: [
    'Roz 30-40 min walk ya moderate exercise karein – pelvic blood flow improve hoti hai, prostate congestion kam hoti hai; vajrasana aur butterfly pose especially helpful',
    'Kegel exercises (pelvic floor exercises) seekhein aur karein – bladder control aur prostate support dono improve hote hain; roz 3 sets of 10 contractions',
    'Sham ke baad fluids limit karo (6-7 PM ke baad) – nocturia control karne ka simplest practical trick; din mein full hydration maintain karo',
    'Regular prostate checkup karwao (40+ ke baad annually) – PSA test + ultrasound; early detection se treatment bahut easier hoti hai',
    'Peshab aane pe rok mat lagao – bladder muscle ko strain mat karo; urgency ke time jaldi jaao, ruk ke strain karna bura hai',
    'Healthy weight maintain karo – obesity aur BPH directly linked; 5-10 kg weight loss bhi IPSS score measurably improve karta hai',
    'Constipation bilkul nahi rehni chahiye – filled bowel prostate pe direct pressure dalti hai; fibre-rich diet aur hydration se bowel regular rakho',
  ],

  donts: [
    'Decongestant ya antihistamine medicines bina doctor ke mat lo – ye medicines prostate muscles tighten karti hain aur peshab completely band kar sakti hain; BPH mein emergency bana sakta hai',
    'Peshab ko zyada der tak rok ke mat rakho – bladder overdistension se permanent damage possible hai; regular voiding pattern important hai',
    'Bahut thanda paani ya drinks ek dum se mat piyo – cold fluids bladder aur prostate ko jhatke se irritate karte hain, symptoms suddenly worse ho sakte hain',
    'Sedentary lifestyle mat rakho – zyada baithna pelvic congestion badhata hai; office mein bhi har ghante 5 min khade ho ya chalo',
    'Alcohol aur smoking bilkul band karo – dono prostate inflammation aur vascular congestion directly badhate hain; ye sabse important lifestyle change hai',
    'Koi bhi ayurvedic ya herbal supplement bina doctor ke mat lo – kuch supplements (saw palmetto high dose, zinc overdose) bhi harm kar sakte hain',
    'BPH symptoms ko "umar ka asar hai" bol ke ignore mat karo – Grade 1-2 mein bahut achha control possible hai; late aane se kidney tak problem pahunch sakti hai',
  ],

  seasonalCare: {
    winter: 'Thandi mein prostate muscles contract karte hain – peshab aur zyada ruka hua lagta hai, urgency badh jaati hai. Warm clothes pehno khaaskar lower body. Subah warm water pehle piyo – bladder warm karo. Winter mein nocturia naturally zyada hoti hai – ghabrao nahi, warmer environment se improve hota hai. Heater ya warm room mein sone se nocturia thodi kam hoti hai. Pumpkin seeds aur til zyada lo is season mein – zinc boost ke liye.',
    summer: 'Sweating se body dehydrated hoti hai – concentrated urine bladder aur prostate dono irritate karta hai, UTI risk bhi badh jaata hai. Pani 8-10 glasses zaroor piyo lekin 6 PM ke baad kam karo. ORS ya nimbu pani – electrolytes replace karo. Cool foods – cucumber, tarbuz, coconut water. Garmi mein alcohol bilkul nahi – double dehydration. Afternoon exercise avoid karo – subah ya sham ko karo.',
    monsoon: 'UTI ka sabse zyada risk is season mein; humidity mein bacteria fast grow karte hain, prostate inflammation badh sakti hai. Bahar ka paani avoid – filtered/boiled pani hi piyo. Hygiene extra dhyan – underwear cotton aur dry rakho. Khana fresh khao – stale food avoid. Seasonal allergy mein jo antihistamines lete hain wo BPH patients ke liye dangerous hain – doctor se pehle poochho.',
  },

  faqs: [
    {
      _key: 'faq1',
      question: 'BPH kya hota hai – prostate badhna kya hota hai simple words mein?',
      answer: 'BPH (Benign Prostatic Hyperplasia) matlab prostate gland ka umar ke saath bada hona – lekin ye cancerous nahi hota. Prostate gland bladder ke neeche hoti hai aur peshab ki nali (urethra) ko gheri rehti hai. Jab ye badi hoti hai, urethra squeeze hoti hai aur peshab karne mein takleef hoti hai – dhaar kamzor hona, baar baar peshab aana, raat mein uthna – ye sab BPH ke aam signs hain. 50 saal ke baad har 2 mein se 1 male ko koi na koi BPH symptom hota hai. Ye ek treatable condition hai – sahi waqt pe ilaaj se bahut achha control possible hai.',
    },
    {
      _key: 'faq2',
      question: 'Kya BPH (prostate badhna) bina operation ke theek ho sakta hai?',
      answer: 'Haan – Grade 1 aur Grade 2 BPH mein bina operation ke excellent control possible hai. Lifestyle changes, diet, pelvic exercises, aur homeopathic treatment se symptoms mein significant improvement dekhne ko milta hai. CCRH-affiliated studies mein Grade 1-2 BPH ke homeopathic patients mein IPSS (Prostate Symptom Score) mein 5-6 points ka reduction dekha gaya – jo clinically meaningful hai. Operation ki zaroorat tab padti hai jab Grade 3-4 BPH ho, acute urinary retention ho, ya kidney affect ho rahi ho. Isliye sahi waqt pe ilaaj shuru karo taaki surgery tak naubat na aaye.',
    },
    {
      _key: 'faq3',
      question: 'Prostate ka normal size kya hota hai – kitna bada hone pe BPH kehte hain?',
      answer: 'Normal prostate ka size 20-30 grams (akhrot jitna) hota hai. BPH mein ye 30 se 100+ grams tak bada ho sakta hai. Ultrasound se exact measurement hoti hai. Grade ke hisaab se – 30-40g = Grade 1, 40-60g = Grade 2, 60-80g = Grade 3, 80g+ = Grade 4. Lekin size se zyada important hai symptoms – kuch patients mein 60g prostate pe bhi zyada symptoms nahi, aur kuch mein 35g pe bhi severe obstruction. Isliye sirf size pe nahi, symptoms aur residual urine dono check hote hain.',
    },
    {
      _key: 'faq4',
      question: 'BPH aur prostate cancer mein kya fark hai – kaise pata chalega?',
      answer: 'BPH (Benign) aur Prostate Cancer dono alag conditions hain – aur BPH cancer nahi ban sakta. Lekin dono ke symptoms milte-julte hain isliye test zaroori hai. Fark yeh hai: BPH mein slow growth, non-cancerous, PSA mildly elevated; Cancer mein fast growth, PSA rapidly high, bone pain possible. PSA blood test + prostate biopsy (agar zaroorat ho) se cancer rule out hota hai. 40+ ke baad annual PSA test zaroori hai – ye ek simple blood test hai. Ghabrana nahi, sirf test karwana hai.',
    },
    {
      _key: 'faq5',
      question: 'BPH ki homeopathic medicine kaun si hai jo sabse zyada kaam karti hai?',
      answer: 'BPH mein sabse commonly prescribed homeopathic medicines hain Sabal Serrulata, Conium Maculatum, Thuja Occidentalis, Chimaphila Umbellata, aur Lycopodium. Inme se kaun si aapke liye sahi hai ye sirf aapke symptoms ka pattern dekh ke ek qualified homoeopath decide kar sakta hai – kyunki BPH ka type, severity, aur patient ka constitution sab different hota hai. Sabal Serrulata early BPH mein sabse zyada used hai kyunki iska prostate tissue pe direct affinity hai aur ye DHT (prostate growth trigger) ko modulate karta hai.',
    },
    {
      _key: 'faq6',
      question: 'BPH mein kya khana chahiye aur kya nahi – diet guide?',
      answer: 'BPH mein sabse helpful foods hain: pakke tamatar (lycopene), pumpkin seeds (zinc), broccoli, anar, flaxseeds aur green tea. Avoid karein: alcohol, coffee, red meat, processed food, cold drinks, aur zyada oily-spicy khana. Ek simple rule – jo cheez prostate irritate kare wo avoid, jo anti-inflammatory ho wo lo. Raat ko pani kam piyo (6-7 PM ke baad) – isse nocturia kaafi control hota hai. Diet change akela bhi BPH symptoms mein 20-30% improvement de sakta hai.',
    },
    {
      _key: 'faq7',
      question: 'Raat ko baar baar peshab kyon aata hai – nocturia ka ilaaj kya hai?',
      answer: 'Raat mein baar baar peshab (nocturia) BPH ka sabse common aur disturbing symptom hai. Ye is liye hota hai kyunki enlarged prostate se bladder poori khali nahi hoti – thoda thoda overflow hota rehta hai. Plus, lying down position mein kidney filtration badh jaati hai. Practical solutions: sham 6-7 PM ke baad fluids limit karo, sone se pehle "double void" karo (peshab karo, 2 minute wait, phir karo), room warm rakho. CCRH data ke anusaar homeopathic treatment mein 42% patients mein nocturia mein significant improvement dekha gaya – quality of life ke liye sabse important improvement.',
    },
    {
      _key: 'faq8',
      question: 'Prostate ke liye kaun sa yoga aur exercise best hai?',
      answer: 'BPH ke liye sabse effective exercises: Kegel exercises (pelvic floor) – roz 3 sets, bladder control directly improve karta hai. Vajrasana – khana khane ke baad 10-15 min; digestion aur pelvic blood flow dono improve hote hain. Butterfly pose (Baddha Konasana) – pelvic area ki stiffness aur congestion kam karta hai. Brisk walking 30-40 min daily – sabse simple aur effective. Swimming – low impact, excellent for prostate health. Avoid karo: heavy weightlifting, long hours cycling (seat pressure prostate pe), high-impact running initially. Yoga + daily walk + kegel = BPH management ka golden trio.',
    },
    {
      _key: 'faq9',
      question: 'PSA test kya hota hai aur BPH mein kyun karwana chahiye?',
      answer: 'PSA (Prostate Specific Antigen) ek blood test hai jo prostate ki activity measure karta hai. BPH mein PSA mildly elevated ho sakta hai – lekin prostate cancer mein rapidly high hota hai. Isliye ye test BPH confirm karne ke saath cancer rule out karne ke liye bhi zaroori hai. 40 ke baad annual PSA test routine health checkup mein add karein. Normal PSA: 0-4 ng/mL. 4-10 = grey zone (biopsy decide hoti hai symptoms ke saath), 10+ = high concern. PSA result akela diagnosis nahi hai – doctor ke saath discuss karo aur context mein samjho.',
    },
    {
      _key: 'faq10',
      question: 'BPH mein kaun si dawai nahi leni chahiye – kya avoid karein?',
      answer: 'BPH patients ke liye dangerous medicines jo avoid karni chahiye: Decongestants (pseudoephedrine) – cold medicines mein common; prostate muscles tighten karte hain, acute retention ka risk. Antihistamines (diphenhydramine) – allergy medicines; bladder contraction kam karte hain. Testosterone supplements ya anabolic steroids – prostate growth directly accelerate karte hain. Strong diuretics bina supervision ke – bladder pe extra strain. Koi bhi naya medicine lene se pehle doctor ko BPH ke baare mein zaroor batao.',
    },
    {
      _key: 'faq11',
      question: 'BPH mein kitne time mein fark dikhta hai – treatment kitni der chalti hai?',
      answer: 'Homeopathic treatment mein Grade 1-2 BPH ke patients mein typically 4-8 weeks mein pehla fark feel hona shuru hota hai – specially nocturia aur urgency mein. 3-6 months mein IPSS score meaningful way se improve hota hai. Long-term stable results ke liye 6-12 mahine ka course recommended hai. Ye depend karta hai ki prostate kitna bada hai, symptoms kitne purane hain, aur lifestyle changes kitne seriously liye jaate hain. Early shuru karo toh jitna jaldi results – Grade 4 se pehle consistent treatment se surgery avoid hoti hai most cases mein.',
    },
    {
      _key: 'faq12',
      question: 'Kya BPH se prostate cancer ho sakta hai?',
      answer: 'Nahi – BPH directly prostate cancer nahi banta. Ye do alag conditions hain. BPH cells benign (non-cancerous) hote hain aur malignant nahi bante. Lekin dono ek saath bhi ho sakti hain – ek insan ko BPH bhi aur early stage cancer bhi hona possible hai. Isliye 40+ ke baad annual PSA test aur prostate checkup important hai. Timely diagnosis se prostate cancer bhi highly treatable hai agar early catch ho. BPH hona = cancer nahi, lekin regular monitoring = peace of mind aur safety dono.',
    },
    {
      _key: 'faq13',
      question: 'Kya BPH mein chai ya coffee pi sakte hain?',
      answer: 'Koshish karo – BPH mein caffeine ek known bladder irritant hai. Coffee prostate ke symptom score aur urinary urgency dono badha sakti hai. Agar chhodna bahut mushkil ho to: max 1 cup subah, black ya green tea prefer karo, sham ke baad bilkul nahi. Green tea actually beneficial hai – EGCG antioxidants prostate ke liye protective hain. Strong kadak chai ki wo 2-3 cups ko reduce karna sabse bada practical improvement laata hai.',
    },
    {
      _key: 'faq14',
      question: 'BPH mein kab doctor ke paas turant jaana chahiye – emergency signs kya hain?',
      answer: 'Ye signs dikhein to turant doctor ya emergency mein jaao: peshab bilkul band ho gaya – ek boond bhi nahi (acute retention). Peshab mein blood zyada aana. Bukhaar ke saath peshab mein jalan – kidney infection ka sign. Pet ke neeche ya kamar mein tez dard. Haath-paon mein sujan + urine kam hona – kidney failure sign. Ye emergency situations hain – ghar pe rukna theek nahi, hospital jaana zaroori hai. In signs ka matlab hai condition ne Grade 3-4 level tak pahuncha hua hai ya complication aa gayi hai.',
    },
    {
      _key: 'faq15',
      question: 'Kya BPH mein sex life aur shaadi-shuda zindagi affect hoti hai?',
      answer: 'Haan – BPH aur uske treatment dono sexual function affect kar sakte hain. BPH mein ejaculation problems, reduced libido, aur erectile dysfunction zyada common hain. Conventional medicines (alpha blockers, 5-alpha reductase inhibitors) mein sexual side effects common hain. Homeopathic treatment ka ek important advantage ye hai ki is mein practically koi sexual side effects nahi hote. Khuli baat karo apne homoeopath se – sexual symptoms bhi BPH treatment ka part hain, ye ignore mat karo.',
    },
    {
      _key: 'faq16',
      question: 'BPH mein hot sitz bath kaam karta hai kya?',
      answer: 'Hot sitz bath (garam paani mein baithna) BPH mein symptom relief ke liye scientifically supported hai. Ye pelvic muscles relax karta hai aur prostate congestion kam karta hai – 10-15 min daily warm (not hot) sitz bath kaafi effective hai. Ghar pe safely kar sakte hain – nocturia aur pelvic pressure dono mein relief deta hai. Prostate self-massage ghar pe nahi karna chahiye – ye medical procedure hai jo sirf trained professional karte hain.',
    },
    {
      _key: 'faq17',
      question: 'BPH mein prostate ultrasound kitni baar karwani chahiye?',
      answer: 'Grade 1-2: Saal mein ek baar ultrasound aur PSA test. Grade 2-3: 6 mahine mein ek baar – size aur residual urine dono check karo. Homeopathic treatment ke dauran: pehla ultrasound treatment shuru karne se pehle, phir 3-4 mahine baad – improvement objectively confirm karo. Ultrasound mein prostate size ke saath post-void residual urine bhi check hoti hai – ye zyada important indicator hai. Regular monitoring se treatment ka response pata chalta hai aur complication early catch hota hai.',
    },
    {
      _key: 'faq18',
      question: 'Kya 30-40 saal ki umar mein BPH ho sakta hai?',
      answer: 'Technically BPH 40 se pehle bahut rare hai – ye primarily an age-related condition hai. 30-40 mein prostate symptoms hain to usually ye prostatitis (prostate inflammation) hoti hai, jo BPH se alag condition hai. Young men (20-35) mein urinary symptoms = prostatitis ya urinary infection zyada likely. Lekin lifestyle – obesity, sedentary life, poor diet – early 30s mein shuru ho jaaye to BPH ka risk 40+ mein significantly badh jaata hai. Young age mein prevention ke taur pe healthy lifestyle zaroori hai.',
    },
    {
      _key: 'faq19',
      question: 'BPH mein neend poori nahi hoti raat ke peshab ki wajah se – kya karein?',
      answer: 'Nocturia se disturbed sleep ek vicious cycle create karta hai – poor sleep se cortisol (stress hormone) badh ta hai jo prostate ko aur affect karta hai. Practical steps: bladder training – daytime mein thoda thoda wait karo, bladder capacity gradually improve hoti hai. 6 PM ke baad fluids strictly limit karo. Sone se 1 ghante pehle bathroom routine fix karo – double void karo. Sone ka room warm rakho. Agar 3+ baar raat mein uthna ho raha hai – urgently homoeopath ya urologist se milein.',
    },
    {
      _key: 'faq20',
      question: 'BPH ka IPSS score kya hota hai – kaise check karein?',
      answer: 'IPSS (International Prostate Symptom Score) ek 7-question validated questionnaire hai jo prostate symptoms ki severity measure karta hai. Har question 0-5 scale pe hota hai. Total score: 0-7 = Mild BPH, 8-19 = Moderate BPH, 20-35 = Severe BPH. Ye score doctor diagnose karne mein use karta hai aur treatment response track karne mein bhi. Homeopathic treatment ke results IPSS score se objectively measure kiye jaate hain. Apna IPSS score pata karo – ye aapko khud bhi samajhne mein help karega ki condition kahan hai.',
    },
    {
      _key: 'faq21',
      question: 'BPH mein weight loss kaam karta hai kya?',
      answer: 'Haan – aur ye underrated hai. Research clearly shows karta hai ki overweight men mein BPH symptoms zyada severe hote hain. Fat cells estrogen produce karte hain jo prostate ke androgen receptors ko stimulate karte hain. 5-10 kg weight loss bhi IPSS score mein 2-3 points reduction de sakta hai – clinically meaningful improvement. Exercise se jo weight loss hoti hai wo doubly beneficial hai kyunki exercise akele bhi prostate health improve karta hai. Healthy BMI maintain karna BPH management ka non-negotiable part hai.',
    },
    {
      _key: 'faq22',
      question: 'Kya homeopathy conventional BPH medicines (Tamsulosin, Finasteride) ke saath le sakte hain?',
      answer: 'Haan – homeopathy complementary hai, competing nahi. Jo patients already allopathic medicines le rahe hain woh homeopathic treatment add kar sakte hain – dono saath safe hain, kyunki homeopathic medicines highly diluted hoti hain aur drug interactions practically nahi hote. Kai patients aise hain jinke allopathic dose gradually reduce hua jab homeopathy ka response aaya. Lekin dose kabhi bhi khud mat change karo – doctor se coordinate karo.',
    },
    {
      _key: 'faq23',
      question: 'BPH ke liye permanently better rehne ke liye kya karna chahiye?',
      answer: 'Long-term BPH control ke liye ye 5 pillars follow karo: (1) Consistent homeopathic treatment – poora course complete karo, beech mein band mat karo. (2) Daily exercise – 30-40 min walk + kegel exercises; ye prostate health ka foundation hai. (3) Diet discipline – pumpkin seeds, tomatoes, green veg, no alcohol/coffee/red meat; long term mein prostate size stabilize karta hai. (4) Annual monitoring – PSA + ultrasound har saal; problem early catch karo. (5) Stress management – meditation ya pranayama daily 10 min. Jo log ye consistently follow karte hain, unme Grade 1-2 BPH saalon tak stable rehti hai aur surgery ki zaroorat nahi padti.',
    },
  ],

  relatedDiseases: [
    'Recurrent UTI',
    'Kidney Stone',
    'Diabetes',
    'Erectile Dysfunction',
    'Prostatitis',
  ],
}

async function seed() {
  try {
    const result = await client.createOrReplace(doc)
    console.log('✅ BPH created/updated:', result._id)
    console.log('🌐 Live at: https://homeopedia.in/diseases/bph')
  } catch (err) {
    console.error('❌ Error:', err)
  }
}

seed()
