import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token:
    'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
  useCdn: false,
})

const doc = {
  _id: 'diet-lactose-intolerance',
  _type: 'diet',
  title: 'Lactose Intolerance Diet Chart',
  slug: { _type: 'slug', current: 'lactose-intolerance' },
  relatedDiseaseSlug: 'lactose-intolerance',
  hindiName: 'Doodh Se Takleef / Dudh Asahanshilta',
  category: 'Digestive',
  metaTitle: 'Lactose Intolerance Diet – Kya Khayein Kya Nahi | Homeopedia',
  metaDescription:
    'Lactose intolerance (doodh se takleef) diet chart – green list, red list, meal plan, veg aur non-veg dono. Dr. Shadab Khan. Doctor-reviewed. Homeopedia.in',
  intro:
    'Lactose intolerance mein body mein lactase enzyme ki kami hoti hai – jis wajah se dairy ka lactose sugar intestine mein digest nahi hota aur gas, bloating aur dard hota hai. Neeche complete guide hai – green list, red list, daily meal plan, veg aur non-veg dono options, aur vrat/travel jaise special situations.',
  reviewDate: 'May 2026',
  doctorNote:
    'Maine notice kiya hai ki lactose intolerance ke jo patients dairy completely band karte hain – unka calcium neeche jaata hai aur treatment ke saath bone-related complaints aane lagte hain. Jo log til, palak, tofu aur ghar ka fresh dahi saath mein rakhte hain unka treatment response consistently better hota hai. – Dr. Shadab Khan, MD Homoeopath',
  homeopathyDiet:
    'Lactose intolerance mein jab diet sahi hoti hai – gut mein inflammation kam hoti hai – aur homeopathic medicines gut lining repair mein better kaam karti hain. Dono saath chalte hain.',
  importantNote:
    'Ye chart ek general guide hai. Lactose intolerance ki severity har kisi mein alag hoti hai – kisi ko thoda dahi bhi affect karta hai, kisi ko nahi. Apne homoeopath se apni condition ke hisaab se personalized plan banwayein.',
  proTip:
    'Dairy bilkul band karne ki zaroorat nahi – timing aur quantity matter karti hai. Khaane ke saath chhoti matra mein dairy lo – khaali pet kabhi nahi. Yahi ek change bahut fark laata hai.',

  eatingHabits: [
    {
      _key: 'eh1',
      habit: 'Dairy kabhi bhi khaali pet mat lo',
      reason:
        'Lactose symptoms khaali pet mein bahut zyada badh jaate hain',
    },
    {
      _key: 'eh2',
      habit: 'Chhota chhota khaao din mein 4-5 baar',
      reason:
        'Ek baar mein zyada lactose gut ko overwhelm karta hai – chhoti matra better tolerate hoti hai',
    },
    {
      _key: 'eh3',
      habit: 'Koi bhi naya food try karo toh 3 din observe karo',
      reason:
        'Lactose sensitivity har kisi mein alag hoti hai – apni personal tolerance jaanna zaroori hai',
    },
  ],

  vegGreenList: [
    {
      _key: 'vg1',
      categoryName: 'Anaj / Grains',
      emoji: '🌾',
      items: [
        {
          _key: 'vg1i1',
          food: 'Chawal (plain)',
          reason: 'Lactose-free hai, gut ko soothe karta hai',
        },
        {
          _key: 'vg1i2',
          food: 'Daliya (bina doodh)',
          reason: 'Easily digest hota hai, bloating nahi',
        },
        {
          _key: 'vg1i3',
          food: 'Roti / chapati',
          reason: 'Wheat mein lactose nahi hota',
        },
        {
          _key: 'vg1i4',
          food: 'Poha',
          reason: 'Light hai, gut pe zero stress, digestion smooth',
        },
        {
          _key: 'vg1i5',
          food: 'Brown rice',
          reason: 'Slow digesting, gas trigger nahi karta',
        },
      ],
    },
    {
      _key: 'vg2',
      categoryName: 'Sabziyaan / Vegetables',
      emoji: '🥦',
      items: [
        {
          _key: 'vg2i1',
          food: 'Lauki',
          reason: 'Gut ko thanda rakhti hai, inflammation kam karta hai',
        },
        {
          _key: 'vg2i2',
          food: 'Turai / tinda',
          reason: 'Water-rich, digestion mein help karti hai',
        },
        {
          _key: 'vg2i3',
          food: 'Palak',
          reason: 'Calcium ka non-dairy source – jo lactose intolerance mein zaroor chahiye hota hai',
        },
        {
          _key: 'vg2i4',
          food: 'Gajar',
          reason: 'Prebiotic fiber – gut bacteria ko healthy rakhti hai',
        },
        {
          _key: 'vg2i5',
          food: 'Karela',
          reason: 'Bitter compounds gut lining ko strengthen karte hain',
        },
        {
          _key: 'vg2i6',
          food: 'Parwal',
          reason: 'Light sabzi, easily digest hoti hai',
        },
      ],
    },
    {
      _key: 'vg3',
      categoryName: 'Phal / Fruits',
      emoji: '🍎',
      items: [
        {
          _key: 'vg3i1',
          food: 'Seb (bina chilka)',
          reason: 'Pectin fiber gut ko coat karta hai – diarrhea mein help karta hai',
        },
        {
          _key: 'vg3i2',
          food: 'Papaya',
          reason: 'Papain enzyme digestion improve karta hai',
        },
        {
          _key: 'vg3i3',
          food: 'Nar (pomegranate)',
          reason: 'Antioxidant, gut inflammation kam karta hai',
        },
        {
          _key: 'vg3i4',
          food: 'Kela (pakka hua, overripe nahi)',
          reason: 'Dast band karta hai, potassium replace karta hai',
        },
        {
          _key: 'vg3i5',
          food: 'Amla',
          reason: 'Vitamin C + gut healing – lactose symptoms ke baad repair mein help karta hai',
        },
      ],
    },
    {
      _key: 'vg4',
      categoryName: 'Dal aur Protein',
      emoji: '🫘',
      items: [
        {
          _key: 'vg4i1',
          food: 'Moong dal (pani wali)',
          reason: 'Sabse easily digest hone wali dal – gut pe minimal stress',
        },
        {
          _key: 'vg4i2',
          food: 'Masoor dal',
          reason: 'Protein + iron – dairy ban hone pe nutritional gap fill karta hai',
        },
        {
          _key: 'vg4i3',
          food: 'Chana dal',
          reason: 'Slow digesting – bloating se zyada trigger nahi karta',
        },
        {
          _key: 'vg4i4',
          food: 'Tofu (soy-based)',
          reason: 'Dairy-free calcium source – lactose intolerance mein best protein option',
        },
      ],
    },
    {
      _key: 'vg5',
      categoryName: 'Drinks, Masale aur Tel',
      emoji: '🫚',
      items: [
        {
          _key: 'vg5i1',
          food: 'Jeera paani',
          reason: 'Jeera lactase enzyme activity support karta hai – gas aur bloating kam karta hai',
        },
        {
          _key: 'vg5i2',
          food: 'Adrak chai (bina doodh / plant milk mein)',
          reason: 'Ginger gut motility improve karta hai',
        },
        {
          _key: 'vg5i3',
          food: 'Ajwain + warm paani',
          reason: 'Trapped gas release karta hai jaldi',
        },
        {
          _key: 'vg5i4',
          food: 'Coconut milk (fresh ya unsweetened packaged)',
          reason: 'Dairy-free, lactose nahi, gut-friendly',
        },
        {
          _key: 'vg5i5',
          food: 'Til (sesame seeds)',
          reason: 'Non-dairy calcium source – lactose intolerance mein bone health ke liye important',
        },
        {
          _key: 'vg5i6',
          food: 'Desi ghee (thodi matra)',
          reason: 'Ghee mein lactose negligible hota hai – most LI patients tolerate kar lete hain',
        },
        {
          _key: 'vg5i7',
          food: 'Haldi + kali mirch ka paani',
          reason: 'Gut inflammation reduce karta hai – kali mirch piperine se curcumin absorb hota hai',
        },
      ],
    },
  ],

  nonVegAllowed: [
    {
      _key: 'nva1',
      food: 'Eggs (boiled/scrambled – bina doodh ke)',
      reason: 'Lactose-free, protein + Vitamin D dono milte hain – bone health ke liye',
    },
    {
      _key: 'nva2',
      food: 'Chicken (boiled/grilled – bina cream/butter gravy)',
      reason: 'Lean protein, dairy-free – cooking method zaroor sahi honi chahiye',
    },
    {
      _key: 'nva3',
      food: 'Rohu / Katla machhi',
      reason: 'Omega-3 + calcium – dairy ke bina bone support karne ka best non-veg option',
    },
  ],

  nonVegAvoid: [
    {
      _key: 'nvav1',
      food: 'Makhani / butter chicken / cream-based gravies',
      reason: 'Cream aur butter mein lactose hota hai – direct trigger',
    },
    {
      _key: 'nvav2',
      food: 'Cheese burst pizza / cheesy fast food',
      reason: 'Processed cheese mein high lactose – gut mein gas aur cramps',
    },
    {
      _key: 'nvav3',
      food: 'Packaged sausage / salami',
      reason: 'Hidden dairy derivatives hote hain (whey, casein) – label check karo',
    },
  ],

  redList: [
    {
      _key: 'rl1',
      categoryName: 'Dairy Products (High Lactose)',
      emoji: '🚫',
      items: [
        {
          _key: 'rl1i1',
          food: 'Doodh (gaay/bhains ka)',
          reason: 'Sabse zyada lactose – directly small intestine mein undigested rehta hai, fermentation se gas aur cramps',
        },
        {
          _key: 'rl1i2',
          food: 'Paneer (regular market wala)',
          reason: 'Lactose concentration high – thodi matra bhi symptoms trigger kar sakti hai',
        },
        {
          _key: 'rl1i3',
          food: 'Packaged / market ka set dahi',
          reason: 'Industrial fermentation incomplete hoti hai – lactose zyada bachta hai',
        },
        {
          _key: 'rl1i4',
          food: 'Cream / malai',
          reason: 'Pure fat + lactose – gut mein slow movement aur bloating',
        },
      ],
    },
    {
      _key: 'rl2',
      categoryName: 'Processed aur Hidden Lactose Foods',
      emoji: '⚠️',
      items: [
        {
          _key: 'rl2i1',
          food: 'Maida biscuits / cream biscuits',
          reason: 'Lactose-laden filling + maida dono gut ko disturb karte hain',
        },
        {
          _key: 'rl2i2',
          food: 'Instant noodles / packet soups',
          reason: 'Dry milk powder hota hai – hidden lactose',
        },
        {
          _key: 'rl2i3',
          food: 'Bread (packaged sliced)',
          reason: 'Dairy solids often add hote hain Indian packaged bread mein – label check zaroori',
        },
        {
          _key: 'rl2i4',
          food: 'Namkeen / chips (flavored)',
          reason: 'Cheese powder coating mein lactose hota hai',
        },
      ],
    },
    {
      _key: 'rl3',
      categoryName: 'Dairy-based Meetha aur Drinks',
      emoji: '🥛',
      items: [
        {
          _key: 'rl3i1',
          food: 'Doodh wali chai (3+ cups daily)',
          reason: 'Har cup mein lactose accumulate hota hai – cumulative effect = bloating',
        },
        {
          _key: 'rl3i2',
          food: 'Milkshake / lassi (market wala)',
          reason: 'High volume lactose ek saath – direct diarrhea trigger',
        },
        {
          _key: 'rl3i3',
          food: 'Kheer / halwa (doodh mein bana)',
          reason: 'Doodh + sugar combination gut fermentation ko speed up karta hai',
        },
        {
          _key: 'rl3i4',
          food: 'Ice cream',
          reason: 'Concentrated dairy + sugar – worst trigger',
        },
      ],
    },
    {
      _key: 'rl4',
      categoryName: 'Heavy aur Oily',
      emoji: '🍟',
      items: [
        {
          _key: 'rl4i1',
          food: 'Puri + aloo (bahar wala)',
          reason: 'Oil + maida + possible dairy combination gut ko slow karta hai',
        },
        {
          _key: 'rl4i2',
          food: 'Fried snacks (samosa, kachori)',
          reason: 'Maida + oil digestion slow karta hai – LI symptoms late ho ke aate hain',
        },
      ],
    },
  ],

  dailyMealPlan: [
    {
      _key: 'dmp1',
      slotName: 'Subah Uthke',
      slotTime: '6–7 AM',
      slotEmoji: '🌅',
      vegOptions: [
        'Jeera paani (warm) + soaked methi seeds 1 tsp',
        'Warm water + nimbu + adrak slice',
      ],
      nonVegOption: '',
    },
    {
      _key: 'dmp2',
      slotName: 'Nashta',
      slotTime: '8–9 AM',
      slotEmoji: '🍽️',
      vegOptions: [
        'Daliya (bina doodh – plant milk ya paani mein) + banana',
        'Poha + moong sprouts + nimbu',
      ],
      nonVegOption: '2 boiled eggs (bina doodh ke scramble) + 2 roti',
    },
    {
      _key: 'dmp3',
      slotName: 'Mid-Morning',
      slotTime: '11 AM',
      slotEmoji: '☀️',
      vegOptions: [
        '1 seasonal fruit (seb ya papaya)',
        'Bhuna chana handful + jeera paani',
      ],
      nonVegOption: '',
    },
    {
      _key: 'dmp4',
      slotName: 'Dopahar',
      slotTime: '1–2 PM',
      slotEmoji: '🌱',
      vegOptions: [
        '2 roti + moong dal + lauki ki sabzi + salad',
        'Brown rice + arhar dal + turai ki sabzi',
      ],
      nonVegOption: '2 roti + grilled chicken (bina cream) + palak sabzi',
    },
    {
      _key: 'dmp5',
      slotName: 'Shaam',
      slotTime: '4–5 PM',
      slotEmoji: '🌿',
      vegOptions: [
        'Adrak-tulsi chai (coconut milk ya bina doodh) + akhrot 4-5',
        'Roasted makhana (plain namak wala)',
      ],
      nonVegOption: '',
    },
    {
      _key: 'dmp6',
      slotName: 'Raat',
      slotTime: '7–8 PM',
      slotEmoji: '🌙',
      vegOptions: [
        'Khichdi (moong dal + chawal + ghee) + papad',
        '2 roti + masoor dal + palak sabzi',
      ],
      nonVegOption: 'Rohu machhi (steamed/grilled) + 1 roti + sabzi',
    },
    {
      _key: 'dmp7',
      slotName: 'Sone Se Pehle',
      slotTime: '9 PM',
      slotEmoji: '😴',
      vegOptions: [
        'Warm paani + saunf (gas release ke liye)',
        'Ajwain + warm paani (agar bloating ho)',
      ],
      nonVegOption: '',
    },
  ],

  samplePlan4Day: [
    {
      _key: 'sp1',
      day: 'Din 1',
      vegSubah: 'Jeera paani + methi seeds',
      vegNashta: 'Daliya (coconut milk mein) + seb',
      vegDopahar: '2 roti + moong dal + lauki sabzi',
      vegShaam: 'Bhuna chana + adrak chai (bina doodh)',
      vegRaat: 'Khichdi + ghee + papad',
      nonVegNashta: '2 boiled eggs + 1 roti',
      nonVegDopahar: '2 roti + grilled chicken (bina cream) + lauki sabzi',
      nonVegRaat: 'Rohu machhi (steamed) + 1 roti + sabzi',
    },
    {
      _key: 'sp2',
      day: 'Din 2',
      vegSubah: 'Warm nimbu paani + adrak',
      vegNashta: 'Poha + moong sprouts + nimbu',
      vegDopahar: 'Brown rice + arhar dal + turai sabzi + salad',
      vegShaam: 'Makhana + tulsi chai',
      vegRaat: '2 roti + masoor dal + palak sabzi',
      nonVegNashta: 'Egg bhurji (bina doodh) + 1 roti',
      nonVegDopahar: 'Brown rice + katla curry (bina cream) + salad',
      nonVegRaat: '2 roti + masoor dal + chicken soup (clear, bina cream)',
    },
    {
      _key: 'sp3',
      day: 'Din 3',
      vegSubah: 'Jeera paani + soaked akhrot 4',
      vegNashta: 'Moong dal chilla (bina doodh) + pudina chutney',
      vegDopahar: '2 roti + chana dal + gajar-gobi sabzi',
      vegShaam: 'Seb + bhuna chana',
      vegRaat: 'Chawal + moong dal ka soup + parwal sabzi',
      nonVegNashta: '2 boiled eggs + poha',
      nonVegDopahar: '2 roti + grilled surmai + gajar-gobi sabzi',
      nonVegRaat: 'Chawal + rohu machhi (baked) + parwal sabzi',
    },
    {
      _key: 'sp4',
      day: 'Din 4',
      vegSubah: 'Warm paani + haldi + kali mirch (pinch)',
      vegNashta: 'Daliya (paani mein) + kela + til',
      vegDopahar: 'Brown rice + masoor dal + karela sabzi (thodi)',
      vegShaam: 'Akhrot + adrak chai',
      vegRaat: '2 roti + arhar dal + turai sabzi',
      nonVegNashta: 'Egg chilla (bina doodh) + pudina chutney',
      nonVegDopahar: 'Brown rice + chicken (boiled) + karela sabzi',
      nonVegRaat: '2 roti + katla fish curry (oil-based, no cream) + sabzi',
    },
  ],

  specialSituations: [
    {
      _key: 'ss1',
      situationType: 'flareUp',
      title: 'Flare-Up / Takleef Zyada Ho Tab',
      emoji: '🔴',
      tips: [
        'Sirf rice water (maand) + khichdi + plain banana – gut ko rest do',
        'Us din dairy bilkul nahi – ghar ka dahi bhi nahi us din',
        'Jeera + ajwain ka paani baar baar piyo – gas aur cramps quickly kam hote hain',
      ],
    },
    {
      _key: 'ss2',
      situationType: 'fasting',
      title: 'Vrat / Fasting',
      emoji: '🕌',
      tips: [
        'Sabudana khichdi (ghar ka fresh dahi thoda) – usually tolerable hoti hai zyada log ke liye',
        'Makhana + singhara atta roti – dairy-free, vrat mein safe',
        'Vrat mein doodh wali chai aur paneer ekdum avoid – dono high lactose triggers hain',
        'Zyada gap mat rakhein – khaali pet zyada time = acid + gas',
      ],
    },
    {
      _key: 'ss3',
      situationType: 'eatingOut',
      title: 'Bahar Khana Ho (Restaurant / Dhaba)',
      emoji: '🍽️',
      tips: [
        'Order karo: plain dal, roti, chawal, tandoori chicken/fish (bina makhani gravy)',
        'Avoid karo: Butter naan, paneer dishes, cream-based curries, raita, lassi – sab dairy-heavy hain',
        'Practical hack: Waiter se boldo "bina cream, bina malai" – most dhabas accommodate karte hain',
      ],
    },
    {
      _key: 'ss4',
      situationType: 'travel',
      title: 'Travel Mein',
      emoji: '✈️',
      tips: [
        'Carry karo: Bhuna chana, dry fruits, plain roti, makhana – sab lactose-free aur travel-friendly',
        'Train/hotel mein: Plain dal-chawal order karo, tandoori roti + sabzi – safe choices hain har jagah',
      ],
    },
  ],

  quickFacts: {
    mistake:
      'Doodh band karna lekin paneer + dahi + chai jaari rakhna – hidden lactose continue karta rehta hai',
    mustEat:
      'Til (sesame seeds) – non-dairy calcium ka best Indian source',
    mustAvoid:
      'Market ka packaged lassi / milkshake – sabse zyada lactose ek saath deta hai',
  },

  shareTextGreenRed:
    'Lactose Intolerance mein kya khayein, kya nahi – complete list: homeopedia.in/diet/lactose-intolerance',
  shareTextMealPlan:
    'Lactose Intolerance ke liye 4-din ka Indian diet plan: homeopedia.in/diet/lactose-intolerance',
  shareTextPage:
    'Lactose Intolerance Diet Guide – green list, meal plan, special situations sab: homeopedia.in/diet/lactose-intolerance',

  sources: [
    {
      _key: 'src1',
      name: 'Facioni MS et al – Nutritional management of lactose intolerance: the importance of diet and food labelling – Journal of Translational Medicine 2020',
      year: '2020',
      url: 'https://pubmed.ncbi.nlm.nih.gov/32590986',
    },
    {
      _key: 'src2',
      name: 'Katoch GK et al – Lactose Intolerance and Its Dietary Management: An Update – Journal of the American Nutrition Association 2021',
      year: '2021',
      url: 'https://pubmed.ncbi.nlm.nih.gov/33831336',
    },
    {
      _key: 'src3',
      name: 'Bayless TM et al – Lactase Non-persistence and Lactose Intolerance – Current Gastroenterology Reports 2017',
      year: '2017',
      url: 'https://pubmed.ncbi.nlm.nih.gov/28421381',
    },
    {
      _key: 'src4',
      name: 'Dietary Guidelines for Indians – ICMR-NIN 2024',
      year: '2024',
      url: 'https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf',
    },
  ],
}

async function seed() {
  console.log('🌱 Seeding Lactose Intolerance diet chart...')
  await client.createOrReplace(doc)
  console.log('✅ Lactose Intolerance diet seeded — homeopedia.in/diet/lactose-intolerance')
}

seed().catch(console.error)
