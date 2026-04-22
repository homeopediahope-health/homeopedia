'use client'
import { useState } from 'react'
import SL from '@/components/SL'

const DIET_CHARTS = [
  {
    slug: 'psoriasis', disease: 'Psoriasis', hindi: 'सोरायसिस', cat: 'Skin',
    tagline: 'Anti-inflammatory, gluten-free diet jo skin healing fast kare',
    eat: [
      { icon: '🌾', item: 'Jowar / Bajra roti', why: 'Gluten-free, cooling, anti-inflammatory' },
      { icon: '🥛', item: 'Dahi / Chhachh (roz)', why: 'Probiotic — gut-skin connection ke liye zaroori' },
      { icon: '🥥', item: 'Nariyal tel (cooking + skin)', why: 'Moisturizing + anti-inflammatory properties' },
      { icon: '🐟', item: 'Fish (agar non-veg hain)', why: 'Omega-3 fatty acids — skin inflammation kam karte hain' },
      { icon: '🥜', item: 'Akhrot (7-8 roz)', why: 'Omega-3 + Vitamin E — skin repair' },
      { icon: '🍎', item: 'Apple, Papaya, Pomegranate', why: 'Antioxidants jo skin healing mein help karte hain' },
      { icon: '🌿', item: 'Giloy / Neem juice', why: 'Blood purifier — skin diseases mein bahut effective' },
      { icon: '💧', item: '3-4 litre paani daily', why: 'Skin hydration aur toxin removal' },
    ],
    avoid: [
      { icon: '🚫', item: 'Wheat / Maida (gehun)', why: 'Gluten psoriasis ka biggest dietary trigger hai' },
      { icon: '🚫', item: 'Alcohol', why: '48-72 hours mein flare-up trigger karta hai' },
      { icon: '🚫', item: 'Red meat (beef, pork)', why: 'Arachidonic acid inflammation badhata hai' },
      { icon: '🚫', item: 'Doodh / Paneer', why: 'Dairy proteins skin inflammation badh sakti hai (dahi OK hai)' },
      { icon: '🚫', item: 'Sugar / Sweets', why: 'Blood sugar spike = skin inflammation spike' },
      { icon: '🚫', item: 'Packaged / Fried snacks', why: 'Trans fats + preservatives psoriasis trigger karte hain' },
    ],
    dayPlan: [
      { time: '6:30 AM', meal: 'Warm lemon water + Giloy juice (1 tsp) + 5-6 soaked almonds' },
      { time: '8:30 AM', meal: 'Jowar ki roti (2) + green chutney + 1 bowl dahi' },
      { time: '1:00 PM', meal: 'Moong dal + lauki/tori sabzi + jowar roti (2) + chhachh' },
      { time: '4:00 PM', meal: '1 Apple ya Pear + 4-5 akhrot' },
      { time: '7:30 PM', meal: 'Moong khichdi with desi ghee + steamed veggies (light dinner)' },
    ],
    tip: 'Pehle 4 weeks sirf wheat aur alcohol band karo — akela isi se 40% patients mein improvement aati hai.',
    note: 'Diet change treatment ka pehla step hai. Homeopathic medicines ke saath diet sahi ho to results 2x fast aate hain.',
    keyRule: 'Wheat band karo — dahi roz khao',
  },
  {
    slug: 'pcod', disease: 'PCOD/PCOS', hindi: 'पीसीओडी', cat: "Women's",
    tagline: 'Low glycemic, hormone-balancing diet jo insulin resistance kam kare',
    eat: [
      { icon: '🌾', item: 'Jowar, bajra, brown rice (thoda)', why: 'Low glycemic — blood sugar stable rakhte hain' },
      { icon: '🫘', item: 'Dal, sprouts, eggs (agar non-veg)', why: 'Protein har meal mein zaroori hai insulin ke liye' },
      { icon: '🥬', item: 'Leafy greens — palak, methi, kale', why: 'Iron + folate + fiber — hormonal balance' },
      { icon: '🌰', item: 'Methi ke daane (1 tsp subah)', why: 'Insulin sensitivity badhata hai — clinically proven' },
      { icon: '🥑', item: 'Healthy fats — akhrot, alsi, nariyal', why: 'Hormone production ke liye healthy fats zaroori hain' },
      { icon: '🍵', item: 'Spearmint tea (roz ek cup)', why: 'Androgen levels kam karta hai — research backed' },
      { icon: '🫐', item: 'Berries, apple, pear', why: 'Low sugar fruits + antioxidants' },
      { icon: '💊', item: 'Vitamin D (sun + food)', why: 'PCOD mein 70% women Vitamin D deficient hoti hain' },
    ],
    avoid: [
      { icon: '🚫', item: 'Sugar — sabse important', why: 'Insulin spike → androgen increase → PCOD worse' },
      { icon: '🚫', item: 'Fruit juice (even "natural")', why: 'Juice mein fiber nahi, sirf sugar — dangerous for PCOD' },
      { icon: '🚫', item: 'Maida / Refined carbs', why: 'Fast carbs blood sugar spike karte hain' },
      { icon: '🚫', item: 'Cow milk', why: 'IGF-1 androgen production badh sakti hai' },
      { icon: '🚫', item: 'Soy products', why: 'Phytoestrogens hormonal balance bigad sakte hain' },
      { icon: '🚫', item: 'Processed foods', why: 'Trans fats + preservatives insulin resistance badhate hain' },
    ],
    dayPlan: [
      { time: '6:30 AM', meal: 'Warm water + 1 tsp methi seeds (soaked overnight) + Spearmint tea' },
      { time: '8:30 AM', meal: '2 eggs / Moong dal chilla (2) + palak sabzi + 1 jowar roti' },
      { time: '1:00 PM', meal: 'Rajma / Chana + sabzi + brown rice (small) + salad' },
      { time: '4:00 PM', meal: '1 Apple + Akhrot (5-6) + no biscuits/chips' },
      { time: '7:30 PM', meal: 'Dal + sabzi + 1-2 jowar roti (NO rice at night)' },
    ],
    tip: 'Raat ka khana 7:30 PM se pehle kha lo aur 12 ghante ka gap rakho breakfast tak (intermittent fasting lite version).',
    note: 'PCOD diet ek lifestyle change hai. 3 months strictly follow karo — periods regular hone lagte hain, weight bhi kam hota hai.',
    keyRule: 'Sugar strictly avoid karo — protein har meal mein lo',
  },
  {
    slug: 'thyroid', disease: 'Thyroid (Hypothyroid)', hindi: 'थायरॉइड', cat: 'Endocrine',
    tagline: 'Metabolism-boosting, anti-inflammatory diet jo thyroid function support kare',
    eat: [
      { icon: '🐠', item: 'Fish — especially tuna, salmon', why: 'Selenium + Omega-3 + iodine — thyroid ke liye best food' },
      { icon: '🥚', item: 'Eggs (whole)', why: 'Selenium + iodine dono hote hain thyroid ke liye' },
      { icon: '🌰', item: 'Brazil nuts (2-3 roz)', why: 'Selenium ka sabse rich source — thyroid enzyme support' },
      { icon: '🫘', item: 'Dal, legumes', why: 'Protein + zinc — thyroid hormone production' },
      { icon: '🍎', item: 'Apple, pear, berries', why: 'Antioxidants — thyroid inflammation kam karte hain' },
      { icon: '🧄', item: 'Lahsun, haldi', why: 'Anti-inflammatory + immune modulating properties' },
      { icon: '🌿', item: 'Ashwagandha (consult doctor)', why: 'Adaptogen jo thyroid hormone levels improve karta hai' },
      { icon: '💧', item: 'Filtered water (fluoride-free)', why: 'Fluoride thyroid function block karta hai' },
    ],
    avoid: [
      { icon: '🚫', item: 'Raw goitrogenic vegetables', why: 'Raw broccoli, cauliflower, cabbage thyroid block karte hain (cooked OK hai)' },
      { icon: '🚫', item: 'Soy products', why: 'Thyroid medicine absorption block karta hai' },
      { icon: '🚫', item: "Gluten (agar Hashimoto's hai)", why: "Hashimoto's mein gluten directly thyroid attack karta hai" },
      { icon: '🚫', item: 'Sugar + refined carbs', why: 'Inflammation badhate hain — thyroid symptoms worse' },
      { icon: '🚫', item: 'Coffee — thyroxine ke saath', why: 'Thyroxine lene ke baad 1 ghante tak coffee nahi' },
      { icon: '🚫', item: 'Alcohol', why: 'Thyroid hormone production directly suppress karta hai' },
    ],
    dayPlan: [
      { time: '6:30 AM', meal: 'Thyroxine (agar le rahe hain) + sirf paani — 1 ghante kuch nahi' },
      { time: '8:00 AM', meal: '2 eggs + 1 jowar roti + palak sabzi + 1 Brazil nut' },
      { time: '1:00 PM', meal: 'Fish/Dal + sabzi + brown rice (small) + salad with lemon' },
      { time: '4:00 PM', meal: '1 Apple + akhrot (5-6) + Green tea' },
      { time: '7:00 PM', meal: 'Dal + sabzi + 2 jowar roti (early dinner for better metabolism)' },
    ],
    tip: 'Subah ka breakfast skip mat karo — hypothyroid mein metabolism already slow hota hai, breakfast na khane se aur slow ho jaata hai.',
    note: 'Thyroxine lene ke baad ek ghante tak kuch nahi khana chahiye — ye sabse common mistake hai jo absorption kam karti hai.',
    keyRule: 'Selenium aur iodine rich foods khao — raw goitrogens avoid karo',
  },
  {
    slug: 'ibs', disease: 'IBS (Irritable Bowel Syndrome)', hindi: 'आईबीएस', cat: 'Digestive',
    tagline: 'Gut-friendly, low-FODMAP diet jo bloating aur pain band kare',
    eat: [
      { icon: '🍚', item: 'White rice, oats, jowar', why: 'Easy to digest — gut pe koi load nahi' },
      { icon: '🥕', item: 'Gajar, lauki, tori (well-cooked)', why: 'Low-FODMAP vegetables — easy on gut' },
      { icon: '🍌', item: 'Banana, kiwi, papaya', why: 'Low-FODMAP fruits — gut motility help karte hain' },
      { icon: '🫚', item: 'Desi ghee (1-2 tsp)', why: 'Butyrate produce karta hai — gut lining heal karta hai' },
      { icon: '🌿', item: 'Ginger tea (adrak chai — no milk)', why: 'Gut motility improve karta hai, gas kam karta hai' },
      { icon: '🥛', item: 'Curd/Dahi (homemade)', why: 'Probiotics gut bacteria balance karte hain' },
      { icon: '🫚', item: 'Peppermint tea', why: 'Clinically proven IBS mein cramping kam karta hai' },
      { icon: '💧', item: 'ORS ya nimbu paani', why: 'Diarrhea episodes mein electrolyte loss replace karo' },
    ],
    avoid: [
      { icon: '🚫', item: 'Onion, garlic (sabse important)', why: 'High-FODMAP — IBS ka biggest trigger' },
      { icon: '🚫', item: 'Wheat / Maida', why: 'Gluten + high-FODMAP — double trouble for IBS' },
      { icon: '🚫', item: 'Milk, paneer, ice cream', why: 'Lactose intolerance IBS mein bahut common hai' },
      { icon: '🚫', item: 'Dal, rajma, chole (large portions)', why: 'High-FODMAP legumes gas aur bloating badhate hain (moong OK hai)' },
      { icon: '🚫', item: 'Carbonated drinks', why: 'Gas directly gut mein jaati hai — bloating instant' },
      { icon: '🚫', item: 'Coffee + alcohol', why: 'Gut lining irritate karte hain — motility disrupt' },
    ],
    dayPlan: [
      { time: '6:30 AM', meal: 'Warm water + Ginger tea (no milk) + soaked pumpkin seeds' },
      { time: '8:30 AM', meal: 'Oats (plain, water mein) + banana + 1 tsp desi ghee' },
      { time: '1:00 PM', meal: 'White rice + moong dal (no tadka with onion/garlic) + lauki + dahi' },
      { time: '4:00 PM', meal: 'Peppermint tea + 2-3 plain rice cakes ya murmura (no masala)' },
      { time: '7:00 PM', meal: 'Khichdi (rice + moong dal) with ghee — simplest, safest dinner for IBS' },
    ],
    tip: 'Stress IBS ka #1 trigger hai. Khana dhire khao, chaba chaba ke. Eat at regular times — gut ko routine pasand hai.',
    note: 'IBS mein trigger foods har person ke liye alag hote hain. Ek food diary rakho — 2 hafton mein patterns clear ho jaate hain.',
    keyRule: 'Low-FODMAP foods khao — trigger foods identify karo',
  },
  {
    slug: 'hairfall', disease: 'Hair Fall', hindi: 'बाल झड़ना', cat: 'Hair',
    tagline: 'Protein aur micronutrient rich diet jo hair follicles ko nourish kare',
    eat: [
      { icon: '🥚', item: 'Eggs (poore — yolk ke saath)', why: 'Biotin + protein + zinc — hair growth ke liye best single food' },
      { icon: '🫘', item: 'Dal, moong, rajma, chana', why: 'Protein + iron + zinc — hair follicle nourishment' },
      { icon: '🌰', item: 'Akhrot (7-8 roz)', why: 'Omega-3 + Vitamin E — scalp circulation badhata hai' },
      { icon: '🌿', item: 'Palak, methi, kale', why: 'Iron + folate — deficiency se hair fall hota hai' },
      { icon: '🌱', item: 'Alsi ke beej (1 tbsp roz)', why: 'Omega-3 + lignans — DHT (hair fall hormone) kam karte hain' },
      { icon: '🥕', item: 'Gajar, sweet potato', why: 'Beta-carotene → Vitamin A — scalp health ke liye' },
      { icon: '🍋', item: 'Amla (fresh ya juice)', why: 'Vitamin C — iron absorption badhata hai + collagen' },
      { icon: '🍵', item: 'Green tea', why: 'EGCG DHT-blocking properties rakhta hai' },
    ],
    avoid: [
      { icon: '🚫', item: 'Sugar + refined carbs', why: 'Blood sugar spike → DHT increase → hair fall worse' },
      { icon: '🚫', item: 'Crash dieting / Very low calorie', why: 'Hair follicles ko nutrition cut hoti hai — telogen effluvium' },
      { icon: '🚫', item: 'Alcohol', why: 'Zinc absorption block karta hai — zinc deficiency = hair fall' },
      { icon: '🚫', item: 'Zyada processed food', why: 'Nutrient-empty foods — body hair follicles ko priority dena band kar deta hai' },
      { icon: '🚫', item: 'Very hot styling + harsh chemicals', why: 'Diet ke bahar lekin important — follicle damage karta hai' },
    ],
    dayPlan: [
      { time: '6:30 AM', meal: 'Amla juice (2 tbsp) + 1 tbsp alsi seeds (ground) in warm water' },
      { time: '8:30 AM', meal: '2 eggs (any style) + palak ka paratha (jowar flour) + dahi' },
      { time: '1:00 PM', meal: 'Dal (moong/masoor) + sabzi (methi/palak) + roti + salad' },
      { time: '4:00 PM', meal: 'Akhrot (7-8) + 1 apple + green tea' },
      { time: '7:30 PM', meal: 'Rajma/Chana + sabzi + 2 roti OR Dal khichdi with ghee' },
    ],
    tip: 'Hair fall diet ka result 3-4 mahine mein dikhai deta hai — hair cycle 3 mahine ka hota hai. Patience rakho aur consistent raho.',
    note: 'Agar bahut zyada hair fall hai toh iron, ferritin, Vitamin D, aur thyroid test zaroor karo — deficiency se hair fall bahut common hai.',
    keyRule: 'Protein har meal mein — iron aur zinc ke liye focus karo',
  },
  {
    slug: 'sciatica', disease: 'Sciatica', hindi: 'सायटिका', cat: 'Joints',
    tagline: 'Anti-inflammatory diet jo nerve pain aur inflammation kam kare',
    eat: [
      { icon: '🐠', item: 'Fish (salmon, mackerel, tuna)', why: 'Omega-3 fatty acids nerve inflammation directly kam karte hain' },
      { icon: '🌿', item: 'Haldi (haldi doodh ya khane mein)', why: 'Curcumin — natural anti-inflammatory equal to some NSAIDs' },
      { icon: '🫚', item: 'Desi ghee + olive oil', why: 'Healthy fats nerve myelin sheath ko protect karte hain' },
      { icon: '🥬', item: 'Leafy greens, sabziyan', why: 'Magnesium + Vitamin K — nerve function + bone health' },
      { icon: '🫐', item: 'Berries, cherries', why: 'Anthocyanins — nerve inflammation kam karte hain' },
      { icon: '🌰', item: 'Akhrot + alsi ke beej', why: 'Omega-3 + Vitamin E — nerve repair support' },
      { icon: '🧄', item: 'Lahsun + adrak', why: 'Natural anti-inflammatory compounds' },
      { icon: '💊', item: 'Vitamin B12 rich foods', why: 'B12 deficiency sciatic nerve damage ka ek cause hai' },
    ],
    avoid: [
      { icon: '🚫', item: 'Red meat + processed meats', why: 'Inflammation badhate hain — nerve pain worse karte hain' },
      { icon: '🚫', item: 'Refined sugar + carbs', why: 'Inflammatory response trigger karte hain' },
      { icon: '🚫', item: 'Alcohol', why: 'Nerve damage accelerate karta hai (alcoholic neuropathy)' },
      { icon: '🚫', item: 'Trans fats (fried foods, packaged)', why: 'Worst inflammatory foods — nerve function disrupt' },
      { icon: '🚫', item: 'Excess caffeine', why: 'Inflammation badhata hai + sleep disrupt karta hai (healing time)' },
    ],
    dayPlan: [
      { time: '6:30 AM', meal: 'Haldi + kali mirch + doodh (ya haldi paani) + 5-6 soaked almonds' },
      { time: '8:30 AM', meal: 'Eggs (2) + jowar roti + palak sabzi ya fish (if non-veg)' },
      { time: '1:00 PM', meal: 'Dal + sabzi + roti + salad (lahsun tadka zaroori)' },
      { time: '4:00 PM', meal: 'Akhrot + cherries / berries + adrak ki chai' },
      { time: '7:30 PM', meal: 'Fish curry + rice (if non-veg) OR Dal khichdi + haldi ghee' },
    ],
    tip: 'Raat ko sone ki position important hai — pillow ghutno ke beech rakho. Magnesium-rich foods (nuts, seeds) raat ko better sleep dete hain.',
    note: 'B12 level zaroor check karwao — B12 deficiency sciatic-like pain create karti hai jo vitamin se theek ho jaata hai, surgery nahi chahiye.',
    keyRule: 'Anti-inflammatory foods khao — uric acid aur processed food avoid karo',
  },
]

