import { Movie } from '@/types/TMDB.type'
import React from 'react'
import Image from 'next/image'

import './MovieCard.css'

type Props = {
  movie: Pick<
    Movie,
    'title' | 'poster_path' | 'release_date' | 'vote_average' | 'overview'
  >
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

  const date = new Date(movie.release_date).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      <article className="movie-card movie-card_format">
        <Image
          src={imgUrl.toString()}
          alt={movie.title}
          className="movie-poster"
          width={220}
          height={330}
          priority
        />
        <div className="movie-description">
          <div className="movie-rating">{`⭐ ${rating}`}</div>
          <div className="movie-name">{movie.title}</div>
          <div className="movie-date">{date}</div>
          <div className="movie-overview">{movie.overview}</div>
        </div>
      </article>
    </>
  )
}
