import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'diet-frozen-shoulder',
  _type: 'diet',
  title: 'Frozen Shoulder Diet Chart',
  hindiName: 'Jama Hua Kandha / Kandhe Ki Akadhan',
  slug: { _type: 'slug', current: 'frozen-shoulder' },
  relatedDiseaseSlug: 'frozen-shoulder',
  category: 'Joints',
  metaTitle: 'Frozen Shoulder Diet — Kya Khayein Kya Nahi | Homeopedia',
  metaDescription: 'Frozen shoulder (jama hua kandha) diet chart — green list, red list, daily meal plan, veg aur non-veg dono options. Dr. Shadab Khan. Doctor-reviewed. Homeopedia.in',
  intro: 'Frozen shoulder mein shoulder capsule (joint ki jhilli) mein chronic inflammation aur fibrosis hoti hai — kuch foods is sujan ko badhate hain aur collagen repair ko rok dete hain.\n\nNeeche complete guide hai — green list, red list, daily meal plan, veg aur non-veg dono options, aur flare-up/vrat/travel jaise special situations.',

  eatingHabits: [
    { _key: 'eh1', habit: 'Subah uthke garam paani + haldi piyo', reason: 'shoulder capsule ki sujan subah sabse zyada hoti hai, curcumin is inflammation ko directly target karta hai' },
    { _key: 'eh2', habit: 'Raat 7 baje ke baad heavy ya fried khaana avoid karo', reason: 'raat mein digestion slow hoti hai jo body ki repair process (collagen synthesis) ke liye available energy kam kar deta hai' },
    { _key: 'eh3', habit: 'Har 3-4 ghante mein kuch khao — blood sugar stable rakho', reason: 'sugar spike se body mein inflammatory markers (CRP) badhte hain jo frozen shoulder mein pain aur stiffness worse karte hain' },
  ],

  vegGreenList: [
    {
      _key: 'vgl1',
      categoryName: 'Anaj / Grains',
      emoji: '🌾',
      items: [
        { _key: 'i1', food: 'Daliya (broken wheat)', reason: 'complex carb hai jo blood sugar spike nahi karta, CRP (inflammation marker) control mein rehta hai' },
        { _key: 'i2', food: 'Brown rice / hand-pounded rice', reason: 'refined rice se kam inflammatory load — daily staple ke roop mein safe hai' },
        { _key: 'i3', food: 'Jowar / Bajra roti', reason: 'anti-inflammatory minerals magnesium aur phosphorus deta hai jo joint tissue ke liye zaroori hain' },
        { _key: 'i4', food: 'Moong dal khichdi', reason: 'easily digest hoti hai aur light protein deta hai joint repair ke liye — flare-up mein bhi safe hai' },
      ],
    },
    {
      _key: 'vgl2',
      categoryName: 'Sabziyaan / Vegetables',
      emoji: '🥦',
      items: [
        { _key: 'i5', food: 'Palak', reason: 'Vitamin C aur folate se bhari — collagen synthesis ke liye zaroori hai jo shoulder capsule ki repair mein direct role play karta hai' },
        { _key: 'i6', food: 'Lauki', reason: 'gut inflammation kam karta hai jo systemic sujan ko reduce karta hai — frozen shoulder mein helpful hai' },
        { _key: 'i7', food: 'Gajar', reason: 'beta-carotene cartilage tissue ko oxidative damage se bachata hai' },
        { _key: 'i8', food: 'Karela', reason: 'blood sugar control karta hai — high sugar frozen shoulder ki stiffness ko worse karta hai' },
        { _key: 'i9', food: 'Methi (dana aur sabzi dono)', reason: 'natural anti-inflammatory compounds hain jo joint stiffness reduce karte hain — frozen shoulder mein clinically relevant hai' },
        { _key: 'i10', food: 'Turai', reason: 'light digestible sabzi — gut aur joint inflammation dono pe positive effect karta hai' },
      ],
    },
    {
      _key: 'vgl3',
      categoryName: 'Phal / Fruits',
      emoji: '🍎',
      items: [
        { _key: 'i11', food: 'Papaya', reason: 'papain enzyme hota hai jo joint mein protein breakdown ke baad waste clear karne mein help karta hai — sujan kam hoti hai' },
        { _key: 'i12', food: 'Amla (fresh ya sukha dono)', reason: 'sabse zyada natural Vitamin C — collagen synthesis ke liye body ka primary raw material' },
        { _key: 'i13', food: 'Seb (chilke ke saath)', reason: 'quercetin hota hai jo shoulder joint mein inflammatory cytokines ko block karta hai' },
        { _key: 'i14', food: 'Anar (seasonal)', reason: 'antioxidants hai jo joint tissue oxidation se bachata hai — frozen shoulder recovery mein helpful hai' },
        { _key: 'i15', food: 'Kela (fresh, slightly raw)', reason: 'potassium muscle cramps reduce karta hai jo frozen shoulder pain ke saath aate hain' },
      ],
    },
    {
      _key: 'vgl4',
      categoryName: 'Dal aur Protein',
      emoji: '🫘',
      items: [
        { _key: 'i16', food: 'Moong dal (chilka)', reason: 'light protein + folate — joint capsule repair ke liye amino acids deta hai — easily digested' },
        { _key: 'i17', food: 'Masoor dal', reason: 'iron + protein — muscle weakness (jo frozen shoulder mein hoti hai) address karta hai' },
        { _key: 'i18', food: 'Chana dal', reason: 'magnesium rich — nerve aur muscle function ke liye zaroori jab shoulder movement limited ho' },
        { _key: 'i19', food: 'Rajma / Kabuli chana', reason: 'plant protein + zinc — tissue repair mein directly involved hai' },
      ],
    },
    {
      _key: 'vgl5',
      categoryName: 'Drinks, Masale aur Tel',
      emoji: '🫚',
      items: [
        { _key: 'i20', food: 'Haldi (kali mirch ke saath)', reason: 'curcumin NF-kB pathway ko block karta hai jo frozen shoulder ki chronic inflammation ka main driver hai — kali mirch ka piperine curcumin absorption 20x badhata hai — combination zaroor rakho' },
        { _key: 'i21', food: 'Adrak', reason: 'gingerol compounds COX-2 pathway (same jo ibuprofen block karta hai) ko naturally inhibit karte hain — daily chai ya paani mein safe hai' },
        { _key: 'i22', food: 'Jeera + dhania', reason: 'digestive anti-inflammatory herbs — gut se systemic inflammation reduce karte hain' },
        { _key: 'i23', food: 'Sarson ka tel (kachi ghani)', reason: 'omega-3 aur omega-6 balanced ratio hota hai — joint inflammation ke liye Indian kitchen ka best option hai' },
        { _key: 'i24', food: 'Desi ghee (thodi matra mein)', reason: 'butyrate gut lining heal karta hai jo systemic inflammation source remove karta hai' },
        { _key: 'i25', food: 'Tulsi chai / adrak chai (bina doodh)', reason: 'antioxidant load badhata hai — frozen shoulder mein daily best drink hai' },
      ],
    },
  ],

  nonVegAllowed: [
    { _key: 'nva1', food: 'Rohu / Katla machhi (steamed ya grilled)', reason: 'omega-3 fatty acids shoulder joint mein prostaglandin-based inflammation reduce karte hain — week mein 2-3 baar' },
    { _key: 'nva2', food: 'Ande (boiled)', reason: 'complete amino acid profile — collagen synthesis ke liye body ko sab building blocks milte hain' },
    { _key: 'nva3', food: 'Chicken (boiled / grilled, skin hatake)', reason: 'lean protein — shoulder muscle atrophy slow karta hai jo frozen shoulder mein common issue hai' },
  ],

  nonVegAvoid: [
    { _key: 'nvav1', food: 'Fried fish / Fried chicken', reason: 'cooking mein trans fat banta hai jo shoulder joint mein inflammatory markers badhata hai' },
    { _key: 'nvav2', food: 'Red meat (mutton, beef)', reason: 'arachidonic acid zyada hota hai jo prostaglandin pathway se joint inflammation directly worsen karta hai' },
    { _key: 'nvav3', food: 'Packaged / processed meat (sausage, salami)', reason: 'preservatives aur sodium shoulder tissue mein fluid retention badhate hain aur stiffness worse hoti hai' },
  ],

  redList: [
    {
      _key: 'rl1',
      categoryName: 'Processed aur Maida',
      emoji: '🚫',
      items: [
        { _key: 'ri1', food: 'Maida (white flour) products', reason: 'gut mein leaky gut trigger karta hai jo systemic inflammation badhata hai — frozen shoulder ki capsule inflammation seedha worsen hoti hai' },
        { _key: 'ri2', food: 'Packaged biscuits / namkeen', reason: 'refined carb + trans fat combination — CRP levels badhate hain jo shoulder pain aur stiffness increase karte hain' },
        { _key: 'ri3', food: 'Instant noodles / Maggi', reason: 'MSG + refined carb — joint mein inflammatory cytokines release trigger karte hain' },
        { _key: 'ri4', food: 'Bread (market wala)', reason: 'maida + preservatives — inflammation maintain karte hain jo recovery slow karta hai' },
      ],
    },
    {
      _key: 'rl2',
      categoryName: 'Dairy aur Heavy Foods',
      emoji: '🥛',
      items: [
        { _key: 'ri5', food: 'Packaged full-fat doodh (market wala)', reason: 'saturated fat zyada hoti hai jo joint mein prostaglandin-based sujan badhata hai' },
        { _key: 'ri6', food: 'Paneer (zyada matra mein)', reason: 'heavy digest hota hai — gut pe load badhta hai jo systemic inflammation source ban jaata hai' },
        { _key: 'ri7', food: 'Cream / Butter', reason: 'saturated fat — frozen shoulder mein inflammatory load already high hota hai, aur mat badhao' },
        { _key: 'ri8', food: 'Ice cream', reason: 'sugar + dairy fat combination — dono alag alag bhi inflammatory hain — saath mein double effect' },
      ],
    },
    {
      _key: 'rl3',
      categoryName: 'Teekha, Meetha aur Oily',
      emoji: '🍬',
      items: [
        { _key: 'ri9', food: 'Refined sugar (chai mein zyada, mithai)', reason: 'blood sugar spike — AGEs (advanced glycation end products) bante hain jo joint capsule ke collagen fibers ko damage karte hain — frozen shoulder mein directly harmful' },
        { _key: 'ri10', food: 'Deep fried khaana (pakode, puri, samosa)', reason: 'trans fat joint mein TNF-alpha inflammatory pathway activate karta hai' },
        { _key: 'ri11', food: 'Bahut teekha khaana (mirchi zyada)', reason: 'gut irritation se systemic inflammation aur baadhti hai — thodi mirch theek hai, zyada nahi' },
        { _key: 'ri12', food: 'Processed namkeen / chips', reason: 'sodium + trans fat — joint mein fluid retention aur sujan dono badhate hain' },
      ],
    },
    {
      _key: 'rl4',
      categoryName: 'Drinks',
      emoji: '🥤',
      items: [
        { _key: 'ri13', food: 'Cold drinks / Soda', reason: 'phosphoric acid calcium absorb hone nahi deta — joint tissue ke liye minerals deplete hote hain' },
        { _key: 'ri14', food: 'Packaged fruit juice', reason: 'fructose concentrate — blood sugar spike karta hai jo AGE formation se joint capsule ko damage karta hai' },
        { _key: 'ri15', food: 'Alcohol', reason: 'liver pe load badhta hai jo body ki natural anti-inflammatory mechanism slow kar deta hai — frozen shoulder recovery significantly slow hoti hai' },
        { _key: 'ri16', food: 'Bahut zyada chai ya coffee (3+ cups)', reason: 'excess caffeine calcium absorption block karta hai — joint tissue ke liye mineral balance disturb hoti hai' },
      ],
    },
  ],

  dailyMealPlan: [
    { _key: 'dmp1', slotName: 'Subah Uthke', slotTime: '6-7 AM', slotEmoji: '🌅', vegOptions: ['Garam paani + 1/2 tsp haldi + chutki kali mirch', 'Bheegi methi seeds 1 tsp (raat bheego ke) + garam paani'], nonVegOption: '' },
    { _key: 'dmp2', slotName: 'Nashta', slotTime: '8-9 AM', slotEmoji: '🍽️', vegOptions: ['Daliya with palak + adrak', 'Moong dal chilla (2 nos) + pudina chutney'], nonVegOption: '2 ande boiled + 1 jowar roti' },
    { _key: 'dmp3', slotName: 'Mid-Morning', slotTime: '11 AM', slotEmoji: '☀️', vegOptions: ['1 seb ya papaya (seasonal)', 'Bhuna chana (1 small mutthi)'], nonVegOption: '' },
    { _key: 'dmp4', slotName: 'Dopahar', slotTime: '1-2 PM', slotEmoji: '🍱', vegOptions: ['2 jowar/bajra roti + moong dal + lauki sabzi + kachha salad', 'Brown rice + masoor dal + palak sabzi'], nonVegOption: 'Grilled rohu / boiled chicken + 1-2 roti + sabzi' },
    { _key: 'dmp5', slotName: 'Shaam', slotTime: '4-5 PM', slotEmoji: '🌇', vegOptions: ['Adrak tulsi chai (bina doodh) + 4-5 akhrot', 'Roasted makhana (1 small katori)'], nonVegOption: '' },
    { _key: 'dmp6', slotName: 'Raat', slotTime: '7-8 PM', slotEmoji: '🌙', vegOptions: ['2 roti + arhar dal + sabzi (light)', 'Moong dal khichdi + 1/2 tsp ghee'], nonVegOption: 'Light chicken soup (no cream) + 1 roti' },
    { _key: 'dmp7', slotName: 'Sone Se Pehle', slotTime: '9 PM', slotEmoji: '😴', vegOptions: ['Garam haldi doodh (ghar ka, kam fat) — agar dairy suit karta ho', 'Garam paani + 1/4 tsp adrak powder'], nonVegOption: '' },
  ],

  samplePlan4Day: [
    {
      _key: 'sp1',
      day: 'Din 1',
      vegSubah: 'Haldi paani + kali mirch',
      vegNashta: 'Daliya + palak + adrak',
      vegDopahar: '2 jowar roti + moong dal + lauki sabzi',
      vegShaam: 'Seb + bhuna chana',
      vegRaat: 'Moong dal khichdi + ghee',
      nonVegNashta: '2 ande boiled + 1 jowar roti',
      nonVegDopahar: 'Grilled rohu + 2 roti + sabzi',
      nonVegRaat: 'Moong dal khichdi + ghee',
    },
    {
      _key: 'sp2',
      day: 'Din 2',
      vegSubah: 'Bheegi methi seeds + garam paani',
      vegNashta: 'Moong dal chilla + pudina chutney',
      vegDopahar: 'Brown rice + masoor dal + gajar sabzi',
      vegShaam: 'Adrak chai + akhrot 4-5',
      vegRaat: '2 bajra roti + arhar dal + turai sabzi',
      nonVegNashta: 'Moong dal chilla + pudina chutney',
      nonVegDopahar: 'Boiled chicken (100g) + 2 roti + gajar sabzi',
      nonVegRaat: '2 bajra roti + arhar dal + turai sabzi',
    },
    {
      _key: 'sp3',
      day: 'Din 3',
      vegSubah: 'Haldi paani + kali mirch',
      vegNashta: 'Poha (vegetables ke saath, tamarind nahi)',
      vegDopahar: '2 roti + chana dal + methi sabzi',
      vegShaam: 'Papaya + roasted makhana',
      vegRaat: '2 jowar roti + moong dal + palak sabzi',
      nonVegNashta: '2 ande boiled + 1 bajra roti',
      nonVegDopahar: 'Grilled katla + 2 roti + methi sabzi',
      nonVegRaat: 'Light chicken soup (no cream) + 1 roti',
    },
    {
      _key: 'sp4',
      day: 'Din 4',
      vegSubah: 'Bheegi methi seeds + garam paani',
      vegNashta: 'Daliya + adrak + thoda amla',
      vegDopahar: 'Brown rice + rajma (half serving) + lauki sabzi',
      vegShaam: 'Adrak tulsi chai + bhuna chana',
      vegRaat: 'Moong dal khichdi + turai sabzi',
      nonVegNashta: 'Daliya + adrak',
      nonVegDopahar: 'Boiled chicken + brown rice + lauki sabzi',
      nonVegRaat: 'Moong dal khichdi + turai sabzi',
    },
  ],

  specialSituations: [
    {
      _key: 'ss1',
      situationType: 'flareUp',
      title: 'Flare-Up / Takleef Zyada Ho Tab',
      emoji: '😣',
      tips: [
        'Us din sirf khichdi, daliya ya moong dal soup lo — light aur easily digestible foods joint pe additional stress nahi dete',
        'Fried, dairy-heavy aur sugar wala khaana us din completely band karo — even jo normally allowed ho',
        'Haldi + adrak ka kadha (paani mein ubaal ke) din mein 2 baar lo — natural COX-2 inhibitors hain jo pain flare mein help karte hain',
      ],
    },
    {
      _key: 'ss2',
      situationType: 'fasting',
      title: 'Vrat / Fasting',
      emoji: '🙏',
      tips: [
        'Singhara atta (water chestnut flour) — anti-inflammatory minerals ke saath vrat-friendly option hai — roti ya chilla bana sakte hain',
        'Sabudana khichdi (thoda kam) — zyada sabudana nahi — pure starch hai jo blood sugar spike karta hai — frozen shoulder mein avoid karna better hai',
        'Vrat mein zyada meethe makhane ya sugary vrat prasad avoid karo — sugar spike AGEs banata hai jo joint capsule ko damage karta hai',
      ],
    },
    {
      _key: 'ss3',
      situationType: 'eatingOut',
      title: 'Bahar Khana Ho (Restaurant / Dhaba)',
      emoji: '🍽️',
      tips: [
        'Dal tadka + roti order karo — plain dal mein inflammation-triggering ingredients minimum hote hain',
        'Avoid karo: paneer tikka, fried starters, rich gravy curry — zyada fat aur masala joint inflammation directly badhata hai',
        'Practical hack: Pehle salad ya plain soup lo — bhar ke heavy main course avoid hoga — portion naturally control hoga',
      ],
    },
    {
      _key: 'ss4',
      situationType: 'travel',
      title: 'Travel Mein',
      emoji: '✈️',
      tips: [
        'Carry karo: bhuna chana, sukha amla, akhrot, dry roasted makhana — teeno anti-inflammatory hain aur easy to carry',
        'Train / hotel mein: plain dal chawal, plain upma order karo — ye options mostly available hote hain aur safe hain',
      ],
    },
  ],

  proTip: 'Haldi ka khaana mein use karna kaafi nahi hota — ek glass garam paani mein 1/2 tsp haldi + chutki kali mirch subah khaali pet lo. Is combination ka absorption sabse zyada hota hai kyunki piperine curcumin bioavailability badhata hai — aur khaali pet mein koi competing food nahi hota.',
  importantNote: 'Ye chart ek general guide hai — frozen shoulder ka har case alag hota hai aur stage (freezing/frozen/thawing) ke hisaab se diet needs differ kar sakti hain. Apni condition ke hisaab se apne homoeopath ya specialist se personalized plan banwayein.',
  homeopathyDiet: 'Anti-inflammatory diet body ki systemic inflammation load kam karta hai — is environment mein homeopathic medicines better respond karti hain aur shoulder capsule ki healing faster hoti hai. Dono saath mein kaam karte hain — alag alag nahi.',

  faqs: [
    {
      _key: 'faq1',
      question: 'Kya frozen shoulder mein dahi khana allowed hai?',
      answer: 'Haan — ghar ka fresh bana dahi allowed hai, lekin limited matra mein.\nFresh dahi mein tyramine aur saturated fat packaged dahi se bahut kam hoti hai — joint inflammation pe less impact hota hai.\nAvoid karo: packaged / set dahi ya bahut khatta dahi — isme inflammatory compounds zyada hote hain.\n1 small katori fresh dahi din mein ek baar — ye safe limit hai frozen shoulder mein.\nZyada dairy overall avoid karna better hai — shoulder capsule inflammation se recovery faster hoti hai.',
    },
    {
      _key: 'faq2',
      question: 'Frozen shoulder mein nimbu ya khatta khaana theek hai?',
      answer: 'Haan — nimbu aur natural khatta (amla, imli thodi matra) allowed hai.\nNimbu mein Vitamin C hota hai jo collagen synthesis ke liye zaroor hai — shoulder capsule ki repair ke liye directly useful.\nAvoid karo: bahut zyada imli, aachar — zyada sodium aur preservatives joint inflammation worsen karte hain.\nFresh nimbu paani subah ya khaane mein — ye beneficial hai.\nPackaged nimbu drinks ya ready-made khatte snacks se door raho.',
    },
    {
      _key: 'faq3',
      question: 'Frozen shoulder mein diet change se kitne din mein fark dikhta hai?',
      answer: 'Diet se results slow hote hain — lekin real hote hain.\n2-4 hafte consistent anti-inflammatory diet mein stiffness aur pain slightly better feel hona shuru hota hai.\nFrozen shoulder teen phases mein hota hai (freezing, frozen, thawing) — thawing phase mein diet ka response sabse zyada feel hota hai.\nSirf diet se complete recovery expect mat karo — physiotherapy aur homoeopathic treatment ke saath diet best results deta hai.\nApne doctor se regular follow-up zaroor rakhein.',
    },
    {
      _key: 'faq4',
      question: 'Frozen shoulder mein chai peena theek hai?',
      answer: '1-2 cups adrak wali chai (kam doodh, kam sugar) theek hai.\nAdrak mein gingerol compounds hain jo joint inflammation naturally reduce karte hain — plain chai se better hai frozen shoulder mein.\nAvoid karo: 3+ cups daily — excess caffeine calcium absorption block karta hai jo joint tissue ke liye harmful hai.\nDoodh wali full cream chai zyada lena bhi frozen shoulder mein avoid karein — dairy inflammation trigger ho sakta hai.\nTulsi chai ya adrak tulsi chai — ye sabse better option hai is condition mein.',
    },
    {
      _key: 'faq5',
      question: 'Frozen shoulder mein vrat kar sakte hain?',
      answer: 'Haan — short vrat (ekadashi, upvaas) kar sakte hain lekin planning chahiye.\nVrat mein singhara atta, sabudana (limited), akhrot, dry fruits — ye anti-inflammatory options hain.\nAvoid karo: bahut zyada meetha vrat prasad — sugar spike frozen shoulder ki stiffness worse karta hai.\nLong fasting (12+ hours) mein blood sugar drop hoti hai jo muscle cramps aur joint stiffness temporarily worse kar sakta hai — thoda thoda khaate raho.\nApne homoeopath se pehle baat kar lo agar vrat lamba hai.',
    },
    {
      _key: 'faq6',
      question: 'Frozen shoulder mein raat ko late khaana theek hai?',
      answer: 'Nahi — raat ko late khaana frozen shoulder mein avoid karna chahiye.\nRaat 7-8 baje ke baad heavy khaana khaane se digestion slow hoti hai — body ki repair process (tissue healing + collagen synthesis) ke liye energy available nahi rehti.\nLate night khaana blood sugar bhi disturb karta hai — AGEs (harmful compounds) bante hain jo joint capsule ko damage karte hain.\nAgar bhook lage — garam paani ya haldi doodh le sakte ho.\nYe ek chhota sa change hai — lekin frozen shoulder recovery mein clearly difference dalta hai.',
    },
    {
      _key: 'faq7',
      question: 'Homeopathic medicine ke saath koi khaana band karna padta hai?',
      answer: 'Kuch specific restrictions hoti hain — lekin sabke liye same nahi hoti.\nMost common: strong smell wali cheezein (camphor, strong perfume, raw onion/lahsun zyada matra mein) — kuch homoeopathic medicines ke absorb hone mein interference kar sakti hain.\nCoffee — kuch specific medicines ke saath restricted hoti hai — sabke saath nahi. Apne doctor se specifically poochho.\nYe diet chart homoeopathic treatment ke parallel ek support system hai — medicines replace nahi karta.\nApne homoeopath se specifically poochho ki aapki medicines ke saath koi specific food avoid karni hai kya.',
    },
    {
      _key: 'faq8',
      question: 'Frozen shoulder mein non-veg khana chahiye ya band karna padega?',
      answer: 'Band karna zaroori nahi — lekin type aur cooking method matter karta hai.\nAllowed: boiled / grilled machhi (rohu, katla) aur boiled chicken — lean protein + omega-3 — joint repair mein helpful hai.\nAvoid karo: red meat (mutton), fried non-veg, processed meat — ye joint inflammation directly badhate hain.\nMachhi frozen shoulder mein sabse better non-veg option hai — omega-3 shoulder joint mein inflammation naturally reduce karta hai.\nWeek mein 2-3 baar grilled ya steamed machhi — ye safe aur beneficial hai.',
    },
    {
      _key: 'faq9',
      question: 'Kya chawal / rice frozen shoulder mein allowed hai?',
      answer: 'Haan — brown rice ya hand-pounded rice limited matra mein allowed hai.\nWhite polished rice mein glycemic index high hota hai — blood sugar spike — inflammation — frozen shoulder mein stiffness worse hoti hai — isiliye kam karo.\nBrown rice ya khichdi (moong dal ke saath) — ye better options hain — fiber aur minerals saath milte hain.\nRoz dono time chawal avoid karo — ek waqt roti, ek waqt daliya ya khichdi rotate karo.\nRice completely band karne ki zaroorat nahi — bas refined white rice ki matra aur frequency kam karo.',
    },
    {
      _key: 'faq10',
      question: 'Frozen shoulder mein zyada tel masala khaana theek hai?',
      answer: 'Nahi — frozen shoulder mein zyada tel aur tez masala directly harmful hai.\nDeep frying mein trans fat banta hai jo TNF-alpha inflammatory pathway activate karta hai — shoulder capsule ki sujan seedha badhti hai.\nTez mirchi gut irritation karta hai jo systemic inflammation badhati hai — frozen shoulder mein ye condition already sensitive hoti hai.\nKachi ghani sarson ka tel ya desi ghee (thodi matra) — ye better alternatives hain jo anti-inflammatory properties rakhte hain.\nKhaana light banao — bhap mein, pressure cooker mein ya grilling se — frying se nahi.',
    },
  ],

  sources: [
    { _key: 's1', name: 'Sethi V, Garg M, Herve M, Mobasheri A — Potential complementary and/or synergistic effects of curcumin and boswellic acids for management of osteoarthritis — Therapeutic Advances in Musculoskeletal Disease — 2022', year: '2022', url: 'https://pubmed.ncbi.nlm.nih.gov/36171802' },
    { _key: 's2', name: 'Ivaskiene T et al — Collagen supplementation and regenerative health: advances in biomarker detection and smart material integration — Frontiers in Nutrition — 2025', year: '2025', url: 'https://pubmed.ncbi.nlm.nih.gov/41459089' },
    { _key: 's3', name: 'ICMR-NIN — Dietary Guidelines for Indians', year: '2024', url: 'https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf' },
  ],

  quickFacts: {
    mistake: 'Roz roz chawal + maida roti + chai with full cream doodh — ye teen cheezein ek saath chronic inflammatory load banate hain jo shoulder capsule ki healing rok deti hain',
    mustEat: 'Amla — sabse zyada Vitamin C — collagen synthesis ke liye body ka primary raw material — frozen shoulder recovery mein directly important hai',
    mustAvoid: 'Refined sugar (mithai, cold drinks, packaged juice) — AGEs banta hai jo frozen shoulder mein already damaged joint capsule ke collagen fibers ko further damage karta hai',
  },

  doctorNote: 'Mere frozen shoulder patients mein jo log haldi + kali mirch ka garam paani subah khaali pet lete hain aur dairy aur maida dono ek saath chodh dete hain — unka homeopathic treatment response clearly better hota hai. Sirf ek chodh ke nahi — dono combination mein. — Dr. Shadab Khan, MD Homoeopath',
  reviewDate: 'May 2026',

  shareTextGreenRed: 'Frozen Shoulder mein kya khayein, kya nahi — complete list: homeopedia.in/diet/frozen-shoulder',
  shareTextMealPlan: 'Frozen Shoulder ke liye 4-din ka Indian diet plan: homeopedia.in/diet/frozen-shoulder',
  shareTextPage: 'Frozen Shoulder Diet Guide — green list, meal plan, special situations sab: homeopedia.in/diet/frozen-shoulder',

  publishedAt: new Date().toISOString(),
}

async function seed() {
  console.log('🌱 Seeding Frozen Shoulder diet chart...')
  await client.createOrReplace(doc)
  console.log('✅ Frozen Shoulder diet chart seeded — homeopedia.in/diet/frozen-shoulder')
}

seed().catch(console.error)
