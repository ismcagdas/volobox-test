import { useState } from 'react'
import restaurants from '../data/restaurants'
import ratingLabel, { ratingColor, ratingTextColor } from '../ratingLabel'

const FALLBACK_IMAGE =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="250">' +
      '<rect width="100%" height="100%" fill="#e5e4e7"/>' +
      '<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" ' +
      'font-family="sans-serif" font-size="18" fill="#6b6375">No image available</text>' +
      '</svg>',
  )

function RestaurantList() {
  const [onlyTopRated, setOnlyTopRated] = useState(false)
  const visibleRestaurants = onlyTopRated
    ? restaurants.filter((restaurant) => restaurant.rating >= 4.5)
    : restaurants

  return (
    <div className="hotel-page">
      <section className="hotel-list-section">
        <div className="hotel-list-head">
          <h1 className="hotel-list-title">
            Restaurants: <span>{visibleRestaurants.length} restaurants found</span>
          </h1>
          <label>
            <input
              type="checkbox"
              checked={onlyTopRated}
              onChange={(event) => setOnlyTopRated(event.target.checked)}
            />{' '}
            Sadece 4.5 ve üzeri
          </label>
        </div>

        <ul className="hotel-list">
          {visibleRestaurants.map((restaurant) => (
            <li key={restaurant.id} className="hotel-card">
              <div className="hotel-card__link">
                <div className="hotel-card__media">
                  <img
                    className="hotel-card__image hotel-card__image--fixed"
                    src={restaurant.imageUrl}
                    alt={restaurant.name}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.onerror = null
                      event.currentTarget.src = FALLBACK_IMAGE
                    }}
                  />
                </div>
                <div className="hotel-card__body">
                  <h3 className="hotel-card__name">{restaurant.name}</h3>
                  <p className="hotel-card__city">{restaurant.city}</p>
                  <p className="hotel-card__description">{restaurant.description}</p>
                  <ul className="hotel-card__tags">
                    <li className="hotel-card__tag">{restaurant.cuisine}</li>
                    <li className="hotel-card__tag">{restaurant.priceRange}</li>
                  </ul>
                </div>
                <div className="hotel-card__aside">
                  <div className="hotel-card__score">
                    <span className="hotel-card__score-text">
                      <span className="hotel-card__score-word">{ratingLabel(restaurant.rating)}</span>
                    </span>
                    <span
                      className="hotel-card__score-badge"
                      style={{
                        background: ratingColor(restaurant.rating),
                        color: ratingTextColor(restaurant.rating),
                      }}
                    >
                      {restaurant.rating.toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default RestaurantList
