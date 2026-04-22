export interface YTVideo {
  id: string
  title: string
  published: string
  thumbnail: string
  url: string
}

export async function getLatestYouTubeVideos(channelId: string, count = 5): Promise<YTVideo[]> {
  try {
    const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`
    const res = await fetch(rssUrl, { next: { revalidate: 3600 } }) // refresh every hour
    if (!res.ok) return []
    const xml = await res.text()

    const entries = xml.match(/<entry>([\s\S]*?)<\/entry>/g) || []

    return entries.slice(0, count).map(entry => {
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
    return []
  }
}
