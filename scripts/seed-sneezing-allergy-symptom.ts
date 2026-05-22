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
  _id: 'symptom-sneezing-allergy',
  _type: 'symptom',
  title: 'Sneezing Allergy (Chheenk Ki Allergy)',
  hindiName: 'Chheenk Ki Allergy / Naak Ki Allergy',
  slug: { _type: 'slug', current: 'sneezing-allergy' },
  bodySystem: 'Respiratory',
  shortDescription: 'Subah uthke baar baar chheenk, naak mein kharish, aankhon mein paani — allergic rhinitis India mein sabse common chronic respiratory problem hai.',
  metaTitle: 'Sneezing Allergy in Hindi — Karan aur Homeopathy | HomeoPedia.in',
  metaDescription: 'Sneezing allergy (chheenk ki allergy) ke karan, severity aur ghar pe safe steps — simple Hinglish mein. Verified info, Dr. Shadab reviewed.',
  reviewDate: 'May 2026',

  heroText: `Subah uthte hi ek ke baad ek chheenk — rukne ka naam hi nahi. Naak mein kharish, aankhon mein paani, aur saans bhaari. Yahi hota hai jab allergic sneezing ka daura padta hai — aur India mein ye problem bahut zyada common hai.

Chheenk aana body ka ek natural defense mechanism hai — naak andar aaye kisi allergen (baahri cheez jise body threat samajhti hai) ko bahar nikaalti hai sneeze karke. Lekin jab ye baar baar ho, roz ho, ya mahino tak chale — to ye sirf "chheenk" nahi, ek pattern hai jo treat karna zaroori hai.

WHO ke data ke anusaar, allergic rhinitis (chheenk aur naak ki allergy ka medical naam) duniya bhar mein 10-30% logon ko affect karta hai — India mein Tier 2-3 cities mein bhi ye teezi se badh raha hai.

Ye page aapko batayega: aapki chheenk allergy hai ya kuch aur, kitni serious hai, aur kya karna chahiye.`,

  severityScale: {
    level1: {
      label: 'Ghar Pe Manage Karo',
      signs: [
        'Subah uthke 5-10 chheenkein aati hain, phir band ho jaati hain',
        'Chheenk ke saath sirf naak mein paani ya halki kharish hai',
        'Kisi jagah jaane pe ya dust mein jaane pe hoti hai — wahan se niklo to band ho jaati hai',
        'Bukhaar nahi hai, body pain nahi hai',
        'Naak band nahi hai ya thodi der mein khul jaati hai',
      ],
    },
    level2: {
      label: 'Is Hafte Doctor Se Milein',
      signs: [
        'Roz subah 15-20+ chheenkein aati hain, hafte se zyada ho gaya',
        'Chheenk ke saath aankhon mein bhi jalan aur paani hai',
        'Raat ko neend nahi hoti naak band rehne ki wajah se',
        'Gale mein kharish ya mild sore throat bhi hai',
        'School ya office mein concentrate nahi ho raha',
      ],
    },
    level3: {
      label: 'Turant Doctor Jaao',
      signs: [
        'Chheenk ke saath saans lene mein takleef ya wheeze (saanson ki awaaz) aa rahi hai',
        'Chehre par, hothon par ya gale mein sujan aa gayi',
        'Chheenk ke daure mein haath-paon thande aur chakkar aa rahe hain',
        'Naak se khoon aa raha hai baar baar',
      ],
    },
  },

  timeline: [
    {
      duration: 'Nayi Takleef — 1 se 3 Din',
      advice: 'Agar kisi nayi jagah gaye, koi naya fabric liya, ya mausam achanak badla — to ye temporary allergic reaction ho sakta hai. Body naye allergen se adjust kar rahi hai. Ghar pe rest karo, trigger se door raho. Agar 3 din mein better nahi hua to doctor se milna zaroori hai.',
    },
    {
      duration: 'Chalti Aa Rahi — 1 se 4 Hafte',
      advice: 'Ek hafte se zyada ho gayi aur subah subah pattern hai — to ye sirf coincidence nahi. Body kisi specific trigger ke saath react kar rahi hai jo roz aata hai — ghar ki dhool, takiye ka kapda, ya outdoor pollen. Doctor se milna zaroori hai is hafte mein — jitna late, utna pattern set ho jaata hai.',
    },
    {
      duration: 'Purani Problem — 1 Mahina Ya Zyada',
      advice: 'Agar mahino ya saalon se ye chal raha hai — ye chronic allergic rhinitis hai. Ghar pe manage karna mushkil hota jaata hai. Doctor se milein aur allergy test karwane ka sochein. Homeopathy is case mein root cause level pe kaam karna shuru karti hai — results time lete hain, lekin pattern todna possible hai.',
    },
  ],

  lifestyleCauses: [
    {
      title: 'Ghar Ki Dhool aur Dust Mites',
      recognition: 'Subah uthke sabse zyada hoti hai? Raat bhar takiye ke paas dust mites se exposure hota hai — ye sabse badi clue hai.',
      description: 'Ghar ki dhool mein microscopic keede hote hain jinhein "dust mites" kehte hain — ye kapde, takiye, carpets mein rehte hain. Jab hum naak se saans lete hain to ye particles andar jaate hain. Naak ki andar ki lining mein "mast cells" hoti hain — ye dust mites ko threat samajh kar "histamine" release karti hain. Ye histamine hi naak mein sujan, kharish, aur chheenk paida karta hai.',
    },
    {
      title: 'Mausam Badlna aur Outdoor Pollen',
      recognition: 'Ghar ke andar kam hoti hai, bahar jaane pe zyada? Subah baahar niklo to attack zyada hota hai? Ye pollen allergy ka classic pattern hai.',
      description: 'Ghasoon, paudhon aur peron ke microscopic pollen particles hawaon mein udkar naak mein ghus jaate hain. India mein October-November aur February-March mein ye sabse zyada hota hai. Body pollen ko enemy samajhkar immune response deti hai — jisme chheenk, naak ka paani, aur aankhon mein paani aata hai.',
    },
    {
      title: 'Pet Animals Ka Fur Ya Dander',
      recognition: 'Kisi ke ghar gaye jahan pet ho — aur wahan chheenk shuru ho jaaye? Ya ghar mein pet lene ke baad se problem start hui ho? Ye pet dander allergy hai.',
      description: 'Billi, kutta ya doosre pets ki skin se microscopic particles — jinhein "pet dander" kehte hain — hawa mein rehte hain. Ye naak mein jaate hain aur sensitive logon mein allergic reaction start ho jaati hai. Interesting baat: allergy actually fur se nahi, ek specific protein se hoti hai jo pets ki skin se aati hai.',
    },
    {
      title: 'Strong Smells aur Chemical Fragrances',
      recognition: 'Specific smell aate hi turant chheenk shuru — aur wahan se hat ke ruk jaaye? Aankhon mein problem nahi hoti zyada? Ye irritant-induced sneezing hai, pure allergy nahi.',
      description: 'Agarbatti ka dhuan, strong perfume, floor cleaner, ya paint ki smell — ye chemical particles seedhe naak ki lining ko irritate karte hain. Ye allergic reaction nahi, "irritant-induced sneezing" hai — lekin jo pehle se sensitive hai unhe ye zyada affect karta hai.',
    },
  ],

  medicalCauses: [
    {
      diseaseName: 'Allergic Rhinitis',
      diseaseHindiName: 'Naak Ki Allergy / Hay Fever',
      diseaseSlug: '',
      isAvailable: false,
      description: 'Allergic rhinitis mein hi sabse zyada chronic sneezing allergy hoti hai — ye is symptom ka medical naam hai. Chheenk subah zyada, naak mein paani rehta hai, aur saal mein specific mausam mein badh jaati hai. Trigger hata lo to thodi der baad band bhi ho jaati hai.',
      recognition: 'Roz subah uthke chheenk ka episode — koi bukhar nahi, body pain nahi. Seasonal pattern ho sakta hai.',
    },
    {
      diseaseName: 'Asthma',
      diseaseHindiName: 'Dama / Saans Ki Bimari',
      diseaseSlug: '',
      isAvailable: false,
      description: 'Bahut se asthma patients mein sneezing allergy bhi saath hoti hai — kyunki dono ka root ek hi hai: respiratory tract ki allergic hypersensitivity. Sneezing naak mein hoti hai, asthma bronchial tubes mein — lekin trigger aur mechanism dono similar hote hain.',
      recognition: 'Sneezing ke saath agar saans thodi bhari lage ya halki wheeze aaye — to asthma rule out karna zaroori hai.',
    },
    {
      diseaseName: 'Sinusitis',
      diseaseHindiName: 'Sinus Infection / Naak Ke Upar Dard',
      diseaseSlug: '',
      isAvailable: false,
      description: 'Allergic sneezing baar baar hone se naak ki lining sujh jaati hai — is sujan se sinus cavities drain nahi hoti. Blocked sinuses mein bacteria grow karte hain — sinusitis shuru ho jaati hai. Is case mein chheenk ke saath chehra bhaari lagta hai, aankhon ke neeche dard hota hai.',
      recognition: 'Chheenk ke saath chehra heavy lage, ya mathe/gaal mein pressure feel ho — to sinusitis possible hai.',
    },
    {
      diseaseName: 'Allergic Conjunctivitis',
      diseaseHindiName: 'Aankhon Ki Allergy',
      diseaseSlug: '',
      isAvailable: false,
      description: 'Naak aur aankhon ki allergy ka source aksar same hota hai — pollen, dust, ya pet dander. Isliye sneezing allergy ke zyada patients mein aankhon mein bhi paani, lali, ya kharish saath aati hai. Ye "allergic rhinoconjunctivitis" hai.',
      recognition: 'Chheenk ke episode mein aankhein bhi laal, paani ya irritated hoti hain — dono saath saath.',
    },
    {
      diseaseName: 'Urticaria (Pitthi)',
      diseaseHindiName: 'Pitthi / Chhapaki / Hives',
      diseaseSlug: '',
      isAvailable: false,
      description: 'Kuch patients mein same allergic trigger — khana, dust, ya dawa — ek saath skin pe pitthi aur chheenk dono produce karta hai. Ye multi-system allergic response hai. Aisa ho to allergy aur zyada systemic ho gayi hai — doctor se milna urgent hai.',
      recognition: 'Chheenk ke saath body pe chakte ya pitthi aati ho — ye sirf naaki allergy nahi, body-wide reaction hai.',
    },
  ],

  redFlags: [
    'Anaphylaxis — agar chheenk ke saath gale mein khinchav, saans mein takleef, haath-paon mein jhinjhanahat ho to ek minute bhi mat ruko, turant emergency jaao.',
    'Nasal Polyps — agar chheenk saalon se hai, smell band ho gayi hai, aur ek nostril hamesha band rehta hai — to doctor se ENT referral lo, endoscopy zaroori ho sakti hai.',
    'Agar sirf chheenk nahi, har cheez se reaction hai, baar baar infections bhi ho rahe hain — to immune system evaluate karna zaroori hai.',
  ],

  homeSteps: [
    {
      step: 'Trigger Se Door Ho Jaao — Pehla Aur Sabse Zaroori Step',
      reason: 'Attack ka pehla kaam source remove karna hai — dhoop mein the to andar aao, dhool thi to doosre kamre mein jaao. Jab tak allergen naak ke paas hai, chheenk ruk nahi sakti.',
    },
    {
      step: 'Naak Gently Saaf Karo',
      reason: 'Naak ke andar jo allergen hai use bahar nikalna chahiye — gentle saaf karo, zor se blow mat karo (sinus mein pressure badh jaata hai). Ek nostril band karo, dheere se doosri se. Tissue use karo har baar.',
    },
    {
      step: 'Saline Nasal Rinse Use Karo — Agar Available Ho',
      reason: 'Naak mein normal saline (namak paani) se gentle rinse karna allergen ko physically flush karta hai. Ye safe hai, koi side effect nahi. Ready-made saline sprays medical shops pe milte hain.',
    },
    {
      step: 'Kamre Ki Khidki Band Karo — Khas Subah Mein',
      reason: 'Subah 6-10 baje outdoor pollen sabse zyada hawa mein hota hai. Is time window mein windows band rakho — especially bedroom ki. HEPA filter wala AC sabse better hai allergy mein.',
    },
    {
      step: 'Takiya Cover Garam Paani Mein Dho — Dust Mite Ke Liye',
      reason: 'Subah zyada chheenk hai? Takiye ka cover dhone ka sochein — garam paani mein. Kapde ke old takiye aur mattress mein dust mites hote hain jo raat bhar saath rehte hain. Cover change karna akela sabse fast relief deta hai dust mite allergy mein.',
    },
    {
      step: 'Aankhein Mat Malo Attack Ke Waqt',
      reason: 'Aankhon se allergen haath pe aata hai aur naak mein wapas jaata hai — malana allergen cycle ko worsen karta hai. Aankhon mein paani ho to tissue se gently dabao, malo mat.',
    },
  ],

  homeopathyAngle1: 'Chheenk ka naam ek hai — lekin har insaan mein alag hoti hai. Kisi ko subah uthke 20 baar aati hai, kisi ko dhool mein, kisi ko sirf billi ke paas, to kisi ko sardi mein warm room mein band ho jaati hai. Homeopathy mein sirf "chheenk ki allergy" nahi dekhi jaati — aapki chheenk kab badhti hai, kab better hoti hai, saath kya aata hai (naak, aankhein, ya gala) — ye sab milake treatment decide hoti hai.',

  homeopathyAngle2: 'Saalon se har mausam mein chheenk aana aksar ek deeper immune system imbalance ka signal hai. Antihistamine tablets symptom ko temporarily rok deti hain — lekin allergen wapas aate hi body phir react karti hai, kyunki underlying sensitivity wahi rehti hai. Homeopathy mein ye sensitivity address karna goal hota hai — taaki body ka overreaction samay ke saath kam ho. Results individual hote hain aur time lete hain.',

  homeopathyAngle3: 'Sneezing allergy mein jo patients antihistamines se bachna chahte hain — neend aana, thakaan — unke liye homeopathy ek safe complementary option hai. Bacchon mein, elderly mein, aur jo log daily basis pe koi medication nahi lena chahte — unke liye especially relevant hai. Emergency ya severe allergic reaction mein conventional emergency treatment zaroor pehle lein.',

  homeopathyIsFor: [
    'Aap saalon se seasonal ya year-round chheenk se pareshan hain aur sirf tablet se "manage" nahi karna chahte',
    'Aap root cause level pe immune sensitivity address karna chahte hain',
    'Aapko antihistamines se neend aati hai aur daily kaam affect hota hai',
  ],

  homeopathyNotFor: [
    'Abhi isi waqt severe attack hai — pehle doctor ki prescribed emergency medicine lein, baad mein homeopathy discuss karein',
    'Anaphylaxis ke signs hain — ye emergency hai, turant hospital jaao',
  ],

  homeopathyDiseaseLinks: [],

  linkedDiseaseCards: [
    {
      diseaseName: 'Allergic Rhinitis',
      diseaseHindiName: 'Naak Ki Allergy / Hay Fever',
      diseaseSlug: '',
      isAvailable: false,
    },
    {
      diseaseName: 'Asthma',
      diseaseHindiName: 'Dama / Saans Ki Bimari',
      diseaseSlug: '',
      isAvailable: false,
    },
    {
      diseaseName: 'Sinusitis',
      diseaseHindiName: 'Sinus Infection',
      diseaseSlug: '',
      isAvailable: false,
    },
    {
      diseaseName: 'Allergic Conjunctivitis',
      diseaseHindiName: 'Aankhon Ki Allergy',
      diseaseSlug: '',
      isAvailable: false,
    },
    {
      diseaseName: 'Urticaria (Pitthi)',
      diseaseHindiName: 'Pitthi / Chhapaki / Hives',
      diseaseSlug: '',
      isAvailable: false,
    },
  ],

  faqs: [
    {
      question: 'Sneezing allergy ka sabse common karan kya hai?',
      answer: 'Sneezing allergy ka sabse common karan hai naak mein allergen jaana — aur sabse common allergens hain dust mites, outdoor pollen, aur pet dander.\n\nJab allergen naak ki andar wali lining ke contact mein aata hai, wahan ki "mast cells" ek chemical — histamine — release karti hain. Ye histamine hi chheenk, kharish, aur naak ka paani paida karta hai — ye body ka defense mechanism hai.\n\nIndia mein dust mite allergy (ghar ki dhool) aur pollen allergy dono bahut common hain. Agar subah uthke sabse zyada hoti hai — dust mite suspect karo. Bahar jaane pe zyada ho — pollen ya outdoor allergen suspect karo.',
    },
    {
      question: 'Sneezing allergy aur normal sardi mein fark kya hai?',
      answer: 'Sneezing allergy aur common cold mein bahut log confuse hote hain — dono mein naak bahti hai aur chheenk hoti hai.\n\nFark ye hain:\n- Allergy mein bukhar NAHI hota — cold mein aksar hota hai\n- Allergy mein body pain NAHI hota — cold mein thakaan aur dard hota hai\n- Allergy specific jagah ya mausam mein zyada hoti hai — cold kisi bhi time ho sakta hai\n- Allergy ki chheenk subah uthke bahut zyada hoti hai — cold mein aisa pattern nahi\n- Allergy mein aankhon mein bhi kharish ho sakti hai — cold mein yahan kam hota hai\n\nAgar saath bukhar nahi hai lekin har subah chheenk hoti hai — allergy zyada likely hai.',
    },
    {
      question: 'Roz subah uthke itni chheenk kyun hoti hai?',
      answer: 'Morning sneezing allergy India mein bahut common complaint hai. Iske kuch main reasons hain:\n- Raat bhar takiye ke paas dust mites ke saath sote hain — naak sensitized ho jaati hai\n- Subah body ka cortisol level (ek natural anti-inflammatory hormone) raat mein lowest hota hai — isliye allergy response zyada strong hoti hai\n- Subah 6-10 baje outdoor pollen hawa mein sabse zyada hota hai — khidki khuli ho to andar aa jaata hai\n- Room temperature raat se subah mein achanak change hota hai — ye bhi trigger karta hai sensitive logon mein\n\nAgar morning sneezing mahino se hai — ek baar doctor se milna aur allergy test karwana helpful hoga.',
    },
    {
      question: 'Sneezing allergy kitne din mein theek hoti hai?',
      answer: 'Ye is baat pe depend karta hai ki cause kya hai:\n- Trigger-based allergy (ek baar kuch mila, chheenk aayi) — trigger hata lo to 1-2 ghante mein band ho jaati hai\n- Seasonal allergy — jab tak woh season hai, tab tak symptoms rahenge. Season khatam hote hi better hota hai\n- Chronic / Year-round allergy — mahino tak rehti hai agar cause nahi hataya to\n\nAntihistamine tablet lete hain to temporary relief milti hai — lekin next exposure pe wapas aata hai. Long-term mein cause identify karna aur address karna zaroori hai.',
    },
    {
      question: 'Kya sneezing allergy dangerous hai — kab doctor zaruri hai?',
      answer: 'Zyada tar cases mein sneezing allergy dangerous nahi hoti — ye discomforting zaroor hai, khatarnak nahi.\n\nLekin ye signs hon to serious case hai:\n- Chheenk ke saath saans lene mein takleef ya wheeze\n- Gale ya chehre mein sujan\n- Ek ghante mein ruk nahi rahi\n- Chakkar ya kamzori\n\nYe anaphylaxis ke signs ho sakte hain — ek severe allergic reaction — aur is case mein turant doctor zaroori hai.\n\nNormal sneezing allergy mein saans theek hoti hai — sirf naak aur aankhon mein discomfort hota hai.',
    },
    {
      question: 'Kya homeopathy sneezing allergy mein kaam karta hai?',
      answer: 'Homeopathy sneezing allergy mein complementary role mein kaam kar sakti hai — especially chronic aur recurring cases mein.\n\nAntihistamine tablets jo short-term relief deti hain unke side effects hote hain (neend aana, dry mouth) — aur jab band karo to allergy wapas aati hai. Homeopathy ka approach underlying immune sensitivity address karna hai — taaki body ka allergen ke against overreaction samay ke saath reduce ho.\n\nYe time leta hai — 1-2 hafte mein dramatic result expect mat karo. Chronic cases mein 3-6 mahine ka regular treatment zyada realistic timeline hai. Results individual hote hain — aur research is area mein limited hai.',
    },
    {
      question: 'Sneezing allergy mein kaunsa test karwana chahiye?',
      answer: 'Sneezing allergy ke liye mainly teen types ke tests hote hain:\n- Skin Prick Test: Skin pe thodi matra mein alag alag allergens daale jaate hain — jahan reaction ho wahan allergy confirm hoti hai. Sabse common test hai.\n- Blood Test (IgE): Serum IgE levels check karta hai — high IgE allergy confirm karta hai. Specific allergen ke liye RAST ya ImmunoCAP test bhi hota hai.\n- Nasal Smear: Naak se sample leke dekha jaata hai ki eosinophils (allergy cells) hain ya nahi.\n\nAllergy test ke liye ENT doctor ya Allergist se milein. Test karne se pehle antihistamine band karni hoti hai — doctor aapko batayenge kitne din pehle.',
    },
    {
      question: 'Bacchon mein sneezing allergy kyun hoti hai?',
      answer: 'Bacchon mein sneezing allergy bahut common hai — aur India mein 5-14 saal ke bacchon mein ye badh rahi hai.\n\nBacchon mein common triggers hain:\n- School ka dusty mahaul\n- Chalk dust — especially old schools mein\n- Carpet ya school bag mein dust mites\n- Pet wale ghar mein rehna ya dost ke ghar jaana\n\nBacchon mein ye pattern hota hai: school mein zyada chheenk, ghar pe chhuttiyon mein kam. Is pattern se school-related trigger suspect karo.\n\nAgar bacche ki neend affect ho rahi ho ya school mein concentration kharab hai — doctor se milein.',
    },
    {
      question: 'Pregnancy mein sneezing allergy safe hai kya — kya karna chahiye?',
      answer: 'Pregnancy mein sneezing allergy ki problem aur badi ho jaati hai — kyunki hormonal changes naak ki lining ko already sensitive kar dete hain. Isko "pregnancy rhinitis" bhi kehte hain.\n\nPregnancy mein kya karna chahiye:\n- Trigger se door rehna — sabse safe step\n- Saline nasal rinse use karna — completely safe hai\n- HEPA air purifier kamre mein lagana help karta hai\n- Antihistamines bina doctor ke bilkul mat leni — kuch pregnancy mein safe hain, kuch nahi — doctor decide karein\n\nHomeopathy pregnancy mein safe complementary option hai — lekin yahan bhi doctor ki guidance zaroori hai.',
    },
    {
      question: 'Kya dust allergy sneezing permanently theek ho sakti hai?',
      answer: '"Permanent cure" ka vaada koi bhi system honestly nahi de sakta — aur koi deta hai to doubt karo.\n\nJo realistic improvement possible hai:\n- Trigger avoid karne se symptoms dramatically kam ho jaati hain — ye sabse effective step hai\n- Immunotherapy (Allergy Shots) — is western treatment mein gradually allergen expose kiya jaata hai — body isko accept karne lagti hai. Results good hain lekin process 3-5 saal ka hai\n- Chronic cases mein homeopathy se immune sensitivity reduce karna clinical practice mein observed hai — results individual hote hain\n\nPractically bolein to — jo log trigger manage karte hain aur consistent treatment lete hain, unki life quality bahut better ho jaati hai. Ye realistic goal hai.',
    },
    {
      question: 'Sneezing allergy ka attack achanak aaye to kya karo?',
      answer: 'Agar sneezing allergy ka achanak attack aaye:\n1. Us jagah se nikal jaao jo trigger kar rahi hai\n2. Fresh air mein aao — andar the to bahar, ya AC wali jagah mein dust se door\n3. Naak gently saaf karo — hard blow mat karo\n4. Saline nasal spray agar paas ho to use karo\n5. Thoda pani piyo — naak ke andar dry nahi honi chahiye\n6. Aankhein mat malo — aankhon se allergen haath pe aata hai aur naak mein wapas jaata hai\n\nAgar 30-60 minute mein better nahi hua ya saans ki takleef ho — turant doctor se milein.',
    },
    {
      question: 'India mein sneezing allergy ke specific triggers kya hain?',
      answer: 'India mein sneezing allergy ke kuch specific triggers hain jo aur jagah itne common nahi:\n- Agarbatti aur dhoop — ghar mein roz jali jaati hai, smoke directly naak irritate karta hai sensitive logon ko\n- Diwali season mein patakhe ka dhuan — October-November mein allergy ka worst time ho jaata hai\n- Construction dust — shehron mein nonstop construction, khuli khidkiyan se dust andar aata hai\n- Ghar mein dry jhaadu — dry jhaaduun se dust hawa mein ud jaati hai, wet mop ya microfiber better hai\n- Subah khulle mein baithna — chai peene ki habit bahar baithke karte hain jab pollen sabse zyada hota hai\n\nPractical tips: Agarbatti low-smoke wali use karo. Ghar mein wet mopping prefer karo. Subah bahar zyada hoti hai to wo time andar bithao.',
    },
  ],

  quickFacts: [
    'Sneezing allergy ka medical naam "Allergic Rhinitis" hai — aur ye duniya mein sabse common chronic respiratory condition hai.',
    'WHO ke data ke anusaar allergic rhinitis world population ke 10-30% logon ko affect karta hai — India mein urban areas mein ye number aur zyada hai.',
    'Agar subah ki chheenk teen hafte se zyada se chal rahi ho aur ghar pe better nahi ho rahi — doctor se milein.',
  ],

  relatedSymptoms: [
    { title: 'Skin Allergy (Twacha Ki Allergy)', slug: 'skin-allergy' },
    { title: 'Sar Dard (Headache)', slug: 'headache' },
    { title: 'Gale Mein Dard', slug: 'gale-mein-dard' },
  ],

  sources: [
    { title: 'World Health Organization — Allergic Rhinitis and its Impact on Asthma (ARIA) Guidelines 2022', url: 'https://www.who.int/initiatives/aria' },
    { title: 'Mayo Clinic — Hay Fever (Allergic Rhinitis): Symptoms and Causes (2024)', url: 'https://www.mayoclinic.org/diseases-conditions/hay-fever/symptoms-causes/syc-20373039' },
    { title: 'NCBI — Allergic Rhinitis: Epidemiology and Natural History (2023)', url: 'https://www.ncbi.nlm.nih.gov/books/NBK538186/' },
    { title: 'NHS UK — Allergic Rhinitis: Causes, Symptoms and Treatment (2023)', url: 'https://www.nhs.uk/conditions/allergic-rhinitis/' },
  ],
}

async function seed() {
  console.log('Seeding sneezing-allergy symptom...')
  const result = await client.createOrReplace(symptom)
  console.log('Done:', result._id)
}

seed().catch(console.error)
