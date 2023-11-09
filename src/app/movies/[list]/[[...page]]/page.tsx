import { Pagination } from '@/app/components/Pagination'
import { getMovies } from '@/services/movies'
import { List, type MoviesResponse } from '@/types/TMDB.type'

type Props = {
  params: { list: List; page: string[] }
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
