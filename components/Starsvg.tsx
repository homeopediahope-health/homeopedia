export default function Starsvg({ s = 12, o = 0.6 }: { s?: number; o?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 12 12" style={{ display: 'inline-block' }}>
      <path d="M6 0L7.2 4.8 12 6 7.2 7.2 6 12 4.8 7.2 0 6 4.8 4.8Z" fill="var(--gold)" opacity={o} />
    </svg>
  )
}
