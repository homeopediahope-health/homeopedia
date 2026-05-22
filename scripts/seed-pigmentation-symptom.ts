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
  _id: 'symptom-pigmentation',
  _type: 'symptom',
  title: 'Pigmentation / Hyperpigmentation (Rang Ka Daag)',
  hindiName: 'Rang Ka Daag / Chamdi Ka Kala Padna',
  slug: { _type: 'slug', current: 'pigmentation' },
  bodySystem: 'Skin',
  shortDescription: 'Pigmentation matlab skin mein melanin ka uneven hona — dark patches banna. Sun exposure, hormones, ya andar ki bimari — cause alag ho sakta hai.',
  metaTitle: 'Pigmentation in Hindi — Karan, Ilaaj aur Homeopathy',
  metaDescription: 'Pigmentation (rang ka daag) ke karan, severity aur ghar pe safe steps — simple Hinglish mein. Verified info, doctor-reviewed.',
  isAvailable: true,
  reviewDate: 'May 2026',

  heroText: `Kuch log subah uthte hain aur aaine mein dekh kar sochte hain — "ye daag pehle nahi tha." Chehre pe, honthon ke aas-paas, ya gaardhan pe ek gehri rangat aa jaati hai — bina dard ke, bina khujli ke — bas ek patchy, uneven skin tone jo confidence girata hai.

Pigmentation ka matlab hai skin ke kisi hisse mein melanin (skin ka natural rang dene wala chemical) ka zyada ya kam hona. Jab zyada hoti hai to dark patches bante hain — isko hyperpigmentation kehte hain. Aur ye India mein bahut common hai — garmi, dhoop, hormones, aur stress teen wajah hain jo milke is problem ko zyada common banaate hain.

Pigmentation sirf cosmetic problem nahi hai — kuch cases mein ye andar ki kisi bimari ka signal bhi ho sakta hai. Ye page aapko 2 minute mein batayega: kab ghar pe manage karo, kab doctor zaruri hai.

WHO aur NCBI ke data ke mutabik melasma globally pregnancy ke dauran 50-70% mahilaon mein hota hai — aur India mein sun exposure aur hormonal factors milke ise aur bhi common banate hain.`,

  severityScale: {
    level1: {
      label: 'Ghar Pe Manage Karo',
      signs: [
        'Skin pe chand patches hain jo dheere dheere aaye hain',
        'Koi dard, jalwan, ya sujan nahi hai patches mein',
        'Patches sirf dhoop wale hisson pe hain — naak, gaal, mathe pe',
        'Pregnancy se related hai aur delivery ke baad fade ho raha hai',
        'Koi aur symptom nahi — sirf uneven skin tone hai',
      ],
    },
    level2: {
      label: 'Is Hafte Doctor Se Milein',
      signs: [
        'Patches tezi se badh rahe hain — ek hafte mein noticeably zyada',
        'Itching, jalwan, ya skin ka thoda rough hona saath hai',
        'Patches face ke saath saath haathon, pet, ya peeth pe bhi aa rahe hain',
        'Teen mahine se zyada ho gaye hain aur koi fark nahi dikh raha',
        'Gaardhan, kaankhon, ya janghon ke beech dark patches bane hain — ye insulin resistance ka sign bhi ho sakta hai',
      ],
    },
    level3: {
      label: 'Turant Hospital Jaao',
      signs: [
        'Koi ek patch jo rapidly badh raha ho, uneven edges hon, aur rang badal raha ho (brown se black ya red) — ye melanoma ka sign ho sakta hai',
        'Aankhon ya muh ke andar bhi pigmentation dikhe',
        'Jaundice ke saath skin ka rang yellow-brown pade',
      ],
    },
  },

  timeline: [
    {
      duration: '1 Se 4 Hafte',
      label: 'Nayi Takleef',
      description: 'Naya pigmentation aksar kisi trigger se hota hai — tez dhoop, koi nai cream ya medicine, ya hormonal change. Is stage mein sunscreen lagana, trigger identify karna, aur dhoop se bachna sabse effective step hai. Agar koi obvious trigger nahi dikh raha — doctor se puchho.',
    },
    {
      duration: '1 Se 6 Mahine',
      label: 'Chalti Aa Rahi',
      description: 'Itne waqt mein agar patches fade nahi ho rahe ya badh rahe hain, to sirf ghar ke upay kaafi nahi hain. Is stage mein cause identify karna zaroori hai — hormonal test ya skin evaluation helpful ho sakta hai. Doctor se milna theek hai.',
    },
    {
      duration: '6 Mahine Ya Zyada',
      label: 'Purani Problem',
      description: 'Chronic pigmentation mein sirf surface treatment se result nahi aata — andar ki wajah address karni padti hai. Melanin production ka pattern set ho chuka hota hai. Homeopathy is stage mein systemic approach se help kar sakti hai — lekin proper evaluation pehle zaruri hai. Doctor se milein, treatment start karein.',
    },
  ],

  lifestyleCauses: [
    {
      title: 'Sun Exposure (Dhoop)',
      description: 'Jab UV rays skin pe padti hain to body melanocytes (melanin banane wali cells) ko activate karti hai — ye protection mechanism hai. Zyada ya regular sun exposure mein ye cells overdrive mein chali jaati hain aur melanin production uneven ho jaata hai. Sirf exposed areas pe dark patches bante hain — mathe, naak, galon pe.',
      recognition: 'Patches sirf sun-exposed areas pe hain. Sardi mein thoda fade hote hain, garmi mein zyada dark ho jaate hain.',
    },
    {
      title: 'Hormonal Changes (Melasma)',
      description: 'Estrogen aur progesterone hormones directly melanin production ko influence karte hain. Pregnancy mein, birth control pills mein, ya hormonal imbalance mein ye hormones zyada active ho jaate hain — cheeks, upper lip, aur mathe pe symmetrical dark patches bante hain. Isko melasma ya "mask of pregnancy" bhi kehte hain.',
      recognition: 'Patches dono taraf symmetric hote hain — ek taraf nahi. Mahilaon mein zyada common.',
    },
    {
      title: 'Post-Inflammatory Hyperpigmentation (PIH)',
      description: 'Jab bhi skin pe koi injury hoti hai — pimple, cut, rash, ya irritation — body healing ke dauran us jagah zyada melanin bhejti hai. Ye excess melanin injury theek hone ke baad bhi wahan reh jaata hai. Isliye pimple theek hone ke baad bhi daag reh jaata hai.',
      recognition: 'Patches wahan hain jahan pehle pimple, rash, ya koi wound tha. Darker skin tones mein zyada common.',
    },
    {
      title: 'Chemical Irritation (Creams / Products)',
      description: 'Kuch cosmetic products mein harsh chemicals hote hain — mercury, steroids, certain fragrances — jo skin ke melanocytes ko disturb karte hain. Irregular ya uncontrolled melanin production shuru ho jaati hai. Steroid creams ka long-term use bhi pigmentation cause karta hai.',
      recognition: 'Pigmentation wahan hai jahan cream ya product lagaya jaata tha. Kisi naye product ke use ke baad shuru hua.',
    },
  ],

  medicalCauses: [
    {
      diseaseName: 'Melasma',
      diseaseHindiName: 'Hormonal Pigmentation',
      mechanism: 'Cheeks, mathe, naak, aur upper lip pe brown ya gray-brown symmetric patches bante hain. Pregnancy ya hormonal pills ke dauran zyada common. UV exposure se badhta hai.',
      recognition: 'Dono taraf same jagah pe — ek taraf sirf nahi hota. Pregnancy ya pills se linked hota hai.',
    },
    {
      diseaseName: "Addison's Disease",
      diseaseHindiName: 'Adrenal Gland Ki Kamzori',
      mechanism: 'Generalised skin darkening — especially haath ki lines mein, kaankhon mein, aur muh ke andar bhi darkening ho sakti hai. Saath mein thakaan, weakness, aur weight loss bhi hota hai.',
      recognition: 'Sirf skin nahi — poore body mein darkening + extreme fatigue + blood pressure low.',
    },
    {
      diseaseName: 'Hypothyroidism',
      diseaseHindiName: 'Thyroid Gland Ki Susti',
      mechanism: 'Skin dull aur dry ho jaati hai — kuch cases mein facial darkening bhi hoti hai. Saath mein weight gain, thakaan, baalon ka girna, aur thand zyada lagna common hai.',
      recognition: 'Pigmentation ke saath thyroid ke doosre symptoms bhi hain — akele pigmentation se diagnosis nahi hota, test zaruri hai.',
    },
    {
      diseaseName: 'Acanthosis Nigricans',
      diseaseHindiName: 'Insulin Resistance / Diabetes Ka Skin Sign',
      mechanism: 'Gaardhan ke peeche, kaankhon mein, aur janghon ke beech mota, dark, velvet jaisa skin banta hai. Ye insulin resistance ka strong indicator hai — diabetes ka early sign.',
      recognition: 'Sirf dark nahi — skin thick aur rough bhi lagti hai. PCOS ya prediabetes wale patients mein zyada common.',
    },
    {
      diseaseName: 'Lichen Planus Pigmentosus',
      diseaseHindiName: 'Lichen Planus (Ek Skin Condition)',
      mechanism: 'Face, gaardhan, aur upper body pe gray-brown diffuse patches — sun-exposed aur sun-protected dono areas pe. Kuch mein itching bhi ho sakti hai. India mein relatively zyada seen hai compared to Western countries.',
      recognition: 'Uniform nahi — irregular gray patches jo dhire dhire spread hote hain. Dermatologist se confirm karna padta hai.',
    },
  ],

  redFlags: [
    'Melanoma (Skin Cancer): Agar koi mole ya patch rapid change dikha raha ho — size mein, rang mein, ya edges mein irregular ho jaayein — to ek minute mat ruko. Turant dermatologist zaruri hai.',
    "Addison's Disease: Agar generalised skin darkening ke saath extreme fatigue, blood pressure drop, ya chakkar aa rahe hain — endocrinologist se milein, delay mat karo.",
    'Drug-Induced Pigmentation: Kuch medicines (minocycline, antimalarials, certain BP medicines) long-term use mein pigmentation cause karte hain. Agar nai medicine start ki ho aur pigmentation aaya ho — doctor ko batao, medicine khud band mat karo.',
  ],

  homeSteps: [
    {
      step: 'Broad-Spectrum Sunscreen — Roz, Hamesha',
      reason: 'UV rays melanin production ka sabse bada trigger hain. Dhoop mein jaane se 20 minute pehle lagao — SPF 30 ya zyada. Ghar mein bhi agar window light aati hai to lagao. Ye sabse evidence-backed step hai.',
    },
    {
      step: 'Affected Area Ko Protect Karo',
      reason: 'Scarf, hat, ya full sleeve pigmented area ko UV exposure se bachate hain. Ye melanin production ko trigger hone se rokta hai. Chemical exposure (sweat, harsh products) bhi kam hoti hai covering se.',
    },
    {
      step: 'Existing Pimples Ya Wounds Ko Touch Mat Karo',
      reason: 'Jab bhi skin pe koi healing wound ya pimple ko repeatedly touch ya pop kiya jaata hai — PIH (post-inflammatory pigmentation) ka risk badhta hai. Healing skin ko peace do — touching band karo.',
    },
    {
      step: 'Gentle Cleansing — Harsh Scrubbing Nahi',
      reason: 'Aggressive scrubbing skin ke melanocytes ko irritate karta hai — wo aur zyada melanin produce karte hain defensive response mein. Soft cloth ya bare haathon se gentle cleanse karo.',
    },
    {
      step: 'Current Cosmetics Review Karo',
      reason: 'Kuch face creams mein mercury, steroids, ya harsh bleaching agents hote hain jo initially skin lighten karte lagte hain lekin long-term mein aur baddi pigmentation cause karte hain. Ingredients list dekho ya dermatologist se puchho.',
    },
  ],

  homeopathyAngle1: 'Pigmentation ka naam ek hai — lekin wajah aur pattern har insaan mein bilkul alag hota hai. Kisi ka sirf pregnancy mein hota hai, kisi ko sun exposure se, kisi ko hormonal imbalance se, kisi ko baar baar pimples ke baad. Homeopathy mein sirf "dark patches" nahi dekhe jaate — ye patches kahan hain, kab se hain, kya cheez se badhte hain, aapki overall health kaisi hai, aur koi associated symptoms hain — ye sab milke treatment decide karta hai.',

  homeopathyAngle2: 'Baar baar aane wali ya persistent pigmentation aksar andar ki kisi imbalance ka baahri sign hota hai — hormonal, metabolic, ya immune-related. Sirf skin pe kuch lagaane se ye imbalance address nahi hoti. Homeopathy mein goal ye hai ki jo cheez melanin ko uncontrolled produce karwa rahi hai — use address kiya jaaye. Waqt ke saath skin tone mein sudhar aata hai aur naye patches aane kam hote hain. Research is area mein limited hai aur results individual hote hain.',

  homeopathyAngle3: 'Highly diluted medicines hone ki wajah se homeopathy practically side-effect free hai — isliye ye pregnancy mein, jab hormonal pigmentation common hoti hai, aur bacchon mein bhi safely consider ki ja sakti hai. Conventional treatment ke saath saath bhi chal sakti hai.',

  homeopathyIsFor: [
    'Aap sirf cream lagaate lagaate thak gaye hain — root cause samajhna chahte hain',
    'Pigmentation hormonal ya systemic hai aur long-term improvement chahiye',
    'Pregnancy ke dauran safe option chahiye',
    'Allopathic treatment ke saath complementary approach dhundh rahe hain',
  ],

  homeopathyNotFor: [
    'Suspicious mole ya rapidly changing patch hai — pehle dermatologist se milein, melanoma rule out karo',
    'Laser ya chemical peel ki zarurat hai specific case mein — homeopathy baad mein saath chal sakti hai',
    'Ek hafte mein results chahiye — homeopathy ka kaam gradual hota hai, immediate nahi',
  ],

  linkedDiseaseCards: [
    {
      diseaseName: 'Melasma',
      diseaseHindiName: 'Hormonal Pigmentation',
      diseaseSlug: 'melasma',
      isAvailable: true,
    },
    {
      diseaseName: "Addison's Disease",
      diseaseHindiName: 'Adrenal Gland Ki Kamzori',
      diseaseSlug: '',
      isAvailable: false,
    },
    {
      diseaseName: 'Hypothyroidism',
      diseaseHindiName: 'Thyroid Ki Kami',
      diseaseSlug: 'thyroid',
      isAvailable: true,
    },
    {
      diseaseName: 'Acanthosis Nigricans',
      diseaseHindiName: 'Insulin Resistance Ka Skin Sign',
      diseaseSlug: 'acanthosis-nigricans',
      isAvailable: true,
    },
    {
      diseaseName: 'Lichen Planus Pigmentosus',
      diseaseHindiName: 'Lichen Planus (Ek Skin Condition)',
      diseaseSlug: 'lichen',
      isAvailable: true,
    },
  ],

  homeopathyDiseaseLinks: [
    { _type: 'reference', _ref: 'disease-melasma' },
    { _type: 'reference', _ref: 'disease-thyroid' },
    { _type: 'reference', _ref: 'disease-acanthosis-nigricans' },
  ],

  faqs: [
    {
      question: 'Pigmentation kyun hota hai — iska sabse bada karan kya hai?',
      answer: 'Pigmentation ka sabse common karan sun exposure aur hormonal changes hain — akele ya milke. Jab UV rays skin pe padti hain to melanin production trigger hoti hai — zyada ya uneven sun exposure mein patchy dark spots bana deta hai. Hormonal changes — jaise pregnancy, birth control pills, ya thyroid imbalance — melanocyte cells ko overdrive mein daal dete hain. Iske alawa post-pimple daag (PIH), harsh creams, ya andar ki bimari jaise thyroid ya insulin resistance bhi pigmentation cause kar sakte hain. Agar cause clear nahi hai — khud diagnose mat karo, dermatologist se evaluate karo.',
    },
    {
      question: 'Chehre pe pigmentation ka sabse common pattern kya hota hai?',
      answer: 'Chehre pe pigmentation ka sabse common pattern melasma hai — cheeks, mathe, naak, aur upper lip pe brown ya gray-brown patches jo dono taraf symmetric hote hain. Ye mahilaon mein zyada hota hai — especially pregnancy mein ya hormonal pills ke dauran. Dhoop se badhta hai aur shade mein thoda fade hota hai. Doosra common pattern hai perioral pigmentation — muh ke aas-paas dark ring — jo hormonal, allergic, ya nutritional deficiency se linked hota hai. Agar patches sirf ek taraf hain ya shape irregular hai — evaluation zaroori hai.',
    },
    {
      question: 'Muh ke aas-paas ya honthon ke neeche pigmentation kyun hota hai?',
      answer: 'Muh ke aas-paas pigmentation (perioral hyperpigmentation) ke kuch common reasons hain: hormonal imbalance — estrogen ki fluctuation direct is area ke melanocytes ko affect karti hai; toothpaste allergy — kuch ingredients reactive ho sakte hain; nutritional deficiency — vitamin B12 ya folic acid ki kami is specific pattern mein dikhti hai; excessive sun exposure us specific area pe; ya Lichen Planus Pigmentosus — ek skin condition jo India mein relatively common hai. Agar ye daag dhire dhire badh raha hai ya saath mein itching hai — dermatologist se confirm karo.',
    },
    {
      question: 'Pregnancy mein pigmentation kyun hota hai aur kya ye theek hota hai?',
      answer: 'Pregnancy mein pigmentation — jise melasma ya "mask of pregnancy" kehte hain — estrogen aur progesterone hormones ki wajah se hota hai. NCBI ke mutabik pregnancy ke dauran 50-70% mahilaon mein kuch degree ki facial pigmentation hoti hai. Kya ye theek hota hai: haan, zyada cases mein delivery ke baad jab hormones stabilize hote hain — pigmentation fade hone lagti hai, kuch months lag sakte hain. Sunscreen lagana aur dhoop se bachna is dauran zaroori hai. Agar delivery ke 6-12 mahine baad bhi fade nahi hua — doctor se milein. Pregnancy mein kisi bhi treatment se pehle specialist ki salah lena zaroori hai.',
    },
    {
      question: 'Pigmentation kab serious hoti hai — kab doctor ke paas jaana chahiye?',
      answer: 'Zyada cases mein pigmentation cosmetic concern hai — dangerous nahi. Lekin ye signs hon to der mat karo: koi bhi patch jo rapidly badh raha ho, rang badal raha ho (brown se black), ya edges irregular ho jaayein; pigmentation ke saath extreme thakaan, blood pressure problems, ya weight loss (Addison\'s disease rule out karo); gaardhan, kaankhon, ya janghon ke beech mota dark skin (insulin resistance ya diabetes sign ho sakta hai); aankhon ke andar ya muh ke andar bhi darkening. Routine pigmentation jo stable ho, non-itchy ho, aur sirf cosmetic concern ho — usme emergency nahi hai, lekin evaluation helpful hai.',
    },
    {
      question: 'Pigmentation fade hone mein kitna waqt lagta hai?',
      answer: 'Ye cause pe depend karta hai — koi fixed timeline nahi. Sun-induced pigmentation: strict sun protection ke saath 3-6 mahine mein noticeable improvement. Post-pimple daag (PIH): lighter skin tones mein 3-6 mahine, darker skin tones mein 6-12 mahine tak. Pregnancy melasma: delivery ke baad 3-12 mahine mein fade ho sakta hai — hormones stabilize hone pe. Hormonal ya systemic cause: jab tak underlying cause address na ho — surface se jitna bhi karo, wapas aata hai. Sab se zaroori baat: cause pata karo pehle.',
    },
    {
      question: 'Ghar pe pigmentation ke liye kya kar sakte hain — safe steps kya hain?',
      answer: 'Ghar pe ye safe steps le sakte hain: sunscreen roz lagao — SPF 30+, dhoop mein jaane se pehle (ye sabse effective step hai); affected area ko cover karo — hat, scarf, full sleeve; pimples ya rashes ko touch ya pop mat karo — PIH ka risk badhta hai; harsh scrubbing avoid karo — gentle cleansing karo; cosmetic products ki ingredients check karo — mercury ya steroid wali creams avoid karo. Important: ghar pe steps pigmentation ko stable rakhne mein help karte hain — treat karne mein nahi. Agar cause hormonal ya systemic hai to evaluation zaruri hai.',
    },
    {
      question: 'Kya pigmentation permanently theek ho sakta hai?',
      answer: '"Permanently theek" ka vaada koi bhi system honestly nahi kar sakta. Jo realistic hai: agar cause identify karke address kiya jaaye — sun exposure ko manage karo, hormonal imbalance treat karo, triggering products band karo — to pigmentation significantly fade ho sakti hai aur naye patches aana bahut kam ho jaata hai. Sirf surface treatment se — bina cause address kiye — waqt ke saath wapas aata hai. Homeopathy mein ye root cause approach naturally aata hai — results individual hote hain aur time lagta hai, lekin agar trigger control mein hai to long-term improvement realistic hai.',
    },
    {
      question: 'Kya homeopathy se pigmentation theek ho sakta hai?',
      answer: 'Homeopathy pigmentation mein help kar sakti hai — lekin "theek" ko sahi nazariye se samjhna zaruri hai. Homeopathy ka approach ye hai ki sirf skin ko treat nahi kiya jaata — jo cheez melanin production ko disturb kar rahi hai (hormonal imbalance, stress response, systemic issue) — usse address kiya jaata hai. Results individual hote hain aur teen-chaar hafte mein dramatic change expect mat karo. Research is area mein limited hai — ye honestly batana zaroori hai. Homeopathy ek complementary approach hai jo dermatological treatment ke saath bhi chal sakti hai.',
    },
    {
      question: 'Pigmentation ke liye kaunsa test ya kaunsa doctor chahiye?',
      answer: 'Pehle step hai sahi doctor ke paas jaana: Dermatologist — skin ka directly evaluate karna, Wood\'s lamp examination se melanin ki depth check hoti hai; Endocrinologist — agar systemic cause suspect ho. Common tests jo suggest ho sakte hain: thyroid function test (T3, T4, TSH), blood glucose aur insulin levels (insulin resistance check), hormonal panel (estrogen, progesterone), cortisol test (agar Addison\'s suspect ho). Sirf skin dekh ke treatment start karna — bina cause pata kiye — mostly temporary results deta hai.',
    },
    {
      question: 'Mardon mein pigmentation kyun hota hai — alag karan hote hain kya?',
      answer: 'Mardoon mein pigmentation ke causes thoda alag pattern dikhate hain kyunki pregnancy ya hormonal pills ka factor nahi hota: sun exposure — outdoor kaam karne wale mardoon mein zyada common; shaving-related irritation — beard area pe repeated irritation se PIH hoti hai; occupational exposure — chemicals, pesticides, ya certain metals ke contact se; insulin resistance / diabetes — gaardhan aur kaankhon mein dark thick skin; liver problems — generalised skin darkening kuch cases mein liver dysfunction ka sign hai. Agar koi obvious trigger nahi hai aur pigmentation fast badh raha hai — blood tests aur evaluation helpful hai.',
    },
    {
      question: 'Aankhon ke neeche aur honthon pe pigmentation — kya ye alag hota hai?',
      answer: 'Haan — aankhon ke neeche aur honthon ki pigmentation ke causes alag ho sakte hain. Aankhon ke neeche: dark circles ke peeche pigmentation, thin skin, blood vessels, ya iron deficiency ho sakti hai — sirf "pigmentation" nahi, cause ke hisaab se approach bilkul alag hoti hai. Honthon pe: hormonal changes, vitamin B12 deficiency, sun exposure, ya Lichen Planus Pigmentosus — ye sab lip pigmentation cause kar sakte hain. India mein Lichen Planus relatively common hai. Dono cases mein: cause diagnose karna zaroori hai — sirf lip balm ya eye cream se permanent result nahi milta agar andar ki wajah address nahi hui.',
    },
  ],

  relatedSymptoms: [
    { _type: 'reference', _ref: 'symptom-skin-rash' },
    { _type: 'reference', _ref: 'symptom-hair-fall' },
    { _type: 'reference', _ref: 'symptom-pimples-acne' },
    { _type: 'reference', _ref: 'symptom-weakness-fatigue' },
  ],

  quickFacts: [
    'Pigmentation ka matlab hai skin mein melanin ka uneven hona — ye khud ek disease nahi, ek sign hai.',
    'Melasma (ek common pigmentation type) fertile age ki mahilaon mein India mein relatively zyada prevalent hai — sun exposure aur hormonal factors milke.',
    'Agar patch rapidly badh raha ho, rang change ho raha ho, ya irregular edges hon — turant dermatologist.',
  ],

  sources: [
    { label: 'NCBI — Melasma: An Updated Review | 2022', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9872479/' },
    { label: 'Mayo Clinic — Skin Pigmentation Disorders: Overview | 2024', url: 'https://www.mayoclinic.org/diseases-conditions/skin-pigmentation-disorders/symptoms-causes/syc-20350281' },
    { label: 'NHS UK — Melasma: Causes, Symptoms and Treatment | 2023', url: 'https://www.nhs.uk/conditions/skin-pigmentation-disorders/' },
    { label: 'NCBI — Acanthosis Nigricans as a Marker of Insulin Resistance | 2021', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8234652/' },
  ],
}

async function seed() {
  console.log('Seeding pigmentation...')
  const result = await client.createOrReplace(symptom)
  console.log('Done:', result._id)
}

seed().catch(console.error)
