import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'diet-gastritis',
  _type: 'diet',
  title: 'Gastritis (Pet ki Sujan) Diet Chart',
  hindiName: 'Pet ki Sujan / Amaashay Shotha',
  slug: { _type: 'slug', current: 'gastritis' },
  relatedDiseaseSlug: 'gastritis',
  category: 'Digestive',
  metaTitle: 'Gastritis Diet – Kya Khayein Kya Nahi (Pet ki Sujan) | Homeopedia',
  metaDescription: 'Gastritis (pet ki sujan) diet chart – green list, red list, daily meal plan, veg aur non-veg dono. Dr. Shadab Khan. Doctor-reviewed. Homeopedia.in',
  intro: 'Gastritis mein stomach ki inner lining (mucosa) irritate hoti hai – aur kuch foods directly us irritation ko badhate ya ghatate hain.\n\nNeeche complete guide hai – green list, red list, daily meal plan, veg/non-veg dono options, aur flare-up/vrat/travel jaise special situations.',

  eatingHabits: [
    { _key: 'eh1', habit: 'Khaali pet zyada der mat raho', reason: 'empty stomach mein acid mucosal lining ko directly irritate karta hai' },
    { _key: 'eh2', habit: 'Khaana slowly khao, achhe se chabaao', reason: 'fast eating se air swallow hoti hai jo bloating aur acid reflux badhata hai' },
    { _key: 'eh3', habit: 'Raat 7 baje ke baad heavy khaana avoid karo', reason: 'late digestion acid secretion late raat tak active rakhti hai' },
  ],

  vegGreenList: [
    {
      _key: 'vgl1',
      categoryName: 'Anaj / Grains',
      emoji: '🌾',
      items: [
        { _key: 'i1', food: 'Daliya (oats/broken wheat)', reason: 'Soft, easily digestible, stomach lining pe soothing effect karta hai' },
        { _key: 'i2', food: 'Chawal (plain boiled)', reason: 'Bland food hai, stomach acid kam produce karta hai digestion mein' },
        { _key: 'i3', food: 'Roti (2 max, gehun ki)', reason: 'Complex carb hai, acid neutralize karne mein help karta hai' },
        { _key: 'i4', food: 'Poha', reason: 'Light hai, gastritis mein heavy grains se better option' },
      ],
    },
    {
      _key: 'vgl2',
      categoryName: 'Sabziyaan / Vegetables',
      emoji: '🥦',
      items: [
        { _key: 'i5', food: 'Lauki', reason: 'Water content high hai, stomach ki sujan (inflammation) kam karta hai' },
        { _key: 'i6', food: 'Turai', reason: 'Alkaline nature ki hai, stomach acid ko neutralize karne mein help karti hai' },
        { _key: 'i7', food: 'Gajar (ubli hui)', reason: 'Beta-carotene mucosal healing mein help karta hai' },
        { _key: 'i8', food: 'Palak (light cooked)', reason: 'Iron + folate stomach lining repair mein support karte hain' },
      ],
    },
    {
      _key: 'vgl3',
      categoryName: 'Phal / Fruits',
      emoji: '🍎',
      items: [
        { _key: 'i9', food: 'Papaya', reason: 'Papain enzyme stomach mein digestion easy karta hai aur mucosal irritation kam karta hai' },
        { _key: 'i10', food: 'Seb (apple, bina chhilka)', reason: 'Pectin fiber stomach acid ko absorb karta hai – gastritis mein helpful' },
        { _key: 'i11', food: 'Kela (fresh, ripe, not overripe)', reason: 'Natural antacid ki tarah kaam karta hai – stomach lining coat karta hai' },
        { _key: 'i12', food: 'Naashpati', reason: 'Alkaline fruit hai, acidity kam karta hai' },
      ],
    },
    {
      _key: 'vgl4',
      categoryName: 'Dal aur Protein',
      emoji: '🫘',
      items: [
        { _key: 'i13', food: 'Moong dal (dhuli, halki banai)', reason: 'Sabse easily digest hone wali dal hai – stomach pe minimum stress' },
        { _key: 'i14', food: 'Tofu', reason: 'Soft protein source hai, acid trigger nahi karta' },
        { _key: 'i15', food: 'Ghar ka fresh bana dahi (1 small katori)', reason: 'Probiotic bacteria gut microbiome balance karte hain jo gastritis healing mein help karta hai' },
      ],
    },
    {
      _key: 'vgl5',
      categoryName: 'Drinks, Masale aur Tel',
      emoji: '🫖',
      items: [
        { _key: 'i16', food: 'Adrak ka paani (thin, warm)', reason: 'Anti-inflammatory properties hain jo stomach lining ki sujan kam karta hai' },
        { _key: 'i17', food: 'Nariyal paani', reason: 'Electrolytes + alkaline nature, acid neutralize karta hai' },
        { _key: 'i18', food: 'Haldi (pinch) + warm paani/doodh', reason: 'Curcumin stomach lining inflammation directly reduce karta hai' },
        { _key: 'i19', food: 'Jeera paani', reason: 'Digestive enzymes stimulate karta hai aur bloating/gas gastritis mein kam karta hai' },
      ],
    },
  ],

  nonVegAllowed: [
    { _key: 'nva1', food: 'Anda (2 boiled, no fry)', reason: 'Easily digestible lean protein hai – stomach acid production trigger nahi karta' },
    { _key: 'nva2', food: 'Chicken (boiled ya grilled, no masala)', reason: 'Lean protein mucosal repair mein help karta hai – fried bilkul nahi' },
    { _key: 'nva3', food: 'Rohu / Katla machli (bhap mein bani ya boiled)', reason: 'Omega-3 fatty acids stomach lining inflammation reduce karte hain' },
  ],

  nonVegAvoid: [
    { _key: 'nvav1', food: 'Fried chicken / pakoda / fry', reason: 'Trans fat stomach acid secretion badhata hai aur mucosal irritation trigger karta hai' },
    { _key: 'nvav2', food: 'Red meat (mutton, beef)', reason: 'High fat content digestion slow karta hai aur stomach acid prolonged active rakhta hai' },
    { _key: 'nvav3', food: 'Shellfish / shrimp', reason: 'Heavy to digest, gastritis mein flare-up ka risk' },
  ],

  redList: [
    {
      _key: 'rl1',
      categoryName: 'Processed aur Maida',
      emoji: '🚫',
      items: [
        { _key: 'ri1', food: 'Maida (bread, naan, pizza base)', reason: 'Gut mein inflammation badhata hai aur mucosal lining ki recovery slow karta hai' },
        { _key: 'ri2', food: 'Packaged biscuits / namkeen', reason: 'Preservatives aur salt stomach acid secretion trigger karte hain' },
        { _key: 'ri3', food: 'Instant noodles', reason: 'Maida + MSG combination mucosal irritation directly badhata hai' },
      ],
    },
    {
      _key: 'rl2',
      categoryName: 'Dairy aur Heavy Foods',
      emoji: '🚫',
      items: [
        { _key: 'ri4', food: 'Packaged / set dahi (market wala)', reason: 'Preservatives hote hain, probiotic benefit nahi milti, acid badhta hai' },
        { _key: 'ri5', food: 'Full-fat doodh zyada quantity', reason: 'Saturated fat acid reflux badhata hai – gastritis mein mukosa irritate hota hai' },
        { _key: 'ri6', food: 'Paneer (fry ya heavy gravy mein)', reason: 'Fried/heavy paneer fat content se acid secretion prolonged hoti hai' },
      ],
    },
    {
      _key: 'rl3',
      categoryName: 'Teekha, Meetha aur Oily',
      emoji: '🚫',
      items: [
        { _key: 'ri7', food: 'Mirchi (lal, hari – zyada)', reason: 'Capsaicin directly stomach mucosal lining irritate karta hai' },
        { _key: 'ri8', food: 'Khatti cheezein – imli, amchur, achaar', reason: 'Acid already irritated lining pe aur irritation badhate hain' },
        { _key: 'ri9', food: 'Fried snacks – samosa, bhajiya, chips', reason: 'High fat slow digestion aur acid secretion badhati hai' },
        { _key: 'ri10', food: 'Refined sugar / meetha', reason: 'Yeast overgrowth promote karta hai jo gut inflammation aur badha sakta hai' },
      ],
    },
    {
      _key: 'rl4',
      categoryName: 'Drinks',
      emoji: '🚫',
      items: [
        { _key: 'ri11', food: 'Chai (3+ cup daily)', reason: 'Caffeine gastric acid secretion stimulate karta hai – khaali pet bilkul nahi' },
        { _key: 'ri12', food: 'Coffee', reason: 'Khaali pet coffee mucosal lining pe direct acid damage karta hai' },
        { _key: 'ri13', food: 'Cold drinks / soda', reason: 'Carbonation stomach mein gas aur pressure badhata hai – mucosa pe stress' },
        { _key: 'ri14', food: 'Alcohol', reason: 'Stomach lining ki protective layer (mucus) directly destroy karta hai' },
      ],
    },
  ],

  dailyMealPlan: [
    { _key: 'dmp1', slotName: 'Subah Uthke', slotTime: '6-7 AM', slotEmoji: '🌅', vegOptions: ['Lukewarm paani + 1/2 nimbu + pinch sendha namak', 'Nariyal paani ya plain warm water'], nonVegOption: '' },
    { _key: 'dmp2', slotName: 'Nashta', slotTime: '8-9 AM', slotEmoji: '🍽️', vegOptions: ['Daliya with lauki / gajar – soft aur stomach-friendly', 'Moong dal chilla (no mirchi) + pudina chutney (mild)'], nonVegOption: '2 ande boiled + plain roti (1)' },
    { _key: 'dmp3', slotName: 'Mid-Morning', slotTime: '11 AM', slotEmoji: '☀️', vegOptions: ['1 kela (fresh, ripe) ya 1 seb', 'Bhuni saunf 1 tsp – gas aur bloating mein relief'], nonVegOption: '' },
    { _key: 'dmp4', slotName: 'Dopahar', slotTime: '1-2 PM', slotEmoji: '🍱', vegOptions: ['2 roti + moong dal (thin) + lauki/turai sabzi (no heavy masala)', 'Chawal + arhar dal (thin) + boiled gajar sabzi + salad'], nonVegOption: 'Boiled chicken + 2 roti + mild sabzi (no mirchi)' },
    { _key: 'dmp5', slotName: 'Shaam', slotTime: '4-5 PM', slotEmoji: '🌇', vegOptions: ['Adrak aur tulsi ki herbal chai (1 cup, no sugar) + 4-5 akhrot', 'Nariyal paani ya jeera paani'], nonVegOption: '' },
    { _key: 'dmp6', slotName: 'Raat', slotTime: '7-8 PM', slotEmoji: '🌙', vegOptions: ['2 roti + palak sabzi (light) + thin dal', 'Khichdi (moong + chawal) + pinch haldi + ghee'], nonVegOption: 'Boiled chicken soup (no cream, no heavy masala) + 1 roti' },
    { _key: 'dmp7', slotName: 'Sone Se Pehle', slotTime: '9 PM', slotEmoji: '😴', vegOptions: ['1 small katori ghar ka warm dahi ya warm haldi doodh (low fat)', 'Warm paani + saunf 1 tsp'], nonVegOption: '' },
  ],

  samplePlan4Day: [
    {
      _key: 'sp1',
      day: 'Din 1',
      vegSubah: 'Nariyal paani',
      vegNashta: 'Daliya + lauki sabzi',
      vegDopahar: '2 roti + moong dal + gajar',
      vegShaam: 'Herbal chai + akhrot',
      vegRaat: 'Khichdi + ghee',
      nonVegNashta: '2 ande boiled + 1 roti',
      nonVegDopahar: 'Boiled chicken + 2 roti + gajar sabzi',
      nonVegRaat: 'Khichdi + ghee',
    },
    {
      _key: 'sp2',
      day: 'Din 2',
      vegSubah: 'Warm paani + nimbu',
      vegNashta: 'Moong dal chilla + pudina chutney',
      vegDopahar: 'Chawal + arhar dal + palak',
      vegShaam: 'Nariyal paani + saunf',
      vegRaat: '2 roti + turai sabzi + masoor dal',
      nonVegNashta: 'Moong dal chilla + pudina chutney',
      nonVegDopahar: 'Boiled rohu machli + chawal + palak',
      nonVegRaat: '2 roti + turai sabzi + masoor dal',
    },
    {
      _key: 'sp3',
      day: 'Din 3',
      vegSubah: 'Adrak warm paani',
      vegNashta: 'Poha (no mirchi) + dahi',
      vegDopahar: '2 roti + chana dal + lauki',
      vegShaam: 'Kela + jeera paani',
      vegRaat: 'Khichdi + boiled gajar + haldi',
      nonVegNashta: 'Poha + dahi',
      nonVegDopahar: '2 roti + boiled chicken + lauki',
      nonVegRaat: 'Chicken clear soup + 1 roti + haldi',
    },
    {
      _key: 'sp4',
      day: 'Din 4',
      vegSubah: 'Nariyal paani',
      vegNashta: 'Daliya + seb',
      vegDopahar: 'Chawal + moong dal + palak sabzi + salad',
      vegShaam: 'Herbal chai + 4-5 akhrot',
      vegRaat: '2 roti + turai + arhar dal',
      nonVegNashta: '2 ande boiled + 1 roti + palak',
      nonVegDopahar: 'Boiled katla machli + chawal + moong dal',
      nonVegRaat: '2 roti + turai + arhar dal',
    },
  ],

  specialSituations: [
    {
      _key: 'ss1',
      situationType: 'flareUp',
      title: 'Flare-Up / Takleef Zyada Ho Tab',
      emoji: '😣',
      tips: [
        'Us din sirf khichdi ya daliya khao – stomach ko rest chahiye',
        'Khaali pet bilkul mat raho – har 2-3 ghante mein kuch light lo',
        'Cold ya iced cheez bilkul nahi – warm / room temp foods hi khao',
      ],
    },
    {
      _key: 'ss2',
      situationType: 'fasting',
      title: 'Vrat / Fasting',
      emoji: '🙏',
      tips: [
        'Sabudana khichdi (no fry, no zyada mirchi) ya alu (boiled) safe option hai',
        'Nariyal paani aur fresh fruit (seb, kela) vrat mein safe hain',
        'Vrat mein khaali pet zyada waqt mat raho – stomach acid empty mein irritation badha deta hai – thodi der pe kuch lo',
      ],
    },
    {
      _key: 'ss3',
      situationType: 'eatingOut',
      title: 'Bahar Khana Ho (Restaurant / Dhaba)',
      emoji: '🍽️',
      tips: [
        'Dal chawal ya khichdi order karo – sabse safe option dhaba mein',
        'Tandoori roti + plain dal + bina mirchi ki sabzi – ye combo order karo',
        'Fried, creamy ya zyada mirchi wali dish avoid karo – menu mein "light" ya "low spice" request kar sakte ho',
      ],
    },
    {
      _key: 'ss4',
      situationType: 'travel',
      title: 'Travel Mein',
      emoji: '✈️',
      tips: [
        'Bhuna chana, dry roasted makhana, plain sev ya dry fruits carry karo – har station/stop pe kuch khao',
        'Train mein plain daliya ya idli order kar sakte ho – hotel mein boiled egg ya plain toast + chai (1 cup, with food, not empty stomach)',
      ],
    },
  ],

  proTip: 'Agar subah uthke turant chai peete ho – pehle 1 glass warm water piyo aur kuch bhi light khao (kela ya roti ka tukda) – phir chai. Khaali pet acid + caffeine = mucosal damage ka fastest route hai.',
  importantNote: 'Ye chart ek general guide hai – gastritis kai types ki hoti hai (H. pylori related, acid related, chronic) – apni specific condition ke hisaab se apne homoeopath se personalized plan banwayein.',
  homeopathyDiet: 'Gastritis mein sahi diet se stomach ki mucosa inflammation mein kam aati hai – aur jab irritation control hoti hai, homoeopathic medicines gut lining healing mein zyada effectively kaam karti hain.',

  faqs: [
    {
      _key: 'faq1',
      question: 'Kya gastritis mein dahi khana safe hai?',
      answer: 'Ghar ka fresh bana hua dahi gastritis mein allowed hai – lekin packaged / market wala nahi.\nFresh dahi mein probiotic bacteria hote hain jo gut microbiome balance karte hain – aur H. pylori ke against bhi helpful hai.\nPackaged dahi mein preservatives hote hain – probiotic benefit kam hoti hai aur acid badh sakta hai.\n1 small katori, din mein ek baar – raat mein nahi.\nApne doctor se poochho agar symptoms zyada hain.',
    },
    {
      _key: 'faq2',
      question: 'Kya gastritis mein chai peena band karna padega?',
      answer: 'Completely band nahi – lekin khaali pet bilkul nahi.\nCaffeine gastric acid secretion badhata hai – aur already irritated lining pe acid = aur damage.\n1 cup din mein, khaane ke baad – ye safe hai zyada tar logon ke liye.\n3+ cups daily ya subah khaali pet chai = mucosal irritation ka direct cause hai.\nAdrak/tulsi ki herbal chai switch karna better option hai.',
    },
    {
      _key: 'faq3',
      question: 'Diet se gastritis mein kitne din mein fark dikhega?',
      answer: 'Agar irritants (chai khaali pet, mirchi, fried food) band karo toh 7-10 din mein bloating aur burning mein relief milti hai.\nMucosal lining ki proper healing mein 4-8 hafte lagte hain consistent diet ke saath.\nH. pylori related gastritis mein diet + treatment dono zaroori hain – sirf diet se infection treat nahi hoti.\nApne doctor se treatment plan zaroor banwao.',
    },
    {
      _key: 'faq4',
      question: 'Gastritis mein nimbu paani peena theek hai?',
      answer: 'Khaali pet nahi – khaane ke baad thoda diluted nimbu paani theek hai zyada tar logon ke liye.\nParadox ye hai ki nimbu khud acidic hai – lekin metabolize hoke alkaline ho jata hai – lekin irritated stomach mein khaali pet ye risk nahi lena chahiye.\nJab symptoms active hon – flare-up ho – tab nimbu bilkul avoid karo.\nJab symptoms stable hon toh subah 1/2 nimbu + lukewarm water + pinch sendha namak – ye digestive ritual try kar sakte ho.',
    },
    {
      _key: 'faq5',
      question: 'Gastritis mein vrat karna safe hai?',
      answer: 'Poora day fast karna gastritis mein risky ho sakta hai.\nKhaali stomach mein acid 20+ ghante active rehti hai – mucosal irritation aur badh sakti hai.\nIntermittent fast ya short fasting better hai – lekin har 3-4 ghante mein kuch light zaroor lo (fruit, sabudana, nariyal paani).\nAgar symptoms zyada hain – doctor se pooch ke hi vrat rakho.',
    },
    {
      _key: 'faq6',
      question: 'Raat ko late khaana (9-10 PM) gastritis mein kitna problem karta hai?',
      answer: 'Late khaana gastritis ka major aggravating factor hai.\nRaat mein metabolism slow hoti hai – food stomach mein zyada der tak raha hai – acid secretion prolonged hoti hai.\nSone se 2 ghante pehle khaana band – raat 7-8 PM tak kha lena ideal hai.\nAgar bhookh lage toh 1 small katori ghar ka dahi ya warm haldi doodh – ye safe hai raat mein.',
    },
    {
      _key: 'faq7',
      question: 'Homeopathic medicine ke saath koi khaana band karna padta hai?',
      answer: 'Kuch specific medicines ke saath strong smell wali cheezein (raw lahsun, kachi pyaz, coffee) avoid karne ki advice di jati hai.\nYe har medicine ke saath nahi hota – apne doctor se specifically poochho ki aapki medicine ke saath koi restriction hai ya nahi.\nGastritis ke liye specifically – caffeine aur alcohol generally avoid karna better hai treatment period mein chahe koi bhi medicine ho – kyunki ye mucosal healing slow karte hain.',
    },
    {
      _key: 'faq8',
      question: 'Gastritis mein non-veg khana chahiye ya band karna padega?',
      answer: 'Completely band karna zaroori nahi – method aur type matter karta hai.\nBoiled / grilled chicken aur steamed fish – ye safe options hain.\nFried non-veg, red meat, heavy masale wala non-veg – ye avoid karo – cooking method directly mucosal irritation affect karta hai.\nEggs (boiled) – easily digestible protein – gastritis mein allowed.\nMutton aur shellfish – gastritis mein avoid karna better hai.',
    },
    {
      _key: 'faq9',
      question: 'Gastritis mein chawal (rice) khana theek hai?',
      answer: 'Haan – plain boiled chawal gastritis mein safe hai.\nChawal bland food hai – stomach mein acid secretion trigger nahi karta – aur easily digestible hai.\nBrown rice se plain white chawal better hai active gastritis mein kyunki brown rice ka fiber thoda heavy hota hai irritated stomach ke liye.\nHeavy ghee ya masale wale chawal avoid karo – plain hi rakho.',
    },
    {
      _key: 'faq10',
      question: 'Achaar / khatti cheezein gastritis mein kitni problem karti hain?',
      answer: 'Achaar, imli, amchur – ye gastritis mein direct irritants hain.\nAlready inflamed stomach lining pe acidic food aur irritation badhata hai – burning aur pain worse ho sakta hai.\nThanda dahi ya pudina chutney (mild) – khatte achaar ka alternative.\nJab symptoms theek hone lagte hain tab bhi achaar mein zyada oil aur salt hota hai – limit karo.',
    },
  ],

  sources: [
    { _key: 's1', name: 'Aimasso U et al — Helicobacter pylori and nutrition: a bidirectional communication — Minerva Gastroenterologica e Dietologica', year: '2019', url: 'https://pubmed.ncbi.nlm.nih.gov/30759976' },
    { _key: 's2', name: 'Minalyan A et al — Autoimmune atrophic gastritis: current perspectives — Clinical and Experimental Gastroenterology', year: '2017', url: 'https://pubmed.ncbi.nlm.nih.gov/28223833' },
    { _key: 's3', name: 'ICMR-NIN — Dietary Guidelines for Indians', year: '2024', url: 'https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf' },
  ],

  quickFacts: {
    mistake: 'Subah khaali pet chai ya coffee peena – ye ek habit hai jo mucosal damage ko daily basis pe continue karti rehti hai',
    mustEat: 'Ghar ka fresh bana dahi (1 small katori) – probiotic support + gut lining healing – daily lo',
    mustAvoid: 'Khaali pet chai – koi bhi form mein, koi bhi quantity mein',
  },

  doctorNote: 'Maine notice kiya hai ki jo gastritis patients subah khaali pet chai band karte hain aur raat ka khaana 7 baje se pehle kha lete hain – unka homeopathic treatment response baaki patients se clearly better hota hai – ye do habits akele bahut fark dalti hain mucosal healing mein. — Dr. Shadab Khan, MD Homoeopath',
  reviewDate: 'May 2026',

  shareTextGreenRed: 'Gastritis (pet ki sujan) mein kya khayein, kya nahi – complete list: homeopedia.in/diet/gastritis',
  shareTextMealPlan: 'Gastritis ke liye 4-din ka Indian diet plan: homeopedia.in/diet/gastritis',
  shareTextPage: 'Gastritis Diet Guide – green list, meal plan, special situations sab: homeopedia.in/diet/gastritis',

  publishedAt: new Date().toISOString(),
}

async function seed() {
  console.log('🌱 Seeding Gastritis diet chart...')
  await client.createOrReplace(doc)
  console.log('✅ Gastritis diet chart seeded — homeopedia.in/diet/gastritis')
}

seed().catch(console.error)
