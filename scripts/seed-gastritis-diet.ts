import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
})

async function seed() {
  console.log('🌱 Seeding Gastritis diet chart...')

  const doc = {
    _id: 'diet-gastritis',
    _type: 'diet',
    title: 'Gastritis Diet',
    slug: { _type: 'slug', current: 'gastritis' },
    disease: 'Gastritis',
    diseaseHindi: 'Pet ki Sujan / Amaashay Shotha',
    category: 'Digestive',
    lastReviewed: 'May 2026',
    doctorName: 'Dr. Shadab Khan, MD Homoeopath',

    seoTitle: 'Gastritis Diet – Kya Khayein Kya Nahi (Pet ki Sujan) | Homeopedia',
    seoDescription: 'Gastritis (pet ki sujan) diet chart – green list, red list, daily meal plan, veg aur non-veg dono. Dr. Shadab Khan. Doctor-reviewed. Homeopedia.in',

    introLine1: 'Gastritis mein stomach ki inner lining (mucosa) irritate hoti hai – aur kuch foods directly us irritation ko badhate ya ghatate hain.',
    introLine2: 'Neeche complete guide hai – green list, red list, daily meal plan, veg/non-veg dono options, aur flare-up/vrat/travel jaise special situations.',

    habits: [
      { icon: '⏰', text: 'Khaali pet zyada der mat raho – empty stomach mein acid mucosal lining ko directly irritate karta hai.' },
      { icon: '⏰', text: 'Khaana slowly khao, achhe se chabaao – fast eating se air swallow hoti hai jo bloating aur acid reflux badhata hai.' },
      { icon: '⏰', text: 'Raat 7 baje ke baad heavy khaana avoid karo – late digestion acid secretion late raat tak active rakhti hai.' },
    ],

    vegGreenList: [
      {
        category: 'Anaj / Grains',
        items: [
          { name: 'Daliya (oats/broken wheat)', reason: 'Soft, easily digestible, stomach lining pe soothing effect karta hai' },
          { name: 'Chawal (plain boiled)', reason: 'Bland food hai, stomach acid kam produce karta hai digestion mein' },
          { name: 'Roti (2 max, gehun ki)', reason: 'Complex carb hai, acid neutralize karne mein help karta hai' },
          { name: 'Poha', reason: 'Light hai, gastritis mein heavy grains se better option' },
        ],
      },
      {
        category: 'Sabziyaan / Vegetables',
        items: [
          { name: 'Lauki', reason: 'Water content high hai, stomach ki sujan (inflammation) kam karta hai' },
          { name: 'Turai', reason: 'Alkaline nature ki hai, stomach acid ko neutralize karne mein help karti hai' },
          { name: 'Gajar (ubli hui)', reason: 'Beta-carotene mucosal healing mein help karta hai' },
          { name: 'Palak (light cooked)', reason: 'Iron + folate stomach lining repair mein support karte hain' },
        ],
      },
      {
        category: 'Phal / Fruits',
        items: [
          { name: 'Papaya', reason: 'Papain enzyme stomach mein digestion easy karta hai aur mucosal irritation kam karta hai' },
          { name: 'Seb (apple, bina chhilka)', reason: 'Pectin fiber stomach acid ko absorb karta hai – gastritis mein helpful' },
          { name: 'Kela (fresh, ripe, not overripe)', reason: 'Natural antacid ki tarah kaam karta hai – stomach lining coat karta hai' },
          { name: 'Naashpati', reason: 'Alkaline fruit hai, acidity kam karta hai' },
        ],
      },
      {
        category: 'Dal aur Protein',
        items: [
          { name: 'Moong dal (dhuli, halki banai)', reason: 'Sabse easily digest hone wali dal hai – stomach pe minimum stress' },
          { name: 'Tofu', reason: 'Soft protein source hai, acid trigger nahi karta' },
          { name: 'Ghar ka fresh bana dahi (1 small katori)', reason: 'Probiotic bacteria gut microbiome balance karte hain jo gastritis healing mein help karta hai' },
        ],
      },
      {
        category: 'Drinks, Masale aur Tel',
        items: [
          { name: 'Adrak ka paani (thin, warm)', reason: 'Anti-inflammatory properties hain jo stomach lining ki sujan kam karta hai' },
          { name: 'Nariyal paani', reason: 'Electrolytes + alkaline nature, acid neutralize karta hai' },
          { name: 'Haldi (pinch) + warm paani/doodh', reason: 'Curcumin stomach lining inflammation directly reduce karta hai' },
          { name: 'Jeera paani', reason: 'Digestive enzymes stimulate karta hai aur bloating/gas gastritis mein kam karta hai' },
        ],
      },
    ],

    nonVegAllowed: [
      { name: 'Anda (2 boiled, no fry)', reason: 'Easily digestible lean protein hai – stomach acid production trigger nahi karta' },
      { name: 'Chicken (boiled ya grilled, no masala)', reason: 'Lean protein mucosal repair mein help karta hai – fried bilkul nahi' },
      { name: 'Rohu / Katla machli (bhap mein bani ya boiled)', reason: 'Omega-3 fatty acids stomach lining inflammation reduce karte hain' },
    ],

    nonVegAvoid: [
      { name: 'Fried chicken / pakoda / fry', reason: 'Trans fat stomach acid secretion badhata hai aur mucosal irritation trigger karta hai' },
      { name: 'Red meat (mutton, beef)', reason: 'High fat content digestion slow karta hai aur stomach acid prolonged active rakhta hai' },
      { name: 'Shellfish / shrimp', reason: 'Heavy to digest, gastritis mein flare-up ka risk' },
    ],

    redList: [
      {
        category: 'Processed aur Maida',
        items: [
          { name: 'Maida (bread, naan, pizza base)', reason: 'Gut mein inflammation badhata hai aur mucosal lining ki recovery slow karta hai' },
          { name: 'Packaged biscuits / namkeen', reason: 'Preservatives aur salt stomach acid secretion trigger karte hain' },
          { name: 'Instant noodles', reason: 'Maida + MSG combination mucosal irritation directly badhata hai' },
        ],
      },
      {
        category: 'Dairy aur Heavy Foods',
        items: [
          { name: 'Packaged / set dahi (market wala)', reason: 'Preservatives hote hain, probiotic benefit nahi milti, acid badhta hai' },
          { name: 'Full-fat doodh zyada quantity', reason: 'Saturated fat acid reflux badhata hai – gastritis mein mukosa irritate hota hai' },
          { name: 'Paneer (fry ya heavy gravy mein)', reason: 'Fried/heavy paneer fat content se acid secretion prolonged hoti hai' },
        ],
      },
      {
        category: 'Teekha, Meetha aur Oily',
        items: [
          { name: 'Mirchi (lal, hari – zyada)', reason: 'Capsaicin directly stomach mucosal lining irritate karta hai' },
          { name: 'Khatti cheezein – imli, amchur, achaar', reason: 'Acid already irritated lining pe aur irritation badhate hain' },
          { name: 'Fried snacks – samosa, bhajiya, chips', reason: 'High fat slow digestion aur acid secretion badhati hai' },
          { name: 'Refined sugar / meetha', reason: 'Yeast overgrowth promote karta hai jo gut inflammation aur badha sakta hai' },
        ],
      },
      {
        category: 'Drinks',
        items: [
          { name: 'Chai (3+ cup daily)', reason: 'Caffeine gastric acid secretion stimulate karta hai – khaali pet bilkul nahi' },
          { name: 'Coffee', reason: 'Khaali pet coffee mucosal lining pe direct acid damage karta hai' },
          { name: 'Cold drinks / soda', reason: 'Carbonation stomach mein gas aur pressure badhata hai – mucosa pe stress' },
          { name: 'Alcohol', reason: 'Stomach lining ki protective layer (mucus) directly destroy karta hai' },
        ],
      },
    ],

    dailyMealPlan: [
      {
        slot: 'Subah Uthke (6–7 AM)',
        icon: '🌅',
        items: [
          'Lukewarm paani + 1/2 nimbu + pinch sendha namak',
          'Nariyal paani ya plain warm water',
        ],
      },
      {
        slot: 'Nashta (8–9 AM)',
        icon: '🍽️',
        items: [
          'Daliya with lauki / gajar – soft aur stomach-friendly',
          'Moong dal chilla (no mirchi) + pudina chutney (mild)',
          '[Non-veg: 2 ande boiled + plain roti (1)]',
        ],
      },
      {
        slot: 'Mid-Morning (11 AM)',
        icon: '☕',
        items: [
          '1 kela (fresh, ripe) ya 1 seb',
          'Bhuni saunf 1 tsp – gas aur bloating mein relief',
        ],
      },
      {
        slot: 'Dopahar (1–2 PM)',
        icon: '🌱',
        items: [
          '2 roti + moong dal (thin) + lauki/turai sabzi (no heavy masala)',
          'Chawal + arhar dal (thin) + boiled gajar sabzi + salad',
          '[Non-veg: Boiled chicken + 2 roti + mild sabzi (no mirchi)]',
        ],
      },
      {
        slot: 'Shaam (4–5 PM)',
        icon: '🌿',
        items: [
          'Adrak aur tulsi ki herbal chai (1 cup, no sugar) + 4–5 akhrot',
          'Nariyal paani ya jeera paani',
        ],
      },
      {
        slot: 'Raat (7–8 PM)',
        icon: '🌙',
        items: [
          '2 roti + palak sabzi (light) + thin dal',
          'Khichdi (moong + chawal) + pinch haldi + ghee',
          '[Non-veg: Boiled chicken soup (no cream, no heavy masala) + 1 roti]',
        ],
      },
      {
        slot: 'Sone Se Pehle (9 PM)',
        icon: '😴',
        items: [
          '1 small katori ghar ka warm dahi ya warm haldi doodh (low fat)',
          'Warm paani + saunf 1 tsp',
        ],
      },
    ],

    samplePlan4Day: [
      {
        day: 'Din 1 (Veg)',
        morning: 'Nariyal paani',
        breakfast: 'Daliya + lauki sabzi',
        lunch: '2 roti + moong dal + gajar',
        evening: 'Herbal chai + akhrot',
        dinner: 'Khichdi + ghee',
      },
      {
        day: 'Din 2 (Veg)',
        morning: 'Warm paani + nimbu',
        breakfast: 'Moong dal chilla + pudina chutney',
        lunch: 'Chawal + arhar dal + palak',
        evening: 'Nariyal paani + saunf',
        dinner: '2 roti + turai sabzi + masoor dal',
      },
      {
        day: 'Din 3 (Veg)',
        morning: 'Adrak warm paani',
        breakfast: 'Poha (no mirchi) + dahi',
        lunch: '2 roti + chana dal + lauki',
        evening: 'Kela + jeera paani',
        dinner: 'Khichdi + boiled gajar + haldi',
      },
      {
        day: 'Din 4 (Veg)',
        morning: 'Nariyal paani',
        breakfast: 'Daliya + seb',
        lunch: 'Chawal + moong dal + palak sabzi + salad',
        evening: 'Herbal chai + 4–5 akhrot',
        dinner: '2 roti + turai + arhar dal',
      },
      {
        day: 'Din 1 (Non-Veg)',
        morning: 'Nariyal paani',
        breakfast: '2 ande boiled + 1 roti',
        lunch: 'Boiled chicken + 2 roti + gajar sabzi',
        evening: 'Herbal chai + akhrot',
        dinner: 'Khichdi + ghee',
      },
      {
        day: 'Din 2 (Non-Veg)',
        morning: 'Warm paani + nimbu',
        breakfast: 'Moong dal chilla + pudina chutney',
        lunch: 'Boiled rohu machli + chawal + palak',
        evening: 'Nariyal paani + saunf',
        dinner: '2 roti + turai sabzi + masoor dal',
      },
      {
        day: 'Din 3 (Non-Veg)',
        morning: 'Adrak warm paani',
        breakfast: 'Poha + dahi',
        lunch: '2 roti + boiled chicken + lauki',
        evening: 'Kela + jeera paani',
        dinner: 'Chicken clear soup + 1 roti + haldi',
      },
      {
        day: 'Din 4 (Non-Veg)',
        morning: 'Nariyal paani',
        breakfast: '2 ande boiled + 1 roti + palak',
        lunch: 'Boiled katla machli + chawal + moong dal',
        evening: 'Herbal chai + akhrot',
        dinner: '2 roti + turai + arhar dal',
      },
    ],

    specialSituations: [
      {
        type: 'Flare-Up / Takleef Zyada Ho Tab',
        icon: '🔴',
        tips: [
          'Us din sirf khichdi ya daliya khao – stomach ko rest chahiye',
          'Khaali pet bilkul mat raho – har 2–3 ghante mein kuch light lo',
          'Cold ya iced cheez bilkul nahi – warm / room temp foods hi khao',
        ],
      },
      {
        type: 'Vrat / Fasting',
        icon: '🙏',
        tips: [
          'Sabudana khichdi (no fry, no zyada mirchi) ya alu (boiled) safe option hai',
          'Nariyal paani aur fresh fruit (seb, kela) vrat mein safe hain',
          'Vrat mein khaali pet zyada waqt mat raho – stomach acid bees ghante empty mein irritation badha deta hai – thodi der pe kuch lo',
        ],
      },
      {
        type: 'Bahar Khana Ho (Restaurant / Dhaba)',
        icon: '🍽️',
        tips: [
          'Dal chawal ya khichdi order karo – sabse safe option dhaba mein',
          'Tandoori roti + plain dal + bina mirchi ki sabzi – ye combo order karo',
          'Fried, creamy ya zyada mirchi wali dish avoid karo – menu mein "light" ya "low spice" request kar sakte ho',
        ],
      },
      {
        type: 'Travel Mein',
        icon: '✈️',
        tips: [
          'Bhuna chana, dry roasted makhana, plain sev ya dry fruits carry karo – har station/stop pe kuch khao',
          'Train mein plain daliya ya idli order kar sakte ho – hotel mein boiled egg ya plain toast + chai (1 cup, with food, not empty stomach)',
        ],
      },
    ],

    proTip: 'Agar subah uthke turant chai peete ho – pehle 1 glass warm water piyo aur kuch bhi light khao (kela ya roti ka tukda) – phir chai. Khaali pet acid + caffeine = mucosal damage ka fastest route hai.',

    importantNote: 'Ye chart ek general guide hai – gastritis kai types ki hoti hai (H. pylori related, acid related, chronic) – apni specific condition ke hisaab se apne homoeopath se personalized plan banwayein.',

    homeopathyNote: 'Gastritis mein sahi diet se stomach ki mucosa inflammation mein kam aati hai – aur jab irritation control hoti hai, homoeopathic medicines gut lining healing mein zyada effectively kaam karti hain.',

    faqs: [
      {
        question: 'Kya gastritis mein dahi khana safe hai?',
        answer: 'Ghar ka fresh bana hua dahi gastritis mein allowed hai – lekin packaged / market wala nahi.\nFresh dahi mein probiotic bacteria hote hain jo gut microbiome balance karte hain – aur H. pylori ke against bhi helpful hai.\nPackaged dahi mein preservatives hote hain – probiotic benefit kam hoti hai aur acid badh sakta hai.\n1 small katori, din mein ek baar – raat mein nahi.\nApne doctor se poochho agar symptoms zyada hain.',
      },
      {
        question: 'Kya gastritis mein chai peena band karna padega?',
        answer: 'Completely band nahi – lekin khaali pet bilkul nahi.\nCaffeine gastric acid secretion badhata hai – aur already irritated lining pe acid = aur damage.\n1 cup din mein, khaane ke baad – ye safe hai zyada tar logon ke liye.\n3+ cups daily ya subah khaali pet chai = mucosal irritation ka direct cause hai.\nAdrak/tulsi ki herbal chai switch karna better option hai.',
      },
      {
        question: 'Diet se gastritis mein kitne din mein fark dikhega?',
        answer: 'Agar irritants (chai khaali pet, mirchi, fried food) band karo toh 7–10 din mein bloating aur burning mein relief milti hai.\nMucosal lining ki proper healing mein 4–8 hafte lagte hain consistent diet ke saath.\nH. pylori related gastritis mein diet + treatment dono zaroori hain – sirf diet se infection treat nahi hoti.\nApne doctor se treatment plan zaroor banwao.',
      },
      {
        question: 'Gastritis mein nimbu paani peena theek hai?',
        answer: 'Khaali pet nahi – khaane ke baad thoda diluted nimbu paani theek hai zyada tar logon ke liye.\nParadox ye hai ki nimbu khud acidic hai – lekin metabolize hoke alkaline ho jata hai – lekin irritated stomach mein khaali pet ye risk nahi lena chahiye.\nJab symptoms active hon – flare-up ho – tab nimbu bilkul avoid karo.\nJab symptoms stable hon toh subah 1/2 nimbu + lukewarm water + pinch sendha namak – ye digestive ritual try kar sakte ho.',
      },
      {
        question: 'Gastritis mein vrat karna safe hai?',
        answer: 'Poora day fast karna gastritis mein risky ho sakta hai.\nKhaali stomach mein acid 20+ ghante active rehti hai – mucosal irritation aur badh sakti hai.\nIntermittent fast ya short fasting better hai – lekin har 3–4 ghante mein kuch light zaroor lo (fruit, sabudana, nariyal paani).\nAgar symptoms zyada hain – doctor se pooch ke hi vrat rakho.',
      },
      {
        question: 'Raat ko late khaana (9–10 PM) gastritis mein kitna problem karta hai?',
        answer: 'Late khaana gastritis ka major aggravating factor hai.\nRaat mein metabolism slow hoti hai – food stomach mein zyada der tak raha hai – acid secretion prolonged hoti hai.\nSone se 2 ghante pehle khaana band – raat 7–8 PM tak kha lena ideal hai.\nAgar bhookh lage toh 1 small katori ghar ka dahi ya warm haldi doodh – ye safe hai raat mein.',
      },
      {
        question: 'Homeopathic medicine ke saath koi khaana band karna padta hai?',
        answer: 'Kuch specific medicines ke saath strong smell wali cheezein (raw lahsun, kachi pyaz, coffee) avoid karne ki advice di jati hai.\nYe har medicine ke saath nahi hota – apne doctor se specifically poochho ki aapki medicine ke saath koi restriction hai ya nahi.\nGastritis ke liye specifically – caffeine aur alcohol generally avoid karna better hai treatment period mein chahe koi bhi medicine ho – kyunki ye mucosal healing slow karte hain.',
      },
      {
        question: 'Gastritis mein non-veg khana chahiye ya band karna padega?',
        answer: 'Completely band karna zaroori nahi – method aur type matter karta hai.\nBoiled / grilled chicken aur steamed fish – ye safe options hain.\nFried non-veg, red meat, heavy masale wala non-veg – ye avoid karo – cooking method directly mucosal irritation affect karta hai.\nEggs (boiled) – easily digestible protein – gastritis mein allowed.\nMutton aur shellfish – gastritis mein avoid karna better hai.',
      },
      {
        question: 'Gastritis mein chawal (rice) khana theek hai?',
        answer: 'Haan – plain boiled chawal gastritis mein safe hai.\nChawal bland food hai – stomach mein acid secretion trigger nahi karta – aur easily digestible hai.\nBrown rice se plain white chawal better hai active gastritis mein kyunki brown rice ka fiber thoda heavy hota hai irritated stomach ke liye.\nHeavy ghee ya masale wale chawal avoid karo – plain hi rakho.',
      },
      {
        question: 'Achaar / khatti cheezein gastritis mein kitni problem karti hain?',
        answer: 'Achaar, imli, amchur – ye gastritis mein direct irritants hain.\nAlready inflamed stomach lining pe acidic food aur irritation badhata hai – burning aur pain worse ho sakta hai.\nThanda dahi ya pudina chutney (mild) – khatte achaar ka alternative.\nJab symptoms theek hone lagte hain tab bhi achaar mein zyada oil aur salt hota hai – limit karo.',
      },
    ],

    sources: [
      {
        author: 'Aimasso U et al.',
        title: 'Helicobacter pylori and nutrition: a bidirectional communication',
        journal: 'Minerva Gastroenterologica e Dietologica',
        year: '2019',
        pmid: '30759976',
        doi: '10.23736/S1121-421X.19.02568-6',
      },
      {
        author: 'Minalyan A et al.',
        title: 'Autoimmune atrophic gastritis: current perspectives',
        journal: 'Clinical and Experimental Gastroenterology',
        year: '2017',
        pmid: '28223833',
        doi: '10.2147/CEG.S109123',
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
        label: 'Sabse common diet mistake',
        value: 'Subah khaali pet chai ya coffee peena – ye ek habit hai jo mucosal damage ko daily basis pe continue karti rehti hai.',
      },
      {
        label: 'Ek food jo zaroor khaana chahiye',
        value: 'Ghar ka fresh bana dahi (1 small katori) – probiotic support + gut lining healing – daily lo.',
      },
      {
        label: 'Ek food jo bilkul avoid karein',
        value: 'Khaali pet chai – koi bhi form mein, koi bhi quantity mein.',
      },
    ],

    doctorNote: 'Maine notice kiya hai ki jo gastritis patients subah khaali pet chai band karte hain aur raat ka khaana 7 baje se pehle kha lete hain – unka homeopathic treatment response baaki patients se clearly better hota hai – ye do habits akele bahut fark dalti hain mucosal healing mein.',

    shareTexts: [
      'Gastritis mein kya khayein, kya nahi – complete list: homeopedia.in/gastritis-diet-chart',
      'Gastritis ke liye 4-din ka Indian diet plan: homeopedia.in/gastritis-diet-chart',
      'Gastritis Diet Guide – green list, meal plan, special situations sab: homeopedia.in/gastritis-diet-chart',
    ],
  }

  await client.createOrReplace(doc)
  console.log('✅ Gastritis diet chart seeded — homeopedia.in/diet/gastritis')
}

seed().catch(console.error)
