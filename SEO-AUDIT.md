# HomeoPedia.in — Honest SEO Audit & 90-Din Plan
*Audit date: 12 July 2026 · Site launch: April 2026 (~3 mahine purani)*

---

## Sabse Pehle — Kadwi Sachchai

**1. Traffic kam hona abhi normal hai.** Google nayi site ko — especially health (YMYL) niche mein — 6-12 mahine tak seriously rank nahi karta. Ye "Google sandbox" effect hai. Koi jugaad, koi trick ise bypass nahi karti. Jo log 3 mahine mein health site pe traffic ka wada karte hain wo jhooth bolte hain.

**2. Bounce rate se ranking NAHI girti.** GA4 ka bounce/engagement rate Google ka direct ranking factor nahi hai. Ranking isliye nahi aa rahi kyunki site nayi hai + competition bahut strong hai. Haan, bounce fix karna phir bhi zaroori hai — kyunki jo 100 log aa rahe hain unme se consult conversions badhengi.

**3. "Psoriasis treatment" jaise keywords pe aap kabhi rank nahi karoge.** In queries pe Google sirf Healthline, WebMD, 1mg, Practo, Mayo Clinic dikhata hai. Ye ladai ladna hi galat hai. Winnable keywords ye hain:
- "psoriasis ka homeopathic ilaj" / "psoriasis homeopathic medicine in hindi"
- "चम्बल का इलाज" (Devanagari long-tail)
- "guttate psoriasis homeopathy" (specific sub-types — kam competition)
- Symptom-first queries: "sar mein moti rusi jaisi parat" type

**4. E-E-A-T risk — ye seriously socho.** Site pe strong claims hain: "70-78% improvement", "Zero Side Effects", specific medicine + potency recommendations ("Sulphur 200 ya 1M"). Google health content ko medical consensus ke against hone pe demote karta hai. Ye claims ranking mein madad nahi kar rahe — nuksan kar sakte hain. Recommendation:
- Percentages ko exact study citation ke saath likho (journal, year, sample size, link) — bina link ke number = red flag
- "Zero side effects" jaisi absolute claims hatao ya soften karo
- Medicine sections pe jo disclaimer hai wo achha hai — usse rakho
- Ye advice sirf SEO ke liye hai; content decisions aapke hain

**5. Pehle saal ka asli traffic source Google nahi, YouTube hai.** Channel already active hai — wahi aapka moat hai. Har video = us disease page ka pinned comment + description link + video mein verbal CTA ("description mein pura guide hai").

---

## Jo Achha Hai (isse chhedo mat)

- Technical SEO solid: FAQPage, MedicalCondition, MedicalWebPage, Article, Breadcrumb schema sab lage hain
- Sitemap, robots, canonical, OG images — sab sahi
- Content depth genuinely achhi hai (31 FAQs per disease, diet charts, types)
- Internal linking (AutoLink, related diseases) implemented
- "Honest Note — Kab Kaam Nahi Karta" section — ye E-E-A-T ke liye gold hai, har page pe rakho

## Aaj Fix Hua (code mein)

1. **Titles ab intent-matched hain:** "Psoriasis Treatment | Symptoms, Diet & Homeopathy" (unwinnable English) → "Psoriasis ka Homeopathic Ilaj (चम्बल) — Medicine, Diet | HomeoPedia" (winnable Hinglish + Devanagari). Sanity ka metaTitle sirf tab use hoga jab usme Devanagari ho.
2. **Devanagari naam ab H1 ke neeche dikhta hai** — Hindi searcher ko pehli second mein language match milta hai.
3. **Hero mein quick-jump chips** (💊 Medicines · 🥗 Diet · 🌿 Treatment · ❓ FAQ) — visitor 5 second mein apne answer tak pahunchta hai, bounce kam hoga.
4. **Schema alternateName mein Devanagari** add hua.

⚠️ Note: `lib/hindiNames.ts` mein 100 diseases hain (DiseasesListClient se). Baaki ~100 pages ko improved Hinglish fallback milega, Devanagari nahi. Sanity mein hindiName field mein Devanagari bharna long-term better hai.

---

## 🚨 CRITICAL — De-indexing ka Asli Karan Mil Gaya (root cause)

**Kya hua:** 13 June 2026 ko indexed pages **247 → 180** gir gaye (67 pages de-indexed). Isi ke saath daily impressions ~100/day (late May) se ~20/day (late June) gir gaye. Ye "normal sandbox" NAHI tha — real bug tha.

**Kyun hua:** 14 June ke commit (`9ff3f22`) me slugs badle gaye **bina 301 redirect ke**. Purane URLs Google me indexed the; slug badalte hi wo 404 ho gaye aur Google ne nikaal diya. `next.config.ts` me koi redirect nahi tha.

**Fix (aaj — code me done):** 4 confirmed renames pe 301 redirects laga diye:
- `/diseases/kabj-constipation` → `/diseases/constipation`
- `/diseases/lower-back-pain` → `/diseases/back-pain`
- `/symptoms/sore-throat` → `/symptoms/gale-mein-dard`
- `/symptoms/hives-urticaria` → `/symptoms/skin-allergy`

