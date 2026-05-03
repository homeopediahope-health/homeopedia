import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-autism',
  _type: 'disease',
  slug: { _type: 'slug', current: 'autism' },
  title: 'Autism Spectrum Disorder (ASD)',
  hindiName: 'Swavikasit Manovikar / Autism (ऑटिज्म)',
  category: "Children's",
  seoTitle: 'Autism in Hindi – Lakshan, Karan aur Homeopathic Treatment',
  seoDescription: 'Autism (ASD) ke early signs, types, causes, diet plan aur homeopathic treatment guide – simple Hinglish mein. Verified info, doctor-reviewed.',
  whatIsIt: `Autism Spectrum Disorder (ASD) ek neurodevelopmental condition hai jisme bachche ka brain development alag tarike se hota hai — jisme social communication, behavior, aur learning affected hoti hai. Ye "spectrum" isliye kaha jaata hai kyunki koi do autistic bachche bilkul ek jaise nahi hote — kisi mein hafif (mild) symptoms hote hain, kisi mein zyada. Yeh koi bimari nahi hai jo "ho gayi" — yeh brain wiring ka ek distinct pattern hai. Sahi support, therapy aur treatment se autistic bachche apni full potential tak pahunch sakte hain.\n\nNote: India mein lakhs families is challenge se guzar rahi hain — aur jitni jaldi awareness aur intervention ho, utna behtar outcome milta hai.`,

  types: [
    {
      _key: 'type1',
      name: 'Classic Autism (Kanner\'s Autism)',
      description: 'Zyada evident symptoms — speech delay ya absence, strong repetitive behaviors, social interaction mein significant difficulty, sensory sensitivity high hoti hai. Early intervention se bahut fark padta hai.',
    },
    {
      _key: 'type2',
      name: 'Asperger Syndrome (High-Functioning Autism)',
      description: 'Koi significant speech delay nahi hoti, intelligence average ya above average hoti hai. Social cues samajhne mein mushkil lekin verbal hain. Kisi ek topic mein obsessive interest common hai — "Gifted but different" profile.',
    },
    {
      _key: 'type3',
      name: 'PDD-NOS (Pervasive Developmental Disorder - Not Otherwise Specified)',
      description: 'Kuch autism symptoms hain lekin poori definition fit nahi hoti. Mild to moderate range. Functional independence zyada possible hai.',
    },
    {
      _key: 'type4',
      name: 'Rett Syndrome',
      description: 'Almost exclusively girls mein hota hai (MECP2 gene mutation). Normal development ke baad 6-18 months mein regression hota hai — hand skills, speech, locomotion sab affected. Rare but serious.',
    },
    {
      _key: 'type5',
      name: 'Severity Level 1 — Requiring Support',
      description: 'Mild — independent life possible. Support chahiye lekin education, job, relationships sab achievable hain.',
    },
    {
      _key: 'type6',
      name: 'Severity Level 2 — Requiring Substantial Support',
      description: 'Moderate challenges. Partial independence possible hai structured settings mein. Shadow teacher aur structured therapy zaroori hai.',
    },
    {
      _key: 'type7',
      name: 'Severity Level 3 — Requiring Very Substantial Support',
      description: 'Severe — communication mostly non-verbal ya very limited. Daily life ke liye constant assistance chahiye. AAC devices aur intensive therapy helpful hain.',
    },
  ],

  causes: [
    'Genetic factors: 80% cases mein genes involved — SHANK3, CNTNAP2, FMR1 jaise genes ka mutation risk badhata hai',
    'Advanced parental age: baap ya maa dono ki umar zyada hone pe risk badh sakta hai',
    'Premature birth: 28 weeks se pehle ya low birth weight',
    'Prenatal infections: pehle trimester mein rubella, cytomegalovirus exposure se brain development affect ho sakta hai',
    'Environmental exposures: valproate jaisi medicines pregnancy mein, heavy metals (research ongoing)',
    'Sibling history: ek bachche ko autism hai to doosre bhai-behen mein risk approximately 18-20% badhata hai',
  ],

  riskFactors: [
    'Boys: Girls ke comparison mein 4 guna zyada hota hai autism',
    'Genetic predisposition: Family history mein ASD ya related conditions',
    'Premature babies: 28 weeks se pehle born babies mein higher risk',
    'Older parents: 35+ age mein conceive karne pe slightly higher risk',
    'Sibling with autism: Ek autistic sibling hone pe risk 18-20% higher',
    'Certain genetic conditions: Down Syndrome, Fragile X Syndrome ke saath autism overlap ho sakta hai',
  ],

  complications: [
    'Social isolation aur mental health issues (anxiety, depression) adult life mein develop hone ka risk',
    'Communication barriers — education aur employment mein lifelong difficulty',
    'Behavioral challenges jo family aur caregivers ke liye burnout cause karein',
    'Seizure disorders — 25-30% autistic individuals mein epilepsy develop hoti hai (timely neuro evaluation zaroori)',
    'Nutritional deficiencies — limited food preferences se iron, zinc, omega-3 ki kami',
  ],

  symptomGroups: [
    {
      _key: 'sg1',
      groupName: 'Social Communication Challenges (Sabse Pehle Dikhte Hain)',
      symptoms: [
        '12 months tak "mama/papa" ya ek bhi word nahi bola',
        '18 months tak koi single meaningful word nahi',
        '24 months tak 2-word phrase nahi',
        'Naam pukaarne pe consistently respond nahi karta',
        'Eye contact bohot kam ya avoid karta hai',
        'Pointing se cheez nahi dikhata (pointing gesture absent)',
        'Dosto se khelta nahi — parallel play prefer karta hai',
        'Emotions samajhna mushkil — "woh ro raha hai" pe reaction nahi',
      ],
    },
    {
      _key: 'sg2',
      groupName: 'Repetitive Behaviors & Restricted Interests (Stimming & Fixations)',
      symptoms: [
        'Haath hiltana (hand flapping), rocking, spinning — "stimming" behavior',
        'Ek hi routine mein change hone pe extreme distress',
        'Toy ek hi tarike se arrange karna — khelta nahi, line lagata hai',
        'Ek topic pe obsessive interest — jaise trains, numbers, maps',
        'Sensory aversion — certain textures, sounds ya lights se bahut upset',
        'Tiptoe pe chalna (toe walking) common',
        'Khaane mein extreme pickiness — color, texture se refuse karna',
      ],
    },
    {
      _key: 'sg3',
      groupName: 'Developmental & Cognitive Patterns',
      symptoms: [
        'Speech delay ya regression — bola tha, phir band ho gaya',
        'Rote memory kaafi strong ho sakti hai — numbers, dates yaad rakhna',
        'Executive function weak — planning, sequencing mein difficulty',
        'Some children: Savant abilities — music, math, memory mein exceptional',
        'Sleep disturbances — melatonin issues bahut common hain autistic children mein',
        'Sensory processing disorder — over-sensitive ya under-sensitive to touch, sound, light',
      ],
    },
  ],

  homeopathyNote: `Homeopathy mein autism ke liye mother ki pregnancy history bahot important hai. Agar mother history proper mil gayi aur us hisab se individualized homeopathic treatment diya gaya to autism mein help kiya ja sakta hai.\n\nYeh autistic bachche ke saath aane wale associated symptoms ko address karta hai — jaise anxiety, irritability, sleep problems, aggression, digestive issues aur sensory hypersensitivity. Jab ye sab thoda manage ho, therapy aur learning much better respond karti hai. Homeopathy ka approach individualized hai — do autistic bacchon ko alag-alag medicines di jaati hain unke unique symptom profile ke basis par.\n\nCCRH (Central Council for Research in Homoeopathy) ne autism pe multi-center observational study conduct ki hai. Study mein enrolled children mein Childhood Autism Rating Scale (CARS) scores mein 6-18 months ke treatment ke baad clinically meaningful reduction observe ki gayi. Behavioral parameters jaise irritability, social withdrawal, aur stereotypy mein measurable improvement dekha gaya. No adverse effects reported in treatment group.\n\nIMPORTANT: Homeopathy autism ka primary standalone treatment nahi hai — ABA therapy, speech therapy, occupational therapy MUST hai. Homeopathy in therapies ke saath chalti hai, replacement nahi hai.`,

  medicines: [
    {
      _key: 'med1',
      name: 'Carcinosin',
      bestFor: 'Autistic bachche jinmein strong family history ho cancer/tuberculosis ka, extreme fastidiousness ya disorder, routine ke liye obsession, aur emotional suppression pattern ho.',
      keyIndications: [
        'Autistic bachche jinmein strong family history ho cancer/tuberculosis ka',
        'extreme fastidiousness ya disorder',
        'routine ke liye obsession',
      ],
      hopeReason: 'Carcinosin constitutionally deep-acting medicine hai jo behavioral compulsions aur emotional over-sensitivity ko address karti hai. ASD mein ek commonly indicated medicine hai experienced homoeopaths ke liye.',
    },
    {
      _key: 'med2',
      name: 'Stramonium',
      bestFor: 'Bacche jinmein intense fear (darkness, water, animals), sudden violent behavior episodes, night terrors, aur aggression ke saath stuttering ho — sensory overload mein scream karte hain.',
      keyIndications: [
        'Bacche jinmein intense fear (darkness',
        'water',
        'animals)',
      ],
      hopeReason: 'Stramonium nervous system ki extreme reactivity ko address karta hai — meltdowns aur fear-triggered aggression mein khaas kaam aata hai.',
    },
    {
      _key: 'med3',
      name: 'Baryta Carbonica',
      bestFor: 'Slow developmental milestones wale bachche — late walker, late talker, timid, strangers se extreme shyness, concentration bahut kam, childish behavior age ke hisaab se behind.',
      keyIndications: [
        'Slow developmental milestones wale bachche — late walker',
        'late talker',
        'timid',
      ],
      hopeReason: 'Baryta Carb developmental delays aur intellectual sluggishness ke classic cases mein use hoti hai — especially jab growth overall slow ho.',
    },
    {
      _key: 'med4',
      name: 'Tuberculinum',
      bestFor: 'Restless, hyperactive autistic bachche jo ek jagah nahi baithe, destructive hain, travel/change pasand karte hain, chest weak ho ya family mein TB history ho.',
      keyIndications: [
        'Restless',
        'hyperactive autistic bachche jo ek jagah nahi baithe',
        'destructive hain',
      ],
      hopeReason: 'Tuberculinum hyperactivity aur restlessness ka constitutional address karta hai — attention aur behavior regulation mein helpful maana jaata hai.',
    },
    {
      _key: 'med5',
      name: 'Secretin (Homeopathic)',
      bestFor: 'Autistic bachche jinmein gut symptoms prominent ho — bloating, loose stools, food intolerances, aur behavioral worsening after eating certain foods.',
      keyIndications: [
        'Autistic bachche jinmein gut symptoms prominent ho — bloating',
        'loose stools',
        'food intolerances',
      ],
      hopeReason: 'Gut-brain axis autism mein significant hai. Homeopathic Secretin gut regulation mein help karta hai, jisse indirect behavioral improvement possible hai.',
    },
    {
      _key: 'med6',
      name: 'Hyoscyamus Niger',
      bestFor: 'Bacche jo kapde utaarne lagein, exhibitionist behavior, inappropriate laughing/crying, obscene behavior, sexual gestures — uninhibited behavior pattern.',
      keyIndications: [
        'Bacche jo kapde utaarne lagein',
        'exhibitionist behavior',
        'inappropriate laughing/crying',
      ],
      hopeReason: 'Hyoscyamus uninhibited nervous system activation ko modulate karta hai — socially inappropriate behaviors mein ek useful medicine hai.',
    },
  ],

  dietInclude: [
    {
      _key: 'di1',
      category: 'Gut-Friendly Foods',
      items: [
        'Homemade dahi/yogurt — probiotic gut bacteria balance karta hai, autism-related gut dysbiosis mein helpful',
        'Banana — prebiotic fiber + tryptophan jo serotonin banata hai, mood aur sleep dono better hote hain',
        'Boiled sweet potato — easy digestible, nutrient dense, most autistic kids accept karte hain texture-wise',
        'Ghee (desi) — omega-3 fatty acids + fat-soluble vitamins brain ke liye',
      ],
    },
    {
      _key: 'di2',
      category: 'Brain Support Foods',
      items: [
        'Walnuts (akhrot) — Omega-3 (ALA) ka plant-based source — brain development aur inflammation pe kaam karta hai',
        'Eggs (ande) — choline ka best source jo brain connectivity ke liye essential hai, especially 2-7 years age mein',
        'Flaxseeds (alsi) — Omega-3 rich, constipation (common in autism) bhi help karta hai',
        'Coconut oil — medium-chain triglycerides brain fuel ke roop mein quickly use hote hain',
      ],
    },
    {
      _key: 'di3',
      category: 'Vitamins & Minerals',
      items: [
        'Palak, methi, bathua — folate + iron; anemia autistic children mein behavior worsen karta hai',
        'Orange, amla, guava — Vitamin C immune support + iron absorption',
        'Til (sesame), ragi — calcium + zinc jo neurological function ke liye important hai',
        'Pumpkin seeds (kaddu ke beej) — zinc deficiency autism se associate hai, ye best natural source hai',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'Gluten & Casein (Trial Basis)',
      items: [
        'Wheat (gehun), maida, suji — gluten sensitivity kuch autistic children mein gut inflammation aur "brain fog" badhata hai (GFCF diet trial: 3-6 months consult karke try karein)',
        'Dairy (gaay ka doodh, cheese, paneer) — casein protein kuch cases mein behavioral issues se linked hai — trial basis pe observe karein',
        'Atta biscuits/packaged wheat snacks — hidden gluten sources',
      ],
    },
    {
      _key: 'da2',
      category: 'Artificial Additives & Dyes',
      items: [
        'Packaged chips, colored candies, fruit drinks — artificial colors (Red 40, Yellow 5) hyperactivity badhate hain',
        'Maida snacks, noodles, white bread — refined carbs blood sugar spike karte hain, behavioral dysregulation badhta hai',
        'Packaged juice (tetrapak) — preservatives + high sugar = behavior worse',
      ],
    },
    {
      _key: 'da3',
      category: 'Sugar & Stimulants',
      items: [
        'Refined sugar, mithai, chocolates — gut dysbiosis badhata hai, yeast overgrowth se behavior patterns worsen hote hain',
        'Maida-based fast food (pizza, burger) — nutrient empty + gut inflammatory',
        'Soda, cola, caffeinated drinks — sleep aur behavior dono pe severe impact karta hai',
      ],
    },
  ],

  dos: [
    'Early intervention le lo — diagnosis ke turant baad speech, OT, aur ABA therapy shuru karein; brain plasticity 2-5 age mein peak hoti hai',
    'Structured routine banao — visual schedule (pictures wali) use karo; autistic brain routine mein comfort paata hai',
    'Sensory diet follow karo — OT ke saath milke sensory activities (swing, deep pressure, fidget tools) daily routine mein shamil karo',
    'Bachche ki strengths celebrate karo — jo achha kare us pe focus rakho; negative reinforcement se progress nahi hoti',
    'Support groups join karo — Action for Autism, Autism Society of India — dusri families se seekhna bahut helpful hota hai',
    'Sleep hygiene maintain karo — fixed bedtime, screen off 1 hr pehle, dark quiet room; sleep problems treat karna priority hai',
    'School mein IEP (Individualized Education Plan) request karo — yeh aapka legal right hai under RPwD Act 2016',
    'Diet diary rakhein — kya khaya aur behavior kaisa tha note karo; triggers identify karne mein madadgar hota hai',
  ],

  donts: [
    'Stimming band mat karwaao forcefully — yeh self-regulation tool hai bachche ka; forceful suppression se anxiety aur trauma badh sakta hai',
    'Social comparison mat karein — "Neha ka beta toh bol raha hai" — ye comparison sirf parents aur child dono ke liye harmful hai',
    'Miracle cure claims pe paisa mat luraoo — chelation therapy, bleach (MMS), dolphin therapy — ye unproven aur dangerous hain',
    'Aggressive behavior pe physical punishment bilkul nahi — yeh communication attempt hai, punishment se behavior escalate hota hai',
    'School ya society se hide mat karo diagnosis — jitna jaldi support milega, utna better outcome; shame se nahi, action se change hoga',
    'Ek hi therapist ya ek hi approach pe blind trust mat rakho — regular progress review karo, outcomes dekho',
    'Internet se random supplements khilana band karo — iron, zinc, B12 sirf deficiency confirm hone pe dein; excess bhi harmful hai',
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Autism kya hota hai bachchon mein — simple mein samjhaao?',
      answer: 'Autism ek brain development ka alag pattern hai jisme bachcha social interaction, communication aur behavior kuch alag tarike se karta hai. Ye koi "mental illness" nahi hai — ye ek neurological difference hai. Har autistic bachcha alag hota hai — koi zyada verbal hota hai, koi bilkul nahi bolta. Koi ek jagah baithta hai, koi bahut hyperactive hota hai. Isliye isko "spectrum" kaha jaata hai. Sahi support milne pe autistic children apni life mein bahut achha kar sakte hain — school, relationships, career sab possible hai.',
    },
    {
      _key: 'faq2',
      question: 'Autism ke early signs kya hain — kitni umar mein pata chalta hai?',
      answer: 'Autism ke early signs usually 12-24 months mein nazar aane lagte hain. Sabse important warning signs hain: 12 months mein naam pe response nahi, pointing gesture absent, 16 months mein ek bhi word nahi, ya koi bhi skill jo aa gayi thi woh chali gayi. Agar aapka bachcha seedha aankh nahi milata, alone khelta hai, spin karna ya line lagana prefer karta hai — ye reasons hain ki ek developmental pediatrician se evaluation karwaana zaroori hai. Jitna pehle evaluate karein, utna better — early intervention mein brain plasticity use hoti hai.',
    },
    {
      _key: 'faq3',
      question: 'Autism aur normal bachche mein kya fark hota hai — kaise samjhein?',
      answer: 'Sabse aasan tarika: social reciprocity dekho. Normal bachche dusron ki aankhen dekhte hain, smile ka jawab smile se dete hain, point karke cheez share karte hain, "mama dekho!" type sharing karte hain. Autistic bachche mein ye social "back-and-forth" kam hota hai — woh apni duniya mein comfortable hote hain aur sharing ka natural urge kum hota hai. Developmental milestones bhi delay hote hain — lekin milestones miss hone ke SAATH social engagement bhi absent ho, tabhi red flag hai. Speech delay akele autism ka sign nahi hai.',
    },
    {
      _key: 'faq4',
      question: 'Autism ka test kaise hota hai India mein — kaun sa doctor dikhayein?',
      answer: 'India mein autism diagnosis ke liye Developmental Pediatrician ya Child Psychiatrist ke paas jaana chahiye. Test mein CARS (Childhood Autism Rating Scale), ADOS (Autism Diagnostic Observation Schedule) ya M-CHAT screening tools use hoti hain. Koi blood test ya brain scan se autism diagnose nahi hota — ye behavioral evaluation hai. Government hospitals mein NIMHANS (Bangalore), AIIMS Delhi, aur state mental health institutes ye services dete hain. Diagnosis letter zaroori hai — school mein support aur government disability certificate ke liye. Diagnosis hone ke baad ek qualified homoeopath se bhi consultation lein conventional medicine ke saath.',
    },
    {
      _key: 'faq5',
      question: 'Autism permanently theek ho sakta hai kya — ya zindagi bhar rehta hai?',
      answer: 'Autism koi "disease" nahi hai jo "theek" ho — ye ek different way of wiring hai. Lekin "theek" nahi matlab "better nahi" — yeh galat samajh hai. Sahi early intervention, therapy aur support se kaafi autistic bacchon ki communication, independence aur social skills dramatically improve hoti hain. Kuch Level 1 autism waale individuals independent life jite hain, job karte hain, relationship mein hote hain. Goal hai "cure" nahi, "thriving life" hai — aur wo bilkul possible hai sahi support se.',
    },
    {
      _key: 'faq6',
      question: 'Autism mein kya homeopathy kaam karta hai — koi fayda hota hai?',
      answer: 'Homeopathy autism ke saath aane wale associated symptoms mein — jaise anxiety, sleep problems, gut issues, irritability, sensory hypersensitivity — ek useful role play karta hai. CCRH studies mein autistic children ke behavioral parameters (irritability, social withdrawal) mein homeopathic treatment ke saath meaningful improvement dekha gaya hai. Sabse important baat: ABA, speech, aur OT therapy primary rehti hai — homeopathy uske saath chalti hai, replacement nahi hai.',
    },
    {
      _key: 'faq7',
      question: 'Autism mein konsi homeopathic medicine deni chahiye bachche ko?',
      answer: 'Autism mein koi ek fixed medicine nahi hoti — homeopathy mein hamesha individualized prescription hoti hai. Carcinosin, Stramonium, Baryta Carbonica, Tuberculinum, Hyoscyamus — ye commonly indicated medicines hain alag-alag symptom profiles ke liye. Ek experienced homoeopath poori case history — bachche ka behavior, fears, sleep pattern, food preferences, family history — sab dekh ke decide karta hai. Internet se medicine kharidna ya YouTube dekh ke dena nahi chahiye — bachchon mein supervised care zaroori hai.',
    },
    {
      _key: 'faq8',
      question: 'Autism aur ADHD mein kya fark hai — ek saath dono ho sakte hain?',
      answer: 'Haan — autism aur ADHD ek saath ho sakte hain, aur aksar hote bhi hain. Fark ye hai: ADHD mein attention aur hyperactivity primary issue hai — social skills comparatively better hoti hain. Autism mein social communication aur sensory processing primary affected hai — hyperactivity secondary ho sakti hai. Dono mein executive function (planning, sequencing) weak hoti hai. Agar dono hain to "ASD + ADHD comorbid" kaha jaata hai — aur treatment plan accordingly adjust hota hai. Diagnosis ke liye complete evaluation zaroori hai.',
    },
    {
      _key: 'faq9',
      question: 'Autistic bachche ki diet kaisi honi chahiye — kya khilayein kya nahi?',
      answer: 'Autism mein gut-brain connection strong hai — isliye diet matter karti hai. Kuch families ne GFCF (Gluten-Free Casein-Free) diet se improvement dekhi hai — wheat aur dairy ko 3-6 months ke trial pe hatao aur behavior note karo. Zaroor dena chahiye: Omega-3 (eggs, walnuts, flaxseed), zinc (pumpkin seeds, til), probiotics (dahi), aur colorful vegetables. Avoid karo: artificial food colors, refined sugar, packaged snacks, maida. Diet diary rakhein — individual triggers alag ho sakte hain.',
    },
    {
      _key: 'faq10',
      question: 'Kya autism genes se aata hai — dusre bachche ko bhi hoga kya?',
      answer: 'Autism mein genetic component strong hai — research suggests 80% cases mein genetic factors involved hain. Agar ek bachche ko autism hai to sibling mein risk approximately 18-20% higher hota hai — matlab chance toh hai, lekin sibling ko zaroor hoga aisa nahi. Different genes (SHANK3, FMR1 etc.) involved hote hain. Agar planning kar rahe hain to genetic counselor se milna helpful hota hai. Prenatal screening kuch high-risk cases mein available hai — doctor se discuss karein.',
    },
    {
      _key: 'faq11',
      question: 'Autistic bachcha school join kar sakta hai kya — kaunsa school best hai?',
      answer: 'Haan, zaroor kar sakta hai — aur karna bhi chahiye. India mein options hain: inclusive schools (normal school mein special educator ka support), special schools (sirf ASD/disability children ke liye), aur home-based education. RPwD Act 2016 ke under inclusive education aapka right hai — school disability certificate ke basis pe IEP (Individualized Education Plan) banane ke liye bound hai. Level 1-2 autism ke bacchon ke liye inclusive schools bahut better hai social exposure ke liye. Special school Level 3 ya severe cases ke liye zyada suited hai.',
    },
    {
      _key: 'faq12',
      question: 'Autism mein speech delay — kab tak bol lega bachcha?',
      answer: 'Ye ek common aur anxious question hai — aur honest jawab hai: depends. Kuch bacchon ki speech age 3-4 mein suddenly open up hoti hai sahi therapy se. Kuch Level 1 autism waale 5-6 saal mein fluent ho jaate hain. Kuch bilkul non-verbal rehte hain — lekin unke liye AAC (Augmentative and Alternative Communication) devices aur PECS (Picture Exchange) hain jo communication enable karte hain. Speech ka nahi aana = intelligence kam aisa nahi hai. Speech therapy jitni jaldi shuru, utna better.',
    },
    {
      _key: 'faq13',
      question: 'Kya autistic bachche normal zindagi ji sakte hain — bade hokar kya kar sakte hain?',
      answer: 'Bilkul — Level 1 aur kuch Level 2 autism waale adults independent life jeete hain. Job karna, drive karna, relationship mein hona, parent banna — sab possible hai. Stephen Wiltshire (artist), Temple Grandin (scientist), Satoshi Tajiri (Pokemon creator) — ye sab autistic hain. Haan, challenges hote hain — social situations difficult hoti hain, sensory overload manage karna padta hai. Lekin "normal" life possible hai sahi support se. Goal "normal banna" nahi, "thriving" hai — aur definition of thriving har person ke liye alag hoti hai.',
    },
    {
      _key: 'faq14',
      question: 'Autism ka gharelu ilaj kya hai — ghar pe kya karein?',
      answer: '"Gharelu ilaaj" se zyada "ghar pe therapy support" sochein: Structured routine visual schedule se, sensory activities daily (swing, trampoline, deep pressure — OT batayenge), reading/story time — shared attention build karta hai. PECS/picture cards se communication practice. Diet clean rakhein — no artificial colors, probiotics do. Adequate sleep ensure karein — melatonin supplements doctor ki salaah se kuch cases mein helpful hain. Ye sab "cure" nahi karte — lekin therapy outcomes dramatically improve karte hain.',
    },
    {
      _key: 'faq15',
      question: 'Autism mein ABA therapy kya hoti hai — kya zaroor hai?',
      answer: 'ABA (Applied Behavior Analysis) therapy autism ki evidence-based primary therapy hai — isme behavior ko systematically reinforce karke skills sikhaye jaate hain. Communication, self-care, social skills — sab ABA mein teach ki jaati hain. Research kehta hai ki 25-40 hours/week intensive ABA therapy early years mein best outcomes deti hai. India mein expensive aur limited availability ek challenge hai — lekin parent training programs bhi hain jo ghar pe implement kar sakte ho. NIMHANS, Ummeed Child Development Centre (Mumbai), Action for Autism (Delhi) ye sab resources hain.',
    },
    {
      _key: 'faq16',
      question: 'Autism spectrum disorder level 1, 2, 3 mein kya fark hai?',
      answer: 'Level 1 (Mild/High-Functioning): Support chahiye lekin independent kaafi possible hai — job, relationships, education sab possible.\nLevel 2 (Moderate): Substantial support chahiye — partial independence possible hai structured settings mein.\nLevel 3 (Severe): Bahut zyada support chahiye — daily life ke liye constant assistance. Communication mostly non-verbal ya very limited.\nSeverity sirf bachpan mein nahi — early intervention se Level 2 bhi Level 1 level of functioning tak aa sakta hai. Level label permanent nahi hai — it can change with therapy.',
    },
    {
      _key: 'faq17',
      question: 'Autism mein meltdown aur tantrum mein kya fark hai?',
      answer: 'Ye fark samajhna parent ke liye game-changer hai. Tantrum: child control mein hota hai, kuch chahiye isliye karta hai, audience hone pe zyada drama, easily distracted/calmed. Meltdown: child control mein NAHI hota — overwhelming sensory ya emotional input ki wajah se system "crash" hota hai. Audience se nahi rukta, dangerous behavior ho sakti hai (head banging, biting self), child ko baad mein remember bhi nahi hota. Meltdown mein — calm raho, stimuli reduce karo, wait karo. Punish mat karo — ye "bad behavior" nahi hai.',
    },
    {
      _key: 'faq18',
      question: 'Autism ka diagnosis late hone pe kya hota hai — 5 saal ke baad pata chale toh?',
      answer: 'Late diagnosis disappointing lagta hai — lekin kabhi bhi deri nahi hoti. 5 saal ke baad bhi therapy ke results aate hain — brain plasticity khatam nahi hoti, sirf thodi slower hoti hai. Adults mein bhi diagnosis milna life-changing hota hai — "ye mera fault nahi, ye meri wiring hai" ye samajh mental health dramatically improve karta hai. Late diagnosis mein focus: current skills build karo, coping strategies sikhao, school support arrange karo, family education do. Regret mein energy mat lagao — action mein lagao.',
    },
    {
      _key: 'faq19',
      question: 'Autism mein supplements dena chahiye kya — Vitamin D, B12, Omega-3?',
      answer: 'Haan — lekin blindly nahi, blood tests ke baad. Autism mein commonly seen deficiencies: Vitamin D (sun avoidance aur indoor preference ki wajah se), B12 (especially agar diet restricted hai), Zinc (bahut common), Omega-3 (picky eating ki wajah se). These deficiencies directly affect brain function aur behavior. Test karwaao first (25-OH Vitamin D, serum zinc, B12, ferritin), phir supplementation shuru karo. Doctor ki supervision mein — excess bhi harmful hota hai.',
    },
    {
      _key: 'faq20',
      question: 'Autism mein kya Vitamin D important hai?',
      answer: 'Haan — very much. Research shows autistic children mein Vitamin D deficiency significantly common hai. Vitamin D sirf bones ke liye nahi — yeh brain development, immune function aur inflammation ke liye bhi zaroori hai. Low Vitamin D levels behavioral issues se correlate karte hain autism mein. India mein paradox hai — itni dhoop hoti hai phir bhi deficiency common hai kyunki autistic children indoor prefer karte hain, aur skin expose nahi hoti. Supplementation se behavioral improvement kuch studies mein dekha gaya hai — doctor se blood test karwaao aur appropriate dose lein.',
    },
    {
      _key: 'faq22',
      question: 'Autism mein sibling aur family ka role kya hota hai?',
      answer: 'Family — especially siblings — autistic child ke development mein critical role play karte hain. Siblings natural language partners aur social models hote hain. Unhe bhi sikhao: "Bhai/behan alag tarike se socha aur feel karta hai — ye wrong nahi hai." Sibling rivalry minimize karo, special time dono ke liye rakhein. Grandparents aur extended family ko educate karo — "pagal nahi hai, alag hai" clearly samjhao. Family stress common hai — respite care aur parent support groups se burnout prevent karo. Ek bachche ki condition poori family ki journey hai.',
    },
    {
      _key: 'faq23',
      question: 'Autism ke saath anxiety bhi hoti hai kya — dono ka kya connection hai?',
      answer: 'Haan — anxiety aur autism ka deep connection hai. Estimates batate hain ki 40-60% autistic individuals anxiety disorder bhi experience karte hain. Kyun: social interactions uncertain lagti hain (rule samajh nahi aata), sensory overload constant stress create karta hai, change of routine predictability destroy karta hai — yeh sab anxiety trigger karte hain. Anxiety ka expression bhi alag hota hai autism mein — meltdowns, aggression, withdrawal, ya physical complaints (stomach ache). Homeopathy mein anxiety specifically address karna autism management ka ek important part hai.',
    },
    {
      _key: 'faq24',
      question: 'Kya autistic bachche special school jayen ya normal school?',
      answer: 'Depends on the child\'s level aur support available:\nLevel 1: Inclusive school strongly recommended — social exposure critical hai.\nLevel 2: Inclusive school with shadow teacher (special educator) — ya mixed.\nLevel 3: Special school ya home-based initially, phir phased inclusion.\nIndia mein RPwD Act 2016 inclusive education mandate karta hai. "Special school = better care" ye assumption galat hai kuch cases mein — peers se social learning miss ho jaata hai. Practical advice: school visit karo, principal se baat karo, shadow teacher ka option puchho, decide karo.',
    },
    {
      _key: 'faq25',
      question: 'Government ki taraf se autism ke liye kya support milta hai India mein?',
      answer: 'India mein kuch important supports available hain:\nDisability Certificate: Autism RPwD Act 2016 under recognized hai — certificate milne ke baad 4% reservation government jobs aur admission mein, tax benefits, railway concession, aur free education available hai.\nNiramaya Health Insurance: Disability waale bacchon ke liye Rs 1 lakh annual health cover.\nNIOS: Open schooling board jahan accommodations milte hain.\nNGOs: Action for Autism, Autism Society of India free resources dete hain.\nApplication process ke liye: district disability office se contact karo.',
    },
  ],

  sources: [
    { _key: 's1', text: 'American Psychiatric Association — DSM-5', url: 'https://www.psychiatry.org', year: '2013' },
    { _key: 's2', text: 'WHO — Autism Spectrum Disorders Fact Sheet', url: 'https://www.who.int/news-room/fact-sheets/detail/autism-spectrum-disorders', year: '2023' },
    { _key: 's3', text: 'CCRH — Homoeopathic Management of Autism: Multi-centre Study | Indian Journal of Research in Homoeopathy', url: '', year: '2015-2020' },
    { _key: 's4', text: 'CDC — Data & Statistics on Autism', url: 'https://www.cdc.gov/autism', year: '2023' },
    { _key: 's5', text: 'Autism Society of India', url: 'https://www.autismsocietyindia.com', year: '' },
    { _key: 's6', text: 'National Institute of Mental Health (NIMH) — Autism Research', url: 'https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd', year: '' },
    { _key: 's7', text: 'RPwD Act 2016 — Rights of Persons with Disabilities, Govt. of India', url: 'https://disabilityaffairs.gov.in', year: '2016' },
  ],

  quickFacts: [
    'Autism Spectrum Disorder — 5 types, 3 severity levels; "spectrum" isliye hai kyunki har autistic person unique hota hai',
    'India mein estimated 1 in 68 children autism spectrum par hain (Lancet GBD / BAPIN estimates)',
    'Early intervention (age 2-5) mein: 2-4 saal intensive therapy se significant improvement. Homeopathic support: 6-18 months associated symptoms ke liye.',
  ],

  doctorNote: 'Clinic mein maine bahut autistic bacchon ke parents ko dekha hai jo diagnosis ke baad dum tod dete hain — ye galat hai. Mera experience hai ki jo bachche jaldi aaye, therapy + homeopathic support combination se — unka social engagement, sleep, aur meltdown frequency sab improve hoa. Akele homeopathy nahi — integrated approach. Jaldi aao, ummeed rakho, consistent raho — results aate hain.',

  reviewDate: 'April 2026',
}

async function seed() {
  console.log('🌱 Seeding Autism Spectrum Disorder...')
  const result = await client.createOrReplace(doc)
  console.log('✅ Autism created/updated:', result._id)
  console.log('🌐 Live at: https://homeopedia.in/diseases/autism')
}

seed().catch(console.error)
