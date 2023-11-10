export type MoviesResponse =
  | {
      ok: true
      status: number
      data: MovieResult
    }
  | {
      ok: false
      status: number
      data: MovieError
    }
  | {
      ok: false
      status: number
      data: {}
    }

export type MoviesData = MovieResult | MovieError

type MovieResult = {
  dates?: {
    maximum: string
    minimum: string
  }
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

type MovieError = {
  success: boolean
  status_code: number
  status_message: string
}

export type Movie = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title?: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export type List = 'now_playing' | 'top_rated' | 'popular' | 'upcoming'
