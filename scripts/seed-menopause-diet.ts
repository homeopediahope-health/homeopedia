import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'diet-menopause',
  _type: 'diet',
  title: 'Menopause (Rajo Nivritti) Diet Chart',
  hindiName: 'Rajo Nivritti / Maasik Band Hona',
  slug: { _type: 'slug', current: 'menopause' },
  relatedDiseaseSlug: 'menopause',
  category: "Women's",
  metaTitle: 'Menopause (Rajo Nivritti) Diet — Kya Khayein Kya Nahi | Homeopedia',
  metaDescription: 'Menopause diet chart — green list, red list, hot flashes ke liye khaana, veg aur non-veg dono. Dr. Shadab Khan. Doctor-reviewed. Homeopedia.in',
  intro: 'Menopause mein estrogen level girta hai — aur yahi hormone gut health, bone density aur mood ko directly affect karta hai — isliye diet ka direct impact symptoms pe padta hai.\n\nNeeche complete guide hai — green list, red list, daily meal plan, veg aur non-veg dono options, aur vrat aur travel jaise special situations.',

  eatingHabits: [
    { _key: 'eh1', habit: 'Subah khaali pet ek glass warm paani piyo', reason: 'gut motility maintain hoti hai jo estrogen metabolism ke liye zaroori hai' },
    { _key: 'eh2', habit: 'Raat 7 baje ke baad heavy khaana avoid karo', reason: 'raat mein slow digestion se hot flashes aur night sweats zyada trigger hote hain' },
    { _key: 'eh3', habit: 'Har 3-4 ghante mein kuch khao', reason: 'blood sugar stable rakhne se mood swings aur irritability kam hoti hai jo menopause mein common hai' },
  ],

  vegGreenList: [
    {
      _key: 'vgl1',
      categoryName: 'Anaj / Grains',
      emoji: '🌾',
      items: [
        { _key: 'i1', food: 'Daliya (oats/broken wheat)', reason: 'fiber se gut mein phytoestrogen absorption better hoti hai' },
        { _key: 'i2', food: 'Brown rice', reason: 'complex carbs — blood sugar spike nahi hoti jo hot flashes trigger karti hai' },
        { _key: 'i3', food: 'Ragi (nachni)', reason: 'calcium rich — estrogen girne se jo bone loss hoti hai usse protect karta hai' },
        { _key: 'i4', food: 'Jowar / bajra roti', reason: 'magnesium se sleep disturbance aur mood swings menopause mein kam hote hain' },
      ],
    },
    {
      _key: 'vgl2',
      categoryName: 'Sabziyaan / Vegetables',
      emoji: '🥦',
      items: [
        { _key: 'i5', food: 'Methi (fresh ya seeds)', reason: 'phytoestrogen + calcium dono — menopause ke dono major issues address karta hai' },
        { _key: 'i6', food: 'Palak', reason: 'iron + folate — menopause mein fatigue ka common reason iron deficiency hai' },
        { _key: 'i7', food: 'Gajar', reason: 'beta-carotene skin dryness kam karta hai jo estrogen decline ka direct side effect hai' },
        { _key: 'i8', food: 'Lauki', reason: 'light, easy to digest — raat ke khaane mein best — heavy vegetables se night sweats bhadte hain' },
        { _key: 'i9', food: 'Karela', reason: 'blood sugar regulate karta hai — menopause mein insulin resistance naturally badhti hai' },
        { _key: 'i10', food: 'Broccoli', reason: 'indole-3-carbinol — estrogen metabolism liver mein improve karta hai' },
      ],
    },
    {
      _key: 'vgl3',
      categoryName: 'Phal / Fruits',
      emoji: '🍎',
      items: [
        { _key: 'i11', food: 'Seb (apple)', reason: 'quercetin antioxidant — cardiovascular risk jo menopause ke baad badhta hai usse reduce karta hai' },
        { _key: 'i12', food: 'Papaya', reason: 'digestive enzyme papain — gut health improve hoti hai jo phytoestrogen absorption ke liye zaroori hai' },
        { _key: 'i13', food: 'Amla', reason: 'vitamin C + antioxidants — collagen synthesis support karta hai jo skin aur joint health ke liye' },
        { _key: 'i14', food: 'Nar (pomegranate)', reason: 'ellagic acid — natural estrogen-like compound — hot flashes mein helpful' },
        { _key: 'i15', food: 'Jamun (seasonal)', reason: 'blood sugar control — menopause mein diabetes risk badhti hai' },
      ],
    },
    {
      _key: 'vgl4',
      categoryName: 'Dal aur Protein',
      emoji: '🫘',
      items: [
        { _key: 'i16', food: 'Moong dal', reason: 'easily digestible protein — bloating nahi hoti — menopause mein gut sensitivity badhti hai' },
        { _key: 'i17', food: 'Soya chunks / soya milk (fresh ghar ka)', reason: 'isoflavones hot flashes ki frequency kam karte hain — evidence-backed' },
        { _key: 'i18', food: 'Chana (kabuli ya kala)', reason: 'phytoestrogen + fiber dono — estrogen metabolism aur gut health ek saath' },
        { _key: 'i19', food: 'Masoor dal', reason: 'protein + iron — fatigue aur anaemia menopause mein common hain — dono address karta hai' },
      ],
    },
    {
      _key: 'vgl5',
      categoryName: 'Drinks, Masale aur Tel',
      emoji: '🫖',
      items: [
        { _key: 'i20', food: 'Haldi + kali mirch wala doodh (haldi doodh)', reason: 'curcumin joint inflammation reduce karta hai jo estrogen girne se aata hai — kali mirch absorption badhati hai' },
        { _key: 'i21', food: 'Adrak chai (kum sugar)', reason: 'anti-inflammatory + nausea — menopause mein dono common hain' },
        { _key: 'i22', food: 'Flaxseeds (alsi)', reason: 'lignan phytoestrogen — hot flashes reduce karte hain — roti ya daliya mein mila lo' },
        { _key: 'i23', food: 'Til (sesame seeds)', reason: 'calcium + phytoestrogen dono — menopause ke liye ek acha combination' },
        { _key: 'i24', food: 'Sarson ka tel / til ka tel', reason: 'omega-6 aur vitamin E — skin dryness aur inflammation dono' },
        { _key: 'i25', food: 'Tulsi + mulethi herbal chai', reason: 'cortisol regulate karta hai — menopause mein stress response exaggerated hoti hai' },
      ],
    },
  ],

  nonVegAllowed: [
    { _key: 'nva1', food: 'Anda (boiled)', reason: 'choline + vitamin D — menopause mein brain fog aur bone health dono ke liye zaroori' },
    { _key: 'nva2', food: 'Rohu / katla machli', reason: 'omega-3 fatty acids — hot flashes aur cardiovascular risk dono reduce karte hain' },
    { _key: 'nva3', food: 'Surmai (Indian mackerel)', reason: 'vitamin D + omega-3 — calcium absorption ke liye vitamin D menopause mein critical hai' },
    { _key: 'nva4', food: 'Chicken (boiled / grilled only)', reason: 'lean protein — muscle mass maintain karna menopause mein metabolic health ke liye zaroori hai' },
  ],

  nonVegAvoid: [
    { _key: 'nvav1', food: 'Fried chicken / tali hui machli', reason: 'trans fat se estrogen metabolism disrupt hoti hai — cooking method matter karta hai' },
    { _key: 'nvav2', food: 'Processed meat (sausage, salami)', reason: 'preservatives aur sodium se hot flashes aur bloating trigger hote hain' },
    { _key: 'nvav3', food: 'Red meat (mutton)', reason: 'saturated fat — menopause mein cardiovascular risk badhta hai — red meat usse aur badhata hai' },
    { _key: 'nvav4', food: 'Shellfish', reason: 'heavy, hard to digest — menopause mein gut sensitivity already high hoti hai' },
  ],

  redList: [
    {
      _key: 'rl1',
      categoryName: 'Processed aur Maida',
      emoji: '🚫',
      items: [
        { _key: 'ri1', food: 'Maida (white flour) products', reason: 'blood sugar spike karta hai — directly hot flashes aur mood swings trigger karta hai menopause mein' },
        { _key: 'ri2', food: 'Packaged biscuits / namkeen', reason: 'refined carbs + sodium — bloating aur water retention badhate hain' },
        { _key: 'ri3', food: 'White bread / pav', reason: 'glycemic index high — insulin spike se menopause weight gain aur fatigue bhadte hain' },
      ],
    },
    {
      _key: 'rl2',
      categoryName: 'Dairy aur Heavy Foods',
      emoji: '🚫',
      items: [
        { _key: 'ri4', food: 'Packaged full-fat dahi (market wala)', reason: 'high saturated fat — menopause mein cardiovascular risk pe burden daalta hai — ghar ka fresh chhachh ya dahi better alternative' },
        { _key: 'ri5', food: 'Cheese / paneer zyada matra mein', reason: 'saturated fat se LDL cholesterol badhta hai jo menopause ke baad risk factor ban jaata hai' },
        { _key: 'ri6', food: 'Mawa / khoya mithai', reason: 'heavy fat + sugar combination — weight gain aur hot flashes dono trigger karta hai' },
      ],
    },
    {
      _key: 'rl3',
      categoryName: 'Teekha, Meetha aur Oily',
      emoji: '🚫',
      items: [
        { _key: 'ri7', food: 'Bahut zyada teekha khaana (mirch)', reason: 'capsaicin se body temperature rise hoti hai — hot flashes directly trigger hote hain' },
        { _key: 'ri8', food: 'Refined sugar (mithai, cold drinks)', reason: 'estrogen metabolism disturb karta hai — mood swings aur fatigue badhata hai' },
        { _key: 'ri9', food: 'Deep fried snacks (pakoda, samosa)', reason: 'trans fat + inflammatory oils — menopause mein low-grade inflammation already hoti hai — ye usse badhate hain' },
      ],
    },
    {
      _key: 'rl4',
      categoryName: 'Drinks',
      emoji: '🚫',
      items: [
        { _key: 'ri10', food: 'Alcohol', reason: 'estrogen metabolism liver mein kharab karta hai — hot flashes aur sleep disturbance dono badh jaate hain' },
        { _key: 'ri11', food: 'Coffee 3+ cups daily', reason: 'caffeine se sleep disturbance, anxiety aur hot flashes menopause mein teevra ho jaate hain [1 cup subah theek hai — amount matter karta hai]' },
        { _key: 'ri12', food: 'Cold drinks / soda', reason: 'phosphoric acid — calcium absorption kam karta hai — menopause mein bone density pe directly bura asar' },
      ],
    },
  ],

  dailyMealPlan: [
    { _key: 'dmp1', slotName: 'Subah Uthke', slotTime: '6-7 AM', slotEmoji: '🌅', vegOptions: ['Warm paani + 1 tsp alsi (flaxseeds) — phytoestrogen din ki shuruaat mein', 'Bheegi methi dana (1 tsp) — phytoestrogen + blood sugar balance'], nonVegOption: '' },
    { _key: 'dmp2', slotName: 'Nashta', slotTime: '8-9 AM', slotEmoji: '🍽️', vegOptions: ['Daliya (savoury) with palak + gajar', '2 ragi roti + ghar ka dahi (fresh) + adrak ki chai'], nonVegOption: '2 ande boiled + 1 roti + tulsi chai' },
    { _key: 'dmp3', slotName: 'Mid-Morning', slotTime: '11 AM', slotEmoji: '☀️', vegOptions: ['1 seb ya nar (pomegranate) — antioxidants', 'Bhuney chane (handful) — protein + fiber'], nonVegOption: '' },
    { _key: 'dmp4', slotName: 'Dopahar', slotTime: '1-2 PM', slotEmoji: '🍱', vegOptions: ['2 jowar / bajra roti + moong dal + lauki sabzi + salad', 'Brown rice + masoor dal + palak sabzi + 1 katori chhachh'], nonVegOption: 'Grilled machli (rohu/katla) + 2 roti + sabzi' },
    { _key: 'dmp5', slotName: 'Shaam', slotTime: '4-5 PM', slotEmoji: '🌇', vegOptions: ['Til ke ladoo (ghar ke, bina refined sugar) + tulsi mulethi chai', 'Roasted makhana (light namak) + adrak chai'], nonVegOption: '' },
    { _key: 'dmp6', slotName: 'Raat', slotTime: '7-8 PM', slotEmoji: '🌙', vegOptions: ['2 roti + turai / lauki sabzi + dal', 'Khichdi (moong dal + rice) + ghee (1 tsp)'], nonVegOption: 'Chicken soup (no cream, no fry) + 1 roti' },
    { _key: 'dmp7', slotName: 'Sone Se Pehle', slotTime: '9 PM', slotEmoji: '😴', vegOptions: ['Haldi doodh (ghar ka — kum sugar ya gud thoda) — joint pain + sleep dono ke liye', 'Warm saunf paani — bloating aur sleep disturbance menopause mein common — dono address karta hai'], nonVegOption: '' },
  ],

  samplePlan4Day: [
    {
      _key: 'sp1',
      day: 'Din 1',
      vegSubah: 'Warm paani + alsi 1 tsp',
      vegNashta: 'Daliya with gajar aur palak + adrak chai',
      vegDopahar: '2 bajra roti + moong dal + lauki sabzi + salad',
      vegShaam: 'Bhuney chane + tulsi chai',
      vegRaat: 'Ragi roti 1 + masoor dal + karela sabzi',
      nonVegNashta: '2 ande boiled + 1 roti + adrak chai',
      nonVegDopahar: 'Grilled rohu machli + 2 roti + lauki sabzi + salad',
      nonVegRaat: 'Chicken soup (no cream) + 1 roti',
    },
    {
      _key: 'sp2',
      day: 'Din 2',
      vegSubah: 'Bheegi methi 1 tsp + warm paani',
      vegNashta: 'Moong dal chilla (2) + pudina chutney',
      vegDopahar: 'Brown rice + chana dal + palak sabzi + chhachh',
      vegShaam: '1 seb + til ke seeds (1 tsp)',
      vegRaat: 'Khichdi (moong + rice) + ghee + lauki',
      nonVegNashta: 'Anda bhurji (oil kam, no butter) + 1 roti',
      nonVegDopahar: 'Brown rice + surmai curry (light) + palak sabzi',
      nonVegRaat: 'Khichdi + grilled chicken (thin pieces, no fry)',
    },
    {
      _key: 'sp3',
      day: 'Din 3',
      vegSubah: 'Warm paani + amla powder (1/2 tsp)',
      vegNashta: 'Poha (no onion optional) + gajar + adrak chai',
      vegDopahar: '2 jowar roti + arhar dal + turai sabzi + salad',
      vegShaam: 'Roasted makhana + mulethi chai',
      vegRaat: '2 roti + soya curry (ghar ka) + salad',
      nonVegNashta: '2 boiled ande + poha (small portion)',
      nonVegDopahar: '2 roti + katla machli curry (light) + turai',
      nonVegRaat: '2 roti + chicken (boiled shredded) + dal',
    },
    {
      _key: 'sp4',
      day: 'Din 4',
      vegSubah: 'Warm paani + nimbu (half) — without sugar',
      vegNashta: 'Ragi daliya (sweet — gud + banana) + doodh',
      vegDopahar: 'Brown rice + masoor dal + broccoli sabzi + 1 katori ghar ka dahi',
      vegShaam: 'Nar (pomegranate) / papaya',
      vegRaat: '2 roti + palak sabzi + moong dal soup',
      nonVegNashta: 'Egg white omelette (no butter) + 1 roti',
      nonVegDopahar: 'Brown rice + rohu machli + broccoli sabzi + dahi',
      nonVegRaat: '2 roti + chicken soup (no cream) + sabzi',
    },
  ],

  specialSituations: [
    {
      _key: 'ss1',
      situationType: 'flareUp',
      title: 'Flare-Up / Hot Flashes Zyada Hon Tab',
      emoji: '😣',
      tips: [
        'Us din sirf khichdi, daliya, lauki — cold/light foods prefer karo — body temperature internally cool rehti hai',
        'Teekha, mirch, fried kuch bhi, aur chai-coffee avoid karein — temperature triggers us din minimize karo',
        'Ek glass anda (room temp) saunf paani har 2 ghante — gut heat reduce karta hai aur bloating bhi',
      ],
    },
    {
      _key: 'ss2',
      situationType: 'fasting',
      title: 'Vrat / Fasting',
      emoji: '🙏',
      tips: [
        'Sabudana khichdi (zyada ghee ke bina) + singhare ka atta safe options hain — complex carbs se blood sugar stable',
        'Kuttu ki roti + ghar ka dahi — calcium + protein dono milte hain — bone health ke liye vrat mein bhi zaroor',
        'Vrat mein chawal ka upvas avoid karein agar blood sugar already unstable hai — menopause mein insulin resistance common hai — doctor se pehle poochh lein',
      ],
    },
    {
      _key: 'ss3',
      situationType: 'eatingOut',
      title: 'Bahar Khana Ho (Restaurant / Dhaba)',
      emoji: '🍽️',
      tips: [
        'Dal makhani + roti — better choice hai — avoid paneer butter masala aur cream-based curries',
        'Salad + dal + tandoori roti — sabse safe combination — fried starters order mat karo',
        'Practical hack: Pehle ek glass paani + salad khao — overeating automatically kam hogi — menopause mein weight gain ki tendency hoti hai',
      ],
    },
    {
      _key: 'ss4',
      situationType: 'travel',
      title: 'Travel Mein',
      emoji: '✈️',
      tips: [
        'Carry karo: roasted chana, amla candy, ragi crackers (ghar ke ya plain brand), dry til ke ladoo',
        'Train / hotel mein: plain dal chawal, idli (without coconut chutney), boiled egg — ye sabse safe options hain — fried ya cream-based avoid',
      ],
    },
  ],

  proTip: 'Menopause mein jo patients subah uthke pehle 20 minute mein protein khaati hain (dal, anda, dahi) — unka mood aur energy level poore din clearly better rehta hai — sirf nashta time nahi, timing bhi matter karta hai.',
  importantNote: 'Ye chart ek general guide hai — har mahila ki menopause journey alag hoti hai aur symptoms ka intensity vary karta hai. Apni specific symptoms ke hisaab se apne homoeopath se personalized diet plan zaroor banwayein.',
  homeopathyDiet: 'Jab diet mein inflammatory foods (maida, sugar, alcohol) kam hoti hain, toh homeopathic medicines hormonal imbalance pe better kaam karti hain — body ka inflammation load reduced hota hai aur treatment response faster hoti hai.',

  faqs: [
    {
      _key: 'faq1',
      question: 'Kya menopause mein dahi khana theek hai?',
      answer: 'Haan — lekin ghar ka fresh bana dahi (chhachh bhi) theek hai. Packaged / market ka full-fat dahi avoid karein.\nGhar ka dahi probiotics deta hai jo gut health maintain karta hai — aur gut health estrogen metabolism ke liye directly zaroor hai.\nPackaged dahi mein saturated fat zyada hoti hai jo menopause mein cardiovascular risk badhati hai.\nEk chhoti katori ghar ka dahi dopahar ke khane ke saath safe hai.',
    },
    {
      _key: 'faq2',
      question: 'Menopause mein chawal (rice) khana band karna padega?',
      answer: 'Nahi — completely band karne ki zaroorat nahi.\nWhite rice ko brown rice se replace karo — glycemic index kam hai — blood sugar spike nahi hogi.\nWhite rice zyada matra mein + raat ko = weight gain aur blood sugar instability menopause mein.\nDopahar mein moderate quantity mein brown rice safe hai.\nRaat ko khichdi (moong + rice) bhi theek hai — light hai.',
    },
    {
      _key: 'faq3',
      question: 'Menopause mein diet se kitne din mein fark dikhta hai?',
      answer: 'Hot flashes pe diet ka asar 4-6 hafte mein dekhne milta hai — especially jab inflammatory foods reduce karo.\nMood aur energy pe asar thoda pehle — 2-3 hafte mein feel hone lagta hai jab blood sugar stable rehne lagti hai.\nBone health aur weight pe asar 3-6 mahine ka process hai — long-term consistency matter karta hai.\nYe general observation hai — har person ki timeline alag hoti hai.',
    },
    {
      _key: 'faq4',
      question: 'Menopause mein chai aur coffee peena theek hai?',
      answer: '1 cup chai ya coffee subah — theek hai.\n3+ cups daily avoid karein — caffeine se hot flashes, anxiety aur raat ki neend teevra hoti hai — menopause mein ye sab symptoms already hote hain.\nTulsi chai, mulethi chai, adrak chai — better alternatives hain — caffeine nahi, benefits zyada.\nCoffee achanak band mat karo — gradual reduce karo.',
    },
    {
      _key: 'faq5',
      question: 'Kya menopause mein vrat / fast kar sakte hain?',
      answer: 'Chhote vrat (ek din) generally safe hain agar blood sugar stable hai.\nVrat mein kuttu, singhara, sabudana (ghee kam), ghar ka dahi — ye safe options hain.\nAgar diabetes ya pre-diabetes hai — toh lambe vrat se blood sugar crash hone ka risk hai — doctor se pehle poochho.\nVrat ke dauraan pani kam mat karo — dehydration hot flashes trigger karti hai.',
    },
    {
      _key: 'faq6',
      question: 'Menopause mein zyada namak ya namkeen khaana theek hai?',
      answer: 'Nahi — menopause mein sodium se water retention aur bloating badly affect hoti hai.\nHigh sodium se blood pressure bhi badhta hai — menopause ke baad cardiovascular risk waise hi badhti hai.\nPackaged namkeen, papad, achaar, processed foods mein hidden sodium bahut zyada hoti hai — label check karo.\nGhar ka khaana, kum namak — safest option hai.',
    },
    {
      _key: 'faq7',
      question: 'Menopause mein soya khana chahiye ya nahi?',
      answer: 'Haan — soya in moderate amount safe hai aur helpful bhi.\nSoya mein isoflavones hote hain — ye natural phytoestrogen hain — hot flashes ki frequency pe positive asar dekha gaya hai.\nGhar ka soya milk ya soya chunks — theek hai.\nPackaged processed soya products — avoid karein.\nAgar thyroid condition bhi hai saath mein — apne doctor se specifically poochhein — soya thyroid pe bhi effect karta hai.',
    },
    {
      _key: 'faq8',
      question: 'Homeopathic medicine ke saath koi khaana band karna padta hai menopause mein?',
      answer: 'Specific medicine ke hisaab se kuch restrictions hoti hain — ye generalize nahi hota.\nKuch medicines ke saath strong smell — camphor, raw pyaaz, raw lahsun — doctor 30 minute pehle-baad avoid suggest karte hain.\nCoffee ke baare mein — apne specific doctor se poochhein — kuch homeopaths recommend karte hain avoid karna, sab nahi.\nGeneral rule: medicine lene ke 30 minute pehle-baad strong taste/smell wali cheez na khayein — bas itna.',
    },
    {
      _key: 'faq9',
      question: 'Menopause mein non-veg khana chahiye ya band karna padega?',
      answer: 'Band karna zaroor nahi — lekin type aur method matter karta hai.\nAllowed: Boiled/grilled machli (rohu, katla, surmai), boiled ande — omega-3 aur protein dono milte hain.\nAvoid: Fried chicken, red meat, processed meat — inflammation aur cardiovascular risk badhate hain.\nNon-veg roz zaroor nahi — week mein 3-4 baar machli ya anda theek hai.',
    },
    {
      _key: 'faq10',
      question: 'Menopause mein weight badhna rok sakte hain diet se?',
      answer: 'Haan — diet se weight management possible hai lekin overnight nahi hoga.\nKey: Refined sugar, maida, fried foods band karo + protein har meal mein rakho + raat ko light khao.\nMenopause mein metabolism slow hoti hai — isliye same khaana khake bhi weight badh sakta hai — ye normal hai.\nDiet + movement (walk bhi kaafi hai) combination zyada effective hai sirf diet se zyada.\nCrash diet bilkul mat karo — bone density aur muscle mass menopause mein already risk mein hote hain.',
    },
    {
      _key: 'faq11',
      question: 'Menopause mein neend nahi aati — koi khaana help karta hai?',
      answer: 'Haan — kuch foods sleep directly improve karte hain.\nSone se pehle haldi doodh (warm, kum sugar) — curcumin aur warm milk ka tryptophan — dono sleep ke liye helpful.\nSaunf paani (warm) — digestive comfort + mild calming effect.\nRaat ko heavy, fried, bahut teekha — ye sab avoid — digestive discomfort se neend break hoti hai.\nCaffeine 4 baje ke baad bilkul nahi — menopause mein sleep sensitivity zyada hoti hai.',
    },
  ],

  sources: [
    { _key: 's1', name: 'Yelland S, Steenson S, Creedon A, Stanner S — The role of diet in managing menopausal symptoms: A narrative review — Nutrition Bulletin', year: '2023', url: 'https://pubmed.ncbi.nlm.nih.gov/36792552' },
    { _key: 's2', name: 'Pugliese G et al — Mediterranean diet as tool to manage obesity in menopause: A narrative review — Nutrition', year: '2020', url: 'https://pubmed.ncbi.nlm.nih.gov/32979767' },
    { _key: 's3', name: 'Grigolon RB et al — Effects of nutritional interventions on the severity of depressive and anxiety symptoms of women in the menopausal transition and menopause — Menopause', year: '2023', url: 'https://pubmed.ncbi.nlm.nih.gov/36576445' },
    { _key: 's4', name: 'ICMR-NIN — Dietary Guidelines for Indians', year: '2024', url: 'https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf' },
  ],

  quickFacts: {
    mistake: 'Calcium ke liye sirf doodh pe depend karna — jab ki menopause mein ragi, til, palak se calcium zyada effectively absorb hoti hai vitamin D ke saath',
    mustEat: 'Alsi (flaxseeds) — subah khaali pet warm paani ke saath — phytoestrogen ka sabse accessible Indian source hai',
    mustAvoid: 'Bahut zyada teekha mirch wala khaana — capsaicin directly hot flashes trigger karta hai — menopause mein ye number one dietary trigger hai',
  },

  doctorNote: 'Mere menopause patients mein maine notice kiya hai ki jo mahilayein raat ka khaana 7 baje tak kha leti hain aur raat ko haldi doodh leti hain — unka hot flashes ka intensity aur frequency dono baaki patients se clearly kam rehta hai treatment ke saath — sirf medicine nahi, timing bhi matter karti hai. — Dr. Shadab Khan, MD Homoeopath',
  reviewDate: 'May 2026',

  shareTextGreenRed: 'Menopause mein kya khayein, kya nahi — complete list: homeopedia.in/diet/menopause',
  shareTextMealPlan: 'Menopause ke liye 4-din ka Indian diet plan: homeopedia.in/diet/menopause',
  shareTextPage: 'Menopause Diet Guide — green list, meal plan, special situations sab: homeopedia.in/diet/menopause',

  publishedAt: new Date().toISOString(),
}

async function seed() {
  console.log('🌱 Seeding Menopause diet chart...')
  await client.createOrReplace(doc)
  console.log('✅ Menopause diet chart seeded — homeopedia.in/diet/menopause')
}

seed().catch(console.error)
