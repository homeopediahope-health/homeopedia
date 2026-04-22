import { defineType, defineField, defineArrayMember } from 'sanity'

export const medicine = defineType({
  name: 'medicine',
  title: 'Medicine / Dawa',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Medicine Name', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', title: 'URL', type: 'slug', options: { source: 'name' }, validation: r => r.required() }),
    defineField({ name: 'commonUses', title: 'Common Uses (short)', type: 'string' }),
    defineField({ name: 'metaDescription', title: 'SEO Description', type: 'text', rows: 2 }),
    defineField({ name: 'source', title: 'Source (Plant/Mineral/Animal)', type: 'string' }),
    defineField({ name: 'heroText', title: 'Intro (50 words)', type: 'text', rows: 3 }),
    defineField({
      name: 'keyIndications',
      title: 'Key Indications',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'potencies',
      title: 'Available Potencies',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'usedFor',
      title: 'Used For (Diseases)',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          { name: 'disease', title: 'Disease', type: 'string' },
          { name: 'indication', title: 'When to use', type: 'string' },
        ],
      })],
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
    select: { title: 'name', subtitle: 'commonUses' },
  },
})
