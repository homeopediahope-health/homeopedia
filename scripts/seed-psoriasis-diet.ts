import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'diet-psoriasis',
  _type: 'diet',
  title: 'Psoriasis (Chambal) Diet Chart',
  hindiName: 'Chambal / Khal Rog',
  slug: { _type: 'slug', current: 'psoriasis' },
  relatedDiseaseSlug: 'psoriasis',
  category: 'Skin',
  metaTitle: 'Psoriasis (Chambal) Diet — Kya Khayein Kya Nahi | Homeopedia',
  metaDescription: 'Psoriasis (Chambal) diet chart — green list, red list, daily meal plan, veg aur non-veg dono. Dr. Shadab Khan. Doctor-reviewed. Homeopedia.in',
  intro: 'Psoriasis mein body ka immune system overactive ho jaata hai — aur kuch foods is immune response ko aur zyada bhad ka dete hain, skin inflammation (sujan) badhti hai, patches worsen hote hain.\n\nNeeche complete guide hai — green list, red list, daily meal plan, veg aur non-veg dono options, aur flare-up/vrat/travel jaise special situations.',

  eatingHabits: [
    { _key: 'eh1', habit: 'Subah ka nashta zaroor khao', reason: 'khaali pet rehne se cortisol badhta hai jo psoriasis flare-up ka direct trigger hai' },
    { _key: 'eh2', habit: 'Raat 7 baje ke baad bhari cheezein avoid karo', reason: 'late digestion gut inflammation badhata hai jo skin symptoms ko worsen karta hai' },
    { _key: 'eh3', habit: 'Khaana khate waqt paani kam piyo — khaane ke 30 min baad piyo', reason: 'digestive enzymes dilute hone se gut barrier weak hoti hai jo psoriasis mein seedha factor hai' },
  ],

  vegGreenList: [
    {
      _key: 'vgl1',
      categoryName: 'Anaj / Grains',
      emoji: '🌾',
      items: [
        { _key: 'i1', food: 'Jowar / Bajra roti', reason: 'maida se alag, gut inflammation reduce karta hai jo psoriasis ka known trigger hai' },
        { _key: 'i2', food: 'Brown rice (sahi amount mein)', reason: 'lower glycemic index — blood sugar stable rakhta hai, insulin spike se skin flare nahi hoti' },
        { _key: 'i3', food: 'Daliya (broken wheat)', reason: 'dietary fiber gut microbiome support karta hai — psoriasis mein gut-skin axis important hai' },
        { _key: 'i4', food: 'Rajgira (amaranth) roti', reason: 'gluten-free grain — kuch psoriasis patients mein gluten sensitivity hoti hai' },
      ],
    },
    {
      _key: 'vgl2',
      categoryName: 'Sabziyaan / Vegetables',
      emoji: '🥦',
      items: [
        { _key: 'i5', food: 'Karela', reason: 'bitter compounds blood purification mein help karte hain, skin toxins reduce hoti hain' },
        { _key: 'i6', food: 'Lauki', reason: 'gut ki sujan kam karta hai, easy digest — liver pe load nahi — psoriasis mein liver detox important hai' },
        { _key: 'i7', food: 'Palak (pakka hua)', reason: 'folate aur iron deta hai jo skin cell renewal mein zaroori hai' },
        { _key: 'i8', food: 'Turai', reason: 'cooling sabzi, body mein inflammatory load kam karta hai — garam prakruti psoriasis mein harmful hai' },
        { _key: 'i9', food: 'Methi (dana ya sabzi)', reason: 'anti-inflammatory compounds skin scaling kam karne mein help karte hain' },
        { _key: 'i10', food: 'Gajar', reason: 'beta-carotene skin barrier repair karta hai jahan psoriasis patches hote hain' },
      ],
    },
    {
      _key: 'vgl3',
      categoryName: 'Phal / Fruits',
      emoji: '🍎',
      items: [
        { _key: 'i11', food: 'Amla (fresh ya dry)', reason: 'vitamin C skin collagen support karta hai aur immune system ko modulate karta hai' },
        { _key: 'i12', food: 'Papaya', reason: 'papain enzyme gut digestion improve karta hai — gut-skin axis psoriasis mein directly connected hai' },
        { _key: 'i13', food: 'Seb (chhilke samet)', reason: 'quercetin hai jo IL-17 jaise inflammatory cytokines ko block karta hai — psoriasis mein ye cytokines badhte hain' },
        { _key: 'i14', food: 'Anar (pomegranate)', reason: 'punicalagins strong antioxidant hain jo psoriasis-associated oxidative stress kam karte hain' },
        { _key: 'i15', food: 'Jamun (seasonal)', reason: 'anthocyanins skin inflammation reduce karte hain, blood sugar bhi control rehta hai' },
      ],
    },
    {
      _key: 'vgl4',
      categoryName: 'Dal aur Protein',
      emoji: '🫘',
      items: [
        { _key: 'i16', food: 'Moong dal (chilke wali ya split)', reason: 'easily digestible protein, gut pe minimal load — psoriasis flare ke waqt best choice' },
        { _key: 'i17', food: 'Masoor dal', reason: 'iron aur zinc deti hai — zinc psoriasis mein skin healing ke liye clinically important hai' },
        { _key: 'i18', food: 'Chana dal', reason: 'slow digestion, blood sugar stable — insulin resistance psoriasis severity se linked hai' },
      ],
    },
    {
      _key: 'vgl5',
      categoryName: 'Drinks, Masale aur Tel',
      emoji: '🫖',
      items: [
        { _key: 'i19', food: 'Haldi + kali mirch (warm paani ya doodh mein)', reason: 'curcumin inflammatory pathways (NF-kB) block karta hai jo psoriasis mein overactive hoti hai — kali mirch ka piperine absorption 20x badhata hai' },
        { _key: 'i20', food: 'Adrak ki chai (bina ya thoda doodh)', reason: 'gingerols gut inflammation aur skin ke TNF-alpha markers dono kam karte hain' },
        { _key: 'i21', food: 'Til ka tel (cooking ke liye)', reason: 'sesamin anti-inflammatory hai, skin ko andar se nourish karta hai' },
        { _key: 'i22', food: 'Jeera', reason: 'gut motility improve karta hai, bloating kam karta hai jo skin flares se connected hai' },
        { _key: 'i23', food: 'Tulsi chai', reason: 'immunomodulatory properties, psoriasis jaise autoimmune conditions mein helpful' },
      ],
    },
  ],

  nonVegAllowed: [
    { _key: 'nva1', food: 'Rohu / Katla machli (boiled/grilled)', reason: 'omega-3 fatty acids skin inflammation directly reduce karte hain — psoriasis mein clinically studied' },
    { _key: 'nva2', food: 'Surmai machli (limited, 1-2 baar/week)', reason: 'EPA aur DHA skin cell membrane ko sahi rakhte hain, scaling kam hoti hai' },
    { _key: 'nva3', food: 'Anda (boiled, sirf safed bhag)', reason: 'lean protein skin repair ke liye — yolk mein arachidonic acid hota hai jo avoid karna better hai psoriasis mein' },
  ],

  nonVegAvoid: [
    { _key: 'nvav1', food: 'Fried machli / Fried chicken', reason: 'trans fat immune dysregulation badhata hai jo psoriasis flare ka direct trigger hai' },
    { _key: 'nvav2', food: 'Mutton / Red meat', reason: 'arachidonic acid inflammatory prostaglandins banata hai jo skin plaques worsen karta hai' },
    { _key: 'nvav3', food: 'Processed meat (sausage, salami, nuggets)', reason: 'preservatives aur additives gut barrier damage karte hain' },
    { _key: 'nvav4', food: 'Prawns / Shellfish', reason: 'high iodine content psoriasis mein skin sensitivity badhata hai, heavy to digest bhi hai' },
  ],

  redList: [
    {
      _key: 'rl1',
      categoryName: 'Processed aur Maida',
      emoji: '🚫',
      items: [
        { _key: 'ri1', food: 'Maida (white flour)', reason: 'rapidly digests into glucose, insulin spike karta hai jo skin ke inflammatory cytokines badhata hai' },
        { _key: 'ri2', food: 'Biscuits / bakery items', reason: 'maida + refined sugar ka combo gut permeability (leaky gut) badhata hai — psoriasis ka known aggravating factor' },
        { _key: 'ri3', food: 'Instant noodles / Maggi type', reason: 'refined carbs + sodium dono ek saath — skin inflammation compound hoti hai' },
        { _key: 'ri4', food: 'White bread / Pav', reason: 'high glycemic load — insulin spike — inflammatory cascade psoriasis mein shuru hoti hai' },
      ],
    },
    {
      _key: 'rl2',
      categoryName: 'Dairy aur Heavy Foods',
      emoji: '🚫',
      items: [
        { _key: 'ri5', food: 'Full fat packaged doodh', reason: 'casein protein kuch psoriasis patients mein immune response trigger karta hai' },
        { _key: 'ri6', food: 'Packaged / commercial paneer', reason: 'saturated fat + casein combination inflammatory load badhata hai' },
        { _key: 'ri7', food: 'Processed cheese', reason: 'additives + salt + dairy — teen alag psoriasis triggers ek saath' },
      ],
    },
    {
      _key: 'rl3',
      categoryName: 'Teekha, Meetha aur Oily',
      emoji: '🚫',
      items: [
        { _key: 'ri8', food: 'Zyada teekha khaana (lal mirch excess)', reason: 'capsaicin gut mucosa irritate karta hai, systemic inflammation badhti hai jo skin pe dikhti hai' },
        { _key: 'ri9', food: 'Refined sugar / mithai / cold drinks', reason: 'high-sugar diet skin ke IL-6 aur TNF-alpha markers directly badhata hai — psoriasis mein ye markers already elevated hote hain' },
        { _key: 'ri10', food: 'Deep fried foods (samosa, pakoda)', reason: 'oxidized oils free radicals badhate hain jo psoriatic plaques worsen karte hain' },
        { _key: 'ri11', food: 'Namkeen / chips (packaged)', reason: 'excess sodium skin inflammation badhata hai — evidence-based finding hai' },
      ],
    },
    {
      _key: 'rl4',
      categoryName: 'Drinks',
      emoji: '🚫',
      items: [
        { _key: 'ri12', food: 'Alcohol', reason: 'psoriasis ka strongest dietary trigger — gut permeability badhata hai aur liver detox directly impair karta hai' },
        { _key: 'ri13', food: 'Cold drinks / Soda', reason: 'high fructose gut microbiome disrupt karta hai, psoriasis-linked obesity risk bhi badhata hai' },
        { _key: 'ri14', food: 'Packaged fruit juices', reason: 'fiber nahi, sugar zyada — same problem as refined sugar' },
        { _key: 'ri15', food: 'Bahut zyada chai / coffee (3+ cups/day)', reason: 'caffeine excess cortisol badhata hai, stress-induced flares hote hain' },
      ],
    },
  ],

  dailyMealPlan: [
    { _key: 'dmp1', slotName: 'Subah Uthke', slotTime: '6-7 AM', slotEmoji: '🌅', vegOptions: ['Lukewarm paani + nimbu + haldi (adrak optional)', 'Bheegi methi seeds 1 tsp + 1 glass warm paani'], nonVegOption: '' },
    { _key: 'dmp2', slotName: 'Nashta', slotTime: '8-9 AM', slotEmoji: '🍽️', vegOptions: ['Bajra / jowar ki roti 2 + bina cream wali sabzi ya moong dal', 'Vegetable daliya (gajar, palak, lauki) — namak aur jeera ke saath'], nonVegOption: '2 ande ka safed bhag (boiled) + 1 jowar roti + kheera' },
    { _key: 'dmp3', slotName: 'Mid-Morning', slotTime: '11 AM', slotEmoji: '☀️', vegOptions: ['1 seb ya anar ke daane — seasonal fruit', 'Bhuna chana (handful) + 1 glass lukewarm paani'], nonVegOption: '' },
    { _key: 'dmp4', slotName: 'Dopahar', slotTime: '1-2 PM', slotEmoji: '🍱', vegOptions: ['2 roti (jowar/bajra) + masoor dal + koi bhi green sabzi + kheera salad', 'Brown rice (1 katori) + chana dal + karela/lauki sabzi + salad'], nonVegOption: 'Grilled rohu machli + 1-2 roti + green sabzi + salad' },
    { _key: 'dmp5', slotName: 'Shaam', slotTime: '4-5 PM', slotEmoji: '🌇', vegOptions: ['Tulsi ya adrak ki chai (bina doodh ya thoda doodh) + 4-5 akhrot', 'Roasted makhana (namak ke saath)'], nonVegOption: '' },
    { _key: 'dmp6', slotName: 'Raat', slotTime: '7-8 PM', slotEmoji: '🌙', vegOptions: ['2 roti + moong dal (patli) + light sabzi (lauki / turai)', 'Moong dal khichdi (brown rice + dal) + thoda desi ghee + salad'], nonVegOption: 'Machli ka soup (no cream, no fry) + 1 roti + steamed sabzi' },
    { _key: 'dmp7', slotName: 'Sone Se Pehle', slotTime: '9 PM', slotEmoji: '😴', vegOptions: ['Warm haldi doodh (plant-based ya low-fat) — curcumin raat mein inflammation repair karta hai', 'Warm paani + saunf + 1 pinch haldi'], nonVegOption: '' },
  ],

  samplePlan4Day: [
    {
      _key: 'sp1',
      day: 'Din 1',
      vegSubah: 'Warm paani + nimbu + haldi',
      vegNashta: 'Bajra roti 2 + moong dal + gajar sabzi',
      vegDopahar: 'Brown rice + masoor dal + lauki sabzi + salad',
      vegShaam: 'Tulsi chai + bhuna chana',
      vegRaat: '2 roti + chana dal + palak sabzi',
      nonVegNashta: '2 boiled egg whites + jowar roti + kheera',
      nonVegDopahar: 'Grilled rohu + 1 roti + lauki sabzi + salad',
      nonVegRaat: '2 roti + chana dal + palak sabzi',
    },
    {
      _key: 'sp2',
      day: 'Din 2',
      vegSubah: 'Bheegi methi seeds + warm paani',
      vegNashta: 'Vegetable daliya (lauki, gajar) + jeera tadka',
      vegDopahar: 'Jowar roti 2 + arhar dal + karela sabzi + kheera',
      vegShaam: 'Adrak chai + 4 akhrot',
      vegRaat: 'Moong dal khichdi + ghee (thoda) + salad',
      nonVegNashta: 'Vegetable daliya (veg same)',
      nonVegDopahar: 'Surmai machli grilled + brown rice + sabzi + salad',
      nonVegRaat: 'Moong dal khichdi + ghee (thoda)',
    },
    {
      _key: 'sp3',
      day: 'Din 3',
      vegSubah: 'Amla juice (fresh) ya amla powder + warm paani',
      vegNashta: 'Moong dal chilla 2 + green chutney (pudina/dhania)',
      vegDopahar: 'Brown rice + chana dal + turai sabzi + salad',
      vegShaam: 'Roasted makhana + green tea',
      vegRaat: 'Bajra roti 2 + masoor dal + methi sabzi',
      nonVegNashta: '2 boiled egg whites + 1 bajra roti + green chutney',
      nonVegDopahar: 'Brown rice + chana dal + turai sabzi (veg same)',
      nonVegRaat: 'Bajra roti 2 + masoor dal + methi sabzi',
    },
    {
      _key: 'sp4',
      day: 'Din 4',
      vegSubah: 'Warm paani + saunf + haldi',
      vegNashta: 'Poha (gajar, matar ke saath) + nimbu',
      vegDopahar: 'Jowar roti 2 + moong dal + palak sabzi + anar ke daane',
      vegShaam: 'Tulsi chai + seb 1',
      vegRaat: 'Khichdi (brown rice + moong dal) + lauki sabzi',
      nonVegNashta: 'Poha with vegetables (veg same)',
      nonVegDopahar: 'Rohu soup (light, no cream) + jowar roti + palak',
      nonVegRaat: 'Moong dal khichdi + lauki sabzi',
    },
  ],

  specialSituations: [
    {
      _key: 'ss1',
      situationType: 'flareUp',
      title: 'Flare-Up / Takleef Zyada Ho Tab',
      emoji: '😣',
      tips: [
        'Us din sirf khichdi (moong dal + brown rice) ya daliya khao — easily digestible, gut pe minimum load',
        'Dairy, maida, teekha, fried — sab band — even normally allowed cheezein bhi us din avoid karo',
        'Warm haldi paani din mein 2-3 baar piyo — curcumin acute inflammation mein fastest response deta hai',
      ],
    },
    {
      _key: 'ss2',
      situationType: 'fasting',
      title: 'Vrat / Fasting',
      emoji: '🙏',
      tips: [
        'Rajgira (amaranth) atta ki roti — naturally gluten-free, psoriasis ke liye safer grain hai',
        'Sabudana (limited) — fiber kam hai, zyada nahi khao — mix karo fruits ke saath balance ke liye',
        'Vrat mein fried sabudana vada, pakoda, potato chips bilkul avoid karo — oil + maida combo flare trigger kar sakta hai',
        'Long fasting (nirjala) carefully karo — dehydration skin dryness aur psoriasis patches worse kar sakti hai',
      ],
    },
    {
      _key: 'ss3',
      situationType: 'eatingOut',
      title: 'Bahar Khana Ho (Restaurant / Dhaba)',
      emoji: '🍽️',
      tips: [
        'Dal tadka + roti order karo — maida naan ya paratha avoid',
        '"Bina cream, bina butter, bina cheese" clearly bolein order karte waqt',
        'Practical hack: Pehle ghar pe thoda khao — bhookhe mat jao restaurant — bhookha hoga toh zyada fried/maida khaoge',
      ],
    },
    {
      _key: 'ss4',
      situationType: 'travel',
      title: 'Travel Mein',
      emoji: '✈️',
      tips: [
        'Carry karo: bhuna chana, akhrot, dry amla, khajoor (2-3 pieces max) — ye 3-4 ghante ka gap bharte hain bina triggers ke',
        'Train/hotel mein: dal chawal ya khichdi order karo — ye almost har jagah milti hai — sabse safe option hai',
      ],
    },
  ],

  proTip: 'Psoriasis patients mein maine notice kiya hai ki haldi aur kali mirch ka combination sirf khaane mein nahi — subah warm paani mein bhi lete hain toh skin response zyada fast hota hai — curcumin oral bioavailability bahut low hai akele, piperine ke saath absorption dramatically increase hoti hai.',
  importantNote: 'Ye chart ek general guide hai — every psoriasis patient ka trigger alag hota hai. Apni condition ke hisaab se apne homoeopath se personalized diet plan zaroor banwayein.',
  homeopathyDiet: 'Psoriasis mein diet sahi hogi toh body ka inflammatory load kam hoga — aur homeopathic medicines is reduced load pe zyada effectively kaam karengi, skin healing faster hogi.',

  faqs: [
    {
      _key: 'faq1',
      question: 'Kya psoriasis mein dahi (curd) khana allowed hai?',
      answer: 'Ghar ka fresh bana thanda dahi limited matra mein (1 small katori) kuch patients ko theek rehta hai — lekin packaged ya bahut zyada dahi clearly avoid karein.\nPsoriasis ek immune-mediated disease hai — dairy mein casein protein kuch logon mein immune response trigger kar sakta hai.\nIndividual variation hoti hai — ek hafte ke liye band karo, phir observe karo skin pe kya fark aata hai.\nAgar symptoms worsen hote hain dahi ke saath — toh permanent avoid karo.\nApne homoeopath se confirm zaroor karein.',
    },
    {
      _key: 'faq2',
      question: 'Kya psoriasis mein nimbu aur khatta khana allowed hai?',
      answer: 'Nimbu (paani mein) allowed hai — anti-inflammatory vitamin C deta hai aur digestion improve karta hai.\nLekin zyada khatta (imli, aamchur, excess nimbu ka achar) avoid karein — gut irritation ho sakti hai.\nKhatta achar, packed chutneys, vinegar — ye sab avoid.\nPlain fresh nimbu — theek hai, roz ek ka ek-chauthai se zyada nahi.',
    },
    {
      _key: 'faq3',
      question: 'Diet se psoriasis mein kitne din mein fark dikhta hai?',
      answer: 'Typically 4-6 hafte mein skin pe visible difference aata hai agar diet consistently follow ki jaye.\nPehle 2 hafte mein digestion improve hoti hai — skin pe directly baad mein dikhta hai kyunki skin cell cycle 28-30 din ka hota hai.\nFlare-ups ki frequency pehle kam hoti hai — patch size baad mein.\nDiet ek adjuvant tool hai — sirf diet se complete remission expect mat karo — treatment ke saath combination mein kaam karta hai.',
    },
    {
      _key: 'faq4',
      question: 'Psoriasis mein chai peena theek hai?',
      answer: '1-2 cups adrak/tulsi chai (bina zyada doodh ke) allowed hai.\nPlain milk tea 3+ cups avoid karo — caffeine + dairy ka combination stress hormones aur gut inflammation dono badhata hai.\nGreen tea better option hai — EGCG (epigallocatechin) psoriasis mein studied anti-inflammatory compound hai.\nAgar herbal chai bana sako — tulsi + adrak + saunf — ye best hai.',
    },
    {
      _key: 'faq5',
      question: 'Psoriasis mein vrat rakh sakte hain?',
      answer: 'Haan — rakh sakte hain, lekin kuch dhyan rakhna zaroori hai.\nRajgira roti, fruits, sabudana (limited) safe options hain.\nNirjala (waterless) long fast carefully karo — dehydration psoriasis skin dryness serious level pe le jaati hai.\nVrat mein fried things (sabudana vada, aloo pakoda) avoid karo — ye trigger bante hain.\nParyaapt paani pite raho — skin hydration important hai.',
    },
    {
      _key: 'faq6',
      question: 'Psoriasis mein raat ko late dinner koi problem hai?',
      answer: 'Haan — raat 8-9 baje ke baad bhari khaana psoriasis mein problem create karta hai.\nLate digestion gut mein fermentation badhata hai — inflammatory byproducts skin tak pohonchte hain — flares ho sakte hain.\nRaat ka khaana 7-7:30 baje tak finish karo.\nAgar late ho gaya — sirf khichdi ya light dal soup lo, heavy roti-sabzi nahi.',
    },
    {
      _key: 'faq7',
      question: 'Kya bahar ka khaana (dhaba / restaurant) psoriasis mein safe hai?',
      answer: 'Occasionally theek hai — daily nahi.\nMaida (naan, kulcha, pav), excess butter, cream curries, fried items — ye sab avoid karo bahar bhi.\nDal tadka + plain roti ya rice — ye safest order hai kisi bhi dhaba ya restaurant mein.\nDhaba mein refined oil ka reuse hota hai jo oxidized fat deta hai — psoriasis ke liye harmful.',
    },
    {
      _key: 'faq8',
      question: 'Homeopathic medicine ke saath koi khaana band karna padta hai?',
      answer: 'Sabhi medicines ke saath koi universal food restriction nahi hoti.\nKuch specific medicines (jaise Sulphur, Natrum Mur) ke saath doctors strong smell wali cheezein (lahsun, pyaaz ka zyada) avoid karne ko kehte hain — ye individual prescription pe depend karta hai.\nCoffee aur strong mint — kuch homoeopaths avoid karne ko kehte hain — apne doctor se puchho.\nGeneral rule: khaana aur medicine mein 30 minute ka gap rakhein.',
    },
    {
      _key: 'faq9',
      question: 'Psoriasis mein non-veg band karna padega?',
      answer: 'Poori tarah band karna zaroor nahi — lekin smart choices karni hogi.\nMachli (rohu, katla, surmai) — omega-3 ke liye actually beneficial hai — allowed.\nChicken (boiled/grilled) — limited allowed.\nRed meat (mutton, beef), fried meat, processed meat — ye clearly avoid karein — arachidonic acid inflammation badhata hai.\nEgg yolk bhi limited rakhein — sirf whites safer hain.',
    },
    {
      _key: 'faq10',
      question: 'Kya psoriasis mein chawal (rice) khana theek hai?',
      answer: 'Brown rice allowed hai — white rice limited matra mein theek hai.\nWhite rice ka glycemic index high hai — blood sugar spike hoti hai — insulin rise hoti hai — ye psoriasis mein inflammatory cascade start kar sakta hai.\nBrown rice ya jowar/bajra ke alternatives better hain.\nAgar white rice hi lo — dal + vegetables ke saath lo — glycemic load balanced hota hai combination mein.\nRoz ek katori dopahar mein — theek hai — zyada nahi.',
    },
  ],

  sources: [
    { _key: 's1', name: 'Garbicz J et al — Nutritional Therapy in Persons Suffering from Psoriasis — Nutrients', year: '2021', url: 'https://pubmed.ncbi.nlm.nih.gov/35010995' },
    { _key: 's2', name: 'Musumeci ML et al — The role of lifestyle and nutrition in psoriasis — Dermatologic Therapy', year: '2022', url: 'https://pubmed.ncbi.nlm.nih.gov/35790061' },
    { _key: 's3', name: 'Wang Q et al — Evidence-based dietary recommendations for patients with psoriasis — Clinical Nutrition', year: '2025', url: 'https://pubmed.ncbi.nlm.nih.gov/39987781' },
    { _key: 's4', name: 'ICMR-NIN — Dietary Guidelines for Indians', year: '2024', url: 'https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf' },
  ],

  quickFacts: {
    mistake: 'Alcohol aur maida continue karte rehna treatment ke saath — ye dono gut permeability badhate hain aur medicines ka response slow kar dete hain',
    mustEat: 'Haldi + kali mirch ka combination (warm paani mein ya khaane mein) — curcumin NF-kB pathway block karta hai jo psoriasis mein overactive hoti hai',
    mustAvoid: 'Alcohol — psoriasis ka strongest dietary trigger — gut permeability directly damage karta hai aur liver clearance impair karta hai',
  },

  doctorNote: 'Mere psoriasis patients mein maine consistently notice kiya hai ki jo log maida aur alcohol dono ek saath band kar dete hain — unka homeopathic treatment response dramatically fast hota hai — akele ek chodh ke dusra rakhne walo mein itna fark nahi dikhta. — Dr. Shadab Khan, MD Homoeopath',
  reviewDate: 'May 2026',

  shareTextGreenRed: 'Psoriasis (Chambal) mein kya khayein, kya nahi — complete list: homeopedia.in/diet/psoriasis',
  shareTextMealPlan: 'Psoriasis (Chambal) ke liye 4-din ka Indian diet plan: homeopedia.in/diet/psoriasis',
  shareTextPage: 'Psoriasis (Chambal) Diet Guide — green list, meal plan, special situations sab: homeopedia.in/diet/psoriasis',

  publishedAt: new Date().toISOString(),
}

async function seed() {
  console.log('🌱 Seeding Psoriasis diet chart...')
  await client.createOrReplace(doc)
  console.log('✅ Psoriasis diet chart seeded — homeopedia.in/diet/psoriasis')
}

seed().catch(console.error)
