import { createClient } from '@sanity/client'
import fs from 'fs'
import path from 'path'

const client = createClient({
  projectId: 'zf5dtbt9',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

function parseTemplate(text) {
  const get = (section) => {
    const re = new RegExp(`---\\s*${section}\\s*---([\\s\\S]*?)(?=\\n---\\s*[A-Z]|$)`, 'i')
    const m = text.match(re)
    return m ? m[1].trim() : ''
  }

  const lines = (str) => str.split('\n').map(s => s.trim()).filter(Boolean)
  const bullets = (str) => lines(str).filter(l => l.startsWith('-')).map(l => l.replace(/^-\s*/, ''))

  // Header fields (before first ---)
  const header = text.split('---')[0]
  const field = (name) => {
    const m = header.match(new RegExp(`${name}:\\s*(.+)`, 'i'))
    return m ? m[1].trim() : ''
  }

  const title = field('DISEASE NAME')
  const hindiName = field('HINDI NAME')
  const youtubeUrl = field('YOUTUBE URL')

  // Quick Facts
  const qfRaw = get('QUICK FACTS')
  const qfLine = (name) => {
    const m = qfRaw.match(new RegExp(`${name}:\\s*(.+)`, 'i'))
    return m ? m[1].trim() : ''
  }

  // Symptoms
  const sympRaw = get('SYMPTOMS')
  const symptoms = []
  let currentCat = null
  for (const line of lines(sympRaw)) {
    if (!line.startsWith('-')) {
      currentCat = { category: line.replace(':', ''), items: [] }
      symptoms.push(currentCat)
    } else if (currentCat) {
      currentCat.items.push(line.replace(/^-\s*/, ''))
    }
  }

  // Types — supports extended format: TYPE: Name | percentage | slug
  const typesRaw = get('TYPES')
  const pipeList = (str) => str.split('|').map(s => s.trim()).filter(Boolean)

  let types = []
  // Check if new format (starts with TYPE:)
  if (typesRaw.includes('TYPE:')) {
    const typeBlocks = typesRaw.split(/(?=^TYPE:)/m).filter(b => b.trim())
    types = typeBlocks.map(block => {
      const blockLines = block.split('\n')
      const firstLine = blockLines[0].replace(/^TYPE:\s*/, '')
      const parts = firstLine.split('|').map(s => s.trim())

      const getField = (name) => {
        const idx = blockLines.findIndex(l => l.trim().startsWith(name + ':'))
        if (idx === -1) return ''
        // Collect single-line value
        return blockLines[idx].replace(new RegExp(`^${name}:\\s*`), '').trim()
      }

      return {
        name: parts[0] || '',
        percentage: parts[1] || '',
        typeSlug: parts[2] || (parts[0] || '').toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
        description: getField('BRIEF'),
        fullDescription: getField('FULL'),
        specificSymptoms: pipeList(getField('SYMPTOMS')),
        triggers: pipeList(getField('TRIGGERS')),
        treatmentApproach: getField('TREATMENT'),
        whoGetsIt: getField('WHOGETS'),
        skincareTips: pipeList(getField('SKINCARE')),
      }
    }).filter(t => t.name)
  } else {
    // Legacy format: Name | percentage | description
    types = lines(typesRaw).map(l => {
      const parts = l.split('|').map(s => s.trim())
      return { name: parts[0] || '', percentage: parts[1] || '', description: parts[2] || '', typeSlug: (parts[0] || '').toLowerCase().replace(/\s+/g, '-') }
    }).filter(t => t.name)
  }

  // CCRH
  const ccrhRaw = get('CCRH EVIDENCE')
  const ccrhLine = (name) => {
    const m = ccrhRaw.match(new RegExp(`${name}:\\s*(.+)`, 'i'))
    return m ? m[1].trim() : ''
  }

  // Medicines
  const medRaw = get('MEDICINES')
  const medicines = []
  let currentMed = null
  for (const line of lines(medRaw)) {
    if (!line.startsWith('-') && line.includes('|')) {
      const parts = line.split('|').map(s => s.trim())
      const namePotency = parts[0].split('/')
      currentMed = {
        name: namePotency[0]?.trim() || parts[0],
        potency: namePotency[1]?.trim() || parts[1] || '',
        bestFor: (parts[parts.length - 1] || '').replace(/best for:/i, '').trim(),
        keyIndications: [],
      }
      medicines.push(currentMed)
    } else if (line.startsWith('-') && currentMed) {
      currentMed.keyIndications.push(line.replace(/^-\s*/, ''))
    }
  }

  // Diet Include
  const dietIncRaw = get('DIET INCLUDE')
  const dietInclude = []
  let currentDiet = null
  for (const line of lines(dietIncRaw)) {
    if (!line.startsWith('-')) {
      const parts = line.split('|').map(s => s.trim())
      currentDiet = { category: parts[0].replace(':', ''), emoji: parts[1] || '', items: [] }
      dietInclude.push(currentDiet)
    } else if (currentDiet) {
      currentDiet.items.push(line.replace(/^-\s*/, ''))
    }
  }

  // Diet Avoid
  const dietAvRaw = get('DIET AVOID')
  const dietAvoid = []
  let currentAvoid = null
  for (const line of lines(dietAvRaw)) {
    if (!line.startsWith('-')) {
      const parts = line.split('|').map(s => s.trim())
      currentAvoid = { category: parts[0].replace(':', ''), emoji: parts[1] || '', items: [] }
      dietAvoid.push(currentAvoid)
    } else if (currentAvoid) {
      currentAvoid.items.push(line.replace(/^-\s*/, ''))
    }
  }

  // Lifestyle
  const lifestyleRaw = get('LIFESTYLE TIPS')
  const lifestyle = []
  let currentTip = null
  for (const line of lines(lifestyleRaw)) {
    if (!line.startsWith('-') && !currentTip) {
      currentTip = { title: line.replace(':', ''), description: '' }
      lifestyle.push(currentTip)
    } else if (currentTip && !line.startsWith('-')) {
      currentTip.description += (currentTip.description ? ' ' : '') + line
      currentTip = null
    }
  }

  // Case Studies
  const caseRaw = get('CASE STUDIES')
  const caseStudies = []
  let currentCase = {}
  for (const line of lines(caseRaw)) {
    if (/^patient:/i.test(line)) {
      if (currentCase.profile) caseStudies.push(currentCase)
      currentCase = { profile: line.replace(/^patient:\s*/i, ''), duration: '', treatment: '', result: '' }
    } else if (/^problem duration:/i.test(line)) {
      currentCase.duration = line.replace(/^problem duration:\s*/i, '')
    } else if (/^treatment:/i.test(line)) {
      currentCase.treatment = line.replace(/^treatment:\s*/i, '')
    } else if (/^result:/i.test(line)) {
      currentCase.result = line.replace(/^result:\s*/i, '')
    }
  }
  if (currentCase.profile) caseStudies.push(currentCase)

  // FAQs
  const faqRaw = get('FAQs')
  const faqs = []
  let currentFaq = null
  for (const line of lines(faqRaw)) {
    if (/^Q:/i.test(line)) {
      currentFaq = { question: line.replace(/^Q:\s*/i, ''), answer: '' }
      faqs.push(currentFaq)
    } else if (/^A:/i.test(line) && currentFaq) {
      currentFaq.answer = line.replace(/^A:\s*/i, '')
    } else if (currentFaq && currentFaq.answer && !line.match(/^[QA]:/i)) {
      currentFaq.answer += ' ' + line
    }
  }

  const slug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')

  // SEO section
  const seoRaw = get('SEO')
  const seoLine = (name) => {
    const m = seoRaw.match(new RegExp(`${name}:\\s*(.+)`, 'i'))
    return m ? m[1].trim() : ''
  }
  const metaTitleSeo = seoLine('Meta Title')
  const metaDescSeo = seoLine('Meta Description')

  // Category + Related Diseases from header
  const category = field('CATEGORY')
  const relatedDiseases = (field('RELATED DISEASES') || '').split('|').map(s => s.trim()).filter(Boolean)

  // Self Check from symptoms section
  const sympRawFull = get('SYMPTOMS')
  const selfCheckMatch = sympRawFull.match(/SELF CHECK:\s*(.+)/i)
  const selfCheck = selfCheckMatch ? selfCheckMatch[1].trim() : ''

  // Exercise section
  const exRaw = get('EXERCISE')
  const exLine = (name) => {
    const idx = exRaw.split('\n').findIndex(l => l.trim().startsWith(name + ':'))
    if (idx === -1) return ''
    const nextLines = exRaw.split('\n').slice(idx + 1)
    const desc = []
    for (const l of nextLines) {
      if (l.trim().match(/^[A-Z][a-z]+:/) || l.trim().match(/^AVOID:/)) break
      if (l.trim()) desc.push(l.trim())
    }
    return desc.join(' ')
  }
  const exercise = {
    dailyWalk: exLine('Daily Walk'),
    yogaAsanas: exLine('Yoga Asanas'),
    pranayama: exLine('Pranayama'),
    avoid: bullets(exRaw.split(/AVOID:/i)[1] || ''),
  }

  // Seasonal Care
  const seasonRaw = get('SEASONAL CARE')
  const seasonLine = (name) => {
    const idx = seasonRaw.split('\n').findIndex(l => l.trim().startsWith(name + ':'))
    if (idx === -1) return ''
    const nextLines = seasonRaw.split('\n').slice(idx + 1)
    const desc = []
    for (const l of nextLines) {
      if (l.trim().match(/^(Summer|Winter|Monsoon):/i)) break
      if (l.trim()) desc.push(l.trim())
    }
    return desc.join(' ')
  }
  const seasonalCare = {
    summer: seasonLine('Summer'),
    winter: seasonLine('Winter'),
    monsoon: seasonLine('Monsoon'),
  }

  // Sources
  const sourcesRaw = get('SOURCES')
  const sources = lines(sourcesRaw)
    .filter(l => l.includes('|'))
    .map(l => {
      const parts = l.split('|').map(s => s.trim())
      return { name: parts[0] || '', url: parts[1] || '', year: parts[2] || '' }
    })

  return {
    _type: 'disease',
    title,
    hindiName,
    slug: { _type: 'slug', current: slug },
    metaTitle: metaTitleSeo || `${title} Treatment | Symptoms, Diet & Homeopathy | HomeoPedia`,
    metaDescription: metaDescSeo || get('INTRO').substring(0, 155),
    heroText: get('INTRO'),
    category: category || undefined,
    relatedDiseases: relatedDiseases.length ? relatedDiseases : undefined,
    selfCheck: selfCheck || undefined,
    quickFacts: {
      whatItIs: qfLine('Kya hai'),
      howCommon: qfLine('India mein kitna common'),
      treatmentDuration: qfLine('Treatment duration'),
      successRate: qfLine('CCRH success rate'),
    },
    symptoms,
    types,
    ccrhEvidence: {
      improvementRate: ccrhLine('Improvement rate'),
      avgTreatmentPeriod: ccrhLine('Avg treatment period'),
      citation: ccrhLine('Citation'),
      keyFindings: bullets(ccrhRaw.split('Key findings')[1] || ''),
    },
    homeopathyBenefits: bullets(get('HOMEOPATHY BENEFITS')),
    homeopathyLimitations: bullets(get('HONEST LIMITATIONS')),
    medicines,
    dietInclude,
    dietAvoid,
    exercise: (exercise.dailyWalk || exercise.yogaAsanas) ? exercise : undefined,
    lifestyle,
    seasonalCare: (seasonalCare.summer || seasonalCare.winter) ? seasonalCare : undefined,
    caseStudies,
    faqs,
    sources: sources.length ? sources : undefined,
    youtubeUrl: youtubeUrl || undefined,
    publishedAt: new Date().toISOString(),
  }
}

async function main() {
  const file = process.argv[2]
  if (!file) {
    console.log('Usage: node scripts/push-disease.mjs <template-file>')
    process.exit(1)
  }

  const text = fs.readFileSync(path.resolve(file), 'utf-8')
  const doc = parseTemplate(text)

  if (!doc.title) {
    console.error('Error: DISEASE NAME missing in template')
    process.exit(1)
  }

  console.log(`Pushing: ${doc.title} (${doc.slug.current})...`)

  // Check if exists
  const existing = await client.fetch(
    `*[_type == "disease" && slug.current == $slug][0]._id`,
    { slug: doc.slug.current }
  )

  let result
  if (existing) {
    result = await client.patch(existing).set(doc).commit()
    console.log(`Updated: ${result._id}`)
  } else {
    result = await client.create(doc)
    console.log(`Created: ${result._id}`)
  }

  console.log(`Live at: http://localhost:3000/diseases/${doc.slug.current}`)
}

main().catch(console.error)
