'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { movieLinks } from '@/data/movies'

import './Navigation.css'

export const Navigation = () => {
  const pathname = usePathname()

  return (
    <>
      <nav>
        <ul className="menu">
          <li>
            <Link href="/" className="home">
              Home
            </Link>
          </li>

          {movieLinks.map((link) => {
            return (
              <li key={link.href}>
                <Link
                  className={`${
                    pathname.startsWith(`/movies/${link.href}`) ? 'active' : ''
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
