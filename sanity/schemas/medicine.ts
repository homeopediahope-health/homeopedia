import { defineType, defineField, defineArrayMember } from 'sanity'

export const medicine = defineType({
  name: 'medicine',
  title: 'Medicine / Dawa',
  type: 'document',
  fields: [
    // ── Basic ──
    defineField({ name: 'name',            title: 'Medicine Name',          type: 'string',   validation: r => r.required() }),
    defineField({ name: 'slug',            title: 'URL Slug',               type: 'slug',     options: { source: 'name' }, validation: r => r.required() }),
    defineField({ name: 'category',        title: 'Category',               type: 'string',   options: { list: [{ title: 'Plant-based', value: 'plant' }, { title: 'Mineral', value: 'mineral' }, { title: 'Animal-source', value: 'animal' }, { title: 'Nosode', value: 'nosode' }] } }),
    defineField({ name: 'alt',             title: 'Alternative Name / Nickname', type: 'string' }),
    defineField({ name: 'commonUses',      title: 'Common Uses (short)',    type: 'string' }),
    defineField({ name: 'source',          title: 'Source (e.g. Mountain plant, Europe)', type: 'string' }),
    defineField({ name: 'readMin',         title: 'Read Time (minutes)',    type: 'number' }),
    defineField({ name: 'hasVideo',        title: 'Has Video?',             type: 'boolean' }),
    defineField({ name: 'severity',        title: 'Severity / Commonness',  type: 'string',   options: { list: ['common', 'moderate', 'advanced'] } }),
    defineField({ name: 'metaTitle',       title: 'SEO Meta Title',         type: 'string' }),
    defineField({ name: 'metaDescription', title: 'SEO Meta Description',   type: 'text',     rows: 2 }),

    // ── Content ──
    defineField({ name: 'intro', title: 'Introduction (Hinglish paragraph)', type: 'text', rows: 5 }),

    defineField({
      name: 'facts',
      title: 'Did-You-Know Facts (4 cards)',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          defineField({ name: 'ic', title: 'Icon (emoji)', type: 'string' }),
          defineField({ name: 't',  title: 'Title',        type: 'string' }),
          defineField({ name: 'd',  title: 'Description',  type: 'string' }),
        ],
      })],
    }),

    defineField({
      name: 'keynotes',
      title: 'Keynotes (⭐ bullet cards)',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          defineField({ name: 'ic', title: 'Icon (emoji)', type: 'string' }),
          defineField({ name: 't',  title: 'Keynote title', type: 'string' }),
          defineField({ name: 'd',  title: 'Detail',        type: 'string' }),
        ],
      })],
    }),

    defineField({
      name: 'keyUses',
      title: 'Key Uses (2-col grid)',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          defineField({ name: 'ic', title: 'Icon (emoji)', type: 'string' }),
          defineField({ name: 't',  title: 'Use title',   type: 'string' }),
          defineField({ name: 'd',  title: 'Detail',      type: 'string' }),
        ],
      })],
    }),

    // ── Potency & Dosage ──
    defineField({
      name: 'potency',
      title: 'Potency Guide',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          defineField({ name: 'p',    title: 'Potency (e.g. 30C, 200C)', type: 'string' }),
          defineField({ name: 'how',  title: 'How it acts',              type: 'string' }),
          defineField({ name: 'when', title: 'When to use',              type: 'string' }),
        ],
      })],
    }),

    defineField({ name: 'dosage', title: 'General Dosage Info (Hinglish)', type: 'text', rows: 4 }),

    // ── Symptoms ──
    defineField({
      name: 'mindSymptoms',
      title: 'Mind Symptoms (2-col grid)',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          defineField({ name: 't', title: 'Symptom title', type: 'string' }),
          defineField({ name: 'd', title: 'Detail',        type: 'string' }),
        ],
      })],
    }),

    defineField({
      name: 'physicalSymptoms',
      title: 'Physical Symptoms (head to toe)',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          defineField({ name: 'area',     title: 'Body Area (e.g. Head, Eyes)', type: 'string' }),
          defineField({ name: 'symptoms', title: 'Symptoms list',               type: 'array', of: [{ type: 'string' }] }),
        ],
      })],
    }),

    defineField({
      name: 'modalities',
      title: 'Modalities',
      type: 'object',
      fields: [
        defineField({ name: 'worse',  title: 'Worse from (list)',  type: 'array', of: [{ type: 'string' }] }),
        defineField({ name: 'better', title: 'Better from (list)', type: 'array', of: [{ type: 'string' }] }),
      ],
    }),

    // ── Links ──
    defineField({
      name: 'indications',
      title: 'Disease Indications (linked)',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          defineField({ name: 'diseaseSlug', title: 'Disease slug (for /diseases/[slug])', type: 'string' }),
          defineField({ name: 'diseaseName', title: 'Disease display name',               type: 'string' }),
          defineField({ name: 'why',         title: 'Why indicated (short)',              type: 'string' }),
        ],
      })],
    }),

    defineField({
      name: 'related',
      title: 'Related Medicines',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          defineField({ name: 'medicineSlug', title: 'Medicine slug',         type: 'string' }),
          defineField({ name: 'medicineName', title: 'Medicine display name', type: 'string' }),
        ],
      })],
    }),

    // ── Extra ──
    defineField({ name: 'foodRestrictions', title: 'Food Restrictions (Hinglish)', type: 'text', rows: 3 }),
    defineField({ name: 'pregnancy',        title: 'Pregnancy & Children note',   type: 'text', rows: 3 }),

    defineField({
      name: 'comparisons',
      title: 'Comparison Tables (vs other medicines)',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          defineField({ name: 'n', title: 'Comparison title (e.g. Arnica vs Rhus Tox)', type: 'string' }),
          defineField({
            name: 'rows',
            title: 'Rows',
            type: 'array',
            of: [defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'factor',        title: 'Factor',          type: 'string' }),
                defineField({ name: 'medicineValue', title: 'This medicine',   type: 'string' }),
                defineField({ name: 'compareValue',  title: 'Other medicine',  type: 'string' }),
              ],
            })],
          }),
        ],
      })],
    }),

    defineField({
      name: 'myths',
      title: 'Myths & Facts',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          defineField({ name: 'q', title: 'Myth (question)',  type: 'string' }),
          defineField({ name: 'a', title: 'Fact (answer)',    type: 'text', rows: 3 }),
        ],
      })],
    }),

    defineField({ name: 'doctorTake', title: "Doctor's Take (Dr. Shadab quote)", type: 'text', rows: 4 }),

    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          defineField({ name: 'q', title: 'Question', type: 'string' }),
          defineField({ name: 'a', title: 'Answer',   type: 'text', rows: 3 }),
        ],
      })],
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'commonUses' },
  },
})
