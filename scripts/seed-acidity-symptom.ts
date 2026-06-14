import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'symptom-acidity',
  _type: 'symptom',

  name: 'Acidity / Heartburn',
  hindiName: 'Pet Mein Jalan / Amlapitta',
  hinglishName: 'Acidity (pet ki jalan)',
  slug: { _type: 'slug', current: 'acidity' },
  bodySystem: 'Digestive',

  metaTitle: 'Acidity in Hindi — Pet Mein Jalan, Karan aur Homeopathy',
  metaDescription: 'Pet mein jalan (acidity) ke karan, severity aur ghar pe safe steps — simple Hinglish mein. Verified info, Dr. Shadab reviewed.',
  publishedAt: new Date('2026-05-18').toISOString(),

  whatIsThis: `Khana khaane ke baad pet ke upar wale hisse mein ek teekhi jalan — jaise seene tak aag chadh rahi ho. Kabhi khatti dakar aati hai, kabhi muh mein teekha paani aa jaata hai, aur raat ko neend mein bhi chain nahi milta.

Ye acidity hai — aur India mein ye ek bahut aam complaint hai. Pet mein jalan (acidity) lagbhag har teen mein se ek Indian adult ko regularly hoti hai — lifestyle aur khaane ki aadat ki wajah se ye zyada common ho raha hai.

Ye page aapko 2 minute mein batayega: aapka case ghar pe manage ho sakta hai ya doctor ke paas jaana zaroori hai.`,

  indiaContext: 'WHO aur ICMR data ke anusaar India mein lagbhag 22-25% adults regular acidity ya acid reflux symptoms report karte hain — urban areas mein ye percentage zyada hai.',
  indiaContextSource: 'WHO Digestive Health Data 2023; ICMR NCD Report 2022',

  severityLevel1: [
    'Khana khaane ke baad 1-2 ghante jalan hoti hai, fir theek ho jaati hai',
    'Teekha, masaledar ya heavy khaana khaane ke baad hota hai',
    'Lete hone pe badhta hai, uthne par kam hota hai',
    'Khatti dakar ke saath mild jalan — 1-2 baar roz',
    'Paani peene ya antacid se thodi der mein relief milta hai',
  ],
  severityLevel2: [
    'Roz roz acidity — 3 hafte se zyada ho gayi hai',
    'Raat ko neend mein uthna pad raha hai jalan se',
    'Gale mein kharash ya khansi jo acidity ke saath aati hai',
    'Pet mein jalan ke saath halki ulti jaisi feeling roz hoti hai',
    'Kisi bhi ghar ke nuskhe ya antacid se zyada fark nahi pada',
  ],
  severityLevel3: [
    'Seene mein bahut tez dard jo baaye haath ya jaad tak jaye — ye heart attack bhi ho sakta hai, turant hospital',
    'Khoon ki ulti ho ya kala/tar jaisi potty ho — turant hospital',
    'Khana nigalne mein takleef ho rahi ho',
    'Achanak bahut zyada pet mein dard + bukhar saath mein ho',
    'Weight tezi se kam ho raha ho bina kisi wajah ke',
  ],

  timeline3Days: 'Agar kal ya parso se shuru hua hai — aksar koi khaas cheez khai ho, bahar ka khaana ho, ya stress mein ho — to ye acute episode hai. Paani peena, thoda walk karna, aur heavy khaana avoid karna enough hoga. Agar 3 din mein theek nahi hua, to Level 2 mein aao.',
  timeline4Weeks: 'Agar 1 hafte se zyada ho gayi hai — ye signal hai ki sirf ek baar ki baat nahi. Koi pattern ho sakta hai — subah khali pet, raat ko late khaana, ya coffee zyada. Is stage mein doctor se milna sahi hoga especially agar raat ko takleef ho rahi hai.',
  timelineMonthPlus: 'Agar mahino se roz ya baar baar ho raha hai — ye chronic acidity hai. Ye sirf "pet ki problem" nahi — Acid Reflux (GERD) ya Gastritis ho sakti hai underlying mein. Doctor ki evaluation zaroori hai. Homeopathy is stage mein constitutional approach se effectively kaam karti hai.',

  lifestyleCauses: [
    {
      _key: 'lc1',
      causeName: 'Khaane Ka Galat Waqt Aur Tarika',
      mechanism: 'Hum jab bahut zyada khaate hain ek baar mein, ya bahut tezi se khaate hain — stomach mein extra pressure create hota hai. Lower Esophageal Sphincter (LES) — wo muscle jo stomach aur food pipe ke beech hota hai — press ho jaata hai. Isse acid upar food pipe mein chali jaati hai. Late raat ka khaana is problem ko aur badha deta hai kyunki lete waqt gravity bhi support nahi karti.',
      howToIdentify: 'Khaane ke fauran baad ya lete waqt acidity badhti hai. Seedha baith ne par better lagta hai.',
    },
    {
      _key: 'lc2',
      causeName: 'Chai, Coffee Aur Carbonated Drinks',
      mechanism: 'Caffeine stomach mein acid production badha deti hai — aur saath hi LES muscle ko relax karti hai. Matlab zyada acid + badhne ka rasta dono ek saath. Subah khali pet chai pine wale patients mein ye sabse zyada common trigger hai. Fizzy drinks mein CO2 gas stomach mein pressure dalta hai.',
      howToIdentify: 'Chai ya coffee ke 30-45 minute baad jalan shuru hoti hai. Subah khali pet chai pine se acidity zyada hoti hai.',
    },
    {
      _key: 'lc3',
      causeName: 'Stress Aur Neend Ki Kami',
      mechanism: 'Stress mein body "fight or flight" mode mein jaati hai. Is mode mein digestion slow hoti hai — aur stomach zyada der tak acid hold karta hai. Saath hi cortisol (stress hormone) stomach lining ko protect karne wali mucus layer thin kar deta hai.',
      howToIdentify: 'Exam, kaam ka pressure, ya ghar ki tension ke waqt acidity zyada hoti hai. Weekends mein better feel hota hai.',
    },
    {
      _key: 'lc4',
      causeName: 'Zyada Weight Ya Pregnancy',
      mechanism: 'Pet ke aas paas extra weight ya pregnancy mein badha hua uterus — dono stomach par pressure dalte hain. Is extra pressure se acid upar dhakeli jaati hai. Isliye acidity pregnancy ke second aur third trimester mein bahut common ho jaati hai.',
      howToIdentify: 'Symptoms bade meals ke baad, ya jhukne / lete waqt zyada hote hain.',
    },
  ],

  medicalCauses: [
    {
      _key: 'mc1',
      diseaseName: 'Acid Reflux',
      diseaseHindiName: 'Tezab Ka Wapas Aana',
      howSymptomPresents: 'Acid Reflux mein LES muscle permanently kamzor ho jaati hai. Regular acidity se alag — ye roz hota hai, raat ko lete waqt zyada hota hai, aur gale mein kharash ya chronic khansi bhi saath aati hai.',
      howToIdentify: 'Sirf pet mein nahi — seene mein aur gale mein bhi jalan hoti hai regularly.',
      homeopediaSlug: 'gerd',
      isAvailable: true,
    },
    {
      _key: 'mc2',
      diseaseName: 'GERD (Gastroesophageal Reflux Disease)',
      diseaseHindiName: 'Chronic Acid Reflux / Amlapitta Rog',
      howSymptomPresents: 'Acid Reflux agar 2 hafte se zyada regularly ho — to use GERD kehte hain. Isme food pipe ki lining damage hone lagti hai. Chronic khansi, gala baithna, ya saans ki boo aana bhi ho sakta hai.',
      howToIdentify: 'Kisi bhi treatment se sirf thodi der relief — phir wapas. Lifestyle change se khaas fark nahi pada.',
      homeopediaSlug: 'gerd',
      isAvailable: true,
    },
    {
      _key: 'mc3',
      diseaseName: 'Gastritis',
      diseaseHindiName: 'Pet Ki Sujan / Aantron Ki Bimari',
      howSymptomPresents: 'Gastritis mein stomach ki inner lining inflamed ho jaati hai. Acidity ke saath upper pet mein dard, khana khane ke baad nausea, ya kabhi kabhi bhook bilkul na lagna — ye signs Gastritis ki taraf point karte hain.',
      howToIdentify: 'Sirf jalan nahi — pet ke upar hisse mein dard ya discomfort bhi. H. Pylori bacteria common cause.',
      homeopediaSlug: 'gastritis',
      isAvailable: true,
    },
    {
      _key: 'mc4',
      diseaseName: 'IBS (Irritable Bowel Syndrome)',
      diseaseHindiName: 'Irritable Aant Rog',
      howSymptomPresents: 'IBS mein acidity ek part hoti hai puri digestive irregularity ka — saath mein constipation ya diarrhea, bloating, ya gas bhi hoti hai. Ye akele acidity se alag hai — poori digestive system affect hoti hai.',
      howToIdentify: 'Sirf pet ki jalan nahi — bowel habits bhi irregular hain, stress se zyada badhta hai.',
      homeopediaSlug: 'ibs',
      isAvailable: true,
    },
  ],

  redFlags: [
    'Peptic Ulcer (Zakhm) — agar acidity ke saath khali pet mein bahut tez dard ho, ya khaane se relief mile — ulcer possible hai. Khoon ki ulti ya kale potty ke saath ho to turant hospital jaao',
    'Barrett\'s Esophagus — GERD agar saalon tak dhyan na diya jaye — food pipe ki lining badal sakti hai. Khaana nigalne mein takleef ya unintended weight loss ke saath chronic acidity ho to doctor zaroor milein',
    'Cardiac Cause — Seene mein jalan jo baaye haath ya jaad tak faile, saath mein paseena aaye — ye acidity nahi, cardiac emergency ho sakta hai. Turant hospital jaao',
  ],

  homeSteps: [
    {
      _key: 'hs1',
      action: 'Khana Khane Ke Baad 20-30 Minute Seedha Baitho',
      whyItWorks: 'Gravity acid ko stomach mein hi rokti hai. Lete jaane se ya jhukne se acid food pipe mein push ho jaati hai. Khana khaate hi mat laitein — yahi sabse common mistake hai.',
    },
    {
      _key: 'hs2',
      action: 'Thoda Slow Walk Karo — 10-15 Minute',
      whyItWorks: 'Halki walking stomach ki movement (peristalsis) ko activate karti hai — digestion jaldi hoti hai aur stomach khali hone ka time kam hota hai. Heavy exercise ya running seedha mat karo.',
    },
    {
      _key: 'hs3',
      action: 'Sar Aur Seene Ko Thoda Ucha Karke Soao',
      whyItWorks: 'Agar raat ko acidity badhti hai — takia ke neeche ek aur takia rakh do ya bed ka sar wala hissa thoda utha do. Ye acid ko throat mein aane se rokta hai physically.',
    },
    {
      _key: 'hs4',
      action: 'Dhire Dhire Aur Thode Thode Paani Ke Ghunt Lo',
      whyItWorks: 'Paani acid ko dilute karta hai aur stomach lining par ek temporary protective layer banata hai. Ek baar mein zyada nahi — thode thode ghunt zyada effective hote hain.',
    },
    {
      _key: 'hs5',
      action: 'Tight Kapde Dhile Karo — Especially Waist Par',
      whyItWorks: 'Tight belt ya kapde stomach par external pressure dalte hain — isse acid upar push hoti hai. Acidity ke waqt waist ke aas paas kuch bhi tight nahi hona chahiye.',
    },
  ],

  homeopathyIndividualization: `Acidity ka naam ek hai — lekin wajah aur experience har insaan mein alag hota hai. Kisi ko khali pet mein jalan hoti hai, kisi ko khaane ke baad; kisi ko chai se badhta hai, kisi ko stress se; kisi ko raat ko takleef hoti hai, kisi ko subah. Homeopathy mein sirf "acidity" nahi dekha jaata — aapki acidity kab hoti hai, kaise hoti hai, kya se better ya worse hoti hai — ye sab milake treatment decide hota hai. Isliye do patients ko ek hi complaint mein bilkul alag approach ho sakti hai.`,

  homeopathyRootCause: `Antacid acidity ko ghante bhar ke liye band karta hai — lekin wapas aata hai. Baar baar aane wali acidity aksar ek deeper digestive imbalance ka signal hai. Homeopathy mein sirf acid neutralize karna goal nahi — stomach ki lining ki sensitivity, acid production ka pattern, aur trigger factors — inhe address kiya jaata hai. Waqt ke saath frequency aur intensity dono kam hoti hain. Is area mein research limited hai aur results individual hote hain — lekin chronic cases mein ye approach meaningful improvement de sakti hai.`,

  homeopathySafety: `Pregnancy mein acidity bahut common hai — lekin conventional antacids har trimester mein equally safe nahi hote. Homeopathy highly diluted medicines use karta hai jis wajah se ye practically side-effect free option hai — isliye pregnancy mein, bacchon mein, aur elderly patients mein safely use ho sakti hai. Caveat: Severe symptoms ya emergency mein conventional treatment pehle lena zaroori hai. Homeopathy complementary role mein hai — replacement nahi.`,

  isForYouIf: [
    'Aap roz roz antacid se thak gaye hain — har baar wapas aata hai, band nahi hota',
    'Aap root cause treat karna chahte hain — na ki sirf agle 2 ghante ke liye acid band karna',
    'Aap side-effect free option chahte hain — specially agar pregnant hain, baccha hai, ya doosri medicines chal rahi hain',
  ],
  notForYouIf: [
    'Abhi bahut tez jalan hai aur turant relief chahiye — pehle conventional antacid lein, homeopathy baad mein saath mein shuru kar sakte hain',
    'Aapka doctor ne endoscopy ya surgical evaluation bola hai — pehle wo complete karein',
  ],

  homeopathyDiseaseLinks: [
    { _key: 'hdl1', diseaseName: 'Acid Reflux / GERD ka poora ilaaj', diseaseSlug: 'gerd'      },
    { _key: 'hdl2', diseaseName: 'Gastritis ka poora ilaaj',          diseaseSlug: 'gastritis' },
    { _key: 'hdl3', diseaseName: 'IBS ka poora ilaaj',                diseaseSlug: 'ibs'       },
  ],

  linkedDiseaseCards: [
    { _key: 'ldc1', title: 'GERD / Acid Reflux', hindiName: 'Chronic Acid Reflux', slug: 'gerd'      },
    { _key: 'ldc2', title: 'Gastritis',           hindiName: 'Pet Ki Sujan',        slug: 'gastritis' },
    { _key: 'ldc3', title: 'IBS',                 hindiName: 'Irritable Aant Rog',  slug: 'ibs'       },
  ],

  faqs: [
    {
      _key: 'faq1', faqType: 'common-cause',
      question: 'Acidity ka sabse common karan kya hai?',
      answer: `Acidity ka sabse common karan hai galat khaane ki aadat — tez khaana, bahut zyada khaana, ya late raat ka khaana. Jab stomach mein khaana zyada der tak rehta hai ya stomach par pressure badhta hai, acid food pipe mein chali jaati hai aur jalan hoti hai.\n\nIndia mein chai, coffee, aur masaledar khaana bhi bahut common triggers hain.\n\nAgar ye sab hata dene ke baad bhi acidity 2-3 hafte se zyada rahti hai, to Acid Reflux ya Gastritis ka evaluation zaroori hai.`,
    },
    {
      _key: 'faq2', faqType: 'normal-vs-serious',
      question: 'Acidity normal hai ya doctor ke paas jaana chahiye?',
      answer: `Kabhi kabhi hone wali acidity — masaledar khaane ke baad, bahar ka khaana khaane ke baad — bilkul normal hai.\n\nDoctor ki zaroorat hai agar:\n- Roz roz ho rahi hai 3 hafte se zyada\n- Raat ko neend todne wali ho\n- Khaana nigalne mein takleef ho\n- Weight bina wajah kam ho raha ho\n- Khoon ki ulti ya kala potty ho\n\nIn mein se koi bhi ho to doctor se milein — ye GERD ya Gastritis ho sakti hai.`,
    },
    {
      _key: 'faq3', faqType: 'duration',
      question: 'Acidity kitne din tak rehti hai?',
      answer: `Ek episode ki acidity usually 30 minutes se 2 ghante tak rehti hai — especially khaane ke baad. Agar sirf lifestyle ya trigger ki wajah se hai to ek din mein better ho jaana chahiye.\n\nAgar 3 din se zyada lagataar hai ya roz repeat ho rahi hai — to ye akele aadat ki wajah se nahi, koi underlying cause ho sakta hai.\n\n4 hafte se zyada chalti acidity ke liye doctor evaluation recommended hai.`,
    },
    {
      _key: 'faq4', faqType: 'duration',
      question: 'Raat ko acidity kyun badhti hai?',
      answer: `Raat ko acidity is liye badhti hai kyunki lete waqt gravity kaam nahi karti — acid ko stomach mein rokne mein. Din mein seedhe baith kar gravity acid ko neeche hi rakhti hai. Raat ko yahi natural protection khatam ho jaati hai.\n\nSaath mein, agar raat ko late khaana khaya ho aur fauran so gaye ho — stomach mein abhi digestion chal rahi hoti hai aur acid zyada hoti hai.\n\nSolution: Sone se 2-3 ghante pehle khaana khatam kar lein aur sar thoda ucha karke soayein.`,
    },
    {
      _key: 'faq5', faqType: 'ghar-wait',
      question: 'Pet mein jalan ho to ghar pe kya karein?',
      answer: `Ghar pe ye safe physical steps try kar sakte hain:\n- Khaane ke baad seedha baithe rahein — 30 minute tak mat laitein\n- Thoda slow walk karein — 10-15 minute\n- Thode thode ghunt paani peete rahein\n- Tight kapde loose karein — waist par pressure nahi\n- Sar thoda ucha karke soayein raat ko\n\nYe steps acidity ke episode mein physical comfort dete hain. Agar 3 din mein better na ho, doctor se milein.`,
    },
    {
      _key: 'faq6', faqType: 'pregnancy',
      question: 'Pregnancy mein acidity kyun hoti hai?',
      answer: `Pregnancy mein acidity ke do main reasons hain.\n\nPehla — hormones, especially progesterone, LES muscle ko relax karta hai — wahi muscle jo acid ko upar aane se rokta hai. Doosra — jaise jaise baby bada hota hai, uterus stomach par pressure dalta hai. Ye dono milke acid ko food pipe mein push karte hain. Second aur third trimester mein ye zyada hoti hai.\n\nImportant: Pregnancy mein koi bhi antacid ya medicine khud se mat lein — doctor se pehle poochhen. Ghar pe safe physical steps follow karein.\n\nICP (Intrahepatic Cholestasis of Pregnancy) ek serious condition hai jisme generalized jalan ke saath itching bhi hoti hai — agar ye saath mein ho to doctor se milna mandatory hai.`,
    },
    {
      _key: 'faq7', faqType: 'bacchon-mein',
      question: 'Bacchon mein acidity kyun hoti hai?',
      answer: `Chote bacchon mein — especially navojodon mein — acid reflux bahut common hai kyunki LES muscle abhi mature nahi hota.\n\nTeen-bade bacchon mein junk food, cold drinks, aur late raat kha kar so jaana common causes hain. Bacche usually seedha nahi bolte ki "pet mein jalan hai" — unke signs mein frequent burping, raat ko ulti ki feeling, ya khana nahi khaana shamil ho sakta hai.\n\nAgar bacche mein ye symptoms regularly hain to paediatrician se milein — khud se koi medicine mat dein.`,
    },
    {
      _key: 'faq8', faqType: 'india-specific',
      question: 'Kya chai ya coffee se acidity hoti hai?',
      answer: `Haan — chai aur coffee dono acidity ke common triggers hain, specially khali pet pine par. Caffeine do kaam karta hai — stomach mein acid production badhata hai aur saath mein LES muscle ko relax karta hai. Matlab zyada acid + upar jaane ka rasta dono milte hain.\n\nSubah uthke seedha khali pet chai pine ki aadat India mein ek bahut common acidity trigger hai.\n\nYe band karna zaroori nahi — lekin kuch khaane ke baad peena aur quantity thodi rakhna kaafi fark dalta hai.`,
    },
    {
      _key: 'faq9', faqType: 'baar-baar',
      question: 'Acidity baar baar kyun aati hai?',
      answer: `Baar baar aane wali acidity ka matlab ye hai ki sirf trigger ki problem nahi — stomach ki acid production ya LES muscle ka function chronically affect hua hai.\n\nCommon reasons:\n- Trigger foods roz khaana band nahi kiya\n- Underlying GERD ya Gastritis untreated hai\n- Chronic stress jo acid production regularly badha raha hai\n- H. Pylori bacteria infection (test karwana hoga)\n\nBaar baar antacid lene se symptoms temporarily band hote hain — root cause nahi. Doctor se evaluation aur agar interest ho to homeopathic constitutional treatment — dono se pattern todna mumkin hai.`,
    },
    {
      _key: 'faq10', faqType: 'test-diagnosis',
      question: 'Acidity mein kaunsa test karwana chahiye?',
      answer: `Agar acidity chronic hai (mahine se zyada) to doctor ye tests suggest kar sakte hain:\n\n- Endoscopy (Upper GI): Food pipe aur stomach ko directly dekhta hai — GERD, ulcer, ya damage check\n- H. Pylori test: Blood ya stool test — Gastritis ka common cause\n- pH Monitoring: 24 ghante acid levels measure karta hai — GERD confirm karta hai\n- Barium Swallow X-ray: Khaana nigalne mein problem ho to ye useful hai\n\nKhud se koi test mat karwao — doctor pehle examine karke batayenge kaunsa relevant hai.`,
    },
    {
      _key: 'faq11', faqType: 'homeopathy',
      question: 'Kya homeopathy acidity mein kaam karti hai?',
      answer: `Homeopathy acidity mein complementary approach ke taur pe kaam karti hai — specially chronic, recurring cases mein. Ye sirf acid neutralize nahi karta — patient ki specific pattern dekhkar (kab hoti hai, kya se badhti hai, kya se better hoti hai) constitutional treatment deta hai.\n\nResearch is area mein limited hai aur results individual hote hain — lekin jo patients lifestyle aur trigger management ke saath homeopathic treatment lete hain, unme frequency aur intensity dono mein improvement dekha jaata hai waqt ke saath.\n\nAcute ya severe symptoms mein conventional treatment pehle lein.`,
    },
    {
      _key: 'faq12', faqType: 'permanent',
      question: 'Acidity hamesha ke liye khatam ho sakti hai?',
      answer: `"Hamesha ke liye khatam" ka vaada koi bhi system honestly nahi kar sakta — aur koi kare to doubt karo.\n\nJo realistic hai: agar triggers properly identify karein aur manage karein, underlying condition (GERD ya Gastritis) ka treatment ho, aur lifestyle adjust ho — to chronic daily acidity itni kam ho sakti hai ki life practically normal ho jaaye.\n\nYe ek process hai — 2 din mein nahi hota, lekin possible hai. Homeopathy is process mein root cause address karke long-term stability mein madadgar ho sakti hai — results individual hote hain.`,
    },
  ],

  relatedSymptoms: [
    { _key: 'rs1', name: 'Bloating',    hindiName: 'Gas / Aafara',          slug: 'bloating'   },
    { _key: 'rs2', name: 'Nausea',      hindiName: 'Ji Machalna / Matli',   slug: 'nausea'     },
    { _key: 'rs3', name: 'Chest Pain',  hindiName: 'Seene Mein Dard',       slug: 'chest-pain' },
  ],

  sources: [
    { _key: 's1', name: 'Mayo Clinic — Heartburn: Symptoms & Causes',                                              year: '2024', url: 'https://www.mayoclinic.org/diseases-conditions/heartburn/symptoms-causes/syc-20373223' },
    { _key: 's2', name: 'WHO — Noncommunicable Diseases Country Profiles 2023 (Digestive Disorders — India)',      year: '2023', url: 'https://www.who.int/nmh/countries/ind_en.pdf'                                         },
    { _key: 's3', name: 'NCBI/PubMed — Epidemiology of Gastroesophageal Reflux Disease in Asia: A Systematic Review', year: '2011', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3093798/'                        },
    { _key: 's4', name: 'NHS UK — Heartburn and Acid Reflux',                                                      year: '2023', url: 'https://www.nhs.uk/conditions/heartburn-and-acid-reflux/'                         },
  ],

  quickFactSymptom:    'Acidity tab hoti hai jab stomach ki acid food pipe (esophagus) mein chali jaati hai — pet ke valve (LES) ke kamzor hone ya extra pressure se.',
  quickFactIndiaStats: 'India mein lagbhag 22-25% adults regular acidity ya acid reflux symptoms report karte hain — urban areas mein ye percentage zyada hai.',
  quickFactDoctorWhen: '3 hafte se zyada regular acidity, khaana nigalne mein takleef, ya unexplained weight loss — ye signs hain ki evaluation zaroori hai.',
  reviewDate: 'May 2026',

  doctorNote: 'Maine apni practice mein dekha hai ki acidity ke jo patients aate hain, unme se bahut se saalon se roz subah khali pet chai pee rahe hote hain — aur ye ek simple change karne se hi unki acidity 60-70% kam ho jaati hai. Doosra common pattern: jo log "stress mein hamesha acidity hoti hai" kehte hain — unme aksar H. Pylori infection milta hai jo identify nahi hua tha. Ek simple stool test se pata chal jaata hai. Homeopathy mein main dekhta hoon ki raat ko badhne wali, khali pet mein hone wali, aur stress-triggered acidity — teeno ka constitutional approach alag hota hai — aur sahi medicine se results anth mein sustainable hote hain antacid se zyada.',
}

async function seed() {
  console.log('🌱 Seeding Acidity symptom page...')
  await client.createOrReplace(doc)
  console.log('✅ Symptom seeded — homeopedia.in/symptoms/acidity')
}

seed().catch(console.error)
