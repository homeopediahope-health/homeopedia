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
  _id: 'diet-hashimotos-thyroiditis',
  _type: 'diet',
  title: "Hashimoto's Thyroiditis Diet Chart",
  slug: { _type: 'slug', current: 'hashimotos-thyroiditis' },
  hindiName: 'Hashimoto ki Bimari / Thyroid ki Sujan',
  category: 'Endocrine',
  metaTitle: "Hashimoto's Diet – Kya Khayein Kya Nahi | Homeopedia",
  metaDescription:
    "Hashimoto's thyroiditis diet chart – green list, red list, daily meal plan, veg aur non-veg dono. Dr. Shadab Khan. Doctor-reviewed. Homeopedia.in",
  intro:
    "Hashimoto's mein immune system thyroid gland par attack karta hai – aur kuch foods is immune response ko directly trigger ya calm karte hain. Neeche complete guide hai – green list, red list, daily meal plan, veg/non-veg dono options, aur vrat/travel jaise special situations.",
  reviewDate: 'May 2026',
  doctorNote:
    "Maine notice kiya hai ki Hashimoto's patients mein jo log maida aur gaye ka doodh dono ek saath chodh dete hain unka anti-TPO antibody response treatment mein clearly better hota hai – akela ek chodh ke sirf partial improvement milti hai – dono milke zyada fark aata hai.",
  homeopathyDiet:
    "Sahi diet se gut inflammation aur immune dysregulation kam hoti hai – jisse homeopathic medicines thyroid gland par better kaam karti hain aur healing faster hoti hai.",
  importantNote:
    "Ye chart ek general guide hai – Hashimoto's ka course har patient mein alag hota hai. Apni condition, antibody levels, aur thyroid function ke hisab se apne homoeopath se personalized plan banwayein.",
  proTip:
    "Hashimoto's patients ko raat ki neend se uthke seedha chai ya coffee nahi – pehle lukewarm paani piyo. Thyroid subah cortisol pattern pe kaam karta hai – caffeine se seedha cortisol spike immunity further dysregulate karta hai – yeh ek simple change jo main clinic mein hamesha suggest karta hoon.",

  eatingHabits: [
    {
      _key: 'eh1',
      habit: 'Levothyroxine (ya homeopathic medicine) lene ke baad 30-60 min khaali pet raho',
      reason:
        'Khaana dawa ki absorption seedha block karta hai – is gap ko maintain karna zaruri hai',
    },
    {
      _key: 'eh2',
      habit: 'Raat 7 baje ke baad heavy khaana avoid karo',
      reason:
        'Slow digestion T3/T4 conversion ko further slow karta hai – raat mein light khaana behtar hai',
    },
    {
      _key: 'eh3',
      habit: 'Har 3-4 ghante mein kuch khao',
      reason:
        'Blood sugar stable rakho – thyroid ke saath adrenal function bhi affect hota hai jo blood sugar se linked hai',
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
          food: 'Daliya (broken wheat)',
          reason: 'Low glycemic – thyroid mein insulin spikes autoimmune response worsen karte hain',
        },
        {
          _key: 'vg1i2',
          food: 'Brown rice',
          reason: "Magnesium ka source – Hashimoto's mein magnesium deficiency common hai",
        },
        {
          _key: 'vg1i3',
          food: 'Jowar / Bajra roti',
          reason:
            "Gluten-free grain – maida se behtar anti-inflammatory option jo Hashimoto's mein safer hai",
        },
        {
          _key: 'vg1i4',
          food: 'Poha',
          reason:
            'Light, easily digestible – inflammatory load thyroid par kam karta hai',
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
          reason:
            "Gut inflammation kam karta hai jo Hashimoto's immune flare se directly linked hai",
        },
        {
          _key: 'vg2i2',
          food: 'Turai',
          reason: 'Alkaline vegetable – autoimmune sujan mein helpful',
        },
        {
          _key: 'vg2i3',
          food: 'Palak (pakai hui – raw nahi)',
          reason:
            "Iron + folate – Hashimoto's mein iron deficiency bahut common hai – pakane se oxalate bhi kam hota hai",
        },
        {
          _key: 'vg2i4',
          food: 'Gajar',
          reason: 'Beta-carotene – thyroid ko oxidative damage se bachata hai',
        },
        {
          _key: 'vg2i5',
          food: 'Shimla mirch (red/yellow)',
          reason:
            "Vitamin C – iron absorption badhata hai jo Hashimoto's mein zaruri hai",
        },
        {
          _key: 'vg2i6',
          food: 'Kaddu / sitaphal',
          reason:
            'Anti-inflammatory carotenoids – immune modulation mein help karta hai',
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
          food: 'Seb',
          reason: 'Quercetin content – thyroid gland ki chronic sujan kam karta hai',
        },
        {
          _key: 'vg3i2',
          food: 'Papaya',
          reason:
            "Vitamin C + digestive enzymes – gut health improve karta hai jo Hashimoto's-gut connection ke liye zaroori hai",
        },
        {
          _key: 'vg3i3',
          food: 'Amla (fresh ya dry)',
          reason:
            'Vitamin C ka sabse concentrated Indian source – thyroid antibody load ghata sakta hai',
        },
        {
          _key: 'vg3i4',
          food: 'Nar (Pomegranate)',
          reason:
            'Anti-inflammatory polyphenols – autoimmune activity moderate karte hain',
        },
        {
          _key: 'vg3i5',
          food: 'Jamun (seasonal)',
          reason:
            "Low sugar fruit – blood sugar stable rakhta hai – thyroid patients mein zaruri",
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
          food: 'Moong dal (chilke wali)',
          reason:
            "Easily digestible protein – gut pe load nahi – Hashimoto's mein leaky gut hoti hai to heavy dal avoid",
        },
        {
          _key: 'vg4i2',
          food: 'Masoor dal',
          reason:
            "Iron-rich – Hashimoto's mein anemia ka risk hota hai – masoor best plant iron source hai",
        },
        {
          _key: 'vg4i3',
          food: 'Rajma (achhi tarah boil karke)',
          reason:
            'Zinc source – thyroid hormone synthesis ke liye zinc zaroori hai',
        },
        {
          _key: 'vg4i4',
          food: 'Chana (bhuna ya boil)',
          reason:
            'Slow-digesting protein – blood sugar spike nahi karta',
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
          food: 'Haldi + kali mirch ka combination',
          reason:
            'Curcumin thyroid inflammation reduce karta hai – kali mirch ka piperine absorption badhata hai',
        },
        {
          _key: 'vg5i2',
          food: 'Adrak (sonth ya fresh)',
          reason: 'Gingerol – autoimmune sujan mein anti-inflammatory',
        },
        {
          _key: 'vg5i3',
          food: 'Jeera',
          reason:
            "Gut motility improve karta hai – Hashimoto's mein constipation common complaint hai",
        },
        {
          _key: 'vg5i4',
          food: 'Brazil nut (1-2 daily)',
          reason:
            'Selenium thyroid peroxidase enzyme ke liye zaroori hai – deficiency anti-TPO antibodies badhati hai',
        },
        {
          _key: 'vg5i5',
          food: 'Coconut oil (small quantity for cooking)',
          reason:
            'Medium chain fatty acids easily absorb hote hain – thyroid ko extra stress nahi deta',
        },
        {
          _key: 'vg5i6',
          food: 'Haldi doodh (plant-based milk mein)',
          reason:
            'Curcumin + anti-inflammatory combination – gaye ka doodh nahi, coconut ya oat milk use karein',
        },
        {
          _key: 'vg5i7',
          food: 'Green tea (1 cup)',
          reason:
            'EGCG antioxidant – autoimmune inflammation moderate karta hai – zyada nahi',
        },
      ],
    },
  ],

  nonVegAllowed: [
    {
      _key: 'nva1',
      food: 'Ande (boiled)',
      reason:
        "Selenium + Vitamin D dono – Hashimoto's mein dono ki deficiency directly linked hai",
    },
    {
      _key: 'nva2',
      food: 'Machli – rohu, katla, surmai',
      reason:
        'Omega-3 fatty acids – thyroid gland ki chronic inflammation kam karte hain',
    },
    {
      _key: 'nva3',
      food: 'Chicken (boiled ya grilled, skin nahi)',
      reason:
        'Lean protein – thyroid hormone synthesis ke liye amino acids zaruri hain – fried nahi',
    },
  ],

  nonVegAvoid: [
    {
      _key: 'nvav1',
      food: 'Processed meat – sausage, salami',
      reason:
        "Preservatives + additives – Hashimoto's mein immune system trigger karte hain",
    },
    {
      _key: 'nvav2',
      food: 'Red meat / mutton',
      reason: 'Arachidonic acid – autoimmune inflammation seedha badhata hai',
    },
    {
      _key: 'nvav3',
      food: 'Fried chicken / fish',
      reason:
        'Trans fat – T4 se T3 conversion slow karta hai – cooking method directly matter karta hai',
    },
    {
      _key: 'nvav4',
      food: 'Shellfish – prawns, crab',
      reason:
        "Heavy + iodine load – excess iodine Hashimoto's mein antibody levels badha sakta hai",
    },
  ],

  redList: [
    {
      _key: 'rl1',
      categoryName: 'Gluten aur Maida',
      emoji: '🚫',
      items: [
        {
          _key: 'rl1i1',
          food: 'Maida (bread, biscuit, white bread)',
          reason:
            'Gluten gliadin protein thyroid antigens se molecular mimicry karta hai – anti-TPO antibodies trigger hoti hain',
        },
        {
          _key: 'rl1i2',
          food: 'White bread / burger bun',
          reason:
            'Maida ka hi form – gut permeability badhata hai – leaky gut = Hashimoto\'s flare',
        },
        {
          _key: 'rl1i3',
          food: 'Seviyan / vermicelli (maida wali)',
          reason:
            'Same gluten problem – sooji bhi avoid karein',
        },
      ],
    },
    {
      _key: 'rl2',
      categoryName: 'Goitrogenic Foods (Kacche mein)',
      emoji: '⚠️',
      items: [
        {
          _key: 'rl2i1',
          food: 'Kacchi gobhi / raw cabbage',
          reason:
            'Goitrogens thyroid iodine uptake block karte hain – agar khaana ho toh pakao',
        },
        {
          _key: 'rl2i2',
          food: 'Kacchi cauliflower',
          reason:
            'Same goitrogenic effect – steaming se 30% goitrogens reduce hote hain – completely kaccha avoid',
        },
        {
          _key: 'rl2i3',
          food: 'Kaccha broccoli',
          reason:
            'Raw cruciferous – thyroid gland pe extra load – steam karke lo agar lena ho',
        },
      ],
    },
    {
      _key: 'rl3',
      categoryName: 'Dairy (Gaye ka Doodh)',
      emoji: '🥛',
      items: [
        {
          _key: 'rl3i1',
          food: 'Gaye ka doodh',
          reason:
            "Hashimoto's mein lactose intolerance ki frequency zyada hoti hai – casein protein autoimmune response trigger kar sakta hai",
        },
        {
          _key: 'rl3i2',
          food: 'Packaged / flavoured yogurt',
          reason:
            'Added sugar + preservatives – gut microbiome disrupt karta hai jo Hashimoto\'s ke liye harmful hai',
        },
        {
          _key: 'rl3i3',
          food: 'Ice cream / cream',
          reason: 'High saturated fat + sugar – inflammatory load badhata hai',
        },
      ],
    },
    {
      _key: 'rl4',
      categoryName: 'Teekha, Meetha aur Ultra-processed',
      emoji: '🍬',
      items: [
        {
          _key: 'rl4i1',
          food: 'Refined sugar (mithai, cold drinks, packaged juice)',
          reason:
            'Blood sugar spike – cortisol badhata hai – jo thyroid antibody production further trigger karta hai',
        },
        {
          _key: 'rl4i2',
          food: 'Packaged namkeen / chips',
          reason: 'Trans fat + refined starch – double inflammatory hit',
        },
        {
          _key: 'rl4i3',
          food: 'Excess namak / salt',
          reason: 'High sodium – thyroid function pe indirect stress',
        },
      ],
    },
    {
      _key: 'rl5',
      categoryName: 'Drinks',
      emoji: '🥤',
      items: [
        {
          _key: 'rl5i1',
          food: 'Coffee (3+ cups daily)',
          reason:
            "Excess caffeine cortisol spike – Hashimoto's mein adrenal-thyroid connection disrupt karta hai – 1 cup subah allowed, zyada nahi",
        },
        {
          _key: 'rl5i2',
          food: 'Alcohol',
          reason:
            'Liver mein T4 se T3 conversion hoti hai – alcohol isko directly impair karta hai',
        },
        {
          _key: 'rl5i3',
          food: 'Cold drinks / soda',
          reason:
            'Phosphoric acid + refined sugar – mineral absorption block karta hai – selenium, zinc dono affect hote hain',
        },
        {
          _key: 'rl5i4',
          food: 'Packaged fruit juice',
          reason:
            'Fructose concentrate – blood sugar spike – same inflammatory cascade',
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
        'Lukewarm paani + nimbu + adrak – khaali pet digestive system wake up karta hai',
        'Bheegi methi seeds (1 tsp) – gut motility improve – Hashimoto\'s mein constipation common hai',
      ],
      nonVegOption: '',
    },
    {
      _key: 'dmp2',
      slotName: 'Nashta',
      slotTime: '8–9 AM',
      slotEmoji: '🍽️',
      vegOptions: [
        'Daliya with vegetables (lauki / shimla mirch) – low glycemic, filling, gluten-free',
        'Moong dal chilla (2-3) + hari chutney – protein-rich, gut-friendly',
      ],
      nonVegOption: '2 ande boiled + 1 jowar roti – selenium + protein combination for Hashimoto\'s',
    },
    {
      _key: 'dmp3',
      slotName: 'Mid-Morning',
      slotTime: '11 AM',
      slotEmoji: '☀️',
      vegOptions: [
        '1 seasonal fruit (seb / papaya / nar) – antioxidants, natural sugar, no spike',
        'Bhuna chana (handful) – slow protein, blood sugar stable',
      ],
      nonVegOption: '',
    },
    {
      _key: 'dmp4',
      slotName: 'Dopahar',
      slotTime: '1–2 PM',
      slotEmoji: '🌱',
      vegOptions: [
        '2 jowar/bajra roti + moong dal + lauki sabzi – complete gluten-free Indian meal',
        'Brown rice + masoor dal + salad (shimla mirch + gajar) – iron-rich lunch',
      ],
      nonVegOption: 'Grilled fish (rohu/surmai) + 1 bajra roti + sabzi – omega-3 ke saath complete meal',
    },
    {
      _key: 'dmp5',
      slotName: 'Shaam',
      slotTime: '4–5 PM',
      slotEmoji: '🌿',
      vegOptions: [
        'Adrak tulsi herbal chai (1 cup, no dairy milk) + akhrot 4-5 (omega-3 ke liye)',
        'Roasted makhana – light snack, good phosphorus source',
      ],
      nonVegOption: '',
    },
    {
      _key: 'dmp6',
      slotName: 'Raat',
      slotTime: '7–8 PM',
      slotEmoji: '🌙',
      vegOptions: [
        '1-2 roti + sabzi + dal – light, easy to digest, raat mein heavy nahi',
        'Moong dal khichdi + desi ghee (1 tsp) – easily digestible, gut-healing',
      ],
      nonVegOption: 'Chicken soup (no cream, no heavy masala) + 1 jowar roti – light protein at night',
    },
    {
      _key: 'dmp7',
      slotName: 'Sone Se Pehle',
      slotTime: '9 PM',
      slotEmoji: '😴',
      vegOptions: [
        'Haldi + kali mirch + coconut milk warm drink – curcumin absorption ke liye kali mirch zaruri hai',
        'Warm jeera paani – gut motility support, constipation prevention',
      ],
      nonVegOption: '',
    },
  ],

  samplePlan4Day: [
    {
      _key: 'sp1',
      day: 'Din 1',
      vegSubah: 'Lukewarm paani + nimbu',
      vegNashta: 'Moong dal chilla (2) + hari chutney',
      vegDopahar: '2 bajra roti + masoor dal + lauki sabzi + salad',
      vegShaam: 'Herbal chai + akhrot 4',
      vegRaat: 'Moong khichdi + ghee (1 tsp)',
      nonVegNashta: '2 ande boiled + 1 jowar roti + hari chutney',
      nonVegDopahar: 'Grilled surmai / rohu + 2 bajra roti + lauki sabzi',
      nonVegRaat: 'Chicken soup (light) + 1 jowar roti',
    },
    {
      _key: 'sp2',
      day: 'Din 2',
      vegSubah: 'Bheegi methi seeds + lukewarm paani',
      vegNashta: 'Daliya (vegetables ke saath) + 1 seb',
      vegDopahar: 'Brown rice + chana dal + turai sabzi + gajar salad',
      vegShaam: 'Roasted makhana + tulsi chai',
      vegRaat: '2 jowar roti + palak sabzi (pakai) + curd (nariyal wala)',
      nonVegNashta: 'Daliya + vegetables + 1 seb',
      nonVegDopahar: 'Grilled chicken (skin nahi) + brown rice + turai sabzi',
      nonVegRaat: '2 jowar roti + palak sabzi + masoor dal',
    },
    {
      _key: 'sp3',
      day: 'Din 3',
      vegSubah: 'Adrak + haldi warm paani',
      vegNashta: 'Poha (onion + matar ke saath) + 1 papaya slice',
      vegDopahar: '2 bajra roti + rajma (achhi tarah boil) + shimla mirch',
      vegShaam: 'Bhuna chana + 1 nar (pomegranate)',
      vegRaat: 'Masoor dal + 1 jowar roti + lauki',
      nonVegNashta: '2 ande scrambled (no butter, dry roast) + poha',
      nonVegDopahar: 'Machli curry (coconut base, light) + 1 bajra roti',
      nonVegRaat: 'Chicken khichdi (moong dal + rice, light) + ghee',
    },
    {
      _key: 'sp4',
      day: 'Din 4',
      vegSubah: 'Lukewarm paani + amla juice (fresh)',
      vegNashta: 'Moong dal cheela (2) + tomato chutney',
      vegDopahar: 'Brown rice + arhar dal + gajar-methi sabzi + salad',
      vegShaam: 'Green tea (1 cup) + akhrot 3-4',
      vegRaat: 'Daliya (namkeen) + lauki raita (nariyal dahi)',
      nonVegNashta: 'Moong dal chilla + 1 boiled anda',
      nonVegDopahar: 'Grilled chicken + brown rice + gajar-methi sabzi',
      nonVegRaat: 'Masoor dal + 1 jowar roti + lauki',
    },
  ],

  specialSituations: [
    {
      _key: 'ss1',
      situationType: 'flareUp',
      title: 'Flare-Up / Takleef Zyada Ho Tab',
      emoji: '🔴',
      tips: [
        'Us din sirf moong dal khichdi ya daliya khao – gut ko rest dena zaroori hai – digest karna easy hona chahiye',
        'Raw vegetables, dal mein rajma/chana – us din bilkul avoid – heavy protein avoid karo',
        '1 tsp desi ghee khichdi mein – gut lining soothe karta hai – Hashimoto\'s flare mein gut bhi inflamed hoti hai',
      ],
    },
    {
      _key: 'ss2',
      situationType: 'fasting',
      title: 'Vrat / Fasting',
      emoji: '🕌',
      tips: [
        'Sabudana khichdi (without peanuts agar nahi digestible) – gluten-free vrat option, energy deta hai',
        'Singhara atta roti ya kuttu ki roti – gluten-free vrat flour – Hashimoto\'s ke liye safe',
        'Packaged vrat namkeen avoid karo – refined oil + additives – thyroid antibodies trigger kar sakte hain',
        'Agar hypothyroidism severe hai – bina doctor advice ke full day fast mat karo – blood sugar crash thyroid stress badhata hai',
      ],
    },
    {
      _key: 'ss3',
      situationType: 'eatingOut',
      title: 'Bahar Khana Ho (Restaurant / Dhaba)',
      emoji: '🍽️',
      tips: [
        'Dal tadka + jowar/bajra roti order karo – maida naan ya tandoori roti avoid',
        '"No cream, no butter gravy" – request karo – dairy load Hashimoto\'s mein problem karta hai',
        'Practical hack: Ghar se khana packaged karke leke jao jab long outing ho – restaurant mein completely gluten-dairy free milna mushkil hai',
      ],
    },
    {
      _key: 'ss4',
      situationType: 'travel',
      title: 'Travel Mein',
      emoji: '✈️',
      tips: [
        'Carry karo: bhuna chana, dry amla, akhrot, jowar crackers – in sabse blood sugar stable rahega',
        'Train/hotel mein: plain dal chawal (no cream sabzi) ya idli (rice-based, gluten-free) order karo – South Indian options train mein safer hain',
      ],
    },
  ],

  quickFacts: {
    mistake:
      'Soya milk ya soya products ko "healthy dairy alternative" samajhna – asal mein soya Hashimoto\'s mein thyroid function aur interfere karta hai',
    mustEat:
      'Pakki hui machli (rohu / surmai) – 2 baar weekly – omega-3 se thyroid gland inflammation directly reduce hoti hai',
    mustAvoid:
      'Maida – kyunki gluten ka gliadin protein thyroid antigens se molecular mimicry karta hai aur anti-TPO antibodies trigger karta hai',
  },

  shareTextGreenRed:
    "Hashimoto's mein kya khayein, kya nahi – complete list: homeopedia.in/diet/hashimotos-thyroiditis",
  shareTextMealPlan:
    "Hashimoto's ke liye 4-din ka Indian diet plan: homeopedia.in/diet/hashimotos-thyroiditis",
  shareTextPage:
    "Hashimoto's Diet Guide – green list, meal plan, special situations sab: homeopedia.in/diet/hashimotos-thyroiditis",

  sources: [
    {
      _key: 'src1',
      name: 'Osowiecka K, Myszkowska-Ryciak J – The Influence of Nutritional Intervention in the Treatment of Hashimoto\'s Thyroiditis – Nutrients 2023',
      year: '2023',
      url: 'https://pubmed.ncbi.nlm.nih.gov/36839399',
    },
    {
      _key: 'src2',
      name: 'Ihnatowicz P et al – The importance of nutritional factors and dietary management of Hashimoto\'s thyroiditis – Ann Agric Environ Med 2020',
      year: '2020',
      url: 'https://pubmed.ncbi.nlm.nih.gov/32588591',
    },
    {
      _key: 'src3',
      name: 'Piticchio T et al – Effect of gluten-free diet on autoimmune thyroiditis progression – Frontiers in Endocrinology 2023',
      year: '2023',
      url: 'https://pubmed.ncbi.nlm.nih.gov/37554764',
    },
    {
      _key: 'src4',
      name: 'Liontiris MI, Mazokopakis EE – A concise review of Hashimoto thyroiditis and the importance of iodine, selenium, vitamin D and gluten – Hellenic Journal of Nuclear Medicine 2017',
      year: '2017',
      url: 'https://pubmed.ncbi.nlm.nih.gov/28315909',
    },
    {
      _key: 'src5',
      name: 'Dietary Guidelines for Indians – ICMR-NIN 2024',
      year: '2024',
      url: 'https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf',
    },
  ],
}

async function seed() {
  console.log("🌱 Seeding Hashimoto's Thyroiditis diet chart...")
  await client.createOrReplace(doc)
  console.log("✅ Hashimoto's diet chart seeded — homeopedia.in/diet/hashimotos-thyroiditis")
}

seed().catch(console.error)
