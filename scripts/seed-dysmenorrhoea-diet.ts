import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'diet-dysmenorrhoea',
  _type: 'diet',
  title: 'Dysmenorrhoea (Period Dard) Diet Chart',
  hindiName: 'Period Dard / Masik Dard / Aadha Dard',
  slug: { _type: 'slug', current: 'dysmenorrhoea' },
  relatedDiseaseSlug: 'dysmenorrhoea',
  category: "Women's",
  metaTitle: 'Dysmenorrhoea Diet — Period Dard Mein Kya Khayein | Homeopedia',
  metaDescription: 'Period dard (dysmenorrhoea) diet chart — green list, red list, daily meal plan, veg aur non-veg dono. Dr. Shadab Khan. Doctor-reviewed. Homeopedia.in',
  intro: 'Dysmenorrhoea mein prostaglandin naam ka chemical uterus mein inflammation aur cramping trigger karta hai — aur kuch foods is prostaglandin production ko seedha badhate ya ghatate hain.\n\nNeeche complete guide hai — green list, red list, daily meal plan, veg aur non-veg dono options, aur vrat aur travel jaise special situations.',

  eatingHabits: [
    { _key: 'eh1', habit: 'Period se 5-7 din pehle se hi anti-inflammatory khaana shuru karo', reason: 'prostaglandin level build-up phase mein control hota hai, period aane ke baad nahi' },
    { _key: 'eh2', habit: 'Period ke dino mein namak aur processed food bilkul band karo', reason: 'sodium bloating aur uterine cramping dono badhata hai' },
    { _key: 'eh3', habit: 'Har 3-4 ghante mein thoda khaate raho', reason: 'khali pet acidity aur cramping ko aur badha deta hai' },
  ],

  vegGreenList: [
    {
      _key: 'vgl1',
      categoryName: 'Anaj / Grains',
      emoji: '🌾',
      items: [
        { _key: 'i1', food: 'Daliya (broken wheat)', reason: 'magnesium se bharpoor hai jo uterine muscle spasm kam karta hai' },
        { _key: 'i2', food: 'Brown rice', reason: 'refined carbs se better — blood sugar stable rakhta hai jo period pain mein zaruri hai' },
        { _key: 'i3', food: 'Jowar / bajra roti', reason: 'maida se alag — gut mein inflammation nahi badhata' },
        { _key: 'i4', food: 'Oats', reason: 'fiber se prostaglandin metabolism better hota hai' },
      ],
    },
    {
      _key: 'vgl2',
      categoryName: 'Sabziyaan / Vegetables',
      emoji: '🥦',
      items: [
        { _key: 'i5', food: 'Palak', reason: 'iron + magnesium dono — period mein dono ki kami hoti hai' },
        { _key: 'i6', food: 'Lauki', reason: 'gut ki sujan kam karta hai jo uterine pain ko aur badha sakti hai' },
        { _key: 'i7', food: 'Karela', reason: 'blood circulation improve karta hai — cramping ke time helpful' },
        { _key: 'i8', food: 'Gajar', reason: 'beta-carotene uterine tissue health ke liye — hormonal balance mein help karta hai' },
        { _key: 'i9', food: 'Methi (fenugreek) leaves', reason: 'uterine muscle ko relax karne mein traditional evidence hai' },
      ],
    },
    {
      _key: 'vgl3',
      categoryName: 'Phal / Fruits',
      emoji: '🍎',
      items: [
        { _key: 'i10', food: 'Papaya', reason: 'papain enzyme uterine contraction smooth karta hai — period ke dino mein especially useful' },
        { _key: 'i11', food: 'Amla (fresh ya dry)', reason: 'Vitamin C prostaglandin pathway modulate karta hai' },
        { _key: 'i12', food: 'Kela (fresh, slightly raw)', reason: 'magnesium + potassium dono cramping reduce karte hain' },
        { _key: 'i13', food: 'Seb', reason: 'quercetin flavonoid inflammation pathway mein anti-prostaglandin effect deta hai' },
      ],
    },
    {
      _key: 'vgl4',
      categoryName: 'Dal aur Protein',
      emoji: '🫘',
      items: [
        { _key: 'i14', food: 'Moong dal', reason: 'easily digest hoti hai — period ke dino mein heavy protein se better option' },
        { _key: 'i15', food: 'Masoor dal', reason: 'iron ki kami poori karta hai jo period ke baad common hoti hai' },
        { _key: 'i16', food: 'Kala chana (boiled)', reason: 'plant-based iron + fiber — prostaglandin clearance mein help karta hai' },
      ],
    },
    {
      _key: 'vgl5',
      categoryName: 'Drinks, Masale aur Tel',
      emoji: '🫖',
      items: [
        { _key: 'i17', food: 'Adrak chai (ginger tea)', reason: 'gingerol prostaglandin synthesis directly inhibit karta hai — cramping mein proven relief' },
        { _key: 'i18', food: 'Haldi + kali mirch warm paani', reason: 'curcumin anti-inflammatory hai aur kali mirch ke bina absorb nahi hota' },
        { _key: 'i19', food: 'Jeera paani', reason: 'uterine spasm mein traditional use — muscle relaxant properties' },
        { _key: 'i20', food: 'Sarson ka tel ya til ka tel', reason: 'omega-6 linolenic acid jo anti-inflammatory prostaglandin pathway support karta hai' },
      ],
    },
  ],

  nonVegAllowed: [
    { _key: 'nva1', food: 'Rohu / Katla machli (grilled ya boiled)', reason: 'omega-3 fatty acids prostaglandin E2 ko suppress karte hain jo primary cramping chemical hai' },
    { _key: 'nva2', food: '2 ande (boiled)', reason: 'Vitamin D + B12 dono — period pain ke patients mein aksar deficient hote hain' },
    { _key: 'nva3', food: 'Chicken soup (grilled chicken — no fry, no cream)', reason: 'lean protein jo period ke baad recovery mein help karta hai' },
  ],

  nonVegAvoid: [
    { _key: 'nvav1', food: 'Fried chicken / mutton', reason: 'trans fat prostaglandin production accelerate karta hai — cramping aur badh jaati hai' },
    { _key: 'nvav2', food: 'Red meat (gosht)', reason: 'arachidonic acid se bharpoor hai jo pro-inflammatory prostaglandin E2 directly badhata hai' },
    { _key: 'nvav3', food: 'Packaged / processed meat (sausage, salami)', reason: 'preservatives + sodium dono uterine inflammation trigger karte hain' },
  ],

  redList: [
    {
      _key: 'rl1',
      categoryName: 'Processed aur Maida',
      emoji: '🚫',
      items: [
        { _key: 'ri1', food: 'Maida roti / naan / bread', reason: 'refined carbs insulin spike karte hain jo estrogen dominance badhata hai — period pain ka root cause' },
        { _key: 'ri2', food: 'Packaged biscuits / namkeen', reason: 'trans fat + refined carbs — prostaglandin synthesis ke liye fuel ka kaam karte hain' },
        { _key: 'ri3', food: 'Instant noodles / pasta', reason: 'high sodium + maida dono ka combination — uterine bloating + cramping badh jaati hai' },
      ],
    },
    {
      _key: 'rl2',
      categoryName: 'Dairy aur Heavy Foods',
      emoji: '🚫',
      items: [
        { _key: 'ri4', food: 'Full fat doodh ya cream', reason: 'saturated fat arachidonic acid metabolism mein convert hota hai jo prostaglandin E2 badhata hai' },
        { _key: 'ri5', food: 'Paneer (large quantity)', reason: 'heavy protein period ke dino mein digestion slow karta hai aur bloating badhata hai' },
        { _key: 'ri6', food: 'Dahi (packaged / set dahi)', reason: 'market wale mein high tyramine hota hai jo cramping episodes mein add ho sakta hai [Ghar ka fresh dahi — ek small katori — allowed hai]' },
      ],
    },
    {
      _key: 'rl3',
      categoryName: 'Teekha, Meetha aur Oily',
      emoji: '🚫',
      items: [
        { _key: 'ri7', food: 'Bahut zyada mirch wala khaana', reason: 'capsaicin gut inflammation trigger karta hai jo uterine area mein pain refer karta hai' },
        { _key: 'ri8', food: 'Refined sugar / mithai / cold drinks', reason: 'rapid blood sugar swing prostaglandin release ko amplify karta hai' },
        { _key: 'ri9', food: 'Deep fried khaana (puri, pakoda, samosa)', reason: 'trans fat direct prostaglandin E2 booster hai' },
      ],
    },
    {
      _key: 'rl4',
      categoryName: 'Drinks',
      emoji: '🚫',
      items: [
        { _key: 'ri10', food: 'Chai / coffee (3+ cups ya period ke dino mein zyada)', reason: 'caffeine uterine blood vessels constrict karta hai — cramping badh jaati hai [1 cup subah adrak ke saath allowed hai — quantity matter karti hai]' },
        { _key: 'ri11', food: 'Cold drinks / soda', reason: 'carbonation + sugar dono — bloating aur uterine pressure badh jaata hai' },
        { _key: 'ri12', food: 'Alcohol', reason: 'prostaglandin production directly badh jaati hai — avoid karo period se pehle aur during dono' },
      ],
    },
  ],

  dailyMealPlan: [
    { _key: 'dmp1', slotName: 'Subah Uthke', slotTime: '6-7 AM', slotEmoji: '🌅', vegOptions: ['Warm paani + adrak ka chhota tukda + 1 tsp shahad — prostaglandin inhibition ke liye', 'Warm paani + haldi + kali mirch (ek chutki) — anti-inflammatory morning ritual'], nonVegOption: '' },
    { _key: 'dmp2', slotName: 'Nashta', slotTime: '8-9 AM', slotEmoji: '🍽️', vegOptions: ['Daliya with palak aur jeera tadka', 'Poha with gajar aur methi leaves'], nonVegOption: '2 boiled ande + 1 bajra roti + kheera' },
    { _key: 'dmp3', slotName: 'Mid-Morning', slotTime: '11 AM', slotEmoji: '☀️', vegOptions: ['1 kela (fresh, slightly raw) ya 1 seb', 'Bheega kala chana (small handful)'], nonVegOption: '' },
    { _key: 'dmp4', slotName: 'Dopahar', slotTime: '1-2 PM', slotEmoji: '🍱', vegOptions: ['2 jowar roti + moong dal + palak sabzi + salad', 'Brown rice + masoor dal + lauki ki sabzi'], nonVegOption: 'Grilled rohu machli + 1 roti + sabzi + dal' },
    { _key: 'dmp5', slotName: 'Shaam', slotTime: '4-5 PM', slotEmoji: '🌇', vegOptions: ['Adrak wali chai (1 cup) + 4-5 akhrot', 'Jeera paani (warm) + bhuna chana (small handful)'], nonVegOption: '' },
    { _key: 'dmp6', slotName: 'Raat', slotTime: '7-8 PM', slotEmoji: '🌙', vegOptions: ['2 roti + arhar dal + karela sabzi', 'Khichdi (moong dal + brown rice) + thodi si ghee'], nonVegOption: 'Chicken soup (no cream) + 1 roti + sabzi' },
    { _key: 'dmp7', slotName: 'Sone Se Pehle', slotTime: '9 PM', slotEmoji: '😴', vegOptions: ['Warm haldi doodh (dairy-free: haldi + warm paani + shahad)', 'Warm paani + saunf + mishri — bloating aur cramping dono mein help karta hai'], nonVegOption: '' },
  ],

  samplePlan4Day: [
    {
      _key: 'sp1',
      day: 'Din 1',
      vegSubah: 'Warm adrak paani',
      vegNashta: 'Daliya + palak tadka',
      vegDopahar: 'Jowar roti + moong dal + gajar sabzi',
      vegShaam: 'Adrak chai + akhrot',
      vegRaat: 'Khichdi + ghee',
      nonVegNashta: '2 boiled ande + bajra roti',
      nonVegDopahar: 'Grilled rohu + roti + sabzi',
      nonVegRaat: 'Chicken soup + 1 roti',
    },
    {
      _key: 'sp2',
      day: 'Din 2',
      vegSubah: 'Haldi + kali mirch paani',
      vegNashta: 'Poha + methi + gajar',
      vegDopahar: 'Brown rice + masoor dal + lauki sabzi',
      vegShaam: 'Jeera paani + bhuna chana',
      vegRaat: '2 roti + arhar dal + palak sabzi',
      nonVegNashta: 'Daliya (same)',
      nonVegDopahar: 'Boiled anda + masoor dal + lauki',
      nonVegRaat: '2 roti + arhar dal (same)',
    },
    {
      _key: 'sp3',
      day: 'Din 3',
      vegSubah: 'Warm adrak paani + shahad',
      vegNashta: 'Oats with seb aur dalchini',
      vegDopahar: 'Bajra roti + kala chana curry + salad',
      vegShaam: 'Adrak chai + 4-5 akhrot',
      vegRaat: 'Khichdi + karela sabzi',
      nonVegNashta: '2 boiled ande + 1 roti',
      nonVegDopahar: 'Grilled katla + bajra roti + sabzi',
      nonVegRaat: 'Khichdi (same)',
    },
    {
      _key: 'sp4',
      day: 'Din 4',
      vegSubah: 'Haldi paani',
      vegNashta: 'Moong dal chilla + kheera chutney',
      vegDopahar: 'Jowar roti + masoor dal + palak sabzi',
      vegShaam: 'Jeera paani + bhuna chana',
      vegRaat: 'Brown rice + lauki dal + salad',
      nonVegNashta: 'Moong dal chilla (same)',
      nonVegDopahar: 'Chicken soup + roti + sabzi',
      nonVegRaat: 'Brown rice + masoor dal (same)',
    },
  ],

  specialSituations: [
    {
      _key: 'ss1',
      situationType: 'flareUp',
      title: 'Flare-Up / Dard Bahut Zyada Ho Tab',
      emoji: '😣',
      tips: [
        'Us din sirf khichdi, daliya ya warm soup khao — heavy protein aur dairy avoid karo',
        'Fried, maida aur mirch wala khaana bilkul band — inse prostaglandin release aur badh jaati hai',
        'Warm adrak paani ya jeera paani har 2-3 ghante mein peete raho — internally heat deta hai aur cramping reduce karta hai',
      ],
    },
    {
      _key: 'ss2',
      situationType: 'fasting',
      title: 'Vrat / Fasting',
      emoji: '🙏',
      tips: [
        'Sabudana khichdi (without too much ghee) — light aur easy to digest hai period mein',
        'Kuttu ki roti + aloo sabzi — kuttu ka flour anti-inflammatory hai, maida jaisa nahi',
        'Vrat mein sabudana vada (fried) bilkul avoid karo — fried form mein trans fat cramping aur badha deta hai',
        'Agar period mein dard bahut zyada ho toh pura fast avoid karo — khali pet se cramping aur badh sakti hai',
      ],
    },
    {
      _key: 'ss3',
      situationType: 'eatingOut',
      title: 'Bahar Khana Ho (Restaurant / Dhaba)',
      emoji: '🍽️',
      tips: [
        'Dal tadka + roti ya brown rice order karo — sabse safe option',
        'Fried items avoid karo — dal makhani, paneer butter masala bhi avoid — cream + butter prostaglandin badhate hain',
        'Hack: Khaane se pehle ek glass warm paani order karo — digestion slow karta hai aur overeating se bachata hai',
      ],
    },
    {
      _key: 'ss4',
      situationType: 'travel',
      title: 'Travel Mein',
      emoji: '✈️',
      tips: [
        'Carry karo: bhuna chana, akhrot, dry amla, oats packets — train/flight mein safe options',
        'Hotel mein: dal + roti order karo — avoid karo buffet fried items aur packaged snacks',
      ],
    },
  ],

  proTip: 'Period shuru hone se 2-3 din pehle se hi adrak chai ya warm adrak paani start kar do — prostaglandin level build-up phase mein hi control karna zyada effective hota hai, period aane ke baad nahi.',
  importantNote: 'Ye chart ek general guide hai. Dysmenorrhoea ke peeche koi underlying condition bhi ho sakti hai — jaise endometriosis ya PCOS. Apni condition ke hisaab se apne homoeopath se personalized plan zaroor banwayein.',
  homeopathyDiet: 'Jab aap prostaglandin-badhane wale foods kam karte hain — homoeopathic medicines uterine inflammation pe zyada effectively kaam karti hain. Diet sahi ho toh treatment response clearly faster hota hai.',

  faqs: [
    {
      _key: 'faq1',
      question: 'Kya period dard mein papaya khana chahiye?',
      answer: 'Haan — papaya period dard mein allowed aur helpful hai.\nPapaya mein papain enzyme hota hai jo uterine muscle contraction smooth karta hai aur cramping reduce karta hai.\nRipe papaya period shuru hone se 2-3 din pehle se khana zyada effective hai.\nOverripe ya bahut zyada meetha papaya ek baar mein zyada mat khao — blood sugar spike se cramping badh sakti hai.\nApne doctor se poochho agar aapko koi aur condition bhi hai.',
    },
    {
      _key: 'faq2',
      question: 'Kya period ke dino mein dahi khana theek hai?',
      answer: 'Ghar ka fresh bana dahi — ek small katori — allowed hai.\nPackaged ya market ka set dahi avoid karo — usme tyramine zyada hota hai jo cramping worse kar sakta hai.\nFull fat cream-based dahi bhi avoid karo — saturated fat prostaglandin production badhata hai.\nThin chaas (mattha) bhi okay hai — cooling effect deta hai aur digestion ke liye bhi better hai.',
    },
    {
      _key: 'faq3',
      question: 'Diet se period dard mein kitne cycle mein fark dikhta hai?',
      answer: 'Anti-inflammatory diet consistently follow karo toh 2-3 menstrual cycles mein fark dikhna shuru ho jaata hai.\nEk cycle mein magical change expect mat karo — prostaglandin balance banna time leta hai.\nJo log period se 5-7 din pehle se hi diet change karte hain unka response zyada clearly dikhta hai.\nHomeopathic treatment ke saath sahi diet ho toh progress faster hoti hai.',
    },
    {
      _key: 'faq4',
      question: 'Period dard mein chai peena theek hai kya?',
      answer: 'Ek cup adrak wali chai subah — allowed hai aur actually helpful bhi hai.\nPlain chai ya 3+ cups — avoid karo — caffeine uterine blood vessels constrict karta hai aur cramping badh jaati hai.\nAdrak chai, tulsi chai, chamomile chai — ye sab better options hain period ke dino mein.\nCold coffee, energy drinks — bilkul avoid karo — caffeine + sugar combination worst hai dysmenorrhoea mein.',
    },
    {
      _key: 'faq5',
      question: 'Period mein vrat kar sakte hain?',
      answer: 'Mild dard mein vrat possible hai — lekin khali pet bilkul nahi.\nSabudana khichdi, kuttu ki roti, fruits — ye vrat-friendly aur safe options hain.\nAgar dard bahut zyada hai toh us din ka vrat avoid karo — khali pet prostaglandin effect amplify hota hai.\nVrat mein pani zyada piyo — dehydration cramping aur badha sakta hai.',
    },
    {
      _key: 'faq6',
      question: 'Kya mirch khane se period dard badh jaata hai?',
      answer: 'Haan — bahut zyada mirch wala khaana period dard mein clearly worse karta hai.\nCapsaicin gut mein inflammation trigger karta hai jo uterine area mein pain refer karta hai.\nThodi si mirch (rozana ki cooking mein) okay hai — lekin period ke dino mein extra spicy khaana avoid karo.\nBahut theeki chutney, achaari khaana, street food — period ke 4-5 dino mein band rakho.',
    },
    {
      _key: 'faq7',
      question: 'Homeopathic medicine ke saath koi khaana band karna padta hai?',
      answer: 'Kuch specific homoeopathic medicines ke saath coffee aur strong smell avoid karna better hota hai.\nLekin ye har medicine pe apply nahi hota — apne doctor se specifically poochho.\nDysmenorrhoea ke liye generally: fried food, alcohol, aur bahut zyada caffeine waise bhi avoid karna chahiye — medicine ke karan nahi, disease ke karan.\nHar patient ki sensitivity alag hoti hai — generalize mat karo.',
    },
    {
      _key: 'faq8',
      question: 'Dysmenorrhoea mein non-veg band karna padega?',
      answer: 'Poora band karne ki zaroorat nahi — lekin type aur cooking method bahut matter karta hai.\nGrilled/boiled machli aur boiled ande — allowed hain — omega-3 aur Vitamin D period pain mein help karte hain.\nRed meat (gosht, mutton) aur fried non-veg — avoid karo — arachidonic acid se pro-inflammatory prostaglandin directly badhta hai.\nPeriod ke dard waale dino mein light non-veg prefer karo — heavy mutton curry avoid karo.',
    },
    {
      _key: 'faq9',
      question: 'Kya period dard mein namak kam khana chahiye?',
      answer: 'Haan — period ke dono mein namak clearly kam karna chahiye.\nZyada sodium body mein water retention aur bloating badhata hai — jo uterine pressure aur pain dono amplify karta hai.\nPackaged namkeen, chips, papad, soya sauce — in sab mein hidden sodium bahut zyada hota hai.\nGhar ka fresh khana khao — bahar ka ya packaged food naturally zyada salty hota hai.',
    },
    {
      _key: 'faq10',
      question: 'Kya kela khana dysmenorrhoea mein safe hai?',
      answer: 'Haan — fresh ya slightly raw kela allowed aur helpful hai.\nKele mein magnesium aur potassium dono hote hain — ye dono uterine muscle cramping ko reduce karte hain.\nOverripe ya bahut pakka kela avoid karo — usme natural sugar zyada hoti hai aur tyramine bhi badhta hai.\nEk kela din mein — theek hai. Zyada na khao especially agar blood sugar ya PCOS issue bhi ho.',
    },
    {
      _key: 'faq11',
      question: 'Dysmenorrhoea mein kaunsa tel use karein?',
      answer: 'Sarson ka tel ya til ka tel — cooking ke liye best options hain.\nYe dono omega fatty acid balance better rakhte hain — prostaglandin E2 production kam hoti hai.\nDeep frying ke liye koi bhi tel avoid karo — cooking method zyada matter karta hai.\nRefined oil / vanaspati / dalda — bilkul avoid — trans fat direct prostaglandin booster hai.',
    },
  ],

  sources: [
    { _key: 's1', name: 'Guzeldere HKB et al — The relationship between dietary habits and menstruation problems in women: a cross-sectional study — BMC Women\'s Health', year: '2024', url: 'https://pubmed.ncbi.nlm.nih.gov/38997663' },
    { _key: 's2', name: 'Ciolek A, Kostecka M et al — An Assessment of Women\'s Knowledge of the Menstrual Cycle and the Influence of Diet on Menstrual Distress — Nutrients', year: '2023', url: 'https://pubmed.ncbi.nlm.nih.gov/38201899' },
    { _key: 's3', name: 'Goldberg RJ, Katz J — A meta-analysis of the analgesic effects of omega-3 polyunsaturated fatty acid supplementation for inflammatory joint pain — Pain', year: '2007', url: 'https://pubmed.ncbi.nlm.nih.gov/17335973' },
    { _key: 's4', name: 'ICMR-NIN — Dietary Guidelines for Indians', year: '2024', url: 'https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf' },
  ],

  quickFacts: {
    mistake: 'Period ke dino mein bahut zyada chai peena ya fried food khana — dono prostaglandin badhate hain aur dard worse karte hain',
    mustEat: 'Adrak (fresh) — gingerol prostaglandin synthesis ko directly inhibit karta hai — cramping mein proven natural relief',
    mustAvoid: 'Red meat (gosht/mutton) — arachidonic acid ka sabse zyada source — pro-inflammatory prostaglandin E2 directly badhata hai',
  },

  doctorNote: 'Mere dysmenorrhoea patients mein jo log period se ek hafte pehle se hi fried food, red meat aur zyada chai band kar dete hain unka dard clearly less intense hota hai — akele period ke din diet change karke nahi, pehle se karo toh fark dikhta hai. — Dr. Shadab Khan, MD Homoeopath',
  reviewDate: 'May 2026',

  shareTextGreenRed: 'Dysmenorrhoea (Period Dard) mein kya khayein, kya nahi — complete list: homeopedia.in/diet/dysmenorrhoea',
  shareTextMealPlan: 'Dysmenorrhoea ke liye 4-din ka Indian diet plan: homeopedia.in/diet/dysmenorrhoea',
  shareTextPage: 'Dysmenorrhoea Diet Guide — green list, meal plan, special situations sab: homeopedia.in/diet/dysmenorrhoea',

  publishedAt: new Date().toISOString(),
}

async function seed() {
  console.log('🌱 Seeding Dysmenorrhoea diet chart...')
  await client.createOrReplace(doc)
  console.log('✅ Dysmenorrhoea diet chart seeded — homeopedia.in/diet/dysmenorrhoea')
}

seed().catch(console.error)
