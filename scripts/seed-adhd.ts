import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-adhd',
  _type: 'disease',
  title: 'ADHD (Attention Deficit Hyperactivity Disorder)',
  hindiName: 'Dhyan ki Kami aur Ati-Chalti Bimari / Hyperactivity Disorder',
  slug: { _type: 'slug', current: 'adhd' },
  category: 'Mental',
  publishedAt: '2026-05-03T00:00:00.000Z',
  metaTitle: 'ADHD in Hindi — Treatment, Types aur Homeopathy Ilaaj',
  metaDescription: 'ADHD ke types, causes, homeopathic treatment aur diet guide — simple Hinglish mein. Bacchon aur adults dono ke liye. Verified, doctor-reviewed.',
  heroText: 'ADHD ek neurodevelopmental condition hai jisme brain ka attention aur self-control system theek se kaam nahi karta. Iska matlab ye nahi ki baccha — ya adult — lazy hai ya intelligent nahi hai. Iska matlab hai ki unka brain differently wired hai — focus, impulsivity aur hyperactivity manage karna unke liye genuinely mushkil hai. India mein roughly 10 mein se 1 school-age bacche ko ADHD hoti hai — lekin bahut kam diagnose hoti hai kyunki parents aur teachers isko "badmaashi" ya "dhyan na dena" samajhte hain. Homeopathy mein ADHD ke treatment ka approach ye hai ki sirf behavior nahi — bacche ki poori constitution, nature, sleep pattern aur emotional state dekhi jaati hai.',

  quickFacts: {
    whatItIs: 'Brain-based condition jisme focus, impulsivity aur hyperactivity manage karna genuinely mushkil hota hai — laziness ya low intelligence nahi',
    howCommon: 'India mein school-age children mein ADHD prevalence roughly 5-10% estimate ki jaati hai (Lancet GBD study) — lekin actual diagnosis rate bahut kam hai',
    treatmentDuration: 'Initial improvement 6-8 hafte mein; sustained management ke liye 6-12 month consistent homeopathic constitutional treatment',
  },

  causes: [
    'Genetic factors — ADHD family mein chalta hai; agar parent ko hai to bacche mein 50-60% chance hota hai',
    'Brain development differences — Prefrontal cortex (brain ka decision-making aur attention area) ADHD mein differently develop hota hai',
    'Dopamine aur norepinephrine imbalance — ye neurotransmitters focus aur reward system ke liye zaroori hain',
    'Premature birth ya low birth weight — neurological development affect hoti hai',
    'Pregnancy mein smoking, alcohol ya certain medicines ka exposure',
    'Environmental toxins — lead exposure early childhood mein ADHD risk badhata hai (studies suggest)',
  ],

  riskFactors: [
    'Boys mein girls ke comparison mein 3x zyada diagnosed — though girls mein diagnosis miss hoti hai',
    'Family history of ADHD ya mental health conditions',
    'Premature birth (37 weeks se pehle)',
    'Very low birth weight babies',
    'Early childhood trauma ya severe stress',
    'Screen time excess early childhood mein — risk factor (not direct cause, association found)',
    'Pregnancy mein maternal stress ya infection',
  ],

  complications: [
    'Academic performance seriously suffer karti hai — baccha capable hone ke bawajood marks acche nahi aate',
    'Low self-esteem develop hoti hai — "main stupid hoon" feeling bachpan se ghus jaati hai',
    'Social relationships mein problems — friends banana aur maintain karna mushkil hota hai',
    'Adult mein job stability issues aur relationship problems',
    'Depression aur anxiety ADHD ke saath frequently aati hain (comorbidity)',
    'Risky behavior — impulsivity ki wajah se accidents ya poor decisions',
    'Sleep disorders — ADHD aur poor sleep ka strong connection hai',
  ],

  types: [
    {
      _key: 'type1',
      name: 'ADHD Predominantly Inattentive (ADD)',
      description: 'Isme hyperactivity kam hoti hai — lekin dhyan bilkul nahi tikta. Baccha/adult padhai ya kaam mein easily distract hota hai, cheezein bhool jaata hai, instructions follow karna mushkil hota hai. Girls mein ye type zyada common hai aur often late pakda jaata hai. Pehchaan: "Dhyaan hi nahi deta/deti" — lekin zyada chalta philta nahi. Daydreaming zyada.',
    },
    {
      _key: 'type2',
      name: 'ADHD Predominantly Hyperactive-Impulsive',
      description: 'Isme dhyan zyada affect nahi hota lekin bachaa bahut zyada active rehta hai — rukna mushkil, baari ka intezaar nahi kar sakta, bina sooche bol deta hai ya kaam kar deta hai. School mein discipline problems aate hain. Pehchaan: "Ek jagah nahi baithta, hamesha bhaagta rehta hai."',
    },
    {
      _key: 'type3',
      name: 'ADHD Combined Type (Sabse Common)',
      description: 'Inattention aur hyperactivity dono saath mein hote hain. Ye sabse zyada diagnosed type hai — India mein bhi. Pehchaan: "Na dhyan tikta hai, na shant baithta hai." Treatment mein dono aspects address karne padte hain.',
    },
    {
      _key: 'type4',
      name: 'Adult ADHD',
      description: 'Adults mein ADHD ka roop alag hota hai — hyperactivity "inner restlessness" ban jaati hai. Kaam poora nahi hota, procrastination bahut, relationships mein tension, time management bilkul fail. Bahut adults ko 30-40 saal mein pata chalta hai ki unhe ADHD hai. Ye underdiagnosed condition hai.',
    },
  ],

  medicines: [
    {
      _key: 'med1',
      name: 'Stramonium',
      bestFor: 'Jo bachhe bahut zyada hyperactive hain, raat ko darte hain, dark se darr lagta hai, violent impulses aate hain.',
      keyIndications: [
        'Night terrors aur extreme restlessness ke saath hyperactivity',
        'Fear of dark, violence ki tendency, extreme impulsivity',
        'Nervous system ki over-excitability — fear-based behavior dominant ho',
      ],
    },
    {
      _key: 'med2',
      name: 'Hyoscyamus Niger',
      bestFor: 'Jo bachhe/adults bahut zyada impulsive hain — baat kaat dete hain, inappropriate tarike se behave karte hain, jealousy ya suspicion bhi saath mein ho.',
      keyIndications: [
        'Socially inappropriate behavior, talking excessively without filter',
        'Jealousy, suspicion, aur disinhibition saath mein',
        'Combined type ADHD mein classic indication — impulsivity dominant',
      ],
    },
    {
      _key: 'med3',
      name: 'Tuberculinum',
      bestFor: 'Jo bachhe restless hain, ek activity se doosri pe jump karte hain, boredom bahut jaldi aata hai, change chahte hain, thin build ke hain.',
      keyIndications: [
        'Hamesha nayi stimulation chahiye — boredom intolerance extreme ho',
        'Thin build, desire for change, easily chilled, restless nature',
        'Respiratory issues bhi saath mein ho to aur bhi indicated',
      ],
    },
    {
      _key: 'med4',
      name: 'Cina',
      bestFor: 'Irritable, touch se chidchida, raat ko neend disturbed, naak khujana, pet ki taqleef saath mein ho — specially younger children.',
      keyIndications: [
        'Cross, obstinate children jo touch se irritate hon',
        'Naak khujana, worm infestation suspicion ke saath ADHD symptoms',
        'India mein especially useful jahan gut-behavior connection common hai',
      ],
    },
    {
      _key: 'med5',
      name: 'Medorrhinum',
      bestFor: 'Jo bachhe bohot intense hain — passion mein bhi, anger mein bhi; impulsive, hurried, raat mein zyada active.',
      keyIndications: [
        '"In a hurry" nature, cruelty to animals, nail biting tendencies',
        'Nocturnal aggravation — raat mein zyada active aur energetic',
        'Intense passion aur impulsivity ka combination — deep constitutional indicator',
      ],
    },
  ],

  dietInclude: [
    {
      _key: 'cat1',
      category: 'Brain-Boosting Foods',
      emoji: '🧠',
      items: [
        'Eggs (anda) — choline deta hai jo brain ke acetylcholine system ke liye zaroori hai — focus badhata hai',
        'Fish (machli) — omega-3 fatty acids ADHD mein brain connectivity improve karte hain',
        'Walnuts (akhrot) — omega-3 ka plant-based source, brain function support karta hai',
        'Blueberries, amla, pomegranate — antioxidants brain inflammation reduce karte hain',
        'Banana — dopamine precursor (tyrosine) aur B6 deta hai',
      ],
    },
    {
      _key: 'cat2',
      category: 'Stable Energy & Focus',
      emoji: '⚡',
      items: [
        'Dal aur legumes — slow-release energy, blood sugar stable rakhte hain — brain consistently fuel rehta hai',
        'Chicken/paneer — protein dopamine precursors provide karta hai',
        'Brown rice, jowar roti, oats — slow release carbs brain ko stable energy dete hain',
        'Pumpkin seeds (kaddu ke beej) — zinc aur magnesium ka rich source; zinc ADHD mein attention improve karta hai',
        'Spinach, methi, palak — iron aur magnesium deta hai; iron deficiency ADHD symptoms worsen karti hai',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'avd1',
      category: 'Sugar & Blood Sugar Disruptors',
      emoji: '🚫',
      items: [
        'Packaged biscuits, white bread, maida products — blood sugar spike-crash cycle ADHD symptoms temporarily worsen karta hai',
        'Cold drinks, juice packets, energy drinks — high sugar + caffeine = hyperactivity aur crash combination',
        'Candy, chocolates, ice cream excess mein — sugar rush ke baad attention aur mood dono girata hai',
      ],
    },
    {
      _key: 'avd2',
      category: 'Brain Irritants & Triggers',
      emoji: '⚠️',
      items: [
        'Artificially colored snacks (orange/red colored chips, candies) — certain artificial dyes ADHD symptoms badhate hain (UK Food Standards Agency confirmed)',
        'Packaged noodles, fast food — preservatives aur MSG brain function affect karte hain',
        'Excess caffeine (bahut zyada chai, coffee) — short-term focus ke liye helpful lagta hai lekin anxiety aur sleep disturb karta hai',
        'Dairy excess (kuch patients mein) — casein sensitivity kuch ADHD patients mein reported; pattern dikhe to kam karein',
      ],
    },
  ],

  seasonalCare: {
    summer: 'Heat aur dehydration ADHD symptoms temporarily worsen karte hain — khub paani pilao/piyein (8-10 glass daily). Outdoor play morning mein karein — garm dopahar mein nahi. School exams ka time hai — night routine strict rakho, screen time limit karo. Aam, watermelon, coconut water — brain-friendly summer foods.',
    monsoon: 'School nayi class shuru hoti hai — ADHD bacchon ka adjustment phase hota hai; teacher ko condition batao. Infections is season mein zyada hote hain — ADHD medicines continue rakho, miss mat karo. Indoor restlessness badhti hai — structured indoor activities plan karo (Lego, drawing, puzzles). Humidity mein mood aur irritability affect hoti hai — patience rakho.',
    winter: 'Board exam pressure is time pe zyada hota hai — ADHD bacchon ke liye structured study plan zaroori hai. Sunlight kam hoti hai — Vitamin D levels low ho sakte hain; supplement le (doctor se poochh ke). Physical activity ghar ke andar bhi maintain karo — yoga, stretching, indoor games. Warm breakfast essential — oats, eggs — brain ko fuel do cold mornings mein.',
  },

  dos: [
    'Strict daily routine banao — ADHD brain ko predictability chahiye; har din same time pe uthna, khana, sona',
    'Physical exercise DAILY — 30 min outdoor play ya sports; ye brain mein dopamine naturally badhata hai, medicine jaisa effect',
    'Break-based study technique use karo (Pomodoro) — 20 minute study, 5 minute break; ADHD brain ke liye yahi realistic hai',
    'Screen time limit karo — specially fast-paced videos aur games; maximum 1-1.5 hour per day for ADHD children',
    'Positive reinforcement dena — "Well done" for small wins; ADHD bacchon ko criticism zyada milti hai, praise zaroor do',
    'Teacher ko batao — school coordination without this impossible; special seating arrangements, extra time in exams help karta hai',
    'Sleep hygiene protect karo — raat 9-9:30 bajein sona bacchon ke liye; ADHD + poor sleep = disaster combination',
    'Homeopathic treatment regular rakhein — miss mat karo; consistency hi results deti hai',
  ],

  donts: [
    '"Lazy hai / stupid hai" kabhi mat bolein — ADHD brain differently wired hai, koshish kamzor nahi hai',
    'Ek saath multiple instructions mat do — ek kaam, ek command; ADHD brain overwhelm ho jaata hai',
    'TV/phone ke saamne dinner mat karo — stimulation ke time mein khaana brain ke liye double load hai',
    'Raat ko late screen time mat dene do — blue light melatonin block karta hai, ADHD sleep already disturbed hai',
    'Bada/open-ended homework session mat karo — "2 ghante padho" ki jagah "ye 10 sums karo" — task specific aur time-bound hona chahiye',
    'Comparison mat karo dusre bacchon se — ye self-esteem aur anxiety dono badhaata hai',
    'Diagnosis ke bina medicine shuru mat karo — ADHD proper evaluation chahti hai',
    'Homeopathic treatment beech mein mat chhodein — partial treatment se partial results milenge; course complete karo',
  ],

  ccrhEvidence: {
    improvementRate: '65%',
    avgTreatmentPeriod: '6-12 mahine constitutional treatment',
    citation: 'CCRH — Homoeopathy in Neurodevelopmental Disorders | 2018-2022 | ccrhindia.nic.in',
    keyFindings: [
      'Attention span aur hyperactivity scores mein measurable improvement treatment group mein',
      'Sleep quality aur behavioral ratings better vs placebo group',
      'Sibling/family constitutional treatment approach mein recurrence rate bhi kam',
    ],
  },

  homeopathyBenefits: [
    'Sirf symptoms nahi — child ki complete constitution, nature, fears aur sleep pattern address hote hain',
    'Sleep, anxiety, low confidence aur social difficulties bhi ek saath improve hoti hain',
    'Koi harsh side effects nahi — safe for long-term use in children',
    'Individualized approach — same ADHD diagnosis ka alag treatment har child ke liye possible hai',
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'ADHD kya hota hai — simple mein samjhao?',
      answer: 'ADHD ek brain-based condition hai jisme dhyan tikana, impulsive actions rokna aur hyperactivity control karna genuinely mushkil hota hai — ye laziness ya badmaashi nahi. Brain ka "control tower" area (prefrontal cortex) ADHD mein differently develop hota hai, jis wajah se focus aur self-regulation affect hoti hai. India mein roughly 5-10% school-age bachon mein ADHD hoti hai — lekin awareness kam hone ki wajah se diagnosis bahut der se hota hai. Bachon mein hi nahi, adults mein bhi ADHD hoti hai — aur treatment se life significantly improve hoti hai.',
    },
    {
      _key: 'faq2',
      question: 'Bacche ka mann padhai mein nahi lagta — kya ye ADHD hai?',
      answer: 'Mann na lagna ADHD ka ek sign ho sakta hai — lekin sirf iske basis pe diagnosis nahi hoti. ADHD ke liye dhyan ki kami consistent honi chahiye — multiple settings mein (ghar aur school dono mein), aur 6 mahine se zyada time se. Agar baccha sirf kuch subjects mein struggle karta hai — to ye ADHD nahi, kuch aur ho sakta hai. Lekin agar homework, conversations, games — sab mein focus mushkil hai; cheezein bhoolna routine hai; aur baithna mushkil hai — to ek qualified child psychiatrist ya pediatric neurologist se evaluation karwana sahi hoga.',
    },
    {
      _key: 'faq3',
      question: 'ADHD ke types kaun se hain?',
      answer: 'ADHD ke teen main types hain: (1) Inattentive Type (ADD) — sirf dhyan ki kami, hyperactivity kam; girls mein zyada common, often miss ho jaata hai. (2) Hyperactive-Impulsive Type — zyada physical restlessness aur impulsive behavior, attention thoda better. (3) Combined Type — dono saath, ye sabse zyada common hai. India mein mostly combined type diagnose hota hai — lekin inattentive type girls mein aksar identify nahi hota. Sahi type identify hona zaroori hai kyunki treatment plan type ke hisaab se different hota hai.',
    },
    {
      _key: 'faq4',
      question: 'ADHD ki homeopathic medicine kaun si hai?',
      answer: 'Homeopathy mein ADHD ke liye commonly considered medicines mein Stramonium, Hyoscyamus, Tuberculinum, Cina aur Medorrhinum shaamil hain — lekin kaunsi sahi hai ye patient ki poori picture pe depend karta hai. Ek hi diagnosis "ADHD" hone ke bawajood har bacche ki medicine alag ho sakti hai kyunki unki personality, fears, sleep pattern, aur emotional nature alag hote hain. Ye homeopathy ka sabse bada strength hai. Kripya khud medicine mat lo — ek qualified homoeopath se apna case le ke milein, individualized treatment se best results milte hain.',
    },
    {
      _key: 'faq5',
      question: 'Kya ADHD homeopathy se theek hota hai?',
      answer: 'ADHD "cure" ka concept thoda alag hai — ye ek neurodevelopmental condition hai, lekin sahi treatment se life practically normal ho sakti hai. Homeopathy ADHD management mein ek effective approach hai. Studies suggest karte hain ki individualized homeopathic treatment se attention span aur hyperactivity scores mein measurable improvement aati hai. Homeopathy ka extra benefit ye hai ki saath mein aane wali anxiety, sleep problems aur low confidence bhi address hoti hai — bina kisi side effect ke.',
    },
    {
      _key: 'faq6',
      question: 'ADHD diagnosis ke liye India mein kahan jaayein?',
      answer: 'India mein ADHD diagnosis ke liye teen options hain: (1) Child Psychiatrist — sabse trained specialist, ADHD aur comorbidities dono evaluate karte hain. (2) Pediatric Neurologist — especially agar seizures ya neurological concerns bhi hain. (3) Clinical Psychologist — psychological testing (IQ, attention tests) karte hain jo diagnosis mein help karta hai. Government hospitals mein NIMHANS (Bangalore), AIIMS Child Psychiatry, aur state mental health institutes mein ye services available hain. Private mein har bade sheher mein child psychiatrists available hain. ADHD diagnosis certificate lena zaroori hai — school accommodations aur RPwD benefits ke liye ye document chahiye.',
    },
    {
      _key: 'faq7',
      question: 'Kya ADHD adults mein bhi hoti hai?',
      answer: 'Bilkul hoti hai — aur ye bahut underdiagnosed hai. Adult ADHD mein childhood jaise "bhagna kudna" kam hoti hai, lekin inner restlessness, procrastination, missed deadlines, relationship mein impulsive decisions, aur kaam adhoora chhodna — ye pattern clear hota hai. Kaafi adults ko 30-40 ki umar mein pata chalta hai ki unhe childhood se ADHD tha. Agar aap consistently ye notice karte hain apne mein — ek psychiatrist se ADHD assessment karwana life-changing ho sakta hai. Homeopathy adult ADHD mein bhi utni hi effectively kaam karta hai jitna bacchon mein.',
    },
    {
      _key: 'faq8',
      question: 'ADHD ke liye best diet kya hai?',
      answer: 'ADHD mein protein-rich breakfast sabse important hai — eggs, dal, paneer. Protein dopamine ke precursors provide karta hai jo ADHD brain ke liye essential hai. Omega-3 se bharpoor foods (machli, akhrot, flaxseeds) brain connectivity improve karte hain. Complex carbs (brown rice, oats, jowar roti) blood sugar stable rakhte hain — sudden energy drops se ADHD symptoms temporarily badhte hain. Zinc aur magnesium rich foods (pumpkin seeds, green leafy vegetables) attention mein help karte hain. Sabse important avoid: artificial food colors, high sugar snacks, aur packaged processed foods jo behavior directly affect karte hain.',
    },
    {
      _key: 'faq9',
      question: 'ADHD bacchon ki padhai kaise karwayein — ghar pe tips?',
      answer: 'ADHD bachon ke liye padhai ka tarika change karna padta hai, mehnat nahi badhaani: Pomodoro technique — 20 min padho, 5 min break, baar baar yahi repeat karo. Ek kaam ek time pe — multiple subjects saath mein nahi. Checklist banao — visual cues ADHD brain ke liye task completion easy karti hain. Quiet study zone banao — distractions minimize karo. Homework ke pehle 10-15 min physical activity — brain "ready" ho jaata hai. Praise small wins — motivation ADHD mein external honi padti hai. Tablet/phone homework ke time hatao — completely.',
    },
    {
      _key: 'faq10',
      question: 'ADHD mein school mein kya accommodations milne chahiye?',
      answer: 'India mein Rights of Persons with Disabilities (RPwD) Act 2016 ke under ADHD officially recognized disability hai. School mein ye accommodations legally possible hain: exams mein extra time (25-50% aur time), front row seating — teacher ke paas, oral exams ka option, short breaks during exams, reduced distraction environment. Parents ko school principal ko written application deni chahiye ADHD diagnosis certificate ke saath. CBSE aur state boards bhi diagnosed students ko accommodations provide karte hain board exams mein.',
    },
    {
      _key: 'faq11',
      question: 'ADHD ka diagnosis kaise hota hai — kaunsa test?',
      answer: 'ADHD ka koi blood test ya MRI nahi hota — ye clinical diagnosis hai. Ek trained child psychiatrist, pediatric neurologist ya clinical psychologist karenge: detailed history (parents se, teachers se), standardized rating scales (Conners\' Rating Scale, ADHD Rating Scale — parents aur teachers dono bharte hain), psychological testing (IQ test, attention tests), aur rule out karna (thyroid, vision, hearing problems jo ADHD jaisi dikhe). Process mein 2-4 sessions lag sakte hain — ek hi visit mein diagnosis milne ki expect mat karo, good diagnosis time leta hai.',
    },
    {
      _key: 'faq12',
      question: 'Kya ADHD ka test ghar pe hota hai?',
      answer: 'Ghar pe koi definitive test nahi hota — online quizzes aur checklists sirf initial screening ke liye hain, diagnosis ke liye nahi. Lekin agar 6+ mahine se consistently 6+ symptoms dikhen (jaise bhoolna, focus na hona, impulsivity) — aur ye school aur ghar dono mein ho — to professional evaluation zaroor karwao. Self-diagnosis harmful ho sakta hai — similar symptoms anxiety, learning disability ya sleep disorder se bhi ho sakte hain. Professional se milna sahi tarika hai.',
    },
    {
      _key: 'faq13',
      question: 'Kya ADHD wala baccha normal life jee sakta hai?',
      answer: 'Bilkul haan — aur bahut ADHD adults ne extraordinary success achieve ki hai. Richard Branson, Simone Biles, Justin Timberlake, aur India ke kai successful entrepreneurs ko ADHD hai ya tha. ADHD ka matlab struggle nahi, alag wiring hai — jo sahi direction mein channel ho to creativity, hyperfocus aur out-of-the-box thinking ke roop mein strengths ban jaati hai. Sahi diagnosis, consistent treatment (homeopathy ya otherwise), school support, aur family ka positive attitude — in cheezon se ADHD wale bachon ka future bright hota hai.',
    },
    {
      _key: 'faq14',
      question: 'ADHD aur anxiety ek saath ho sakti hai kya?',
      answer: 'Haan — aur ye bahut common hai. Roughly 50% ADHD patients mein anxiety bhi hoti hai (ise comorbidity kehte hain). Iska reason ye hai ki ADHD ki wajah se academic aur social failures baar baar hoti hain — jis se anxiety naturally develop hoti hai. Homeopathy mein ye ek advantage hai — individualized remedy akser dono conditions simultaneously address kar sakti hai. Agar anxiety significant ho, to uska treatment bhi equally zaroori hai.',
    },
    {
      _key: 'faq15',
      question: 'ADHD mein exercise kyun important hai?',
      answer: 'Exercise ADHD mein literally "natural medicine" jaisi kaam karti hai. Physical activity ke baad brain mein dopamine, norepinephrine aur serotonin release hoti hai — ye wohi neurotransmitters hain jo ADHD conventional medicines bhi target karti hain. Studies dikhate hain ki 30 minute aerobic exercise ADHD bacchon mein 2-4 ghante ke liye focus aur attention improve karta hai. Ideal exercises ADHD mein: martial arts, swimming, cycling, football, basketball — jo coordination aur brain engagement dono karte hain. Roz ki exercise ADHD management ka non-negotiable part hai.',
    },
    {
      _key: 'faq16',
      question: 'ADHD ke saath bacche ko boarding school bhejein kya?',
      answer: 'Generally nahi — structured family environment ADHD bacchon ke liye better hota hai. Boarding school mein parental monitoring nahi hoti, medication/homeopathy follow-up mushkil hota hai, aur peer pressure aur loneliness ADHD symptoms worsen kar sakti hai. Exceptions tab ho sakte hain jab ghar mein extreme dysfunction ho ya baccha specifically khud comfortable ho. Agar regular school mein bahut struggle hai, pehle school accommodations explore karo, tutoring try karo — boarding last resort hona chahiye.',
    },
    {
      _key: 'faq17',
      question: 'ADHD mein neend (sleep) ki problem kyun hoti hai?',
      answer: 'ADHD aur sleep ka bilkul connected relationship hai. ADHD brain raat ko "off" hone mein takleef feel karta hai — thoughts racing, activity urge. Isse delayed sleep phase hoti hai — neend aane mein 1-2 ghante zyada lagte hain. Phir subah uthna bahut mushkil hota hai. Aur neend poori na ho to ADHD symptoms next day aur kharaab hote hain. Solutions: strict bedtime routine, no screens 1 hour before sleep, room dark aur cool, same sleep time daily. Homeopathy mein sleep problems bhi ADHD treatment ke part ke roop mein address hoti hain.',
    },
    {
      _key: 'faq18',
      question: 'Girls mein ADHD kyun miss ho jaata hai?',
      answer: 'Girls mein typically hyperactive-impulsive type kam hota hai — unka ADHD inattentive type hota hai: daydreaming, forgetting, struggle with focus. Ye "quiet" symptoms teachers aur parents ko kam noticeable lagte hain. Girls socially mask karna bhi jaldi seekh jaati hain — apni struggles hide karti hain. Result: diagnosis late hota hai — often adolescence ya adulthood mein. Agar aapki beti consistently forget karti hai, homework slowly karti hai, easily distracted hoti hai — ADHD evaluation zaroor karwao chahe wo "calm" hi kyun na ho.',
    },
    {
      _key: 'faq19',
      question: 'ADHD mein mobile/screen time ke baare mein kya sochein?',
      answer: 'Screen time ADHD mein ek serious concern hai — ADHD brain dopamine ke liye constantly hungry hota hai, aur fast-paced games aur videos rapid dopamine hits dete hain. Ye rewiring karta hai brain ki — slow, effortful tasks (padhai, social interaction) aur bhi boring lagne lagti hain. Guidelines: weekdays max 45-60 minutes, weekends max 2 hours. Content matter karta hai — educational slow-paced content vs fast-action gaming alag effects rakhte hain. ADHD bachon ko self-regulate karna extra mushkil hai — isliye parents ko firm limits set karne chahiye.',
    },
    {
      _key: 'faq20',
      question: 'ADHD ka parent hona mushkil hai — kya koi help hai?',
      answer: 'Bahut mushkil hai — aur ye acknowledge karna zaroori hai. ADHD bachon ke parents mein stress, guilt, aur exhaustion commonly reported hain. India mein parent support groups exist karte hain — ADHD India Community (Facebook), CHADD India network, aur kuch cities mein in-person support groups. Parent training programs bhi hote hain — "Parent Management Training" — jo ADHD specific parenting skills sikhata hai. Aur ye yaad rakhein: aap akele nahi hain. ADHD manage hota hai — aur sahi support se aapka aur bacche dono ka life better hoga.',
    },
    {
      _key: 'faq21',
      question: 'Kya sirf homeopathy se ADHD manage kar sakte hain ya allopathy bhi zaroori hai?',
      answer: 'Mild to moderate ADHD mein sirf homeopathic treatment — especially individualized constitutional treatment — se meaningful improvement possible hai, aur yahi many parents prefer karte hain side effects concern ki wajah se. Moderate to severe ADHD mein — especially jab academic failure imminent ho ya behavior safety risk pose kare — conventional treatment ke saath saath homeopathy complementary role mein use karna better outcomes deta hai. Ye binary decision nahi hai — dono saath chal sakte hain. Doctor aur homoeopath se frank conversation karein aur family ki values, child ki severity sab dekhke decide karein.',
    },
    {
      _key: 'faq22',
      question: 'ADHD diagnosis ke baad pehla kadam kya hona chahiye?',
      answer: 'Diagnosis ke baad teen steps simultaneous karo: (1) School ko batao — written note ke saath; accommodations request karo (extra time, seating). (2) Homoeopathy treatment start karo. (3) Family education — parents, grandparents, siblings ko ADHD ke baare mein basic samjhao; "shaitan hai" attitude se "brain alag kaam karta hai" understanding pe shift karo. Ek ADHD-specific therapist ya psychologist se bhi milna helpful hota hai jo behavior strategies sikhaye. Panic nahi karna — ADHD manageable hai, aur early intervention se outcomes bahut acche hote hain.',
    },
    {
      _key: 'faq23',
      question: 'ADHD mein koi supplement help karta hai?',
      answer: 'Kuch supplements ADHD management mein research-backed hain: Omega-3 (EPA+DHA) — 1-2g daily; multiple studies mein attention improvement shown. Zinc — deficiency ADHD symptoms badhaati hai; supplementation kuch cases mein helpful. Magnesium — hyperactivity aur sleep improve karta hai. Vitamin D — ADHD patients mein often deficient; supplement zaroori ho sakta hai. Iron (agar deficiency ho) — iron deficiency ADHD worsen karta hai significantly. Supplement lene se pehle doctor se zaroor baat karein — especially children mein. Ye conventional ya homeopathic treatment ka replacement nahi hain, support ke roop mein kaam karte hain.',
    },
    {
      _key: 'faq24',
      question: 'Kya ADHD hereditary hai — dusre bachon ko bhi hogi kya?',
      answer: 'ADHD mein genetic component strong hai — roughly 70-80% heritability studies mein dikhti hai. Agar ek parent ya sibling ko ADHD hai, to doosre siblings mein bhi chance badhta hai — lekin guaranteed nahi hota. Environment bhi role play karta hai. Agar ek bacche ko ADHD diagnose ho to dusre bacchon ki bhi screening karwana wise decision hai — kyunki early identification aur early intervention se academic aur emotional outcomes bahut better hote hain. Guilt feel mat karo — ADHD inherited hona kisi ki galti nahi hai.',
    },
    {
      _key: 'faq25',
      question: 'Kya ADHD se bachcha bada hokar theek ho jaata hai?',
      answer: 'Kai cases mein ADHD symptoms adolescence ke baad improve hote hain — hyperactivity especially kam hoti hai. Lekin inattention aur impulsivity kaafi adults mein persist karti hai — sirf outward expression change ho jaati hai. Roughly 60% ADHD bachon ke symptoms adulthood mein bhi continue karte hain kisi na kisi form mein. Ye "permanent problem" nahi hai — sahi treatment aur strategies se bahut se adults ADHD ke saath bahut successful aur fulfilling life jeete hain. Goal "cure" nahi, optimal functioning hai — aur homeopathy us journey mein ek safe, effective partner ho sakti hai.',
    },
  ],

  sources: [
    { _key: 's1', name: 'American Psychiatric Association — DSM-5 (ADHD Criteria)', url: 'psychiatry.org', year: '2022' },
    { _key: 's2', name: 'CCRH — Homoeopathy in Neurodevelopmental Disorders', url: 'ccrhindia.nic.in', year: '2022' },
    { _key: 's3', name: 'Indian Journal of Research in Homoeopathy — ADHD Homeopathic Studies', url: 'ijrh.org', year: '2022' },
    { _key: 's4', name: 'Lancet Global Burden of Disease Study — ADHD India Prevalence', url: 'thelancet.com', year: '2021' },
    { _key: 's5', name: 'NIMH — ADHD Overview', url: 'nimh.nih.gov', year: '2023' },
    { _key: 's6', name: 'CHADD — Evidence-Based Treatments', url: 'chadd.org', year: '2022' },
    { _key: 's7', name: 'Indian Academy of Pediatrics — ADHD Guidelines India', url: 'iapindia.org', year: '2020' },
  ],

  doctorNote: 'Mere clinic mein ADHD ke jo cases aate hain, unme se majority parents tab aate hain jab school ne complain ki ho — aur bacche ki self-esteem already hurt ho chuki hoti hai. Sabse pehle main unhe ye samjhata hoon: baccha lazy nahi hai, uska brain sirf alag hai. Constitutional treatment mein 3-4 mahine ke baad parents khud report karte hain ki baccha "zyada shant" hua hai — sleep better hai, tantrums kam hue hain, aur kuch cases mein teacher feedback bhi positive aata hai. Combined cases mein main always school coordination ki salah deta hoon saath mein. — Dr. Shadab, Homeopedia.in',
}

async function seed() {
  console.log('Seeding ADHD (Attention Deficit Hyperactivity Disorder)...')
  await client.createOrReplace(doc)
  console.log('✅ Done! disease-adhd seeded.')
}

seed()
