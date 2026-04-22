interface Medicine {
  name: string
  potency: string
  keyIndications: string[]
  bestFor: string
}

export default function MedicineCards({ medicines }: { medicines: Medicine[] }) {
  if (!medicines?.length) return null

  return (
    <div>
      <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
        ⚠️ <strong>Important:</strong> Ye medicines doctor ki salah ke bina mat lo. Har patient ke liye alag medicine hoti hai.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {medicines.map((med, i) => (
          <div key={i} className="border border-gray-200 rounded-lg p-4 bg-white hover:border-green-300 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-bold text-gray-800">{med.name}</h4>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full shrink-0 ml-2">
                {med.potency}
              </span>
            </div>
            {med.keyIndications?.length > 0 && (
              <ul className="space-y-1 mb-2">
                {med.keyIndications.slice(0, 3).map((ind, j) => (
                  <li key={j} className="text-xs text-gray-600 flex items-start gap-1">
                    <span className="text-green-500 mt-0.5">•</span> {ind}
                  </li>
                ))}
              </ul>
            )}
            {med.bestFor && (
              <p className="text-xs text-green-700 font-medium mt-2">
                Best for: {med.bestFor}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
