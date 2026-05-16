import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
})

async function seed() {
  console.log('🌱 Seeding Alopecia Areata diet chart...')

  const doc = {
    _id: 'diet-alopecia-areata',
    _type: 'diet',
    title: 'Alopecia Areata Diet',
    slug: { _type: 'slug', current: 'alopecia-areata' },
    disease: 'Alopecia Areata',
    diseaseHindi: 'Ganjapan / Tole wali Guddi',
    category: 'Skin',
    lastReviewed: 'May 2026',
    doctorName: 'Dr. Shadab Khan, MD Homoeopath',

    seoTitle: 'Alopecia Areata (Ganjapan) Diet – Kya Khayein Kya Nahi | Homeopedia',
    seoDescription: 'Alopecia Areata (Ganjapan) diet chart – green list, red list, daily meal plan, veg aur non-veg dono. Dr. Shadab Khan. Doctor-reviewed. Homeopedia.in',

    introLine1: 'Alopecia Areata ek autoimmune condition hai jisme immune system khud baalon ki jadon (hair follicles) pe attack karta hai – aur kuch khaane iss immune overreaction ko directly trigger ya calm kar sakte hain.',
    introLine2: 'Neeche complete guide hai – green list, red list, daily meal plan, veg aur non-veg dono options, aur vrat/travel jaise special situations.',

    habits: [
      { icon: '⏰', text: 'Subah khaali pet 1 glass gunguna paani piyo – gut lining theek rehti hai jo immune response ko regulate karti hai.' },
      { icon: '⏰', text: 'Roz ek zinc-rich ya iron-rich food zaroor lo – baal ke follicle ko yahi dono nutrients directly feed karte hain.' },
      { icon: '⏰', text: 'Raat ka khaana 7:30 baje tak kha lo – late khaana gut inflammation badhata hai jo autoimmune flare-up ko trigger karta hai.' },
    ],

    vegGreenList: [
      {
        category: 'Anaj / Grains',
        items: [
          { name: 'Daliya (oats/broken wheat)', reason: 'Selenium aur zinc dono milte hain – follicle health ke liye directly zaruri' },
          { name: 'Brown rice', reason: 'Gut-friendly complex carb – gut inflammation kam hoti hai jo AA mein trigger hai' },
          { name: 'Bajra roti', reason: 'Iron aur zinc rich – baal ke jadon ko nourish karta hai' },
          { name: 'Jowar roti', reason: 'Gluten-free option – AA mein kuch patients mein gluten sensitivity hoti hai' },
        ],
      },
      {
        category: 'Sabziyaan / Vegetables',
        items: [
          { name: 'Palak', reason: 'Iron aur folate dono – baal ke cells ke liye oxygen supply badhata hai' },
          { name: 'Methi (fenugreek leaves/seeds)', reason: 'Zinc aur protein dono – hair follicle repair mein kaam karta hai' },
          { name: 'Lauki', reason: 'Gut ki sujan kam karta hai jo immune overreaction ka ek source hoti hai' },
          { name: 'Gajar', reason: 'Beta-carotene – vitamin A – scalp ki sebum production sahi rakhta hai' },
          { name: 'Shimla mirch (lal)', reason: 'Vitamin C sabse zyada – iron absorption ke liye zaruri collagen production karta hai' },
        ],
      },
      {
        category: 'Phal / Fruits',
        items: [
          { name: 'Amla (fresh ya dry)', reason: 'Vitamin C mein sabse rich – collagen synthesis ke liye jo follicle ko structure deta hai' },
          { name: 'Seb (chila ke saath)', reason: 'Quercetin – scalp pe inflammatory cytokines kam karta hai' },
          { name: 'Papaya', reason: 'Vitamin A aur C dono – scalp ki dead skin hata ke follicle block nahi hone deta' },
          { name: 'Anaar', reason: 'Punicalagins – oxidative stress kam karta hai jo AA mein hair loss badhata hai' },
        ],
      },
      {
        category: 'Dal aur Protein',
        items: [
          { name: 'Moong dal (chhilke wali)', reason: 'Plant protein + zinc – follicle cells ke liye building block' },
          { name: 'Masoor dal', reason: 'Iron ka achha vegetarian source – baalon mein oxygen reach karne deti hai' },
          { name: 'Kala chana (boiled)', reason: 'Biotin aur zinc dono – ye dono directly follicle ke liye essential nutrients hain' },
          { name: 'Kaddu ke beej (pumpkin seeds)', reason: 'Zinc se bharpoor – AA patients mein zinc deficiency common hai' },
        ],
      },
      {
        category: 'Drinks, Masale aur Tel',
        items: [
          { name: 'Haldi + kali mirch wali chai (kadha)', reason: 'Curcumin immune overreaction dampen karta hai – kali mirch absorption 20x badhati hai' },
          { name: 'Adrak ka paani ya chai', reason: 'Gingerol scalp inflammation kam karta hai' },
          { name: 'Sarson ka tel', reason: 'Omega-3 – scalp pe immune calm karta hai (andar se bhi, bahar massage ke liye bhi)' },
          { name: 'Til (sesame seeds)', reason: 'Zinc + copper dono – baalon ke natural pigment (melanin) ke liye copper zaruri hai' },
          { name: 'Jeera + dhania ka paani (subah)', reason: 'Gut bacteria balance – gut-immune axis ke liye' },
        ],
      },
    ],

    nonVegAllowed: [
      { name: '2 ande (boiled)', reason: 'Biotin aur protein dono – follicle cells ke liye sabse direct nutrition' },
      { name: 'Surmai ya rohu fish (grilled/steamed)', reason: 'Omega-3 fatty acids – scalp pe immune inflammation kam karta hai' },
      { name: 'Chicken (boiled/grilled, bina skin)', reason: 'Lean protein + zinc – follicle ke liye amino acids provide karta hai' },
    ],

    nonVegAvoid: [
      { name: 'Mutton / red meat', reason: 'Arachidonic acid zyada – body mein inflammatory prostaglandins badhata hai jo AA ko trigger karta hai' },
      { name: 'Fried fish ya fried chicken', reason: 'Trans fat – scalp pe oxidative stress badhata hai aur immune dysfunction worsen karta hai' },
      { name: 'Processed chicken (sausage, salami, cold cuts)', reason: 'Preservatives + sodium – gut microbiome disturb karta hai' },
    ],

    redList: [
      {
        category: 'Processed aur Maida',
        items: [
          { name: 'Maida (bread, biscuit, noodles)', reason: 'Gut mein leaky gut badhata hai – AA mein ye ek main immune trigger hai' },
          { name: 'Packaged namkeen / chips', reason: 'Refined oil + salt + additives – gut barrier damage karte hain' },
          { name: 'White sugar-based sweets (mithai, cake)', reason: 'Blood sugar spike se immune dysregulation hota hai' },
        ],
      },
      {
        category: 'Dairy aur Heavy Foods',
        items: [
          { name: 'Packaged / set dahi (market wala)', reason: 'A1 casein protein – kuch AA patients mein dairy antibody response trigger karta hai [Ghar ka fresh dahi 1 katori allowed hai]' },
          { name: 'Full cream milk (zyada matra)', reason: 'IGF-1 level badhata hai jo immune inflammation worsen karta hai' },
          { name: 'Paneer (excess)', reason: 'Heavy dairy – jab inflammation zyada ho tab avoid karo' },
        ],
      },
      {
        category: 'Teekha, Meetha aur Oily',
        items: [
          { name: 'Bahut teekha khaana', reason: 'Gut lining irritate karta hai – intestinal permeability badhati hai jo immune trigger hai' },
          { name: 'Refined vegetable oil (sunflower, soybean)', reason: 'Omega-6 ka imbalance – scalp pe chronic inflammation badhata hai' },
          { name: 'Bahar ka fried khaana (pakoda, samosa, puri)', reason: 'Trans fat + maida combo – dono milke gut-immune axis bigadte hain' },
        ],
      },
      {
        category: 'Drinks',
        items: [
          { name: 'Chai (3+ cups daily)', reason: 'Tannins iron absorption block karte hain – AA patients mein iron deficiency bahut common hai [1 cup subah allowed hai]' },
          { name: 'Cold drinks / soda', reason: 'Phosphoric acid – mineral absorption block karta hai aur gut microbiome damage karta hai' },
          { name: 'Alcohol', reason: 'Liver pe load badhata hai – liver gut health maintain karta hai – dono connected hain AA mein' },
        ],
      },
    ],

    dailyMealPlan: [
      {
        slot: 'Subah Uthke (6–7 AM)',
        icon: '🌅',
        items: [
          'Gunguna paani + 1 chutki haldi + nimbu – gut lining protect karta hai',
          'Bheegi methi seeds (1 tsp raat ko bhigo ke) – zinc + gut probiotic effect',
        ],
      },
      {
        slot: 'Nashta (8–9 AM)',
        icon: '🍽️',
        items: [
          'Moong dal ka chilla (2 piece) + hari chutney – protein + zinc ek saath',
          'Daliya vegetables ke saath – selenium + fiber dono – immune ke liye',
          '[Non-veg: 2 boiled ande + 1 roti + hari chutney – biotin + protein direct follicle nutrition]',
        ],
      },
      {
        slot: 'Mid-Morning (11 AM)',
        icon: '☕',
        items: [
          '1 seasonal fruit – amla/seb/papaya mein se koi ek',
          'Bhuna kala chana (1 handful) – zinc ka convenient snack',
        ],
      },
      {
        slot: 'Dopahar (1–2 PM)',
        icon: '🌱',
        items: [
          '2 bajra roti + masoor dal + salad (gajar, shimla mirch) – iron + zinc combo',
          'Brown rice + moong chhilka dal + lauki ki sabzi – gut-friendly full meal',
          '[Non-veg: 2 jowar roti + grilled surmai fish + sabzi – omega-3 + protein]',
        ],
      },
      {
        slot: 'Shaam (4–5 PM)',
        icon: '🌿',
        items: [
          'Haldi-adrak wali kadha (1 cup) + kaddu ke beej (1 tsp)',
          'Til laddoo (ghar ka, without refined sugar) – zinc + copper dono',
        ],
      },
      {
        slot: 'Raat (7–7:30 PM)',
        icon: '🌙',
        items: [
          '2 roti + palak ki sabzi + ghar ka dahi (1 small katori) – iron + probiotic',
          'Khichdi (moong dal + brown rice + desi ghee) – light, gut-friendly',
          '[Non-veg: 1 roti + chicken soup (boiled, no cream) + sabzi – protein + zinc raat ko]',
        ],
      },
      {
        slot: 'Sone Se Pehle (9 PM)',
        icon: '😴',
        items: [
          'Warm haldi doodh (ghar ka, full cream nahi) – curcumin raat ko immune modulate karta hai',
          'Saunf ka warm paani – gut gas nahi hone deta jo raat mein inflammation trigger karta hai',
        ],
      },
    ],

    samplePlan4Day: [
      {
        day: 'Din 1 (Veg)',
        morning: 'Gunguna paani + nimbu',
        breakfast: 'Moong dal chilla + hari chutney',
        lunch: '2 bajra roti + masoor dal + gajar sabzi',
        evening: 'Kadha + kala chana',
        dinner: 'Palak khichdi + ghar ka dahi',
      },
      {
        day: 'Din 2 (Veg)',
        morning: 'Bheegi methi seeds',
        breakfast: 'Daliya with shimla mirch + tamatar',
        lunch: 'Brown rice + moong chhilka dal + lauki',
        evening: 'Seb + til seeds',
        dinner: '2 jowar roti + chana dal + salad',
      },
      {
        day: 'Din 3 (Veg)',
        morning: 'Haldi-nimbu gunguna paani',
        breakfast: 'Poha (no peanut) + amla chutney',
        lunch: '2 roti + arhar dal + methi ki sabzi',
        evening: 'Kadha + kaddu ke beej',
        dinner: 'Khichdi (moong + rice) + desi ghee',
      },
      {
        day: 'Din 4 (Veg)',
        morning: 'Jeera-dhania ka paani',
        breakfast: 'Bajra cheela + pudina chutney',
        lunch: 'Brown rice + masoor dal + palak sabzi',
        evening: 'Papaya + bhuna chana',
        dinner: '2 roti + moong chhilka dal + ghar ka dahi',
      },
      {
        day: 'Din 1 (Non-Veg)',
        morning: 'Gunguna paani + nimbu',
        breakfast: '2 boiled ande + 1 roti + hari chutney',
        lunch: '2 bajra roti + grilled surmai + gajar sabzi',
        evening: 'Kadha + kala chana',
        dinner: 'Chicken soup (boiled) + 1 roti + salad',
      },
      {
        day: 'Din 2 (Non-Veg)',
        morning: 'Bheegi methi seeds',
        breakfast: 'Daliya with vegetables',
        lunch: 'Brown rice + grilled rohu fish + lauki',
        evening: 'Seb + til seeds',
        dinner: '2 jowar roti + chana dal + salad',
      },
      {
        day: 'Din 3 (Non-Veg)',
        morning: 'Haldi-nimbu gunguna paani',
        breakfast: '2 boiled ande + daliya (light)',
        lunch: '2 roti + chicken (boiled) + methi ki sabzi',
        evening: 'Kadha + kaddu ke beej',
        dinner: 'Khichdi (moong + rice) + desi ghee',
      },
      {
        day: 'Din 4 (Non-Veg)',
        morning: 'Jeera-dhania ka paani',
        breakfast: 'Bajra cheela + pudina chutney',
        lunch: 'Brown rice + grilled surmai + palak sabzi',
        evening: 'Papaya + bhuna chana',
        dinner: '2 roti + chicken soup (thin, no cream) + dahi',
      },
    ],

    specialSituations: [
      {
        type: 'Flare-Up / Zyada Baal Girne Ka Phase',
        icon: '🔴',
        tips: [
          'Us hafte sirf moong dal khichdi, daliya, steamed sabziyan khao – gut pe zero load rakho',
          'Dairy, maida, fried sab temporarily band karo – chahe normally allowed ho',
          'Roz subah 1 tsp amla powder + gunguna paani lo – vitamin C se collagen production support hoti hai',
        ],
      },
      {
        type: 'Vrat / Fasting',
        icon: '🙏',
        tips: [
          'Sabudana khichdi (no fried) – zinc aur carb dono milte hain – AA mein theek hai',
          'Singhada (water chestnut) atta ka chilla ya roti – iron aur zinc ka vrat-friendly source',
          'Vrat mein aloo zyada mat khao – high glycemic – blood sugar spike immune dysregulation karta hai',
          'Agar AA ka flare chal raha ho – ekadashi vrat safe hai lekin nirjala fast avoid karo – dehydration se scalp inflammation badhti hai',
        ],
      },
      {
        type: 'Bahar Khana Ho (Restaurant / Dhaba)',
        icon: '🍽️',
        tips: [
          'Dal tadka (bina excess ghee) ya dal makhani (1 small bowl) order karo – protein + iron milti hai',
          'Roti (no butter, no maida naan) + sabzi – reliable option dhaba mein bhi',
          'Fried items – pakoda, puri, bhatura – poori tarah avoid karo – bahar ka tel trans fat wala hota hai',
          'Hack: Pehle 1 glass plain paani piyo – bahar khaane ke glycemic impact kam hoti hai',
        ],
      },
      {
        type: 'Travel Mein',
        icon: '✈️',
        tips: [
          'Carry karo: bhuna chana + til ke beej + dry amla – teen mein se koi bhi ek handful – portable zinc + vitamin C',
          'Train/bus mein: boiled ande (agar non-veg) ya dry roasted makhana – dono gut-friendly hain',
          'Hotel mein: plain dal + roti ya boiled rice + dahi order karo – simplest, safest option',
        ],
      },
    ],

    proTip: 'Khaana khane ke turant baad chai mat piyo – khaane ke 45–60 minute baad piyo. Chai ka tannin iron absorption block karta hai, aur AA patients mein iron deficiency baalon ke girne ka ek direct reason hai. Ye ek chhota sa change hai lekin iron status pe clearly fark padta hai.',

    importantNote: 'Ye chart ek general guide hai – Alopecia Areata ki severity, triggers, aur nutritional needs har patient mein alag hoti hain. Apni exact condition ke hisaab se apne homoeopath ya dermatologist se personalized plan zaroor banwayein.',

    homeopathyNote: 'Jab diet sahi hoti hai – especially zinc, iron aur vitamin C intake regular ho – toh homeopathic medicines follicle-level inflammation pe faster aur deeper kaam karti hain. Dono ek saath chalao – ek doosre ko replace nahi karte.',

    faqs: [
      {
        question: 'Alopecia Areata mein dahi kha sakte hain?',
        answer: 'Haan – ghar ka fresh bana dahi (1 small katori) allowed hai.\nPackaged ya set dahi (market wala) avoid karo.\nFresh dahi mein A1 casein load kam hota hai – aur probiotic bacteria gut health ke liye helpful hai.\nGut health aur immune system directly linked hain AA mein.\nMarket wala dahi mein preservatives aur heavy casein hoti hai jo kuch patients mein immune trigger banta hai.',
      },
      {
        question: 'Alopecia Areata mein anda (egg) kha sakte hain?',
        answer: 'Haan – boiled ande ek bahut acha option hain AA mein.\nAnde mein biotin, zinc aur complete protein – teeno follicle ke liye directly zaruri hain.\nFried anda (oil mein) avoid karo – cooking method matter karta hai.\nAgar koi allergy nahi hai toh roz 1–2 boiled ande lene se baalon ki health pe positive fark aata hai.',
      },
      {
        question: 'Diet se Alopecia Areata mein kitne din mein fark dikhta hai?',
        answer: 'Realistic answer: 3–4 mahine continuous diet changes se clearly fark dikhna shuru hota hai.\nBaal ka ek growth cycle hi 2–3 mahine ka hota hai – isliye jaldi result expect mat karo.\nPehle mahine mein girna kam ho sakta hai – ye pehla positive sign hai.\nDiet akele complete treatment nahi hai – homeopathic medicines ke saath combo mein asar zyada hota hai.\nApne doctor se 3 mahine baad progress review karwao.',
      },
      {
        question: 'Alopecia Areata mein chai aur coffee allowed hai?',
        answer: '1 cup subah wali adrak chai – allowed hai.\n3+ cups chai daily – avoid karo – tannin iron absorption 50–60% tak block kar deta hai.\nCoffee – 1 cup allowed hai – lekin khaali pet bilkul nahi.\nChai ya coffee khaane ke 45–60 minute baad piyo – kabhi bhi khaane ke saath nahi.\nAA patients mein iron deficiency bahut common hai – aur chai is deficiency ko aur badhati hai.',
      },
      {
        question: 'Alopecia Areata mein vrat/fast kar sakte hain?',
        answer: 'Haan – weekly ek vrat karna generally theek hai AA mein.\nSabudana khichdi (boiled, no fry), singhade ka atta, makhana – safe vrat options hain.\nNirjala vrat (bina paani) – avoid karo agar AA active phase mein hai – dehydration scalp inflammation badhati hai.\nVrat ke din zyada aloo mat khao – high glycemic foods blood sugar spike karte hain jo immune dysregulation trigger karta hai.\nVrat ke turant baad heavy meal mat lo – gut pe sudden load se immune flare hota hai.',
      },
      {
        question: 'Alopecia Areata mein non-veg khana chahiye ya band karna padega?',
        answer: 'Band karne ki zaroorat nahi – lekin sahi choice karni padegi.\nBoiled/grilled chicken, surmai ya rohu fish (grilled), aur boiled ande – ye sab allowed hain.\nYe protein aur zinc ka achha source hain – jo AA mein directly follicle ko feed karte hain.\nMutton/red meat, fried non-veg, processed meat (sausage, salami) – ye avoid karo.\nRed meat mein arachidonic acid zyada hota hai jo body mein inflammatory prostaglandins badhata hai – AA ka direct trigger hai.',
      },
      {
        question: 'Kya chawal (rice) Alopecia Areata mein allowed hai?',
        answer: 'Haan – brown rice roz allowed hai.\nWhite rice bhi allowed hai – lekin brown rice better hai kyunki glycemic index kam hota hai aur selenium milta hai.\nZyada plain white rice + refined dal ka combination roz mat khao – variety rakho.\nRice ke saath dal zaroor khao – protein + carb combo blood sugar stable rakhta hai jo immune ke liye zaroori hai.',
      },
      {
        question: 'Alopecia Areata mein konsa tel use karein?',
        answer: 'Sarson ka tel ya til ka tel – dono best options hain khane ke liye.\nSarson ke tel mein omega-3 aur anti-inflammatory compounds hote hain – scalp ke liye andar se bhi bahar se bhi.\nRefined vegetable oil (sunflower, soybean) – avoid karo – omega-6 ka imbalance chronic inflammation badhata hai.\nDesi ghee – chhoti matra mein bilkul theek hai – gut lining ke liye beneficial hai.\nDalda / vanaspati – poori tarah avoid karo – trans fat AA ke liye worst option hai.',
      },
      {
        question: 'Late raat khaana AA mein kitna matter karta hai?',
        answer: 'Bahut zyada matter karta hai – ye ek underrated trigger hai.\nRaat 9–10 baje heavy khaana – gut mein aadha raat tak digestion chalta hai – gut inflammation badhti hai.\nGut-immune axis directly connected hai AA mein – gut disturb = immune overreaction = follicle attack.\n7:30 baje tak dinner khatam karo – iska fark 4–6 hafte mein mahsoos hota hai.\nAgar bhookh lage toh warm haldi doodh ya saunf ka paani le sakte ho.',
      },
      {
        question: 'Homeopathic medicine ke saath koi khaana band karna padega?',
        answer: 'Kuch specific restrictions hote hain – lekin har medicine aur har doctor ke approach ke hisaab se alag hoti hai.\nCommon advice: coffee, raw onion, raw garlic – kuch homoeopaths avoid karne ko kehte hain – antidote effect ke liye.\nStrong smell wale foods jaise asafoetida (heeng) – kuch medicines ke saath problematic ho sakti hai.\nApne doctor se specifically poochho ki aapki prescribed medicine ke saath kya avoid karna hai – generalize mat karo.\nYe restrictions sirf medicine ke saath hain – puri diet restrict nahi hoti.',
      },
      {
        question: 'Alopecia Areata mein amla kitna faydemand hai?',
        answer: 'Bahut faydemand – AA patients ke liye amla ek top food hai.\nAmla mein vitamin C sabse zyada hoti hai – collagen synthesis ke liye jo hair follicle ki structure banata hai.\nAmla antioxidant bhi hai – oxidative stress kam karta hai jo AA mein follicle damage ka ek reason hai.\nRoz 1 fresh amla ya 1 tsp dry amla powder + gunguna paani – subah khaali pet best time hai.\nPackaged amla candy ya achaar mein sugar aur salt zyada – wo form avoid karo.',
      },
    ],

    sources: [
      {
        author: 'Diotallevi F et al.',
        title: 'The Role of Nutrition in Immune-Mediated, Inflammatory Skin Disease: A Narrative Review',
        journal: 'Nutrients',
        year: '2022',
        pmid: '35276950',
        doi: '10.3390/nu14030591',
      },
      {
        author: 'Touil H et al.',
        title: 'Differential impact of environmental factors on systemic and localized autoimmunity',
        journal: 'Frontiers in Immunology',
        year: '2023',
        pmid: '37283765',
        doi: '10.3389/fimmu.2023.1147447',
      },
      {
        author: 'Sharma N et al.',
        title: 'Dietary Influences on Skin Health in Common Dermatological Disorders',
        journal: 'Cureus',
        year: '2024',
        pmid: '38562266',
        doi: '10.7759/cureus.55282',
      },
      {
        author: 'ICMR-NIN',
        title: 'Dietary Guidelines for Indians',
        journal: 'National Institute of Nutrition',
        year: '2024',
        url: 'https://www.nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf',
      },
    ],

    quickFacts: [
      {
        label: 'Sabse common diet mistake Alopecia Areata mein',
        value: 'Khaane ke saath ya baad mein turant chai peena – tannin iron absorption block karta hai aur AA mein iron deficiency baalon ke girne ka direct trigger hai.',
      },
      {
        label: 'Ek food jo zaroor khaana chahiye',
        value: 'Amla (fresh ya dry) – vitamin C + antioxidant combo – follicle collagen aur oxidative stress dono address karta hai.',
      },
      {
        label: 'Ek food jo bilkul avoid karein',
        value: 'Maida (refined flour) – gut mein leaky gut badhata hai jo immune system ko overactive karta hai – aur AA ek immune-driven disease hai.',
      },
    ],

    doctorNote: 'Mere Alopecia Areata patients mein maine notice kiya hai ki jo log maida aur packaged dairy dono ek saath chodh dete hain – unka baal girna clearly stabilize hota hai treatment ke saath, akele ek chodh ke nahi. Ek saath dono chodh na – ye sab milke gut-immune axis pe kaam karte hain.',

    shareTexts: [
      'Alopecia Areata (Ganjapan) mein kya khayein, kya nahi – complete list: homeopedia.in/alopecia-areata-diet-chart',
      'Alopecia Areata ke liye 4-din ka Indian diet plan: homeopedia.in/alopecia-areata-diet-chart',
      'Alopecia Areata Diet Guide – green list, meal plan, special situations sab: homeopedia.in/alopecia-areata-diet-chart',
    ],
  }

  await client.createOrReplace(doc)
  console.log('✅ Alopecia Areata diet chart seeded — homeopedia.in/diet/alopecia-areata')
}

seed().catch(console.error)
