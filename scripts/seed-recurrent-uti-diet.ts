import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'diet-recurrent-uti',
  _type: 'diet',
  title: 'Recurrent UTI (Baar Baar Peshab Infection) Diet Chart',
  hindiName: 'Baar Baar Peshab Mein Infection / Mutravahi Sankraman',
  slug: { _type: 'slug', current: 'recurrent-uti' },
  relatedDiseaseSlug: 'recurrent-uti',
  category: 'Urinary',
  metaTitle: 'Recurrent UTI (Peshab Infection) Diet – Kya Khayein | Homeopedia',
  metaDescription: 'Recurrent UTI (baar baar peshab infection) diet chart – green list, red list, daily meal plan, veg aur non-veg dono. Dr. Shadab Khan. Doctor-reviewed. Homeopedia.in',
  intro: 'Recurrent UTI mein bacteria bladder ki wall se chipak jaate hain – aur kuch foods is bacteria ke liye growth environment banate hain, jabki kuch foods bladder ko flush karte hain aur infection ka cycle todne mein help karte hain.\n\nNeeche complete guide hai – green list, red list, daily meal plan, veg aur non-veg dono options, aur vrat/travel jaise special situations.',

  eatingHabits: [
    { _key: 'eh1', habit: 'Din mein kam se kam 2.5-3 litre paani piyo', reason: 'paani bacteria ko bladder se flush karta hai – UTI ka sabse proven preventive step hai (JAMA Internal Medicine 2018 RCT)' },
    { _key: 'eh2', habit: 'Raat ko sone se pehle ek baar zaroor peshab karo', reason: 'raat bhar bladder mein ruka peshab bacteria ke palne ki jagah banta hai' },
    { _key: 'eh3', habit: 'Har 3-4 ghante mein peshab karein', reason: 'rokne se bladder mein bacteria multiply karte hain – UTI recurrence ka common reason hai' },
  ],

  vegGreenList: [
    {
      _key: 'vgl1',
      categoryName: 'Anaj / Grains',
      emoji: '🌾',
      items: [
        { _key: 'i1', food: 'Daliya', reason: 'Gut bacteria balance rakhta hai jo E.coli growth ko control karta hai' },
        { _key: 'i2', food: 'Brown rice', reason: 'Fiber bladder ke paas ki gut health ke liye zaroori – UTI ka cycle todta hai' },
        { _key: 'i3', food: 'Jowar / Bajra roti', reason: 'Maida se zyada fiber, gut inflammation kam karta hai jo UTI frequency reduce karta hai' },
        { _key: 'i4', food: 'Oats (daliya)', reason: 'Soluble fiber se gut friendly bacteria badhte hain jo urinary tract ko protect karte hain' },
      ],
    },
    {
      _key: 'vgl2',
      categoryName: 'Sabziyaan / Vegetables',
      emoji: '🥦',
      items: [
        { _key: 'i5', food: 'Lauki', reason: 'High water content, natural diuretic – bladder flush karne mein help karta hai' },
        { _key: 'i6', food: 'Turai', reason: 'Urine output badhata hai, bacteria ko rokne nahi deta bladder mein' },
        { _key: 'i7', food: 'Kakdi / Khira', reason: '96% water – bladder flushing ke liye UTI mein specifically useful' },
        { _key: 'i8', food: 'Palak (kam matra mein)', reason: 'Iron se anemia nahi hoti jo immunity ko kamzor karta hai aur UTI repeat badhata hai' },
      ],
    },
    {
      _key: 'vgl3',
      categoryName: 'Phal / Fruits',
      emoji: '🍎',
      items: [
        { _key: 'i9', food: 'Amla (Indian gooseberry)', reason: 'Vitamin C – urine ko slightly acidic karta hai jo E.coli growth rokhta hai' },
        { _key: 'i10', food: 'Seb (chhilke ke saath)', reason: 'Quercetin se bladder inflammation (sujan) kam hoti hai' },
        { _key: 'i11', food: 'Papaya', reason: 'Enzyme papain gut bacteria balance karta hai jo recurrent UTI mein important role play karta hai' },
        { _key: 'i12', food: 'Anar (pomegranate)', reason: 'Proanthocyanidins bacteria ko bladder wall se chipakne se rokte hain' },
      ],
    },
    {
      _key: 'vgl4',
      categoryName: 'Dal aur Protein',
      emoji: '🫘',
      items: [
        { _key: 'i13', food: 'Moong dal', reason: 'Easily digest hoti hai, bladder pe pressure nahi deti – UTI mein gut load minimum rakhna zaroori hai' },
        { _key: 'i14', food: 'Masoor dal', reason: 'Zinc aur iron – immunity boost karta hai jo baar baar hone wale infections se bachata hai' },
        { _key: 'i15', food: 'Tofu (limited)', reason: 'Plant protein – agar UTI frequent ho toh kum hi rakhein – doctor se poochein' },
      ],
    },
    {
      _key: 'vgl5',
      categoryName: 'Drinks, Masale aur Tel',
      emoji: '🫖',
      items: [
        { _key: 'i16', food: 'Paani (2.5-3 litre daily)', reason: 'JAMA RCT mein proven: extra paani se UTI episodes aadhe se bhi kam ho gaye' },
        { _key: 'i17', food: 'Tulsi chai', reason: 'Anti-bacterial properties, E.coli ko bladder wall se attach hone se rokti hai' },
        { _key: 'i18', food: 'Adrak chai (bina doodh)', reason: 'Anti-inflammatory, UTI ki burning sensation mein relief' },
        { _key: 'i19', food: 'Haldi (khaane mein)', reason: 'Curcumin bladder ki lining ki sujan kam karta hai – UTI mein specific benefit' },
        { _key: 'i20', food: 'Dhaniya paani (raat bhar bhigo ke subah piyo)', reason: 'Natural diuretic, urine output badhata hai' },
        { _key: 'i21', food: 'Jeera paani', reason: 'Bladder ki soothing ke liye, burning mein relief' },
      ],
    },
  ],

  nonVegAllowed: [
    { _key: 'nva1', food: 'Anda (boiled / poached)', reason: 'Protein se immunity strong hoti hai jo recurrent infection se bachati hai – frying avoid karein' },
    { _key: 'nva2', food: 'Machli (rohu, katla – grilled ya boiled)', reason: 'Omega-3 se bladder inflammation kam hoti hai, bacteria growth environment reduce hota hai' },
    { _key: 'nva3', food: 'Chicken (boiled / grilled, bina masala)', reason: 'Lean protein se white blood cells bante hain jo infection se ladte hain' },
  ],

  nonVegAvoid: [
    { _key: 'nvav1', food: 'Jhinga / Shellfish', reason: 'Bladder ke paas gut mein heavy load dalta hai, digestion slow karta hai – UTI worse hoti hai' },
    { _key: 'nvav2', food: 'Fried chicken / tawa chicken', reason: 'Trans fat bladder ki lining ko irritate karta hai, infection ki frequency badhata hai' },
    { _key: 'nvav3', food: 'Red meat (mutton, beef)', reason: 'High purine aur uric acid – urine ko concentrate karta hai jo bacteria ke liye zyada favorable environment banata hai' },
  ],

  redList: [
    {
      _key: 'rl1',
      categoryName: 'Processed aur Maida',
      emoji: '🚫',
      items: [
        { _key: 'ri1', food: 'Maida (bread, naan, biscuit)', reason: 'Gut mein histamine-producing bacteria badhate hain jo UTI aur IBS dono ka risk badhata hai' },
        { _key: 'ri2', food: 'Packaged namkeen / chips', reason: 'High sodium urine concentrate karta hai – bladder bacteria ke liye zyada favorable environment banata hai' },
        { _key: 'ri3', food: 'Fast food', reason: 'Histaminogenic gut dysbiosis ka driver hai jo recurrent UTI ko trigger karta hai' },
      ],
    },
    {
      _key: 'rl2',
      categoryName: 'Dairy aur Heavy Foods',
      emoji: '🚫',
      items: [
        { _key: 'ri4', food: 'Packaged full-fat doodh', reason: 'UTI mein gut bacteria balance bigadhne ka risk – fermented versions better hain' },
        { _key: 'ri5', food: 'Paneer (zyada matra)', reason: 'Heavy protein, slow digest – UTI ke doran bladder stress badhata hai' },
        { _key: 'ri6', food: 'Ice cream', reason: 'Sugar + fat combination gut bacteria balance bigadhta hai, UTI frequency badhti hai' },
      ],
    },
    {
      _key: 'rl3',
      categoryName: 'Teekha, Meetha aur Oily',
      emoji: '🚫',
      items: [
        { _key: 'ri7', food: 'Zyada mirch (laal mirch powder)', reason: 'Bladder ki lining ko directly irritate karta hai – burning sensation aur frequency worse hoti hai' },
        { _key: 'ri8', food: 'Refined sugar (mithai, meetha)', reason: 'Sugar bacteria ke liye fuel hai – UTI mein sugar intake seedha bacteria growth accelerate karta hai' },
        { _key: 'ri9', food: 'Achaar / Pickle', reason: 'High sodium aur fermented irritants – UTI ke doran bladder lining ke liye harmful' },
        { _key: 'ri10', food: 'Zyada tel mein bana khaana', reason: 'Gut inflammation badhata hai jo UTI recurrence ke liye ground taiyar karta hai' },
      ],
    },
    {
      _key: 'rl4',
      categoryName: 'Drinks',
      emoji: '🚫',
      items: [
        { _key: 'ri11', food: 'Chai (zyada, 3+ cups)', reason: 'Caffeine bladder ko irritate karta hai, urine frequency badhata hai lekin flushing nahi karta' },
        { _key: 'ri12', food: 'Coffee', reason: 'Bladder ka direct irritant, UTI mein burning aur urgency worse hoti hai' },
        { _key: 'ri13', food: 'Sugary cold drinks / soda', reason: 'Sugar + carbonation dono milke bladder mein bacteria growth badhate hain' },
        { _key: 'ri14', food: 'Alcohol (beer, wine)', reason: 'Dehydration karta hai, urine concentrate hota hai, bacteria ke liye favorable environment aur immunity weak hoti hai' },
      ],
    },
  ],

  dailyMealPlan: [
    { _key: 'dmp1', slotName: 'Subah Uthke', slotTime: '6-7 AM', slotEmoji: '🌅', vegOptions: ['2 glass gunguna paani + 1 tsp dhaniya seeds (raat bhar bheega hua)', '1 glass paani + adha nimbu (bina cheeni) – UTI mein subah ka liquid ritual sabse important hai'], nonVegOption: '' },
    { _key: 'dmp2', slotName: 'Nashta', slotTime: '8-9 AM', slotEmoji: '🍽️', vegOptions: ['Daliya (vegetables ke saath, namak thoda)', 'Moong dal chilla + hari chutney (dahi nahi)'], nonVegOption: '2 ande (boiled / poached) + 1 jowar roti + cucumber slices' },
    { _key: 'dmp3', slotName: 'Mid-Morning', slotTime: '11 AM', slotEmoji: '☀️', vegOptions: ['1 bowl papaya ya seb', '1 glass nariyal paani (coconut water) – natural electrolytes, bladder soothing'], nonVegOption: '' },
    { _key: 'dmp4', slotName: 'Dopahar', slotTime: '1-2 PM', slotEmoji: '🍱', vegOptions: ['2 jowar/bajra roti + moong dal + lauki sabzi + kakdi salad', 'Brown rice + masoor dal + turai sabzi'], nonVegOption: 'Grilled machli (rohu/katla) + 1 roti + turai sabzi + salad' },
    { _key: 'dmp5', slotName: 'Shaam', slotTime: '4-5 PM', slotEmoji: '🌇', vegOptions: ['Tulsi ya adrak chai (bina doodh, thodi cheeni ya bina cheeni) + bhuna chana', 'Anar ke dane ya amla murabba (bina zyada cheeni)'], nonVegOption: '' },
    { _key: 'dmp6', slotName: 'Raat', slotTime: '7-8 PM', slotEmoji: '🌙', vegOptions: ['2 roti + chana dal + lauki ya palak sabzi', 'Khichdi (moong dal + rice, light, thoda ghee) + salad'], nonVegOption: 'Boiled chicken soup (cream nahi, masala kam) + 1 roti' },
    { _key: 'dmp7', slotName: 'Sone Se Pehle', slotTime: '9 PM', slotEmoji: '😴', vegOptions: ['1 glass gunguna paani + adha tsp haldi', '1 glass saunf paani (saunf boil karke thanda karo) – bladder soothing ke liye'], nonVegOption: '' },
  ],

  samplePlan4Day: [
    {
      _key: 'sp1',
      day: 'Din 1',
      vegSubah: 'Gunguna paani + dhaniya paani',
      vegNashta: 'Moong dal chilla + hari chutney',
      vegDopahar: '2 jowar roti + moong dal + lauki sabzi + kakdi salad',
      vegShaam: 'Tulsi chai + bhuna chana',
      vegRaat: 'Brown rice + masoor dal + turai sabzi',
      nonVegNashta: '2 ande (boiled) + 1 jowar roti + kakdi',
      nonVegDopahar: 'Grilled rohu machli + 1 roti + lauki sabzi + salad',
      nonVegRaat: 'Boiled chicken soup (light) + 1 roti',
    },
    {
      _key: 'sp2',
      day: 'Din 2',
      vegSubah: 'Paani + adha nimbu',
      vegNashta: 'Daliya (vegetables ke saath)',
      vegDopahar: '2 bajra roti + chana dal + palak sabzi + salad',
      vegShaam: 'Anar ke dane + 1 glass paani',
      vegRaat: 'Moong khichdi + ghee (thoda) + lauki sabzi',
      nonVegNashta: '2 ande (poached) + daliya (vegetables)',
      nonVegDopahar: 'Grilled chicken (bina fry) + 2 roti + turai sabzi',
      nonVegRaat: 'Masoor dal + 1 roti + lauki sabzi',
    },
    {
      _key: 'sp3',
      day: 'Din 3',
      vegSubah: 'Gunguna paani + saunf seeds (bheege)',
      vegNashta: 'Oats daliya + seb (kate hue)',
      vegDopahar: 'Brown rice + arhar dal + turai sabzi + kakdi salad',
      vegShaam: 'Adrak chai (bina doodh) + bhuna makhana',
      vegRaat: '2 jowar roti + moong dal + palak sabzi',
      nonVegNashta: 'Anda bhurji (oil kam) + 1 bajra roti',
      nonVegDopahar: 'Grilled katla machli + brown rice + palak sabzi',
      nonVegRaat: 'Moong dal khichdi + salad',
    },
    {
      _key: 'sp4',
      day: 'Din 4',
      vegSubah: 'Dhaniya paani + 1 glass plain paani',
      vegNashta: 'Poha (vegetables ke saath, tel kam)',
      vegDopahar: '2 roti + masoor dal + lauki sabzi + tomato salad',
      vegShaam: 'Tulsi chai + amla (fresh ya sukha)',
      vegRaat: 'Khichdi (moong + rice) + turai sabzi',
      nonVegNashta: '2 ande (boiled) + poha (vegetables)',
      nonVegDopahar: 'Chicken soup (light, bina cream) + 2 roti + salad',
      nonVegRaat: 'Arhar dal + 2 roti + turai sabzi',
    },
  ],

  specialSituations: [
    {
      _key: 'ss1',
      situationType: 'flareUp',
      title: 'Flare-Up / Infection Active Ho Tab',
      emoji: '😣',
      tips: [
        'Us din sirf khichdi, daliya, lauki sabzi – gut pe minimum load rakho, bladder flush pe focus karo',
        'Active infection mein dairy (doodh, dahi, paneer) completely avoid karein – gut bacteria aur worsen ho sakti hai',
        'Paani aur dhaniya / saunf paani – har ghante mein ek glass – bacteria ko flush karte rahna zaroori hai',
      ],
    },
    {
      _key: 'ss2',
      situationType: 'fasting',
      title: 'Vrat / Fasting',
      emoji: '🙏',
      tips: [
        'Sabudana (sabit dana) – safe, easy on bladder – frying avoid karein, khichdi best hai',
        'Singhara atta roti ya kuttu atta roti – safe options UTI mein vrat ke doran',
        'Vrat mein aloo (zyada, fry) aur sendha namak zyada – dono bladder ke liye irritating – limit karein',
        'Vrat mein paani ka intake kum mat hone dena – fasting mein dehydration UTI recurrence ka sabse bada trigger hai',
      ],
    },
    {
      _key: 'ss3',
      situationType: 'eatingOut',
      title: 'Bahar Khana Ho (Restaurant / Dhaba)',
      emoji: '🍽️',
      tips: [
        'Order karein – dal fry (butter kam bolein), plain roti, steamed rice, raita (chhota)',
        'Avoid karein – paneer tikka, fried items, cold drinks, alcohol, extra mirch wala khaana',
        'Practical hack – paani ki bottle saath rakhein, restaurant ka RO paani ya bottled water pi, tap water nahi – travel mein UTI ka common source hai',
      ],
    },
    {
      _key: 'ss4',
      situationType: 'travel',
      title: 'Travel Mein',
      emoji: '✈️',
      tips: [
        'Carry karein – bhuna chana, dry amla candy (bina cheeni), bajra roti (dry, wrapped) – long travel mein ye safe aur UTI-friendly hain',
        'Hotel ya train mein order karein – boiled eggs, plain dal, roti, nimbu paani (bina cheeni) – masaledar ya fried bilkul nahi',
      ],
    },
  ],

  proTip: 'Paani peete waqt ek simple check karo – peshab ka rang pale yellow hona chahiye. Agar dark yellow ya strong smell aa rahi hai – paani usi waqt badha do. Ye ek practical signal hai jo UTI episode aane se pehle pakad leta hai.',
  importantNote: 'Ye chart ek general guide hai – recurrent UTI ki frequency aur severity har patient mein alag hoti hai. Apni condition ke hisaab se apne homoeopath se personalized plan banwayein.',
  homeopathyDiet: 'Recurrent UTI mein jab bladder ki lining ke bacteria ko diet se kam support milta hai – homeopathic medicines usse effectively target kar paati hain aur treatment ka response clearly better hota hai.',

  faqs: [
    {
      _key: 'faq1',
      question: 'Kya dahi (curd) UTI mein allowed hai?',
      answer: 'UTI mein ghar ka fresh bana dahi, chhoti matra mein, allowed hai – packaged ya market ka dahi nahi.\nFresh dahi mein probiotic bacteria hote hain jo gut flora balance karte hain – fermented milk products UTI recurrence ke risk se protective effect dete hain.\nPackaged / set dahi mein tyramine aur additives UTI ko worse kar sakte hain.\nActive infection ke doran dahi bhi temporarily avoid karna better hai – apne doctor se poochein.',
    },
    {
      _key: 'faq2',
      question: 'Kya chawal (rice) UTI mein khana theek hai?',
      answer: 'Haan – brown rice ya parboiled rice UTI mein allowed hai.\nWhite polished rice refined hai – zyada matra mein gut bacteria ko affect karta hai.\nBrown rice ka fiber gut health maintain karta hai jo UTI recurrence ka indirect factor hai.\nRaat ke khaane mein chawal kum rakho – din mein allowed hai.',
    },
    {
      _key: 'faq3',
      question: 'Diet se recurrent UTI mein kitne din mein fark dikhta hai?',
      answer: 'Diet se UTI frequency mein fark dekhne ke liye 4-6 hafte ka consistent change zaroori hai – 2-3 din mein nahi.\nJAMA Internal Medicine 2018 ka 12-month RCT batata hai ki extra daily paani ne UTI episodes aadhe se bhi kam kar diye – lekin 12 mahine consistently.\nActive infection mein diet support karta hai medicines ko – akele diet se infection nahi jaata.',
    },
    {
      _key: 'faq4',
      question: 'UTI mein chai peeni chahiye ya band karni chahiye?',
      answer: 'Ek cup subah ki chai (preferably adrak ya tulsi, bina doodh) allowed hai.\n3+ cups chai daily – caffeine bladder ko directly irritate karta hai – burning aur urgency worse hoti hai.\nHerbal chai (tulsi, saunf, dhaniya) – kisi bhi waqt allowed hai – ye bladder ke liye helpful bhi hain.\nRegular dairy chai zyada peena UTI mein clearly avoid karein.',
    },
    {
      _key: 'faq5',
      question: 'Recurrent UTI mein vrat kar sakte hain?',
      answer: 'Haan – lekin paani ka intake kum nahi hona chahiye.\nVrat mein sabse bada UTI risk dehydration hai – paani, nariyal paani, nimbu paani (bina cheeni) lete rahein.\nSabudana khichdi, singhara atta roti, kuttu atta roti – UTI-friendly vrat options hain.\nZyada fry kiya hua vrat ka khaana (sabudana vada, aloo tikkis) active infection mein avoid karein.',
    },
    {
      _key: 'faq6',
      question: 'Kya baar baar peshab rokne se UTI zyada hota hai?',
      answer: 'Haan – peshab rokna recurrent UTI ka ek major trigger hai.\nBladder mein ruka hua urine bacteria ke multiply karne ki jagah banta hai.\nIdeal – har 3-4 ghante mein peshab karein, chahe urge strong na ho.\nRaat ko sone se pehle ek baar zaroor peshab karein – ye simple habit UTI recurrence mein bahut fark karti hai.',
    },
    {
      _key: 'faq7',
      question: 'Homeopathic medicine ke saath koi khaana band karna padta hai?',
      answer: 'Kuch specific restrictions hain jo medicine-wise vary karti hain.\nStrong smell wali cheezein jaise kapoor, eucalyptus – kuch doctors recommend karte hain avoid karna – apne specific medicine ke baare mein apne doctor se poochein.\nCoffee – kuch homeopathic medicines ke saath avoid karna better hai – individual case dependent hai.\nGeneralized ban nahi hoti – doctor se specifically apni medicine ke liye puchein.',
    },
    {
      _key: 'faq8',
      question: 'Recurrent UTI mein non-veg band karna padega?',
      answer: 'Completely band karne ki zaroorat nahi – lekin type aur cooking method matter karta hai.\nAllowed: boiled/grilled eggs, rohu/katla machli (grilled), boiled chicken.\nAvoid: fried non-veg, red meat (mutton/beef), shellfish.\nActive infection ke doran non-veg 2-3 din ke liye kum kar lo – gut pe load kam rakho.',
    },
    {
      _key: 'faq9',
      question: 'Kya nimbu ya khatta khana UTI mein theek hai?',
      answer: 'Thodi matra mein nimbu paani (bina cheeni) – allowed aur actually helpful hai.\nVitamin C urine ko slightly acidic banata hai jo E.coli bacteria ke liye unfavorable environment banata hai.\nZyada teekha khatta (imli, achaar, aamchur zyada) – bladder lining irritate karta hai – avoid karein.\nPlain nimbu paani subah uthke – UTI mein good habit hai.',
    },
    {
      _key: 'faq10',
      question: 'Kya nariyal paani (coconut water) UTI mein peena chahiye?',
      answer: 'Haan – nariyal paani UTI mein specifically helpful hai.\nNatural electrolytes bladder soothing karte hain aur urine output badhate hain.\nPackaged coconut water mein sugar added hoti hai – avoid.\nFresh nariyal paani mid-morning best time hai – daily ek nariyal allowed hai.',
    },
  ],

  sources: [
    { _key: 's1', name: 'Hooton TM et al — Effect of Increased Daily Water Intake in Premenopausal Women With Recurrent UTIs: A Randomized Clinical Trial — JAMA Internal Medicine', year: '2018', url: 'https://pubmed.ncbi.nlm.nih.gov/30285042' },
    { _key: 's2', name: 'Kontiokari T et al — Dietary factors protecting women from urinary tract infection — The American Journal of Clinical Nutrition', year: '2003', url: 'https://pubmed.ncbi.nlm.nih.gov/12600849' },
    { _key: 's3', name: 'Ruta F et al — Histamine-Producing Intestinal Dysbiosis and Its Role in Lower Urinary Tract Infections and IBS in Young Women — Nutrients', year: '2025', url: 'https://pubmed.ncbi.nlm.nih.gov/41515135' },
    { _key: 's4', name: 'ICMR-NIN — Dietary Guidelines for Indians', year: '2024', url: 'https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf' },
  ],

  quickFacts: {
    mistake: 'Paani thoda peena – "khaane se infection hoga" soch ke log liquids kum kar dete hain – ye ulta result karta hai',
    mustEat: 'Amla – daily ek amla (fresh ya sukha) Vitamin C se urine pH balance karta hai jo E.coli growth rokta hai',
    mustAvoid: 'Refined sugar – mithai, meetha, cold drinks – UTI bacteria ke liye direct fuel hai – active infection mein poora band karein',
  },

  doctorNote: 'Maine notice kiya hai ki jo recurrent UTI patients paani ki measurable habit banate hain – ghar mein bottle rakh ke count karte hain – unka treatment response clearly better hota hai unse jo "bas peeta hoon" kehte hain bina tracking ke. Paani ka intention aur habit dono matter karte hain. — Dr. Shadab Khan, MD Homoeopath',
  reviewDate: 'May 2026',

  shareTextGreenRed: 'Recurrent UTI mein kya khayein, kya nahi – complete list: homeopedia.in/diet/recurrent-uti',
  shareTextMealPlan: 'Recurrent UTI ke liye 4-din ka Indian diet plan: homeopedia.in/diet/recurrent-uti',
  shareTextPage: 'Recurrent UTI Diet Guide – green list, meal plan, special situations sab: homeopedia.in/diet/recurrent-uti',

  publishedAt: new Date().toISOString(),
}

async function seed() {
  console.log('🌱 Seeding Recurrent UTI diet chart...')
  await client.createOrReplace(doc)
  console.log('✅ Recurrent UTI diet chart seeded — homeopedia.in/diet/recurrent-uti')
}

seed().catch(console.error)
