import { defineType, defineField, defineArrayMember } from 'sanity'

export const disease = defineType({
  name: 'disease',
  title: 'Disease / Bimari',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Disease Name (English)', type: 'string', validation: r => r.required() }),
    defineField({ name: 'hindiName', title: 'Hindi/Urdu Name', type: 'string' }),
    defineField({ name: 'slug', title: 'URL (auto-fill)', type: 'slug', options: { source: 'title' }, validation: r => r.required() }),
    defineField({ name: 'metaTitle', title: 'SEO Title', type: 'string' }),
    defineField({ name: 'metaDescription', title: 'SEO Description (150 chars)', type: 'text', rows: 2 }),
    defineField({ name: 'heroText', title: 'Intro Text (50 words)', type: 'text', rows: 3 }),
    defineField({
      name: 'quickFacts',
      title: 'Quick Facts Box',
      type: 'object',
      fields: [
        { name: 'whatItIs', title: 'What it is', type: 'string' },
        { name: 'howCommon', title: 'How common in India', type: 'string' },
        { name: 'treatmentDuration', title: 'Treatment Duration', type: 'string' },
        { name: 'successRate', title: 'CCRH Success Rate', type: 'string' },
      ],
    }),
    defineField({
      name: 'symptoms',
      title: 'Symptoms',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          { name: 'category', title: 'Category (e.g. Skin Changes)', type: 'string' },
          { name: 'items', title: 'Symptom list', type: 'array', of: [{ type: 'string' }] },
        ],
      })],
    }),
    defineField({
      name: 'types',
      title: 'Types of Disease',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          { name: 'name', title: 'Type Name', type: 'string' },
          { name: 'typeSlug', title: 'URL Slug (e.g. plaque-psoriasis)', type: 'string' },
          { name: 'percentage', title: 'How common (e.g. 80% cases)', type: 'string' },
          { name: 'description', title: 'Brief Description', type: 'text', rows: 2 },
          { name: 'fullDescription', title: 'Full Description (2-3 paragraphs)', type: 'text', rows: 5 },
          { name: 'specificSymptoms', title: 'Symptoms specific to this type', type: 'array', of: [{ type: 'string' }] },
          { name: 'triggers', title: 'Common Triggers', type: 'array', of: [{ type: 'string' }] },
          { name: 'treatmentApproach', title: 'Homeopathy Treatment Approach', type: 'text', rows: 3 },
          { name: 'whoGetsIt', title: 'Who Gets It (demographics)', type: 'string' },
          { name: 'skincareTips', title: 'Skincare Tips for this type', type: 'array', of: [{ type: 'string' }] },
        ],
      })],
    }),
    defineField({
      name: 'ccrhEvidence',
      title: 'CCRH Research Evidence',
      type: 'object',
      fields: [
        { name: 'improvementRate', title: 'Improvement Rate (e.g. 78%)', type: 'string' },
        { name: 'avgTreatmentPeriod', title: 'Avg Treatment Period', type: 'string' },
        { name: 'citation', title: 'Citation (Journal, Year)', type: 'string' },
        { name: 'keyFindings', title: 'Key Findings', type: 'array', of: [{ type: 'string' }] },
      ],
    }),
    defineField({
      name: 'homeopathyBenefits',
      title: 'Why Homeopathy Helps (benefits)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'homeopathyLimitations',
      title: 'Honest Limitations',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'medicines',
      title: 'Homeopathic Medicines',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          { name: 'name', title: 'Medicine Name', type: 'string' },
          { name: 'potency', title: 'Potency (e.g. 30, 200, 1M)', type: 'string' },
          { name: 'keyIndications', title: 'Key Indications', type: 'array', of: [{ type: 'string' }] },
          { name: 'bestFor', title: 'Best For', type: 'string' },
        ],
      })],
    }),
    defineField({
      name: 'dietInclude',
      title: 'Diet — Kya Khayein',
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
      title: 'Diet — Kya Na Khayein',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          { name: 'category', title: 'Category', type: 'string' },
          { name: 'emoji', title: 'Emoji', type: 'string' },
          { name: 'items', title: 'Foods to avoid', type: 'array', of: [{ type: 'string' }] },
        ],
      })],
    }),
    defineField({
      name: 'lifestyle',
      title: 'Lifestyle Tips',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          { name: 'title', title: 'Tip Title', type: 'string' },
          { name: 'description', title: 'Details', type: 'text', rows: 2 },
        ],
      })],
    }),
    defineField({
      name: 'caseStudies',
      title: 'Case Studies (Anonymized)',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          { name: 'profile', title: 'Patient Profile (e.g. 42-year-old teacher)', type: 'string' },
          { name: 'duration', title: 'Problem Duration', type: 'string' },
          { name: 'treatment', title: 'Treatment Given', type: 'string' },
          { name: 'result', title: 'Result', type: 'string' },
        ],
      })],
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs (Hinglish)',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          { name: 'question', title: 'Question', type: 'string' },
          { name: 'answer', title: 'Answer', type: 'text', rows: 3 },
        ],
      })],
    }),
    defineField({ name: 'youtubeUrl', title: 'YouTube Video URL', type: 'url' }),
    defineField({ name: 'publishedAt', title: 'Publish Date', type: 'datetime' }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'hindiName' },
  },
})