export default function DietPage() {
  const [sel, setSel] = useState<string | null>(null)
  const [q, setQ] = useState('')
  const shown = q
    ? DIET_CHARTS.filter(d =>
        d.disease.toLowerCase().includes(q.toLowerCase()) ||
        d.hindi.includes(q) ||
        d.cat.toLowerCase().includes(q.toLowerCase())
      )
    : DIET_CHARTS

  // ── DIET DETAIL VIEW ──
  if (sel) {
    const d = DIET_CHARTS.find(x => x.slug === sel)!
    return (
      <div className="page-in" style={{ paddingTop: 66, background: 'var(--bg)', minHeight: '100vh' }}>
        {/* Breadcrumb */}
        <div style={{ background: 'var(--bg2)', borderBottom: '1px solid var(--border)', padding: '11px clamp(16px,4vw,32px)' }}>
          <div style={{ maxWidth: 960, margin: '0 auto', display: 'flex', gap: 8, fontSize: 13, color: 'var(--ink4)' }}>
            <span onClick={() => setSel(null)} className="tap" style={{ color: 'var(--gold-dk)', cursor: 'pointer' }}>Diet Charts</span>
            <span>›</span>
            <span>{d.disease}</span>
          </div>
        </div>

        {/* Hero */}
        <div style={{ background: 'linear-gradient(135deg,var(--bg) 60%,var(--bg2) 100%)', borderBottom: '1px solid var(--border)', padding: '44px clamp(16px,4vw,32px) 36px', textAlign: 'center' }}>
          <span style={{ fontSize: 11, fontWeight: 600, padding: '4px 14px', borderRadius: 100, background: 'var(--gold-bg)', color: 'var(--gold-dk)', border: '1px solid rgba(184,145,42,.25)' }}>{d.cat}</span>
          <h1 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 'clamp(24px,5vw,46px)', fontWeight: 700, color: 'var(--ink)', margin: '14px 0 6px' }}>{d.disease} — Diet Chart</h1>
          <div style={{ fontSize: 18, color: 'var(--gold-dk)', fontFamily: 'var(--font-playfair,Georgia,serif)', fontStyle: 'italic', marginBottom: 10 }}>{d.hindi}</div>
          <p style={{ fontSize: 15, color: 'var(--ink3)', maxWidth: 540, margin: '0 auto 16px', lineHeight: 1.7, fontWeight: 300 }}>{d.tagline}</p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 20px', background: 'rgba(184,145,42,.1)', border: '1px solid rgba(184,145,42,.3)', borderRadius: 100, fontSize: 13, color: 'var(--gold-dk)', fontWeight: 600 }}>
            💡 Key Rule: {d.keyRule}
          </div>
        </div>

        <div style={{ maxWidth: 960, margin: '0 auto', padding: '40px clamp(16px,4vw,32px) 80px' }}>
          {/* Eat + Avoid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 20, marginBottom: 28 }}>
            <div style={{ background: 'rgba(58,125,82,.04)', border: '1px solid rgba(58,125,82,.2)', borderRadius: 16, padding: '24px' }}>
              <h2 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 20, fontWeight: 700, color: 'var(--green)', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 26, height: 26, borderRadius: '50%', background: 'rgba(58,125,82,.15)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 13 }}>✓</span>
                Ye Zaroor Khayein
              </h2>
              <div style={{ display: 'grid', gap: 9 }}>
                {d.eat.map((e, i) => (
                  <div key={i} style={{ display: 'flex', gap: 11, alignItems: 'flex-start', padding: '10px 12px', background: 'rgba(58,125,82,.04)', borderRadius: 9, border: '1px solid rgba(58,125,82,.12)' }}>
                    <span style={{ fontSize: 18, flexShrink: 0 }}>{e.icon}</span>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink2)', marginBottom: 2 }}>{e.item}</div>
                      <div style={{ fontSize: 11, color: 'var(--ink4)', lineHeight: 1.5, fontWeight: 300 }}>{e.why}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: 'rgba(176,64,64,.04)', border: '1px solid rgba(176,64,64,.2)', borderRadius: 16, padding: '24px' }}>
              <h2 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 20, fontWeight: 700, color: 'var(--red)', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 26, height: 26, borderRadius: '50%', background: 'rgba(176,64,64,.15)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 13 }}>✕</span>
                Ye Bilkul Mat Khayein
              </h2>
              <div style={{ display: 'grid', gap: 9 }}>
                {d.avoid.map((e, i) => (
                  <div key={i} style={{ display: 'flex', gap: 11, alignItems: 'flex-start', padding: '10px 12px', background: 'rgba(176,64,64,.04)', borderRadius: 9, border: '1px solid rgba(176,64,64,.12)' }}>
                    <span style={{ fontSize: 18, flexShrink: 0 }}>{e.icon}</span>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink2)', marginBottom: 2 }}>{e.item}</div>
                      <div style={{ fontSize: 11, color: 'var(--ink4)', lineHeight: 1.5, fontWeight: 300 }}>{e.why}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Day Plan */}
          <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, padding: '26px', marginBottom: 20 }}>
            <h2 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 20, fontWeight: 700, color: 'var(--ink)', marginBottom: 18 }}>📅 Sample Day Plan</h2>
            {d.dayPlan.map((m, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: 16, padding: '12px 0', borderBottom: i < d.dayPlan.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--gold-dk)' }}>{m.time}</div>
                <div style={{ fontSize: 13, color: 'var(--ink2)', lineHeight: 1.65, fontWeight: 300 }}>{m.meal}</div>
              </div>
            ))}
          </div>

          {/* Tip + Note */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 14, marginBottom: 28 }}>
            <div style={{ padding: '18px 22px', background: 'rgba(184,145,42,.08)', border: '1px solid rgba(184,145,42,.2)', borderRadius: 12 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--gold-dk)', letterSpacing: 1, marginBottom: 8, textTransform: 'uppercase' }}>💡 Pro Tip</div>
              <p style={{ fontSize: 13, color: 'var(--ink2)', lineHeight: 1.75, fontWeight: 300 }}>{d.tip}</p>
            </div>
            <div style={{ padding: '18px 22px', background: 'rgba(58,125,82,.05)', border: '1px solid rgba(58,125,82,.18)', borderRadius: 12 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--green)', letterSpacing: 1, marginBottom: 8, textTransform: 'uppercase' }}>📋 Important Note</div>
              <p style={{ fontSize: 13, color: 'var(--ink2)', lineHeight: 1.75, fontWeight: 300 }}>{d.note}</p>
            </div>
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center', padding: '28px', background: 'rgba(184,145,42,.06)', border: '1px solid rgba(184,145,42,.2)', borderRadius: 14, marginBottom: 24 }}>
            <div style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 6 }}>Personalized Diet Plan Chahiye?</div>
            <p style={{ fontSize: 13, color: 'var(--ink3)', marginBottom: 16, fontWeight: 300 }}>Dr. Shadab aapki condition dekh ke customized plan banate hain</p>
            <a href="https://wa.me/918983458889" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', background: '#25d366', color: '#fff', borderRadius: 100, textDecoration: 'none', fontSize: 13, fontWeight: 600 }}>📲 WhatsApp — Free</a>
          </div>
          <div style={{ textAlign: 'center' }}>
            <button onClick={() => setSel(null)} style={{ padding: '10px 22px', border: '1px solid var(--border2)', background: 'var(--card)', color: 'var(--ink3)', borderRadius: 100, fontSize: 13, cursor: 'pointer', fontWeight: 500 }}>← Sabhi Diet Charts</button>
          </div>
        </div>
        <a href="https://wa.me/918983458889" target="_blank" rel="noopener noreferrer" className="fab">📲</a>
      </div>
    )
  }

  // ── DIET LISTING ──
  return (
    <div className="page-in" style={{ paddingTop: 66, background: 'var(--bg)', minHeight: '100vh' }}>
      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg,var(--bg) 60%,var(--bg2) 100%)', borderBottom: '1px solid var(--border)', padding: '52px clamp(16px,4vw,32px) 40px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', textAlign: 'center' }}>
          <SL c="Free Diet Charts" />
          <h1 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 'clamp(28px,5vw,52px)', fontWeight: 700, color: 'var(--ink)', marginBottom: 10 }}>Disease-Wise Diet Charts</h1>
          <p style={{ fontSize: 15, color: 'var(--ink3)', marginBottom: 28, fontWeight: 300, lineHeight: 1.7 }}>Kya khayein, kya nahi — har disease ke liye doctor recommended. Indian foods ke hisaab se.</p>
          <div style={{ maxWidth: 440, margin: '0 auto' }}>
            <input
              value={q}
              onChange={e => setQ(e.target.value)}
              placeholder="Disease dhundo — Psoriasis, PCOD, Thyroid..."
              style={{ width: '100%', padding: '14px 20px', background: 'var(--card)', border: '1px solid var(--border2)', borderRadius: 100, color: 'var(--ink)', fontSize: 14, boxShadow: 'var(--sh-sm)', outline: 'none', fontFamily: 'inherit' }}
              onFocus={e => { e.target.style.borderColor = 'var(--gold)'; e.target.style.boxShadow = '0 0 0 3px rgba(184,145,42,.1)' }}
              onBlur={e => { e.target.style.borderColor = 'var(--border2)'; e.target.style.boxShadow = 'var(--sh-sm)' }}
            />
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 960, margin: '0 auto', padding: '40px clamp(16px,4vw,32px) 80px' }}>
        {/* Banner */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '16px 22px', background: 'rgba(184,145,42,.07)', border: '1px solid rgba(184,145,42,.2)', borderRadius: 12, marginBottom: 28, flexWrap: 'wrap' }}>
          <div style={{ fontSize: 26 }}>🥗</div>
          <div>
            <div style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 15, fontWeight: 700, color: 'var(--ink)', marginBottom: 2 }}>Diet se hi shuru hoti hai healing</div>
            <div style={{ fontSize: 12, color: 'var(--ink3)', fontWeight: 300 }}>Homeopathy + sahi diet = 2x fast results. Har chart free hai — no signup needed.</div>
          </div>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: 16 }}>
          {shown.map(d => (
            <div key={d.slug} onClick={() => setSel(d.slug)} className="hov" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--r)', padding: '22px', cursor: 'pointer', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(to right,var(--gold-dk),var(--gold-lt))', borderRadius: '14px 14px 0 0' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <span style={{ fontSize: 10, fontWeight: 600, padding: '3px 10px', borderRadius: 100, background: 'var(--gold-bg)', color: 'var(--gold-dk)', border: '1px solid rgba(184,145,42,.2)' }}>{d.cat}</span>
                <span style={{ fontSize: 11, color: 'var(--ink4)' }}>Free</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 19, fontWeight: 700, color: 'var(--ink)', marginBottom: 4 }}>{d.disease}</h3>
              <div style={{ fontSize: 12, color: 'var(--gold-dk)', fontStyle: 'italic', fontFamily: 'var(--font-playfair,Georgia,serif)', marginBottom: 8 }}>{d.hindi}</div>
              <p style={{ fontSize: 12, color: 'var(--ink3)', lineHeight: 1.6, marginBottom: 14, fontWeight: 300 }}>{d.tagline}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10, borderTop: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', gap: 10 }}>
                  <span style={{ fontSize: 10, color: 'var(--green)' }}>✓ {d.eat.length} foods</span>
                  <span style={{ fontSize: 10, color: 'var(--red)' }}>✕ {d.avoid.length} avoid</span>
                </div>
                <span style={{ fontSize: 12, color: 'var(--gold)', fontWeight: 600 }}>View →</span>
              </div>
            </div>
          ))}
          {/* Coming soon card */}
          <div style={{ background: 'var(--bg2)', border: '2px dashed var(--border2)', borderRadius: 'var(--r)', padding: '22px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: 160 }}>
            <div style={{ fontSize: 26, marginBottom: 8 }}>🔜</div>
            <div style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 15, fontWeight: 600, color: 'var(--ink3)', marginBottom: 5 }}>Aur Charts Coming</div>
            <div style={{ fontSize: 11, color: 'var(--ink4)', fontWeight: 300, lineHeight: 1.6 }}>Arthritis, Diabetes, Anxiety diet charts jald aa rahe hain</div>
          </div>
        </div>
      </div>

      <a href="https://wa.me/918983458889" target="_blank" rel="noopener noreferrer" className="fab">📲</a>
    </div>
  )
}
