export interface YTVideo {
  id: string
  title: string
  published: string
  thumbnail: string
  url: string
}

// Fallback video IDs if RSS is blocked on server
const FALLBACK_IDS = ['44gt-Fu1XdU','c29pSyE5apE','NKHq9F0bVSs','DUGyLQhEsxw','sJ9rrU7Xuoc']

export async function getLatestYouTubeVideos(channelId: string, count = 5): Promise<YTVideo[]> {
  try {
    const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`
    const res = await fetch(rssUrl, { next: { revalidate: 3600 }, headers: { 'User-Agent': 'Mozilla/5.0' } })
    if (!res.ok) return buildFallback(count)
    const xml = await res.text()
    if (!xml.includes('<entry>')) return buildFallback(count)

    const entries = xml.match(/<entry>([\s\S]*?)<\/entry>/g) || []

    // Filter out YouTube Shorts (titles with #shorts or duration hints)
    const filtered = entries.filter(e => {
      const title = (e.match(/<title>([^<]+)<\/title>/) || [])[1] || ''
      return !title.toLowerCase().includes('#short') && !title.toLowerCase().includes('shorts')
    })

    return filtered.slice(0, count).map(entry => {
      const id = (entry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/) || [])[1] || ''
      const title = (entry.match(/<title>([^<]+)<\/title>/) || [])[1] || ''
      const published = (entry.match(/<published>([^<]+)<\/published>/) || [])[1] || ''
      return {
        id,
        title: title.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'"),
        published,
        thumbnail: `https://img.youtube.com/vi/${id}/mqdefault.jpg`,
        url: `https://www.youtube.com/watch?v=${id}`,
      }
    }).filter(v => v.id)
  } catch {
    return buildFallback(count)
  }
}

function buildFallback(count: number): YTVideo[] {
  return FALLBACK_IDS.slice(0, count).map(id => ({
    id,
    title: 'Dr. Shadab Khan — Homeopathy Guide',
    published: new Date().toISOString(),
    thumbnail: `https://img.youtube.com/vi/${id}/mqdefault.jpg`,
    url: `https://www.youtube.com/watch?v=${id}`,
  }))
}
