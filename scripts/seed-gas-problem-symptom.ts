import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'symptom-gas-problem',
  _type: 'symptom',

  name: 'Gas Problem',
  hindiName: 'Pet Mein Gas',
  hinglishName: 'Gas Problem / Gastric Problem',
  slug: { _type: 'slug', current: 'gas-problem' },
  bodySystem: 'Digestive',

  metaTitle: 'Gas Problem in Hindi — Karan, Ilaaj aur Homeopathy | Homeopedia',
  metaDescription: 'Pet mein gas ki problem (gastric problem) ke karan, severity aur ghar pe safe steps. Verified Hinglish guide, Dr. Shadab reviewed.',
  publishedAt: new Date('2026-05-18').toISOString(),

  whatIsThis: `Kabhi kabhi khana khaane ke baad — ya kabhi toh bina wajah bhi — pet mein ek bhaari pan, pressure, ya phoolapan aata hai. Saath mein baar baar gas pass karna, dakaar aana, ya ek ajeeb si gurgling ki awaaz. Ye gas ki problem hai — aur India mein yeh bahut common complaint hai.

Body mein gas tab banti hai jab digestive system khana todta hai aur bacteria fermentation karta hai. Yeh process normal hai — lekin jab gas zyada bane ya bahar na nikle, tab takleef shuru hoti hai.

Ghabrao mat — aap akele nahi hain. Ye page aapko 2 minute mein batayega: aapka case serious hai kya, ghar pe kya karein, aur kab doctor ke paas jaana zaroori hai.`,

  indiaContext: 'WHO aur ICMR ke data ke mutabiq India mein gastrointestinal complaints — jinmein gas aur bloating sabse aage hain — 20-30% adult population ko regularly affect karti hain. Yeh South Asia mein sabse common digestive complaints mein se ek hai.',
  indiaContextSource: 'WHO Digestive Health 2023; ICMR Burden of Gastrointestinal Diseases 2021',

  severityLevel1: [
    'Gas pass karne ke baad relief milti hai',
    'Khane ke baad bloating — kuch ghante mein theek ho jaati hai',
    'Halki dakaar — koi dard nahi',
    'Koi naya khana khaaya tha — reaction lagta hai',
  ],
  severityLevel2: [
    'Gas ke saath pet mein regular dard — jo khud nahi jaata',
    '3-4 din se lagatar bloating — kuch khao na khao',
    'Stool mein badlaav — zyada loose ya zyada tight — 1 hafte se zyada',
    'Khane ke baad baar baar ulti jaisi feeling',
  ],
  severityLevel3: [
    'Pet mein achanak bahut tez dard — uthne ya hilne se bhi takleef — turant hospital',
    'Chest mein dard ya pressure — gas ke saath — turant hospital',
    'Kaale ya laal rang ka stool — turant hospital',
    'Gas ke saath bukhaar — 101°F se zyada — turant hospital',
    'Bhojan aur paani bilkul andar nahi ja raha — 24 ghante se zyada — turant hospital',
  ],

  timeline3Days: 'Zyada tar cases mein ye kisi ek meal, naye khane, ya stress ki wajah se hoti hai. Body khud adjust kar leti hai. Ghar pe halkha khana, paani, aur rest karo. Agar teen din mein better nahi hua to Level 2 ki taraf badho.',
  timeline4Weeks: 'Yeh signal hai ki koi aadat ya underlying condition involved hai — sirf ek meal ki baat nahi. Apni diet aur lifestyle pe dhyan do. Is hafte doctor se milna theek rahega — specially agar saath mein koi aur symptom bhi ho.',
  timelineMonthPlus: 'Chronic gas ki problem aksar ek underlying digestive imbalance ka hissa hoti hai — IBS, gastritis, ya indigestion. Ghar pe manage karna possible hai, lekin doctor se milna aur root cause samajhna zaroori hai. Homeopathy is stage mein effectively kaam aati hai.',

  lifestyleCauses: [
    {
      _key: 'lc1',
      causeName: 'Jaldi Jaldi Khana (Fast Eating)',
      mechanism: 'Jab hum jaldi khaate hain, saath mein bahut saari hawa bhi andar jaati hai — ise aerophagia kehte hain. Yeh hawa digestive tract mein phans jaati hai. Saath mein jaldi khaane se khana theek se nahi toot paata — incomplete digestion se bacteria zyada fermentation karte hain aur gas zyada banti hai.',
      howToIdentify: 'Khane ke fauran baad bloating aati hai. Zyada tar office mein ya busy time mein hota hai.',
    },
    {
      _key: 'lc2',
      causeName: 'Gas-Producing Foods Zyada Khaana',
      mechanism: 'Kuch foods — jaise rajma, chhole, gobhi, broccoli, onion, aur carbonated drinks — mein complex carbohydrates hote hain jo small intestine theek se digest nahi kar paata. Jab yeh large intestine mein pahunchtein hain, wahan bacteria unhe ferment karte hain — aur gas banti hai. Yeh process har insaan mein hoti hai, lekin kuch logon mein zyada sensitive hota hai.',
      howToIdentify: 'Gas zyada tab hoti hai jab specific foods khaaye hon. Pattern trace karo — 2-3 ghante baad hoti hai.',
    },
    {
      _key: 'lc3',
      causeName: 'Irregular Meal Timing',
      mechanism: 'Digestive system ek rhythm mein kaam karta hai. Jab meals ka timing unpredictable hota hai — kabhi 8 baje, kabhi dopahar ko — to acid secretion aur gut motility affected hoti hai. Khali pet mein bhi gas aur acidity feel hoti hai. Long gaps ke baad bade meal se bhi yahi hota hai.',
      howToIdentify: 'Morning mein ya khane se pehle gas ya acidity feel hoti hai. Office going log aur students mein common.',
    },
    {
      _key: 'lc4',
      causeName: 'Stress Aur Anxiety',
      mechanism: 'Gut aur brain directly connected hain — ise gut-brain axis kehte hain. Stress hone pe body "fight or flight" mode mein jaati hai — aur digestion slow ho jaata hai. Saath mein gut mein spasms ho sakti hain jisse gas properly move nahi karti. Isi liye exam time ya presentation ke din pet mein gas ya gurgling zyada hoti hai.',
      howToIdentify: 'Gas tension ya anxiety ke saath aati hai. Weekends ya chutti pe automatically better hoti hai.',
    },
  ],

  medicalCauses: [
    {
      _key: 'mc1',
      diseaseName: 'IBS — Irritable Bowel Syndrome',
      diseaseHindiName: 'Irritable Aant Syndrome',
      howSymptomPresents: 'IBS mein gas aur bloating sabse prominent complaints hoti hain. Pet mein cramping ke saath gas hoti hai — kabhi diarrhea ke saath, kabhi constipation ke saath, kabhi dono alternate karte hain. Stress se dramatically worse hoti hai.',
      howToIdentify: 'Agar gas ke saath stool pattern bhi badla hua hai aur 3 mahine se zyada se hai — IBS possible hai.',
      homeopediaSlug: 'ibs',
      isAvailable: true,
    },
    {
      _key: 'mc2',
      diseaseName: 'Indigestion (Dyspepsia)',
      diseaseHindiName: 'Badh-hazmi / Ajeerni',
      howSymptomPresents: 'Indigestion mein gas ke saath upper abdomen mein heaviness, fullness, ya burning hoti hai. Khane ke baad yeh symptoms peak karte hain. Kuch logon mein nausea bhi hoti hai.',
      howToIdentify: 'Gas zyada khane ke baad hoti hai — aur upper pet (navel ke upar) mein discomfort feel hota hai, lower mein nahi.',
      homeopediaSlug: 'dyspepsia',
      isAvailable: true,
    },
    {
      _key: 'mc3',
      diseaseName: 'Gastritis',
      diseaseHindiName: 'Aant Ki Sujan / Pet Ki Sujan',
      howSymptomPresents: 'Gastritis mein stomach ki lining inflamed ho jaati hai. Gas ke saath upper pet mein gnawing ya burning dard hota hai — jo khali pet mein zyada hota hai. Kabhi kabhi khana khaane se thodi der ke liye better hota hai, phir wapas aata hai.',
      howToIdentify: 'Gas ke saath khali pet mein specifically dard ya jalan — ya H. pylori infection ka history.',
      homeopediaSlug: 'gastritis',
      isAvailable: true,
    },
    {
      _key: 'mc4',
      diseaseName: 'Acid Reflux (GERD)',
      diseaseHindiName: 'Tezaab Ka Upar Aana',
      howSymptomPresents: 'Acid reflux mein gas ke saath chest mein ya gale mein burning (heartburn) hoti hai. Khane ke baad letne se symptoms worse hote hain. Saath mein khatti dakaar bhi hoti hai.',
      howToIdentify: 'Gas ke saath seene mein jalan — specifically khane ke 1-2 ghante baad ya letne pe. Ye IBS ki gas se alag lagti hai.',
      homeopediaSlug: 'gerd',
      isAvailable: true,
    },
  ],

  redFlags: [
    'Bowel Obstruction (Aant Mein Blockage) — agar gas bilkul pass nahi ho rahi, pet ful raha hai aur vomiting bhi hai — turant hospital jaao',
    'Liver ya Gallbladder Disease — agar gas ke saath right side mein ya shoulder mein dard ho, ya aankhein/skin yellow lage — turant doctor',
    'Colon Cancer — agar 40+ age mein achanak gas pattern badla ho, unexplained weight loss ho, ya stool mein blood ho — wait mat karo, doctor se milein',
  ],

  homeSteps: [
    {
      _key: 'hs1',
      action: 'Left Side Pe Leit Jaao',
      whyItWorks: 'Anatomy ke hisaab se, left side pe letne se gas large intestine mein gravity ke saath aage move karti hai — jisse pressure kam hota hai aur gas pass karna aasaan hota hai.',
    },
    {
      _key: 'hs2',
      action: 'Halka Warm Water Peeyein',
      whyItWorks: 'Warm water digestive muscles ko relax karta hai aur gut motility improve karta hai — jisse gas move karti hai aur relief milta hai. Ek dum thanda ya carbonated drinks avoid karo — gas aur badhti hai.',
    },
    {
      _key: 'hs3',
      action: 'Chhoti Walk Karo — 5-10 Minute',
      whyItWorks: 'Halka movement gravity aur peristalsis (gut ki natural movement) dono ko activate karta hai — jisse phansa hua gas release hota hai. Lait ke rehne se gas aur stuck ho jaati hai.',
    },
    {
      _key: 'hs4',
      action: 'Loose Kapde Pehno',
      whyItWorks: 'Tight waistband ya belt abdomen pe pressure deta hai — jo gas movement mein rukawat dalta hai. Loose clothing pressure hata deta hai aur immediate relief milti hai.',
    },
    {
      _key: 'hs5',
      action: 'Deep Breathing — Diaphragmatic',
      whyItWorks: 'Deep belly breathing diaphragm ko activate karta hai jo gut pe gentle massage effect karta hai. Saath mein stress kam hone se gut spasms relax hoti hain — specially stress-related gas mein effective hai.',
    },
  ],

  homeopathyIndividualization: `Gas ki problem ka naam ek hai — lekin wajah har insaan mein alag hoti hai. Kisi ko raat ko gas zyada hoti hai, kisi ko sirf certain foods se, kisi ko stress mein, kisi ko subah khali pet mein. Homeopathy mein sirf "gas" nahi dekha jaata — aapki gas kaisi hai, kab hoti hai, kya khaane ke baad specifically badhti hai, kya se better hoti hai — ye sab treatment decide karta hai. Isliye do patients ko ek hi complaint ho sakti hai — aur unka treatment bilkul alag.`,

  homeopathyRootCause: `Baar baar aane wali gas ki problem aksar ek deeper digestive imbalance ka signal hoti hai. Homeopathy mein sirf gas ko ek baar theek karna goal nahi — jo cheez isko baar baar la rahi hai, usse address kiya jaata hai. Waqt ke saath episodes ki frequency aur intensity dono kam hoti hain. Research is area mein limited hai aur results individual hote hain — lekin chronic cases mein yeh approach meaningful difference la sakta hai.`,

  homeopathySafety: `Highly diluted medicines hone ki wajah se homeopathy practically side-effect free hai — isliye ye pregnancy mein, bacchon mein, aur elderly patients mein bhi safely use ho sakti hai. Conventional antacids ya digestive medicines ke saath saath bhi chal sakti hai. Severe pain, bleeding, ya emergency mein conventional treatment pehle lein. Homeopathy complementary role mein hai — replacement nahi.`,

  isForYouIf: [
    'Aap root cause treat karna chahte hain — sirf gas ko baar baar band nahi karna',
    'Aap long-term relief dhundh rahe hain — sustainable approach',
    'Aap side-effect free option prefer karte hain — specially agar pregnant hain, baccha hai, ya doosri medicines chal rahi hain',
  ],

  notForYouIf: [
    'Abhi isi waqt severe pain hai — pehle conventional treatment lein, homeopathy baad mein saath chala sakte hain',
    'Aapki condition surgical hai — surgery ke baad recovery mein homeopathy help kar sakti hai',
  ],

  homeopathyDiseaseLinks: [
    { _key: 'hdl1', diseaseName: 'IBS (Irritable Bowel Syndrome) ka poora ilaaj', diseaseSlug: 'ibs'       },
    { _key: 'hdl2', diseaseName: 'Indigestion (Badh-hazmi) ka poora ilaaj',       diseaseSlug: 'dyspepsia' },
    { _key: 'hdl3', diseaseName: 'Gastritis (Pet ki Sujan) ka poora ilaaj',        diseaseSlug: 'gastritis' },
    { _key: 'hdl4', diseaseName: 'Acid Reflux / GERD ka poora ilaaj',             diseaseSlug: 'gerd'      },
  ],

  linkedDiseaseCards: [
    { _key: 'ldc1', title: 'IBS',              hindiName: 'Irritable Aant Syndrome',  slug: 'ibs',       isAvailable: true },
    { _key: 'ldc2', title: 'Indigestion',      hindiName: 'Badh-hazmi / Ajeerni',    slug: 'dyspepsia', isAvailable: true },
    { _key: 'ldc3', title: 'Gastritis',        hindiName: 'Pet Ki Sujan',             slug: 'gastritis', isAvailable: true },
    { _key: 'ldc4', title: 'Acid Reflux/GERD', hindiName: 'Tezaab Ka Upar Aana',     slug: 'gerd',      isAvailable: true },
  ],

  faqs: [
    {
      _key: 'faq1',
      faqType: 'common-cause',
      question: 'Gas ki problem ka sabse common karan kya hai?',
      answer: `Pet mein gas ka sabse common karan hai zyada gas banane wale foods khaana — jaise rajma, chhole, gobhi, onion — aur jaldi khaate waqt hawa nigalna. India mein spicy aur oily khaana bhi digestive irritation karta hai.\n\nZyada tar cases mein yeh lifestyle se related hoti hai — koi serious bimari nahi hoti. Lekin agar gas ke saath dard, stool changes, ya weight loss bhi ho to doctor se milna zaroori hai.`,
    },
    {
      _key: 'faq2',
      faqType: 'normal-vs-serious',
      question: 'Gas ki problem kab normal hoti hai aur kab doctor zaroori hai?',
      answer: `Normal gas: Din mein 10-20 baar gas pass hona medically normal hai. Khane ke baad bloating jo kuch ghante mein theek ho jaaye — normal hai.\n\nDoctor zaruri: Agar gas ke saath pet mein tez dard ho, stool mein blood ho, achanak weight loss ho, ya 1 mahine se zyada se symptoms hain bina improvement ke — to wait mat karo.`,
    },
    {
      _key: 'faq3',
      faqType: 'duration',
      question: 'Gas ki problem kitne din tak rehti hai?',
      answer: `Agar cause ek meal ya ek food item hai — 4-8 ghante mein theek ho jaati hai.\n\nAgar cause koi infection ya stomach bug hai — 2-3 din lag sakte hain.\n\nAgar 1 hafte se zyada lag rahi hai — doctor se milein, underlying cause possible hai.\n\nIBS ya gastritis mein gas episodes frequent hote hain — yahan sirf diet se manage nahi hoti, treatment chahiye.`,
    },
    {
      _key: 'faq4',
      faqType: 'india-specific',
      question: 'Chai peene ke baad gas ki problem kyun hoti hai?',
      answer: `Chai mein caffeine aur tannins hote hain jo stomach lining ko irritate karte hain — aur acid secretion badhate hain. Jab chai khali pet pi jaaye — khali stomach ka acid aur chai ka acid milke gas aur acidity dono create karte hain.\n\nIndia mein subah ki pehli chai bina kuch khaaye pi jaati hai — aur yahi sabse common trigger hai.\n\nSolution: Chai ke saath ya baad mein kuch halkha zaroori hai. Homeopathy mein is type ki gas — jo stimulants se worse hoti hai — specifically assess hoti hai treatment ke liye.`,
    },
    {
      _key: 'faq5',
      faqType: 'pregnancy',
      question: 'Pregnancy mein gas ki problem normal hai kya?',
      answer: `Haan, pregnancy mein gas aur bloating bahut common hai — lekin normal aur abnormal mein fark jaanna zaroori hai.\n\nNormal: Progesterone hormone digestive muscles slow karta hai — jisse gas zyada banti hai. Ye puri pregnancy mein ho sakta hai.\n\nAbnormal: Agar gas ke saath severe abdominal pain, vaginal bleeding, ya swelling ho — turant doctor.\n\nEk important condition hai ICP (Intrahepatic Cholestasis of Pregnancy) — jisme gas ke saath intense itching hoti hai — doctor se milna mandatory hai.\n\nPregnancy mein koi bhi medicine bina doctor ke lena safe nahi — homeopathy bhi.`,
    },
    {
      _key: 'faq6',
      faqType: 'bacchon-mein',
      question: 'Bacchon mein gas ki problem kyun hoti hai?',
      answer: `Nawajaate babies mein: Digestive system abhi develop ho raha hota hai — gas normal hai. Feeding ke baad burp nahi karaaya to gas trapped ho jaati hai.\n\nThodi badi age ke bacche (2-10 saal): Zyada junk food, maida, ya cold drinks se gas hoti hai. School stress bhi ek factor hai.\n\nKya karna chahiye: Babies mein — har feed ke baad burp karao. Bade bacchon mein — agar gas ke saath weight nahi badh rahi, ya baar baar ho rahi hai — paediatrician se milein. Koi ghar pe medicine mat do bina doctor ke.`,
    },
    {
      _key: 'faq7',
      faqType: 'homeopathy',
      question: 'Kya homeopathy gas problem mein kaam karta hai?',
      answer: `Homeopathy gas ki problem mein helpful ho sakti hai — specially chronic ya recurring cases mein. Homeopathy ka fayda ye hai ki ye sirf gas nahi, underlying cause address karta hai — jaise IBS, indigestion, ya stress-related gut issues.\n\nResults individual hote hain aur research is area mein limited hai, lekin clinical practice mein chronic gas ke patients mein improvement dekhi jaati hai.\n\nAcute severe gas mein pehle conventional treatment lein — homeopathy complementary role mein hai.`,
    },
    {
      _key: 'faq8',
      faqType: 'baar-baar',
      question: 'Gas ki problem baar baar kyun aati hai?',
      answer: `Baar baar gas aane ke do main reasons hote hain:\n\nPehla — trigger hata nahi: Agar same foods khate raho, same stress mein raho — gas wapas aayegi.\n\nDoosra — underlying condition: IBS, gastritis, food intolerance (jaise lactose ya gluten) — yeh conditions mein sirf trigger avoid karne se kaam nahi chalta, treatment chahiye.\n\nAgar gas 3 mahine se zyada se baar baar aa rahi hai — doctor se milein aur cause find karein.`,
    },
    {
      _key: 'faq9',
      faqType: 'permanent',
      question: 'Gas ki problem se hamesha ke liye kaise chutkara milega?',
      answer: `"Permanent cure" ka vaada koi bhi system honestly nahi kar sakta — aur koi kare to doubt karo.\n\nJo realistic hai: Agar gas ka cause lifestyle hai — changes se substantially better ho sakta hai. Agar cause IBS ya gastritis hai — sahi treatment se episodes itne kam ho jaate hain ki life practically normal ho jaati hai.\n\nHomeopathy chronic gas mein underlying imbalance address karta hai — results 2-4 hafte mein dikhaai dete hain lekin individual hote hain.`,
    },
    {
      _key: 'faq10',
      faqType: 'test-diagnosis',
      question: 'Gas ki problem mein kaunsa test karwana chahiye?',
      answer: `Agar gas 2-4 hafte se zyada ho ya aur symptoms hon, doctor typically ye tests suggest kar sakte hain:\n- Blood test — CBC, liver function, thyroid (underlying cause dhundhne ke liye)\n- Stool test — infection ya blood check karne ke liye\n- H. pylori test — agar gastritis suspected ho\n- USG Abdomen — gallstones ya structural issues rule out karne ke liye\n- Colonoscopy ya Endoscopy — sirf agar red flags hon ya age 40+ ho\n\nNormal mild gas ke liye koi test zaruri nahi — doctor clinical history se kaafi determine kar lete hain.`,
    },
    {
      _key: 'faq11',
      faqType: 'baar-baar',
      question: 'Kya hamesha gastric problem hona normal hai?',
      answer: `Hamesha gastric problem hona normal nahi hai — bhale hi common ho. India mein bahut log ise "toh sab ko hoti hai" kehke ignore karte hain.\n\nAgar roz gas ki problem hai — iska matlab hai body kuch theek nahi kar pa rahi. Ya cause baari nahi — ya underlying condition hai jo address nahi hui.\n\nDoctor se milein aur pattern batayein: kab hoti hai, kya khaane ke baad, aur kya saath mein aata hai.`,
    },
    {
      _key: 'faq12',
      faqType: 'ghar-pe-wait',
      question: 'Gas mein ghar pe kab tak reh sakte hain?',
      answer: `Ghar pe rehna theek hai jab: Koi bukhaar nahi, koi severe pain nahi, normal gas pass ho rahi hai, aur khana-paani andar ja raha hai.\n\nDoctor ke paas jaao agar: Gas ke saath 101°F se zyada bukhaar, severe ya worsening pain, 24 ghante se kuch andar nahi ja raha, ya stool mein blood.\n\nIn cases mein wait karna risky hai.`,
    },
  ],

  relatedSymptoms: [
    { _key: 'rs1', name: 'Acidity',     hindiName: 'Tezaab Ki Takleef / Pet Mein Jalan', slug: 'acidity'     },
    { _key: 'rs2', name: 'Bloating',    hindiName: 'Pet Phoolna / Afara',                slug: 'bloating'    },
    { _key: 'rs3', name: 'Constipation', hindiName: 'Kabz / Qabz',                       slug: 'constipation'},
    { _key: 'rs4', name: 'Nausea',      hindiName: 'Ulti Ka Mann',                       slug: 'nausea'      },
  ],

  sources: [
    { _key: 's1', name: 'WHO — Digestive Health and Gastrointestinal Conditions',    year: '2023', url: 'https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease' },
    { _key: 's2', name: 'Mayo Clinic — Gas and Gas Pains: Symptoms & Causes',        year: '2024', url: 'https://www.mayoclinic.org/diseases-conditions/gas-and-gas-pains/symptoms-causes/syc-20372709' },
    { _key: 's3', name: 'NCBI — Intestinal Gas and Its Relationship to Bloating',    year: '2022', url: 'https://pubmed.ncbi.nlm.nih.gov/35765325/' },
    { _key: 's4', name: 'NHS UK — Flatulence: Causes and Treatment',                 year: '2023', url: 'https://www.nhs.uk/conditions/flatulence/' },
    { _key: 's5', name: 'ICMR — Burden of Gastrointestinal Diseases in India',       year: '2021', url: 'https://main.icmr.nic.in/' },
  ],

  quickFactSymptom: 'Normal adult mein din mein 10-20 baar gas pass hona normal hai — ye body ka natural process hai.',
  quickFactIndiaStats: '20-30% adults regularly digestive complaints report karte hain jisme gas aur bloating sabse aage hain — WHO/ICMR.',
  quickFactDoctorWhen: 'Gas ke saath severe pain, black/red stool, ya 1 mahine se zyada continuous symptoms — doctor se milein.',
  reviewDate: 'May 2026',

  doctorNote: 'Maine apni practice mein dekha hai ki gas ki problem ke jo patients aate hain, unme se zyada tar log ek common galat assumption laate hain — ki unhe koi serious bimari hai. Jab detailed case history leta hoon to pata chalta hai ki 60-70% cases mein cause lifestyle pattern hai — jaldi khaana, khali pet chai, late dinner. Lekin jo patients 6 mahine se zyada se gas ke saath aa rahe hain aur kuch bhi kaam nahi kar raha — unme IBS ya gastritis ka underlying pattern milta hai. Homeopathy mein yeh constitutional pattern samajhna hi effective treatment ki neev hai.',
}

async function seed() {
  console.log('🌱 Seeding Gas Problem symptom page...')
  await client.createOrReplace(doc)
  console.log('✅ Symptom seeded — homeopedia.in/symptoms/gas-problem')
}

seed().catch(console.error)
