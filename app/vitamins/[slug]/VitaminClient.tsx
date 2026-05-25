'use client'
import Link from 'next/link'
import { useState } from 'react'
import { WA_BASE } from '@/lib/constants'

const serif = 'var(--font-display,Georgia,serif)'

const catColors: Record<string, string> = {
  Vitamin:    '#dde6cd',
  Mineral:    '#cce0e0',
  Supplement: '#f0e3c4',
  'Amino Acid': '#dcd8ec',
  'Fatty Acid': '#f5d7d7',
}

export default function VitaminClient({ vitamin: v }: { vitamin: any }) {
  return (
    <div style={{ paddingTop: 66, background: 'var(--bg)', minHeight: '100vh' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: 'clamp(28px,5vw,56px) clamp(16px,4vw,32px) 80px' }}>

        {/* Breadcrumb */}
        <div style={{ fontSize: 11, color: 'var(--ink4)', marginBottom: 24 }}>
          <Link href="/" style={{ color: 'var(--ink4)', textDecoration: 'none' }}>Home</Link>
          {' › '}
          <Link href="/vitamins" style={{ color: 'var(--ink4)', textDecoration: 'none' }}>Vitamins</Link>
          {' › '}
          <strong style={{ color: 'var(--ink2)' }}>{v.name}</strong>
        </div>

        {/* Hero */}
        <div style={{ marginBottom: 36 }}>
          {v.category && (
            <span style={{ padding: '4px 12px', background: catColors[v.category] || '#f0e3c4', borderRadius: 99, fontSize: 11, fontWeight: 700, color: 'var(--ink2)', letterSpacing: '0.04em', display: 'inline-block', marginBottom: 14 }}>
              💊 {v.category}
            </span>
          )}
          <h1 style={{ fontFamily: serif, fontSize: 'clamp(30px,5vw,48px)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.1, color: 'var(--ink)', marginBottom: 8 }}>
            {v.name}
          </h1>
          {v.hindiName && (
            <div style={{ fontFamily: serif, fontStyle: 'italic', color: 'var(--gold-dk)', fontSize: 16, marginBottom: 12 }}>{v.hindiName}</div>
          )}

          {/* Review meta */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, fontSize: 11, color: 'var(--ink4)', alignItems: 'center', marginBottom: 20 }}>
            <span>✅ Doctor-reviewed</span>
            <span>·</span>
            <span>🩺 Dr. Shadab Khan, MD Homoeopath</span>
            {v.reviewDate && <><span>·</span><span>📅 {v.reviewDate}</span></>}
          </div>

          {/* Quick Facts */}
          {v.quickFacts && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(160px,1fr))', gap: 10, marginBottom: 24 }}>
              {v.quickFacts.indiaPrevalence && <QuickFact label="India Prevalence" value={v.quickFacts.indiaPrevalence} icon="🇮🇳" />}
              {v.quickFacts.commonDeficiencySign && <QuickFact label="Common Sign" value={v.quickFacts.commonDeficiencySign} icon="⚠️" />}
              {v.quickFacts.mainFoodSource && <QuickFact label="Food Source (Veg)" value={v.quickFacts.mainFoodSource} icon="🥗" />}
              {v.quickFacts.normalRangeQuick && <QuickFact label="Normal Range" value={v.quickFacts.normalRangeQuick} icon="📊" />}
            </div>
          )}
        </div>

        {/* What Is It */}
        {v.whatIsIt && (
          <Section title="Ye Kya Hai?" icon="🔬">
            <p style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.75, whiteSpace: 'pre-line', fontWeight: 300 }}>{v.whatIsIt}</p>
          </Section>
        )}

        {/* Body Functions */}
        {v.bodyFunctions?.length > 0 && (
          <Section title="Body Mein Kya Kaam Karta Hai?" icon="⚙️">
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {v.bodyFunctions.map((f: string, i: number) => (
                <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14, color: 'var(--ink2)', lineHeight: 1.6 }}>
                  <span style={{ color: 'var(--gold-dk)', fontWeight: 700, flexShrink: 0 }}>✦</span>
                  {f}
                </li>
              ))}
            </ul>
          </Section>
        )}

        {/* Deficiency Symptoms */}
        {v.deficiencySymptoms && (
          <Section title="Kami Ke Lakshan" icon="⚠️" accent="var(--warm)">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {v.deficiencySymptoms.bonesMusclsJoints?.length > 0 && (
                <SymptomGroup title="Bones / Muscles / Joints" items={v.deficiencySymptoms.bonesMusclsJoints} color="#e8f4e8" />
              )}
              {v.deficiencySymptoms.energyMoodBrain?.length > 0 && (
                <SymptomGroup title="Energy / Mood / Brain" items={v.deficiencySymptoms.energyMoodBrain} color="#fff8e8" />
              )}
              {v.deficiencySymptoms.skinHairNails?.length > 0 && (
                <SymptomGroup title="Skin / Hair / Nails" items={v.deficiencySymptoms.skinHairNails} color="#f0e8f8" />
              )}
              {v.deficiencySymptoms.other?.length > 0 && (
                <SymptomGroup title="Other / Specific" items={v.deficiencySymptoms.other} color="#f8f0e8" />
              )}
            </div>
          </Section>
        )}

        {/* Deficiency Causes */}
        {v.deficiencyCauses?.length > 0 && (
          <Section title="Kami Kyun Hoti Hai?" icon="🔍">
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {v.deficiencyCauses.map((c: string, i: number) => (
                <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14, color: 'var(--ink2)', lineHeight: 1.6 }}>
                  <span style={{ color: 'var(--warm)', fontWeight: 700, flexShrink: 0 }}>→</span>
                  {c}
                </li>
              ))}
            </ul>
          </Section>
        )}

        {/* Normal Range Table */}
        {v.normalRanges?.length > 0 && (
          <Section title="Normal Range — Kitna Hona Chahiye" icon="📊" accent="var(--sage)">
            <div style={{ overflowX: 'auto', marginTop: 4 }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                <thead>
                  <tr style={{ background: 'var(--sage)', color: '#fff' }}>
                    {['Category', 'Normal', 'Kami (Deficient)', 'Zyada / Toxic', 'Unit'].map(h => (
                      <th key={h} style={{ padding: '10px 12px', textAlign: 'left', fontWeight: 600, fontSize: 11, letterSpacing: '0.04em' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {v.normalRanges.map((r: any, i: number) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? 'var(--card)' : 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
                      <td style={{ padding: '9px 12px', fontWeight: 600, color: 'var(--ink)', fontSize: 13 }}>{r.category}</td>
                      <td style={{ padding: '9px 12px', color: '#2d7a3a', fontWeight: 700 }}>{r.normal}</td>
                      <td style={{ padding: '9px 12px', color: 'var(--warm)' }}>{r.deficient || '—'}</td>
                      <td style={{ padding: '9px 12px', color: '#c0392b' }}>{r.toxic || '—'}</td>
                      <td style={{ padding: '9px 12px', color: 'var(--ink4)', fontSize: 11 }}>{r.unit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: 11, color: 'var(--ink4)', marginTop: 10, lineHeight: 1.6, fontStyle: 'italic' }}>
              ⚠️ Ranges labs mein thodi vary ho sakti hain — apni report ke reference values dekho aur doctor se salah lo.
            </p>
          </Section>
        )}

        {/* Food Sources */}
        {(v.vegSources?.length > 0 || v.nonVegSources?.length > 0 || v.sunlightNote) && (
          <Section title="Kisme Paya Jaata Hai — Food Sources" icon="🥗" accent="var(--sage)">
            {v.vegSources?.length > 0 && (
              <>
                <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--sage-dk)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>🌿 Vegetarian Sources</div>
                <div style={{ overflowX: 'auto', marginBottom: 16 }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                    <thead>
                      <tr style={{ background: 'var(--sage)', color: '#fff' }}>
                        {['Food (Indian Naam)', 'Quantity', 'Kitna Milega'].map(h => (
                          <th key={h} style={{ padding: '8px 12px', textAlign: 'left', fontWeight: 600, fontSize: 11 }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {v.vegSources.map((s: any, i: number) => (
                        <tr key={i} style={{ background: i % 2 === 0 ? 'var(--card)' : 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
                          <td style={{ padding: '8px 12px', fontWeight: 600 }}>{s.food}</td>
                          <td style={{ padding: '8px 12px', color: 'var(--ink3)' }}>{s.quantity}</td>
                          <td style={{ padding: '8px 12px', color: 'var(--sage-dk)', fontWeight: 700 }}>{s.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
            {v.nonVegSources?.length > 0 && (
              <>
                <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--warm)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>🍗 Non-Vegetarian Sources</div>
                <div style={{ overflowX: 'auto', marginBottom: 16 }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                    <thead>
                      <tr style={{ background: 'var(--warm)', color: '#fff' }}>
                        {['Food', 'Quantity', 'Kitna Milega'].map(h => (
                          <th key={h} style={{ padding: '8px 12px', textAlign: 'left', fontWeight: 600, fontSize: 11 }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {v.nonVegSources.map((s: any, i: number) => (
                        <tr key={i} style={{ background: i % 2 === 0 ? 'var(--card)' : 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
                          <td style={{ padding: '8px 12px', fontWeight: 600 }}>{s.food}</td>
                          <td style={{ padding: '8px 12px', color: 'var(--ink3)' }}>{s.quantity}</td>
                          <td style={{ padding: '8px 12px', color: 'var(--warm)', fontWeight: 700 }}>{s.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
            {v.sunlightNote && (
              <div style={{ background: '#fffbec', border: '1px solid #f0d870', borderRadius: 10, padding: '12px 16px', fontSize: 13, color: 'var(--ink2)', lineHeight: 1.6 }}>
                ☀️ {v.sunlightNote}
              </div>
            )}
          </Section>
        )}

        {/* Daily Requirement */}
        {v.dailyRequirement?.length > 0 && (
          <Section title="Daily Requirement — Kitna Chahiye (RDA)" icon="📋">
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                <thead>
                  <tr style={{ background: 'var(--ink)', color: '#fff' }}>
                    {['Age Group', 'Male', 'Female', 'Pregnancy', 'Breastfeeding', 'Unit'].map(h => (
                      <th key={h} style={{ padding: '9px 10px', textAlign: 'left', fontWeight: 600, fontSize: 11 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {v.dailyRequirement.map((r: any, i: number) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? 'var(--card)' : 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
                      <td style={{ padding: '8px 10px', fontWeight: 600, color: 'var(--ink)' }}>{r.ageGroup}</td>
                      <td style={{ padding: '8px 10px' }}>{r.male || '—'}</td>
                      <td style={{ padding: '8px 10px' }}>{r.female || '—'}</td>
                      <td style={{ padding: '8px 10px', color: '#c05080', fontWeight: 600 }}>{r.pregnancy || '—'}</td>
                      <td style={{ padding: '8px 10px', color: '#6060c0' }}>{r.breastfeeding || '—'}</td>
                      <td style={{ padding: '8px 10px', color: 'var(--ink4)', fontSize: 11 }}>{r.unit || '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>
        )}

        {/* Pregnancy */}
        {v.pregnancyInfo && (
          <Section title="Pregnancy Mein" icon="🤰" accent="#c05080">
            <div style={{ background: '#fff0f5', border: '1px solid #f0c0d0', borderRadius: 12, padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {v.pregnancyInfo.howImportant && (
                <p style={{ fontSize: 14, color: 'var(--ink2)', lineHeight: 1.65, margin: 0 }}>{v.pregnancyInfo.howImportant}</p>
              )}
              {v.pregnancyInfo.dailyRequired && (
                <div style={{ fontSize: 13, fontWeight: 700, color: '#c05080' }}>📋 Daily Requirement: {v.pregnancyInfo.dailyRequired}</div>
              )}
              {v.pregnancyInfo.babyEffects?.length > 0 && (
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--ink2)', marginBottom: 6 }}>Baby pe asar (kami hone pe):</div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 5 }}>
                    {v.pregnancyInfo.babyEffects.map((e: string, i: number) => (
                      <li key={i} style={{ fontSize: 13, color: '#c05080', display: 'flex', gap: 8 }}><span>⚠️</span>{e}</li>
                    ))}
                  </ul>
                </div>
              )}
              {v.pregnancyInfo.supplementSafe !== undefined && (
                <div style={{ fontSize: 13, fontWeight: 600, color: v.pregnancyInfo.supplementSafe ? '#2d7a3a' : '#c0392b' }}>
                  {v.pregnancyInfo.supplementSafe ? '✅ Supplement Safe Hai' : '⚠️ Supplement Caution — Doctor se zaroor poochho'}
                </div>
              )}
              {v.pregnancyInfo.doctorLine && (
                <div style={{ background: 'white', border: '1px solid #f0c0d0', borderRadius: 8, padding: '10px 14px', fontSize: 13, color: 'var(--ink2)', fontStyle: 'italic', lineHeight: 1.6 }}>
                  🩺 {v.pregnancyInfo.doctorLine}
                </div>
              )}
            </div>
          </Section>
        )}

        {/* Children */}
        {v.childrenInfo && (v.childrenInfo.deficiencySymptoms?.length > 0 || v.childrenInfo.ageWiseRequirement || v.childrenInfo.foodSources || v.childrenInfo.supplementNote) && (
          <Section title="Bachon Mein" icon="👶">
            <div style={{ background: '#f0f8ff', border: '1px solid #c0d8f0', borderRadius: 12, padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {v.childrenInfo.deficiencySymptoms?.length > 0 && (
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--ink2)', marginBottom: 6 }}>Kami ke lakshan (adults se alag):</div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 5 }}>
                    {v.childrenInfo.deficiencySymptoms.map((s: string, i: number) => (
                      <li key={i} style={{ fontSize: 13, color: 'var(--ink2)', display: 'flex', gap: 8 }}><span style={{ color: '#4060c0' }}>→</span>{s}</li>
                    ))}
                  </ul>
                </div>
              )}
              {v.childrenInfo.ageWiseRequirement && (
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--ink2)', marginBottom: 4 }}>Age-wise Daily Requirement:</div>
                  <p style={{ fontSize: 13, color: 'var(--ink2)', margin: 0, whiteSpace: 'pre-line', lineHeight: 1.6 }}>{v.childrenInfo.ageWiseRequirement}</p>
                </div>
              )}
              {v.childrenInfo.foodSources && (
                <div style={{ fontSize: 13, color: 'var(--ink2)', lineHeight: 1.6 }}>
                  <span style={{ fontWeight: 700 }}>Food sources: </span>{v.childrenInfo.foodSources}
                </div>
              )}
              {v.childrenInfo.supplementNote && (
                <div style={{ background: 'white', border: '1px solid #c0d8f0', borderRadius: 8, padding: '10px 14px', fontSize: 13, color: 'var(--ink2)', fontStyle: 'italic', lineHeight: 1.6 }}>
                  💊 {v.childrenInfo.supplementNote}
                </div>
              )}
            </div>
          </Section>
        )}

        {/* Lab Test */}
        {v.labTestInfo?.testName && (
          <Section title="Kami Ka Test" icon="🧪" accent="var(--sage)">
            <div style={{ background: 'var(--sage-bg)', border: '1px solid rgba(63,107,77,.2)', borderRadius: 12, padding: '18px 20px' }}>
              <div style={{ fontFamily: serif, fontSize: 16, fontWeight: 700, color: 'var(--ink)', marginBottom: 10 }}>
                {v.labTestInfo.testSlug ? (
                  <Link href={`/lab-tests/${v.labTestInfo.testSlug}`} style={{ color: 'var(--sage)', textDecoration: 'none' }}>
                    🔗 {v.labTestInfo.testName} →
                  </Link>
                ) : (
                  <span>🧪 {v.labTestInfo.testName}</span>
                )}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 13, color: 'var(--ink2)' }}>
                {v.labTestInfo.normalRange && <div>📊 <strong>Normal Range:</strong> {v.labTestInfo.normalRange}</div>}
                {v.labTestInfo.whenToTest && <div style={{ lineHeight: 1.6 }}>🕐 <strong>Kab Karaye:</strong> {v.labTestInfo.whenToTest}</div>}
                {v.labTestInfo.repeatAfter && <div>🔁 <strong>Repeat:</strong> {v.labTestInfo.repeatAfter}</div>}
                {v.labTestInfo.priceRange && <div>💰 <strong>Price:</strong> {v.labTestInfo.priceRange}</div>}
              </div>
            </div>
          </Section>
        )}

        {/* Supplement Forms */}
        {v.supplementForms?.length > 0 && (
          <Section title="Supplement Types — Kaunsa Best Hai" icon="💊" accent="var(--gold-dk)">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {v.supplementForms.map((form: any, i: number) => (
                <div key={i} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: '16px 18px' }}>
                  <div style={{ fontFamily: serif, fontSize: 15, fontWeight: 700, color: 'var(--gold-dk)', marginBottom: 8 }}>💊 {form.formName}</div>
                  {form.benefits?.length > 0 && (
                    <div style={{ marginBottom: 6 }}>
                      {form.benefits.map((b: string, j: number) => (
                        <div key={j} style={{ fontSize: 13, color: '#2d7a3a', display: 'flex', gap: 6, marginBottom: 3 }}><span>✅</span>{b}</div>
                      ))}
                    </div>
                  )}
                  {form.drawbacks?.length > 0 && (
                    <div style={{ marginBottom: 6 }}>
                      {form.drawbacks.map((d: string, j: number) => (
                        <div key={j} style={{ fontSize: 13, color: 'var(--warm)', display: 'flex', gap: 6, marginBottom: 3 }}><span>⚠️</span>{d}</div>
                      ))}
                    </div>
                  )}
                  {form.bestFor && (
                    <div style={{ fontSize: 12, background: '#fffbec', borderRadius: 6, padding: '6px 10px', color: 'var(--gold-dk)', fontWeight: 600 }}>
                      🎯 Best for: {form.bestFor}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Supplement Timing */}
        {v.supplementTiming && (v.supplementTiming.bestTime || v.supplementTiming.absorptionTips?.length > 0) && (
          <Section title="Supplement Kab Aur Kaise Khaye" icon="⏰">
            <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {v.supplementTiming.bestTime && <InfoRow label="Best Time" value={v.supplementTiming.bestTime} />}
              {v.supplementTiming.withFood && <InfoRow label="Khali Pet / Khane Ke Baad" value={v.supplementTiming.withFood} />}
              {v.supplementTiming.takenWith && <InfoRow label="Kiske Saath Lein" value={v.supplementTiming.takenWith} />}
              {v.supplementTiming.absorptionTips?.length > 0 && (
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--ink2)', marginBottom: 6 }}>Absorption Badhane Ke Tips:</div>
                  {v.supplementTiming.absorptionTips.map((t: string, i: number) => (
                    <div key={i} style={{ fontSize: 13, color: 'var(--ink2)', display: 'flex', gap: 6, marginBottom: 4 }}><span style={{ color: 'var(--sage)' }}>✓</span>{t}</div>
                  ))}
                </div>
              )}
              {v.supplementTiming.avoidWith?.length > 0 && (
                <div style={{ background: '#fff0f0', borderRadius: 8, padding: '10px 14px' }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#c0392b', marginBottom: 6 }}>❌ Kiske Saath NAHI Lena:</div>
                  {v.supplementTiming.avoidWith.map((t: string, i: number) => (
                    <div key={i} style={{ fontSize: 13, color: '#c0392b', display: 'flex', gap: 6, marginBottom: 4 }}><span>✗</span>{t}</div>
                  ))}
                </div>
              )}
            </div>
          </Section>
        )}

        {/* Drug Interactions */}
        {v.drugInteractions?.length > 0 && (
          <Section title="Drug Interactions — Kaunsi Medicine Ke Saath Nahi" icon="⚠️" accent="#c0392b">
            <div style={{ background: '#fff5f5', border: '1.5px solid #f0c0c0', borderRadius: 12, padding: '16px 18px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {v.drugInteractions.map((d: any, i: number) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 13, color: 'var(--ink2)', paddingBottom: 8, borderBottom: i < v.drugInteractions.length - 1 ? '1px dashed var(--border)' : 'none' }}>
                    <span style={{ color: '#c0392b', fontWeight: 700, flexShrink: 0 }}>✗</span>
                    <div><strong style={{ color: 'var(--ink)' }}>{d.medicineName}</strong> — {d.reason}</div>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        )}

        {/* Combination Guide */}
        {v.combinations && (v.combinations.beneficial?.length > 0 || v.combinations.avoid?.length > 0) && (
          <Section title="Combination Guide — Kya Saath Mein Le Sakte" icon="🤝">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {v.combinations.beneficial?.length > 0 && (
                <div style={{ background: '#f0fff4', border: '1px solid #c0e8c8', borderRadius: 10, padding: '14px 16px' }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#2d7a3a', marginBottom: 8 }}>✅ Saath Lene Se Fayda:</div>
                  {v.combinations.beneficial.map((c: any, i: number) => (
                    <div key={i} style={{ fontSize: 13, color: 'var(--ink2)', display: 'flex', gap: 8, marginBottom: 5 }}>
                      <span style={{ color: '#2d7a3a', fontWeight: 700 }}>+</span>
                      <span><strong>{c.nutrient}</strong> — {c.reason}</span>
                    </div>
                  ))}
                </div>
              )}
              {v.combinations.avoid?.length > 0 && (
                <div style={{ background: '#fff5f5', border: '1px solid #f0c0c0', borderRadius: 10, padding: '14px 16px' }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#c0392b', marginBottom: 8 }}>❌ Saath Nahi Lena Chahiye:</div>
                  {v.combinations.avoid.map((c: any, i: number) => (
                    <div key={i} style={{ fontSize: 13, color: 'var(--ink2)', display: 'flex', gap: 8, marginBottom: 5 }}>
                      <span style={{ color: '#c0392b', fontWeight: 700 }}>–</span>
                      <span><strong>{c.nutrient}</strong> — {c.reason}</span>
                    </div>
                  ))}
                </div>
              )}
              {v.combinations.timingGuide && (
                <div style={{ background: 'var(--card)', borderRadius: 10, padding: '12px 16px', fontSize: 13, color: 'var(--ink2)', lineHeight: 1.65, border: '1px solid var(--border)', whiteSpace: 'pre-line' }}>
                  ⏰ {v.combinations.timingGuide}
                </div>
              )}
            </div>
          </Section>
        )}

        {/* Toxicity */}
        {v.toxicity && (v.toxicity.upperLimit || v.toxicity.sideEffects?.length > 0) && (
          <Section title="Zyada Lene Ke Nuksan — Toxicity" icon="☠️" accent="#c0392b">
            <div style={{ background: '#fff5f5', border: '1.5px solid #f0c0c0', borderRadius: 12, padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {v.toxicity.upperLimit && (
                <div style={{ fontSize: 14, fontWeight: 700, color: '#c0392b' }}>🚫 Upper Limit (UL): {v.toxicity.upperLimit}</div>
              )}
              {v.toxicity.sideEffects?.length > 0 && (
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--ink2)', marginBottom: 6 }}>Side Effects:</div>
                  {v.toxicity.sideEffects.map((e: string, i: number) => (
                    <div key={i} style={{ fontSize: 13, color: '#c0392b', display: 'flex', gap: 6, marginBottom: 4 }}><span>⚠️</span>{e}</div>
                  ))}
                </div>
              )}
              {v.toxicity.whenSerious && (
                <p style={{ fontSize: 13, color: 'var(--ink2)', lineHeight: 1.6, margin: 0 }}>{v.toxicity.whenSerious}</p>
              )}
              <div style={{ background: '#c0392b', color: '#fff', borderRadius: 8, padding: '10px 14px', fontSize: 13, fontWeight: 600 }}>
                ⚠️ Doctor ke bina high dose bilkul mat lo — zyada vitamin bhi harmful hai.
              </div>
            </div>
          </Section>
        )}

        {/* Timeline */}
        {v.timeline && (v.timeline.bloodLevelTime || v.timeline.symptomsTime) && (
          <Section title="Kitne Din Mein Fark Dikhega" icon="⏳">
            <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {v.timeline.bloodLevelTime && <InfoRow label="Blood Level Kab Badhega" value={v.timeline.bloodLevelTime} />}
              {v.timeline.symptomsTime && <InfoRow label="Symptoms Mein Fark" value={v.timeline.symptomsTime} />}
              {v.timeline.fullRecoveryTime && <InfoRow label="Full Recovery" value={v.timeline.fullRecoveryTime} />}
              {v.timeline.repeatTestTime && <InfoRow label="Test Repeat Karo" value={v.timeline.repeatTestTime} />}
              {v.timeline.patientNote && (
                <div style={{ background: '#fffbec', borderRadius: 8, padding: '10px 14px', fontSize: 13, color: 'var(--ink2)', fontStyle: 'italic', lineHeight: 1.6, marginTop: 4 }}>
                  💡 {v.timeline.patientNote}
                </div>
              )}
            </div>
          </Section>
        )}

        {/* Linked Diseases */}
        {v.linkedDiseases?.length > 0 && (
          <Section title="Linked Diseases — Kami Se Kaunsi Bimariyan" icon="🔗">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {v.linkedDiseases.map((d: any) => (
                d.isAvailable ? (
                  <Link key={d.diseaseSlug} href={`/diseases/${d.diseaseSlug}`} style={{ textDecoration: 'none' }}>
                    <div style={{ padding: '8px 14px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 10, fontSize: 13, display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <span style={{ fontWeight: 600, color: 'var(--ink)' }}>{d.diseaseName}</span>
                      {d.connection && <span style={{ fontSize: 11, color: 'var(--ink3)' }}>{d.connection}</span>}
                    </div>
                  </Link>
                ) : (
                  <div key={d.diseaseSlug} style={{ padding: '8px 14px', background: 'var(--card)', border: '1px dashed var(--border)', borderRadius: 10, fontSize: 13, display: 'flex', flexDirection: 'column', gap: 2, opacity: 0.7 }}>
                    <span style={{ fontWeight: 600, color: 'var(--ink2)' }}>{d.diseaseName}</span>
                    {d.connection && <span style={{ fontSize: 11, color: 'var(--ink3)' }}>{d.connection}</span>}
                    <span style={{ fontSize: 10, color: 'var(--ink4)' }}>Coming Soon</span>
                  </div>
                )
              ))}
            </div>
          </Section>
        )}

        {/* Linked Symptoms */}
        {v.linkedSymptoms?.length > 0 && (
          <Section title="Related Symptoms" icon="🔎">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {v.linkedSymptoms.map((s: any) => (
                <Link key={s.symptomSlug} href={`/symptoms/${s.symptomSlug}`} style={{ padding: '7px 14px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 99, fontSize: 12, fontWeight: 600, color: 'var(--ink2)', textDecoration: 'none' }}>
                  🔎 {s.symptomName}
                </Link>
              ))}
            </div>
          </Section>
        )}

        {/* Related Tests */}
        {v.relatedTests?.length > 0 && (
          <Section title="Related Lab Tests" icon="🧪">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {v.relatedTests.map((t: any) => (
                t.isAvailable ? (
                  <Link key={t.testSlug} href={`/lab-tests/${t.testSlug}`} style={{ padding: '7px 14px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 99, fontSize: 12, fontWeight: 600, color: 'var(--ink2)', textDecoration: 'none' }}>
                    🧪 {t.testName}
                  </Link>
                ) : (
                  <span key={t.testSlug} style={{ padding: '7px 14px', background: 'var(--card)', border: '1px dashed var(--border)', borderRadius: 99, fontSize: 12, color: 'var(--ink4)' }}>
                    🧪 {t.testName}
                  </span>
                )
              ))}
            </div>
          </Section>
        )}

        {/* Related Vitamins */}
        {v.relatedVitamins?.length > 0 && (
          <Section title="Related Vitamins" icon="🌟">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {v.relatedVitamins.map((rv: any) => (
                <Link key={rv.vitaminSlug} href={`/vitamins/${rv.vitaminSlug}`} style={{ padding: '7px 14px', background: '#fffbec', border: '1px solid #f0d870', borderRadius: 99, fontSize: 12, fontWeight: 600, color: 'var(--gold-dk)', textDecoration: 'none' }}>
                  🌟 {rv.vitaminName}
                </Link>
              ))}
            </div>
          </Section>
        )}

        {/* Homeopathic Alternatives */}
        {v.homeopathicAlternatives?.length > 0 && (
          <Section title="Homeopathic Connection" icon="🌿" accent="var(--sage)">
            <div style={{ background: 'var(--sage-bg)', border: '1px solid rgba(63,107,77,.2)', borderRadius: 12, padding: '18px 20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {v.homeopathicAlternatives.map((m: any, i: number) => (
                  <div key={i} style={{ paddingBottom: i < v.homeopathicAlternatives.length - 1 ? 12 : 0, borderBottom: i < v.homeopathicAlternatives.length - 1 ? '1px dashed rgba(63,107,77,.2)' : 'none' }}>
                    <div style={{ fontFamily: serif, fontSize: 15, fontWeight: 700, color: 'var(--sage)', marginBottom: 3 }}>{m.medicineName}</div>
                    {m.patientType && <div style={{ fontSize: 12, color: 'var(--ink3)', marginBottom: 4, fontStyle: 'italic' }}>👤 {m.patientType}</div>}
                    {m.howItHelps && <div style={{ fontSize: 13, color: 'var(--ink2)', lineHeight: 1.6 }}>{m.howItHelps}</div>}
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 14, fontSize: 12, color: 'var(--ink3)', lineHeight: 1.6, fontStyle: 'italic', borderTop: '1px dashed rgba(63,107,77,.2)', paddingTop: 12 }}>
                Ye medicines is kami mein kaam karti hain — lekin aapke liye kaun si sahi hai, ye sirf ek qualified homoeopath decide kar sakta hai. Potency aur dose har patient ke hisaab se alag hoti hai.
              </div>
            </div>
          </Section>
        )}

        {/* Doctor Note */}
        {v.doctorNote && (
          <div style={{ background: 'linear-gradient(135deg,#fffbf0,#fff8e8)', border: '1px solid rgba(180,130,40,.25)', borderRadius: 14, padding: '20px 22px', marginBottom: 32 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold-dk)', marginBottom: 8 }}>🩺 Doctor's Note</div>
            <p style={{ fontSize: 14, color: 'var(--ink2)', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>"{v.doctorNote}"</p>
            <div style={{ fontSize: 11, color: 'var(--ink4)', marginTop: 8 }}>— Dr. Shadab Khan, MD Homoeopath</div>
          </div>
        )}

        {/* Myths */}
        {v.myths?.length > 0 && (
          <Section title="Myths & Galat Fehmiyan" icon="🚫">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {v.myths.map((m: any, i: number) => (
                <div key={i} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden' }}>
                  <div style={{ background: '#fff5f5', padding: '10px 16px', fontSize: 13, color: '#c0392b', display: 'flex', gap: 8 }}>
                    <span style={{ fontWeight: 700, flexShrink: 0 }}>✗ Myth:</span>
                    <span>{m.myth}</span>
                  </div>
                  <div style={{ padding: '10px 16px', fontSize: 13, color: 'var(--ink2)', display: 'flex', gap: 8, lineHeight: 1.6 }}>
                    <span style={{ color: '#2d7a3a', fontWeight: 700, flexShrink: 0 }}>✓ Sach:</span>
                    <span>{m.truth}</span>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* FAQs */}
        {v.faqs?.length > 0 && (
          <Section title="Aksar Poochhe Jaane Wale Sawaal" icon="❓">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {v.faqs.map((f: any, i: number) => <FaqItem key={i} q={f.question} a={f.answer} />)}
            </div>
          </Section>
        )}

        {/* YouTube Video */}
        {v.youtubeVideo && (
          <Section title="Video Dekho" icon="▶️">
            <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: '16px 18px' }}>
              <a href={v.youtubeVideo} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#c0392b', fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
                ▶️ YouTube pe dekho →
              </a>
            </div>
          </Section>
        )}

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg,#fffbf0,#fff8e8)', border: '1px solid rgba(180,130,40,.2)', borderRadius: 18, padding: '28px', textAlign: 'center', marginBottom: 32 }}>
          <p style={{ fontFamily: serif, fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 6 }}>Vitamin Deficiency Hai?</p>
          <p style={{ fontSize: 13, color: 'var(--ink3)', marginBottom: 18, fontWeight: 300 }}>Report lekar Dr. Shadab Khan se consult karein — individualized treatment ke liye</p>
          <a href={WA_BASE} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 26px', background: '#25d366', color: '#fff', borderRadius: 100, textDecoration: 'none', fontSize: 14, fontWeight: 600, boxShadow: '0 4px 16px rgba(37,162,68,.3)' }}>📲 WhatsApp Karein</a>
        </div>

        {/* Disclaimer */}
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: '16px 18px', fontSize: 12, color: 'var(--ink3)', lineHeight: 1.7 }}>
          <strong style={{ color: 'var(--ink2)' }}>Disclaimer:</strong> Ye jaankari sirf educational purpose ke liye hai. Koi bhi supplement ya medicine lene se pehle apne doctor se zaroor consult karein. Vitamin ki zyada dose bhi harmful ho sakti hai.
          <div style={{ marginTop: 6, fontWeight: 600, color: 'var(--ink2)' }}>— Dr. Shadab Khan (MD Homoeopath), Homeopedia.in</div>
        </div>

      </div>
      <a href={WA_BASE} target="_blank" rel="noopener noreferrer" className="fab">📲 Consult Now</a>
    </div>
  )
}

function Section({ title, icon, children, accent }: { title: string; icon: string; children: React.ReactNode; accent?: string }) {
  return (
    <div style={{ marginBottom: 36 }}>
      <h2 style={{ fontFamily: serif, fontSize: 20, fontWeight: 700, color: accent || 'var(--ink)', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
        <span>{icon}</span> {title}
      </h2>
      {children}
    </div>
  )
}

function QuickFact({ label, value, icon }: { label: string; value: string; icon: string }) {
  return (
    <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: '14px 16px' }}>
      <div style={{ fontSize: 18, marginBottom: 6 }}>{icon}</div>
      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink4)', marginBottom: 4 }}>{label}</div>
      <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)', lineHeight: 1.4 }}>{value}</div>
    </div>
  )
}

function SymptomGroup({ title, items, color }: { title: string; items: string[]; color: string }) {
  return (
    <div style={{ background: color, borderRadius: 10, padding: '12px 16px' }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--ink2)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>{title}</div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 5 }}>
        {items.map((s: string, i: number) => (
          <li key={i} style={{ fontSize: 13, color: 'var(--ink2)', display: 'flex', gap: 8 }}><span style={{ flexShrink: 0 }}>•</span>{s}</li>
        ))}
      </ul>
    </div>
  )
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: 'flex', gap: 10, fontSize: 13, alignItems: 'flex-start' }}>
      <span style={{ fontWeight: 700, color: 'var(--ink2)', flexShrink: 0, minWidth: 160 }}>{label}:</span>
      <span style={{ color: 'var(--ink)', lineHeight: 1.5 }}>{value}</span>
    </div>
  )
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 10, overflow: 'hidden' }}>
      <button onClick={() => setOpen(!open)} style={{ width: '100%', textAlign: 'left', padding: '12px 16px', background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, fontFamily: 'inherit' }}>
        <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)', lineHeight: 1.4 }}>{q}</span>
        <span style={{ flexShrink: 0, color: 'var(--ink3)', fontSize: 16, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }}>▾</span>
      </button>
      {open && (
        <div style={{ padding: '0 16px 14px', fontSize: 14, color: 'var(--ink2)', lineHeight: 1.7, borderTop: '1px solid var(--border)', paddingTop: 12 }}>
          {a}
        </div>
      )}
    </div>
  )
}
