import { useMemo, useState } from 'react'
import hotels from '../data/hotels'
import HotelCard from './HotelCard'

const RATING_OPTIONS = [
  { label: 'Any rating', value: 0 },
  { label: '4.0+', value: 4 },
  { label: '4.5+', value: 4.5 },
]

function HotelList() {
  const [query, setQuery] = useState('')
  const [selectedCities, setSelectedCities] = useState([])
  const [minRating, setMinRating] = useState(0)

  const cities = useMemo(() => Array.from(new Set(hotels.map((hotel) => hotel.city))).sort(), [])
  const highestPrice = useMemo(() => Math.max(...hotels.map((hotel) => hotel.pricePerNight)), [])
  const [maxPrice, setMaxPrice] = useState(highestPrice)

  const trimmedQuery = query.trim().toLowerCase()
  const filteredHotels = hotels.filter((hotel) => {
    if (trimmedQuery && !hotel.name.toLowerCase().includes(trimmedQuery)) return false
    if (selectedCities.length > 0 && !selectedCities.includes(hotel.city)) return false
    if (hotel.pricePerNight > maxPrice) return false
    if (hotel.rating < minRating) return false
    return true
  })

  const toggleCity = (city) => {
    setSelectedCities((prev) =>
      prev.includes(city) ? prev.filter((item) => item !== city) : [...prev, city],
    )
  }

  const hasActiveFilters =
    query !== '' || selectedCities.length > 0 || maxPrice !== highestPrice || minRating !== 0

  const resetFilters = () => {
    setQuery('')
    setSelectedCities([])
    setMaxPrice(highestPrice)
    setMinRating(0)
  }

  return (
    <div className="hotel-page">
      <aside className="hotel-filters">
        <div className="hotel-filters__header">
          <h2>Filters</h2>
          {hasActiveFilters && (
            <button type="button" className="hotel-filters__reset" onClick={resetFilters}>
              Clear all
            </button>
          )}
        </div>

        <div className="hotel-filters__group">
          <h3 className="hotel-filters__title">Destination</h3>
          <div className="hotel-filters__options">
            {cities.map((city) => (
              <label key={city} className="hotel-filters__checkbox">
                <input
                  type="checkbox"
                  checked={selectedCities.includes(city)}
                  onChange={() => toggleCity(city)}
                />
                {city}
              </label>
            ))}
          </div>
        </div>

        <div className="hotel-filters__group">
          <h3 className="hotel-filters__title">Max price per night</h3>
          <input
            type="range"
            min={0}
            max={highestPrice}
            value={maxPrice}
            onChange={(event) => setMaxPrice(Number(event.target.value))}
            className="hotel-filters__range"
          />
          <p className="hotel-filters__range-value">Up to ${maxPrice}</p>
        </div>

        <div className="hotel-filters__group">
          <h3 className="hotel-filters__title">Minimum rating</h3>
          <div className="hotel-filters__options">
            {RATING_OPTIONS.map((option) => (
              <label key={option.value} className="hotel-filters__checkbox">
                <input
                  type="radio"
                  name="minRating"
                  checked={minRating === option.value}
                  onChange={() => setMinRating(option.value)}
                />
                {option.label}
              </label>
            ))}
          </div>
        </div>
      </aside>

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
          <p className="hotel-list-empty">No hotels match your filters.</p>
        )}
      </section>
    </div>
  )
}

export default HotelList
