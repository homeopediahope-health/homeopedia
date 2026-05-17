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
  _id: 'diet-anxiety-neurosis',
  _type: 'diet',
  title: 'Anxiety Neurosis (Chinta Rog) Diet Chart',
  slug: { _type: 'slug', current: 'anxiety-neurosis' },
  hindiName: 'Chinta Rog / Ghabrahat',
  category: 'Mental',
  metaTitle: 'Anxiety (Chinta Rog) Diet – Kya Khayein Kya Nahi | Homeopedia',
  metaDescription:
    'Anxiety neurosis diet chart – green list, red list, daily meal plan, veg aur non-veg dono. Dr. Shadab Khan. Doctor-reviewed. Homeopedia.in',
  intro:
    'Anxiety mein gut aur brain ek nerve (vagus nerve) se directly connected hain – jo aap khate hain wo serotonin production ko seedha affect karta hai, aur serotonin ka 90% gut mein banta hai. Neeche complete guide hai – green list, red list, daily meal plan, veg/non-veg dono options, aur vrat/travel/flare-up jaise special situations.',
  reviewDate: 'May 2026',
  doctorNote:
    'Maine notice kiya hai ki anxiety neurosis ke mere jo patients caffeine aur refined sugar dono ek saath chodh dete hain – unka treatment response clearly better hota hai – akele ek chodh ke nahi. Gut aur nervous system dono ko ek saath settle hone ka mauka milta hai tab treatment better kaam karta hai.',
  homeopathyDiet:
    'Jab gut healthy hoti hai toh homoeopathic medicines better absorb hoti hain aur nervous system medicines ke saath cooperate karta hai – anxiety mein diet aur treatment ek saath best result dete hain.',
  importantNote:
    'Ye chart ek general guide hai – har person ka anxiety pattern alag hota hai. Apni specific condition ke hisaab se apne homoeopath se personalized plan banwayein – ye guide ek starting point hai, final prescription nahi.',
  proTip:
    'Subah khaali pet sirf chai mat lo – pehle kuch solid khao, chahe 2 biscuit ya ek kela hi sahi – aur phir chai lo. Khaali pet caffeine directly cortisol spike karta hai jo anxiety ke liye worst start hai.',

  eatingHabits: [
    {
      _key: 'eh1',
      habit: 'Subah 8 baje tak nashta zaroor karo',
      reason:
        'Khaali pet blood sugar girta hai jo anxiety attack ko trigger karta hai',
    },
    {
      _key: 'eh2',
      habit: 'Raat 7 baje ke baad heavy ya stimulating khaana avoid karo',
      reason:
        'Cortisol level raat ko high hota hai jo neend aur anxiety dono bigaadta hai',
    },
    {
      _key: 'eh3',
      habit: 'Har 3-4 ghante mein kuch halka khao',
      reason:
        'Blood sugar stable rahega toh nervous system ka "alert mode" baar baar trigger nahi hoga',
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
          reason:
            'Slow digestion se blood sugar stable rehta hai – anxiety spikes kam hote hain',
        },
        {
          _key: 'vg1i2',
          food: 'Brown rice',
          reason:
            'Magnesium content se nervous system shant rehti hai',
        },
        {
          _key: 'vg1i3',
          food: 'Jowar / Bajra roti',
          reason:
            'Refined grain se better – gut microbiome support karta hai jo brain mood regulate karta hai',
        },
        {
          _key: 'vg1i4',
          food: 'Poha',
          reason:
            'Light, jaldi digest – subah nervous system pe load nahi padta',
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
          food: 'Palak',
          reason:
            'Folate aur magnesium dono hain – anxiety mein brain ke GABA receptors support karte hain',
        },
        {
          _key: 'vg2i2',
          food: 'Lauki',
          reason:
            'Cooling effect, gut inflammation kam karta hai – gut-brain axis ke liye',
        },
        {
          _key: 'vg2i3',
          food: 'Bhindi',
          reason:
            'Soluble fiber se gut bacteria nourish hoti hai jo serotonin produce karti hai',
        },
        {
          _key: 'vg2i4',
          food: 'Methi (fresh patte ya dana)',
          reason:
            'Blood sugar stable rakhta hai jo anxiety episodes reduce karta hai',
        },
        {
          _key: 'vg2i5',
          food: 'Gajar',
          reason:
            'Beta-carotene se oxidative stress kam hota hai jo anxious brain mein zyada hoti hai',
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
          food: 'Kela (fresh, slightly raw)',
          reason:
            'Tryptophan hota hai jo serotonin mein convert hota hai – natural mood stabilizer',
        },
        {
          _key: 'vg3i2',
          food: 'Seb',
          reason:
            'Quercetin se brain inflammation kam hoti hai',
        },
        {
          _key: 'vg3i3',
          food: 'Papaya',
          reason:
            'Vitamin C se cortisol (stress hormone) regulate hota hai',
        },
        {
          _key: 'vg3i4',
          food: 'Amla',
          reason:
            'Antioxidant rich – nervous system ki oxidative damage se bachata hai',
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
          food: 'Moong dal (chhilka wali)',
          reason:
            'Easily digest, tryptophan ka achha source – serotonin precursor',
        },
        {
          _key: 'vg4i2',
          food: 'Masoor dal',
          reason:
            'Iron aur folate – anxiety mein brain neurotransmitter function support karta hai',
        },
        {
          _key: 'vg4i3',
          food: 'Chana (boiled / sprouted)',
          reason:
            'Magnesium + zinc dono – anxiety mein deficient minerals hote hain',
        },
        {
          _key: 'vg4i4',
          food: 'Ghar ka fresh bana dahi (1 small katori)',
          reason:
            'Live cultures gut bacteria ko nourish karti hain – gut-serotonin link ke liye',
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
          food: 'Ashwagandha warm doodh (raat mein)',
          reason:
            'Adaptogen hai – cortisol response normalize karta hai',
        },
        {
          _key: 'vg5i2',
          food: 'Tulsi chai',
          reason:
            'Anxiolytic properties documented hain – nervous system calm karta hai',
        },
        {
          _key: 'vg5i3',
          food: 'Adrak chai (1 cup, no sugar)',
          reason:
            'Gut inflammation kam karta hai – vagus nerve pe positive effect',
        },
        {
          _key: 'vg5i4',
          food: 'Haldi + kali mirch',
          reason:
            'Curcumin brain inflammation reduce karta hai – kali mirch ke bina absorb nahi hota, combination zaroor',
        },
        {
          _key: 'vg5i5',
          food: 'Desi ghee (small quantity)',
          reason:
            'Omega-3 fatty acids nervous system myelin sheath maintain karte hain',
        },
        {
          _key: 'vg5i6',
          food: 'Jeera paani',
          reason:
            'Gut motility improve karta hai – anxious log often IBS experience karte hain',
        },
      ],
    },
  ],

  nonVegAllowed: [
    {
      _key: 'nva1',
      food: 'Anda (boiled)',
      reason:
        'Tryptophan ka concentrated source – serotonin synthesis ke liye zaroor',
    },
    {
      _key: 'nva2',
      food: 'Rohu / katla machhli (grilled ya boiled)',
      reason:
        'Omega-3 fatty acids brain ke anxiety pathways regulate karte hain',
    },
    {
      _key: 'nva3',
      food: 'Chicken (boiled ya grilled only)',
      reason:
        'Lean protein se blood sugar stable – tryptophan bhi milta hai',
    },
  ],

  nonVegAvoid: [
    {
      _key: 'nvav1',
      food: 'Fried chicken / pakoda',
      reason:
        'Trans fat gut inflammation badhata hai – directly anxiety symptoms worse karta hai',
    },
    {
      _key: 'nvav2',
      food: 'Processed meat (sausage, salami)',
      reason:
        'Preservatives aur additives nervous system ko stimulate karte hain',
    },
    {
      _key: 'nvav3',
      food: 'Red meat (mutton roz ka)',
      reason:
        'Heavy digestion se gut disturbance – anxious patients mein IBS trigger',
    },
    {
      _key: 'nvav4',
      food: 'Shellfish',
      reason:
        'Heavy, hard to digest – gut-brain axis pe negative load',
    },
  ],

  redList: [
    {
      _key: 'rl1',
      categoryName: 'Processed aur Maida',
      emoji: '🚫',
      items: [
        {
          _key: 'rl1i1',
          food: 'Maida (bread, biscuit, noodles)',
          reason:
            'Gut mein dysbiosis badhata hai – serotonin production drop hoti hai',
        },
        {
          _key: 'rl1i2',
          food: 'Packaged namkeen / chips',
          reason:
            'MSG aur additives nervous system excitability badhate hain – anxiety trigger',
        },
        {
          _key: 'rl1i3',
          food: 'Instant noodles / fast food',
          reason:
            'Trans fat + high sodium – brain inflammation aur cortisol spikes dono',
        },
      ],
    },
    {
      _key: 'rl2',
      categoryName: 'Dairy aur Heavy Foods',
      emoji: '🥛',
      items: [
        {
          _key: 'rl2i1',
          food: 'Packaged / set dahi (market wala)',
          reason:
            'Pasteurization se live cultures mar jaati hain – gut bacteria benefit nahi',
        },
        {
          _key: 'rl2i2',
          food: 'Full fat paneer (zyada matra mein)',
          reason:
            'Heavy digestion – anxious gut pe extra load',
        },
        {
          _key: 'rl2i3',
          food: 'Ice cream / cold desserts',
          reason:
            'Sugar spike ke baad crash hota hai – nervous system destabilize karta hai',
        },
      ],
    },
    {
      _key: 'rl3',
      categoryName: 'Teekha, Meetha aur Oily',
      emoji: '🍬',
      items: [
        {
          _key: 'rl3i1',
          food: 'Refined sugar (meethai, cold drinks, juice)',
          reason:
            'Blood sugar roller coaster anxiety attacks seedha trigger karta hai',
        },
        {
          _key: 'rl3i2',
          food: 'Bahut teekha khaana',
          reason:
            'Gut lining irritate karta hai – vagus nerve ke through anxiety signal brain ko jaata hai',
        },
        {
          _key: 'rl3i3',
          food: 'Deep fried khaana (puri, bhatura, pakoda roz)',
          reason:
            'Omega-6 ratio disturb karta hai – brain inflammation badhti hai',
        },
      ],
    },
    {
      _key: 'rl4',
      categoryName: 'Drinks',
      emoji: '🥤',
      items: [
        {
          _key: 'rl4i1',
          food: 'Chai / coffee 3+ cups daily',
          reason:
            'Caffeine cortisol aur adrenaline dono badhata hai – anxiety amplify hoti hai',
        },
        {
          _key: 'rl4i2',
          food: 'Cold drinks / soda',
          reason:
            'Phosphoric acid + sugar – magnesium deplete karta hai jo anxiety mein already kam hota hai',
        },
        {
          _key: 'rl4i3',
          food: 'Alcohol',
          reason:
            'Initially calm lagta hai lekin rebound anxiety next day zyada hoti hai – CNS depressant-stimulant cycle',
        },
        {
          _key: 'rl4i4',
          food: 'Energy drinks',
          reason:
            'Caffeine + sugar combination – nervous system ke liye worst trigger',
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
        'Lukewarm paani + 1 tsp amla powder – cortisol morning spike ke saath antioxidant support',
        'Bheegi methi ke beej (1 tsp) + warm paani – blood sugar ko khaali pet stabilize karta hai',
      ],
      nonVegOption: '',
    },
    {
      _key: 'dmp2',
      slotName: 'Nashta',
      slotTime: '8–9 AM',
      slotEmoji: '🍽️',
      vegOptions: [
        'Daliya + palak + thoda ghee – slow release energy + magnesium',
        'Moong dal chilla + pudina chutney – protein + gut-friendly',
      ],
      nonVegOption: '2 ande (boiled) + 1 jowar roti – tryptophan + complex carb combination',
    },
    {
      _key: 'dmp3',
      slotName: 'Mid-Morning',
      slotTime: '11 AM',
      slotEmoji: '☀️',
      vegOptions: [
        '1 kela (fresh, slightly raw) – serotonin precursor snack',
        'Ek mutthi bhuna chana – magnesium + zinc dono',
      ],
      nonVegOption: '',
    },
    {
      _key: 'dmp4',
      slotName: 'Dopahar',
      slotTime: '1–2 PM',
      slotEmoji: '🌱',
      vegOptions: [
        '2 jowar roti + masoor dal + palak sabzi + salad – complete anxiety-diet meal',
        'Brown rice + moong dal chhilka + lauki sabzi – gut light, nutrient dense',
      ],
      nonVegOption: '2 roti + grilled rohu machhli + sabzi – omega-3 + protein',
    },
    {
      _key: 'dmp5',
      slotName: 'Shaam',
      slotTime: '4–5 PM',
      slotEmoji: '🌿',
      vegOptions: [
        'Tulsi chai (no sugar ya bahut kam) + 4-5 akhrot – adaptogen + omega-3',
        'Papaya 1 slice + roasted makhana – Vitamin C + light snack',
      ],
      nonVegOption: '',
    },
    {
      _key: 'dmp6',
      slotName: 'Raat',
      slotTime: '7–8 PM',
      slotEmoji: '🌙',
      vegOptions: [
        'Khichdi (moong dal + rice + ghee) – easy digest, gut soothe karta hai, neend better hoti hai',
        '2 roti + chana dal + koi seasonal sabzi – light complete meal',
      ],
      nonVegOption: 'Chicken soup (no cream, no masala) + 1 roti – light protein, gut warm',
    },
    {
      _key: 'dmp7',
      slotName: 'Sone Se Pehle',
      slotTime: '9 PM',
      slotEmoji: '😴',
      vegOptions: [
        'Ashwagandha warm doodh – cortisol regulate karta hai, anxiety patients mein neend improve hoti hai',
        'Warm haldi doodh (haldi + kali mirch) – curcumin brain inflammation raat bhar kam karta hai',
      ],
      nonVegOption: '',
    },
  ],

  samplePlan4Day: [
    {
      _key: 'sp1',
      day: 'Din 1',
      vegSubah: 'Amla paani',
      vegNashta: 'Palak daliya + ghee',
      vegDopahar: 'Jowar roti + masoor dal + lauki sabzi',
      vegShaam: 'Tulsi chai + akhrot',
      vegRaat: 'Khichdi + ghee',
      nonVegNashta: '2 boiled ande + 1 jowar roti',
      nonVegDopahar: '2 roti + grilled rohu machhli + lauki sabzi',
      nonVegRaat: 'Khichdi + ghee',
    },
    {
      _key: 'sp2',
      day: 'Din 2',
      vegSubah: 'Bheegi methi + warm paani',
      vegNashta: 'Moong dal chilla + pudina chutney',
      vegDopahar: 'Brown rice + chana dal + gajar sabzi + salad',
      vegShaam: 'Kela + bhuna chana',
      vegRaat: '2 roti + palak + dahi (ghar ka)',
      nonVegNashta: 'Moong dal chilla + pudina chutney',
      nonVegDopahar: 'Brown rice + chicken soup (no cream) + gajar sabzi',
      nonVegRaat: '2 roti + palak + dahi (ghar ka)',
    },
    {
      _key: 'sp3',
      day: 'Din 3',
      vegSubah: 'Amla paani',
      vegNashta: 'Poha + vegetables + nimbu',
      vegDopahar: '2 bajra roti + arhar dal + bhindi sabzi',
      vegShaam: 'Papaya + roasted makhana',
      vegRaat: 'Moong dal khichdi + methi sabzi',
      nonVegNashta: '2 boiled ande + poha (chota serving)',
      nonVegDopahar: '2 bajra roti + grilled katla machhli + bhindi sabzi',
      nonVegRaat: 'Moong dal khichdi + methi sabzi',
    },
    {
      _key: 'sp4',
      day: 'Din 4',
      vegSubah: 'Warm haldi paani',
      vegNashta: 'Sprouted chana chaat (boiled, nimbu, dhania)',
      vegDopahar: '2 jowar roti + masoor dal + lauki + salad',
      vegShaam: 'Tulsi ginger chai + 4 akhrot',
      vegRaat: '2 roti + chana dal + palak sabzi',
      nonVegNashta: 'Sprouted chana chaat + boiled anda',
      nonVegDopahar: '2 roti + grilled chicken (boiled) + lauki sabzi + salad',
      nonVegRaat: '2 roti + chana dal + palak sabzi',
    },
  ],

  specialSituations: [
    {
      _key: 'ss1',
      situationType: 'flareUp',
      title: 'Flare-Up / Anxiety Attack ke Din',
      emoji: '🔴',
      tips: [
        'Us din sirf khichdi, daliya, ya moong dal soup – gut pe minimum load – nervous system soothe karna priority',
        'Caffeine, sugar, aur fried khaana bilkul nahi – flare-up mein trigger effect double hota hai',
        'Ek glass warm paani mein 1 pinch sendha namak aur nimbu – electrolytes stabilize karte hain jo anxiety attack mein disturb ho jaate hain',
      ],
    },
    {
      _key: 'ss2',
      situationType: 'fasting',
      title: 'Vrat / Fasting',
      emoji: '🕌',
      tips: [
        'Sabudana khichdi (kam tel mein bani) – safe option – blood sugar crash nahi hota',
        'Singhare ka atta cheela ya roti – reasonable option for vrat days',
        'Kuttu ka atta agar suit kare – test karo pehle – kuch logon ko bloating hoti hai',
        'Vrat mein bhi paani aur coconut paani lete rehna – anxiety mein dehydration symptoms worse karta hai',
        'Zyada lamba fast avoid karo – 12 ghante se zyada bina kuch khaye anxiety attack risk badhta hai',
      ],
    },
    {
      _key: 'ss3',
      situationType: 'eatingOut',
      title: 'Bahar Khana Ho (Restaurant / Dhaba)',
      emoji: '🍽️',
      tips: [
        'Dal tadka + roti order karo – relatively safe, maida nahi, gut friendly',
        'Grilled ya tandoori sabzi option lo – fried se bachna',
        'Raita ghar ka nahi toh avoid karo – packaged dahi mein no live cultures',
        'Practical hack: Khane se pehle 1 glass plain paani pi lo – gut prime karta hai aur overeating se bachata hai jo anxiety worse karta hai',
      ],
    },
    {
      _key: 'ss4',
      situationType: 'travel',
      title: 'Travel Mein',
      emoji: '✈️',
      tips: [
        'Carry karo: bhuna chana, akhrot, dry amla, roasted makhana – train/flight mein available nahi hote',
        'Hotel ya dhaba mein: plain dal + roti order karo – sabse safe – oily curries aur dessert avoid',
        'Chai limit karo travel mein – dehydration + caffeine dono anxiety amplify karte hain',
      ],
    },
  ],

  quickFacts: {
    mistake:
      'Chai ya coffee subah khaali pet lena – pehle kuch solid khao, phir caffeine lo',
    mustEat:
      'Ghar ka fresh dahi – gut serotonin production ke liye sabse practical daily food',
    mustAvoid:
      'Refined sugar (meethai, cold drinks, packaged juice) – blood sugar crash anxiety ka direct trigger hai',
  },

  shareTextGreenRed:
    'Anxiety (Chinta Rog) mein kya khayein, kya nahi – complete list: homeopedia.in/diet/anxiety-neurosis',
  shareTextMealPlan:
    'Anxiety ke liye 4-din ka Indian diet plan: homeopedia.in/diet/anxiety-neurosis',
  shareTextPage:
    'Anxiety Neurosis Diet Guide – green list, meal plan, special situations sab: homeopedia.in/diet/anxiety-neurosis',

  sources: [
    {
      _key: 'src1',
      name: 'Kris-Etherton PM et al – Nutrition and behavioral health disorders: depression and anxiety – Nutrition Reviews 2021',
      year: '2021',
      url: 'https://pubmed.ncbi.nlm.nih.gov/32447382',
    },
    {
      _key: 'src2',
      name: 'Aucoin M et al – Diet and Anxiety: A Scoping Review – Nutrients 2021',
      year: '2021',
      url: 'https://pubmed.ncbi.nlm.nih.gov/34959972',
    },
    {
      _key: 'src3',
      name: 'Lane MM et al – Ultra-Processed Food Consumption and Mental Health: A Systematic Review and Meta-Analysis – Nutrients 2022',
      year: '2022',
      url: 'https://pubmed.ncbi.nlm.nih.gov/35807749',
    },
    {
      _key: 'src4',
      name: 'Marx W et al – Nutritional psychiatry: the present state of the evidence – Proceedings of the Nutrition Society 2017',
      year: '2017',
      url: 'https://pubmed.ncbi.nlm.nih.gov/28942748',
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
  console.log('🌱 Seeding Anxiety Neurosis diet chart...')
  await client.createOrReplace(doc)
  console.log('✅ Anxiety Neurosis diet chart seeded — homeopedia.in/diet/anxiety-neurosis')
}

seed().catch(console.error)
