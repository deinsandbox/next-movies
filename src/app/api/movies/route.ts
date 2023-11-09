import { MoviesData } from '@/types/TMDB.type'
import { type NextRequest, NextResponse } from 'next/server'

const get = async (req: NextRequest) => {
  try {
    const { TMDB_API, TMDB_READ_KEY } = process?.env ?? {}

    const searchParams = req.nextUrl.searchParams
    const page = searchParams.get('page') ?? 1

    if (!TMDB_API || !TMDB_READ_KEY) {
      throw new Error('Missing TMDB environment variables')
    }

    const headers = new Headers()
    headers.append('accept', 'application/json')
    headers.append('Authorization', `Bearer ${TMDB_READ_KEY}`)

    const options: RequestInit = {
      method: 'GET',
      headers,
    }

    const url = new URL('movie/top_rated', TMDB_API)
    url.searchParams.set('language', 'en-US')
    url.searchParams.set('page', `${page}`)

    const result: MoviesData = await fetch(url.toString(), options).then((res) => res.json())

    if ('success' in result && !result?.success) {
      console.error('API Movies Error: ', result)
      throw new Error(result?.status_message)
    }

    return NextResponse.json(result, { status: 200 })
  } catch (error) {
    console.error('API Movies Error: ', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export { get as GET }
