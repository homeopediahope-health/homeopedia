import Starsvg from './Starsvg'

export default function Orn() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '10px 0' }}>
      <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, transparent, var(--border2))' }} />
      <Starsvg s={16} o={0.5} />
      <div style={{ flex: 1, height: 1, background: 'linear-gradient(to left, transparent, var(--border2))' }} />
    </div>
  )
}
