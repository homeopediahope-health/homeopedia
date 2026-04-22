import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">H</span>
              </div>
              <span className="font-bold text-white">HomeoPedia.in</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              India&apos;s patient-first homeopathy knowledge portal. Evidence-based, CCRH-backed.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm mb-3">Content</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/diseases" className="hover:text-green-400 transition-colors">All Diseases</Link></li>
              <li><Link href="/medicines" className="hover:text-green-400 transition-colors">All Medicines</Link></li>
              <li><Link href="/symptoms" className="hover:text-green-400 transition-colors">Symptoms</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm mb-3">Consult</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="https://wa.me/918983458889" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                  WhatsApp Dr. Shadab
                </a>
              </li>
              <li>
                <a href="tel:+918983458889" className="hover:text-green-400 transition-colors">
                  Call: 8983458889
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm mb-3">About</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/about" className="hover:text-green-400 transition-colors">About Dr. Shadab</Link></li>
              <li><Link href="/disclaimer" className="hover:text-green-400 transition-colors">Medical Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-xs text-gray-500">
          <p className="mb-1">
            <strong className="text-gray-400">Medical Disclaimer:</strong> Ye website sirf educational purpose ke liye hai. Koi bhi treatment shuru karne se pehle qualified doctor se consult karein.
          </p>
          <p>Medically reviewed by <strong className="text-gray-400">Dr. Shadab Khan, MD Homeopath</strong> · © 2026 HomeoPedia.in</p>
        </div>
      </div>
    </footer>
  )
}
