import { client } from './sanity'

export async function getAllDiseases() {
  return client.fetch(`*[_type == "disease"] | order(publishedAt desc) {
    title, slug, hindiName, heroText, metaDescription, category, publishedAt
  }`)
}

export async function getAllDiseasesForLinking() {
  return client.fetch(`*[_type == "disease"] { title, hindiName, slug }`)
}

export async function getDiseaseDiet(slug: string) {
  return client.fetch(`*[_type == "disease" && slug.current == $slug][0]{
    title, hindiName, slug, category,
    dietInclude, dietAvoid
  }`, { slug })
}

export async function getAllDiseasesDiet() {
  return client.fetch(`*[_type == "disease" && defined(dietInclude)] | order(publishedAt desc) {
    title, slug, hindiName, category,
    "includeCount": count(dietInclude[].items[]),
    "avoidCount": count(dietAvoid[].items[])
  }`)
}

export async function getRelatedDiseases(currentSlug: string, limit = 4) {
  // Single query: fetch current disease category + related diseases together
  const [current, allRelated] = await Promise.all([
    client.fetch(`*[_type == "disease" && slug.current == $slug][0]{ category }`, { slug: currentSlug }),
    client.fetch(
      `*[_type == "disease" && slug.current != $currentSlug && $currentSlug in types[].diseasePageSlug] | order(publishedAt desc) [0...$limit] { title, slug, hindiName, category }`,
      { currentSlug, limit }
    ),
  ])
  const category = current?.category
  if (allRelated.length >= limit) return allRelated.slice(0, limit)
  // Fill remaining slots with same-category diseases
  const sameCategory = await client.fetch(
    `*[_type == "disease" && slug.current != $currentSlug && category == $category && !($currentSlug in types[].diseasePageSlug)] | order(publishedAt desc) [0...$fill] { title, slug, hindiName, category }`,
    { currentSlug, category, fill: limit - allRelated.length }
  )
  return [...allRelated, ...sameCategory].slice(0, limit)
}

export async function getDiseaseBySlug(slug: string) {
  return client.fetch(`*[_type == "disease" && slug.current == $slug][0]`, { slug })
}

export async function getAllMedicines() {
  return client.fetch(`*[_type == "medicine"] | order(name asc) {
    name, slug, commonUses
  }`)
}

export async function getMedicineBySlug(slug: string) {
  return client.fetch(`*[_type == "medicine" && slug.current == $slug][0]`, { slug })
}

export async function getAllSymptoms() {
  return client.fetch(`*[_type == "symptom"] | order(coalesce(title, name) asc) {
    title, name, hindiName, slug, shortDescription
  }`)
}

export async function getSymptomBySlug(slug: string) {
  return client.fetch(`*[_type == "symptom" && slug.current == $slug][0]`, { slug })
}

export async function getDiseaseTypeBySlug(diseaseSlug: string, typeSlug: string) {
  return client.fetch(
    `*[_type == "disease" && slug.current == $diseaseSlug][0]{
      title, hindiName, slug,
      "type": types[typeSlug == $typeSlug][0],
      "otherTypes": types[typeSlug != $typeSlug]{ name, typeSlug, description, percentage }
    }`,
    { diseaseSlug, typeSlug }
  )
}

export async function getAllDiets() {
  return client.fetch(`*[_type == "diet"] | order(publishedAt desc) {
    title, hindiName, slug, category, intro, metaDescription,
    "hasSamplePlan": defined(samplePlan4Day) && length(samplePlan4Day) > 0,
    "includeCount": count(vegGreenList[].items[]),
    "avoidCount": count(redList[].items[])
  }`)
}

export async function getDietBySlug(slug: string) {
  return client.fetch(
    `*[_type == "diet" && (slug.current == $slug || relatedDiseaseSlug == $slug)][0]`,
    { slug }
  )
}

export async function searchAll(query: string) {
  return client.fetch(`*[
    (_type == "disease" || _type == "medicine" || _type == "symptom") &&
    (title match $query || name match $query)
  ] | order(_type asc) { _type, title, name, slug }`, { query: `${query}*` } as any)
}
