import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'diet-fatty-liver',
  _type: 'diet',
  title: 'Fatty Liver Diet Chart',
  hindiName: 'Chaabi wala Jigar / Vasa Jigar',
  slug: { _type: 'slug', current: 'fatty-liver' },
  relatedDiseaseSlug: 'fatty-liver',
  category: 'Digestive',
  metaTitle: 'Fatty Liver Diet — Kya Khayein Kya Nahi | Homeopedia',
  metaDescription: 'Fatty liver (Chaabi wala Jigar) diet chart — green list, red list, daily meal plan, veg aur non-veg dono options. Dr. Shadab Khan. Doctor-reviewed. Homeopedia.in',
  intro: 'Fatty liver mein liver cells mein extra fat jama ho jaata hai — aur galat khaana ye fat aur zyada badhata hai, liver enzymes (ALT/AST) ko disturb karta hai.\n\nNeeche complete guide hai — green list, red list, daily meal plan, veg/non-veg dono options, aur vrat/travel/flare-up jaise special situations.',

  eatingHabits: [
    { _key: 'eh1', habit: 'Raat 7 baje ke baad khaana band karo', reason: 'raat ko liver fat metabolism ka kaam karta hai, late khaane se ye process interrupt hoti hai' },
    { _key: 'eh2', habit: 'Din mein 8-10 glass paani piyo', reason: 'liver toxins bahar nikalne ke liye hydration zaroori hai — fatty liver mein ye aur important ho jaata hai' },
    { _key: 'eh3', habit: 'Khaana slowly chabo', reason: 'fast eating se zyada calories jaati hain notice kiye bina — fatty liver mein calorie load directly liver fat badhata hai' },
  ],

  vegGreenList: [
    {
      _key: 'vgl1',
      categoryName: 'Anaj / Grains',
      emoji: '🌾',
      items: [
        { _key: 'i1', food: 'Jowar ki roti', reason: 'refined carb nahi, liver pe glycemic load kam karta hai jo fat accumulation slow karta hai' },
        { _key: 'i2', food: 'Bajra roti', reason: 'fiber se bhari, bile acid recirculation badhata hai jo liver fat kam karne mein help karta hai' },
        { _key: 'i3', food: 'Brown rice (kam quantity)', reason: 'white rice se kam glycemic index, liver mein fat conversion slower hoti hai' },
        { _key: 'i4', food: 'Daliya (bina sugar)', reason: 'beta-glucan gut bacteria ke liye acha hai — fatty liver mein gut-liver axis important hai' },
        { _key: 'i5', food: 'Oats (regular, not instant)', reason: 'soluble fiber LDL kam karta hai jo fatty liver ke saath aksar elevated hota hai' },
      ],
    },
    {
      _key: 'vgl2',
      categoryName: 'Sabziyaan / Vegetables',
      emoji: '🥦',
      items: [
        { _key: 'i6', food: 'Karela', reason: 'bitter compounds (charantin) liver enzymes ko normalize karte hain — NAFLD mein specifically studied hai' },
        { _key: 'i7', food: 'Lauki', reason: 'low calorie, high water — liver pe load bilkul nahi, easily digest hoti hai' },
        { _key: 'i8', food: 'Palak', reason: 'folate aur antioxidants liver inflammation (hepatic oxidative stress) kam karte hain' },
        { _key: 'i9', food: 'Broccoli', reason: 'sulforaphane compound liver mein fat deposit rokta hai — NAFLD studies mein support milta hai' },
        { _key: 'i10', food: 'Bhindi', reason: 'soluble fiber bile production support karta hai jo liver ki fat processing mein help karta hai' },
        { _key: 'i11', food: 'Gajar', reason: 'beta-carotene liver cells ko oxidative damage se bachata hai' },
      ],
    },
    {
      _key: 'vgl3',
      categoryName: 'Phal / Fruits',
      emoji: '🍎',
      items: [
        { _key: 'i12', food: 'Amla (fresh ya dry)', reason: 'vitamin C aur tannins liver cells ki protection karte hain — Indian NAFLD patients ke liye especially relevant' },
        { _key: 'i13', food: 'Papaya (fresh)', reason: 'papain enzyme digestion improve karta hai, liver pe enzyme load kam karta hai' },
        { _key: 'i14', food: 'Seb (with skin)', reason: 'quercetin liver inflammation kam karta hai, pectin fiber liver fat clearance mein help karta hai' },
        { _key: 'i15', food: 'Jamun (seasonal)', reason: 'anthocyanins liver cells ki lipid peroxidation rokti hain' },
        { _key: 'i16', food: 'Anar (pomegranate)', reason: 'punicalagins liver fibrosis ke progression ko slow karne mein research-backed hain' },
      ],
    },
    {
      _key: 'vgl4',
      categoryName: 'Dal aur Protein',
      emoji: '🫘',
      items: [
        { _key: 'i17', food: 'Moong dal (chilke wali)', reason: 'plant protein liver pe minimum load, easily digest, ammonia production kam' },
        { _key: 'i18', food: 'Masoor dal', reason: 'lean protein + iron jo liver cell repair mein help karta hai' },
        { _key: 'i19', food: 'Chane (boiled/bhuney)', reason: 'resistant starch gut bacteria feed karta hai jo liver ko inflammatory signals kam bhejta hai' },
        { _key: 'i20', food: 'Tofu (ghar ka plain)', reason: 'soy protein fatty liver pe neutral ya beneficial — processed soy nahi, plain tofu theek hai' },
      ],
    },
    {
      _key: 'vgl5',
      categoryName: 'Drinks, Masale aur Tel',
      emoji: '🫖',
      items: [
        { _key: 'i21', food: 'Green tea (bina sugar, 1-2 cups)', reason: 'catechins liver fat reduce karne mein studied hain NAFLD mein specifically' },
        { _key: 'i22', food: 'Haldi + kali mirch', reason: 'curcumin liver inflammation kam karta hai — kali mirch ka piperine curcumin absorption 20x badhata hai — combination zaroori hai' },
        { _key: 'i23', food: 'Jeera', reason: 'bitter compounds bile flow improve karte hain jo liver ki fat digestion mein seedha help karta hai' },
        { _key: 'i24', food: 'Adrak', reason: 'gingerols liver steatosis (fat accumulation) reduce karne mein evidence-backed hain' },
        { _key: 'i25', food: 'Sarson ka tel ya olive oil (thoda, cooking ke liye)', reason: 'monounsaturated fats liver ki fat composition improve karte hain NAFLD mein' },
      ],
    },
  ],

  nonVegAllowed: [
    { _key: 'nva1', food: 'Rohu / Katla fish (boiled ya grilled)', reason: 'omega-3 fatty acids liver mein triglycerides kam karte hain' },
    { _key: 'nva2', food: 'Surmai / Pomfret (steamed)', reason: 'lean protein, omega-3 — fatty liver mein liver fat reduce karne mein studied' },
    { _key: 'nva3', food: 'Anda (2 boiled)', reason: 'choline ka achha source — choline deficiency fatty liver ka ek known cause hai, eggs se compensate hota hai' },
    { _key: 'nva4', food: 'Chicken breast (boiled/grilled, no skin)', reason: 'lean protein liver repair ke liye — fat accumulation nahi badhata' },
  ],

  nonVegAvoid: [
    { _key: 'nvav1', food: 'Fried fish / Fish pakoda', reason: 'frying se trans fat banta hai jo liver mein fat aur zyada badhata hai' },
    { _key: 'nvav2', food: 'Chicken fry / market wala tandoori (excess oil)', reason: 'cooking method liver pe directly burden dalta hai' },
    { _key: 'nvav3', food: 'Mutton / Red meat', reason: 'saturated fat liver fat accumulation ko significantly badhata hai NAFLD mein' },
    { _key: 'nvav4', food: 'Processed meat (sausage, salami, packaged chicken)', reason: 'preservatives aur sodium liver enzymes disturb karte hain' },
  ],

  redList: [
    {
      _key: 'rl1',
      categoryName: 'Processed aur Maida',
      emoji: '🚫',
      items: [
        { _key: 'ri1', food: 'Maida (bread, biscuit, pav, noodles)', reason: 'refined carb liver mein directly fat mein convert hota hai — de novo lipogenesis ka main driver hai fatty liver mein' },
        { _key: 'ri2', food: 'White bread / Pav', reason: 'high glycemic index liver ko fat store karne ka signal deta hai baar baar' },
        { _key: 'ri3', food: 'Instant noodles / Maggi', reason: 'maida + high sodium + preservatives — liver enzymes teen cheezein ek saath disturb' },
        { _key: 'ri4', food: 'Biscuits (even "digestive")', reason: 'maida + sugar combination — packaging pe "healthy" likha hone se fark nahi padta' },
      ],
    },
    {
      _key: 'rl2',
      categoryName: 'Dairy aur Heavy Foods',
      emoji: '🚫',
      items: [
        { _key: 'ri5', food: 'Full fat paneer (zyada quantity)', reason: 'saturated fat liver mein fat deposit badhata hai — ghar ka thoda allowed hai, packaged ya heavy nahi' },
        { _key: 'ri6', food: 'Cream / Malai', reason: 'saturated fat directly liver lipid profile worsen karta hai' },
        { _key: 'ri7', food: 'Ice cream', reason: 'sugar + saturated fat — dono liver ke liye worst combination hain NAFLD mein' },
      ],
    },
    {
      _key: 'rl3',
      categoryName: 'Teekha, Meetha aur Oily',
      emoji: '🚫',
      items: [
        { _key: 'ri8', food: 'Refined sugar', reason: 'fructose se liver mein fat conversion sabse fast hoti hai — fatty liver ka #1 dietary driver hai' },
        { _key: 'ri9', food: 'Packaged fruit juice / Cola / Cold drinks', reason: 'liquid fructose liver mein solid food se bhi faster fat banata hai' },
        { _key: 'ri10', food: 'Mithai (barfi, gulab jamun, halwa)', reason: 'sugar + ghee/fat combination liver fat rapidly badhata hai' },
        { _key: 'ri11', food: 'Deep fried khaana (samosa, kachori, pakoda)', reason: 'trans fat + calorie excess — liver pe double burden' },
        { _key: 'ri12', food: 'Baazaar ka namkeen (chips, mixtures)', reason: 'refined oil + maida + excess salt — liver metabolism disturb karta hai' },
      ],
    },
    {
      _key: 'rl4',
      categoryName: 'Drinks',
      emoji: '🚫',
      items: [
        { _key: 'ri13', food: 'Alcohol (kisi bhi form mein)', reason: 'fatty liver mein ALCOHOL BILKUL NAHI — directly liver cells ko damage karta hai, NAFLD ko AFLD mein convert kar sakta hai' },
        { _key: 'ri14', food: 'Packaged fruit juices', reason: '"natural" labels ke bawajood concentrated fructose liver pe load dalta hai' },
        { _key: 'ri15', food: 'Soft drinks / Cold drinks', reason: 'high fructose corn syrup liver fat badhane ka fastest route hai' },
        { _key: 'ri16', food: 'Full fat doodh (zyada quantity, roz)', reason: 'saturated fat load liver ko de novo lipogenesis mein push karta hai — ek glass toned doodh allowed hai' },
      ],
    },
  ],

  dailyMealPlan: [
    { _key: 'dmp1', slotName: 'Subah Uthke', slotTime: '6-7 AM', slotEmoji: '🌅', vegOptions: ['1 glass lukewarm paani + nimbu (bina sugar)', 'Bheegi methi seeds 1 tsp — bitter compounds bile production seedha stimulate karte hain'], nonVegOption: '' },
    { _key: 'dmp2', slotName: 'Nashta', slotTime: '8-9 AM', slotEmoji: '🍽️', vegOptions: ['Moong dal chilla (2) + hari chutney', 'Daliya (vegetables ke saath, bina sugar)'], nonVegOption: '2 boiled ande + 1 jowar roti' },
    { _key: 'dmp3', slotName: 'Mid-Morning', slotTime: '11 AM', slotEmoji: '☀️', vegOptions: ['1 seasonal fruit (seb / papaya / jamun)', 'Bhuney chane (small handful)'], nonVegOption: '' },
    { _key: 'dmp4', slotName: 'Dopahar', slotTime: '1-2 PM', slotEmoji: '🍱', vegOptions: ['2 jowar/bajra roti + moong dal + lauki sabzi', 'Brown rice (1 katori) + masoor dal + palak sabzi'], nonVegOption: 'Grilled fish (rohu/katla) + 1 roti + salad' },
    { _key: 'dmp5', slotName: 'Shaam', slotTime: '4-5 PM', slotEmoji: '🌇', vegOptions: ['Green tea (bina sugar) + 4-5 akhrot', 'Amla (fresh ya candy bina sugar) + 1 glass nimbu paani'], nonVegOption: '' },
    { _key: 'dmp6', slotName: 'Raat', slotTime: '7-8 PM', slotEmoji: '🌙', vegOptions: ['1-2 roti + karela/bhindi sabzi + dal', 'Khichdi (moong dal + brown rice + haldi) + ghee (1 tsp only)'], nonVegOption: 'Chicken soup (no cream, boiled) + 1 roti + sabzi' },
    { _key: 'dmp7', slotName: 'Sone Se Pehle', slotTime: '9 PM', slotEmoji: '😴', vegOptions: ['Warm haldi doodh (toned milk, bina sugar, chutki bhar kali mirch)', '1 glass warm paani — raat ke liver detoxification ke liye hydration important hai'], nonVegOption: '' },
  ],

  samplePlan4Day: [
    {
      _key: 'sp1',
      day: 'Din 1',
      vegSubah: 'Lukewarm nimbu paani',
      vegNashta: 'Daliya + mix veg',
      vegDopahar: 'Jowar roti + moong dal + lauki sabzi',
      vegShaam: 'Seb + green tea',
      vegRaat: 'Khichdi (moong dal) + haldi + ghee (1 tsp)',
      nonVegNashta: '2 boiled ande + 1 jowar roti',
      nonVegDopahar: 'Grilled rohu fish + roti + salad',
      nonVegRaat: 'Chicken soup (boiled) + 1 roti + sabzi',
    },
    {
      _key: 'sp2',
      day: 'Din 2',
      vegSubah: 'Bheegi methi seeds',
      vegNashta: 'Poha (oil kam, vegetables zyada)',
      vegDopahar: 'Brown rice + masoor dal + palak sabzi',
      vegShaam: 'Bhuney chane',
      vegRaat: 'Bajra roti + bhindi sabzi + dal',
      nonVegNashta: 'Egg white omelette (no butter) + daliya',
      nonVegDopahar: 'Steamed surmai + brown rice + dal',
      nonVegRaat: 'Boiled chicken breast + khichdi',
    },
    {
      _key: 'sp3',
      day: 'Din 3',
      vegSubah: 'Lukewarm paani + adrak piece',
      vegNashta: 'Moong dal chilla + green chutney',
      vegDopahar: 'Jowar roti + arhar dal + gajar sabzi',
      vegShaam: 'Papaya + nimbu paani',
      vegRaat: 'Khichdi (masoor) + lauki sabzi',
      nonVegNashta: '2 boiled ande + poha',
      nonVegDopahar: 'Grilled katla + jowar roti + sabzi',
      nonVegRaat: 'Fish soup + 1 roti + bhindi',
    },
    {
      _key: 'sp4',
      day: 'Din 4',
      vegSubah: 'Bheegi methi seeds',
      vegNashta: 'Oats (savory, vegetables ke saath)',
      vegDopahar: 'Brown rice + chana dal + karela sabzi',
      vegShaam: 'Amla + akhrot 4-5',
      vegRaat: 'Bajra roti + palak sabzi + moong dal',
      nonVegNashta: 'Egg daliya (1 egg, savory)',
      nonVegDopahar: 'Boiled chicken breast + brown rice + salad',
      nonVegRaat: 'Chicken clear soup + bajra roti',
    },
  ],

  specialSituations: [
    {
      _key: 'ss1',
      situationType: 'flareUp',
      title: 'Liver Enzymes Zyada Ho Tab (ALT/AST high report)',
      emoji: '😣',
      tips: [
        'Us din sirf khichdi (moong + haldi), daliya, ya lauki soup — liver pe minimum processing load',
        'Koi bhi fat ya oil avoid karo us din — ghee bhi nahi',
        'Paani zyada piyo — 10-12 glass — liver ki natural detox process support hoti hai',
      ],
    },
    {
      _key: 'ss2',
      situationType: 'fasting',
      title: 'Vrat / Fasting',
      emoji: '🙏',
      tips: [
        'Sabudana khichdi (oil kam, peanuts thode) — acceptable hai lekin sabudana high starch hai — portion control karo',
        'Kuttu ki roti ya singhara atta — refined maida se better hai vrat mein',
        'Fruit (apple, papaya) + nimbu paani — safe vrat options',
        'Avoid karo: sabudana vada (fried), aloo chips (fried), mithai — ye sabse common vrat mistakes hain fatty liver mein',
        'Fatty liver mein long fasting (nirjala) avoid karo — prolonged fasting liver mein fat mobilization badhata hai jo already diseased liver ke liye risky ho sakta hai — doctor se poochho pehle',
      ],
    },
    {
      _key: 'ss3',
      situationType: 'eatingOut',
      title: 'Bahar Khana Ho (Restaurant / Dhaba)',
      emoji: '🍽️',
      tips: [
        'Dal tadka + roti order karo — most dhabas mein available, relatively clean option hai',
        'Steamed rice + dal — fried rice avoid karo, steamed better hai',
        'Salad zaroor maango — fiber diluted glycemic response karta hai',
        'Avoid karo: any fried item, paneer butter masala (cream-heavy), biryani, cold drinks with meal',
        'Hack: Roti maango phulka style — "butter/ghee oopar se mat lagao" specifically bolke order karo',
      ],
    },
    {
      _key: 'ss4',
      situationType: 'travel',
      title: 'Travel Mein',
      emoji: '✈️',
      tips: [
        'Carry karo: bhuney chane, akhrot, amla candy (bina sugar), plain oats packet — ye liver-safe snacks hain',
        'Train/hotel mein: dal chawal ya dal roti order karo — simple, available, sabse safe option',
        'Packaged food avoid karo — travel mein branded "healthy" snacks bhi maida + sugar se bhari hoti hain',
      ],
    },
  ],

  proTip: 'Fatty liver ke patients mein maine notice kiya hai ki jo log subah uthke sabse pehle 1-2 glass paani peete hain aur 30 minute tak kuch nahi khaate — unka liver enzyme response treatment ke saath clearly better aata hai. Ye simple timing shift liver ke raat bhar ke detox cycle ko complete hone deti hai.',
  importantNote: 'Ye chart ek general guide hai — fatty liver ki severity (Grade 1, 2 ya 3) ke hisaab se aapka plan alag ho sakta hai. Apne homoeopath ya doctor se apni latest liver function test report ke saath personalized plan banwayein.',
  homeopathyDiet: 'Fatty liver mein sahi diet liver pe extra fat ka input rokti hai — aur tab homeopathic medicines liver cells ki healing aur enzyme normalization pe focus kar sakti hain. Dono saath hoon to treatment response clearly better hota hai.',

  faqs: [
    {
      _key: 'faq1',
      question: 'Fatty liver mein chawal khana theek hai ya band karna padega?',
      answer: 'Chawal bilkul band karne ki zaroorat nahi — lekin quantity aur type matter karta hai.\nBrown rice ya par-boiled rice better hai — white rice se glycemic index kam hota hai.\nEk katori (cooked) dopahar mein — yahi safe limit hai.\nRaat ko chawal avoid karo — raat ko liver fat metabolism karta hai aur high carb disturb karta hai.\nPoha ya daliya nashte mein chawal se better options hain.',
    },
    {
      _key: 'faq2',
      question: 'Fatty liver mein aam, kela, aur meethe phal khaye ja sakte hain?',
      answer: 'Aam aur kela restricted karo — high fructose fruits hain.\nEk small piece occasional theek hai lekin daily nahi.\nFresh anar, jamun, seb, papaya — better options hain fatty liver ke liye.\nPackaged fruit juice bilkul nahi — even "real fruit" — liquid fructose liver mein solid fruit se faster fat banata hai.\nSeasonal fruit mein jamun best choice hai fatty liver mein.',
    },
    {
      _key: 'faq3',
      question: 'Diet se fatty liver mein kitne time mein fark dikhta hai?',
      answer: 'Liver function tests (ALT/AST) diet change ke 4-8 hafte mein improve hone lagte hain agar diet strictly follow ki jaaye.\nUltrasound pe visible fat reduction mein 3-6 mahine lagte hain.\nYe timeline depend karta hai — Grade 1, 2, ya 3 pe, aur koi aur conditions (diabetes, thyroid) hain to nahi.\nDiet + homeopathic treatment + walk (30 min daily) — teeno saath mile toh response faster hota hai.\nConsistency socho — ek hafte mein fark nahi dikhta, 3 mahine mein dikhta hai.',
    },
    {
      _key: 'faq4',
      question: 'Fatty liver mein chai aur coffee peena chahiye ya nahi?',
      answer: 'Coffee (black, bina sugar — 1-2 cups) — research mein NAFLD mein beneficial paya gaya hai — liver enzymes kam karne mein help karta hai.\nGhar ki regular chai — limited (1-2 cups), bina zyada sugar.\nGreen tea (bina sugar) — fatty liver ke liye best drink option hai — catechins liver fat pe directly kaam karte hain.\nKya avoid karein: 3+ cups chai din mein, milk + sugar heavy chai, cold coffee (sugar + cream loaded hoti hai).\nSoft drinks, packaged juice — bilkul nahi.',
    },
    {
      _key: 'faq5',
      question: 'Fatty liver mein vrat ya intermittent fasting safe hai?',
      answer: 'Short vrat (ekadashi, somvar vrat) — safe hain lekin vrat mein fried sabudana vada, chips avoid karo.\nIntermittent fasting (16:8 pattern) — kuch research mein NAFLD ke liye beneficial bataya gaya hai — lekin doctor se baat karo pehle agar diabetes ya koi aur condition bhi hai.\nNirjala (complete fast, no water) — avoid karo fatty liver mein — prolonged fasting liver mein fat rapidly mobilize karta hai jo already diseased liver ke liye risky hai.\nVrat mein safe options: kuttu roti, fresh fruit, nimbu paani, nuts — ye liver-friendly hain.',
    },
    {
      _key: 'faq6',
      question: 'Raat ko doodh peena fatty liver mein sahi hai?',
      answer: 'Ghar ka ek glass toned doodh (low fat) raat ko — theek hai.\nFull fat doodh ya packaged cream milk daily — avoid karo, saturated fat liver fat badhata hai.\nDoodh mein sugar mat dalo — yahi sabse common galti hai.\nHaldi doodh (chutki bhar haldi + kali mirch) — ye actually beneficial hai fatty liver mein — curcumin liver pe kaam karta hai.\nAgar dahi khaate ho — ghar ka fresh bana dahi (1 small katori) allowed hai — packaged set dahi avoid karo.',
    },
    {
      _key: 'faq7',
      question: 'Homeopathic medicine ke saath koi khaana band karna padta hai?',
      answer: 'Haan — kuch specific restrictions hoti hain, but ye medicine-specific hain, sabke liye same nahi.\nGenerally strong smell wali cheezein (raw lahsun, raw pyaz zyada) aur coffee kuch homeopathic medicines ki potency ko affect kar sakti hain — apne doctor se poochho.\nFatty liver mein alcohol bilkul band karna zaroori hai — ye diet restriction nahi, medical necessity hai.\nTiming important hai — khana aur medicine ke beech 30 minute ka gap rakhna better hota hai.\nApne specific medicines ke baare mein apne doctor se seedha poochho — generalize mat karo.',
    },
    {
      _key: 'faq8',
      question: 'Fatty liver mein non-veg khana chahiye ya band karna padega?',
      answer: 'Band karna zaroori nahi — lekin type aur cooking method bahut matter karta hai.\nSafe hai: boiled/grilled fish (rohu, katla, surmai), boiled ande, boiled/grilled chicken breast.\nAvoid karo: red meat (mutton, beef), fried non-veg, processed meat (sausage, salami).\nAnda (boiled, 2 per day) — actually beneficial hai fatty liver mein — choline provide karta hai jo liver fat metabolism ke liye zaroori hai.\nFish omega-3 fatty liver ke liye research-backed benefit deta hai — week mein 3-4 baar grilled fish best option hai.',
    },
    {
      _key: 'faq9',
      question: 'Fatty liver mein ghee bilkul band karna padega?',
      answer: 'Ghee bilkul band nahi karna — lekin zyada bhi nahi.\n1 tsp (chutki bhar) khane mein — yahi appropriate hai.\nGhee desi hona chahiye — ghar ka ya cow ghee — not dalda ya vanaspati jo hydrogenated fat hai aur liver ke liye actually harmful hai.\nRoti pe ghee laga ke khana — jo quantity ek roti pe rehti hai wo fine hai — bowl mein dal ke nahi khaana chahiye.\nGhee ki jagah vanaspati ya refined oil (excess mein) use karna fatty liver mein zyada nuksaan karta hai.',
    },
    {
      _key: 'faq10',
      question: 'Fatty liver mein bahar ka khaana kitna allowed hai?',
      answer: 'Month mein 1-2 baar — allowable hai agar sahi choices ki jaayein.\nRestaurant mein: dal tadka + phulka (no butter), steamed rice + dal, grilled fish ya chicken — ye safer choices hain.\nAvoid karo: fried items, cream-based gravies, biryani, mithai after meal, cold drinks.\nHar baar bahar khate waqt: cold drink ki jagah plain paani ya nimbu paani order karo — ye ek habit jo consistency se liver pe extra sugar load bachati hai.\nZyada often bahar khaana fatty liver recovery ko significantly slow karta hai — ghar ka khaana hi sabse effective treatment support hai.',
    },
  ],

  sources: [
    { _key: 's1', name: 'Romero-Gomez M, Zelber-Sagi S, Trenell M — Treatment of NAFLD with diet, physical activity and exercise — Journal of Hepatology', year: '2017', url: 'https://pubmed.ncbi.nlm.nih.gov/28545937' },
    { _key: 's2', name: 'Del Bo\' C et al — Mediterranean Diet and Liver Enzymes in NAFLD: Systematic Review — Nutrients', year: '2023', url: 'https://pubmed.ncbi.nlm.nih.gov/37242133' },
    { _key: 's3', name: 'Guo W et al — Diet and Risk of Non-Alcoholic Fatty Liver Disease, Cirrhosis, and Liver Cancer — Nutrients', year: '2022', url: 'https://pubmed.ncbi.nlm.nih.gov/36558494' },
    { _key: 's4', name: 'ICMR-NIN — Dietary Guidelines for Indians', year: '2024', url: 'https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf' },
  ],

  quickFacts: {
    mistake: 'Packaged fruit juice ko "healthy" samajh ke peena — liquid fructose liver mein solid food se bhi faster fat banata hai',
    mustEat: 'Karela — bitter compounds liver enzymes naturally normalize karte hain — fatty liver mein specifically studied hai',
    mustAvoid: 'Refined sugar — fructose se liver mein fat conversion sabse fast hoti hai — fatty liver ka #1 dietary driver',
  },

  doctorNote: 'Mere fatty liver patients mein maine clearly notice kiya hai ki jo log sirf ek kaam karte hain — raat 7 baje ke baad khaana band — unka liver enzyme report improvement baki sab se faster hota hai, chahe baaki diet perfect na ho. Ye ek habit jo baki sab se zyada impact karti hai. — Dr. Shadab Khan, MD Homoeopath',
  reviewDate: 'May 2026',

  shareTextGreenRed: 'Fatty liver mein kya khayein, kya nahi — complete list: homeopedia.in/diet/fatty-liver',
  shareTextMealPlan: 'Fatty liver ke liye 4-din ka Indian diet plan: homeopedia.in/diet/fatty-liver',
  shareTextPage: 'Fatty liver Diet Guide — green list, meal plan, special situations sab: homeopedia.in/diet/fatty-liver',

  publishedAt: new Date().toISOString(),
}

async function seed() {
  console.log('🌱 Seeding Fatty Liver diet chart...')
  await client.createOrReplace(doc)
  console.log('✅ Fatty Liver diet chart seeded — homeopedia.in/diet/fatty-liver')
}

seed().catch(console.error)
