import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'diet-hypothyroidism',
  _type: 'diet',
  title: 'Hypothyroidism Diet Chart',
  hindiName: 'Thyroid ki Kami / Manda Thyroid',
  slug: { _type: 'slug', current: 'hypothyroidism' },
  relatedDiseaseSlug: 'thyroid',
  category: 'Endocrine',
  metaTitle: 'Hypothyroidism Diet — Kya Khayein Kya Nahi | Homeopedia',
  metaDescription: 'Hypothyroidism (thyroid ki kami) diet chart — green list, red list, daily meal plan, veg aur non-veg dono. Dr. Shadab Khan. Doctor-reviewed. Homeopedia.in',
  intro: 'Hypothyroidism mein thyroid gland T3/T4 hormones poori tarah nahi bana pata — aur kuch foods is production ko aur slow kar dete hain jabki kuch foods directly help karte hain.\n\nNeeche complete guide hai — green list, red list, daily meal plan, veg/non-veg dono options, aur vrat/travel jaise special situations.',

  eatingHabits: [
    { _key: 'eh1', habit: 'Thyroid medicine ke baad 45-60 min kuch mat khao', reason: 'calcium, fiber, tannins teeno medicine absorb hone se rokate hain' },
    { _key: 'eh2', habit: 'Raat 8 baje ke baad heavy khaana avoid karo', reason: 'slow raat ki digestion T4 se T3 conversion aur slow kar deti hai' },
    { _key: 'eh3', habit: 'Subah nashta skip mat karo', reason: 'thyroid metabolism morning mein active hota hai, skip karne se TSH unstable hota hai' },
  ],

  vegGreenList: [
    {
      _key: 'vgl1',
      categoryName: 'Anaj / Grains',
      emoji: '🌾',
      items: [
        { _key: 'i1', food: 'Daliya', reason: 'gehun ka fiber blood sugar slowly release karta hai; stable glucose = stable TSH' },
        { _key: 'i2', food: 'Brown rice', reason: 'bran layer gut bacteria ke liye prebiotic kaam karta hai; healthy gut thyroid hormone absorption improve karta hai' },
        { _key: 'i3', food: 'Jowar / bajra roti', reason: 'gluten-free hai; Hashimoto\'s mein gluten gut lining inflame karta hai — jowar nahi karta' },
        { _key: 'i4', food: 'Oats (plain)', reason: 'beta-glucan fiber gut mein beneficial bacteria badhata hai jo thyroid micronutrients absorb karne mein help karta hai' },
      ],
    },
    {
      _key: 'vgl2',
      categoryName: 'Sabziyaan / Vegetables',
      emoji: '🥦',
      items: [
        { _key: 'i5', food: 'Lauki (pakhi hui)', reason: 'digest karne mein minimum energy lagti hai; hypothyroid ki slow digestion pe extra load nahi' },
        { _key: 'i6', food: 'Turai (pakhi hui)', reason: 'low glycemic hai; blood sugar stable rakhti hai aur constipation (hypothyroid ka common symptom) mein relief' },
        { _key: 'i7', food: 'Palak (pakhi hui, raw nahi)', reason: 'iron ka source hai; pakana zaroori hai — raw mein oxalate iron absorb hone se rokta hai' },
        { _key: 'i8', food: 'Gajar', reason: 'beta-carotene body mein vitamin A banta hai; vitamin A directly T4 production mein kaam aata hai' },
        { _key: 'i9', food: 'Methi dana (bheego ke)', reason: 'blood sugar slowly release karta hai aur gut motility badhata hai; dono hypothyroid mein disturbed rehte hain' },
      ],
    },
    {
      _key: 'vgl3',
      categoryName: 'Phal / Fruits',
      emoji: '🍎',
      items: [
        { _key: 'i10', food: 'Amla', reason: 'vitamin C thyroid mein oxidative stress kam karta hai; thyroid cells ko free radical damage se bachata hai' },
        { _key: 'i11', food: 'Seb (apple)', reason: 'quercetin antioxidant hai jo thyroid gland inflammation reduce karta hai' },
        { _key: 'i12', food: 'Papaya', reason: 'papain enzyme sluggish digestion speed up karta hai jo hypothyroid ka direct symptom hai' },
        { _key: 'i13', food: 'Nar (pomegranate)', reason: 'iron absorption improve karta hai; hypothyroid mein iron already low hoti hai' },
      ],
    },
    {
      _key: 'vgl4',
      categoryName: 'Dal aur Protein',
      emoji: '🫘',
      items: [
        { _key: 'i14', food: 'Moong dal (chhilka wali)', reason: 'easily digestible protein deti hai; thyroid hormone synthesis ke liye amino acid tyrosine chahiye jo isse milta hai' },
        { _key: 'i15', food: 'Masoor dal', reason: 'iron + folate dono milte hain; thyroid function ke liye dono micronutrients zaroori hain' },
        { _key: 'i16', food: 'Rajma / chana (well-cooked)', reason: 'zinc ka source hai; zinc deficiency se TSH regulation directly affect hoti hai' },
      ],
    },
    {
      _key: 'vgl5',
      categoryName: 'Drinks, Masale aur Tel',
      emoji: '🫖',
      items: [
        { _key: 'i17', food: 'Haldi + kali mirch wala doodh (garm, raat ko)', reason: 'curcumin thyroid inflammation reduce karta hai; kali mirch ka piperine curcumin absorption 20 guna badhata hai — dono saath zaroor' },
        { _key: 'i18', food: 'Adrak ki chai (bina doodh)', reason: 'anti-inflammatory hai; hypothyroid ki sluggish metabolism ko activate karta hai' },
        { _key: 'i19', food: 'Tulsi chai', reason: 'adaptogenic hai; thyroid pe stress response better karta hai' },
        { _key: 'i20', food: 'Jeera + ajwain paani (subah)', reason: 'gut motility improve karta hai; hypothyroid mein intestinal movement slow hoti hai' },
        { _key: 'i21', food: 'Desi ghee (thoda sa)', reason: 'fat-soluble vitamins absorb karne ke liye zaroori hai; thyroid hormones khud fat-soluble hain' },
        { _key: 'i22', food: 'Sarson ka tel (cooking ke liye)', reason: 'selenium trace amount hota hai; selenium thyroid gland ko oxidative damage se bachata hai' },
      ],
    },
  ],

  nonVegAllowed: [
    { _key: 'nva1', food: 'Ande (boiled)', reason: 'complete protein + selenium dono; selenium thyroid hormone conversion (T4 to T3) ke liye essential enzyme banata hai' },
    { _key: 'nva2', food: 'Rohu / katla machli (boiled ya grilled)', reason: 'omega-3 thyroid inflammation kam karta hai; iodine bhi milti hai jo T4 synthesis ke liye zaroori hai' },
    { _key: 'nva3', food: 'Surmai (grilled)', reason: 'selenium-rich hai; selenoproteins thyroid gland ko hydrogen peroxide damage se bachate hain' },
    { _key: 'nva4', food: 'Chicken (boiled ya grilled)', reason: 'lean protein se tyrosine milta hai jo T3/T4 banane ke liye raw material hai' },
  ],

  nonVegAvoid: [
    { _key: 'nvav1', food: 'Fried chicken / pakoda', reason: 'trans fat T4 se T3 conversion slow karta hai — cooking method directly matter karta hai' },
    { _key: 'nvav2', food: 'Processed meat (sausage, salami)', reason: 'preservatives + high sodium thyroid hormone absorption interfere karte hain' },
    { _key: 'nvav3', food: 'Red meat (mutton roz daily)', reason: 'saturated fat Hashimoto\'s mein inflammation worse karta hai' },
    { _key: 'nvav4', food: 'Shellfish (prawns, crabs)', reason: 'iodine bahut zyada hoti hai; hypothyroid mein excess iodine bhi harmful hai' },
  ],

  redList: [
    {
      _key: 'rl1',
      categoryName: 'Processed aur Maida',
      emoji: '🚫',
      items: [
        { _key: 'ri1', food: 'Maida (bread, biscuit, naan)', reason: 'gut mein leaky gut badhata hai jo Hashimoto\'s thyroiditis ka direct trigger hai' },
        { _key: 'ri2', food: 'Packaged namkeen / chips', reason: 'high sodium water retention badhata hai; hypothyroid mein swelling already hoti hai' },
        { _key: 'ri3', food: 'Instant noodles', reason: 'maida + preservatives dono thyroid hormone absorption interfere karte hain' },
      ],
    },
    {
      _key: 'rl2',
      categoryName: 'Dairy aur Heavy Foods',
      emoji: '🚫',
      items: [
        { _key: 'ri4', food: 'Thanda doodh (medicine ke aas paas)', reason: 'calcium thyroid medicine ka absorption rok deta hai; medicine ke 4 ghante baad hi lena chahiye' },
        { _key: 'ri5', food: 'Packaged dahi (market wala)', reason: 'preservatives gut microbiome disturb karte hain jo thyroid axis affect karta hai (ghar ka fresh dahi meal ke saath theek hai)' },
        { _key: 'ri6', food: 'Cheese / paneer (roz zyada matra mein)', reason: 'high saturated fat thyroid hormone conversion slow karti hai' },
      ],
    },
    {
      _key: 'rl3',
      categoryName: 'Goitrogenic Foods (Raw Form Mein)',
      emoji: '🚫',
      items: [
        { _key: 'ri7', food: 'Kacchi gobi / band gobi (raw)', reason: 'glucosinolates thyroid ka iodine uptake block karte hain; pakane se ye effect neutralize ho jata hai — cooked moderate amount okay' },
        { _key: 'ri8', food: 'Kaccha soya roz (soy milk, tofu daily)', reason: 'phytoestrogen thyroid hormone metabolism affect karta hai; thyroid medicine absorption bhi rokta hai (occasional cooked soy okay)' },
      ],
    },
    {
      _key: 'rl4',
      categoryName: 'Teekha, Meetha aur Oily',
      emoji: '🚫',
      items: [
        { _key: 'ri9', food: 'Refined sugar (mithai, cold drinks)', reason: 'blood sugar spike TSH fluctuation karta hai' },
        { _key: 'ri10', food: 'Roz tali cheezein', reason: 'heavy fat T3/T4 conversion slow karta hai' },
        { _key: 'ri11', food: 'Bahut zyada teekha', reason: 'gut inflammation badhti hai jo Hashimoto\'s autoimmunity worsen karta hai' },
      ],
    },
    {
      _key: 'rl5',
      categoryName: 'Drinks',
      emoji: '🚫',
      items: [
        { _key: 'ri12', food: 'Soya milk (roz)', reason: 'goitrogenic + thyroid medicine absorption block karta hai' },
        { _key: 'ri13', food: 'Milk wali chai (4+ cups)', reason: 'tannins iron absorption rokate hain; hypothyroid mein iron already low hoti hai' },
        { _key: 'ri14', food: 'Cold drinks / soda', reason: 'phosphoric acid calcium metabolism disturb karta hai' },
        { _key: 'ri15', food: 'Alcohol', reason: 'thyroid hormone secretion directly suppress karta hai' },
      ],
    },
  ],

  dailyMealPlan: [
    { _key: 'dmp1', slotName: 'Subah Uthke', slotTime: '6-7 AM', slotEmoji: '🌅', vegOptions: ['Lukewarm paani + adha nimbu + chutki kali mirch (iron absorption ke liye, gut motility shuru)', 'Bheegi methi seeds + paani (blood sugar control + constipation relief)'], nonVegOption: '' },
    { _key: 'dmp2', slotName: 'Nashta', slotTime: '8-9 AM', slotEmoji: '🍽️', vegOptions: ['Daliya with vegetables (gajar, turai)', 'Moong dal chilla (2) + pudina chutney'], nonVegOption: '2 boiled ande + 1 jowar roti' },
    { _key: 'dmp3', slotName: 'Mid-Morning', slotTime: '11 AM', slotEmoji: '☀️', vegOptions: ['1 seasonal fruit (seb ya papaya)', 'Bhuna chana (mutthi bhar)'], nonVegOption: '' },
    { _key: 'dmp4', slotName: 'Dopahar', slotTime: '1-2 PM', slotEmoji: '🍱', vegOptions: ['2 jowar roti + moong dal (chhilka) + pakhi palak sabzi + kheera salad', 'Brown rice + masoor dal + lauki sabzi + ghar ka dahi'], nonVegOption: '2 roti + rohu grilled + sabzi + salad' },
    { _key: 'dmp5', slotName: 'Shaam', slotTime: '4-5 PM', slotEmoji: '🌇', vegOptions: ['Tulsi ya adrak chai (bina doodh) + 4-5 akhrot', 'Roasted makhana'], nonVegOption: '' },
    { _key: 'dmp6', slotName: 'Raat', slotTime: '8 PM', slotEmoji: '🌙', vegOptions: ['2 roti + arhar dal + turai sabzi', 'Moong dal khichdi + thoda desi ghee + salad'], nonVegOption: '1 roti + chicken soup (no cream) + sabzi' },
    { _key: 'dmp7', slotName: 'Sone Se Pehle', slotTime: '9 PM', slotEmoji: '😴', vegOptions: ['Haldi doodh (garm) + kali mirch — curcumin raat mein thyroid inflammation reduce karta hai aur kali mirch ke bina absorb nahi hota', 'Garm paani + saunf (agar doodh nahi chahiye)'], nonVegOption: '' },
  ],

  samplePlan4Day: [
    {
      _key: 'sp1',
      day: 'Din 1',
      vegSubah: 'Methi paani',
      vegNashta: 'Daliya + vegetables',
      vegDopahar: 'Bajra roti + moong dal + palak sabzi',
      vegShaam: 'Tulsi chai + akhrot',
      vegRaat: 'Arhar dal + lauki sabzi + 2 roti',
      nonVegNashta: '2 boiled ande + jowar roti',
      nonVegDopahar: 'Rohu grilled + roti + palak sabzi',
      nonVegRaat: 'Arhar dal + lauki + roti',
    },
    {
      _key: 'sp2',
      day: 'Din 2',
      vegSubah: 'Nimbu + kali mirch paani',
      vegNashta: 'Moong dal chilla + pudina chutney',
      vegDopahar: 'Brown rice + masoor dal + gajar sabzi + ghar ka dahi',
      vegShaam: 'Bhuna chana',
      vegRaat: 'Khichdi + ghee + kheera salad',
      nonVegNashta: 'Moong dal chilla + pudina chutney',
      nonVegDopahar: 'Grilled chicken + brown rice + gajar sabzi',
      nonVegRaat: 'Khichdi + ghee',
    },
    {
      _key: 'sp3',
      day: 'Din 3',
      vegSubah: 'Methi paani',
      vegNashta: 'Plain oats + seb',
      vegDopahar: '2 jowar roti + rajma + turai sabzi',
      vegShaam: 'Adrak chai + makhana',
      vegRaat: 'Palak dal + roti',
      nonVegNashta: '1 boiled anda + plain oats',
      nonVegDopahar: '2 roti + surmai grilled + turai sabzi',
      nonVegRaat: 'Masoor dal + roti',
    },
    {
      _key: 'sp4',
      day: 'Din 4',
      vegSubah: 'Nimbu + kali mirch paani',
      vegNashta: 'Poha (vegetables ke saath)',
      vegDopahar: 'Brown rice + chana dal + lauki sabzi + salad',
      vegShaam: 'Tulsi chai + papaya',
      vegRaat: 'Moong dal khichdi + ghee',
      nonVegNashta: 'Poha + 1 boiled anda',
      nonVegDopahar: 'Chicken soup (no cream) + roti + lauki sabzi',
      nonVegRaat: 'Moong dal khichdi + ghee',
    },
  ],

  specialSituations: [
    {
      _key: 'ss1',
      situationType: 'flareUp',
      title: 'Fatigue ya Swelling Zyada Ho Tab',
      emoji: '😣',
      tips: [
        'Us din sirf khichdi, moong soup, ya daliya lo — digestion mein body ki energy nahi lagegi',
        'Cooked gobi, soya, raw salads bhi us din skip karo — flare-up mein gut zyada sensitive hoti hai',
        'Subah adrak + tulsi paani piyein — gut motility support bina stimulant ke',
      ],
    },
    {
      _key: 'ss2',
      situationType: 'fasting',
      title: 'Vrat / Fasting',
      emoji: '🙏',
      tips: [
        'Kuttu ki roti ya singhada atta chilla — gluten-free aur thyroid-friendly dono',
        'Makhana + akhrot — selenium aur zinc dono milte hain jo thyroid ke liye essential micronutrients hain',
        'Sabudana khichdi roz mat khao vrat mein — high simple carb se TSH fluctuate hota hai',
        'Diabetes bhi hai saath mein toh lambi fasting doctor se pehle confirm karein',
      ],
    },
    {
      _key: 'ss3',
      situationType: 'eatingOut',
      title: 'Bahar Khana Ho (Restaurant / Dhaba)',
      emoji: '🍽️',
      tips: [
        'Dal tadka + roti order karein — sabse safe combination hai hypothyroid mein bahar khaate waqt',
        'Paneer butter masala, fried items, cream curry avoid karein — high fat + dairy combo T3 conversion slow karta hai',
        'Pani puri, samosa, maida snacks avoid — gut inflammation instantly trigger hoti hai',
        'Hack: khane se pehle ek glass sadha paani piyo — overeating aur blood sugar spike dono kam hote hain',
      ],
    },
    {
      _key: 'ss4',
      situationType: 'travel',
      title: 'Travel Mein',
      emoji: '✈️',
      tips: [
        'Carry karein: bhuna chana + akhrot mix, dry amla candy, jowar ke rusk — TSH-stable snacks hain',
        'Train/hotel pe dal chawal ya dal roti order karein — safe aur har jagah available',
        'Thyroid medicine sahi time pe lena travel mein diet se bhi zyada important hai — alarm set karo',
      ],
    },
  ],

  proTip: 'Thyroid medicine (Thyroxine) ke baad 45-60 minute tak chai, doodh, ya kuch bhi mat lo — ye ek chiz theek karne se medicine ka absorption significantly better hota hai. Aksar patients ye bhool jaate hain.',
  importantNote: 'Ye chart ek general guide hai — har patient ki thyroid profile (TSH, T3, T4) alag hoti hai. Apni condition ke hisaab se apne homoeopath se personalized plan banwayein.',
  homeopathyDiet: 'Jab diet se gut health aur inflammation control hoti hai toh homeopathic medicines thyroid function pe better kaam karti hain — treatment aur diet dono saath chalein toh healing faster hoti hai.',

  faqs: [
    {
      _key: 'faq1',
      question: 'Hypothyroidism mein chawal band karna padega?',
      answer: 'Completely band karne ki zaroorat nahi — brown rice better option hai white rice se.\nWhite rice ka high glycemic index blood sugar quickly spike karta hai; hypothyroid mein insulin sensitivity already disturbed rehti hai jisse TSH fluctuate hota hai. Brown rice ka fiber slow digestion karta hai — glucose steady rehta hai toh TSH bhi stable rehta hai.\nWhite rice agar khate ho toh dal + sabzi saath zaroor lo — akela mat khao.',
    },
    {
      _key: 'faq2',
      question: 'Hypothyroidism mein dahi allowed hai?',
      answer: 'Ghar ka fresh bana dahi allowed hai — lekin timing matter karta hai.\nThyroid medicine ke kam se kam 4 ghante baad dahi lo — calcium medicine absorb hone se rok sakta hai. Dopahar ke khaane ke saath ya baad mein theek hai.\nPackaged dahi (market wala) avoid karein — uske preservatives gut microbiome disturb karte hain jo thyroid hormone absorption affect karta hai.',
    },
    {
      _key: 'faq3',
      question: 'Diet se kitne din mein fark dikhta hai?',
      answer: 'Symptoms (fatigue, swelling, digestion) mein 2-4 hafte mein improvement feel hoti hai.\nTSH levels pe asar 4-8 hafte mein dikh sakta hai — lekin ye medicine ke saath milke hota hai, diet akele nahi.\nSabse pehla asar digestion aur energy pe hota hai — constipation aur fatigue dono improve hote hain.\nDoctor se regular TSH check karwate raho.',
    },
    {
      _key: 'faq4',
      question: 'Hypothyroidism mein chai coffee theek hai?',
      answer: 'Plain adrak ya tulsi chai (bina doodh) theek hai — beneficial bhi hai.\nMilk wali chai 4+ cups avoid karein — tannins + calcium iron absorption rokate hain jo hypothyroid mein already low rehta hai.\nCoffee — roz subah medicine ke turant baad bilkul nahi — coffee thyroid medicine absorption significantly reduce karti hai; medicine ke 1 ghante baad occasional 1 cup okay hai.',
    },
    {
      _key: 'faq5',
      question: 'Gobi aur broccoli bilkul band karni padegi?',
      answer: 'Raw form mein avoid karein — cooked okay hai.\nGobi mein glucosinolates hote hain jo raw state mein thyroid ka iodine uptake thoda block karte hain. Pakane se ye effect mostly neutralize ho jata hai. 2024 ki ek comprehensive systematic review (123 studies) mein confirm hua ki adequate iodine ke saath cooked Brassica vegetables thyroid pe adverse effect nahi karti.\nRoz raw salad mein mat khao — cooked moderate amount mein theek hai.',
    },
    {
      _key: 'faq6',
      question: 'Hypothyroidism mein vrat kar sakte hain?',
      answer: 'Haan — lekin kuch dhyan rakho.\nShort vrat (1 din) generally theek hai agar thyroid medicine sahi time pe li jaye. Navratri type ke vrat mein kuttu + makhana + dry fruits safe hain. Sabudana roz mat khao — high carb se TSH unstable hota hai.\nDiabetes bhi hai toh lambi fasting se pehle doctor se confirm karein.',
    },
    {
      _key: 'faq7',
      question: 'Haldi doodh peena chahiye? Sahi tarika kya hai?',
      answer: 'Haan — lekin sirf haldi nahi, kali mirch saath mein zaroor daalni hai.\nHaldi ka curcumin thyroid inflammation reduce karta hai — lekin akela body absorb nahi kar pata. Kali mirch ka piperine curcumin absorption 20 guna badhata hai. Bina kali mirch ke haldi doodh peena zyada fayda nahi karta.\nBanane ka tarika: garm doodh + adha chammach haldi + ek chutki pisi kali mirch — raat ko sone se pehle lena best time hai.',
    },
    {
      _key: 'faq8',
      question: 'Soya milk ya tofu theek hai?',
      answer: 'Roz daily avoid karein — occasional thoda okay hai.\nSoya mein phytoestrogen hote hain jo thyroid hormone metabolism affect karte hain. Soya thyroid medicine (levothyroxine) ka absorption bhi rok sakta hai agar medicine ke aas paas liya. Agar soya kha rahe ho toh medicine ke kam se kam 4 ghante baad lo. Roz large quantity nahi.',
    },
    {
      _key: 'faq9',
      question: 'Homeopathic medicine ke saath koi khaana band karna padta hai?',
      answer: 'Sabke liye same restriction nahi hoti — medicine ke hisaab se alag hoti hai.\nKuch specific medicines ke saath coffee, camphor, ya strong smells avoid karne ko kaha jata hai. Ye sab medicines par depend karta hai — generalize nahi kar sakte. Apne homoeopath se specifically poochho ki aapki medicine ke saath kya avoid karna hai.',
    },
    {
      _key: 'faq10',
      question: 'Non-veg khana chahiye ya band karna padega?',
      answer: 'Band karne ki zaroorat nahi — smart choice karo.\nFish (rohu, katla, surmai) best option hai — omega-3 thyroid inflammation kam karta hai aur selenium bhi milta hai. Boiled ande selenium + tyrosine dono dete hain jo T3/T4 banane ke liye direct ingredients hain.\nFried chicken, processed meat, red meat roz — avoid karein. Boiled ya grilled hamesha better hai thyroid mein fried ke comparison mein.',
    },
  ],

  sources: [
    { _key: 's1', name: 'Shulhai AM et al — The Role of Nutrition on Thyroid Function — Nutrients', year: '2024', url: 'https://pubmed.ncbi.nlm.nih.gov/39125376' },
    { _key: 's2', name: 'Mikulska AA et al — Metabolic Characteristics of Hashimoto\'s Thyroiditis — Int J Mol Sci', year: '2022', url: 'https://pubmed.ncbi.nlm.nih.gov/35743024' },
    { _key: 's3', name: 'Hu S, Rayman MP — Multiple Nutritional Factors and the Risk of Hashimoto\'s Thyroiditis — Thyroid', year: '2017', url: 'https://pubmed.ncbi.nlm.nih.gov/28290237' },
    { _key: 's4', name: 'Galanty A et al — Do Brassica Vegetables Affect Thyroid Function? — Int J Mol Sci', year: '2024', url: 'https://pubmed.ncbi.nlm.nih.gov/38612798' },
    { _key: 's5', name: 'ICMR-NIN — Dietary Guidelines for Indians', year: '2024', url: 'https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf' },
  ],

  quickFacts: {
    mistake: 'Thyroid medicine ke turant baad chai ya doodh peena — calcium medicine absorb hone se rokta hai, dose waste ho jata hai',
    mustEat: 'Haldi doodh raat ko — kali mirch ke saath — bina kali mirch ke curcumin absorb hi nahi hota',
    mustAvoid: 'Soya milk roz daily — especially thyroid medicine ke aas paas — absorption block karta hai',
  },

  doctorNote: 'Maine notice kiya hai ki mere hypothyroid patients mein jo log thyroid medicine ke baad 1 ghante tak chai/doodh band karte hain aur raat ka khaana 7 baje se pehle le lete hain, unka TSH normalization treatment ke saath clearly faster hota hai — akele diet ya akele medicine se nahi. — Dr. Shadab Khan, MD Homoeopath',
  reviewDate: 'May 2026',

  shareTextGreenRed: 'Hypothyroidism mein kya khayein, kya nahi — complete list: homeopedia.in/diet/hypothyroidism',
  shareTextMealPlan: 'Hypothyroidism ke liye 4-din ka Indian diet plan: homeopedia.in/diet/hypothyroidism',
  shareTextPage: 'Hypothyroidism Diet Guide — green list, meal plan, special situations sab: homeopedia.in/diet/hypothyroidism',

  publishedAt: new Date().toISOString(),
}

async function seed() {
  console.log('🌱 Seeding hypothyroidism diet chart...')
  await client.createOrReplace(doc)
  console.log('✅ Hypothyroidism diet chart seeded — homeopedia.in/diet/hypothyroidism')
}

seed().catch(console.error)
