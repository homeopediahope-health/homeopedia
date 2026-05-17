import { defineType, defineField, defineArrayMember } from 'sanity'

export const symptom = defineType({
  name: 'symptom',
  title: 'Symptom / Lakshan',
  type: 'document',
  groups: [
    { name: 'basic',      title: '1. Basic Info' },
    { name: 'seo',        title: '2. SEO' },
    { name: 'opening',    title: '3. Opening' },
    { name: 'severity',   title: '4. Severity Scale' },
    { name: 'timeline',   title: '5. Timeline' },
    { name: 'causes',     title: '6. Causes' },
    { name: 'home',       title: '7. Ghar Pe Kya Karein' },
    { name: 'homeopathy', title: '8. Homeopathy Section' },
    { name: 'faqs',       title: '9. FAQs' },
    { name: 'related',    title: '10. Related' },
    { name: 'extras',     title: '11. Sources & Extras' },
  ],

  fields: [
    // ── BASIC INFO ──────────────────────────────────────────────
    defineField({ group: 'basic', name: 'name',         title: 'Symptom Name (English)', type: 'string', validation: r => r.required() }),
    defineField({ group: 'basic', name: 'hindiName',    title: 'Hindi / Urdu Naam',      type: 'string' }),
    defineField({ group: 'basic', name: 'hinglishName', title: 'Hinglish Name (log kya search karte hain)', type: 'string' }),
    defineField({ group: 'basic', name: 'slug',         title: 'URL Slug', type: 'slug', options: { source: 'name' }, validation: r => r.required() }),
    defineField({
      group: 'basic', name: 'bodySystem', title: 'Body System', type: 'string',
      options: { list: ['Digestive', 'Neurological', 'Skin', 'Joints', 'Respiratory', "Women's", 'ENT', 'Eye', 'General', "Men's"] },
    }),

    // ── SEO ─────────────────────────────────────────────────────
    defineField({ group: 'seo', name: 'metaTitle',       title: 'SEO Title (60 chars max)', type: 'string' }),
    defineField({ group: 'seo', name: 'metaDescription', title: 'SEO Description (150 chars max)', type: 'text', rows: 2 }),
    defineField({ group: 'seo', name: 'publishedAt',     title: 'Publish Date', type: 'datetime' }),

    // ── OPENING ─────────────────────────────────────────────────
    defineField({ group: 'opening', name: 'whatIsThis',       title: 'Ye Symptom Kya Hai (3-4 lines)', type: 'text', rows: 4 }),
    defineField({ group: 'opening', name: 'indiaContext',     title: 'India Context — Kitne Logon Ko Hota Hai (1-2 lines)', type: 'text', rows: 2 }),
    defineField({ group: 'opening', name: 'indiaContextSource', title: 'Source (WHO / ICMR / Lancet etc.)', type: 'string' }),

    // ── SEVERITY SCALE ──────────────────────────────────────────
    defineField({
      group: 'severity', name: 'severityLevel1', title: '🟢 Level 1 — Ghar Pe Manage Karo',
      type: 'array', of: [{ type: 'string' }],
    }),
    defineField({
      group: 'severity', name: 'severityLevel2', title: '🟡 Level 2 — Is Hafte Doctor Se Milein',
      type: 'array', of: [{ type: 'string' }],
    }),
    defineField({
      group: 'severity', name: 'severityLevel3', title: '🔴 Level 3 — Turant Hospital Jaao',
      type: 'array', of: [{ type: 'string' }],
    }),

    // ── TIMELINE ────────────────────────────────────────────────
    defineField({ group: 'timeline', name: 'timeline3Days',    title: '⏱ Nayi Takleef — 1 se 3 Din',       type: 'text', rows: 3 }),
    defineField({ group: 'timeline', name: 'timeline4Weeks',   title: '📅 Chalti Aa Rahi — 1 se 4 Hafte',  type: 'text', rows: 3 }),
    defineField({ group: 'timeline', name: 'timelineMonthPlus', title: '🗓 Purani Problem — 1 Mahina+',     type: 'text', rows: 3 }),

    // ── CAUSES ──────────────────────────────────────────────────
    // Part A — Lifestyle
    defineField({
      group: 'causes', name: 'lifestyleCauses', title: 'Part A — Aadat aur Lifestyle Se (3-4)',
      type: 'array',
      of: [defineArrayMember({ type: 'object', fields: [
        { name: 'causeName',      title: 'Cause Name',                     type: 'string' },
        { name: 'mechanism',      title: 'Kaise Hota Hai (mechanism)',      type: 'text', rows: 2 },
        { name: 'howToIdentify',  title: 'Patient Isko Kaise Pehchane',    type: 'string' },
      ]})],
    }),

    // Part B — Medical causes
    defineField({
      group: 'causes', name: 'medicalCauses', title: 'Part B — Bimari Ki Wajah Se (4-6 diseases)',
      type: 'array',
      of: [defineArrayMember({ type: 'object', fields: [
        { name: 'diseaseName',          title: 'Disease Name (English)',              type: 'string' },
        { name: 'diseaseHindiName',     title: 'Hindi Naam',                          type: 'string' },
        { name: 'howSymptomPresents',   title: 'Is Bimari Mein Symptom Kaisa Hota Hai', type: 'text', rows: 2 },
        { name: 'howToIdentify',        title: 'Pehchaan Kaise Karein',               type: 'string' },
        { name: 'homeopediaSlug',       title: 'Homeopedia Disease Slug (e.g. psoriasis)', type: 'string' },
        { name: 'isAvailable',          title: 'Page Available Hai?', type: 'boolean' },
      ]})],
    }),

    // Part C — Red flags
    defineField({
      group: 'causes', name: 'redFlags', title: 'Part C — Red Flags (Serious Causes)',
      type: 'array', of: [{ type: 'string' }],
    }),

    // ── GHAR PE KYA KAREIN ──────────────────────────────────────
    defineField({
      group: 'home', name: 'homeSteps', title: 'Safe Comfort Steps (4-5) — Sirf Physical Steps, Koi Medicine Nahi',
      type: 'array',
      of: [defineArrayMember({ type: 'object', fields: [
        { name: 'action',       title: 'Step / Action',      type: 'string' },
        { name: 'whyItWorks',   title: 'Kyun Kaam Karta Hai', type: 'string' },
      ]})],
    }),

    // ── HOMEOPATHY SECTION ───────────────────────────────────────
    defineField({ group: 'homeopathy', name: 'homeopathyIndividualization', title: 'Angle 1 — Individualization (2-3 lines)', type: 'text', rows: 3 }),
    defineField({ group: 'homeopathy', name: 'homeopathyRootCause',        title: 'Angle 2 — Root Cause (2-3 lines)',        type: 'text', rows: 3 }),
    defineField({ group: 'homeopathy', name: 'homeopathySafety',           title: 'Angle 3 — Safety (1-2 lines, agar relevant)', type: 'text', rows: 2 }),

    defineField({
      group: 'homeopathy', name: 'isForYouIf', title: 'Ye Approach Aapke Liye Hai Agar (3 points)',
      type: 'array', of: [{ type: 'string' }],
    }),
    defineField({
      group: 'homeopathy', name: 'notForYouIf', title: 'Ye Approach Abhi Nahi Hai Agar (2 points)',
      type: 'array', of: [{ type: 'string' }],
    }),

    // Linked disease pages in homeopathy section
    defineField({
      group: 'homeopathy', name: 'homeopathyDiseaseLinks', title: 'Disease Page Links (2-3, Section 6 ke end mein)',
      type: 'array',
      of: [defineArrayMember({ type: 'object', fields: [
        { name: 'diseaseName', title: 'Disease Name (Hinglish anchor text)', type: 'string' },
        { name: 'diseaseSlug', title: 'Disease Slug (e.g. psoriasis)',       type: 'string' },
      ]})],
    }),

    // Section 7 — In Bimariyoon Mein (visual cards)
    defineField({
      group: 'homeopathy', name: 'linkedDiseaseCards', title: 'Section 7 — In Bimariyoon Mein Ye Symptom Hota Hai (3-6 cards)',
      type: 'array',
      of: [defineArrayMember({ type: 'object', fields: [
        { name: 'title',     title: 'Disease Title',    type: 'string' },
        { name: 'hindiName', title: 'Hindi Naam',       type: 'string' },
        { name: 'slug',      title: 'Disease Slug',     type: 'string' },
      ]})],
    }),

    // ── FAQs ────────────────────────────────────────────────────
    defineField({
      group: 'faqs', name: 'faqs', title: 'FAQs (12 core, max 15)',
      type: 'array',
      of: [defineArrayMember({ type: 'object', fields: [
        { name: 'question', title: 'Question (Hinglish)',  type: 'string' },
        { name: 'answer',   title: 'Answer',               type: 'text', rows: 5 },
        {
          name: 'faqType', title: 'FAQ Type', type: 'string',
          options: { list: [
            { value: 'normal-vs-serious', title: 'Type 1 — Normal vs Serious' },
            { value: 'duration',          title: 'Type 2 — Duration' },
            { value: 'common-cause',      title: 'Type 3 — Common Cause' },
            { value: 'ghar-wait',         title: 'Type 4 — Ghar Pe Wait' },
            { value: 'homeopathy',        title: 'Type 5 — Homeopathy' },
            { value: 'test-diagnosis',    title: 'Type 6 — Test/Diagnosis' },
            { value: 'bacchon-mein',      title: 'Type 7 — Bacchon Mein' },
            { value: 'pregnancy',         title: 'Type 8 — Pregnancy Mein' },
            { value: 'india-specific',    title: 'Type 9 — India Specific' },
            { value: 'baar-baar',         title: 'Type 10 — Baar Baar Hona' },
            { value: 'permanent',         title: 'Type 11 — Permanent Solution' },
            { value: 'lifestyle',         title: 'Type 12 — Lifestyle/Diet' },
          ]},
        },
      ]})],
    }),

    // ── RELATED SYMPTOMS ────────────────────────────────────────
    defineField({
      group: 'related', name: 'relatedSymptoms', title: 'Related Symptoms (3-4)',
      type: 'array',
      of: [defineArrayMember({ type: 'object', fields: [
        { name: 'name',      title: 'Symptom Name',   type: 'string' },
        { name: 'hindiName', title: 'Hindi Naam',     type: 'string' },
        { name: 'slug',      title: 'Symptom Slug',   type: 'string' },
      ]})],
    }),

    // ── SOURCES & EXTRAS ────────────────────────────────────────
    defineField({
      group: 'extras', name: 'sources', title: 'Sources (minimum 3 — WHO / Mayo / NCBI / ICMR)',
      type: 'array',
      of: [defineArrayMember({ type: 'object', fields: [
        { name: 'name', title: 'Source Name', type: 'string' },
        { name: 'year', title: 'Year',        type: 'string' },
        { name: 'url',  title: 'URL',         type: 'string' },
      ]})],
    }),
    defineField({ group: 'extras', name: 'youtubeUrl',           title: 'YouTube Video URL (optional)',                     type: 'url' }),
    defineField({ group: 'extras', name: 'quickFactSymptom',     title: 'Quick Fact — Symptom',                            type: 'string' }),
    defineField({ group: 'extras', name: 'quickFactIndiaStats',  title: 'Quick Fact — India Mein Kitne Logon Ko',          type: 'string' }),
    defineField({ group: 'extras', name: 'quickFactDoctorWhen',  title: 'Quick Fact — Kab Doctor Zaruri',                  type: 'string' }),
    defineField({ group: 'extras', name: 'reviewDate',           title: 'Review Date (e.g. May 2026)',                     type: 'string' }),
    defineField({ group: 'extras', name: 'doctorNote',           title: 'Doctor Note — Dr. Shadab Personal Observation (3-4 lines, E-E-A-T)', type: 'text', rows: 4 }),
  ],

  preview: {
    select: { title: 'name', subtitle: 'hindiName' },
  },
})
