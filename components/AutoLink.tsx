'use client'

import Link from 'next/link'
import { Fragment } from 'react'

interface AutoLinkProps {
  text: string
  currentSlug: string
  diseaseMap: Record<string, string>
}

export default function AutoLink({ text, currentSlug, diseaseMap }: AutoLinkProps) {
  if (!text || !diseaseMap || Object.keys(diseaseMap).length === 0) return <>{text}</>

  const names = Object.keys(diseaseMap).filter(
    name => diseaseMap[name] !== currentSlug && name.length > 2
  )
  if (names.length === 0) return <>{text}</>

  const escaped = names.map(n => n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
  const regex = new RegExp(`\\b(${escaped.join('|')})\\b`, 'gi')

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
