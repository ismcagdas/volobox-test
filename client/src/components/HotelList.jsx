import { useMemo, useState } from 'react'
import hotels from '../data/hotels'
import useFavourites from '../hooks/useFavourites'
import HotelCard from './HotelCard'

function HotelList() {
  const [filter, setFilter] = useState('all')
  const { isFavourite, toggleFavourite, favouriteCount } = useFavourites()

  const visibleHotels = useMemo(
    () => (filter === 'favourites' ? hotels.filter((hotel) => isFavourite(hotel.id)) : hotels),
    [filter, isFavourite],
  )

  return (
    <section className="hotel-list-section">
      <h1>Hotels</h1>
      <div className="hotel-list-filter" role="group" aria-label="Filter hotels">
        <button
          type="button"
          className={`hotel-list-filter__button${filter === 'all' ? ' hotel-list-filter__button--active' : ''}`}
          aria-pressed={filter === 'all'}
          onClick={() => setFilter('all')}
        >
          All ({hotels.length})
        </button>
        <button
          type="button"
          className={`hotel-list-filter__button${filter === 'favourites' ? ' hotel-list-filter__button--active' : ''}`}
          aria-pressed={filter === 'favourites'}
          onClick={() => setFilter('favourites')}
        >
          Favourites ({favouriteCount})
        </button>
      </div>
      <p className="hotel-list-subtitle">
        {filter === 'favourites'
          ? `${visibleHotels.length} favourite hotels`
          : `${hotels.length} hotels found`}
      </p>
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
