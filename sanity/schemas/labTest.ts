import { defineType, defineField, defineArrayMember } from 'sanity'

export const labTest = defineType({
  name: 'labTest',
  title: 'Lab Test / Jaanch',
  type: 'document',
  groups: [
    { name: 'basic',     title: '1. Basic Info' },
    { name: 'seo',       title: '2. SEO' },
    { name: 'opening',   title: '3. Introduction' },
    { name: 'whenWhy',   title: '4. Kab & Kyun' },
    { name: 'ranges',    title: '5. Normal Range + Pregnancy' },
    { name: 'highlow',   title: '6. High / Low Matlab' },
    { name: 'danger',    title: '7. Doctor Ko Dikhaye' },
    { name: 'prep',      title: '8. Taiyari + Sample' },
    { name: 'myths',     title: '9. Myths + Comparison + Repeat' },
    { name: 'linked',    title: '10. Linked Diseases + Tests' },
    { name: 'homeopathy', title: '11. Homeopathy Angle' },
    { name: 'faqs',      title: '12. FAQs' },
  ],

  fields: [
    // ── BASIC INFO ──────────────────────────────────────────────
    defineField({ group: 'basic', name: 'name',      title: 'Test Name (English)', type: 'string', validation: r => r.required() }),
    defineField({ group: 'basic', name: 'fullForm',  title: 'Full Form (agar abbreviation hai)', type: 'string' }),
    defineField({ group: 'basic', name: 'hindiName', title: 'Hindi / Hinglish Naam', type: 'string' }),
    defineField({ group: 'basic', name: 'slug',      title: 'URL Slug', type: 'slug', options: { source: 'name' }, validation: r => r.required() }),
    defineField({
      group: 'basic', name: 'category', title: 'Test Category', type: 'string',
      options: { list: ['Blood', 'Urine', 'Hormone', 'Stool', 'Imaging', 'Other'] },
    }),

    // ── SEO ─────────────────────────────────────────────────────
    defineField({ group: 'seo', name: 'metaTitle',       title: 'SEO Title (60 chars max)', type: 'string' }),
    defineField({ group: 'seo', name: 'metaDescription', title: 'SEO Description (150 chars) — "verified", "doctor-reviewed" zaroor daalo', type: 'text', rows: 2 }),
    defineField({ group: 'seo', name: 'reviewDate',      title: 'Review Date (e.g. May 2026)', type: 'string' }),

    // ── INTRODUCTION (Section 2) ────────────────────────────────
    defineField({ group: 'opening', name: 'heroText', title: 'Introduction — Ye Test Kya Hai (150-200 words, full form + kya measure karta hai)', type: 'text', rows: 8 }),

    // ── KAB & KYUN (Sections 3) ────────────────────────────────
    defineField({
      group: 'whenWhy', name: 'whenToTest', title: 'Ye Test Kab Karwate Hain — Symptoms / Situations (bullet list)',
      type: 'array', of: [{ type: 'string' }],
    }),
    defineField({ group: 'whenWhy', name: 'whatItDetects', title: 'Is Test Se Kya Detect Hota Hai — Kaunsi Bimariyaan', type: 'text', rows: 4 }),

    // ── NORMAL RANGE TABLE (Section 4) ⭐ ───────────────────────
    defineField({
      group: 'ranges', name: 'normalRanges', title: 'Normal Range Table (5 columns: Parameter | Range | Unit | High Matlab | Low Matlab)',
      type: 'array',
      of: [defineArrayMember({ type: 'object', fields: [
        { name: 'parameter',   title: 'Parameter (e.g. Male Under 50)', type: 'string' },
        { name: 'normalRange', title: 'Normal Range (e.g. 0-15)',        type: 'string' },
        { name: 'unit',        title: 'Unit (e.g. mm/hr, mg/dL)',       type: 'string' },
        { name: 'highBrief',   title: 'High Matlab — Brief (2-3 words)', type: 'string' },
        { name: 'lowBrief',    title: 'Low Matlab — Brief (2-3 words)',  type: 'string' },
      ]})],
    }),

    // ── PREGNANCY (Section 5) ────────────────────────────────────
    defineField({
      group: 'ranges', name: 'pregnancyInfo', title: 'Pregnancy Mein Ye Test',
      type: 'object',
      fields: [
        { name: 'applicable',   title: 'Kya Pregnancy Mein Ye Test Hota Hai?', type: 'boolean' },
        { name: 'normalRange',  title: 'Pregnancy Mein Normal Range (e.g. 0-70 mm/hr)', type: 'string' },
        { name: 'riskNote',     title: 'Koi Risk Hai Pregnancy Mein?', type: 'text' },
        { name: 'whenDoctor',   title: 'Doctor Kab Likhta Hai Pregnancy Mein', type: 'text' },
      ],
    }),

    // ── HIGH HONE KA MATLAB (Section 6) ⭐ ─────────────────────
    defineField({
      group: 'highlow', name: 'highMeans', title: 'High Hone Ke Karan — Bullet List',
      type: 'array', of: [{ type: 'string' }],
    }),
    defineField({ group: 'highlow', name: 'highReassurance', title: 'Reassurance Line — "Ghabrao mat..." type', type: 'text', rows: 2 }),

    // ── LOW HONE KA MATLAB (Section 7) ──────────────────────────
    defineField({
      group: 'highlow', name: 'lowMeans', title: 'Low Hone Ke Karan — Bullet List',
      type: 'array', of: [{ type: 'string' }],
    }),
    defineField({ group: 'highlow', name: 'lowConcern', title: 'Kab Concern Karna Chahiye (Low mein)', type: 'text', rows: 2 }),

    // ── DOCTOR KO DIKHAYE (Section 8) ───────────────────────────
    defineField({
      group: 'danger', name: 'redFlags', title: 'Danger Signs — Ye Ho Toh Turant Doctor',
      type: 'array', of: [{ type: 'string' }],
    }),
    defineField({ group: 'danger', name: 'emergencyLevel',    title: 'Kitna High/Low Toh Emergency?',                      type: 'text', rows: 2 }),
    defineField({ group: 'danger', name: 'selfTreatWarning',  title: 'Warning Line — "Report dekhkar khud treatment mat karo"', type: 'text', rows: 2 }),

    // ── TEST KI TAIYARI (Section 9) ⭐ ──────────────────────────
    defineField({
      group: 'prep', name: 'preparation', title: 'Test Ki Taiyari — Kya Karna Hai Pehle',
      type: 'object',
      fields: [
        { name: 'fastingRequired', title: 'Fasting Chahiye? (Khali pet)',         type: 'boolean' },
        { name: 'fastingHours',    title: 'Kitne Ghante Khali Pet (agar fasting)', type: 'number' },
        { name: 'bestTime',        title: 'Best Time Kab (e.g. Subah 7-9 baje)',  type: 'string' },
        { name: 'whatToEat',       title: 'Kya Kha Sakte Hain Test Se Pehle',     type: 'text' },
        { name: 'whatToAvoid',     title: 'Kya Nahi Khana/Karna Test Se Pehle',   type: 'text' },
        { name: 'medicineNote',    title: 'Koi Medicine Band Karni Hai?',          type: 'text' },
        { name: 'accuracyNote',    title: 'Accurate Report Ke Liye Kya Dhyan Rakhein', type: 'text' },
      ],
    }),

    // ── SAMPLE INFO (Section 10) ─────────────────────────────────
    defineField({
      group: 'prep', name: 'sampleInfo', title: 'Sample Type & Report Time',
      type: 'object',
      fields: [
        { name: 'sampleType',      title: 'Sample Kya Dena Hai (Blood/Urine/Stool/etc.)', type: 'string' },
        { name: 'sampleAmount',    title: 'Kitna Sample Chahiye',                         type: 'string' },
        { name: 'reportTime',      title: 'Report Kitne Time Mein Aati Hai',              type: 'string' },
        { name: 'onlineAvailable', title: 'Online Report Milti Hai?',                     type: 'boolean' },
      ],
    }),

    // ── MYTHS (Section 11) ───────────────────────────────────────
    defineField({
      group: 'myths', name: 'myths', title: 'Myths & Galat Fehmiyan (minimum 4-5)',
      type: 'array',
      of: [defineArrayMember({ type: 'object', fields: [
        { name: 'myth',  title: 'Myth — Log Kya Sochte Hain', type: 'string' },
        { name: 'truth', title: 'Sahi Baat — Kya Sach Hai',   type: 'text', rows: 2 },
      ]})],
    }),

    // ── COMPARISON (Section 12) ──────────────────────────────────
    defineField({
      group: 'myths', name: 'comparisons', title: 'Test Comparison (vs Other Tests)',
      type: 'array',
      of: [defineArrayMember({ type: 'object', fields: [
        { name: 'comparedTest',     title: 'Compared Test Name (e.g. CRP)',          type: 'string' },
        { name: 'comparedTestSlug', title: 'Compared Test Slug (agar page hai)',      type: 'string' },
        { name: 'differencePoints', title: 'Key Differences (3-4 bullet points)',
          type: 'array', of: [{ type: 'string' }] },
      ]})],
    }),

    // ── REPEAT INFO (Section 13) ─────────────────────────────────
    defineField({ group: 'myths', name: 'repeatInfo', title: 'Repeat Kab Karaye — Follow-up Timing', type: 'text', rows: 3 }),

    // ── LINKED DISEASES (Section 14) ────────────────────────────
    defineField({
      group: 'linked', name: 'linkedDiseases', title: 'Linked Diseases — Inme Ye Test Hota Hai',
      type: 'array',
      of: [defineArrayMember({ type: 'object', fields: [
        { name: 'diseaseName', title: 'Disease Name',                              type: 'string' },
        { name: 'diseaseSlug', title: 'Disease Slug (e.g. thyroid, psoriasis)',    type: 'string' },
        { name: 'isAvailable', title: 'Page Available Hai?',                      type: 'boolean' },
      ]})],
    }),

    // ── RELATED TESTS (Section 15) ───────────────────────────────
    defineField({
      group: 'linked', name: 'relatedTests', title: 'Related Tests — Saath Mein Jo Tests Hote Hain',
      type: 'array',
      of: [defineArrayMember({ type: 'object', fields: [
        { name: 'testName', title: 'Test Name',                          type: 'string' },
        { name: 'testSlug', title: 'Test Slug (agar page hai)',          type: 'string' },
        { name: 'isAvailable', title: 'Page Available Hai?',            type: 'boolean' },
      ]})],
    }),

    // ── HOMEOPATHY ANGLE (Section 16) ────────────────────────────
    defineField({
      group: 'homeopathy', name: 'homeopathyAngle',
      title: 'Homeopathy Connection (100-150 words MAX — overclaim nahi, honest brief mention)',
      type: 'text', rows: 5,
    }),

    // ── FAQs (Section 17) ────────────────────────────────────────
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
      return { title, subtitle: `🧪 ${subtitle || 'Lab Test'}` }
    },
  },
})
