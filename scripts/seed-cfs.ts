import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-chronic-fatigue-syndrome',
  _type: 'disease',
  title: 'Chronic Fatigue Syndrome (CFS)',
  hindiName: 'Chronic Thakan Rog / Lambai Thakan Bimari',
  slug: { _type: 'slug', current: 'chronic-fatigue-syndrome' },
  category: 'Mental',
  publishedAt: '2026-05-02T00:00:00.000Z',
  metaTitle: 'Chronic Fatigue Syndrome Treatment in Hindi | Homeopedia',
  metaDescription: 'Chronic Fatigue Syndrome ke causes, types, homeopathic treatment, diet chart aur recovery tips — simple Hinglish mein. Verified, doctor-reviewed.',
  heroText: 'Chronic Fatigue Syndrome (CFS) — jise Myalgic Encephalomyelitis (ME) bhi kehte hain — ek aisi bimari hai jisme extreme, debilitating thakaan 6 mahine se zyada rehti hai aur rest karne ke baad bhi theek nahi hoti. Ye sirf "zyada kaam ki wajah se thakaan" nahi hai — ye ek real medical condition hai jisme brain, immune system aur nervous system teeno affected hote hain. Thakaan ke saath brain fog, body dard, aur neend ke baad bhi fresh feel na karna — ye hallmark signs hain. India mein isko aksar depression ya laziness samajh liya jaata hai, jo ek badi galati hai. Sahi diagnosis aur individualized homeopathic treatment se CFS mein bahut had tak improvement possible hai.',

  quickFacts: {
    whatItIs: 'Extreme thakaan jo 6+ mahine se ho, rest se na jaaye, aur Post-Exertional Malaise ke saath aaye — ye CFS ki defining features hain',
    howCommon: 'Global prevalence lagbhag 0.3-1% (WHO data); India mein Post-COVID ke baad cases significantly increase hue hain',
    treatmentDuration: 'Mild CFS: 6-12 mahine mein significant improvement | Moderate-severe: 1-2+ saal sustained treatment | Initial changes 6-8 weeks mein feel hone lagte hain',
  },

  causes: [
    'Viral infection ke baad immune dysregulation — body ka immune system theek se "off" nahi hota (sabse common trigger; COVID-19, EBV, dengue sab trigger kar sakte hain)',
    'Mitochondrial dysfunction — body ki cells mein energy production mechanism kharab ho jaata hai jisse har kaam ke liye zyada mehnat lagti hai',
    'HPA axis (Hypothalamic-Pituitary-Adrenal) ka imbalance — stress hormones ka irregular pattern banta hai jo fatigue cycle create karta hai',
    'Gut microbiome disturbance — intestinal bacteria ka imbalance nervous system aur energy levels ko directly affect karta hai',
    'Neuroinflammation — brain mein subclinical inflammation jo cognitive symptoms (brain fog, memory problems) create karta hai',
    'Genetic predisposition + environmental trigger — family history ho aur phir koi trigger (infection, trauma, prolonged stress) aaye to CFS develop hone ka risk badhta hai',
  ],

  riskFactors: [
    '20-40 saal ki women — men ke comparison mein 2-4x zyada affected hoti hain',
    'Viral infection ke baad jo poori tarah recover nahi hue — Epstein-Barr, COVID-19, influenza, dengue',
    'High-stress professionals ya caregivers — jo khud ki self-care consistently ignore karte hain',
    'Autoimmune condition history — thyroid, lupus, rheumatoid arthritis',
    'Anxious ya perfectionist personality type — overworking aur burnout cycle',
    'Post-COVID Long COVID patients — India mein abhi ye ek major emerging risk group hai',
  ],

  complications: [
    'Social isolation aur career loss — kaam karne ki capacity itni girti hai ki job ya studies chhodni pad sakti hai',
    'Secondary depression aur anxiety — lamba suffering mental health ko seriously affect karta hai',
    'Post-Exertional Malaise (PEM) ka worsening — bina sahi management ke har activity ke baad condition aur buri hoti jaati hai',
    'Complete bedbound state (severe CFS) — small percentage mein patient itna debilitated ho jaata hai ki basic daily activities bhi impossible ho jaati hain',
  ],

  types: [
    {
      _key: 'type1',
      name: 'Mild CFS',
      description: 'Kaam aur social life thodi reduce hoti hai. Zyada rest lene par kuch ghanton ke liye theek lagta hai. Ye sabse manageable form hai — early intervention se best results milte hain. Patient usually light work kar sakta hai lekin puri capacity se nahi.',
    },
    {
      _key: 'type2',
      name: 'Moderate CFS',
      description: 'Mobility significantly affected. Subah uthna mushkil. School ya office jaana regularly possible nahi. Activity ke baad "crash" — 1-2 din aur bura lagta hai (Post-Exertional Malaise). Rest periods diurnal routine ka hissa ban jaate hain.',
    },
    {
      _key: 'type3',
      name: 'Severe CFS',
      description: 'Ghar se bahar jaana almost impossible. Mostly bedbound. Roshni (light) aur awaaz (noise) se bhi takleef (sensory sensitivity). Ye rare form hai lekin seriously debilitating hai — basic daily activities ke liye bhi help chahiye.',
    },
    {
      _key: 'type4',
      name: 'Post-Viral CFS',
      description: 'Kisi specific viral infection (COVID-19, EBV, dengue) ke baad develop hota hai. India mein Post-COVID CFS ke cases kafi badh gaye hain. Isme recovery trajectory thodi different hoti hai — immune reset zyada important role play karta hai.',
    },
    {
      _key: 'type5',
      name: 'CFS with Fibromyalgia Overlap',
      description: 'Body-wide pain + fatigue ka combination. Dono conditions saath exist kar sakti hain — aur dono ke liye treatment overlap karta hai. India mein ye combination underdiagnosed hai. Isme widespread tender points bhi hote hain CFS symptoms ke saath.',
    },
  ],

  medicines: [
    {
      _key: 'med1',
      name: 'Kali Phosphoricum',
      indicatedFor: 'Jinhe mental kaam ke baad extreme thakaan ho, brain fog ho, neend disturbed ho, aur jo naturally anxious ya nervous temperament ke hain.',
      whyItHelps: 'Kali Phos CFS ka sabse commonly prescribed medicine hai. Ye nervous system ki exhaustion ko address karta hai — brain fog, concentration problems aur post-exertional crash — teeno mein kaam karta hai. Isko "nerve tonic of homeopathy" kehte hain. Students, professionals aur mental workers ke liye especially effective.',
    },
    {
      _key: 'med2',
      name: 'Gelsemium Sempervirens',
      indicatedFor: 'Jinhe viral infection (flu, COVID, dengue) ke baad fatigue start hua ho. Haath-paon mein heavy feel, aankhon mein weight, aur dread/anticipation anxiety.',
      whyItHelps: 'Gelsemium post-viral CFS mein bahut effective hai. Ye nervous system aur muscular weakness dono ko address karta hai — especially jab onset clearly ek infection ke baad hua ho. Post-COVID fatigue mein bhi isko commonly use kiya jaa raha hai. "Heavy, droopy, drowsy" feeling iska characteristic presentation hai.',
    },
    {
      _key: 'med3',
      name: 'Arsenicum Album',
      indicatedFor: 'Jinhe thakaan ke saath anxiety, restlessness, raat ko 1-3 baje takleef badhe, aur jo health ke baare mein zyada worried rehte hain.',
      whyItHelps: 'Arsenicum Album CFS mein immune dysregulation aur anxiety ka combination treat karta hai. Ye un patients ke liye khaas hai jinki fatigue mental distress se aur badh jaati hai — ek common pattern CFS mein. Perfectionist aur anxious personality type ke liye ideal remedy hai.',
    },
    {
      _key: 'med4',
      name: 'Phosphoric Acid',
      indicatedFor: 'Jinhe emotional shock, grief, ya prolonged stress ke baad CFS develop hua ho. Apathy — na khushi, na dard, sirf numbness aur thakaan.',
      whyItHelps: 'Phosphoric Acid emotional aur physical exhaustion dono ke combination ke liye specific hai. Jab koi bada loss (job, relationship, bereavement) CFS trigger kare — ye medicine uss root cause pe kaam karti hai. Indifferent, expressionless, apathetic state CFS patients ke liye characteristic presentation hai.',
    },
    {
      _key: 'med5',
      name: 'Picric Acid',
      indicatedFor: 'Students, professionals, ya jin logon ko intense mental work ke baad complete breakdown ho jaye. "Brain fag" — padhna aur sochna impossible lagta hai.',
      whyItHelps: 'Picric Acid intellectual exhaustion ki specific medicine hai. Jab brain forced overdrive mein raha ho — exams, deadlines, high-pressure job — aur phir complete mental crash aaye, tab ye kaam karta hai. CFS mein cognitive symptoms dominant hone par ye sabse useful choices mein se hai.',
    },
  ],

  diet: {
    recommended: [
      'Brown rice / jowar / bajra — slow-release carbs jo blood sugar crash avoid karte hain, jisse energy stable rehti hai',
      'Banana — natural potassium + quick energy, morning thakaan mein especially helpful',
      'Sweet potato — complex carbs + B6 vitamin jo nerve function support karta hai',
      'Haldi doodh (golden milk) — curcumin neuroinflammation reduce karta hai jo CFS ka ek core mechanism hai',
      'Amla / Indian gooseberry — Vitamin C se immune system strengthen hota hai, mitochondrial function bhi support karta hai',
      'Spinach, palak, methi — iron + folate se red blood cell function theek hoti hai, jo oxygen delivery improve karta hai',
      'Walnuts (akhrot) — Omega-3 jo brain fog aur neuroinflammation dono mein helpful hai',
      'Homemade curd / dahi — probiotics gut-brain axis balance karte hain, jo CFS mein significantly disturbed hota hai',
      'Moong dal — easily digestible protein jo digestive energy waste nahi karta',
      'Ginger tea (adrak chai, kam chaini) — gut motility aur anti-inflammatory dono benefits',
    ],
    avoid: [
      'Maida, white bread, biscuits, namkeen — refined carbs blood sugar spike-crash create karte hain jo CFS crash ko aur bura banate hain',
      'Packaged fruit juices aur cold drinks — fructose overload liver ko stress deta hai, fatigue aur badhti hai',
      'Mithai aur sweets (zyada matra mein) — sugar high ke baad energy drop CFS patients ke liye particularly harmful hai',
      'Fried foods (pakode, samosa, chips) — trans fats systemic inflammation badhate hain',
      'Excess chai / coffee — short-term energy deta hai lekin adrenal glands ko exhaust karta hai, jo CFS mein already stressed hoti hain',
      'Alcohol — gut microbiome destroy karta hai aur neend quality kharab karta hai, dono CFS mein harmful',
      'Very spicy food — gut inflammation aggravate karta hai',
      'Cold + raw foods in excess — digestive system ko zyada energy lagti hai, jo CFS patients afford nahi kar sakte',
    ],
  },

  seasonalCare: [
    {
      _key: 'summer',
      season: 'Garmi (March - June)',
      tips: 'Hydration sabse zaroori — CFS mein dehydration fatigue ko instantly worsen karta hai. Din mein 8-10 glass paani. Coconut water, nimbu paani (sugar kam) se electrolytes maintain karein. Dopahar mein zyada activity avoid karein — energy conservation principle follow karein. Haldi doodh raat ko band nahi karna, bas ek pinch haldi se zyada nahi.',
    },
    {
      _key: 'monsoon',
      season: 'Barsaat (July - September)',
      tips: 'Monsoon mein viral infections ka risk badh jaata hai — jo CFS ko significantly worsen kar sakta hai. Raw salads aur bahar ka khana avoid karein — gut infections CFS crash trigger karte hain. Ghar mein probiotic-rich foods (dahi, kanji) regularly lein. Mood worsening monsoon mein common hai CFS patients mein — subah ki dhoop (10-15 min) helpful hai.',
    },
    {
      _key: 'winter',
      season: 'Sardi (October - February)',
      tips: 'Sardiyon mein body warmth maintain karne mein zyada energy lagati hai — layering kapdon ki helpful strategy hai. Joint aur muscle pain sardi mein badh sakta hai — warm sesame oil massage beneficial hai. Vitamin D deficiency sardi mein worsen hoti hai jo CFS symptoms aur bura karta hai — sunlight exposure subah 15-20 min crucial hai. Early dinner (7 baje ke pehle) aur early sleep (10 baje ke pehle) helpful hai.',
    },
  ],

  dosDonts: {
    dos: [
      'Pacing technique seekhein — har din ek fixed "energy budget" ke hisaab se kaam karein; boom-bust cycle (zyada kaam phir crash) se bachna sabse important management tool hai',
      'Sleep hygiene strictly follow karein — ek fixed time pe sona aur uthna, screen-free bedroom; neend CFS ka foundation hai',
      'Graded activity doctor-guided karein — bahut dheere dheere activity increase karein; koi bhi exercise program physician ki guidance mein karein',
      'Stress management daily routine mein daalein — 10-15 min deep breathing, meditation ya gentle yoga (Savasana, Viparita Karani); cortisol control CFS recovery ka core element hai',
      'Symptom diary rakhein — triggers track karein (food, activity, stress, weather); pattern samajhne se treatment zyada precise hoti hai',
      'Social support maintain karein — family ko explain karein ki ye real medical condition hai, laziness nahi; isolation CFS ko worse karta hai',
    ],
    donts: [
      '"Kal se zyada kaam karke recover karlunga" wali soch mat rakhein — CFS mein push-through approach condition worsen karta hai, Post-Exertional Malaise badhti hai',
      'Random supplements ya energy drinks mat lein — caffeine aur stimulants short-term relief dete hain aur long-term adrenal exhaustion badhate hain',
      'Symptom-based self-treatment mat karein — 6+ mahine se thakaan hai to professional evaluation zaroori hai, ignore mat karein',
      'Raat bhar jaagna ya sleep schedule disturb mat karein — CFS mein circadian rhythm disruption condition ka ek core feature hai',
      'Vigorous exercise directly mat shuru karein — gym, running, HIIT CFS patients mein severe crash trigger karte hain; exercise graded honi chahiye',
      'Comparison mat karein — "mera dost itna kaam karta hai, main kyun nahi" — CFS ek real physiological condition hai, willpower ki kami nahi',
    ],
  },

  faqs: [
    {
      _key: 'faq1',
      question: 'Chronic Fatigue Syndrome kya hota hai aur ye normal thakaan se kaise alag hai?',
      answer: 'Chronic Fatigue Syndrome (CFS) ek medical condition hai jisme extreme thakaan 6 mahine se zyada rehti hai — aur ye thakaan rest karne se bilkul nahi jaati. Normal thakaan sleep aur rest se theek ho jaati hai; CFS mein raat bhar sokar uthne ke baad bhi aap utna hi thaka hua feel karte hain. Iske saath brain fog, body dard, aur "activity ke baad 24-48 ghante aur bura lagna" (Post-Exertional Malaise) bhi hote hain. Agar sirf thakaan hai bina in additional symptoms ke — to pehle thyroid, anemia ya diabetes rule out karein.',
    },
    {
      _key: 'faq2',
      question: 'CFS ka homeopathic treatment kya hai? Kya kaam karta hai?',
      answer: 'Haan — homeopathy CFS mein ek effective treatment hai, especially jab individualized ho. CFS mein conventional medicine sirf symptoms manage karti hai — koi established cure nahi hai. Homeopathy ka advantage ye hai ki ye patient ki poori picture dekhta hai: thakaan kab badhti hai, neend kaisi hai, emotionally kaisa affect karta hai, onset kab hua — sab milake remedy decide hoti hai. Kali Phosphoricum, Gelsemium, Arsenicum Album, Phosphoric Acid commonly use hoti hain. CCRH-affiliated studies mein fatigue severity, cognitive function aur sleep quality — teeno mein improvement dekha gaya. Ek qualified homoeopath se milein jo aapka individual case dekhke treatment plan banaye.',
    },
    {
      _key: 'faq3',
      question: 'Chronic Fatigue Syndrome permanently theek ho sakti hai? Ya hamesha rehti hai?',
      answer: 'Permanent aur sustained recovery bilkul possible hai — sahi treatment, pacing, aur lifestyle management se. Kuch patients complete functional recovery paate hain; kuch mein symptoms significantly reduce ho jaate hain aur life normal ho jaati hai. Jo log early diagnosis paate hain, triggers seriously lete hain, aur consistent treatment pe tike rehte hain — unme outcomes best hote hain. Severe CFS mein time zyada lagta hai, lekin improvement hoti hai. Homeopathy is mein ek important role play karta hai kyunki ye immune system, nervous system aur energy metabolism teeno ko simultaneously address karta hai.',
    },
    {
      _key: 'faq4',
      question: 'Post-COVID fatigue aur Chronic Fatigue Syndrome mein kya farak hai?',
      answer: 'Post-COVID fatigue aur CFS kaafi similar hote hain — aur actually Long COVID wale bahut se patients CFS criteria meet karte hain. Difference ye hai: Post-COVID fatigue specifically COVID-19 infection ke baad aata hai aur kuch cases mein 3-6 mahine mein theek ho jaata hai. Agar COVID ke baad thakaan, brain fog aur PEM 6+ mahine se hai aur improve nahi ho rahi — tab clinically ye CFS ban jaata hai. Treatment approach dono mein similar hai — immune support, pacing, aur homeopathy mein Gelsemium jaise post-viral remedies khaas role play karte hain.',
    },
    {
      _key: 'faq5',
      question: 'CFS aur depression mein kya fark hai? Ek jaisa lagta hai dono mein...',
      answer: 'Dono mein thakaan aur motivation ki kami hoti hai — lekin critical difference ye hai: CFS mein Post-Exertional Malaise hota hai (kaam karne ke baad 24-48 ghante aur bura lagna), jo depression mein nahi hota. CFS mein physical symptoms zyada prominent hote hain — muscle dard, sore throat, lymph nodes, orthostatic intolerance. Depression mein sadness, hopelessness, guilt zyada hoti hai. Importantly — dono saath bhi exist kar sakte hain. CFS mein secondary depression aa sakta hai. Isliye dono ke liye alag diagnosis aur approach chahiye — antidepressants akele CFS theek nahi karte.',
    },
    {
      _key: 'faq6',
      question: 'CFS mein kya tests karwane chahiye? Diagnosis kaise hoti hai?',
      answer: 'CFS ka koi ek specific blood test nahi hai — diagnosis "exclusion" se hoti hai, matlab pehle baaki causes rule out karte hain. Zaroori tests: Complete Blood Count (CBC), Thyroid function (TSH, T3, T4), Blood sugar (HbA1c), Vitamin B12 aur D levels, Iron studies (ferritin), Liver aur kidney function. Agar sab normal hain aur 6+ mahine se thakaan, PEM, brain fog aur neend problems hain — tab CFS diagnosis consider hota hai (CDC ke 2015 criteria ke hisaab se). India mein CFS diagnosis ke liye internal medicine specialist ya neurologist se milein.',
    },
    {
      _key: 'faq7',
      question: 'Thyroid aur CFS mein difference kaise pata chalega? Dono mein thakaan hoti hai na?',
      answer: 'Bilkul sahi — dono mein thakaan common symptom hai. Key differences: Thyroid (hypothyroid): Weight gain, constipation, thand zyada lagti hai, hair fall, dry skin — ye specific signs hain. TSH blood test se clearly diagnose hota hai. CFS: Post-Exertional Malaise (activity ke baad crash) — ye thyroid mein nahi hota. Brain fog, PEM, aur sleep unrefreshing hona CFS ke specific markers hain. Practically: Pehle thyroid test karwao. Agar normal hai aur symptoms 6+ mahine se hain — CFS evaluation karo. Dono saath bhi ho sakta hai, isliye doctor se complete evaluation zaroori hai.',
    },
    {
      _key: 'faq8',
      question: 'Bacchon mein Chronic Fatigue Syndrome hoti hai kya? Kaise pehchantein hain?',
      answer: 'Haan — children aur teenagers mein CFS hota hai, aur often undiagnosed rehta hai kyunki log samajhte hain ki "ye toh bas school se bhaag raha hai." Bacchon mein signs: School attendance drop karna, sports aur activities mein participate na kar paana, teachers ya parents ko "lazy" lagta hai, headaches + abdominal pain + thakaan saath mein. Adolescent girls mein zyada common hai. Bacchon mein pacing aur sleep management adult se thoda different hota hai — ek experienced homoeopath ya paediatrician se milein jo CFS-aware ho.',
    },
    {
      _key: 'faq9',
      question: 'CFS mein exercise karein ya bilkul nahi?',
      answer: 'Ye CFS ki sabse critical question hai. Gym, running ya intense exercise CFS mein HARMFUL hai — especially bina guidance ke. "Push through" karne se Post-Exertional Malaise trigger hota hai aur condition worsen hoti hai. Kya karna chahiye: Pehle ek stable baseline achieve karein jahan daily activities manageable hoon. Phir very slowly gentle movement add karein — 5-10 min walking, gentle stretching, restorative yoga (Savasana, Viparita Karani). Kisi physiotherapist se Graded Exercise Therapy ko leke discuss karein — aur ye doctor ki guidance mein hi karein.',
    },
    {
      _key: 'faq10',
      question: 'CFS ka Ayurvedic ya Homeopathic ilaaj — kaunsa better hai India mein?',
      answer: 'Dono traditional systems CFS mein helpful hain, aur dono ka approach different hai. Ayurveda mein CFS ko "Ojas ki kami" ya Vata imbalance se relate kiya jaata hai — Ashwagandha, Shatavari, Brahmi common treatments hain. Homeopathy mein individualized remedies — Kali Phos, Gelsemium, Arsenicum — nervous system aur immune function ko address karte hain. Practically: Dono ko simultaneously lena advisable nahi — ek practitioner se ek coherent treatment plan lein. Homeopathy ka advantage ye hai ki post-viral angle (COVID, dengue ke baad CFS) mein individualization depth mein hoti hai.',
    },
    {
      _key: 'faq11',
      question: 'CFS aur Fibromyalgia mein kya antar hai? Kya dono saath ho sakte hain?',
      answer: 'Haan — dono saath ho sakte hain, aur India mein ye combination underdiagnosed hai. Main difference: CFS: Primary complaint extreme fatigue + Post-Exertional Malaise + cognitive symptoms. Fibromyalgia: Primary complaint widespread body pain + tender points + sleep disturbance. Overlap: Dono mein thakaan hoti hai, dono mein sleep problems hoti hain, dono mein cognitive difficulties ho sakti hain. Agar dono saath hain to treatment plan thoda zyada complex hoga — homeopathy mein aise cases mein individual case analysis aur dekhke remedy decide ki jaati hai.',
    },
    {
      _key: 'faq12',
      question: 'CFS mein neend nahi aati ya bahut zyada aati hai — dono possible hain kya?',
      answer: 'Bilkul — dono possible hain, aur dono CFS ke valid presentations hain. Unrefreshing sleep (raat bhar sokar bhi fresh feel na karna) CFS ka hallmark hai. Kuch patients hypersomnia (bahut zyada neend) report karte hain, kuch insomnia (neend hi nahi aati). Kuch mein dono alternate karte hain. Ye sleep dysfunction CFS mein central nervous system dysregulation ki wajah se hota hai. Homeopathy mein sleep pattern bhi case-taking ka important part hota hai — Coffea Cruda (insomnia), Nux Vomica (early morning waking), Kali Phos (neend ke baad bhi fresh nahi) — sab alag situations ke liye alag remedies.',
    },
    {
      _key: 'faq13',
      question: 'CFS ke liye diet mein kya khana chahiye aur kya bilkul nahi?',
      answer: 'CFS mein diet ka goal hai: stable blood sugar maintain karna, gut health theek rakhna, aur inflammation reduce karna — kyunki ye teeno CFS symptoms ko directly affect karte hain. Khayein: Brown rice, moong dal, dahi, haldi doodh, amla, akhrot (walnuts), banana, sweet potato, palak. Na khayein: Maida-based foods, packaged juices, fried food, excess chai/coffee, alcohol, bahut spicy khana. Practical tip: Din mein 5-6 chhote chhote meals lein — ek baar mein zyada khaana bhi fatigue trigger kar sakta hai. Warm aur easy-to-digest foods CFS patients ke liye best hain.',
    },
    {
      _key: 'faq14',
      question: 'Kya CFS mein chai aur coffee band karni padti hai?',
      answer: 'Completely band karna zaroori nahi — lekin significantly reduce karna helpful hai. Chai aur coffee short-term energy deti hain lekin adrenal glands ko stress karti hain — jo CFS mein already dysregulated hoti hain. "Caffeine crash" CFS patients mein zyada pronounced hota hai. Practical approach: Subah ek cup adrak-tulsi chai okay hai, zyada nahi. Afternoon coffee avoid karein — ye neend quality worsen karta hai. Replace karein: Haldi doodh, tulsi chai (caffeine-free), amla juice — ye energy stable rakhte hain without the crash.',
    },
    {
      _key: 'faq15',
      question: 'Kya Chronic Fatigue Syndrome ka gharelu ilaaj ho sakta hai?',
      answer: 'Ghar pe kuch important steps liye ja sakte hain jo CFS management mein bahut help karte hain: (1) Pacing: Roz ek fixed "energy budget" follow karein — boom-bust cycle avoid karein. (2) Sleep schedule fix karein: Ek time pe sona-uthna, screen-off 1 ghante pehle. (3) Haldi doodh raat ko: Curcumin neuroinflammation reduce karta hai. (4) 10-min gentle walk subah — graded, forced nahi. (5) Stress journaling: Triggers note karein. Lekin — gharelu remedies akele sufficient nahi hain. 6+ mahine se thakaan hai to professional evaluation zaroori hai. Homeopathic treatment ke saath lifestyle changes best results dete hain.',
    },
    {
      _key: 'faq16',
      question: 'CFS kitne time mein theek hoti hai? Recovery mein kitna time lagta hai?',
      answer: 'Honestly — recovery time individual hoti hai aur ek fixed timeline nahi diya ja sakta. Mild CFS mein sahi treatment aur pacing se 6-12 mahine mein significant improvement possible hai. Moderate CFS mein 1-2 saal ka sustained effort lagta hai. Severe CFS mein zyada time lag sakta hai. Homeopathic treatment mein initial changes 6-8 weeks mein feel hone lagti hain — better sleep, reduced brain fog — aur phir dheere dheere energy levels improve hoti hain. Jo log consistent treatment + lifestyle changes follow karte hain, unme outcomes consistently better hain.',
    },
    {
      _key: 'faq17',
      question: 'CFS mein kaunse tests se pata chalta hai ki improvement ho rahi hai?',
      answer: 'CFS mein objective improvement ke indicators: (1) Fatigue Severity Scale (FSS) — ye validated questionnaire fatigue level measure karta hai; score decrease = improvement. (2) Activity tolerance — kitna kaam kar sakte hain bina crash ke. (3) Sleep quality — uthkar fresh feel karna. (4) Cognitive function — concentration aur memory. (5) Heart rate during activity — orthostatic intolerance improve hona. Blood tests (Vitamin D, B12, thyroid) — ensure karein ye optimal range mein hain. Homeopathic treatment mein ye sab parameters track karna zaroori hai — sirf "better lagta hai" nahi, specific improvement markers rakhein.',
    },
    {
      _key: 'faq18',
      question: 'CFS aur anxiety/stress mein kya relationship hai? Stress se CFS worse hoti hai?',
      answer: 'Haan — stress CFS ka ek major trigger aur worsen karne wala factor hai. HPA axis (body ka stress response system) CFS mein already dysregulated hota hai — aur additional stress isko further imbalance karta hai. Ye ek vicious cycle create karta hai: thakaan — anxiety — aur thakaan. Lekin ye clearly samajhna zaroori hai — CFS anxiety ki "wajah" se nahi hoti. Ye ek real physiological condition hai. Stress management isliye important hai kyunki ye body ke repair mechanism ko better work karne deta hai. Homeopathy mein stress-fatigue connection bhi case-taking ka important part hota hai.',
    },
    {
      _key: 'faq19',
      question: 'Pregnancy mein CFS hai to kya karna chahiye?',
      answer: 'Pregnancy mein CFS management ke liye specialist supervision essential hai. Conventional CFS medicines — pregnancy safety ke hisaab se doctor se review karwayein. Diet pe zyada focus karein — iron, B12, folate deficiency CFS symptoms pregnancy mein aur badha sakti hai. Rest aur pacing pregnancy mein aur bhi important hai. Homeopathy pregnancy mein generally safe maani jaati hai — diluted medicines fetus ko affect nahi karti — lekin registered homoeopath se hi treatment lein. Turant doctor se milein agar symptoms rapidly worsen hoon.',
    },
    {
      _key: 'faq20',
      question: 'CFS mein kaam pe kaise jaayein? Job maintain karna mushkil ho jaata hai?',
      answer: 'CFS patients ke liye work management ek real challenge hai. Kuch strategies: Flexible working hours ya work-from-home — agar possible ho to HR se discuss karein. Energy-intense tasks subah karein — energy CFS mein typically morning mein best hoti hai. Meetings ke beech mein scheduled rest lein. Long commutes reduce karein — ye alone major energy drain hai. Apne manager ko medical condition explain karna emotional burden reduce karta hai. Ek CFS-aware doctor se letter lena workplace accommodations mein help karta hai.',
    },
    {
      _key: 'faq21',
      question: 'CFS aur Multiple Sclerosis (MS) mein antar kya hai? Dono mein fatigue hoti hai?',
      answer: 'Haan, dono mein fatigue common symptom hai — lekin critical differences hain. MS ek autoimmune demyelinating disease hai jisme MRI pe brain aur spinal cord lesions dikhte hain — ye CFS mein nahi hota. MS mein specific neurological signs hote hain: visual problems, limb weakness, coordination issues, bladder problems. CFS mein ye typically nahi hote. Agar CFS jaisi symptoms ke saath visual changes, limb weakness ya coordination problems hain — immediately neurologist se milein; MRI karwana zaroori ho sakta hai. CFS mein MRI normal aata hai.',
    },
    {
      _key: 'faq22',
      question: 'CFS ke liye Vitamin D aur B12 kitna important hai? Supplement lena chahiye?',
      answer: 'Bahut important — aur India mein deficiency bahut common hai. Vitamin D deficiency CFS symptoms aur worsen karta hai — especially fatigue, pain, aur mood. B12 deficiency (India mein vegetarians mein kafi common) brain fog aur nerve function ko directly affect karta hai. Kya karein: Pehle test karwayein — 25-OH Vitamin D aur Serum B12. Agar deficient hain to doctor ki guidance mein supplement lein. Bina test ke random supplementation avoid karein — excess bhi harmful ho sakta hai. Vitamin D ke liye subah 15-20 min sunlight bhi helpful hai.',
    },
    {
      _key: 'faq23',
      question: 'CFS mein social life completely khatam ho jaati hai? Kaise cope karein?',
      answer: 'CFS mein social isolation ek real challenge hai — aur ye condition ko aur worse karta hai. Practically: Pacing apply karein social activities mein bhi — har event mein jaana zaroori nahi, chuno kya important hai. "Energy envelope" concept: Har din ki energy limit ke andar social interaction plan karein. Online connections — person milne ki energy nahi hai to video calls aur messaging se contact rakhein. Family ko educate karein — unhe samjhao ki ye laziness nahi hai. CFS support groups — India mein bhi online communities hain — inka part banna helpful hai.',
    },
    {
      _key: 'faq24',
      question: 'CFS mein doctor ke paas turant jaana kabh zaroori hai? Emergency signs kya hain?',
      answer: 'CFS ek chronic condition hai, lekin kuch signs hain jo immediate medical attention maangti hain: Chest pain ya breathlessness — heart ya lung problem rule out karna zaroori hai. Sudden severe headache ya neck stiffness — meningitis ya serious neurological issue possible. Limb weakness, vision loss ya coordination problems — MS ya stroke jaisi serious conditions rule out karein. Rapid unexplained weight loss — thyroid ya malignancy evaluation zaroori. High fever with rash — infectious cause check karein. Severe depression ya suicidal thoughts — immediate mental health support lein. Agar koi bhi ye symptoms hain, CFS diagnosis pe rely mat karein — pehle emergency evaluation karwayein.',
    },
    {
      _key: 'faq25',
      question: 'CFS wale logon ko kya bolein jo samjhte nahi — "ye sab dimag ki baat hai, thakaan toh sabko hoti hai"?',
      answer: 'Ye ek bahut real aur frustrating experience hai — aur aap akele nahi hain is mein. CFS ek medically recognized condition hai — WHO ICD-10 (G93.3) mein classified hai. Research clearly show karta hai ki CFS patients mein immune dysfunction, mitochondrial abnormalities, aur HPA axis dysregulation — sab objective, measurable hain. Family ko explain karne ke liye: "Mere body ki energy production mechanism properly kaam nahi kar rahi — ye ek real physiological problem hai jisme brain, immune system aur nervous system teeno affected hain." Ek CFS-aware doctor ka letter lena bhi helpful hota hai jo family ko medical language mein explain kare.',
    },
  ],

  sources: [
    'CDC — Myalgic Encephalomyelitis/Chronic Fatigue Syndrome (ME/CFS) | 2021 | cdc.gov/me-cfs',
    'CCRH India — Clinical Research on Chronic Fatigue States | ccrhindia.nic.in',
    'Institute of Medicine (IOM) Report — "Beyond Myalgic Encephalomyelitis/Chronic Fatigue Syndrome" | 2015',
    'Integrative Medicine: A Clinician\'s Journal — Individualized Homeopathy in CFS (pilot study) | 2011',
    'National Institute for Health and Care Excellence (NICE) — ME/CFS Guidelines | 2021 | nice.org.uk',
    'World Health Organization — ICD-10 Classification G93.3 (Post-viral fatigue syndrome) | who.int',
  ],

  doctorNote: 'Mere clinic mein CFS ke sabse zyada cases post-viral hain — COVID ke baad aur dengue ke baad bhi. In patients mein Gelsemium aur Kali Phos ne consistently acche results diye hain, especially jab neend aur brain fog dono address ho. Pacing ka concept patient ko sahi se samjhana — ye homeopathic treatment se utna hi zaroori hai. — Dr. Shadab, Homeopedia.in',
}

async function seed() {
  console.log('Seeding Chronic Fatigue Syndrome (CFS)...')
  await client.createOrReplace(doc)
  console.log('✅ Done! disease-chronic-fatigue-syndrome seeded.')
}

seed()
