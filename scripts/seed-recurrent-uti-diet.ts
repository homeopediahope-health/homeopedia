import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
})

async function seed() {
  console.log('🌱 Seeding Recurrent UTI diet chart...')

  const doc = {
    _id: 'diet-recurrent-uti',
    _type: 'diet',
    title: 'Recurrent UTI Diet',
    slug: { _type: 'slug', current: 'recurrent-uti' },
    disease: 'Recurrent Urinary Tract Infection (Recurrent UTI)',
    diseaseHindi: 'Baar Baar Peshab Mein Infection / Mutravahi Sankraman',
    category: 'Urinary',
    lastReviewed: 'May 2026',
    doctorName: 'Dr. Shadab Khan, MD Homoeopath',

    seoTitle: 'Recurrent UTI (Peshab Infection) Diet – Kya Khayein | Homeopedia',
    seoDescription: 'Recurrent UTI (baar baar peshab infection) diet chart – green list, red list, daily meal plan, veg aur non-veg dono. Dr. Shadab Khan. Doctor-reviewed. Homeopedia.in',

    introLine1: 'Recurrent UTI mein bacteria bladder ki wall se chipak jaate hain – aur kuch foods is bacteria ke liye growth environment banate hain, jabki kuch foods bladder ko flush karte hain aur infection ka cycle todne mein help karte hain.',
    introLine2: 'Neeche complete guide hai – green list, red list, daily meal plan, veg aur non-veg dono options, aur vrat/travel jaise special situations.',

    habits: [
      { icon: '⏰', text: 'Din mein kam se kam 2.5–3 litre paani piyo – paani bacteria ko bladder se flush karta hai – UTI ka sabse proven preventive step hai (JAMA Internal Medicine 2018 RCT).' },
      { icon: '⏰', text: 'Raat ko sone se pehle ek baar zaroor peshab karo – raat bhar bladder mein ruka peshab bacteria ke palne ki jagah banta hai.' },
      { icon: '⏰', text: 'Har 3–4 ghante mein peshab karein – rokne se bladder mein bacteria multiply karte hain – UTI recurrence ka common reason hai.' },
    ],

    vegGreenList: [
      {
        category: 'Anaj / Grains',
        items: [
          { name: 'Daliya', reason: 'Gut bacteria balance rakhta hai jo E.coli growth ko control karta hai' },
          { name: 'Brown rice', reason: 'Fiber bladder ke paas ki gut health ke liye zaroori – UTI ka cycle todta hai' },
          { name: 'Jowar / Bajra roti', reason: 'Maida se zyada fiber, gut inflammation kam karta hai jo UTI frequency reduce karta hai' },
          { name: 'Oats (daliya)', reason: 'Soluble fiber se gut friendly bacteria badhte hain jo urinary tract ko protect karte hain' },
        ],
      },
      {
        category: 'Sabziyaan / Vegetables',
        items: [
          { name: 'Lauki', reason: 'High water content, natural diuretic – bladder flush karne mein help karta hai' },
          { name: 'Turai', reason: 'Urine output badhata hai, bacteria ko rokne nahi deta bladder mein' },
          { name: 'Kakdi / Khira', reason: '96% water – bladder flushing ke liye UTI mein specifically useful' },
          { name: 'Palak (kam matra mein)', reason: 'Iron se anemia nahi hoti jo immunity ko kamzor karta hai aur UTI repeat badhata hai' },
        ],
      },
      {
        category: 'Phal / Fruits',
        items: [
          { name: 'Amla (Indian gooseberry)', reason: 'Vitamin C – urine ko slightly acidic karta hai jo E.coli growth rokhta hai' },
          { name: 'Seb (chhilke ke saath)', reason: 'Quercetin se bladder inflammation (sujan) kam hoti hai' },
          { name: 'Papaya', reason: 'Enzyme papain gut bacteria balance karta hai jo recurrent UTI mein important role play karta hai' },
          { name: 'Anar (pomegranate)', reason: 'Proanthocyanidins bacteria ko bladder wall se chipakne se rokte hain' },
        ],
      },
      {
        category: 'Dal aur Protein',
        items: [
          { name: 'Moong dal', reason: 'Easily digest hoti hai, bladder pe pressure nahi deti – UTI mein gut load minimum rakhna zaroori hai' },
          { name: 'Masoor dal', reason: 'Zinc aur iron – immunity boost karta hai jo baar baar hone wale infections se bachata hai' },
          { name: 'Tofu (limited)', reason: 'Plant protein – agar UTI frequent ho toh kum hi rakhein – doctor se poochein' },
        ],
      },
      {
        category: 'Drinks, Masale aur Tel',
        items: [
          { name: 'Paani (2.5–3 litre daily)', reason: 'JAMA RCT mein proven: extra paani se UTI episodes aadhe se bhi kam ho gaye' },
          { name: 'Tulsi chai', reason: 'Anti-bacterial properties, E.coli ko bladder wall se attach hone se rokti hai' },
          { name: 'Adrak chai (bina doodh)', reason: 'Anti-inflammatory, UTI ki burning sensation mein relief' },
          { name: 'Haldi (khaane mein)', reason: 'Curcumin bladder ki lining ki sujan kam karta hai – UTI mein specific benefit' },
          { name: 'Dhaniya paani (raat bhar bhigo ke subah piyo)', reason: 'Natural diuretic, urine output badhata hai' },
          { name: 'Jeera paani', reason: 'Bladder ki soothing ke liye, burning mein relief' },
        ],
      },
    ],

    nonVegAllowed: [
      { name: 'Anda (boiled / poached)', reason: 'Protein se immunity strong hoti hai jo recurrent infection se bachati hai – frying avoid karein' },
      { name: 'Machli (rohu, katla – grilled ya boiled)', reason: 'Omega-3 se bladder inflammation kam hoti hai, bacteria growth environment reduce hota hai' },
      { name: 'Chicken (boiled / grilled, bina masala)', reason: 'Lean protein se white blood cells bante hain jo infection se ladte hain' },
    ],

    nonVegAvoid: [
      { name: 'Jhinga / Shellfish', reason: 'Bladder ke paas gut mein heavy load dalta hai, digestion slow karta hai – UTI worse hoti hai' },
      { name: 'Fried chicken / tawa chicken', reason: 'Trans fat bladder ki lining ko irritate karta hai, infection ki frequency badhata hai' },
      { name: 'Red meat (mutton, beef)', reason: 'High purine aur uric acid – urine ko concentrate karta hai jo bacteria ke liye zyada favorable environment banata hai' },
    ],

    redList: [
      {
        category: 'Processed aur Maida',
        items: [
          { name: 'Maida (bread, naan, biscuit)', reason: 'Gut mein histamine-producing bacteria badhate hain jo UTI aur IBS dono ka risk badhata hai (Nutrients 2025 study)' },
          { name: 'Packaged namkeen / chips', reason: 'High sodium urine concentrate karta hai – bladder bacteria ke liye zyada favorable environment banata hai' },
          { name: 'Fast food', reason: 'Nutrients 2025 study mein directly link mila fast food aur histaminogenic gut dysbiosis mein jo recurrent UTI ka driver hai' },
        ],
      },
      {
        category: 'Dairy aur Heavy Foods',
        items: [
          { name: 'Packaged full-fat doodh', reason: 'UTI mein gut bacteria balance bigadhne ka risk – fermented versions better hain (Am J Clin Nutr 2003 study)' },
          { name: 'Paneer (zyada matra)', reason: 'Heavy protein, slow digest – UTI ke doran bladder stress badhata hai' },
          { name: 'Ice cream', reason: 'Sugar + fat combination gut bacteria balance bigadhta hai, UTI frequency badhti hai' },
        ],
      },
      {
        category: 'Teekha, Meetha aur Oily',
        items: [
          { name: 'Zyada mirch (laal mirch powder)', reason: 'Bladder ki lining ko directly irritate karta hai – burning sensation aur frequency worse hoti hai' },
          { name: 'Refined sugar (mithai, meetha)', reason: 'Sugar bacteria ke liye fuel hai – UTI mein sugar intake seedha bacteria growth accelerate karta hai' },
          { name: 'Achaar / Pickle', reason: 'High sodium aur fermented irritants – UTI ke doran bladder lining ke liye harmful' },
          { name: 'Zyada tel mein bana khaana', reason: 'Gut inflammation badhata hai jo UTI recurrence ke liye ground taiyar karta hai' },
        ],
      },
      {
        category: 'Drinks',
        items: [
          { name: 'Chai (zyada, 3+ cups)', reason: 'Caffeine bladder ko irritate karta hai, urine frequency badhata hai lekin flushing nahi karta' },
          { name: 'Coffee', reason: 'Bladder ka direct irritant, UTI mein burning aur urgency worse hoti hai' },
          { name: 'Sugary cold drinks / soda', reason: 'Sugar + carbonation dono milke bladder mein bacteria growth badhate hain' },
          { name: 'Alcohol (beer, wine)', reason: 'Dehydration karta hai, urine concentrate hota hai, bacteria ke liye favorable environment aur immunity weak hoti hai' },
        ],
      },
    ],

    dailyMealPlan: [
      {
        slot: 'Subah Uthke (6–7 AM)',
        icon: '🌅',
        items: [
          '2 glass gunguna paani + 1 tsp dhaniya seeds (raat bhar bheega hua)',
          '1 glass paani + adha nimbu (bina cheeni) – UTI mein subah ka liquid ritual sabse important hai',
        ],
      },
      {
        slot: 'Nashta (8–9 AM)',
        icon: '🍽️',
        items: [
          'Daliya (vegetables ke saath, namak thoda)',
          'Moong dal chilla + hari chutney (dahi nahi)',
          '[Non-veg: 2 ande (boiled / poached) + 1 jowar roti + cucumber slices]',
        ],
      },
      {
        slot: 'Mid-Morning (11 AM)',
        icon: '☕',
        items: [
          '1 bowl papaya ya seb',
          '1 glass nariyal paani (coconut water) – natural electrolytes, bladder soothing',
        ],
      },
      {
        slot: 'Dopahar (1–2 PM)',
        icon: '🌱',
        items: [
          '2 jowar/bajra roti + moong dal + lauki sabzi + kakdi salad',
          'Brown rice + masoor dal + turai sabzi',
          '[Non-veg: Grilled machli (rohu/katla) + 1 roti + turai sabzi + salad]',
        ],
      },
      {
        slot: 'Shaam (4–5 PM)',
        icon: '🌿',
        items: [
          'Tulsi ya adrak chai (bina doodh, thodi cheeni ya bina cheeni) + bhuna chana',
          'Anar ke dane ya amla murabba (bina zyada cheeni)',
        ],
      },
      {
        slot: 'Raat (7–8 PM)',
        icon: '🌙',
        items: [
          '2 roti + chana dal + lauki ya palak sabzi',
          'Khichdi (moong dal + rice, light, thoda ghee) + salad',
          '[Non-veg: Boiled chicken soup (cream nahi, masala kam) + 1 roti]',
        ],
      },
      {
        slot: 'Sone Se Pehle (9 PM)',
        icon: '😴',
        items: [
          '1 glass gunguna paani + adha tsp haldi',
          '1 glass saunf paani (saunf boil karke thanda karo) – bladder soothing ke liye',
        ],
      },
    ],

    samplePlan4Day: [
      {
        day: 'Din 1 (Veg)',
        morning: 'Gunguna paani + dhaniya paani',
        breakfast: 'Moong dal chilla + hari chutney',
        lunch: '2 jowar roti + moong dal + lauki sabzi + kakdi salad',
        evening: 'Tulsi chai + bhuna chana',
        dinner: 'Brown rice + masoor dal + turai sabzi',
      },
      {
        day: 'Din 2 (Veg)',
        morning: 'Paani + adha nimbu',
        breakfast: 'Daliya (vegetables ke saath)',
        lunch: '2 bajra roti + chana dal + palak sabzi + salad',
        evening: 'Anar ke dane + 1 glass paani',
        dinner: 'Moong khichdi + ghee (thoda) + lauki sabzi',
      },
      {
        day: 'Din 3 (Veg)',
        morning: 'Gunguna paani + saunf seeds (bheege)',
        breakfast: 'Oats daliya + seb (kate hue)',
        lunch: 'Brown rice + arhar dal + turai sabzi + kakdi salad',
        evening: 'Adrak chai (bina doodh) + bhuna makhana',
        dinner: '2 jowar roti + moong dal + palak sabzi',
      },
      {
        day: 'Din 4 (Veg)',
        morning: 'Dhaniya paani + 1 glass plain paani',
        breakfast: 'Poha (vegetables ke saath, tel kam)',
        lunch: '2 roti + masoor dal + lauki sabzi + tomato salad',
        evening: 'Tulsi chai + amla (fresh ya sukha)',
        dinner: 'Khichdi (moong + rice) + turai sabzi',
      },
      {
        day: 'Din 1 (Non-Veg)',
        morning: 'Gunguna paani + dhaniya paani',
        breakfast: '2 ande (boiled) + 1 jowar roti + kakdi',
        lunch: 'Grilled rohu machli + 1 roti + lauki sabzi + salad',
        evening: 'Tulsi chai + bhuna chana',
        dinner: 'Boiled chicken soup (light) + 1 roti',
      },
      {
        day: 'Din 2 (Non-Veg)',
        morning: 'Paani + adha nimbu',
        breakfast: '2 ande (poached) + daliya (vegetables)',
        lunch: 'Grilled chicken (bina fry) + 2 roti + turai sabzi',
        evening: 'Anar ke dane + 1 glass paani',
        dinner: 'Masoor dal + 1 roti + lauki sabzi',
      },
      {
        day: 'Din 3 (Non-Veg)',
        morning: 'Gunguna paani + saunf seeds (bheege)',
        breakfast: 'Anda bhurji (oil kam) + 1 bajra roti',
        lunch: 'Grilled katla machli + brown rice + palak sabzi',
        evening: 'Adrak chai (bina doodh) + bhuna makhana',
        dinner: 'Moong dal khichdi + salad',
      },
      {
        day: 'Din 4 (Non-Veg)',
        morning: 'Dhaniya paani + 1 glass plain paani',
        breakfast: '2 ande (boiled) + poha (vegetables)',
        lunch: 'Chicken soup (light, bina cream) + 2 roti + salad',
        evening: 'Tulsi chai + amla (fresh ya sukha)',
        dinner: 'Arhar dal + 2 roti + turai sabzi',
      },
    ],

    specialSituations: [
      {
        type: 'Flare-Up / Infection Active Ho Tab',
        icon: '🔴',
        tips: [
          'Us din sirf khichdi, daliya, lauki sabzi – gut pe minimum load rakho, bladder flush pe focus karo',
          'Active infection mein dairy (doodh, dahi, paneer) completely avoid karein – gut bacteria aur worsen ho sakti hai',
          'Paani aur dhaniya / saunf paani – har ghante mein ek glass – bacteria ko flush karte rahna zaroori hai',
        ],
      },
      {
        type: 'Vrat / Fasting',
        icon: '🙏',
        tips: [
          'Sabudana (sabit dana) – safe, easy on bladder – frying avoid karein, khichdi best hai',
          'Singhara atta roti ya kuttu atta roti – safe options UTI mein vrat ke doran',
          'Vrat mein aloo (zyada, fry) aur sendha namak zyada – dono bladder ke liye irritating – limit karein',
          'Vrat mein paani ka intake kum mat hone dena – fasting mein dehydration UTI recurrence ka sabse bada trigger hai',
        ],
      },
      {
        type: 'Bahar Khana Ho (Restaurant / Dhaba)',
        icon: '🍽️',
        tips: [
          'Order karein – dal fry (butter kam bolein), plain roti, steamed rice, raita (chhota)',
          'Avoid karein – paneer tikka, fried items, cold drinks, alcohol, extra mirch wala khaana',
          'Practical hack – paani ki bottle saath rakhein, restaurant ka RO paani ya bottled water pi, tap water nahi – travel mein UTI ka common source hai',
        ],
      },
      {
        type: 'Travel Mein',
        icon: '✈️',
        tips: [
          'Carry karein – bhuna chana, dry amla candy (bina cheeni), bajra roti (dry, wrapped) – long travel mein ye safe aur UTI-friendly hain',
          'Hotel ya train mein order karein – boiled eggs, plain dal, roti, nimbu paani (bina cheeni) – masaledar ya fried bilkul nahi',
        ],
      },
    ],

    proTip: 'Paani peete waqt ek simple check karo – peshab ka rang pale yellow hona chahiye. Agar dark yellow ya strong smell aa rahi hai – paani usi waqt badha do. Ye ek practical signal hai jo UTI episode aane se pehle pakad leta hai.',

    importantNote: 'Ye chart ek general guide hai – recurrent UTI ki frequency aur severity har patient mein alag hoti hai. Apni condition ke hisaab se apne homoeopath se personalized plan banwayein.',

    homeopathyNote: 'Recurrent UTI mein jab bladder ki lining ke bacteria ko diet se kam support milta hai – homeopathic medicines usse effectively target kar paati hain aur treatment ka response clearly better hota hai.',

    faqs: [
      {
        question: 'Kya dahi (curd) UTI mein allowed hai?',
        answer: 'UTI mein ghar ka fresh bana dahi, chhoti matra mein, allowed hai – packaged ya market ka dahi nahi.\nFresh dahi mein probiotic bacteria hote hain jo gut flora balance karte hain – Am J Clin Nutr 2003 study mein fermented milk products UTI recurrence ke risk se linked the (protective effect).\nPackaged / set dahi mein tyramine aur additives UTI ko worse kar sakte hain.\nActive infection ke doran dahi bhi temporarily avoid karna better hai – apne doctor se poochein.',
      },
      {
        question: 'Kya chawal (rice) UTI mein khana theek hai?',
        answer: 'Haan – brown rice ya parboiled rice UTI mein allowed hai.\nWhite polished rice refined hai – zyada matra mein gut bacteria ko affect karta hai.\nBrown rice ka fiber gut health maintain karta hai jo UTI recurrence ka indirect factor hai.\nRaat ke khaane mein chawal kum rakho – din mein allowed hai.',
      },
      {
        question: 'Diet se recurrent UTI mein kitne din mein fark dikhta hai?',
        answer: 'Diet se UTI frequency mein fark dekhne ke liye 4–6 hafte ka consistent change zaroori hai – 2–3 din mein nahi.\nJAMA Internal Medicine 2018 ka 12-month RCT batata hai ki extra daily paani ne UTI episodes aadhe se bhi kam kar diye – lekin 12 mahine consistently.\nActive infection mein diet support karta hai medicines ko – akele diet se infection nahi jaata.',
      },
      {
        question: 'UTI mein chai peeni chahiye ya band karni chahiye?',
        answer: 'Ek cup subah ki chai (preferably adrak ya tulsi, bina doodh) allowed hai.\n3+ cups chai daily – caffeine bladder ko directly irritate karta hai – burning aur urgency worse hoti hai.\nHerbal chai (tulsi, saunf, dhaniya) – kisi bhi waqt allowed hai – ye bladder ke liye helpful bhi hain.\nRegular dairy chai zyada peena UTI mein clearly avoid karein.',
      },
      {
        question: 'Recurrent UTI mein vrat kar sakte hain?',
        answer: 'Haan – lekin paani ka intake kum nahi hona chahiye.\nVrat mein sabse bada UTI risk dehydration hai – paani, nariyal paani, nimbu paani (bina cheeni) lete rahein.\nSabudana khichdi, singhara atta roti, kuttu atta roti – UTI-friendly vrat options hain.\nZyada fry kiya hua vrat ka khaana (sabudana vada, aloo tikkis) active infection mein avoid karein.',
      },
      {
        question: 'Kya baar baar peshab rokne se UTI zyada hota hai?',
        answer: 'Haan – peshab rokna recurrent UTI ka ek major trigger hai.\nBladder mein ruka hua urine bacteria ke multiply karne ki jagah banta hai.\nIdeal – har 3–4 ghante mein peshab karein, chahe urge strong na ho.\nRaat ko sone se pehle ek baar zaroor peshab karein – ye simple habit UTI recurrence mein bahut fark karti hai.',
      },
      {
        question: 'Homeopathic medicine ke saath koi khaana band karna padta hai?',
        answer: 'Kuch specific restrictions hain jo medicine-wise vary karti hain.\nStrong smell wali cheezein jaise kapoor, eucalyptus – kuch doctors recommend karte hain avoid karna – apne specific medicine ke baare mein apne doctor se poochein.\nCoffee – kuch homeopathic medicines ke saath avoid karna better hai – individual case dependent hai.\nGeneralized ban nahi hoti – doctor se specifically apni medicine ke liye puchein.',
      },
      {
        question: 'Recurrent UTI mein non-veg band karna padega?',
        answer: 'Completely band karne ki zaroorat nahi – lekin type aur cooking method matter karta hai.\nAllowed: boiled/grilled eggs, rohu/katla machli (grilled), boiled chicken.\nAvoid: fried non-veg, red meat (mutton/beef), shellfish.\nActive infection ke doran non-veg 2–3 din ke liye kum kar lo – gut pe load kam rakho.',
      },
      {
        question: 'Kya nimbu ya khatta khana UTI mein theek hai?',
        answer: 'Thodi matra mein nimbu paani (bina cheeni) – allowed aur actually helpful hai.\nVitamin C urine ko slightly acidic banata hai jo E.coli bacteria ke liye unfavorable environment banata hai.\nZyada teekha khatta (imli, achaar, aamchur zyada) – bladder lining irritate karta hai – avoid karein.\nPlain nimbu paani subah uthke – UTI mein good habit hai.',
      },
      {
        question: 'Kya nariyal paani (coconut water) UTI mein peena chahiye?',
        answer: 'Haan – nariyal paani UTI mein specifically helpful hai.\nNatural electrolytes bladder soothing karte hain aur urine output badhate hain.\nPackaged coconut water mein sugar added hoti hai – avoid.\nFresh nariyal paani mid-morning best time hai – daily ek nariyal allowed hai.',
      },
    ],

    sources: [
      {
        author: 'Hooton TM, Vecchio M, et al.',
        title: 'Effect of Increased Daily Water Intake in Premenopausal Women With Recurrent Urinary Tract Infections: A Randomized Clinical Trial',
        journal: 'JAMA Internal Medicine',
        year: '2018',
        pmid: '30285042',
        doi: '10.1001/jamainternmed.2018.4204',
      },
      {
        author: 'Kontiokari T, Laitinen J, et al.',
        title: 'Dietary factors protecting women from urinary tract infection',
        journal: 'The American Journal of Clinical Nutrition',
        year: '2003',
        pmid: '12600849',
        doi: '10.1093/ajcn/77.3.600',
      },
      {
        author: 'Ruță F, Avram C, et al.',
        title: 'Histamine-Producing Intestinal Dysbiosis and Its Role in Lower Urinary Tract Infections and Irritable Bowel Syndrome in Young Women',
        journal: 'Nutrients',
        year: '2025',
        pmid: '41515135',
        doi: '10.3390/nu18010016',
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
        label: 'Sabse common diet mistake recurrent UTI mein',
        value: 'Paani thoda peena – "khaane se infection hoga" soch ke log liquids kum kar dete hain – ye ulta result karta hai.',
      },
      {
        label: 'Ek food jo zaroor khaana chahiye',
        value: 'Amla – daily ek amla (fresh ya sukha) Vitamin C se urine pH balance karta hai jo E.coli growth rokta hai.',
      },
      {
        label: 'Ek food jo bilkul avoid karein',
        value: 'Refined sugar – mithai, meetha, cold drinks – UTI bacteria ke liye direct fuel hai – active infection mein poora band karein.',
      },
    ],

    doctorNote: 'Maine notice kiya hai ki jo recurrent UTI patients paani ki measurable habit banate hain – ghar mein bottle rakh ke count karte hain – unka treatment response clearly better hota hai unse jo "bas peeta hoon" kehte hain bina tracking ke. Paani ka intention aur habit dono matter karte hain.',

    shareTexts: [
      'Recurrent UTI mein kya khayein, kya nahi – complete list: homeopedia.in/recurrent-uti-diet-chart',
      'Recurrent UTI ke liye 4-din ka Indian diet plan: homeopedia.in/recurrent-uti-diet-chart',
      'Recurrent UTI Diet Guide – green list, meal plan, special situations sab: homeopedia.in/recurrent-uti-diet-chart',
    ],
  }

  await client.createOrReplace(doc)
  console.log('✅ Recurrent UTI diet chart seeded — homeopedia.in/diet/recurrent-uti')
}

seed().catch(console.error)
