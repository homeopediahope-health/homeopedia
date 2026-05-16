import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-chickenpox',
  _type: 'disease',
  title: 'Chickenpox (Varicella)',
  hindiName: 'Chechak / Maata / Choti Mata',
  slug: { _type: 'slug', current: 'chickenpox' },
  category: 'Skin',
  publishedAt: '2026-05-10T00:00:00.000Z',
  metaTitle: 'Chickenpox ke Daag Hataye – Ilaaj aur Homeopathy Tips',
  metaDescription: 'Chechak (choti mata) ke nishan, daag aur khujli ka ilaaj – skin care, diet, homeopathic treatment aur scar prevention guide. Doctor-reviewed, verified info.',

  heroText: 'Chickenpox ek viral infection hai jo Varicella-Zoster virus se hoti hai. Pehle bukhar, phir poore body pe chhote chhote daane jo laal hote hain, paani bharta hai, aur ant mein khatmal ban jaate hain. India mein ye "Choti Mata" ya "Maata" ke naam se jaani jaati hai. Sabse bada problem infection ke baad hota hai – daane agar theek se treat na kiye jaayein ya khurachein to daag pad jaate hain jo lambe samay tak reh sakte hain. Sahi dekhbhaal se ye daag kaafi kam ya khatam hote dekhne ko milte hain.',

  quickFacts: {
    whatItIs: 'Varicella-Zoster Virus se hone wali viral skin infection – India mein "Choti Mata" ya "Maata" ke naam se jaani jaati hai',
    howCommon: 'India mein annual approx. 1.5 crore+ cases; school-age children (5-10 years) mein sabse common; peak season October-February',
    treatmentDuration: 'Active infection 7-14 din | Scars fade hone mein 6-18 mahine fresh scars ke saath proper care se',
    successRate: 'Jo patients healing phase mein 3-4 mahine tak treatment continue karte hain unke scars significantly less prominent hote hain – early start better outcome',
  },

  causes: [
    'Varicella-Zoster Virus (VZV) se direct contact – infected person ki saaans, chhink, ya daanon ke paani se failta hai',
    'Daane khurachine (scratching) se bacteria andar jaata hai aur deep scarring hoti hai',
    'Secondary bacterial infection (Staphylococcus aureus) daanon par aa jaaye to daag pakke pad jaate hain',
    'Vitamin deficiency (specially Vitamin C, Zinc, Vitamin E) – skin ki healing slow ho jaati hai',
    'Immunity weak hone se virus zyada aggressive hota hai aur daane gehre hote hain',
  ],

  riskFactors: [
    'Adults jo pehli baar chickenpox paate hain – badon mein zyada severe hoti hai',
    'Patients jinki immunity weak hai (steroids le rahe ho, cancer treatment, HIV)',
    'Jin logon ki skin oily ya acne-prone hai – healing slow hoti hai',
    'Jo scratching rok nahi paate, especially chhote bacche – scar certainty badh jaati hai',
    'Poor nutrition wale patients – Zinc aur Vitamin C ki kami se wound healing slow',
  ],

  complications: [
    'Permanent pitting scars – khaas taur pe chehra, maatha, aur gardan pe; long-term self-confidence affect hoti hai',
    'Secondary bacterial infection (Impetigo) – daanon par bacteria chadh jaaye to serious skin infection; antibiotic zaroori',
    'Pneumonia (Varicella Pneumonia) – adults aur immunocompromised patients mein serious risk',
    'Encephalitis (dimag ki sujan) – rare lekin serious; tez sar dard, mati bhraman ho to turant hospital',
    'Shingles (Herpes Zoster) – virus body mein sote rehta hai, years baad nerve pain ke saath wapas aa sakta hai',
  ],

  types: [
    {
      _key: 'type1',
      name: 'Mild Chickenpox (Halki Chechak)',
      description: '20-50 daane, halka bukhar (99-100°F), 2-3 din mein theek hone lagta hai. Vaccinated bacchon mein ya jin logon ki immunity achhi ho. Scar risk: Kam – agar khurachein nahi to daag nahi padenge.',
    },
    {
      _key: 'type2',
      name: 'Moderate Chickenpox',
      description: '200-500 daane, tez bukhar (101-103°F), zyada itching, 5-7 din active. Unvaccinated bacchon mein sabse common. Scar risk: Medium – scratching se permanent pits/marks aa sakte hain.',
    },
    {
      _key: 'type3',
      name: 'Severe Chickenpox',
      description: '500+ daane, tez bukhar, daane andar bhi (mouth, aankhein), secondary bacterial infection ka risk. Unvaccinated adults, immunocompromised patients, newborns mein. Scar risk: High – secondary bacterial infection se deep pitting scars ho sakte hain. Doctor se milna zaroori hai.',
    },
    {
      _key: 'type4',
      name: 'Chickenpox in Adults (Badon mein Chechak)',
      description: 'Bacchon se zyada severe, pneumonia ka risk, zyada daane aur tez bukhar. Scar risk: Very high – badon ki skin mein healing slow hoti hai, daag zyada pakke padte hain.',
    },
    {
      _key: 'type5',
      name: 'Post-Chickenpox Scarring (Infection ke baad ke daag)',
      description: 'Infection khatam ho gayi lekin skin pe nishan reh gaye. Teen types: Pitted Scars (gaddhe) – daane deep the ya khurachein; Flat Dark Marks – post-inflammatory hyperpigmentation; Raised Scars – rare, keloid tendency walon mein. Homeopathy aur skin care mein is type ko target karna sabse zaroori hai.',
    },
  ],

  symptoms: [
    {
      _key: 'sym1',
      category: 'Infection Ke Pehle 1-2 Din (Prodromal Stage)',
      items: [
        'Halka se tez bukhar (99°F-103°F)',
        'Thakaan aur bhookh na lagna',
        'Sar dard aur body ache',
        'Halki khansi ya naak bahna',
      ],
    },
    {
      _key: 'sym2',
      category: 'Daane Nikalte Waqt (Active Rash Stage)',
      items: [
        'Pehle laal daane (macules) – chehra, pet, aur peeth se shuru',
        'Phir upar paani bhar aata hai (vesicles) – dard aur tez khujli',
        'Daane poore body mein fail jaate hain – ek saath naye aur puraane dono rehte hain',
        'Khujli bahut tez hoti hai – ye sabse mushkil phase hai',
      ],
    },
    {
      _key: 'sym3',
      category: 'Crusting/Healing Stage',
      items: [
        'Paani wale daane phoot jaate hain ya sukh jaate hain (crusts/khatmal banta hai)',
        'Khatmal apne aap girne mein 7-14 din lagte hain',
        'Agar khatmal khurachen to neeche pink/red raw skin – ye hi scar ka starting point hai',
        'Kaale ya bhoore nishan reh jaate hain jahan daane the',
      ],
    },
  ],

  homeopathyBenefits: [
    'Khujli (itching) control mein madadgar – scratching ruk jaaye to scars kaafi kam ho jaate hain',
    'Daanon ki healing speed improve hoti hai – scabs jaldi bante hain aur safely gir jaate hain',
    'Post-inflammatory darkening (kaale nishan) mein skin ki natural repair support',
    'Bacchon ke liye safe option – koi sedation, koi chemical load nahi',
    'Constitutional treatment se overall immunity strengthen hoti hai taaki future infections aur Shingles ka risk bhi kam ho',
  ],

  medicines: [
    {
      _key: 'med1',
      name: 'Rhus Toxicodendron',
      bestFor: 'Jo patient bahut zyada restless ho, khujli tez ho aur raat ko zyada badhti ho, warmth se thodi rahat milti ho – active chickenpox stage mein.',
      keyIndications: [
        'Vesicular daane (paani bhare) ke saath extreme itching – raat ko worst',
        'Restlessness – ek jagah nahi baith sakta khujli ki wajah se',
        'Warmth se thodi rahat – daanon ki progression rokne mein sahayak',
      ],
    },
    {
      _key: 'med2',
      name: 'Antimonium Crudum',
      bestFor: 'Jab daane bahut dense hon, chhoone se dard ho, aur saath mein digestive upset (pet kharab, tongue pe white coating) bhi ho – India mein ye bahut common pattern hai.',
      keyIndications: [
        'Dense rash ke saath digestive symptoms – dono saath aate hain',
        'Tongue pe thick white coating – digestive upset prominent',
        'Daane chhoone se dard – sensitive skin with gastric involvement',
      ],
    },
    {
      _key: 'med3',
      name: 'Mezereum',
      bestFor: 'Jab daanon par thick crusts (mote khatmal) ban jaayein, neeche pus ya discharge ho, aur itching unbearable ho – especially gardan aur sir pe zyada ho.',
      keyIndications: [
        'Thick crusting – mote khatmal jo theek se dry nahi ho rahe',
        'Crust ke neeche pus ya serum – healing proper nahi ho rahi',
        'Itching unbearable – gardan aur sir pe zyada; scar prevention ke liye critical',
      ],
    },
    {
      _key: 'med4',
      name: 'Variolinum (Nosode)',
      bestFor: 'Jab chickenpox bahut severe ho, high fever ke saath, daane bahut dense hon aur secondary infection ka risk ho – sirf qualified homoeopath ki supervision mein.',
      keyIndications: [
        'Severe chickenpox presentation – high fever ke saath dense daane',
        'Secondary infection ka risk – nosode as supportive treatment',
        'Qualified homoeopath supervision mein hi use karna chahiye',
      ],
    },
    {
      _key: 'med5',
      name: 'Thuja Occidentalis',
      bestFor: 'Infection khatam ho gayi hai lekin skin pe dark marks ya flat scars reh gaye hain – post-chickenpox skin repair phase ke liye.',
      keyIndications: [
        'Post-infection dark marks – fresh scars jo abhi heal ho rahe hain',
        'Post-inflammatory skin changes – skin ke natural repair process ko support',
        'Scar prevention phase – daag fresh hon tab shuru karo, zyada effect hoga',
      ],
    },
  ],

  dietInclude: [
    {
      _key: 'di1',
      category: 'Healing Foods (Skin Repair Ke Liye)',
      emoji: '🌿',
      items: [
        'Papaya – Vitamin C aur papain enzyme hota hai jo skin healing speed karta hai',
        'Amla (Indian Gooseberry) – India ka sabse rich Vitamin C source; immunity aur skin dono ke liye',
        'Gajar aur shakarkand – Beta-carotene hota hai jo skin regeneration support karta hai',
        'Tomato – Lycopene antioxidant hota hai jo damaged skin cells repair karta hai',
      ],
    },
    {
      _key: 'di2',
      category: 'Protein Sources (Skin Tissue Repair)',
      emoji: '💪',
      items: [
        'Dal (moong, masoor) – Protein aur Zinc dono hain; skin tissue rebuild karta hai',
        'Paneer / Dahi – Protein easy digestible form mein; chickenpox mein appetite kam hoti hai to soft protein better',
        'Eggs (agar eat karte ho) – Complete protein; wound healing ke liye zaroori amino acids',
        'Chicken soup / light broth – Collagen aur protein; skin repair accelerate karta hai',
      ],
    },
    {
      _key: 'di3',
      category: 'Hydration & Soothing',
      emoji: '💧',
      items: [
        'Nariyal paani – Natural electrolytes; fever mein dehydration prevent karta hai',
        'Nimbu paani (lightly sweet) – Vitamin C + hydration; immunity support',
        'Haldi doodh – Anti-inflammatory; healing phase mein raat ko dena good hai',
        'Kheera / cucumber juice – Cooling effect; body ka temperature manage karta hai',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'Itching Badhaane Wale Foods',
      emoji: '🚫',
      items: [
        'Mirchi, teekha khana – Histamine release karta hai jo khujli aur tez karti hai',
        'Fried food (samosa, pakoda, chips) – Inflammatory hote hain; daanon ki healing slow',
        'Achar, imli, bahut khattha – Skin irritation badhate hain; active rash mein avoid karo',
      ],
    },
    {
      _key: 'da2',
      category: 'Immunity Down Karne Wale Foods',
      emoji: '⚠️',
      items: [
        'Maida (refined flour) – White bread, biscuit, burger bun – nutrition zero, recovery slow',
        'Packaged/processed foods – Preservatives aur artificial colors skin ke liye harmful',
        'Bahut meetha (high sugar) – Immunity response weak karta hai; bacteria ko encourage karta hai',
      ],
    },
    {
      _key: 'da3',
      category: 'Active Infection Mein Specific Avoids',
      emoji: '❌',
      items: [
        'Bahut thanda (ice cream, cold drinks) – Throat pe daane ho sakti hain; thanda painful hoga',
        'Nuts (khaaskar peanuts) – Arginine rich hain jo Varicella virus growth support kar sakta hai – active infection mein avoid karo',
        'Alcohol (adults mein) – Immunity kaafi compromise karta hai; virus ko zyada time milta hai',
      ],
    },
  ],

  dietTip: 'Scab girne ke baad treatment band mat karo – ye sabse common galti hai. Healing phase mein bhi 3-4 mahine skin care aur diet continue karo. Early start, better outcome.',
  dietNote: 'Bacchon ko soft, easy-to-eat food do – agar mooh mein daane hain to khaana painful hota hai; smoothies, dahi, soup better options hain active phase mein.',

  dos: [
    'Nakhoon kato aur saaf rakhoo (bacchon ke bhi) – scratching se daag padta hai; chhote nakhoon se damage less hota hai',
    'Gungune (lukewarm) paani se halka snaan karo – baking soda ya neem leaves paani mein daalke; infection control aur khujli relief dono',
    'Loose cotton kapde pahno – synthetic fabric avoid karo; cotton breathable hai aur daanon ko irritate nahi karta',
    'Khatmal (scabs) ko apne aap girne do – forcefully mat hatao; ye natural protection hai neeche ki healing skin ke liye',
    'Skin hydrated rakhein post-infection – Aloe vera gel (pure, without alcohol) daag pe lagao; skin regeneration support karta hai',
    'Ghar mein isolate karo jab tak saari scabs na gir jaayein – school/office mat bhejein',
  ],

  donts: [
    'Daane BILKUL mat khurachein – ye ek hi galti hai jo permanent scar ka sabse bada reason hai; bacchon ko samjhao',
    'Aspirin mat do (khaaskar bacchon ko) – chickenpox mein aspirin se Reye\'s Syndrome ho sakta hai; Paracetamol safe alternative hai',
    'Khatmal ya scabs forcefully mat ukhado – neeche ki skin abhi ready nahi hoti; scab uthane se deep scar guarantee hai',
    'Daag pe nimboo seedha mat lagao – acidity se irritation aur darken ho sakta hai; Vitamin C internally lo',
    'Sun exposure avoid karo jab tak fresh scars hain (minimum 3-4 mahine) – UV rays daag ko permanent dark bana deti hain',
    'Infected daanon par koi bhi unknown gharelu paste mat lagao bina doctor ki salaah ke',
  ],

  seasonalCare: {
    summer: 'Khujli aur bhi tez ho jaati hai – pasinaa daanon ko irritate karta hai. Scar darkening bhi sun exposure se zyada hoti hai. Bacche ko direct dhoop mein mat jaane do jab tak daag fresh hon (minimum 3-4 mahine). Loose cotton kapde pahnaao. Gungune paani se nahao – thanda ya bahut garam dono avoid karo.',
    winter: 'Chickenpox aur Shingles ka peak season India mein – sardiyon mein virus easily survive karta hai. Ghar warm rakhein, layered kapde, theek bathroom ventilation. Skin moisturise karo – sardi mein skin dry hoti hai aur scars zyada prominent dikhte hain. Neem leaves paste halke tarike se, rubbing mat karo.',
    monsoon: 'Humidity mein bacterial infection ka risk badh jaata hai – scabs moist rehti hain aur jaldi nahi girti. Skin dry rakhna priority – har baar sweat aane pe gentle pat dry karo. Cotton kapde prefer karo. Agar koi daana pus dene lage to turant doctor. Neem paani se halka snaan helpful – neem patti boil karo, thanda karo, phir use karo.',
  },

  faqs: [
    {
      _key: 'faq1',
      question: 'Chickenpox ke daag kaise hataye? Koi pakka tarika hai kya?',
      answer: 'Aloe vera gel (pure), Vitamin E oil, aur Rosehip seed oil – ye teen cheezein raat ko lagao aur subah saaf karo. Andar se: Vitamin C (amla, nimbu, papaya diet mein), Zinc (dal, nuts) aur proper hydration skin cell repair speed karta hai. Homeopathy mein Thuja Occidentalis aur Silicea – experienced homoeopath ke through – post-chickenpox skin repair mein use ki jaati hai. Key rule: scars jitne fresh hon utni jaldi treatment shuru karein.',
    },
    {
      _key: 'faq2',
      question: 'Chickenpox ke nishan kitne din mein theek hote hain?',
      answer: 'Fresh daag (post-infection) 3-6 mahine mein kaafi fade ho jaate hain agar sahi skin care ki jaaye. Flat kaale nishan (hyperpigmentation) 6-12 mahine mein apne aap bhi improve hote hain. Pitted (gaddhe wale) scars naturally slowly improve hote hain lekin completely nahi jaate bina treatment ke. Jo log early phase mein treatment shuru karte hain unme 12 mahine mein significant improvement typical hai. Patience zaroori hai.',
    },
    {
      _key: 'faq3',
      question: 'Chickenpox mein khujli (itching) kaise band karo?',
      answer: 'Instant relief ke liye: (1) Calamine lotion – directly daanon pe dab karo; (2) Gungune neem paani se snaan; (3) Baking soda bath – 1 cup baking soda gungune paani mein; (4) Wet cold cloth gently daanon pe rakhna (rubbing nahi). Bacchon ke liye: nakhoon chhote rakho aur raat ko cotton mittens pahna sakte ho. Doctor anti-histamine syrup de sakte hain (Cetirizine etc.) – neend mein scratching kam hoti hai. Homeopathy mein Rhus Tox is type ki khujli mein classical use ki jaati hai.',
    },
    {
      _key: 'faq4',
      question: 'Kya chickenpox ke daag chehra pe hamesha ke liye reh jaate hain?',
      answer: 'Zaroor nahi – ye depend karta hai daag ke type pe. Flat kaale ya bhoore nishan mostly 6-18 mahine mein fade ho jaate hain, khaaskar agar sun exposure avoid karein. Pitted scars naturally healing se completely nahi jaate lekin significantly fade hote hain. Homeopathic treatment fresh scar phase mein shuru kiya jaaye to gaddhe banne se pehle hi heal karne ka chance better hota hai.',
    },
    {
      _key: 'faq5',
      question: 'Chickenpox ke baad chehra kaala kyun ho jaata hai?',
      answer: 'Ye post-inflammatory hyperpigmentation hai – jahan daana tha wahan skin mein melanin (color pigment) excess mein produce ho jaata hai. Ye koi permanent chemical change nahi – natural repair process ka hissa hai. Dhoop (UV rays) is darkening ko aur badha deti hai – isliye fresh scars par direct sun exposure darkening ka sabse bada reason hai. Sunscreen + shade = kaafi hadd tak darkening roka ja sakta hai.',
    },
    {
      _key: 'faq6',
      question: 'Bacchon mein chickenpox ke daag kaise hatayein?',
      answer: 'Bacchon ki skin adults se zyada regenerative hoti hai – unke daag jaldi theek hote hain. Safe options for kids: (1) Pure Aloe vera gel; (2) Calendula cream – gentle, anti-inflammatory; (3) Coconut oil – antimicrobial, moisturizing, nightly use. Avoid in kids: Retinol creams, AHA/BHA products, strong chemical peels – bacchon ki sensitive skin ke liye suitable nahi. Homeopathy mein bacchon ke liye completely safe options hain.',
    },
    {
      _key: 'faq7',
      question: 'Kya nimboo chickenpox ke daag pe lagane se kaam karta hai?',
      answer: 'Seedha nimboo skin pe lagana – khaaskar daag pe – avoid karo. Nimboo bahut acidic hota hai aur skin ko irritate kar sakta hai; fresh healing skin pe ye darken bhi kar sakta hai. Vitamin C internally – amla, papaya, nimbu paani peena – wahi genuinely faydemand hai. Topically agar Vitamin C chahiye to properly stabilized serum form better aur safe alternative hai.',
    },
    {
      _key: 'faq8',
      question: 'Chickenpox ke daag pe kya lagayein raat ko?',
      answer: 'Raat ka time scar healing ke liye best hai. Evidence-based options: (1) Aloe vera gel (pure) – anti-inflammatory, skin repair; (2) Vitamin E oil – antioxidant, collagen support; (3) Rosehip seed oil – Vitamin A aur C dono, clinically scar improvement mein studied; (4) Coconut oil – antimicrobial aur moisturizing; (5) Calendula cream – gentle, especially bacchon ke liye. Jo nahi lagana: Toothpaste, baking soda paste, raw lemon – ye skin ko damage kar sakte hain.',
    },
    {
      _key: 'faq9',
      question: 'Chickenpox mein kya khana chahiye aur kya nahi?',
      answer: 'Kya khayein: Papaya, amla, nimbu (Vitamin C), moong dal aur paneer (protein, skin repair), nariyal paani (hydration), haldi doodh (anti-inflammatory). Kya avoid karein: Teekhi mirchi aur fried food (itching badhaata hai), bahut meetha (immunity down), peanuts aur nuts (Arginine – virus ke liye favorable), ice cream aur thanda (throat daanon ke liye painful).',
    },
    {
      _key: 'faq10',
      question: 'Kya homeopathy chickenpox theek karta hai?',
      answer: 'Homeopathy chickenpox ke management mein do tarah se helpful hai. Pehla – active infection ke dauraan: fever management, itching control, aur daanon ko gehre hone se rokne mein support. Doosra – healing phase mein: scar prevention aur skin repair support. Bacchon ke liye especially safe option hai – koi chemical side effects nahi. Qualified homoeopath se milein taaki specific symptoms ke hisaab se individualized treatment ho.',
    },
    {
      _key: 'faq11',
      question: 'Chickenpox kitne din mein theek hota hai?',
      answer: 'Active chickenpox infection typically 7-14 din mein theek ho jaati hai. Timeline: Day 1-2 – fever aur body ache; Day 3-5 – maximum daane, tez khujli; Day 6-10 – daane phootna aur scabs banna; Day 10-14 – scabs naturally girna. Jab tak saari scabs na gir jaayein tab tak infectious rehta hai. Adults mein ye process 5-7 din zyada le sakta hai. Agar 2 hafte mein fever na utara ya naye daane aa rahe hain to doctor.',
    },
    {
      _key: 'faq12',
      question: 'Kya chickenpox sirf ek baar hoti hai ya dobara bhi ho sakti hai?',
      answer: 'Normally chickenpox ek baar hoti hai – body strong immunity banati hai. Dobara chickenpox bahut rare hai. Lekin virus body mein dormant rehta hai nervous system mein. Saalon baad jab immunity weak ho (age, stress, illness) ye Shingles (Herpes Zoster) ke roop mein wapas aa sakta hai – ek taraf nerve pain ke saath daane. Shingles chickenpox se alag hota hai lekin same virus hai.',
    },
    {
      _key: 'faq13',
      question: 'Chickenpox mein neem ka pani lagana chahiye? Sach mein kaam karta hai?',
      answer: 'Neem ka pani – specifically neem leaves ko boil karke thanda karke use karna – ek valid traditional practice hai. Neem mein Nimbidin aur Azadirachtin ke antimicrobial properties documented hain – daanon par bacterial secondary infection rokne mein helpful. Kaise karein: 20-25 neem patti 2 glass paani mein 20 minute boil karo, thanda karo, filter karo, phir gentle snaan mein use karo. Kya nahi karein: Seedha neem leaves rub karna – ye irritate kar sakta hai.',
    },
    {
      _key: 'faq14',
      question: 'Pregnancy mein chickenpox ho to kya karein?',
      answer: 'Pregnancy mein chickenpox serious matter hai – turant doctor ke paas jaana zaroori hai, ghar pe wait mat karo. Risks: Pehle 20 hafte mein fetal varicella syndrome ka risk; delivery ke kareeb chickenpox ho to newborn ke liye serious. Doctor VZIG ya Acyclovir prescribe kar sakte hain. Koi bhi self-treatment – homeopathy bhi – pregnancy mein sirf qualified practitioner ki supervision mein.',
    },
    {
      _key: 'faq15',
      question: 'Chickenpox ke daag ke liye gharelu ilaaj jo sach mein kaam karta ho?',
      answer: 'Kaam karne wale options: (1) Aloe vera gel (fresh plant se) – anti-inflammatory, skin healing; roz raat ko lagao; (2) Coconut oil – antimicrobial, moisturizer; (3) Multani mitti + rose water pack – weekly; skin tone even karta hai; (4) Haldi + shehad paste – 20 min mask, gentle wash; (5) Nariyal paani peena – internal hydration. Jo kaam nahi karta: Toothpaste, raw lemon apply karna, baking soda paste – ye irritate karte hain.',
    },
    {
      _key: 'faq16',
      question: 'Kya chickenpox mein nahana chahiye ya nahi?',
      answer: 'Haan – gentle bathing zaroori hai, puri tarah avoid karna galat advice hai. Gungune paani se halka snaan hygiene maintain karta hai aur bacterial infection ka risk kam karta hai. Kaise karein: Gungune paani mein neem leaves ya baking soda daalein; gentle pour karo, scrubbing bilkul nahi; baad mein soft towel se gentle pat dry (rubbing nahi). Har roz ek baar enough hai. Hot water avoid karo – itching badh jaati hai.',
    },
    {
      _key: 'faq17',
      question: 'School ya office kab jaayein chickenpox ke baad?',
      answer: 'Jab tak saari scabs naturally gir na jaayein – tab tak infectious period hai. Generally 7-14 din mein last daane nikalne ke baad. India mein school aur offices mein doctor\'s fitness certificate ya 14 din ka isolation standard practice hai. Practical rule: agar koi fresh (liquid-filled) daana dikhe – bahar nahi. Jab saare scabs gir jaayein aur sirf flat pink/red marks reh jaayein – tab usually safe hai.',
    },
    {
      _key: 'faq18',
      question: 'Chickenpox aur smallpox mein kya fark hai?',
      answer: 'Dono alag diseases hain. Chickenpox (Varicella): Common viral infection, daane alag alag stages mein hote hain (fresh + crusting ek saath), generally mild especially bacchon mein. Smallpox (Mahamaata): World mein 1980 mein eradicated – ab naturally nahi hoti. Daane sabhi ek hi stage mein hote the, face pe density zyada, bahut severe. Agar koi "chechak" bole to usually wo chickenpox hi hai.',
    },
    {
      _key: 'faq19',
      question: 'Chickenpox ke baad Shingles kyun hota hai?',
      answer: 'Chickenpox ke baad Varicella-Zoster Virus body se completely nahi jaata – ye nervous system mein chup jaata hai. Jab immunity weak ho – age, stress, illness, steroids – ye virus reactivate ho sakta hai aur Shingles ke roop mein aata hai. Shingles mein ek side pe nerve pain hoti hai (burning, shooting) aur band shaped rash aata hai. 50+ age ke logon mein zyada common hai – vaccine (Shingrix) available hai jo risk significantly reduce karta hai.',
    },
    {
      _key: 'faq20',
      question: 'Chickenpox mein Calamine lotion lagani chahiye? Kaam karta hai?',
      answer: 'Haan – Calamine lotion chickenpox mein itching ke liye best OTC options mein se ek hai. Zinc oxide aur ferric oxide ka mixture hai jo skin ko cool karta hai, itching temporarily relieve karta hai, aur daanon ko dry bhi karta hai. Kaise use karein: Cotton ball pe le aur daanon pe gently dab karo – rubbing nahi. Har 4-6 ghante mein repeat kar sakte ho. Ye temporary relief hai – khujli control matlab scratching kam aur scratching kam matlab daag kam.',
    },
    {
      _key: 'faq21',
      question: 'Chickenpox mein konsi dawaai nahi leni chahiye?',
      answer: 'Aspirin – khaaskar bacchon ko bilkul nahi; chickenpox mein aspirin se Reye\'s Syndrome ho sakta hai jo serious liver aur brain condition hai. Paracetamol safe alternative hai fever ke liye. Ibuprofen – kuch studies mein severe skin infection ka risk indicate kiya gaya hai chickenpox ke dauraan – doctor se pooch ke lo. Koi bhi steroid cream bina prescription ke mat lagao – daanon par laga to secondary infection badh sakti hai.',
    },
    {
      _key: 'faq22',
      question: 'Chickenpox ka vaccine kab lagwana chahiye?',
      answer: 'India mein Varicella vaccine (Varivax ya Okavax) IAP ke guidelines mein include hai. Schedule: Pehli dose 15 mahine pe, doosri dose 4-6 saal pe. Jo adults ko kabhi chickenpox nahi hua unhe bhi vaccine leni chahiye – 2 doses 4-8 hafte ke antar pe. Agar kisi se recently exposure hua hai to 72-120 ghante ke andar vaccine effective ho sakti hai (post-exposure prophylaxis). Vaccine 90%+ effective hai severe chickenpox aur serious complications se bachane mein.',
    },
  ],

  sources: [
    { _key: 'src1', name: 'WHO – Varicella and Herpes Zoster Fact Sheets', url: 'https://www.who.int', year: '2023' },
    { _key: 'src2', name: 'CDC – Chickenpox (Varicella) for Healthcare Professionals', url: 'https://www.cdc.gov/chickenpox', year: '2023' },
    { _key: 'src3', name: 'Indian Academy of Pediatrics (IAP) – Immunization Guidelines', url: 'https://www.iapindia.org', year: '2023' },
    { _key: 'src4', name: 'NCBI/PubMed – Post-chickenpox scarring: management and prevention | Dermatology Reports', url: 'https://www.ncbi.nlm.nih.gov', year: '2021' },
    { _key: 'src5', name: 'Ministry of Health & Family Welfare, India – Varicella Immunization Position', url: 'https://www.mohfw.gov.in', year: '2022' },
    { _key: 'src6', name: 'Clarke\'s Materia Medica – Rhus Tox, Mezereum, Antimonium Crudum entries', url: 'https://www.homeoint.org', year: '2000' },
  ],

  relatedDiseases: [
    'Shingles (Herpes Zoster)',
    'Atopic Dermatitis',
    'Psoriasis',
    'Vitiligo',
    'Eczema',
  ],

  selfCheck: 'Agar body pe chhote chhote daane nikal rahe hain jo pehle laal hote hain phir paani bharta hai – chehra, pet, peeth se shuru – bukhar ke saath, to ye Chickenpox ho sakta hai. Daane khurachein bilkul nahi aur doctor se confirm karwayein.',
}

async function seed() {
  try {
    const result = await client.createOrReplace(doc)
    console.log('✅ Chickenpox created/updated:', result._id)
    console.log('🌐 Live at: https://homeopedia.in/diseases/chickenpox')
  } catch (err) {
    console.error('❌ Error:', err)
  }
}

seed()
