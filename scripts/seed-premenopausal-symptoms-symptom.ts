import { createClient } from 'next-sanity'
import * as dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  token: process.env.SANITY_API_TOKEN!,
  useCdn: false,
})

const symptom = {
  _id: 'symptom-premenopausal-symptoms',
  _type: 'symptom',
  title: 'Perimenopause Symptoms',
  hindiName: 'Masik Dharm Band Hona / Rituvritti',
  slug: { _type: 'slug', current: 'premenopausal-symptoms' },
  bodySystem: "Women's Health",
  shortDescription: 'Periods band hone se pehle ka phase — hot flashes, mood swings, neend ki takleef aur irregular periods.',
  metaTitle: 'Perimenopause Symptoms in Hindi — Karan aur Homeopathy | Homeopedia',
  metaDescription: 'Premenopausal symptoms (periods se pehle aane wali takleef) ke karan, severity aur safe steps — verified Hinglish guide, Dr. Shadab reviewed.',
  reviewDate: 'May 2026',

  heroText: `Achanak garmi ki ek lahar poore badan mein daud jaati hai — face laal ho jaata hai, pasiina aa jaata hai, aur kuch hi seconds mein sab theek bhi ho jaata hai. Raat ko neend toot jaati hai. Periods kabhi 21 din pe aate hain, kabhi 45 din pe. Mood ek pal mein badal jaata hai — aur aap sochti hain ki "ye kya ho raha hai mere saath?"

Ye Perimenopause hai — woh phase jo periods band hone se pehle aata hai.

India mein 35 se 55 saal ki kaafi mahilaaon ko ye symptoms hote hain, lekin zyada-tar is phase ko samjha nahi jaata — kyunki school mein kisi ne padhaaya nahi tha. Ye page aapko 2 minute mein batayega: aapka case serious hai ya nahi, ghar pe kya karein, aur agli step kya hai.

WHO ke anusaar duniya bhar mein 1 billion se zyada mahilaaen menopause se guzar rahi hain ya guzar chuki hain. India mein average menopause age 46-47 saal hai — jo global average (51 saal) se kaafi pehle hai.`,

  severityScale: {
    level1: {
      label: 'Ghar Pe Manage Karo',
      signs: [
        'Periods thode irregular hue hain — kabhi jaldi, kabhi thodi der se — lekin aa rahe hain',
        'Hot flashes (garmi ki lahar) hain lekin din mein 1-2 se zyada nahi, aur raat ki neend zyada kharaab nahi',
        'Mood thoda zyada sensitive laga — lekin daily routine normal hai',
        'Ye symptoms 40 saal ke aas paas shuru hue hain aur dheere dheere badhe hain',
      ],
    },
    level2: {
      label: 'Is Hafte Doctor Se Milein',
      signs: [
        'Periods 3 mahine se zyada band ho gaye hain aur aap 45 se kam umra ki hain',
        'Hot flashes itne intense hain ki kaam ya neend dono bahut affected hain',
        'Vaginal bleeding bahut zyada ho gayi hai — pehle se kaafi heavy periods',
        'Anxiety ya depression itni badh gayi hai ki daily life rukne lagi hai',
        'Periods ke beech mein achanak spotting ya bleeding aa rahi hai',
      ],
    },
    level3: {
      label: 'Turant Hospital Jaao',
      signs: [
        'Periods ke beech mein ya sex ke baad heavy bleeding (pad change baar baar karna pad raha ho)',
        'Chest mein dard ya heartbeat bahut fast ya irregular — hot flash ke saath bhi',
        'Achanak ek taraf ka haath ya chehra sunya pad gaya — ye stroke ka sign ho sakta hai, perimenopause nahi',
        'Bahut tez sir dard jo pehle kabhi aisa nahi aaya',
      ],
    },
  },

  timeline: [
    {
      duration: 'Nayi Takleef — 1-3 Mahine',
      advice: 'Body mein estrogen levels dheere dheere badal rahe hote hain. Periods ka irregular hona aur occasional hot flashes is phase mein common hai. Abhi zaruri nahi ki doctor ke paas daudo — lekin ek diary rakho: symptoms kab aate hain, kitne intense hain, periods ka pattern kya hai. Agar 3 mahine mein zyada badh jaaye to Level 2 guidance follow karo.',
    },
    {
      duration: 'Chalti Aa Rahi — 3 Mahine se 2 Saal',
      advice: 'Ye phase active perimenopause hai — body regularly adjust kar rahi hai. Agar symptoms manageable hain, theek hai. Lekin agar neend, mood ya quality of life significantly affected ho rahi hai — doctor se milna zaroori hai. Is phase mein thyroid test bhi karwao — symptoms bahut similar hote hain. Ghar pe symptomatic relief ke steps start karo.',
    },
    {
      duration: 'Purani Problem — 2 Saal Ya Zyada',
      advice: 'Agar ye symptoms 2 saal se zyada se hain, to doctor se detailed evaluation zaruri hai. Ye chronic phase hai. Kuch symptoms ko kabhi bhi ignore nahi karna chahiye — jaise vaginal dryness, bone pain, ya memory issues. Homeopathy is phase mein complementary support de sakti hai — results individual hote hain. Lekin pehle gynecologist se milein.',
    },
  ],

  lifestyleCauses: [
    {
      title: 'Stress aur Cortisol Overload',
      recognition: 'Hot flashes aur mood swings khaas taur par stressful periods mein zyada hote hain. Weekend pe better feel hota hai.',
      description: 'Jab aap chronically stressed rehti hain, body cortisol (stress hormone) zyada banati hai. Cortisol aur estrogen ek doosre ke saath compete karte hain. Zyada cortisol hone par estrogen levels aur zyada irregular ho jaate hain — aur perimenopause ke symptoms pehle ya zyada intensity se aate hain.',
    },
    {
      title: 'Neend Ki Kami (Sleep Deprivation)',
      recognition: 'Subah uthke bhi thaka hua feel hona. Raat mein ek ya zyada baar garmi se neend tootna ya pasiina aana.',
      description: 'Perimenopause mein pehle se hi neend disturbed hoti hai (raat ke hot flashes ki wajah se). Jab consistently kam sooti hain, body melatonin aur growth hormone ki balance bigad jaati hai — jo aur zyada hormonal fluctuation paida karta hai. Ek vicious cycle ban jaata hai.',
    },
    {
      title: 'Smoking aur Alcohol',
      recognition: 'Dono mein se koi bhi hai — symptoms aur zyada intense honge. Alcohol pine ke baad raat ko hot flashes zyada hote hain.',
      description: 'Cigarette mein chemicals ovarian function ko directly harm karte hain — jisse smokers mein menopause 1-4 saal pehle aa sakta hai. Alcohol liver pe load daalta hai — aur liver hi estrogen ko process karta hai. Jab liver overloaded hota hai, estrogen properly nahi toot-ta — aur symptoms zyada intense ho jaate hain.',
    },
    {
      title: 'Sedentary Lifestyle (Baithe Rehna)',
      recognition: 'Din bhar daftar ya ghar mein baithe rehna. Joint pain, weight gain, aur mood swings ek saath.',
      description: 'Physical activity se body endorphins banati hai jo mood regulate karte hain, aur body fat percentage healthy rakhne mein help karte hain. Body fat se bhi thoda estrogen banta hai. Lekin zyada sedentary hone se weight badhta hai, inflammation badhti hai, aur hormonal symptoms intense hote hain.',
    },
  ],

  medicalCauses: [
    {
      diseaseName: 'Hypothyroidism',
      diseaseHindiName: 'Gathiya / Thayrayd Ki Samasya',
      diseaseSlug: 'thyroid',
      isAvailable: true,
      description: 'Hypothyroidism ke symptoms — thakan, weight gain, mood change, irregular periods — perimenopause se itne similar hote hain ki dono ko alag karna mushkil ho jaata hai. Kai baar mahilaaon ko saalon baad pata chalta hai ki unhe thyroid tha, perimenopause nahi.',
      recognition: 'Agar cold intolerance hai (zyada thandi lagti hai), baal jhadte hain, constipation hai — aur hot flashes NAHI hain — to thyroid zyada likely hai. TSH test se confirm hota hai.',
    },
    {
      diseaseName: 'Anxiety Disorder',
      diseaseHindiName: 'Chinta Rog / Anxiousness',
      diseaseSlug: 'anxiety',
      isAvailable: true,
      description: 'Perimenopause mein estrogen ka girna brain ke serotonin system ko directly affect karta hai — jisse anxiety aur panic attacks trigger ho sakte hain. Kai baar pehli baar anxiety 40+ mein shuru hoti hai aur mahila sochti hai "kuch aur bimari hai."',
      recognition: 'Heartbeat tez hona, haath kaanpna, social situations se darna — agar ye sab hai bina physical cause ke, anxiety rule out karo. Hot flashes ke saath panic feel hona bhi common hai.',
    },
    {
      diseaseName: 'Osteoporosis',
      diseaseHindiName: 'Asthi Chirnata / Haddi ki Kamzori',
      diseaseSlug: '',
      isAvailable: false,
      description: 'Estrogen bones ki density maintain karta hai. Perimenopause mein estrogen girne se bones dheere dheere kamzor hone lagti hain. Ye symptom hamesha pain se shuru nahi hota — kai baar pata hi nahi chalta jab tak fracture na ho.',
      recognition: 'Back pain jo lete waqt zyada hota hai, height thodi kam hoti lage, ya chhoti si chot se fracture — ye osteoporosis ke signs hain. DEXA scan se confirm hota hai.',
    },
    {
      diseaseName: 'Depression',
      diseaseHindiName: 'Udaasi Ki Bimari',
      diseaseSlug: 'depression',
      isAvailable: true,
      description: 'Perimenopause ke hormonal changes directly brain chemistry pe asar karte hain. Ye clinical depression trigger kar sakta hai — jo sirf "mood bad hona" nahi hota. Agar 2 hafte se zyada lagataar udaasi, kisi cheez mein interest nahi, ya sone mein bahut problem hai — ye depression ho sakta hai.',
      recognition: 'Perimenopause mood swings come and go karte hain — kabhi theek, kabhi nahi. Depression mein consistently low feel hota hai. PHQ-9 screening test helpful hai.',
    },
    {
      diseaseName: 'Uterine Fibroids',
      diseaseHindiName: 'Bachchedani Ki Rasoli',
      diseaseSlug: 'uterine-fibroid',
      isAvailable: true,
      description: 'Fibroids estrogen-sensitive hoti hain — aur perimenopause mein hormone fluctuation se ye temporarily badi ho sakti hain, jisse heavy bleeding aur pelvic pain ho sakta hai. Ye aksar 35-50 saal ki mahilaaon mein hota hai.',
      recognition: 'Periods mein bahut zyada bleeding (ghante mein pad change karna pade), pelvic pressure, ya baar baar urine jaana — ye fibroids ka sign ho sakta hai. Ultrasound se confirm hota hai.',
    },
  ],

  redFlags: [
    'Early Menopause (40 se Pehle) — Agar 40 saal se pehle periods 3 mahine se zyada band ho gaye hain, to ye normal perimenopause nahi — POI (Premature Ovarian Insufficiency) ho sakta hai. Immediately gynecologist se milein.',
    'Endometrial Cancer ka Risk — Agar periods ke beech mein achanak heavy spotting ya bleeding aa rahi hai, especially 50+ mein — ye serious signal hai. Delay mat karo — uterine evaluation karwao.',
    'Cardiovascular Risk — Estrogen ka girna heart disease ka risk badhata hai. Hot flashes ke saath chest tightness, saans mein takleef, ya left arm mein dard ho — ye cardiac emergency hai. Turant hospital jaao.',
  ],

  homeSteps: [
    {
      step: 'Hot Flash Ke Waqt — Layered Kapde Pehno',
      reason: 'Hot flash ke waqt body ka temperature achanak badhta hai. Layered kapde quickly utaarne se body ko cool down karne ka chance milta hai. Cotton aur linen best hain — synthetic fabric body heat trap karti hai.',
    },
    {
      step: 'Bedroom Thanda Rakho — Raat Ko',
      reason: 'Night sweats aur hot flashes raat mein neend todne ka sabse bada karan hain. Room temperature 18-20 degree Celsius rakhne se (ya fan ka use) brain ko "cool aur safe" signal milta hai — aur deep sleep improve hoti hai.',
    },
    {
      step: 'Diaphragmatic Breathing — Hot Flash Ke Waqt',
      reason: 'Research suggests karta hai ki slow, deep breathing hot flash ki intensity aur duration dono kam kar sakti hai. Ek hot flash shuru hote hi naak se 4 seconds inhale karo, 6 seconds mein dhire dhire exhale karo.',
    },
    {
      step: 'Regular Physical Movement — Roz 30 Minute',
      reason: 'Moderate exercise — walking, yoga, swimming — endorphin release karta hai jo mood aur sleep dono improve karta hai. Ye bone density loss ko slow karne mein bhi help karta hai. Intense gym nahi chahiye — brisk walk bhi kaafi hai.',
    },
    {
      step: 'Ek Diary Rakho — Symptoms Track Karo',
      reason: 'Kai baar specific triggers hote hain jo hot flashes ya mood swings badhaate hain — chai, coffee, alcohol, stress, ya garmi. Diary se pattern samajh aata hai aur doctor ke paas jaate waqt bhi ye data bahut useful hota hai.',
    },
  ],

  homeopathyAngle1: 'Perimenopause ka naam ek hai — lekin experience har mahila mein bilkul alag hota hai. Kisi ko raat ko hot flashes zyada hoti hain, kisi ko subah. Kisi ka mood irritable hota hai, kisi ko anxiety zyada hoti hai. Homeopathy mein sirf "perimenopause" nahi dekha jaata — aapka perimenopause kaisa hai, kab zyada hota hai, kya cheez se better ya worse hota hai — ye sab decide karta hai ki treatment kya hoga.',

  homeopathyAngle2: 'Perimenopause ek transition phase hai — is phase mein baar baar aane wali symptoms sirf ek sign hain ki body ke andar ek deeper hormonal shift chal rahi hai. Homeopathy mein sirf hot flash band karna ya neend theek karna goal nahi hota — jo cheez is shift ko itna turbulent bana rahi hai, usse address kiya jaata hai. Waqt ke saath, kai patients mein symptoms ki frequency aur intensity dono kam hoti hain. Research is area mein limited hai aur results individual hote hain.',

  homeopathyAngle3: 'Perimenopause mein kai mahilaaon ko multiple medicines chal rahi hoti hain. Homeopathy ki highly diluted medicines practically side-effect free hoti hain — isliye ye HRT (Hormone Replacement Therapy) ke alternatives dhundh rahi mahilaaon mein ya jin mahilaaon ko hormonal therapy recommend nahi ki gayi unmein ek safe complementary option hai. Emergency ya surgical condition mein conventional treatment pehle — homeopathy baad mein saath chal sakti hai, replacement nahi hai.',

  homeopathyIsFor: [
    'Aap HRT ke alternatives explore kar rahi hain — bina hormones ke kuch support chahiye',
    'Aap root cause approach prefer karti hain — sirf symptom baar baar band nahi karna chahti',
    'Aap already doosri medicines le rahi hain aur ek side-effect free complementary option chahiye',
    'Aap long-term, sustainable relief dhundh rahi hain — ek raat mein nahi, lekin lasting',
  ],

  homeopathyNotFor: [
    'Aapko abhi isi waqt severe relief chahiye — intense symptoms mein pehle gynecologist ya emergency se milein',
    'Aapki condition surgical hai (jaise fibroids jo bahut badi hain) — surgery ke baad recovery mein homeopathy saath chal sakti hai',
    'Aap pregnant hain ya pregnancy plan kar rahi hain — koi bhi treatment pehle doctor se discuss karein',
  ],

  homeopathyDiseaseLinks: [
    { diseaseName: 'Hypothyroidism', diseaseSlug: 'thyroid', diseaseHindiName: 'Thyroid Ki Kami' },
    { diseaseName: 'Anxiety Disorder', diseaseSlug: 'anxiety', diseaseHindiName: 'Ghabrahat Ki Bimari' },
    { diseaseName: 'Depression', diseaseSlug: 'depression', diseaseHindiName: 'Udaasi Ki Bimari' },
  ],

  linkedDiseaseCards: [
    {
      diseaseName: 'Hypothyroidism',
      diseaseHindiName: 'Thyroid Ki Kami',
      diseaseSlug: 'thyroid',
      isAvailable: true,
    },
    {
      diseaseName: 'Anxiety Disorder',
      diseaseHindiName: 'Ghabrahat Ki Bimari',
      diseaseSlug: 'anxiety',
      isAvailable: true,
    },
    {
      diseaseName: 'Osteoporosis',
      diseaseHindiName: 'Haddiyon Ki Kamzori',
      diseaseSlug: '',
      isAvailable: false,
    },
    {
      diseaseName: 'Depression',
      diseaseHindiName: 'Udaasi Ki Bimari',
      diseaseSlug: 'depression',
      isAvailable: true,
    },
    {
      diseaseName: 'Uterine Fibroids',
      diseaseHindiName: 'Bachchedani Ki Rasoli',
      diseaseSlug: 'uterine-fibroid',
      isAvailable: true,
    },
  ],

  faqs: [
    {
      question: 'Perimenopause ya premenopause actually hota kya hai — normal hai ya bimari?',
      answer: 'Perimenopause ek natural biological transition hai — bimari nahi. Ye woh phase hai jo final period se pehle ke saalon mein aata hai, jab ovaries dheere dheere estrogen banana kam karti hain. India mein ye typically 38-50 saal ke beech shuru hota hai. Ye permanent condition nahi — ek passage hai. Lekin iska matlab ye nahi ki symptoms ko silently jhhelna pade. Agar symptoms quality of life affect kar rahein hain — doctor se milein.',
    },
    {
      question: 'Perimenopause ke symptoms kitne saal tak rehte hain?',
      answer: 'Average 4 se 8 saal — lekin ye bahut individual hota hai. Kuch mahilaaon mein sirf 1-2 saal ke mild symptoms hote hain; kuch mein 10+ saal intense symptoms rehte hain. Ek baar jab lagaataar 12 mahine periods band ho jayein — tab technically menopause complete ho jaata hai. Ye timeline aapke genetics, lifestyle, stress level, aur overall health pe depend karta hai.',
    },
    {
      question: 'Perimenopause symptoms ka sabse common karan kya hai?',
      answer: 'Sabse main karan hai estrogen ka irregular aur dheere dheere girna. Ovaries aging ke saath estrogen kam produce karti hain — lekin ye ek smooth decline nahi hota, it goes up and down unpredictably. Ye fluctuation hi hot flashes, mood swings, aur irregular periods ka direct cause hai. Secondary causes mein stress, poor sleep, aur thyroid issues shamil hain — jo symptoms aur zyada badha dete hain.',
    },
    {
      question: 'Kya stress se perimenopause symptoms early ya zyada intense ho sakte hain?',
      answer: 'Haan — research clearly suggest karta hai. Stress hormone cortisol aur estrogen ek doosre ke saath compete karte hain body mein. Chronically stressed rehne par — chahe kaam ka pressure ho, family tension, ya koi bada life change — estrogen levels aur zyada disrupt hote hain. Ye hot flashes ki frequency badha sakta hai, neend aur kharaab kar sakta hai, aur mood swings trigger kar sakta hai. Stress management is phase mein literally medical treatment hai.',
    },
    {
      question: 'Kya perimenopause symptoms 37-40 saal mein shuru ho sakte hain?',
      answer: 'Haan — aur India mein ye relatively common hai. Indian women mein average menopause age 46-47 saal hai, jo western average (51) se kaafi pehle hai. Matlab perimenopause symptoms 37-40 mein shuru hona possible hai. Agar 40 se pehle symptoms hain, to ek baar gynecologist se zaroor milein — kyunki 40 se pehle periods band hona ek alag condition (POI — Premature Ovarian Insufficiency) ho sakti hai jiska management different hota hai.',
    },
    {
      question: 'Hot flashes aur night sweats kab doctor tak jaane ka sign hai?',
      answer: 'Ghar pe manage karo agar: hot flash din mein 1-3 baar se kam hai, raat ki neend mostly theek hai, aur daily routine affected nahi hai.\n\nDoctor dikhao agar: din mein 7-8+ hot flashes hain jo kaam ya concentration affect kar rahi hain; raat ko itna pasiina aata hai ki kapde ya bedsheet change karne padte hain; hot flash ke saath chest pain ya heartbeat rapid feel ho; ya hot flashes ke alawa vaginal dryness ya painful intercourse bhi hai.',
    },
    {
      question: 'Perimenopause symptoms aur thyroid ki kami mein fark kaise karein?',
      answer: 'Perimenopause zyada likely hai agar: hot flashes hain (garmi ki lahar), irregular periods clearly hain, aur age 40-50 ke beech hai.\n\nHypothyroidism zyada likely hai agar: zyada thandi lagti hai (cold intolerance), baal bahut jhadte hain, constipation hai, weight badh raha hai bina wajah ke — aur hot flashes NAHI hain.\n\nBest approach: Dono ek saath rule out karo — ek simple blood test (TSH + FSH) dono ka answer de sakta hai.',
    },
    {
      question: 'Kya perimenopause symptoms ko naturally treat kiya ja sakta hai?',
      answer: 'Kai options hain jo genuinely helpful ho sakte hain: regular moderate exercise (mood, sleep, aur bones teeno ke liye), yoga aur deep breathing (hot flash frequency pe positive effect), proper sleep hygiene (bedroom thanda, regular sleep time), aur trigger diary (coffee, alcohol, spicy food, stress identify karo).\n\nHomeopathy symptoms ki individual pattern ke hisaab se support de sakti hai — results individual hote hain, research limited hai, lekin kai mahilaaon ko benefit hota hai without side effects.\n\nKab natural approach enough nahi: severe osteoporosis risk, clinical-level depression ya anxiety, ya heavy abnormal bleeding — pehle cause diagnose karna zaroori hai.',
    },
    {
      question: 'Pregnancy mein ya breastfeeding mein perimenopause symptoms aa sakte hain?',
      answer: 'Perimenopause aur pregnancy simultaneously technically possible hai. 40+ mein agar periods irregular hain to kai baar mahilaaen assume kar leti hain perimenopause hai, jabki actually pregnancy ho sakti hai. Isliye agar sexually active hain aur periods skip ho rahe hain — pehle pregnancy test karo, phir perimenopause assume karo. Contraception 40s mein bhi zaruri ho sakta hai jab tak full 12 mahine periods completely band na ho jayein.',
    },
    {
      question: 'Kya perimenopause mein depression aur anxiety normal hai?',
      answer: 'Ye bohot common hai. Estrogen brain ke serotonin aur dopamine systems ko regulate karta hai. Jab estrogen fluctuate karta hai perimenopause mein, in neurotransmitters pe directly asar hota hai — jisse mood changes, irritability, anxiety, aur depression ki vulnerability badh jaati hai. Ye weakness nahi hai, ye biology hai.\n\nPerimenopause mood swings come and go karte hain — physically linked hote hain, kuch dino mein better hote hain. Clinical depression mein 2 hafte ya zyada lagataar low mood hota hai — yahan professional help zaruri hai.',
    },
    {
      question: 'Perimenopause mein kaunsa doctor dikhana chahiye?',
      answer: 'Pehle apne regular gynecologist se milein. Wo typically FSH (Follicle Stimulating Hormone) aur Estradiol blood test karwayenge, TSH test (thyroid rule out karne ke liye), aur pelvic exam aur possibly ultrasound (other causes rule out karne ke liye).\n\nAgar koi specific issue prominent hai: heart symptoms mein cardiologist, mood/anxiety ke liye psychiatrist ya psychologist, bone pain mein orthopedic.\n\nHomeopathy ke liye BHMS ya MD Homeopathy qualified practitioner ke paas jaayein — khud se internet se medicines mat lo.',
    },
    {
      question: 'Kya perimenopause symptoms permanent hote hain ya theek ho jaate hain?',
      answer: 'Zyaadatar symptoms — khaas taur par hot flashes aur irregular periods — eventually menopause complete hone ke baad settle ho jaate hain. Kuch symptoms — jaise vaginal dryness ya bone loss — ongoing attention maangti hain.\n\nJo realistic improvement possible hai: symptoms ki frequency aur intensity significantly kam ho sakti hai, quality of life protect ki ja sakti hai, aur long-term risks (osteoporosis, heart disease) ko manage kiya ja sakta hai. Sahi treatment se ye phase manageable hai — sirf endurable nahi.',
    },
  ],

  quickFacts: [
    'Perimenopause symptoms 2 se 10 saal tak reh sakte hain — average 4-8 saal.',
    'India mein average menopause age 46-47 saal hai — global average (51) se 4-5 saal pehle.',
    '40 saal se pehle periods band hona, ya periods ke beech mein heavy unexpected bleeding — turant gynecologist dikhao.',
  ],

  relatedSymptoms: [
    { title: 'Irregular Periods', slug: 'irregular-periods' },
    { title: 'Night Sweats', slug: 'night-sweats' },
    { title: 'Mood Swings', slug: 'mood-swings' },
    { title: 'Insomnia (Neend Na Aana)', slug: 'insomnia' },
  ],

  sources: [
    { title: 'World Health Organization — Menopause (2023)', url: 'https://www.who.int/news-room/fact-sheets/detail/menopause' },
    { title: 'Mayo Clinic — Perimenopause: Symptoms & Causes (2024)', url: 'https://www.mayoclinic.org/diseases-conditions/perimenopause/symptoms-causes/syc-20354666' },
    { title: 'NCBI — Age at Natural Menopause in Indian Women | Journal of Mid-Life Health (2016)', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5034905/' },
    { title: 'NHS UK — Menopause: Symptoms (2023)', url: 'https://www.nhs.uk/conditions/menopause/symptoms/' },
  ],
}

async function seed() {
  console.log('Seeding premenopausal-symptoms...')
  const result = await client.createOrReplace(symptom)
  console.log('Done:', result._id)
}

seed().catch(console.error)
