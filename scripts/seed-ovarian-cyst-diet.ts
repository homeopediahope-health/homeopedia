import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'diet-ovarian-cyst',
  _type: 'diet',
  title: 'Ovarian Cyst (Andashay ki Gathaan) Diet Chart',
  hindiName: 'Andashay ki Gathaan / Dumbari',
  slug: { _type: 'slug', current: 'ovarian-cyst' },
  relatedDiseaseSlug: 'ovarian-cyst',
  category: 'Women',
  metaTitle: 'Ovarian Cyst Diet Chart — Kya Khayein Kya Nahi | Homeopedia',
  metaDescription: 'Ovarian cyst diet chart — kya khayein kya nahi, green list, red list, Indian daily meal plan, veg aur non-veg dono. Dr. Shadab Khan. Doctor-reviewed. Homeopedia.in',
  intro: 'Ovarian cyst mein insulin resistance aur estrogen dominance do main problems hain — aur khaana seedha in dono ko better ya worse karta hai.\n\nNeeche complete guide hai — green list, red list, daily meal plan, veg/non-veg dono options, aur flare-up/vrat jaise special situations.',

  eatingHabits: [
    { _key: 'eh1', habit: 'Raat 7 baje ke baad heavy khaana band karo', reason: 'raat mein insulin spike ovarian hormones disturb karta hai' },
    { _key: 'eh2', habit: 'Har 3-4 ghante mein kuch khao', reason: 'blood sugar stable rakho — insulin spike se cyst ka size badhta hai' },
    { _key: 'eh3', habit: 'Subah uthke 1 glass gunguna paani piyo', reason: 'liver detox start hota hai jo estrogen metabolism mein help karta hai' },
  ],

  vegGreenList: [
    {
      _key: 'vgl1',
      categoryName: 'Anaj / Grains',
      emoji: '🌾',
      items: [
        { _key: 'i1', food: 'Brown rice', reason: 'glycemic index kam hai — insulin spike nahi hota jo cyst ko feed karta hai' },
        { _key: 'i2', food: 'Daliya (broken wheat)', reason: 'fiber rich — estrogen gut se bahar nikalne mein help karta hai' },
        { _key: 'i3', food: 'Bajra roti', reason: 'magnesium hota hai — ovarian hormonal balance ke liye zaroori' },
        { _key: 'i4', food: 'Jowar roti', reason: 'low GI grain — blood sugar stable rakhti hai — PCOS/cyst dono mein helpful' },
      ],
    },
    {
      _key: 'vgl2',
      categoryName: 'Sabziyaan / Vegetables',
      emoji: '🥦',
      items: [
        { _key: 'i5', food: 'Palak', reason: 'iron + folate — cyst ki wajah se hone wale heavy bleeding ka loss recover hota hai' },
        { _key: 'i6', food: 'Karela', reason: 'bitter compounds insulin sensitivity badhate hain — cyst shrinkage mein help karta hai' },
        { _key: 'i7', food: 'Lauki', reason: 'alkaline nature — pelvic inflammation kam karta hai jo cyst growth ko slow karta hai' },
        { _key: 'i8', food: 'Broccoli', reason: 'DIM (diindolylmethane) hota hai jo excess estrogen metabolize karta hai' },
        { _key: 'i9', food: 'Gajar', reason: 'beta-carotene liver mein estrogen breakdown mein help karta hai' },
        { _key: 'i10', food: 'Methi (seeds as vegetable)', reason: 'phytoestrogens hormone balance stabilize karte hain' },
      ],
    },
    {
      _key: 'vgl3',
      categoryName: 'Phal / Fruits',
      emoji: '🍎',
      items: [
        { _key: 'i11', food: 'Amla', reason: 'Vitamin C — oxidative stress kam karta hai jo cyst inflammation badhata hai' },
        { _key: 'i12', food: 'Papaya (paka hua)', reason: 'papain enzyme — uterine circulation improve karta hai' },
        { _key: 'i13', food: 'Seb (with skin)', reason: 'quercetin flavonoid — anti-inflammatory — ovarian tissue ko protect karta hai' },
        { _key: 'i14', food: 'Nar (pomegranate)', reason: 'antioxidants — pelvic blood flow improve karta hai' },
      ],
    },
    {
      _key: 'vgl4',
      categoryName: 'Dal aur Protein',
      emoji: '🫘',
      items: [
        { _key: 'i15', food: 'Moong dal (chilka wali)', reason: 'light protein — liver pe load nahi — detox support karta hai' },
        { _key: 'i16', food: 'Masoor dal', reason: 'iron rich — anemia rokta hai jo heavy cyst bleeding se hoti hai' },
        { _key: 'i17', food: 'Chana (bhuna hua)', reason: 'slowly digest hota hai — insulin spike nahi deta' },
      ],
    },
    {
      _key: 'vgl5',
      categoryName: 'Drinks, Masale aur Tel',
      emoji: '🫖',
      items: [
        { _key: 'i18', food: 'Haldi + kali mirch', reason: 'curcumin anti-inflammatory hai — akela absorb nahi hota — kali mirch ka piperine absorption badhata hai — combination zaroori' },
        { _key: 'i19', food: 'Adrak chai (no milk)', reason: 'gingerols prostaglandin activity kam karte hain — cyst pain mein direct relief' },
        { _key: 'i20', food: 'Jeera paani (subah)', reason: 'liver enzymes activate karta hai — estrogen metabolism better hota hai' },
        { _key: 'i21', food: 'Flaxseed (alsi) powder', reason: 'lignans excess estrogen se bind karke body se bahar nikaalte hain' },
        { _key: 'i22', food: 'Til ka tel (cold pressed, cooking ke liye)', reason: 'healthy fats — hormonal synthesis support karta hai' },
      ],
    },
  ],

  nonVegAllowed: [
    { _key: 'nva1', food: 'Fish — rohu, katla, surmai (boiled/grilled)', reason: 'omega-3 fatty acids ovarian inflammation seedha kam karte hain' },
    { _key: 'nva2', food: 'Ande (boiled) — 1-2 din mein', reason: 'choline hota hai jo liver mein estrogen detox pathway ko support karta hai' },
    { _key: 'nva3', food: 'Chicken (boiled/grilled — no fry)', reason: 'lean protein — insulin stable rakhta hai — cyst-feeding hormones nahi badhate' },
  ],

  nonVegAvoid: [
    { _key: 'nvav1', food: 'Fried chicken / chicken pakoda', reason: 'trans fat aur advanced glycation products — ovarian inflammation badhate hain' },
    { _key: 'nvav2', food: 'Red meat (mutton, beef)', reason: 'arachidonic acid — prostaglandin badhata hai — cyst pain worse hota hai' },
    { _key: 'nvav3', food: 'Processed meat (sausage, salami)', reason: 'preservatives xenoestrogens hain — cyst growth trigger karte hain' },
    { _key: 'nvav4', food: 'Shellfish (prawn, crab)', reason: 'heavy on liver — estrogen clearance slow karta hai' },
  ],

  redList: [
    {
      _key: 'rl1',
      categoryName: 'Processed aur Maida',
      emoji: '🚫',
      items: [
        { _key: 'ri1', food: 'Maida (bread, biscuit, noodles)', reason: 'rapid glucose spike — insulin surge — cyst ko directly feed karta hai' },
        { _key: 'ri2', food: 'Packaged namkeen / chips', reason: 'trans fat + refined starch — ovarian tissue mein chronic inflammation' },
        { _key: 'ri3', food: 'White rice (zyada matra)', reason: 'high GI — blood sugar spike — PCOS wali cysts mein avoid karein' },
      ],
    },
    {
      _key: 'rl2',
      categoryName: 'Dairy aur Heavy Foods',
      emoji: '🚫',
      items: [
        { _key: 'ri4', food: 'Full fat milk (zyada matra)', reason: 'saturated fat + IGF-1 hormone — ovarian cyst size pe directly affect karta hai' },
        { _key: 'ri5', food: 'Packaged paneer / processed cheese', reason: 'high saturated fat — estrogen dominance badh sakta hai' },
        { _key: 'ri6', food: 'Dahi (packaged / market wala) — NOTE: Ghar ka fresh bana dahi (1 small katori) allowed hai — IGF-1 bahut kam hota hai fresh mein', reason: 'IGF-1 content zyada hota hai — cyst-triggering hormonal environment' },
        { _key: 'ri7', food: 'Ice cream', reason: 'refined sugar + dairy fat combination — double hit — insulin + inflammation dono badhate hain' },
      ],
    },
    {
      _key: 'rl3',
      categoryName: 'Teekha, Meetha aur Oily',
      emoji: '🚫',
      items: [
        { _key: 'ri8', food: 'Refined sugar (meethai, cold drinks)', reason: 'insulin resistance seedha badhata hai — cyst ka main driver' },
        { _key: 'ri9', food: 'Deep fried food', reason: 'trans fat — liver pe load — estrogen metabolism slow hota hai' },
        { _key: 'ri10', food: 'Bahut zyada teekha (red chilli excess)', reason: 'pelvic inflammation worse hota hai cyst ke around' },
      ],
    },
    {
      _key: 'rl4',
      categoryName: 'Drinks',
      emoji: '🚫',
      items: [
        { _key: 'ri11', food: 'Chai / coffee 3+ cups daily — NOTE: 1 cup subah ki chai allowed hai — sirf excess avoid karein', reason: 'caffeine excess adrenal hormones badhata hai — ovarian hormone balance disturb' },
        { _key: 'ri12', food: 'Cold drinks / soda', reason: 'fructose corn syrup — insulin resistance ka direct driver' },
        { _key: 'ri13', food: 'Packaged fruit juices', reason: 'concentrated fructose — fiber nahi — glycemic spike' },
        { _key: 'ri14', food: 'Alcohol', reason: 'liver mein estrogen metabolism block karta hai — cyst growth environment create hota hai' },
      ],
    },
  ],

  dailyMealPlan: [
    { _key: 'dmp1', slotName: 'Subah Uthke', slotTime: '6-7 AM', slotEmoji: '🌅', vegOptions: ['1 glass gunguna paani + adha nimbu + 1 tsp alsi powder', 'Jeera paani (raat bhar bheega hua jeera ka paani)'], nonVegOption: '' },
    { _key: 'dmp2', slotName: 'Nashta', slotTime: '8-9 AM', slotEmoji: '🍽️', vegOptions: ['Moong dal ka chilla (2) + pudina chutney', 'Daliya with palak + jeera tadka'], nonVegOption: '2 ande boiled + 1 bajra roti + kheera' },
    { _key: 'dmp3', slotName: 'Mid-Morning', slotTime: '11 AM', slotEmoji: '☀️', vegOptions: ['1 seb ya nar ke daane', 'Bhuna chana (mutthi bhar)'], nonVegOption: '' },
    { _key: 'dmp4', slotName: 'Dopahar', slotTime: '1-2 PM', slotEmoji: '🍱', vegOptions: ['2 bajra/jowar roti + masoor dal + gajar-palak sabzi + salad', 'Brown rice (1 katori) + moong dal + lauki sabzi'], nonVegOption: 'Grilled fish / boiled chicken + 1 roti + sabzi' },
    { _key: 'dmp5', slotName: 'Shaam', slotTime: '4-5 PM', slotEmoji: '🌇', vegOptions: ['Adrak tulsi chai (no milk / kam milk) + akhrot 4-5', 'Roasted makhana (mutthi bhar)'], nonVegOption: '' },
    { _key: 'dmp6', slotName: 'Raat', slotTime: '7-8 PM', slotEmoji: '🌙', vegOptions: ['2 jowar roti + palak sabzi + dal', 'Moong dal khichdi + 1 tsp ghee + salad'], nonVegOption: 'Chicken soup (no cream) + 1 roti' },
    { _key: 'dmp7', slotName: 'Sone Se Pehle', slotTime: '9 PM', slotEmoji: '😴', vegOptions: ['Haldi doodh (ghar ka doodh, kam matra mein) + kali mirch', 'Gunguna paani + saunf'], nonVegOption: '' },
  ],

  samplePlan4Day: [
    {
      _key: 'sp1',
      day: 'Din 1',
      vegSubah: 'Jeera paani',
      vegNashta: 'Moong dal chilla + pudina chutney',
      vegDopahar: 'Bajra roti + masoor dal + palak sabzi + salad',
      vegShaam: 'Bhuna chana (mutthi bhar)',
      vegRaat: 'Moong dal khichdi + ghee',
      nonVegNashta: '2 boiled ande + 1 bajra roti',
      nonVegDopahar: 'Grilled fish + brown rice + palak sabzi',
      nonVegRaat: 'Moong dal khichdi + ghee',
    },
    {
      _key: 'sp2',
      day: 'Din 2',
      vegSubah: 'Nimbu gunguna paani + 1 tsp alsi powder',
      vegNashta: 'Daliya + gajar sabzi + jeera tadka',
      vegDopahar: 'Brown rice + arhar dal + lauki sabzi + salad',
      vegShaam: 'Seb 1',
      vegRaat: 'Jowar roti + methi sabzi + dal',
      nonVegNashta: 'Daliya + gajar sabzi',
      nonVegDopahar: 'Boiled chicken + 2 roti + lauki sabzi',
      nonVegRaat: 'Jowar roti + methi sabzi + moong dal',
    },
    {
      _key: 'sp3',
      day: 'Din 3',
      vegSubah: 'Jeera paani',
      vegNashta: 'Bajra roti + dahi (ghar ka) + kheera',
      vegDopahar: '2 roti + chana dal + broccoli sabzi + salad',
      vegShaam: 'Roasted makhana',
      vegRaat: 'Moong dal + palak sabzi + 1 roti',
      nonVegNashta: '2 boiled ande + poha (half portion)',
      nonVegDopahar: '2 roti + chana dal + broccoli sabzi',
      nonVegRaat: 'Chicken soup (no cream) + 1 roti + salad',
    },
    {
      _key: 'sp4',
      day: 'Din 4',
      vegSubah: 'Nimbu gunguna paani',
      vegNashta: 'Poha (vegetables ke saath) + adrak chai (no milk)',
      vegDopahar: 'Brown rice + masoor dal + karela sabzi + salad',
      vegShaam: 'Nar ke daane',
      vegRaat: 'Moong dal khichdi + lauki sabzi + ghee',
      nonVegNashta: 'Poha + vegetables',
      nonVegDopahar: 'Grilled surmai fish + 1 roti + karela sabzi',
      nonVegRaat: 'Moong dal khichdi + ghee + salad',
    },
  ],

  specialSituations: [
    {
      _key: 'ss1',
      situationType: 'flareUp',
      title: 'Flare-Up / Dard Zyada Ho Tab',
      emoji: '😣',
      tips: [
        'Us din sirf khichdi, daliya ya moong dal ka paani — light rakho jab tak dard hai',
        'Fried, dairy, aur meetha bilkul band — ye inflammation aur worse karte hain',
        'Garam adrak tulsi paani (no cold drinks) — pelvic circulation better hoti hai — pain thoda ease hota hai',
      ],
    },
    {
      _key: 'ss2',
      situationType: 'fasting',
      title: 'Vrat / Fasting',
      emoji: '🙏',
      tips: [
        'Kuttu ki roti ya singhara atta — low GI vrat options jo blood sugar stable rakhte hain',
        'Sabudana khichdi (zyada nahi) — high GI hai — half portion rakho',
        'Vrat mein namkeen chips / fried sabudana wada avoid — trans fat + heavy starch — cyst wali women ke liye flare-up risk',
      ],
    },
    {
      _key: 'ss3',
      situationType: 'eatingOut',
      title: 'Bahar Khana Ho (Restaurant / Dhaba)',
      emoji: '🍽️',
      tips: [
        'Dal tadka + roti — safe order hai — avoid butter/ghee tadka wali zyada oily dal',
        'Sabzi with roti — bhurji ya sabzi prefer karo — paneer makhani ya creamy dishes avoid',
        'Tip: Restaurant mein pehle 1 glass paani piyo — overeating nahi hota — glucose spike nahi',
      ],
    },
    {
      _key: 'ss4',
      situationType: 'travel',
      title: 'Travel Mein',
      emoji: '✈️',
      tips: [
        'Carry karo: bhuna chana, alsi ke ladoo (ghar ke), amla candy (bina sugar), dry akhrot',
        'Train/hotel mein: dal chawal ya khichdi order karo — junk food se bata ho sake to',
      ],
    },
  ],

  proTip: 'Ovarian cyst patients mein maine notice kiya hai ki jo log din ka pehla khaana subah 9 baje tak kha lete hain — unka hormonal profile lunch tak kaafi stable rehta hai. Nashta skip karna is condition mein cortisol + insulin dono spike karta hai — dono cyst ke liye harmful hain.',
  importantNote: 'Ye chart ek general guide hai — ovarian cyst ka type (functional, PCOS-related, endometrioma) alag hota hai aur har type mein personalized plan alag ho sakta hai. Apni condition ke hisaab se apne homoeopath ya gynecologist se milein aur diet plan confirm karein.',
  homeopathyDiet: 'Jab ovarian cyst mein diet se insulin resistance aur estrogen dominance control mein aata hai — homeopathic medicines hormonal balance pe better kaam karti hain. Sahi diet treatment ka base banati hai — medicines isko aur effective banati hain.',

  faqs: [
    {
      _key: 'faq1',
      question: 'Ovarian cyst mein dahi khana chahiye ya nahi?',
      answer: 'Ghar ka fresh bana dahi (1 small katori) — allowed hai.\nMarket ka packaged / set dahi — avoid karein.\nFresh dahi mein IGF-1 hormone bahut kam hota hai.\nPackaged dahi mein IGF-1 zyada concentrated hota hai jo ovarian cyst environment ko worse karta hai.\nApne doctor se apni specific cyst type ke baare mein poochhen.',
    },
    {
      _key: 'faq2',
      question: 'Ovarian cyst mein kela khana theek hai?',
      answer: 'Fresh / slightly raw kela — allowed hai — slow energy release, blood sugar spike nahi.\nBahut pakka / overripe kela — avoid karein — high sugar content — insulin spike hota hai.\nOvarian cyst mein insulin spike cyst growth ke liye favorable environment banata hai.\n1 kela daily morning mein — theek hai.',
    },
    {
      _key: 'faq3',
      question: 'Diet se ovarian cyst mein kitne din mein fark dikhta hai?',
      answer: 'Honest jawab — diet se cyst disappear nahi hoti.\nDiet ka kaam hai — cyst ko badhne se rokna aur hormonal environment improve karna.\n2-3 mahine consistent diet ke baad — hormonal markers (insulin, androgen) mein fark aata hai.\nCyst size pe effect treatment ke saath dono milke hota hai — akele diet se nahi.\nRegular checkup karte rahein.',
    },
    {
      _key: 'faq4',
      question: 'Ovarian cyst mein chai / coffee peena theek hai?',
      answer: '1 cup subah ki chai — theek hai.\n3+ cups daily — avoid karein — caffeine excess adrenal hormones badhata hai jo ovarian hormones disturb karte hain.\nCoffee bhi same — 1 cup okay, excess nahi.\nAdrak tulsi chai (no milk) — better option hai — anti-inflammatory bhi hai.',
    },
    {
      _key: 'faq5',
      question: 'Vrat / fast kar sakte hain ovarian cyst mein?',
      answer: 'Haan — light vrat kar sakte hain, lekin long fasting avoid karein.\nZyada der tak khaali pet rehna — cortisol spike — hormonal imbalance worse hota hai.\nKuttu roti, singhara atta — safe vrat choices hain.\nFried vrat foods — sabudana wada, kuttu puri — avoid karein — cyst inflammation badh sakti hai.',
    },
    {
      _key: 'faq6',
      question: 'Ovarian cyst mein raat ko late khaana khaane se kya problem hoti hai?',
      answer: 'Raat mein insulin sensitivity naturally kam hoti hai — late dinner = zyada insulin spike.\nInsulin ovarian androgen production directly stimulate karta hai — cyst ka core problem ye hai.\nRaat 7-8 baje tak khaana finish karna — cyst mein practically sabse important habit hai.\nSone se 2-3 ghante pehle khaana — metabolic health ke liye bhi better.',
    },
    {
      _key: 'faq7',
      question: 'Homeopathic medicine ke saath koi khaana band karna padta hai?',
      answer: 'Specific restrictions aapke doctor pe depend karte hain — generalize nahi kar sakte.\nKuch doctors strong smell wali cheezein — raw lahsun, coffee — medicine se thodi der pehle avoid karne ko kehte hain.\nKhaana bilkul band karne ki zaroorat nahi hoti — timing ka dhyan rakho.\nApne homoeopath se specifically poochhen — individual variation hoti hai.',
    },
    {
      _key: 'faq8',
      question: 'Ovarian cyst mein non-veg band karna padega?',
      answer: 'Nahi — non-veg completely band karna zaroori nahi.\nBoiled / grilled fish aur chicken — allowed hain — lean protein + omega-3 helpful hai.\nRed meat aur fried non-veg — avoid karein — ye inflammation badhate hain.\nProcessed meat — sausage, salami — zaroor avoid karein — xenoestrogens hote hain.\nCooking method sabse important hai — grilled/boiled yes, fried no.',
    },
    {
      _key: 'faq9',
      question: 'Ovarian cyst mein soya products kha sakte hain?',
      answer: 'Moderate matra mein — soya milk ya tofu — generally okay hai.\nBahut zyada soya — phytoestrogen load badh sakta hai — PCOS-related cyst mein caution.\nPackaged soya products avoid karein — refined processing mein compounds harmful ho sakte hain.\nGhar ka bana soya agar khaate ho — limited amount mein theek hai.\nApne doctor se apni cyst type ke hisaab se poochhen.',
    },
    {
      _key: 'faq10',
      question: 'Ovarian cyst mein weight kam karna zaroor hai?',
      answer: 'Agar weight normal range mein hai — weight loss zaroor nahi.\nAgar PCOS-related cyst hai aur weight zyada hai — toh haan, 5-10% weight loss bhi hormonal markers improve karta hai.\nDiet ka goal sirf weight loss nahi — hormonal balance aur inflammation control karna hai.\nCrash diet — bilkul nahi — cortisol badhta hai — cyst worse hoti hai.\nSteady, gradual change — better results deta hai.',
    },
    {
      _key: 'faq11',
      question: 'Periods mein kya khaayein agar ovarian cyst bhi hai?',
      answer: 'Periods ke pehle 2-3 din — light khaana — moong dal, khichdi, daliya.\nIron-rich foods — palak, masoor dal — blood loss recover karna zaroori hai.\nBahut zyada namak avoid karein — bloating worse hoti hai jo cyst pain ke saath uncomfortable lagta hai.\nAdrak chai — period cramps aur pelvic inflammation dono mein help karta hai.',
    },
  ],

  sources: [
    { _key: 's1', name: 'Shahid R et al — Diet and lifestyle modifications for effective management of polycystic ovarian syndrome (PCOS) — Journal of Food Biochemistry', year: '2022', url: 'https://pubmed.ncbi.nlm.nih.gov/35199348' },
    { _key: 's2', name: 'Di Lorenzo M et al — Pathophysiology and Nutritional Approaches in Polycystic Ovary Syndrome (PCOS): A Comprehensive Review — Current Nutrition Reports', year: '2023', url: 'https://pubmed.ncbi.nlm.nih.gov/37213054' },
    { _key: 's3', name: 'Szczuko M et al — Nutrition Strategy and Life Style in Polycystic Ovary Syndrome — Narrative Review — Nutrients', year: '2021', url: 'https://pubmed.ncbi.nlm.nih.gov/34371961' },
    { _key: 's4', name: 'ICMR-NIN — Dietary Guidelines for Indians', year: '2024', url: 'https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf' },
  ],

  quickFacts: {
    mistake: 'Refined sugar aur maida band nahi karna — ye insulin spike karte hain jo cyst ka pehla driver hai',
    mustEat: 'Alsi (flaxseed) powder — lignans excess estrogen bahar nikaalte hain — 1 tsp roz subah kaafi hai',
    mustAvoid: 'Cold drinks / soda — fructose + gas combination — insulin + pelvic bloating — dono problems ek saath',
  },

  doctorNote: 'Maine notice kiya hai ki mere ovarian cyst patients mein jinne log refined sugar aur packaged dairy dono chodh dete hain — sirf diet se — unka abdominal bloating aur period pain kaafi kam hota hai treatment ke saath — akele ek chodh ke zyada fark nahi padta. — Dr. Shadab Khan, MD Homoeopath',
  reviewDate: 'May 2026',

  shareTextGreenRed: 'Ovarian cyst mein kya khayein, kya nahi — complete list: homeopedia.in/diet/ovarian-cyst',
  shareTextMealPlan: 'Ovarian cyst ke liye 4-din ka Indian diet plan: homeopedia.in/diet/ovarian-cyst',
  shareTextPage: 'Ovarian cyst Diet Guide — green list, meal plan, special situations sab: homeopedia.in/diet/ovarian-cyst',

  publishedAt: new Date().toISOString(),
}

async function seed() {
  console.log('🌱 Seeding Ovarian Cyst diet chart...')
  await client.createOrReplace(doc)
  console.log('✅ Ovarian Cyst diet chart seeded — homeopedia.in/diet/ovarian-cyst')
}

seed().catch(console.error)
