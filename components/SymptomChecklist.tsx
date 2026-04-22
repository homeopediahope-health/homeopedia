interface SymptomCategory {
  category: string
  items: string[]
}

export default function SymptomChecklist({ symptoms }: { symptoms: SymptomCategory[] }) {
  if (!symptoms?.length) return null

  return (
    <div className="space-y-4">
      {symptoms.map((cat, i) => (
        <div key={i}>
          <h4 className="font-semibold text-gray-700 text-sm mb-2 uppercase tracking-wide">
            {cat.category}
          </h4>
          <div className="space-y-2">
            {cat.items?.map((symptom, j) => (
              <label key={j} className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer group">
                <input
                  type="checkbox"
                  className="mt-0.5 w-4 h-4 accent-green-600 shrink-0"
                />
                <span className="text-sm text-gray-700 group-hover:text-gray-900">
                  {symptom}
                </span>
              </label>
            ))}
          </div>
        </div>
      ))}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-4">
        <p className="text-xs text-blue-800">
          <strong>💡 Agar 3+ symptoms match hain</strong> toh doctor se consult karna chahiye.
        </p>
      </div>
    </div>
  )
}
