import Image from 'next/image'
import styles from './page.module.css'
import { movieLinks } from '@/data/movies'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Next project to explore routing and SSR using{' '}
          <strong>The Movie DB</strong>&apos;s API.
        </p>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        {movieLinks.map((link) => {
          return (
            <a
              key={link.href}
              href={`/movies/${link.href}`}
              className={styles.card}
            >
              <h2>
                {link.name} <span>-&gt;</span>
              </h2>
              <p>{link.description}</p>
            </a>
          )
        })}
      </div>
    </main>
  )
}
