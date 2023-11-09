export const getMovies = async (page: number) => {
  const { API_URL } = process?.env ?? {}

  if (!API_URL) {
    throw new Error('Missing API environment variables')
  }

  const headers = new Headers()
  headers.append('Content-Type', 'application/json')

  const params: RequestInit = {
    method: 'GET',
    headers,
  }

  const url = new URL('movies', API_URL)
  if (page) {
    url.searchParams.set('page', `${page}`)
  }

  try {
    const response = await fetch(url.toString(), params).then((res) => res)

    const result = {
      ok: response.ok,
      status: response.status,
      data: await response.json(),
    }

    return result
  } catch (error) {
    console.error('Service Movies Error: ', error)
    const result = {
      ok: false,
      status: 500,
      data: {},
    }
    return result
  }
}
