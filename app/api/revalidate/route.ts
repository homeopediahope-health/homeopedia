import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get('slug')
  if (slug) {
    revalidatePath(`/diseases/${slug}`)
  } else {
    revalidatePath('/diseases', 'layout')
  }
  return NextResponse.json({ revalidated: true, slug: slug || 'all' })
}
