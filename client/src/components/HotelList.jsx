import { useMemo, useRef, useState } from 'react'
import hotels from '../data/hotels'
import HotelCard from './HotelCard'
import useDebouncedValue from '../hooks/useDebouncedValue'

const DEBOUNCE_MS = 300

function HotelList() {
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebouncedValue(query, DEBOUNCE_MS)
  const inputRef = useRef(null)

  // When the input is emptied (e.g. via the clear button), reset to the
  // full list immediately instead of waiting for the debounce to catch up.
  // Any non-empty query still filters using the debounced value so typing
  // doesn't re-render the list on every keystroke.
  const isQueryEmpty = query.trim() === ''

  const filteredHotels = useMemo(() => {
    if (isQueryEmpty) return hotels
    const normalizedQuery = debouncedQuery.trim().toLowerCase()
    if (!normalizedQuery) return hotels
    return hotels.filter((hotel) => hotel.name.toLowerCase().includes(normalizedQuery))
  }, [isQueryEmpty, debouncedQuery])

  const handleClear = () => {
    setQuery('')
    inputRef.current?.focus()
  }

  return (
    <section className="hotel-list-section">
      <h1>Hotels</h1>
      <div className="hotel-search">
        <label className="hotel-search__label" htmlFor="hotel-search-input">
          Search hotels by name
        </label>
        <div className="hotel-search__field">
          <input
            id="hotel-search-input"
            ref={inputRef}
            type="text"
            className="hotel-search__input"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            autoComplete="off"
          />
          {query && (
            <button
              type="button"
              className="hotel-search__clear"
              aria-label="Clear search"
              onClick={handleClear}
            >
              ×
            </button>
          )}
        </div>
      </div>
      <p className="hotel-list-subtitle" role="status" aria-live="polite">
        {filteredHotels.length} hotel{filteredHotels.length === 1 ? '' : 's'} found
      </p>
      {filteredHotels.length > 0 ? (
        <ul className="hotel-list">
          {filteredHotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </ul>
      ) : (
        <p className="hotel-list-empty">No hotels match &quot;{debouncedQuery}&quot;</p>
      )}
    </section>
  )
}

export default HotelList
