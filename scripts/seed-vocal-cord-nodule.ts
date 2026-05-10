import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-vocal-cord-nodule',
  _type: 'disease',
  title: 'Vocal Cord Nodule',
  hindiName: 'Awaaz Ki Gaanth / Gale Ki Gaanth',
  slug: { _type: 'slug', current: 'vocal-cord-nodule' },
  category: 'ENT',
  publishedAt: '2026-05-10T00:00:00.000Z',
  metaTitle: 'Vocal Cord Nodule – Ilaaj, Karan aur Homeopathy',
  metaDescription: 'Gale ki gaanth (vocal cord nodule) ka ilaaj, lakshan, karan aur homeopathic treatment – simple Hinglish mein. Verified info, doctor-reviewed.',

  heroText: 'Vocal cord nodule ek chhoti, sakht gaanth hoti hai jo awaaz ki nason (vocal cords) par ban jaati hai – bilkul waise jaise haath par chhaala pad jaata hai zyada kaam karne se. Ye gaanth dono cords par aamaatour ek hi jagah banti hai aur awaaz ko kharaab, bhaari, ya thaki hui kar deti hai. Ye bimari koi ek din mein nahi hoti – weeks ya months mein dheere dheere develop hoti hai, aur agar ilaaj nahi karein to awaaz aur bhi baith jaati hai. Singers, teachers, coaches, call centre workers aur jo log zyada bolte hain unhe ye sabse zyada hoti hai.',

  quickFacts: {
    whatItIs: 'Vocal cords par banne wali chhoti sakht gaanth jo zyada bolne ya galat technique se hoti hai – singers aur teachers mein sabse common occupational voice disorder',
    howCommon: 'India mein lagbhag 30% professional voice users (teachers, singers, call centre workers) apne career mein kisi na kisi point pe voice disorder experience karte hain – nodule sabse common type hai',
    treatmentDuration: 'Early soft nodule: 6-12 hafte conservative treatment mein significant improvement; mid-stage: 3-6 mahine consistent treatment ke saath',
    successRate: 'Jo log voice rest aur treatment seriously lete hain unme 70-80% cases mein surgery ki zaroorat nahi padti – early stage mein treatment shuru karna sabse zaroori hai',
  },

  causes: [
    'Vocal overuse – ghanton tak cheekhaana, teaching, coaching, singing bina proper technique ke; cords ko rest nahi milta',
    'Wrong voice technique – galat pitch pe bolna, naak se bolna, ya pressed voice use karna; cords pe extra pressure padta hai',
    'Loud environment mein kaam – background noise mein zyada awaaz nikaalni padti hai; cords overwork karti hain',
    'Acid reflux (GERD) – pait ka acid gale tak aata hai aur cords ko irritate karta hai; ye bahut underdiagnosed cause hai India mein',
    'Smoking aur alcohol – vocal cord tissues dry aur inflamed karte hain, healing slow karti hai',
    'Dehydration – pani kam peene se cords properly vibrate nahi kar paati; friction badhta hai aur nodule risk barhta hai',
  ],

  riskFactors: [
    'Teachers aur lecturers – din mein 6-8 ghante bina mic ke padhana',
    'Professional singers – especially untrained ya incorrect technique waale',
    'Call centre employees – lambi shifts mein non-stop baat karna',
    'Coaches aur trainers – field pe cheekh ke instruction dena',
    'Mothers jinhein chhote bacche sambhalne mein zyada awaaz nikaalni padti hai',
    'Bacche – khaskar woh jo school mein zyada bolte hain ya khelne mein cheekhaate hain',
    'GERD ya acidity ke patients – reflux ongoing irritant hai',
  ],

  complications: [
    'Chronic hoarseness – awaaz permanently bhari ya baith sakti hai; career-ending ho sakta hai singers aur teachers ke liye',
    'Vocal cord hemorrhage – zyada strain se cord mein bleeding ho sakti hai; ek acute emergency',
    'Nodule ka fibrosis – naram gaanth waqt ke saath sakht ho jaati hai aur tab sirf surgery se remove hoti hai',
    'Psychological impact – awaaz pe depend karti professions mein anxiety, depression, aur job loss ka stress',
  ],

  types: [
    {
      _key: 'type1',
      name: 'Soft / Early Stage Nodule (Naram Gaanth)',
      description: 'Ye shuruaat ki stage hai. Gaanth abhi pakki nahi hui – thodi naram aur inflammatory hai. Is stage mein awaaz thodi kharaab hoti hai, especially subah uthte waqt ya zyada bolne ke baad. Is stage mein conservative treatment (voice rest + homeopathy) sabse effective hai. Agar is stage pe dhyan dein to surgery ki zaroorat hi nahi padti.',
    },
    {
      _key: 'type2',
      name: 'Firm / Chronic Nodule (Sakht Gaanth)',
      description: 'Yahan gaanth months tak ignore karne ke baad pakki ho jaati hai – fibrous tissue ban jaata hai. Awaaz zyada baith jaati hai, range kam ho jaati hai, aur professional singers ko unke career pe asar dikhta hai. Is stage mein homeopathy aur voice therapy dono milake kaam karte hain. Time zyada lagta hai lekin results aate hain.',
    },
    {
      _key: 'type3',
      name: 'Bilateral Nodule (Dono Taraf Gaanth)',
      description: 'Aamaatour nodule dono vocal cords pe aamne saamne banti hain – "kissing nodules" bhi kehte hain. Ye tab hoti hai jab overuse bahut zyada aur lambe time tak hota hai. Management complex hota hai – strict voice rest aur specialized treatment zaroori hai.',
    },
    {
      _key: 'type4',
      name: 'Vocal Cord Polyp (Related Condition – Alag Hai)',
      description: 'Polyp aur nodule alag hain – ye aksar confuse hote hain. Polyp ek taraf hoti hai, fluid-filled ya soft hoti hai, aur kabhi kabhi ek sudden injury (cheekh, cough) se bhi ho sakti hai. Polyp mein surgery ki zaroorat zyada hoti hai compared to nodule. Agar diagnosis clear nahi hai to ENT se laryngoscopy karaein.',
    },
    {
      _key: 'type5',
      name: 'Functional Dysphonia (Voice Nodule Jaisi Awaaz, Gaanth Nahi)',
      description: 'Kuch cases mein awaaz kharaab hoti hai par actual nodule nahi hoti – ye muscle tension ya voice misuse ki wajah se hota hai. Iska ilaaj Homoeopathy aur voice therapy se hota hai, surgery se nahi. Accurate diagnosis ke liye video laryngoscopy zaroori hai.',
    },
  ],

  symptoms: [
    {
      _key: 'sym1',
      category: 'Awaaz Mein Badlaav (Pehla Ishara)',
      items: [
        'Awaaz baith jaana ya bhaari ho jaana – din ke baad zyada',
        'Subah uthne par awaaz theek, lekin bolne ke kuch ghante baad phir kharaab ho jaana',
        'Awaaz mein "double tone" aana – ek saath do awaaz nikalna',
        'Singing range kam ho jaana – high notes nahi nikal paate',
      ],
    },
    {
      _key: 'sym2',
      category: 'Discomfort Aur Throat Symptoms',
      items: [
        'Gale mein "kuch atak gaya hai" jaisi feeling – constant urge to clear throat',
        'Bolne mein mehnat lagana – pehle aasaan tha, ab thakaan hoti hai',
        'Gale mein halka dard ya khichav – khaaskar zyada bolne ke baad',
        'Khansi aane ki koshish karna baar baar – nodule irritation se',
      ],
    },
    {
      _key: 'sym3',
      category: 'Severe / Advanced Signs (Doctor Ko Dikhao)',
      items: [
        '2 hafte se zyada baithi awaaz jo rest se theek nahi ho rahi',
        'Awaaz ka ek cheekh ya loud shout ke baad achanak kharaab ho jaana – polyp ya hemorrhage ka sign; turant ENT dikhao',
        'Bolna almost impossible ho jaana',
        'Khaana nigalte waqt dard hona – ye nodule ka sign nahi, alag condition hai',
      ],
    },
  ],

  homeopathyBenefits: [
    'Non-invasive – koi chirfa nahi, koi anesthesia nahi; surgery ka darr nahi rakhna padta, especially singers aur teachers ke liye',
    'Soft nodule mein resolution possible – early stage mein gaanth khud reduce ho sakti hai voice rest ke saath saath',
    'Recurrence prevention – sirf gaanth nahi, jo tendency thi (acidity, vocal strain pattern, stress) use bhi address karta hai',
    'Children ke liye safe – bacchon mein childhood vocal nodules ke liye homeopathy safe aur gentle option hai',
    'Voice therapy ke saath saath chal sakta hai – complementary approach mein dono milake better results dete hain',
  ],

  medicines: [
    {
      _key: 'med1',
      name: 'Argentum Nitricum',
      bestFor: 'Singer ya speaker jinka gala zyada use se kharaab hua ho – awaaz baith jaati hai performance se pehle, anxiety bhi rehti hai.',
      keyIndications: [
        'Overuse aur nervousness dono milke awaaz affect karein – performance anxiety + hoarse voice',
        'Awaaz baith jaati hai baat karne se ya performance se pehle',
        'Singers mein especially indicated – vocal cord inflammation with anxiety',
      ],
    },
    {
      _key: 'med2',
      name: 'Causticum',
      bestFor: 'Jo log zyada bola karte hain aur awaaz dheere dheere kho rahe hain – teachers, preachers, jo subah awaaz kharaab paate hain lekin din mein thodi improve hoti hai.',
      keyIndications: [
        'Subah awaaz kharaab, din mein thoda better – characteristic pattern',
        'Laryngeal weakness aur chronic hoarseness – continuous overuse se thaki awaaz',
        'Teachers aur preachers ke liye commonly indicated medicine',
      ],
    },
    {
      _key: 'med3',
      name: 'Phosphorus',
      bestFor: 'Jin logon ki awaaz bolne se bilkul chali jaati hai – "voice giving out" – aur gale mein burning ya rawness feel hoti hai. Singers jinki high notes pehle achhi thi ab nahi nikalti.',
      keyIndications: [
        'Voice giving out – bolne se awaaz chali jaati hai',
        'Gale mein burning ya rawness – laryngeal sensitivity prominent',
        'Cold air se, subah mein, ya bolne se awaaz aur kharaab ho',
      ],
    },
    {
      _key: 'med4',
      name: 'Arum Triphyllum',
      bestFor: 'Jo log apni awaaz par control kho dete hain – kabhi high kabhi low without intention. Cheekhaane ke baad ya campaign/function ke baad awaaz bekar ho jaana – politicians, coaches, anchors.',
      keyIndications: [
        'Uncontrolled voice pitch – ek hi sentence mein awaaz break ho jaana',
        'Cheekhaane ke baad awaaz bekar hona – event/function ke baad',
        'Pitch instability – nodule ki wajah se jo awaaz control nahi rehta',
      ],
    },
    {
      _key: 'med5',
      name: 'Spongia Tosta',
      bestFor: 'Jab gale mein kharaash ke saath awaaz baith jaaye – dry cough, gale mein sookha pan, aur khaansi ki wajah se baat karna mushkil ho jaata hai.',
      keyIndications: [
        'Larynx ki dryness aur tightness – gale mein sukhapan prominent',
        'Dry cough ke saath baithi awaaz – khaansi se baat karna mushkil',
        'Sardi ya dry weather mein worse – vocal cord dryness ke saath nodule',
      ],
    },
  ],

  dietInclude: [
    {
      _key: 'di1',
      category: 'Hydrating Foods',
      emoji: '💧',
      items: [
        'Naariyal paani – vocal cords ko hydrated rakhta hai, naturally soothing',
        'Khira (cucumber) – high water content, throat irritation kam karta hai',
        'Tarbuz (watermelon) – hydration aur anti-inflammatory dono kaam karta hai',
      ],
    },
    {
      _key: 'di2',
      category: 'Anti-Inflammatory Foods',
      emoji: '🌿',
      items: [
        'Haldi wala doodh (golden milk) – curcumin inflammation reduce karta hai; raat ko sone se pehle lena best hai',
        'Adrak ki chai (bina milk, bina sugar) – natural anti-inflammatory, throat clearance mein help karta hai',
        'Shahad (honey) – raw honey throat coat karta hai aur mild antibacterial hai; warm water mein milakar lena best hai',
        'Tulsi kadha – easily available, throat soothing aur immunity dono support karta hai',
      ],
    },
    {
      _key: 'di3',
      category: 'Soft, Easy-to-Swallow Foods',
      emoji: '🥣',
      items: [
        'Dal ka pani ya moong dal – protein mile throat pe stress nahi',
        'Khichdi – easily digestible, pait ka acid nahi badhta; GERD wale ke liye specially helpful',
        'Banana – soft, no acid, instant energy; singers ke liye pre-performance good option',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'Acid-Triggering Foods',
      emoji: '🚫',
      items: [
        'Chai (milk tea) ya coffee zyada matra mein – acid badhata hai, cords irritate karta hai',
        'Khatta khana – nimbu, imli, achaar – acid reflux badh sakta hai jo cords ko directly damage karta hai',
        'Tomato sauce, ketchup – acidic hote hain, reflux trigger karte hain',
      ],
    },
    {
      _key: 'da2',
      category: 'Throat-Irritating Foods',
      emoji: '🌶️',
      items: [
        'Bahut teekha khaana – mirch se throat mein inflammation badh sakti hai',
        'Fried aur oily food – digestion slow karta hai, acid reflux ka risk badh jaata hai',
        'Cold drinks aur ice cream – extreme temperature se vocal cord muscles tighten ho jaate hain; professional singers ke liye strictly avoid',
      ],
    },
    {
      _key: 'da3',
      category: 'Dehydrating Items',
      emoji: '🚺',
      items: [
        'Alcohol – vocal cord tissues ko dry karta hai aur swelling badh sakti hai',
        'Smoking ya passive smoking – direct inflammatory damage, healing slow',
        'Bahut zyada namak – water retention aur tissue swelling badhta hai',
      ],
    },
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Vocal cord nodule ka ilaaj kya hai – bina operation ke?',
      answer: 'Vocal cord nodule ka ilaaj bina operation ke possible hai – khaaskar jab gaanth early ya mid stage mein ho (soft nodule). Ilaaj ke teen main pillars hain: voice rest – cords ko heal karne ka time dena; voice therapy – sahi technique seekhna; aur homeopathic treatment – inflammation reduce karna aur tissue healing support karna. Jo log inko seriously lete hain unme 70-80% cases mein surgery ki zaroorat nahi padti. Surgery tab consider hoti hai jab gaanth pakki (fibrous) ho jaaye ya conservative treatment mein response nahi aaye. Qualified ENT se diagnosis zaroori hai pehle.',
    },
    {
      _key: 'faq2',
      question: 'Awaaz kyun baith jaati hai baar baar – kya ye nodule ki nishani hai?',
      answer: 'Awaaz ka baar baar baithna ya bhaari rehna vocal cord nodule ki ek common aur early nishani ho sakti hai – lekin har baar baithi awaaz nodule nahi hoti. Agar awaaz sirf ek do din mein theek ho jaaye to likely inflammation ya common cold hai. Lekin agar awaaz 2 hafte se zyada baithi rahe, rest ke baad bhi fully recover nahi ho, awaaz mein double tone ya pitch break aane lage, ya bolne mein effort zyada lagta ho – to ENT se laryngoscopy karaana chahiye. Early diagnosis mein treatment aur easy hoti hai.',
    },
    {
      _key: 'faq3',
      question: 'Vocal cord nodule aur polyp mein kya fark hai?',
      answer: 'Dono alag conditions hain aur treatment bhi alag hai. Vocal Cord Nodule dono cords par aamne saamne hoti hai (bilateral mostly), overuse se dheere dheere banti hai – weeks/months mein, aur early stage mein voice rest + therapy se theek ho sakti hai. Vocal Cord Polyp usually ek hi cord par hoti hai, fluid-filled ya soft hoti hai, aur kabhi kabhi ek sudden cheekh ya cough se bhi ho sakti hai; polyp mein surgery ki zaroorat zyada hoti hai. Dono ka sahi diagnosis sirf laryngoscopy (ENT dwara) se hota hai – dekhne ke bina differentiate karna possible nahi hai.',
    },
    {
      _key: 'faq4',
      question: 'Singer ka gala kharab ho gaya – kya career khatam ho gaya?',
      answer: 'Bilkul nahi – vocal cord nodule ke saath kai bade singers successful treatment kara chuke hain aur career continue kiya hai. Zaroorat hai: sahi diagnosis (video laryngoscopy), strict voice rest, trained speech therapist se vocal technique correction, aur patience. Early stage mein treat karein to complete recovery possible hai. Nodule ignore karna aur perform karte rehna – yahi career ko actually khatam karta hai, nodule khud nahi. Jo singers shuruaat mein rok lete hain aur proper treatment karte hain, unme results bahut better aate hain.',
    },
    {
      _key: 'faq5',
      question: 'Kya homeopathy vocal cord nodule mein kaam karta hai?',
      answer: 'Haan – homeopathy vocal cord nodule mein ek useful approach hai, khaaskar early to mid stage mein jab gaanth abhi soft hai. Homeopathic treatment do cheezein address karta hai: ek – nodule ki inflammation; doosra – underlying cause jo nodule banate time tha (acidity, stress, voice overuse pattern). Is tarike se sirf gaanth nahi, recurrence ka risk bhi kam hota hai. Severe ya fibrous nodule mein homeopathy akele kaafi nahi – ENT evaluation aur voice therapy zaroori hai. Ek qualified homoeopath se milein jo aapki poori history dekhke individualized treatment de sake.',
    },
    {
      _key: 'faq6',
      question: 'Vocal cord nodule khud se theek ho sakti hai kya?',
      answer: 'Early stage (soft nodule) mein – haan, kuch cases mein strict voice rest ke saath nodule khud reduce ho sakti hai. Lekin ye sirf tab hota hai jab aap bolna genuinely kam karein (sirf "dheere bolna" kafi nahi), jo cause tha use bhi address karein (acidity, wrong technique), aur regular follow-up karein. Without treatment, nodule khud se theek nahi hoti – balki waqt ke saath sakht hoti jaati hai. "Wait and watch" tab chalega jab ENT ne khud suggest kiya ho aur regular monitoring ho rahi ho.',
    },
    {
      _key: 'faq7',
      question: 'Teacher ko voice nodule ho gaya – school chhodni padegi kya?',
      answer: 'Zaroorat nahi. Par kuch adaptations zaroori hain: classroom mein mic ya voice amplifier use karein – ye game changer hai; standing teaching ke dauraan zyada force lagaana avoid karein; bina mic ke lecture mat dein bade classrooms mein; treatment ke dauraan kuch weeks ka light duty ya voice rest possible karna chahiye – school management se baat karein. Kai teachers successful treatment ke baad full career continue karte hain. Sahi support aur tools ke saath teaching continue karna possible hai.',
    },
    {
      _key: 'faq8',
      question: 'Bacchon mein gale ki gaanth (vocal nodule) – kya karna chahiye?',
      answer: 'Bacchon mein vocal cord nodule bahut common hai – khaaskar woh jo school mein zyada bolte hain, cheekhaate hain, ya sports mein loud hain. Acha news ye hai ki bacchon mein nodule puberty ke baad aksar khud reduce ho jaati hai voice change ke saath. Treatment mein mostly: voice education (unhe samajhana ki cheekhna kyu nahi chahiye), parents ki involvement, aur kabhi kabhi speech therapy. Surgery children mein bahut rarely recommend ki jaati hai.',
    },
    {
      _key: 'faq9',
      question: 'Vocal cord nodule mein kya khaana chahiye aur kya nahi?',
      answer: 'Khaana bhi treatment ka hissa hai – khaaskar acidity (GERD) control karna bahut important hai kyunki acid reflux nodule ko directly worse karta hai. Khaayein: gunguna paani, naariyal paani, haldi doodh, adrak-shahad mixture, khichdi, moong dal, banana, soft vegetables. Avoid karein: chai/coffee zyada matra mein, khatte fruits, fried-oily food, cold drinks, alcohol, teekha khaana, aur raat ko late dinner. Raat ka khana sone se 2-3 ghante pehle khaana zaroor karo – ye akela change bahut logon ki acidity aur throat symptoms mein significant improvement laata hai.',
    },
    {
      _key: 'faq10',
      question: 'Vocal cord nodule aur GERD (acidity) ka kya connection hai?',
      answer: 'Ye connection bahut underdiagnosed hai India mein. GERD (pait ka acid gale tak aana) vocal cords ko directly irritate karta hai – isse ek cycle banta hai jahan cords already inflamed hoti hain aur overuse se nodule ban jaati hai. Kai patients jo sirf voice therapy se theek nahi hote unhe diagnose karne par pata chalta hai ki unhe GERD tha jo treat hi nahi hua tha. Agar aapko raat mein gala kharaab hota hai ya subah uthne par gala sabse bhaari lagta hai – GERD evaluation zaroori hai ENT ke saath.',
    },
    {
      _key: 'faq11',
      question: 'Vocal cord nodule mein kitne din voice rest lena chahiye?',
      answer: 'Ye nodule ki stage par depend karta hai. Soft/early nodule: 1-2 hafte complete relative voice rest (sirf zaroori baat, whispering nahi). Mid-stage nodule: 2-4 hafte, doctor guidance mein. Recovering from surgery: 7-14 din complete voice rest, fir gradual return. Voice rest ka matlab sirf dheere bolna nahi – whispering actually harmful hai. Matlab hai: bolna minimize karna, aur bolne ki quality sahi rakhna. Ek speech therapist proper guidance de sakta hai.',
    },
    {
      _key: 'faq12',
      question: 'Gala saaf karne (throat clearing) ki aadat kaise chhodein?',
      answer: 'Throat clearing (ahem ahem karna) vocal cords ke liye bahut damaging hai – ye directly cords ko ek doosre se zabardasti takraata hai. Nodule patients ke liye ye ek sabse buri aadat hai. Kaise chhodein: jab throat clear karne ki urge aaye – ek ghoot gunguna paani piyein; ya muh band karke naak se ek gehri saans lein; ya hard swallow karein (ek baar) – ye cords ko saaf karta hai without injury. Aadat todne mein 2-3 hafte lagte hain – conscious effort zaroori hai.',
    },
    {
      _key: 'faq13',
      question: 'Kya baat bilkul band kar leni chahiye – vocal cord nodule mein?',
      answer: 'Complete silence (absolute voice rest) sirf severe cases ya surgery ke baad recommend hoti hai. Warna relative voice rest better approach hai – yaani, sirf zaroori baatein karein, normal volume mein, aur bolna minimize karein overall. Whisper karna, cheekhaana, aur zyada der tak baat karna – ye teeno avoid karein. Jab bolna ho, clear aur relaxed voice use karein – force nahi karna.',
    },
    {
      _key: 'faq14',
      question: 'Vocal cord nodule ki homeopathic medicine kaun si hai?',
      answer: 'Homeopathy mein vocal cord nodule ke liye commonly indicated medicines mein Argentum Nitricum, Causticum, Phosphorus, Arum Triphyllum, aur Spongia Tosta shamil hain. Lekin ye medicines generic list hai – aapke liye kaun si sahi hai ye aapki symptoms, nature, aur overall health dekhke sirf ek qualified homoeopath decide karega. Potency aur dose bhi bilkul personal hoti hai. Bina consultation ke medicine lena avoid karein.',
    },
    {
      _key: 'faq15',
      question: 'Kya whisper karna (dheere bolna) voice ko rest deta hai?',
      answer: 'Nahi – ye ek bahut common galat faimi hai. Whisper karna vocal cords ke liye normal bolne se zyada straining hoti hai. Whispering mein cords ek specific tense position mein hoti hain jo unhe aur bhi injure kar sakti hai. Agar voice rest chahiye to actually bolna minimize karein – volume kam karna solution nahi, amount kam karna zaroori hai.',
    },
    {
      _key: 'faq16',
      question: 'Vocal cord nodule aur thyroid mein kya relation hai?',
      answer: 'Direct relation nahi hai – thyroid alag organ hai (neck mein, vocal cords ke kaafi paas par physically alag). Lekin hypothyroidism ke kuch patients mein voice changes aate hain jo nodule jaisi awaaz dete hain. Agar awaaz baith rahi hai aur thyroid ke bhi symptoms hain (weight gain, thakaan, sardi zyada lagti) to thyroid test bhi karaana samajhdari hai.',
    },
    {
      _key: 'faq17',
      question: 'Call centre employee ko vocal cord nodule – kya job chhodni padegi?',
      answer: 'Zaroorat nahi – adjustments karni hongi. Noise-cancelling headset use karein (background noise se zyada bolna padta hai warna), breaks mein silence practice karein, paani bottle desk par rakhein aur regular sip lein, aur supervisor se shift ke dauraan short vocal breaks ki baat karein. Treatment ke dauraan short medical leave le sakte hain doctor ke recommendation par. Long-term career protection ke liye vocal hygiene habits banana zaroori hai.',
    },
    {
      _key: 'faq18',
      question: 'Gale ki gaanth (nodule) aur cancer mein kya fark hai – kaise samjhein?',
      answer: 'Vocal cord nodule cancer nahi hai. Par awaaz ki koi bhi problem 2-3 hafte se zyada chale to doctor se milna chahiye. Ye warning signs hain jo immediately ENT ko dikhani chahiye: awaaz mein sudden, bina wajah badlaav jo 3 hafte mein theek na ho; khoon aana awaaz mein ya thook mein; khaana nigalte waqt dard; neck mein gaanth jo phel rahi ho. Nodule cancer nahi hai – lekin ENT se sahi diagnosis karana nahi chhodna chahiye. Laryngoscopy koi painful test nahi hai aur 10 minute mein clear picture aa jaata hai.',
    },
    {
      _key: 'faq19',
      question: 'Pregnancy mein vocal cord nodule – ilaaj kaise karein?',
      answer: 'Pregnancy mein vocal cord nodule ka ilaaj kaafi limited ho jaata hai kyunki most conventional medicines avoid hoti hain. Voice rest aur vocal hygiene – ye dono safe hain aur first line approach hain. Homeopathic treatment pregnancy mein generally safe considered hai (ultra-diluted medicines), lekin aapka gynaecologist aur homoeopath dono milake decision lein – self-medication bilkul avoid karein. Good news ye hai ki pregnancy mein GERD common hota hai jise treat karna akele bhi throat symptoms mein help karta hai.',
    },
    {
      _key: 'faq20',
      question: 'Voice nodule ka ilaaj kitne time mein hota hai?',
      answer: 'Stage par depend karta hai. Early soft nodule: 6-12 hafte mein significant improvement, 3-6 mahine mein full recovery possible. Mid-stage nodule: 3-6 mahine consistent treatment ke saath. Jo log treatment ke dauraan voice rest seriously nahi lete unka recovery time 2x-3x zyada hota hai. Patience aur consistency – ye do qualities hi vocal nodule treatment mein sabse zaroori hain.',
    },
    {
      _key: 'faq21',
      question: 'Subah awaaz baith ke uthti hai aur din mein theek ho jaati hai – kya ye normal hai?',
      answer: 'Bilkul normal nahi hai – ye ek specific pattern hai jo ya to early vocal nodule ka sign hai ya GERD (acid reflux) ka, ya dono ek saath. Raat mein sote waqt cords rest mein hoti hain aur subah unhe warm up karna padta hai. Agar ye roz ka pattern ban gaya hai – ENT ya Homeopath se milna chahiye. Ye pattern batana important hai kyunki GERD ka ilaaj alag hota hai aur nodule ka ilaaj alag.',
    },
    {
      _key: 'faq22',
      question: 'Vocal cord nodule mein exercise kar sakte hain?',
      answer: 'Haan – regular exercise fine hai, aur kuch exercises (yoga, pranayam) specifically helpful hain. Lekin gym mein heavy lifting avoid karein jab tak awaaz recover na ho – weight lifting mein forced breath-hold hota hai jo cords pe pressure dalta hai. Swimming avoid karein agar throat infection ho. Running, walking, yoga – these are fine. Specifically: Bhramari pranayam (humming bee breath) vocal cord muscles ke liye excellent rehabilitation exercise hai. Loud counting ya workout coaching during exercise – completely avoid.',
    },
    {
      _key: 'faq23',
      question: 'Kya stress se vocal cord nodule ho sakta hai?',
      answer: 'Direct cause nahi hai – lekin stress ek significant contributing factor hai. Stress mein logo ki bolne ki style change ho jaati hai – voice tense hoti hai, pitch forced hoti hai, aur zyada bolte hain. Iske alawa, stress se GERD bhi badh jaata hai jo nodule ke liye risk factor hai. Homeopathic treatment ka ek fayda ye bhi hai ki ye stress-related voice tightness ko bhi address karta hai – sirf nodule nahi. Agar aap high-stress job mein hain (corporate, teaching, management), stress management bhi treatment plan ka hissa hona chahiye.',
    },
  ],

  sources: [
    'American Academy of Otolaryngology – Head and Neck Surgery (AAO-HNS) | Clinical Practice Guideline on Hoarseness | 2018 | www.entnet.org',
    'National Institute on Deafness and Other Communication Disorders (NIDCD) – Voice Disorders Information | 2023 | www.nidcd.nih.gov/health/voice',
    'Boone DR, McFarlane SC – The Voice and Voice Therapy (Standard textbook, 9th Ed) | 2019 | Pearson Education',
    'Verdolini K et al – Laryngeal adduction in resonant voice | Journal of Voice | 1998',
    'CCRH (Central Council for Research in Homoeopathy) – General research portal | ccrhindia.nic.in',
  ],

  doctorNote: 'Meri practice mein vocal cord nodule ke jo cases aaye hain unme ek common pattern ye hai ki patients bahut der se aate hain – jab awaaz months se kharaab hai aur tab bhi cheekh ke ya zor lagaake bol rahe hote hain. Early stage ke jo patients aate hain aur voice rest aur treatment seriously lete hain, unme surgery ki zaroorat bahut rare hai. Singers aur teachers – please apni awaaz ko invest ki tarah treat karein, ignore karne ki keemat bahut badi hoti hai. — Dr. Shadab, Homeopedia.in',
}

async function seed() {
  const result = await client.createOrReplace(doc)
  console.log('✅ Vocal Cord Nodule created/updated:', result._id)
  console.log('🌐 Live at: https://homeopedia.in/diseases/vocal-cord-nodule')
}

seed().catch(console.error)
