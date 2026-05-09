import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-guttate-psoriasis',
  _type: 'disease',
  title: 'Guttate Psoriasis',
  hindiName: 'Bindu Chambal / Chhote Daane Wali Chambal',
  slug: { _type: 'slug', current: 'guttate-psoriasis' },
  category: 'Skin',
  publishedAt: '2026-05-07T00:00:00.000Z',
  metaTitle: 'Guttate Psoriasis Treatment in Hindi | Homeopedia',
  metaDescription: 'Guttate Psoriasis (chhote daane wali chambal) ke causes, treatment, homeopathic medicines aur diet guide – doctor-reviewed, verified Hinglish mein.',

  heroText: 'Guttate Psoriasis ek aisi skin condition hai jisme suddenly poore body pe chhote-chhote, tear-drop (aansu) ki tarah ke pink ya red daane nikal aate hain – khaaskar chest, peeth, baahon aur jaangon pe. "Guttate" word Latin se aaya hai jiska matlab hai "boond." Ye mostly bacchon aur young adults (5–35 saal) mein zyada dekhi jaati hai, aur aksar ek throat infection (strep throat) ke baad achanak shuru hoti hai. Kai logon mein ye ek baar aakar theek ho jaati hai, lekin kuch patients mein ye baar-baar aati hai ya chronic Plaque Psoriasis mein badal jaati hai – isliye sahi treatment aur follow-up zaroori hai.',

  quickFacts: {
    whatItIs: 'Poore body pe tear-drop shaped chhote daane – mostly strep throat ke baad achanak aate hain, young adults mein zyada',
    howCommon: 'India mein Psoriasis ke lagbhag 2-3% population affected hai; Guttate form zyada tar young adults (15-35 saal) mein hoti hai',
    treatmentDuration: 'Acute Guttate: 3-4 mahine mein significant improvement | Homeopathic long-term management: 6-12 mahine',
    successRate: 'Sahi treatment se 80% se zyada patients 3-4 mahine mein significantly better – early treatment se Plaque mein conversion rarely hoti hai',
  },

  causes: [
    'Strep throat (Group A Streptococcal infection) – sabse common trigger, 70% se zyada cases mein responsible',
    'Immune system ka overreaction – body infection se ladne ki jagah apni hi skin cells ko attack karne lagti hai',
    'Genetic predisposition – agar family mein kisi ko Psoriasis hai to risk significantly zyada hota hai',
    'Viral infections – COVID-19, chickenpox, respiratory infections bhi trigger ban sakte hain',
    'Certain medications – beta-blockers, lithium, antimalarial drugs kuch patients mein Guttate trigger kar sakte hain',
    'Skin injury ya sunburn – Koebner phenomenon ke through daane damaged skin pe aa sakte hain',
  ],

  riskFactors: [
    '5 se 35 saal ke beech ke young adults aur bacche',
    'Jo log baar-baar strep throat ya tonsillitis ke shikaar hote hain',
    'Jinki family mein Psoriasis ya autoimmune conditions hain',
    'Jo log chronic stress mein rehte hain',
    'Smokers – smoking immune dysregulation badhata hai',
    'Jo log already Plaque Psoriasis ke patient hain',
  ],

  complications: [
    'Plaque Psoriasis mein conversion – chronic aur zyada mushkil form (30-40% cases mein)',
    'Psoriatic Arthritis – joints mein dard aur sujan, especially untracked cases mein',
    'Psychological impact – anxiety, social withdrawal, low confidence – medically recognized complications',
    'Secondary bacterial skin infection – agar daanon ko scratch kiya jaaye',
    'Nail aur eye involvement – rare lekin possible in severe cases',
  ],

  types: [
    {
      _key: 'type1',
      name: 'Acute Guttate Psoriasis (Ekbar Aane Wali)',
      description: 'Ye sabse common type hai. Strep throat ya kisi infection ke baad achanak shuru hoti hai. Daane 3-4 hafte mein nikal aate hain, aur sahi treatment se 3-4 mahine mein theek ho jaate hain. Zyada tar young patients mein aisi hoti hai.',
    },
    {
      _key: 'type2',
      name: 'Recurrent Guttate Psoriasis (Baar Baar Aane Wali)',
      description: 'Kuch patients mein har baar throat infection ya stress ke baad ye condition dobara trigger hoti hai. Iska matlab ye nahi ki permanent ho gayi – lekin triggers identify karna aur control karna zaroori hai.',
    },
    {
      _key: 'type3',
      name: 'Guttate Progressing to Plaque Psoriasis',
      description: 'Roughly 30-40% patients mein Guttate Psoriasis aage chalke Chronic Plaque Psoriasis mein convert ho sakti hai – especially agar family history ho ya treatment na li ho. Isliye Guttate ko sirf chhoti bimari samajhkar ignore nahi karna chahiye.',
    },
    {
      _key: 'type4',
      name: 'Guttate with Scalp Involvement',
      description: 'Kuch patients mein daane scalp pe bhi aa jaate hain – jahan chote red patches aur dry flakes dono saath dikhte hain. Ye Scalp Psoriasis se thodi alag hoti hai kyunki daane chhote hote hain.',
    },
    {
      _key: 'type5',
      name: 'Post-COVID / Post-Viral Guttate Psoriasis',
      description: 'Recent years mein viral infections (COVID-19 included) ke baad bhi Guttate Psoriasis ke cases report hue hain. Ye trigger ek naya concern hai jo dermatologists aur homoeopaths dono observe kar rahe hain.',
    },
  ],

  symptoms: [
    {
      _key: 'sym1',
      category: 'Skin Pe Dikhne Wale Signs (Primary Symptoms)',
      items: [
        'Chhote, 0.5 cm–1.5 cm ke tear-drop shaped pink/red daane',
        'Daane achanak poore body pe phailte hain – mostly chest, peeth, baahon pe',
        'Daane ke upar patli white/silver si papdi (scale) hoti hai – moti nahi',
        'Daane zyada tar flat ya thode raised hote hain – Plaque jaise mote nahi',
      ],
    },
    {
      _key: 'sym2',
      category: 'Discomfort Wale Symptoms',
      items: [
        'Mild se moderate kharish (itching) – especially raat ko zyada',
        'Daanon pe jalan ya tightness ka ehsaas',
        'Dabane pe thoda dard – sensitive skin',
        'Kuch patients mein daane bina kharish ke bhi hote hain',
      ],
    },
    {
      _key: 'sym3',
      category: 'Saath Aane Wale Signs',
      items: [
        'Aksar isse 2-3 hafte pehle gale mein dard / sore throat hua hota hai',
        'Halka bukhar ya thakaan – infection ke baad',
        'Scalp pe bhi chhote red patches possible',
        'Nails pe pitting (chhote holes) – rare lekin observe hota hai',
      ],
    },
  ],

  ccrhEvidence: {
    improvementRate: '80% se zyada patients 3-4 mahine mein significantly better; CCRH-affiliated studies mein lesion size aur itching intensity dono mein placebo se better results',
    avgTreatmentPeriod: '3-4 mahine acute cases | 6-12 mahine constitutional / recurrent management',
    citation: 'Indian Journal of Research in Homoeopathy | Vol. 13, Issue 2 | 2019 | National Psoriasis Foundation',
    keyFindings: [
      'Homeopathic treatment group mein lesion size aur itching intensity dono mein significant reduction',
      'Constitutional treatment se immune overreaction ki frequency kam hoti hai – recurrent cases mein khaas fayda',
      'Safe for children aur young adults – koi steroid nahi, side effects practically nil',
    ],
  },

  homeopathyBenefits: [
    'Immune system ko "reset" karne mein madadgar – overreaction calm hoti hai',
    'Strep infection ke baad bhi jo "trigger sensitivity" reh jaati hai, homeopathy use reduce karne mein kaam aata hai',
    'Recurrent cases mein frequency aur severity dono kam hoti hain sahi constitutional treatment se',
    'Safe for children aur young adults – koi steroid nahi, side effects practically nil',
    'Psychological aspect bhi treat hota hai – anxiety aur low confidence jo skin conditions ke saath aati hai',
  ],

  homeopathyLimitations: [
    'Results mein time lagta hai – 3-4 mahine consistent treatment ke baad improvement aata hai, quick fix nahi',
    'Severe secondary infection ya very high fever mein conventional treatment pehle zaroori hai',
  ],

  medicines: [
    {
      _key: 'med1',
      name: 'Arsenicum Album',
      bestFor: 'Jinke daane raat ko zyada jalte hain, jinhe thoda thanda paani peene se thodi rahat milti hai, aur jo bahut restless aur anxious rehte hain.',
      keyIndications: [
        'Burning, raat ko worse – restlessness ke saath itching',
        'Anxious, perfectionist patient – stress-triggered flares',
        'Skin dry aur scaly – thande se thodi relief',
      ],
    },
    {
      _key: 'med2',
      name: 'Sulphur',
      bestFor: 'Jinke daane bahut kharish karte hain, garam paani se kharish badhti hai, aur jinki skin generally oily ya dirty-looking lagti hai.',
      keyIndications: [
        'Intense itching – garam paani se aur worse hoti hai',
        'Skin generally unhealthy looking – chronic inflammation',
        'Heat se worse – garmi mein symptoms zyada badh jaate hain',
      ],
    },
    {
      _key: 'med3',
      name: 'Graphites',
      bestFor: 'Jinke daanon se thodi sticky, honey-like discharge hoti hai, skin thick aur rough hai, aur jinhe constipation bhi rehta hai saath mein.',
      keyIndications: [
        'Sticky honey-like discharge wale lesions – skin cracks karti hai',
        'Constipation aur skin symptoms saath saath aate hain',
        'Skin thick aur rough – moisture balance disturbed',
      ],
    },
    {
      _key: 'med4',
      name: 'Mezereum',
      bestFor: 'Jinke daane bahut intense burn karte hain, upar thick crust ban jaati hai, neeche se pus-like fluid aata hai, jinhe thandi hawa se thodi rahat milti hai.',
      keyIndications: [
        'Thick crust wale lesions – neeche se pus ya serum discharge',
        'Intense burning – thandi hawa se relief',
        'Severe scalp aur body involvement – crusting dominant feature',
      ],
    },
    {
      _key: 'med5',
      name: 'Rhus Toxicodendron',
      bestFor: 'Jinke daane bahut kharish karte hain aur raat ko ya rest mein zyada kharish badhti hai, movement se thoda better feel hota hai.',
      keyIndications: [
        'Rest se worse, movement se better – classic Rhus Tox pattern',
        'Post-infection trigger – strep throat ke baad Guttate flare',
        'Raat ko itching worst – neend disturb hoti hai',
      ],
    },
  ],

  dietInclude: [
    {
      _key: 'di1',
      category: 'Anti-Inflammatory Foods',
      emoji: '🥗',
      items: [
        'Haldi (turmeric) – curcumin skin inflammation significantly kam karta hai',
        'Adrak (ginger) – immune overreaction ko naturally modulate karta hai',
        'Palak, methi, bathua – iron aur folate se skin healing fast hoti hai',
        'Amla (Indian gooseberry) – Vitamin C se skin repair aur immunity balanced rehti hai',
      ],
    },
    {
      _key: 'di2',
      category: 'Gut-Friendly Foods',
      emoji: '🥣',
      items: [
        'Dahi (plain, unsweetened) – gut microbiome balance se skin-gut axis improve hota hai',
        'Coconut water – electrolytes aur gut lining dono support karta hai',
        'Moong dal – easily digestible protein jisse skin repair ke liye amino acids milte hain',
        'Ghee (cow\'s, in moderation) – anti-inflammatory fatty acids skin moisture badhate hain',
      ],
    },
    {
      _key: 'di3',
      category: 'Hydration & Cooling Foods',
      emoji: '💧',
      items: [
        'Kheera (cucumber) – skin hydration aur cooling dono',
        'Tarbooz (watermelon) – lycopene se skin inflammation kam hoti hai',
        'Naariyal pani – toxin flush karta hai naturally',
        'Mint (pudina) – internal heat reduce karta hai jo skin flare-up karta hai',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'Inflammatory Foods',
      emoji: '🚫',
      items: [
        'Red meat excess mein – arachidonic acid se skin inflammation directly trigger hoti hai',
        'Processed/packaged food – preservatives immune system ko irritate karte hain',
        'Maida-based items (white bread, biscuits) – refined carbs blood sugar spike karte hain',
      ],
    },
    {
      _key: 'da2',
      category: 'Immune Aggravators',
      emoji: '🍺',
      items: [
        'Alcohol – liver pe load badhata hai, skin detoxification slow hoti hai, psoriasis flare-ups se directly linked',
        'Caffeinated drinks in excess (3+ cups chai/coffee) – dehydration aur cortisol dono skin worsen karte hain',
        'Cold drinks / soda – sugar + phosphoric acid gut dysbiosis badhata hai',
      ],
    },
    {
      _key: 'da3',
      category: 'Personal Trigger Foods (Observe Karein)',
      emoji: '⚠️',
      items: [
        'Citrus fruits – kuch patients mein trigger hote hain, personal diary se observe karein',
        'Nightshade vegetables (tamatar, baingan, capsicum) – kuch patients mein inflammation badh sakti hai',
        'Gluten (wheat) – ek subset of psoriasis patients mein gluten sensitivity hoti hai',
      ],
    },
  ],

  dietTip: 'Gut health aur skin health directly connected hain – gut-friendly diet (dahi, moong dal, ghee) is condition mein khaas role play karti hai. Trigger diary zaroor banao.',
  dietNote: 'Nightshade vegetables aur citrus sabke liye trigger nahi hote – khud observe karo 2 hafte. Apna personal trigger pattern jaanna zyada helpful hai general advice se.',

  dos: [
    'Nahaane ke baad 3 minute ke andar moisturizer lagayein – wet skin pe lagane se absorption zyada hoti hai',
    'Strep throat ka turant treatment lein – Guttate ka sabse bada trigger hai, delay karna directly skin outcome affect karta hai',
    'Cotton aur soft fabric ke kapde pehnein – synthetic fabric friction badhata hai aur Koebner phenomenon trigger kar sakta hai',
    'Stress management seriously lein (yoga, walk, music) – stress psoriasis flare-ups ka proven trigger hai',
    'Apna trigger pattern ek diary mein note karein – ye information doctor ke liye bohot valuable hai',
    'Regular follow-up rakhein – Guttate silently Plaque mein convert ho sakti hai, monitoring zaroori hai',
  ],

  donts: [
    'Daanon ko nakhun se scratch mat karein – secondary infection aur naye daane dono ka risk; raat ko cotton gloves pehnen',
    'Bina doctor ki salaah ke steroid cream band mat karein achanak – rebound flare bahut severe ho sakta hai',
    'Self-medicate mat karein – Guttate aur Plaque ka treatment alag hota hai',
    'Smoking bilkul band karein – smoking psoriasis ki severity aur recurrence dono directly badhati hai, medically proven',
    'Extremely hot/cold shower nahi – lukewarm pani skin barrier maintain karta hai',
    'Alcohol avoid karein completely during active flare – liver aur skin dono pe double burden aata hai',
  ],

  seasonalCare: {
    summer: 'Thodi controlled morning sunlight (10-15 min, 8-10 baje) faydemand hai – UV light psoriatic lesions pe therapeutic effect. Lekin sunburn bilkul avoid karein – Koebner phenomenon trigger hoga. Sunscreen SPF 30+ use karein. AC mein zyada rehne se bhi skin dry hoti hai.',
    winter: 'Sabse mushkil season – skin bahut dry ho jaati hai. Thick moisturizer din mein 2-3 baar lagayein, nahaane ke turant baad. Lukewarm aur short bath karein, lamba garam nahaana avoid karein. Humidifier use karein. Woolen kapde seedhe skin pe na pehnein – cotton layer pehle.',
    monsoon: 'Guttate ke liye critical season – strep throat is season mein common hai (no. 1 trigger). At first sign of sore throat doctor se milein. Skin dry aur clean rakhein. Swimming pools avoid karein – chlorine aur bacteria dono trigger hain.',
  },

  faqs: [
    {
      _key: 'faq1',
      question: 'Guttate Psoriasis kya hoti hai aur ye normal chambal se kaise alag hai?',
      answer: 'Guttate Psoriasis mein poore body pe chhote-chhote, aansu ki boond jaisi shapes ke red/pink daane nikal aate hain – mostly achanak, infection ke baad. Ye normal Plaque Psoriasis (badi moti patches wali chambal) se is tarah alag hai ki iske daane chhote hote hain (0.5-1.5 cm), mote nahi hote, aur zyada tar suddenly aate hain. Plaque Psoriasis dhire dhire develop hoti hai; Guttate 2-3 hafte mein poore body pe aa jaati hai. Guttate zyada tar young patients mein aur usually ek infection ke baad trigger hoti hai.',
    },
    {
      _key: 'faq2',
      question: 'Guttate Psoriasis ka treatment kya hai – kya ye theek ho sakti hai?',
      answer: 'Haan – Guttate Psoriasis mein recovery bilkul possible hai, especially pehli baar ki attack mein. Sahi treatment se 80% se zyada patients 3-4 mahine mein significantly better feel karte hain. Homeopathy mein immune response ko normalize karne pe focus hota hai – jo recurrent cases mein particularly helpful hai. Important ye hai ki ek qualified homoeopath se early treatment shuru karein taaki condition chronic na ho.',
    },
    {
      _key: 'faq3',
      question: 'Guttate Psoriasis kitne time mein theek hoti hai?',
      answer: 'Pehli baar ki acute Guttate attack mein improvement usually 3-4 hafte mein dikhti hai, aur 3-4 mahine mein majority patients mein daane kafi clear ho jaate hain. Recurrent cases mein har episode ki duration vary karti hai. Jo patients triggers carefully manage karte hain aur treatment pe tike rehte hain, unme attacks ya to bahut rare ho jaate hain ya bahut mild. Homeopathic treatment 6-9 mahine ka time leta hai frequency aur severity dono kam karne mein – lekin results long-lasting hote hain.',
    },
    {
      _key: 'faq4',
      question: 'Kya Guttate Psoriasis se Plaque Psoriasis ho sakti hai?',
      answer: 'Haan – ye ek important baat hai jo doctors clearly bataate hain. Roughly 30-40% patients mein Guttate Psoriasis aage chalke Chronic Plaque Psoriasis mein convert ho sakti hai – especially agar genetic predisposition ho, baar baar attacks aate hon, ya treatment properly na li ho. Ye conversion dhire dhire hoti hai. Isliye Guttate ko "sirf chhoti bimari" samajhkar ignore nahi karna chahiye – regular follow-up aur long-term management bahut zaroori hai.',
    },
    {
      _key: 'faq5',
      question: 'Kya homeopathy Guttate Psoriasis mein kaam karti hai?',
      answer: 'Haan – homeopathy Guttate Psoriasis mein ek effective approach hai, especially recurrent cases mein jahan conventional treatment symptoms manage karta hai lekin root cause address nahi hoti. CCRH-affiliated studies mein psoriasis patients ke treatment group mein lesion size aur itching intensity dono mein placebo se better results mile hain. Homeopathy ka specific fayda ye hai ki ye immune oversensitivity address karti hai – isliye infections ke baad jo overreaction trigger hoti hai, uski frequency kam hoti hai.',
    },
    {
      _key: 'faq6',
      question: 'Guttate Psoriasis ki best homeopathic medicine kaun si hai?',
      answer: 'Guttate Psoriasis mein koi ek "best" medicine nahi hoti – homeopathy mein medicine patient ki poori picture ke hisaab se choose hoti hai. Kuch medicines commonly is condition mein kaam aati hain: Arsenicum Album (burning aur restlessness wale patients), Sulphur (intense itching, warmth se worse wale), Graphites (dry, thick skin wale), Mezereum (crusting wali severe involvement), aur Rhus Toxicodendron (post-infection trigger, movement se better). Aapke liye kaun si sahi hai ye sirf ek qualified homoeopath decide kar sakta hai.',
    },
    {
      _key: 'faq7',
      question: 'Guttate Psoriasis mein kya khana chahiye aur kya nahi?',
      answer: 'Kya khayein: haldi, adrak, palak, amla, dahi, moong dal, kheera, naariyal pani – ye sab anti-inflammatory hain. Kya avoid karein: alcohol (directly linked to flares), processed food, maida, red meat excess mein, aur 3+ cups chai/coffee. Nightshade vegetables (tamatar, baingan) aur citrus kuch patients mein trigger hote hain – apna personally observe karein aur diary maintain karein. Gut health aur skin health directly connected hain.',
    },
    {
      _key: 'faq8',
      question: 'Guttate Psoriasis ke daane kahan nikalte hain?',
      answer: 'Guttate Psoriasis ke daane sabse pehle aur sabse zyada inhi jagahon pe aate hain: chest, peeth (back), pet (abdomen), upar ki baahein (upper arms), jaangein (thighs). Kuch patients mein scalp, neck, aur face pe bhi aa sakte hain. Haath ki hatheli (palms) aur pair ke taale (soles) pe usually nahi aate – ye Plaque Psoriasis mein zyada hota hai. Daane achanak aur broadly phailte hain – poore body pe.',
    },
    {
      _key: 'faq9',
      question: 'Bacchon mein Guttate Psoriasis ka treatment kya hai?',
      answer: 'Bacchon mein Guttate Psoriasis actually adults ke mukable zyada common hai aur zyada tar strep throat ke baad aati hai. Pehla step: strep infection confirm karo aur uska proper treatment lo. Homeopathy bacchon ke liye particularly suitable hai kyunki diluted medicines hain, koi harsh side effects nahi – aur bacchon ka immune system relatively responsive bhi hota hai. Long-term mein tonsil health monitor karna zaroori hai.',
    },
    {
      _key: 'faq10',
      question: 'Kya Guttate Psoriasis contagious (chhoone se phailti) hai?',
      answer: 'Bilkul nahi – Guttate Psoriasis contagious nahi hai. Ye ek autoimmune skin condition hai jisme aapka apna immune system skin cells ko affect karta hai – kisi bhi kism ka infection ya contagion involved nahi hai. Aap freely dusron ke saath baith sakte hain, handshake kar sakte hain, hug kar sakte hain – koi risk nahi hai. Society mein bahut galat information hai is baare mein jo patients aur unke families ke liye unnecessarily stressful hota hai.',
    },
    {
      _key: 'faq11',
      question: 'Guttate Psoriasis mein kharish (itching) kaise control karein?',
      answer: 'Kharish control karne ke liye: (1) Nahaane ke baad turant thick moisturizer lagayein – dry skin se kharish badhti hai. (2) Lukewarm pani use karein – garam pani kharish significantly badha deta hai. (3) Raat ko cotton gloves pehen lein agar neend mein scratch hota ho. (4) Doctor-recommended antihistamine le sakte hain raat ko. (5) Cooling compress (cold cloth) temporarily relief deta hai. (6) Homeopathic treatment se kharish ki intensity dhire dhire kam hoti hai. Scratching avoid karna critical hai.',
    },
    {
      _key: 'faq12',
      question: 'Stress se Guttate Psoriasis ka kya connection hai?',
      answer: 'Stress aur Guttate Psoriasis ka seedha connection hai – ye medically proven hai. Chronic stress cortisol hormone badhata hai jo immune system ko dysregulate karta hai, aur in patients mein immune system already overreactive hoti hai. Isliye stress ek major trigger aur flare-worsening factor hai. Jo patients yoga, meditation, regular walk ya koi bhi stress-relief activity apne routine mein rakhte hain, unme flare frequency aur severity dono kam dekhi jaati hai.',
    },
    {
      _key: 'faq13',
      question: 'Guttate Psoriasis mein sunlight leni chahiye ya nahi?',
      answer: 'Controlled, mild sunlight actually faydemand hai. Morning sun (10-20 min, subah 8-10 baje) psoriatic lesions pe UV light ka therapeutic effect hota hai. Lekin sunburn bilkul avoid karein – Koebner phenomenon se naye daane aa sakte hain injured skin pe. Sunscreen use karein jo areas covered nahi hain. Phototherapy (narrowband UVB) ek proper medical treatment hai dermatologist ki supervision mein – ghar pe sunlight uska substitute nahi hai lekin mild benefit zaroor hai.',
    },
    {
      _key: 'faq14',
      question: 'Guttate Psoriasis ke liye kaun sa test karwana chahiye?',
      answer: 'Aksar diagnosis clinically hoti hai – doctor daane dekhke identify kar lete hain. Lekin confirm karne ke liye: Throat swab (strep culture ya rapid antigen test) – trigger identify karne ke liye; ASO titre – prior strep infection confirm karta hai; Skin biopsy – agar diagnosis unclear ho; CBC – overall health aur infection check. Ye tests doctor recommend karte hain based on presentation – apne aap kuch bhi order mat karein.',
    },
    {
      _key: 'faq15',
      question: 'Kya Guttate Psoriasis mein neem ya coconut oil laga sakte hain?',
      answer: 'Neem oil aur coconut oil dono kuch patients ko relief dete hain – ye completely safe hain topically use karne ke liye. Coconut oil skin ko hydrate karta hai aur anti-inflammatory properties hain. Neem oil mein antibacterial properties hain aur mild itching relief mil sakti hai. Lekin concentrated neem oil seedha skin pe direct use nahi karna chahiye, carrier oil mein dilute karein. Agar koi reaction aaye to use band kar dein aur doctor se milein.',
    },
    {
      _key: 'faq16',
      question: 'Guttate Psoriasis mein exercise kar sakte hain?',
      answer: 'Haan – exercise bilkul kar sakte hain, aur actually beneficial hai. Regular moderate exercise stress kam karta hai, weight manage karta hai, aur overall immune health improve hota hai. Kuch precautions: vigorous exercise mein paseena kaafi aata hai – turant nahayen aur skin ko clean rakhein. Swimming pool avoid karein active flare mein – chlorine skin irritate karta hai. Outdoor exercise mein sunscreen use karein. Yoga aur walking – dono is condition ke liye excellent choices hain.',
    },
    {
      _key: 'faq17',
      question: 'Guttate Psoriasis mein pregnancy safe hai kya?',
      answer: 'Guttate Psoriasis directly pregnancy ke liye unsafe nahi hai. Lekin kuch important baatein: pregnancy mein hormonal changes se kuch patients mein psoriasis better hoti hai, kuch mein worse. Jo medications aap le rahe hain unke baare mein doctor se zaroor poochein – kuch topical steroids pregnancy mein safe nahi hoti. Homeopathy pregnancy mein relatively safe mani jaati hai lekin homoeopath ko pregnancy ke baare mein batana zaroori hai.',
    },
    {
      _key: 'faq18',
      question: 'Kya Guttate Psoriasis thandi ya garmi mein zyada badhti hai?',
      answer: 'Dono ka alag alag effect hota hai. Sardi mein skin bahut dry ho jaati hai – dry skin flare-up ka direct trigger hai, isliye winters mein zyada patients flare experience karte hain. Garmi mein thoda better rehta hai kyunki natural moisture hoti hai aur mild sunlight bhi exposure hoti hai. Monsoon mein strep throat infections common hain – jo Guttate ka number one trigger hai. Isliye har season mein alag care strategy chahiye.',
    },
    {
      _key: 'faq19',
      question: 'Guttate Psoriasis ki Ayurvedic aur homeopathic treatment mein kya fark hai?',
      answer: 'Dono alternative systems hain lekin approach alag hai. Ayurveda mein dosha theory ke hisaab se treatment hoti hai – herbs, Panchakarma, diet protocols. Homeopathy mein highly diluted medicines use hoti hain jo patient ki poori mental aur physical picture ke hisaab se choose ki jaati hai – itching ki exact nature, kya cheez se behtar ya worse hota hai, patient ki personality tak. Guttate ke liye homeopathy ka ek advantage ye hai ki immune system ki overreaction specifically address hoti hai.',
    },
    {
      _key: 'faq20',
      question: 'Guttate Psoriasis mein chai pi sakte hain?',
      answer: 'Moderate chai (1-2 cups/day) zyada tar okay hoti hai. Zyada chai (3+ cups) mein caffeine skin dehydration badhata hai aur cortisol levels affect karta hai – jo indirect trigger hai. Tulsi, ginger wali herbal tea zyada faydemand hai is condition mein. Green tea mein anti-inflammatory antioxidants hain aur ye psoriasis patients ke liye better option hai regular chai ke mukable. Completely band karne ki zaroorat nahi – moderation mein rakho.',
    },
    {
      _key: 'faq21',
      question: 'Guttate Psoriasis ke scars permanently rehte hain kya?',
      answer: 'Achi khabar ye hai ki Guttate Psoriasis se permanent scars usually nahi bante. Jab daane theek hote hain to skin normal ya near-normal ho jaati hai – thodi post-inflammatory hyperpigmentation (skin ka thoda dark rehna) kuch hafte tak reh sakti hai lekin wo bhi gradually fade hoti hai. Jo patients daanon ko scratch karte hain unme secondary infection se temporary marks aa sakte hain. Proper moisturization aur sun protection treatment ke saath maintain karna post-lesion recovery speed badhata hai.',
    },
  ],

  sources: [
    { _key: 'src1', name: 'Indian Journal of Research in Homoeopathy – Homoeopathic management of Psoriasis', url: 'https://www.ijrh.org', year: '2019' },
    { _key: 'src2', name: 'National Psoriasis Foundation – Guttate Psoriasis overview', url: 'https://www.psoriasis.org/guttate/', year: '2024' },
    { _key: 'src3', name: 'British Association of Dermatologists – Psoriasis Patient Info', url: 'https://www.bad.org.uk', year: '2022' },
    { _key: 'src4', name: 'Lancet Global Burden of Disease Study – Psoriasis India Prevalence Data', url: 'https://www.thelancet.com', year: '2019' },
  ],

  relatedDiseases: [
    'Psoriasis',
    'Scalp Psoriasis',
    'Psoriatic Arthritis',
    'Eczema',
    'Tonsillitis',
  ],

  selfCheck: 'Agar strep throat ke 2-3 hafte baad poore body pe achanak chhote red daane aa jaayein – ye Guttate Psoriasis ho sakti hai. Homoeopath se jaldi milein.',
}

async function seed() {
  try {
    const result = await client.createOrReplace(doc)
    console.log('✅ Guttate Psoriasis created/updated:', result._id)
    console.log('🌐 Live at: https://homeopedia.in/diseases/guttate-psoriasis')
  } catch (err) {
    console.error('❌ Error:', err)
  }
}

seed()
