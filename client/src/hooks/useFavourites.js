import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'volobox.favouriteHotels'

function readStoredFavourites() {
  if (typeof window === 'undefined') return []

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []

    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []

    return parsed.filter((id) => typeof id === 'number' || typeof id === 'string')
  } catch {
    return []
  }
}

function writeStoredFavourites(ids) {
  if (typeof window === 'undefined') return

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids))
  } catch {
    // Storage may be unavailable (e.g. disabled/full); ignore silently.
  }
}

function useFavourites() {
  const [favouriteIds, setFavouriteIds] = useState(() => new Set(readStoredFavourites()))

  useEffect(() => {
    writeStoredFavourites(Array.from(favouriteIds))
  }, [favouriteIds])

  const isFavourite = useCallback((id) => favouriteIds.has(id), [favouriteIds])

  const toggleFavourite = useCallback((id) => {
    setFavouriteIds((current) => {
      const next = new Set(current)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }, [])

  return { favouriteIds, isFavourite, toggleFavourite }
}

export default useFavourites
