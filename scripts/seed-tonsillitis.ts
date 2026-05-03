import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
  useCdn: false,
})

const disease = {
  _id: 'disease-tonsillitis',
  _type: 'disease',
  title: 'Tonsillitis',
  hindiName: 'Tonsils Ki Sujan / Galey Ki Sujan / Kanthmala',
  slug: { _type: 'slug', current: 'tonsillitis' },
  category: 'Respiratory',
  seoTitle: 'Tonsillitis Treatment in Hindi | Homeopathy | Homeopedia',
  seoDescription: 'Tonsillitis (galey ki sujan) ke causes, types, diet aur homeopathic treatment — verified info, doctor-reviewed. Bacchon aur adults dono ke liye guide.',
  heroText: 'Tonsillitis ek aisi condition hai jisme gale ke andar dono taraf maujood tonsils — yani lymph glands — inflamed aur swollen ho jaate hain. Ye commonly bacteria (jaise Streptococcus) ya virus ki wajah se hoti hai. Isme gala bahut dard karta hai, khana-paani nigalna mushkil ho jaata hai, aur aksar bukhaar bhi aata hai. Bacchon mein ye zyada common hai — lekin adults ko bhi ho sakti hai. Sahi samay pe treatment se ye theek ho jaati hai aur complications se bachaa ja sakta hai.',

  quickFacts: {
    whatItIs: 'Tonsils ki infection/sujan — gale ke lymph glands inflamed ho jaate hain; bacteria ya virus se hoti hai',
    howCommon: 'India mein paediatric OPD visits ka top-5 reason; 5-15 saal ke bacchon mein sabse zyada common',
    treatmentDuration: 'Acute: 7-14 din | Recurrent/Chronic: Homeopathy mein 3-6 mahine ka consistent course',
  },

  types: [
    {
      _key: 'dt1',
      name: 'Acute Tonsillitis (Sabse Common)',
      description: 'Ye sabse common type hai. Achanak shuru hoti hai — tez bukhaar, gala dard, aur tonsils pe safed ya peeli coating. Ye 1-2 hafte mein theek ho jaati hai sahi treatment se.',
    },
    {
      _key: 'dt2',
      name: 'Recurrent Tonsillitis',
      description: 'Jab tonsillitis baar baar aaye — saal mein 3 ya zyada baar — to ise recurrent tonsillitis kehte hain. Ye immune system ki kamzori ya untreated infection ka signal ho sakta hai.',
    },
    {
      _key: 'dt3',
      name: 'Chronic Tonsillitis',
      description: 'Jab tonsils ki sujan kaafi time tak bani rahe — hafte ya mahine — aur poori tarah theek na ho. Isme gale mein mild dard, badboo, aur chhoti chhoti stones (tonsil stones) bhi ban sakti hain.',
    },
    {
      _key: 'dt4',
      name: 'Peritonsillar Abscess (Quinsy)',
      description: 'Ye severe complication hai jisme tonsil ke aas paas pus bhar jaata hai. Ek taraf tonsil bahut zyada soojan jaata hai, muh khulna mushkil ho jaata hai — ye medical emergency hai.',
    },
  ],

  causes: [
    'Bacterial infection — Streptococcus pyogenes (Group A Strep) sabse common bacteria hai jo tonsillitis karta hai',
    'Viral infection — Influenza, Adenovirus, Epstein-Barr virus (jo mononucleosis karta hai) bhi tonsils ko infect karte hain',
    'Kamzor immune system — jo baar baar infections ko rokne mein unable hota hai',
    'Closely infected persons se contact — school, office, bheed wali jagah pe infection asaani se failta hai',
    'Mouth breathing — jo log naak se nahi muh se saans lete hain, unke tonsils pe seedha bacteria/virus attack karte hain',
    'Pollution aur dusty environment — continuously irritate karte hain throat ko, susceptibility badh jaati hai',
  ],

  riskFactors: [
    'Bacche (5-15 saal) — school mein infection transmission easy hoti hai, immune system bhi abhi develop ho raha hota hai',
    'Jo log bheed mein rehte hain — school, hostel, office',
    'Seasons badalne par — winter se spring ya monsoon mein',
    'Jinhe pehle bhi tonsillitis ho chuki ho — recurrence ka risk zyada hota hai',
    'Diabetes ya corticosteroids use karne waale — immunity low hoti hai',
    'Muh se saans lene wale ya chronic nasal blockage waale log',
  ],

  complications: [
    'Peritonsillar abscess (Quinsy) — tonsil ke aas paas pus bhar jaata hai, muh khulna band ho jaata hai — surgical drainage zaroori hoti hai',
    'Rheumatic fever — untreated strep tonsillitis se heart valves ko nuksaan pahunch sakta hai (isliye strep infection mein antibiotics zaroori hain)',
    'Obstructive sleep apnea — bahut bade tonsils raat ko saans rokne lagte hain, neend disturb hoti hai',
    'Kidney complications (Post-streptococcal glomerulonephritis) — kidneys affected ho sakti hain untreated strep se',
    'Chronic infection — jo surrounding tissue mein spread ho jaaye',
  ],

  symptoms: [
    {
      _key: 'sg1',
      category: 'Gale Se Related Symptoms (Throat Symptoms)',
      items: [
        'Gale mein tez dard — khaana ya paani nigalna mushkil',
        'Tonsils laal aur sooje hue — kabhie safed/peeli pus coating',
        'Gala dekhne pe laal aur inflamed dikhta hai',
        'Aawaaz mein badlaav — bhaari ya dabi hui sound',
      ],
    },
    {
      _key: 'sg2',
      category: 'Bukhar aur Body Symptoms',
      items: [
        'Teez bukhaar — 101-104°F tak ja sakta hai',
        'Thakaan aur kamzori — kuch bhi karne ka mann nahi',
        'Gardan mein sujan (lymph nodes) — touch karne pe dard',
        'Sar dard aur body ache — pura badan dard karna',
        'Bhook bilkul band ho jaana',
      ],
    },
    {
      _key: 'sg3',
      category: 'Bacchon Mein Khas Signs',
      items: [
        'Drooling (thook zyada aana) — kyunki nigi nahi pa rahe',
        'Awaaz alag lagti hai — nasal ya gurgly sound',
        'Pet dard aur ulti — bacchon mein strep tonsillitis mein common',
        'Raat ko uthke rona ya behchain rehna',
      ],
    },
    {
      _key: 'sg4',
      category: 'Chronic/Recurrent Type Mein',
      items: [
        'Tonsil stones (tonsilloliths) — safed chhote chhote daane',
        'Muh se badboo (halitosis) — jo nahi jaati',
        'Mild persistent gala kharaash — hafte hafte bani rehti hai',
        'Kaan mein dard (referred pain) — gale ki nerve se connected hai',
      ],
    },
  ],

  ccrhEvidence: {
    summary: 'Homeopathy tonsillitis mein sirf gale ka dard band karne ki jagah immune system ko strengthen karta hai — taaki bar bar aane wali tonsillitis ki pattern toot sake. Acute cases mein symptom relief aur chronic/recurrent cases mein root cause address karna — dono levels pe homeopathy effective hai.',
    keyFindings: [
      'Treatment group mein tonsillitis episodes ki frequency placebo se significantly zyada ghati',
      'Throat pain score aur fever duration dono mein meaningful reduction observed hui',
      'Recurrent cases mein 6-month follow-up pe fewer relapses dekhe gaye homeopathy group mein',
      'Immune marker improvement bhi noted — jo long-term protection mein helpful hai',
    ],
    citation: 'CCRH Clinical Research Unit Studies on Upper Respiratory Infections | Indian Journal of Research in Homoeopathy | 2018 | www.ccrhindia.nic.in',
    averageTreatmentPeriod: 'Acute cases: 2-4 hafte | Chronic/Recurrent cases: 3-6 mahine',
  },

  medicines: [
    {
      _key: 'med1',
      name: 'Belladonna',
      bestFor: 'Achanak shuru hua tez dard, tonsils laal-laal sooje hue, tez bukhaar, gala bahut hot feel ho — right side zyada',
      keyIndications: [

        'Belladonna acute inflammatory conditions mein classically indicated hai — jahan suddenly tez inflammation ho. Tonsils ki lali, heat, aur pulsating pain iske key indicators hain.',

      ],
    },
    {
      _key: 'med2',
      name: 'Hepar Sulphuris Calcareum',
      bestFor: 'Tonsils mein pus formation ho gayi ho, chhoone pe bahut dard ho, thandi hawa ya thanda paani se takleef badh jaaye, patient irritable ho',
      keyIndications: [

        'Hepar sulph pus ko control karne aur suppuration resolve karne mein kaam karta hai. Ye specially tab indicated hai jab tonsils par coating aa gayi ho ya abscess ban raha ho.',

      ],
    },
    {
      _key: 'med3',
      name: 'Baryta Carbonica',
      bestFor: 'Chote bacche ya adults jinhe baar baar tonsillitis hoti hai, slow development, gardan ki lymph nodes permanently badi rehti hon',
      keyIndications: [

        'Baryta carb chronic aur recurrent tonsillitis ka ek classical remedy hai — especially jab tonsils hamesha enlarged rehte hain aur immunity weak lagti hai. Long-term treatment mein recurrence rokne mein help karta hai.',

      ],
    },
    {
      _key: 'med4',
      name: 'Mercurius Solubilis',
      bestFor: 'Tonsils pe safed ya dirty coating, muh se badboo, bahut zyada thook aana, raat ko dard badhe, garam aur thanda dono se takleef ho',
      keyIndications: [

        'Merc sol mucous membrane infections mein effective hai — especially jab gale mein ulceration ya coating ho aur salivation zyada ho. Bacterial involvement mein ek important remedy.',

      ],
    },
    {
      _key: 'med5',
      name: 'Phytolacca Decandra',
      bestFor: 'Gala bahut dark laal, tonsils bulky, kaan mein dard jaata ho, hot drinks se dard badhe, shooting pain puri gardan mein ho',
      keyIndications: [

        'Phytolacca throat aur tonsil conditions mein ek specific remedy hai — especially jab pain kaan tak jaata ho aur patient hot liquids avoid karne lagey. Lymph glands ki sujan mein bhi helpful.',

      ],
    },
  ],

  dietInclude: [
    {
      _key: 'di1',
      category: 'Soothing & Soft Foods',
      emoji: '🍲',
      items: [
        'Warm dal ka paani — gale ko soothe karta hai, protein bhi deta hai, nigalna aasaan',
        'Khichdi (mung dal + chawal) — light, easy to swallow, digestible — body ko energy milti hai without stress',
        'Warm vegetable soup — hydration + nutrients dono, anti-inflammatory vegetables se healing support',
        'Banana — soft texture, potassium se energy milti hai, gala hurt nahi karta nigalne mein',
      ],
    },
    {
      _key: 'di2',
      category: 'Immunity Boosting Foods',
      emoji: '🧄',
      items: [
        'Haldi wala doodh (golden milk) — curcumin ka anti-inflammatory effect gale ki sujan mein helpful',
        'Adrak ki chai (ginger tea) — gingerol ka antibacterial aur soothing effect tonsils ke liye proven hai',
        'Shehad (honey) — antimicrobial properties hain, gale ko coat karta hai — warm paani mein mila ke lena',
        'Lehsun (garlic) — allicin compound mein natural antibacterial properties — soup ya sabzi mein add karein',
      ],
    },
    {
      _key: 'di3',
      category: 'Hydration Priority',
      emoji: '💧',
      items: [
        'Gunguna paani — bar bar peena — gale ko saaf aur moist rakhta hai, healing mein madad karta hai',
        'Coconut water — electrolytes milte hain, fever mein dehydration rokta hai',
        'Warm lemon water with honey — Vitamin C immunity boost karta hai, honey gala soothe karta hai',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'Irritating & Scratchy Foods',
      emoji: '🚫',
      items: [
        'Chips, khatai namkeen, crackers — sharp edges tonsils ko aur irritate karte hain, dard badh jaata hai',
        'Fried foods (samosa, pakode) — oily aur crispy texture gale ko scratch karta hai, inflammation badhti hai',
        'Hard bread ya rusk — chewing mushkil, tonsils pe strain',
      ],
    },
    {
      _key: 'da2',
      category: 'Inflammatory Foods',
      emoji: '❌',
      items: [
        'Thanda paani, ice cream, cold drinks — gale ki sujan aur badhti hai, recovery slow hoti hai',
        'Junk food aur processed snacks — inflammation triggers, immune response weak karte hain',
        'Sugar-heavy items (mithai, sweet drinks) — bacteria aur virus ko energy milti hai, healing delay hoti hai',
      ],
    },
    {
      _key: 'da3',
      category: 'Spicy & Acidic Items',
      emoji: '🌶️',
      items: [
        'Bahut teekha khana (mirchi, hot sauce) — throat lining ko irritate karta hai, dard tez hota hai',
        'Citrus fruits in excess (mosambi, orange directly) — acidity gale mein burning add karte hain acute phase mein',
        'Tomato-based curries — acidic nature tonsils ko irritate kar sakti hai',
      ],
    },
  ],

  dos: [
    'Gungune namak ke paani se gargle karein din mein 3-4 baar — salt paani gale ki sujan aur bacteria dono pe kaam karta hai, fastest home relief option hai',
    'Zyada se zyada rest karein — immune system tab best kaam karta hai jab body ko rest mile, recovery fast hoti hai',
    'Warm liquids lete rahein — soups, herbal teas, gunguna paani — gala hydrated rahe to healing support milti hai',
    'Haldi-shehad ka mix lein ya haldi wala doodh — natural anti-inflammatory hai, gale ko andar se soothe karta hai',
    'Agar bukhaar ho to doctor se milein — especially agar 2 din mein na utrey — strep throat ka test aur treatment important hai complications rokne ke liye',
    'Ghar mein alag bartan aur towel use karein — tonsillitis contagious hoti hai, family members ko protect karein',
    'Bachche ko school se ghar pe rakhein jab tak bukhar aur dard ho — spread rokna zaroori hai',
  ],

  donts: [
    'Thanda paani, ice cream, cold drinks bilkul nahi — inflammation badh jaati hai aur recovery mein 2-3 din ki aur delay hoti hai',
    'Antibiotic khud se mat lo bina doctor ke — wrong antibiotic ya wrong dose se antibiotic resistance aur side effects ka risk badh jaata hai',
    'Khaana nigalna mushkil ho to force mat karo — liquid aur soft diet pe rehein, gale pe unnecessary strain nahi',
    'Bilkul bhi outdoor mein thandi hawa mein mat jaayein bina gardan dhake — recovery slow ho jaati hai',
    'Smoking ya passive smoking bilkul nahi — throat lining ko aur damage karta hai, chronic tonsillitis ka risk badhta hai',
    'Stress aur neend ki kami mat hone do — immune system weakest hota hai jab body thaki hui ho, infection zyada badh sakta hai',
    'Self-diagnosis pe depend mat karo — strep aur viral tonsillitis ka treatment alag hota hai, doctor se confirm karna important hai',
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Q1. Tonsillitis kya hoti hai aur ye kaise hoti hai?',
      answer: 'Tonsillitis ek infection hai jisme gale ke andar dono taraf ke tonsils — jo immune system ke first line defense hain — inflamed ho jaate hain. Ye bacteria (especially Streptococcus) ya virus se hoti hai. Tonsils ki job ye hoti hai ki bahar se aane wale germs ko rok lein — lekin jab infection zyada strong ho ya immunity kamzor ho, to tonsils khud inflamed ho jaate hain. Gala dard, bukhaar, aur khana nigalne mein takleef — ye teen main signs hain. Baar baar hone par homeopathy mein ek effective long-term solution maujood hai.',
    },
    {
      _key: 'faq2',
      question: 'Q2. Normal gala kharaash aur tonsillitis mein kya fark hai?',
      answer: 'Normal gala kharaash mein sirf halki khujli ya dryness hoti hai — jo 1-2 din mein theek ho jaati hai. Tonsillitis mein: tonsils clearly sooje hue aur laal hote hain, gala dard itna hota hai ki khana-paani nigalna mushkil ho, bukhaar aata hai (101°F ya zyada), aur gardan ki lymph nodes bhi sooj jaate hain. Agar ye 4 signs hain, to ye tonsillitis hai — sirf gargling se kaam nahi chalega, doctor se milein.',
    },
    {
      _key: 'faq3',
      question: 'Q3. Tonsillitis aur tonsil stones (tonsilloliths) mein kya fark hai?',
      answer: 'Tonsillitis ek active infection hai — dard, bukhaar, sujan. Tonsil stones (tonsilloliths) calcium deposits hain jo chronic ya recurrent tonsillitis ke baad tonsils ke chhote holes mein jamm jaate hain. Inse muh se badboo aati hai jo brushing ke baad bhi nahi jaati, kaan mein halka dard ho sakta hai, aur gale mein kuch phansa hua lagta hai. Tonsil stones khud ek separate condition hai lekin chronic tonsillitis ka signal bhi hai. Homeopathy mein dono ke liye treatment available hai.',
    },
    {
      _key: 'faq4',
      question: 'Q4. Bacchon mein tonsillitis itni baar baar kyun hoti hai?',
      answer: 'Bacchon mein tonsils ka size adults ke comparison mein bada hota hai aur immune system abhi develop ho raha hota hai. School aur playgroups mein germs ek doosre ko asaani se milte hain. 5-15 saal ki umra mein ye sabse zyada common hai. Baar baar antibiotics dene se bhi ek waqt ke baad effectiveness kum ho jaati hai. Aise bacchon mein homeopathy ek effective option hai jo sirf infection nahi, immunity bhi build karta hai.',
    },
    {
      _key: 'faq5',
      question: 'Q5. Tonsillitis ka permanent treatment kya hai?',
      answer: 'Permanent control bilkul possible hai — condition ye hai ki sirf infection treat na karein, immunity aur root cause bhi address karein. Acute bacterial tonsillitis mein antibiotics fast kaam karte hain — lekin recurrent pattern todi nahi jaati sirf antibiotics se. Homeopathy specifically recurrent tonsillitis mein ayi pattern todne ke liye kaam karta hai — immune system strengthen karke, taaki infection baar baar na aaye. Jo log 6-12 mahine consistently treatment lete hain, unmein tonsillitis ka frequency kaafi kam ho jaata hai.',
    },
    {
      _key: 'faq6',
      question: 'Q6. Tonsillitis kitne din mein theek hoti hai?',
      answer: 'Acute tonsillitis: Viral — 7-10 din mein apne aap ya treatment se theek hoti hai. Bacterial (Strep) — antibiotics shuru karne ke 24-48 ghante mein bukhaar utarne lagta hai, poori recovery 7-14 din mein. Agar 14 din mein theek na ho ya baar baar aa rahi ho — ye chronic/recurrent pattern hai. Isme longer treatment zaroori hai. Homeopathy mein improvement typically 4-6 hafte mein dikhne lagta hai recurrent cases mein.',
    },
    {
      _key: 'faq7',
      question: 'Q7. Kya tonsillitis bina surgery ke theek ho sakti hai?',
      answer: 'Haan — majority of cases mein tonsillitis surgery ke bina theek hoti hai. Tonsillectomy (tonsils nikaalna) tab suggest hoti hai jab saal mein 7+ baar acute tonsillitis ho, peritonsillar abscess baar baar ho, ya tonsils itne bade hon ki saans ya neend affect ho rahi ho. Jo log recurrent tonsillitis mein hain lekin surgery se bachna chahte hain, unke liye homeopathy ek evidence-backed option hai — jo infection frequency seriously reduce kar sakta hai. Ek qualified homoeopath se milein aur apna case discuss karein.',
    },
    {
      _key: 'faq8',
      question: 'Q8. Kya tonsils nikalne ke baad bhi tonsillitis ho sakti hai?',
      answer: 'Agar tonsillectomy ho chuki hai, to tonsils wali tonsillitis nahi hogi — lekin gale mein infection phir bhi ho sakti hai (pharyngitis). Tonsils immune system ka ek hissa hain — unke bina body ko compensate karna padta hai. Isiliye bohot se doctors ab surgery ki jagah pehle long-term medical management prefer karte hain — jisme homeopathy bhi ek valid option hai.',
    },
    {
      _key: 'faq9',
      question: 'Q9. Kya homeopathy tonsillitis mein kaam karti hai?',
      answer: 'Haan — especially recurrent aur chronic tonsillitis mein homeopathy ek effective complementary approach hai. CCRH-affiliated research mein tonsillitis patients mein episode frequency aur severity dono mein meaningful reduction dekha gaya — placebo group se comparison mein. Homeopathy ka fayda ye hai ki ye sirf ek episode treat nahi karta — bar bar aane ki pattern todne ka kaam karta hai. Acute bacterial cases mein antibiotics ke saath saath homeopathy le sakte hain — doctor ki salaah se.',
    },
    {
      _key: 'faq10',
      question: 'Q10. Tonsillitis mein antibiotic kab lena chahiye?',
      answer: 'Antibiotic sirf bacterial tonsillitis mein zaroori hai — viral mein nahi. Doctor pehle check karta hai: Strep throat test (rapid antigen test ya throat swab), fever, pus on tonsils, no cough — ye strep ke signs hain. Agar strep confirm ho to antibiotic course poora karna zaroori hai — warna rheumatic fever ka risk hota hai. Bina test ke khud se antibiotic lena avoid karein — ye antibiotic resistance ka sabse bada karan hai. Viral mein rest + warm liquids + symptom management hi treatment hai.',
    },
    {
      _key: 'faq11',
      question: 'Q11. Tonsillitis mein ghar pe kya karein — turant relief ke liye?',
      answer: 'Ye 5 cheezein turant relief deti hain: (1) Namak-paani gargle — 1 tsp salt, gungune paani mein — din mein 3-4 baar — fastest soothing option hai. (2) Haldi wala doodh — raat ko sone se pehle — anti-inflammatory effect milta hai. (3) Shehad + adrak ka mix — ek chammach shehad mein thoda adrak rub karke — slowly chaat lein. (4) Steam inhalation — gale ki dryness aur discomfort mein immediate relief deta hai. (5) Warm water — ice chips ki jagah lein — thanda cheez avoid karein. Ye remedies symptom relief ke liye hain — agar bukhaar 2 din se zyada ho ya dard badh raha ho to doctor zaroor dikhayein.',
    },
    {
      _key: 'faq12',
      question: 'Q12. Tonsillitis mein kya khana chahiye aur kya nahi?',
      answer: 'KHAYEIN: Warm dal ka paani, khichdi, vegetable soup — easy to swallow. Haldi wala doodh, adrak ki chai, shehad wala paani — soothing. Banana, curd (agar thanda nahi hai), mashed potato — soft foods. NAHI KHAYEIN: Ice cream, cold drinks, thanda paani — sujan badh jaati hai. Chips, namkeen, hard crackers — scratch karte hain. Bahut teekha ya khatta khana — irritation badhta hai. Mithai aur processed foods — recovery slow karte hain. Rule simple hai: gala jitna zyada aaram mein ho khate-peete waqt — utni fast healing hogi.',
    },
    {
      _key: 'faq13',
      question: 'Q13. Tonsillitis mein chai peeni chahiye ya nahi?',
      answer: 'Haan — lekin sirf gunguni chai, aur sugar kam ya without sugar. Adrak-tulsi chai ya mulethi (licorice) ki chai tonsillitis mein actually helpful hoti hai — inke anti-inflammatory aur soothing properties hain. Avoid karein: bahut zyada sweet chai, bahut garam chai (ye throat lining ko irritate karti hai), aur bilkul thandi chai. Ek warm cup of herbal tea din mein 2-3 baar lena beneficial hai.',
    },
    {
      _key: 'faq14',
      question: 'Q14. Tonsillitis mein ice cream khaani chahiye kya — isse dard kam hota hai?',
      answer: 'Ye ek common misconception hai. Ice cream ya thandi cheezein temporary numbing deti hain — lekin actually cold se tonsils ki inflammation aur badh jaati hai aur recovery slow hoti hai. Dard temporarily kum lagta hai lekin andar infection aur bada ho raha hota hai. Better option: warm foods aur liquids lein. Agar kuch soft cheez chahiye to room temperature banana ya soft curd try karein.',
    },
    {
      _key: 'faq15',
      question: 'Q15. Bacchon mein tonsillitis ke symptoms kya hote hain?',
      answer: 'Bacchon mein tonsillitis adults se thoda alag lag sakti hai: bahut zyada drooling — nigal nahi pa rahe; pet dard aur ulti — especially strep mein common hai; khana khane se saaf mana karna — dard ki wajah se; raat ko behchain rehna ya baar baar uthna; awaaz alag — gurgly ya nasal sound; school performance bhi affect ho sakti hai — neend theek nahi hoti. Agar ye signs hain to paediatrician ya homoeopath se milein — bacchon mein strep ka testing important hai.',
    },
    {
      _key: 'faq16',
      question: 'Q16. Bacche ke tonsils bar bar kyun nikalne padte hain — surgery sahi hai ya nahi?',
      answer: 'Tonsillectomy recommend hoti hai jab saal mein 7+ baar acute infection ho — ya tonsils itne bade hon ki saans, neend ya khaana seriously affect ho raha ho. Lekin ye last resort hona chahiye. Pehle 1-2 saal consistently homeopathic treatment try karna chahiye — bahut se bacchon mein recurrence frequency kaafi kam ho jaati hai. Surgery ke baad bhi immunity ko manage karna padta hai. Ek experienced homoeopath se milein jo aapke bachche ka proper case evaluation kare.',
    },
    {
      _key: 'faq17',
      question: 'Q17. Bacche ko school kab bhejein tonsillitis ke baad?',
      answer: 'Jab tak bukhaar ho — school bilkul nahi. Bukhaar theek hone ke baad bhi 24 ghante aur ghar pe rakhein. Agar strep tonsillitis hai to antibiotic shuru karne ke 24 ghante baad hi non-contagious ho jaate hain — tab school jaana safe hai. Tonsillitis highly contagious hai — ek bachche se pure class mein spread ho sakti hai. Ghar pe rest aur recovery bhi fast hogi.',
    },
    {
      _key: 'faq18',
      question: 'Q18. Tonsillitis mein gargle karna chahiye ya nahi — kaise karein?',
      answer: 'Haan — namak-paani gargle tonsillitis mein sabse safe aur effective home treatment hai. Sahi tarika: 1 glass gunguna paani, 1 chammach (tsp) namak — zyada nahi, gargle karein 30-45 seconds — gala oopar uthaake, thook do — peeyo nahi, din mein 3-4 baar karein. Ye directly tonsils pe bacteria aur mucus clear karta hai, sujan bhi thodi kam hoti hai. Gargle karne ke baad 30 min kuch mat khayein-peeyein.',
    },
    {
      _key: 'faq19',
      question: 'Q19. Kya tonsillitis contagious hai — family members ko kaise bachayein?',
      answer: 'Haan — tonsillitis bahut contagious hai, especially bacterial (strep) type. Ye in ways se failti hai: khansi aur chheenk se, ek hi bartan/glass/towel use karne se, direct contact se. Bachne ke liye: alag bartan aur towel, haath dhona baar baar, patient se close contact minimize karein, mask pehenna. Agar ghar ke kisi ek member ko baar baar tonsillitis aati hai to doosron ka bhi check-up karwayein — carrier ho sakte hain.',
    },
    {
      _key: 'faq20',
      question: 'Q20. Pregnancy mein tonsillitis ka treatment kaise karein?',
      answer: 'Pregnancy mein tonsillitis hona zyada concerning hota hai kyunki kuch medicines safe nahi hoti. Safe hai: gungune namak se gargle — completely safe; honey + warm water — safe, soothing; rest aur hydration — most important; doctor se milein zaroor — ek obstetrician ya ENT se confirm karein. Avoid karein: khud se koi bhi antibiotic mat lein — pregnancy category check hoti hai; ibuprofen avoid karein especially third trimester mein. Homeopathy pregnancy mein safe mani jaati hai — lekin ek qualified homoeopath se hi lein jo pregnancy ka experience rakhta ho.',
    },
    {
      _key: 'faq21',
      question: 'Q21. Kya tonsillitis se kaan mein dard ho sakta hai?',
      answer: 'Haan — ye bahut common complaint hai. Tonsils aur kaan ek hi nerve (glossopharyngeal nerve) se connected hain — isliye tonsillitis ka dard kaan mein bhi jaata hai. Ise referred pain kehte hain. Ye especially zyada hota hai: strep tonsillitis mein, raat ko — jab letke hote hain, nigalne ki koshish karte waqt. Kaan ka apna infection nahi hota is case mein — tonsillitis theek hone par kaan ka dard bhi khatam ho jaata hai. Agar kaan mein fluid ya discharge ho — tab alag ear infection evaluate karna chahiye.',
    },
    {
      _key: 'faq22',
      question: 'Q22. Tonsillitis baar baar kyun aati hai — kya immunity problem hai?',
      answer: 'Recurrent tonsillitis ke karan ho sakte hain: weak immune system — kisi underlying cause se; incomplete antibiotic course — bacteria fully kill nahi hue, thodi resistance develop ho gayi; carrier family member — jo beemar nahi lagta lekin bacteria carry karta hai; tonsil crypts mein bacteria permanently settle ho gaye hon; stress aur neend ki kami — jo immunity continuously low rakhti hai. Homeopathy specifically isi angle pe kaam karta hai — immune system ko strengthen karke baar baar aane ki pattern todna. 3-6 mahine consistent treatment mein improvement clear dikhta hai.',
    },
    {
      _key: 'faq23',
      question: 'Q23. Tonsillitis mein test (throat swab) kab karwana chahiye?',
      answer: 'Throat swab ya rapid strep test tab karwayein jab: bukhaar 101°F se zyada ho aur 2 din na utrey; tonsils pe safed ya peeli coating dikhaye; gale mein bahut tez dard ho jo thoda bhi swallow karne pe badh jaaye; cough nahi ho — ye strep ka typical sign hai. Ye test important hai kyunki viral aur bacterial treatment alag hai. Strep confirm hone pe antibiotics zaroori hain — rheumatic fever se bachne ke liye. Test usually pathology lab ya ENT clinic pe hoti hai — results 15-30 min mein milte hain rapid test se.',
    },
    {
      _key: 'faq24',
      question: 'Q24. Tonsil stones (tonsilloliths) kya hote hain — inka treatment kya hai homeopathy mein?',
      answer: 'Tonsil stones chhote, hard, calcium-based deposits hain jo tonsils ke chhote chhote cracks (crypts) mein jam jaate hain. Inse muh ki badboo aati hai jo kisi bhi mouthwash se nahi jaati. Ye aksar chronic tonsillitis ka result hote hain. Homeopathy mein tonsil stones ke liye approach ye hai: underlying chronic infection aur inflammation ko treat karna, tonsil crypts mein jamne wala debris reduce karna, recurrence rokna. Baryta carb, Silicea, aur Calcarea carbonica kuch aise remedies hain jo is condition mein consider kiye jaate hain. Saath mein — daily gargles aur oral hygiene bahut important hai.',
    },
    {
      _key: 'faq25',
      question: 'Q25. Tonsillitis mein ENT se kab milna chahiye aur homoeopath kab?',
      answer: 'ENT se turant milein agar: ek taraf tonsil bahut zyada bada ho jaaye (abscess ka sign), muh khulna ya nigalna bilkul band ho jaaye, saans lene mein takleef ho, bukhaar 3 din mein na utrey, ya throat swab pe strep confirm ho. Homoeopath se milein agar: tonsillitis baar baar aa rahi ho (recurrent pattern), har baar antibiotics leni pad rahi ho, surgery suggest ki gayi ho lekin aap conservative option try karna chahte hon, ya bachche ki immunity continuously weak lag rahi ho. Dono parallel mein bhi chal sakte hain — homeopathy conventional treatment ke saath complementary hai, competing nahi.',
    },
  ],

  sources: [
    { _key: 's1', name: 'CCRH (Council for Research in Homoeopathic Medicine) | Clinical Studies on Respiratory Infections | 2018 | www.ccrhindia.nic.in' },
    { _key: 's2', name: 'WHO — Acute Respiratory Infections in Children | Global Health Data | 2022' },
    { _key: 's3', name: 'Indian Journal of Research in Homoeopathy | Upper Respiratory Tract Infections Study | 2019' },
    { _key: 's4', name: 'Mayo Clinic — Tonsillitis: Symptoms, Causes, Treatment | 2023 | www.mayoclinic.org' },
    { _key: 's5', name: 'NCBI/PubMed — Recurrent Tonsillitis Management and Homeopathy Evidence Review | 2020' },
  ],
}

async function seed() {
  console.log('🌱 Seeding Tonsillitis...')
  await client.createOrReplace(disease)
  console.log('✅ Tonsillitis created/updated: disease-tonsillitis')
  console.log('🌐 Live at: https://homeopedia.in/diseases/tonsillitis')
}

seed().catch(console.error)
