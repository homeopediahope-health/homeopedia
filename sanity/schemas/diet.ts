import { defineType, defineField, defineArrayMember } from 'sanity'

export const diet = defineType({
  name: 'diet',
  title: 'Diet Chart',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Diet Chart Title (English)', type: 'string', validation: r => r.required() }),
    defineField({ name: 'hindiName', title: 'Disease Name (Hindi/Urdu)', type: 'string' }),
    defineField({ name: 'slug', title: 'URL Slug', type: 'slug', options: { source: 'title' }, validation: r => r.required() }),
    defineField({ name: 'metaTitle', title: 'SEO Title', type: 'string' }),
    defineField({ name: 'metaDescription', title: 'SEO Description (150 chars)', type: 'text', rows: 2 }),
    defineField({ name: 'heroText', title: 'Intro Text (2-3 lines)', type: 'text', rows: 3 }),
    defineField({ name: 'category', title: 'Category', type: 'string', options: { list: ['Skin', 'Joints', 'Digestive', 'Mental', "Women's", 'Respiratory', 'Hair', 'Endocrine'] } }),
    defineField({ name: 'keyRule', title: 'Key Rule (1 line — hero tagline)', type: 'string' }),
    defineField({ name: 'relatedDiseaseSlug', title: 'Related Disease Slug (link to disease page)', type: 'string' }),
    defineField({
      name: 'dietInclude',
      title: 'Kya Khayein (Foods to Include)',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          { name: 'category', title: 'Category (e.g. Vegetables)', type: 'string' },
          { name: 'emoji', title: 'Emoji', type: 'string' },
          { name: 'items', title: 'Foods', type: 'array', of: [{ type: 'string' }] },
        ],
      })],
    }),
    defineField({
      name: 'dietAvoid',
      title: 'Kya Na Khayein (Foods to Avoid)',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          { name: 'category', title: 'Category', type: 'string' },
          { name: 'emoji', title: 'Emoji', type: 'string' },
          { name: 'items', title: 'Foods to Avoid', type: 'array', of: [{ type: 'string' }] },
        ],
      })],
    }),
    defineField({ name: 'dietTip', title: 'Pro Tip (Gold Box)', type: 'text', rows: 2 }),
    defineField({ name: 'dietNote', title: 'Important Note (Green Box)', type: 'text', rows: 2 }),
    defineField({
      name: 'weeklyPlan',
      title: 'Weekly Meal Plan (7 Din Ka Chart)',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          { name: 'day', title: 'Din (e.g. Somwar / Monday)', type: 'string' },
          { name: 'breakfast', title: 'Subah Ka Naashta', type: 'string' },
          { name: 'midMorning', title: 'Mid Morning (10-11 AM)', type: 'string' },
          { name: 'lunch', title: 'Dopahar Ka Khaana', type: 'string' },
          { name: 'evening', title: 'Shaam Ka Naashta (4-5 PM)', type: 'string' },
          { name: 'dinner', title: 'Raat Ka Khaana', type: 'string' },
        ],
      })],
    }),
    defineField({ name: 'youtubeUrl', title: 'YouTube Video URL (optional)', type: 'url' }),
    defineField({ name: 'publishedAt', title: 'Publish Date', type: 'datetime' }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'hindiName' },
  },
})
