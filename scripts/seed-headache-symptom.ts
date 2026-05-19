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
  _id: 'symptom-headache',
  _type: 'symptom',
  title: 'Headache (Sir Dard)',
  hindiName: 'Sir Dard / Sar Dard',
  slug: { _type: 'slug', current: 'headache' },
  metaTitle: 'Headache in Hindi – Sir Dard Karan aur Homeopathy | Homeopedia',
  metaDescription:
    'Sir dard (headache) ke karan, severity aur ghar pe safe steps – simple Hinglish mein. Verified info, doctor-reviewed. Dr. Shadab, Nagpur.',
  heroText:
    'Uthte hi sar mein ek bhaaripan – ya kaam ke beech mein achanak nasebon mein khinchaav. Kabhi thapthapata hua dard, kabhi poori khopdi ko jakad lene wala. Sir dard (headache) ek aisa symptom hai jo apne haath se chhod nahi deta – din barbaad karta hai, neend udaata hai, concentrate karne nahi deta.\n\nHeadache India mein sabse common health complaint hai – WHO ke anusaar duniya ki 50% se zyada adult population ko har saal kam se kam ek baar headache hota hai.\n\nYe page aapko 2 minute mein batayega: aapka sir dard kis category mein aata hai, ghar pe kya karein, aur kab doctor ke paas jaana zaroori hai.',

  indiaContext:
    'Duniya mein roughly 3 billion log tension-type headache ya migraine se affected hain. India mein ye burden aur bada hai – stress, heat, dehydration, aur poor sleep iski wajahaat hain.',
  indiaContextSource: 'WHO Global Headache Burden Report',

  severityLevel1: [
    'Dard aaj aaya, kal ya parson theek ho gaya',
    'Tension ya thakaan ke baad aaya – rest se better hota hai',
    'Pani peene ya khana khane ke baad thoda better hua',
    'Sar ke kisi ek hisse mein halka dard – koi aur sign nahi',
    'Pehle bhi aisa dard aaya tha aur khud theek hua tha',
  ],
  severityLevel2: [
    'Ek hafte se zyada se headache lagaataar ya baar baar aa raha hai',
    'Normal painkiller le rahe ho par kaam nahi kar raha',
    'Dard ke saath aankhon ki roshni ya neend affect ho rahi hai',
    'Mahine mein 4 se zyada baar aata hai',
    'Subah uthte hi hota hai – raat ko bhi jagata hai',
  ],
  severityLevel3: [
    'Achanak "thunderclap" jaise bohot tez dard – "meri zindagi ka sabse bada sir dard" type',
    'Sir dard ke saath ek taraf ka haath ya chehra sunn ho jaaye',
    'Dard ke saath ghabrahaat, ulti, aankhon ke aage andhera',
    'Bukhar ke saath gardan ki akadahat – gardan jhukane mein takleef',
    'Sir par chot lagne ke baad dard',
    'Pregnancy mein achanak tez headache (pre-eclampsia ka sign ho sakta hai)',
  ],

  timeline3Days:
    'Naya headache aksar kisi trigger ki wajah se hota hai – dehydration, neend mein kami, ya kuch alag khana-peena. Body adjust kar rahi hoti hai. Pani peeyein, aram karein, screen se door rahein. Agar teen din mein apne aap better nahi hua, to Level 2 mein shift karein – doctor se milein.',
  timeline4Weeks:
    'Ek se char hafte ka headache signal hai ki koi underlying pattern ban raha hai – ho sakta hai tension-type headache chronic ho raha ho, ya koi medical reason ho. Is stage pe sirf painkiller pe depend karna sahi nahi – cause dhundna zaroori hai. Is hafte mein doctor ya homeopath se milein.',
  timelineMonthPlus:
    'Agar mahine bhar se zyada se sir dard aa-jakar hai ya lagaataar bana hua hai – ye chronic headache category hai. Iska matlab koi deeper issue hai – migraine, cervical problem, high BP, anxiety, ya hormonal imbalance. Sirf symptom band karte rehna kaam nahi karega. Doctor se evaluation zaroori hai. Homeopathy chronic headache patterns todni mein madadgar raha hai – individual assessment se.',

  lifestyleCauses: [
    {
      _key: 'lc1',
      causeName: 'Dehydration (Pani Ki Kami)',
      mechanism:
        'Brain ka 75% water hai. Jab body mein pani ki kami hoti hai, blood volume thoda kam hota hai – brain ko oxygen aur glucose ki supply thodi slow ho jaati hai. Saath hi brain ke aas-paas ka fluid (cerebrospinal fluid) bhi slightly reduce hota hai. In dono chezon se brain ke pain-sensitive tissues mein pressure change hota hai – jise hum headache ke roop mein feel karte hain.',
      howToIdentify:
        'Subah uthke ya dhoop mein kuch waqt guzaarne ke baad sir dard shuru ho – aur pani peene ke 20-30 minute mein better lage.',
    },
    {
      _key: 'lc2',
      causeName: 'Screen Time aur Eye Strain (Aankhon Ka Thakna)',
      mechanism:
        'Laptop ya phone ki screen pe zyada der tak focus karne se aankhon ke muscles continuously contract karte hain – inhein relax karne ka mauka nahi milta. Ye continuous muscle tension signal bheji jaati hai brain tak. Saath hi screen ki blue light aur blinking sleep cycle affect karti hai – dono milke frontotemporal headache paida karte hain (sir ke aage aur side mein).',
      howToIdentify:
        'Din mein 4+ ghante screen ke baad dard aata hai – aankhon mein thakaan ya heaviness bhi saath hoti hai.',
    },
    {
      _key: 'lc3',
      causeName: 'Neend Ki Kami Ya Irregular Sleep',
      mechanism:
        'Neend ke dauran brain glymphatic system activate karta hai – ye ek "cleaning system" hai jo brain se metabolic waste products saaf karta hai. Neend puri na ho to ye waste accumulate hota hai. Saath hi sleep deprivation se stress hormones (cortisol) badhte hain aur blood vessels temporarily dilate ho sakti hain – dono headache trigger karte hain.',
      howToIdentify:
        'Subah uthke sir bhaari lagta hai. Raat ko late soye ya sone ka time irregular tha.',
    },
    {
      _key: 'lc4',
      causeName: 'Stress aur Tension (Mansik Tanav)',
      mechanism:
        'Mental stress mein neck, shoulders aur scalp ke muscles tighten ho jaate hain – ye muscle tension seedha sir dard mein convert hoti hai. Cortisol aur adrenaline ke badhne se blood pressure temporarily increase hota hai – aur brain ke vessels pe pressure aata hai. India mein ye sabse common headache type hai – "tension-type headache."',
      howToIdentify:
        'Dard poori khopdi pe belt ki tarah wrap hua lagta hai – sar ke aage aur peechhe dono taraf. Office ke baad ya kisi tense situation ke baad typically zyada hota hai.',
    },
  ],

  medicalCauses: [
    {
      _key: 'mc1',
      diseaseName: 'Migraine',
      diseaseHindiName: 'Adha Sir Dard / Aadha Sar Dard',
      howSymptomPresents:
        'Migraine mein dard aksar sar ke ek hi taraf hota hai – thapthapata hua, bohot tez. Kai logon ko pehle "aura" aata hai – aankhon ke aage roshni ki lakeerein ya andhera. Saath mein ulti, roshni se takleef, aawaz bardaasht nahi hoti. 4 se 72 ghante tak reh sakta hai.',
      howToIdentify:
        'Ek taraf ka thapthapata dard + roshni/aawaz se takleef + kabhi kabhi ulti. Kuch logon mein hormonal cycle se trigger hota hai.',
      homeopediaSlug: 'migraine',
      isAvailable: true,
    },
    {
      _key: 'mc2',
      diseaseName: 'Hypertension (High Blood Pressure)',
      diseaseHindiName: 'High BP / Ucch Raktachaap',
      howSymptomPresents:
        'Hypertension mein headache typically sir ke peechhe hota hai – sar ke pichle hisse mein ya gardan ke upar. Subah uthne ke baad zyada hota hai. BP 160/100 se upar ho to hi aksar headache hota hai – normal range mein headache nahi hota.',
      howToIdentify:
        'Sir peechhe dard + BP high aana. Aksar 50+ umar mein zyada.',
      homeopediaSlug: '',
      isAvailable: false,
    },
    {
      _key: 'mc3',
      diseaseName: 'Sinusitis',
      diseaseHindiName: 'Naak ki Haddi mein Sujan / Sainus Sankraman',
      howSymptomPresents:
        'Sinus headache aksar aankhen, naak, aur maathe ke upar – yaani chehere ke aage hota hai. Jhukne pe dard badhta hai. Naak bhi band rehti hai ya patla paani aata hai. Typically sardi-jukaam ke baad aata hai.',
      howToIdentify:
        'Chehra aage jhukao to dard badhna – plus naak symptoms. Subah zyada hota hai.',
      homeopediaSlug: 'sinusitis',
      isAvailable: true,
    },
    {
      _key: 'mc4',
      diseaseName: 'Cervical Spondylosis',
      diseaseHindiName: 'Gardan Ki Haddi Ki Takleef / Cervical',
      howSymptomPresents:
        'Cervicogenic headache – gardan ki nerves press hone se sar ke pichle hisse mein se dard shuru hota hai aur upar sar tak jaata hai. Gardan ghumaane pe dard badhta hai. Aksar IT professionals aur drivers mein zyada dikhta hai.',
      howToIdentify:
        'Dard gardan se shuru hokar sar tak jaaye – aur neck movement se badhey.',
      homeopediaSlug: 'cervical-spondylosis',
      isAvailable: true,
    },
    {
      _key: 'mc5',
      diseaseName: 'Anxiety & Stress Disorder',
      diseaseHindiName: 'Chinta Rog / Mansik Tanav Vikar',
      howSymptomPresents:
        'Chronic anxiety mein tension-type headache lagaataar bana rehta hai – belt ki tarah poore sar pe. Sleep disturb hoti hai jis se headache aur badhta hai. Aksar din ke end mein zyada hota hai.',
      howToIdentify:
        'Headache ke saath neend mein takleef, chidchidahat, ya bahut zyada chinta kisi baat pe.',
      homeopediaSlug: 'anxiety',
      isAvailable: true,
    },
  ],

  redFlags: [
    'Brain Haemorrhage ya Aneurysm: Agar "thunderclap" headache ho – achanak life ka sabse tez dard – ye medical emergency hai. Ek minute bhi mat ruko.',
    'Meningitis (Dimagi Parda Infection): Tez bukhar ke saath sir dard + gardan akaadna (jhukane mein takleef) – turant hospital jaao. Ye infection brain ke covering pe hoti hai.',
    'Pre-Eclampsia (Sirf Pregnancy Mein): Pregnancy ke doosre ya teesre trimester mein achanak tez headache + aankhon mein dhundla dikhna – ye serious condition ka sign hai. Turant doctor ya hospital.',
  ],

  homeSteps: [
    {
      _key: 'hs1',
      action: 'Paani Peeyein – Fauran',
      whyItWorks:
        'Dehydration headache ka sabse common aur ignored cause hai. 2-3 glass paani seedha piyein. 20-30 minute mein agar dehydration ki wajah tha to better lagna shuru hoga.',
    },
    {
      _key: 'hs2',
      action: 'Andheri aur Shant Jagah Pe Aaram Karein',
      whyItWorks:
        'Headache mein brain light aur noise ke stimuli pe extra sensitive ho jaata hai. Sensory input kam karne se brain ko recover karne ka mauka milta hai – pain signals reduce hote hain.',
    },
    {
      _key: 'hs3',
      action: 'Gardan aur Kandhe Ka Halka Stretch',
      whyItWorks:
        'Tension-type headache mein gardan aur shoulder muscles tense ho jaate hain. Dheere dheere gardan ko left-right, aage-peechhe ghumaana in muscles ko relax karta hai – sir dard ki intensity kam hoti hai. Jhatke se mat karo.',
    },
    {
      _key: 'hs4',
      action: 'Thanda Ya Garm Kapda – Location Ke Hisaab Se',
      whyItWorks:
        'Thanda kapda maathe pe vasodilation (blood vessels ka phelna) ko slow karta hai – migraine-type throbbing dard mein help karta hai. Gardan ke peechhe garm kapda muscle tension relax karta hai – tension headache mein fayda.',
    },
    {
      _key: 'hs5',
      action: 'Screen Band Karo – Kam Se Kam 30 Minute',
      whyItWorks:
        'Eye strain aur blue light exposure headache trigger karte hain. Screen se break lena aankhon ke muscles ko relax karne deta hai aur nervous system ko calm karta hai.',
    },
  ],

  homeopathyIndividualization:
    'Sir dard ka naam ek hai – lekin wajah har insaan mein alag hoti hai. Kisi ka dard subah hota hai, kisi ka raat ko. Kisi ko thapthapata hua, kisi ko poori khopdi pe jakadjane wala. Kisi ka roshni se badhta hai, kisi ka aawaz se. Homeopathy mein sirf "headache" nahi dekha jaata – aapka headache kahan hota hai, kab badhta hai, kya karne se better lagta hai, kitna tez hai, kya saath mein aata hai – yahi sab milke treatment decide karte hain. Isliye ek hi type ke headache mein do alag patients ke liye treatment bilkul alag ho sakta hai.',
  homeopathyRootCause:
    'Baar baar aane wala headache aksar ek deeper pattern ka signal hota hai – digestive imbalance, hormonal shift, chronic stress, ya cervical issue. Homeopathy mein sirf dard band karna goal nahi – jo pattern isko baar baar trigger kar raha hai usse address kiya jaata hai. Waqt ke saath frequency aur intensity dono kam hoti hain. Research is area mein limited hai aur results individual hote hain – lekin chronic headache patterns mein homeopathy complementary role mein helpful raha hai.',
  homeopathySafety:
    'Pregnancy mein, bacchon mein, ya jab pehle se kai medicines chal rahi hon – homeopathy ek safe complementary option hai. Highly diluted medicines hone ki wajah se practically side-effect free hai. Important caveat: severe ya emergency headache (thunderclap, meningitis signs) mein conventional emergency treatment pehle – homeopathy complementary role mein hai, replacement nahi.',

  homeopathyDiseaseLinks: [
    {
      _key: 'hdl1',
      diseaseName: 'Migraine (Adha Sir Dard)',
      diseaseSlug: 'migraine',
    },
    {
      _key: 'hdl2',
      diseaseName: 'Sinusitis (Sinus Dard)',
      diseaseSlug: 'sinusitis',
    },
    {
      _key: 'hdl3',
      diseaseName: 'Cervical Spondylosis (Gardan Ki Takleef)',
      diseaseSlug: 'cervical-spondylosis',
    },
  ],

  isForYouIf: [
    'Aap root cause treat karna chahte hain – sirf baar baar painkiller nahi lena chahte',
    'Aapko sustainable, long-term relief chahiye',
    'Aap pregnancy mein hain, bachcha hai, ya doosri medicines chal rahi hain aur side-effect free option chahiye',
  ],
  notForYouIf: [
    'Abhi isi waqt bohot tez dard hai – pehle painkiller lein ya emergency ho to hospital. Homeopathy baad mein saath shuru kar sakte hain.',
    'Aapka headache thunderclap type hai ya saath mein numbness, bukhar, gardan akadna hai – ye surgical ya emergency category hai. Pehle doctor.',
  ],

  linkedDiseaseCards: [
    {
      _key: 'ldc1',
      title: 'Migraine',
      hindiName: 'Adha Sir Dard',
      slug: 'migraine',
    },
    {
      _key: 'ldc2',
      title: 'Sinusitis',
      hindiName: 'Naak Ki Sujan / Sinus',
      slug: 'sinusitis',
    },
    {
      _key: 'ldc3',
      title: 'Cervical Spondylosis',
      hindiName: 'Gardan Ki Takleef',
      slug: 'cervical-spondylosis',
    },
    {
      _key: 'ldc4',
      title: 'Anxiety Disorder',
      hindiName: 'Chinta Rog',
      slug: 'anxiety',
    },
  ],

  quickFactSymptom:
    'Headache duniya ki sabse common neurological complaint hai – WHO ke anusaar 50% se zyada adults ko har saal headache hota hai.',
  quickFactIndiaStats:
    'India mein lakhs logon ko tension-type headache weekly hota hai – screen time aur stress major factors hain.',
  quickFactDoctorWhen:
    'Thunderclap headache, gardan akadna saath, ya pregnancy mein sudden headache – turant hospital.',

  faqs: [
    {
      _key: 'faq1',
      faqType: 'general',
      q: 'Sir dard kab normal hota hai aur kab doctor zaroori hai?',
      a: '1-2 din ka sir dard jo pani, rest, ya thoda painkiller se theek ho jaaye – wo generally normal hai. Doctor zaroori hai jab dard 1 hafte se zyada rahe, baar baar aaye (mahine mein 4+ baar), ya saath mein bukhar, ulti, gardan akadna, aankhon mein dhundlaahat, ek taraf haath-chehra sunn hona ho. Ek cheez bilkul ignore mat karo: thunderclap headache – achanak life ka sabse tez dard – ye emergency hai, seedha hospital. Homeopathy chronic recurring headache mein help kar sakti hai – lekin pehle serious causes rule out karna zaroori hai.',
    },
    {
      _key: 'faq2',
      faqType: 'general',
      q: 'Sir dard kitne din tak rehna normal hai?',
      a: 'Ek episode mein tension headache 30 minute se 7 din tak reh sakta hai. Migraine 4 se 72 ghante. Agar headache 7 din se zyada lagaataar bana hua hai – bina better hue – to ye "chronic daily headache" ki territory hai aur doctor evaluation zaroori hai. Zyada painkiller lene se "medication overuse headache" bhi ho sakta hai – jo ek alag problem hai. Agar roz ya har doosre din aata hai – sirf painkiller pe depend mat karo, cause dhundho.',
    },
    {
      _key: 'faq3',
      faqType: 'general',
      q: 'Sir dard ka sabse common karan kya hai?',
      a: 'India mein tension-type headache sabse common hai – WHO ke anusaar duniya mein bhi. Iska main cause hai muscle tension – gardan, kandhe, aur scalp ke muscles ka tighten hona. Ye stress, screen time, galat posture (khaas karke laptop/phone use), aur neend ki kami se hota hai. Dehydration doosra sabse common trigger hai – bahut se logon ko pata hi nahi hota ki din mein paani kam peene se sir dard ho sakta hai. Migraine teen logon mein ek ko affect karta hai – khaas karke mahilaon ko.',
    },
    {
      _key: 'faq4',
      faqType: 'general',
      q: 'Ghar pe sir dard mein kab tak reh sakte hain?',
      a: 'Agar dard Level 1 mein hai – yaani naya hai, tez nahi, aur koi serious sign nahi – to ghar pe 2-3 din wait kar sakte hain. Pani peeyein, rest karein, screen se door rahein. Agar 3 din mein better nahi hua – ya achanak tez ho gaya – to doctor se milein. Ek cheez yaad rakho: painkiller baar baar lene se "rebound headache" ho sakta hai – medicine khatam hote hi dard wapas aata hai. Is chakkar mein zyada wait mat karo, cause samjho.',
    },
    {
      _key: 'faq5',
      faqType: 'homeopathy',
      q: 'Kya homeopathy se sir dard mein fayda hota hai?',
      a: 'Homeopathy chronic aur recurring headache mein complementary role mein helpful rahi hai – khaas karke jab conventional medicines se sirf temporary relief milta ho ya side effects problem kar rahe hon. Homeopathy ka fayda ye hai ki ye sirf dard band karna goal nahi rakhta – trigger pattern aur underlying cause address karta hai. Results individual hote hain aur research is area mein limited hai – isliye realistic expectation rakho. Migraine, tension headache, aur sinus headache mein individual constitutional treatment se frequency aur intensity dono mein improvement dekha gaya hai. Potency aur medicine selection sirf trained homeopath karte hain – khud mat try karo.',
    },
    {
      _key: 'faq6',
      faqType: 'general',
      q: 'Sir dard mein kaunsa test karwana chahiye?',
      a: 'Zyaadatar headache mein koi test zaruri nahi hota – doctor typically case history aur examination se diagnosis karta hai. Lekin doctor test recommend kar sakta hai agar: dard achanak bahut tez ho gaya ho (thunderclap), neurological signs hon (numbness, weakness), 50 ke baad naya headache pattern shuru hua ho, ya bukhar ke saath ho. Common tests: BP check (hamesha), blood tests (CBC, thyroid, sugar), MRI/CT scan sirf specific red flags mein. CT scan routine nahi hai – radiation hota hai – doctor ke guidance par hi karwana.',
    },
    {
      _key: 'faq7',
      faqType: 'general',
      q: 'Bacchon mein baar baar sir dard kyun hota hai?',
      a: 'Bacchon mein bhi tension-type headache common ho gaya hai – khaas karke school-going age (8-15 saal) mein. Main reasons hain: heavy school bag, zyada screen time, neend ki kami, aur exam stress. Migraine bacchon mein bhi hota hai – aksar pet dard ke saath (abdominal migraine). Agar bachche ko mahine mein 2 se zyada baar sir dard ho, school miss hone lage, ya vision mein takleef ho – paediatrician se milein. Bacchon mein homeopathy safe hai – side effects nahi – aur trigger pattern dhundh ke long-term management mein help karta hai.',
    },
    {
      _key: 'faq8',
      faqType: 'general',
      q: 'Pregnancy mein sir dard normal hai kya?',
      a: 'Pehle trimester mein headache common hai – hormonal changes ki wajah se. Aksar dehydration aur low blood sugar bhi contribute karte hain. Ye generally harmless hota hai. Lekin doosre ya teesre trimester mein achanak tez headache – khaas karke aankhon mein dhundlaahat, haath-chehra soojna, ya BP high hone ke saath – pre-eclampsia ka sign ho sakta hai. Ye serious condition hai – turant doctor ya hospital. Pregnancy mein koi bhi painkiller khud se mat lo – doctor ki guidance le lo. Homeopathy pregnancy mein safe complementary option hai – lekin sirf trained homeopath ke saath, self-medication nahi.',
    },
    {
      _key: 'faq9',
      faqType: 'general',
      q: 'Gas se sir dard kyun hota hai?',
      a: 'Ye India mein bahut common complaint hai aur sach mein hota hai. Digestive system aur brain "gut-brain axis" se connected hain. Zyada gas ya bloating ke waqt bowel pressure badhta hai – vagus nerve irritate hoti hai – jo sir dard trigger kar sakta hai. Kabz (constipation) bhi headache ka karan banta hai. Khali pet rehne se – jaise ki fast ke baad ya subah nashta skip karne pe – blood sugar girna bhi headache cause karta hai. Agar khana khaane ke baad ya gas pass hone ke baad sir dard better hota ho – ye digestive trigger hai. Homeopathy mein digestive aur headache pattern saath dono address kiye jaate hain.',
    },
    {
      _key: 'faq10',
      faqType: 'general',
      q: 'Baar baar sir dard kyun aata hai?',
      a: 'Baar baar aane wala headache aksar ek trigger pattern hai jo identify nahi kiya gaya. Common patterns: roz subah same time (cervical ya BP), har period se pehle (hormonal migraine), office se ghar aate waqt (tension/stress), khana skip karne ke baad (low blood sugar). "Medication overuse headache" bhi baar baar aata hai – agar hafte mein 2-3 baar painkiller le rahe ho to medicine khud ek trigger ban jaati hai. Baar baar aane wale headache ki diary rakhein – kab aaya, kya kha raha tha, neend kaisi thi, stress tha kya – 2-3 hafte mein pattern dikha. Ye doctor ko bhi aur homeopath ko bhi accurate diagnosis mein help karta hai.',
    },
    {
      _key: 'faq11',
      faqType: 'homeopathy',
      q: 'Sir dard se hamesha ke liye kaise chutkara milega?',
      a: '"Permanent cure" ka vaada koi bhi system honestly nahi kar sakta – aur koi kare to doubt karo. Jo realistic hai: trigger management se 80% cases mein frequency bahut kam ho jaati hai. Kuch logon ka headache saalon baad practically band ho jaata hai – khaas karke jab lifestyle triggers remove ho jaayein. Homeopathy chronic headache ki pattern todni mein madadgar raha hai – results individual hote hain. Jo zaroor karo: trigger diary rakho, hydration maintain karo, sleep regular karo, screen breaks lo, posture check karo. Migraine ke liye preventive treatment (conventional ya homeopathic) long-term frequency ghata sakti hai – sirf episode pe react karna enough nahi hota.',
    },
    {
      _key: 'faq12',
      faqType: 'general',
      q: 'Subah uthke sir mein dard kyun hota hai?',
      a: 'Subah ka headache ek common complaint hai aur iski kai wajahaat hoti hain. Sabse common: high BP (BP raat ko naturally thoda high hota hai – monitoring karwayein), sleep apnea (raat ko saans ruk ruk ke aata hai – bohot common, pata nahi hota), dehydration (raat bhar paani nahi liya), bruxism (raat ko daant peesna – sar ke pehle hisse mein dard), ya hormonal changes. Agar consistently subah uthke dard ho to sirf painkiller mat lo – BP ek baar check zaroor karwao. Agar koi aur bole ki raat ko khurraate ho to sleep apnea evaluation karo.',
    },
  ],

  relatedSymptoms: [
    {
      _key: 'rs1',
      title: 'Nausea (Ulti Ka Mann)',
      hindiName: 'Jee Matlana',
      slug: 'nausea',
    },
    {
      _key: 'rs2',
      title: 'Dizziness (Chakkar Aana)',
      hindiName: 'Sir Ghoomna',
      slug: 'dizziness',
    },
    {
      _key: 'rs3',
      title: 'Eye Strain (Aankhon Mein Dard)',
      hindiName: 'Aankhein Thakna',
      slug: 'eye-strain',
    },
    {
      _key: 'rs4',
      title: 'Neck Pain (Gardan Dard)',
      hindiName: 'Gardan Mein Dard',
      slug: 'neck-pain',
    },
  ],

  sources: [
    {
      _key: 'src1',
      name: 'World Health Organization – Headache Disorders Fact Sheet | 2023',
    },
    {
      _key: 'src2',
      name: 'Mayo Clinic – Headache: Symptoms & Causes | 2024',
    },
    {
      _key: 'src3',
      name: 'NCBI / National Library of Medicine – Tension-Type Headache: Review and Update | 2020',
    },
    {
      _key: 'src4',
      name: 'NHS UK – Headaches: Causes and When to See a Doctor | 2023',
    },
  ],
}

async function seed() {
  console.log('🌱 Seeding Headache symptom page...')
  await client.createOrReplace(symptom)
  console.log('✅ Symptom seeded — homeopedia.in/symptoms/headache')
}

seed().catch(console.error)
