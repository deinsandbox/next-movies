'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { List } from '@/types/TMDB.type'

const movieLinks: { name: string; href: List }[] = [
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

export const Navigation = () => {
  const pathname = usePathname()

  return (
    <>
      <nav>
        <ul>
          {movieLinks.map((link) => {
            return (
              <li key={link.href}>
                <Link
                  className={`link ${
                    pathname === `/movies/${link.href}` ? 'active' : ''
                  }`}
                  href={`/movies/${link.href}`}
                >
                  {link.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}
