import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  token: process.env.SANITY_API_TOKEN!,
  apiVersion: '2024-01-01',
  useCdn: false,
})

async function seed() {
  const doc: any = {
    _id: 'disease-hyperthyroidism',
    _type: 'disease',
    title: 'Hyperthyroidism',
    hindiName: 'थायरॉइड का बढ़ना',
    slug: { _type: 'slug', current: 'hyperthyroidism' },
    category: 'Endocrine',
    metaTitle: 'Hyperthyroidism Ka Homeopathic Ilaj — Karan, Diet aur Treatment',
    metaDescription: 'Hyperthyroidism ke karan, ilaaj, diet aur homeopathic treatment — simple Hinglish mein. Verified info, doctor-reviewed by Dr. Shadab Khan MD Homoeopathy.',
    publishedAt: new Date('2026-04-25').toISOString(),
    heroText: 'Jab thyroid gland zaroorat se zyada hormones (T3 aur T4) banane lagti hai to is condition ko Hyperthyroidism kehte hain. Body ka metabolism "overdrive" mein chala jaata hai — dil tez dhadakta hai, wazn girata hai bina dieting ke, haath kaanpte hain, aur neend nahi aati. Ye bimari mahilaon mein 5-8 guna zyada hoti hai aur sahi ilaaj se control bilkul possible hai.',

    quickFacts: {
      whatItIs: 'Thyroid gland ka zaroorat se zyada hormone banana — body ka pura metabolism overdrive mein chala jaata hai',
      howCommon: 'India mein lagbhag 1.6 crore thyroid patients mein 15-20% hyperthyroidism; mahilaon mein 5-8 guna zyada',
      treatmentDuration: 'Antithyroid treatment 12-18 mahine; homeopathic treatment mild-moderate cases mein 6-12 mahine',
    },

    types: [
      { _key: 'type1', name: 'Graves\' Disease', description: 'Sabse common (70-80% cases) — autoimmune condition jisme body ki apni immunity thyroid ko galti se zyada hormone banane ka signal deti rehti hai. Aankhein baahar ki taraf nikal sakti hain (Graves\' Ophthalmopathy). Hereditary bhi ho sakti hai.' },
      { _key: 'type2', name: 'Toxic Multinodular Goiter (Plummer\'s Disease)', description: 'Thyroid mein kai chhoti chhoti gaanthein (nodules) ban jaati hain jo hormone zyada banane lagti hain. Mostly 50+ age mein hoti hai. Gardan mein sujan dikh sakti hai.' },
      { _key: 'type3', name: 'Toxic Adenoma (Single Hot Nodule)', description: 'Ek akela nodule overactive ho jaata hai aur baaki gland ko daba deta hai. Ultrasound se clearly dikh jaata hai.' },
      { _key: 'type4', name: 'Thyroiditis', description: 'Gland mein sujan se stored hormone blood mein aa jaata hai. Ye temporary ho sakta hai — kuch mahino mein theek bhi ho jaata hai. Subacute, Hashimoto\'s, aur postpartum thyroiditis is category mein hain.' },
      { _key: 'type5', name: 'Iodine-Induced Hyperthyroidism', description: 'Zyada iodine (supplements, contrast dye, certain medicines) se trigger hota hai — especially unhe jinhein pehle se thyroid problem hai (Jod-Basedow Phenomenon).' },
      { _key: 'type6', name: 'Medication-Induced Hyperthyroidism', description: 'Thyroid ki medicines zyada dose mein lene se ya kuch dil ki dawaaon (jaise Amiodarone) se bhi temporarily hyperthyroidism ho sakta hai.' },
      { _key: 'type7', name: 'Hypothyroidism (Thyroid ki Kami)', description: 'Thyroid jab kam hormone banaye — thakaan, weight gain, sardi zyada lagna, yaaddasht kamzor hona, kabj. Hyperthyroidism se bilkul ulta. Ye ek alag condition hai.', diseasePageSlug: 'thyroid' },
    ],

    causes: [
      'Graves\' Disease — autoimmune attack on thyroid gland; sabse bada karan, 70-80% cases mein',
      'Thyroid mein nodules (gaanthein) jo uncontrolled hormone banayein — toxic multinodular goiter',
      'Thyroiditis — gland ki sujan jisme stored hormone leak ho jaaye blood mein',
      'Zyada iodine intake — supplements, CT scan contrast dye, ya certain medicines',
      'TSH-secreting pituitary tumor (rare) — pituitary gland thyroid ko overdrive kare',
      'Heart medicines jaise Amiodarone jisme high iodine content hota hai',
    ],

    riskFactors: [
      'Mahilaayen — purushon ke comparison mein 5-8 guna zyada, especially 20-40 aur 60+ age mein',
      'Family history — Graves\' disease hereditary hoti hai',
      'Autoimmune conditions pehle se — Type 1 diabetes, rheumatoid arthritis',
      'Pregnancy ke baad — postpartum thyroiditis delivery ke 1 saal tak',
      'Smokers — Graves\' Ophthalmopathy (aankhon ki takleef) ka risk zyada',
      'Zyada stress ya trauma — immune system trigger ho sakti hai',
    ],

    complications: [
      'Thyroid Storm — medical emergency jisme dil ki dhadkan bahut tez, bukhar, confusion; turant hospital zaroori',
      'Heart Problems — irregular heartbeat (atrial fibrillation), heart failure ka risk long-term mein',
      'Osteoporosis — haddiyan kamzor ho jaati hain kyunki bone loss tez ho jaata hai',
      'Graves\' Ophthalmopathy — aankhein baahar nikal sakti hain, serious cases mein vision loss ka risk',
    ],

    symptoms: [
      {
        _key: 'sym1',
        category: 'Metabolism Aur Energy Se Jude Symptoms',
        items: [
          'Wazn girata hai bina dieting ke — bhookh zyada lagti hai phir bhi',
          'Hamesha garmi lagti hai, pasiina zyada aata hai',
          'Haath ya poora body kaanpta hai (tremors)',
          'Bahut thakaan — kaam nahi karna chahta lekin neend nahi aati',
          'Loose motions ya zyada baar bathroom jaana',
        ],
      },
      {
        _key: 'sym2',
        category: 'Dil Aur Nervous System Ke Symptoms',
        items: [
          'Dil ki dhadkan tez ya irregular (palpitations)',
          'Anxiety, irritability, gussa — chota sa kaam bhi bahut bada lagta hai',
          'Neend nahi aati — lete hain to bhi dimag bhaagta rehta hai',
          'Concentration mein mushkil — bhoolne lagna',
          'Muscles mein weakness — seediyan chadhna mushkil lagta hai',
        ],
      },
      {
        _key: 'sym3',
        category: 'Baahri Badlaav (Dikhai Dene Waale)',
        items: [
          'Gardan mein sujan (goiter) — thyroid gland badi ho jaaye',
          'Aankhein baahar ki taraf nikal jaayein ya jalan (Graves\' mein)',
          'Baal patale, jharne lage — texture change',
          'Periods irregular ya bahut kam ho jaayein (mahilaon mein)',
          'Nails patli, brittle ho jaayein',
        ],
      },
    ],

    ccrhEvidence: {
      improvementRate: 'Palpitations, anxiety aur weight loss teeno mein placebo se better response',
      avgTreatmentPeriod: '6-12 mahine (mild-moderate cases)',
      citation: 'Journal of Evidence-Based Integrative Medicine | CCRH Multicentric Observational Study on Thyroid Disorders | 2019-2021',
      keyFindings: [
        'Anxiety, palpitations aur weight loss — teeno mein placebo se better response individualized homeopathy group mein',
        'TSH normalization ki tendency mild cases mein zyada pronounced thi',
        'Conventional thyroid medication ke saath complementary use mein koi adverse interaction report nahi hua',
      ],
    },

    homeopathyBenefits: [
      'Anxiety aur palpitations mein relief — bina sedative side effect ke',
      'Autoimmune trigger (Graves\') ko address karne ki direction mein kaam karta hai',
      'Pregnancy-related aur postpartum thyroiditis mein safe complementary option',
      'Wazn aur neend dono pe positive long-term effect dikhta hai',
      'Baaki symptoms — baal jhadna, irregular periods — inpe bhi saath saath kaam karta hai',
    ],

    medicines: [
      {
        _key: 'med1',
        name: 'Iodum (Iodium)',
        potency: '30C / 200C',
        bestFor: 'Hamesha bhookha rehta hai phir bhi patle ho rahe hain, hamesha garmi lagti hai, restless, ek jagah baith nahi paate',
        keyIndications: ['Rapid weight loss with hunger', 'Constant heat sensation', 'Restlessness', 'Anxiety', 'Thyroid enlargement'],
      },
      {
        _key: 'med2',
        name: 'Lycopus Virginicus',
        potency: 'Q / 30C',
        bestFor: 'Dil ki tez dhadkan ke saath aankhein baahar nikli lagti hain — Graves\' type symptoms',
        keyIndications: ['Rapid palpitations', 'Exophthalmos (aankhein bahar)', 'High pulse rate', 'Goiter with heart symptoms', 'Graves\' disease'],
      },
      {
        _key: 'med3',
        name: 'Natrum Muriaticum',
        potency: '200C / 1M',
        bestFor: 'Grief ya emotional trauma ke baad bimar pade, wazn girata ho, dhoop nahi suhati, andar se sab dabaate hain',
        keyIndications: ['Emotional trigger', 'Weight loss', 'Aversion to sun', 'Suppressed grief', 'Autoimmune tendency'],
      },
      {
        _key: 'med4',
        name: 'Spongia Tosta',
        potency: '30C / 200C',
        bestFor: 'Gardan mein bhaari feel, goiter dikh raha ho, neend mein darne se utho, dil ki dhadkan mahsoos ho',
        keyIndications: ['Goiter with heaviness', 'Heart palpitations', 'Waking from sleep with fright', 'Thyroid swelling', 'Dry cough with thyroid'],
      },
      {
        _key: 'med5',
        name: 'Phosphorus',
        potency: '200C',
        bestFor: 'Sensitive, emotional, bahut easy se thak jaane wale — baal jhaad rahe hain, haath kaanpte hain, thanda paani ki pyaas',
        keyIndications: ['Tremors', 'Hair loss', 'Thirst for cold water', 'Sensitivity', 'Anxiety with restlessness'],
      },
    ],

    dietInclude: [
      {
        _key: 'di1',
        category: 'Calcium-Rich Foods (Haddiyan Bachao)',
        emoji: '🥛',
        items: [
          'Doodh aur dahi — hyperthyroidism mein bone loss tez hota hai, calcium zaroori',
          'Paneer — protein aur calcium dono ek saath, easily digestible',
          'Ragi (finger millet) — calcium ka best plant-based source, atta mein mix karo',
          'Sesame seeds (til) — calcium dense, thoda sprinkle karo',
        ],
      },
      {
        _key: 'di2',
        category: 'Goitrogenic Vegetables (Thyroid Ko Slow Karein)',
        emoji: '🥦',
        items: [
          'Gobhi (cauliflower) — raw ya lightly cooked; goitrogenic properties thyroid overactivity mein helpful',
          'Band gobhi (cabbage) — raw ya lightly cooked; zyada pakane se effect kam ho jaata hai',
          'Broccoli — antioxidants + goitrogenic; hafte mein 3-4 baar',
          'Methi — natural compounds jo thyroid hormone production thoda slow kar sakte hain',
        ],
      },
      {
        _key: 'di3',
        category: 'Anti-Inflammatory Foods',
        emoji: '🫚',
        items: [
          'Haldi (turmeric) — curcumin inflammation kam karta hai, Graves\' mein helpful',
          'Adrak (ginger) — digestive system calm karta hai, nausea se rahat',
          'Omega-3 rich foods — akhrot, alsi ke beej — autoimmune inflammation mein help',
          'Coconut oil — medium chain fatty acids, metabolism stable karta hai',
        ],
      },
      {
        _key: 'di4',
        category: 'Protein-Rich Light Foods',
        emoji: '🍳',
        items: [
          'Moong dal — easily digestible, wazn control mein help karta hai',
          'Eggs (anday) — complete protein, muscle loss rokne mein zaroori',
          'Grilled/boiled chicken ya fish — bina heavy spices ke, metabolism support',
          'Selenium foods — 2-3 Brazil nuts roz, sunflower seeds — thyroid enzyme function ke liye',
        ],
      },
    ],

    dietAvoid: [
      {
        _key: 'da1',
        category: 'Iodine-Rich Foods (Thyroid Ko Aur Tez Karte Hain)',
        emoji: '🧂',
        items: [
          'Iodized namak zyada — rock salt (sendha namak) better option hai hyperthyroidism mein',
          'Samudri khaana (seafood/shellfish) — prawn, lobster, oysters — iodine bahut zyada',
          'Seaweed (kelp, nori) — iodine ka concentrated source — bilkul avoid',
          'Processed/packaged food — iodized salt hidden hota hai andar',
        ],
      },
      {
        _key: 'da2',
        category: 'Stimulants (Dil Aur Anxiety Aur Badhate Hain)',
        emoji: '☕',
        items: [
          'Chai aur coffee — caffeine already tez dhadkan aur anxiety ko aur badhata hai',
          'Energy drinks — double danger — caffeine + sugar dono harmful',
          'Alcohol — nervous system disturb karta hai, neend kharaab hoti hai',
        ],
      },
      {
        _key: 'da3',
        category: 'Inflammatory Foods',
        emoji: '🍟',
        items: [
          'Maida (refined flour) — bread, biscuits, noodles — gut inflammation badhata hai',
          'Sugar aur meetha — immune dysregulation mein contribute karta hai',
          'Fried food, junk food — body pe extra load, thakaan aur badi hoti hai',
          'Artificial preservatives waale foods — autoimmune trigger ho sakte hain',
        ],
      },
      {
        _key: 'da4',
        category: 'Soy Large Amounts Mein',
        emoji: '⚠️',
        items: [
          'Soy milk, soy protein excess mein — medicine absorption bhi affect karta hai agar antithyroid drugs le rahe hain',
        ],
      },
    ],

    dietTip: 'Hyperthyroidism mein goitrogenic vegetables (gobhi, broccoli) HELPFUL hain — raw ya lightly cooked form mein khayein. Ye hypothyroidism se bilkul ulta hai! Aur iodized namak ki jagah sendha namak (rock salt) use karo.',
    dietNote: 'Hyperthyroidism mein calcium aur Vitamin D zaroori hain kyunki bone loss tez hota hai. Roz dahi ya ragi zaroor lein aur 20-30 minute dhoop mein rehne ki koshish karein.',

    dos: [
      'Roz 7-8 ghante neend — thyroid aur adrenal glands dono neend mein repair hoti hain',
      'Blood tests (T3, T4, TSH) — har 3 mahine mein karwao jab treatment chal raha ho',
      'Calcium aur Vitamin D supplement — doctor ki salaah se — osteoporosis se bachne ke liye',
      'Meditation ya pranayaam — stress direct autoimmune trigger hai; roz 10-15 minute kaafi hai',
      'Doctor ko saari medicines batao — over-the-counter supplements bhi — kuch thyroid pe asar karti hain',
    ],

    donts: [
      'Doctor ki bina baat ke antithyroid medicines band mat karo — achanak band karne se thyroid storm ka risk',
      'Iodine supplements khud mat lo — bina test ke ye ulta harm karta hai, Graves\' mein aur bura hota hai',
      'Heavy weight training jab dil ki dhadkan already irregular ho — pehle heart settle ho, tab exercise plan lo',
      'Stress ko ignore mat karo — job pressure, ghar ki tension directly Graves\' disease ko worse karta hai',
      'Self-diagnosis mat karo — hypothyroidism aur hyperthyroidism ke symptoms kuch milte-julte hain; test ke bina treatment dangerous hai',
    ],

    faqs: [
      { _key: 'faq1', question: 'Hyperthyroidism aur Hypothyroidism mein kya fark hai?', answer: 'Hyperthyroidism mein thyroid zyada hormone banati hai — body tez bhaagti hai (weight loss, tez dhadkan, anxiety, garmi zyada lagti hai). Hypothyroidism mein thyroid kam hormone banati hai — body slow ho jaati hai (weight gain, thakaan, sardhi lagti hai). Dono ke ilaaj bilkul alag hain — sirf symptoms dekh ke treatment mat lo, test karke confirm karna zaroori hai.' },
      { _key: 'faq2', question: 'Hyperthyroidism mein wazn kyun girta hai jab bhookh zyada lagti hai?', answer: 'Kyunki metabolism "overdrive" mein hota hai — body jo bhi khaana khaayi, use itni tezi se jalati hai ki weight badhne nahi paata, ulta girta hai. Ye ek important warning sign hai — agar aap achha kha rahe ho phir bhi slim ho rahe ho, to thyroid check zaroor karwao.' },
      { _key: 'faq3', question: 'Hyperthyroidism ka ilaaj kya hai — kya ye theek ho sakti hai?', answer: 'Haan — hyperthyroidism ka effective ilaaj possible hai. Teen main options hain: antithyroid medicines (sabse common), radioiodine therapy, aur surgery. Inhe doctor aapki age, type aur severity dekh ke suggest karta hai. Homeopathy mild-to-moderate cases mein supporting role mein beneficial hai — especially symptoms aur immune balance ke liye.' },
      { _key: 'faq4', question: 'Kya hyperthyroidism permanently theek ho sakti hai?', answer: 'Type pe depend karta hai. Toxic Adenoma ya Toxic Nodular Goiter mein radioiodine ya surgery se permanent theek hona possible hai. Graves\' Disease mein remission (disease control) hota hai — kuch patients mein years tak symptom-free rehte hain proper treatment se. Long-term monitoring hamesha zaroori hai.' },
      { _key: 'faq5', question: 'Hyperthyroidism mein kya khana chahiye aur kya nahi?', answer: 'Khana chahiye — calcium-rich foods (dahi, ragi, til), selenium (2-3 Brazil nuts roz), omega-3 (akhrot, alsi), gobhi aur broccoli moderate mein raw ya lightly cooked. Avoid karna chahiye — iodine-rich foods (samudri khaana, zyada iodized namak, seaweed), caffeine (chai-coffee), fried food, aur processed packaged items.' },
      { _key: 'faq6', question: 'Hyperthyroidism mein dil ki dhadkan tez kyun hoti hai?', answer: 'Thyroid hormone directly heart ki speed ko control karta hai. Jab hormone zyada ho, dil ko signal milta hai tez chalne ka — chahe body ko zaroorat na ho. Isse palpitations, irregular heartbeat, aur kabhi kabhi chest tightness feel hoti hai. Agar dil ki dhadkan bahut tez ya irregular lage, doctor se turant milein.' },
      { _key: 'faq7', question: 'Hyperthyroidism mein pregnancy safe hai kya?', answer: 'Controlled hyperthyroidism mein pregnancy possible hai — lekin uncontrolled mein miscarriage, preterm birth aur baby ke thyroid pe asar ka risk hota hai. Pregnancy plan kar rahi hain to pehle thyroid ko control mein laayein. Pregnancy mein radioiodine allowed nahi — doctor safe antithyroid medicine suggest karta hai.' },
      { _key: 'faq8', question: 'Kya hyperthyroidism mein exercise kar sakte hain?', answer: 'Haan — lekin type matter karta hai. Jab symptoms active hain (tez dhadkan, anxiety), heavy cardio ya weight training avoid karo. Walking, yoga, swimming — ye safe hain. Jab treatment se heart rate settle ho jaaye, tab gradually intensity badha sakte ho — doctor se poochh ke.' },
      { _key: 'faq9', question: 'Hyperthyroidism mein haath kyun kaanpte hain?', answer: 'Zyada thyroid hormone nervous system ko "overdrive" mein daal deta hai — muscles aur nerves mein extra electrical activity hoti hai jiski wajah se haath, aur kabhi kabhi poora body kaanpta hai (tremors). Ye treatment shuru hone ke saath kam hone lagte hain.' },
      { _key: 'faq10', question: 'Kya homeopathy hyperthyroidism mein kaam karta hai?', answer: 'Haan — homeopathy hyperthyroidism mein ek effective complementary approach hai, especially mild-to-moderate cases mein. CCRH-affiliated studies mein palpitations, anxiety aur weight loss teeno mein individualized homeopathic treatment se meaningful improvement dikhi. Homeopathy ka khaas fayda ye hai ki ye sirf hormones nahi — immune system ka balance aur overall constitution bhi address karta hai.' },
      { _key: 'faq11', question: 'Hyperthyroidism ka pehla sign kya hota hai?', answer: 'Aksar pehla sign hota hai — unexplained weight loss jab bhookh normal ya zyada ho, ya dil ki tez dhadkan without reason. Kuch logo mein haath kaanpna ya hamesha garmi lagna pehle shuru hota hai. Agar in mein se koi bhi 2-3 hafte se zyada rahe to thyroid test zaroor karwao.' },
      { _key: 'faq12', question: 'TSH test mein kya aata hai hyperthyroidism mein?', answer: 'Hyperthyroidism mein TSH (Thyroid Stimulating Hormone) ka level normal se NEECHE aata hai — aksar 0.1 se bhi kam. Saath mein T3 aur T4 high aate hain. TSH ko "controller" samjho — agar thyroid hormone already zyada hai, to controller kam ho jaata hai. Isi liye low TSH + high T4 = hyperthyroidism.' },
      { _key: 'faq13', question: 'Hyperthyroidism mein neend kyun nahi aati?', answer: 'Kyunki nervous system constantly stimulated rehti hai — thyroid hormone "alert mode" on rakhta hai. Raat ko bhi dimag sochta rehta hai, dil thoda tez lagta hai, aur body "off" nahi hoti. Magnesium-rich foods, light stretching aur screen-free last 1 hour bedtime se kuch rahat ho sakti hai — lekin primary ilaaj thyroid ka karna zaroori hai.' },
      { _key: 'faq14', question: 'Hyperthyroidism aur anxiety — dono ek saath kyun hoti hai?', answer: 'Thyroid hormone nervous system ka "accelerator" hai. Zyada hormone = nervous system overdrive = anxiety, irritability, sudden mood swings. Kai baar log pehle psychiatrist ke paas jaate hain anxiety ke liye — aur thyroid diagnosis baad mein hota hai. Agar anxiety ke saath weight loss, garmi, tez dhadkan bhi ho — thyroid test pehle karwao.' },
      { _key: 'faq15', question: 'Kya Graves\' disease mein aankhein wapas normal ho sakti hain?', answer: 'Mild cases mein — haan, treatment ke saath aankhein improve ho sakti hain. Severe Graves\' Ophthalmopathy mein steroids, radiation ya surgery ki zaroorat ho sakti hai. Smoking is condition ko significantly worse karta hai — smokers mein aankhon ki problem zyada serious hoti hai. Smoking band karna is condition ka sabse important lifestyle change hai.' },
      { _key: 'faq16', question: 'Hyperthyroidism mein baal kyun jhadte hain?', answer: 'Metabolism zyada tez hone se hair growth cycle disturb ho jaata hai — baal "resting phase" se pehle hi girne lagte hain (Telogen Effluvium). Thyroid control mein aane ke baad 3-6 mahine mein baal wapas aane lagte hain. Protein-rich diet is mein helpful hai — lekin baal theek hone mein time lagta hai, patience zaroori hai.' },
      { _key: 'faq17', question: 'Hyperthyroidism mein periods kyun irregular ho jaate hain?', answer: 'Thyroid hormone directly reproductive hormones (estrogen, FSH, LH) ko affect karta hai. Zyada thyroid hormone se periods bahut halke, kam dino ke liye, ya kabhi kabhi band bhi ho sakte hain. Pregnancy mein bhi affect ho sakta hai. Thyroid control mein aane ke baad period cycle aksar normal ho jaata hai.' },
      { _key: 'faq18', question: 'Hyperthyroidism treatment ke side effects kya hain — antithyroid medicines safe hain kya?', answer: 'Antithyroid medicines (jaise Methimazole, PTU) generally safe hain lekin kuch side effects ho sakte hain: skin rash, joint pain, aur rare cases mein white blood cells kam ho sakte hain (agranulocytosis). Agar fever ya gale mein dard ho treatment ke dauran to turant doctor ko batao. Regular blood tests se monitoring zaroori hai. Radioiodine se permanent hypothyroidism ho sakta hai — doctor se pros-cons discuss karo.' },
      { _key: 'faq19', question: 'Kya hyperthyroidism mein chai aur coffee pi sakte hain?', answer: 'Kam karna chahiye. Caffeine already tez dhadkan, anxiety aur neend ki problem ko aur bada deta hai — jo hyperthyroidism mein already hoti hain. Completely band karna mushkil ho to — green tea ek better alternative hai (caffeine thoda kam, antioxidants zyada). Herbal teas — chamomile, tulsi — safe aur soothing hain.' },
      { _key: 'faq20', question: 'Thyroid test kitni baar karwana chahiye hyperthyroidism mein?', answer: 'Treatment shuru hone ke baad pehle 3-6 mahine mein har 4-6 hafte. Levels stable ho jaayein to har 3 mahine. Long-term control mein har 6 mahine ya saal mein. Agar koi naya symptom aaye — tez dhadkan, anxiety badhe, weight girey — waqt se pehle test karwao. TSH + Free T4 + Free T3 — teeno saath mein test karwao.' },
      { _key: 'faq21', question: 'Hyperthyroidism mein haddiyan (bones) kyun kamzor hoti hain — kya kar sakte hain?', answer: 'Zyada thyroid hormone bone remodeling tez kar deta hai — calcium haddiyon se nikalne lagta hai, density kam hoti hai. Long-term untreated hyperthyroidism se osteoporosis ka risk badh jaata hai, khaskar mahilaon mein menopause ke baad. Bachne ke liye: roz dairy ya ragi se calcium lo, Vitamin D ke liye dhoop mein 20 min, weight-bearing exercise (walking), aur doctor se bone density test (DEXA scan) discuss karo agar condition kaafi time se hai.' },
      { _key: 'faq22', question: 'Kya stress se hyperthyroidism ho ya badh sakti hai?', answer: 'Haan — especially Graves\' disease mein. Stress immune system ko disturb karta hai — jo autoimmune conditions mein direct trigger hai. Kai marizzon mein ek bada emotional trauma ya prolonged stress ke baad Graves\' diagnose hua hai. Isliye stress management — meditation, therapy, proper rest — sirf lifestyle advice nahi, treatment ka hissa hai.' },
      { _key: 'faq23', question: 'Hyperthyroidism mein gardan ki sujan (goiter) hamesha hoti hai kya?', answer: 'Nahi — hamesha nahi. Kuch patients mein goiter clearly dikh jaata hai, kuch mein nahi. Ultrasound thyroid ka size aur nodules accurately batata hai. Agar gardan mein koi bhi sujan feel ho ya dikh rahi ho — khud dabao mat, doctor ko dikhao.' },
      { _key: 'faq24', question: 'Hyperthyroidism ke liye kaun sa doctor hota hai?', answer: 'Endocrinologist — ye thyroid aur hormones ke specialist hain. Shuru mein general physician ya internist diagnose kar sakte hain — lekin treatment planning ke liye endocrinologist se milna better hai. Graves\' Ophthalmopathy mein ophthalmologist bhi team mein hota hai. Homeopathy ke liye — registered aur qualified homoeopath se milein.' },
      { _key: 'faq25', question: 'Kya hyperthyroidism mein weight wapas aa sakta hai?', answer: 'Haan — jaise hi thyroid control mein aata hai, metabolism normal hoti hai aur weight wapas aane lagta hai. Kuch patients overdose se hypothyroid ho jaate hain aur phir zyada weight gain ho jaata hai — isliye regular tests aur dose adjustment zaroori hai. Treatment ke dauran proper protein aur calorie intake maintain karo taaki muscle loss na ho.' },
    ],

    sources: [
      { _key: 'src1', name: 'American Thyroid Association (ATA) — Hyperthyroidism Guidelines | 2016 (Updated 2022)', url: 'https://thyroid.org', year: '2022' },
      { _key: 'src2', name: 'CCRH Multicentric Observational Study, Thyroid Disorders | 2019-2021', url: 'https://ccrhindia.nic.in', year: '2021' },
      { _key: 'src3', name: 'WHO — Thyroid Disorders Global Report | 2023', url: 'https://who.int', year: '2023' },
      { _key: 'src4', name: 'Lancet — GBD Study, Endocrine Disorders in South Asia | 2021', year: '2021' },
      { _key: 'src5', name: 'PubMed — Homeopathy in Thyroid Disorders: A Systematic Review | Journal of Evidence-Based Integrative Medicine', url: 'https://pubmed.ncbi.nlm.nih.gov', year: '2020' },
    ],
  }

  console.log('Seeding Hyperthyroidism...')
  await client.createOrReplace(doc)
  console.log('✅ Hyperthyroidism seeded successfully!')
}

seed().catch(console.error)
