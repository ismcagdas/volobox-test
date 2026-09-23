import { useMemo, useState } from 'react'
import hotels from '../data/hotels'
import HotelCard from './HotelCard'

const RATING_OPTIONS = [
  { label: 'Any rating', value: 0 },
  { label: 'Good: 4.0+', value: 4 },
  { label: 'Wonderful: 4.5+', value: 4.5 },
]

const SORT_OPTIONS = [
  { label: 'Our top picks', value: 'top' },
  { label: 'Price (lowest first)', value: 'price-asc' },
  { label: 'Price (highest first)', value: 'price-desc' },
  { label: 'Best reviewed', value: 'rating' },
]

const sorters = {
  top: () => 0,
  'price-asc': (a, b) => a.pricePerNight - b.pricePerNight,
  'price-desc': (a, b) => b.pricePerNight - a.pricePerNight,
  rating: (a, b) => b.rating - a.rating,
}

function HotelList() {
  const [query, setQuery] = useState('')
  const [selectedCities, setSelectedCities] = useState([])
  const [minRating, setMinRating] = useState(0)
  const [sortBy, setSortBy] = useState('top')

  const cities = useMemo(() => Array.from(new Set(hotels.map((hotel) => hotel.city))).sort(), [])
  const highestPrice = useMemo(() => Math.max(...hotels.map((hotel) => hotel.pricePerNight)), [])
  const [maxPrice, setMaxPrice] = useState(highestPrice)

  const trimmedQuery = query.trim().toLowerCase()
  const filteredHotels = hotels
    .filter((hotel) => {
      if (trimmedQuery && !hotel.name.toLowerCase().includes(trimmedQuery)) return false
      if (selectedCities.length > 0 && !selectedCities.includes(hotel.city)) return false
      if (hotel.pricePerNight > maxPrice) return false
      if (hotel.rating < minRating) return false
      return true
    })
    .sort(sorters[sortBy])

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

  const countFor = (city) => hotels.filter((hotel) => hotel.city === city).length

  return (
    <>
      <section className="hero">
        <div className="hero__inner">
          <h1 className="hero__title">Find your next stay</h1>
          <p className="hero__subtitle">Search low prices on hotels, apartments and much more…</p>
          <div className="searchbar">
            <label className="searchbar__field" htmlFor="hotel-search-input">
              <span className="searchbar__icon" aria-hidden="true">
                🛏
              </span>
              <input
                id="hotel-search-input"
                type="text"
                className="searchbar__input"
                placeholder="Where are you going?"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </label>
            <button type="button" className="searchbar__submit">
              Search
            </button>
          </div>
        </div>
      </section>

      <div className="hotel-page">
        <aside className="hotel-filters">
          <div className="hotel-filters__header">
            <h2 className="hotel-filters__heading">Filter by:</h2>
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
                  <span className="hotel-filters__label">{city}</span>
                  <span className="hotel-filters__count">{countFor(city)}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="hotel-filters__group">
            <h3 className="hotel-filters__title">Your budget (per night)</h3>
            <input
              type="range"
              min={0}
              max={highestPrice}
              value={maxPrice}
              onChange={(event) => setMaxPrice(Number(event.target.value))}
              className="hotel-filters__range"
            />
            <p className="hotel-filters__range-value">
              US$0 – <strong>US${maxPrice}</strong>
            </p>
          </div>

          <div className="hotel-filters__group">
            <h3 className="hotel-filters__title">Property rating</h3>
            <div className="hotel-filters__options">
              {RATING_OPTIONS.map((option) => (
                <label key={option.value} className="hotel-filters__checkbox">
                  <input
                    type="radio"
                    name="minRating"
                    checked={minRating === option.value}
                    onChange={() => setMinRating(option.value)}
                  />
                  <span className="hotel-filters__label">{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        <section className="hotel-list-section">
          <div className="hotel-list-head">
            <h1 className="hotel-list-title">
              Stays: <span>{filteredHotels.length} properties found</span>
            </h1>
          </div>

          <div className="sortbar" role="tablist" aria-label="Sort results">
            <span className="sortbar__label">Sort by:</span>
            {SORT_OPTIONS.map((option) => (
              <button
                key={option.value}
                type="button"
                role="tab"
                aria-selected={sortBy === option.value}
                className={
                  'sortbar__tab' + (sortBy === option.value ? ' sortbar__tab--active' : '')
                }
                onClick={() => setSortBy(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>

          {filteredHotels.length > 0 ? (
            <ul className="hotel-list">
              {filteredHotels.map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
            </ul>
          ) : (
            <p className="hotel-list-empty">No properties match your filters.</p>
          )}
        </section>
      </div>
    </>
  )
}

export default HotelList
