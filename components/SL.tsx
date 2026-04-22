export default function SL({ c }: { c: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, justifyContent: 'center' }}>
      <div style={{ width: 18, height: 1, background: 'var(--gold)' }} />
      <span style={{ fontSize: 11, letterSpacing: 2.5, color: 'var(--gold-dk)', fontWeight: 600, textTransform: 'uppercase' }}>{c}</span>
      <div style={{ width: 18, height: 1, background: 'var(--gold)' }} />
    </div>
  )
}
