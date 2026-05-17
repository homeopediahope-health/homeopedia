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
  _id: 'diet-acanthosis-nigricans',
  _type: 'diet',
  title: 'Acanthosis Nigricans (Kali Gardan) Diet Chart',
  slug: { _type: 'slug', current: 'acanthosis-nigricans' },
  relatedDiseaseSlug: 'acanthosis-nigricans',
  hindiName: 'Kali Gardan / Kaali Chamdi (Gardan, Baghlon, Jaangh pe)',
  category: 'Skin',
  metaTitle: 'Acanthosis Nigricans (Kali Gardan) Diet – Kya Khayein | Homeopedia',
  metaDescription:
    'Acanthosis Nigricans diet – green list, red list, meal plan. Insulin aur skin ke liye. Dr. Shadab Khan. Doctor-reviewed. Homeopedia.in',
  intro:
    'Acanthosis Nigricans mein body ke cells insulin ko theek se respond nahi karte – aur ye excess insulin skin cells ko overstimulate karke gardan, baghlon aur jaangh pe kali, moti chamdi banata hai. Neeche complete guide hai – green list, red list, daily meal plan, veg aur non-veg dono options, natural skin care tips, aur vrat/travel jaise special situations.',
  reviewDate: 'May 2026',
  doctorNote:
    'Maine notice kiya hai ki AN ke jo patients white rice aur chini dono ek saath chodh dete hain – unka treatment response aur skin improvement clearly better hota hai – akele ek chodh ke nahi. Dono ka combined glycemic load khatam hona zyada matters karta hai. – Dr. Shadab Khan, MD Homoeopath',
  homeopathyDiet:
    'Jab diet sahi hoti hai aur blood sugar stable rehta hai, toh homeopathic medicines insulin sensitivity better improve karti hain – treatment response clearly faster aata hai. Dono saath milke AN ki root cause pe kaam karte hain.',
  importantNote:
    'Ye chart ek general guide hai. Acanthosis Nigricans ke peechhe kai alag causes ho sakte hain – PCOS, thyroid, prediabetes, ya medicine side effects. Apni actual wajah ke hisaab se apne homoeopath se personalized plan banwayein.',
  proTip:
    'Khana khaane ke baad turant baith ya let mat jao – sirf 15 minute ki halki walk karo. Post-meal blood sugar control hone se insulin ka overproduction rukta hai – aur ye ek kaam akele diet se zyada fast results deta hai AN mein.',

  eatingHabits: [
    {
      _key: 'eh1',
      habit: 'Har 3-4 ghante mein kuch khao',
      reason:
        'Blood sugar spikes se bachao – kyunki har spike insulin ko aur zyada release karwata hai jo skin ko darken karta hai',
    },
    {
      _key: 'eh2',
      habit: 'Raat ka khaana 7:30 baje tak khatam karo',
      reason:
        'Late eating insulin sensitivity ko aur worse banata hai overnight',
    },
    {
      _key: 'eh3',
      habit: 'Khaane ke baad 15-20 minute halki walk karo',
      reason:
        'Post-meal blood sugar turant kam hota hai jo insulin ke overproduction ko rokta hai',
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
          reason: 'Low glycemic index – blood sugar slowly badhta hai – insulin spike nahi hota',
        },
        {
          _key: 'vg1i2',
          food: 'Jowar / Bajra roti',
          reason: 'Maida se behtar – fiber zyada, glucose absorption slow hota hai',
        },
        {
          _key: 'vg1i3',
          food: 'Brown rice (limited)',
          reason: 'White rice se low GI hai – glycemic load kam karta hai',
        },
        {
          _key: 'vg1i4',
          food: 'Oats (daliya style)',
          reason: 'Beta-glucan fiber hai jo insulin sensitivity improve karta hai',
        },
        {
          _key: 'vg1i5',
          food: 'Besan chilla',
          reason: 'Chickpea flour ka low GI protein-rich option – skin ke liye zinc bhi deta hai',
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
          food: 'Karela (bitter gourd)',
          reason: 'Charantin compound hota hai jo cells ki insulin sensitivity directly improve karta hai',
        },
        {
          _key: 'vg2i2',
          food: 'Palak',
          reason: 'Magnesium rich – jo insulin receptor function ke liye essential mineral hai',
        },
        {
          _key: 'vg2i3',
          food: 'Methi (leaves + seeds)',
          reason: 'Soluble fiber blood sugar regulation mein help karta hai – AN ke liye specifically studied',
        },
        {
          _key: 'vg2i4',
          food: 'Lauki',
          reason: 'Low calorie, high fiber – blood sugar aur waist circumference dono pe positive effect',
        },
        {
          _key: 'vg2i5',
          food: 'Broccoli',
          reason: 'Sulforaphane hota hai jo insulin resistance reduce karta hai – AN ke root cause ko target karta hai',
        },
        {
          _key: 'vg2i6',
          food: 'Turai / Torai',
          reason: 'Non-starchy vegetable – insulin pe load nahi dalta',
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
          food: 'Amla (Indian gooseberry)',
          reason: 'Chromium hota hai jo insulin signaling improve karta hai – AN mein specifically helpful',
        },
        {
          _key: 'vg3i2',
          food: 'Papaya (slightly raw)',
          reason: 'Low sugar, papain enzyme digestive health improve karta hai',
        },
        {
          _key: 'vg3i3',
          food: 'Jamun',
          reason: 'Anthocyanin hota hai jo insulin resistance reduce karta hai – iska beej bhi helpful hai',
        },
        {
          _key: 'vg3i4',
          food: 'Seb (apple) with skin',
          reason: 'Quercetin aur fiber – blood sugar regulation ke liye',
        },
        {
          _key: 'vg3i5',
          food: 'Nashpati (pear)',
          reason: 'Low GI fruit, fiber rich – overripe se bachao',
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
          food: 'Moong dal (sabut)',
          reason: 'Complex protein, slowly digest hoti hai – blood sugar stable rakhti hai',
        },
        {
          _key: 'vg4i2',
          food: 'Masoor dal',
          reason: 'Iron aur protein – low glycemic load',
        },
        {
          _key: 'vg4i3',
          food: 'Kala chana (bhuna)',
          reason: 'Resistant starch hota hai jo post-meal blood sugar spike rokta hai',
        },
        {
          _key: 'vg4i4',
          food: 'Rajma (moderate)',
          reason: 'Low GI legume – insulin ke baad blood sugar slowly aata hai',
        },
        {
          _key: 'vg4i5',
          food: 'Tofu',
          reason: 'Plant protein, no added sugar – insulin pe minimum load',
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
          food: 'Methi seed water (raat bheego, subah piyo)',
          reason: 'Soluble fiber gut mein slow absorption karta hai – blood sugar control',
        },
        {
          _key: 'vg5i2',
          food: 'Haldi + kali mirch wali chai',
          reason: 'Curcumin inflammation reduce karta hai – kali mirch ke piperine ke bina curcumin absorb nahi hota',
        },
        {
          _key: 'vg5i3',
          food: 'Jeera + adrak ka paani (warm)',
          reason: 'Insulin secretion regulate karne mein help karta hai',
        },
        {
          _key: 'vg5i4',
          food: 'Sarson ka tel (cold-pressed)',
          reason: 'Omega-3 fatty acids, inflammation kam karta hai jo insulin resistance ka part hai',
        },
        {
          _key: 'vg5i5',
          food: 'Desi ghee (1 tsp daily)',
          reason: 'CLA (conjugated linoleic acid) hota hai jo fat metabolism aur insulin sensitivity pe positive hai – zyada nahi',
        },
      ],
    },
  ],

  nonVegAllowed: [
    {
      _key: 'nva1',
      food: 'Rohu / Katla / Surmai machli (boiled ya grilled)',
      reason: 'Omega-3 fatty acids insulin receptor sensitivity improve karte hain',
    },
    {
      _key: 'nva2',
      food: '2 ande (boiled / poached)',
      reason: 'High quality protein slow digestion karti hai – blood sugar stable rakhta hai',
    },
    {
      _key: 'nva3',
      food: 'Chicken breast (boiled ya grilled, without skin)',
      reason: 'Lean protein – insulin pe undue load nahi',
    },
  ],

  nonVegAvoid: [
    {
      _key: 'nvav1',
      food: 'Fried chicken / pakoda style',
      reason: 'Trans fat insulin resistance aur badhata hai – AN ki primary wajah',
    },
    {
      _key: 'nvav2',
      food: 'Red meat (mutton, beef)',
      reason: 'Saturated fat insulin signaling ke receptors ko blunt karta hai',
    },
    {
      _key: 'nvav3',
      food: 'Processed meat (sausage, salami)',
      reason: 'Hidden sugar aur sodium – insulin response trigger karte hain',
    },
    {
      _key: 'nvav4',
      food: 'Shellfish / jheenga',
      reason: 'Heavy digestion, inflammatory fats – avoid',
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
          food: 'Maida (white flour)',
          reason: 'Gut mein rapidly glucose banta hai – insulin spike seedha AN ka trigger',
        },
        {
          _key: 'rl1i2',
          food: 'White bread / pav / bun',
          reason: 'High glycemic – blood sugar rapidly spike karta hai',
        },
        {
          _key: 'rl1i3',
          food: 'Instant noodles / Maggi',
          reason: 'Refined carbs + sodium – chronic insulin overload',
        },
        {
          _key: 'rl1i4',
          food: 'Biscuits / Namkeen (packaged)',
          reason: 'Hidden sugar aur trans fat – insulin resistance maintain karte hain',
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
          food: 'Full-fat packaged dahi (market wala, set dahi)',
          reason: 'High saturated fat – insulin sensitivity pe negative',
        },
        {
          _key: 'rl2i2',
          food: 'Paneer (large quantity)',
          reason: 'Saturated fat zyada hone pe insulin signaling affect hoti hai – moderate rakho',
        },
        {
          _key: 'rl2i3',
          food: 'Ice cream / Flavoured milk',
          reason: 'Added sugar + fat combination – worst insulin spike trigger',
        },
        {
          _key: 'rl2i4',
          food: 'Cream / Malai',
          reason: 'Empty saturated fat – insulin resistance directly badhata hai',
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
          food: 'Chini (refined sugar)',
          reason: 'Direct blood glucose spike – insulin ka sabse bada trigger – AN ki jad',
        },
        {
          _key: 'rl3i2',
          food: 'Jaggery / Gud',
          reason: 'Refined sugar se better hai lekin AN mein bhi limit karo – glycemic response similar hai',
        },
        {
          _key: 'rl3i3',
          food: 'Deep fried snacks (bhatura, puri, pakoda)',
          reason: 'Fat + refined carb combination insulin ke liye double hit hai',
        },
        {
          _key: 'rl3i4',
          food: 'Packaged mithai (ladoo, jalebi, barfi)',
          reason: 'Concentrated sugar + ghee – chronic insulin elevation',
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
          food: 'Cold drinks / Soda',
          reason: 'Fructose corn syrup – liver directly insulin resistance badhata hai',
        },
        {
          _key: 'rl4i2',
          food: 'Packaged fruit juice',
          reason: 'Fiber nikalke sirf sugar bacha – pura fal khana better hai',
        },
        {
          _key: 'rl4i3',
          food: 'Full cream chai ya doodh (3-4 cups daily)',
          reason: 'Milk sugar + fat combined effect – moderate karo',
        },
        {
          _key: 'rl4i4',
          food: 'Alcohol',
          reason: 'Liver ke glucose metabolism ko disturb karta hai – insulin regulation affect hoti hai',
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
        'Bheegi methi seeds 1 tsp + lukewarm paani – khaali pet',
        'Jeera + adrak ka warm paani – digestive aur blood sugar prep',
      ],
      nonVegOption: '',
    },
    {
      _key: 'dmp2',
      slotName: 'Nashta',
      slotTime: '8–9 AM',
      slotEmoji: '🍽️',
      vegOptions: [
        'Daliya with vegetables (palak, turai) – no sugar',
        'Besan chilla 2 pcs + pudina chutney',
      ],
      nonVegOption: '2 boiled ande + 1 jowar roti + kheera',
    },
    {
      _key: 'dmp3',
      slotName: 'Mid-Morning',
      slotTime: '11 AM',
      slotEmoji: '☀️',
      vegOptions: [
        '1 small apple with skin ya jamun (seasonal)',
        'Bhuna kala chana (handful) – filling aur low GI',
      ],
      nonVegOption: '',
    },
    {
      _key: 'dmp4',
      slotName: 'Dopahar',
      slotTime: '1–2 PM',
      slotEmoji: '🌱',
      vegOptions: [
        '2 jowar/bajra roti + moong dal + karela sabzi',
        'Brown rice (small portion) + masoor dal + palak sabzi + salad',
      ],
      nonVegOption: 'Grilled machli (rohu/surmai) + 1 roti + sabzi',
    },
    {
      _key: 'dmp5',
      slotName: 'Shaam',
      slotTime: '4–5 PM',
      slotEmoji: '🌿',
      vegOptions: [
        'Haldi + kali mirch wali herbal chai + 4-5 akhrot',
        'Roasted makhana (no butter) + tulsi chai',
      ],
      nonVegOption: '',
    },
    {
      _key: 'dmp6',
      slotName: 'Raat',
      slotTime: '7–8 PM',
      slotEmoji: '🌙',
      vegOptions: [
        '2 roti (bajra/jowar) + sabzi + thin dal (arhar)',
        'Khichdi (moong dal + brown rice) + ghee 1 tsp',
      ],
      nonVegOption: 'Chicken breast soup (no cream, no cornstarch) + 1 roti',
    },
    {
      _key: 'dmp7',
      slotName: 'Sone Se Pehle',
      slotTime: '9 PM',
      slotEmoji: '😴',
      vegOptions: [
        'Warm haldi doodh (no sugar, small cup)',
        'Saunf + warm paani – digestion settle karta hai',
      ],
      nonVegOption: '',
    },
  ],

  samplePlan4Day: [
    {
      _key: 'sp1',
      day: 'Din 1',
      vegSubah: 'Methi seed water',
      vegNashta: 'Besan chilla + chutney',
      vegDopahar: 'Jowar roti + moong dal + karela',
      vegShaam: 'Bhuna chana + tulsi chai',
      vegRaat: 'Khichdi + palak sabzi',
      nonVegNashta: '2 boiled ande + 1 jowar roti',
      nonVegDopahar: 'Grilled rohu + 1 roti + karela sabzi',
      nonVegRaat: 'Chicken breast soup (no cream) + 1 roti',
    },
    {
      _key: 'sp2',
      day: 'Din 2',
      vegSubah: 'Jeera-adrak warm paani',
      vegNashta: 'Oats daliya (no sugar) + amla',
      vegDopahar: 'Brown rice + masoor dal + turai',
      vegShaam: 'Akhrot + haldi chai',
      vegRaat: 'Bajra roti + arhar dal + kheera salad',
      nonVegNashta: '2 boiled ande + oats daliya',
      nonVegDopahar: 'Grilled surmai + brown rice + turai sabzi',
      nonVegRaat: 'Bajra roti + arhar dal + kheera salad',
    },
    {
      _key: 'sp3',
      day: 'Din 3',
      vegSubah: 'Methi seed water',
      vegNashta: 'Daliya + vegetables',
      vegDopahar: 'Jowar roti + rajma + lauki sabzi',
      vegShaam: 'Roasted makhana + adrak chai',
      vegRaat: 'Khichdi (moong + brown rice) + ghee',
      nonVegNashta: 'Daliya + vegetables',
      nonVegDopahar: '2 roti + grilled chicken breast + lauki sabzi',
      nonVegRaat: 'Khichdi (moong + brown rice) + ghee',
    },
    {
      _key: 'sp4',
      day: 'Din 4',
      vegSubah: 'Jeera-adrak warm paani',
      vegNashta: 'Moong dal chilla + pudina chutney',
      vegDopahar: 'Brown rice + chana dal + palak',
      vegShaam: 'Bhuna chana + tulsi chai',
      vegRaat: 'Bajra roti + masoor dal + turai sabzi',
      nonVegNashta: 'Moong dal chilla + 1 boiled anda',
      nonVegDopahar: 'Grilled katla + brown rice + palak sabzi',
      nonVegRaat: 'Bajra roti + masoor dal + turai sabzi',
    },
  ],

  specialSituations: [
    {
      _key: 'ss1',
      situationType: 'flareUp',
      title: 'Flare-Up / Chamdi Zyada Dark Ho Jaye Tab',
      emoji: '🔴',
      tips: [
        'Us din sirf khichdi, daliya, ya moong dal soup khao – blood sugar minimum raho',
        'Fruit bhi avoid karo us din – sirf sabziyan aur dal',
        'Is din methi seed water subah aur shaam dono time piyo – blood sugar spikes ko double control',
      ],
    },
    {
      _key: 'ss2',
      situationType: 'fasting',
      title: 'Vrat / Fasting',
      emoji: '🕌',
      tips: [
        'Safe options: Singhare ka atta chilla, kuttu ki roti – easily digest, blood sugar stable',
        'Dahi (ghar ka thin) ek katori okay hai vrat mein – protein ke liye',
        'Vrat mein avoid: Sabudana khichdi mein aloo + zyada ghee – blood sugar rapidly spike karta hai',
        'AN mein long fasting avoid karo – bina khaaye blood sugar drop hone ke baad spike zyada hoti hai – short frequent meals better',
      ],
    },
    {
      _key: 'ss3',
      situationType: 'eatingOut',
      title: 'Bahar Khana Ho (Restaurant / Dhaba)',
      emoji: '🍽️',
      tips: [
        'Order karo: Dal tadka (limited), tandoori roti (maida nahi), grilled sabzi, raita',
        'Avoid karo: Naan, puri, paratha (maida ya maida mix), packaged mithai, cold drinks',
        'Practical hack: Pehle salad aur dal piyo – phir roti – blood sugar response 20-30% better hota hai iss order se',
      ],
    },
    {
      _key: 'ss4',
      situationType: 'travel',
      title: 'Travel Mein',
      emoji: '✈️',
      tips: [
        'Carry karo: Bhuna chana, akhrot, roasted makhana, amla candy (without sugar coating) – sab non-perishable',
        'Train/hotel mein order karo: Plain dal chawal, idli (south mein), plain dahi – processed snacks nahi',
      ],
    },
  ],

  quickFacts: {
    mistake:
      'Sirf bahar ka khaana band karke ghar mein white rice + maida roti continue karna – GI load same rehti hai – skin nahi sudharta',
    mustEat:
      'Karela – charantin compound jo cells ki insulin sensitivity directly target karta hai – AN ke liye sabse disease-specific Indian food hai',
    mustAvoid:
      'Refined sugar (chini) – ye akela blood glucose spike karta hai jo insulin overproduction ka seedha trigger hai – ghar mein bhi completely minimize karo',
  },

  shareTextGreenRed:
    'Acanthosis Nigricans (Kali Gardan) mein kya khayein, kya nahi – complete list: homeopedia.in/diet/acanthosis-nigricans',
  shareTextMealPlan:
    'Acanthosis Nigricans ke liye 4-din ka Indian diet plan: homeopedia.in/diet/acanthosis-nigricans',
  shareTextPage:
    'Acanthosis Nigricans Diet Guide – green list, meal plan, natural skin tips sab: homeopedia.in/diet/acanthosis-nigricans',

  sources: [
    {
      _key: 'src1',
      name: 'Saraiya A, Al-Shoha A, Brodell RT – Hyperinsulinemia associated with acanthosis nigricans, finger pebbles, acrochordons, and the sign of Leser-Trelat – Endocrine Practice 2013',
      year: '2013',
      url: 'https://pubmed.ncbi.nlm.nih.gov/23425641',
    },
    {
      _key: 'src2',
      name: 'Ho M, Garnett SP, Baur LA – Childhood obesity and insulin resistance: how should it be managed? – Current Treatment Options in Cardiovascular Medicine 2014',
      year: '2014',
      url: 'https://pubmed.ncbi.nlm.nih.gov/25293340',
    },
    {
      _key: 'src3',
      name: 'Dietary Guidelines for Indians – ICMR-NIN 2024',
      year: '2024',
      url: 'https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf',
    },
  ],
}

async function seed() {
  console.log('🌱 Seeding Acanthosis Nigricans diet chart...')
  await client.createOrReplace(doc)
  console.log('✅ Acanthosis Nigricans diet seeded — homeopedia.in/diet/acanthosis-nigricans')
}

seed().catch(console.error)
