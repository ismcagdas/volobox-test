import { useState } from 'react'
import hotels from '../data/hotels'
import HotelCard from './HotelCard'

function HotelList() {
  const [query, setQuery] = useState('')

  // Trimmed, lowercase query for case-insensitive matching
  const normalizedQuery = query.trim().toLowerCase()

  // Filter hotels by name matching the query substring
  const filteredHotels = hotels.filter((hotel) =>
    hotel.name.toLowerCase().includes(normalizedQuery)
  )

  return (
    <section className="hotel-list-section">
      <h1>Hotels</h1>

      {/* Search input with label for accessibility */}
      <label htmlFor="search" className="visually-hidden">Search hotels by name</label>
      <input
        id="search"
        type="text"
        placeholder="Search hotels..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search hotels by name"
      />

      <p className="hotel-list-subtitle">{filteredHotels.length} hotels found</p>

      {filteredHotels.length === 0 ? (
        <p>No hotels match your search.</p>
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
