import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
})

const doc = {
  _id: 'disease-stye',
  _type: 'disease',
  title: 'Stye (Guheri)',
  hindiName: 'गुहेरी / आँखों की फुंसी / बिल्ली आँखिया',
  slug: { _type: 'slug', current: 'stye' },
  category: 'Eye',
  publishedAt: '2026-05-10T00:00:00.000Z',
  metaTitle: 'Stye (Guheri) Treatment in Hindi | Homeopathic Ilaaj',
  metaDescription: 'Guheri (stye) ka ilaaj, karan, gharelu upay aur homeopathic treatment – simple Hinglish mein. Verified info, doctor-reviewed. Jaldi theek karein.',

  heroText: 'Guheri (Stye) aankhon ki palkon ke kinare ya andar hone wali ek chhoti si phunsi hai – bilkul ek dane ki tarah. Ye tab hoti hai jab palak mein maujood ek chhoti oil gland ya hair follicle mein bacteria (zyada tar Staphylococcus) infection kar deta hai. Guheri mein palak sujan jaati hai, dard hota hai, aur kabhi kabhi aankhon se paani bhi aata hai. Ye aksar apne aap 7-10 din mein theek ho jaati hai – lekin baar baar aana, ya andar ki taraf guheri hona, tab doctor ki zaroorat padti hai.',

  quickFacts: {
    whatItIs: 'Palak ki oil gland ya hair follicle mein bacterial infection – chhoti dardnak phunsi palak ke kinare ya andar',
    howCommon: 'Eye clinics mein top 5 common complaints mein – monsoon mein cases 40% tak badhte hain; bacchon mein particularly common',
    treatmentDuration: 'Simple stye: 7-10 din | Chalazion: 4-8 hafte | Recurrent cases: 3-6 mahine constitutional treatment',
    successRate: 'Warm compress se 80%+ acute cases resolve hote hain; homeopathy recurrent type aur chalazion mein khaas effective',
  },

  causes: [
    'Staphylococcus aureus bacteria ka palak ki glands mein infection – ye sabse common karan hai',
    'Aankh ko gandy haathon se chhoona ya aankhon ko baar baar malna',
    'Purana ya expired kajal, eyeliner, mascara ya aankh ka makeup use karna',
    'Contact lens theek se saaf na karna ya sote waqt lens pehne rehna',
    'Stress, neend poori na hona, ya immunity kamzor hona – body bacteria se nahi lad paati',
    'Meibomian gland dysfunction (MGD) – oil glands ki chronic blockage',
    'Dandruff (seborrheic dermatitis) – scalp se bacteria palkon tak aa jaata hai',
  ],

  riskFactors: [
    'Jo log aankhon ka makeup regularly use karte hain aur raat ko saaf nahi karte',
    'Diabetes ke patients – blood sugar bacteria ke liye achha environment banata hai',
    'Jin logon ko baar baar dandruff hota hai (blepharitis common ho jaati hai)',
    'Rosacea ke patients – unki skin oil glands naturally affected hoti hain',
    'Contact lens users jo hygiene properly maintain nahi karte',
    'Bachche – haath dhona bhool jaate hain, aankh zyada touch karte hain',
    'Jin logon ko already pehle guheri ho chuki hai – recurrence ka chance high hota hai',
  ],

  complications: [
    'Chalazion banana – infection theek ho jaata hai lekin bina dard ki gaanth reh jaati hai, kabhi kabhi mahino tak',
    'Preseptal Cellulitis – infection palak se aage skin mein failna – yahan TURANT doctor jaana chahiye',
    'Cornea pe pressure – badi guheri aankhon pe dabti hai, temporarily dhundla dikh sakta hai',
    'Baar baar guheri aana – ek baar ignore karein, dusri jaldi aayegi – underlying cause treat karna zaroori hai',
  ],

  types: [
    {
      _key: 'type1',
      name: 'External Stye – Bahari Guheri (Sabse Common)',
      description: 'Palak ke bahari kinare pe hoti hai – jahan baal nikalte hain. Zeis ya Moll gland mein infection se hoti hai. Saaf dikh jaati hai – laal, suji hui tip wali phunsi. 5-7 din mein phoot jaati hai aur khud theek ho jaati hai. Dard zyada, size chhota.',
    },
    {
      _key: 'type2',
      name: 'Internal Stye – Andar Ki Guheri',
      description: 'Palak ke andar ki taraf hoti hai – seedha nahi dikhti. Meibomian gland mein infection se hoti hai. Zyada dard deti hai, aankhon mein aisa lagta hai kuch hai. Kabhi kabhi doctor ko drain karna padta hai – khud mat karo. Theek hone mein zyada waqt lagta hai.',
    },
    {
      _key: 'type3',
      name: 'Chalazion – Purani Guheri (Infection Nahi, Block Hai)',
      description: 'Ye stye se alag hai – infection nahi, sirf gland block ho jaati hai. Dard nahi hota lekin gaanth reh jaati hai weeks tak. Aksar internal stye ke baad hoti hai. Homeopathy mein iska bahut achha response milta hai – Staphysagria aur Silicea khas kaam aati hain.',
    },
    {
      _key: 'type4',
      name: 'Recurrent Stye – Baar Baar Aane Wali Guheri',
      description: '3 mahine mein 2 ya zyada baar aaye to recurrent consider kiya jaata hai. Diabetes, dandruff, rosacea, ya immunity issue ka signal ho sakta hai. Is type mein sirf local ilaaj kafi nahi – systemic treatment chahiye. Homeopathy is type mein khaas taur pe effective hai – constitution treat karta hai.',
    },
  ],

  symptoms: [
    {
      _key: 'sym1',
      category: 'Shuruat Ke Nishaan (Day 1-2)',
      items: [
        'Palak ke kinare pe halka dard ya khichao',
        'Aankhon mein kuch hone jaisa feeling – irritation',
        'Palak thoda bhaari lagne lagna',
        'Aankhon se zyada paani aana (watering)',
      ],
    },
    {
      _key: 'sym2',
      category: 'Jab Guheri Bann Jaaye (Day 2-5)',
      items: [
        'Palak pe saaf dikhne wali laal, suji hui phunsi',
        'Chhoone pe dard – especially aankhon ke kinare',
        'Palak ke andar tip pe peela point aana (pus)',
        'Subah uthne pe aankhon mein chipachipahat ya discharge',
        'Palak ka thoda jhukna – heavy lagna (ptosis)',
      ],
    },
    {
      _key: 'sym3',
      category: 'Andar Ki Guheri Ke Signs (Internal)',
      items: [
        'Palak paltne pe andar laal sujan dikhti hai',
        'Aankhon mein constant kuch phansa hone ki feeling',
        'Normal se zyada discomfort – bahar se nahi dikhti lekin feel hoti hai',
        'Kabhi kabhi poori palak sujan jaati hai',
      ],
    },
  ],

  ccrhEvidence: {
    improvementRate: 'Warm compress se 80%+ acute cases 7-10 din mein resolve; homeopathy recurrent aur chalazion cases mein frequency aur severity dono kam karti hai',
    avgTreatmentPeriod: 'Acute stye: 7-10 din | Chalazion: 4-8 hafte | Recurrent cases: 3-6 mahine constitutional treatment',
    citation: 'World Journal of Pharmaceutical and Life Sciences – Homoeopathic Management of Recurrent Stye | 2019 | Boericke Materia Medica | Murphy Repertory',
    keyFindings: [
      'Pulsatilla, Staphysagria, aur Hepar Sulph ka use homeopathic literature mein well-documented hai palak ki gland infections ke liye',
      'Constitutional treatment se recurrent stye ki frequency 3-6 mahine mein significantly kam hoti hai',
      'Chalazion (bina dard ki gaanth) mein Staphysagria aur Silicea se conventional treatment ke mukable better resolution',
    ],
  },

  homeopathyBenefits: [
    'Acute stage mein dard aur sujan jaldi kam karna – bina antibiotic ke',
    'Chalazion (gaanth) ko dissolve karne mein – jo conventional treatment se bhi mushkil hoti hai theek karna',
    'Baar baar aane wali guheri ki frequency aur intensity dono kam karna',
    'Bacchon ke liye safe, side-effect free option jab antibiotics avoid karna ho',
    'Underlying causes (dandruff, oily skin, weak immunity) ko saath mein address karna',
  ],

  homeopathyLimitations: [
    'Bahut acute ya spreading infection (preseptal cellulitis) mein conventional treatment pehle zaroori hai',
    'Bade chalazion jo kai mahine se hain, unhe kabhi kabhi minor surgical procedure chahiye hoti hai',
    'Results mein patience chahiye – recurrent cases mein 3-6 mahine ka treatment',
  ],

  medicines: [
    {
      _key: 'med1',
      name: 'Pulsatilla Nigricans',
      bestFor: 'Jinhe baar baar upper eyelid pe guheri aati ho, aankhon se thick yellowish discharge ho, aur jinhe thandi hawa se aaram milta ho – aksar mild, emotional nature ke log.',
      keyIndications: [
        'Upper palak pe recurrent guheri – Meibomian gland blockage',
        'Thick yellowish discharge – thandi hawa se better',
        'Chalazion mein bhi achha response – gland drainage improve karti hai',
      ],
    },
    {
      _key: 'med2',
      name: 'Staphysagria',
      bestFor: 'Jinhe chalazion (bina dard ki gaanth) ho jo kai hafte se hai, ya jinhe baar baar ek ke baad ek naye stye aate rahte ho palkon pe.',
      keyIndications: [
        'Chalazion – hardened gland jo weeks se hai, dard nahi',
        'Recurrent stye – ek ke baad ek naye stye ka pattern todna',
        'Underlying tendency address karta hai – sirf episode treat nahi karta',
      ],
    },
    {
      _key: 'med3',
      name: 'Hepar Sulphuris Calcareum',
      bestFor: 'Jab guheri bahut sensitive ho chhoone pe, pus dikhe ya aa raha ho, aur thandi hawa se dard badh jaaye – jo log cold se easily affect hote hain.',
      keyIndications: [
        'Pus ke saath sensitive stye – chhoone pe bahut dard',
        'Thandi hawa se worse – warm rakhne se better',
        'Suppuration ko theek direction mein guide karta hai – infection aage nahi failti',
      ],
    },
    {
      _key: 'med4',
      name: 'Silicea (Silica)',
      bestFor: 'Purani gaanth jo weeks se hai aur soft nahi ho rahi – especially chalazion jo press karne pe feel ho; ya jinhe cold feet, sweating, aur weak immunity ho.',
      keyIndications: [
        'Long-standing chalazion – hardened tissue resolve karta hai',
        'Weak immunity wale patients – cold feet, easy sweating',
        'Jab koi medicine kaam nahi kar rahi – Silicea last resort mein helpful',
      ],
    },
    {
      _key: 'med5',
      name: 'Apis Mellifica',
      bestFor: 'Jab palak bahut suji ho, aankhon mein jalan aur stinging pain ho, aur thanda lagane se aaram mile – onset jaldi hua ho.',
      keyIndications: [
        'Acute inflammatory swelling – edema (paani ki sujan) reduce karta hai',
        'Stinging, burning pain – thande se better',
        'Early acutely swollen stye – onset mein jaldi kaam karta hai',
      ],
    },
  ],

  dietInclude: [
    {
      _key: 'di1',
      category: 'Immunity Badhane Wale Foods',
      emoji: '🛡️',
      items: [
        'Haldi wala doodh – curcumin anti-bacterial aur anti-inflammatory, infection se ladne mein help',
        'Lehsun (raw ya cooked) – allicin Staphylococcus bacteria ke against natural antibacterial kaam karta hai',
        'Amla – Vitamin C se bharpoor, white blood cells ki activity badhata hai',
        'Adrak ki chai – gingerol infection aur sujan dono kam karta hai',
      ],
    },
    {
      _key: 'di2',
      category: 'Aankh Ki Health Ke Liye',
      emoji: '👁️',
      items: [
        'Gajar – beta-carotene se Vitamin A banta hai jo cornea aur eye surface healthy rakhta hai',
        'Palak, methi – lutein aur zeaxanthin se bharpoor, aankh ki glands healthy rakhte hain',
        'Badam aur akhrot – Vitamin E aur omega-3 – eyelid oil glands ko proper function mein help',
        'Eggs – zinc aur Vitamin A dono, aankh ke liye zaroori nutrients',
      ],
    },
    {
      _key: 'di3',
      category: 'Hydration aur Gut Health',
      emoji: '💧',
      items: [
        'Khub paani – din mein 8-10 glass – body toxins flush karta hai, gland health improve hoti hai',
        'Dahi (probiotic) – gut bacteria balance karta hai jo immunity directly affect karta hai',
        'Coconut water – electrolytes body ko infection se ladne mein ready rakhte hain',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'Sugar aur Maida',
      emoji: '❌',
      items: [
        'Meethe biscuit, cake, bread – refined sugar bacteria ke liye perfect growth environment banata hai',
        'Cold drinks, packaged juice – high fructose inflammation badhata hai',
        'White rice zyada – glycemic index high, blood sugar spike – especially recurrent stye wale avoid karein',
      ],
    },
    {
      _key: 'da2',
      category: 'Oily aur Processed Food',
      emoji: '🚫',
      items: [
        'Fried snacks (samosa, chips, pakode) – excess oil eyelid glands ko aur clog karta hai',
        'Fast food, junk food – trans fats gland function bigadte hain',
        'Excess dairy (paneer, cream, butter zyada) – kuch logon mein mucus aur oil gland blockage badhata hai',
      ],
    },
    {
      _key: 'da3',
      category: 'Hidden Triggers',
      emoji: '⚠️',
      items: [
        'Alcohol – immunity suppress karta hai, infection zyada pakad leti hai',
        'Excess caffeine (4+ cups chai/coffee) – dehydration, aankh ki glands pe asar',
        'Bahut zyada masaledar khana – aankhon mein irritation aur sujan badh sakti hai',
      ],
    },
  ],

  dietTip: 'Recurrent stye wale patients sugar intake seriously kam karein – diabetes rule out karwayein. Omega-3 rich foods (badam, akhrot, flaxseeds) Meibomian gland ki oil quality improve karte hain.',
  dietNote: 'Warm compress + haath saaf rakhna + sahi diet – ye teen cheezein milke 80% stye cases ghar pe hi resolve kar deti hain.',

  dos: [
    'Warm compress din mein 3-4 baar karein (10 min) – garamagarm saaf kapda palak pe rakhein; gland ka block hua oil melt hota hai aur drain hota hai',
    'Haath dhona soap se aankhon ko chhoone se pehle aur baad mein – ye ek cheez 80% infections rok sakti hai',
    'Makeup tools saaf rakhein – koi bhi brush ya applicator aankh pe use kiya to 1 hafte mein replace ya isopropyl alcohol se saaf karein',
    'Alag towel rakhein sirf apni aankh ke liye – family members ke saath share mat karein',
    'Neend poori lein (7-8 ghante) – kamzor immunity mein guheri baar baar aati hai',
    'Contact lens users: guheri ke waqt glasses switch karein – lens pressure aur infection dono badhata hai',
  ],

  donts: [
    'Guheri ko squeeze ya phoda mat karo khud se – bacteria phailta hai, situation worse hoti hai, scar bhi pad sakta hai',
    'Makeup mat lagao jab tak guheri theek na ho – mascara, kajal, eyeliner sab band; bacteria directly apply hota hai',
    'Purana ya expired makeup use mat karo – 3 mahine se purana mascara phenko; bacteria ka ghar ban jaata hai',
    'Contact lens mat pehno guheri ke dauran – cornea tak infection pohonch sakti hai',
    'Cold compress mat lagao – warm compress karo; thanda drainage nahi hone deta',
    'Prescription ke bina steroid eye drops mat daalo – infection badh sakti hai',
  ],

  seasonalCare: {
    summer: 'Paseena zyada – haath baar baar face pe jaata hai – conscious rahein. Contact lens users: heat mein daily disposables prefer karein. Aankhon ko thande saaf paani se din mein 2-3 baar dhona helpful hai. Vasant (spring) mein pollen aur dust zyada – sunglasses pehno, purana makeup throw karein.',
    winter: 'Dry air se Meibomian glands thick oil produce karti hain – blockage ka risk badhta hai. Warm compress ki adat is mausam mein khaas zaroori hai. Wooly scarves face pe – bacteria palkon tak pahunch sakte hain; clean karte rahein. Omega-3 foods is season mein extra helpful hain.',
    monsoon: 'SABSE RISKY SEASON – humidity mein bacteria fastest grow karte hain. Kisi ka towel, handkerchief, takia cover share bilkul mat karo. Makeup avoid karein agar pehle se guheri ki tendency hai. Haath dhona – baar baar – ye ek cheez sabse zyada protect karti hai.',
  },

  faqs: [
    {
      _key: 'faq1',
      question: 'Guheri (stye) kya hoti hai aur ye normal phunsi se alag kyun hai?',
      answer: 'Guheri ek bacterial infection hai jo aankhon ki palak ki oil gland ya hair follicle mein hoti hai – ye normal chehra ki phunsi nahi hai. Alag isliye hai kyunki ye palak ke bilkul kinare ya andar hoti hai, aankhon mein irritation aur paani aata hai, aur isko kabhi bhi squeeze nahi karna chahiye. Normal phunsi mein ye risks nahi hote. Guheri 7-10 din mein aksar apne aap nikal jaati hai – agar aankh pe pressure kaam karo aur warm compress karo.',
    },
    {
      _key: 'faq2',
      question: 'Guheri kitne din mein theek hoti hai?',
      answer: 'External guheri (bahari palak pe) zyada tar 5-7 din mein apne aap theek ho jaati hai – especially warm compress karne se. Internal guheri thodi zyada waqt le sakti hai – 1-2 hafte tak. Agar 2 hafte ke baad bhi theek na ho, ya dard aur sujan badh rahi ho, to doctor se milna chahiye. Chalazion (bina dard ki gaanth) kuch hafton se mahino tak reh sakti hai.',
    },
    {
      _key: 'faq3',
      question: 'Guheri baar baar kyu aati hai – kya koi andar ki wajah hai?',
      answer: 'Baar baar aana ek signal hai ki sirf local infection nahi, koi underlying issue hai. Sabse common wajahein hain – uncontrolled diabetes, dandruff ya blepharitis (palkon ki chronic inflammation), rosacea, ya kamzor immunity. Agar 3 mahine mein 2 ya zyada baar guheri aayi hai to doctor se milna zaroori hai – blood sugar check karwayein.',
    },
    {
      _key: 'faq4',
      question: 'Kya homeopathy guheri mein kaam karti hai?',
      answer: 'Haan – homeopathy guheri mein, khaas tor pe recurrent (baar baar aane wali) aur chalazion (purani gaanth) ke cases mein, achha kaam karti hai. Pulsatilla, Staphysagria, aur Hepar Sulph – ye teeno well-known homeopathic medicines hain jo palak ki oil gland blockage aur infection pe kaam karti hain. Homeopathy underlying tendency bhi treat karta hai – isliye recurrence kam hoti hai.',
    },
    {
      _key: 'faq5',
      question: 'Guheri ka sabse achha gharelu ilaaj kya hai?',
      answer: 'Warm compress sabse proven aur safe gharelu treatment hai – ek saaf kapda garm paani mein bheego, nichod lo, aur palak pe 10 minute rakhho, din mein 3-4 baar. Ye gland ka block hua oil melt karta hai aur drain hone mein help karta hai. Haath saaf rakhna aur aankh ko touch na karna bahut zaroori hai. Toothpaste, gold ring, ya desi nuskha aankhon pe lagane ki zaroorat nahi – ye harmful ho sakta hai.',
    },
    {
      _key: 'faq6',
      question: 'Kya guheri se nazar kamzor hoti hai?',
      answer: 'Normally nahi – ek chhoti normal stye se nazar kamzor nahi hoti. Lekin agar guheri bahut badi ho jaaye aur cornea pe pressure padne lage, to temporarily dhundla dikh sakta hai – jo theek hone pe normal ho jaata hai. Agar nazar dhundli lagaye ya double vision ho to turant doctor ke paas jana chahiye.',
    },
    {
      _key: 'faq7',
      question: 'Guheri mein kya khana chahiye aur kya nahi?',
      answer: 'Khana chahiye: haldi wala doodh, kachcha lehsun, amla, gajar, palak, badam, aur khub paani – ye sab immunity aur aankh ki gland health badhate hain. Avoid karo: zyada meetha (sugar), maida, fried food, aur processed snacks – kyunki ye blood mein bacteria ke liye environment banate hain aur gland ko aur clog karte hain. Recurrent guheri wale sugar intake seriously kam karein.',
    },
    {
      _key: 'faq8',
      question: 'Kya guheri chhoot\'ti hai – kisi doosre ko ho sakti hai?',
      answer: 'Direct spread nahi hoti – sirf paas bethne se nahi hogi. Lekin bacteria infected person ke towel, takia, handkerchief, ya makeup se transfer ho sakta hai. Isliye guheri ke dauran in cheezein share mat karo – khaas tor pe bacchon ke saath. Haath dhona is infection ka sabse aasan bacha hai.',
    },
    {
      _key: 'faq9',
      question: 'Bacchon mein guheri – kya karna chahiye?',
      answer: 'Bacchon mein guheri bahut common hai kyunki wo baar baar haath se aankh chunte hain. Warm compress bacchon ko bhi de sakte ho – thoda kam garm rakho aur 5-7 minute karo. Haath dhona sikhao unhe. Agar 5 saal se chhota bacha hai aur guheri 1 hafte mein theek nahi ho rahi, to pediatrician ya eye doctor se milein. Homeopathy bacchon mein safe aur gentle option hai.',
    },
    {
      _key: 'faq10',
      question: 'Guheri aur chalazion mein kya fark hai?',
      answer: 'Dono alag hain. Guheri bacterial infection hai – dard hota hai, laali hoti hai, pus aata hai, aur 1-2 hafte mein resolve hota hai. Chalazion infection nahi hai – sirf Meibomian gland block ho jaati hai, bina dard ke ek gaanth reh jaati hai weeks tak. Chalazion treat karna mushkil hota hai – homeopathy mein Staphysagria aur Silicea chalazion mein khas taur se madadgar mani jaati hain.',
    },
    {
      _key: 'faq11',
      question: 'Kya guheri press karein ya phoda karein?',
      answer: 'Bilkul nahi – ye sabse badi galti hai. Guheri ko squeeze karne se bacteria aas paas failta hai – palak ke andar, naak ki naali tak, aur kabhi kabhi orbit tak. Preseptal cellulitis ho sakti hai jo bahut serious hai. Warm compress lagao – pus apne aap drain ho jaayegi jab waqt aayega. Agar doctor draining karta hai to wo sterile conditions mein karta hai.',
    },
    {
      _key: 'faq12',
      question: 'Kya guheri mein makeup laga sakte hain?',
      answer: 'Nahi – guheri ke dauran makeup bilkul avoid karo. Kajal, eyeliner, mascara, eyeshadow – sab infected area pe bacteria apply karte hain. Isse guheri der se theek hoti hai aur bacteria doosri gland mein bhi ja sakta hai. Jab tak guheri bilkul theek na ho, koi bhi eye makeup band rakho. Theek hone ke baad purana mascara ya kajal throw karein.',
    },
    {
      _key: 'faq13',
      question: 'Pregnancy mein guheri ka ilaaj kaise karein?',
      answer: 'Pregnancy mein guheri common hoti hai – hormonal changes aur immunity mein temporary shift ki wajah se. Warm compress bilkul safe hai. Antibiotic eye drops ke liye doctor se poochna zaroori hai – khud mat decide karo. Homeopathy ek safe option hai – khaas tor pe Pulsatilla jo pregnancy mein frequently indicated hoti hai, lekin qualified homoeopath se lein.',
    },
    {
      _key: 'faq14',
      question: 'Guheri mein contact lens pehna theek hai kya?',
      answer: 'Nahi – guheri ke dauran contact lens bilkul avoid karo. Lens bacteria ko trap karta hai aur infection ko cornea tak pahoncha sakta hai – jo bahut serious problem hai. Glasses use karo jab tak guheri theek na ho. Theek hone ke baad lens case achhi tarah clean karo ya naya kharido.',
    },
    {
      _key: 'faq15',
      question: 'Kya guheri aur conjunctivitis (aankh aana) ek hi cheez hai?',
      answer: 'Nahi – dono alag hain. Conjunctivitis mein poori aankh laal hoti hai, zyada discharge hota hai, aur dono aankhon mein ho sakta hai – ye zyada contagious hai. Guheri sirf palak ke ek point pe phunsi hoti hai – baaki aankh normally normal rehti hai. Agar aankh bhi laal ho aur guheri bhi, to doctor se milein.',
    },
    {
      _key: 'faq16',
      question: 'Kya stress se guheri ho sakti hai?',
      answer: 'Direct link nahi hai stress aur bacteria mein – lekin indirect link strong hai. Stress se immunity kamzor hoti hai, neend kam hoti hai, haath baar baar face pe jaate hain – ye sab milke infection ka risk badhate hain. Jin logon ko bahut zyada kaam ka pressure hai unhe recurrent stye zyada hoti hai. Homeopathy mein stress-related recurrent stye ke liye constitutional treatment specifically kiya jaata hai.',
    },
    {
      _key: 'faq17',
      question: 'Guheri ke liye doctor ke paas jaana zaroori hai ya ghar pe theek ho sakti hai?',
      answer: 'Zyada tar cases mein ghar pe theek ho jaati hai – warm compress, saaf haath, aankh rest. Doctor ke paas jaana zaroori hai agar: guheri 2 hafte mein theek na ho, nazar affect ho, poori palak ya chehra sujna shuru ho, bukhaar aaye, ya baar baar aa rahi ho. In signs ko ignore mat karo.',
    },
    {
      _key: 'faq18',
      question: 'Guheri baar baar aati hai – koi permanent solution hai?',
      answer: 'Permanent solution ka matlab hai underlying cause treat karna. Blood sugar check karwayein (diabetes rule out karo), dandruff treat karein, palkon ki daily cleaning ki habit banayein (lid hygiene), aur makeup hygiene improve karein. Homeopathy mein constitutional treatment baar baar aane wali guheri ki frequency kaafi had tak kam kar sakta hai – constitution treat karta hai sirf symptom nahi.',
    },
    {
      _key: 'faq19',
      question: 'Guheri ka desi nuskha – kya sach mein kaam karta hai?',
      answer: 'Kaam karta hai: warm compress (gaarm kapda) – ye proven hai. Haldi wala doodh andar se immunity ke liye – helpful. Nahi karna chahiye: gold ring se sainkna – koi scientific basis nahi, ring bacteria carry karti hai. Toothpaste lagana – aankhon ke liye harmful, chemical irritation ho sakti hai. Kuch bhi aankh ke andar daalna bina doctor ke – ye serious hai.',
    },
    {
      _key: 'faq20',
      question: 'Kya Vitamin A ya omega-3 guheri mein help karta hai?',
      answer: 'Vitamin A aankh ki overall health ke liye zaroori hai aur Meibomian gland function mein role karta hai. Omega-3 fatty acids (badam, akhrot, flaxseeds) gland ki oil quality improve karte hain – ye recurrent stye mein khas tor pe helpful hai. Zinc immunity ke liye – eggs, pumpkin seeds se milta hai. Supplements ki jagah pehle food se lo.',
    },
    {
      _key: 'faq21',
      question: 'Aankh pe warm compress kaise karna chahiye sahi tarike se?',
      answer: 'Sahi tarika: ek saaf cotton kapda ya washcloth ko garm (not boiling) paani mein bheego, achhe se nichod lo aur band palkon pe rakhho 10 minute ke liye. Din mein 3-4 baar karo. Jab kapda thanda ho jaaye to dobara garm karo. Market mein reusable warm compress eye masks bhi milte hain – microwave mein garm karo – convenient option hai.',
    },
    {
      _key: 'faq22',
      question: 'Kya dono aankhon mein ek saath guheri ho sakti hai?',
      answer: 'Haan, ho sakta hai lekin common nahi hai. Agar ek saath dono aankhon mein ho ya bahut jaldi ek se doosri mein spread ho to ye alag signal hai – bacteria zyada aggressive hai ya immunity bahut kamzor hai. Is case mein doctor se milna zaroori hai – blood sugar aur immunity test karwayein.',
    },
    {
      _key: 'faq23',
      question: 'Guheri mein kya exercise kar sakte hain?',
      answer: 'Light exercise – walking, yoga – bilkul theek hai. Sirf heavy gym ya swimming avoid karein: gym mein haath baar baar face pe jaate hain; swimming pool ka chlorinated water aankhon ko irritate karta hai. Screen se 20-20-20 rule follow karo: har 20 minute mein 20 second ke liye 20 feet door dekho.',
    },
    {
      _key: 'faq24',
      question: 'Guheri ki best homeopathic medicine kaun si hai?',
      answer: 'Koi ek "best" medicine nahi hoti – homeopathy mein medicine patient ki poori picture ke hisaab se choose hoti hai. Pulsatilla (baar baar upper eyelid guheri, yellowish discharge), Staphysagria (chalazion, recurrent pattern), Hepar Sulph (pus ke saath sensitive stye), Silicea (purani hardened gaanth), Apis Mellifica (acute swelling, stinging pain) – ye sab alag alag type ke liye hain.',
    },
    {
      _key: 'faq25',
      question: 'Guheri ke baad skin pe daag ya nishaan reh jaata hai kya?',
      answer: 'Zyada tar nahi – simple stye theek hone ke baad palak bilkul normal ho jaati hai. Agar khud se squeeze kiya ya secondary infection hui to temporary mark reh sakta hai. Chalazion ke baad kabhi kabhi thodi si gummy feeling reh sakti hai jo gradually theek hoti hai. Surgery ke baad bhi normally koi visible scar nahi hota.',
    },
  ],

  sources: [
    { _key: 'src1', name: 'American Academy of Ophthalmology – Stye (Hordeolum)', url: 'https://www.aao.org', year: '2023' },
    { _key: 'src2', name: 'Mayo Clinic – Sty: Symptoms, Causes, Treatment', url: 'https://www.mayoclinic.org', year: '2023' },
    { _key: 'src3', name: 'National Eye Institute (NEI) – Eyelid Problems', url: 'https://www.nei.nih.gov', year: '2022' },
    { _key: 'src4', name: 'Boericke W. – Pocket Manual of Homoeopathic Materia Medica | 9th Edition', url: 'https://www.homeoint.org', year: '2000' },
    { _key: 'src5', name: 'World Journal of Pharmaceutical and Life Sciences – Homoeopathic Management of Recurrent Stye', url: 'https://www.wjpls.org', year: '2019' },
    { _key: 'src6', name: 'Murphy R. – Lotus Materia Medica | 3rd Edition', url: 'https://www.homeopathiccenter.org', year: '2010' },
  ],

  relatedDiseases: [
    'Chalazion',
    'Allergic Rhinitis',
    'Rosacea',
    'Dandruff (Seborrhoeic Dermatitis)',
    'Diabetes',
  ],

  selfCheck: 'Agar palak ke kinare laal, suji hui dardnaak phunsi hai aur aankhon mein irritation ho – ye guheri hai. Warm compress shuru karo aur squeeze bilkul mat karo. 2 hafte mein theek na ho to doctor se milein.',
}

async function seed() {
  try {
    const result = await client.createOrReplace(doc)
    console.log('✅ Stye (Guheri) created/updated:', result._id)
    console.log('🌐 Live at: https://homeopedia.in/diseases/stye')
  } catch (err) {
    console.error('❌ Error:', err)
  }
}

seed()
