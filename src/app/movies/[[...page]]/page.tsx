import { Pagination } from '@/app/components/Pagination'
import { getMovies } from '@/services/movies'
import { type MoviesResponse } from '@/types/TMDB.type'

const Movie = async ({ params }: { params: { page: string[] } }) => {
  const page = params?.page?.shift() ?? 1
  const response: MoviesResponse = await getMovies(Number(page))

  if (!response?.ok) {
    return <>Error Message</>
  }

  return (
    <>
      <Pagination current={response?.data?.page ?? 1} total={response?.data?.total_pages}></Pagination>
      <pre>
        <code>{JSON.stringify(response?.data, null, 2)}</code>
      </pre>
    </>
  )
}

export default Movie
