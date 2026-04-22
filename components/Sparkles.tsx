'use client'
import Starsvg from './Starsvg'

const fl = [
  { l: '7%',  b: '22%', s: 10, d: '5s',   dl: '0s' },
  { l: '14%', b: '10%', s: 7,  d: '7s',   dl: '1.3s' },
  { l: '80%', b: '26%', s: 12, d: '6s',   dl: '0.6s' },
  { l: '88%', b: '12%', s: 8,  d: '8s',   dl: '2s' },
  { l: '50%', b: '8%',  s: 9,  d: '6.5s', dl: '1.8s' },
  { l: '65%', b: '32%', s: 6,  d: '7.5s', dl: '0.9s' },
  { l: '32%', b: '16%', s: 11, d: '5.5s', dl: '3s' },
  { l: '93%', b: '40%', s: 7,  d: '9s',   dl: '1s' },
]
const bk = [
  { l: '20%', t: '25%', s: 8, dl: '0s' },
  { l: '74%', t: '17%', s: 6, dl: '1.1s' },
  { l: '44%', t: '72%', s: 9, dl: '2s' },
  { l: '86%', t: '52%', s: 7, dl: '0.6s' },
  { l: '11%', t: '58%', s: 8, dl: '1.6s' },
  { l: '60%', t: '30%', s: 5, dl: '2.5s' },
  { l: '36%', t: '14%', s: 7, dl: '0.4s' },
]

export default function Sparkles() {
  return (
    <>
      {fl.map((p, i) => (
        <div key={'f' + i} className="sparkle-up" style={{ left: p.l, bottom: p.b, animationDuration: p.d, animationDelay: p.dl }}>
          <Starsvg s={p.s} />
        </div>
      ))}
      {bk.map((p, i) => (
        <div key={'b' + i} className="sparkle-blink" style={{ left: p.l, top: p.t, animationDuration: '3s', animationDelay: p.dl }}>
          <Starsvg s={p.s} o={0.5} />
        </div>
      ))}
    </>
  )
}
