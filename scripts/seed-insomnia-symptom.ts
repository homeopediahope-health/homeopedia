import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

const symptom = {
  _id: 'symptom-insomnia',
  _type: 'symptom',
  title: 'Insomnia (Neend Na Aana)',
  hindiName: 'Neend Na Aana',
  slug: { _type: 'slug', current: 'insomnia' },
  metaTitle: 'Insomnia in Hindi – Neend Na Aana, Karan aur Homeopathy',
  metaDescription:
    'Insomnia (neend na aana) ke karan, severity aur ghar pe safe steps – simple Hinglish mein. Verified info, doctor-reviewed. Dr. Shadab.',
  heroText:
    'Raat ko bistar pe lait jaate ho – thake hue bhi – lekin aankhein band nahi hoti. Ghante guzar jaate hain, neend nahi aati. Subah uthte ho toh fresh feel karne ki jagah aur zyada exhausted lagte ho.\n\nInsomnia (neend na aana) mein brain us "off switch" ko nahi dhundh pata jo neend ke liye zaruri hai. Kuch logon ko neend aati hi nahi, kuch ko aati hai lekin baar baar toot jaati hai.\n\nYe akela problem nahi hai aapka – WHO ke mutabiq duniya mein lagbhag 30% adults kabhi na kabhi insomnia experience karte hain.\n\nYe page aapko 2 minute mein batayega: aapka case kaisa hai, serious hai ya nahi, aur aage kya karna chahiye.',

  indiaContext:
    'WHO ke mutabiq duniya mein lagbhag 30% adults kabhi na kabhi insomnia face karte hain. Urban India mein ye number zyada estimated hai – stress, irregular schedules aur screen time major factors hain.',
  indiaContextSource: 'WHO – Sleep Disorders: Raising Awareness of Sleep Health | 2024',

  severityLevel1: [
    '2-5 din se neend kam aa rahi hai – kisi specific wajah se (exam stress, safar, naya ghar)',
    'Neend aa rahi hai, bas thoda late aati hai',
    'Din mein kaam theek se ho raha hai – concentrate kar pa rahe ho',
    'Koi naya medicine shuru kiya jo neend affect kar raha ho – doctor ko inform karo',
  ],
  severityLevel2: [
    '3 hafte ya zyada se baar baar neend nahi aa rahi',
    'Din mein kaam karna mushkil ho raha hai – mood kharab, concentrate nahi hota',
    'Sar dard, aankhon mein jalan rozana ho rahi hai',
    'Ghar pe steps karne ke baad bhi koi fark nahi',
  ],
  severityLevel3: [
    'Neend na aane ke saath chest mein dard ya dil ki dhadkan tez hona',
    'Neend mein saans rukna ya baar baar ghutan se uthna (Sleep Apnea ka sign)',
    'Bahut zyada darr, panic, ya aisa lagana ki kuch bura hone wala hai – rozana',
    '72+ ghante se bilkul neend nahi aayi – hallucinations ya confusion ho rahi hai',
    'Pregnancy mein insomnia ke saath sar mein tez dard ya haath-paon soojana',
  ],

  timeline3Days:
    'Ye aksar "Acute Insomnia" hota hai – koi trigger hota hai iske peeche. Exam, job stress, koi bura news, travel. Body abhi naye situation mein adjust ho rahi hai. Ghar pe steps try karo – bahut baar ek-do raat mein hi khud theek ho jaata hai. Agar 7 din mein better na ho, Level 2 mein aao.',
  timeline4Weeks:
    'Ab ye "Short-term Insomnia" ban gaya hai. Trigger shayad khatam ho gaya ho, lekin brain ne "raat ko jaagna" ka ek pattern bana liya hai. Ye pattern todna zaroori hai. Is hafte doctor se milein – CBT-I (Cognitive Behavioral Therapy for Insomnia) aur homeopathy dono is stage pe achhi tarah kaam karte hain.',
  timelineMonthPlus:
    'Agar 3 ya zyada raaton ko ek hafte mein neend nahi aati – aur ye 3 mahine se zyada se chal raha hai – ye "Chronic Insomnia" hai. Is stage pe koi underlying cause bhi ho sakta hai – anxiety, thyroid, depression. Doctor evaluation zaruri hai. Homeopathy chronic insomnia mein complementary role mein achha kaam karta hai – sirf symptom nahi, root cause address karta hai.',

  lifestyleCauses: [
    {
      _key: 'lc1',
      causeName: 'Irregular Sleep Schedule (Sone-Jaagne Ka Koi Waqt Nahi)',
      mechanism:
        'Hamare brain mein ek biological clock hoti hai jise "Circadian Rhythm" kehte hain. Ye clock sunlight aur darkness dekh ke decide karti hai kab neend aaye. Jab hum kabhi 10 baje sote hain, kabhi 2 baje – brain ko signal nahi milta ki "ab neend ka waqt hai." Melatonin (neend ka hormone) release hona delayed ya irregular ho jaata hai.',
      howToIdentify:
        'Weekdays aur weekends mein sone ke waqt mein bahut fark. Weekend pe late uthna "social jet lag" create karta hai – aur Monday ko neend seedha affected hoti hai.',
    },
    {
      _key: 'lc2',
      causeName: 'Screen Time (Mobile/Laptop – Sone Se Pehle)',
      mechanism:
        'Phone aur laptop ki screen "Blue Light" emit karti hai. Ye blue light brain ko confuse karti hai – "abhi din hai" waala signal jaata hai. Melatonin release ruk jaata hai. Iske alawa jo content dekh rahe hain – reels, news, social media – wo brain ko "alert mode" mein rakhta hai. Neend ke liye brain ko "wind-down mode" mein jaana padta hai, jo blue light nahi hone deti.',
      howToIdentify:
        'Raat ko 11-1 baje tak screen pe rehna – phir neend aane mein ghante lagana. Aankhein thaki huin hain lekin brain active lagta hai.',
    },
    {
      _key: 'lc3',
      causeName: 'Caffeine (Chai-Coffee – Sahi Waqt Pe Nahi Lena)',
      mechanism:
        'Caffeine brain mein "adenosine" naam ke chemical ko block karta hai. Adenosine hi neend ki feeling create karta hai – jab caffeine ise block karta hai, neend nahi aati. Ek cup chai ka effect 6-8 ghante tak reh sakta hai. Shaam 4-5 baje pi hui chai raat ko neend affect kar sakti hai.',
      howToIdentify:
        'Chai ya coffee peene ke baad din mein fresh lagte ho, lekin raat ko neend late aati hai. Shaam wali chai chhod do – ek hafte mein fark dikhe.',
    },
    {
      _key: 'lc4',
      causeName: 'Anxiety aur Overthinking (Sone Se Pehle Dimag Ka Chhalna)',
      mechanism:
        'Bistar pe lait jaate hi "to-do lists," kal ki meetings, ya unsolved problems dimaag mein ghoomne lagte hain. Ye "hyperarousal" state hai – sympathetic nervous system active rehta hai (jo "fight or flight" ke liye hota hai). Is state mein body literally neend mein jaane se rokti hai. Ye ek vicious cycle hai – jitna neend ke liye try karte ho, utna stressed hote ho, utna kam aati hai.',
      howToIdentify:
        'Bistar pe jaate hi "mental replay" shuru hota hai. Ya future ki chinta aati hai. Ya koi specific cheez jo resolve nahi hui.',
    },
  ],

  medicalCauses: [
    {
      _key: 'mc1',
      diseaseName: 'Anxiety Disorder',
      diseaseHindiName: 'Chinta ya Ghabrahat ki Bimari',
      howSymptomPresents:
        'Anxiety mein brain constantly "threat mode" mein rehta hai. Raat ko jab koi distraction nahi hota – thoughts zyada tez ho jaate hain. Neend aane se pehle ki us peaceful "drifting off" feeling ko anxiety nahi aane deti. Aankh lagi bhi to thodi der mein sar dard ya "jolt" se uth jaate hain.',
      howToIdentify:
        'Sirf neend ki problem nahi – din mein bhi restless rehna, baar baar chinta hona, pet mein tightness. Insomnia aur anxiety saath-saath aate hain.',
      homeopediaSlug: 'anxiety',
      isAvailable: true,
    },
    {
      _key: 'mc2',
      diseaseName: 'Depression',
      diseaseHindiName: 'Gahri Udaasi ya Manodasha',
      howSymptomPresents:
        'Depression mein neend ka pattern ulat jaata hai – ya bahut neend aati hai, ya bilkul nahi. Ek common pattern hai "Early Morning Awakening" – raat 3-4 baje uth jaana aur phir neend na aana. Din mein bhi thakaan rehti hai lekin raat ko neend nahi.',
      howToIdentify:
        'Agar neend ke saath-saath kisi cheez mein interest khatam ho gaya ho, khana achha na lage, ya zyada akela feel ho – ye depression ka sign ho sakta hai.',
      homeopediaSlug: 'depression',
      isAvailable: true,
    },
    {
      _key: 'mc3',
      diseaseName: 'Thyroid Disorder',
      diseaseHindiName: 'Thyroid Granthi Ki Bimari',
      howSymptomPresents:
        'Hyperthyroidism (thyroid ka zyada kaam karna) mein body ka metabolism tez ho jaata hai – dil ki dhadkan tez, sweating, aur brain overactive. Is state mein neend aana bahut mushkil hota hai.',
      howToIdentify:
        'Insomnia ke saath wazan ka ghattna, haath kaampna, ya dil ki dhadkan abnormal lagana – ye thyroid issue ka sign ho sakta hai. TSH test karwao.',
      homeopediaSlug: 'thyroid',
      isAvailable: true,
    },
    {
      _key: 'mc4',
      diseaseName: 'Sleep Apnea',
      diseaseHindiName: 'Neend Mein Saans Rukna',
      howSymptomPresents:
        'Sleep Apnea mein neend ke dauran saans baar baar rukti hai – brain turant patient ko jagata hai. Patient ko lagta hai "neend nahi aayi" jabki wo baar baar jaag raha tha. Subah sar dard aur extreme thakaan hoti hai.',
      howToIdentify:
        'Koi agar bole ki aap neend mein kharraate lete ho ya saans rukti hai – ya aap khud raat ko ghutan se uthe ho – Sleep Apnea test zarur karwao.',
      homeopediaSlug: '',
      isAvailable: false,
    },
    {
      _key: 'mc5',
      diseaseName: 'Chronic Pain / Arthritis',
      diseaseHindiName: 'Purana Dard – Jodo Ka Ya Muscles Ka',
      howSymptomPresents:
        'Arthritis, back pain, ya migraines mein neend ke dauran position badlne pe dard badhta hai. Brain dard ko prioritize karta hai neend pe – isliye neend ya toot-toot ke aati hai, ya aati hi nahi.',
      howToIdentify:
        'Agar insomnia ke saath kisi specific body part mein chronic dard bhi ho – pehle dard ki treatment karna zaroori hai.',
      homeopediaSlug: 'arthritis',
      isAvailable: true,
    },
  ],

  redFlags: [
    'Sleep Apnea – agar neend ke saath sar dard, kharraate, aur subah extreme thakaan ho to sleep study (polysomnography) zarur karwao – ye serious condition hai',
    'Severe Anxiety ya Depression – agar 2+ hafte se neend nahi aa rahi aur saath mein mood bilkul kharab hai, rona aa raha hai ya panic attacks hain – turant psychiatrist ya doctor se milo',
    'Medicines ka side effect – agar koi naya medicine (blood pressure, thyroid, antidepressants) shuru kiya hai aur tab se neend gayi hai – apne doctor ko turant batao, dose adjust ho sakti hai',
  ],

  homeSteps: [
    {
      _key: 'hs1',
      action: 'Fixed Sone-Jaagne Ka Waqt Set Karo',
      whyItWorks:
        'Brain ko ek routine se "signal" milta hai. Ek hafte mein hi circadian rhythm adjust hone lagti hai. Weekends pe bhi same time pe utho – sirf is ek step se bahut fark padta hai.',
    },
    {
      _key: 'hs2',
      action: 'Sone Se 1 Ghanta Pehle "Wind-Down Routine" Banao',
      whyItWorks:
        'Brain ko OFF mode mein jaane ke liye transition time chahiye. Screen band karo. Halki roshni rakho. Kuch calm karo – book padho, light music suno, ya deep breathing karo. Ye body ko signal deta hai ki neend aa rahi hai.',
    },
    {
      _key: 'hs3',
      action: 'Kamra Thanda, Andhera aur Quiet Rakho',
      whyItWorks:
        'Body ka temperature thoda girna padta hai neend ke liye. 18-22 degree Celsius ideal hai. Andhera melatonin release trigger karta hai. Agar bahar shor hai – fan ya white noise help karta hai.',
    },
    {
      _key: 'hs4',
      action: 'Bistar Sirf Neend Ke Liye Use Karo',
      whyItWorks:
        'Agar aap bistar pe mobile chalate ho, kaam karte ho, ya TV dekhte ho – brain bistar ko "activity zone" samajhne lagta hai, neend zone nahi. Sirf neend ke liye bistar use karo – ek hafte mein brain association ban jaati hai.',
    },
    {
      _key: 'hs5',
      action: '"4-7-8 Breathing" Try Karo Jab Neend Na Aaye',
      whyItWorks:
        '4 second mein saans lo, 7 second rokho, 8 second mein chhordo. Ye vagus nerve ko activate karta hai jo parasympathetic system (rest mode) ko on karta hai. Clinical studies mein ye anxiety aur insomnia dono mein helpful paya gaya hai.',
    },
  ],

  homeopathyIndividualization:
    'Insomnia ka naam ek hai – lekin har insaan ki neend alag tarah jaati hai. Kisi ko neend aati hi nahi, kisi ko aati hai lekin raat 2 baje toot jaati hai. Kisi ki neend anxiety se jaati hai, kisi ki dard se, kisi ki zyada sochne se. Homeopathy mein "insomnia" ka ek treatment nahi hota – aapki neend kaise jaati hai, kab zyada hota hai, kya trigger karta hai, saath mein aur kya hota hai – ye sab milake aapka treatment decide hota hai. Isliye ek hi symptom mein do logon ko bilkul alag treatment ho sakta hai.',
  homeopathyRootCause:
    'Jo log saalon se sleeping pills le rahe hain, wo jaante hain ki pill band karo to neend phir chali jaati hai – kyunki pill sirf symptom manage karti hai. Homeopathy mein sirf neend laana goal nahi hota – jo cheez neend churra rahi hai usse address kiya jaata hai. Anxiety se aane wala insomnia alag treatment maangta hai, thyroid se aane wala alag, grief ke baad aane wala alag. Waqt ke saath neend ki quality aur duration dono better hote hain. Research is area mein limited hai aur results individual hote hain – lekin chronic insomnia mein complementary support ke roop mein ye explored ja sakta hai.',
  homeopathySafety:
    'Pregnancy mein neend ki problem bahut common hai – lekin sleeping pills safe nahi hoti. Bacchon mein bhi standard medicines ke options limited hain. Homeopathy ki highly diluted medicines ki wajah se ye pregnancy mein, bacchon mein, aur elderly patients mein bhi safely use ho sakti hai – conventional treatment ke saath saath. Emergency ya severe cases mein pehle allopathic doctor se milo, homeopathy complementary role mein hai – replacement nahi.',

  homeopathyDiseaseLinks: [
    {
      _key: 'hdl1',
      diseaseName: 'Anxiety Disorder (Chinta Rog)',
      diseaseSlug: 'anxiety',
    },
    {
      _key: 'hdl2',
      diseaseName: 'Depression (Udaasi)',
      diseaseSlug: 'depression',
    },
    {
      _key: 'hdl3',
      diseaseName: 'Thyroid Disorder',
      diseaseSlug: 'thyroid',
    },
  ],

  isForYouIf: [
    'Aap neend ki jaad tak jaana chahte ho – sirf raat ko pill leke so nahi jaana',
    'Aapko long-term sustainable neend chahiye – ek raat mein nahi, lekin lasting',
    'Aap side-effect free option chahte ho – especially agar pregnant hain, baccha hai, ya doosri medicines chal rahi hain',
    'Aap anxiety ya stress ki wajah se neend kho rahe ho aur ek integrated approach chahte ho',
  ],
  notForYouIf: [
    'Aapko aaj raat hi sona zaroori hai – koi important exam, surgery, ya emergency hai. Pehle conventional option lein, homeopathy baad mein saath chala sakte hain.',
    'Aapki neend Sleep Apnea ki wajah se ja rahi hai – Sleep Apnea ka specific medical treatment (CPAP) zaroori hai – homeopathy supplementary role mein.',
  ],

  linkedDiseaseCards: [
    {
      _key: 'ldc1',
      title: 'Anxiety Disorder',
      hindiName: 'Chinta Rog',
      slug: 'anxiety',
    },
    {
      _key: 'ldc2',
      title: 'Depression',
      hindiName: 'Gahri Udaasi',
      slug: 'depression',
    },
    {
      _key: 'ldc3',
      title: 'Thyroid Disorder',
      hindiName: 'Thyroid Ki Bimari',
      slug: 'thyroid',
    },
    {
      _key: 'ldc4',
      title: 'Arthritis',
      hindiName: 'Jodo Ka Dard',
      slug: 'arthritis',
    },
  ],

  quickFactSymptom:
    'Insomnia mein neend aane mein 30+ minute lagti hai, ya raat mein baar baar neend tututi hai, ya subah bahut jaldi neend uch jaati hai.',
  quickFactIndiaStats:
    'WHO ke mutabiq lagbhag 30% adults kabhi na kabhi insomnia face karte hain. Urban India mein ye number zyada estimated hai.',
  quickFactDoctorWhen:
    'Teen hafte ya zyada se problem ho, ya neend ke saath saans rukti ho ya panic attacks hon – turant doctor se milein.',

  faqs: [
    {
      _key: 'faq1',
      faqType: 'general',
      q: 'Insomnia aur normal neend na aana mein kya fark hai?',
      a: 'Agar kabhi kabhi ek-do raat neend nahi aati – stress ya excitement ki wajah se – ye NORMAL hai. Insomnia tab hota hai jab teen ya zyada raat ek hafte mein neend ki problem ho, aur ye 3-4 hafte ya zyada chal raha ho, aur din mein functioning affect ho rahi ho. Ye teen conditions saath hongi to "Chronic Insomnia Disorder" keh sakte hain. Ek-do din ki neend na aana insomnia nahi – lekin teen hafte se baar baar neend ki problem ho to doctor se milna chahiye.',
    },
    {
      _key: 'faq2',
      faqType: 'general',
      q: 'Insomnia kitne din tak rehta hai?',
      a: 'Acute Insomnia (trigger-based) – ek hafte se kam mein khud theek hota hai. Short-term Insomnia – teen hafte tak. Chronic Insomnia – teen mahine ya zyada. Lekin ye "automatically theek hoga" waala rule nahi hai. Agar 7 din ke ghar pe steps ke baad bhi koi fark nahi – doctor se milo. Jitna zyada wait karo, brain ka "raat ko jaagna" pattern utna pakka ho jaata hai – aur thodna zyada mushkil.',
    },
    {
      _key: 'faq3',
      faqType: 'general',
      q: 'Insomnia ka sabse common karan kya hai?',
      a: 'India mein insomnia ke teen sabse common causes hain: anxiety aur overthinking (sabse zyada), irregular sleep schedule (late raat tak phone-TV), aur caffeine (shaam ko chai-coffee). In teeno ka ek shared mechanism hai – ye sab brain ko "alert mode" mein rakhte hain jab use "rest mode" mein jaana chahiye. Urban India mein lagbhag 1 in 3 adults irregular sleep schedule ki wajah se neend ki problem face karte hain. Agar cause lifestyle mein hai – lifestyle change se sabse pehle fark padta hai.',
    },
    {
      _key: 'faq4',
      faqType: 'general',
      q: 'Raat ko neend nahi aati – ghar pe kitne din wait kar sakte hain?',
      a: '7 din tak ghar pe steps try karo – fixed sleep schedule, screen band, caffeine reduce, breathing exercises. Agar in saaton dinon mein koi improvement na aaye – ya agar din mein functioning clearly affect ho rahi ho – Level 2 pe aao aur doctor se milo. 3 hafte se zyada ka insomnia khud theek hone ki possibility kam hai – brain ek pattern bana leta hai jo todna padta hai.',
    },
    {
      _key: 'faq5',
      faqType: 'homeopathy',
      q: 'Kya homeopathy insomnia mein kaam karta hai?',
      a: 'Homeopathy chronic insomnia mein – especially jab anxiety ya emotional stress root cause ho – ek safe complementary option hai. Ye sleeping pills ki tarah "kal raat" neend nahi deta, lekin waqt ke saath neend ki quality aur pattern improve hoti hai. Homeopathy ka fayda ye hai ki ye sirf neend ko address nahi karta – saath mein anxiety, overthinking, ya jo bhi root cause hai use bhi. Research limited hai is area mein aur results individual hote hain. Best results tab milte hain jab proper case history ke baad individualized treatment ho.',
    },
    {
      _key: 'faq6',
      faqType: 'general',
      q: 'Insomnia mein kaunsa doctor dikhana chahiye?',
      a: 'Pehle apne General Physician (GP) ya family doctor se milo. Wo basic evaluation karenge aur zarurat ke hisaab se refer karenge: Psychiatrist ya Psychologist – agar anxiety ya depression linked ho; Neurologist ya Sleep Specialist – agar Sleep Apnea ya unusual sleep disorder ho; Homeopathic Doctor – complementary treatment ke liye; Endocrinologist – agar thyroid ya hormonal cause suspected ho. Aksar ek detailed history se hi diagnosis ho jaati hai – koi specific "insomnia test" nahi hota. Sleep diary rakhna (kab soye, kab jaage, kya socha) bahut helpful hota hai doctor ke liye.',
    },
    {
      _key: 'faq7',
      faqType: 'general',
      q: 'Bacchon mein insomnia kyun hota hai?',
      a: 'Bacchon mein insomnia ke kuch specific causes hote hain – screen time (sabse common), anxiety about school ya exams, irregular schedule (weekends mein late sona), ya koi emotional stress. Chhote bacchon mein "sleep regression" bhi hoti hai – jo normal developmental phase hai. Agar bacche ko 2+ hafte se regular neend ki problem hai, ya din mein hyperactive ya bahut irritable hai – paediatrician se milo. Bacchon mein sleeping pills ka option bahut limited hai – homeopathy ek safe complementary consideration ho sakta hai.',
    },
    {
      _key: 'faq8',
      faqType: 'general',
      q: 'Pregnancy mein insomnia normal hai kya?',
      a: 'Haan – pregnancy mein insomnia bahut common hai, specially teen mahine mein. Hormonal changes (progesterone, estrogen), frequent urination, back pain, aur anxiety – ye sab neend affect karte hain. Lekin ye "normal hai, ignore karo" nahi kehna chahiye. Pregnancy mein insomnia ke saath agar sar mein tez dard, haath-paon soojana, ya bahut zyada thakaan ho – ye preeclampsia ka sign ho sakta hai aur turant OB-GYN se milna zaroori hai. Sleeping pills pregnancy mein safe nahi – gentle sleep hygiene steps aur doctor ki guidance pehle leni chahiye.',
    },
    {
      _key: 'faq9',
      faqType: 'general',
      q: 'Chai peene ke baad neend nahi aati – kya ye insomnia hai?',
      a: 'Agar sirf shaam wali chai ke baad neend late aati hai – ye insomnia nahi, ye caffeine ka normal effect hai. Chai mein caffeine hota hai jo 6-8 ghante body mein rehta hai. Shaam 4-5 baje ke baad chai chhod do – ek hafte mein fark dikhega. Lekin agar chai chhod dene ke baad bhi neend nahi aa rahi, ya neend ki problem kai hafte se hai – tab insomnia evaluate karna chahiye. India mein "raat ko neend nahi aati" ka ek bada reason hai shaam ki chai – ise change karna simplest aur fastest fix hai.',
    },
    {
      _key: 'faq10',
      faqType: 'general',
      q: 'Insomnia baar baar kyun aata hai – theek hone ke baad phir ho jaata hai?',
      a: 'Insomnia baar baar isliye aata hai kyunki aksar sirf symptom manage hota hai – root cause nahi. Sleeping pills dene se neend aa jaati hai, lekin jab band karo to wahi pattern wapas. Baar baar aane wali insomnia ka matlab hai koi deeper trigger hai – ongoing anxiety, stress, ya hormonal imbalance. Ek stress event ho to neend jaati hai, stress khatam hone ke baad bhi "brain pattern" reh jaata hai – isliye baar baar hota hai. Is case mein sleep hygiene + trigger ka treatment dono zaroori hain.',
    },
    {
      _key: 'faq11',
      faqType: 'homeopathy',
      q: 'Kya insomnia hamesha ke liye theek ho sakta hai?',
      a: '"Hamesha ke liye theek" ka vaada koi bhi system honestly nahi kar sakta – aur koi kare to shak karo. Jo realistic hai: sahi treatment se insomnia ki frequency itni kam ho sakti hai ki life practically normal ho jaati hai. Lifestyle insomnia mein – schedule, screen, caffeine fix karo – zyada baar permanently theek ho jaata hai. Anxiety ya depression linked insomnia mein – underlying condition treat ho to neend bhi better hoti hai. CBT-I (Cognitive Behavioral Therapy for Insomnia) research mein sabse effective long-term treatment hai. Homeopathy chronic cases mein complementary support deta hai – results individual hote hain.',
    },
    {
      _key: 'faq12',
      faqType: 'general',
      q: 'Insomnia se kya nuksaan hota hai – sirf neend ki kami hai?',
      a: 'Sirf thakaan nahi – chronic insomnia ke effects kai jagah dikhte hain: concentration aur memory weak hona, mood swings aur irritability, immune system kamzor hona – zyada baar beemaar padna, long-term mein blood pressure aur heart risk badhna, anxiety aur depression ka risk increase hona. Isliye insomnia ko "sirf thoda so lena" wali cheez mat samjho. Teen hafte se zyada problem hai to doctor se milna – ye zaruri hai.',
    },
  ],

  relatedSymptoms: [
    {
      _key: 'rs1',
      title: 'Anxiety (Ghabrahat)',
      hindiName: 'Chinta / Ghabrahat',
      slug: 'anxiety',
    },
    {
      _key: 'rs2',
      title: 'Fatigue (Thakaan)',
      hindiName: 'Kamzori / Thakaan',
      slug: 'fatigue',
    },
    {
      _key: 'rs3',
      title: 'Headache (Sar Dard)',
      hindiName: 'Sar Dard',
      slug: 'headache',
    },
    {
      _key: 'rs4',
      title: 'Restlessness (Bechaini)',
      hindiName: 'Bechaini',
      slug: 'restlessness',
    },
  ],

  sources: [
    {
      _key: 'src1',
      name: 'WHO – Sleep Disorders: Raising Awareness of Sleep Health | 2024',
    },
    {
      _key: 'src2',
      name: 'Mayo Clinic – Insomnia: Symptoms & Causes | 2024',
    },
    {
      _key: 'src3',
      name: 'NCBI / NIH – Behavioral and Psychological Treatments for Chronic Insomnia Disorder in Adults | 2021',
    },
    {
      _key: 'src4',
      name: 'NHS UK – Insomnia: Causes, Symptoms and Treatment | 2023',
    },
  ],
}

async function seed() {
  console.log('🌱 Seeding Insomnia symptom page...')
  await client.createOrReplace(symptom)
  console.log('✅ Symptom seeded — homeopedia.in/symptoms/insomnia')
}

seed().catch(console.error)
