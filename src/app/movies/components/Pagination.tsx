'use client'

import { List } from '@/types/TMDB.type'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

export const Pagination = ({
  list,
  current,
  total,
}: {
  list: List
  current: number
  total: number
}) => {
  const router = useRouter()

  return (
    <>
      <button
        type="button"
        onClick={() => router.push('/')}
      >
        Home
      </button>
{" "}
      <button
        type="button"
        onClick={() => router.push(`/movies/${list}/1`, { scroll: true })}
        disabled={current === 1}
      >
        First
      </button>
      <button
        type="button"
        onClick={() =>
          router.push(`/movies/${list}/${current - 1}`, { scroll: true })
        }
        disabled={current === 1}
      >
        Prev
      </button>
      <span>
        {current}/{total}
      </span>
      <button
        type="button"
        onClick={() =>
          router.push(`/movies/${list}/${current + 1}`, { scroll: true })
        }
        disabled={current === total}
      >
        Next
      </button>
      <button
        type="button"
        onClick={() =>
          router.push(`/movies/${list}/${total}`, { scroll: true })
        }
        disabled={current === total}
      >
        Last
      </button>
    </>
  )
}
