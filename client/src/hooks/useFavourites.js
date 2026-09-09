import { useCallback, useEffect, useMemo, useState } from 'react'

const STORAGE_KEY = 'volobox:favourite-hotel-ids'

function readStoredFavourites() {
  if (typeof window === 'undefined') {
    return []
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      return []
    }

    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) {
      return []
    }

    return parsed.filter((id) => typeof id === 'number' || typeof id === 'string')
  } catch {
    return []
  }
}

function writeStoredFavourites(ids) {
  if (typeof window === 'undefined') {
    return
  }

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids))
  } catch {
    // Storage may be unavailable (e.g. disabled/private mode). Ignore.
  }
}

/**
 * Manages the set of favourite hotel ids, persisted to localStorage so they
 * survive page reloads. Reading a missing or malformed stored value never
 * throws and simply falls back to an empty list of favourites.
 */
function useFavourites() {
  const [favouriteIds, setFavouriteIds] = useState(() => readStoredFavourites())

  useEffect(() => {
    writeStoredFavourites(favouriteIds)
  }, [favouriteIds])

  const isFavourite = useCallback((id) => favouriteIds.includes(id), [favouriteIds])

  const toggleFavourite = useCallback((id) => {
    setFavouriteIds((current) =>
      current.includes(id) ? current.filter((favouriteId) => favouriteId !== id) : [...current, id],
    )
  }, [])

  return useMemo(
    () => ({
      favouriteIds,
      favouriteCount: favouriteIds.length,
      isFavourite,
      toggleFavourite,
    }),
    [favouriteIds, isFavourite, toggleFavourite],
  )
}

export default useFavourites