**Baaki critical issues (report se):**
| Issue | Pages | Action |
|---|---|---|
| Not found (404) | 15 | 4 fix ho gaye. Baaki ~11 ke exact URL GSC me "Not found" pe click karke nikalo → mujhe do → redirect lagau |
| Server error (5xx) | 3 | June 14 commit me `.catch()` guards already lag gaye — deploy ke baad Google re-crawl pe khud theek hoga. GSC me "Validate Fix" dabao |
| Crawled – currently not indexed | 82 | Ye NORMAL-ish hai naye site pe (crawl budget queue). Internal links + time se sudhrega. Emergency nahi |
| Excluded by 'noindex' | 2 | privacy-policy + terms — intentional, sahi hai. Kuch mat karo |
| Alternate page w/ canonical | 5 | Normal duplicate handling. No action |
| Duplicate, different canonical | 1 | Minor. Ignore for now |

**Deploy ke baad zaroori:** GSC → Indexing → Pages → "Not found (404)" aur "Server error" issue pe jao → **"Validate Fix"** button dabao. Isse Google ko signal jaata hai ki re-crawl kare.

**Aage se rule:** slug kabhi mat badlo bina redirect ke. Agar badalna zaroori ho, pehle `next.config.ts` me redirect add karo, phir slug change karo. Ye galti mahange padti hai — 3 hafte ki growth ek commit me chali gayi.

---

## GSC Data Findings (12 July 2026 — Last 3 Months)

**Numbers:** 19 clicks, ~2,800 impressions, 235 pages ko impressions. Saare clicks brand query ("homeopedia") se — non-brand organic clicks: 0.

**De-indexing ka darr:** Data me penalty nahi dikhti. Mid-May spike (691 impr/week) → settle (~200/week) = naye site ka normal "honeymoon then settle" pattern. Naye site pe kuch pages ka "Crawled – currently not indexed" me aana-jaana normal hai. Baar-baar reindex request mat maro — content improve karo, internal links do.

**Finding 1 — Top-10 rankings hain lekin 0 clicks (title problem, ab fixed):**
- "wajan badhna" pos 6.5 · "patthari" pos 6.8 · "haddi badhna kaise roke" pos 10 · "ovarian cyst homeopathic medicine in hindi" pos 10.5
- Pages: /diseases/thyroid (pos 8.1), /diseases/piles (10.1), /diet/arthritis (11.8), /diet/urticaria (12.2), /symptoms/shoulder-pain (8.6) — sab 0 clicks
- Deploy ke baad 2-4 hafte me CTR change dikhega — GSC me inhi pages ko track karo

**Finding 2 — Asli SEO wedge: Lab Tests + Diet, diseases nahi:**
- Sabse zyada impressions wala page: **/lab-tests/ana-test (156)** — homepage se bhi zyada
- "ana ena test kya kya h hindi me" — 104 impressions, pos 29. **Action:** ana-test page pe ENA section add karo Sanity me, title me "ANA / ENA" dono rakho — ye pehla real traffic winner ban sakta hai
- Diet pattern queries: "hla b27 positive diet chart", "pcod diet chart in hindi", "ovarian cyst diet chart", "sciatica diet"
- **Content priority badlo:** naye diseases likhne se pehle 20-30 naye lab-test pages + har popular test ka "kya hai hindi me" angle

**Finding 3 —** Mobile 87% impressions (1,683 vs 1,075 desktop) aur mobile position (10.0) desktop (36.2) se bahut better — mobile experience hi maintain karo, wahi audience hai.

## GSC Data Analysis — Aapse Ye Chahiye

Main Search Console direct access nahi kar sakta. Ye karo:

1. [search.google.com/search-console](https://search.google.com/search-console) kholo → homeopedia.in property
2. **Performance → Search results** → date range: **Last 3 months**
3. Upar right corner **Export → Download CSV**
4. Wo zip/CSV files is folder (`homeopedia`) mein daal do aur mujhe bolo

Main fir bataunga: kaunse queries pe impressions aa rahe hain lekin clicks nahi (title fix targets), kaunse pages Google ne index nahi kiye, aur kahan position 11-20 hai (striking distance — wahi pages pehle push karne hain).

---

## 90-Din Realistic Plan

**Mahina 1 (abhi):**
- Ye code changes deploy karo (`vercel` / push.sh)
- GSC export mujhe do → data-driven title tuning
- Har existing YouTube video ke description mein related disease page ka link + pinned comment
- GSC mein saare disease URLs "Request Indexing" (indexing-api.ts script already hai)
- Claims pe citations lagao (Point 4 upar)

**Mahina 2:**
- Har hafte 1 naya YouTube video → usi topic ka disease page saath mein promote
- Top 10 diseases ke liye Devanagari-heavy FAQ answers (Hindi searcher ke exact phrases)
- 5-10 symptom-first pages banao ("raat ko khujli badhna", "eltiyon pe silver parat") — inpe competition zero hai
- WhatsApp share loop: har consult patient ko unki disease ka page bhejo — direct traffic + brand queries banti hain

**Mahina 3:**
- GSC mein position 11-20 wale pages identify karo → unhe expand/update karo
- Brand searches build karo ("homeopedia" search hone lagega to Google trust badhta hai) — YouTube pe naam repeat karo
- Baaki 100 diseases ke Devanagari names Sanity mein add karo

**Kya expect karo (honest):**
- Month 3-4: 20-50 clicks/day long-tail se — zyada nahi
- Month 6-9: agar consistent rahe to 100-300 clicks/day realistic hai
- Month 12+: compounding shuru hoti hai
- Is beech YouTube hi primary source rahega — aur wahi sahi hai

---

*Ye audit code + live site inspection pe based hai. GSC data milne ke baad numbers ke saath refine hoga.*
