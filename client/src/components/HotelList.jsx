import { useMemo, useState } from 'react'
import hotels from '../data/hotels'
import useFavourites from '../hooks/useFavourites'
import HotelCard from './HotelCard'

function HotelList() {
  const { favouriteIds, isFavourite, toggleFavourite } = useFavourites()
  const [showFavouritesOnly, setShowFavouritesOnly] = useState(false)

  const visibleHotels = useMemo(() => {
    if (!showFavouritesOnly) return hotels
    return hotels.filter((hotel) => favouriteIds.has(hotel.id))
  }, [showFavouritesOnly, favouriteIds])

  return (
    <section className="hotel-list-section">
      <h1>Hotels</h1>
      <p className="hotel-list-subtitle">{hotels.length} hotels found</p>

      <div className="hotel-filter" role="group" aria-label="Filter hotels">
        <button
          type="button"
          className={`hotel-filter__button${!showFavouritesOnly ? ' hotel-filter__button--active' : ''}`}
          aria-pressed={!showFavouritesOnly}
          onClick={() => setShowFavouritesOnly(false)}
        >
          All ({hotels.length})
        </button>
        <button
          type="button"
          className={`hotel-filter__button${showFavouritesOnly ? ' hotel-filter__button--active' : ''}`}
          aria-pressed={showFavouritesOnly}
          onClick={() => setShowFavouritesOnly(true)}
        >
          Favourites ({favouriteIds.size})
        </button>
      </div>

      {visibleHotels.length === 0 ? (
        <p className="hotel-list-empty">No favourites yet</p>
      ) : (
        <ul className="hotel-list">
          {visibleHotels.map((hotel) => (
            <HotelCard
              key={hotel.id}
              hotel={hotel}
              isFavourite={isFavourite(hotel.id)}
              onToggleFavourite={toggleFavourite}
            />
          ))}
        </ul>
      )}
    </section>
  )
}

export default HotelList
