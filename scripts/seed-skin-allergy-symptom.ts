import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'symptom-skin-allergy',
  _type: 'symptom',

  name: 'Skin Allergy',
  hindiName: 'Chamdi Ki Allergy / Twacha Ki Allergy',
  hinglishName: 'Skin Allergy (jo log search karte hain)',
  slug: { _type: 'slug', current: 'skin-allergy' },
  bodySystem: 'Skin',

  metaTitle: 'Skin Allergy in Hindi — Karan, Ilaaj aur Homeopathy | Homeopedia',
  metaDescription: 'Chamdi ki allergy (skin allergy) ke karan, severity aur ghar pe safe steps — simple Hinglish mein. Verified info, doctor-reviewed.',
  publishedAt: new Date('2026-05-18').toISOString(),

  whatIsThis: `Kabhi kabhi skin pe achanak laal dhabbey aa jaate hain — saath mein khujli, jalan, ya sujan. Koi khaas cheez touch ki, kuch khaya, ya phir bina kisi wajah ke hi chamdi react karne lagi. Skin allergy mein body ka immune system kisi cheez ko "danger" samajh leta hai aur uske khilaf ladhta hai — aur ye reaction skin pe dikhai deta hai.

Ye problem India mein bahut common hai. Pollution, dusty roads, synthetic fabrics, khaana — triggers har jagah hain. Aap akele nahi hain jinhein ye hoti hai.

Ye page aapko 2 minute mein batayega: aapki skin allergy serious hai ya nahi, ghar pe kya karein, aur agli step kya honi chahiye.`,

  indiaContext: 'WHO ke anusaar allergic diseases duniya bhar mein 20-30% abaadi ko affect karti hain — aur India mein pollution, diverse climate, aur urban triggers ki wajah se ye burden significantly high hai. Skin allergies India mein dermatology OPDs ki ek sabse common presenting complaint hain.',
  indiaContextSource: 'WHO Global Burden of Allergic Diseases, 2021',

  severityLevel1: [
    'Skin pe chhoti chhoti laal patches hain, khujli hai lekin koi sujan nahi',
    'Symptom ek familiar trigger ke baad aaya — jaise koi naya soap, kapda, ya khaana',
    '1-2 din se hai, dheere dheere better ho raha hai',
    'Sirf ek jagah hai — haath, peeth, ya gala',
  ],
  severityLevel2: [
    'Rash ya khujli badh rahi hai, kam nahi ho rahi',
    '1 hafte se zyada se hai aur wahi hai — theek nahi hui',
    'Pehle bhi baar baar aa chuki hai — same jagah ya same situation ke baad',
    'Face pe, aankhon ke aaspaas, ya aankhon mein jalan',
  ],
  severityLevel3: [
    'Skin allergy ke saath saath saans lene mein takleef — turant hospital',
    'Gala tight lagne laga ya awaaz baith gayi — turant hospital',
    'Chehra, honth, ya jeebh fool gayi — turant hospital',
    'Chakkar aa rahe hain ya behoshi jaisi feeling — turant hospital',
    'Poora badan ek saath red ho gaya aur dil tez dhadak raha hai — turant hospital (ye anaphylaxis ke signs ho sakte hain)',
  ],

  timeline3Days: 'Naya trigger aaya hoga — naya detergent, khaana, metal jewelry, ya koi naya product skin pe. Body abhi react kar rahi hai. Trigger hata do — zyada chances hain ki ye 2-3 din mein khud settle ho jaaye. Agar better nahi hui to Level 2 mein aao.',
  timeline4Weeks: 'Iska matlab hai ki ya to trigger abhi bhi present hai aur aap identify nahi kar paye, ya phir underlying koi skin condition hai — jaise eczema ya dermatitis. Ab ghar pe wait karna theek nahi — is hafte doctor se milna chahiye.',
  timelineMonthPlus: 'Ye chronic skin allergy hai. Baar baar aana, kabhi better kabhi worse — ye cycle kisi deeper imbalance ka signal hai. Doctor zaruri hai — aur homeopathy is stage mein specially helpful ho sakti hai kyunki ye root cause address karta hai, sirf symptoms suppress nahi karta.',

  lifestyleCauses: [
    {
      _key: 'lc1',
      causeName: 'Chemical Contact (Soap, Detergent, Cosmetics)',
      mechanism: 'Skin pe ek natural barrier hoti hai — sebum aur protective cells ki. Harsh chemicals is barrier ko tod dete hain. Jab inner layers expose ho jaati hain to immune cells alert ho jaati hain aur histamine release karta hai — aur ye histamine hi khujli, laalipan aur sujan paida karta hai. Ye reaction pehli baar use ke baad bhi ho sakta hai, ya kai mahine baad bhi.',
      howToIdentify: 'Jahan cheez touch hui — wahan symptoms. Haath dhone ke baad haathhon pe, ya shampoo ke baad sir ki skin pe. Pattern clear hota hai.',
    },
    {
      _key: 'lc2',
      causeName: 'Synthetic Fabric (Polyester, Nylon)',
      mechanism: 'Synthetic fabrics skin ko breathe nahi karne dete. Paseena skin pe ruk jaata hai — yahi paseena jab bacteria se milta hai to inflammation trigger karta hai. Saath hi kuch fabrics mein chemical dyes hote hain jo directly allergic reaction cause karte hain.',
      howToIdentify: 'Jahan kapda touch karta hai wahan rash — elastic ke neeche, collar ke aaspaas, ya kamar pe. Cotton pehenne ke baad better feel hota hai.',
    },
    {
      _key: 'lc3',
      causeName: 'Food Triggers (Khaan-Paan)',
      mechanism: 'Kuch logon mein specific foods — jaise seafood, dry fruits, dairy, ya artificial preservatives — immune system ko overdrive mein dal dete hain. Body IgE antibodies banati hai us food ke against — aur next time wo cheez khaayi to immediate reaction hoti hai skin pe ya andar.',
      howToIdentify: 'Khaane ke 30 minute se 2 ghante ke andar skin react karne lagi. Chehra ya haath pehle affect hote hain aksar. Ek specific khaana suspect hoga agar pattern repeat ho raha hai.',
    },
    {
      _key: 'lc4',
      causeName: 'Heat aur Sweat (Garmi aur Paseena)',
      mechanism: 'India ke garm mosam mein heat rash (prickly heat) bahut common hai. Sweat glands block ho jaate hain — paseena skin ke andar ruk jaata hai aur chhote chhote red bumps banata hai. Ye allergic reaction nahi hai strictly — lekin existing allergy ko bahut badha deta hai.',
      howToIdentify: 'Back, chest, ya neck pe — jahan sweat zyada hoti hai. Garmi mein badh jaata hai, AC mein better lagta hai.',
    },
  ],

  medicalCauses: [
    {
      _key: 'mc1',
      diseaseName: 'Urticaria (Pitthi / Chhapaki)',
      diseaseHindiName: 'Pitthi, Chhapaki, Sheetpitta',
      howSymptomPresents: 'Urticaria mein skin pe achanak uthne wale raised, laal, bahut zyada khujlidar patches aate hain — "hives" kehte hain inhe. Ye ek jagah se uthte hain aur doosri jagah jaate hain. Kuch ghante mein apne aap hat bhi sakte hain lekin wapas aate hain.',
      howToIdentify: 'Patches raised hote hain — touch karo to upar uthee hui feel hoti hai. Ek jagah se dusri jagah shift hote hain. Aksar raat ko zyada hote hain.',
      homeopediaSlug: 'urticaria',
      isAvailable: true,
    },
    {
      _key: 'mc2',
      diseaseName: 'Eczema (Chambal / Atopic Dermatitis)',
      diseaseHindiName: 'Chambal, Khujli wali bimari, Atopic Dermatitis',
      howSymptomPresents: 'Eczema mein skin bahut dry, thickened aur itchy ho jaati hai. Kuhniyon ke peeche, ghutne ke neeche, aur haathon pe zyada hota hai. Chronic condition hai — aati jaati rehti hai. Scratch karne pe aur bura ho jaata hai.',
      howToIdentify: 'Skin rough aur dry feel hoti hai, not just red. Badhne ki pattern hai — cold mein zyada, ya stress mein zyada. Family mein bhi hoti hai aksar.',
      homeopediaSlug: 'eczema',
      isAvailable: true,
    },
    {
      _key: 'mc3',
      diseaseName: 'Contact Dermatitis (Sampark Janya Chamdi Ki Sujan)',
      diseaseHindiName: 'Sampark se hone wali chamdi ki sujan',
      howSymptomPresents: 'Kisi specific cheez ke direct contact se reaction — chemical, plant, metal (nickel jewelry), ya rubber. Wahan rash, blisters, ya oozing ho sakti hai jahan cheez touch ki. Ye allergic type ya irritant type dono ho sakti hai.',
      howToIdentify: 'Exact boundary dikhti hai — jahan cheez touch ki, wahan tak hi rash. Jewelry ke neeche, belt ke neeche, ya watch ke neeche skin ka react karna classic sign hai.',
      homeopediaSlug: '',
      isAvailable: false,
    },
    {
      _key: 'mc4',
      diseaseName: 'Allergic Rhinitis (Naak Ki Allergy)',
      diseaseHindiName: 'Naak ki allergy, Hayfever',
      howSymptomPresents: 'Allergic rhinitis sirf naak ki nahi hoti — is mein aksar aankhon ke aaspaas skin itchy aur red hoti hai, chehra phoola hota hai. Pollen, dust mites, ya pet dander is sab ko trigger karte hain.',
      howToIdentify: 'Skin reaction ke saath naak bahna ya band hona, aankhon mein paani — ye combination allergic rhinitis suggest karta hai. Season ke saath badhta hai.',
      homeopediaSlug: 'allergic-rhinitis',
      isAvailable: true,
    },
  ],

  redFlags: [
    'Anaphylaxis — agar skin allergy ke saath saans lene mein takleef ya gale mein tightness ho to ye life-threatening emergency hai — turant 108 call karo',
    'Drug Reaction (Medicine se allergy) — koi nai medicine shuru ki aur uske baad se skin react kar rahi hai — medicine band karo aur doctor se turant milein. Kuch drug reactions bahut serious ho sakte hain (Stevens-Johnson Syndrome)',
    'Autoimmune Skin Condition — agar rash saath mein joints mein dard, bukhaar, aur thakaan le aaye, specially chehra aur naak pe butterfly-shaped rash ho to doctor se milna zaruri hai — lupus ya aisi conditions hoti hain jo systemic hoti hain',
  ],

  homeSteps: [
    {
      _key: 'hs1',
      action: 'Trigger Identify Karke Hatao',
      whyItWorks: 'Skin allergy mein sabse pehla kaam hai — jo cheez react kar rahi hai use skin se door karo. Naya soap, kapda, khaana — jo bhi naya tha last 1-2 din mein — use band karo. Trigger hata dene se body ka immune response automatically settle hone lagta hai.',
    },
    {
      _key: 'hs2',
      action: 'Cool, Damp Cloth Lagao',
      whyItWorks: 'Thande, geele kapde se skin pe theek se rakho — 10-15 minute ke liye. Thanda temperature nerve endings ko temporarily numb karta hai aur khujli ki sensation kam hoti hai. Saath hi inflammation (sujan) bhi thodi kam hoti hai.',
    },
    {
      _key: 'hs3',
      action: 'Loose Cotton Kapde Pehno',
      whyItWorks: 'Synthetic fabrics paseena rok ke aur skin pe friction se allergy aur badha dete hain. Loose cotton breathe karta hai — skin ko air milti hai, sweat absorb hoti hai, aur irritation minimum hoti hai.',
    },
    {
      _key: 'hs4',
      action: 'Nails Chhoti Rakho, Scratch Mat Karo',
      whyItWorks: 'Scratch karne se skin ki protective barrier tootti hai — bacteria andar ghus jaate hain aur secondary infection ho sakta hai. Saath hi scratch karne se histamine aur release hoti hai — matlab khujli aur zyada ho jaati hai. Cool cloth se dab karo — scratch karne ki jagah.',
    },
    {
      _key: 'hs5',
      action: 'Lukewarm Paani Se Naao — Garm Nahi',
      whyItWorks: 'Bahut garm paani skin ke natural oils khatam kar deta hai aur dry skin allergy aur badh jaati hai. Lukewarm paani, unscented mild soap — aur bath ke baad immediately moisturize karo agar dry skin hai. AC ya fan ki seedhi hawa bhi dry kar deti hai — dhyan rakho.',
    },
  ],

  homeopathyIndividualization: `Skin allergy ka naam ek hai — lekin har insaan mein alag hoti hai. Kisi ko garmi mein badhti hai, kisi ko raat ko zyada hoti hai, kisi ko scratch karne pe better lagta hai, kisi ko paani se aur buri ho jaati hai. Homeopathy mein sirf "skin allergy" nahi dekhi jaati — aapki specific pattern dekhi jaati hai. Isliye do logon ko ek jaisi allergy mein bilkul alag treatment ho sakti hai — aur dono ko fayda hota hai.`,

  homeopathyRootCause: `Jo patient baar baar skin allergy se aate hain — unmein zyada tar koi underlying immune imbalance hoti hai jo address nahi hui hoti. Cream lagao — better. Band karo — wapas aati hai. Homeopathy mein sirf allergy band karna goal nahi hota — jo cheez isko baar baar trigger kar rahi hai, us immune response ko regulate karna goal hota hai. Waqt ke saath allergy kam frequent hoti hai aur reaction intensity bhi kam hoti hai. Research is area mein limited hai aur results individual hote hain — lekin chronic allergy patients mein ye approach practically helpful raha hai.`,

  homeopathySafety: `Agar pregnancy mein skin allergy hai, ya bacha chhota hai, ya pehle se kaafi medicines chal rahi hain — homeopathy ek safe complementary option hai. Highly diluted medicines hone ki wajah se side effects practically na ke barabar hain. Severe allergic reaction (anaphylaxis) ya emergency mein conventional emergency treatment pehle. Homeopathy complementary role mein hai — replacement nahi.`,

  isForYouIf: [
    'Aap root cause treat karna chahte hain — sirf allergy ko baar baar suppress nahi karna',
    'Aap long-term, sustainable approach dhundh rahe hain',
    'Aap side-effect free option prefer karte hain — specially agar pregnant hain, bacha hai, ya doosri medicines chal rahi hain',
  ],

  notForYouIf: [
    'Abhi isi waqt severe reaction hai — emergency mein pehle hospital jaayein, homeopathy baad mein saath chala sakte hain',
    'Aapki condition ka surgical solution required hai — surgeon se milne ke baad homeopathy saath shuru kar sakte hain',
  ],

  homeopathyDiseaseLinks: [
    { _key: 'hdl1', diseaseName: 'Urticaria (Pitthi/Chhapaki) ka poora ilaaj',  diseaseSlug: 'urticaria'        },
    { _key: 'hdl2', diseaseName: 'Eczema (Chambal) ka poora ilaaj',             diseaseSlug: 'eczema'           },
    { _key: 'hdl3', diseaseName: 'Allergic Rhinitis ka poora ilaaj',            diseaseSlug: 'allergic-rhinitis' },
  ],

  linkedDiseaseCards: [
    { _key: 'ldc1', title: 'Urticaria',        hindiName: 'Pitthi / Chhapaki / Hives',            slug: 'urticaria',        isAvailable: true  },
    { _key: 'ldc2', title: 'Eczema',            hindiName: 'Chambal / Atopic Dermatitis',          slug: 'eczema',           isAvailable: true  },
    { _key: 'ldc3', title: 'Contact Dermatitis', hindiName: 'Sampark Janya Chamdi Ki Sujan',       slug: '',                 isAvailable: false },
    { _key: 'ldc4', title: 'Allergic Rhinitis', hindiName: 'Naak Ki Allergy',                      slug: 'allergic-rhinitis', isAvailable: true  },
  ],

  faqs: [
    {
      _key: 'faq1',
      faqType: 'common-cause',
      question: 'Skin allergy ka sabse common karan kya hai?',
      answer: `Skin allergy ka sabse common karan hai immune system ka kisi cheez ko "threat" samajh lena — jab wo actually harmful nahi hoti. Is reaction ko hypersensitivity kehte hain. India mein most common triggers hain:\n- Soap, detergent, aur cosmetics mein chemicals\n- Synthetic fabrics (polyester, nylon)\n- Certain foods — seafood, milk, nuts, eggs\n- Pollen, dust mites, pet dander\n- Nickel (jewelry mein), rubber (gloves mein)\nTrigger identify karna treatment ka pehla step hai. Agar trigger clear nahi ho raha to allergy test helpful ho sakta hai.`,
    },
    {
      _key: 'faq2',
      faqType: 'normal-vs-serious',
      question: 'Skin allergy kab normal hai aur kab doctor zaroori hai?',
      answer: `Ek baar ki allergy — kisi naye product ke baad, jo 2-3 din mein trigger hatane se theek ho jaaye — normal hai.\n\nDoctor tab zaroori hai jab:\n- Allergy 1 hafte se zyada se hai\n- Baar baar same jagah ya same situation ke baad aa rahi hai\n- Chehra, aankhein, ya gala involve hain\n- Saans lene mein takleef aaye — ye turant emergency hai\n\nSkin allergy ko "chhotisi baat" samajh ke ignore mat karo agar ye pattern repeat ho raha hai.`,
    },
    {
      _key: 'faq3',
      faqType: 'duration',
      question: 'Skin allergy kitne din tak rehti hai?',
      answer: `Trigger-based acute allergy — jaise naya soap ya khaana — zyada tar 3-7 din mein trigger hatane ke baad theek ho jaati hai. Urticaria (pitthi) ke patches kuch ghante mein aa-ja sakte hain. Contact dermatitis 2-4 hafte tak reh sakti hai.\n\nAgar 2 hafte baad bhi koi improvement nahi hai — doctor se milein. Baar baar aane wali ya chronic skin allergy naturally "dur ho jaayegi" ki umeed mat rakho — is mein treatment zaroori hai.`,
    },
    {
      _key: 'faq4',
      faqType: 'duration',
      question: 'Raat ko skin allergy kyun badhti hai?',
      answer: `Raat ko allergy badhne ke kai kaaran hain.\n\nPehla — raat ko body ka cortisol level (ek natural anti-inflammatory hormone) naturally kam ho jaata hai, isliye inflammation aur khujli ka protective barrier weak padta hai.\n\nDoosra — bistar ka fabric, detergent ya bedsheet material bhi trigger ho sakta hai jo raat bhar skin ke contact mein rehta hai.\n\nTeesra — raat ko kuch karne ko nahi hota to dhyan zyada symptom pe jaata hai.\n\nAgar specifically raat ko zyada hoti hai to apni bedsheet, pillow cover ka fabric aur detergent bhi check karo.`,
    },
    {
      _key: 'faq5',
      faqType: 'bacchon-mein',
      question: 'Bacchon mein skin allergy kyun hoti hai?',
      answer: `Chhote bacchon ka immune system abhi develop ho raha hota hai — isliye ye easily overreact karta hai. Common causes bacchon mein:\n- Food allergies — milk, egg, soya, wheat pehle introduce karte waqt\n- Diaper rash — prolonged moisture se\n- Synthetic baby clothes ya detergent\n- Eczema — jo bacchon mein bahut common hai, specially family history mein ho to\n\nAgar bacha 2 saal se chhota hai aur skin allergy hai to apne aap manage karne ki jagah pediatrician se milna behtar hai — self-diagnosis risky ho sakti hai.`,
    },
    {
      _key: 'faq6',
      faqType: 'pregnancy',
      question: 'Pregnancy mein skin allergy normal hai kya?',
      answer: `Pregnancy mein hormones ke badlav se immune system react kar sakta hai aur skin zyada sensitive ho jaati hai. PUPPP (pruritic urticarial papules and plaques of pregnancy) ek common pregnancy-specific skin condition hai jo teesre trimester mein hoti hai — itchy rashes aate hain. Ye generally baby ke baad theek ho jaati hai.\n\nLekin: Pregnancy mein severe generalized itching — specially haath aur pair ke talne mein — kabhi kabhi liver ki ek serious condition (Intrahepatic Cholestasis of Pregnancy / ICP) ka sign ho sakta hai. Is symptom ko kabhi bhi ignore mat karo pregnancy mein — apne gynecologist ko zaroor batao.\n\nPregnancy mein koi bhi self-medication shuru karne se pehle doctor se consult karna mandatory hai.`,
    },
    {
      _key: 'faq7',
      faqType: 'baar-baar',
      question: 'Skin allergy achanak bina kisi wajah ke kyun ho jaati hai?',
      answer: `"Bina wajah" ki allergy mein wajah hoti zaroor hai — bas identify nahi hui hoti. Kuch common hidden triggers:\n- Paani ki quality mein change (hard water)\n- Naya city ya environment — dust, pollen alag type\n- Stress — cortisol imbalance immune system ko affect karta hai\n- Underlying infection (jaise yeast ya bacterial) jo skin ko sensitize kar raha ho\n- Medication — koi supplement ya medicine jo recently start ki ho\n\nAllergy test (skin prick test ya blood IgE test) se specific trigger identify hone mein help milti hai. Doctor se milein — guess mat karo.`,
    },
    {
      _key: 'faq8',
      faqType: 'homeopathy',
      question: 'Kya homeopathy skin allergy mein kaam karta hai?',
      answer: `Homeopathy skin allergy mein — specially chronic aur baar baar aane wali — ke management mein helpful raha hai. Homeopathy ka approach ye hai ki sirf symptom band nahi karna, balki immune system ki hypersensitivity address karna.\n\nYe approach specially tab faydemand hai jab allopathic treatment se sirf temporary relief milta hai aur allergy wapas aati rehti hai. Research is area mein limited hai aur results individual hote hain. Homeopathy conventional treatment ke saath complementary tarike se bhi use ho sakti hai.\n\nKisi qualified homeopathic doctor se mile — self-medication avoid karo.`,
    },
    {
      _key: 'faq9',
      faqType: 'test-diagnosis',
      question: 'Skin allergy mein kaunsa test karwana chahiye?',
      answer: `Common tests jo doctor suggest karte hain:\n- Skin Prick Test: Skin pe thodi matra mein suspected allergens daale jaate hain — reaction dekha jaata hai. Specific triggers identify karne ke liye best test hai.\n- Patch Test: Contact dermatitis ke liye — 48 hours ke liye allergen skin pe rakha jaata hai.\n- Blood IgE Test (RAST): Blood mein specific IgE antibodies measure kiye jaate hain. Har allergen ke liye sensitivity dikhata hai.\n- CBC (Complete Blood Count): Eosinophil count allergy mein badha hota hai.\n\nKaunsa test karwana chahiye — ye doctor decide karega symptoms ke hisaab se. Apne aap test mat karwao — results interpret karne ke liye doctor zaroori hai.`,
    },
    {
      _key: 'faq10',
      faqType: 'baar-baar',
      question: 'Skin allergy baar baar kyun aati hai?',
      answer: `Baar baar aane wali skin allergy usually teen reasons se hoti hai.\n\nPehla — trigger wahi hai jo remove nahi kiya gaya (jaise ghar mein dust mites ya paaltu janwar ka dander).\n\nDoosra — sirf symptoms treat kiye gaye, root cause nahi — cream lagai, theek hua, band ki, wapas aayi.\n\nTeesra — immune system ki underlying hypersensitivity hai jo properly address nahi hui.\n\nLong-term solution ke liye doctor se ek proper allergy workup karwao — trigger identify karo aur root cause treatment shuru karo.`,
    },
    {
      _key: 'faq11',
      faqType: 'permanent',
      question: 'Skin allergy se hamesha ke liye kaise chutkara milega?',
      answer: `"Hamesha ke liye theek" ka vaada honestly koi bhi system nahi kar sakta — aur koi kare to doubt karo.\n\nJo realistic hai: sahi trigger avoidance aur appropriate treatment se allergy itni kam ho sakti hai ki life practically normal ho jaaye. Kuch allergies — specially food allergies bacchon mein — genuinely improve hoti hain umar ke saath. Kuch chronic allergies — jaise eczema — ko manage kiya jaata hai, completely "cure" concept limited hai.\n\nHomeopathy immune hypersensitivity address karke frequency aur intensity dono reduce karne mein helpful rahi hai — results individual hote hain lekin sustainable improvement possible hai proper treatment se.`,
    },
    {
      _key: 'faq12',
      faqType: 'india-specific',
      question: 'Chamdi ki allergy mein garam paani se nhaana sahi hai kya?',
      answer: `Nahi — garam paani skin allergy mein aur nuksandeh hai.\n\nBahut garam paani skin ke natural oils khatam karta hai jisse skin aur dry aur irritated ho jaati hai. Saath hi garam paani blood vessels dilate karta hai — jo inflammation aur badh jaati hai aur khujli aur zyada feel hoti hai.\n\nHamesha lukewarm (gunguna) paani use karo. Bath ke fauran baad — jab skin thodi si nami mein ho — mild unscented moisturizer lagao. Ye one habit skin allergy management mein bahut help karti hai.`,
    },
  ],

  relatedSymptoms: [
    { _key: 'rs1', name: 'Body Itching',  hindiName: 'Poore Badan Mein Khujli',   slug: 'itching-all-over-body' },
    { _key: 'rs2', name: 'Skin Rash',     hindiName: 'Chamdi Pe Chakte / Daane',  slug: 'skin-rash'             },
    { _key: 'rs3', name: 'Swelling',      hindiName: 'Sujan / Angon Ki Soojhan',  slug: 'swelling'              },
    { _key: 'rs4', name: 'Eye Allergy',   hindiName: 'Aankhon Mein Khujli / Jalan', slug: 'eye-allergy'         },
  ],

  sources: [
    { _key: 's1', name: 'WHO — Global Burden of Allergic Diseases',          year: '2021', url: 'https://www.who.int/news-room/fact-sheets/detail/allergic-rhinitis-and-its-impact-on-asthma' },
    { _key: 's2', name: 'Mayo Clinic — Allergies: Symptoms and Causes',      year: '2024', url: 'https://www.mayoclinic.org/diseases-conditions/allergies/symptoms-causes/syc-20351497' },
    { _key: 's3', name: 'NCBI — Skin Allergy and Immune Hypersensitivity',   year: '2022', url: 'https://www.ncbi.nlm.nih.gov/books/NBK542222/' },
    { _key: 's4', name: 'NHS — Allergies: Diagnosis and Treatment',          year: '2023', url: 'https://www.nhs.uk/conditions/allergies/' },
  ],

  quickFactSymptom: 'Skin allergy mein body ka immune system harmless substance ko "enemy" samajh ke react karta hai — is overreaction ko "hypersensitivity" kehte hain.',
  quickFactIndiaStats: 'WHO ke anusaar allergic conditions duniya bhar mein 20-30% population ko affect karti hain — India mein pollution aur diverse climate ki wajah se ye number significantly high hai.',
  quickFactDoctorWhen: 'Skin allergy ke saath agar saans lene mein takleef ho — turant 108 call karo. Ye medical emergency hai.',
  reviewDate: 'May 2026',

  doctorNote: 'Maine apni practice mein dekha hai ki skin allergy ke patients ka ek common pattern hota hai — wo baar baar cream ya antihistamine se temporarily theek hote hain lekin 2-3 hafte mein wapas aate hain. Aksar yahi hota hai ki actual trigger — chahe wo detergent ho, fabric ho, ya koi food — identify nahi kiya gaya hota. Homeopathy mein jo cheez differently kaam karti hai wo hai detailed case history — patient ka specific pattern kya hai, kab badhta hai, kya se better hota hai — ye sab milake constitutional treatment decide hota hai. Chronic skin allergy mein ye approach sustainable improvement deta hai.',
}

async function seed() {
  console.log('🌱 Seeding Skin Allergy symptom page...')
  await client.createOrReplace(doc)
  console.log('✅ Symptom seeded — homeopedia.in/symptoms/skin-allergy')
}

seed().catch(console.error)
