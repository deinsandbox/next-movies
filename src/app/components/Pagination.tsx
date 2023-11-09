'use client'

import { useRouter } from 'next/navigation'

export const Pagination = ({
  current,
  total,
}: {
  current: number
  total: number
}) => {
  const router = useRouter()

  return (
    <>
      <button
        type="button"
        onClick={() => router.push(`/movies/1`, { scroll: true })}
        disabled={current === 1}
      >
        First
      </button>
      <button
        type="button"
        onClick={() => router.push(`/movies/${current - 1}`, { scroll: true })}
        disabled={current === 1}
      >
        Prev
      </button>
      <span>
        {current}/{total}
      </span>
      <button
        type="button"
        onClick={() => router.push(`/movies/${current + 1}`, { scroll: true })}
        disabled={current === total}
      >
        Next
      </button>
      <button
        type="button"
        onClick={() => router.push(`/movies/${total}`, { scroll: true })}
        disabled={current === total}
      >
        Last
      </button>
    </>
  )
}
