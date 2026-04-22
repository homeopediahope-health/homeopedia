import { defineType, defineField, defineArrayMember } from 'sanity'

export const symptom = defineType({
  name: 'symptom',
  title: 'Symptom / Lakshan',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Symptom Name', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', title: 'URL', type: 'slug', options: { source: 'name' }, validation: r => r.required() }),
    defineField({ name: 'shortDescription', title: 'Short Description', type: 'text', rows: 2 }),
    defineField({ name: 'metaDescription', title: 'SEO Description', type: 'text', rows: 2 }),
    defineField({ name: 'heroText', title: 'Intro Text', type: 'text', rows: 3 }),
    defineField({
      name: 'possibleCauses',
      title: 'Possible Causes',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'relatedDiseases',
      title: 'Related Diseases (link)',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          { name: 'diseaseName', title: 'Disease Name', type: 'string' },
          { name: 'diseaseSlug', title: 'Disease URL slug', type: 'string' },
        ],
      })],
    }),
    defineField({
      name: 'homeopathyHelps',
      title: 'How Homeopathy Helps',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          { name: 'question', type: 'string' },
          { name: 'answer', type: 'text', rows: 3 },
        ],
      })],
    }),
    defineField({ name: 'publishedAt', title: 'Publish Date', type: 'datetime' }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'shortDescription' },
  },
})
