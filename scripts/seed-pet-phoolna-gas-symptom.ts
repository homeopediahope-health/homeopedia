import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

const symptom = {
  _id: 'symptom-pet-phoolna-gas',
  _type: 'symptom',
  title: 'Pet Phoolna / Bloating / Gas',
  hindiName: 'Pet Phoolna / Gais',
  slug: { _type: 'slug', current: 'pet-phoolna-gas' },
  metaTitle: 'Pet Phoolna in Hindi – Karan, Ilaaj aur Homeopathy',
  metaDescription:
    'Pet phoolna (bloating/gas) ke karan, severity aur ghar pe safe steps – simple Hinglish mein. Verified info, Dr. Shadab reviewed.',
  heroText:
    'Khana khane ke baad pet mein ek ajeeb sa bhaari pan – jaise andar se kuch phool raha ho, belt dhili karni padti hai, aur uthne baithne mein bhi takleef hoti hai. Kisi kisi ko to saanson mein bhi gas ka pressure mehsoos hota hai.\n\nPet phoolna (bloating) tab hota hai jab digestive tract mein gas zyada banti hai ya phasi rehti hai – aksar khaane ke baad, lekin kabhi kabhi bina kuch khaye bhi.\n\nYe India mein sabse common digestive complaints mein se ek hai – aap bilkul akele nahi hain is mein.\n\nYe page aapko 2 minute mein batayega: ghar pe rukein ya doctor ke paas jaayein.',

  indiaContext:
    'India mein kiye gaye studies ke mutabiq, 20-30% adults ko regular basis pe functional bloating ki complaint hoti hai – aur Tier 2-3 cities mein fast food aur irregular khaane ki aadat ki wajah se ye number aur zyada hai.',
  indiaContextSource: 'Indian Journal of Gastroenterology, 2022',

  severityLevel1: [
    'Pet phoolna khane ke baad hota hai aur 1-2 ghante mein thoda better ho jaata hai',
    'Dakar (burping) ya gas pass hone ke baad relief milti hai',
    'Koi bukhaar, ulti ya dard nahi hai',
    'Roz nahi hota – kabhi kabhi hota hai',
    'Halka pet dard hai jo gas pass hone pe theek hota hai',
  ],
  severityLevel2: [
    'Pet phoolna roz hota hai – khaao ya na khaao',
    'Dard ek jagah se nahi jaata – ghanton tak rehta hai',
    'Kabj (constipation) ya loose motions ke saath bloating hai',
    'Bhookh bilkul nahi lagti kai dinon se',
    'Kamar ke neeche ya pehlu mein dard ke saath bloating hai',
  ],
  severityLevel3: [
    'Pet bahut zyada phool gaya hai aur chhoone pe bhi bahut dard ho raha hai',
    'Ulti ke saath khoon aa raha hai ya kal jaisi (dark) ulti hai',
    'Motions mein khoon hai – laal ya kaala',
    'Saanson mein takleef ke saath pet mein dard hai',
    'Skin aur aankhein peeli ho rahi hain (jaundice) ke saath bloating hai',
  ],

  timeline3Days:
    'Agar abhi abhi shuru hua hai – aksar kuch khane ki wajah se hota hai. Oily, spicy, ya bohot zyada khaane ke baad gas banana body ka normal reaction hai. Ghar pe rest karo, paani piyo, halki walk karo. Agar teen din mein better nahi hua ya dard badh raha hai – Level 2 pe aao aur doctor dikhao.',
  timeline4Weeks:
    'Ek hafte se zyada se pet phool raha hai – ye signal hai ki koi underlying issue ho sakti hai. Khaane ki aadat badlo, lekin doctor se bhi milein. Agar irritable bowel syndrome (IBS), food intolerance, ya acidity ki problem hai – simple changes se nahi sudharta. Is hafte doctor appointment lo.',
  timelineMonthPlus:
    'Mahine se zyada se roz ya aksar pet phoolna – ye chronic issue hai. Body kuch bata rahi hai jo abhi tak diagnose nahi hua. Doctor se milna zaruri hai – sirf ghar ke nuskhe se manage nahi hoga. Homeopathy is chronic pattern mein root cause pe kaam karta hai – aur consistency se long-term improvement possible hai.',

  lifestyleCauses: [
    {
      _key: 'lc1',
      title: 'Bohot Jaldi Khaana Ya Baat Karte Karte Khaana',
      mechanism:
        'Jab hum jaldi khaate hain ya khaate waqt baat karte hain – to khane ke saath hawa (air) bhi nigli jaati hai. Ye air stomach mein jaati hai aur gas ban jaati hai. Ek baar gas stomach mein aa jaaye to wo ya to upar (dakar) ya neeche (flatulence) nikalni hoti hai – aur agar nahi nikal payi to pet phoolne ka feeling hota hai.',
      recognition:
        'Bloating aksar khane ke fauran baad hoti hai – kaafi dakar aati hai. Khaane ke baad relief milti hai agar gas nikal jaaye.',
    },
    {
      _key: 'lc2',
      title: 'Badi Maatra Mein Gas-Producing Foods',
      mechanism:
        'Kuch khaanon mein fermentable carbohydrates (jaise rajma, chana, gobhi, broccoli, pyaaz) hoti hain jo aasaani se digest nahi hotin. Ye large intestine mein jaati hain jahan bacteria inhe ferment karte hain – is process mein hydrogen, methane aur CO2 gas banti hai. Ye gas intestines mein pressure paida karti hai – issi ko bloating kehte hain.',
      recognition:
        'Specific khane ke baad – jaise dal, rajma, kachchi pyaaz, gobhi khane ke 2-4 ghante baad bloating badhti hai. Gas pass hone pe thoda relief hota hai.',
    },
    {
      _key: 'lc3',
      title: 'Acidity / Acid Reflux',
      mechanism:
        'Jab stomach mein zyada acid banta hai – to ye upper digestive system mein irritation karta hai. Digestive motility (khaane ka aage badhna) slow hoti hai. Khana stomach mein zyada der ruk jaata hai – aur gas ka pressure badhta hai. Aksar burning ke saath bloating hoti hai.',
      recognition:
        'Seene mein jalan (heartburn), khatte dakar ke saath pet phoolna. Chaai ya coffee ke baad zyada hoti hai. Khali pet ya raat ko zyada.',
    },
    {
      _key: 'lc4',
      title: 'Constipation (Kabj)',
      mechanism:
        'Jab large intestine mein stool bohot der tak ruk jaata hai – to bacteria uski fermentation karte rehte hain. Is process mein kaafi gas banti hai. Aur kyunki bowel mein stool jam gayi hai – gas ko bhi nikalne ka rasta kam ho jaata hai. Nateeja: pet phoolna + tight feel.',
      recognition:
        'Teen din se zyada se potty nahi aayi – aur saath mein pet phool raha hai. Lower abdomen mein heaviness feel hoti hai.',
    },
  ],

  medicalCauses: [
    {
      _key: 'mc1',
      diseaseName: 'Irritable Bowel Syndrome (IBS)',
      hindiName: 'Aanton Ka Sensitiveness / Sensitive Pet',
      description:
        'IBS mein digestive system hypersensitive ho jaata hai. Normal gas ya pressure bhi zyada feel hoti hai. Bloating aksar loose motions ya constipation ke saath hoti hai – kabhi ek, kabhi doosra. Stress se symptoms badh jaate hain.',
      recognition:
        'Bloating ke saath ya to baar baar loose motions hain ya mahine mein kai baar kabj. Stress mein zyada hota hai. Koi test mein gadbadi nahi aati – phir bhi problem rehti hai.',
      diseaseSlug: 'ibs',
      isAvailable: false,
    },
    {
      _key: 'mc2',
      diseaseName: 'Lactose Intolerance',
      hindiName: 'Dudh Na Pacha Paana',
      description:
        'Dudh ya dairy products mein lactose hoti hai – ek sugar jo kuch logon mein digest karne ke liye enzyme (lactase) nahi hoti ya kam hoti hai. Ye undigested lactose large intestine mein jaati hai aur bacteria se ferment hoti hai – kaafi gas aur bloating hoti hai.',
      recognition:
        'Dudh, dahi, paneer, chai (dudh wali) peene ya khane ke 30 min se 2 ghante baad pet phoolna, gas, kabhi kabhi loose motions. Jab dairy band karo – bloating apne aap kam hoti hai.',
      diseaseSlug: 'lactose-intolerance',
      isAvailable: false,
    },
    {
      _key: 'mc3',
      diseaseName: 'Gastritis',
      hindiName: 'Pet Mein Sujan / Gastritis',
      description:
        'Stomach ki inner lining mein sujan (inflammation) aa jaati hai – aksar H. pylori bacteria, alcohol, ya NSAIDs (pain killers) ki wajah se. Khana digest hone ki speed slow hoti hai. Gas aur bloating ke saath upper abdomen mein dard hota hai.',
      recognition:
        'Navel ke upar, pet ke beech mein dard – khana khane ke baad badhta hai. Ulti ki feeling ya actual ulti bhi ho sakti hai. Khali pet bhi dard hota hai.',
      diseaseSlug: 'gastritis',
      isAvailable: false,
    },
    {
      _key: 'mc4',
      diseaseName: 'Celiac Disease / Gluten Sensitivity',
      hindiName: 'Gehun Se Takleef',
      description:
        'Kuch logon mein gehun, jau (barley), ya rye mein paaya jaane wala gluten immune reaction trigger karta hai. Is reaction mein small intestine ki lining damage hoti hai – nutrition absorb nahi hota aur gas kaafi banti hai. Bloating bohot prominent hoti hai.',
      recognition:
        'Roti, bread, biscuits khane ke baad consistently bloating. Weight loss, fatigue, aur kabhi kabhi anemia ke saath hota hai. Gluten-free diet se dramatic improvement hota hai.',
      diseaseSlug: '',
      isAvailable: false,
    },
    {
      _key: 'mc5',
      diseaseName: 'SIBO (Small Intestinal Bacterial Overgrowth)',
      hindiName: 'Choti Aant Mein Bacteria Ka Badhna',
      description:
        'Normally small intestine mein bacteria bahut kam hote hain – lekin kuch conditions mein ye bacteria zyada ho jaate hain aur wahan hi khane ko ferment karne lagte hain. Ye kaafi zyada gas aur bloating paida karta hai – jo khane ke thodi der baad hi shuru ho jaata hai.',
      recognition:
        'Khaane ke 30-60 minute baad hi bohot zyada bloating – practically kuch bhi khao. Weight loss, nutrient deficiency. IBS ke tests normal hain lekin ye alag condition hai – breath test se diagnose hoti hai.',
      diseaseSlug: '',
      isAvailable: false,
    },
  ],

  redFlags: [
    'Ovarian Cyst ya Ovarian Cancer (Mahilaon Mein) – agar bloating ke saath lower abdomen mein ek side dard ho, periods irregular hon, ya peshab zyada aaye to gynaecologist se turant milo',
    'Liver Disease / Ascites – agar pet rapidly phool raha hai (kuch dinon mein), aankhein ya skin peeli ho rahi hai, ya pair sujan aa rahi hai to turant doctor ke paas jaao – ascites (pet mein paani) serious condition hai',
    'Colon Cancer – agar 40 saal ke baad achanak bowel habits change hon, motions mein khoon ho, aur bloating ke saath weight loss ho to colonoscopy zaroori hai',
  ],

  homeSteps: [
    {
      _key: 'hs1',
      step: 'Khane Ke Baad 10-15 Minute Halki Walk Karo',
      reason:
        'Walking digestive system ko gentle stimulation deta hai – peristalsis (food ka aage badhna) improve hoti hai aur gas move karne mein madad milti hai. Seedha lete nahi rehna khane ke baad – ye gas ko phansata hai.',
    },
    {
      _key: 'hs2',
      step: 'Garam Paani Ki Bottle (Hot Water Bag) Pet Pe Rakho',
      reason:
        'Gentle heat abdominal muscles ko relax karti hai aur gas movement ko ease karti hai. 15-20 minute rakhna enough hai – na bohot zyada garam, na seedhe skin pe.',
    },
    {
      _key: 'hs3',
      step: 'Ghutnon Ko Seene Ke Paas Laake Loatno (Wind-Relieving Position)',
      reason:
        'Ye yoga position (Pawanmuktasana) bowel pe gentle pressure deta hai jo trapped gas release karne mein help karta hai. Dono ghutne ek saath seene se lagao, 30 second rukko – 3-4 baar karo.',
    },
    {
      _key: 'hs4',
      step: 'Khana Slowly Khao – Har Niwaale Ko Acha Se Chabaao',
      reason:
        'Chewing se khaana chhota chhota toot jaata hai – stomach pe kam load padta hai. Saath hi, slowly khane se swallowed air bhi kam hoti hai jo bloating ka ek major physical cause hai.',
    },
    {
      _key: 'hs5',
      step: 'Paani Peete Rahein – Lekin Khane Ke Beech Mein Zyada Mat Piyo',
      reason:
        'Hydration digestion ke liye zaruri hai – especially kabj-related bloating mein. Lekin khane ke beech zyada paani peene se stomach acids dilute hote hain aur digestion slow hoti hai. Khane se 30 min pehle ya 30 min baad paani peeyin.',
    },
  ],

  homeopathyAngle1:
    'Pet phoolna ka naam ek hai – lekin wajah aur feel har insaan mein alag hoti hai. Kisi ka khana khane ke fauran baad phoolna shuru hota hai, kisi ko raat ko zyada hoti hai, kisi ki dakar se better hoti hai aur kisi ki nahi. Homeopathy mein sirf bloating nahi dekhi jaati – aapka bloating kaisa hai, kab hota hai, kya se worse hota hai, kya se better – ye sab milake treatment decide karta hai. Isliye do patients ko ek jaisi complaint ho sakti hai – aur unka constitutional treatment bilkul alag hoga.',
  homeopathyAngle2:
    'Baar baar pet phoolna aksar ek deeper digestive imbalance ka signal hai. Homeopathy mein sirf is baar ki gas band karna goal nahi – jo cheez isko baar baar la rahi hai – be wo digestive sensitivity ho, stress-gut connection ho, ya koi chronic condition – usse address kiya jaata hai. Sahi constitutional treatment se waqt ke saath frequency aur intensity dono kam hoti hain. Research is area mein limited hai aur results individual hote hain – lekin consistent treatment se pattern todna possible hai.',
  homeopathyAngle3:
    'Highly diluted medicines hone ki wajah se homeopathy practically side-effect free hai – isliye ye pregnant mahilaon mein, bacchon mein, aur un logon mein jo pehle se kaafi medicines le rahe hain (jaise diabetes ya BP ki) unke liye bhi safely complementary option ki tarah use ho sakti hai. Emergency ya severe acute situations mein conventional treatment pehle lein – homeopathy complementary role mein hai, replacement nahi.',

  homeopathyDiseaseLinks: [],

  homeopathyIsFor: [
    'Aap sirf gas ka temporary patch nahi chahte – aap samajhna chahte hain ki baar baar kyun hota hai',
    'Aap sustainable, long-term digestive relief dhundh rahe hain – ek raat mein nahi, lekin lasting',
    'Aap side-effect free approach prefer karte hain – especially agar pregnant hain, baccha hai, ya doosri medicines chal rahi hain',
  ],
  homeopathyNotFor: [
    'Aapko abhi isi waqt severe dard hai – pehle doctor se milein ya emergency le lein, homeopathy baad mein complementary taur pe saath chala sakte hain',
    'Aapki condition surgical hai (jaise intestinal blockage) – surgery ke baad recovery mein homeopathy madadgar ho sakti hai',
  ],

  linkedDiseaseCards: [],

  faqs: [
    {
      _key: 'faq1',
      faqType: 'general',
      question: 'Pet phoolna kab normal hota hai aur kab doctor zaroori hai?',
      answer:
        'Khane ke baad thoda pet phoolna – specially zyada ya gas-producing food ke baad – bilkul normal hai.\n\nNormal hai agar: Khane ke 1-2 ghante mein apne aap better ho jaaye, dakar ya gas pass hone pe relief mile, koi aur symptom na ho.\n\nDoctor zaruri hai agar: Ye roz ho raha hai kai hafte se, kabj ya loose motions ke saath hai, pet mein ek jagah dard hai jo nahi jaata, motions mein khoon hai ya skin/aankhein peeli ho rahi hain, 40 ke baad achanak shuru hua hai bina clear reason ke.\n\nHomeopathy chronic bloating patterns mein – jahan cause identified hai lekin long-term management chahiye – ek helpful complementary option hai.',
    },
    {
      _key: 'faq2',
      faqType: 'general',
      question: 'Pet phoolna kitne din tak rehta hai?',
      answer:
        'Ye cause pe depend karta hai. Khane ki wajah se (oily, gas-producing food): 2-6 ghante, apne aap better. Acidity/Gastritis ki wajah se: Kuch din tak, treatment se. IBS ya chronic condition mein: Baar baar aata hai – kabhi kam, kabhi zyada.\n\nAgar ek hafte se zyada se consistently pet phool raha hai – chahe kuch bhi khaao – to ye normal nahi hai. Doctor se milein.\n\nAksar dekha jaata hai ki log mahine mahine ghar ke nuskhe se manage karte rehte hain jab tak ki underlying cause serious nahi ho jaata – isse bacho.',
    },
    {
      _key: 'faq3',
      faqType: 'general',
      question: 'Pet phoolne ka sabse common karan kya hai?',
      answer:
        'India mein pet phoolne ka sabse common karan hai – swallowed air (jaldi khaana, straw se peena) aur gas-producing foods (dal, rajma, gobhi, pyaaz).\n\nIske baad: Constipation – stool ruk jaati hai to gas bhi ruk jaati hai; Acidity / Gastritis – digestion slow hoti hai; Lactose Intolerance – dudh nahi pachta; IBS – digestive system hypersensitive ho jaata hai.\n\nIndia-specific ek common trigger jo log ignore karte hain: zyada chai aur garam paani baar baar peena – ye stomach lining ko irritate karta hai aur gas badhata hai.',
    },
    {
      _key: 'faq4',
      faqType: 'general',
      question: 'Pet phoolne mein ghar pe kab tak reh sakte hain?',
      answer:
        'Agar bloating mild hai aur khaane ke baad hoti hai – aur 2-3 ghante mein apne aap better ho jaati hai – tab ghar pe rehna theek hai.\n\nGhar pe toh rakho: Halki walk, garam bottle, slowly khaane ki aadat.\n\nDoctor ke paas jaao agar: 3 din se zyada se roz ho raha hai, dard ek jagah se nahi ja raha, bukhaar hai saath mein, motions anormal hain.\n\nEk rule yaad rakho: agar aapko khud doubt ho – "ye theek lag nahi raha" – doctor se milna hamesha safe option hai.',
    },
    {
      _key: 'faq5',
      faqType: 'homeopathy',
      question: 'Kya homeopathy pet phoolne mein kaam karta hai?',
      answer:
        'Homeopathy chronic aur recurring bloating mein – jahan cause identified ho – helpful complementary approach hai.\n\nFayda ye hai ki homeopathy sirf gas band karna goal nahi rakhta – jo cheez baar baar gas bana rahi hai usse address karna goal hota hai. Isliye jo patients IBS, chronic gastritis, ya stress-related bloating mein hain – unhe conventional treatment ke saath complementary homeopathy se long-term pattern mein improvement ho sakta hai.\n\nKuch important honest baatein: Acute severe bloating mein pehle conventional treatment. Results individual hote hain – sabke liye ek jaisa nahi hoga. Proper constitutional assessment zaruri hai – koi bhi medicine khud se lena advisable nahi.',
    },
    {
      _key: 'faq6',
      faqType: 'general',
      question: 'Pet phoolne mein kaunsa test karwana chahiye?',
      answer:
        'Test cause pe depend karta hai – doctor history le ke decide karta hai. Lekin commonly kiye jaane wale tests:\n\nBlood Test: CBC, LFT (liver), TFT (thyroid) – general assessment. Stool Test: Infection ya blood ke liye. Ultrasound Abdomen: Liver, gallbladder, ovaries check ke liye. Hydrogen Breath Test: Lactose intolerance ya SIBO ke liye. Endoscopy (agar acidity/gastritis suspected): Stomach lining directly dekhne ke liye.\n\nKhud se test mat karwao – pehle doctor se milein, wo decide karenge kaunsa zaroori hai.',
    },
    {
      _key: 'faq7',
      faqType: 'general',
      question: 'Raat ko pet phoolne kyun badhta hai?',
      answer:
        'Raat ko bloating is liye zyada feel hoti hai kyunki din bhar ki accumulated gas late evening tak maximum hoti hai. Din mein hum chalta phirta rehte hain – gas movement hoti rehti hai. Raat ko lete ho jaate hain – gas movement slow hoti hai aur pressure zyada feel hota hai.\n\nKuch specific reasons: Raat ka khana bohot heavy tha; lete hote hi so gaye – digestion ko time nahi mila; IBS patients mein stress (din bhar ka) evening mein symptoms badhata hai.\n\nRaat ko better feel karne ke liye: khane ke 2 ghante baad so jaao, lete waqt left side pe so jaao (isse gas nikalne mein thodi madad hoti hai).',
    },
    {
      _key: 'faq8',
      faqType: 'general',
      question: 'Pregnancy mein pet phoolna normal hai kya?',
      answer:
        'Pregnancy mein pet phoolna bahut common hai – lekin "normal" aur "ignore karo" mein fark hai.\n\nKyun hota hai pregnancy mein: Progesterone hormone digestive muscles ko relax karta hai. Khaana zyada slowly move karta hai – gas zyada banti hai. Badhta hua uterus bhi intestines pe pressure deta hai.\n\nKab doctor zaruri hai: Severe abdominal dard ke saath bloating; motions mein khoon; bloating ke saath bukhaar ya ulti; 3rd trimester mein achanak bahut zyada bloating.\n\nImportant: Pregnancy mein koi bhi medicine – homeopathic ya allopathic – apne doctor se pooche bina mat lo. Homeopathy generally safe option mani jaati hai pregnancy mein – lekin fir bhi qualified practitioner se hi lein.',
    },
    {
      _key: 'faq9',
      faqType: 'general',
      question: 'Kya chai peene se pet phoolna badhta hai?',
      answer:
        'Haan – specially zyada chai ya khali pet chai peena pet phoolna badha sakta hai.\n\nKyun: Chai mein tannins aur caffeine hoti hai – ye stomach acid production badhaati hai. Agar saath mein dudh hai aur aapko lactose intolerance hai to aur bhi zyada bloating. Khali pet chai (subah uthkar seedha chai) stomach lining ko irritate karti hai – gastritis jaisi condition bana sakti hai time ke saath.\n\nYe zaruri nahi ki chai band karo – lekin: khali pet mat piyo, ek ya do cup tak limit karo, strong brew se bachein.\n\nIndia mein ye ek bahut common trigger hai jo log notice nahi karte kyunki "chai to roz peete hain."',
    },
    {
      _key: 'faq10',
      faqType: 'general',
      question: 'Pet phoolna baar baar kyun aata hai?',
      answer:
        'Agar pet phoolna baar baar aa raha hai – seedha matlab hai ki sirf ek event ki wajah se nahi, koi underlying pattern hai.\n\nCommon reasons: Koi undiagnosed food intolerance hai (lactose, gluten); IBS hai jo diagnose nahi hua; Chronic constipation ki cycle chal rahi hai; Stress-gut connection active hai; SIBO ho sakta hai – gut bacteria disturb hain.\n\nSirf gas relief tablets se ye nahi sudharta – pattern ko samajhna padega. Doctor se milein aur complete history share karein – sirf "pet phoolna" mat bolein, ye bhi batao kab hota hai, kya khane ke baad, kitne time tak.',
    },
    {
      _key: 'faq11',
      faqType: 'homeopathy',
      question: 'Pet phoolne se hamesha ke liye kaise chutkara milega?',
      answer:
        '"Hamesha ke liye" ka vaada koi bhi system honestly nahi kar sakta – aur koi kare to doubt karo.\n\nJo realistic hai: Cause identify ho jaye – jaise lactose intolerance ya IBS – aur uske hisaab se changes ho to bloating ki frequency aur intensity itni kam ho sakti hai ki life practically normal ho jaaye. IBS mein proper management, stress control, aur consistent approach se 80-90% patients mein significant improvement hoti hai. Food intolerance mein: trigger food avoid karo – bloating practically gayab ho jaati hai.\n\nHomeopathy is mein ye kaam karta hai ki sirf symptoms ko suppress karne ki jagah, jo cheez baar baar trigger kar rahi hai usse address karta hai – waqt ke saath better results aate hain. Results individual hote hain.\n\nEk realistic goal rakho: "bloating-free life" nahi – "bloating se controlled, predictable relief."',
    },
    {
      _key: 'faq12',
      faqType: 'general',
      question: 'Bacchon mein pet phoolna kyun hota hai?',
      answer:
        'Chote bacchon mein (0-2 saal): Aksar gas paas karne mein takleef hoti hai – digestive system immature hoti hai. Colic (ro na rukna, ghutne upar kheenchna) is ki common presentation hai.\n\nBade bacchon mein (3-12 saal): Jaldi khaana, khate waqt baat karna – swallowed air; zyada maida (macaroni, biscuits, chips) – fermentation zyada; constipation – bacchon mein bahut common; milk allergy ya lactose intolerance.\n\nKab doctor zaruri hai bacchon ke liye: Lambe time tak ro raha hai aur kuch kaam nahi aa raha; bukhaar ke saath pet phoolna; motions mein khoon; weight nahi badh raha ya weight gir raha hai.\n\nBacchon mein homeopathy ek gentle option hai – lekin qualified homeopath se lena zaruri hai, khud se koi bhi medicine mat do.',
    },
  ],

  consultationHeading: 'Apna Symptom Samajh Aa Gaya – Ab Kya Karein?',
  consultationBody:
    'Har pet phoolne ki wajah alag hoti hai – aur ilaaj bhi alag. Dr. Shadab se ek consultation mein aap jaanenge ki aapke is symptom ke peeche exactly kya hai – lifestyle hai, food intolerance hai, ya koi deeper digestive issue – aur homeopathy aapke specific case ke liye kaise kaam kar sakti hai.',
  consultationCTA: 'Dr. Shadab Se Milein →',
  trustLine: '15+ Saalon Ka Clinical Experience | Nagpur',

  relatedSymptoms: [
    { _key: 'rs1', title: 'Acidity / Heartburn', hindiName: 'Seene Mein Jalan', slug: 'acidity-heartburn' },
    { _key: 'rs2', title: 'Constipation', hindiName: 'Kabj', slug: 'constipation' },
    { _key: 'rs3', title: 'Nausea / Vomiting', hindiName: 'Ulti Ka Man', slug: 'nausea-ulti' },
    { _key: 'rs4', title: 'Abdominal Pain', hindiName: 'Pet Dard', slug: 'pet-dard' },
  ],

  sources: [
    {
      _key: 'src1',
      title: 'Mayo Clinic – Bloating: Symptoms & Causes',
      year: '2024',
      url: 'https://www.mayoclinic.org/symptoms/bloating/basics/causes/sym-20050782',
    },
    {
      _key: 'src2',
      title: 'NHS UK – Bloating',
      year: '2023',
      url: 'https://www.nhs.uk/conditions/bloating/',
    },
    {
      _key: 'src3',
      title: 'NCBI/PubMed – Functional Bloating: Epidemiology and Pathophysiology',
      year: '2021',
      url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8535287/',
    },
    {
      _key: 'src4',
      title: 'Indian Journal of Gastroenterology – Functional GI Disorders in India: Prevalence Study',
      year: '2022',
      url: 'https://www.springer.com/journal/12664',
    },
  ],

  bodySystem: 'Digestive',
  quickFacts: [
    'Pet phoolna tab hota hai jab digestive tract mein gas trapped ho jaati hai – aksar swallowed air ya food fermentation ki wajah se.',
    'India mein kiye gaye studies ke mutabiq 20-30% adults ko regular functional bloating hoti hai – Tier 2-3 cities mein ye number aur zyada ho sakta hai khaane ki aadat ki wajah se.',
    'Agar bloating 1 hafte se roz hai, motions mein khoon hai, ya severe dard ke saath hai – turant doctor se milein.',
  ],
  reviewDate: 'May 2026',
}

async function seed() {
  console.log('🌱 Seeding Pet Phoolna / Gas symptom page...')
  await client.createOrReplace(symptom)
  console.log('✅ Symptom seeded — homeopedia.in/symptoms/pet-phoolna-gas')
}

seed().catch(console.error)
