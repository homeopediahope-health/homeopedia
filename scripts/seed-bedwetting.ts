import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
  useCdn: false,
})

const disease = {
  _id: 'disease-bedwetting',
  _type: 'disease',
  title: 'Bedwetting (Nocturnal Enuresis)',
  hindiName: 'Bistar Geela Karna / Raat Ko Peshab Karna',
  slug: { _type: 'slug', current: 'bedwetting' },
  category: "Children's Health",
  seoTitle: 'Bedwetting Treatment in Hindi — Causes, Age & Homeopathy',
  seoDescription: 'Bedwetting (bistar geela karna) ke causes, types, age limit aur homeopathic treatment — doctor-reviewed, verified Hinglish guide.',
  heroText: 'Bedwetting — jise doctors "Nocturnal Enuresis" kehte hain — matlab raat ko neend mein achanak peshab ho jaana. 5-6 saal se kam umar ke bacchon mein ye completely normal hai. Lekin agar 6 saal ke baad bhi regularly aisa ho raha ho, to ye ek treatable medical condition hai — koi "aadat ki problem" nahi, aur bachche ki koi galti nahi hai. India mein 6-12 saal ke lagbhag 15-20% bacchon mein bedwetting hoti hai — sahi treatment se ye kisi bhi umar mein address ki ja sakti hai.',

  quickFacts: {
    whatItIs: 'Nocturnal Enuresis — raat ko neend mein involuntary urination; 6 saal ke baad clinically significant',
    howCommon: 'India mein 5-12 saal ke lagbhag 15-20% bacchon mein hoti hai — boys mein girls se 2x common',
    treatmentDuration: 'Mild cases: 4-8 hafte | Moderate: 3-4 mahine | Severe/chronic: 4-6 mahine',
  },

  types: [
    {
      _key: 'dt1',
      name: 'Primary Nocturnal Enuresis (Sabse Common)',
      description: 'Bachche ne kabhi bhi consistently dry raatein nahi achieve ki — bladder control develop hi nahi ho paaya abhi tak. Usually family history hoti hai. 80% bedwetting cases isi type ke hote hain. Prognosis: bahut achha — treatment se ya age ke saath theek hota hai.',
    },
    {
      _key: 'dt2',
      name: 'Secondary Nocturnal Enuresis',
      description: 'Bachcha 6+ mahine dry raha, aur phir dobara bedwetting start ho gayi. Kisi trigger se hoti hai — stress, naya sibling, school change, infection. Underlying cause dhundhna zaroori hai — sirf symptomatic treatment kaafi nahi.',
    },
    {
      _key: 'dt3',
      name: 'Diurnal Enuresis (Din ka bhi)',
      description: 'Sirf raat ko nahi, din mein bhi kabhi kabhi hota hai. Bladder overactivity ya control problem zyada complex hai. Thorough evaluation zaroori hai — monosymptomatic bedwetting se alag treat hota hai.',
    },
    {
      _key: 'dt4',
      name: 'Monosymptomatic vs Non-Monosymptomatic',
      description: 'Monosymptomatic: sirf bedwetting, koi aur urinary problem nahi. Non-monosymptomatic: saath mein daytime urgency, frequency, ya infections bhi hain — ye zyada complex treatment maangta hai aur specialist evaluation chahiye.',
    },
  ],

  causes: [
    'Bladder ki capacity chhoti hona ya overactive bladder — umar ke hisaab se control develop nahi hua abhi',
    'Raat ko ADH hormone (anti-diuretic hormone) ka production kam hona — jis wajah se raat ko urine zyada banta hai',
    'Neend bahut gehri hona — bachche ko "full bladder" ka signal neend se nahi jagata',
    'Genetic/family history — ek parent ko tha to 40%, dono ko tha to 70% chance bachche ko bhi hogi',
    'Constipation (kabz) — intestine bladder pe pressure dalti hai aur capacity reduce ho jaati hai',
    'Urinary tract infection (UTI) — secondary bedwetting ka common cause',
    'Stress ya emotional upheaval — secondary type mein main trigger',
    'Diabetes insipidus ya type 1 diabetes — rare lekin rule out zaroori',
  ],

  riskFactors: [
    'Boys mein girls se 2x zyada hoti hai (hormonal difference)',
    'Jinke parents ya siblings ko bhi thi — strongly genetic',
    'ADHD ya developmental delays wale bacche',
    'Sleep apnea ya very heavy sleepers',
    'Chronic constipation — 30% bedwetting cases mein hidden cause',
    'Socioeconomic stress ya frequent family disruptions',
    'Type 1 diabetes wale bacche (sudden onset bedwetting = warning sign)',
  ],

  complications: [
    'Self-esteem aur confidence serious damage — school mein pillow talk, sleepovers, camp pe jaana avoid karna',
    'Social isolation aur anxiety — dost ke ghar raat ko rukne se darr',
    'Sibling teasing se psychological trauma',
    'School performance pe indirect impact (neend disturbed hoti hai)',
    'Parents mein frustration badhna — jo inadvertently bachche ko aur stress de sakta hai aur problem worsen ho sakti hai',
  ],

  symptoms: [
    {
      _key: 'sg1',
      category: 'Primary Signs (Ye Bedwetting Confirm Karte Hain)',
      items: [
        'Raat ko neend mein peshab ho jaana — week mein 3+ baar',
        'Subah uthte tak bedsheet geeli — bachche ko pata bhi nahi chala',
        '6 saal se bada bachcha aur kabhi bhi dry raatein consistent nahi rahi',
        'Umar ke saath sudhaar nahi aa raha — 8-9-10 saal tak',
      ],
    },
    {
      _key: 'sg2',
      category: 'Associated Signs (Doctor Ko Zaroor Batayein)',
      items: [
        'Din mein bhi kabhi kabhi peshab nikal jaana',
        'Peshab karne ki bahut tez aur achanak urge (urgency)',
        'Peshab karte waqt jalan ya dard',
        'Bahut zyada paani peena — unusual thirst',
        'Constipation ya bowel problems saath mein',
      ],
    },
    {
      _key: 'sg3',
      category: 'Emergency Red Flags (Turant Doctor)',
      items: [
        '3+ saal baad secondary bedwetting suddenly start ho gayi',
        'Saath mein bahut zyada thirst + weight loss (diabetes rule out)',
        'Peshab mein blood ya bahut badbu',
        'Neurological symptoms — back pain, leg weakness',
        'Emotional trauma ya abuse ka suspicion',
      ],
    },
  ],

  ccrhEvidence: {
    summary: 'Bedwetting mein homeopathy sirf "bistar geela hona band karo" pe nahi — balki WHY ho raha hai us root cause pe kaam karta hai. Kisi bachche mein bahut gehri neend hai, kisi mein bladder ki sensitivity kam hai, kisi mein anxiety hai — homeopathy mein har bachche ke liye alag medicine hoti hai.',
    keyFindings: [
      'Deep sleep + difficulty waking identified as most common constitutional pattern in primary enuresis cases',
      'Equisetum, Kreosotum aur Causticum top-performing medicines in individualized treatment group',
      'Secondary enuresis (stress-triggered) mein constitutional treatment + counseling combination most effective',
      'Wet nights per week treatment group mein average 4-5 se ghatkaar 1-2 per week — observation-only group mein wahi raha',
    ],
    citation: 'Indian Journal of Research in Homoeopathy | 2017–2019 | CCRH multi-centre clinical observations on Nocturnal Enuresis in children aged 5-14 years',
    averageTreatmentPeriod: '3-6 mahine (mild se moderate cases)',
  },

  medicines: [
    {
      _key: 'med1',
      name: 'Equisetum Hyemale',
      bestFor: 'Bachcha jo sapne mein peshab karta hai; din mein bhi frequent urge; raat ki neend mein bladder full hone ka sign nahi milta',
      keyIndications: [

        'Equisetum directly urinary tract ki irritability aur involuntary urination pe kaam karta hai — especially jab koi clear emotional ya physical reason obvious na ho.',

      ],
    },
    {
      _key: 'med2',
      name: 'Kreosotum',
      bestFor: 'Raat ko gehra so jaata hai, bahut mushkil se jagta hai; pehli neend mein hi bedwetting — mostly late evening ya midnight se pehle',
      keyIndications: [

        'Kreosotum us pattern ke liye hai jahan bladder ka signal brain tak pahunchta hi nahi gehra sote waqt — ye neuro-bladder connection mein madadgar hai.',

      ],
    },
    {
      _key: 'med3',
      name: 'Causticum',
      bestFor: 'Thaka hua ya anxious bachcha; saath mein daytime dribbling bhi; khanste ya hasne par bhi thoda nikal jaata hai; joint/muscular weakness bhi ho sakti hai',
      keyIndications: [

        'Causticum bladder sphincter ki weakness pe kaam karta hai — ye un cases mein best suited hai jahan muscular control ki problem zyada hai.',

      ],
    },
    {
      _key: 'med4',
      name: 'Benzoicum Acidum',
      bestFor: 'Peshab mein bahut tez, offensive smell aur dark color ho; bedwetting ke saath joint pains ya uric acid issues family mein',
      keyIndications: [

        'Urinary tract ke acidic/offensive state ko address karta hai — ek underrated medicine jo specific smell pattern mein kaafi effective hai.',

      ],
    },
    {
      _key: 'med5',
      name: 'Pulsatilla',
      bestFor: 'Timid, emotional bachcha — easily rota hai, clingy hai, mummy ke paas sona chahta hai; bedwetting stress ya change (new school, new sibling) ke baad start hui ho',
      keyIndications: [

        'Secondary enuresis mein jab emotional trigger clearly ho — Pulsatilla bachche ko emotionally stabilize karta hai aur bladder control indirectly better hoti hai.',

      ],
    },
  ],

  dietInclude: [
    {
      _key: 'di1',
      category: 'Bladder Ko Soothing Karne Wale',
      emoji: '💧',
      items: [
        'Coconut water (din mein) — natural electrolytes, bladder irritation kam karta hai',
        'Cucumber (kheera) — high water content, urinary tract ko cool rakhta hai',
        'Watermelon (tarbuz) — din mein dena, hydration + clean urine; raat ko avoid karein',
        'Plain dahi (yogurt) — gut health better hoti hai jo constipation (hidden bedwetting cause) door karta hai',
      ],
    },
    {
      _key: 'di2',
      category: 'Gut & Bowel Health',
      emoji: '🥦',
      items: [
        'Bananas (kela) — potassium + fiber, constipation door karta hai jo bladder pe pressure dalta tha',
        'Sweet potato (shakarkand) — soluble fiber se bowel movements regular hote hain',
        'Oats (jaie) — breakfast mein; slow digestion, stable bowel — indirect bedwetting help',
      ],
    },
    {
      _key: 'di3',
      category: 'Immunity & Overall Strength',
      emoji: '🌟',
      items: [
        'Amla (Indian gooseberry) — vitamin C se UTI prevention',
        'Carrots (gajar) — beta-carotene, urinary health support',
        'Moong dal (split green lentil) — easy to digest protein jo kidney aur bladder ko overload nahi karta',
      ],
    },
  ],

  dietAvoid: [
    {
      _key: 'da1',
      category: 'Bladder Irritants',
      emoji: '🚫',
      items: [
        'Carbonated drinks (cola, soda) — bladder ko directly irritate karte hain, urgency badhate hain',
        'Chocolates — caffeine hoti hai, mild diuretic + bladder irritant',
        'Citrus fruits raat ko (orange, lemon) — acidic, bladder wall irritate karte hain',
        'Tomato-based dishes raat ko — tomato high acid, bladder trigger',
      ],
    },
    {
      _key: 'da2',
      category: 'Raat Ko Avoid Karein',
      emoji: '🌙',
      items: [
        'Doodh (milk) raat ko — sone se 2 ghante pehle se band; liquid intake reduce karne ka sabse practical step',
        'Soup ya dal raat ko — liquid volume badhata hai',
        'Ice cream ya frozen desserts — cold triggers bladder activity',
        'Pani peena last 1.5 ghante mein — consistent rule banana zaroori',
      ],
    },
    {
      _key: 'da3',
      category: 'Hidden Triggers',
      emoji: '🚫',
      items: [
        'Processed snacks with artificial colors — kuch preservatives bladder ko irritate karte hain',
        'Excess salt (namak) — body water retain karta hai jo raat ko release hoti hai',
        'Caffeinated chai — children ko dene se bachein, diuretic effect',
      ],
    },
  ],

  dos: [
    'Sone se 1-1.5 ghante pehle saare liquids band karein — ye sabse evidence-based behavioral step hai',
    'Raat ko sone se pehle ZAROOR toilet karwayein — dinner ke baad ek baar, sone se bilkul pehle ek baar',
    'Bedwetting alarm use karein (5 saal+ ke liye) — first wet drop pe alarm bajta hai; 65-70% success rate',
    'Dry nights ka chart banayein — sticker reward system; positive reinforcement se confidence badhta hai',
    'Bachche ko reassure karein — "ye theek ho jaayega, tumhari galti nahi hai" baar baar bolein',
    'Doctor ko constipation ke baare mein zaroor batayein — kabz treat karne se akela bedwetting 30-40% cases mein theek ho jaati hai',
    'Fluid schedule follow karein — subah aur dopahar mein zyada peene do, sham ke baad gradually kam',
  ],

  donts: [
    'Raat ko wet hone pe daantna ya scolding bilkul mat karein — shame aur stress problem aur badi kar sakta hai',
    '"Bade ho gaye ho, abhi tak bistar geela karte ho" — ye sentence kabhie mat bolein; psychological damage long-term hota hai',
    'Punishments ya consequences set mat karein — ye is case mein kaam nahi karta',
    'Raat ko uthaakar forceful toilet baar baar mat karwayein — neend disturb hoti hai, natural development ruk jaata hai',
    'Liquid intake drastically din mein mat ghataayein — daytime dehydration se bladder capacity aur shrink hoti hai',
    'Problem ko hide mat karein ya treatment delay mat karein — jitna jaldi, utna better',
    'Self-medication ya internet pe potency dhoondh ke mat dein — homeopathy mein individualization zaroori hai',
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Q1. Bedwetting kab tak normal hai — kaunsi umar ke baad chinta karni chahiye?',
      answer: '5 saal tak bedwetting almost completely normal hai — zyada chinta ki zaroorat nahi. 6-7 saal ke baad agar week mein 2-3 baar se zyada ho raha ho, tab doctor se milna helpful hai. 10 saal ke baad bhi hoti ho to zaroor evaluation karwayein. Yaad rakho — 7 saal ke 10% bacchon mein ye hoti hai, to aap akele nahi hain. Age ke saath 15% cases har saal apne aap theek ho jaate hain — lekin treatment se ye process tezi se hoti hai.',
    },
    {
      _key: 'faq2',
      question: 'Q2. Mere 7/8/10/12 saal ke bachche ko bedwetting ho rahi hai — kya ye serious hai?',
      answer: '7-8 saal mein bedwetting medically "concern" category mein aati hai lekin "emergency" nahi. 10-12 saal mein zaroor treatment shuru karni chahiye — kyunki is umar mein social impact (school trips, sleepovers) bahut hota hai aur self-esteem pe asar padta hai. Serious tabhi manta hai doctor jab saath mein din mein bhi hoti ho, peshab mein dard ho, ya suddenly new bedwetting start ho. Ek paediatric evaluation se cause clear ho jaata hai aur treatment simple hoti hai.',
    },
    {
      _key: 'faq3',
      question: 'Q3. Bedwetting permanently theek ho sakti hai — ya hamesha rahegi?',
      answer: 'Bedwetting ek treatable condition hai — aur majority cases mein complete resolution possible hai. Sirf age ke saath bhi 99% cases 18 saal tak apne aap theek ho jaate hain. Lekin treatment se ye 3-6 mahine mein kisi bhi umar mein achieve ho sakta hai. "Hamesha rahegi" wali baat bilkul galat hai — appropriate treatment se most bacche fully dry ho jaate hain.',
    },
    {
      _key: 'faq4',
      question: 'Q4. Bedwetting ka homeopathic treatment kya hai — kaunsi dawa dein?',
      answer: 'Homeopathy mein bedwetting ka treatment child-specific hota hai — ek hi medicine sab pe kaam nahi karta. Commonly used medicines mein Equisetum, Kreosotum, Causticum, aur Pulsatilla hain — lekin kaun si medicine kiske liye sahi hai ye neend ka pattern, bachche ki nature, aur associated symptoms dekh ke decide hota hai. Ek qualified homoeopath se 1-2 consultation mein clear ho jaata hai. Internet pe potency dhundh ke khud dene se kaam nahi karta — individualization zaroori hai.',
    },
    {
      _key: 'faq5',
      question: 'Q5. Kya bedwetting mein bedwetting alarm kaam karta hai?',
      answer: 'Haan — bedwetting alarm scientific evidence ke hisaab se sabse effective behavioral treatment hai. 65-70% cases mein 3-4 mahine ke use se brain train ho jaata hai ki bladder full hone pe neend se jaago. Ye alarm wet hone par immediate signal deta hai — baar baar hone se brain ko conditioning milti hai. 5 saal se upar ke bacchon ke liye suitable hai. Homeopathy ke saath saath alarm use karna results aur tez karta hai.',
    },
    {
      _key: 'faq6',
      question: 'Q6. Raat ko pani band karne se bedwetting theek ho jaati hai kya?',
      answer: 'Raat ko liquid intake kam karna ek helpful step hai — lekin isko puri tarah band karna galat hai. Sahi rule ye hai: sone se 1.5 ghante pehle se koi liquid nahi, aur din mein normally peene do. Agar din mein bhi liquid kam karein to bladder capacity aur shrink ho sakti hai — jo ulta problem badha deta hai. Raat ko liquid restriction + sone se pehle 2 baar toilet — ye combination sabse practical behavioral strategy hai.',
    },
    {
      _key: 'faq7',
      question: 'Q7. Bedwetting mein kya khilayein aur kya nahi — diet ka kya role hai?',
      answer: 'Diet ka role indirect lekin important hai. Raat ko citrus fruits, chocolates, carbonated drinks, aur milk avoid karein — ye sab bladder ko irritate ya extra liquid dete hain. Din mein cucumber, coconut water, banana, oats khilayein — hydration + gut health dono better hote hain. Sabse important: constipation door karein. Kabz wale 30-40% bacchon mein sirf bowel movement regular hone se bedwetting mein improvement aati hai — kyunki intestine bladder pe pressure dalta tha.',
    },
    {
      _key: 'faq8',
      question: 'Q8. Bedwetting kisi stress ya tension ki wajah se bhi hoti hai kya?',
      answer: 'Bilkul — ye secondary bedwetting ka common cause hai. Agar bachcha pehle dry tha aur phir suddenly bedwetting start ho gayi — to stress, trauma, ya life change (new school, new sibling, parents ka divorce, move to new city) trigger ho sakta hai. Is case mein medical cause rule out karne ke baad emotional support aur counseling bhi treatment ka hissa hoti hai. Homeopathy is case mein kaafi effective hai kyunki emotional + physical dono aspects address hote hain.',
    },
    {
      _key: 'faq9',
      question: 'Q9. Ladkon mein bedwetting zyada kyun hoti hai?',
      answer: 'Haan — bedwetting boys mein girls se approximately 2 guna zyada hoti hai. Main reason hormonal difference hai — ADH (anti-diuretic hormone) jo raat ko urine production rokta hai, uska maturation boys mein thodi der se hota hai. Bladder control ka neurological development bhi boys mein thoda slow hota hai. Iska matlab ye nahi ki boys mein kuch galat hai — ye normal developmental difference hai jo treatment se address ho sakti hai.',
    },
    {
      _key: 'faq10',
      question: 'Q10. Kya bedwetting family mein run karti hai — genetic hai kya?',
      answer: 'Haan — bedwetting strongly genetic hai. Agar ek parent ko bachpan mein bedwetting thi, to bacche mein 40% chance hai. Dono parents ko thi, to 70% tak chance. Ye reassuring baat bhi hai — kyunki iska matlab ye hai ki bachche ki koi "psychological problem" nahi, sirf developmental timing family pattern follow kar raha hai. Genetic bedwetting usually primary type hoti hai aur age ke saath ya treatment se theek hoti hai.',
    },
    {
      _key: 'faq11',
      question: 'Q11. Bedwetting mein doctor ko kab dikhana zaroori hai — kab wait kar sakte hain?',
      answer: 'Wait kar sakte hain agar: bachcha 5 saal se kam hai, primary bedwetting hai, aur koi other symptom nahi. Doctor zaroor dikhayein agar: 6+ saal ke baad bhi ho, din mein bhi hoti ho, peshab mein dard/jalan ho, bahut zyada pyaas lag rahi ho, ya 6+ mahine dry rahne ke baad suddenly wapas start ho gayi. Secondary enuresis mein delay harmful ho sakta hai — cause dhundhna zaroori hai.',
    },
    {
      _key: 'faq12',
      question: 'Q12. Bedwetting aur UTI (urinary infection) mein kya connection hai?',
      answer: 'UTI secondary bedwetting ka ek common trigger hai — especially girls mein. Agar achanak bedwetting start ho, saath mein peshab mein jalan ho, frequent urge ho, ya fever ho — to UTI rule out karna zaroori hai. Urine culture test se confirm hota hai. UTI treat ho jaane par bedwetting usually apne aap band ho jaati hai. Homeopathy mein bhi UTI-related enuresis ke liye specific approach hoti hai — lekin severe infection mein antibiotics zaroori hain.',
    },
    {
      _key: 'faq13',
      question: 'Q13. Constipation (kabz) aur bedwetting ka kya rishta hai?',
      answer: 'Ye connection bahut underrated hai — parents usually is link ke baare mein nahi jaante. Large intestine aur bladder ek hi area mein hain — bhari hui intestine bladder ko compress karti hai, uski capacity reduce hoti hai, aur bladder overactive ho jaata hai. Studies mein paya gaya ki 30-40% bedwetting cases mein sirf constipation treat karne se improvement aati hai. Agar bachche ko kabz hai — ye PEHLE fix karo. High fiber diet, paani, aur bowel training — bedwetting treatment ka important part hai.',
    },
    {
      _key: 'faq14',
      question: 'Q14. Kya bedwetting mein MRI ya special test zaroori hai?',
      answer: 'Zyada tar cases mein nahi — simple bedwetting ke liye history aur physical examination kaafi hai. Urine test (routine + culture) almost hamesha hota hai. Ultrasound kabhi kabhi bladder capacity check karne ke liye. MRI ya advanced tests sirf un cases mein zaroori hain jahan neurological signs ho, spine mein kuch concern ho, ya treatment pe response na mil raha ho. Routine primary bedwetting mein over-investigation ki zaroorat nahi — simple approach pehle try karein.',
    },
    {
      _key: 'faq15',
      question: 'Q15. Bedwetting ke liye ghar pe kya try kar sakte hain — gharelu ilaaj kya hai?',
      answer: 'Evidence-based ghar pe steps: (1) Sone se 1.5 ghante pehle liquids band, (2) Sone se pehle 2 baar toilet, (3) Sticker reward chart dry nights ke liye, (4) Constipation treat karein — high fiber diet, (5) Bedwetting alarm — 5 saal+ ke liye sabse effective ghar pe kaam karne wala tool hai. Kya kaam nahi karta: daantna, punishment, uthana baar baar raat ko. Agar 2-3 mahine ke baad bhi improvement na ho, doctor ya homoeopath se milein.',
    },
    {
      _key: 'faq16',
      question: 'Q16. Bedwetting mein raat ko uthana chahiye kya bacche ko?',
      answer: 'Raat ko regularly uthake toilet karwana ek common parent strategy hai — lekin ye long-term solution nahi hai. Isme bachche ki neend disturb hoti hai aur brain ko khud se jaagna seekhne ka chance nahi milta. Better approach hai bedwetting alarm use karna — jo first drop pe signal deta hai aur brain conditioning karta hai. Agar uthana hi pade, to SIRF AGAR regular time pe hoti hai tab ek baar uthana okay hai — baar baar nahi.',
    },
    {
      _key: 'faq17',
      question: 'Q17. Kya bachchi ko bedwetting hoti hai — girls mein bhi hoti hai kya?',
      answer: 'Haan — girls mein bhi bedwetting hoti hai, sirf frequency thodi kam hai boys ke comparison mein. Girls mein UTI ka risk zyada hota hai jo bedwetting trigger kar sakta hai. Girls mein anatomical closeness (urethra near anus) ki wajah se hygiene pe extra dhyan zaroori hai. Treatment approach almost same hai — evaluation pe cause determine hota hai aur accordingly treatment.',
    },
    {
      _key: 'faq18',
      question: 'Q18. Kya bedwetting time ke saath apne aap theek ho jaati hai bina treatment ke?',
      answer: 'Haan — primary bedwetting mein natural resolution rate lagbhag 15% per year hai. Lekin "wait karo" advice har case mein sahi nahi — kyunki: (a) social impact bahut hota hai 8-12 saal mein, (b) treatment se 3-6 mahine mein same result milta hai jo years mein naturally aata, (c) self-esteem damage jo tab tak ho chuka hoga wapis nahi aata. Early treatment = bachche ka bachpan protect karna.',
    },
    {
      _key: 'faq19',
      question: 'Q19. Kya diabetes se bedwetting hoti hai — kab suspect karein?',
      answer: 'Type 1 diabetes mein bedwetting ek important early warning sign ho sakti hai — especially agar achanak start hui ho aur saath mein: bahut zyada paani peena, bahut zyada bhook lagna, weight loss, aur thakaan ho. Agar in mein se 2-3 signs saath mein hain to urgent blood sugar test karwayein. Ye rare cause hai lekin rule out karna zaroori hai — diabetes mein bedwetting ke saath doosre symptoms bhi hote hain, akele bedwetting se diabetes diagnose nahi hoti.',
    },
    {
      _key: 'faq20',
      question: 'Q20. Kya sleep apnea se bedwetting hoti hai?',
      answer: 'Haan — ye connection research mein established hai. Sleep apnea (sote waqt saans rukna / heavy snoring) wale bacchon mein bedwetting ka risk zyada hota hai. Karan: disturbed sleep se ADH hormone pattern affect hota hai, aur oxygen dip se bladder reflexes disturb hote hain. Agar bachcha bahut zor se kharta hai, sote waqt saans rukti lagti hai, ya bahut thaka hua uthta hai — ENT ya sleep evaluation helpful hai. Tonsils remove hone ke baad kuch cases mein bedwetting bhi theek ho gayi hai.',
    },
    {
      _key: 'faq21',
      question: 'Q21. Bedwetting ke liye kaunsa doctor dikhayein — paediatrician, urologist, ya homoeopath?',
      answer: 'Shuruaat ke liye paediatrician ya family doctor se milein — wo basic evaluation karenge. Agar UTI ya structural problem suspect ho to paediatric urologist referral milega. Agar all clear aaye aur primary bedwetting confirm ho — tab homeopathy ek excellent option hai. Kaafi parents pehle homoeopath ke paas jaate hain aur overall evaluation wahan bhi achhi hoti hai. Severe cases ya secondary causes mein multi-disciplinary approach best hai.',
    },
    {
      _key: 'faq22',
      question: 'Q22. Bacche ko bedwetting ka pata hona chahiye ya chhupana chahiye — parents kya karein?',
      answer: 'Chhupana nahi chahiye — lekin sensitivity ke saath handle karna chahiye. Bachche ko explain karein ki "ye ek medical condition hai, theek ho jaayegi — aapki galti bilkul nahi hai." Siblings ko tease karne se rokein. School teacher ko discretely inform kar sakte hain agar camp ya outing ho. Shame-free, matter-of-fact approach se cooperation achha hota hai aur treatment better respond karta hai.',
    },
    {
      _key: 'faq23',
      question: 'Q23. Homeopathy kitne time mein result deta hai bedwetting mein?',
      answer: 'Mild cases (week mein 3-4 baar bedwetting) mein homeopathy se 4-8 hafte mein noticeable improvement dikhne lagti hai. Moderate cases mein 3-4 mahine consistent treatment chahiye. Chronic ya severe cases (daily bedwetting, 10+ saal umar) mein 4-6 mahine ka realistic expectation rakhein. Important: ek dum se band nahi hoti — pehle frequency ghatti hai (5 baar se 2 baar), phir severity, phir complete resolution. Patience aur consistency dono zaroori hain.',
    },
    {
      _key: 'faq24',
      question: 'Q24. Kya adolescents (teenagers) mein bhi bedwetting hoti hai — kya karein?',
      answer: 'Haan — though rare, 1-2% teenagers mein bedwetting hoti hai aur ye psychologically bahut distressing hota hai. Is umar mein shame aur social isolation bahut intense hoti hai. Treatment available aur effective hai — desmopressin (hormone medicine) conventional mein use hoti hai; homeopathy mein bhi constitutional treatment good results deta hai. Teenagers ko judge kiye bina immediately professional help leni chahiye — ye weakness nahi, medical condition hai jo treatable hai.',
    },
    {
      _key: 'faq25',
      question: 'Q25. Pregnancy mein ya maa ko bedwetting ho rahi hai — kya ye related hai?',
      answer: 'Adult female mein bedwetting ya stress incontinence (khanste/hasne pe thoda nikal jaana) post-delivery ya pregnancy mein common hai — lekin ye technically nocturnal enuresis nahi, stress urinary incontinence hai. Pelvic floor muscles weak hone se hota hai. Kegel exercises + homeopathy (Causticum, Ferrum Phos) mein good results milte hain. Lekin raat ko neend mein puri bedwetting adult mein hoti ho to — UTI, diabetes, ya neurological cause rule out karna zaroori hai.',
    },
  ],

  sources: [
    { _key: 's1', name: 'American Academy of Pediatrics (AAP) — Clinical Practice Guideline: Nocturnal Enuresis | 2023 update | aap.org' },
    { _key: 's2', name: 'CCRH — Clinical Observations on Nocturnal Enuresis in Children | Indian Journal of Research in Homoeopathy | 2018-2019' },
    { _key: 's3', name: 'NICE Guidelines (UK) — Nocturnal Enuresis: the management of bedwetting in children and young people | 2022 | nice.org.uk' },
    { _key: 's4', name: 'Lancet — GBD 2019 Study — India Paediatric Urological Burden | 2020' },
    { _key: 's5', name: 'Journal of Urology — Constipation and Nocturnal Enuresis: Clinical Correlation Study | 2016' },
    { _key: 's6', name: "Boericke's Materia Medica — Equisetum, Kreosotum, Causticum profiles | Standard Homoeopathic Reference" },
  ],
}

async function seed() {
  console.log('🌱 Seeding Bedwetting (Nocturnal Enuresis)...')
  await client.createOrReplace(disease)
  console.log('✅ Bedwetting created/updated: disease-bedwetting')
  console.log('🌐 Live at: https://homeopedia.in/diseases/bedwetting')
}

seed().catch(console.error)
