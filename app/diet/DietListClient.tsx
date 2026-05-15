'use client'
import { useState } from 'react'
import { WA_BASE } from '@/lib/constants'
import Link from 'next/link'

const DIET_PLANS: Record<string, { n: string; ic: string; tone: string; intro: string; meals: { time: string; items: string[] }[]; eat: string[]; avoid: string[] }> = {
  joints: {
    n: 'Joints & Pain', ic: '🦴', tone: '#dde6cd',
    intro: 'Anti-inflammatory diet — joint pain, sciatica, arthritis ke liye. Body ki agni balance, vata pacify.',
    meals: [
      { time: '6:30 AM · Wake-up', items: ['Warm water + 1 tsp methi seeds (raat ko bhigoyein)', 'Soaked almonds (5) + walnut (2)'] },
      { time: '8:30 AM · Breakfast', items: ['Vegetable daliya + ghee', 'Moong cheela + green chutney', 'Sprouts salad (steamed)', 'Adrak-tulsi chai'] },
      { time: '11:00 AM · Mid-morning', items: ['Seasonal fruit (apple, papaya)', 'Coconut water'] },
      { time: '1:30 PM · Lunch', items: ['2 phulka + ghee', 'Moong/masoor dal', 'Seasonal sabzi (lauki, tori, palak)', 'Cucumber-tomato salad', 'Buttermilk (warm spice)'] },
      { time: '4:30 PM · Evening', items: ['Roasted makhana', 'Ginger-tulsi tea', 'Handful of dates'] },
      { time: '7:30 PM · Dinner', items: ['Vegetable khichdi + ghee', 'Bottle gourd soup', 'Halki haldi-doodh'] },
    ],
    eat: ['Warm cooked food', 'Ghee, sesame oil', 'Haldi, ginger, garlic', 'Methi seeds soaked', 'Green leafy veg', 'Almonds, walnuts', 'Khichdi, daliya', 'Lauki, tori', 'Pumpkin, ridge gourd', 'Adrak-tulsi chai', 'Mung dal, masoor', 'Buttermilk warm'],
    avoid: ['Cold drinks, ice', 'Maida products', 'Excess sugar', 'Deep-fried oily', 'Curd at night', 'Excess salt-pickle', 'Heavy non-veg', 'Bahut khatti cheezein', 'Frozen meals', 'Carbonated drinks', 'Excess tea/coffee', 'Refined oils'],
  },
  skin: {
    n: 'Skin & Hair', ic: '🌸', tone: '#e8d2c4',
    intro: 'Pitta-pacifying, blood-purifying diet — eczema, psoriasis, acne ke liye. Antioxidants + hydration focus.',
    meals: [
      { time: '6:30 AM · Wake-up', items: ['Warm water + 1 tsp coriander seeds boiled', 'Aloe vera juice (10ml) — fresh'] },
      { time: '8:30 AM · Breakfast', items: ['Vegetable poha (no onion-garlic in flare)', 'Coconut chutney', 'Pomegranate seeds', 'Mint-tulsi water'] },
      { time: '11:00 AM · Mid-morning', items: ['Coconut water', 'Seasonal fruit (sweet — pear, apple)'] },
      { time: '1:30 PM · Lunch', items: ['2 phulka + ghee (small)', 'Moong dal patli', 'Lauki/parwal sabzi', 'Mint-cucumber raita'] },
      { time: '4:30 PM · Evening', items: ['Coconut water', 'Roasted makhana', 'Soaked sabja seeds water'] },
      { time: '7:30 PM · Dinner', items: ['Light khichdi + ghee', 'Steamed vegetables', 'Pumpkin soup'] },
    ],
    eat: ['Lauki, bottle gourd', 'Coconut water', 'Pomegranate, papaya', 'Mint, coriander', 'Pumpkin seeds', 'Ghee, coconut oil', 'Moong dal patli', 'Cucumber, watermelon', 'Aloe vera fresh', 'Tulsi, coriander', 'Apple, pear', 'Plenty of water (3L)'],
    avoid: ['Dahi (dairy in flare)', 'Spicy, oily food', 'Brinjal, tomato', 'Sour fruits', 'Fermented food', 'Red meat', 'Refined sugar', 'Maida, bakery', 'Citrus in flare', 'Excess salt', 'Caffeine', 'Smoking-alcohol'],
  },
  digestive: {
    n: 'Digestive', ic: '🌾', tone: '#f0e3c4',
    intro: 'Gut-soothing diet — IBS, acidity, gas ke liye. Easily-digestible, regular timing, mindful eating.',
    meals: [
      { time: '6:30 AM · Wake-up', items: ['Warm water + 1 tsp ajwain water', 'Soaked raisins (8)'] },
      { time: '8:30 AM · Breakfast', items: ['Daliya / oatmeal with ghee', 'Banana', 'Mint-fennel tea'] },
      { time: '11:00 AM · Mid-morning', items: ['Buttermilk + roasted jeera', 'Seasonal fruit'] },
      { time: '1:30 PM · Lunch', items: ['1–2 phulka', 'Moong dal khichdi', 'Lauki sabzi', 'Mint chutney', 'Buttermilk'] },
      { time: '4:30 PM · Evening', items: ['Saunf-elaichi water', 'Roasted makhana', 'Coconut water'] },
      { time: '7:30 PM · Dinner', items: ['Light khichdi', 'Bottle gourd soup', 'Plain phulka + ghee'] },
    ],
    eat: ['Khichdi, daliya', 'Buttermilk + jeera', 'Bananas, papaya', 'Pomegranate', 'Ginger, hing', 'Saunf, ajwain', 'Coconut water', 'Boiled vegetables', 'Moong dal', 'Ghee (1 tsp meals)', 'Mint, coriander', 'Warm water'],
    avoid: ['Spicy oily food', 'Refined flour, maida', 'Carbonated drinks', 'Excess tea/coffee', 'Beans, rajma', 'Cabbage, broccoli', 'Fried snacks', 'Late-night meals', 'Raw onion-garlic', 'Curd at night', 'Cold foods', 'Junk food'],
  },
  respiratory: {
    n: 'Respiratory', ic: '🫁', tone: '#f5d7d7',
    intro: 'Kapha-reducing, immunity-building diet — asthma, recurrent cold, tonsillitis. Warm, light, anti-mucus.',
    meals: [
      { time: '6:30 AM · Wake-up', items: ['Warm water + tulsi-ginger-honey decoction', 'Soaked almonds (5)'] },
      { time: '8:30 AM · Breakfast', items: ['Vegetable upma (light)', 'Ginger-tulsi tea', 'Soft fruit (papaya)'] },
      { time: '11:00 AM · Mid-morning', items: ['Warm vegetable soup', 'Roasted black chana'] },
      { time: '1:30 PM · Lunch', items: ['2 phulka + ghee', 'Moong dal patli', 'Lauki/parwal sabzi', 'Light salad', 'Warm water'] },
      { time: '4:30 PM · Evening', items: ['Tulsi-ginger-pepper tea', 'Roasted makhana'] },
      { time: '7:30 PM · Dinner', items: ['Vegetable khichdi', 'Vegetable clear soup', 'Halki haldi-doodh'] },
    ],
    eat: ['Warm water + honey', 'Tulsi, ginger, pepper', 'Haldi, garlic', 'Vegetable soups', 'Light khichdi', 'Steamed veggies', 'Pomegranate', 'Soaked almonds', 'Moong dal', 'Ghee (small)', 'Daliya, oats warm', 'Honey raw'],
    avoid: ['Cold drinks, ice', 'Banana evening', 'Curd at night', 'Sugar excess', 'Dairy in flare', 'Maida products', 'Fried food', 'Refrigerated food', 'Heavy lentils', 'Sour fruits', 'Smoking, dust', 'AC cold air'],
  },
  hormonal: {
    n: 'Hormonal', ic: '💧', tone: '#cce0e0',
    intro: 'Endocrine-supportive diet — thyroid, PCOS, diabetes ke liye. Whole grains, low GI, balanced.',
    meals: [
      { time: '6:30 AM · Wake-up', items: ['Warm water + 1 tsp methi seeds', 'Soaked almonds + walnut'] },
      { time: '8:30 AM · Breakfast', items: ['Multigrain veggie cheela', 'Coconut chutney', 'Green tea / tulsi tea'] },
      { time: '11:00 AM · Mid-morning', items: ['Seasonal fruit + flax seeds', 'Coconut water'] },
      { time: '1:30 PM · Lunch', items: ['1 phulka + ghee', 'Moong/masoor dal', 'Mixed sabzi', 'Salad', 'Buttermilk'] },
      { time: '4:30 PM · Evening', items: ['Roasted makhana', 'Green tea', 'Handful of nuts'] },
      { time: '7:30 PM · Dinner', items: ['Veg khichdi', 'Boiled veggies', 'Pumpkin seeds (1 tsp)'] },
    ],
    eat: ['Whole grains', 'Methi seeds', 'Pumpkin seeds', 'Flax seeds', 'Cinnamon, dalchini', 'Soaked nuts', 'Green tea', 'Bitter gourd, karela', 'Spinach, palak', 'Beans (soaked)', 'Apple, berries', 'Pulses & sprouts'],
    avoid: ['Refined sugar', 'Maida, white rice', 'Sweets, mithai', 'Soft drinks', 'Late-night meals', 'Fried snacks', 'Excess dairy', 'Soya in excess', 'Goitrogens raw', 'Processed food', 'Trans fats', 'Smoking-alcohol'],
  },
  mental: {
    n: 'Mental Wellness', ic: '🧠', tone: '#dcd8ec',
    intro: 'Vata-calming, brain-supportive diet — anxiety, insomnia, depression ke liye. Sattvic + omega-3.',
    meals: [
      { time: '6:30 AM · Wake-up', items: ['Warm water', 'Soaked almonds (7) + 2 walnuts'] },
      { time: '8:30 AM · Breakfast', items: ['Oats with milk + dates', 'Banana', 'Tulsi-mulethi tea'] },
      { time: '11:00 AM · Mid-morning', items: ['Seasonal fruit', 'Pumpkin seeds (1 tsp)'] },
      { time: '1:30 PM · Lunch', items: ['2 phulka + ghee', 'Moong/masoor dal', 'Sabzi', 'Salad', 'Buttermilk'] },
      { time: '4:30 PM · Evening', items: ['Brahmi/ashwagandha tea', 'Roasted makhana'] },
      { time: '7:30 PM · Dinner', items: ['Light khichdi + ghee', 'Vegetable soup', 'Haldi-doodh + jaiphal'] },
    ],
    eat: ['Soaked almonds, walnuts', 'Ghee, til oil', 'Brahmi, ashwagandha', 'Warm milk + jaiphal', 'Bananas, dates', 'Whole grains', 'Tulsi, mulethi', 'Sweet potato', 'Pumpkin seeds', 'Dark chocolate (small)', 'Avocado', 'Berries'],
    avoid: ['Excess caffeine', 'Fried, junk food', 'Excess sugar', 'Late-night screens', 'Smoking, alcohol', 'Refined flour', 'Energy drinks', 'Frozen meals', 'Carbonated drinks', 'Heavy non-veg', 'Skipping meals', 'Eating in hurry'],
  },
  women: {
    n: "Women's Health", ic: '🌷', tone: '#eccfd9',
    intro: 'Hormone-balancing diet — PCOS, irregular periods, menstrual issues. Iron-rich + low GI.',
    meals: [
      { time: '6:30 AM · Wake-up', items: ['Warm water + methi seeds', 'Soaked almonds + dates (3)'] },
      { time: '8:30 AM · Breakfast', items: ['Vegetable poha + peanuts', 'Pomegranate', 'Tulsi tea'] },
      { time: '11:00 AM · Mid-morning', items: ['Coconut water', 'Apple + flax seeds'] },
      { time: '1:30 PM · Lunch', items: ['1 phulka + ghee', 'Dal + spinach', 'Mixed sabzi', 'Beetroot salad', 'Buttermilk'] },
      { time: '4:30 PM · Evening', items: ['Pumpkin seeds', 'Green tea', 'Roasted makhana'] },
      { time: '7:30 PM · Dinner', items: ['Veg khichdi', 'Bottle gourd soup', 'Halki haldi-doodh'] },
    ],
    eat: ['Spinach, beetroot', 'Methi seeds', 'Sesame seeds, til', 'Pumpkin seeds', 'Flax seeds', 'Dates, raisins', 'Whole grains', 'Pomegranate', 'Cinnamon, dalchini', 'Moong sprouts', 'Coconut water', 'Almonds, walnuts'],
    avoid: ['Refined sugar', 'Soya in excess', 'White rice, maida', 'Junk, fried food', 'Excess dairy', 'Soft drinks', 'Frozen meals', 'Trans fats', 'Late-night meals', 'Excess caffeine', 'Smoking-alcohol', 'Crash diets'],
  },
  children: {
    n: 'Children', ic: '🧸', tone: '#e8e0c4',
    intro: 'Immunity-building gentle diet — bachhon ki growth, recurrent cold, weak digestion ke liye.',
    meals: [
      { time: '7:00 AM · Wake-up', items: ['Warm water + raisins', 'Soaked almonds (3)'] },
      { time: '9:00 AM · Breakfast', items: ['Vegetable upma / poha', 'Banana', 'Warm milk + haldi'] },
      { time: '11:30 AM · Mid-morning', items: ['Seasonal fruit', 'Coconut water'] },
      { time: '1:30 PM · Lunch', items: ['1 phulka + ghee', 'Dal', 'Sabzi', 'Curd (day only)', 'Salad'] },
      { time: '4:30 PM · Evening', items: ['Roasted makhana', 'Mulethi-tulsi tea', 'Date'] },
      { time: '7:30 PM · Dinner', items: ['Khichdi + ghee', 'Vegetable soup', 'Halki haldi-doodh'] },
    ],
    eat: ['Soaked almonds, raisins', 'Khichdi + ghee', 'Seasonal fruits', 'Tulsi-mulethi water', 'Vegetable soup', 'Warm milk + haldi', 'Daliya, oats', 'Moong dal', 'Chyawanprash (1 tsp)', 'Coconut water', 'Banana, papaya', 'Honey (1+ year)'],
    avoid: ['Cold drinks', 'Chocolates excess', 'Chips, junk', 'Frozen ice cream daily', 'Refined sugar', 'Soft drinks', 'Maida, bakery', 'Roadside food', 'Excess sweets', 'Fried snacks', 'Curd at night', 'Late-night feeding'],
  },
}

