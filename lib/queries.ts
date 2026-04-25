import { client } from './sanity'

export async function getAllDiseases() {
  return client.fetch(`*[_type == "disease"] | order(publishedAt desc) {
    title, slug, hindiName, heroText, metaDescription, category
  }`)
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
  const current = await client.fetch(
    `*[_type == "disease" && slug.current == $currentSlug][0]{ category }`,
    { currentSlug }
  )
  const category = current?.category
  // Same category + diseases that cross-link to this page via types[].diseasePageSlug
  return client.fetch(
    `*[_type == "disease" && slug.current != $currentSlug && (category == $category || $currentSlug in types[].diseasePageSlug)] | order(publishedAt desc) [0...$limit] {
      title, slug, hindiName, category
    }`,
    { currentSlug, category, limit }
  )
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
  return client.fetch(`*[_type == "symptom"] | order(name asc) {
    name, slug, shortDescription
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
    title, hindiName, slug, category, heroText, metaDescription, keyRule,
    "hasWeeklyPlan": defined(weeklyPlan) && length(weeklyPlan) > 0,
    "includeCount": count(dietInclude[].items[]),
    "avoidCount": count(dietAvoid[].items[])
  }`)
}

export async function getDietBySlug(slug: string) {
  return client.fetch(`*[_type == "diet" && slug.current == $slug][0]`, { slug })
}

export async function searchAll(query: string) {
  return client.fetch(`*[
    (_type == "disease" || _type == "medicine" || _type == "symptom") &&
    (title match $query || name match $query)
  ] | order(_type asc) { _type, title, name, slug }`, { query: `${query}*` } as any)
}
