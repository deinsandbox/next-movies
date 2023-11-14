import { List } from '@/types/TMDB.type'

export const movieLinks: { name: string; href: List; description: string }[] = [
  {
    name: 'Now Playing',
    href: 'now_playing',
    description:
      'Explore the movies that are currently being shown in theaters',
  },
  {
    name: 'Top Rated',
    href: 'top_rated',
    description: 'Explore the top rated movies on TMDB right now',
  },
  {
    name: 'Popular',
    href: 'popular',
    description: 'Explore the most popular movies on TMDB right now',
  },
  {
    name: 'Upcoming',
    href: 'upcoming',
    description: 'Explore the movies that are coming soon',
  },
]
