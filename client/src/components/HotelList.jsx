import { useMemo, useState } from 'react'
import hotels from '../data/hotels'
import HotelCard from './HotelCard'
import HotelFilters from './HotelFilters'

const priceBounds = {
  min: Math.min(...hotels.map((hotel) => hotel.pricePerNight)),
  max: Math.max(...hotels.map((hotel) => hotel.pricePerNight)),
}

function HotelList() {
  const [query, setQuery] = useState('')
  const [minRating, setMinRating] = useState(0)
  const [maxPrice, setMaxPrice] = useState(priceBounds.max)

  const trimmedQuery = query.trim().toLowerCase()

  const filteredHotels = useMemo(
    () =>
      hotels.filter((hotel) => {
        const matchesQuery = trimmedQuery
          ? hotel.name.toLowerCase().includes(trimmedQuery)
          : true
        const matchesRating = hotel.rating >= minRating
        const matchesPrice = hotel.pricePerNight <= maxPrice
        return matchesQuery && matchesRating && matchesPrice
      }),
    [trimmedQuery, minRating, maxPrice],
  )

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
      <div className="hotel-list-layout">
        <HotelFilters
          minRating={minRating}
          onMinRatingChange={setMinRating}
          maxPrice={maxPrice}
          priceBounds={priceBounds}
          onMaxPriceChange={setMaxPrice}
        />
        <div className="hotel-list-content">
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
        </div>
      </div>
    </section>
  )
}

export default HotelList
