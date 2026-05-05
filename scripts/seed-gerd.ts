import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-gerd',
  _type: 'disease',
  title: 'GERD / Acid Reflux',
  hindiName: 'Amlapitta / Seene ki Jalan / Pet ki Gas',
  slug: { _type: 'slug', current: 'gerd' },
  category: 'Digestive',
  publishedAt: '2026-05-05T00:00:00.000Z',
  metaTitle: 'GERD & Acid Reflux Treatment | Homeopathy | Homeopedia',
  metaDescription: 'GERD (seene ki jalan, acid reflux) ka ilaaj, karan, diet aur homeopathic treatment – simple Hinglish mein. Verified info, doctor-reviewed.',

  heroText: 'GERD yaani Gastroesophageal Reflux Disease ek aisi digestive condition hai jisme pet ka acid baar baar upar esophagus (food pipe) mein aata hai aur seene mein jalan, khatti dakar, ya gale mein khattas feel hoti hai. Kabhi kabhi ise sirf "acidity" ya "gas" samajh liya jaata hai – lekin jab ye problem hafte mein 2 ya zyada baar ho aur mahino tak chale, tab ise GERD kehte hain. India mein estimated 7-19% adults GERD se affected hain, aur tier 2-3 cities mein spicy food aur irregular lifestyle ki wajah se ye number tezi se badh raha hai. Sahi ilaaj aur lifestyle changes se is condition ko effectively control kiya ja sakta hai.',

  quickFacts: {
    whatItIs: 'Pet ka acid baar baar food pipe (esophagus) mein aana; hafte mein 2+ baar aur 3+ mahine tak rehna; normal acidity se alag – chronic condition hai',
    howCommon: 'India mein estimated 7-19% adult population GERD se affected; urban areas mein spicy food aur sedentary lifestyle ki wajah se number badh raha hai',
    treatmentDuration: 'Lifestyle changes se 4-8 hafte mein improvement; complete management mein 3-6 mahine; severe cases mein longer',
    successRate: 'CRHM affiliated studies mein heartburn frequency aur quality of life scores (GERD-HRQL) treatment group mein 6 hafte baad measurably improved; PPI dependence gradually reduce possible',
  },

  causes: [
    'Lower Esophageal Sphincter (LES) weakness – pet aur food pipe ke beech ka valve weak ho jaaye to acid upar aata hai; ye main mechanical cause hai',
    'Hiatal Hernia – stomach ka kuch hissa diaphragm ke upar aa jaata hai; anatomical reason se reflux ka risk badh jaata hai',
    'Overeating ya bahut zyada ek baar khaana – stomach pe pressure badhta hai aur LES pe strain aata hai',
    'Zyada oily, spicy ya fried food – LES ko directly relax karta hai jisse acid upar jaata hai',
    'Late night khaana ya khaate hi lete rehna – gravity ka support nahi milta; acid freely upar aata hai',
    'Obesity ya excess weight – abdominal fat se constant stomach pressure; GERD ka major modifiable risk factor',
  ],

  riskFactors: [
    'Roz spicy, oily ya fast food khaane wale – dietary triggers continuously LES ko stress karte hain',
    'Smokers aur regular alcohol users – dono directly LES tone ko damage karte hain',
    'Pregnant women – uterus ke pressure aur progesterone ki wajah se GERD bahut common; 40-80% affect',
    '40+ age ke adults jo sedentary lifestyle jeete hain – metabolism slow, LES tone weak hoti hai',
    'Stress aur anxiety wale patients – gut-brain axis directly acid production aur gut sensitivity affect karta hai',
    'Regular NSAIDs (aspirin, ibuprofen) users – stomach lining irritate hoti hai; acid badhta hai',
    'Tight kapde ya belt pehenne wale – abdominal pressure se acid upar push hota hai',
  ],

  complications: [
    'Esophagitis – food pipe ki lining mein inflammation aur ghav; khaate waqt dard; agar untreated rahe to erosion badhti hai',
    'Barrett\'s Esophagus – long-term acid damage se food pipe cells badal jaati hain; pre-cancerous condition – regular monitoring zaroori',
    'Esophageal Stricture – food pipe ka sankra ho jaana; khaana nigalne mein takleef; worst cases mein surgery',
    'Chronic cough, asthma ya voice problems (LPR se) – acid gale tak aata hai; ENT symptoms prominent hote hain',
    'Dental erosion – acid ka baar baar munh mein aana daant ki enamel khaata hai; danton ka sensitive hona',
    'Sleep disturbance aur quality of life mein serious girawat – raat ki jalan se chronic fatigue',
  ],

  types: [
    {
      _key: 'type1',
      name: 'Non-Erosive Reflux Disease – NERD',
      description: 'Sabse common type – lagbhag 60-70% GERD patients is category mein aate hain. Isme acid to aata hai aur jalan bhi hoti hai, lekin endoscopy mein food pipe mein koi damage ya ghav nahi dikta. Symptoms real hain lekin andar koi tissue damage nahi hota. Homeopathy is type mein particularly well respond karta hai.',
    },
    {
      _key: 'type2',
      name: 'Erosive Esophagitis – EE',
      description: 'Is type mein acid ki wajah se esophagus ki inner lining mein actual erosion (ghav) aa jaata hai. Endoscopy mein clearly dikh jaata hai. Symptoms zyada severe hote hain – khaate waqt takleef, blood bhi aa sakta hai. Conventional treatment zaroori hai; homeopathy complementary role mein helpful hai.',
    },
    {
      _key: 'type3',
      name: 'Barrett\'s Esophagus',
      description: 'Ye advanced stage hai jisme food pipe ki normal cells badal jaati hain. Ye ek pre-cancerous condition hai – iska matlab cancer nahi hai, lekin regular monitoring zaroori hai. Is type mein conventional gastroenterologist ki supervision must hai; homeopathy supportive role mein le sakte hain.',
    },
    {
      _key: 'type4',
      name: 'Silent GERD – LPR (Laryngopharyngeal Reflux)',
      description: 'Isme seene ki jalan kam ya na ke barabar hoti hai – isliye "silent reflux" bhi kehte hain. Instead, acid gale tak aata hai aur chronic cough, voice hoarseness, throat clearing, ya asthma-like symptoms hote hain. Bahut log is type ko samajh nahi paate aur cough ya gale ki problem samajhke galat treatment lete rehte hain.',
    },
  ],

  symptoms: [
    {
      _key: 'grp1',
      category: 'Seene Aur Pet Ke Symptoms (Most Common)',
      items: [
        'Seene mein jalan (heartburn) – khaane ke 30-60 min baad; lait ne pe badh jaata hai',
        'Khatti ya kadwi dakar – munh mein acid ya khana wapas aana (regurgitation)',
        'Upper abdominal discomfort ya bloating – khaane ke baad heavy feel',
        'Khaana nigalne mein takleef ya pain – severe erosive cases mein',
      ],
    },
    {
      _key: 'grp2',
      category: 'Gale Aur Sar Ke Symptoms (LPR / Silent Reflux)',
      items: [
        'Chronic gale ki kharaash ya throat clearing karne ki aadat – bar bar saaf karna',
        'Aawaaz baithi hona, hoarseness – subah uthte hi zyada; LPR type ka sign',
        'Dry cough jo kisi dawaai se theek nahi hoti – GERD-related cough ka pattern',
        'Naak se pani aana ya sinuses ki problem – acid vapors ka upper airway pe asar',
      ],
    },
    {
      _key: 'grp3',
      category: 'Raat Ko Aur Neend Ke Symptoms',
      items: [
        'Raat ko lait ne pe achanak acid aana – neend kharab hona; uthke baithna padta hai',
        'Subah uthte hi munh mein khatta taste – raat bhar reflux ka nishaan',
        'Chest pain jo heart attack jaise lagta hai – GERD bhi ho sakta hai; doctor se confirm zaroori',
        'Chronic fatigue – kyunki raat ki neend poori nahi hoti; din bhar thakaan',
      ],
    },
  ],

  ccrhEvidence: {
    improvementRate: 'Heartburn frequency mein significant reduction; GERD-HRQL quality of life scores measurably improved at 6 weeks',
    avgTreatmentPeriod: '3 se 6 mahine (case severity pe depend karta hai)',
    citation: 'Council for Research in Homoeopathic Medicine (CRHM) | Indian Journal of Research in Homoeopathy | 2018-2022 | Clinical studies on functional dyspepsia aur GERD-related conditions',
  },

  homeopathyBenefits: [
    'GERD ke homeopathic treatment mein sirf acid ko neutralize nahi kiya jaata – balki jis wajah se acid zyada ban raha hai ya valve weak hua hai, uska root cause address kiya jaata hai. Homeopathy mein patient ki poori picture dekhi jaati hai – kab aata hai, khaane ke baad ya pehle, kya stress se badhta hai, kaisa khana trigger karta hai – aur uske hisaab se individualized medicine di jaati hai. Is approach se na sirf symptoms mein relief milta hai, balki recurrence bhi dhire dhire kam hota jaata hai. Ye especially un patients ke liye faydemand hai jinhe PPI (proton pump inhibitors) se side effects ho rahe hain ya jo lifelong medication nahi lena chahte.',
    'Acid suppressants (PPIs) pe long-term dependence kam hoti hai – supervised setting mein gradual PPI tapering possible',
    'Stress-triggered GERD mein particularly effective – anxiety aur gut sensitivity dono ek saath address hote hain',
    'Side effects practically nil – elderly aur pregnancy mein safe complementary option',
    'Sleep quality improve hoti hai jab raat ke symptoms control hote hain – overall quality of life better',
    'Digestion overall strengthen hoti hai – sirf symptoms mask nahi hote; underlying weakness address hoti hai',
  ],

  medicines: [
    {
      _key: 'med1',
      name: 'Nux Vomica',
      bestFor: 'Jo log zyada spicy/oily khana khaate hain, sedentary office workers, anger ya stress se jalan badhti ho – subah pet bhara lagta ho. Lifestyle trigger dominant type.',
      keyIndications: [
        'Subah uthte hi pet bhaari aur nausea – raat ke late dinner ka effect; khali pet worse',
        'Anger ya stress se jalan instantly badh jaati hai – gut-brain connection clearly dikh ta hai',
        'Khaane ke baad 1-2 ghante mein dakar aur heavy feeling – sluggish digestion pattern',
      ],
    },
    {
      _key: 'med2',
      name: 'Robinia Pseudoacacia',
      bestFor: 'Bahut tez khatta acid aata ho – munh mein paani aa jaaye, daant mein khattapan feel ho. Raat ko lait ne pe worst hona – sleep disturbing reflux episodes.',
      keyIndications: [
        'Extremely sour regurgitation – munh mein paani aana; khatte dakar jo daant ko sensitive karte hain',
        'Raat ko lait ne pe worst – sleep mein achanak uthna padta hai acid se',
        'Hyperacidity – acid production bahut zyada; stomach burning clearly feel hoti hai',
      ],
    },
    {
      _key: 'med3',
      name: 'Iris Versicolor',
      bestFor: 'Jab GERD ke saath migraine ya sar dard bhi ho, bile vomiting ya burning throughout the digestive tract feel ho – head-to-gut combination.',
      keyIndications: [
        'GERD + migraine saath – ek ke baad ek ya ek saath aate hain; classic combination',
        'Bile vomiting – yellow-green bitter vomit; burning throat se pet tak poori tract mein',
        'Weekend ya rest mein worse – relaxation triggers; stress relief pe symptoms aate hain',
      ],
    },
    {
      _key: 'med4',
      name: 'Carbo Vegetabilis',
      bestFor: 'Bahut zyada belching (dakar) se pareshan hain, khaane ke baad immediately bloating ho, gas upar nahi nikle – weak digestion wale elderly ya debilitated patients.',
      keyIndications: [
        'Dakar bahut – khaane ke baad lagaatar; pressure feel hota hai relief ke liye',
        'Bloating immediate – thoda khaate hi pet bhar jaata hai; extreme fullness',
        'Gas neeche nahi, upar pressure – belching se thodi der ke liye aaram; wapas aata hai',
      ],
    },
    {
      _key: 'med5',
      name: 'Lycopodium Clavatum',
      bestFor: 'Shaam 4-8 baje symptoms worst – thoda khaane pe bhi pet bhar jaaye, bloating aur flatulence prominent, liver-related digestive issues. Evening aggravation type.',
      keyIndications: [
        'Shaam 4-8 baje worst – ye specific time window Lycopodium ka hallmark hai',
        'Thoda khaya aur pet bhar gaya – thodi si quantity mein satiety; gas aur bloating turant',
        'Right side discomfort – liver area pe pressure ya heaviness; liver-gut connection',
      ],
    },
  ],

  dietInclude: [
    {
      _key: 'di1',
      category: 'Alkaline Aur Soothing Foods',
      emoji: '🥦',
      items: [
        'Banana – naturally alkaline hai, stomach lining ko soothe karta hai; GERD mein sabse safe fruit',
        'Oatmeal (daliya) – high fiber absorbs acid; filling aur stomach pe gentle; breakfast ke liye best',
        'Boiled/steamed sabziyan (lauki, tori, pumpkin) – easy to digest, no acid trigger; dinner ke liye ideal',
        'Brown rice – complex carbs jo stomach lining ko protect karte hain; white rice se better',
        'Khira (cucumber) – high water content, cooling effect; snack ya salad mein daalein',
      ],
    },
    {
      _key: 'di2',
      category: 'Lean Proteins',
      emoji: '🐟',
      items: [
        'Boiled chicken ya fish – easily digestible, fat kam; LES relax nahi karta',
        'Dal (moong, masoor – kam masale ki) – protein aur fiber dono; light on stomach',
        'Egg whites – fat-free protein source; GERD patients ke liye safe option',
      ],
    },
    {
      _key: 'di3',
      category: 'Healthy Liquids',
      emoji: '💧',
      items: [
        'Nariyal paani – natural electrolytes, alkaline nature, soothing; din mein do baar',
        'Aloe vera juice (unsweetened) – esophagus ki lining ko soothe karta hai; subah khali pet lein',
        'Saunf ka paani (fennel water) – traditional aur effective gas + acidity remedy; roz lein',
        'Ginger chai (bahut halki, bina doodh) – anti-inflammatory, gas relieve karta hai; 1 cup theek hai',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'Acid Triggers',
      emoji: '🌶️',
      items: [
        'Spicy food, mirchi, achaar – LES relax karte hain aur acid production badhate hain; worst triggers',
        'Tomatoes aur tamatar based sauces – highly acidic, direct irritant; pizza sauce bhi avoid',
        'Citrus fruits (orange, nimbu, grapefruit, ananas) – high acid content; directly reflux badhate hain',
        'Fried aur oily food – digestion slow karte hain, stomach pressure badhate hain; samosa-pakoda avoid',
      ],
    },
    {
      _key: 'da2',
      category: 'LES Relaxers (Valve Kholne Wale)',
      emoji: '☕',
      items: [
        'Coffee aur strong chai – caffeine LES ko relax karta hai; ek main GERD trigger; decaf se bhi problem possible',
        'Chocolate – caffeine + fat + theobromine teeno saath; LES ke liye worst combination',
        'Carbonated drinks / cold drinks – gas stomach mein pressure badhati hai; soda bilkul nahi',
        'Alcohol – esophagus lining irritate karta hai aur LES tone kam karta hai; strictly avoid',
      ],
    },
    {
      _key: 'da3',
      category: 'Khaane Ka Galat Tarika',
      emoji: '🍽️',
      items: [
        'Late night khaana (sone se 2-3 ghante pehle) – gravity nahi milti; acid freely upar jaata hai',
        'Ek baar bahut zyada khaana – stomach pe pressure se acid upar jaata hai; 5-6 small meals better',
        'Khaate hi lait jaana ya jhukna – at least 30-45 min wait karo; gravity help karti hai digestion mein',
      ],
    },
  ],

  dos: [
    'Thoda thoda baar baar khao (5-6 small meals) – ek dum bahut zyada khaane se stomach pressure se acid upar aata hai',
    'Khaane ke baad 30-45 min walk karo – gravity help karti hai aur digestion improve hoti hai; raat ko especially',
    'Raat ko sirhane (pillow) ko 15-20 cm upar rakho – gravity se acid neeche rehta hai; pura mattress tilt ideal',
    'Khaane ko achhi tarah chaba chaba ke khao – saliva mein bicarbonate hota hai jo acid neutralize karta hai',
    'Healthy weight maintain karo – har 1 kg weight loss se abdominal pressure kam hoti hai; GERD bhi better hota hai',
    'Stress management karo (yoga, breathing, walk) – stress directly acid production badhata hai; gut-brain connection real hai',
    'Loose, comfortable kapde pehno – especially khaane ke baad tight belt avoid karo; waist pressure GERD trigger hai',
    'Left side pe soyo – evidence-based tip; left side pe stomach position acid ko aane se rokta hai',
  ],

  donts: [
    'Khaate hi bilkul flat mat loato – hamesha 2-3 ghante ka gap rakho so ne se pehle; raat ka dinner early karo',
    'Self-medication mat karo – antacids har roz lena apne aap mein nai problem create karta hai (B12, magnesium deficiency)',
    'Smoking bilkul band karo – har cigarette LES ko directly relax karti hai aur acid badhata hai',
    'Stress mein khaana mat khao – gut-brain connection real hai; stress mein digestion slow hoti hai aur acid badhta hai',
    'Ek saath 2-3 gol naan ya paratha mat khao – wheat + fat + large quantity = strong reflux trigger',
    'Khaane ke baad jhukne wala kaam mat karo (gardening, floor cleaning) – pressure acid push karta hai upar',
    'PPI ya antacid khud se achanak band mat karo – rebound acid surge ho sakta hai; doctor ki guidance se gradually taper karo',
    'Coffee aur chocolate ko sirf thoda theek hai soch ke mat khao – dono strong LES relaxers hain; acute phase mein complete avoid',
  ],

  seasonalCare: {
    summer: 'March-June: Garmi mein acidity naturally zyada hoti hai kyunki body dehydrated hoti hai aur digestive enzymes ka balance disturb hota hai. Zyada paani piyo – thoda thoda, baar baar; nariyal paani aur saunf water regular lo. Bahut thanda ice water ek dum mat piyo – esophageal spasm ho sakta hai. Ice cream aur cold drinks ka temptation aata hai garmi mein – inse bachein; fat content aur carbonation dono GERD badhate hain. Watermelon, pear, kharbooja – ye safe summer fruits hain GERD ke liye.',
    monsoon: 'July-September: Monsoon mein infection ka risk badhta hai jo digestive system ko weak karta hai. Street food, stale food bilkul avoid karo. Humidity mein spicy food ki craving badh jaati hai – ye GERD ka season hai; resist karein. Ginger aur saunf wali light chai faydemand hai. Wet mausam mein gut motility slow hoti hai to light meals better hain. Homemade fresh food hi khao – bahar ka avoid karo.',
    winter: 'November-February: Sardi mein log zyada khaate hain, heavier foods prefer karte hain – aur physical activity kam hoti hai; ye combination GERD ko trigger karta hai. Raat ko hot milk pi rahe hain – to full-fat avoid karo, skimmed lo. Blanket mein completely flat mat soye – head slightly elevated rakho (extra pillow). Sardi mein coffee consumption badh jaati hai – ye major GERD trigger hai; halki adrak chai better option. October-November aur February-March transition mein light easily digestible food khao; probiotics (homemade dahi) add kar sakte ho.',
  },

  faqs: [
    {
      _key: 'faq1',
      question: 'GERD aur normal acidity mein kya fark hai?',
      answer: 'Normal acidity kabhi kabhi hoti hai aur antacid lene se theek ho jaati hai – GERD tab kehte hain jab acid reflux hafte mein 2 ya zyada baar ho aur 3 mahine se zyada chale. GERD mein sirf pet nahi, food pipe (esophagus) bhi affect hoti hai – isliye seene mein jalan, gale mein khattas, aur baar baar dakar aana ismein zyada prominent hota hai. Normal acidity ek temporary digestive upset hai; GERD ek chronic condition hai jo proper diagnosis aur treatment maangti hai.',
    },
    {
      _key: 'faq2',
      question: 'GERD ka ilaaj kaise hota hai – kya hamesha dawaai leni padti hai?',
      answer: 'Nahi – GERD ka ilaaj sirf dawaai nahi hai. Lifestyle changes aur diet modification treatment ka sabse important hissa hai. Mild GERD mein 60-70% patients sirf lifestyle changes se significantly better ho jaate hain. Moderate-severe cases mein doctor antacids ya PPIs likhte hain – aur homeopathy jaise complementary approaches root cause address karne mein help karte hain. Goal ye hai ki waqt ke saath dawaai ki need kam ho, na ki lifelong dependence bane.',
    },
    {
      _key: 'faq3',
      question: 'Kya GERD permanently theek ho sakta hai?',
      answer: 'Haan – long-term control aur significant improvement bilkul possible hai. Jinke GERD ka main cause lifestyle hai (spicy food, late eating, obesity, stress) – unme sahi changes se months mein condition practically normal ho jaati hai. Jo log triggers seriously lete hain, consistent treatment lete hain aur weight control mein rakhte hain, unme symptoms itne rare ho jaate hain ki life normal feel hoti hai. Structural issues jaise hiatal hernia mein surgery ka option bhi hai.',
    },
    {
      _key: 'faq4',
      question: 'Kya homeopathy GERD ya acid reflux mein kaam karta hai?',
      answer: 'Haan – homeopathy GERD mein ek effective approach hai, khaas kar non-erosive aur functional type ke cases mein. CRHM-affiliated studies mein GERD patients mein heartburn frequency aur quality of life scores mein homeopathic treatment group ne placebo group se measurably better results dikhe. Homeopathy ka unique angle ye hai ki ye sirf acid suppress nahi karta – balki digestive system ki sensitivity, stress response aur underlying weakness ko address karta hai. Severe erosive cases mein conventional treatment zaroor lena chahiye aur homeopathy saath mein complementary role mein leni chahiye.',
    },
    {
      _key: 'faq5',
      question: 'GERD mein seene mein dard hota hai – kya ye heart ka problem ho sakta hai?',
      answer: 'Ye ek bahut zaroori sawaal hai. GERD ka seene ka dard usually khaane ke baad hota hai, lait ne pe badh jaata hai, aur munh mein khatta taste ke saath aata hai. Heart ka dard exertion pe hota hai, haath ya jaad tak ja sakta hai, aur sweating/nausea ke saath hota hai. Lekin AGAR aapko pehli baar tez seene ka dard ho – especially 40+ age mein, ya diabetes/BP hai – to PEHLE heart rule out karwaayein. Emergency mein delay mat karein.',
    },
    {
      _key: 'faq6',
      question: 'GERD mein konsa test karwana chahiye?',
      answer: 'Initial diagnosis mostly symptoms se hoti hai. Agar symptoms 3 mahine se zyada hain ya severe hain, to doctor endoscopy recommend karte hain – ye gold standard test hai jisme camera se food pipe aur stomach dekha jaata hai. Barium swallow X-ray se structural issues pata lagti hain. pH monitoring (ambulatory) se confirm hota hai ki kitna acid upar aa raha hai. Manometry se LES ki strength measure hoti hai. Pehle apne doctor se milein – wo symptoms dekh kar decide karenge kaun sa test zaroor hai.',
    },
    {
      _key: 'faq7',
      question: 'Kya GERD mein chai aur coffee band karni padti hai?',
      answer: 'Haan – coffee aur strong chai GERD ke top triggers mein se hain kyunki caffeine directly lower esophageal sphincter (LES) ko relax karta hai aur acid upar aane ki raah kholta hai. Iska ye matlab nahi ki aap zindagi bhar chai chhod do – balki kam karo. Ek halki adrak-saunf wali chai din mein ek baar theek hai. Coffee completely avoid karna ideal hai acute phase mein. Chai ke saath kuch khao – empty stomach pe chai GERD worst karta hai.',
    },
    {
      _key: 'faq8',
      question: 'Gale mein kuch atak sa lagta hai – kya ye GERD hai?',
      answer: 'Haan – ye "globus sensation" ya LPR (Laryngopharyngeal Reflux / Silent Reflux) ho sakta hai. Is mein acid sirf seene tak nahi, seedha gale tak aata hai. Symptoms mein gale mein lump feel hona, baar baar gala saaf karna, aawaaz baithi rehna aur chronic dry cough shamil hai – lekin seene ki jalan zyada nahi hoti. Bahut log is type ko samajh nahi paate aur cough ya thyroid ki problem samajhke galat treatment lete hain. ENT doctor ya gastroenterologist se confirm karwayein.',
    },
    {
      _key: 'faq9',
      question: 'Kya GERD mein doodh peena sahi hai?',
      answer: 'Thoda peena short-term mein relief deta hai – milk alkaline hoti hai aur acid ko temporarily neutralize karti hai. Lekin full-fat doodh ya bahut zyada doodh actually zyada problem kar sakta hai – uska fat content acid production ko baad mein aur badha deta hai. Isliye log sochte hain "doodh se pehle acha laga phir aur bura hua." Solution: Thodi quantity mein, skimmed ya low-fat doodh, raat ko nahi – ye GERD mein better option hai.',
    },
    {
      _key: 'faq10',
      question: 'GERD pregnancy mein kaise manage karein?',
      answer: 'Pregnancy mein GERD bahut common hai – 40-80% pregnant women affected hoti hain, khaas kar second aur third trimester mein. Wajah: progesterone hormone LES ko relax karta hai aur growing uterus stomach ko upar push karta hai. Pregnancy mein zyaadatar medicines restricted hain, isliye lifestyle changes main treatment hai: thoda thoda khaana, raat ko sone se 3 ghante pehle last meal, sirhane upar rakhna, spicy food bilkul avoid. Homeopathy pregnancy mein safe option hai – lekin sirf qualified homoeopath ki guidance mein.',
    },
    {
      _key: 'faq11',
      question: 'GERD mein exercise kar sakte hain?',
      answer: 'Haan – aur actually karna chahiye, lekin timing aur type matter karta hai. Khaane ke turant baad heavy exercise ya jumping bilkul nahi – stomach pressure se acid aata hai. Khaane ke 2 ghante baad light to moderate exercise – walking, yoga, cycling – sab theek hai. Yoga mein specific poses se bachein: downward dog, forward bend, jahan head neeche aata ho. Overall: regular walking sabse safe aur effective exercise hai GERD patients ke liye.',
    },
    {
      _key: 'faq12',
      question: 'Bacchon mein GERD ya acid reflux kaise pehchanein?',
      answer: 'Bacchon mein GERD ke symptoms adults se alag hote hain – isliye parents often miss karte hain. Chhote bacchon (infants) mein: frequent vomiting, feeding refuse karna, weight na badhna, back arching after feeding. Bade bacchon mein: baar baar pet dard, seene ki jalan (jo wo "dard" kehte hain), baar baar throat clear karna, ya chronic cough. Raat ko baar baar uthna ya disturbed sleep bhi sign ho sakta hai. Pediatric gastroenterologist se milein – bacchon ka treatment adults se alag hota hai.',
    },
    {
      _key: 'faq13',
      question: 'GERD mein kaunsa fruit khana chahiye aur kaunsa nahi?',
      answer: 'GERD-friendly fruits: Banana (best – alkaline aur soothing), Watermelon (high water content, low acid), Kharbooja, Pear, Anjeer (fig). Avoid karne wale fruits: Orange, Nimbu, Grapefruit, Ananas (pineapple), Tamatar – ye sab high acid hain. Apple mein naturally malic acid hota hai – kuch patients tolerate karte hain, kuch nahi – apna response observe karein. Sweet mango thoda chalata hai; raw mango bilkul nahi. General rule: jo fruits khatte lagte hain – wo GERD mein trigger karte hain.',
    },
    {
      _key: 'faq14',
      question: 'Raat ko seene mein jalan kyun hoti hai – GERD ka?',
      answer: 'Raat ki jalan GERD ka classic sign hai aur iske do main reasons hain. Pehla: jab aap let jaate hain to gravity ka support nahi milta aur acid food pipe mein easily aata hai. Doosra: neend mein hum kam baar swallow karte hain – saliva ki flow kam hoti hai jo daytime mein acid ko flush karti hai. Solution: Sone se 2-3 ghante pehle kuch mat khao, sirhane 15-20 cm upar karo, aur left side sleep karna evidence-based tip hai – left side pe stomach position acid ko aane se rokta hai.',
    },
    {
      _key: 'faq15',
      question: 'GERD ke gharelu ilaaj kya hain – ghar pe kya kar sakte hain?',
      answer: 'Kuch effective aur safe gharelu approaches: Saunf (fennel) ka paani – ek chammach saunf ek glass paani mein ubaalein aur peeyein; gas aur acidity dono mein relief. Aloevera juice (pure, sugar-free) – esophageal lining ko soothe karta hai. Thodi adrak wali chai (bina doodh, halki) – anti-inflammatory. Chewing gum (sugar-free) khaane ke baad – saliva production badhata hai jo acid neutralize karta hai. Ye sab mild symptoms ke liye hain – agar regular jalan ho to doctor se milein.',
    },
    {
      _key: 'faq16',
      question: 'GERD aur IBS saath ho sakte hain?',
      answer: 'Haan – aur ye combination bahut common hai. Studies suggest karte hain ki GERD patients mein IBS aur IBS patients mein GERD dono ek doosre se zyada common hain as compared to general population. Dono conditions mein gut sensitivity badi hoti hai – aur stress dono ko trigger karta hai. Agar aapko upper abdomen mein jalan ke saath neeche bhi cramping, loose motions ya constipation bhi ho – to doctor ko dono conditions ke baare mein batao. Homeopathy in dono ko ek patient ke context mein treat karna specially effective hota hai.',
    },
    {
      _key: 'faq17',
      question: 'GERD se weight loss ho sakta hai?',
      answer: 'Directly GERD weight loss nahi karta – lekin related complications kar sakti hain. Severe GERD mein khaane mein takleef hone ki wajah se log less khaate hain. Chronic esophagitis mein nutrient absorption thodi affect ho sakti hai. Agar aapko GERD ke saath unexplained weight loss ho rahi hai – to ye red flag hai, doctor se turant milein kyunki ye advanced esophageal disease ka sign bhi ho sakta hai. Nahi to, GERD mein weight loss karne ki salaah di jaati hai – kyunki obesity GERD ka ek major cause hai.',
    },
    {
      _key: 'faq18',
      question: 'Kya GERD anxiety aur stress se badh jaata hai?',
      answer: 'Bilkul – aur ye connection science-backed hai. Gut-brain axis (second brain) real hai – aur stress directly digestive system pe impact karta hai. Stress mein cortisol release hota hai jo gut motility slow karta hai, acid production badha sakta hai aur gut sensitivity increase karta hai. Anxiety wale patients mein GERD symptoms 2-3 guna zyada report hote hain. Isliye GERD ka treatment sirf pet tak seedha nahi hona chahiye – stress management (yoga, meditation, breathing exercises, proper sleep) equally important hai.',
    },
    {
      _key: 'faq19',
      question: 'GERD mein kaunsa yoga ya exercise faydemand hai?',
      answer: 'Kuch yoga poses GERD patients ke liye specifically helpful hain: Vajrasana (diamond pose) – khaane ke baad 10-15 min karo, digestion improve karta hai; Supta Baddha Konasana – gentle chest opener, stress relief; Deep belly breathing / diaphragmatic breathing – LES ki strength improve karta hai. AVOID karne wale poses: Halasana, Paschimottanasana, Downward dog (jab kha ke aye ho), Sarvangasana – ye stomach compress karte hain. Kapalbhati forcefully mat karo – pressure GERD trigger kar sakta hai.',
    },
    {
      _key: 'faq20',
      question: 'Kya GERD mein proton pump inhibitors (PPIs) safe hain long term?',
      answer: 'Short-term PPI use bilkul safe hai. Lekin long-term (6 month+) PPI use ke kuch proven concerns hain: Calcium aur Magnesium absorption kam hoti hai (haddiyan weak ho sakti hain), Vitamin B12 deficiency, Kidney function pe mild impact, Gut microbiome change. Isliye goal ye hona chahiye ki gradually, doctor ki guidance se, PPI ki dose kam ki jaaye – lifestyle changes, diet modification aur complementary approaches (homeopathy, etc.) ke saath. Apne aap achanak band mat karo – rebound acid surge ho sakta hai.',
    },
    {
      _key: 'faq21',
      question: 'GERD aur asthma ka kya connection hai?',
      answer: 'GERD aur asthma ka ek strong bidirectional link hai – matlab ek doosre ko trigger karta hai. GERD se asthma kyun hota hai: acid vapors airway mein aate hain aur bronchial tubes mein irritation aur spasm cause karte hain. Asthma se GERD kyun hota hai: asthma ka cough aur pressure changes LES pe strain dalte hain. Jo asthmatics hain jinhe raat ko symptoms worse hote hain ya jo inhalers use karne ke baad bhi improve nahi hote – unhe GERD rule out zaroor karwana chahiye.',
    },
    {
      _key: 'faq22',
      question: 'GERD ke liye Dr. Shadab se kaise consult karein?',
      answer: 'Dr. Shadab Khan se online ya in-person consultation ke liye drshadabs.com pe jaayein. GERD mein case-taking mein aapki diet history, stress pattern, symptoms ka exact timing, kaunsi cheez se worse ya better hoti hai – sab discuss hota hai. Individualized homeopathic approach hi GERD mein acid suppress karne ki jagah root cause address karta hai. Clinic: Akola, Maharashtra. Online consultation bhi available hai.',
    },
  ],

  relatedDiseases: [
    'Acidity',
    'IBS',
    'Gastritis',
    'Ulcerative Colitis',
    'Anxiety',
  ],
}

async function seed() {
  await client.createOrReplace(doc)
  console.log('✅ GERD / Acid Reflux created/updated: disease-gerd')
  console.log('🌐 Live at: https://homeopedia.in/diseases/gerd')
}

seed().catch(console.error)
