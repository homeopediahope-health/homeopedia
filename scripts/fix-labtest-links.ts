import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: 'production',
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
})

// Helper to create keys
const k = (s: string) => s.replace(/[^a-z0-9]/gi, '-').toLowerCase().slice(0, 20)

const updates: Record<string, {
  linkedDiseases: { _key: string; diseaseName: string; diseaseSlug: string; isAvailable: boolean }[]
  linkedSymptoms: { _key: string; symptomName: string; symptomSlug: string }[]
  linkedDiets:    { _key: string; dietName: string; dietSlug: string }[]
}> = {

  'labtest-esr': {
    linkedDiseases: [
      { _key: 'ld1', diseaseName: 'Arthritis (Gathiya)', diseaseSlug: 'arthritis', isAvailable: true },
      { _key: 'ld2', diseaseName: 'Rheumatoid Arthritis', diseaseSlug: 'rheumatoid-arthritis', isAvailable: true },
      { _key: 'ld3', diseaseName: 'Ankylosing Spondylitis', diseaseSlug: 'ankylosing-spondylitis', isAvailable: true },
      { _key: 'ld4', diseaseName: 'Ulcerative Colitis', diseaseSlug: 'ulcerative-colitis', isAvailable: true },
      { _key: 'ld5', diseaseName: 'Thyroid Disorder', diseaseSlug: 'thyroid', isAvailable: true },
      { _key: 'ld6', diseaseName: 'Chronic Fatigue Syndrome', diseaseSlug: 'chronic-fatigue-syndrome', isAvailable: true },
    ],
    linkedSymptoms: [
      { _key: 'ls1', symptomName: 'Joint Pain', symptomSlug: 'joint-pain' },
      { _key: 'ls2', symptomName: 'Weakness & Fatigue', symptomSlug: 'weakness-fatigue' },
      { _key: 'ls3', symptomName: 'Muscle Cramps', symptomSlug: 'muscle-cramps' },
      { _key: 'ls4', symptomName: 'Headache', symptomSlug: 'headache' },
    ],
    linkedDiets: [
      { _key: 'ld1', dietName: 'Rheumatoid Arthritis Diet', dietSlug: 'rheumatoid-arthritis' },
      { _key: 'ld2', dietName: 'Arthritis Diet', dietSlug: 'arthritis' },
      { _key: 'ld3', dietName: 'Ulcerative Colitis Diet', dietSlug: 'ulcerative-colitis' },
    ],
  },

  'labtest-cbc': {
    linkedDiseases: [
      { _key: 'ld1', diseaseName: 'Thyroid Disorder', diseaseSlug: 'thyroid', isAvailable: true },
      { _key: 'ld2', diseaseName: 'Hair Fall (Alopecia)', diseaseSlug: 'hairfall', isAvailable: true },
      { _key: 'ld3', diseaseName: 'Chronic Fatigue Syndrome', diseaseSlug: 'chronic-fatigue-syndrome', isAvailable: true },
      { _key: 'ld4', diseaseName: 'Psoriasis', diseaseSlug: 'psoriasis', isAvailable: true },
      { _key: 'ld5', diseaseName: 'Ulcerative Colitis', diseaseSlug: 'ulcerative-colitis', isAvailable: true },
    ],
    linkedSymptoms: [
      { _key: 'ls1', symptomName: 'Weakness & Fatigue', symptomSlug: 'weakness-fatigue' },
      { _key: 'ls2', symptomName: 'Hair Fall', symptomSlug: 'hair-fall' },
      { _key: 'ls3', symptomName: 'Headache', symptomSlug: 'headache' },
      { _key: 'ls4', symptomName: 'Numbness & Tingling', symptomSlug: 'numbness-tingling' },
    ],
    linkedDiets: [
      { _key: 'ld1', dietName: 'Hair Fall Diet', dietSlug: 'hairfall' },
      { _key: 'ld2', dietName: 'Chronic Fatigue Diet', dietSlug: 'chronic-fatigue-syndrome' },
    ],
  },

  'labtest-thyroid-profile-tsh': {
    linkedDiseases: [
      { _key: 'ld1', diseaseName: 'Thyroid Disorder', diseaseSlug: 'thyroid', isAvailable: true },
      { _key: 'ld2', diseaseName: 'Hashimoto Thyroiditis', diseaseSlug: 'hashimoto-thyroiditis', isAvailable: true },
      { _key: 'ld3', diseaseName: 'Hyperthyroidism', diseaseSlug: 'hyperthyroidism', isAvailable: true },
      { _key: 'ld4', diseaseName: 'PCOD', diseaseSlug: 'pcod', isAvailable: true },
      { _key: 'ld5', diseaseName: 'Depression', diseaseSlug: 'depression', isAvailable: true },
      { _key: 'ld6', diseaseName: 'Hair Fall', diseaseSlug: 'hairfall', isAvailable: true },
    ],
    linkedSymptoms: [
      { _key: 'ls1', symptomName: 'Thyroid Symptoms', symptomSlug: 'thyroid-symptoms' },
      { _key: 'ls2', symptomName: 'Weight Gain', symptomSlug: 'weight-gain' },
      { _key: 'ls3', symptomName: 'Hair Fall', symptomSlug: 'hair-fall' },
      { _key: 'ls4', symptomName: 'Weakness & Fatigue', symptomSlug: 'weakness-fatigue' },
    ],
    linkedDiets: [
      { _key: 'ld1', dietName: 'Hypothyroidism Diet', dietSlug: 'hypothyroidism' },
      { _key: 'ld2', dietName: 'Hyperthyroidism Diet', dietSlug: 'hyperthyroidism' },
      { _key: 'ld3', dietName: 'Hashimoto Diet', dietSlug: 'hashimotos-thyroiditis' },
      { _key: 'ld4', dietName: 'PCOD Diet', dietSlug: 'pcod' },
    ],
  },

  'labtest-blood-sugar': {
    linkedDiseases: [
      { _key: 'ld1', diseaseName: 'Pre-Diabetes', diseaseSlug: 'prediabetes', isAvailable: true },
      { _key: 'ld2', diseaseName: 'Fatty Liver', diseaseSlug: 'fatty-liver', isAvailable: true },
      { _key: 'ld3', diseaseName: 'PCOD', diseaseSlug: 'pcod', isAvailable: true },
      { _key: 'ld4', diseaseName: 'Obesity / Weight Gain', diseaseSlug: 'acanthosis-nigricans', isAvailable: true },
    ],
    linkedSymptoms: [
      { _key: 'ls1', symptomName: 'Diabetes Symptoms', symptomSlug: 'diabetes-symptoms' },
      { _key: 'ls2', symptomName: 'Weakness & Fatigue', symptomSlug: 'weakness-fatigue' },
      { _key: 'ls3', symptomName: 'Weight Gain', symptomSlug: 'weight-gain' },
    ],
    linkedDiets: [
      { _key: 'ld1', dietName: 'Diabetes Diet', dietSlug: 'diabetes' },
      { _key: 'ld2', dietName: 'Fatty Liver Diet', dietSlug: 'fatty-liver' },
      { _key: 'ld3', dietName: 'PCOD Diet', dietSlug: 'pcod' },
    ],
  },

  'labtest-lipid-profile': {
    linkedDiseases: [
      { _key: 'ld1', diseaseName: 'Fatty Liver', diseaseSlug: 'fatty-liver', isAvailable: true },
      { _key: 'ld2', diseaseName: 'Thyroid Disorder', diseaseSlug: 'thyroid', isAvailable: true },
      { _key: 'ld3', diseaseName: 'Pre-Diabetes', diseaseSlug: 'prediabetes', isAvailable: true },
      { _key: 'ld4', diseaseName: 'Gout', diseaseSlug: 'gout', isAvailable: true },
      { _key: 'ld5', diseaseName: 'Psoriasis', diseaseSlug: 'psoriasis', isAvailable: true },
    ],
    linkedSymptoms: [
      { _key: 'ls1', symptomName: 'Weakness & Fatigue', symptomSlug: 'weakness-fatigue' },
      { _key: 'ls2', symptomName: 'Weight Gain', symptomSlug: 'weight-gain' },
      { _key: 'ls3', symptomName: 'Headache', symptomSlug: 'headache' },
    ],
    linkedDiets: [
      { _key: 'ld1', dietName: 'Fatty Liver Diet', dietSlug: 'fatty-liver' },
      { _key: 'ld2', dietName: 'Hypertension Diet', dietSlug: 'hypertension' },
      { _key: 'ld3', dietName: 'Diabetes Diet', dietSlug: 'diabetes' },
      { _key: 'ld4', dietName: 'Gout Diet', dietSlug: 'gout' },
    ],
  },

  'labtest-vitamin-d': {
    linkedDiseases: [
      { _key: 'ld1', diseaseName: 'Depression', diseaseSlug: 'depression', isAvailable: true },
      { _key: 'ld2', diseaseName: 'Arthritis', diseaseSlug: 'arthritis', isAvailable: true },
      { _key: 'ld3', diseaseName: 'Osteoarthritis', diseaseSlug: 'osteoarthritis', isAvailable: true },
      { _key: 'ld4', diseaseName: 'Psoriasis', diseaseSlug: 'psoriasis', isAvailable: true },
      { _key: 'ld5', diseaseName: 'Chronic Fatigue Syndrome', diseaseSlug: 'chronic-fatigue-syndrome', isAvailable: true },
      { _key: 'ld6', diseaseName: 'Hair Fall', diseaseSlug: 'hairfall', isAvailable: true },
    ],
    linkedSymptoms: [
      { _key: 'ls1', symptomName: 'Weakness & Fatigue', symptomSlug: 'weakness-fatigue' },
      { _key: 'ls2', symptomName: 'Joint Pain', symptomSlug: 'joint-pain' },
      { _key: 'ls3', symptomName: 'Back Pain', symptomSlug: 'back-pain' },
      { _key: 'ls4', symptomName: 'Muscle Cramps', symptomSlug: 'muscle-cramps' },
      { _key: 'ls5', symptomName: 'Hair Fall', symptomSlug: 'hair-fall' },
    ],
    linkedDiets: [
      { _key: 'ld1', dietName: 'Arthritis Diet', dietSlug: 'arthritis' },
      { _key: 'ld2', dietName: 'Depression Diet', dietSlug: 'depression' },
      { _key: 'ld3', dietName: 'Psoriasis Diet', dietSlug: 'psoriasis' },
    ],
  },

  'labtest-ferritin': {
    linkedDiseases: [
      { _key: 'ld1', diseaseName: 'Hair Fall', diseaseSlug: 'hairfall', isAvailable: true },
      { _key: 'ld2', diseaseName: 'Alopecia', diseaseSlug: 'alopecia', isAvailable: true },
      { _key: 'ld3', diseaseName: 'Thyroid Disorder', diseaseSlug: 'thyroid', isAvailable: true },
      { _key: 'ld4', diseaseName: 'Chronic Fatigue Syndrome', diseaseSlug: 'chronic-fatigue-syndrome', isAvailable: true },
      { _key: 'ld5', diseaseName: 'Restless Leg / Insomnia', diseaseSlug: 'insomnia', isAvailable: true },
    ],
    linkedSymptoms: [
      { _key: 'ls1', symptomName: 'Hair Fall', symptomSlug: 'hair-fall' },
      { _key: 'ls2', symptomName: 'Hair Thinning', symptomSlug: 'hair-thinning' },
      { _key: 'ls3', symptomName: 'Weakness & Fatigue', symptomSlug: 'weakness-fatigue' },
      { _key: 'ls4', symptomName: 'Headache', symptomSlug: 'headache' },
    ],
    linkedDiets: [
      { _key: 'ld1', dietName: 'Hair Fall Diet', dietSlug: 'hairfall' },
      { _key: 'ld2', dietName: 'Alopecia Diet', dietSlug: 'alopecia-areata' },
      { _key: 'ld3', dietName: 'Chronic Fatigue Diet', dietSlug: 'chronic-fatigue-syndrome' },
    ],
  },

  'labtest-ana': {
    linkedDiseases: [
      { _key: 'ld1', diseaseName: 'Rheumatoid Arthritis', diseaseSlug: 'rheumatoid-arthritis', isAvailable: true },
      { _key: 'ld2', diseaseName: "Sjogren's Syndrome", diseaseSlug: 'sjogrens-syndrome', isAvailable: true },
      { _key: 'ld3', diseaseName: 'Psoriatic Arthritis', diseaseSlug: 'psoriatic-arthritis', isAvailable: true },
      { _key: 'ld4', diseaseName: 'Lichen Planus', diseaseSlug: 'lichen', isAvailable: true },
    ],
    linkedSymptoms: [
      { _key: 'ls1', symptomName: 'Joint Pain', symptomSlug: 'joint-pain' },
      { _key: 'ls2', symptomName: 'Skin Rash', symptomSlug: 'skin-rash' },
      { _key: 'ls3', symptomName: 'Muscle Cramps', symptomSlug: 'muscle-cramps' },
      { _key: 'ls4', symptomName: 'Weakness & Fatigue', symptomSlug: 'weakness-fatigue' },
    ],
    linkedDiets: [
      { _key: 'ld1', dietName: 'Rheumatoid Arthritis Diet', dietSlug: 'rheumatoid-arthritis' },
      { _key: 'ld2', dietName: 'Arthritis Diet', dietSlug: 'arthritis' },
    ],
  },

  'labtest-testosterone': {
    linkedDiseases: [
      { _key: 'ld1', diseaseName: 'Erectile Dysfunction', diseaseSlug: 'erectile-dysfunction', isAvailable: true },
      { _key: 'ld2', diseaseName: 'Male Infertility', diseaseSlug: 'male-infertility', isAvailable: true },
      { _key: 'ld3', diseaseName: 'PCOD', diseaseSlug: 'pcod', isAvailable: true },
      { _key: 'ld4', diseaseName: 'Hair Fall', diseaseSlug: 'hairfall', isAvailable: true },
      { _key: 'ld5', diseaseName: 'Acne', diseaseSlug: 'acne', isAvailable: true },
    ],
    linkedSymptoms: [
      { _key: 'ls1', symptomName: 'Weakness & Fatigue', symptomSlug: 'weakness-fatigue' },
      { _key: 'ls2', symptomName: 'Hair Fall', symptomSlug: 'hair-fall' },
      { _key: 'ls3', symptomName: 'PCOD Symptoms', symptomSlug: 'pcod-symptoms' },
      { _key: 'ls4', symptomName: 'Irregular Periods', symptomSlug: 'irregular-periods' },
    ],
    linkedDiets: [
      { _key: 'ld1', dietName: 'Erectile Dysfunction Diet', dietSlug: 'erectile-dysfunction' },
      { _key: 'ld2', dietName: 'Male Infertility Diet', dietSlug: 'male-infertility' },
      { _key: 'ld3', dietName: 'PCOD Diet', dietSlug: 'pcod' },
    ],
  },

  'labtest-hba1c': {
    linkedDiseases: [
      { _key: 'ld1', diseaseName: 'Pre-Diabetes', diseaseSlug: 'prediabetes', isAvailable: true },
      { _key: 'ld2', diseaseName: 'Fatty Liver', diseaseSlug: 'fatty-liver', isAvailable: true },
      { _key: 'ld3', diseaseName: 'PCOD', diseaseSlug: 'pcod', isAvailable: true },
      { _key: 'ld4', diseaseName: 'Acanthosis Nigricans', diseaseSlug: 'acanthosis-nigricans', isAvailable: true },
    ],
    linkedSymptoms: [
      { _key: 'ls1', symptomName: 'Diabetes Symptoms', symptomSlug: 'diabetes-symptoms' },
      { _key: 'ls2', symptomName: 'Weakness & Fatigue', symptomSlug: 'weakness-fatigue' },
      { _key: 'ls3', symptomName: 'Weight Gain', symptomSlug: 'weight-gain' },
    ],
    linkedDiets: [
      { _key: 'ld1', dietName: 'Diabetes Diet', dietSlug: 'diabetes' },
      { _key: 'ld2', dietName: 'Fatty Liver Diet', dietSlug: 'fatty-liver' },
      { _key: 'ld3', dietName: 'PCOD Diet', dietSlug: 'pcod' },
    ],
  },

  'labtest-ra-test': {
    linkedDiseases: [
      { _key: 'ld1', diseaseName: 'Rheumatoid Arthritis', diseaseSlug: 'rheumatoid-arthritis', isAvailable: true },
      { _key: 'ld2', diseaseName: 'Arthritis', diseaseSlug: 'arthritis', isAvailable: true },
      { _key: 'ld3', diseaseName: 'Ankylosing Spondylitis', diseaseSlug: 'ankylosing-spondylitis', isAvailable: true },
      { _key: 'ld4', diseaseName: "Sjogren's Syndrome", diseaseSlug: 'sjogrens-syndrome', isAvailable: true },
      { _key: 'ld5', diseaseName: 'Psoriatic Arthritis', diseaseSlug: 'psoriatic-arthritis', isAvailable: true },
    ],
    linkedSymptoms: [
      { _key: 'ls1', symptomName: 'Joint Pain', symptomSlug: 'joint-pain' },
      { _key: 'ls2', symptomName: 'Muscle Cramps', symptomSlug: 'muscle-cramps' },
      { _key: 'ls3', symptomName: 'Weakness & Fatigue', symptomSlug: 'weakness-fatigue' },
      { _key: 'ls4', symptomName: 'Numbness & Tingling', symptomSlug: 'numbness-tingling' },
    ],
    linkedDiets: [
      { _key: 'ld1', dietName: 'Rheumatoid Arthritis Diet', dietSlug: 'rheumatoid-arthritis' },
      { _key: 'ld2', dietName: 'Arthritis Diet', dietSlug: 'arthritis' },
      { _key: 'ld3', dietName: 'Ankylosing Spondylitis Diet', dietSlug: 'ankylosing-spondylitis' },
    ],
  },

  'labtest-amh': {
    linkedDiseases: [
      { _key: 'ld1', diseaseName: 'PCOD', diseaseSlug: 'pcod', isAvailable: true },
      { _key: 'ld2', diseaseName: 'Ovarian Cyst', diseaseSlug: 'ovarian-cyst', isAvailable: true },
      { _key: 'ld3', diseaseName: 'Endometriosis', diseaseSlug: 'endometriosis', isAvailable: true },
      { _key: 'ld4', diseaseName: 'Uterine Fibroid', diseaseSlug: 'uterine-fibroid', isAvailable: true },
    ],
    linkedSymptoms: [
      { _key: 'ls1', symptomName: 'PCOD Symptoms', symptomSlug: 'pcod-symptoms' },
      { _key: 'ls2', symptomName: 'Irregular Periods', symptomSlug: 'irregular-periods' },
      { _key: 'ls3', symptomName: 'Heavy Period', symptomSlug: 'heavy-period' },
      { _key: 'ls4', symptomName: 'White Discharge', symptomSlug: 'white-discharge' },
    ],
    linkedDiets: [
      { _key: 'ld1', dietName: 'PCOD Diet', dietSlug: 'pcod' },
      { _key: 'ld2', dietName: 'Ovarian Cyst Diet', dietSlug: 'ovarian-cyst' },
      { _key: 'ld3', dietName: 'Endometriosis Diet', dietSlug: 'endometriosis' },
    ],
  },

  'labtest-widal': {
    linkedDiseases: [
      { _key: 'ld1', diseaseName: 'Recurrent Infections', diseaseSlug: 'recurrent-cold', isAvailable: true },
      { _key: 'ld2', diseaseName: 'Chronic Fatigue Syndrome', diseaseSlug: 'chronic-fatigue-syndrome', isAvailable: true },
    ],
    linkedSymptoms: [
      { _key: 'ls1', symptomName: 'Weakness & Fatigue', symptomSlug: 'weakness-fatigue' },
      { _key: 'ls2', symptomName: 'Headache', symptomSlug: 'headache' },
      { _key: 'ls3', symptomName: 'Hair Fall (post-fever)', symptomSlug: 'hair-fall' },
    ],
    linkedDiets: [
      { _key: 'ld1', dietName: 'Chronic Fatigue Diet', dietSlug: 'chronic-fatigue-syndrome' },
    ],
  },

  'labtest-kft': {
    linkedDiseases: [
      { _key: 'ld1', diseaseName: 'Kidney Stone', diseaseSlug: 'kidney-stone', isAvailable: true },
      { _key: 'ld2', diseaseName: 'Recurrent UTI', diseaseSlug: 'recurrent-uti', isAvailable: true },
      { _key: 'ld3', diseaseName: 'Gout', diseaseSlug: 'gout', isAvailable: true },
      { _key: 'ld4', diseaseName: 'Pre-Diabetes / Diabetes', diseaseSlug: 'prediabetes', isAvailable: true },
      { _key: 'ld5', diseaseName: 'Fatty Liver', diseaseSlug: 'fatty-liver', isAvailable: true },
    ],
    linkedSymptoms: [
      { _key: 'ls1', symptomName: 'Weakness & Fatigue', symptomSlug: 'weakness-fatigue' },
      { _key: 'ls2', symptomName: 'Burning Urination', symptomSlug: 'burning-urination' },
      { _key: 'ls3', symptomName: 'Muscle Cramps', symptomSlug: 'muscle-cramps' },
    ],
    linkedDiets: [
      { _key: 'ld1', dietName: 'Kidney Stone Diet', dietSlug: 'kidney-stone' },
      { _key: 'ld2', dietName: 'Gout Diet', dietSlug: 'gout' },
      { _key: 'ld3', dietName: 'Recurrent UTI Diet', dietSlug: 'recurrent-uti' },
      { _key: 'ld4', dietName: 'Diabetes Diet', dietSlug: 'diabetes' },
    ],
  },

  'labtest-prolactin': {
    linkedDiseases: [
      { _key: 'ld1', diseaseName: 'PCOD', diseaseSlug: 'pcod', isAvailable: true },
      { _key: 'ld2', diseaseName: 'Male Infertility', diseaseSlug: 'male-infertility', isAvailable: true },
      { _key: 'ld3', diseaseName: 'Thyroid Disorder', diseaseSlug: 'thyroid', isAvailable: true },
      { _key: 'ld4', diseaseName: 'Depression', diseaseSlug: 'depression', isAvailable: true },
    ],
    linkedSymptoms: [
      { _key: 'ls1', symptomName: 'PCOD Symptoms', symptomSlug: 'pcod-symptoms' },
      { _key: 'ls2', symptomName: 'Irregular Periods', symptomSlug: 'irregular-periods' },
      { _key: 'ls3', symptomName: 'White Discharge', symptomSlug: 'white-discharge' },
      { _key: 'ls4', symptomName: 'Weakness & Fatigue', symptomSlug: 'weakness-fatigue' },
    ],
    linkedDiets: [
      { _key: 'ld1', dietName: 'PCOD Diet', dietSlug: 'pcod' },
      { _key: 'ld2', dietName: 'Male Infertility Diet', dietSlug: 'male-infertility' },
      { _key: 'ld3', dietName: 'Depression Diet', dietSlug: 'depression' },
    ],
  },

  'labtest-magnesium': {
    linkedDiseases: [
      { _key: 'ld1', diseaseName: 'Kidney Stone', diseaseSlug: 'kidney-stone', isAvailable: true },
      { _key: 'ld2', diseaseName: 'Pre-Diabetes', diseaseSlug: 'prediabetes', isAvailable: true },
      { _key: 'ld3', diseaseName: 'IBS', diseaseSlug: 'ibs', isAvailable: true },
      { _key: 'ld4', diseaseName: 'Insomnia', diseaseSlug: 'insomnia', isAvailable: true },
      { _key: 'ld5', diseaseName: 'Anxiety', diseaseSlug: 'anxiety', isAvailable: true },
    ],
    linkedSymptoms: [
      { _key: 'ls1', symptomName: 'Muscle Cramps', symptomSlug: 'muscle-cramps' },
      { _key: 'ls2', symptomName: 'Insomnia', symptomSlug: 'insomnia' },
      { _key: 'ls3', symptomName: 'Anxiety Symptoms', symptomSlug: 'anxiety-symptoms' },
      { _key: 'ls4', symptomName: 'Weakness & Fatigue', symptomSlug: 'weakness-fatigue' },
      { _key: 'ls5', symptomName: 'Numbness & Tingling', symptomSlug: 'numbness-tingling' },
    ],
    linkedDiets: [
      { _key: 'ld1', dietName: 'Kidney Stone Diet', dietSlug: 'kidney-stone' },
      { _key: 'ld2', dietName: 'IBS Diet', dietSlug: 'ibs' },
      { _key: 'ld3', dietName: 'Insomnia Diet', dietSlug: 'insomnia' },
      { _key: 'ld4', dietName: 'Anxiety Diet', dietSlug: 'anxiety-neurosis' },
    ],
  },

  'labtest-calcium': {
    linkedDiseases: [
      { _key: 'ld1', diseaseName: 'Kidney Stone', diseaseSlug: 'kidney-stone', isAvailable: true },
      { _key: 'ld2', diseaseName: 'Osteoarthritis', diseaseSlug: 'osteoarthritis', isAvailable: true },
      { _key: 'ld3', diseaseName: 'Thyroid Disorder', diseaseSlug: 'thyroid', isAvailable: true },
      { _key: 'ld4', diseaseName: 'Psoriasis', diseaseSlug: 'psoriasis', isAvailable: true },
    ],
    linkedSymptoms: [
      { _key: 'ls1', symptomName: 'Muscle Cramps', symptomSlug: 'muscle-cramps' },
      { _key: 'ls2', symptomName: 'Joint Pain', symptomSlug: 'joint-pain' },
      { _key: 'ls3', symptomName: 'Weakness & Fatigue', symptomSlug: 'weakness-fatigue' },
      { _key: 'ls4', symptomName: 'Numbness & Tingling', symptomSlug: 'numbness-tingling' },
    ],
    linkedDiets: [
      { _key: 'ld1', dietName: 'Kidney Stone Diet', dietSlug: 'kidney-stone' },
      { _key: 'ld2', dietName: 'Arthritis Diet', dietSlug: 'arthritis' },
      { _key: 'ld3', dietName: 'Psoriasis Diet', dietSlug: 'psoriasis' },
    ],
  },

  'labtest-crp': {
    linkedDiseases: [
      { _key: 'ld1', diseaseName: 'Arthritis', diseaseSlug: 'arthritis', isAvailable: true },
      { _key: 'ld2', diseaseName: 'Rheumatoid Arthritis', diseaseSlug: 'rheumatoid-arthritis', isAvailable: true },
      { _key: 'ld3', diseaseName: 'Ulcerative Colitis', diseaseSlug: 'ulcerative-colitis', isAvailable: true },
      { _key: 'ld4', diseaseName: 'Ankylosing Spondylitis', diseaseSlug: 'ankylosing-spondylitis', isAvailable: true },
      { _key: 'ld5', diseaseName: 'IBS', diseaseSlug: 'ibs', isAvailable: true },
      { _key: 'ld6', diseaseName: 'Psoriasis', diseaseSlug: 'psoriasis', isAvailable: true },
    ],
    linkedSymptoms: [
      { _key: 'ls1', symptomName: 'Joint Pain', symptomSlug: 'joint-pain' },
      { _key: 'ls2', symptomName: 'Muscle Cramps', symptomSlug: 'muscle-cramps' },
      { _key: 'ls3', symptomName: 'Weakness & Fatigue', symptomSlug: 'weakness-fatigue' },
      { _key: 'ls4', symptomName: 'Skin Rash', symptomSlug: 'skin-rash' },
    ],
    linkedDiets: [
      { _key: 'ld1', dietName: 'Rheumatoid Arthritis Diet', dietSlug: 'rheumatoid-arthritis' },
      { _key: 'ld2', dietName: 'Ulcerative Colitis Diet', dietSlug: 'ulcerative-colitis' },
      { _key: 'ld3', dietName: 'IBS Diet', dietSlug: 'ibs' },
      { _key: 'ld4', dietName: 'Psoriasis Diet', dietSlug: 'psoriasis' },
    ],
  },

  'labtest-psa': {
    linkedDiseases: [
      { _key: 'ld1', diseaseName: 'BPH (Prostate Enlargement)', diseaseSlug: 'bph', isAvailable: true },
      { _key: 'ld2', diseaseName: 'Recurrent UTI', diseaseSlug: 'recurrent-uti', isAvailable: true },
    ],
    linkedSymptoms: [
      { _key: 'ls1', symptomName: 'Burning Urination', symptomSlug: 'burning-urination' },
      { _key: 'ls2', symptomName: 'Weakness & Fatigue', symptomSlug: 'weakness-fatigue' },
    ],
    linkedDiets: [
      { _key: 'ld1', dietName: 'Recurrent UTI Diet', dietSlug: 'recurrent-uti' },
    ],
  },

  'labtest-lft': {
    linkedDiseases: [
      { _key: 'ld1', diseaseName: 'Fatty Liver', diseaseSlug: 'fatty-liver', isAvailable: true },
      { _key: 'ld2', diseaseName: 'Gallstones', diseaseSlug: 'gallstones', isAvailable: true },
      { _key: 'ld3', diseaseName: 'IBS', diseaseSlug: 'ibs', isAvailable: true },
      { _key: 'ld4', diseaseName: 'GERD / Acidity', diseaseSlug: 'gerd', isAvailable: true },
      { _key: 'ld5', diseaseName: 'Psoriasis', diseaseSlug: 'psoriasis', isAvailable: true },
    ],
    linkedSymptoms: [
      { _key: 'ls1', symptomName: 'Weakness & Fatigue', symptomSlug: 'weakness-fatigue' },
      { _key: 'ls2', symptomName: 'Gas / Bloating', symptomSlug: 'pet-phoolna-gas' },
      { _key: 'ls3', symptomName: 'Acidity', symptomSlug: 'acidity' },
      { _key: 'ls4', symptomName: 'Headache', symptomSlug: 'headache' },
    ],
    linkedDiets: [
      { _key: 'ld1', dietName: 'Fatty Liver Diet', dietSlug: 'fatty-liver' },
      { _key: 'ld2', dietName: 'Gallstones Diet', dietSlug: 'gallstones' },
      { _key: 'ld3', dietName: 'IBS Diet', dietSlug: 'ibs' },
      { _key: 'ld4', dietName: 'GERD Diet', dietSlug: 'gerd' },
    ],
  },

  'labtest-uric-acid': {
    linkedDiseases: [
      { _key: 'ld1', diseaseName: 'Gout', diseaseSlug: 'gout', isAvailable: true },
      { _key: 'ld2', diseaseName: 'Kidney Stone', diseaseSlug: 'kidney-stone', isAvailable: true },
      { _key: 'ld3', diseaseName: 'Psoriasis', diseaseSlug: 'psoriasis', isAvailable: true },
      { _key: 'ld4', diseaseName: 'Psoriatic Arthritis', diseaseSlug: 'psoriatic-arthritis', isAvailable: true },
      { _key: 'ld5', diseaseName: 'Pre-Diabetes', diseaseSlug: 'prediabetes', isAvailable: true },
    ],
    linkedSymptoms: [
      { _key: 'ls1', symptomName: 'Joint Pain', symptomSlug: 'joint-pain' },
      { _key: 'ls2', symptomName: 'Knee Pain', symptomSlug: 'knee-pain' },
      { _key: 'ls3', symptomName: 'Heel Pain', symptomSlug: 'heel-pain' },
      { _key: 'ls4', symptomName: 'Weakness & Fatigue', symptomSlug: 'weakness-fatigue' },
    ],
    linkedDiets: [
      { _key: 'ld1', dietName: 'Gout Diet', dietSlug: 'gout' },
      { _key: 'ld2', dietName: 'Kidney Stone Diet', dietSlug: 'kidney-stone' },
      { _key: 'ld3', dietName: 'Psoriasis Diet', dietSlug: 'psoriasis' },
    ],
  },

  'labtest-urine-routine': {
    linkedDiseases: [
      { _key: 'ld1', diseaseName: 'Recurrent UTI', diseaseSlug: 'recurrent-uti', isAvailable: true },
      { _key: 'ld2', diseaseName: 'Kidney Stone', diseaseSlug: 'kidney-stone', isAvailable: true },
      { _key: 'ld3', diseaseName: 'PCOD', diseaseSlug: 'pcod', isAvailable: true },
      { _key: 'ld4', diseaseName: 'Pre-Diabetes', diseaseSlug: 'prediabetes', isAvailable: true },
      { _key: 'ld5', diseaseName: 'Leucorrhoea', diseaseSlug: 'leucorrhoea', isAvailable: true },
    ],
    linkedSymptoms: [
      { _key: 'ls1', symptomName: 'Burning Urination', symptomSlug: 'burning-urination' },
      { _key: 'ls2', symptomName: 'Weakness & Fatigue', symptomSlug: 'weakness-fatigue' },
      { _key: 'ls3', symptomName: 'White Discharge', symptomSlug: 'white-discharge' },
    ],
    linkedDiets: [
      { _key: 'ld1', dietName: 'Recurrent UTI Diet', dietSlug: 'recurrent-uti' },
      { _key: 'ld2', dietName: 'Kidney Stone Diet', dietSlug: 'kidney-stone' },
      { _key: 'ld3', dietName: 'PCOD Diet', dietSlug: 'pcod' },
    ],
  },

  'labtest-vitamin-b12': {
    linkedDiseases: [
      { _key: 'ld1', diseaseName: 'Depression', diseaseSlug: 'depression', isAvailable: true },
      { _key: 'ld2', diseaseName: 'Anxiety', diseaseSlug: 'anxiety', isAvailable: true },
      { _key: 'ld3', diseaseName: 'Chronic Fatigue Syndrome', diseaseSlug: 'chronic-fatigue-syndrome', isAvailable: true },
      { _key: 'ld4', diseaseName: 'Thyroid Disorder', diseaseSlug: 'thyroid', isAvailable: true },
      { _key: 'ld5', diseaseName: 'Hair Fall', diseaseSlug: 'hairfall', isAvailable: true },
    ],
    linkedSymptoms: [
      { _key: 'ls1', symptomName: 'Weakness & Fatigue', symptomSlug: 'weakness-fatigue' },
      { _key: 'ls2', symptomName: 'Numbness & Tingling', symptomSlug: 'numbness-tingling' },
      { _key: 'ls3', symptomName: 'Memory Loss', symptomSlug: 'memory-loss' },
      { _key: 'ls4', symptomName: 'Headache', symptomSlug: 'headache' },
      { _key: 'ls5', symptomName: 'Hair Fall', symptomSlug: 'hair-fall' },
    ],
    linkedDiets: [
      { _key: 'ld1', dietName: 'Depression Diet', dietSlug: 'depression' },
      { _key: 'ld2', dietName: 'Anxiety Diet', dietSlug: 'anxiety-neurosis' },
      { _key: 'ld3', dietName: 'Chronic Fatigue Diet', dietSlug: 'chronic-fatigue-syndrome' },
    ],
  },

  'labtest-semen-analysis': {
    linkedDiseases: [
      { _key: 'ld1', diseaseName: 'Male Infertility', diseaseSlug: 'male-infertility', isAvailable: true },
      { _key: 'ld2', diseaseName: 'Erectile Dysfunction', diseaseSlug: 'erectile-dysfunction', isAvailable: true },
      { _key: 'ld3', diseaseName: 'Varicocele / Varicose Veins', diseaseSlug: 'varicose-veins', isAvailable: true },
    ],
    linkedSymptoms: [
      { _key: 'ls1', symptomName: 'Weakness & Fatigue', symptomSlug: 'weakness-fatigue' },
    ],
    linkedDiets: [
      { _key: 'ld1', dietName: 'Male Infertility Diet', dietSlug: 'male-infertility' },
      { _key: 'ld2', dietName: 'Erectile Dysfunction Diet', dietSlug: 'erectile-dysfunction' },
    ],
  },
}

async function main() {
  const ids = Object.keys(updates)
  console.log(`Updating ${ids.length} lab tests...`)
  let success = 0, failed = 0
  for (const id of ids) {
    try {
      const { linkedDiseases, linkedSymptoms, linkedDiets } = updates[id]
      await client.patch(id).set({ linkedDiseases, linkedSymptoms, linkedDiets }).commit()
      console.log(`✅ ${id}`)
      success++
    } catch (e: any) {
      console.log(`❌ ${id} — ${e.message?.slice(0, 80)}`)
      failed++
    }
  }
  console.log(`\nDone: ${success} updated, ${failed} failed`)
}

main().catch(console.error)
