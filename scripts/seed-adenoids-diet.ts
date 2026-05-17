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
  _id: 'diet-adenoids',
  _type: 'diet',
  title: 'Adenoids (Naak Ki Granthi) Diet Chart',
  slug: { _type: 'slug', current: 'adenoids' },
  relatedDiseaseSlug: 'adenoids',
  hindiName: 'Naak Ki Granthi, Adenoid (Badhna)',
  category: 'Respiratory',
  metaTitle: 'Adenoids Diet (Naak Ki Granthi) – Kya Khayein Kya Nahi | Homeopedia',
  metaDescription:
    'Adenoids diet chart – green list, red list, daily meal plan, veg aur non-veg dono. Dr. Shadab Khan. Doctor-reviewed. Homeopedia.in',
  intro:
    'Adenoids mein lymphoid tissue immune response ke dauran soojan aata hai – aur kuch khaane is sujan ko directly badha dete hain jisse symptoms aur bhi tez ho jaate hain. Neeche complete guide hai – green list, red list, daily meal plan, veg/non-veg dono options, aur vrat/travel jaise special situations.',
  reviewDate: 'May 2026',
  doctorNote:
    'Maine apne adenoid patients mein consistently notice kiya hai ki jo bachche aur unke parents dairy aur maida dono ek saath chhod dete hain – sirf ek chhod ke nahi – unka homeopathic treatment response clearly better hota hai aur naak band ki problem jaldi settle hoti hai. – Dr. Shadab Khan, MD Homoeopath',
  homeopathyDiet:
    'Jab adenoids ke liye homoeopathic medicines di jaati hain, sahi diet unhe better kaam karne deti hai – mucus-forming aur inflammatory foods avoid karne se medicine ka response clearly faster hota hai.',
  importantNote:
    'Ye chart ek general guide hai. Adenoids ka size, severity, aur aapke bachche ki age ke hisaab se diet ki zarooratein alag ho sakti hain. Apne homoeopath se personalized plan zaroor banwayein.',
  proTip:
    'Raat ko sone se pehle ek neem ki danti ya adrak-namak gargle karo – sirf 2 minute – adenoid area ki bacteria load reduce hoti hai aur naak subah zyada clear milti hai.',

  eatingHabits: [
    {
      _key: 'eh1',
      habit: 'Raat ka khaana 7:30 baje tak khatam karo',
      reason:
        'Late dinner se mucus production badhti hai jo adenoid symptoms (naak band, kharrate) raat mein aur bhi worse karta hai',
    },
    {
      _key: 'eh2',
      habit: 'Subah uthke lukewarm paani piyo',
      reason:
        'Naak aur throat ki accumulated mucus clear hoti hai jo adenoids pe pressure kam karta hai',
    },
    {
      _key: 'eh3',
      habit: 'Thanda aur ice-cold khaana/peena avoid karo',
      reason:
        'Cold foods se naak ki mucous membrane contract hoti hai aur inflammation aur tez ho jaati hai',
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
          food: 'Daliya (oats/broken wheat)',
          reason:
            'Easily digest hota hai, mucus formation nahi karta unlike maida-based foods',
        },
        {
          _key: 'vg1i2',
          food: 'Brown rice',
          reason:
            'Refine nahi hota isliye gut inflammation nahi badhata – adenoid swelling pe indirect effect padta hai',
        },
        {
          _key: 'vg1i3',
          food: 'Bajra roti',
          reason:
            'Zinc se bhari hai jo lymphoid tissue ki immunity support karta hai',
        },
        {
          _key: 'vg1i4',
          food: 'Moong dal khichdi',
          reason:
            'Gut pe bilkul light, immune response stable rakhti hai adenoid recovery mein',
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
            'Gut ki sujan kam karta hai, easily digest hoti hai – immune overreaction reduce hota hai',
        },
        {
          _key: 'vg2i2',
          food: 'Turai',
          reason:
            'Light aur non-mucogenic hai – adenoid tissue pe koi extra load nahi',
        },
        {
          _key: 'vg2i3',
          food: 'Palak',
          reason:
            'Vitamin C aur iron dono – lymphoid tissue ke immune function ke liye zaroori',
        },
        {
          _key: 'vg2i4',
          food: 'Karela',
          reason:
            'Natural anti-inflammatory, lymph gland ki overactivity kam karne mein help karta hai',
        },
        {
          _key: 'vg2i5',
          food: 'Gajar',
          reason:
            'Beta-carotene se bhari hai jo mucosal immunity (naak-gale ki lining) strengthen karta hai',
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
          food: 'Amla',
          reason:
            'Vitamin C ka best Indian source – adenoid tissue ki inflammation directly kam karta hai',
        },
        {
          _key: 'vg3i2',
          food: 'Papaya',
          reason:
            'Papain enzyme hota hai jo naturally decongestant ka kaam karta hai aur naak band kam karta hai',
        },
        {
          _key: 'vg3i3',
          food: 'Seb (apple, peeled)',
          reason:
            'Quercetin hota hai jo allergic inflammation response ko modulate karta hai',
        },
        {
          _key: 'vg3i4',
          food: 'Nar (pomegranate)',
          reason:
            'Punicalagin antioxidant adenoid ke lymphoid cells ki sujan kam karta hai',
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
          food: 'Moong dal (split, yellow)',
          reason:
            'Sabse easily digest hoti hai – gut-lymph connection ke through adenoid inflammation kam karta hai',
        },
        {
          _key: 'vg4i2',
          food: 'Masoor dal',
          reason:
            'Iron aur folate – immune cell production ke liye – adenoid recovery mein support karta hai',
        },
        {
          _key: 'vg4i3',
          food: 'Chana dal',
          reason:
            'Zinc source, lymphocyte (immune cell) function support karta hai jo adenoids ka core function hai',
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
          food: 'Adrak + tulsi ka kadha',
          reason:
            'Naturally anti-inflammatory – naak aur gale ki sujan directly kam karta hai',
        },
        {
          _key: 'vg5i2',
          food: 'Haldi + kali mirch (doodh mein)',
          reason:
            'Curcumin adenoid tissue ka inflammation reduce karta hai – kali mirch ke bina curcumin absorb nahi hota',
        },
        {
          _key: 'vg5i3',
          food: 'Mulethi (liquorice) chai',
          reason:
            'Upper respiratory mucosa pe soothing effect hai – adenoid-related congestion mein help karta hai',
        },
        {
          _key: 'vg5i4',
          food: 'Jeera',
          reason:
            'Digestive fire badhata hai, mucus production control hoti hai – indirect adenoid benefit',
        },
        {
          _key: 'vg5i5',
          food: 'Sarson ka tel ya til ka tel (cooking ke liye)',
          reason:
            'Omega fatty acids – anti-inflammatory, mucosal health support karte hain',
        },
      ],
    },
  ],

  nonVegAllowed: [
    {
      _key: 'nva1',
      food: '2 ande boiled (subah)',
      reason:
        'High quality protein, zinc – lymphoid tissue regeneration ke liye zaroori',
    },
    {
      _key: 'nva2',
      food: 'Rohu ya katla machli (grilled/steamed)',
      reason:
        'Omega-3 fatty acids adenoid ke lymphoid tissue ki chronic sujan kam karte hain',
    },
    {
      _key: 'nva3',
      food: 'Chicken soup (bina cream, homemade)',
      reason:
        'Broth mein natural compounds hote hain jo nasal congestion reduce karte hain',
    },
  ],

  nonVegAvoid: [
    {
      _key: 'nvav1',
      food: 'Fried chicken / pakoda',
      reason:
        'Trans fat inflammation badhata hai – adenoid tissue pe direct negative effect',
    },
    {
      _key: 'nvav2',
      food: 'Processed meat (sausage, salami)',
      reason:
        'Preservatives adenoid area ki mucosal lining irritate karte hain',
    },
    {
      _key: 'nvav3',
      food: 'Mutton / red meat',
      reason:
        'Arachidonic acid badhata hai jo prostaglandin ke through adenoid inflammation worse karta hai',
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
          food: 'Maida (bread, biscuits, noodles)',
          reason:
            'Gut mein leaky gut badhata hai jo immune overreaction trigger karta hai – adenoid swelling ka key driver hai',
        },
        {
          _key: 'rl1i2',
          food: 'Instant noodles / Maggi',
          reason:
            'MSG aur sodium adenoid area ki mucosal lining irritate karte hain',
        },
        {
          _key: 'rl1i3',
          food: 'Packaged chips / namkeen',
          reason:
            'Refined oil + salt – mucus production badhata hai, naak aur zyada band hoti hai',
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
          food: 'Gaay ka doodh (packaged / full cream)',
          reason:
            'Mucus-forming food hai – casein protein adenoid area mein phlegm production badhata hai jo congestion worse karta hai',
        },
        {
          _key: 'rl2i2',
          food: 'Ice cream',
          reason:
            'Cold + dairy dono – double hit – adenoid swelling aur mucus dono ek saath badhte hain',
        },
        {
          _key: 'rl2i3',
          food: 'Paneer (market ka, processed)',
          reason:
            'Preservatives + heavy protein – difficult to digest, immune load badhta hai',
        },
        {
          _key: 'rl2i4',
          food: 'Malai / cream',
          reason:
            'Heavy fat – mucosal inflammation badhata hai',
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
          food: 'Refined sugar (meethai, cold drinks)',
          reason:
            'Immune cells ki efficiency temporarily kam hoti hai – adenoid recovery slow hoti hai',
        },
        {
          _key: 'rl3i2',
          food: 'Zyada teekha khaana (red chilli excess)',
          reason:
            'Mucosal lining irritate karta hai – gale aur naak ki sujan badhti hai',
        },
        {
          _key: 'rl3i3',
          food: 'Deep fried khaana',
          reason:
            'Trans fat chronic adenoid inflammation maintain karta hai – healing nahi ho paati',
        },
        {
          _key: 'rl3i4',
          food: 'Maida + sugar ka combination (cakes, pastries)',
          reason:
            'Worst combination – gut + immune dono ek saath affect karta hai',
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
          food: 'Thanda paani / cold drinks (refrigerator se seedha)',
          reason:
            'Mucosal membrane contract hoti hai – adenoid swelling tez hoti hai',
        },
        {
          _key: 'rl4i2',
          food: 'Packaged juice (mango, orange)',
          reason:
            'Preservatives + added sugar – immune response disturb hota hai',
        },
        {
          _key: 'rl4i3',
          food: 'Chai / coffee 3+ cups',
          reason:
            'Tannic acid mucous membrane dry karta hai – throat irritation badhti hai – 1 cup subah theek hai',
        },
        {
          _key: 'rl4i4',
          food: 'Soda / aerated drinks',
          reason:
            'Phosphoric acid adenoid area ki mucosal pH disturb karta hai',
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
        'Lukewarm paani + 1/2 nimbu + 1 tsp shahad',
        'Adrak + tulsi ka kadha (warm) – 1 cup',
      ],
      nonVegOption: '',
    },
    {
      _key: 'dmp2',
      slotName: 'Nashta',
      slotTime: '8–9 AM',
      slotEmoji: '🍽️',
      vegOptions: [
        'Moong dal chilla (2 pcs) + pudina chutney',
        'Daliya with lauki aur jeera tadka',
      ],
      nonVegOption: '2 ande boiled + 1 roti + tamatar ki chutney',
    },
    {
      _key: 'dmp3',
      slotName: 'Mid-Morning',
      slotTime: '11 AM',
      slotEmoji: '☀️',
      vegOptions: [
        '1 seb (peeled) ya 1 amla murabba',
        'Bhuna chana (1 handful) + gur (thoda sa)',
      ],
      nonVegOption: '',
    },
    {
      _key: 'dmp4',
      slotName: 'Dopahar',
      slotTime: '1–2 PM',
      slotEmoji: '🌱',
      vegOptions: [
        '2 bajra roti + moong dal + lauki sabzi + salad',
        'Moong dal khichdi + gajar ki sabzi + ghee (thoda)',
      ],
      nonVegOption: '1 roti + grilled rohu machli + palak sabzi + salad',
    },
    {
      _key: 'dmp5',
      slotName: 'Shaam',
      slotTime: '4–5 PM',
      slotEmoji: '🌿',
      vegOptions: [
        'Mulethi/tulsi chai (bina sugar) + 4-5 akhrot',
        'Roasted makhana (light salt)',
      ],
      nonVegOption: '',
    },
    {
      _key: 'dmp6',
      slotName: 'Raat',
      slotTime: '7–8 PM',
      slotEmoji: '🌙',
      vegOptions: [
        '2 roti + masoor dal + turai/palak sabzi',
        'Daliya khichdi + ghee + salad',
      ],
      nonVegOption: 'Homemade chicken soup (bina cream) + 1 roti',
    },
    {
      _key: 'dmp7',
      slotName: 'Sone Se Pehle',
      slotTime: '9 PM',
      slotEmoji: '😴',
      vegOptions: [
        'Warm haldi doodh (plant-based ya ghar ka garam doodh – kali mirch ke saath)',
        'Warm paani + adrak + shahad (1 tsp)',
      ],
      nonVegOption: '',
    },
  ],

  samplePlan4Day: [
    {
      _key: 'sp1',
      day: 'Din 1',
      vegSubah: 'Lukewarm nimbu paani',
      vegNashta: 'Moong dal chilla + chutney',
      vegDopahar: 'Brown rice + arhar dal + gajar sabzi + salad',
      vegShaam: 'Tulsi chai + bhuna chana',
      vegRaat: '2 roti + masoor dal + lauki sabzi',
      nonVegNashta: '2 ande boiled + 1 roti',
      nonVegDopahar: 'Grilled rohu + 2 roti + gajar sabzi + salad',
      nonVegRaat: 'Chicken soup (homemade) + 1 roti',
    },
    {
      _key: 'sp2',
      day: 'Din 2',
      vegSubah: 'Adrak tulsi kadha',
      vegNashta: 'Daliya with vegetables (lauki/turai)',
      vegDopahar: 'Moong dal khichdi + palak sabzi + ghee',
      vegShaam: 'Roasted makhana + warm paani',
      vegRaat: '2 bajra roti + chana dal + turai sabzi',
      nonVegNashta: 'Daliya with vegetables (lauki/turai)',
      nonVegDopahar: 'Steamed katla + brown rice + palak sabzi',
      nonVegRaat: '2 roti + chana dal + turai sabzi',
    },
    {
      _key: 'sp3',
      day: 'Din 3',
      vegSubah: 'Lukewarm paani + shahad + adrak',
      vegNashta: 'Poha (mustard seeds + curry patta tadka) + amla chutney',
      vegDopahar: '2 roti + moong dal + karela sabzi + salad',
      vegShaam: 'Mulethi chai + 4 akhrot',
      vegRaat: 'Daliya + palak + ghee (1 tsp)',
      nonVegNashta: '2 ande + poha (small portion)',
      nonVegDopahar: '2 roti + grilled chicken + karela sabzi + salad',
      nonVegRaat: 'Daliya + palak + ghee',
    },
    {
      _key: 'sp4',
      day: 'Din 4',
      vegSubah: 'Warm haldi paani',
      vegNashta: 'Besan chilla (2 pcs) + tamatar chutney',
      vegDopahar: 'Brown rice + masoor dal + gajar + lauki sabzi',
      vegShaam: 'Seb (1 – peeled) + bhuna chana',
      vegRaat: '2 roti + arhar dal + turai sabzi',
      nonVegNashta: 'Besan chilla + 1 boiled anda',
      nonVegDopahar: 'Brown rice + rohu machli (steamed) + lauki sabzi',
      nonVegRaat: 'Chicken soup + 1 roti',
    },
  ],

  specialSituations: [
    {
      _key: 'ss1',
      situationType: 'flareUp',
      title: 'Flare-Up / Naak Band, Bukhar, Dard Ho Tab',
      emoji: '🔴',
      tips: [
        'Us din sirf moong dal khichdi ya daliya + warm soup piyo – heavy food se immune system aur busy ho jaata hai',
        'Dairy, fried, aur thanda sab band karo us din – ye teen cheezein mucus production sabse zyada badhati hain',
        'Warm adrak-tulsi kadha din mein 2-3 baar piyo – nasal congestion naturally reduce hoti hai',
      ],
    },
    {
      _key: 'ss2',
      situationType: 'fasting',
      title: 'Vrat / Fasting',
      emoji: '🕌',
      tips: [
        'Sabudana khichdi theek hai – lekin gaay ke doodh ki jagah paani mein banao – dairy vrat mein bhi avoid karo',
        'Kuttu ki roti ya singhara atta allowed – easily digest hota hai, mucus nahi badhata',
        'Cold fruits avoid karo vrat mein – room temperature pe rakhke khao',
        'Agar bachcha chhota hai (5 saal se kam) – long fasting recommended nahi, doctor se poochho',
      ],
    },
    {
      _key: 'ss3',
      situationType: 'eatingOut',
      title: 'Bahar Khana Ho (Restaurant / Dhaba)',
      emoji: '🍽️',
      tips: [
        'Dal fry + plain roti order karo – sabse safe option, kam oil mein milti hai agar bolo',
        'Cold drinks, lassi, raita – avoid karo – dairy + refrigerated items adenoid symptoms turant badha dete hain',
        'Hack: Ghar se thermos mein adrak ka kadha le jao – bahar ke khaane ke baad pine se throat settle hota hai',
      ],
    },
    {
      _key: 'ss4',
      situationType: 'travel',
      title: 'Travel Mein',
      emoji: '✈️',
      tips: [
        'Carry karo: bhuna chana, dry amla candy, akhrot, bajra roti – train mein bhi easily khaaye ja sakte hain',
        'Hotel mein: plain dal chawal + roti order karo – "no cold water, no cold drinks" clearly bol do',
      ],
    },
  ],

  quickFacts: {
    mistake:
      'Raat ko thanda doodh dena – ye nasal congestion aur kharrate seedha worse karta hai raat ko',
    mustEat:
      'Amla – Vitamin C ka best Indian source – adenoid tissue ki inflammation naturally kam karta hai',
    mustAvoid:
      'Ice cream – cold + dairy dono ek saath – adenoid symptoms ke liye worst combination hai',
  },

  shareTextGreenRed:
    'Adenoids mein kya khayein, kya nahi – complete list: homeopedia.in/diet/adenoids',
  shareTextMealPlan:
    'Adenoids ke liye 4-din ka Indian diet plan: homeopedia.in/diet/adenoids',
  shareTextPage:
    'Adenoids Diet Guide – green list, meal plan, special situations sab: homeopedia.in/diet/adenoids',

  sources: [
    {
      _key: 'src1',
      name: 'Mahavar N et al – Evaluation of the local and systemic pattern of sensitization to allergens in patients with adenotonsillar hypertrophy – European Archives of Oto-Rhino-Laryngology 2024',
      year: '2024',
      url: 'https://pubmed.ncbi.nlm.nih.gov/38546851',
    },
    {
      _key: 'src2',
      name: 'Cho KS et al – Local Atopy in Childhood Adenotonsillar Hypertrophy – American Journal of Rhinology & Allergy 2018',
      year: '2018',
      url: 'https://pubmed.ncbi.nlm.nih.gov/29649882',
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
  console.log('🌱 Seeding Adenoids diet chart...')
  await client.createOrReplace(doc)
  console.log('✅ Adenoids diet seeded — homeopedia.in/diet/adenoids')
}

seed().catch(console.error)
