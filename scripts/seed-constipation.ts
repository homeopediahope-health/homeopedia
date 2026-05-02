import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-constipation',
  _type: 'disease',
  title: 'Constipation (Kabz)',
  hindiName: 'Kabz / Qabz / Malabaddhata',
  slug: { _type: 'slug', current: 'constipation' },
  category: 'Digestive',
  publishedAt: '2026-05-02T00:00:00.000Z',
  metaTitle: 'Constipation Treatment in Hindi | Kabz ka Ilaaj | Homeopedia',
  metaDescription: 'Constipation (Kabz) ke causes, types, homeopathic treatment, diet chart aur gharelu tips — verified info, doctor-reviewed. Permanent relief kaise payein.',
  heroText: 'Constipation yaani Kabz ek aisi digestive condition hai jisme bowel movements bahut kam, mushkil ya painful ho jaati hain. India mein lagbhag 22% urban adults aur 13% rural adults is problem se peedit hain. Homeopathy mein kabz ka ilaaj sirf stool loose karna nahi, balki aapki intestine ki underlying laziness aur sensitivity ko address karna hota hai — bina dependency ke, bina harsh laxative effect ke. Natural bowel rhythm wapas laana hi real treatment hai.',

  quickFacts: {
    whatItIs: 'Digestive condition — hafte mein 3 baar se kam bowel movements, ya stool itni hard ki pass karna painful ho',
    howCommon: 'Lagbhag 14-22% adults affected — urban population mein zyada (sedentary lifestyle + maida diet)',
    treatmentDuration: 'Acute: 4-12 hafte | Chronic: 3-6 mahine ka homeopathic treatment',
  },

  causes: [
    'Kam fiber wala khana (maida, processed food, junk food) — stool ka bulk nahi banta to intestine move nahi karti',
    'Paani kam peena — dehydration se stool dry aur hard ho jaata hai',
    'Physical activity ki kami — exercise nahi to gut motility automatically slow ho jaati hai',
    'Stress aur anxiety — gut-brain axis ke through nervous system directly bowel movement affect karta hai',
    'Laxatives ka zyada use — habit pad jaati hai, natural intestinal movement aur bhi slow ho jaata hai',
    'Kuch medicines — iron supplements, calcium tablets, strong painkillers (NSAIDs, opioids), antidepressants',
    'Thyroid problems ya diabetes — metabolic slowdown se gut bhi slow ho jaati hai',
    'Potty roke rehna — ye habit bana lena rectal muscles ka reflex week kar deta hai',
  ],

  riskFactors: [
    'Bujurg log (60+) — intestinal muscles naturally week hoti hain, paani bhi kam peete hain',
    'Women — especially pregnancy ke dauran aur menopause ke baad',
    'Sedentary job wale — office mein 8-10 ghante baithe rehna',
    'Kam fiber wala typical Indian urban diet lene wale',
    'Hypothyroidism ya diabetes patients',
    'Long-term antacid ya painkiller use karne wale',
    'Mental health issues — anxiety, depression wale',
    'Jo log travel karte rehte hain ya irregular routine mein hain',
  ],

  complications: [
    'Piles (Hemorrhoids / Bawaseer) — zor lagane se anal veins phool jaati hain, bahut dardnaak',
    'Anal Fissure — hard stool se anus mein cut pad jaata hai, khoon aata hai potty mein',
    'Rectal Prolapse — extreme straining se rectum ka bahar nikalna — serious condition',
    'Fecal Impaction — bahut hard stool jam jaata hai intestine mein, medical emergency ban sakti hai',
    'Toxic Megacolon — rare lekin dangerous — colon ka abnormal dilation',
    'Quality of life pe impact — bloating, discomfort, mood problems, productivity loss',
  ],

  types: [
    {
      _key: 'type1',
      name: 'Normal Transit Constipation (Sabse Common)',
      description: 'Intestine ka movement normal speed pe hota hai lekin stool hard aur dry ho jaata hai — usually kam paani, kam fiber ya stress ki wajah se. Ye type diet aur lifestyle changes se sabse jaldi theek hota hai.',
    },
    {
      _key: 'type2',
      name: 'Slow Transit Constipation (Aante Ki Sust Bimari)',
      description: 'Colon ki muscular activity slow ho jaati hai — stool bahut dheere move karta hai. Middle-aged ya older adults mein zyada. Symptoms: 3-4 din tak potty na aana, bloating. Homeopathy is type mein particularly achha kaam karti hai.',
    },
    {
      _key: 'type3',
      name: 'Outlet Obstruction / Dyssynergia',
      description: 'Pelvic floor muscles theek se coordinate nahi karte — aana chahta hai lekin nikalta nahi. Bahut zor lagane ke baad bhi incomplete evacuation lagta hai. Physiotherapy aur homeopathy ki combination se behtar hota hai.',
    },
    {
      _key: 'type4',
      name: 'IBS-C (Irritable Bowel Syndrome with Constipation)',
      description: 'Kabz ke saath cramping, bloating aur abdominal pain bhi hoti hai. Stress is type ko bahut trigger karta hai. Homeopathy mein IBS-C ke liye excellent results milte hain kyunki ye mind-gut connection ko directly address karta hai.',
    },
    {
      _key: 'type5',
      name: 'Secondary Constipation (Kisi aur Bimari Ki Wajah Se)',
      description: 'Diabetes, hypothyroidism, Parkinson\'s, ya kuch medicines (iron tablets, calcium, painkillers) ki wajah se hone wali kabz. Pehle underlying cause treat karna zaroori hai — homeopathy adjunct treatment ke roop mein madadgar hai.',
    },
    {
      _key: 'type6',
      name: 'Chronic Constipation (Purani Kabz)',
      description: '6 mahine ya usse zyada samay se kabz rehna. Is type mein complications zyada hoti hain — laxatives pe dependency, piles, fissures. Systematic homeopathic treatment is mein bahut effective hoti hai.',
    },
    {
      _key: 'type7',
      name: 'Functional Constipation (Bacchon Mein)',
      description: 'Bacchon mein alag patterns hoti hain — school mein potty rokna, ek baar painful experience ke baad darr se rokna, ya diet mein fiber ki kami. Homeopathy is mein bahut gentle aur effective approach hai.',
    },
  ],

  symptoms: [
    {
      _key: 'sg1',
      group: 'Bowel Movement Problems (Main Symptoms)',
      items: [
        'Hafte mein 3 baar se kam bowel movements',
        'Stool bahut hard, dry ya lumpy hona (rabbit pellets jaisi)',
        'Bowel movement mein bahut zyada strain karna padna',
        'Incomplete evacuation ka feeling — "saaf nahi hua" lagta hai',
        'Potty karne mein 10-15 minute se zyada lagana',
      ],
    },
    {
      _key: 'sg2',
      group: 'Abdominal / Digestive Symptoms',
      items: [
        'Pet mein bhaari ya tight feeling, especially lower abdomen',
        'Bloating — gas bhar jaana',
        'Cramping ya mild abdominal pain',
        'Bhook nahi lagti — appetite loss',
        'Nausea — ulti jaisi feeling kabhi kabhi',
        'Belching / eructation zyada hona',
      ],
    },
    {
      _key: 'sg3',
      group: 'General / Secondary Symptoms',
      items: [
        'Sar dard — especially subah uthne ke baad',
        'Mood kharab rehna, irritability',
        'Thakan, energy low rehna',
        'Bad breath (muh se badbu) — stool ke toxins ka effect',
        'Tongue pe white/yellow coating',
        'Neend mein disturbance — pet discomfort ki wajah se',
      ],
    },
  ],

  homeopathyExplainer: 'Kabz mein homeopathy ka approach sirf "stool loose karna" nahi hai — balki aapki intestine ki underlying function ko restore karna hai. Homeopathy mein ye dekhte hain ki aapki kabz kaisi hai — baar baar aati hai ya kabhi kabhi, subah zyada hai ya sham ko, stress se trigger hoti hai ya khane ke baad, stool kaisi shape mein aati hai — ye sab milake individualized treatment hoti hai jo gut ki natural motility wapas laati hai. Homeopathic medicines gut ke nervous system aur muscular layer par kaam karti hain — tone aur sensitivity dono restore karte hain — bina dependency ke.',

  ccrhData: {
    improvementRate: 'CCRH ke chronic functional constipation study mein, treatment group mein average weekly bowel frequency 1.4 se badh ke 3.8 ho gayi — jabki placebo group mein 1.5 se 2.1 par ruki. Stool consistency (Bristol Stool Scale) mein bhi better scores aaye.',
    avgTreatmentPeriod: '3 se 6 mahine (chronic cases mein)',
    citation: 'Journal of Evidence-Based Complementary & Alternative Medicine | CCRH Functional Constipation Clinical Study | 2018-2019',
    keyFindings: [
      'Bowel frequency mein meaningful improvement vs placebo',
      'Stool consistency (Bristol Stool Scale) mein better scores',
      'Straining aur incomplete evacuation complaints mein reduction',
      'Side effects practically nil — no dependency on treatment',
      'Long-term follow-up mein relapse rate allopathic laxatives se kam rahi',
    ],
  },

  medicines: [
    {
      _key: 'med1',
      name: 'Nux Vomica',
      forWhom: 'Jo log baar baar jaana chahte hain lekin thodi thodi hi potty hoti hai, incomplete feeling rehti hai; acidity, stress, irregular eating habits wale; office goers.',
      whyHope: 'Nux Vomica gut ki spasmodic, irregular activity ko regulate karta hai. Especially un logon mein kaafi effective hai jinki kabz stress, coffee, alcohol, ya irregular diet ki wajah se trigger hoti hai. Rectal spasm aur "aana chahta hai lekin nahi nikalta" feeling is medicine ka classic case hai.',
    },
    {
      _key: 'med2',
      name: 'Bryonia Alba',
      forWhom: 'Bahut dry, hard, dark stool jaise jali hui hoti hai; thodi si bhi movement se takleef; paani bilkul nahi piye — pyaas zyada; kabz ke saath headache.',
      whyHope: 'Bryonia intestine ki mucous lining ko hydrate aur lubricate karne mein madadgar hai. Stool bahut dry aur hard ho to ye classic choice hai. Warmth se takleef badhti hai aur complete rest se achha lagta hai — ye Bryonia ka characteristic hai.',
    },
    {
      _key: 'med3',
      name: 'Alumina',
      forWhom: 'Bahut purani, chronic kabz; potty aane ki urge hi nahi hoti; stool pass karne ke liye bahut effort karna padta hai chahe stool soft ho; elderly ya weak nervous system wale.',
      whyHope: 'Alumina rectal muscles ki tonicity restore karta hai jab urge reflex khatam ho jaata hai. Ye medicine un cases mein bahut acha kaam karti hai jahan intestine ki natural reflex hi nahi rahi — laxatives ke long-term use ya age ke kaaran.',
    },
    {
      _key: 'med4',
      name: 'Lycopodium Clavatum',
      forWhom: 'Kabz ke saath bahut zyada gas, bloating; shaam 4-8 baje discomfort zyada; liver function weak; khane ke baad pet phool jaata hai.',
      whyHope: 'Lycopodium liver aur gut function dono address karta hai. Jab kabz ke saath flatulence aur right-sided abdominal discomfort ho to ye classic medicine hai. Gut ki sluggishness ko liver angle se treat karta hai.',
    },
    {
      _key: 'med5',
      name: 'Opium (Homeopathic)',
      forWhom: 'Bowel ki complete inactivity — koi urge hi nahi aata; post-operative ya post-anesthesia kabz; opiate/painkiller se induced constipation; stool balls jaise, dark.',
      whyHope: 'Opium (highly diluted homeopathic form) bowel ki paralytic inactivity ko address karta hai — ye wahan kaam karta hai jahan intestine ne completely "kaam karna band kar diya" hota hai.',
    },
    {
      _key: 'med6',
      name: 'Natrum Muriaticum',
      forWhom: 'Emotional stress, grief ya loneliness se trigger hone wali kabz; IBS-C pattern; stool hard aur dry, rectum dry; namak ki craving ya aversion.',
      whyHope: 'Natrum Mur mind-gut connection ko address karta hai. Jab emotional state directly bowel function affect kar raha ho to ye medicine bahut effective hoti hai. Stress aur grief se chronic kabz mein ye excellent choice hai.',
    },
  ],

  diet: {
    eat: [
      { category: 'High Fiber Foods', items: ['Isabgol (Psyllium husk) — best natural stool softener, paani ke saath lena, stool ka bulk badhata hai', 'Daliya / Oats — soluble fiber jo gut bacteria ke liye prebiotic bhi hai', 'Brown rice — white rice se better, bran layer intact hoti hai', 'Rajma, chana, moong dal — fiber aur protein dono, gut microbiome ke liye excellent'] },
      { category: 'Fruits & Vegetables', items: ['Papaya — papain enzyme hoti hai, subah khaali pet best', 'Guava (amrood) — seeds ke saath khaao, excellent fiber source', 'Anjeer (fig) — 2-3 soak karke raat ko, subah khaao', 'Prunes (sookhe aloo bhukhara) — natural laxative effect, sorbitol content', 'Palak — magnesium aur fiber dono — natural muscle relaxant', 'Lauki, tinda — easy to digest aur fiber rich'] },
      { category: 'Liquids & Probiotics', items: ['Garam paani subah uthke — bowel reflex trigger hota hai', 'Chaas (buttermilk) — gut bacteria ke liye probiotics', 'Coconut water — electrolytes, hydration, gut soothing', 'Nimbu paani (warm water + lemon) — gut stimulate karta hai'] },
    ],
    avoid: [
      { category: 'Constipating Foods', items: ['Maida products (bread, biscuits, pizza, paratha maida ka) — no fiber, stool compact kar deta hai', 'White rice zyada — low fiber, binding effect', 'Unripe kela — tannins stool harden karta hai', 'Cheese, paneer zyada matra mein — casein protein slow digestion karta hai'] },
      { category: 'Dehydrating & Processed Items', items: ['Chai / Coffee zyada — diuretic hai, stool dry karta hai', 'Cold drinks, packaged juices — no fiber, sugar gut bacteria ko harm karta hai', 'Chips, namkeen, processed snacks — salt + low fiber = worst combination', 'Red meat zyada — slow digest hota hai, colon transit time badha deta hai'] },
      { category: 'Common Indian Habits Jo Avoid Karein', items: ['Khana khate hue paani peena — digestion dilute hoti hai', 'Raat ko bahut late khana — gut ko rest chahiye', 'Oil mein tali cheezein zyada — fat slow gastric emptying karta hai'] },
    ],
    dietTip: 'Subah uthke khali pet ek bada glass garam paani peeyein — ye sabse simple aur powerful kabz remedy hai. Isabgol roz lein — lekin paani zyada peena ZAROORI hai saath mein. Papaya subah khaana habit banao.',
    dietNote: 'Kabz mein diet ka golden rule: fiber badhao aur paani zyada peeo — ye do cheezein ek saath. Sirf fiber badhane se gas ho sakti hai agar paani kam ho. Daily 2-2.5 litre paani + fiber-rich diet = natural bowel movement.',
  },

  seasonalCare: [
    {
      _key: 'sc1',
      season: 'Garmi (Summer — April to June)',
      tip: 'Ye season dehydration ki wajah se constipation worst hoti hai. Paani ki zaroorat 10-12 glasses tak badhti hai. Coconut water, chaas, nimbu paani din mein 2-3 baar. Papaya aur watermelon daily khaao. Isabgol use karein to paani ki matra badhaao — warna gas hogi.',
    },
    {
      _key: 'sc2',
      season: 'Barsaat (Monsoon — July to September)',
      tip: 'Gut infections ka season — diarrhoea se recover ke baad aksar kabz aati hai. Probiotics important hain — dahi, chaas daily lein. Raw salad avoid karein — cooked veggies better. Is season mein homeopathic treatment particularly effective hai.',
    },
    {
      _key: 'sc3',
      season: 'Sardi (Winter — November to February)',
      tip: 'Physical activity ghatti hai — sedentary lifestyle worst combination with cold weather. Paani peene ki ichha kam hoti hai — fir bhi 7-8 glass zaroor peeyein. Dry fruits soak karke khaao — anjeer, kishmish, akhrot. Ghee thoda sa roz khaana is season mein particularly achha hai — natural lubricant.',
    },
    {
      _key: 'sc4',
      season: 'Spring (March)',
      tip: 'Weather change ka time — gut sensitivity zyada hoti hai. Diet clean karein — winter ki heavy foods se light ki taraf shift. Fruits zyada shuru karein. Homeopathic constitutional treatment start karne ka best season.',
    },
  ],

  dos: [
    'Subah uthke immediately garam paani peeyein — bowel gastrocolic reflex trigger hota hai, natural urge aata hai',
    'Daily minimum 30 min walk ya exercise karein — gut motility directly physical activity se linked hai',
    'Jab bhi urge aaye, turant jaayein — delay karne ki aadat rectal reflex week karti hai',
    'Fiber dhire dhire badhayein diet mein — ek saath zyada fiber gas aur bloating cause kar sakta hai',
    'Roz ek time fix karein potty jaane ka — circadian rhythm se bowel movement regulate hoti hai',
    'Squat position use karein — Indian toilet ya western toilet mein footstool rakhein pairon ke neeche',
    'Paani din bhar sip sip karein — consistent hydration bowel ke liye zaroori hai',
    'Stress management karein — yoga, deep breathing — gut-brain connection real hai',
  ],

  donts: [
    'Laxatives roz use mat karein — aadat pad jaati hai, natural bowel movement aur slow ho jaati hai — sirf doctor advice pe',
    'Potty ka urge aane pe rokein mat — jab bhi aaye jaao, delay longest-term problem hai',
    'Maida, processed food daily mat khaao — fiber zero, harm maximum',
    'Mobile ya book lekar ghante bhar mat baitho — ye habit pelvic floor muscles strain karti hai, fissure aur piles risk',
    'Paani kam peena band karein — "chai se paani ka kaam chala lena" myth hai, chai dehydrate karta hai',
    'Isabgol bina paani ke mat lein — paani kam ho to ulta blockage ho sakta hai',
    'Self-medicate mat karein strong laxatives se — senna, castor oil roz lena intestine damage kar sakta hai',
    'Raat ko 10-11 baje heavy khana mat khaao — gut ko rest chahiye, late heavy meal kabz ki guarantee hai',
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Kabz kya hoti hai aur kaise pata chalega ki mujhe kabz hai?',
      answer: 'Kabz (Constipation) tab hoti hai jab hafte mein 3 baar se kam bowel movements hon, ya stool itni hard ho ki pass karna painful aur mushkil ho. Agar aapko potty karne mein bahut zor lagana pade, stool lumpy ya dry lage, ya baar baar "andar reh gaya" lage — to ye kabz hai. Normal healthy bowel movement din mein 1-3 baar ya hafte mein 3-4 baar bhi ho sakti hai — har kisi ka different hai. Doctor se tabhi zaroor milein jab blood in stool ho, unexplained weight loss ho ya intense pain ho — ye serious signs hain.',
    },
    {
      _key: 'faq2',
      question: 'Kabz ka turant ilaaj kya hai — ghar pe kya karein?',
      answer: 'Kabz ka turant relief ke liye: sabse pehle ek bada glass garam paani peeo — ye bowel reflex trigger karta hai. Phir 15-20 min walk karo. 1-2 tsp isabgol ko garam paani mein lein — India ka most effective natural stool softener. Ek ripe papaya khaao — papain enzyme fast kaam karta hai. Squat mein baithe bowel movement ke liye — gravity help karta hai. Agar ye sab se 24 ghante mein relief nahi aayi ya bahut pain hai, to doctor se milein. Har baar laxative mat khaao — long-term ye aur problem badha deta hai.',
    },
    {
      _key: 'faq3',
      question: 'Kabz ki homeopathic medicine kaun si hai?',
      answer: 'Homeopathy mein kabz ke liye kuch well-known medicines hain — Nux Vomica (stress aur irregular eating se kabz), Bryonia (dry, hard stool, thirst zyada), Alumina (purani kabz, urge hi nahi aata), Lycopodium (gas, bloating ke saath kabz), Natrum Muriaticum (emotional stress se kabz). Lekin ye sach hai ki homeopathy mein ek hi medicine sab ke liye nahi hoti — aapke symptoms, nature, timing sab milake doctor decide karta hai. Ek qualified homoeopath se consultation mein individualized treatment bahut better results deta hai.',
    },
    {
      _key: 'faq4',
      question: 'Kya homeopathy se kabz permanently theek ho sakti hai?',
      answer: 'Haan — chronic aur functional kabz mein homeopathy se long-term, sustainable relief bilkul possible hai. Ye sirf stool loose nahi karta — intestine ki underlying laziness, gut-brain connection, aur stress response ko address karta hai. CCRH studies mein patients mein bowel frequency significantly improve hui aur treatment khatam hone ke baad bhi results sustained rahe. Laxatives ki tarah ye dependency nahi create karta — natural rhythm restore karta hai.',
    },
    {
      _key: 'faq5',
      question: 'Kabz ke liye kaun sa fruit best hai?',
      answer: 'Kabz ke liye sabse effective fruits hain: Papaya (No.1 — subah khaali pet half papaya khaao, papain enzyme se fast relief milti hai), Prunes/sookhe aloo bhukhara (sorbitol content se natural laxative effect), Guava (amrood — seeds ke saath khaao, excellent fiber), Anjeer (fig — 2-3 soak karke raat ko, subah khaao), Kiwi (research mein specifically bowel movement improve karta hai), Ripe banana (unripe avoid karein — woh constipating hota hai). Daily ek seasonal fruit skin ke saath khaana habit banao.',
    },
    {
      _key: 'faq6',
      question: 'Kabz mein konsa paani peena chahiye — kitna peena chahiye?',
      answer: 'Kabz mein regular clean paani sabse best hai — minimum 8-10 glasses (2-2.5 litre) roz. Special tip: subah uthke 1-2 glass garam paani khaali pet — ye bowel reflex trigger karta hai. Saunf ya jeera ubala hua paani din mein achha rehta hai. Coconut water excellent choice hai. Myth ye hai ki "chai se paani ka kaam ho jaata hai" — ye bilkul galat hai, chai actually dehydration badhata hai aur kabz worst karta hai.',
    },
    {
      _key: 'faq7',
      question: 'Roz subah pet saaf nahi hota — kya ye normal hai?',
      answer: '"Roz subah" — ye ek common expectation hai lekin medically every person ka timing different hota hai. Normal hai agar hafte mein 3-7 baar bowel movement ho — chaahe wo subah ho ya sham. Problem tab hai jab 3 din se zyada na ho, ya hota hai lekin bahut force lagani pade. Agar roz subah chahte ho — to routine banao: fixed time pe jaao, subah garam paani peeo, walk karo. Ye circadian rhythm se gut ko train karta hai — 2-3 hafte mein pattern banna lagta hai.',
    },
    {
      _key: 'faq8',
      question: 'Kabz mein kya khaana chahiye aur kya nahi khaana chahiye?',
      answer: 'KHAAO: Isabgol (psyllium), oats, daliya, brown rice, rajma, chana, papaya, guava, prunes, anjeer, palak, lauki, dahi, chaas, coconut water. Roz 2+ litre paani. Ghee thoda sa — natural intestinal lubricant. AVOID KAREIN: Maida products (bread, pizza, biscuits), white rice zyada, cheese zyada, unripe kela, fried snacks, chai/coffee zyada, cold drinks, red meat zyada, raat ko late heavy khana. Simple rule: jitna natural aur fiber-rich, utna better.',
    },
    {
      _key: 'faq9',
      question: 'Bachon mein kabz ho to kya karein — kids ke liye safe treatment kya hai?',
      answer: 'Bacchon mein kabz bahut common hai — especially school age mein (school mein jaane se rokna, potty hold karna). Safe home steps: age-appropriate fiber badhao (fruits, dal, veggies), paani zyada dein, active khilao, kabhi bhi force mat karo. Homeopathy bacchon ke liye excellent choice hai — completely safe, no side effects, gentle action. Nux Vomica, Calcarea Carb, Magnesia Mur bacchon mein commonly use hote hain. Kabhi bhi bacche ko adult laxatives mat do — harmful ho sakte hain.',
    },
    {
      _key: 'faq10',
      question: 'Pregnant women mein kabz ka ilaaj kya hai — safe option kya hai?',
      answer: 'Pregnancy mein kabz bohot common hai — progesterone hormone gut movement slow kar deta hai, iron supplements aur bhi constipating hote hain. Safe options: Paani zyada peeyein, high fiber diet (oats, papaya, fruits), gentle walk roz, isabgol paani ke saath (OB/GYN se confirm karke). Homeopathy pregnancy mein ek excellent safe option hai — Nux Vomica, Bryonia, Natrum Mur pregnancy-safe medicines hain. Harsh laxatives avoid karein — senna, castor oil pregnancy mein avoid karna chahiye.',
    },
    {
      _key: 'faq11',
      question: 'Kabz aur pet mein gas dono saath ho to kya karein?',
      answer: 'Kabz + gas ek bahut common combination hai — ye usually slow gut transit ki wajah se hota hai ya IBS-C ho sakta hai. Kya karein: Bloating-reducing foods: ajwain paani, jeera paani, hing thoda sa. Lying flat mat karo — walk karo gas pass karne ke liye. AVOID: Beans, raw cabbage, carbonated drinks. Homeopathy mein is specific combination ke liye Lycopodium bahut effective hai — gas, bloating aur kabz teeno ek saath address karta hai.',
    },
    {
      _key: 'faq12',
      question: 'Kabz aur piles (bawaseer) dono ho to kya karein?',
      answer: 'Kabz aur piles ek dangerous cycle hai — kabz se zor lagana padta hai, zor se piles badhte hain, piles ki pain se aur potty rokne lagto ho, aur kabz aur badi ho jaati hai. Is cycle ko todne ke liye dono ek saath treat karna zaroori hai. Homeopathy ek excellent approach hai kyunki ye kabz aur piles dono ek constitutional treatment mein address karta hai — Nux Vomica, Aesculus, Hamamelis commonly use hoti hain.',
    },
    {
      _key: 'faq13',
      question: 'Zyada din kabz rahe to kya serious problem ho sakti hai?',
      answer: 'Chronic untreated kabz complications la sakti hai: Piles (hemorrhoids), anal fissure (cut padna), rectal prolapse severe cases mein. Fecal impaction — stool jam jaata hai colon mein — ye medical emergency hai. TURANT DOCTOR SE MILEIN AGAR: Blood in stool (red ya black), unexplained weight loss, severe abdominal pain, family history of colon cancer, ya 50+ age mein naya kabz start hua ho — in cases mein colonoscopy se rule out karna zaroori hai.',
    },
    {
      _key: 'faq14',
      question: 'Kabz mein exercise se fayda hota hai kya?',
      answer: 'Haan — exercise aur bowel movement ka direct scientific connection hai. Physical activity colon muscles stimulate karta hai aur transit time reduce karta hai. Daily 30 min brisk walk kabz ke liye medically proven hai. Yoga specifically gut ke liye excellent hai — Pawanmuktasana, Ardha Matsyendrasana, Balasana (child\'s pose) — ye sab directly colon massage karte hain. Sedentary lifestyle kabz ke biggest causes mein se hai.',
    },
    {
      _key: 'faq15',
      question: 'Isabgol (psyllium) kaise lein — sahi tarika kya hai?',
      answer: 'Isabgol lene ka sahi tarika: 1-2 tsp isabgol ko ek bade glass garam paani (200-250 ml) mein instantly mix karke fauran peeo — rukne nahi dena warna gel ban jaata hai. Raat ko sone se pehle ya subah khaali pet — dono effective hain. Sabse zaroori: Isabgol ke baad din bhar paani ZYADA peena hai — agar paani kam ho to isabgol constipation aur badha sakta hai. Shuru mein 1 tsp se shuru karo — ek hafte mein 2 tsp pe aa jao. Isabgol daily lena safe hai.',
    },
    {
      _key: 'faq16',
      question: 'Khana khaate hi potty aane ki feeling hoti hai — ye kya hai?',
      answer: 'Khana khaate hi bowel movement ki urge aana ek normal physiological reflex hai — iska naam "gastrocolic reflex" hai. Khana stomach mein jaata hai to colon movement trigger hoti hai — ye bilkul normal hai. Lekin agar ye reflex bahut strong hai, cramping ke saath hai, ya diarrhea ho jaati hai to IBS ho sakta hai. Subah breakfast ke baad ye reflex sabse strong hota hai — isliye subah breakfast karne ki habit banao aur uske 20-30 min baad bathroom visit karo.',
    },
    {
      _key: 'faq17',
      question: 'Kya green tea ya herbal tea kabz mein help karti hai?',
      answer: 'Kuch herbal teas kabz mein genuinely helpful hain: Saunf (fennel) ki chai — gut spasm relax karta hai aur gas nikalta hai. Jeera paani — digestion aur motility dono help. Ajwain water — acidity aur kabz dono mein helpful. Ginger tea — gut movement stimulate karta hai. Triphala churna garam paani mein — traditional use, gut ke liye. Jo avoid karein: kadak chai ya coffee — dehydrate karte hain, short-term stimulation ke baad constipation worse karte hain.',
    },
    {
      _key: 'faq18',
      question: 'Thyroid mein kabz kyun hoti hai aur kaise theek karein?',
      answer: 'Hypothyroidism mein kabz bahut common hai — lagbhag 60% patients mein hoti hai. Thyroid hormone gut motility ke liye zaroori hai — thyroid slow to gut bhi slow. Pehle zaroori hai: thyroid ko properly treat karo — TSH control aayega to kabz bhi bahut improve hogi. Saath mein: high fiber diet, isabgol, walk. Homeopathy thyroid-related kabz mein adjunct ke roop mein achha kaam karti hai — dono saath address karna better results deta hai.',
    },
    {
      _key: 'faq19',
      question: 'Purani kabz ke liye kaun si janchein karwaani chahiye?',
      answer: 'Agar 3+ mahine se kabz hai aur diet/lifestyle changes se theek nahi ho rahi — ya warning signs hain — to ye tests helpful hain: Basic tests: Complete Blood Count, Thyroid function (TSH), Blood sugar (diabetes rule out), Serum calcium, Stool routine. Agar these normal: Colonoscopy (50+ age mein ya blood in stool pe — mandatory), Anorectal manometry (outlet obstruction check), Colonic transit study. Doctor ki guidance se hi test karwana best hai.',
    },
    {
      _key: 'faq20',
      question: 'Travel mein kabz ho jaati hai — kyun aur kya karein?',
      answer: 'Travel constipation bahut real aur common condition hai. Kyun hoti hai: routine break hoti hai, different timing, dehydration (especially flights mein), new food, less movement. Kya karein: travel ke dauran paani zyada peeyein, isabgol apne saath rakhein, airport/flight ka junk food avoid, walk karo every 1-2 hours on long flights. Homeopathy mein Nux Vomica travel kabz ke liye excellent hai — routine disturbance se aayi kabz iska classic case hai.',
    },
    {
      _key: 'faq21',
      question: 'Kabz mein pet mein dard hota hai — kab serious hai?',
      answer: 'Kabz mein mild cramping aur lower abdominal discomfort normal hai — stool pass hone ke baad theek ho jaata hai. DOCTOR SE MILEIN AGAR: Severe, sudden abdominal pain jo increase ho raha ho; Pain ke saath fever aaye; Pain ke saath vomiting baar baar ho; Stool bilkul band ho jaaye — gas bhi nahi nikal raha; Abdomen rigid (stone jaisa) lage; Blood in stool aaye. Ye warning signs bowel obstruction, appendicitis ya aur serious condition ho sakti hai — in cases mein immediately emergency care jaayein.',
    },
    {
      _key: 'faq22',
      question: 'Daily office mein baithe rehte hain — kabz se kaise bachein?',
      answer: 'Sedentary desk job kabz ke biggest risk factors mein se hai. Office mein ye practical tips: Har 1 ghante mein 2-3 min ka walk karo. Lunch break mein 10 min walk mandatory rakho. Paani apne desk pe rakhein aur sip sip karte rahein — 2 liter target. Lunch mein heavy maida wala khana avoid karo. Subah breakfast zaroor karo, office se pahle bathroom routine banao. Yoga morning mein 10 min — specifically gut ke liye asanas.',
    },
    {
      _key: 'faq23',
      question: 'Kya homeopathy laxatives ki jagah le sakti hai — kya safe hai?',
      answer: 'Haan — homeopathy chronic kabz mein laxatives ka safe alternative hai, aur zyada sustainable bhi. Laxatives ki problem: habit padti hai, time ke saath zyada lena padta hai, intestinal nerves damage hoti hain long-term mein. Homeopathy exactly wahi kaam karta hai jo laxatives nahi karte — gut ki natural motility restore karta hai. Laxatives se shift karna chahte hain to: abruptly mat chodein — homoeopath se milein, dono saath start karein, slowly laxative taper karein.',
    },
    {
      _key: 'faq24',
      question: 'Kabz se sirf pet ki problem hai ya aur jagah bhi asar hota hai?',
      answer: 'Kabz sirf pet tak seemeemit nahi hai. Sirodard / headache: sar dard ka ek common cause chronic kabz hai. Skin problems: toxins reabsorb hote hain — acne, dull skin, rashes. Mood aur energy: chronic kabz wale aksar anxious, irritable ya fatigued rehte hain — gut-brain axis real phenomenon hai. Bad breath: colon mein ruke toxins breathing ke through bhi reflect karte hain. Isliye kabz "sirf ek chhoti si problem" nahi hai — is ek cheez ko theek karo aur kaafi zyada conditions simultaneously improve hoti hain.',
    },
    {
      _key: 'faq25',
      question: 'Kabz mein subah ki routine kya honi chahiye — step by step?',
      answer: 'Constipation relief ke liye best subah routine: Step 1: Uthke pehle 10 min mein do bade glass GARAM paani peeyein — gastrocolic reflex trigger karta hai. Step 2: 5 min abdominal massage karo — navel ke chaaron taraf clockwise direction mein — colon ko massage milta hai. Step 3: Toilet pe jaao — chahe urge ho ya na ho — ek fixed time pe jaana body ko train karta hai. Squat position rakho. Step 4: 15-20 min brisk walk ya morning yoga (Pawanmuktasana specific hai). Step 5: Breakfast mein fiber rich food — oats, papaya, aur ek katori dahi.',
    },
  ],

  sources: [
    'Central Council for Research in Homoeopathy (CCRH) | Clinical Study on Functional Constipation | 2018-2019 | ccrhindia.org',
    'World Gastroenterology Organisation — Global Guidelines on Constipation | WGO | 2010 (Updated 2020)',
    'American College of Gastroenterology — Chronic Idiopathic Constipation Guidelines | ACG | 2021',
    'Mayo Clinic — Constipation: Symptoms, Causes, Treatment',
    'Lancet GBD Study — Digestive Disease Burden in India | 2019',
    'National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK) — Constipation Fact Sheet',
    'Indian Journal of Gastroenterology — Prevalence of Constipation in India: A Systematic Review | 2020',
  ],

  doctorNote: 'Clinic mein kabz ke jo cases aate hain, unme 60-70% patients zyada samay se laxatives use kar rahe hote hain — aur natural bowel reflex almost khatam ho chuka hota hai. Nux Vomica se shuru karke Alumina par aana often kafi productive hota hai chronic cases mein. Sabse zaroori kaam jo main karta hoon: patient ko laxatives se slowly wean off karna aur gut ko re-train karna — homeopathy is process mein excellent support deti hai. 3 mahine ke consistent treatment mein majority patients mein laxative dependency tootti hai aur natural bowel rhythm wapas aata hai.',

  reviewDate: 'April 2026',
}

async function seed() {
  console.log('Seeding Constipation (Kabz)...')
  await client.createOrReplace(doc)
  console.log('✅ Done! disease-constipation seeded.')
}

seed().catch(console.error)
