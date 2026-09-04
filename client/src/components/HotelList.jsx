import { useMemo, useState } from 'react'
import hotels from '../data/hotels'
import HotelCard from './HotelCard'

// Normalizes a string for case-insensitive, diacritic-insensitive matching.
// Using Unicode NFD decomposition + stripping combining marks lets queries
// like "ist" match "İstanbul" without the Turkish-locale side effect of
// turning plain "I" into "ı" (which would break matches like "island").
function normalize(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
}

function HotelList() {
  const [query, setQuery] = useState('')

  const filteredHotels = useMemo(() => {
    const normalizedQuery = normalize(query.trim())
    if (!normalizedQuery) return hotels
    return hotels.filter(
      (hotel) =>
        normalize(hotel.name).includes(normalizedQuery) ||
        normalize(hotel.city).includes(normalizedQuery),
    )
  }, [query])

  return (
    <section className="hotel-list-section">
      <h1>Hotels</h1>
      <div className="hotel-search">
        <label className="hotel-search__label" htmlFor="hotel-search-input">
          Search by hotel name or city
        </label>
        <input
          id="hotel-search-input"
          type="search"
          className="hotel-search__input"
          placeholder="Search by hotel name or city"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      <p className="hotel-list-subtitle">{filteredHotels.length} hotels found</p>
      {filteredHotels.length === 0 ? (
        <p className="hotel-list-empty" role="status">
          No hotels match "{query}". Try a different name or city.
        </p>
      ) : (
        <ul className="hotel-list">
          {filteredHotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </ul>
      )}
    </section>
  )
}

export default HotelList
