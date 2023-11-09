import { List } from '@/types/TMDB.type'

export const movieLinks: { name: string; href: List }[] = [
  {
    name: 'Now Playing',
    href: 'now_playing',
  },
  {
    name: 'Top Rated',
    href: 'top_rated',
  },
  {
    name: 'Popular',
    href: 'popular',
  },
  {
    name: 'Upcoming',
    href: 'upcoming',
  },
]
