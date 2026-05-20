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
  _id: 'symptom-psoriasis-symptoms',
  _type: 'symptom',
  title: 'Psoriasis (Chambal)',
  hindiName: 'Chambal / Chambal Ki Bimari',
  slug: { _type: 'slug', current: 'psoriasis-symptoms' },
  bodySystem: 'Skin',
  shortDescription: 'Skin pe mote, safed flaky patches jo baar baar aate hain — immune system ki wajah se skin cells bahut tezi se banti hain.',
  metaTitle: 'Psoriasis in Hindi — Lakshan, Karan aur Homeopathy',
  metaDescription: 'Psoriasis (Chambal) ke lakshan, karan, severity aur ghar pe safe steps — simple Hinglish mein. Verified info, Dr. Shadab reviewed.',
  reviewDate: 'May 2026',

  heroText: `Psoriasis (chambal) ek aisi skin condition hai jisme skin ke upar mote, safed ya silver-rang ke flaky patches ban jaate hain — jo aksar laal, suji hui, aur khujli wali skin pe hote hain. Ye patches baar baar aate hain — theek hote hain, phir laut aate hain.

Body mein kya hota hai: Normally skin cells 28-30 din mein replace hoti hain. Psoriasis mein immune system ki wajah se ye cycle sirf 3-5 din mein ho jaati hai — nayi cells itni tezi se banti hain ki purani cells theek se nahi hat paatein, aur surface pe jama ho jaati hain. Yahi patches ban jaata hai.

Aap akele nahi hain — WHO ke mutabik duniya mein 125 million se zyada log psoriasis se affected hain. India mein bhi lakhon log is bimari ke saath ji rahe hain aur isko manage kar rahe hain.

India mein psoriasis prevalence 0.44% se 2.8% tak estimated hai — matlab har 100 mein 1-2 log is se affected ho sakte hain, aur ye number shehri aur tier-2 cities dono mein similarly dikhta hai.`,

  severityScale: {
    level1: {
      label: 'Ghar Pe Manage Karo',
      signs: [
        'Chhote chhote patches hain — ek ya do jagah, jaise ghutne ya kohni pe — jo itna bade nahi hain',
        'Halki khujli hai lekin raat ko neend nahi uchad rahi',
        'Skin dry aur flaky hai lekin koi dard ya jalan nahi',
        'Pehli baar dhyan gaya hai — kuch din se hai',
      ],
    },
    level2: {
      label: 'Is Hafte Doctor Se Milein',
      signs: [
        'Patches tezi se bade ho rahe hain ya naye areas pe phail rahe hain',
        'Raat ko khujli itni zyada hai ki neend poori nahi hoti',
        'Nakhoon mein bhi changes aa rahe hain — pitting (chhed) ya bhurey rang ke nakhoon',
        'Joints mein bhi dard ya sujan aa gayi hai',
        'Ilaaj ke baad bhi sudhar nahi aa raha — 4 hafte se zyada ho gaye',
      ],
    },
    level3: {
      label: 'Turant Hospital Jaao',
      signs: [
        'Poora sharir laal ho gaya hai — 90% se zyada skin cover ho gayi hai (Erythrodermic Psoriasis — emergency hai)',
        'Skin pe pustules (pus-filled blisters) hain aur saath mein bukhaar aur kaanpna bhi hai (Pustular Psoriasis)',
        'Joints mein itna dard hai ki chal nahi pa rahe ya haath hilana muskil ho raha hai',
      ],
    },
  },

  timeline: [
    {
      duration: 'Nayi Takleef — Pehli Baar Dhyan Aa Raha Hai (1-7 Din)',
      advice: 'Ek naya red, scaly patch achaanak dikha — skin thodi dry ya irritated lagti hai. Abhi panic mat karo — skin pe bohot si cheezein pehle psoriasis jaisi lagti hain (eczema, fungal infection, dandruff). Level 1 steps follow karo aur observe karo. Agar 2-3 hafte mein better nahi hua to doctor se confirmation lena zaroori hai.',
    },
    {
      duration: 'Chalti Aa Rahi — 2 Se 8 Hafte Chal Raha Hai',
      advice: 'Agar patches abhi bhi hain ya bade ho rahe hain — ye signal hai ki body khud resolve nahi kar rahi. Ek dermatologist se proper diagnosis karwao — kyunki sirf diagnosis ke baad sahi treatment choose ki ja sakti hai. Homeopathy mein bhi sahi constitutional assessment tab hi hoti hai jab diagnosis confirm ho.',
    },
    {
      duration: 'Purani Problem — Kaafi Waqt Se Hai Ya Baar Baar Aata Hai',
      advice: 'Psoriasis ke liye ye common hai. Ye ek chronic condition hai jisme flares aate hain aur remission bhi aata hai. Agar cycle toot nahi rahi — doctor ke saath proper long-term plan banana chahiye. Homeopathy is stage mein zyada relevant hoti hai — sirf symptom nahi, flare ki frequency aur intensity ko kam karne pe kaam karta hai.',
    },
  ],

  lifestyleCauses: [
    {
      title: 'Stress (Mansik Tanaav)',
      recognition: 'Notice karo — exam, job pressure, ya family tension ke baad kya patches bade ho jaate hain?',
      description: 'Stress mein body cortisol hormone release karti hai. High cortisol immune system ko disrupt karta hai — aur psoriasis mein immune system pehle se overactive hai. Isliye stress ke baad flare lagbhag predictable hota hai.',
    },
    {
      title: 'Skin Injury Ya Infection (Koebner Phenomenon)',
      recognition: 'Purani chot ki jagah pe ya nakhoon ke aas paas nayi patches aayi hain?',
      description: 'Psoriasis wale patients mein kisi bhi skin injury pe — cut, sunburn, ya vaccination site pe — nayi psoriasis patch ban sakti hai. Isko Koebner Phenomenon kaha jaata hai. Ye immune system ka overreaction hai.',
    },
    {
      title: 'Kuch Medicines (Medication-Triggered)',
      recognition: 'Koi nayi medicine shuru ki thi jab psoriasis aaya ya bada hua?',
      description: 'Kuch medicines — beta-blockers (BP ki), lithium (mental health), antimalarials — psoriasis ko trigger ya worsen kar sakti hain. Ye medicines immune signaling badal deti hain jis se skin cell cycle fast ho jaata hai.',
    },
    {
      title: 'Alcohol Aur Smoking',
      recognition: 'Flares aur alcohol/smoking use ke beech koi pattern hai kya?',
      description: 'Alcohol liver pe load dalta hai — aur liver skin detox mein bhi role karta hai. Smoking skin ke blood vessels ko affect karti hai aur immune response alter karti hai. Dono psoriasis flares ko tez karte hain aur treatment ko kam effective banate hain.',
    },
  ],

  medicalCauses: [
    {
      diseaseName: 'Plaque Psoriasis',
      diseaseHindiName: 'Chambal (Sabse Common Type)',
      diseaseSlug: 'psoriasis',
      isAvailable: true,
      description: '80-90% psoriasis cases yahi hote hain. Ghutne, kohni, kamar aur scalp pe mote, raised, laal patches jiske upar silver-white scales hote hain.',
      recognition: 'Clearly defined edges, symmetrical — dono ghutno pe ya dono kohniyon pe ek saath.',
    },
    {
      diseaseName: 'Scalp Psoriasis',
      diseaseHindiName: 'Sir Ki Chambal',
      diseaseSlug: 'scalp-psoriasis',
      isAvailable: true,
      description: 'Sir pe patches jinka scale bahut mota hota hai aur baalon mein bhi ghus jaata hai. Dandruff jaisa lagta hai lekin zyada mota aur chipka hua. Khujli intense hoti hai, kabhi kabhi bleeding bhi.',
      recognition: 'Normal dandruff shampoo se control nahi hota. Hairline ke paas ya kaano ke upar bhi patches ho sakte hain.',
    },
    {
      diseaseName: 'Psoriatic Arthritis',
      diseaseHindiName: 'Chambal Ke Saath Gathiya',
      diseaseSlug: 'psoriatic-arthritis',
      isAvailable: true,
      description: 'Psoriasis ke kuch patients (15-30%) mein joints mein bhi sujan, dard aur stiffness aati hai — specially subah uthne ke baad zyada hoti hai.',
      recognition: 'Ungli ya ungli ki joints suji hain — saath mein nakhoon mein pitting bhi hai. Ye serious hai — doctor se turant milna chahiye.',
    },
    {
      diseaseName: 'Nail Psoriasis',
      diseaseHindiName: 'Nakhoon Ki Chambal',
      diseaseSlug: '',
      isAvailable: false,
      description: 'Nakhoon mein pitting (chhotey chhotey dent), nakhoon ka pigment badalna (peela-bhura), nakhoon ka thickening, ya nakhoon ka bed se uthna (onycholysis).',
      recognition: 'Akele nail changes ho sakte hain bina skin psoriasis ke — doctor se confirm karao.',
    },
    {
      diseaseName: 'Guttate Psoriasis',
      diseaseHindiName: 'Boond Aakaar Chambal',
      diseaseSlug: 'guttate-psoriasis',
      isAvailable: true,
      description: 'Sudden onset — ek Streptococcal (gale ka) infection ke baad poore body pe chhote chhote drop-shaped laal spots aa jaate hain. Bacchon aur young adults mein zyada hota hai.',
      recognition: 'Gale ki kharash ke 2-3 hafte baad achanak bahut saare chhote spots aye — ye guttate psoriasis ho sakta hai.',
    },
  ],

  redFlags: [
    'Erythrodermic Psoriasis — agar poori body ki skin ek saath laal aur peeling ho rahi ho, saath mein bukhaar ho to turant hospital jaao — ye medical emergency hai.',
    'Pustular Psoriasis — agar skin pe pus-filled blisters hain aur bukhaar ke saath kaanpna bhi ho to ek minute mat ruko.',
    'Psoriatic Arthritis (untreated) — agar joints mein dard ke saath nakhoon mein bhi changes aa rahe hain to rheumatologist se milna zaroori hai — delay se permanent joint damage ho sakta hai.',
  ],

  homeSteps: [
    {
      step: 'Skin Ko Moisturize Rakhein — Baar Baar',
      reason: 'Dry skin mein psoriasis ki khujli aur scaling zyada hoti hai. Moisture barrier ek hadd tak irritation kam karta hai. Naha ke fauran baad moisture lock karo.',
    },
    {
      step: 'Garm Paani Se Nahana Avoid Karein',
      reason: 'Garam paani skin ka natural oil chheen leta hai — psoriasis wali skin mein ye zyada quickly hota hai. Gunguna paani use karo — zyada der tak nahi naho.',
    },
    {
      step: 'Dhoop Mein Thodi Der Baitho (Supervised)',
      reason: 'Controlled sunlight (phototherapy ka basic principle) psoriasis mein skin cell turnover ko slow kar sakti hai. Subah ki dhoop mein 10-15 min — affected areas pe. Sunburn se bachein — wo aur bura karta hai.',
    },
    {
      step: 'Tight Synthetic Kapde Avoid Karein',
      reason: 'Synthetic fabrics skin ke saath friction karte hain — Koebner phenomenon trigger ho sakta hai. Loose, cotton kapde wear karo.',
    },
    {
      step: 'Stress Management Pe Dhyan Do',
      reason: 'Stress psoriasis ka sabse common trigger hai. Roz 10-15 min deep breathing ya light walk — ye cortisol level genuinely kam karta hai aur flare frequency pe fark padta hai.',
    },
  ],

  homeopathyAngle1: 'Psoriasis ka naam ek hai — lekin har insaan ka psoriasis alag hota hai. Kisi ko sardi mein zyada badhta hai, kisi ko garmi mein better hota hai. Kisi ko sirf stress pe flare aata hai, kisi ko infection pe. Kisi ke patches sukhey aur khurasht hain, kisi ke geele aur oozing. Homeopathy mein sirf "psoriasis" ko treat nahi kiya jaata — aapka psoriasis kaisa hai, kab aur kyun badhta hai, ye sab assess kiya jaata hai.',

  homeopathyAngle2: 'Psoriasis ek immune system disorder hai — skin ki problem sirf baahri expression hai. Baar baar wahi patches aana is baat ka signal hai ki underlying imbalance address nahi ho raha. Homeopathy mein sirf patch ko band karna goal nahi hota — jo immune trigger baar baar flare la raha hai usse address karne ki koshish ki jaati hai. Waqt ke saath flares ki frequency aur intensity dono mein fark pad sakta hai — results individual hote hain aur research is area mein limited hai.',

  homeopathyAngle3: 'Psoriasis ke liye conventional treatments (steroids, immunosuppressants) long-term use pe side effects la sakte hain. Homeopathy ek side-effect free complementary option hai — specially tab jab conventional treatment ke saath saath kuch safe additional support chahiye ho. Emergency mein ya severe cases mein conventional treatment pehle — homeopathy baad mein saath chal sakti hai.',

  homeopathyIsFor: [
    'Aap sirf steroid creams se thak gaye hain jo lagao to theek, chhodo to wapas aa jaata hai',
    'Aap flares ki frequency aur intensity long-term mein kam karna chahte hain — ek raat mein nahi, lekin sustainable tarike se',
    'Aapki skin sensitive hai ya saath mein doosri medicines bhi chal rahi hain aur side-effect free option chahiye',
  ],

  homeopathyNotFor: [
    'Aapki condition erythrodermic ya pustular hai — pehle emergency care, homeopathy baad mein',
    'Aap ek hafte mein guaranteed results chahte hain — psoriasis slow disease hai, koi bhi system se ek hafte mein complete relief honest nahi hai',
  ],

  homeopathyDiseaseLinks: [
    { diseaseName: 'Plaque Psoriasis', diseaseSlug: 'psoriasis', diseaseHindiName: 'Chambal (Common Type)' },
    { diseaseName: 'Scalp Psoriasis', diseaseSlug: 'scalp-psoriasis', diseaseHindiName: 'Sir Ki Chambal' },
    { diseaseName: 'Psoriatic Arthritis', diseaseSlug: 'psoriatic-arthritis', diseaseHindiName: 'Chambal Ke Saath Gathiya' },
  ],

  linkedDiseaseCards: [
    {
      diseaseName: 'Plaque Psoriasis',
      diseaseHindiName: 'Chambal (Sabse Common Type)',
      diseaseSlug: 'psoriasis',
      isAvailable: true,
    },
    {
      diseaseName: 'Scalp Psoriasis',
      diseaseHindiName: 'Sir Ki Chambal',
      diseaseSlug: 'scalp-psoriasis',
      isAvailable: true,
    },
    {
      diseaseName: 'Psoriatic Arthritis',
      diseaseHindiName: 'Chambal Ke Saath Gathiya',
      diseaseSlug: 'psoriatic-arthritis',
      isAvailable: true,
    },
    {
      diseaseName: 'Nail Psoriasis',
      diseaseHindiName: 'Nakhoon Ki Chambal',
      diseaseSlug: '',
      isAvailable: false,
    },
    {
      diseaseName: 'Guttate Psoriasis',
      diseaseHindiName: 'Boond Aakaar Chambal',
      diseaseSlug: 'guttate-psoriasis',
      isAvailable: true,
    },
  ],

  faqs: [
    {
      question: 'Psoriasis symptoms kya hote hain — aur normal skin se kaise alag pehchanein?',
      answer: 'Psoriasis ke main symptoms hain: laal, suji hui skin ke upar mote safed ya silver-gray scales — ye patches clearly defined edges ke saath hoti hain. Khujli hoti hai, kabhi kabhi dard ya jalan bhi. Sabse common jagahein hain ghutne, kohni, kamar aur scalp.\n\nNormal dry skin ya dandruff se fark: Psoriasis ke patches uthte hain (raised hain), zyada mote aur chipke hue hote hain, aur sirf moisturizer se theek nahi hote. Edges clearly cut hoti hain — normal dry skin mein aisa nahi hota.\n\nAgar patches baar baar aa rahe hain — theek hote hain phir aate hain — to ye psoriasis ka classic pattern hai. Ek dermatologist se confirm karwao.',
    },
    {
      question: 'Psoriasis kitne waqt tak rehta hai bina ilaaj ke?',
      answer: 'Psoriasis ek chronic condition hai — iska matlab ye nahi ki hamesha patches rahenge, lekin ye apne aap poori tarah se permanently theek bhi nahi hota bina kisi approach ke.\n\nBina ilaaj ke: Chhote patches dheere dheere bade ho sakte hain, naye areas pe phailna shuru ho sakta hai, flares baar baar aa sakte hain — stress, infection ya season change pe, aur Psoriatic Arthritis ka risk time ke saath badh sakta hai.\n\nKuch patients mein "spontaneous remission" hoti hai — flare apne aap theek ho jaata hai — lekin ye predict nahi kiya ja sakta aur wapas aa sakta hai. Agar 4 hafte se zyada ho gaya hai aur better nahi hua — doctor se milna chahiye.',
    },
    {
      question: 'Psoriasis kyun hota hai — sabse common wajah kya hai?',
      answer: 'Psoriasis ki root cause immune system ka ek genetic malfunction hai — ye contagious ya infection se hone wali bimari nahi hai.\n\nIs bimari mein immune system skin cells ko galti se "enemy" samajh leti hai aur unhe bahut tezi se replace karna shuru kar deti hai — normal 30 din ki jagah 3-5 din mein. Itni fast cells accumulate ho jaati hain skin pe — yahi patches ban jaata hai.\n\nTriggers jo flares "on" karte hain: stress (sabse common), skin injury ya infection (Koebner Phenomenon), kuch medicines (beta-blockers, lithium), alcohol aur smoking, aur Streptococcal infection — khas taur pe guttate type mein.',
    },
    {
      question: 'Kya psoriasis ek lifelong bimari hai — theek nahi ho sakta?',
      answer: 'Psoriasis ek chronic condition hai — matlab ek baar hone ke baad completely eliminate karna mushkil hota hai. Lekin ye zindagi bhar har waqt patches rahenge — aisa nahi hai.\n\nJo realistic hai: flares aate hain aur remission bhi aati hai, sahi treatment aur trigger management se flares ki frequency bahut kam ho sakti hai, aur kaafi patients practically normal life jeete hain — controlled psoriasis ke saath.\n\n"Permanent cure" ka vaada koi bhi system honestly nahi kar sakta — aur koi kare to doubt karo. Jo achieve kiya ja sakta hai: flares ko control karna, skin ko manageable rakhna, aur quality of life improve karna.',
    },
    {
      question: 'Psoriasis starting stage mein kaisa dikhta hai?',
      answer: 'Psoriasis usually ek chhoti laal, scaly jagah se shuru hota hai — jo dandruff ya dry skin jaisi lagti hai par uthne lagti hai.\n\nEarly signs jo miss ho sakte hain: ek ya do jagah pe scaly, laal patches — ghutne ya kohni pe; sir pe itching aur flaking jo shampoo se control nahi ho rahi; nakhoon mein chhotey chhotey dent ya pitting shuru hona; kabhi kabhi achanak bahut saare chhote spots — ye guttate type hota hai, aksar gale ke infection ke baad.\n\nEarly stage mein psoriasis ko eczema, fungal infection ya dry skin se confuse karna bohot common hai. Isliye khud se diagnose mat karo — dermatologist se confirm karwao, specially agar patches 2-3 hafte mein better na hon.',
    },
    {
      question: 'Kya homeopathy psoriasis mein kaam karta hai?',
      answer: 'Homeopathy psoriasis ke liye ek complementary approach hai — especially un patients ke liye jo long-term steroid creams se thak gaye hain ya jo flare cycle todna chahte hain.\n\nHomeopathy mein psoriasis ka approach: constitutional assessment — sirf skin nahi, poori health history, triggers, kab zyada badhta hai — sab dekha jaata hai. Sirf patch suppress karna goal nahi — immune trigger address karne ki koshish hoti hai. Side-effect free — conventional treatment ke saath chal sakta hai.\n\nHonest baat: Research is area mein limited hai, aur results individual hote hain. Kuch patients mein flare frequency mein meaningful improvement dekhne ko milti hai, kuch mein nahi. Erythrodermic ya pustular psoriasis mein conventional care pehle — stable, chronic psoriasis mein ye ek viable complementary option hai.',
    },
    {
      question: 'Psoriasis aur Eczema (Dermatitis) mein kya fark hai?',
      answer: 'Psoriasis mein: patches mote, raised aur clearly defined edges ke saath; silver-white thick scales; khujli hoti hai lekin eczema jitni intense nahi hoti usually; common jagah: ghutne, kohni, kamar, scalp; nakhoon bhi affected ho sakte hain.\n\nEczema (Dermatitis) mein: skin zyada dry aur cracked hoti hai — scales thin hoti hain; khujli bohot intense hoti hai — kharashat se bleeding; common jagah: kohni ke andar, ghutne ke andar, chehre pe; bacchon mein zyada common hai; allergic triggers se bhadta hai.\n\nDono mein clear distinction sirf dermatologist kar sakta hai — kabhi kabhi biopsy bhi zaroori hoti hai.',
    },
    {
      question: 'Scalp psoriasis ke symptoms kya hote hain?',
      answer: 'Scalp psoriasis ke specific signs: sir pe mote, chipke hue safed ya silver scales — normal dandruff se kahin zyada mote; patchy laal areas — hairline pe, kaano ke upar, gardan pe; intense khujli — kabhi kabhi itni ki bleeding ho jaati hai; baalon ka jhad bhi ho sakta hai (temporary); scales hair mein ghussi hoti hain — brush ya comb se easily nahi nikalti.\n\nScalp psoriasis aur dandruff mein fark: dandruff oily hoti hai aur anti-dandruff shampoo se better hoti hai. Scalp psoriasis dry, mota aur sticky hota hai — aur scalp treatment shampoos se manage kiya jaata hai. Confirm karne ke liye dermatologist.',
    },
    {
      question: 'Kya psoriasis se doosri serious bimariyaan ho sakti hain?',
      answer: 'Haan — psoriasis sirf skin tak seemit nahi rehta. Ye ek systemic inflammatory condition hai:\n\nPsoriatic Arthritis: 15-30% patients mein joints bhi affect hote hain — agar treat na kiya jaaye to permanent joint damage.\nHeart Disease: Research suggest karta hai ki severe psoriasis mein cardiovascular risk thoda badha hua hota hai.\nMental Health: Chronic skin condition hone ki wajah se depression aur anxiety ka risk bhi zyada hota hai.\nMetabolic Syndrome: Diabetes aur high blood pressure ka association bhi noted kiya gaya hai severe psoriasis mein.\n\nIska matlab ye nahi ki ye sab zaroor hoga — lekin psoriasis ko serious lena chahiye aur regular checkups zaroori hain.',
    },
    {
      question: 'Psoriasis mein konsa test karwana chahiye?',
      answer: 'Psoriasis ki diagnosis aksar clinical hai — matlab doctor dekh ke pehchaan leta hai. Koi ek specific blood test nahi hai jo confirm kare.\n\nTests jo doctor suggest kar sakte hain: Skin Biopsy — chhota sa tissue sample — microscope se psoriasis confirm hoti hai (tab karwate hain jab diagnosis confirm karna ho); Blood Tests (ANA, RF) — jab psoriatic arthritis ka suspicion ho — joint bimari rule out karne ke liye; Nail Examination — nakhoon ki pitting ya changes clinical examination se hi diagnose hoti hai.\n\nAgar dermatologist ke paas jaate hain to usually biopsy ke bina bhi diagnosis ho jaati hai agar symptoms classic hain.',
    },
    {
      question: 'Psoriasis se permanently kaise chutkara milega?',
      answer: 'Seedha honest jawab: Koi bhi system — allopathic, homeopathic, Ayurvedic — "permanent cure" ka guarantee nahi de sakta psoriasis mein. Aur koi deta hai to doubt karo.\n\nJo realistic aur achievable hai: long-term remission — kai patients mein years tak patches nahi aate; flare frequency mein kaafi kami — monthly flares ki jagah saal mein 1-2; quality of life normal ho sakti hai — controlled psoriasis mein practically normal life possible hai.\n\nKya karna chahiye long-term ke liye: triggers identify karo aur manage karo (stress, alcohol, infection); sahi treatment approach; seasonal care; aur regular doctor checkups — psoriatic arthritis detect karne ke liye.',
    },
    {
      question: 'Kya psoriasis ek infectious bimari hai — kya ye dusron ko bhi ho sakta hai?',
      answer: 'Bilkul nahi — psoriasis ek infectious bimari nahi hai. Na haath milane se, na saath baithne se, na kapde share karne se, na swimming pool mein saath se — psoriasis kisi ko bhi nahi lagta.\n\nIndia mein bahut common galat assumption hai ki psoriasis chhoot jaata hai — isliye psoriasis wale log social stigma ka samna karte hain jo bilkul galat hai.\n\nPsoriasis ek immune system + genetic condition hai — ye ek insaan ke andar ki bimari hai, baahri contact se nahi jaati. Agar aapko ye condition hai — social isolation zaruri nahi hai, aur embarrassment ki koi wajah nahi hai.',
    },
  ],

  quickFacts: [
    'Psoriasis mein skin cell turnover 3-5 din mein hoti hai — normal 28-30 din ki jagah.',
    'India mein estimated 1-2% population psoriasis se affected hai — ICMR data.',
    'Patches 4 hafte se zyada hain, bade ho rahe hain, ya joints mein dard bhi hai — doctor zaruri hai.',
  ],

  relatedSymptoms: [
    { title: 'Khujli (Body Itching)', slug: 'body-itching' },
    { title: 'Skin Rash (Twacha Pe Daane)', slug: 'skin-rash' },
    { title: 'Joint Pain (Jodon Mein Dard)', slug: 'joint-pain' },
    { title: 'Dandruff (Severe)', slug: 'dandruff' },
  ],

  sources: [
    { title: 'World Health Organization — Psoriasis Factsheet (2023)', url: 'https://www.who.int/news-room/fact-sheets/detail/psoriasis' },
    { title: 'Mayo Clinic — Psoriasis: Symptoms, Causes, Diagnosis (2024)', url: 'https://www.mayoclinic.org/diseases-conditions/psoriasis/symptoms-causes/syc-20355840' },
    { title: 'NCBI — Psoriasis Pathophysiology (2023)', url: 'https://www.ncbi.nlm.nih.gov/books/NBK448194/' },
    { title: 'Indian Journal of Dermatology — Epidemiology of Psoriasis in India (2022)', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9753966/' },
  ],
}

async function seed() {
  console.log('Seeding psoriasis-symptoms...')
  const result = await client.createOrReplace(symptom)
  console.log('Done:', result._id)
}

seed().catch(console.error)
