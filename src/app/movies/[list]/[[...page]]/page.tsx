import type { Metadata, ResolvingMetadata } from 'next'
import { Navigation } from '@/app/movies/components/Navigation'
import { Pagination } from '@/app/movies/components/Pagination'
import { getMovies } from '@/services/movies'
import { List, type MoviesResponse } from '@/types/TMDB.type'
import { movieLinks } from '@/data/movies'
import { MovieCard } from '@/app/components/MovieCard'

import './page.css'

type Props = {
  params: { list: List; page: string[] }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const list = params.list
  const [link] = movieLinks.filter((link) => link.href === list) ?? []

  return {
    title: link.name,
  }
}

const Movie = async ({ params }: Props) => {
  const list = params?.list ?? 'top_rated'
  const [title] = movieLinks.filter((link) => link.href === list) ?? []
  const page = params?.page?.shift() ?? 1

  const response: MoviesResponse = await getMovies(list, Number(page))

  if (!response?.ok) {
    return <>Error Message</>
  }

  return (
    <>
      <header>
        <Navigation />
      </header>

      <h1>Movie List: {title.name}</h1>

      <Pagination
        list={list}
        current={response?.data?.page ?? 1}
        total={response?.data?.total_pages}
      ></Pagination>

      <section className="movie-list">
        {response?.data.results.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />
        })}
      </section>

      <Pagination
        list={list}
        current={response?.data?.page ?? 1}
        total={response?.data?.total_pages}
      ></Pagination>
    </>
  )
}

export default Movie
