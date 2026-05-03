import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-tennis-elbow',
  _type: 'disease',
  title: 'Tennis Elbow (Lateral Epicondylitis)',
  hindiName: 'Kohni Ka Dard / Kohni Ki Nass Ka Dard',
  slug: { _type: 'slug', current: 'tennis-elbow' },
  category: 'Joints',
  publishedAt: '2026-05-03T00:00:00.000Z',
  metaTitle: 'Tennis Elbow Treatment in Hindi | Homeopathy | Homeopedia',
  metaDescription: 'Tennis Elbow (kohni dard) ka permanent treatment, causes, exercises aur homeopathic medicines — verified info, doctor-reviewed. Homeopedia.in',
  heroText: 'Tennis Elbow — ya medical language mein Lateral Epicondylitis — ek aisi condition hai jisme kohni ke baahri hisse mein dard hota hai. Ye dard wahan hota hai jahan arm ki muscles ka tendon kohni ki haddi se juda hota hai. Naam mein "Tennis" zaroor hai — lekin 95% patients ne kabhi tennis nahi khela! Ye bimari kisi bhi insaan ko ho sakti hai jo apni arm aur wrist baar baar usi tarah use karta ho — jaise painter, carpenter, cook, ya office mein computer use karne wale. Basically: baar baar ek hi motion karne se tendon mein micro-tears aati hain, inflammation hota hai, aur kohni se lekar haath tak dard aur kamzori feel hoti hai. Sahi treatment se ye bilkul theek ho sakti hai.',

  quickFacts: {
    whatItIs: 'Tennis Elbow mein sirf 5% cases actual tennis players hote hain — 95% patients aise kaam karte hain jisme haath baar baar same motion karta hai',
    howCommon: 'IT professionals, cooks aur homemakers mein Tennis Elbow India ke top 5 most common occupational injuries mein hai; peak age 35-50 saal',
    treatmentDuration: 'Sahi treatment se 80-90% patients 3-6 mahine mein pain-free hote hain bina surgery ke',
  },

  causes: [
    'Repetitive arm/wrist movements — baar baar ek hi kaam karna jaise screw karna, mouse click karna, ya chopping karna',
    'Overuse injury — muscles aur tendons ko rest nahi milta to micro-tears accumulate ho jaate hain',
    'Poor grip technique — galat tarike se weight uthana ya racket pakadna tendon pe extra stress deta hai',
    'Sudden increase in activity — bina training ke achanak zyada kaam ya exercise karna',
    'Weak forearm muscles — agar muscles weak hain to tendons akele zyada load uthate hain',
    'Age-related tendon changes — 30-50 saal ki age mein tendons naturally thodi stiffer aur less flexible hoti hain',
  ],

  riskFactors: [
    'Age 30-50 saal (peak risk group)',
    'IT professionals aur computer users (daily mouse + keyboard)',
    'Cooks, chefs — continuous chopping aur stirring',
    'Carpenters, plumbers, painters — repetitive arm movements',
    'Racket sports players — badminton, tennis, squash',
    'Cricket players — especially bowlers',
    'Homemakers — kitchen work, wiper chalana, kapde nikorna',
    'Poor workstation ergonomics — galat chair/desk height',
  ],

  complications: [
    'Chronic tendinosis — tendon mein permanent degenerative changes aa jaate hain jo bahut mushkil se theek hote hain',
    'Grip weakness badhti jaati hai — rozmarra ke kaam mein takleef, jaise glass uthana, door kholna, likhna',
    'Sleep disturbance — raat ko dard badh jaata hai, kuch log so nahi paate',
    'Elbow stiffness — agar bahut time tak treat na karein to movement limited ho sakti hai',
  ],

  types: [
    {
      _key: 'type1',
      name: 'Lateral Epicondylitis (Tennis Elbow — Asli wala)',
      description: 'Kohni ke BAAHRI (outer) side pe dard — ye sabse common type hai, 80% cases. Wrist aur fingers upar ki taraf extend karne wali muscles affect hoti hain. Trigger: Racket sports, painting, carpentry, computer mouse.',
    },
    {
      _key: 'type2',
      name: 'Medial Epicondylitis (Golfer\'s Elbow)',
      description: 'Kohni ke ANDAR ki (inner) side pe dard — kam common lekin dono ke symptoms similar lagte hain. Wrist neeche ki taraf flex karne wali muscles affect hoti hain. Trigger: Golf, cricket bowling, wajan uthana, gardening.',
    },
    {
      _key: 'type3',
      name: 'Chronic Tennis Elbow',
      description: '6 mahine se zyada chala aaya case. Tendon mein degenerative changes aa jaate hain. Treatment zyada waqt maangta hai. Homeopathy is type mein particularly useful hai.',
    },
    {
      _key: 'type4',
      name: 'Occupational Tennis Elbow',
      description: 'Specifically kaam-kaaj ki wajah se — IT professionals, cooks, hairdressers, carpenters. Trigger recurring hota hai isiliye treatment ke saath ergonomic changes bhi zaroori hain.',
    },
  ],

  medicines: [
    {
      _key: 'med1',
      name: 'Rhus Toxicodendron (Rhus Tox)',
      indicatedFor: 'Jo log rest karne pe dard zyada feel karein aur thodi movement se — ya warm se — relief mile; subah uthte hi stiffness ho jo baad mein kuch kaam karne pe thoda kam ho.',
      whyItHelps: 'Rhus Tox tendons, ligaments aur joints ki "rest mein worse, motion se better" type inflammation mein classically use hoti hai. Tennis elbow ka ye sabse common symptom pattern hai.',
    },
    {
      _key: 'med2',
      name: 'Ruta Graveolens',
      indicatedFor: 'Jab tendons aur periosteum (haddi ki coating) directly painful ho; kohni press karne pe specific point pe dard ho; aur dono rest aur movement pe dard ho.',
      whyItHelps: 'Ruta ko homeopathy ki "tendon medicine" kaha jaata hai — iska documented affinity tendons, ligaments aur cartilage ke liye hai. Tennis elbow mein ye sabse prescribed medicines mein se ek hai.',
    },
    {
      _key: 'med3',
      name: 'Bryonia Alba',
      indicatedFor: 'Jab koi bhi movement — chahe kitni bhi choti ho — dard badha de; rest se complete relief mile; dard tearing ya bursting type ka ho.',
      whyItHelps: 'Bryonia "motion se worse" conditions ki primary medicine hai. Agar dard hila-dulane se bilkul nahi sehta aur aaram karne se hi theek lagta hai, to Bryonia is pattern ke liye indicated hai.',
    },
    {
      _key: 'med4',
      name: 'Arnica Montana',
      indicatedFor: 'Jab dard injury ya overuse ke turant baad shuru hua ho; bruised ya sore feeling ho kohni mein; press karne se avoid karo aisi feeling.',
      whyItHelps: 'Arnica acute trauma aur muscle soreness mein homeopathy ki first-choice medicine hai. Fresh cases ya flare-ups mein shuru mein Arnica se start karte hain.',
    },
    {
      _key: 'med5',
      name: 'Calcarea Fluorica',
      indicatedFor: 'Chronic, purane cases mein jahan tendons tight ya thickened feel hon; bony deposits ki possibility ho; ya baar baar relapse ho raha ho.',
      whyItHelps: 'Calc Fluor fibrous tissue, tendons aur bony attachments ki medicine hai — chronic degeneration aur repeated tendon injuries mein ye tissue-level repair ko support karta hai maana jaata hai.',
    },
  ],

  diet: {
    recommended: [
      'Haldi (Turmeric) wala doodh ya khana — curcumin mein natural anti-inflammatory properties hain jo tendon healing support karta hai',
      'Adrak (Ginger) — gingerol compound inflammation reduce karta hai; chai mein ya khane mein daily use karein',
      'Omega-3 rich foods (Akhrot, Flaxseeds, Fatty fish) — inflammation ki chain reaction rokne mein help karte hain',
      'Bone broth (Haddi ka shorba) — collagen aur amino acids se bharpoor, tendon tissue repair ke liye directly helpful',
      'Eggs — complete protein + Vitamin D dono milte hain; tendon strength ke liye zaroori',
      'Citrus fruits (Nimbu, Santra, Amla) — Vitamin C collagen synthesis mein most critical nutrient hai; daily lein',
      'Papaya — papain enzyme inflammation kam karta hai aur Vitamin C bhi high hota hai',
      'Palak, Methi, Saag — magnesium se bharpoor; muscle aur tendon relaxation mein help karta hai',
      'Kela (Banana) — potassium muscle cramps aur stiffness reduce karta hai',
      'Til (Sesame), Dairy — calcium bone aur tendon attachment point ko strong rakhta hai',
    ],
    avoid: [
      'Maida products (White bread, Biscuits, Pakode) — refined carbs inflammation badhate hain, healing slow hoti hai',
      'Fried food (Samosa, Chips) — trans fats inflammatory cytokines badhate hain',
      'Excess sugar (Cold drinks, Mithai, Packaged juice) — sugar directly inflammation promote karta hai',
      'Alcohol — dehydration karta hai, tendon healing slow hoti hai',
      'Excess red meat — arachidonic acid content inflammation badha sakta hai agar zyada ho',
      'Processed meats (Sausage, Salami) — preservatives aur sodium inflammatory response trigger kar sakte hain',
      'Excess namak (salt) — water retention se swelling aur pressure badh sakta hai',
      'Caffeinated drinks in excess (>3 cups chai/coffee) — calcium absorption reduce karta hai jo tendon health ke liye zaroori hai',
    ],
  },

  seasonalCare: [
    {
      _key: 'winter',
      season: 'Sardi (October - February)',
      tips: 'Kohni zyada stiff hogi kyunki cold weather blood circulation reduce karta hai. Warm compress / heating pad subah uthte hi lagao — 10-15 min — exercises se pehle. Woolen / thermal sleeve specifically elbow ke liye use karein kaam karte waqt. Cold water se haath dhone ke baad immediately elbow ko warm kapde se cover karo. Homeopathic medicines sardi mein often zyada effectively work karti hain — doctor se consult karo.',
    },
    {
      _key: 'summer',
      season: 'Garmi (March - June)',
      tips: 'Hydration SABSE important — tendons dry/tight hoti hain dehydration mein. AC environment mein zyada time — joints ke liye cold exposure; sleeve se cover rakho. Sweat se grip problems — better grip tools ya anti-slip gloves use karein agar kaam karna ho. Subah 15-20 min dhoop lena tendon health ke liye genuinely helpful hai — Vitamin D naturally milta hai.',
    },
    {
      _key: 'monsoon',
      season: 'Barish (July - September)',
      tips: 'Humidity se tendons temporarily swollen feel ho sakti hain. Wet floors pe slip na ho — ek sudden jerk bhi elbow ko dobara injure kar sakta hai. Kuch patients mein monsoon mein dard badh jaata hai — doctor ko update karo so medicine adjust ho sake. Damp haath se kaam karne ke baad dry karo immediately.',
    },
  ],

  dosDonts: {
    dos: [
      'Ice pack 10-15 min lagao pehle 48-72 ghante mein (acute flare mein) — inflammation initial stage mein ice se reduce hoti hai; uske baad warm compress better hai',
      'Wrist aur forearm stretching exercises daily karein — physiotherapist-guided stretching tendon flexibility restore karta hai aur recurrence rokta hai',
      'Tennis Elbow strap/brace use karein kaam karte waqt — ye tendon pe load reduce karta hai, kaam ke dauran pain kam hoti hai',
      'Ergonomics fix karein — computer mouse, chair height, keyboard angle check karein; ek baar "workstation assessment" lein',
      'Regular magnesium-rich food ya supplement lein — muscle aur tendon relaxation maintain karta hai',
      'Paani khub piyein — tendons avascular hote hain (blood supply limited) isiliye hydration unki health ke liye extra important hai',
      'Homeopathic consultation mein poori history dein — kab dard badhta hai, kab kam hota hai, kaun sa kaam trigger karta hai — ye sab batao taaki accurate medicine mile',
    ],
    donts: [
      'Dard mein "push through" mat karo — ye soch Tennis Elbow mein seedha nuksaan karti hai; tendon ko heal hone ke liye rest chahiye',
      'Sudden heavy lifting ya twisting movements avoid karein — jaise tight jar kholna, heavy weight bicep curl, ya tight screw — ye tendon ko dobara damage karte hain',
      'Painkiller lekar kaam mat karo (bina reason ke) — dard band ho jaata hai lekin tendon damage continue hota rehta hai',
      'Self-massage zyada aggressively mat karo bina guidance ke — galat technique se inflammation badh sakti hai',
      'Wrist ko backward zor se stretch mat karo khud se — ye position tendon pe direct stress deti hai',
      'Cortisone injection ke baad turant heavy work mat shuru karo — injection se relief milti hai lekin tendon temporarily aur vulnerable hoti hai; 2-3 hafte rest mandatory hai',
    ],
  },

  faqs: [
    {
      _key: 'faq1',
      question: 'Tennis Elbow bina surgery ke theek ho sakta hai kya?',
      answer: 'Haan — Tennis Elbow ke 90-95% cases surgery ke bina bilkul theek ho jaate hain. Surgery bahut rare cases mein chahiye hoti hai — jab 6-12 mahine ke proper conservative treatment ke baad bhi koi improvement na ho. Zyada tar patients 3-6 mahine mein significant improvement feel karte hain. Isiliye agar koi aapko pehle hi surgery ke liye push kare — ek aur doctor se second opinion zaroor lein.',
    },
    {
      _key: 'faq2',
      question: 'Tennis Elbow kitne time mein theek hota hai?',
      answer: 'Recovery time case ki severity pe depend karta hai: Mild cases (2-3 mahine se kam purana) — 6-8 hafte mein significant improvement; Moderate cases — 3-6 mahine ka realistic timeframe; Chronic cases (6+ mahine purana ya repeat injury) — 6-12 mahine, lekin proper treatment se theek hota hai. Jo log treatment ke saath triggers bhi control karte hain (kaam ka style, ergonomics) unka recovery time kaafi tez hota hai. Sirf medicine lekar same kaam karte raho to recovery slow hogi.',
    },
    {
      _key: 'faq3',
      question: 'Tennis Elbow ka ghar pe ilaaj kya hai?',
      answer: 'Ghar pe ye karo: Ice pack — pehle 72 ghante mein 10-15 min, 3-4 baar din mein; Warm compress — uske baad subah uthte hi 10 min; Tennis Elbow brace — online ya medical store pe milta hai, kaam karte waqt pehno; Wrist stretching — haath seedha rakho, doosre haath se fingers ko gently neeche ki taraf kheencho, 30 sec hold; Rest — triggering activity se minimum 2 hafte break. Ghar pe ilaaj temporary relief ke liye theek hai — lekin agar dard 3-4 hafte mein kam na ho to doctor zaroor dikhao.',
    },
    {
      _key: 'faq4',
      question: 'Tennis Elbow mein kya nahi karna chahiye?',
      answer: 'Avoid karein: Dard ke bawajood heavy lifting ya twisting movements; painkiller lekar kaam jaari rakhna (damage continue hota hai); aggressive self-massage without guidance; computer mouse zyada der tak bina break ke; ek hi position mein arm ko kafi der rakhna; cold drinks ya cold water mein haath dalna specially sardi mein; galat desk/chair height wali ergonomics ignore karna — ye condition directly cause ya worsen karta hai.',
    },
    {
      _key: 'faq5',
      question: 'Tennis Elbow aur Golfer\'s Elbow mein kya fark hai?',
      answer: 'Dono similar lagte hain lekin location different hai: Tennis Elbow — kohni ka BAAHRI hissa (outer bump), lateral side; Golfer\'s Elbow — kohni ka ANDAR ka hissa (inner bump), medial side. Test: Ek finger rakhein kohni ke outer bump pe — agar wahan zyada dard ho to Tennis Elbow. Inner bump pe dard ho to Golfer\'s Elbow. Dono ka treatment broadly similar hai — lekin exercises ka direction alag hota hai isiliye diagnosis sahi hona zaroori hai.',
    },
    {
      _key: 'faq6',
      question: 'Kya homeopathy Tennis Elbow mein kaam karti hai?',
      answer: 'Haan — homeopathy Tennis Elbow mein ek effective approach hai, especially Rhus Tox aur Ruta Graveolens jaise medicines ke saath jo tendons ki healing ko specifically target karte hain. CCRH-associated studies mein repetitive strain injuries mein pain score aur grip strength dono mein placebo se better outcomes note kiye gaye hain. Homeopathy ka fayda ye bhi hai ki ye sirf dard nahi — underlying tendon repair ko support karta hai bina kisi side effect ke. Chronic aur repeat cases mein especially homeopathy zyada helpful hai kyunki root cause address hota hai.',
    },
    {
      _key: 'faq7',
      question: 'Tennis Elbow ki best exercise kaun si hai?',
      answer: '3 exercises jo most evidence-backed hain: (1) Wrist Extensor Stretch — haath seedha rakho, doosre haath se fingers ko gently neeche ki taraf kheencho, 30 sec, 3 reps, din mein 3 baar. (2) Tyler Twist (Eccentric Exercise) — ek flexible bar ya rubber stick ko dono hathon se pakdo, ek haath twist karo aur doosre haath se slowly wapas aao — physiotherapist se seekh ke karein. (3) Grip Squeeze — soft rubber ball ko squeeze karo, 10-15 reps, tin baar din mein. Zaroor dhyan rakho: exercises dard mein NAHI karni hain — sirf aise level pe karni hain jahan discomfort ho, sharp pain nahi.',
    },
    {
      _key: 'faq8',
      question: 'Computer ya laptop use karne walon ko Tennis Elbow kyu hota hai?',
      answer: 'Computer use karte waqt mouse continuously ek direction mein click aur scroll karte hain — ye exact repetitive motion hai jo wrist extensor tendons pe stress deta hai. Galat desk height — jahan arm float kare ya upar ki taraf angle ho — stress multiply karta hai. Studies mein IT professionals aur desk workers mein Tennis Elbow aur related repetitive strain injuries tezi se badh rahi hain. Solution: Mouse pad ke saath wrist rest use karein, desk height check karein (elbow 90 degree angle pe honi chahiye), aur har 45-60 min pe haath hilane wala break lein.',
    },
    {
      _key: 'faq9',
      question: 'Tennis Elbow dobara na ho iske liye kya karein?',
      answer: 'Ergonomics permanently fix karein — workstation assessment ek baar zaroor karwao. Forearm exercises weekly routine mein daalo — strong muscles tendons ka kaam share karte hain. Technique improve karein — agar sport khelate ho to coach se grip aur stroke mechanics check karwao; kaam karte ho to occupational therapist se. Proper warm-up karo kisi bhi heavy arm activity se pehle. Overtraining ya sudden activity increase avoid karein. Homeopathic constitutional treatment — recurrence rokne mein particularly useful hai.',
    },
    {
      _key: 'faq10',
      question: 'Kaise pata chalega ki mujhe Tennis Elbow hai ya koi aur problem?',
      answer: 'Tennis Elbow ka classic test: "Chair Test" — ek seedhi chair ko ek haath se uthao jaise normally uthate hain (palm neeche). Agar kohni mein baahri side dard ho to Tennis Elbow highly likely hai. "Cozen\'s Test" — wrist ko upar ki taraf bend karo resistance ke against — dard mahsoos ho to positive. Lekin self-diagnosis limit hoti hai — doctor se diagnose karwana zaroori hai kyunki kuch baar radial nerve entrapment, bursitis, ya referred cervical pain bhi same jagah dard deta hai. X-ray ya ultrasound agar doctor recommend karein to karwao.',
    },
    {
      _key: 'faq11',
      question: 'Tennis Elbow mein MRI ya X-ray karna zaroori hai kya?',
      answer: 'Zyada tar cases mein NAHI — diagnosis clinical examination se ho jaati hai. X-ray tab helpful hota hai jab calcium deposit ya bony changes suspect hon. MRI tab use hoti hai jab conservative treatment 3-4 mahine ke baad fail ho aur surgery consider karna ho — tab MRI tendon tear ki extent clearly dikhata hai. Routine ya starting mein MRI zaruri nahi — ye expensive bhi hai. Doctor ki salaah pe hi ye tests karwao.',
    },
    {
      _key: 'faq12',
      question: 'Tennis Elbow mein haath sunn ho jaata hai kya?',
      answer: 'Tennis Elbow mein generally numbness (sunn hona) nahi hoti. Agar haath ya ungliyaan sunn ho rahi hain ya jhanjhanahat (tingling) aa rahi hai — to ye Radial Tunnel Syndrome ya cervical spine problem ho sakti hai jo similar location pe dard deti hai lekin nerve involvement hoti hai. Ye distinction bahut important hai kyunki treatment alag hota hai. Numbness ke saath kohni dard — doctor ko zaroor batao aur nerve conduction test ke baare mein poocho.',
    },
    {
      _key: 'faq13',
      question: 'Tennis Elbow mein kaun sa kaam avoid karna chahiye?',
      answer: 'Directly avoid karein: heavy grocery bags ek haath mein uthana; tight jar ya bottle caps kholna; screwdriver ya wrench use karna; wiper, mop, ya jhadu istemaal karna; racket sports ya throwing sports — temporarily band rakho; long writing sessions — pen/pencil ka grip relax karein. Reduce karein (completely band nahi): computer mouse use — breaks dete hue karein; cooking — chopping thodi der ke liye theek hai lekin marathon kitchen sessions avoid karein. Complete rest bhi achha nahi — gentle movement healing ke liye zaroori hai, bas triggering intensity avoid ho.',
    },
    {
      _key: 'faq14',
      question: 'Cooking karne waali ghar ki auraton ko Tennis Elbow kyu hota hai aur kaise bachein?',
      answer: 'Homemakers mein Tennis Elbow ke common triggers hain: continuous chopping, rolling belan, kapde neeche patak ke dhona, pressure cooker handle ghoomana, aur heavy patila uthana — ye sab wrist extension + grip combined movements hain. Bachne ke liye: lighter utensils use karein — cast iron ki jagah anodized aluminum; cutting board pe seedha katein; elbow brace kitchen kaam ke time pehno; electric chopper ya food processor use karein jab ho sake; kaam ke beech 5 min ka haath rest zaroor dein.',
    },
    {
      _key: 'faq15',
      question: 'Bacchon mein Tennis Elbow ho sakta hai?',
      answer: 'Haan — ho sakta hai lekin rare hai. Bacchon mein zyada badminton, cricket, aur gaming (joystick, phone gaming) ki wajah se cases aa rahe hain. Bacchon ke tendons still developing hote hain isiliye adults jitni injury absorb nahi kar sakte. Agar 10-16 saal ke bachche ko kohni dard ho jo khelne ya phone use se badhe — doctor ko dikhao, ignore mat karo. Bacchon ka proper diagnosis (apophysitis rule out karna) zaroori hai — ye growth plate related bhi ho sakta hai.',
    },
    {
      _key: 'faq16',
      question: 'Cricket mein Tennis Elbow — batsmen ya bowler kise zyada hota hai?',
      answer: 'Dono ko — lekin alag type ki: Batsmen — Tennis Elbow (lateral, baahri) zyada — batting stroke mein wrist rotation; Bowlers — Golfer\'s Elbow (medial, andar wala) zyada — bowling action mein load; Fielders — repetitive throwing se bhi dono possible. India mein cricket bahut common cause hai — agar aap club ya state level pe khelate ho aur kohni dard hai to sports physiotherapist se elbow screening zaroor karwao.',
    },
    {
      _key: 'faq17',
      question: 'Tennis Elbow ke liye kaun si homeopathic medicine sabse zyada kaam karti hai?',
      answer: 'Specific symptom pattern pe depend karta hai — isiliye ek qualified homoeopath decide karta hai. Broadly: Rhus Tox — rest pe zyada dard, movement se thoda better; Ruta Graveolens — direct tendon tenderness, press karne pe exact point pe dard; Bryonia — koi bhi movement se dard badhe, rest se achha lage; Arnica — fresh injury ya recent flare, bruised feeling; Calc Fluor — purana chronic case, baar baar recurrence. Ye sirf guide hai — khud mat decide karo, doctor se milein. Same naam ki medicine sahi potency aur dose mein na deni jaaye to result nahi aata.',
    },
    {
      _key: 'faq18',
      question: 'Tennis Elbow mein homeopathy kitne din mein asar dikhana shuru karta hai?',
      answer: 'Pehle 2-4 hafte mein usually dard mein relief feel hone lagti hai — especially stiffness aur subah wali takleef mein. Full recovery (grip strength wapas, pain-free kaam) mein 6-16 hafte lag sakte hain depending on: kitne purana case hai; trigger avoid ho pa raha hai ya nahi; individual body\'s healing rate. Jo log consistently medicines lete hain aur ergonomics bhi fix karte hain, unka result zyada tez aata hai. Beech mein treatment band mat karo — incomplete treatment mein relapse common hai.',
    },
    {
      _key: 'faq19',
      question: 'Tennis Elbow mein chai peena chahiye ya nahi?',
      answer: '1-2 cup chai theek hai — lekin 4-5 cup din mein nahi. Zyada caffeine calcium absorption reduce karta hai jo tendon health ke liye important hai. Chai se pehle ya baad thoda kuch khaate rahein — empty stomach pe zyada chai stomach acid badhata hai jisse already dard mein takleef zyada feel hoti hai. Adrak wali chai actually thodi better hai — ginger mein anti-inflammatory properties hain.',
    },
    {
      _key: 'faq20',
      question: 'Yoga karna chahiye Tennis Elbow mein?',
      answer: 'Haan — lekin sahi poses ke saath. Avoid karein: Downward Dog (Adho Mukha Svanasana) — wrist pe full body weight dard badha sakta hai; Plank aur Chaturanga — same reason. Faydemand poses: Eagle Arms (Garudasana arms) — forearm stretch; Cow Face Pose (arms part) — tendon stretch gently; simple wrist circles aur neck stretches — circulation improve karte hain. Yoga instructor ko batao ki Tennis Elbow hai — wo modified poses denge.',
    },
    {
      _key: 'faq21',
      question: 'Tennis Elbow mein raat ko dard zyada kyu hota hai?',
      answer: 'Raat ko zyada dard 2 reasons se hota hai: (1) Position — sote waqt hum aksar arm ko curl karke ya ek position mein rakhte hain, ye sustained position tendon pe stress deta hai. (2) Circulation — raat mein body ke inflammatory chemicals reset hote hain, kuch logon mein ye process dard badhata hai temporarily. Solution: Elbow ko neutral position mein rakhein — ek thin pillow arm ke neeche rakhein. Kuch logon ko "night splint" se bhi relief milti hai. Sone se pehle warm compress 5-10 min lagane se stiffness aur raat ka dard kam hota hai. Agar raat dard bahut severe ho ya neend poori nahi ho rahi to doctor ko zaroor batao.',
    },
    {
      _key: 'faq22',
      question: 'Tennis Elbow mein weight training ya gym band karna chahiye?',
      answer: 'Temporarily reduce karein, completely band karne ki zarurat nahi. Avoid karein specifically: reverse curls, wrist curls (especially reverse); pull-ups aur chin-ups — wrist extension load hai; koi bhi exercise jisme dard feel ho. Continue kar sakte ho: legs, chest, core exercises — jahan elbow load nahi hai; light grip exercises (rehab ke taur pe); swimming (mostly — avoid stroke agar dard ho). Return to full gym: typically 6-8 hafte rehab ke baad, physiotherapist ya trainer ki guidance mein, gradually load badhao. "Pain-free progression" rule follow karein.',
    },
    {
      _key: 'faq23',
      question: 'Kab turant doctor ke paas jaana chahiye?',
      answer: 'Tennis Elbow mein ye signs dikhe to TURANT jaao: kohni mein sudden severe swelling, redness, aur heat — infection ya acute inflammation possible; dard itna badh jaaye ki arm bilkul na uthao — tendon rupture possible; haath ya ungliyaan completely sunn pad jaayein — nerve involvement; fever ke saath kohni dard — joint infection serious hai; ghar pe 6-8 hafte treatment ke baad koi improvement nahi — evaluation ki zarurat hai.',
    },
  ],

  sources: [
    'Mayo Clinic — Lateral Epicondylitis (Tennis Elbow) | 2023 | mayoclinic.org/tennis-elbow',
    'CCRH — Monograph on Homoeopathy in Musculoskeletal Disorders | 2019 | ccrhindia.nic.in',
    'Journal of Evidence-Based Complementary & Alternative Medicine — Ruta Graveolens in Tendon Injuries | 2018 | PubMed',
    'American Academy of Orthopaedic Surgeons (AAOS) — Tennis Elbow OrthoInfo | 2022 | orthoinfo.aaos.org',
    'British Journal of Sports Medicine — Conservative Treatment for Lateral Epicondylitis: Systematic Review | 2021',
  ],

  doctorNote: 'Apni clinic mein Maine Tennis Elbow ke sabse zyada cases IT professionals aur homemakers mein dekhe hain — dono mein ek cheez common hai ki wo dard ignore karke kaam karte rehte hain. Jo log pehle 2-4 hafte mein aate hain aur rest + Ruta/Rhus Tox combination lete hain, unka recovery 6-8 hafte mein ho jaata hai. Zyada purane cases mein waqt lagta hai — lekin permanent improvement zaroor hoti hai. — Dr. Shadab, Homeopedia.in',
}

async function seed() {
  console.log('Seeding Tennis Elbow (Kohni Ka Dard)...')
  await client.createOrReplace(doc)
  console.log('✅ Done! disease-tennis-elbow seeded.')
}

seed()
