import restaurants from '../data/restaurants'
import ratingLabel, { ratingColor, ratingTextColor } from '../ratingLabel'

// Country is the part of `city` after the first comma ('New York, USA' -> 'USA').
// Returns '' when there is no comma.
function countryOf(city) {
  const index = city.indexOf(',')
  return index === -1 ? '' : city.slice(index + 1).trim()
}

function RestaurantList() {
  return (
    <div className="hotel-page">
      <section className="hotel-list-section">
        <div className="hotel-list-head">
          <h1 className="hotel-list-title">
            Restaurants: <span>{restaurants.length} restaurants found</span>
          </h1>
        </div>

        <ul className="hotel-list">
          {restaurants.map((restaurant) => (
            <li key={restaurant.id} className="hotel-card">
              <div className="hotel-card__link hotel-card__link--restaurant">
                <div className="hotel-card__body">
                  <h3 className="hotel-card__name">{restaurant.name}</h3>
                  <p className="hotel-card__city">{restaurant.city}</p>
                  <p className="hotel-card__description">{restaurant.description}</p>
                  <ul className="hotel-card__tags">
                    <li className="hotel-card__tag">{restaurant.cuisine}</li>
                    <li className="hotel-card__tag">{restaurant.priceRange}</li>
                    {countryOf(restaurant.city) && (
                      <li className="hotel-card__tag">{countryOf(restaurant.city)}</li>
                    )}
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
