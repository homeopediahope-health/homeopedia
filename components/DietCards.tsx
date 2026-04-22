interface DietCategory {
  category: string
  emoji?: string
  items: string[]
}

export default function DietCards({
  include,
  avoid,
}: {
  include: DietCategory[]
  avoid: DietCategory[]
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <h3 className="font-bold text-green-700 text-base mb-3 flex items-center gap-2">
          <span className="text-xl">✅</span> Kya Khayein
        </h3>
        <div className="space-y-3">
          {include?.map((cat, i) => (
            <div key={i} className="bg-green-50 border border-green-100 rounded-lg p-3">
              <p className="font-semibold text-green-800 text-sm mb-2">
                {cat.emoji} {cat.category}
              </p>
              <div className="flex flex-wrap gap-1">
                {cat.items?.map((item, j) => (
                  <span key={j} className="bg-white text-green-700 text-xs border border-green-200 px-2 py-1 rounded-full">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-bold text-red-700 text-base mb-3 flex items-center gap-2">
          <span className="text-xl">❌</span> Kya Na Khayein
        </h3>
        <div className="space-y-3">
          {avoid?.map((cat, i) => (
            <div key={i} className="bg-red-50 border border-red-100 rounded-lg p-3">
              <p className="font-semibold text-red-800 text-sm mb-2">
                {cat.emoji} {cat.category}
              </p>
              <div className="flex flex-wrap gap-1">
                {cat.items?.map((item, j) => (
                  <span key={j} className="bg-white text-red-700 text-xs border border-red-200 px-2 py-1 rounded-full">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
