'use client'

import Link from 'next/link'
import { Fragment, useMemo } from 'react'

interface AutoLinkProps {
  text: string
  currentSlug: string
  diseaseMap: Record<string, string>
}

export default function AutoLink({ text, currentSlug, diseaseMap }: AutoLinkProps) {
  const regex = useMemo(() => {
    if (!diseaseMap || Object.keys(diseaseMap).length === 0) return null
    const names = Object.keys(diseaseMap).filter(
      name => diseaseMap[name] !== currentSlug && name.length > 2
    )
    if (names.length === 0) return null
    const escaped = names.map(n => n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    return new RegExp(`\\b(${escaped.join('|')})\\b`, 'gi')
  }, [diseaseMap, currentSlug])

  if (!text || !regex) return <>{text}</>

  const parts = text.split(regex)
  const linked = new Set<string>()

  return (
    <>
      {parts.map((part, i) => {
        const lower = part.toLowerCase()
        const slug = diseaseMap[lower]
        if (slug && slug !== currentSlug && !linked.has(slug)) {
          linked.add(slug)
          return (
            <Link key={i} href={`/diseases/${slug}`}
              style={{ color: 'var(--sage)', fontWeight: 500, textDecoration: 'underline',
                       textDecorationStyle: 'dotted', textUnderlineOffset: 2 }}>
              {part}
            </Link>
          )
        }
        return <Fragment key={i}>{part}</Fragment>
      })}
    </>
  )
}
