import type { Metadata, ResolvingMetadata } from 'next'
import { Navigation } from '@/app/movies/components/Navigation'
import { Pagination } from '@/app/movies/components/Pagination'
import { getMovies } from '@/services/movies'
import { List, type MoviesResponse } from '@/types/TMDB.type'
import { movieLinks } from '@/data/movies'

type Props = {
  params: { list: List; page: string[] }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const list = params.list
  const [link] = movieLinks.filter((link) => link.href === list) ?? []

  return {
    title: link.name,
  }
}

const Movie = async ({ params }: Props) => {
  const list = params?.list ?? 'top_rated'
  const page = params?.page?.shift() ?? 1
  const response: MoviesResponse = await getMovies(list, Number(page))

  if (!response?.ok) {
    return <>Error Message</>
  }

  return (
    <>
      <Navigation />
      <Pagination
        list={list}
        current={response?.data?.page ?? 1}
        total={response?.data?.total_pages}
      ></Pagination>
      <pre>
        <code>{JSON.stringify(response?.data, null, 2)}</code>
      </pre>
    </>
  )
}

export default Movie
