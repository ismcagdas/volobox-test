import { useState } from 'react'
import hotels from '../data/hotels'
import HotelCard from './HotelCard'

function HotelList() {
  const [query, setQuery] = useState('')

  const trimmedQuery = query.trim().toLowerCase()
  const filteredHotels = trimmedQuery
    ? hotels.filter((hotel) => hotel.name.toLowerCase().includes(trimmedQuery))
    : hotels

  return (
    <section className="hotel-list-section">
      <h1>Hotels</h1>
      <div className="hotel-search">
        <label className="hotel-search__label" htmlFor="hotel-search-input">
          Search hotels by name
        </label>
        <input
          id="hotel-search-input"
          type="text"
          className="hotel-search__input"
          placeholder="Search hotels by name..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      <p className="hotel-list-subtitle">{filteredHotels.length} hotels found</p>
      {filteredHotels.length > 0 ? (
        <ul className="hotel-list">
          {filteredHotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </ul>
      ) : (
        <p className="hotel-list-empty">No hotels match your search.</p>
      )}
    </section>
  )
}

export default HotelList
