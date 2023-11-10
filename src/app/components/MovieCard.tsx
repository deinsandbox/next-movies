import { Movie } from '@/types/TMDB.type'
import React from 'react'
import Image from 'next/image'

type Props = {
  movie: Movie
}

export const MovieCard = ({ movie }: Props) => {
  const { TMDB_IMG } = process?.env ?? {}

  let imgUrl: string | URL = '/img/dummy/poster.svg'
  if (movie?.poster_path) {
    imgUrl = new URL(`w220_and_h330_face${movie?.poster_path}`, TMDB_IMG)
  }

  let rating: string = 'NR'
  if (movie.vote_average) {
    rating = movie.vote_average.toFixed(1)
  }

  return (
    <>
      <Image
        src={imgUrl.toString()}
        alt={movie.title}
        className="movie-poster"
        width={220}
        height={330}
        priority
      />
      <div className="movie-rating">{`⭐ ${rating}`}</div>
      <div className="movie-name">{movie.title}</div>
      <div className="movie-overview">{movie.overview}</div>

      {/* <pre>
        <code>{JSON.stringify(movie, null, 2)}</code>
      </pre> */}
    </>
  )
}
