import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'diet-sciatica',
  _type: 'diet',
  title: 'Sciatica Diet Chart',
  hindiName: 'Naso Ka Dard / Kamar Ki Nas',
  slug: { _type: 'slug', current: 'sciatica' },
  relatedDiseaseSlug: 'sciatica',
  category: 'Joints',
  metaTitle: 'Sciatica Diet Chart — Kya Khayein Kya Nahi | Homeopedia',
  metaDescription: 'Sciatica dard mein kaun se foods inflammation badhate hain aur kaunsa diet nerve pain kam karta hai? Indian diet guide with food list. Homeopedia pe padho.',
  intro: 'Sciatica mein inflammation (sujan) sciatic nerve ko compress karti hai — aur pro-inflammatory foods ye sujan aur bhi badhate hain, dard zyada hota hai.\n\nNeeche complete guide hai — green list, red list, daily meal plan, veg/non-veg dono options, aur vrat/travel jaise special situations.',

  eatingHabits: [
    { _key: 'eh1', habit: 'Subah khaali pet ek glass gunguna paani piyo', reason: 'gut inflammation kam hoti hai jo nerve pain mein aggravate karta hai' },
    { _key: 'eh2', habit: 'Raat ka khaana 7:30 baje tak kha lo', reason: 'late dinner se body ka inflammatory response badhta hai, nind mein dard zyada feel hota hai' },
    { _key: 'eh3', habit: 'Har 3-4 ghante mein kuch khao', reason: 'blood sugar stable rakho — blood sugar drop hone pe nerve sensitivity badhti hai jo sciatica pain trigger karta hai' },
  ],

  vegGreenList: [
    {
      _key: 'vgl1',
      categoryName: 'Anaj / Grains',
      emoji: '🌾',
      items: [
        { _key: 'i1', food: 'Daliya (broken wheat)', reason: 'fiber aur magnesium dono — nerve function aur inflammation dono ke liye' },
        { _key: 'i2', food: 'Brown rice', reason: 'low glycemic — blood sugar spike nahi karta — sciatica mein sugar spike nerve irritation badhata hai' },
        { _key: 'i3', food: 'Jowar / bajra roti', reason: 'anti-inflammatory minerals hain — wheat se better is condition mein' },
        { _key: 'i4', food: 'Ragi', reason: 'calcium aur magnesium — spine aur nerve health ke liye zaruri' },
      ],
    },
    {
      _key: 'vgl2',
      categoryName: 'Sabziyaan / Vegetables',
      emoji: '🥦',
      items: [
        { _key: 'i5', food: 'Palak', reason: 'magnesium aur folate — sciatic nerve repair mein seedha kaam aata hai' },
        { _key: 'i6', food: 'Lauki', reason: 'gut inflammation kam karta hai — nerve pain indirect trigger hai gut se' },
        { _key: 'i7', food: 'Methi (fresh ya seeds)', reason: 'anti-inflammatory compounds — sciatica ki underlying sujan pe kaam karta hai' },
        { _key: 'i8', food: 'Karela', reason: 'blood sugar control — diabetic patients mein sciatica worse hoti hai high sugar se' },
        { _key: 'i9', food: 'Gajar', reason: 'beta-carotene — nerve myelin sheath protect karta hai' },
      ],
    },
    {
      _key: 'vgl3',
      categoryName: 'Phal / Fruits',
      emoji: '🍎',
      items: [
        { _key: 'i10', food: 'Papaya', reason: 'papain enzyme — natural anti-inflammatory — sciatic nerve ki sujan directly kam karta hai' },
        { _key: 'i11', food: 'Amla', reason: 'Vitamin C — nerve tissue repair aur collagen ke liye zaruri' },
        { _key: 'i12', food: 'Seb (apple)', reason: 'quercetin — nerve inflammation kam karta hai' },
        { _key: 'i13', food: 'Anjeer (fresh ya soaked dry)', reason: 'magnesium aur calcium — nerve conduction ke liye important' },
      ],
    },
    {
      _key: 'vgl4',
      categoryName: 'Dal aur Protein',
      emoji: '🫘',
      items: [
        { _key: 'i16', food: 'Moong dal (chilke wali)', reason: 'easily digest — gut pe load nahi — liver inflammation se nerve pain link hai' },
        { _key: 'i17', food: 'Masoor dal', reason: 'iron aur B vitamins — nerve signal transmission ke liye zaruri' },
        { _key: 'i18', food: 'Chana dal', reason: 'slow release protein — muscle support karta hai jo spine ko hold karta hai' },
        { _key: 'i19', food: 'Tofu / soya (kum matra mein)', reason: 'plant-based protein — muscle support ke liye' },
      ],
    },
    {
      _key: 'vgl5',
      categoryName: 'Drinks, Masale aur Tel',
      emoji: '🫖',
      items: [
        { _key: 'i20', food: 'Haldi wala doodh (raat mein)', reason: 'curcumin — directly sciatic nerve inflammation kam karta hai' },
        { _key: 'i21', food: 'Adrak ki chai (plain, no sugar)', reason: 'gingerol — nerve pain mein analgesic effect' },
        { _key: 'i22', food: 'Sarson ka tel (cooking mein)', reason: 'omega-3 — nerve inflammation reduce karta hai' },
        { _key: 'i23', food: 'Ajwain', reason: 'gas aur bloating se bhi nerve pe pressure kam hota hai' },
        { _key: 'i24', food: 'Jeera paani (subah)', reason: 'digestive inflammation kam karta hai jo indirect trigger hai' },
      ],
    },
  ],

  nonVegAllowed: [
    { _key: 'nva1', food: 'Rohu / Katla machli (steamed ya light curry)', reason: 'omega-3 — sciatic nerve inflammation directly kam karta hai' },
    { _key: 'nva2', food: '2 ande boiled (white zyada, yolk 1)', reason: 'B12 aur protein — nerve myelin repair ke liye' },
    { _key: 'nva3', food: 'Chicken (grilled/boiled, no skin)', reason: 'lean protein — spine support karne wali muscles ke liye' },
  ],

  nonVegAvoid: [
    { _key: 'nvav1', food: 'Fried chicken / pakoda', reason: 'trans fat — systemic inflammation badhata hai sciatica worse hoti hai' },
    { _key: 'nvav2', food: 'Red meat (mutton, beef)', reason: 'saturated fat — spinal disc inflammation badhata hai' },
    { _key: 'nvav3', food: 'Processed meat (sausage, salami)', reason: 'preservatives — nerve toxicity ka risk' },
  ],

  redList: [
    {
      _key: 'rl1',
      categoryName: 'Processed aur Maida',
      emoji: '🚫',
      items: [
        { _key: 'ri1', food: 'Maida (bread, noodles, biscuits)', reason: 'gut mein leaky gut badhata hai — systemic inflammation trigger karta hai — sciatica worse hoti hai' },
        { _key: 'ri2', food: 'Packaged chips / namkeen', reason: 'refined carbs + sodium — water retention badhata hai jo nerve pe pressure deta hai' },
        { _key: 'ri3', food: 'Instant noodles', reason: 'MSG aur preservatives — nerve irritation ka direct trigger' },
      ],
    },
    {
      _key: 'rl2',
      categoryName: 'Dairy aur Heavy Foods',
      emoji: '🚫',
      items: [
        { _key: 'ri4', food: 'Packaged dahi (market wala)', reason: 'preservatives — inflammation trigger kar sakta hai (ghar ka fresh dahi thodi matra mein allowed hai)' },
        { _key: 'ri5', food: 'Full fat cream / malai', reason: 'saturated fat badhati hai jo spinal inflammation mein contribute karta hai' },
        { _key: 'ri6', food: 'Fried paneer (deep fry)', reason: 'cooking method se fat oxidize hota hai — inflammatory ho jata hai' },
      ],
    },
    {
      _key: 'rl3',
      categoryName: 'Teekha, Meetha aur Oily',
      emoji: '🚫',
      items: [
        { _key: 'ri7', food: 'Bahut zyada mirch', reason: 'capsaicin zyada matra mein — gut inflammation badhata hai — nerve sensitization hoti hai' },
        { _key: 'ri8', food: 'Refined sugar (meetha, mithai, cold drinks)', reason: 'blood sugar spike — nerve inflammation trigger — sciatica mein direct connection hai' },
        { _key: 'ri9', food: 'Deep fried khaana', reason: 'oxidized fats — spinal nerve ki sujan ko chronically badhate hain' },
      ],
    },
    {
      _key: 'rl4',
      categoryName: 'Drinks',
      emoji: '🚫',
      items: [
        { _key: 'ri10', food: 'Cold drinks / soda', reason: 'phosphoric acid — bone density kam karta hai — spine weak hoti hai jo sciatica worse karta hai' },
        { _key: 'ri11', food: 'Alcohol', reason: 'nerve toxin — sciatic nerve damage aur slow healing dono pe negative effect' },
        { _key: 'ri12', food: 'Packaged juice (tetrapack)', reason: 'high sugar — blood sugar spike — nerve pain badhta hai' },
        { _key: 'ri13', food: 'Bahut zyada chai (3+ cup)', reason: 'excess caffeine — sleep disturb karta hai — poor sleep se nerve recovery slow hoti hai' },
      ],
    },
  ],

  dailyMealPlan: [
    { _key: 'dmp1', slotName: 'Subah Uthke', slotTime: '6-7 AM', slotEmoji: '🌅', vegOptions: ['Gunguna paani + adrak + nimbu (kaali mirch pinch ke saath)', 'Bheegi methi seeds 1 tsp + ek glass paani'], nonVegOption: '' },
    { _key: 'dmp2', slotName: 'Nashta', slotTime: '8-9 AM', slotEmoji: '🍽️', vegOptions: ['Daliya with palak/gajar — light aur anti-inflammatory', 'Moong dal ka chilla + pudina chutney'], nonVegOption: '2 boiled ande + 1 brown bread / jowar roti' },
    { _key: 'dmp3', slotName: 'Mid-Morning', slotTime: '11 AM', slotEmoji: '☀️', vegOptions: ['1 papaya ya seb (seasonal)', 'Bhuna chana (1 small mutthi) — magnesium ka good source'], nonVegOption: '' },
    { _key: 'dmp4', slotName: 'Dopahar', slotTime: '1-2 PM', slotEmoji: '🍱', vegOptions: ['2 jowar/bajra roti + masoor dal + palak sabzi + salad', 'Brown rice + moong dal + lauki sabzi + 1 katori ghar ka dahi'], nonVegOption: 'Steamed fish (rohu/katla) + 2 roti + sabzi' },
    { _key: 'dmp5', slotName: 'Shaam', slotTime: '4-5 PM', slotEmoji: '🌇', vegOptions: ['Adrak-tulsi chai (1 cup, no milk) + akhrot 4-5 (omega-3)', 'Roasted makhana (magnesium source)'], nonVegOption: '' },
    { _key: 'dmp6', slotName: 'Raat', slotTime: '7-8 PM', slotEmoji: '🌙', vegOptions: ['2 roti + chana dal + turai/lauki sabzi', 'Khichdi (moong dal + brown rice) + ghee (1 tsp) + salad'], nonVegOption: 'Chicken soup (no cream, boiled chicken) + 1-2 roti' },
    { _key: 'dmp7', slotName: 'Sone Se Pehle', slotTime: '9 PM', slotEmoji: '😴', vegOptions: ['Warm haldi doodh (1 cup, low fat) — raat ke liye anti-inflammatory routine', 'Warm paani + saunf + haldi pinch'], nonVegOption: '' },
  ],

  samplePlan4Day: [
    {
      _key: 'sp1',
      day: 'Din 1',
      vegSubah: 'Gunguna paani + adrak + nimbu',
      vegNashta: 'Daliya with palak',
      vegDopahar: '2 jowar roti + masoor dal + gajar sabzi + salad',
      vegShaam: 'Adrak-tulsi chai + bhuna chana',
      vegRaat: 'Khichdi (moong dal + brown rice) + ghee 1 tsp',
      nonVegNashta: '2 boiled ande + 1 jowar roti + pudina chutney',
      nonVegDopahar: 'Steamed rohu machli + 2 roti + palak sabzi + salad',
      nonVegRaat: 'Chicken soup (no cream) + 2 roti',
    },
    {
      _key: 'sp2',
      day: 'Din 2',
      vegSubah: 'Bheegi methi seeds + paani',
      vegNashta: 'Moong dal chilla + pudina chutney',
      vegDopahar: 'Brown rice + chana dal + turai sabzi + ghar ka dahi',
      vegShaam: '1 papaya + akhrot 4',
      vegRaat: '2 bajra roti + masoor dal + palak sabzi',
      nonVegNashta: 'Moong dal chilla + 1 boiled anda',
      nonVegDopahar: 'Brown rice + katla machli curry (light) + lauki',
      nonVegRaat: '2 bajra roti + masoor dal + turai sabzi',
    },
    {
      _key: 'sp3',
      day: 'Din 3',
      vegSubah: 'Gunguna paani + saunf + haldi',
      vegNashta: 'Ragi porridge with seb (apple) pieces',
      vegDopahar: '2 jowar roti + moong dal + lauki sabzi + salad',
      vegShaam: 'Roasted makhana + tulsi chai',
      vegRaat: 'Khichdi + ghee + amla chutney (1 tsp)',
      nonVegNashta: '2 boiled ande + daliya (small bowl)',
      nonVegDopahar: 'Grilled chicken (no fry) + 2 jowar roti + salad',
      nonVegRaat: 'Khichdi + ghar ka dahi',
    },
    {
      _key: 'sp4',
      day: 'Din 4',
      vegSubah: 'Jeera paani (subah pehla glass)',
      vegNashta: 'Daliya with gajar + methi seeds (soaked)',
      vegDopahar: 'Brown rice + arhar dal + karela sabzi (light) + dahi',
      vegShaam: 'Seb 1 + bhuna chana',
      vegRaat: '2 roti + chana dal + turai sabzi',
      nonVegNashta: 'Ragi porridge + 1 boiled anda (white)',
      nonVegDopahar: 'Steamed surmai (machli) + 2 roti + palak sabzi',
      nonVegRaat: 'Chicken soup + 2 roti + lauki sabzi',
    },
  ],

  specialSituations: [
    {
      _key: 'ss1',
      situationType: 'flareUp',
      title: 'Flare-Up / Takleef Zyada Ho Tab',
      emoji: '😣',
      tips: [
        'Sirf khichdi, moong dal ka paani, daliya — heavy food completely avoid us din',
        'Us din haldi doodh subah aur raat — curcumin se acute nerve inflammation kuch kum hota hai',
        'Koi bhi fried, cold drinks, maida — us din bilkul nahi — inflammation instantly badhata hai',
      ],
    },
    {
      _key: 'ss2',
      situationType: 'fasting',
      title: 'Vrat / Fasting',
      emoji: '🙏',
      tips: [
        'Sabudana khichdi (zyada ghee nahi) + singhara atta roti — heavy nahi, nerve pe pressure nahi',
        'Kuttu ka atta chilla (bina deep fry) — protein aur magnesium ka source vrat mein bhi',
        'Vrat mein nimbu paani, nariyal paani — hydration zaruri — dehydration sciatica pain directly badhata hai',
        'Avoid: vrat wale fried aloo chips, sabudana vada deep fried — inflammation trigger karte hain',
      ],
    },
    {
      _key: 'ss3',
      situationType: 'eatingOut',
      title: 'Bahar Khana Ho (Restaurant / Dhaba)',
      emoji: '🍽️',
      tips: [
        'Dal tadka + roti order karo — plain sabzi ke saath — dhaba mein usually safe option hai',
        'Salad zaroor maango — fiber rakhna — gut healthy rakhega jo nerve pe indirect effect deta hai',
        'Avoid: paneer butter masala, dal makhani, naan — heavy fat + maida combination — nerve inflammation badhata hai',
        'Hack: pehle 1 glass lukewarm paani dhabe pe peeyo — overeating se bachne ke liye aur gut ko ready karne ke liye',
      ],
    },
    {
      _key: 'ss4',
      situationType: 'travel',
      title: 'Travel Mein',
      emoji: '✈️',
      tips: [
        'Carry karo: bhuna chana, akhrot 8-10, amla candy (sugarfree), jowar roti (2-3, dry) — safe aur anti-inflammatory',
        'Train/hotel mein: dal chawal order karo — simple — ya idli (bina sambar) — sabse safe option',
        'Avoid: station ka fried khaana, packaged namkeen, cold drinks — travel mein inflammation worse hoti hai',
      ],
    },
  ],

  proTip: 'Sciatica ke dard ke din subah uthke khane se pehle ek glass gungune paani mein adha nimbu + ek pinch haldi milao — ye liver ko activate karta hai jisse gut inflammation subah se hi controlled rahti hai.',
  importantNote: 'Ye chart ek general guide hai. Sciatica ki severity alag alag hoti hai — apni condition ke hisaab se apne homoeopath se personalized plan banwayein.',
  homeopathyDiet: 'Jab aap anti-inflammatory foods regularly lete hain — body ki systemic sujan kam hoti hai aur homeopathic medicines nerve-level pe zyada effectively kaam karti hain — healing faster hoti hai.',

  faqs: [
    {
      _key: 'faq1',
      question: 'Kya sciatica mein dahi khana safe hai?',
      answer: 'Haan — ghar ka fresh bana hua dahi (1 small katori, dopahar mein) safe hai.\nDahi mein probiotics hain jo gut inflammation kam karte hain — sciatica mein gut-nerve connection important hai.\nLekin packaged / market set dahi avoid karo — usmein preservatives hote hain jo inflammation trigger kar sakte hain.\nRaat ko dahi bilkul avoid — Ayurvedic aur clinical experience dono mein raat ka dahi inflammation badhata dekhte hain.',
    },
    {
      _key: 'faq2',
      question: 'Sciatica mein chawal (rice) kha sakte hain?',
      answer: 'Haan — brown rice ya parboiled rice is condition mein theek hai.\nRefined white rice zyada glycemic hota hai — blood sugar spike karta hai — aur blood sugar spikes nerve inflammation badhate hain sciatica mein.\nBrown rice slow release karta hai — zyada safe option hai.\nAgar brown rice na mile to white rice kam matra mein dal + sabzi ke saath kha sakte hain.',
    },
    {
      _key: 'faq3',
      question: 'Diet se sciatica mein kitne din mein fark dikhta hai?',
      answer: 'Anti-inflammatory diet se 3-4 hafte mein noticeable fark feel hona shuru hota hai — but ye condition se condition vary karta hai.\nDiet ka kaam ye hai ki body ki overall inflammation level kam hoti hai — jo nerve pe pressure aur irritation reduce karta hai.\nSirf diet se sciatica theek nahi hogi — treatment ke saath combined karo.\nApne doctor se track karte raho ki kya fark aa raha hai.',
    },
    {
      _key: 'faq4',
      question: 'Sciatica mein chai/coffee peena theek hai?',
      answer: '1 cup adrak-tulsi chai (bina milk ya low milk) subah — theek hai — gingerol anti-inflammatory kaam karta hai.\nMilk + sugar + strong chai — 3+ cups — avoid karo — inflammation badhti hai.\nCoffee ek cup subah se zyada nahi — achanak band mat karo — withdrawal headache + nerve sensitivity hoti hai.\nCold drinks, packaged juices — bilkul avoid — high sugar nerve pain trigger karta hai.',
    },
    {
      _key: 'faq5',
      question: 'Sciatica mein vrat kar sakte hain?',
      answer: 'Haan — lekin kuch dhyan rakhna padega.\nVrat mein zyada der tak khaali pet rehna sciatica mein blood sugar drop karta hai — nerve sensitivity badhti hai — dard zyada lag sakta hai.\nSafe options: kuttu atta, singhara atta, sabudana (light), nariyal paani, nimbu paani — thode thode interval mein kuch khate raho.\nDeep fried vrat food (aloo chips, sabudana vada) avoid karo — inflammation badhti hai.\nAgar dard bahut zyada ho to us din vrat na karo — apne doctor se poochho.',
    },
    {
      _key: 'faq6',
      question: 'Sciatica mein raat ko late khaana — theek hai?',
      answer: 'Nahi — sciatica mein raat 7:30 ke baad heavy khaana theek nahi hai.\nLate dinner se body ka inflammatory response badhta hai — aur neend mein nerve pain zyada feel hota hai kyunki body repair mode mein hoti hai.\nAgar bhook lage to sirf warm haldi doodh ya gunguna paani + saunf le sakte hain sone se pehle.\nYe ek simple change hai jo dard mein fark la sakta hai.',
    },
    {
      _key: 'faq7',
      question: 'Homeopathic medicine ke saath koi khaana avoid karna padta hai?',
      answer: 'Specific restrictions individual medicine pe depend karti hain — doctor se poochho.\nGenerally — coffee, kachha pyaaz, kachha lahsun, camphor — kuch doctors in cheez ko strong smell/taste ki wajah se avoid karne kehte hain — lekin ye sabhi medicines ke saath nahi hota.\nSciatica mein — anti-inflammatory diet khud hi ek significant support hai — medicine ke effectiveness ko help karta hai.\nApne homoeopath se specifically poochho ki aapki prescribed medicine ke saath kya restrictions hain.',
    },
    {
      _key: 'faq8',
      question: 'Sciatica mein non-veg khana chahiye ya band karna padega?',
      answer: 'Band karna zaruri nahi — lekin selection important hai.\nAllowed: steamed/light curry machli (rohu, katla, surmai) — omega-3 — nerve inflammation ke liye beneficial hai. Boiled ande, grilled chicken (no skin) — protein ke liye okay.\nAvoid: red meat, fried non-veg, processed meat — inflammatory hain — sciatica worse karte hain.\nMachli sciatica mein sabse better non-veg option hai.',
    },
    {
      _key: 'faq9',
      question: 'Kya sciatica mein nimbu aur khatta khana safe hai?',
      answer: 'Haan — nimbu (Vitamin C) sciatica mein safe hai aur beneficial bhi hai.\nVitamin C nerve tissue repair mein help karta hai aur collagen formation ke liye zaruri hai.\nSubah gungune paani mein nimbu — recommended hai.\nKhatta (imli, zyada amchur) large quantity mein — kuch patients mein acidity badhti hai — acidity se gut inflammation hoti hai — indirect trigger.\nModerate matra mein khatta theek hai.',
    },
    {
      _key: 'faq10',
      question: 'Sciatica mein aloo kha sakte hain?',
      answer: 'Thodi matra mein aloo (boiled ya steamed) okay hai — lekin zyada avoid karo.\nAloo high glycemic hai — blood sugar spike karta hai — aur sciatica mein blood sugar spike nerve irritation directly badhata hai.\nFried aloo (chips, fry) — bilkul nahi — double inflammatory hai.\nAgar aloo khana ho to — boiled, peeled, kam matra mein, dal ke saath — glycemic load balance hota hai.',
    },
  ],

  sources: [
    { _key: 's1', name: 'Wu L et al — Pro-inflammatory dietary patterns and pain in sciatica — Frontiers in Nutrition', year: '2026', url: 'https://pubmed.ncbi.nlm.nih.gov/41768794' },
    { _key: 's2', name: 'Safari MB et al — Low-Calorie Diet in Obese Patients with Chronic Sciatica — J Altern Complement Med', year: '2020', url: 'https://pubmed.ncbi.nlm.nih.gov/32434372' },
    { _key: 's3', name: 'ICMR-National Institute of Nutrition — Dietary Guidelines for Indians', year: '2024', url: 'https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI07052024P.pdf' },
  ],

  quickFacts: {
    mistake: 'Raat ko fried / heavy khaana khana — direct nerve inflammation badhata hai aur neend mein dard zyada hota hai',
    mustEat: 'Haldi — curcumin sciatic nerve inflammation pe directly kaam karta hai — roz warm doodh mein lo',
    mustAvoid: 'Maida (refined flour) — gut leaky gut badhata hai — systemic inflammation trigger karta hai — sciatica chronically worse hoti hai',
  },

  doctorNote: 'Maine notice kiya hai ki sciatica patients jo maida aur cold drinks dono ek saath chodh dete hain — unka treatment response clearly better hota hai un patients se jo sirf ek cheez chodh te hain — dono ka combination inflammatory effect synergistic hota hai. — Dr. Shadab Khan, MD Homoeopath',
  reviewDate: 'May 2026',

  shareTextGreenRed: 'Sciatica mein kya khayein, kya nahi — complete list: homeopedia.in/diet/sciatica',
  shareTextMealPlan: 'Sciatica ke liye 4-din ka Indian diet plan: homeopedia.in/diet/sciatica',
  shareTextPage: 'Sciatica Diet Guide — green list, meal plan, special situations sab: homeopedia.in/diet/sciatica',

  publishedAt: new Date().toISOString(),
}

async function seed() {
  console.log('🌱 Seeding sciatica diet chart...')
  await client.createOrReplace(doc)
  console.log('✅ Sciatica diet chart seeded — homeopedia.in/diet/sciatica')
}

seed().catch(console.error)
