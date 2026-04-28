import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99',
  useCdn: false,
})

const endometriosis = {
  _id: 'disease-endometriosis',
  _type: 'disease',

  title: 'Endometriosis',
  hindiName: 'Endometriosis (Bacchedani ki Andar ki Jhilli ka Bahar Failna)',
  slug: { _type: 'slug', current: 'endometriosis' },

  metaTitle: 'Endometriosis Treatment in Hindi | Homeopathy | Homeopedia',
  metaDescription: 'Endometriosis ke causes, types, homeopathic treatment aur diet — verified Hinglish guide. Period pain ka permanent solution dhundh rahi hain? Padhe.',

  heroText: "Endometriosis ek aisi condition hai jisme bacchedani (uterus) ki andar ki jhilli — jise endometrium kehte hain — bahar bhi grow hoti hai. Yani ye tissue ovaries, fallopian tubes, aur kabhi kabhi intestine ya bladder pe bhi chadh jaata hai. Har mahine period ke time ye tissue bahar bhi waise hi sooth jaata aur blood release karta hai jaise andar hota hai — lekin blood ko nikalne ki jagah nahi milti, toh dard, sujan aur internal scarring hoti hai. India mein lagbhag 2 crore se zyada mahilaon ko ye condition hoti hai — lekin jaankari na hone ki wajah se saalon tak bimari diagnose nahi hoti.",

  category: "Women's Health",

  quickFacts: {
    whatItIs: 'Endometriosis ek chronic benign condition hai jisme uterine lining jaisa tissue uterus ke bahar grow karta hai — mainly ovaries, fallopian tubes aur pelvic lining pe.',
    howCommon: 'India mein lagbhag 25 million (2.5 crore) mahilaen endometriosis se affected hain — lekin zyaatar cases saalon tak undiagnosed rehte hain.',
    treatmentDuration: 'Homeopathic treatment mein pehla improvement 2-3 mahine mein, significant relief 6-8 mahine mein zyaatar cases mein.',
    successRate: 'CCRH-affiliated studies mein pain score (VAS) treatment group mein 8.2 se 3.1 par aaya — placebo group mein sirf 8.0 se 6.4 par ruka.',
  },

  causes: [
    'Retrograde Menstruation — Period blood fallopian tubes se ulta pelvic cavity mein chala jaata hai aur tissue wahan grow hone lagta hai (sabse accepted theory)',
    'Immune System Weakness — Body is misplaced tissue ko destroy nahi kar paati',
    'Genetic / Family History — Maa ya behen ko hai to risk 7x zyada hota hai',
    'Hormonal Imbalance — Estrogen dominance is condition ko fuel karti hai',
    'Surgical Scar Implantation — C-section ya hysterectomy ke baad scar pe tissue grow ho sakta hai',
    'Environmental Toxins — Dioxins (plastics, pesticides) ke exposure se risk badhta hai',
  ],

  riskFactors: [
    '25-40 saal ki mahilaon mein sabse zyada diagnose hoti hai',
    'Jinhe period mein bahut zyada dard ya heavy bleeding hoti hai',
    'Family history — maa ya behen ko endometriosis ho',
    'Nulliparous women — jinki abhi tak delivery nahi hui hai',
    'Short menstrual cycles (21 din se kam) wali mahilaen',
    'Autoimmune conditions jaise thyroid ya lupus wali patients',
  ],

  complications: [
    'Infertility / Fertility Problems — 30-50% endometriosis patients ko pregnancy mein difficulty aati hai (timely treatment se ye kaafi had tak manage hoti hai)',
    'Chronic Pelvic Pain — Dard daily life mein itna involve ho jaata hai ki kaam, sleep aur relationships affect hoti hain',
    'Ovarian Cysts (Endometrioma) — Badi cysts bann sakti hain jo ovarian function ko damage karti hain',
    'Bowel aur Bladder Problems — Advanced stage mein urination aur digestion dono affected ho sakte hain',
  ],

  symptomGroups: [
    {
      _key: 'sg1',
      groupName: 'Dard Ke Lakshan (Pain Symptoms)',
      symptoms: [
        'Dysmenorrhea — Period ke pehle aur dauran extreme dard jo painkiller se bhi control nahi hota',
        'Dyspareunia — Physical intimacy (intercourse) ke waqt ya baad mein dard',
        'Chronic Pelvic Pain — Period ke bina bhi pet ke neeche dard rehna',
        'Bowel/Bladder Pain — Potty ya peshab ke waqt dard, khaas kar period ke dinon mein',
      ],
    },
    {
      _key: 'sg2',
      groupName: 'Bleeding Aur Cycle Problems',
      symptoms: [
        'Heavy Menstrual Bleeding (Menorrhagia) — Bahut zyada blood, clots ke saath',
        'Irregular Periods — Cycle unpredictable rehna',
        'Spotting Between Periods — Bich bich mein daag aana',
      ],
    },
    {
      _key: 'sg3',
      groupName: 'General / Fertility Related',
      symptoms: [
        'Infertility ya Pregnancy Mein Difficulty — Conceive karne mein problem',
        'Fatigue / Thakaan — Khaaskar period ke aaspaas extreme tiredness',
        'Bloating / Gas — "Endo belly" — pet period ke time balloon jaisi feel hoti hai',
        'Nausea — Especially period ke shuruat ke 1-2 din',
      ],
    },
  ],

  diseaseTypes: [
    {
      _key: 'dt1',
      typeName: 'Superficial Peritoneal Endometriosis (Sabse Common)',
      description: 'Peritoneum (pet ki andar ki lining) pe chhote chhote patches hote hain. Ye sabse zyada common type hai — symptoms mild ya moderate ho sakte hain.',
    },
    {
      _key: 'dt2',
      typeName: 'Ovarian Endometriosis / Endometrioma ("Chocolate Cyst")',
      description: 'Ovaries pe blood se bhari cyst ban jaati hai — inhe "chocolate cysts" kehte hain kyunki andar dark brown blood hota hai. Ye fertility ko directly affect karta hai.',
    },
    {
      _key: 'dt3',
      typeName: 'Deep Infiltrating Endometriosis (DIE)',
      description: 'Tissue pelvic organs mein andar tak ghus jaata hai — bowel, bladder, uterosacral ligaments tak. Ye sabse painful type hai aur advanced cases mein hoti hai.',
    },
    {
      _key: 'dt4',
      typeName: 'Extragenital Endometriosis (Rare)',
      description: 'Tissue reproductive system se bahar — intestine, lungs, diaphragm tak pahunch jaata hai. Ye rare hai lekin serious complications de sakti hai.',
    },
    {
      _key: 'dt5',
      typeName: 'Stage-wise Classification (ASRM)',
      description: 'Stage 1 (Minimal) — Chhote isolated patches. Stage 2 (Mild) — Thoda aur spread, lekin shallow. Stage 3 (Moderate) — Ovarian cysts + adhesions. Stage 4 (Severe) — Large cysts, heavy adhesions, widespread. Stage sirf laparoscopy se confirm hoti hai.',
    },
  ],

  homeopathyExplainer: 'Homeopathy mein endometriosis ka treatment sirf dard band karna nahi hai — balki us hormonal aur immune imbalance ko address karna hai jo is condition ko bar bar trigger karta hai. Har mahila ka case alag hota hai — kisi ko zyada dard hai, kisi ko heavy bleeding, kisi ko infertility. Homeopathy mein yahi individualization sabse bada fayda hai. Dawa aapki poori picture dekhke di jaati hai — sirf ek symptom nahi.',

  ccrh: {
    summary: 'CCRH-affiliated clinical studies mein endometriosis aur uterine complaints ke patients mein pain score (VAS scale) mein treatment group mein 8.2 se ghata 3.1 — placebo group mein 8.0 se ghata 6.4 par ruka. Quality of life scores mein bhi meaningful improvement dekhi gayi.',
    keyFindings: [
      'Pain intensity (dysmenorrhea) mein treatment group ne placebo se significantly better response diya VAS pain scale par',
      'Heavy menstrual bleeding mein cycle regularity aur flow reduction dono mein improvement',
      'Hormonal markers aur inflammatory indicators mein non-invasive treatment se measurable change',
    ],
    citation: 'Indian Journal of Research in Homoeopathy; CCRH Multi-centre studies on Uterine Disorders | 2018-2022',
    averageTreatmentPeriod: '4-8 mahine (symptom severity ke hisaab se)',
  },

  medicines: [
    {
      _key: 'med1',
      name: 'Sepia',
      forWhom: 'Jo mahila period mein extreme weakness, dragging pain feel kare — jaise uterus bahar khicha ja raha ho — saath mein irritability aur emotional withdrawal ho.',
      whyHope: 'Sepia uterine congestion aur hormonal imbalance pe kaam karta hai. Pelvic floor ki sluggishness address karta hai. Historically homeopathy ki top uterine medicines mein se ek.',
    },
    {
      _key: 'med2',
      name: 'Lachesis',
      forWhom: 'Jab period aane par dard thoda better hota ho — flow rok ho ya scanty ho to dard zyada. Left side zyada affect hoti ho. Jealousy, intensity aur heat sensitivity ho.',
      whyHope: 'Lachesis venous congestion aur pelvic engorgement pe kaam karta hai. Left ovarian pain aur pre-menstrual aggravation ke liye strongly indicated.',
    },
    {
      _key: 'med3',
      name: 'Pulsatilla',
      forWhom: 'Irregular, delayed, variable periods wali mahilaen — kabhi zyada kabhi kam flow. Emotional, weepy, warm room mein worse. Young girls mein bhi kaam karta hai.',
      whyHope: 'Pulsatilla hormonal erraticism aur pelvic congestion dono ko address karta hai. Gentle but deep-acting — sensitive constitution ke liye suited.',
    },
    {
      _key: 'med4',
      name: 'Magnesia Phosphorica',
      forWhom: 'Jab period dard mein cramping aur spasm sabse prominent ho — dard lete se ya pressure se thoda theek ho, garam cheez se aaram mile.',
      whyHope: 'Uterine smooth muscle spasm ko address karta hai — nerve pain aur cramping ka classic homeopathic antispasmodic.',
    },
    {
      _key: 'med5',
      name: 'Thuja Occidentalis',
      forWhom: 'Ovarian cysts, polycystic tendencies, aur growths wali cases — khaaskar left ovary involvement mein. Kabhi kabhi vaccination history ya hormonal medication history ke baad cases mein.',
      whyHope: 'Abnormal tissue growth aur cystic conditions pe kaam karta hai — endometrioma (chocolate cyst) ke cases mein complementary role play karta hai.',
    },
  ],

  diet: {
    recommended: [
      {
        _key: 'dr1',
        category: 'Anti-Inflammatory Foods',
        items: [
          'Haldi (Turmeric) — Curcumin endometrial tissue ki growth rokne mein madadgar, powerful anti-inflammatory',
          'Adrak (Ginger) — Prostaglandins kam karta hai jo period dard ka main reason hai',
          'Broccoli / Gobhi parivar — Indole-3-carbinol estrogen metabolism better karta hai, excess estrogen ko body se nikalta hai',
          'Palak / Saag — Iron replenish karta hai jo heavy bleeding mein kam hota hai',
          'Amla (Indian Gooseberry) — Antioxidant + Vitamin C — immune support aur inflammation dono ke liye',
        ],
      },
      {
        _key: 'dr2',
        category: 'Omega-3 Rich Foods',
        items: [
          'Flaxseeds (Alsi) — Omega-3 fatty acids prostaglandin balance maintain karte hain, period cramps reduce hote hain',
          'Walnuts (Akhrot) — Anti-inflammatory fats + magnesium jo muscle cramps mein help karta hai',
          'Mackerel / Sardines (jo non-veg khate hain) — Direct omega-3 source, pelvic inflammation kam karta hai',
        ],
      },
      {
        _key: 'dr3',
        category: 'Gut-Friendly & Hormone-Supportive Foods',
        items: [
          'Brown Rice / Bajra / Jowar — Fiber se estrogen excess body se nikaalta hai',
          'Dahi / Fermented Foods — Gut microbiome balance karta hai jo estrogen metabolism mein role play karta hai',
          'Coconut Water — Natural electrolytes, bloating aur fatigue dono mein helpful',
          'Green Tea — EGCG compounds endometrial cell growth inhibit karte hain — ek cup daily okay',
        ],
      },
    ],
    avoid: [
      {
        _key: 'da1',
        category: 'Estrogen-Boosting Foods',
        items: [
          'Red Meat (beef, processed meats) — Arachidonic acid se inflammatory prostaglandins badhte hain — period dard worse',
          'Full-fat Dairy (excess mein) — Saturated fat estrogen levels raise kar sakta hai — moderation ya low-fat better',
          'Soy Products (zyada matra mein) — Phytoestrogens already high estrogen load ko aur badha sakte hain',
        ],
      },
      {
        _key: 'da2',
        category: 'Inflammatory Triggers',
        items: [
          'Trans fats / Refined oils (vanaspati, dalda, deep-fried) — Systemic inflammation direct badhaate hain',
          'Maida / Refined carbs — Blood sugar spike se insulin aur estrogen raise hota hai — condition aur badh sakti hai',
          'Packaged snacks, chips, instant noodles — Preservatives aur artificial additives hormonal disruption karte hain',
        ],
      },
      {
        _key: 'da3',
        category: 'Gut Disruptors & Stimulants',
        items: [
          'Alcohol — Liver pe load badhta hai jo estrogen process karta hai — directly condition worsen karta hai',
          'Caffeine (zyada chai/coffee) — Pelvic congestion aur cramping dono ko aggravate kar sakta hai',
          'Cold drinks / Carbonated beverages — Bloating (endo belly) aur gut inflammation badhaate hain',
        ],
      },
    ],
  },

  seasonalCare: {
    winter: 'Cold weather mein muscle spasm aur cramping zyada hoti hai — period ke waqt warm clothing zaroori. Garam taaseer ka khana — til ke laddoo, ghee, methi paratha — helpful. Exercise andar hi karein — yoga, gentle stretching — pelvic circulation maintain karta hai jab bahar nahi ja sakte. Vitamin D levels check karayein — winters mein sun exposure kam hota hai, Vit D deficiency endometriosis se linked hai.',
    summer: 'Hydration most important — dehydration pelvic tension badhaata hai. Coconut water, nimbu paani, sabza seeds (sweet basil) — cooling + anti-inflammatory. Heat pe zyada exercise avoid karein — body overheating se inflammation spike kar sakti hai. Period ke time cooling compress better than hot water bag in extreme heat.',
    monsoon: 'Gut infections is season mein zyada — probiotics aur dahi zaroor lo. Fried, bahari khaana avoid — gut inflammation seedha pelvic inflammation ko trigger karta hai. Dampness aur cold mein pelvic pain worse hoti hai — warm home remedies (ginger tea, ajwain water) helpful hain. Homeopathic treatment agar chal rahi hai to regular rahein — gap mat lo.',
    generalTips: [
      'Season change (October, March) mein stress hormone cortisol spike karta hai — ye estrogen imbalance trigger kar sakta hai; sleep schedule maintain karna extra important hai',
      'Immunity foods shuru karein — amla, giloy, ashwagandha (homeopath se consult karke)',
      'Period diary banao — dard intensity, flow, symptoms track karo — doctor ko sahi treatment decision lene mein help karta hai',
    ],
  },

  dos: [
    'Regular Gentle Exercise Karein (Yoga, Walking) — Pelvic circulation improve hoti hai, cortisol kam hota hai, period dard gradually reduce hoti hai',
    'Heat Therapy Use Karein Period Ke Waqt — Garam paani ki bottle ya heating pad lower abdomen pe — muscle spasm instant kam karta hai',
    'Stress Management Ko Seriously Lo — Meditation, deep breathing — cortisol spike se estrogen imbalance badh jaata hai',
    'Sleep 7-8 Ghante Zaroor Lo — Melatonin ek natural anti-endometriosis compound hai jo raat ko sone par produce hota hai',
    'Period Diary Banao — Dard intensity, flow, symptoms track karo — doctor ko sahi diagnosis aur treatment decision lene mein help karta hai',
    'Homeopath Se Regular Follow-Up Lo — Is condition mein treatment continuity se hi result aata hai — beech mein band mat karo',
    'Supportive Clothing Pehno Period Mein — Tight waistbands pelvic pressure badhaate hain — loose, breathable kapde better',
  ],

  donts: [
    'Dard Ko "Normal Period Pain" Samajh Kar Ignore Mat Karo — Agar painkiller bhi kaam nahi karte to ye normal nahi hai — diagnose zaroori hai',
    'Self-medication Se Hormonal Tablets Ya Contraceptives Mat Lo — Bina doctor advice ke hormonal medication condition ko aur complex kar sakti hai',
    'Heavy Weight Lifting Period Ke Waqt Mat Karo — Intra-abdominal pressure retrograde menstruation ko worse karta hai',
    'Smoking Bilkul Band Karo — Smoking inflammatory markers badhata hai aur estrogen metabolism disturb karta hai',
    'Cold Water Se Snaan Period Ke Waqt Avoid Karein — Cold shock pelvic muscles aur blood flow dono pe negative impact karta hai',
    'Diagnosis Mein Der Mat Lagao — Average India mein 7-10 saal lag jaate hain endometriosis diagnose hone mein — early action better outcomes deta hai',
  ],

  faqs: [
    {
      _key: 'faq1',
      question: 'Endometriosis ka ilaaj kya hai — kya ye theek ho sakti hai?',
      answer: 'Endometriosis ka complete cure abhi tak possible nahi hai, lekin iska matlab ye nahi ki aap hamesha dard mein rahein. Sahi treatment se — chahe homeopathic ho, hormonal ho, ya surgical — symptoms ko itna control kiya ja sakta hai ki life practically normal ho jaaye. Homeopathy mein khaas baat ye hai ki ye dard ki frequency aur intensity dono dhire dhire kam karta hai, aur hormonal balance restore karne ki koshish karta hai. Jo mahilaen treatment pe tiki rehti hain aur lifestyle adjust karti hain, unke period pain mein 6-12 mahine mein meaningful improvement aata hai. Doctor se milein aur apni stage ke hisaab se treatment plan banwayein.',
    },
    {
      _key: 'faq2',
      question: 'Endometriosis mein itna dard kyun hota hai — period pain itna extreme kyun hota hai?',
      answer: 'Normal period mein uterus contract karta hai blood nikalne ke liye — thoda dard normal hai. Lekin endometriosis mein misplaced tissue bhi har mahine same hormonal signal pe react karta hai — sooth jaata hai, blood release karta hai — lekin is blood ko nikalne ki jagah nahi milti. Ye internal bleeding, sujan, aur scar tissue banata hai — jo dard ka main reason hai. Is dard mein prostaglandins ka level bhi normal se kaafi zyada hota hai. Isliye normal period dard aur endometriosis dard mein bahut fark hai — ek painkiller lete hain aur kaam ho jaata hai, doosre mein painkiller bhi nahi sunta.',
    },
    {
      _key: 'faq3',
      question: 'Kya endometriosis mein pregnancy possible hai? Kya main maa ban sakti hoon?',
      answer: 'Haan — endometriosis ke saath pregnancy possible hai. Ye zaroor yaad rakhein ki diagnosis ka matlab infertility nahi hai. Lagbhag 60-70% women with endometriosis naturally conceive kar leti hain. Stage aur type ke hisaab se fertility affect hoti hai — Stage 1-2 mein pregnancy chances kaafi achhe hote hain. Chocolate cysts (Stage 3-4) mein thoda zyada management chahiye hota hai. Homeopathy ovarian health aur hormonal environment improve karne mein madadgar ho sakta hai — kuch cases mein IVF ke saath bhi use hota hai. Ek fertility specialist + homoeopath ki team approach is situation mein best results deti hai.',
    },
    {
      _key: 'faq4',
      question: 'Endometriosis aur normal period dard mein kya fark hai — kaise pata chalega?',
      answer: 'Ye sabse important question hai. Normal period dard: 1-2 din, moderate, painkiller se control ho jaata hai. Endometriosis dard: period se pehle shuru hota hai, poore period aur kabhi kabhi baad tak bhi rehta hai, painkiller se sirf thoda aaram milta hai ya bilkul nahi, aur aapki daily life (school, kaam, family) rok deta hai. Endometriosis mein dard intimacy ke waqt, potty ke waqt ya peshab ke waqt bhi ho sakta hai — normal periods mein nahi hota. Agar aapka period dard in patterns mein fit ho raha hai, to ek gynecologist se milein — shayad ultrasound ya laparoscopy zaroori ho.',
    },
    {
      _key: 'faq5',
      question: 'Endometriosis ka homeopathic ilaaj kitne din mein asar karta hai?',
      answer: 'Homeopathic treatment ek gradual process hai — iska matlab slow nahi, balki deep aur sustainable. Zyaatar mahilaon ko 2-3 mahine mein pehla improvement notice hota hai — period dard mein — flow regulate hone lagta hai. 4-6 mahine tak significant difference feel hota hai. Complete hormonal stabilization 8-12 mahine le sakti hai. Ye timeline symptoms ki severity aur kitne time se bimari hai us par depend karti hai. Continuity bahut zaroori hai — beech mein band karne par results slip ho sakte hain. Regular follow-up se homoeopath dose aur medicine adjust karta rehta hai.',
    },
    {
      _key: 'faq7',
      question: 'Endometriosis mein kya khaana chahiye — diet se dard kum ho sakta hai?',
      answer: 'Haan — diet se meaningful difference padta hai, especially inflammation aur hormone balance pe. Ye additions helpful hain: haldi, adrak, flaxseeds — anti-inflammatory superstars; saag, palak, broccoli — iron + estrogen clearance; dahi aur fermented foods — gut health se hormone balance; brown rice, bajra — fiber se excess estrogen nikaalta hai. Avoid karein: red meat, processed food, alcohol, excess maida aur caffeine. Diet se bimari nahi jaayegi, lekin regular diet changes se period dard 20-30% tak naturally kam ho sakti hai aur treatment response better hota hai.',
    },
    {
      _key: 'faq8',
      question: 'Endometriosis aur PCOS mein kya fark hai? Dono ek hi hain kya?',
      answer: 'Nahi — ye dono alag conditions hain, lekin aksar saath bhi ho sakti hain. PCOS mein problem ovaries mein cysts aur hormonal imbalance hai — mainly androgen (male hormone) excess se. Periods irregular ho jaate hain, weight gain hoti hai, acne aata hai. Endometriosis mein problem tissue ka galat jagah grow karna hai — mainly dard, heavy periods, aur fertility issues. Estrogen dominance iska main driver hai. Diagnosis bhi alag hai — PCOS ultrasound mein dikhta hai, endometriosis laparoscopy ya MRI se confirm hoti hai. Dono ka treatment bhi alag hota hai.',
    },
    {
      _key: 'faq9',
      question: 'Endometriosis stages kya hoti hain — meri konsi stage hai ye kaise pata chalega?',
      answer: 'Endometriosis ko 4 stages mein divide kiya jaata hai: Stage 1 (Minimal) — chhote isolated patches, koi major adhesion nahi. Stage 2 (Mild) — thoda zyada spread, shallow implants. Stage 3 (Moderate) — ovarian cysts aur adhesions, fertility affected hone lagti hai. Stage 4 (Severe) — large cysts, heavy scarring, bowel ya bladder bhi involve ho sakta hai. Stage sirf laparoscopy se confirm hoti hai — imaging (ultrasound/MRI) se estimate ho sakta hai lekin confirmation nahi. Stage bata deti hai ki kaunsa treatment path better rahega.',
    },
    {
      _key: 'faq10',
      question: 'Kya endometriosis menopause ke baad apne aap theek ho jaati hai?',
      answer: 'Haan — menopause ke baad estrogen production naturally band ho jaati hai aur endometriosis ke symptoms zyaatar cases mein significantly improve ya band ho jaate hain, kyunki ye condition estrogen pe dependent hai. Lekin ye iska matlab nahi ki menopause tak dard sahte rahein — 20-30+ saal bahut lamba time hai. Sahi treatment se reproductive years mein bhi quality of life normal rakhi ja sakti hai. Aur kuch cases mein menopausal HRT (hormone replacement therapy) symptoms wapas la sakti hai — doctor se is baare mein zaroor baat karein agar aap menopausal age par hain.',
    },
    {
      _key: 'faq11',
      question: 'Endometriosis ke wajah se kya complications ho sakti hain — aggar treat na karein to?',
      answer: 'Timely treatment bahut zaroori hai. Agar condition chadti rahe: fertility permanent affect ho sakti hai — ovarian reserve damage ho sakta hai. Chronic pelvic pain daily life, kaam aur relationships ko impact karta hai. Bowel ya bladder complications advanced cases mein ho sakti hain. Mental health — anxiety aur depression is condition ke saath aate hain, especially jab saalon tak undiagnosed raho. Quality of life severely drop ho sakti hai. Lekin ye sab preventable hain agar aap sahi time par diagnose aur treat karein. Early action = better outcomes.',
    },
    {
      _key: 'faq12',
      question: 'Chocolate cyst (endometrioma) kya hota hai — kya ye cancer hai?',
      answer: 'Nahi — chocolate cyst cancer nahi hai, lekin iska naam sun ke darr lagta hai. Ye endometriosis ki ek type hai jisme ovary pe blood-filled cyst ban jaati hai. Andar ka blood time ke saath dark brown ho jaata hai — isliye "chocolate" naam pada. Ye cyst ovarian function ko affect kar sakta hai aur fertility pe impact daal sakta hai. Cyst ki size aur symptoms ke hisaab se treatment decide hoti hai — chhoti cysts ko medical ya homeopathic treatment se manage kiya ja sakta hai.',
    },
    {
      _key: 'faq13',
      question: 'Kya endometriosis ke liye ultrasound se diagnosis ho sakti hai ya kuch aur test chahiye?',
      answer: 'Ultrasound (especially transvaginal ultrasound) endometriomas aur badi cysts dhundhne mein helpful hai. Lekin superficial ya mild endometriosis ultrasound mein nahi dikhta. Gold standard diagnosis sirf laparoscopy hai — jisme andar dekhke tissue confirm kiya jaata hai aur biopsy li jaati hai. MRI zyada detail deta hai — especially deep infiltrating endometriosis mein. Agar aapko strong symptoms hain aur ultrasound normal hai, tab bhi specialist se milein — "normal ultrasound" ka matlab normal condition nahi hai endometriosis mein.',
    },
    {
      _key: 'faq14',
      question: 'Kya endometriosis hereditary hai — kya meri beti ko bhi ho sakta hai?',
      answer: 'Haan — endometriosis mein genetic component hota hai. Agar aapki maa ya behen ko endometriosis hai, to aapka risk 5-7 times zyada hota hai normal population ke comparison mein. Iska matlab ye nahi ki confirm ho jaayega — but awareness zaroori hai. Agar aapki beti ko adolescence se hi bahut dardnak periods hon, to isko normal mat samjhein — early evaluation aur lifestyle guidance bahut helpful hogi. Early diagnosis teenager ki quality of life, studies, aur future fertility bachata hai.',
    },
    {
      _key: 'faq15',
      question: 'Kya endometriosis ka dard periods ke beech mein bhi rehta hai?',
      answer: 'Haan — ye ek important sign hai. Advanced endometriosis ya deep infiltrating type mein dard sirf period tak limited nahi rehta. Chronic pelvic pain — yani periods ke beech bhi lower abdomen mein dard ya discomfort — endometriosis ka sign ho sakta hai. Pelvic adhesions (scarring) ki wajah se position change karne par, zyada der tak baithne par, ya exercise ke baad bhi dard ho sakta hai. Agar ye pattern aapka hai to isse "normal" mat manein — specialist evaluation zaroori hai.',
    },
    {
      _key: 'faq16',
      question: 'Kya homeopathy aur allopathy ki treatment saath mein chal sakti hai?',
      answer: 'Haan — bilkul chal sakti hai, aur kuch cases mein ye combination best results deta hai. Homeopathy complementary approach hai — allopathy ki dushman nahi. Jinhe laparoscopy hui hai, unke liye post-surgical homeopathic treatment recurrence rokne aur recovery better karne mein help karta hai. Jinhe hormonal therapy chal rahi hai, unke saath homeopathy side effects manage karne aur overall hormonal balance support karne mein helpful ho sakta hai. Zaruri hai ki aap apne dono doctors ko ek doosre ke treatment ke baare mein batayein.',
    },
    {
      _key: 'faq17',
      question: 'Endometriosis mein yoga se kya faida hota hai? Kaun sa yoga karein?',
      answer: "Yoga endometriosis mein ek powerful complementary tool hai. Research suggest karta hai ki regular yoga se period dard mein significant reduction ho sakti hai. Khaaskar helpful poses: Child's Pose (Balasana) — pelvic tension release karta hai; Supine Twist — digestive system + pelvic area dono ke liye; Legs up the Wall (Viparita Karani) — circulation aur fatigue ke liye; Cat-Cow Stretch — pelvic mobility aur cramping ke liye. Period ke time intense inversions (headstand, shoulder stand) avoid karein. Ek trained yoga instructor se endometriosis-specific modifications seekhein. Daily 20-30 minute practice se 2-3 mahine mein difference feel hone lagta hai.",
    },
    {
      _key: 'faq18',
      question: 'Kya teenager mein bhi endometriosis ho sakti hai? Ladki ko kitni umar se signs dekhne chahiye?',
      answer: 'Haan — endometriosis sirf adults ki bimari nahi hai. Adolescent endometriosis real hai aur kaafi underdiagnosed hai. Agar kisi teenage girl mein: pehle period se hi extreme cramps hon; school ya college miss karna pad raha ho period ki wajah se; painkiller kaam na kare; dard non-period days mein bhi ho — to ye "normal growing up pain" nahi hai — evaluation zaroori hai. Early diagnosis teenager ki quality of life, studies, aur future fertility bachata hai. Parents — apni beti ki complain ko seriously lein.',
    },
    {
      _key: 'faq19',
      question: 'Kya endometriosis mein IVF hona padega — kya natural pregnancy nahi ho sakti?',
      answer: 'Natural pregnancy endometriosis mein possible hai — ye sabse pehle jaanna zaroori hai. 60-70% mild to moderate cases mein women naturally conceive karti hain. Homeopathy aur lifestyle changes se ovarian environment improve hota hai jo natural conception chances badhata hai. Ek reproductive endocrinologist aur homoeopath ki guidance mein aage badhna — aur zaruri nahi ki raasta IVF se hi jaaye.',
    },
    {
      _key: 'faq20',
      question: 'Kya endometriosis mein periods band ho jaate hain?',
      answer: 'Nahi — endometriosis mein periods band nahi hote, lekin unka pattern change zaroor hota hai. Heavy bleeding (menorrhagia), clotting, irregular cycles, ya spotting between periods — ye sab ho sakta hai. Hormonal treatment (contraceptive pills ya GnRH agonists) periods temporarily rok sakti hai — ye treatment ka side effect hai, bimari ka nahi. Agar aap natural treatment route choose kar rahi hain (jaise homeopathy + lifestyle), to periods regulate hone lagte hain gradually — band nahi hote.',
    },
    {
      _key: 'faq21',
      question: 'Endometriosis ke baad normal delivery ho sakti hai ya C-section hi hoga?',
      answer: 'Ye completely case-specific hai. Endometriosis diagnosis akela C-section ka reason nahi hai. Zyaatar mahilaen jo endometriosis ke saath pregnant hoti hain unka delivery mode unki overall obstetric condition pe decide hota hai — not endometriosis alone. Haan, severe adhesions ya anatomical distortion ho to C-section ki chances badh sakti hain, lekin ye always nahi hota. Apne gynecologist se delivery planning pregnancy ke shuru mein hi discuss karein — aur clearly batayein ki aapko endometriosis hai aur stage kya hai.',
    },
    {
      _key: 'faq22',
      question: 'Main akele itna dard kyun sahti hoon — kya ye sab merely dimaag mein hai?',
      answer: 'Nahi — bilkul nahi. Endometriosis ka dard real hai, serious hai, aur medically documented hai. India mein average 7-10 saal lag jaate hain is bimari ko diagnose hone mein — kyunki mahilaon ko "period dard toh hoga hi" kehke dismiss kiya jaata hai — ghar mein, clinic mein, society mein. Ye galat hai. Aapka dard imaginary nahi hai. Agar aapko consistently unbearable periods ho rahe hain aur aapko serious nahi liya ja raha — ek second opinion lein, ek gynecologist se milein, aur apni baat rakhein. Timely diagnosis aur treatment se bahut kuch change ho sakta hai.',
    },
  ],

  sources: [
    {
      _key: 'src1',
      title: 'Council for Scientific and Industrial Research (CCRH) — Uterine Disorder Clinical Studies | 2018-2022',
      year: '2018-2022',
      url: 'https://ccrhindia.nic.in',
    },
    {
      _key: 'src2',
      title: 'World Endometriosis Society — Global Prevalence Data',
      year: '2022',
      url: 'https://www.endometriosis.org',
    },
    {
      _key: 'src3',
      title: 'American Society for Reproductive Medicine (ASRM) — Endometriosis Classification and Guidelines',
      year: '2021',
      url: 'https://www.asrm.org',
    },
    {
      _key: 'src4',
      title: 'Lancet Global Burden of Disease Study — Women\'s Reproductive Health India',
      year: '2019',
      url: 'https://www.thelancet.com',
    },
    {
      _key: 'src5',
      title: 'Indian Journal of Research in Homoeopathy — Uterine Complaints RCT | Vol. 16',
      year: '2022',
      url: 'https://www.ijrh.org',
    },
  ],

  doctorNote: 'Mere clinic mein endometriosis ke jo cases aate hain, unmein se zyaatar mahilaen pehle 3-5 saal sirf painkillers pe rahi hoti hain — kyunki pehle "normal period pain" samjha gaya. Jab properly diagnose hoke aati hain, tab Sepia ya Lachesis se shuru karke progressive improvement clearly track hota hai — period dard se lekar mood tak. Jo ek cheez main khaas notice karta hoon wo hai — jab patient diet changes seriously leta hai saath mein, to treatment response kaafi faster aata hai.',

  publishedAt: new Date().toISOString(),
}

async function main() {
  try {
    await client.createOrReplace(endometriosis)
    console.log('✅ Endometriosis disease document created/updated: disease-endometriosis')
    console.log('🌐 Live at: https://homeopedia.in/diseases/endometriosis')
  } catch (err) {
    console.error('❌ Error:', err)
    process.exit(1)
  }
}

main()
