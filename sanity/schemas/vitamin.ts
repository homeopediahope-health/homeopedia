import { defineType, defineField, defineArrayMember } from 'sanity'

export const vitamin = defineType({
  name: 'vitamin',
  title: 'Vitamin / Supplement',
  type: 'document',
  groups: [
    { name: 'basic',       title: '1. Basic Info' },
    { name: 'intro',       title: '2. Introduction' },
    { name: 'deficiency',  title: '3. Deficiency Symptoms & Causes' },
    { name: 'ranges',      title: '4. Normal Range' },
    { name: 'food',        title: '5. Food Sources & Daily Requirement' },
    { name: 'pregnancy',   title: '6. Pregnancy & Children' },
    { name: 'supplement',  title: '7. Supplement Guide' },
    { name: 'safety',      title: '8. Safety & Interactions' },
    { name: 'linked',      title: '9. Linked Diseases & Tests' },
    { name: 'homeopathy',  title: '10. Homeopathy' },
    { name: 'faqs',        title: '11. FAQs & Myths' },
  ],

  fields: [
    // ── BASIC INFO ──────────────────────────────────────────────────────
    defineField({ group: 'basic', name: 'name',        title: 'Vitamin Name (English)', type: 'string', validation: r => r.required() }),
    defineField({ group: 'basic', name: 'hindiName',   title: 'Hindi / Hinglish Naam (e.g. "Dhoop Wala Vitamin")', type: 'string' }),
    defineField({
      group: 'basic', name: 'category', title: 'Category', type: 'string',
      options: { list: ['Vitamin', 'Mineral', 'Supplement', 'Amino Acid', 'Fatty Acid'] },
    }),
    defineField({ group: 'basic', name: 'slug',          title: 'URL Slug', type: 'slug', options: { source: 'name' }, validation: r => r.required() }),
    defineField({ group: 'basic', name: 'metaTitle',     title: 'SEO Title (60 chars max)', type: 'string' }),
    defineField({ group: 'basic', name: 'metaDescription', title: 'SEO Description (150 chars)', type: 'text', rows: 2 }),
    defineField({ group: 'basic', name: 'reviewDate',    title: 'Review Date (e.g. May 2026)', type: 'string' }),
    defineField({ group: 'basic', name: 'youtubeVideo',  title: 'YouTube Video URL (agar video hai)', type: 'url' }),
    defineField({ group: 'basic', name: 'doctorNote',    title: 'Doctor Note — Dr. Shadab ka personal clinical observation (E-E-A-T ke liye)', type: 'text', rows: 3 }),

    // ── QUICK FACTS ─────────────────────────────────────────────────────
    defineField({
      group: 'intro', name: 'quickFacts', title: 'Quick Facts (Page ke top pe dikhenge)',
      type: 'object',
      fields: [
        { name: 'indiaPrevalence',      title: 'India Prevalence (e.g. "70-80% Indians mein kami")', type: 'string' },
        { name: 'commonDeficiencySign', title: 'Sabse Common Deficiency Sign', type: 'string' },
        { name: 'mainFoodSource',       title: 'Main Food Source (Vegetarian)', type: 'string' },
        { name: 'normalRangeQuick',     title: 'Normal Range (short, e.g. "30-100 ng/mL")', type: 'string' },
      ],
    }),

    // ── INTRODUCTION ────────────────────────────────────────────────────
    defineField({ group: 'intro', name: 'whatIsIt', title: 'Ye Vitamin Kya Hai (2-3 lines — simple Hinglish, body mein kya role hai)', type: 'text', rows: 4 }),
    defineField({
      group: 'intro', name: 'bodyFunctions', title: 'Body Mein Kya Kaam Karta Hai (5-8 bullet points)',
      type: 'array', of: [{ type: 'string' }],
    }),

    // ── DEFICIENCY SYMPTOMS ─────────────────────────────────────────────
    defineField({
      group: 'deficiency', name: 'deficiencySymptoms', title: 'Kami Ke Lakshan (grouped by body system)',
      type: 'object',
      fields: [
        { name: 'bonesMusclsJoints', title: 'Bones / Muscles / Joints',   type: 'array', of: [{ type: 'string' }] },
        { name: 'energyMoodBrain',   title: 'Energy / Mood / Brain',       type: 'array', of: [{ type: 'string' }] },
        { name: 'skinHairNails',     title: 'Skin / Hair / Nails',         type: 'array', of: [{ type: 'string' }] },
        { name: 'other',             title: 'Other / Specific Symptoms',   type: 'array', of: [{ type: 'string' }] },
      ],
    }),

    // ── DEFICIENCY CAUSES ───────────────────────────────────────────────
    defineField({
      group: 'deficiency', name: 'deficiencyCauses', title: 'Kami Ke Kaaran (5-7 points)',
      type: 'array', of: [{ type: 'string' }],
    }),

    // ── NORMAL RANGE TABLE ──────────────────────────────────────────────
    defineField({
      group: 'ranges', name: 'normalRanges', title: 'Normal Range Table (Adult M/F, Children, Pregnancy, Elderly)',
      type: 'array',
      of: [defineArrayMember({ type: 'object', fields: [
        { name: 'category',  title: 'Category (e.g. Adult Male, Pregnancy)', type: 'string' },
        { name: 'normal',    title: 'Normal Range',                          type: 'string' },
        { name: 'deficient', title: 'Kami (Deficient)',                      type: 'string' },
        { name: 'toxic',     title: 'Toxic / Zyada',                         type: 'string' },
        { name: 'unit',      title: 'Unit (ng/mL / mcg/dL etc.)',            type: 'string' },
      ]})],
    }),

    // ── FOOD SOURCES ────────────────────────────────────────────────────
    defineField({
      group: 'food', name: 'vegSources', title: 'Vegetarian Food Sources (India focus)',
      type: 'array',
      of: [defineArrayMember({ type: 'object', fields: [
        { name: 'food',     title: 'Food (Indian naam)',   type: 'string' },
        { name: 'quantity', title: 'Quantity (e.g. 1 cup)', type: 'string' },
        { name: 'amount',   title: 'Kitna Milega (e.g. 200 IU)', type: 'string' },
      ]})],
    }),
    defineField({
      group: 'food', name: 'nonVegSources', title: 'Non-Vegetarian Food Sources',
      type: 'array',
      of: [defineArrayMember({ type: 'object', fields: [
        { name: 'food',     title: 'Food', type: 'string' },
        { name: 'quantity', title: 'Quantity', type: 'string' },
        { name: 'amount',   title: 'Kitna Milega', type: 'string' },
      ]})],
    }),
    defineField({ group: 'food', name: 'sunlightNote', title: 'Sunlight / Other Source (agar relevant ho)', type: 'text', rows: 3 }),

    // ── DAILY REQUIREMENT ───────────────────────────────────────────────
    defineField({
      group: 'food', name: 'dailyRequirement', title: 'Daily Requirement Table (RDA — ICMR / NIH)',
      type: 'array',
      of: [defineArrayMember({ type: 'object', fields: [
        { name: 'ageGroup',       title: 'Age Group (e.g. 19-50 saal)', type: 'string' },
        { name: 'male',           title: 'Male',                         type: 'string' },
        { name: 'female',         title: 'Female',                       type: 'string' },
        { name: 'pregnancy',      title: 'Pregnancy',                    type: 'string' },
        { name: 'breastfeeding',  title: 'Breastfeeding',                type: 'string' },
        { name: 'unit',           title: 'Unit (IU / mcg / mg)',         type: 'string' },
      ]})],
    }),

    // ── PREGNANCY ───────────────────────────────────────────────────────
    defineField({
      group: 'pregnancy', name: 'pregnancyInfo', title: 'Pregnancy Mein Ye Vitamin',
      type: 'object',
      fields: [
        { name: 'howImportant',      title: 'Kitna Zaruri Hai Pregnancy Mein', type: 'text', rows: 3 },
        { name: 'dailyRequired',     title: 'Daily Requirement Pregnancy Mein', type: 'string' },
        { name: 'babyEffects',       title: 'Kami Se Baby Pe Kya Asar', type: 'array', of: [{ type: 'string' }] },
        { name: 'supplementSafe',    title: 'Supplement Safe Hai?', type: 'boolean' },
        { name: 'doctorLine',        title: 'Doctor Ki Rai (zaroor likho)', type: 'text', rows: 2 },
      ],
    }),

    // ── CHILDREN ─────────────────────────────────────────────────────────
    defineField({
      group: 'pregnancy', name: 'childrenInfo', title: 'Bachon Mein',
      type: 'object',
      fields: [
        { name: 'deficiencySymptoms',   title: 'Kami Ke Lakshan (adults se alag)', type: 'array', of: [{ type: 'string' }] },
        { name: 'ageWiseRequirement',   title: 'Age-wise Daily Requirement', type: 'text', rows: 3 },
        { name: 'foodSources',          title: 'Kaunse Foods Se Milega', type: 'text', rows: 2 },
        { name: 'supplementNote',       title: 'Supplement Dena Chahiye Ya Nahi', type: 'text', rows: 2 },
      ],
    }),

    // ── LAB TEST LINK ───────────────────────────────────────────────────
    defineField({
      group: 'supplement', name: 'labTestInfo', title: 'Kami Ka Test (Lab Test Link)',
      type: 'object',
      fields: [
        { name: 'testName',    title: 'Test Ka Naam', type: 'string' },
        { name: 'testSlug',    title: 'Test Slug (internal link)', type: 'string' },
        { name: 'normalRange', title: 'Normal Range Test Mein', type: 'string' },
        { name: 'whenToTest',  title: 'Kab Karaye (symptoms pe ya routine)', type: 'text', rows: 2 },
        { name: 'repeatAfter', title: 'Kitne Time Baad Repeat Karaye', type: 'string' },
        { name: 'priceRange',  title: 'Test Price Range India (optional)', type: 'string' },
      ],
    }),

    // ── SUPPLEMENT FORMS ────────────────────────────────────────────────
    defineField({
      group: 'supplement', name: 'supplementForms', title: 'Supplement Types / Forms (D2 vs D3, Citrate vs Carbonate etc.)',
      type: 'array',
      of: [defineArrayMember({ type: 'object', fields: [
        { name: 'formName',   title: 'Form Naam (e.g. D3, Citrate)', type: 'string' },
        { name: 'benefits',   title: 'Fayde', type: 'array', of: [{ type: 'string' }] },
        { name: 'drawbacks',  title: 'Nuksan / Limitations', type: 'array', of: [{ type: 'string' }] },
        { name: 'bestFor',    title: 'Best For (kaun lein)', type: 'string' },
      ]})],
    }),

    // ── SUPPLEMENT TIMING ───────────────────────────────────────────────
    defineField({
      group: 'supplement', name: 'supplementTiming', title: 'Supplement Kab Aur Kaise Khaye',
      type: 'object',
      fields: [
        { name: 'bestTime',       title: 'Best Time (subah / raat / khane ke saath)', type: 'string' },
        { name: 'withFood',       title: 'Khali Pet Ya Khane Ke Baad', type: 'string' },
        { name: 'takenWith',      title: 'Paani Se Ya Kisi Aur Ke Saath', type: 'string' },
        { name: 'absorptionTips', title: 'Absorption Badhane Ke Tips', type: 'array', of: [{ type: 'string' }] },
        { name: 'avoidWith',      title: 'Kiske Saath NAHI Lena', type: 'array', of: [{ type: 'string' }] },
      ],
    }),

    // ── DRUG INTERACTIONS ───────────────────────────────────────────────
    defineField({
      group: 'safety', name: 'drugInteractions', title: 'Drug Interactions — Kaunsi Medicine Ke Saath Nahi',
      type: 'array',
      of: [defineArrayMember({ type: 'object', fields: [
        { name: 'medicineName', title: 'Medicine / Drug Naam', type: 'string' },
        { name: 'reason',       title: 'Reason (1 line)',       type: 'string' },
      ]})],
    }),

    // ── COMBINATION GUIDE ────────────────────────────────────────────────
    defineField({
      group: 'safety', name: 'combinations', title: 'Combination Guide — Kya Saath Mein Le Sakte',
      type: 'object',
      fields: [
        { name: 'beneficial',   title: 'Saath Lene Se Fayda', type: 'array',
          of: [defineArrayMember({ type: 'object', fields: [
            { name: 'nutrient', title: 'Vitamin / Mineral', type: 'string' },
            { name: 'reason',   title: 'Kyun Fayda (1 line)', type: 'string' },
          ]})] },
        { name: 'avoid',        title: 'Saath Nahi Lena Chahiye', type: 'array',
          of: [defineArrayMember({ type: 'object', fields: [
            { name: 'nutrient', title: 'Vitamin / Mineral', type: 'string' },
            { name: 'reason',   title: 'Kyun Nahi (1 line)', type: 'string' },
          ]})] },
        { name: 'timingGuide',  title: 'Time Gap Guide (subah/raat/gap between)', type: 'text', rows: 3 },
      ],
    }),

    // ── TOXICITY ────────────────────────────────────────────────────────
    defineField({
      group: 'safety', name: 'toxicity', title: 'Zyada Lene Ke Nuksan — Toxicity',
      type: 'object',
      fields: [
        { name: 'upperLimit',   title: 'Upper Limit (UL) Kitna Hai', type: 'string' },
        { name: 'sideEffects',  title: 'Side Effects (zyada lene pe)', type: 'array', of: [{ type: 'string' }] },
        { name: 'whenSerious',  title: 'Kab Serious Ho Jaata Hai', type: 'text', rows: 2 },
      ],
    }),

    // ── TIMELINE ────────────────────────────────────────────────────────
    defineField({
      group: 'safety', name: 'timeline', title: 'Kitne Din Mein Fark Dikhega',
      type: 'object',
      fields: [
        { name: 'bloodLevelTime',   title: 'Blood Level Kab Badhega', type: 'string' },
        { name: 'symptomsTime',     title: 'Symptoms Mein Fark Kab Dikhega', type: 'string' },
        { name: 'fullRecoveryTime', title: 'Full Recovery Mein Kitna Time', type: 'string' },
        { name: 'repeatTestTime',   title: 'Test Repeat Kab Karaye', type: 'string' },
        { name: 'patientNote',      title: 'Patient Ke Liye Note (patience wali line)', type: 'text', rows: 2 },
      ],
    }),

    // ── LINKED DISEASES ─────────────────────────────────────────────────
    defineField({
      group: 'linked', name: 'linkedDiseases', title: 'Linked Diseases — Kami Se Kaunsi Bimariyan',
      type: 'array',
      of: [defineArrayMember({ type: 'object', fields: [
        { name: 'diseaseName',  title: 'Disease Name',                             type: 'string' },
        { name: 'diseaseSlug',  title: 'Disease Slug',                             type: 'string' },
        { name: 'isAvailable',  title: 'Page Available Hai?',                      type: 'boolean' },
        { name: 'connection',   title: 'Connection (1 line — kyun linked hai)',     type: 'string' },
      ]})],
    }),

    // ── LINKED SYMPTOMS ─────────────────────────────────────────────────
    defineField({
      group: 'linked', name: 'linkedSymptoms', title: 'Linked Symptoms — Related Symptom Pages',
      type: 'array',
      of: [defineArrayMember({ type: 'object', fields: [
        { name: 'symptomName', title: 'Symptom Name', type: 'string' },
        { name: 'symptomSlug', title: 'Symptom Slug', type: 'string' },
      ]})],
    }),

    // ── LINKED LAB TESTS ────────────────────────────────────────────────
    defineField({
      group: 'linked', name: 'relatedTests', title: 'Related Lab Tests',
      type: 'array',
      of: [defineArrayMember({ type: 'object', fields: [
        { name: 'testName',    title: 'Test Name',                type: 'string' },
        { name: 'testSlug',    title: 'Test Slug',                type: 'string' },
        { name: 'isAvailable', title: 'Page Available Hai?',      type: 'boolean' },
      ]})],
    }),

    // ── RELATED VITAMINS ────────────────────────────────────────────────
    defineField({
      group: 'linked', name: 'relatedVitamins', title: 'Related Vitamins / Minerals',
      type: 'array',
      of: [defineArrayMember({ type: 'object', fields: [
        { name: 'vitaminName', title: 'Vitamin Name', type: 'string' },
        { name: 'vitaminSlug', title: 'Vitamin Slug', type: 'string' },
      ]})],
    }),

    // ── HOMEOPATHIC ALTERNATIVES ────────────────────────────────────────
    defineField({
      group: 'homeopathy', name: 'homeopathicAlternatives', title: 'Homeopathic Alternatives (150-200 words max — potency NAHI likhna)',
      type: 'array',
      of: [defineArrayMember({ type: 'object', fields: [
        { name: 'medicineName', title: 'Medicine Naam',                         type: 'string' },
        { name: 'patientType',  title: 'Kis Type Ke Patient Ke Liye (1 line)',  type: 'string' },
        { name: 'howItHelps',   title: 'Ye Kaise Help Karta Hai (1-2 lines)',   type: 'text', rows: 2 },
      ]})],
    }),

    // ── MYTHS ───────────────────────────────────────────────────────────
    defineField({
      group: 'faqs', name: 'myths', title: 'Myths & Galat Fehmiyan (4-5 myths)',
      type: 'array',
      of: [defineArrayMember({ type: 'object', fields: [
        { name: 'myth',  title: 'Myth', type: 'string' },
        { name: 'truth', title: 'Sahi Baat', type: 'text', rows: 3 },
      ]})],
    }),

    // ── FAQs ────────────────────────────────────────────────────────────
    defineField({
      group: 'faqs', name: 'faqs', title: 'FAQs (15-20 questions — Google search data se)',
      type: 'array',
      of: [defineArrayMember({ type: 'object', fields: [
        { name: 'question', title: 'Question (Hinglish)', type: 'string' },
        { name: 'answer',   title: 'Answer',              type: 'text', rows: 4 },
      ]})],
    }),
  ],

  preview: {
    select: { title: 'name', subtitle: 'category' },
    prepare({ title, subtitle }: { title?: string; subtitle?: string }) {
      return { title, subtitle: `💊 ${subtitle || 'Vitamin'}` }
    },
  },
})
