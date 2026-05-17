import { defineType, defineField, defineArrayMember } from 'sanity'

const foodItemFields = [
  { name: 'food', title: 'Food Item', type: 'string' as const },
  { name: 'reason', title: 'Reason (disease-specific, 8-10 words)', type: 'string' as const },
]

export const diet = defineType({
  name: 'diet',
  title: 'Diet Chart',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Diet Chart Title (English)', type: 'string', validation: r => r.required() }),
    defineField({ name: 'hindiName', title: 'Disease Name (Hindi/Urdu)', type: 'string' }),
    defineField({ name: 'slug', title: 'URL Slug', type: 'slug', options: { source: 'title' }, validation: r => r.required() }),
    defineField({ name: 'relatedDiseaseSlug', title: 'Related Disease Slug', type: 'string' }),
    defineField({ name: 'category', title: 'Category', type: 'string', options: { list: ['Skin', 'Joints', 'Digestive', 'Mental', "Women's", 'Respiratory', 'Hair', 'Endocrine', 'Urinary', "Men's Health"] } }),
    defineField({ name: 'metaTitle', title: 'SEO Title (60 chars)', type: 'string' }),
    defineField({ name: 'metaDescription', title: 'SEO Description (150 chars)', type: 'text', rows: 2 }),
    defineField({ name: 'intro', title: 'Page Intro (2 lines)', type: 'text', rows: 3 }),

    // Eating habits
    defineField({
      name: 'eatingHabits',
      title: '3 Zaruri Aadatein',
      type: 'array',
      of: [defineArrayMember({ type: 'object', fields: [
        { name: 'habit', title: 'Habit', type: 'string' },
        { name: 'reason', title: 'Reason (disease-specific)', type: 'string' },
      ]})],
    }),

    // Green list (veg)
    defineField({
      name: 'vegGreenList',
      title: 'Green List — Kya Khayein (Veg)',
      type: 'array',
      of: [defineArrayMember({ type: 'object', fields: [
        { name: 'categoryName', title: 'Category Name', type: 'string' },
        { name: 'emoji', title: 'Emoji', type: 'string' },
        { name: 'items', title: 'Foods', type: 'array', of: [{ type: 'object', fields: foodItemFields }] },
      ]})],
    }),

    // Non-veg sections
    defineField({
      name: 'nonVegAllowed',
      title: 'Non-Veg — Kya Allowed Hai',
      type: 'array',
      of: [defineArrayMember({ type: 'object', fields: foodItemFields })],
    }),
    defineField({
      name: 'nonVegAvoid',
      title: 'Non-Veg — Kya Avoid Karein',
      type: 'array',
      of: [defineArrayMember({ type: 'object', fields: foodItemFields })],
    }),

    // Red list
    defineField({
      name: 'redList',
      title: 'Red List — Kya Na Khayein',
      type: 'array',
      of: [defineArrayMember({ type: 'object', fields: [
        { name: 'categoryName', title: 'Category Name', type: 'string' },
        { name: 'emoji', title: 'Emoji', type: 'string' },
        { name: 'items', title: 'Foods to Avoid', type: 'array', of: [{ type: 'object', fields: foodItemFields }] },
      ]})],
    }),

    // Daily meal plan
    defineField({
      name: 'dailyMealPlan',
      title: 'Ek Din Ka Meal Plan',
      type: 'array',
      of: [defineArrayMember({ type: 'object', fields: [
        { name: 'slotName', title: 'Slot Name (e.g. Nashta)', type: 'string' },
        { name: 'slotTime', title: 'Time (e.g. 8-9 AM)', type: 'string' },
        { name: 'slotEmoji', title: 'Emoji', type: 'string' },
        { name: 'vegOptions', title: 'Veg Options', type: 'array', of: [{ type: 'string' }] },
        { name: 'nonVegOption', title: 'Non-Veg Option (optional)', type: 'string' },
      ]})],
    }),

    // 4-day sample plan
    defineField({
      name: 'samplePlan4Day',
      title: '4 Din Ka Sample Plan',
      type: 'array',
      of: [defineArrayMember({ type: 'object', fields: [
        { name: 'day', title: 'Day Label (e.g. Din 1)', type: 'string' },
        { name: 'vegSubah', title: 'Veg — Subah', type: 'string' },
        { name: 'vegNashta', title: 'Veg — Nashta', type: 'string' },
        { name: 'vegDopahar', title: 'Veg — Dopahar', type: 'string' },
        { name: 'vegShaam', title: 'Veg — Shaam', type: 'string' },
        { name: 'vegRaat', title: 'Veg — Raat', type: 'string' },
        { name: 'nonVegNashta', title: 'Non-Veg — Nashta', type: 'string' },
        { name: 'nonVegDopahar', title: 'Non-Veg — Dopahar', type: 'string' },
        { name: 'nonVegRaat', title: 'Non-Veg — Raat', type: 'string' },
      ]})],
    }),

    // Special situations
    defineField({
      name: 'specialSituations',
      title: 'Special Situations',
      type: 'array',
      of: [defineArrayMember({ type: 'object', fields: [
        { name: 'situationType', title: 'Type', type: 'string', options: { list: ['flareUp', 'fasting', 'eatingOut', 'travel'] } },
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'emoji', title: 'Emoji', type: 'string' },
        { name: 'tips', title: 'Tips', type: 'array', of: [{ type: 'string' }] },
      ]})],
    }),

    // Boxes
    defineField({ name: 'proTip', title: 'Pro Tip (Gold Box)', type: 'text', rows: 3 }),
    defineField({ name: 'importantNote', title: 'Important Note (Green Box)', type: 'text', rows: 2 }),
    defineField({ name: 'homeopathyDiet', title: 'Homeopathy + Diet Connection (Blue Box)', type: 'text', rows: 2 }),

    // FAQs
    defineField({
      name: 'faqs',
      title: 'FAQs (min 10)',
      type: 'array',
      of: [defineArrayMember({ type: 'object', fields: [
        { name: 'question', title: 'Question', type: 'string' },
        { name: 'answer', title: 'Answer', type: 'text', rows: 4 },
      ]})],
    }),

    // Sources
    defineField({
      name: 'sources',
      title: 'Sources',
      type: 'array',
      of: [defineArrayMember({ type: 'object', fields: [
        { name: 'name', title: 'Source Name', type: 'string' },
        { name: 'year', title: 'Year', type: 'string' },
        { name: 'url', title: 'URL (optional)', type: 'string' },
      ]})],
    }),

    // Quick facts + doctor note
    defineField({
      name: 'quickFacts',
      title: 'Quick Facts',
      type: 'object',
      fields: [
        { name: 'mistake', title: 'Sabse Common Diet Mistake', type: 'string' },
        { name: 'mustEat', title: 'Ek Food Jo Zaroor Khayein', type: 'string' },
        { name: 'mustAvoid', title: 'Ek Food Jo Bilkul Avoid Karein', type: 'string' },
      ],
    }),
    defineField({ name: 'doctorNote', title: 'Doctor Note (E-E-A-T)', type: 'text', rows: 4 }),
    defineField({ name: 'reviewDate', title: 'Review Date', type: 'string' }),
    defineField({ name: 'youtubeUrl', title: 'YouTube Video URL (optional)', type: 'url' }),

    // WhatsApp share texts
    defineField({ name: 'shareTextGreenRed', title: 'WA Share — Green/Red List', type: 'string' }),
    defineField({ name: 'shareTextMealPlan', title: 'WA Share — 4-Day Plan', type: 'string' }),
    defineField({ name: 'shareTextPage', title: 'WA Share — Full Page', type: 'string' }),

    defineField({ name: 'publishedAt', title: 'Publish Date', type: 'datetime' }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'hindiName' },
  },
})
