import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'symptom-tonsils-in-children',
  _type: 'symptom',

  name: 'Tonsils in Children',
  hindiName: 'Bacho Mein Tonsils',
  hinglishName: 'Bacho Mein Tonsils / Tonsillitis',
  slug: { _type: 'slug', current: 'tonsils-in-children' },
  bodySystem: 'Respiratory',

  metaTitle: 'Tonsils in Children — Karan, Ilaaj aur Homeopathy | Homeopedia',
  metaDescription: 'Bacho mein tonsils (tonsillitis) ke karan, severity aur ghar pe safe steps — simple Hinglish mein. Verified info, doctor-reviewed.',
  publishedAt: new Date('2026-05-18').toISOString(),

  whatIsThis: `Aapka bacha raat ko gale mein dard ki wajah se rota hai — khana khate waqt takleef hoti hai, bukhaar aata hai, aur bacha chidchida ho jaata hai. Ye tonsils (gale ki dono taraf ki granthiyan) ka signal ho sakta hai.

Tonsils actually body ka ek defense system hai — bacteria aur virus ko body mein ghusne se rokta hai. Lekin jab ye khud infection ki giraft mein aa jaate hain to sujan, dard aur bukhaar shuru ho jaate hain. Bacho mein tonsils ki problem bahut common hai — khas kar 3 se 15 saal ke bachon mein.

Ye page aapko 2 minute mein batayega: aapke bache ka case serious hai ya ghar pe manage ho sakta hai, aur agli step kya honi chahiye.`,

  indiaContext: 'India mein tonsillitis bachon mein ek bahut aam problem hai — khas kar school-going age ke bachon mein, jahan ek bachche se doosre mein infection phailna aasaan hota hai.',
  indiaContextSource: 'WHO — Acute Respiratory Infections in Children 2023; NCBI — Recurrent Tonsillitis in Children: Management and Guidelines 2022',

  severityLevel1: [
    'Gala halka dard kar raha hai, lekin bacha khana-paani le raha hai',
    'Bukhaar 101°F (38.3°C) se kam hai',
    'Bacha thaka hua hai lekin normal activities kar pa raha hai',
    'Awaaz thodi bhari hui hai — koi breathing problem nahi',
  ],
  severityLevel2: [
    'Bukhaar 102°F (38.9°C) se zyada — 2 din se zyada',
    'Bacha solid khana bilkul nahi kha raha, sirf liquid le raha hai',
    'Gale mein white ya yellow patches dikh rahe hain',
    'Cervical lymph nodes (gale ke neeche ki gaanth) feel ho rahi hain',
    'Baar baar tonsils — pichle 6 mahine mein 3+ baar',
  ],
  severityLevel3: [
    'Bacha paani ya liquid bhi nahi le pa raha — drooling ho rahi hai — turant hospital',
    'Saans lene mein takleef — chest mein aawaz aa rahi hai — turant hospital',
    'Muh khulna mushkil ho raha hai (Trismus) — turant hospital',
    'Gale ke ek taraf zyada sujan — unilateral bulge (Peritonsillar abscess) — turant hospital',
    'Bacha bahut weak hai, response nahi de raha — turant hospital',
  ],

  timeline3Days: 'Naya infection hai — body khud fight kar rahi hai. Aam taur par viral infection hoti hai pehle 1-3 din mein. Ghar pe rest, gunguna paani, aur gargle se bacha better feel karta hai. Agar bukhaar 102°F cross kare ya bacha paani na le sake to Level 2 mein aao — doctor zaruri hai.',
  timeline4Weeks: 'Agar 3 din baad bhi improvement nahi, bacterial infection (Strep Throat) ka chance badh jaata hai. Doctor se milein — throat swab test se confirm ho sakta hai. Is stage pe doctor ki salah zaruri hai — khud antibiotics mat dein.',
  timelineMonthPlus: 'Agar bacha pichhe 1 saal mein 5+ baar tonsils se pareshan hai — ye recurrent tonsillitis hai. Ye chronic problem hai — sirf har baar treat karna kafi nahi. Is case mein root cause samajhna zaruri hai. Doctor se poori history discuss karein. Homeopathy mein is pattern ko address kiya jaata hai — recurrence kam karna goal hota hai.',

  lifestyleCauses: [
    {
      _key: 'lc1',
      causeName: 'Viral Infection (Sabse Common — 70% Cases)',
      mechanism: 'Tonsils ka kaam hai — naak aur muh se aane wale germs ko rok ke body ko protect karna. Jab koi virus — jaise Adenovirus, Rhinovirus, ya Influenza — muh ya naak se andar aata hai, tonsils usse rokne ki koshish karte hain. Is fighting process mein khud tonsils mein sujan (inflammation) ho jaati hai. Ye sujan hi dard, laalapan aur bukhaar ka karan hoti hai.',
      howToIdentify: 'Bukhaar normal-mild hota hai. Gale mein dard hai, naak bhi beh rahi hai ya band hai. Bacha thaka hua hai. Tonsils pe white patches generally nahi hote viral mein.',
    },
    {
      _key: 'lc2',
      causeName: 'Bacterial Infection — Strep Throat',
      mechanism: 'Streptococcus pyogenes bacteria tonsils pe attack karta hai. Ye viral se zyada aggressive hota hai — zyada sujan, white/yellow pus spots, aur tez bukhaar. Ye bacteria ek bachche se doosre mein direct contact ya airborne droplets se bahut tezi se phailta hai — school mein ek bacha sick ho to class mein failna common hai.',
      howToIdentify: 'Sudden tez bukhaar (103-104°F), tonsils pe white ya yellow patches, gale mein bohot dard — lekin naak band ya behna aam taur par nahi hoti is case mein. Doctor ke paas jaana zaruri hai — throat swab confirm karega.',
    },
    {
      _key: 'lc3',
      causeName: 'School / Daycare Exposure',
      mechanism: '3-10 saal ke bachon ka immune system abhi develop ho raha hota hai. School ya daycare mein baar baar naye viruses aur bacteria se face hona padta hai — har baar tonsils ko fight karna padta hai. Pehle 2-3 school saalon mein zyada infections hona natural immune development ka hissa hai.',
      howToIdentify: 'Season change hote waqt ya school reopen hone ke baad tonsils aate hain. Ghar mein siblings mein bhi same time pe similar symptoms.',
    },
    {
      _key: 'lc4',
      causeName: 'Dry Air / AC Exposure',
      mechanism: 'AC ya heater se hawa dry ho jaati hai. Gale ki mucous membrane dry hoti hai to bacteria aur virus ko attach karna aasaan ho jaata hai — ye protective layer weak ho jaati hai. Ratein zyada affect hoti hain kyunki bacha zyada waqt AC room mein sota hai.',
      howToIdentify: 'Subah uthne pe gala zyada kharab lagta hai. Din mein thoda better. Tonsils ki frequency AC use se match karti hai.',
    },
  ],

  medicalCauses: [
    {
      _key: 'mc1',
      diseaseName: 'Tonsillitis (Tonsils Ki Sujan)',
      diseaseHindiName: 'Tonsils Ki Sujan / Galgranthishotha',
      howSymptomPresents: 'Ye sabse common cause hai — tonsils directly infect ho jaate hain. Dono ya ek taraf ki tonsil red, swollen aur painful hoti hai. Bukhaar, gale mein dard aur khana khane mein takleef hoti hai. Pus pockets bhi ban sakte hain.',
      howToIdentify: 'Torch se muh ke andar dekho — tonsils clearly badi aur red dikh rahi hongi. White/yellow patches bacterial tonsillitis mein hote hain.',
      homeopediaSlug: 'tonsillitis',
      isAvailable: true,
    },
    {
      _key: 'mc2',
      diseaseName: 'Adenoids (Adenoid Hypertrophy)',
      diseaseHindiName: 'Naak Ke Peeche Ki Granthiyon Ki Sujan',
      howSymptomPresents: 'Adenoids naak ke peeche hote hain — ye tonsils ke saath saath infect ya enlarge ho sakte hain. Bacha muh se saans leta hai, raat ko kharraate aate hain, naak hamesha band rehti hai aur awaaz nasal lagti hai.',
      howToIdentify: 'Agar bacha raat ko muh kholke sota hai, heavy snoring hai, ya naak hamesha blocked lagti hai — adenoids involved ho sakte hain. Tonsils ke saath saath ye bhi check karna padta hai.',
      homeopediaSlug: 'adenoids',
      isAvailable: true,
    },
    {
      _key: 'mc3',
      diseaseName: 'Pharyngitis (Gale Ki Sujan)',
      diseaseHindiName: 'Gale Ki Andar Ki Sujan',
      howSymptomPresents: 'Pharyngitis mein tonsils ke saath saath poora gala red aur inflamed ho jaata hai. Tonsils bade nahi hote zaroori nahi — lekin gala andar se kharab lagta hai. Dry cough, gala kharaashna aur thoda bukhaar.',
      howToIdentify: 'Agar tonsils zyada bade nahi hain lekin poora gala aur soft palate red hai — pharyngitis zyada likely hai. Tonsillitis se is mein fark hai ki tonsils specifically bade nahi hote har case mein.',
      homeopediaSlug: '',
      isAvailable: false,
    },
  ],

  redFlags: [
    'Peritonsillar Abscess (Pus Ka Jama Hona) — agar gale ke ek taraf zyada sujan ho, bacha muh nahi khol pa raha, ya awaaz bulbul jaisi ho rahi ho to turant hospital — ye surgical emergency ho sakti hai.',
    'Rheumatic Fever — agar Strep infection ka sahi treatment na ho to kuch cases mein heart ya joints affect ho sakte hain. Agar bacha joints mein dard bata raha hai strep ke baad to doctor se zaroor milein.',
    'Obstructive Sleep Apnea — agar raat ko bacha baar baar uthta hai, heavy snoring hai, ya din mein bahut neend aati hai to ENT specialist zaruri hai — chronically enlarged tonsils breathing block kar sakte hain raat ko.',
  ],

  homeSteps: [
    {
      _key: 'hs1',
      action: 'Gunguna Namak Pani Gargle (5 Saal+ Bachon Ke Liye)',
      whyItWorks: 'Salt water osmosis se tonsils ki sujan mein fluid draw karta hai — swelling thodi kam hoti hai aur surface pe germs bhi reduce hote hain. Din mein 3-4 baar karwao — ek glass gungune paani mein aadha chammach namak.',
    },
    {
      _key: 'hs2',
      action: 'Rest Aur Hydration — Warm Liquids',
      whyItWorks: 'Hydration mucous membrane ko wet rakhta hai jo gale ka natural defense hai. Rest se body ka immune system infection pe focus kar paata hai. Cold drinks se gala aur tight ho sakta hai — gunguna paani, warm soup prefer karein.',
    },
    {
      _key: 'hs3',
      action: 'Steam Inhalation (Carefully)',
      whyItWorks: 'Warm moist air gale ki sujan mein temporary relief deta hai aur dry airways ko moisture deta hai. Bade bachon ke liye — bartan mein garam paani pe towel se dhak ke. Chote bachon mein bathroom mein garam shower chala ke bithao — directly face pe steam mat lagao.',
    },
    {
      _key: 'hs4',
      action: 'Sote Waqt Sir Thoda Upar Rakhein',
      whyItWorks: 'Lie flat hone se gale mein mucus collect hota hai aur throat mein irritation badhti hai. Ek extra pillow se bacha ka sir thoda upar rakho — postnasal drip kam hoti hai aur raat ko bacha better sota hai.',
    },
    {
      _key: 'hs5',
      action: 'Kamre Mein Humidifier Use Karein',
      whyItWorks: 'Dry air gale ki protective membrane ko aur weak karti hai. AC room ya dry weather mein humidifier lagao — moisture se gala zyada comfortable rehta hai aur bacha zyada aasani se breathe kar pata hai.',
    },
  ],

  homeopathyIndividualization: `Tonsils ka naam ek hai — lekin har bacha alag hota hai. Kisi ko tonsils tez bukhaar ke saath aate hain, kisi ko bilkul bina bukhaar ke sirf gala dard karta hai. Kisi ko raat ko zyada takleef hoti hai, kisi ko thanda peene ke baad badhti hai. Kisi ko left side zyada affect hoti hai, kisi ko right. Homeopathy mein sirf "tonsils ka ilaaj" nahi hota — aapke bache ke tonsils ka ilaaj hota hai — uski puri picture dekh ke. Isliye do bachon ko same complaint ho to unka treatment alag ho sakta hai.`,

  homeopathyRootCause: `Baar baar tonsils aana sirf bad luck nahi — ye aksar ek weak immune response ka pattern hai. Homeopathy mein sirf ek episode treat karna goal nahi hota — baar baar aane ki frequency ko todna goal hota hai. Waqt ke saath episodes ki intensity kam hoti hai, interval badhta hai. Research is area mein limited hai aur results individual hote hain — lekin jo bachon mein recurrent tonsils dekhte hain, unke liye ye angle explore karne layak hai.`,

  homeopathySafety: `Chote bachon mein — khas kar 3-8 saal ke — medication choices ke baare mein parents understandably concerned rehte hain. Homeopathy highly diluted medicines use karti hai jo practically side-effect free hain aur existing medications ke saath interfere nahi karti. Severe infection ya bacterial tonsillitis mein conventional treatment (antibiotics) pehle — homeopathy complementary role mein hai, replacement nahi.`,

  isForYouIf: [
    'Bacha baar baar tonsils se pareshan hai aur aap root cause treat karna chahte hain',
    'Aap long-term immunity build karna chahte hain — sirf ek episode treat karna nahi',
    'Conventional treatment ke saath ek safe complementary option chahiye',
  ],

  notForYouIf: [
    'Bacha paani nahi le pa raha, saans mein takleef hai — pehle emergency department jaao',
    'Doctor ne bacterial infection confirm ki hai aur antibiotics prescribe ki hain — pehle woh course complete karo; homeopathy baad mein saath chala sakte hain',
  ],

  homeopathyDiseaseLinks: [
    { _key: 'hdl1', diseaseName: 'Tonsillitis ka poora ilaaj', diseaseSlug: 'tonsillitis' },
    { _key: 'hdl2', diseaseName: 'Adenoids ka poora ilaaj',   diseaseSlug: 'adenoids'    },
  ],

  linkedDiseaseCards: [
    { _key: 'ldc1', title: 'Tonsillitis',  hindiName: 'Tonsils Ki Sujan',             slug: 'tonsillitis', isAvailable: true  },
    { _key: 'ldc2', title: 'Adenoids',     hindiName: 'Naak Ke Peeche Ki Granthiyan', slug: 'adenoids',    isAvailable: true  },
    { _key: 'ldc3', title: 'Pharyngitis',  hindiName: 'Gale Ki Sujan',                slug: '',            isAvailable: false },
  ],

  faqs: [
    {
      _key: 'faq1',
      faqType: 'common-cause',
      question: 'Bacho mein tonsils ka sabse common karan kya hai?',
      answer: `Bacho mein tonsils ka sabse common karan viral infection hai — especially Adenovirus aur Rhinovirus. In 70% se zyada cases mein virus responsible hota hai, bacteria nahi.\n\nGala virus se infect hota hai, tonsils usse rokne ki koshish karte hain aur is process mein khud inflame ho jaate hain.\n\nBacterial infection — khas kar Strep bacteria se — tez bukhaar aur white patches ke saath aata hai aur ye cases mein zyada aggressive hota hai.\n\nAgar naak bhi beh rahi hai aur bukhaar mild hai — viral likely hai. Agar sudden tez bukhaar hai, naak band nahi, white patches hain — doctor se bacterial check karwao.`,
    },
    {
      _key: 'faq2',
      faqType: 'duration',
      question: 'Bacho mein tonsils kab tak rehte hain?',
      answer: `Viral tonsillitis aam taur par 7-10 din mein apne aap theek ho jaata hai.\n\nBacterial (Strep) tonsillitis mein bina antibiotic ke zyada waqt lag sakta hai — aur kuch complications ka risk hota hai, isliye doctor se confirm karna zaruri hai.\n\nAgar bacha 10 din baad bhi better nahi hua — ya bukhaar wapas aaya — to doctor se zaroor milein.\n\nRecurrent tonsillitis (saal mein 5+ baar) mein sirf "kitne din" ka sawaal nahi rehta — root cause treat karna padta hai.`,
    },
    {
      _key: 'faq3',
      faqType: 'normal-vs-serious',
      question: 'Tonsillitis kya contagious (dusron mein phailne wali) bimari hai?',
      answer: `Haan — tonsillitis, khas kar viral aur Strep bacterial, dono contagious hain.\n\nEk infected bachche ke khaansne, chheenkne ya baat karne se airborne droplets se failta hai. Shared cups, utensils ya towels se bhi contact ho sakta hai.\n\nSchool mein ek bacha sick ho to class mein failna common hai.\n\nBacha jab tak bukhaar hai ya antibiotics shuru karne ke 24 ghante baad tak school na bhejo — is dauraan bacha dusron ko infect kar sakta hai.`,
    },
    {
      _key: 'faq4',
      faqType: 'ghar-pe-wait',
      question: 'Kya tonsils mein antibiotic zaruri hoti hai?',
      answer: `Nahin — viral tonsillitis mein antibiotic kaam nahi karti aur zaruri bhi nahi hoti. Sirf confirmed bacterial infection (Strep) mein antibiotic prescribed hoti hai.\n\nBina test ke antibiotic dena — baad mein antibiotic resistance create karta hai. Doctor throat swab se confirm karega.\n\nGhar pe 2-3 din wait karo agar bukhaar mild hai, bacha liquid le raha hai aur koi red flag nahi — Level 1 ke signs hain to observe karo. Level 2 ya 3 pe to seedha doctor.`,
    },
    {
      _key: 'faq5',
      faqType: 'homeopathy',
      question: 'Kya homeopathy bacho mein tonsils mein kaam karta hai?',
      answer: `Homeopathy bacho mein tonsils — khas kar recurrent cases mein — ke liye explore ki jaane wali approach hai.\n\nAcute episode mein symptoms ko manage karne mein aur long-term mein recurrence kam karne ke liye — dono mein patients ne fayda bataya hai.\n\nResults individual hote hain aur research is area mein limited hai.\n\nSevere bacterial infection ya complications mein conventional treatment pehle zaroori hai — homeopathy complementary role mein chal sakti hai saath mein.`,
    },
    {
      _key: 'faq6',
      faqType: 'normal-vs-serious',
      question: 'Enlarged tonsils (bade tonsils) alag hote hain kya infected tonsils se?',
      answer: `Haan — ye dono alag cheezein hain. Enlarged tonsils ka matlab hamesha infected nahi.\n\nKuch bachon mein naturally tonsils bade hote hain — koi dard nahi, koi bukhaar nahi, lekin dekho to bade lagte hain.\n\nInfected tonsils red hote hain, painful hote hain, bukhaar hota hai.\n\nAgar bacha kisi takleef ke bina khaa-pee raha hai lekin tonsils bade hain — doctor se check karwao lekin ghabrao mat. Agar saath mein raat ko snoring hai, muh se saans hai — adenoids bhi check karna hoga.`,
    },
    {
      _key: 'faq7',
      faqType: 'ghar-pe-wait',
      question: 'Bachon mein tonsils ka gharelu ilaaj kab tak karna chahiye?',
      answer: `Mild symptoms mein — mild bukhaar (101°F se kam), liquid le raha hai, active hai — 2-3 din ghar pe observe karo.\n\nGunguna namak gargle, warm liquids, rest — ye teen cheezein zaroori hain.\n\nAgar 3 din baad bhi bukhaar hai, ya bukhaar badh raha hai, ya bacha paani kam le raha hai — to doctor ke paas jaana chahiye.\n\nKoi bhi red flag sign ho — ek minute mat ruko. Khud antibiotics ya koi bhi medicine mat dein bina doctor ki salah ke.`,
    },
    {
      _key: 'faq8',
      faqType: 'permanent-solution',
      question: 'Kya tonsils nikaalne ki zarurat padti hai bacho mein?',
      answer: `Tonsillectomy (tonsils nikaalna) sirf specific cases mein recommend ki jaati hai — saal mein 5-7+ baar tonsillitis, ya tonsils itne bade ho jaayein ki saans ya khana khane mein problem ho.\n\nSirf baar baar aana enough nahi — ENT specialist decide karta hai full picture dekh ke.\n\n"Permanent cure" ka vaada koi bhi honestly nahi kar sakta — surgery ke baad bhi gale mein infection ho sakta hai, lekin tonsil-specific recurrence khatam hoti hai.\n\nHomeopathy mein is decision se pehle ek natural approach explore ki jaati hai — results individual hote hain.`,
    },
    {
      _key: 'faq9',
      faqType: 'common-cause',
      question: 'Bacho mein tonsil stones (tonsiliths) kya hote hain?',
      answer: `Tonsil stones — ya tonsiliths — chhote white/yellow deposits hote hain jo tonsils ki cracks (crypts) mein jama ho jaate hain. Ye dead cells, bacteria aur food particles se bante hain.\n\nYe mostly older children mein hote hain, toddlers mein rare hain.\n\nAksar breathe ki badbu, gale mein ek ajeeb sensation aur halki takleef hoti hai.\n\nYe infection nahi hain — lekin discomfort dete hain. Doctor se ek baar check karwana better rehta hai.`,
    },
    {
      _key: 'faq10',
      faqType: 'normal-vs-serious',
      question: 'Tonsillitis aur sore throat mein kya fark hai?',
      answer: `Sore throat ek general symptom hai — poora gala dard karna. Tonsillitis specific hai — tonsils (gale ke dono taraf ki granthiyan) infect hoti hain.\n\nSore throat ka karan tonsils ke alawa pharyngitis, dry air, ya GERD bhi ho sakta hai.\n\nTonsillitis mein tonsils clearly red, swollen ya spotted hoti hain — dekh ke pata chalta hai. Aam sore throat mein tonsils normal size ki hoti hain.\n\nDono mein gala dard hota hai — lekin tonsillitis mein aksar bukhaar zyada hoti hai aur tonsils visible hoti hain.`,
    },
    {
      _key: 'faq11',
      faqType: 'india-specific',
      question: 'India mein bacho mein baar baar tonsils kyun hote hain?',
      answer: `India mein kuch specific factors hain jo bacho mein recurrent tonsils ke risk badhate hain:\n\n- School mein bheed zyada hoti hai jis se infection jaldi failta hai\n- Season change — garmi se barsat ya barsat se sardi — mein immunity thodi weak hoti hai\n- Andar-bahar temperature ka gap (AC room aur bahar ki garmi) gale ko stress deta hai\n- Thanda-meetha — ice cream, cold drinks — baar baar lene se sensitivity badh sakti hai\n\nYe sab combined karke India mein tonsils ki frequency badhati hain.`,
    },
    {
      _key: 'faq12',
      faqType: 'duration',
      question: 'Kya tonsillitis mein school bhej sakte hain bacha ko?',
      answer: `Nahi — jab tak bukhaar hai ya confirmed bacterial infection hai to school bhejne se dusre bachon mein infection fail sakta hai.\n\nViral tonsillitis mein bukhaar utarne ke 24 ghante baad school safe maana jaata hai.\n\nBacterial (Strep) mein antibiotic shuru karne ke 24 ghante baad — jab bukhaar bhi na ho. Doctor ka clearance best hai.\n\nBacha thaka hua ho, energy nahi ho — usse rest chahiye, school nahi.`,
    },
  ],

  relatedSymptoms: [
    { _key: 'rs1', name: 'Sore Throat',                 hindiName: 'Gale Mein Dard',             slug: 'gale-mein-dard'          },
    { _key: 'rs2', name: 'Fever in Children',           hindiName: 'Bacho Mein Bukhaar',         slug: 'fever-in-children'       },
    { _key: 'rs3', name: 'Difficulty Swallowing',       hindiName: 'Khana Nigalne Mein Takleef', slug: 'difficulty-swallowing'   },
  ],

  sources: [
    { _key: 's1', name: 'WHO — Acute Respiratory Infections in Children',                            year: '2023', url: 'https://www.who.int/news-room/fact-sheets/detail/acute-respiratory-infections' },
    { _key: 's2', name: 'Mayo Clinic — Tonsillitis: Symptoms and Causes',                           year: '2024', url: 'https://www.mayoclinic.org/diseases-conditions/tonsillitis/symptoms-causes/syc-20378479' },
    { _key: 's3', name: 'NCBI / PubMed — Recurrent Tonsillitis in Children: Management Guidelines', year: '2022', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9252882/' },
    { _key: 's4', name: 'NHS — Tonsillitis: Overview and Treatment',                                year: '2023', url: 'https://www.nhs.uk/conditions/tonsillitis/' },
  ],

  quickFactSymptom: 'Tonsils gale ke dono taraf immunity granthiyan hain — ye body ka pehla defense hai bacteria aur virus ke khilaf.',
  quickFactIndiaStats: 'India mein bacho mein tonsillitis bahut aam hai — school-age mein peak hoti hai jab ek bachche se doosre mein infection tezi se failta hai.',
  quickFactDoctorWhen: 'Bukhaar 102°F+, paani na le pana, white patches — ya Level 2/3 signs — doctor zaruri hai.',
  reviewDate: 'May 2026',

  doctorNote: 'Maine apni practice mein dekha hai ki jo parents bacho ke baar baar tonsils ke saath aate hain, unme se zyaattar pehle antibiotic ka course baar baar de chuke hote hain — lekin interval zyada nahi badha. Jo cheez aksar miss hoti hai wo hai bacha ka immunity pattern — kuch bachon mein ek underlying sensitivity hoti hai jo tonsils ko baar baar react karne pe majboor karti hai. Constitutional homeopathic approach mein hum sirf episode nahi — ye pura pattern dekhte hain. 3-6 mahine ki treatment mein episodes ki frequency clearly kum hoti hai — ye maine apne patients mein consistently observe kiya hai.',
}

async function seed() {
  console.log('🌱 Seeding Tonsils in Children symptom page...')
  await client.createOrReplace(doc)
  console.log('✅ Symptom seeded — homeopedia.in/symptoms/tonsils-in-children')
}

seed().catch(console.error)
