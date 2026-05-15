'use client'
import { useState } from 'react'
import { WA_BASE } from '@/lib/constants'
import Link from 'next/link'
import SL from '@/components/SL'

const ALL_DISEASES = [
  // Skin
  { slug: 'psoriasis',                  title: 'Psoriasis',               hindi: 'चम्बल (सोरायसिस)',         cat: 'Skin',        min: 12, hot: true,  h: 'chambal chanbmal' },
  { slug: 'scalp-psoriasis',           title: 'Scalp Psoriasis',         hindi: 'सर की चम्बल / बालों वाली चम्बल', cat: 'Skin',   min: 10, hot: true,  h: 'sar ki chambal baalon wali chambal sir pe scale khujli silver patches khopdi homeopathy' },
  { slug: 'guttate-psoriasis',        title: 'Guttate Psoriasis',       hindi: 'बिंदु चम्बल / छोटे दाने वाली चम्बल', cat: 'Skin', min: 10, hot: true,  h: 'guttate psoriasis chhote daane chambal strep throat ke baad daane young adults homeopathy' },
  { slug: 'atopic-dermatitis',        title: 'Atopic Dermatitis',       hindi: 'खुजली-सूजन रोग / एटॉपिक एक्जिमा', cat: 'Skin',  min: 10, hot: true,  h: 'atopic dermatitis eczema khujli dry skin bacchon ki skin bimari immune system skin allergy' },
  { slug: 'eczema',                     title: 'Eczema',                  hindi: 'एक्जिमा',                  cat: 'Skin',        min: 5,              h: 'khujli rash' },
  { slug: 'vitiligo',                   title: 'Vitiligo',                hindi: 'सफेद दाग',                 cat: 'Skin',        min: 6,              h: 'safed daag' },
  { slug: 'acne',                       title: 'Acne',                    hindi: 'मुहांसे',                  cat: 'Skin',        min: 4,              h: 'muhanse pimple' },
  { slug: 'urticaria',                  title: 'Urticaria',               hindi: 'पित्ती',                   cat: 'Skin',        min: 4,              h: 'pitti' },
  { slug: 'lichen',                     title: 'Lichen Planus',           hindi: 'लाइकेन',                  cat: 'Skin',        min: 9,              h: 'laichen' },
  { slug: 'acanthosis-nigricans',       title: 'Acanthosis Nigricans',    hindi: 'काली गठीली त्वचा',         cat: 'Skin',        min: 8,              h: 'kaali gathili skin gardan kaali kala pan insulin resistance' },
  { slug: 'ringworm',                   title: 'Ringworm (Daad)',          hindi: 'दाद / दाद-खाज / Tinea',    cat: 'Skin',        min: 8,  hot: true,  h: 'daad daad khaj tinea fungal infection athlete foot jock itch scalp' },
  { slug: 'wart',                       title: 'Wart (Masar)',             hindi: 'मस्सा / मसा / गड्ढा मसा',  cat: 'Skin',        min: 7,  hot: true,  h: 'masar masa wart hatane ka upay haath pair chehre pe wart removal bina surgery' },
  { slug: 'molluscum-contagiosum',      title: 'Molluscum Contagiosum',   hindi: 'चेचक जैसी फुंसियां / वायरल दाने', cat: 'Skin', min: 8, hot: true, h: 'molluscum contagiosum ke daane bacchon mein viral skin bumps chechak jaisi phunsiyan homeopathy' },
  { slug: 'chickenpox',               title: 'Chickenpox (Varicella)',   hindi: 'चेचक / माता / छोटी माता',          cat: 'Skin', min: 8, hot: true, h: 'chickenpox chechak maata choti mata varicella daag nishan kaise hataye scar prevention homeopathy' },
  { slug: 'nail-fungus',               title: 'Nail Fungus (Onychomycosis)', hindi: 'नाखून का फंगस',            cat: 'Skin',        min: 9,  hot: true,  h: 'nakhoon ka fungas peela nakhoon mota nakhoon nail fungus onychomycosis paon ke nakhoon' },
  { slug: 'melasma',                   title: 'Melasma / Pigmentation',      hindi: 'झाइयां / चेहरे का दाग',   cat: 'Skin',        min: 10, hot: true,  h: 'melasma jhaiyan chehre ka daag pigmentation dark spots facial pigmentation homeopathy' },
  { slug: 'post-covid-syndrome',       title: 'Post-COVID Syndrome / Long COVID', hindi: 'पोस्ट-कोरोना थकान / Long COVID', cat: 'Respiratory', min: 10, hot: true,  h: 'post covid thakaan long covid brain fog covid ke baad kamzori corona ke baad ilaaj' },
  { slug: 'breast-fibroadenoma',       title: 'Breast Fibroadenoma',             hindi: 'छाती की गांठ / स्तन गांठ',        cat: "Women's",     min: 10, hot: true,  h: 'chhaati ki ganth breast lump fibroadenoma cancer nahi surgery bina ilaaj young girls' },
  { slug: 'postpartum-depression',     title: 'Postpartum Depression',           hindi: 'प्रसव के बाद का अवसाद',           cat: "Women's",     min: 10, hot: true,  h: 'delivery ke baad depression prasav ke baad udaasi baby blues nai maa ka mansik dard PPD homeopathy' },
  { slug: 'allergic-rhinitis',         title: 'Allergic Rhinitis',               hindi: 'नाक की एलर्जी / प्रतिरोधी नज़ला',  cat: 'Respiratory', min: 9,  hot: true,  h: 'naak ki allergy dust allergy chhink bar bar naak behna pollen allergy homeopathy' },
  // ENT
  { slug: 'recurrent-ear-infection',  title: 'Recurrent Ear Infection',         hindi: 'बार बार कान का दर्द / कान पकना',   cat: 'ENT',         min: 9,  hot: true,  h: 'kaan dard baar baar kaan ka infection kaan bahna kaan pakna ear pain homeopathy bacchon mein kaan' },
  { slug: 'tinnitus',                 title: 'Tinnitus',                        hindi: 'कान में सीटी / भनभनाहट',           cat: 'ENT',         min: 9,  hot: true,  h: 'kaan mein seeti bhanbhanahat kaan mein awaaz tinnitus ka ilaaj homeopathy' },
  { slug: 'chronic-otitis-media',    title: 'Chronic Otitis Media',            hindi: 'कान का पुराना दर्द / कान बाहर',    cat: 'ENT',         min: 9,  hot: true,  h: 'kaan bahar hona chronic otitis media kaan se pani aana kaan ka purana infection kaan ka parda ched glue ear' },
  { slug: 'vocal-cord-nodule',       title: 'Vocal Cord Nodule',               hindi: 'आवाज़ की गांठ / गले की गांठ',       cat: 'ENT',         min: 9,  hot: true,  h: 'vocal cord nodule awaaz baithi gale ki gaanth bina operation singer teacher gale mein gaanth homeopathy' },
  { slug: 'delayed-milestones',        title: 'Delayed Milestones / GDD',        hindi: 'विकास में देरी / बच्चे का धीरे बढ़ना', cat: 'Neurological', min: 12, hot: true, h: 'bachche ka vikas deri late walking late talking speech delay motor delay GDD homeopathy' },
  // Joints
  { slug: 'sciatica',                   title: 'Sciatica',                hindi: 'सायटिका',                 cat: 'Joints',      min: 5,  hot: true,  h: 'kamar pair dard' },
  { slug: 'disc-bulge',                 title: 'Disc Bulge',              hindi: 'डिस्क खिसकना',            cat: 'Joints',      min: 7,              h: 'disc slip' },
  { slug: 'back-pain',                  title: 'Back Pain',               hindi: 'कमर दर्द',                cat: 'Joints',      min: 5,              h: 'kamar dard' },
  { slug: 'arthritis',                   title: 'Arthritis',               hindi: 'गठिया / वात रोग',          cat: 'Joints',      min: 8,  hot: true,  h: 'gathiya jodon ka dard vaat' },
  { slug: 'psoriatic-arthritis',        title: 'Psoriatic Arthritis',     hindi: 'चम्बल वाला गठिया',        cat: 'Joints',      min: 10,             h: 'chambal gathiya' },
  { slug: 'rheumatoid-arthritis',       title: 'Rheumatoid Arthritis',    hindi: 'रूमेटाइड आर्थराइटिस',    cat: 'Joints',      min: 7,  hot: true,  h: 'gathiya RA joints' },
  { slug: 'gout',                       title: 'Gout',                    hindi: 'गाउट',                    cat: 'Joints',      min: 5,              h: 'uric acid gathiya' },
  { slug: 'cervical-spondylosis',       title: 'Cervical Spondylosis',    hindi: 'सर्वाइकल / गर्दन दर्द',  cat: 'Joints',      min: 6,              h: 'gardan dard cervical' },
  { slug: 'ankylosing-spondylitis',     title: 'Ankylosing Spondylitis',  hindi: 'रीढ़ की सूजन',            cat: 'Joints',      min: 8,              h: 'ridh ki haddi dard' },
  { slug: 'frozen-shoulder',            title: 'Frozen Shoulder',         hindi: 'जमा हुआ कंधा',           cat: 'Joints',      min: 7,              h: 'kandha dard shoulder' },
  { slug: 'plantar-fasciitis',          title: 'Plantar Fasciitis',       hindi: 'एड़ी का दर्द',             cat: 'Joints',      min: 7,              h: 'edi ka dard paon tale heel pain' },
  { slug: 'tennis-elbow',               title: 'Tennis Elbow',            hindi: 'कोहनी का दर्द',            cat: 'Joints',      min: 9,  hot: true,  h: 'kohni ka dard tennis elbow lateral epicondylitis IT professional computer use homeopathy' },
  { slug: 'osteoarthritis',            title: 'Osteoarthritis',          hindi: 'घुटने का दर्द / जोड़ों की घिसाव', cat: 'Joints', min: 9, hot: true, h: 'ghutne ka dard jodon ki ghisaw OA knee pain cartilage' },
  { slug: 'juvenile-arthritis',        title: 'Juvenile Arthritis (JIA)', hindi: 'बच्चों का गठिया',             cat: 'Joints',      min: 10,             h: 'bachpan ka gathiya JIA juvenile arthritis bachchon mein joint dard subah akdhan limping' },
  // Digestive
  { slug: 'acidity',                    title: 'Acidity / GERD',          hindi: 'तेज़ाब / सीने की जलन',    cat: 'Digestive',   min: 6,  hot: true,  h: 'seene ki jalan khatta dakaar tezaab acid reflux' },
  { slug: 'ibs',                        title: 'IBS',                     hindi: 'आईबीएस',                  cat: 'Digestive',   min: 6,  hot: true,  h: 'pet dard loose motion' },
  { slug: 'piles',                      title: 'Piles',                   hindi: 'बवासीर',                  cat: 'Digestive',   min: 5,              h: 'bavasir bawasir' },
  { slug: 'fissure',                    title: 'Anal Fissure',            hindi: 'फिशर',                    cat: 'Digestive',   min: 4,              h: 'fishure' },
  { slug: 'anal-fistula',              title: 'Anal Fistula',            hindi: 'भगंदर / नली रोग',           cat: 'Digestive',   min: 10, hot: true,  h: 'bhagandhar bina operation fistula ka ilaaj guda ki nali homeopathy surgery se bachein' },
  { slug: 'constipation',               title: 'Constipation (Kabz)',     hindi: 'कब्ज / क़ब्ज़',            cat: 'Digestive',   min: 8,  hot: true,  h: 'kabz qabz pet saaf nahi hona roz subah toilet nahi aata laxative' },
  { slug: 'ulcerative-colitis',         title: 'Ulcerative Colitis',      hindi: 'अल्सरेटिव कोलाइटिस',     cat: 'Digestive',   min: 6,              h: 'colitis aant' },
  { slug: 'fatty-liver',               title: 'Fatty Liver / NAFLD',     hindi: 'जिगर में चर्बी',           cat: 'Digestive',   min: 9,  hot: true,  h: 'fatty liver jigar charbi NAFLD SGPT SGOT grade 1 2' },
  { slug: 'mouth-ulcer',               title: 'Mouth Ulcer (Munh ke Chhale)', hindi: 'मुँह के छाले',          cat: 'Digestive',   min: 9,  hot: true,  h: 'munh ke chhale ka ilaaj baar baar munh ke chhale recurrent aphthous ulcer homeopathy' },
  { slug: 'gastritis',                 title: 'Gastritis',               hindi: 'पेट की सूजन / गैस्ट्राइटिस', cat: 'Digestive',   min: 9,  hot: true,  h: 'gastritis pet ki sujan pet dard ka ilaaj H pylori pet mein jalan homeopathy' },
  { slug: 'gallstones',               title: 'Gallstones (Pitt Pathri)', hindi: 'पित्ताशय की पथरी',           cat: 'Digestive',   min: 10, hot: true,  h: 'pitt ki pathri pittashay pathri gall attack surgery alternative gallbladder stone' },
  { slug: 'gerd',                    title: 'GERD / Acid Reflux',       hindi: 'अम्लपित्त / सीने की जलन',    cat: 'Digestive',   min: 9,  hot: true,  h: 'seene ki jalan acid reflux amlapitta gerd pet ki gas khatti dakar homeopathy' },
  { slug: 'dyspepsia',              title: 'Dyspepsia',                hindi: 'बदहज़मी / अपच / अजीर्ण',      cat: 'Digestive',   min: 9,  hot: true,  h: 'badhazmi apach khana hazm nahi hota pet mein gas bloating jalan homeopathy' },
  { slug: 'worm-infestation',      title: 'Worms in Children',        hindi: 'Worms in Children',              cat: 'Digestive',   min: 9,  hot: true,  h: 'worms in children pinworm roundworm hookworm deworming bacchon homeopathy cina' },
  { slug: 'lactose-intolerance',   title: 'Lactose Intolerance',      hindi: 'दूध न पचना / डेयरी से परेशानी',  cat: 'Digestive',   min: 9,  hot: true,  h: 'lactose intolerance doodh na pachna doodh se gas pet dard dahi paneer kha sakte hain homeopathy' },
  // Mental
  { slug: 'migraine',                   title: 'Migraine',                hindi: 'माइग्रेन',                cat: 'Mental',      min: 5,  hot: true,  h: 'sar dard headache' },
  { slug: 'anxiety',                    title: 'Anxiety',                 hindi: 'चिंता',                   cat: 'Mental',      min: 5,              h: 'chinta tension ghabrahat' },
  { slug: 'depression',                 title: 'Depression',              hindi: 'अवसाद',                   cat: 'Mental',      min: 6,              h: 'udaasi' },
  { slug: 'insomnia',                   title: 'Insomnia',                hindi: 'अनिद्रा',                 cat: 'Mental',      min: 4,              h: 'neend nahi aati' },
  { slug: 'obsessive-compulsive-disorder', title: 'OCD',                  hindi: 'ओसीडी',                  cat: 'Mental',      min: 7,              h: 'obsessive compulsive' },
  { slug: 'chronic-fatigue-syndrome',     title: 'Chronic Fatigue Syndrome (CFS)', hindi: 'Chronic Thakan Rog / हमेशा थकान', cat: 'Mental', min: 10, hot: true, h: 'hamesha thakaan rehna CFS chronic fatigue post covid thakaan brain fog PEM kaam ke baad thakaan' },
  { slug: 'ptsd',                          title: 'PTSD',                           hindi: 'मानसिक आघात विकार / Post-Traumatic', cat: 'Mental', min: 10, hot: true, h: 'ptsd trauma ke baad mansik takleef flashback nightmare panic attack mansik aaghat homeopathy' },
  // Women's Health
  { slug: 'pcod',                       title: 'PCOD/PCOS',               hindi: 'पीसीओडी',                 cat: "Women's",     min: 8,  hot: true,  h: 'periods irregular mahavari' },
  { slug: 'leucorrhoea',                title: 'Leucorrhoea',             hindi: 'श्वेत प्रदर',             cat: "Women's",     min: 4,              h: 'safed pani leucorrhea' },
  { slug: 'endometriosis',              title: 'Endometriosis',           hindi: 'एंडोमेट्रियोसिस',         cat: "Women's",     min: 7,              h: 'periods dard uterus' },
  { slug: 'uterine-fibroid',            title: 'Uterine Fibroid',         hindi: 'बच्चेदानी की गांठ / रसौली', cat: "Women's",  min: 9,  hot: true,  h: 'bacchedani ki ganth rasoli fibroid bina operation' },
  { slug: 'menopause',                  title: 'Menopause',               hindi: 'रजोवृत्ति / महावारी बंद',   cat: "Women's",  min: 10, hot: true,  h: 'rajovritti mahavari band hot flashes mood swings menopause ke upay 45 ke baad' },
  { slug: 'ovarian-cyst',               title: 'Ovarian Cyst',            hindi: 'अंडाशय की गांठ / सिस्ट',    cat: "Women's",  min: 10, hot: true,  h: 'andashay ki ganthi ovarian cyst ka ilaj bina surgery ovarian cyst homeopathy pcod aur cyst mein fark' },
  { slug: 'dysmenorrhoea',            title: 'Dysmenorrhoea',           hindi: 'माहवारी का दर्द',             cat: "Women's",     min: 8,  hot: true,  h: 'mahavari ka dard periods mein dard dysmenorrhea masik dard period pain' },
  // Hair
  { slug: 'hairfall',                   title: 'Hair Fall',               hindi: 'बाल झड़ना',               cat: 'Hair',        min: 8,              h: 'baal jhadna' },
  { slug: 'alopecia',                   title: 'Alopecia Areata',         hindi: 'गंजापन',                  cat: 'Hair',        min: 6,  hot: true,  h: 'ganjapan baal' },
  { slug: 'dandruff',                   title: 'Dandruff',                hindi: 'रूसी',                    cat: 'Hair',        min: 3,              h: 'rusi' },
  // Respiratory
  { slug: 'asthma',                     title: 'Asthma',                  hindi: 'दमा',                     cat: 'Respiratory', min: 6,              h: 'dama saans' },
  { slug: 'allergy',                    title: 'Allergic Rhinitis',       hindi: 'एलर्जी',                  cat: 'Respiratory', min: 4,              h: 'naak allergy' },
  { slug: 'sinusitis',                  title: 'Sinusitis',               hindi: 'साइनसाइटिस',              cat: 'Respiratory', min: 5,              h: 'sinus naak band' },
  { slug: 'nasal-polyp',               title: 'Nasal Polyp',             hindi: 'नाक की रसौली / गांठ',    cat: 'Respiratory', min: 9, hot: true,   h: 'naak ki rasoli naak ki gaanth naak mein gaanth surgery ke bina polyp' },
  { slug: 'recurrent-cold',             title: 'Recurrent Cold / Weak Immunity', hindi: 'बार बार सर्दी-जुकाम / Weak Immunity', cat: 'Respiratory', min: 9, hot: true, h: 'baar baar sardi zukam ka ilaaj immunity boost homeopathy bacchon mein baar baar sardi weak immunity treatment' },
  { slug: 'bronchitis',                 title: 'Bronchitis',              hindi: 'श्वास नली की सूजन / खांसी की बीमारी', cat: 'Respiratory', min: 9, hot: true, h: 'bronchitis ka ilaj khansi balgam chest tightness shwas nali ki sujan homeopathy' },
  // Endocrine
  { slug: 'thyroid',                    title: 'Hypothyroidism',          hindi: 'थायरॉइड की कमी',          cat: 'Endocrine',   min: 10, hot: true,  h: 'thyroid' },
  { slug: 'hyperthyroidism',            title: 'Hyperthyroidism',         hindi: 'थायरॉइड का बढ़ना',        cat: 'Endocrine',   min: 9,              h: 'thyroid badhna' },
  { slug: 'hashimoto-thyroiditis',      title: 'Hashimoto Thyroiditis',   hindi: 'हाशिमोटो थायरॉइड',       cat: 'Endocrine',   min: 7,              h: 'hashimoto thyroid' },
  { slug: 'prediabetes',               title: 'Prediabetes / Insulin Resistance', hindi: 'प्रीशुगर / इंसुलिन रेज़िस्टेंस', cat: 'Endocrine', min: 10, hot: true, h: 'prediabetes insulin resistance blood sugar control preshugur HbA1c borderline diabetes' },
  // Autoimmune
  { slug: 'sjogrens-syndrome',          title: "Sjogren's Syndrome",      hindi: 'स्जोग्रेन सिंड्रोम',     cat: 'Autoimmune',  min: 8,              h: 'dry eyes mouth' },
  // Children's Health
  { slug: 'adhd',                         title: 'ADHD',                    hindi: 'धयान की कमी / Hyperactivity', cat: "Children's", min: 10, hot: true, h: 'ADHD ka ilaj bacche ka mann padhai mein nahi lagta hyperactive child dhyan ki kami homeopathy' },
  { slug: 'autism',                      title: 'Autism (ASD)',            hindi: 'ऑटिज्म',                  cat: "Children's",  min: 10, hot: true,  h: 'autism asd bachcha bolna nahi' },
  { slug: 'adenoids',                   title: 'Adenoids',                hindi: 'नाक की गांठ',            cat: "Children's",  min: 7,  hot: true,  h: 'naak ki gaanthi bacche' },
  { slug: 'tonsillitis',                title: 'Tonsillitis',             hindi: 'टॉन्सिल की सूजन',        cat: "Children's",  min: 6,  hot: true,  h: 'tonsil gala dard' },
  { slug: 'bedwetting',                 title: 'Bedwetting',              hindi: 'बिस्तर गीला करना',       cat: "Children's",  min: 6,              h: 'bistar geela bacche' },
  { slug: 'teething-trouble',          title: 'Teething Trouble',        hindi: 'दाँत निकलने की तकलीफ',    cat: "Children's",  min: 7,  hot: true,  h: 'daant nikalna daant aana bachche ke daant dard drooling chamomilla homeopathy shishu' },
  // Eye
  { slug: 'stye',                       title: 'Stye (Guheri)',           hindi: 'गुहेरी / आँखों की फुंसी',    cat: 'Eye',         min: 7,  hot: true,  h: 'guheri aankh ki phunsi stye aankhon mein phunsi palak sujan billi aankhiya warm compress' },
  { slug: 'dry-eye-syndrome',           title: 'Dry Eye Syndrome',        hindi: 'आँखों की जलन / सूखी आँखें',  cat: 'Eye',         min: 8,  hot: true,  h: 'dry eye aankhon mein jalan sukhapan screen se aankh jalan AC aankhon mein sukhapan ka ilaaj' },
  // Circulatory
  { slug: 'varicose-veins',            title: 'Varicose Veins',          hindi: 'नसों की सूजन',            cat: 'Circulatory', min: 7,              h: 'naso ki sujan phuli hui naasein paon dard' },
  // Men's Health
  { slug: 'male-infertility',            title: 'Male Infertility',        hindi: 'पुरुष निःशक्तता / बीज दोष', cat: "Men's",      min: 10, hot: true,  h: 'male infertility purush nishfalta sperm count badhana shukranu beej dosh mardana kamzori homeopathy' },
  { slug: 'erectile-dysfunction',        title: 'Erectile Dysfunction',    hindi: 'नपुंसकता / मर्दों की कमज़ोरी', cat: "Men's",   min: 10, hot: true,  h: 'napunsakta mardana kamzori ED erection nahi aati ling mein tanav nahi mardon ki problem' },
  // Urinary
  { slug: 'kidney-stone',             title: 'Kidney Stone (Pathri)',   hindi: 'गुर्दे की पथरी',           cat: 'Urinary',     min: 9,  hot: true,  h: 'pathri gurde ki pathri stone NAFLD uric acid calcium' },
  { slug: 'recurrent-uti',            title: 'Recurrent UTI',           hindi: 'बार बार मूत्र संक्रमण',      cat: 'Urinary',     min: 8,  hot: true,  h: 'baar baar peshab infection UTI burning urine mahila urinary tract infection' },
  { slug: 'bph',                      title: 'BPH (Prostate)',          hindi: 'प्रोस्टेट का बढ़ना',         cat: "Men's",       min: 10, hot: true,  h: 'prostate badhna BPH benighn prostatic hyperplasia peshab ki takleef buzurg mard' },
  // Neurological
  { slug: 'bells-palsy',              title: "Bell's Palsy",            hindi: 'चेहरे का लकवा',             cat: 'Neurological', min: 10,            h: 'chehre ka lakwa face paralysis ek taraf chehra tedha' },
  { slug: 'carpal-tunnel-syndrome',   title: 'Carpal Tunnel Syndrome',  hindi: 'हाथ सुन्नपन / CTS',         cat: 'Neurological', min: 9,  hot: true, h: 'haath sunnapan jhanjhanahat CTS karpal tunal computer use office worker' },
  { slug: 'trigeminal-neuralgia',     title: 'Trigeminal Neuralgia',    hindi: 'चेहरे में बिजली का दर्द',    cat: 'Neurological', min: 10, hot: true, h: 'chehra bijli dard face pain TN tic douloureux nerve pain jaw teeth pain' },
  { slug: 'vertigo',                  title: "Vertigo / Meniere's",     hindi: 'चक्कर आना / सर घूमना',      cat: 'Neurological', min: 9,  hot: true, h: 'chakkar aana sar ghoomna vertigo menieres BPPV vestibular' },
]

