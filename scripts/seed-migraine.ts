import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
  useCdn: false,
})

const migraine = {
  _id: 'disease-migraine',
  _type: 'disease',

  title: 'Migraine',
  hindiName: 'Aadha Sar Dard',
  slug: { _type: 'slug', current: 'migraine' },

  metaTitle: 'Migraine in Hindi — Lakshan, Karan aur Homeopathy Ilaaj',
  metaDescription: 'Migraine ke symptoms, karan, diet tips aur homeopathic treatment — simple Hinglish mein. Verified info, doctor-reviewed.',

  heroText: 'Migraine ek neurological condition hai jisme sirf sar dard nahi hota — balki ek ya dono taraf ka throbbing/pulsating dard hota hai jo ghanton ya 3 din tak chal sakta hai. Saath mein ulti ka mann, roshni aur awaz se takleef, aur kabhi kabhi aankhon ke aage andhere ya chamak dikhna bhi hota hai. Ye aam headache nahi hai — ye brain ke nerves aur blood vessels ka ek complex reaction hai. India mein lagbhag 15 crore se zyada log is problem se pareshan hain, aur mahilaon mein ye teen guna zyada hoti hai.',

  category: 'Neurological',

  quickFacts: {
    whatItIs: 'Migraine ek neurological condition hai — sirf sar dard nahi, ek ya dono taraf ka throbbing dard hota hai jo ghanton ya 3 din tak chal sakta hai',
    howCommon: 'India mein lagbhag 15 crore log affected hain; duniya ki 7th most disabling condition (WHO)',
    treatmentDuration: '3–6 mahine homeopathic treatment mein meaningful improvement ke liye',
    successRate: 'Attack frequency 10 se ghate 1.8/month — placebo mein sirf 9.9 se 7.9 (Mohanty et al., IJHS 2020)',
  },

  causes: [
    'Brain mein serotonin aur CGRP (Calcitonin Gene-Related Peptide) jaise chemicals ka imbalance — ye trigeminal nerve ko activate karta hai aur dard shuru hota hai',
    'Genetic predisposition — agar maa ya baap ko migraine hai to 50% chances hain ki bacche ko bhi ho',
    'Hormonal changes — especially mahilaon mein periods, pregnancy, ya menopause ke waqt estrogen levels ke utaar-chadhav se trigger hota hai',
    'Environmental triggers — tej roshni (sunlight/screen), tej awaz, strong perfume, mausam ka achanak badalna',
    'Sleep disruption — zyada kum ya zyada neend dono migraine ko invite kar sakte hain',
    'Stress aur anxiety — mental ya physical dono tarah ka overload brain sensitivity badha deta hai',
  ],

  riskFactors: [
    'Mahilayein — teen guna zyada risk, mainly hormonal reasons se',
    'Family history wale — first-degree relative mein migraine ho to risk kaafi badh jaata hai',
    '15–55 saal ki umar ke log — is age group mein sabse zyada cases milte hain',
    'Anxiety ya depression ke patients — inme migraine comorbidity bahut common hai',
    'Jo log screen pe zyada kaam karte hain (IT professionals, students) — blue light aur eye strain triggers hain',
    'Jo log irregular khaana khaate hain ya frequently fasting karte hain — blood sugar drop bhi trigger hai',
  ],

  complications: [
    'Chronic Migraine — mahine mein 15 ya usse zyada din sar dard — quality of life practically khatam ho jaati hai',
    'Medication Overuse Headache (MOH) — zyada painkillers lene se "rebound headache" jo aur bura ho jaata hai',
    'Migraine with Aura se stroke ka risk thoda badhta hai — especially smoking karne wali mahilaon mein',
    'Depression, anxiety aur social withdrawal — har waqt attack ka darr rehta hai, kaam-khaana-nind sab affected hota hai',
  ],

  symptoms: [
    {
      _key: 'prodrome',
      category: 'Prodrome Phase — Attack se 1-2 Din Pehle ke Sanket',
      items: [
        'Baar baar ubaasi (yawning) aana',
        'Mood mein badlaav — irritable ya zyada khush',
        'Khaane ki unusual craving ya bhookh khatam hona',
        'Gardan mein akaapan ya tightness',
        'Roshni ya awaz ke liye thoda sensitivity badh jaana',
      ],
    },
    {
      _key: 'aura',
      category: 'Aura Phase — Kuch Logon Mein Attack Se 30-60 Min Pehle',
      items: [
        'Aankhon ke aage chamakti lines, zigzag patterns ya andhere dhabbe dikhna',
        'Haath ya chehra sukna / jhunhunana (numbness/tingling)',
        'Bolne mein takleef ya sahi words na dhundh paana (rare)',
        'Ye symptoms 5-60 minutes tak rehte hain aur phir headache shuru hota hai',
      ],
    },
    {
      _key: 'mainattack',
      category: 'Main Attack Phase — Actual Migraine Headache',
      items: [
        'Sar ke ek taraf (ya kabhi dono taraf) throbbing / dhadakta hua dard',
        'Uthne-chalne par dard badh jaana',
        'Ulti ya nausea ka feel hona',
        'Roshni se dard badhe (photophobia) — andhere kamre mein rehna chahte hain',
        'Awaz se takleef (phonophobia) — shor bardaasht nahi hota',
        'Ye phase 4 se 72 ghante tak chal sakta hai',
      ],
    },
    {
      _key: 'postdrome',
      category: 'Postdrome Phase — Attack Ke Baad',
      items: [
        'Bahut thaka hua mahsoos karna (migraine hangover)',
        'Dimag dhundhla rehna, concentrate karna mushkil',
        '1-2 din tak mood aur energy low rehna',
      ],
    },
  ],

  ccrhEvidence: {
    improvementRate: 'Migraine attacks 10 se ghate 1.8 per month (homeopathy group) vs placebo mein 9.9 se 7.9',
    avgTreatmentPeriod: '6 months (randomized controlled trial)',
    citation: 'Mohanty N, Sahoo AR, Choudhury S, Jena SK | International Journal of Homoeopathic Sciences | 2020; 4(3): 104-108',
    keyFindings: [
      'Attack frequency mein statistically significant reduction (p<0.0001) homeopathy group mein',
      'Pain intensity (VAS scale) kaafi kam hui treatment ke baad',
      'Females zyada affected (76%), 18–29 age group most common',
      'Common triggers identified: sun exposure (38%), stress (37%), sleep deprivation (37%)',
      'Koi adverse effects nahi mile homeopathic group mein',
    ],
  },

  homeopathyBenefits: [
    'Attack ki frequency kam karna — baar baar aane wale migraines ko rokne mein madadgar',
    'Trigger sensitivity ko reduce karna — roshni, perfume, stress jaise triggers ka asar thoda kam hota hai',
    'Hormonal migraine mein khaas fayda — periods-linked migraine mein homeopathy ek safe option hai (pregnancy mein bhi)',
    'No dependency — painkillers ki tarah "medication overuse headache" ka koi risk nahi',
    'Holistic approach — saath mein anxiety, sleep issues, aur digestion bhi theek hota hai jo migraine ke saathi hote hain',
  ],

  homeopathyLimitations: [
    'Acute severe attack mein turant relief ke liye conventional rescue medications (triptans) zyada fast kaam karti hain — homeopathy mainly preventive role mein hai',
    'Migraine with Aura mein ya jahan neurological symptoms complex hain (weakness, speech issues), pehle neurologist se milna zaroori hai — homeopathy complementary role mein ho sakti hai',
  ],

  medicines: [
    {
      _key: 'belladonna',
      name: 'Belladonna',
      potency: '',
      bestFor: 'Achanak shuru hone wala, throbbing dard — chehra laal, roshni bilkul bardaasht nahi',
      keyIndications: [
        'Dard achanak shuru ho aur achanak band ho',
        'Sar mein throbbing/dhadakna — jaisi nase phad rahi hon',
        'Chehra laal aur garam ho',
        'Roshni aur awaz bilkul bardaasht na ho',
        'Larne se dard badh jaaye, lait ne se thoda aram ho',
      ],
    },
    {
      _key: 'irisversicolor',
      name: 'Iris Versicolor',
      potency: '',
      bestFor: 'Ulti ke saath migraine, aankhon ke aage blur — "weekend migraine"',
      keyIndications: [
        'Migraine ke saath zaroori ulti ho (bile)',
        'Aankhon ke aage blur ya visual disturbance pehle aaye',
        'Dard zyada Sunday ko ya rest ke waqt aaye (weekend migraine)',
        'Forehead aur sar ke ek taraf dard',
      ],
    },
    {
      _key: 'natrummur',
      name: 'Natrum Muriaticum',
      potency: '',
      bestFor: 'Hormonal/emotional migraine — periods se linked, aura wala, grief se triggered',
      keyIndications: [
        'Grief, emotional suppression, ya chronic stress mein rehne wale log',
        'Migraine periods se pehle ya periods ke dauran aaye',
        'Aankhon ke aage zigzag lines ya aura ho',
        'Dhoop mein jaane se dard badh jaaye',
        'Mahilaon mein hormonal migraine ka sabse pehla choice',
      ],
    },
    {
      _key: 'spigelia',
      name: 'Spigelia',
      potency: '',
      bestFor: 'Left-sided migraine — aankh ke andar tak jaata hua dard',
      keyIndications: [
        'Dard sirf left side par — sar ke baayi taraf ya aankh ke peeche',
        'Aankhon ko hilaane se ya touch karne se dard badh jaaye',
        'Dard ki jagah bilkul precisely fix ho',
        'Trigeminal nerve involvement wale cases',
      ],
    },
    {
      _key: 'sanguinaria',
      name: 'Sanguinaria Canadensis',
      potency: '',
      bestFor: 'Right-sided migraine — gardan se shuru, ulti ke baad relief',
      keyIndications: [
        'Dard right side par — gardan se shuru hokar sar ke oopar jaaye',
        'Ulti ke baad kuch relief mile',
        'Periods ke waqt zyada ho',
        'Periodic migraine jo baar baar same pattern mein aaye',
        'Cervical region se dard ooper uthta ho',
      ],
    },
  ],

  dietInclude: [
    {
      _key: 'magnesium',
      category: 'Magnesium-Rich Foods',
      emoji: '🥦',
      items: [
        'Palak (spinach) — magnesium deficiency migraine ka ek bada trigger hai; spinach isko naturally pora karta hai',
        'Kaddu ke beej (pumpkin seeds) — high magnesium content, ek mutthi roz helpful ho sakti hai',
        'Banana — magnesium ke saath potassium bhi, jo nerve function ko stabilize karta hai',
      ],
    },
    {
      _key: 'antiinflammatory',
      category: 'Anti-Inflammatory Foods',
      emoji: '🫘',
      items: [
        'Omega-3 rich maach (sardine, mackerel) ya flaxseeds — brain inflammation reduce karne mein help karta hai',
        'Haldi (turmeric) wala doodh ya sabzi — curcumin brain ke pain pathways pe positive effect rakhta hai',
        'Akhrot (walnuts) — plant-based omega-3 ka achha source, daily 4-5 theek hain',
      ],
    },
    {
      _key: 'hydration',
      category: 'Hydration & Stable Energy',
      emoji: '💧',
      items: [
        'Naariyal paani — electrolytes ke saath hydration, dehydration ka trigger rok sakta hai',
        'Oats / dalia — slow-release carbs jo blood sugar stable rakhte hain, sugar crash se migraine rokta hai',
        'Saada pani — din mein 8-10 glass zaroori; dehydration ek underrated migraine trigger hai',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'triggers',
      category: 'Common Dietary Triggers',
      emoji: '🚫',
      items: [
        'Red wine aur alcohol — tyramine aur histamine content se blood vessels dilate hote hain, migraine trigger hota hai',
        'Aged cheeses (processed) — tyramine high hoti hai, migraine trigger kar sakti hai',
        'Dark chocolate — theobromine aur caffeine dono triggers ho sakte hain sensitive logon mein',
      ],
    },
    {
      _key: 'processed',
      category: 'Processed & Additive-Heavy Foods',
      emoji: '🍟',
      items: [
        'MSG (Monosodium Glutamate) wala khaana — chips, instant noodles, Chinese food — common trigger',
        'Processed meats (sausage, salami) — nitrates blood vessels ko directly affect karte hain',
        'Artificial sweeteners (especially aspartame) — diet sodas, sugar-free products — kuch logon mein strong trigger',
      ],
    },
    {
      _key: 'caffeine',
      category: 'Caffeine & Erratic Eating',
      emoji: '☕',
      items: [
        'Zyada chai/coffee — caffeine withdrawal khud ek migraine trigger hai; abruptly band mat karo',
        'Khaana skip karna — khali pet se blood sugar gir jaata hai jo attack invite karta hai',
        'Very cold foods achanak — ice cream ya cold drinks kuch logon mein "brain freeze" type trigger hota hai',
      ],
    },
  ],

  dos: [
    'Migraine diary rakho — date, time, trigger, khaana, neend, mood — pattern pata chalta hai aur doctor ko help milti hai sahi treatment mein',
    'Sone ka time fix karo — weekdays aur weekends dono mein same time pe soye aur utho — irregular sleep sabse bada trigger hai',
    'Pani zyada piyo — din mein kam se kam 2.5–3 litre; dehydration se achanak attack aa sakta hai',
    'Attack ke waqt andhere aur shaant kamre mein lete raho — roshni aur awaz band karo, cold/warm compress jo suit kare lagao',
    'Regular light exercise karo — yoga, walking — endorphins release hote hain jo natural pain relief karte hain',
  ],

  donts: [
    'Khaana skip mat karo — khali pet migraine ka direct trigger hai; har 4-5 ghante mein kuch na kuch khao',
    'Screen pe lagatar mat baitho — har 20 min mein 20-second break lo, screen brightness kam karo; blue light filter use karo',
    'Bina doctor se poocha painkillers roz mat khao — week mein 2-3 se zyada painkiller lena "medication overuse headache" create karta hai',
    'Strong smells se door raho — perfume, petrol, paint, agarbatti — ye common triggers hain',
    'Migraine ko "simple sar dard" samajh ke ignore mat karo — agar aura mein weakness, speech problem, ya ek aankh ki roshni achanak jaaye to turant doctor ke paas jao',
  ],

  faqs: [
    { _key: 'faq1', question: 'Migraine aur normal sar dard mein kya fark hai?', answer: 'Normal tension headache mein dono taraf ka dull dard hota hai jo ghante bhar mein theek ho jaata hai. Migraine mein dard throbbing/dhadakta hua hota hai (aksar ek taraf), ulti ka mann, roshni-awaz se takleef hoti hai, aur ye 4 ghante se lekar 3 din tak chal sakta hai. Migraine sirf "bada sar dard" nahi — ye ek alag neurological condition hai.' },
    { _key: 'faq2', question: 'Kya migraine life mein hamesha rehta hai? Theek ho sakta hai?', answer: 'Migraine ka genetic base hota hai — isliye "ek baar ki dawai aur hamesha ke liye khatam" waali baat nahi hoti. Lekin ye zaroor hota hai: jo log apne triggers pehchaan lete hain, neend-khaana-stress sab manage karte hain, aur sahi treatment le lete hain — unme attacks itne kam ho jaate hain ki mahino tak ek bhi nahi aata. Homeopathy mein khas baat ye hai ki ye sirf dard nahi, poori sensitivity kam karta hai. Kai mahilaon mein menopause ke baad khud hi bahut kam ho jaati hai. Target: attacks rare ho jayein, dard halka ho, aur life normal rahe — aur ye bilkul possible hai.' },
    { _key: 'faq3', question: 'Migraine mein roshni se kyun takleef hoti hai?', answer: 'Migraine attack ke dauran brain ke trigeminal nerve system mein inflammation hoti hai. Is waqt aankhon se aane wale roshni ke signals brain mein hypersensitive area se takraate hain aur dard aur discomfort create karte hain. Isi liye andhere mein kuch relief milta hai — ye nature ka response hai, brain ko rest chahiye hoti hai.' },
    { _key: 'faq4', question: 'Kya migraine sirf mahilaon ko hoti hai?', answer: 'Nahi — mahilaon ko teen guna zyada hoti hai (mainly hormonal reasons se), lekin mard aur bacche bhi affected hote hain. India mein lagbhag 25% migraine patients mard hain. Bacchon mein bhi migraine hoti hai — kuch cases mein sar dard ke bajaye pet dard ya chakkar aana bhi migraine ka roop ho sakta hai.' },
    { _key: 'faq5', question: 'Kya migraine mein MRI ya CT scan zaroori hai?', answer: 'Sirf migraine ke liye routine MRI zaroor nahi hota. Doctor tab imaging karta hai jab: dard naya aur sudden ho, nature pehle se bilkul alag ho, ya neurological symptoms ho jaise weakness, speech problem, ya ek taraf ka numbness. Routine migraine mein clinical diagnosis (symptoms ke basis pe) sufficient hai.' },
    { _key: 'faq6', question: 'Kya homeopathy migraine mein turant relief deti hai?', answer: 'Ji ha — homeopathy mein acute migraine attack aur recurrency rokne ke liye dono tarah ki medicines available hain. Acute severe attack mein Belladonna, Spigelia jaise remedies fast kaam karti hain. Homeopathy ka asli fayda ye hai ki waqt ke saath attacks ki frequency aur intensity kam hoti hai, aur side effects na ke barabar hain.' },
    { _key: 'faq7', question: 'Pregnancy mein migraine ke liye kya karna chahiye?', answer: 'Pregnancy mein kai conventional migraine medicines safe nahi hoti. Is waqt lifestyle modifications (neend, pani, trigger avoidance) pehli priority honi chahiye. Homeopathy pregnancy mein ek safe option mani jaati hai kyunki medicines highly diluted hoti hain — lekin koi bhi medicine lene se pehle ek qualified homoeopath se milna zaroori hai.' },
    { _key: 'faq8', question: 'Migraine ka attack kitna common hai? Kab doctor ke paas jaana chahiye?', answer: 'Mahine mein 1-4 attacks average hain — lekin 15 ya usse zyada din sar dard ho to ye "Chronic Migraine" hai aur doctor se milna urgent hai. Turant doctor ke paas jaao agar: achanak life mein sabse bura sar dard aaye, bukhar ke saath ho, weakness ya speech problem ho, ya seedha accident/injury ke baad ho — ye serious conditions ke signs ho sakte hain.' },
    { _key: 'faq9', question: 'Kya migraine stress ki wajah se hoti hai? Stress hata do to khatam ho jaayegi?', answer: 'Stress ek major trigger hai, lekin migraine ki wajah nahi — migraine ka underlying cause neurological hai. Stress hatane se attacks kam zaroor ho sakte hain (aur honi chahiye), lekin migraine completely stress-free life mein bhi ho sakti hai. Sirf stress pe blame karna ya "sab dimag ka waham hai" sochna galat hai.' },
    { _key: 'faq10', question: 'Migraine mein chai/coffee peeni chahiye ya nahi?', answer: 'Moderate caffeine (1-2 cup din mein regular time pe) kuch logon mein actually dard kam kar sakti hai kyunki blood vessels ko thoda constrict karti hai. Lekin problem tab hai jab aap regular caffeine use kar rahe ho aur achanak band karo — withdrawal se migraine aata hai. Abruptly band karna nahi chahiye; agar reduce karna hai to dheere dheere karo.' },
    { _key: 'faq11', question: 'Migraine ka gharelu ilaaj kya hai — turant relief ke liye?', answer: 'Kuch tried-and-tested ghar ke upay: andhere aur shaant kamre mein lete raho; mathe ya gardan pe cold/ice pack lagao; pani piyo kyunki dehydration dard badha deta hai; peppermint oil ya lavender oil ko mathe pe halka massage karo — kuch logon ko relief milta hai. Ye upay mild-moderate attack mein help karte hain, severe attack mein doctor se milna zaroori hai.' },
    { _key: 'faq12', question: 'Migraine kitne ghante ya din rehta hai?', answer: 'Ek migraine attack 4 ghante se lekar 72 ghante tak chal sakta hai — yani 1 se 3 din tak. Ye har patient mein alag hota hai. Agar dard 72 ghante se zyada rahe bina rukawat ke, to ye "Status Migrainosus" kehlata hai aur doctor se turant milna chahiye. Attack ke baad bhi 1-2 din "migraine hangover" feel hota hai.' },
    { _key: 'faq13', question: 'Migraine mein kya khana chahiye aur kya nahi?', answer: 'Khana chahiye: magnesium wali cheezein jaise palak, kaddu ke beej, banana; omega-3 ke liye akhrot ya flaxseeds; naariyal pani aur khub saada pani. Nahi khana chahiye: MSG wala khaana (chips, instant noodles), red wine, aged cheese, artificial sweeteners, aur processed meats. Sabse zaroori — khaana skip bilkul mat karo, khali pet migraine ka seedha trigger hai.' },
    { _key: 'faq14', question: 'Bacchon mein migraine ke symptoms kya hote hain?', answer: 'Bacchon ka migraine adults se thoda alag hota hai. Inme sar dard dono taraf ho sakta hai, aur duration bhi kam hoti hai (1-2 ghante). Kai bacchon mein sar dard ke bajaye pet dard, ulti, ya chakkar aana migraine ke roop mein aata hai — ise "Abdominal Migraine" kehte hain. Agar aapke bachche ko baar baar pet dard ya chakkar aata hai bina kisi karan ke, to ek baar doctor se migraine ke baare mein baat zaroor karein.' },
    { _key: 'faq15', question: 'Migraine permanently theek ho sakti hai kya?', answer: '"Permanent cure" ki jagah socho "permanent control" — aur ye bilkul possible hai. Jo log apne triggers seriously lete hain, lifestyle maintain karte hain, aur sahi treatment pe tike rehte hain — unme attacks itne rare ho jaate hain ki zindagi practically normal ho jaati hai. Homeopathy is mein khaas role nibhata hai — ye sirf ek attack nahi, baar baar aane wali migraine ki underlying sensitivity ko address karta hai. Kai mahilaon mein menopause ke baad migraine khud hi bahut kam ho jaati hai. Sahi direction mein chalo toh lambe samay tak attack-free rehna ek realistic goal hai.' },
  ],

  sources: [
    { _key: 'who', name: 'World Health Organization (WHO) — Headache Disorders Fact Sheet', url: 'https://www.who.int/news-room/fact-sheets/detail/headaches', year: '2023' },
    { _key: 'mohanty', name: 'Mohanty N et al. — Homoeopathy in the treatment of migraine: A randomized placebo-controlled clinical trial', url: '', year: '2020' },
    { _key: 'amf', name: 'American Migraine Foundation — About Migraine', url: 'https://americanmigrainefoundation.org/', year: '2023' },
    { _key: 'lancet', name: 'Lancet Neurology — Global Burden of Disease Study, Migraine Prevalence', url: '', year: '2020' },
    { _key: 'pubmed', name: 'NCBI/PubMed — Homoeopathy in Migraine: A Systematic Review | European Journal of Integrative Medicine', url: '', year: '2021' },
    { _key: 'ninds', name: 'National Institute of Neurological Disorders and Stroke (NINDS) — Migraine Information Page', url: '', year: '2023' },
  ],

  selfCheck: 'Agar aapko mahine mein 4 se zyada attacks aa rahe hain, ya dard itna badha ho ki kaam nahi ho paata — ye sign hai ki professional treatment ki zaroorat hai. Homeopathy mein iska poora ilaj possible hai.',

  publishedAt: new Date().toISOString(),
}

async function main() {
  try {
    const result = await client.createOrReplace(migraine)
    console.log('✅ Migraine disease document created/updated:', result._id)
    console.log('🌐 Live at: https://homeopedia.in/diseases/migraine')
  } catch (err) {
    console.error('❌ Error:', err)
    process.exit(1)
  }
}

main()
