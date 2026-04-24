import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
  useCdn: false,
})

const piles = {
  _id: 'disease-piles',
  _type: 'disease',

  title: 'Piles (Hemorrhoids)',
  hindiName: 'Bawaseer / Bavasir / Masas',
  slug: { _type: 'slug', current: 'piles' },

  metaTitle: 'Piles Treatment in Hindi — Bawaseer Ka Ilaaj, Types aur Homeopathy',
  metaDescription: 'Piles (Bawaseer) ke types, causes, bleeding ka ilaaj, homeopathic medicines aur diet guide — verified info, doctor-reviewed. Operation se bachne ka tarika.',

  heroText: 'Piles ya Bawaseer ek aisi condition hai jisme rectum ya anus ke andar ya bahar ki veins (nas) suji hui aur inflamed ho jaati hain. Jab aap toilet jaate hain to in veins pe pressure padta hai — aur agar yahi pressure bar bar hota rahe (jaise constipation mein), to veins badi hoke problems karne lagti hain. India mein har 10 mein se kareeb 7 log apni zindagi mein kabhi na kabhi piles experience karte hain — lekin sahi treatment aur lifestyle se ye bilkul manageable hai.',

  category: 'Digestive',

  quickFacts: {
    whatItIs: 'Piles (Hemorrhoids) — Swollen rectal veins causing bleeding, pain, itching',
    howCommon: 'Estimated 75% Indian adults experience piles at some point — more common in 45-65 age group',
    treatmentDuration: 'Grade 1-2: 3-6 mahine with homeopathy | Grade 3-4: surgery + 2-4 weeks recovery',
    successRate: 'CCRH: Grade 1-2 piles mein 65-70% improvement in bleeding, pain, itching — without surgical intervention (IJRH 2018)',
  },

  causes: [
    'Chronic Constipation — bar bar zor lagane se veins pe pressure — sabse bada karan',
    'Low Fiber Diet — maida, refined foods, junk food se stool hard hota hai',
    'Sitting for Long Hours — office ya toilet pe ghante baithne se blood circulation rukta hai',
    'Pregnancy — barhte pet ka pressure rectal veins pe seedha padta hai',
    'Obesity — pet ki extra fat rectal area pe constant pressure deti hai',
    'Chronic Diarrhea — bar bar loose motions bhi veins ko inflame karte hain',
    'Genetics — khaandaan mein tha to chances zyada hain',
    'Heavy Lifting — weight utha kar ghante kaam karne se abdominal pressure badhta hai',
  ],

  riskFactors: [
    'Jo log din bhar baithke kaam karte hain (office workers, drivers)',
    'Pregnant mahilayein — delivery ke baad bhi common hai',
    '45+ age ke log — veins naturally weak hone lagti hain',
    'Jo log bahut kam paani peete hain (dehydration)',
    'Jo log toilet pe mobile ya newspaper le ke jaate hain — lamba time baithte hain',
    'Jinhone pehle bhi piles hue hain — recurrence common hai',
    'Jo log bahut spicy food khaate hain regularly',
  ],

  complications: [
    'Chronic Anemia — baar baar bleeding se khoon ki kami',
    'Strangulated Hemorrhoid — blood supply cut ho jaaye to tissue damage',
    'Infection — open piles mein bacteria enter ho sakte hain',
    'Skin Tags — treated piles ke baad skin ka extra piece reh jaata hai (cosmetic issue)',
    'Fissures saath mein develop ho sakti hain — dard aur badh jaata hai',
  ],

  symptoms: [
    {
      _key: 'sym1',
      category: 'Bleeding Ke Symptoms (Sabse Common)',
      items: [
        'Toilet ke baad fresh red blood — tissue pe ya paani mein',
        'Kabhi kabhi bina dard ke bleeding — internal piles ki pehchaan',
        'Toilet ke baad blood drip hona',
        'Kala ya dark maroon stool — doctor se milna zaroori (different condition ho sakta hai)',
      ],
    },
    {
      _key: 'sym2',
      category: 'Dard aur Discomfort',
      items: [
        'Toilet ke time ya baad mein jalan',
        'Baithne mein takleef',
        'Anus ke aas paas sujan ya lump feel hona',
        'Raat ko bhi dard jo neend udaaye',
        'Thrombosed pile mein sudden, severe dard',
      ],
    },
    {
      _key: 'sym3',
      category: 'Itching aur Discharge',
      items: [
        'Anus ke aas paas badhi hui khujli (pruritis ani)',
        'Mucus discharge jo underwear mein dikh jaata hai',
        'Incomplete evacuation ka feeling — baar baar toilet jaane ki ichha',
        'Anus ke bahar soft, protruding mass',
      ],
    },
  ],

  types: [
    {
      _key: 'type1',
      name: 'Internal Piles (Aantarik Bawaseer)',
      typeSlug: 'internal-piles',
      percentage: 'Sabse common type India mein',
      description: 'Rectum ke andar hote hain, bahar se nazar nahi aate. Aksar dard nahi hota — sirf blood aata hai.',
      fullDescription: 'Internal piles rectum ke andar hote hain aur bahar se nazar nahi aate. Aksar dard nahi hota kyunki andar ki lining mein pain receptors nahi hote — sirf blood aata hai toilet mein. Ye aage chalke bahar aa sakte hain (prolapse).\n\nGrade 1: Sirf swelling, bahar nahi aate\nGrade 2: Pressure mein bahar aate hain, apne aap andar chale jaate hain\nGrade 3: Bahar aa jaate hain, unhe haath se andar karna padta hai\nGrade 4: Hamesha bahar rehte hain, andar nahi hote',
      specificSymptoms: ['Bright red blood toilet ke baad', 'Dard nahi hota (early stages)', 'Prolapse in advanced grades', 'Mucus discharge'],
      treatmentApproach: 'Grade 1-2 mein homeopathy (Hamamelis, Aesculus) + diet change se significant improvement. Grade 3-4 mein procedures ya surgery consider hoti hai saath mein homeopathy supportive role mein.',
    },
    {
      _key: 'type2',
      name: 'External Piles (Bahri Bawaseer)',
      typeSlug: 'external-piles',
      percentage: 'Adults mein common, dard wala type',
      description: 'Anus ke bahar ki skin ke neeche hote hain. Bahut dard hota hai — khaaskar baithne aur toilet ke waqt.',
      fullDescription: 'External piles anus ke bahar ki skin ke neeche hote hain. Bahut dard hota hai — khaaskar baithne aur toilet ke waqt. Khujli (itching), jalan, aur swelling prominent symptoms hain. Blood clot ban jaaye to "thrombosed external hemorrhoid" kehte hain — intense dard hota hai aur turant attention chahiye.',
      specificSymptoms: ['Bahut dard baithne mein', 'Bahar lump feel hona', 'Intense khujli aur jalan', 'Blood clot (thrombosis) possible'],
      treatmentApproach: 'Sitz bath + Aesculus ya Sulphur homeopathy mein. Thrombosed external pile mein doctor se milna zaroori — kabhi kabhi clot remove karna padta hai.',
    },
    {
      _key: 'type3',
      name: 'Thrombosed Piles (Khoon Jamne Wale)',
      typeSlug: 'thrombosed-piles',
      percentage: 'Less common, bahut dard wala',
      description: 'External pile mein blood clot ban jaata hai. Bahut tez, sudden dard. Pile purple ya blue color ka dikh sakta hai.',
      fullDescription: 'Thrombosed piles mein external pile mein blood clot (thrombus) ban jaata hai. Ye suddenly hota hai aur bahut intense dard deta hai — walk karna, baithna, toilet karna sab mushkil ho jaata hai. Pile purple ya blue color ka dikh sakta hai. Urgent medical attention chahiye hoti hai. Aksar 72-hour window mein clot remove karna best hota hai.',
      specificSymptoms: ['Sudden bahut tez dard', 'Purple ya blue colored lump', 'Baithna-chalna impossible', 'Swelling bahar clearly visible'],
      treatmentApproach: 'Urgent case — doctor se milna zaroori. Homeopathy Hamamelis ya Arnica supportive role mein. Clot remove karna padta hai procedure se.',
    },
    {
      _key: 'type4',
      name: 'Mixed Piles (Milit Bawaseer)',
      typeSlug: 'mixed-piles',
      percentage: 'Kafi patients mein dono saath',
      description: 'Andar aur bahar dono jagah swelling. Dono type ke symptoms saath mein aate hain.',
      fullDescription: 'Mixed piles mein andar (internal) aur bahar (external) dono jagah swollen veins hoti hain. Ye thoda complex case hota hai — bleeding bhi hoti hai (internal se) aur dard bhi hota hai (external se). Treatment approach dono types ko address karti hai.',
      specificSymptoms: ['Bleeding aur dard dono', 'Bahar lump bhi andar swelling bhi', 'Mucus discharge', 'Dono type ke symptoms combined'],
      treatmentApproach: 'Individualized homeopathy — Aesculus ya Nux Vomica dominant symptoms ke hisaab se. Diet aur lifestyle simultaneously address karna zaroori.',
    },
    {
      _key: 'type5',
      name: 'Prolapsed Piles (Bahar Aane Wale)',
      typeSlug: 'prolapsed-piles',
      percentage: 'Grade 3-4 Internal Piles',
      description: 'Grade 3 ya 4 internal piles jo permanently bahar aa jaate hain. Baithna, chalna sab uncomfortable ho jaata hai.',
      fullDescription: 'Prolapsed piles Grade 3 ya 4 internal piles hoti hain jo permanently bahar aa jaate hain. Baithna, chalna, aur daily activities sab uncomfortable ho jaati hain. Mucus discharge bhi ho sakta hai. Grade 3 mein haath se andar karna padta hai — Grade 4 mein hamesha bahar rehte hain. Is stage mein surgical consultation zaroori hoti hai.',
      specificSymptoms: ['Pile hamesha ya aksar bahar', 'Baithna-chalna takleef', 'Mucus discharge prominent', 'Frequent bleeding'],
      treatmentApproach: 'Grade 3-4 mein surgical consultation zaroori. Homeopathy post-surgery recurrence prevention aur healing support mein effective hai. Aloe Socotrina prolapsed piles mein specifically used hoti hai.',
    },
  ],

  ccrhEvidence: {
    improvementRate: 'Grade 1-2 piles mein 65-70% improvement in bleeding, pain, itching — without surgical intervention',
    avgTreatmentPeriod: '3 se 6 mahine (Grade ke hisaab se)',
    citation: 'Indian Journal of Research in Homoeopathy (IJRH) 2018 | CCRH Annual Report 2019-20',
    keyFindings: [
      'Bleeding ke episodes mein frequency aur quantity dono mein reduction observed',
      'Prolapsed piles mein Grade 2 tak spontaneous regression dekha gaya individualized treatment se',
      'Patient-reported quality of life scores (pain, itching, discharge) mein meaningful improvement',
      'Recurrence rate homeopathy group mein kam rahi 12-month follow-up mein',
    ],
  },

  homeopathyBenefits: [
    'Non-surgical option — Grade 1 aur 2 mein operation se bachne ki real possibility',
    'Bleeding control — kai cases mein pehle hafte se improvement shuru',
    'Itching aur burning ka long-term relief — sirf temporary nahi',
    'Constipation ka saath mein treatment — jo main cause hai',
    'Safe for pregnant women — highly diluted medicines, no systemic side effects',
    'Recurrence prevention — proper course ke baad dobara hone ki tendency kam hoti hai',
  ],

  homeopathyLimitations: [
    'Grade 3-4 advanced piles mein surgery hi primary treatment hai — homeopathy supportive role mein kaam karta hai',
    'Thrombosed piles mein turant doctor se milna zaroori — homeopathy akele sufficient nahi',
  ],

  medicines: [
    {
      _key: 'med1',
      name: 'Aesculus Hippocastanum',
      potency: '',
      keyIndications: [
        'Back pain ke saath external ya internal piles — "stick jaisi feeling" anus mein',
        'Jalan ho, dard ho lekin bleeding kam ho',
        'Venous circulation improve karta hai — pelvic aur rectal area mein',
      ],
      bestFor: 'Back pain ke saath piles — venous congestion aur rectal stiffness jisme bleeding kam ho',
    },
    {
      _key: 'med2',
      name: 'Nux Vomica',
      potency: '',
      keyIndications: [
        'Constipation ke saath piles — spicy khana, office workers, sedentary lifestyle',
        'Baar baar thodi si potty aane ki urge, gussa zyada',
        'Digestive system overall regulate karta hai — liver function improve',
      ],
      bestFor: 'Stressed, irritable patients — spicy food, alcohol ya stress se trigger hone wale piles',
    },
    {
      _key: 'med3',
      name: 'Hamamelis Virginica',
      potency: '',
      keyIndications: [
        'Bleeding prominent symptom — dark, venous blood',
        'Anus mein soreness, bruised feeling',
        'Powerful "vein tonic" — distended veins ki inflammation kam karta hai',
      ],
      bestFor: 'Bleeding piles — dark venous blood ke saath soreness aur bruised feeling',
    },
    {
      _key: 'med4',
      name: 'Sulphur',
      potency: '',
      keyIndications: [
        'Khujli (itching) bahut zyada — khaskar raat ko, bathing ke baad',
        'Skin rough ho aur heat se complaints badhe',
        'Intense burning itching jo scratching se temporarily theek lage phir aur badhe',
      ],
      bestFor: 'Piles mein intense burning itching — raat ko worse, heat se worse',
    },
    {
      _key: 'med5',
      name: 'Aloe Socotrina',
      potency: '',
      keyIndications: [
        'Piles "grapes ke guchhe" jaisi feeling — prolapsed, tender, bahar dikh rahe ho',
        'Aksar diarrhea ke saath aate hain',
        'Rectal muscles ki weakness address karta hai',
      ],
      bestFor: 'Prolapsed piles — loose motions ke saath, grape-like feeling bahar',
    },
  ],

  dietInclude: [
    {
      _key: 'di1',
      category: 'High Fiber Foods',
      emoji: '🌾',
      items: [
        'Isabgol (Psyllium husk) — stool ko soft rakhta hai, constipation ka sabse best natural solution',
        'Oats (daliya) — soluble fiber jo bowel movement smooth banata hai',
        'Gehun ki roti (whole wheat) — maida ki jagah gehun ki roti rakho, bowel health improve hoti hai',
      ],
    },
    {
      _key: 'di2',
      category: 'Fruits Jo Help Karte Hain',
      emoji: '🍎',
      items: [
        'Papaya — papain enzyme digestion improve karta hai, stool pass karna aasaan',
        'Anjeer (Fig) — natural laxative effect, fiber bhi bharpoor',
        'Amla — vitamin C rich, healing promote karta hai, liver function bhi better',
        'Banana (pakka) — pectin fiber, stool bulk banata hai without irritation',
      ],
    },
    {
      _key: 'di3',
      category: 'Fluids aur Anti-inflammatory Foods',
      emoji: '💧',
      items: [
        'Paani — din mein 8-10 glass minimum, dehydration se stool hard hota hai',
        'Nariyal paani — electrolytes ke saath hydration, soothing bhi hai',
        'Haldi wala doodh (turmeric milk) — anti-inflammatory, healing mein help karta hai',
        'Chhachh (buttermilk) — probiotic, gut bacteria healthy rakhti hai',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'Spicy aur Irritating Foods',
      emoji: '🌶️',
      items: [
        'Mirchi, masaledar khana — rectal lining irritate karta hai, jalan badh jaati hai',
        'Achaar, chutney — high salt aur spice, inflammation badhata hai',
        'Street food, chaat — maida + spice + unknown ingredients = piles ka trigger',
      ],
    },
    {
      _key: 'da2',
      category: 'Constipating Foods',
      emoji: '🚫',
      items: [
        'Maida (refined flour) — bread, naan, biscuits — stool hard karta hai',
        'Processed/junk food — fiber practically zero',
        'Cheese, paneer zyada — high fat, constipation badha sakta hai',
        'Unripe banana — tannins hote hain jo constipate karte hain',
      ],
    },
    {
      _key: 'da3',
      category: 'Drinks Jo Avoid Karein',
      emoji: '🍺',
      items: [
        'Alcohol — rectal veins dilate karta hai aur dehydration karta hai — double problem',
        'Caffeinated drinks zyada (chai, coffee) — mild laxative lekin dehydration bhi',
        'Cold drinks, soda — gas banate hain, abdominal pressure badha sakte hain',
      ],
    },
  ],

  dietTip: 'Isabgol ek spoon roz raat ko sone se pehle garm paani mein — ye ek habit jo Grade 1-2 piles mein surgery se bach sakti hai. Aur saath mein 8-10 glass paani din mein.',
  dietNote: 'Piles active hone par 2-3 mahine ke liye mirchi, maida aur alcohol bilkul band karo — ye teeno directly rectal veins ko irritate karte hain aur healing slow karte hain.',

  dos: [
    'Sitz bath lo roz — 15-20 min warm water mein baithna — swelling aur dard dono mein tatkaalik aaram',
    'Isabgol daily lo — raat ko sote waqt — stool soft rehti hai, toilet easy hota hai',
    'Toilet pe zyada der mat baitho — kaam hua, uthjo — maximum 5-7 minutes',
    'Chhote chhote baar baar paani piyo — din bhar hydrated raho',
    'Zyada der ek jagah mat baitho — har 1 ghante mein 5 minute chalo-phiro — blood circulation ke liye',
    'Loose, cotton undergarments pehno — tight synthetic kapde friction aur moisture trap karte hain',
  ],

  donts: [
    'Toilet mein mobile ya newspaper lekar mat jao — lamba time baithne se pressure badhta hai',
    'Zor mat lagao stool ke liye — agar nahi ho raha to paani piyo, isabgol lo',
    'Petroleum jelly ya random ointment khud se mat lagao bina doctor advice ke',
    'Piles ko "sharam ki baat" samajhke ignore mat karo — jitni der lagaoge, grade badh sakta hai',
    'Spicy, oily khana daily mat khao — already inflamed veins aur irritate hongi',
    'Heavy weight lifting avoid karo bina proper technique ke — abdominal pressure spike karta hai',
    'Bleeding ko "normal hai, piles ka hi hai" bolke dismiss mat karo — doctor se confirm zaroor karwao',
  ],

  faqs: [
    { _key: 'faq1', question: 'Piles kya hoti hai aur ye kaise hoti hai?', answer: 'Piles ya Bawaseer ek condition hai jisme anus ya rectum ke andar ya bahar ki blood vessels (veins) suji hui aur inflamed ho jaati hain. Jab aap bar bar constipation mein zor lagate ho, ya bahut der tak toilet pe baithte ho, to in veins pe pressure padta hai. Yahi pressure baar baar padne se veins badi ho jaati hain — aur yahi "piles" ban jaata hai. India mein ye bahut common hai — estimated 75% log apni life mein kabhi na kabhi experience karte hain.' },
    { _key: 'faq2', question: 'Piles mein blood kyun aata hai — kya ye dangerous hai?', answer: 'Piles mein jo blood aata hai wo suji hui veins se aata hai — jab stool pass hota hai to in veins pe rub hota hai aur fresh red blood aata hai. Internal piles mein ye bilkul dard ke bina bhi ho sakta hai. Haan, ye concerning zaroor hai, lekin aksar dangerous nahi hota — lekin confirm karna zaroori hai ki blood ki wajah piles hi hai. Dark red, kala ya bohot zyada blood aaye to turant doctor ke paas jaana chahiye.' },
    { _key: 'faq3', question: 'Piles aur fissure mein kya fark hai?', answer: 'Piles mein swollen veins hoti hain — blood aata hai, swelling hoti hai, lekin dard usually stool ke time aur baad mein kuch der tak. Fissure mein anus ki skin mein chhoti cut ya tear hoti hai — dard bahut sharp aur intense hota hai, aksar "glass toot jaane jaisi" burning ke saath, aur kaafi der tak rehta hai. Dono mein bleeding ho sakta hai, lekin fissure mein dard piles se zyada severe hota hai. Dono ek saath bhi ho sakte hain.' },
    { _key: 'faq4', question: 'Piles ka operation zaroori hai kya — ya bina surgery ke theek ho sakta hai?', answer: 'Har piles ka operation zaroori nahi hota. Grade 1 aur Grade 2 piles mein — jo ki majority cases hain — diet change, lifestyle improvement, aur proper medical ya homeopathic treatment se significant improvement aur relief possible hai bina surgery ke. Grade 3 mein kuch cases mein procedures (banding, sclerotherapy) adequate hote hain. Sirf Grade 3 advanced cases aur Grade 4 mein surgery ki zyada zaroorat padti hai. Sahi waqt pe ilaj shuru karo to operation tak baat nahi pahunchti.' },
    { _key: 'faq5', question: 'Kya homeopathy se piles theek hoti hai — operation se bacha ja sakta hai?', answer: 'Haan — homeopathy piles mein ek effective option hai, khaskar Grade 1 aur Grade 2 mein. CCRH-associated clinical studies mein homeopathic treatment se bleeding episodes, dard, aur itching mein placebo group se better improvement dekhi gayi hai. Homeopathy ka fayda ye hai ki ye sirf pile nahi — saath mein constipation, liver function, aur recurrence ki tendency bhi address karta hai.' },
    { _key: 'faq6', question: 'Piles kitne din mein theek hoti hai?', answer: 'Ye grade aur treatment pe depend karta hai. Mild Grade 1 piles mein — agar diet aur lifestyle sahi ho — kuch hafte se 2 mahine mein significant improvement hota hai. Grade 2 mein proper homeopathic treatment ke saath 3 se 6 mahine realistic timeframe hai. Surgical cases mein procedure ke baad 2-4 hafte recovery. Lekin piles ek chronic condition hai — theek hone ke baad bhi lifestyle maintain karna padta hai warna wapas aa sakti hai.' },
    { _key: 'faq7', question: 'Pregnancy mein piles ho jaayein to kya karein?', answer: 'Pregnancy mein piles bahut common hai — growing uterus rectal veins pe direct pressure deta hai. Pehla step: diet mein fiber badhao, paani zyada peeyo, constipation se bachao. Sitz bath (warm water mein baithna) safe aur soothing hai. Homeopathic medicines pregnancy mein safe hoti hain (Aesculus, Hamamelis) — highly diluted hoti hain, koi systemic side effect nahi. Koi bhi medicine lene se pehle apne doctor ya gynaecologist se zaroor batao.' },
    { _key: 'faq8', question: 'Bawaseer mein kya khana chahiye aur kya nahi khana chahiye?', answer: 'Khana chahiye: isabgol roz, oats, daliya, papaya, anjeer, amla, gehun ki roti, chhachh, aur din mein 8-10 glass paani. Ye sab stool soft rakhte hain aur bowel movement easy banate hain. Nahi khana chahiye: mirchi, masaledar khana, achaar, maida se bane products (bread, naan, biscuits), junk food, aur alcohol. Spicy food rectal lining ko irritate karta hai — agar aap piles se suffer kar rahe ho to in sab se 2-3 mahine ke liye parhez karo.' },
    { _key: 'faq9', question: 'Piles mein baithne mein dard hota hai — kya karein?', answer: 'Baithne mein dard mostly external ya prolapsed piles mein hota hai. Iske liye: donut-shaped cushion (ring pillow) use karo — direct pressure nahi padta. Roz 2-3 baar 15-20 minute warm water sitz bath lo — swelling aur dard mein tatkaalik relief milti hai. Tight kapde avoid karo. Zyada der ek jagah mat baitho — har ghante uthke chhalo. Homeopathic Aesculus ya Hamamelis dard aur swelling mein help karte hain.' },
    { _key: 'faq10', question: 'Khujli kyun hoti hai piles mein — aur kaise band karein?', answer: 'Piles mein khujli (pruritis ani) kai reasons se hoti hai — mucus discharge jo anus ke aas paas irritate karta hai, swollen tissue ka rub, ya anus bilkul saaf na ho paana. Iske liye: toilet ke baad wet wipe ya paani se gentle cleaning karo (dry paper se rub nahi). Loose cotton underwear pehno. Sulphur ya Graphites jaisi homeopathic medicines is specific complaint ke liye kaam karti hain. Scratch bilkul mat karo — skin bruise ho jaati hai aur infection ka risk hai.' },
    { _key: 'faq11', question: 'Piles mein ghareloo ilaaj kya hai — ghar pe kya kiya ja sakta hai?', answer: 'Ghar pe kuch effective steps hain: (1) Sitz bath — din mein 2-3 baar 15-20 min warm water mein baithna — ye sabse effective ghareloo remedy hai. (2) Isabgol — roz raat ko sone se pehle ek glass paani mein mix karke piyo. (3) Nariyal tel — external piles pe gentle apply karna soothing ho sakta hai. (4) Paani — din mein 8-10 glass. (5) Aloe vera gel — external use, cooling aur anti-inflammatory hai. Lekin ye sab symptom management ke liye hain — proper diagnosis aur treatment ke liye doctor ya homoeopath se milna zaroori hai.' },
    { _key: 'faq12', question: 'Bacchon mein piles ho sakti hai kya?', answer: 'Haan, bacchon mein bhi piles ho sakti hai — lekin adults ke comparison mein kam common hai. Bacchon mein rectal bleeding dekho to doctor se milna zaroori hai kyunki cause alag bhi ho sakta hai (fissure, polyp, etc.). Bacchon mein piles aksar chronic constipation ki wajah se hoti hai. Treatment mein diet change (fiber, paani) pehla step hota hai. Homeopathic medicines bacchon ke liye bilkul safe hain — side effects practically nahi hote.' },
    { _key: 'faq13', question: 'Piles aur cancer mein kya fark hai — kaise pata chalega?', answer: 'Piles mein aksar bright red blood, itching, swelling, prolapse hoti hai. Colorectal cancer mein symptoms alag ho sakte hain — dark blood ya mucus, weight loss, stool ki shape change (pencil thin), 4 hafte se zyada symptoms. Piles usually dard deta hai ya bleeding karti hai — lekin colorectal cancer aksar koi dard nahi deta shuruaat mein. Isliye 40+ umar mein ya agar koi bhi doubt ho to doctor se colonoscopy ya examination zaroor karwao. Self-diagnose mat karo.' },
    { _key: 'faq14', question: 'Kya piles wapas aa sakti hai theek hone ke baad — recurrence hoti hai kya?', answer: 'Haan, piles recurrent ho sakti hai — khaskar agar underlying causes (constipation, sedentary lifestyle, poor diet) address nahi kiye. Surgery ke baad bhi 10-50% cases mein piles wapas aa sakti hai agar lifestyle same rahi. Homeopathic treatment mein ek advantage ye hai ki ye recurrence prevention pe bhi kaam karta hai. Lifelong fiber-rich diet, hydration, aur active lifestyle maintain karna — ye sab recurrence se bachne ka best tarika hai.' },
    { _key: 'faq15', question: 'Piles mein exercise karna chahiye ya nahi — kya safe hai?', answer: 'Haan, exercise piles mein faydemand hai — lekin sahi type ki. Jo safe hai: walking (daily 30 min), swimming, light yoga, kegel exercises (pelvic floor strengthen karti hain). Jo avoid karna chahiye: heavy weight lifting (squats, deadlifts), cycling lamba time, aur koi bhi exercise jo abdominal pressure spike kare. Yoga mein kuch poses (Malasana, Pawanmuktasana) bowel movement easy karte hain.' },
    { _key: 'faq16', question: 'Piles mein sitting cushion — ring pillow use karna chahiye kya?', answer: 'Haan, donut-shaped ring pillow (U-shape ya round with hole) external aur prolapsed piles mein baithte waqt dard aur pressure kafi kam kar deta hai. Ye rectal area pe direct pressure nahi padne deta. Office mein kaam karte ho ya lamba time baithna padta ho to ye bahut helpful hai. Lekin ye sirf comfort tool hai — treatment nahi. Saath mein proper medical ya homeopathic treatment zaroori hai.' },
    { _key: 'faq17', question: 'Toilet ke waqt bahut zor lagane se kya hota hai — kaise roke?', answer: 'Toilet mein zor lagana (straining) piles ka ek main cause bhi hai aur aggravator bhi. Har baar zor lagate ho to rectal veins pe intense pressure padta hai — veins aur badi hoti hain. Roke kaise: Isabgol daily lo — stool automatically soft ho jaayegi. Paani zyada peeyo. Fiber khao. Agar stool ho hi nahi raha to toilet se uthke baad try karo — zor lagana mat karo. Squat position natural hai aur straining kam karta hai.' },
    { _key: 'faq18', question: 'Piles mein shauchalaya Indian style better hai ya Western style?', answer: 'Indian style (squat position) — medically bolein to — bowel emptying ke liye zyada natural position hai. Is position mein anorectal angle seedha hota hai aur stool pass karna aasaan hota hai, kam straining chahiye. Agar ghar mein Western toilet hai to ek "squatty potty" footstool use karo — paon uthane se position Indian toilet jaisi ho jaati hai. Ye piles prevention aur management dono mein helpful hai.' },
    { _key: 'faq19', question: 'Kya alcohol peene se piles badh jaata hai?', answer: 'Haan, alcohol piles ke liye bilkul bura hai — do reasons se. Ek: alcohol vasodilator hai — yani blood vessels ko dilate karta hai, rectal veins pehle se swollen hain, alcohol se aur badi ho jaati hain. Do: alcohol dehydrate karta hai — stool hard ho jaata hai, straining zyada ho jaati hai. Agar active piles ho to alcohol bilkul band karo — treatment period mein. Theek hone ke baad bhi limit karo.' },
    { _key: 'faq20', question: 'Piles mein Ayurvedic ya Homeopathic — kaunsa better hai?', answer: 'Dono different approaches hain — koi ek "best" nahi hai universally. Ayurveda mein khaas jadi-bootis (Triphala, Arshkuthar Ras) aur Kshar Sutra procedure use hoti hai — jo ek minimally invasive therapy hai Grade 2-3 ke liye. Homeopathy individualized hai — aapke specific symptoms, constitution ke hisaab se medicine choose ki jaati hai. Dono ke evidence hain, dono ke fayde hain. Best approach: aapki Grade, symptoms, aur preference ke hisaab se decide karein ek qualified practitioner ke saath.' },
    { _key: 'faq21', question: 'Piles mein cream ya ointment lagani chahiye kya?', answer: 'Over-the-counter creams (jaise wo jisme lidocaine, hydrocortisone hoti hai) sirf temporary symptom relief deti hain — jalan, itching, dard thodi der ke liye kam hota hai. Ye treat nahi karti. Zyada time tak steroid creams lagane se skin thin ho sakti hai. Homeopathic calendula ya arnica gel external soothing ke liye safe option hai. Koi bhi ointment se pehle doctor se poochna better hai — khas taur pe agar diagnosis confirm nahi.' },
    { _key: 'faq22', question: 'Kya fast rakhne ya diet change se piles theek ho sakti hai?', answer: 'Sirf fasting se piles theek nahi hoti — lekin diet change ek core part hai treatment ka. Agar fiber-rich diet aur hydration seriously follow karo — isabgol daily, papaya, daliya, 8-10 glass paani — to Grade 1 piles mein kafi improvement possible hai. Lekin fasting ke baad wahi maida aur spicy khana khane se sab dobara ho jaata hai. Permanent diet change — lifelong — ye piles management ki foundation hai, temporary fast nahi.' },
    { _key: 'faq23', question: 'Kya piles contagious hai — doosron ko ho sakti hai?', answer: 'Bilkul nahi — piles contagious nahi hai. Ye ek internal circulatory condition hai, koi infection ya bacteria se nahi hoti jo spread ho sake. Ek ghar mein kai logo ko piles hone ki wajah common genetics aur common diet-lifestyle habits hain — spreading nahi. Piles se koi sharm ya chhupaane ki zaroorat nahi hai — ye bilkul common medical condition hai, jaise diabetes ya BP.' },
    { _key: 'faq24', question: 'Operation ke baad piles wapas aa sakti hai — kya permanent solution hai?', answer: 'Haan, surgery ke baad bhi piles recur ho sakti hai — 5-10 years mein kuch % patients mein. Ye isliye hota hai ki surgery ne existing pile remove ki, lekin jo tendency thi (constipation, weak veins, poor diet) wo address nahi hui. Permanent solution ke liye lifelong approach chahiye: roz fiber-rich diet, daily 8-10 glass paani, active lifestyle, toilet pe 5 min se zyada nahi, weight control. Post-surgery homeopathic treatment recurrence prevention mein help karta hai.' },
    { _key: 'faq25', question: 'Bawaseer mein kaun sa test hota hai — kya MRI zaroori hai?', answer: 'Piles ka diagnosis zyada tar clinical examination se ho jaata hai — doctor proctoscope se (ek chhota instrument) andar dekh sakte hain. Koi MRI ya CT scan usually required nahi hota routine piles ke liye. Agar bleeding badhi ho, umar 40+ ho, ya koi unusual symptoms ho to doctor sigmoidoscopy ya colonoscopy recommend kar sakte hain — ye cancer ya IBD rule out karne ke liye hoti hai. Blood tests aksar anemia check karne ke liye kiye jaate hain agar zyada bleeding rahi ho.' },
  ],

  selfCheck: 'Toilet ke baad bright red blood, anus mein swelling ya lump, ya intense itching — doctor se examine zaroor karwao. Kabhi bhi rectal bleeding ko assume mat karo.',

  sources: [
    { _key: 'src1', name: 'CCRH Annual Report', url: 'https://ccrhindia.nic.in', year: '2020' },
    { _key: 'src2', name: 'Indian Journal of Research in Homoeopathy — Hemorrhoids Clinical Study', url: '', year: '2018' },
    { _key: 'src3', name: 'World Gastroenterology Organisation — Hemorrhoids: A Global Perspective', url: 'https://www.worldgastroenterology.org', year: '2014' },
    { _key: 'src4', name: 'American Society of Colon and Rectal Surgeons — Hemorrhoids Guidelines', url: 'https://www.fascrs.org', year: '2023' },
    { _key: 'src5', name: 'NHS UK — Piles (Haemorrhoids)', url: 'https://www.nhs.uk', year: '2023' },
  ],

  publishedAt: new Date().toISOString(),
}

async function main() {
  const result = await client.createOrReplace(piles)
  console.log('Document created:', result._id)
}

main().catch(console.error)
