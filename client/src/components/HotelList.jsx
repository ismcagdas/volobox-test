import { useMemo, useState } from 'react'
import hotels from '../data/hotels'
import HotelCard from './HotelCard'
import HotelFilters from './HotelFilters'

const INITIAL_FILTERS = {
  searchText: '',
  starRating: '',
  minPrice: '',
  maxPrice: '',
}

function matchesSearchText(hotel, searchText) {
  if (!searchText.trim()) return true
  const needle = searchText.trim().toLowerCase()
  return (
    hotel.name.toLowerCase().includes(needle) || hotel.city.toLowerCase().includes(needle)
  )
}

function matchesStarRating(hotel, starRating) {
  if (!starRating) return true
  const roundedRating = Math.round(Number(hotel.rating) || 0)
  return roundedRating === Number(starRating)
}

function matchesPriceRange(hotel, minPrice, maxPrice) {
  const price = Number(hotel.pricePerNight)
  if (minPrice !== '' && price < Number(minPrice)) return false
  if (maxPrice !== '' && price > Number(maxPrice)) return false
  return true
}

function HotelList() {
  const [searchText, setSearchText] = useState(INITIAL_FILTERS.searchText)
  const [starRating, setStarRating] = useState(INITIAL_FILTERS.starRating)
  const [minPrice, setMinPrice] = useState(INITIAL_FILTERS.minPrice)
  const [maxPrice, setMaxPrice] = useState(INITIAL_FILTERS.maxPrice)

  const filteredHotels = useMemo(() => {
    return hotels.filter(
      (hotel) =>
        matchesSearchText(hotel, searchText) &&
        matchesStarRating(hotel, starRating) &&
        matchesPriceRange(hotel, minPrice, maxPrice),
    )
  }, [searchText, starRating, minPrice, maxPrice])

  const handleClear = () => {
    setSearchText(INITIAL_FILTERS.searchText)
    setStarRating(INITIAL_FILTERS.starRating)
    setMinPrice(INITIAL_FILTERS.minPrice)
    setMaxPrice(INITIAL_FILTERS.maxPrice)
  }

  return (
    <section className="hotel-list-section">
      <h1>Hotels</h1>
      <HotelFilters
        searchText={searchText}
        onSearchTextChange={setSearchText}
        starRating={starRating}
        onStarRatingChange={setStarRating}
        minPrice={minPrice}
        onMinPriceChange={setMinPrice}
        maxPrice={maxPrice}
        onMaxPriceChange={setMaxPrice}
        onClear={handleClear}
      />
      <p className="hotel-list-subtitle">{filteredHotels.length} hotels found</p>
      <div className="hotel-list-results">
        {filteredHotels.length > 0 ? (
          <ul className="hotel-list">
            {filteredHotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </ul>
        ) : (
          <p className="hotel-list-empty">No hotels match your filters. Try adjusting your search or filters.</p>
        )}
      </div>
    </section>
  )
}

export default HotelList
