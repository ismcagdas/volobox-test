import { useMemo, useState } from 'react'
import hotels from '../data/hotels'
import HotelCard from './HotelCard'
import HotelFilters from './HotelFilters'
import HotelMap from './HotelMap'

const priceBounds = {
  min: Math.min(...hotels.map((hotel) => hotel.pricePerNight)),
  max: Math.max(...hotels.map((hotel) => hotel.pricePerNight)),
}

function HotelList() {
  const [query, setQuery] = useState('')
  const [minRating, setMinRating] = useState(0)
  const [maxPrice, setMaxPrice] = useState(priceBounds.max)
  const [viewMode, setViewMode] = useState('list')

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
          <div className="hotel-list-toolbar">
            <p className="hotel-list-subtitle">{filteredHotels.length} hotels found</p>
            <div className="hotel-view-switch" role="group" aria-label="View mode">
              <button
                type="button"
                className={`hotel-view-switch__button${viewMode === 'list' ? ' hotel-view-switch__button--active' : ''}`}
                onClick={() => setViewMode('list')}
                aria-pressed={viewMode === 'list'}
              >
                List
              </button>
              <button
                type="button"
                className={`hotel-view-switch__button${viewMode === 'map' ? ' hotel-view-switch__button--active' : ''}`}
                onClick={() => setViewMode('map')}
                aria-pressed={viewMode === 'map'}
              >
                Map
              </button>
            </div>
          </div>
          {filteredHotels.length > 0 ? (
            viewMode === 'list' ? (
              <ul className="hotel-list">
                {filteredHotels.map((hotel) => (
                  <HotelCard key={hotel.id} hotel={hotel} />
                ))}
              </ul>
            ) : (
              <HotelMap hotels={filteredHotels} />
            )
          ) : (
            <p className="hotel-list-empty">No hotels match your search.</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default HotelList
