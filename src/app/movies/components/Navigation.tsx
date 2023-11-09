'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { movieLinks } from '@/data/movies'

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
