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
  _id: 'diet-depression',
  _type: 'diet',
  title: 'Depression (Udaasi) Diet Chart',
  slug: { _type: 'slug', current: 'depression' },
  relatedDiseaseSlug: 'depression',
  hindiName: 'Udaasi / Mansik Avshad / Ghabrahat',
  category: 'Mental',
  metaTitle: 'Depression (Udaasi) Diet – Kya Khayein Kya Nahi | Homeopedia',
  metaDescription:
    'Depression diet chart – green list, red list, daily meal plan, veg aur non-veg dono options. Dr. Shadab Khan. Doctor-reviewed. Homeopedia.in',
  intro:
    'Depression mein brain ka serotonin aur dopamine level directly diet se affect hota hai – gut-brain axis ke zariye kuch foods mood ko stabilize karte hain aur kuch worsen karte hain. Neeche complete guide hai – green list, red list, daily meal plan, veg/non-veg dono options, aur flare-up/vrat/travel jaise special situations.',
  reviewDate: 'May 2026',
  doctorNote:
    'Maine notice kiya hai ki depression ke jo patients raat ka khaana 7 baje tak khatam karte hain aur subah ka nashta 8 baje se pehle lete hain – unka homeopathic treatment response clearly better hota hai unke mukable jo irregular timing follow karte hain. – Dr. Shadab Khan, MD Homoeopath',
  homeopathyDiet:
    'Gut health aur brain health ka direct connection hota hai – jab diet se gut inflammation kam hoti hai, homeopathic medicines nervous system pe better kaam karti hain aur treatment response faster milta hai.',
  importantNote:
    'Ye chart ek general guide hai – depression ek serious medical condition hai. Apni condition ke hisaab se apne homoeopath ya psychiatrist se personalized plan zaroor banwayein.',
  proTip:
    'Raat ka khaana aur sone ke beech minimum 2 ghante ka gap rakhein – isse gut bacteria ka active repair time milta hai jo subah ke mood pe directly asar daalta hai. Jo patients ye ek badlav karte hain unka morning mood clearly better hota hai.',

  eatingHabits: [
    {
      _key: 'eh1',
      habit: 'Subah 8 baje tak kuch zaroor khao',
      reason:
        'Khaali pet brain ko glucose nahi milta – serotonin production low hoti hai, anxiety aur irritability badh jaati hai',
    },
    {
      _key: 'eh2',
      habit: 'Raat ka khaana 7-7:30 baje tak khatam karo',
      reason:
        'Late eating gut bacteria ko disrupt karta hai jo serotonin ka 90% produce karta hai',
    },
    {
      _key: 'eh3',
      habit: 'Har 3-4 ghante mein chhota snack khao',
      reason:
        'Blood sugar crash hone se cortisol spike hota hai jo depression ke symptoms directly trigger karta hai',
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
          food: 'Jowar / Bajra roti',
          reason:
            'Complex carbs serotonin synthesis ke liye brain ko steady glucose dete hain',
        },
        {
          _key: 'vg1i2',
          food: 'Daliya (broken wheat)',
          reason:
            'B vitamins hain jo nerve function aur mood regulation mein directly kaam aate hain',
        },
        {
          _key: 'vg1i3',
          food: 'Brown rice',
          reason:
            'Magnesium rich – depression mein magnesium deficiency bahut common hoti hai',
        },
        {
          _key: 'vg1i4',
          food: 'Oats (jaai)',
          reason:
            'Tryptophan ka achha source – brain mein serotonin banta hai isse',
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
            'Folate rich – folate deficiency depression ka ek confirmed biological risk factor hai',
        },
        {
          _key: 'vg2i2',
          food: 'Methi (fresh ya seeds)',
          reason:
            'Blood sugar regulate karta hai jo mood swings seedha control karta hai',
        },
        {
          _key: 'vg2i3',
          food: 'Lauki',
          reason:
            'Gut ko cool aur calm rakhti hai – gut inflammation depression ke saath directly linked hai',
        },
        {
          _key: 'vg2i4',
          food: 'Gajar',
          reason:
            'Beta-carotene brain oxidative stress kam karta hai jo depressive episodes mein badha hota hai',
        },
        {
          _key: 'vg2i5',
          food: 'Karela',
          reason:
            'Liver detox mein help karta hai – liver stress emotional dysregulation se connected hai',
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
          food: 'Amla (fresh ya sukha)',
          reason:
            'Vitamin C cortisol response regulate karta hai – stress mein body zyada cortisol banaati hai jise control karna zaroori hai',
        },
        {
          _key: 'vg3i2',
          food: 'Seb (apple)',
          reason:
            'Quercetin naam ka antioxidant brain inflammation kam karta hai',
        },
        {
          _key: 'vg3i3',
          food: 'Papaya',
          reason:
            'Vitamin C + folate dono – dono depression ke liye scientifically important nutrients hain',
        },
        {
          _key: 'vg3i4',
          food: 'Kela (fresh-ripe, overripe nahi)',
          reason:
            'Tryptophan + B6 ka combination – brain mein serotonin banta hai',
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
          food: 'Moong dal (chilka)',
          reason:
            'Tryptophan + magnesium dono – depression ke liye ye combination specially useful hai',
        },
        {
          _key: 'vg4i2',
          food: 'Chana dal',
          reason:
            'Slow-digesting protein – blood sugar stable rakhti hai jo mood swings ka main trigger hai',
        },
        {
          _key: 'vg4i3',
          food: 'Rajma',
          reason:
            'Omega-3 fatty acids + folate – brain inflammation reduce karne mein help karta hai',
        },
        {
          _key: 'vg4i4',
          food: 'Paneer (ghar ka, limited – 1 small serving)',
          reason:
            'Casein protein tryptophan deta hai – zyada nahi, limited matra mein',
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
          food: 'Haldi + kali mirch wala doodh',
          reason:
            'Curcumin brain mein BDNF level badhata hai – depression mein BDNF low hota hai – kali mirch ke bina absorb nahi hota',
        },
        {
          _key: 'vg5i2',
          food: 'Adrak chai (kam chini)',
          reason:
            'Gingerol gut inflammation kam karta hai – gut-brain axis ke zariye mood better hota hai',
        },
        {
          _key: 'vg5i3',
          food: 'Jeera + ajwain ka paani (subah)',
          reason:
            'Gut bacteria ko support karta hai jo serotonin produce karte hain',
        },
        {
          _key: 'vg5i4',
          food: 'Sarson ka tel',
          reason:
            'ALA (omega-3 type) hota hai jo brain cell membrane health ke liye zaroori hai',
        },
        {
          _key: 'vg5i5',
          food: 'Desi ghee (thodi matra)',
          reason:
            'Short-chain fatty acids hain jo gut lining repair karte hain – depression ka gut connection wahan se aata hai',
        },
        {
          _key: 'vg5i6',
          food: 'Tulsi chai',
          reason:
            'Adaptogen hai – cortisol peak ko blunt karta hai jo depression-anxiety cycle ko fuel karta hai',
        },
      ],
    },
  ],

  nonVegAllowed: [
    {
      _key: 'nva1',
      food: 'Ande (boiled/poached – 2)',
      reason:
        'Choline + tryptophan dono – brain neurotransmitter synthesis ke liye zaroori',
    },
    {
      _key: 'nva2',
      food: 'Rohu / Katla / Surmai machli (grilled ya bhap mein)',
      reason:
        'Omega-3 DHA/EPA directly brain cell mein jaata hai – depression ke trials mein omega-3 ka sabse strong evidence',
    },
    {
      _key: 'nva3',
      food: 'Chicken (boiled ya grilled, no fry)',
      reason:
        'Tryptophan aur B12 ka achha source – B12 deficiency depression mimic kar sakti hai',
    },
  ],

  nonVegAvoid: [
    {
      _key: 'nvav1',
      food: 'Fried chicken / pakoda',
      reason:
        'Trans fat brain inflammation badhata hai jo already depression mein elevated hoti hai',
    },
    {
      _key: 'nvav2',
      food: 'Red meat (mutton, beef) roz',
      reason:
        'Arachidonic acid zyada hota hai – pro-inflammatory – depression worsen karta hai',
    },
    {
      _key: 'nvav3',
      food: 'Processed meat (sausage, salami)',
      reason:
        'Nitrates + preservatives gut bacteria kill karte hain jo serotonin produce karte hain',
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
          food: 'Maida',
          reason:
            'Rapid blood sugar spike phir crash – har crash pe cortisol spike hota hai jo depressive mood trigger karta hai',
        },
        {
          _key: 'rl1i2',
          food: 'Biscuits / namkeen (packaged)',
          reason:
            'Refined carbs + trans fat combination – gut inflammation badhata hai seedha',
        },
        {
          _key: 'rl1i3',
          food: 'Instant noodles / pasta',
          reason:
            'Maida + sodium + MSG – gut microbiome diversity destroy karta hai',
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
          food: 'Overripe / bahut pakka kela',
          reason:
            'Tyramine level zyada – neurotransmitter balance bigaad sakta hai',
        },
        {
          _key: 'rl2i2',
          food: 'Packaged dahi / market ka set dahi',
          reason:
            'Preservatives gut bacteria ko disrupt karte hain',
        },
        {
          _key: 'rl2i3',
          food: 'Cream / malai',
          reason:
            'Saturated fat zyada – brain mein inflammatory markers badhate hain',
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
          food: 'Refined sugar / meethai',
          reason:
            'Serotonin momentarily badhata hai phir crash hota hai – crash pe mood depression mein aur neeche jaata hai – "sugar crash depression" real phenomenon hai',
        },
        {
          _key: 'rl3i2',
          food: 'Zyada teekha khaana (daily)',
          reason:
            'Gut mucosa irritate hota hai – gut inflammation directly mood affect karta hai',
        },
        {
          _key: 'rl3i3',
          food: 'Deep fried khaana (roz)',
          reason:
            'Trans fat brain-derived neurotrophic factor (BDNF) production block karta hai',
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
          food: 'Alcohol',
          reason:
            'Temporarily sedates phir serotonin/dopamine deplete karta hai – depression mein sabse bada trigger hai',
        },
        {
          _key: 'rl4i2',
          food: 'Cold drinks / soda',
          reason:
            'Phosphoric acid + sugar – gut bacteria kill karta hai + blood sugar rollercoaster',
        },
        {
          _key: 'rl4i3',
          food: '3+ cups chai ya coffee daily',
          reason:
            'Cortisol aur bhi badh jaata hai – anxiety-depression cycle fuel hoti hai – 1 cup subah allowed hai',
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
        'Lukewarm paani + 1 tsp amla powder',
        'Jeera + ajwain ka paani (raat bhar bheega)',
      ],
      nonVegOption: '',
    },
    {
      _key: 'dmp2',
      slotName: 'Nashta',
      slotTime: '8–9 AM',
      slotEmoji: '🍽️',
      vegOptions: [
        'Daliya with palak + thodi haldi',
        'Moong dal chilla (2) + pudina chutney',
      ],
      nonVegOption: '2 ande boiled + 1 jowar roti',
    },
    {
      _key: 'dmp3',
      slotName: 'Mid-Morning',
      slotTime: '11 AM',
      slotEmoji: '☀️',
      vegOptions: [
        '1 seb ya 1 amla (fresh)',
        'Bheega rajma / chana (handful) – bhuna nahi',
      ],
      nonVegOption: '',
    },
    {
      _key: 'dmp4',
      slotName: 'Dopahar',
      slotTime: '1–2 PM',
      slotEmoji: '🌱',
      vegOptions: [
        '2 bajra roti + moong dal (chilka) + palak sabzi',
        'Brown rice + chana dal + lauki ki sabzi + salad',
      ],
      nonVegOption: 'Grilled surmai machli + 1 roti + salad',
    },
    {
      _key: 'dmp5',
      slotName: 'Shaam',
      slotTime: '4–5 PM',
      slotEmoji: '🌿',
      vegOptions: [
        'Tulsi-adrak chai (1 cup, kam chini) + akhrot 4-5',
        'Bheegi methi seeds (1 tsp) + 1 kela (fresh)',
      ],
      nonVegOption: '',
    },
    {
      _key: 'dmp6',
      slotName: 'Raat',
      slotTime: '7–8 PM',
      slotEmoji: '🌙',
      vegOptions: [
        '2 jowar roti + arhar dal + turai ki sabzi',
        'Moong dal khichdi + desi ghee (thoda) + salad',
      ],
      nonVegOption: 'Chicken soup (boiled, no cream) + 1 roti',
    },
    {
      _key: 'dmp7',
      slotName: 'Sone Se Pehle',
      slotTime: '9 PM',
      slotEmoji: '😴',
      vegOptions: [
        'Warm haldi doodh (kali mirch ke saath) – curcumin absorb hone ke liye kali mirch zaroori hai',
        'Warm tulsi ka paani + saunf',
      ],
      nonVegOption: '',
    },
  ],

  samplePlan4Day: [
    {
      _key: 'sp1',
      day: 'Din 1',
      vegSubah: 'Amla paani',
      vegNashta: 'Daliya + palak',
      vegDopahar: 'Bajra roti + moong dal + lauki',
      vegShaam: 'Akhrot + tulsi chai',
      vegRaat: 'Khichdi + ghee',
      nonVegNashta: '2 ande boiled + 1 jowar roti',
      nonVegDopahar: 'Grilled surmai + 1 roti + lauki',
      nonVegRaat: 'Khichdi + ghee',
    },
    {
      _key: 'sp2',
      day: 'Din 2',
      vegSubah: 'Jeera-ajwain paani',
      vegNashta: 'Moong dal chilla + chutney',
      vegDopahar: 'Brown rice + chana dal + gajar sabzi',
      vegShaam: 'Seb + bheega chana',
      vegRaat: 'Jowar roti + arhar dal + turai',
      nonVegNashta: 'Moong dal chilla + chutney',
      nonVegDopahar: 'Grilled chicken + brown rice + salad',
      nonVegRaat: 'Chicken soup (boiled) + 1 roti',
    },
    {
      _key: 'sp3',
      day: 'Din 3',
      vegSubah: 'Amla paani',
      vegNashta: 'Oats daliya (namkeen) + adrak',
      vegDopahar: '2 roti + rajma + palak salad',
      vegShaam: 'Kela (fresh) + tulsi chai',
      vegRaat: 'Moong dal soup + 1 roti + karela sabzi',
      nonVegNashta: '2 ande + oats daliya',
      nonVegDopahar: 'Rohu machli (bhap mein) + 2 roti + palak',
      nonVegRaat: 'Moong dal soup + 1 roti',
    },
    {
      _key: 'sp4',
      day: 'Din 4',
      vegSubah: 'Jeera-ajwain paani',
      vegNashta: 'Besan chilla + pudina chutney',
      vegDopahar: 'Brown rice + masoor dal + methi sabzi',
      vegShaam: 'Papaya + akhrot 3-4',
      vegRaat: '2 bajra roti + chana dal + lauki',
      nonVegNashta: 'Besan chilla + pudina chutney',
      nonVegDopahar: 'Brown rice + masoor dal + methi',
      nonVegRaat: '2 bajra roti + chana dal + lauki',
    },
  ],

  specialSituations: [
    {
      _key: 'ss1',
      situationType: 'flareUp',
      title: 'Flare-Up / Episode Intense Ho Tab',
      emoji: '🔴',
      tips: [
        'Us din sirf 3 cheezein khao: khichdi + dahi (ghar ka) + 1 fruit – simple khaana brain pe processing load kam karta hai',
        'Fried, packaged, sweet – sab avoid karo us din – blood sugar stable rakhna sabse zaroori hai episode mein',
        'Warm paani mein haldi + adrak – ek ghanta baad bhi thoda better feel hota hai – gut ko settle karta hai',
      ],
    },
    {
      _key: 'ss2',
      situationType: 'fasting',
      title: 'Vrat / Fasting',
      emoji: '🕌',
      tips: [
        'Sabudana khichdi (zyada ghee ke bina) – safe hai',
        'Singhara atta ki roti ya kuttu roti – allowed hai',
        'Vrat mein din bhar kuch na khaana avoid karo – depression mein prolonged fasting blood sugar crash karvaata hai jo episode trigger kar sakta hai',
        'Doctor se pehle baat karo agar regularly fasting karte ho',
      ],
    },
    {
      _key: 'ss3',
      situationType: 'eatingOut',
      title: 'Bahar Khana Ho (Restaurant / Dhaba)',
      emoji: '🍽️',
      tips: [
        'Order karo: Dal tadka + roti (no maida) + sabzi – simple, safe, har jagah milta hai',
        'Avoid karo: Fried items, cold drinks, desserts – teen cheezein jo sabse zyada gut aur blood sugar disturb karti hain',
        'Hack: Pehle ek glass plain paani piyo – meal ke saath overeating nahi hogi aur gut ko signal milega',
      ],
    },
    {
      _key: 'ss4',
      situationType: 'travel',
      title: 'Travel Mein',
      emoji: '✈️',
      tips: [
        'Carry karo: Akhrot + amla candy + bhuna chana – tryptophan + antioxidant dono milte hain',
        'Train/hotel mein order karo: Plain dal chawal ya roti sabzi – maida items avoid, "no fried" clearly bolein',
      ],
    },
  ],

  quickFacts: {
    mistake:
      'Refined sugar se mood improve karne ki koshish – jo actually crash karvaata hai aur episode worsen karta hai',
    mustEat:
      'Akhrot – omega-3 + tryptophan + magnesium – teen depression-fighting nutrients ek hi food mein',
    mustAvoid:
      'Alcohol – momentary sedation ke baad serotonin dopamine dono deplete karta hai – depression mein sabse bada trigger',
  },

  shareTextGreenRed:
    'Depression mein kya khayein, kya nahi – complete list: homeopedia.in/diet/depression',
  shareTextMealPlan:
    'Depression ke liye 4-din ka Indian diet plan: homeopedia.in/diet/depression',
  shareTextPage:
    'Depression Diet Guide – green list, meal plan, special situations sab: homeopedia.in/diet/depression',

  sources: [
    {
      _key: 'src1',
      name: 'Lassale C et al – Healthy dietary indices and risk of depressive outcomes: a systematic review and meta-analysis – Molecular Psychiatry 2018',
      year: '2018',
      url: 'https://pubmed.ncbi.nlm.nih.gov/30254236',
    },
    {
      _key: 'src2',
      name: 'Bizzozero-Peroni B et al – The impact of the Mediterranean diet on alleviating depressive symptoms in adults: a systematic review and meta-analysis – Nutrition Reviews 2025',
      year: '2025',
      url: 'https://pubmed.ncbi.nlm.nih.gov/38219230',
    },
    {
      _key: 'src3',
      name: 'Sonali S et al – Mechanistic Insights into the Link between Gut Dysbiosis and Major Depression: An Extensive Review – Cells 2022',
      year: '2022',
      url: 'https://pubmed.ncbi.nlm.nih.gov/35456041',
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
  console.log('🌱 Seeding Depression diet chart...')
  await client.createOrReplace(doc)
  console.log('✅ Depression diet chart seeded — homeopedia.in/diet/depression')
}

seed().catch(console.error)
