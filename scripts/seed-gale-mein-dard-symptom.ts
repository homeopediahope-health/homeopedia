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
  _id: 'symptom-gale-mein-dard',
  _type: 'symptom',
  title: 'Gale Mein Dard (Throat Pain / Sore Throat)',
  hindiName: 'Gale Mein Dard / Gala Kharab Hona',
  slug: { _type: 'slug', current: 'gale-mein-dard' },
  metaTitle: 'Gale Mein Dard — Karan, Lakshan aur Homeopathic Ilaaj | Homeopedia',
  metaDescription:
    'Gale mein dard ya kharash kyun hoti hai? Infection, tonsils ya kuch aur? Karan, lakshan aur homeopathic upay — Hindi mein. Homeopedia pe padho.',
  heroText:
    'Gale mein dard hona ek aisi takleef hai jo har cheez mein rukawat daal deti hai – kuch peena mushkil, kuch khana aur baat karna bhi dard karta hai. Kabhi subah uthte hi gala raspta hai, kabhi chai peene ke baad ek ajeeb si jalan – aur kabhi sirf nigalne mein itna dard hota hai ki pata nahi kya karein.\n\nGale mein dard (throat pain) India mein saal bhar – khaaskar sardi ke mausam mein aur garmiyon mein AC ke zarurat se – bahut common complaint hai. Ye page aapko 2 minute mein batayega: aapka case serious hai ya ghar pe manage ho sakta hai, aur aage kya karna chahiye.',

  indiaContext:
    'WHO ke anusar respiratory tract infections – jinmein throat infection sabse common hai – globally har saal 1 billion se zyada cases record hote hain, aur India ek high-burden desh hai. Zyada pollution, seasonal changes aur crowded living conditions is symptom ko aur common banate hain.',
  indiaContextSource: 'WHO – Respiratory Tract Infections Global Burden Report',

  severityLevel1: [
    'Gale mein halka dard ya raspahat – nigalne mein thoda uncomfortable lekin kha-pi pa rahe hain',
    'Gala subah uthke zyada kharab lagta hai lekin din mein thoda better hota hai',
    'Saath mein sirf halki khansi ya naak behna – bukhar nahi',
    '2-3 din se hai lekin badh nahi raha',
    'Awaaz thodi baith gayi hai lekin bilkul band nahi',
  ],
  severityLevel2: [
    'Gale mein dard ke saath 100°F se zyada bukhar – especially agar 2 din se zyada ho',
    'Nigalna itna mushkil ho gaya hai ki pani bhi mushkil lag raha hai',
    'Gale mein dard ek hafte se zyada hai aur behtar nahi ho raha',
    'Gale ke andar soojan ya white patches dikh rahe hain',
    'Awaaz 3-4 din se bilkul nahi aa rahi',
    'Kaano mein bhi dard shuru ho gaya hai saath mein',
  ],
  severityLevel3: [
    'Saans lene mein takleef ho rahi hai ya saans ki awaaz alag lag rahi hai (stridor)',
    'Thook ya paani bilkul nahi nig pa rahe – drooling ho raha hai',
    'Muh khulna hi mushkil ho gaya hai – jaw lock jaisa',
    'Gale mein dard ke saath gardan akad gayi hai ya jhukana bahut dardnak hai',
    'Bachche mein tez bukhar ke saath saans lene ki takleef (emergency – turant jaao)',
    'Awaaz mein achanak "hot potato voice" – thoda mota aur dab hua sund raha ho',
  ],

  timeline3Days:
    'Nayi shuru hoti throat pain zyada-tar ek viral infection (common cold ya flu virus) ki shuruwat hoti hai. Body ka immune system abhi lad raha hai – ye natural process hai. Ghar pe rest, gungune pani se gargle aur warm liquids kaafi hote hain. Agar 3 din mein clearly better nahi ho raha – Level 2 check karo.',
  timeline4Weeks:
    'Agar gale ka dard 3-4 din mein better nahi hua ya bukhar aa gaya – ab sirf ghar pe mat raho. Ye bacterial infection (strep throat) ya koi aur cause ho sakti hai jo doctor se dikhane ki zaroorat hai. Khud antibiotic mat lo – test ke baad doctor decide karega. Ye homeopathy evaluation ka bhi sahi time hai.',
  timelineMonthPlus:
    'Agar gale mein dard baar baar aata hai – mahine mein ek do baar – ya 2 hafte se zyada ek hi episode chal raha hai to ye deeper cause ka signal hai. Acid reflux, chronic tonsillitis, allergy ya koi aur systemic condition investigate karni chahiye. Sirf symptom treat karte rehna enough nahi – is pattern ko doctor se discuss karo. Homeopathy is tarah ke chronic recurring throat pain mein khaas taur pe kaam karta hai.',

  lifestyleCauses: [
    {
      _key: 'lc1',
      title: 'Viral Infection (Common Cold / Flu)',
      mechanism:
        'Zyada-tar gale ka dard ek virus ki wajah se hota hai – rhinovirus, influenza, ya coronavirus. Ye viruses throat ki lining cells mein ghus jaate hain aur unhe damage karte hain. Is damage ki response mein body inflammation (sujan) bhejti hai – aur ye sujan hi nigalte waqt dard deti hai. Virus se ho to gala raspa, khaansi, naak behna – sab saath milta hai.',
      recognition:
        'Dhire dhire shuru hota hai – ek do din mein develop hota hai. Aksar saath mein naak behna ya band hona, halka bukhar, aur thakaan bhi hogi.',
    },
    {
      _key: 'lc2',
      title: 'Dry Air / AC / Pollution',
      mechanism:
        'Sardi mein heater se hawa bahut dry ho jaati hai. AC bhi air ka moisture kheench leta hai. Ye dry air throat ki moist lining ko sukha deti hai – jab ye lining dry hoti hai to nerve endings irritate hoti hain aur brain ko dard ka signal milta hai. Ye khaaskar subah uthte hi zyada hota hai – raat bhar ek hi jagah sote ho.',
      recognition:
        'Subah uthke sabse zyada raspahat – din mein kuch pani pine ke baad thoda better ho jaata hai. Koi bukhar nahi, soojan nahi.',
    },
    {
      _key: 'lc3',
      title: 'Zyada Bolna / Chillana / Singing',
      mechanism:
        'Vocal cords aur throat ki muscles ek limit tak kaam karti hain. Zyada der tak bolne – teachers, singers, presenters – ya chillane se in muscles mein strain aa jaata hai. Saath hi vocal cords pe micro-abrasions ho jaati hain. Ye strain hi dard aur awaaz ka baith jaana paida karta hai.',
      recognition:
        'Dard specifically bolne ya awaaz nikalne mein hota hai – nigalne mein thoda less. Zyada baat karne ke baad achanak hota hai.',
    },
    {
      _key: 'lc4',
      title: 'Acid Reflux (GERD – Pait ka Tezab Upar Aana)',
      mechanism:
        'Pait ka acid kabhi kabhi esophagus (food pipe) se upar throat tak aa jaata hai – isko GERD ya acid reflux kehte hain. Ye acid throat ki lining ko irritate karta hai aur ek chronic, dull dard deta hai – jo subah zyada hota hai ya raat ko letne ke baad. Ye bahut commonly miss ho jaata hai kyunki seedha heartburn feel nahi hota.',
      recognition:
        'Gale mein ek khatti si feeling, subah uthke khansi, raat ko letne ke baad symptoms badh jaana – aur often koi naak behna ya bukhar nahi.',
    },
  ],

  medicalCauses: [
    {
      _key: 'mc1',
      diseaseName: 'Tonsillitis (Tonsil Ka Infection)',
      hindiName: 'Gale Ki Gailtiyaan / Tonsil Ki Sujan',
      description:
        'Tonsils – throat ke dono taraf ki soft tissue – jab bacteria ya virus se infected ho jaati hain to wo soojan jaati hain. Ye soojan hi gale mein intense dard deti hai – especially nigalte waqt. Aksar ek taraf zyada dard hota hai.',
      recognition:
        'Aaina mein munh kholke dekho – agar gale ke dono taraf lal ya white patches wali soojan dikh rahi hai, aur dard bahut intense hai tez bukhar ke saath – ye tonsillitis ke signs hain.',
      diseaseSlug: 'tonsillitis',
      isAvailable: true,
    },
    {
      _key: 'mc2',
      diseaseName: 'Pharyngitis (Gale Ki Sujan / Strep Throat)',
      hindiName: 'Gale Ki Lining Ka Infection',
      description:
        'Pharyngitis mein throat ki back wall ki lining inflamed ho jaati hai – usually Streptococcus bacteria ya virus ki wajah se. Dard typically nigalte waqt zyada hota hai, gala lal dikhta hai, aur aksar tez bukhar aati hai. Strep pharyngitis mein antibiotics zaroori ho sakte hain.',
      recognition:
        'Achanak shuru hone wala tez dard, tez bukhar (101°F+), lekin naak behna ya khansi kam – ye strep ka classic pattern hai. Throat swab test se confirm hota hai.',
      diseaseSlug: '',
      isAvailable: false,
    },
    {
      _key: 'mc3',
      diseaseName: 'Laryngitis (Awaaz Ka Chale Jaana)',
      hindiName: 'Aawaz Ki Takleef / Gale Ki Sujan',
      description:
        'Larynx (voice box) ki lining inflamed ho jaati hai – zyada tar overuse, virus, ya dry air se. Gale mein dard ke saath awaaz kaafi baith jaati hai ya bilkul chali jaati hai. Bolna painful lagta hai.',
      recognition:
        'Awaaz bahut hoarse ya bilkul band – ye laryngitis ka main sign hai. Teachers, singers, ya jis din kaafi bolne ke baad ho – aur gale mein dard bolne mein zyada ho.',
      diseaseSlug: '',
      isAvailable: false,
    },
    {
      _key: 'mc4',
      diseaseName: 'GERD / Acid Reflux (Pait Ka Tezab Gale Tak)',
      hindiName: 'Pait Ka Tezab / Acidity Upar Aana',
      description:
        'Jab stomach acid regularly esophagus se upar throat tak aata hai to throat ki lining chronically irritate rehti hai. Ye ek ajeeb chronic dard deta hai – daawa nahi dikhta seedha. Subah uthte hi raspahat, throat clearing ki zaroorat, khansi.',
      recognition:
        'Gale ka dard khane ke baad ya letne ke baad badh jaata hai. Koi clear infection signs nahi. Aksar heartburn bhi hoti hai lekin hamesha nahi.',
      diseaseSlug: 'gerd',
      isAvailable: true,
    },
    {
      _key: 'mc5',
      diseaseName: 'Allergic Rhinitis / Post-Nasal Drip',
      hindiName: 'Allergy Se Gale Mein Dard',
      description:
        'Nasal allergy mein naak se ek continuous mucus (naak ka paani) throat ke peeche ki taraf girta rehta hai – isko post-nasal drip kehte hain. Ye constant dripping throat ko irritate karta hai aur ek dull, raspa-raspa sa dard deta hai – especially subah. Aksar khansi bhi hoti hai.',
      recognition:
        'Dard typically moderate hota hai, aane-jaane wala – dust ya pollution mein badhta hai. Saath mein naak band rehna ya behna. Koi tez bukhar nahi.',
      diseaseSlug: 'allergic-rhinitis',
      isAvailable: true,
    },
  ],

  redFlags: [
    'Peritonsillar Abscess (Pus ka ikatta hona) – agar gale mein dard ke saath muh khulna mushkil ho jaaye ya ek taraf bahut intense dard ho tez bukhar ke saath – ye pus collection hai, turant ENT doctor chahiye',
    'Epiglottitis – agar gala achanak bahut severe ho jaaye, saans ki awaaz aane lage (stridor), aur letne pe relief nahi mile – ye medical emergency hai, turant hospital',
    'Throat Cancer (rare) – agar ek taraf ka gale ka dard 3 hafte se zyada ho, awaaz permanently baith gayi ho, ya gardan mein dono taraf soft ganthen ho – ye investigate karna zaroori hai. Smokers aur tobacco users ko zyada dhyan dena chahiye',
  ],

  homeSteps: [
    {
      _key: 'hs1',
      step: 'Gungune Namak Wale Pani Se Gargle Karo',
      reason:
        'Namak (salt) ek natural osmotic agent hai – ye throat ki soojan wali cells se extra fluid kheench leta hai, jisse sujan thodi kam hoti hai. Gunguna pani blood flow badhata hai, jo healing mein help karta hai. Subah uthke aur raat sone se pehle – ek baar zaroor karo.',
    },
    {
      _key: 'hs2',
      step: 'Gala Aur Throat Ko Hydrated Rakho – Baar Baar Ghoont Lete Raho',
      reason:
        'Dry throat mein nerve endings zyada irritated hoti hain. Gunguna pani, herbal tea (plain – bina zyada mitha), ya warm lemon water throat ki lining ko moist rakhta hai – irritation kam hoti hai aur healing better hoti hai. Thanda paani aur cold drinks avoid karo – ye spasm trigger kar sakte hain.',
    },
    {
      _key: 'hs3',
      step: 'Awaaz Ko Rest Do – Kam Bolna',
      reason:
        'Agar throat mein dard hai aur awaaz bhi prabhavit hai – bolna vocal cords pe strain badhata hai. Jitna possible ho, rest do. Whispering (fuskarna) actually avoid karo – ye seedha bolne se zyada strain dalta hai vocal cords pe, medical fact hai ye.',
    },
    {
      _key: 'hs4',
      step: 'Upright Position Mein Sona',
      reason:
        'Flat letne pe stomach acid aur mucus dono throat ki taraf gravity ke saath shift ho sakte hain – dono irritants hain. Ek extra pillow se thoda sar upar rakhne pe raat ke waqt irritation significantly kam hoti hai.',
    },
    {
      _key: 'hs5',
      step: 'Naak Ko Clear Rakho – Saline Rinse Use Karo',
      reason:
        'Agar naak band hai ya behti hai to wo mucus throat pe girti rehti hai (post-nasal drip). Saline nasal rinse (normal saline – bina medicine) naak ko flush karta hai. Jab naak ka drainage kam hoga, throat ki irritation bhi kam hogi.',
    },
  ],

  homeopathyAngle1:
    'Gale mein dard ka naam ek hai – lekin jo patient clinic mein aate hain, unka dard alag alag hota hai. Kisi ka dard sirf nigalte waqt hota hai. Kisi ko khaali throat clear karte waqt dard hota hai. Kisi ko garm cheez se better lagta hai, kisi ko thanda paani se. Kisi ka dard subah zyada, kisi ka raat ko. Homeopathy mein sirf "gale mein dard" nahi dekha jaata – aapki khujli kaisi hai, kab badhti hai, kya se relief milta hai – ye saari details treatment decide karti hain. Isliye do logon ko ek hi symptom ho sakta hai lekin unka treatment bilkul alag ho sakta hai.',
  homeopathyAngle2:
    'Baar baar hone wala gale ka dard aksar ek deeper pattern ka signal hota hai – koi ek infection nahi, koi ongoing susceptibility hai. Homeopathy mein sirf aaj ka dard band karna goal nahi – jo kuch isko baar baar la raha hai, us pattern ko address kiya jaata hai. Waqt ke saath episodes ki frequency aur intensity dono kam hoti hain. Research is area mein limited hai aur results individual hote hain – lekin chronic recurring cases mein ye approach difference deta hai.',
  homeopathyAngle3:
    'Khaaskar bachon mein gale ka dard bahut common hai – aur parents naturally pareshaan hote hain frequent antibiotics se. Homeopathy highly diluted medicines ka use karti hai jisse practically koi side-effects nahi hote – isliye ye bacchon, pregnant women, aur elderly patients mein safely use ho sakti hai conventional treatment ke saath-saath. Severe infections ya aisa case jahan antibiotics doctor ne diagnose karke diye hain – unhe pehle lein. Homeopathy complementary role mein kaam karta hai – replacement nahi.',

  homeopathyDiseaseLinks: [
    { _key: 'hdl1', diseaseName: 'Tonsillitis (Tonsil Ka Infection)', diseaseSlug: 'tonsillitis' },
    { _key: 'hdl2', diseaseName: 'GERD / Acid Reflux', diseaseSlug: 'gerd' },
    { _key: 'hdl3', diseaseName: 'Allergic Rhinitis', diseaseSlug: 'allergic-rhinitis' },
  ],

  homeopathyIsFor: [
    'Gale ka dard baar baar aata hai – aap pattern todna chahte hain sirf ek baar treat karne ke nahi',
    'Aap apne bacche ya elderly family member ke liye side-effect free option dhundh rahe hain',
    'Doctor ne check kiya hai, infection serious nahi hai – aur aap root cause approach prefer karte hain',
    'Conventional treatment ke saath-saath supplementary support chahiye',
  ],
  homeopathyNotFor: [
    'Abhi is waqt tez bukhar, saans lene mein takleef ya kuch nahi nig pa rahe – pehle emergency care lein. Homeopathy baad mein recovery mein saath chala sakte hain',
    'Doctor ne confirmed infection ke liye specific medicine di hai – pehle wo poori karo',
  ],

  linkedDiseaseCards: [
    { _key: 'ldc1', title: 'Tonsillitis', hindiName: 'Tonsil Ki Sujan', slug: 'tonsillitis' },
    { _key: 'ldc2', title: 'GERD / Acid Reflux', hindiName: 'Pait Ka Tezab', slug: 'gerd' },
    { _key: 'ldc3', title: 'Allergic Rhinitis', hindiName: 'Naak Ki Allergy', slug: 'allergic-rhinitis' },
  ],

  faqs: [
    {
      _key: 'faq1',
      faqType: 'general',
      question: 'Gale mein dard hone ka sabse common karan kya hai?',
      answer:
        'Gale mein dard ka sabse common karan viral infection hai – usually common cold ya flu virus. India mein kareeb 70-80% throat pain cases viral hote hain, bacterial nahi. Iska matlab ye hai ki antibiotics aksar zaruri nahi hote.\n\nVirus throat ki lining cells mein ghus jaata hai – body immune response bhejti hai – ye response hi dard aur sujan deti hai. Common triggers hain: mausam badalna, AC se seedha bahar jaana, ya already sick kisi ke qareeb rehna.\n\nDusra common cause hai dry air – AC ya heater ki wajah se – jo throat ki lining ko irritate karta hai bina infection ke.\n\nAgar 3-4 din mein better nahi hua ya tez bukhar aayi to doctor se milein.',
    },
    {
      _key: 'faq2',
      faqType: 'general',
      question: 'Gale mein dard kab tak rehta hai – kitne din normal hai?',
      answer:
        'Viral gale ke dard mein – jo common cold ka hissa ho – usually 5-7 din mein apne aap better ho jaata hai.\n\nPehle 2-3 din zyada bura lagta hai – phir dhire dhire theek hota hai. Ye normal pattern hai.\n\nAgar 7 din ke baad bhi same level ka dard hai – ya agar pehle 3-4 din mein achanak tez bukhar aa gayi – to ye bacterial infection ka sign ho sakta hai jo doctor se dikhana zaroori hai.\n\nBaar baar hone wala gale ka dard (mahine mein ek ya zyada baar) ek pattern hai jo deeper cause ki taraf point karta hai. Ye pattern investigate karna zaroori hai.',
    },
    {
      _key: 'faq3',
      faqType: 'general',
      question: 'Gale mein dard aur bukhar dono hain – kya ye serious hai?',
      answer:
        'Gale mein dard ke saath halka bukhar (99-100°F) – pehle 2-3 din mein – aksar normal viral response hai.\n\nLekin ye signs hon to is hafte doctor zaroor dikhaayein:\n- Bukhar 101°F se zyada – 2 din se zyada bana rahe\n- Nigalna itna mushkil ho jaaye ki paani bhi mushkil lage\n- Gale mein andar white patches ya pus dikhne lage\n- Kaano mein bhi dard shuru ho jaaye\n\nAur ye signs hon to turant hospital jaayein – minute mat waste karo:\n- Saans lene mein koi bhi takleef\n- Thook nahi nig pa rahe\n- Gardan akad gayi hai ya jhukana bahut painful hai',
    },
    {
      _key: 'faq4',
      faqType: 'general',
      question: 'Gale mein dard mein ghar pe kya karna chahiye?',
      answer:
        'Ghar pe ye karo – ye safe aur helpful steps hain:\n- Gungune namak wale pani se gargle karo – subah aur raat (ek glass gungune pani mein adha chammach namak)\n- Baar baar gunguna pani peete raho – gala dry mat rehne do\n- Agar awaaz bhi prabhavit hai to bolna kam karo\n- Sar thoda upar karke soo – extra pillow se\n- Naak band hai to saline drops use karo\n\nKya avoid karo: thanda paani, ice cream, cold drinks – ye throat mein spasm kar sakte hain aur dard badha sakte hain kai logon mein.\n\nYe steps sirf comfort ke liye hain – koi bhi medicine naam is list mein nahi hai. Agar 3 din mein better nahi hua – doctor se milein.',
    },
    {
      _key: 'faq5',
      faqType: 'homeopathy',
      question: 'Kya homeopathy gale mein dard mein kaam karta hai?',
      answer:
        'Haan – homeopathy gale mein dard mein kaam karta hai, lekin ye samajhna zaroori hai kaise aur kab.\n\nAcute viral throat pain mein – jo common cold ka hissa ho – homeopathy comfort support de sakti hai. Research is area mein limited hai lekin clinical use mein kai practitioners ne effective results dekhe hain.\n\nChronic ya recurring gale mein dard mein – jo baar baar aata ho – homeopathy zyada zaroori role nikhal sakti hai. Yahan goal ye nahi ki ek episode treat karo – goal hai frequency aur intensity dono kam karna waqt ke saath.\n\nLekin important: agar doctor ne bacterial infection diagnose ki hai aur antibiotics diye hain – wo poori karo. Homeopathy iske saath saath chal sakti hai – uski jagah nahi. Results individual hote hain – ek hi medicine sab ke liye nahi – isliye qualified homeopath se milna zaroori hai.',
    },
    {
      _key: 'faq6',
      faqType: 'general',
      question: 'Gale mein dard ho to kya khana chahiye – kya nahi?',
      answer:
        'Gale mein dard mein kya comfortable rehta hai – aur kya nahi:\n\nComfortable rehta hai:\n- Gunguna dalia, khichdi, ya soup – soft aur warm\n- Gunguna pani, herbal tea (plain)\n- Curd – thanda nahi, room temperature par\n- Shehad (honey) wali gunguni chai – irritation mein soothing hota hai\n\nUncomfortable ya problematic ho sakta hai:\n- Thandi cheezein – ice cream, cold drinks, fridge ka paani (ye sab kai logon mein spasm badhate hain)\n- Khattas ya spicy khana – acid reflux component ho to irritation badhata hai\n- Seedhi rassi wali cheezein – chips, crackers – ye throat ko scratch karte hain\n\nYe sirf general comfort tips hain – disease-specific guidance disease page pe milegi.',
    },
    {
      _key: 'faq7',
      faqType: 'general',
      question: 'Bacchon mein baar baar gale mein dard kyun hota hai?',
      answer:
        'Bacchon mein gale mein dard adults se zyada common hota hai – kyunki unka immune system abhi develop ho raha hota hai. School mein close contact se infections tezi se spread hote hain.\n\nAgar bacha baar baar (mahine mein 2-3 baar ya zyada) throat infection se pareshan hai – to ye tonsil problem ya recurring strep infection ho sakti hai jo investigate karni chahiye.\n\nKab doctor zaroor dikhaayein:\n- 38.5°C (101.5°F) se zyada bukhar gale ke dard ke saath\n- Bacha kuch bhi nahi nig pa raha – bilkul refuse kar raha hai\n- Bahut thaka hua, lethargic lag raha hai\n- Raat ko saans lene mein takleef ya bahut loud snoring\n\nBacchon mein gale ke dard mein homeopathy ek safe complementary option hai – lekin bacterial infection ho to doctor ki advice pehle.',
    },
    {
      _key: 'faq8',
      faqType: 'general',
      question: 'Gale mein dard aur khansi saath mein – kya karein?',
      answer:
        'Gale mein dard aur khansi saath mein aana – ye zyada-tar ek common viral upper respiratory infection ka pattern hai. Alag alag cheezein nahi, ek hi infection ke do symptoms hain.\n\nIs case mein: viral hai to 7-10 din mein apne aap better hota hai. Ghar pe rest, hydration, warm gargles help karte hain. Khansi se throat aur irritate hoti hai – ek vicious cycle ban jaata hai.\n\nLekin ye signs hon to seedha doctor jaayein:\n- Khansi mein blood aa raha ho\n- Gale mein dard ek taraf bahut intense ho\n- Khansi ke saath saans ki takleef bhi ho\n\nBaar baar khansi + gale ka dard combination allergic rhinitis (naak ki allergy) ka bhi sign ho sakta hai – jo post-nasal drip se throat ko irritate karti hai.',
    },
    {
      _key: 'faq9',
      faqType: 'general',
      question: 'Gale mein dard mein garam chai peena theek hai?',
      answer:
        'Haan – gunguni chai (very hot nahi) gale mein dard mein generally soothing hoti hai.\n\nGunguna liquid throat ki dry lining ko hydrate karta hai aur blood flow badhata hai – dono healing mein help karte hain. Ginger (adrak) ya tulsi wali chai naturally mildly anti-inflammatory hoti hai.\n\nLekin dhyan do – bahut zyada garam chai mat piya karo. Boiling hot liquid throat ki already damaged lining ko aur irritate kar sakta hai. "Piyo jab comfortable ho – jala nahi deta" – ye simple test hai.\n\nAgar acid reflux (pait ka tezab) bhi hai – toh zyada black tea ya chai avoid karo, ye acid production badha sakti hai. Chai ek comfort step hai – koi medicine nahi.',
    },
    {
      _key: 'faq10',
      faqType: 'general',
      question: 'Gale mein dard baar baar kyun aata hai?',
      answer:
        'Baar baar gale mein dard aana sirf bad luck nahi – ek pattern hai jisko samajhna zaroori hai.\n\nCommon reasons:\n- Tonsil problem: Agar tonsils chronically infected hain to wo baar baar flare up hote hain. Ye specially bachon mein common hai\n- Acid Reflux (GERD): Pait ka tezab regularly throat tak aata hai – chronic irritation hoti hai. Ye bahut aksar miss ho jaata hai\n- Allergy: Naak ki allergy se post-nasal drip hoti rehti hai – jo throat ko constantly irritate karti hai\n- Immune system ka weak hona: Bahut zyada stress, poor sleep, ya nutritional gaps se body baar baar same infections pakad leti hai\n\nBaar baar aane wale gale ke dard mein sirf ek episode treat karte rehna enough nahi hai – is pattern ki jaad dhundho. Homeopathy is specific angle pe kaam karta hai.',
    },
    {
      _key: 'faq11',
      faqType: 'general',
      question: 'Gale mein dard mein kaunsa test karwana chahiye?',
      answer:
        'Zyada-tar gale ke dard mein koi test ki zaroorat nahi hoti – doctor physical examination se decide kar leta hai.\n\nLekin kuch situations mein ye tests ho sakte hain:\n- Throat Swab (Rapid Strep Test ya Culture): Bacterial infection confirm karne ke liye\n- Complete Blood Count (CBC): Agar bukhar baar baar aa rahi ho ya infection bahut severe ho\n- Mono Spot Test: Agar bahut thakaan, soojan wale lymph nodes aur severe throat pain ho\n- ENT examination (Laryngoscopy): Agar awaaz ki takleef zyada ho ya doctor ko deeper cause ka shak ho\n\nImportant: Ye tests khud mat order karo – doctor decide karta hai kaunsa zaroori hai. Test ke bina khud antibiotic lena avoid karo – ye antibiotic resistance ka ek main reason hai India mein.',
    },
    {
      _key: 'faq12',
      faqType: 'homeopathy',
      question: 'Kya gale mein dard se hamesha ke liye chutkara mil sakta hai?',
      answer:
        '"Hamesha ke liye" ka vaada koi bhi system honestly nahi kar sakta – aur koi kare to doubt karo.\n\nJo realistic hai: Agar cause treatable hai (jaise tonsil problem, acid reflux, ya allergy) – to cause treat karne ke baad episodes bahut dramatically kam ho jaate hain ya band ho jaate hain. Agar recurring viral infections hain – immune system ko strengthen karna (sleep, nutrition, stress management) se frequency aur severity dono kam hoti hai.\n\nHomeopathy chronic recurring cases mein is specific goal ke saath kaam karta hai – aapki susceptibility ko address karna, sirf ek episode nahi. Results individual hote hain aur time lagte hain – lekin pattern change ho sakta hai.\n\nRealistic expectation: "Gale ka dard baar baar nahi aayega, aur agar aaya to itna severe nahi hoga." Ye practical goal hai – aur achievable bhi.',
    },
  ],

  consultationHeading: 'Apna Symptom Samajh Aa Gaya – Ab Kya Karein?',
  consultationBody:
    'Gale mein dard ek symptom hai – lekin wajah har insaan mein alag hoti hai. Kisi ko infection se hai, kisi ko reflux se, kisi ko allergy se. Aur ilaaj bhi isliye alag hona chahiye. Dr. Shadab se ek consultation mein aap jaanenge ki aapke gale ke dard ke peeche exactly kya hai – aur homeopathy aapke specific case ke liye kaise kaam kar sakti hai.',
  consultationCTA: 'Dr. Shadab Se Milein →',
  trustLine: '15+ Saalon Ka Clinical Experience | Nagpur',

  relatedSymptoms: [
    { _key: 'rs1', title: 'Gale Mein Kharash (Scratchy Throat)', hindiName: 'Gale Mein Raspahat', slug: 'gale-mein-kharash' },
    { _key: 'rs2', title: 'Awaaz Baith Jaana (Hoarseness)', hindiName: 'Awaaz Ki Takleef', slug: 'awaaz-baith-jaana' },
    { _key: 'rs3', title: 'Khansi (Cough)', hindiName: 'Khaansi', slug: 'khansi' },
    { _key: 'rs4', title: 'Bukhar (Fever)', hindiName: 'Bukhaar / Tap', slug: 'bukhar' },
  ],

  sources: [
    {
      _key: 'src1',
      title: 'World Health Organization – Respiratory Tract Infections Global Burden',
      year: '2023',
      url: 'https://www.who.int/news-room/fact-sheets/detail/pneumonia',
    },
    {
      _key: 'src2',
      title: 'Mayo Clinic – Sore Throat: Symptoms & Causes',
      year: '2024',
      url: 'https://www.mayoclinic.org/diseases-conditions/sore-throat/symptoms-causes/syc-20351635',
    },
    {
      _key: 'src3',
      title: 'NHS UK – Sore Throat: Self-Care and Treatment',
      year: '2023',
      url: 'https://www.nhs.uk/conditions/sore-throat/',
    },
    {
      _key: 'src4',
      title: 'NCBI / NLM – Pharyngitis and Tonsillitis (StatPearls)',
      year: '2024',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK519550/',
    },
  ],

  bodySystem: 'ENT',
  quickFacts: [
    'Gale mein dard (throat pain / pharyngitis) duniya mein sabse common complaints mein se ek hai – zyada-tar cases viral hote hain aur antibiotics ki zaroorat nahi hoti.',
    'India mein respiratory infections – jinmein throat pain sabse common hai – ek high-burden problem hain. Mausam badalne ke saath (October-November aur February-March) cases mein sharply uchhal aata hai.',
    'Gale mein dard ke saath tez bukhar (101°F+) 2 din se zyada, ya saans lene mein koi bhi takleef – turant doctor.',
  ],
  reviewDate: 'May 2026',
}

async function seed() {
  console.log('🌱 Seeding Gale Mein Dard symptom page...')
  await client.createOrReplace(symptom)
  console.log('✅ Symptom seeded — homeopedia.in/symptoms/gale-mein-dard')
}

seed().catch(console.error)
