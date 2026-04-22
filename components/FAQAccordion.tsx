'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQ {
  question: string
  answer: string
}

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(null)

  if (!faqs?.length) return null

  return (
    <div className="space-y-2">
      {faqs.map((faq, i) => (
        <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            className="w-full text-left px-4 py-4 flex justify-between items-start gap-3 hover:bg-gray-50 transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-medium text-gray-800 text-sm leading-relaxed">{faq.question}</span>
            {open === i ? (
              <ChevronUp className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
            )}
          </button>
          {open === i && (
            <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
