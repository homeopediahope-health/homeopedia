import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'diet-endometriosis',
  _type: 'diet',
  title: 'Endometriosis Diet Chart',
  hindiName: 'Gathayedra / Anter-Garbhashaya Rog',
  slug: { _type: 'slug', current: 'endometriosis' },
  relatedDiseaseSlug: 'endometriosis',
  category: 'Women',
  metaTitle: 'Endometriosis Diet — Kya Khayein Kya Nahi | Homeopedia',
  metaDescription: 'Endometriosis diet chart — green list, red list, daily meal plan, veg aur non-veg dono. Period pain aur sujan ke liye. Dr. Shadab Khan. Doctor-reviewed. Homeopedia.in',
  intro: 'Endometriosis mein body mein excess estrogen aur chronic inflammation (sujan) hoti hai — kuch foods directly in dono ko badhate hain aur period pain worse karte hain.\n\nNeeche complete guide hai — green list, red list, daily meal plan, veg aur non-veg dono options, aur vrat/travel jaise special situations.',

  eatingHabits: [
    { _key: 'eh1', habit: 'Raat 7 baje ke baad heavy khaana avoid karo', reason: 'late digestion liver pe load deta hai jo estrogen clearance slow karta hai — endometriosis ka core issue' },
    { _key: 'eh2', habit: 'Har subah khaali pet 1 glass lukewarm paani peeo', reason: 'gut motility improve hoti hai jo estrogen waste body se bahar nikalti hai' },
    { _key: 'eh3', habit: 'Ek saath zyada mat khao — chote meals frequent rakhein', reason: 'blood sugar spike se insulin badhta hai jo estrogen dominance aur worse hoti hai' },
  ],

  vegGreenList: [
    {
      _key: 'vgl1',
      categoryName: 'Anaj / Grains',
      emoji: '🌾',
      items: [
        { _key: 'i1', food: 'Brown rice', reason: 'fiber se estrogen gut se bind hokar bahar nikalta hai — white rice ki jagah prefer karein' },
        { _key: 'i2', food: 'Jowar roti', reason: 'gluten-free, gut inflammation kam karta hai jo endometriosis mein commonly linked hoti hai' },
        { _key: 'i3', food: 'Bajra', reason: 'magnesium ka source — period cramps directly kam karta hai muscle relaxation se' },
        { _key: 'i4', food: 'Daliya (oats)', reason: 'beta-glucan fiber estrogen metabolism sahi karta hai — har dopahar ya nashte mein safe' },
      ],
    },
    {
      _key: 'vgl2',
      categoryName: 'Sabziyaan / Vegetables',
      emoji: '🥦',
      items: [
        { _key: 'i5', food: 'Palak', reason: 'iron aur folate — heavy periods mein blood loss replace karta hai, iron deficiency kam karta hai' },
        { _key: 'i6', food: 'Lauki', reason: 'gut cooling effect — endometriosis ki gut inflammation aur bloating mein directly helpful' },
        { _key: 'i7', food: 'Broccoli', reason: 'cruciferous vegetable — DIM compound hota hai jo excess estrogen liver se detox karta hai' },
        { _key: 'i8', food: 'Gajar', reason: 'beta-carotene — oxidative stress kam karta hai jo endometrial lesions ko badhata hai' },
        { _key: 'i9', food: 'Karela', reason: 'blood sugar regulate karta hai — insulin resistance jo endometriosis mein common hai usse rokta hai' },
        { _key: 'i10', food: 'Methi (saag aur dana)', reason: 'iron + Vitamin K combination — heavy bleeding control mein help karta hai' },
      ],
    },
    {
      _key: 'vgl3',
      categoryName: 'Phal / Fruits',
      emoji: '🍎',
      items: [
        { _key: 'i11', food: 'Amla', reason: 'Vitamin C ka concentrated source — sujan kam karta hai aur iron absorption badhata hai (periods mein)' },
        { _key: 'i12', food: 'Papaya', reason: 'papain enzyme hota hai jo uterine muscle relax karta hai — period pain directly kam hoti hai' },
        { _key: 'i13', food: 'Seb (chhilke ke saath)', reason: 'quercetin flavonoid hota hai jo prostaglandin production rokta hai — cramping ka direct cause hai prostaglandin' },
        { _key: 'i14', food: 'Jamun (season mein)', reason: 'anti-inflammatory antioxidants — pelvic sujan mein helpful' },
      ],
    },
    {
      _key: 'vgl4',
      categoryName: 'Dal aur Protein',
      emoji: '🫘',
      items: [
        { _key: 'i15', food: 'Moong dal (chhilki wali)', reason: 'easily digestible — liver pe koi extra load nahi aur estrogen processing smooth hoti hai' },
        { _key: 'i16', food: 'Masoor dal', reason: 'plant iron ka achha source — endometriosis ki heavy periods mein zaroori' },
        { _key: 'i17', food: 'Chana (boiled/roasted)', reason: 'phytoestrogen small amounts mein — body ke excess estrogen ko receptor pe block karta hai' },
        { _key: 'i18', food: 'Tofu (moderate, hafte mein 2-3 baar)', reason: 'isoflavones hain jo weak estrogen effect dete hain lekin excess estrogen receptors ko block karte hain' },
      ],
    },
    {
      _key: 'vgl5',
      categoryName: 'Drinks, Masale aur Tel',
      emoji: '🫚',
      items: [
        { _key: 'i19', food: 'Haldi + kali mirch wali chai', reason: 'curcumin prostaglandin synthesis rokta hai — period pain ka direct mechanism — kali mirch ke bina curcumin absorb nahi hota' },
        { _key: 'i20', food: 'Adrak chai', reason: 'gingerol prostaglandin aur COX enzymes inhibit karta hai — period cramping seedha kam hoti hai' },
        { _key: 'i21', food: 'Sarson ka tel (cooking ke liye)', reason: 'omega-6 to omega-3 ratio better hota hai refined oil se — sujan kam hoti hai' },
        { _key: 'i22', food: 'Desi ghee (chhoti quantity)', reason: 'fat-soluble vitamins absorb karne mein help karta hai jo hormones ke liye zaroori hain' },
        { _key: 'i23', food: 'Tulsi paani ya chai', reason: 'adaptogenic — cortisol balance karta hai jo estrogen dominance ko aur worse karta hai' },
      ],
    },
  ],

  nonVegAllowed: [
    { _key: 'nva1', food: 'Rohu / Katla machhi (boiled ya steamed)', reason: 'omega-3 fatty acids hain jo prostaglandin-2 se prostaglandin-3 shift karte hain — cramping mechanism directly better hota hai' },
    { _key: 'nva2', food: 'Surmai machhi', reason: 'EPA aur DHA highest Indian fish mein — endometrial lesion growth pe anti-inflammatory effect' },
    { _key: 'nva3', food: 'Ande (boiled, 2 tak)', reason: 'choline hota hai jo liver ka estrogen detox support karta hai — white + yolk dono' },
  ],

  nonVegAvoid: [
    { _key: 'nvav1', food: 'Red meat (gosht, mutton)', reason: 'arachidonic acid se prostaglandin-2 badhta hai — endometriosis pain ka seedha trigger hai' },
    { _key: 'nvav2', food: 'Processed chicken (nuggets, sausage, packaged)', reason: 'added hormones aur preservatives — estrogen load badhate hain' },
    { _key: 'nvav3', food: 'Fried machhi ya fried anda', reason: 'cooking ka trans fat arachidonic acid convert hota hai — sujan aur worse hoti hai' },
  ],

  redList: [
    {
      _key: 'rl1',
      categoryName: 'Processed aur Maida',
      emoji: '🚫',
      items: [
        { _key: 'ri1', food: 'Maida (white flour)', reason: 'refined starch blood sugar rapidly spike karta hai jo insulin badhata hai — insulin directly estrogen production stimulate karta hai' },
        { _key: 'ri2', food: 'Packaged biscuits / namkeen', reason: 'trans fat hota hai jo prostaglandin-2 production badhata hai — cramping worse' },
        { _key: 'ri3', food: 'White bread / Pav', reason: 'maida ki tarah same mechanism — gut mein inflammation trigger karta hai' },
      ],
    },
    {
      _key: 'rl2',
      categoryName: 'Dairy aur Heavy Foods',
      emoji: '🥛',
      items: [
        { _key: 'ri4', food: 'Full-fat packaged milk (market wala)', reason: 'commercial dairy mein synthetic hormones hote hain jo estrogen load directly badhate hain' },
        { _key: 'ri5', food: 'Paneer (zyada matra mein)', reason: 'saturated fat se arachidonic acid badhta hai — pelvic inflammation worse hoti hai' },
        { _key: 'ri6', food: 'Cream / Malai', reason: 'high saturated fat — prostaglandin-2 pathway activate karta hai jo endometriosis pain ka main driver hai' },
      ],
    },
    {
      _key: 'rl3',
      categoryName: 'Teekha, Meetha aur Oily',
      emoji: '🍬',
      items: [
        { _key: 'ri7', food: 'Refined sugar (meetha, mithai, cold drinks)', reason: 'sugar se insulin spike hota hai jo estrogen dominance badhata hai — endometriosis ka core hormonal problem' },
        { _key: 'ri8', food: 'Bahut zyada mirch', reason: 'gut lining irritate karta hai — pelvic area ki already inflamed tissue aur sensitive ho jaati hai' },
        { _key: 'ri9', food: 'Deep fried khaana (pakoda, samosa)', reason: 'trans fat se prostaglandin inflammatory pathway activate hoti hai' },
      ],
    },
    {
      _key: 'rl4',
      categoryName: 'Drinks',
      emoji: '🥤',
      items: [
        { _key: 'ri10', food: 'Alcohol', reason: 'liver pe directly load padta hai — alcohol liver ka estrogen detox function slow karta hai — estrogen body mein accumulate hota hai' },
        { _key: 'ri11', food: 'Caffeinated cold drinks (cola)', reason: 'phosphoric acid calcium absorption kam karta hai — period cramps worse' },
        { _key: 'ri12', food: 'Packaged fruit juice', reason: 'added sugar — insulin spike — estrogen dominance cycle continue karta hai' },
        { _key: 'ri13', food: 'Bahut zyada chai / coffee (3+ cups)', reason: 'caffeine uterine blood flow affect karta hai — pain sensitivity badhti hai' },
      ],
    },
  ],

  dailyMealPlan: [
    { _key: 'dmp1', slotName: 'Subah Uthke', slotTime: '6-7 AM', slotEmoji: '🌅', vegOptions: ['Lukewarm paani + adrak ka tukda + nimbu — empty stomach', 'Lukewarm paani + 1 tsp amla powder — Vitamin C + detox'], nonVegOption: '' },
    { _key: 'dmp2', slotName: 'Nashta', slotTime: '8-9 AM', slotEmoji: '🍽️', vegOptions: ['Daliya with palak aur gajar — fiber + iron combination', 'Moong dal cheela (2 nos) + pudina chutney'], nonVegOption: '2 boiled ande + 1 jowar roti + salad' },
    { _key: 'dmp3', slotName: 'Mid-Morning', slotTime: '11 AM', slotEmoji: '☀️', vegOptions: ['1 seb (chhilke ke saath) — quercetin for cramping', 'Bhuna chana (1 mutthi) — plant protein + fiber'], nonVegOption: '' },
    { _key: 'dmp4', slotName: 'Dopahar', slotTime: '1-2 PM', slotEmoji: '🍱', vegOptions: ['2 bajra/jowar roti + moong dal + lauki sabzi + salad', 'Brown rice + masoor dal + broccoli sabzi + dahi (ghar ka)'], nonVegOption: 'Steamed rohu + 1 jowar roti + palak sabzi' },
    { _key: 'dmp5', slotName: 'Shaam', slotTime: '4-5 PM', slotEmoji: '🌇', vegOptions: ['Haldi + adrak wali chai (no milk) + 4-5 akhrot', 'Tulsi chai + roasted makhana (handful)'], nonVegOption: '' },
    { _key: 'dmp6', slotName: 'Raat', slotTime: '7-8 PM', slotEmoji: '🌙', vegOptions: ['1-2 roti + palak sabzi + dal', 'Khichdi (moong + brown rice) + desi ghee (chhoti matra)'], nonVegOption: 'Machhi ka soup (no cream) + 1 roti' },
    { _key: 'dmp7', slotName: 'Sone Se Pehle', slotTime: '9 PM', slotEmoji: '😴', vegOptions: ['Haldi doodh (low-fat ghar ka, bina cheeni)', 'Saunf + jeera warm paani — gut bloating aur cramping dono mein help karta hai'], nonVegOption: '' },
  ],

  samplePlan4Day: [
    {
      _key: 'sp1',
      day: 'Din 1',
      vegSubah: 'Adrak nimbu paani',
      vegNashta: 'Daliya + palak',
      vegDopahar: 'Jowar roti + masoor dal + broccoli sabzi',
      vegShaam: 'Tulsi chai + makhana',
      vegRaat: 'Khichdi + ghee',
      nonVegNashta: '2 boiled ande + 1 roti',
      nonVegDopahar: 'Steamed rohu + jowar roti + broccoli sabzi',
      nonVegRaat: 'Machhi soup + 1 roti',
    },
    {
      _key: 'sp2',
      day: 'Din 2',
      vegSubah: 'Amla paani',
      vegNashta: 'Moong dal cheela + chutney',
      vegDopahar: 'Brown rice + chana dal + gajar sabzi',
      vegShaam: 'Haldi chai + akhrot',
      vegRaat: 'Bajra roti + lauki dal',
      nonVegNashta: 'Moong dal cheela + chutney',
      nonVegDopahar: 'Brown rice + chana dal + gajar sabzi',
      nonVegRaat: 'Machhi + bajra roti',
    },
    {
      _key: 'sp3',
      day: 'Din 3',
      vegSubah: 'Adrak nimbu paani',
      vegNashta: 'Poha + amla chutney',
      vegDopahar: 'Jowar roti + arhar dal + palak sabzi',
      vegShaam: 'Bhuna chana + seb',
      vegRaat: 'Moong dal khichdi',
      nonVegNashta: '1 boiled anda + poha',
      nonVegDopahar: 'Steamed surmai + jowar roti + palak sabzi',
      nonVegRaat: 'Moong dal khichdi',
    },
    {
      _key: 'sp4',
      day: 'Din 4',
      vegSubah: 'Methi paani (bheegi hui)',
      vegNashta: 'Bajra roti + dahi (ghar ka, fresh)',
      vegDopahar: 'Brown rice + masoor dal + karela sabzi',
      vegShaam: 'Tulsi chai + 4 akhrot',
      vegRaat: '2 roti + gajar methi sabzi + dal',
      nonVegNashta: '2 boiled ande + salad',
      nonVegDopahar: 'Rohu curry (no cream) + brown rice',
      nonVegRaat: 'Machhi soup + 1 roti',
    },
  ],

  specialSituations: [
    {
      _key: 'ss1',
      situationType: 'flareUp',
      title: 'Flare-Up / Period Ke Pehle Ya Dauran Takleef Zyada Ho',
      emoji: '🔴',
      tips: [
        'Us din sirf khichdi, daliya ya moong dal soup — light aur easy to digest — pelvic area pe extra digestive load nahi',
        'Adrak chai aur haldi paani — din mein 2-3 baar — natural anti-prostaglandin effect — pain medication se pehle try karein',
        'Cold drinks, dairy, aur maida bilkul band us din — ye teeno prostaglandin spike karte hain — pain worse hoti hai',
      ],
    },
    {
      _key: 'ss2',
      situationType: 'fasting',
      title: 'Vrat / Fasting',
      emoji: '🙏',
      tips: [
        'Sabudana khichdi (bina bahut ghee ke) + singhare ka atta roti — safe options hain endometriosis mein',
        'Kuttu ka atta roti + aloo sabzi (boiled, less oil) — blood sugar stable rakhta hai vrat mein',
        'Vrat mein zyada tea/coffee mat peeo — caffeine plus empty stomach — pelvic cramping worse ho sakti hai',
        'Agar period chal raha ho aur vrat hai — apne doctor se pehle poochho — heavy bleeding mein fasting risky hoti hai',
      ],
    },
    {
      _key: 'ss3',
      situationType: 'eatingOut',
      title: 'Bahar Khana Ho (Restaurant / Dhaba)',
      emoji: '🍽️',
      tips: [
        'Dal, sabzi, tandoori roti order karo — simple Indian thali best choice hai',
        'Machhi ya chicken tangdi (grilled/tandoori) — fried version avoid karo — sirf cooking method ki baat hai',
        'Gravy mein cream, butter, ya white sauce dikhe toh avoid karo — "dry ya tomato-based gravy" specifically poochhke order karo',
      ],
    },
    {
      _key: 'ss4',
      situationType: 'travel',
      title: 'Travel Mein',
      emoji: '✈️',
      tips: [
        'Carry karo: bhuna chana, dry amla, akhrot, jowar flour roti (dry) — ye sab travel-safe hain, refrigeration nahi chahiye',
        'Train/hotel mein: plain dal chawal ya sabzi roti order karo — packaged chips, cold drinks, biscuits strictly avoid',
      ],
    },
  ],

  proTip: 'Period se 5-7 din pehle se hi anti-inflammatory foods start karo — sirf period ke din se nahi. Jo log cycle ke pehle se diet follow karte hain unka pain significantly better manage hota hai compared to jo sirf us din try karte hain.',
  importantNote: 'Ye chart ek general guide hai — endometriosis ki severity aur symptoms har woman mein alag hoti hain. Apni condition ke hisaab se apne homoeopath ya gynaecologist se personalized plan zaroor banwayein.',
  homeopathyDiet: 'Endometriosis mein estrogen dominance aur inflammation dono problems hain — sahi diet inhe naturally reduce karti hai — jisse homeopathic medicines body mein zyada effectively kaam kar sakti hain aur healing faster hoti hai.',

  faqs: [
    {
      _key: 'faq1',
      question: 'Kya endometriosis mein dahi khana theek hai?',
      answer: 'Ghar ka fresh bana dahi — thodi matra mein — allowed hai. Packaged ya set dahi (market wala) avoid karna better hai.\nCommercial dairy mein synthetic hormones hote hain jo estrogen load badhate hain — yahi endometriosis ka main hormonal issue hai.\nGhar ka fresh dahi mein probiotic bacteria hain jo gut health improve karte hain — aur gut microbiome estrogen clearance ke liye important hai.\nEk small katori ghar ka dahi dopahar mein — theek hai.',
    },
    {
      _key: 'faq2',
      question: 'Endometriosis mein soya ya tofu khana chahiye ya nahi?',
      answer: 'Moderate matra mein ghar ka tofu ya soya — allowed hai.\nSoya ke isoflavones WEAK estrogen effect dete hain — body ke powerful estrogen receptors pe bind hoke unhe block karte hain — actually net effect anti-estrogenic hota hai moderate quantity mein.\nLekin zyada soya (soya milk daily + tofu daily) — tab cumulative effect concern banta hai.\nHafte mein 2-3 baar tofu ya soya — safe hai.\nDaily heavy soya — apne doctor se poochh ke karein.',
    },
    {
      _key: 'faq3',
      question: 'Diet se endometriosis mein kitne din mein fark dikhta hai?',
      answer: 'Pain mein fark generally 2-3 menstrual cycles mein dikhna shuru hota hai — ek din ya ek hafte mein nahi.\nDiet ka mechanism slow hai — estrogen metabolism improve hona, gut microbiome shift hona, prostaglandin levels normalize hona — ye sab gradual changes hain.\nPehle cycle mein — bloating aur gut symptoms better ho sakte hain. Second-third cycle mein — period pain mein noticeable difference aata hai.\nDiet treatment nahi hai — pain management aur hormonal support ke liye hai. Treatment ke saath chalao.',
    },
    {
      _key: 'faq4',
      question: 'Endometriosis mein chai peena theek hai?',
      answer: '1 cup subah — allowed hai.\n2-3 cups ya zyada — avoid karna better hai endometriosis mein.\nCaffeine uterine blood vessels ko constrict karta hai aur pain sensitivity badhata hai — already inflamed tissue mein ye worse karta hai.\nHerbal chai — adrak, tulsi, haldi — unlimited pi sakte ho — ye anti-inflammatory hain aur endometriosis mein helpful hain.\nRegular chai mein milk kam karo ya doodh wali chai se herbal chai pe shift karne ki koshish karo.',
    },
    {
      _key: 'faq5',
      question: 'Endometriosis mein vrat kar sakte hain?',
      answer: 'Haan — lekin carefully.\nAgar period chal raha ho tab heavy fasting avoid karein — heavy bleeding + empty stomach = weakness aur pain worse.\nNormal days mein vrat ke dauran: sabudana, kuttu, singhare ka atta — ye blood sugar stable rakhte hain.\nAvoid karo: vrat mein zyada chai, fried aloo, sendha namak ke chips.\nEk practical tip: Vrat mein zyada paani peeo — dehydration cramping worse karta hai.',
    },
    {
      _key: 'faq6',
      question: 'Kya endometriosis mein raat ko late khaana khaana theek hai?',
      answer: 'Nahi — raat 7 ke baad heavy khaana endometriosis mein directly problem karta hai.\nLate digestion liver ko busy rakhti hai — aur liver ka ek main kaam hai excess estrogen ko metabolize karna.\nAgar liver raat ko digestion mein busy hai toh estrogen clearance slow ho jaati hai — estrogen body mein accumulate hota hai — endometriosis worse hoti hai.\nRaat 7-7:30 tak khaana kha lo — sirf paani ya herbal chai uske baad.',
    },
    {
      _key: 'faq7',
      question: 'Homeopathic medicine ke saath koi khaana band karna padta hai?',
      answer: 'Kuch specific medicines ke saath coffee aur strong smell wale foods avoid karne ki salah di jaati hai — lekin ye medicine specific hai, har case mein nahi.\nGeneralized rule nahi hai — apne homeopath se apni specific medicines ke baare mein poochho.\nEndometriosis mein general rule: processed food, alcohol, aur excess sugar avoid karo — ye medicines ki effectiveness ko indirect taur se affect karte hain kyunki body ka inflammatory state disturb rehta hai.',
    },
    {
      _key: 'faq8',
      question: 'Endometriosis mein non-veg khana chahiye ya band karna padega?',
      answer: 'Red meat bilkul band karo — arachidonic acid se prostaglandin-2 badhta hai jo period pain ka direct driver hai.\nFish — haan, encouraged hai — omega-3 se prostaglandin balance improve hota hai aur pelvic inflammation kam hoti hai.\nAnde (boiled) — allowed — choline liver ka estrogen detox support karta hai.\nChicken (boiled ya grilled, processed nahi) — occasional mein theek hai.\nSummary: Machhi aur ande — helpful. Red meat aur processed chicken — endometriosis mein avoid karna best decision hai.',
    },
    {
      _key: 'faq9',
      question: 'Kya endometriosis mein chawal khana band karna chahiye?',
      answer: 'White rice roz zyada matra mein — avoid karna better hai.\nBrown rice — allowed hai — fiber se estrogen gut se bind hokar bahar nikalta hai.\nWhite chawal ka problem: refined starch — blood sugar rapidly spike karta hai — insulin badhta hai — jo estrogen dominance worse karta hai.\nAgar white rice khana hi ho: choti matra mein, dal ke saath khao — aur dinner mein avoid karo.',
    },
    {
      _key: 'faq10',
      question: 'Period ke dauran exercise karni chahiye endometriosis mein?',
      answer: 'Light exercise — haan — complete rest se better hai.\nHeavy gym ya intense cardio — period ke pehle 2 din avoid.\nExercise insulin sensitivity improve karta hai — jo estrogen dominance ko naturally control karta hai.\nDiet mein anti-inflammatory foods + light yoga (walk) — dono saath chalao — akele diet se zyada fark aata hai combination mein.\nDiet se connected: jo khate ho uska seedha asar hormonal balance pe padta hai — movement usse aur enhance karta hai.',
    },
  ],

  sources: [
    { _key: 's1', name: 'Golebek A, Kowalska K, Olejnik A — Polyphenols as a Diet Therapy Concept for Endometriosis-Current Opinion and Future Perspectives — Nutrients — 2021', year: '2021', url: 'https://pubmed.ncbi.nlm.nih.gov/33919512' },
    { _key: 's2', name: 'Barrea L, Verde L et al — Effectiveness of Medical Nutrition Therapy in the Management of Patients with Obesity and Endometriosis — Current Obesity Reports — 2025', year: '2025', url: 'https://pubmed.ncbi.nlm.nih.gov/40920291' },
    { _key: 's3', name: 'Nodler JL, DiVasta AD et al — Supplementation with vitamin D or omega-3 fatty acids in adolescent girls and young women with endometriosis (SAGE) — American Journal of Clinical Nutrition — 2020', year: '2020', url: 'https://pubmed.ncbi.nlm.nih.gov/32453393' },
    { _key: 's4', name: 'Sanabani SS — The Role of the Microbiome in Endometriosis — Reproductive Sciences — 2025', year: '2025', url: 'https://pubmed.ncbi.nlm.nih.gov/41082090' },
    { _key: 's5', name: 'ICMR-NIN — Dietary Guidelines for Indians', year: '2024', url: 'https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf' },
  ],

  quickFacts: {
    mistake: 'Roz red meat ya packaged dairy khana — dono estrogen aur prostaglandin dono badhate hain — double whammy hai',
    mustEat: 'Broccoli — DIM compound hota hai jo liver se excess estrogen bahar nikalta hai — endometriosis ka core hormonal issue address karta hai',
    mustAvoid: 'Refined sugar — insulin spike se estrogen dominance directly worse hoti hai — mithai, cold drinks, packaged juice sab band',
  },

  doctorNote: 'Mere endometriosis patients mein maine consistently notice kiya hai ki jo women red meat aur packaged dairy dono ek saath chodh deti hain unka period pain aur treatment response dono clearly better hota hai — sirf ek chodh ke woh fark nahi aata jo dono chodh ne pe aata hai. — Dr. Shadab Khan, MD Homoeopath',
  reviewDate: 'May 2026',

  shareTextGreenRed: 'Endometriosis mein kya khayein, kya nahi — complete list: homeopedia.in/diet/endometriosis',
  shareTextMealPlan: 'Endometriosis ke liye 4-din ka Indian diet plan: homeopedia.in/diet/endometriosis',
  shareTextPage: 'Endometriosis Diet Guide — green list, meal plan, special situations sab: homeopedia.in/diet/endometriosis',

  publishedAt: new Date().toISOString(),
}

async function seed() {
  console.log('🌱 Seeding Endometriosis diet chart...')
  await client.createOrReplace(doc)
  console.log('✅ Endometriosis diet chart seeded — homeopedia.in/diet/endometriosis')
}

seed().catch(console.error)