const CATS = ['All', 'Skin', 'Joints', 'Digestive', 'Mental', "Women's", 'Hair', 'Respiratory', 'Endocrine', 'Autoimmune', "Children's", 'Circulatory', 'Urinary', 'Neurological', "Men's", 'Eye', 'ENT']

const CAT_COLORS: Record<string, string> = {
  Skin: '#e67c52', Joints: '#5b8dd9', Digestive: '#5aaa6a',
  Mental: '#9b6ec8', "Women's": '#e0629a', Hair: '#c4993e',
  Respiratory: '#4bafc7', Endocrine: '#d47c3e', Autoimmune: '#6db89a',
  "Children's": '#e8a84e', Circulatory: '#d45b5b', Urinary: '#5b9dd9',
  Neurological: '#7c7cb8', "Men's": '#5b8a6d', Eye: '#7aad8a', ENT: '#b07a5e',
}

export default function DiseasesPage() {
  const [cat, setCat] = useState('All')
  const [q, setQ] = useState('')
  const qL = q.toLowerCase()
  const shown = ALL_DISEASES.filter(d =>
    (cat === 'All' || d.cat === cat) &&
    (q === '' ||
      d.title.toLowerCase().includes(qL) ||
      d.hindi.includes(q) ||
      d.h.toLowerCase().includes(qL) ||
      d.slug.replace(/-/g, ' ').includes(qL))
  )
  const hotCount = ALL_DISEASES.filter(d => d.hot).length

  return (
    <div className="page-in" style={{ paddingTop: 66, background: 'var(--bg)', minHeight: '100vh' }}>
      <SL c="All Diseases" />

      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg,var(--bg) 60%,var(--bg2) 100%)', borderBottom: '1px solid var(--border)', padding: '52px clamp(16px,4vw,32px) 40px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -60, right: -60, width: 320, height: 320, borderRadius: '50%', background: 'radial-gradient(circle,rgba(63,107,77,.08) 0%,transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1160, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--warm)', marginBottom: 14 }}>
            <div style={{ width: 14, height: 1, background: 'var(--warm)', opacity: 0.6 }} />
            Homeopathic Disease Library
            <div style={{ width: 14, height: 1, background: 'var(--warm)', opacity: 0.6 }} />
          </div>
          <h1 style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 'clamp(28px,4vw,52px)', fontWeight: 600, letterSpacing: '-0.025em', lineHeight: 1.05, color: 'var(--ink)', marginBottom: 10 }}>
            Aapki disease ka <em className="sage-shimmer" style={{ fontStyle: 'italic' }}>pura guide.</em>
          </h1>
          <p style={{ fontSize: 15, color: 'var(--ink3)', marginBottom: 28, fontWeight: 300, lineHeight: 1.7, maxWidth: 520, margin: '0 auto 28px' }}>
            Har bimari ka Hinglish mein poora guide — causes, symptoms, homeopathic medicines, aur diet chart.
          </p>
          <div style={{ maxWidth: 480, margin: '0 auto' }}>
            <input
              value={q}
              onChange={e => setQ(e.target.value)}
              placeholder="Koi bhi disease dhundo — Psoriasis, Thyroid, IBS..."
              style={{ width: '100%', padding: '14px 20px', background: 'var(--card)', border: '1px solid var(--border2)', borderRadius: 100, color: 'var(--ink)', fontSize: 14, boxShadow: 'var(--sh-sm)', outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box' }}
              onFocus={e => { e.target.style.borderColor = 'var(--sage)'; e.target.style.boxShadow = '0 0 0 3px rgba(63,107,77,.1)' }}
              onBlur={e => { e.target.style.borderColor = 'var(--border2)'; e.target.style.boxShadow = 'var(--sh-sm)' }}
            />
          </div>
          {/* Trust pills */}
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginTop: 20 }}>
            {[
              ['✓ Doctor Reviewed', 'var(--sage-bg)', 'var(--sage-dk)', 'rgba(63,107,77,.2)'],
              ['🔥 Popular Guides', 'rgba(192,132,56,.1)', 'var(--warm)', 'rgba(192,132,56,.25)'],
              ['🌿 Root Cause Focus', 'var(--bg2)', 'var(--ink3)', 'var(--border)'],
              ['🇮🇳 Hinglish Mein', 'var(--bg2)', 'var(--ink3)', 'var(--border)'],
            ].map(([l, bg, c, b]) => (
              <span key={l as string} style={{ fontSize: 11, fontWeight: 600, padding: '5px 14px', borderRadius: 100, background: bg as string, color: c as string, border: `1px solid ${b}` }}>{l}</span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '32px clamp(16px,4vw,32px) 80px' }}>

        {/* Info banner */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '16px 22px', background: 'var(--sage-bg)', border: '1px solid rgba(63,107,77,.2)', borderRadius: 12, marginBottom: 28, flexWrap: 'wrap' }}>
          <div style={{ fontSize: 26 }}>🌿</div>
          <div>
            <div style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 15, fontWeight: 700, color: 'var(--ink)', marginBottom: 2 }}>Treat the root. Not the symptoms.</div>
            <div style={{ fontSize: 14, color: 'var(--ink3)', fontWeight: 400 }}>Homeopathy mein constitution ke hisaab se treatment hoti hai. Permanent relief, zero side effects.</div>
          </div>
          <a href={WA_BASE} target="_blank" rel="noopener noreferrer" style={{ marginLeft: 'auto', flexShrink: 0, padding: '8px 16px', background: 'var(--sage)', color: '#fff', borderRadius: 99, fontSize: 12, fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap' }}>💬 Consult Now</a>
        </div>

        {/* Category filter */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
          {CATS.map(c => (
            <button key={c} onClick={() => setCat(c)}
              style={{ padding: '7px 16px', borderRadius: 100, fontSize: 13, cursor: 'pointer', border: `1px solid ${cat === c ? 'var(--sage)' : 'var(--border2)'}`, background: cat === c ? 'var(--sage-bg)' : 'var(--card)', color: cat === c ? 'var(--sage-dk)' : 'var(--ink3)', fontWeight: cat === c ? 700 : 400, transition: 'all .2s' }}>
              {c}
            </button>
          ))}
        </div>

        <div style={{ fontSize: 12, color: 'var(--ink4)', marginBottom: 20 }}>{shown.length} conditions {cat !== 'All' ? `in ${cat}` : 'total'}</div>

        {/* Grid */}
        {shown.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(210px,1fr))', gap: 14 }}>
            {shown.map(d => {
              const catColor = CAT_COLORS[d.cat] || 'var(--sage-dk)'
              return (
                <Link key={d.slug} href={`/diseases/${d.slug}`} style={{ textDecoration: 'none' }}>
                  <div className="hov" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--r)', padding: '20px', cursor: 'pointer', position: 'relative', height: '100%', boxSizing: 'border-box', overflow: 'hidden' }}>
                    {/* Colored top bar */}
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${catColor},${catColor}99)`, borderRadius: '14px 14px 0 0' }} />
                    {d.hot && <span style={{ position: 'absolute', top: 14, right: 12, fontSize: 9, padding: '2px 7px', borderRadius: 100, background: 'rgba(192,132,56,.12)', color: 'var(--warm)', border: '1px solid rgba(192,132,56,.3)', fontWeight: 700, letterSpacing: 0.5 }}>POPULAR</span>}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10, marginTop: 4 }}>
                      <span style={{ fontSize: 10, fontWeight: 600, padding: '2px 9px', borderRadius: 100, background: `${catColor}18`, color: catColor, border: `1px solid ${catColor}40` }}>{d.cat}</span>
                      <span style={{ fontSize: 10, color: 'var(--ink4)' }}>· {d.min} min</span>
                    </div>
                    <div style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 16, fontWeight: 600, color: 'var(--ink)', marginBottom: 4, lineHeight: 1.3, paddingRight: d.hot ? 52 : 0 }}>{d.title}</div>
                    <div style={{ fontSize: 12, color: 'var(--warm)', fontStyle: 'italic', fontFamily: 'var(--font-display,Georgia,serif)', marginBottom: 12, fontWeight: 500 }}>{d.hindi}</div>
                    <div style={{ fontSize: 12, color: 'var(--sage)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
                      Read guide <span style={{ fontSize: 14 }}>→</span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: 48 }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>🔍</div>
            <p style={{ color: 'var(--ink3)', fontWeight: 300 }}>"{q}" ke liye koi result nahi mila. Hindi ya English mein try karein.</p>
          </div>
        )}
      </div>

      <a href={WA_BASE} target="_blank" rel="noopener noreferrer" className="fab">📲 Consult Now</a>
    </div>
  )
}
