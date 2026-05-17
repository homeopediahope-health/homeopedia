import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'symptom-dry-skin',
  _type: 'symptom',

  name: 'Dry Skin',
  hindiName: 'Rookhi / Sukhi Twacha',
  hinglishName: 'rukhi twacha, skin dry rehti hai',
  slug: { _type: 'slug', current: 'dry-skin' },
  bodySystem: 'Skin',

  metaTitle: 'Dry Skin (Rookhi Twacha) — Karan, Ilaaj aur Homeopathy | HomeoPedia',
  metaDescription: 'Dry skin (rookhi twacha) ke causes, kab doctor zaroori hai, aur ghar pe safe steps — Hinglish mein. Eczema, thyroid link bhi samjhein. Dr. Shadab reviewed.',
  publishedAt: new Date('2026-05-17').toISOString(),

  whatIsThis: `Skin tight lagti hai — chehra kheencha kheencha sa, haath rough, pair ki ediyan phat rahi hain. Kabhi kabhi itni dry hoti hai ki choti choti lines pad jaati hain. Scratch karo to safed powder sa uthta hai. Ye dry skin hai — aur ye sirf cosmetic problem nahi hai.

Skin ka kaam ek barrier ki tarah kaam karna hai — bahar ke germs, pollution aur temperature se protect karna. Jab skin dry hoti hai — ye barrier weak hoti hai. Matlab skin zyada vulnerable hoti hai — infection, allergy, aur inflammation ka risk badhta hai.

Dry skin India mein har umar mein milti hai — bacchon se lekar budhon tak. Sardi mein zyada, lekin bahut logon ko saal bhar rehti hai. Ye page batayega: aapki dry skin sirf pani ki kami hai ya kuch aur bhi ho sakta hai.`,

  indiaContext: 'India mein estimated 20-25% logon ko kisi na kisi form ki chronic dry skin hoti hai — sardi mein ye proportion aur badhta hai. Himalayan states aur desert regions mein prevalence sabse zyada hai.',
  indiaContextSource: 'Indian Journal of Dermatology — Xerosis Prevalence Study 2022',

  severityLevel1: [
    'Skin thodi tight ya khurdaree lagti hai — especially sardi mein ya nhaane ke baad',
    'Haath, pair ya kohnon pe sirf dryness hai — koi rash, koi khujli nahi',
    'Moisturizer lagane pe 30-40 minute mein better lagta hai',
    'Koi aur symptoms nahi — neend theek, bhook theek',
    'Ghar ki humidity kam hai ya AC mein zyada time bitaate hain — clear wajah dikh rahi hai',
  ],
  severityLevel2: [
    'Dry skin ke saath khujli bhi hai — aur khujlane pe aur badhti hai',
    'Skin pe choti choti daraarein aa gayi hain — kuch jagah se halka khoon bhi nikal raha hai',
    'Moisturizer lagane ke baad bhi relief nahi hoti',
    'Poore sharir ki skin dry hai — sirf ek hissa nahi',
    'Raat ko itching ki wajah se neend uchad rahi hai',
    'Chehra ya ankhen bhi dry aur irritated hain',
    'Skin thickened ya leathery lagne lagi hai',
  ],
  severityLevel3: [
    'Dry skin ke saath gahri daraarein hain jo bahut dard karti hain — especially haath ya paon pe',
    'Skin mein infection ke signs — laalii, garmahat, pus ya swelling',
    'Dry skin ke saath achanak weight gain/loss, bahut thakaan, ya bal girne lage hain — thyroid check karna zaroori',
    'Poori skin bahut tezi se peeling ho rahi hai ya layer by layer uthh rahi hai',
    'Dry skin ke saath aankhein bahut dry hain, munh sukha rehta hai — ye Sjogren\'s syndrome ho sakta hai',
  ],

  timeline3Days: 'Agar dry skin nayi hai — pichle 2-3 din se — to wajah usually clear hoti hai. Naya soap, weather change, AC ya heater ka zyada use, ya bahut hot pani se nhaana. Trigger hatao, moisturizer lagao, paani zyada piyo — 2-3 din mein better hona chahiye. Agar nahi hua, aage dekhein.',
  timeline4Weeks: 'Ek hafte se zyada ki dry skin sirf environment nahi hai — ab koi underlying condition ho sakti hai. Eczema, Psoriasis, ya thyroid issues is waqt consider kiye jaate hain. Is hafte ek doctor ko dikhao — simple blood test se bahut cheezein clear ho sakti hain. Sirf moisturizer par depend mat raho.',
  timelineMonthPlus: 'Chronic dry skin — jo mahino se hai, aati jaati rehti hai, ya saal bhar rehti hai — ek constitutional problem hai. Skin ka barrier permanently weak hua hai ya koi internal cause hai jo treat nahi hua. Homeopathy is stage pe ek reasonable approach hai — skin ki tendency ko address karna, sirf surface treat karna nahi. Doctor se proper evaluation zaroor karwao.',

  lifestyleCauses: [
    {
      _key: 'lc1',
      causeName: 'Bahut Garam Paani Se Nhaana',
      mechanism: 'Skin ki surface pe natural oils hote hain — Sebum — jo skin ko moisturized rakhte hain. Garam paani ye oils strip kar deta hai. Isse skin ki protective barrier toot jaati hai aur TEWL (Trans-Epidermal Water Loss) badh jaata hai — matlab skin andar se bhi paani kho deti hai. Nhaane ke baad jo tight, kheechi hui feeling hoti hai — ye wahi barrier damage hai.',
      howToIdentify: 'Nhaane ke turant baad skin bahut tight aur dry lagti hai. Garm paani mein zyada time bitaate hain. Sardi mein problem zyada hoti hai kyunki tab aur garam paani use hota hai.',
    },
    {
      _key: 'lc2',
      causeName: 'Harsh Soap Ya Chemical-Heavy Products',
      mechanism: 'Bahut se soaps aur face washes mein Sodium Lauryl Sulfate (SLS) hota hai — ye ek strong detergent hai jo skin ki natural oily layer ko completely remove kar deta hai. Isse skin ka pH balance bigadta hai aur natural microbiome disturb hota hai. Alcohol-based sanitizers aur astringents bhi yehi karte hain — isliye corona ke baad se bahut logon ki hand dryness badhi hai.',
      howToIdentify: 'Soap use karne ke baad dryness badh jaati hai. Moisturizer lagao — thodi der ke liye better hota hai, phir phir dry. Product change karo — improved feel hoti hai.',
    },
    {
      _key: 'lc3',
      causeName: 'Dehydration — Paani Kam Peena',
      mechanism: 'Skin ke cells ko hydrated rehne ke liye adequate water intake zaroori hai. Jab body dehydrated hoti hai, pehle vital organs ko priority milti hai — skin last mein aati hai. Skin cells apna turgidity (fullness) kho dete hain — skin dull, dry aur tight lagne lagti hai. Ye effect direct aur fast hota hai.',
      howToIdentify: 'Mouth bhi dry lagta hai, urine dark yellow hai, thakaan bhi hai — ye systemic dehydration signs hain. Sirf skin nahi — overall body signals de rahi hai.',
    },
    {
      _key: 'lc4',
      causeName: 'Low Humidity — AC, Heater Ya Dry Weather',
      mechanism: 'Jab aas paas ki hawa mein moisture kam hoti hai, skin se paani evaporate hona tez ho jaata hai — TEWL badh jaati hai. AC aur central heating dono hi hawa ko bahut dry kar dete hain. India ke desert areas (Rajasthan), high altitude regions, aur sardi mein ye effect zyada hota hai.',
      howToIdentify: 'Office ya ghar mein AC ya heater 6+ ghante chalti hai. Room humidity check karo — 30% se kam ho to problem hai. Bahar niklo to better lagta hai — ghar ya office mein aao to dry feel hoti hai.',
    },
  ],

  medicalCauses: [
    {
      _key: 'mc1',
      diseaseName: 'Eczema (Atopic Dermatitis)',
      diseaseHindiName: 'Atopic Dermatitis / Khujli Ki Bimari',
      howSymptomPresents: 'Eczema mein skin ka natural moisture barrier genetically weak hota hai — Filaggrin protein ki kami hoti hai. Skin paani retain nahi kar paati. Ye sirf dry skin nahi — intense itching ke saath aati hai, scratch karne pe aur badhti hai, aur flare-ups aate hain. Kohnon ki crease, ghunton ki crease, aur cheeks pe zyada hoti hai — specially bacchon mein.',
      howToIdentify: 'Sirf dry nahi — itchy bhi hai. Family mein asthma ya hay fever ki history hai. Raat ko itching badhti hai. Skin mein thick, leathery patches bante hain purani jagahon pe.',
      homeopediaSlug: 'eczema',
      isAvailable: true,
    },
    {
      _key: 'mc2',
      diseaseName: 'Hypothyroidism',
      diseaseHindiName: 'Thyroid Ki Kami / Underactive Thyroid',
      howSymptomPresents: 'Thyroid hormone skin cells ke normal renewal aur oil production ke liye zaroori hai. Jab thyroid hormone kam hota hai, skin cell turnover slow ho jaati hai — cells zyada time tak surface pe rehte hain, dry aur rough ho jaate hain. Ye dryness moisturizer se better nahi hoti — kyunki wajah andar hai, bahar nahi.',
      howToIdentify: 'Dry skin ke saath saath: thakaan, weight gain bina khaaye zyada, bal girna, sardi zyada lagna, constipation, ya chehre pe sujan (especially aankhon ke aas paas). Agar 2-3 symptoms match karein — thyroid test zaroor karwao.',
      homeopediaSlug: 'thyroid',
      isAvailable: true,
    },
    {
      _key: 'mc3',
      diseaseName: 'Psoriasis',
      diseaseHindiName: 'Chambal',
      howSymptomPresents: 'Psoriasis mein skin cells bahut tezi se banti hain — normal se 10x speed. Dead cells hat nahi paate — thick, scaly patches bante hain. Ye patches dry aur rough hote hain — lekin sirf dryness nahi, upar silver-white coating hoti hai. Kohnon, ghunton, aur sir ki khaal pe zyada.',
      howToIdentify: 'Dry rough patches ke upar silvery-white scales hain. Scratch karne pe "candle wax" jaisi cheez nikti hai. Skin sirf dry nahi — clearly thick plaques dikh rahe hain. Chronic hai — baar baar aata hai.',
      homeopediaSlug: 'psoriasis',
      isAvailable: true,
    },
    {
      _key: 'mc4',
      diseaseName: 'Contact Dermatitis',
      diseaseHindiName: 'Twacha Ki Sujan (Cheez Ko Chhune Se)',
      howSymptomPresents: 'Kisi chemical, metal, ya substance se contact hone pe skin inflamed aur dry ho jaati hai. Kuch cases mein sirf dry aur rough hoti hai — bina rash ke bhi. Haathon ki dry skin mein ye bahut common cause hai — dishwashing liquid, sanitizer, cement workers mein.',
      howToIdentify: 'Exactly wahan dryness hai jahan wo substance touch karta hai — haath ke peeth pe, kaalaai ke paas, ya belt buckle ke neeche. Koi cheez avoid karo — better hota hai. Use karo — wapas aata hai.',
      homeopediaSlug: '',
      isAvailable: false,
    },
  ],

  redFlags: [
    'Dry skin ke saath unexplained weight gain, bahut thakaan, aur bal girna — Thyroid test turant karwao, delay mat karo',
    'Skin ki deep cracks (fissures) se khoon aa raha hai aur infection ke signs hain — laalii, garmahat, pus — doctor same day',
    'Dry skin ke saath munh aur aankhein bhi bahut dry hain, aur nighalne mein takleef — Sjogren\'s Syndrome rule out karo',
    'Bhi darjee ki skin peeling ho rahi hai — layers uth rahi hain, nahi sirf flaking — ye Ichthyosis ya koi serious condition ho sakti hai',
    'Naye naye medications start ki hain aur skin aur bhi dry ho gayi hai — doctor ko batao, medicine change ho sakti hai',
  ],

  homeSteps: [
    {
      _key: 'hs1',
      action: 'Nhaane Ka Tarika Badlo — Paani Gunguna, Waqt Kam',
      whyItWorks: 'Pani ka temperature lukewarm rakhein — garam nahi. Nhaane ka time 5-10 minute tak seemit karein. Zyada garam ya lamba shower skin ke natural oils completely strip kar deta hai. Nhaane ke baad towel se zyada ragdo mat — gently pat dry karo. Thodi si nami skin pe rehne do — phir turant moisturizer lagao.',
    },
    {
      _key: 'hs2',
      action: 'Nhaane Ke 3 Minute Andar Moisturizer Lagao',
      whyItWorks: '"3 minute rule" dermatology mein well-established hai. Nhaane ke baad skin mein jo thodi nami bachi hoti hai — usse lock karna hota hai. 3 minute ke andar thick moisturizer (cream ya ointment, lotion nahi) lagane se ye nami trap ho jaati hai. Baad mein lagaoge to fayda kam hoga — skin already dry ho chuki hogi.',
    },
    {
      _key: 'hs3',
      action: 'Paani Zyada Piyo — Andar Se Hydrate Karo',
      whyItWorks: 'Skin cells ko hydrated rehne ke liye adequate water intake zaroori hai. Din mein 8-10 glass (2-2.5 liter) paani target rakho. Chai, coffee zyada mat piyo — ye diuretic hain, matlab body se paani nikaalte hain. Coconut water ya nimbu paani bhi helpful hain.',
    },
    {
      _key: 'hs4',
      action: 'Mild, Soap-Free Cleanser Use Karo',
      whyItWorks: 'Regular soap ka pH 9-10 hota hai — skin ka natural pH 4.5-5.5 hai. Ye mismatch skin barrier damage karta hai. Soap-free, pH-balanced cleanser ya Syndet bar use karo. Ingredients dekho: Sodium Lauryl Sulfate (SLS) ho to avoid karo — ye bahut harsh hota hai.',
    },
    {
      _key: 'hs5',
      action: 'Ghar Ki Humidity Maintain Karo',
      whyItWorks: 'Agar ghar mein AC ya heater hamesha chalta hai, ek humidifier le aao — ya ek bade bartan mein paani rakh do kamre mein. Ideal indoor humidity 40-60% hai. Thoda asar padega lekin skin ko bahar ki hawa se continuously paani kho jane se bachayega.',
    },
  ],

  homeopathyIndividualization: `Dry skin ka naam ek hai — lekin har insaan ki dry skin alag hoti hai. Kisi ki skin sirf sardi mein dry hoti hai — garam mausam mein normal. Kisi ko poore saal rahti hai. Kisi ke haath zyada dry hain — kisi ke pair ki ediyan phati hain. Kisi ko khujli bhi hai, kisi ko sirf roughness. Kisi ki skin garm jagah pe better hoti hai — kisi ki aur buri. Homeopathy mein ye sab details matter karti hain — isliye ek hi "dry skin" ke liye alag alag patients ko alag medicine milti hai. Aapki skin ki story aapka treatment decide karti hai.`,

  homeopathyRootCause: `Cream aur moisturizer lagana zaroori hai — lekin ye sirf surface fix hai. Jab skin ki dryness baar baar aati hai ya chronic hai, to ek deeper tendency hai jo skin ko ye signal de rahi hai. Homeopathy mein chronic dry skin ke cases mein constitutional approach kaam karta hai — skin ki barrier strength, body ka overall moisture regulation, aur koi bhi underlying trigger (like thyroid ya gut issues) sab milake consider kiye jaate hain. Ye slow process hai — months lagti hai — lekin results zyada durable hote hain sirf surface treatment se.`,

  homeopathySafety: `Dry skin ek esa condition hai jisme long-term steroid creams ka overuse ek real concern hai — skin thinning, stretch marks, aur steroid dependency ho sakti hai. Homeopathy mein highly diluted medicines use hoti hain — koi topical steroid nahi, koi side effect nahi. Bacchon aur pregnant women ke liye bhi safe option hai. Zaroori caveat: agar dry skin ke peeche Hypothyroidism ya koi aur medical condition hai, uska proper medical treatment bhi zaroori hai — homeopathy complementary role mein kaam karegi.`,

  isForYouIf: [
    'Aapki dry skin chronic hai — saalon se hai, moisturizer se temporarily better hota hai, phir wapas aati hai',
    'Sirf surface treatment se thak gaye hain — root cause samajhna aur address karna chahte hain',
    'Aap pregnant hain, baccha chhota hai, ya long-term steroid cream se bachna chahte hain',
  ],
  notForYouIf: [
    'Dry skin ke peeche thyroid ya koi aur medical condition hai aur uska treatment still pending hai — pehle woh karwao',
    'Skin mein infection ho gayi hai (laalii, pus, dard) — pehle conventional antibiotic treatment, phir constitutional approach',
  ],

  homeopathyDiseaseLinks: [
    { _key: 'hdl1', diseaseName: 'Eczema ka poora Homeopathic guide',      diseaseSlug: 'eczema'    },
    { _key: 'hdl2', diseaseName: 'Psoriasis ka poora Homeopathic guide',   diseaseSlug: 'psoriasis' },
    { _key: 'hdl3', diseaseName: 'Hypothyroidism ka poora ilaaj',          diseaseSlug: 'thyroid'   },
  ],

  linkedDiseaseCards: [
    { _key: 'ldc1', title: 'Eczema',          hindiName: 'Atopic Dermatitis',     slug: 'eczema'    },
    { _key: 'ldc2', title: 'Psoriasis',        hindiName: 'Chambal',               slug: 'psoriasis' },
    { _key: 'ldc3', title: 'Hypothyroidism',   hindiName: 'Thyroid Ki Kami',       slug: 'thyroid'   },
  ],

  faqs: [
    {
      _key: 'faq1', faqType: 'common-cause',
      question: 'Dry skin ka sabse common karan kya hai?',
      answer: `Dry skin ke causes mein sabse upar hain:\n\n1. Garam paani se lamba nhaana — natural oils strip ho jaate hain\n2. Harsh soap (SLS wali) — skin ka barrier damage hoti hai\n3. Low humidity — AC, heater, ya dry weather\n4. Paani kam peena — andar se dehydration\n5. Umar ke saath — 40+ ke baad skin ki oil production naturally kam hoti hai\n\nIn sab mein koi medical cause nahi — sirf habit change se improvement hoti hai. Lekin agar ye sab theek hain aur phir bhi dry skin hai — tab thyroid ya eczema jaisi condition consider karni chahiye.`,
    },
    {
      _key: 'faq2', faqType: 'normal-vs-serious',
      question: 'Dry skin normal hai ya serious — kab doctor zaruri hai?',
      answer: `Dry skin mostly harmless hai — lekin kuch signs serious bimari ki taraf point karte hain:\n\nNormal (ghar pe manage):\n- Sirf sardi mein ya specific karan se hoti hai\n- Moisturizer se better hoti hai\n- Koi aur symptoms nahi\n\nDoctor zaruri:\n- Moisturizer se bilkul better nahi ho rahi\n- Saath mein thakaan, weight gain, bal girna — thyroid check karo\n- Skin mein cracks se khoon nikal raha hai ya infection ke signs hain\n- Ankhen aur munh bhi bahut dry hain\n- Khujli itni hai ki raat ko neend uchad rahi hai`,
    },
    {
      _key: 'faq3', faqType: 'common-cause',
      question: 'Chehra, haath, pair, ya poore badan ki dry skin ka karan alag hota hai kya?',
      answer: `Haan — jagah se cause ka andaza lagta hai:\n\n- Chehra: Harsh face wash, over-cleansing, ya Seborrheic Dermatitis\n- Haath: Contact dermatitis (dishwashing, sanitizer), ya occupational exposure\n- Pair ki ediyan: Yahan oil glands bahut kam hoti hain — pressure + friction se dry aur phati ediyan banti hain. Thyroid bhi ek cause hai\n- Poore badan: Eczema, Hypothyroidism, Psoriasis, ya bahut harsh soap + garam paani\n- Sirf tange (lower legs): Ye bahut common hai bujurgon mein — "Asteatotic Eczema" — aging se skin ki oil production bahut kam ho jaati hai`,
    },
    {
      _key: 'faq4', faqType: 'common-cause',
      question: 'Garmi mein bhi dry skin kyun hoti hai?',
      answer: `Ye samajhna zaroori hai — dry skin sirf sardi ki problem nahi hai.\n\nGarmi mein dry skin ke reasons:\n- AC — indoor humidity bahut kam kar deta hai. 8 ghante AC mein baith ke skin ko dehydrate ho jaata hai\n- Zyada pasina — pasina evaporate hote waqt skin se nami bhi le jaata hai\n- Swimming pool — chlorine bahut harsh hoti hai skin ke liye\n- Zyada sun exposure — UV rays skin ko damage karti hain\n- Paani peena bhool jaana — garmi mein sweat zyada, intake kam\n\nSolution: Indoor humidity dekhein, SPF lagao, nhaane ke baad moisturizer routine mat chodein.`,
    },
    {
      _key: 'faq5', faqType: 'test-diagnosis',
      question: 'Dry skin mein kaunsa test karwana chahiye?',
      answer: `Agar dry skin sirf lifestyle se hai — koi test nahi chahiye.\n\nLekin agar dryness stubborn hai ya aur symptoms hain:\n\n- Thyroid Function Test (TSH, T3, T4) — dry skin ka ek major hidden cause hypothyroidism hai\n- CBC — anemia bhi skin dryness contribute kar sakta hai\n- Blood Sugar (Fasting + PP) — diabetes mein dry skin common hai\n- Vitamin D + Vitamin E levels — deficiency se skin dry hoti hai\n- Patch Test — agar contact allergy suspect ho\n\nKhud se test mat karwao — doctor ko symptoms batao, woh decide karenge kaunsa relevant hai.`,
    },
    {
      _key: 'faq6', faqType: 'common-cause',
      question: 'Kya thyroid se dry skin hoti hai?',
      answer: `Haan — aur ye ek bahut commonly missed connection hai.\n\nHypothyroidism (thyroid hormone ki kami) mein:\n- Skin cell turnover slow ho jaata hai\n- Sweat aur oil glands ka kaam kam ho jaata hai\n- Result: poori body ki skin dry, rough aur dull ho jaati hai — specially haath, paon aur chehra\n\nPehchaan kaise karein: Dry skin ke saath saath thakaan, weight gain bina reason ke, bal girna, constipation, ya sardi bahut zyada lagna — in mein se 2-3 hain to thyroid test zaroor karwao.\n\nImportant: Thyroid se aane wali dry skin sirf moisturizer se better nahi hogi. Thyroid treat karo — skin automatically better hogi.`,
    },
    {
      _key: 'faq7', faqType: 'ghar-wait',
      question: 'Dry skin mein ghar pe kya karte rehein — kab doctor ke paas jaayein?',
      answer: `Ghar pe khud manage karo agar:\n- Clear cause pata hai (AC, garam paani, soap)\n- Lifestyle change karne pe 2-4 hafte mein better hoti hai\n- Koi dard nahi, koi infection nahi, koi aur symptoms nahi\n\nDoctor ke paas jaao agar:\n- 4 hafte baad bhi improvement nahi — lifestyle change ke baad bhi\n- Khujli itni hai ki raat ko neend uchad rahi hai\n- Skin crack ho gayi hai ya infection ka andasha hai\n- Saath mein koi aur symptoms hain — fatigue, weight change, bal girna`,
    },
    {
      _key: 'faq8', faqType: 'bacchon-mein',
      question: 'Bacchon mein dry skin — kab normal hai, kab concern?',
      answer: `Newborn babies mein pehle kuch hafte dry, flaky skin hona normal hai — skin adjust ho rahi hai bahar ki duniya se.\n\nToddlers aur bade bacchon mein dry skin ka sabse common cause hai Eczema — ye genetic hota hai, asthma ya allergy ki family history ke saath aata hai.\n\nNormal manage karein: Mild baby soap, lukewarm paani, fragrance-free moisturizer nhaane ke baad.\n\nDoctor dikhao agar:\n- Khujli bahut hai — baccha raat ko uthh ke khujlaata hai\n- Skin mein redness ya rash bhi hai\n- Moisturizer se 1-2 hafte mein better nahi hua\n- Aankhon ke aas paas ya chehre pe bahut dry patches hain`,
    },
    {
      _key: 'faq9', faqType: 'india-specific',
      question: 'Sardi mein dry skin itni kyun badhti hai — India mein kya karna chahiye?',
      answer: `Sardi mein teen cheezein milke skin ko attack karti hain:\n\n1. Low humidity — winter air mein moisture kam hoti hai\n2. Garam paani ka zyada use — cold weather mein hum aur garam nhaate hain\n3. Woolen kapde — skin ko directly touch karte hain, irritate karte hain\n\nIndia-specific tips:\n- Sarson ka tel ya naariyal tel — ye traditional moisturizers hain, effective aur affordable\n- Gunguna paani rakho — garam nahi\n- Raat ko haath pair pe tel lagao aur soo jaao\n- Room mein paani ka bartan rakh do — natural humidifier\n- Chai-coffee thodi kam karo — dono diuretic hain`,
    },
    {
      _key: 'faq10', faqType: 'lifestyle',
      question: 'Dry skin ke liye khaane mein kya khayein?',
      answer: `Skin ki health andar se bhi aati hai — ye sach hai.\n\nKhao zyada:\n- Omega-3 fatty acids — fish, akhrot, alsi ke beej — skin ka moisture barrier strong banate hain\n- Vitamin E — badam, sunflower seeds — skin cell protection\n- Vitamin A — gajar, shakarkandi — skin cell renewal\n- Zinc — pumpkin seeds, chane — skin repair\n- Paani — 8-10 glass daily — andar se hydration\n\nKam khao:\n- Alcohol — skin dehydrate karta hai\n- Bahut zyada namak — water retention disturb karta hai\n- Processed food — inflammatory hai, skin pe effect padta hai\n\nEk practical tip: Subah ek glass gunguna paani peeo aur ek muthi bhigi badam khao — simple aur effective.`,
    },
    {
      _key: 'faq11', faqType: 'homeopathy',
      question: 'Kya homeopathy dry skin mein kaam karta hai?',
      answer: `Dry skin mein homeopathy ka role depend karta hai cause pe:\n\nLifestyle-based dry skin: Moisturizer aur habit change zyada practical hai. Homeopathy supporting role mein kaam kar sakti hai.\n\nChronic dry skin (Eczema, Psoriasis mein): Yahan homeopathy ka real value hai. Constitutional treatment — jo aapke overall health, tendency, stress, aur individual symptoms dekhke ho — flare-ups ki frequency aur intensity dono kam kar sakta hai. Research limited hai, lekin clinical experience mein chronic cases mein promising results hain.\n\nThyroid-linked dry skin: Thyroid ka proper treatment pehle — homeopathy supporting role mein.\n\nResults individual hote hain — patience zaroori hai.`,
    },
    {
      _key: 'faq12', faqType: 'baar-baar',
      question: 'Dry skin baar baar kyun aati hai — permanent solution kya hai?',
      answer: `Baar baar aane wali dry skin ka matlab hai:\n- Ya to trigger baar baar expose ho raha hai (soap, AC, garam paani)\n- Ya koi underlying condition hai jo address nahi hui (Eczema, Thyroid)\n\nPermanent solution ki direction:\n1. Trigger identify karo — lifestyle changes consistent rakho\n2. Agar koi condition hai — properly treat karo (sirf cream nahi)\n3. Moisturizing routine lifelong maintain karo — ye ek lifestyle hai, ek time ki cheez nahi\n4. Constitution-based homeopathic treatment chronic tendency ke liye\n\n"Permanent cure" ka vaada koi bhi honest doctor nahi karta chronic skin conditions mein. Jo realistic hai: sahi management se skin ka baar baar kharaab hona drastically kam ho sakta hai — life practically normal feel ho sakti hai.`,
    },
  ],

  relatedSymptoms: [
    { _key: 'rs1', name: 'Skin Rash',             hindiName: 'Twacha Pe Daane / Laal Dhabbe', slug: 'skin-rash'             },
    { _key: 'rs2', name: 'Itching All Over Body',  hindiName: 'Poore Sharir Mein Khujli',      slug: 'itching-all-over-body' },
    { _key: 'rs3', name: 'Hives / Urticaria',      hindiName: 'Pitthi / Chhapaki',             slug: 'hives-urticaria'       },
    { _key: 'rs4', name: 'Skin Swelling',          hindiName: 'Twacha Pe Sujan',               slug: 'skin-swelling'         },
  ],

  sources: [
    { _key: 's1', name: 'Mayo Clinic — Dry Skin: Symptoms & Causes',                year: '2024', url: 'https://www.mayoclinic.org/diseases-conditions/dry-skin/symptoms-causes/syc-20353885' },
    { _key: 's2', name: 'American Academy of Dermatology — Dry Skin Tips',          year: '2023', url: 'https://www.aad.org/public/everyday-care/skin-care-basics/dry/dry-skin-tips'          },
    { _key: 's3', name: 'NCBI — Xerosis Cutis: Pathophysiology and Treatment',      year: '2022', url: 'https://pubmed.ncbi.nlm.nih.gov/'                                                     },
    { _key: 's4', name: 'Indian Journal of Dermatology — Xerosis in Indian Patients', year: '2022', url: 'https://www.e-ijd.org/'                                                              },
  ],

  quickFactSymptom:    'Dry skin sirf cosmetic problem nahi — skin ka barrier weak hota hai, infection aur allergy ka risk badhta hai.',
  quickFactIndiaStats: 'India mein sardi ke mahino mein dermatology OPD visits 30-40% tak badh jaate hain — dry skin top reason',
  quickFactDoctorWhen: 'Agar dry skin ke saath thakaan + weight gain + bal girna — Thyroid test pehle karo',
  reviewDate: 'May 2026',

  doctorNote: 'Maine apni practice mein ek cheez baar baar dekhi hai — dry skin ke 30-40% patients jab detailed history lete hain, unka TSH badhaa hua nikalta hai. Yani thyroid ki kami thi jo sirf skin dryness ki wajah se discover hui. Ye isliye important hai kyunki sirf cream lagate rehte toh kabhi diagnose nahi hota. Dusra common pattern: patients jo bahut garam paani se nahate hain — sardi mein bhi, garmi mein bhi — unki skin chronically dry rehti hai. Ek simple change — gunguna paani, nhaane ke 3 minute andar moisturizer — aur 3-4 hafte mein dramatic improvement. Har case mein cause dhundna zaroori hai — sirf symptom treat karna kafi nahi.',
}

async function seed() {
  console.log('🌱 Seeding Dry Skin symptom page...')
  await client.createOrReplace(doc)
  console.log('✅ Symptom seeded — homeopedia.in/symptoms/dry-skin')
}

seed().catch(console.error)