export default function DietListClient({ diets }: { diets: any[] }) {
  const [active, setActive] = useState('joints')
  const plan = DIET_PLANS[active]

  return (
    <div className="page-in" style={{ paddingTop: 66, background: 'var(--bg)', minHeight: '100vh' }}>

      {/* Hero */}
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: 'clamp(28px,4vw,52px) clamp(16px,4vw,32px) clamp(16px,2vw,28px)' }}>
        <div style={{ fontSize: 11, color: 'var(--ink4)', fontFamily: 'var(--font-mono,monospace)', letterSpacing: '0.04em', marginBottom: 10 }}>
          <Link href="/" style={{ color: 'var(--sage-dk)', textDecoration: 'none' }}>Home</Link>
          {' › '}
          <strong style={{ color: 'var(--ink2)', fontWeight: 700 }}>Diet plans</strong>
        </div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--warm)', marginBottom: 12 }}>
          <div style={{ width: 14, height: 1, background: 'var(--warm)', opacity: 0.6 }} />
          Doctor-curated · {Object.keys(DIET_PLANS).length} plans
        </div>
        <h1 style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 'clamp(40px,6vw,72px)', fontWeight: 600, letterSpacing: '-0.035em', lineHeight: 0.97, color: 'var(--ink)', marginBottom: 0 }}>
          What you eat{' '}
          <em className="sage-shimmer" style={{ fontStyle: 'italic' }}>matters most.</em>
        </h1>
        <p style={{ fontSize: 'clamp(14px,1.5vw,16px)', color: 'var(--ink3)', marginTop: 18, maxWidth: 600, lineHeight: 1.65, fontWeight: 300 }}>
          Har condition ke liye specific diet — meal-timing, foods to eat aur avoid, sab Hinglish mein. Body type aur condition ke hisaab se choose karein.
        </p>
      </div>

      {/* Sticky category tabs */}
      <div style={{ position: 'sticky', top: 64, zIndex: 100, background: 'rgba(247,245,239,.92)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '12px clamp(16px,4vw,32px)', display: 'flex', gap: 8, overflowX: 'auto', scrollbarWidth: 'none' }} className="hide-scrollbar">
          {Object.entries(DIET_PLANS).map(([k, p]) => {
            const on = active === k
            return (
              <button key={k} onClick={() => setActive(k)}
                style={{ padding: '9px 16px', borderRadius: 99, fontSize: 12, fontWeight: 600, whiteSpace: 'nowrap', cursor: 'pointer', flexShrink: 0, border: `1px solid ${on ? 'var(--ink)' : 'var(--border)'}`, background: on ? 'var(--ink)' : 'var(--card)', color: on ? '#fff' : 'var(--ink2)', display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'all .2s' }}>
                <span>{p.ic}</span>{p.n}
              </button>
            )
          })}
        </div>
      </div>

      <div style={{ maxWidth: 1160, margin: '0 auto', padding: 'clamp(24px,3vw,40px) clamp(16px,4vw,32px) 80px' }}>

        {/* Featured plan card */}
        <div style={{ padding: 'clamp(24px,4vw,44px)', background: plan.tone, borderRadius: 24, display: 'grid', gridTemplateColumns: '1fr 200px', gap: 32, alignItems: 'center', position: 'relative', overflow: 'hidden', marginBottom: 48 }} className="dis-hero">
          <div>
            <h2 style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 'clamp(28px,4vw,46px)', fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1.05, color: 'var(--ink)', marginBottom: 14 }}>
              {plan.n} <em style={{ color: 'var(--sage)', fontStyle: 'italic' }}>diet plan</em>
            </h2>
            <p style={{ fontSize: 'clamp(13px,1.5vw,15px)', color: 'var(--ink2)', lineHeight: 1.65, maxWidth: 520, fontWeight: 300, marginBottom: 20 }}>{plan.intro}</p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {['⏱ Daily plan', `${plan.meals.length} meals`, '✓ Doctor reviewed'].map(t => (
                <span key={t} style={{ fontSize: 12, fontWeight: 600, padding: '6px 14px', borderRadius: 99, background: 'rgba(255,255,255,.7)', color: 'var(--ink2)', border: '1px solid rgba(255,255,255,.5)' }}>{t}</span>
              ))}
            </div>
          </div>
          <div style={{ fontSize: 'clamp(80px,12vw,130px)', textAlign: 'center', opacity: 0.5, lineHeight: 1 }} className="cat-icon-hide">{plan.ic}</div>
        </div>

        {/* Daily meal plan — timeline */}
        <div style={{ marginBottom: 52 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--warm)', marginBottom: 10 }}>
            <div style={{ width: 14, height: 1, background: 'var(--warm)', opacity: 0.6 }} />
            Daily meal plan
          </div>
          <h2 style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 'clamp(26px,3vw,40px)', fontWeight: 600, letterSpacing: '-0.025em', lineHeight: 1, color: 'var(--ink)', marginTop: 8, marginBottom: 28 }}>
            Subah se raat tak.
          </h2>
          <div style={{ position: 'relative', paddingLeft: 74 }}>
            <div style={{ position: 'absolute', left: 24, top: 25, bottom: 25, width: 2, background: 'linear-gradient(180deg,var(--sage),var(--sage-lt))', borderRadius: 2 }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {plan.meals.map((m, i) => (
                <div key={i} style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', left: -74, top: 0, width: 50, height: 50, borderRadius: '50%', background: 'linear-gradient(135deg,var(--sage-dk),var(--sage))', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono,monospace)', fontSize: 13, fontWeight: 700, zIndex: 1, boxShadow: '0 6px 18px rgba(63,107,77,.3)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="hov" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, padding: '18px 24px' }}>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: 'var(--warm)', textTransform: 'uppercase', fontFamily: 'var(--font-mono,monospace)', marginBottom: 10 }}>{m.time}</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      {m.items.map((it, j) => (
                        <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: 'var(--ink2)', lineHeight: 1.55 }}>
                          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--sage)', opacity: 0.65, flexShrink: 0, marginTop: 7 }} />
                          {it}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Eat / Avoid panels */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, marginBottom: 52 }} className="grid-2">
          {/* Eat */}
          <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 18, overflow: 'hidden' }}>
            <div style={{ padding: '14px 22px', background: 'var(--sage-bg)', fontSize: 11, fontWeight: 700, color: 'var(--sage)', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'var(--font-mono,monospace)', borderBottom: '1px solid rgba(63,107,77,.15)' }}>✓ Khaayein — yes!</div>
            <div style={{ padding: '16px 22px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 16px' }}>
              {plan.eat.map((it, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'var(--ink2)' }}>
                  <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--sage-bg)', color: 'var(--sage)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 11, fontWeight: 700 }}>✓</div>
                  <span>{it}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Avoid */}
          <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 18, overflow: 'hidden' }}>
            <div style={{ padding: '14px 22px', background: 'rgba(162,56,56,.08)', fontSize: 11, fontWeight: 700, color: 'var(--red)', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'var(--font-mono,monospace)', borderBottom: '1px solid rgba(162,56,56,.15)' }}>✕ Avoid karein</div>
            <div style={{ padding: '16px 22px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 16px' }}>
              {plan.avoid.map((it, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'var(--ink2)' }}>
                  <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(162,56,56,.08)', color: 'var(--red)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 11, fontWeight: 700 }}>✕</div>
                  <span>{it}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Universal principles */}
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 22, padding: 'clamp(22px,3vw,40px)', marginBottom: 52 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--warm)', marginBottom: 12 }}>
            <div style={{ width: 14, height: 1, background: 'var(--warm)', opacity: 0.6 }} />
            Universal principles
          </div>
          <h2 style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 'clamp(22px,3vw,32px)', fontWeight: 600, letterSpacing: '-0.025em', marginBottom: 22, lineHeight: 1, color: 'var(--ink)' }}>
            Sab plans mein common 8 rules.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: 16 }}>
            {[
              ['🕐', 'Regular meal timing', 'Body ko predictable rhythm chahiye'],
              ['💧', '3 litre water roz', 'Subah uthte hi 1 glass warm'],
              ['🍽️', 'Mindful eating', 'Phone band, slowly chabaayein'],
              ['🌙', 'Light dinner', 'Sone se 3 ghante pehle kha lo'],
              ['🌡️', 'Warm > cold food', 'Body ki agni ke liye warm best'],
              ['🌾', 'Whole > refined', 'Atta, chawal sabut grain prefer'],
              ['🌿', 'Seasonal & local', 'Body ko adapt karne mein madad'],
              ['🚫', 'No skipping meals', 'Specially breakfast mat skip karo'],
            ].map(([ic, t, d], i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <div style={{ fontSize: 22, flexShrink: 0 }}>{ic}</div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 14, fontWeight: 600, letterSpacing: '-0.01em', color: 'var(--ink)' }}>{t}</div>
                  <div style={{ fontSize: 12, color: 'var(--ink4)', marginTop: 3, lineHeight: 1.5 }}>{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disease-specific chart links from Sanity */}
        {diets.length > 0 && (
          <div style={{ marginBottom: 52 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--warm)', marginBottom: 10 }}>
              <div style={{ width: 14, height: 1, background: 'var(--warm)', opacity: 0.6 }} />
              Disease-specific charts
            </div>
            <h2 style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 'clamp(22px,3vw,30px)', fontWeight: 600, letterSpacing: '-0.025em', lineHeight: 1, color: 'var(--ink)', marginTop: 8, marginBottom: 20 }}>
              Apni condition ke liye chart.
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: 14 }}>
              {diets.map((d: any) => (
                <Link key={d.slug?.current} href={`/diet/${d.slug?.current}`} style={{ textDecoration: 'none' }}>
                  <div className="hov" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14, padding: '18px 20px', cursor: 'pointer', position: 'relative', overflow: 'hidden', height: '100%', boxSizing: 'border-box' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg,var(--sage-dk),var(--sage-lt))', borderRadius: '14px 14px 0 0' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, marginTop: 4 }}>
                      <span style={{ fontSize: 10, fontWeight: 600, padding: '2px 9px', borderRadius: 100, background: 'var(--sage-bg)', color: 'var(--sage-dk)', border: '1px solid rgba(63,107,77,.2)' }}>{d.category}</span>
                      <span style={{ fontSize: 10, color: 'var(--ink4)' }}>Dr. Reviewed</span>
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 17, fontWeight: 600, color: 'var(--ink)', marginBottom: 4, lineHeight: 1.3 }}>{d.title}</h3>
                    {d.hindiName && <div style={{ fontSize: 12, color: 'var(--warm)', fontStyle: 'italic', fontFamily: 'var(--font-display,Georgia,serif)', marginBottom: 10, fontWeight: 500 }}>{d.hindiName}</div>}
                    {d.keyRule && <p style={{ fontSize: 12, color: 'var(--ink4)', lineHeight: 1.5, marginBottom: 10, fontWeight: 300 }}>💡 {d.keyRule}</p>}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10, borderTop: '1px solid var(--border)', marginTop: 'auto' }}>
                      <div style={{ display: 'flex', gap: 10 }}>
                        {d.includeCount > 0 && <span style={{ fontSize: 10, color: 'var(--green)' }}>✓ {d.includeCount} foods</span>}
                        {d.avoidCount > 0 && <span style={{ fontSize: 10, color: 'var(--red)' }}>✕ {d.avoidCount} avoid</span>}
                        {d.hasSamplePlan && <span style={{ fontSize: 10, color: 'var(--warm)' }}>📅 4-Day Plan</span>}
                      </div>
                      <span style={{ fontSize: 12, color: 'var(--sage)', fontWeight: 600 }}>View →</span>
                    </div>
                  </div>
                </Link>
              ))}
              <div style={{ background: 'var(--bg2)', border: '2px dashed var(--border2)', borderRadius: 14, padding: '22px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: 140 }}>
                <div style={{ fontSize: 26, marginBottom: 8 }}>🔜</div>
                <div style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 14, fontWeight: 600, color: 'var(--ink3)', marginBottom: 4 }}>Aur Charts Coming</div>
                <div style={{ fontSize: 11, color: 'var(--ink4)', fontWeight: 300, lineHeight: 1.6 }}>Arthritis, Diabetes, Anxiety diet charts jald aa rahe hain</div>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div style={{ padding: 'clamp(24px,3vw,36px) clamp(22px,3vw,44px)', background: 'linear-gradient(135deg,var(--sage) 0%,var(--sage-dk) 100%)', borderRadius: 22, color: '#fff', display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: -60, top: -60, width: 240, height: 240, borderRadius: '50%', background: 'rgba(255,255,255,.06)' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: 'clamp(20px,2.5vw,28px)', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.15 }}>Personalised plan banwana hai?</div>
            <div style={{ fontSize: 13, opacity: 0.85, marginTop: 8, fontWeight: 300 }}>Body type, age, condition ke hisaab se Dr. Shadab plan banayenge.</div>
          </div>
          <a href={WA_BASE} target="_blank" rel="noopener noreferrer" style={{ flexShrink: 0, padding: '12px 24px', background: '#fff', color: 'var(--sage-dk)', borderRadius: 99, fontSize: 13, fontWeight: 700, textDecoration: 'none', position: 'relative', zIndex: 1 }}>💬 Consult Dr. Shadab</a>
        </div>
      </div>

      <a href={WA_BASE} target="_blank" rel="noopener noreferrer" className="fab">📲 Consult Now</a>
    </div>
  )
}
